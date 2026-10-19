document.addEventListener('contextmenu', event => event.preventDefault());

let ws           = null;
let myId         = null;
let myName       = 'Player???';      
let isOwner      = false;          
let serverPlayers = {};        
let serverItems   = [];
let myRole       = null;
let nightAlpha = 0;

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
    NEAREST_ITEM: null,
    GAME_STATE: 'LOBBY',
    LAST_STATE: 'LOBBY',
    CURRENT_TARGET: null,
    ENTITIES: [],
    SHADOW: {
        polygon: null,
        frame: 0,
        RADIUS: 800
    }
};

const ME = {
    x: 0, y: 0,
    width: 45, height: 45,
    vx: 0, vy: 0,
    angle: 0, scale: 1, bopTimer: 0,
    chats: [],
    isDead: false
};

const tilesheetImg = new Image();
const playerImg    = new Image();
const centerImg    = new Image();
const tableImg     = new Image();

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
            document.getElementById('chat-log-ui').style.display = 'flex';
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
    
    _params.set('ngrok-skip-browser-warning', 'true');
    
    const _ngrokURL = 'wss://stomach-projection-pleasant-use.trycloudflare.com';
    const _wsHost = window.location.hostname === 'localhost'
        ? 'ws://localhost:8080'
        : _ngrokURL;
    const _wsURL = _wsHost + '/?' + _params.toString();
    
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
            if (data.entities) WORLD.ENTITIES = data.entities;

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
                    const dx = incoming.x - existing.renderX;
                    const dy = incoming.y - existing.renderY;
                    const jumped = (dx * dx + dy * dy) > (200 * 200);
                    Object.assign(existing, incoming);
                    if (jumped) {
                        existing.renderX = incoming.x;
                        existing.renderY = incoming.y;
                    }
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
                ME.isDead                = data.players[myId].isDead;
                if (data.players[myId].name) myName = data.players[myId].name;
                renderInventory();
                updateLeaderboard();
            }
            
            if (data.entities) WORLD.ENTITIES = data.entities;

            if (data.game) {
                WORLD.GAME_STATE = data.game.state;
                if (WORLD.LAST_STATE !== WORLD.GAME_STATE) {
                    if (WORLD.GAME_STATE !== 'NIGHT') WORLD.CURRENT_TARGET = null;
                    WORLD.LAST_STATE = WORLD.GAME_STATE;
                }
                const pUi = document.getElementById('phase-ui');
                if (pUi) {
                    pUi.style.display = 'block';
                    document.getElementById('phase-name').innerText = data.game.state.replace('_', ' ');
                    document.getElementById('phase-timer').innerText = data.game.timer + 's';
                }
            }

        } else if (data.type === 'teleport') {
            ME.x  = data.x;
            ME.y  = data.y;
            ME.vx = 0;
            ME.vy = 0;
            WORLD.CAMERA.x = null;
        } else if (data.type === 'bulk_teleport') {
            for (const id in data.positions) {
                const pos = data.positions[id];
                if (parseInt(id) === myId) {
                    ME.x = pos.x; ME.y = pos.y; ME.vx = 0; ME.vy = 0;
                    WORLD.CAMERA.x = null;
                    continue;
                }
                const sp = serverPlayers[id];
                if (sp) {
                    sp.x       = pos.x; sp.y       = pos.y;
                    sp.renderX = pos.x; sp.renderY = pos.y;
                    sp.vx = 0; sp.vy = 0;
                }
            }
        } else if (data.type === 'player_left') {
            delete serverPlayers[data.id];
        } else if (data.type === 'map_update') {
            const layer = WORLD.MAP.layers.find(l => l.name === data.layer);
            if (layer) {
                layer.data[data.row * WORLD.MAP.columns + data.col] = data.gid;
                const cx = Math.floor((data.col * WORLD.MAP.tileSize) / WORLD.MAP.chunkSize);
                const cy = Math.floor((data.row * WORLD.MAP.tileSize) / WORLD.MAP.chunkSize);
                renderChunk(cx, cy);
            }
        } else if (data.type === 'role_assign') {
            myRole = data.role;
            ME.isDead = false;
            document.getElementById('role-ui').style.display = 'block';
            document.getElementById('my-role-name').innerText = myRole;
            addChatLog(`Game started! Your role is: ${myRole}`, true);
            
            let info = "";
            if(myRole === 'Investigator') info = "Investigate (T) to narrow down roles.";
            if(myRole === 'Tracker') info = "Track (T) to see who someone visits.";
            if(myRole === 'Doctor') info = "Heal (T) to protect someone from death.";
            if(myRole === 'Archer') info = "Watch (T) to shoot harmful visitors.";
            if(myRole === 'Escort') info = "Roleblock (T) to stop someone's action.";
            if(myRole === 'Vigilante') info = "Shoot (T) to kill. Don't shoot townies!";
            if(myRole === 'Skinwalker') info = "Kill (T) your target. Use /transform [Role] to block a role.";
            if(myRole === 'Celebrity') info = "If you die, the killer's name letter is revealed.";
            addChatLog(info, true);

        } else if (data.type === 'game_over') {
            myRole = null;
            ME.isDead = false;
            document.getElementById('role-ui').style.display = 'none';
            addChatLog("The game has ended.", true);

        } else if (data.type === 'chat_log') {
            addChatLog(`${data.sender}: ${data.text}`);
        } else if (data.type === 'sys_chat') {
            addChatLog(data.text, true);
        }
    };
}

