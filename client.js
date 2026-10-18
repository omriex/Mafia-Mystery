document.addEventListener('contextmenu', event => event.preventDefault());

let ws           = null;
let myId         = null;
let myName       = 'Player???';      
let isOwner      = false;          
let serverPlayers = {};        
let serverItems   = [];

const canvas = document.getElementById('gameCanvas');
const ctx    = canvas.getContext('2d', { alpha: false });

const LOGICAL_WIDTH  = 1280;
const LOGICAL_HEIGHT = 720;

const WORLD = {
    MAP: {
        tileSize: 64, chunkSize: 1024,
        columns: 0, rows: 0,
        tilesetCols: 0, layers: [],
        bgChunks: [], fgChunks: []
    },
    CAMERA: { x: null, y: null, width: LOGICAL_WIDTH, height: LOGICAL_HEIGHT },
    INPUTS: {
        keys: { w: false, a: false, s: false, d: false, shift: false,
                arrowup: false, arrowleft: false, arrowdown: false, arrowright: false },
        mouseX: 0, mouseY: 0, isMouseDown: false
    },
    EDITOR: { enabled: false, selectedTileGid: 1, selectedLayer: 'background' },
    SYSTEM: { viewScale: 1, assetsLoaded: 0, isReady: false, lastTime: performance.now() },
    INVENTORY:          [null, null, null, null, null],
    INVENTORY_SELECTED: 0,
    INVENTORY_LAST_EQUIPPED: null,
    NEAREST_ITEM: null
};

const ME = {
    x: 0, y: 0,
    width: 45, height: 45,
    vx: 0, vy: 0,
    angle: 0, scale: 1, bopTimer: 0,
    chats: []
};

// ─── MAFIA GAME STATE ────────────────────────────────────────────────────────
const MAFIA = {
    phase:       null,   // null | 'lobby' | 'night' | 'day' | 'ended'
    phaseNum:    0,
    myRole:      null,   // 'Investigator' | 'Tracker' | 'Doctor' | 'Archer' | 'Escort' | 'Vigilante' | 'Skinwalker' | 'Celebrity' | null
    myTeam:      null,   // 'Town' | 'Mafia' | 'Neutral'
    alive:       true,
    myWill:      '',
    abilityUsed: false,
    abilityTarget: null,
    nightResults: [],   // strings shown at start of day
    voteTarget:  null,
    votes:       {},    // playerId -> targetId
    players:     {},    // id -> { name, alive, role (revealed on death), will (revealed on death) }
    mafiaChat:   [],    // for skinwalker / mafia: shared night chat msgs
    celebrity:   null,  // { killerId, letter } revealed on death
    guilt:       false, // vigilante guilt flag
    winner:      null,
    showWill:    false,
    showRole:    false,
    abilityLog:  [],    // tracker log: [ {night, visited} ]
    skinwalkedRole: null, // what skinwalker transformed into this night
};

// ─── HOUSE / INTERIOR STATE ──────────────────────────────────────────────────
const HOUSES = {
    list:       [],   // [ { id, doorCol, doorRow, interiorMap: {layers,columns,rows} } ]
    myHouseId:  null, // null = outdoors
    breakTarget: null // house id mafia is breaking into
};

const tilesheetImg = new Image();
const playerImg    = new Image();

let dragIndex = -1;
const dragGhost = document.createElement('div');
dragGhost.id = 'drag-ghost';
document.body.appendChild(dragGhost);

window.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('play-btn');
    
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            const nameInp = document.getElementById('username-input').value.trim();
            myName = nameInp || 'Player' + Math.floor(Math.random() * 1000);
            document.getElementById('main-menu-ui').style.display = 'none';
            connectToServer();
        });
    } else {
        console.warn("⚠️ Play button not found! Your browser is loading an old cached version of index.html. Auto-connecting instead...");
        connectToServer();
    }
    
    loadImages();
});

function connectToServer() {
    const _pageToken = new URLSearchParams(window.location.search).get('token') || '';
    const _params = new URLSearchParams();
    if (_pageToken) _params.set('token', _pageToken);
    
    const _wsURL = 'wss://faster-conjoined-angling.ngrok-free.dev/?' + _params.toString();
    
    ws = new WebSocket(_wsURL);

    ws.onopen = () => {
        console.log('[ws] connected');
        ws.send(JSON.stringify({ type: 'join', name: myName, token: _pageToken }));
    };

    window.addEventListener('beforeunload', () => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type: 'leave' }));
        }
    });

    ws.onclose = (e) => {
        if (e.code === 4001) {
            document.body.innerHTML = '<div style="position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe UI;font-size:24px;font-weight:bold;">You have been kicked.</div>';
        } else if (e.code === 4002 || e.code === 4003) {
            document.body.innerHTML = '<div style="position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe UI;font-size:24px;font-weight:bold;">You have been banned.</div>';
        }
    };

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.type === 'init') {
            myId    = data.id;
            isOwner = data.isOwner || false;
            myName  = data.name || myName;

            WORLD.MAP.tileSize = data.map.tileSize;
            WORLD.MAP.columns  = data.map.columns;
            WORLD.MAP.rows     = data.map.rows;
            WORLD.MAP.layers   = data.map.layers;

            preRenderMap();

            ME.x = (WORLD.MAP.columns * WORLD.MAP.tileSize) / 2;
            ME.y = (WORLD.MAP.rows    * WORLD.MAP.tileSize) / 2;

            if (isOwner) {
                document.getElementById('editor-ui').style.display = 'flex';
                initEditorUI();
            }

            document.getElementById('leaderboard-ui').style.display = 'flex';
            document.getElementById('bottom-ui').style.display = 'flex';

            WORLD.SYSTEM.lastTime = performance.now();
            WORLD.SYSTEM.isReady  = true;
            updateLeaderboard();
            requestAnimationFrame(gameLoop);

        } else if (data.type === 'state') {
            const next = {};
            for (const id in data.players) {
                if (parseInt(id) === myId) continue;
                const incoming = data.players[id];
                const existing = serverPlayers[id];
                if (existing) {
                    Object.assign(existing, incoming);
                    next[id] = existing;
                } else {
                    next[id] = { ...incoming, renderX: incoming.x, renderY: incoming.y, renderAngle: incoming.angle || 0 };
                }
            }
            serverPlayers = next;

            const nextItems = [];
            for (const incoming of data.items) {
                const existing = serverItems.find(i => i.id === incoming.id);
                if (existing) {
                    Object.assign(existing, incoming);
                    nextItems.push(existing);
                } else {
                    nextItems.push({ ...incoming, renderX: incoming.x, renderY: incoming.y });
                }
            }
            serverItems = nextItems;

            if (data.players[myId]) {
                WORLD.INVENTORY          = data.players[myId].inventory;
                WORLD.INVENTORY_SELECTED = data.players[myId].inventorySelected;
                ME.chats                 = data.players[myId].chats || [];
                if (data.players[myId].name) myName = data.players[myId].name;
                renderInventory();
                updateLeaderboard();
            }

        } else if (data.type === 'map_update') {
            const layer = WORLD.MAP.layers.find(l => l.name === data.layer);
            if (layer) {
                layer.data[data.row * WORLD.MAP.columns + data.col] = data.gid;
                const cx = Math.floor((data.col * WORLD.MAP.tileSize) / WORLD.MAP.chunkSize);
                const cy = Math.floor((data.row * WORLD.MAP.tileSize) / WORLD.MAP.chunkSize);
                renderChunk(cx, cy);
            }

        // ── MAFIA MESSAGES ──────────────────────────────────────────────────
        } else if (data.type === 'mafia_role') {
            // Server tells you your role at game start
            MAFIA.myRole  = data.role;
            MAFIA.myTeam  = data.team;
            MAFIA.alive   = true;
            MAFIA.guilt   = false;
            MAFIA.abilityUsed = false;
            MAFIA.abilityLog  = [];
            showRoleCard(data.role, data.team, data.flavor);

        } else if (data.type === 'mafia_phase') {
            // { phase: 'night'|'day'|'lobby'|'ended', phaseNum, announcements: [], votes: {}, winner }
            MAFIA.phase    = data.phase;
            MAFIA.phaseNum = data.phaseNum || 0;
            MAFIA.votes    = data.votes || {};
            MAFIA.abilityUsed   = false;
            MAFIA.abilityTarget = null;
            MAFIA.voteTarget    = null;
            if (data.winner) MAFIA.winner = data.winner;
            renderPhaseUI(data.phase, data.announcements || []);

        } else if (data.type === 'mafia_players') {
            // Full player list with alive status, revealed roles/wills
            for (const p of data.players) {
                MAFIA.players[p.id] = p;
            }
            renderMafiaPlayerList();
            renderVoteUI();

        } else if (data.type === 'mafia_votes') {
            MAFIA.votes = data.votes || {};
            renderVoteUI();

        } else if (data.type === 'mafia_result') {
            // Night ability result for YOU
            // data.result = string describing what you found/did
            showNightResult(data.result);
            if (data.trackerLog) MAFIA.abilityLog = data.trackerLog;

        } else if (data.type === 'mafia_death') {
            // { id, name, role, will, reason, celebrity }
            if (parseInt(data.id) === myId) {
                MAFIA.alive = false;
                if (data.guilt) MAFIA.guilt = true;
            }
            if (MAFIA.players[data.id]) {
                MAFIA.players[data.id].alive = false;
                MAFIA.players[data.id].role  = data.role;
                MAFIA.players[data.id].will  = data.will;
            }
            showDeathAnnouncement(data);
            renderMafiaPlayerList();

        } else if (data.type === 'mafia_will_ack') {
            // Server confirmed will saved — silent

        } else if (data.type === 'mafia_chat') {
            // Mafia-team night chat  { from, text }
            MAFIA.mafiaChat.push({ from: data.from, text: data.text });
            renderMafiaChat();

        } else if (data.type === 'mafia_guilt') {
            // Vigilante killed innocent — you get guilt
            MAFIA.guilt = true;
            showSystemMsg('⚠ You feel guilty... you shot an innocent. You will die tomorrow night.');

        // ── HOUSE / INTERIOR MESSAGES ────────────────────────────────────────
        } else if (data.type === 'house_list') {
            HOUSES.list = data.houses || [];

        } else if (data.type === 'house_enter') {
            // { houseId, interiorMap: { layers, columns, rows, tileSize } }
            HOUSES.myHouseId = data.houseId;
            loadInteriorMap(data.interiorMap);

        } else if (data.type === 'house_exit') {
            HOUSES.myHouseId = null;
            unloadInteriorMap();

        } else if (data.type === 'house_break') {
            // Mafia broke in — show notification
            showSystemMsg('💥 The door splinters open!');
        }
    };
}

