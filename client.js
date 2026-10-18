// ═══════════════════════════════════════════════════════════════════════════
// client.js  –  Mafia Mystery  |  Full client with game layer
// ═══════════════════════════════════════════════════════════════════════════
document.addEventListener('contextmenu', e => e.preventDefault());

let ws         = null;
let myId       = null;
let myName     = 'Player???';
let isOwner    = false;
let serverPlayers = {};
let serverItems   = [];

const canvas = document.getElementById('gameCanvas');
const ctx    = canvas.getContext('2d', { alpha: false });

const LOGICAL_WIDTH  = 1280;
const LOGICAL_HEIGHT = 720;

// ── World ────────────────────────────────────────────────────────────────────
const WORLD = {
    MAP: {
        tileSize: 64, chunkSize: 1024,
        columns: 0, rows: 0, tilesetCols: 0, layers: [],
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
    x: 0, y: 0, width: 45, height: 45,
    vx: 0, vy: 0, angle: 0, scale: 1, bopTimer: 0, chats: []
};

// ── Game State ────────────────────────────────────────────────────────────────
const GAME = {
    phase:        'lobby',
    phaseCount:   0,
    phaseEndMs:   0,
    timerMs:      0,

    myRole:       null,
    myRoleName:   null,
    myTeam:       null,
    myColor:      null,
    myDesc:       null,
    roleKey:      null,

    houses:       [],          // from server
    deadIds:      new Set(),

    nightTarget:  null,        // { targetId, targetName }
    doorNearby:   null,        // { houseId, ownerId, ownerName }

    nominations:  {},          // targetId → count

    trialDefendant:     null,
    trialDefendantName: null,
    trialVotes:         { guilty: 0, innocent: 0 },
    trialVoteOpen:      false,
    myTrialVote:        null,

    announcement:      [],
    showAnnouncement:  false,
    announceTimer:     0,

    privateMessages:   [],     // { msg, born }
    mafiaChat:         [],     // { from, msg }
    isMafia:           false,
    mafiaTeam:         [],
    mafiaInputOpen:    false,

    blackmailed:        new Set(),
    mayorRevealed:      new Set(),

    isDead:             false,

    will:               '',
    willOpen:           false,

    execTarget:         null,  // { id, name }
    gameOver:           null,  // { team, ids, lines }

    playerNearby:       null,  // { playerId, playerName } – for nominate prompt
};

// ── Images ────────────────────────────────────────────────────────────────────
const tilesheetImg = new Image();
const playerImg    = new Image();

let dragIndex = -1;
const dragGhost = document.createElement('div');
dragGhost.id = 'drag-ghost';
document.body.appendChild(dragGhost);

// ═════════════════════════════════════════════════════════════════════════════
// BOOT
// ═════════════════════════════════════════════════════════════════════════════
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
        connectToServer();
    }

    // Will editor events
    document.getElementById('will-textarea').addEventListener('input', e => {
        GAME.will = e.target.value;
        if (ws?.readyState === WebSocket.OPEN)
            ws.send(JSON.stringify({ type: 'write_will', text: GAME.will }));
    });
    document.getElementById('will-close-btn').addEventListener('click', () => {
        GAME.willOpen = false;
        document.getElementById('will-ui').style.display = 'none';
    });

    // Trial vote buttons
    document.getElementById('guilty-btn').addEventListener('click', () => castTrialVote('guilty'));
    document.getElementById('innocent-btn').addEventListener('click', () => castTrialVote('innocent'));

    // Mafia chat input
    const mafInput = document.getElementById('mafia-chat-input');
    if (mafInput) {
        mafInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                const msg = mafInput.value.trim();
                if (msg && ws?.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify({ type: 'mafia_chat', text: msg }));
                    mafInput.value = '';
                }
                e.preventDefault();
            }
        });
    }

    // Start game button (owner)
    document.getElementById('start-game-btn')?.addEventListener('click', () => {
        if (ws?.readyState === WebSocket.OPEN)
            ws.send(JSON.stringify({ type: 'start_game' }));
    });

    // Mayor reveal button
    document.getElementById('mayor-reveal-btn')?.addEventListener('click', () => {
        if (ws?.readyState === WebSocket.OPEN)
            ws.send(JSON.stringify({ type: 'mayor_reveal' }));
    });

    loadImages();
});

