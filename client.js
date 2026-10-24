document['addEventListener']('contextmenu', _0x100f44 => _0x100f44['preventDefault']());
const _0x522023 = {
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
    'Mafia\x20Killing': ['Skinwalker']
};
let _0x3a34ef = '';
function _0x11b5d0(_0x4a7685, _0x52ba45) {
    const _0x279014 = document['getElementById']('role-list-ui');
    const _0x34d372 = document['getElementById']('role-list-items');
    if (!_0x279014 || !_0x34d372)
        return;
    if (!_0x52ba45 || _0x52ba45 === 'off' || !_0x4a7685 || _0x4a7685['length'] === 0x0) {
        _0x279014['style']['display'] = 'none';
        return;
    }
    const _0xdfb106 = _0x52ba45 + '|' + JSON['stringify'](_0x4a7685);
    if (_0xdfb106 === _0x3a34ef)
        return;
    _0x3a34ef = _0xdfb106;
    const _0xf4b272 = document['getElementById']('role-tooltip');
    if (_0xf4b272) {
        _0xf4b272['style']['visibility'] = 'hidden';
        _0xf4b272['style']['opacity'] = '0';
    }
    _0x279014['style']['display'] = 'flex';
    _0x34d372['innerHTML'] = '';
    _0x4a7685['forEach'](_0x25e549 => {
        const _0x4f2df3 = document['createElement']('div');
        _0x4f2df3['className'] = 'role-list-entry';
        const _0x134a60 = _0x25e549['name']['includes']('Mafia') || _0x25e549['name'] === 'Skinwalker';
        _0x4f2df3['classList']['add'](_0x134a60 ? 'mafia' : 'town');
        if (_0x52ba45 === 'precise' && _0x25e549['isDead']) {
            _0x4f2df3['classList']['remove']('town', 'mafia');
            _0x4f2df3['classList']['add']('dead');
            _0x4f2df3['innerHTML'] = '<span>' + _0x25e549['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x572d58 = _0x25e549['count'] !== undefined && _0x25e549['count'] !== null ? _0x25e549['count'] + 'x\x20' : '';
            _0x4f2df3['innerHTML'] = '<span>' + _0x572d58 + _0x25e549['name'] + '</span>';
        }
        if (_0x52ba45 === 'subalignments' && _0x522023[_0x25e549['name']]) {
            _0x4f2df3['style']['cursor'] = 'pointer';
            _0x4f2df3['addEventListener']('mouseenter', () => {
                const _0x51c052 = document['getElementById']('role-tooltip');
                if (!_0x51c052)
                    return;
                const _0xd8da39 = _0x522023[_0x25e549['name']]['join'](',\x20');
                _0x51c052['innerHTML'] = '';
                const _0x21e640 = document['createElement']('span');
                _0x21e640['style']['color'] = '#ffcc00';
                _0x21e640['textContent'] = _0x25e549['name'];
                _0x51c052['appendChild'](_0x21e640);
                _0x51c052['appendChild'](document['createElement']('br'));
                _0x51c052['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0xd8da39));
                const _0x4e5d6e = _0x4f2df3['getBoundingClientRect']();
                _0x51c052['style']['left'] = _0x4e5d6e['left'] - 0xeb + 'px';
                _0x51c052['style']['top'] = _0x4e5d6e['top'] + 'px';
                _0x51c052['style']['display'] = 'block';
                _0x51c052['style']['visibility'] = 'visible';
                _0x51c052['style']['opacity'] = '1';
            });
            _0x4f2df3['addEventListener']('mouseleave', () => {
                const _0x3d9521 = document['getElementById']('role-tooltip');
                if (_0x3d9521) {
                    _0x3d9521['style']['display'] = 'none';
                    _0x3d9521['style']['visibility'] = 'hidden';
                    _0x3d9521['style']['opacity'] = '0';
                }
            });
        }
        _0x34d372['appendChild'](_0x4f2df3);
    });
}
let _0x3d99c1 = null;
let _0x29be97 = null;
const _0x14c962 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x569297 = 'Player???';
let _0x3405c2 = ![];
let _0x52aae8 = {};
let _0x5cfba0 = null;
let _0x50be52 = 0x0;
let _0x88a490 = 0x0;
let _0x4c0f94 = new Set();
let _0x559296 = ![];
let _0x3af4e6 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x3649d1 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x141845 = ![];
let _0x33ff79 = null;
let _0x1dfd0c = 0x0;
let _0x3ffc30 = 0x0;
let _0xb4cdc8 = ![];
let _0x2f9be3 = ![];
let _0x3211c1 = 0x0;
let _0x44f243 = null;
let _0x217534 = ![];
const _0x56bf95 = ((() => {
    const _0x1d5791 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3'
    };
    let _0x46874b = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x4afe17 = 0x320;
    const _0x9d3c7 = {};
    const _0x548c8e = {};
    let _0x59e737 = null;
    let _0x583b71 = _0x46874b === 0x0;
    let _0x49d697 = ![];
    for (const [_0x45d48d, _0x12577c] of Object['entries'](_0x1d5791)) {
        const _0x53541d = new Audio(_0x12577c);
        _0x53541d['loop'] = !![];
        _0x53541d['volume'] = 0x0;
        _0x53541d['preload'] = 'auto';
        _0x9d3c7[_0x45d48d] = _0x53541d;
        _0x548c8e[_0x45d48d] = null;
    }
    const _0x1685ce = _0x3ff8d7 => Math['min'](0x1, Math['max'](0x0, _0x3ff8d7));
    function _0x15a5f5(_0x26dfda) {
        if (_0x548c8e[_0x26dfda] !== null) {
            cancelAnimationFrame(_0x548c8e[_0x26dfda]);
            _0x548c8e[_0x26dfda] = null;
        }
    }
    function _0x1d84cc(_0x1c2e9e, _0x36d123, _0x48b3f3, _0x5ae04f, _0x51ff0c) {
        _0x15a5f5(_0x1c2e9e);
        const _0x273601 = _0x9d3c7[_0x1c2e9e];
        const _0x61e8e1 = performance['now']();
        const _0x35b42e = _0x55c314 => {
            const _0x2f64f0 = _0x1685ce((_0x55c314 - _0x61e8e1) / _0x5ae04f);
            const _0x3a6024 = _0x1685ce(_0x36d123 + (_0x48b3f3 - _0x36d123) * _0x2f64f0);
            _0x273601['volume'] = _0x583b71 ? 0x0 : _0x3a6024;
            if (_0x2f64f0 < 0x1) {
                _0x548c8e[_0x1c2e9e] = requestAnimationFrame(_0x35b42e);
            } else {
                _0x548c8e[_0x1c2e9e] = null;
                _0x273601['volume'] = _0x583b71 ? 0x0 : _0x1685ce(_0x48b3f3);
                if (_0x51ff0c)
                    _0x51ff0c();
            }
        };
        _0x548c8e[_0x1c2e9e] = requestAnimationFrame(_0x35b42e);
    }
    function _0x13ab7d(_0x366407) {
        const _0x110033 = _0x366407['play']();
        if (_0x110033 && _0x110033['catch']) {
            _0x110033['catch'](() => {
                if (!_0x49d697) {
                    const _0x478ca6 = () => {
                        _0x49d697 = !![];
                        _0x366407['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x478ca6);
                        document['removeEventListener']('keydown', _0x478ca6);
                        document['removeEventListener']('touchstart', _0x478ca6);
                    };
                    document['addEventListener']('click', _0x478ca6, { 'once': !![] });
                    document['addEventListener']('keydown', _0x478ca6, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x478ca6, { 'once': !![] });
                }
            });
        }
    }
    function _0x42218c(_0xe5fddd) {
        if (!_0x1d5791[_0xe5fddd])
            return;
        if (_0x59e737 === _0xe5fddd)
            return;
        const _0xee454b = _0x59e737;
        _0x59e737 = _0xe5fddd;
        const _0x29b0e2 = _0x9d3c7[_0xe5fddd];
        _0x15a5f5(_0xe5fddd);
        _0x29b0e2['currentTime'] = 0x0;
        _0x29b0e2['volume'] = 0x0;
        _0x13ab7d(_0x29b0e2);
        _0x1d84cc(_0xe5fddd, 0x0, _0x46874b, _0x4afe17);
        if (_0xee454b && _0x9d3c7[_0xee454b]) {
            const _0x421363 = _0xee454b;
            const _0x4df40b = _0x9d3c7[_0x421363];
            const _0x931b2a = _0x1685ce(_0x4df40b['volume']);
            _0x1d84cc(_0x421363, _0x931b2a, 0x0, _0x4afe17, () => {
                _0x4df40b['pause']();
                _0x4df40b['currentTime'] = 0x0;
            });
        }
    }
    function _0x5cb2e0(_0x2aa212) {
        _0x46874b = _0x1685ce(_0x2aa212);
        localStorage['setItem']('musicVolume', String(_0x46874b));
        if (!_0x583b71 && _0x59e737 && _0x548c8e[_0x59e737] === null) {
            _0x9d3c7[_0x59e737]['volume'] = _0x46874b;
        }
    }
    function _0x3f1338() {
        return _0x46874b;
    }
    function _0x12962a(_0x24cf67) {
        _0x583b71 = _0x24cf67;
        for (const _0x42238b of Object['keys'](_0x9d3c7)) {
            if (_0x548c8e[_0x42238b] === null) {
                _0x9d3c7[_0x42238b]['volume'] = _0x24cf67 || _0x42238b !== _0x59e737 ? 0x0 : _0x46874b;
            }
        }
    }
    function _0x3bbe87() {
        return _0x583b71;
    }
    function _0x424cac(_0x114910) {
        if (_0x114910 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x114910 === 'DAY_VOTE')
            return 'voting';
        return 'wait';
    }
    function _0x4ca340(_0x434511) {
        _0x42218c(_0x424cac(_0x434511));
    }
    function _0x431b28(_0x3d3bbf) {
        _0x42218c(_0x3d3bbf);
    }
    return {
        'play': _0x42218c,
        'onStateChange': _0x4ca340,
        'onSoundEvent': _0x431b28,
        'setVolume': _0x5cb2e0,
        'getVolume': _0x3f1338,
        'setMuted': _0x12962a,
        'isMuted': _0x3bbe87
    };
})());
const _0x45f7b1 = ((() => {
    const _0x246d6f = 0x258;
    const _0x1f4d8a = 0xb4;
    const _0xb764ac = 0x708;
    const _0x1d0d6d = 0x140;
    const _0x35d66c = 0.18;
    const _0x58138d = 0.95;
    const _0x44993a = new Audio('audio/heartbeat.mp3');
    _0x44993a['loop'] = ![];
    _0x44993a['preload'] = 'auto';
    _0x44993a['volume'] = 0x0;
    let _0x1e503d = 0x0;
    let _0x437d18 = Infinity;
    function _0xcb02f0(_0x542792, _0x165d56, _0x56f8f8) {
        return Math['min'](_0x56f8f8, Math['max'](_0x165d56, _0x542792));
    }
    function _0x11e428(_0x2ff6af, _0x19ccad, _0x6a8fd5) {
        return _0x2ff6af + (_0x19ccad - _0x2ff6af) * _0x6a8fd5;
    }
    function _0x4f5445(_0x3c498e) {
        if (_0x88eb63['GAME_STATE'] !== 'NIGHT' || _0x1ca472['isDead'] || _0x5cfba0 === 'Skinwalker') {
            _0x437d18 = Infinity;
            return;
        }
        const _0x51702b = _0x1ca472['x'] + 22.5;
        const _0x42f119 = _0x1ca472['y'] + 22.5;
        let _0x483bc2 = Infinity;
        for (const _0x472fb5 in _0x52aae8) {
            const _0x2933b6 = _0x52aae8[_0x472fb5];
            if (!_0x2933b6['isDark'] || _0x2933b6['isDead'])
                continue;
            const _0x2b9a7b = _0x2933b6['renderX'] + 22.5 - _0x51702b;
            const _0xef00bb = _0x2933b6['renderY'] + 22.5 - _0x42f119;
            const _0x5cecc9 = Math['sqrt'](_0x2b9a7b * _0x2b9a7b + _0xef00bb * _0xef00bb);
            if (_0x5cecc9 < _0x483bc2)
                _0x483bc2 = _0x5cecc9;
        }
        _0x437d18 = _0x483bc2;
        if (_0x483bc2 > _0x246d6f)
            return;
        const _0x1b4249 = 0x1 - _0xcb02f0((_0x483bc2 - _0x1f4d8a) / (_0x246d6f - _0x1f4d8a), 0x0, 0x1);
        const _0x2deaba = _0x11e428(_0xb764ac, _0x1d0d6d, _0x1b4249);
        const _0x5269bc = _0x11e428(_0x35d66c, _0x58138d, _0x1b4249);
        if (_0x3c498e >= _0x1e503d) {
            _0x44993a['currentTime'] = 0x0;
            _0x44993a['volume'] = _0x56bf95['isMuted']() ? 0x0 : _0xcb02f0(_0x5269bc * _0x56bf95['getVolume']() / 0.7, 0x0, 0x1);
            _0x44993a['play']()['catch'](() => {
            });
            _0x1e503d = _0x3c498e + _0x2deaba;
        }
    }
    return { 'tick': _0x4f5445 };
})());
function _0x4f47fa() {
    const _0x274b8b = document['getElementById']('mob-ability-btn');
    if (!_0x274b8b)
        return;
    const _0x4460f7 = _0x88eb63['GAME_STATE'] === 'NIGHT' && !_0x1ca472['isDead'];
    const _0xdfe3e0 = _0x5cfba0 === 'Mayor' && !_0x4c0f94['has'](_0x29be97) && !_0x1ca472['isDead'];
    if (_0x4460f7 || _0xdfe3e0) {
        _0x274b8b['style']['display'] = 'flex';
    } else {
        _0x274b8b['style']['display'] = 'none';
    }
}
function _0x234092() {
    const _0x18905b = document['getElementById']('mobile-joystick-zone');
    const _0x1e0b44 = document['getElementById']('mobile-top-bar');
    const _0x7813ed = document['getElementById']('mobile-action-bar');
    if (!_0x18905b || !_0x1e0b44 || !_0x7813ed)
        return;
    if (!_0x37ddc6 && _0x3649d1) {
        _0x18905b['style']['display'] = 'flex';
        _0x1e0b44['style']['display'] = 'flex';
        _0x7813ed['style']['display'] = 'flex';
        _0x4f47fa();
    } else {
        _0x18905b['style']['display'] = 'none';
        _0x1e0b44['style']['display'] = 'none';
        _0x7813ed['style']['display'] = 'none';
    }
}
const _0x167750 = document['getElementById']('gameCanvas');
const _0x293968 = _0x167750['getContext']('2d', { 'alpha': ![] });
const _0x56ab1f = 0x500;
const _0x10e5ce = 0x2d0;
const _0x88eb63 = {
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
        'width': _0x56ab1f,
        'height': _0x10e5ce
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
const _0x1ca472 = {
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
    'isDead': ![]
};
const _0x3619bf = new Image();
const _0x333d74 = new Image();
const _0x1b1fc2 = new Image();
const _0x54f4cd = new Image();
_0x54f4cd['src'] = 'assets/mayor\x20cosmetic.png';
const _0x5f09df = [
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
const _0x363b3c = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x3043a2 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x3043a2 === 'body1.png' || _0x3043a2 === 'body1')
    _0x3043a2 = 'body01.png';
if (!_0x3043a2['endsWith']('.png'))
    _0x3043a2 += '.png';
let _0x4e3e14 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x4e3e14['endsWith']('.png'))
    _0x4e3e14 += '.png';
let _0x37ddc6 = !![];
let _0xece18c = null;
let _0x451ec5 = null;
let _0x2e8e72 = 0x3c;
let _0xe2799e = 0x2d;
const _0x15ae36 = {};
function _0x32c020(_0x215b50) {
    if (!_0x15ae36[_0x215b50]) {
        const _0x1a00fe = new Image();
        _0x1a00fe['src'] = _0x215b50;
        _0x15ae36[_0x215b50] = _0x1a00fe;
    }
    return _0x15ae36[_0x215b50];
}
function _0x54ad4d(_0x44d1c9, _0x3a4ced, _0x3e0f0c, _0x20b521, _0x2d5de5) {
    try {
        const _0xcef011 = 'assets/' + (_0x3a4ced || 'body01.png');
        const _0x546289 = _0x32c020(_0xcef011);
        if (_0x546289['complete'] && _0x546289['naturalWidth'] > 0x0) {
            _0x44d1c9['drawImage'](_0x546289, -_0x20b521 / 0x2, -_0x2d5de5 / 0x2, _0x20b521, _0x2d5de5);
        }
        const _0xcb167f = 'assets/' + (_0x3e0f0c || 'eyes4.png');
        const _0x4b7cb1 = _0x32c020(_0xcb167f);
        if (_0x4b7cb1['complete'] && _0x4b7cb1['naturalWidth'] > 0x0) {
            _0x44d1c9['drawImage'](_0x4b7cb1, -_0x20b521 / 0x2, -_0x2d5de5 / 0x2, _0x20b521, _0x2d5de5);
        }
    } catch (_0x526db4) {
    }
}
function _0x2741ef() {
    const _0x1bda26 = document['getElementById']('body-skin-grid');
    const _0x22efff = document['getElementById']('eyes-skin-grid');
    if (!_0x1bda26 || !_0x22efff)
        return;
    _0x1bda26['innerHTML'] = '';
    _0x5f09df['forEach'](_0x36a6f1 => {
        const _0x8e0f36 = document['createElement']('button');
        _0x8e0f36['className'] = 'skin-btn' + (_0x36a6f1 === _0x3043a2 ? '\x20selected' : '');
        const _0x58c732 = document['createElement']('img');
        _0x58c732['src'] = 'assets/' + _0x36a6f1;
        _0x8e0f36['appendChild'](_0x58c732);
        _0x8e0f36['onclick'] = () => {
            _0x3043a2 = _0x36a6f1;
            localStorage['setItem']('selectedBody', _0x36a6f1);
            _0x1bda26['querySelectorAll']('.skin-btn')['forEach'](_0x437490 => _0x437490['classList']['remove']('selected'));
            _0x8e0f36['classList']['add']('selected');
        };
        _0x1bda26['appendChild'](_0x8e0f36);
    });
    _0x22efff['innerHTML'] = '';
    _0x363b3c['forEach'](_0x509a2c => {
        const _0x5c0f72 = document['createElement']('button');
        _0x5c0f72['className'] = 'skin-btn' + (_0x509a2c === _0x4e3e14 ? '\x20selected' : '');
        const _0x36437d = document['createElement']('img');
        _0x36437d['src'] = 'assets/' + _0x509a2c;
        _0x5c0f72['appendChild'](_0x36437d);
        _0x5c0f72['onclick'] = () => {
            _0x4e3e14 = _0x509a2c;
            localStorage['setItem']('selectedEyes', _0x509a2c);
            _0x22efff['querySelectorAll']('.skin-btn')['forEach'](_0x4e67f2 => _0x4e67f2['classList']['remove']('selected'));
            _0x5c0f72['classList']['add']('selected');
        };
        _0x22efff['appendChild'](_0x5c0f72);
    });
}
function _0x2610b5(_0x3f5528) {
    if (!_0x88eb63['MAP']['columns'] || !_0x88eb63['CAMERA']['width'])
        return;
    const _0x133dc7 = Math['max'](0x0, _0x88eb63['MAP']['columns'] * _0x88eb63['MAP']['tileSize'] - _0x88eb63['CAMERA']['width']);
    const _0x11dbcf = Math['max'](0x0, _0x88eb63['MAP']['rows'] * _0x88eb63['MAP']['tileSize'] - _0x88eb63['CAMERA']['height']);
    if (_0xece18c === null) {
        _0xece18c = _0x133dc7 / 0x2;
        _0x451ec5 = _0x11dbcf / 0x2;
    }
    _0xece18c += _0x2e8e72 * _0x3f5528;
    _0x451ec5 += _0xe2799e * _0x3f5528;
    if (_0xece18c <= 0x0) {
        _0xece18c = 0x0;
        _0x2e8e72 = Math['abs'](_0x2e8e72);
    } else if (_0xece18c >= _0x133dc7) {
        _0xece18c = _0x133dc7;
        _0x2e8e72 = -Math['abs'](_0x2e8e72);
    }
    if (_0x451ec5 <= 0x0) {
        _0x451ec5 = 0x0;
        _0xe2799e = Math['abs'](_0xe2799e);
    } else if (_0x451ec5 >= _0x11dbcf) {
        _0x451ec5 = _0x11dbcf;
        _0xe2799e = -Math['abs'](_0xe2799e);
    }
    _0x88eb63['CAMERA']['x'] = _0xece18c;
    _0x88eb63['CAMERA']['y'] = _0x451ec5;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0xbd98c4 = document['getElementById']('play-btn');
    const _0x13a265 = document['getElementById']('username-input');
    const _0x3e8c47 = localStorage['getItem']('playerName');
    if (_0x3e8c47 && _0x13a265) {
        _0x13a265['value'] = _0x3e8c47;
    }
    const _0x25f035 = () => {
        _0x56bf95['play']('wait');
        document['removeEventListener']('click', _0x25f035);
        document['removeEventListener']('keydown', _0x25f035);
        document['removeEventListener']('touchstart', _0x25f035);
    };
    document['addEventListener']('click', _0x25f035, { 'once': !![] });
    document['addEventListener']('keydown', _0x25f035, { 'once': !![] });
    document['addEventListener']('touchstart', _0x25f035, { 'once': !![] });
    if (_0xbd98c4) {
        _0xbd98c4['addEventListener']('click', () => {
            const _0x318f15 = _0x13a265['value'];
            const _0x4bf365 = _0x318f15['replace'](/<[^>]*>/g, '')['replace'](/[^\x20-\x7E]/g, '')['replace'](/[<>]/g, '')['replace'](/\s+/g, '\x20')['trim']()['substring'](0x0, 0xe);
            _0x569297 = _0x4bf365 || 'Player';
            localStorage['setItem']('playerName', _0x569297);
            _0x37ddc6 = ![];
            _0x88eb63['CAMERA']['x'] = null;
            _0x88eb63['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0xa6715a = document['getElementById']('controls-hint');
            if (_0xa6715a && !_0x3649d1)
                _0xa6715a['style']['display'] = 'block';
            _0x234092();
            if (_0x3649d1) {
                const _0x5abbf3 = document['getElementById']('leaderboard-list');
                const _0x267e01 = document['getElementById']('leaderboard-toggle');
                if (_0x5abbf3) {
                    _0x5abbf3['style']['display'] = 'none';
                    if (_0x267e01)
                        _0x267e01['style']['transform'] = 'rotate(180deg)';
                }
                const _0x15cac0 = document['getElementById']('role-list-items');
                const _0x4d790f = document['getElementById']('role-list-toggle');
                if (_0x15cac0) {
                    _0x15cac0['style']['display'] = 'none';
                    if (_0x4d790f)
                        _0x4d790f['style']['transform'] = 'rotate(180deg)';
                }
            }
            if (_0x3d99c1 && _0x3d99c1['readyState'] === WebSocket['OPEN']) {
                _0x3d99c1['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x569297,
                    'token': _0x14c962,
                    'body': _0x3043a2,
                    'eyes': _0x4e3e14
                }));
            } else if (!_0x3d99c1 || _0x3d99c1['readyState'] === WebSocket['CLOSED'] || _0x3d99c1['readyState'] === WebSocket['CLOSING']) {
                _0x284a8d();
            }
        });
    }
    _0x2741ef();
    _0x284a8d();
    _0x2fb6e3();
    _0x597159();
    _0x47995d();
});
function _0x597159() {
    const _0x2aa680 = document['getElementById']('settings-btn');
    const _0x304f0e = document['getElementById']('settings-panel');
    const _0x2e1833 = document['getElementById']('close-settings-btn');
    const _0x464a27 = document['getElementById']('setting-mouse-relative');
    if (_0x464a27) {
        _0x464a27['checked'] = _0x3af4e6;
        _0x464a27['addEventListener']('change', () => {
            _0x3af4e6 = _0x464a27['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x3af4e6 ? 'true' : 'false');
        });
    }
    const _0x2bcdda = document['getElementById']('setting-music-volume');
    const _0x1c88b1 = document['getElementById']('setting-music-volume-display');
    function _0x13820f(_0x84ad93) {
        const _0x584eb6 = (_0x84ad93['value'] - _0x84ad93['min']) / (_0x84ad93['max'] - _0x84ad93['min']) * 0x64;
        _0x84ad93['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x584eb6 + '%,\x20#444\x20' + _0x584eb6 + '%)';
    }
    if (_0x2bcdda) {
        const _0x1d6177 = _0x56bf95['getVolume']();
        const _0x4563e2 = Math['round'](_0x1d6177 * 0x64);
        _0x2bcdda['value'] = _0x4563e2;
        if (_0x1c88b1)
            _0x1c88b1['textContent'] = _0x4563e2 + '%';
        _0x13820f(_0x2bcdda);
        _0x2bcdda['addEventListener']('input', () => {
            const _0x8c457d = parseInt(_0x2bcdda['value'], 0xa);
            if (_0x1c88b1)
                _0x1c88b1['textContent'] = _0x8c457d + '%';
            _0x13820f(_0x2bcdda);
            _0x56bf95['setVolume'](_0x8c457d / 0x64);
            _0x56bf95['setMuted'](_0x8c457d === 0x0);
        });
    }
    if (_0x2aa680 && _0x304f0e) {
        _0x2aa680['addEventListener']('click', _0x35b611 => {
            _0x35b611['stopPropagation']();
            _0x304f0e['style']['display'] = _0x304f0e['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x2e1833 && _0x304f0e) {
        _0x2e1833['addEventListener']('click', () => {
            _0x304f0e['style']['display'] = 'none';
        });
    }
    const _0x3b092d = document['getElementById']('mayor-confirm-yes');
    const _0x238e1d = document['getElementById']('mayor-confirm-no');
    const _0x1765dd = document['getElementById']('mayor-confirm-dialog');
    if (_0x3b092d && _0x1765dd) {
        _0x3b092d['addEventListener']('click', () => {
            if (_0x3d99c1 && _0x3d99c1['readyState'] === WebSocket['OPEN']) {
                _0x3d99c1['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x1765dd['style']['display'] = 'none';
        });
    }
    if (_0x238e1d && _0x1765dd) {
        _0x238e1d['addEventListener']('click', () => {
            _0x1765dd['style']['display'] = 'none';
        });
    }
    const _0x2dd871 = document['getElementById']('close-ability-btn');
    if (_0x2dd871) {
        _0x2dd871['addEventListener']('click', () => {
            const _0x20163b = document['getElementById']('ability-ui');
            if (_0x20163b)
                _0x20163b['style']['display'] = 'none';
        });
    }
}
let _0x43f28e = '';
function _0x40e064(_0x9b8899) {
    const _0x478378 = document['getElementById']('vote-tally-panel');
    const _0x2af446 = document['getElementById']('vote-tally-list');
    if (!_0x478378 || !_0x2af446)
        return;
    if (_0x9b8899['state'] !== 'DAY_VOTE') {
        _0x478378['style']['display'] = 'none';
        _0x43f28e = '';
        return;
    }
    _0x478378['style']['display'] = 'block';
    const _0x31c1d7 = {};
    for (const _0x466a55 in _0x52aae8) {
        if (!_0x52aae8[_0x466a55]['isDead'])
            _0x31c1d7[_0x466a55] = 0x0;
    }
    if (_0x29be97 && !_0x1ca472['isDead'])
        _0x31c1d7[_0x29be97] = 0x0;
    const _0x4fec8d = _0x9b8899['votes'] || {};
    for (const _0x46a19b in _0x4fec8d) {
        const _0x5d7d60 = _0x4fec8d[_0x46a19b];
        const _0x2d8c84 = _0x9b8899['mayorRevealed'] && _0x9b8899['mayorRevealed'][_0x46a19b] ? 0x2 : 0x1;
        _0x31c1d7[_0x5d7d60] = (_0x31c1d7[_0x5d7d60] || 0x0) + _0x2d8c84;
    }
    let _0x4cd8b4 = 0x0;
    const _0x4eb160 = _0x9b8899['skips'] || {};
    for (const _0x5d7b09 in _0x4eb160) {
        _0x4cd8b4 += Number(_0x4eb160[_0x5d7b09]) || 0x1;
    }
    const _0x17a1a4 = JSON['stringify'](_0x31c1d7) + '_' + _0x4cd8b4 + '_' + _0x1ca472['isDead'];
    if (_0x17a1a4 === _0x43f28e)
        return;
    _0x43f28e = _0x17a1a4;
    _0x2af446['innerHTML'] = '';
    for (const _0x4679d6 in _0x31c1d7) {
        const _0x2ccdd3 = parseInt(_0x4679d6);
        const _0x20792a = _0x2ccdd3 === _0x29be97 ? _0x569297 : _0x52aae8[_0x4679d6] ? _0x52aae8[_0x4679d6]['name'] : 'Player\x20' + _0x4679d6;
        const _0x4717b3 = document['createElement']('div');
        _0x4717b3['className'] = 'vote-tally-entry';
        const _0xe66ff5 = document['createElement']('span');
        _0xe66ff5['textContent'] = _0x20792a;
        const _0x14e99a = document['createElement']('span');
        _0x14e99a['className'] = 'vote-count';
        _0x14e99a['textContent'] = _0x31c1d7[_0x4679d6] + '\x20vote' + (_0x31c1d7[_0x4679d6] === 0x1 ? '' : 's');
        _0x4717b3['appendChild'](_0xe66ff5);
        _0x4717b3['appendChild'](_0x14e99a);
        if (_0x2ccdd3 !== _0x29be97 && !_0x1ca472['isDead']) {
            _0x4717b3['style']['cursor'] = 'pointer';
            _0x4717b3['title'] = 'Vote\x20for\x20' + _0x20792a;
            _0x4717b3['addEventListener']('click', _0x355011 => {
                _0x355011['stopPropagation']();
                if (_0x3d99c1 && _0x3d99c1['readyState'] === WebSocket['OPEN']) {
                    _0x3d99c1['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x20792a
                    }));
                }
            });
        }
        _0x2af446['appendChild'](_0x4717b3);
    }
    const _0x1fd0b6 = document['createElement']('div');
    _0x1fd0b6['className'] = 'vote-tally-skip';
    _0x1fd0b6['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x4cd8b4 + '</span>';
    if (!_0x1ca472['isDead']) {
        _0x1fd0b6['style']['cursor'] = 'pointer';
        _0x1fd0b6['title'] = 'Click\x20to\x20skip\x20vote';
        _0x1fd0b6['addEventListener']('click', _0x3b8d1d => {
            _0x3b8d1d['stopPropagation']();
            if (_0x3d99c1 && _0x3d99c1['readyState'] === WebSocket['OPEN']) {
                _0x3d99c1['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x2af446['appendChild'](_0x1fd0b6);
}
let _0x2bcac1 = null;
let _0x387908 = null;
let _0x54c15c = null;
function _0x4f4d55() {
    if (_0x3d99c1 && _0x3d99c1['readyState'] === WebSocket['OPEN']) {
        _0x3d99c1['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x2bcac1,
            'abilityTarget': _0x387908,
            'killTarget': _0x54c15c
        }));
    }
}
function _0x38c33c() {
    const _0x564f26 = document['getElementById']('ability-ui-body');
    if (!_0x564f26)
        return;
    _0x564f26['innerHTML'] = '';
    if (_0x5cfba0 === 'Celebrity' || _0x5cfba0 === 'Mayor') {
        const _0x133ed5 = document['createElement']('div');
        _0x133ed5['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x133ed5['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x564f26['appendChild'](_0x133ed5);
        return;
    }
    if (_0x5cfba0 === 'Skinwalker') {
        const _0x2d68fd = document['createElement']('div');
        _0x2d68fd['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x2d68fd['innerText'] = 'Transform\x20into:';
        _0x564f26['appendChild'](_0x2d68fd);
        const _0x228864 = document['createElement']('div');
        _0x228864['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x48b910 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x1d9364 = _0x48fe39 => {
            if (!_0x88eb63['ROLE_LIST_RAW'] || _0x88eb63['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x88eb63['ROLE_LIST_RAW']['some'](_0x473787 => {
                if (_0x473787['name'] === _0x48fe39)
                    return !_0x473787['isDead'];
                if (_0x522023[_0x473787['name']] && _0x522023[_0x473787['name']]['includes'](_0x48fe39))
                    return !![];
                return ![];
            });
        };
        const _0x237f6c = [
            'None',
            ..._0x48b910['filter'](_0x1d9364)
        ];
        _0x237f6c['forEach'](_0x2e2ad2 => {
            const _0x15a334 = document['createElement']('button');
            _0x15a334['className'] = 'layer-btn';
            _0x15a334['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x15a334['innerText'] = _0x2e2ad2;
            const _0x5634f9 = _0x2e2ad2 === 'None' && !_0x2bcac1 || _0x2bcac1 === _0x2e2ad2;
            if (_0x5634f9)
                _0x15a334['classList']['add']('active');
            _0x15a334['onclick'] = () => {
                _0x2bcac1 = _0x2e2ad2 === 'None' ? null : _0x2e2ad2;
                _0x4f4d55();
                _0x38c33c();
            };
            _0x228864['appendChild'](_0x15a334);
        });
        _0x564f26['appendChild'](_0x228864);
        if (_0x1d9364('Vigilante')) {
            const _0x278244 = document['createElement']('div');
            _0x278244['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x278244['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x564f26['appendChild'](_0x278244);
        }
        if (_0x2bcac1 === 'Vigilante') {
            const _0x1db3ec = document['createElement']('div');
            _0x1db3ec['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x1db3ec['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x564f26['appendChild'](_0x1db3ec);
        } else if (_0x2bcac1 && _0x2bcac1 !== 'Celebrity') {
            const _0x323eb7 = document['createElement']('div');
            _0x323eb7['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x323eb7['innerText'] = 'Use\x20' + _0x2bcac1 + '\x20ability\x20on:';
            _0x564f26['appendChild'](_0x323eb7);
            const _0x10979b = document['createElement']('div');
            _0x10979b['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x5ad427 = document['createElement']('button');
            _0x5ad427['className'] = 'layer-btn';
            _0x5ad427['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x5ad427['innerText'] = 'No\x20one';
            if (!_0x387908)
                _0x5ad427['classList']['add']('active');
            _0x5ad427['onclick'] = () => {
                _0x387908 = null;
                _0x4f4d55();
                _0x38c33c();
            };
            _0x10979b['appendChild'](_0x5ad427);
            for (const _0x8f7176 in _0x52aae8) {
                const _0x20ea8b = _0x52aae8[_0x8f7176];
                if (_0x20ea8b['isDead'])
                    continue;
                const _0x1a89dc = document['createElement']('button');
                _0x1a89dc['className'] = 'layer-btn';
                _0x1a89dc['innerText'] = _0x20ea8b['name'];
                if (_0x387908 === parseInt(_0x8f7176))
                    _0x1a89dc['classList']['add']('active');
                _0x1a89dc['onclick'] = () => {
                    _0x387908 = parseInt(_0x8f7176);
                    _0x4f4d55();
                    _0x38c33c();
                };
                _0x10979b['appendChild'](_0x1a89dc);
            }
            _0x564f26['appendChild'](_0x10979b);
        }
        const _0x32b427 = document['createElement']('div');
        _0x32b427['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x32b427['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x564f26['appendChild'](_0x32b427);
        const _0x48990e = document['createElement']('div');
        _0x48990e['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x5f0201 = document['createElement']('button');
        _0x5f0201['className'] = 'layer-btn';
        _0x5f0201['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x5f0201['innerText'] = 'No\x20one';
        if (!_0x54c15c && !_0x88eb63['CURRENT_TARGET'])
            _0x5f0201['classList']['add']('active');
        _0x5f0201['onclick'] = () => {
            _0x54c15c = null;
            _0x88eb63['CURRENT_TARGET'] = null;
            _0x4f4d55();
            _0x38c33c();
        };
        _0x48990e['appendChild'](_0x5f0201);
        for (const _0x419de0 in _0x52aae8) {
            const _0x32b823 = _0x52aae8[_0x419de0];
            if (_0x32b823['isDead'])
                continue;
            const _0x53f5e8 = document['createElement']('button');
            _0x53f5e8['className'] = 'layer-btn';
            _0x53f5e8['innerText'] = _0x32b823['name'];
            if (_0x54c15c === parseInt(_0x419de0) || _0x88eb63['CURRENT_TARGET'] === parseInt(_0x419de0))
                _0x53f5e8['classList']['add']('active');
            _0x53f5e8['onclick'] = () => {
                _0x54c15c = parseInt(_0x419de0);
                _0x88eb63['CURRENT_TARGET'] = parseInt(_0x419de0);
                _0x4f4d55();
                _0x38c33c();
            };
            _0x48990e['appendChild'](_0x53f5e8);
        }
        _0x564f26['appendChild'](_0x48990e);
        return;
    }
    let _0xd73136 = '';
    let _0x32b4b1 = ![];
    if (_0x5cfba0 === 'Doctor') {
        _0xd73136 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x32b4b1 = !![];
    } else if (_0x5cfba0 === 'Investigator') {
        _0xd73136 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x5cfba0 === 'Tracker') {
        _0xd73136 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x5cfba0 === 'Archer') {
        _0xd73136 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x5cfba0 === 'Escort') {
        _0xd73136 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x5cfba0 === 'Vigilante') {
        _0xd73136 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x5d47d8 = document['createElement']('div');
    _0x5d47d8['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x5d47d8['innerText'] = _0xd73136;
    _0x564f26['appendChild'](_0x5d47d8);
    const _0x37cf15 = document['createElement']('div');
    _0x37cf15['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x4e914d = document['createElement']('button');
    _0x4e914d['className'] = 'layer-btn';
    _0x4e914d['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x4e914d['innerText'] = 'No\x20one';
    if (_0x88eb63['CURRENT_TARGET'] === null)
        _0x4e914d['classList']['add']('active');
    _0x4e914d['onclick'] = () => {
        _0x88eb63['CURRENT_TARGET'] = null;
        if (_0x3d99c1 && _0x3d99c1['readyState'] === WebSocket['OPEN']) {
            _0x3d99c1['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x38c33c();
    };
    _0x37cf15['appendChild'](_0x4e914d);
    for (const _0x3ffa96 in _0x52aae8) {
        const _0x54342a = _0x52aae8[_0x3ffa96];
        if (_0x54342a['isDead'])
            continue;
        const _0x285abb = document['createElement']('button');
        _0x285abb['className'] = 'layer-btn';
        _0x285abb['innerText'] = _0x54342a['name'];
        if (_0x88eb63['CURRENT_TARGET'] === parseInt(_0x3ffa96))
            _0x285abb['classList']['add']('active');
        _0x285abb['onclick'] = () => {
            _0x88eb63['CURRENT_TARGET'] = parseInt(_0x3ffa96);
            if (_0x3d99c1 && _0x3d99c1['readyState'] === WebSocket['OPEN']) {
                _0x3d99c1['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x3ffa96)
                }));
            }
            _0x38c33c();
        };
        _0x37cf15['appendChild'](_0x285abb);
    }
    if (_0x32b4b1 && !_0x1ca472['isDead']) {
        const _0x3342c8 = document['createElement']('button');
        _0x3342c8['className'] = 'layer-btn';
        _0x3342c8['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x3342c8['innerText'] = _0x569297 + '\x20(Self)';
        if (_0x88eb63['CURRENT_TARGET'] === _0x29be97)
            _0x3342c8['classList']['add']('active');
        _0x3342c8['onclick'] = () => {
            _0x88eb63['CURRENT_TARGET'] = _0x29be97;
            if (_0x3d99c1 && _0x3d99c1['readyState'] === WebSocket['OPEN']) {
                _0x3d99c1['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x29be97
                }));
            }
            _0x38c33c();
        };
        _0x37cf15['appendChild'](_0x3342c8);
    }
    _0x564f26['appendChild'](_0x37cf15);
}
function _0x284a8d() {
    if (_0x3d99c1 && (_0x3d99c1['readyState'] === WebSocket['OPEN'] || _0x3d99c1['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x39a199 = new URLSearchParams();
    if (_0x14c962)
        _0x39a199['set']('token', _0x14c962);
    _0x39a199['set']('ngrok-skip-browser-warning', 'true');
    const _0x26f4cd = 'wss://relating-worker-pipeline-enclosure.trycloudflare.com';
    const _0xf6ae24 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x26f4cd;
    const _0x1b8c29 = _0xf6ae24 + '/?' + _0x39a199['toString']();
    _0x3d99c1 = new WebSocket(_0x1b8c29);
    _0x3d99c1['onopen'] = function () {
        if (!_0x37ddc6 && this['readyState'] === WebSocket['OPEN']) {
            this['send'](JSON['stringify']({
                'type': 'join',
                'name': _0x569297,
                'token': _0x14c962,
                'body': _0x3043a2,
                'eyes': _0x4e3e14
            }));
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x3d99c1 && _0x3d99c1['readyState'] === WebSocket['OPEN']) {
            _0x3d99c1['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x3d99c1['onclose'] = _0x4ef697 => {
        if (_0x4ef697['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x4ef697['code'] === 0xfa2 || _0x4ef697['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x21cac3 = document['getElementById']('disconnect-overlay');
        if (!_0x21cac3) {
            _0x21cac3 = document['createElement']('div');
            _0x21cac3['id'] = 'disconnect-overlay';
            _0x21cac3['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x21cac3['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x21cac3);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x3d99c1['onmessage'] = _0xe999b3 => {
        const _0x198259 = JSON['parse'](_0xe999b3['data']);
        if (_0x198259['type'] === 'map_data') {
            _0x88eb63['MAP']['tileSize'] = _0x198259['map']['tileSize'];
            _0x88eb63['MAP']['columns'] = _0x198259['map']['columns'];
            _0x88eb63['MAP']['rows'] = _0x198259['map']['rows'];
            _0x88eb63['MAP']['layers'] = _0x198259['map']['layers'];
            if (_0x198259['map']['doors']) {
                _0x88eb63['MAP']['doors'] = _0x198259['map']['doors'];
                const _0xe67a2b = _0x88eb63['MAP']['layers']['find'](_0x583be1 => _0x583be1['name'] === 'floor2');
                if (_0xe67a2b) {
                    for (const _0x4f9a66 in _0x88eb63['MAP']['doors']) {
                        _0xe67a2b['data'][parseInt(_0x4f9a66)] = 0x2;
                    }
                }
            }
            if (_0x198259['entities'])
                _0x88eb63['ENTITIES'] = _0x198259['entities'];
            _0x2b361c();
            _0x88eb63['SYSTEM']['isReady'] = !![];
            _0x214f5f();
            if (!_0x88eb63['SYSTEM']['_gameLoopRunning']) {
                _0x88eb63['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x3f02ef);
            }
            return;
        }
        if (_0x198259['type'] === 'init') {
            _0x29be97 = _0x198259['id'];
            _0x37ddc6 = ![];
            _0x234092();
            if (_0x3649d1) {
                const _0x75e57d = document['getElementById']('leaderboard-list');
                const _0x4a725a = document['getElementById']('leaderboard-toggle');
                if (_0x75e57d) {
                    _0x75e57d['style']['display'] = 'none';
                    if (_0x4a725a)
                        _0x4a725a['style']['transform'] = 'rotate(180deg)';
                }
                const _0x2095da = document['getElementById']('role-list-items');
                const _0x1feac7 = document['getElementById']('role-list-toggle');
                if (_0x2095da) {
                    _0x2095da['style']['display'] = 'none';
                    if (_0x1feac7)
                        _0x1feac7['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x3405c2 = _0x198259['isOwner'] || ![];
            _0x569297 = _0x198259['name'] || _0x569297;
            _0x88eb63['MAP']['tileSize'] = _0x198259['map']['tileSize'];
            _0x88eb63['MAP']['columns'] = _0x198259['map']['columns'];
            _0x88eb63['MAP']['rows'] = _0x198259['map']['rows'];
            _0x88eb63['MAP']['layers'] = _0x198259['map']['layers'];
            if (_0x198259['map']['doors']) {
                _0x88eb63['MAP']['doors'] = _0x198259['map']['doors'];
                const _0x51711c = _0x88eb63['MAP']['layers']['find'](_0x11065a => _0x11065a['name'] === 'floor2');
                if (_0x51711c) {
                    for (const _0x5e0f48 in _0x88eb63['MAP']['doors']) {
                        _0x51711c['data'][parseInt(_0x5e0f48)] = 0x2;
                    }
                }
            }
            if (_0x198259['entities'])
                _0x88eb63['ENTITIES'] = _0x198259['entities'];
            _0x2b361c();
            _0x1ca472['x'] = _0x88eb63['MAP']['columns'] * _0x88eb63['MAP']['tileSize'] / 0x2;
            _0x1ca472['y'] = _0x88eb63['MAP']['rows'] * _0x88eb63['MAP']['tileSize'] / 0x2;
            _0x88eb63['CAMERA']['x'] = _0x1ca472['x'] + _0x1ca472['width'] / 0x2 - _0x88eb63['CAMERA']['width'] / 0x2;
            _0x88eb63['CAMERA']['y'] = _0x1ca472['y'] + _0x1ca472['height'] / 0x2 - _0x88eb63['CAMERA']['height'] / 0x2;
            if (_0x3405c2) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x4e7759();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x88eb63['SYSTEM']['lastTime'] = performance['now']();
            _0x88eb63['SYSTEM']['isReady'] = !![];
            _0x5080ef();
            if (!_0x88eb63['SYSTEM']['_gameLoopRunning']) {
                _0x88eb63['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x3f02ef);
            }
            return;
        } else if (_0x198259['type'] === 'state') {
            const _0x29519e = {};
            for (const _0x579f43 in _0x198259['players']) {
                if (parseInt(_0x579f43) === _0x29be97)
                    continue;
                const _0x39a1b2 = _0x198259['players'][_0x579f43];
                const _0x19bf98 = _0x52aae8[_0x579f43];
                if (_0x19bf98) {
                    const _0x40ae74 = _0x39a1b2['x'] - _0x19bf98['renderX'];
                    const _0x5009a6 = _0x39a1b2['y'] - _0x19bf98['renderY'];
                    const _0x556269 = _0x40ae74 * _0x40ae74 + _0x5009a6 * _0x5009a6 > 0x78 * 0x78;
                    Object['assign'](_0x19bf98, _0x39a1b2);
                    if (_0x556269) {
                        _0x19bf98['renderX'] = _0x39a1b2['x'];
                        _0x19bf98['renderY'] = _0x39a1b2['y'];
                    }
                    _0x29519e[_0x579f43] = _0x19bf98;
                } else {
                    _0x29519e[_0x579f43] = {
                        ..._0x39a1b2,
                        'renderX': _0x39a1b2['x'],
                        'renderY': _0x39a1b2['y'],
                        'renderAngle': _0x39a1b2['angle'] || 0x0
                    };
                }
            }
            _0x52aae8 = _0x29519e;
            if (_0x198259['players'][_0x29be97]) {
                const _0x1988c2 = _0x198259['players'][_0x29be97];
                _0x1ca472['chats'] = _0x1988c2['chats'] || [];
                _0x1ca472['isDead'] = _0x1988c2['isDead'];
                if (_0x1988c2['name'])
                    _0x569297 = _0x1988c2['name'];
                _0x5080ef();
                const _0x366af3 = Math['hypot'](_0x1988c2['x'] - _0x1ca472['x'], _0x1988c2['y'] - _0x1ca472['y']);
                if (_0x366af3 > 0x32) {
                    _0x1ca472['x'] += (_0x1988c2['x'] - _0x1ca472['x']) * 0.35;
                    _0x1ca472['y'] += (_0x1988c2['y'] - _0x1ca472['y']) * 0.35;
                }
            }
            if (_0x198259['entities'])
                _0x88eb63['ENTITIES'] = _0x198259['entities'];
            if (_0x198259['game']) {
                _0x88eb63['GAME_STATE'] = _0x198259['game']['state'];
                _0x88eb63['NIGHT_ABILITY_OPEN'] = _0x198259['game']['nightAbilityOpen'];
                if (_0x198259['game']['mayorRevealed']) {
                    for (const _0x5c80fc in _0x198259['game']['mayorRevealed']) {
                        _0x4c0f94['add'](parseInt(_0x5c80fc));
                    }
                }
                if (_0x88eb63['LAST_STATE'] !== _0x88eb63['GAME_STATE']) {
                    if (_0x88eb63['GAME_STATE'] !== 'NIGHT') {
                        _0x88eb63['CURRENT_TARGET'] = null;
                        _0x2bcac1 = null;
                        _0x387908 = null;
                        _0x54c15c = null;
                        const _0x2c8b50 = document['getElementById']('ability-ui');
                        if (_0x2c8b50)
                            _0x2c8b50['style']['display'] = 'none';
                    }
                    if (_0x88eb63['GAME_STATE'] === 'NIGHT') {
                        _0x1ca472['chats'] = [];
                        for (const _0x23ca16 in _0x52aae8) {
                            _0x52aae8[_0x23ca16]['chats'] = [];
                        }
                    }
                    _0x88eb63['LAST_STATE'] = _0x88eb63['GAME_STATE'];
                    _0x4f47fa();
                    _0x56bf95['onStateChange'](_0x88eb63['GAME_STATE'], _0x198259['game']['nightAbilityOpen']);
                }
                const _0x3fd04a = document['getElementById']('phase-ui');
                if (_0x3fd04a) {
                    _0x3fd04a['style']['display'] = 'block';
                    let _0x30c8a7 = _0x198259['game']['state']['replace']('_', '\x20');
                    if (_0x198259['game']['state'] === 'DAY_DISCUSS') {
                        _0x30c8a7 = 'DAY\x20' + (_0x198259['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x198259['game']['timer'] + 's';
                    } else if (_0x198259['game']['state'] === 'DAY_VOTE') {
                        _0x30c8a7 = 'DAY\x20' + (_0x198259['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x198259['game']['timer'] + 's';
                    } else if (_0x198259['game']['state'] === 'NIGHT') {
                        const _0x2b422b = _0x198259['game']['dayCount'] || 0x1;
                        if (_0x198259['game']['nightAbilityOpen']) {
                            _0x30c8a7 = 'NIGHT\x20' + _0x2b422b + '\x20ABILITY\x20PHASE';
                            const _0x2bdd6e = _0x198259['game']['abilityTimer'] !== undefined ? _0x198259['game']['abilityTimer'] : _0x198259['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x2bdd6e + 's';
                        } else {
                            _0x30c8a7 = 'NIGHT\x20' + _0x2b422b;
                            document['getElementById']('phase-timer')['innerText'] = _0x198259['game']['timer'] + 's';
                        }
                    }
                    document['getElementById']('phase-name')['innerText'] = _0x30c8a7;
                }
                if (_0x198259['game']['state'] === 'NIGHT') {
                    const _0xb19c67 = document['getElementById']('ability-timer-label');
                    if (_0xb19c67) {
                        const _0x2cb57a = _0x198259['game']['abilityTimer'] !== undefined ? _0x198259['game']['abilityTimer'] : _0x198259['game']['timer'];
                        _0xb19c67['innerText'] = _0x198259['game']['nightAbilityOpen'] ? _0x2cb57a + 's' : '';
                    }
                    if (_0x198259['game']['nightAbilityOpen'] && !_0x559296 && !_0x1ca472['isDead']) {
                        _0x559296 = !![];
                        _0x38c33c();
                        const _0x15918f = document['getElementById']('ability-ui');
                        if (_0x15918f)
                            _0x15918f['style']['display'] = 'block';
                    }
                    if (!_0x198259['game']['nightAbilityOpen']) {
                        const _0x2e1e91 = document['getElementById']('ability-ui');
                        if (_0x2e1e91 && _0x2e1e91['style']['display'] === 'block') {
                            _0x2e1e91['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x559296 = ![];
                }
                _0x40e064(_0x198259['game']);
                if (_0x198259['game']['roleListMode'] !== undefined) {
                    _0x88eb63['ROLE_LIST_RAW'] = _0x198259['game']['roleList'] || [];
                    _0x11b5d0(_0x198259['game']['roleList'], _0x198259['game']['roleListMode']);
                }
            }
        } else if (_0x198259['type'] === 'teleport') {
            _0x1ca472['x'] = _0x198259['x'];
            _0x1ca472['y'] = _0x198259['y'];
            _0x1ca472['vx'] = 0x0;
            _0x1ca472['vy'] = 0x0;
            _0x88eb63['CAMERA']['x'] = null;
            if (_0x198259['teleportId'] !== undefined)
                _0x88a490 = _0x198259['teleportId'];
        } else if (_0x198259['type'] === 'bulk_teleport') {
            for (const _0x5d16bd in _0x198259['positions']) {
                const _0x5fbacc = _0x198259['positions'][_0x5d16bd];
                if (parseInt(_0x5d16bd) === _0x29be97) {
                    _0x1ca472['x'] = _0x5fbacc['x'];
                    _0x1ca472['y'] = _0x5fbacc['y'];
                    _0x1ca472['vx'] = 0x0;
                    _0x1ca472['vy'] = 0x0;
                    _0x88eb63['CAMERA']['x'] = null;
                    continue;
                }
                const _0x595f4e = _0x52aae8[_0x5d16bd];
                if (_0x595f4e) {
                    _0x595f4e['x'] = _0x5fbacc['x'];
                    _0x595f4e['y'] = _0x5fbacc['y'];
                    _0x595f4e['renderX'] = _0x5fbacc['x'];
                    _0x595f4e['renderY'] = _0x5fbacc['y'];
                    _0x595f4e['vx'] = 0x0;
                    _0x595f4e['vy'] = 0x0;
                }
            }
        } else if (_0x198259['type'] === 'player_left') {
            delete _0x52aae8[_0x198259['id']];
            _0x4c0f94['delete'](parseInt(_0x198259['id']));
        } else if (_0x198259['type'] === 'map_update') {
            const _0x4e5e71 = _0x88eb63['MAP']['layers']['find'](_0x6c82ab => _0x6c82ab['name'] === _0x198259['layer']);
            if (_0x4e5e71) {
                _0x4e5e71['data'][_0x198259['row'] * _0x88eb63['MAP']['columns'] + _0x198259['col']] = _0x198259['gid'];
                const _0x417788 = _0x198259['row'] * _0x88eb63['MAP']['columns'] + _0x198259['col'];
                if (_0x88eb63['MAP']['doors'] && _0x88eb63['MAP']['doors'][_0x417788]) {
                    const _0x142196 = _0x88eb63['MAP']['layers']['find'](_0xaced29 => _0xaced29['name'] === 'floor2');
                    if (_0x142196)
                        _0x142196['data'][_0x417788] = 0x2;
                }
                const _0x1e3337 = Math['floor'](_0x198259['col'] * _0x88eb63['MAP']['tileSize'] / _0x88eb63['MAP']['chunkSize']);
                const _0x172c9a = Math['floor'](_0x198259['row'] * _0x88eb63['MAP']['tileSize'] / _0x88eb63['MAP']['chunkSize']);
                _0x4adea0(_0x1e3337, _0x172c9a);
            }
        } else if (_0x198259['type'] === 'role_assign') {
            _0x5cfba0 = _0x198259['role'];
            _0x1ca472['isDead'] = _0x5cfba0 === 'Spectator';
            _0x4c0f94['clear']();
            _0x88eb63['CURRENT_TARGET'] = null;
            _0x2bcac1 = null;
            _0x387908 = null;
            _0x54c15c = null;
            _0x559296 = ![];
            const _0x919d6e = document['getElementById']('ability-ui');
            if (_0x919d6e)
                _0x919d6e['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x5cfba0;
            _0x4f47fa();
            _0x7f801b(_0x5cfba0 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x5cfba0, !![]);
            let _0x2a1598 = '';
            if (_0x5cfba0 === 'Investigator')
                _0x2a1598 = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x5cfba0 === 'Tracker')
                _0x2a1598 = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x5cfba0 === 'Doctor')
                _0x2a1598 = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x5cfba0 === 'Archer')
                _0x2a1598 = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x5cfba0 === 'Escort')
                _0x2a1598 = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x5cfba0 === 'Vigilante')
                _0x2a1598 = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x5cfba0 === 'Skinwalker')
                _0x2a1598 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x5cfba0 === 'Celebrity')
                _0x2a1598 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x5cfba0 === 'Mayor')
                _0x2a1598 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x7f801b(_0x2a1598, !![]);
        } else if (_0x198259['type'] === 'mayor_reveal') {
            _0x4c0f94['add'](parseInt(_0x198259['playerId']));
            _0x5080ef();
            _0x4f47fa();
        } else if (_0x198259['type'] === 'rolelist_update') {
            _0x88eb63['ROLE_LIST_RAW'] = _0x198259['list'] || [];
            _0x11b5d0(_0x198259['list'], _0x198259['mode']);
        } else if (_0x198259['type'] === 'sound_event') {
            _0x56bf95['onSoundEvent'](_0x198259['track']);
        } else if (_0x198259['type'] === 'game_over') {
            _0x56bf95['onStateChange']('LOBBY', ![]);
            _0x11b5d0([], 'off');
            _0x5cfba0 = null;
            _0x1ca472['isDead'] = ![];
            _0x4c0f94['clear']();
            _0x88eb63['CURRENT_TARGET'] = null;
            _0x2bcac1 = null;
            _0x387908 = null;
            _0x54c15c = null;
            _0x559296 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x4f47fa();
            _0x7f801b('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x198259['type'] === 'chat_log') {
            _0x7f801b(_0x198259['sender'] + ':\x20' + _0x198259['text']);
        } else if (_0x198259['type'] === 'sys_chat') {
            _0x7f801b(_0x198259['text'], !![]);
        }
    };
}
function _0x7f801b(_0x1a4f09, _0x5b58d8 = ![]) {
    const _0x3d21d0 = document['getElementById']('chat-log-messages');
    const _0x5641b2 = document['getElementById']('chat-log-ui');
    const _0x2c26c5 = _0x5641b2['scrollHeight'] - _0x5641b2['scrollTop'] - _0x5641b2['clientHeight'] < 0x1e;
    const _0x94e2d6 = document['createElement']('div');
    _0x94e2d6['className'] = 'chat-log-line' + (_0x5b58d8 ? '\x20sys-msg' : '');
    _0x94e2d6['innerText'] = _0x1a4f09;
    _0x3d21d0['appendChild'](_0x94e2d6);
    if (_0x2c26c5) {
        _0x5641b2['scrollTop'] = _0x5641b2['scrollHeight'];
    }
    if (_0x3d21d0['childElementCount'] > 0xc8) {
        _0x3d21d0['removeChild'](_0x3d21d0['firstChild']);
    }
}
let _0x15e425 = -0x1, _0x26f827 = -0x1, _0x359011 = -0x1, _0x390ce2 = 0x0;
function _0x1ec852() {
    if (!_0x29be97 || !_0x3d99c1 || _0x3d99c1['readyState'] !== WebSocket['OPEN'])
        return;
    const _0xeed9b8 = performance['now']();
    const _0x50f281 = _0xeed9b8 - _0x390ce2;
    const _0x4155be = Math['abs'](_0x1ca472['x'] - _0x15e425) > 0.05 || Math['abs'](_0x1ca472['y'] - _0x26f827) > 0.05 || Math['abs'](_0x1ca472['angle'] - _0x359011) > 0.02;
    if (!_0x4155be && _0x50f281 < 0xc8)
        return;
    if (_0x50f281 < 0x19)
        return;
    _0x390ce2 = _0xeed9b8;
    _0x15e425 = _0x1ca472['x'];
    _0x26f827 = _0x1ca472['y'];
    _0x359011 = _0x1ca472['angle'];
    if (!_0x29be97 || !_0x3d99c1 || _0x3d99c1['readyState'] !== WebSocket['OPEN'])
        return;
    _0x3d99c1['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x1ca472['x'],
        'y': _0x1ca472['y'],
        'vx': _0x1ca472['vx'],
        'vy': _0x1ca472['vy'],
        'angle': _0x1ca472['angle'],
        'scale': _0x1ca472['scale'],
        'teleportId': _0x88a490
    }));
}
function _0x344275() {
    if (_0x1ca472['isDead'])
        return;
    const _0x51fc0f = _0x88eb63['MAP']['layers']['find'](_0x523ac6 => _0x523ac6['name'] === 'walls');
    if (!_0x51fc0f)
        return;
    const _0x51c6ac = _0x1ca472['scale'];
    const _0x3201b4 = _0x1ca472['width'] * _0x51c6ac / 0x2;
    for (let _0x3b923f = 0x0; _0x3b923f < 0x3; _0x3b923f++) {
        let _0x477eb0 = _0x1ca472['x'] + _0x1ca472['width'] / 0x2;
        let _0x21cb11 = _0x1ca472['y'] + _0x1ca472['height'] / 0x2;
        const _0x2f34f0 = Math['floor']((_0x477eb0 - _0x3201b4) / _0x88eb63['MAP']['tileSize']);
        const _0x13edf5 = Math['floor']((_0x477eb0 + _0x3201b4) / _0x88eb63['MAP']['tileSize']);
        const _0x5a9847 = Math['floor']((_0x21cb11 - _0x3201b4) / _0x88eb63['MAP']['tileSize']);
        const _0xe6eb92 = Math['floor']((_0x21cb11 + _0x3201b4) / _0x88eb63['MAP']['tileSize']);
        for (let _0x4e77a2 = _0x5a9847; _0x4e77a2 <= _0xe6eb92; _0x4e77a2++) {
            for (let _0x3822c4 = _0x2f34f0; _0x3822c4 <= _0x13edf5; _0x3822c4++) {
                if (_0x3822c4 < 0x0 || _0x3822c4 >= _0x88eb63['MAP']['columns'] || _0x4e77a2 < 0x0 || _0x4e77a2 >= _0x88eb63['MAP']['rows'])
                    continue;
                if (_0x51fc0f['data'][_0x4e77a2 * _0x88eb63['MAP']['columns'] + _0x3822c4] === 0x0)
                    continue;
                const _0x1f8478 = _0x3822c4 * _0x88eb63['MAP']['tileSize'];
                const _0x1fef83 = _0x4e77a2 * _0x88eb63['MAP']['tileSize'];
                const _0x1e179b = _0x477eb0 < _0x1f8478 ? _0x1f8478 : _0x477eb0 > _0x1f8478 + _0x88eb63['MAP']['tileSize'] ? _0x1f8478 + _0x88eb63['MAP']['tileSize'] : _0x477eb0;
                const _0x114d83 = _0x21cb11 < _0x1fef83 ? _0x1fef83 : _0x21cb11 > _0x1fef83 + _0x88eb63['MAP']['tileSize'] ? _0x1fef83 + _0x88eb63['MAP']['tileSize'] : _0x21cb11;
                const _0x1e5959 = _0x477eb0 - _0x1e179b;
                const _0x4008e3 = _0x21cb11 - _0x114d83;
                const _0x3c3d0c = Math['sqrt'](_0x1e5959 * _0x1e5959 + _0x4008e3 * _0x4008e3);
                if (_0x3c3d0c < _0x3201b4) {
                    if (_0x3c3d0c === 0x0) {
                        const _0x4101c7 = _0x477eb0 - _0x1f8478;
                        const _0x139119 = _0x1f8478 + _0x88eb63['MAP']['tileSize'] - _0x477eb0;
                        const _0x2952ea = _0x21cb11 - _0x1fef83;
                        const _0x4b7975 = _0x1fef83 + _0x88eb63['MAP']['tileSize'] - _0x21cb11;
                        const _0x576d46 = Math['min'](_0x4101c7, _0x139119, _0x2952ea, _0x4b7975);
                        if (_0x576d46 === _0x4101c7)
                            _0x477eb0 = _0x1f8478 - _0x3201b4;
                        else if (_0x576d46 === _0x139119)
                            _0x477eb0 = _0x1f8478 + _0x88eb63['MAP']['tileSize'] + _0x3201b4;
                        else if (_0x576d46 === _0x2952ea)
                            _0x21cb11 = _0x1fef83 - _0x3201b4;
                        else
                            _0x21cb11 = _0x1fef83 + _0x88eb63['MAP']['tileSize'] + _0x3201b4;
                    } else {
                        const _0x294b9c = _0x3201b4 - _0x3c3d0c;
                        _0x477eb0 += _0x1e5959 / _0x3c3d0c * _0x294b9c;
                        _0x21cb11 += _0x4008e3 / _0x3c3d0c * _0x294b9c;
                        const _0x2cb356 = _0x1ca472['vx'] * (_0x1e5959 / _0x3c3d0c) + _0x1ca472['vy'] * (_0x4008e3 / _0x3c3d0c);
                        if (_0x2cb356 < 0x0) {
                            _0x1ca472['vx'] -= _0x2cb356 * (_0x1e5959 / _0x3c3d0c);
                            _0x1ca472['vy'] -= _0x2cb356 * (_0x4008e3 / _0x3c3d0c);
                        }
                    }
                }
            }
        }
        _0x1ca472['x'] = _0x477eb0 - _0x1ca472['width'] / 0x2;
        _0x1ca472['y'] = _0x21cb11 - _0x1ca472['height'] / 0x2;
    }
}
function _0x1c5ddd(_0x2dd5ff) {
    const _0x1bae6f = _0x88eb63['MAP']['layers']['find'](_0x5aceea => _0x5aceea['name'] === 'walls');
    if (!_0x1bae6f)
        return;
    const _0x5106e2 = _0x2dd5ff['width'] / 0x2;
    for (let _0xba2488 = 0x0; _0xba2488 < 0x2; _0xba2488++) {
        let _0x35a235 = _0x2dd5ff['x'] + _0x2dd5ff['width'] / 0x2;
        let _0x40fc82 = _0x2dd5ff['y'] + _0x2dd5ff['height'] / 0x2;
        const _0x44b549 = Math['floor']((_0x35a235 - _0x5106e2) / _0x88eb63['MAP']['tileSize']);
        const _0x5ed472 = Math['floor']((_0x35a235 + _0x5106e2) / _0x88eb63['MAP']['tileSize']);
        const _0x4f4800 = Math['floor']((_0x40fc82 - _0x5106e2) / _0x88eb63['MAP']['tileSize']);
        const _0x23b00d = Math['floor']((_0x40fc82 + _0x5106e2) / _0x88eb63['MAP']['tileSize']);
        for (let _0x2d7385 = _0x4f4800; _0x2d7385 <= _0x23b00d; _0x2d7385++) {
            for (let _0x21cde3 = _0x44b549; _0x21cde3 <= _0x5ed472; _0x21cde3++) {
                if (_0x21cde3 < 0x0 || _0x21cde3 >= _0x88eb63['MAP']['columns'] || _0x2d7385 < 0x0 || _0x2d7385 >= _0x88eb63['MAP']['rows'])
                    continue;
                if (_0x1bae6f['data'][_0x2d7385 * _0x88eb63['MAP']['columns'] + _0x21cde3] === 0x0)
                    continue;
                const _0x317b25 = _0x21cde3 * _0x88eb63['MAP']['tileSize'];
                const _0x455c6c = _0x2d7385 * _0x88eb63['MAP']['tileSize'];
                const _0x4bc9eb = _0x35a235 < _0x317b25 ? _0x317b25 : _0x35a235 > _0x317b25 + _0x88eb63['MAP']['tileSize'] ? _0x317b25 + _0x88eb63['MAP']['tileSize'] : _0x35a235;
                const _0x55c026 = _0x40fc82 < _0x455c6c ? _0x455c6c : _0x40fc82 > _0x455c6c + _0x88eb63['MAP']['tileSize'] ? _0x455c6c + _0x88eb63['MAP']['tileSize'] : _0x40fc82;
                const _0x47239a = _0x35a235 - _0x4bc9eb;
                const _0x3eed4a = _0x40fc82 - _0x55c026;
                const _0x5972eb = Math['sqrt'](_0x47239a * _0x47239a + _0x3eed4a * _0x3eed4a);
                if (_0x5972eb < _0x5106e2) {
                    if (_0x5972eb === 0x0) {
                        const _0x29b87d = _0x35a235 - _0x317b25;
                        const _0x523bba = _0x317b25 + _0x88eb63['MAP']['tileSize'] - _0x35a235;
                        const _0x5c4a9d = _0x40fc82 - _0x455c6c;
                        const _0x14ede2 = _0x455c6c + _0x88eb63['MAP']['tileSize'] - _0x40fc82;
                        const _0x140423 = Math['min'](_0x29b87d, _0x523bba, _0x5c4a9d, _0x14ede2);
                        if (_0x140423 === _0x29b87d)
                            _0x35a235 = _0x317b25 - _0x5106e2;
                        else if (_0x140423 === _0x523bba)
                            _0x35a235 = _0x317b25 + _0x88eb63['MAP']['tileSize'] + _0x5106e2;
                        else if (_0x140423 === _0x5c4a9d)
                            _0x40fc82 = _0x455c6c - _0x5106e2;
                        else
                            _0x40fc82 = _0x455c6c + _0x88eb63['MAP']['tileSize'] + _0x5106e2;
                    } else {
                        const _0x35dce1 = _0x5106e2 - _0x5972eb;
                        _0x35a235 += _0x47239a / _0x5972eb * _0x35dce1;
                        _0x40fc82 += _0x3eed4a / _0x5972eb * _0x35dce1;
                    }
                }
            }
        }
        _0x2dd5ff['x'] = _0x35a235 - _0x2dd5ff['width'] / 0x2;
        _0x2dd5ff['y'] = _0x40fc82 - _0x2dd5ff['height'] / 0x2;
    }
}
function _0x1021a0(_0x242b47) {
    const _0x43d4f0 = _0x242b47['width'] / 0x2;
    for (let _0x18b0e5 = 0x0; _0x18b0e5 < 0x2; _0x18b0e5++) {
        let _0x142e98 = _0x242b47['x'] + _0x242b47['width'] / 0x2;
        let _0x4079db = _0x242b47['y'] + _0x242b47['height'] / 0x2;
        for (const _0x165f3b of _0x88eb63['ENTITIES']) {
            const _0x4b4043 = _0x142e98 < _0x165f3b['x'] ? _0x165f3b['x'] : _0x142e98 > _0x165f3b['x'] + _0x165f3b['w'] ? _0x165f3b['x'] + _0x165f3b['w'] : _0x142e98;
            const _0x423fee = _0x4079db < _0x165f3b['y'] ? _0x165f3b['y'] : _0x4079db > _0x165f3b['y'] + _0x165f3b['h'] ? _0x165f3b['y'] + _0x165f3b['h'] : _0x4079db;
            const _0x5ec25d = _0x142e98 - _0x4b4043;
            const _0x4b3357 = _0x4079db - _0x423fee;
            const _0x5f3223 = Math['sqrt'](_0x5ec25d * _0x5ec25d + _0x4b3357 * _0x4b3357);
            if (_0x5f3223 < _0x43d4f0 && _0x5f3223 > 0x0) {
                const _0x28f2ca = _0x43d4f0 - _0x5f3223;
                const _0x2baf81 = _0x5ec25d / _0x5f3223;
                const _0x1f9760 = _0x4b3357 / _0x5f3223;
                _0x142e98 += _0x2baf81 * _0x28f2ca;
                _0x4079db += _0x1f9760 * _0x28f2ca;
            } else if (_0x5f3223 === 0x0) {
                const _0x3f6f4e = _0x142e98 - _0x165f3b['x'];
                const _0x1639a5 = _0x165f3b['x'] + _0x165f3b['w'] - _0x142e98;
                const _0x210e17 = _0x4079db - _0x165f3b['y'];
                const _0x134282 = _0x165f3b['y'] + _0x165f3b['h'] - _0x4079db;
                const _0x30aa87 = Math['min'](_0x3f6f4e, _0x1639a5, _0x210e17, _0x134282);
                if (_0x30aa87 === _0x3f6f4e)
                    _0x142e98 = _0x165f3b['x'] - _0x43d4f0;
                else if (_0x30aa87 === _0x1639a5)
                    _0x142e98 = _0x165f3b['x'] + _0x165f3b['w'] + _0x43d4f0;
                else if (_0x30aa87 === _0x210e17)
                    _0x4079db = _0x165f3b['y'] - _0x43d4f0;
                else
                    _0x4079db = _0x165f3b['y'] + _0x165f3b['h'] + _0x43d4f0;
            }
        }
        _0x242b47['x'] = _0x142e98 - _0x242b47['width'] / 0x2;
        _0x242b47['y'] = _0x4079db - _0x242b47['height'] / 0x2;
    }
}
function _0x363148() {
    if (_0x1ca472['isDead'])
        return;
    const _0x5cbc3f = _0x1ca472['width'] / 0x2;
    const _0x15dc1c = _0x1ca472['x'] + _0x1ca472['width'] / 0x2;
    const _0x170dc0 = _0x1ca472['y'] + _0x1ca472['height'] / 0x2;
    for (const _0x49038f in _0x52aae8) {
        const _0x1c9968 = _0x52aae8[_0x49038f];
        if (_0x1c9968['isDead'])
            continue;
        const _0x48bcb5 = _0x1c9968['width'] / 0x2;
        const _0x513ab6 = _0x5cbc3f + _0x48bcb5;
        const _0x15e2f0 = (_0x1c9968['renderX'] ?? _0x1c9968['x']) + _0x1c9968['width'] / 0x2;
        const _0x3b2d38 = (_0x1c9968['renderY'] ?? _0x1c9968['y']) + _0x1c9968['height'] / 0x2;
        const _0xe0895e = _0x15dc1c - _0x15e2f0;
        const _0x33e4ac = _0x170dc0 - _0x3b2d38;
        const _0x1bcc4e = Math['sqrt'](_0xe0895e * _0xe0895e + _0x33e4ac * _0x33e4ac);
        if (_0x1bcc4e > 0x0 && _0x1bcc4e < _0x513ab6) {
            const _0x4de896 = _0x513ab6 - _0x1bcc4e;
            const _0x47e001 = _0xe0895e / _0x1bcc4e;
            const _0x205cee = _0x33e4ac / _0x1bcc4e;
            _0x1ca472['x'] += _0x47e001 * (_0x4de896 * 0.25);
            _0x1ca472['y'] += _0x205cee * (_0x4de896 * 0.25);
            _0x1c9968['x'] -= _0x47e001 * (_0x4de896 * 0.75);
            _0x1c9968['y'] -= _0x205cee * (_0x4de896 * 0.75);
            _0x1c5ddd(_0x1c9968);
            _0x1021a0(_0x1c9968);
            if (_0x1c9968['renderX'] !== undefined) {
                _0x1c9968['renderX'] = _0x1c9968['x'];
                _0x1c9968['renderY'] = _0x1c9968['y'];
            }
            const _0x32b03b = _0x1ca472['vx'] * _0x47e001 + _0x1ca472['vy'] * _0x205cee;
            if (_0x32b03b < 0x0) {
                _0x1ca472['vx'] -= _0x32b03b * _0x47e001 * 0.25;
                _0x1ca472['vy'] -= _0x32b03b * _0x205cee * 0.25;
            }
        }
    }
    _0x344275();
    _0x366156();
}
function _0x366156() {
    if (_0x1ca472['isDead'])
        return;
    const _0x2eac32 = _0x1ca472['scale'];
    const _0x10781c = _0x1ca472['width'] * _0x2eac32 / 0x2;
    for (let _0x3a5dcd = 0x0; _0x3a5dcd < 0x2; _0x3a5dcd++) {
        let _0x20b136 = _0x1ca472['x'] + _0x1ca472['width'] / 0x2;
        let _0x36cbc5 = _0x1ca472['y'] + _0x1ca472['height'] / 0x2;
        for (const _0x37c79c of _0x88eb63['ENTITIES']) {
            const _0x1244a2 = _0x20b136 < _0x37c79c['x'] ? _0x37c79c['x'] : _0x20b136 > _0x37c79c['x'] + _0x37c79c['w'] ? _0x37c79c['x'] + _0x37c79c['w'] : _0x20b136;
            const _0xadb234 = _0x36cbc5 < _0x37c79c['y'] ? _0x37c79c['y'] : _0x36cbc5 > _0x37c79c['y'] + _0x37c79c['h'] ? _0x37c79c['y'] + _0x37c79c['h'] : _0x36cbc5;
            const _0x2e3d6f = _0x20b136 - _0x1244a2;
            const _0x1dec42 = _0x36cbc5 - _0xadb234;
            const _0x14095d = Math['sqrt'](_0x2e3d6f * _0x2e3d6f + _0x1dec42 * _0x1dec42);
            if (_0x14095d < _0x10781c && _0x14095d > 0x0) {
                const _0x3e3c02 = _0x10781c - _0x14095d;
                const _0x26b010 = _0x2e3d6f / _0x14095d;
                const _0x169d21 = _0x1dec42 / _0x14095d;
                _0x20b136 += _0x26b010 * _0x3e3c02;
                _0x36cbc5 += _0x169d21 * _0x3e3c02;
                const _0x5b5fc3 = _0x1ca472['vx'] * _0x26b010 + _0x1ca472['vy'] * _0x169d21;
                if (_0x5b5fc3 < 0x0) {
                    _0x1ca472['vx'] -= _0x5b5fc3 * _0x26b010;
                    _0x1ca472['vy'] -= _0x5b5fc3 * _0x169d21;
                }
            } else if (_0x14095d === 0x0) {
                const _0x2416d7 = _0x20b136 - _0x37c79c['x'];
                const _0x1caf76 = _0x37c79c['x'] + _0x37c79c['w'] - _0x20b136;
                const _0x5bff27 = _0x36cbc5 - _0x37c79c['y'];
                const _0x375610 = _0x37c79c['y'] + _0x37c79c['h'] - _0x36cbc5;
                const _0x246e24 = Math['min'](_0x2416d7, _0x1caf76, _0x5bff27, _0x375610);
                if (_0x246e24 === _0x2416d7)
                    _0x20b136 = _0x37c79c['x'] - _0x10781c;
                else if (_0x246e24 === _0x1caf76)
                    _0x20b136 = _0x37c79c['x'] + _0x37c79c['w'] + _0x10781c;
                else if (_0x246e24 === _0x5bff27)
                    _0x36cbc5 = _0x37c79c['y'] - _0x10781c;
                else
                    _0x36cbc5 = _0x37c79c['y'] + _0x37c79c['h'] + _0x10781c;
            }
        }
        _0x1ca472['x'] = _0x20b136 - _0x1ca472['width'] / 0x2;
        _0x1ca472['y'] = _0x36cbc5 - _0x1ca472['height'] / 0x2;
    }
}
function _0x1157b2(_0x30051d, _0x57ddb6) {
    const _0x4e0004 = _0x88eb63['MAP']['layers']['find'](_0xf31a35 => _0xf31a35['name'] === 'trees');
    if (!_0x4e0004)
        return ![];
    const _0x3d121b = Math['floor'](_0x30051d / _0x88eb63['MAP']['tileSize']);
    const _0x38ffb0 = Math['floor'](_0x57ddb6 / _0x88eb63['MAP']['tileSize']);
    if (_0x3d121b < 0x0 || _0x3d121b >= _0x88eb63['MAP']['columns'] || _0x38ffb0 < 0x0 || _0x38ffb0 >= _0x88eb63['MAP']['rows'])
        return ![];
    return _0x4e0004['data'][_0x38ffb0 * _0x88eb63['MAP']['columns'] + _0x3d121b] === 0xb;
}
let _0x3e9371 = null;
function _0x2ea7e5() {
    const _0x354aa9 = _0x88eb63['MAP'];
    const _0x23e687 = _0x354aa9['layers']['find'](_0x327ad3 => _0x327ad3['name'] === 'floor2');
    const _0x4a7361 = _0x354aa9['layers']['find'](_0x3e95d9 => _0x3e95d9['name'] === 'walls');
    if (!_0x23e687 || !_0x4a7361) {
        _0x3e9371 = null;
        return;
    }
    const _0x10c643 = _0x354aa9['columns'];
    const _0x1205c0 = _0x354aa9['rows'];
    const _0x43558e = [];
    const _0x5c994c = [];
    const _0x489d85 = new Set();
    for (let _0x5cdd61 = 0x0; _0x5cdd61 < _0x1205c0; _0x5cdd61++) {
        for (let _0x4c9291 = 0x0; _0x4c9291 < _0x10c643; _0x4c9291++) {
            const _0x465a87 = _0x5cdd61 * _0x10c643 + _0x4c9291;
            const _0x3c4bbb = _0x23e687['data'][_0x465a87];
            const _0x682582 = _0x4a7361['data'][_0x465a87];
            if (_0x3c4bbb === 0x2 || _0x3c4bbb === 0x4) {
                _0x43558e['push']({
                    'c': _0x4c9291,
                    'r': _0x5cdd61
                });
                if (_0x682582 !== 0x0)
                    _0x5c994c['push']({
                        'c': _0x4c9291,
                        'r': _0x5cdd61
                    });
            }
            if (_0x682582 !== 0x0)
                _0x489d85['add'](_0x4c9291 + ',' + _0x5cdd61);
        }
    }
    const _0x27d20a = new Set(_0x43558e['map'](_0x12e44a => _0x12e44a['c'] + ',' + _0x12e44a['r']));
    const _0x3bea3b = [
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
        ],
        [
            -0x1,
            -0x1
        ],
        [
            0x1,
            -0x1
        ],
        [
            -0x1,
            0x1
        ],
        [
            0x1,
            0x1
        ]
    ];
    for (const {
                c: _0x2e2bd8,
                r: _0x2f8992
            } of _0x43558e) {
        for (const [_0x2134e8, _0x44f354] of _0x3bea3b) {
            const _0xe65763 = _0x2e2bd8 + _0x2134e8, _0x4e0597 = _0x2f8992 + _0x44f354;
            const _0x109f81 = _0xe65763 + ',' + _0x4e0597;
            if (!_0x27d20a['has'](_0x109f81))
                _0x489d85['add'](_0x109f81);
        }
    }
    _0x3e9371 = {
        'wallSet': _0x489d85,
        'floorTiles': _0x43558e,
        'wallTiles': _0x5c994c,
        'interiorSet': _0x27d20a
    };
}
function _0x492ee8() {
    const _0x483136 = _0x88eb63['MAP']['layers']['find'](_0x30aa1c => _0x30aa1c['name'] === 'floor2');
    if (!_0x483136)
        return ![];
    const _0x4cf1a8 = Math['floor']((_0x1ca472['x'] + _0x1ca472['width'] / 0x2) / _0x88eb63['MAP']['tileSize']);
    const _0x36a490 = Math['floor']((_0x1ca472['y'] + _0x1ca472['height'] / 0x2) / _0x88eb63['MAP']['tileSize']);
    if (_0x4cf1a8 < 0x0 || _0x4cf1a8 >= _0x88eb63['MAP']['columns'] || _0x36a490 < 0x0 || _0x36a490 >= _0x88eb63['MAP']['rows'])
        return ![];
    const _0x55ef6a = _0x483136['data'][_0x36a490 * _0x88eb63['MAP']['columns'] + _0x4cf1a8];
    return _0x55ef6a === 0x2;
}
function _0x743519() {
    if (_0x1ca472['isDead']) {
        _0x88eb63['SHADOW']['polygon'] = null;
        return;
    }
    const _0x401420 = _0x88eb63['MAP'];
    const _0x1b812f = _0x88eb63['SHADOW'];
    const _0x55c0ab = _0x401420['tileSize'];
    if (!_0x3e9371)
        _0x2ea7e5();
    if (!_0x3e9371) {
        _0x1b812f['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x122bff,
        floorTiles: _0x3047d6
    } = _0x3e9371;
    if (_0x3047d6['length'] === 0x0) {
        _0x1b812f['polygon'] = null;
        return;
    }
    if (!_0x492ee8()) {
        _0x1b812f['polygon'] = null;
        return;
    }
    const _0x2954df = _0x1ca472['x'] + _0x1ca472['width'] / 0x2;
    const _0x1a531e = _0x1ca472['y'] + _0x1ca472['height'] / 0x2;
    if (!_0x3e9371['_bounds']) {
        let _0x40c684 = Infinity, _0x1c852e = -Infinity, _0x168712 = Infinity, _0x6be27a = -Infinity;
        for (const {
                    c: _0x531975,
                    r: _0x4b7fa2
                } of _0x3047d6) {
            if (_0x531975 < _0x40c684)
                _0x40c684 = _0x531975;
            if (_0x531975 > _0x1c852e)
                _0x1c852e = _0x531975;
            if (_0x4b7fa2 < _0x168712)
                _0x168712 = _0x4b7fa2;
            if (_0x4b7fa2 > _0x6be27a)
                _0x6be27a = _0x4b7fa2;
        }
        _0x3e9371['_bounds'] = {
            'minC': Math['max'](0x0, _0x40c684 - 0x1),
            'maxC': Math['min'](_0x401420['columns'] - 0x1, _0x1c852e + 0x1),
            'minR': Math['max'](0x0, _0x168712 - 0x1),
            'maxR': Math['min'](_0x401420['rows'] - 0x1, _0x6be27a + 0x1)
        };
        const _0x56ead3 = [];
        for (let _0x4a2293 = _0x3e9371['_bounds']['minR']; _0x4a2293 <= _0x3e9371['_bounds']['maxR']; _0x4a2293++) {
            for (let _0x4fd8a7 = _0x3e9371['_bounds']['minC']; _0x4fd8a7 <= _0x3e9371['_bounds']['maxC']; _0x4fd8a7++) {
                if (_0x122bff['has'](_0x4fd8a7 + ',' + _0x4a2293))
                    _0x56ead3['push'](_0x4fd8a7, _0x4a2293);
            }
        }
        _0x3e9371['_wallArr'] = _0x56ead3;
    }
    const {
        minC: _0x295413,
        maxC: _0x5dfda4,
        minR: _0x3c6ab3,
        maxR: _0x39ac71
    } = _0x3e9371['_bounds'];
    const _0x48cd01 = _0x3e9371['_wallArr'];
    const _0x56e4b3 = 0.0001;
    const _0x388435 = new Set();
    const _0x594b4f = [];
    for (let _0x140a4e = 0x0; _0x140a4e < _0x48cd01['length']; _0x140a4e += 0x2) {
        const _0x5b2321 = _0x48cd01[_0x140a4e], _0x436f9e = _0x48cd01[_0x140a4e + 0x1];
        const _0xf13b9f = [
            _0x5b2321 * _0x55c0ab,
            _0x436f9e * _0x55c0ab,
            _0x5b2321 * _0x55c0ab + _0x55c0ab,
            _0x436f9e * _0x55c0ab,
            _0x5b2321 * _0x55c0ab,
            _0x436f9e * _0x55c0ab + _0x55c0ab,
            _0x5b2321 * _0x55c0ab + _0x55c0ab,
            _0x436f9e * _0x55c0ab + _0x55c0ab
        ];
        for (let _0x5b8841 = 0x0; _0x5b8841 < _0xf13b9f['length']; _0x5b8841 += 0x2) {
            const _0x357b65 = _0xf13b9f[_0x5b8841], _0x1e817a = _0xf13b9f[_0x5b8841 + 0x1];
            const _0x4c5dcc = Math['atan2'](_0x1e817a - _0x1a531e, _0x357b65 - _0x2954df);
            const _0x2086a9 = Math['round'](_0x4c5dcc * 0x4e20);
            if (!_0x388435['has'](_0x2086a9 - 0x1)) {
                _0x388435['add'](_0x2086a9 - 0x1);
                _0x594b4f['push'](_0x4c5dcc - _0x56e4b3);
            }
            if (!_0x388435['has'](_0x2086a9)) {
                _0x388435['add'](_0x2086a9);
                _0x594b4f['push'](_0x4c5dcc);
            }
            if (!_0x388435['has'](_0x2086a9 + 0x1)) {
                _0x388435['add'](_0x2086a9 + 0x1);
                _0x594b4f['push'](_0x4c5dcc + _0x56e4b3);
            }
        }
    }
    _0x594b4f['sort']((_0x59b5da, _0x2c990d) => _0x59b5da - _0x2c990d);
    const _0x7d8fd9 = Math['hypot']((_0x5dfda4 - _0x295413 + 0x2) * _0x55c0ab, (_0x39ac71 - _0x3c6ab3 + 0x2) * _0x55c0ab);
    const _0x5c46b6 = _0x15435e => {
        const _0x4c050a = Math['cos'](_0x15435e);
        const _0x555f58 = Math['sin'](_0x15435e);
        let _0x11cc89 = _0x7d8fd9;
        for (let _0x20a28e = 0x0; _0x20a28e < _0x48cd01['length']; _0x20a28e += 0x2) {
            const _0x37a5cd = _0x48cd01[_0x20a28e], _0xfdf9b9 = _0x48cd01[_0x20a28e + 0x1];
            const _0x1f12f6 = _0x37a5cd * _0x55c0ab, _0x575ea0 = _0xfdf9b9 * _0x55c0ab;
            const _0x27280d = _0x1f12f6 + _0x55c0ab, _0x2c3e91 = _0x575ea0 + _0x55c0ab;
            const _0x5a53a6 = _0x1f12f6 + _0x55c0ab * 0.5, _0x9f4ebe = _0x575ea0 + _0x55c0ab * 0.5;
            const _0x1da4e6 = Math['abs'](_0x5a53a6 - _0x2954df) + Math['abs'](_0x9f4ebe - _0x1a531e);
            if (_0x1da4e6 > _0x11cc89 + _0x55c0ab * 1.5)
                continue;
            let _0x1ec571, _0x50c33d, _0x512597;
            _0x1ec571 = -_0x555f58 * _0x55c0ab;
            if (Math['abs'](_0x1ec571) >= 1e-10) {
                _0x50c33d = -(_0x575ea0 - _0x1a531e) * _0x55c0ab / _0x1ec571;
                _0x512597 = ((_0x1f12f6 - _0x2954df) * _0x555f58 - (_0x575ea0 - _0x1a531e) * _0x4c050a) / _0x1ec571;
                if (_0x50c33d > 0.001 && _0x512597 >= 0x0 && _0x512597 <= 0x1 && _0x50c33d < _0x11cc89)
                    _0x11cc89 = _0x50c33d;
            }
            _0x1ec571 = _0x4c050a * _0x55c0ab;
            if (Math['abs'](_0x1ec571) >= 1e-10) {
                _0x50c33d = (_0x27280d - _0x2954df) * _0x55c0ab / _0x1ec571;
                _0x512597 = ((_0x27280d - _0x2954df) * _0x555f58 - (_0x575ea0 - _0x1a531e) * _0x4c050a) / _0x1ec571;
                if (_0x50c33d > 0.001 && _0x512597 >= 0x0 && _0x512597 <= 0x1 && _0x50c33d < _0x11cc89)
                    _0x11cc89 = _0x50c33d;
            }
            _0x1ec571 = _0x555f58 * _0x55c0ab;
            if (Math['abs'](_0x1ec571) >= 1e-10) {
                _0x50c33d = (_0x2c3e91 - _0x1a531e) * _0x55c0ab / _0x1ec571;
                _0x512597 = ((_0x27280d - _0x2954df) * _0x555f58 - (_0x2c3e91 - _0x1a531e) * _0x4c050a) / _0x1ec571;
                if (_0x50c33d > 0.001 && _0x512597 >= 0x0 && _0x512597 <= 0x1 && _0x50c33d < _0x11cc89)
                    _0x11cc89 = _0x50c33d;
            }
            _0x1ec571 = -_0x4c050a * _0x55c0ab;
            if (Math['abs'](_0x1ec571) >= 1e-10) {
                _0x50c33d = -(_0x1f12f6 - _0x2954df) * _0x55c0ab / _0x1ec571;
                _0x512597 = ((_0x1f12f6 - _0x2954df) * _0x555f58 - (_0x2c3e91 - _0x1a531e) * _0x4c050a) / _0x1ec571;
                if (_0x50c33d > 0.001 && _0x512597 >= 0x0 && _0x512597 <= 0x1 && _0x50c33d < _0x11cc89)
                    _0x11cc89 = _0x50c33d;
            }
        }
        const _0x7569a4 = _0x11cc89 < _0x7d8fd9 ? _0x11cc89 + 0x8 : _0x11cc89;
        return {
            'x': _0x2954df + _0x4c050a * _0x7569a4,
            'y': _0x1a531e + _0x555f58 * _0x7569a4
        };
    };
    const _0x2367c3 = [];
    for (let _0x38f3f2 = 0x0; _0x38f3f2 < _0x594b4f['length']; _0x38f3f2++) {
        const _0x2470d9 = _0x5c46b6(_0x594b4f[_0x38f3f2]);
        _0x2367c3['push'](_0x2470d9['x'], _0x2470d9['y']);
    }
    _0x1b812f['polygon'] = _0x2367c3['length'] >= 0x6 ? new Float32Array(_0x2367c3) : null;
}
function _0x2414f0(_0x30f401, _0x35b3c6, _0x3c8939) {
    if (_0x1ca472['isDead'])
        return;
    if (!_0x3e9371)
        return;
    const {
        floorTiles: _0xa582dd,
        wallTiles: _0x5ec8a4
    } = _0x3e9371;
    if (_0xa582dd['length'] === 0x0)
        return;
    const _0x5612e3 = _0x88eb63['SHADOW'];
    const _0x158974 = _0x88eb63['MAP']['tileSize'];
    const _0x265d79 = _0x88eb63['CAMERA']['width'];
    const _0x294b07 = _0x88eb63['CAMERA']['height'];
    if (!_0x88eb63['SHADOW']['_buf'] || _0x88eb63['SHADOW']['_buf']['width'] !== _0x265d79 || _0x88eb63['SHADOW']['_buf']['height'] !== _0x294b07) {
        _0x88eb63['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x88eb63['SHADOW']['_buf']['width'] = _0x265d79;
        _0x88eb63['SHADOW']['_buf']['height'] = _0x294b07;
    }
    const _0xd347d3 = _0x88eb63['SHADOW']['_buf'];
    const _0x335ff5 = _0xd347d3['getContext']('2d');
    _0x335ff5['clearRect'](0x0, 0x0, _0x265d79, _0x294b07);
    _0x335ff5['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x335ff5['beginPath']();
    for (const {
                c: _0x343b72,
                r: _0x51f8ef
            } of _0xa582dd) {
        const _0x356ade = Math['floor'](_0x343b72 * _0x158974 - _0x35b3c6), _0x2231bc = Math['floor'](_0x51f8ef * _0x158974 - _0x3c8939);
        if (_0x356ade > _0x265d79 || _0x2231bc > _0x294b07 || _0x356ade + _0x158974 < 0x0 || _0x2231bc + _0x158974 < 0x0)
            continue;
        _0x335ff5['rect'](_0x356ade - 0x1, _0x2231bc - 0x1, _0x158974 + 0x2, _0x158974 + 0x2);
    }
    _0x335ff5['fill']();
    if (_0x5ec8a4['length'] > 0x0) {
        _0x335ff5['globalCompositeOperation'] = 'destination-out';
        _0x335ff5['fillStyle'] = 'rgba(0,0,0,1)';
        _0x335ff5['beginPath']();
        for (const {
                    c: _0x267d47,
                    r: _0x2cfca9
                } of _0x5ec8a4) {
            const _0x16071c = Math['floor'](_0x267d47 * _0x158974 - _0x35b3c6), _0x11a810 = Math['floor'](_0x2cfca9 * _0x158974 - _0x3c8939);
            if (_0x16071c > _0x265d79 || _0x11a810 > _0x294b07 || _0x16071c + _0x158974 < 0x0 || _0x11a810 + _0x158974 < 0x0)
                continue;
            _0x335ff5['rect'](_0x16071c - 0x1, _0x11a810 - 0x1, _0x158974 + 0x2, _0x158974 + 0x2);
        }
        _0x335ff5['fill']();
        _0x335ff5['globalCompositeOperation'] = 'source-over';
    }
    if (_0x5612e3['polygon'] && _0x5612e3['polygon']['length'] >= 0x6) {
        _0x335ff5['globalCompositeOperation'] = 'destination-out';
        _0x335ff5['beginPath']();
        const _0x8a93fa = _0x5612e3['polygon'];
        _0x335ff5['moveTo'](_0x8a93fa[0x0] - _0x35b3c6, _0x8a93fa[0x1] - _0x3c8939);
        for (let _0x4dc39d = 0x2; _0x4dc39d < _0x8a93fa['length']; _0x4dc39d += 0x2) {
            _0x335ff5['lineTo'](_0x8a93fa[_0x4dc39d] - _0x35b3c6, _0x8a93fa[_0x4dc39d + 0x1] - _0x3c8939);
        }
        _0x335ff5['closePath']();
        _0x335ff5['fill']();
        _0x335ff5['globalCompositeOperation'] = 'source-over';
    }
    _0x30f401['drawImage'](_0xd347d3, 0x0, 0x0);
}
function _0x4f360e(_0x825b71) {
    let _0x4a2e64 = 0x0, _0x27ba97 = 0x0;
    const _0x611e6d = _0x88eb63['INPUTS']['mouseX'] / _0x88eb63['SYSTEM']['viewScale'];
    const _0x5a5e68 = _0x88eb63['INPUTS']['mouseY'] / _0x88eb63['SYSTEM']['viewScale'];
    const _0x19de4c = _0x1ca472['x'] - _0x88eb63['CAMERA']['x'] + _0x1ca472['width'] / 0x2;
    const _0x218183 = _0x1ca472['y'] - _0x88eb63['CAMERA']['y'] + _0x1ca472['height'] / 0x2;
    const _0x8c69f5 = Math['atan2'](_0x5a5e68 - _0x218183, _0x611e6d - _0x19de4c);
    if (_0x1dfd0c !== 0x0 || _0x3ffc30 !== 0x0) {
        _0x4a2e64 = _0x1dfd0c;
        _0x27ba97 = _0x3ffc30;
    } else if (_0x3af4e6) {
        let _0x39fe28 = 0x0, _0x8cf0c8 = 0x0;
        if (_0x88eb63['INPUTS']['keys']['w'] || _0x88eb63['INPUTS']['keys']['arrowup'])
            _0x39fe28 += 0x1;
        if (_0x88eb63['INPUTS']['keys']['s'] || _0x88eb63['INPUTS']['keys']['arrowdown'])
            _0x39fe28 -= 0x1;
        if (_0x88eb63['INPUTS']['keys']['d'] || _0x88eb63['INPUTS']['keys']['arrowright'])
            _0x8cf0c8 += 0x1;
        if (_0x88eb63['INPUTS']['keys']['a'] || _0x88eb63['INPUTS']['keys']['arrowleft'])
            _0x8cf0c8 -= 0x1;
        if (_0x39fe28 !== 0x0 || _0x8cf0c8 !== 0x0) {
            const _0x1215af = _0x8c69f5 + Math['atan2'](_0x8cf0c8, _0x39fe28);
            _0x4a2e64 = Math['cos'](_0x1215af);
            _0x27ba97 = Math['sin'](_0x1215af);
        }
    } else {
        if (_0x88eb63['INPUTS']['keys']['w'] || _0x88eb63['INPUTS']['keys']['arrowup'])
            _0x27ba97 -= 0x1;
        if (_0x88eb63['INPUTS']['keys']['s'] || _0x88eb63['INPUTS']['keys']['arrowdown'])
            _0x27ba97 += 0x1;
        if (_0x88eb63['INPUTS']['keys']['a'] || _0x88eb63['INPUTS']['keys']['arrowleft'])
            _0x4a2e64 -= 0x1;
        if (_0x88eb63['INPUTS']['keys']['d'] || _0x88eb63['INPUTS']['keys']['arrowright'])
            _0x4a2e64 += 0x1;
        const _0x4a9f14 = _0x4a2e64 !== 0x0 || _0x27ba97 !== 0x0;
        if (_0x4a9f14) {
            const _0x3de9c3 = Math['sqrt'](_0x4a2e64 * _0x4a2e64 + _0x27ba97 * _0x27ba97);
            _0x4a2e64 /= _0x3de9c3;
            _0x27ba97 /= _0x3de9c3;
        }
    }
    if (_0x88eb63['GAME_STATE'] === 'NIGHT' && _0x5cfba0 === 'Skinwalker') {
        if (_0x88eb63['NIGHT_ABILITY_OPEN'] || !_0x88eb63['CURRENT_TARGET']) {
            _0x4a2e64 = 0x0;
            _0x27ba97 = 0x0;
            _0x1ca472['vx'] = 0x0;
            _0x1ca472['vy'] = 0x0;
            _0x1ca472['x'] = _0x88eb63['MAP']['columns'] * _0x88eb63['MAP']['tileSize'] / 0x2 - _0x1ca472['width'] / 0x2;
            _0x1ca472['y'] = _0x88eb63['MAP']['rows'] * _0x88eb63['MAP']['tileSize'] / 0x2 - _0x1ca472['height'] / 0x2;
        }
    }
    const _0x47c80a = _0x4a2e64 !== 0x0 || _0x27ba97 !== 0x0;
    const _0x20dd41 = (_0x88eb63['INPUTS']['keys']['shift'] || _0xb4cdc8 || _0x217534) && _0x47c80a;
    _0x1ca472['bopTimer'] = _0x20dd41 ? _0x1ca472['bopTimer'] + _0x825b71 : 0x0;
    _0x1ca472['scale'] = 0x1 + (_0x1ca472['bopTimer'] > 0x0 ? Math['sin'](_0x1ca472['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x113946 = Math['pow'](0.001, _0x825b71);
    const _0x20040e = _0x20dd41 ? 0x74a : 0x5d5;
    _0x1ca472['vx'] += _0x4a2e64 * _0x20040e * _0x825b71;
    _0x1ca472['vy'] += _0x27ba97 * _0x20040e * _0x825b71;
    _0x1ca472['vx'] *= _0x113946;
    _0x1ca472['vy'] *= _0x113946;
    _0x1ca472['x'] += _0x1ca472['vx'] * _0x825b71;
    _0x1ca472['y'] += _0x1ca472['vy'] * _0x825b71;
    for (let _0x5ef00c = 0x0; _0x5ef00c < 0x3; _0x5ef00c++)
        _0x344275();
    for (let _0x485511 = 0x0; _0x485511 < 0x2; _0x485511++)
        _0x366156();
    for (let _0x26b478 = 0x0; _0x26b478 < 0x2; _0x26b478++)
        _0x363148();
    if (_0x1ca472['x'] < 0x0)
        _0x1ca472['x'] = 0x0;
    if (_0x1ca472['y'] < 0x0)
        _0x1ca472['y'] = 0x0;
    if (_0x1ca472['x'] + _0x1ca472['width'] > _0x88eb63['MAP']['columns'] * _0x88eb63['MAP']['tileSize'])
        _0x1ca472['x'] = _0x88eb63['MAP']['columns'] * _0x88eb63['MAP']['tileSize'] - _0x1ca472['width'];
    if (_0x1ca472['y'] + _0x1ca472['height'] > _0x88eb63['MAP']['rows'] * _0x88eb63['MAP']['tileSize'])
        _0x1ca472['y'] = _0x88eb63['MAP']['rows'] * _0x88eb63['MAP']['tileSize'] - _0x1ca472['height'];
    if (_0x2f9be3) {
        _0x1ca472['angle'] = _0x3211c1 + Math['PI'] / 0x2;
    } else if (_0x1dfd0c !== 0x0 || _0x3ffc30 !== 0x0) {
        _0x1ca472['angle'] = Math['atan2'](_0x3ffc30, _0x1dfd0c) + Math['PI'] / 0x2;
    } else if (!_0x3649d1) {
        _0x1ca472['angle'] = _0x8c69f5 + Math['PI'] / 0x2;
    }
    const _0x3e07a1 = _0x1ca472['x'] + _0x1ca472['width'] / 0x2 - _0x88eb63['CAMERA']['width'] / 0x2;
    const _0x1d34b2 = _0x1ca472['y'] + _0x1ca472['height'] / 0x2 - _0x88eb63['CAMERA']['height'] / 0x2;
    if (_0x88eb63['CAMERA']['x'] === null || isNaN(_0x88eb63['CAMERA']['x']) || !isFinite(_0x88eb63['CAMERA']['x'])) {
        _0x88eb63['CAMERA']['x'] = _0x3e07a1;
        _0x88eb63['CAMERA']['y'] = _0x1d34b2;
    } else {
        const _0x1b0a80 = 0x1 - Math['exp'](-Math['max'](0x0, _0x825b71) * 0x28);
        _0x88eb63['CAMERA']['x'] += (_0x3e07a1 - _0x88eb63['CAMERA']['x']) * _0x1b0a80;
        _0x88eb63['CAMERA']['y'] += (_0x1d34b2 - _0x88eb63['CAMERA']['y']) * _0x1b0a80;
    }
    for (const _0xb7087b in _0x52aae8) {
        const _0x2602e2 = _0x52aae8[_0xb7087b];
        if (_0x2602e2['renderX'] === undefined) {
            _0x2602e2['renderX'] = _0x2602e2['x'];
            _0x2602e2['renderY'] = _0x2602e2['y'];
            _0x2602e2['renderAngle'] = _0x2602e2['angle'] || 0x0;
        }
        const _0x12fbb7 = 0.25;
        const _0x4ac6ad = _0x2602e2['x'] - _0x2602e2['renderX'], _0x50f602 = _0x2602e2['y'] - _0x2602e2['renderY'];
        const _0x49056a = Math['sqrt'](_0x4ac6ad * _0x4ac6ad + _0x50f602 * _0x50f602);
        const _0x4ed887 = 0xb4;
        if (_0x49056a > _0x4ed887) {
            _0x2602e2['renderX'] = _0x2602e2['x'] - _0x4ac6ad / _0x49056a * _0x4ed887;
            _0x2602e2['renderY'] = _0x2602e2['y'] - _0x50f602 / _0x49056a * _0x4ed887;
        }
        _0x2602e2['renderX'] += (_0x2602e2['x'] - _0x2602e2['renderX']) * _0x12fbb7;
        _0x2602e2['renderY'] += (_0x2602e2['y'] - _0x2602e2['renderY']) * _0x12fbb7;
        let _0x32c9e1 = (_0x2602e2['angle'] || 0x0) - _0x2602e2['renderAngle'];
        while (_0x32c9e1 < -Math['PI'])
            _0x32c9e1 += Math['PI'] * 0x2;
        while (_0x32c9e1 > Math['PI'])
            _0x32c9e1 -= Math['PI'] * 0x2;
        _0x2602e2['renderAngle'] += _0x32c9e1 * 0.3;
    }
    if (_0x88eb63['GAME_STATE'] === 'NIGHT') {
        _0x50be52 = Math['min'](0.6, _0x50be52 + _0x825b71 * 0.5);
    } else {
        _0x50be52 = Math['max'](0x0, _0x50be52 - _0x825b71 * 0.5);
    }
    _0x743519();
    _0x1ec852();
}
function _0x32a1a7(_0x4f182b, _0x37f36a, _0x3d2f51, _0x33b4e8, _0x548544 = !![]) {
    _0x4f182b['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x3b9fea = _0x4f182b['measureText'](_0x37f36a)['width'];
    const _0x48eb4e = _0x3b9fea + 0x18;
    const _0x1796a8 = 0x1c;
    _0x4f182b['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x4f182b['beginPath']();
    if (_0x4f182b['roundRect']) {
        _0x4f182b['roundRect'](_0x3d2f51 - _0x48eb4e / 0x2, _0x33b4e8 - _0x1796a8, _0x48eb4e, _0x1796a8, 0x6);
    } else {
        _0x4f182b['rect'](_0x3d2f51 - _0x48eb4e / 0x2, _0x33b4e8 - _0x1796a8, _0x48eb4e, _0x1796a8);
    }
    _0x4f182b['fill']();
    if (_0x548544) {
        _0x4f182b['beginPath']();
        _0x4f182b['moveTo'](_0x3d2f51 - 0x6, _0x33b4e8);
        _0x4f182b['lineTo'](_0x3d2f51 + 0x6, _0x33b4e8);
        _0x4f182b['lineTo'](_0x3d2f51, _0x33b4e8 + 0x6);
        _0x4f182b['fill']();
    }
    _0x4f182b['fillStyle'] = '#ffffff';
    _0x4f182b['textAlign'] = 'center';
    _0x4f182b['textBaseline'] = 'middle';
    _0x4f182b['fillText'](_0x37f36a, _0x3d2f51, _0x33b4e8 - _0x1796a8 / 0x2 + 0x1);
}
function _0x4e149e(_0x3d4a43, _0x51674f, _0x11d5f5, _0x5b6000) {
    if (!_0x51674f || _0x51674f['length'] === 0x0)
        return;
    let _0x31e920 = _0x5b6000;
    for (let _0x585dc3 = 0x0; _0x585dc3 < _0x51674f['length']; _0x585dc3++) {
        _0x32a1a7(_0x3d4a43, _0x51674f[_0x585dc3]['text'], _0x11d5f5, _0x31e920, _0x585dc3 === 0x0);
        _0x31e920 -= 0x24;
    }
}
function _0x3488e3() {
    if (!_0x88eb63['SYSTEM']['isReady'])
        return;
    _0x293968['fillStyle'] = '#000000';
    _0x293968['fillRect'](0x0, 0x0, _0x167750['width'], _0x167750['height']);
    _0x293968['save']();
    try {
        _0x293968['scale'](_0x88eb63['SYSTEM']['viewScale'], _0x88eb63['SYSTEM']['viewScale']);
        _0x293968['imageSmoothingEnabled'] = ![];
        const _0x7852f1 = Math['floor'](_0x88eb63['CAMERA']['x'] || 0x0);
        const _0x32d82c = Math['floor'](_0x88eb63['CAMERA']['y'] || 0x0);
        const _0x2d9354 = Math['max'](0x0, Math['floor'](_0x7852f1 / _0x88eb63['MAP']['chunkSize']));
        const _0x5a3433 = Math['min'](_0x88eb63['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x7852f1 + _0x88eb63['CAMERA']['width']) / _0x88eb63['MAP']['chunkSize']));
        const _0x34b838 = Math['max'](0x0, Math['floor'](_0x32d82c / _0x88eb63['MAP']['chunkSize']));
        const _0x5b711e = Math['min'](_0x88eb63['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x32d82c + _0x88eb63['CAMERA']['height']) / _0x88eb63['MAP']['chunkSize']));
        for (let _0x16df21 = _0x34b838; _0x16df21 <= _0x5b711e; _0x16df21++)
            for (let _0x3aa90e = _0x2d9354; _0x3aa90e <= _0x5a3433; _0x3aa90e++) {
                const _0x1120f2 = _0x3aa90e * _0x88eb63['MAP']['chunkSize'] - _0x7852f1;
                const _0x241b85 = _0x16df21 * _0x88eb63['MAP']['chunkSize'] - _0x32d82c;
                _0x293968['drawImage'](_0x88eb63['MAP']['bgChunks'][_0x16df21][_0x3aa90e], _0x1120f2, _0x241b85, _0x88eb63['MAP']['chunkSize'] + 0x1, _0x88eb63['MAP']['chunkSize'] + 0x1);
            }
        if (_0x333d74['complete'] && _0x333d74['naturalWidth'] > 0x0) {
            const _0x50c5f7 = _0x88eb63['MAP']['tileSize'];
            const _0x27d23c = _0x50c5f7 * 0xa;
            const _0x576777 = _0x88eb63['MAP']['columns'] / 0x2 * _0x50c5f7 - _0x27d23c / 0x2 - _0x7852f1;
            const _0xe1bfaa = _0x88eb63['MAP']['rows'] / 0x2 * _0x50c5f7 - _0x27d23c / 0x2 - _0x32d82c;
            _0x293968['imageSmoothingEnabled'] = ![];
            _0x293968['drawImage'](_0x333d74, _0x576777, _0xe1bfaa, _0x27d23c, _0x27d23c);
        }
        if (_0x1b1fc2['complete'] && _0x1b1fc2['naturalWidth'] > 0x0) {
            _0x88eb63['ENTITIES']['forEach'](_0x4b0fa7 => {
                if (_0x4b0fa7['type'] !== 'table')
                    return;
                _0x293968['save']();
                _0x293968['imageSmoothingEnabled'] = ![];
                const _0x1e9a35 = _0x1b1fc2['naturalWidth'] >= _0x1b1fc2['naturalHeight'];
                const _0x3fddf2 = _0x4b0fa7['w'] >= _0x4b0fa7['h'];
                if (_0x1e9a35 === _0x3fddf2) {
                    _0x293968['drawImage'](_0x1b1fc2, _0x4b0fa7['x'] - _0x7852f1, _0x4b0fa7['y'] - _0x32d82c, _0x4b0fa7['w'], _0x4b0fa7['h']);
                } else {
                    _0x293968['translate'](_0x4b0fa7['x'] - _0x7852f1 + _0x4b0fa7['w'] / 0x2, _0x4b0fa7['y'] - _0x32d82c + _0x4b0fa7['h'] / 0x2);
                    _0x293968['rotate'](Math['PI'] / 0x2);
                    _0x293968['drawImage'](_0x1b1fc2, -_0x4b0fa7['h'] / 0x2, -_0x4b0fa7['w'] / 0x2, _0x4b0fa7['h'], _0x4b0fa7['w']);
                }
                _0x293968['restore']();
            });
        } else {
            _0x88eb63['ENTITIES']['forEach'](_0x30ebc3 => {
                if (_0x30ebc3['type'] !== 'table')
                    return;
                _0x293968['save']();
                _0x293968['fillStyle'] = '#6b4423';
                _0x293968['fillRect'](_0x30ebc3['x'] - _0x7852f1, _0x30ebc3['y'] - _0x32d82c, _0x30ebc3['w'], _0x30ebc3['h']);
                _0x293968['strokeStyle'] = '#422810';
                _0x293968['lineWidth'] = 0x3;
                _0x293968['strokeRect'](_0x30ebc3['x'] - _0x7852f1 + 0x1, _0x30ebc3['y'] - _0x32d82c + 0x1, _0x30ebc3['w'] - 0x2, _0x30ebc3['h'] - 0x2);
                _0x293968['fillStyle'] = '#82532a';
                _0x293968['fillRect'](_0x30ebc3['x'] - _0x7852f1 + 0x4, _0x30ebc3['y'] - _0x32d82c + 0x4, _0x30ebc3['w'] - 0x8, _0x30ebc3['h'] - 0x8);
                _0x293968['restore']();
            });
        }
        if (_0x37ddc6) {
            for (let _0x4cfc3a = _0x34b838; _0x4cfc3a <= _0x5b711e; _0x4cfc3a++) {
                for (let _0x1d9d3b = _0x2d9354; _0x1d9d3b <= _0x5a3433; _0x1d9d3b++) {
                    const _0x183f74 = _0x1d9d3b * _0x88eb63['MAP']['chunkSize'] - _0x7852f1;
                    const _0x2e732f = _0x4cfc3a * _0x88eb63['MAP']['chunkSize'] - _0x32d82c;
                    _0x293968['drawImage'](_0x88eb63['MAP']['fgChunks'][_0x4cfc3a][_0x1d9d3b], _0x183f74, _0x2e732f, _0x88eb63['MAP']['chunkSize'] + 0x1, _0x88eb63['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x1648f8 = _0x88eb63['GAME_STATE'] === 'NIGHT' && _0x5cfba0 === 'Skinwalker' && !_0x1ca472['isDead'];
        const _0x4c96bc = _0x1ca472['x'] - _0x7852f1 + _0x1ca472['width'] / 0x2;
        const _0x5da301 = _0x1ca472['y'] - _0x32d82c + _0x1ca472['height'] / 0x2;
        const _0x56e0f9 = _0x1ca472['width'] * _0x1ca472['scale'] * 1.3;
        const _0x38fb8a = _0x1ca472['height'] * _0x1ca472['scale'] * 1.3;
        for (const _0xe5d838 in _0x52aae8) {
            const _0x3c18be = _0x52aae8[_0xe5d838];
            if (_0x3c18be['isDead'])
                continue;
            const _0x3bd87b = (_0x3c18be['renderX'] ?? _0x3c18be['x']) - _0x7852f1 + _0x3c18be['width'] / 0x2;
            const _0x70f325 = (_0x3c18be['renderY'] ?? _0x3c18be['y']) - _0x32d82c + _0x3c18be['height'] / 0x2;
            const _0x1acdf9 = Math['min'](0x2, Math['max'](0.3, _0x3c18be['scale'] || 0x1));
            const _0x17bc70 = _0x3c18be['width'] * _0x1acdf9 * 1.3;
            const _0x5d5e06 = _0x3c18be['height'] * _0x1acdf9 * 1.3;
            _0x293968['save']();
            try {
                _0x293968['translate'](_0x3bd87b, _0x70f325);
                _0x293968['rotate'](_0x3c18be['renderAngle'] ?? 0x0);
                if (_0x3c18be['isDark'])
                    _0x293968['filter'] = 'brightness(0)';
                _0x54ad4d(_0x293968, _0x3c18be['body'], _0x3c18be['eyes'], _0x17bc70, _0x5d5e06);
                if (_0x4c0f94['has'](parseInt(_0xe5d838)) && _0x54f4cd['complete'] && _0x54f4cd['naturalWidth'] > 0x0) {
                    _0x293968['drawImage'](_0x54f4cd, -_0x17bc70 / 0x2, -_0x5d5e06 / 0x2, _0x17bc70, _0x5d5e06);
                }
                if (_0x3c18be['isDark'])
                    _0x293968['filter'] = 'none';
            } finally {
                _0x293968['restore']();
            }
            if (!_0x1157b2((_0x3c18be['renderX'] ?? _0x3c18be['x']) + _0x3c18be['width'] / 0x2, (_0x3c18be['renderY'] ?? _0x3c18be['y']) + _0x3c18be['height'] / 0x2)) {
                _0x293968['textAlign'] = 'center';
                _0x293968['lineJoin'] = 'round';
                _0x293968['lineWidth'] = 0x3;
                _0x293968['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x293968['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x293968['fillStyle'] = _0x4c0f94['has'](parseInt(_0xe5d838)) ? '#cc88ff' : '#ffffff';
                const _0x1b4530 = _0x3c18be['isDark'] ? '???' : _0x3c18be['name'] + (_0x3c18be['isOwner'] ? '\x20[🗝️]' : '');
                _0x293968['strokeText'](_0x1b4530, _0x3bd87b, _0x70f325 - _0x5d5e06 / 0x2 - 0x10);
                _0x293968['fillText'](_0x1b4530, _0x3bd87b, _0x70f325 - _0x5d5e06 / 0x2 - 0x10);
            }
        }
        if (!_0x1ca472['isDead']) {
            _0x293968['save']();
            try {
                _0x293968['translate'](_0x4c96bc, _0x5da301);
                _0x293968['rotate'](_0x1ca472['angle']);
                if (_0x1648f8)
                    _0x293968['filter'] = 'brightness(0)';
                _0x54ad4d(_0x293968, _0x3043a2, _0x4e3e14, _0x56e0f9, _0x38fb8a);
                if (_0x4c0f94['has'](_0x29be97) && _0x54f4cd['complete'] && _0x54f4cd['naturalWidth'] > 0x0) {
                    _0x293968['drawImage'](_0x54f4cd, -_0x56e0f9 / 0x2, -_0x38fb8a / 0x2, _0x56e0f9, _0x38fb8a);
                }
                if (_0x1648f8)
                    _0x293968['filter'] = 'none';
            } finally {
                _0x293968['restore']();
            }
            if (!_0x1157b2(_0x1ca472['x'] + _0x1ca472['width'] / 0x2, _0x1ca472['y'] + _0x1ca472['height'] / 0x2)) {
                _0x293968['textAlign'] = 'center';
                _0x293968['lineJoin'] = 'round';
                _0x293968['lineWidth'] = 0x3;
                _0x293968['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x293968['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x293968['fillStyle'] = _0x4c0f94['has'](_0x29be97) ? '#cc88ff' : '#ffffff';
                const _0x253f11 = _0x1648f8 ? '???' : _0x569297 + (_0x3405c2 ? '\x20[🗝️]' : '');
                _0x293968['strokeText'](_0x253f11, _0x4c96bc, _0x5da301 - _0x38fb8a / 0x2 - 0x10);
                _0x293968['fillText'](_0x253f11, _0x4c96bc, _0x5da301 - _0x38fb8a / 0x2 - 0x10);
            }
        }
        if (_0x88eb63['MAP']['wallChunks'] && _0x88eb63['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x5d5c5d = _0x34b838; _0x5d5c5d <= _0x5b711e; _0x5d5c5d++)
                for (let _0x51aec9 = _0x2d9354; _0x51aec9 <= _0x5a3433; _0x51aec9++) {
                    if (!_0x88eb63['MAP']['wallChunks'][_0x5d5c5d] || !_0x88eb63['MAP']['wallChunks'][_0x5d5c5d][_0x51aec9])
                        continue;
                    const _0x523e57 = _0x51aec9 * _0x88eb63['MAP']['chunkSize'] - _0x7852f1;
                    const _0x4d9ce5 = _0x5d5c5d * _0x88eb63['MAP']['chunkSize'] - _0x32d82c;
                    _0x293968['drawImage'](_0x88eb63['MAP']['wallChunks'][_0x5d5c5d][_0x51aec9], _0x523e57, _0x4d9ce5, _0x88eb63['MAP']['chunkSize'] + 0x1, _0x88eb63['MAP']['chunkSize'] + 0x1);
                }
        }
        if (_0x1ca472['isDead']) {
            for (const _0x3bb426 in _0x52aae8) {
                const _0x41020e = _0x52aae8[_0x3bb426];
                if (!_0x41020e['isDead'])
                    continue;
                const _0x1dc47c = (_0x41020e['renderX'] ?? _0x41020e['x']) - _0x7852f1 + _0x41020e['width'] / 0x2;
                const _0x9b365a = (_0x41020e['renderY'] ?? _0x41020e['y']) - _0x32d82c + _0x41020e['height'] / 0x2;
                const _0x35cafd = _0x41020e['width'] * (_0x41020e['scale'] || 0x1) * 1.3;
                const _0x42ed30 = _0x41020e['height'] * (_0x41020e['scale'] || 0x1) * 1.3;
                _0x293968['save']();
                try {
                    _0x293968['translate'](_0x1dc47c, _0x9b365a);
                    _0x293968['rotate'](_0x41020e['renderAngle'] ?? 0x0);
                    _0x293968['globalAlpha'] = 0.3;
                    _0x54ad4d(_0x293968, _0x41020e['body'], _0x41020e['eyes'], _0x35cafd, _0x42ed30);
                } finally {
                    _0x293968['restore']();
                }
                if (!_0x1157b2((_0x41020e['renderX'] ?? _0x41020e['x']) + _0x41020e['width'] / 0x2, (_0x41020e['renderY'] ?? _0x41020e['y']) + _0x41020e['height'] / 0x2)) {
                    _0x293968['save']();
                    _0x293968['globalAlpha'] = 0.3;
                    _0x293968['textAlign'] = 'center';
                    _0x293968['lineJoin'] = 'round';
                    _0x293968['lineWidth'] = 0x3;
                    _0x293968['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x293968['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x293968['fillStyle'] = '#ffffff';
                    const _0x25b4e8 = _0x41020e['name'] + (_0x41020e['isOwner'] ? '\x20[🗝️]' : '');
                    _0x293968['strokeText'](_0x25b4e8, _0x1dc47c, _0x9b365a - _0x42ed30 / 0x2 - 0x10);
                    _0x293968['fillText'](_0x25b4e8, _0x1dc47c, _0x9b365a - _0x42ed30 / 0x2 - 0x10);
                    _0x293968['restore']();
                }
            }
            _0x293968['save']();
            try {
                _0x293968['translate'](_0x4c96bc, _0x5da301);
                _0x293968['rotate'](_0x1ca472['angle']);
                _0x293968['globalAlpha'] = 0.3;
                _0x54ad4d(_0x293968, _0x3043a2, _0x4e3e14, _0x56e0f9, _0x38fb8a);
            } finally {
                _0x293968['restore']();
            }
            if (!_0x1157b2(_0x1ca472['x'] + _0x1ca472['width'] / 0x2, _0x1ca472['y'] + _0x1ca472['height'] / 0x2)) {
                _0x293968['save']();
                _0x293968['globalAlpha'] = 0.3;
                _0x293968['textAlign'] = 'center';
                _0x293968['lineJoin'] = 'round';
                _0x293968['lineWidth'] = 0x3;
                _0x293968['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x293968['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x293968['fillStyle'] = '#ffffff';
                const _0x7c07ea = _0x569297 + (_0x3405c2 ? '\x20[🗝️]' : '');
                _0x293968['strokeText'](_0x7c07ea, _0x4c96bc, _0x5da301 - _0x38fb8a / 0x2 - 0x10);
                _0x293968['fillText'](_0x7c07ea, _0x4c96bc, _0x5da301 - _0x38fb8a / 0x2 - 0x10);
                _0x293968['restore']();
            }
        }
        for (let _0x2b5691 = _0x34b838; _0x2b5691 <= _0x5b711e; _0x2b5691++)
            for (let _0x5f5523 = _0x2d9354; _0x5f5523 <= _0x5a3433; _0x5f5523++) {
                const _0x22cb3a = _0x5f5523 * _0x88eb63['MAP']['chunkSize'] - _0x7852f1;
                const _0x41608f = _0x2b5691 * _0x88eb63['MAP']['chunkSize'] - _0x32d82c;
                _0x293968['drawImage'](_0x88eb63['MAP']['fgChunks'][_0x2b5691][_0x5f5523], _0x22cb3a, _0x41608f, _0x88eb63['MAP']['chunkSize'] + 0x1, _0x88eb63['MAP']['chunkSize'] + 0x1);
            }
        if (_0x88eb63['EDITOR']['enabled'] && _0x88eb63['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x28b860 = _0x88eb63['INPUTS']['mouseX'] / _0x88eb63['SYSTEM']['viewScale'] + _0x88eb63['CAMERA']['x'];
            const _0x482573 = _0x88eb63['INPUTS']['mouseY'] / _0x88eb63['SYSTEM']['viewScale'] + _0x88eb63['CAMERA']['y'];
            const _0x501302 = Math['floor'](_0x28b860 / _0x88eb63['MAP']['tileSize']);
            const _0x4bc749 = Math['floor'](_0x482573 / _0x88eb63['MAP']['tileSize']);
            if (_0x501302 >= 0x0 && _0x501302 < _0x88eb63['MAP']['columns'] && _0x4bc749 >= 0x0 && _0x4bc749 < _0x88eb63['MAP']['rows']) {
                const _0x1da31f = _0x501302 * _0x88eb63['MAP']['tileSize'] - _0x7852f1;
                const _0x211932 = _0x4bc749 * _0x88eb63['MAP']['tileSize'] - _0x32d82c;
                _0x293968['save']();
                _0x293968['globalAlpha'] = 0.5;
                if (_0x88eb63['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x2dd130 = _0x88eb63['EDITOR']['selectedTileGid'] - 0x1;
                    _0x293968['drawImage'](_0x3619bf, _0x2dd130 % _0x88eb63['MAP']['tilesetCols'] * _0x88eb63['MAP']['tileSize'], Math['floor'](_0x2dd130 / _0x88eb63['MAP']['tilesetCols']) * _0x88eb63['MAP']['tileSize'], _0x88eb63['MAP']['tileSize'], _0x88eb63['MAP']['tileSize'], _0x1da31f, _0x211932, _0x88eb63['MAP']['tileSize'], _0x88eb63['MAP']['tileSize']);
                } else {
                    _0x293968['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x293968['fillRect'](_0x1da31f, _0x211932, _0x88eb63['MAP']['tileSize'], _0x88eb63['MAP']['tileSize']);
                }
                _0x293968['restore']();
            }
        }
        _0x2414f0(_0x293968, _0x7852f1, _0x32d82c);
        if (_0x50be52 > 0x0) {
            _0x293968['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x50be52 + ')';
            _0x293968['fillRect'](0x0, 0x0, _0x88eb63['CAMERA']['width'], _0x88eb63['CAMERA']['height']);
        }
        for (const _0x54b0fa in _0x52aae8) {
            const _0x2f6e3e = _0x52aae8[_0x54b0fa];
            if (_0x2f6e3e['isDead'] && !_0x1ca472['isDead'])
                continue;
            const _0x59265e = (_0x2f6e3e['renderX'] ?? _0x2f6e3e['x']) - _0x7852f1 + _0x2f6e3e['width'] / 0x2;
            const _0x8d863c = (_0x2f6e3e['renderY'] ?? _0x2f6e3e['y']) - _0x32d82c + _0x2f6e3e['height'] / 0x2;
            _0x4e149e(_0x293968, _0x2f6e3e['chats'], _0x59265e, _0x8d863c - _0x2f6e3e['height'] / 0x2 - 0x20);
        }
        _0x4e149e(_0x293968, _0x1ca472['chats'], _0x4c96bc, _0x5da301 - _0x1ca472['height'] / 0x2 - 0x20);
    } finally {
        _0x293968['restore']();
    }
}
function _0x3f02ef(_0x5ba14f) {
    if (!_0x88eb63['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x3f02ef);
    let _0x4840cf = (_0x5ba14f - _0x88eb63['SYSTEM']['lastTime']) / 0x3e8;
    _0x88eb63['SYSTEM']['lastTime'] = _0x5ba14f;
    if (_0x4840cf > 0.1)
        _0x4840cf = 0.1;
    if (_0x4840cf < 0x0 || isNaN(_0x4840cf))
        _0x4840cf = 0.016;
    if (_0x37ddc6) {
        _0x2610b5(_0x4840cf);
        _0x3488e3();
        return;
    }
    if (!_0x29be97)
        return;
    _0x4f360e(_0x4840cf);
    _0x45f7b1['tick'](_0x5ba14f);
    _0x3488e3();
}
function _0x2b361c() {
    const _0x4baf15 = Math['ceil'](_0x88eb63['MAP']['columns'] * _0x88eb63['MAP']['tileSize'] / _0x88eb63['MAP']['chunkSize']);
    const _0x5a57f4 = Math['ceil'](_0x88eb63['MAP']['rows'] * _0x88eb63['MAP']['tileSize'] / _0x88eb63['MAP']['chunkSize']);
    _0x88eb63['MAP']['bgChunks'] = [];
    _0x88eb63['MAP']['fgChunks'] = [];
    _0x88eb63['MAP']['wallChunks'] = [];
    for (let _0x22d0ff = 0x0; _0x22d0ff < _0x5a57f4; _0x22d0ff++) {
        _0x88eb63['MAP']['bgChunks'][_0x22d0ff] = [];
        _0x88eb63['MAP']['fgChunks'][_0x22d0ff] = [];
        _0x88eb63['MAP']['wallChunks'][_0x22d0ff] = [];
        for (let _0x485737 = 0x0; _0x485737 < _0x4baf15; _0x485737++) {
            const _0x53ece0 = document['createElement']('canvas');
            _0x53ece0['width'] = _0x53ece0['height'] = _0x88eb63['MAP']['chunkSize'];
            const _0x52ba19 = document['createElement']('canvas');
            _0x52ba19['width'] = _0x52ba19['height'] = _0x88eb63['MAP']['chunkSize'];
            const _0x422235 = document['createElement']('canvas');
            _0x422235['width'] = _0x422235['height'] = _0x88eb63['MAP']['chunkSize'];
            _0x88eb63['MAP']['bgChunks'][_0x22d0ff][_0x485737] = _0x53ece0;
            _0x88eb63['MAP']['fgChunks'][_0x22d0ff][_0x485737] = _0x52ba19;
            _0x88eb63['MAP']['wallChunks'][_0x22d0ff][_0x485737] = _0x422235;
            _0x4adea0(_0x485737, _0x22d0ff);
        }
    }
}
function _0x4adea0(_0x3eb344, _0x23e42e) {
    const _0x5b063b = _0x88eb63['MAP']['bgChunks'][_0x23e42e][_0x3eb344]['getContext']('2d', { 'alpha': !![] });
    const _0x118759 = _0x88eb63['MAP']['fgChunks'][_0x23e42e][_0x3eb344]['getContext']('2d', { 'alpha': !![] });
    const _0x51c4aa = _0x88eb63['MAP']['wallChunks'][_0x23e42e] && _0x88eb63['MAP']['wallChunks'][_0x23e42e][_0x3eb344] ? _0x88eb63['MAP']['wallChunks'][_0x23e42e][_0x3eb344]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x5b063b['imageSmoothingEnabled'] = _0x118759['imageSmoothingEnabled'] = ![];
    if (_0x51c4aa)
        _0x51c4aa['imageSmoothingEnabled'] = ![];
    _0x5b063b['clearRect'](0x0, 0x0, _0x88eb63['MAP']['chunkSize'], _0x88eb63['MAP']['chunkSize']);
    _0x118759['clearRect'](0x0, 0x0, _0x88eb63['MAP']['chunkSize'], _0x88eb63['MAP']['chunkSize']);
    if (_0x51c4aa)
        _0x51c4aa['clearRect'](0x0, 0x0, _0x88eb63['MAP']['chunkSize'], _0x88eb63['MAP']['chunkSize']);
    const _0x10da90 = Math['floor'](_0x3eb344 * _0x88eb63['MAP']['chunkSize'] / _0x88eb63['MAP']['tileSize']);
    const _0x69e8e7 = Math['ceil']((_0x3eb344 + 0x1) * _0x88eb63['MAP']['chunkSize'] / _0x88eb63['MAP']['tileSize']);
    const _0x43c796 = Math['floor'](_0x23e42e * _0x88eb63['MAP']['chunkSize'] / _0x88eb63['MAP']['tileSize']);
    const _0x1ded2f = Math['ceil']((_0x23e42e + 0x1) * _0x88eb63['MAP']['chunkSize'] / _0x88eb63['MAP']['tileSize']);
    const _0x2ea05e = 0.5;
    const _0xf92714 = _0x88eb63['MAP']['tileSize'] - _0x2ea05e * 0x2;
    _0x88eb63['MAP']['layers']['forEach'](_0x5302c4 => {
        const _0x237526 = _0x5302c4['name'] === 'walls';
        const _0x4fa605 = _0x5302c4['name'] === 'trees' ? _0x118759 : _0x237526 ? _0x51c4aa || _0x5b063b : _0x5b063b;
        for (let _0x1775d8 = Math['max'](0x0, _0x43c796); _0x1775d8 < Math['min'](_0x88eb63['MAP']['rows'], _0x1ded2f); _0x1775d8++) {
            for (let _0x3b66f3 = Math['max'](0x0, _0x10da90); _0x3b66f3 < Math['min'](_0x88eb63['MAP']['columns'], _0x69e8e7); _0x3b66f3++) {
                let _0x1ae2ac = _0x5302c4['data'][_0x1775d8 * _0x88eb63['MAP']['columns'] + _0x3b66f3];
                if (_0x5302c4['name'] === 'floor2' && _0x88eb63['MAP']['doors'] && _0x88eb63['MAP']['doors'][_0x1775d8 * _0x88eb63['MAP']['columns'] + _0x3b66f3]) {
                    _0x1ae2ac = 0x2;
                }
                if (_0x1ae2ac > 0x0) {
                    const _0x5a8a61 = _0x1ae2ac - 0x1;
                    const _0x1a95c8 = _0x5a8a61 % _0x88eb63['MAP']['tilesetCols'] * _0x88eb63['MAP']['tileSize'] + _0x2ea05e;
                    const _0x328de7 = Math['floor'](_0x5a8a61 / _0x88eb63['MAP']['tilesetCols']) * _0x88eb63['MAP']['tileSize'] + _0x2ea05e;
                    const _0x4fce79 = _0x3b66f3 * _0x88eb63['MAP']['tileSize'] - _0x3eb344 * _0x88eb63['MAP']['chunkSize'];
                    const _0x33fcee = _0x1775d8 * _0x88eb63['MAP']['tileSize'] - _0x23e42e * _0x88eb63['MAP']['chunkSize'];
                    if (_0x1ae2ac === 0x4) {
                        const _0x56aaf1 = 0x1;
                        const _0x360cd0 = _0x56aaf1 % _0x88eb63['MAP']['tilesetCols'] * _0x88eb63['MAP']['tileSize'] + _0x2ea05e;
                        const _0x1b72fc = Math['floor'](_0x56aaf1 / _0x88eb63['MAP']['tilesetCols']) * _0x88eb63['MAP']['tileSize'] + _0x2ea05e;
                        _0x5b063b['drawImage'](_0x3619bf, _0x360cd0, _0x1b72fc, _0xf92714, _0xf92714, _0x4fce79, _0x33fcee, _0x88eb63['MAP']['tileSize'], _0x88eb63['MAP']['tileSize']);
                        let _0x4e3be6 = _0x88eb63['MAP']['doors'] ? _0x88eb63['MAP']['doors'][_0x1775d8 * _0x88eb63['MAP']['columns'] + _0x3b66f3] : null;
                        if (!_0x4e3be6) {
                            const _0x353892 = _0x88eb63['MAP']['layers']['find'](_0x38da3f => _0x38da3f['name'] === 'walls');
                            const _0x3f51b6 = _0x1775d8 > 0x0 && _0x353892 && _0x353892['data'][(_0x1775d8 - 0x1) * _0x88eb63['MAP']['columns'] + _0x3b66f3] > 0x0;
                            const _0x14d7ec = _0x1775d8 < _0x88eb63['MAP']['rows'] - 0x1 && _0x353892 && _0x353892['data'][(_0x1775d8 + 0x1) * _0x88eb63['MAP']['columns'] + _0x3b66f3] > 0x0;
                            const _0x194faf = _0x3b66f3 > 0x0 && _0x353892 && _0x353892['data'][_0x1775d8 * _0x88eb63['MAP']['columns'] + _0x3b66f3 - 0x1] > 0x0;
                            const _0x41eebd = _0x3b66f3 < _0x88eb63['MAP']['columns'] - 0x1 && _0x353892 && _0x353892['data'][_0x1775d8 * _0x88eb63['MAP']['columns'] + _0x3b66f3 + 0x1] > 0x0;
                            if (_0x194faf && _0x41eebd)
                                _0x4e3be6 = _0x1775d8 < _0x88eb63['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x3f51b6 && _0x14d7ec)
                                _0x4e3be6 = _0x3b66f3 < _0x88eb63['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0xde46b5 = 0x0;
                        if (_0x4e3be6 === 'bottom')
                            _0xde46b5 = Math['PI'] / 0x2;
                        else if (_0x4e3be6 === 'left')
                            _0xde46b5 = Math['PI'];
                        else if (_0x4e3be6 === 'top')
                            _0xde46b5 = -Math['PI'] / 0x2;
                        else if (_0x4e3be6 === 'right')
                            _0xde46b5 = 0x0;
                        if (_0xde46b5 !== 0x0) {
                            _0x4fa605['save']();
                            _0x4fa605['translate'](_0x4fce79 + _0x88eb63['MAP']['tileSize'] / 0x2, _0x33fcee + _0x88eb63['MAP']['tileSize'] / 0x2);
                            _0x4fa605['rotate'](_0xde46b5);
                            _0x4fa605['drawImage'](_0x3619bf, _0x1a95c8, _0x328de7, _0xf92714, _0xf92714, -_0x88eb63['MAP']['tileSize'] / 0x2, -_0x88eb63['MAP']['tileSize'] / 0x2, _0x88eb63['MAP']['tileSize'], _0x88eb63['MAP']['tileSize']);
                            _0x4fa605['restore']();
                        } else {
                            _0x4fa605['drawImage'](_0x3619bf, _0x1a95c8, _0x328de7, _0xf92714, _0xf92714, _0x4fce79, _0x33fcee, _0x88eb63['MAP']['tileSize'], _0x88eb63['MAP']['tileSize']);
                        }
                    } else {
                        _0x4fa605['drawImage'](_0x3619bf, _0x1a95c8, _0x328de7, _0xf92714, _0xf92714, _0x4fce79, _0x33fcee, _0x88eb63['MAP']['tileSize'], _0x88eb63['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x2fb6e3() {
    _0x3619bf['crossOrigin'] = 'Anonymous';
    _0x3619bf['onload'] = () => {
        _0x88eb63['MAP']['tilesetCols'] = 0x3;
        _0x85ce7b();
    };
    _0x3619bf['onerror'] = () => {
        _0x88eb63['MAP']['tilesetCols'] = 0x1;
        _0x85ce7b();
    };
    _0x3619bf['src'] = 'assets/tilesheet.png';
    _0x333d74['crossOrigin'] = 'Anonymous';
    _0x333d74['onload'] = _0x85ce7b;
    _0x333d74['onerror'] = () => {
        _0x85ce7b();
    };
    _0x333d74['src'] = 'assets/center.png';
    _0x1b1fc2['crossOrigin'] = 'Anonymous';
    _0x1b1fc2['onload'] = _0x85ce7b;
    _0x1b1fc2['onerror'] = () => {
        _0x85ce7b();
    };
    _0x1b1fc2['src'] = 'assets/table.png';
}
function _0x85ce7b() {
    _0x88eb63['SYSTEM']['assetsLoaded']++;
    if (_0x88eb63['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x214f5f();
    }
}
function _0x1c756e(_0x5ad5a3, _0x512084) {
    if (!_0x3405c2 || !_0x3d99c1)
        return;
    const _0x49b922 = _0x5ad5a3 / _0x88eb63['SYSTEM']['viewScale'] + _0x88eb63['CAMERA']['x'];
    const _0x36975a = _0x512084 / _0x88eb63['SYSTEM']['viewScale'] + _0x88eb63['CAMERA']['y'];
    const _0xf5dfda = Math['floor'](_0x49b922 / _0x88eb63['MAP']['tileSize']);
    const _0x3dc7b6 = Math['floor'](_0x36975a / _0x88eb63['MAP']['tileSize']);
    if (_0xf5dfda >= 0x0 && _0xf5dfda < _0x88eb63['MAP']['columns'] && _0x3dc7b6 >= 0x0 && _0x3dc7b6 < _0x88eb63['MAP']['rows'])
        _0x3d99c1['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x88eb63['EDITOR']['selectedLayer'],
            'col': _0xf5dfda,
            'row': _0x3dc7b6,
            'gid': _0x88eb63['EDITOR']['selectedTileGid']
        }));
}
function _0x4e7759() {
    const _0x30e87a = document['getElementById']('palette');
    if (!_0x30e87a || _0x30e87a['children']['length'] > 0x0)
        return;
    const _0x454c15 = 0x40;
    const _0x12d926 = _0x3619bf;
    const _0x41f5aa = document['createElement']('div');
    _0x41f5aa['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x187968 = document['createElement']('canvas');
    _0x187968['width'] = 0xc0;
    _0x187968['height'] = 0xa0;
    _0x187968['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x41f5aa['appendChild'](_0x187968);
    const _0x3c198b = document['createElement']('div');
    _0x3c198b['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x41f5aa['appendChild'](_0x3c198b);
    let _0x3adabe = 0x0, _0x1c4a54 = 0x0;
    let _0x6a22c6 = ![], _0x3b395a = 0x0, _0x5e2f98 = 0x0, _0x3aedd0 = 0x0, _0x35e335 = 0x0;
    function _0x1a9408() {
        const _0x126c8f = _0x187968['getContext']('2d');
        _0x126c8f['clearRect'](0x0, 0x0, _0x187968['width'], _0x187968['height']);
        _0x126c8f['imageSmoothingEnabled'] = ![];
        if (_0x12d926['complete'] && _0x12d926['naturalWidth'] > 0x0) {
            _0x126c8f['drawImage'](_0x12d926, _0x3adabe, _0x1c4a54, _0x187968['width'], _0x187968['height'], 0x0, 0x0, _0x187968['width'], _0x187968['height']);
        }
        _0x126c8f['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x126c8f['lineWidth'] = 0x1;
        const _0x741f8 = Math['floor'](_0x3adabe / _0x454c15);
        const _0xbc6355 = Math['floor'](_0x1c4a54 / _0x454c15);
        for (let _0x3e6080 = _0x741f8; _0x3e6080 <= _0x741f8 + Math['ceil'](_0x187968['width'] / _0x454c15) + 0x1; _0x3e6080++) {
            const _0x1c436b = _0x3e6080 * _0x454c15 - _0x3adabe;
            _0x126c8f['beginPath']();
            _0x126c8f['moveTo'](_0x1c436b, 0x0);
            _0x126c8f['lineTo'](_0x1c436b, _0x187968['height']);
            _0x126c8f['stroke']();
        }
        for (let _0x1cdfdd = _0xbc6355; _0x1cdfdd <= _0xbc6355 + Math['ceil'](_0x187968['height'] / _0x454c15) + 0x1; _0x1cdfdd++) {
            const _0x45128c = _0x1cdfdd * _0x454c15 - _0x1c4a54;
            _0x126c8f['beginPath']();
            _0x126c8f['moveTo'](0x0, _0x45128c);
            _0x126c8f['lineTo'](_0x187968['width'], _0x45128c);
            _0x126c8f['stroke']();
        }
    }
    function _0xc7648e() {
        const _0x3e600d = Math['max'](0x1, Math['ceil'](_0x12d926['naturalWidth'] / _0x454c15));
        const _0x115ff7 = _0x88eb63['EDITOR']['selectedTileGid'];
        if (_0x115ff7 <= 0x0) {
            _0x3c198b['style']['display'] = 'none';
            return;
        }
        const _0x371aa7 = _0x115ff7 - 0x1;
        const _0x28eca5 = _0x371aa7 % _0x3e600d;
        const _0x49ea0a = Math['floor'](_0x371aa7 / _0x3e600d);
        const _0xf281e0 = _0x28eca5 * _0x454c15 - _0x3adabe;
        const _0x257ee8 = _0x49ea0a * _0x454c15 - _0x1c4a54;
        _0x3c198b['style']['display'] = 'block';
        _0x3c198b['style']['left'] = _0xf281e0 + 'px';
        _0x3c198b['style']['top'] = _0x257ee8 + 'px';
    }
    _0x12d926['onload'] = () => {
        _0x1a9408();
        _0xc7648e();
    };
    if (_0x12d926['complete'] && _0x12d926['naturalWidth'] > 0x0) {
        _0x1a9408();
        _0xc7648e();
    }
    _0x41f5aa['addEventListener']('mousedown', _0x5c262a => {
        if (_0x5c262a['button'] === 0x0) {
            _0x6a22c6 = !![];
            _0x3b395a = _0x5c262a['clientX'];
            _0x5e2f98 = _0x5c262a['clientY'];
            _0x3aedd0 = _0x3adabe;
            _0x35e335 = _0x1c4a54;
            _0x41f5aa['style']['cursor'] = 'grabbing';
            _0x5c262a['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x586d7f => {
        if (!_0x6a22c6)
            return;
        const _0x50a908 = _0x3b395a - _0x586d7f['clientX'];
        const _0x3dab69 = _0x5e2f98 - _0x586d7f['clientY'];
        const _0x1303c5 = Math['max'](0x0, _0x12d926['naturalWidth'] - _0x187968['width']);
        const _0x28a3a2 = Math['max'](0x0, _0x12d926['naturalHeight'] - _0x187968['height']);
        _0x3adabe = Math['max'](0x0, Math['min'](_0x1303c5, _0x3aedd0 + _0x50a908));
        _0x1c4a54 = Math['max'](0x0, Math['min'](_0x28a3a2, _0x35e335 + _0x3dab69));
        _0x1a9408();
        _0xc7648e();
    });
    window['addEventListener']('mouseup', _0xe7a7d6 => {
        if (_0x6a22c6) {
            _0x6a22c6 = ![];
            _0x41f5aa['style']['cursor'] = 'grab';
        }
    });
    _0x41f5aa['addEventListener']('click', _0x2e5892 => {
        const _0x5b2658 = _0x41f5aa['getBoundingClientRect']();
        const _0x207aaf = _0x2e5892['clientX'] - _0x5b2658['left'] + _0x3adabe;
        const _0x1c04b6 = _0x2e5892['clientY'] - _0x5b2658['top'] + _0x1c4a54;
        const _0xde4e8d = Math['max'](0x1, Math['ceil'](_0x12d926['naturalWidth'] / _0x454c15));
        const _0x15eb34 = Math['floor'](_0x207aaf / _0x454c15);
        const _0x354128 = Math['floor'](_0x1c04b6 / _0x454c15);
        const _0x20e62d = _0x354128 * _0xde4e8d + _0x15eb34 + 0x1;
        _0x88eb63['EDITOR']['selectedTileGid'] = _0x20e62d;
        _0xc7648e();
    });
    _0x30e87a['appendChild'](_0x41f5aa);
    const _0x544a1a = document['createElement']('div');
    _0x544a1a['className'] = 'tile-btn\x20eraser-btn';
    _0x544a1a['title'] = 'Eraser\x20(gid\x200)';
    _0x544a1a['onclick'] = () => {
        _0x88eb63['EDITOR']['selectedTileGid'] = 0x0;
        _0x3c198b['style']['display'] = 'none';
    };
    _0x30e87a['appendChild'](_0x544a1a);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x88eb63['EDITOR']['enabled'] = !_0x88eb63['EDITOR']['enabled'];
        const _0x1b0c63 = document['getElementById']('editor-tools');
        if (_0x88eb63['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x1b0c63['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x1b0c63['style']['display'] = 'none';
        }
    });
    const _0x46aabd = document['getElementById']('start-game-btn');
    if (_0x46aabd) {
        _0x46aabd['addEventListener']('click', () => {
            if (_0x3d99c1)
                _0x3d99c1['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x426ec5 = document['getElementById']('rolelist-toggle-btn');
    if (_0x426ec5) {
        let _0x560872 = 'subalignments';
        _0x426ec5['addEventListener']('click', () => {
            if (_0x560872 === 'subalignments')
                _0x560872 = 'precise';
            else if (_0x560872 === 'precise')
                _0x560872 = 'off';
            else
                _0x560872 = 'subalignments';
            _0x426ec5['innerText'] = 'Role\x20List:\x20' + _0x560872['charAt'](0x0)['toUpperCase']() + _0x560872['slice'](0x1);
            if (_0x3d99c1)
                _0x3d99c1['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x560872
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x54955d => {
        if (_0x54955d['id'] === 'editor-toggle-btn' || _0x54955d['id'] === 'start-game-btn' || _0x54955d['id'] === 'rolelist-toggle-btn')
            return;
        _0x54955d['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x20cf2b => _0x20cf2b['classList']['remove']('active'));
            _0x54955d['classList']['add']('active');
            _0x88eb63['EDITOR']['selectedLayer'] = _0x54955d['dataset']['layer'];
        });
    });
}
function _0x4a0dc1(_0x503dcc) {
    if (_0x3d99c1)
        _0x3d99c1['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x503dcc
        }));
}
function _0x553d21(_0x480dff) {
    if (_0x3d99c1)
        _0x3d99c1['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x480dff
        }));
}
function _0x31bb41(_0xe5a221, _0x7a1f44, _0xe7851d, _0x1dcd21) {
    const _0x2d37e9 = document['getElementById']('admin-panel');
    if (_0x2d37e9)
        _0x2d37e9['remove']();
    if (_0x2d37e9 && _0x2d37e9['dataset']['target'] === String(_0xe5a221))
        return;
    const _0x1443da = document['createElement']('div');
    _0x1443da['id'] = 'admin-panel';
    _0x1443da['dataset']['target'] = String(_0xe5a221);
    _0x1443da['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x253377 = document['createElement']('div');
    _0x253377['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x253377['textContent'] = _0x7a1f44;
    _0x1443da['appendChild'](_0x253377);
    const _0x3e4df3 = document['createElement']('button');
    _0x3e4df3['textContent'] = 'Kick';
    _0x3e4df3['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x3e4df3['onmouseenter'] = () => _0x3e4df3['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x3e4df3['onmouseleave'] = () => _0x3e4df3['style']['background'] = 'transparent';
    _0x3e4df3['onclick'] = () => {
        _0x4a0dc1(_0xe5a221);
        _0x1443da['remove']();
    };
    _0x1443da['appendChild'](_0x3e4df3);
    const _0x2d2d8a = document['createElement']('button');
    _0x2d2d8a['textContent'] = 'Ban';
    _0x2d2d8a['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x2d2d8a['onmouseenter'] = () => _0x2d2d8a['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x2d2d8a['onmouseleave'] = () => _0x2d2d8a['style']['background'] = 'transparent';
    _0x2d2d8a['onclick'] = () => {
        _0x553d21(_0xe5a221);
        _0x1443da['remove']();
    };
    _0x1443da['appendChild'](_0x2d2d8a);
    document['body']['appendChild'](_0x1443da);
    const _0x2c0b18 = _0x1443da['offsetWidth'] || 0x91;
    const _0x2ffdad = _0x1443da['offsetHeight'] || 0x50;
    let _0x2839e7 = _0xe7851d - _0x2c0b18;
    let _0x1a079d = _0x1dcd21;
    if (_0x2839e7 < 0x4)
        _0x2839e7 = _0xe7851d;
    if (_0x1a079d + _0x2ffdad > window['innerHeight'] - 0x4)
        _0x1a079d = window['innerHeight'] - _0x2ffdad - 0x4;
    _0x1443da['style']['left'] = _0x2839e7 + 'px';
    _0x1443da['style']['top'] = _0x1a079d + 'px';
    const _0x3d490b = _0x1b6f7c => {
        if (!_0x1443da['contains'](_0x1b6f7c['target'])) {
            _0x1443da['remove']();
            document['removeEventListener']('mousedown', _0x3d490b);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x3d490b), 0x0);
}
function _0x5080ef() {
    const _0x50be9e = document['getElementById']('leaderboard-list');
    _0x50be9e['innerHTML'] = '';
    const _0x50525b = document['createElement']('div');
    _0x50525b['className'] = 'leaderboard-entry';
    const _0x49299d = document['createElement']('span');
    _0x49299d['textContent'] = _0x569297 + (_0x3405c2 ? '\x20[🗝️]' : '');
    if (_0x4c0f94['has'](_0x29be97) && !_0x1ca472['isDead']) {
        _0x49299d['style']['color'] = '#cc88ff';
    }
    _0x50525b['appendChild'](_0x49299d);
    _0x50be9e['appendChild'](_0x50525b);
    for (const _0x2b9ce5 in _0x52aae8) {
        const _0x1c673e = document['createElement']('div');
        _0x1c673e['className'] = 'leaderboard-entry';
        const _0x5792b4 = document['createElement']('span');
        _0x5792b4['textContent'] = _0x52aae8[_0x2b9ce5]['name'] + (_0x52aae8[_0x2b9ce5]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x4c0f94['has'](parseInt(_0x2b9ce5)) && !_0x52aae8[_0x2b9ce5]['isDead']) {
            _0x5792b4['style']['color'] = '#cc88ff';
        }
        _0x1c673e['appendChild'](_0x5792b4);
        if (_0x3405c2 && !_0x52aae8[_0x2b9ce5]['isOwner']) {
            const _0x3c5adb = _0x52aae8[_0x2b9ce5]['id'];
            const _0x528748 = _0x52aae8[_0x2b9ce5]['name'];
            _0x1c673e['style']['cursor'] = 'context-menu';
            _0x1c673e['addEventListener']('contextmenu', _0x4d398b => {
                _0x4d398b['preventDefault']();
                _0x4d398b['stopPropagation']();
                _0x31bb41(_0x3c5adb, _0x528748, _0x4d398b['clientX'], _0x4d398b['clientY']);
            });
        }
        _0x50be9e['appendChild'](_0x1c673e);
    }
}
window['addEventListener']('resize', _0x214f5f);
function _0x214f5f() {
    _0x167750['width'] = window['innerWidth'];
    _0x167750['height'] = window['innerHeight'];
    _0x88eb63['SYSTEM']['viewScale'] = Math['max'](_0x167750['width'] / _0x56ab1f, _0x167750['height'] / _0x10e5ce);
    _0x88eb63['CAMERA']['width'] = _0x167750['width'] / _0x88eb63['SYSTEM']['viewScale'];
    _0x88eb63['CAMERA']['height'] = _0x167750['height'] / _0x88eb63['SYSTEM']['viewScale'];
    _0x293968['imageSmoothingEnabled'] = ![];
}
function _0x875613(_0x5871e8) {
    if (_0x5871e8['ctrlKey'] || _0x5871e8['metaKey']) {
        if (_0x5871e8['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x5871e8['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x5871e8['code'])) {
            _0x5871e8['preventDefault']();
            _0x5871e8['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x875613, { 'passive': ![] });
window['addEventListener']('keydown', _0x875613, { 'passive': ![] });
window['addEventListener']('keydown', _0x1d20e5 => {
    const _0x5e9b80 = _0x1d20e5['key']['toLowerCase']();
    if (_0x5e9b80 === 'tab') {
        _0x1d20e5['preventDefault']();
        const _0x50782e = document['getElementById']('will-ui');
        const _0x416319 = document['getElementById']('will-input');
        if (_0x50782e['style']['display'] === 'flex') {
            _0x50782e['style']['display'] = 'none';
            if (_0x3d99c1)
                _0x3d99c1['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x416319['value']
                }));
            _0x416319['blur']();
        } else {
            _0x50782e['style']['display'] = 'flex';
            _0x416319['focus']();
            for (let _0x55a5ca in _0x88eb63['INPUTS']['keys'])
                _0x88eb63['INPUTS']['keys'][_0x55a5ca] = ![];
        }
        return;
    }
    if (_0x1d20e5['key'] === 'Enter') {
        if (_0x37ddc6) {
            const _0x3ba714 = document['getElementById']('play-btn');
            if (_0x3ba714)
                _0x3ba714['click']();
            return;
        }
        if (!_0x3d99c1 || _0x3d99c1['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x1b4c70 = document['getElementById']('chat-ui');
        const _0x45c82e = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x45c82e) {
            const _0x36e08c = _0x45c82e['value']['trim']();
            if (_0x36e08c['length'] > 0x0) {
                _0x3d99c1['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x36e08c
                }));
            }
            _0x45c82e['value'] = '';
            _0x1b4c70['style']['display'] = 'none';
            _0x45c82e['blur']();
        } else {
            _0x1b4c70['style']['display'] = 'block';
            _0x45c82e['focus']();
            for (let _0x3b8ca3 in _0x88eb63['INPUTS']['keys'])
                _0x88eb63['INPUTS']['keys'][_0x3b8ca3] = ![];
        }
        _0x1d20e5['preventDefault']();
        return;
    }
    if (_0x1d20e5['key'] === 'Escape') {
        const _0x42c611 = document['getElementById']('guide-ui');
        if (_0x42c611 && _0x42c611['style']['display'] === 'flex') {
            _0x42c611['style']['display'] = 'none';
            return;
        }
        const _0x21b372 = document['getElementById']('ability-ui');
        if (_0x21b372 && _0x21b372['style']['display'] === 'block') {
            _0x21b372['style']['display'] = 'none';
            return;
        }
        const _0x2e4e29 = document['getElementById']('settings-panel');
        if (_0x2e4e29 && _0x2e4e29['style']['display'] === 'block') {
            _0x2e4e29['style']['display'] = 'none';
            return;
        }
        const _0x1eece9 = document['getElementById']('mayor-confirm-dialog');
        if (_0x1eece9 && _0x1eece9['style']['display'] === 'flex') {
            _0x1eece9['style']['display'] = 'none';
            return;
        }
        const _0x38e5b5 = document['getElementById']('target-chooser-ui');
        if (_0x38e5b5 && _0x38e5b5['style']['display'] === 'flex') {
            _0x38e5b5['style']['display'] = 'none';
            return;
        }
        const _0x3f7652 = document['getElementById']('chat-ui');
        const _0x71c6cd = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x71c6cd) {
            _0x71c6cd['value'] = '';
            _0x3f7652['style']['display'] = 'none';
            _0x71c6cd['blur']();
            _0x1d20e5['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x88eb63['INPUTS']['keys']['hasOwnProperty'](_0x5e9b80))
            _0x88eb63['INPUTS']['keys'][_0x5e9b80] = !![];
        if (!_0x3d99c1 || _0x3d99c1['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x5e9b80 === 'h' && !_0x1d20e5['repeat']) {
            const _0x269abf = document['getElementById']('guide-ui');
            if (_0x269abf) {
                _0x269abf['style']['display'] = _0x269abf['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x5e9b80 === 't' && !_0x1d20e5['repeat']) {
            if (_0x1ca472['isDead'])
                return;
            if (_0x5cfba0 === 'Mayor') {
                if (_0x4c0f94['has'](_0x29be97)) {
                    _0x7f801b('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x234528 = document['getElementById']('mayor-confirm-dialog');
                if (_0x234528)
                    _0x234528['style']['display'] = 'flex';
                return;
            }
            if (_0x88eb63['GAME_STATE'] === 'NIGHT') {
                if (!_0x88eb63['NIGHT_ABILITY_OPEN']) {
                    _0x7f801b('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x404dc6 = document['getElementById']('ability-ui');
                if (_0x404dc6) {
                    if (_0x404dc6['style']['display'] === 'block') {
                        _0x404dc6['style']['display'] = 'none';
                    } else {
                        _0x38c33c();
                        _0x404dc6['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x88eb63['GAME_STATE'] === 'DAY_DISCUSS' || _0x88eb63['GAME_STATE'] === 'DAY_VOTE') {
                _0x7f801b('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x5e9b80 === 'e' && !_0x1ca472['isDead']) {
            const _0x4bb9e3 = Date['now']();
            if (!window['_lastDoorSend'] || _0x4bb9e3 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x4bb9e3;
                _0x3d99c1['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x521d72 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x51e247 = _0x521d72['key']['toLowerCase']();
        if (_0x88eb63['INPUTS']['keys']['hasOwnProperty'](_0x51e247))
            _0x88eb63['INPUTS']['keys'][_0x51e247] = ![];
    }
});
window['addEventListener']('mousemove', _0x20ec41 => {
    _0x88eb63['INPUTS']['mouseX'] = _0x20ec41['clientX'];
    _0x88eb63['INPUTS']['mouseY'] = _0x20ec41['clientY'];
    if (_0x88eb63['INPUTS']['isMouseDown'] && _0x88eb63['EDITOR']['enabled']) {
        _0x1c756e(_0x20ec41['clientX'], _0x20ec41['clientY']);
    }
});
window['addEventListener']('mousedown', _0x5509f2 => {
    if (_0x5509f2['target']['closest']('#editor-ui') || _0x5509f2['target']['closest']('#leaderboard-ui') || _0x5509f2['target']['closest']('#chat-log-ui') || _0x5509f2['target']['closest']('#target-chooser-ui') || _0x5509f2['target']['closest']('#guide-ui') || _0x5509f2['target']['closest']('#role-list-ui') || _0x5509f2['target']['closest']('#ability-ui') || _0x5509f2['target']['closest']('#settings-panel') || _0x5509f2['target']['closest']('#mayor-confirm-dialog') || _0x5509f2['target']['closest']('#mobile-action-bar') || _0x5509f2['target']['closest']('#mobile-top-bar') || _0x5509f2['target']['closest']('#mobile-joystick-zone') || _0x5509f2['target']['closest']('#mobile-chat-overlay') || _0x5509f2['target']['closest']('#will-ui') || _0x5509f2['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x5509f2['button'] === 0x0) {
        _0x88eb63['INPUTS']['isMouseDown'] = !![];
        if (_0x88eb63['EDITOR']['enabled'])
            _0x1c756e(_0x5509f2['clientX'], _0x5509f2['clientY']);
    }
});
window['addEventListener']('mouseup', _0x10e24d => {
    _0x88eb63['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x5b5122 => {
    if (_0x5b5122['target']['closest']('#settings-btn'))
        return;
    const _0x159cb8 = document['getElementById']('leaderboard-list');
    const _0x4c0285 = document['getElementById']('leaderboard-toggle');
    if (_0x159cb8['style']['display'] === 'none') {
        _0x159cb8['style']['display'] = 'flex';
        _0x4c0285['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x159cb8['style']['display'] = 'none';
        _0x4c0285['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x369bd9 = document['getElementById']('close-target-btn');
if (_0x369bd9) {
    _0x369bd9['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x22c49a = document['getElementById']('close-guide-btn');
if (_0x22c49a) {
    _0x22c49a['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x3922e4 = document['getElementById']('role-list-header');
if (_0x3922e4) {
    _0x3922e4['addEventListener']('click', () => {
        const _0x25408c = document['getElementById']('role-list-items');
        const _0x15dbc4 = document['getElementById']('role-list-toggle');
        if (_0x25408c['style']['display'] === 'none') {
            _0x25408c['style']['display'] = 'flex';
            _0x15dbc4['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x25408c['style']['display'] = 'none';
            _0x15dbc4['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x47995d() {
    const _0x198c81 = document['getElementById']('mobile-joystick-zone');
    const _0x1b2334 = document['getElementById']('mobile-joystick-base');
    const _0x3cef25 = document['getElementById']('mobile-joystick-knob');
    if (_0x198c81 && _0x1b2334 && _0x3cef25) {
        const _0x115402 = 0x3e;
        const _0x433ece = (_0x3de834, _0x212f63) => {
            const _0x910cc8 = _0x1b2334['getBoundingClientRect']();
            const _0x3d6a9a = _0x910cc8['left'] + _0x910cc8['width'] / 0x2;
            const _0x2dbee9 = _0x910cc8['top'] + _0x910cc8['height'] / 0x2;
            const _0x2d8d0e = _0x3de834 - _0x3d6a9a;
            const _0x3b2922 = _0x212f63 - _0x2dbee9;
            const _0x3b4383 = Math['hypot'](_0x2d8d0e, _0x3b2922);
            if (_0x3b4383 === 0x0) {
                _0x1dfd0c = 0x0;
                _0x3ffc30 = 0x0;
                _0x217534 = ![];
                _0x3cef25['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x4e2370 = Math['min'](_0x3b4383, _0x115402);
            const _0x2d9b44 = _0x2d8d0e / _0x3b4383 * _0x4e2370;
            const _0x4f4e1f = _0x3b2922 / _0x3b4383 * _0x4e2370;
            _0x1dfd0c = _0x2d9b44 / _0x115402;
            _0x3ffc30 = _0x4f4e1f / _0x115402;
            _0x217534 = _0x3b4383 >= _0x115402 * 0.75;
            _0x3cef25['style']['transform'] = 'translate(' + _0x2d9b44 + 'px,\x20' + _0x4f4e1f + 'px)';
        };
        const _0x28d55d = _0x5e0942 => {
            for (let _0x17576d = 0x0; _0x17576d < _0x5e0942['changedTouches']['length']; _0x17576d++) {
                const _0x451377 = _0x5e0942['changedTouches'][_0x17576d];
                if (_0x33ff79 === null) {
                    _0x33ff79 = _0x451377['identifier'];
                    _0x141845 = !![];
                    _0x433ece(_0x451377['clientX'], _0x451377['clientY']);
                    break;
                }
            }
        };
        const _0x5c1352 = _0x317746 => {
            for (let _0x5967e6 = 0x0; _0x5967e6 < _0x317746['changedTouches']['length']; _0x5967e6++) {
                const _0x2d9ba0 = _0x317746['changedTouches'][_0x5967e6];
                if (_0x2d9ba0['identifier'] === _0x33ff79) {
                    _0x433ece(_0x2d9ba0['clientX'], _0x2d9ba0['clientY']);
                    break;
                }
            }
        };
        const _0x4e87ad = _0x23efa2 => {
            for (let _0x8f2492 = 0x0; _0x8f2492 < _0x23efa2['changedTouches']['length']; _0x8f2492++) {
                const _0x17e5b4 = _0x23efa2['changedTouches'][_0x8f2492];
                if (_0x17e5b4['identifier'] === _0x33ff79) {
                    _0x33ff79 = null;
                    _0x141845 = ![];
                    _0x1dfd0c = 0x0;
                    _0x3ffc30 = 0x0;
                    _0x217534 = ![];
                    _0x3cef25['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x198c81['addEventListener']('touchstart', _0x445b69 => {
            _0x445b69['preventDefault']();
            _0x28d55d(_0x445b69);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x5c1352, { 'passive': !![] });
        window['addEventListener']('touchend', _0x4e87ad, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x4e87ad, { 'passive': !![] });
    }
    const _0x105af9 = (_0x667541, _0x47881d) => {
        const _0x5a96aa = _0x667541 / _0x88eb63['SYSTEM']['viewScale'];
        const _0x385c96 = _0x47881d / _0x88eb63['SYSTEM']['viewScale'];
        const _0xa2a0af = _0x1ca472['x'] - _0x88eb63['CAMERA']['x'] + _0x1ca472['width'] / 0x2;
        const _0x27b99e = _0x1ca472['y'] - _0x88eb63['CAMERA']['y'] + _0x1ca472['height'] / 0x2;
        _0x3211c1 = Math['atan2'](_0x385c96 - _0x27b99e, _0x5a96aa - _0xa2a0af);
        _0x2f9be3 = !![];
        _0x88eb63['INPUTS']['mouseX'] = _0x667541;
        _0x88eb63['INPUTS']['mouseY'] = _0x47881d;
    };
    _0x167750['addEventListener']('touchstart', _0x1074b4 => {
        if (_0x37ddc6)
            return;
        for (let _0x3728d3 = 0x0; _0x3728d3 < _0x1074b4['changedTouches']['length']; _0x3728d3++) {
            const _0x5c7df1 = _0x1074b4['changedTouches'][_0x3728d3];
            if (_0x5c7df1['identifier'] !== _0x33ff79 && _0x44f243 === null) {
                _0x44f243 = _0x5c7df1['identifier'];
                _0x105af9(_0x5c7df1['clientX'], _0x5c7df1['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x167750['addEventListener']('touchmove', _0x3a193d => {
        if (_0x37ddc6)
            return;
        for (let _0x4e5417 = 0x0; _0x4e5417 < _0x3a193d['changedTouches']['length']; _0x4e5417++) {
            const _0x5443d6 = _0x3a193d['changedTouches'][_0x4e5417];
            if (_0x5443d6['identifier'] === _0x44f243) {
                _0x105af9(_0x5443d6['clientX'], _0x5443d6['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x57881e = _0x185990 => {
        for (let _0x372006 = 0x0; _0x372006 < _0x185990['changedTouches']['length']; _0x372006++) {
            const _0x39d6ce = _0x185990['changedTouches'][_0x372006];
            if (_0x39d6ce['identifier'] === _0x44f243) {
                _0x44f243 = null;
                _0x2f9be3 = ![];
                break;
            }
        }
    };
    _0x167750['addEventListener']('touchend', _0x57881e, { 'passive': !![] });
    _0x167750['addEventListener']('touchcancel', _0x57881e, { 'passive': !![] });
    const _0x469c83 = document['getElementById']('mob-sprint-btn');
    if (_0x469c83) {
        _0x469c83['addEventListener']('click', _0x319c28 => {
            _0x319c28['stopPropagation']();
            _0xb4cdc8 = !_0xb4cdc8;
            _0x469c83['classList']['toggle']('active', _0xb4cdc8);
        });
    }
    const _0x2be75b = document['getElementById']('mob-interact-btn');
    if (_0x2be75b) {
        _0x2be75b['addEventListener']('click', _0x2ce66e => {
            _0x2ce66e['stopPropagation']();
            if (!_0x1ca472['isDead']) {
                const _0x4b5674 = Date['now']();
                if (!window['_lastDoorSend'] || _0x4b5674 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x4b5674;
                    if (_0x3d99c1 && _0x3d99c1['readyState'] === WebSocket['OPEN'])
                        _0x3d99c1['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x12b964 = document['getElementById']('mob-ability-btn');
    if (_0x12b964) {
        _0x12b964['addEventListener']('click', _0x3048fe => {
            _0x3048fe['stopPropagation']();
            if (_0x1ca472['isDead'])
                return;
            if (_0x5cfba0 === 'Mayor') {
                if (_0x4c0f94['has'](_0x29be97)) {
                    _0x7f801b('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x3fdb29 = document['getElementById']('mayor-confirm-dialog');
                if (_0x3fdb29)
                    _0x3fdb29['style']['display'] = 'flex';
                return;
            }
            if (_0x88eb63['GAME_STATE'] === 'NIGHT') {
                if (!_0x88eb63['NIGHT_ABILITY_OPEN']) {
                    _0x7f801b('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x29cff5 = document['getElementById']('ability-ui');
                if (_0x29cff5) {
                    if (_0x29cff5['style']['display'] === 'block') {
                        _0x29cff5['style']['display'] = 'none';
                    } else {
                        _0x38c33c();
                        _0x29cff5['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x88eb63['GAME_STATE'] === 'DAY_DISCUSS' || _0x88eb63['GAME_STATE'] === 'DAY_VOTE') {
                _0x7f801b('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0xcdf468 = document['getElementById']('mob-will-btn');
    const _0x39162b = document['getElementById']('will-ui');
    const _0x5c89fe = document['getElementById']('will-input');
    const _0x2de263 = document['getElementById']('close-will-btn');
    const _0xdb310d = () => {
        if (!_0x39162b)
            return;
        if (_0x39162b['style']['display'] === 'flex') {
            _0x39162b['style']['display'] = 'none';
            if (_0x3d99c1 && _0x3d99c1['readyState'] === WebSocket['OPEN'] && _0x5c89fe) {
                _0x3d99c1['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x5c89fe['value']
                }));
            }
            if (_0x5c89fe)
                _0x5c89fe['blur']();
        } else {
            _0x39162b['style']['display'] = 'flex';
            if (_0x5c89fe)
                _0x5c89fe['focus']();
        }
    };
    if (_0xcdf468)
        _0xcdf468['addEventListener']('click', _0x2ccd94 => {
            _0x2ccd94['stopPropagation']();
            _0xdb310d();
        });
    if (_0x2de263)
        _0x2de263['addEventListener']('click', _0x216080 => {
            _0x216080['stopPropagation']();
            _0xdb310d();
        });
    const _0x1135b0 = document['getElementById']('mob-chat-btn');
    const _0x170aeb = document['getElementById']('mobile-chat-overlay');
    const _0x44a85d = document['getElementById']('mobile-chat-input');
    const _0x1ca96c = document['getElementById']('mobile-chat-send');
    const _0xb9d5cb = document['getElementById']('mobile-chat-cancel');
    const _0x2dc92f = () => {
        if (!_0x170aeb || !_0x44a85d)
            return;
        _0x170aeb['style']['display'] = 'flex';
        _0x44a85d['value'] = '';
        _0x44a85d['focus']();
    };
    const _0x109a3f = () => {
        if (!_0x170aeb || !_0x44a85d)
            return;
        _0x170aeb['style']['display'] = 'none';
        _0x44a85d['blur']();
    };
    const _0x4ef83b = () => {
        if (!_0x44a85d)
            return;
        const _0x1b4937 = _0x44a85d['value']['trim']();
        if (_0x1b4937['length'] > 0x0 && _0x3d99c1 && _0x3d99c1['readyState'] === WebSocket['OPEN']) {
            _0x3d99c1['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x1b4937
            }));
        }
        _0x44a85d['value'] = '';
        _0x109a3f();
    };
    if (_0x1135b0)
        _0x1135b0['addEventListener']('click', _0x216e01 => {
            _0x216e01['stopPropagation']();
            _0x2dc92f();
        });
    if (_0x1ca96c)
        _0x1ca96c['addEventListener']('click', _0x30831f => {
            _0x30831f['stopPropagation']();
            _0x4ef83b();
        });
    if (_0xb9d5cb)
        _0xb9d5cb['addEventListener']('click', _0x1983a9 => {
            _0x1983a9['stopPropagation']();
            _0x109a3f();
        });
    if (_0x44a85d) {
        _0x44a85d['addEventListener']('keydown', _0x426c20 => {
            if (_0x426c20['key'] === 'Enter') {
                _0x426c20['preventDefault']();
                _0x4ef83b();
            } else if (_0x426c20['key'] === 'Escape') {
                _0x109a3f();
            }
        });
    }
    const _0x2b690b = document['getElementById']('mob-top-chat');
    if (_0x2b690b)
        _0x2b690b['addEventListener']('click', _0x4a29c9 => {
            _0x4a29c9['stopPropagation']();
            _0x2dc92f();
        });
    const _0x16a4d9 = document['getElementById']('mob-top-will');
    if (_0x16a4d9)
        _0x16a4d9['addEventListener']('click', _0x392735 => {
            _0x392735['stopPropagation']();
            _0xdb310d();
        });
    const _0x2354f0 = document['getElementById']('mob-top-roles');
    if (_0x2354f0) {
        _0x2354f0['addEventListener']('click', _0x5b21bf => {
            _0x5b21bf['stopPropagation']();
            const _0x3879d7 = document['getElementById']('role-list-ui');
            const _0x42cfe6 = document['getElementById']('leaderboard-ui');
            if (_0x42cfe6)
                _0x42cfe6['style']['display'] = 'none';
            if (_0x3879d7)
                _0x3879d7['style']['display'] = _0x3879d7['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x495fe5 = document['getElementById']('mob-top-players');
    if (_0x495fe5) {
        _0x495fe5['addEventListener']('click', _0x430fd6 => {
            _0x430fd6['stopPropagation']();
            const _0x45f354 = document['getElementById']('leaderboard-ui');
            const _0x3579aa = document['getElementById']('role-list-ui');
            if (_0x3579aa)
                _0x3579aa['style']['display'] = 'none';
            if (_0x45f354)
                _0x45f354['style']['display'] = _0x45f354['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x2f2547 = document['getElementById']('mob-top-help');
    if (_0x2f2547) {
        _0x2f2547['addEventListener']('click', _0x524bf3 => {
            _0x524bf3['stopPropagation']();
            const _0x4923c3 = document['getElementById']('guide-ui');
            if (_0x4923c3)
                _0x4923c3['style']['display'] = _0x4923c3['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x3649d1) {
            _0x3649d1 = !![];
            _0x234092();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