function sendPositionUpdate() {
    if (!myId || !ws || ws.readyState !== WebSocket.OPEN) return;
    ws.send(JSON.stringify({
        type:  'position_update',
        x:     ME.x,
        y:     ME.y,
        vx:    ME.vx,
        vy:    ME.vy,
        angle: ME.angle,
        scale: ME.scale
    }));
}

function resolveCircleCollisions() {
    const scale  = ME.scale;
    const radius = (ME.width * scale) / 2;
    let pX = ME.x + ME.width  / 2;
    let pY = ME.y + ME.height / 2;

    const wallLayer = WORLD.MAP.layers.find(l => l.name === 'walls');
    if (!wallLayer) return;

    const left   = Math.floor((pX - radius) / WORLD.MAP.tileSize);
    const right  = Math.floor((pX + radius) / WORLD.MAP.tileSize);
    const top    = Math.floor((pY - radius) / WORLD.MAP.tileSize);
    const bottom = Math.floor((pY + radius) / WORLD.MAP.tileSize);

    for (let r = top; r <= bottom; r++) {
        for (let c = left; c <= right; c++) {
            if (c < 0 || c >= WORLD.MAP.columns || r < 0 || r >= WORLD.MAP.rows) continue;
            if (wallLayer.data[r * WORLD.MAP.columns + c] === 0) continue;

            const tileX = c * WORLD.MAP.tileSize;
            const tileY = r * WORLD.MAP.tileSize;

            let testX = pX < tileX ? tileX : (pX > tileX + WORLD.MAP.tileSize ? tileX + WORLD.MAP.tileSize : pX);
            let testY = pY < tileY ? tileY : (pY > tileY + WORLD.MAP.tileSize ? tileY + WORLD.MAP.tileSize : pY);

            const dX   = pX - testX;
            const dY   = pY - testY;
            const dist = Math.sqrt(dX * dX + dY * dY);

            if (dist > 0 && dist < radius) {
                const overlap = radius - dist;
                pX += (dX / dist) * overlap;
                pY += (dY / dist) * overlap;
            }
        }
    }

    ME.x = pX - ME.width  / 2;
    ME.y = pY - ME.height / 2;
}

function resolvePlayerCollisionsLocal() {
    const meR  = (ME.width * ME.scale) / 2;
    const mecx = ME.x + ME.width  / 2;
    const mecy = ME.y + ME.height / 2;

    for (const id in serverPlayers) {
        const p  = serverPlayers[id];
        const pR = (p.width * (p.scale || 1)) / 2;
        const minDist = meR + pR;

        const pcx = p.renderX + p.width  / 2;
        const pcy = p.renderY + p.height / 2;

        const dX   = mecx - pcx;
        const dY   = mecy - pcy;
        const dist = Math.sqrt(dX * dX + dY * dY);

        if (dist > 0 && dist < minDist) {
            const overlap = minDist - dist;
            const nx = dX / dist;
            const ny = dY / dist;

            ME.x += nx * (overlap / 2);
            ME.y += ny * (overlap / 2);

            const dot = ME.vx * nx + ME.vy * ny;
            if (dot < 0) {
                ME.vx -= dot * nx;
                ME.vy -= dot * ny;
            }
        }
    }
}

function update(dt) {
    const currentEquipped = WORLD.INVENTORY[WORLD.INVENTORY_SELECTED];
    WORLD.INVENTORY_LAST_EQUIPPED = currentEquipped;
    
    let inputX = 0, inputY = 0;
    if (WORLD.INPUTS.keys.w || WORLD.INPUTS.keys.arrowup)    inputY -= 1;
    if (WORLD.INPUTS.keys.s || WORLD.INPUTS.keys.arrowdown)  inputY += 1;
    if (WORLD.INPUTS.keys.a || WORLD.INPUTS.keys.arrowleft)  inputX -= 1;
    if (WORLD.INPUTS.keys.d || WORLD.INPUTS.keys.arrowright) inputX += 1;

    const isMoving = inputX !== 0 || inputY !== 0;
    if (isMoving) {
        const len = Math.sqrt(inputX * inputX + inputY * inputY);
        inputX /= len; inputY /= len;
    }

    const intentSprint = WORLD.INPUTS.keys.shift && isMoving;
    ME.bopTimer = intentSprint ? ME.bopTimer + dt : 0;
    ME.scale    = 1 + (ME.bopTimer > 0 ? Math.sin(ME.bopTimer * 15) * 0.05 : 0);

    const friction = Math.pow(0.001, dt);
    const accel    = intentSprint ? 1866 : 1493;

    ME.vx += inputX * accel * dt;
    ME.vy += inputY * accel * dt;
    ME.vx *= friction;
    ME.vy *= friction;
    ME.x  += ME.vx * dt;
    ME.y  += ME.vy * dt;

    for (let i = 0; i < 3; i++) resolveCircleCollisions();
    for (let i = 0; i < 2; i++) resolvePlayerCollisionsLocal();

    if (ME.x < 0) ME.x = 0;
    if (ME.y < 0) ME.y = 0;
    if (ME.x + ME.width  > WORLD.MAP.columns * WORLD.MAP.tileSize) ME.x = WORLD.MAP.columns * WORLD.MAP.tileSize - ME.width;
    if (ME.y + ME.height > WORLD.MAP.rows    * WORLD.MAP.tileSize) ME.y = WORLD.MAP.rows    * WORLD.MAP.tileSize - ME.height;

    const smX = WORLD.INPUTS.mouseX / WORLD.SYSTEM.viewScale;
    const smY = WORLD.INPUTS.mouseY / WORLD.SYSTEM.viewScale;
    const psX = ME.x - WORLD.CAMERA.x + ME.width  / 2;
    const psY = ME.y - WORLD.CAMERA.y + ME.height / 2;
    ME.angle  = Math.atan2(smY - psY, smX - psX) + (Math.PI / 2);

    const targetCamX = ME.x + ME.width  / 2 - WORLD.CAMERA.width  / 2;
    const targetCamY = ME.y + ME.height / 2 - WORLD.CAMERA.height / 2;
    if (WORLD.CAMERA.x === null) {
        WORLD.CAMERA.x = targetCamX;
        WORLD.CAMERA.y = targetCamY;
    } else {
        const lf = 1 - Math.exp(-dt * 40);
        WORLD.CAMERA.x += (targetCamX - WORLD.CAMERA.x) * lf;
        WORLD.CAMERA.y += (targetCamY - WORLD.CAMERA.y) * lf;
    }

    let nearestDist = Infinity;
    WORLD.NEAREST_ITEM = null;
    const px = ME.x + ME.width  / 2;
    const py = ME.y + ME.height / 2;

    serverItems.forEach(item => {
        if (item.renderX === undefined) { item.renderX = item.x; item.renderY = item.y; }
        item.renderX += (item.x - item.renderX) * 0.3;
        item.renderY += (item.y - item.renderY) * 0.3;

        if (item.animState === 'picking_up') return;
        const dist = Math.sqrt(Math.pow(item.renderX - px, 2) + Math.pow(item.renderY - py, 2));
        if (dist < 70 && dist < nearestDist) { nearestDist = dist; WORLD.NEAREST_ITEM = item; }
    });

    for (const id in serverPlayers) {
        const p = serverPlayers[id];
        if (p.renderX === undefined) { p.renderX = p.x; p.renderY = p.y; p.renderAngle = p.angle || 0; }
        p.renderX += (p.x - p.renderX) * 0.3;
        p.renderY += (p.y - p.renderY) * 0.3;
        let diff = (p.angle || 0) - p.renderAngle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff >  Math.PI) diff -= Math.PI * 2;
        p.renderAngle += diff * 0.3;
    }

    sendPositionUpdate();
}