// ═════════════════════════════════════════════════════════════════════════════
// WEBSOCKET
// ═════════════════════════════════════════════════════════════════════════════
function connectToServer() {
    const _pageToken = new URLSearchParams(window.location.search).get('token') || '';
    const _params    = new URLSearchParams();
    if (_pageToken) _params.set('token', _pageToken);
    const _wsURL = 'wss://faster-conjoined-angling.ngrok-free.dev/?' + _params.toString();

    ws = new WebSocket(_wsURL);

    ws.onopen = () => {
        ws.send(JSON.stringify({ type: 'join', name: myName, token: _pageToken }));
    };

    window.addEventListener('beforeunload', () => {
        if (ws?.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ type: 'leave' }));
    });

    ws.onclose = e => {
        if (e.code === 4001)
            document.body.innerHTML = overlay('You have been kicked.');
        else if (e.code === 4002 || e.code === 4003)
            document.body.innerHTML = overlay('You have been banned.');
    };

    ws.onmessage = event => {
        const data = JSON.parse(event.data);

        switch (data.type) {
            // ── Existing ──────────────────────────────────────────────────────
            case 'init':
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
                    document.getElementById('start-game-btn').style.display = 'block';
                    initEditorUI();
                }
                document.getElementById('leaderboard-ui').style.display = 'flex';
                document.getElementById('bottom-ui').style.display      = 'flex';
                document.getElementById('game-hud').style.display       = 'flex';
                WORLD.SYSTEM.lastTime = performance.now();
                WORLD.SYSTEM.isReady  = true;
                updateLeaderboard();
                requestAnimationFrame(gameLoop);
                break;

            case 'state':
                processStateMsg(data);
                break;

            case 'map_update': {
                const layer = WORLD.MAP.layers.find(l => l.name === data.layer);
                if (layer) {
                    layer.data[data.row * WORLD.MAP.columns + data.col] = data.gid;
                    const cx = Math.floor((data.col * WORLD.MAP.tileSize) / WORLD.MAP.chunkSize);
                    const cy = Math.floor((data.row * WORLD.MAP.tileSize) / WORLD.MAP.chunkSize);
                    renderChunk(cx, cy);
                }
                break;
            }

            // ── Game: Phases ──────────────────────────────────────────────────
            case 'game_phase':
                GAME.phase      = data.phase;
                GAME.phaseCount = data.phaseCount;
                GAME.phaseEndMs = data.phaseEnd;
                onPhaseChange(data.phase);
                break;

            case 'phase_timer':
                GAME.timerMs = data.remaining;
                break;

            // ── Game: Houses ──────────────────────────────────────────────────
            case 'houses':
                GAME.houses = data.houses;
                break;

            // ── Game: Roles ───────────────────────────────────────────────────
            case 'role_info':
                GAME.roleKey    = data.roleKey;
                GAME.myRoleName = data.role;
                GAME.myTeam     = data.team;
                GAME.myColor    = data.color;
                GAME.myDesc     = data.desc;
                GAME.isMafia    = data.team === 'mafia';
                renderRoleCard();
                // Show mayor reveal button
                if (data.roleKey === 'MAYOR') {
                    document.getElementById('mayor-reveal-btn').style.display = 'block';
                }
                break;

            case 'mafia_team':
                GAME.mafiaTeam = data.teammates;
                renderMafiaPanel();
                break;

            case 'exec_target':
                GAME.execTarget = { id: data.targetId, name: data.targetName };
                showPrivateMessage(`🎯 YOUR TARGET: ${data.targetName} — get them lynched.`);
                break;

            // ── Game: Night ───────────────────────────────────────────────────
            case 'door_nearby':
                GAME.doorNearby = { houseId: data.houseId, ownerId: data.ownerId, ownerName: data.ownerName };
                break;

            case 'action_confirm':
                GAME.nightTarget = data.targetId
                    ? { targetId: data.targetId, targetName: data.targetName }
                    : null;
                showPrivateMessage(data.msg);
                renderNightHUD();
                break;

            case 'night_private':
                showPrivateMessage(data.msg);
                break;

            // ── Game: Mafia chat ──────────────────────────────────────────────
            case 'mafia_chat':
                GAME.mafiaChat.unshift({ from: data.from, msg: data.msg });
                if (GAME.mafiaChat.length > 30) GAME.mafiaChat.pop();
                renderMafiaChat();
                break;

            // ── Game: Day ─────────────────────────────────────────────────────
            case 'announcement':
                GAME.announcement     = data.lines;
                GAME.showAnnouncement = true;
                GAME.announceTimer    = 12;
                renderAnnouncement();
                break;

            case 'blackmailed_list':
                GAME.blackmailed = new Set(data.ids);
                break;

            case 'dead_list':
                GAME.deadIds = new Set(data.ids);
                if (GAME.deadIds.has(myId)) {
                    GAME.isDead = true;
                    showPrivateMessage('💀 You have died. You may observe but cannot act.');
                }
                break;

            case 'player_nearby':
                GAME.playerNearby = { playerId: data.playerId, playerName: data.playerName };
                break;

            // ── Game: Voting ──────────────────────────────────────────────────
            case 'nomination_state':
                GAME.nominations = data.counts;
                break;

            case 'mayor_reveal':
                GAME.mayorRevealed.add(data.id);
                showPrivateMessage(`👑 ${data.name} has revealed themselves as Mayor! (3x vote)`);
                break;

            // ── Game: Trial ───────────────────────────────────────────────────
            case 'trial_start':
                GAME.trialDefendant     = data.defendant;
                GAME.trialDefendantName = data.name;
                GAME.trialVoteOpen      = false;
                GAME.myTrialVote        = null;
                GAME.trialVotes         = { guilty: 0, innocent: 0 };
                renderTrialUI();
                break;

            case 'trial_vote_open':
                GAME.trialVoteOpen = true;
                renderTrialUI();
                break;

            case 'trial_votes':
                GAME.trialVotes = { guilty: data.guilty, innocent: data.innocent };
                renderTrialUI();
                break;

            // ── Game: Over ────────────────────────────────────────────────────
            case 'game_over':
                GAME.gameOver = { team: data.team, ids: data.ids, lines: data.lines };
                renderGameOver();
                break;

            case 'owner_transfer':
                isOwner = true;
                document.getElementById('editor-ui').style.display   = 'flex';
                document.getElementById('start-game-btn').style.display = 'block';
                initEditorUI();
                break;

            case 'player_died':
                if (data.id === myId) { GAME.isDead = true; }
                break;
        }
    };
}

function overlay(txt) {
    return `<div style="position:fixed;inset:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe UI;font-size:24px;font-weight:bold;">${txt}</div>`;
}

// ═════════════════════════════════════════════════════════════════════════════
// STATE PROCESSING
// ═════════════════════════════════════════════════════════════════════════════
function processStateMsg(data) {
    const next = {};
    for (const id in data.players) {
        if (parseInt(id) === myId) {
            const me = data.players[id];
            WORLD.INVENTORY           = me.inventory;
            WORLD.INVENTORY_SELECTED  = me.inventorySelected;
            ME.chats                  = me.chats || [];
            if (me.name) myName       = me.name;
            renderInventory();
            updateLeaderboard();
            continue;
        }
        const inc = data.players[id];
        const ex  = serverPlayers[id];
        if (ex) { Object.assign(ex, inc); next[id] = ex; }
        else     next[id] = { ...inc, renderX: inc.x, renderY: inc.y, renderAngle: inc.angle || 0 };
    }
    serverPlayers = next;

    const nxtItems = [];
    for (const inc of data.items) {
        const ex = serverItems.find(i => i.id === inc.id);
        if (ex) { Object.assign(ex, inc); nxtItems.push(ex); }
        else     nxtItems.push({ ...inc, renderX: inc.x, renderY: inc.y });
    }
    serverItems = nxtItems;
}

// ═════════════════════════════════════════════════════════════════════════════
// PHASE CHANGES
// ═════════════════════════════════════════════════════════════════════════════
function onPhaseChange(phase) {
    // Reset transient UI state
    GAME.doorNearby   = null;
    GAME.playerNearby = null;

    const phaseEl     = document.getElementById('phase-display');
    const mafiaPanel  = document.getElementById('mafia-panel');
    const trialUI     = document.getElementById('trial-ui');
    const nightHUD    = document.getElementById('night-hud');

    switch (phase) {
        case 'lobby':
            phaseEl.textContent = '🎭 LOBBY';
            phaseEl.style.color = '#ffffff';
            mafiaPanel?.style && (mafiaPanel.style.display = 'none');
            trialUI?.style     && (trialUI.style.display   = 'none');
            nightHUD?.style    && (nightHUD.style.display  = 'none');
            break;
        case 'night':
            phaseEl.textContent  = `🌙 NIGHT ${GAME.phaseCount}`;
            phaseEl.style.color  = '#88aaff';
            nightHUD?.style     && (nightHUD.style.display = 'flex');
            trialUI?.style      && (trialUI.style.display  = 'none');
            if (GAME.isMafia) mafiaPanel?.style && (mafiaPanel.style.display = 'flex');
            GAME.nightTarget = null;
            renderNightHUD();
            break;
        case 'resolving':
            phaseEl.textContent = '⏳ RESOLVING...';
            phaseEl.style.color = '#ffcc44';
            break;
        case 'day':
            phaseEl.textContent  = `☀️ DAY ${GAME.phaseCount}`;
            phaseEl.style.color  = '#ffff88';
            mafiaPanel?.style   && (mafiaPanel.style.display = 'none');
            nightHUD?.style     && (nightHUD.style.display   = 'none');
            trialUI?.style      && (trialUI.style.display    = 'none');
            GAME.gameOver       = null;
            break;
        case 'vote':
            phaseEl.textContent = `⚖️ VOTE — nominate someone!`;
            phaseEl.style.color = '#ff8800';
            break;
        case 'trial':
            phaseEl.textContent = `⚖️ TRIAL`;
            phaseEl.style.color = '#ff4444';
            break;
        case 'gameover':
            phaseEl.textContent = '🏆 GAME OVER';
            phaseEl.style.color = '#ffff00';
            break;
    }
}

// ═════════════════════════════════════════════════════════════════════════════
// PRIVATE MESSAGES
// ═════════════════════════════════════════════════════════════════════════════
function showPrivateMessage(msg) {
    GAME.privateMessages.unshift({ msg, born: Date.now() });
    if (GAME.privateMessages.length > 6) GAME.privateMessages.pop();
    renderPrivateMessages();
}

