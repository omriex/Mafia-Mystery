document['addEventListener']('contextmenu', _0xdbfb4f => _0xdbfb4f['preventDefault']());
const _0x13dc0b = {
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
let _0x875410 = '';
function _0x3a0091(_0x1494a9, _0x3d959a) {
    const _0x1208cd = document['getElementById']('role-list-ui');
    const _0x3a5916 = document['getElementById']('role-list-items');
    if (!_0x1208cd || !_0x3a5916)
        return;
    if (!_0x3d959a || _0x3d959a === 'off' || !_0x1494a9 || _0x1494a9['length'] === 0x0) {
        _0x1208cd['style']['display'] = 'none';
        return;
    }
    const _0x4f7d29 = _0x3d959a + '|' + JSON['stringify'](_0x1494a9);
    if (_0x4f7d29 === _0x875410)
        return;
    _0x875410 = _0x4f7d29;
    const _0x2b5fda = document['getElementById']('role-tooltip');
    if (_0x2b5fda) {
        _0x2b5fda['style']['visibility'] = 'hidden';
        _0x2b5fda['style']['opacity'] = '0';
    }
    _0x1208cd['style']['display'] = 'flex';
    _0x3a5916['innerHTML'] = '';
    _0x1494a9['forEach'](_0x123671 => {
        const _0x51dd2c = document['createElement']('div');
        _0x51dd2c['className'] = 'role-list-entry';
        const _0x3eea27 = _0x123671['name']['includes']('Mafia') || _0x123671['name'] === 'Skinwalker' || _0x123671['name'] === 'Blackmailer';
        _0x51dd2c['classList']['add'](_0x3eea27 ? 'mafia' : 'town');
        if (_0x3d959a === 'precise' && _0x123671['isDead']) {
            _0x51dd2c['classList']['remove']('town', 'mafia');
            _0x51dd2c['classList']['add']('dead');
            _0x51dd2c['innerHTML'] = '<span>' + _0x123671['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x43dea1 = _0x123671['count'] !== undefined && _0x123671['count'] !== null ? _0x123671['count'] + 'x\x20' : '';
            _0x51dd2c['innerHTML'] = '<span>' + _0x43dea1 + _0x123671['name'] + '</span>';
        }
        if (_0x3d959a === 'subalignments' && _0x13dc0b[_0x123671['name']]) {
            _0x51dd2c['style']['cursor'] = 'pointer';
            _0x51dd2c['addEventListener']('mouseenter', () => {
                const _0x368adc = document['getElementById']('role-tooltip');
                if (!_0x368adc)
                    return;
                const _0x3611ec = _0x13dc0b[_0x123671['name']]['join'](',\x20');
                _0x368adc['innerHTML'] = '';
                const _0x4fb2cd = document['createElement']('span');
                _0x4fb2cd['style']['color'] = '#ffcc00';
                _0x4fb2cd['textContent'] = _0x123671['name'];
                _0x368adc['appendChild'](_0x4fb2cd);
                _0x368adc['appendChild'](document['createElement']('br'));
                _0x368adc['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x3611ec));
                const _0x498a15 = _0x51dd2c['getBoundingClientRect']();
                _0x368adc['style']['left'] = _0x498a15['left'] - 0xeb + 'px';
                _0x368adc['style']['top'] = _0x498a15['top'] + 'px';
                _0x368adc['style']['display'] = 'block';
                _0x368adc['style']['visibility'] = 'visible';
                _0x368adc['style']['opacity'] = '1';
            });
            _0x51dd2c['addEventListener']('mouseleave', () => {
                const _0xee4e2b = document['getElementById']('role-tooltip');
                if (_0xee4e2b) {
                    _0xee4e2b['style']['display'] = 'none';
                    _0xee4e2b['style']['visibility'] = 'hidden';
                    _0xee4e2b['style']['opacity'] = '0';
                }
            });
        }
        _0x3a5916['appendChild'](_0x51dd2c);
    });
}
let _0x43694b = null;
let _0x56e65e = null;
const _0x43b548 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x3abcfd = 'Player???';
let _0x5e9321 = ![];
let _0xc68604 = {};
let _0x3eaf94 = null;
let _0x2ef132 = 0x0;
let _0x46279a = 0x0;
let _0x3a4dd1 = new Set();
let _0x51d721 = ![];
let _0x5aee9c = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x2d111 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x5d78e7 = ![];
let _0x30d2c1 = null;
let _0x5558bb = 0x0;
let _0x388a70 = 0x0;
let _0x1edb05 = ![];
let _0x2a7a4b = ![];
let _0x45b89d = 0x0;
let _0x1b3e77 = null;
let _0x35379c = ![];
let _0x1fce41 = 0x0;
let _0x50e3cd = 0x0;
let _0x4ff955 = [];
let _0x41b55a = [];
let _0x4c5632 = new Set();
const _0x249980 = ((() => {
    const _0x4776f1 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x5635ad = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x497298 = 0x320;
    const _0x3ceb2b = {};
    const _0x3f7d3f = {};
    let _0x1b28ce = null;
    let _0x12b87e = _0x5635ad === 0x0;
    let _0x3ae685 = ![];
    for (const [_0x35548b, _0x2fc84d] of Object['entries'](_0x4776f1)) {
        const _0x5256af = new Audio(_0x2fc84d);
        _0x5256af['loop'] = !![];
        _0x5256af['volume'] = 0x0;
        _0x5256af['preload'] = 'auto';
        _0x3ceb2b[_0x35548b] = _0x5256af;
        _0x3f7d3f[_0x35548b] = null;
    }
    const _0x13a604 = _0xade8b1 => Math['min'](0x1, Math['max'](0x0, _0xade8b1));
    function _0x43f151(_0x457ca1) {
        if (_0x3f7d3f[_0x457ca1] !== null) {
            cancelAnimationFrame(_0x3f7d3f[_0x457ca1]);
            _0x3f7d3f[_0x457ca1] = null;
        }
    }
    function _0x49f4e0(_0x49cbe9, _0x4d29e5, _0xfb04e5, _0xd90ae9, _0x27b98f) {
        _0x43f151(_0x49cbe9);
        const _0x2565c0 = _0x3ceb2b[_0x49cbe9];
        const _0x48d0d2 = performance['now']();
        const _0x1d6640 = _0x5e8a83 => {
            const _0x4c4df9 = _0x13a604((_0x5e8a83 - _0x48d0d2) / _0xd90ae9);
            const _0x1198af = _0x13a604(_0x4d29e5 + (_0xfb04e5 - _0x4d29e5) * _0x4c4df9);
            _0x2565c0['volume'] = _0x12b87e ? 0x0 : _0x1198af;
            if (_0x4c4df9 < 0x1) {
                _0x3f7d3f[_0x49cbe9] = requestAnimationFrame(_0x1d6640);
            } else {
                _0x3f7d3f[_0x49cbe9] = null;
                _0x2565c0['volume'] = _0x12b87e ? 0x0 : _0x13a604(_0xfb04e5);
                if (_0x27b98f)
                    _0x27b98f();
            }
        };
        _0x3f7d3f[_0x49cbe9] = requestAnimationFrame(_0x1d6640);
    }
    function _0x29eca3(_0x2c5064) {
        const _0x38d4d7 = _0x2c5064['play']();
        if (_0x38d4d7 && _0x38d4d7['catch']) {
            _0x38d4d7['catch'](() => {
                if (!_0x3ae685) {
                    const _0x4a43ec = () => {
                        _0x3ae685 = !![];
                        _0x2c5064['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x4a43ec);
                        document['removeEventListener']('keydown', _0x4a43ec);
                        document['removeEventListener']('touchstart', _0x4a43ec);
                    };
                    document['addEventListener']('click', _0x4a43ec, { 'once': !![] });
                    document['addEventListener']('keydown', _0x4a43ec, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x4a43ec, { 'once': !![] });
                }
            });
        }
    }
    function _0x4db09b(_0x458594) {
        if (!_0x4776f1[_0x458594])
            return;
        if (_0x1b28ce === _0x458594)
            return;
        const _0x4f1f71 = _0x1b28ce;
        _0x1b28ce = _0x458594;
        const _0x27fe0d = _0x3ceb2b[_0x458594];
        _0x43f151(_0x458594);
        _0x27fe0d['currentTime'] = 0x0;
        _0x27fe0d['volume'] = 0x0;
        _0x29eca3(_0x27fe0d);
        _0x49f4e0(_0x458594, 0x0, _0x5635ad, _0x497298);
        if (_0x4f1f71 && _0x3ceb2b[_0x4f1f71]) {
            const _0x33e8cd = _0x4f1f71;
            const _0x422763 = _0x3ceb2b[_0x33e8cd];
            const _0x17a17b = _0x13a604(_0x422763['volume']);
            _0x49f4e0(_0x33e8cd, _0x17a17b, 0x0, _0x497298, () => {
                _0x422763['pause']();
                _0x422763['currentTime'] = 0x0;
            });
        }
    }
    function _0x1181a6(_0x596dc9) {
        _0x5635ad = _0x13a604(_0x596dc9);
        localStorage['setItem']('musicVolume', String(_0x5635ad));
        if (!_0x12b87e && _0x1b28ce && _0x3f7d3f[_0x1b28ce] === null) {
            _0x3ceb2b[_0x1b28ce]['volume'] = _0x5635ad;
        }
    }
    function _0x300549() {
        return _0x5635ad;
    }
    function _0x4ab2a2(_0x2e8ae6) {
        _0x12b87e = _0x2e8ae6;
        for (const _0x2c3036 of Object['keys'](_0x3ceb2b)) {
            if (_0x3f7d3f[_0x2c3036] === null) {
                _0x3ceb2b[_0x2c3036]['volume'] = _0x2e8ae6 || _0x2c3036 !== _0x1b28ce ? 0x0 : _0x5635ad;
            }
        }
    }
    function _0x136e52() {
        return _0x12b87e;
    }
    function _0x196924(_0x503db2) {
        if (_0x503db2 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x503db2 === 'DAY_VOTE')
            return 'voting';
        if (_0x503db2 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x43edbe(_0x27c36c) {
        _0x4db09b(_0x196924(_0x27c36c));
    }
    function _0x5b9345(_0x151863) {
        _0x4db09b(_0x151863);
    }
    return {
        'play': _0x4db09b,
        'onStateChange': _0x43edbe,
        'onSoundEvent': _0x5b9345,
        'setVolume': _0x1181a6,
        'getVolume': _0x300549,
        'setMuted': _0x4ab2a2,
        'isMuted': _0x136e52
    };
})());
const _0x22ef55 = ((() => {
    const _0xc346e0 = 0x258;
    const _0x118e65 = 0xb4;
    const _0x2205e7 = 0x708;
    const _0x1873f0 = 0x140;
    const _0x2014c3 = 0.18;
    const _0x4a5669 = 0.95;
    const _0x529956 = new Audio('audio/heartbeat.mp3');
    _0x529956['loop'] = ![];
    _0x529956['preload'] = 'auto';
    _0x529956['volume'] = 0x0;
    let _0x2c371e = 0x0;
    let _0x331103 = Infinity;
    function _0x5a2c2e(_0x57fe4e, _0x196328, _0x451f4a) {
        return Math['min'](_0x451f4a, Math['max'](_0x196328, _0x57fe4e));
    }
    function _0x22e1f2(_0x3bb3fe, _0x1aa907, _0x115988) {
        return _0x3bb3fe + (_0x1aa907 - _0x3bb3fe) * _0x115988;
    }
    function _0x222c5d(_0x1c80d4) {
        if (_0x4d0158['GAME_STATE'] !== 'NIGHT' || _0x1b8ecb['isDead'] || _0x3eaf94 === 'Skinwalker' || _0x3eaf94 === 'Blackmailer') {
            _0x331103 = Infinity;
            return;
        }
        const _0xf88981 = _0x1b8ecb['x'] + 22.5;
        const _0x3abc96 = _0x1b8ecb['y'] + 22.5;
        let _0x36198f = Infinity;
        for (const _0x1350c1 in _0xc68604) {
            const _0x30b907 = _0xc68604[_0x1350c1];
            if (!_0x30b907['isDark'] || _0x30b907['isDead'])
                continue;
            const _0x5cb72d = _0x30b907['renderX'] + 22.5 - _0xf88981;
            const _0x10406f = _0x30b907['renderY'] + 22.5 - _0x3abc96;
            const _0x530827 = Math['sqrt'](_0x5cb72d * _0x5cb72d + _0x10406f * _0x10406f);
            if (_0x530827 < _0x36198f)
                _0x36198f = _0x530827;
        }
        _0x331103 = _0x36198f;
        if (_0x36198f > _0xc346e0)
            return;
        const _0x32a391 = 0x1 - _0x5a2c2e((_0x36198f - _0x118e65) / (_0xc346e0 - _0x118e65), 0x0, 0x1);
        const _0x253f6e = _0x22e1f2(_0x2205e7, _0x1873f0, _0x32a391);
        const _0x1c23e5 = _0x22e1f2(_0x2014c3, _0x4a5669, _0x32a391);
        if (_0x1c80d4 >= _0x2c371e) {
            _0x529956['currentTime'] = 0x0;
            _0x529956['volume'] = _0x249980['isMuted']() ? 0x0 : _0x5a2c2e(_0x1c23e5 * _0x249980['getVolume']() / 0.7, 0x0, 0x1);
            _0x529956['play']()['catch'](() => {
            });
            _0x2c371e = _0x1c80d4 + _0x253f6e;
        }
    }
    return { 'tick': _0x222c5d };
})());
function _0xfc8915() {
    const _0xce42ab = document['getElementById']('mob-ability-btn');
    if (!_0xce42ab)
        return;
    const _0x14f9e3 = _0x4d0158['GAME_STATE'] === 'NIGHT' && !_0x1b8ecb['isDead'];
    const _0x744ed4 = _0x3eaf94 === 'Mayor' && !_0x3a4dd1['has'](_0x56e65e) && !_0x1b8ecb['isDead'];
    if (_0x14f9e3 || _0x744ed4) {
        _0xce42ab['style']['display'] = 'flex';
    } else {
        _0xce42ab['style']['display'] = 'none';
    }
}
function _0x561f39() {
    const _0xb5a296 = document['getElementById']('mobile-joystick-zone');
    const _0x13a9f5 = document['getElementById']('mobile-top-bar');
    const _0x51ab70 = document['getElementById']('mobile-action-bar');
    if (!_0xb5a296 || !_0x13a9f5 || !_0x51ab70)
        return;
    if (!_0x5b2b13 && _0x2d111) {
        _0xb5a296['style']['display'] = 'flex';
        _0x13a9f5['style']['display'] = 'flex';
        _0x51ab70['style']['display'] = 'flex';
        _0xfc8915();
    } else {
        _0xb5a296['style']['display'] = 'none';
        _0x13a9f5['style']['display'] = 'none';
        _0x51ab70['style']['display'] = 'none';
    }
}
const _0x25e480 = document['getElementById']('gameCanvas');
const _0x35f9d8 = _0x25e480['getContext']('2d', { 'alpha': ![] });
const _0x419ddd = 0x500;
const _0x1492c7 = 0x2d0;
const _0x4d0158 = {
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
        'width': _0x419ddd,
        'height': _0x1492c7
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
const _0x1b8ecb = {
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
const _0x1b7376 = new Image();
const _0x4c9f97 = new Image();
const _0xbcb888 = new Image();
const _0x2df74b = new Image();
_0x2df74b['src'] = 'assets/mayor\x20cosmetic.png';
const _0x28e02f = [
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
const _0x3ce055 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x5c60bb = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x5c60bb === 'body1.png' || _0x5c60bb === 'body1')
    _0x5c60bb = 'body01.png';
if (!_0x5c60bb['endsWith']('.png'))
    _0x5c60bb += '.png';
let _0x271236 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x271236['endsWith']('.png'))
    _0x271236 += '.png';
let _0x5b2b13 = !![];
let _0x15a1ca = null;
let _0x127009 = null;
let _0x1a8c74 = 0x3c;
let _0xdbd039 = 0x2d;
const _0x36da67 = {};
const _0xaae853 = new Image();
_0xaae853['src'] = 'assets/yanito932.png';
_0x36da67['assets/yanito932.png'] = _0xaae853;
function _0x534bd2(_0x3f9557) {
    if (!_0x36da67[_0x3f9557] || !_0x36da67[_0x3f9557]['complete'] && _0x36da67[_0x3f9557]['naturalWidth'] === 0x0 && _0x36da67[_0x3f9557]['naturalHeight'] === 0x0) {
        const _0x3f7abe = new Image();
        _0x3f7abe['src'] = _0x3f9557;
        _0x36da67[_0x3f9557] = _0x3f7abe;
    }
    return _0x36da67[_0x3f9557];
}
function _0x4f2f81(_0x163329, _0x310780, _0x19d5bc, _0x1ae3f3, _0x105c7b) {
    try {
        const _0x419d69 = 'assets/' + (_0x310780 || 'body01.png');
        const _0xf7802f = _0x534bd2(_0x419d69);
        if (_0xf7802f['complete'] && _0xf7802f['naturalWidth'] > 0x0) {
            _0x163329['drawImage'](_0xf7802f, -_0x1ae3f3 / 0x2, -_0x105c7b / 0x2, _0x1ae3f3, _0x105c7b);
        }
        if (_0x19d5bc === null || _0x19d5bc === undefined)
            return;
        const _0x30b243 = 'assets/' + _0x19d5bc;
        const _0x1e9468 = _0x534bd2(_0x30b243);
        if (_0x1e9468['complete'] && _0x1e9468['naturalWidth'] > 0x0) {
            _0x163329['drawImage'](_0x1e9468, -_0x1ae3f3 / 0x2, -_0x105c7b / 0x2, _0x1ae3f3, _0x105c7b);
        }
    } catch (_0x3b305c) {
    }
}
function _0x50f6f8() {
    const _0x2c49d1 = document['getElementById']('body-skin-grid');
    const _0x2846e3 = document['getElementById']('eyes-skin-grid');
    if (!_0x2c49d1 || !_0x2846e3)
        return;
    _0x2c49d1['innerHTML'] = '';
    _0x28e02f['forEach'](_0x44dbcd => {
        const _0xcf5a2c = document['createElement']('button');
        _0xcf5a2c['className'] = 'skin-btn' + (_0x44dbcd === _0x5c60bb ? '\x20selected' : '');
        const _0x3ac292 = document['createElement']('img');
        _0x3ac292['src'] = 'assets/' + _0x44dbcd;
        _0xcf5a2c['appendChild'](_0x3ac292);
        _0xcf5a2c['onclick'] = () => {
            _0x5c60bb = _0x44dbcd;
            localStorage['setItem']('selectedBody', _0x44dbcd);
            _0x2c49d1['querySelectorAll']('.skin-btn')['forEach'](_0x549c7d => _0x549c7d['classList']['remove']('selected'));
            _0xcf5a2c['classList']['add']('selected');
        };
        _0x2c49d1['appendChild'](_0xcf5a2c);
    });
    _0x2846e3['innerHTML'] = '';
    _0x3ce055['forEach'](_0x1a8731 => {
        const _0x2ceeb6 = document['createElement']('button');
        _0x2ceeb6['className'] = 'skin-btn' + (_0x1a8731 === _0x271236 ? '\x20selected' : '');
        const _0x11cf33 = document['createElement']('img');
        _0x11cf33['src'] = 'assets/' + _0x1a8731;
        _0x2ceeb6['appendChild'](_0x11cf33);
        _0x2ceeb6['onclick'] = () => {
            _0x271236 = _0x1a8731;
            localStorage['setItem']('selectedEyes', _0x1a8731);
            _0x2846e3['querySelectorAll']('.skin-btn')['forEach'](_0x4bf3b7 => _0x4bf3b7['classList']['remove']('selected'));
            _0x2ceeb6['classList']['add']('selected');
        };
        _0x2846e3['appendChild'](_0x2ceeb6);
    });
}
function _0x2358d2(_0x1d2115) {
    if (!_0x4d0158['MAP']['columns'] || !_0x4d0158['CAMERA']['width'])
        return;
    const _0x192c41 = Math['max'](0x0, _0x4d0158['MAP']['columns'] * _0x4d0158['MAP']['tileSize'] - _0x4d0158['CAMERA']['width']);
    const _0x5d5a2c = Math['max'](0x0, _0x4d0158['MAP']['rows'] * _0x4d0158['MAP']['tileSize'] - _0x4d0158['CAMERA']['height']);
    if (_0x15a1ca === null) {
        _0x15a1ca = _0x192c41 / 0x2;
        _0x127009 = _0x5d5a2c / 0x2;
    }
    _0x15a1ca += _0x1a8c74 * _0x1d2115;
    _0x127009 += _0xdbd039 * _0x1d2115;
    if (_0x15a1ca <= 0x0) {
        _0x15a1ca = 0x0;
        _0x1a8c74 = Math['abs'](_0x1a8c74);
    } else if (_0x15a1ca >= _0x192c41) {
        _0x15a1ca = _0x192c41;
        _0x1a8c74 = -Math['abs'](_0x1a8c74);
    }
    if (_0x127009 <= 0x0) {
        _0x127009 = 0x0;
        _0xdbd039 = Math['abs'](_0xdbd039);
    } else if (_0x127009 >= _0x5d5a2c) {
        _0x127009 = _0x5d5a2c;
        _0xdbd039 = -Math['abs'](_0xdbd039);
    }
    _0x4d0158['CAMERA']['x'] = _0x15a1ca;
    _0x4d0158['CAMERA']['y'] = _0x127009;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x186cda = document['getElementById']('play-btn');
    const _0x533a95 = document['getElementById']('username-input');
    const _0xd9ff40 = localStorage['getItem']('playerName');
    if (_0xd9ff40 && _0x533a95) {
        _0x533a95['value'] = _0xd9ff40;
    }
    const _0x32799f = () => {
        _0x249980['play']('wait');
        document['removeEventListener']('click', _0x32799f);
        document['removeEventListener']('keydown', _0x32799f);
        document['removeEventListener']('touchstart', _0x32799f);
    };
    document['addEventListener']('click', _0x32799f, { 'once': !![] });
    document['addEventListener']('keydown', _0x32799f, { 'once': !![] });
    document['addEventListener']('touchstart', _0x32799f, { 'once': !![] });
    if (_0x186cda) {
        _0x186cda['addEventListener']('click', () => {
            const _0xe0895f = window['_FB'] && window['_FB']['_currentUser'];
            const _0x5190fd = window['_FB'] && window['_FB']['_userData'];
            let _0x1666df = !![];
            if (_0xe0895f && _0x5190fd && _0x5190fd['username']) {
                _0x3abcfd = _0x5190fd['username'];
                _0x1666df = ![];
            } else {
                const _0x388db1 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x3abcfd = 'user' + _0x388db1;
                _0x1666df = !![];
            }
            const _0x3a2d2b = _0x1666df ? 'body01.png' : _0x5c60bb;
            const _0x4281ff = _0x1666df ? 'eyes4.png' : _0x271236;
            const _0x223a6b = !_0x1666df && _0x5190fd && _0x5190fd['photoURL'] ? _0x5190fd['photoURL'] : '';
            const _0x55b5b5 = !_0x1666df && _0xe0895f ? _0xe0895f['uid'] : '';
            localStorage['setItem']('playerName', _0x3abcfd);
            _0x5b2b13 = ![];
            _0x4d0158['CAMERA']['x'] = null;
            _0x4d0158['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x10f31a = document['getElementById']('chat-log-wrap');
            if (_0x10f31a)
                _0x10f31a['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x3fe5d3 = document['getElementById']('controls-hint');
            if (_0x3fe5d3 && !_0x2d111)
                _0x3fe5d3['style']['display'] = 'block';
            _0x561f39();
            if (_0x2d111) {
                const _0x3a6208 = document['getElementById']('leaderboard-list');
                const _0x231639 = document['getElementById']('leaderboard-toggle');
                if (_0x3a6208) {
                    _0x3a6208['style']['display'] = 'none';
                    if (_0x231639)
                        _0x231639['style']['transform'] = 'rotate(180deg)';
                }
                const _0x3e7c8d = document['getElementById']('role-list-items');
                const _0x3216e7 = document['getElementById']('role-list-toggle');
                if (_0x3e7c8d) {
                    _0x3e7c8d['style']['display'] = 'none';
                    if (_0x3216e7)
                        _0x3216e7['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x2f3b42 = !_0x1666df && _0x5190fd ? {
                'townWins': _0x5190fd['townWins'] || 0x0,
                'mafiaWins': _0x5190fd['mafiaWins'] || 0x0,
                'deaths': _0x5190fd['deaths'] || 0x0,
                'townLosses': _0x5190fd['townLosses'] || 0x0,
                'mafiaLosses': _0x5190fd['mafiaLosses'] || 0x0
            } : null;
            const _0x24707f = JSON['stringify']({
                'type': 'join',
                'name': _0x3abcfd,
                'token': _0x43b548,
                'body': _0x3a2d2b,
                'eyes': _0x4281ff,
                'isGuest': _0x1666df,
                'uid': _0x55b5b5,
                'photoURL': _0x223a6b,
                'accountStats': _0x2f3b42
            });
            if (_0x43694b && _0x43694b['readyState'] === WebSocket['OPEN']) {
                _0x43694b['send'](_0x24707f);
            } else if (!_0x43694b || _0x43694b['readyState'] === WebSocket['CLOSED'] || _0x43694b['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x24707f;
                _0x2b7e77();
            }
        });
    }
    _0x50f6f8();
    _0x2b7e77();
    _0x4b3ba9();
    _0x380f24();
    _0x657689();
    _0x3a4cd8();
});
const _0x16cf65 = [
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
let _0x21359e = 'Town';
let _0x520d77 = 0x0;
function _0x4dca26() {
    const _0x12a70c = document['getElementById']('role-index-main-tabs');
    const _0x291b1a = document['getElementById']('role-index-tabs');
    const _0x484aa6 = document['getElementById']('role-index-body');
    if (!_0x291b1a || !_0x484aa6)
        return;
    if (_0x12a70c) {
        _0x12a70c['innerHTML'] = '';
        const _0x31cb68 = document['createElement']('button');
        _0x31cb68['className'] = 'role-index-main-tab-btn\x20main-town' + (_0x21359e === 'Town' ? '\x20active' : '');
        _0x31cb68['textContent'] = 'TOWN';
        _0x31cb68['addEventListener']('click', () => {
            _0x21359e = 'Town';
            _0x520d77 = 0x0;
            _0x4dca26();
        });
        _0x12a70c['appendChild'](_0x31cb68);
        const _0x1c4861 = document['createElement']('button');
        _0x1c4861['className'] = 'role-index-main-tab-btn\x20main-mafia' + (_0x21359e === 'Mafia' ? '\x20active' : '');
        _0x1c4861['textContent'] = 'MAFIA';
        _0x1c4861['addEventListener']('click', () => {
            _0x21359e = 'Mafia';
            _0x520d77 = 0x0;
            _0x4dca26();
        });
        _0x12a70c['appendChild'](_0x1c4861);
    }
    const _0xfd3c99 = _0x16cf65['filter'](_0x14ddd9 => _0x14ddd9['faction'] === _0x21359e);
    _0x291b1a['innerHTML'] = '';
    _0xfd3c99['forEach']((_0x4780a6, _0x379aac) => {
        const _0x5a31c1 = document['createElement']('button');
        _0x5a31c1['className'] = 'role-index-tab-btn' + (_0x4780a6['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x379aac === _0x520d77 ? '\x20active' : '');
        _0x5a31c1['textContent'] = _0x4780a6['name'];
        _0x5a31c1['addEventListener']('click', () => {
            _0x520d77 = _0x379aac;
            _0x4dca26();
        });
        _0x291b1a['appendChild'](_0x5a31c1);
    });
    const _0x3849ce = _0xfd3c99[_0x520d77] || _0xfd3c99[0x0];
    _0x484aa6['innerHTML'] = '';
    if (!_0x3849ce)
        return;
    const _0x541275 = document['createElement']('div');
    _0x541275['className'] = 'role-index-title-row';
    const _0x1c12b9 = document['createElement']('span');
    _0x1c12b9['className'] = 'role-index-name\x20' + (_0x3849ce['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0x1c12b9['textContent'] = _0x3849ce['name'];
    _0x541275['appendChild'](_0x1c12b9);
    const _0x20be73 = document['createElement']('span');
    _0x20be73['className'] = 'role-index-faction-badge\x20' + (_0x3849ce['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x20be73['textContent'] = _0x3849ce['faction'];
    _0x541275['appendChild'](_0x20be73);
    _0x484aa6['appendChild'](_0x541275);
    _0x3849ce['paragraphs']['forEach'](_0x584408 => {
        const _0x215c4a = document['createElement']('p');
        _0x215c4a['className'] = 'role-index-desc-paragraph';
        _0x215c4a['innerHTML'] = _0x584408;
        _0x484aa6['appendChild'](_0x215c4a);
    });
}
function _0x3a4cd8() {
    const _0x4a0e99 = document['getElementById']('role-index-btn');
    const _0x591c76 = document['getElementById']('role-index-modal');
    const _0xfa563c = document['getElementById']('close-role-index-btn');
    const _0x1ad819 = document['getElementById']('mob-top-index');
    if (_0x4a0e99 && _0x591c76) {
        _0x4a0e99['addEventListener']('click', _0x4bf806 => {
            _0x4bf806['stopPropagation']();
            if (_0x591c76['style']['display'] === 'none' || !_0x591c76['style']['display']) {
                _0x4dca26();
                _0x591c76['style']['display'] = 'flex';
            } else {
                _0x591c76['style']['display'] = 'none';
            }
        });
    }
    if (_0xfa563c && _0x591c76) {
        _0xfa563c['addEventListener']('click', _0x5b325f => {
            _0x5b325f['stopPropagation']();
            _0x591c76['style']['display'] = 'none';
        });
    }
    if (_0x1ad819 && _0x591c76) {
        _0x1ad819['addEventListener']('click', _0x94c237 => {
            _0x94c237['stopPropagation']();
            if (_0x591c76['style']['display'] === 'none' || !_0x591c76['style']['display']) {
                _0x4dca26();
                _0x591c76['style']['display'] = 'flex';
            } else {
                _0x591c76['style']['display'] = 'none';
            }
        });
    }
}
function _0x380f24() {
    const _0x143e78 = document['getElementById']('settings-btn');
    const _0x50ae6c = document['getElementById']('settings-panel');
    const _0x46dbbc = document['getElementById']('close-settings-btn');
    const _0xa9f234 = document['getElementById']('setting-mouse-relative');
    if (_0xa9f234) {
        _0xa9f234['checked'] = _0x5aee9c;
        _0xa9f234['addEventListener']('change', () => {
            _0x5aee9c = _0xa9f234['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x5aee9c ? 'true' : 'false');
        });
    }
    const _0x1a6d49 = document['getElementById']('setting-music-volume');
    const _0x1109d2 = document['getElementById']('setting-music-volume-display');
    function _0x39e878(_0x159914) {
        const _0x51b80f = (_0x159914['value'] - _0x159914['min']) / (_0x159914['max'] - _0x159914['min']) * 0x64;
        _0x159914['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x51b80f + '%,\x20#444\x20' + _0x51b80f + '%)';
    }
    if (_0x1a6d49) {
        const _0x3421f1 = _0x249980['getVolume']();
        const _0xddabf2 = Math['round'](_0x3421f1 * 0x64);
        _0x1a6d49['value'] = _0xddabf2;
        if (_0x1109d2)
            _0x1109d2['textContent'] = _0xddabf2 + '%';
        _0x39e878(_0x1a6d49);
        _0x1a6d49['addEventListener']('input', () => {
            const _0x49b9ed = parseInt(_0x1a6d49['value'], 0xa);
            if (_0x1109d2)
                _0x1109d2['textContent'] = _0x49b9ed + '%';
            _0x39e878(_0x1a6d49);
            _0x249980['setVolume'](_0x49b9ed / 0x64);
            _0x249980['setMuted'](_0x49b9ed === 0x0);
        });
    }
    if (_0x143e78 && _0x50ae6c) {
        _0x143e78['addEventListener']('click', _0x5ed347 => {
            _0x5ed347['stopPropagation']();
            _0x50ae6c['style']['display'] = _0x50ae6c['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x46dbbc && _0x50ae6c) {
        _0x46dbbc['addEventListener']('click', () => {
            _0x50ae6c['style']['display'] = 'none';
        });
    }
    const _0x3f3d5c = document['getElementById']('mayor-confirm-yes');
    const _0x29fbbb = document['getElementById']('mayor-confirm-no');
    const _0x183d65 = document['getElementById']('mayor-confirm-dialog');
    if (_0x3f3d5c && _0x183d65) {
        _0x3f3d5c['addEventListener']('click', () => {
            if (_0x43694b && _0x43694b['readyState'] === WebSocket['OPEN']) {
                _0x43694b['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x183d65['style']['display'] = 'none';
        });
    }
    if (_0x29fbbb && _0x183d65) {
        _0x29fbbb['addEventListener']('click', () => {
            _0x183d65['style']['display'] = 'none';
        });
    }
    const _0x978eb5 = document['getElementById']('close-ability-btn');
    if (_0x978eb5) {
        _0x978eb5['addEventListener']('click', () => {
            const _0x58e910 = document['getElementById']('ability-ui');
            if (_0x58e910)
                _0x58e910['style']['display'] = 'none';
        });
    }
}
let _0x3fbe61 = '';
function _0x112896(_0x37cd7c) {
    const _0x3e0328 = document['getElementById']('vote-tally-panel');
    const _0x311d4e = document['getElementById']('vote-tally-list');
    if (!_0x3e0328 || !_0x311d4e)
        return;
    if (_0x37cd7c['state'] !== 'DAY_VOTE') {
        _0x3e0328['style']['display'] = 'none';
        _0x3fbe61 = '';
        return;
    }
    _0x3e0328['style']['display'] = 'block';
    const _0x44d4e8 = {};
    for (const _0x2232f3 in _0xc68604) {
        if (!_0xc68604[_0x2232f3]['isDead'])
            _0x44d4e8[_0x2232f3] = 0x0;
    }
    if (_0x56e65e && !_0x1b8ecb['isDead'])
        _0x44d4e8[_0x56e65e] = 0x0;
    const _0x38341a = _0x37cd7c['votes'] || {};
    for (const _0x3e02d0 in _0x38341a) {
        const _0x479421 = _0x38341a[_0x3e02d0];
        const _0x5f066e = _0x37cd7c['mayorRevealed'] && _0x37cd7c['mayorRevealed'][_0x3e02d0] ? 0x2 : 0x1;
        _0x44d4e8[_0x479421] = (_0x44d4e8[_0x479421] || 0x0) + _0x5f066e;
    }
    let _0x4f979b = 0x0;
    const _0xc033bd = _0x37cd7c['skips'] || {};
    for (const _0x571789 in _0xc033bd) {
        _0x4f979b += Number(_0xc033bd[_0x571789]) || 0x1;
    }
    const _0x20132c = JSON['stringify'](_0x44d4e8) + '_' + _0x4f979b + '_' + _0x1b8ecb['isDead'];
    if (_0x20132c === _0x3fbe61)
        return;
    _0x3fbe61 = _0x20132c;
    _0x311d4e['innerHTML'] = '';
    for (const _0x3fb829 in _0x44d4e8) {
        const _0x488492 = parseInt(_0x3fb829);
        const _0x5718fa = _0x488492 === _0x56e65e ? _0x3abcfd : _0xc68604[_0x3fb829] ? _0xc68604[_0x3fb829]['name'] : 'Player\x20' + _0x3fb829;
        const _0x1acd1d = document['createElement']('div');
        _0x1acd1d['className'] = 'vote-tally-entry';
        const _0x1cd831 = document['createElement']('span');
        _0x1cd831['textContent'] = _0x5718fa;
        const _0xbe9be = document['createElement']('span');
        _0xbe9be['className'] = 'vote-count';
        _0xbe9be['textContent'] = _0x44d4e8[_0x3fb829] + '\x20vote' + (_0x44d4e8[_0x3fb829] === 0x1 ? '' : 's');
        _0x1acd1d['appendChild'](_0x1cd831);
        _0x1acd1d['appendChild'](_0xbe9be);
        if (_0x488492 !== _0x56e65e && !_0x1b8ecb['isDead']) {
            _0x1acd1d['style']['cursor'] = 'pointer';
            _0x1acd1d['title'] = 'Vote\x20for\x20' + _0x5718fa;
            _0x1acd1d['addEventListener']('click', _0xf9ba98 => {
                _0xf9ba98['stopPropagation']();
                if (_0x43694b && _0x43694b['readyState'] === WebSocket['OPEN']) {
                    _0x43694b['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x5718fa
                    }));
                }
            });
        }
        _0x311d4e['appendChild'](_0x1acd1d);
    }
    const _0x473511 = document['createElement']('div');
    _0x473511['className'] = 'vote-tally-skip';
    _0x473511['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x4f979b + '</span>';
    if (!_0x1b8ecb['isDead']) {
        _0x473511['style']['cursor'] = 'pointer';
        _0x473511['title'] = 'Click\x20to\x20skip\x20vote';
        _0x473511['addEventListener']('click', _0x16d86d => {
            _0x16d86d['stopPropagation']();
            if (_0x43694b && _0x43694b['readyState'] === WebSocket['OPEN']) {
                _0x43694b['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x311d4e['appendChild'](_0x473511);
}
let _0x53b1e9 = null;
let _0x539dc7 = null;
let _0x31d404 = null;
let _0x327319 = null;
let _0x35b550 = null;
function _0x3912a8() {
    if (_0x43694b && _0x43694b['readyState'] === WebSocket['OPEN']) {
        _0x43694b['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x53b1e9,
            'abilityTarget': _0x539dc7,
            'killTarget': _0x31d404
        }));
    }
}
function _0xf82078() {
    if (_0x43694b && _0x43694b['readyState'] === WebSocket['OPEN']) {
        _0x43694b['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'blackmailTarget': _0x327319,
            'killTarget': _0x35b550
        }));
    }
}
function _0x1f36b1() {
    const _0x32bc52 = document['getElementById']('ability-ui-body');
    if (!_0x32bc52)
        return;
    _0x32bc52['innerHTML'] = '';
    if (_0x3eaf94 === 'Celebrity' || _0x3eaf94 === 'Mayor') {
        const _0x3c0df1 = document['createElement']('div');
        _0x3c0df1['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x3c0df1['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x32bc52['appendChild'](_0x3c0df1);
        return;
    }
    if (_0x3eaf94 === 'Blackmailer') {
        const _0x38011b = document['createElement']('div');
        _0x38011b['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x38011b['innerText'] = 'Blackmail\x20Target\x20(Silences\x20for\x20full\x20day):';
        _0x32bc52['appendChild'](_0x38011b);
        const _0x12e45f = document['createElement']('div');
        _0x12e45f['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x430717 = document['createElement']('button');
        _0x430717['className'] = 'layer-btn';
        _0x430717['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x430717['innerText'] = 'No\x20one';
        if (_0x327319 === null)
            _0x430717['classList']['add']('active');
        _0x430717['onclick'] = () => {
            _0x327319 = null;
            _0xf82078();
            _0x1f36b1();
        };
        _0x12e45f['appendChild'](_0x430717);
        for (const _0x298780 in _0xc68604) {
            const _0x2eacc7 = _0xc68604[_0x298780];
            if (_0x2eacc7['isDead'])
                continue;
            const _0x514261 = document['createElement']('button');
            _0x514261['className'] = 'layer-btn';
            _0x514261['innerText'] = _0x2eacc7['name'];
            if (_0x327319 === parseInt(_0x298780))
                _0x514261['classList']['add']('active');
            _0x514261['onclick'] = () => {
                _0x327319 = parseInt(_0x298780);
                _0xf82078();
                _0x1f36b1();
            };
            _0x12e45f['appendChild'](_0x514261);
        }
        if (!_0x1b8ecb['isDead']) {
            const _0x1cc3d1 = document['createElement']('button');
            _0x1cc3d1['className'] = 'layer-btn';
            _0x1cc3d1['style']['cssText'] = 'grid-column:\x20span\x202;';
            _0x1cc3d1['innerText'] = _0x3abcfd + '\x20(Self\x20-\x20Decoy)';
            if (_0x327319 === _0x56e65e)
                _0x1cc3d1['classList']['add']('active');
            _0x1cc3d1['onclick'] = () => {
                _0x327319 = _0x56e65e;
                _0xf82078();
                _0x1f36b1();
            };
            _0x12e45f['appendChild'](_0x1cc3d1);
        }
        _0x32bc52['appendChild'](_0x12e45f);
        const _0x39dac0 = document['createElement']('div');
        _0x39dac0['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x39dac0['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x32bc52['appendChild'](_0x39dac0);
        const _0x9e21ea = document['createElement']('div');
        _0x9e21ea['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x56b763 = document['createElement']('button');
        _0x56b763['className'] = 'layer-btn';
        _0x56b763['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x56b763['innerText'] = 'No\x20one';
        if (!_0x35b550 && !_0x4d0158['CURRENT_TARGET'])
            _0x56b763['classList']['add']('active');
        _0x56b763['onclick'] = () => {
            _0x35b550 = null;
            _0x4d0158['CURRENT_TARGET'] = null;
            _0xf82078();
            _0x1f36b1();
        };
        _0x9e21ea['appendChild'](_0x56b763);
        for (const _0x1ff54d in _0xc68604) {
            const _0x2af9ac = _0xc68604[_0x1ff54d];
            if (_0x2af9ac['isDead'])
                continue;
            const _0x1c9968 = document['createElement']('button');
            _0x1c9968['className'] = 'layer-btn';
            _0x1c9968['innerText'] = _0x2af9ac['name'];
            if (_0x35b550 === parseInt(_0x1ff54d) || _0x4d0158['CURRENT_TARGET'] === parseInt(_0x1ff54d))
                _0x1c9968['classList']['add']('active');
            _0x1c9968['onclick'] = () => {
                _0x35b550 = parseInt(_0x1ff54d);
                _0x4d0158['CURRENT_TARGET'] = parseInt(_0x1ff54d);
                _0xf82078();
                _0x1f36b1();
            };
            _0x9e21ea['appendChild'](_0x1c9968);
        }
        _0x32bc52['appendChild'](_0x9e21ea);
        return;
    }
    if (_0x3eaf94 === 'Skinwalker') {
        const _0x1f973b = document['createElement']('div');
        _0x1f973b['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x1f973b['innerText'] = 'Transform\x20into:';
        _0x32bc52['appendChild'](_0x1f973b);
        const _0x76bc14 = document['createElement']('div');
        _0x76bc14['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x3afb9d = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x515946 = _0x44ef26 => {
            if (_0x4d0158['ROLES_IN_GAME'] && Array['isArray'](_0x4d0158['ROLES_IN_GAME'])) {
                return _0x4d0158['ROLES_IN_GAME']['includes'](_0x44ef26);
            }
            if (_0x4d0158['ROLE_LIST_RAW'] && _0x4d0158['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x4d0158['ROLE_LIST_RAW']['some'](_0x569cf7 => _0x569cf7['name'] === _0x44ef26 && !_0x569cf7['isDead']);
            }
            return ![];
        };
        const _0x1ceefb = [
            'None',
            ..._0x3afb9d['filter'](_0x515946)
        ];
        _0x1ceefb['forEach'](_0x1d653e => {
            const _0x286eb7 = document['createElement']('button');
            _0x286eb7['className'] = 'layer-btn';
            _0x286eb7['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x286eb7['innerText'] = _0x1d653e;
            const _0x3f00eb = _0x1d653e === 'None' && !_0x53b1e9 || _0x53b1e9 === _0x1d653e;
            if (_0x3f00eb)
                _0x286eb7['classList']['add']('active');
            const _0x595d46 = _0x1d653e !== 'None' && _0x4d0158['SKINWALKER_LAST_ROLE'] && _0x4d0158['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x1d653e['toLowerCase']();
            if (_0x595d46) {
                _0x286eb7['style']['opacity'] = '0.45';
                _0x286eb7['style']['cursor'] = 'not-allowed';
                _0x286eb7['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x286eb7['onclick'] = () => {
                    _0x49b05a('You\x20cannot\x20transform\x20into\x20' + _0x1d653e + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x286eb7['onclick'] = () => {
                    _0x53b1e9 = _0x1d653e === 'None' ? null : _0x1d653e;
                    _0x3912a8();
                    _0x1f36b1();
                };
            }
            _0x76bc14['appendChild'](_0x286eb7);
        });
        _0x32bc52['appendChild'](_0x76bc14);
        if (_0x515946('Vigilante')) {
            const _0x4537bd = document['createElement']('div');
            _0x4537bd['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x4537bd['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x32bc52['appendChild'](_0x4537bd);
        }
        if (_0x53b1e9 === 'Vigilante') {
            const _0x12377e = document['createElement']('div');
            _0x12377e['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x12377e['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x32bc52['appendChild'](_0x12377e);
        } else if (_0x53b1e9 && _0x53b1e9 !== 'Celebrity') {
            const _0x35f544 = document['createElement']('div');
            _0x35f544['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x35f544['innerText'] = 'Use\x20' + _0x53b1e9 + '\x20ability\x20on:';
            _0x32bc52['appendChild'](_0x35f544);
            const _0x3f223a = document['createElement']('div');
            _0x3f223a['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x2c763d = document['createElement']('button');
            _0x2c763d['className'] = 'layer-btn';
            _0x2c763d['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x2c763d['innerText'] = 'No\x20one';
            if (!_0x539dc7)
                _0x2c763d['classList']['add']('active');
            _0x2c763d['onclick'] = () => {
                _0x539dc7 = null;
                _0x3912a8();
                _0x1f36b1();
            };
            _0x3f223a['appendChild'](_0x2c763d);
            for (const _0x154a44 in _0xc68604) {
                const _0x482cd1 = _0xc68604[_0x154a44];
                if (_0x482cd1['isDead'])
                    continue;
                const _0x56772a = document['createElement']('button');
                _0x56772a['className'] = 'layer-btn';
                _0x56772a['innerText'] = _0x482cd1['name'];
                if (_0x539dc7 === parseInt(_0x154a44))
                    _0x56772a['classList']['add']('active');
                _0x56772a['onclick'] = () => {
                    _0x539dc7 = parseInt(_0x154a44);
                    _0x3912a8();
                    _0x1f36b1();
                };
                _0x3f223a['appendChild'](_0x56772a);
            }
            _0x32bc52['appendChild'](_0x3f223a);
        }
        const _0x42bcd9 = document['createElement']('div');
        _0x42bcd9['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x42bcd9['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x32bc52['appendChild'](_0x42bcd9);
        const _0x5e9f80 = document['createElement']('div');
        _0x5e9f80['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x3b5020 = document['createElement']('button');
        _0x3b5020['className'] = 'layer-btn';
        _0x3b5020['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x3b5020['innerText'] = 'No\x20one';
        if (!_0x31d404 && !_0x4d0158['CURRENT_TARGET'])
            _0x3b5020['classList']['add']('active');
        _0x3b5020['onclick'] = () => {
            _0x31d404 = null;
            _0x4d0158['CURRENT_TARGET'] = null;
            _0x3912a8();
            _0x1f36b1();
        };
        _0x5e9f80['appendChild'](_0x3b5020);
        for (const _0xbc7cbd in _0xc68604) {
            const _0x2b6dda = _0xc68604[_0xbc7cbd];
            if (_0x2b6dda['isDead'])
                continue;
            const _0x8147b0 = document['createElement']('button');
            _0x8147b0['className'] = 'layer-btn';
            _0x8147b0['innerText'] = _0x2b6dda['name'];
            if (_0x31d404 === parseInt(_0xbc7cbd) || _0x4d0158['CURRENT_TARGET'] === parseInt(_0xbc7cbd))
                _0x8147b0['classList']['add']('active');
            _0x8147b0['onclick'] = () => {
                _0x31d404 = parseInt(_0xbc7cbd);
                _0x4d0158['CURRENT_TARGET'] = parseInt(_0xbc7cbd);
                _0x3912a8();
                _0x1f36b1();
            };
            _0x5e9f80['appendChild'](_0x8147b0);
        }
        _0x32bc52['appendChild'](_0x5e9f80);
        return;
    }
    let _0x89d0d2 = '';
    let _0x4bc4c6 = ![];
    if (_0x3eaf94 === 'Doctor') {
        _0x89d0d2 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x4bc4c6 = !![];
    } else if (_0x3eaf94 === 'Investigator') {
        _0x89d0d2 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x3eaf94 === 'Tracker') {
        _0x89d0d2 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x3eaf94 === 'Archer') {
        _0x89d0d2 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x3eaf94 === 'Escort') {
        _0x89d0d2 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x3eaf94 === 'Vigilante') {
        _0x89d0d2 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x1905b2 = document['createElement']('div');
    _0x1905b2['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x1905b2['innerText'] = _0x89d0d2;
    _0x32bc52['appendChild'](_0x1905b2);
    const _0x364a7f = document['createElement']('div');
    _0x364a7f['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x281ad6 = document['createElement']('button');
    _0x281ad6['className'] = 'layer-btn';
    _0x281ad6['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x281ad6['innerText'] = 'No\x20one';
    if (_0x4d0158['CURRENT_TARGET'] === null)
        _0x281ad6['classList']['add']('active');
    _0x281ad6['onclick'] = () => {
        _0x4d0158['CURRENT_TARGET'] = null;
        if (_0x43694b && _0x43694b['readyState'] === WebSocket['OPEN']) {
            _0x43694b['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x1f36b1();
    };
    _0x364a7f['appendChild'](_0x281ad6);
    for (const _0x5df2e8 in _0xc68604) {
        const _0x44927d = _0xc68604[_0x5df2e8];
        if (_0x44927d['isDead'])
            continue;
        const _0x218cc1 = document['createElement']('button');
        _0x218cc1['className'] = 'layer-btn';
        _0x218cc1['innerText'] = _0x44927d['name'];
        if (_0x4d0158['CURRENT_TARGET'] === parseInt(_0x5df2e8))
            _0x218cc1['classList']['add']('active');
        _0x218cc1['onclick'] = () => {
            _0x4d0158['CURRENT_TARGET'] = parseInt(_0x5df2e8);
            if (_0x43694b && _0x43694b['readyState'] === WebSocket['OPEN']) {
                _0x43694b['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x5df2e8)
                }));
            }
            _0x1f36b1();
        };
        _0x364a7f['appendChild'](_0x218cc1);
    }
    if (_0x4bc4c6 && !_0x1b8ecb['isDead']) {
        const _0x1b54e6 = document['createElement']('button');
        _0x1b54e6['className'] = 'layer-btn';
        _0x1b54e6['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x1b54e6['innerText'] = _0x3abcfd + '\x20(Self)';
        if (_0x4d0158['CURRENT_TARGET'] === _0x56e65e)
            _0x1b54e6['classList']['add']('active');
        _0x1b54e6['onclick'] = () => {
            _0x4d0158['CURRENT_TARGET'] = _0x56e65e;
            if (_0x43694b && _0x43694b['readyState'] === WebSocket['OPEN']) {
                _0x43694b['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x56e65e
                }));
            }
            _0x1f36b1();
        };
        _0x364a7f['appendChild'](_0x1b54e6);
    }
    _0x32bc52['appendChild'](_0x364a7f);
}
function _0x2b7e77() {
    if (_0x43694b && (_0x43694b['readyState'] === WebSocket['OPEN'] || _0x43694b['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x3d9435 = new URLSearchParams();
    if (_0x43b548)
        _0x3d9435['set']('token', _0x43b548);
    _0x3d9435['set']('ngrok-skip-browser-warning', 'true');
    const _0x54618c = 'wss://this-studying-motherboard-emissions.trycloudflare.com';
    const _0x50c461 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x54618c;
    const _0x19b373 = _0x50c461 + '/?' + _0x3d9435['toString']();
    _0x43694b = new WebSocket(_0x19b373);
    _0x43694b['onopen'] = function () {
        if (!_0x5b2b13 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x540c0f = window['_FB'] && window['_FB']['_currentUser'];
                const _0x49c94d = window['_FB'] && window['_FB']['_userData'];
                const _0x89b9cc = !(_0x540c0f && _0x49c94d && _0x49c94d['username']);
                const _0x286cf1 = _0x89b9cc ? 'body01.png' : _0x5c60bb;
                const _0x5d3c28 = _0x89b9cc ? 'eyes4.png' : _0x271236;
                const _0x41e5b6 = !_0x89b9cc && _0x49c94d && _0x49c94d['photoURL'] ? _0x49c94d['photoURL'] : '';
                const _0x357249 = !_0x89b9cc && _0x540c0f ? _0x540c0f['uid'] : '';
                const _0x4524c9 = !_0x89b9cc && _0x49c94d ? {
                    'townWins': _0x49c94d['townWins'] || 0x0,
                    'mafiaWins': _0x49c94d['mafiaWins'] || 0x0,
                    'deaths': _0x49c94d['deaths'] || 0x0,
                    'townLosses': _0x49c94d['townLosses'] || 0x0,
                    'mafiaLosses': _0x49c94d['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x3abcfd,
                    'token': _0x43b548,
                    'body': _0x286cf1,
                    'eyes': _0x5d3c28,
                    'isGuest': _0x89b9cc,
                    'uid': _0x357249,
                    'photoURL': _0x41e5b6,
                    'accountStats': _0x4524c9
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x43694b && _0x43694b['readyState'] === WebSocket['OPEN']) {
            _0x43694b['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x43694b['onclose'] = _0x53fb84 => {
        if (_0x53fb84['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x53fb84['code'] === 0xfa2 || _0x53fb84['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x1017f2 = document['getElementById']('disconnect-overlay');
        if (!_0x1017f2) {
            _0x1017f2 = document['createElement']('div');
            _0x1017f2['id'] = 'disconnect-overlay';
            _0x1017f2['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x1017f2['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x1017f2);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x43694b['onmessage'] = _0x46182d => {
        const _0x8d6f33 = JSON['parse'](_0x46182d['data']);
        if (_0x8d6f33['type'] === 'map_data') {
            _0x4d0158['MAP']['tileSize'] = _0x8d6f33['map']['tileSize'];
            _0x4d0158['MAP']['columns'] = _0x8d6f33['map']['columns'];
            _0x4d0158['MAP']['rows'] = _0x8d6f33['map']['rows'];
            _0x4d0158['MAP']['layers'] = _0x8d6f33['map']['layers'];
            if (_0x8d6f33['map']['doors']) {
                _0x4d0158['MAP']['doors'] = _0x8d6f33['map']['doors'];
                const _0x51befe = _0x4d0158['MAP']['layers']['find'](_0x1008cc => _0x1008cc['name'] === 'floor2');
                if (_0x51befe) {
                    for (const _0x713430 in _0x4d0158['MAP']['doors']) {
                        _0x51befe['data'][parseInt(_0x713430)] = 0x2;
                    }
                }
            }
            if (_0x8d6f33['entities'])
                _0x4d0158['ENTITIES'] = _0x8d6f33['entities'];
            _0x27ddc8();
            _0x4d0158['SYSTEM']['isReady'] = !![];
            _0x2001c3();
            if (!_0x4d0158['SYSTEM']['_gameLoopRunning']) {
                _0x4d0158['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x4983ea);
            }
            return;
        }
        if (_0x8d6f33['type'] === 'init') {
            _0x56e65e = _0x8d6f33['id'];
            _0x5b2b13 = ![];
            _0x561f39();
            if (_0x2d111) {
                const _0x387efe = document['getElementById']('leaderboard-list');
                const _0xf3e3b = document['getElementById']('leaderboard-toggle');
                if (_0x387efe) {
                    _0x387efe['style']['display'] = 'none';
                    if (_0xf3e3b)
                        _0xf3e3b['style']['transform'] = 'rotate(180deg)';
                }
                const _0x3803d5 = document['getElementById']('role-list-items');
                const _0x26f742 = document['getElementById']('role-list-toggle');
                if (_0x3803d5) {
                    _0x3803d5['style']['display'] = 'none';
                    if (_0x26f742)
                        _0x26f742['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x5e9321 = _0x8d6f33['isOwner'] || ![];
            _0x3abcfd = _0x8d6f33['name'] || _0x3abcfd;
            _0x4d0158['MAP']['tileSize'] = _0x8d6f33['map']['tileSize'];
            _0x4d0158['MAP']['columns'] = _0x8d6f33['map']['columns'];
            _0x4d0158['MAP']['rows'] = _0x8d6f33['map']['rows'];
            _0x4d0158['MAP']['layers'] = _0x8d6f33['map']['layers'];
            if (_0x8d6f33['map']['doors']) {
                _0x4d0158['MAP']['doors'] = _0x8d6f33['map']['doors'];
                const _0x2490ca = _0x4d0158['MAP']['layers']['find'](_0x581846 => _0x581846['name'] === 'floor2');
                if (_0x2490ca) {
                    for (const _0x48eaba in _0x4d0158['MAP']['doors']) {
                        _0x2490ca['data'][parseInt(_0x48eaba)] = 0x2;
                    }
                }
            }
            if (_0x8d6f33['entities'])
                _0x4d0158['ENTITIES'] = _0x8d6f33['entities'];
            _0x27ddc8();
            _0x1b8ecb['x'] = _0x4d0158['MAP']['columns'] * _0x4d0158['MAP']['tileSize'] / 0x2;
            _0x1b8ecb['y'] = _0x4d0158['MAP']['rows'] * _0x4d0158['MAP']['tileSize'] / 0x2;
            _0x4d0158['CAMERA']['x'] = _0x1b8ecb['x'] + _0x1b8ecb['width'] / 0x2 - _0x4d0158['CAMERA']['width'] / 0x2;
            _0x4d0158['CAMERA']['y'] = _0x1b8ecb['y'] + _0x1b8ecb['height'] / 0x2 - _0x4d0158['CAMERA']['height'] / 0x2;
            if (_0x5e9321) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x1b5f18();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x49f747 = document['getElementById']('role-index-btn-wrap');
            if (_0x49f747)
                _0x49f747['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x4d0158['SYSTEM']['lastTime'] = performance['now']();
            _0x4d0158['SYSTEM']['isReady'] = !![];
            _0x199665();
            if (!_0x4d0158['SYSTEM']['_gameLoopRunning']) {
                _0x4d0158['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x4983ea);
            }
            return;
        } else if (_0x8d6f33['type'] === 'state') {
            const _0x4414c5 = {};
            for (const _0x19cea2 in _0x8d6f33['players']) {
                if (parseInt(_0x19cea2) === _0x56e65e)
                    continue;
                const _0xc00a05 = _0x8d6f33['players'][_0x19cea2];
                const _0x8f98ba = _0xc68604[_0x19cea2];
                if (_0x8f98ba) {
                    const _0x4920e1 = _0xc00a05['x'] - _0x8f98ba['renderX'];
                    const _0x5f48d7 = _0xc00a05['y'] - _0x8f98ba['renderY'];
                    const _0x9e142e = _0x4920e1 * _0x4920e1 + _0x5f48d7 * _0x5f48d7 > 0x78 * 0x78;
                    Object['assign'](_0x8f98ba, _0xc00a05);
                    if (_0x9e142e) {
                        _0x8f98ba['renderX'] = _0xc00a05['x'];
                        _0x8f98ba['renderY'] = _0xc00a05['y'];
                    }
                    _0x4414c5[_0x19cea2] = _0x8f98ba;
                } else {
                    _0x4414c5[_0x19cea2] = {
                        ..._0xc00a05,
                        'renderX': _0xc00a05['x'],
                        'renderY': _0xc00a05['y'],
                        'renderAngle': _0xc00a05['angle'] || 0x0
                    };
                }
            }
            _0xc68604 = _0x4414c5;
            _0x52fa47();
            if (_0x8d6f33['players'][_0x56e65e]) {
                const _0x266b70 = _0x8d6f33['players'][_0x56e65e];
                _0x1b8ecb['chats'] = _0x266b70['chats'] || [];
                _0x1b8ecb['isDead'] = _0x266b70['isDead'];
                _0x1b8ecb['hasArrow'] = _0x266b70['hasArrow'] || ![];
                if (_0x266b70['name'])
                    _0x3abcfd = _0x266b70['name'];
                _0x199665();
                const _0x3db2cf = Math['hypot'](_0x266b70['x'] - _0x1b8ecb['x'], _0x266b70['y'] - _0x1b8ecb['y']);
                if (_0x3db2cf > 0xfa) {
                    _0x1b8ecb['x'] = _0x266b70['x'];
                    _0x1b8ecb['y'] = _0x266b70['y'];
                } else if (_0x3db2cf > 0x50) {
                    _0x1b8ecb['x'] += (_0x266b70['x'] - _0x1b8ecb['x']) * 0.06;
                    _0x1b8ecb['y'] += (_0x266b70['y'] - _0x1b8ecb['y']) * 0.06;
                }
            }
            if (_0x8d6f33['entities'])
                _0x4d0158['ENTITIES'] = _0x8d6f33['entities'];
            if (_0x8d6f33['game']) {
                _0x4d0158['GAME_STATE'] = _0x8d6f33['game']['state'];
                _0x4d0158['NIGHT_ABILITY_OPEN'] = _0x8d6f33['game']['nightAbilityOpen'];
                if (_0x8d6f33['game']['bloodSplatters'])
                    _0x4ff955 = _0x8d6f33['game']['bloodSplatters'];
                if (_0x8d6f33['game']['bloodDrops'])
                    _0x41b55a = _0x8d6f33['game']['bloodDrops'];
                if (_0x8d6f33['game']['blackmailed']) {
                    _0x4c5632 = new Set(_0x8d6f33['game']['blackmailed']);
                } else {
                    _0x4c5632['clear']();
                }
                if (_0x8d6f33['game']['mayorRevealed']) {
                    for (const _0x32d9a0 in _0x8d6f33['game']['mayorRevealed']) {
                        _0x3a4dd1['add'](parseInt(_0x32d9a0));
                    }
                }
                if (_0x4d0158['LAST_STATE'] !== _0x4d0158['GAME_STATE']) {
                    if (_0x4d0158['GAME_STATE'] !== 'NIGHT') {
                        _0x4d0158['CURRENT_TARGET'] = null;
                        _0x53b1e9 = null;
                        _0x539dc7 = null;
                        _0x31d404 = null;
                        _0x327319 = null;
                        _0x35b550 = null;
                        const _0x1ba753 = document['getElementById']('ability-ui');
                        if (_0x1ba753)
                            _0x1ba753['style']['display'] = 'none';
                    }
                    if (_0x4d0158['GAME_STATE'] === 'NIGHT') {
                        _0x1b8ecb['chats'] = [];
                        for (const _0x99661f in _0xc68604) {
                            _0xc68604[_0x99661f]['chats'] = [];
                        }
                    }
                    _0x4d0158['LAST_STATE'] = _0x4d0158['GAME_STATE'];
                    _0xfc8915();
                    _0x249980['onStateChange'](_0x4d0158['GAME_STATE'], _0x8d6f33['game']['nightAbilityOpen']);
                }
                const _0x1ee6f7 = document['getElementById']('phase-ui');
                if (_0x1ee6f7) {
                    if (_0x8d6f33['game']['state'] === 'LOBBY') {
                        _0x1ee6f7['style']['display'] = 'none';
                    } else {
                        _0x1ee6f7['style']['display'] = 'block';
                    }
                    let _0x2982a8 = _0x8d6f33['game']['state']['replace']('_', '\x20');
                    if (_0x8d6f33['game']['state'] === 'DAY_DISCUSS') {
                        _0x2982a8 = 'DAY\x20' + (_0x8d6f33['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x8d6f33['game']['timer'] + 's';
                    } else if (_0x8d6f33['game']['state'] === 'DAY_VOTE') {
                        _0x2982a8 = 'DAY\x20' + (_0x8d6f33['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x8d6f33['game']['timer'] + 's';
                    } else if (_0x8d6f33['game']['state'] === 'NIGHT') {
                        const _0x460cbb = _0x8d6f33['game']['dayCount'] || 0x1;
                        if (_0x8d6f33['game']['nightAbilityOpen']) {
                            _0x2982a8 = 'NIGHT\x20' + _0x460cbb + '\x20ABILITY\x20PHASE';
                            const _0x40aa14 = _0x8d6f33['game']['abilityTimer'] !== undefined ? _0x8d6f33['game']['abilityTimer'] : _0x8d6f33['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x40aa14 + 's';
                        } else {
                            _0x2982a8 = 'NIGHT\x20' + _0x460cbb;
                            document['getElementById']('phase-timer')['innerText'] = _0x8d6f33['game']['timer'] + 's';
                        }
                    }
                    if (_0x8d6f33['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x2982a8;
                    }
                }
                if (_0x8d6f33['game']['state'] === 'NIGHT') {
                    const _0x167098 = document['getElementById']('ability-timer-label');
                    if (_0x167098) {
                        const _0xfea5cc = _0x8d6f33['game']['abilityTimer'] !== undefined ? _0x8d6f33['game']['abilityTimer'] : _0x8d6f33['game']['timer'];
                        _0x167098['innerText'] = _0x8d6f33['game']['nightAbilityOpen'] ? _0xfea5cc + 's' : '';
                    }
                    if (_0x8d6f33['game']['nightAbilityOpen'] && !_0x51d721 && !_0x1b8ecb['isDead']) {
                        _0x51d721 = !![];
                        _0x1f36b1();
                        const _0x1c6e74 = document['getElementById']('ability-ui');
                        if (_0x1c6e74)
                            _0x1c6e74['style']['display'] = 'block';
                    }
                    if (!_0x8d6f33['game']['nightAbilityOpen']) {
                        const _0x472630 = document['getElementById']('ability-ui');
                        if (_0x472630 && _0x472630['style']['display'] === 'block') {
                            _0x472630['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x51d721 = ![];
                }
                if (_0x8d6f33['game']['rolesInGame']) {
                    _0x4d0158['ROLES_IN_GAME'] = _0x8d6f33['game']['rolesInGame'];
                }
                if (_0x8d6f33['game']['skinwalkerLastRole'] !== undefined) {
                    _0x4d0158['SKINWALKER_LAST_ROLE'] = _0x8d6f33['game']['skinwalkerLastRole'];
                }
                if (_0x8d6f33['game']['state'] === 'NIGHT') {
                    const _0x409ab7 = document['getElementById']('will-ui');
                    if (_0x409ab7 && _0x409ab7['style']['display'] === 'flex') {
                        _0x409ab7['style']['display'] = 'none';
                        const _0x6850d3 = document['getElementById']('will-input');
                        if (_0x6850d3)
                            _0x6850d3['blur']();
                    }
                }
                _0x112896(_0x8d6f33['game']);
                if (_0x8d6f33['game']['roleListMode'] !== undefined) {
                    _0x4d0158['ROLE_LIST_RAW'] = _0x8d6f33['game']['roleList'] || [];
                    _0x3a0091(_0x8d6f33['game']['roleList'], _0x8d6f33['game']['roleListMode']);
                }
            }
        } else if (_0x8d6f33['type'] === 'teleport') {
            _0x1b8ecb['x'] = _0x8d6f33['x'];
            _0x1b8ecb['y'] = _0x8d6f33['y'];
            _0x1b8ecb['vx'] = 0x0;
            _0x1b8ecb['vy'] = 0x0;
            _0x4d0158['CAMERA']['x'] = null;
            if (_0x8d6f33['teleportId'] !== undefined)
                _0x46279a = _0x8d6f33['teleportId'];
        } else if (_0x8d6f33['type'] === 'bulk_teleport') {
            for (const _0x6967a3 in _0x8d6f33['positions']) {
                const _0x5b6106 = _0x8d6f33['positions'][_0x6967a3];
                if (parseInt(_0x6967a3) === _0x56e65e) {
                    _0x1b8ecb['x'] = _0x5b6106['x'];
                    _0x1b8ecb['y'] = _0x5b6106['y'];
                    _0x1b8ecb['vx'] = 0x0;
                    _0x1b8ecb['vy'] = 0x0;
                    _0x4d0158['CAMERA']['x'] = null;
                    continue;
                }
                const _0x21704a = _0xc68604[_0x6967a3];
                if (_0x21704a) {
                    _0x21704a['x'] = _0x5b6106['x'];
                    _0x21704a['y'] = _0x5b6106['y'];
                    _0x21704a['renderX'] = _0x5b6106['x'];
                    _0x21704a['renderY'] = _0x5b6106['y'];
                    _0x21704a['vx'] = 0x0;
                    _0x21704a['vy'] = 0x0;
                }
            }
        } else if (_0x8d6f33['type'] === 'player_left') {
            delete _0xc68604[_0x8d6f33['id']];
            _0x3a4dd1['delete'](parseInt(_0x8d6f33['id']));
        } else if (_0x8d6f33['type'] === 'map_update') {
            const _0x1f25cb = _0x4d0158['MAP']['layers']['find'](_0x5559ca => _0x5559ca['name'] === _0x8d6f33['layer']);
            if (_0x1f25cb) {
                _0x1f25cb['data'][_0x8d6f33['row'] * _0x4d0158['MAP']['columns'] + _0x8d6f33['col']] = _0x8d6f33['gid'];
                const _0x22e155 = _0x8d6f33['row'] * _0x4d0158['MAP']['columns'] + _0x8d6f33['col'];
                if (_0x4d0158['MAP']['doors'] && _0x4d0158['MAP']['doors'][_0x22e155]) {
                    const _0x34ef9c = _0x4d0158['MAP']['layers']['find'](_0x441668 => _0x441668['name'] === 'floor2');
                    if (_0x34ef9c)
                        _0x34ef9c['data'][_0x22e155] = 0x2;
                }
                const _0x2be86c = Math['floor'](_0x8d6f33['col'] * _0x4d0158['MAP']['tileSize'] / _0x4d0158['MAP']['chunkSize']);
                const _0x3260c5 = Math['floor'](_0x8d6f33['row'] * _0x4d0158['MAP']['tileSize'] / _0x4d0158['MAP']['chunkSize']);
                _0x5d034c(_0x2be86c, _0x3260c5);
            }
        } else if (_0x8d6f33['type'] === 'role_assign') {
            _0x3eaf94 = _0x8d6f33['role'];
            _0x1b8ecb['isDead'] = _0x3eaf94 === 'Spectator';
            _0x3a4dd1['clear']();
            _0x4d0158['CURRENT_TARGET'] = null;
            _0x53b1e9 = null;
            _0x539dc7 = null;
            _0x31d404 = null;
            _0x327319 = null;
            _0x35b550 = null;
            _0x51d721 = ![];
            const _0x3ab50b = document['getElementById']('ability-ui');
            if (_0x3ab50b)
                _0x3ab50b['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x3eaf94;
            _0xfc8915();
            _0x49b05a(_0x3eaf94 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x3eaf94, !![]);
            let _0x3fcec9 = '';
            if (_0x3eaf94 === 'Investigator')
                _0x3fcec9 = 'Investigate\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x3eaf94 === 'Tracker')
                _0x3fcec9 = 'Track\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x3eaf94 === 'Doctor')
                _0x3fcec9 = 'Heal\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x3eaf94 === 'Archer')
                _0x3fcec9 = 'Guard\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x3eaf94 === 'Escort')
                _0x3fcec9 = 'Roleblock\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x3eaf94 === 'Vigilante')
                _0x3fcec9 = 'Shoot\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x3eaf94 === 'Skinwalker')
                _0x3fcec9 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x3eaf94 === 'Blackmailer')
                _0x3fcec9 = 'Pick\x20a\x20player\x20to\x20blackmail\x20and\x20a\x20player\x20to\x20kill\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x3eaf94 === 'Celebrity')
                _0x3fcec9 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x3eaf94 === 'Mayor')
                _0x3fcec9 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x49b05a(_0x3fcec9, !![]);
        } else if (_0x8d6f33['type'] === 'mayor_reveal') {
            _0x3a4dd1['add'](parseInt(_0x8d6f33['playerId']));
            _0x199665();
            _0xfc8915();
        } else if (_0x8d6f33['type'] === 'rolelist_update') {
            _0x4d0158['ROLE_LIST_RAW'] = _0x8d6f33['list'] || [];
            _0x3a0091(_0x8d6f33['list'], _0x8d6f33['mode']);
        } else if (_0x8d6f33['type'] === 'sound_event') {
            _0x249980['onSoundEvent'](_0x8d6f33['track']);
        } else if (_0x8d6f33['type'] === 'blood_splatter') {
            _0x4ff955['push']({
                'x': _0x8d6f33['x'],
                'y': _0x8d6f33['y']
            });
        } else if (_0x8d6f33['type'] === 'blood_drop') {
            _0x41b55a['push']({
                'x': _0x8d6f33['x'],
                'y': _0x8d6f33['y']
            });
        } else if (_0x8d6f33['type'] === 'day_fade') {
            _0x1fce41 = 0x1;
            _0x50e3cd = performance['now']() + 0x3e8;
        } else if (_0x8d6f33['type'] === 'player_stats_updated') {
            const _0x3dc790 = parseInt(_0x8d6f33['id']);
            if (_0x3dc790 === _0x56e65e && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x8d6f33['accountStats']);
            }
            if (_0xc68604[_0x8d6f33['id']]) {
                _0xc68604[_0x8d6f33['id']]['accountStats'] = _0x8d6f33['accountStats'];
            }
            _0x52fa47();
        } else if (_0x8d6f33['type'] === 'stats_update') {
            const _0x10c89c = window['_FB'];
            if (_0x10c89c && _0x10c89c['_currentUser'] && _0x10c89c['_userData']) {
                const _0x1e2122 = _0x10c89c['_currentUser']['uid'];
                const _0x189354 = _0x8d6f33['patch'] || {};
                const _0x3d3885 = _0x10c89c['_userData'];
                const _0x48ee76 = {
                    'townWins': (_0x3d3885['townWins'] || 0x0) + (_0x189354['townWins'] || 0x0),
                    'mafiaWins': (_0x3d3885['mafiaWins'] || 0x0) + (_0x189354['mafiaWins'] || 0x0),
                    'deaths': (_0x3d3885['deaths'] || 0x0) + (_0x189354['deaths'] || 0x0),
                    'townLosses': (_0x3d3885['townLosses'] || 0x0) + (_0x189354['townLosses'] || 0x0),
                    'mafiaLosses': (_0x3d3885['mafiaLosses'] || 0x0) + (_0x189354['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x10c89c['_userData'], _0x48ee76);
                const _0x2cac57 = _0x10c89c['doc'](_0x10c89c['db'], 'users', _0x1e2122);
                _0x10c89c['updateDoc'](_0x2cac57, _0x48ee76)['catch'](() => {
                });
                if (_0x43694b && _0x43694b['readyState'] === WebSocket['OPEN']) {
                    _0x43694b['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x48ee76
                    }));
                }
                _0x52fa47();
            }
        } else if (_0x8d6f33['type'] === 'game_over') {
            _0x249980['onStateChange']('LOBBY', ![]);
            _0x3a0091([], 'off');
            _0x3eaf94 = null;
            _0x1b8ecb['isDead'] = ![];
            _0x1b8ecb['hasArrow'] = ![];
            _0x4ff955 = [];
            _0x41b55a = [];
            _0x4c5632['clear']();
            _0x3a4dd1['clear']();
            _0x4d0158['CURRENT_TARGET'] = null;
            _0x53b1e9 = null;
            _0x539dc7 = null;
            _0x31d404 = null;
            _0x327319 = null;
            _0x35b550 = null;
            _0x51d721 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0xfc8915();
            _0x49b05a('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x8d6f33['type'] === 'chat_log') {
            _0x49b05a(_0x8d6f33['sender'] + ':\x20' + _0x8d6f33['text'], ![], !!_0x8d6f33['isHost']);
        } else if (_0x8d6f33['type'] === 'sys_chat') {
            _0x49b05a(_0x8d6f33['text'], !![]);
        }
    };
}
function _0x49b05a(_0x4783ba, _0x4fe6d5 = ![], _0x124a1c = ![]) {
    const _0x255daa = document['getElementById']('chat-log-messages');
    const _0x130b7c = document['getElementById']('chat-log-ui');
    const _0x496fd9 = _0x130b7c['scrollHeight'] - _0x130b7c['scrollTop'] - _0x130b7c['clientHeight'] < 0x1e;
    const _0x1c2735 = document['createElement']('div');
    _0x1c2735['className'] = 'chat-log-line' + (_0x4fe6d5 ? '\x20sys-msg' : '') + (_0x124a1c ? '\x20host-msg' : '');
    _0x1c2735['innerText'] = _0x4783ba;
    _0x255daa['appendChild'](_0x1c2735);
    if (_0x496fd9) {
        _0x130b7c['scrollTop'] = _0x130b7c['scrollHeight'];
    }
    if (_0x255daa['childElementCount'] > 0xc8) {
        _0x255daa['removeChild'](_0x255daa['firstChild']);
    }
}
function _0x500ca8(_0x33808f, _0x3ad4a8, _0x467aea) {
    const _0x1ba5f9 = document['createElement']('canvas');
    _0x1ba5f9['width'] = _0x467aea;
    _0x1ba5f9['height'] = _0x467aea;
    const _0x3e9c30 = _0x1ba5f9['getContext']('2d');
    _0x3e9c30['imageSmoothingEnabled'] = ![];
    const _0x526afb = 'assets/' + (_0x33808f || 'body01.png');
    const _0x4c3278 = _0x534bd2(_0x526afb);
    if (_0x4c3278['complete'] && _0x4c3278['naturalWidth'] > 0x0)
        _0x3e9c30['drawImage'](_0x4c3278, 0x0, 0x0, _0x467aea, _0x467aea);
    if (_0x3ad4a8) {
        const _0x428f33 = 'assets/' + _0x3ad4a8;
        const _0x24af24 = _0x534bd2(_0x428f33);
        if (_0x24af24['complete'] && _0x24af24['naturalWidth'] > 0x0)
            _0x3e9c30['drawImage'](_0x24af24, 0x0, 0x0, _0x467aea, _0x467aea);
    }
    return _0x1ba5f9['toDataURL']();
}
let _0x304b01 = '';
function _0x52fa47() {
    const _0x5f49a5 = document['getElementById']('chat-profile-panel');
    if (!_0x5f49a5)
        return;
    const _0x3202df = [];
    if (_0x56e65e !== null) {
        const _0x125c9c = _0x5c60bb || 'body01.png';
        const _0x246ac1 = _0x271236 || 'eyes4.png';
        const _0x5577c4 = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x3202df['push']({
            'id': _0x56e65e,
            'name': _0x3abcfd,
            'body': _0x125c9c,
            'eyes': _0x246ac1,
            'stats': _0x5577c4
        });
    }
    for (const _0x221cfc in _0xc68604) {
        const _0x4954cb = _0xc68604[_0x221cfc];
        const _0x471260 = _0x4954cb['accountStats'] || null;
        _0x3202df['push']({
            'id': parseInt(_0x221cfc),
            'name': _0x4954cb['name'],
            'body': _0x4954cb['body'] || 'body01.png',
            'eyes': _0x4954cb['eyes'] || 'eyes4.png',
            'stats': _0x471260
        });
    }
    const _0x3c19ce = _0x3202df['map'](_0x1ed3b1 => _0x1ed3b1['id'] + '_' + _0x1ed3b1['name'] + '_' + _0x1ed3b1['body'] + '_' + _0x1ed3b1['eyes'] + '_' + JSON['stringify'](_0x1ed3b1['stats']))['join']('|');
    if (_0x3c19ce === _0x304b01)
        return;
    _0x304b01 = _0x3c19ce;
    _0x5f49a5['innerHTML'] = '';
    let _0x2f039c = ![];
    for (const _0x500b58 of _0x3202df) {
        _0x2f039c = !![];
        const _0x26b4b3 = _0x500ca8(_0x500b58['body'], _0x500b58['eyes'], 0x20);
        const _0x4b72e5 = document['createElement']('div');
        _0x4b72e5['className'] = 'chat-pfp-entry';
        const _0x69f6e4 = document['createElement']('img');
        _0x69f6e4['src'] = _0x26b4b3;
        _0x69f6e4['alt'] = _0x500b58['name'];
        _0x4b72e5['appendChild'](_0x69f6e4);
        const _0x54b980 = document['createElement']('div');
        _0x54b980['className'] = 'chat-pfp-tooltip';
        let _0x2b8afc = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x500b58['name'] + '</div>';
        const _0x20e1e3 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x1248bf = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0xb81b37 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x3f80c9 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x1c9018 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x5a2db9 = (_0x2b2655, _0x446e89, _0x107899, _0x1f4763) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x2b2655 + '<span\x20style=\x22flex:1;color:' + _0x1f4763 + ';\x22>' + _0x446e89 + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x107899 + '</span></div>';
        if (_0x500b58['stats']) {
            _0x2b8afc += _0x5a2db9(_0x20e1e3, 'Town\x20Wins', _0x500b58['stats']['townWins'] || 0x0, '#55ee77');
            _0x2b8afc += _0x5a2db9(_0x1248bf, 'Mafia\x20Wins', _0x500b58['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x2b8afc += _0x5a2db9(_0xb81b37, 'Deaths', _0x500b58['stats']['deaths'] || 0x0, '#aaa');
            _0x2b8afc += _0x5a2db9(_0x3f80c9, 'Town\x20Losses', _0x500b58['stats']['townLosses'] || 0x0, '#6688aa');
            _0x2b8afc += _0x5a2db9(_0x1c9018, 'Mafia\x20Losses', _0x500b58['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x2b8afc += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x54b980['innerHTML'] = _0x2b8afc;
        _0x4b72e5['appendChild'](_0x54b980);
        _0x5f49a5['appendChild'](_0x4b72e5);
    }
    const _0x4b103c = document['getElementById']('chat-log-wrap');
    if (_0x4b103c) {
        if (_0x2f039c) {
            _0x4b103c['classList']['add']('has-profiles');
            _0x5f49a5['style']['display'] = 'flex';
        } else {
            _0x4b103c['classList']['remove']('has-profiles');
            _0x5f49a5['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x52fa47;
let _0x1da172 = -0x1, _0x1d3d52 = -0x1, _0x19ff6d = -0x1, _0x361db6 = 0x0;
function _0x2c10ed() {
    if (!_0x56e65e || !_0x43694b || _0x43694b['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x271686 = performance['now']();
    const _0x165b7f = _0x271686 - _0x361db6;
    const _0x40ff77 = Math['abs'](_0x1b8ecb['x'] - _0x1da172) > 0.05 || Math['abs'](_0x1b8ecb['y'] - _0x1d3d52) > 0.05 || Math['abs'](_0x1b8ecb['angle'] - _0x19ff6d) > 0.02;
    if (!_0x40ff77 && _0x165b7f < 0xc8)
        return;
    if (_0x165b7f < 0x19)
        return;
    _0x361db6 = _0x271686;
    _0x1da172 = _0x1b8ecb['x'];
    _0x1d3d52 = _0x1b8ecb['y'];
    _0x19ff6d = _0x1b8ecb['angle'];
    if (!_0x56e65e || !_0x43694b || _0x43694b['readyState'] !== WebSocket['OPEN'])
        return;
    _0x43694b['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x1b8ecb['x'],
        'y': _0x1b8ecb['y'],
        'vx': _0x1b8ecb['vx'],
        'vy': _0x1b8ecb['vy'],
        'angle': _0x1b8ecb['angle'],
        'scale': _0x1b8ecb['scale'],
        'teleportId': _0x46279a,
        'clientTimestamp': Date['now']()
    }));
}
function _0xbd0153() {
    if (_0x1b8ecb['isDead'])
        return;
    const _0x22f040 = _0x4d0158['MAP']['layers']['find'](_0xb4294 => _0xb4294['name'] === 'walls');
    if (!_0x22f040)
        return;
    const _0x369752 = _0x1b8ecb['scale'];
    const _0x5326f9 = _0x1b8ecb['width'] * _0x369752 / 0x2;
    for (let _0x8859d5 = 0x0; _0x8859d5 < 0x3; _0x8859d5++) {
        let _0xd6a85b = _0x1b8ecb['x'] + _0x1b8ecb['width'] / 0x2;
        let _0xe51e7c = _0x1b8ecb['y'] + _0x1b8ecb['height'] / 0x2;
        const _0xe3b17d = Math['floor']((_0xd6a85b - _0x5326f9) / _0x4d0158['MAP']['tileSize']);
        const _0x5b6263 = Math['floor']((_0xd6a85b + _0x5326f9) / _0x4d0158['MAP']['tileSize']);
        const _0x2d0f13 = Math['floor']((_0xe51e7c - _0x5326f9) / _0x4d0158['MAP']['tileSize']);
        const _0x106c2f = Math['floor']((_0xe51e7c + _0x5326f9) / _0x4d0158['MAP']['tileSize']);
        for (let _0x299d08 = _0x2d0f13; _0x299d08 <= _0x106c2f; _0x299d08++) {
            for (let _0x11e848 = _0xe3b17d; _0x11e848 <= _0x5b6263; _0x11e848++) {
                if (_0x11e848 < 0x0 || _0x11e848 >= _0x4d0158['MAP']['columns'] || _0x299d08 < 0x0 || _0x299d08 >= _0x4d0158['MAP']['rows'])
                    continue;
                if (_0x22f040['data'][_0x299d08 * _0x4d0158['MAP']['columns'] + _0x11e848] === 0x0)
                    continue;
                const _0x2deb24 = _0x11e848 * _0x4d0158['MAP']['tileSize'];
                const _0x253c61 = _0x299d08 * _0x4d0158['MAP']['tileSize'];
                const _0x1650b1 = _0xd6a85b < _0x2deb24 ? _0x2deb24 : _0xd6a85b > _0x2deb24 + _0x4d0158['MAP']['tileSize'] ? _0x2deb24 + _0x4d0158['MAP']['tileSize'] : _0xd6a85b;
                const _0x431485 = _0xe51e7c < _0x253c61 ? _0x253c61 : _0xe51e7c > _0x253c61 + _0x4d0158['MAP']['tileSize'] ? _0x253c61 + _0x4d0158['MAP']['tileSize'] : _0xe51e7c;
                const _0x3511e = _0xd6a85b - _0x1650b1;
                const _0x468431 = _0xe51e7c - _0x431485;
                const _0x1f4eda = Math['sqrt'](_0x3511e * _0x3511e + _0x468431 * _0x468431);
                if (_0x1f4eda < _0x5326f9) {
                    if (_0x1f4eda === 0x0) {
                        const _0x16d524 = _0xd6a85b - _0x2deb24;
                        const _0x221cde = _0x2deb24 + _0x4d0158['MAP']['tileSize'] - _0xd6a85b;
                        const _0x53ea8c = _0xe51e7c - _0x253c61;
                        const _0x21d128 = _0x253c61 + _0x4d0158['MAP']['tileSize'] - _0xe51e7c;
                        const _0x14880b = Math['min'](_0x16d524, _0x221cde, _0x53ea8c, _0x21d128);
                        if (_0x14880b === _0x16d524)
                            _0xd6a85b = _0x2deb24 - _0x5326f9;
                        else if (_0x14880b === _0x221cde)
                            _0xd6a85b = _0x2deb24 + _0x4d0158['MAP']['tileSize'] + _0x5326f9;
                        else if (_0x14880b === _0x53ea8c)
                            _0xe51e7c = _0x253c61 - _0x5326f9;
                        else
                            _0xe51e7c = _0x253c61 + _0x4d0158['MAP']['tileSize'] + _0x5326f9;
                    } else {
                        const _0x5b808d = _0x5326f9 - _0x1f4eda;
                        _0xd6a85b += _0x3511e / _0x1f4eda * _0x5b808d;
                        _0xe51e7c += _0x468431 / _0x1f4eda * _0x5b808d;
                        const _0x117453 = _0x1b8ecb['vx'] * (_0x3511e / _0x1f4eda) + _0x1b8ecb['vy'] * (_0x468431 / _0x1f4eda);
                        if (_0x117453 < 0x0) {
                            _0x1b8ecb['vx'] -= _0x117453 * (_0x3511e / _0x1f4eda);
                            _0x1b8ecb['vy'] -= _0x117453 * (_0x468431 / _0x1f4eda);
                        }
                    }
                }
            }
        }
        _0x1b8ecb['x'] = _0xd6a85b - _0x1b8ecb['width'] / 0x2;
        _0x1b8ecb['y'] = _0xe51e7c - _0x1b8ecb['height'] / 0x2;
    }
}
function _0x3390bd(_0x244045) {
    const _0x24390e = _0x4d0158['MAP']['layers']['find'](_0x4c1e9a => _0x4c1e9a['name'] === 'walls');
    if (!_0x24390e)
        return;
    const _0x35e29c = _0x244045['width'] / 0x2;
    for (let _0x1aa0c4 = 0x0; _0x1aa0c4 < 0x2; _0x1aa0c4++) {
        let _0x5d142e = _0x244045['x'] + _0x244045['width'] / 0x2;
        let _0x1c0f0c = _0x244045['y'] + _0x244045['height'] / 0x2;
        const _0x1053e0 = Math['floor']((_0x5d142e - _0x35e29c) / _0x4d0158['MAP']['tileSize']);
        const _0x457e9c = Math['floor']((_0x5d142e + _0x35e29c) / _0x4d0158['MAP']['tileSize']);
        const _0x27325e = Math['floor']((_0x1c0f0c - _0x35e29c) / _0x4d0158['MAP']['tileSize']);
        const _0x55845c = Math['floor']((_0x1c0f0c + _0x35e29c) / _0x4d0158['MAP']['tileSize']);
        for (let _0x1fb2f9 = _0x27325e; _0x1fb2f9 <= _0x55845c; _0x1fb2f9++) {
            for (let _0x552258 = _0x1053e0; _0x552258 <= _0x457e9c; _0x552258++) {
                if (_0x552258 < 0x0 || _0x552258 >= _0x4d0158['MAP']['columns'] || _0x1fb2f9 < 0x0 || _0x1fb2f9 >= _0x4d0158['MAP']['rows'])
                    continue;
                if (_0x24390e['data'][_0x1fb2f9 * _0x4d0158['MAP']['columns'] + _0x552258] === 0x0)
                    continue;
                const _0x475000 = _0x552258 * _0x4d0158['MAP']['tileSize'];
                const _0x5b9155 = _0x1fb2f9 * _0x4d0158['MAP']['tileSize'];
                const _0x32ac70 = _0x5d142e < _0x475000 ? _0x475000 : _0x5d142e > _0x475000 + _0x4d0158['MAP']['tileSize'] ? _0x475000 + _0x4d0158['MAP']['tileSize'] : _0x5d142e;
                const _0x5a9ee4 = _0x1c0f0c < _0x5b9155 ? _0x5b9155 : _0x1c0f0c > _0x5b9155 + _0x4d0158['MAP']['tileSize'] ? _0x5b9155 + _0x4d0158['MAP']['tileSize'] : _0x1c0f0c;
                const _0x3164a0 = _0x5d142e - _0x32ac70;
                const _0x3afa96 = _0x1c0f0c - _0x5a9ee4;
                const _0x7fee9e = Math['sqrt'](_0x3164a0 * _0x3164a0 + _0x3afa96 * _0x3afa96);
                if (_0x7fee9e < _0x35e29c) {
                    if (_0x7fee9e === 0x0) {
                        const _0x2c629b = _0x5d142e - _0x475000;
                        const _0x4b5ffa = _0x475000 + _0x4d0158['MAP']['tileSize'] - _0x5d142e;
                        const _0x10aea4 = _0x1c0f0c - _0x5b9155;
                        const _0x9ddc58 = _0x5b9155 + _0x4d0158['MAP']['tileSize'] - _0x1c0f0c;
                        const _0x492a5f = Math['min'](_0x2c629b, _0x4b5ffa, _0x10aea4, _0x9ddc58);
                        if (_0x492a5f === _0x2c629b)
                            _0x5d142e = _0x475000 - _0x35e29c;
                        else if (_0x492a5f === _0x4b5ffa)
                            _0x5d142e = _0x475000 + _0x4d0158['MAP']['tileSize'] + _0x35e29c;
                        else if (_0x492a5f === _0x10aea4)
                            _0x1c0f0c = _0x5b9155 - _0x35e29c;
                        else
                            _0x1c0f0c = _0x5b9155 + _0x4d0158['MAP']['tileSize'] + _0x35e29c;
                    } else {
                        const _0x41ebc6 = _0x35e29c - _0x7fee9e;
                        _0x5d142e += _0x3164a0 / _0x7fee9e * _0x41ebc6;
                        _0x1c0f0c += _0x3afa96 / _0x7fee9e * _0x41ebc6;
                    }
                }
            }
        }
        _0x244045['x'] = _0x5d142e - _0x244045['width'] / 0x2;
        _0x244045['y'] = _0x1c0f0c - _0x244045['height'] / 0x2;
    }
}
function _0x2526d3(_0x47fd5d) {
    const _0x4958c9 = _0x47fd5d['width'] / 0x2;
    for (let _0x493486 = 0x0; _0x493486 < 0x2; _0x493486++) {
        let _0x173229 = _0x47fd5d['x'] + _0x47fd5d['width'] / 0x2;
        let _0x3a9855 = _0x47fd5d['y'] + _0x47fd5d['height'] / 0x2;
        for (const _0x5c2bcc of _0x4d0158['ENTITIES']) {
            const _0x57a213 = _0x173229 < _0x5c2bcc['x'] ? _0x5c2bcc['x'] : _0x173229 > _0x5c2bcc['x'] + _0x5c2bcc['w'] ? _0x5c2bcc['x'] + _0x5c2bcc['w'] : _0x173229;
            const _0x56756b = _0x3a9855 < _0x5c2bcc['y'] ? _0x5c2bcc['y'] : _0x3a9855 > _0x5c2bcc['y'] + _0x5c2bcc['h'] ? _0x5c2bcc['y'] + _0x5c2bcc['h'] : _0x3a9855;
            const _0x3edfb8 = _0x173229 - _0x57a213;
            const _0x5ee8c4 = _0x3a9855 - _0x56756b;
            const _0x595d06 = Math['sqrt'](_0x3edfb8 * _0x3edfb8 + _0x5ee8c4 * _0x5ee8c4);
            if (_0x595d06 < _0x4958c9 && _0x595d06 > 0x0) {
                const _0x56c8af = _0x4958c9 - _0x595d06;
                const _0x19b729 = _0x3edfb8 / _0x595d06;
                const _0x243228 = _0x5ee8c4 / _0x595d06;
                _0x173229 += _0x19b729 * _0x56c8af;
                _0x3a9855 += _0x243228 * _0x56c8af;
            } else if (_0x595d06 === 0x0) {
                const _0x170cc3 = _0x173229 - _0x5c2bcc['x'];
                const _0x514a0f = _0x5c2bcc['x'] + _0x5c2bcc['w'] - _0x173229;
                const _0x56ca5b = _0x3a9855 - _0x5c2bcc['y'];
                const _0x2d82f2 = _0x5c2bcc['y'] + _0x5c2bcc['h'] - _0x3a9855;
                const _0x2f2a7e = Math['min'](_0x170cc3, _0x514a0f, _0x56ca5b, _0x2d82f2);
                if (_0x2f2a7e === _0x170cc3)
                    _0x173229 = _0x5c2bcc['x'] - _0x4958c9;
                else if (_0x2f2a7e === _0x514a0f)
                    _0x173229 = _0x5c2bcc['x'] + _0x5c2bcc['w'] + _0x4958c9;
                else if (_0x2f2a7e === _0x56ca5b)
                    _0x3a9855 = _0x5c2bcc['y'] - _0x4958c9;
                else
                    _0x3a9855 = _0x5c2bcc['y'] + _0x5c2bcc['h'] + _0x4958c9;
            }
        }
        _0x47fd5d['x'] = _0x173229 - _0x47fd5d['width'] / 0x2;
        _0x47fd5d['y'] = _0x3a9855 - _0x47fd5d['height'] / 0x2;
    }
}
function _0x2faedd() {
    if (_0x1b8ecb['isDead'])
        return;
    const _0x911af4 = _0x1b8ecb['width'] / 0x2;
    const _0x294bb0 = _0x1b8ecb['x'] + _0x1b8ecb['width'] / 0x2;
    const _0x48eea7 = _0x1b8ecb['y'] + _0x1b8ecb['height'] / 0x2;
    for (const _0x4ed27a in _0xc68604) {
        const _0x128995 = _0xc68604[_0x4ed27a];
        if (_0x128995['isDead'])
            continue;
        const _0x289503 = _0x128995['width'] / 0x2;
        const _0x52c188 = _0x911af4 + _0x289503;
        const _0x26271f = (_0x128995['renderX'] ?? _0x128995['x']) + _0x128995['width'] / 0x2;
        const _0x3cbf8d = (_0x128995['renderY'] ?? _0x128995['y']) + _0x128995['height'] / 0x2;
        const _0x3a6e5e = _0x294bb0 - _0x26271f;
        const _0x24dd2c = _0x48eea7 - _0x3cbf8d;
        const _0x10d1e9 = Math['sqrt'](_0x3a6e5e * _0x3a6e5e + _0x24dd2c * _0x24dd2c);
        if (_0x10d1e9 > 0x0 && _0x10d1e9 < _0x52c188) {
            const _0xf30fdb = _0x52c188 - _0x10d1e9;
            const _0x1af83f = _0x3a6e5e / _0x10d1e9;
            const _0x28bf8c = _0x24dd2c / _0x10d1e9;
            _0x1b8ecb['x'] += _0x1af83f * (_0xf30fdb * 0.25);
            _0x1b8ecb['y'] += _0x28bf8c * (_0xf30fdb * 0.25);
            _0x128995['x'] -= _0x1af83f * (_0xf30fdb * 0.75);
            _0x128995['y'] -= _0x28bf8c * (_0xf30fdb * 0.75);
            _0x3390bd(_0x128995);
            _0x2526d3(_0x128995);
            if (_0x128995['renderX'] !== undefined) {
                _0x128995['renderX'] = _0x128995['x'];
                _0x128995['renderY'] = _0x128995['y'];
            }
            const _0x55b7c9 = _0x1b8ecb['vx'] * _0x1af83f + _0x1b8ecb['vy'] * _0x28bf8c;
            if (_0x55b7c9 < 0x0) {
                _0x1b8ecb['vx'] -= _0x55b7c9 * _0x1af83f * 0.25;
                _0x1b8ecb['vy'] -= _0x55b7c9 * _0x28bf8c * 0.25;
            }
        }
    }
    _0xbd0153();
    _0x3ef79c();
}
function _0x3ef79c() {
    if (_0x1b8ecb['isDead'])
        return;
    const _0x20b2e1 = _0x1b8ecb['scale'];
    const _0xb91896 = _0x1b8ecb['width'] * _0x20b2e1 / 0x2;
    for (let _0xd9c620 = 0x0; _0xd9c620 < 0x2; _0xd9c620++) {
        let _0x1b2cbe = _0x1b8ecb['x'] + _0x1b8ecb['width'] / 0x2;
        let _0x10066f = _0x1b8ecb['y'] + _0x1b8ecb['height'] / 0x2;
        for (const _0x1cb045 of _0x4d0158['ENTITIES']) {
            const _0x2028bf = _0x1b2cbe < _0x1cb045['x'] ? _0x1cb045['x'] : _0x1b2cbe > _0x1cb045['x'] + _0x1cb045['w'] ? _0x1cb045['x'] + _0x1cb045['w'] : _0x1b2cbe;
            const _0x1af176 = _0x10066f < _0x1cb045['y'] ? _0x1cb045['y'] : _0x10066f > _0x1cb045['y'] + _0x1cb045['h'] ? _0x1cb045['y'] + _0x1cb045['h'] : _0x10066f;
            const _0x21189f = _0x1b2cbe - _0x2028bf;
            const _0x36fe19 = _0x10066f - _0x1af176;
            const _0x2d6a6f = Math['sqrt'](_0x21189f * _0x21189f + _0x36fe19 * _0x36fe19);
            if (_0x2d6a6f < _0xb91896 && _0x2d6a6f > 0x0) {
                const _0x76709e = _0xb91896 - _0x2d6a6f;
                const _0x10d38f = _0x21189f / _0x2d6a6f;
                const _0x5300c2 = _0x36fe19 / _0x2d6a6f;
                _0x1b2cbe += _0x10d38f * _0x76709e;
                _0x10066f += _0x5300c2 * _0x76709e;
                const _0x578935 = _0x1b8ecb['vx'] * _0x10d38f + _0x1b8ecb['vy'] * _0x5300c2;
                if (_0x578935 < 0x0) {
                    _0x1b8ecb['vx'] -= _0x578935 * _0x10d38f;
                    _0x1b8ecb['vy'] -= _0x578935 * _0x5300c2;
                }
            } else if (_0x2d6a6f === 0x0) {
                const _0x1049e1 = _0x1b2cbe - _0x1cb045['x'];
                const _0x2448ec = _0x1cb045['x'] + _0x1cb045['w'] - _0x1b2cbe;
                const _0x197973 = _0x10066f - _0x1cb045['y'];
                const _0x4a997c = _0x1cb045['y'] + _0x1cb045['h'] - _0x10066f;
                const _0x38d0bc = Math['min'](_0x1049e1, _0x2448ec, _0x197973, _0x4a997c);
                if (_0x38d0bc === _0x1049e1)
                    _0x1b2cbe = _0x1cb045['x'] - _0xb91896;
                else if (_0x38d0bc === _0x2448ec)
                    _0x1b2cbe = _0x1cb045['x'] + _0x1cb045['w'] + _0xb91896;
                else if (_0x38d0bc === _0x197973)
                    _0x10066f = _0x1cb045['y'] - _0xb91896;
                else
                    _0x10066f = _0x1cb045['y'] + _0x1cb045['h'] + _0xb91896;
            }
        }
        _0x1b8ecb['x'] = _0x1b2cbe - _0x1b8ecb['width'] / 0x2;
        _0x1b8ecb['y'] = _0x10066f - _0x1b8ecb['height'] / 0x2;
    }
}
function _0x203147(_0x11d9ac, _0xae175) {
    const _0x2d80c6 = _0x4d0158['MAP']['layers']['find'](_0x5a2886 => _0x5a2886['name'] === 'trees');
    if (!_0x2d80c6)
        return ![];
    const _0x91ba = Math['floor'](_0x11d9ac / _0x4d0158['MAP']['tileSize']);
    const _0x36ee1e = Math['floor'](_0xae175 / _0x4d0158['MAP']['tileSize']);
    if (_0x91ba < 0x0 || _0x91ba >= _0x4d0158['MAP']['columns'] || _0x36ee1e < 0x0 || _0x36ee1e >= _0x4d0158['MAP']['rows'])
        return ![];
    return _0x2d80c6['data'][_0x36ee1e * _0x4d0158['MAP']['columns'] + _0x91ba] === 0xb;
}
let _0x5a5545 = null;
function _0x53fa99() {
    const _0x444d7a = _0x4d0158['MAP'];
    const _0x33f314 = _0x444d7a['layers']['find'](_0x55f8aa => _0x55f8aa['name'] === 'floor2');
    const _0x224a0c = _0x444d7a['layers']['find'](_0x7d8e83 => _0x7d8e83['name'] === 'walls');
    if (!_0x33f314 || !_0x224a0c) {
        _0x5a5545 = null;
        return;
    }
    const _0x2d4aea = _0x444d7a['columns'];
    const _0x4c621f = _0x444d7a['rows'];
    const _0x30fa9b = [];
    const _0x3e34f5 = [];
    const _0x37216a = new Set();
    for (let _0x528f23 = 0x0; _0x528f23 < _0x4c621f; _0x528f23++) {
        for (let _0x2796d1 = 0x0; _0x2796d1 < _0x2d4aea; _0x2796d1++) {
            const _0x48d9a7 = _0x528f23 * _0x2d4aea + _0x2796d1;
            const _0x204f9c = _0x33f314['data'][_0x48d9a7];
            const _0x5ce5b1 = _0x224a0c['data'][_0x48d9a7];
            if (_0x204f9c === 0x2 || _0x204f9c === 0x4) {
                _0x30fa9b['push']({
                    'c': _0x2796d1,
                    'r': _0x528f23
                });
                if (_0x5ce5b1 !== 0x0)
                    _0x3e34f5['push']({
                        'c': _0x2796d1,
                        'r': _0x528f23
                    });
            }
            if (_0x5ce5b1 !== 0x0)
                _0x37216a['add'](_0x2796d1 + ',' + _0x528f23);
        }
    }
    const _0x1f69f7 = new Set(_0x30fa9b['map'](_0x2c934c => _0x2c934c['c'] + ',' + _0x2c934c['r']));
    const _0x1d8a1c = [
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
                c: _0x217e89,
                r: _0x54184b
            } of _0x30fa9b) {
        for (const [_0xe812b8, _0x544565] of _0x1d8a1c) {
            const _0x5d6e3d = _0x217e89 + _0xe812b8, _0xcd1ec0 = _0x54184b + _0x544565;
            const _0x28bee0 = _0x5d6e3d + ',' + _0xcd1ec0;
            if (!_0x1f69f7['has'](_0x28bee0))
                _0x37216a['add'](_0x28bee0);
        }
    }
    _0x5a5545 = {
        'wallSet': _0x37216a,
        'floorTiles': _0x30fa9b,
        'wallTiles': _0x3e34f5,
        'interiorSet': _0x1f69f7
    };
}
function _0x4f8b98() {
    const _0xe80099 = _0x4d0158['MAP']['layers']['find'](_0x5f195c => _0x5f195c['name'] === 'floor2');
    if (!_0xe80099)
        return ![];
    const _0x2a12e4 = Math['floor']((_0x1b8ecb['x'] + _0x1b8ecb['width'] / 0x2) / _0x4d0158['MAP']['tileSize']);
    const _0x11759d = Math['floor']((_0x1b8ecb['y'] + _0x1b8ecb['height'] / 0x2) / _0x4d0158['MAP']['tileSize']);
    if (_0x2a12e4 < 0x0 || _0x2a12e4 >= _0x4d0158['MAP']['columns'] || _0x11759d < 0x0 || _0x11759d >= _0x4d0158['MAP']['rows'])
        return ![];
    const _0x421bfa = _0xe80099['data'][_0x11759d * _0x4d0158['MAP']['columns'] + _0x2a12e4];
    return _0x421bfa === 0x2;
}
let _0xb66b15 = null, _0x5eea3a = null;
function _0x287df6() {
    if (_0x1b8ecb['isDead']) {
        _0x4d0158['SHADOW']['polygon'] = null;
        _0xb66b15 = null;
        return;
    }
    const _0x58c303 = _0x4d0158['MAP'];
    const _0xd66084 = _0x4d0158['SHADOW'];
    const _0x1f8af8 = _0x58c303['tileSize'];
    if (!_0x5a5545)
        _0x53fa99();
    if (!_0x5a5545) {
        _0xd66084['polygon'] = null;
        _0xb66b15 = null;
        return;
    }
    const {
        wallSet: _0x577c9e,
        floorTiles: _0x123daf
    } = _0x5a5545;
    if (_0x123daf['length'] === 0x0) {
        _0xd66084['polygon'] = null;
        _0xb66b15 = null;
        return;
    }
    if (!_0x4f8b98()) {
        _0xd66084['polygon'] = null;
        _0xb66b15 = null;
        return;
    }
    const _0x43d73e = _0x1b8ecb['x'] + _0x1b8ecb['width'] / 0x2;
    const _0x2051e9 = _0x1b8ecb['y'] + _0x1b8ecb['height'] / 0x2;
    if (_0xb66b15 !== null && _0xd66084['polygon'] && Math['hypot'](_0x43d73e - _0xb66b15, _0x2051e9 - _0x5eea3a) < 0x1) {
        return;
    }
    _0xb66b15 = _0x43d73e;
    _0x5eea3a = _0x2051e9;
    const _0x35b2a6 = Math['floor'](_0x43d73e / _0x1f8af8);
    const _0x303bfe = Math['floor'](_0x2051e9 / _0x1f8af8);
    const _0x424b46 = Math['max'](0x0, _0x35b2a6 - 0x6);
    const _0x2a21ef = Math['min'](_0x58c303['columns'] - 0x1, _0x35b2a6 + 0x6);
    const _0x1a1ff0 = Math['max'](0x0, _0x303bfe - 0x6);
    const _0x333bf8 = Math['min'](_0x58c303['rows'] - 0x1, _0x303bfe + 0x6);
    const _0x5e06ff = [];
    for (let _0x596311 = _0x1a1ff0; _0x596311 <= _0x333bf8; _0x596311++) {
        for (let _0x14eae6 = _0x424b46; _0x14eae6 <= _0x2a21ef; _0x14eae6++) {
            if (_0x577c9e['has'](_0x14eae6 + ',' + _0x596311))
                _0x5e06ff['push'](_0x14eae6, _0x596311);
        }
    }
    const _0x14e88f = 0.001;
    const _0x288883 = new Set();
    const _0xb02606 = [];
    for (let _0x58e63e = 0x0; _0x58e63e < _0x5e06ff['length']; _0x58e63e += 0x2) {
        const _0x21c3fc = _0x5e06ff[_0x58e63e], _0x52217a = _0x5e06ff[_0x58e63e + 0x1];
        const _0x298aee = [
            _0x21c3fc * _0x1f8af8,
            _0x52217a * _0x1f8af8,
            _0x21c3fc * _0x1f8af8 + _0x1f8af8,
            _0x52217a * _0x1f8af8,
            _0x21c3fc * _0x1f8af8,
            _0x52217a * _0x1f8af8 + _0x1f8af8,
            _0x21c3fc * _0x1f8af8 + _0x1f8af8,
            _0x52217a * _0x1f8af8 + _0x1f8af8
        ];
        for (let _0x20ac72 = 0x0; _0x20ac72 < _0x298aee['length']; _0x20ac72 += 0x2) {
            const _0x3a6d54 = _0x298aee[_0x20ac72], _0x3c7d2b = _0x298aee[_0x20ac72 + 0x1];
            const _0xa115db = Math['atan2'](_0x3c7d2b - _0x2051e9, _0x3a6d54 - _0x43d73e);
            const _0x42a004 = Math['round'](_0xa115db * 0x4e20);
            if (!_0x288883['has'](_0x42a004 - 0x1)) {
                _0x288883['add'](_0x42a004 - 0x1);
                _0xb02606['push'](_0xa115db - _0x14e88f);
            }
            if (!_0x288883['has'](_0x42a004)) {
                _0x288883['add'](_0x42a004);
                _0xb02606['push'](_0xa115db);
            }
            if (!_0x288883['has'](_0x42a004 + 0x1)) {
                _0x288883['add'](_0x42a004 + 0x1);
                _0xb02606['push'](_0xa115db + _0x14e88f);
            }
        }
    }
    _0xb02606['sort']((_0x35c694, _0x52dbea) => _0x35c694 - _0x52dbea);
    const _0x1be973 = 0xc * _0x1f8af8;
    const _0x3ab838 = _0x56191a => {
        const _0x20ce11 = Math['cos'](_0x56191a);
        const _0x2684bc = Math['sin'](_0x56191a);
        let _0x2fb09d = _0x1be973;
        for (let _0x1d07f8 = 0x0; _0x1d07f8 < _0x5e06ff['length']; _0x1d07f8 += 0x2) {
            const _0x4215c6 = _0x5e06ff[_0x1d07f8], _0x20bc91 = _0x5e06ff[_0x1d07f8 + 0x1];
            const _0x4dc45e = _0x4215c6 * _0x1f8af8, _0x59312b = _0x20bc91 * _0x1f8af8;
            const _0x42747a = _0x4dc45e + _0x1f8af8, _0x32896c = _0x59312b + _0x1f8af8;
            const _0x48624d = _0x4dc45e + _0x1f8af8 * 0.5, _0x35e213 = _0x59312b + _0x1f8af8 * 0.5;
            const _0x574a83 = Math['abs'](_0x48624d - _0x43d73e) + Math['abs'](_0x35e213 - _0x2051e9);
            if (_0x574a83 > _0x2fb09d + _0x1f8af8 * 1.5)
                continue;
            let _0x582dfa, _0x18a463, _0x40702d;
            _0x582dfa = -_0x2684bc * _0x1f8af8;
            if (Math['abs'](_0x582dfa) >= 1e-10) {
                _0x18a463 = -(_0x59312b - _0x2051e9) * _0x1f8af8 / _0x582dfa;
                _0x40702d = ((_0x4dc45e - _0x43d73e) * _0x2684bc - (_0x59312b - _0x2051e9) * _0x20ce11) / _0x582dfa;
                if (_0x18a463 > 0.001 && _0x40702d >= 0x0 && _0x40702d <= 0x1 && _0x18a463 < _0x2fb09d)
                    _0x2fb09d = _0x18a463;
            }
            _0x582dfa = _0x20ce11 * _0x1f8af8;
            if (Math['abs'](_0x582dfa) >= 1e-10) {
                _0x18a463 = (_0x42747a - _0x43d73e) * _0x1f8af8 / _0x582dfa;
                _0x40702d = ((_0x42747a - _0x43d73e) * _0x2684bc - (_0x59312b - _0x2051e9) * _0x20ce11) / _0x582dfa;
                if (_0x18a463 > 0.001 && _0x40702d >= 0x0 && _0x40702d <= 0x1 && _0x18a463 < _0x2fb09d)
                    _0x2fb09d = _0x18a463;
            }
            _0x582dfa = _0x2684bc * _0x1f8af8;
            if (Math['abs'](_0x582dfa) >= 1e-10) {
                _0x18a463 = (_0x32896c - _0x2051e9) * _0x1f8af8 / _0x582dfa;
                _0x40702d = ((_0x42747a - _0x43d73e) * _0x2684bc - (_0x32896c - _0x2051e9) * _0x20ce11) / _0x582dfa;
                if (_0x18a463 > 0.001 && _0x40702d >= 0x0 && _0x40702d <= 0x1 && _0x18a463 < _0x2fb09d)
                    _0x2fb09d = _0x18a463;
            }
            _0x582dfa = -_0x20ce11 * _0x1f8af8;
            if (Math['abs'](_0x582dfa) >= 1e-10) {
                _0x18a463 = -(_0x4dc45e - _0x43d73e) * _0x1f8af8 / _0x582dfa;
                _0x40702d = ((_0x4dc45e - _0x43d73e) * _0x2684bc - (_0x59312b - _0x2051e9) * _0x20ce11) / _0x582dfa;
                if (_0x18a463 > 0.001 && _0x40702d >= 0x0 && _0x40702d <= 0x1 && _0x18a463 < _0x2fb09d)
                    _0x2fb09d = _0x18a463;
            }
        }
        const _0x420f29 = _0x2fb09d < _0x1be973 ? _0x2fb09d + 0x2 : _0x2fb09d;
        return {
            'x': _0x43d73e + _0x20ce11 * _0x420f29,
            'y': _0x2051e9 + _0x2684bc * _0x420f29
        };
    };
    const _0x2eeeb8 = [];
    for (let _0x48620f = 0x0; _0x48620f < _0xb02606['length']; _0x48620f++) {
        const _0xb73423 = _0x3ab838(_0xb02606[_0x48620f]);
        _0x2eeeb8['push'](_0xb73423['x'], _0xb73423['y']);
    }
    _0xd66084['polygon'] = _0x2eeeb8['length'] >= 0x6 ? _0x2eeeb8 : null;
}
function _0x396986(_0x13a68f, _0x28763a, _0x3d7193) {
    if (_0x1b8ecb['isDead'])
        return;
    if (!_0x5a5545)
        return;
    const {
        floorTiles: _0x263044,
        wallTiles: _0x122006
    } = _0x5a5545;
    if (_0x263044['length'] === 0x0)
        return;
    const _0x3671b6 = _0x4d0158['SHADOW'];
    const _0x20cbf4 = _0x4d0158['MAP']['tileSize'];
    const _0x2ab0c7 = _0x4d0158['CAMERA']['width'];
    const _0xdf7275 = _0x4d0158['CAMERA']['height'];
    if (!_0x4d0158['SHADOW']['_buf'] || _0x4d0158['SHADOW']['_buf']['width'] !== _0x2ab0c7 || _0x4d0158['SHADOW']['_buf']['height'] !== _0xdf7275) {
        _0x4d0158['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x4d0158['SHADOW']['_buf']['width'] = _0x2ab0c7;
        _0x4d0158['SHADOW']['_buf']['height'] = _0xdf7275;
    }
    const _0x38ba6a = _0x4d0158['SHADOW']['_buf'];
    const _0x34c6e8 = _0x38ba6a['getContext']('2d');
    _0x34c6e8['clearRect'](0x0, 0x0, _0x2ab0c7, _0xdf7275);
    const _0x55d175 = _0x1b8ecb['x'] + _0x1b8ecb['width'] / 0x2;
    const _0x483fda = _0x1b8ecb['y'] + _0x1b8ecb['height'] / 0x2;
    const _0x43410f = Math['floor'](_0x55d175 / _0x20cbf4);
    const _0x370450 = Math['floor'](_0x483fda / _0x20cbf4);
    _0x34c6e8['fillStyle'] = 'rgba(0,0,0,0.92)';
    _0x34c6e8['beginPath']();
    for (const {
                c: _0x135711,
                r: _0x2c97f7
            } of _0x263044) {
        if (Math['abs'](_0x135711 - _0x43410f) > 0x7 || Math['abs'](_0x2c97f7 - _0x370450) > 0x7)
            continue;
        const _0x4d4242 = Math['round'](_0x135711 * _0x20cbf4 - _0x28763a), _0x554e41 = Math['round'](_0x2c97f7 * _0x20cbf4 - _0x3d7193);
        if (_0x4d4242 > _0x2ab0c7 || _0x554e41 > _0xdf7275 || _0x4d4242 + _0x20cbf4 < 0x0 || _0x554e41 + _0x20cbf4 < 0x0)
            continue;
        _0x34c6e8['rect'](_0x4d4242, _0x554e41, _0x20cbf4 + 0x1, _0x20cbf4 + 0x1);
    }
    _0x34c6e8['fill']();
    if (_0x122006['length'] > 0x0) {
        _0x34c6e8['globalCompositeOperation'] = 'destination-out';
        _0x34c6e8['fillStyle'] = 'rgba(0,0,0,1)';
        _0x34c6e8['beginPath']();
        for (const {
                    c: _0x1a63c7,
                    r: _0x4ebee3
                } of _0x122006) {
            if (Math['abs'](_0x1a63c7 - _0x43410f) > 0x7 || Math['abs'](_0x4ebee3 - _0x370450) > 0x7)
                continue;
            const _0x194989 = Math['round'](_0x1a63c7 * _0x20cbf4 - _0x28763a), _0x23759d = Math['round'](_0x4ebee3 * _0x20cbf4 - _0x3d7193);
            if (_0x194989 > _0x2ab0c7 || _0x23759d > _0xdf7275 || _0x194989 + _0x20cbf4 < 0x0 || _0x23759d + _0x20cbf4 < 0x0)
                continue;
            _0x34c6e8['rect'](_0x194989, _0x23759d, _0x20cbf4, _0x20cbf4);
        }
        _0x34c6e8['fill']();
        _0x34c6e8['globalCompositeOperation'] = 'source-over';
    }
    if (_0x3671b6['polygon'] && _0x3671b6['polygon']['length'] >= 0x6) {
        _0x34c6e8['globalCompositeOperation'] = 'destination-out';
        const _0x2908f4 = _0x3671b6['polygon'];
        _0x34c6e8['beginPath']();
        _0x34c6e8['moveTo'](_0x2908f4[0x0] - _0x28763a, _0x2908f4[0x1] - _0x3d7193);
        for (let _0x186983 = 0x2; _0x186983 < _0x2908f4['length']; _0x186983 += 0x2) {
            _0x34c6e8['lineTo'](_0x2908f4[_0x186983] - _0x28763a, _0x2908f4[_0x186983 + 0x1] - _0x3d7193);
        }
        _0x34c6e8['closePath']();
        _0x34c6e8['fill']();
        _0x34c6e8['globalCompositeOperation'] = 'source-over';
    }
    _0x13a68f['drawImage'](_0x38ba6a, 0x0, 0x0);
}
function _0x136ee3(_0x4c356f) {
    let _0x1b04f7 = 0x0, _0x42471e = 0x0;
    const _0x4e8040 = _0x4d0158['INPUTS']['mouseX'] / _0x4d0158['SYSTEM']['viewScale'];
    const _0xa10ec0 = _0x4d0158['INPUTS']['mouseY'] / _0x4d0158['SYSTEM']['viewScale'];
    const _0x4f76d5 = _0x1b8ecb['x'] - _0x4d0158['CAMERA']['x'] + _0x1b8ecb['width'] / 0x2;
    const _0x41ff38 = _0x1b8ecb['y'] - _0x4d0158['CAMERA']['y'] + _0x1b8ecb['height'] / 0x2;
    const _0x7c3e76 = Math['atan2'](_0xa10ec0 - _0x41ff38, _0x4e8040 - _0x4f76d5);
    if (_0x5558bb !== 0x0 || _0x388a70 !== 0x0) {
        _0x1b04f7 = _0x5558bb;
        _0x42471e = _0x388a70;
    } else if (_0x5aee9c) {
        let _0xd46a34 = 0x0, _0x4b76db = 0x0;
        if (_0x4d0158['INPUTS']['keys']['w'] || _0x4d0158['INPUTS']['keys']['arrowup'])
            _0xd46a34 += 0x1;
        if (_0x4d0158['INPUTS']['keys']['s'] || _0x4d0158['INPUTS']['keys']['arrowdown'])
            _0xd46a34 -= 0x1;
        if (_0x4d0158['INPUTS']['keys']['d'] || _0x4d0158['INPUTS']['keys']['arrowright'])
            _0x4b76db += 0x1;
        if (_0x4d0158['INPUTS']['keys']['a'] || _0x4d0158['INPUTS']['keys']['arrowleft'])
            _0x4b76db -= 0x1;
        if (_0xd46a34 !== 0x0 || _0x4b76db !== 0x0) {
            const _0x117a4e = _0x7c3e76 + Math['atan2'](_0x4b76db, _0xd46a34);
            _0x1b04f7 = Math['cos'](_0x117a4e);
            _0x42471e = Math['sin'](_0x117a4e);
        }
    } else {
        if (_0x4d0158['INPUTS']['keys']['w'] || _0x4d0158['INPUTS']['keys']['arrowup'])
            _0x42471e -= 0x1;
        if (_0x4d0158['INPUTS']['keys']['s'] || _0x4d0158['INPUTS']['keys']['arrowdown'])
            _0x42471e += 0x1;
        if (_0x4d0158['INPUTS']['keys']['a'] || _0x4d0158['INPUTS']['keys']['arrowleft'])
            _0x1b04f7 -= 0x1;
        if (_0x4d0158['INPUTS']['keys']['d'] || _0x4d0158['INPUTS']['keys']['arrowright'])
            _0x1b04f7 += 0x1;
        const _0x4d6da6 = _0x1b04f7 !== 0x0 || _0x42471e !== 0x0;
        if (_0x4d6da6) {
            const _0x2b4a2f = Math['sqrt'](_0x1b04f7 * _0x1b04f7 + _0x42471e * _0x42471e);
            _0x1b04f7 /= _0x2b4a2f;
            _0x42471e /= _0x2b4a2f;
        }
    }
    if (_0x4d0158['GAME_STATE'] === 'NIGHT' && (_0x3eaf94 === 'Skinwalker' || _0x3eaf94 === 'Blackmailer')) {
        if (_0x4d0158['NIGHT_ABILITY_OPEN'] || !_0x4d0158['CURRENT_TARGET']) {
            _0x1b04f7 = 0x0;
            _0x42471e = 0x0;
            _0x1b8ecb['vx'] = 0x0;
            _0x1b8ecb['vy'] = 0x0;
            _0x1b8ecb['x'] = _0x4d0158['MAP']['columns'] * _0x4d0158['MAP']['tileSize'] / 0x2 - _0x1b8ecb['width'] / 0x2;
            _0x1b8ecb['y'] = _0x4d0158['MAP']['rows'] * _0x4d0158['MAP']['tileSize'] / 0x2 - _0x1b8ecb['height'] / 0x2;
        }
    }
    const _0x47eec5 = _0x1b04f7 !== 0x0 || _0x42471e !== 0x0;
    const _0x3ae7c6 = (_0x4d0158['INPUTS']['keys']['shift'] || _0x1edb05 || _0x35379c) && _0x47eec5;
    _0x1b8ecb['bopTimer'] = _0x3ae7c6 ? _0x1b8ecb['bopTimer'] + _0x4c356f : 0x0;
    _0x1b8ecb['scale'] = 0x1 + (_0x1b8ecb['bopTimer'] > 0x0 ? Math['sin'](_0x1b8ecb['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x57f2a1 = Math['pow'](0.001, _0x4c356f);
    const _0x3d422f = _0x3ae7c6 ? 0x74a : 0x5d5;
    _0x1b8ecb['vx'] += _0x1b04f7 * _0x3d422f * _0x4c356f;
    _0x1b8ecb['vy'] += _0x42471e * _0x3d422f * _0x4c356f;
    _0x1b8ecb['vx'] *= _0x57f2a1;
    _0x1b8ecb['vy'] *= _0x57f2a1;
    _0x1b8ecb['x'] += _0x1b8ecb['vx'] * _0x4c356f;
    _0x1b8ecb['y'] += _0x1b8ecb['vy'] * _0x4c356f;
    for (let _0x321458 = 0x0; _0x321458 < 0x3; _0x321458++)
        _0xbd0153();
    for (let _0x5b743d = 0x0; _0x5b743d < 0x2; _0x5b743d++)
        _0x3ef79c();
    for (let _0xd70ba3 = 0x0; _0xd70ba3 < 0x2; _0xd70ba3++)
        _0x2faedd();
    if (_0x1b8ecb['x'] < 0x0)
        _0x1b8ecb['x'] = 0x0;
    if (_0x1b8ecb['y'] < 0x0)
        _0x1b8ecb['y'] = 0x0;
    if (_0x1b8ecb['x'] + _0x1b8ecb['width'] > _0x4d0158['MAP']['columns'] * _0x4d0158['MAP']['tileSize'])
        _0x1b8ecb['x'] = _0x4d0158['MAP']['columns'] * _0x4d0158['MAP']['tileSize'] - _0x1b8ecb['width'];
    if (_0x1b8ecb['y'] + _0x1b8ecb['height'] > _0x4d0158['MAP']['rows'] * _0x4d0158['MAP']['tileSize'])
        _0x1b8ecb['y'] = _0x4d0158['MAP']['rows'] * _0x4d0158['MAP']['tileSize'] - _0x1b8ecb['height'];
    if (_0x2a7a4b) {
        _0x1b8ecb['angle'] = _0x45b89d + Math['PI'] / 0x2;
    } else if (_0x5558bb !== 0x0 || _0x388a70 !== 0x0) {
        _0x1b8ecb['angle'] = Math['atan2'](_0x388a70, _0x5558bb) + Math['PI'] / 0x2;
    } else if (!_0x2d111) {
        _0x1b8ecb['angle'] = _0x7c3e76 + Math['PI'] / 0x2;
    }
    const _0x35f451 = _0x1b8ecb['x'] + _0x1b8ecb['width'] / 0x2 - _0x4d0158['CAMERA']['width'] / 0x2;
    const _0x3e31c4 = _0x1b8ecb['y'] + _0x1b8ecb['height'] / 0x2 - _0x4d0158['CAMERA']['height'] / 0x2;
    if (_0x4d0158['CAMERA']['x'] === null || isNaN(_0x4d0158['CAMERA']['x']) || !isFinite(_0x4d0158['CAMERA']['x'])) {
        _0x4d0158['CAMERA']['x'] = _0x35f451;
        _0x4d0158['CAMERA']['y'] = _0x3e31c4;
    } else {
        const _0xee673a = 0x1 - Math['exp'](-Math['max'](0x0, _0x4c356f) * 0x28);
        _0x4d0158['CAMERA']['x'] += (_0x35f451 - _0x4d0158['CAMERA']['x']) * _0xee673a;
        _0x4d0158['CAMERA']['y'] += (_0x3e31c4 - _0x4d0158['CAMERA']['y']) * _0xee673a;
    }
    for (const _0x54822d in _0xc68604) {
        const _0x3ed886 = _0xc68604[_0x54822d];
        if (_0x3ed886['renderX'] === undefined) {
            _0x3ed886['renderX'] = _0x3ed886['x'];
            _0x3ed886['renderY'] = _0x3ed886['y'];
            _0x3ed886['renderAngle'] = _0x3ed886['angle'] || 0x0;
        }
        const _0x3d8b33 = _0x3ed886['x'] + (_0x3ed886['vx'] || 0x0) * _0x4c356f;
        const _0x5e41d3 = _0x3ed886['y'] + (_0x3ed886['vy'] || 0x0) * _0x4c356f;
        _0x3ed886['x'] = _0x3d8b33;
        _0x3ed886['y'] = _0x5e41d3;
        const _0xf52ca5 = 0x1 - Math['exp'](-_0x4c356f * 0x12);
        const _0x4047b8 = _0x3ed886['x'] - _0x3ed886['renderX'], _0x12a949 = _0x3ed886['y'] - _0x3ed886['renderY'];
        const _0x39a98d = Math['sqrt'](_0x4047b8 * _0x4047b8 + _0x12a949 * _0x12a949);
        const _0x1c11f9 = 0xc8;
        if (_0x39a98d > _0x1c11f9) {
            _0x3ed886['renderX'] = _0x3ed886['x'] - _0x4047b8 / _0x39a98d * _0x1c11f9;
            _0x3ed886['renderY'] = _0x3ed886['y'] - _0x12a949 / _0x39a98d * _0x1c11f9;
        }
        _0x3ed886['renderX'] += (_0x3ed886['x'] - _0x3ed886['renderX']) * _0xf52ca5;
        _0x3ed886['renderY'] += (_0x3ed886['y'] - _0x3ed886['renderY']) * _0xf52ca5;
        let _0x67d525 = (_0x3ed886['angle'] || 0x0) - _0x3ed886['renderAngle'];
        while (_0x67d525 < -Math['PI'])
            _0x67d525 += Math['PI'] * 0x2;
        while (_0x67d525 > Math['PI'])
            _0x67d525 -= Math['PI'] * 0x2;
        _0x3ed886['renderAngle'] += _0x67d525 * (0x1 - Math['exp'](-_0x4c356f * 0x14));
    }
    if (_0x4d0158['GAME_STATE'] === 'NIGHT') {
        _0x2ef132 = Math['min'](0.6, _0x2ef132 + _0x4c356f * 0.5);
    } else {
        _0x2ef132 = Math['max'](0x0, _0x2ef132 - _0x4c356f * 0.5);
    }
    if (_0x1fce41 > 0x0) {
        if (performance['now']() > _0x50e3cd) {
            _0x1fce41 = Math['max'](0x0, _0x1fce41 - _0x4c356f * 0x2);
        }
    }
    _0x287df6();
    _0x2c10ed();
}
function _0x5a99a0(_0x4577e5, _0x304c7e, _0x2f8aba, _0x4eeba0, _0x479f28 = !![]) {
    _0x4577e5['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x160703 = _0x4577e5['measureText'](_0x304c7e)['width'];
    const _0x5e7911 = _0x160703 + 0x18;
    const _0x3ae53c = 0x1c;
    _0x4577e5['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x4577e5['beginPath']();
    if (_0x4577e5['roundRect']) {
        _0x4577e5['roundRect'](_0x2f8aba - _0x5e7911 / 0x2, _0x4eeba0 - _0x3ae53c, _0x5e7911, _0x3ae53c, 0x6);
    } else {
        _0x4577e5['rect'](_0x2f8aba - _0x5e7911 / 0x2, _0x4eeba0 - _0x3ae53c, _0x5e7911, _0x3ae53c);
    }
    _0x4577e5['fill']();
    if (_0x479f28) {
        _0x4577e5['beginPath']();
        _0x4577e5['moveTo'](_0x2f8aba - 0x6, _0x4eeba0);
        _0x4577e5['lineTo'](_0x2f8aba + 0x6, _0x4eeba0);
        _0x4577e5['lineTo'](_0x2f8aba, _0x4eeba0 + 0x6);
        _0x4577e5['fill']();
    }
    _0x4577e5['fillStyle'] = '#ffffff';
    _0x4577e5['textAlign'] = 'center';
    _0x4577e5['textBaseline'] = 'middle';
    _0x4577e5['fillText'](_0x304c7e, _0x2f8aba, _0x4eeba0 - _0x3ae53c / 0x2 + 0x1);
}
function _0x570bd1(_0x44c3d7, _0x1ab6bc, _0x57c815, _0x1890d1) {
    if (!_0x1ab6bc || _0x1ab6bc['length'] === 0x0)
        return;
    let _0x18afd7 = _0x1890d1;
    for (let _0x3cf3c0 = 0x0; _0x3cf3c0 < _0x1ab6bc['length']; _0x3cf3c0++) {
        _0x5a99a0(_0x44c3d7, _0x1ab6bc[_0x3cf3c0]['text'], _0x57c815, _0x18afd7, _0x3cf3c0 === 0x0);
        _0x18afd7 -= 0x24;
    }
}
function _0x5741c9() {
    if (!_0x4d0158['SYSTEM']['isReady'])
        return;
    if (_0x4d0158['MAP']['layers'] && _0x4d0158['MAP']['layers']['length'] > 0x0 && _0x1b7376['complete'] && _0x1b7376['naturalWidth'] > 0x0) {
        if (!_0x4d0158['MAP']['_prerenderedWithTileset'] || !_0x4d0158['MAP']['bgChunks'] || _0x4d0158['MAP']['bgChunks']['length'] === 0x0) {
            _0x27ddc8();
        }
    }
    if (!_0x4d0158['MAP']['bgChunks'] || _0x4d0158['MAP']['bgChunks']['length'] === 0x0 || !_0x4d0158['MAP']['bgChunks'][0x0] || _0x4d0158['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x35f9d8['fillStyle'] = '#000000';
    _0x35f9d8['fillRect'](0x0, 0x0, _0x25e480['width'], _0x25e480['height']);
    _0x35f9d8['save']();
    try {
        _0x35f9d8['scale'](_0x4d0158['SYSTEM']['viewScale'], _0x4d0158['SYSTEM']['viewScale']);
        _0x35f9d8['imageSmoothingEnabled'] = ![];
        const _0x149330 = Math['floor'](_0x4d0158['CAMERA']['x'] || 0x0);
        const _0x46b21b = Math['floor'](_0x4d0158['CAMERA']['y'] || 0x0);
        const _0x72d490 = Math['max'](0x0, Math['floor'](_0x149330 / _0x4d0158['MAP']['chunkSize']));
        const _0x1936d8 = Math['min'](_0x4d0158['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x149330 + _0x4d0158['CAMERA']['width']) / _0x4d0158['MAP']['chunkSize']));
        const _0x4d39c6 = Math['max'](0x0, Math['floor'](_0x46b21b / _0x4d0158['MAP']['chunkSize']));
        const _0x278285 = Math['min'](_0x4d0158['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x46b21b + _0x4d0158['CAMERA']['height']) / _0x4d0158['MAP']['chunkSize']));
        for (let _0x202763 = _0x4d39c6; _0x202763 <= _0x278285; _0x202763++)
            for (let _0x19e0b1 = _0x72d490; _0x19e0b1 <= _0x1936d8; _0x19e0b1++) {
                const _0x48a6cd = _0x19e0b1 * _0x4d0158['MAP']['chunkSize'] - _0x149330;
                const _0x252be9 = _0x202763 * _0x4d0158['MAP']['chunkSize'] - _0x46b21b;
                _0x35f9d8['drawImage'](_0x4d0158['MAP']['bgChunks'][_0x202763][_0x19e0b1], _0x48a6cd, _0x252be9, _0x4d0158['MAP']['chunkSize'] + 0x1, _0x4d0158['MAP']['chunkSize'] + 0x1);
            }
        const _0x279176 = _0x534bd2('assets/blood\x20splatter.png');
        if (_0x4ff955 && _0x4ff955['length'] > 0x0) {
            for (const _0xc54107 of _0x4ff955) {
                const _0x3a25f5 = _0xc54107['x'] - _0x149330;
                const _0x372b48 = _0xc54107['y'] - _0x46b21b;
                if (_0x279176['complete'] && _0x279176['naturalWidth'] > 0x0) {
                    _0x35f9d8['drawImage'](_0x279176, _0x3a25f5 - 0x20, _0x372b48 - 0x20, 0x40, 0x40);
                } else {
                    _0x35f9d8['fillStyle'] = 'rgba(160,\x200,\x200,\x200.75)';
                    _0x35f9d8['beginPath']();
                    _0x35f9d8['arc'](_0x3a25f5, _0x372b48, 0x16, 0x0, Math['PI'] * 0x2);
                    _0x35f9d8['fill']();
                }
            }
        }
        const _0x2d8395 = _0x534bd2('assets/blood.png');
        if (_0x41b55a && _0x41b55a['length'] > 0x0) {
            for (const _0x4b72f7 of _0x41b55a) {
                const _0x191701 = _0x4b72f7['x'] - _0x149330;
                const _0xad3b6f = _0x4b72f7['y'] - _0x46b21b;
                if (_0x2d8395['complete'] && _0x2d8395['naturalWidth'] > 0x0) {
                    _0x35f9d8['drawImage'](_0x2d8395, _0x191701 - 0xc, _0xad3b6f - 0xc, 0x18, 0x18);
                } else {
                    _0x35f9d8['fillStyle'] = 'rgba(180,\x200,\x200,\x200.8)';
                    _0x35f9d8['beginPath']();
                    _0x35f9d8['arc'](_0x191701, _0xad3b6f, 0x5, 0x0, Math['PI'] * 0x2);
                    _0x35f9d8['fill']();
                }
            }
        }
        if (_0x4c9f97['complete'] && _0x4c9f97['naturalWidth'] > 0x0) {
            const _0x5a0eb4 = _0x4d0158['MAP']['tileSize'];
            const _0x35eb70 = _0x5a0eb4 * 0xa;
            const _0x3c0ecf = _0x4d0158['MAP']['columns'] / 0x2 * _0x5a0eb4 - _0x35eb70 / 0x2 - _0x149330;
            const _0x516033 = _0x4d0158['MAP']['rows'] / 0x2 * _0x5a0eb4 - _0x35eb70 / 0x2 - _0x46b21b;
            _0x35f9d8['imageSmoothingEnabled'] = ![];
            _0x35f9d8['drawImage'](_0x4c9f97, _0x3c0ecf, _0x516033, _0x35eb70, _0x35eb70);
        }
        if (_0xbcb888['complete'] && _0xbcb888['naturalWidth'] > 0x0) {
            _0x4d0158['ENTITIES']['forEach'](_0x57f965 => {
                if (_0x57f965['type'] !== 'table')
                    return;
                _0x35f9d8['save']();
                _0x35f9d8['imageSmoothingEnabled'] = ![];
                const _0x2d9a9a = _0xbcb888['naturalWidth'] >= _0xbcb888['naturalHeight'];
                const _0x39ce15 = _0x57f965['w'] >= _0x57f965['h'];
                if (_0x2d9a9a === _0x39ce15) {
                    _0x35f9d8['drawImage'](_0xbcb888, _0x57f965['x'] - _0x149330, _0x57f965['y'] - _0x46b21b, _0x57f965['w'], _0x57f965['h']);
                } else {
                    _0x35f9d8['translate'](_0x57f965['x'] - _0x149330 + _0x57f965['w'] / 0x2, _0x57f965['y'] - _0x46b21b + _0x57f965['h'] / 0x2);
                    _0x35f9d8['rotate'](Math['PI'] / 0x2);
                    _0x35f9d8['drawImage'](_0xbcb888, -_0x57f965['h'] / 0x2, -_0x57f965['w'] / 0x2, _0x57f965['h'], _0x57f965['w']);
                }
                _0x35f9d8['restore']();
            });
        } else {
            _0x4d0158['ENTITIES']['forEach'](_0x415fc3 => {
                if (_0x415fc3['type'] !== 'table')
                    return;
                _0x35f9d8['save']();
                _0x35f9d8['fillStyle'] = '#6b4423';
                _0x35f9d8['fillRect'](_0x415fc3['x'] - _0x149330, _0x415fc3['y'] - _0x46b21b, _0x415fc3['w'], _0x415fc3['h']);
                _0x35f9d8['strokeStyle'] = '#422810';
                _0x35f9d8['lineWidth'] = 0x3;
                _0x35f9d8['strokeRect'](_0x415fc3['x'] - _0x149330 + 0x1, _0x415fc3['y'] - _0x46b21b + 0x1, _0x415fc3['w'] - 0x2, _0x415fc3['h'] - 0x2);
                _0x35f9d8['fillStyle'] = '#82532a';
                _0x35f9d8['fillRect'](_0x415fc3['x'] - _0x149330 + 0x4, _0x415fc3['y'] - _0x46b21b + 0x4, _0x415fc3['w'] - 0x8, _0x415fc3['h'] - 0x8);
                _0x35f9d8['restore']();
            });
        }
        if (_0x5b2b13) {
            if (_0x4d0158['MAP']['wallChunks'] && _0x4d0158['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x46199d = _0x4d39c6; _0x46199d <= _0x278285; _0x46199d++) {
                    for (let _0x5c1ac2 = _0x72d490; _0x5c1ac2 <= _0x1936d8; _0x5c1ac2++) {
                        if (!_0x4d0158['MAP']['wallChunks'][_0x46199d] || !_0x4d0158['MAP']['wallChunks'][_0x46199d][_0x5c1ac2])
                            continue;
                        const _0x4c447b = _0x5c1ac2 * _0x4d0158['MAP']['chunkSize'] - _0x149330;
                        const _0x1e4c6f = _0x46199d * _0x4d0158['MAP']['chunkSize'] - _0x46b21b;
                        _0x35f9d8['drawImage'](_0x4d0158['MAP']['wallChunks'][_0x46199d][_0x5c1ac2], _0x4c447b, _0x1e4c6f, _0x4d0158['MAP']['chunkSize'] + 0x1, _0x4d0158['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x490e34 = _0x4d39c6; _0x490e34 <= _0x278285; _0x490e34++) {
                for (let _0x1d55b6 = _0x72d490; _0x1d55b6 <= _0x1936d8; _0x1d55b6++) {
                    const _0x10a95e = _0x1d55b6 * _0x4d0158['MAP']['chunkSize'] - _0x149330;
                    const _0x4c384a = _0x490e34 * _0x4d0158['MAP']['chunkSize'] - _0x46b21b;
                    _0x35f9d8['drawImage'](_0x4d0158['MAP']['fgChunks'][_0x490e34][_0x1d55b6], _0x10a95e, _0x4c384a, _0x4d0158['MAP']['chunkSize'] + 0x1, _0x4d0158['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x4c10ae = _0x4d0158['GAME_STATE'] === 'NIGHT' && (_0x3eaf94 === 'Skinwalker' || _0x3eaf94 === 'Blackmailer') && !_0x1b8ecb['isDead'];
        const _0x1be061 = _0x1b8ecb['x'] - _0x149330 + _0x1b8ecb['width'] / 0x2;
        const _0x27f0f9 = _0x1b8ecb['y'] - _0x46b21b + _0x1b8ecb['height'] / 0x2;
        const _0x455793 = _0x1b8ecb['width'] * _0x1b8ecb['scale'] * 1.3;
        const _0x1d3df0 = _0x1b8ecb['height'] * _0x1b8ecb['scale'] * 1.3;
        const _0xfeb59 = _0x534bd2('assets/arrow.png');
        const _0x21d8b4 = _0x534bd2('assets/tape.png');
        for (const _0xf11767 in _0xc68604) {
            const _0x43982d = _0xc68604[_0xf11767];
            if (_0x43982d['isDead'])
                continue;
            const _0x485f68 = parseInt(_0xf11767);
            const _0x2a47fc = (_0x43982d['renderX'] ?? _0x43982d['x']) - _0x149330 + _0x43982d['width'] / 0x2;
            const _0x312162 = (_0x43982d['renderY'] ?? _0x43982d['y']) - _0x46b21b + _0x43982d['height'] / 0x2;
            const _0x2cc402 = Math['min'](0x2, Math['max'](0.3, _0x43982d['scale'] || 0x1));
            const _0x2c461b = _0x43982d['width'] * _0x2cc402 * 1.3;
            const _0x131dfa = _0x43982d['height'] * _0x2cc402 * 1.3;
            _0x35f9d8['save']();
            try {
                _0x35f9d8['translate'](_0x2a47fc, _0x312162);
                _0x35f9d8['rotate'](_0x43982d['renderAngle'] ?? 0x0);
                if (_0x43982d['isDark'])
                    _0x35f9d8['filter'] = 'brightness(0)';
                _0x4f2f81(_0x35f9d8, _0x43982d['body'], _0x43982d['eyes'], _0x2c461b, _0x131dfa);
                if (_0x3a4dd1['has'](_0x485f68) && _0x2df74b['complete'] && _0x2df74b['naturalWidth'] > 0x0) {
                    _0x35f9d8['drawImage'](_0x2df74b, -_0x2c461b / 0x2, -_0x131dfa / 0x2, _0x2c461b, _0x131dfa);
                }
                if (_0x43982d['hasArrow'] && _0x4d0158['GAME_STATE'] === 'NIGHT' && _0xfeb59['complete'] && _0xfeb59['naturalWidth'] > 0x0) {
                    _0x35f9d8['drawImage'](_0xfeb59, -_0x2c461b / 0x2, -_0x131dfa / 0x2, _0x2c461b, _0x131dfa);
                }
                if ((_0x43982d['isBlackmailed'] || _0x4c5632['has'](_0x485f68)) && _0x21d8b4['complete'] && _0x21d8b4['naturalWidth'] > 0x0) {
                    _0x35f9d8['drawImage'](_0x21d8b4, -_0x2c461b / 0x2, -_0x131dfa / 0x2, _0x2c461b, _0x131dfa);
                }
                if (_0x43982d['isDark'])
                    _0x35f9d8['filter'] = 'none';
            } finally {
                _0x35f9d8['restore']();
            }
            if (!_0x203147((_0x43982d['renderX'] ?? _0x43982d['x']) + _0x43982d['width'] / 0x2, (_0x43982d['renderY'] ?? _0x43982d['y']) + _0x43982d['height'] / 0x2)) {
                _0x35f9d8['textAlign'] = 'center';
                _0x35f9d8['lineJoin'] = 'round';
                _0x35f9d8['lineWidth'] = 0x3;
                _0x35f9d8['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x35f9d8['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x36227d = '#ffffff';
                if (_0x43982d['isBlackmailed'] || _0x4c5632['has'](_0x485f68)) {
                    _0x36227d = '#ff4444';
                } else if (_0x3a4dd1['has'](_0x485f68)) {
                    _0x36227d = '#cc88ff';
                }
                _0x35f9d8['fillStyle'] = _0x36227d;
                const _0x180340 = _0x43982d['isDark'] ? '???' : _0x43982d['name'] + (_0x43982d['isOwner'] ? '\x20[🗝️]' : '');
                _0x35f9d8['strokeText'](_0x180340, _0x2a47fc, _0x312162 - _0x131dfa / 0x2 - 0x10);
                _0x35f9d8['fillText'](_0x180340, _0x2a47fc, _0x312162 - _0x131dfa / 0x2 - 0x10);
            }
        }
        if (!_0x1b8ecb['isDead']) {
            _0x35f9d8['save']();
            try {
                _0x35f9d8['translate'](_0x1be061, _0x27f0f9);
                _0x35f9d8['rotate'](_0x1b8ecb['angle']);
                if (_0x4c10ae)
                    _0x35f9d8['filter'] = 'brightness(0)';
                _0x4f2f81(_0x35f9d8, _0x5c60bb, _0x271236, _0x455793, _0x1d3df0);
                if (_0x3a4dd1['has'](_0x56e65e) && _0x2df74b['complete'] && _0x2df74b['naturalWidth'] > 0x0) {
                    _0x35f9d8['drawImage'](_0x2df74b, -_0x455793 / 0x2, -_0x1d3df0 / 0x2, _0x455793, _0x1d3df0);
                }
                if (_0x1b8ecb['hasArrow'] && _0x4d0158['GAME_STATE'] === 'NIGHT' && _0xfeb59['complete'] && _0xfeb59['naturalWidth'] > 0x0) {
                    _0x35f9d8['drawImage'](_0xfeb59, -_0x455793 / 0x2, -_0x1d3df0 / 0x2, _0x455793, _0x1d3df0);
                }
                if (_0x4c5632['has'](_0x56e65e) && _0x21d8b4['complete'] && _0x21d8b4['naturalWidth'] > 0x0) {
                    _0x35f9d8['drawImage'](_0x21d8b4, -_0x455793 / 0x2, -_0x1d3df0 / 0x2, _0x455793, _0x1d3df0);
                }
                if (_0x4c10ae)
                    _0x35f9d8['filter'] = 'none';
            } finally {
                _0x35f9d8['restore']();
            }
            if (!_0x203147(_0x1b8ecb['x'] + _0x1b8ecb['width'] / 0x2, _0x1b8ecb['y'] + _0x1b8ecb['height'] / 0x2)) {
                _0x35f9d8['textAlign'] = 'center';
                _0x35f9d8['lineJoin'] = 'round';
                _0x35f9d8['lineWidth'] = 0x3;
                _0x35f9d8['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x35f9d8['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x4577a5 = '#ffffff';
                if (_0x4c5632['has'](_0x56e65e)) {
                    _0x4577a5 = '#ff4444';
                } else if (_0x3a4dd1['has'](_0x56e65e)) {
                    _0x4577a5 = '#cc88ff';
                }
                _0x35f9d8['fillStyle'] = _0x4577a5;
                const _0x10fc54 = _0x4c10ae ? '???' : _0x3abcfd + (_0x5e9321 ? '\x20[🗝️]' : '');
                _0x35f9d8['strokeText'](_0x10fc54, _0x1be061, _0x27f0f9 - _0x1d3df0 / 0x2 - 0x10);
                _0x35f9d8['fillText'](_0x10fc54, _0x1be061, _0x27f0f9 - _0x1d3df0 / 0x2 - 0x10);
            }
        }
        if (_0x4d0158['MAP']['wallChunks'] && _0x4d0158['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x25afcd = _0x4d39c6; _0x25afcd <= _0x278285; _0x25afcd++)
                for (let _0x50611f = _0x72d490; _0x50611f <= _0x1936d8; _0x50611f++) {
                    if (!_0x4d0158['MAP']['wallChunks'][_0x25afcd] || !_0x4d0158['MAP']['wallChunks'][_0x25afcd][_0x50611f])
                        continue;
                    const _0x42cd8e = _0x50611f * _0x4d0158['MAP']['chunkSize'] - _0x149330;
                    const _0x4d6952 = _0x25afcd * _0x4d0158['MAP']['chunkSize'] - _0x46b21b;
                    _0x35f9d8['drawImage'](_0x4d0158['MAP']['wallChunks'][_0x25afcd][_0x50611f], _0x42cd8e, _0x4d6952, _0x4d0158['MAP']['chunkSize'] + 0x1, _0x4d0158['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x43c2d1 of _0x4d0158['ENTITIES']) {
            if (_0x43c2d1['type'] !== 'npc')
                continue;
            const _0x12d758 = _0x43c2d1['x'] - _0x149330 + _0x43c2d1['w'] / 0x2;
            const _0x2ae568 = _0x43c2d1['y'] - _0x46b21b + _0x43c2d1['h'] / 0x2;
            const _0xa383fe = _0x43c2d1['w'];
            const _0x560035 = _0x43c2d1['h'];
            _0x35f9d8['save']();
            _0x35f9d8['translate'](_0x12d758, _0x2ae568);
            _0x35f9d8['rotate'](_0x43c2d1['angle'] !== undefined ? _0x43c2d1['angle'] : 0x0);
            _0x4f2f81(_0x35f9d8, _0x43c2d1['body'] || 'yanito932.png', _0x43c2d1['eyes'], _0xa383fe, _0x560035);
            _0x35f9d8['restore']();
            _0x35f9d8['textAlign'] = 'center';
            _0x35f9d8['lineJoin'] = 'round';
            _0x35f9d8['lineWidth'] = 0x3;
            _0x35f9d8['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x35f9d8['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
            _0x35f9d8['fillStyle'] = '#aaaaaa';
            _0x35f9d8['strokeText'](_0x43c2d1['name'] || 'NPC', _0x12d758, _0x2ae568 - _0x560035 / 0x2 - 0x10);
            _0x35f9d8['fillText'](_0x43c2d1['name'] || 'NPC', _0x12d758, _0x2ae568 - _0x560035 / 0x2 - 0x10);
        }
        if (_0x1b8ecb['isDead']) {
            for (const _0x8914f7 in _0xc68604) {
                const _0x3ff3c4 = _0xc68604[_0x8914f7];
                if (!_0x3ff3c4['isDead'])
                    continue;
                const _0x191e4d = (_0x3ff3c4['renderX'] ?? _0x3ff3c4['x']) - _0x149330 + _0x3ff3c4['width'] / 0x2;
                const _0x2dc6b9 = (_0x3ff3c4['renderY'] ?? _0x3ff3c4['y']) - _0x46b21b + _0x3ff3c4['height'] / 0x2;
                const _0x2a24a2 = _0x3ff3c4['width'] * (_0x3ff3c4['scale'] || 0x1) * 1.3;
                const _0x260997 = _0x3ff3c4['height'] * (_0x3ff3c4['scale'] || 0x1) * 1.3;
                _0x35f9d8['save']();
                try {
                    _0x35f9d8['translate'](_0x191e4d, _0x2dc6b9);
                    _0x35f9d8['rotate'](_0x3ff3c4['renderAngle'] ?? 0x0);
                    _0x35f9d8['globalAlpha'] = 0.3;
                    _0x4f2f81(_0x35f9d8, _0x3ff3c4['body'], _0x3ff3c4['eyes'], _0x2a24a2, _0x260997);
                } finally {
                    _0x35f9d8['restore']();
                }
                if (!_0x203147((_0x3ff3c4['renderX'] ?? _0x3ff3c4['x']) + _0x3ff3c4['width'] / 0x2, (_0x3ff3c4['renderY'] ?? _0x3ff3c4['y']) + _0x3ff3c4['height'] / 0x2)) {
                    _0x35f9d8['save']();
                    _0x35f9d8['globalAlpha'] = 0.3;
                    _0x35f9d8['textAlign'] = 'center';
                    _0x35f9d8['lineJoin'] = 'round';
                    _0x35f9d8['lineWidth'] = 0x3;
                    _0x35f9d8['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x35f9d8['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                    _0x35f9d8['fillStyle'] = '#ffffff';
                    const _0x832243 = _0x3ff3c4['name'] + (_0x3ff3c4['isOwner'] ? '\x20[🗝️]' : '');
                    _0x35f9d8['strokeText'](_0x832243, _0x191e4d, _0x2dc6b9 - _0x260997 / 0x2 - 0x10);
                    _0x35f9d8['fillText'](_0x832243, _0x191e4d, _0x2dc6b9 - _0x260997 / 0x2 - 0x10);
                    _0x35f9d8['restore']();
                }
            }
            _0x35f9d8['save']();
            try {
                _0x35f9d8['translate'](_0x1be061, _0x27f0f9);
                _0x35f9d8['rotate'](_0x1b8ecb['angle']);
                _0x35f9d8['globalAlpha'] = 0.3;
                _0x4f2f81(_0x35f9d8, _0x5c60bb, _0x271236, _0x455793, _0x1d3df0);
            } finally {
                _0x35f9d8['restore']();
            }
            if (!_0x203147(_0x1b8ecb['x'] + _0x1b8ecb['width'] / 0x2, _0x1b8ecb['y'] + _0x1b8ecb['height'] / 0x2)) {
                _0x35f9d8['save']();
                _0x35f9d8['globalAlpha'] = 0.3;
                _0x35f9d8['textAlign'] = 'center';
                _0x35f9d8['lineJoin'] = 'round';
                _0x35f9d8['lineWidth'] = 0x3;
                _0x35f9d8['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x35f9d8['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                _0x35f9d8['fillStyle'] = '#ffffff';
                const _0x18bc9a = _0x3abcfd + (_0x5e9321 ? '\x20[🗝️]' : '');
                _0x35f9d8['strokeText'](_0x18bc9a, _0x1be061, _0x27f0f9 - _0x1d3df0 / 0x2 - 0x10);
                _0x35f9d8['fillText'](_0x18bc9a, _0x1be061, _0x27f0f9 - _0x1d3df0 / 0x2 - 0x10);
                _0x35f9d8['restore']();
            }
        }
        for (let _0x8b6377 = _0x4d39c6; _0x8b6377 <= _0x278285; _0x8b6377++)
            for (let _0x5668eb = _0x72d490; _0x5668eb <= _0x1936d8; _0x5668eb++) {
                const _0x4b3de1 = _0x5668eb * _0x4d0158['MAP']['chunkSize'] - _0x149330;
                const _0x22a12f = _0x8b6377 * _0x4d0158['MAP']['chunkSize'] - _0x46b21b;
                _0x35f9d8['drawImage'](_0x4d0158['MAP']['fgChunks'][_0x8b6377][_0x5668eb], _0x4b3de1, _0x22a12f, _0x4d0158['MAP']['chunkSize'] + 0x1, _0x4d0158['MAP']['chunkSize'] + 0x1);
            }
        if (_0x4d0158['EDITOR']['enabled'] && _0x4d0158['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x209744 = _0x4d0158['INPUTS']['mouseX'] / _0x4d0158['SYSTEM']['viewScale'] + _0x4d0158['CAMERA']['x'];
            const _0x33970a = _0x4d0158['INPUTS']['mouseY'] / _0x4d0158['SYSTEM']['viewScale'] + _0x4d0158['CAMERA']['y'];
            const _0x2ac09c = Math['floor'](_0x209744 / _0x4d0158['MAP']['tileSize']);
            const _0x285217 = Math['floor'](_0x33970a / _0x4d0158['MAP']['tileSize']);
            if (_0x2ac09c >= 0x0 && _0x2ac09c < _0x4d0158['MAP']['columns'] && _0x285217 >= 0x0 && _0x285217 < _0x4d0158['MAP']['rows']) {
                const _0x3a8a60 = _0x2ac09c * _0x4d0158['MAP']['tileSize'] - _0x149330;
                const _0x483019 = _0x285217 * _0x4d0158['MAP']['tileSize'] - _0x46b21b;
                _0x35f9d8['save']();
                _0x35f9d8['globalAlpha'] = 0.5;
                if (_0x4d0158['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x297a7e = _0x4d0158['EDITOR']['selectedTileGid'] - 0x1;
                    _0x35f9d8['drawImage'](_0x1b7376, _0x297a7e % _0x4d0158['MAP']['tilesetCols'] * _0x4d0158['MAP']['tileSize'], Math['floor'](_0x297a7e / _0x4d0158['MAP']['tilesetCols']) * _0x4d0158['MAP']['tileSize'], _0x4d0158['MAP']['tileSize'], _0x4d0158['MAP']['tileSize'], _0x3a8a60, _0x483019, _0x4d0158['MAP']['tileSize'], _0x4d0158['MAP']['tileSize']);
                } else {
                    _0x35f9d8['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x35f9d8['fillRect'](_0x3a8a60, _0x483019, _0x4d0158['MAP']['tileSize'], _0x4d0158['MAP']['tileSize']);
                }
                _0x35f9d8['restore']();
            }
        }
        _0x396986(_0x35f9d8, _0x149330, _0x46b21b);
        if (_0x2ef132 > 0x0) {
            _0x35f9d8['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x2ef132 + ')';
            _0x35f9d8['fillRect'](0x0, 0x0, _0x4d0158['CAMERA']['width'], _0x4d0158['CAMERA']['height']);
        }
        for (const _0x1fb80e in _0xc68604) {
            const _0xb3fd92 = _0xc68604[_0x1fb80e];
            if (_0xb3fd92['isDead'] && !_0x1b8ecb['isDead'])
                continue;
            const _0x448661 = (_0xb3fd92['renderX'] ?? _0xb3fd92['x']) - _0x149330 + _0xb3fd92['width'] / 0x2;
            const _0xf3d6e2 = (_0xb3fd92['renderY'] ?? _0xb3fd92['y']) - _0x46b21b + _0xb3fd92['height'] / 0x2;
            _0x570bd1(_0x35f9d8, _0xb3fd92['chats'], _0x448661, _0xf3d6e2 - _0xb3fd92['height'] / 0x2 - 0x20);
        }
        _0x570bd1(_0x35f9d8, _0x1b8ecb['chats'], _0x1be061, _0x27f0f9 - _0x1b8ecb['height'] / 0x2 - 0x20);
        if (_0x1fce41 > 0x0) {
            _0x35f9d8['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x1fce41 + ')';
            _0x35f9d8['fillRect'](0x0, 0x0, _0x4d0158['CAMERA']['width'], _0x4d0158['CAMERA']['height']);
        }
    } finally {
        _0x35f9d8['restore']();
    }
}
function _0x4983ea(_0x26fde8) {
    if (!_0x4d0158['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x4983ea);
    let _0x13abb6 = (_0x26fde8 - _0x4d0158['SYSTEM']['lastTime']) / 0x3e8;
    _0x4d0158['SYSTEM']['lastTime'] = _0x26fde8;
    if (_0x13abb6 > 0.1)
        _0x13abb6 = 0.1;
    if (_0x13abb6 < 0x0 || isNaN(_0x13abb6))
        _0x13abb6 = 0.016;
    if (_0x5b2b13) {
        _0x2358d2(_0x13abb6);
        _0x5741c9();
        return;
    }
    if (!_0x56e65e)
        return;
    _0x136ee3(_0x13abb6);
    _0x22ef55['tick'](_0x26fde8);
    _0x5741c9();
}
function _0x27ddc8() {
    if (_0x1b7376['complete'] && _0x1b7376['naturalWidth'] > 0x0) {
        _0x4d0158['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x5ae160 = Math['ceil'](_0x4d0158['MAP']['columns'] * _0x4d0158['MAP']['tileSize'] / _0x4d0158['MAP']['chunkSize']);
    const _0x167cc1 = Math['ceil'](_0x4d0158['MAP']['rows'] * _0x4d0158['MAP']['tileSize'] / _0x4d0158['MAP']['chunkSize']);
    _0x4d0158['MAP']['bgChunks'] = [];
    _0x4d0158['MAP']['fgChunks'] = [];
    _0x4d0158['MAP']['wallChunks'] = [];
    for (let _0x6cb94b = 0x0; _0x6cb94b < _0x167cc1; _0x6cb94b++) {
        _0x4d0158['MAP']['bgChunks'][_0x6cb94b] = [];
        _0x4d0158['MAP']['fgChunks'][_0x6cb94b] = [];
        _0x4d0158['MAP']['wallChunks'][_0x6cb94b] = [];
        for (let _0x2b4fc4 = 0x0; _0x2b4fc4 < _0x5ae160; _0x2b4fc4++) {
            const _0x1b4660 = document['createElement']('canvas');
            _0x1b4660['width'] = _0x1b4660['height'] = _0x4d0158['MAP']['chunkSize'];
            const _0x411649 = document['createElement']('canvas');
            _0x411649['width'] = _0x411649['height'] = _0x4d0158['MAP']['chunkSize'];
            const _0x1e1f4a = document['createElement']('canvas');
            _0x1e1f4a['width'] = _0x1e1f4a['height'] = _0x4d0158['MAP']['chunkSize'];
            _0x4d0158['MAP']['bgChunks'][_0x6cb94b][_0x2b4fc4] = _0x1b4660;
            _0x4d0158['MAP']['fgChunks'][_0x6cb94b][_0x2b4fc4] = _0x411649;
            _0x4d0158['MAP']['wallChunks'][_0x6cb94b][_0x2b4fc4] = _0x1e1f4a;
            _0x5d034c(_0x2b4fc4, _0x6cb94b);
        }
    }
}
function _0x5d034c(_0x57a6d1, _0x398a9c) {
    const _0x4cb7de = _0x4d0158['MAP']['bgChunks'][_0x398a9c][_0x57a6d1]['getContext']('2d', { 'alpha': !![] });
    const _0x355e24 = _0x4d0158['MAP']['fgChunks'][_0x398a9c][_0x57a6d1]['getContext']('2d', { 'alpha': !![] });
    const _0x3cbff5 = _0x4d0158['MAP']['wallChunks'][_0x398a9c] && _0x4d0158['MAP']['wallChunks'][_0x398a9c][_0x57a6d1] ? _0x4d0158['MAP']['wallChunks'][_0x398a9c][_0x57a6d1]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x4cb7de['imageSmoothingEnabled'] = _0x355e24['imageSmoothingEnabled'] = ![];
    if (_0x3cbff5)
        _0x3cbff5['imageSmoothingEnabled'] = ![];
    _0x4cb7de['clearRect'](0x0, 0x0, _0x4d0158['MAP']['chunkSize'], _0x4d0158['MAP']['chunkSize']);
    _0x355e24['clearRect'](0x0, 0x0, _0x4d0158['MAP']['chunkSize'], _0x4d0158['MAP']['chunkSize']);
    if (_0x3cbff5)
        _0x3cbff5['clearRect'](0x0, 0x0, _0x4d0158['MAP']['chunkSize'], _0x4d0158['MAP']['chunkSize']);
    const _0x339ca2 = Math['floor'](_0x57a6d1 * _0x4d0158['MAP']['chunkSize'] / _0x4d0158['MAP']['tileSize']);
    const _0x95ddc0 = Math['ceil']((_0x57a6d1 + 0x1) * _0x4d0158['MAP']['chunkSize'] / _0x4d0158['MAP']['tileSize']);
    const _0x1454da = Math['floor'](_0x398a9c * _0x4d0158['MAP']['chunkSize'] / _0x4d0158['MAP']['tileSize']);
    const _0x202152 = Math['ceil']((_0x398a9c + 0x1) * _0x4d0158['MAP']['chunkSize'] / _0x4d0158['MAP']['tileSize']);
    const _0x5cb4ec = 0.5;
    const _0x1e1861 = _0x4d0158['MAP']['tileSize'] - _0x5cb4ec * 0x2;
    _0x4d0158['MAP']['layers']['forEach'](_0x306761 => {
        const _0x300105 = _0x306761['name'] === 'walls';
        const _0x155cdd = _0x306761['name'] === 'trees' ? _0x355e24 : _0x300105 ? _0x3cbff5 || _0x4cb7de : _0x4cb7de;
        for (let _0x48b79a = Math['max'](0x0, _0x1454da); _0x48b79a < Math['min'](_0x4d0158['MAP']['rows'], _0x202152); _0x48b79a++) {
            for (let _0x27027c = Math['max'](0x0, _0x339ca2); _0x27027c < Math['min'](_0x4d0158['MAP']['columns'], _0x95ddc0); _0x27027c++) {
                let _0x542419 = _0x306761['data'][_0x48b79a * _0x4d0158['MAP']['columns'] + _0x27027c];
                if (_0x306761['name'] === 'floor2' && _0x4d0158['MAP']['doors'] && _0x4d0158['MAP']['doors'][_0x48b79a * _0x4d0158['MAP']['columns'] + _0x27027c]) {
                    _0x542419 = 0x2;
                }
                if (_0x542419 > 0x0) {
                    const _0x39e3d1 = _0x542419 - 0x1;
                    const _0x14cae1 = _0x39e3d1 % _0x4d0158['MAP']['tilesetCols'] * _0x4d0158['MAP']['tileSize'] + _0x5cb4ec;
                    const _0x1e9c93 = Math['floor'](_0x39e3d1 / _0x4d0158['MAP']['tilesetCols']) * _0x4d0158['MAP']['tileSize'] + _0x5cb4ec;
                    const _0x5c2dbb = _0x27027c * _0x4d0158['MAP']['tileSize'] - _0x57a6d1 * _0x4d0158['MAP']['chunkSize'];
                    const _0x1e0e07 = _0x48b79a * _0x4d0158['MAP']['tileSize'] - _0x398a9c * _0x4d0158['MAP']['chunkSize'];
                    if (_0x542419 === 0x4) {
                        const _0x4fab83 = 0x1;
                        const _0x3e8b03 = _0x4fab83 % _0x4d0158['MAP']['tilesetCols'] * _0x4d0158['MAP']['tileSize'] + _0x5cb4ec;
                        const _0x429f09 = Math['floor'](_0x4fab83 / _0x4d0158['MAP']['tilesetCols']) * _0x4d0158['MAP']['tileSize'] + _0x5cb4ec;
                        _0x4cb7de['drawImage'](_0x1b7376, _0x3e8b03, _0x429f09, _0x1e1861, _0x1e1861, _0x5c2dbb, _0x1e0e07, _0x4d0158['MAP']['tileSize'], _0x4d0158['MAP']['tileSize']);
                        let _0x7e396e = _0x4d0158['MAP']['doors'] ? _0x4d0158['MAP']['doors'][_0x48b79a * _0x4d0158['MAP']['columns'] + _0x27027c] : null;
                        if (!_0x7e396e) {
                            const _0x47214b = _0x4d0158['MAP']['layers']['find'](_0x4dbd4e => _0x4dbd4e['name'] === 'walls');
                            const _0x290382 = _0x48b79a > 0x0 && _0x47214b && _0x47214b['data'][(_0x48b79a - 0x1) * _0x4d0158['MAP']['columns'] + _0x27027c] > 0x0;
                            const _0x3da1ed = _0x48b79a < _0x4d0158['MAP']['rows'] - 0x1 && _0x47214b && _0x47214b['data'][(_0x48b79a + 0x1) * _0x4d0158['MAP']['columns'] + _0x27027c] > 0x0;
                            const _0x2574cf = _0x27027c > 0x0 && _0x47214b && _0x47214b['data'][_0x48b79a * _0x4d0158['MAP']['columns'] + _0x27027c - 0x1] > 0x0;
                            const _0x4ab943 = _0x27027c < _0x4d0158['MAP']['columns'] - 0x1 && _0x47214b && _0x47214b['data'][_0x48b79a * _0x4d0158['MAP']['columns'] + _0x27027c + 0x1] > 0x0;
                            if (_0x2574cf && _0x4ab943)
                                _0x7e396e = _0x48b79a < _0x4d0158['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x290382 && _0x3da1ed)
                                _0x7e396e = _0x27027c < _0x4d0158['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x503b35 = 0x0;
                        if (_0x7e396e === 'bottom')
                            _0x503b35 = Math['PI'] / 0x2;
                        else if (_0x7e396e === 'left')
                            _0x503b35 = Math['PI'];
                        else if (_0x7e396e === 'top')
                            _0x503b35 = -Math['PI'] / 0x2;
                        else if (_0x7e396e === 'right')
                            _0x503b35 = 0x0;
                        if (_0x503b35 !== 0x0) {
                            _0x155cdd['save']();
                            _0x155cdd['translate'](_0x5c2dbb + _0x4d0158['MAP']['tileSize'] / 0x2, _0x1e0e07 + _0x4d0158['MAP']['tileSize'] / 0x2);
                            _0x155cdd['rotate'](_0x503b35);
                            _0x155cdd['drawImage'](_0x1b7376, _0x14cae1, _0x1e9c93, _0x1e1861, _0x1e1861, -_0x4d0158['MAP']['tileSize'] / 0x2, -_0x4d0158['MAP']['tileSize'] / 0x2, _0x4d0158['MAP']['tileSize'], _0x4d0158['MAP']['tileSize']);
                            _0x155cdd['restore']();
                        } else {
                            _0x155cdd['drawImage'](_0x1b7376, _0x14cae1, _0x1e9c93, _0x1e1861, _0x1e1861, _0x5c2dbb, _0x1e0e07, _0x4d0158['MAP']['tileSize'], _0x4d0158['MAP']['tileSize']);
                        }
                    } else {
                        _0x155cdd['drawImage'](_0x1b7376, _0x14cae1, _0x1e9c93, _0x1e1861, _0x1e1861, _0x5c2dbb, _0x1e0e07, _0x4d0158['MAP']['tileSize'], _0x4d0158['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x4b3ba9() {
    _0x1b7376['crossOrigin'] = 'Anonymous';
    _0x1b7376['onload'] = () => {
        _0x4d0158['MAP']['tilesetCols'] = 0x3;
        if (_0x4d0158['MAP']['columns'] > 0x0 && _0x4d0158['MAP']['layers'] && _0x4d0158['MAP']['layers']['length'] > 0x0) {
            _0x27ddc8();
        }
        _0x21a96f();
    };
    _0x1b7376['onerror'] = () => {
        _0x4d0158['MAP']['tilesetCols'] = 0x1;
        _0x21a96f();
    };
    _0x1b7376['src'] = 'assets/tilesheet.png';
    _0x4c9f97['crossOrigin'] = 'Anonymous';
    _0x4c9f97['onload'] = _0x21a96f;
    _0x4c9f97['onerror'] = () => {
        _0x21a96f();
    };
    _0x4c9f97['src'] = 'assets/center.png';
    _0xbcb888['crossOrigin'] = 'Anonymous';
    _0xbcb888['onload'] = _0x21a96f;
    _0xbcb888['onerror'] = () => {
        _0x21a96f();
    };
    _0xbcb888['src'] = 'assets/table.png';
}
function _0x21a96f() {
    _0x4d0158['SYSTEM']['assetsLoaded']++;
    if (_0x4d0158['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x4d0158['MAP']['columns'] > 0x0 && _0x4d0158['MAP']['layers'] && _0x4d0158['MAP']['layers']['length'] > 0x0) {
            _0x27ddc8();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x2001c3();
    }
}
function _0x3fd90e(_0x4bcc41, _0x3150b6) {
    if (!_0x5e9321 || !_0x43694b)
        return;
    const _0x48c052 = _0x4bcc41 / _0x4d0158['SYSTEM']['viewScale'] + _0x4d0158['CAMERA']['x'];
    const _0x447cea = _0x3150b6 / _0x4d0158['SYSTEM']['viewScale'] + _0x4d0158['CAMERA']['y'];
    const _0x62e3ff = Math['floor'](_0x48c052 / _0x4d0158['MAP']['tileSize']);
    const _0x5b942c = Math['floor'](_0x447cea / _0x4d0158['MAP']['tileSize']);
    if (_0x62e3ff >= 0x0 && _0x62e3ff < _0x4d0158['MAP']['columns'] && _0x5b942c >= 0x0 && _0x5b942c < _0x4d0158['MAP']['rows'])
        _0x43694b['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x4d0158['EDITOR']['selectedLayer'],
            'col': _0x62e3ff,
            'row': _0x5b942c,
            'gid': _0x4d0158['EDITOR']['selectedTileGid']
        }));
}
function _0x1b5f18() {
    const _0xd1a81 = document['getElementById']('palette');
    if (!_0xd1a81 || _0xd1a81['children']['length'] > 0x0)
        return;
    const _0x24d447 = 0x40;
    const _0x5e7f96 = _0x1b7376;
    const _0x286d8c = document['createElement']('div');
    _0x286d8c['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x4235d0 = document['createElement']('canvas');
    _0x4235d0['width'] = 0xc0;
    _0x4235d0['height'] = 0xa0;
    _0x4235d0['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x286d8c['appendChild'](_0x4235d0);
    const _0x4f44e2 = document['createElement']('div');
    _0x4f44e2['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x286d8c['appendChild'](_0x4f44e2);
    let _0x1632b8 = 0x0, _0x1e6082 = 0x0;
    let _0x18861f = ![], _0x1bfc07 = 0x0, _0x2329d6 = 0x0, _0x20f008 = 0x0, _0x534d23 = 0x0;
    function _0x3b13dd() {
        const _0x205678 = _0x4235d0['getContext']('2d');
        _0x205678['clearRect'](0x0, 0x0, _0x4235d0['width'], _0x4235d0['height']);
        _0x205678['imageSmoothingEnabled'] = ![];
        if (_0x5e7f96['complete'] && _0x5e7f96['naturalWidth'] > 0x0) {
            _0x205678['drawImage'](_0x5e7f96, _0x1632b8, _0x1e6082, _0x4235d0['width'], _0x4235d0['height'], 0x0, 0x0, _0x4235d0['width'], _0x4235d0['height']);
        }
        _0x205678['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x205678['lineWidth'] = 0x1;
        const _0x1c5049 = Math['floor'](_0x1632b8 / _0x24d447);
        const _0x35eb27 = Math['floor'](_0x1e6082 / _0x24d447);
        for (let _0x5e23f2 = _0x1c5049; _0x5e23f2 <= _0x1c5049 + Math['ceil'](_0x4235d0['width'] / _0x24d447) + 0x1; _0x5e23f2++) {
            const _0x51dc5b = _0x5e23f2 * _0x24d447 - _0x1632b8;
            _0x205678['beginPath']();
            _0x205678['moveTo'](_0x51dc5b, 0x0);
            _0x205678['lineTo'](_0x51dc5b, _0x4235d0['height']);
            _0x205678['stroke']();
        }
        for (let _0x4d59ce = _0x35eb27; _0x4d59ce <= _0x35eb27 + Math['ceil'](_0x4235d0['height'] / _0x24d447) + 0x1; _0x4d59ce++) {
            const _0x3afde5 = _0x4d59ce * _0x24d447 - _0x1e6082;
            _0x205678['beginPath']();
            _0x205678['moveTo'](0x0, _0x3afde5);
            _0x205678['lineTo'](_0x4235d0['width'], _0x3afde5);
            _0x205678['stroke']();
        }
    }
    function _0x1c9e65() {
        const _0x5f9576 = Math['max'](0x1, Math['ceil'](_0x5e7f96['naturalWidth'] / _0x24d447));
        const _0xfcea84 = _0x4d0158['EDITOR']['selectedTileGid'];
        if (_0xfcea84 <= 0x0) {
            _0x4f44e2['style']['display'] = 'none';
            return;
        }
        const _0x5c6191 = _0xfcea84 - 0x1;
        const _0x44cb68 = _0x5c6191 % _0x5f9576;
        const _0x52bffe = Math['floor'](_0x5c6191 / _0x5f9576);
        const _0x5eab5e = _0x44cb68 * _0x24d447 - _0x1632b8;
        const _0x1f0380 = _0x52bffe * _0x24d447 - _0x1e6082;
        _0x4f44e2['style']['display'] = 'block';
        _0x4f44e2['style']['left'] = _0x5eab5e + 'px';
        _0x4f44e2['style']['top'] = _0x1f0380 + 'px';
    }
    _0x5e7f96['onload'] = () => {
        _0x3b13dd();
        _0x1c9e65();
    };
    if (_0x5e7f96['complete'] && _0x5e7f96['naturalWidth'] > 0x0) {
        _0x3b13dd();
        _0x1c9e65();
    }
    _0x286d8c['addEventListener']('mousedown', _0x522d7f => {
        if (_0x522d7f['button'] === 0x0) {
            _0x18861f = !![];
            _0x1bfc07 = _0x522d7f['clientX'];
            _0x2329d6 = _0x522d7f['clientY'];
            _0x20f008 = _0x1632b8;
            _0x534d23 = _0x1e6082;
            _0x286d8c['style']['cursor'] = 'grabbing';
            _0x522d7f['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x40838a => {
        if (!_0x18861f)
            return;
        const _0x16d9d0 = _0x1bfc07 - _0x40838a['clientX'];
        const _0x1d3114 = _0x2329d6 - _0x40838a['clientY'];
        const _0x27a309 = Math['max'](0x0, _0x5e7f96['naturalWidth'] - _0x4235d0['width']);
        const _0x49859f = Math['max'](0x0, _0x5e7f96['naturalHeight'] - _0x4235d0['height']);
        _0x1632b8 = Math['max'](0x0, Math['min'](_0x27a309, _0x20f008 + _0x16d9d0));
        _0x1e6082 = Math['max'](0x0, Math['min'](_0x49859f, _0x534d23 + _0x1d3114));
        _0x3b13dd();
        _0x1c9e65();
    });
    window['addEventListener']('mouseup', _0xa527e3 => {
        if (_0x18861f) {
            _0x18861f = ![];
            _0x286d8c['style']['cursor'] = 'grab';
        }
    });
    _0x286d8c['addEventListener']('click', _0x577a85 => {
        const _0x4184fe = _0x286d8c['getBoundingClientRect']();
        const _0x169e83 = _0x577a85['clientX'] - _0x4184fe['left'] + _0x1632b8;
        const _0x163c65 = _0x577a85['clientY'] - _0x4184fe['top'] + _0x1e6082;
        const _0x96b5dd = Math['max'](0x1, Math['ceil'](_0x5e7f96['naturalWidth'] / _0x24d447));
        const _0x3864fb = Math['floor'](_0x169e83 / _0x24d447);
        const _0x2a6222 = Math['floor'](_0x163c65 / _0x24d447);
        const _0x1e7a9c = _0x2a6222 * _0x96b5dd + _0x3864fb + 0x1;
        _0x4d0158['EDITOR']['selectedTileGid'] = _0x1e7a9c;
        _0x1c9e65();
    });
    _0xd1a81['appendChild'](_0x286d8c);
    const _0x3b96d8 = document['createElement']('div');
    _0x3b96d8['className'] = 'tile-btn\x20eraser-btn';
    _0x3b96d8['title'] = 'Eraser\x20(gid\x200)';
    _0x3b96d8['onclick'] = () => {
        _0x4d0158['EDITOR']['selectedTileGid'] = 0x0;
        _0x4f44e2['style']['display'] = 'none';
    };
    _0xd1a81['appendChild'](_0x3b96d8);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x4d0158['EDITOR']['enabled'] = !_0x4d0158['EDITOR']['enabled'];
        const _0x24809a = document['getElementById']('editor-tools');
        if (_0x4d0158['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x24809a['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x24809a['style']['display'] = 'none';
        }
    });
    const _0x7da9ea = document['getElementById']('start-game-btn');
    if (_0x7da9ea) {
        _0x7da9ea['addEventListener']('click', () => {
            if (_0x43694b)
                _0x43694b['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x148880 = document['getElementById']('rolelist-toggle-btn');
    if (_0x148880) {
        let _0x4ed3b6 = 'subalignments';
        _0x148880['addEventListener']('click', () => {
            if (_0x4ed3b6 === 'subalignments')
                _0x4ed3b6 = 'precise';
            else if (_0x4ed3b6 === 'precise')
                _0x4ed3b6 = 'off';
            else
                _0x4ed3b6 = 'subalignments';
            _0x148880['innerText'] = 'Role\x20List:\x20' + _0x4ed3b6['charAt'](0x0)['toUpperCase']() + _0x4ed3b6['slice'](0x1);
            if (_0x43694b)
                _0x43694b['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x4ed3b6
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0xe8b0c9 => {
        if (_0xe8b0c9['id'] === 'editor-toggle-btn' || _0xe8b0c9['id'] === 'start-game-btn' || _0xe8b0c9['id'] === 'rolelist-toggle-btn')
            return;
        _0xe8b0c9['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x2a2cd8 => _0x2a2cd8['classList']['remove']('active'));
            _0xe8b0c9['classList']['add']('active');
            _0x4d0158['EDITOR']['selectedLayer'] = _0xe8b0c9['dataset']['layer'];
        });
    });
}
function _0x1d30a7(_0x3894ad) {
    if (_0x43694b)
        _0x43694b['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x3894ad
        }));
}
function _0x5ba59b(_0xcf314a) {
    if (_0x43694b)
        _0x43694b['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0xcf314a
        }));
}
function _0x28a2d9(_0x4d6633, _0x37fc0a, _0x2e338d, _0x27300d) {
    const _0x3298da = document['getElementById']('admin-panel');
    if (_0x3298da)
        _0x3298da['remove']();
    if (_0x3298da && _0x3298da['dataset']['target'] === String(_0x4d6633))
        return;
    const _0x34ab76 = document['createElement']('div');
    _0x34ab76['id'] = 'admin-panel';
    _0x34ab76['dataset']['target'] = String(_0x4d6633);
    _0x34ab76['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x15e35a = document['createElement']('div');
    _0x15e35a['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x15e35a['textContent'] = _0x37fc0a;
    _0x34ab76['appendChild'](_0x15e35a);
    const _0x4ef714 = document['createElement']('button');
    _0x4ef714['textContent'] = 'Kick';
    _0x4ef714['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x4ef714['onmouseenter'] = () => _0x4ef714['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x4ef714['onmouseleave'] = () => _0x4ef714['style']['background'] = 'transparent';
    _0x4ef714['onclick'] = () => {
        _0x1d30a7(_0x4d6633);
        _0x34ab76['remove']();
    };
    _0x34ab76['appendChild'](_0x4ef714);
    const _0x5cbe75 = document['createElement']('button');
    _0x5cbe75['textContent'] = 'Ban';
    _0x5cbe75['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x5cbe75['onmouseenter'] = () => _0x5cbe75['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x5cbe75['onmouseleave'] = () => _0x5cbe75['style']['background'] = 'transparent';
    _0x5cbe75['onclick'] = () => {
        _0x5ba59b(_0x4d6633);
        _0x34ab76['remove']();
    };
    _0x34ab76['appendChild'](_0x5cbe75);
    document['body']['appendChild'](_0x34ab76);
    const _0x137ea0 = _0x34ab76['offsetWidth'] || 0x91;
    const _0x37ba6f = _0x34ab76['offsetHeight'] || 0x50;
    let _0x399781 = _0x2e338d - _0x137ea0;
    let _0xb58f10 = _0x27300d;
    if (_0x399781 < 0x4)
        _0x399781 = _0x2e338d;
    if (_0xb58f10 + _0x37ba6f > window['innerHeight'] - 0x4)
        _0xb58f10 = window['innerHeight'] - _0x37ba6f - 0x4;
    _0x34ab76['style']['left'] = _0x399781 + 'px';
    _0x34ab76['style']['top'] = _0xb58f10 + 'px';
    const _0x55aca8 = _0x103566 => {
        if (!_0x34ab76['contains'](_0x103566['target'])) {
            _0x34ab76['remove']();
            document['removeEventListener']('mousedown', _0x55aca8);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x55aca8), 0x0);
}
function _0x199665() {
    const _0x2b6a91 = document['getElementById']('leaderboard-list');
    _0x2b6a91['innerHTML'] = '';
    const _0x5f5cf4 = document['createElement']('div');
    _0x5f5cf4['className'] = 'leaderboard-entry';
    const _0x422129 = document['createElement']('span');
    _0x422129['textContent'] = _0x3abcfd + (_0x5e9321 ? '\x20[🗝️]' : '');
    if (_0x3a4dd1['has'](_0x56e65e) && !_0x1b8ecb['isDead']) {
        _0x422129['style']['color'] = '#cc88ff';
    }
    _0x5f5cf4['appendChild'](_0x422129);
    _0x2b6a91['appendChild'](_0x5f5cf4);
    for (const _0x4152fd in _0xc68604) {
        const _0x2c2ec4 = document['createElement']('div');
        _0x2c2ec4['className'] = 'leaderboard-entry';
        const _0x9647ac = document['createElement']('span');
        _0x9647ac['textContent'] = _0xc68604[_0x4152fd]['name'] + (_0xc68604[_0x4152fd]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x3a4dd1['has'](parseInt(_0x4152fd)) && !_0xc68604[_0x4152fd]['isDead']) {
            _0x9647ac['style']['color'] = '#cc88ff';
        }
        _0x2c2ec4['appendChild'](_0x9647ac);
        if (_0x5e9321 && !_0xc68604[_0x4152fd]['isOwner']) {
            const _0x45cc3f = _0xc68604[_0x4152fd]['id'];
            const _0x2b3ae6 = _0xc68604[_0x4152fd]['name'];
            _0x2c2ec4['style']['cursor'] = 'context-menu';
            _0x2c2ec4['addEventListener']('contextmenu', _0x369d15 => {
                _0x369d15['preventDefault']();
                _0x369d15['stopPropagation']();
                _0x28a2d9(_0x45cc3f, _0x2b3ae6, _0x369d15['clientX'], _0x369d15['clientY']);
            });
        }
        _0x2b6a91['appendChild'](_0x2c2ec4);
    }
}
window['addEventListener']('resize', _0x2001c3);
function _0x2001c3() {
    _0x25e480['width'] = window['innerWidth'];
    _0x25e480['height'] = window['innerHeight'];
    _0x4d0158['SYSTEM']['viewScale'] = Math['max'](_0x25e480['width'] / _0x419ddd, _0x25e480['height'] / _0x1492c7);
    _0x4d0158['CAMERA']['width'] = _0x25e480['width'] / _0x4d0158['SYSTEM']['viewScale'];
    _0x4d0158['CAMERA']['height'] = _0x25e480['height'] / _0x4d0158['SYSTEM']['viewScale'];
    _0x35f9d8['imageSmoothingEnabled'] = ![];
}
function _0x35b8ab(_0x19c4bb) {
    if (_0x19c4bb['ctrlKey'] || _0x19c4bb['metaKey']) {
        if (_0x19c4bb['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x19c4bb['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x19c4bb['code'])) {
            _0x19c4bb['preventDefault']();
            _0x19c4bb['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x35b8ab, { 'passive': ![] });
window['addEventListener']('keydown', _0x35b8ab, { 'passive': ![] });
window['addEventListener']('keydown', _0x5e6cbf => {
    const _0x20adc0 = _0x5e6cbf['key']['toLowerCase']();
    if (_0x20adc0 === 'tab') {
        _0x5e6cbf['preventDefault']();
        const _0x4e46c9 = document['getElementById']('will-ui');
        const _0xff1012 = document['getElementById']('will-input');
        if (_0x4e46c9['style']['display'] === 'flex') {
            _0x4e46c9['style']['display'] = 'none';
            if (_0x4d0158['GAME_STATE'] !== 'NIGHT' && _0x43694b)
                _0x43694b['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0xff1012['value']
                }));
            _0xff1012['blur']();
        } else {
            if (_0x4d0158['GAME_STATE'] === 'NIGHT') {
                _0x49b05a('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x4e46c9['style']['display'] = 'flex';
            _0xff1012['focus']();
            for (let _0x5e1ce1 in _0x4d0158['INPUTS']['keys'])
                _0x4d0158['INPUTS']['keys'][_0x5e1ce1] = ![];
        }
        return;
    }
    if (_0x5e6cbf['key'] === 'Enter') {
        if (_0x5b2b13) {
            const _0x4bbe62 = document['getElementById']('play-btn');
            if (_0x4bbe62)
                _0x4bbe62['click']();
            return;
        }
        if (!_0x43694b || _0x43694b['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x5262d3 = document['getElementById']('chat-ui');
        const _0x32de14 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x32de14) {
            const _0x5b8651 = _0x32de14['value']['trim']();
            if (_0x5b8651['length'] > 0x0) {
                _0x43694b['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x5b8651
                }));
            }
            _0x32de14['value'] = '';
            _0x5262d3['style']['display'] = 'none';
            _0x32de14['blur']();
        } else {
            _0x5262d3['style']['display'] = 'block';
            _0x32de14['focus']();
            for (let _0x5bd89a in _0x4d0158['INPUTS']['keys'])
                _0x4d0158['INPUTS']['keys'][_0x5bd89a] = ![];
        }
        _0x5e6cbf['preventDefault']();
        return;
    }
    if (_0x5e6cbf['key'] === 'Escape') {
        const _0x30e09a = document['getElementById']('role-index-modal');
        if (_0x30e09a && _0x30e09a['style']['display'] === 'flex') {
            _0x30e09a['style']['display'] = 'none';
            return;
        }
        const _0x498c36 = document['getElementById']('guide-ui');
        if (_0x498c36 && _0x498c36['style']['display'] === 'flex') {
            _0x498c36['style']['display'] = 'none';
            return;
        }
        const _0x4e1454 = document['getElementById']('ability-ui');
        if (_0x4e1454 && _0x4e1454['style']['display'] === 'block') {
            _0x4e1454['style']['display'] = 'none';
            return;
        }
        const _0xdf639e = document['getElementById']('settings-panel');
        if (_0xdf639e && _0xdf639e['style']['display'] === 'block') {
            _0xdf639e['style']['display'] = 'none';
            return;
        }
        const _0x52827a = document['getElementById']('mayor-confirm-dialog');
        if (_0x52827a && _0x52827a['style']['display'] === 'flex') {
            _0x52827a['style']['display'] = 'none';
            return;
        }
        const _0x1342e1 = document['getElementById']('target-chooser-ui');
        if (_0x1342e1 && _0x1342e1['style']['display'] === 'flex') {
            _0x1342e1['style']['display'] = 'none';
            return;
        }
        const _0x16c354 = document['getElementById']('chat-ui');
        const _0x2da986 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x2da986) {
            _0x2da986['value'] = '';
            _0x16c354['style']['display'] = 'none';
            _0x2da986['blur']();
            _0x5e6cbf['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x4d0158['INPUTS']['keys']['hasOwnProperty'](_0x20adc0))
            _0x4d0158['INPUTS']['keys'][_0x20adc0] = !![];
        if (!_0x43694b || _0x43694b['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x20adc0 === 'h' && !_0x5e6cbf['repeat']) {
            const _0x2872c9 = document['getElementById']('guide-ui');
            if (_0x2872c9) {
                _0x2872c9['style']['display'] = _0x2872c9['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x20adc0 === 't' && !_0x5e6cbf['repeat']) {
            if (_0x1b8ecb['isDead'])
                return;
            if (_0x3eaf94 === 'Mayor') {
                if (_0x3a4dd1['has'](_0x56e65e)) {
                    _0x49b05a('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x26b867 = document['getElementById']('mayor-confirm-dialog');
                if (_0x26b867)
                    _0x26b867['style']['display'] = 'flex';
                return;
            }
            if (_0x4d0158['GAME_STATE'] === 'NIGHT') {
                if (!_0x4d0158['NIGHT_ABILITY_OPEN']) {
                    _0x49b05a('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x31f323 = document['getElementById']('ability-ui');
                if (_0x31f323) {
                    if (_0x31f323['style']['display'] === 'block') {
                        _0x31f323['style']['display'] = 'none';
                    } else {
                        _0x1f36b1();
                        _0x31f323['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x4d0158['GAME_STATE'] === 'DAY_DISCUSS' || _0x4d0158['GAME_STATE'] === 'DAY_VOTE') {
                _0x49b05a('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x20adc0 === 'e' && !_0x1b8ecb['isDead']) {
            const _0x1bd98f = Date['now']();
            if (!window['_lastDoorSend'] || _0x1bd98f - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x1bd98f;
                _0x43694b['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x5351be => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x11e635 = _0x5351be['key']['toLowerCase']();
        if (_0x4d0158['INPUTS']['keys']['hasOwnProperty'](_0x11e635))
            _0x4d0158['INPUTS']['keys'][_0x11e635] = ![];
    }
});
window['addEventListener']('mousemove', _0x301338 => {
    _0x4d0158['INPUTS']['mouseX'] = _0x301338['clientX'];
    _0x4d0158['INPUTS']['mouseY'] = _0x301338['clientY'];
    if (_0x4d0158['INPUTS']['isMouseDown'] && _0x4d0158['EDITOR']['enabled']) {
        _0x3fd90e(_0x301338['clientX'], _0x301338['clientY']);
    }
});
window['addEventListener']('mousedown', _0x11de62 => {
    if (_0x11de62['target']['closest']('#editor-ui') || _0x11de62['target']['closest']('#leaderboard-ui') || _0x11de62['target']['closest']('#role-index-btn-wrap') || _0x11de62['target']['closest']('#role-index-modal') || _0x11de62['target']['closest']('#chat-log-ui') || _0x11de62['target']['closest']('#target-chooser-ui') || _0x11de62['target']['closest']('#guide-ui') || _0x11de62['target']['closest']('#role-list-ui') || _0x11de62['target']['closest']('#ability-ui') || _0x11de62['target']['closest']('#settings-panel') || _0x11de62['target']['closest']('#mayor-confirm-dialog') || _0x11de62['target']['closest']('#mobile-action-bar') || _0x11de62['target']['closest']('#mobile-top-bar') || _0x11de62['target']['closest']('#mobile-joystick-zone') || _0x11de62['target']['closest']('#mobile-chat-overlay') || _0x11de62['target']['closest']('#will-ui') || _0x11de62['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x11de62['button'] === 0x0) {
        _0x4d0158['INPUTS']['isMouseDown'] = !![];
        if (_0x4d0158['EDITOR']['enabled'])
            _0x3fd90e(_0x11de62['clientX'], _0x11de62['clientY']);
    }
});
window['addEventListener']('mouseup', _0x5f5008 => {
    _0x4d0158['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x39edc1 => {
    if (_0x39edc1['target']['closest']('#settings-btn'))
        return;
    const _0x12e7a2 = document['getElementById']('leaderboard-list');
    const _0xa7cdd1 = document['getElementById']('leaderboard-toggle');
    if (_0x12e7a2['style']['display'] === 'none') {
        _0x12e7a2['style']['display'] = 'flex';
        _0xa7cdd1['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x12e7a2['style']['display'] = 'none';
        _0xa7cdd1['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x589408 = document['getElementById']('close-target-btn');
if (_0x589408) {
    _0x589408['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x36826b = document['getElementById']('close-guide-btn');
if (_0x36826b) {
    _0x36826b['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x5ef249 = document['getElementById']('role-list-header');
if (_0x5ef249) {
    _0x5ef249['addEventListener']('click', () => {
        const _0x4cd4e3 = document['getElementById']('role-list-items');
        const _0xe3b23e = document['getElementById']('role-list-toggle');
        if (_0x4cd4e3['style']['display'] === 'none') {
            _0x4cd4e3['style']['display'] = 'flex';
            _0xe3b23e['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x4cd4e3['style']['display'] = 'none';
            _0xe3b23e['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x657689() {
    const _0x2644ce = document['getElementById']('mobile-joystick-zone');
    const _0x1e2156 = document['getElementById']('mobile-joystick-base');
    const _0x5a83dc = document['getElementById']('mobile-joystick-knob');
    if (_0x2644ce && _0x1e2156 && _0x5a83dc) {
        const _0x42f446 = 0x3e;
        const _0x3db10c = (_0x3ece41, _0x3ebd7e) => {
            const _0x2bf78c = _0x1e2156['getBoundingClientRect']();
            const _0x19f8ad = _0x2bf78c['left'] + _0x2bf78c['width'] / 0x2;
            const _0x124071 = _0x2bf78c['top'] + _0x2bf78c['height'] / 0x2;
            const _0x474ff7 = _0x3ece41 - _0x19f8ad;
            const _0x533d1f = _0x3ebd7e - _0x124071;
            const _0x184ad4 = Math['hypot'](_0x474ff7, _0x533d1f);
            if (_0x184ad4 === 0x0) {
                _0x5558bb = 0x0;
                _0x388a70 = 0x0;
                _0x35379c = ![];
                _0x5a83dc['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x1dce07 = Math['min'](_0x184ad4, _0x42f446);
            const _0x25f641 = _0x474ff7 / _0x184ad4 * _0x1dce07;
            const _0x354cf5 = _0x533d1f / _0x184ad4 * _0x1dce07;
            _0x5558bb = _0x25f641 / _0x42f446;
            _0x388a70 = _0x354cf5 / _0x42f446;
            _0x35379c = _0x184ad4 >= _0x42f446 * 0.75;
            _0x5a83dc['style']['transform'] = 'translate(' + _0x25f641 + 'px,\x20' + _0x354cf5 + 'px)';
        };
        const _0x460e39 = _0x434f04 => {
            for (let _0x2acda2 = 0x0; _0x2acda2 < _0x434f04['changedTouches']['length']; _0x2acda2++) {
                const _0x4b6436 = _0x434f04['changedTouches'][_0x2acda2];
                if (_0x30d2c1 === null) {
                    _0x30d2c1 = _0x4b6436['identifier'];
                    _0x5d78e7 = !![];
                    _0x3db10c(_0x4b6436['clientX'], _0x4b6436['clientY']);
                    break;
                }
            }
        };
        const _0x4ed8a6 = _0x32e768 => {
            for (let _0x1589bd = 0x0; _0x1589bd < _0x32e768['changedTouches']['length']; _0x1589bd++) {
                const _0x42a6af = _0x32e768['changedTouches'][_0x1589bd];
                if (_0x42a6af['identifier'] === _0x30d2c1) {
                    _0x3db10c(_0x42a6af['clientX'], _0x42a6af['clientY']);
                    break;
                }
            }
        };
        const _0x21bdbe = _0x52646d => {
            for (let _0x4fd8ec = 0x0; _0x4fd8ec < _0x52646d['changedTouches']['length']; _0x4fd8ec++) {
                const _0x4bc610 = _0x52646d['changedTouches'][_0x4fd8ec];
                if (_0x4bc610['identifier'] === _0x30d2c1) {
                    _0x30d2c1 = null;
                    _0x5d78e7 = ![];
                    _0x5558bb = 0x0;
                    _0x388a70 = 0x0;
                    _0x35379c = ![];
                    _0x5a83dc['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x2644ce['addEventListener']('touchstart', _0x29bc71 => {
            _0x29bc71['preventDefault']();
            _0x460e39(_0x29bc71);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x4ed8a6, { 'passive': !![] });
        window['addEventListener']('touchend', _0x21bdbe, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x21bdbe, { 'passive': !![] });
    }
    const _0xfca240 = (_0x5e98f9, _0x2b5085) => {
        const _0x48e925 = _0x5e98f9 / _0x4d0158['SYSTEM']['viewScale'];
        const _0xcf9651 = _0x2b5085 / _0x4d0158['SYSTEM']['viewScale'];
        const _0x32e2bb = _0x1b8ecb['x'] - _0x4d0158['CAMERA']['x'] + _0x1b8ecb['width'] / 0x2;
        const _0x54abfa = _0x1b8ecb['y'] - _0x4d0158['CAMERA']['y'] + _0x1b8ecb['height'] / 0x2;
        _0x45b89d = Math['atan2'](_0xcf9651 - _0x54abfa, _0x48e925 - _0x32e2bb);
        _0x2a7a4b = !![];
        _0x4d0158['INPUTS']['mouseX'] = _0x5e98f9;
        _0x4d0158['INPUTS']['mouseY'] = _0x2b5085;
    };
    _0x25e480['addEventListener']('touchstart', _0xd20ba4 => {
        if (_0x5b2b13)
            return;
        for (let _0x443dcb = 0x0; _0x443dcb < _0xd20ba4['changedTouches']['length']; _0x443dcb++) {
            const _0x3b4f3e = _0xd20ba4['changedTouches'][_0x443dcb];
            if (_0x3b4f3e['identifier'] !== _0x30d2c1 && _0x1b3e77 === null) {
                _0x1b3e77 = _0x3b4f3e['identifier'];
                _0xfca240(_0x3b4f3e['clientX'], _0x3b4f3e['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x25e480['addEventListener']('touchmove', _0x325b0e => {
        if (_0x5b2b13)
            return;
        for (let _0x102381 = 0x0; _0x102381 < _0x325b0e['changedTouches']['length']; _0x102381++) {
            const _0x276fff = _0x325b0e['changedTouches'][_0x102381];
            if (_0x276fff['identifier'] === _0x1b3e77) {
                _0xfca240(_0x276fff['clientX'], _0x276fff['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x2429c7 = _0x3a7ed4 => {
        for (let _0x371dac = 0x0; _0x371dac < _0x3a7ed4['changedTouches']['length']; _0x371dac++) {
            const _0x2b41ba = _0x3a7ed4['changedTouches'][_0x371dac];
            if (_0x2b41ba['identifier'] === _0x1b3e77) {
                _0x1b3e77 = null;
                _0x2a7a4b = ![];
                break;
            }
        }
    };
    _0x25e480['addEventListener']('touchend', _0x2429c7, { 'passive': !![] });
    _0x25e480['addEventListener']('touchcancel', _0x2429c7, { 'passive': !![] });
    const _0x31ac96 = document['getElementById']('mob-sprint-btn');
    if (_0x31ac96) {
        _0x31ac96['addEventListener']('click', _0x35b0f4 => {
            _0x35b0f4['stopPropagation']();
            _0x1edb05 = !_0x1edb05;
            _0x31ac96['classList']['toggle']('active', _0x1edb05);
        });
    }
    const _0xd73996 = document['getElementById']('mob-interact-btn');
    if (_0xd73996) {
        _0xd73996['addEventListener']('click', _0xbc6d98 => {
            _0xbc6d98['stopPropagation']();
            if (!_0x1b8ecb['isDead']) {
                const _0x21bea8 = Date['now']();
                if (!window['_lastDoorSend'] || _0x21bea8 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x21bea8;
                    if (_0x43694b && _0x43694b['readyState'] === WebSocket['OPEN'])
                        _0x43694b['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0xadaf91 = document['getElementById']('mob-ability-btn');
    if (_0xadaf91) {
        _0xadaf91['addEventListener']('click', _0x51a56f => {
            _0x51a56f['stopPropagation']();
            if (_0x1b8ecb['isDead'])
                return;
            if (_0x3eaf94 === 'Mayor') {
                if (_0x3a4dd1['has'](_0x56e65e)) {
                    _0x49b05a('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0xfd87ed = document['getElementById']('mayor-confirm-dialog');
                if (_0xfd87ed)
                    _0xfd87ed['style']['display'] = 'flex';
                return;
            }
            if (_0x4d0158['GAME_STATE'] === 'NIGHT') {
                if (!_0x4d0158['NIGHT_ABILITY_OPEN']) {
                    _0x49b05a('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x2008d8 = document['getElementById']('ability-ui');
                if (_0x2008d8) {
                    if (_0x2008d8['style']['display'] === 'block') {
                        _0x2008d8['style']['display'] = 'none';
                    } else {
                        _0x1f36b1();
                        _0x2008d8['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x4d0158['GAME_STATE'] === 'DAY_DISCUSS' || _0x4d0158['GAME_STATE'] === 'DAY_VOTE') {
                _0x49b05a('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x473fe6 = document['getElementById']('mob-will-btn');
    const _0x4c0c91 = document['getElementById']('will-ui');
    const _0x18c358 = document['getElementById']('will-input');
    const _0x3bb7d7 = document['getElementById']('close-will-btn');
    const _0xedb913 = () => {
        if (!_0x4c0c91)
            return;
        if (_0x4c0c91['style']['display'] === 'flex') {
            _0x4c0c91['style']['display'] = 'none';
            if (_0x4d0158['GAME_STATE'] !== 'NIGHT' && _0x43694b && _0x43694b['readyState'] === WebSocket['OPEN'] && _0x18c358) {
                _0x43694b['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x18c358['value']
                }));
            }
            if (_0x18c358)
                _0x18c358['blur']();
        } else {
            if (_0x4d0158['GAME_STATE'] === 'NIGHT') {
                _0x49b05a('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x4c0c91['style']['display'] = 'flex';
            if (_0x18c358)
                _0x18c358['focus']();
        }
    };
    if (_0x473fe6)
        _0x473fe6['addEventListener']('click', _0x357edc => {
            _0x357edc['stopPropagation']();
            _0xedb913();
        });
    if (_0x3bb7d7)
        _0x3bb7d7['addEventListener']('click', _0x39c11d => {
            _0x39c11d['stopPropagation']();
            _0xedb913();
        });
    const _0xf2d799 = document['getElementById']('mob-chat-btn');
    const _0x14a5a7 = document['getElementById']('mobile-chat-overlay');
    const _0x488d0f = document['getElementById']('mobile-chat-input');
    const _0x434195 = document['getElementById']('mobile-chat-send');
    const _0x567352 = document['getElementById']('mobile-chat-cancel');
    const _0x2f84db = () => {
        if (!_0x14a5a7 || !_0x488d0f)
            return;
        _0x14a5a7['style']['display'] = 'flex';
        _0x488d0f['value'] = '';
        _0x488d0f['focus']();
    };
    const _0x2b2ae5 = () => {
        if (!_0x14a5a7 || !_0x488d0f)
            return;
        _0x14a5a7['style']['display'] = 'none';
        _0x488d0f['blur']();
    };
    const _0x13991b = () => {
        if (!_0x488d0f)
            return;
        const _0x25c8c1 = _0x488d0f['value']['trim']();
        if (_0x25c8c1['length'] > 0x0 && _0x43694b && _0x43694b['readyState'] === WebSocket['OPEN']) {
            _0x43694b['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x25c8c1
            }));
        }
        _0x488d0f['value'] = '';
        _0x2b2ae5();
    };
    if (_0xf2d799)
        _0xf2d799['addEventListener']('click', _0x211b0c => {
            _0x211b0c['stopPropagation']();
            _0x2f84db();
        });
    if (_0x434195)
        _0x434195['addEventListener']('click', _0x5b0d23 => {
            _0x5b0d23['stopPropagation']();
            _0x13991b();
        });
    if (_0x567352)
        _0x567352['addEventListener']('click', _0x3dfb6e => {
            _0x3dfb6e['stopPropagation']();
            _0x2b2ae5();
        });
    if (_0x488d0f) {
        _0x488d0f['addEventListener']('keydown', _0x5d203f => {
            if (_0x5d203f['key'] === 'Enter') {
                _0x5d203f['preventDefault']();
                _0x13991b();
            } else if (_0x5d203f['key'] === 'Escape') {
                _0x2b2ae5();
            }
        });
    }
    const _0x351c84 = document['getElementById']('mob-top-chat');
    if (_0x351c84)
        _0x351c84['addEventListener']('click', _0x5201c1 => {
            _0x5201c1['stopPropagation']();
            _0x2f84db();
        });
    const _0x115756 = document['getElementById']('mob-top-will');
    if (_0x115756)
        _0x115756['addEventListener']('click', _0x137613 => {
            _0x137613['stopPropagation']();
            _0xedb913();
        });
    const _0x479354 = document['getElementById']('mob-top-roles');
    if (_0x479354) {
        _0x479354['addEventListener']('click', _0x4133e6 => {
            _0x4133e6['stopPropagation']();
            const _0x115566 = document['getElementById']('role-list-ui');
            const _0x56b4a6 = document['getElementById']('leaderboard-ui');
            if (_0x56b4a6)
                _0x56b4a6['style']['display'] = 'none';
            if (_0x115566)
                _0x115566['style']['display'] = _0x115566['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x5f334e = document['getElementById']('mob-top-players');
    if (_0x5f334e) {
        _0x5f334e['addEventListener']('click', _0xaa002d => {
            _0xaa002d['stopPropagation']();
            const _0x1ba317 = document['getElementById']('leaderboard-ui');
            const _0x1d0044 = document['getElementById']('role-list-ui');
            if (_0x1d0044)
                _0x1d0044['style']['display'] = 'none';
            if (_0x1ba317)
                _0x1ba317['style']['display'] = _0x1ba317['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x3fa8d1 = document['getElementById']('mob-top-help');
    if (_0x3fa8d1) {
        _0x3fa8d1['addEventListener']('click', _0x204e2f => {
            _0x204e2f['stopPropagation']();
            const _0x1c551a = document['getElementById']('guide-ui');
            if (_0x1c551a)
                _0x1c551a['style']['display'] = _0x1c551a['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x2d111) {
            _0x2d111 = !![];
            _0x561f39();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