function addChatLog(text, isSys = false) {
    const container = document.getElementById('chat-log-messages');
    const div = document.createElement('div');
    div.className = 'chat-log-line' + (isSys ? ' sys-msg' : '');
    div.innerText = text;
    container.appendChild(div);
    const ui = document.getElementById('chat-log-ui');
    ui.scrollTop = ui.scrollHeight;
    
    if (container.childElementCount > 35) {
        container.removeChild(container.firstChild);
    }
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
    if (ME.isDead) return;

    const wallLayer = WORLD.MAP.layers.find(l => l.name === 'walls');
    if (!wallLayer) return;

    const scale  = ME.scale;
    const radius = (ME.width * scale) / 2;

    for (let iter = 0; iter < 3; iter++) {
        let pX = ME.x + ME.width  / 2;
        let pY = ME.y + ME.height / 2;

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

                const testX = pX < tileX ? tileX : (pX > tileX + WORLD.MAP.tileSize ? tileX + WORLD.MAP.tileSize : pX);
                const testY = pY < tileY ? tileY : (pY > tileY + WORLD.MAP.tileSize ? tileY + WORLD.MAP.tileSize : pY);

                const dX   = pX - testX;
                const dY   = pY - testY;
                const dist = Math.sqrt(dX * dX + dY * dY);

                if (dist < radius) {
                    if (dist === 0) {
                        pY -= radius;
                    } else {
                        const overlap = radius - dist;
                        pX += (dX / dist) * overlap;
                        pY += (dY / dist) * overlap;
                        const dot = ME.vx * (dX / dist) + ME.vy * (dY / dist);
                        if (dot < 0) {
                            ME.vx -= dot * (dX / dist);
                            ME.vy -= dot * (dY / dist);
                        }
                    }
                }
            }
        }

        ME.x = pX - ME.width  / 2;
        ME.y = pY - ME.height / 2;
    }
}