function drawChatBubble(ctx, text, x, y) {
    ctx.font = "bold 14px 'Segoe UI'";
    const textWidth = ctx.measureText(text).width;
    const bubbleW = textWidth + 24;
    const bubbleH = 28;
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    
    ctx.beginPath();
    if (ctx.roundRect) {
        ctx.roundRect(x - bubbleW / 2, y - bubbleH, bubbleW, bubbleH, 6);
    } else {
        ctx.rect(x - bubbleW / 2, y - bubbleH, bubbleW, bubbleH);
    }
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(x - 6, y);
    ctx.lineTo(x + 6, y);
    ctx.lineTo(x, y + 6);
    ctx.fill();
    
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y - bubbleH / 2 + 1);
}

function renderChatHistory(ctx, chats, x, bottomY) {
    if (!chats || chats.length === 0) return;
    let currentY = bottomY;
    for (let i = 0; i < chats.length; i++) {
        drawChatBubble(ctx, chats[i].text, x, currentY);
        currentY -= 36;
    }
}

function render() {
    if (!WORLD.SYSTEM.isReady) return;

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(WORLD.SYSTEM.viewScale, WORLD.SYSTEM.viewScale);

    const camX = Math.round(WORLD.CAMERA.x);
    const camY = Math.round(WORLD.CAMERA.y);

    const startCX = Math.max(0, Math.floor(camX / WORLD.MAP.chunkSize));
    const endCX   = Math.min(WORLD.MAP.bgChunks[0].length - 1, Math.floor((camX + WORLD.CAMERA.width)  / WORLD.MAP.chunkSize));
    const startCY = Math.max(0, Math.floor(camY / WORLD.MAP.chunkSize));
    const endCY   = Math.min(WORLD.MAP.bgChunks.length    - 1, Math.floor((camY + WORLD.CAMERA.height) / WORLD.MAP.chunkSize));

    for (let cy = startCY; cy <= endCY; cy++)
        for (let cx = startCX; cx <= endCX; cx++)
            ctx.drawImage(WORLD.MAP.bgChunks[cy][cx], cx * WORLD.MAP.chunkSize - camX, cy * WORLD.MAP.chunkSize - camY, WORLD.MAP.chunkSize + 0.5, WORLD.MAP.chunkSize + 0.5);

    serverItems.forEach(item => {
        ctx.save();
        ctx.translate((item.renderX ?? item.x) - camX, (item.renderY ?? item.y) - camY);

        let scale = 0.95, rot = item.targetRotation;
        if (item.animState === 'dropping') {
            const t    = Math.max(0, Math.min(1, 1 - item.animTimer / 0.3));
            const ease = 1 - Math.pow(1 - t, 3);
            scale = 0.95 * ease;
            rot   = item.targetRotation * ease + ME.angle * (1 - ease);
        } else if (item.animState === 'picking_up') {
            const t = Math.max(0, Math.min(1, item.animTimer / 0.2));
            scale = 0.95 * t;
            rot   = item.targetRotation * t + ME.angle * (1 - t);
        }
        ctx.rotate(rot);
        ctx.scale(scale, scale);
        
        ctx.fillStyle = '#fff';
        ctx.fillRect(-10, -10, 20, 20);

        ctx.restore();
    });

    for (const id in serverPlayers) {
        const p = serverPlayers[id];
        const pRX = (p.renderX ?? p.x) - camX + p.width  / 2;
        const pRY = (p.renderY ?? p.y) - camY + p.height / 2;
        const sW  = p.width  * (p.scale || 1);
        const sH  = p.height * (p.scale || 1);

        ctx.save();
        ctx.translate(pRX, pRY);
        ctx.rotate(p.renderAngle ?? 0);
        ctx.drawImage(playerImg, -sW / 2, -sH / 2, sW, sH);
        ctx.restore();

        ctx.textAlign  = 'center';
        ctx.lineJoin   = 'round';
        ctx.lineWidth  = 3;
        ctx.strokeStyle = 'rgba(0,0,0,0.85)';
        ctx.font       = "bold 13px 'Segoe UI'";
        ctx.fillStyle  = '#ffffff';
        const pLabel = p.name + (p.isOwner ? ' 👑' : '');
        ctx.strokeText(pLabel, pRX, pRY - sH / 2 - 16);
        ctx.fillText(pLabel, pRX, pRY - sH / 2 - 16);
    }

    const pRenderX = ME.x - camX + ME.width  / 2;
    const pRenderY = ME.y - camY + ME.height / 2;
    const pScaledW = ME.width  * ME.scale;
    const pScaledH = ME.height * ME.scale;

    ctx.save();
    ctx.translate(pRenderX, pRenderY);
    ctx.rotate(ME.angle);
    ctx.drawImage(playerImg, -pScaledW / 2, -pScaledH / 2, pScaledW, pScaledH);
    ctx.restore();

    ctx.textAlign  = 'center';
    ctx.lineJoin   = 'round';
    ctx.lineWidth  = 3;
    ctx.strokeStyle = 'rgba(0,0,0,0.85)';
    ctx.font       = "bold 13px 'Segoe UI'";
    ctx.fillStyle  = '#ffffff';
    const myLabel = myName + (isOwner ? ' 👑' : '');
    ctx.strokeText(myLabel, pRenderX, pRenderY - pScaledH / 2 - 16);
    ctx.fillText(myLabel,   pRenderX, pRenderY - pScaledH / 2 - 16);

    if (WORLD.NEAREST_ITEM && WORLD.INVENTORY.includes(null)) {
        ctx.save();
        ctx.translate((WORLD.NEAREST_ITEM.renderX ?? WORLD.NEAREST_ITEM.x) - camX, (WORLD.NEAREST_ITEM.renderY ?? WORLD.NEAREST_ITEM.y) - camY - 25);
        ctx.fillStyle = 'rgba(0,0,0,0.8)';
        ctx.fillRect(-12, -12, 24, 24);
        ctx.fillStyle = '#ffffff';
        ctx.font = "bold 13px 'Segoe UI'";
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('E', 0, 1);
        ctx.restore();
    }

    for (let cy = startCY; cy <= endCY; cy++)
        for (let cx = startCX; cx <= endCX; cx++)
            ctx.drawImage(WORLD.MAP.fgChunks[cy][cx], cx * WORLD.MAP.chunkSize - camX, cy * WORLD.MAP.chunkSize - camY, WORLD.MAP.chunkSize + 0.5, WORLD.MAP.chunkSize + 0.5);

    if (WORLD.EDITOR.enabled && WORLD.EDITOR.selectedTileGid >= 0) {
        const wX  = (WORLD.INPUTS.mouseX / WORLD.SYSTEM.viewScale) + WORLD.CAMERA.x;
        const wY  = (WORLD.INPUTS.mouseY / WORLD.SYSTEM.viewScale) + WORLD.CAMERA.y;
        const col = Math.floor(wX / WORLD.MAP.tileSize);
        const row = Math.floor(wY / WORLD.MAP.tileSize);

        if (col >= 0 && col < WORLD.MAP.columns && row >= 0 && row < WORLD.MAP.rows) {
            const drawX = col * WORLD.MAP.tileSize - camX;
            const drawY = row * WORLD.MAP.tileSize - camY;
            ctx.save();
            ctx.globalAlpha = 0.5;
            if (WORLD.EDITOR.selectedTileGid > 0) {
                const tId = WORLD.EDITOR.selectedTileGid - 1;
                ctx.drawImage(tilesheetImg,
                    (tId % WORLD.MAP.tilesetCols) * WORLD.MAP.tileSize,
                    Math.floor(tId / WORLD.MAP.tilesetCols) * WORLD.MAP.tileSize,
                    WORLD.MAP.tileSize, WORLD.MAP.tileSize,
                    drawX, drawY, WORLD.MAP.tileSize, WORLD.MAP.tileSize);
            } else {
                ctx.fillStyle = 'rgba(0,0,0,0.5)';
                ctx.fillRect(drawX, drawY, WORLD.MAP.tileSize, WORLD.MAP.tileSize);
            }
            ctx.restore();
        }
    }

    for (const id in serverPlayers) {
        const p = serverPlayers[id];
        const pRX = (p.renderX ?? p.x) - camX + p.width  / 2;
        const pRY = (p.renderY ?? p.y) - camY + p.height / 2;
        renderChatHistory(ctx, p.chats, pRX, pRY - p.height / 2 - 32);
    }
    renderChatHistory(ctx, ME.chats, pRenderX, pRenderY - ME.height / 2 - 32);

    ctx.restore();
}

function gameLoop(now) {
    if (!WORLD.SYSTEM.isReady || !myId) return;
    requestAnimationFrame(gameLoop);

    let dt = (now - WORLD.SYSTEM.lastTime) / 1000;
    WORLD.SYSTEM.lastTime = now;
    if (dt > 0.1) dt = 0.1;

    update(dt);
    render();
}

