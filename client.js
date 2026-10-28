document['addEventListener']('contextmenu', _0x2f40bc => _0x2f40bc['preventDefault']());
const _0x514e6f = {
    'Town\x20Investigative': [
        'Investigator',
        'Tracker'
    ],
    'Town\x20Protective': [
        'Doctor',
        'Archer'
    ],
    'Town\x20Killing': ['Vigilante'],
    'Town\x20Support': [
        'Escort',
        'Celebrity',
        'Mayor'
    ],
    'Mafia\x20Deception': ['Skinwalker'],
    'Mafia\x20Support': ['Blackmailer']
};
let _0x64e1bd = '';
function _0x479455(_0xc94f27, _0x39caa6) {
    const _0x393768 = document['getElementById']('role-list-ui');
    const _0x169813 = document['getElementById']('role-list-items');
    if (!_0x393768 || !_0x169813)
        return;
    if (!_0x39caa6 || _0x39caa6 === 'off' || !_0xc94f27 || _0xc94f27['length'] === 0x0) {
        _0x393768['style']['display'] = 'none';
        return;
    }
    const _0x1c8c88 = _0x39caa6 + '|' + JSON['stringify'](_0xc94f27);
    if (_0x1c8c88 === _0x64e1bd)
        return;
    _0x64e1bd = _0x1c8c88;
    const _0x41cd1d = document['getElementById']('role-tooltip');
    if (_0x41cd1d) {
        _0x41cd1d['style']['visibility'] = 'hidden';
        _0x41cd1d['style']['opacity'] = '0';
    }
    _0x393768['style']['display'] = 'flex';
    _0x169813['innerHTML'] = '';
    _0xc94f27['forEach'](_0x1f4641 => {
        const _0x46e6d1 = document['createElement']('div');
        _0x46e6d1['className'] = 'role-list-entry';
        const _0x4e37fb = _0x1f4641['name']['includes']('Mafia') || _0x1f4641['name'] === 'Skinwalker' || _0x1f4641['name'] === 'Blackmailer';
        _0x46e6d1['classList']['add'](_0x4e37fb ? 'mafia' : 'town');
        if (_0x39caa6 === 'precise' && _0x1f4641['isDead']) {
            _0x46e6d1['classList']['remove']('town', 'mafia');
            _0x46e6d1['classList']['add']('dead');
            _0x46e6d1['innerHTML'] = '<span>' + _0x1f4641['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x1831af = _0x1f4641['count'] !== undefined && _0x1f4641['count'] !== null ? _0x1f4641['count'] + 'x\x20' : '';
            _0x46e6d1['innerHTML'] = '<span>' + _0x1831af + _0x1f4641['name'] + '</span>';
        }
        if (_0x39caa6 === 'subalignments' && _0x514e6f[_0x1f4641['name']]) {
            _0x46e6d1['style']['cursor'] = 'pointer';
            _0x46e6d1['addEventListener']('mouseenter', () => {
                const _0x2b5410 = document['getElementById']('role-tooltip');
                if (!_0x2b5410)
                    return;
                const _0x13fb56 = _0x514e6f[_0x1f4641['name']]['join'](',\x20');
                _0x2b5410['innerHTML'] = '';
                const _0xfe2eb6 = document['createElement']('span');
                _0xfe2eb6['style']['color'] = '#ffcc00';
                _0xfe2eb6['textContent'] = _0x1f4641['name'];
                _0x2b5410['appendChild'](_0xfe2eb6);
                _0x2b5410['appendChild'](document['createElement']('br'));
                _0x2b5410['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x13fb56));
                const _0x541ff7 = _0x46e6d1['getBoundingClientRect']();
                _0x2b5410['style']['left'] = _0x541ff7['left'] - 0xeb + 'px';
                _0x2b5410['style']['top'] = _0x541ff7['top'] + 'px';
                _0x2b5410['style']['display'] = 'block';
                _0x2b5410['style']['visibility'] = 'visible';
                _0x2b5410['style']['opacity'] = '1';
            });
            _0x46e6d1['addEventListener']('mouseleave', () => {
                const _0x4001d2 = document['getElementById']('role-tooltip');
                if (_0x4001d2) {
                    _0x4001d2['style']['display'] = 'none';
                    _0x4001d2['style']['visibility'] = 'hidden';
                    _0x4001d2['style']['opacity'] = '0';
                }
            });
        }
        _0x169813['appendChild'](_0x46e6d1);
    });
}
let _0x1932ea = null;
let _0x4590c0 = null;
const _0x220ceb = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0xf15527 = 'Player???';
let _0x3a1069 = ![];
let _0x1b7a80 = {};
let _0x265be6 = null;
let _0x5e19a2 = 0x0;
let _0xacb429 = 0x0;
let _0x18335b = new Set();
let _0x3b281f = ![];
let _0x130283 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x4d708e = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x1db9e4 = ![];
let _0x2a885b = null;
let _0x1e4bd9 = 0x0;
let _0x462bf9 = 0x0;
let _0x46f29f = ![];
let _0x209109 = ![];
let _0x38beec = 0x0;
let _0x3f2a04 = null;
let _0x59787f = ![];
let _0x42c77d = 0x0;
let _0x500b1 = 0x0;
let _0x201289 = [];
let _0x33a5a9 = [];
let _0x366df8 = new Set();
const _0x89f275 = ((() => {
    const _0x597729 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x5e1311 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x5cf25d = 0x320;
    const _0x4a0a9b = {};
    const _0x361b5b = {};
    let _0x2ef7cb = null;
    let _0x1329e9 = _0x5e1311 === 0x0;
    let _0x36f69b = ![];
    for (const [_0x2c7508, _0x4a2b6c] of Object['entries'](_0x597729)) {
        const _0x39904d = new Audio(_0x4a2b6c);
        _0x39904d['loop'] = !![];
        _0x39904d['volume'] = 0x0;
        _0x39904d['preload'] = 'auto';
        _0x4a0a9b[_0x2c7508] = _0x39904d;
        _0x361b5b[_0x2c7508] = null;
    }
    const _0x1c2b8b = _0x56d31f => Math['min'](0x1, Math['max'](0x0, _0x56d31f));
    function _0x4dbbeb(_0x4d89bd) {
        if (_0x361b5b[_0x4d89bd] !== null) {
            cancelAnimationFrame(_0x361b5b[_0x4d89bd]);
            _0x361b5b[_0x4d89bd] = null;
        }
    }
    function _0x313e63(_0x2929e0, _0x4c8128, _0x93ad53, _0xafe89d, _0x5e2ddf) {
        _0x4dbbeb(_0x2929e0);
        const _0x48b6ef = _0x4a0a9b[_0x2929e0];
        const _0x350e65 = performance['now']();
        const _0x1b1c96 = _0x472d15 => {
            const _0x5a7fc8 = _0x1c2b8b((_0x472d15 - _0x350e65) / _0xafe89d);
            const _0x55f8be = _0x1c2b8b(_0x4c8128 + (_0x93ad53 - _0x4c8128) * _0x5a7fc8);
            _0x48b6ef['volume'] = _0x1329e9 ? 0x0 : _0x55f8be;
            if (_0x5a7fc8 < 0x1) {
                _0x361b5b[_0x2929e0] = requestAnimationFrame(_0x1b1c96);
            } else {
                _0x361b5b[_0x2929e0] = null;
                _0x48b6ef['volume'] = _0x1329e9 ? 0x0 : _0x1c2b8b(_0x93ad53);
                if (_0x5e2ddf)
                    _0x5e2ddf();
            }
        };
        _0x361b5b[_0x2929e0] = requestAnimationFrame(_0x1b1c96);
    }
    function _0xbaf90b(_0x4cf576) {
        const _0x5357ed = _0x4cf576['play']();
        if (_0x5357ed && _0x5357ed['catch']) {
            _0x5357ed['catch'](() => {
                if (!_0x36f69b) {
                    const _0x1d119c = () => {
                        _0x36f69b = !![];
                        _0x4cf576['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x1d119c);
                        document['removeEventListener']('keydown', _0x1d119c);
                        document['removeEventListener']('touchstart', _0x1d119c);
                    };
                    document['addEventListener']('click', _0x1d119c, { 'once': !![] });
                    document['addEventListener']('keydown', _0x1d119c, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x1d119c, { 'once': !![] });
                }
            });
        }
    }
    function _0x3331b6(_0x3716d9) {
        if (!_0x597729[_0x3716d9])
            return;
        if (_0x2ef7cb === _0x3716d9)
            return;
        const _0x1993ca = _0x2ef7cb;
        _0x2ef7cb = _0x3716d9;
        const _0xfd9510 = _0x4a0a9b[_0x3716d9];
        _0x4dbbeb(_0x3716d9);
        _0xfd9510['currentTime'] = 0x0;
        _0xfd9510['volume'] = 0x0;
        _0xbaf90b(_0xfd9510);
        _0x313e63(_0x3716d9, 0x0, _0x5e1311, _0x5cf25d);
        if (_0x1993ca && _0x4a0a9b[_0x1993ca]) {
            const _0x2c3af2 = _0x1993ca;
            const _0xc03a75 = _0x4a0a9b[_0x2c3af2];
            const _0x363eda = _0x1c2b8b(_0xc03a75['volume']);
            _0x313e63(_0x2c3af2, _0x363eda, 0x0, _0x5cf25d, () => {
                _0xc03a75['pause']();
                _0xc03a75['currentTime'] = 0x0;
            });
        }
    }
    function _0x19e228(_0x3d7de4) {
        _0x5e1311 = _0x1c2b8b(_0x3d7de4);
        localStorage['setItem']('musicVolume', String(_0x5e1311));
        if (!_0x1329e9 && _0x2ef7cb && _0x361b5b[_0x2ef7cb] === null) {
            _0x4a0a9b[_0x2ef7cb]['volume'] = _0x5e1311;
        }
    }
    function _0x2a1c6a() {
        return _0x5e1311;
    }
    function _0x13983(_0x11396a) {
        _0x1329e9 = _0x11396a;
        for (const _0x4ec236 of Object['keys'](_0x4a0a9b)) {
            if (_0x361b5b[_0x4ec236] === null) {
                _0x4a0a9b[_0x4ec236]['volume'] = _0x11396a || _0x4ec236 !== _0x2ef7cb ? 0x0 : _0x5e1311;
            }
        }
    }
    function _0x50ba00() {
        return _0x1329e9;
    }
    function _0x122a34(_0x3c065c) {
        if (_0x3c065c === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x3c065c === 'DAY_VOTE')
            return 'voting';
        if (_0x3c065c === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x2e624b(_0x46fcdb) {
        _0x3331b6(_0x122a34(_0x46fcdb));
    }
    function _0x2293c5(_0x2b5216) {
        _0x3331b6(_0x2b5216);
    }
    return {
        'play': _0x3331b6,
        'onStateChange': _0x2e624b,
        'onSoundEvent': _0x2293c5,
        'setVolume': _0x19e228,
        'getVolume': _0x2a1c6a,
        'setMuted': _0x13983,
        'isMuted': _0x50ba00
    };
})());
const _0x45d337 = ((() => {
    const _0x2572f3 = 0x258;
    const _0x50e9d6 = 0xb4;
    const _0x46bc47 = 0x708;
    const _0x1784c4 = 0x140;
    const _0x1ab254 = 0.18;
    const _0x516906 = 0.95;
    const _0x17be32 = new Audio('audio/heartbeat.mp3');
    _0x17be32['loop'] = ![];
    _0x17be32['preload'] = 'auto';
    _0x17be32['volume'] = 0x0;
    let _0x322e89 = 0x0;
    let _0x5913fc = Infinity;
    function _0x10e49b(_0x34e354, _0x4f82ad, _0x219acc) {
        return Math['min'](_0x219acc, Math['max'](_0x4f82ad, _0x34e354));
    }
    function _0x1bd091(_0x481fbc, _0x3588ef, _0x2bf9c0) {
        return _0x481fbc + (_0x3588ef - _0x481fbc) * _0x2bf9c0;
    }
    function _0x3cdc0f(_0x509431) {
        if (_0x4cccfb['GAME_STATE'] !== 'NIGHT' || _0x1e4c06['isDead'] || _0x265be6 === 'Skinwalker' || _0x265be6 === 'Blackmailer') {
            _0x5913fc = Infinity;
            return;
        }
        const _0x939f98 = _0x1e4c06['x'] + 22.5;
        const _0x37276f = _0x1e4c06['y'] + 22.5;
        let _0xa4fce5 = Infinity;
        for (const _0x2901ee in _0x1b7a80) {
            const _0xd951c8 = _0x1b7a80[_0x2901ee];
            if (!_0xd951c8['isDark'] || _0xd951c8['isDead'])
                continue;
            const _0x48a333 = _0xd951c8['renderX'] + 22.5 - _0x939f98;
            const _0x5a27bf = _0xd951c8['renderY'] + 22.5 - _0x37276f;
            const _0x587111 = Math['sqrt'](_0x48a333 * _0x48a333 + _0x5a27bf * _0x5a27bf);
            if (_0x587111 < _0xa4fce5)
                _0xa4fce5 = _0x587111;
        }
        _0x5913fc = _0xa4fce5;
        if (_0xa4fce5 > _0x2572f3)
            return;
        const _0x3d83c0 = 0x1 - _0x10e49b((_0xa4fce5 - _0x50e9d6) / (_0x2572f3 - _0x50e9d6), 0x0, 0x1);
        const _0x14ba11 = _0x1bd091(_0x46bc47, _0x1784c4, _0x3d83c0);
        const _0x52ff09 = _0x1bd091(_0x1ab254, _0x516906, _0x3d83c0);
        if (_0x509431 >= _0x322e89) {
            _0x17be32['currentTime'] = 0x0;
            _0x17be32['volume'] = _0x89f275['isMuted']() ? 0x0 : _0x10e49b(_0x52ff09 * _0x89f275['getVolume']() / 0.7, 0x0, 0x1);
            _0x17be32['play']()['catch'](() => {
            });
            _0x322e89 = _0x509431 + _0x14ba11;
        }
    }
    return { 'tick': _0x3cdc0f };
})());
function _0x3cb9b3() {
    const _0xe83b65 = document['getElementById']('mob-ability-btn');
    if (!_0xe83b65)
        return;
    const _0x89815e = _0x4cccfb['GAME_STATE'] === 'NIGHT' && !_0x1e4c06['isDead'];
    const _0xf9611c = _0x265be6 === 'Mayor' && !_0x18335b['has'](_0x4590c0) && !_0x1e4c06['isDead'];
    if (_0x89815e || _0xf9611c) {
        _0xe83b65['style']['display'] = 'flex';
    } else {
        _0xe83b65['style']['display'] = 'none';
    }
}
function _0x36d60f() {
    const _0x1fa1c7 = document['getElementById']('mobile-joystick-zone');
    const _0x2e8d21 = document['getElementById']('mobile-top-bar');
    const _0x2de7e8 = document['getElementById']('mobile-action-bar');
    if (!_0x1fa1c7 || !_0x2e8d21 || !_0x2de7e8)
        return;
    if (!_0x393189 && _0x4d708e) {
        _0x1fa1c7['style']['display'] = 'flex';
        _0x2e8d21['style']['display'] = 'flex';
        _0x2de7e8['style']['display'] = 'flex';
        _0x3cb9b3();
    } else {
        _0x1fa1c7['style']['display'] = 'none';
        _0x2e8d21['style']['display'] = 'none';
        _0x2de7e8['style']['display'] = 'none';
    }
}
const _0x250f5d = document['getElementById']('gameCanvas');
const _0x3399be = _0x250f5d['getContext']('2d', { 'alpha': ![] });
const _0x15f7a2 = 0x500;
const _0x1c0e58 = 0x2d0;
const _0x4cccfb = {
    'MAP': {
        'tileSize': 0x40,
        'chunkSize': 0x400,
        'columns': 0x0,
        'rows': 0x0,
        'tilesetCols': 0x0,
        'layers': [],
        'bgChunks': [],
        'wallChunks': [],
        'fgChunks': []
    },
    'CAMERA': {
        'x': null,
        'y': null,
        'width': _0x15f7a2,
        'height': _0x1c0e58
    },
    'INPUTS': {
        'keys': {
            'w': ![],
            'a': ![],
            's': ![],
            'd': ![],
            'shift': ![],
            'arrowup': ![],
            'arrowleft': ![],
            'arrowdown': ![],
            'arrowright': ![]
        },
        'mouseX': 0x0,
        'mouseY': 0x0,
        'isMouseDown': ![]
    },
    'EDITOR': {
        'enabled': ![],
        'selectedTileGid': 0x1,
        'selectedLayer': 'background'
    },
    'SYSTEM': {
        'viewScale': 0x1,
        'assetsLoaded': 0x0,
        'isReady': ![],
        'lastTime': performance['now']()
    },
    'GAME_STATE': 'LOBBY',
    'LAST_STATE': 'LOBBY',
    'CURRENT_TARGET': null,
    'ENTITIES': [],
    'SHADOW': {
        'polygon': null,
        'frame': 0x0,
        'RADIUS': 0x320
    }
};
const _0x1e4c06 = {
    'x': 0x0,
    'y': 0x0,
    'width': 0x2d,
    'height': 0x2d,
    'vx': 0x0,
    'vy': 0x0,
    'angle': 0x0,
    'scale': 0x1,
    'bopTimer': 0x0,
    'chats': [],
    'isDead': ![],
    'hasArrow': ![]
};
const _0x1e7d20 = new Image();
const _0x1a4a81 = new Image();
const _0x9db204 = new Image();
const _0x2296e2 = new Image();
_0x2296e2['src'] = 'assets/mayor\x20cosmetic.png';
const _0x59443e = [
    'body00.png',
    'body01.png',
    'body02.png',
    'body03.png',
    'body04.png',
    'body05.png',
    'body06.png',
    'body07.png',
    'body08.png',
    'body09.png',
    'body10.png'
];
const _0x1ee3d2 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x3ced8c = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x3ced8c === 'body1.png' || _0x3ced8c === 'body1')
    _0x3ced8c = 'body01.png';
if (!_0x3ced8c['endsWith']('.png'))
    _0x3ced8c += '.png';
let _0x362649 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x362649['endsWith']('.png'))
    _0x362649 += '.png';
let _0x393189 = !![];
let _0x2625f6 = null;
let _0x2b2175 = null;
let _0x5be263 = 0x3c;
let _0x5b152e = 0x2d;
const _0x45c8a4 = {};
const _0x28f1b6 = new Image();
_0x28f1b6['src'] = 'assets/yanito932.png';
_0x45c8a4['assets/yanito932.png'] = _0x28f1b6;
function _0xd6cbe1(_0x1f9962) {
    if (!_0x45c8a4[_0x1f9962] || !_0x45c8a4[_0x1f9962]['complete'] && _0x45c8a4[_0x1f9962]['naturalWidth'] === 0x0 && _0x45c8a4[_0x1f9962]['naturalHeight'] === 0x0) {
        const _0x345ed4 = new Image();
        _0x345ed4['src'] = _0x1f9962;
        _0x45c8a4[_0x1f9962] = _0x345ed4;
    }
    return _0x45c8a4[_0x1f9962];
}
function _0x5342f8(_0x101faf, _0x558e5a, _0x4f7924, _0x42c61d, _0x7f6120) {
    try {
        const _0x5cf293 = 'assets/' + (_0x558e5a || 'body01.png');
        const _0x57510f = _0xd6cbe1(_0x5cf293);
        if (_0x57510f['complete'] && _0x57510f['naturalWidth'] > 0x0) {
            _0x101faf['drawImage'](_0x57510f, -_0x42c61d / 0x2, -_0x7f6120 / 0x2, _0x42c61d, _0x7f6120);
        }
        if (_0x4f7924 === null || _0x4f7924 === undefined)
            return;
        const _0x2b9448 = 'assets/' + _0x4f7924;
        const _0x58405d = _0xd6cbe1(_0x2b9448);
        if (_0x58405d['complete'] && _0x58405d['naturalWidth'] > 0x0) {
            _0x101faf['drawImage'](_0x58405d, -_0x42c61d / 0x2, -_0x7f6120 / 0x2, _0x42c61d, _0x7f6120);
        }
    } catch (_0x8488fa) {
    }
}
function _0xeec9a0() {
    const _0x4f8fd5 = document['getElementById']('body-skin-grid');
    const _0xe6844c = document['getElementById']('eyes-skin-grid');
    if (!_0x4f8fd5 || !_0xe6844c)
        return;
    _0x4f8fd5['innerHTML'] = '';
    _0x59443e['forEach'](_0x1e76ea => {
        const _0x3e3845 = document['createElement']('button');
        _0x3e3845['className'] = 'skin-btn' + (_0x1e76ea === _0x3ced8c ? '\x20selected' : '');
        const _0x2c26ec = document['createElement']('img');
        _0x2c26ec['src'] = 'assets/' + _0x1e76ea;
        _0x3e3845['appendChild'](_0x2c26ec);
        _0x3e3845['onclick'] = () => {
            _0x3ced8c = _0x1e76ea;
            localStorage['setItem']('selectedBody', _0x1e76ea);
            _0x4f8fd5['querySelectorAll']('.skin-btn')['forEach'](_0x1fc022 => _0x1fc022['classList']['remove']('selected'));
            _0x3e3845['classList']['add']('selected');
        };
        _0x4f8fd5['appendChild'](_0x3e3845);
    });
    _0xe6844c['innerHTML'] = '';
    _0x1ee3d2['forEach'](_0x21952b => {
        const _0x5c3cc3 = document['createElement']('button');
        _0x5c3cc3['className'] = 'skin-btn' + (_0x21952b === _0x362649 ? '\x20selected' : '');
        const _0x456579 = document['createElement']('img');
        _0x456579['src'] = 'assets/' + _0x21952b;
        _0x5c3cc3['appendChild'](_0x456579);
        _0x5c3cc3['onclick'] = () => {
            _0x362649 = _0x21952b;
            localStorage['setItem']('selectedEyes', _0x21952b);
            _0xe6844c['querySelectorAll']('.skin-btn')['forEach'](_0x97cead => _0x97cead['classList']['remove']('selected'));
            _0x5c3cc3['classList']['add']('selected');
        };
        _0xe6844c['appendChild'](_0x5c3cc3);
    });
}
function _0x12ebbd(_0x1c2f16) {
    if (!_0x4cccfb['MAP']['columns'] || !_0x4cccfb['CAMERA']['width'])
        return;
    const _0x375001 = Math['max'](0x0, _0x4cccfb['MAP']['columns'] * _0x4cccfb['MAP']['tileSize'] - _0x4cccfb['CAMERA']['width']);
    const _0x27df8a = Math['max'](0x0, _0x4cccfb['MAP']['rows'] * _0x4cccfb['MAP']['tileSize'] - _0x4cccfb['CAMERA']['height']);
    if (_0x2625f6 === null) {
        _0x2625f6 = _0x375001 / 0x2;
        _0x2b2175 = _0x27df8a / 0x2;
    }
    _0x2625f6 += _0x5be263 * _0x1c2f16;
    _0x2b2175 += _0x5b152e * _0x1c2f16;
    if (_0x2625f6 <= 0x0) {
        _0x2625f6 = 0x0;
        _0x5be263 = Math['abs'](_0x5be263);
    } else if (_0x2625f6 >= _0x375001) {
        _0x2625f6 = _0x375001;
        _0x5be263 = -Math['abs'](_0x5be263);
    }
    if (_0x2b2175 <= 0x0) {
        _0x2b2175 = 0x0;
        _0x5b152e = Math['abs'](_0x5b152e);
    } else if (_0x2b2175 >= _0x27df8a) {
        _0x2b2175 = _0x27df8a;
        _0x5b152e = -Math['abs'](_0x5b152e);
    }
    _0x4cccfb['CAMERA']['x'] = _0x2625f6;
    _0x4cccfb['CAMERA']['y'] = _0x2b2175;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x33fdc7 = document['getElementById']('play-btn');
    const _0x20c1e6 = document['getElementById']('username-input');
    const _0x3097db = localStorage['getItem']('playerName');
    if (_0x3097db && _0x20c1e6) {
        _0x20c1e6['value'] = _0x3097db;
    }
    const _0x517aa7 = () => {
        _0x89f275['play']('wait');
        document['removeEventListener']('click', _0x517aa7);
        document['removeEventListener']('keydown', _0x517aa7);
        document['removeEventListener']('touchstart', _0x517aa7);
    };
    document['addEventListener']('click', _0x517aa7, { 'once': !![] });
    document['addEventListener']('keydown', _0x517aa7, { 'once': !![] });
    document['addEventListener']('touchstart', _0x517aa7, { 'once': !![] });
    if (_0x33fdc7) {
        _0x33fdc7['addEventListener']('click', () => {
            const _0x1a4179 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x2500ac = window['_FB'] && window['_FB']['_userData'];
            let _0x15be9e = !![];
            if (_0x1a4179 && _0x2500ac && _0x2500ac['username']) {
                _0xf15527 = _0x2500ac['username'];
                _0x15be9e = ![];
            } else {
                const _0x2f345e = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0xf15527 = 'user' + _0x2f345e;
                _0x15be9e = !![];
            }
            const _0x27a64f = _0x15be9e ? 'body01.png' : _0x3ced8c;
            const _0x4b1fb2 = _0x15be9e ? 'eyes4.png' : _0x362649;
            const _0x48d269 = !_0x15be9e && _0x2500ac && _0x2500ac['photoURL'] ? _0x2500ac['photoURL'] : '';
            const _0x4b0972 = !_0x15be9e && _0x1a4179 ? _0x1a4179['uid'] : '';
            localStorage['setItem']('playerName', _0xf15527);
            _0x393189 = ![];
            _0x4cccfb['CAMERA']['x'] = null;
            _0x4cccfb['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x6d79f1 = document['getElementById']('chat-log-wrap');
            if (_0x6d79f1)
                _0x6d79f1['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0xb0bc19 = document['getElementById']('controls-hint');
            if (_0xb0bc19 && !_0x4d708e)
                _0xb0bc19['style']['display'] = 'block';
            _0x36d60f();
            if (_0x4d708e) {
                const _0x32fe5e = document['getElementById']('leaderboard-list');
                const _0x4bdaf6 = document['getElementById']('leaderboard-toggle');
                if (_0x32fe5e) {
                    _0x32fe5e['style']['display'] = 'none';
                    if (_0x4bdaf6)
                        _0x4bdaf6['style']['transform'] = 'rotate(180deg)';
                }
                const _0x448476 = document['getElementById']('role-list-items');
                const _0x1b7092 = document['getElementById']('role-list-toggle');
                if (_0x448476) {
                    _0x448476['style']['display'] = 'none';
                    if (_0x1b7092)
                        _0x1b7092['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x1261e7 = !_0x15be9e && _0x2500ac ? {
                'townWins': _0x2500ac['townWins'] || 0x0,
                'mafiaWins': _0x2500ac['mafiaWins'] || 0x0,
                'deaths': _0x2500ac['deaths'] || 0x0,
                'townLosses': _0x2500ac['townLosses'] || 0x0,
                'mafiaLosses': _0x2500ac['mafiaLosses'] || 0x0
            } : null;
            const _0x234ae2 = JSON['stringify']({
                'type': 'join',
                'name': _0xf15527,
                'token': _0x220ceb,
                'body': _0x27a64f,
                'eyes': _0x4b1fb2,
                'isGuest': _0x15be9e,
                'uid': _0x4b0972,
                'photoURL': _0x48d269,
                'accountStats': _0x1261e7
            });
            if (_0x1932ea && _0x1932ea['readyState'] === WebSocket['OPEN']) {
                _0x1932ea['send'](_0x234ae2);
            } else if (!_0x1932ea || _0x1932ea['readyState'] === WebSocket['CLOSED'] || _0x1932ea['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x234ae2;
                _0x5a4a17();
            }
        });
    }
    _0xeec9a0();
    _0x5a4a17();
    _0x2ee812();
    _0x2c0ca9();
    _0x40e1a5();
    _0x4bef4b();
});
const _0x12df96 = [
    {
        'name': 'Mayor',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Mayor</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Support</span>\x20role\x20whose\x20purpose\x20is\x20to\x20control\x20discussions\x20and\x20voting\x20while\x20also\x20letting\x20you\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>hard\x20clear</span>\x20yourself.',
            'At\x20any\x20point\x20during\x20the\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>day</span>,\x20you\x20are\x20able\x20to\x20publicly\x20<span\x20style=\x22color:#cc88ff;font-weight:bold;\x22>reveal</span>\x20yourself\x20as\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Mayor</span>.\x20Upon\x20revealing,\x20your\x20vote\x20will\x20count\x20as\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>two\x20votes</span>\x20for\x20the\x20rest\x20of\x20the\x20game,\x20and\x20you\x20will\x20also\x20get\x20a\x20unique\x20<span\x20style=\x22color:#cc88ff;font-weight:bold;\x22>top\x20hat\x20and\x20monocle</span>.'
        ]
    },
    {
        'name': 'Escort',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Escort</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Support</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblock</span>\x20suspicious\x20individuals,\x20giving\x20players\x20the\x20ability\x20to\x20restrict\x20strong\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20roles\x20and\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20trolls.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>\x20you\x20may\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblock</span>\x20one\x20player.\x20Roleblocked\x20players\x20will\x20still\x20be\x20able\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>visit\x20and\x20kill</span>\x20if\x20they\x27re\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>,\x20as\x20roleblocking\x20specifically\x20prevents\x20their\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>role\x20ability</span>,\x20like\x20transforming\x20as\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>,\x20investigating\x20as\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Investigator</span>,\x20shooting\x20as\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20etc.'
        ]
    },
    {
        'name': 'Tracker',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Tracker</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Investigative</span>\x20role\x20who\x20is\x20able\x20to\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>track</span>\x20players\x20during\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>.',
            'You\x20get\x20to\x20pick\x20one\x20player\x20per\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>.\x20You\x20will\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>track</span>\x20them\x20and\x20find\x20out\x20who\x20they\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>visit</span>\x20(aka\x20who\x20they\x20go\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>kill</span>\x20if\x20they\x27re\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>)\x20OR\x20who\x20they\x20use\x20their\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>ability</span>\x20on.'
        ]
    },
    {
        'name': 'Celebrity',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Celebrity</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Support</span>\x20role\x20whose\x20purpose\x20is\x20to\x20give\x20the\x20rest\x20of\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20a\x20hint\x20upon\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>death</span>.',
            'When\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Celebrity</span>\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>dies</span>,\x20a\x20random\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>letter</span>\x20of\x20their\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>killer</span>\x20will\x20be\x20revealed.\x20Note\x20that\x20the\x20killer\x20doesn\x27t\x20have\x20to\x20be\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>!',
            'This\x20will\x20fail\x20if\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Celebrity</span>\x20is\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblocked</span>.'
        ]
    },
    {
        'name': 'Archer',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Archer</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Protective</span>\x20member\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>protect</span>\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20and\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>injure</span>\x20any\x20evil\x20visitors.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20choose\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>watch\x20over</span>\x20a\x20player.\x20If\x20the\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20visits\x20them,\x20they\x20will\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>fail\x20to\x20visit</span>\x20and\x20be\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>injured</span>.\x20If\x20an\x20already\x20injured\x20player\x20is\x20injured\x20again,\x20they\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>die</span>.'
        ]
    },
    {
        'name': 'Vigilante',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Killing</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>shoot</span>\x20highly\x20suspicious\x20players.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20choose\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>shoot</span>\x20a\x20player.\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>THIS\x20IS\x20OPTIONAL!</span>\x20At\x20the\x20end\x20of\x20the\x20night,\x20the\x20person\x20you\x20picked\x20will\x20be\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>killed</span>.',
            'If\x20you\x20kill\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20member</span>,\x20you\x20will\x20gain\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>guilt</span>\x20and\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>die</span>\x20the\x20next\x20night.\x20Guilt\x20can\x20be\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>cured\x20by\x20Doctor</span>\x20at\x20any\x20given\x20time\x20however.',
            'It\x20is\x20recommended\x20that\x20you\x20only\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>shoot</span>\x20if\x20you\x20are\x20confident,\x20as\x20killing\x20randomly\x20is\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>very\x20risky</span>\x20and\x20can\x20ruin\x20the\x20game.'
        ]
    },
    {
        'name': 'Doctor',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Doctor</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Protective</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>protect</span>\x20important\x20town\x20members\x20from\x20being\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>attacked</span>.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>protect</span>\x20a\x20player.\x20This\x20will\x20prevent\x20them\x20from\x20being\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>visited\x20by\x20the\x20Mafia</span>.',
            'They\x20can\x20also\x20protect\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20who\x20is\x20currently\x20feeling\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>guilt</span>\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>get\x20rid\x20of\x20their\x20guilt</span>\x20and\x20prevent\x20them\x20from\x20dying\x20from\x20it.'
        ]
    },
    {
        'name': 'Investigator',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Investigator</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Investigative</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>gather\x20information</span>\x20about\x20players\x27\x20possible\x20roles.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>investigate</span>\x20a\x20player.\x20You\x20will\x20get\x20a\x20list\x20of\x20half\x20of\x20the\x20roles\x20in\x20the\x20game\x20at\x20the\x20end\x20of\x20the\x20night,\x20one\x20of\x20which\x20being\x20their\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>real\x20role</span>.',
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Investigator</span>\x20is\x20the\x20only\x20role\x20that\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>can\x27t\x20be\x20fooled</span>\x20by\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>,\x20as\x20any\x20other\x20future\x20roles\x20with\x20role\x20learning\x20capabilities\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>WILL\x20be\x20fooled</span>\x20by\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>.'
        ]
    },
    {
        'name': 'Skinwalker',
        'faction': 'Mafia',
        'color': '#ff5555',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>\x20is\x20a\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia\x20Deception</span>\x20role\x20whose\x20purpose\x20is\x20to\x20offer\x20high\x20versatility\x20to\x20the\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20while\x20also\x20suppressing\x20strong\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20members.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20pick\x20an\x20alive\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20to\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>transform</span>\x20into,\x20and\x20a\x20person\x20to\x20use\x20it\x27s\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>ability</span>\x20on.\x20You\x20are\x20unable\x20to\x20use\x20a\x20role\x27s\x20ability\x20on\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>yourself</span>,\x20and\x20also\x20unable\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>shoot</span>\x20players\x20as\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>.',
            'Additionally,\x20when\x20you\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>transform</span>\x20into\x20a\x20role,\x20any\x20player\x20with\x20that\x20role\x20will\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>fail</span>\x20to\x20use\x20their\x20ability,\x20letting\x20you\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>prevent</span>\x20strong\x20roles\x20from\x20working\x20but\x20also\x20letting\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20figure\x20out\x20what\x20role\x20you\x20transformed\x20into.'
        ]
    },
    {
        'name': 'Blackmailer',
        'faction': 'Mafia',
        'color': '#ff5555',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Blackmailer</span>\x20is\x20a\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia\x20Support</span>\x20role\x20whose\x20purpose\x20is\x20to\x20silence\x20the\x20smartest\x20players\x20of\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>\x20ability\x20phase,\x20alongside\x20killing\x20you\x20will\x20be\x20able\x20to\x20pick\x20a\x20target\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Blackmail</span>.\x20This\x20ability\x20will\x20succeed\x20as\x20long\x20as\x20you\x20aren\x27t\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblocked</span>,\x20and\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>CANNOT\x20be\x20protected\x20by\x20Doctor</span>.',
            '<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Blackmailed</span>\x20players\x20will\x20be\x20unable\x20to\x20talk\x20for\x20a\x20whole\x20day.\x20They\x20will\x20receive\x20graphical\x20red\x20tape\x20over\x20their\x20mouth\x20and\x20their\x20name\x20will\x20turn\x20red\x20in\x20chat.\x20The\x20Blackmailer\x20is\x20allowed\x20to\x20blackmail\x20themselves\x20to\x20avoid\x20Town\x20clearing\x20players\x20due\x20to\x20being\x20blackmailed.',
            'You\x20will\x20fail\x20to\x20blackmail\x20a\x20player\x20if\x20they\x20are\x20guarded\x20by\x20an\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Archer</span>,\x20and\x20you\x20will\x20be\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>injured</span>.\x20If\x20you\x20blackmail\x20and\x20kill\x20a\x20person\x20guarded\x20by\x20the\x20same\x20Archer,\x20you\x20will\x20only\x20be\x20injured\x20once!'
        ]
    }
];
let _0x4e33c9 = 'Town';
let _0x47baca = 0x0;
function _0xbf3499() {
    const _0x48d8b6 = document['getElementById']('role-index-main-tabs');
    const _0x593e04 = document['getElementById']('role-index-tabs');
    const _0xe5b4f5 = document['getElementById']('role-index-body');
    if (!_0x593e04 || !_0xe5b4f5)
        return;
    if (_0x48d8b6) {
        _0x48d8b6['innerHTML'] = '';
        const _0x40aaf2 = document['createElement']('button');
        _0x40aaf2['className'] = 'role-index-main-tab-btn\x20main-town' + (_0x4e33c9 === 'Town' ? '\x20active' : '');
        _0x40aaf2['textContent'] = 'TOWN';
        _0x40aaf2['addEventListener']('click', () => {
            _0x4e33c9 = 'Town';
            _0x47baca = 0x0;
            _0xbf3499();
        });
        _0x48d8b6['appendChild'](_0x40aaf2);
        const _0x31cadb = document['createElement']('button');
        _0x31cadb['className'] = 'role-index-main-tab-btn\x20main-mafia' + (_0x4e33c9 === 'Mafia' ? '\x20active' : '');
        _0x31cadb['textContent'] = 'MAFIA';
        _0x31cadb['addEventListener']('click', () => {
            _0x4e33c9 = 'Mafia';
            _0x47baca = 0x0;
            _0xbf3499();
        });
        _0x48d8b6['appendChild'](_0x31cadb);
    }
    const _0x1c348a = _0x12df96['filter'](_0x2edc52 => _0x2edc52['faction'] === _0x4e33c9);
    _0x593e04['innerHTML'] = '';
    _0x1c348a['forEach']((_0x5c6c12, _0xfe9240) => {
        const _0x133dd7 = document['createElement']('button');
        _0x133dd7['className'] = 'role-index-tab-btn' + (_0x5c6c12['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0xfe9240 === _0x47baca ? '\x20active' : '');
        _0x133dd7['textContent'] = _0x5c6c12['name'];
        _0x133dd7['addEventListener']('click', () => {
            _0x47baca = _0xfe9240;
            _0xbf3499();
        });
        _0x593e04['appendChild'](_0x133dd7);
    });
    const _0x47a45c = _0x1c348a[_0x47baca] || _0x1c348a[0x0];
    _0xe5b4f5['innerHTML'] = '';
    if (!_0x47a45c)
        return;
    const _0x5cbda3 = document['createElement']('div');
    _0x5cbda3['className'] = 'role-index-title-row';
    const _0x16557f = document['createElement']('span');
    _0x16557f['className'] = 'role-index-name\x20' + (_0x47a45c['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0x16557f['textContent'] = _0x47a45c['name'];
    _0x5cbda3['appendChild'](_0x16557f);
    const _0x41ee3c = document['createElement']('span');
    _0x41ee3c['className'] = 'role-index-faction-badge\x20' + (_0x47a45c['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x41ee3c['textContent'] = _0x47a45c['faction'];
    _0x5cbda3['appendChild'](_0x41ee3c);
    _0xe5b4f5['appendChild'](_0x5cbda3);
    _0x47a45c['paragraphs']['forEach'](_0x54d734 => {
        const _0x362548 = document['createElement']('p');
        _0x362548['className'] = 'role-index-desc-paragraph';
        _0x362548['innerHTML'] = _0x54d734;
        _0xe5b4f5['appendChild'](_0x362548);
    });
}
function _0x4bef4b() {
    const _0x18cb52 = document['getElementById']('role-index-btn');
    const _0x587824 = document['getElementById']('role-index-modal');
    const _0x4af479 = document['getElementById']('close-role-index-btn');
    const _0x2b81d5 = document['getElementById']('mob-top-index');
    if (_0x18cb52 && _0x587824) {
        _0x18cb52['addEventListener']('click', _0x42d109 => {
            _0x42d109['stopPropagation']();
            if (_0x587824['style']['display'] === 'none' || !_0x587824['style']['display']) {
                _0xbf3499();
                _0x587824['style']['display'] = 'flex';
            } else {
                _0x587824['style']['display'] = 'none';
            }
        });
    }
    if (_0x4af479 && _0x587824) {
        _0x4af479['addEventListener']('click', _0x97f72f => {
            _0x97f72f['stopPropagation']();
            _0x587824['style']['display'] = 'none';
        });
    }
    if (_0x2b81d5 && _0x587824) {
        _0x2b81d5['addEventListener']('click', _0x5a8bb5 => {
            _0x5a8bb5['stopPropagation']();
            if (_0x587824['style']['display'] === 'none' || !_0x587824['style']['display']) {
                _0xbf3499();
                _0x587824['style']['display'] = 'flex';
            } else {
                _0x587824['style']['display'] = 'none';
            }
        });
    }
}
function _0x2c0ca9() {
    const _0x508b54 = document['getElementById']('settings-btn');
    const _0x4250a1 = document['getElementById']('settings-panel');
    const _0x1542da = document['getElementById']('close-settings-btn');
    const _0x6d293d = document['getElementById']('setting-mouse-relative');
    if (_0x6d293d) {
        _0x6d293d['checked'] = _0x130283;
        _0x6d293d['addEventListener']('change', () => {
            _0x130283 = _0x6d293d['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x130283 ? 'true' : 'false');
        });
    }
    const _0x53ec36 = document['getElementById']('setting-music-volume');
    const _0x2444fd = document['getElementById']('setting-music-volume-display');
    function _0x2e893c(_0x2794f5) {
        const _0x115816 = (_0x2794f5['value'] - _0x2794f5['min']) / (_0x2794f5['max'] - _0x2794f5['min']) * 0x64;
        _0x2794f5['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x115816 + '%,\x20#444\x20' + _0x115816 + '%)';
    }
    if (_0x53ec36) {
        const _0x30cf53 = _0x89f275['getVolume']();
        const _0x2d1a4d = Math['round'](_0x30cf53 * 0x64);
        _0x53ec36['value'] = _0x2d1a4d;
        if (_0x2444fd)
            _0x2444fd['textContent'] = _0x2d1a4d + '%';
        _0x2e893c(_0x53ec36);
        _0x53ec36['addEventListener']('input', () => {
            const _0x148a73 = parseInt(_0x53ec36['value'], 0xa);
            if (_0x2444fd)
                _0x2444fd['textContent'] = _0x148a73 + '%';
            _0x2e893c(_0x53ec36);
            _0x89f275['setVolume'](_0x148a73 / 0x64);
            _0x89f275['setMuted'](_0x148a73 === 0x0);
        });
    }
    if (_0x508b54 && _0x4250a1) {
        _0x508b54['addEventListener']('click', _0x482d7a => {
            _0x482d7a['stopPropagation']();
            _0x4250a1['style']['display'] = _0x4250a1['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x1542da && _0x4250a1) {
        _0x1542da['addEventListener']('click', () => {
            _0x4250a1['style']['display'] = 'none';
        });
    }
    const _0x35ef8a = document['getElementById']('mayor-confirm-yes');
    const _0x3dcc83 = document['getElementById']('mayor-confirm-no');
    const _0x2ac323 = document['getElementById']('mayor-confirm-dialog');
    if (_0x35ef8a && _0x2ac323) {
        _0x35ef8a['addEventListener']('click', () => {
            if (_0x1932ea && _0x1932ea['readyState'] === WebSocket['OPEN']) {
                _0x1932ea['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x2ac323['style']['display'] = 'none';
        });
    }
    if (_0x3dcc83 && _0x2ac323) {
        _0x3dcc83['addEventListener']('click', () => {
            _0x2ac323['style']['display'] = 'none';
        });
    }
    const _0x148d4e = document['getElementById']('close-ability-btn');
    if (_0x148d4e) {
        _0x148d4e['addEventListener']('click', () => {
            const _0x1afc2e = document['getElementById']('ability-ui');
            if (_0x1afc2e)
                _0x1afc2e['style']['display'] = 'none';
        });
    }
}
let _0x305fb6 = '';
function _0x5276e2(_0x4ff897) {
    const _0x3dd5f8 = document['getElementById']('vote-tally-panel');
    const _0x352951 = document['getElementById']('vote-tally-list');
    if (!_0x3dd5f8 || !_0x352951)
        return;
    if (_0x4ff897['state'] !== 'DAY_VOTE') {
        _0x3dd5f8['style']['display'] = 'none';
        _0x305fb6 = '';
        return;
    }
    _0x3dd5f8['style']['display'] = 'block';
    const _0x119067 = {};
    for (const _0x1e7536 in _0x1b7a80) {
        if (!_0x1b7a80[_0x1e7536]['isDead'])
            _0x119067[_0x1e7536] = 0x0;
    }
    if (_0x4590c0 && !_0x1e4c06['isDead'])
        _0x119067[_0x4590c0] = 0x0;
    const _0x37127b = _0x4ff897['votes'] || {};
    for (const _0x306f39 in _0x37127b) {
        const _0x246b48 = _0x37127b[_0x306f39];
        const _0x5d29d6 = _0x4ff897['mayorRevealed'] && _0x4ff897['mayorRevealed'][_0x306f39] ? 0x2 : 0x1;
        _0x119067[_0x246b48] = (_0x119067[_0x246b48] || 0x0) + _0x5d29d6;
    }
    let _0x20c76 = 0x0;
    const _0x1d052f = _0x4ff897['skips'] || {};
    for (const _0x455d46 in _0x1d052f) {
        _0x20c76 += Number(_0x1d052f[_0x455d46]) || 0x1;
    }
    const _0x517faf = JSON['stringify'](_0x119067) + '_' + _0x20c76 + '_' + _0x1e4c06['isDead'];
    if (_0x517faf === _0x305fb6)
        return;
    _0x305fb6 = _0x517faf;
    _0x352951['innerHTML'] = '';
    for (const _0x148770 in _0x119067) {
        const _0x2c8160 = parseInt(_0x148770);
        const _0x4f791d = _0x2c8160 === _0x4590c0 ? _0xf15527 : _0x1b7a80[_0x148770] ? _0x1b7a80[_0x148770]['name'] : 'Player\x20' + _0x148770;
        const _0xd38650 = document['createElement']('div');
        _0xd38650['className'] = 'vote-tally-entry';
        const _0x3e1268 = document['createElement']('span');
        _0x3e1268['textContent'] = _0x4f791d;
        const _0x5c201d = document['createElement']('span');
        _0x5c201d['className'] = 'vote-count';
        _0x5c201d['textContent'] = _0x119067[_0x148770] + '\x20vote' + (_0x119067[_0x148770] === 0x1 ? '' : 's');
        _0xd38650['appendChild'](_0x3e1268);
        _0xd38650['appendChild'](_0x5c201d);
        if (_0x2c8160 !== _0x4590c0 && !_0x1e4c06['isDead']) {
            _0xd38650['style']['cursor'] = 'pointer';
            _0xd38650['title'] = 'Vote\x20for\x20' + _0x4f791d;
            _0xd38650['addEventListener']('click', _0x214302 => {
                _0x214302['stopPropagation']();
                if (_0x1932ea && _0x1932ea['readyState'] === WebSocket['OPEN']) {
                    _0x1932ea['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x4f791d
                    }));
                }
            });
        }
        _0x352951['appendChild'](_0xd38650);
    }
    const _0x3ce519 = document['createElement']('div');
    _0x3ce519['className'] = 'vote-tally-skip';
    _0x3ce519['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x20c76 + '</span>';
    if (!_0x1e4c06['isDead']) {
        _0x3ce519['style']['cursor'] = 'pointer';
        _0x3ce519['title'] = 'Click\x20to\x20skip\x20vote';
        _0x3ce519['addEventListener']('click', _0x2fd264 => {
            _0x2fd264['stopPropagation']();
            if (_0x1932ea && _0x1932ea['readyState'] === WebSocket['OPEN']) {
                _0x1932ea['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x352951['appendChild'](_0x3ce519);
}
let _0x2fdbbb = null;
let _0x154c52 = null;
let _0x3927ef = null;
let _0x446126 = null;
let _0x4917ef = null;
function _0x2da18b() {
    if (_0x1932ea && _0x1932ea['readyState'] === WebSocket['OPEN']) {
        _0x1932ea['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x2fdbbb,
            'abilityTarget': _0x154c52,
            'killTarget': _0x3927ef
        }));
    }
}
function _0x3a078e() {
    if (_0x1932ea && _0x1932ea['readyState'] === WebSocket['OPEN']) {
        _0x1932ea['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'blackmailTarget': _0x446126,
            'killTarget': _0x4917ef
        }));
    }
}
function _0x263683() {
    const _0x3f9a12 = document['getElementById']('ability-ui-body');
    if (!_0x3f9a12)
        return;
    _0x3f9a12['innerHTML'] = '';
    if (_0x265be6 === 'Celebrity' || _0x265be6 === 'Mayor') {
        const _0x3911e1 = document['createElement']('div');
        _0x3911e1['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x3911e1['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x3f9a12['appendChild'](_0x3911e1);
        return;
    }
    if (_0x265be6 === 'Blackmailer') {
        const _0x134340 = document['createElement']('div');
        _0x134340['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x134340['innerText'] = 'Blackmail\x20Target\x20(Silences\x20for\x20full\x20day):';
        _0x3f9a12['appendChild'](_0x134340);
        const _0x4ddd89 = document['createElement']('div');
        _0x4ddd89['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x5c1bcd = document['createElement']('button');
        _0x5c1bcd['className'] = 'layer-btn';
        _0x5c1bcd['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x5c1bcd['innerText'] = 'No\x20one';
        if (_0x446126 === null)
            _0x5c1bcd['classList']['add']('active');
        _0x5c1bcd['onclick'] = () => {
            _0x446126 = null;
            _0x3a078e();
            _0x263683();
        };
        _0x4ddd89['appendChild'](_0x5c1bcd);
        for (const _0x44c464 in _0x1b7a80) {
            const _0x3d34ef = _0x1b7a80[_0x44c464];
            if (_0x3d34ef['isDead'])
                continue;
            const _0x16d1b9 = document['createElement']('button');
            _0x16d1b9['className'] = 'layer-btn';
            _0x16d1b9['innerText'] = _0x3d34ef['name'];
            if (_0x446126 === parseInt(_0x44c464))
                _0x16d1b9['classList']['add']('active');
            _0x16d1b9['onclick'] = () => {
                _0x446126 = parseInt(_0x44c464);
                _0x3a078e();
                _0x263683();
            };
            _0x4ddd89['appendChild'](_0x16d1b9);
        }
        if (!_0x1e4c06['isDead']) {
            const _0x1990a5 = document['createElement']('button');
            _0x1990a5['className'] = 'layer-btn';
            _0x1990a5['style']['cssText'] = 'grid-column:\x20span\x202;';
            _0x1990a5['innerText'] = _0xf15527 + '\x20(Self\x20-\x20Decoy)';
            if (_0x446126 === _0x4590c0)
                _0x1990a5['classList']['add']('active');
            _0x1990a5['onclick'] = () => {
                _0x446126 = _0x4590c0;
                _0x3a078e();
                _0x263683();
            };
            _0x4ddd89['appendChild'](_0x1990a5);
        }
        _0x3f9a12['appendChild'](_0x4ddd89);
        const _0x35fbe1 = document['createElement']('div');
        _0x35fbe1['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x35fbe1['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x3f9a12['appendChild'](_0x35fbe1);
        const _0x578057 = document['createElement']('div');
        _0x578057['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0xbfcc72 = document['createElement']('button');
        _0xbfcc72['className'] = 'layer-btn';
        _0xbfcc72['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0xbfcc72['innerText'] = 'No\x20one';
        if (!_0x4917ef && !_0x4cccfb['CURRENT_TARGET'])
            _0xbfcc72['classList']['add']('active');
        _0xbfcc72['onclick'] = () => {
            _0x4917ef = null;
            _0x4cccfb['CURRENT_TARGET'] = null;
            _0x3a078e();
            _0x263683();
        };
        _0x578057['appendChild'](_0xbfcc72);
        for (const _0x2caaf5 in _0x1b7a80) {
            const _0xd7d035 = _0x1b7a80[_0x2caaf5];
            if (_0xd7d035['isDead'])
                continue;
            const _0x37533d = document['createElement']('button');
            _0x37533d['className'] = 'layer-btn';
            _0x37533d['innerText'] = _0xd7d035['name'];
            if (_0x4917ef === parseInt(_0x2caaf5) || _0x4cccfb['CURRENT_TARGET'] === parseInt(_0x2caaf5))
                _0x37533d['classList']['add']('active');
            _0x37533d['onclick'] = () => {
                _0x4917ef = parseInt(_0x2caaf5);
                _0x4cccfb['CURRENT_TARGET'] = parseInt(_0x2caaf5);
                _0x3a078e();
                _0x263683();
            };
            _0x578057['appendChild'](_0x37533d);
        }
        _0x3f9a12['appendChild'](_0x578057);
        return;
    }
    if (_0x265be6 === 'Skinwalker') {
        const _0x34172b = document['createElement']('div');
        _0x34172b['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x34172b['innerText'] = 'Transform\x20into:';
        _0x3f9a12['appendChild'](_0x34172b);
        const _0x1410ec = document['createElement']('div');
        _0x1410ec['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x53caf1 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x7fed0e = _0x4575b9 => {
            if (_0x4cccfb['ROLES_IN_GAME'] && Array['isArray'](_0x4cccfb['ROLES_IN_GAME'])) {
                return _0x4cccfb['ROLES_IN_GAME']['includes'](_0x4575b9);
            }
            if (_0x4cccfb['ROLE_LIST_RAW'] && _0x4cccfb['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x4cccfb['ROLE_LIST_RAW']['some'](_0x29d983 => _0x29d983['name'] === _0x4575b9 && !_0x29d983['isDead']);
            }
            return ![];
        };
        const _0x814d76 = [
            'None',
            ..._0x53caf1['filter'](_0x7fed0e)
        ];
        _0x814d76['forEach'](_0x2ddea1 => {
            const _0x1fbb52 = document['createElement']('button');
            _0x1fbb52['className'] = 'layer-btn';
            _0x1fbb52['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x1fbb52['innerText'] = _0x2ddea1;
            const _0x651d8b = _0x2ddea1 === 'None' && !_0x2fdbbb || _0x2fdbbb === _0x2ddea1;
            if (_0x651d8b)
                _0x1fbb52['classList']['add']('active');
            const _0x25f46f = _0x2ddea1 !== 'None' && _0x4cccfb['SKINWALKER_LAST_ROLE'] && _0x4cccfb['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x2ddea1['toLowerCase']();
            if (_0x25f46f) {
                _0x1fbb52['style']['opacity'] = '0.45';
                _0x1fbb52['style']['cursor'] = 'not-allowed';
                _0x1fbb52['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x1fbb52['onclick'] = () => {
                    _0x505825('You\x20cannot\x20transform\x20into\x20' + _0x2ddea1 + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x1fbb52['onclick'] = () => {
                    _0x2fdbbb = _0x2ddea1 === 'None' ? null : _0x2ddea1;
                    _0x2da18b();
                    _0x263683();
                };
            }
            _0x1410ec['appendChild'](_0x1fbb52);
        });
        _0x3f9a12['appendChild'](_0x1410ec);
        if (_0x7fed0e('Vigilante')) {
            const _0x22ffca = document['createElement']('div');
            _0x22ffca['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x22ffca['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x3f9a12['appendChild'](_0x22ffca);
        }
        if (_0x2fdbbb === 'Vigilante') {
            const _0x441a25 = document['createElement']('div');
            _0x441a25['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x441a25['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x3f9a12['appendChild'](_0x441a25);
        } else if (_0x2fdbbb && _0x2fdbbb !== 'Celebrity') {
            const _0x248f51 = document['createElement']('div');
            _0x248f51['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x248f51['innerText'] = 'Use\x20' + _0x2fdbbb + '\x20ability\x20on:';
            _0x3f9a12['appendChild'](_0x248f51);
            const _0x47438e = document['createElement']('div');
            _0x47438e['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x44aad7 = document['createElement']('button');
            _0x44aad7['className'] = 'layer-btn';
            _0x44aad7['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x44aad7['innerText'] = 'No\x20one';
            if (!_0x154c52)
                _0x44aad7['classList']['add']('active');
            _0x44aad7['onclick'] = () => {
                _0x154c52 = null;
                _0x2da18b();
                _0x263683();
            };
            _0x47438e['appendChild'](_0x44aad7);
            for (const _0x3e6160 in _0x1b7a80) {
                const _0x133ffc = _0x1b7a80[_0x3e6160];
                if (_0x133ffc['isDead'])
                    continue;
                const _0x227fc1 = document['createElement']('button');
                _0x227fc1['className'] = 'layer-btn';
                _0x227fc1['innerText'] = _0x133ffc['name'];
                if (_0x154c52 === parseInt(_0x3e6160))
                    _0x227fc1['classList']['add']('active');
                _0x227fc1['onclick'] = () => {
                    _0x154c52 = parseInt(_0x3e6160);
                    _0x2da18b();
                    _0x263683();
                };
                _0x47438e['appendChild'](_0x227fc1);
            }
            _0x3f9a12['appendChild'](_0x47438e);
        }
        const _0x3e008d = document['createElement']('div');
        _0x3e008d['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x3e008d['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x3f9a12['appendChild'](_0x3e008d);
        const _0x18ce25 = document['createElement']('div');
        _0x18ce25['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x3e0961 = document['createElement']('button');
        _0x3e0961['className'] = 'layer-btn';
        _0x3e0961['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x3e0961['innerText'] = 'No\x20one';
        if (!_0x3927ef && !_0x4cccfb['CURRENT_TARGET'])
            _0x3e0961['classList']['add']('active');
        _0x3e0961['onclick'] = () => {
            _0x3927ef = null;
            _0x4cccfb['CURRENT_TARGET'] = null;
            _0x2da18b();
            _0x263683();
        };
        _0x18ce25['appendChild'](_0x3e0961);
        for (const _0x2fd568 in _0x1b7a80) {
            const _0x2597ba = _0x1b7a80[_0x2fd568];
            if (_0x2597ba['isDead'])
                continue;
            const _0x3b25bb = document['createElement']('button');
            _0x3b25bb['className'] = 'layer-btn';
            _0x3b25bb['innerText'] = _0x2597ba['name'];
            if (_0x3927ef === parseInt(_0x2fd568) || _0x4cccfb['CURRENT_TARGET'] === parseInt(_0x2fd568))
                _0x3b25bb['classList']['add']('active');
            _0x3b25bb['onclick'] = () => {
                _0x3927ef = parseInt(_0x2fd568);
                _0x4cccfb['CURRENT_TARGET'] = parseInt(_0x2fd568);
                _0x2da18b();
                _0x263683();
            };
            _0x18ce25['appendChild'](_0x3b25bb);
        }
        _0x3f9a12['appendChild'](_0x18ce25);
        return;
    }
    let _0x295b70 = '';
    let _0x13026f = ![];
    if (_0x265be6 === 'Doctor') {
        _0x295b70 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x13026f = !![];
    } else if (_0x265be6 === 'Investigator') {
        _0x295b70 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x265be6 === 'Tracker') {
        _0x295b70 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x265be6 === 'Archer') {
        _0x295b70 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x265be6 === 'Escort') {
        _0x295b70 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x265be6 === 'Vigilante') {
        _0x295b70 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x2b7f34 = document['createElement']('div');
    _0x2b7f34['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x2b7f34['innerText'] = _0x295b70;
    _0x3f9a12['appendChild'](_0x2b7f34);
    const _0x6e633d = document['createElement']('div');
    _0x6e633d['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x4e5705 = document['createElement']('button');
    _0x4e5705['className'] = 'layer-btn';
    _0x4e5705['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x4e5705['innerText'] = 'No\x20one';
    if (_0x4cccfb['CURRENT_TARGET'] === null)
        _0x4e5705['classList']['add']('active');
    _0x4e5705['onclick'] = () => {
        _0x4cccfb['CURRENT_TARGET'] = null;
        if (_0x1932ea && _0x1932ea['readyState'] === WebSocket['OPEN']) {
            _0x1932ea['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x263683();
    };
    _0x6e633d['appendChild'](_0x4e5705);
    for (const _0x57ccd1 in _0x1b7a80) {
        const _0x31a4ed = _0x1b7a80[_0x57ccd1];
        if (_0x31a4ed['isDead'])
            continue;
        const _0x56e7eb = document['createElement']('button');
        _0x56e7eb['className'] = 'layer-btn';
        _0x56e7eb['innerText'] = _0x31a4ed['name'];
        if (_0x4cccfb['CURRENT_TARGET'] === parseInt(_0x57ccd1))
            _0x56e7eb['classList']['add']('active');
        _0x56e7eb['onclick'] = () => {
            _0x4cccfb['CURRENT_TARGET'] = parseInt(_0x57ccd1);
            if (_0x1932ea && _0x1932ea['readyState'] === WebSocket['OPEN']) {
                _0x1932ea['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x57ccd1)
                }));
            }
            _0x263683();
        };
        _0x6e633d['appendChild'](_0x56e7eb);
    }
    if (_0x13026f && !_0x1e4c06['isDead']) {
        const _0x1c43e3 = document['createElement']('button');
        _0x1c43e3['className'] = 'layer-btn';
        _0x1c43e3['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x1c43e3['innerText'] = _0xf15527 + '\x20(Self)';
        if (_0x4cccfb['CURRENT_TARGET'] === _0x4590c0)
            _0x1c43e3['classList']['add']('active');
        _0x1c43e3['onclick'] = () => {
            _0x4cccfb['CURRENT_TARGET'] = _0x4590c0;
            if (_0x1932ea && _0x1932ea['readyState'] === WebSocket['OPEN']) {
                _0x1932ea['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x4590c0
                }));
            }
            _0x263683();
        };
        _0x6e633d['appendChild'](_0x1c43e3);
    }
    _0x3f9a12['appendChild'](_0x6e633d);
}
function _0x5a4a17() {
    if (_0x1932ea && (_0x1932ea['readyState'] === WebSocket['OPEN'] || _0x1932ea['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x56f377 = new URLSearchParams();
    if (_0x220ceb)
        _0x56f377['set']('token', _0x220ceb);
    _0x56f377['set']('ngrok-skip-browser-warning', 'true');
    const _0x54f11e = 'wss://opening-tales-fiscal-murphy.trycloudflare.com';
    const _0x182b71 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x54f11e;
    const _0x44061f = _0x182b71 + '/?' + _0x56f377['toString']();
    _0x1932ea = new WebSocket(_0x44061f);
    _0x1932ea['onopen'] = function () {
        if (!_0x393189 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x3cb67b = window['_FB'] && window['_FB']['_currentUser'];
                const _0xbb60b9 = window['_FB'] && window['_FB']['_userData'];
                const _0x565504 = !(_0x3cb67b && _0xbb60b9 && _0xbb60b9['username']);
                const _0x47192e = _0x565504 ? 'body01.png' : _0x3ced8c;
                const _0x35931c = _0x565504 ? 'eyes4.png' : _0x362649;
                const _0x4cd45f = !_0x565504 && _0xbb60b9 && _0xbb60b9['photoURL'] ? _0xbb60b9['photoURL'] : '';
                const _0x191f26 = !_0x565504 && _0x3cb67b ? _0x3cb67b['uid'] : '';
                const _0x385c08 = !_0x565504 && _0xbb60b9 ? {
                    'townWins': _0xbb60b9['townWins'] || 0x0,
                    'mafiaWins': _0xbb60b9['mafiaWins'] || 0x0,
                    'deaths': _0xbb60b9['deaths'] || 0x0,
                    'townLosses': _0xbb60b9['townLosses'] || 0x0,
                    'mafiaLosses': _0xbb60b9['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0xf15527,
                    'token': _0x220ceb,
                    'body': _0x47192e,
                    'eyes': _0x35931c,
                    'isGuest': _0x565504,
                    'uid': _0x191f26,
                    'photoURL': _0x4cd45f,
                    'accountStats': _0x385c08
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x1932ea && _0x1932ea['readyState'] === WebSocket['OPEN']) {
            _0x1932ea['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x1932ea['onclose'] = _0x199738 => {
        if (_0x199738['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x199738['code'] === 0xfa2 || _0x199738['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x3c5983 = document['getElementById']('disconnect-overlay');
        if (!_0x3c5983) {
            _0x3c5983 = document['createElement']('div');
            _0x3c5983['id'] = 'disconnect-overlay';
            _0x3c5983['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x3c5983['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x3c5983);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x1932ea['onmessage'] = _0x97d535 => {
        const _0x20a0f7 = JSON['parse'](_0x97d535['data']);
        if (_0x20a0f7['type'] === 'map_data') {
            _0x4cccfb['MAP']['tileSize'] = _0x20a0f7['map']['tileSize'];
            _0x4cccfb['MAP']['columns'] = _0x20a0f7['map']['columns'];
            _0x4cccfb['MAP']['rows'] = _0x20a0f7['map']['rows'];
            _0x4cccfb['MAP']['layers'] = _0x20a0f7['map']['layers'];
            if (_0x20a0f7['map']['doors']) {
                _0x4cccfb['MAP']['doors'] = _0x20a0f7['map']['doors'];
                const _0x3686f1 = _0x4cccfb['MAP']['layers']['find'](_0x410e2b => _0x410e2b['name'] === 'floor2');
                if (_0x3686f1) {
                    for (const _0x181a2a in _0x4cccfb['MAP']['doors']) {
                        _0x3686f1['data'][parseInt(_0x181a2a)] = 0x2;
                    }
                }
            }
            if (_0x20a0f7['entities'])
                _0x4cccfb['ENTITIES'] = _0x20a0f7['entities'];
            _0x1c4335();
            _0x4cccfb['SYSTEM']['isReady'] = !![];
            _0x1b4632();
            if (!_0x4cccfb['SYSTEM']['_gameLoopRunning']) {
                _0x4cccfb['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x3e8ec5);
            }
            return;
        }
        if (_0x20a0f7['type'] === 'init') {
            _0x4590c0 = _0x20a0f7['id'];
            _0x393189 = ![];
            _0x36d60f();
            if (_0x4d708e) {
                const _0x197301 = document['getElementById']('leaderboard-list');
                const _0x297a63 = document['getElementById']('leaderboard-toggle');
                if (_0x197301) {
                    _0x197301['style']['display'] = 'none';
                    if (_0x297a63)
                        _0x297a63['style']['transform'] = 'rotate(180deg)';
                }
                const _0x4d16e3 = document['getElementById']('role-list-items');
                const _0x5f1c70 = document['getElementById']('role-list-toggle');
                if (_0x4d16e3) {
                    _0x4d16e3['style']['display'] = 'none';
                    if (_0x5f1c70)
                        _0x5f1c70['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x3a1069 = _0x20a0f7['isOwner'] || ![];
            _0xf15527 = _0x20a0f7['name'] || _0xf15527;
            _0x4cccfb['MAP']['tileSize'] = _0x20a0f7['map']['tileSize'];
            _0x4cccfb['MAP']['columns'] = _0x20a0f7['map']['columns'];
            _0x4cccfb['MAP']['rows'] = _0x20a0f7['map']['rows'];
            _0x4cccfb['MAP']['layers'] = _0x20a0f7['map']['layers'];
            if (_0x20a0f7['map']['doors']) {
                _0x4cccfb['MAP']['doors'] = _0x20a0f7['map']['doors'];
                const _0x13910f = _0x4cccfb['MAP']['layers']['find'](_0x4b9ce5 => _0x4b9ce5['name'] === 'floor2');
                if (_0x13910f) {
                    for (const _0x1e7a94 in _0x4cccfb['MAP']['doors']) {
                        _0x13910f['data'][parseInt(_0x1e7a94)] = 0x2;
                    }
                }
            }
            if (_0x20a0f7['entities'])
                _0x4cccfb['ENTITIES'] = _0x20a0f7['entities'];
            if (_0x20a0f7['bloodSplatters'])
                _0x201289 = _0x20a0f7['bloodSplatters'];
            if (_0x20a0f7['bloodDrops'])
                _0x33a5a9 = _0x20a0f7['bloodDrops'];
            if (_0x20a0f7['roleList'] && _0x20a0f7['roleList']['length'] > 0x0) {
                _0x4cccfb['ROLE_LIST_RAW'] = _0x20a0f7['roleList'];
                _0x479455(_0x20a0f7['roleList'], _0x20a0f7['roleListMode']);
            }
            _0x1c4335();
            _0x1e4c06['x'] = _0x4cccfb['MAP']['columns'] * _0x4cccfb['MAP']['tileSize'] / 0x2;
            _0x1e4c06['y'] = _0x4cccfb['MAP']['rows'] * _0x4cccfb['MAP']['tileSize'] / 0x2;
            _0x4cccfb['CAMERA']['x'] = _0x1e4c06['x'] + _0x1e4c06['width'] / 0x2 - _0x4cccfb['CAMERA']['width'] / 0x2;
            _0x4cccfb['CAMERA']['y'] = _0x1e4c06['y'] + _0x1e4c06['height'] / 0x2 - _0x4cccfb['CAMERA']['height'] / 0x2;
            if (_0x3a1069) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0xebecca();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x3e183a = document['getElementById']('role-index-btn-wrap');
            if (_0x3e183a)
                _0x3e183a['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x4cccfb['SYSTEM']['lastTime'] = performance['now']();
            _0x4cccfb['SYSTEM']['isReady'] = !![];
            _0x282cbc();
            if (!_0x4cccfb['SYSTEM']['_gameLoopRunning']) {
                _0x4cccfb['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x3e8ec5);
            }
            return;
        } else if (_0x20a0f7['type'] === 'state') {
            const _0x1fcd48 = {};
            for (const _0x1e4c62 in _0x20a0f7['players']) {
                if (parseInt(_0x1e4c62) === _0x4590c0)
                    continue;
                const _0x1139a2 = _0x20a0f7['players'][_0x1e4c62];
                const _0x5a6d7c = _0x1b7a80[_0x1e4c62];
                if (_0x5a6d7c) {
                    const _0x35080c = _0x1139a2['x'] - _0x5a6d7c['renderX'];
                    const _0x3e0124 = _0x1139a2['y'] - _0x5a6d7c['renderY'];
                    const _0xf7fe50 = _0x35080c * _0x35080c + _0x3e0124 * _0x3e0124 > 0x78 * 0x78;
                    Object['assign'](_0x5a6d7c, _0x1139a2);
                    if (_0xf7fe50) {
                        _0x5a6d7c['renderX'] = _0x1139a2['x'];
                        _0x5a6d7c['renderY'] = _0x1139a2['y'];
                    }
                    _0x1fcd48[_0x1e4c62] = _0x5a6d7c;
                } else {
                    _0x1fcd48[_0x1e4c62] = {
                        ..._0x1139a2,
                        'renderX': _0x1139a2['x'],
                        'renderY': _0x1139a2['y'],
                        'renderAngle': _0x1139a2['angle'] || 0x0
                    };
                }
            }
            _0x1b7a80 = _0x1fcd48;
            _0x57de5e();
            if (_0x20a0f7['players'][_0x4590c0]) {
                const _0x523479 = _0x20a0f7['players'][_0x4590c0];
                _0x1e4c06['chats'] = _0x523479['chats'] || [];
                _0x1e4c06['isDead'] = _0x523479['isDead'];
                _0x1e4c06['hasArrow'] = _0x523479['hasArrow'] || ![];
                if (_0x523479['name'])
                    _0xf15527 = _0x523479['name'];
                _0x282cbc();
                const _0x2c58a9 = Math['hypot'](_0x523479['x'] - _0x1e4c06['x'], _0x523479['y'] - _0x1e4c06['y']);
                if (_0x2c58a9 > 0xfa) {
                    _0x1e4c06['x'] = _0x523479['x'];
                    _0x1e4c06['y'] = _0x523479['y'];
                } else if (_0x2c58a9 > 0x50) {
                    _0x1e4c06['x'] += (_0x523479['x'] - _0x1e4c06['x']) * 0.06;
                    _0x1e4c06['y'] += (_0x523479['y'] - _0x1e4c06['y']) * 0.06;
                }
            }
            if (_0x20a0f7['entities'])
                _0x4cccfb['ENTITIES'] = _0x20a0f7['entities'];
            if (_0x20a0f7['game']) {
                _0x4cccfb['GAME_STATE'] = _0x20a0f7['game']['state'];
                _0x4cccfb['NIGHT_ABILITY_OPEN'] = _0x20a0f7['game']['nightAbilityOpen'];
                if (_0x20a0f7['game']['bloodSplatters'])
                    _0x201289 = _0x20a0f7['game']['bloodSplatters'];
                if (_0x20a0f7['game']['bloodDrops'])
                    _0x33a5a9 = _0x20a0f7['game']['bloodDrops'];
                if (_0x20a0f7['game']['blackmailed']) {
                    _0x366df8 = new Set(_0x20a0f7['game']['blackmailed']);
                } else {
                    _0x366df8['clear']();
                }
                if (_0x20a0f7['game']['mayorRevealed']) {
                    for (const _0x1db8c3 in _0x20a0f7['game']['mayorRevealed']) {
                        _0x18335b['add'](parseInt(_0x1db8c3));
                    }
                }
                if (_0x4cccfb['LAST_STATE'] !== _0x4cccfb['GAME_STATE']) {
                    if (_0x4cccfb['GAME_STATE'] !== 'NIGHT') {
                        _0x4cccfb['CURRENT_TARGET'] = null;
                        _0x2fdbbb = null;
                        _0x154c52 = null;
                        _0x3927ef = null;
                        _0x446126 = null;
                        _0x4917ef = null;
                        const _0x87d40a = document['getElementById']('ability-ui');
                        if (_0x87d40a)
                            _0x87d40a['style']['display'] = 'none';
                    }
                    if (_0x4cccfb['GAME_STATE'] === 'NIGHT') {
                        _0x1e4c06['chats'] = [];
                        for (const _0xdbc99b in _0x1b7a80) {
                            _0x1b7a80[_0xdbc99b]['chats'] = [];
                        }
                    }
                    _0x4cccfb['LAST_STATE'] = _0x4cccfb['GAME_STATE'];
                    _0x3cb9b3();
                    _0x89f275['onStateChange'](_0x4cccfb['GAME_STATE'], _0x20a0f7['game']['nightAbilityOpen']);
                }
                const _0xb8c29a = document['getElementById']('phase-ui');
                if (_0xb8c29a) {
                    if (_0x20a0f7['game']['state'] === 'LOBBY') {
                        _0xb8c29a['style']['display'] = 'none';
                    } else {
                        _0xb8c29a['style']['display'] = 'block';
                    }
                    let _0x45e3d2 = _0x20a0f7['game']['state']['replace']('_', '\x20');
                    if (_0x20a0f7['game']['state'] === 'DAY_DISCUSS') {
                        _0x45e3d2 = 'DAY\x20' + (_0x20a0f7['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x20a0f7['game']['timer'] + 's';
                    } else if (_0x20a0f7['game']['state'] === 'DAY_VOTE') {
                        _0x45e3d2 = 'DAY\x20' + (_0x20a0f7['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x20a0f7['game']['timer'] + 's';
                    } else if (_0x20a0f7['game']['state'] === 'NIGHT') {
                        const _0x156292 = _0x20a0f7['game']['dayCount'] || 0x1;
                        if (_0x20a0f7['game']['nightAbilityOpen']) {
                            _0x45e3d2 = 'NIGHT\x20' + _0x156292 + '\x20ABILITY\x20PHASE';
                            const _0x3eb049 = _0x20a0f7['game']['abilityTimer'] !== undefined ? _0x20a0f7['game']['abilityTimer'] : _0x20a0f7['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x3eb049 + 's';
                        } else {
                            _0x45e3d2 = 'NIGHT\x20' + _0x156292;
                            document['getElementById']('phase-timer')['innerText'] = _0x20a0f7['game']['timer'] + 's';
                        }
                    }
                    if (_0x20a0f7['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x45e3d2;
                    }
                }
                if (_0x20a0f7['game']['state'] === 'NIGHT') {
                    const _0x56bebb = document['getElementById']('ability-timer-label');
                    if (_0x56bebb) {
                        const _0x3824a8 = _0x20a0f7['game']['abilityTimer'] !== undefined ? _0x20a0f7['game']['abilityTimer'] : _0x20a0f7['game']['timer'];
                        _0x56bebb['innerText'] = _0x20a0f7['game']['nightAbilityOpen'] ? _0x3824a8 + 's' : '';
                    }
                    if (_0x20a0f7['game']['nightAbilityOpen'] && !_0x3b281f && !_0x1e4c06['isDead']) {
                        _0x3b281f = !![];
                        _0x263683();
                        const _0x2115be = document['getElementById']('ability-ui');
                        if (_0x2115be)
                            _0x2115be['style']['display'] = 'block';
                    }
                    if (!_0x20a0f7['game']['nightAbilityOpen']) {
                        const _0x4d85dc = document['getElementById']('ability-ui');
                        if (_0x4d85dc && _0x4d85dc['style']['display'] === 'block') {
                            _0x4d85dc['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x3b281f = ![];
                }
                if (_0x20a0f7['game']['rolesInGame']) {
                    _0x4cccfb['ROLES_IN_GAME'] = _0x20a0f7['game']['rolesInGame'];
                }
                if (_0x20a0f7['game']['skinwalkerLastRole'] !== undefined) {
                    _0x4cccfb['SKINWALKER_LAST_ROLE'] = _0x20a0f7['game']['skinwalkerLastRole'];
                }
                if (_0x20a0f7['game']['state'] === 'NIGHT') {
                    const _0x42a7fe = document['getElementById']('will-ui');
                    if (_0x42a7fe && _0x42a7fe['style']['display'] === 'flex') {
                        _0x42a7fe['style']['display'] = 'none';
                        const _0x1c6a38 = document['getElementById']('will-input');
                        if (_0x1c6a38)
                            _0x1c6a38['blur']();
                    }
                }
                _0x5276e2(_0x20a0f7['game']);
                if (_0x20a0f7['game']['roleListMode'] !== undefined) {
                    _0x4cccfb['ROLE_LIST_RAW'] = _0x20a0f7['game']['roleList'] || [];
                    _0x479455(_0x20a0f7['game']['roleList'], _0x20a0f7['game']['roleListMode']);
                }
            }
        } else if (_0x20a0f7['type'] === 'teleport') {
            _0x1e4c06['x'] = _0x20a0f7['x'];
            _0x1e4c06['y'] = _0x20a0f7['y'];
            _0x1e4c06['vx'] = 0x0;
            _0x1e4c06['vy'] = 0x0;
            _0x4cccfb['CAMERA']['x'] = null;
            if (_0x20a0f7['teleportId'] !== undefined)
                _0xacb429 = _0x20a0f7['teleportId'];
        } else if (_0x20a0f7['type'] === 'bulk_teleport') {
            for (const _0x5dbd53 in _0x20a0f7['positions']) {
                const _0xabade5 = _0x20a0f7['positions'][_0x5dbd53];
                if (parseInt(_0x5dbd53) === _0x4590c0) {
                    _0x1e4c06['x'] = _0xabade5['x'];
                    _0x1e4c06['y'] = _0xabade5['y'];
                    _0x1e4c06['vx'] = 0x0;
                    _0x1e4c06['vy'] = 0x0;
                    _0x4cccfb['CAMERA']['x'] = null;
                    continue;
                }
                const _0x14f831 = _0x1b7a80[_0x5dbd53];
                if (_0x14f831) {
                    _0x14f831['x'] = _0xabade5['x'];
                    _0x14f831['y'] = _0xabade5['y'];
                    _0x14f831['renderX'] = _0xabade5['x'];
                    _0x14f831['renderY'] = _0xabade5['y'];
                    _0x14f831['vx'] = 0x0;
                    _0x14f831['vy'] = 0x0;
                }
            }
        } else if (_0x20a0f7['type'] === 'player_left') {
            delete _0x1b7a80[_0x20a0f7['id']];
            _0x18335b['delete'](parseInt(_0x20a0f7['id']));
        } else if (_0x20a0f7['type'] === 'map_update') {
            const _0x161a2d = _0x4cccfb['MAP']['layers']['find'](_0x446eb2 => _0x446eb2['name'] === _0x20a0f7['layer']);
            if (_0x161a2d) {
                _0x161a2d['data'][_0x20a0f7['row'] * _0x4cccfb['MAP']['columns'] + _0x20a0f7['col']] = _0x20a0f7['gid'];
                const _0x175403 = _0x20a0f7['row'] * _0x4cccfb['MAP']['columns'] + _0x20a0f7['col'];
                if (_0x4cccfb['MAP']['doors'] && _0x4cccfb['MAP']['doors'][_0x175403]) {
                    const _0x306426 = _0x4cccfb['MAP']['layers']['find'](_0x5cdb92 => _0x5cdb92['name'] === 'floor2');
                    if (_0x306426)
                        _0x306426['data'][_0x175403] = 0x2;
                }
                const _0x356bd9 = Math['floor'](_0x20a0f7['col'] * _0x4cccfb['MAP']['tileSize'] / _0x4cccfb['MAP']['chunkSize']);
                const _0x3ef8ab = Math['floor'](_0x20a0f7['row'] * _0x4cccfb['MAP']['tileSize'] / _0x4cccfb['MAP']['chunkSize']);
                _0x224453(_0x356bd9, _0x3ef8ab);
                _0x700a96 = null;
                _0x361cd4 = null;
            }
        } else if (_0x20a0f7['type'] === 'role_assign') {
            _0x265be6 = _0x20a0f7['role'];
            _0x1e4c06['isDead'] = _0x265be6 === 'Spectator';
            _0x18335b['clear']();
            _0x4cccfb['CURRENT_TARGET'] = null;
            _0x2fdbbb = null;
            _0x154c52 = null;
            _0x3927ef = null;
            _0x446126 = null;
            _0x4917ef = null;
            _0x3b281f = ![];
            const _0xd09a39 = document['getElementById']('ability-ui');
            if (_0xd09a39)
                _0xd09a39['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x265be6;
            _0x3cb9b3();
            _0x505825(_0x265be6 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x265be6, !![]);
            let _0x159095 = '';
            if (_0x265be6 === 'Investigator')
                _0x159095 = 'Investigate\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x265be6 === 'Tracker')
                _0x159095 = 'Track\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x265be6 === 'Doctor')
                _0x159095 = 'Heal\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x265be6 === 'Archer')
                _0x159095 = 'Guard\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x265be6 === 'Escort')
                _0x159095 = 'Roleblock\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x265be6 === 'Vigilante')
                _0x159095 = 'Shoot\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x265be6 === 'Skinwalker')
                _0x159095 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x265be6 === 'Blackmailer')
                _0x159095 = 'Pick\x20a\x20player\x20to\x20blackmail\x20and\x20a\x20player\x20to\x20kill\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x265be6 === 'Celebrity')
                _0x159095 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x265be6 === 'Mayor')
                _0x159095 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x505825(_0x159095, !![]);
        } else if (_0x20a0f7['type'] === 'mayor_reveal') {
            _0x18335b['add'](parseInt(_0x20a0f7['playerId']));
            _0x282cbc();
            _0x3cb9b3();
        } else if (_0x20a0f7['type'] === 'rolelist_update') {
            _0x4cccfb['ROLE_LIST_RAW'] = _0x20a0f7['list'] || [];
            _0x479455(_0x20a0f7['list'], _0x20a0f7['mode']);
        } else if (_0x20a0f7['type'] === 'sound_event') {
            _0x89f275['onSoundEvent'](_0x20a0f7['track']);
        } else if (_0x20a0f7['type'] === 'blood_splatter') {
            _0x201289['push']({
                'x': _0x20a0f7['x'],
                'y': _0x20a0f7['y']
            });
        } else if (_0x20a0f7['type'] === 'blood_drop') {
            _0x33a5a9['push']({
                'x': _0x20a0f7['x'],
                'y': _0x20a0f7['y']
            });
        } else if (_0x20a0f7['type'] === 'day_fade') {
            _0x42c77d = 0x1;
            _0x500b1 = performance['now']() + 0x3e8;
        } else if (_0x20a0f7['type'] === 'player_stats_updated') {
            const _0x5092e6 = parseInt(_0x20a0f7['id']);
            if (_0x5092e6 === _0x4590c0 && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x20a0f7['accountStats']);
            }
            if (_0x1b7a80[_0x20a0f7['id']]) {
                _0x1b7a80[_0x20a0f7['id']]['accountStats'] = _0x20a0f7['accountStats'];
            }
            _0x57de5e();
        } else if (_0x20a0f7['type'] === 'stats_update') {
            const _0x397f3d = window['_FB'];
            if (_0x397f3d && _0x397f3d['_currentUser'] && _0x397f3d['_userData']) {
                const _0x11e6a9 = _0x397f3d['_currentUser']['uid'];
                const _0x5f0c56 = _0x20a0f7['patch'] || {};
                const _0x34f015 = _0x397f3d['_userData'];
                const _0x1efad8 = {
                    'townWins': (_0x34f015['townWins'] || 0x0) + (_0x5f0c56['townWins'] || 0x0),
                    'mafiaWins': (_0x34f015['mafiaWins'] || 0x0) + (_0x5f0c56['mafiaWins'] || 0x0),
                    'deaths': (_0x34f015['deaths'] || 0x0) + (_0x5f0c56['deaths'] || 0x0),
                    'townLosses': (_0x34f015['townLosses'] || 0x0) + (_0x5f0c56['townLosses'] || 0x0),
                    'mafiaLosses': (_0x34f015['mafiaLosses'] || 0x0) + (_0x5f0c56['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x397f3d['_userData'], _0x1efad8);
                const _0x4ca38d = _0x397f3d['doc'](_0x397f3d['db'], 'users', _0x11e6a9);
                _0x397f3d['updateDoc'](_0x4ca38d, _0x1efad8)['catch'](() => {
                });
                if (_0x1932ea && _0x1932ea['readyState'] === WebSocket['OPEN']) {
                    _0x1932ea['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x1efad8
                    }));
                }
                _0x57de5e();
            }
        } else if (_0x20a0f7['type'] === 'game_over') {
            _0x89f275['onStateChange']('LOBBY', ![]);
            _0x479455([], 'off');
            _0x265be6 = null;
            _0x1e4c06['isDead'] = ![];
            _0x1e4c06['hasArrow'] = ![];
            _0x201289 = [];
            _0x33a5a9 = [];
            _0x366df8['clear']();
            _0x18335b['clear']();
            _0x4cccfb['CURRENT_TARGET'] = null;
            _0x2fdbbb = null;
            _0x154c52 = null;
            _0x3927ef = null;
            _0x446126 = null;
            _0x4917ef = null;
            _0x3b281f = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x3cb9b3();
            _0x505825('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x20a0f7['type'] === 'chat_log') {
            _0x505825(_0x20a0f7['text'], ![], !!_0x20a0f7['isHost'], _0x20a0f7['sender']);
        } else if (_0x20a0f7['type'] === 'sys_chat') {
            _0x505825(_0x20a0f7['text'], !![]);
        }
    };
}
function _0x505825(_0x5dff1b, _0x461f18 = ![], _0x22771f = ![], _0x311944 = null) {
    const _0x54881b = document['getElementById']('chat-log-messages');
    const _0x9e89ad = document['getElementById']('chat-log-ui');
    const _0x487a61 = _0x9e89ad ? _0x9e89ad['scrollHeight'] - _0x9e89ad['scrollTop'] - _0x9e89ad['clientHeight'] < 0x1e : !![];
    const _0xc1c585 = document['createElement']('div');
    _0xc1c585['className'] = 'chat-log-line' + (_0x461f18 ? '\x20sys-msg' : '');
    if (_0x311944) {
        const _0x46823b = document['createElement']('span');
        _0x46823b['className'] = _0x22771f ? 'chat-host-name' : 'chat-sender-name';
        _0x46823b['textContent'] = _0x311944 + ':\x20';
        const _0x4d8b31 = document['createElement']('span');
        _0x4d8b31['className'] = 'chat-msg-text';
        _0x4d8b31['textContent'] = _0x5dff1b;
        _0xc1c585['appendChild'](_0x46823b);
        _0xc1c585['appendChild'](_0x4d8b31);
    } else {
        _0xc1c585['innerText'] = _0x5dff1b;
    }
    if (_0x54881b)
        _0x54881b['appendChild'](_0xc1c585);
    if (_0x9e89ad && _0x487a61) {
        _0x9e89ad['scrollTop'] = _0x9e89ad['scrollHeight'];
    }
    if (_0x54881b && _0x54881b['childElementCount'] > 0xc8) {
        _0x54881b['removeChild'](_0x54881b['firstChild']);
    }
}
function _0x37f6e7(_0x4bce42, _0x5b93be, _0x193671) {
    const _0x2407df = document['createElement']('canvas');
    _0x2407df['width'] = _0x193671;
    _0x2407df['height'] = _0x193671;
    const _0x5dbfed = _0x2407df['getContext']('2d');
    _0x5dbfed['imageSmoothingEnabled'] = ![];
    const _0xc4f86a = 'assets/' + (_0x4bce42 || 'body01.png');
    const _0x4fe1d5 = _0xd6cbe1(_0xc4f86a);
    if (_0x4fe1d5['complete'] && _0x4fe1d5['naturalWidth'] > 0x0)
        _0x5dbfed['drawImage'](_0x4fe1d5, 0x0, 0x0, _0x193671, _0x193671);
    if (_0x5b93be) {
        const _0x33f0d4 = 'assets/' + _0x5b93be;
        const _0x168653 = _0xd6cbe1(_0x33f0d4);
        if (_0x168653['complete'] && _0x168653['naturalWidth'] > 0x0)
            _0x5dbfed['drawImage'](_0x168653, 0x0, 0x0, _0x193671, _0x193671);
    }
    return _0x2407df['toDataURL']();
}
let _0x19444b = '';
function _0x57de5e() {
    const _0x5cf3bd = document['getElementById']('chat-profile-panel');
    if (!_0x5cf3bd)
        return;
    const _0x21c048 = [];
    if (_0x4590c0 !== null) {
        const _0x988510 = _0x3ced8c || 'body01.png';
        const _0x5dee42 = _0x362649 || 'eyes4.png';
        const _0x53788e = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x21c048['push']({
            'id': _0x4590c0,
            'name': _0xf15527,
            'body': _0x988510,
            'eyes': _0x5dee42,
            'stats': _0x53788e
        });
    }
    for (const _0x4e515f in _0x1b7a80) {
        const _0x3b7779 = _0x1b7a80[_0x4e515f];
        const _0x3d67e1 = _0x3b7779['accountStats'] || null;
        _0x21c048['push']({
            'id': parseInt(_0x4e515f),
            'name': _0x3b7779['name'],
            'body': _0x3b7779['body'] || 'body01.png',
            'eyes': _0x3b7779['eyes'] || 'eyes4.png',
            'stats': _0x3d67e1
        });
    }
    const _0x13b11a = _0x21c048['map'](_0x40a6ac => _0x40a6ac['id'] + '_' + _0x40a6ac['name'] + '_' + _0x40a6ac['body'] + '_' + _0x40a6ac['eyes'] + '_' + JSON['stringify'](_0x40a6ac['stats']))['join']('|');
    if (_0x13b11a === _0x19444b)
        return;
    _0x19444b = _0x13b11a;
    _0x5cf3bd['innerHTML'] = '';
    let _0x2d4bb6 = ![];
    for (const _0x5f5901 of _0x21c048) {
        _0x2d4bb6 = !![];
        const _0x194cae = _0x37f6e7(_0x5f5901['body'], _0x5f5901['eyes'], 0x20);
        const _0x4b974c = document['createElement']('div');
        _0x4b974c['className'] = 'chat-pfp-entry';
        const _0x418acb = document['createElement']('img');
        _0x418acb['src'] = _0x194cae;
        _0x418acb['alt'] = _0x5f5901['name'];
        _0x4b974c['appendChild'](_0x418acb);
        const _0x2ec37b = document['createElement']('div');
        _0x2ec37b['className'] = 'chat-pfp-tooltip';
        let _0x28c1df = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x5f5901['name'] + '</div>';
        const _0x298571 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x56ae20 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0xd9278e = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x152e5a = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x2fd82e = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x3a65ee = (_0x33ad3d, _0xcd3337, _0x332b27, _0x1e861c) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x33ad3d + '<span\x20style=\x22flex:1;color:' + _0x1e861c + ';\x22>' + _0xcd3337 + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x332b27 + '</span></div>';
        if (_0x5f5901['stats']) {
            _0x28c1df += _0x3a65ee(_0x298571, 'Town\x20Wins', _0x5f5901['stats']['townWins'] || 0x0, '#55ee77');
            _0x28c1df += _0x3a65ee(_0x56ae20, 'Mafia\x20Wins', _0x5f5901['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x28c1df += _0x3a65ee(_0xd9278e, 'Deaths', _0x5f5901['stats']['deaths'] || 0x0, '#aaa');
            _0x28c1df += _0x3a65ee(_0x152e5a, 'Town\x20Losses', _0x5f5901['stats']['townLosses'] || 0x0, '#6688aa');
            _0x28c1df += _0x3a65ee(_0x2fd82e, 'Mafia\x20Losses', _0x5f5901['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x28c1df += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x2ec37b['innerHTML'] = _0x28c1df;
        _0x4b974c['appendChild'](_0x2ec37b);
        _0x5cf3bd['appendChild'](_0x4b974c);
    }
    const _0x3f0c27 = document['getElementById']('chat-log-wrap');
    if (_0x3f0c27) {
        if (_0x2d4bb6) {
            _0x3f0c27['classList']['add']('has-profiles');
            _0x5cf3bd['style']['display'] = 'flex';
        } else {
            _0x3f0c27['classList']['remove']('has-profiles');
            _0x5cf3bd['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x57de5e;
let _0x1a209e = -0x1, _0x4289f6 = -0x1, _0xc6970f = -0x1, _0x4f350c = 0x0;
function _0x21b209() {
    if (!_0x4590c0 || !_0x1932ea || _0x1932ea['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x2c384c = performance['now']();
    const _0x3ccd00 = _0x2c384c - _0x4f350c;
    const _0x2d5f57 = Math['abs'](_0x1e4c06['x'] - _0x1a209e) > 0.05 || Math['abs'](_0x1e4c06['y'] - _0x4289f6) > 0.05 || Math['abs'](_0x1e4c06['angle'] - _0xc6970f) > 0.02;
    if (!_0x2d5f57 && _0x3ccd00 < 0xc8)
        return;
    if (_0x3ccd00 < 0x19)
        return;
    _0x4f350c = _0x2c384c;
    _0x1a209e = _0x1e4c06['x'];
    _0x4289f6 = _0x1e4c06['y'];
    _0xc6970f = _0x1e4c06['angle'];
    if (!_0x4590c0 || !_0x1932ea || _0x1932ea['readyState'] !== WebSocket['OPEN'])
        return;
    _0x1932ea['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x1e4c06['x'],
        'y': _0x1e4c06['y'],
        'vx': _0x1e4c06['vx'],
        'vy': _0x1e4c06['vy'],
        'angle': _0x1e4c06['angle'],
        'scale': _0x1e4c06['scale'],
        'teleportId': _0xacb429,
        'clientTimestamp': Date['now']()
    }));
}
function _0x48e0ff() {
    if (_0x1e4c06['isDead'])
        return;
    const _0xce948e = _0x4cccfb['MAP']['layers']['find'](_0x26dff7 => _0x26dff7['name'] === 'walls');
    if (!_0xce948e)
        return;
    const _0x96544c = _0x1e4c06['scale'];
    const _0x58f058 = _0x1e4c06['width'] * _0x96544c / 0x2;
    for (let _0x355d0e = 0x0; _0x355d0e < 0x3; _0x355d0e++) {
        let _0x1f9772 = _0x1e4c06['x'] + _0x1e4c06['width'] / 0x2;
        let _0xfb380f = _0x1e4c06['y'] + _0x1e4c06['height'] / 0x2;
        const _0x6bb677 = Math['floor']((_0x1f9772 - _0x58f058) / _0x4cccfb['MAP']['tileSize']);
        const _0x1632af = Math['floor']((_0x1f9772 + _0x58f058) / _0x4cccfb['MAP']['tileSize']);
        const _0x38f008 = Math['floor']((_0xfb380f - _0x58f058) / _0x4cccfb['MAP']['tileSize']);
        const _0x53f6a4 = Math['floor']((_0xfb380f + _0x58f058) / _0x4cccfb['MAP']['tileSize']);
        for (let _0x1a8318 = _0x38f008; _0x1a8318 <= _0x53f6a4; _0x1a8318++) {
            for (let _0x58dd25 = _0x6bb677; _0x58dd25 <= _0x1632af; _0x58dd25++) {
                if (_0x58dd25 < 0x0 || _0x58dd25 >= _0x4cccfb['MAP']['columns'] || _0x1a8318 < 0x0 || _0x1a8318 >= _0x4cccfb['MAP']['rows'])
                    continue;
                if (_0xce948e['data'][_0x1a8318 * _0x4cccfb['MAP']['columns'] + _0x58dd25] === 0x0)
                    continue;
                const _0x4e8d58 = _0x58dd25 * _0x4cccfb['MAP']['tileSize'];
                const _0x294d65 = _0x1a8318 * _0x4cccfb['MAP']['tileSize'];
                const _0xef6b2d = _0x1f9772 < _0x4e8d58 ? _0x4e8d58 : _0x1f9772 > _0x4e8d58 + _0x4cccfb['MAP']['tileSize'] ? _0x4e8d58 + _0x4cccfb['MAP']['tileSize'] : _0x1f9772;
                const _0x9abf45 = _0xfb380f < _0x294d65 ? _0x294d65 : _0xfb380f > _0x294d65 + _0x4cccfb['MAP']['tileSize'] ? _0x294d65 + _0x4cccfb['MAP']['tileSize'] : _0xfb380f;
                const _0x217051 = _0x1f9772 - _0xef6b2d;
                const _0x1206e0 = _0xfb380f - _0x9abf45;
                const _0x569be1 = Math['sqrt'](_0x217051 * _0x217051 + _0x1206e0 * _0x1206e0);
                if (_0x569be1 < _0x58f058) {
                    if (_0x569be1 === 0x0) {
                        const _0x3a951e = _0x1f9772 - _0x4e8d58;
                        const _0x251521 = _0x4e8d58 + _0x4cccfb['MAP']['tileSize'] - _0x1f9772;
                        const _0x4327b2 = _0xfb380f - _0x294d65;
                        const _0x1cc33d = _0x294d65 + _0x4cccfb['MAP']['tileSize'] - _0xfb380f;
                        const _0x15f0a5 = Math['min'](_0x3a951e, _0x251521, _0x4327b2, _0x1cc33d);
                        if (_0x15f0a5 === _0x3a951e)
                            _0x1f9772 = _0x4e8d58 - _0x58f058;
                        else if (_0x15f0a5 === _0x251521)
                            _0x1f9772 = _0x4e8d58 + _0x4cccfb['MAP']['tileSize'] + _0x58f058;
                        else if (_0x15f0a5 === _0x4327b2)
                            _0xfb380f = _0x294d65 - _0x58f058;
                        else
                            _0xfb380f = _0x294d65 + _0x4cccfb['MAP']['tileSize'] + _0x58f058;
                    } else {
                        const _0x542b95 = _0x58f058 - _0x569be1;
                        _0x1f9772 += _0x217051 / _0x569be1 * _0x542b95;
                        _0xfb380f += _0x1206e0 / _0x569be1 * _0x542b95;
                        const _0x2d38a5 = _0x1e4c06['vx'] * (_0x217051 / _0x569be1) + _0x1e4c06['vy'] * (_0x1206e0 / _0x569be1);
                        if (_0x2d38a5 < 0x0) {
                            _0x1e4c06['vx'] -= _0x2d38a5 * (_0x217051 / _0x569be1);
                            _0x1e4c06['vy'] -= _0x2d38a5 * (_0x1206e0 / _0x569be1);
                        }
                    }
                }
            }
        }
        _0x1e4c06['x'] = _0x1f9772 - _0x1e4c06['width'] / 0x2;
        _0x1e4c06['y'] = _0xfb380f - _0x1e4c06['height'] / 0x2;
    }
}
function _0x105f08(_0x4aada7) {
    const _0x395bbb = _0x4cccfb['MAP']['layers']['find'](_0x449720 => _0x449720['name'] === 'walls');
    if (!_0x395bbb)
        return;
    const _0x2f7271 = _0x4aada7['width'] / 0x2;
    for (let _0x1b09a6 = 0x0; _0x1b09a6 < 0x2; _0x1b09a6++) {
        let _0x5e247e = _0x4aada7['x'] + _0x4aada7['width'] / 0x2;
        let _0x174632 = _0x4aada7['y'] + _0x4aada7['height'] / 0x2;
        const _0x2ca3ac = Math['floor']((_0x5e247e - _0x2f7271) / _0x4cccfb['MAP']['tileSize']);
        const _0x1dfcd6 = Math['floor']((_0x5e247e + _0x2f7271) / _0x4cccfb['MAP']['tileSize']);
        const _0x260ad2 = Math['floor']((_0x174632 - _0x2f7271) / _0x4cccfb['MAP']['tileSize']);
        const _0x257ca9 = Math['floor']((_0x174632 + _0x2f7271) / _0x4cccfb['MAP']['tileSize']);
        for (let _0x5d6c71 = _0x260ad2; _0x5d6c71 <= _0x257ca9; _0x5d6c71++) {
            for (let _0x66fad7 = _0x2ca3ac; _0x66fad7 <= _0x1dfcd6; _0x66fad7++) {
                if (_0x66fad7 < 0x0 || _0x66fad7 >= _0x4cccfb['MAP']['columns'] || _0x5d6c71 < 0x0 || _0x5d6c71 >= _0x4cccfb['MAP']['rows'])
                    continue;
                if (_0x395bbb['data'][_0x5d6c71 * _0x4cccfb['MAP']['columns'] + _0x66fad7] === 0x0)
                    continue;
                const _0x264156 = _0x66fad7 * _0x4cccfb['MAP']['tileSize'];
                const _0x33347b = _0x5d6c71 * _0x4cccfb['MAP']['tileSize'];
                const _0x41ba29 = _0x5e247e < _0x264156 ? _0x264156 : _0x5e247e > _0x264156 + _0x4cccfb['MAP']['tileSize'] ? _0x264156 + _0x4cccfb['MAP']['tileSize'] : _0x5e247e;
                const _0x380e76 = _0x174632 < _0x33347b ? _0x33347b : _0x174632 > _0x33347b + _0x4cccfb['MAP']['tileSize'] ? _0x33347b + _0x4cccfb['MAP']['tileSize'] : _0x174632;
                const _0x50874e = _0x5e247e - _0x41ba29;
                const _0x86aa62 = _0x174632 - _0x380e76;
                const _0x865212 = Math['sqrt'](_0x50874e * _0x50874e + _0x86aa62 * _0x86aa62);
                if (_0x865212 < _0x2f7271) {
                    if (_0x865212 === 0x0) {
                        const _0x12bbb4 = _0x5e247e - _0x264156;
                        const _0xb69231 = _0x264156 + _0x4cccfb['MAP']['tileSize'] - _0x5e247e;
                        const _0x2b1154 = _0x174632 - _0x33347b;
                        const _0x13656c = _0x33347b + _0x4cccfb['MAP']['tileSize'] - _0x174632;
                        const _0x2953a1 = Math['min'](_0x12bbb4, _0xb69231, _0x2b1154, _0x13656c);
                        if (_0x2953a1 === _0x12bbb4)
                            _0x5e247e = _0x264156 - _0x2f7271;
                        else if (_0x2953a1 === _0xb69231)
                            _0x5e247e = _0x264156 + _0x4cccfb['MAP']['tileSize'] + _0x2f7271;
                        else if (_0x2953a1 === _0x2b1154)
                            _0x174632 = _0x33347b - _0x2f7271;
                        else
                            _0x174632 = _0x33347b + _0x4cccfb['MAP']['tileSize'] + _0x2f7271;
                    } else {
                        const _0x267f75 = _0x2f7271 - _0x865212;
                        _0x5e247e += _0x50874e / _0x865212 * _0x267f75;
                        _0x174632 += _0x86aa62 / _0x865212 * _0x267f75;
                    }
                }
            }
        }
        _0x4aada7['x'] = _0x5e247e - _0x4aada7['width'] / 0x2;
        _0x4aada7['y'] = _0x174632 - _0x4aada7['height'] / 0x2;
    }
}
function _0x508244(_0x3ac1be) {
    const _0x4c7647 = _0x3ac1be['width'] / 0x2;
    for (let _0x2a9b44 = 0x0; _0x2a9b44 < 0x2; _0x2a9b44++) {
        let _0x2add7e = _0x3ac1be['x'] + _0x3ac1be['width'] / 0x2;
        let _0x1a14b6 = _0x3ac1be['y'] + _0x3ac1be['height'] / 0x2;
        for (const _0x2442a3 of _0x4cccfb['ENTITIES']) {
            const _0x2688c9 = _0x2add7e < _0x2442a3['x'] ? _0x2442a3['x'] : _0x2add7e > _0x2442a3['x'] + _0x2442a3['w'] ? _0x2442a3['x'] + _0x2442a3['w'] : _0x2add7e;
            const _0x2ff8be = _0x1a14b6 < _0x2442a3['y'] ? _0x2442a3['y'] : _0x1a14b6 > _0x2442a3['y'] + _0x2442a3['h'] ? _0x2442a3['y'] + _0x2442a3['h'] : _0x1a14b6;
            const _0x518c5a = _0x2add7e - _0x2688c9;
            const _0x41fa0b = _0x1a14b6 - _0x2ff8be;
            const _0x2f279e = Math['sqrt'](_0x518c5a * _0x518c5a + _0x41fa0b * _0x41fa0b);
            if (_0x2f279e < _0x4c7647 && _0x2f279e > 0x0) {
                const _0x2edc92 = _0x4c7647 - _0x2f279e;
                const _0x557c5a = _0x518c5a / _0x2f279e;
                const _0x4cb58b = _0x41fa0b / _0x2f279e;
                _0x2add7e += _0x557c5a * _0x2edc92;
                _0x1a14b6 += _0x4cb58b * _0x2edc92;
            } else if (_0x2f279e === 0x0) {
                const _0x44fa78 = _0x2add7e - _0x2442a3['x'];
                const _0x265363 = _0x2442a3['x'] + _0x2442a3['w'] - _0x2add7e;
                const _0x31a431 = _0x1a14b6 - _0x2442a3['y'];
                const _0x4c3f70 = _0x2442a3['y'] + _0x2442a3['h'] - _0x1a14b6;
                const _0x134b54 = Math['min'](_0x44fa78, _0x265363, _0x31a431, _0x4c3f70);
                if (_0x134b54 === _0x44fa78)
                    _0x2add7e = _0x2442a3['x'] - _0x4c7647;
                else if (_0x134b54 === _0x265363)
                    _0x2add7e = _0x2442a3['x'] + _0x2442a3['w'] + _0x4c7647;
                else if (_0x134b54 === _0x31a431)
                    _0x1a14b6 = _0x2442a3['y'] - _0x4c7647;
                else
                    _0x1a14b6 = _0x2442a3['y'] + _0x2442a3['h'] + _0x4c7647;
            }
        }
        _0x3ac1be['x'] = _0x2add7e - _0x3ac1be['width'] / 0x2;
        _0x3ac1be['y'] = _0x1a14b6 - _0x3ac1be['height'] / 0x2;
    }
}
function _0x1d9105() {
    if (_0x1e4c06['isDead'])
        return;
    const _0x3c6149 = _0x1e4c06['width'] / 0x2;
    const _0xa478d9 = _0x1e4c06['x'] + _0x1e4c06['width'] / 0x2;
    const _0x4b9626 = _0x1e4c06['y'] + _0x1e4c06['height'] / 0x2;
    for (const _0x300950 in _0x1b7a80) {
        const _0x4c6c46 = _0x1b7a80[_0x300950];
        if (_0x4c6c46['isDead'])
            continue;
        const _0x446e49 = _0x4c6c46['width'] / 0x2;
        const _0xbe1be = _0x3c6149 + _0x446e49;
        const _0x5171a7 = (_0x4c6c46['renderX'] ?? _0x4c6c46['x']) + _0x4c6c46['width'] / 0x2;
        const _0x33a8be = (_0x4c6c46['renderY'] ?? _0x4c6c46['y']) + _0x4c6c46['height'] / 0x2;
        const _0x216dfa = _0xa478d9 - _0x5171a7;
        const _0x1ce712 = _0x4b9626 - _0x33a8be;
        const _0x51ab63 = Math['sqrt'](_0x216dfa * _0x216dfa + _0x1ce712 * _0x1ce712);
        if (_0x51ab63 > 0x0 && _0x51ab63 < _0xbe1be) {
            const _0x654e70 = _0xbe1be - _0x51ab63;
            const _0x563a75 = _0x216dfa / _0x51ab63;
            const _0x4ab42d = _0x1ce712 / _0x51ab63;
            _0x1e4c06['x'] += _0x563a75 * (_0x654e70 * 0.25);
            _0x1e4c06['y'] += _0x4ab42d * (_0x654e70 * 0.25);
            _0x4c6c46['x'] -= _0x563a75 * (_0x654e70 * 0.75);
            _0x4c6c46['y'] -= _0x4ab42d * (_0x654e70 * 0.75);
            _0x105f08(_0x4c6c46);
            _0x508244(_0x4c6c46);
            if (_0x4c6c46['renderX'] !== undefined) {
                _0x4c6c46['renderX'] = _0x4c6c46['x'];
                _0x4c6c46['renderY'] = _0x4c6c46['y'];
            }
            const _0x5142bf = _0x1e4c06['vx'] * _0x563a75 + _0x1e4c06['vy'] * _0x4ab42d;
            if (_0x5142bf < 0x0) {
                _0x1e4c06['vx'] -= _0x5142bf * _0x563a75 * 0.25;
                _0x1e4c06['vy'] -= _0x5142bf * _0x4ab42d * 0.25;
            }
        }
    }
    _0x48e0ff();
    _0x33e0cc();
}
function _0x33e0cc() {
    if (_0x1e4c06['isDead'])
        return;
    const _0x3822f4 = _0x1e4c06['scale'];
    const _0x3c1750 = _0x1e4c06['width'] * _0x3822f4 / 0x2;
    for (let _0x4751a2 = 0x0; _0x4751a2 < 0x2; _0x4751a2++) {
        let _0x5e3d52 = _0x1e4c06['x'] + _0x1e4c06['width'] / 0x2;
        let _0x19040d = _0x1e4c06['y'] + _0x1e4c06['height'] / 0x2;
        for (const _0x10b43c of _0x4cccfb['ENTITIES']) {
            const _0x4b1888 = _0x5e3d52 < _0x10b43c['x'] ? _0x10b43c['x'] : _0x5e3d52 > _0x10b43c['x'] + _0x10b43c['w'] ? _0x10b43c['x'] + _0x10b43c['w'] : _0x5e3d52;
            const _0x4aa98e = _0x19040d < _0x10b43c['y'] ? _0x10b43c['y'] : _0x19040d > _0x10b43c['y'] + _0x10b43c['h'] ? _0x10b43c['y'] + _0x10b43c['h'] : _0x19040d;
            const _0x2aadec = _0x5e3d52 - _0x4b1888;
            const _0x31b321 = _0x19040d - _0x4aa98e;
            const _0x1e6d90 = Math['sqrt'](_0x2aadec * _0x2aadec + _0x31b321 * _0x31b321);
            if (_0x1e6d90 < _0x3c1750 && _0x1e6d90 > 0x0) {
                const _0x320dfa = _0x3c1750 - _0x1e6d90;
                const _0x7afc7e = _0x2aadec / _0x1e6d90;
                const _0x4b085b = _0x31b321 / _0x1e6d90;
                _0x5e3d52 += _0x7afc7e * _0x320dfa;
                _0x19040d += _0x4b085b * _0x320dfa;
                const _0x5ea545 = _0x1e4c06['vx'] * _0x7afc7e + _0x1e4c06['vy'] * _0x4b085b;
                if (_0x5ea545 < 0x0) {
                    _0x1e4c06['vx'] -= _0x5ea545 * _0x7afc7e;
                    _0x1e4c06['vy'] -= _0x5ea545 * _0x4b085b;
                }
            } else if (_0x1e6d90 === 0x0) {
                const _0x4bc0b4 = _0x5e3d52 - _0x10b43c['x'];
                const _0x859893 = _0x10b43c['x'] + _0x10b43c['w'] - _0x5e3d52;
                const _0x3156a7 = _0x19040d - _0x10b43c['y'];
                const _0x577f15 = _0x10b43c['y'] + _0x10b43c['h'] - _0x19040d;
                const _0x4d99f7 = Math['min'](_0x4bc0b4, _0x859893, _0x3156a7, _0x577f15);
                if (_0x4d99f7 === _0x4bc0b4)
                    _0x5e3d52 = _0x10b43c['x'] - _0x3c1750;
                else if (_0x4d99f7 === _0x859893)
                    _0x5e3d52 = _0x10b43c['x'] + _0x10b43c['w'] + _0x3c1750;
                else if (_0x4d99f7 === _0x3156a7)
                    _0x19040d = _0x10b43c['y'] - _0x3c1750;
                else
                    _0x19040d = _0x10b43c['y'] + _0x10b43c['h'] + _0x3c1750;
            }
        }
        _0x1e4c06['x'] = _0x5e3d52 - _0x1e4c06['width'] / 0x2;
        _0x1e4c06['y'] = _0x19040d - _0x1e4c06['height'] / 0x2;
    }
}
function _0x493ff9(_0x246e24, _0x361bfb) {
    const _0x4dff43 = _0x4cccfb['MAP']['layers']['find'](_0x50fe11 => _0x50fe11['name'] === 'trees');
    if (!_0x4dff43)
        return ![];
    const _0x4ed205 = Math['floor'](_0x246e24 / _0x4cccfb['MAP']['tileSize']);
    const _0x1e2413 = Math['floor'](_0x361bfb / _0x4cccfb['MAP']['tileSize']);
    if (_0x4ed205 < 0x0 || _0x4ed205 >= _0x4cccfb['MAP']['columns'] || _0x1e2413 < 0x0 || _0x1e2413 >= _0x4cccfb['MAP']['rows'])
        return ![];
    return _0x4dff43['data'][_0x1e2413 * _0x4cccfb['MAP']['columns'] + _0x4ed205] === 0xb;
}
let _0x700a96 = null;
function _0x16ec85() {
    const _0x1eec55 = _0x4cccfb['MAP'];
    const _0x337c3c = _0x1eec55['layers']['find'](_0x2a7401 => _0x2a7401['name'] === 'floor2');
    const _0x65cff7 = _0x1eec55['layers']['find'](_0xf649b7 => _0xf649b7['name'] === 'walls');
    if (!_0x337c3c || !_0x65cff7) {
        _0x700a96 = null;
        return;
    }
    const _0x4b9369 = _0x1eec55['columns'];
    const _0x1a0118 = _0x1eec55['rows'];
    const _0x451966 = [];
    const _0x258b48 = new Set();
    const _0x43d59b = new Set();
    for (let _0x503cbd = 0x0; _0x503cbd < _0x1a0118; _0x503cbd++) {
        for (let _0x20f504 = 0x0; _0x20f504 < _0x4b9369; _0x20f504++) {
            const _0x288906 = _0x503cbd * _0x4b9369 + _0x20f504;
            const _0x4b2f51 = _0x337c3c['data'][_0x288906];
            const _0x5b7b99 = _0x65cff7['data'][_0x288906];
            if (_0x4b2f51 === 0x2 && _0x5b7b99 === 0x0) {
                _0x451966['push']({
                    'c': _0x20f504,
                    'r': _0x503cbd
                });
                _0x43d59b['add'](_0x20f504 + ',' + _0x503cbd);
            } else if (_0x5b7b99 !== 0x0) {
                _0x258b48['add'](_0x20f504 + ',' + _0x503cbd);
            }
        }
    }
    const _0x545e84 = [
        [
            -0x1,
            0x0
        ],
        [
            0x1,
            0x0
        ],
        [
            0x0,
            -0x1
        ],
        [
            0x0,
            0x1
        ]
    ];
    for (const {
                c: _0x195da6,
                r: _0x5d2d54
            } of _0x451966) {
        for (const [_0x34fcda, _0x505bc2] of _0x545e84) {
            const _0x2cd734 = _0x195da6 + _0x34fcda, _0x1f66fa = _0x5d2d54 + _0x505bc2;
            const _0x4677d9 = _0x2cd734 + ',' + _0x1f66fa;
            if (!_0x43d59b['has'](_0x4677d9)) {
                _0x258b48['add'](_0x4677d9);
            }
        }
    }
    _0x700a96 = {
        'wallSet': _0x258b48,
        'floorTiles': _0x451966,
        'interiorSet': _0x43d59b
    };
}
function _0x59d138() {
    const _0x394e88 = _0x4cccfb['MAP']['layers']['find'](_0x1a8049 => _0x1a8049['name'] === 'floor2');
    if (!_0x394e88)
        return ![];
    const _0x4cb748 = _0x1e4c06['x'] + _0x1e4c06['width'] / 0x2;
    const _0x2d6005 = _0x1e4c06['y'] + _0x1e4c06['height'] / 0x2;
    const _0x1c1148 = _0x4cccfb['MAP']['tileSize'];
    const _0x4b7c47 = Math['floor'](_0x4cb748 / _0x1c1148);
    const _0x531e2f = Math['floor'](_0x2d6005 / _0x1c1148);
    if (_0x4b7c47 < 0x0 || _0x4b7c47 >= _0x4cccfb['MAP']['columns'] || _0x531e2f < 0x0 || _0x531e2f >= _0x4cccfb['MAP']['rows'])
        return ![];
    const _0x3bcb4 = _0x531e2f * _0x4cccfb['MAP']['columns'] + _0x4b7c47;
    if (_0x394e88['data'][_0x3bcb4] === 0x2)
        return !![];
    if (_0x4cccfb['MAP']['doors'] && _0x4cccfb['MAP']['doors'][_0x3bcb4])
        return !![];
    const _0x63b7cb = [
        [
            -0xc,
            0x0
        ],
        [
            0xc,
            0x0
        ],
        [
            0x0,
            -0xc
        ],
        [
            0x0,
            0xc
        ]
    ];
    for (const [_0x1baa70, _0x9fdc9] of _0x63b7cb) {
        const _0x22d760 = Math['floor']((_0x4cb748 + _0x1baa70) / _0x1c1148);
        const _0x5259a3 = Math['floor']((_0x2d6005 + _0x9fdc9) / _0x1c1148);
        if (_0x22d760 >= 0x0 && _0x22d760 < _0x4cccfb['MAP']['columns'] && _0x5259a3 >= 0x0 && _0x5259a3 < _0x4cccfb['MAP']['rows']) {
            const _0x3a79d3 = _0x5259a3 * _0x4cccfb['MAP']['columns'] + _0x22d760;
            if (_0x394e88['data'][_0x3a79d3] === 0x2 || _0x4cccfb['MAP']['doors'] && _0x4cccfb['MAP']['doors'][_0x3a79d3]) {
                return !![];
            }
        }
    }
    return ![];
}
let _0x361cd4 = null, _0x5b3a3d = null;
function _0x4b9707() {
    if (_0x1e4c06['isDead']) {
        _0x4cccfb['SHADOW']['polygon'] = null;
        _0x361cd4 = null;
        return;
    }
    const _0x43cf17 = _0x4cccfb['MAP'];
    const _0x2e7265 = _0x4cccfb['SHADOW'];
    const _0x381639 = _0x43cf17['tileSize'];
    if (!_0x700a96)
        _0x16ec85();
    if (!_0x700a96) {
        _0x2e7265['polygon'] = null;
        _0x361cd4 = null;
        return;
    }
    const {
        wallSet: _0x185996,
        floorTiles: _0x5cdb3b
    } = _0x700a96;
    if (_0x5cdb3b['length'] === 0x0) {
        _0x2e7265['polygon'] = null;
        _0x361cd4 = null;
        return;
    }
    if (!_0x59d138()) {
        _0x2e7265['polygon'] = null;
        _0x361cd4 = null;
        return;
    }
    const _0x4e0384 = _0x1e4c06['x'] + _0x1e4c06['width'] / 0x2;
    const _0x5ab252 = _0x1e4c06['y'] + _0x1e4c06['height'] / 0x2;
    if (_0x361cd4 !== null && _0x2e7265['polygon'] && Math['hypot'](_0x4e0384 - _0x361cd4, _0x5ab252 - _0x5b3a3d) < 0.5) {
        return;
    }
    _0x361cd4 = _0x4e0384;
    _0x5b3a3d = _0x5ab252;
    const _0x47256c = Math['floor'](_0x4e0384 / _0x381639);
    const _0x3bf063 = Math['floor'](_0x5ab252 / _0x381639);
    const _0x388d53 = Math['max'](0x0, _0x47256c - 0x8);
    const _0x5d42ce = Math['min'](_0x43cf17['columns'] - 0x1, _0x47256c + 0x8);
    const _0x102942 = Math['max'](0x0, _0x3bf063 - 0x8);
    const _0x17d423 = Math['min'](_0x43cf17['rows'] - 0x1, _0x3bf063 + 0x8);
    const _0x4eab6a = [];
    const _0x29bd61 = [];
    for (let _0x1f373e = _0x102942; _0x1f373e <= _0x17d423; _0x1f373e++) {
        for (let _0x291c0d = _0x388d53; _0x291c0d <= _0x5d42ce; _0x291c0d++) {
            if (!_0x185996['has'](_0x291c0d + ',' + _0x1f373e))
                continue;
            const _0x348fdd = _0x291c0d * _0x381639;
            const _0xb515ea = _0x1f373e * _0x381639;
            const _0x10ce94 = _0x348fdd + _0x381639;
            const _0x547523 = _0xb515ea + _0x381639;
            if (!_0x185996['has'](_0x291c0d + ',' + (_0x1f373e - 0x1))) {
                _0x4eab6a['push'](_0x348fdd, _0xb515ea, _0x10ce94, _0xb515ea);
                _0x29bd61['push'](_0x348fdd, _0xb515ea, _0x10ce94, _0xb515ea);
            }
            if (!_0x185996['has'](_0x291c0d + ',' + (_0x1f373e + 0x1))) {
                _0x4eab6a['push'](_0x348fdd, _0x547523, _0x10ce94, _0x547523);
                _0x29bd61['push'](_0x348fdd, _0x547523, _0x10ce94, _0x547523);
            }
            if (!_0x185996['has'](_0x291c0d - 0x1 + ',' + _0x1f373e)) {
                _0x4eab6a['push'](_0x348fdd, _0xb515ea, _0x348fdd, _0x547523);
                _0x29bd61['push'](_0x348fdd, _0xb515ea, _0x348fdd, _0x547523);
            }
            if (!_0x185996['has'](_0x291c0d + 0x1 + ',' + _0x1f373e)) {
                _0x4eab6a['push'](_0x10ce94, _0xb515ea, _0x10ce94, _0x547523);
                _0x29bd61['push'](_0x10ce94, _0xb515ea, _0x10ce94, _0x547523);
            }
        }
    }
    const _0x5d306d = new Set();
    const _0xa99ea1 = [];
    const _0xba8df5 = 0.0001;
    for (let _0x2a2ada = 0x0; _0x2a2ada < _0x29bd61['length']; _0x2a2ada += 0x2) {
        const _0x3e017a = _0x29bd61[_0x2a2ada];
        const _0x666d77 = _0x29bd61[_0x2a2ada + 0x1];
        const _0x3ae4b8 = Math['atan2'](_0x666d77 - _0x5ab252, _0x3e017a - _0x4e0384);
        const _0x29710a = Math['round'](_0x3ae4b8 * 0x9c40);
        if (!_0x5d306d['has'](_0x29710a - 0x1)) {
            _0x5d306d['add'](_0x29710a - 0x1);
            _0xa99ea1['push'](_0x3ae4b8 - _0xba8df5);
        }
        if (!_0x5d306d['has'](_0x29710a)) {
            _0x5d306d['add'](_0x29710a);
            _0xa99ea1['push'](_0x3ae4b8);
        }
        if (!_0x5d306d['has'](_0x29710a + 0x1)) {
            _0x5d306d['add'](_0x29710a + 0x1);
            _0xa99ea1['push'](_0x3ae4b8 + _0xba8df5);
        }
    }
    for (let _0x3e12ec = 0x0; _0x3e12ec < 0x10; _0x3e12ec++) {
        const _0x510608 = -Math['PI'] + _0x3e12ec * 0x2 * Math['PI'] / 0x10;
        _0xa99ea1['push'](_0x510608);
    }
    _0xa99ea1['sort']((_0x33aaef, _0x315ec8) => _0x33aaef - _0x315ec8);
    const _0x423723 = 0xc * _0x381639;
    const _0x3e8f57 = [];
    for (let _0x1bfdc5 = 0x0; _0x1bfdc5 < _0xa99ea1['length']; _0x1bfdc5++) {
        const _0x279701 = _0xa99ea1[_0x1bfdc5];
        const _0x36d1a1 = Math['cos'](_0x279701);
        const _0x34eefe = Math['sin'](_0x279701);
        let _0xca8551 = _0x423723;
        for (let _0x2da38f = 0x0; _0x2da38f < _0x4eab6a['length']; _0x2da38f += 0x4) {
            const _0x52be07 = _0x4eab6a[_0x2da38f], _0x224012 = _0x4eab6a[_0x2da38f + 0x1];
            const _0x49d65 = _0x4eab6a[_0x2da38f + 0x2], _0x10889e = _0x4eab6a[_0x2da38f + 0x3];
            const _0x1ce4ea = _0x49d65 - _0x52be07;
            const _0xebc443 = _0x10889e - _0x224012;
            const _0x4afc69 = _0x36d1a1 * _0xebc443 - _0x34eefe * _0x1ce4ea;
            if (Math['abs'](_0x4afc69) < 1e-9)
                continue;
            const _0x15b8b8 = _0x52be07 - _0x4e0384;
            const _0x50e42e = _0x224012 - _0x5ab252;
            const _0x176908 = (_0x15b8b8 * _0xebc443 - _0x50e42e * _0x1ce4ea) / _0x4afc69;
            const _0x5c8584 = (_0x15b8b8 * _0x34eefe - _0x50e42e * _0x36d1a1) / _0x4afc69;
            if (_0x176908 > 0x1 && _0x5c8584 >= 0x0 && _0x5c8584 <= 0x1 && _0x176908 < _0xca8551) {
                _0xca8551 = _0x176908;
            }
        }
        _0x3e8f57['push'](_0x4e0384 + _0x36d1a1 * _0xca8551, _0x5ab252 + _0x34eefe * _0xca8551);
    }
    _0x2e7265['polygon'] = _0x3e8f57['length'] >= 0x6 ? _0x3e8f57 : null;
}
function _0x5dc0d3(_0x116f1d, _0x251f9c, _0x4b4b5b) {
    if (_0x1e4c06['isDead'])
        return;
    if (!_0x700a96)
        _0x16ec85();
    if (!_0x700a96)
        return;
    const {floorTiles: _0x2ac9fa} = _0x700a96;
    if (_0x2ac9fa['length'] === 0x0)
        return;
    const _0x9af3eb = _0x4cccfb['SHADOW'];
    const _0x3b87cb = _0x4cccfb['MAP']['tileSize'];
    const _0x56618a = _0x4cccfb['CAMERA']['width'];
    const _0x3d7a19 = _0x4cccfb['CAMERA']['height'];
    if (!_0x4cccfb['SHADOW']['_buf'] || _0x4cccfb['SHADOW']['_buf']['width'] !== _0x56618a || _0x4cccfb['SHADOW']['_buf']['height'] !== _0x3d7a19) {
        _0x4cccfb['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x4cccfb['SHADOW']['_buf']['width'] = _0x56618a;
        _0x4cccfb['SHADOW']['_buf']['height'] = _0x3d7a19;
    }
    const _0x5d73ca = _0x4cccfb['SHADOW']['_buf'];
    const _0x5cfd0e = _0x5d73ca['getContext']('2d');
    _0x5cfd0e['clearRect'](0x0, 0x0, _0x56618a, _0x3d7a19);
    _0x5cfd0e['fillStyle'] = 'rgba(0,0,0,0.95)';
    _0x5cfd0e['beginPath']();
    for (const {
                c: _0x370b2f,
                r: _0x28332f
            } of _0x2ac9fa) {
        const _0x353bb0 = Math['round'](_0x370b2f * _0x3b87cb - _0x251f9c), _0x1cac4c = Math['round'](_0x28332f * _0x3b87cb - _0x4b4b5b);
        if (_0x353bb0 > _0x56618a || _0x1cac4c > _0x3d7a19 || _0x353bb0 + _0x3b87cb < 0x0 || _0x1cac4c + _0x3b87cb < 0x0)
            continue;
        _0x5cfd0e['rect'](_0x353bb0, _0x1cac4c, _0x3b87cb + 0x1, _0x3b87cb + 0x1);
    }
    _0x5cfd0e['fill']();
    if (_0x59d138() && _0x9af3eb['polygon'] && _0x9af3eb['polygon']['length'] >= 0x6) {
        _0x5cfd0e['globalCompositeOperation'] = 'destination-out';
        _0x5cfd0e['fillStyle'] = 'rgba(0,0,0,1)';
        const _0x1b873f = _0x9af3eb['polygon'];
        _0x5cfd0e['beginPath']();
        _0x5cfd0e['moveTo'](_0x1b873f[0x0] - _0x251f9c, _0x1b873f[0x1] - _0x4b4b5b);
        for (let _0x13f664 = 0x2; _0x13f664 < _0x1b873f['length']; _0x13f664 += 0x2) {
            _0x5cfd0e['lineTo'](_0x1b873f[_0x13f664] - _0x251f9c, _0x1b873f[_0x13f664 + 0x1] - _0x4b4b5b);
        }
        _0x5cfd0e['closePath']();
        _0x5cfd0e['fill']();
        _0x5cfd0e['globalCompositeOperation'] = 'source-over';
    }
    _0x116f1d['drawImage'](_0x5d73ca, 0x0, 0x0);
}
function _0x518b0c(_0x39e925) {
    let _0x488912 = 0x0, _0x1cdb11 = 0x0;
    const _0x38e85e = _0x4cccfb['INPUTS']['mouseX'] / _0x4cccfb['SYSTEM']['viewScale'];
    const _0x47bb2a = _0x4cccfb['INPUTS']['mouseY'] / _0x4cccfb['SYSTEM']['viewScale'];
    const _0x3adc78 = _0x1e4c06['x'] - _0x4cccfb['CAMERA']['x'] + _0x1e4c06['width'] / 0x2;
    const _0x2aba5b = _0x1e4c06['y'] - _0x4cccfb['CAMERA']['y'] + _0x1e4c06['height'] / 0x2;
    const _0x55f22f = Math['atan2'](_0x47bb2a - _0x2aba5b, _0x38e85e - _0x3adc78);
    if (_0x1e4bd9 !== 0x0 || _0x462bf9 !== 0x0) {
        _0x488912 = _0x1e4bd9;
        _0x1cdb11 = _0x462bf9;
    } else if (_0x130283) {
        let _0x3fdf62 = 0x0, _0x294489 = 0x0;
        if (_0x4cccfb['INPUTS']['keys']['w'] || _0x4cccfb['INPUTS']['keys']['arrowup'])
            _0x3fdf62 += 0x1;
        if (_0x4cccfb['INPUTS']['keys']['s'] || _0x4cccfb['INPUTS']['keys']['arrowdown'])
            _0x3fdf62 -= 0x1;
        if (_0x4cccfb['INPUTS']['keys']['d'] || _0x4cccfb['INPUTS']['keys']['arrowright'])
            _0x294489 += 0x1;
        if (_0x4cccfb['INPUTS']['keys']['a'] || _0x4cccfb['INPUTS']['keys']['arrowleft'])
            _0x294489 -= 0x1;
        if (_0x3fdf62 !== 0x0 || _0x294489 !== 0x0) {
            const _0x244ba6 = _0x55f22f + Math['atan2'](_0x294489, _0x3fdf62);
            _0x488912 = Math['cos'](_0x244ba6);
            _0x1cdb11 = Math['sin'](_0x244ba6);
        }
    } else {
        if (_0x4cccfb['INPUTS']['keys']['w'] || _0x4cccfb['INPUTS']['keys']['arrowup'])
            _0x1cdb11 -= 0x1;
        if (_0x4cccfb['INPUTS']['keys']['s'] || _0x4cccfb['INPUTS']['keys']['arrowdown'])
            _0x1cdb11 += 0x1;
        if (_0x4cccfb['INPUTS']['keys']['a'] || _0x4cccfb['INPUTS']['keys']['arrowleft'])
            _0x488912 -= 0x1;
        if (_0x4cccfb['INPUTS']['keys']['d'] || _0x4cccfb['INPUTS']['keys']['arrowright'])
            _0x488912 += 0x1;
        const _0x290020 = _0x488912 !== 0x0 || _0x1cdb11 !== 0x0;
        if (_0x290020) {
            const _0x81b33b = Math['sqrt'](_0x488912 * _0x488912 + _0x1cdb11 * _0x1cdb11);
            _0x488912 /= _0x81b33b;
            _0x1cdb11 /= _0x81b33b;
        }
    }
    if (_0x4cccfb['GAME_STATE'] === 'NIGHT' && (_0x265be6 === 'Skinwalker' || _0x265be6 === 'Blackmailer')) {
        if (_0x4cccfb['NIGHT_ABILITY_OPEN'] || !_0x4cccfb['CURRENT_TARGET']) {
            _0x488912 = 0x0;
            _0x1cdb11 = 0x0;
            _0x1e4c06['vx'] = 0x0;
            _0x1e4c06['vy'] = 0x0;
            _0x1e4c06['x'] = _0x4cccfb['MAP']['columns'] * _0x4cccfb['MAP']['tileSize'] / 0x2 - _0x1e4c06['width'] / 0x2;
            _0x1e4c06['y'] = _0x4cccfb['MAP']['rows'] * _0x4cccfb['MAP']['tileSize'] / 0x2 - _0x1e4c06['height'] / 0x2;
        }
    }
    const _0x16b759 = _0x488912 !== 0x0 || _0x1cdb11 !== 0x0;
    const _0x5729fc = (_0x4cccfb['INPUTS']['keys']['shift'] || _0x46f29f || _0x59787f) && _0x16b759;
    _0x1e4c06['bopTimer'] = _0x5729fc ? _0x1e4c06['bopTimer'] + _0x39e925 : 0x0;
    _0x1e4c06['scale'] = 0x1 + (_0x1e4c06['bopTimer'] > 0x0 ? Math['sin'](_0x1e4c06['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x578be0 = Math['pow'](0.001, _0x39e925);
    const _0x3b75a0 = _0x5729fc ? 0x74a : 0x5d5;
    _0x1e4c06['vx'] += _0x488912 * _0x3b75a0 * _0x39e925;
    _0x1e4c06['vy'] += _0x1cdb11 * _0x3b75a0 * _0x39e925;
    _0x1e4c06['vx'] *= _0x578be0;
    _0x1e4c06['vy'] *= _0x578be0;
    _0x1e4c06['x'] += _0x1e4c06['vx'] * _0x39e925;
    _0x1e4c06['y'] += _0x1e4c06['vy'] * _0x39e925;
    for (let _0x217f1d = 0x0; _0x217f1d < 0x3; _0x217f1d++)
        _0x48e0ff();
    for (let _0x33ba03 = 0x0; _0x33ba03 < 0x2; _0x33ba03++)
        _0x33e0cc();
    for (let _0x32bca3 = 0x0; _0x32bca3 < 0x2; _0x32bca3++)
        _0x1d9105();
    if (_0x1e4c06['x'] < 0x0)
        _0x1e4c06['x'] = 0x0;
    if (_0x1e4c06['y'] < 0x0)
        _0x1e4c06['y'] = 0x0;
    if (_0x1e4c06['x'] + _0x1e4c06['width'] > _0x4cccfb['MAP']['columns'] * _0x4cccfb['MAP']['tileSize'])
        _0x1e4c06['x'] = _0x4cccfb['MAP']['columns'] * _0x4cccfb['MAP']['tileSize'] - _0x1e4c06['width'];
    if (_0x1e4c06['y'] + _0x1e4c06['height'] > _0x4cccfb['MAP']['rows'] * _0x4cccfb['MAP']['tileSize'])
        _0x1e4c06['y'] = _0x4cccfb['MAP']['rows'] * _0x4cccfb['MAP']['tileSize'] - _0x1e4c06['height'];
    if (_0x209109) {
        _0x1e4c06['angle'] = _0x38beec + Math['PI'] / 0x2;
    } else if (_0x1e4bd9 !== 0x0 || _0x462bf9 !== 0x0) {
        _0x1e4c06['angle'] = Math['atan2'](_0x462bf9, _0x1e4bd9) + Math['PI'] / 0x2;
    } else if (!_0x4d708e) {
        _0x1e4c06['angle'] = _0x55f22f + Math['PI'] / 0x2;
    }
    const _0x48e452 = _0x1e4c06['x'] + _0x1e4c06['width'] / 0x2 - _0x4cccfb['CAMERA']['width'] / 0x2;
    const _0x46af44 = _0x1e4c06['y'] + _0x1e4c06['height'] / 0x2 - _0x4cccfb['CAMERA']['height'] / 0x2;
    if (_0x4cccfb['CAMERA']['x'] === null || isNaN(_0x4cccfb['CAMERA']['x']) || !isFinite(_0x4cccfb['CAMERA']['x'])) {
        _0x4cccfb['CAMERA']['x'] = _0x48e452;
        _0x4cccfb['CAMERA']['y'] = _0x46af44;
    } else {
        const _0x2f7138 = 0x1 - Math['exp'](-Math['max'](0x0, _0x39e925) * 0x28);
        _0x4cccfb['CAMERA']['x'] += (_0x48e452 - _0x4cccfb['CAMERA']['x']) * _0x2f7138;
        _0x4cccfb['CAMERA']['y'] += (_0x46af44 - _0x4cccfb['CAMERA']['y']) * _0x2f7138;
    }
    for (const _0x4512cc in _0x1b7a80) {
        const _0x2e3ae4 = _0x1b7a80[_0x4512cc];
        if (_0x2e3ae4['renderX'] === undefined) {
            _0x2e3ae4['renderX'] = _0x2e3ae4['x'];
            _0x2e3ae4['renderY'] = _0x2e3ae4['y'];
            _0x2e3ae4['renderAngle'] = _0x2e3ae4['angle'] || 0x0;
        }
        const _0x1ab69f = _0x2e3ae4['x'] + (_0x2e3ae4['vx'] || 0x0) * _0x39e925;
        const _0x581e56 = _0x2e3ae4['y'] + (_0x2e3ae4['vy'] || 0x0) * _0x39e925;
        _0x2e3ae4['x'] = _0x1ab69f;
        _0x2e3ae4['y'] = _0x581e56;
        const _0x3540f3 = 0x1 - Math['exp'](-_0x39e925 * 0x12);
        const _0x288fcb = _0x2e3ae4['x'] - _0x2e3ae4['renderX'], _0x2be2b0 = _0x2e3ae4['y'] - _0x2e3ae4['renderY'];
        const _0x217db3 = Math['sqrt'](_0x288fcb * _0x288fcb + _0x2be2b0 * _0x2be2b0);
        const _0x2b493c = 0xc8;
        if (_0x217db3 > _0x2b493c) {
            _0x2e3ae4['renderX'] = _0x2e3ae4['x'] - _0x288fcb / _0x217db3 * _0x2b493c;
            _0x2e3ae4['renderY'] = _0x2e3ae4['y'] - _0x2be2b0 / _0x217db3 * _0x2b493c;
        }
        _0x2e3ae4['renderX'] += (_0x2e3ae4['x'] - _0x2e3ae4['renderX']) * _0x3540f3;
        _0x2e3ae4['renderY'] += (_0x2e3ae4['y'] - _0x2e3ae4['renderY']) * _0x3540f3;
        let _0x26a243 = (_0x2e3ae4['angle'] || 0x0) - _0x2e3ae4['renderAngle'];
        while (_0x26a243 < -Math['PI'])
            _0x26a243 += Math['PI'] * 0x2;
        while (_0x26a243 > Math['PI'])
            _0x26a243 -= Math['PI'] * 0x2;
        _0x2e3ae4['renderAngle'] += _0x26a243 * (0x1 - Math['exp'](-_0x39e925 * 0x14));
    }
    if (_0x4cccfb['GAME_STATE'] === 'NIGHT') {
        _0x5e19a2 = Math['min'](0.6, _0x5e19a2 + _0x39e925 * 0.5);
    } else {
        _0x5e19a2 = Math['max'](0x0, _0x5e19a2 - _0x39e925 * 0.5);
    }
    if (_0x42c77d > 0x0) {
        if (performance['now']() > _0x500b1) {
            _0x42c77d = Math['max'](0x0, _0x42c77d - _0x39e925 * 0x2);
        }
    }
    _0x4b9707();
    _0x21b209();
}
function _0x80319a(_0x1dc51a, _0x132d82, _0x4719e5, _0x3acecc, _0x68a6f3 = !![]) {
    _0x1dc51a['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x2d2110 = _0x1dc51a['measureText'](_0x132d82)['width'];
    const _0x1730e4 = _0x2d2110 + 0x18;
    const _0x1e9cef = 0x1c;
    _0x1dc51a['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x1dc51a['beginPath']();
    if (_0x1dc51a['roundRect']) {
        _0x1dc51a['roundRect'](_0x4719e5 - _0x1730e4 / 0x2, _0x3acecc - _0x1e9cef, _0x1730e4, _0x1e9cef, 0x6);
    } else {
        _0x1dc51a['rect'](_0x4719e5 - _0x1730e4 / 0x2, _0x3acecc - _0x1e9cef, _0x1730e4, _0x1e9cef);
    }
    _0x1dc51a['fill']();
    if (_0x68a6f3) {
        _0x1dc51a['beginPath']();
        _0x1dc51a['moveTo'](_0x4719e5 - 0x6, _0x3acecc);
        _0x1dc51a['lineTo'](_0x4719e5 + 0x6, _0x3acecc);
        _0x1dc51a['lineTo'](_0x4719e5, _0x3acecc + 0x6);
        _0x1dc51a['fill']();
    }
    _0x1dc51a['fillStyle'] = '#ffffff';
    _0x1dc51a['textAlign'] = 'center';
    _0x1dc51a['textBaseline'] = 'middle';
    _0x1dc51a['fillText'](_0x132d82, _0x4719e5, _0x3acecc - _0x1e9cef / 0x2 + 0x1);
}
function _0x1f2911(_0x40fe6b, _0x8cc603, _0x505876, _0xf9418b) {
    if (!_0x8cc603 || _0x8cc603['length'] === 0x0)
        return;
    let _0x1148b1 = _0xf9418b;
    for (let _0x8df975 = 0x0; _0x8df975 < _0x8cc603['length']; _0x8df975++) {
        _0x80319a(_0x40fe6b, _0x8cc603[_0x8df975]['text'], _0x505876, _0x1148b1, _0x8df975 === 0x0);
        _0x1148b1 -= 0x24;
    }
}
function _0x38c073() {
    if (!_0x4cccfb['SYSTEM']['isReady'])
        return;
    if (_0x4cccfb['MAP']['layers'] && _0x4cccfb['MAP']['layers']['length'] > 0x0 && _0x1e7d20['complete'] && _0x1e7d20['naturalWidth'] > 0x0) {
        if (!_0x4cccfb['MAP']['_prerenderedWithTileset'] || !_0x4cccfb['MAP']['bgChunks'] || _0x4cccfb['MAP']['bgChunks']['length'] === 0x0) {
            _0x1c4335();
        }
    }
    if (!_0x4cccfb['MAP']['bgChunks'] || _0x4cccfb['MAP']['bgChunks']['length'] === 0x0 || !_0x4cccfb['MAP']['bgChunks'][0x0] || _0x4cccfb['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x3399be['fillStyle'] = '#000000';
    _0x3399be['fillRect'](0x0, 0x0, _0x250f5d['width'], _0x250f5d['height']);
    _0x3399be['save']();
    try {
        _0x3399be['scale'](_0x4cccfb['SYSTEM']['viewScale'], _0x4cccfb['SYSTEM']['viewScale']);
        _0x3399be['imageSmoothingEnabled'] = ![];
        const _0x3a92d0 = Math['floor'](_0x4cccfb['CAMERA']['x'] || 0x0);
        const _0x1fcf38 = Math['floor'](_0x4cccfb['CAMERA']['y'] || 0x0);
        const _0x47f9f3 = Math['max'](0x0, Math['floor'](_0x3a92d0 / _0x4cccfb['MAP']['chunkSize']));
        const _0x5b8051 = Math['min'](_0x4cccfb['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x3a92d0 + _0x4cccfb['CAMERA']['width']) / _0x4cccfb['MAP']['chunkSize']));
        const _0xfed308 = Math['max'](0x0, Math['floor'](_0x1fcf38 / _0x4cccfb['MAP']['chunkSize']));
        const _0x443f7d = Math['min'](_0x4cccfb['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x1fcf38 + _0x4cccfb['CAMERA']['height']) / _0x4cccfb['MAP']['chunkSize']));
        for (let _0x3f0f23 = _0xfed308; _0x3f0f23 <= _0x443f7d; _0x3f0f23++)
            for (let _0x2ed3a5 = _0x47f9f3; _0x2ed3a5 <= _0x5b8051; _0x2ed3a5++) {
                const _0x21b116 = _0x2ed3a5 * _0x4cccfb['MAP']['chunkSize'] - _0x3a92d0;
                const _0x3bf6ab = _0x3f0f23 * _0x4cccfb['MAP']['chunkSize'] - _0x1fcf38;
                _0x3399be['drawImage'](_0x4cccfb['MAP']['bgChunks'][_0x3f0f23][_0x2ed3a5], _0x21b116, _0x3bf6ab, _0x4cccfb['MAP']['chunkSize'] + 0x1, _0x4cccfb['MAP']['chunkSize'] + 0x1);
            }
        const _0x4285e6 = _0xd6cbe1('assets/blood\x20splatter.png');
        if (_0x201289 && _0x201289['length'] > 0x0) {
            for (const _0x4e10a0 of _0x201289) {
                const _0x5efb34 = _0x4e10a0['x'] - _0x3a92d0;
                const _0x4ca495 = _0x4e10a0['y'] - _0x1fcf38;
                if (_0x4285e6['complete'] && _0x4285e6['naturalWidth'] > 0x0) {
                    _0x3399be['drawImage'](_0x4285e6, _0x5efb34 - 0x20, _0x4ca495 - 0x20, 0x40, 0x40);
                } else {
                    _0x3399be['fillStyle'] = 'rgba(160,\x200,\x200,\x200.75)';
                    _0x3399be['beginPath']();
                    _0x3399be['arc'](_0x5efb34, _0x4ca495, 0x16, 0x0, Math['PI'] * 0x2);
                    _0x3399be['fill']();
                }
            }
        }
        const _0x1e8078 = _0xd6cbe1('assets/blood.png');
        if (_0x33a5a9 && _0x33a5a9['length'] > 0x0) {
            for (const _0x1b7da9 of _0x33a5a9) {
                const _0x6d72c0 = _0x1b7da9['x'] - _0x3a92d0;
                const _0x329dc6 = _0x1b7da9['y'] - _0x1fcf38;
                if (_0x1e8078['complete'] && _0x1e8078['naturalWidth'] > 0x0) {
                    _0x3399be['drawImage'](_0x1e8078, _0x6d72c0 - 0xc, _0x329dc6 - 0xc, 0x18, 0x18);
                } else {
                    _0x3399be['fillStyle'] = 'rgba(180,\x200,\x200,\x200.8)';
                    _0x3399be['beginPath']();
                    _0x3399be['arc'](_0x6d72c0, _0x329dc6, 0x5, 0x0, Math['PI'] * 0x2);
                    _0x3399be['fill']();
                }
            }
        }
        if (_0x1a4a81['complete'] && _0x1a4a81['naturalWidth'] > 0x0) {
            const _0x3d25a8 = _0x4cccfb['MAP']['tileSize'];
            const _0x5ef774 = _0x3d25a8 * 0xa;
            const _0x528a96 = _0x4cccfb['MAP']['columns'] / 0x2 * _0x3d25a8 - _0x5ef774 / 0x2 - _0x3a92d0;
            const _0x4194b4 = _0x4cccfb['MAP']['rows'] / 0x2 * _0x3d25a8 - _0x5ef774 / 0x2 - _0x1fcf38;
            _0x3399be['imageSmoothingEnabled'] = ![];
            _0x3399be['drawImage'](_0x1a4a81, _0x528a96, _0x4194b4, _0x5ef774, _0x5ef774);
        }
        if (_0x9db204['complete'] && _0x9db204['naturalWidth'] > 0x0) {
            _0x4cccfb['ENTITIES']['forEach'](_0x2b8c61 => {
                if (_0x2b8c61['type'] !== 'table')
                    return;
                _0x3399be['save']();
                _0x3399be['imageSmoothingEnabled'] = ![];
                const _0x2446c8 = _0x9db204['naturalWidth'] >= _0x9db204['naturalHeight'];
                const _0x1b8496 = _0x2b8c61['w'] >= _0x2b8c61['h'];
                if (_0x2446c8 === _0x1b8496) {
                    _0x3399be['drawImage'](_0x9db204, _0x2b8c61['x'] - _0x3a92d0, _0x2b8c61['y'] - _0x1fcf38, _0x2b8c61['w'], _0x2b8c61['h']);
                } else {
                    _0x3399be['translate'](_0x2b8c61['x'] - _0x3a92d0 + _0x2b8c61['w'] / 0x2, _0x2b8c61['y'] - _0x1fcf38 + _0x2b8c61['h'] / 0x2);
                    _0x3399be['rotate'](Math['PI'] / 0x2);
                    _0x3399be['drawImage'](_0x9db204, -_0x2b8c61['h'] / 0x2, -_0x2b8c61['w'] / 0x2, _0x2b8c61['h'], _0x2b8c61['w']);
                }
                _0x3399be['restore']();
            });
        } else {
            _0x4cccfb['ENTITIES']['forEach'](_0x50a745 => {
                if (_0x50a745['type'] !== 'table')
                    return;
                _0x3399be['save']();
                _0x3399be['fillStyle'] = '#6b4423';
                _0x3399be['fillRect'](_0x50a745['x'] - _0x3a92d0, _0x50a745['y'] - _0x1fcf38, _0x50a745['w'], _0x50a745['h']);
                _0x3399be['strokeStyle'] = '#422810';
                _0x3399be['lineWidth'] = 0x3;
                _0x3399be['strokeRect'](_0x50a745['x'] - _0x3a92d0 + 0x1, _0x50a745['y'] - _0x1fcf38 + 0x1, _0x50a745['w'] - 0x2, _0x50a745['h'] - 0x2);
                _0x3399be['fillStyle'] = '#82532a';
                _0x3399be['fillRect'](_0x50a745['x'] - _0x3a92d0 + 0x4, _0x50a745['y'] - _0x1fcf38 + 0x4, _0x50a745['w'] - 0x8, _0x50a745['h'] - 0x8);
                _0x3399be['restore']();
            });
        }
        if (_0x393189) {
            if (_0x4cccfb['MAP']['wallChunks'] && _0x4cccfb['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x2b134d = _0xfed308; _0x2b134d <= _0x443f7d; _0x2b134d++) {
                    for (let _0x51155f = _0x47f9f3; _0x51155f <= _0x5b8051; _0x51155f++) {
                        if (!_0x4cccfb['MAP']['wallChunks'][_0x2b134d] || !_0x4cccfb['MAP']['wallChunks'][_0x2b134d][_0x51155f])
                            continue;
                        const _0x15236e = _0x51155f * _0x4cccfb['MAP']['chunkSize'] - _0x3a92d0;
                        const _0x53c22f = _0x2b134d * _0x4cccfb['MAP']['chunkSize'] - _0x1fcf38;
                        _0x3399be['drawImage'](_0x4cccfb['MAP']['wallChunks'][_0x2b134d][_0x51155f], _0x15236e, _0x53c22f, _0x4cccfb['MAP']['chunkSize'] + 0x1, _0x4cccfb['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x50c1d0 = _0xfed308; _0x50c1d0 <= _0x443f7d; _0x50c1d0++) {
                for (let _0x3f0efb = _0x47f9f3; _0x3f0efb <= _0x5b8051; _0x3f0efb++) {
                    const _0x53127a = _0x3f0efb * _0x4cccfb['MAP']['chunkSize'] - _0x3a92d0;
                    const _0x6d71ad = _0x50c1d0 * _0x4cccfb['MAP']['chunkSize'] - _0x1fcf38;
                    _0x3399be['drawImage'](_0x4cccfb['MAP']['fgChunks'][_0x50c1d0][_0x3f0efb], _0x53127a, _0x6d71ad, _0x4cccfb['MAP']['chunkSize'] + 0x1, _0x4cccfb['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0xc87585 = _0x4cccfb['GAME_STATE'] === 'NIGHT' && (_0x265be6 === 'Skinwalker' || _0x265be6 === 'Blackmailer') && !_0x1e4c06['isDead'];
        const _0xb833bc = _0x1e4c06['x'] - _0x3a92d0 + _0x1e4c06['width'] / 0x2;
        const _0x1f47d9 = _0x1e4c06['y'] - _0x1fcf38 + _0x1e4c06['height'] / 0x2;
        const _0x4ea10b = _0x1e4c06['width'] * _0x1e4c06['scale'] * 1.3;
        const _0x1ac8ba = _0x1e4c06['height'] * _0x1e4c06['scale'] * 1.3;
        const _0x1cc7f6 = _0xd6cbe1('assets/arrow.png');
        const _0x214aab = _0xd6cbe1('assets/tape.png');
        for (const _0x1850af in _0x1b7a80) {
            const _0x2517e1 = _0x1b7a80[_0x1850af];
            if (_0x2517e1['isDead'])
                continue;
            const _0x1a6788 = parseInt(_0x1850af);
            const _0x39cb0a = (_0x2517e1['renderX'] ?? _0x2517e1['x']) - _0x3a92d0 + _0x2517e1['width'] / 0x2;
            const _0x1f33f6 = (_0x2517e1['renderY'] ?? _0x2517e1['y']) - _0x1fcf38 + _0x2517e1['height'] / 0x2;
            const _0x18a5d0 = Math['min'](0x2, Math['max'](0.3, _0x2517e1['scale'] || 0x1));
            const _0x1b5247 = _0x2517e1['width'] * _0x18a5d0 * 1.3;
            const _0x2cde62 = _0x2517e1['height'] * _0x18a5d0 * 1.3;
            _0x3399be['save']();
            try {
                _0x3399be['translate'](_0x39cb0a, _0x1f33f6);
                _0x3399be['rotate'](_0x2517e1['renderAngle'] ?? 0x0);
                if (_0x2517e1['isDark'])
                    _0x3399be['filter'] = 'brightness(0)';
                _0x5342f8(_0x3399be, _0x2517e1['body'], _0x2517e1['eyes'], _0x1b5247, _0x2cde62);
                if (_0x18335b['has'](_0x1a6788) && _0x2296e2['complete'] && _0x2296e2['naturalWidth'] > 0x0) {
                    _0x3399be['drawImage'](_0x2296e2, -_0x1b5247 / 0x2, -_0x2cde62 / 0x2, _0x1b5247, _0x2cde62);
                }
                if (_0x2517e1['hasArrow'] && _0x4cccfb['GAME_STATE'] === 'NIGHT' && _0x1cc7f6['complete'] && _0x1cc7f6['naturalWidth'] > 0x0) {
                    _0x3399be['drawImage'](_0x1cc7f6, -_0x1b5247 / 0x2, -_0x2cde62 / 0x2, _0x1b5247, _0x2cde62);
                }
                if ((_0x2517e1['isBlackmailed'] || _0x366df8['has'](_0x1a6788)) && _0x214aab['complete'] && _0x214aab['naturalWidth'] > 0x0) {
                    _0x3399be['drawImage'](_0x214aab, -_0x1b5247 / 0x2, -_0x2cde62 / 0x2, _0x1b5247, _0x2cde62);
                }
                if (_0x2517e1['isDark'])
                    _0x3399be['filter'] = 'none';
            } finally {
                _0x3399be['restore']();
            }
            if (!_0x493ff9((_0x2517e1['renderX'] ?? _0x2517e1['x']) + _0x2517e1['width'] / 0x2, (_0x2517e1['renderY'] ?? _0x2517e1['y']) + _0x2517e1['height'] / 0x2)) {
                _0x3399be['textAlign'] = 'center';
                _0x3399be['lineJoin'] = 'round';
                _0x3399be['lineWidth'] = 0x3;
                _0x3399be['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x3399be['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x1797c9 = '#ffffff';
                if (_0x2517e1['isBlackmailed'] || _0x366df8['has'](_0x1a6788)) {
                    _0x1797c9 = '#ff4444';
                } else if (_0x18335b['has'](_0x1a6788)) {
                    _0x1797c9 = '#cc88ff';
                }
                _0x3399be['fillStyle'] = _0x1797c9;
                const _0x3a13a2 = _0x2517e1['isDark'] ? '???' : _0x2517e1['name'] + (_0x2517e1['isOwner'] ? '\x20[🗝️]' : '');
                _0x3399be['strokeText'](_0x3a13a2, _0x39cb0a, _0x1f33f6 - _0x2cde62 / 0x2 - 0x10);
                _0x3399be['fillText'](_0x3a13a2, _0x39cb0a, _0x1f33f6 - _0x2cde62 / 0x2 - 0x10);
            }
        }
        if (!_0x1e4c06['isDead']) {
            _0x3399be['save']();
            try {
                _0x3399be['translate'](_0xb833bc, _0x1f47d9);
                _0x3399be['rotate'](_0x1e4c06['angle']);
                if (_0xc87585)
                    _0x3399be['filter'] = 'brightness(0)';
                _0x5342f8(_0x3399be, _0x3ced8c, _0x362649, _0x4ea10b, _0x1ac8ba);
                if (_0x18335b['has'](_0x4590c0) && _0x2296e2['complete'] && _0x2296e2['naturalWidth'] > 0x0) {
                    _0x3399be['drawImage'](_0x2296e2, -_0x4ea10b / 0x2, -_0x1ac8ba / 0x2, _0x4ea10b, _0x1ac8ba);
                }
                if (_0x1e4c06['hasArrow'] && _0x4cccfb['GAME_STATE'] === 'NIGHT' && _0x1cc7f6['complete'] && _0x1cc7f6['naturalWidth'] > 0x0) {
                    _0x3399be['drawImage'](_0x1cc7f6, -_0x4ea10b / 0x2, -_0x1ac8ba / 0x2, _0x4ea10b, _0x1ac8ba);
                }
                if (_0x366df8['has'](_0x4590c0) && _0x214aab['complete'] && _0x214aab['naturalWidth'] > 0x0) {
                    _0x3399be['drawImage'](_0x214aab, -_0x4ea10b / 0x2, -_0x1ac8ba / 0x2, _0x4ea10b, _0x1ac8ba);
                }
                if (_0xc87585)
                    _0x3399be['filter'] = 'none';
            } finally {
                _0x3399be['restore']();
            }
            if (!_0x493ff9(_0x1e4c06['x'] + _0x1e4c06['width'] / 0x2, _0x1e4c06['y'] + _0x1e4c06['height'] / 0x2)) {
                _0x3399be['textAlign'] = 'center';
                _0x3399be['lineJoin'] = 'round';
                _0x3399be['lineWidth'] = 0x3;
                _0x3399be['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x3399be['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0xd0fda2 = '#ffffff';
                if (_0x366df8['has'](_0x4590c0)) {
                    _0xd0fda2 = '#ff4444';
                } else if (_0x18335b['has'](_0x4590c0)) {
                    _0xd0fda2 = '#cc88ff';
                }
                _0x3399be['fillStyle'] = _0xd0fda2;
                const _0x2401b1 = _0xc87585 ? '???' : _0xf15527 + (_0x3a1069 ? '\x20[🗝️]' : '');
                _0x3399be['strokeText'](_0x2401b1, _0xb833bc, _0x1f47d9 - _0x1ac8ba / 0x2 - 0x10);
                _0x3399be['fillText'](_0x2401b1, _0xb833bc, _0x1f47d9 - _0x1ac8ba / 0x2 - 0x10);
            }
        }
        if (_0x4cccfb['MAP']['wallChunks'] && _0x4cccfb['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x283fd4 = _0xfed308; _0x283fd4 <= _0x443f7d; _0x283fd4++)
                for (let _0x969f58 = _0x47f9f3; _0x969f58 <= _0x5b8051; _0x969f58++) {
                    if (!_0x4cccfb['MAP']['wallChunks'][_0x283fd4] || !_0x4cccfb['MAP']['wallChunks'][_0x283fd4][_0x969f58])
                        continue;
                    const _0x3c452c = _0x969f58 * _0x4cccfb['MAP']['chunkSize'] - _0x3a92d0;
                    const _0x5305f1 = _0x283fd4 * _0x4cccfb['MAP']['chunkSize'] - _0x1fcf38;
                    _0x3399be['drawImage'](_0x4cccfb['MAP']['wallChunks'][_0x283fd4][_0x969f58], _0x3c452c, _0x5305f1, _0x4cccfb['MAP']['chunkSize'] + 0x1, _0x4cccfb['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x9d533f of _0x4cccfb['ENTITIES']) {
            if (_0x9d533f['type'] !== 'npc')
                continue;
            const _0x6be10f = _0x9d533f['x'] - _0x3a92d0 + _0x9d533f['w'] / 0x2;
            const _0x15957c = _0x9d533f['y'] - _0x1fcf38 + _0x9d533f['h'] / 0x2;
            const _0x431672 = _0x9d533f['w'];
            const _0x3fba31 = _0x9d533f['h'];
            _0x3399be['save']();
            _0x3399be['translate'](_0x6be10f, _0x15957c);
            _0x3399be['rotate'](_0x9d533f['angle'] !== undefined ? _0x9d533f['angle'] : 0x0);
            _0x5342f8(_0x3399be, _0x9d533f['body'] || 'yanito932.png', _0x9d533f['eyes'], _0x431672, _0x3fba31);
            _0x3399be['restore']();
            _0x3399be['textAlign'] = 'center';
            _0x3399be['lineJoin'] = 'round';
            _0x3399be['lineWidth'] = 0x3;
            _0x3399be['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x3399be['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
            _0x3399be['fillStyle'] = '#aaaaaa';
            _0x3399be['strokeText'](_0x9d533f['name'] || 'NPC', _0x6be10f, _0x15957c - _0x3fba31 / 0x2 - 0x10);
            _0x3399be['fillText'](_0x9d533f['name'] || 'NPC', _0x6be10f, _0x15957c - _0x3fba31 / 0x2 - 0x10);
        }
        if (_0x1e4c06['isDead']) {
            for (const _0x40988a in _0x1b7a80) {
                const _0x5f172c = _0x1b7a80[_0x40988a];
                if (!_0x5f172c['isDead'])
                    continue;
                const _0x2344d4 = (_0x5f172c['renderX'] ?? _0x5f172c['x']) - _0x3a92d0 + _0x5f172c['width'] / 0x2;
                const _0x91b081 = (_0x5f172c['renderY'] ?? _0x5f172c['y']) - _0x1fcf38 + _0x5f172c['height'] / 0x2;
                const _0x311a41 = _0x5f172c['width'] * (_0x5f172c['scale'] || 0x1) * 1.3;
                const _0x19d45b = _0x5f172c['height'] * (_0x5f172c['scale'] || 0x1) * 1.3;
                _0x3399be['save']();
                try {
                    _0x3399be['translate'](_0x2344d4, _0x91b081);
                    _0x3399be['rotate'](_0x5f172c['renderAngle'] ?? 0x0);
                    _0x3399be['globalAlpha'] = 0.3;
                    _0x5342f8(_0x3399be, _0x5f172c['body'], _0x5f172c['eyes'], _0x311a41, _0x19d45b);
                } finally {
                    _0x3399be['restore']();
                }
                if (!_0x493ff9((_0x5f172c['renderX'] ?? _0x5f172c['x']) + _0x5f172c['width'] / 0x2, (_0x5f172c['renderY'] ?? _0x5f172c['y']) + _0x5f172c['height'] / 0x2)) {
                    _0x3399be['save']();
                    _0x3399be['globalAlpha'] = 0.3;
                    _0x3399be['textAlign'] = 'center';
                    _0x3399be['lineJoin'] = 'round';
                    _0x3399be['lineWidth'] = 0x3;
                    _0x3399be['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x3399be['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                    _0x3399be['fillStyle'] = '#ffffff';
                    const _0x264273 = _0x5f172c['name'] + (_0x5f172c['isOwner'] ? '\x20[🗝️]' : '');
                    _0x3399be['strokeText'](_0x264273, _0x2344d4, _0x91b081 - _0x19d45b / 0x2 - 0x10);
                    _0x3399be['fillText'](_0x264273, _0x2344d4, _0x91b081 - _0x19d45b / 0x2 - 0x10);
                    _0x3399be['restore']();
                }
            }
            _0x3399be['save']();
            try {
                _0x3399be['translate'](_0xb833bc, _0x1f47d9);
                _0x3399be['rotate'](_0x1e4c06['angle']);
                _0x3399be['globalAlpha'] = 0.3;
                _0x5342f8(_0x3399be, _0x3ced8c, _0x362649, _0x4ea10b, _0x1ac8ba);
            } finally {
                _0x3399be['restore']();
            }
            if (!_0x493ff9(_0x1e4c06['x'] + _0x1e4c06['width'] / 0x2, _0x1e4c06['y'] + _0x1e4c06['height'] / 0x2)) {
                _0x3399be['save']();
                _0x3399be['globalAlpha'] = 0.3;
                _0x3399be['textAlign'] = 'center';
                _0x3399be['lineJoin'] = 'round';
                _0x3399be['lineWidth'] = 0x3;
                _0x3399be['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x3399be['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                _0x3399be['fillStyle'] = '#ffffff';
                const _0x3a8be5 = _0xf15527 + (_0x3a1069 ? '\x20[🗝️]' : '');
                _0x3399be['strokeText'](_0x3a8be5, _0xb833bc, _0x1f47d9 - _0x1ac8ba / 0x2 - 0x10);
                _0x3399be['fillText'](_0x3a8be5, _0xb833bc, _0x1f47d9 - _0x1ac8ba / 0x2 - 0x10);
                _0x3399be['restore']();
            }
        }
        for (let _0x4f6377 = _0xfed308; _0x4f6377 <= _0x443f7d; _0x4f6377++)
            for (let _0x4ce5d5 = _0x47f9f3; _0x4ce5d5 <= _0x5b8051; _0x4ce5d5++) {
                const _0x172404 = _0x4ce5d5 * _0x4cccfb['MAP']['chunkSize'] - _0x3a92d0;
                const _0x44ab54 = _0x4f6377 * _0x4cccfb['MAP']['chunkSize'] - _0x1fcf38;
                _0x3399be['drawImage'](_0x4cccfb['MAP']['fgChunks'][_0x4f6377][_0x4ce5d5], _0x172404, _0x44ab54, _0x4cccfb['MAP']['chunkSize'] + 0x1, _0x4cccfb['MAP']['chunkSize'] + 0x1);
            }
        if (_0x4cccfb['EDITOR']['enabled'] && _0x4cccfb['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x563eea = _0x4cccfb['INPUTS']['mouseX'] / _0x4cccfb['SYSTEM']['viewScale'] + _0x4cccfb['CAMERA']['x'];
            const _0x36abe8 = _0x4cccfb['INPUTS']['mouseY'] / _0x4cccfb['SYSTEM']['viewScale'] + _0x4cccfb['CAMERA']['y'];
            const _0x53c5a6 = Math['floor'](_0x563eea / _0x4cccfb['MAP']['tileSize']);
            const _0x5115a6 = Math['floor'](_0x36abe8 / _0x4cccfb['MAP']['tileSize']);
            if (_0x53c5a6 >= 0x0 && _0x53c5a6 < _0x4cccfb['MAP']['columns'] && _0x5115a6 >= 0x0 && _0x5115a6 < _0x4cccfb['MAP']['rows']) {
                const _0x42d884 = _0x53c5a6 * _0x4cccfb['MAP']['tileSize'] - _0x3a92d0;
                const _0x43aa00 = _0x5115a6 * _0x4cccfb['MAP']['tileSize'] - _0x1fcf38;
                _0x3399be['save']();
                _0x3399be['globalAlpha'] = 0.5;
                if (_0x4cccfb['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x32be35 = _0x4cccfb['EDITOR']['selectedTileGid'] - 0x1;
                    _0x3399be['drawImage'](_0x1e7d20, _0x32be35 % _0x4cccfb['MAP']['tilesetCols'] * _0x4cccfb['MAP']['tileSize'], Math['floor'](_0x32be35 / _0x4cccfb['MAP']['tilesetCols']) * _0x4cccfb['MAP']['tileSize'], _0x4cccfb['MAP']['tileSize'], _0x4cccfb['MAP']['tileSize'], _0x42d884, _0x43aa00, _0x4cccfb['MAP']['tileSize'], _0x4cccfb['MAP']['tileSize']);
                } else {
                    _0x3399be['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x3399be['fillRect'](_0x42d884, _0x43aa00, _0x4cccfb['MAP']['tileSize'], _0x4cccfb['MAP']['tileSize']);
                }
                _0x3399be['restore']();
            }
        }
        _0x5dc0d3(_0x3399be, _0x3a92d0, _0x1fcf38);
        if (_0x5e19a2 > 0x0) {
            _0x3399be['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x5e19a2 + ')';
            _0x3399be['fillRect'](0x0, 0x0, _0x4cccfb['CAMERA']['width'], _0x4cccfb['CAMERA']['height']);
        }
        for (const _0xe574d5 in _0x1b7a80) {
            const _0x217053 = _0x1b7a80[_0xe574d5];
            if (_0x217053['isDead'] && !_0x1e4c06['isDead'])
                continue;
            const _0x48622b = (_0x217053['renderX'] ?? _0x217053['x']) - _0x3a92d0 + _0x217053['width'] / 0x2;
            const _0xbff179 = (_0x217053['renderY'] ?? _0x217053['y']) - _0x1fcf38 + _0x217053['height'] / 0x2;
            _0x1f2911(_0x3399be, _0x217053['chats'], _0x48622b, _0xbff179 - _0x217053['height'] / 0x2 - 0x20);
        }
        _0x1f2911(_0x3399be, _0x1e4c06['chats'], _0xb833bc, _0x1f47d9 - _0x1e4c06['height'] / 0x2 - 0x20);
        if (_0x42c77d > 0x0) {
            _0x3399be['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x42c77d + ')';
            _0x3399be['fillRect'](0x0, 0x0, _0x4cccfb['CAMERA']['width'], _0x4cccfb['CAMERA']['height']);
        }
    } finally {
        _0x3399be['restore']();
    }
}
function _0x3e8ec5(_0x3ba08e) {
    if (!_0x4cccfb['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x3e8ec5);
    let _0x110aaa = (_0x3ba08e - _0x4cccfb['SYSTEM']['lastTime']) / 0x3e8;
    _0x4cccfb['SYSTEM']['lastTime'] = _0x3ba08e;
    if (_0x110aaa > 0.1)
        _0x110aaa = 0.1;
    if (_0x110aaa < 0x0 || isNaN(_0x110aaa))
        _0x110aaa = 0.016;
    if (_0x393189) {
        _0x12ebbd(_0x110aaa);
        _0x38c073();
        return;
    }
    if (!_0x4590c0)
        return;
    _0x518b0c(_0x110aaa);
    _0x45d337['tick'](_0x3ba08e);
    _0x38c073();
}
function _0x1c4335() {
    if (_0x1e7d20['complete'] && _0x1e7d20['naturalWidth'] > 0x0) {
        _0x4cccfb['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x5189d8 = Math['ceil'](_0x4cccfb['MAP']['columns'] * _0x4cccfb['MAP']['tileSize'] / _0x4cccfb['MAP']['chunkSize']);
    const _0x7c09e4 = Math['ceil'](_0x4cccfb['MAP']['rows'] * _0x4cccfb['MAP']['tileSize'] / _0x4cccfb['MAP']['chunkSize']);
    _0x4cccfb['MAP']['bgChunks'] = [];
    _0x4cccfb['MAP']['fgChunks'] = [];
    _0x4cccfb['MAP']['wallChunks'] = [];
    for (let _0x22c867 = 0x0; _0x22c867 < _0x7c09e4; _0x22c867++) {
        _0x4cccfb['MAP']['bgChunks'][_0x22c867] = [];
        _0x4cccfb['MAP']['fgChunks'][_0x22c867] = [];
        _0x4cccfb['MAP']['wallChunks'][_0x22c867] = [];
        for (let _0x15ab64 = 0x0; _0x15ab64 < _0x5189d8; _0x15ab64++) {
            const _0x41a305 = document['createElement']('canvas');
            _0x41a305['width'] = _0x41a305['height'] = _0x4cccfb['MAP']['chunkSize'];
            const _0x22c369 = document['createElement']('canvas');
            _0x22c369['width'] = _0x22c369['height'] = _0x4cccfb['MAP']['chunkSize'];
            const _0x836b7f = document['createElement']('canvas');
            _0x836b7f['width'] = _0x836b7f['height'] = _0x4cccfb['MAP']['chunkSize'];
            _0x4cccfb['MAP']['bgChunks'][_0x22c867][_0x15ab64] = _0x41a305;
            _0x4cccfb['MAP']['fgChunks'][_0x22c867][_0x15ab64] = _0x22c369;
            _0x4cccfb['MAP']['wallChunks'][_0x22c867][_0x15ab64] = _0x836b7f;
            _0x224453(_0x15ab64, _0x22c867);
        }
    }
}
function _0x224453(_0xbd0bd4, _0x4dd53e) {
    const _0x5b332c = _0x4cccfb['MAP']['bgChunks'][_0x4dd53e][_0xbd0bd4]['getContext']('2d', { 'alpha': !![] });
    const _0x3f4521 = _0x4cccfb['MAP']['fgChunks'][_0x4dd53e][_0xbd0bd4]['getContext']('2d', { 'alpha': !![] });
    const _0x3e7f45 = _0x4cccfb['MAP']['wallChunks'][_0x4dd53e] && _0x4cccfb['MAP']['wallChunks'][_0x4dd53e][_0xbd0bd4] ? _0x4cccfb['MAP']['wallChunks'][_0x4dd53e][_0xbd0bd4]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x5b332c['imageSmoothingEnabled'] = _0x3f4521['imageSmoothingEnabled'] = ![];
    if (_0x3e7f45)
        _0x3e7f45['imageSmoothingEnabled'] = ![];
    _0x5b332c['clearRect'](0x0, 0x0, _0x4cccfb['MAP']['chunkSize'], _0x4cccfb['MAP']['chunkSize']);
    _0x3f4521['clearRect'](0x0, 0x0, _0x4cccfb['MAP']['chunkSize'], _0x4cccfb['MAP']['chunkSize']);
    if (_0x3e7f45)
        _0x3e7f45['clearRect'](0x0, 0x0, _0x4cccfb['MAP']['chunkSize'], _0x4cccfb['MAP']['chunkSize']);
    const _0x485a81 = Math['floor'](_0xbd0bd4 * _0x4cccfb['MAP']['chunkSize'] / _0x4cccfb['MAP']['tileSize']);
    const _0x3b168d = Math['ceil']((_0xbd0bd4 + 0x1) * _0x4cccfb['MAP']['chunkSize'] / _0x4cccfb['MAP']['tileSize']);
    const _0x5c3e11 = Math['floor'](_0x4dd53e * _0x4cccfb['MAP']['chunkSize'] / _0x4cccfb['MAP']['tileSize']);
    const _0x2ad901 = Math['ceil']((_0x4dd53e + 0x1) * _0x4cccfb['MAP']['chunkSize'] / _0x4cccfb['MAP']['tileSize']);
    const _0x29f655 = 0.5;
    const _0x5b2837 = _0x4cccfb['MAP']['tileSize'] - _0x29f655 * 0x2;
    _0x4cccfb['MAP']['layers']['forEach'](_0x3dc0ff => {
        const _0x19b8d4 = _0x3dc0ff['name'] === 'walls';
        const _0xb63466 = _0x3dc0ff['name'] === 'trees' ? _0x3f4521 : _0x19b8d4 ? _0x3e7f45 || _0x5b332c : _0x5b332c;
        for (let _0x5e5d1b = Math['max'](0x0, _0x5c3e11); _0x5e5d1b < Math['min'](_0x4cccfb['MAP']['rows'], _0x2ad901); _0x5e5d1b++) {
            for (let _0x459a66 = Math['max'](0x0, _0x485a81); _0x459a66 < Math['min'](_0x4cccfb['MAP']['columns'], _0x3b168d); _0x459a66++) {
                let _0x25fd44 = _0x3dc0ff['data'][_0x5e5d1b * _0x4cccfb['MAP']['columns'] + _0x459a66];
                if (_0x3dc0ff['name'] === 'floor2' && _0x4cccfb['MAP']['doors'] && _0x4cccfb['MAP']['doors'][_0x5e5d1b * _0x4cccfb['MAP']['columns'] + _0x459a66]) {
                    _0x25fd44 = 0x2;
                }
                if (_0x25fd44 > 0x0) {
                    const _0x2d6443 = _0x25fd44 - 0x1;
                    const _0x593b62 = _0x2d6443 % _0x4cccfb['MAP']['tilesetCols'] * _0x4cccfb['MAP']['tileSize'] + _0x29f655;
                    const _0x515952 = Math['floor'](_0x2d6443 / _0x4cccfb['MAP']['tilesetCols']) * _0x4cccfb['MAP']['tileSize'] + _0x29f655;
                    const _0xc903ea = _0x459a66 * _0x4cccfb['MAP']['tileSize'] - _0xbd0bd4 * _0x4cccfb['MAP']['chunkSize'];
                    const _0x4fb256 = _0x5e5d1b * _0x4cccfb['MAP']['tileSize'] - _0x4dd53e * _0x4cccfb['MAP']['chunkSize'];
                    if (_0x25fd44 === 0x4) {
                        const _0x34e289 = 0x1;
                        const _0x507b63 = _0x34e289 % _0x4cccfb['MAP']['tilesetCols'] * _0x4cccfb['MAP']['tileSize'] + _0x29f655;
                        const _0x56fa17 = Math['floor'](_0x34e289 / _0x4cccfb['MAP']['tilesetCols']) * _0x4cccfb['MAP']['tileSize'] + _0x29f655;
                        _0x5b332c['drawImage'](_0x1e7d20, _0x507b63, _0x56fa17, _0x5b2837, _0x5b2837, _0xc903ea, _0x4fb256, _0x4cccfb['MAP']['tileSize'], _0x4cccfb['MAP']['tileSize']);
                        let _0x3367f8 = _0x4cccfb['MAP']['doors'] ? _0x4cccfb['MAP']['doors'][_0x5e5d1b * _0x4cccfb['MAP']['columns'] + _0x459a66] : null;
                        if (!_0x3367f8) {
                            const _0x4c2ab6 = _0x4cccfb['MAP']['layers']['find'](_0x5f1939 => _0x5f1939['name'] === 'walls');
                            const _0x38b49e = _0x5e5d1b > 0x0 && _0x4c2ab6 && _0x4c2ab6['data'][(_0x5e5d1b - 0x1) * _0x4cccfb['MAP']['columns'] + _0x459a66] > 0x0;
                            const _0x1564a3 = _0x5e5d1b < _0x4cccfb['MAP']['rows'] - 0x1 && _0x4c2ab6 && _0x4c2ab6['data'][(_0x5e5d1b + 0x1) * _0x4cccfb['MAP']['columns'] + _0x459a66] > 0x0;
                            const _0x3a9d5c = _0x459a66 > 0x0 && _0x4c2ab6 && _0x4c2ab6['data'][_0x5e5d1b * _0x4cccfb['MAP']['columns'] + _0x459a66 - 0x1] > 0x0;
                            const _0x52faf3 = _0x459a66 < _0x4cccfb['MAP']['columns'] - 0x1 && _0x4c2ab6 && _0x4c2ab6['data'][_0x5e5d1b * _0x4cccfb['MAP']['columns'] + _0x459a66 + 0x1] > 0x0;
                            if (_0x3a9d5c && _0x52faf3)
                                _0x3367f8 = _0x5e5d1b < _0x4cccfb['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x38b49e && _0x1564a3)
                                _0x3367f8 = _0x459a66 < _0x4cccfb['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x155b06 = 0x0;
                        if (_0x3367f8 === 'bottom')
                            _0x155b06 = Math['PI'] / 0x2;
                        else if (_0x3367f8 === 'left')
                            _0x155b06 = Math['PI'];
                        else if (_0x3367f8 === 'top')
                            _0x155b06 = -Math['PI'] / 0x2;
                        else if (_0x3367f8 === 'right')
                            _0x155b06 = 0x0;
                        if (_0x155b06 !== 0x0) {
                            _0xb63466['save']();
                            _0xb63466['translate'](_0xc903ea + _0x4cccfb['MAP']['tileSize'] / 0x2, _0x4fb256 + _0x4cccfb['MAP']['tileSize'] / 0x2);
                            _0xb63466['rotate'](_0x155b06);
                            _0xb63466['drawImage'](_0x1e7d20, _0x593b62, _0x515952, _0x5b2837, _0x5b2837, -_0x4cccfb['MAP']['tileSize'] / 0x2, -_0x4cccfb['MAP']['tileSize'] / 0x2, _0x4cccfb['MAP']['tileSize'], _0x4cccfb['MAP']['tileSize']);
                            _0xb63466['restore']();
                        } else {
                            _0xb63466['drawImage'](_0x1e7d20, _0x593b62, _0x515952, _0x5b2837, _0x5b2837, _0xc903ea, _0x4fb256, _0x4cccfb['MAP']['tileSize'], _0x4cccfb['MAP']['tileSize']);
                        }
                    } else {
                        _0xb63466['drawImage'](_0x1e7d20, _0x593b62, _0x515952, _0x5b2837, _0x5b2837, _0xc903ea, _0x4fb256, _0x4cccfb['MAP']['tileSize'], _0x4cccfb['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x2ee812() {
    _0x1e7d20['crossOrigin'] = 'Anonymous';
    _0x1e7d20['onload'] = () => {
        _0x4cccfb['MAP']['tilesetCols'] = 0x3;
        if (_0x4cccfb['MAP']['columns'] > 0x0 && _0x4cccfb['MAP']['layers'] && _0x4cccfb['MAP']['layers']['length'] > 0x0) {
            _0x1c4335();
        }
        _0xbf84fb();
    };
    _0x1e7d20['onerror'] = () => {
        _0x4cccfb['MAP']['tilesetCols'] = 0x1;
        _0xbf84fb();
    };
    _0x1e7d20['src'] = 'assets/tilesheet.png';
    _0x1a4a81['crossOrigin'] = 'Anonymous';
    _0x1a4a81['onload'] = _0xbf84fb;
    _0x1a4a81['onerror'] = () => {
        _0xbf84fb();
    };
    _0x1a4a81['src'] = 'assets/center.png';
    _0x9db204['crossOrigin'] = 'Anonymous';
    _0x9db204['onload'] = _0xbf84fb;
    _0x9db204['onerror'] = () => {
        _0xbf84fb();
    };
    _0x9db204['src'] = 'assets/table.png';
}
function _0xbf84fb() {
    _0x4cccfb['SYSTEM']['assetsLoaded']++;
    if (_0x4cccfb['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x4cccfb['MAP']['columns'] > 0x0 && _0x4cccfb['MAP']['layers'] && _0x4cccfb['MAP']['layers']['length'] > 0x0) {
            _0x1c4335();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x1b4632();
    }
}
function _0x2e5272(_0x41a2d5, _0x2403b5) {
    if (!_0x3a1069 || !_0x1932ea)
        return;
    const _0x51e9ae = _0x41a2d5 / _0x4cccfb['SYSTEM']['viewScale'] + _0x4cccfb['CAMERA']['x'];
    const _0x359d45 = _0x2403b5 / _0x4cccfb['SYSTEM']['viewScale'] + _0x4cccfb['CAMERA']['y'];
    const _0x2f1961 = Math['floor'](_0x51e9ae / _0x4cccfb['MAP']['tileSize']);
    const _0x30eea8 = Math['floor'](_0x359d45 / _0x4cccfb['MAP']['tileSize']);
    if (_0x2f1961 >= 0x0 && _0x2f1961 < _0x4cccfb['MAP']['columns'] && _0x30eea8 >= 0x0 && _0x30eea8 < _0x4cccfb['MAP']['rows'])
        _0x1932ea['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x4cccfb['EDITOR']['selectedLayer'],
            'col': _0x2f1961,
            'row': _0x30eea8,
            'gid': _0x4cccfb['EDITOR']['selectedTileGid']
        }));
}
function _0xebecca() {
    const _0x43d911 = document['getElementById']('palette');
    if (!_0x43d911 || _0x43d911['children']['length'] > 0x0)
        return;
    const _0x11b3f2 = 0x40;
    const _0x279442 = _0x1e7d20;
    const _0x1f3304 = document['createElement']('div');
    _0x1f3304['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x4bae45 = document['createElement']('canvas');
    _0x4bae45['width'] = 0xc0;
    _0x4bae45['height'] = 0xa0;
    _0x4bae45['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x1f3304['appendChild'](_0x4bae45);
    const _0x5af47d = document['createElement']('div');
    _0x5af47d['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x1f3304['appendChild'](_0x5af47d);
    let _0x1e4c32 = 0x0, _0x1ee1dc = 0x0;
    let _0x217262 = ![], _0x5eca83 = 0x0, _0x1467b3 = 0x0, _0x5ac96c = 0x0, _0x1c3f6c = 0x0;
    function _0x1212da() {
        const _0x471f31 = _0x4bae45['getContext']('2d');
        _0x471f31['clearRect'](0x0, 0x0, _0x4bae45['width'], _0x4bae45['height']);
        _0x471f31['imageSmoothingEnabled'] = ![];
        if (_0x279442['complete'] && _0x279442['naturalWidth'] > 0x0) {
            _0x471f31['drawImage'](_0x279442, _0x1e4c32, _0x1ee1dc, _0x4bae45['width'], _0x4bae45['height'], 0x0, 0x0, _0x4bae45['width'], _0x4bae45['height']);
        }
        _0x471f31['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x471f31['lineWidth'] = 0x1;
        const _0x14ffba = Math['floor'](_0x1e4c32 / _0x11b3f2);
        const _0x2630cd = Math['floor'](_0x1ee1dc / _0x11b3f2);
        for (let _0x1d3b6f = _0x14ffba; _0x1d3b6f <= _0x14ffba + Math['ceil'](_0x4bae45['width'] / _0x11b3f2) + 0x1; _0x1d3b6f++) {
            const _0xd71897 = _0x1d3b6f * _0x11b3f2 - _0x1e4c32;
            _0x471f31['beginPath']();
            _0x471f31['moveTo'](_0xd71897, 0x0);
            _0x471f31['lineTo'](_0xd71897, _0x4bae45['height']);
            _0x471f31['stroke']();
        }
        for (let _0x2e9e36 = _0x2630cd; _0x2e9e36 <= _0x2630cd + Math['ceil'](_0x4bae45['height'] / _0x11b3f2) + 0x1; _0x2e9e36++) {
            const _0x308421 = _0x2e9e36 * _0x11b3f2 - _0x1ee1dc;
            _0x471f31['beginPath']();
            _0x471f31['moveTo'](0x0, _0x308421);
            _0x471f31['lineTo'](_0x4bae45['width'], _0x308421);
            _0x471f31['stroke']();
        }
    }
    function _0x257a8d() {
        const _0x474ea8 = Math['max'](0x1, Math['ceil'](_0x279442['naturalWidth'] / _0x11b3f2));
        const _0xe9c71f = _0x4cccfb['EDITOR']['selectedTileGid'];
        if (_0xe9c71f <= 0x0) {
            _0x5af47d['style']['display'] = 'none';
            return;
        }
        const _0x113d6e = _0xe9c71f - 0x1;
        const _0x1daeee = _0x113d6e % _0x474ea8;
        const _0x29b181 = Math['floor'](_0x113d6e / _0x474ea8);
        const _0x46568c = _0x1daeee * _0x11b3f2 - _0x1e4c32;
        const _0x31daf2 = _0x29b181 * _0x11b3f2 - _0x1ee1dc;
        _0x5af47d['style']['display'] = 'block';
        _0x5af47d['style']['left'] = _0x46568c + 'px';
        _0x5af47d['style']['top'] = _0x31daf2 + 'px';
    }
    _0x279442['onload'] = () => {
        _0x1212da();
        _0x257a8d();
    };
    if (_0x279442['complete'] && _0x279442['naturalWidth'] > 0x0) {
        _0x1212da();
        _0x257a8d();
    }
    _0x1f3304['addEventListener']('mousedown', _0x44b3a0 => {
        if (_0x44b3a0['button'] === 0x0) {
            _0x217262 = !![];
            _0x5eca83 = _0x44b3a0['clientX'];
            _0x1467b3 = _0x44b3a0['clientY'];
            _0x5ac96c = _0x1e4c32;
            _0x1c3f6c = _0x1ee1dc;
            _0x1f3304['style']['cursor'] = 'grabbing';
            _0x44b3a0['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x205d9b => {
        if (!_0x217262)
            return;
        const _0x27bc7d = _0x5eca83 - _0x205d9b['clientX'];
        const _0xe5f8f8 = _0x1467b3 - _0x205d9b['clientY'];
        const _0x47cf04 = Math['max'](0x0, _0x279442['naturalWidth'] - _0x4bae45['width']);
        const _0x114306 = Math['max'](0x0, _0x279442['naturalHeight'] - _0x4bae45['height']);
        _0x1e4c32 = Math['max'](0x0, Math['min'](_0x47cf04, _0x5ac96c + _0x27bc7d));
        _0x1ee1dc = Math['max'](0x0, Math['min'](_0x114306, _0x1c3f6c + _0xe5f8f8));
        _0x1212da();
        _0x257a8d();
    });
    window['addEventListener']('mouseup', _0x2b59b6 => {
        if (_0x217262) {
            _0x217262 = ![];
            _0x1f3304['style']['cursor'] = 'grab';
        }
    });
    _0x1f3304['addEventListener']('click', _0x443bcb => {
        const _0x4376da = _0x1f3304['getBoundingClientRect']();
        const _0x5ea875 = _0x443bcb['clientX'] - _0x4376da['left'] + _0x1e4c32;
        const _0x2ada71 = _0x443bcb['clientY'] - _0x4376da['top'] + _0x1ee1dc;
        const _0x50bd10 = Math['max'](0x1, Math['ceil'](_0x279442['naturalWidth'] / _0x11b3f2));
        const _0x128c88 = Math['floor'](_0x5ea875 / _0x11b3f2);
        const _0x7f0fcf = Math['floor'](_0x2ada71 / _0x11b3f2);
        const _0x278722 = _0x7f0fcf * _0x50bd10 + _0x128c88 + 0x1;
        _0x4cccfb['EDITOR']['selectedTileGid'] = _0x278722;
        _0x257a8d();
    });
    _0x43d911['appendChild'](_0x1f3304);
    const _0x372761 = document['createElement']('div');
    _0x372761['className'] = 'tile-btn\x20eraser-btn';
    _0x372761['title'] = 'Eraser\x20(gid\x200)';
    _0x372761['onclick'] = () => {
        _0x4cccfb['EDITOR']['selectedTileGid'] = 0x0;
        _0x5af47d['style']['display'] = 'none';
    };
    _0x43d911['appendChild'](_0x372761);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x4cccfb['EDITOR']['enabled'] = !_0x4cccfb['EDITOR']['enabled'];
        const _0x1456a4 = document['getElementById']('editor-tools');
        if (_0x4cccfb['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x1456a4['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x1456a4['style']['display'] = 'none';
        }
    });
    const _0x4c865a = document['getElementById']('start-game-btn');
    if (_0x4c865a) {
        _0x4c865a['addEventListener']('click', () => {
            if (_0x1932ea)
                _0x1932ea['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x4a6db6 = document['getElementById']('rolelist-toggle-btn');
    if (_0x4a6db6) {
        let _0x7c9b28 = 'subalignments';
        _0x4a6db6['addEventListener']('click', () => {
            if (_0x7c9b28 === 'subalignments')
                _0x7c9b28 = 'precise';
            else if (_0x7c9b28 === 'precise')
                _0x7c9b28 = 'off';
            else
                _0x7c9b28 = 'subalignments';
            _0x4a6db6['innerText'] = 'Role\x20List:\x20' + _0x7c9b28['charAt'](0x0)['toUpperCase']() + _0x7c9b28['slice'](0x1);
            if (_0x1932ea)
                _0x1932ea['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x7c9b28
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x59ce3c => {
        if (_0x59ce3c['id'] === 'editor-toggle-btn' || _0x59ce3c['id'] === 'start-game-btn' || _0x59ce3c['id'] === 'rolelist-toggle-btn')
            return;
        _0x59ce3c['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x34c2bf => _0x34c2bf['classList']['remove']('active'));
            _0x59ce3c['classList']['add']('active');
            _0x4cccfb['EDITOR']['selectedLayer'] = _0x59ce3c['dataset']['layer'];
        });
    });
}
function _0x5afb1a(_0x455cf5) {
    if (_0x1932ea)
        _0x1932ea['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x455cf5
        }));
}
function _0x376810(_0x2a78fc) {
    if (_0x1932ea)
        _0x1932ea['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x2a78fc
        }));
}
function _0x36577b(_0x14aaa4, _0x56bd00, _0x77b6f4, _0x3eebfa) {
    const _0x187b8d = document['getElementById']('admin-panel');
    if (_0x187b8d)
        _0x187b8d['remove']();
    if (_0x187b8d && _0x187b8d['dataset']['target'] === String(_0x14aaa4))
        return;
    const _0x29a8da = document['createElement']('div');
    _0x29a8da['id'] = 'admin-panel';
    _0x29a8da['dataset']['target'] = String(_0x14aaa4);
    _0x29a8da['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x2025bc = document['createElement']('div');
    _0x2025bc['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x2025bc['textContent'] = _0x56bd00;
    _0x29a8da['appendChild'](_0x2025bc);
    const _0xd4d384 = document['createElement']('button');
    _0xd4d384['textContent'] = 'Kick';
    _0xd4d384['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0xd4d384['onmouseenter'] = () => _0xd4d384['style']['background'] = 'rgba(255,255,255,0.1)';
    _0xd4d384['onmouseleave'] = () => _0xd4d384['style']['background'] = 'transparent';
    _0xd4d384['onclick'] = () => {
        _0x5afb1a(_0x14aaa4);
        _0x29a8da['remove']();
    };
    _0x29a8da['appendChild'](_0xd4d384);
    const _0x41de42 = document['createElement']('button');
    _0x41de42['textContent'] = 'Ban';
    _0x41de42['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x41de42['onmouseenter'] = () => _0x41de42['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x41de42['onmouseleave'] = () => _0x41de42['style']['background'] = 'transparent';
    _0x41de42['onclick'] = () => {
        _0x376810(_0x14aaa4);
        _0x29a8da['remove']();
    };
    _0x29a8da['appendChild'](_0x41de42);
    document['body']['appendChild'](_0x29a8da);
    const _0x2f2471 = _0x29a8da['offsetWidth'] || 0x91;
    const _0x5df37e = _0x29a8da['offsetHeight'] || 0x50;
    let _0x5a1c9e = _0x77b6f4 - _0x2f2471;
    let _0x149616 = _0x3eebfa;
    if (_0x5a1c9e < 0x4)
        _0x5a1c9e = _0x77b6f4;
    if (_0x149616 + _0x5df37e > window['innerHeight'] - 0x4)
        _0x149616 = window['innerHeight'] - _0x5df37e - 0x4;
    _0x29a8da['style']['left'] = _0x5a1c9e + 'px';
    _0x29a8da['style']['top'] = _0x149616 + 'px';
    const _0x22dd7d = _0x417d4c => {
        if (!_0x29a8da['contains'](_0x417d4c['target'])) {
            _0x29a8da['remove']();
            document['removeEventListener']('mousedown', _0x22dd7d);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x22dd7d), 0x0);
}
let _0x4e69b0 = '';
function _0x282cbc() {
    const _0x57cd47 = document['getElementById']('leaderboard-list');
    if (!_0x57cd47)
        return;
    let _0x27a43d = _0xf15527 + '|' + _0x3a1069 + '|' + _0x1e4c06['isDead'] + '|' + _0x18335b['size'];
    for (const _0x49111e in _0x1b7a80) {
        const _0x29bb3d = _0x1b7a80[_0x49111e];
        _0x27a43d += '|' + _0x49111e + ':' + _0x29bb3d['name'] + ':' + !!_0x29bb3d['isOwner'] + ':' + !!_0x29bb3d['isDead'] + ':' + _0x18335b['has'](parseInt(_0x49111e));
    }
    if (_0x27a43d === _0x4e69b0)
        return;
    _0x4e69b0 = _0x27a43d;
    _0x57cd47['innerHTML'] = '';
    const _0x20a8d6 = document['createElement']('div');
    _0x20a8d6['className'] = 'leaderboard-entry';
    const _0x437732 = document['createElement']('span');
    _0x437732['textContent'] = _0xf15527 + (_0x3a1069 ? '\x20[🗝️]' : '');
    if (_0x18335b['has'](_0x4590c0) && !_0x1e4c06['isDead']) {
        _0x437732['style']['color'] = '#cc88ff';
    }
    _0x20a8d6['appendChild'](_0x437732);
    _0x57cd47['appendChild'](_0x20a8d6);
    for (const _0x249068 in _0x1b7a80) {
        const _0x4a7ed8 = document['createElement']('div');
        _0x4a7ed8['className'] = 'leaderboard-entry';
        const _0x7efa9b = document['createElement']('span');
        _0x7efa9b['textContent'] = _0x1b7a80[_0x249068]['name'] + (_0x1b7a80[_0x249068]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x18335b['has'](parseInt(_0x249068)) && !_0x1b7a80[_0x249068]['isDead']) {
            _0x7efa9b['style']['color'] = '#cc88ff';
        }
        _0x4a7ed8['appendChild'](_0x7efa9b);
        if (_0x3a1069 && !_0x1b7a80[_0x249068]['isOwner']) {
            const _0x598ab6 = _0x1b7a80[_0x249068]['id'];
            const _0x2832cf = _0x1b7a80[_0x249068]['name'];
            _0x4a7ed8['style']['cursor'] = 'context-menu';
            _0x4a7ed8['addEventListener']('contextmenu', _0x130590 => {
                _0x130590['preventDefault']();
                _0x130590['stopPropagation']();
                _0x36577b(_0x598ab6, _0x2832cf, _0x130590['clientX'], _0x130590['clientY']);
            });
        }
        _0x57cd47['appendChild'](_0x4a7ed8);
    }
}
window['addEventListener']('resize', _0x1b4632);
function _0x1b4632() {
    _0x250f5d['width'] = window['innerWidth'];
    _0x250f5d['height'] = window['innerHeight'];
    _0x4cccfb['SYSTEM']['viewScale'] = Math['max'](_0x250f5d['width'] / _0x15f7a2, _0x250f5d['height'] / _0x1c0e58);
    _0x4cccfb['CAMERA']['width'] = _0x250f5d['width'] / _0x4cccfb['SYSTEM']['viewScale'];
    _0x4cccfb['CAMERA']['height'] = _0x250f5d['height'] / _0x4cccfb['SYSTEM']['viewScale'];
    _0x3399be['imageSmoothingEnabled'] = ![];
}
function _0x5b5e9a(_0x2561af) {
    if (_0x2561af['ctrlKey'] || _0x2561af['metaKey']) {
        if (_0x2561af['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x2561af['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x2561af['code'])) {
            _0x2561af['preventDefault']();
            _0x2561af['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x5b5e9a, { 'passive': ![] });
window['addEventListener']('keydown', _0x5b5e9a, { 'passive': ![] });
window['addEventListener']('keydown', _0x2d2fbe => {
    const _0x266b4f = _0x2d2fbe['key']['toLowerCase']();
    if (_0x266b4f === 'tab') {
        _0x2d2fbe['preventDefault']();
        const _0xf5a215 = document['getElementById']('will-ui');
        const _0x28ebe7 = document['getElementById']('will-input');
        if (_0xf5a215['style']['display'] === 'flex') {
            _0xf5a215['style']['display'] = 'none';
            if (_0x4cccfb['GAME_STATE'] !== 'NIGHT' && _0x1932ea)
                _0x1932ea['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x28ebe7['value']
                }));
            _0x28ebe7['blur']();
        } else {
            if (_0x4cccfb['GAME_STATE'] === 'NIGHT') {
                _0x505825('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0xf5a215['style']['display'] = 'flex';
            _0x28ebe7['focus']();
            for (let _0x3de655 in _0x4cccfb['INPUTS']['keys'])
                _0x4cccfb['INPUTS']['keys'][_0x3de655] = ![];
        }
        return;
    }
    if (_0x2d2fbe['key'] === 'Enter') {
        if (_0x393189) {
            const _0x56bc2d = document['getElementById']('play-btn');
            if (_0x56bc2d)
                _0x56bc2d['click']();
            return;
        }
        if (!_0x1932ea || _0x1932ea['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x3e8fe0 = document['getElementById']('chat-ui');
        const _0x6e434f = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x6e434f) {
            const _0x2cdbf3 = _0x6e434f['value']['trim']();
            if (_0x2cdbf3['length'] > 0x0) {
                _0x1932ea['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x2cdbf3
                }));
            }
            _0x6e434f['value'] = '';
            _0x3e8fe0['style']['display'] = 'none';
            _0x6e434f['blur']();
        } else {
            _0x3e8fe0['style']['display'] = 'block';
            _0x6e434f['focus']();
            for (let _0x43e8ab in _0x4cccfb['INPUTS']['keys'])
                _0x4cccfb['INPUTS']['keys'][_0x43e8ab] = ![];
        }
        _0x2d2fbe['preventDefault']();
        return;
    }
    if (_0x2d2fbe['key'] === 'Escape') {
        const _0x42cf6d = document['getElementById']('role-index-modal');
        if (_0x42cf6d && _0x42cf6d['style']['display'] === 'flex') {
            _0x42cf6d['style']['display'] = 'none';
            return;
        }
        const _0x4999a6 = document['getElementById']('guide-ui');
        if (_0x4999a6 && _0x4999a6['style']['display'] === 'flex') {
            _0x4999a6['style']['display'] = 'none';
            return;
        }
        const _0x202806 = document['getElementById']('ability-ui');
        if (_0x202806 && _0x202806['style']['display'] === 'block') {
            _0x202806['style']['display'] = 'none';
            return;
        }
        const _0x1872e3 = document['getElementById']('settings-panel');
        if (_0x1872e3 && _0x1872e3['style']['display'] === 'block') {
            _0x1872e3['style']['display'] = 'none';
            return;
        }
        const _0x11396f = document['getElementById']('mayor-confirm-dialog');
        if (_0x11396f && _0x11396f['style']['display'] === 'flex') {
            _0x11396f['style']['display'] = 'none';
            return;
        }
        const _0x3d173f = document['getElementById']('target-chooser-ui');
        if (_0x3d173f && _0x3d173f['style']['display'] === 'flex') {
            _0x3d173f['style']['display'] = 'none';
            return;
        }
        const _0x37042e = document['getElementById']('chat-ui');
        const _0x35b401 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x35b401) {
            _0x35b401['value'] = '';
            _0x37042e['style']['display'] = 'none';
            _0x35b401['blur']();
            _0x2d2fbe['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x4cccfb['INPUTS']['keys']['hasOwnProperty'](_0x266b4f))
            _0x4cccfb['INPUTS']['keys'][_0x266b4f] = !![];
        if (!_0x1932ea || _0x1932ea['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x266b4f === 'h' && !_0x2d2fbe['repeat']) {
            const _0x1dc766 = document['getElementById']('guide-ui');
            if (_0x1dc766) {
                _0x1dc766['style']['display'] = _0x1dc766['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x266b4f === 't' && !_0x2d2fbe['repeat']) {
            if (_0x1e4c06['isDead'])
                return;
            if (_0x265be6 === 'Mayor') {
                if (_0x18335b['has'](_0x4590c0)) {
                    _0x505825('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x1af26d = document['getElementById']('mayor-confirm-dialog');
                if (_0x1af26d)
                    _0x1af26d['style']['display'] = 'flex';
                return;
            }
            if (_0x4cccfb['GAME_STATE'] === 'NIGHT') {
                if (!_0x4cccfb['NIGHT_ABILITY_OPEN']) {
                    _0x505825('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x128f24 = document['getElementById']('ability-ui');
                if (_0x128f24) {
                    if (_0x128f24['style']['display'] === 'block') {
                        _0x128f24['style']['display'] = 'none';
                    } else {
                        _0x263683();
                        _0x128f24['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x4cccfb['GAME_STATE'] === 'DAY_DISCUSS' || _0x4cccfb['GAME_STATE'] === 'DAY_VOTE') {
                _0x505825('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x266b4f === 'e' && !_0x1e4c06['isDead']) {
            const _0x1b8c04 = Date['now']();
            if (!window['_lastDoorSend'] || _0x1b8c04 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x1b8c04;
                _0x1932ea['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x1551e1 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x114fdc = _0x1551e1['key']['toLowerCase']();
        if (_0x4cccfb['INPUTS']['keys']['hasOwnProperty'](_0x114fdc))
            _0x4cccfb['INPUTS']['keys'][_0x114fdc] = ![];
    }
});
window['addEventListener']('mousemove', _0x524c59 => {
    _0x4cccfb['INPUTS']['mouseX'] = _0x524c59['clientX'];
    _0x4cccfb['INPUTS']['mouseY'] = _0x524c59['clientY'];
    if (_0x4cccfb['INPUTS']['isMouseDown'] && _0x4cccfb['EDITOR']['enabled']) {
        _0x2e5272(_0x524c59['clientX'], _0x524c59['clientY']);
    }
});
window['addEventListener']('mousedown', _0x3c5297 => {
    if (_0x3c5297['target']['closest']('#editor-ui') || _0x3c5297['target']['closest']('#leaderboard-ui') || _0x3c5297['target']['closest']('#role-index-btn-wrap') || _0x3c5297['target']['closest']('#role-index-modal') || _0x3c5297['target']['closest']('#chat-log-ui') || _0x3c5297['target']['closest']('#target-chooser-ui') || _0x3c5297['target']['closest']('#guide-ui') || _0x3c5297['target']['closest']('#role-list-ui') || _0x3c5297['target']['closest']('#ability-ui') || _0x3c5297['target']['closest']('#settings-panel') || _0x3c5297['target']['closest']('#mayor-confirm-dialog') || _0x3c5297['target']['closest']('#mobile-action-bar') || _0x3c5297['target']['closest']('#mobile-top-bar') || _0x3c5297['target']['closest']('#mobile-joystick-zone') || _0x3c5297['target']['closest']('#mobile-chat-overlay') || _0x3c5297['target']['closest']('#will-ui') || _0x3c5297['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x3c5297['button'] === 0x0) {
        _0x4cccfb['INPUTS']['isMouseDown'] = !![];
        if (_0x4cccfb['EDITOR']['enabled'])
            _0x2e5272(_0x3c5297['clientX'], _0x3c5297['clientY']);
    }
});
window['addEventListener']('mouseup', _0x323e2d => {
    _0x4cccfb['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x80136f => {
    if (_0x80136f['target']['closest']('#settings-btn'))
        return;
    const _0x2bcd7d = document['getElementById']('leaderboard-list');
    const _0xd727f = document['getElementById']('leaderboard-toggle');
    if (_0x2bcd7d['style']['display'] === 'none') {
        _0x2bcd7d['style']['display'] = 'flex';
        _0xd727f['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x2bcd7d['style']['display'] = 'none';
        _0xd727f['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x1d359c = document['getElementById']('close-target-btn');
if (_0x1d359c) {
    _0x1d359c['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x174a25 = document['getElementById']('close-guide-btn');
if (_0x174a25) {
    _0x174a25['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x841afe = document['getElementById']('role-list-header');
if (_0x841afe) {
    _0x841afe['addEventListener']('click', () => {
        const _0xbb28d1 = document['getElementById']('role-list-items');
        const _0x5c17ea = document['getElementById']('role-list-toggle');
        if (_0xbb28d1['style']['display'] === 'none') {
            _0xbb28d1['style']['display'] = 'flex';
            _0x5c17ea['style']['transform'] = 'rotate(0deg)';
        } else {
            _0xbb28d1['style']['display'] = 'none';
            _0x5c17ea['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x40e1a5() {
    const _0x793df5 = document['getElementById']('mobile-joystick-zone');
    const _0x5dd172 = document['getElementById']('mobile-joystick-base');
    const _0x17b36b = document['getElementById']('mobile-joystick-knob');
    if (_0x793df5 && _0x5dd172 && _0x17b36b) {
        const _0x3e4067 = 0x3e;
        const _0x3e4bb6 = (_0x3015c6, _0x57e271) => {
            const _0xa65591 = _0x5dd172['getBoundingClientRect']();
            const _0x5979e2 = _0xa65591['left'] + _0xa65591['width'] / 0x2;
            const _0x2b8c25 = _0xa65591['top'] + _0xa65591['height'] / 0x2;
            const _0x1dd3d6 = _0x3015c6 - _0x5979e2;
            const _0x34ee63 = _0x57e271 - _0x2b8c25;
            const _0x3a3923 = Math['hypot'](_0x1dd3d6, _0x34ee63);
            if (_0x3a3923 === 0x0) {
                _0x1e4bd9 = 0x0;
                _0x462bf9 = 0x0;
                _0x59787f = ![];
                _0x17b36b['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x670f26 = Math['min'](_0x3a3923, _0x3e4067);
            const _0x57b459 = _0x1dd3d6 / _0x3a3923 * _0x670f26;
            const _0x2f9125 = _0x34ee63 / _0x3a3923 * _0x670f26;
            _0x1e4bd9 = _0x57b459 / _0x3e4067;
            _0x462bf9 = _0x2f9125 / _0x3e4067;
            _0x59787f = _0x3a3923 >= _0x3e4067 * 0.75;
            _0x17b36b['style']['transform'] = 'translate(' + _0x57b459 + 'px,\x20' + _0x2f9125 + 'px)';
        };
        const _0x50b3bb = _0x59121e => {
            for (let _0x59f0e7 = 0x0; _0x59f0e7 < _0x59121e['changedTouches']['length']; _0x59f0e7++) {
                const _0x5a72e2 = _0x59121e['changedTouches'][_0x59f0e7];
                if (_0x2a885b === null) {
                    _0x2a885b = _0x5a72e2['identifier'];
                    _0x1db9e4 = !![];
                    _0x3e4bb6(_0x5a72e2['clientX'], _0x5a72e2['clientY']);
                    break;
                }
            }
        };
        const _0x5e8098 = _0x2ab6ae => {
            for (let _0x485d93 = 0x0; _0x485d93 < _0x2ab6ae['changedTouches']['length']; _0x485d93++) {
                const _0x223ee5 = _0x2ab6ae['changedTouches'][_0x485d93];
                if (_0x223ee5['identifier'] === _0x2a885b) {
                    _0x3e4bb6(_0x223ee5['clientX'], _0x223ee5['clientY']);
                    break;
                }
            }
        };
        const _0x297d6d = _0x4e7180 => {
            for (let _0x3be0b9 = 0x0; _0x3be0b9 < _0x4e7180['changedTouches']['length']; _0x3be0b9++) {
                const _0x36fd50 = _0x4e7180['changedTouches'][_0x3be0b9];
                if (_0x36fd50['identifier'] === _0x2a885b) {
                    _0x2a885b = null;
                    _0x1db9e4 = ![];
                    _0x1e4bd9 = 0x0;
                    _0x462bf9 = 0x0;
                    _0x59787f = ![];
                    _0x17b36b['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x793df5['addEventListener']('touchstart', _0x1a6a81 => {
            _0x1a6a81['preventDefault']();
            _0x50b3bb(_0x1a6a81);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x5e8098, { 'passive': !![] });
        window['addEventListener']('touchend', _0x297d6d, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x297d6d, { 'passive': !![] });
    }
    const _0x3ff66b = (_0x250b0e, _0x827f93) => {
        const _0x3c9543 = _0x250b0e / _0x4cccfb['SYSTEM']['viewScale'];
        const _0x5e4187 = _0x827f93 / _0x4cccfb['SYSTEM']['viewScale'];
        const _0x4ec4de = _0x1e4c06['x'] - _0x4cccfb['CAMERA']['x'] + _0x1e4c06['width'] / 0x2;
        const _0x562948 = _0x1e4c06['y'] - _0x4cccfb['CAMERA']['y'] + _0x1e4c06['height'] / 0x2;
        _0x38beec = Math['atan2'](_0x5e4187 - _0x562948, _0x3c9543 - _0x4ec4de);
        _0x209109 = !![];
        _0x4cccfb['INPUTS']['mouseX'] = _0x250b0e;
        _0x4cccfb['INPUTS']['mouseY'] = _0x827f93;
    };
    _0x250f5d['addEventListener']('touchstart', _0x14023f => {
        if (_0x393189)
            return;
        for (let _0x4ad82e = 0x0; _0x4ad82e < _0x14023f['changedTouches']['length']; _0x4ad82e++) {
            const _0x45c4e9 = _0x14023f['changedTouches'][_0x4ad82e];
            if (_0x45c4e9['identifier'] !== _0x2a885b && _0x3f2a04 === null) {
                _0x3f2a04 = _0x45c4e9['identifier'];
                _0x3ff66b(_0x45c4e9['clientX'], _0x45c4e9['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x250f5d['addEventListener']('touchmove', _0x4343c7 => {
        if (_0x393189)
            return;
        for (let _0x1983c9 = 0x0; _0x1983c9 < _0x4343c7['changedTouches']['length']; _0x1983c9++) {
            const _0x43cd06 = _0x4343c7['changedTouches'][_0x1983c9];
            if (_0x43cd06['identifier'] === _0x3f2a04) {
                _0x3ff66b(_0x43cd06['clientX'], _0x43cd06['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x3f9c65 = _0x323db2 => {
        for (let _0x20430a = 0x0; _0x20430a < _0x323db2['changedTouches']['length']; _0x20430a++) {
            const _0x74f8e6 = _0x323db2['changedTouches'][_0x20430a];
            if (_0x74f8e6['identifier'] === _0x3f2a04) {
                _0x3f2a04 = null;
                _0x209109 = ![];
                break;
            }
        }
    };
    _0x250f5d['addEventListener']('touchend', _0x3f9c65, { 'passive': !![] });
    _0x250f5d['addEventListener']('touchcancel', _0x3f9c65, { 'passive': !![] });
    const _0x4879a5 = document['getElementById']('mob-sprint-btn');
    if (_0x4879a5) {
        _0x4879a5['addEventListener']('click', _0x20f12b => {
            _0x20f12b['stopPropagation']();
            _0x46f29f = !_0x46f29f;
            _0x4879a5['classList']['toggle']('active', _0x46f29f);
        });
    }
    const _0x57e86c = document['getElementById']('mob-interact-btn');
    if (_0x57e86c) {
        _0x57e86c['addEventListener']('click', _0x5f2d61 => {
            _0x5f2d61['stopPropagation']();
            if (!_0x1e4c06['isDead']) {
                const _0x426295 = Date['now']();
                if (!window['_lastDoorSend'] || _0x426295 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x426295;
                    if (_0x1932ea && _0x1932ea['readyState'] === WebSocket['OPEN'])
                        _0x1932ea['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x547465 = document['getElementById']('mob-ability-btn');
    if (_0x547465) {
        _0x547465['addEventListener']('click', _0x430dc5 => {
            _0x430dc5['stopPropagation']();
            if (_0x1e4c06['isDead'])
                return;
            if (_0x265be6 === 'Mayor') {
                if (_0x18335b['has'](_0x4590c0)) {
                    _0x505825('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x2ac729 = document['getElementById']('mayor-confirm-dialog');
                if (_0x2ac729)
                    _0x2ac729['style']['display'] = 'flex';
                return;
            }
            if (_0x4cccfb['GAME_STATE'] === 'NIGHT') {
                if (!_0x4cccfb['NIGHT_ABILITY_OPEN']) {
                    _0x505825('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x3884f4 = document['getElementById']('ability-ui');
                if (_0x3884f4) {
                    if (_0x3884f4['style']['display'] === 'block') {
                        _0x3884f4['style']['display'] = 'none';
                    } else {
                        _0x263683();
                        _0x3884f4['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x4cccfb['GAME_STATE'] === 'DAY_DISCUSS' || _0x4cccfb['GAME_STATE'] === 'DAY_VOTE') {
                _0x505825('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x3111d7 = document['getElementById']('mob-will-btn');
    const _0xd0ecd6 = document['getElementById']('will-ui');
    const _0x39ccb4 = document['getElementById']('will-input');
    const _0x5352e0 = document['getElementById']('close-will-btn');
    const _0x4883b4 = () => {
        if (!_0xd0ecd6)
            return;
        if (_0xd0ecd6['style']['display'] === 'flex') {
            _0xd0ecd6['style']['display'] = 'none';
            if (_0x4cccfb['GAME_STATE'] !== 'NIGHT' && _0x1932ea && _0x1932ea['readyState'] === WebSocket['OPEN'] && _0x39ccb4) {
                _0x1932ea['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x39ccb4['value']
                }));
            }
            if (_0x39ccb4)
                _0x39ccb4['blur']();
        } else {
            if (_0x4cccfb['GAME_STATE'] === 'NIGHT') {
                _0x505825('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0xd0ecd6['style']['display'] = 'flex';
            if (_0x39ccb4)
                _0x39ccb4['focus']();
        }
    };
    if (_0x3111d7)
        _0x3111d7['addEventListener']('click', _0x3cc377 => {
            _0x3cc377['stopPropagation']();
            _0x4883b4();
        });
    if (_0x5352e0)
        _0x5352e0['addEventListener']('click', _0x234f5b => {
            _0x234f5b['stopPropagation']();
            _0x4883b4();
        });
    const _0x3f8d45 = document['getElementById']('mob-chat-btn');
    const _0x204c37 = document['getElementById']('mobile-chat-overlay');
    const _0x522327 = document['getElementById']('mobile-chat-input');
    const _0x4f7eb3 = document['getElementById']('mobile-chat-send');
    const _0x4116dd = document['getElementById']('mobile-chat-cancel');
    const _0x5a73b6 = () => {
        if (!_0x204c37 || !_0x522327)
            return;
        _0x204c37['style']['display'] = 'flex';
        _0x522327['value'] = '';
        _0x522327['focus']();
    };
    const _0x5bd049 = () => {
        if (!_0x204c37 || !_0x522327)
            return;
        _0x204c37['style']['display'] = 'none';
        _0x522327['blur']();
    };
    const _0x23d949 = () => {
        if (!_0x522327)
            return;
        const _0x511610 = _0x522327['value']['trim']();
        if (_0x511610['length'] > 0x0 && _0x1932ea && _0x1932ea['readyState'] === WebSocket['OPEN']) {
            _0x1932ea['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x511610
            }));
        }
        _0x522327['value'] = '';
        _0x5bd049();
    };
    if (_0x3f8d45)
        _0x3f8d45['addEventListener']('click', _0x8deeaf => {
            _0x8deeaf['stopPropagation']();
            _0x5a73b6();
        });
    if (_0x4f7eb3)
        _0x4f7eb3['addEventListener']('click', _0x2dd99 => {
            _0x2dd99['stopPropagation']();
            _0x23d949();
        });
    if (_0x4116dd)
        _0x4116dd['addEventListener']('click', _0x5c5240 => {
            _0x5c5240['stopPropagation']();
            _0x5bd049();
        });
    if (_0x522327) {
        _0x522327['addEventListener']('keydown', _0x4eca07 => {
            if (_0x4eca07['key'] === 'Enter') {
                _0x4eca07['preventDefault']();
                _0x23d949();
            } else if (_0x4eca07['key'] === 'Escape') {
                _0x5bd049();
            }
        });
    }
    const _0x3a71fd = document['getElementById']('mob-top-chat');
    if (_0x3a71fd)
        _0x3a71fd['addEventListener']('click', _0x52d71a => {
            _0x52d71a['stopPropagation']();
            _0x5a73b6();
        });
    const _0xe04c4e = document['getElementById']('mob-top-will');
    if (_0xe04c4e)
        _0xe04c4e['addEventListener']('click', _0x1d9e90 => {
            _0x1d9e90['stopPropagation']();
            _0x4883b4();
        });
    const _0x5cf62a = document['getElementById']('mob-top-roles');
    if (_0x5cf62a) {
        _0x5cf62a['addEventListener']('click', _0x537426 => {
            _0x537426['stopPropagation']();
            const _0x596d71 = document['getElementById']('role-list-ui');
            const _0x360f3a = document['getElementById']('leaderboard-ui');
            if (_0x360f3a)
                _0x360f3a['style']['display'] = 'none';
            if (_0x596d71)
                _0x596d71['style']['display'] = _0x596d71['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x2ffcac = document['getElementById']('mob-top-players');
    if (_0x2ffcac) {
        _0x2ffcac['addEventListener']('click', _0x126969 => {
            _0x126969['stopPropagation']();
            const _0x6518e2 = document['getElementById']('leaderboard-ui');
            const _0x8e0a5a = document['getElementById']('role-list-ui');
            if (_0x8e0a5a)
                _0x8e0a5a['style']['display'] = 'none';
            if (_0x6518e2)
                _0x6518e2['style']['display'] = _0x6518e2['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x4b8538 = document['getElementById']('mob-top-help');
    if (_0x4b8538) {
        _0x4b8538['addEventListener']('click', _0x431c6f => {
            _0x431c6f['stopPropagation']();
            const _0xafa57a = document['getElementById']('guide-ui');
            if (_0xafa57a)
                _0xafa57a['style']['display'] = _0xafa57a['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x4d708e) {
            _0x4d708e = !![];
            _0x36d60f();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