function resolvePlayerCollisionsLocal() {
    if (ME.isDead) return;
    
    const meR  = (ME.width * ME.scale) / 2;
    const mecx = ME.x + ME.width  / 2;
    const mecy = ME.y + ME.height / 2;

    for (const id in serverPlayers) {
        const p  = serverPlayers[id];
        if (p.isDead) continue;
        
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
    resolveCircleCollisions();
}

function resolveEntityCollisions() {
    if (ME.isDead) return;
    const scale  = ME.scale;
    const radius = (ME.width * scale) / 2;
    for (let iter = 0; iter < 2; iter++) {
        let pX = ME.x + ME.width  / 2;
        let pY = ME.y + ME.height / 2;
        for (const ent of WORLD.ENTITIES) {
            const nearX = pX < ent.x ? ent.x : (pX > ent.x + ent.w ? ent.x + ent.w : pX);
            const nearY = pY < ent.y ? ent.y : (pY > ent.y + ent.h ? ent.y + ent.h : pY);
            const dX   = pX - nearX;
            const dY   = pY - nearY;
            const dist = Math.sqrt(dX * dX + dY * dY);
            if (dist < radius && dist > 0) {
                const overlap = radius - dist;
                const nx = dX / dist;
                const ny = dY / dist;
                pX += nx * overlap;
                pY += ny * overlap;
                const dot = ME.vx * nx + ME.vy * ny;
                if (dot < 0) {
                    ME.vx -= dot * nx;
                    ME.vy -= dot * ny;
                }
            } else if (dist === 0) {
                pY -= radius;
            }
        }
        ME.x = pX - ME.width  / 2;
        ME.y = pY - ME.height / 2;
    }
}

function isOnHaybale(worldX, worldY) {
    const treesLayer = WORLD.MAP.layers.find(l => l.name === 'trees');
    if (!treesLayer) return false;
    const col = Math.floor(worldX / WORLD.MAP.tileSize);
    const row = Math.floor(worldY / WORLD.MAP.tileSize);
    if (col < 0 || col >= WORLD.MAP.columns || row < 0 || row >= WORLD.MAP.rows) return false;
    return treesLayer.data[row * WORLD.MAP.columns + col] === 11;
}

function computeShadowVisibility() {
    const MAP    = WORLD.MAP;
    const S      = WORLD.SHADOW;
    const TILE   = MAP.tileSize;
    const R      = S.RADIUS;
    const cols   = MAP.columns;
    const rows   = MAP.rows;

    const ox = ME.x + ME.width  / 2;
    const oy = ME.y + ME.height / 2;

    const wallLayer = MAP.layers.find(l => l.name === 'walls');
    if (!wallLayer) { S.polygon = null; return; }

    const startC = Math.max(0, Math.floor((ox - R) / TILE));
    const endC   = Math.min(cols - 1, Math.ceil((ox + R) / TILE));
    const startR = Math.max(0, Math.floor((oy - R) / TILE));
    const endR   = Math.min(rows - 1, Math.ceil((oy + R) / TILE));

    const isWall = (c, r) => {
        if (c < 0 || c >= cols || r < 0 || r >= rows) return true;
        return wallLayer.data[r * cols + c] !== 0;
    };

    const angles = [];
    const EPS = 0.0001;

    for (let r = startR; r <= endR; r++) {
        for (let c = startC; c <= endC; c++) {
            if (!isWall(c, r)) continue;
            const corners = [
                [c * TILE,        r * TILE       ],
                [c * TILE + TILE, r * TILE       ],
                [c * TILE,        r * TILE + TILE],
                [c * TILE + TILE, r * TILE + TILE]
            ];
            for (const [cx, cy] of corners) {
                const dx = cx - ox;
                const dy = cy - oy;
                if (dx * dx + dy * dy > R * R * 1.2) continue;
                const a = Math.atan2(dy, dx);
                angles.push(a - EPS, a, a + EPS);
            }
        }
    }

    const STEPS = 32;
    for (let i = 0; i < STEPS; i++) {
        angles.push((Math.PI * 2 * i) / STEPS - Math.PI);
    }

    const castRay = (angle) => {
        const rdx = Math.cos(angle);
        const rdy = Math.sin(angle);

        let minT = R;

        for (let r = startR; r <= endR; r++) {
            for (let c = startC; c <= endC; c++) {
                if (!isWall(c, r)) continue;

                const tx0 = c * TILE;
                const ty0 = r * TILE;
                const tx1 = tx0 + TILE;
                const ty1 = ty0 + TILE;

                const edges = [
                    [tx0, ty0, tx1, ty0],
                    [tx1, ty0, tx1, ty1],
                    [tx1, ty1, tx0, ty1],
                    [tx0, ty1, tx0, ty0]
                ];

                for (const [ax, ay, bx, by] of edges) {
                    const segDx = bx - ax;
                    const segDy = by - ay;
                    const denom = rdx * segDy - rdy * segDx;
                    if (Math.abs(denom) < 1e-10) continue;
                    const t = ((ax - ox) * segDy - (ay - oy) * segDx) / denom;
                    const u = ((ax - ox) * rdy   - (ay - oy) * rdx)   / denom;
                    if (t > 0 && u >= 0 && u <= 1 && t < minT) {
                        minT = t;
                    }
                }
            }
        }

        return { x: ox + rdx * minT, y: oy + rdy * minT };
    };

    const uniqueAngles = [...new Set(angles.map(a => Math.round(a * 100000) / 100000))];
    uniqueAngles.sort((a, b) => a - b);

    const verts = [];
    for (const angle of uniqueAngles) {
        const pt = castRay(angle);
        verts.push(pt.x, pt.y);
    }

    S.polygon = verts.length >= 6 ? new Float32Array(verts) : null;
}

function drawShadowOverlay(ctx, camX, camY) {
    const S = WORLD.SHADOW;
    if (!S.polygon || S.polygon.length < 6) return;
    const W = WORLD.CAMERA.width;
    const H = WORLD.CAMERA.height;

    if (!WORLD.SHADOW._buf || WORLD.SHADOW._buf.width !== W || WORLD.SHADOW._buf.height !== H) {
        WORLD.SHADOW._buf = document.createElement('canvas');
        WORLD.SHADOW._buf.width  = W;
        WORLD.SHADOW._buf.height = H;
    }
    const buf    = WORLD.SHADOW._buf;
    const bufCtx = buf.getContext('2d');

    bufCtx.clearRect(0, 0, W, H);

    bufCtx.fillStyle = 'rgba(0,0,0,0.97)';
    bufCtx.fillRect(0, 0, W, H);

    bufCtx.globalCompositeOperation = 'destination-out';
    bufCtx.beginPath();
    const verts = S.polygon;
    bufCtx.moveTo(verts[0] - camX, verts[1] - camY);
    for (let i = 2; i < verts.length; i += 2) {
        bufCtx.lineTo(verts[i] - camX, verts[i + 1] - camY);
    }
    bufCtx.closePath();
    bufCtx.fill();

    bufCtx.globalCompositeOperation = 'source-over';

    ctx.drawImage(buf, 0, 0);
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
    for (let i = 0; i < 2; i++) resolveEntityCollisions();
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
    
    if (WORLD.GAME_STATE === 'NIGHT') {
        nightAlpha = Math.min(0.6, nightAlpha + dt * 0.5);
    } else {
        nightAlpha = Math.max(0, nightAlpha - dt * 0.5);
    }

    computeShadowVisibility();

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

    if (centerImg.complete && centerImg.naturalWidth > 0) {
        const TILE    = WORLD.MAP.tileSize;
        const imgSize = TILE * 8;
        const imgX    = (WORLD.MAP.columns / 2) * TILE - imgSize / 2 - camX;
        const imgY    = (WORLD.MAP.rows    / 2) * TILE - imgSize / 2 - camY;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(centerImg, imgX, imgY, imgSize, imgSize);
    }

    if (tableImg.complete && tableImg.naturalWidth > 0) {
        WORLD.ENTITIES.forEach(ent => {
            ctx.save();
            ctx.imageSmoothingEnabled = false;
            if (ent.w >= ent.h) {
                ctx.drawImage(tableImg, ent.x - camX, ent.y - camY, ent.w, ent.h);
            } else {
                ctx.translate(ent.x - camX + ent.w / 2, ent.y - camY + ent.h / 2);
                ctx.rotate(Math.PI / 2);
                ctx.drawImage(tableImg, -ent.h / 2, -ent.w / 2, ent.h, ent.w);
            }
            ctx.restore();
        });
    }

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
        if (p.isDead) ctx.globalAlpha = 0.3;
        ctx.drawImage(playerImg, -sW / 2, -sH / 2, sW, sH);
        ctx.restore();
        
        if (WORLD.CURRENT_TARGET === parseInt(id)) {
            ctx.save();
            ctx.translate(pRX, pRY);
            ctx.rotate(p.renderAngle ?? 0);
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 4;
            ctx.strokeRect(-sW / 2 - 2, -sH / 2 - 2, sW + 4, sH + 4);
            ctx.restore();
        }

        if (!isOnHaybale((p.renderX ?? p.x) + p.width / 2, (p.renderY ?? p.y) + p.height / 2)) {
            ctx.textAlign  = 'center';
            ctx.lineJoin   = 'round';
            ctx.lineWidth  = 3;
            ctx.strokeStyle = 'rgba(0,0,0,0.85)';
            ctx.font       = "bold 13px 'Segoe UI'";
            ctx.fillStyle  = '#ffffff';
            const pLabel = p.name + (p.isOwner ? ' (Host)' : '');
            ctx.strokeText(pLabel, pRX, pRY - sH / 2 - 16);
            ctx.fillText(pLabel, pRX, pRY - sH / 2 - 16);
        }
    }

    const pRenderX = ME.x - camX + ME.width  / 2;
    const pRenderY = ME.y - camY + ME.height / 2;
    const pScaledW = ME.width  * ME.scale;
    const pScaledH = ME.height * ME.scale;

    ctx.save();
    ctx.translate(pRenderX, pRenderY);
    ctx.rotate(ME.angle);
    if (ME.isDead) ctx.globalAlpha = 0.3;
    ctx.drawImage(playerImg, -pScaledW / 2, -pScaledH / 2, pScaledW, pScaledH);
    ctx.restore();

    if (!isOnHaybale(ME.x + ME.width / 2, ME.y + ME.height / 2)) {
        ctx.textAlign  = 'center';
        ctx.lineJoin   = 'round';
        ctx.lineWidth  = 3;
        ctx.strokeStyle = 'rgba(0,0,0,0.85)';
        ctx.font       = "bold 13px 'Segoe UI'";
        ctx.fillStyle  = '#ffffff';
        const myLabel = myName + (isOwner ? ' (Host)' : '');
        ctx.strokeText(myLabel, pRenderX, pRenderY - pScaledH / 2 - 16);
        ctx.fillText(myLabel,   pRenderX, pRenderY - pScaledH / 2 - 16);
    }

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

    drawShadowOverlay(ctx, camX, camY);

    if (nightAlpha > 0) {
        ctx.fillStyle = `rgba(0, 0, 40, ${nightAlpha})`;
        ctx.fillRect(0, 0, WORLD.CAMERA.width, WORLD.CAMERA.height);
    }

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
        WORLD.MAP.tilesetCols = 3;
        onAssetLoad();
    };
    tilesheetImg.onerror = () => {
        console.warn("Missing tilesheet.png! Using fallback.");
        WORLD.MAP.tilesetCols = 1;
        onAssetLoad();
    };
    tilesheetImg.src = 'assets/tilesheet.png';

    playerImg.crossOrigin = 'Anonymous';
    playerImg.onload = onAssetLoad;
    playerImg.onerror = () => {
        console.warn("Missing player.png! Using fallback.");
        onAssetLoad();
    };
    playerImg.src = 'assets/player.png';

    centerImg.crossOrigin = 'Anonymous';
    centerImg.onload = onAssetLoad;
    centerImg.onerror = () => {
        console.warn("Missing center.png! Skipping.");
        onAssetLoad();
    };
    centerImg.src = 'assets/center.png';

    tableImg.crossOrigin = 'Anonymous';
    tableImg.onload = onAssetLoad;
    tableImg.onerror = () => { console.warn("Missing table.png!"); onAssetLoad(); };
    tableImg.src = 'assets/table.png';
}