function renderPrivateMessages() {
    const el = document.getElementById('private-msgs');
    if (!el) return;
    el.innerHTML = GAME.privateMessages
        .filter(m => Date.now() - m.born < 14_000)
        .map(m => `<div class="priv-msg">${m.msg}</div>`)
        .join('');
    if (el.children.length === 0) el.style.display = 'none';
    else                           el.style.display = 'flex';
}

// ═════════════════════════════════════════════════════════════════════════════
// ANNOUNCEMENT OVERLAY
// ═════════════════════════════════════════════════════════════════════════════
function renderAnnouncement() {
    const el = document.getElementById('announcement-overlay');
    const li = document.getElementById('announcement-lines');
    if (!el || !li) return;
    li.innerHTML = GAME.announcement.map(l => `<div>${l}</div>`).join('');
    el.style.display = GAME.showAnnouncement ? 'flex' : 'none';
}

// ═════════════════════════════════════════════════════════════════════════════
// ROLE CARD
// ═════════════════════════════════════════════════════════════════════════════
function renderRoleCard() {
    const el = document.getElementById('role-card');
    if (!el || !GAME.myRoleName) return;
    const teamColor = { town: '#00e87a', mafia: '#ff3333', neutral: '#aaaaaa' }[GAME.myTeam] ?? '#ffffff';
    el.innerHTML = `
        <div class="role-name" style="color:${GAME.myColor}">${GAME.myRoleName}</div>
        <div class="role-team" style="color:${teamColor}">${(GAME.myTeam || '').toUpperCase()}</div>
        <div class="role-desc">${GAME.myDesc || ''}</div>
    `;
    el.style.borderColor = GAME.myColor || '#444';
    el.style.display     = 'flex';
}

// ═════════════════════════════════════════════════════════════════════════════
// NIGHT HUD
// ═════════════════════════════════════════════════════════════════════════════
function renderNightHUD() {
    const el = document.getElementById('night-hud');
    if (!el) return;
    if (GAME.phase !== 'night') { el.style.display = 'none'; return; }
    el.style.display = 'flex';
    const tEl = document.getElementById('night-target-display');
    if (!tEl) return;
    if (GAME.nightTarget) {
        tEl.innerHTML = `🎯 Visiting: <b style="color:#ff8800">${GAME.nightTarget.targetName}</b>`;
    } else {
        const hint = GAME.roleKey === 'VETERAN'    ? 'Visit your OWN house to go on alert'
                   : GAME.roleKey === 'FLASHBANGER' ? 'Visit your OWN house to set a flash trap'
                   : GAME.roleKey === 'SURVIVOR'    ? 'Visit your OWN house to wear a vest'
                   : GAME.roleKey === 'ARSONIST'    ? 'Visit own house to IGNITE all doused, or visit someone to douse'
                   : 'Walk to a house door and press E to act';
        tEl.innerHTML = `<span style="color:#aaa">No target — ${hint}</span>`;
    }
}

// ═════════════════════════════════════════════════════════════════════════════
// TRIAL UI
// ═════════════════════════════════════════════════════════════════════════════
function renderTrialUI() {
    const el = document.getElementById('trial-ui');
    if (!el) return;
    if (GAME.phase !== 'trial' || !GAME.trialDefendant) { el.style.display = 'none'; return; }
    el.style.display = 'flex';

    document.getElementById('trial-defendant-name').textContent =
        `⚖️ ON TRIAL: ${GAME.trialDefendantName || '???'}`;

    const voteSection = document.getElementById('trial-vote-section');
    const guiltyBtn   = document.getElementById('guilty-btn');
    const innocentBtn = document.getElementById('innocent-btn');

    if (GAME.trialVoteOpen && !GAME.isDead && GAME.trialDefendant !== myId) {
        voteSection.style.display = 'flex';
        guiltyBtn.classList.toggle('voted', GAME.myTrialVote === 'guilty');
        innocentBtn.classList.toggle('voted', GAME.myTrialVote === 'innocent');
    } else {
        voteSection.style.display = GAME.trialVoteOpen ? 'flex' : 'none';
    }

    document.getElementById('trial-tally').textContent =
        `🔴 Guilty: ${GAME.trialVotes.guilty}   🟢 Innocent: ${GAME.trialVotes.innocent}`;
}

function castTrialVote(verdict) {
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    if (GAME.isDead || GAME.trialDefendant === myId) return;
    GAME.myTrialVote = verdict;
    ws.send(JSON.stringify({ type: 'trial_vote', verdict }));
    renderTrialUI();
}

// ═════════════════════════════════════════════════════════════════════════════
// MAFIA PANEL
// ═════════════════════════════════════════════════════════════════════════════
function renderMafiaPanel() {
    const el = document.getElementById('mafia-team-list');
    if (!el) return;
    el.innerHTML = GAME.mafiaTeam.map(t =>
        `<div style="color:#ff4444;font-size:12px;">🩸 ${t.name} — ${t.role}</div>`
    ).join('');
}

function renderMafiaChat() {
    const el = document.getElementById('mafia-chat-messages');
    if (!el) return;
    el.innerHTML = [...GAME.mafiaChat].slice(0, 20).reverse().map(m =>
        `<div class="mafia-msg"><b style="color:#ff6666">${m.from}:</b> ${m.msg}</div>`
    ).join('');
    el.scrollTop = el.scrollHeight;
}

// ═════════════════════════════════════════════════════════════════════════════
// GAME OVER SCREEN
// ═════════════════════════════════════════════════════════════════════════════
function renderGameOver() {
    const el = document.getElementById('announcement-overlay');
    const li = document.getElementById('announcement-lines');
    if (!el || !li || !GAME.gameOver) return;
    const teamColor = { town: '#00e87a', mafia: '#ff3333', neutral: '#aaaaff' }[GAME.gameOver.team] || '#fff';
    li.innerHTML = GAME.gameOver.lines.map((l, i) =>
        `<div style="${i === 0 ? `font-size:28px;color:${teamColor}` : ''}">${l}</div>`
    ).join('');
    el.style.display = 'flex';
}

