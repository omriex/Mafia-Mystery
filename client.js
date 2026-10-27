document['addEventListener']('contextmenu', _0x4b90e7 => _0x4b90e7['preventDefault']());
const _0x5e3c8a = {
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
let _0x43dae9 = '';
function _0x50d1b1(_0x1bdbaa, _0x17b0dc) {
    const _0x39cd83 = document['getElementById']('role-list-ui');
    const _0x2e5b22 = document['getElementById']('role-list-items');
    if (!_0x39cd83 || !_0x2e5b22)
        return;
    if (!_0x17b0dc || _0x17b0dc === 'off' || !_0x1bdbaa || _0x1bdbaa['length'] === 0x0) {
        _0x39cd83['style']['display'] = 'none';
        return;
    }
    const _0x2d7020 = _0x17b0dc + '|' + JSON['stringify'](_0x1bdbaa);
    if (_0x2d7020 === _0x43dae9)
        return;
    _0x43dae9 = _0x2d7020;
    const _0x459740 = document['getElementById']('role-tooltip');
    if (_0x459740) {
        _0x459740['style']['visibility'] = 'hidden';
        _0x459740['style']['opacity'] = '0';
    }
    _0x39cd83['style']['display'] = 'flex';
    _0x2e5b22['innerHTML'] = '';
    _0x1bdbaa['forEach'](_0x5ef5c3 => {
        const _0x17e89c = document['createElement']('div');
        _0x17e89c['className'] = 'role-list-entry';
        const _0x12285d = _0x5ef5c3['name']['includes']('Mafia') || _0x5ef5c3['name'] === 'Skinwalker' || _0x5ef5c3['name'] === 'Blackmailer';
        _0x17e89c['classList']['add'](_0x12285d ? 'mafia' : 'town');
        if (_0x17b0dc === 'precise' && _0x5ef5c3['isDead']) {
            _0x17e89c['classList']['remove']('town', 'mafia');
            _0x17e89c['classList']['add']('dead');
            _0x17e89c['innerHTML'] = '<span>' + _0x5ef5c3['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0xf05db4 = _0x5ef5c3['count'] !== undefined && _0x5ef5c3['count'] !== null ? _0x5ef5c3['count'] + 'x\x20' : '';
            _0x17e89c['innerHTML'] = '<span>' + _0xf05db4 + _0x5ef5c3['name'] + '</span>';
        }
        if (_0x17b0dc === 'subalignments' && _0x5e3c8a[_0x5ef5c3['name']]) {
            _0x17e89c['style']['cursor'] = 'pointer';
            _0x17e89c['addEventListener']('mouseenter', () => {
                const _0x193ad5 = document['getElementById']('role-tooltip');
                if (!_0x193ad5)
                    return;
                const _0x59fe19 = _0x5e3c8a[_0x5ef5c3['name']]['join'](',\x20');
                _0x193ad5['innerHTML'] = '';
                const _0x22b7ee = document['createElement']('span');
                _0x22b7ee['style']['color'] = '#ffcc00';
                _0x22b7ee['textContent'] = _0x5ef5c3['name'];
                _0x193ad5['appendChild'](_0x22b7ee);
                _0x193ad5['appendChild'](document['createElement']('br'));
                _0x193ad5['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x59fe19));
                const _0x2fbc70 = _0x17e89c['getBoundingClientRect']();
                _0x193ad5['style']['left'] = _0x2fbc70['left'] - 0xeb + 'px';
                _0x193ad5['style']['top'] = _0x2fbc70['top'] + 'px';
                _0x193ad5['style']['display'] = 'block';
                _0x193ad5['style']['visibility'] = 'visible';
                _0x193ad5['style']['opacity'] = '1';
            });
            _0x17e89c['addEventListener']('mouseleave', () => {
                const _0x55a103 = document['getElementById']('role-tooltip');
                if (_0x55a103) {
                    _0x55a103['style']['display'] = 'none';
                    _0x55a103['style']['visibility'] = 'hidden';
                    _0x55a103['style']['opacity'] = '0';
                }
            });
        }
        _0x2e5b22['appendChild'](_0x17e89c);
    });
}
let _0x59c043 = null;
let _0xa2c3d = null;
const _0x568ab1 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x7f9760 = 'Player???';
let _0x3ffc80 = ![];
let _0x41c578 = {};
let _0x289ac2 = null;
let _0xa07fb9 = 0x0;
let _0x497869 = 0x0;
let _0x476fb4 = new Set();
let _0x27fba9 = ![];
let _0x43d611 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x3e73f9 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x4c8d55 = ![];
let _0x3b930b = null;
let _0x2ec8c7 = 0x0;
let _0x33d77a = 0x0;
let _0x3cd8b1 = ![];
let _0x4a9214 = ![];
let _0x3d7aff = 0x0;
let _0xf2d763 = null;
let _0x723335 = ![];
let _0x5ba9ec = 0x0;
let _0x3dace2 = 0x0;
let _0x4616bb = [];
let _0x4761ad = [];
let _0x1c1b09 = new Set();
const _0x1dd078 = ((() => {
    const _0x12b385 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x4b3854 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x9d9b72 = 0x320;
    const _0x392474 = {};
    const _0x4e580e = {};
    let _0x3bc8cd = null;
    let _0x668587 = _0x4b3854 === 0x0;
    let _0x158692 = ![];
    for (const [_0xbcd2f1, _0x2f9307] of Object['entries'](_0x12b385)) {
        const _0x5da2ea = new Audio(_0x2f9307);
        _0x5da2ea['loop'] = !![];
        _0x5da2ea['volume'] = 0x0;
        _0x5da2ea['preload'] = 'auto';
        _0x392474[_0xbcd2f1] = _0x5da2ea;
        _0x4e580e[_0xbcd2f1] = null;
    }
    const _0x40188b = _0x220b82 => Math['min'](0x1, Math['max'](0x0, _0x220b82));
    function _0x440bdf(_0x21deb8) {
        if (_0x4e580e[_0x21deb8] !== null) {
            cancelAnimationFrame(_0x4e580e[_0x21deb8]);
            _0x4e580e[_0x21deb8] = null;
        }
    }
    function _0x1e0419(_0x2a75f2, _0x59b907, _0x130334, _0x39d683, _0xf57966) {
        _0x440bdf(_0x2a75f2);
        const _0x3fcb52 = _0x392474[_0x2a75f2];
        const _0x37dbc1 = performance['now']();
        const _0x7d2d4d = _0x365bb8 => {
            const _0x34b12b = _0x40188b((_0x365bb8 - _0x37dbc1) / _0x39d683);
            const _0x52e7a5 = _0x40188b(_0x59b907 + (_0x130334 - _0x59b907) * _0x34b12b);
            _0x3fcb52['volume'] = _0x668587 ? 0x0 : _0x52e7a5;
            if (_0x34b12b < 0x1) {
                _0x4e580e[_0x2a75f2] = requestAnimationFrame(_0x7d2d4d);
            } else {
                _0x4e580e[_0x2a75f2] = null;
                _0x3fcb52['volume'] = _0x668587 ? 0x0 : _0x40188b(_0x130334);
                if (_0xf57966)
                    _0xf57966();
            }
        };
        _0x4e580e[_0x2a75f2] = requestAnimationFrame(_0x7d2d4d);
    }
    function _0x29fdf4(_0x49b5cb) {
        const _0x2536df = _0x49b5cb['play']();
        if (_0x2536df && _0x2536df['catch']) {
            _0x2536df['catch'](() => {
                if (!_0x158692) {
                    const _0x5e7e9e = () => {
                        _0x158692 = !![];
                        _0x49b5cb['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x5e7e9e);
                        document['removeEventListener']('keydown', _0x5e7e9e);
                        document['removeEventListener']('touchstart', _0x5e7e9e);
                    };
                    document['addEventListener']('click', _0x5e7e9e, { 'once': !![] });
                    document['addEventListener']('keydown', _0x5e7e9e, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x5e7e9e, { 'once': !![] });
                }
            });
        }
    }
    function _0x44db45(_0x4da574) {
        if (!_0x12b385[_0x4da574])
            return;
        if (_0x3bc8cd === _0x4da574)
            return;
        const _0x585c3b = _0x3bc8cd;
        _0x3bc8cd = _0x4da574;
        const _0x1c005d = _0x392474[_0x4da574];
        _0x440bdf(_0x4da574);
        _0x1c005d['currentTime'] = 0x0;
        _0x1c005d['volume'] = 0x0;
        _0x29fdf4(_0x1c005d);
        _0x1e0419(_0x4da574, 0x0, _0x4b3854, _0x9d9b72);
        if (_0x585c3b && _0x392474[_0x585c3b]) {
            const _0x26d053 = _0x585c3b;
            const _0x2b9b54 = _0x392474[_0x26d053];
            const _0x27101 = _0x40188b(_0x2b9b54['volume']);
            _0x1e0419(_0x26d053, _0x27101, 0x0, _0x9d9b72, () => {
                _0x2b9b54['pause']();
                _0x2b9b54['currentTime'] = 0x0;
            });
        }
    }
    function _0x19185a(_0x336cbc) {
        _0x4b3854 = _0x40188b(_0x336cbc);
        localStorage['setItem']('musicVolume', String(_0x4b3854));
        if (!_0x668587 && _0x3bc8cd && _0x4e580e[_0x3bc8cd] === null) {
            _0x392474[_0x3bc8cd]['volume'] = _0x4b3854;
        }
    }
    function _0x57038d() {
        return _0x4b3854;
    }
    function _0xb9dcd0(_0x3d466) {
        _0x668587 = _0x3d466;
        for (const _0x511d26 of Object['keys'](_0x392474)) {
            if (_0x4e580e[_0x511d26] === null) {
                _0x392474[_0x511d26]['volume'] = _0x3d466 || _0x511d26 !== _0x3bc8cd ? 0x0 : _0x4b3854;
            }
        }
    }
    function _0x8a8560() {
        return _0x668587;
    }
    function _0x17693e(_0x36bd89) {
        if (_0x36bd89 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x36bd89 === 'DAY_VOTE')
            return 'voting';
        if (_0x36bd89 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x3ed46d(_0x487b3e) {
        _0x44db45(_0x17693e(_0x487b3e));
    }
    function _0x19141b(_0x1aff64) {
        _0x44db45(_0x1aff64);
    }
    return {
        'play': _0x44db45,
        'onStateChange': _0x3ed46d,
        'onSoundEvent': _0x19141b,
        'setVolume': _0x19185a,
        'getVolume': _0x57038d,
        'setMuted': _0xb9dcd0,
        'isMuted': _0x8a8560
    };
})());
const _0x3a2945 = ((() => {
    const _0x141275 = 0x258;
    const _0x48f5f1 = 0xb4;
    const _0x481a9f = 0x708;
    const _0x19a17f = 0x140;
    const _0xf15270 = 0.18;
    const _0x197102 = 0.95;
    const _0x494463 = new Audio('audio/heartbeat.mp3');
    _0x494463['loop'] = ![];
    _0x494463['preload'] = 'auto';
    _0x494463['volume'] = 0x0;
    let _0x5e0293 = 0x0;
    let _0x4aefa5 = Infinity;
    function _0x4229c7(_0x5a3b07, _0x337be9, _0x270aca) {
        return Math['min'](_0x270aca, Math['max'](_0x337be9, _0x5a3b07));
    }
    function _0x4f8830(_0x4ae6f1, _0x3a1293, _0x5703bf) {
        return _0x4ae6f1 + (_0x3a1293 - _0x4ae6f1) * _0x5703bf;
    }
    function _0x1c8bd4(_0x36d3f9) {
        if (_0x1cdb4b['GAME_STATE'] !== 'NIGHT' || _0x3f99ad['isDead'] || _0x289ac2 === 'Skinwalker' || _0x289ac2 === 'Blackmailer') {
            _0x4aefa5 = Infinity;
            return;
        }
        const _0x3bf45e = _0x3f99ad['x'] + 22.5;
        const _0x17ba31 = _0x3f99ad['y'] + 22.5;
        let _0x2e5d93 = Infinity;
        for (const _0x40105d in _0x41c578) {
            const _0x312cf8 = _0x41c578[_0x40105d];
            if (!_0x312cf8['isDark'] || _0x312cf8['isDead'])
                continue;
            const _0xb264a7 = _0x312cf8['renderX'] + 22.5 - _0x3bf45e;
            const _0x1e0866 = _0x312cf8['renderY'] + 22.5 - _0x17ba31;
            const _0x31d8f0 = Math['sqrt'](_0xb264a7 * _0xb264a7 + _0x1e0866 * _0x1e0866);
            if (_0x31d8f0 < _0x2e5d93)
                _0x2e5d93 = _0x31d8f0;
        }
        _0x4aefa5 = _0x2e5d93;
        if (_0x2e5d93 > _0x141275)
            return;
        const _0x243216 = 0x1 - _0x4229c7((_0x2e5d93 - _0x48f5f1) / (_0x141275 - _0x48f5f1), 0x0, 0x1);
        const _0x2bf039 = _0x4f8830(_0x481a9f, _0x19a17f, _0x243216);
        const _0x3ff311 = _0x4f8830(_0xf15270, _0x197102, _0x243216);
        if (_0x36d3f9 >= _0x5e0293) {
            _0x494463['currentTime'] = 0x0;
            _0x494463['volume'] = _0x1dd078['isMuted']() ? 0x0 : _0x4229c7(_0x3ff311 * _0x1dd078['getVolume']() / 0.7, 0x0, 0x1);
            _0x494463['play']()['catch'](() => {
            });
            _0x5e0293 = _0x36d3f9 + _0x2bf039;
        }
    }
    return { 'tick': _0x1c8bd4 };
})());
function _0x506a84() {
    const _0x3a85df = document['getElementById']('mob-ability-btn');
    if (!_0x3a85df)
        return;
    const _0x544cb0 = _0x1cdb4b['GAME_STATE'] === 'NIGHT' && !_0x3f99ad['isDead'];
    const _0x5ba394 = _0x289ac2 === 'Mayor' && !_0x476fb4['has'](_0xa2c3d) && !_0x3f99ad['isDead'];
    if (_0x544cb0 || _0x5ba394) {
        _0x3a85df['style']['display'] = 'flex';
    } else {
        _0x3a85df['style']['display'] = 'none';
    }
}
function _0x20db81() {
    const _0x48522f = document['getElementById']('mobile-joystick-zone');
    const _0x5e82f5 = document['getElementById']('mobile-top-bar');
    const _0x5721f5 = document['getElementById']('mobile-action-bar');
    if (!_0x48522f || !_0x5e82f5 || !_0x5721f5)
        return;
    if (!_0x36fd65 && _0x3e73f9) {
        _0x48522f['style']['display'] = 'flex';
        _0x5e82f5['style']['display'] = 'flex';
        _0x5721f5['style']['display'] = 'flex';
        _0x506a84();
    } else {
        _0x48522f['style']['display'] = 'none';
        _0x5e82f5['style']['display'] = 'none';
        _0x5721f5['style']['display'] = 'none';
    }
}
const _0x85660e = document['getElementById']('gameCanvas');
const _0x2a2233 = _0x85660e['getContext']('2d', { 'alpha': ![] });
const _0x3c8596 = 0x500;
const _0x2dd09d = 0x2d0;
const _0x1cdb4b = {
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
        'width': _0x3c8596,
        'height': _0x2dd09d
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
const _0x3f99ad = {
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
const _0x5617d9 = new Image();
const _0x1f08e3 = new Image();
const _0x49a1e9 = new Image();
const _0x1c5f3a = new Image();
_0x1c5f3a['src'] = 'assets/mayor\x20cosmetic.png';
const _0x2c93f2 = [
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
const _0x21630f = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x36664 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x36664 === 'body1.png' || _0x36664 === 'body1')
    _0x36664 = 'body01.png';
if (!_0x36664['endsWith']('.png'))
    _0x36664 += '.png';
let _0x578d3b = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x578d3b['endsWith']('.png'))
    _0x578d3b += '.png';
let _0x36fd65 = !![];
let _0x216d65 = null;
let _0x46aa36 = null;
let _0x4c0988 = 0x3c;
let _0x159d98 = 0x2d;
const _0x1b4e7b = {};
const _0x43e04f = new Image();
_0x43e04f['src'] = 'assets/yanito932.png';
_0x1b4e7b['assets/yanito932.png'] = _0x43e04f;
function _0x499f0c(_0x2c6cf3) {
    if (!_0x1b4e7b[_0x2c6cf3] || !_0x1b4e7b[_0x2c6cf3]['complete'] && _0x1b4e7b[_0x2c6cf3]['naturalWidth'] === 0x0 && _0x1b4e7b[_0x2c6cf3]['naturalHeight'] === 0x0) {
        const _0x2c5794 = new Image();
        _0x2c5794['src'] = _0x2c6cf3;
        _0x1b4e7b[_0x2c6cf3] = _0x2c5794;
    }
    return _0x1b4e7b[_0x2c6cf3];
}
function _0x237d7b(_0x3bdc0c, _0xb868ff, _0x16e106, _0x9ca5c5, _0x2c3528) {
    try {
        const _0x5050f8 = 'assets/' + (_0xb868ff || 'body01.png');
        const _0x50b91f = _0x499f0c(_0x5050f8);
        if (_0x50b91f['complete'] && _0x50b91f['naturalWidth'] > 0x0) {
            _0x3bdc0c['drawImage'](_0x50b91f, -_0x9ca5c5 / 0x2, -_0x2c3528 / 0x2, _0x9ca5c5, _0x2c3528);
        }
        if (_0x16e106 === null || _0x16e106 === undefined)
            return;
        const _0x17e863 = 'assets/' + _0x16e106;
        const _0x45d7d0 = _0x499f0c(_0x17e863);
        if (_0x45d7d0['complete'] && _0x45d7d0['naturalWidth'] > 0x0) {
            _0x3bdc0c['drawImage'](_0x45d7d0, -_0x9ca5c5 / 0x2, -_0x2c3528 / 0x2, _0x9ca5c5, _0x2c3528);
        }
    } catch (_0x42ffc3) {
    }
}
function _0x424ae6() {
    const _0x46c613 = document['getElementById']('body-skin-grid');
    const _0x16304c = document['getElementById']('eyes-skin-grid');
    if (!_0x46c613 || !_0x16304c)
        return;
    _0x46c613['innerHTML'] = '';
    _0x2c93f2['forEach'](_0x56d105 => {
        const _0xf3fc51 = document['createElement']('button');
        _0xf3fc51['className'] = 'skin-btn' + (_0x56d105 === _0x36664 ? '\x20selected' : '');
        const _0x1a29e4 = document['createElement']('img');
        _0x1a29e4['src'] = 'assets/' + _0x56d105;
        _0xf3fc51['appendChild'](_0x1a29e4);
        _0xf3fc51['onclick'] = () => {
            _0x36664 = _0x56d105;
            localStorage['setItem']('selectedBody', _0x56d105);
            _0x46c613['querySelectorAll']('.skin-btn')['forEach'](_0x21c902 => _0x21c902['classList']['remove']('selected'));
            _0xf3fc51['classList']['add']('selected');
        };
        _0x46c613['appendChild'](_0xf3fc51);
    });
    _0x16304c['innerHTML'] = '';
    _0x21630f['forEach'](_0x1410db => {
        const _0x1ff6f0 = document['createElement']('button');
        _0x1ff6f0['className'] = 'skin-btn' + (_0x1410db === _0x578d3b ? '\x20selected' : '');
        const _0x501327 = document['createElement']('img');
        _0x501327['src'] = 'assets/' + _0x1410db;
        _0x1ff6f0['appendChild'](_0x501327);
        _0x1ff6f0['onclick'] = () => {
            _0x578d3b = _0x1410db;
            localStorage['setItem']('selectedEyes', _0x1410db);
            _0x16304c['querySelectorAll']('.skin-btn')['forEach'](_0x40739a => _0x40739a['classList']['remove']('selected'));
            _0x1ff6f0['classList']['add']('selected');
        };
        _0x16304c['appendChild'](_0x1ff6f0);
    });
}
function _0x5ede20(_0x3838c6) {
    if (!_0x1cdb4b['MAP']['columns'] || !_0x1cdb4b['CAMERA']['width'])
        return;
    const _0x2fc675 = Math['max'](0x0, _0x1cdb4b['MAP']['columns'] * _0x1cdb4b['MAP']['tileSize'] - _0x1cdb4b['CAMERA']['width']);
    const _0x35ef14 = Math['max'](0x0, _0x1cdb4b['MAP']['rows'] * _0x1cdb4b['MAP']['tileSize'] - _0x1cdb4b['CAMERA']['height']);
    if (_0x216d65 === null) {
        _0x216d65 = _0x2fc675 / 0x2;
        _0x46aa36 = _0x35ef14 / 0x2;
    }
    _0x216d65 += _0x4c0988 * _0x3838c6;
    _0x46aa36 += _0x159d98 * _0x3838c6;
    if (_0x216d65 <= 0x0) {
        _0x216d65 = 0x0;
        _0x4c0988 = Math['abs'](_0x4c0988);
    } else if (_0x216d65 >= _0x2fc675) {
        _0x216d65 = _0x2fc675;
        _0x4c0988 = -Math['abs'](_0x4c0988);
    }
    if (_0x46aa36 <= 0x0) {
        _0x46aa36 = 0x0;
        _0x159d98 = Math['abs'](_0x159d98);
    } else if (_0x46aa36 >= _0x35ef14) {
        _0x46aa36 = _0x35ef14;
        _0x159d98 = -Math['abs'](_0x159d98);
    }
    _0x1cdb4b['CAMERA']['x'] = _0x216d65;
    _0x1cdb4b['CAMERA']['y'] = _0x46aa36;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x1ef346 = document['getElementById']('play-btn');
    const _0x581c68 = document['getElementById']('username-input');
    const _0x189fb2 = localStorage['getItem']('playerName');
    if (_0x189fb2 && _0x581c68) {
        _0x581c68['value'] = _0x189fb2;
    }
    const _0x17325a = () => {
        _0x1dd078['play']('wait');
        document['removeEventListener']('click', _0x17325a);
        document['removeEventListener']('keydown', _0x17325a);
        document['removeEventListener']('touchstart', _0x17325a);
    };
    document['addEventListener']('click', _0x17325a, { 'once': !![] });
    document['addEventListener']('keydown', _0x17325a, { 'once': !![] });
    document['addEventListener']('touchstart', _0x17325a, { 'once': !![] });
    if (_0x1ef346) {
        _0x1ef346['addEventListener']('click', () => {
            const _0x51fcca = window['_FB'] && window['_FB']['_currentUser'];
            const _0x23aa56 = window['_FB'] && window['_FB']['_userData'];
            let _0x165257 = !![];
            if (_0x51fcca && _0x23aa56 && _0x23aa56['username']) {
                _0x7f9760 = _0x23aa56['username'];
                _0x165257 = ![];
            } else {
                const _0x51a776 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x7f9760 = 'user' + _0x51a776;
                _0x165257 = !![];
            }
            const _0x5c257e = _0x165257 ? 'body01.png' : _0x36664;
            const _0x541ac6 = _0x165257 ? 'eyes4.png' : _0x578d3b;
            const _0x5be3d9 = !_0x165257 && _0x23aa56 && _0x23aa56['photoURL'] ? _0x23aa56['photoURL'] : '';
            const _0x5a39e9 = !_0x165257 && _0x51fcca ? _0x51fcca['uid'] : '';
            localStorage['setItem']('playerName', _0x7f9760);
            _0x36fd65 = ![];
            _0x1cdb4b['CAMERA']['x'] = null;
            _0x1cdb4b['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x56c1b6 = document['getElementById']('chat-log-wrap');
            if (_0x56c1b6)
                _0x56c1b6['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x430be4 = document['getElementById']('controls-hint');
            if (_0x430be4 && !_0x3e73f9)
                _0x430be4['style']['display'] = 'block';
            _0x20db81();
            if (_0x3e73f9) {
                const _0x118944 = document['getElementById']('leaderboard-list');
                const _0x21898b = document['getElementById']('leaderboard-toggle');
                if (_0x118944) {
                    _0x118944['style']['display'] = 'none';
                    if (_0x21898b)
                        _0x21898b['style']['transform'] = 'rotate(180deg)';
                }
                const _0x4aa6e1 = document['getElementById']('role-list-items');
                const _0x49ac75 = document['getElementById']('role-list-toggle');
                if (_0x4aa6e1) {
                    _0x4aa6e1['style']['display'] = 'none';
                    if (_0x49ac75)
                        _0x49ac75['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x3f5011 = !_0x165257 && _0x23aa56 ? {
                'townWins': _0x23aa56['townWins'] || 0x0,
                'mafiaWins': _0x23aa56['mafiaWins'] || 0x0,
                'deaths': _0x23aa56['deaths'] || 0x0,
                'townLosses': _0x23aa56['townLosses'] || 0x0,
                'mafiaLosses': _0x23aa56['mafiaLosses'] || 0x0
            } : null;
            const _0x3a13e5 = JSON['stringify']({
                'type': 'join',
                'name': _0x7f9760,
                'token': _0x568ab1,
                'body': _0x5c257e,
                'eyes': _0x541ac6,
                'isGuest': _0x165257,
                'uid': _0x5a39e9,
                'photoURL': _0x5be3d9,
                'accountStats': _0x3f5011
            });
            if (_0x59c043 && _0x59c043['readyState'] === WebSocket['OPEN']) {
                _0x59c043['send'](_0x3a13e5);
            } else if (!_0x59c043 || _0x59c043['readyState'] === WebSocket['CLOSED'] || _0x59c043['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x3a13e5;
                _0xdd89f5();
            }
        });
    }
    _0x424ae6();
    _0xdd89f5();
    _0x42beeb();
    _0x4d63db();
    _0xe56f7();
    _0x17f0e0();
});
const _0x25350c = [
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
let _0x6fad9c = 'Town';
let _0x3e9813 = 0x0;
function _0x7684a6() {
    const _0x7cba81 = document['getElementById']('role-index-main-tabs');
    const _0x1ffbdf = document['getElementById']('role-index-tabs');
    const _0x462727 = document['getElementById']('role-index-body');
    if (!_0x1ffbdf || !_0x462727)
        return;
    if (_0x7cba81) {
        _0x7cba81['innerHTML'] = '';
        const _0x4da28e = document['createElement']('button');
        _0x4da28e['className'] = 'role-index-main-tab-btn\x20main-town' + (_0x6fad9c === 'Town' ? '\x20active' : '');
        _0x4da28e['textContent'] = 'TOWN';
        _0x4da28e['addEventListener']('click', () => {
            _0x6fad9c = 'Town';
            _0x3e9813 = 0x0;
            _0x7684a6();
        });
        _0x7cba81['appendChild'](_0x4da28e);
        const _0x2abf42 = document['createElement']('button');
        _0x2abf42['className'] = 'role-index-main-tab-btn\x20main-mafia' + (_0x6fad9c === 'Mafia' ? '\x20active' : '');
        _0x2abf42['textContent'] = 'MAFIA';
        _0x2abf42['addEventListener']('click', () => {
            _0x6fad9c = 'Mafia';
            _0x3e9813 = 0x0;
            _0x7684a6();
        });
        _0x7cba81['appendChild'](_0x2abf42);
    }
    const _0x261393 = _0x25350c['filter'](_0x452ed9 => _0x452ed9['faction'] === _0x6fad9c);
    _0x1ffbdf['innerHTML'] = '';
    _0x261393['forEach']((_0x44ced6, _0x4110a6) => {
        const _0x2cd784 = document['createElement']('button');
        _0x2cd784['className'] = 'role-index-tab-btn' + (_0x44ced6['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x4110a6 === _0x3e9813 ? '\x20active' : '');
        _0x2cd784['textContent'] = _0x44ced6['name'];
        _0x2cd784['addEventListener']('click', () => {
            _0x3e9813 = _0x4110a6;
            _0x7684a6();
        });
        _0x1ffbdf['appendChild'](_0x2cd784);
    });
    const _0x9f9fdb = _0x261393[_0x3e9813] || _0x261393[0x0];
    _0x462727['innerHTML'] = '';
    if (!_0x9f9fdb)
        return;
    const _0x46d303 = document['createElement']('div');
    _0x46d303['className'] = 'role-index-title-row';
    const _0x288581 = document['createElement']('span');
    _0x288581['className'] = 'role-index-name\x20' + (_0x9f9fdb['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0x288581['textContent'] = _0x9f9fdb['name'];
    _0x46d303['appendChild'](_0x288581);
    const _0x20c97b = document['createElement']('span');
    _0x20c97b['className'] = 'role-index-faction-badge\x20' + (_0x9f9fdb['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x20c97b['textContent'] = _0x9f9fdb['faction'];
    _0x46d303['appendChild'](_0x20c97b);
    _0x462727['appendChild'](_0x46d303);
    _0x9f9fdb['paragraphs']['forEach'](_0x1770e6 => {
        const _0x2bcbd1 = document['createElement']('p');
        _0x2bcbd1['className'] = 'role-index-desc-paragraph';
        _0x2bcbd1['innerHTML'] = _0x1770e6;
        _0x462727['appendChild'](_0x2bcbd1);
    });
}
function _0x17f0e0() {
    const _0xa8adb3 = document['getElementById']('role-index-btn');
    const _0x144b30 = document['getElementById']('role-index-modal');
    const _0x57dc4f = document['getElementById']('close-role-index-btn');
    const _0x35de = document['getElementById']('mob-top-index');
    if (_0xa8adb3 && _0x144b30) {
        _0xa8adb3['addEventListener']('click', _0x545768 => {
            _0x545768['stopPropagation']();
            if (_0x144b30['style']['display'] === 'none' || !_0x144b30['style']['display']) {
                _0x7684a6();
                _0x144b30['style']['display'] = 'flex';
            } else {
                _0x144b30['style']['display'] = 'none';
            }
        });
    }
    if (_0x57dc4f && _0x144b30) {
        _0x57dc4f['addEventListener']('click', _0x210199 => {
            _0x210199['stopPropagation']();
            _0x144b30['style']['display'] = 'none';
        });
    }
    if (_0x35de && _0x144b30) {
        _0x35de['addEventListener']('click', _0x1c5967 => {
            _0x1c5967['stopPropagation']();
            if (_0x144b30['style']['display'] === 'none' || !_0x144b30['style']['display']) {
                _0x7684a6();
                _0x144b30['style']['display'] = 'flex';
            } else {
                _0x144b30['style']['display'] = 'none';
            }
        });
    }
}
function _0x4d63db() {
    const _0x432cf1 = document['getElementById']('settings-btn');
    const _0x5dd483 = document['getElementById']('settings-panel');
    const _0x341dd0 = document['getElementById']('close-settings-btn');
    const _0x44d82b = document['getElementById']('setting-mouse-relative');
    if (_0x44d82b) {
        _0x44d82b['checked'] = _0x43d611;
        _0x44d82b['addEventListener']('change', () => {
            _0x43d611 = _0x44d82b['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x43d611 ? 'true' : 'false');
        });
    }
    const _0x2e8e24 = document['getElementById']('setting-music-volume');
    const _0x41b95e = document['getElementById']('setting-music-volume-display');
    function _0x21ed7b(_0x552316) {
        const _0xb60177 = (_0x552316['value'] - _0x552316['min']) / (_0x552316['max'] - _0x552316['min']) * 0x64;
        _0x552316['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0xb60177 + '%,\x20#444\x20' + _0xb60177 + '%)';
    }
    if (_0x2e8e24) {
        const _0x5b0958 = _0x1dd078['getVolume']();
        const _0x1e0f75 = Math['round'](_0x5b0958 * 0x64);
        _0x2e8e24['value'] = _0x1e0f75;
        if (_0x41b95e)
            _0x41b95e['textContent'] = _0x1e0f75 + '%';
        _0x21ed7b(_0x2e8e24);
        _0x2e8e24['addEventListener']('input', () => {
            const _0x48be3f = parseInt(_0x2e8e24['value'], 0xa);
            if (_0x41b95e)
                _0x41b95e['textContent'] = _0x48be3f + '%';
            _0x21ed7b(_0x2e8e24);
            _0x1dd078['setVolume'](_0x48be3f / 0x64);
            _0x1dd078['setMuted'](_0x48be3f === 0x0);
        });
    }
    if (_0x432cf1 && _0x5dd483) {
        _0x432cf1['addEventListener']('click', _0x3d262b => {
            _0x3d262b['stopPropagation']();
            _0x5dd483['style']['display'] = _0x5dd483['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x341dd0 && _0x5dd483) {
        _0x341dd0['addEventListener']('click', () => {
            _0x5dd483['style']['display'] = 'none';
        });
    }
    const _0x189f5a = document['getElementById']('mayor-confirm-yes');
    const _0x5c55f5 = document['getElementById']('mayor-confirm-no');
    const _0x1e13e4 = document['getElementById']('mayor-confirm-dialog');
    if (_0x189f5a && _0x1e13e4) {
        _0x189f5a['addEventListener']('click', () => {
            if (_0x59c043 && _0x59c043['readyState'] === WebSocket['OPEN']) {
                _0x59c043['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x1e13e4['style']['display'] = 'none';
        });
    }
    if (_0x5c55f5 && _0x1e13e4) {
        _0x5c55f5['addEventListener']('click', () => {
            _0x1e13e4['style']['display'] = 'none';
        });
    }
    const _0x5d79f3 = document['getElementById']('close-ability-btn');
    if (_0x5d79f3) {
        _0x5d79f3['addEventListener']('click', () => {
            const _0x262fbe = document['getElementById']('ability-ui');
            if (_0x262fbe)
                _0x262fbe['style']['display'] = 'none';
        });
    }
}
let _0x512243 = '';
function _0x2dad56(_0x5e4701) {
    const _0x32932e = document['getElementById']('vote-tally-panel');
    const _0x60879f = document['getElementById']('vote-tally-list');
    if (!_0x32932e || !_0x60879f)
        return;
    if (_0x5e4701['state'] !== 'DAY_VOTE') {
        _0x32932e['style']['display'] = 'none';
        _0x512243 = '';
        return;
    }
    _0x32932e['style']['display'] = 'block';
    const _0x289517 = {};
    for (const _0x1a7eab in _0x41c578) {
        if (!_0x41c578[_0x1a7eab]['isDead'])
            _0x289517[_0x1a7eab] = 0x0;
    }
    if (_0xa2c3d && !_0x3f99ad['isDead'])
        _0x289517[_0xa2c3d] = 0x0;
    const _0x33e3d0 = _0x5e4701['votes'] || {};
    for (const _0x322c11 in _0x33e3d0) {
        const _0x2668be = _0x33e3d0[_0x322c11];
        const _0x21c8da = _0x5e4701['mayorRevealed'] && _0x5e4701['mayorRevealed'][_0x322c11] ? 0x2 : 0x1;
        _0x289517[_0x2668be] = (_0x289517[_0x2668be] || 0x0) + _0x21c8da;
    }
    let _0x1c1ffe = 0x0;
    const _0x4cd7d6 = _0x5e4701['skips'] || {};
    for (const _0x51f274 in _0x4cd7d6) {
        _0x1c1ffe += Number(_0x4cd7d6[_0x51f274]) || 0x1;
    }
    const _0x125a1d = JSON['stringify'](_0x289517) + '_' + _0x1c1ffe + '_' + _0x3f99ad['isDead'];
    if (_0x125a1d === _0x512243)
        return;
    _0x512243 = _0x125a1d;
    _0x60879f['innerHTML'] = '';
    for (const _0x59d269 in _0x289517) {
        const _0x3413c3 = parseInt(_0x59d269);
        const _0x16e217 = _0x3413c3 === _0xa2c3d ? _0x7f9760 : _0x41c578[_0x59d269] ? _0x41c578[_0x59d269]['name'] : 'Player\x20' + _0x59d269;
        const _0x12735d = document['createElement']('div');
        _0x12735d['className'] = 'vote-tally-entry';
        const _0x3cf28e = document['createElement']('span');
        _0x3cf28e['textContent'] = _0x16e217;
        const _0x12c4ce = document['createElement']('span');
        _0x12c4ce['className'] = 'vote-count';
        _0x12c4ce['textContent'] = _0x289517[_0x59d269] + '\x20vote' + (_0x289517[_0x59d269] === 0x1 ? '' : 's');
        _0x12735d['appendChild'](_0x3cf28e);
        _0x12735d['appendChild'](_0x12c4ce);
        if (_0x3413c3 !== _0xa2c3d && !_0x3f99ad['isDead']) {
            _0x12735d['style']['cursor'] = 'pointer';
            _0x12735d['title'] = 'Vote\x20for\x20' + _0x16e217;
            _0x12735d['addEventListener']('click', _0x3ea943 => {
                _0x3ea943['stopPropagation']();
                if (_0x59c043 && _0x59c043['readyState'] === WebSocket['OPEN']) {
                    _0x59c043['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x16e217
                    }));
                }
            });
        }
        _0x60879f['appendChild'](_0x12735d);
    }
    const _0x9b00d5 = document['createElement']('div');
    _0x9b00d5['className'] = 'vote-tally-skip';
    _0x9b00d5['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x1c1ffe + '</span>';
    if (!_0x3f99ad['isDead']) {
        _0x9b00d5['style']['cursor'] = 'pointer';
        _0x9b00d5['title'] = 'Click\x20to\x20skip\x20vote';
        _0x9b00d5['addEventListener']('click', _0x4132ca => {
            _0x4132ca['stopPropagation']();
            if (_0x59c043 && _0x59c043['readyState'] === WebSocket['OPEN']) {
                _0x59c043['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x60879f['appendChild'](_0x9b00d5);
}
let _0x44d2b9 = null;
let _0x2faf84 = null;
let _0x18e671 = null;
let _0x5a8b6f = null;
let _0x46de8b = null;
function _0x50d41d() {
    if (_0x59c043 && _0x59c043['readyState'] === WebSocket['OPEN']) {
        _0x59c043['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x44d2b9,
            'abilityTarget': _0x2faf84,
            'killTarget': _0x18e671
        }));
    }
}
function _0x33bdbf() {
    if (_0x59c043 && _0x59c043['readyState'] === WebSocket['OPEN']) {
        _0x59c043['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'blackmailTarget': _0x5a8b6f,
            'killTarget': _0x46de8b
        }));
    }
}
function _0x2d460d() {
    const _0x1d1a7a = document['getElementById']('ability-ui-body');
    if (!_0x1d1a7a)
        return;
    _0x1d1a7a['innerHTML'] = '';
    if (_0x289ac2 === 'Celebrity' || _0x289ac2 === 'Mayor') {
        const _0x4bf6 = document['createElement']('div');
        _0x4bf6['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x4bf6['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x1d1a7a['appendChild'](_0x4bf6);
        return;
    }
    if (_0x289ac2 === 'Blackmailer') {
        const _0x4f7878 = document['createElement']('div');
        _0x4f7878['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x4f7878['innerText'] = 'Blackmail\x20Target\x20(Silences\x20for\x20full\x20day):';
        _0x1d1a7a['appendChild'](_0x4f7878);
        const _0x28eaaf = document['createElement']('div');
        _0x28eaaf['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x377386 = document['createElement']('button');
        _0x377386['className'] = 'layer-btn';
        _0x377386['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x377386['innerText'] = 'No\x20one';
        if (_0x5a8b6f === null)
            _0x377386['classList']['add']('active');
        _0x377386['onclick'] = () => {
            _0x5a8b6f = null;
            _0x33bdbf();
            _0x2d460d();
        };
        _0x28eaaf['appendChild'](_0x377386);
        for (const _0x6387f7 in _0x41c578) {
            const _0x5d59b1 = _0x41c578[_0x6387f7];
            if (_0x5d59b1['isDead'])
                continue;
            const _0xfc4517 = document['createElement']('button');
            _0xfc4517['className'] = 'layer-btn';
            _0xfc4517['innerText'] = _0x5d59b1['name'];
            if (_0x5a8b6f === parseInt(_0x6387f7))
                _0xfc4517['classList']['add']('active');
            _0xfc4517['onclick'] = () => {
                _0x5a8b6f = parseInt(_0x6387f7);
                _0x33bdbf();
                _0x2d460d();
            };
            _0x28eaaf['appendChild'](_0xfc4517);
        }
        if (!_0x3f99ad['isDead']) {
            const _0x82f46 = document['createElement']('button');
            _0x82f46['className'] = 'layer-btn';
            _0x82f46['style']['cssText'] = 'grid-column:\x20span\x202;';
            _0x82f46['innerText'] = _0x7f9760 + '\x20(Self\x20-\x20Decoy)';
            if (_0x5a8b6f === _0xa2c3d)
                _0x82f46['classList']['add']('active');
            _0x82f46['onclick'] = () => {
                _0x5a8b6f = _0xa2c3d;
                _0x33bdbf();
                _0x2d460d();
            };
            _0x28eaaf['appendChild'](_0x82f46);
        }
        _0x1d1a7a['appendChild'](_0x28eaaf);
        const _0x12abe9 = document['createElement']('div');
        _0x12abe9['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x12abe9['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x1d1a7a['appendChild'](_0x12abe9);
        const _0x29aad0 = document['createElement']('div');
        _0x29aad0['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x5b3a2c = document['createElement']('button');
        _0x5b3a2c['className'] = 'layer-btn';
        _0x5b3a2c['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x5b3a2c['innerText'] = 'No\x20one';
        if (!_0x46de8b && !_0x1cdb4b['CURRENT_TARGET'])
            _0x5b3a2c['classList']['add']('active');
        _0x5b3a2c['onclick'] = () => {
            _0x46de8b = null;
            _0x1cdb4b['CURRENT_TARGET'] = null;
            _0x33bdbf();
            _0x2d460d();
        };
        _0x29aad0['appendChild'](_0x5b3a2c);
        for (const _0x5ef504 in _0x41c578) {
            const _0x39dac8 = _0x41c578[_0x5ef504];
            if (_0x39dac8['isDead'])
                continue;
            const _0x2d7583 = document['createElement']('button');
            _0x2d7583['className'] = 'layer-btn';
            _0x2d7583['innerText'] = _0x39dac8['name'];
            if (_0x46de8b === parseInt(_0x5ef504) || _0x1cdb4b['CURRENT_TARGET'] === parseInt(_0x5ef504))
                _0x2d7583['classList']['add']('active');
            _0x2d7583['onclick'] = () => {
                _0x46de8b = parseInt(_0x5ef504);
                _0x1cdb4b['CURRENT_TARGET'] = parseInt(_0x5ef504);
                _0x33bdbf();
                _0x2d460d();
            };
            _0x29aad0['appendChild'](_0x2d7583);
        }
        _0x1d1a7a['appendChild'](_0x29aad0);
        return;
    }
    if (_0x289ac2 === 'Skinwalker') {
        const _0x43d1cb = document['createElement']('div');
        _0x43d1cb['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x43d1cb['innerText'] = 'Transform\x20into:';
        _0x1d1a7a['appendChild'](_0x43d1cb);
        const _0xdbecd0 = document['createElement']('div');
        _0xdbecd0['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x56c7aa = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x3128d9 = _0x5cc732 => {
            if (_0x1cdb4b['ROLES_IN_GAME'] && Array['isArray'](_0x1cdb4b['ROLES_IN_GAME'])) {
                return _0x1cdb4b['ROLES_IN_GAME']['includes'](_0x5cc732);
            }
            if (_0x1cdb4b['ROLE_LIST_RAW'] && _0x1cdb4b['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x1cdb4b['ROLE_LIST_RAW']['some'](_0x3a91da => _0x3a91da['name'] === _0x5cc732 && !_0x3a91da['isDead']);
            }
            return ![];
        };
        const _0x42782d = [
            'None',
            ..._0x56c7aa['filter'](_0x3128d9)
        ];
        _0x42782d['forEach'](_0x1345b0 => {
            const _0x58627d = document['createElement']('button');
            _0x58627d['className'] = 'layer-btn';
            _0x58627d['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x58627d['innerText'] = _0x1345b0;
            const _0x11876a = _0x1345b0 === 'None' && !_0x44d2b9 || _0x44d2b9 === _0x1345b0;
            if (_0x11876a)
                _0x58627d['classList']['add']('active');
            const _0x1f30b2 = _0x1345b0 !== 'None' && _0x1cdb4b['SKINWALKER_LAST_ROLE'] && _0x1cdb4b['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x1345b0['toLowerCase']();
            if (_0x1f30b2) {
                _0x58627d['style']['opacity'] = '0.45';
                _0x58627d['style']['cursor'] = 'not-allowed';
                _0x58627d['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x58627d['onclick'] = () => {
                    _0x13a991('You\x20cannot\x20transform\x20into\x20' + _0x1345b0 + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x58627d['onclick'] = () => {
                    _0x44d2b9 = _0x1345b0 === 'None' ? null : _0x1345b0;
                    _0x50d41d();
                    _0x2d460d();
                };
            }
            _0xdbecd0['appendChild'](_0x58627d);
        });
        _0x1d1a7a['appendChild'](_0xdbecd0);
        if (_0x3128d9('Vigilante')) {
            const _0x45b777 = document['createElement']('div');
            _0x45b777['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x45b777['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x1d1a7a['appendChild'](_0x45b777);
        }
        if (_0x44d2b9 === 'Vigilante') {
            const _0x276e68 = document['createElement']('div');
            _0x276e68['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x276e68['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x1d1a7a['appendChild'](_0x276e68);
        } else if (_0x44d2b9 && _0x44d2b9 !== 'Celebrity') {
            const _0x2fccd1 = document['createElement']('div');
            _0x2fccd1['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x2fccd1['innerText'] = 'Use\x20' + _0x44d2b9 + '\x20ability\x20on:';
            _0x1d1a7a['appendChild'](_0x2fccd1);
            const _0x2674ae = document['createElement']('div');
            _0x2674ae['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x1cf597 = document['createElement']('button');
            _0x1cf597['className'] = 'layer-btn';
            _0x1cf597['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x1cf597['innerText'] = 'No\x20one';
            if (!_0x2faf84)
                _0x1cf597['classList']['add']('active');
            _0x1cf597['onclick'] = () => {
                _0x2faf84 = null;
                _0x50d41d();
                _0x2d460d();
            };
            _0x2674ae['appendChild'](_0x1cf597);
            for (const _0x3b55d3 in _0x41c578) {
                const _0x16ae30 = _0x41c578[_0x3b55d3];
                if (_0x16ae30['isDead'])
                    continue;
                const _0x3dba6e = document['createElement']('button');
                _0x3dba6e['className'] = 'layer-btn';
                _0x3dba6e['innerText'] = _0x16ae30['name'];
                if (_0x2faf84 === parseInt(_0x3b55d3))
                    _0x3dba6e['classList']['add']('active');
                _0x3dba6e['onclick'] = () => {
                    _0x2faf84 = parseInt(_0x3b55d3);
                    _0x50d41d();
                    _0x2d460d();
                };
                _0x2674ae['appendChild'](_0x3dba6e);
            }
            _0x1d1a7a['appendChild'](_0x2674ae);
        }
        const _0x39c5cc = document['createElement']('div');
        _0x39c5cc['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x39c5cc['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x1d1a7a['appendChild'](_0x39c5cc);
        const _0x38e8a2 = document['createElement']('div');
        _0x38e8a2['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x4331d8 = document['createElement']('button');
        _0x4331d8['className'] = 'layer-btn';
        _0x4331d8['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x4331d8['innerText'] = 'No\x20one';
        if (!_0x18e671 && !_0x1cdb4b['CURRENT_TARGET'])
            _0x4331d8['classList']['add']('active');
        _0x4331d8['onclick'] = () => {
            _0x18e671 = null;
            _0x1cdb4b['CURRENT_TARGET'] = null;
            _0x50d41d();
            _0x2d460d();
        };
        _0x38e8a2['appendChild'](_0x4331d8);
        for (const _0x104a3c in _0x41c578) {
            const _0xee4ec3 = _0x41c578[_0x104a3c];
            if (_0xee4ec3['isDead'])
                continue;
            const _0x4f3312 = document['createElement']('button');
            _0x4f3312['className'] = 'layer-btn';
            _0x4f3312['innerText'] = _0xee4ec3['name'];
            if (_0x18e671 === parseInt(_0x104a3c) || _0x1cdb4b['CURRENT_TARGET'] === parseInt(_0x104a3c))
                _0x4f3312['classList']['add']('active');
            _0x4f3312['onclick'] = () => {
                _0x18e671 = parseInt(_0x104a3c);
                _0x1cdb4b['CURRENT_TARGET'] = parseInt(_0x104a3c);
                _0x50d41d();
                _0x2d460d();
            };
            _0x38e8a2['appendChild'](_0x4f3312);
        }
        _0x1d1a7a['appendChild'](_0x38e8a2);
        return;
    }
    let _0x48fa69 = '';
    let _0x35d19c = ![];
    if (_0x289ac2 === 'Doctor') {
        _0x48fa69 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x35d19c = !![];
    } else if (_0x289ac2 === 'Investigator') {
        _0x48fa69 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x289ac2 === 'Tracker') {
        _0x48fa69 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x289ac2 === 'Archer') {
        _0x48fa69 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x289ac2 === 'Escort') {
        _0x48fa69 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x289ac2 === 'Vigilante') {
        _0x48fa69 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x5461a6 = document['createElement']('div');
    _0x5461a6['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x5461a6['innerText'] = _0x48fa69;
    _0x1d1a7a['appendChild'](_0x5461a6);
    const _0x565c79 = document['createElement']('div');
    _0x565c79['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x2433e3 = document['createElement']('button');
    _0x2433e3['className'] = 'layer-btn';
    _0x2433e3['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x2433e3['innerText'] = 'No\x20one';
    if (_0x1cdb4b['CURRENT_TARGET'] === null)
        _0x2433e3['classList']['add']('active');
    _0x2433e3['onclick'] = () => {
        _0x1cdb4b['CURRENT_TARGET'] = null;
        if (_0x59c043 && _0x59c043['readyState'] === WebSocket['OPEN']) {
            _0x59c043['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x2d460d();
    };
    _0x565c79['appendChild'](_0x2433e3);
    for (const _0x13363e in _0x41c578) {
        const _0x1f911d = _0x41c578[_0x13363e];
        if (_0x1f911d['isDead'])
            continue;
        const _0x4bfb84 = document['createElement']('button');
        _0x4bfb84['className'] = 'layer-btn';
        _0x4bfb84['innerText'] = _0x1f911d['name'];
        if (_0x1cdb4b['CURRENT_TARGET'] === parseInt(_0x13363e))
            _0x4bfb84['classList']['add']('active');
        _0x4bfb84['onclick'] = () => {
            _0x1cdb4b['CURRENT_TARGET'] = parseInt(_0x13363e);
            if (_0x59c043 && _0x59c043['readyState'] === WebSocket['OPEN']) {
                _0x59c043['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x13363e)
                }));
            }
            _0x2d460d();
        };
        _0x565c79['appendChild'](_0x4bfb84);
    }
    if (_0x35d19c && !_0x3f99ad['isDead']) {
        const _0x22982a = document['createElement']('button');
        _0x22982a['className'] = 'layer-btn';
        _0x22982a['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x22982a['innerText'] = _0x7f9760 + '\x20(Self)';
        if (_0x1cdb4b['CURRENT_TARGET'] === _0xa2c3d)
            _0x22982a['classList']['add']('active');
        _0x22982a['onclick'] = () => {
            _0x1cdb4b['CURRENT_TARGET'] = _0xa2c3d;
            if (_0x59c043 && _0x59c043['readyState'] === WebSocket['OPEN']) {
                _0x59c043['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0xa2c3d
                }));
            }
            _0x2d460d();
        };
        _0x565c79['appendChild'](_0x22982a);
    }
    _0x1d1a7a['appendChild'](_0x565c79);
}
function _0xdd89f5() {
    if (_0x59c043 && (_0x59c043['readyState'] === WebSocket['OPEN'] || _0x59c043['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x46afb4 = new URLSearchParams();
    if (_0x568ab1)
        _0x46afb4['set']('token', _0x568ab1);
    _0x46afb4['set']('ngrok-skip-browser-warning', 'true');
    const _0x4dbbed = 'wss://this-studying-motherboard-emissions.trycloudflare.com';
    const _0x1bda27 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x4dbbed;
    const _0x3b819f = _0x1bda27 + '/?' + _0x46afb4['toString']();
    _0x59c043 = new WebSocket(_0x3b819f);
    _0x59c043['onopen'] = function () {
        if (!_0x36fd65 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x624597 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x2e999f = window['_FB'] && window['_FB']['_userData'];
                const _0x14585e = !(_0x624597 && _0x2e999f && _0x2e999f['username']);
                const _0x46767b = _0x14585e ? 'body01.png' : _0x36664;
                const _0x677f73 = _0x14585e ? 'eyes4.png' : _0x578d3b;
                const _0x30caec = !_0x14585e && _0x2e999f && _0x2e999f['photoURL'] ? _0x2e999f['photoURL'] : '';
                const _0x209ce5 = !_0x14585e && _0x624597 ? _0x624597['uid'] : '';
                const _0x10a0f4 = !_0x14585e && _0x2e999f ? {
                    'townWins': _0x2e999f['townWins'] || 0x0,
                    'mafiaWins': _0x2e999f['mafiaWins'] || 0x0,
                    'deaths': _0x2e999f['deaths'] || 0x0,
                    'townLosses': _0x2e999f['townLosses'] || 0x0,
                    'mafiaLosses': _0x2e999f['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x7f9760,
                    'token': _0x568ab1,
                    'body': _0x46767b,
                    'eyes': _0x677f73,
                    'isGuest': _0x14585e,
                    'uid': _0x209ce5,
                    'photoURL': _0x30caec,
                    'accountStats': _0x10a0f4
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x59c043 && _0x59c043['readyState'] === WebSocket['OPEN']) {
            _0x59c043['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x59c043['onclose'] = _0x2a8305 => {
        if (_0x2a8305['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x2a8305['code'] === 0xfa2 || _0x2a8305['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x43c8bb = document['getElementById']('disconnect-overlay');
        if (!_0x43c8bb) {
            _0x43c8bb = document['createElement']('div');
            _0x43c8bb['id'] = 'disconnect-overlay';
            _0x43c8bb['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x43c8bb['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x43c8bb);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x59c043['onmessage'] = _0x58503c => {
        const _0xf5c7e6 = JSON['parse'](_0x58503c['data']);
        if (_0xf5c7e6['type'] === 'map_data') {
            _0x1cdb4b['MAP']['tileSize'] = _0xf5c7e6['map']['tileSize'];
            _0x1cdb4b['MAP']['columns'] = _0xf5c7e6['map']['columns'];
            _0x1cdb4b['MAP']['rows'] = _0xf5c7e6['map']['rows'];
            _0x1cdb4b['MAP']['layers'] = _0xf5c7e6['map']['layers'];
            if (_0xf5c7e6['map']['doors']) {
                _0x1cdb4b['MAP']['doors'] = _0xf5c7e6['map']['doors'];
                const _0x449b3d = _0x1cdb4b['MAP']['layers']['find'](_0x4c63b0 => _0x4c63b0['name'] === 'floor2');
                if (_0x449b3d) {
                    for (const _0x51ad40 in _0x1cdb4b['MAP']['doors']) {
                        _0x449b3d['data'][parseInt(_0x51ad40)] = 0x2;
                    }
                }
            }
            if (_0xf5c7e6['entities'])
                _0x1cdb4b['ENTITIES'] = _0xf5c7e6['entities'];
            _0x48f7cf();
            _0x1cdb4b['SYSTEM']['isReady'] = !![];
            _0x3eaf96();
            if (!_0x1cdb4b['SYSTEM']['_gameLoopRunning']) {
                _0x1cdb4b['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x48be3d);
            }
            return;
        }
        if (_0xf5c7e6['type'] === 'init') {
            _0xa2c3d = _0xf5c7e6['id'];
            _0x36fd65 = ![];
            _0x20db81();
            if (_0x3e73f9) {
                const _0x12048e = document['getElementById']('leaderboard-list');
                const _0x84f8ea = document['getElementById']('leaderboard-toggle');
                if (_0x12048e) {
                    _0x12048e['style']['display'] = 'none';
                    if (_0x84f8ea)
                        _0x84f8ea['style']['transform'] = 'rotate(180deg)';
                }
                const _0x1664fd = document['getElementById']('role-list-items');
                const _0x124d9b = document['getElementById']('role-list-toggle');
                if (_0x1664fd) {
                    _0x1664fd['style']['display'] = 'none';
                    if (_0x124d9b)
                        _0x124d9b['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x3ffc80 = _0xf5c7e6['isOwner'] || ![];
            _0x7f9760 = _0xf5c7e6['name'] || _0x7f9760;
            _0x1cdb4b['MAP']['tileSize'] = _0xf5c7e6['map']['tileSize'];
            _0x1cdb4b['MAP']['columns'] = _0xf5c7e6['map']['columns'];
            _0x1cdb4b['MAP']['rows'] = _0xf5c7e6['map']['rows'];
            _0x1cdb4b['MAP']['layers'] = _0xf5c7e6['map']['layers'];
            if (_0xf5c7e6['map']['doors']) {
                _0x1cdb4b['MAP']['doors'] = _0xf5c7e6['map']['doors'];
                const _0x5a10 = _0x1cdb4b['MAP']['layers']['find'](_0x665e8d => _0x665e8d['name'] === 'floor2');
                if (_0x5a10) {
                    for (const _0x396b7f in _0x1cdb4b['MAP']['doors']) {
                        _0x5a10['data'][parseInt(_0x396b7f)] = 0x2;
                    }
                }
            }
            if (_0xf5c7e6['entities'])
                _0x1cdb4b['ENTITIES'] = _0xf5c7e6['entities'];
            _0x48f7cf();
            _0x3f99ad['x'] = _0x1cdb4b['MAP']['columns'] * _0x1cdb4b['MAP']['tileSize'] / 0x2;
            _0x3f99ad['y'] = _0x1cdb4b['MAP']['rows'] * _0x1cdb4b['MAP']['tileSize'] / 0x2;
            _0x1cdb4b['CAMERA']['x'] = _0x3f99ad['x'] + _0x3f99ad['width'] / 0x2 - _0x1cdb4b['CAMERA']['width'] / 0x2;
            _0x1cdb4b['CAMERA']['y'] = _0x3f99ad['y'] + _0x3f99ad['height'] / 0x2 - _0x1cdb4b['CAMERA']['height'] / 0x2;
            if (_0x3ffc80) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x39598d();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x2864af = document['getElementById']('role-index-btn-wrap');
            if (_0x2864af)
                _0x2864af['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x1cdb4b['SYSTEM']['lastTime'] = performance['now']();
            _0x1cdb4b['SYSTEM']['isReady'] = !![];
            _0x5e7c71();
            if (!_0x1cdb4b['SYSTEM']['_gameLoopRunning']) {
                _0x1cdb4b['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x48be3d);
            }
            return;
        } else if (_0xf5c7e6['type'] === 'state') {
            const _0x5e4593 = {};
            for (const _0x5764e6 in _0xf5c7e6['players']) {
                if (parseInt(_0x5764e6) === _0xa2c3d)
                    continue;
                const _0x5575e7 = _0xf5c7e6['players'][_0x5764e6];
                const _0x2097f2 = _0x41c578[_0x5764e6];
                if (_0x2097f2) {
                    const _0x13763a = _0x5575e7['x'] - _0x2097f2['renderX'];
                    const _0x30cf8e = _0x5575e7['y'] - _0x2097f2['renderY'];
                    const _0x2af659 = _0x13763a * _0x13763a + _0x30cf8e * _0x30cf8e > 0x78 * 0x78;
                    Object['assign'](_0x2097f2, _0x5575e7);
                    if (_0x2af659) {
                        _0x2097f2['renderX'] = _0x5575e7['x'];
                        _0x2097f2['renderY'] = _0x5575e7['y'];
                    }
                    _0x5e4593[_0x5764e6] = _0x2097f2;
                } else {
                    _0x5e4593[_0x5764e6] = {
                        ..._0x5575e7,
                        'renderX': _0x5575e7['x'],
                        'renderY': _0x5575e7['y'],
                        'renderAngle': _0x5575e7['angle'] || 0x0
                    };
                }
            }
            _0x41c578 = _0x5e4593;
            _0x1cb5b1();
            if (_0xf5c7e6['players'][_0xa2c3d]) {
                const _0x5162f6 = _0xf5c7e6['players'][_0xa2c3d];
                _0x3f99ad['chats'] = _0x5162f6['chats'] || [];
                _0x3f99ad['isDead'] = _0x5162f6['isDead'];
                _0x3f99ad['hasArrow'] = _0x5162f6['hasArrow'] || ![];
                if (_0x5162f6['name'])
                    _0x7f9760 = _0x5162f6['name'];
                _0x5e7c71();
                const _0x489631 = Math['hypot'](_0x5162f6['x'] - _0x3f99ad['x'], _0x5162f6['y'] - _0x3f99ad['y']);
                if (_0x489631 > 0xfa) {
                    _0x3f99ad['x'] = _0x5162f6['x'];
                    _0x3f99ad['y'] = _0x5162f6['y'];
                } else if (_0x489631 > 0x50) {
                    _0x3f99ad['x'] += (_0x5162f6['x'] - _0x3f99ad['x']) * 0.06;
                    _0x3f99ad['y'] += (_0x5162f6['y'] - _0x3f99ad['y']) * 0.06;
                }
            }
            if (_0xf5c7e6['entities'])
                _0x1cdb4b['ENTITIES'] = _0xf5c7e6['entities'];
            if (_0xf5c7e6['game']) {
                _0x1cdb4b['GAME_STATE'] = _0xf5c7e6['game']['state'];
                _0x1cdb4b['NIGHT_ABILITY_OPEN'] = _0xf5c7e6['game']['nightAbilityOpen'];
                if (_0xf5c7e6['game']['bloodSplatters'])
                    _0x4616bb = _0xf5c7e6['game']['bloodSplatters'];
                if (_0xf5c7e6['game']['bloodDrops'])
                    _0x4761ad = _0xf5c7e6['game']['bloodDrops'];
                if (_0xf5c7e6['game']['blackmailed']) {
                    _0x1c1b09 = new Set(_0xf5c7e6['game']['blackmailed']);
                } else {
                    _0x1c1b09['clear']();
                }
                if (_0xf5c7e6['game']['mayorRevealed']) {
                    for (const _0x2bb2ab in _0xf5c7e6['game']['mayorRevealed']) {
                        _0x476fb4['add'](parseInt(_0x2bb2ab));
                    }
                }
                if (_0x1cdb4b['LAST_STATE'] !== _0x1cdb4b['GAME_STATE']) {
                    if (_0x1cdb4b['GAME_STATE'] !== 'NIGHT') {
                        _0x1cdb4b['CURRENT_TARGET'] = null;
                        _0x44d2b9 = null;
                        _0x2faf84 = null;
                        _0x18e671 = null;
                        _0x5a8b6f = null;
                        _0x46de8b = null;
                        const _0x4dc5f3 = document['getElementById']('ability-ui');
                        if (_0x4dc5f3)
                            _0x4dc5f3['style']['display'] = 'none';
                    }
                    if (_0x1cdb4b['GAME_STATE'] === 'NIGHT') {
                        _0x3f99ad['chats'] = [];
                        for (const _0x1aff47 in _0x41c578) {
                            _0x41c578[_0x1aff47]['chats'] = [];
                        }
                    }
                    _0x1cdb4b['LAST_STATE'] = _0x1cdb4b['GAME_STATE'];
                    _0x506a84();
                    _0x1dd078['onStateChange'](_0x1cdb4b['GAME_STATE'], _0xf5c7e6['game']['nightAbilityOpen']);
                }
                const _0x5c087f = document['getElementById']('phase-ui');
                if (_0x5c087f) {
                    if (_0xf5c7e6['game']['state'] === 'LOBBY') {
                        _0x5c087f['style']['display'] = 'none';
                    } else {
                        _0x5c087f['style']['display'] = 'block';
                    }
                    let _0x5ed42f = _0xf5c7e6['game']['state']['replace']('_', '\x20');
                    if (_0xf5c7e6['game']['state'] === 'DAY_DISCUSS') {
                        _0x5ed42f = 'DAY\x20' + (_0xf5c7e6['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0xf5c7e6['game']['timer'] + 's';
                    } else if (_0xf5c7e6['game']['state'] === 'DAY_VOTE') {
                        _0x5ed42f = 'DAY\x20' + (_0xf5c7e6['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0xf5c7e6['game']['timer'] + 's';
                    } else if (_0xf5c7e6['game']['state'] === 'NIGHT') {
                        const _0x5bc914 = _0xf5c7e6['game']['dayCount'] || 0x1;
                        if (_0xf5c7e6['game']['nightAbilityOpen']) {
                            _0x5ed42f = 'NIGHT\x20' + _0x5bc914 + '\x20ABILITY\x20PHASE';
                            const _0x1de1f3 = _0xf5c7e6['game']['abilityTimer'] !== undefined ? _0xf5c7e6['game']['abilityTimer'] : _0xf5c7e6['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x1de1f3 + 's';
                        } else {
                            _0x5ed42f = 'NIGHT\x20' + _0x5bc914;
                            document['getElementById']('phase-timer')['innerText'] = _0xf5c7e6['game']['timer'] + 's';
                        }
                    }
                    if (_0xf5c7e6['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x5ed42f;
                    }
                }
                if (_0xf5c7e6['game']['state'] === 'NIGHT') {
                    const _0x77fe33 = document['getElementById']('ability-timer-label');
                    if (_0x77fe33) {
                        const _0x274312 = _0xf5c7e6['game']['abilityTimer'] !== undefined ? _0xf5c7e6['game']['abilityTimer'] : _0xf5c7e6['game']['timer'];
                        _0x77fe33['innerText'] = _0xf5c7e6['game']['nightAbilityOpen'] ? _0x274312 + 's' : '';
                    }
                    if (_0xf5c7e6['game']['nightAbilityOpen'] && !_0x27fba9 && !_0x3f99ad['isDead']) {
                        _0x27fba9 = !![];
                        _0x2d460d();
                        const _0x59bc86 = document['getElementById']('ability-ui');
                        if (_0x59bc86)
                            _0x59bc86['style']['display'] = 'block';
                    }
                    if (!_0xf5c7e6['game']['nightAbilityOpen']) {
                        const _0x78d5c6 = document['getElementById']('ability-ui');
                        if (_0x78d5c6 && _0x78d5c6['style']['display'] === 'block') {
                            _0x78d5c6['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x27fba9 = ![];
                }
                if (_0xf5c7e6['game']['rolesInGame']) {
                    _0x1cdb4b['ROLES_IN_GAME'] = _0xf5c7e6['game']['rolesInGame'];
                }
                if (_0xf5c7e6['game']['skinwalkerLastRole'] !== undefined) {
                    _0x1cdb4b['SKINWALKER_LAST_ROLE'] = _0xf5c7e6['game']['skinwalkerLastRole'];
                }
                if (_0xf5c7e6['game']['state'] === 'NIGHT') {
                    const _0x448a84 = document['getElementById']('will-ui');
                    if (_0x448a84 && _0x448a84['style']['display'] === 'flex') {
                        _0x448a84['style']['display'] = 'none';
                        const _0x126250 = document['getElementById']('will-input');
                        if (_0x126250)
                            _0x126250['blur']();
                    }
                }
                _0x2dad56(_0xf5c7e6['game']);
                if (_0xf5c7e6['game']['roleListMode'] !== undefined) {
                    _0x1cdb4b['ROLE_LIST_RAW'] = _0xf5c7e6['game']['roleList'] || [];
                    _0x50d1b1(_0xf5c7e6['game']['roleList'], _0xf5c7e6['game']['roleListMode']);
                }
            }
        } else if (_0xf5c7e6['type'] === 'teleport') {
            _0x3f99ad['x'] = _0xf5c7e6['x'];
            _0x3f99ad['y'] = _0xf5c7e6['y'];
            _0x3f99ad['vx'] = 0x0;
            _0x3f99ad['vy'] = 0x0;
            _0x1cdb4b['CAMERA']['x'] = null;
            if (_0xf5c7e6['teleportId'] !== undefined)
                _0x497869 = _0xf5c7e6['teleportId'];
        } else if (_0xf5c7e6['type'] === 'bulk_teleport') {
            for (const _0x2aca05 in _0xf5c7e6['positions']) {
                const _0x30db09 = _0xf5c7e6['positions'][_0x2aca05];
                if (parseInt(_0x2aca05) === _0xa2c3d) {
                    _0x3f99ad['x'] = _0x30db09['x'];
                    _0x3f99ad['y'] = _0x30db09['y'];
                    _0x3f99ad['vx'] = 0x0;
                    _0x3f99ad['vy'] = 0x0;
                    _0x1cdb4b['CAMERA']['x'] = null;
                    continue;
                }
                const _0x30627e = _0x41c578[_0x2aca05];
                if (_0x30627e) {
                    _0x30627e['x'] = _0x30db09['x'];
                    _0x30627e['y'] = _0x30db09['y'];
                    _0x30627e['renderX'] = _0x30db09['x'];
                    _0x30627e['renderY'] = _0x30db09['y'];
                    _0x30627e['vx'] = 0x0;
                    _0x30627e['vy'] = 0x0;
                }
            }
        } else if (_0xf5c7e6['type'] === 'player_left') {
            delete _0x41c578[_0xf5c7e6['id']];
            _0x476fb4['delete'](parseInt(_0xf5c7e6['id']));
        } else if (_0xf5c7e6['type'] === 'map_update') {
            const _0x53f6fd = _0x1cdb4b['MAP']['layers']['find'](_0x167752 => _0x167752['name'] === _0xf5c7e6['layer']);
            if (_0x53f6fd) {
                _0x53f6fd['data'][_0xf5c7e6['row'] * _0x1cdb4b['MAP']['columns'] + _0xf5c7e6['col']] = _0xf5c7e6['gid'];
                const _0x27504d = _0xf5c7e6['row'] * _0x1cdb4b['MAP']['columns'] + _0xf5c7e6['col'];
                if (_0x1cdb4b['MAP']['doors'] && _0x1cdb4b['MAP']['doors'][_0x27504d]) {
                    const _0x4e2437 = _0x1cdb4b['MAP']['layers']['find'](_0x5eb631 => _0x5eb631['name'] === 'floor2');
                    if (_0x4e2437)
                        _0x4e2437['data'][_0x27504d] = 0x2;
                }
                const _0x468460 = Math['floor'](_0xf5c7e6['col'] * _0x1cdb4b['MAP']['tileSize'] / _0x1cdb4b['MAP']['chunkSize']);
                const _0x477844 = Math['floor'](_0xf5c7e6['row'] * _0x1cdb4b['MAP']['tileSize'] / _0x1cdb4b['MAP']['chunkSize']);
                _0xd44658(_0x468460, _0x477844);
            }
        } else if (_0xf5c7e6['type'] === 'role_assign') {
            _0x289ac2 = _0xf5c7e6['role'];
            _0x3f99ad['isDead'] = _0x289ac2 === 'Spectator';
            _0x476fb4['clear']();
            _0x1cdb4b['CURRENT_TARGET'] = null;
            _0x44d2b9 = null;
            _0x2faf84 = null;
            _0x18e671 = null;
            _0x5a8b6f = null;
            _0x46de8b = null;
            _0x27fba9 = ![];
            const _0x52eaa8 = document['getElementById']('ability-ui');
            if (_0x52eaa8)
                _0x52eaa8['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x289ac2;
            _0x506a84();
            _0x13a991(_0x289ac2 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x289ac2, !![]);
            let _0x12e134 = '';
            if (_0x289ac2 === 'Investigator')
                _0x12e134 = 'Investigate\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x289ac2 === 'Tracker')
                _0x12e134 = 'Track\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x289ac2 === 'Doctor')
                _0x12e134 = 'Heal\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x289ac2 === 'Archer')
                _0x12e134 = 'Guard\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x289ac2 === 'Escort')
                _0x12e134 = 'Roleblock\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x289ac2 === 'Vigilante')
                _0x12e134 = 'Shoot\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x289ac2 === 'Skinwalker')
                _0x12e134 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x289ac2 === 'Blackmailer')
                _0x12e134 = 'Pick\x20a\x20player\x20to\x20blackmail\x20and\x20a\x20player\x20to\x20kill\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x289ac2 === 'Celebrity')
                _0x12e134 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x289ac2 === 'Mayor')
                _0x12e134 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x13a991(_0x12e134, !![]);
        } else if (_0xf5c7e6['type'] === 'mayor_reveal') {
            _0x476fb4['add'](parseInt(_0xf5c7e6['playerId']));
            _0x5e7c71();
            _0x506a84();
        } else if (_0xf5c7e6['type'] === 'rolelist_update') {
            _0x1cdb4b['ROLE_LIST_RAW'] = _0xf5c7e6['list'] || [];
            _0x50d1b1(_0xf5c7e6['list'], _0xf5c7e6['mode']);
        } else if (_0xf5c7e6['type'] === 'sound_event') {
            _0x1dd078['onSoundEvent'](_0xf5c7e6['track']);
        } else if (_0xf5c7e6['type'] === 'blood_splatter') {
            _0x4616bb['push']({
                'x': _0xf5c7e6['x'],
                'y': _0xf5c7e6['y']
            });
        } else if (_0xf5c7e6['type'] === 'blood_drop') {
            _0x4761ad['push']({
                'x': _0xf5c7e6['x'],
                'y': _0xf5c7e6['y']
            });
        } else if (_0xf5c7e6['type'] === 'day_fade') {
            _0x5ba9ec = 0x1;
            _0x3dace2 = performance['now']() + 0x3e8;
        } else if (_0xf5c7e6['type'] === 'player_stats_updated') {
            const _0x563079 = parseInt(_0xf5c7e6['id']);
            if (_0x563079 === _0xa2c3d && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0xf5c7e6['accountStats']);
            }
            if (_0x41c578[_0xf5c7e6['id']]) {
                _0x41c578[_0xf5c7e6['id']]['accountStats'] = _0xf5c7e6['accountStats'];
            }
            _0x1cb5b1();
        } else if (_0xf5c7e6['type'] === 'stats_update') {
            const _0x4617a1 = window['_FB'];
            if (_0x4617a1 && _0x4617a1['_currentUser'] && _0x4617a1['_userData']) {
                const _0x36ab2e = _0x4617a1['_currentUser']['uid'];
                const _0x573b42 = _0xf5c7e6['patch'] || {};
                const _0x8064ea = _0x4617a1['_userData'];
                const _0x265d7b = {
                    'townWins': (_0x8064ea['townWins'] || 0x0) + (_0x573b42['townWins'] || 0x0),
                    'mafiaWins': (_0x8064ea['mafiaWins'] || 0x0) + (_0x573b42['mafiaWins'] || 0x0),
                    'deaths': (_0x8064ea['deaths'] || 0x0) + (_0x573b42['deaths'] || 0x0),
                    'townLosses': (_0x8064ea['townLosses'] || 0x0) + (_0x573b42['townLosses'] || 0x0),
                    'mafiaLosses': (_0x8064ea['mafiaLosses'] || 0x0) + (_0x573b42['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x4617a1['_userData'], _0x265d7b);
                const _0x3133a1 = _0x4617a1['doc'](_0x4617a1['db'], 'users', _0x36ab2e);
                _0x4617a1['updateDoc'](_0x3133a1, _0x265d7b)['catch'](() => {
                });
                if (_0x59c043 && _0x59c043['readyState'] === WebSocket['OPEN']) {
                    _0x59c043['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x265d7b
                    }));
                }
                _0x1cb5b1();
            }
        } else if (_0xf5c7e6['type'] === 'game_over') {
            _0x1dd078['onStateChange']('LOBBY', ![]);
            _0x50d1b1([], 'off');
            _0x289ac2 = null;
            _0x3f99ad['isDead'] = ![];
            _0x3f99ad['hasArrow'] = ![];
            _0x4616bb = [];
            _0x4761ad = [];
            _0x1c1b09['clear']();
            _0x476fb4['clear']();
            _0x1cdb4b['CURRENT_TARGET'] = null;
            _0x44d2b9 = null;
            _0x2faf84 = null;
            _0x18e671 = null;
            _0x5a8b6f = null;
            _0x46de8b = null;
            _0x27fba9 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x506a84();
            _0x13a991('The\x20game\x20has\x20ended.', !![]);
        } else if (_0xf5c7e6['type'] === 'chat_log') {
            _0x13a991(_0xf5c7e6['sender'] + ':\x20' + _0xf5c7e6['text'], ![], !!_0xf5c7e6['isHost']);
        } else if (_0xf5c7e6['type'] === 'sys_chat') {
            _0x13a991(_0xf5c7e6['text'], !![]);
        }
    };
}
function _0x13a991(_0x55d115, _0x5a500d = ![], _0x3b33bf = ![]) {
    const _0x157e74 = document['getElementById']('chat-log-messages');
    const _0x4113cf = document['getElementById']('chat-log-ui');
    const _0x4d36ad = _0x4113cf['scrollHeight'] - _0x4113cf['scrollTop'] - _0x4113cf['clientHeight'] < 0x1e;
    const _0x46dc02 = document['createElement']('div');
    _0x46dc02['className'] = 'chat-log-line' + (_0x5a500d ? '\x20sys-msg' : '') + (_0x3b33bf ? '\x20host-msg' : '');
    _0x46dc02['innerText'] = _0x55d115;
    _0x157e74['appendChild'](_0x46dc02);
    if (_0x4d36ad) {
        _0x4113cf['scrollTop'] = _0x4113cf['scrollHeight'];
    }
    if (_0x157e74['childElementCount'] > 0xc8) {
        _0x157e74['removeChild'](_0x157e74['firstChild']);
    }
}
function _0x323e1b(_0x448295, _0x4e7153, _0x9cac1d) {
    const _0xc292c6 = document['createElement']('canvas');
    _0xc292c6['width'] = _0x9cac1d;
    _0xc292c6['height'] = _0x9cac1d;
    const _0x479fb6 = _0xc292c6['getContext']('2d');
    _0x479fb6['imageSmoothingEnabled'] = ![];
    const _0x3285ef = 'assets/' + (_0x448295 || 'body01.png');
    const _0x499120 = _0x499f0c(_0x3285ef);
    if (_0x499120['complete'] && _0x499120['naturalWidth'] > 0x0)
        _0x479fb6['drawImage'](_0x499120, 0x0, 0x0, _0x9cac1d, _0x9cac1d);
    if (_0x4e7153) {
        const _0x27a282 = 'assets/' + _0x4e7153;
        const _0x2779b9 = _0x499f0c(_0x27a282);
        if (_0x2779b9['complete'] && _0x2779b9['naturalWidth'] > 0x0)
            _0x479fb6['drawImage'](_0x2779b9, 0x0, 0x0, _0x9cac1d, _0x9cac1d);
    }
    return _0xc292c6['toDataURL']();
}
let _0x178dd0 = '';
function _0x1cb5b1() {
    const _0x439d0d = document['getElementById']('chat-profile-panel');
    if (!_0x439d0d)
        return;
    const _0x4dbde4 = [];
    if (_0xa2c3d !== null) {
        const _0x1e96b0 = _0x36664 || 'body01.png';
        const _0x504602 = _0x578d3b || 'eyes4.png';
        const _0x326a94 = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x4dbde4['push']({
            'id': _0xa2c3d,
            'name': _0x7f9760,
            'body': _0x1e96b0,
            'eyes': _0x504602,
            'stats': _0x326a94
        });
    }
    for (const _0x296342 in _0x41c578) {
        const _0x51dc26 = _0x41c578[_0x296342];
        const _0x42db8f = _0x51dc26['accountStats'] || null;
        _0x4dbde4['push']({
            'id': parseInt(_0x296342),
            'name': _0x51dc26['name'],
            'body': _0x51dc26['body'] || 'body01.png',
            'eyes': _0x51dc26['eyes'] || 'eyes4.png',
            'stats': _0x42db8f
        });
    }
    const _0xcef99d = _0x4dbde4['map'](_0x4ebf78 => _0x4ebf78['id'] + '_' + _0x4ebf78['name'] + '_' + _0x4ebf78['body'] + '_' + _0x4ebf78['eyes'] + '_' + JSON['stringify'](_0x4ebf78['stats']))['join']('|');
    if (_0xcef99d === _0x178dd0)
        return;
    _0x178dd0 = _0xcef99d;
    _0x439d0d['innerHTML'] = '';
    let _0x169ce9 = ![];
    for (const _0x45bd3c of _0x4dbde4) {
        _0x169ce9 = !![];
        const _0x1766fe = _0x323e1b(_0x45bd3c['body'], _0x45bd3c['eyes'], 0x20);
        const _0x52cacd = document['createElement']('div');
        _0x52cacd['className'] = 'chat-pfp-entry';
        const _0x24b29a = document['createElement']('img');
        _0x24b29a['src'] = _0x1766fe;
        _0x24b29a['alt'] = _0x45bd3c['name'];
        _0x52cacd['appendChild'](_0x24b29a);
        const _0x475ee2 = document['createElement']('div');
        _0x475ee2['className'] = 'chat-pfp-tooltip';
        let _0x3dbd39 = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x45bd3c['name'] + '</div>';
        const _0x1ad6d3 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x4c9668 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x1dd133 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x438833 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x2c83f3 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x229a8d = (_0x3727f6, _0x364e7c, _0x50bc0c, _0x1e9851) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x3727f6 + '<span\x20style=\x22flex:1;color:' + _0x1e9851 + ';\x22>' + _0x364e7c + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x50bc0c + '</span></div>';
        if (_0x45bd3c['stats']) {
            _0x3dbd39 += _0x229a8d(_0x1ad6d3, 'Town\x20Wins', _0x45bd3c['stats']['townWins'] || 0x0, '#55ee77');
            _0x3dbd39 += _0x229a8d(_0x4c9668, 'Mafia\x20Wins', _0x45bd3c['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x3dbd39 += _0x229a8d(_0x1dd133, 'Deaths', _0x45bd3c['stats']['deaths'] || 0x0, '#aaa');
            _0x3dbd39 += _0x229a8d(_0x438833, 'Town\x20Losses', _0x45bd3c['stats']['townLosses'] || 0x0, '#6688aa');
            _0x3dbd39 += _0x229a8d(_0x2c83f3, 'Mafia\x20Losses', _0x45bd3c['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x3dbd39 += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x475ee2['innerHTML'] = _0x3dbd39;
        _0x52cacd['appendChild'](_0x475ee2);
        _0x439d0d['appendChild'](_0x52cacd);
    }
    const _0x5924d2 = document['getElementById']('chat-log-wrap');
    if (_0x5924d2) {
        if (_0x169ce9) {
            _0x5924d2['classList']['add']('has-profiles');
            _0x439d0d['style']['display'] = 'flex';
        } else {
            _0x5924d2['classList']['remove']('has-profiles');
            _0x439d0d['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x1cb5b1;
let _0x5a3023 = -0x1, _0x2425d9 = -0x1, _0x20ad6a = -0x1, _0x1d6a62 = 0x0;
function _0x290f36() {
    if (!_0xa2c3d || !_0x59c043 || _0x59c043['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x3b1d3c = performance['now']();
    const _0x4e67e9 = _0x3b1d3c - _0x1d6a62;
    const _0x14fff0 = Math['abs'](_0x3f99ad['x'] - _0x5a3023) > 0.05 || Math['abs'](_0x3f99ad['y'] - _0x2425d9) > 0.05 || Math['abs'](_0x3f99ad['angle'] - _0x20ad6a) > 0.02;
    if (!_0x14fff0 && _0x4e67e9 < 0xc8)
        return;
    if (_0x4e67e9 < 0x19)
        return;
    _0x1d6a62 = _0x3b1d3c;
    _0x5a3023 = _0x3f99ad['x'];
    _0x2425d9 = _0x3f99ad['y'];
    _0x20ad6a = _0x3f99ad['angle'];
    if (!_0xa2c3d || !_0x59c043 || _0x59c043['readyState'] !== WebSocket['OPEN'])
        return;
    _0x59c043['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x3f99ad['x'],
        'y': _0x3f99ad['y'],
        'vx': _0x3f99ad['vx'],
        'vy': _0x3f99ad['vy'],
        'angle': _0x3f99ad['angle'],
        'scale': _0x3f99ad['scale'],
        'teleportId': _0x497869,
        'clientTimestamp': Date['now']()
    }));
}
function _0x11e07c() {
    if (_0x3f99ad['isDead'])
        return;
    const _0x51355d = _0x1cdb4b['MAP']['layers']['find'](_0x47dd01 => _0x47dd01['name'] === 'walls');
    if (!_0x51355d)
        return;
    const _0x278a48 = _0x3f99ad['scale'];
    const _0x2c13cd = _0x3f99ad['width'] * _0x278a48 / 0x2;
    for (let _0x15b262 = 0x0; _0x15b262 < 0x3; _0x15b262++) {
        let _0x5358de = _0x3f99ad['x'] + _0x3f99ad['width'] / 0x2;
        let _0x9ee7c7 = _0x3f99ad['y'] + _0x3f99ad['height'] / 0x2;
        const _0x45e90d = Math['floor']((_0x5358de - _0x2c13cd) / _0x1cdb4b['MAP']['tileSize']);
        const _0x1394c7 = Math['floor']((_0x5358de + _0x2c13cd) / _0x1cdb4b['MAP']['tileSize']);
        const _0x4975b2 = Math['floor']((_0x9ee7c7 - _0x2c13cd) / _0x1cdb4b['MAP']['tileSize']);
        const _0x576e82 = Math['floor']((_0x9ee7c7 + _0x2c13cd) / _0x1cdb4b['MAP']['tileSize']);
        for (let _0x49c1c2 = _0x4975b2; _0x49c1c2 <= _0x576e82; _0x49c1c2++) {
            for (let _0x82bb8b = _0x45e90d; _0x82bb8b <= _0x1394c7; _0x82bb8b++) {
                if (_0x82bb8b < 0x0 || _0x82bb8b >= _0x1cdb4b['MAP']['columns'] || _0x49c1c2 < 0x0 || _0x49c1c2 >= _0x1cdb4b['MAP']['rows'])
                    continue;
                if (_0x51355d['data'][_0x49c1c2 * _0x1cdb4b['MAP']['columns'] + _0x82bb8b] === 0x0)
                    continue;
                const _0x5ab7de = _0x82bb8b * _0x1cdb4b['MAP']['tileSize'];
                const _0x56dfc6 = _0x49c1c2 * _0x1cdb4b['MAP']['tileSize'];
                const _0x3f93bd = _0x5358de < _0x5ab7de ? _0x5ab7de : _0x5358de > _0x5ab7de + _0x1cdb4b['MAP']['tileSize'] ? _0x5ab7de + _0x1cdb4b['MAP']['tileSize'] : _0x5358de;
                const _0x3d301f = _0x9ee7c7 < _0x56dfc6 ? _0x56dfc6 : _0x9ee7c7 > _0x56dfc6 + _0x1cdb4b['MAP']['tileSize'] ? _0x56dfc6 + _0x1cdb4b['MAP']['tileSize'] : _0x9ee7c7;
                const _0x56feb7 = _0x5358de - _0x3f93bd;
                const _0x28e48d = _0x9ee7c7 - _0x3d301f;
                const _0x1d9cca = Math['sqrt'](_0x56feb7 * _0x56feb7 + _0x28e48d * _0x28e48d);
                if (_0x1d9cca < _0x2c13cd) {
                    if (_0x1d9cca === 0x0) {
                        const _0x5c6317 = _0x5358de - _0x5ab7de;
                        const _0x4880c5 = _0x5ab7de + _0x1cdb4b['MAP']['tileSize'] - _0x5358de;
                        const _0x5b0a0c = _0x9ee7c7 - _0x56dfc6;
                        const _0x2ea793 = _0x56dfc6 + _0x1cdb4b['MAP']['tileSize'] - _0x9ee7c7;
                        const _0x379593 = Math['min'](_0x5c6317, _0x4880c5, _0x5b0a0c, _0x2ea793);
                        if (_0x379593 === _0x5c6317)
                            _0x5358de = _0x5ab7de - _0x2c13cd;
                        else if (_0x379593 === _0x4880c5)
                            _0x5358de = _0x5ab7de + _0x1cdb4b['MAP']['tileSize'] + _0x2c13cd;
                        else if (_0x379593 === _0x5b0a0c)
                            _0x9ee7c7 = _0x56dfc6 - _0x2c13cd;
                        else
                            _0x9ee7c7 = _0x56dfc6 + _0x1cdb4b['MAP']['tileSize'] + _0x2c13cd;
                    } else {
                        const _0x3b22f4 = _0x2c13cd - _0x1d9cca;
                        _0x5358de += _0x56feb7 / _0x1d9cca * _0x3b22f4;
                        _0x9ee7c7 += _0x28e48d / _0x1d9cca * _0x3b22f4;
                        const _0x888b3 = _0x3f99ad['vx'] * (_0x56feb7 / _0x1d9cca) + _0x3f99ad['vy'] * (_0x28e48d / _0x1d9cca);
                        if (_0x888b3 < 0x0) {
                            _0x3f99ad['vx'] -= _0x888b3 * (_0x56feb7 / _0x1d9cca);
                            _0x3f99ad['vy'] -= _0x888b3 * (_0x28e48d / _0x1d9cca);
                        }
                    }
                }
            }
        }
        _0x3f99ad['x'] = _0x5358de - _0x3f99ad['width'] / 0x2;
        _0x3f99ad['y'] = _0x9ee7c7 - _0x3f99ad['height'] / 0x2;
    }
}
function _0x26a38f(_0x26b9fe) {
    const _0x571eed = _0x1cdb4b['MAP']['layers']['find'](_0x570c6 => _0x570c6['name'] === 'walls');
    if (!_0x571eed)
        return;
    const _0x295f37 = _0x26b9fe['width'] / 0x2;
    for (let _0x15a562 = 0x0; _0x15a562 < 0x2; _0x15a562++) {
        let _0x5ca53f = _0x26b9fe['x'] + _0x26b9fe['width'] / 0x2;
        let _0x349f8e = _0x26b9fe['y'] + _0x26b9fe['height'] / 0x2;
        const _0x3eb601 = Math['floor']((_0x5ca53f - _0x295f37) / _0x1cdb4b['MAP']['tileSize']);
        const _0x5a5104 = Math['floor']((_0x5ca53f + _0x295f37) / _0x1cdb4b['MAP']['tileSize']);
        const _0x212536 = Math['floor']((_0x349f8e - _0x295f37) / _0x1cdb4b['MAP']['tileSize']);
        const _0x308356 = Math['floor']((_0x349f8e + _0x295f37) / _0x1cdb4b['MAP']['tileSize']);
        for (let _0x593338 = _0x212536; _0x593338 <= _0x308356; _0x593338++) {
            for (let _0x15d70c = _0x3eb601; _0x15d70c <= _0x5a5104; _0x15d70c++) {
                if (_0x15d70c < 0x0 || _0x15d70c >= _0x1cdb4b['MAP']['columns'] || _0x593338 < 0x0 || _0x593338 >= _0x1cdb4b['MAP']['rows'])
                    continue;
                if (_0x571eed['data'][_0x593338 * _0x1cdb4b['MAP']['columns'] + _0x15d70c] === 0x0)
                    continue;
                const _0x124259 = _0x15d70c * _0x1cdb4b['MAP']['tileSize'];
                const _0x356a43 = _0x593338 * _0x1cdb4b['MAP']['tileSize'];
                const _0xda7650 = _0x5ca53f < _0x124259 ? _0x124259 : _0x5ca53f > _0x124259 + _0x1cdb4b['MAP']['tileSize'] ? _0x124259 + _0x1cdb4b['MAP']['tileSize'] : _0x5ca53f;
                const _0x3ab132 = _0x349f8e < _0x356a43 ? _0x356a43 : _0x349f8e > _0x356a43 + _0x1cdb4b['MAP']['tileSize'] ? _0x356a43 + _0x1cdb4b['MAP']['tileSize'] : _0x349f8e;
                const _0x3253e2 = _0x5ca53f - _0xda7650;
                const _0x58cfe0 = _0x349f8e - _0x3ab132;
                const _0x37c072 = Math['sqrt'](_0x3253e2 * _0x3253e2 + _0x58cfe0 * _0x58cfe0);
                if (_0x37c072 < _0x295f37) {
                    if (_0x37c072 === 0x0) {
                        const _0x52df75 = _0x5ca53f - _0x124259;
                        const _0x33fc7a = _0x124259 + _0x1cdb4b['MAP']['tileSize'] - _0x5ca53f;
                        const _0x1b7800 = _0x349f8e - _0x356a43;
                        const _0x269f9c = _0x356a43 + _0x1cdb4b['MAP']['tileSize'] - _0x349f8e;
                        const _0x4e830d = Math['min'](_0x52df75, _0x33fc7a, _0x1b7800, _0x269f9c);
                        if (_0x4e830d === _0x52df75)
                            _0x5ca53f = _0x124259 - _0x295f37;
                        else if (_0x4e830d === _0x33fc7a)
                            _0x5ca53f = _0x124259 + _0x1cdb4b['MAP']['tileSize'] + _0x295f37;
                        else if (_0x4e830d === _0x1b7800)
                            _0x349f8e = _0x356a43 - _0x295f37;
                        else
                            _0x349f8e = _0x356a43 + _0x1cdb4b['MAP']['tileSize'] + _0x295f37;
                    } else {
                        const _0x2d71aa = _0x295f37 - _0x37c072;
                        _0x5ca53f += _0x3253e2 / _0x37c072 * _0x2d71aa;
                        _0x349f8e += _0x58cfe0 / _0x37c072 * _0x2d71aa;
                    }
                }
            }
        }
        _0x26b9fe['x'] = _0x5ca53f - _0x26b9fe['width'] / 0x2;
        _0x26b9fe['y'] = _0x349f8e - _0x26b9fe['height'] / 0x2;
    }
}
function _0x1c66eb(_0x1b748e) {
    const _0x363f4e = _0x1b748e['width'] / 0x2;
    for (let _0x337f6b = 0x0; _0x337f6b < 0x2; _0x337f6b++) {
        let _0x25a381 = _0x1b748e['x'] + _0x1b748e['width'] / 0x2;
        let _0x288a84 = _0x1b748e['y'] + _0x1b748e['height'] / 0x2;
        for (const _0x49fb78 of _0x1cdb4b['ENTITIES']) {
            const _0x4f2284 = _0x25a381 < _0x49fb78['x'] ? _0x49fb78['x'] : _0x25a381 > _0x49fb78['x'] + _0x49fb78['w'] ? _0x49fb78['x'] + _0x49fb78['w'] : _0x25a381;
            const _0x5561f9 = _0x288a84 < _0x49fb78['y'] ? _0x49fb78['y'] : _0x288a84 > _0x49fb78['y'] + _0x49fb78['h'] ? _0x49fb78['y'] + _0x49fb78['h'] : _0x288a84;
            const _0x55a8d2 = _0x25a381 - _0x4f2284;
            const _0x383200 = _0x288a84 - _0x5561f9;
            const _0x179824 = Math['sqrt'](_0x55a8d2 * _0x55a8d2 + _0x383200 * _0x383200);
            if (_0x179824 < _0x363f4e && _0x179824 > 0x0) {
                const _0x426b94 = _0x363f4e - _0x179824;
                const _0x4255d8 = _0x55a8d2 / _0x179824;
                const _0x8c7171 = _0x383200 / _0x179824;
                _0x25a381 += _0x4255d8 * _0x426b94;
                _0x288a84 += _0x8c7171 * _0x426b94;
            } else if (_0x179824 === 0x0) {
                const _0x268ba7 = _0x25a381 - _0x49fb78['x'];
                const _0x26e648 = _0x49fb78['x'] + _0x49fb78['w'] - _0x25a381;
                const _0x257780 = _0x288a84 - _0x49fb78['y'];
                const _0x4c758b = _0x49fb78['y'] + _0x49fb78['h'] - _0x288a84;
                const _0x3b48e3 = Math['min'](_0x268ba7, _0x26e648, _0x257780, _0x4c758b);
                if (_0x3b48e3 === _0x268ba7)
                    _0x25a381 = _0x49fb78['x'] - _0x363f4e;
                else if (_0x3b48e3 === _0x26e648)
                    _0x25a381 = _0x49fb78['x'] + _0x49fb78['w'] + _0x363f4e;
                else if (_0x3b48e3 === _0x257780)
                    _0x288a84 = _0x49fb78['y'] - _0x363f4e;
                else
                    _0x288a84 = _0x49fb78['y'] + _0x49fb78['h'] + _0x363f4e;
            }
        }
        _0x1b748e['x'] = _0x25a381 - _0x1b748e['width'] / 0x2;
        _0x1b748e['y'] = _0x288a84 - _0x1b748e['height'] / 0x2;
    }
}
function _0x14e0ea() {
    if (_0x3f99ad['isDead'])
        return;
    const _0x529a8c = _0x3f99ad['width'] / 0x2;
    const _0x1f2020 = _0x3f99ad['x'] + _0x3f99ad['width'] / 0x2;
    const _0x26846a = _0x3f99ad['y'] + _0x3f99ad['height'] / 0x2;
    for (const _0x29a048 in _0x41c578) {
        const _0x261bdb = _0x41c578[_0x29a048];
        if (_0x261bdb['isDead'])
            continue;
        const _0x1a335e = _0x261bdb['width'] / 0x2;
        const _0x10a25d = _0x529a8c + _0x1a335e;
        const _0x2cb5c9 = (_0x261bdb['renderX'] ?? _0x261bdb['x']) + _0x261bdb['width'] / 0x2;
        const _0x200dd2 = (_0x261bdb['renderY'] ?? _0x261bdb['y']) + _0x261bdb['height'] / 0x2;
        const _0x2fb467 = _0x1f2020 - _0x2cb5c9;
        const _0xb81faf = _0x26846a - _0x200dd2;
        const _0x22323e = Math['sqrt'](_0x2fb467 * _0x2fb467 + _0xb81faf * _0xb81faf);
        if (_0x22323e > 0x0 && _0x22323e < _0x10a25d) {
            const _0x58ec35 = _0x10a25d - _0x22323e;
            const _0x31e41b = _0x2fb467 / _0x22323e;
            const _0x54cd62 = _0xb81faf / _0x22323e;
            _0x3f99ad['x'] += _0x31e41b * (_0x58ec35 * 0.25);
            _0x3f99ad['y'] += _0x54cd62 * (_0x58ec35 * 0.25);
            _0x261bdb['x'] -= _0x31e41b * (_0x58ec35 * 0.75);
            _0x261bdb['y'] -= _0x54cd62 * (_0x58ec35 * 0.75);
            _0x26a38f(_0x261bdb);
            _0x1c66eb(_0x261bdb);
            if (_0x261bdb['renderX'] !== undefined) {
                _0x261bdb['renderX'] = _0x261bdb['x'];
                _0x261bdb['renderY'] = _0x261bdb['y'];
            }
            const _0x2f6c59 = _0x3f99ad['vx'] * _0x31e41b + _0x3f99ad['vy'] * _0x54cd62;
            if (_0x2f6c59 < 0x0) {
                _0x3f99ad['vx'] -= _0x2f6c59 * _0x31e41b * 0.25;
                _0x3f99ad['vy'] -= _0x2f6c59 * _0x54cd62 * 0.25;
            }
        }
    }
    _0x11e07c();
    _0x43311d();
}
function _0x43311d() {
    if (_0x3f99ad['isDead'])
        return;
    const _0x138950 = _0x3f99ad['scale'];
    const _0x1152cb = _0x3f99ad['width'] * _0x138950 / 0x2;
    for (let _0x395b05 = 0x0; _0x395b05 < 0x2; _0x395b05++) {
        let _0x5348ad = _0x3f99ad['x'] + _0x3f99ad['width'] / 0x2;
        let _0x5b3dee = _0x3f99ad['y'] + _0x3f99ad['height'] / 0x2;
        for (const _0x97e46c of _0x1cdb4b['ENTITIES']) {
            const _0x81beb4 = _0x5348ad < _0x97e46c['x'] ? _0x97e46c['x'] : _0x5348ad > _0x97e46c['x'] + _0x97e46c['w'] ? _0x97e46c['x'] + _0x97e46c['w'] : _0x5348ad;
            const _0x23e306 = _0x5b3dee < _0x97e46c['y'] ? _0x97e46c['y'] : _0x5b3dee > _0x97e46c['y'] + _0x97e46c['h'] ? _0x97e46c['y'] + _0x97e46c['h'] : _0x5b3dee;
            const _0x4b9e37 = _0x5348ad - _0x81beb4;
            const _0x159f21 = _0x5b3dee - _0x23e306;
            const _0x3b4e9c = Math['sqrt'](_0x4b9e37 * _0x4b9e37 + _0x159f21 * _0x159f21);
            if (_0x3b4e9c < _0x1152cb && _0x3b4e9c > 0x0) {
                const _0x2de5c4 = _0x1152cb - _0x3b4e9c;
                const _0x4acb87 = _0x4b9e37 / _0x3b4e9c;
                const _0x5540c5 = _0x159f21 / _0x3b4e9c;
                _0x5348ad += _0x4acb87 * _0x2de5c4;
                _0x5b3dee += _0x5540c5 * _0x2de5c4;
                const _0x3983cb = _0x3f99ad['vx'] * _0x4acb87 + _0x3f99ad['vy'] * _0x5540c5;
                if (_0x3983cb < 0x0) {
                    _0x3f99ad['vx'] -= _0x3983cb * _0x4acb87;
                    _0x3f99ad['vy'] -= _0x3983cb * _0x5540c5;
                }
            } else if (_0x3b4e9c === 0x0) {
                const _0x4b7ef1 = _0x5348ad - _0x97e46c['x'];
                const _0x414c68 = _0x97e46c['x'] + _0x97e46c['w'] - _0x5348ad;
                const _0x546389 = _0x5b3dee - _0x97e46c['y'];
                const _0x5ec742 = _0x97e46c['y'] + _0x97e46c['h'] - _0x5b3dee;
                const _0x4a4643 = Math['min'](_0x4b7ef1, _0x414c68, _0x546389, _0x5ec742);
                if (_0x4a4643 === _0x4b7ef1)
                    _0x5348ad = _0x97e46c['x'] - _0x1152cb;
                else if (_0x4a4643 === _0x414c68)
                    _0x5348ad = _0x97e46c['x'] + _0x97e46c['w'] + _0x1152cb;
                else if (_0x4a4643 === _0x546389)
                    _0x5b3dee = _0x97e46c['y'] - _0x1152cb;
                else
                    _0x5b3dee = _0x97e46c['y'] + _0x97e46c['h'] + _0x1152cb;
            }
        }
        _0x3f99ad['x'] = _0x5348ad - _0x3f99ad['width'] / 0x2;
        _0x3f99ad['y'] = _0x5b3dee - _0x3f99ad['height'] / 0x2;
    }
}
function _0x279eee(_0x46648d, _0x18b816) {
    const _0x3f9820 = _0x1cdb4b['MAP']['layers']['find'](_0x152e5e => _0x152e5e['name'] === 'trees');
    if (!_0x3f9820)
        return ![];
    const _0x10e6dc = Math['floor'](_0x46648d / _0x1cdb4b['MAP']['tileSize']);
    const _0xef5943 = Math['floor'](_0x18b816 / _0x1cdb4b['MAP']['tileSize']);
    if (_0x10e6dc < 0x0 || _0x10e6dc >= _0x1cdb4b['MAP']['columns'] || _0xef5943 < 0x0 || _0xef5943 >= _0x1cdb4b['MAP']['rows'])
        return ![];
    return _0x3f9820['data'][_0xef5943 * _0x1cdb4b['MAP']['columns'] + _0x10e6dc] === 0xb;
}
let _0x39d3d5 = null;
function _0x5d8378() {
    const _0x195037 = _0x1cdb4b['MAP'];
    const _0x148d25 = _0x195037['layers']['find'](_0x15913a => _0x15913a['name'] === 'floor2');
    const _0x241e81 = _0x195037['layers']['find'](_0x787099 => _0x787099['name'] === 'walls');
    if (!_0x148d25 || !_0x241e81) {
        _0x39d3d5 = null;
        return;
    }
    const _0xf9568f = _0x195037['columns'];
    const _0x594710 = _0x195037['rows'];
    const _0x1073e5 = [];
    const _0x373d02 = [];
    const _0x4fb3d5 = new Set();
    for (let _0x206096 = 0x0; _0x206096 < _0x594710; _0x206096++) {
        for (let _0x4e8cca = 0x0; _0x4e8cca < _0xf9568f; _0x4e8cca++) {
            const _0x848191 = _0x206096 * _0xf9568f + _0x4e8cca;
            const _0x3c8cd8 = _0x148d25['data'][_0x848191];
            const _0x2b2b70 = _0x241e81['data'][_0x848191];
            if (_0x3c8cd8 === 0x2 || _0x3c8cd8 === 0x4) {
                _0x1073e5['push']({
                    'c': _0x4e8cca,
                    'r': _0x206096
                });
                if (_0x2b2b70 !== 0x0)
                    _0x373d02['push']({
                        'c': _0x4e8cca,
                        'r': _0x206096
                    });
            }
            if (_0x2b2b70 !== 0x0)
                _0x4fb3d5['add'](_0x4e8cca + ',' + _0x206096);
        }
    }
    const _0x4b744d = new Set(_0x1073e5['map'](_0x582757 => _0x582757['c'] + ',' + _0x582757['r']));
    const _0x518240 = [
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
                c: _0x127075,
                r: _0xf8e145
            } of _0x1073e5) {
        for (const [_0xfe7a0f, _0x54741a] of _0x518240) {
            const _0x1d131e = _0x127075 + _0xfe7a0f, _0x2206d9 = _0xf8e145 + _0x54741a;
            const _0x438096 = _0x1d131e + ',' + _0x2206d9;
            if (!_0x4b744d['has'](_0x438096))
                _0x4fb3d5['add'](_0x438096);
        }
    }
    _0x39d3d5 = {
        'wallSet': _0x4fb3d5,
        'floorTiles': _0x1073e5,
        'wallTiles': _0x373d02,
        'interiorSet': _0x4b744d
    };
}
function _0x102232() {
    const _0x1e8e99 = _0x1cdb4b['MAP']['layers']['find'](_0xfe88b3 => _0xfe88b3['name'] === 'floor2');
    if (!_0x1e8e99)
        return ![];
    const _0x35ece2 = Math['floor']((_0x3f99ad['x'] + _0x3f99ad['width'] / 0x2) / _0x1cdb4b['MAP']['tileSize']);
    const _0x2e9b4d = Math['floor']((_0x3f99ad['y'] + _0x3f99ad['height'] / 0x2) / _0x1cdb4b['MAP']['tileSize']);
    if (_0x35ece2 < 0x0 || _0x35ece2 >= _0x1cdb4b['MAP']['columns'] || _0x2e9b4d < 0x0 || _0x2e9b4d >= _0x1cdb4b['MAP']['rows'])
        return ![];
    const _0x4a54c4 = _0x1e8e99['data'][_0x2e9b4d * _0x1cdb4b['MAP']['columns'] + _0x35ece2];
    return _0x4a54c4 === 0x2;
}
let _0x1dc6d7 = null, _0x3c4f4f = null;
function _0x24925d() {
    if (_0x3f99ad['isDead']) {
        _0x1cdb4b['SHADOW']['polygon'] = null;
        _0x1dc6d7 = null;
        return;
    }
    const _0x36b8fb = _0x1cdb4b['MAP'];
    const _0x1b2f4b = _0x1cdb4b['SHADOW'];
    const _0x57171d = _0x36b8fb['tileSize'];
    if (!_0x39d3d5)
        _0x5d8378();
    if (!_0x39d3d5) {
        _0x1b2f4b['polygon'] = null;
        _0x1dc6d7 = null;
        return;
    }
    const {
        wallSet: _0x448284,
        floorTiles: _0x44daf1
    } = _0x39d3d5;
    if (_0x44daf1['length'] === 0x0) {
        _0x1b2f4b['polygon'] = null;
        _0x1dc6d7 = null;
        return;
    }
    if (!_0x102232()) {
        _0x1b2f4b['polygon'] = null;
        _0x1dc6d7 = null;
        return;
    }
    const _0x1e52b5 = _0x3f99ad['x'] + _0x3f99ad['width'] / 0x2;
    const _0x2fa8d6 = _0x3f99ad['y'] + _0x3f99ad['height'] / 0x2;
    if (_0x1dc6d7 !== null && _0x1b2f4b['polygon'] && Math['hypot'](_0x1e52b5 - _0x1dc6d7, _0x2fa8d6 - _0x3c4f4f) < 0x1) {
        return;
    }
    _0x1dc6d7 = _0x1e52b5;
    _0x3c4f4f = _0x2fa8d6;
    const _0xce7d8b = Math['floor'](_0x1e52b5 / _0x57171d);
    const _0x1bf848 = Math['floor'](_0x2fa8d6 / _0x57171d);
    const _0x5eb167 = Math['max'](0x0, _0xce7d8b - 0x6);
    const _0x1e15c0 = Math['min'](_0x36b8fb['columns'] - 0x1, _0xce7d8b + 0x6);
    const _0x52dcaa = Math['max'](0x0, _0x1bf848 - 0x6);
    const _0xcbe25c = Math['min'](_0x36b8fb['rows'] - 0x1, _0x1bf848 + 0x6);
    const _0x45c486 = [];
    for (let _0x5738eb = _0x52dcaa; _0x5738eb <= _0xcbe25c; _0x5738eb++) {
        for (let _0x1d7bd3 = _0x5eb167; _0x1d7bd3 <= _0x1e15c0; _0x1d7bd3++) {
            if (_0x448284['has'](_0x1d7bd3 + ',' + _0x5738eb))
                _0x45c486['push'](_0x1d7bd3, _0x5738eb);
        }
    }
    const _0x5f51e0 = 0.001;
    const _0xae0340 = new Set();
    const _0x426cd3 = [];
    for (let _0x49908e = 0x0; _0x49908e < _0x45c486['length']; _0x49908e += 0x2) {
        const _0x5d1d04 = _0x45c486[_0x49908e], _0x82a49d = _0x45c486[_0x49908e + 0x1];
        const _0x5e0028 = [
            _0x5d1d04 * _0x57171d,
            _0x82a49d * _0x57171d,
            _0x5d1d04 * _0x57171d + _0x57171d,
            _0x82a49d * _0x57171d,
            _0x5d1d04 * _0x57171d,
            _0x82a49d * _0x57171d + _0x57171d,
            _0x5d1d04 * _0x57171d + _0x57171d,
            _0x82a49d * _0x57171d + _0x57171d
        ];
        for (let _0x121f74 = 0x0; _0x121f74 < _0x5e0028['length']; _0x121f74 += 0x2) {
            const _0x613451 = _0x5e0028[_0x121f74], _0x459920 = _0x5e0028[_0x121f74 + 0x1];
            const _0x21a322 = Math['atan2'](_0x459920 - _0x2fa8d6, _0x613451 - _0x1e52b5);
            const _0xb79bf = Math['round'](_0x21a322 * 0x4e20);
            if (!_0xae0340['has'](_0xb79bf - 0x1)) {
                _0xae0340['add'](_0xb79bf - 0x1);
                _0x426cd3['push'](_0x21a322 - _0x5f51e0);
            }
            if (!_0xae0340['has'](_0xb79bf)) {
                _0xae0340['add'](_0xb79bf);
                _0x426cd3['push'](_0x21a322);
            }
            if (!_0xae0340['has'](_0xb79bf + 0x1)) {
                _0xae0340['add'](_0xb79bf + 0x1);
                _0x426cd3['push'](_0x21a322 + _0x5f51e0);
            }
        }
    }
    _0x426cd3['sort']((_0x20b10a, _0x58a3ca) => _0x20b10a - _0x58a3ca);
    const _0x491e97 = 0xc * _0x57171d;
    const _0x93cf5e = _0x47da85 => {
        const _0x117f24 = Math['cos'](_0x47da85);
        const _0xd3fdab = Math['sin'](_0x47da85);
        let _0x171850 = _0x491e97;
        for (let _0x9f1824 = 0x0; _0x9f1824 < _0x45c486['length']; _0x9f1824 += 0x2) {
            const _0x38721e = _0x45c486[_0x9f1824], _0x1807f8 = _0x45c486[_0x9f1824 + 0x1];
            const _0xc44ada = _0x38721e * _0x57171d, _0x51df38 = _0x1807f8 * _0x57171d;
            const _0x1be09d = _0xc44ada + _0x57171d, _0x59810d = _0x51df38 + _0x57171d;
            const _0x2acfcc = _0xc44ada + _0x57171d * 0.5, _0x2391ad = _0x51df38 + _0x57171d * 0.5;
            const _0x24c076 = Math['abs'](_0x2acfcc - _0x1e52b5) + Math['abs'](_0x2391ad - _0x2fa8d6);
            if (_0x24c076 > _0x171850 + _0x57171d * 1.5)
                continue;
            let _0x1b2ed9, _0x29b030, _0x5db46b;
            _0x1b2ed9 = -_0xd3fdab * _0x57171d;
            if (Math['abs'](_0x1b2ed9) >= 1e-10) {
                _0x29b030 = -(_0x51df38 - _0x2fa8d6) * _0x57171d / _0x1b2ed9;
                _0x5db46b = ((_0xc44ada - _0x1e52b5) * _0xd3fdab - (_0x51df38 - _0x2fa8d6) * _0x117f24) / _0x1b2ed9;
                if (_0x29b030 > 0.001 && _0x5db46b >= 0x0 && _0x5db46b <= 0x1 && _0x29b030 < _0x171850)
                    _0x171850 = _0x29b030;
            }
            _0x1b2ed9 = _0x117f24 * _0x57171d;
            if (Math['abs'](_0x1b2ed9) >= 1e-10) {
                _0x29b030 = (_0x1be09d - _0x1e52b5) * _0x57171d / _0x1b2ed9;
                _0x5db46b = ((_0x1be09d - _0x1e52b5) * _0xd3fdab - (_0x51df38 - _0x2fa8d6) * _0x117f24) / _0x1b2ed9;
                if (_0x29b030 > 0.001 && _0x5db46b >= 0x0 && _0x5db46b <= 0x1 && _0x29b030 < _0x171850)
                    _0x171850 = _0x29b030;
            }
            _0x1b2ed9 = _0xd3fdab * _0x57171d;
            if (Math['abs'](_0x1b2ed9) >= 1e-10) {
                _0x29b030 = (_0x59810d - _0x2fa8d6) * _0x57171d / _0x1b2ed9;
                _0x5db46b = ((_0x1be09d - _0x1e52b5) * _0xd3fdab - (_0x59810d - _0x2fa8d6) * _0x117f24) / _0x1b2ed9;
                if (_0x29b030 > 0.001 && _0x5db46b >= 0x0 && _0x5db46b <= 0x1 && _0x29b030 < _0x171850)
                    _0x171850 = _0x29b030;
            }
            _0x1b2ed9 = -_0x117f24 * _0x57171d;
            if (Math['abs'](_0x1b2ed9) >= 1e-10) {
                _0x29b030 = -(_0xc44ada - _0x1e52b5) * _0x57171d / _0x1b2ed9;
                _0x5db46b = ((_0xc44ada - _0x1e52b5) * _0xd3fdab - (_0x51df38 - _0x2fa8d6) * _0x117f24) / _0x1b2ed9;
                if (_0x29b030 > 0.001 && _0x5db46b >= 0x0 && _0x5db46b <= 0x1 && _0x29b030 < _0x171850)
                    _0x171850 = _0x29b030;
            }
        }
        const _0xf78f = _0x171850 < _0x491e97 ? _0x171850 + 0x2 : _0x171850;
        return {
            'x': _0x1e52b5 + _0x117f24 * _0xf78f,
            'y': _0x2fa8d6 + _0xd3fdab * _0xf78f
        };
    };
    const _0x4ec7fa = [];
    for (let _0x3cbfa0 = 0x0; _0x3cbfa0 < _0x426cd3['length']; _0x3cbfa0++) {
        const _0x56813c = _0x93cf5e(_0x426cd3[_0x3cbfa0]);
        _0x4ec7fa['push'](_0x56813c['x'], _0x56813c['y']);
    }
    _0x1b2f4b['polygon'] = _0x4ec7fa['length'] >= 0x6 ? _0x4ec7fa : null;
}
function _0x421e6c(_0x2ef96c, _0x328b9f, _0xb0606c) {
    if (_0x3f99ad['isDead'])
        return;
    if (!_0x39d3d5)
        return;
    const {
        floorTiles: _0x569ba4,
        wallTiles: _0x48abe2
    } = _0x39d3d5;
    if (_0x569ba4['length'] === 0x0)
        return;
    const _0x3f8d9f = _0x1cdb4b['SHADOW'];
    const _0x437202 = _0x1cdb4b['MAP']['tileSize'];
    const _0x123faa = _0x1cdb4b['CAMERA']['width'];
    const _0x2b0c84 = _0x1cdb4b['CAMERA']['height'];
    if (!_0x1cdb4b['SHADOW']['_buf'] || _0x1cdb4b['SHADOW']['_buf']['width'] !== _0x123faa || _0x1cdb4b['SHADOW']['_buf']['height'] !== _0x2b0c84) {
        _0x1cdb4b['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x1cdb4b['SHADOW']['_buf']['width'] = _0x123faa;
        _0x1cdb4b['SHADOW']['_buf']['height'] = _0x2b0c84;
    }
    const _0x1f7f60 = _0x1cdb4b['SHADOW']['_buf'];
    const _0x313470 = _0x1f7f60['getContext']('2d');
    _0x313470['clearRect'](0x0, 0x0, _0x123faa, _0x2b0c84);
    const _0x3ef5fd = _0x3f99ad['x'] + _0x3f99ad['width'] / 0x2;
    const _0x423768 = _0x3f99ad['y'] + _0x3f99ad['height'] / 0x2;
    const _0x44e89a = Math['floor'](_0x3ef5fd / _0x437202);
    const _0x1ab1b0 = Math['floor'](_0x423768 / _0x437202);
    _0x313470['fillStyle'] = 'rgba(0,0,0,0.92)';
    _0x313470['beginPath']();
    for (const {
                c: _0x5e62a0,
                r: _0x38fd7b
            } of _0x569ba4) {
        if (Math['abs'](_0x5e62a0 - _0x44e89a) > 0x7 || Math['abs'](_0x38fd7b - _0x1ab1b0) > 0x7)
            continue;
        const _0x57927e = Math['round'](_0x5e62a0 * _0x437202 - _0x328b9f), _0x3ff260 = Math['round'](_0x38fd7b * _0x437202 - _0xb0606c);
        if (_0x57927e > _0x123faa || _0x3ff260 > _0x2b0c84 || _0x57927e + _0x437202 < 0x0 || _0x3ff260 + _0x437202 < 0x0)
            continue;
        _0x313470['rect'](_0x57927e, _0x3ff260, _0x437202 + 0x1, _0x437202 + 0x1);
    }
    _0x313470['fill']();
    if (_0x48abe2['length'] > 0x0) {
        _0x313470['globalCompositeOperation'] = 'destination-out';
        _0x313470['fillStyle'] = 'rgba(0,0,0,1)';
        _0x313470['beginPath']();
        for (const {
                    c: _0x25683f,
                    r: _0x2b4c34
                } of _0x48abe2) {
            if (Math['abs'](_0x25683f - _0x44e89a) > 0x7 || Math['abs'](_0x2b4c34 - _0x1ab1b0) > 0x7)
                continue;
            const _0x22b853 = Math['round'](_0x25683f * _0x437202 - _0x328b9f), _0x284a7c = Math['round'](_0x2b4c34 * _0x437202 - _0xb0606c);
            if (_0x22b853 > _0x123faa || _0x284a7c > _0x2b0c84 || _0x22b853 + _0x437202 < 0x0 || _0x284a7c + _0x437202 < 0x0)
                continue;
            _0x313470['rect'](_0x22b853, _0x284a7c, _0x437202, _0x437202);
        }
        _0x313470['fill']();
        _0x313470['globalCompositeOperation'] = 'source-over';
    }
    if (_0x3f8d9f['polygon'] && _0x3f8d9f['polygon']['length'] >= 0x6) {
        _0x313470['globalCompositeOperation'] = 'destination-out';
        const _0x3349d2 = _0x3f8d9f['polygon'];
        _0x313470['beginPath']();
        _0x313470['moveTo'](_0x3349d2[0x0] - _0x328b9f, _0x3349d2[0x1] - _0xb0606c);
        for (let _0x445451 = 0x2; _0x445451 < _0x3349d2['length']; _0x445451 += 0x2) {
            _0x313470['lineTo'](_0x3349d2[_0x445451] - _0x328b9f, _0x3349d2[_0x445451 + 0x1] - _0xb0606c);
        }
        _0x313470['closePath']();
        _0x313470['fill']();
        _0x313470['globalCompositeOperation'] = 'source-over';
    }
    _0x2ef96c['drawImage'](_0x1f7f60, 0x0, 0x0);
}
function _0x15ce75(_0x43c1f2) {
    let _0x1956be = 0x0, _0x3f31eb = 0x0;
    const _0xbbcab8 = _0x1cdb4b['INPUTS']['mouseX'] / _0x1cdb4b['SYSTEM']['viewScale'];
    const _0x21ddc4 = _0x1cdb4b['INPUTS']['mouseY'] / _0x1cdb4b['SYSTEM']['viewScale'];
    const _0x12933c = _0x3f99ad['x'] - _0x1cdb4b['CAMERA']['x'] + _0x3f99ad['width'] / 0x2;
    const _0x35f8e7 = _0x3f99ad['y'] - _0x1cdb4b['CAMERA']['y'] + _0x3f99ad['height'] / 0x2;
    const _0x26ca04 = Math['atan2'](_0x21ddc4 - _0x35f8e7, _0xbbcab8 - _0x12933c);
    if (_0x2ec8c7 !== 0x0 || _0x33d77a !== 0x0) {
        _0x1956be = _0x2ec8c7;
        _0x3f31eb = _0x33d77a;
    } else if (_0x43d611) {
        let _0x5a48fd = 0x0, _0x1ad7f9 = 0x0;
        if (_0x1cdb4b['INPUTS']['keys']['w'] || _0x1cdb4b['INPUTS']['keys']['arrowup'])
            _0x5a48fd += 0x1;
        if (_0x1cdb4b['INPUTS']['keys']['s'] || _0x1cdb4b['INPUTS']['keys']['arrowdown'])
            _0x5a48fd -= 0x1;
        if (_0x1cdb4b['INPUTS']['keys']['d'] || _0x1cdb4b['INPUTS']['keys']['arrowright'])
            _0x1ad7f9 += 0x1;
        if (_0x1cdb4b['INPUTS']['keys']['a'] || _0x1cdb4b['INPUTS']['keys']['arrowleft'])
            _0x1ad7f9 -= 0x1;
        if (_0x5a48fd !== 0x0 || _0x1ad7f9 !== 0x0) {
            const _0x9e7404 = _0x26ca04 + Math['atan2'](_0x1ad7f9, _0x5a48fd);
            _0x1956be = Math['cos'](_0x9e7404);
            _0x3f31eb = Math['sin'](_0x9e7404);
        }
    } else {
        if (_0x1cdb4b['INPUTS']['keys']['w'] || _0x1cdb4b['INPUTS']['keys']['arrowup'])
            _0x3f31eb -= 0x1;
        if (_0x1cdb4b['INPUTS']['keys']['s'] || _0x1cdb4b['INPUTS']['keys']['arrowdown'])
            _0x3f31eb += 0x1;
        if (_0x1cdb4b['INPUTS']['keys']['a'] || _0x1cdb4b['INPUTS']['keys']['arrowleft'])
            _0x1956be -= 0x1;
        if (_0x1cdb4b['INPUTS']['keys']['d'] || _0x1cdb4b['INPUTS']['keys']['arrowright'])
            _0x1956be += 0x1;
        const _0x1c5edc = _0x1956be !== 0x0 || _0x3f31eb !== 0x0;
        if (_0x1c5edc) {
            const _0x48325d = Math['sqrt'](_0x1956be * _0x1956be + _0x3f31eb * _0x3f31eb);
            _0x1956be /= _0x48325d;
            _0x3f31eb /= _0x48325d;
        }
    }
    if (_0x1cdb4b['GAME_STATE'] === 'NIGHT' && (_0x289ac2 === 'Skinwalker' || _0x289ac2 === 'Blackmailer')) {
        if (_0x1cdb4b['NIGHT_ABILITY_OPEN'] || !_0x1cdb4b['CURRENT_TARGET']) {
            _0x1956be = 0x0;
            _0x3f31eb = 0x0;
            _0x3f99ad['vx'] = 0x0;
            _0x3f99ad['vy'] = 0x0;
            _0x3f99ad['x'] = _0x1cdb4b['MAP']['columns'] * _0x1cdb4b['MAP']['tileSize'] / 0x2 - _0x3f99ad['width'] / 0x2;
            _0x3f99ad['y'] = _0x1cdb4b['MAP']['rows'] * _0x1cdb4b['MAP']['tileSize'] / 0x2 - _0x3f99ad['height'] / 0x2;
        }
    }
    const _0x24a521 = _0x1956be !== 0x0 || _0x3f31eb !== 0x0;
    const _0x437a98 = (_0x1cdb4b['INPUTS']['keys']['shift'] || _0x3cd8b1 || _0x723335) && _0x24a521;
    _0x3f99ad['bopTimer'] = _0x437a98 ? _0x3f99ad['bopTimer'] + _0x43c1f2 : 0x0;
    _0x3f99ad['scale'] = 0x1 + (_0x3f99ad['bopTimer'] > 0x0 ? Math['sin'](_0x3f99ad['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x119045 = Math['pow'](0.001, _0x43c1f2);
    const _0x2f33ce = _0x437a98 ? 0x74a : 0x5d5;
    _0x3f99ad['vx'] += _0x1956be * _0x2f33ce * _0x43c1f2;
    _0x3f99ad['vy'] += _0x3f31eb * _0x2f33ce * _0x43c1f2;
    _0x3f99ad['vx'] *= _0x119045;
    _0x3f99ad['vy'] *= _0x119045;
    _0x3f99ad['x'] += _0x3f99ad['vx'] * _0x43c1f2;
    _0x3f99ad['y'] += _0x3f99ad['vy'] * _0x43c1f2;
    for (let _0x5cbe79 = 0x0; _0x5cbe79 < 0x3; _0x5cbe79++)
        _0x11e07c();
    for (let _0x31139a = 0x0; _0x31139a < 0x2; _0x31139a++)
        _0x43311d();
    for (let _0x7eec5 = 0x0; _0x7eec5 < 0x2; _0x7eec5++)
        _0x14e0ea();
    if (_0x3f99ad['x'] < 0x0)
        _0x3f99ad['x'] = 0x0;
    if (_0x3f99ad['y'] < 0x0)
        _0x3f99ad['y'] = 0x0;
    if (_0x3f99ad['x'] + _0x3f99ad['width'] > _0x1cdb4b['MAP']['columns'] * _0x1cdb4b['MAP']['tileSize'])
        _0x3f99ad['x'] = _0x1cdb4b['MAP']['columns'] * _0x1cdb4b['MAP']['tileSize'] - _0x3f99ad['width'];
    if (_0x3f99ad['y'] + _0x3f99ad['height'] > _0x1cdb4b['MAP']['rows'] * _0x1cdb4b['MAP']['tileSize'])
        _0x3f99ad['y'] = _0x1cdb4b['MAP']['rows'] * _0x1cdb4b['MAP']['tileSize'] - _0x3f99ad['height'];
    if (_0x4a9214) {
        _0x3f99ad['angle'] = _0x3d7aff + Math['PI'] / 0x2;
    } else if (_0x2ec8c7 !== 0x0 || _0x33d77a !== 0x0) {
        _0x3f99ad['angle'] = Math['atan2'](_0x33d77a, _0x2ec8c7) + Math['PI'] / 0x2;
    } else if (!_0x3e73f9) {
        _0x3f99ad['angle'] = _0x26ca04 + Math['PI'] / 0x2;
    }
    const _0x17fcfd = _0x3f99ad['x'] + _0x3f99ad['width'] / 0x2 - _0x1cdb4b['CAMERA']['width'] / 0x2;
    const _0x940dba = _0x3f99ad['y'] + _0x3f99ad['height'] / 0x2 - _0x1cdb4b['CAMERA']['height'] / 0x2;
    if (_0x1cdb4b['CAMERA']['x'] === null || isNaN(_0x1cdb4b['CAMERA']['x']) || !isFinite(_0x1cdb4b['CAMERA']['x'])) {
        _0x1cdb4b['CAMERA']['x'] = _0x17fcfd;
        _0x1cdb4b['CAMERA']['y'] = _0x940dba;
    } else {
        const _0x831ec5 = 0x1 - Math['exp'](-Math['max'](0x0, _0x43c1f2) * 0x28);
        _0x1cdb4b['CAMERA']['x'] += (_0x17fcfd - _0x1cdb4b['CAMERA']['x']) * _0x831ec5;
        _0x1cdb4b['CAMERA']['y'] += (_0x940dba - _0x1cdb4b['CAMERA']['y']) * _0x831ec5;
    }
    for (const _0x38ed68 in _0x41c578) {
        const _0x515038 = _0x41c578[_0x38ed68];
        if (_0x515038['renderX'] === undefined) {
            _0x515038['renderX'] = _0x515038['x'];
            _0x515038['renderY'] = _0x515038['y'];
            _0x515038['renderAngle'] = _0x515038['angle'] || 0x0;
        }
        const _0x18fac2 = _0x515038['x'] + (_0x515038['vx'] || 0x0) * _0x43c1f2;
        const _0xf2ed29 = _0x515038['y'] + (_0x515038['vy'] || 0x0) * _0x43c1f2;
        _0x515038['x'] = _0x18fac2;
        _0x515038['y'] = _0xf2ed29;
        const _0x341040 = 0x1 - Math['exp'](-_0x43c1f2 * 0x12);
        const _0x4055bc = _0x515038['x'] - _0x515038['renderX'], _0x4887f9 = _0x515038['y'] - _0x515038['renderY'];
        const _0x3b2436 = Math['sqrt'](_0x4055bc * _0x4055bc + _0x4887f9 * _0x4887f9);
        const _0x122ec6 = 0xc8;
        if (_0x3b2436 > _0x122ec6) {
            _0x515038['renderX'] = _0x515038['x'] - _0x4055bc / _0x3b2436 * _0x122ec6;
            _0x515038['renderY'] = _0x515038['y'] - _0x4887f9 / _0x3b2436 * _0x122ec6;
        }
        _0x515038['renderX'] += (_0x515038['x'] - _0x515038['renderX']) * _0x341040;
        _0x515038['renderY'] += (_0x515038['y'] - _0x515038['renderY']) * _0x341040;
        let _0x359e19 = (_0x515038['angle'] || 0x0) - _0x515038['renderAngle'];
        while (_0x359e19 < -Math['PI'])
            _0x359e19 += Math['PI'] * 0x2;
        while (_0x359e19 > Math['PI'])
            _0x359e19 -= Math['PI'] * 0x2;
        _0x515038['renderAngle'] += _0x359e19 * (0x1 - Math['exp'](-_0x43c1f2 * 0x14));
    }
    if (_0x1cdb4b['GAME_STATE'] === 'NIGHT') {
        _0xa07fb9 = Math['min'](0.6, _0xa07fb9 + _0x43c1f2 * 0.5);
    } else {
        _0xa07fb9 = Math['max'](0x0, _0xa07fb9 - _0x43c1f2 * 0.5);
    }
    if (_0x5ba9ec > 0x0) {
        if (performance['now']() > _0x3dace2) {
            _0x5ba9ec = Math['max'](0x0, _0x5ba9ec - _0x43c1f2 * 0x2);
        }
    }
    _0x24925d();
    _0x290f36();
}
function _0x4c89f6(_0x41aabf, _0x2076e0, _0x1d765e, _0x5643be, _0x1e9ba1 = !![]) {
    _0x41aabf['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x2a09d2 = _0x41aabf['measureText'](_0x2076e0)['width'];
    const _0x3710b6 = _0x2a09d2 + 0x18;
    const _0x850db0 = 0x1c;
    _0x41aabf['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x41aabf['beginPath']();
    if (_0x41aabf['roundRect']) {
        _0x41aabf['roundRect'](_0x1d765e - _0x3710b6 / 0x2, _0x5643be - _0x850db0, _0x3710b6, _0x850db0, 0x6);
    } else {
        _0x41aabf['rect'](_0x1d765e - _0x3710b6 / 0x2, _0x5643be - _0x850db0, _0x3710b6, _0x850db0);
    }
    _0x41aabf['fill']();
    if (_0x1e9ba1) {
        _0x41aabf['beginPath']();
        _0x41aabf['moveTo'](_0x1d765e - 0x6, _0x5643be);
        _0x41aabf['lineTo'](_0x1d765e + 0x6, _0x5643be);
        _0x41aabf['lineTo'](_0x1d765e, _0x5643be + 0x6);
        _0x41aabf['fill']();
    }
    _0x41aabf['fillStyle'] = '#ffffff';
    _0x41aabf['textAlign'] = 'center';
    _0x41aabf['textBaseline'] = 'middle';
    _0x41aabf['fillText'](_0x2076e0, _0x1d765e, _0x5643be - _0x850db0 / 0x2 + 0x1);
}
function _0x4cb20f(_0x11dccd, _0x1344cc, _0x10a033, _0x25f9a0) {
    if (!_0x1344cc || _0x1344cc['length'] === 0x0)
        return;
    let _0x4550ee = _0x25f9a0;
    for (let _0xaee47b = 0x0; _0xaee47b < _0x1344cc['length']; _0xaee47b++) {
        _0x4c89f6(_0x11dccd, _0x1344cc[_0xaee47b]['text'], _0x10a033, _0x4550ee, _0xaee47b === 0x0);
        _0x4550ee -= 0x24;
    }
}
function _0x493074() {
    if (!_0x1cdb4b['SYSTEM']['isReady'])
        return;
    if (_0x1cdb4b['MAP']['layers'] && _0x1cdb4b['MAP']['layers']['length'] > 0x0 && _0x5617d9['complete'] && _0x5617d9['naturalWidth'] > 0x0) {
        if (!_0x1cdb4b['MAP']['_prerenderedWithTileset'] || !_0x1cdb4b['MAP']['bgChunks'] || _0x1cdb4b['MAP']['bgChunks']['length'] === 0x0) {
            _0x48f7cf();
        }
    }
    if (!_0x1cdb4b['MAP']['bgChunks'] || _0x1cdb4b['MAP']['bgChunks']['length'] === 0x0 || !_0x1cdb4b['MAP']['bgChunks'][0x0] || _0x1cdb4b['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x2a2233['fillStyle'] = '#000000';
    _0x2a2233['fillRect'](0x0, 0x0, _0x85660e['width'], _0x85660e['height']);
    _0x2a2233['save']();
    try {
        _0x2a2233['scale'](_0x1cdb4b['SYSTEM']['viewScale'], _0x1cdb4b['SYSTEM']['viewScale']);
        _0x2a2233['imageSmoothingEnabled'] = ![];
        const _0x43547b = Math['floor'](_0x1cdb4b['CAMERA']['x'] || 0x0);
        const _0x2986fa = Math['floor'](_0x1cdb4b['CAMERA']['y'] || 0x0);
        const _0x173e95 = Math['max'](0x0, Math['floor'](_0x43547b / _0x1cdb4b['MAP']['chunkSize']));
        const _0x37af6b = Math['min'](_0x1cdb4b['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x43547b + _0x1cdb4b['CAMERA']['width']) / _0x1cdb4b['MAP']['chunkSize']));
        const _0x481dea = Math['max'](0x0, Math['floor'](_0x2986fa / _0x1cdb4b['MAP']['chunkSize']));
        const _0x163281 = Math['min'](_0x1cdb4b['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x2986fa + _0x1cdb4b['CAMERA']['height']) / _0x1cdb4b['MAP']['chunkSize']));
        for (let _0x38d338 = _0x481dea; _0x38d338 <= _0x163281; _0x38d338++)
            for (let _0x5cf2db = _0x173e95; _0x5cf2db <= _0x37af6b; _0x5cf2db++) {
                const _0x3d243d = _0x5cf2db * _0x1cdb4b['MAP']['chunkSize'] - _0x43547b;
                const _0xc2ddde = _0x38d338 * _0x1cdb4b['MAP']['chunkSize'] - _0x2986fa;
                _0x2a2233['drawImage'](_0x1cdb4b['MAP']['bgChunks'][_0x38d338][_0x5cf2db], _0x3d243d, _0xc2ddde, _0x1cdb4b['MAP']['chunkSize'] + 0x1, _0x1cdb4b['MAP']['chunkSize'] + 0x1);
            }
        const _0x669d39 = _0x499f0c('assets/blood\x20splatter.png');
        if (_0x4616bb && _0x4616bb['length'] > 0x0) {
            for (const _0x55be56 of _0x4616bb) {
                const _0x264ec5 = _0x55be56['x'] - _0x43547b;
                const _0x39236b = _0x55be56['y'] - _0x2986fa;
                if (_0x669d39['complete'] && _0x669d39['naturalWidth'] > 0x0) {
                    _0x2a2233['drawImage'](_0x669d39, _0x264ec5 - 0x20, _0x39236b - 0x20, 0x40, 0x40);
                } else {
                    _0x2a2233['fillStyle'] = 'rgba(160,\x200,\x200,\x200.75)';
                    _0x2a2233['beginPath']();
                    _0x2a2233['arc'](_0x264ec5, _0x39236b, 0x16, 0x0, Math['PI'] * 0x2);
                    _0x2a2233['fill']();
                }
            }
        }
        const _0x17d955 = _0x499f0c('assets/blood.png');
        if (_0x4761ad && _0x4761ad['length'] > 0x0) {
            for (const _0x3abd4a of _0x4761ad) {
                const _0x10a954 = _0x3abd4a['x'] - _0x43547b;
                const _0x192d3c = _0x3abd4a['y'] - _0x2986fa;
                if (_0x17d955['complete'] && _0x17d955['naturalWidth'] > 0x0) {
                    _0x2a2233['drawImage'](_0x17d955, _0x10a954 - 0xc, _0x192d3c - 0xc, 0x18, 0x18);
                } else {
                    _0x2a2233['fillStyle'] = 'rgba(180,\x200,\x200,\x200.8)';
                    _0x2a2233['beginPath']();
                    _0x2a2233['arc'](_0x10a954, _0x192d3c, 0x5, 0x0, Math['PI'] * 0x2);
                    _0x2a2233['fill']();
                }
            }
        }
        if (_0x1f08e3['complete'] && _0x1f08e3['naturalWidth'] > 0x0) {
            const _0x31b3c3 = _0x1cdb4b['MAP']['tileSize'];
            const _0x4dd895 = _0x31b3c3 * 0xa;
            const _0x108e80 = _0x1cdb4b['MAP']['columns'] / 0x2 * _0x31b3c3 - _0x4dd895 / 0x2 - _0x43547b;
            const _0x8fb261 = _0x1cdb4b['MAP']['rows'] / 0x2 * _0x31b3c3 - _0x4dd895 / 0x2 - _0x2986fa;
            _0x2a2233['imageSmoothingEnabled'] = ![];
            _0x2a2233['drawImage'](_0x1f08e3, _0x108e80, _0x8fb261, _0x4dd895, _0x4dd895);
        }
        if (_0x49a1e9['complete'] && _0x49a1e9['naturalWidth'] > 0x0) {
            _0x1cdb4b['ENTITIES']['forEach'](_0x51b6ed => {
                if (_0x51b6ed['type'] !== 'table')
                    return;
                _0x2a2233['save']();
                _0x2a2233['imageSmoothingEnabled'] = ![];
                const _0x367384 = _0x49a1e9['naturalWidth'] >= _0x49a1e9['naturalHeight'];
                const _0x53809d = _0x51b6ed['w'] >= _0x51b6ed['h'];
                if (_0x367384 === _0x53809d) {
                    _0x2a2233['drawImage'](_0x49a1e9, _0x51b6ed['x'] - _0x43547b, _0x51b6ed['y'] - _0x2986fa, _0x51b6ed['w'], _0x51b6ed['h']);
                } else {
                    _0x2a2233['translate'](_0x51b6ed['x'] - _0x43547b + _0x51b6ed['w'] / 0x2, _0x51b6ed['y'] - _0x2986fa + _0x51b6ed['h'] / 0x2);
                    _0x2a2233['rotate'](Math['PI'] / 0x2);
                    _0x2a2233['drawImage'](_0x49a1e9, -_0x51b6ed['h'] / 0x2, -_0x51b6ed['w'] / 0x2, _0x51b6ed['h'], _0x51b6ed['w']);
                }
                _0x2a2233['restore']();
            });
        } else {
            _0x1cdb4b['ENTITIES']['forEach'](_0x5733f9 => {
                if (_0x5733f9['type'] !== 'table')
                    return;
                _0x2a2233['save']();
                _0x2a2233['fillStyle'] = '#6b4423';
                _0x2a2233['fillRect'](_0x5733f9['x'] - _0x43547b, _0x5733f9['y'] - _0x2986fa, _0x5733f9['w'], _0x5733f9['h']);
                _0x2a2233['strokeStyle'] = '#422810';
                _0x2a2233['lineWidth'] = 0x3;
                _0x2a2233['strokeRect'](_0x5733f9['x'] - _0x43547b + 0x1, _0x5733f9['y'] - _0x2986fa + 0x1, _0x5733f9['w'] - 0x2, _0x5733f9['h'] - 0x2);
                _0x2a2233['fillStyle'] = '#82532a';
                _0x2a2233['fillRect'](_0x5733f9['x'] - _0x43547b + 0x4, _0x5733f9['y'] - _0x2986fa + 0x4, _0x5733f9['w'] - 0x8, _0x5733f9['h'] - 0x8);
                _0x2a2233['restore']();
            });
        }
        if (_0x36fd65) {
            if (_0x1cdb4b['MAP']['wallChunks'] && _0x1cdb4b['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x435ce4 = _0x481dea; _0x435ce4 <= _0x163281; _0x435ce4++) {
                    for (let _0x2f9ae8 = _0x173e95; _0x2f9ae8 <= _0x37af6b; _0x2f9ae8++) {
                        if (!_0x1cdb4b['MAP']['wallChunks'][_0x435ce4] || !_0x1cdb4b['MAP']['wallChunks'][_0x435ce4][_0x2f9ae8])
                            continue;
                        const _0x118a14 = _0x2f9ae8 * _0x1cdb4b['MAP']['chunkSize'] - _0x43547b;
                        const _0x88f331 = _0x435ce4 * _0x1cdb4b['MAP']['chunkSize'] - _0x2986fa;
                        _0x2a2233['drawImage'](_0x1cdb4b['MAP']['wallChunks'][_0x435ce4][_0x2f9ae8], _0x118a14, _0x88f331, _0x1cdb4b['MAP']['chunkSize'] + 0x1, _0x1cdb4b['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x596f77 = _0x481dea; _0x596f77 <= _0x163281; _0x596f77++) {
                for (let _0x4ac363 = _0x173e95; _0x4ac363 <= _0x37af6b; _0x4ac363++) {
                    const _0x57aa02 = _0x4ac363 * _0x1cdb4b['MAP']['chunkSize'] - _0x43547b;
                    const _0x43f153 = _0x596f77 * _0x1cdb4b['MAP']['chunkSize'] - _0x2986fa;
                    _0x2a2233['drawImage'](_0x1cdb4b['MAP']['fgChunks'][_0x596f77][_0x4ac363], _0x57aa02, _0x43f153, _0x1cdb4b['MAP']['chunkSize'] + 0x1, _0x1cdb4b['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0xf04d07 = _0x1cdb4b['GAME_STATE'] === 'NIGHT' && (_0x289ac2 === 'Skinwalker' || _0x289ac2 === 'Blackmailer') && !_0x3f99ad['isDead'];
        const _0x1c51c8 = _0x3f99ad['x'] - _0x43547b + _0x3f99ad['width'] / 0x2;
        const _0x2ac454 = _0x3f99ad['y'] - _0x2986fa + _0x3f99ad['height'] / 0x2;
        const _0x460695 = _0x3f99ad['width'] * _0x3f99ad['scale'] * 1.3;
        const _0x473493 = _0x3f99ad['height'] * _0x3f99ad['scale'] * 1.3;
        const _0x398023 = _0x499f0c('assets/arrow.png');
        const _0x438f21 = _0x499f0c('assets/tape.png');
        for (const _0x4bcf21 in _0x41c578) {
            const _0x4690a4 = _0x41c578[_0x4bcf21];
            if (_0x4690a4['isDead'])
                continue;
            const _0x5d5502 = parseInt(_0x4bcf21);
            const _0x47c281 = (_0x4690a4['renderX'] ?? _0x4690a4['x']) - _0x43547b + _0x4690a4['width'] / 0x2;
            const _0x31e63e = (_0x4690a4['renderY'] ?? _0x4690a4['y']) - _0x2986fa + _0x4690a4['height'] / 0x2;
            const _0x359793 = Math['min'](0x2, Math['max'](0.3, _0x4690a4['scale'] || 0x1));
            const _0x21cabd = _0x4690a4['width'] * _0x359793 * 1.3;
            const _0x35330e = _0x4690a4['height'] * _0x359793 * 1.3;
            _0x2a2233['save']();
            try {
                _0x2a2233['translate'](_0x47c281, _0x31e63e);
                _0x2a2233['rotate'](_0x4690a4['renderAngle'] ?? 0x0);
                if (_0x4690a4['isDark'])
                    _0x2a2233['filter'] = 'brightness(0)';
                _0x237d7b(_0x2a2233, _0x4690a4['body'], _0x4690a4['eyes'], _0x21cabd, _0x35330e);
                if (_0x476fb4['has'](_0x5d5502) && _0x1c5f3a['complete'] && _0x1c5f3a['naturalWidth'] > 0x0) {
                    _0x2a2233['drawImage'](_0x1c5f3a, -_0x21cabd / 0x2, -_0x35330e / 0x2, _0x21cabd, _0x35330e);
                }
                if (_0x4690a4['hasArrow'] && _0x1cdb4b['GAME_STATE'] === 'NIGHT' && _0x398023['complete'] && _0x398023['naturalWidth'] > 0x0) {
                    _0x2a2233['drawImage'](_0x398023, -_0x21cabd / 0x2, -_0x35330e / 0x2, _0x21cabd, _0x35330e);
                }
                if ((_0x4690a4['isBlackmailed'] || _0x1c1b09['has'](_0x5d5502)) && _0x438f21['complete'] && _0x438f21['naturalWidth'] > 0x0) {
                    _0x2a2233['drawImage'](_0x438f21, -_0x21cabd / 0x2, -_0x35330e / 0x2, _0x21cabd, _0x35330e);
                }
                if (_0x4690a4['isDark'])
                    _0x2a2233['filter'] = 'none';
            } finally {
                _0x2a2233['restore']();
            }
            if (!_0x279eee((_0x4690a4['renderX'] ?? _0x4690a4['x']) + _0x4690a4['width'] / 0x2, (_0x4690a4['renderY'] ?? _0x4690a4['y']) + _0x4690a4['height'] / 0x2)) {
                _0x2a2233['textAlign'] = 'center';
                _0x2a2233['lineJoin'] = 'round';
                _0x2a2233['lineWidth'] = 0x3;
                _0x2a2233['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x2a2233['font'] = 'bold\x2013px\x20\x27Viga\x27,\x20sans-serif';
                let _0x41572b = '#ffffff';
                if (_0x4690a4['isBlackmailed'] || _0x1c1b09['has'](_0x5d5502)) {
                    _0x41572b = '#ff4444';
                } else if (_0x476fb4['has'](_0x5d5502)) {
                    _0x41572b = '#cc88ff';
                }
                _0x2a2233['fillStyle'] = _0x41572b;
                const _0x3be6d3 = _0x4690a4['isDark'] ? '???' : _0x4690a4['name'] + (_0x4690a4['isOwner'] ? '\x20[🗝️]' : '');
                _0x2a2233['strokeText'](_0x3be6d3, _0x47c281, _0x31e63e - _0x35330e / 0x2 - 0x10);
                _0x2a2233['fillText'](_0x3be6d3, _0x47c281, _0x31e63e - _0x35330e / 0x2 - 0x10);
            }
        }
        if (!_0x3f99ad['isDead']) {
            _0x2a2233['save']();
            try {
                _0x2a2233['translate'](_0x1c51c8, _0x2ac454);
                _0x2a2233['rotate'](_0x3f99ad['angle']);
                if (_0xf04d07)
                    _0x2a2233['filter'] = 'brightness(0)';
                _0x237d7b(_0x2a2233, _0x36664, _0x578d3b, _0x460695, _0x473493);
                if (_0x476fb4['has'](_0xa2c3d) && _0x1c5f3a['complete'] && _0x1c5f3a['naturalWidth'] > 0x0) {
                    _0x2a2233['drawImage'](_0x1c5f3a, -_0x460695 / 0x2, -_0x473493 / 0x2, _0x460695, _0x473493);
                }
                if (_0x3f99ad['hasArrow'] && _0x1cdb4b['GAME_STATE'] === 'NIGHT' && _0x398023['complete'] && _0x398023['naturalWidth'] > 0x0) {
                    _0x2a2233['drawImage'](_0x398023, -_0x460695 / 0x2, -_0x473493 / 0x2, _0x460695, _0x473493);
                }
                if (_0x1c1b09['has'](_0xa2c3d) && _0x438f21['complete'] && _0x438f21['naturalWidth'] > 0x0) {
                    _0x2a2233['drawImage'](_0x438f21, -_0x460695 / 0x2, -_0x473493 / 0x2, _0x460695, _0x473493);
                }
                if (_0xf04d07)
                    _0x2a2233['filter'] = 'none';
            } finally {
                _0x2a2233['restore']();
            }
            if (!_0x279eee(_0x3f99ad['x'] + _0x3f99ad['width'] / 0x2, _0x3f99ad['y'] + _0x3f99ad['height'] / 0x2)) {
                _0x2a2233['textAlign'] = 'center';
                _0x2a2233['lineJoin'] = 'round';
                _0x2a2233['lineWidth'] = 0x3;
                _0x2a2233['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x2a2233['font'] = 'bold\x2013px\x20\x27Viga\x27,\x20sans-serif';
                let _0x2ca2c2 = '#ffffff';
                if (_0x1c1b09['has'](_0xa2c3d)) {
                    _0x2ca2c2 = '#ff4444';
                } else if (_0x476fb4['has'](_0xa2c3d)) {
                    _0x2ca2c2 = '#cc88ff';
                }
                _0x2a2233['fillStyle'] = _0x2ca2c2;
                const _0x167de5 = _0xf04d07 ? '???' : _0x7f9760 + (_0x3ffc80 ? '\x20[🗝️]' : '');
                _0x2a2233['strokeText'](_0x167de5, _0x1c51c8, _0x2ac454 - _0x473493 / 0x2 - 0x10);
                _0x2a2233['fillText'](_0x167de5, _0x1c51c8, _0x2ac454 - _0x473493 / 0x2 - 0x10);
            }
        }
        if (_0x1cdb4b['MAP']['wallChunks'] && _0x1cdb4b['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x9a55b6 = _0x481dea; _0x9a55b6 <= _0x163281; _0x9a55b6++)
                for (let _0xc5dd29 = _0x173e95; _0xc5dd29 <= _0x37af6b; _0xc5dd29++) {
                    if (!_0x1cdb4b['MAP']['wallChunks'][_0x9a55b6] || !_0x1cdb4b['MAP']['wallChunks'][_0x9a55b6][_0xc5dd29])
                        continue;
                    const _0x565bc1 = _0xc5dd29 * _0x1cdb4b['MAP']['chunkSize'] - _0x43547b;
                    const _0x4aaa7e = _0x9a55b6 * _0x1cdb4b['MAP']['chunkSize'] - _0x2986fa;
                    _0x2a2233['drawImage'](_0x1cdb4b['MAP']['wallChunks'][_0x9a55b6][_0xc5dd29], _0x565bc1, _0x4aaa7e, _0x1cdb4b['MAP']['chunkSize'] + 0x1, _0x1cdb4b['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x5e5315 of _0x1cdb4b['ENTITIES']) {
            if (_0x5e5315['type'] !== 'npc')
                continue;
            const _0x17eaa6 = _0x5e5315['x'] - _0x43547b + _0x5e5315['w'] / 0x2;
            const _0xeabc72 = _0x5e5315['y'] - _0x2986fa + _0x5e5315['h'] / 0x2;
            const _0x2b612d = _0x5e5315['w'];
            const _0x29f247 = _0x5e5315['h'];
            _0x2a2233['save']();
            _0x2a2233['translate'](_0x17eaa6, _0xeabc72);
            _0x2a2233['rotate'](_0x5e5315['angle'] !== undefined ? _0x5e5315['angle'] : 0x0);
            _0x237d7b(_0x2a2233, _0x5e5315['body'] || 'yanito932.png', _0x5e5315['eyes'], _0x2b612d, _0x29f247);
            _0x2a2233['restore']();
            _0x2a2233['textAlign'] = 'center';
            _0x2a2233['lineJoin'] = 'round';
            _0x2a2233['lineWidth'] = 0x3;
            _0x2a2233['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x2a2233['font'] = 'bold\x2013px\x20\x27Viga\x27,\x20sans-serif';
            _0x2a2233['fillStyle'] = '#aaaaaa';
            _0x2a2233['strokeText'](_0x5e5315['name'] || 'NPC', _0x17eaa6, _0xeabc72 - _0x29f247 / 0x2 - 0x10);
            _0x2a2233['fillText'](_0x5e5315['name'] || 'NPC', _0x17eaa6, _0xeabc72 - _0x29f247 / 0x2 - 0x10);
        }
        if (_0x3f99ad['isDead']) {
            for (const _0x2d2968 in _0x41c578) {
                const _0x1f471e = _0x41c578[_0x2d2968];
                if (!_0x1f471e['isDead'])
                    continue;
                const _0x43df39 = (_0x1f471e['renderX'] ?? _0x1f471e['x']) - _0x43547b + _0x1f471e['width'] / 0x2;
                const _0x3263a9 = (_0x1f471e['renderY'] ?? _0x1f471e['y']) - _0x2986fa + _0x1f471e['height'] / 0x2;
                const _0x54175c = _0x1f471e['width'] * (_0x1f471e['scale'] || 0x1) * 1.3;
                const _0x7003fa = _0x1f471e['height'] * (_0x1f471e['scale'] || 0x1) * 1.3;
                _0x2a2233['save']();
                try {
                    _0x2a2233['translate'](_0x43df39, _0x3263a9);
                    _0x2a2233['rotate'](_0x1f471e['renderAngle'] ?? 0x0);
                    _0x2a2233['globalAlpha'] = 0.3;
                    _0x237d7b(_0x2a2233, _0x1f471e['body'], _0x1f471e['eyes'], _0x54175c, _0x7003fa);
                } finally {
                    _0x2a2233['restore']();
                }
                if (!_0x279eee((_0x1f471e['renderX'] ?? _0x1f471e['x']) + _0x1f471e['width'] / 0x2, (_0x1f471e['renderY'] ?? _0x1f471e['y']) + _0x1f471e['height'] / 0x2)) {
                    _0x2a2233['save']();
                    _0x2a2233['globalAlpha'] = 0.3;
                    _0x2a2233['textAlign'] = 'center';
                    _0x2a2233['lineJoin'] = 'round';
                    _0x2a2233['lineWidth'] = 0x3;
                    _0x2a2233['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x2a2233['font'] = 'bold\x2013px\x20\x27Viga\x27,\x20sans-serif';
                    _0x2a2233['fillStyle'] = '#ffffff';
                    const _0x3a7d63 = _0x1f471e['name'] + (_0x1f471e['isOwner'] ? '\x20[🗝️]' : '');
                    _0x2a2233['strokeText'](_0x3a7d63, _0x43df39, _0x3263a9 - _0x7003fa / 0x2 - 0x10);
                    _0x2a2233['fillText'](_0x3a7d63, _0x43df39, _0x3263a9 - _0x7003fa / 0x2 - 0x10);
                    _0x2a2233['restore']();
                }
            }
            _0x2a2233['save']();
            try {
                _0x2a2233['translate'](_0x1c51c8, _0x2ac454);
                _0x2a2233['rotate'](_0x3f99ad['angle']);
                _0x2a2233['globalAlpha'] = 0.3;
                _0x237d7b(_0x2a2233, _0x36664, _0x578d3b, _0x460695, _0x473493);
            } finally {
                _0x2a2233['restore']();
            }
            if (!_0x279eee(_0x3f99ad['x'] + _0x3f99ad['width'] / 0x2, _0x3f99ad['y'] + _0x3f99ad['height'] / 0x2)) {
                _0x2a2233['save']();
                _0x2a2233['globalAlpha'] = 0.3;
                _0x2a2233['textAlign'] = 'center';
                _0x2a2233['lineJoin'] = 'round';
                _0x2a2233['lineWidth'] = 0x3;
                _0x2a2233['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x2a2233['font'] = 'bold\x2013px\x20\x27Viga\x27,\x20sans-serif';
                _0x2a2233['fillStyle'] = '#ffffff';
                const _0x289a2c = _0x7f9760 + (_0x3ffc80 ? '\x20[🗝️]' : '');
                _0x2a2233['strokeText'](_0x289a2c, _0x1c51c8, _0x2ac454 - _0x473493 / 0x2 - 0x10);
                _0x2a2233['fillText'](_0x289a2c, _0x1c51c8, _0x2ac454 - _0x473493 / 0x2 - 0x10);
                _0x2a2233['restore']();
            }
        }
        for (let _0x8385be = _0x481dea; _0x8385be <= _0x163281; _0x8385be++)
            for (let _0x4896cb = _0x173e95; _0x4896cb <= _0x37af6b; _0x4896cb++) {
                const _0x369666 = _0x4896cb * _0x1cdb4b['MAP']['chunkSize'] - _0x43547b;
                const _0x2c7089 = _0x8385be * _0x1cdb4b['MAP']['chunkSize'] - _0x2986fa;
                _0x2a2233['drawImage'](_0x1cdb4b['MAP']['fgChunks'][_0x8385be][_0x4896cb], _0x369666, _0x2c7089, _0x1cdb4b['MAP']['chunkSize'] + 0x1, _0x1cdb4b['MAP']['chunkSize'] + 0x1);
            }
        if (_0x1cdb4b['EDITOR']['enabled'] && _0x1cdb4b['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x5a5736 = _0x1cdb4b['INPUTS']['mouseX'] / _0x1cdb4b['SYSTEM']['viewScale'] + _0x1cdb4b['CAMERA']['x'];
            const _0x56dc09 = _0x1cdb4b['INPUTS']['mouseY'] / _0x1cdb4b['SYSTEM']['viewScale'] + _0x1cdb4b['CAMERA']['y'];
            const _0x7278e3 = Math['floor'](_0x5a5736 / _0x1cdb4b['MAP']['tileSize']);
            const _0x4c2be7 = Math['floor'](_0x56dc09 / _0x1cdb4b['MAP']['tileSize']);
            if (_0x7278e3 >= 0x0 && _0x7278e3 < _0x1cdb4b['MAP']['columns'] && _0x4c2be7 >= 0x0 && _0x4c2be7 < _0x1cdb4b['MAP']['rows']) {
                const _0x59ace0 = _0x7278e3 * _0x1cdb4b['MAP']['tileSize'] - _0x43547b;
                const _0x4a129d = _0x4c2be7 * _0x1cdb4b['MAP']['tileSize'] - _0x2986fa;
                _0x2a2233['save']();
                _0x2a2233['globalAlpha'] = 0.5;
                if (_0x1cdb4b['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x273b5d = _0x1cdb4b['EDITOR']['selectedTileGid'] - 0x1;
                    _0x2a2233['drawImage'](_0x5617d9, _0x273b5d % _0x1cdb4b['MAP']['tilesetCols'] * _0x1cdb4b['MAP']['tileSize'], Math['floor'](_0x273b5d / _0x1cdb4b['MAP']['tilesetCols']) * _0x1cdb4b['MAP']['tileSize'], _0x1cdb4b['MAP']['tileSize'], _0x1cdb4b['MAP']['tileSize'], _0x59ace0, _0x4a129d, _0x1cdb4b['MAP']['tileSize'], _0x1cdb4b['MAP']['tileSize']);
                } else {
                    _0x2a2233['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x2a2233['fillRect'](_0x59ace0, _0x4a129d, _0x1cdb4b['MAP']['tileSize'], _0x1cdb4b['MAP']['tileSize']);
                }
                _0x2a2233['restore']();
            }
        }
        _0x421e6c(_0x2a2233, _0x43547b, _0x2986fa);
        if (_0xa07fb9 > 0x0) {
            _0x2a2233['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0xa07fb9 + ')';
            _0x2a2233['fillRect'](0x0, 0x0, _0x1cdb4b['CAMERA']['width'], _0x1cdb4b['CAMERA']['height']);
        }
        for (const _0x56ea59 in _0x41c578) {
            const _0x2579a4 = _0x41c578[_0x56ea59];
            if (_0x2579a4['isDead'] && !_0x3f99ad['isDead'])
                continue;
            const _0x27620b = (_0x2579a4['renderX'] ?? _0x2579a4['x']) - _0x43547b + _0x2579a4['width'] / 0x2;
            const _0x5819be = (_0x2579a4['renderY'] ?? _0x2579a4['y']) - _0x2986fa + _0x2579a4['height'] / 0x2;
            _0x4cb20f(_0x2a2233, _0x2579a4['chats'], _0x27620b, _0x5819be - _0x2579a4['height'] / 0x2 - 0x20);
        }
        _0x4cb20f(_0x2a2233, _0x3f99ad['chats'], _0x1c51c8, _0x2ac454 - _0x3f99ad['height'] / 0x2 - 0x20);
        if (_0x5ba9ec > 0x0) {
            _0x2a2233['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x5ba9ec + ')';
            _0x2a2233['fillRect'](0x0, 0x0, _0x1cdb4b['CAMERA']['width'], _0x1cdb4b['CAMERA']['height']);
        }
    } finally {
        _0x2a2233['restore']();
    }
}
function _0x48be3d(_0x453e7f) {
    if (!_0x1cdb4b['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x48be3d);
    let _0x5a64aa = (_0x453e7f - _0x1cdb4b['SYSTEM']['lastTime']) / 0x3e8;
    _0x1cdb4b['SYSTEM']['lastTime'] = _0x453e7f;
    if (_0x5a64aa > 0.1)
        _0x5a64aa = 0.1;
    if (_0x5a64aa < 0x0 || isNaN(_0x5a64aa))
        _0x5a64aa = 0.016;
    if (_0x36fd65) {
        _0x5ede20(_0x5a64aa);
        _0x493074();
        return;
    }
    if (!_0xa2c3d)
        return;
    _0x15ce75(_0x5a64aa);
    _0x3a2945['tick'](_0x453e7f);
    _0x493074();
}
function _0x48f7cf() {
    if (_0x5617d9['complete'] && _0x5617d9['naturalWidth'] > 0x0) {
        _0x1cdb4b['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x223613 = Math['ceil'](_0x1cdb4b['MAP']['columns'] * _0x1cdb4b['MAP']['tileSize'] / _0x1cdb4b['MAP']['chunkSize']);
    const _0x565b06 = Math['ceil'](_0x1cdb4b['MAP']['rows'] * _0x1cdb4b['MAP']['tileSize'] / _0x1cdb4b['MAP']['chunkSize']);
    _0x1cdb4b['MAP']['bgChunks'] = [];
    _0x1cdb4b['MAP']['fgChunks'] = [];
    _0x1cdb4b['MAP']['wallChunks'] = [];
    for (let _0x2760d2 = 0x0; _0x2760d2 < _0x565b06; _0x2760d2++) {
        _0x1cdb4b['MAP']['bgChunks'][_0x2760d2] = [];
        _0x1cdb4b['MAP']['fgChunks'][_0x2760d2] = [];
        _0x1cdb4b['MAP']['wallChunks'][_0x2760d2] = [];
        for (let _0x39cbb7 = 0x0; _0x39cbb7 < _0x223613; _0x39cbb7++) {
            const _0x5d296a = document['createElement']('canvas');
            _0x5d296a['width'] = _0x5d296a['height'] = _0x1cdb4b['MAP']['chunkSize'];
            const _0x1f6a96 = document['createElement']('canvas');
            _0x1f6a96['width'] = _0x1f6a96['height'] = _0x1cdb4b['MAP']['chunkSize'];
            const _0x397e1e = document['createElement']('canvas');
            _0x397e1e['width'] = _0x397e1e['height'] = _0x1cdb4b['MAP']['chunkSize'];
            _0x1cdb4b['MAP']['bgChunks'][_0x2760d2][_0x39cbb7] = _0x5d296a;
            _0x1cdb4b['MAP']['fgChunks'][_0x2760d2][_0x39cbb7] = _0x1f6a96;
            _0x1cdb4b['MAP']['wallChunks'][_0x2760d2][_0x39cbb7] = _0x397e1e;
            _0xd44658(_0x39cbb7, _0x2760d2);
        }
    }
}
function _0xd44658(_0x5e03d1, _0x10564b) {
    const _0x4612e3 = _0x1cdb4b['MAP']['bgChunks'][_0x10564b][_0x5e03d1]['getContext']('2d', { 'alpha': !![] });
    const _0x1a4afc = _0x1cdb4b['MAP']['fgChunks'][_0x10564b][_0x5e03d1]['getContext']('2d', { 'alpha': !![] });
    const _0x53d1cb = _0x1cdb4b['MAP']['wallChunks'][_0x10564b] && _0x1cdb4b['MAP']['wallChunks'][_0x10564b][_0x5e03d1] ? _0x1cdb4b['MAP']['wallChunks'][_0x10564b][_0x5e03d1]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x4612e3['imageSmoothingEnabled'] = _0x1a4afc['imageSmoothingEnabled'] = ![];
    if (_0x53d1cb)
        _0x53d1cb['imageSmoothingEnabled'] = ![];
    _0x4612e3['clearRect'](0x0, 0x0, _0x1cdb4b['MAP']['chunkSize'], _0x1cdb4b['MAP']['chunkSize']);
    _0x1a4afc['clearRect'](0x0, 0x0, _0x1cdb4b['MAP']['chunkSize'], _0x1cdb4b['MAP']['chunkSize']);
    if (_0x53d1cb)
        _0x53d1cb['clearRect'](0x0, 0x0, _0x1cdb4b['MAP']['chunkSize'], _0x1cdb4b['MAP']['chunkSize']);
    const _0x58e287 = Math['floor'](_0x5e03d1 * _0x1cdb4b['MAP']['chunkSize'] / _0x1cdb4b['MAP']['tileSize']);
    const _0x3b06b2 = Math['ceil']((_0x5e03d1 + 0x1) * _0x1cdb4b['MAP']['chunkSize'] / _0x1cdb4b['MAP']['tileSize']);
    const _0x297610 = Math['floor'](_0x10564b * _0x1cdb4b['MAP']['chunkSize'] / _0x1cdb4b['MAP']['tileSize']);
    const _0x5efb34 = Math['ceil']((_0x10564b + 0x1) * _0x1cdb4b['MAP']['chunkSize'] / _0x1cdb4b['MAP']['tileSize']);
    const _0x4954cf = 0.5;
    const _0x32ffc5 = _0x1cdb4b['MAP']['tileSize'] - _0x4954cf * 0x2;
    _0x1cdb4b['MAP']['layers']['forEach'](_0x159fd4 => {
        const _0x3ba239 = _0x159fd4['name'] === 'walls';
        const _0xdaff88 = _0x159fd4['name'] === 'trees' ? _0x1a4afc : _0x3ba239 ? _0x53d1cb || _0x4612e3 : _0x4612e3;
        for (let _0x25e20a = Math['max'](0x0, _0x297610); _0x25e20a < Math['min'](_0x1cdb4b['MAP']['rows'], _0x5efb34); _0x25e20a++) {
            for (let _0x557182 = Math['max'](0x0, _0x58e287); _0x557182 < Math['min'](_0x1cdb4b['MAP']['columns'], _0x3b06b2); _0x557182++) {
                let _0x36e3d7 = _0x159fd4['data'][_0x25e20a * _0x1cdb4b['MAP']['columns'] + _0x557182];
                if (_0x159fd4['name'] === 'floor2' && _0x1cdb4b['MAP']['doors'] && _0x1cdb4b['MAP']['doors'][_0x25e20a * _0x1cdb4b['MAP']['columns'] + _0x557182]) {
                    _0x36e3d7 = 0x2;
                }
                if (_0x36e3d7 > 0x0) {
                    const _0x52d1da = _0x36e3d7 - 0x1;
                    const _0x1cf363 = _0x52d1da % _0x1cdb4b['MAP']['tilesetCols'] * _0x1cdb4b['MAP']['tileSize'] + _0x4954cf;
                    const _0x3368aa = Math['floor'](_0x52d1da / _0x1cdb4b['MAP']['tilesetCols']) * _0x1cdb4b['MAP']['tileSize'] + _0x4954cf;
                    const _0x3a386f = _0x557182 * _0x1cdb4b['MAP']['tileSize'] - _0x5e03d1 * _0x1cdb4b['MAP']['chunkSize'];
                    const _0x473689 = _0x25e20a * _0x1cdb4b['MAP']['tileSize'] - _0x10564b * _0x1cdb4b['MAP']['chunkSize'];
                    if (_0x36e3d7 === 0x4) {
                        const _0x2efea8 = 0x1;
                        const _0x405d42 = _0x2efea8 % _0x1cdb4b['MAP']['tilesetCols'] * _0x1cdb4b['MAP']['tileSize'] + _0x4954cf;
                        const _0x809d52 = Math['floor'](_0x2efea8 / _0x1cdb4b['MAP']['tilesetCols']) * _0x1cdb4b['MAP']['tileSize'] + _0x4954cf;
                        _0x4612e3['drawImage'](_0x5617d9, _0x405d42, _0x809d52, _0x32ffc5, _0x32ffc5, _0x3a386f, _0x473689, _0x1cdb4b['MAP']['tileSize'], _0x1cdb4b['MAP']['tileSize']);
                        let _0x20dc7f = _0x1cdb4b['MAP']['doors'] ? _0x1cdb4b['MAP']['doors'][_0x25e20a * _0x1cdb4b['MAP']['columns'] + _0x557182] : null;
                        if (!_0x20dc7f) {
                            const _0x33a0ed = _0x1cdb4b['MAP']['layers']['find'](_0x6dfbde => _0x6dfbde['name'] === 'walls');
                            const _0x463484 = _0x25e20a > 0x0 && _0x33a0ed && _0x33a0ed['data'][(_0x25e20a - 0x1) * _0x1cdb4b['MAP']['columns'] + _0x557182] > 0x0;
                            const _0x1bd54b = _0x25e20a < _0x1cdb4b['MAP']['rows'] - 0x1 && _0x33a0ed && _0x33a0ed['data'][(_0x25e20a + 0x1) * _0x1cdb4b['MAP']['columns'] + _0x557182] > 0x0;
                            const _0x12a5d7 = _0x557182 > 0x0 && _0x33a0ed && _0x33a0ed['data'][_0x25e20a * _0x1cdb4b['MAP']['columns'] + _0x557182 - 0x1] > 0x0;
                            const _0x68bb80 = _0x557182 < _0x1cdb4b['MAP']['columns'] - 0x1 && _0x33a0ed && _0x33a0ed['data'][_0x25e20a * _0x1cdb4b['MAP']['columns'] + _0x557182 + 0x1] > 0x0;
                            if (_0x12a5d7 && _0x68bb80)
                                _0x20dc7f = _0x25e20a < _0x1cdb4b['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x463484 && _0x1bd54b)
                                _0x20dc7f = _0x557182 < _0x1cdb4b['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x450c52 = 0x0;
                        if (_0x20dc7f === 'bottom')
                            _0x450c52 = Math['PI'] / 0x2;
                        else if (_0x20dc7f === 'left')
                            _0x450c52 = Math['PI'];
                        else if (_0x20dc7f === 'top')
                            _0x450c52 = -Math['PI'] / 0x2;
                        else if (_0x20dc7f === 'right')
                            _0x450c52 = 0x0;
                        if (_0x450c52 !== 0x0) {
                            _0xdaff88['save']();
                            _0xdaff88['translate'](_0x3a386f + _0x1cdb4b['MAP']['tileSize'] / 0x2, _0x473689 + _0x1cdb4b['MAP']['tileSize'] / 0x2);
                            _0xdaff88['rotate'](_0x450c52);
                            _0xdaff88['drawImage'](_0x5617d9, _0x1cf363, _0x3368aa, _0x32ffc5, _0x32ffc5, -_0x1cdb4b['MAP']['tileSize'] / 0x2, -_0x1cdb4b['MAP']['tileSize'] / 0x2, _0x1cdb4b['MAP']['tileSize'], _0x1cdb4b['MAP']['tileSize']);
                            _0xdaff88['restore']();
                        } else {
                            _0xdaff88['drawImage'](_0x5617d9, _0x1cf363, _0x3368aa, _0x32ffc5, _0x32ffc5, _0x3a386f, _0x473689, _0x1cdb4b['MAP']['tileSize'], _0x1cdb4b['MAP']['tileSize']);
                        }
                    } else {
                        _0xdaff88['drawImage'](_0x5617d9, _0x1cf363, _0x3368aa, _0x32ffc5, _0x32ffc5, _0x3a386f, _0x473689, _0x1cdb4b['MAP']['tileSize'], _0x1cdb4b['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x42beeb() {
    _0x5617d9['crossOrigin'] = 'Anonymous';
    _0x5617d9['onload'] = () => {
        _0x1cdb4b['MAP']['tilesetCols'] = 0x3;
        if (_0x1cdb4b['MAP']['columns'] > 0x0 && _0x1cdb4b['MAP']['layers'] && _0x1cdb4b['MAP']['layers']['length'] > 0x0) {
            _0x48f7cf();
        }
        _0x327a87();
    };
    _0x5617d9['onerror'] = () => {
        _0x1cdb4b['MAP']['tilesetCols'] = 0x1;
        _0x327a87();
    };
    _0x5617d9['src'] = 'assets/tilesheet.png';
    _0x1f08e3['crossOrigin'] = 'Anonymous';
    _0x1f08e3['onload'] = _0x327a87;
    _0x1f08e3['onerror'] = () => {
        _0x327a87();
    };
    _0x1f08e3['src'] = 'assets/center.png';
    _0x49a1e9['crossOrigin'] = 'Anonymous';
    _0x49a1e9['onload'] = _0x327a87;
    _0x49a1e9['onerror'] = () => {
        _0x327a87();
    };
    _0x49a1e9['src'] = 'assets/table.png';
}
function _0x327a87() {
    _0x1cdb4b['SYSTEM']['assetsLoaded']++;
    if (_0x1cdb4b['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x1cdb4b['MAP']['columns'] > 0x0 && _0x1cdb4b['MAP']['layers'] && _0x1cdb4b['MAP']['layers']['length'] > 0x0) {
            _0x48f7cf();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x3eaf96();
    }
}
function _0x42a622(_0x310a76, _0x245384) {
    if (!_0x3ffc80 || !_0x59c043)
        return;
    const _0x180982 = _0x310a76 / _0x1cdb4b['SYSTEM']['viewScale'] + _0x1cdb4b['CAMERA']['x'];
    const _0xd743b0 = _0x245384 / _0x1cdb4b['SYSTEM']['viewScale'] + _0x1cdb4b['CAMERA']['y'];
    const _0x3fff2e = Math['floor'](_0x180982 / _0x1cdb4b['MAP']['tileSize']);
    const _0x2be297 = Math['floor'](_0xd743b0 / _0x1cdb4b['MAP']['tileSize']);
    if (_0x3fff2e >= 0x0 && _0x3fff2e < _0x1cdb4b['MAP']['columns'] && _0x2be297 >= 0x0 && _0x2be297 < _0x1cdb4b['MAP']['rows'])
        _0x59c043['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x1cdb4b['EDITOR']['selectedLayer'],
            'col': _0x3fff2e,
            'row': _0x2be297,
            'gid': _0x1cdb4b['EDITOR']['selectedTileGid']
        }));
}
function _0x39598d() {
    const _0x2dc05d = document['getElementById']('palette');
    if (!_0x2dc05d || _0x2dc05d['children']['length'] > 0x0)
        return;
    const _0x3f0564 = 0x40;
    const _0x69af66 = _0x5617d9;
    const _0x314e05 = document['createElement']('div');
    _0x314e05['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x5a3b50 = document['createElement']('canvas');
    _0x5a3b50['width'] = 0xc0;
    _0x5a3b50['height'] = 0xa0;
    _0x5a3b50['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x314e05['appendChild'](_0x5a3b50);
    const _0x3d003e = document['createElement']('div');
    _0x3d003e['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x314e05['appendChild'](_0x3d003e);
    let _0x2393c2 = 0x0, _0x57a705 = 0x0;
    let _0x4231cc = ![], _0x297113 = 0x0, _0xe9bdb3 = 0x0, _0x504391 = 0x0, _0x1f4f59 = 0x0;
    function _0x114b98() {
        const _0x40c83b = _0x5a3b50['getContext']('2d');
        _0x40c83b['clearRect'](0x0, 0x0, _0x5a3b50['width'], _0x5a3b50['height']);
        _0x40c83b['imageSmoothingEnabled'] = ![];
        if (_0x69af66['complete'] && _0x69af66['naturalWidth'] > 0x0) {
            _0x40c83b['drawImage'](_0x69af66, _0x2393c2, _0x57a705, _0x5a3b50['width'], _0x5a3b50['height'], 0x0, 0x0, _0x5a3b50['width'], _0x5a3b50['height']);
        }
        _0x40c83b['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x40c83b['lineWidth'] = 0x1;
        const _0x5bd8fc = Math['floor'](_0x2393c2 / _0x3f0564);
        const _0x2493e6 = Math['floor'](_0x57a705 / _0x3f0564);
        for (let _0xe6da5c = _0x5bd8fc; _0xe6da5c <= _0x5bd8fc + Math['ceil'](_0x5a3b50['width'] / _0x3f0564) + 0x1; _0xe6da5c++) {
            const _0x1ad880 = _0xe6da5c * _0x3f0564 - _0x2393c2;
            _0x40c83b['beginPath']();
            _0x40c83b['moveTo'](_0x1ad880, 0x0);
            _0x40c83b['lineTo'](_0x1ad880, _0x5a3b50['height']);
            _0x40c83b['stroke']();
        }
        for (let _0x460c8e = _0x2493e6; _0x460c8e <= _0x2493e6 + Math['ceil'](_0x5a3b50['height'] / _0x3f0564) + 0x1; _0x460c8e++) {
            const _0x248020 = _0x460c8e * _0x3f0564 - _0x57a705;
            _0x40c83b['beginPath']();
            _0x40c83b['moveTo'](0x0, _0x248020);
            _0x40c83b['lineTo'](_0x5a3b50['width'], _0x248020);
            _0x40c83b['stroke']();
        }
    }
    function _0x25d17a() {
        const _0xe46be7 = Math['max'](0x1, Math['ceil'](_0x69af66['naturalWidth'] / _0x3f0564));
        const _0x14f26c = _0x1cdb4b['EDITOR']['selectedTileGid'];
        if (_0x14f26c <= 0x0) {
            _0x3d003e['style']['display'] = 'none';
            return;
        }
        const _0x6b21e4 = _0x14f26c - 0x1;
        const _0x5caad1 = _0x6b21e4 % _0xe46be7;
        const _0x6754c8 = Math['floor'](_0x6b21e4 / _0xe46be7);
        const _0xbffbdc = _0x5caad1 * _0x3f0564 - _0x2393c2;
        const _0x349318 = _0x6754c8 * _0x3f0564 - _0x57a705;
        _0x3d003e['style']['display'] = 'block';
        _0x3d003e['style']['left'] = _0xbffbdc + 'px';
        _0x3d003e['style']['top'] = _0x349318 + 'px';
    }
    _0x69af66['onload'] = () => {
        _0x114b98();
        _0x25d17a();
    };
    if (_0x69af66['complete'] && _0x69af66['naturalWidth'] > 0x0) {
        _0x114b98();
        _0x25d17a();
    }
    _0x314e05['addEventListener']('mousedown', _0xa00251 => {
        if (_0xa00251['button'] === 0x0) {
            _0x4231cc = !![];
            _0x297113 = _0xa00251['clientX'];
            _0xe9bdb3 = _0xa00251['clientY'];
            _0x504391 = _0x2393c2;
            _0x1f4f59 = _0x57a705;
            _0x314e05['style']['cursor'] = 'grabbing';
            _0xa00251['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x476fcc => {
        if (!_0x4231cc)
            return;
        const _0x2810db = _0x297113 - _0x476fcc['clientX'];
        const _0x2725d9 = _0xe9bdb3 - _0x476fcc['clientY'];
        const _0x533830 = Math['max'](0x0, _0x69af66['naturalWidth'] - _0x5a3b50['width']);
        const _0x3eee2e = Math['max'](0x0, _0x69af66['naturalHeight'] - _0x5a3b50['height']);
        _0x2393c2 = Math['max'](0x0, Math['min'](_0x533830, _0x504391 + _0x2810db));
        _0x57a705 = Math['max'](0x0, Math['min'](_0x3eee2e, _0x1f4f59 + _0x2725d9));
        _0x114b98();
        _0x25d17a();
    });
    window['addEventListener']('mouseup', _0x18b5fc => {
        if (_0x4231cc) {
            _0x4231cc = ![];
            _0x314e05['style']['cursor'] = 'grab';
        }
    });
    _0x314e05['addEventListener']('click', _0x2e2896 => {
        const _0x14d5c9 = _0x314e05['getBoundingClientRect']();
        const _0x53599f = _0x2e2896['clientX'] - _0x14d5c9['left'] + _0x2393c2;
        const _0x40bc47 = _0x2e2896['clientY'] - _0x14d5c9['top'] + _0x57a705;
        const _0x323ed9 = Math['max'](0x1, Math['ceil'](_0x69af66['naturalWidth'] / _0x3f0564));
        const _0x54e846 = Math['floor'](_0x53599f / _0x3f0564);
        const _0x24137c = Math['floor'](_0x40bc47 / _0x3f0564);
        const _0x54d4ea = _0x24137c * _0x323ed9 + _0x54e846 + 0x1;
        _0x1cdb4b['EDITOR']['selectedTileGid'] = _0x54d4ea;
        _0x25d17a();
    });
    _0x2dc05d['appendChild'](_0x314e05);
    const _0x4a15d0 = document['createElement']('div');
    _0x4a15d0['className'] = 'tile-btn\x20eraser-btn';
    _0x4a15d0['title'] = 'Eraser\x20(gid\x200)';
    _0x4a15d0['onclick'] = () => {
        _0x1cdb4b['EDITOR']['selectedTileGid'] = 0x0;
        _0x3d003e['style']['display'] = 'none';
    };
    _0x2dc05d['appendChild'](_0x4a15d0);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x1cdb4b['EDITOR']['enabled'] = !_0x1cdb4b['EDITOR']['enabled'];
        const _0x33fc4d = document['getElementById']('editor-tools');
        if (_0x1cdb4b['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x33fc4d['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x33fc4d['style']['display'] = 'none';
        }
    });
    const _0x394e5b = document['getElementById']('start-game-btn');
    if (_0x394e5b) {
        _0x394e5b['addEventListener']('click', () => {
            if (_0x59c043)
                _0x59c043['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x4a0f28 = document['getElementById']('rolelist-toggle-btn');
    if (_0x4a0f28) {
        let _0x5024fc = 'subalignments';
        _0x4a0f28['addEventListener']('click', () => {
            if (_0x5024fc === 'subalignments')
                _0x5024fc = 'precise';
            else if (_0x5024fc === 'precise')
                _0x5024fc = 'off';
            else
                _0x5024fc = 'subalignments';
            _0x4a0f28['innerText'] = 'Role\x20List:\x20' + _0x5024fc['charAt'](0x0)['toUpperCase']() + _0x5024fc['slice'](0x1);
            if (_0x59c043)
                _0x59c043['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x5024fc
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x2700b4 => {
        if (_0x2700b4['id'] === 'editor-toggle-btn' || _0x2700b4['id'] === 'start-game-btn' || _0x2700b4['id'] === 'rolelist-toggle-btn')
            return;
        _0x2700b4['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x1c8740 => _0x1c8740['classList']['remove']('active'));
            _0x2700b4['classList']['add']('active');
            _0x1cdb4b['EDITOR']['selectedLayer'] = _0x2700b4['dataset']['layer'];
        });
    });
}
function _0x1428a2(_0xa32cf1) {
    if (_0x59c043)
        _0x59c043['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0xa32cf1
        }));
}
function _0x5cc938(_0x43ce52) {
    if (_0x59c043)
        _0x59c043['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x43ce52
        }));
}
function _0x28c73f(_0x3c6625, _0x37329e, _0x398c32, _0x199d0b) {
    const _0x4f59be = document['getElementById']('admin-panel');
    if (_0x4f59be)
        _0x4f59be['remove']();
    if (_0x4f59be && _0x4f59be['dataset']['target'] === String(_0x3c6625))
        return;
    const _0x2cb797 = document['createElement']('div');
    _0x2cb797['id'] = 'admin-panel';
    _0x2cb797['dataset']['target'] = String(_0x3c6625);
    _0x2cb797['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x380f45 = document['createElement']('div');
    _0x380f45['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x380f45['textContent'] = _0x37329e;
    _0x2cb797['appendChild'](_0x380f45);
    const _0xfa60c7 = document['createElement']('button');
    _0xfa60c7['textContent'] = 'Kick';
    _0xfa60c7['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0xfa60c7['onmouseenter'] = () => _0xfa60c7['style']['background'] = 'rgba(255,255,255,0.1)';
    _0xfa60c7['onmouseleave'] = () => _0xfa60c7['style']['background'] = 'transparent';
    _0xfa60c7['onclick'] = () => {
        _0x1428a2(_0x3c6625);
        _0x2cb797['remove']();
    };
    _0x2cb797['appendChild'](_0xfa60c7);
    const _0x1cdb82 = document['createElement']('button');
    _0x1cdb82['textContent'] = 'Ban';
    _0x1cdb82['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x1cdb82['onmouseenter'] = () => _0x1cdb82['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x1cdb82['onmouseleave'] = () => _0x1cdb82['style']['background'] = 'transparent';
    _0x1cdb82['onclick'] = () => {
        _0x5cc938(_0x3c6625);
        _0x2cb797['remove']();
    };
    _0x2cb797['appendChild'](_0x1cdb82);
    document['body']['appendChild'](_0x2cb797);
    const _0x4e9a23 = _0x2cb797['offsetWidth'] || 0x91;
    const _0x5a650a = _0x2cb797['offsetHeight'] || 0x50;
    let _0x5e0763 = _0x398c32 - _0x4e9a23;
    let _0x57df42 = _0x199d0b;
    if (_0x5e0763 < 0x4)
        _0x5e0763 = _0x398c32;
    if (_0x57df42 + _0x5a650a > window['innerHeight'] - 0x4)
        _0x57df42 = window['innerHeight'] - _0x5a650a - 0x4;
    _0x2cb797['style']['left'] = _0x5e0763 + 'px';
    _0x2cb797['style']['top'] = _0x57df42 + 'px';
    const _0x3e39b8 = _0x431e1b => {
        if (!_0x2cb797['contains'](_0x431e1b['target'])) {
            _0x2cb797['remove']();
            document['removeEventListener']('mousedown', _0x3e39b8);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x3e39b8), 0x0);
}
function _0x5e7c71() {
    const _0x155041 = document['getElementById']('leaderboard-list');
    _0x155041['innerHTML'] = '';
    const _0x247fed = document['createElement']('div');
    _0x247fed['className'] = 'leaderboard-entry';
    const _0x3dc866 = document['createElement']('span');
    _0x3dc866['textContent'] = _0x7f9760 + (_0x3ffc80 ? '\x20[🗝️]' : '');
    if (_0x476fb4['has'](_0xa2c3d) && !_0x3f99ad['isDead']) {
        _0x3dc866['style']['color'] = '#cc88ff';
    }
    _0x247fed['appendChild'](_0x3dc866);
    _0x155041['appendChild'](_0x247fed);
    for (const _0x37e79a in _0x41c578) {
        const _0x2dac97 = document['createElement']('div');
        _0x2dac97['className'] = 'leaderboard-entry';
        const _0x25b241 = document['createElement']('span');
        _0x25b241['textContent'] = _0x41c578[_0x37e79a]['name'] + (_0x41c578[_0x37e79a]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x476fb4['has'](parseInt(_0x37e79a)) && !_0x41c578[_0x37e79a]['isDead']) {
            _0x25b241['style']['color'] = '#cc88ff';
        }
        _0x2dac97['appendChild'](_0x25b241);
        if (_0x3ffc80 && !_0x41c578[_0x37e79a]['isOwner']) {
            const _0x52b559 = _0x41c578[_0x37e79a]['id'];
            const _0x16358d = _0x41c578[_0x37e79a]['name'];
            _0x2dac97['style']['cursor'] = 'context-menu';
            _0x2dac97['addEventListener']('contextmenu', _0x56c694 => {
                _0x56c694['preventDefault']();
                _0x56c694['stopPropagation']();
                _0x28c73f(_0x52b559, _0x16358d, _0x56c694['clientX'], _0x56c694['clientY']);
            });
        }
        _0x155041['appendChild'](_0x2dac97);
    }
}
window['addEventListener']('resize', _0x3eaf96);
function _0x3eaf96() {
    _0x85660e['width'] = window['innerWidth'];
    _0x85660e['height'] = window['innerHeight'];
    _0x1cdb4b['SYSTEM']['viewScale'] = Math['max'](_0x85660e['width'] / _0x3c8596, _0x85660e['height'] / _0x2dd09d);
    _0x1cdb4b['CAMERA']['width'] = _0x85660e['width'] / _0x1cdb4b['SYSTEM']['viewScale'];
    _0x1cdb4b['CAMERA']['height'] = _0x85660e['height'] / _0x1cdb4b['SYSTEM']['viewScale'];
    _0x2a2233['imageSmoothingEnabled'] = ![];
}
function _0x1dd70b(_0x27c3d8) {
    if (_0x27c3d8['ctrlKey'] || _0x27c3d8['metaKey']) {
        if (_0x27c3d8['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x27c3d8['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x27c3d8['code'])) {
            _0x27c3d8['preventDefault']();
            _0x27c3d8['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x1dd70b, { 'passive': ![] });
window['addEventListener']('keydown', _0x1dd70b, { 'passive': ![] });
window['addEventListener']('keydown', _0x4a4bb5 => {
    const _0x30d779 = _0x4a4bb5['key']['toLowerCase']();
    if (_0x30d779 === 'tab') {
        _0x4a4bb5['preventDefault']();
        const _0x1eef51 = document['getElementById']('will-ui');
        const _0x491271 = document['getElementById']('will-input');
        if (_0x1eef51['style']['display'] === 'flex') {
            _0x1eef51['style']['display'] = 'none';
            if (_0x1cdb4b['GAME_STATE'] !== 'NIGHT' && _0x59c043)
                _0x59c043['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x491271['value']
                }));
            _0x491271['blur']();
        } else {
            if (_0x1cdb4b['GAME_STATE'] === 'NIGHT') {
                _0x13a991('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x1eef51['style']['display'] = 'flex';
            _0x491271['focus']();
            for (let _0x5a327e in _0x1cdb4b['INPUTS']['keys'])
                _0x1cdb4b['INPUTS']['keys'][_0x5a327e] = ![];
        }
        return;
    }
    if (_0x4a4bb5['key'] === 'Enter') {
        if (_0x36fd65) {
            const _0x4437ef = document['getElementById']('play-btn');
            if (_0x4437ef)
                _0x4437ef['click']();
            return;
        }
        if (!_0x59c043 || _0x59c043['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x14a6af = document['getElementById']('chat-ui');
        const _0x587a62 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x587a62) {
            const _0x54a4dd = _0x587a62['value']['trim']();
            if (_0x54a4dd['length'] > 0x0) {
                _0x59c043['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x54a4dd
                }));
            }
            _0x587a62['value'] = '';
            _0x14a6af['style']['display'] = 'none';
            _0x587a62['blur']();
        } else {
            _0x14a6af['style']['display'] = 'block';
            _0x587a62['focus']();
            for (let _0x1fcf8f in _0x1cdb4b['INPUTS']['keys'])
                _0x1cdb4b['INPUTS']['keys'][_0x1fcf8f] = ![];
        }
        _0x4a4bb5['preventDefault']();
        return;
    }
    if (_0x4a4bb5['key'] === 'Escape') {
        const _0x3cb4d9 = document['getElementById']('role-index-modal');
        if (_0x3cb4d9 && _0x3cb4d9['style']['display'] === 'flex') {
            _0x3cb4d9['style']['display'] = 'none';
            return;
        }
        const _0x6f6fe7 = document['getElementById']('guide-ui');
        if (_0x6f6fe7 && _0x6f6fe7['style']['display'] === 'flex') {
            _0x6f6fe7['style']['display'] = 'none';
            return;
        }
        const _0x57fc2a = document['getElementById']('ability-ui');
        if (_0x57fc2a && _0x57fc2a['style']['display'] === 'block') {
            _0x57fc2a['style']['display'] = 'none';
            return;
        }
        const _0x14dea1 = document['getElementById']('settings-panel');
        if (_0x14dea1 && _0x14dea1['style']['display'] === 'block') {
            _0x14dea1['style']['display'] = 'none';
            return;
        }
        const _0x14deb9 = document['getElementById']('mayor-confirm-dialog');
        if (_0x14deb9 && _0x14deb9['style']['display'] === 'flex') {
            _0x14deb9['style']['display'] = 'none';
            return;
        }
        const _0x3b731f = document['getElementById']('target-chooser-ui');
        if (_0x3b731f && _0x3b731f['style']['display'] === 'flex') {
            _0x3b731f['style']['display'] = 'none';
            return;
        }
        const _0x1205fe = document['getElementById']('chat-ui');
        const _0x4ec452 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x4ec452) {
            _0x4ec452['value'] = '';
            _0x1205fe['style']['display'] = 'none';
            _0x4ec452['blur']();
            _0x4a4bb5['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x1cdb4b['INPUTS']['keys']['hasOwnProperty'](_0x30d779))
            _0x1cdb4b['INPUTS']['keys'][_0x30d779] = !![];
        if (!_0x59c043 || _0x59c043['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x30d779 === 'h' && !_0x4a4bb5['repeat']) {
            const _0x526505 = document['getElementById']('guide-ui');
            if (_0x526505) {
                _0x526505['style']['display'] = _0x526505['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x30d779 === 't' && !_0x4a4bb5['repeat']) {
            if (_0x3f99ad['isDead'])
                return;
            if (_0x289ac2 === 'Mayor') {
                if (_0x476fb4['has'](_0xa2c3d)) {
                    _0x13a991('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x340480 = document['getElementById']('mayor-confirm-dialog');
                if (_0x340480)
                    _0x340480['style']['display'] = 'flex';
                return;
            }
            if (_0x1cdb4b['GAME_STATE'] === 'NIGHT') {
                if (!_0x1cdb4b['NIGHT_ABILITY_OPEN']) {
                    _0x13a991('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x52d6eb = document['getElementById']('ability-ui');
                if (_0x52d6eb) {
                    if (_0x52d6eb['style']['display'] === 'block') {
                        _0x52d6eb['style']['display'] = 'none';
                    } else {
                        _0x2d460d();
                        _0x52d6eb['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1cdb4b['GAME_STATE'] === 'DAY_DISCUSS' || _0x1cdb4b['GAME_STATE'] === 'DAY_VOTE') {
                _0x13a991('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x30d779 === 'e' && !_0x3f99ad['isDead']) {
            const _0x4030f1 = Date['now']();
            if (!window['_lastDoorSend'] || _0x4030f1 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x4030f1;
                _0x59c043['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x14d7a4 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x207dae = _0x14d7a4['key']['toLowerCase']();
        if (_0x1cdb4b['INPUTS']['keys']['hasOwnProperty'](_0x207dae))
            _0x1cdb4b['INPUTS']['keys'][_0x207dae] = ![];
    }
});
window['addEventListener']('mousemove', _0x40cfaa => {
    _0x1cdb4b['INPUTS']['mouseX'] = _0x40cfaa['clientX'];
    _0x1cdb4b['INPUTS']['mouseY'] = _0x40cfaa['clientY'];
    if (_0x1cdb4b['INPUTS']['isMouseDown'] && _0x1cdb4b['EDITOR']['enabled']) {
        _0x42a622(_0x40cfaa['clientX'], _0x40cfaa['clientY']);
    }
});
window['addEventListener']('mousedown', _0x3d6045 => {
    if (_0x3d6045['target']['closest']('#editor-ui') || _0x3d6045['target']['closest']('#leaderboard-ui') || _0x3d6045['target']['closest']('#role-index-btn-wrap') || _0x3d6045['target']['closest']('#role-index-modal') || _0x3d6045['target']['closest']('#chat-log-ui') || _0x3d6045['target']['closest']('#target-chooser-ui') || _0x3d6045['target']['closest']('#guide-ui') || _0x3d6045['target']['closest']('#role-list-ui') || _0x3d6045['target']['closest']('#ability-ui') || _0x3d6045['target']['closest']('#settings-panel') || _0x3d6045['target']['closest']('#mayor-confirm-dialog') || _0x3d6045['target']['closest']('#mobile-action-bar') || _0x3d6045['target']['closest']('#mobile-top-bar') || _0x3d6045['target']['closest']('#mobile-joystick-zone') || _0x3d6045['target']['closest']('#mobile-chat-overlay') || _0x3d6045['target']['closest']('#will-ui') || _0x3d6045['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x3d6045['button'] === 0x0) {
        _0x1cdb4b['INPUTS']['isMouseDown'] = !![];
        if (_0x1cdb4b['EDITOR']['enabled'])
            _0x42a622(_0x3d6045['clientX'], _0x3d6045['clientY']);
    }
});
window['addEventListener']('mouseup', _0x152f50 => {
    _0x1cdb4b['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x4f5c04 => {
    if (_0x4f5c04['target']['closest']('#settings-btn'))
        return;
    const _0x350b29 = document['getElementById']('leaderboard-list');
    const _0x563cf7 = document['getElementById']('leaderboard-toggle');
    if (_0x350b29['style']['display'] === 'none') {
        _0x350b29['style']['display'] = 'flex';
        _0x563cf7['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x350b29['style']['display'] = 'none';
        _0x563cf7['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x440aca = document['getElementById']('close-target-btn');
if (_0x440aca) {
    _0x440aca['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x99c12a = document['getElementById']('close-guide-btn');
if (_0x99c12a) {
    _0x99c12a['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x57f6cc = document['getElementById']('role-list-header');
if (_0x57f6cc) {
    _0x57f6cc['addEventListener']('click', () => {
        const _0x4d358a = document['getElementById']('role-list-items');
        const _0x43cbbe = document['getElementById']('role-list-toggle');
        if (_0x4d358a['style']['display'] === 'none') {
            _0x4d358a['style']['display'] = 'flex';
            _0x43cbbe['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x4d358a['style']['display'] = 'none';
            _0x43cbbe['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0xe56f7() {
    const _0x37d164 = document['getElementById']('mobile-joystick-zone');
    const _0x3f6634 = document['getElementById']('mobile-joystick-base');
    const _0x4ad613 = document['getElementById']('mobile-joystick-knob');
    if (_0x37d164 && _0x3f6634 && _0x4ad613) {
        const _0x2d2dbd = 0x3e;
        const _0x47f7e5 = (_0x3e8397, _0x2153f0) => {
            const _0x3b87f9 = _0x3f6634['getBoundingClientRect']();
            const _0x101404 = _0x3b87f9['left'] + _0x3b87f9['width'] / 0x2;
            const _0x5c4f63 = _0x3b87f9['top'] + _0x3b87f9['height'] / 0x2;
            const _0x702ab8 = _0x3e8397 - _0x101404;
            const _0x41781a = _0x2153f0 - _0x5c4f63;
            const _0x286d9f = Math['hypot'](_0x702ab8, _0x41781a);
            if (_0x286d9f === 0x0) {
                _0x2ec8c7 = 0x0;
                _0x33d77a = 0x0;
                _0x723335 = ![];
                _0x4ad613['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x38bcb5 = Math['min'](_0x286d9f, _0x2d2dbd);
            const _0x1441d2 = _0x702ab8 / _0x286d9f * _0x38bcb5;
            const _0x30736c = _0x41781a / _0x286d9f * _0x38bcb5;
            _0x2ec8c7 = _0x1441d2 / _0x2d2dbd;
            _0x33d77a = _0x30736c / _0x2d2dbd;
            _0x723335 = _0x286d9f >= _0x2d2dbd * 0.75;
            _0x4ad613['style']['transform'] = 'translate(' + _0x1441d2 + 'px,\x20' + _0x30736c + 'px)';
        };
        const _0x2c0956 = _0x10c408 => {
            for (let _0x245aa2 = 0x0; _0x245aa2 < _0x10c408['changedTouches']['length']; _0x245aa2++) {
                const _0x4cbe50 = _0x10c408['changedTouches'][_0x245aa2];
                if (_0x3b930b === null) {
                    _0x3b930b = _0x4cbe50['identifier'];
                    _0x4c8d55 = !![];
                    _0x47f7e5(_0x4cbe50['clientX'], _0x4cbe50['clientY']);
                    break;
                }
            }
        };
        const _0x58dc84 = _0x4a9cbd => {
            for (let _0x4ba13c = 0x0; _0x4ba13c < _0x4a9cbd['changedTouches']['length']; _0x4ba13c++) {
                const _0x4da53c = _0x4a9cbd['changedTouches'][_0x4ba13c];
                if (_0x4da53c['identifier'] === _0x3b930b) {
                    _0x47f7e5(_0x4da53c['clientX'], _0x4da53c['clientY']);
                    break;
                }
            }
        };
        const _0xfda9e1 = _0x30c523 => {
            for (let _0x7c2ea = 0x0; _0x7c2ea < _0x30c523['changedTouches']['length']; _0x7c2ea++) {
                const _0x4ffa81 = _0x30c523['changedTouches'][_0x7c2ea];
                if (_0x4ffa81['identifier'] === _0x3b930b) {
                    _0x3b930b = null;
                    _0x4c8d55 = ![];
                    _0x2ec8c7 = 0x0;
                    _0x33d77a = 0x0;
                    _0x723335 = ![];
                    _0x4ad613['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x37d164['addEventListener']('touchstart', _0x5cbd29 => {
            _0x5cbd29['preventDefault']();
            _0x2c0956(_0x5cbd29);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x58dc84, { 'passive': !![] });
        window['addEventListener']('touchend', _0xfda9e1, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0xfda9e1, { 'passive': !![] });
    }
    const _0x3b9bc6 = (_0x22fc03, _0x5a8efc) => {
        const _0x5e5eac = _0x22fc03 / _0x1cdb4b['SYSTEM']['viewScale'];
        const _0x242daa = _0x5a8efc / _0x1cdb4b['SYSTEM']['viewScale'];
        const _0x181020 = _0x3f99ad['x'] - _0x1cdb4b['CAMERA']['x'] + _0x3f99ad['width'] / 0x2;
        const _0x3b3969 = _0x3f99ad['y'] - _0x1cdb4b['CAMERA']['y'] + _0x3f99ad['height'] / 0x2;
        _0x3d7aff = Math['atan2'](_0x242daa - _0x3b3969, _0x5e5eac - _0x181020);
        _0x4a9214 = !![];
        _0x1cdb4b['INPUTS']['mouseX'] = _0x22fc03;
        _0x1cdb4b['INPUTS']['mouseY'] = _0x5a8efc;
    };
    _0x85660e['addEventListener']('touchstart', _0x439ab1 => {
        if (_0x36fd65)
            return;
        for (let _0x350e12 = 0x0; _0x350e12 < _0x439ab1['changedTouches']['length']; _0x350e12++) {
            const _0x2e0058 = _0x439ab1['changedTouches'][_0x350e12];
            if (_0x2e0058['identifier'] !== _0x3b930b && _0xf2d763 === null) {
                _0xf2d763 = _0x2e0058['identifier'];
                _0x3b9bc6(_0x2e0058['clientX'], _0x2e0058['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x85660e['addEventListener']('touchmove', _0x4725f6 => {
        if (_0x36fd65)
            return;
        for (let _0x140104 = 0x0; _0x140104 < _0x4725f6['changedTouches']['length']; _0x140104++) {
            const _0x5453c0 = _0x4725f6['changedTouches'][_0x140104];
            if (_0x5453c0['identifier'] === _0xf2d763) {
                _0x3b9bc6(_0x5453c0['clientX'], _0x5453c0['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x270c81 = _0x2e32f4 => {
        for (let _0x58dfbd = 0x0; _0x58dfbd < _0x2e32f4['changedTouches']['length']; _0x58dfbd++) {
            const _0x294a49 = _0x2e32f4['changedTouches'][_0x58dfbd];
            if (_0x294a49['identifier'] === _0xf2d763) {
                _0xf2d763 = null;
                _0x4a9214 = ![];
                break;
            }
        }
    };
    _0x85660e['addEventListener']('touchend', _0x270c81, { 'passive': !![] });
    _0x85660e['addEventListener']('touchcancel', _0x270c81, { 'passive': !![] });
    const _0xd8c8f8 = document['getElementById']('mob-sprint-btn');
    if (_0xd8c8f8) {
        _0xd8c8f8['addEventListener']('click', _0x50b817 => {
            _0x50b817['stopPropagation']();
            _0x3cd8b1 = !_0x3cd8b1;
            _0xd8c8f8['classList']['toggle']('active', _0x3cd8b1);
        });
    }
    const _0x5cb7ee = document['getElementById']('mob-interact-btn');
    if (_0x5cb7ee) {
        _0x5cb7ee['addEventListener']('click', _0x4d69c7 => {
            _0x4d69c7['stopPropagation']();
            if (!_0x3f99ad['isDead']) {
                const _0x7cd66d = Date['now']();
                if (!window['_lastDoorSend'] || _0x7cd66d - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x7cd66d;
                    if (_0x59c043 && _0x59c043['readyState'] === WebSocket['OPEN'])
                        _0x59c043['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x3c32d5 = document['getElementById']('mob-ability-btn');
    if (_0x3c32d5) {
        _0x3c32d5['addEventListener']('click', _0x2e136f => {
            _0x2e136f['stopPropagation']();
            if (_0x3f99ad['isDead'])
                return;
            if (_0x289ac2 === 'Mayor') {
                if (_0x476fb4['has'](_0xa2c3d)) {
                    _0x13a991('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x18fb48 = document['getElementById']('mayor-confirm-dialog');
                if (_0x18fb48)
                    _0x18fb48['style']['display'] = 'flex';
                return;
            }
            if (_0x1cdb4b['GAME_STATE'] === 'NIGHT') {
                if (!_0x1cdb4b['NIGHT_ABILITY_OPEN']) {
                    _0x13a991('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x2c3b44 = document['getElementById']('ability-ui');
                if (_0x2c3b44) {
                    if (_0x2c3b44['style']['display'] === 'block') {
                        _0x2c3b44['style']['display'] = 'none';
                    } else {
                        _0x2d460d();
                        _0x2c3b44['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1cdb4b['GAME_STATE'] === 'DAY_DISCUSS' || _0x1cdb4b['GAME_STATE'] === 'DAY_VOTE') {
                _0x13a991('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x2dfe18 = document['getElementById']('mob-will-btn');
    const _0x5cf0b6 = document['getElementById']('will-ui');
    const _0x3084be = document['getElementById']('will-input');
    const _0x26f545 = document['getElementById']('close-will-btn');
    const _0xb53a09 = () => {
        if (!_0x5cf0b6)
            return;
        if (_0x5cf0b6['style']['display'] === 'flex') {
            _0x5cf0b6['style']['display'] = 'none';
            if (_0x1cdb4b['GAME_STATE'] !== 'NIGHT' && _0x59c043 && _0x59c043['readyState'] === WebSocket['OPEN'] && _0x3084be) {
                _0x59c043['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x3084be['value']
                }));
            }
            if (_0x3084be)
                _0x3084be['blur']();
        } else {
            if (_0x1cdb4b['GAME_STATE'] === 'NIGHT') {
                _0x13a991('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x5cf0b6['style']['display'] = 'flex';
            if (_0x3084be)
                _0x3084be['focus']();
        }
    };
    if (_0x2dfe18)
        _0x2dfe18['addEventListener']('click', _0x598039 => {
            _0x598039['stopPropagation']();
            _0xb53a09();
        });
    if (_0x26f545)
        _0x26f545['addEventListener']('click', _0x413ceb => {
            _0x413ceb['stopPropagation']();
            _0xb53a09();
        });
    const _0x303ece = document['getElementById']('mob-chat-btn');
    const _0x56076a = document['getElementById']('mobile-chat-overlay');
    const _0x3a3159 = document['getElementById']('mobile-chat-input');
    const _0xbdeab4 = document['getElementById']('mobile-chat-send');
    const _0x468fa0 = document['getElementById']('mobile-chat-cancel');
    const _0x4a8cef = () => {
        if (!_0x56076a || !_0x3a3159)
            return;
        _0x56076a['style']['display'] = 'flex';
        _0x3a3159['value'] = '';
        _0x3a3159['focus']();
    };
    const _0x5350f9 = () => {
        if (!_0x56076a || !_0x3a3159)
            return;
        _0x56076a['style']['display'] = 'none';
        _0x3a3159['blur']();
    };
    const _0x19958c = () => {
        if (!_0x3a3159)
            return;
        const _0x33b47f = _0x3a3159['value']['trim']();
        if (_0x33b47f['length'] > 0x0 && _0x59c043 && _0x59c043['readyState'] === WebSocket['OPEN']) {
            _0x59c043['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x33b47f
            }));
        }
        _0x3a3159['value'] = '';
        _0x5350f9();
    };
    if (_0x303ece)
        _0x303ece['addEventListener']('click', _0x30d468 => {
            _0x30d468['stopPropagation']();
            _0x4a8cef();
        });
    if (_0xbdeab4)
        _0xbdeab4['addEventListener']('click', _0x3769cb => {
            _0x3769cb['stopPropagation']();
            _0x19958c();
        });
    if (_0x468fa0)
        _0x468fa0['addEventListener']('click', _0x37cd7a => {
            _0x37cd7a['stopPropagation']();
            _0x5350f9();
        });
    if (_0x3a3159) {
        _0x3a3159['addEventListener']('keydown', _0x2152ae => {
            if (_0x2152ae['key'] === 'Enter') {
                _0x2152ae['preventDefault']();
                _0x19958c();
            } else if (_0x2152ae['key'] === 'Escape') {
                _0x5350f9();
            }
        });
    }
    const _0x4a2cc0 = document['getElementById']('mob-top-chat');
    if (_0x4a2cc0)
        _0x4a2cc0['addEventListener']('click', _0x4cc4b6 => {
            _0x4cc4b6['stopPropagation']();
            _0x4a8cef();
        });
    const _0x725fa9 = document['getElementById']('mob-top-will');
    if (_0x725fa9)
        _0x725fa9['addEventListener']('click', _0xfb1461 => {
            _0xfb1461['stopPropagation']();
            _0xb53a09();
        });
    const _0x2631ff = document['getElementById']('mob-top-roles');
    if (_0x2631ff) {
        _0x2631ff['addEventListener']('click', _0x3df693 => {
            _0x3df693['stopPropagation']();
            const _0x8e141a = document['getElementById']('role-list-ui');
            const _0x4fc3c4 = document['getElementById']('leaderboard-ui');
            if (_0x4fc3c4)
                _0x4fc3c4['style']['display'] = 'none';
            if (_0x8e141a)
                _0x8e141a['style']['display'] = _0x8e141a['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x573505 = document['getElementById']('mob-top-players');
    if (_0x573505) {
        _0x573505['addEventListener']('click', _0x329a53 => {
            _0x329a53['stopPropagation']();
            const _0x4a2de1 = document['getElementById']('leaderboard-ui');
            const _0x30b562 = document['getElementById']('role-list-ui');
            if (_0x30b562)
                _0x30b562['style']['display'] = 'none';
            if (_0x4a2de1)
                _0x4a2de1['style']['display'] = _0x4a2de1['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x532459 = document['getElementById']('mob-top-help');
    if (_0x532459) {
        _0x532459['addEventListener']('click', _0x332e88 => {
            _0x332e88['stopPropagation']();
            const _0xf09c53 = document['getElementById']('guide-ui');
            if (_0xf09c53)
                _0xf09c53['style']['display'] = _0xf09c53['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x3e73f9) {
            _0x3e73f9 = !![];
            _0x20db81();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