function onAssetLoad() {
    WORLD.SYSTEM.assetsLoaded++;
    if (WORLD.SYSTEM.assetsLoaded === 4) {
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

    const TILE = 64;
    const tsImg = tilesheetImg;

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px solid #555;background:#222;cursor:grab;flex-shrink:0;';

    const tsCanvas = document.createElement('canvas');
    tsCanvas.width  = 192;
    tsCanvas.height = 160;
    tsCanvas.style.cssText = 'display:block;image-rendering:pixelated;';
    wrapper.appendChild(tsCanvas);

    const highlight = document.createElement('div');
    highlight.style.cssText = 'position:absolute;width:64px;height:64px;border:3px solid #ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    wrapper.appendChild(highlight);

    let tsOffX = 0, tsOffY = 0;
    let dragging = false, dragSX = 0, dragSY = 0, dragOX = 0, dragOY = 0;

    function drawTilesheet() {
        const tCtx = tsCanvas.getContext('2d');
        tCtx.clearRect(0, 0, tsCanvas.width, tsCanvas.height);
        tCtx.imageSmoothingEnabled = false;
        if (tsImg.complete && tsImg.naturalWidth > 0) {
            tCtx.drawImage(tsImg, tsOffX, tsOffY, tsCanvas.width, tsCanvas.height, 0, 0, tsCanvas.width, tsCanvas.height);
        }
        tCtx.strokeStyle = 'rgba(255,255,255,0.15)';
        tCtx.lineWidth = 1;
        const startCol = Math.floor(tsOffX / TILE);
        const startRow = Math.floor(tsOffY / TILE);
        for (let c = startCol; c <= startCol + Math.ceil(tsCanvas.width / TILE) + 1; c++) {
            const x = c * TILE - tsOffX;
            tCtx.beginPath(); tCtx.moveTo(x, 0); tCtx.lineTo(x, tsCanvas.height); tCtx.stroke();
        }
        for (let r = startRow; r <= startRow + Math.ceil(tsCanvas.height / TILE) + 1; r++) {
            const y = r * TILE - tsOffY;
            tCtx.beginPath(); tCtx.moveTo(0, y); tCtx.lineTo(tsCanvas.width, y); tCtx.stroke();
        }
    }

    function updateHighlight() {
        const tsCols = Math.max(1, Math.ceil(tsImg.naturalWidth / TILE));
        const gid = WORLD.EDITOR.selectedTileGid;
        if (gid <= 0) { highlight.style.display = 'none'; return; }
        const tileIdx = gid - 1;
        const tCol = tileIdx % tsCols;
        const tRow = Math.floor(tileIdx / tsCols);
        const sx = tCol * TILE - tsOffX;
        const sy = tRow * TILE - tsOffY;
        highlight.style.display = 'block';
        highlight.style.left = sx + 'px';
        highlight.style.top  = sy + 'px';
    }

    tsImg.onload = () => { drawTilesheet(); updateHighlight(); };
    if (tsImg.complete && tsImg.naturalWidth > 0) { drawTilesheet(); updateHighlight(); }

    wrapper.addEventListener('mousedown', e => {
        if (e.button === 0) {
            dragging = true;
            dragSX = e.clientX; dragSY = e.clientY;
            dragOX = tsOffX;    dragOY = tsOffY;
            wrapper.style.cursor = 'grabbing';
            e.stopPropagation();
        }
    });
    window.addEventListener('mousemove', e => {
        if (!dragging) return;
        const dx = dragSX - e.clientX;
        const dy = dragSY - e.clientY;
        const maxX = Math.max(0, tsImg.naturalWidth  - tsCanvas.width);
        const maxY = Math.max(0, tsImg.naturalHeight - tsCanvas.height);
        tsOffX = Math.max(0, Math.min(maxX, dragOX + dx));
        tsOffY = Math.max(0, Math.min(maxY, dragOY + dy));
        drawTilesheet(); updateHighlight();
    });
    window.addEventListener('mouseup', e => {
        if (dragging) { dragging = false; wrapper.style.cursor = 'grab'; }
    });

    wrapper.addEventListener('click', e => {
        const rect = wrapper.getBoundingClientRect();
        const mx = e.clientX - rect.left + tsOffX;
        const my = e.clientY - rect.top  + tsOffY;
        const tsCols = Math.max(1, Math.ceil(tsImg.naturalWidth / TILE));
        const col = Math.floor(mx / TILE);
        const row = Math.floor(my / TILE);
        const gid = row * tsCols + col + 1;
        WORLD.EDITOR.selectedTileGid = gid;
        updateHighlight();
    });

    palette.appendChild(wrapper);

    const eraser = document.createElement('div');
    eraser.className = 'tile-btn eraser-btn';
    eraser.title = 'Eraser (gid 0)';
    eraser.onclick = () => {
        WORLD.EDITOR.selectedTileGid = 0;
        highlight.style.display = 'none';
    };
    palette.appendChild(eraser);

    document.getElementById('editor-toggle-btn').addEventListener('click', function () {
        WORLD.EDITOR.enabled = !WORLD.EDITOR.enabled;
        const tools = document.getElementById('editor-tools');
        if (WORLD.EDITOR.enabled) { this.innerText = 'Editor: ON';  this.classList.add('active');    tools.style.display = 'flex'; }
        else                       { this.innerText = 'Editor: OFF'; this.classList.remove('active'); tools.style.display = 'none'; }
    });
    
    const startBtn = document.getElementById('start-game-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            if (ws) ws.send(JSON.stringify({ type: 'start_game' }));
        });
    }

    document.querySelectorAll('#editor-ui .layer-btn').forEach(btn => {
        if (btn.id === 'editor-toggle-btn' || btn.id === 'start-game-btn') return;
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
    selfDiv.innerHTML = `<span>${myName}${isOwner ? ' (Host)' : ''}</span>`;
    list.appendChild(selfDiv);
    for (const id in serverPlayers) {
        const div = document.createElement('div');
        div.className = 'leaderboard-entry';
        const entryName = serverPlayers[id].name + (serverPlayers[id].isOwner ? ' (Host)' : '');
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
    
    if (key === 'tab') {
        e.preventDefault();
        const willUI = document.getElementById('will-ui');
        const willInput = document.getElementById('will-input');
        if (willUI.style.display === 'flex') {
            willUI.style.display = 'none';
            if (ws) ws.send(JSON.stringify({ type: 'update_will', text: willInput.value }));
            willInput.blur();
        } else {
            willUI.style.display = 'flex';
            willInput.focus();
            for (let k in WORLD.INPUTS.keys) WORLD.INPUTS.keys[k] = false;
        }
        return;
    }

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

    if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        if (WORLD.INPUTS.keys.hasOwnProperty(key)) WORLD.INPUTS.keys[key] = true;
        
        if (!ws || ws.readyState !== WebSocket.OPEN) return;

        if (key === 't' && !e.repeat) {
            let nearestDist = Infinity;
            let targetId = null;
            for (let id in serverPlayers) {
                if (parseInt(id) === myId) continue;
                let p = serverPlayers[id];
                if (p.isDead) continue;
                let px = p.renderX + p.width/2;
                let py = p.renderY + p.height/2;
                let mx = ME.x + ME.width/2;
                let my = ME.y + ME.height/2;
                let dist = Math.hypot(px - mx, py - my);
                if (dist < 150 && dist < nearestDist) {
                    nearestDist = dist;
                    targetId = parseInt(id);
                }
            }
            if (targetId) {
                WORLD.CURRENT_TARGET = targetId;
                ws.send(JSON.stringify({ type: 'action_target', targetId }));
            }
            return;
        }

        if (['1','2','3','4','5'].includes(key)) {
            ws.send(JSON.stringify({ type: 'inv_select', index: parseInt(key) - 1 }));
        } else if (key === 'g') {
            ws.send(JSON.stringify({ type: 'drop', index: WORLD.INVENTORY_SELECTED }));
        } else if (key === 'e') {
            if (WORLD.NEAREST_ITEM && WORLD.INVENTORY.includes(null)) {
                ws.send(JSON.stringify({ type: 'pickup', itemId: WORLD.NEAREST_ITEM.id }));
            } else {
                ws.send(JSON.stringify({ type: 'interact' }));
            }
        }
    }
});

window.addEventListener('keyup', e => {
    if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
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
    if (e.target.closest('#editor-ui') || e.target.closest('#leaderboard-ui') || e.target.closest('#bottom-ui') || e.target.closest('#chat-log-ui')) return;
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

document.getElementById('leaderboard-header').addEventListener('click', () => {
    const list   = document.getElementById('leaderboard-list');
    const toggle = document.getElementById('leaderboard-toggle');
    if (list.style.display === 'none') { list.style.display = 'flex'; toggle.style.transform = 'rotate(0deg)';   }
    else                               { list.style.display = 'none'; toggle.style.transform = 'rotate(180deg)'; }
});