function preRenderMap() {
    const numCX = Math.ceil((WORLD.MAP.columns * WORLD.MAP.tileSize) / WORLD.MAP.chunkSize);
    const numCY = Math.ceil((WORLD.MAP.rows    * WORLD.MAP.tileSize) / WORLD.MAP.chunkSize);

    WORLD.MAP.bgChunks = [];
    WORLD.MAP.fgChunks = [];
    for (let cy = 0; cy < numCY; cy++) {
        WORLD.MAP.bgChunks[cy] = [];
        WORLD.MAP.fgChunks[cy] = [];
        for (let cx = 0; cx < numCX; cx++) {
            const bg = document.createElement('canvas'); bg.width = bg.height = WORLD.MAP.chunkSize;
            const fg = document.createElement('canvas'); fg.width = fg.height = WORLD.MAP.chunkSize;
            WORLD.MAP.bgChunks[cy][cx] = bg;
            WORLD.MAP.fgChunks[cy][cx] = fg;
            renderChunk(cx, cy);
        }
    }
}

function renderChunk(cx, cy) {
    const bgCtx = WORLD.MAP.bgChunks[cy][cx].getContext('2d', { alpha: true });
    const fgCtx = WORLD.MAP.fgChunks[cy][cx].getContext('2d', { alpha: true });
    bgCtx.imageSmoothingEnabled = fgCtx.imageSmoothingEnabled = false;
    bgCtx.clearRect(0, 0, WORLD.MAP.chunkSize, WORLD.MAP.chunkSize);
    fgCtx.clearRect(0, 0, WORLD.MAP.chunkSize, WORLD.MAP.chunkSize);

    const startCol = Math.floor((cx * WORLD.MAP.chunkSize) / WORLD.MAP.tileSize);
    const endCol   = Math.ceil(((cx + 1) * WORLD.MAP.chunkSize) / WORLD.MAP.tileSize);
    const startRow = Math.floor((cy * WORLD.MAP.chunkSize) / WORLD.MAP.tileSize);
    const endRow   = Math.ceil(((cy + 1) * WORLD.MAP.chunkSize) / WORLD.MAP.tileSize);

    WORLD.MAP.layers.forEach(layer => {
        const tCtx = layer.name === 'trees' ? fgCtx : bgCtx;
        for (let r = Math.max(0, startRow); r < Math.min(WORLD.MAP.rows, endRow); r++) {
            for (let c = Math.max(0, startCol); c < Math.min(WORLD.MAP.columns, endCol); c++) {
                const gid = layer.data[r * WORLD.MAP.columns + c];
                if (gid > 0) {
                    const tId = gid - 1;
                    tCtx.drawImage(tilesheetImg,
                        (tId % WORLD.MAP.tilesetCols) * WORLD.MAP.tileSize,
                        Math.floor(tId / WORLD.MAP.tilesetCols) * WORLD.MAP.tileSize,
                        WORLD.MAP.tileSize, WORLD.MAP.tileSize,
                        (c * WORLD.MAP.tileSize) - (cx * WORLD.MAP.chunkSize),
                        (r * WORLD.MAP.tileSize) - (cy * WORLD.MAP.chunkSize),
                        WORLD.MAP.tileSize + 0.5, WORLD.MAP.tileSize + 0.5);
                }
            }
        }
    });
}

function loadImages() {
    tilesheetImg.crossOrigin = 'Anonymous';
    tilesheetImg.onload = () => {
        WORLD.MAP.tilesetCols = Math.floor(tilesheetImg.width / WORLD.MAP.tileSize);
        onAssetLoad();
    };
    tilesheetImg.src = 'assets/tilesheet.png';

    playerImg.crossOrigin = 'Anonymous';
    playerImg.onload = onAssetLoad;
    playerImg.src = 'assets/player.png';
}

function onAssetLoad() {
    WORLD.SYSTEM.assetsLoaded++;
    if (WORLD.SYSTEM.assetsLoaded === 2) {
        document.getElementById('loading-screen').style.display = 'none';
        
        document.getElementById('main-menu-ui').style.display = 'flex';
        
        resizeCanvas();
    }
}

function handleMapEdit(screenX, screenY) {
    if (!isOwner || !ws) return;   
    const worldX = (screenX / WORLD.SYSTEM.viewScale) + WORLD.CAMERA.x;
    const worldY = (screenY / WORLD.SYSTEM.viewScale) + WORLD.CAMERA.y;
    const col = Math.floor(worldX / WORLD.MAP.tileSize);
    const row = Math.floor(worldY / WORLD.MAP.tileSize);
    if (col >= 0 && col < WORLD.MAP.columns && row >= 0 && row < WORLD.MAP.rows)
        ws.send(JSON.stringify({ type: 'edit', layer: WORLD.EDITOR.selectedLayer, col, row, gid: WORLD.EDITOR.selectedTileGid }));
}

function initEditorUI() {
    const palette = document.getElementById('palette');
    if (!palette || palette.children.length > 0) return;
    const desiredTiles = [{ name: 'Grass', col: 0, row: 0 }, { name: 'Dirt', col: 1, row: 0 }, { name: 'Stone', col: 0, row: 1 }];

    desiredTiles.forEach((tile, idx) => {
        const btn = document.createElement('div');
        btn.className = 'tile-btn' + (idx === 0 ? ' selected' : '');
        btn.style.backgroundImage    = `url(${tilesheetImg.src})`;
        btn.style.backgroundSize     = '512px 512px';
        btn.style.backgroundPosition = `-${tile.col * WORLD.MAP.tileSize}px -${tile.row * WORLD.MAP.tileSize}px`;
        btn.onclick = () => {
            document.querySelectorAll('.tile-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            WORLD.EDITOR.selectedTileGid = (tile.row * WORLD.MAP.tilesetCols) + tile.col + 1;
        };
        palette.appendChild(btn);
    });

    const eraser = document.createElement('div');
    eraser.className = 'tile-btn eraser-btn';
    eraser.onclick = () => {
        document.querySelectorAll('.tile-btn').forEach(b => b.classList.remove('selected'));
        eraser.classList.add('selected');
        WORLD.EDITOR.selectedTileGid = 0;
    };
    palette.appendChild(eraser);

    document.getElementById('editor-toggle-btn').addEventListener('click', function () {
        WORLD.EDITOR.enabled = !WORLD.EDITOR.enabled;
        const tools = document.getElementById('editor-tools');
        if (WORLD.EDITOR.enabled) { this.innerText = 'Editor: ON';  this.classList.add('active');    tools.style.display = 'flex'; }
        else                       { this.innerText = 'Editor: OFF'; this.classList.remove('active'); tools.style.display = 'none'; }
    });

    document.querySelectorAll('#editor-ui .layer-btn').forEach(btn => {
        if (btn.id === 'editor-toggle-btn') return;
        btn.addEventListener('click', () => {
            document.querySelectorAll('#layer-toggles .layer-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            WORLD.EDITOR.selectedLayer = btn.dataset.layer;
        });
    });
}

function sendKick(targetId) { if(ws) ws.send(JSON.stringify({ type: 'kick', targetId })); }
function sendBan(targetId) { if(ws) ws.send(JSON.stringify({ type: 'ban', targetId })); }

function showAdminPanel(targetId, targetName, mouseX, mouseY) {
    const existing = document.getElementById('admin-panel');
    if (existing) existing.remove();
    if (existing && existing.dataset.target === String(targetId)) return;

    const panel = document.createElement('div');
    panel.id = 'admin-panel';
    panel.dataset.target = String(targetId);
    panel.style.cssText = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px solid rgba(255,255,255,0.15);min-width:140px;';

    const header = document.createElement('div');
    header.style.cssText = 'padding:8px 14px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px solid rgba(255,255,255,0.1);';
    header.textContent = targetName;
    panel.appendChild(header);

    const kickBtn = document.createElement('button');
    kickBtn.textContent = 'Kick';
    kickBtn.style.cssText = 'background:transparent;color:white;border:none;border-bottom:1px solid rgba(255,255,255,0.1);padding:8px 14px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;';
    kickBtn.onmouseenter = () => kickBtn.style.background = 'rgba(255,255,255,0.1)';
    kickBtn.onmouseleave = () => kickBtn.style.background = 'transparent';
    kickBtn.onclick = () => { sendKick(targetId); panel.remove(); };
    panel.appendChild(kickBtn);

    const banBtn = document.createElement('button');
    banBtn.textContent = 'Ban';
    banBtn.style.cssText = 'background:transparent;color:#ff4444;border:none;padding:8px 14px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;';
    banBtn.onmouseenter = () => banBtn.style.background = 'rgba(255,0,0,0.15)';
    banBtn.onmouseleave = () => banBtn.style.background = 'transparent';
    banBtn.onclick = () => { sendBan(targetId); panel.remove(); };
    panel.appendChild(banBtn);

    document.body.appendChild(panel);
    const pw = panel.offsetWidth || 145;
    const ph = panel.offsetHeight || 80;
    let px = mouseX - pw;
    let py = mouseY;
    if (px < 4) px = mouseX;
    if (py + ph > window.innerHeight - 4) py = window.innerHeight - ph - 4;
    panel.style.left = px + 'px';
    panel.style.top  = py + 'px';

    const close = (ev) => { if (!panel.contains(ev.target)) { panel.remove(); document.removeEventListener('mousedown', close); } };
    setTimeout(() => document.addEventListener('mousedown', close), 0);
}

function updateLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = '';
    
    const selfDiv = document.createElement('div');
    selfDiv.className = 'leaderboard-entry';
    selfDiv.innerHTML = `<span>${myName}${isOwner ? ' 👑' : ''}</span>`;
    list.appendChild(selfDiv);
    for (const id in serverPlayers) {
        const div = document.createElement('div');
        div.className = 'leaderboard-entry';
        const entryName = serverPlayers[id].name + (serverPlayers[id].isOwner ? ' 👑' : '');
        div.innerHTML = `<span>${entryName}</span>`;
        if (isOwner && !serverPlayers[id].isOwner) {
            div.style.cursor = 'context-menu';
            div.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                e.stopPropagation();
                showAdminPanel(serverPlayers[id].id, serverPlayers[id].name, e.clientX, e.clientY);
            });
        }
        list.appendChild(div);
    }
}

