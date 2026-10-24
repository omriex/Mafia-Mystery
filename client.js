document.addEventListener('contextmenu', event => event.preventDefault());

const SUBALIGNMENT_ROLES = {
    'Town Investigative': ['Investigator', 'Tracker'],
    'Town Protective': ['Doctor', 'Archer'],
    'Town Killing': ['Vigilante'],
    'Town Support': ['Escort', 'Celebrity', 'Mayor'],
    'Mafia Killing': ['Skinwalker']
};

let _lastRoleListKey = '';

function updateRoleListUI(list, mode) {
    const ui = document.getElementById('role-list-ui');
    const items = document.getElementById('role-list-items');
    if (!ui || !items) return;

    if (!mode || mode === 'off' || !list || list.length === 0) {
        ui.style.display = 'none';
        return;
    }

    const newKey = mode + '|' + JSON.stringify(list);
    if (newKey === _lastRoleListKey) return;
    _lastRoleListKey = newKey;

    const tt = document.getElementById('role-tooltip');
    if (tt) { tt.style.visibility = 'hidden'; tt.style.opacity = '0'; }

    ui.style.display = 'flex';
    items.innerHTML = '';

    list.forEach(item => {
        const row = document.createElement('div');
        row.className = 'role-list-entry';
        const isMafia = item.name.includes('Mafia') || item.name === 'Skinwalker';
        row.classList.add(isMafia ? 'mafia' : 'town');

        if (mode === 'precise' && item.isDead) {
            row.classList.remove('town', 'mafia');
            row.classList.add('dead');
            row.innerHTML = `<span>${item.name} <span style="font-size:11px;opacity:0.8;">[DEAD]</span></span>`;
        } else {
            const countPrefix = (item.count !== undefined && item.count !== null) ? `${item.count}x ` : '';
            row.innerHTML = `<span>${countPrefix}${item.name}</span>`;
        }

        if (mode === 'subalignments' && SUBALIGNMENT_ROLES[item.name]) {
            row.style.cursor = 'pointer';
            row.addEventListener('mouseenter', () => {
                const tt = document.getElementById('role-tooltip');
                if (!tt) return;
                const roles = SUBALIGNMENT_ROLES[item.name].join(', ');
                tt.innerHTML = '';
                const nameSpan = document.createElement('span');
                nameSpan.style.color = '#ffcc00';
                nameSpan.textContent = item.name;
                tt.appendChild(nameSpan);
                tt.appendChild(document.createElement('br'));
                tt.appendChild(document.createTextNode('Possible Roles: ' + roles));
                const rect = row.getBoundingClientRect();
                tt.style.left = (rect.left - 235) + 'px';
                tt.style.top = rect.top + 'px';
                tt.style.display = 'block';
                tt.style.visibility = 'visible';
                tt.style.opacity = '1';
            });
            row.addEventListener('mouseleave', () => {
                const tt = document.getElementById('role-tooltip');
                if (tt) { tt.style.display = 'none'; tt.style.visibility = 'hidden'; tt.style.opacity = '0'; }
            });
        }

        items.appendChild(row);
    });
}

let _$x050b54 = null;
let _0x8d6fc4 = null;
const _pageToken = new URLSearchParams(window.location.search).get('token') || '';
let _$xc4e97d = 'Player???';
let _ox33dcef = false;
let _Ox55f60b = {};
let __xfc6336 = null;
let _0xa2d061 = 0;
let _$xda4a1a = 0;
let _Ox6b56a8 = new Set();
let abilityUIOpenedThisNight = false;
let mouseRelativeMovement = localStorage.getItem('mouseRelativeMovement') === 'true';
let isTouchDevice = ('ontouchstart' in window) || navigator.maxTouchPoints > 0 || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
let joystickActive = false;
let joystickTouchId = null;
let joystickX = 0;
let joystickY = 0;
let mobileSprintActive = false;
let touchAimActive = false;
let touchAimAngle = 0;
let touchAimId = null;

let joystickAutoSprint = false;

const AudioManager = (() => {
    const TRACKS = {
        discussion: 'audio/Mafia Mystery 1 Discussion.mp3',
        voting:     'audio/Mafia Mystery 1 Voting.mp3',
        wait:       'audio/Mafia Mystery 1 Wait.mp3',
        execution:  'audio/Mafia Mystery 1 Execution.mp3',
    };

    let   _targetVol = parseFloat(localStorage.getItem('musicVolume') ?? '0.7');
    const FADE_MS    = 800;   

    const _elems     = {};    
    const _fadeIds   = {};    
    let _current     = null;  
    let _muted       = _targetVol === 0;   
    let _unlocked    = false; 

    
    for (const [key, src] of Object.entries(TRACKS)) {
        const a = new Audio(src);
        a.loop    = true;
        a.volume  = 0;
        a.preload = 'auto';
        _elems[key] = a;
        _fadeIds[key] = null;
    }

    
    const _clamp = v => Math.min(1, Math.max(0, v));

    
    function _cancelFade(key) {
        if (_fadeIds[key] !== null) {
            cancelAnimationFrame(_fadeIds[key]);
            _fadeIds[key] = null;
        }
    }

    
    
    function _fade(key, fromVol, toVol, durationMs, onDone) {
        _cancelFade(key);
        const el    = _elems[key];
        const start = performance.now();

        const tick = (now) => {
            const t = _clamp((now - start) / durationMs);
            const vol = _clamp(fromVol + (toVol - fromVol) * t);
            el.volume = _muted ? 0 : vol;

            if (t < 1) {
                _fadeIds[key] = requestAnimationFrame(tick);
            } else {
                _fadeIds[key] = null;
                el.volume = _muted ? 0 : _clamp(toVol);
                if (onDone) onDone();
            }
        };

        _fadeIds[key] = requestAnimationFrame(tick);
    }

    
    function _tryPlay(el) {
        const p = el.play();
        if (p && p.catch) {
            p.catch(() => {
                
                if (!_unlocked) {
                    const unlock = () => {
                        _unlocked = true;
                        el.play().catch(() => {});
                        document.removeEventListener('click',      unlock);
                        document.removeEventListener('keydown',    unlock);
                        document.removeEventListener('touchstart', unlock);
                    };
                    document.addEventListener('click',      unlock, { once: true });
                    document.addEventListener('keydown',    unlock, { once: true });
                    document.addEventListener('touchstart', unlock, { once: true });
                }
            });
        }
    }

    function play(key) {
        if (!TRACKS[key]) return;
        if (_current === key) return;   

        const prev = _current;
        _current   = key;

        
        const nextEl = _elems[key];
        _cancelFade(key);
        nextEl.currentTime = 0;
        nextEl.volume      = 0;
        _tryPlay(nextEl);
        _fade(key, 0, _targetVol, FADE_MS);

        
        if (prev && _elems[prev]) {
            const prevKey = prev;
            const prevEl  = _elems[prevKey];
            const fromVol = _clamp(prevEl.volume);
            _fade(prevKey, fromVol, 0, FADE_MS, () => {
                prevEl.pause();
                prevEl.currentTime = 0;
            });
        }
    }

    function setVolume(vol) {
        
        _targetVol = _clamp(vol);
        localStorage.setItem('musicVolume', String(_targetVol));
        
        if (!_muted && _current && _fadeIds[_current] === null) {
            _elems[_current].volume = _targetVol;
        }
    }

    function getVolume() { return _targetVol; }

    function setMuted(muted) {
        _muted = muted;
        for (const key of Object.keys(_elems)) {
            if (_fadeIds[key] === null) {
                _elems[key].volume = (muted || key !== _current) ? 0 : _targetVol;
            }
        }
    }

    function isMuted() { return _muted; }

    
    function _trackForState(gameState) {
        if (gameState === 'DAY_DISCUSS') return 'discussion';
        if (gameState === 'DAY_VOTE')    return 'voting';
        return 'wait';   
    }

    function onStateChange(gameState) {
        play(_trackForState(gameState));
    }

    function onSoundEvent(trackKey) {
        play(trackKey);
    }

    return { play, onStateChange, onSoundEvent, setVolume, getVolume, setMuted, isMuted };
})();

const HeartbeatManager = (() => {
    const DANGER_OUTER = 600;
    const DANGER_INNER = 180;
    const INTERVAL_FAR  = 1800;
    const INTERVAL_NEAR = 320;
    const VOL_FAR  = 0.18;
    const VOL_NEAR = 0.95;

    const _hb = new Audio('audio/heartbeat.mp3');
    _hb.loop    = false;
    _hb.preload = 'auto';
    _hb.volume  = 0;

    let _nextBeat   = 0;
    let _lastDist   = Infinity;

    function _clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }

    function _lerp(a, b, t) { return a + (b - a) * t; }

    function tick(now) {
        if (__xe70299.GAME_STATE !== 'NIGHT' || _$xaf88e0.isDead || __xfc6336 === 'Skinwalker') {
            _lastDist = Infinity;
            return;
        }

        const mx = _$xaf88e0.x + 22.5;
        const my = _$xaf88e0.y + 22.5;

        let closest = Infinity;
        for (const id in _Ox55f60b) {
            const p = _Ox55f60b[id];
            if (!p.isDark || p.isDead) continue;
            const dx = (p.renderX + 22.5) - mx;
            const dy = (p.renderY + 22.5) - my;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < closest) closest = d;
        }

        _lastDist = closest;

        if (closest > DANGER_OUTER) return;

        const t = 1 - _clamp((closest - DANGER_INNER) / (DANGER_OUTER - DANGER_INNER), 0, 1);
        const interval = _lerp(INTERVAL_FAR, INTERVAL_NEAR, t);
        const vol      = _lerp(VOL_FAR,      VOL_NEAR,      t);

        if (now >= _nextBeat) {
            _hb.currentTime = 0;
            _hb.volume = AudioManager.isMuted() ? 0 : _clamp(vol * AudioManager.getVolume() / 0.7, 0, 1);
            _hb.play().catch(() => {});
            _nextBeat = now + interval;
        }
    }

    return { tick };
})();

function updateAbilityButtonVisibility() {
    const btn = document.getElementById('mob-ability-btn');
    if (!btn) return;
    const canUseNight = __xe70299.GAME_STATE === 'NIGHT' && !_$xaf88e0.isDead;
    const canUseMayor = __xfc6336 === 'Mayor' && !_Ox6b56a8.has(_0x8d6fc4) && !_$xaf88e0.isDead;
    if (canUseNight || canUseMayor) {
        btn.style.display = 'flex';
    } else {
        btn.style.display = 'none';
    }
}

function updateMobileVisibility() {
    const joy = document.getElementById('mobile-joystick-zone');
    const topBar = document.getElementById('mobile-top-bar');
    const actBar = document.getElementById('mobile-action-bar');
    if (!joy || !topBar || !actBar) return;
    if (!_ox5e9e29 && isTouchDevice) {
        joy.style.display = 'flex';
        topBar.style.display = 'flex';
        actBar.style.display = 'flex';
        updateAbilityButtonVisibility();
    } else {
        joy.style.display = 'none';
        topBar.style.display = 'none';
        actBar.style.display = 'none';
    }
}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d', { alpha: false });

const __x3c850d = 1280;
const _ox73fec6 = 720;

const __xe70299 = {
    _ox1e7c52: {
        tileSize: 64, chunkSize: 1024,
        columns: 0, rows: 0,
        tilesetCols: 0, layers: [],
        bgChunks: [], wallChunks: [], fgChunks: []
    },
    CAMERA: { x: null, y: null, width: __x3c850d, height: _ox73fec6 },
    INPUTS: {
        keys: { w: false, a: false, s: false, d: false, shift: false,
                arrowup: false, arrowleft: false, arrowdown: false, arrowright: false },
        mouseX: 0, mouseY: 0, isMouseDown: false
    },
    EDITOR: { enabled: false, selectedTileGid: 1, selectedLayer: 'background' },
    SYSTEM: { viewScale: 1, assetsLoaded: 0, isReady: false, lastTime: performance.now() },
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

const _$xaf88e0 = {
    x: 0, y: 0,
    width: 45, height: 45,
    vx: 0, vy: 0,
    angle: 0, scale: 1, bopTimer: 0,
    chats: [],
    isDead: false
};

const tilesheetImg = new Image();
const centerImg = new Image();
const tableImg = new Image();
const mayorCosmeticImg = new Image();
mayorCosmeticImg.src = 'assets/mayor cosmetic.png';

const ALL_BODIES = ['body00.png', 'body01.png', 'body02.png', 'body03.png', 'body04.png', 'body05.png', 'body06.png', 'body07.png', 'body08.png', 'body09.png', 'body10.png'];
const ALL_EYES = ['eyes0.png', 'eyes1.png', 'eyes2.png', 'eyes3.png', 'eyes4.png', 'eyes5.png', 'eyes6.png'];

let _Ox9617e2 = localStorage.getItem('selectedBody') || 'body01.png';
if (_Ox9617e2 === 'body1.png' || _Ox9617e2 === 'body1') _Ox9617e2 = 'body01.png';
if (!_Ox9617e2.endsWith('.png')) _Ox9617e2 += '.png';
let _0xcd919b = localStorage.getItem('selectedEyes') || 'eyes4.png';
if (!_0xcd919b.endsWith('.png')) _0xcd919b += '.png';
let _ox5e9e29 = true;

let menuCamX = null;
let menuCamY = null;
let menuCamVX = 60;
let menuCamVY = 45;

const _skinImgCache = {};
function getSkinImg(src) {
    if (!_skinImgCache[src]) {
        const img = new Image();
        img.src = src;
        _skinImgCache[src] = img;
    }
    return _skinImgCache[src];
}

function drawPlayerLayers(ctx, pBody, pEyes, w, h) {
    try {
        const bSrc = 'assets/' + (pBody || 'body01.png');
        const bImg = getSkinImg(bSrc);
        if (bImg.complete && bImg.naturalWidth > 0) {
            ctx.drawImage(bImg, -w / 2, -h / 2, w, h);
        }

        const eSrc = 'assets/' + (pEyes || 'eyes4.png');
        const eImg = getSkinImg(eSrc);
        if (eImg.complete && eImg.naturalWidth > 0) {
            ctx.drawImage(eImg, -w / 2, -h / 2, w, h);
        }
    } catch (_) {}
}

function initCustomizationUI() {
    const bodyGrid = document.getElementById('body-skin-grid');
    const eyesGrid = document.getElementById('eyes-skin-grid');
    if (!bodyGrid || !eyesGrid) return;

    bodyGrid.innerHTML = '';
    ALL_BODIES.forEach(b => {
        const btn = document.createElement('button');
        btn.className = 'skin-btn' + (b === _Ox9617e2 ? ' selected' : '');
        const img = document.createElement('img');
        img.src = 'assets/' + b;
        btn.appendChild(img);
        btn.onclick = () => {
            _Ox9617e2 = b;
            localStorage.setItem('selectedBody', b);
            bodyGrid.querySelectorAll('.skin-btn').forEach(el => el.classList.remove('selected'));
            btn.classList.add('selected');
        };
        bodyGrid.appendChild(btn);
    });

    eyesGrid.innerHTML = '';
    ALL_EYES.forEach(e => {
        const btn = document.createElement('button');
        btn.className = 'skin-btn' + (e === _0xcd919b ? ' selected' : '');
        const img = document.createElement('img');
        img.src = 'assets/' + e;
        btn.appendChild(img);
        btn.onclick = () => {
            _0xcd919b = e;
            localStorage.setItem('selectedEyes', e);
            eyesGrid.querySelectorAll('.skin-btn').forEach(el => el.classList.remove('selected'));
            btn.classList.add('selected');
        };
        eyesGrid.appendChild(btn);
    });
}

function updateMenuCamera(dt) {
    if (!__xe70299.MAP.columns || !__xe70299.CAMERA.width) return;
    const maxCamX = Math.max(0, __xe70299.MAP.columns * __xe70299.MAP.tileSize - __xe70299.CAMERA.width);
    const maxCamY = Math.max(0, __xe70299.MAP.rows * __xe70299.MAP.tileSize - __xe70299.CAMERA.height);
    if (menuCamX === null) {
        menuCamX = maxCamX / 2;
        menuCamY = maxCamY / 2;
    }
    menuCamX += menuCamVX * dt;
    menuCamY += menuCamVY * dt;

    if (menuCamX <= 0) {
        menuCamX = 0;
        menuCamVX = Math.abs(menuCamVX);
    } else if (menuCamX >= maxCamX) {
        menuCamX = maxCamX;
        menuCamVX = -Math.abs(menuCamVX);
    }

    if (menuCamY <= 0) {
        menuCamY = 0;
        menuCamVY = Math.abs(menuCamVY);
    } else if (menuCamY >= maxCamY) {
        menuCamY = maxCamY;
        menuCamVY = -Math.abs(menuCamVY);
    }

    __xe70299.CAMERA.x = menuCamX;
    __xe70299.CAMERA.y = menuCamY;
}

window.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('play-btn');
    const usernameInput = document.getElementById('username-input');

    const savedName = localStorage.getItem('playerName');
    if (savedName && usernameInput) {
        usernameInput.value = savedName;
    }

    
    const _menuMusicUnlock = () => {
        AudioManager.play('wait');
        document.removeEventListener('click', _menuMusicUnlock);
        document.removeEventListener('keydown', _menuMusicUnlock);
        document.removeEventListener('touchstart', _menuMusicUnlock);
    };
    document.addEventListener('click', _menuMusicUnlock, { once: true });
    document.addEventListener('keydown', _menuMusicUnlock, { once: true });
    document.addEventListener('touchstart', _menuMusicUnlock, { once: true });

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            const rawInp = usernameInput.value;
            const cleanInp = rawInp.replace(/<[^>]*>/g, '').replace(/[^\x20-\x7E]/g, '').replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().substring(0, 14);
            _$xc4e97d = cleanInp || 'Player';
            localStorage.setItem('playerName', _$xc4e97d);
            _ox5e9e29 = false;
            __xe70299.CAMERA.x = null;
            __xe70299.CAMERA.y = null;
            document.getElementById('main-menu-ui').style.display = 'none';
            document.getElementById('chat-log-ui').style.display = 'flex';
            const hint = document.getElementById('controls-hint');
            if (hint && !isTouchDevice) hint.style.display = 'block';
            updateMobileVisibility();
            if (isTouchDevice) {
                const lbList = document.getElementById('leaderboard-list');
                const lbToggle = document.getElementById('leaderboard-toggle');
                if (lbList) { lbList.style.display = 'none'; if (lbToggle) lbToggle.style.transform = 'rotate(180deg)'; }
                const rlList = document.getElementById('role-list-items');
                const rlToggle = document.getElementById('role-list-toggle');
                if (rlList) { rlList.style.display = 'none'; if (rlToggle) rlToggle.style.transform = 'rotate(180deg)'; }
            }
            if (_$x050b54 && _$x050b54.readyState === WebSocket.OPEN) {
                _$x050b54.send(JSON.stringify({ type: 'join', name: _$xc4e97d, token: _pageToken, body: _Ox9617e2, eyes: _0xcd919b }));
            } else if (!_$x050b54 || _$x050b54.readyState === WebSocket.CLOSED || _$x050b54.readyState === WebSocket.CLOSING) {
                connectToServer();
            }
        });
    }

    initCustomizationUI();
    connectToServer();
    loadImages();
    initSettingsUI();
    initMobileControls();
});