// ═════════════════════════════════════════════════════════════════════════════
// UPDATE (physics + game input)
// ═════════════════════════════════════════════════════════════════════════════
function update(dt) {
    WORLD.INVENTORY_LAST_EQUIPPED = WORLD.INVENTORY[WORLD.INVENTORY_SELECTED];

    let inputX = 0, inputY = 0;
    if (WORLD.INPUTS.keys.w || WORLD.INPUTS.keys.arrowup)    inputY -= 1;
    if (WORLD.INPUTS.keys.s || WORLD.INPUTS.keys.arrowdown)  inputY += 1;
    if (WORLD.INPUTS.keys.a || WORLD.INPUTS.keys.arrowleft)  inputX -= 1;
    if (WORLD.INPUTS.keys.d || WORLD.INPUTS.keys.arrowright) inputX += 1;

    const isMoving = inputX !== 0 || inputY !== 0;
    if (isMoving) { const len = Math.hypot(inputX, inputY); inputX /= len; inputY /= len; }

    const sprint = WORLD.INPUTS.keys.shift && isMoving;
    ME.bopTimer  = sprint ? ME.bopTimer + dt : 0;
    ME.scale     = 1 + (ME.bopTimer > 0 ? Math.sin(ME.bopTimer * 15) * 0.05 : 0);

    const friction = Math.pow(0.001, dt);
    const accel    = sprint ? 1866 : 1493;
    ME.vx += inputX * accel * dt;
    ME.vy += inputY * accel * dt;
    ME.vx *= friction; ME.vy *= friction;
    ME.x  += ME.vx * dt; ME.y  += ME.vy * dt;

    for (let i = 0; i < 3; i++) resolveCircleCollisions();
    for (let i = 0; i < 2; i++) resolvePlayerCollisionsLocal();

    ME.x = Math.max(0, Math.min(ME.x, WORLD.MAP.columns * WORLD.MAP.tileSize - ME.width));
    ME.y = Math.max(0, Math.min(ME.y, WORLD.MAP.rows    * WORLD.MAP.tileSize - ME.height));

    const smX = WORLD.INPUTS.mouseX / WORLD.SYSTEM.viewScale;
    const smY = WORLD.INPUTS.mouseY / WORLD.SYSTEM.viewScale;
    const psX = ME.x - WORLD.CAMERA.x + ME.width  / 2;
    const psY = ME.y - WORLD.CAMERA.y + ME.height / 2;
    ME.angle  = Math.atan2(smY - psY, smX - psX) + Math.PI / 2;

    const targetCamX = ME.x + ME.width  / 2 - WORLD.CAMERA.width  / 2;
    const targetCamY = ME.y + ME.height / 2 - WORLD.CAMERA.height / 2;
    if (WORLD.CAMERA.x === null) {
        WORLD.CAMERA.x = targetCamX; WORLD.CAMERA.y = targetCamY;
    } else {
        const lf = 1 - Math.exp(-dt * 40);
        WORLD.CAMERA.x += (targetCamX - WORLD.CAMERA.x) * lf;
        WORLD.CAMERA.y += (targetCamY - WORLD.CAMERA.y) * lf;
    }

    // Items
    let nearestDist = Infinity;
    WORLD.NEAREST_ITEM = null;
    const px = ME.x + ME.width / 2, py = ME.y + ME.height / 2;
    serverItems.forEach(item => {
        item.renderX = item.renderX ?? item.x;
        item.renderY = item.renderY ?? item.y;
        item.renderX += (item.x - item.renderX) * 0.3;
        item.renderY += (item.y - item.renderY) * 0.3;
        if (item.animState === 'picking_up') return;
        const d = Math.hypot(item.renderX - px, item.renderY - py);
        if (d < 70 && d < nearestDist) { nearestDist = d; WORLD.NEAREST_ITEM = item; }
    });

    // Other players
    for (const id in serverPlayers) {
        const p = serverPlayers[id];
        p.renderX  = p.renderX  ?? p.x;  p.renderY = p.renderY ?? p.y;
        p.renderAngle = p.renderAngle ?? p.angle || 0;
        p.renderX += (p.x - p.renderX) * 0.3;
        p.renderY += (p.y - p.renderY) * 0.3;
        let diff = (p.angle || 0) - p.renderAngle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff >  Math.PI) diff -= Math.PI * 2;
        p.renderAngle += diff * 0.3;
    }

    // Tick private messages (hide old ones)
    const now = Date.now();
    const before = GAME.privateMessages.length;
    GAME.privateMessages = GAME.privateMessages.filter(m => now - m.born < 14_000);
    if (GAME.privateMessages.length !== before) renderPrivateMessages();

    // Tick door nearby reset
    GAME.doorNearby   = null;
    GAME.playerNearby = null;

    // Tick announcement timer
    if (GAME.showAnnouncement) {
        GAME.announceTimer -= dt;
        if (GAME.announceTimer <= 0) {
            GAME.showAnnouncement = false;
            const el = document.getElementById('announcement-overlay');
            if (el && GAME.gameOver === null) el.style.display = 'none';
        }
    }

    sendPositionUpdate();
}