function renderInventory() {
    document.querySelectorAll('.inv-slot').forEach((slot, i) => {
        slot.className = 'inv-slot' + (WORLD.INVENTORY_SELECTED === i ? ' selected' : '');
        slot.style.backgroundImage = 'none'; 

        slot.onmouseenter = () => {
            if (dragIndex !== -1 || !WORLD.INVENTORY[i]) return;
            const tooltip = document.getElementById('tooltip-ui');
            document.getElementById('tooltip-header').innerText =
                WORLD.INVENTORY[i].charAt(0).toUpperCase() + WORLD.INVENTORY[i].slice(1);
            tooltip.style.display = 'flex';
            const rect = slot.getBoundingClientRect();
            tooltip.style.left = (rect.left + rect.width / 2) + 'px';
            tooltip.style.top  = (rect.top - tooltip.offsetHeight - 8) + 'px';
        };
        slot.onmouseleave = () => document.getElementById('tooltip-ui').style.display = 'none';
        slot.onmousedown  = (e) => {
            if (!ws) return;
            ws.send(JSON.stringify({ type: 'inv_select', index: i }));
            if (WORLD.INVENTORY[i]) {
                document.getElementById('tooltip-ui').style.display = 'none';
                dragIndex = i;
                dragGhost.style.backgroundImage = slot.style.backgroundImage;
                dragGhost.style.display = 'block';
                dragGhost.style.left = (e.clientX - 32) + 'px';
                dragGhost.style.top  = (e.clientY - 32) + 'px';
                slot.style.backgroundImage = 'none';
            }
        };
    });
}

window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    WORLD.SYSTEM.viewScale = Math.max(canvas.width / LOGICAL_WIDTH, canvas.height / LOGICAL_HEIGHT);
    WORLD.CAMERA.width     = canvas.width  / WORLD.SYSTEM.viewScale;
    WORLD.CAMERA.height    = canvas.height / WORLD.SYSTEM.viewScale;
    ctx.imageSmoothingEnabled = false;
}

function preventZoom(e) {
    if (e.ctrlKey || e.metaKey) {
        if (e.type === 'wheel' || ['=','-','0','+'].includes(e.key) || ['NumpadAdd','NumpadSubtract'].includes(e.code)) {
            e.preventDefault(); e.stopImmediatePropagation();
        }
    }
}
window.addEventListener('wheel',   preventZoom, { passive: false });
window.addEventListener('keydown', preventZoom, { passive: false });

window.addEventListener('keydown', e => {
    const key = e.key.toLowerCase();

    if (e.key === 'Enter') {
        if (!ws || ws.readyState !== WebSocket.OPEN) {
            if (document.getElementById('main-menu-ui').style.display !== 'none') {
                document.getElementById('play-btn').click();
            }
            return;
        }

        const chatUI = document.getElementById('chat-ui');
        const chatInput = document.getElementById('chat-input');
        
        if (document.activeElement === chatInput) {
            const msg = chatInput.value.trim();
            if (msg.length > 0) {
                ws.send(JSON.stringify({ type: 'chat', text: msg }));
            }
            chatInput.value = '';
            chatUI.style.display = 'none';
            chatInput.blur();
        } else {
            chatUI.style.display = 'block';
            chatInput.focus();
            for (let k in WORLD.INPUTS.keys) WORLD.INPUTS.keys[k] = false;
        }
        e.preventDefault();
        return;
    }

    if (e.key === 'Escape') {
        const chatUI = document.getElementById('chat-ui');
        const chatInput = document.getElementById('chat-input');
        if (document.activeElement === chatInput) {
            chatInput.value = '';
            chatUI.style.display = 'none';
            chatInput.blur();
            e.preventDefault();
            return;
        }
    }

    if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'SELECT') {
        if (WORLD.INPUTS.keys.hasOwnProperty(key)) WORLD.INPUTS.keys[key] = true;
        
        if (!ws || ws.readyState !== WebSocket.OPEN) return;

        if (['1','2','3','4','5'].includes(key)) {
            ws.send(JSON.stringify({ type: 'inv_select', index: parseInt(key) - 1 }));
        } else if (key === 'g') {
            ws.send(JSON.stringify({ type: 'drop', index: WORLD.INVENTORY_SELECTED }));
        } else if (key === 'e') {
            if (WORLD.NEAREST_ITEM && WORLD.INVENTORY.includes(null))
                ws.send(JSON.stringify({ type: 'pickup', itemId: WORLD.NEAREST_ITEM.id }));
        } else if (key === 'f') {
            // Enter / exit house
            if (HOUSES.myHouseId !== null) {
                ws.send(JSON.stringify({ type: 'house_exit' }));
            } else {
                const nearHouse = getNearestDoor();
                if (nearHouse) ws.send(JSON.stringify({ type: 'house_enter', houseId: nearHouse.id }));
            }
        } else if (key === 'w' && !e.ctrlKey) {
            // Open will editor (only when game is active)
            if (MAFIA.phase && MAFIA.phase !== 'lobby') {
                toggleWillEditor();
                e.preventDefault();
            }
        } else if (key === 't' && MAFIA.phase === 'night' && MAFIA.alive && !MAFIA.abilityUsed) {
            // Night ability — open target picker
            openNightAbilityUI();
        } else if (key === 'v' && MAFIA.phase === 'day' && MAFIA.alive) {
            // Voting — open vote picker
            openVoteUI();
        } else if (key === 'b' && MAFIA.myTeam === 'Mafia' && MAFIA.phase === 'night') {
            // Mafia break-in
            openBreakInUI();
        }
    }
});

window.addEventListener('keyup', e => {
    if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'SELECT') {
        const key = e.key.toLowerCase();
        if (WORLD.INPUTS.keys.hasOwnProperty(key)) WORLD.INPUTS.keys[key] = false;
    }
});

window.addEventListener('mousemove', e => {
    WORLD.INPUTS.mouseX = e.clientX;
    WORLD.INPUTS.mouseY = e.clientY;
    
    if (WORLD.INPUTS.isMouseDown && dragIndex === -1 && WORLD.EDITOR.enabled) {
        handleMapEdit(e.clientX, e.clientY);
    }

    if (dragIndex !== -1) {
        dragGhost.style.left = (e.clientX - 32) + 'px';
        dragGhost.style.top  = (e.clientY - 32) + 'px';
    }
});

window.addEventListener('mousedown', e => {
    if (e.button === 2) {
        if (ws && WORLD.NEAREST_ITEM && WORLD.INVENTORY.includes(null))
            ws.send(JSON.stringify({ type: 'pickup', itemId: WORLD.NEAREST_ITEM.id }));
        return;
    }
    if (e.target.closest('#editor-ui') || e.target.closest('#leaderboard-ui') || e.target.closest('#bottom-ui')) return;
    if (e.button === 0) {
        WORLD.INPUTS.isMouseDown = true;
        if (WORLD.EDITOR.enabled) handleMapEdit(e.clientX, e.clientY);
    }
});

window.addEventListener('mouseup', e => {
    WORLD.INPUTS.isMouseDown = false;
    if (dragIndex !== -1 && ws) {
        dragGhost.style.display = 'none';
        const dropTarget = document.elementFromPoint(e.clientX, e.clientY);
        if (dropTarget && dropTarget.classList.contains('inv-slot')) {
            const dropIndex = Array.from(document.querySelectorAll('.inv-slot')).indexOf(dropTarget);
            ws.send(JSON.stringify({ type: 'inv_swap', from: dragIndex, to: dropIndex }));
        } else if (!e.target.closest('#bottom-ui')) {
            ws.send(JSON.stringify({ type: 'drop', index: dragIndex }));
        }
        dragIndex = -1;
    }
});

// ═══════════════════════════════════════════════════════════════════════════════
// MAFIA UI SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════

const ROLE_COLORS = {
    Investigator: '#4fc3f7', Tracker: '#81d4fa', Doctor: '#a5d6a7',
    Archer: '#c8e6c9', Escort: '#f48fb1', Vigilante: '#ef9a9a',
    Skinwalker: '#ce93d8', Celebrity: '#ffe082'
};
const TEAM_COLORS = { Town: '#4caf50', Mafia: '#e53935', Neutral: '#ff9800' };

const ROLE_FLAVOR = {
    Investigator: 'Investigate a player each night to narrow down their role.',
    Tracker:      'Track a player to see who they visit.',
    Doctor:       'Choose someone to protect from death each night.',
    Archer:       'Guard a player — injure anyone who visits them with harmful intent.',
    Escort:       'Roleblock a player, preventing their night action.',
    Vigilante:    'Shoot someone you suspect is evil. Guilt kills you if you are wrong.',
    Skinwalker:   'Transform into another role, stealing it and blocking its real holder.',
    Celebrity:    'When you die, a random letter from your killer\'s name is revealed.'
};