function initSettingsUI() {
    const settingsBtn = document.getElementById('settings-btn');
    const settingsPanel = document.getElementById('settings-panel');
    const closeSettingsBtn = document.getElementById('close-settings-btn');
    const mouseRelToggle = document.getElementById('setting-mouse-relative');

    if (mouseRelToggle) {
        mouseRelToggle.checked = mouseRelativeMovement;
        mouseRelToggle.addEventListener('change', () => {
            mouseRelativeMovement = mouseRelToggle.checked;
            localStorage.setItem('mouseRelativeMovement', mouseRelativeMovement ? 'true' : 'false');
        });
    }

    
    const volSlider  = document.getElementById('setting-music-volume');
    const volDisplay = document.getElementById('setting-music-volume-display');

    function _updateSliderTrack(slider) {
        
        const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.background = `linear-gradient(to right, #ffcc00 ${pct}%, #444 ${pct}%)`;
    }

    if (volSlider) {
        
        const storedVol = AudioManager.getVolume();        
        const sliderVal = Math.round(storedVol * 100);
        volSlider.value = sliderVal;
        if (volDisplay) volDisplay.textContent = sliderVal + '%';
        _updateSliderTrack(volSlider);

        volSlider.addEventListener('input', () => {
            const pct = parseInt(volSlider.value, 10);
            if (volDisplay) volDisplay.textContent = pct + '%';
            _updateSliderTrack(volSlider);
            AudioManager.setVolume(pct / 100);
            
            AudioManager.setMuted(pct === 0);
        });
    }

    if (settingsBtn && settingsPanel) {
        settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsPanel.style.display = settingsPanel.style.display === 'none' ? 'block' : 'none';
        });
    }

    if (closeSettingsBtn && settingsPanel) {
        closeSettingsBtn.addEventListener('click', () => {
            settingsPanel.style.display = 'none';
        });
    }

    const mayorYes = document.getElementById('mayor-confirm-yes');
    const mayorNo = document.getElementById('mayor-confirm-no');
    const mayorDialog = document.getElementById('mayor-confirm-dialog');

    if (mayorYes && mayorDialog) {
        mayorYes.addEventListener('click', () => {
            if (_$x050b54 && _$x050b54.readyState === WebSocket.OPEN) {
                _$x050b54.send(JSON.stringify({ type: 'mayor_reveal_self' }));
            }
            mayorDialog.style.display = 'none';
        });
    }

    if (mayorNo && mayorDialog) {
        mayorNo.addEventListener('click', () => {
            mayorDialog.style.display = 'none';
        });
    }

    const closeAbilityBtn = document.getElementById('close-ability-btn');
    if (closeAbilityBtn) {
        closeAbilityBtn.addEventListener('click', () => {
            const ui = document.getElementById('ability-ui');
            if (ui) ui.style.display = 'none';
        });
    }
}

let lastVoteTallyHash = '';

function updateVoteTally(gameState) {
    const panel = document.getElementById('vote-tally-panel');
    const list = document.getElementById('vote-tally-list');
    if (!panel || !list) return;

    if (gameState.state !== 'DAY_VOTE') {
        panel.style.display = 'none';
        lastVoteTallyHash = '';
        return;
    }

    panel.style.display = 'block';

    const counts = {};
    for (const id in _Ox55f60b) {
        if (!_Ox55f60b[id].isDead) counts[id] = 0;
    }
    if (_0x8d6fc4 && !_$xaf88e0.isDead) counts[_0x8d6fc4] = 0;

    const votes = gameState.votes || {};
    for (const voterId in votes) {
        const targetId = votes[voterId];
        const weight = (gameState.mayorRevealed && gameState.mayorRevealed[voterId]) ? 2 : 1;
        counts[targetId] = (counts[targetId] || 0) + weight;
    }

    let totalSkips = 0;
    const skips = gameState.skips || {};
    for (const sId in skips) {
        totalSkips += Number(skips[sId]) || 1;
    }

    const hash = JSON.stringify(counts) + '_' + totalSkips + '_' + _$xaf88e0.isDead;
    if (hash === lastVoteTallyHash) return;
    lastVoteTallyHash = hash;

    list.innerHTML = '';

    for (const id in counts) {
        const pIdNum = parseInt(id);
        const pName = (pIdNum === _0x8d6fc4) ? _$xc4e97d : (_Ox55f60b[id] ? _Ox55f60b[id].name : `Player ${id}`);
        const row = document.createElement('div');
        row.className = 'vote-tally-entry';
        const nameSpan = document.createElement('span');
        nameSpan.textContent = pName;
        const countSpan = document.createElement('span');
        countSpan.className = 'vote-count';
        countSpan.textContent = `${counts[id]} vote${counts[id] === 1 ? '' : 's'}`;
        row.appendChild(nameSpan);
        row.appendChild(countSpan);
        if (pIdNum !== _0x8d6fc4 && !_$xaf88e0.isDead) {
            row.style.cursor = 'pointer';
            row.title = `Vote for ${pName}`;
            row.addEventListener('click', (e) => {
                e.stopPropagation();
                if (_$x050b54 && _$x050b54.readyState === WebSocket.OPEN) {
                    _$x050b54.send(JSON.stringify({ type: 'chat', text: '/vote ' + pName }));
                }
            });
        }
        list.appendChild(row);
    }

    const skipRow = document.createElement('div');
    skipRow.className = 'vote-tally-skip';
    skipRow.innerHTML = `<span>Skips:</span> <span style="color:#ffcc00;float:right;">${totalSkips}</span>`;
    if (!_$xaf88e0.isDead) {
        skipRow.style.cursor = 'pointer';
        skipRow.title = 'Click to skip vote';
        skipRow.addEventListener('click', (e) => {
            e.stopPropagation();
            if (_$x050b54 && _$x050b54.readyState === WebSocket.OPEN) {
                _$x050b54.send(JSON.stringify({ type: 'chat', text: '/skip' }));
            }
        });
    }
    list.appendChild(skipRow);
}

let skinwalkerChosenTransform = null;
let skinwalkerChosenAbilityTarget = null;
let skinwalkerChosenKillTarget = null;

function sendSkinwalkerAction() {
    if (_$x050b54 && _$x050b54.readyState === WebSocket.OPEN) {
        _$x050b54.send(JSON.stringify({
            type: 'skinwalker_action',
            transformRole: skinwalkerChosenTransform,
            abilityTarget: skinwalkerChosenAbilityTarget,
            killTarget: skinwalkerChosenKillTarget
        }));
    }
}

function populateAbilityUI() {
    const body = document.getElementById('ability-ui-body');
    if (!body) return;
    body.innerHTML = '';

    if (__xfc6336 === 'Celebrity' || __xfc6336 === 'Mayor') {
        const msg = document.createElement('div');
        msg.style.cssText = 'color: #aaa; font-style: italic; text-align: center; padding: 24px 0; font-size: 13px;';
        msg.innerText = 'Your role has a passive ability. No night action required.';
        body.appendChild(msg);
        return;
    }

    if (__xfc6336 === 'Skinwalker') {
        const tHead = document.createElement('div');
        tHead.style.cssText = 'color: #ffffff; font-weight: bold; font-size: 13px; margin-bottom: 2px;';
        tHead.innerText = 'Transform into:';
        body.appendChild(tHead);

        const roleGrid = document.createElement('div');
        roleGrid.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 5px; margin-bottom: 10px;';
        const _allTransRoles = ['Doctor', 'Investigator', 'Tracker', 'Archer', 'Escort', 'Celebrity', 'Vigilante'];
        const isRoleAvailable = (r) => {
            if (!__xe70299.ROLE_LIST_RAW || __xe70299.ROLE_LIST_RAW.length === 0) return true;
            return __xe70299.ROLE_LIST_RAW.some(item => {
                if (item.name === r) return !item.isDead;
                if (SUBALIGNMENT_ROLES[item.name] && SUBALIGNMENT_ROLES[item.name].includes(r)) return true;
                return false;
            });
        };
        const transRoles = ['None', ..._allTransRoles.filter(isRoleAvailable)];
        transRoles.forEach(r => {
            const rBtn = document.createElement('button');
            rBtn.className = 'layer-btn';
            rBtn.style.cssText = 'width: 100%; font-size: 12px; padding: 6px 10px;';
            rBtn.innerText = r;
            const isAct = (r === 'None' && !skinwalkerChosenTransform) || (skinwalkerChosenTransform === r);
            if (isAct) rBtn.classList.add('active');
            rBtn.onclick = () => {
                skinwalkerChosenTransform = (r === 'None') ? null : r;
                sendSkinwalkerAction();
                populateAbilityUI();
            };
            roleGrid.appendChild(rBtn);
        });
        body.appendChild(roleGrid);

        if (isRoleAvailable('Vigilante')) {
            const vigNote = document.createElement('div');
            vigNote.style.cssText = 'color: #ff7777; font-size: 11px; margin-bottom: 8px; font-style: italic;';
            vigNote.textContent = 'Transforming into Vigilante only blocks the real Vigilante - you cannot shoot.';
            body.appendChild(vigNote);
        }

        if (skinwalkerChosenTransform === 'Vigilante') {
            const vMsg = document.createElement('div');
            vMsg.style.cssText = 'color: #aaa; font-style: italic; text-align: center; padding: 8px 0; font-size: 12px;';
            vMsg.innerText = 'The real Vigilante is blocked tonight.';
            body.appendChild(vMsg);
        } else if (skinwalkerChosenTransform && skinwalkerChosenTransform !== 'Celebrity') {
            const aHead = document.createElement('div');
            aHead.style.cssText = 'color: #ffffff; font-weight: bold; font-size: 13px; margin-bottom: 2px;';
            aHead.innerText = 'Use ' + skinwalkerChosenTransform + ' ability on:';
            body.appendChild(aHead);

            const aList = document.createElement('div');
            aList.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 5px; margin-bottom: 10px;';

            const noTargetBtn = document.createElement('button');
            noTargetBtn.className = 'layer-btn';
            noTargetBtn.style.cssText = 'grid-column: span 2; color: #aaa; font-style: italic;';
            noTargetBtn.innerText = 'No one';
            if (!skinwalkerChosenAbilityTarget) noTargetBtn.classList.add('active');
            noTargetBtn.onclick = () => {
                skinwalkerChosenAbilityTarget = null;
                sendSkinwalkerAction();
                populateAbilityUI();
            };
            aList.appendChild(noTargetBtn);

            for (const id in _Ox55f60b) {
                const sp = _Ox55f60b[id];
                if (sp.isDead) continue;
                const pBtn = document.createElement('button');
                pBtn.className = 'layer-btn';
                pBtn.innerText = sp.name;
                if (skinwalkerChosenAbilityTarget === parseInt(id)) pBtn.classList.add('active');
                pBtn.onclick = () => {
                    skinwalkerChosenAbilityTarget = parseInt(id);
                    sendSkinwalkerAction();
                    populateAbilityUI();
                };
                aList.appendChild(pBtn);
            }
            body.appendChild(aList);
        }

        const kHead = document.createElement('div');
        kHead.style.cssText = 'color: #ff5555; font-weight: bold; font-size: 13px; margin-bottom: 2px;';
        kHead.innerText = 'Mafia Kill Target:';
        body.appendChild(kHead);

        const kList = document.createElement('div');
        kList.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 5px;';

        const noKillBtn = document.createElement('button');
        noKillBtn.className = 'layer-btn';
        noKillBtn.style.cssText = 'grid-column: span 2; color: #aaa; font-style: italic;';
        noKillBtn.innerText = 'No one';
        if (!skinwalkerChosenKillTarget && !__xe70299.CURRENT_TARGET) noKillBtn.classList.add('active');
        noKillBtn.onclick = () => {
            skinwalkerChosenKillTarget = null;
            __xe70299.CURRENT_TARGET = null;
            sendSkinwalkerAction();
            populateAbilityUI();
        };
        kList.appendChild(noKillBtn);

        for (const id in _Ox55f60b) {
            const sp = _Ox55f60b[id];
            if (sp.isDead) continue;
            const kBtn = document.createElement('button');
            kBtn.className = 'layer-btn';
            kBtn.innerText = sp.name;
            if (skinwalkerChosenKillTarget === parseInt(id) || __xe70299.CURRENT_TARGET === parseInt(id)) kBtn.classList.add('active');
            kBtn.onclick = () => {
                skinwalkerChosenKillTarget = parseInt(id);
                __xe70299.CURRENT_TARGET = parseInt(id);
                sendSkinwalkerAction();
                populateAbilityUI();
            };
            kList.appendChild(kBtn);
        }
        body.appendChild(kList);
        return;
    }

    let roleDesc = '';
    let allowSelf = false;

    if (__xfc6336 === 'Doctor') {
        roleDesc = 'Select a player to heal and protect tonight:';
        allowSelf = true;
    } else if (__xfc6336 === 'Investigator') {
        roleDesc = 'Select a player to investigate tonight:';
    } else if (__xfc6336 === 'Tracker') {
        roleDesc = 'Select a player to track visits tonight:';
    } else if (__xfc6336 === 'Archer') {
        roleDesc = 'Select a player to guard from harmful visitors:';
    } else if (__xfc6336 === 'Escort') {
        roleDesc = 'Select a player to roleblock tonight:';
    } else if (__xfc6336 === 'Vigilante') {
        roleDesc = 'Select a player to shoot tonight:';
    }

    const descDiv = document.createElement('div');
    descDiv.style.cssText = 'color: #ddd; font-size: 13px; font-weight: normal; line-height: 1.4; margin-bottom: 4px;';
    descDiv.innerText = roleDesc;
    body.appendChild(descDiv);

    const listDiv = document.createElement('div');
    listDiv.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 5px;';

    const noOneBtn = document.createElement('button');
    noOneBtn.className = 'layer-btn';
    noOneBtn.style.cssText = 'grid-column: span 2; color: #aaa; font-style: italic;';
    noOneBtn.innerText = 'No one';
    if (__xe70299.CURRENT_TARGET === null) noOneBtn.classList.add('active');
    noOneBtn.onclick = () => {
        __xe70299.CURRENT_TARGET = null;
        if (_$x050b54 && _$x050b54.readyState === WebSocket.OPEN) {
            _$x050b54.send(JSON.stringify({ type: 'action_target', targetId: null }));
        }
        populateAbilityUI();
    };
    listDiv.appendChild(noOneBtn);

    for (const id in _Ox55f60b) {
        const sp = _Ox55f60b[id];
        if (sp.isDead) continue;
        const btn = document.createElement('button');
        btn.className = 'layer-btn';
        btn.innerText = sp.name;
        if (__xe70299.CURRENT_TARGET === parseInt(id)) btn.classList.add('active');
        btn.onclick = () => {
            __xe70299.CURRENT_TARGET = parseInt(id);
            if (_$x050b54 && _$x050b54.readyState === WebSocket.OPEN) {
                _$x050b54.send(JSON.stringify({ type: 'action_target', targetId: parseInt(id) }));
            }
            populateAbilityUI();
        };
        listDiv.appendChild(btn);
    }

    if (allowSelf && !_$xaf88e0.isDead) {
        const selfBtn = document.createElement('button');
        selfBtn.className = 'layer-btn';
        selfBtn.style.cssText = 'grid-column: span 2;';
        selfBtn.innerText = _$xc4e97d + ' (Self)';
        if (__xe70299.CURRENT_TARGET === _0x8d6fc4) selfBtn.classList.add('active');
        selfBtn.onclick = () => {
            __xe70299.CURRENT_TARGET = _0x8d6fc4;
            if (_$x050b54 && _$x050b54.readyState === WebSocket.OPEN) {
                _$x050b54.send(JSON.stringify({ type: 'action_target', targetId: _0x8d6fc4 }));
            }
            populateAbilityUI();
        };
        listDiv.appendChild(selfBtn);
    }

    body.appendChild(listDiv);
}