// ═════════════════════════════════════════════════════════════════════════════
// RENDER
// ═════════════════════════════════════════════════════════════════════════════
function render() {
    if (!WORLD.SYSTEM.isReady) return;

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(WORLD.SYSTEM.viewScale, WORLD.SYSTEM.viewScale);

    const camX = Math.round(WORLD.CAMERA.x);
    const camY = Math.round(WORLD.CAMERA.y);

    // ── Background tiles ──────────────────────────────────────────────────────
    const startCX = Math.max(0, Math.floor(camX / WORLD.MAP.chunkSize));
    const endCX   = Math.min(WORLD.MAP.bgChunks[0].length - 1, Math.floor((camX + WORLD.CAMERA.width)  / WORLD.MAP.chunkSize));
    const startCY = Math.max(0, Math.floor(camY / WORLD.MAP.chunkSize));
    const endCY   = Math.min(WORLD.MAP.bgChunks.length    - 1, Math.floor((camY + WORLD.CAMERA.height) / WORLD.MAP.chunkSize));

    for (let cy = startCY; cy <= endCY; cy++)
        for (let cx = startCX; cx <= endCX; cx++)
            ctx.drawImage(WORLD.MAP.bgChunks[cy][cx], cx * WORLD.MAP.chunkSize - camX, cy * WORLD.MAP.chunkSize - camY, WORLD.MAP.chunkSize + 0.5, WORLD.MAP.chunkSize + 0.5);

    // ── Night overlay ─────────────────────────────────────────────────────────
    if (GAME.phase === 'night' || GAME.phase === 'resolving') {
        ctx.fillStyle = 'rgba(0, 5, 30, 0.54)';
        ctx.fillRect(camX, camY, WORLD.CAMERA.width + 1, WORLD.CAMERA.height + 1);
    }

    // ── Houses ────────────────────────────────────────────────────────────────
    GAME.houses.forEach(h => drawHouse(h, camX, camY));

    // ── Items ─────────────────────────────────────────────────────────────────
    serverItems.forEach(item => {
        ctx.save();
        ctx.translate((item.renderX ?? item.x) - camX, (item.renderY ?? item.y) - camY);
        let scale = 0.95, rot = item.targetRotation;
        if (item.animState === 'dropping') {
            const t = Math.max(0, Math.min(1, 1 - item.animTimer / 0.3));
            const ease = 1 - Math.pow(1 - t, 3);
            scale = 0.95 * ease; rot = item.targetRotation * ease + ME.angle * (1 - ease);
        } else if (item.animState === 'picking_up') {
            const t = Math.max(0, Math.min(1, item.animTimer / 0.2));
            scale = 0.95 * t; rot = item.targetRotation * t + ME.angle * (1 - t);
        }
        ctx.rotate(rot); ctx.scale(scale, scale);
        ctx.fillStyle = '#fff'; ctx.fillRect(-10, -10, 20, 20);
        ctx.restore();
    });

    // ── Other players ─────────────────────────────────────────────────────────
    for (const id in serverPlayers) {
        const p   = serverPlayers[id];
        const pRX = (p.renderX ?? p.x) - camX + p.width  / 2;
        const pRY = (p.renderY ?? p.y) - camY + p.height / 2;
        const sW  = p.width  * (p.scale || 1);
        const sH  = p.height * (p.scale || 1);
        const dead = GAME.deadIds.has(parseInt(id));

        ctx.save();
        ctx.translate(pRX, pRY);
        ctx.rotate(p.renderAngle ?? 0);
        if (dead) ctx.globalAlpha = 0.35;
        ctx.drawImage(playerImg, -sW / 2, -sH / 2, sW, sH);
        if (dead) ctx.globalAlpha = 1;
        ctx.restore();

        ctx.textAlign = 'center'; ctx.lineJoin = 'round'; ctx.lineWidth = 3;
        ctx.strokeStyle = 'rgba(0,0,0,0.85)';
        ctx.font        = "bold 13px 'Segoe UI'";
        ctx.fillStyle   = dead ? '#666666' : (p.mayorRevealed ? '#ffff44' : '#ffffff');
        const pLabel    = (dead ? '💀 ' : '') + p.name + (p.isOwner ? ' 👑' : '');
        ctx.strokeText(pLabel, pRX, pRY - sH / 2 - 28);
        ctx.fillText(pLabel,   pRX, pRY - sH / 2 - 28);

        // Nomination count
        const nom = p.nominated || GAME.nominations[id] || 0;
        if (nom > 0 && (GAME.phase === 'day' || GAME.phase === 'vote')) {
            ctx.fillStyle = '#ff4444';
            ctx.font      = "bold 11px 'Segoe UI'";
            ctx.strokeText(`🗳 ${nom}`, pRX, pRY - sH / 2 - 14);
            ctx.fillText(`🗳 ${nom}`,   pRX, pRY - sH / 2 - 14);
        }
    }

    // ── Me ────────────────────────────────────────────────────────────────────
    const pRX    = ME.x - camX + ME.width  / 2;
    const pRY    = ME.y - camY + ME.height / 2;
    const pScaledW = ME.width  * ME.scale;
    const pScaledH = ME.height * ME.scale;

    ctx.save();
    ctx.translate(pRX, pRY); ctx.rotate(ME.angle);
    if (GAME.isDead) ctx.globalAlpha = 0.4;
    ctx.drawImage(playerImg, -pScaledW / 2, -pScaledH / 2, pScaledW, pScaledH);
    ctx.globalAlpha = 1;
    ctx.restore();

    ctx.textAlign = 'center'; ctx.lineJoin = 'round'; ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(0,0,0,0.85)';
    ctx.font        = "bold 13px 'Segoe UI'";
    ctx.fillStyle   = GAME.myColor || '#ffffff';
    const myLabel   = myName + (isOwner ? ' 👑' : '');
    ctx.strokeText(myLabel, pRX, pRY - pScaledH / 2 - 28);
    ctx.fillText(myLabel,   pRX, pRY - pScaledH / 2 - 28);

    // Role tag under name during game
    if (GAME.myRoleName && GAME.phase !== 'lobby') {
        ctx.font      = "11px 'Segoe UI'";
        ctx.fillStyle = GAME.myColor || '#aaa';
        ctx.fillText(`[${GAME.myRoleName}]`, pRX, pRY - pScaledH / 2 - 14);
    }

    // Item pickup hint
    if (WORLD.NEAREST_ITEM && WORLD.INVENTORY.includes(null)) {
        ctx.save();
        ctx.translate((WORLD.NEAREST_ITEM.renderX ?? WORLD.NEAREST_ITEM.x) - camX,
                      (WORLD.NEAREST_ITEM.renderY ?? WORLD.NEAREST_ITEM.y) - camY - 25);
        ctx.fillStyle = 'rgba(0,0,0,0.8)';
        ctx.fillRect(-12, -12, 24, 24);
        ctx.fillStyle = '#ffffff'; ctx.font = "bold 13px 'Segoe UI'";
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('E', 0, 1);
        ctx.restore();
    }

    // Door interact hint
    if (GAME.doorNearby && GAME.phase === 'night' && !GAME.isDead) {
        const h = GAME.houses.find(hh => hh.id === GAME.doorNearby.houseId);
        if (h) {
            const dx = h.doorX - camX, dy = h.doorY - camY - 30;
            ctx.save();
            const ownStr = GAME.doorNearby.ownerName
                ? `E → Visit ${GAME.doorNearby.ownerName}`
                : (GAME.doorNearby.houseId === (GAME.houses.find(hh => hh.ownerId === myId)?.id ?? -1) ? 'E → Stay home' : 'E → Visit');
            ctx.fillStyle = 'rgba(0,0,0,0.85)';
            ctx.fillRect(dx - 80, dy - 16, 160, 26);
            ctx.fillStyle = '#ffee88'; ctx.font = "bold 12px 'Segoe UI'";
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(ownStr, dx, dy - 2);
            ctx.restore();
        }
    }

    // Player nominate hint
    if (GAME.playerNearby && (GAME.phase === 'day' || GAME.phase === 'vote') && !GAME.isDead) {
        const op = serverPlayers[GAME.playerNearby.playerId];
        if (op) {
            const opX = (op.renderX ?? op.x) - camX + op.width / 2;
            const opY = (op.renderY ?? op.y) - camY - op.height / 2 - 40;
            ctx.save();
            ctx.fillStyle = 'rgba(0,0,0,0.85)';
            ctx.fillRect(opX - 65, opY - 16, 130, 26);
            ctx.fillStyle = '#ff8844'; ctx.font = "bold 12px 'Segoe UI'";
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(`E → Nominate ${GAME.playerNearby.playerName}`, opX, opY - 2);
            ctx.restore();
        }
    }

    // ── Foreground tiles ──────────────────────────────────────────────────────
    for (let cy = startCY; cy <= endCY; cy++)
        for (let cx = startCX; cx <= endCX; cx++)
            ctx.drawImage(WORLD.MAP.fgChunks[cy][cx], cx * WORLD.MAP.chunkSize - camX, cy * WORLD.MAP.chunkSize - camY, WORLD.MAP.chunkSize + 0.5, WORLD.MAP.chunkSize + 0.5);

    // ── Editor preview ────────────────────────────────────────────────────────
    if (WORLD.EDITOR.enabled && WORLD.EDITOR.selectedTileGid >= 0) {
        const wX  = (WORLD.INPUTS.mouseX / WORLD.SYSTEM.viewScale) + WORLD.CAMERA.x;
        const wY  = (WORLD.INPUTS.mouseY / WORLD.SYSTEM.viewScale) + WORLD.CAMERA.y;
        const col = Math.floor(wX / WORLD.MAP.tileSize);
        const row = Math.floor(wY / WORLD.MAP.tileSize);
        if (col >= 0 && col < WORLD.MAP.columns && row >= 0 && row < WORLD.MAP.rows) {
            const drawX = col * WORLD.MAP.tileSize - camX;
            const drawY = row * WORLD.MAP.tileSize - camY;
            ctx.save(); ctx.globalAlpha = 0.5;
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

    // ── Chat bubbles ──────────────────────────────────────────────────────────
    for (const id in serverPlayers) {
        const p   = serverPlayers[id];
        const pRX = (p.renderX ?? p.x) - camX + p.width  / 2;
        const pRY = (p.renderY ?? p.y) - camY + p.height / 2;
        renderChatHistory(ctx, p.chats, pRX, pRY - p.height / 2 - 48);
    }
    renderChatHistory(ctx, ME.chats, pRX, pRY - pScaledH / 2 - 48);

    // ── Phase timer bar ───────────────────────────────────────────────────────
    if (GAME.timerMs > 0 && !['lobby','gameover','resolving'].includes(GAME.phase)) {
        const maxMs  = GAME.phase === 'night' ? 90_000 : GAME.phase === 'day' ? 120_000 : 50_000;
        const frac   = Math.max(0, Math.min(1, GAME.timerMs / maxMs));
        const barW   = WORLD.CAMERA.width * 0.5;
        const barX   = (WORLD.CAMERA.width - barW) / 2;
        const barY   = 14;
        const secs   = Math.ceil(GAME.timerMs / 1000);

        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(barX + camX, barY + camY, barW, 8);

        const barColor = secs <= 10 ? '#ff4444' : GAME.phase === 'night' ? '#4488ff' : '#44cc44';
        ctx.fillStyle  = barColor;
        ctx.fillRect(barX + camX, barY + camY, barW * frac, 8);

        ctx.textAlign  = 'center'; ctx.font = "bold 11px 'Segoe UI'";
        ctx.fillStyle  = '#ffffff';
        ctx.fillText(`${secs}s`, WORLD.CAMERA.width / 2 + camX, barY + camY + 20);
    }

    ctx.restore();
}

// ── House Drawing ─────────────────────────────────────────────────────────────
function drawHouse(h, camX, camY) {
    const sx = h.x - camX, sy = h.y - camY;
    const isMyHouse   = h.ownerId === myId;
    const isNight     = GAME.phase === 'night' || GAME.phase === 'resolving';
    const isTargeted  = GAME.nightTarget?.targetId === h.ownerId;

    // Wall fill
    ctx.fillStyle = isNight ? `${h.color}22` : `${h.color}33`;
    ctx.fillRect(sx, sy, h.w, h.h);

    // Glow on target
    if (isTargeted) {
        ctx.shadowColor = h.color;
        ctx.shadowBlur  = 18;
    }

    // Roof stripe
    ctx.fillStyle = isMyHouse ? `${h.color}99` : `${h.color}55`;
    ctx.fillRect(sx, sy, h.w, 18);

    // Border
    ctx.strokeStyle = isMyHouse  ? '#ffffff'
                    : isTargeted ? '#ff8800'
                    : h.color;
    ctx.lineWidth   = isMyHouse || isTargeted ? 3 : 1.5;
    ctx.strokeRect(sx, sy, h.w, h.h);
    ctx.shadowBlur  = 0;

    // Lit window at night
    if (isNight) {
        ctx.fillStyle = 'rgba(255, 220, 100, 0.25)';
        ctx.fillRect(sx + h.w * 0.25 - 12, sy + h.h * 0.35 - 10, 24, 20);
        ctx.strokeStyle = 'rgba(255,220,100,0.6)';
        ctx.lineWidth   = 1;
        ctx.strokeRect(sx + h.w * 0.25 - 12, sy + h.h * 0.35 - 10, 24, 20);

        ctx.fillStyle = 'rgba(255, 220, 100, 0.25)';
        ctx.fillRect(sx + h.w * 0.75 - 12, sy + h.h * 0.35 - 10, 24, 20);
        ctx.strokeRect(sx + h.w * 0.75 - 12, sy + h.h * 0.35 - 10, 24, 20);
    }

    // Door
    const dx = h.doorX - camX, dy = h.doorY - camY;
    ctx.fillStyle   = '#5a2d00';
    ctx.fillRect(dx - 11, dy - 22, 22, 22);
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth   = 1.5;
    ctx.strokeRect(dx - 11, dy - 22, 22, 22);
    // Door knob
    ctx.fillStyle = '#ffd700';
    ctx.beginPath(); ctx.arc(dx + 5, dy - 11, 2.5, 0, Math.PI * 2); ctx.fill();

    // Doused flame icon
    if (h.doused) {
        ctx.font = '16px serif'; ctx.textAlign = 'center';
        ctx.fillText('🛢️', sx + h.w / 2, sy + h.h - 8);
    }

    // Owner label
    if (h.ownerName) {
        ctx.fillStyle = isMyHouse ? '#ffffff' : h.color;
        ctx.font      = isMyHouse ? "bold 12px 'Segoe UI'" : "11px 'Segoe UI'";
        ctx.textAlign = 'center';
        ctx.strokeStyle = 'rgba(0,0,0,0.8)';
        ctx.lineWidth   = 2;
        ctx.strokeText(h.ownerName + (isMyHouse ? ' 🏠' : ''), sx + h.w / 2, sy - 6);
        ctx.fillText(h.ownerName   + (isMyHouse ? ' 🏠' : ''), sx + h.w / 2, sy - 6);
    }
}

// ═════════════════════════════════════════════════════════════════════════════
// COLLISION
// ═════════════════════════════════════════════════════════════════════════════
function resolveCircleCollisions() {
    const scale  = ME.scale;
    const radius = (ME.width * scale) / 2;
    let pX = ME.x + ME.width  / 2;
    let pY = ME.y + ME.height / 2;
    const wallLayer = WORLD.MAP.layers.find(l => l.name === 'walls');
    if (!wallLayer) return;
    const left = Math.floor((pX - radius) / WORLD.MAP.tileSize);
    const right = Math.floor((pX + radius) / WORLD.MAP.tileSize);
    const top   = Math.floor((pY - radius) / WORLD.MAP.tileSize);
    const bottom = Math.floor((pY + radius) / WORLD.MAP.tileSize);
    for (let r = top; r <= bottom; r++) {
        for (let c = left; c <= right; c++) {
            if (c < 0 || c >= WORLD.MAP.columns || r < 0 || r >= WORLD.MAP.rows) continue;
            if (wallLayer.data[r * WORLD.MAP.columns + c] === 0) continue;
            const tileX = c * WORLD.MAP.tileSize, tileY = r * WORLD.MAP.tileSize;
            let testX = Math.max(tileX, Math.min(pX, tileX + WORLD.MAP.tileSize));
            let testY = Math.max(tileY, Math.min(pY, tileY + WORLD.MAP.tileSize));
            const dX = pX - testX, dY = pY - testY;
            const dist = Math.hypot(dX, dY);
            if (dist > 0 && dist < radius) {
                const overlap = radius - dist;
                pX += (dX / dist) * overlap;
                pY += (dY / dist) * overlap;
            }
        }
    }
    ME.x = pX - ME.width / 2; ME.y = pY - ME.height / 2;
}

function resolvePlayerCollisionsLocal() {
    const meR  = (ME.width * ME.scale) / 2;
    const mecx = ME.x + ME.width  / 2;
    const mecy = ME.y + ME.height / 2;
    for (const id in serverPlayers) {
        const p = serverPlayers[id];
        const pR = (p.width * (p.scale || 1)) / 2;
        const pcx = p.renderX + p.width  / 2;
        const pcy = p.renderY + p.height / 2;
        const dX = mecx - pcx, dY = mecy - pcy;
        const dist = Math.hypot(dX, dY);
        const min  = meR + pR;
        if (dist > 0 && dist < min) {
            const overlap = min - dist;
            ME.x += (dX / dist) * (overlap / 2);
            ME.y += (dY / dist) * (overlap / 2);
            const dot = ME.vx * (dX / dist) + ME.vy * (dY / dist);
            if (dot < 0) { ME.vx -= dot * (dX / dist); ME.vy -= dot * (dY / dist); }
        }
    }
}

// ═════════════════════════════════════════════════════════════════════════════
// SEND
// ═════════════════════════════════════════════════════════════════════════════
function sendPositionUpdate() {
    if (!myId || !ws || ws.readyState !== WebSocket.OPEN) return;
    ws.send(JSON.stringify({ type: 'position_update', x: ME.x, y: ME.y, vx: ME.vx, vy: ME.vy, angle: ME.angle, scale: ME.scale }));
}

// ═════════════════════════════════════════════════════════════════════════════
// GAME LOOP
// ═════════════════════════════════════════════════════════════════════════════
function gameLoop(now) {
    if (!WORLD.SYSTEM.isReady || !myId) return;
    requestAnimationFrame(gameLoop);
    let dt = (now - WORLD.SYSTEM.lastTime) / 1000;
    WORLD.SYSTEM.lastTime = now;
    if (dt > 0.1) dt = 0.1;
    update(dt);
    render();
}

// ═════════════════════════════════════════════════════════════════════════════
// CHAT BUBBLES
// ═════════════════════════════════════════════════════════════════════════════
function drawChatBubble(ctx, text, x, y) {
    ctx.font = "bold 14px 'Segoe UI'";
    const tw     = ctx.measureText(text).width;
    const bw = tw + 24, bh = 28;
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x - bw / 2, y - bh, bw, bh, 6);
    else ctx.rect(x - bw / 2, y - bh, bw, bh);
    ctx.fill();
    ctx.beginPath(); ctx.moveTo(x - 6, y); ctx.lineTo(x + 6, y); ctx.lineTo(x, y + 6); ctx.fill();
    ctx.fillStyle = '#ffffff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y - bh / 2 + 1);
}

function renderChatHistory(ctx, chats, x, bottomY) {
    if (!chats?.length) return;
    let cy = bottomY;
    for (const c of chats) { drawChatBubble(ctx, c.text, x, cy); cy -= 36; }
}

// ═════════════════════════════════════════════════════════════════════════════
// MAP / CHUNK RENDERING
// ═════════════════════════════════════════════════════════════════════════════
function preRenderMap() {
    const numCX = Math.ceil((WORLD.MAP.columns * WORLD.MAP.tileSize) / WORLD.MAP.chunkSize);
    const numCY = Math.ceil((WORLD.MAP.rows    * WORLD.MAP.tileSize) / WORLD.MAP.chunkSize);
    WORLD.MAP.bgChunks = []; WORLD.MAP.fgChunks = [];
    for (let cy = 0; cy < numCY; cy++) {
        WORLD.MAP.bgChunks[cy] = []; WORLD.MAP.fgChunks[cy] = [];
        for (let cx = 0; cx < numCX; cx++) {
            const bg = document.createElement('canvas'); bg.width = bg.height = WORLD.MAP.chunkSize;
            const fg = document.createElement('canvas'); fg.width = fg.height = WORLD.MAP.chunkSize;
            WORLD.MAP.bgChunks[cy][cx] = bg; WORLD.MAP.fgChunks[cy][cx] = fg;
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

// ═════════════════════════════════════════════════════════════════════════════
// IMAGES
// ═════════════════════════════════════════════════════════════════════════════
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
        document.getElementById('loading-screen').style.display  = 'none';
        document.getElementById('main-menu-ui').style.display    = 'flex';
        resizeCanvas();
    }
}

// ═════════════════════════════════════════════════════════════════════════════
// INPUT
// ═════════════════════════════════════════════════════════════════════════════
window.addEventListener('keydown', e => {
    const key = e.key.toLowerCase();

    // Will editor toggle
    if (key === 'w' && !WORLD.INPUTS.keys.w && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA' && document.activeElement.id !== 'will-textarea') {
        // W is also movement — only open will if we have a role
        if (GAME.myRoleName && GAME.phase !== 'lobby') {
            // will is opened via ctrl+W to avoid conflict
        }
    }

    if (e.key === 'Tab') {
        e.preventDefault();
        if (GAME.myRoleName && GAME.phase !== 'lobby') {
            GAME.willOpen = !GAME.willOpen;
            const willUI = document.getElementById('will-ui');
            if (GAME.willOpen) {
                willUI.style.display = 'flex';
                document.getElementById('will-textarea').focus();
            } else {
                willUI.style.display = 'none';
                document.getElementById('will-textarea').blur();
            }
            e.preventDefault();
        }
        return;
    }

    if (e.key === 'Enter') {
        if (!ws || ws.readyState !== WebSocket.OPEN) {
            if (document.getElementById('main-menu-ui')?.style.display !== 'none')
                document.getElementById('play-btn')?.click();
            return;
        }
        const chatUI    = document.getElementById('chat-ui');
        const chatInput = document.getElementById('chat-input');
        if (document.activeElement === chatInput) {
            const msg = chatInput.value.trim();
            if (msg.length > 0) ws.send(JSON.stringify({ type: 'chat', text: msg }));
            chatInput.value = ''; chatUI.style.display = 'none'; chatInput.blur();
        } else {
            chatUI.style.display = 'block';
            chatInput.focus();
            for (const k in WORLD.INPUTS.keys) WORLD.INPUTS.keys[k] = false;
        }
        e.preventDefault(); return;
    }

    if (e.key === 'Escape') {
        const chatInput = document.getElementById('chat-input');
        if (document.activeElement === chatInput) {
            chatInput.value = '';
            document.getElementById('chat-ui').style.display = 'none';
            chatInput.blur(); e.preventDefault(); return;
        }
        // Close announcement
        GAME.showAnnouncement = false;
        const ao = document.getElementById('announcement-overlay');
        if (ao && GAME.gameOver === null) ao.style.display = 'none';
        return;
    }

    if (document.activeElement.tagName !== 'INPUT'
     && document.activeElement.tagName !== 'TEXTAREA'
     && document.activeElement.tagName !== 'SELECT') {

        if (WORLD.INPUTS.keys.hasOwnProperty(key)) WORLD.INPUTS.keys[key] = true;
        if (!ws || ws.readyState !== WebSocket.OPEN) return;

        // Inventory
        if (['1','2','3','4','5'].includes(key))
            ws.send(JSON.stringify({ type: 'inv_select', index: parseInt(key) - 1 }));

        if (key === 'g')
            ws.send(JSON.stringify({ type: 'drop', index: WORLD.INVENTORY_SELECTED }));

        // E — context-sensitive action
        if (key === 'e') {
            if (GAME.phase === 'night' && !GAME.isDead && GAME.doorNearby) {
                // Visit this house
                ws.send(JSON.stringify({ type: 'visit', houseId: GAME.doorNearby.houseId }));
            } else if ((GAME.phase === 'day' || GAME.phase === 'vote') && !GAME.isDead && GAME.playerNearby) {
                // Nominate this player
                ws.send(JSON.stringify({ type: 'nominate', targetId: GAME.playerNearby.playerId }));
                showPrivateMessage(`🗳 Nominated ${GAME.playerNearby.playerName}`);
            } else if (WORLD.NEAREST_ITEM && WORLD.INVENTORY.includes(null)) {
                ws.send(JSON.stringify({ type: 'pickup', itemId: WORLD.NEAREST_ITEM.id }));
            }
        }
    }
});

window.addEventListener('keyup', e => {
    if (document.activeElement.tagName !== 'INPUT'
     && document.activeElement.tagName !== 'TEXTAREA'
     && document.activeElement.tagName !== 'SELECT') {
        const key = e.key.toLowerCase();
        if (WORLD.INPUTS.keys.hasOwnProperty(key)) WORLD.INPUTS.keys[key] = false;
    }
});

window.addEventListener('mousemove', e => {
    WORLD.INPUTS.mouseX = e.clientX; WORLD.INPUTS.mouseY = e.clientY;
    if (WORLD.INPUTS.isMouseDown && dragIndex === -1 && WORLD.EDITOR.enabled) handleMapEdit(e.clientX, e.clientY);
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
    if (e.target.closest('#editor-ui') || e.target.closest('#leaderboard-ui')
     || e.target.closest('#bottom-ui') || e.target.closest('#game-hud')
     || e.target.closest('#trial-ui') || e.target.closest('#will-ui')
     || e.target.closest('#mafia-panel') || e.target.closest('#announcement-overlay')) return;
    if (e.button === 0) { WORLD.INPUTS.isMouseDown = true; if (WORLD.EDITOR.enabled) handleMapEdit(e.clientX, e.clientY); }
});

window.addEventListener('mouseup', e => {
    WORLD.INPUTS.isMouseDown = false;
    if (dragIndex !== -1 && ws) {
        dragGhost.style.display = 'none';
        const dropTarget = document.elementFromPoint(e.clientX, e.clientY);
        if (dropTarget?.classList.contains('inv-slot')) {
            const dropIndex = Array.from(document.querySelectorAll('.inv-slot')).indexOf(dropTarget);
            ws.send(JSON.stringify({ type: 'inv_swap', from: dragIndex, to: dropIndex }));
        } else if (!e.target.closest('#bottom-ui')) {
            ws.send(JSON.stringify({ type: 'drop', index: dragIndex }));
        }
        dragIndex = -1;
    }
});

// ═════════════════════════════════════════════════════════════════════════════
// EDITOR / ADMIN / LEADERBOARD / INVENTORY  (unchanged from original)
// ═════════════════════════════════════════════════════════════════════════════
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
    const tiles = [{ name: 'Grass', col: 0, row: 0 }, { name: 'Dirt', col: 1, row: 0 }, { name: 'Stone', col: 0, row: 1 }];
    tiles.forEach((tile, idx) => {
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
    eraser.onclick   = () => {
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

function sendKick(id) { if (ws) ws.send(JSON.stringify({ type: 'kick', targetId: id })); }
function sendBan(id)  { if (ws) ws.send(JSON.stringify({ type: 'ban',  targetId: id })); }

function showAdminPanel(targetId, targetName, mouseX, mouseY) {
    const existing = document.getElementById('admin-panel');
    if (existing) { existing.remove(); if (existing.dataset.target === String(targetId)) return; }
    const panel = document.createElement('div');
    panel.id = 'admin-panel'; panel.dataset.target = String(targetId);
    panel.style.cssText = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px solid rgba(255,255,255,0.15);min-width:140px;';
    const header = document.createElement('div');
    header.style.cssText = 'padding:8px 14px;font-weight:bold;font-size:13px;color:#fff;background:rgba(0,0,0,0.6);border-bottom:1px solid rgba(255,255,255,0.1);';
    header.textContent = targetName; panel.appendChild(header);
    const mkBtn = (label, color, action) => {
        const btn = document.createElement('button');
        btn.textContent = label;
        btn.style.cssText = `background:transparent;color:${color};border:none;border-bottom:1px solid rgba(255,255,255,0.1);padding:8px 14px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe UI,sans-serif;`;
        btn.onmouseenter = () => btn.style.background = 'rgba(255,255,255,0.1)';
        btn.onmouseleave = () => btn.style.background = 'transparent';
        btn.onclick = () => { action(); panel.remove(); };
        return btn;
    };
    panel.appendChild(mkBtn('Kick', 'white',   () => sendKick(targetId)));
    panel.appendChild(mkBtn('Ban',  '#ff4444', () => sendBan(targetId)));
    document.body.appendChild(panel);
    const pw = panel.offsetWidth || 145, ph = panel.offsetHeight || 80;
    let px = mouseX - pw, py = mouseY;
    if (px < 4) px = mouseX;
    if (py + ph > window.innerHeight - 4) py = window.innerHeight - ph - 4;
    panel.style.left = px + 'px'; panel.style.top = py + 'px';
    const close = ev => { if (!panel.contains(ev.target)) { panel.remove(); document.removeEventListener('mousedown', close); } };
    setTimeout(() => document.addEventListener('mousedown', close), 0);
}

function updateLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = '';
    const selfDiv = document.createElement('div');
    selfDiv.className = 'leaderboard-entry';
    const deadMark = GAME.isDead ? ' 💀' : '';
    selfDiv.innerHTML = `<span style="color:${GAME.myColor||'#fff'}">${myName}${isOwner ? ' 👑' : ''}${deadMark}</span>`;
    list.appendChild(selfDiv);
    for (const id in serverPlayers) {
        const sp  = serverPlayers[id];
        const div = document.createElement('div');
        div.className = 'leaderboard-entry';
        const dead = GAME.deadIds.has(sp.id);
        const nom  = GAME.nominations[id] || 0;
        div.innerHTML = `<span style="color:${dead?'#666':'#fff'}">${dead?'💀 ':''}${sp.name}${sp.isOwner?' 👑':''}${sp.mayorRevealed?' 👑Mayor':''}</span>${nom>0?`<span style="color:#ff4444">🗳${nom}</span>`:''}`;
        if (isOwner && !sp.isOwner) {
            div.style.cursor = 'context-menu';
            div.addEventListener('contextmenu', ev => { ev.preventDefault(); ev.stopPropagation(); showAdminPanel(sp.id, sp.name, ev.clientX, ev.clientY); });
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
        slot.onmouseleave = () => { document.getElementById('tooltip-ui').style.display = 'none'; };
        slot.onmousedown  = e => {
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

// ── Resize ────────────────────────────────────────────────────────────────────
window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    WORLD.SYSTEM.viewScale = Math.max(canvas.width / LOGICAL_WIDTH, canvas.height / LOGICAL_HEIGHT);
    WORLD.CAMERA.width     = canvas.width  / WORLD.SYSTEM.viewScale;
    WORLD.CAMERA.height    = canvas.height / WORLD.SYSTEM.viewScale;
    ctx.imageSmoothingEnabled = false;
}

// ── Zoom prevention ───────────────────────────────────────────────────────────
function preventZoom(e) {
    if (e.ctrlKey || e.metaKey) {
        if (e.type === 'wheel' || ['=','-','0','+'].includes(e.key) || ['NumpadAdd','NumpadSubtract'].includes(e.code))
            e.preventDefault();
    }
}
window.addEventListener('wheel',   preventZoom, { passive: false });
window.addEventListener('keydown', preventZoom, { passive: false });

document.getElementById('leaderboard-header').addEventListener('click', () => {
    const list   = document.getElementById('leaderboard-list');
    const toggle = document.getElementById('leaderboard-toggle');
    if (list.style.display === 'none') { list.style.display = 'flex'; toggle.style.transform = 'rotate(0deg)'; }
    else                               { list.style.display = 'none'; toggle.style.transform = 'rotate(180deg)'; }
});