function showRoleCard(role, team, flavor) {
    removeEl('mafia-role-card');
    const card = document.createElement('div');
    card.id = 'mafia-role-card';
    card.style.cssText = `
        position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:rgba(10,10,10,0.97);border:2px solid ${TEAM_COLORS[team]||'#fff'};
        padding:32px 48px;z-index:8000;text-align:center;min-width:320px;
        font-family:'Segoe UI',sans-serif;color:#fff;
    `;
    card.innerHTML = `
        <div style="font-size:13px;letter-spacing:3px;color:${TEAM_COLORS[team]};font-weight:bold;margin-bottom:8px;">${team.toUpperCase()}</div>
        <div style="font-size:36px;font-weight:bold;color:${ROLE_COLORS[role]||'#fff'};margin-bottom:12px;">${role}</div>
        <div style="font-size:14px;color:#aaa;max-width:260px;line-height:1.6;">${flavor || ROLE_FLAVOR[role] || ''}</div>
        <button onclick="document.getElementById('mafia-role-card').remove()"
            style="margin-top:24px;background:${TEAM_COLORS[team]};color:#fff;border:none;padding:10px 32px;
                   font-weight:bold;font-size:15px;cursor:pointer;font-family:'Segoe UI',sans-serif;">
            GOT IT
        </button>
    `;
    document.body.appendChild(card);
    // Auto-close after 10s
    setTimeout(() => card.remove(), 10000);
}

function renderPhaseUI(phase, announcements) {
    removeEl('mafia-phase-banner');
    const banner = document.createElement('div');
    banner.id = 'mafia-phase-banner';
    const isNight = phase === 'night';
    banner.style.cssText = `
        position:fixed;top:0;left:0;right:0;
        background:${isNight ? 'rgba(5,5,30,0.92)' : 'rgba(30,20,5,0.88)'};
        color:${isNight ? '#aac4ff' : '#ffe082'};
        font-family:'Segoe UI',sans-serif;font-weight:bold;
        font-size:14px;padding:8px 16px;z-index:3000;
        display:flex;justify-content:space-between;align-items:flex-start;
        border-bottom:2px solid ${isNight ? '#334' : '#554'};
        flex-wrap:wrap;gap:6px;
    `;

    let phaseLabel = '';
    if (phase === 'night')  phaseLabel = `🌙 Night ${MAFIA.phaseNum}`;
    if (phase === 'day')    phaseLabel = `☀️  Day ${MAFIA.phaseNum}`;
    if (phase === 'lobby')  phaseLabel = `⏳ Waiting for players (6 minimum)`;
    if (phase === 'ended')  phaseLabel = `🏁 Game Over — ${MAFIA.winner || '?'} wins!`;

    const announcementHtml = announcements.map(a =>
        `<div style="color:#ffcccc;font-size:13px;font-weight:normal;">• ${a}</div>`
    ).join('');

    const keybindHint = MAFIA.alive && phase === 'night'
        ? '<span style="color:#888;font-size:12px;">[T] ability &nbsp;[W] will' + (MAFIA.myTeam==='Mafia'?' &nbsp;[B] break-in':'') + '</span>'
        : MAFIA.alive && phase === 'day'
        ? '<span style="color:#888;font-size:12px;">[V] vote &nbsp;[W] will</span>'
        : '';

    banner.innerHTML = `
        <div>
            <div style="font-size:16px;">${phaseLabel}</div>
            ${announcementHtml}
        </div>
        <div style="text-align:right;">
            ${MAFIA.myRole ? `<span style="color:${ROLE_COLORS[MAFIA.myRole]||'#fff'};font-size:13px;">Role: ${MAFIA.myRole}</span>` : ''}
            <br>${keybindHint}
        </div>
    `;
    document.body.appendChild(banner);

    // Guilt death check
    if (phase === 'night' && MAFIA.guilt) {
        showSystemMsg('💀 The guilt consumes you. You die tonight.');
    }
    if (phase === 'ended' && MAFIA.winner) {
        showWinScreen(MAFIA.winner);
    }
}

function renderMafiaPlayerList() {
    removeEl('mafia-player-list');
    if (!MAFIA.phase || MAFIA.phase === 'lobby') return;
    const panel = document.createElement('div');
    panel.id = 'mafia-player-list';
    panel.style.cssText = `
        position:fixed;bottom:100px;right:10px;
        background:rgba(0,0,0,0.82);border:1px solid rgba(255,255,255,0.12);
        font-family:'Segoe UI',sans-serif;z-index:2000;min-width:180px;
        max-height:320px;overflow-y:auto;
    `;
    let html = `<div style="padding:7px 12px;font-size:12px;letter-spacing:2px;color:#888;border-bottom:1px solid rgba(255,255,255,0.08);">PLAYERS</div>`;
    for (const id in MAFIA.players) {
        const p = MAFIA.players[id];
        const dead = !p.alive;
        const roleStr = dead && p.role ? ` <span style="color:${ROLE_COLORS[p.role]||'#aaa'};font-size:11px;">[${p.role}]</span>` : '';
        const willBtn = dead && p.will
            ? ` <button onclick="showWillPopup(${id})" style="background:none;border:none;color:#ffe082;cursor:pointer;font-size:11px;padding:0 4px;">📜</button>`
            : '';
        html += `<div style="padding:5px 12px;font-size:13px;font-weight:bold;color:${dead?'#555':'#fff'};">
            ${dead ? '☠ ' : ''}${p.name}${roleStr}${willBtn}
        </div>`;
    }
    panel.innerHTML = html;
    document.body.appendChild(panel);
}

function renderVoteUI() {
    removeEl('mafia-vote-ui');
    if (MAFIA.phase !== 'day' || !MAFIA.alive) return;
    const panel = document.createElement('div');
    panel.id = 'mafia-vote-ui';
    panel.style.cssText = `
        position:fixed;bottom:100px;left:50%;transform:translateX(-50%);
        background:rgba(10,5,0,0.93);border:2px solid #e65100;
        font-family:'Segoe UI',sans-serif;z-index:2500;padding:12px 20px;min-width:300px;
    `;
    let html = `<div style="font-size:13px;color:#ff8f00;font-weight:bold;letter-spacing:2px;margin-bottom:10px;">☀️ VOTE TO ELIMINATE</div>`;
    const alive = Object.values(MAFIA.players).filter(p => p.alive && p.id !== myId);
    for (const p of alive) {
        const voteCount = Object.values(MAFIA.votes).filter(v => v === p.id).length;
        const isMyVote  = MAFIA.votes[myId] === p.id;
        html += `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span style="font-size:13px;font-weight:bold;color:${isMyVote?'#ffe082':'#fff'};">
                ${isMyVote ? '▶ ' : ''}${p.name} <span style="color:#888;font-size:11px;">(${voteCount} vote${voteCount!==1?'s':''})</span>
            </span>
            <button onclick="castVote(${p.id})"
                style="background:${isMyVote?'#bf360c':'#3e2723'};color:#fff;border:none;
                       padding:4px 12px;font-weight:bold;cursor:pointer;font-size:12px;
                       font-family:'Segoe UI',sans-serif;">
                ${isMyVote ? 'UNVOTE' : 'VOTE'}
            </button>
        </div>`;
    }
    html += `<div style="font-size:11px;color:#555;margin-top:8px;">Majority vote eliminates a player.</div>`;
    panel.innerHTML = html;
    document.body.appendChild(panel);
}

function castVote(targetId) {
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    const already = MAFIA.votes[myId] === targetId;
    ws.send(JSON.stringify({ type: 'mafia_vote', targetId: already ? null : targetId }));
}

function openNightAbilityUI() {
    if (MAFIA.abilityUsed || MAFIA.phase !== 'night' || !MAFIA.alive) return;
    removeEl('mafia-ability-ui');
    const panel = document.createElement('div');
    panel.id = 'mafia-ability-ui';
    panel.style.cssText = `
        position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:rgba(5,5,20,0.97);border:2px solid ${ROLE_COLORS[MAFIA.myRole]||'#fff'};
        font-family:'Segoe UI',sans-serif;z-index:4000;padding:24px 32px;min-width:280px;
    `;

    const abilityName = {
        Investigator: 'INVESTIGATE',
        Tracker:      'TRACK',
        Doctor:       'PROTECT',
        Archer:       'GUARD',
        Escort:       'ROLEBLOCK',
        Vigilante:    'SHOOT',
        Skinwalker:   'SKINWALK',
        Celebrity:    null
    }[MAFIA.myRole];

    if (!abilityName) { panel.remove(); return; }

    const alive = Object.values(MAFIA.players).filter(p => p.alive && p.id !== myId);
    let html = `
        <div style="font-size:13px;color:${ROLE_COLORS[MAFIA.myRole]||'#fff'};font-weight:bold;letter-spacing:2px;margin-bottom:12px;">
            🌙 ${abilityName}
        </div>
    `;
    for (const p of alive) {
        html += `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span style="font-size:14px;font-weight:bold;color:#fff;">${p.name}</span>
            <button onclick="useAbility(${p.id})"
                style="background:${ROLE_COLORS[MAFIA.myRole]||'#333'};color:#000;border:none;
                       padding:5px 14px;font-weight:bold;cursor:pointer;font-size:12px;
                       font-family:'Segoe UI',sans-serif;">
                SELECT
            </button>
        </div>`;
    }
    html += `<button onclick="document.getElementById('mafia-ability-ui').remove()"
        style="margin-top:10px;background:transparent;color:#555;border:1px solid #333;
               padding:6px 16px;cursor:pointer;font-family:'Segoe UI',sans-serif;width:100%;">
        CANCEL
    </button>`;
    panel.innerHTML = html;
    document.body.appendChild(panel);
}