function connectToServer() {
    if (_$x050b54 && (_$x050b54.readyState === WebSocket.OPEN || _$x050b54.readyState === WebSocket.CONNECTING)) {
        return;
    }

    const _params = new URLSearchParams();
    if (_pageToken) _params.set('token', _pageToken);

    _params.set('ngrok-skip-browser-warning', 'true');
    const _ngrokURL = 'wss://relating-worker-pipeline-enclosure.trycloudflare.com';
    const _wsHost = window.location.hostname === 'localhost'
        ? 'ws://localhost:8080'
        : _ngrokURL;
    const _wsURL = _wsHost + '/?' + _params.toString();

    _$x050b54 = new WebSocket(_wsURL);

    _$x050b54.onopen = function () {
        if (!_ox5e9e29 && this.readyState === WebSocket.OPEN) {
            this.send(JSON.stringify({ type: 'join', name: _$xc4e97d, token: _pageToken, body: _Ox9617e2, eyes: _0xcd919b }));
        }
    };

    window.addEventListener('beforeunload', () => {
        if (_$x050b54 && _$x050b54.readyState === WebSocket.OPEN) {
            _$x050b54.send(JSON.stringify({ type: 'leave' }));
        }
    });

    _$x050b54.onclose = (e) => {
        if (e.code === 4001) {
            document.body.innerHTML = '<div style="position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe UI;font-size:24px;font-weight:bold;">You have been kicked.</div>';
            return;
        }
        if (e.code === 4002 || e.code === 4003) {
            document.body.innerHTML = '<div style="position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe UI;font-size:24px;font-weight:bold;">You have been banned.</div>';
            return;
        }
        let disconnectOverlay = document.getElementById('disconnect-overlay');
        if (!disconnectOverlay) {
            disconnectOverlay = document.createElement('div');
            disconnectOverlay.id = 'disconnect-overlay';
            disconnectOverlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            disconnectOverlay.innerHTML = '<div style="font-size:32px;margin-bottom:12px;color:#ff4444;">Server Disconnected</div><div style="font-size:16px;color:#aaa;font-weight:normal;">Refreshing game...</div>';
            document.body.appendChild(disconnectOverlay);
        }
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    };

    _$x050b54.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.type === 'map_data') {
            __xe70299.MAP.tileSize = data.map.tileSize;
            __xe70299.MAP.columns = data.map.columns;
            __xe70299.MAP.rows = data.map.rows;
            __xe70299.MAP.layers = data.map.layers;
            if (data.map.doors) {
                __xe70299.MAP.doors = data.map.doors;
                const f2Layer = __xe70299.MAP.layers.find(l => l.name === 'floor2');
                if (f2Layer) {
                    for (const dIdx in __xe70299.MAP.doors) {
                        f2Layer.data[parseInt(dIdx)] = 2;
                    }
                }
            }
            if (data.entities) __xe70299.ENTITIES = data.entities;
            preRenderMap();
            __xe70299.SYSTEM.isReady = true;
            resizeCanvas();
            if (!__xe70299.SYSTEM._gameLoopRunning) {
                __xe70299.SYSTEM._gameLoopRunning = true;
                requestAnimationFrame(gameLoop);
            }
            return;
        }

        if (data.type === 'init') {
            _0x8d6fc4 = data.id;
            _ox5e9e29 = false;
            updateMobileVisibility();
            if (isTouchDevice) {
                const lbList = document.getElementById('leaderboard-list');
                const lbToggle = document.getElementById('leaderboard-toggle');
                if (lbList) { lbList.style.display = 'none'; if (lbToggle) lbToggle.style.transform = 'rotate(180deg)'; }
                const rlList = document.getElementById('role-list-items');
                const rlToggle = document.getElementById('role-list-toggle');
                if (rlList) { rlList.style.display = 'none'; if (rlToggle) rlToggle.style.transform = 'rotate(180deg)'; }
            }
            _ox33dcef = data.isOwner || false;
            _$xc4e97d = data.name || _$xc4e97d;

            __xe70299.MAP.tileSize = data.map.tileSize;
            __xe70299.MAP.columns = data.map.columns;
            __xe70299.MAP.rows = data.map.rows;
            __xe70299.MAP.layers = data.map.layers;
            if (data.map.doors) {
                __xe70299.MAP.doors = data.map.doors;
                const f2Layer = __xe70299.MAP.layers.find(l => l.name === 'floor2');
                if (f2Layer) {
                    for (const dIdx in __xe70299.MAP.doors) {
                        f2Layer.data[parseInt(dIdx)] = 2;
                    }
                }
            }
            if (data.entities) __xe70299.ENTITIES = data.entities;

            preRenderMap();

            _$xaf88e0.x = (__xe70299.MAP.columns * __xe70299.MAP.tileSize) / 2;
            _$xaf88e0.y = (__xe70299.MAP.rows * __xe70299.MAP.tileSize) / 2;
            __xe70299.CAMERA.x = _$xaf88e0.x + _$xaf88e0.width / 2 - __xe70299.CAMERA.width / 2;
            __xe70299.CAMERA.y = _$xaf88e0.y + _$xaf88e0.height / 2 - __xe70299.CAMERA.height / 2;

            if (_ox33dcef) {
                document.getElementById('editor-ui').style.display = 'flex';
                initEditorUI();
            }
            
            document.getElementById('settings-btn-wrap').style.display = 'block';
            document.getElementById('leaderboard-ui').style.display = 'flex';
            document.getElementById('role-list-ui').style.display = 'flex';
            __xe70299.SYSTEM.lastTime = performance.now();
            __xe70299.SYSTEM.isReady = true;
            updateLeaderboard();
            if (!__xe70299.SYSTEM._gameLoopRunning) {
                __xe70299.SYSTEM._gameLoopRunning = true;
                requestAnimationFrame(gameLoop);
            }
            return;
        } else if (data.type === 'state') {
            const next = {};
            for (const id in data.players) {
                if (parseInt(id) === _0x8d6fc4) continue;
                const incoming = data.players[id];
                const existing = _Ox55f60b[id];
                if (existing) {
                    const dx = incoming.x - existing.renderX;
                    const dy = incoming.y - existing.renderY;
                    const jumped = (dx * dx + dy * dy) > (120 * 120);
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
            _Ox55f60b = next;

            if (data.players[_0x8d6fc4]) {
                const sMe = data.players[_0x8d6fc4];
                _$xaf88e0.chats = sMe.chats || [];
                _$xaf88e0.isDead = sMe.isDead;
                if (sMe.name) _$xc4e97d = sMe.name;
                updateLeaderboard();
                const sDist = Math.hypot(sMe.x - _$xaf88e0.x, sMe.y - _$xaf88e0.y);
                if (sDist > 50) {
                    _$xaf88e0.x += (sMe.x - _$xaf88e0.x) * 0.35;
                    _$xaf88e0.y += (sMe.y - _$xaf88e0.y) * 0.35;
                }
            }

            if (data.entities) __xe70299.ENTITIES = data.entities;

            if (data.game) {
                __xe70299.GAME_STATE = data.game.state;
                __xe70299.NIGHT_ABILITY_OPEN = data.game.nightAbilityOpen;

                if (data.game.mayorRevealed) {
                    for (const mId in data.game.mayorRevealed) {
                        _Ox6b56a8.add(parseInt(mId));
                    }
                }

                if (__xe70299.LAST_STATE !== __xe70299.GAME_STATE) {
                    if (__xe70299.GAME_STATE !== 'NIGHT') {
                        __xe70299.CURRENT_TARGET = null;
                        skinwalkerChosenTransform = null;
                        skinwalkerChosenAbilityTarget = null;
                        skinwalkerChosenKillTarget = null;
                        const abilityUI = document.getElementById('ability-ui');
                        if (abilityUI) abilityUI.style.display = 'none';
                    }
                    if (__xe70299.GAME_STATE === 'NIGHT') {
                        _$xaf88e0.chats = [];
                        for (const id in _Ox55f60b) {
                            _Ox55f60b[id].chats = [];
                        }
                    }
                    __xe70299.LAST_STATE = __xe70299.GAME_STATE;
                    updateAbilityButtonVisibility();
                    
                    AudioManager.onStateChange(__xe70299.GAME_STATE, data.game.nightAbilityOpen);
                }

                const pUi = document.getElementById('phase-ui');
                if (pUi) {
                    pUi.style.display = 'block';
                    let phaseText = data.game.state.replace('_', ' ');
                    if (data.game.state === 'DAY_DISCUSS') {
                        phaseText = `DAY ${data.game.dayCount || 1} DISCUSSION`;
                        document.getElementById('phase-timer').innerText = data.game.timer + 's';
                    } else if (data.game.state === 'DAY_VOTE') {
                        phaseText = `DAY ${data.game.dayCount || 1} VOTING`;
                        document.getElementById('phase-timer').innerText = data.game.timer + 's';
                    } else if (data.game.state === 'NIGHT') {
                        const nNum = data.game.dayCount || 1;
                        if (data.game.nightAbilityOpen) {
                            phaseText = `NIGHT ${nNum} ABILITY PHASE`;
                            const aTimer = data.game.abilityTimer !== undefined ? data.game.abilityTimer : data.game.timer;
                            document.getElementById('phase-timer').innerText = aTimer + 's';
                        } else {
                            phaseText = `NIGHT ${nNum}`;
                            document.getElementById('phase-timer').innerText = data.game.timer + 's';
                        }
                    }
                    document.getElementById('phase-name').innerText = phaseText;
                }

                if (data.game.state === 'NIGHT') {
                    const timerLbl = document.getElementById('ability-timer-label');
                    if (timerLbl) {
                        const aTimer = data.game.abilityTimer !== undefined ? data.game.abilityTimer : data.game.timer;
                        timerLbl.innerText = data.game.nightAbilityOpen ? `${aTimer}s` : '';
                    }
                    if (data.game.nightAbilityOpen && !abilityUIOpenedThisNight && !_$xaf88e0.isDead) {
                        abilityUIOpenedThisNight = true;
                        populateAbilityUI();
                        const ui = document.getElementById('ability-ui');
                        if (ui) ui.style.display = 'block';
                    }
                    if (!data.game.nightAbilityOpen) {
                        const ui = document.getElementById('ability-ui');
                        if (ui && ui.style.display === 'block') {
                            ui.style.display = 'none';
                        }
                    }
                } else {
                    abilityUIOpenedThisNight = false;
                }

                updateVoteTally(data.game);

                if (data.game.roleListMode !== undefined) {
                    __xe70299.ROLE_LIST_RAW = data.game.roleList || [];
                    updateRoleListUI(data.game.roleList, data.game.roleListMode);
                }
            }

        } else if (data.type === 'teleport') {
            _$xaf88e0.x = data.x;
            _$xaf88e0.y = data.y;
            _$xaf88e0.vx = 0;
            _$xaf88e0.vy = 0;
            __xe70299.CAMERA.x = null;
            if (data.teleportId !== undefined) _$xda4a1a = data.teleportId;
        } else if (data.type === 'bulk_teleport') {
            for (const id in data.positions) {
                const pos = data.positions[id];
                if (parseInt(id) === _0x8d6fc4) {
                    _$xaf88e0.x = pos.x; _$xaf88e0.y = pos.y; _$xaf88e0.vx = 0; _$xaf88e0.vy = 0;
                    __xe70299.CAMERA.x = null;
                    continue;
                }
                const sp = _Ox55f60b[id];
                if (sp) {
                    sp.x = pos.x; sp.y = pos.y;
                    sp.renderX = pos.x; sp.renderY = pos.y;
                    sp.vx = 0; sp.vy = 0;
                }
            }
        } else if (data.type === 'player_left') {
            delete _Ox55f60b[data.id];
            _Ox6b56a8.delete(parseInt(data.id));
        } else if (data.type === 'map_update') {
            const layer = __xe70299.MAP.layers.find(l => l.name === data.layer);
            if (layer) {
                layer.data[data.row * __xe70299.MAP.columns + data.col] = data.gid;
                const dIdx = data.row * __xe70299.MAP.columns + data.col;
                if (__xe70299.MAP.doors && __xe70299.MAP.doors[dIdx]) {
                    const f2Layer = __xe70299.MAP.layers.find(l => l.name === 'floor2');
                    if (f2Layer) f2Layer.data[dIdx] = 2;
                }
                const cx = Math.floor((data.col * __xe70299.MAP.tileSize) / __xe70299.MAP.chunkSize);
                const cy = Math.floor((data.row * __xe70299.MAP.tileSize) / __xe70299.MAP.chunkSize);
                renderChunk(cx, cy);
            }
        } else if (data.type === 'role_assign') {
            __xfc6336 = data.role;
            _$xaf88e0.isDead = (__xfc6336 === 'Spectator');
            _Ox6b56a8.clear();
            __xe70299.CURRENT_TARGET = null;
            skinwalkerChosenTransform = null;
            skinwalkerChosenAbilityTarget = null;
            skinwalkerChosenKillTarget = null;
            abilityUIOpenedThisNight = false;
            const abilityUiOnAssign = document.getElementById('ability-ui');
            if (abilityUiOnAssign) abilityUiOnAssign.style.display = 'none';
            document.getElementById('role-ui').style.display = 'block';
            document.getElementById('my-role-name').innerText = __xfc6336;
            updateAbilityButtonVisibility();
            addChatLog(__xfc6336 === 'Spectator' ? "You are spectating this match." : `Game started! Your role is: ${myRole}`, true);

            let info = "";
            if (__xfc6336 === 'Investigator') info = "Investigate during the first 15s of night to narrow down roles.";
            if (__xfc6336 === 'Tracker') info = "Track during the first 15s of night to see who someone visits.";
            if (__xfc6336 === 'Doctor') info = "Heal during the first 15s of night to protect someone from death.";
            if (__xfc6336 === 'Archer') info = "Guard during the first 15s of night to shoot harmful visitors.";
            if (__xfc6336 === 'Escort') info = "Roleblock during the first 15s of night to stop someone's action.";
            if (__xfc6336 === 'Vigilante') info = "Shoot during the first 15s of night to kill. Don't shoot townies!";
            if (__xfc6336 === 'Skinwalker') info = "Choose your role transform, ability target, and kill target in the Night Ability UI!";
            if (__xfc6336 === 'Celebrity') info = "Passive ability. If you die, the killer's name letter is revealed.";
            if (__xfc6336 === 'Mayor') info = "Passive ability. Press [T] at any time to publicly reveal as Mayor. Your vote counts as double!";
            addChatLog(info, true);

        } else if (data.type === 'mayor_reveal') {
            _Ox6b56a8.add(parseInt(data.playerId));
            updateLeaderboard();
            updateAbilityButtonVisibility();
        } else if (data.type === 'rolelist_update') {
            __xe70299.ROLE_LIST_RAW = data.list || [];
            updateRoleListUI(data.list, data.mode);
        } else if (data.type === 'sound_event') {
            
            AudioManager.onSoundEvent(data.track);

        } else if (data.type === 'game_over') {
            AudioManager.onStateChange('LOBBY', false);   
            updateRoleListUI([], 'off');
            __xfc6336 = null;
            _$xaf88e0.isDead = false;
            _Ox6b56a8.clear();
            __xe70299.CURRENT_TARGET = null;
            skinwalkerChosenTransform = null;
            skinwalkerChosenAbilityTarget = null;
            skinwalkerChosenKillTarget = null;
            abilityUIOpenedThisNight = false;
            document.getElementById('role-ui').style.display = 'none';
            document.getElementById('ability-ui').style.display = 'none';
            document.getElementById('vote-tally-panel').style.display = 'none';
            updateAbilityButtonVisibility();
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
    const ui = document.getElementById('chat-log-ui');
    const wasAtBottom = ui.scrollHeight - ui.scrollTop - ui.clientHeight < 30;
    const div = document.createElement('div');
    div.className = 'chat-log-line' + (isSys ? ' sys-msg' : '');
    div.innerText = text;
    container.appendChild(div);
    if (wasAtBottom) {
        ui.scrollTop = ui.scrollHeight;
    }

    if (container.childElementCount > 200) {
        container.removeChild(container.firstChild);
    }
}

let _lastSentX = -1, _lastSentY = -1, _lastSentAngle = -1, _lastSentTime = 0;
function __x11c3d3() {
    if (!_0x8d6fc4 || !_$x050b54 || _$x050b54.readyState !== WebSocket.OPEN) return;
    const now = performance.now();
    const dt = now - _lastSentTime;
    const moved = Math.abs(_$xaf88e0.x - _lastSentX) > 0.05 || Math.abs(_$xaf88e0.y - _lastSentY) > 0.05 || Math.abs(_$xaf88e0.angle - _lastSentAngle) > 0.02;
    if (!moved && dt < 200) return;
    if (dt < 25) return;
    _lastSentTime = now;
    _lastSentX = _$xaf88e0.x;
    _lastSentY = _$xaf88e0.y;
    _lastSentAngle = _$xaf88e0.angle;
    if (!_0x8d6fc4 || !_$x050b54 || _$x050b54.readyState !== WebSocket.OPEN) return;
    _$x050b54.send(JSON.stringify({
        type: 'position_update',
        x: _$xaf88e0.x,
        y: _$xaf88e0.y,
        vx: _$xaf88e0.vx,
        vy: _$xaf88e0.vy,
        angle: _$xaf88e0.angle,
        scale: _$xaf88e0.scale,
        teleportId: _$xda4a1a
    }));
}

function _ox493d8c() {
    if (_$xaf88e0.isDead) return;

    const wallLayer = __xe70299.MAP.layers.find(l => l.name === 'walls');
    if (!wallLayer) return;

    const scale = _$xaf88e0.scale;
    const radius = (_$xaf88e0.width * scale) / 2;

    for (let iter = 0; iter < 3; iter++) {
        let pX = _$xaf88e0.x + _$xaf88e0.width / 2;
        let pY = _$xaf88e0.y + _$xaf88e0.height / 2;

        const left = Math.floor((pX - radius) / __xe70299.MAP.tileSize);
        const right = Math.floor((pX + radius) / __xe70299.MAP.tileSize);
        const top = Math.floor((pY - radius) / __xe70299.MAP.tileSize);
        const bottom = Math.floor((pY + radius) / __xe70299.MAP.tileSize);

        for (let r = top; r <= bottom; r++) {
            for (let c = left; c <= right; c++) {
                if (c < 0 || c >= __xe70299.MAP.columns || r < 0 || r >= __xe70299.MAP.rows) continue;
                if (wallLayer.data[r * __xe70299.MAP.columns + c] === 0) continue;

                const tileX = c * __xe70299.MAP.tileSize;
                const tileY = r * __xe70299.MAP.tileSize;

                const testX = pX < tileX ? tileX : (pX > tileX + __xe70299.MAP.tileSize ? tileX + __xe70299.MAP.tileSize : pX);
                const testY = pY < tileY ? tileY : (pY > tileY + __xe70299.MAP.tileSize ? tileY + __xe70299.MAP.tileSize : pY);

                const dX = pX - testX;
                const dY = pY - testY;
                const dist = Math.sqrt(dX * dX + dY * dY);

                if (dist < radius) {
                    if (dist === 0) {
                        const lD = pX - tileX;
                        const rD = (tileX + __xe70299.MAP.tileSize) - pX;
                        const tD = pY - tileY;
                        const bD = (tileY + __xe70299.MAP.tileSize) - pY;
                        const mD = Math.min(lD, rD, tD, bD);
                        if (mD === lD) pX = tileX - radius;
                        else if (mD === rD) pX = tileX + __xe70299.MAP.tileSize + radius;
                        else if (mD === tD) pY = tileY - radius;
                        else pY = tileY + __xe70299.MAP.tileSize + radius;
                    } else {
                        const overlap = radius - dist;
                        pX += (dX / dist) * overlap;
                        pY += (dY / dist) * overlap;
                        const dot = _$xaf88e0.vx * (dX / dist) + _$xaf88e0.vy * (dY / dist);
                        if (dot < 0) {
                            _$xaf88e0.vx -= dot * (dX / dist);
                            _$xaf88e0.vy -= dot * (dY / dist);
                        }
                    }
                }
            }
        }

        _$xaf88e0.x = pX - _$xaf88e0.width / 2;
        _$xaf88e0.y = pY - _$xaf88e0.height / 2;
    }
}

function _$xefaab7(p) {
    const wallLayer = __xe70299.MAP.layers.find(l => l.name === 'walls');
    if (!wallLayer) return;

    const radius = p.width / 2;

    for (let iter = 0; iter < 2; iter++) {
        let pX = p.x + p.width / 2;
        let pY = p.y + p.height / 2;

        const left = Math.floor((pX - radius) / __xe70299.MAP.tileSize);
        const right = Math.floor((pX + radius) / __xe70299.MAP.tileSize);
        const top = Math.floor((pY - radius) / __xe70299.MAP.tileSize);
        const bottom = Math.floor((pY + radius) / __xe70299.MAP.tileSize);

        for (let r = top; r <= bottom; r++) {
            for (let c = left; c <= right; c++) {
                if (c < 0 || c >= __xe70299.MAP.columns || r < 0 || r >= __xe70299.MAP.rows) continue;
                if (wallLayer.data[r * __xe70299.MAP.columns + c] === 0) continue;

                const tileX = c * __xe70299.MAP.tileSize;
                const tileY = r * __xe70299.MAP.tileSize;

                const testX = pX < tileX ? tileX : (pX > tileX + __xe70299.MAP.tileSize ? tileX + __xe70299.MAP.tileSize : pX);
                const testY = pY < tileY ? tileY : (pY > tileY + __xe70299.MAP.tileSize ? tileY + __xe70299.MAP.tileSize : pY);

                const dX = pX - testX;
                const dY = pY - testY;
                const dist = Math.sqrt(dX * dX + dY * dY);

                if (dist < radius) {
                    if (dist === 0) {
                        const lD = pX - tileX;
                        const rD = (tileX + __xe70299.MAP.tileSize) - pX;
                        const tD = pY - tileY;
                        const bD = (tileY + __xe70299.MAP.tileSize) - pY;
                        const mD = Math.min(lD, rD, tD, bD);
                        if (mD === lD) pX = tileX - radius;
                        else if (mD === rD) pX = tileX + __xe70299.MAP.tileSize + radius;
                        else if (mD === tD) pY = tileY - radius;
                        else pY = tileY + __xe70299.MAP.tileSize + radius;
                    } else {
                        const overlap = radius - dist;
                        pX += (dX / dist) * overlap;
                        pY += (dY / dist) * overlap;
                    }
                }
            }
        }

        p.x = pX - p.width / 2;
        p.y = pY - p.height / 2;
    }
}

function __x272470(p) {
    const radius = p.width / 2;
    for (let iter = 0; iter < 2; iter++) {
        let pX = p.x + p.width / 2;
        let pY = p.y + p.height / 2;
        for (const ent of __xe70299.ENTITIES) {
            const nearX = pX < ent.x ? ent.x : (pX > ent.x + ent.w ? ent.x + ent.w : pX);
            const nearY = pY < ent.y ? ent.y : (pY > ent.y + ent.h ? ent.y + ent.h : pY);
            const dX = pX - nearX;
            const dY = pY - nearY;
            const dist = Math.sqrt(dX * dX + dY * dY);
            if (dist < radius && dist > 0) {
                const overlap = radius - dist;
                const nx = dX / dist;
                const ny = dY / dist;
                pX += nx * overlap;
                pY += ny * overlap;
            } else if (dist === 0) {
                const lD = pX - ent.x;
                const rD = (ent.x + ent.w) - pX;
                const tD = pY - ent.y;
                const bD = (ent.y + ent.h) - pY;
                const mD = Math.min(lD, rD, tD, bD);
                if (mD === lD) pX = ent.x - radius;
                else if (mD === rD) pX = ent.x + ent.w + radius;
                else if (mD === tD) pY = ent.y - radius;
                else pY = ent.y + ent.h + radius;
            }
        }
        p.x = pX - p.width / 2;
        p.y = pY - p.height / 2;
    }
}

function _0xb830fe() {
    if (_$xaf88e0.isDead) return;

    const meR = _$xaf88e0.width / 2;
    const mecx = _$xaf88e0.x + _$xaf88e0.width / 2;
    const mecy = _$xaf88e0.y + _$xaf88e0.height / 2;

    for (const id in _Ox55f60b) {
        const p = _Ox55f60b[id];
        if (p.isDead) continue;

        const pR = p.width / 2;
        const minDist = meR + pR;

        const pcx = (p.renderX ?? p.x) + p.width / 2;
        const pcy = (p.renderY ?? p.y) + p.height / 2;

        const dX = mecx - pcx;
        const dY = mecy - pcy;
        const dist = Math.sqrt(dX * dX + dY * dY);

        if (dist > 0 && dist < minDist) {
            const overlap = minDist - dist;
            const nx = dX / dist;
            const ny = dY / dist;

            _$xaf88e0.x += nx * (overlap * 0.25);
            _$xaf88e0.y += ny * (overlap * 0.25);

            p.x -= nx * (overlap * 0.75);
            p.y -= ny * (overlap * 0.75);

            _$xefaab7(p);
            __x272470(p);

            if (p.renderX !== undefined) {
                p.renderX = p.x;
                p.renderY = p.y;
            }

            const dot = _$xaf88e0.vx * nx + _$xaf88e0.vy * ny;
            if (dot < 0) {
                _$xaf88e0.vx -= dot * nx * 0.25;
                _$xaf88e0.vy -= dot * ny * 0.25;
            }
        }
    }
    _ox493d8c();
    _Ox80b745();
}

function _Ox80b745() {
    if (_$xaf88e0.isDead) return;
    const scale = _$xaf88e0.scale;
    const radius = (_$xaf88e0.width * scale) / 2;
    for (let iter = 0; iter < 2; iter++) {
        let pX = _$xaf88e0.x + _$xaf88e0.width / 2;
        let pY = _$xaf88e0.y + _$xaf88e0.height / 2;
        for (const ent of __xe70299.ENTITIES) {
            const nearX = pX < ent.x ? ent.x : (pX > ent.x + ent.w ? ent.x + ent.w : pX);
            const nearY = pY < ent.y ? ent.y : (pY > ent.y + ent.h ? ent.y + ent.h : pY);
            const dX = pX - nearX;
            const dY = pY - nearY;
            const dist = Math.sqrt(dX * dX + dY * dY);
            if (dist < radius && dist > 0) {
                const overlap = radius - dist;
                const nx = dX / dist;
                const ny = dY / dist;
                pX += nx * overlap;
                pY += ny * overlap;
                const dot = _$xaf88e0.vx * nx + _$xaf88e0.vy * ny;
                if (dot < 0) {
                    _$xaf88e0.vx -= dot * nx;
                    _$xaf88e0.vy -= dot * ny;
                }
            } else if (dist === 0) {
                const lD = pX - ent.x;
                const rD = (ent.x + ent.w) - pX;
                const tD = pY - ent.y;
                const bD = (ent.y + ent.h) - pY;
                const mD = Math.min(lD, rD, tD, bD);
                if (mD === lD) pX = ent.x - radius;
                else if (mD === rD) pX = ent.x + ent.w + radius;
                else if (mD === tD) pY = ent.y - radius;
                else pY = ent.y + ent.h + radius;
            }
        }
        _$xaf88e0.x = pX - _$xaf88e0.width / 2;
        _$xaf88e0.y = pY - _$xaf88e0.height / 2;
    }
}

function isOnHaybale(worldX, worldY) {
    const treesLayer = __xe70299.MAP.layers.find(l => l.name === 'trees');
    if (!treesLayer) return false;
    const col = Math.floor(worldX / __xe70299.MAP.tileSize);
    const row = Math.floor(worldY / __xe70299.MAP.tileSize);
    if (col < 0 || col >= __xe70299.MAP.columns || row < 0 || row >= __xe70299.MAP.rows) return false;
    return treesLayer.data[row * __xe70299.MAP.columns + col] === 11;
}

let _shadowMapCache = null;

function _rebuildShadowMapCache() {
    const _ox1e7c52 = __xe70299.MAP;
    const floorLayer = _ox1e7c52.layers.find(l => l.name === 'floor2');
    const wallLayer = _ox1e7c52.layers.find(l => l.name === 'walls');
    if (!floorLayer || !wallLayer) { _shadowMapCache = null; return; }

    const cols = _ox1e7c52.columns;
    const rows = _ox1e7c52.rows;
    const floorTiles = [];
    const wallTiles = [];
    const wallSet = new Set();

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const idx = r * cols + c;
            const fgid = floorLayer.data[idx];
            const wgid = wallLayer.data[idx];
            if (fgid === 2 || fgid === 4) {
                floorTiles.push({ c, r });
                if (wgid !== 0) wallTiles.push({ c, r });
            }
            if (wgid !== 0) wallSet.add(c + ',' + r);
        }
    }

    const interiorSet = new Set(floorTiles.map(t => t.c + ',' + t.r));
    const DIRS = [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]];
    for (const { c, r } of floorTiles) {
        for (const [dc, dr] of DIRS) {
            const nc = c + dc, nr = r + dr;
            const key = nc + ',' + nr;
            if (!interiorSet.has(key)) wallSet.add(key);
        }
    }

    _shadowMapCache = { wallSet, floorTiles, wallTiles, interiorSet };
}

function isPlayerInsideHouse() {
    const floorLayer = __xe70299.MAP.layers.find(l => l.name === 'floor2');
    if (!floorLayer) return false;
    const col = Math.floor((_$xaf88e0.x + _$xaf88e0.width / 2) / __xe70299.MAP.tileSize);
    const row = Math.floor((_$xaf88e0.y + _$xaf88e0.height / 2) / __xe70299.MAP.tileSize);
    if (col < 0 || col >= __xe70299.MAP.columns || row < 0 || row >= __xe70299.MAP.rows) return false;
    const gid = floorLayer.data[row * __xe70299.MAP.columns + col];
    return gid === 2;
}

function computeShadowVisibility() {
    if (_$xaf88e0.isDead) { __xe70299.SHADOW.polygon = null; return; }

    const _ox1e7c52 = __xe70299.MAP;
    const S = __xe70299.SHADOW;
    const TILE = _ox1e7c52.tileSize;

    if (!_shadowMapCache) _rebuildShadowMapCache();
    if (!_shadowMapCache) { S.polygon = null; return; }

    const { wallSet, floorTiles } = _shadowMapCache;
    if (floorTiles.length === 0) { S.polygon = null; return; }

    if (!isPlayerInsideHouse()) { S.polygon = null; return; }

    const ox = _$xaf88e0.x + _$xaf88e0.width / 2;
    const oy = _$xaf88e0.y + _$xaf88e0.height / 2;

    if (!_shadowMapCache._bounds) {
        let minC = Infinity, maxC = -Infinity, minR = Infinity, maxR = -Infinity;
        for (const { c, r } of floorTiles) {
            if (c < minC) minC = c; if (c > maxC) maxC = c;
            if (r < minR) minR = r; if (r > maxR) maxR = r;
        }
        _shadowMapCache._bounds = {
            minC: Math.max(0, minC - 1),
            maxC: Math.min(_ox1e7c52.columns - 1, maxC + 1),
            minR: Math.max(0, minR - 1),
            maxR: Math.min(_ox1e7c52.rows - 1, maxR + 1)
        };
        const wallArr = [];
        for (let r = _shadowMapCache._bounds.minR; r <= _shadowMapCache._bounds.maxR; r++) {
            for (let c = _shadowMapCache._bounds.minC; c <= _shadowMapCache._bounds.maxC; c++) {
                if (wallSet.has(c + ',' + r)) wallArr.push(c, r);
            }
        }
        _shadowMapCache._wallArr = wallArr;
    }

    const { minC, maxC, minR, maxR } = _shadowMapCache._bounds;
    const wallArr = _shadowMapCache._wallArr;

    const EPS = 0.0001;
    const seen = new Set();
    const rawAngles = [];

    for (let i = 0; i < wallArr.length; i += 2) {
        const c = wallArr[i], r = wallArr[i + 1];
        const corners = [
            c * TILE, r * TILE,
            c * TILE + TILE, r * TILE,
            c * TILE, r * TILE + TILE,
            c * TILE + TILE, r * TILE + TILE
        ];
        for (let j = 0; j < corners.length; j += 2) {
            const cx = corners[j], cy = corners[j + 1];
            const a = Math.atan2(cy - oy, cx - ox);
            const key = Math.round(a * 20000);
            if (!seen.has(key - 1)) { seen.add(key - 1); rawAngles.push(a - EPS); }
            if (!seen.has(key)) { seen.add(key); rawAngles.push(a); }
            if (!seen.has(key + 1)) { seen.add(key + 1); rawAngles.push(a + EPS); }
        }
    }
    rawAngles.sort((a, b) => a - b);

    const maxDist = Math.hypot((maxC - minC + 2) * TILE, (maxR - minR + 2) * TILE);

    const castRay = (angle) => {
        const rdx = Math.cos(angle);
        const rdy = Math.sin(angle);
        let minT = maxDist;

        for (let i = 0; i < wallArr.length; i += 2) {
            const c = wallArr[i], r = wallArr[i + 1];
            const tx0 = c * TILE, ty0 = r * TILE;
            const tx1 = tx0 + TILE, ty1 = ty0 + TILE;

            const tcx = tx0 + TILE * 0.5, tcy = ty0 + TILE * 0.5;
            const approxDist = Math.abs(tcx - ox) + Math.abs(tcy - oy);
            if (approxDist > minT + TILE * 1.5) continue;

            let denom, t, u;

            denom = -rdy * TILE;
            if (Math.abs(denom) >= 1e-10) {
                t = -(ty0 - oy) * TILE / denom;
                u = ((tx0 - ox) * rdy - (ty0 - oy) * rdx) / denom;
                if (t > 0.001 && u >= 0 && u <= 1 && t < minT) minT = t;
            }
            denom = rdx * TILE;
            if (Math.abs(denom) >= 1e-10) {
                t = (tx1 - ox) * TILE / denom;
                u = ((tx1 - ox) * rdy - (ty0 - oy) * rdx) / denom;
                if (t > 0.001 && u >= 0 && u <= 1 && t < minT) minT = t;
            }
            denom = rdy * TILE;
            if (Math.abs(denom) >= 1e-10) {
                t = (ty1 - oy) * TILE / denom;
                u = ((tx1 - ox) * rdy - (ty1 - oy) * rdx) / denom;
                if (t > 0.001 && u >= 0 && u <= 1 && t < minT) minT = t;
            }
            denom = -rdx * TILE;
            if (Math.abs(denom) >= 1e-10) {
                t = -(tx0 - ox) * TILE / denom;
                u = ((tx0 - ox) * rdy - (ty1 - oy) * rdx) / denom;
                if (t > 0.001 && u >= 0 && u <= 1 && t < minT) minT = t;
            }
        }

        const hitDist = minT < maxDist ? (minT + 8) : minT;
        return { x: ox + rdx * hitDist, y: oy + rdy * hitDist };
    };

    const verts = [];
    for (let i = 0; i < rawAngles.length; i++) {
        const pt = castRay(rawAngles[i]);
        verts.push(pt.x, pt.y);
    }

    S.polygon = verts.length >= 6 ? new Float32Array(verts) : null;
}