function useAbility(targetId) {
    if (!ws || ws.readyState !== WebSocket.OPEN || MAFIA.abilityUsed) return;
    ws.send(JSON.stringify({ type: 'mafia_ability', role: MAFIA.myRole, targetId }));
    MAFIA.abilityUsed   = true;
    MAFIA.abilityTarget = targetId;
    removeEl('mafia-ability-ui');
    showSystemMsg(`✔ Ability used on ${MAFIA.players[targetId]?.name || '?'}.`);
}

function openVoteUI() { renderVoteUI(); }

function openBreakInUI() {
    removeEl('mafia-breakin-ui');
    const panel = document.createElement('div');
    panel.id = 'mafia-breakin-ui';
    panel.style.cssText = `
        position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:rgba(20,0,0,0.97);border:2px solid #e53935;
        font-family:'Segoe UI',sans-serif;z-index:4000;padding:24px 32px;min-width:280px;
    `;
    let html = `<div style="font-size:13px;color:#ef9a9a;font-weight:bold;letter-spacing:2px;margin-bottom:12px;">🔴 BREAK INTO HOUSE</div>`;
    // List occupied houses (server sends who's inside via mafia_players with houseId field)
    const occupiedHouses = HOUSES.list.filter(h => h.occupants && h.occupants.length > 0);
    if (occupiedHouses.length === 0) {
        html += `<div style="color:#666;font-size:13px;">No occupied houses nearby.</div>`;
    } else {
        for (const h of occupiedHouses) {
            html += `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-size:13px;color:#fff;">House #${h.id} (${h.occupants.map(id=>MAFIA.players[id]?.name||'?').join(', ')})</span>
                <button onclick="sendBreakIn(${h.id})"
                    style="background:#b71c1c;color:#fff;border:none;padding:5px 12px;
                           font-weight:bold;cursor:pointer;font-size:12px;font-family:'Segoe UI',sans-serif;">
                    BREAK IN
                </button>
            </div>`;
        }
    }
    html += `<button onclick="document.getElementById('mafia-breakin-ui').remove()"
        style="margin-top:10px;background:transparent;color:#555;border:1px solid #333;
               padding:6px 16px;cursor:pointer;font-family:'Segoe UI',sans-serif;width:100%;">
        CANCEL
    </button>`;
    panel.innerHTML = html;
    document.body.appendChild(panel);
}

function sendBreakIn(houseId) {
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    ws.send(JSON.stringify({ type: 'house_break', houseId }));
    removeEl('mafia-breakin-ui');
}

function toggleWillEditor() {
    if (document.getElementById('mafia-will-editor')) {
        removeEl('mafia-will-editor'); return;
    }
    const panel = document.createElement('div');
    panel.id = 'mafia-will-editor';
    panel.style.cssText = `
        position:fixed;bottom:110px;left:50%;transform:translateX(-50%);
        background:rgba(10,10,10,0.96);border:2px solid #ffe082;
        font-family:'Segoe UI',sans-serif;z-index:3500;padding:16px 20px;min-width:360px;
    `;
    panel.innerHTML = `
        <div style="font-size:12px;color:#ffe082;font-weight:bold;letter-spacing:2px;margin-bottom:8px;">📜 MY WILL</div>
        <textarea id="will-textarea" maxlength="500"
            style="width:100%;height:100px;background:#111;color:#fff;border:1px solid #444;
                   padding:8px;font-family:'Segoe UI',sans-serif;font-size:13px;
                   resize:vertical;box-sizing:border-box;outline:none;">${MAFIA.myWill}</textarea>
        <div style="display:flex;gap:8px;margin-top:8px;">
            <button onclick="saveWill()"
                style="background:#f9a825;color:#000;border:none;padding:7px 20px;
                       font-weight:bold;cursor:pointer;font-size:13px;font-family:'Segoe UI',sans-serif;flex:1;">
                SAVE
            </button>
            <button onclick="document.getElementById('mafia-will-editor').remove()"
                style="background:transparent;color:#888;border:1px solid #333;padding:7px 16px;
                       cursor:pointer;font-family:'Segoe UI',sans-serif;flex:1;">
                CLOSE
            </button>
        </div>
        <div style="font-size:11px;color:#555;margin-top:6px;">Revealed to town when you die.</div>
    `;
    document.body.appendChild(panel);
    document.getElementById('will-textarea').focus();
}

function saveWill() {
    const ta = document.getElementById('will-textarea');
    if (!ta) return;
    MAFIA.myWill = ta.value;
    if (ws && ws.readyState === WebSocket.OPEN)
        ws.send(JSON.stringify({ type: 'mafia_will', text: MAFIA.myWill }));
    showSystemMsg('📜 Will saved.');
    removeEl('mafia-will-editor');
}

function showWillPopup(playerId) {
    const p = MAFIA.players[playerId];
    if (!p) return;
    removeEl('mafia-will-popup');
    const panel = document.createElement('div');
    panel.id = 'mafia-will-popup';
    panel.style.cssText = `
        position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:rgba(10,8,0,0.97);border:2px solid #ffe082;
        font-family:'Segoe UI',sans-serif;z-index:5000;padding:24px 28px;min-width:300px;max-width:400px;
    `;
    panel.innerHTML = `
        <div style="font-size:13px;color:#ffe082;font-weight:bold;margin-bottom:6px;">📜 ${p.name}'s Last Will</div>
        <div style="font-size:13px;color:#ccc;white-space:pre-wrap;line-height:1.6;min-height:60px;">${p.will || '<span style="color:#555">No will was written.</span>'}</div>
        <button onclick="document.getElementById('mafia-will-popup').remove()"
            style="margin-top:16px;background:transparent;color:#888;border:1px solid #333;
                   padding:6px 20px;cursor:pointer;font-family:'Segoe UI',sans-serif;width:100%;">
            CLOSE
        </button>
    `;
    document.body.appendChild(panel);
}

function showDeathAnnouncement(data) {
    // data: { name, role, will, reason, celebrity }
    removeEl('mafia-death-announce');
    const el = document.createElement('div');
    el.id = 'mafia-death-announce';
    el.style.cssText = `
        position:fixed;top:60px;left:50%;transform:translateX(-50%);
        background:rgba(10,0,0,0.96);border:2px solid #b71c1c;
        font-family:'Segoe UI',sans-serif;z-index:4500;padding:20px 28px;min-width:320px;text-align:center;
    `;
    let html = `
        <div style="font-size:13px;color:#ef9a9a;font-weight:bold;letter-spacing:2px;margin-bottom:6px;">☠ DEATH</div>
        <div style="font-size:20px;font-weight:bold;color:#fff;margin-bottom:4px;">${data.name}</div>
        <div style="font-size:13px;color:${ROLE_COLORS[data.role]||'#aaa'};margin-bottom:4px;">${data.role}</div>
        <div style="font-size:12px;color:#777;margin-bottom:8px;">${data.reason || ''}</div>
    `;
    if (data.will) {
        html += `<div style="font-size:12px;color:#ffe082;margin-bottom:4px;">📜 Last Will:</div>
                 <div style="font-size:12px;color:#ccc;white-space:pre-wrap;text-align:left;max-height:80px;overflow-y:auto;margin-bottom:8px;">${data.will}</div>`;
    }
    if (data.celebrity) {
        html += `<div style="font-size:13px;color:#ffe082;">⭐ Celebrity Clue: The killer's name contains the letter <strong>"${data.celebrity.letter}"</strong></div>`;
    }
    html += `<button onclick="document.getElementById('mafia-death-announce').remove()"
        style="margin-top:12px;background:transparent;color:#888;border:1px solid #333;
               padding:6px 20px;cursor:pointer;font-family:'Segoe UI',sans-serif;">
        OK
    </button>`;
    el.innerHTML = html;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 15000);
}

function showNightResult(text) {
    showSystemMsg(`🔍 ${text}`);
}