function drawShadowOverlay(ctx, camX, camY) {
    if (_$xaf88e0.isDead) return;
    if (!_shadowMapCache) return;
    const { floorTiles, wallTiles } = _shadowMapCache;
    if (floorTiles.length === 0) return;

    const S = __xe70299.SHADOW;
    const TILE = __xe70299.MAP.tileSize;
    const W = __xe70299.CAMERA.width;
    const H = __xe70299.CAMERA.height;

    if (!__xe70299.SHADOW._buf || __xe70299.SHADOW._buf.width !== W || __xe70299.SHADOW._buf.height !== H) {
        __xe70299.SHADOW._buf = document.createElement('canvas');
        __xe70299.SHADOW._buf.width = W;
        __xe70299.SHADOW._buf.height = H;
    }
    const buf = __xe70299.SHADOW._buf;
    const bufCtx = buf.getContext('2d');
    bufCtx.clearRect(0, 0, W, H);

    bufCtx.fillStyle = 'rgba(0,0,0,0.97)';
    bufCtx.beginPath();
    for (const { c, r } of floorTiles) {
        const sx = Math.floor(c * TILE - camX), sy = Math.floor(r * TILE - camY);
        if (sx > W || sy > H || sx + TILE < 0 || sy + TILE < 0) continue;
        bufCtx.rect(sx - 1, sy - 1, TILE + 2, TILE + 2);
    }
    bufCtx.fill();

    if (wallTiles.length > 0) {
        bufCtx.globalCompositeOperation = 'destination-out';
        bufCtx.fillStyle = 'rgba(0,0,0,1)';
        bufCtx.beginPath();
        for (const { c, r } of wallTiles) {
            const sx = Math.floor(c * TILE - camX), sy = Math.floor(r * TILE - camY);
            if (sx > W || sy > H || sx + TILE < 0 || sy + TILE < 0) continue;
            bufCtx.rect(sx - 1, sy - 1, TILE + 2, TILE + 2);
        }
        bufCtx.fill();
        bufCtx.globalCompositeOperation = 'source-over';
    }

    if (S.polygon && S.polygon.length >= 6) {
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
    }

    ctx.drawImage(buf, 0, 0);
}

function update(dt) {
    let inputX = 0, inputY = 0;

    const smX = __xe70299.INPUTS.mouseX / __xe70299.SYSTEM.viewScale;
    const smY = __xe70299.INPUTS.mouseY / __xe70299.SYSTEM.viewScale;
    const psX = _$xaf88e0.x - __xe70299.CAMERA.x + _$xaf88e0.width / 2;
    const psY = _$xaf88e0.y - __xe70299.CAMERA.y + _$xaf88e0.height / 2;
    const mouseAngle = Math.atan2(smY - psY, smX - psX);

    if (joystickX !== 0 || joystickY !== 0) {
        inputX = joystickX;
        inputY = joystickY;
    } else if (mouseRelativeMovement) {
        let forward = 0, strafe = 0;
        if (__xe70299.INPUTS.keys.w || __xe70299.INPUTS.keys.arrowup) forward += 1;
        if (__xe70299.INPUTS.keys.s || __xe70299.INPUTS.keys.arrowdown) forward -= 1;
        if (__xe70299.INPUTS.keys.d || __xe70299.INPUTS.keys.arrowright) strafe += 1;
        if (__xe70299.INPUTS.keys.a || __xe70299.INPUTS.keys.arrowleft) strafe -= 1;

        if (forward !== 0 || strafe !== 0) {
            const relativeMoveAngle = mouseAngle + Math.atan2(strafe, forward);
            inputX = Math.cos(relativeMoveAngle);
            inputY = Math.sin(relativeMoveAngle);
        }
    } else {
        if (__xe70299.INPUTS.keys.w || __xe70299.INPUTS.keys.arrowup) inputY -= 1;
        if (__xe70299.INPUTS.keys.s || __xe70299.INPUTS.keys.arrowdown) inputY += 1;
        if (__xe70299.INPUTS.keys.a || __xe70299.INPUTS.keys.arrowleft) inputX -= 1;
        if (__xe70299.INPUTS.keys.d || __xe70299.INPUTS.keys.arrowright) inputX += 1;

        const isMoving = inputX !== 0 || inputY !== 0;
        if (isMoving) {
            const len = Math.sqrt(inputX * inputX + inputY * inputY);
            inputX /= len; inputY /= len;
        }
    }

    if (__xe70299.GAME_STATE === 'NIGHT' && __xfc6336 === 'Skinwalker') {
        if (__xe70299.NIGHT_ABILITY_OPEN || !__xe70299.CURRENT_TARGET) {
            inputX = 0;
            inputY = 0;
            _$xaf88e0.vx = 0;
            _$xaf88e0.vy = 0;
            _$xaf88e0.x = (__xe70299.MAP.columns * __xe70299.MAP.tileSize) / 2 - _$xaf88e0.width / 2;
            _$xaf88e0.y = (__xe70299.MAP.rows * __xe70299.MAP.tileSize) / 2 - _$xaf88e0.height / 2;
        }
    }

    const isMoving = inputX !== 0 || inputY !== 0;
    const intentSprint = (__xe70299.INPUTS.keys.shift || mobileSprintActive || joystickAutoSprint) && isMoving;
    _$xaf88e0.bopTimer = intentSprint ? _$xaf88e0.bopTimer + dt : 0;
    _$xaf88e0.scale = 1 + (_$xaf88e0.bopTimer > 0 ? Math.sin(_$xaf88e0.bopTimer * 15) * 0.05 : 0);

    const friction = Math.pow(0.001, dt);
    const accel = intentSprint ? 1866 : 1493;

    _$xaf88e0.vx += inputX * accel * dt;
    _$xaf88e0.vy += inputY * accel * dt;
    _$xaf88e0.vx *= friction;
    _$xaf88e0.vy *= friction;
    _$xaf88e0.x += _$xaf88e0.vx * dt;
    _$xaf88e0.y += _$xaf88e0.vy * dt;

    for (let i = 0; i < 3; i++) _ox493d8c();
    for (let i = 0; i < 2; i++) _Ox80b745();
    for (let i = 0; i < 2; i++) _0xb830fe();

    if (_$xaf88e0.x < 0) _$xaf88e0.x = 0;
    if (_$xaf88e0.y < 0) _$xaf88e0.y = 0;
    if (_$xaf88e0.x + _$xaf88e0.width > __xe70299.MAP.columns * __xe70299.MAP.tileSize) _$xaf88e0.x = __xe70299.MAP.columns * __xe70299.MAP.tileSize - _$xaf88e0.width;
    if (_$xaf88e0.y + _$xaf88e0.height > __xe70299.MAP.rows * __xe70299.MAP.tileSize) _$xaf88e0.y = __xe70299.MAP.rows * __xe70299.MAP.tileSize - _$xaf88e0.height;

    if (touchAimActive) {
        _$xaf88e0.angle = touchAimAngle + (Math.PI / 2);
    } else if (joystickX !== 0 || joystickY !== 0) {
        _$xaf88e0.angle = Math.atan2(joystickY, joystickX) + (Math.PI / 2);
    } else if (!isTouchDevice) {
        _$xaf88e0.angle = mouseAngle + (Math.PI / 2);
    }

    const targetCamX = _$xaf88e0.x + _$xaf88e0.width / 2 - __xe70299.CAMERA.width / 2;
    const targetCamY = _$xaf88e0.y + _$xaf88e0.height / 2 - __xe70299.CAMERA.height / 2;
    if (__xe70299.CAMERA.x === null || isNaN(__xe70299.CAMERA.x) || !isFinite(__xe70299.CAMERA.x)) {
        __xe70299.CAMERA.x = targetCamX;
        __xe70299.CAMERA.y = targetCamY;
    } else {
        const lf = 1 - Math.exp(-Math.max(0, dt) * 40);
        __xe70299.CAMERA.x += (targetCamX - __xe70299.CAMERA.x) * lf;
        __xe70299.CAMERA.y += (targetCamY - __xe70299.CAMERA.y) * lf;
    }

    for (const id in _Ox55f60b) {
        const p = _Ox55f60b[id];
        if (p.renderX === undefined) { p.renderX = p.x; p.renderY = p.y; p.renderAngle = p.angle || 0; }
        const _lerpF = 0.12;
        const _rdx = p.x - p.renderX, _rdy = p.y - p.renderY;
        const _rdist = Math.sqrt(_rdx*_rdx + _rdy*_rdy);
        const _maxStep = 180;
        if (_rdist > _maxStep) { p.renderX = p.x - (_rdx/_rdist)*_maxStep; p.renderY = p.y - (_rdy/_rdist)*_maxStep; }
        p.renderX += (p.x - p.renderX) * _lerpF;
        p.renderY += (p.y - p.renderY) * _lerpF;
        let diff = (p.angle || 0) - p.renderAngle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        p.renderAngle += diff * 0.3;
    }

    if (__xe70299.GAME_STATE === 'NIGHT') {
        _0xa2d061 = Math.min(0.6, _0xa2d061 + dt * 0.5);
    } else {
        _0xa2d061 = Math.max(0, _0xa2d061 - dt * 0.5);
    }

    computeShadowVisibility();
    __x11c3d3();
}

function drawChatBubble(ctx, text, x, y, hasTail = true) {
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

    if (hasTail) {
        ctx.beginPath();
        ctx.moveTo(x - 6, y);
        ctx.lineTo(x + 6, y);
        ctx.lineTo(x, y + 6);
        ctx.fill();
    }

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y - bubbleH / 2 + 1);
}