function renderMafiaChat() {
    removeEl('mafia-chat-panel');
    if (MAFIA.myTeam !== 'Mafia' || MAFIA.phase !== 'night') return;
    const panel = document.createElement('div');
    panel.id = 'mafia-chat-panel';
    panel.style.cssText = `
        position:fixed;bottom:110px;right:10px;
        background:rgba(20,0,0,0.92);border:1px solid #b71c1c;
        font-family:'Segoe UI',sans-serif;z-index:2000;width:240px;max-height:180px;
        overflow-y:auto;padding:8px 12px;
    `;
    let html = `<div style="font-size:11px;color:#e53935;letter-spacing:2px;font-weight:bold;margin-bottom:6px;">🔴 MAFIA CHAT</div>`;
    for (const msg of MAFIA.mafiaChat.slice(-20)) {
        html += `<div style="font-size:12px;margin-bottom:3px;"><span style="color:#ef9a9a;font-weight:bold;">${msg.from}:</span> <span style="color:#ffcccc;">${msg.text}</span></div>`;
    }
    html += `<input id="mafia-chat-input" maxlength="80" placeholder="Mafia chat..."
        style="width:100%;background:#1a0000;color:#fff;border:1px solid #b71c1c;
               padding:4px 8px;font-size:12px;font-family:'Segoe UI',sans-serif;
               box-sizing:border-box;margin-top:6px;outline:none;"
        onkeydown="if(event.key==='Enter'&&this.value.trim()){sendMafiaChat(this.value.trim());this.value='';event.stopPropagation();}">`;
    panel.innerHTML = html;
    document.body.appendChild(panel);
    panel.scrollTop = panel.scrollHeight;
}

function sendMafiaChat(text) {
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    ws.send(JSON.stringify({ type: 'mafia_chat', text }));
}

function showWinScreen(winner) {
    removeEl('mafia-win-screen');
    const el = document.createElement('div');
    el.id = 'mafia-win-screen';
    el.style.cssText = `
        position:fixed;top:0;left:0;right:0;bottom:0;
        background:rgba(0,0,0,0.88);
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        z-index:9500;font-family:'Segoe UI',sans-serif;color:#fff;text-align:center;
    `;
    const color = winner === 'Town' ? '#4caf50' : winner === 'Mafia' ? '#e53935' : '#ff9800';
    el.innerHTML = `
        <div style="font-size:16px;letter-spacing:4px;color:#888;margin-bottom:10px;">GAME OVER</div>
        <div style="font-size:52px;font-weight:bold;color:${color};margin-bottom:8px;">${winner}</div>
        <div style="font-size:20px;color:#aaa;margin-bottom:32px;">wins!</div>
        <button onclick="document.getElementById('mafia-win-screen').remove()"
            style="background:${color};color:#fff;border:none;padding:12px 40px;
                   font-size:18px;font-weight:bold;cursor:pointer;font-family:'Segoe UI',sans-serif;">
            CONTINUE
        </button>
    `;
    document.body.appendChild(el);
}

function showSystemMsg(text) {
    const el = document.createElement('div');
    el.style.cssText = `
        position:fixed;top:60px;left:50%;transform:translateX(-50%);
        background:rgba(0,0,0,0.88);border:1px solid rgba(255,255,255,0.15);
        color:#fff;font-family:'Segoe UI',sans-serif;font-size:14px;font-weight:bold;
        padding:10px 20px;z-index:4000;pointer-events:none;white-space:nowrap;
    `;
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3500);
}

function removeEl(id) { const e = document.getElementById(id); if (e) e.remove(); }

// ═══════════════════════════════════════════════════════════════════════════════
// HOUSE / INTERIOR SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════

// Interior map is a separate layer set drawn instead of the world map when inside.
const INTERIOR = { active: false, layers: [], columns: 0, rows: 0, chunks: [] };

function loadInteriorMap(mapData) {
    INTERIOR.active  = true;
    INTERIOR.layers  = mapData.layers;
    INTERIOR.columns = mapData.columns;
    INTERIOR.rows    = mapData.rows;
    // Re-use same chunk system, just different layer data
    const ts   = WORLD.MAP.tileSize;
    const cs   = WORLD.MAP.chunkSize;
    const numCX = Math.ceil((mapData.columns * ts) / cs);
    const numCY = Math.ceil((mapData.rows    * ts) / cs);
    INTERIOR.chunks = [];
    for (let cy = 0; cy < numCY; cy++) {
        INTERIOR.chunks[cy] = [];
        for (let cx = 0; cx < numCX; cx++) {
            const c = document.createElement('canvas');
            c.width = c.height = cs;
            const cCtx = c.getContext('2d', { alpha: true });
            cCtx.imageSmoothingEnabled = false;
            renderInteriorChunk(cCtx, cx, cy, mapData);
            INTERIOR.chunks[cy][cx] = c;
        }
    }
    showSystemMsg('🏠 Entered house. [F] to exit.');
}

function renderInteriorChunk(cCtx, cx, cy, mapData) {
    const ts = WORLD.MAP.tileSize, cs = WORLD.MAP.chunkSize;
    cCtx.clearRect(0, 0, cs, cs);
    const startCol = Math.floor((cx * cs) / ts), endCol = Math.ceil(((cx+1)*cs)/ts);
    const startRow = Math.floor((cy * cs) / ts), endRow = Math.ceil(((cy+1)*cs)/ts);
    for (const layer of mapData.layers) {
        for (let r = Math.max(0, startRow); r < Math.min(mapData.rows, endRow); r++) {
            for (let c = Math.max(0, startCol); c < Math.min(mapData.columns, endCol); c++) {
                const gid = layer.data[r * mapData.columns + c];
                if (!gid) continue;
                const tId = gid - 1;
                cCtx.drawImage(tilesheetImg,
                    (tId % WORLD.MAP.tilesetCols) * ts,
                    Math.floor(tId / WORLD.MAP.tilesetCols) * ts,
                    ts, ts,
                    (c * ts) - (cx * cs), (r * ts) - (cy * cs),
                    ts + 0.5, ts + 0.5);
            }
        }
    }
}

function unloadInteriorMap() {
    INTERIOR.active = false;
    INTERIOR.chunks = [];
    showSystemMsg('🚪 Exited house.');
}

function getNearestDoor() {
    if (!HOUSES.list.length) return null;
    let best = null, bestDist = Infinity;
    const px = ME.x + ME.width / 2, py = ME.y + ME.height / 2;
    for (const h of HOUSES.list) {
        const dx = (h.doorCol * WORLD.MAP.tileSize + WORLD.MAP.tileSize / 2) - px;
        const dy = (h.doorRow * WORLD.MAP.tileSize + WORLD.MAP.tileSize / 2) - py;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 96 && dist < bestDist) { bestDist = dist; best = h; }
    }
    return best;
}

// Hook interior rendering into the main render loop — draw interior over world when inside
const _origRender = render;
render = function() {
    _origRender();
    if (INTERIOR.active && INTERIOR.chunks.length) {
        const camX = Math.round(WORLD.CAMERA.x), camY = Math.round(WORLD.CAMERA.y);
        const cs   = WORLD.MAP.chunkSize;
        ctx.save();
        ctx.scale(WORLD.SYSTEM.viewScale, WORLD.SYSTEM.viewScale);
        // Dim the world behind
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(camX > 0 ? -camX : 0, camY > 0 ? -camY : 0, WORLD.CAMERA.width, WORLD.CAMERA.height);
        // Draw interior chunks
        for (let cy = 0; cy < INTERIOR.chunks.length; cy++) {
            for (let cx = 0; cx < INTERIOR.chunks[cy].length; cx++) {
                ctx.drawImage(INTERIOR.chunks[cy][cx], cx*cs - camX, cy*cs - camY, cs+0.5, cs+0.5);
            }
        }
        ctx.restore();
        // [F] hint near door
        if (getNearestDoor() || HOUSES.myHouseId !== null) {
            ctx.save();
            ctx.scale(WORLD.SYSTEM.viewScale, WORLD.SYSTEM.viewScale);
            ctx.fillStyle = 'rgba(0,0,0,0.75)';
            ctx.fillRect(WORLD.CAMERA.width/2 - 40, WORLD.CAMERA.height - 80, 80, 26);
            ctx.fillStyle = '#fff';
            ctx.font = "bold 13px 'Segoe UI'";
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText('[F] EXIT', WORLD.CAMERA.width/2, WORLD.CAMERA.height - 67);
            ctx.restore();
        }
    } else {
        // Show [F] enter hint when near a door outdoors
        if (getNearestDoor()) {
            ctx.save();
            ctx.scale(WORLD.SYSTEM.viewScale, WORLD.SYSTEM.viewScale);
            ctx.fillStyle = 'rgba(0,0,0,0.75)';
            ctx.fillRect(WORLD.CAMERA.width/2 - 40, WORLD.CAMERA.height - 80, 80, 26);
            ctx.fillStyle = '#fff';
            ctx.font = "bold 13px 'Segoe UI'";
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText('[F] ENTER', WORLD.CAMERA.width/2, WORLD.CAMERA.height - 67);
            ctx.restore();
        }
    }
};

// Expose globals for onclick handlers
window.castVote     = castVote;
window.useAbility   = useAbility;
window.saveWill     = saveWill;
window.showWillPopup= showWillPopup;
window.sendBreakIn  = sendBreakIn;
window.sendMafiaChat= sendMafiaChat;

document.getElementById('leaderboard-header').addEventListener('click', () => {
    const list   = document.getElementById('leaderboard-list');
    const toggle = document.getElementById('leaderboard-toggle');
    if (list.style.display === 'none') { list.style.display = 'flex'; toggle.style.transform = 'rotate(0deg)';   }
    else                               { list.style.display = 'none'; toggle.style.transform = 'rotate(180deg)'; }
});