function renderChatHistory(ctx, chats, x, bottomY) {
    if (!chats || chats.length === 0) return;
    let currentY = bottomY;
    for (let i = 0; i < chats.length; i++) {
        drawChatBubble(ctx, chats[i].text, x, currentY, i === 0);
        currentY -= 36;
    }
}

function render() {
    if (!__xe70299.SYSTEM.isReady) return;

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    try {
        ctx.scale(__xe70299.SYSTEM.viewScale, __xe70299.SYSTEM.viewScale);
        ctx.imageSmoothingEnabled = false;

        const camX = Math.floor(__xe70299.CAMERA.x || 0);
        const camY = Math.floor(__xe70299.CAMERA.y || 0);

    const startCX = Math.max(0, Math.floor(camX / __xe70299.MAP.chunkSize));
    const endCX = Math.min(__xe70299.MAP.bgChunks[0].length - 1, Math.floor((camX + __xe70299.CAMERA.width) / __xe70299.MAP.chunkSize));
    const startCY = Math.max(0, Math.floor(camY / __xe70299.MAP.chunkSize));
    const endCY = Math.min(__xe70299.MAP.bgChunks.length - 1, Math.floor((camY + __xe70299.CAMERA.height) / __xe70299.MAP.chunkSize));

    for (let cy = startCY; cy <= endCY; cy++)
        for (let cx = startCX; cx <= endCX; cx++) {
            const dx = cx * __xe70299.MAP.chunkSize - camX;
            const dy = cy * __xe70299.MAP.chunkSize - camY;
            ctx.drawImage(__xe70299.MAP.bgChunks[cy][cx], dx, dy, __xe70299.MAP.chunkSize + 1, __xe70299.MAP.chunkSize + 1);
        }

    if (centerImg.complete && centerImg.naturalWidth > 0) {
        const TILE = __xe70299.MAP.tileSize;
        const imgSize = TILE * 10;
        const imgX = (__xe70299.MAP.columns / 2) * TILE - imgSize / 2 - camX;
        const imgY = (__xe70299.MAP.rows / 2) * TILE - imgSize / 2 - camY;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(centerImg, imgX, imgY, imgSize, imgSize);
    }

    if (tableImg.complete && tableImg.naturalWidth > 0) {
        __xe70299.ENTITIES.forEach(ent => {
            if (ent.type !== 'table') return;
            ctx.save();
            ctx.imageSmoothingEnabled = false;
            const imgIsHoriz = tableImg.naturalWidth >= tableImg.naturalHeight;
            const entIsHoriz = ent.w >= ent.h;
            if (imgIsHoriz === entIsHoriz) {
                ctx.drawImage(tableImg, ent.x - camX, ent.y - camY, ent.w, ent.h);
            } else {
                ctx.translate(ent.x - camX + ent.w / 2, ent.y - camY + ent.h / 2);
                ctx.rotate(Math.PI / 2);
                ctx.drawImage(tableImg, -ent.h / 2, -ent.w / 2, ent.h, ent.w);
            }
            ctx.restore();
        });
    } else {
        __xe70299.ENTITIES.forEach(ent => {
            if (ent.type !== 'table') return;
            ctx.save();
            ctx.fillStyle = '#6b4423';
            ctx.fillRect(ent.x - camX, ent.y - camY, ent.w, ent.h);
            ctx.strokeStyle = '#422810';
            ctx.lineWidth = 3;
            ctx.strokeRect(ent.x - camX + 1, ent.y - camY + 1, ent.w - 2, ent.h - 2);
            ctx.fillStyle = '#82532a';
            ctx.fillRect(ent.x - camX + 4, ent.y - camY + 4, ent.w - 8, ent.h - 8);
            ctx.restore();
        });
    }

    if (_ox5e9e29) {
        for (let cy = startCY; cy <= endCY; cy++) {
            for (let cx = startCX; cx <= endCX; cx++) {
                const dx = cx * __xe70299.MAP.chunkSize - camX;
                const dy = cy * __xe70299.MAP.chunkSize - camY;
                ctx.drawImage(__xe70299.MAP.fgChunks[cy][cx], dx, dy, __xe70299.MAP.chunkSize + 1, __xe70299.MAP.chunkSize + 1);
            }
        }
        return;
    }

    const amIDark = __xe70299.GAME_STATE === 'NIGHT' && __xfc6336 === 'Skinwalker' && !_$xaf88e0.isDead;
    const pRenderX = _$xaf88e0.x - camX + _$xaf88e0.width / 2;
    const pRenderY = _$xaf88e0.y - camY + _$xaf88e0.height / 2;
    const pScaledW = _$xaf88e0.width * _$xaf88e0.scale * 1.3;
    const pScaledH = _$xaf88e0.height * _$xaf88e0.scale * 1.3;

    for (const id in _Ox55f60b) {
        const p = _Ox55f60b[id];
        if (p.isDead) continue;
        const pRX = (p.renderX ?? p.x) - camX + p.width / 2;
        const pRY = (p.renderY ?? p.y) - camY + p.height / 2;
        const _ps = Math.min(2, Math.max(0.3, p.scale || 1));
        const sW = p.width * _ps * 1.3;
        const sH = p.height * _ps * 1.3;
        ctx.save();
        try {
            ctx.translate(pRX, pRY);
            ctx.rotate(p.renderAngle ?? 0);
            if (p.isDark) ctx.filter = 'brightness(0)';
            drawPlayerLayers(ctx, p.body, p.eyes, sW, sH);
            if (_Ox6b56a8.has(parseInt(id)) && mayorCosmeticImg.complete && mayorCosmeticImg.naturalWidth > 0) {
                ctx.drawImage(mayorCosmeticImg, -sW / 2, -sH / 2, sW, sH);
            }
            if (p.isDark) ctx.filter = 'none';
        } finally {
            ctx.restore();
        }
        if (!isOnHaybale((p.renderX ?? p.x) + p.width / 2, (p.renderY ?? p.y) + p.height / 2)) {
            ctx.textAlign = 'center';
            ctx.lineJoin = 'round';
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'rgba(0,0,0,0.85)';
            ctx.font = "bold 13px 'Segoe UI'";
            ctx.fillStyle = _Ox6b56a8.has(parseInt(id)) ? '#cc88ff' : '#ffffff';
            const pLabel = p.isDark ? '???' : (p.name + (p.isOwner ? ' [🗝️]' : ''));
            ctx.strokeText(pLabel, pRX, pRY - sH / 2 - 16);
            ctx.fillText(pLabel, pRX, pRY - sH / 2 - 16);
        }
    }

    if (!_$xaf88e0.isDead) {
        ctx.save();
        try {
            ctx.translate(pRenderX, pRenderY);
            ctx.rotate(_$xaf88e0.angle);
            if (amIDark) ctx.filter = 'brightness(0)';
            drawPlayerLayers(ctx, _Ox9617e2, _0xcd919b, pScaledW, pScaledH);
            if (_Ox6b56a8.has(_0x8d6fc4) && mayorCosmeticImg.complete && mayorCosmeticImg.naturalWidth > 0) {
                ctx.drawImage(mayorCosmeticImg, -pScaledW / 2, -pScaledH / 2, pScaledW, pScaledH);
            }
            if (amIDark) ctx.filter = 'none';
        } finally {
            ctx.restore();
        }
        if (!isOnHaybale(_$xaf88e0.x + _$xaf88e0.width / 2, _$xaf88e0.y + _$xaf88e0.height / 2)) {
            ctx.textAlign = 'center';
            ctx.lineJoin = 'round';
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'rgba(0,0,0,0.85)';
            ctx.font = "bold 13px 'Segoe UI'";
            ctx.fillStyle = (_Ox6b56a8.has(_0x8d6fc4)) ? '#cc88ff' : '#ffffff';
            const myLabel = amIDark ? '???' : (_$xc4e97d + (_ox33dcef ? ' [🗝️]' : ''));
            ctx.strokeText(myLabel, pRenderX, pRenderY - pScaledH / 2 - 16);
            ctx.fillText(myLabel, pRenderX, pRenderY - pScaledH / 2 - 16);
        }
    }

    if (__xe70299.MAP.wallChunks && __xe70299.MAP.wallChunks.length > 0) {
        for (let cy = startCY; cy <= endCY; cy++)
            for (let cx = startCX; cx <= endCX; cx++) {
                if (!__xe70299.MAP.wallChunks[cy] || !__xe70299.MAP.wallChunks[cy][cx]) continue;
                const dx = cx * __xe70299.MAP.chunkSize - camX;
                const dy = cy * __xe70299.MAP.chunkSize - camY;
                ctx.drawImage(__xe70299.MAP.wallChunks[cy][cx], dx, dy, __xe70299.MAP.chunkSize + 1, __xe70299.MAP.chunkSize + 1);
            }
    }

    if (_$xaf88e0.isDead) {
        for (const id in _Ox55f60b) {
            const p = _Ox55f60b[id];
            if (!p.isDead) continue;
            const pRX = (p.renderX ?? p.x) - camX + p.width / 2;
            const pRY = (p.renderY ?? p.y) - camY + p.height / 2;
            const sW = p.width * (p.scale || 1) * 1.3;
            const sH = p.height * (p.scale || 1) * 1.3;
            ctx.save();
            try {
                ctx.translate(pRX, pRY);
                ctx.rotate(p.renderAngle ?? 0);
                ctx.globalAlpha = 0.3;
                drawPlayerLayers(ctx, p.body, p.eyes, sW, sH);
            } finally {
                ctx.restore();
            }
            if (!isOnHaybale((p.renderX ?? p.x) + p.width / 2, (p.renderY ?? p.y) + p.height / 2)) {
                ctx.save();
                ctx.globalAlpha = 0.3;
                ctx.textAlign = 'center';
                ctx.lineJoin = 'round';
                ctx.lineWidth = 3;
                ctx.strokeStyle = 'rgba(0,0,0,0.85)';
                ctx.font = "bold 13px 'Segoe UI'";
                ctx.fillStyle = '#ffffff';
                const pLabel = p.name + (p.isOwner ? ' [🗝️]' : '');
                ctx.strokeText(pLabel, pRX, pRY - sH / 2 - 16);
                ctx.fillText(pLabel, pRX, pRY - sH / 2 - 16);
                ctx.restore();
            }
        }
        ctx.save();
        try {
            ctx.translate(pRenderX, pRenderY);
            ctx.rotate(_$xaf88e0.angle);
            ctx.globalAlpha = 0.3;
            drawPlayerLayers(ctx, _Ox9617e2, _0xcd919b, pScaledW, pScaledH);
        } finally {
            ctx.restore();
        }
        if (!isOnHaybale(_$xaf88e0.x + _$xaf88e0.width / 2, _$xaf88e0.y + _$xaf88e0.height / 2)) {
            ctx.save();
            ctx.globalAlpha = 0.3;
            ctx.textAlign = 'center';
            ctx.lineJoin = 'round';
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'rgba(0,0,0,0.85)';
            ctx.font = "bold 13px 'Segoe UI'";
            ctx.fillStyle = '#ffffff';
            const myLabel = _$xc4e97d + (_ox33dcef ? ' [🗝️]' : '');
            ctx.strokeText(myLabel, pRenderX, pRenderY - pScaledH / 2 - 16);
            ctx.fillText(myLabel, pRenderX, pRenderY - pScaledH / 2 - 16);
            ctx.restore();
        }
    }

    for (let cy = startCY; cy <= endCY; cy++)
        for (let cx = startCX; cx <= endCX; cx++) {
            const dx = cx * __xe70299.MAP.chunkSize - camX;
            const dy = cy * __xe70299.MAP.chunkSize - camY;
            ctx.drawImage(__xe70299.MAP.fgChunks[cy][cx], dx, dy, __xe70299.MAP.chunkSize + 1, __xe70299.MAP.chunkSize + 1);
        }

    if (__xe70299.EDITOR.enabled && __xe70299.EDITOR.selectedTileGid >= 0) {
        const wX = (__xe70299.INPUTS.mouseX / __xe70299.SYSTEM.viewScale) + __xe70299.CAMERA.x;
        const wY = (__xe70299.INPUTS.mouseY / __xe70299.SYSTEM.viewScale) + __xe70299.CAMERA.y;
        const col = Math.floor(wX / __xe70299.MAP.tileSize);
        const row = Math.floor(wY / __xe70299.MAP.tileSize);

        if (col >= 0 && col < __xe70299.MAP.columns && row >= 0 && row < __xe70299.MAP.rows) {
            const drawX = col * __xe70299.MAP.tileSize - camX;
            const drawY = row * __xe70299.MAP.tileSize - camY;
            ctx.save();
            ctx.globalAlpha = 0.5;
            if (__xe70299.EDITOR.selectedTileGid > 0) {
                const tId = __xe70299.EDITOR.selectedTileGid - 1;
                ctx.drawImage(tilesheetImg,
                    (tId % __xe70299.MAP.tilesetCols) * __xe70299.MAP.tileSize,
                    Math.floor(tId / __xe70299.MAP.tilesetCols) * __xe70299.MAP.tileSize,
                    __xe70299.MAP.tileSize, __xe70299.MAP.tileSize,
                    drawX, drawY, __xe70299.MAP.tileSize, __xe70299.MAP.tileSize);
            } else {
                ctx.fillStyle = 'rgba(0,0,0,0.5)';
                ctx.fillRect(drawX, drawY, __xe70299.MAP.tileSize, __xe70299.MAP.tileSize);
            }
            ctx.restore();
        }
    }

    drawShadowOverlay(ctx, camX, camY);

    if (_0xa2d061 > 0) {
        ctx.fillStyle = `rgba(0, 0, 40, ${nightAlpha})`;
        ctx.fillRect(0, 0, __xe70299.CAMERA.width, __xe70299.CAMERA.height);
    }

    for (const id in _Ox55f60b) {
        const p = _Ox55f60b[id];
        if (p.isDead && !_$xaf88e0.isDead) continue;
        const pRX = (p.renderX ?? p.x) - camX + p.width / 2;
        const pRY = (p.renderY ?? p.y) - camY + p.height / 2;
        renderChatHistory(ctx, p.chats, pRX, pRY - p.height / 2 - 32);
    }
    renderChatHistory(ctx, _$xaf88e0.chats, pRenderX, pRenderY - _$xaf88e0.height / 2 - 32);
    } finally {
        ctx.restore();
    }
}

function gameLoop(now) {
    if (!__xe70299.SYSTEM.isReady) return;
    requestAnimationFrame(gameLoop);

    let dt = (now - __xe70299.SYSTEM.lastTime) / 1000;
    __xe70299.SYSTEM.lastTime = now;
    if (dt > 0.1) dt = 0.1;
    if (dt < 0 || isNaN(dt)) dt = 0.016;

    if (_ox5e9e29) {
        updateMenuCamera(dt);
        render();
        return;
    }

    if (!_0x8d6fc4) return;
    update(dt);
    HeartbeatManager.tick(now);
    render();
}

function preRenderMap() {
    const numCX = Math.ceil((__xe70299.MAP.columns * __xe70299.MAP.tileSize) / __xe70299.MAP.chunkSize);
    const numCY = Math.ceil((__xe70299.MAP.rows * __xe70299.MAP.tileSize) / __xe70299.MAP.chunkSize);

    __xe70299.MAP.bgChunks = [];
    __xe70299.MAP.fgChunks = [];
    __xe70299.MAP.wallChunks = [];
    for (let cy = 0; cy < numCY; cy++) {
        __xe70299.MAP.bgChunks[cy] = [];
        __xe70299.MAP.fgChunks[cy] = [];
        __xe70299.MAP.wallChunks[cy] = [];
        for (let cx = 0; cx < numCX; cx++) {
            const bg = document.createElement('canvas'); bg.width = bg.height = __xe70299.MAP.chunkSize;
            const fg = document.createElement('canvas'); fg.width = fg.height = __xe70299.MAP.chunkSize;
            const wc = document.createElement('canvas'); wc.width = wc.height = __xe70299.MAP.chunkSize;
            __xe70299.MAP.bgChunks[cy][cx] = bg;
            __xe70299.MAP.fgChunks[cy][cx] = fg;
            __xe70299.MAP.wallChunks[cy][cx] = wc;
            renderChunk(cx, cy);
        }
    }
}

function renderChunk(cx, cy) {
    const bgCtx = __xe70299.MAP.bgChunks[cy][cx].getContext('2d', { alpha: true });
    const fgCtx = __xe70299.MAP.fgChunks[cy][cx].getContext('2d', { alpha: true });
    const wcCtx = __xe70299.MAP.wallChunks[cy] && __xe70299.MAP.wallChunks[cy][cx] ? __xe70299.MAP.wallChunks[cy][cx].getContext('2d', { alpha: true }) : null;
    bgCtx.imageSmoothingEnabled = fgCtx.imageSmoothingEnabled = false;
    if (wcCtx) wcCtx.imageSmoothingEnabled = false;
    bgCtx.clearRect(0, 0, __xe70299.MAP.chunkSize, __xe70299.MAP.chunkSize);
    fgCtx.clearRect(0, 0, __xe70299.MAP.chunkSize, __xe70299.MAP.chunkSize);
    if (wcCtx) wcCtx.clearRect(0, 0, __xe70299.MAP.chunkSize, __xe70299.MAP.chunkSize);

    const startCol = Math.floor((cx * __xe70299.MAP.chunkSize) / __xe70299.MAP.tileSize);
    const endCol = Math.ceil(((cx + 1) * __xe70299.MAP.chunkSize) / __xe70299.MAP.tileSize);
    const startRow = Math.floor((cy * __xe70299.MAP.chunkSize) / __xe70299.MAP.tileSize);
    const endRow = Math.ceil(((cy + 1) * __xe70299.MAP.chunkSize) / __xe70299.MAP.tileSize);

    const sInset = 0.5;
    const sSize = __xe70299.MAP.tileSize - (sInset * 2);

    __xe70299.MAP.layers.forEach(layer => {
        const isWallLayer = layer.name === 'walls';
        const tCtx = layer.name === 'trees' ? fgCtx : (isWallLayer ? (wcCtx || bgCtx) : bgCtx);
        for (let r = Math.max(0, startRow); r < Math.min(__xe70299.MAP.rows, endRow); r++) {
            for (let c = Math.max(0, startCol); c < Math.min(__xe70299.MAP.columns, endCol); c++) {
                let gid = layer.data[r * __xe70299.MAP.columns + c];
                if (layer.name === 'floor2' && __xe70299.MAP.doors && __xe70299.MAP.doors[r * __xe70299.MAP.columns + c]) {
                    gid = 2;
                }
                if (gid > 0) {
                    const tId = gid - 1;
                    const sx = (tId % __xe70299.MAP.tilesetCols) * __xe70299.MAP.tileSize + sInset;
                    const sy = Math.floor(tId / __xe70299.MAP.tilesetCols) * __xe70299.MAP.tileSize + sInset;
                    const dx = (c * __xe70299.MAP.tileSize) - (cx * __xe70299.MAP.chunkSize);
                    const dy = (r * __xe70299.MAP.tileSize) - (cy * __xe70299.MAP.chunkSize);
                    if (gid === 4) {
                        const floorTId = 1;
                        const fsx = (floorTId % __xe70299.MAP.tilesetCols) * __xe70299.MAP.tileSize + sInset;
                        const fsy = Math.floor(floorTId / __xe70299.MAP.tilesetCols) * __xe70299.MAP.tileSize + sInset;
                        bgCtx.drawImage(tilesheetImg, fsx, fsy, sSize, sSize, dx, dy, __xe70299.MAP.tileSize, __xe70299.MAP.tileSize);

                        let side = __xe70299.MAP.doors ? __xe70299.MAP.doors[r * __xe70299.MAP.columns + c] : null;
                        if (!side) {
                            const wLayer = __xe70299.MAP.layers.find(l => l.name === 'walls');
                            const topW = (r > 0 && wLayer && wLayer.data[(r - 1) * __xe70299.MAP.columns + c] > 0);
                            const botW = (r < __xe70299.MAP.rows - 1 && wLayer && wLayer.data[(r + 1) * __xe70299.MAP.columns + c] > 0);
                            const leftW = (c > 0 && wLayer && wLayer.data[r * __xe70299.MAP.columns + c - 1] > 0);
                            const rightW = (c < __xe70299.MAP.columns - 1 && wLayer && wLayer.data[r * __xe70299.MAP.columns + c + 1] > 0);
                            if (leftW && rightW) side = (r < __xe70299.MAP.rows / 2) ? 'bottom' : 'top';
                            else if (topW && botW) side = (c < __xe70299.MAP.columns / 2) ? 'right' : 'left';
                        }
                        let rot = 0;
                        if (side === 'bottom') rot = Math.PI / 2;
                        else if (side === 'left') rot = Math.PI;
                        else if (side === 'top') rot = -Math.PI / 2;
                        else if (side === 'right') rot = 0;

                        if (rot !== 0) {
                            tCtx.save();
                            tCtx.translate(dx + __xe70299.MAP.tileSize / 2, dy + __xe70299.MAP.tileSize / 2);
                            tCtx.rotate(rot);
                            tCtx.drawImage(tilesheetImg, sx, sy, sSize, sSize, -__xe70299.MAP.tileSize / 2, -__xe70299.MAP.tileSize / 2, __xe70299.MAP.tileSize, __xe70299.MAP.tileSize);
                            tCtx.restore();
                        } else {
                            tCtx.drawImage(tilesheetImg, sx, sy, sSize, sSize, dx, dy, __xe70299.MAP.tileSize, __xe70299.MAP.tileSize);
                        }
                    } else {
                        tCtx.drawImage(tilesheetImg, sx, sy, sSize, sSize, dx, dy, __xe70299.MAP.tileSize, __xe70299.MAP.tileSize);
                    }
                }
            }
        }
    });
}

function loadImages() {
    tilesheetImg.crossOrigin = 'Anonymous';
    tilesheetImg.onload = () => {
        __xe70299.MAP.tilesetCols = 3;
        onAssetLoad();
    };
    tilesheetImg.onerror = () => {
        __xe70299.MAP.tilesetCols = 1;
        onAssetLoad();
    };
    tilesheetImg.src = 'assets/tilesheet.png';

    centerImg.crossOrigin = 'Anonymous';
    centerImg.onload = onAssetLoad;
    centerImg.onerror = () => {
        onAssetLoad();
    };
    centerImg.src = 'assets/center.png';

    tableImg.crossOrigin = 'Anonymous';
    tableImg.onload = onAssetLoad;
    tableImg.onerror = () => { onAssetLoad(); };
    tableImg.src = 'assets/table.png';
}

function onAssetLoad() {
    __xe70299.SYSTEM.assetsLoaded++;
    if (__xe70299.SYSTEM.assetsLoaded === 3) {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-menu-ui').style.display = 'flex';
        resizeCanvas();
    }
}

function handleMapEdit(screenX, screenY) {
    if (!_ox33dcef || !_$x050b54) return;
    const worldX = (screenX / __xe70299.SYSTEM.viewScale) + __xe70299.CAMERA.x;
    const worldY = (screenY / __xe70299.SYSTEM.viewScale) + __xe70299.CAMERA.y;
    const col = Math.floor(worldX / __xe70299.MAP.tileSize);
    const row = Math.floor(worldY / __xe70299.MAP.tileSize);
    if (col >= 0 && col < __xe70299.MAP.columns && row >= 0 && row < __xe70299.MAP.rows)
        _$x050b54.send(JSON.stringify({ type: 'edit', layer: __xe70299.EDITOR.selectedLayer, col, row, gid: __xe70299.EDITOR.selectedTileGid }));
}

function initEditorUI() {
    const palette = document.getElementById('palette');
    if (!palette || palette.children.length > 0) return;

    const TILE = 64;
    const tsImg = tilesheetImg;

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px solid #555;background:#222;cursor:grab;flex-shrink:0;';

    const tsCanvas = document.createElement('canvas');
    tsCanvas.width = 192;
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
        const gid = __xe70299.EDITOR.selectedTileGid;
        if (gid <= 0) { highlight.style.display = 'none'; return; }
        const tileIdx = gid - 1;
        const tCol = tileIdx % tsCols;
        const tRow = Math.floor(tileIdx / tsCols);
        const sx = tCol * TILE - tsOffX;
        const sy = tRow * TILE - tsOffY;
        highlight.style.display = 'block';
        highlight.style.left = sx + 'px';
        highlight.style.top = sy + 'px';
    }

    tsImg.onload = () => { drawTilesheet(); updateHighlight(); };
    if (tsImg.complete && tsImg.naturalWidth > 0) { drawTilesheet(); updateHighlight(); }

    wrapper.addEventListener('mousedown', e => {
        if (e.button === 0) {
            dragging = true;
            dragSX = e.clientX; dragSY = e.clientY;
            dragOX = tsOffX; dragOY = tsOffY;
            wrapper.style.cursor = 'grabbing';
            e.stopPropagation();
        }
    });
    window.addEventListener('mousemove', e => {
        if (!dragging) return;
        const dx = dragSX - e.clientX;
        const dy = dragSY - e.clientY;
        const maxX = Math.max(0, tsImg.naturalWidth - tsCanvas.width);
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
        const my = e.clientY - rect.top + tsOffY;
        const tsCols = Math.max(1, Math.ceil(tsImg.naturalWidth / TILE));
        const col = Math.floor(mx / TILE);
        const row = Math.floor(my / TILE);
        const gid = row * tsCols + col + 1;
        __xe70299.EDITOR.selectedTileGid = gid;
        updateHighlight();
    });

    palette.appendChild(wrapper);

    const eraser = document.createElement('div');
    eraser.className = 'tile-btn eraser-btn';
    eraser.title = 'Eraser (gid 0)';
    eraser.onclick = () => {
        __xe70299.EDITOR.selectedTileGid = 0;
        highlight.style.display = 'none';
    };
    palette.appendChild(eraser);

    document.getElementById('editor-toggle-btn').addEventListener('click', function () {
        __xe70299.EDITOR.enabled = !__xe70299.EDITOR.enabled;
        const tools = document.getElementById('editor-tools');
        if (__xe70299.EDITOR.enabled) { this.innerText = 'Editor: ON'; this.classList.add('active'); tools.style.display = 'flex'; }
        else { this.innerText = 'Editor: OFF'; this.classList.remove('active'); tools.style.display = 'none'; }
    });

    const startBtn = document.getElementById('start-game-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            if (_$x050b54) _$x050b54.send(JSON.stringify({ type: 'start_game' }));
        });
    }

    const rolelistBtn = document.getElementById('rolelist-toggle-btn');
    if (rolelistBtn) {
        let currentMode = 'subalignments';
        rolelistBtn.addEventListener('click', () => {
            if (currentMode === 'subalignments') currentMode = 'precise';
            else if (currentMode === 'precise') currentMode = 'off';
            else currentMode = 'subalignments';
            rolelistBtn.innerText = 'Role List: ' + currentMode.charAt(0).toUpperCase() + currentMode.slice(1);
            if (_$x050b54) _$x050b54.send(JSON.stringify({ type: 'set_rolelist_mode', mode: currentMode }));
        });
    }

    document.querySelectorAll('#editor-ui .layer-btn').forEach(btn => {
        if (btn.id === 'editor-toggle-btn' || btn.id === 'start-game-btn' || btn.id === 'rolelist-toggle-btn') return;
        btn.addEventListener('click', () => {
            document.querySelectorAll('#layer-toggles .layer-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            __xe70299.EDITOR.selectedLayer = btn.dataset.layer;
        });
    });
}

function sendKick(targetId) { if(_$x050b54) _$x050b54.send(JSON.stringify({ type: 'kick', targetId })); }
function sendBan(targetId) { if(_$x050b54) _$x050b54.send(JSON.stringify({ type: 'ban', targetId })); }

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
    panel.style.top = py + 'px';

    const close = (ev) => { if (!panel.contains(ev.target)) { panel.remove(); document.removeEventListener('mousedown', close); } };
    setTimeout(() => document.addEventListener('mousedown', close), 0);
}

function updateLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = '';

    const selfDiv = document.createElement('div');
    selfDiv.className = 'leaderboard-entry';
    const selfSpan = document.createElement('span');
    selfSpan.textContent = _$xc4e97d + (_ox33dcef ? ' [🗝️]' : '');
    if (_Ox6b56a8.has(_0x8d6fc4) && !_$xaf88e0.isDead) {
        selfSpan.style.color = '#cc88ff';
    }
    selfDiv.appendChild(selfSpan);
    list.appendChild(selfDiv);

    for (const id in _Ox55f60b) {
        const div = document.createElement('div');
        div.className = 'leaderboard-entry';
        const span = document.createElement('span');
        span.textContent = _Ox55f60b[id].name + (_Ox55f60b[id].isOwner ? ' [🗝️]' : '');
        if (_Ox6b56a8.has(parseInt(id)) && !_Ox55f60b[id].isDead) {
            span.style.color = '#cc88ff';
        }
        div.appendChild(span);
        if (_ox33dcef && !_Ox55f60b[id].isOwner) {
            const pId = _Ox55f60b[id].id;
            const pName = _Ox55f60b[id].name;
            div.style.cursor = 'context-menu';
            div.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                e.stopPropagation();
                showAdminPanel(pId, pName, e.clientX, e.clientY);
            });
        }
        list.appendChild(div);
    }
}

window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    __xe70299.SYSTEM.viewScale = Math.max(canvas.width / __x3c850d, canvas.height / _ox73fec6);
    __xe70299.CAMERA.width = canvas.width / __xe70299.SYSTEM.viewScale;
    __xe70299.CAMERA.height = canvas.height / __xe70299.SYSTEM.viewScale;
    ctx.imageSmoothingEnabled = false;
}

function preventZoom(e) {
    if (e.ctrlKey || e.metaKey) {
        if (e.type === 'wheel' || ['=','-','0','+'].includes(e.key) || ['NumpadAdd','NumpadSubtract'].includes(e.code)) {
            e.preventDefault(); e.stopImmediatePropagation();
        }
    }
}
window.addEventListener('wheel', preventZoom, { passive: false });
window.addEventListener('keydown', preventZoom, { passive: false });

window.addEventListener('keydown', e => {
    const key = e.key.toLowerCase();

    if (key === 'tab') {
        e.preventDefault();
        const willUI = document.getElementById('will-ui');
        const willInput = document.getElementById('will-input');
        if (willUI.style.display === 'flex') {
            willUI.style.display = 'none';
            if (_$x050b54) _$x050b54.send(JSON.stringify({ type: 'update_will', text: willInput.value }));
            willInput.blur();
        } else {
            willUI.style.display = 'flex';
            willInput.focus();
            for (let k in __xe70299.INPUTS.keys) __xe70299.INPUTS.keys[k] = false;
        }
        return;
    }

    if (e.key === 'Enter') {
        if (_ox5e9e29) {
            const playBtn = document.getElementById('play-btn');
            if (playBtn) playBtn.click();
            return;
        }

        if (!_$x050b54 || _$x050b54.readyState !== WebSocket.OPEN) return;

        const chatUI = document.getElementById('chat-ui');
        const chatInput = document.getElementById('chat-input');

        if (document.activeElement === chatInput) {
            const msg = chatInput.value.trim();
            if (msg.length > 0) {
                _$x050b54.send(JSON.stringify({ type: 'chat', text: msg }));
            }
            chatInput.value = '';
            chatUI.style.display = 'none';
            chatInput.blur();
        } else {
            chatUI.style.display = 'block';
            chatInput.focus();
            for (let k in __xe70299.INPUTS.keys) __xe70299.INPUTS.keys[k] = false;
        }
        e.preventDefault();
        return;
    }

    if (e.key === 'Escape') {
        const guideUI = document.getElementById('guide-ui');
        if (guideUI && guideUI.style.display === 'flex') {
            guideUI.style.display = 'none';
            return;
        }
        const abilityUI = document.getElementById('ability-ui');
        if (abilityUI && abilityUI.style.display === 'block') {
            abilityUI.style.display = 'none';
            return;
        }
        const settingsPanel = document.getElementById('settings-panel');
        if (settingsPanel && settingsPanel.style.display === 'block') {
            settingsPanel.style.display = 'none';
            return;
        }
        const mayorDialog = document.getElementById('mayor-confirm-dialog');
        if (mayorDialog && mayorDialog.style.display === 'flex') {
            mayorDialog.style.display = 'none';
            return;
        }
        const targetUI = document.getElementById('target-chooser-ui');
        if (targetUI && targetUI.style.display === 'flex') {
            targetUI.style.display = 'none';
            return;
        }
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
        if (__xe70299.INPUTS.keys.hasOwnProperty(key)) __xe70299.INPUTS.keys[key] = true;

        if (!_$x050b54 || _$x050b54.readyState !== WebSocket.OPEN) return;

        if (key === 'h' && !e.repeat) {
            const guideUI = document.getElementById('guide-ui');
            if (guideUI) {
                guideUI.style.display = guideUI.style.display === 'flex' ? 'none' : 'flex';
            }
            return;
        }

        if (key === 't' && !e.repeat) {
            if (_$xaf88e0.isDead) return;

            if (__xfc6336 === 'Mayor') {
                if (_Ox6b56a8.has(_0x8d6fc4)) {
                    addChatLog("You have already revealed yourself as the Mayor.", true);
                    return;
                }
                const dialog = document.getElementById('mayor-confirm-dialog');
                if (dialog) dialog.style.display = 'flex';
                return;
            }

            if (__xe70299.GAME_STATE === 'NIGHT') {
                if (!__xe70299.NIGHT_ABILITY_OPEN) {
                    addChatLog("Abilities can only be used during the first 15 seconds of night.", true);
                    return;
                }
                const abilityUI = document.getElementById('ability-ui');
                if (abilityUI) {
                    if (abilityUI.style.display === 'block') {
                        abilityUI.style.display = 'none';
                    } else {
                        populateAbilityUI();
                        abilityUI.style.display = 'block';
                    }
                }
                return;
            }

            if (__xe70299.GAME_STATE === 'DAY_DISCUSS' || __xe70299.GAME_STATE === 'DAY_VOTE') {
                addChatLog("Abilities can only be used during the first 15 seconds of night.", true);
                return;
            }
        }

        if (key === 'e' && !_$xaf88e0.isDead) {
            const _nowDoor = Date.now();
            if (!window._lastDoorSend || _nowDoor - window._lastDoorSend >= 500) {
                window._lastDoorSend = _nowDoor;
                _$x050b54.send(JSON.stringify({ type: 'interact' }));
            }
        }
    }
});

window.addEventListener('keyup', e => {
    if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        const key = e.key.toLowerCase();
        if (__xe70299.INPUTS.keys.hasOwnProperty(key)) __xe70299.INPUTS.keys[key] = false;
    }
});

window.addEventListener('mousemove', e => {
    __xe70299.INPUTS.mouseX = e.clientX;
    __xe70299.INPUTS.mouseY = e.clientY;

    if (__xe70299.INPUTS.isMouseDown && __xe70299.EDITOR.enabled) {
        handleMapEdit(e.clientX, e.clientY);
    }
});

window.addEventListener('mousedown', e => {
    if (e.target.closest('#editor-ui') || e.target.closest('#leaderboard-ui') || e.target.closest('#chat-log-ui') || e.target.closest('#target-chooser-ui') || e.target.closest('#guide-ui') || e.target.closest('#role-list-ui') || e.target.closest('#ability-ui') || e.target.closest('#settings-panel') || e.target.closest('#mayor-confirm-dialog') || e.target.closest('#mobile-action-bar') || e.target.closest('#mobile-top-bar') || e.target.closest('#mobile-joystick-zone') || e.target.closest('#mobile-chat-overlay') || e.target.closest('#will-ui') || e.target.closest('#vote-tally-panel')) return;
    if (e.button === 0) {
        __xe70299.INPUTS.isMouseDown = true;
        if (__xe70299.EDITOR.enabled) handleMapEdit(e.clientX, e.clientY);
    }
});

window.addEventListener('mouseup', e => {
    __xe70299.INPUTS.isMouseDown = false;
});

document.getElementById('leaderboard-header').addEventListener('click', (e) => {
    if (e.target.closest('#settings-btn')) return;
    const list = document.getElementById('leaderboard-list');
    const toggle = document.getElementById('leaderboard-toggle');
    if (list.style.display === 'none') { list.style.display = 'flex'; toggle.style.transform = 'rotate(0deg)'; }
    else { list.style.display = 'none'; toggle.style.transform = 'rotate(180deg)'; }
});

const closeTargetBtn = document.getElementById('close-target-btn');
if (closeTargetBtn) {
    closeTargetBtn.onclick = () => {
        document.getElementById('target-chooser-ui').style.display = 'none';
    };
}

const closeGuideBtn = document.getElementById('close-guide-btn');
if (closeGuideBtn) {
    closeGuideBtn.onclick = () => {
        document.getElementById('guide-ui').style.display = 'none';
    };
}

const roleListHeader = document.getElementById('role-list-header');
if (roleListHeader) {
    roleListHeader.addEventListener('click', () => {
        const list = document.getElementById('role-list-items');
        const toggle = document.getElementById('role-list-toggle');
        if (list.style.display === 'none') {
            list.style.display = 'flex';
            toggle.style.transform = 'rotate(0deg)';
        } else {
            list.style.display = 'none';
            toggle.style.transform = 'rotate(180deg)';
        }
    });
}

function initMobileControls() {
    const joyZone = document.getElementById('mobile-joystick-zone');
    const joyBase = document.getElementById('mobile-joystick-base');
    const joyKnob = document.getElementById('mobile-joystick-knob');

    if (joyZone && joyBase && joyKnob) {
        const maxRadius = 62;

        const handleJoyMove = (clientX, clientY) => {
            const rect = joyBase.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dx = clientX - centerX;
            const dy = clientY - centerY;
            const dist = Math.hypot(dx, dy);

            if (dist === 0) {
                joystickX = 0;
                joystickY = 0;
                joystickAutoSprint = false;
                joyKnob.style.transform = 'translate(0px, 0px)';
                return;
            }

            const clampedDist = Math.min(dist, maxRadius);
            const clampedX = (dx / dist) * clampedDist;
            const clampedY = (dy / dist) * clampedDist;

            joystickX = clampedX / maxRadius;
            joystickY = clampedY / maxRadius;
            joystickAutoSprint = (dist >= maxRadius * 0.75);
            joyKnob.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
        };

        const onTouchStart = (e) => {
            for (let i = 0; i < e.changedTouches.length; i++) {
                const t = e.changedTouches[i];
                if (joystickTouchId === null) {
                    joystickTouchId = t.identifier;
                    joystickActive = true;
                    handleJoyMove(t.clientX, t.clientY);
                    break;
                }
            }
        };

        const onTouchMove = (e) => {
            for (let i = 0; i < e.changedTouches.length; i++) {
                const t = e.changedTouches[i];
                if (t.identifier === joystickTouchId) {
                    handleJoyMove(t.clientX, t.clientY);
                    break;
                }
            }
        };

        const onTouchEnd = (e) => {
            for (let i = 0; i < e.changedTouches.length; i++) {
                const t = e.changedTouches[i];
                if (t.identifier === joystickTouchId) {
                    joystickTouchId = null;
                    joystickActive = false;
                    joystickX = 0;
                    joystickY = 0;
                    joystickAutoSprint = false;
                    joyKnob.style.transform = 'translate(0px, 0px)';
                    break;
                }
            }
        };

        joyZone.addEventListener('touchstart', (e) => {
            e.preventDefault();
            onTouchStart(e);
        }, { passive: false });

        window.addEventListener('touchmove', onTouchMove, { passive: true });
        window.addEventListener('touchend', onTouchEnd, { passive: true });
        window.addEventListener('touchcancel', onTouchEnd, { passive: true });
    }

    const updateTouchAim = (clientX, clientY) => {
        const smX = clientX / __xe70299.SYSTEM.viewScale;
        const smY = clientY / __xe70299.SYSTEM.viewScale;
        const psX = _$xaf88e0.x - __xe70299.CAMERA.x + _$xaf88e0.width / 2;
        const psY = _$xaf88e0.y - __xe70299.CAMERA.y + _$xaf88e0.height / 2;
        touchAimAngle = Math.atan2(smY - psY, smX - psX);
        touchAimActive = true;
        __xe70299.INPUTS.mouseX = clientX;
        __xe70299.INPUTS.mouseY = clientY;
    };

    canvas.addEventListener('touchstart', (e) => {
        if (_ox5e9e29) return;
        for (let i = 0; i < e.changedTouches.length; i++) {
            const t = e.changedTouches[i];
            if (t.identifier !== joystickTouchId && touchAimId === null) {
                touchAimId = t.identifier;
                updateTouchAim(t.clientX, t.clientY);
                break;
            }
        }
    }, { passive: true });

    canvas.addEventListener('touchmove', (e) => {
        if (_ox5e9e29) return;
        for (let i = 0; i < e.changedTouches.length; i++) {
            const t = e.changedTouches[i];
            if (t.identifier === touchAimId) {
                updateTouchAim(t.clientX, t.clientY);
                break;
            }
        }
    }, { passive: true });

    const endTouchAim = (e) => {
        for (let i = 0; i < e.changedTouches.length; i++) {
            const t = e.changedTouches[i];
            if (t.identifier === touchAimId) {
                touchAimId = null;
                touchAimActive = false;
                break;
            }
        }
    };
    canvas.addEventListener('touchend', endTouchAim, { passive: true });
    canvas.addEventListener('touchcancel', endTouchAim, { passive: true });

    const sprintBtn = document.getElementById('mob-sprint-btn');
    if (sprintBtn) {
        sprintBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileSprintActive = !mobileSprintActive;
            sprintBtn.classList.toggle('active', mobileSprintActive);
        });
    }

    const interactBtn = document.getElementById('mob-interact-btn');
    if (interactBtn) {
        interactBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!_$xaf88e0.isDead) {
                const _nowDoor = Date.now();
                if (!window._lastDoorSend || _nowDoor - window._lastDoorSend >= 500) {
                    window._lastDoorSend = _nowDoor;
                    if (_$x050b54 && _$x050b54.readyState === WebSocket.OPEN) _$x050b54.send(JSON.stringify({ type: 'interact' }));
                }
            }
        });
    }

    const abilityBtn = document.getElementById('mob-ability-btn');
    if (abilityBtn) {
        abilityBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (_$xaf88e0.isDead) return;

            if (__xfc6336 === 'Mayor') {
                if (_Ox6b56a8.has(_0x8d6fc4)) {
                    addChatLog("You have already revealed yourself as the Mayor.", true);
                    return;
                }
                const dialog = document.getElementById('mayor-confirm-dialog');
                if (dialog) dialog.style.display = 'flex';
                return;
            }

            if (__xe70299.GAME_STATE === 'NIGHT') {
                if (!__xe70299.NIGHT_ABILITY_OPEN) {
                    addChatLog("Abilities can only be used during the first 15 seconds of night.", true);
                    return;
                }
                const abilityUI = document.getElementById('ability-ui');
                if (abilityUI) {
                    if (abilityUI.style.display === 'block') {
                        abilityUI.style.display = 'none';
                    } else {
                        populateAbilityUI();
                        abilityUI.style.display = 'block';
                    }
                }
                return;
            }

            if (__xe70299.GAME_STATE === 'DAY_DISCUSS' || __xe70299.GAME_STATE === 'DAY_VOTE') {
                addChatLog("Abilities can only be used during the first 15 seconds of night.", true);
                return;
            }
        });
    }

    const willBtn = document.getElementById('mob-will-btn');
    const willUI = document.getElementById('will-ui');
    const willInput = document.getElementById('will-input');
    const closeWillBtn = document.getElementById('close-will-btn');

    const toggleWill = () => {
        if (!willUI) return;
        if (willUI.style.display === 'flex') {
            willUI.style.display = 'none';
            if (_$x050b54 && _$x050b54.readyState === WebSocket.OPEN && willInput) {
                _$x050b54.send(JSON.stringify({ type: 'update_will', text: willInput.value }));
            }
            if (willInput) willInput.blur();
        } else {
            willUI.style.display = 'flex';
            if (willInput) willInput.focus();
        }
    };

    if (willBtn) willBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleWill(); });
    if (closeWillBtn) closeWillBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleWill(); });

    const mobChatBtn = document.getElementById('mob-chat-btn');
    const mobChatOverlay = document.getElementById('mobile-chat-overlay');
    const mobChatInput = document.getElementById('mobile-chat-input');
    const mobChatSend = document.getElementById('mobile-chat-send');
    const mobChatCancel = document.getElementById('mobile-chat-cancel');

    const openMobChat = () => {
        if (!mobChatOverlay || !mobChatInput) return;
        mobChatOverlay.style.display = 'flex';
        mobChatInput.value = '';
        mobChatInput.focus();
    };

    const closeMobChat = () => {
        if (!mobChatOverlay || !mobChatInput) return;
        mobChatOverlay.style.display = 'none';
        mobChatInput.blur();
    };

    const sendMobChat = () => {
        if (!mobChatInput) return;
        const msg = mobChatInput.value.trim();
        if (msg.length > 0 && _$x050b54 && _$x050b54.readyState === WebSocket.OPEN) {
            _$x050b54.send(JSON.stringify({ type: 'chat', text: msg }));
        }
        mobChatInput.value = '';
        closeMobChat();
    };

    if (mobChatBtn) mobChatBtn.addEventListener('click', (e) => { e.stopPropagation(); openMobChat(); });
    if (mobChatSend) mobChatSend.addEventListener('click', (e) => { e.stopPropagation(); sendMobChat(); });
    if (mobChatCancel) mobChatCancel.addEventListener('click', (e) => { e.stopPropagation(); closeMobChat(); });
    if (mobChatInput) {
        mobChatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMobChat();
            } else if (e.key === 'Escape') {
                closeMobChat();
            }
        });
    }

    const mobTopChat = document.getElementById('mob-top-chat');
    if (mobTopChat) mobTopChat.addEventListener('click', (e) => { e.stopPropagation(); openMobChat(); });

    const mobTopWill = document.getElementById('mob-top-will');
    if (mobTopWill) mobTopWill.addEventListener('click', (e) => { e.stopPropagation(); toggleWill(); });

    const mobTopRoles = document.getElementById('mob-top-roles');
    if (mobTopRoles) {
        mobTopRoles.addEventListener('click', (e) => {
            e.stopPropagation();
            const rl = document.getElementById('role-list-ui');
            const lb = document.getElementById('leaderboard-ui');
            if (lb) lb.style.display = 'none';
            if (rl) rl.style.display = (rl.style.display === 'flex' ? 'none' : 'flex');
        });
    }

    const mobTopPlayers = document.getElementById('mob-top-players');
    if (mobTopPlayers) {
        mobTopPlayers.addEventListener('click', (e) => {
            e.stopPropagation();
            const lb = document.getElementById('leaderboard-ui');
            const rl = document.getElementById('role-list-ui');
            if (rl) rl.style.display = 'none';
            if (lb) lb.style.display = (lb.style.display === 'flex' ? 'none' : 'flex');
        });
    }

    const mobTopHelp = document.getElementById('mob-top-help');
    if (mobTopHelp) {
        mobTopHelp.addEventListener('click', (e) => {
            e.stopPropagation();
            const guideUI = document.getElementById('guide-ui');
            if (guideUI) guideUI.style.display = guideUI.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    window.addEventListener('touchstart', () => {
        if (!isTouchDevice) {
            isTouchDevice = true;
            updateMobileVisibility();
        }
    }, { passive: true, once: true });
}
