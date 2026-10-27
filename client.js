document['addEventListener']('contextmenu', _0x3a3dfd => _0x3a3dfd['preventDefault']());
const _0x501055 = {
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
let _0x12ff55 = '';
function _0xc7e182(_0x1e5dbb, _0x5b2102) {
    const _0x3798c6 = document['getElementById']('role-list-ui');
    const _0x314b37 = document['getElementById']('role-list-items');
    if (!_0x3798c6 || !_0x314b37)
        return;
    if (!_0x5b2102 || _0x5b2102 === 'off' || !_0x1e5dbb || _0x1e5dbb['length'] === 0x0) {
        _0x3798c6['style']['display'] = 'none';
        return;
    }
    const _0x475e5d = _0x5b2102 + '|' + JSON['stringify'](_0x1e5dbb);
    if (_0x475e5d === _0x12ff55)
        return;
    _0x12ff55 = _0x475e5d;
    const _0x2dde15 = document['getElementById']('role-tooltip');
    if (_0x2dde15) {
        _0x2dde15['style']['visibility'] = 'hidden';
        _0x2dde15['style']['opacity'] = '0';
    }
    _0x3798c6['style']['display'] = 'flex';
    _0x314b37['innerHTML'] = '';
    _0x1e5dbb['forEach'](_0x51c82e => {
        const _0x1339a1 = document['createElement']('div');
        _0x1339a1['className'] = 'role-list-entry';
        const _0x1a60b6 = _0x51c82e['name']['includes']('Mafia') || _0x51c82e['name'] === 'Skinwalker';
        _0x1339a1['classList']['add'](_0x1a60b6 ? 'mafia' : 'town');
        if (_0x5b2102 === 'precise' && _0x51c82e['isDead']) {
            _0x1339a1['classList']['remove']('town', 'mafia');
            _0x1339a1['classList']['add']('dead');
            _0x1339a1['innerHTML'] = '<span>' + _0x51c82e['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x413cb = _0x51c82e['count'] !== undefined && _0x51c82e['count'] !== null ? _0x51c82e['count'] + 'x\x20' : '';
            _0x1339a1['innerHTML'] = '<span>' + _0x413cb + _0x51c82e['name'] + '</span>';
        }
        if (_0x5b2102 === 'subalignments' && _0x501055[_0x51c82e['name']]) {
            _0x1339a1['style']['cursor'] = 'pointer';
            _0x1339a1['addEventListener']('mouseenter', () => {
                const _0x37b9ff = document['getElementById']('role-tooltip');
                if (!_0x37b9ff)
                    return;
                const _0x507bde = _0x501055[_0x51c82e['name']]['join'](',\x20');
                _0x37b9ff['innerHTML'] = '';
                const _0xc21055 = document['createElement']('span');
                _0xc21055['style']['color'] = '#ffcc00';
                _0xc21055['textContent'] = _0x51c82e['name'];
                _0x37b9ff['appendChild'](_0xc21055);
                _0x37b9ff['appendChild'](document['createElement']('br'));
                _0x37b9ff['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x507bde));
                const _0x109ece = _0x1339a1['getBoundingClientRect']();
                _0x37b9ff['style']['left'] = _0x109ece['left'] - 0xeb + 'px';
                _0x37b9ff['style']['top'] = _0x109ece['top'] + 'px';
                _0x37b9ff['style']['display'] = 'block';
                _0x37b9ff['style']['visibility'] = 'visible';
                _0x37b9ff['style']['opacity'] = '1';
            });
            _0x1339a1['addEventListener']('mouseleave', () => {
                const _0x1fa223 = document['getElementById']('role-tooltip');
                if (_0x1fa223) {
                    _0x1fa223['style']['display'] = 'none';
                    _0x1fa223['style']['visibility'] = 'hidden';
                    _0x1fa223['style']['opacity'] = '0';
                }
            });
        }
        _0x314b37['appendChild'](_0x1339a1);
    });
}
let _0x4c6e33 = null;
let _0x5870bb = null;
const _0x4e559e = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x503b20 = 'Player???';
let _0x2129c7 = ![];
let _0x543120 = {};
let _0x38e3df = null;
let _0x4667a8 = 0x0;
let _0x17cb83 = 0x0;
let _0x2f812b = new Set();
let _0x564f67 = ![];
let _0x2ce755 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x43263f = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x3b1f37 = ![];
let _0x3138d9 = null;
let _0x2dcd9d = 0x0;
let _0x3eefa9 = 0x0;
let _0x4479d6 = ![];
let _0x5b48ef = ![];
let _0x3f9a43 = 0x0;
let _0x370bd8 = null;
let _0x516a3e = ![];
let _0x3e24fc = 0x0;
let _0x95670c = 0x0;
const _0x3c652f = ((() => {
    const _0x902a02 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x2c05cf = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x523349 = 0x320;
    const _0x2532a7 = {};
    const _0x3536e6 = {};
    let _0x3a5654 = null;
    let _0x443fe7 = _0x2c05cf === 0x0;
    let _0x56b668 = ![];
    for (const [_0xba38ec, _0x37d4bf] of Object['entries'](_0x902a02)) {
        const _0xc581a0 = new Audio(_0x37d4bf);
        _0xc581a0['loop'] = !![];
        _0xc581a0['volume'] = 0x0;
        _0xc581a0['preload'] = 'auto';
        _0x2532a7[_0xba38ec] = _0xc581a0;
        _0x3536e6[_0xba38ec] = null;
    }
    const _0xccc665 = _0x5529a7 => Math['min'](0x1, Math['max'](0x0, _0x5529a7));
    function _0x103271(_0x8d9608) {
        if (_0x3536e6[_0x8d9608] !== null) {
            cancelAnimationFrame(_0x3536e6[_0x8d9608]);
            _0x3536e6[_0x8d9608] = null;
        }
    }
    function _0x432cf3(_0x4b220f, _0x54a29e, _0x7eda3a, _0x136ea8, _0x438457) {
        _0x103271(_0x4b220f);
        const _0x257a06 = _0x2532a7[_0x4b220f];
        const _0x34e849 = performance['now']();
        const _0x4a9ab0 = _0x54526d => {
            const _0x83cb04 = _0xccc665((_0x54526d - _0x34e849) / _0x136ea8);
            const _0x3f691f = _0xccc665(_0x54a29e + (_0x7eda3a - _0x54a29e) * _0x83cb04);
            _0x257a06['volume'] = _0x443fe7 ? 0x0 : _0x3f691f;
            if (_0x83cb04 < 0x1) {
                _0x3536e6[_0x4b220f] = requestAnimationFrame(_0x4a9ab0);
            } else {
                _0x3536e6[_0x4b220f] = null;
                _0x257a06['volume'] = _0x443fe7 ? 0x0 : _0xccc665(_0x7eda3a);
                if (_0x438457)
                    _0x438457();
            }
        };
        _0x3536e6[_0x4b220f] = requestAnimationFrame(_0x4a9ab0);
    }
    function _0x20434c(_0x151077) {
        const _0x11a110 = _0x151077['play']();
        if (_0x11a110 && _0x11a110['catch']) {
            _0x11a110['catch'](() => {
                if (!_0x56b668) {
                    const _0x3a7af8 = () => {
                        _0x56b668 = !![];
                        _0x151077['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x3a7af8);
                        document['removeEventListener']('keydown', _0x3a7af8);
                        document['removeEventListener']('touchstart', _0x3a7af8);
                    };
                    document['addEventListener']('click', _0x3a7af8, { 'once': !![] });
                    document['addEventListener']('keydown', _0x3a7af8, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x3a7af8, { 'once': !![] });
                }
            });
        }
    }
    function _0x33891c(_0x3347c7) {
        if (!_0x902a02[_0x3347c7])
            return;
        if (_0x3a5654 === _0x3347c7)
            return;
        const _0x446ea1 = _0x3a5654;
        _0x3a5654 = _0x3347c7;
        const _0x2a774f = _0x2532a7[_0x3347c7];
        _0x103271(_0x3347c7);
        _0x2a774f['currentTime'] = 0x0;
        _0x2a774f['volume'] = 0x0;
        _0x20434c(_0x2a774f);
        _0x432cf3(_0x3347c7, 0x0, _0x2c05cf, _0x523349);
        if (_0x446ea1 && _0x2532a7[_0x446ea1]) {
            const _0x31316e = _0x446ea1;
            const _0xc24fff = _0x2532a7[_0x31316e];
            const _0x304542 = _0xccc665(_0xc24fff['volume']);
            _0x432cf3(_0x31316e, _0x304542, 0x0, _0x523349, () => {
                _0xc24fff['pause']();
                _0xc24fff['currentTime'] = 0x0;
            });
        }
    }
    function _0x29ede7(_0x261c42) {
        _0x2c05cf = _0xccc665(_0x261c42);
        localStorage['setItem']('musicVolume', String(_0x2c05cf));
        if (!_0x443fe7 && _0x3a5654 && _0x3536e6[_0x3a5654] === null) {
            _0x2532a7[_0x3a5654]['volume'] = _0x2c05cf;
        }
    }
    function _0x135ed9() {
        return _0x2c05cf;
    }
    function _0xa03696(_0x435dab) {
        _0x443fe7 = _0x435dab;
        for (const _0x41755a of Object['keys'](_0x2532a7)) {
            if (_0x3536e6[_0x41755a] === null) {
                _0x2532a7[_0x41755a]['volume'] = _0x435dab || _0x41755a !== _0x3a5654 ? 0x0 : _0x2c05cf;
            }
        }
    }
    function _0x39c23a() {
        return _0x443fe7;
    }
    function _0x1e9a0d(_0xdf35cc) {
        if (_0xdf35cc === 'DAY_DISCUSS')
            return 'discussion';
        if (_0xdf35cc === 'DAY_VOTE')
            return 'voting';
        if (_0xdf35cc === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x598a1e(_0x3470e9) {
        _0x33891c(_0x1e9a0d(_0x3470e9));
    }
    function _0x3200ea(_0x5bb09a) {
        _0x33891c(_0x5bb09a);
    }
    return {
        'play': _0x33891c,
        'onStateChange': _0x598a1e,
        'onSoundEvent': _0x3200ea,
        'setVolume': _0x29ede7,
        'getVolume': _0x135ed9,
        'setMuted': _0xa03696,
        'isMuted': _0x39c23a
    };
})());
const _0x2749fe = ((() => {
    const _0x5ea419 = 0x258;
    const _0x356c40 = 0xb4;
    const _0x4e7930 = 0x708;
    const _0x3b4acc = 0x140;
    const _0x5254d7 = 0.18;
    const _0x5156b9 = 0.95;
    const _0xfcb5de = new Audio('audio/heartbeat.mp3');
    _0xfcb5de['loop'] = ![];
    _0xfcb5de['preload'] = 'auto';
    _0xfcb5de['volume'] = 0x0;
    let _0x401b92 = 0x0;
    let _0x4a6496 = Infinity;
    function _0x3c2a39(_0x258f99, _0x18089a, _0x4e30fd) {
        return Math['min'](_0x4e30fd, Math['max'](_0x18089a, _0x258f99));
    }
    function _0x4dbf12(_0x22ce39, _0x1c913e, _0x16ef31) {
        return _0x22ce39 + (_0x1c913e - _0x22ce39) * _0x16ef31;
    }
    function _0x51ec62(_0xbc422c) {
        if (_0x2db053['GAME_STATE'] !== 'NIGHT' || _0x5d0144['isDead'] || _0x38e3df === 'Skinwalker') {
            _0x4a6496 = Infinity;
            return;
        }
        const _0x64ad69 = _0x5d0144['x'] + 22.5;
        const _0x862f08 = _0x5d0144['y'] + 22.5;
        let _0x1ab324 = Infinity;
        for (const _0x3ab283 in _0x543120) {
            const _0x2f6973 = _0x543120[_0x3ab283];
            if (!_0x2f6973['isDark'] || _0x2f6973['isDead'])
                continue;
            const _0x14ce17 = _0x2f6973['renderX'] + 22.5 - _0x64ad69;
            const _0x116105 = _0x2f6973['renderY'] + 22.5 - _0x862f08;
            const _0x3fa204 = Math['sqrt'](_0x14ce17 * _0x14ce17 + _0x116105 * _0x116105);
            if (_0x3fa204 < _0x1ab324)
                _0x1ab324 = _0x3fa204;
        }
        _0x4a6496 = _0x1ab324;
        if (_0x1ab324 > _0x5ea419)
            return;
        const _0x121fc9 = 0x1 - _0x3c2a39((_0x1ab324 - _0x356c40) / (_0x5ea419 - _0x356c40), 0x0, 0x1);
        const _0x359fcf = _0x4dbf12(_0x4e7930, _0x3b4acc, _0x121fc9);
        const _0x2a6552 = _0x4dbf12(_0x5254d7, _0x5156b9, _0x121fc9);
        if (_0xbc422c >= _0x401b92) {
            _0xfcb5de['currentTime'] = 0x0;
            _0xfcb5de['volume'] = _0x3c652f['isMuted']() ? 0x0 : _0x3c2a39(_0x2a6552 * _0x3c652f['getVolume']() / 0.7, 0x0, 0x1);
            _0xfcb5de['play']()['catch'](() => {
            });
            _0x401b92 = _0xbc422c + _0x359fcf;
        }
    }
    return { 'tick': _0x51ec62 };
})());
function _0x5e35d4() {
    const _0x4c2945 = document['getElementById']('mob-ability-btn');
    if (!_0x4c2945)
        return;
    const _0x575ccc = _0x2db053['GAME_STATE'] === 'NIGHT' && !_0x5d0144['isDead'];
    const _0x1bda80 = _0x38e3df === 'Mayor' && !_0x2f812b['has'](_0x5870bb) && !_0x5d0144['isDead'];
    if (_0x575ccc || _0x1bda80) {
        _0x4c2945['style']['display'] = 'flex';
    } else {
        _0x4c2945['style']['display'] = 'none';
    }
}
function _0x22777a() {
    const _0x6ab8c7 = document['getElementById']('mobile-joystick-zone');
    const _0x3101ee = document['getElementById']('mobile-top-bar');
    const _0x589085 = document['getElementById']('mobile-action-bar');
    if (!_0x6ab8c7 || !_0x3101ee || !_0x589085)
        return;
    if (!_0x14db5d && _0x43263f) {
        _0x6ab8c7['style']['display'] = 'flex';
        _0x3101ee['style']['display'] = 'flex';
        _0x589085['style']['display'] = 'flex';
        _0x5e35d4();
    } else {
        _0x6ab8c7['style']['display'] = 'none';
        _0x3101ee['style']['display'] = 'none';
        _0x589085['style']['display'] = 'none';
    }
}
const _0x4ef7be = document['getElementById']('gameCanvas');
const _0x4f4ae3 = _0x4ef7be['getContext']('2d', { 'alpha': ![] });
const _0x45588e = 0x500;
const _0x58e48e = 0x2d0;
const _0x2db053 = {
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
        'width': _0x45588e,
        'height': _0x58e48e
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
const _0x5d0144 = {
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
const _0x5026a6 = new Image();
const _0x25b59e = new Image();
const _0x1a0354 = new Image();
const _0x3df87b = new Image();
_0x3df87b['src'] = 'assets/mayor\x20cosmetic.png';
const _0x5d0b1e = [
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
const _0x90eb35 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x1fbf7d = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x1fbf7d === 'body1.png' || _0x1fbf7d === 'body1')
    _0x1fbf7d = 'body01.png';
if (!_0x1fbf7d['endsWith']('.png'))
    _0x1fbf7d += '.png';
let _0xf68691 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0xf68691['endsWith']('.png'))
    _0xf68691 += '.png';
let _0x14db5d = !![];
let _0x10a173 = null;
let _0x140960 = null;
let _0xc0825d = 0x3c;
let _0x54dd0f = 0x2d;
const _0x2eca8e = {};
const _0x1d4177 = new Image();
_0x1d4177['src'] = 'assets/yanito932.png';
_0x2eca8e['assets/yanito932.png'] = _0x1d4177;
function _0x4bcf16(_0x528a79) {
    if (!_0x2eca8e[_0x528a79] || !_0x2eca8e[_0x528a79]['complete'] && _0x2eca8e[_0x528a79]['naturalWidth'] === 0x0 && _0x2eca8e[_0x528a79]['naturalHeight'] === 0x0) {
        const _0x337f88 = new Image();
        _0x337f88['src'] = _0x528a79;
        _0x2eca8e[_0x528a79] = _0x337f88;
    }
    return _0x2eca8e[_0x528a79];
}
function _0x5d238a(_0xd60bc1, _0x24d088, _0x92fd9, _0x9b36b4, _0x2188cb) {
    try {
        const _0x10b671 = 'assets/' + (_0x24d088 || 'body01.png');
        const _0x207ba4 = _0x4bcf16(_0x10b671);
        if (_0x207ba4['complete'] && _0x207ba4['naturalWidth'] > 0x0) {
            _0xd60bc1['drawImage'](_0x207ba4, -_0x9b36b4 / 0x2, -_0x2188cb / 0x2, _0x9b36b4, _0x2188cb);
        }
        if (_0x92fd9 === null || _0x92fd9 === undefined)
            return;
        const _0x343ff9 = 'assets/' + _0x92fd9;
        const _0x48490d = _0x4bcf16(_0x343ff9);
        if (_0x48490d['complete'] && _0x48490d['naturalWidth'] > 0x0) {
            _0xd60bc1['drawImage'](_0x48490d, -_0x9b36b4 / 0x2, -_0x2188cb / 0x2, _0x9b36b4, _0x2188cb);
        }
    } catch (_0xb65c76) {
    }
}
function _0x13ecc7() {
    const _0x310df7 = document['getElementById']('body-skin-grid');
    const _0x4b15ee = document['getElementById']('eyes-skin-grid');
    if (!_0x310df7 || !_0x4b15ee)
        return;
    _0x310df7['innerHTML'] = '';
    _0x5d0b1e['forEach'](_0x26664c => {
        const _0x49f126 = document['createElement']('button');
        _0x49f126['className'] = 'skin-btn' + (_0x26664c === _0x1fbf7d ? '\x20selected' : '');
        const _0x36d995 = document['createElement']('img');
        _0x36d995['src'] = 'assets/' + _0x26664c;
        _0x49f126['appendChild'](_0x36d995);
        _0x49f126['onclick'] = () => {
            _0x1fbf7d = _0x26664c;
            localStorage['setItem']('selectedBody', _0x26664c);
            _0x310df7['querySelectorAll']('.skin-btn')['forEach'](_0x22e29f => _0x22e29f['classList']['remove']('selected'));
            _0x49f126['classList']['add']('selected');
        };
        _0x310df7['appendChild'](_0x49f126);
    });
    _0x4b15ee['innerHTML'] = '';
    _0x90eb35['forEach'](_0x44467d => {
        const _0x238c8a = document['createElement']('button');
        _0x238c8a['className'] = 'skin-btn' + (_0x44467d === _0xf68691 ? '\x20selected' : '');
        const _0x53b24c = document['createElement']('img');
        _0x53b24c['src'] = 'assets/' + _0x44467d;
        _0x238c8a['appendChild'](_0x53b24c);
        _0x238c8a['onclick'] = () => {
            _0xf68691 = _0x44467d;
            localStorage['setItem']('selectedEyes', _0x44467d);
            _0x4b15ee['querySelectorAll']('.skin-btn')['forEach'](_0x395e7c => _0x395e7c['classList']['remove']('selected'));
            _0x238c8a['classList']['add']('selected');
        };
        _0x4b15ee['appendChild'](_0x238c8a);
    });
}
function _0x17ead0(_0x1d876f) {
    if (!_0x2db053['MAP']['columns'] || !_0x2db053['CAMERA']['width'])
        return;
    const _0x473b45 = Math['max'](0x0, _0x2db053['MAP']['columns'] * _0x2db053['MAP']['tileSize'] - _0x2db053['CAMERA']['width']);
    const _0xa4be80 = Math['max'](0x0, _0x2db053['MAP']['rows'] * _0x2db053['MAP']['tileSize'] - _0x2db053['CAMERA']['height']);
    if (_0x10a173 === null) {
        _0x10a173 = _0x473b45 / 0x2;
        _0x140960 = _0xa4be80 / 0x2;
    }
    _0x10a173 += _0xc0825d * _0x1d876f;
    _0x140960 += _0x54dd0f * _0x1d876f;
    if (_0x10a173 <= 0x0) {
        _0x10a173 = 0x0;
        _0xc0825d = Math['abs'](_0xc0825d);
    } else if (_0x10a173 >= _0x473b45) {
        _0x10a173 = _0x473b45;
        _0xc0825d = -Math['abs'](_0xc0825d);
    }
    if (_0x140960 <= 0x0) {
        _0x140960 = 0x0;
        _0x54dd0f = Math['abs'](_0x54dd0f);
    } else if (_0x140960 >= _0xa4be80) {
        _0x140960 = _0xa4be80;
        _0x54dd0f = -Math['abs'](_0x54dd0f);
    }
    _0x2db053['CAMERA']['x'] = _0x10a173;
    _0x2db053['CAMERA']['y'] = _0x140960;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x59c846 = document['getElementById']('play-btn');
    const _0x3fa7d5 = document['getElementById']('username-input');
    const _0x96a984 = localStorage['getItem']('playerName');
    if (_0x96a984 && _0x3fa7d5) {
        _0x3fa7d5['value'] = _0x96a984;
    }
    const _0x2ac7f6 = () => {
        _0x3c652f['play']('wait');
        document['removeEventListener']('click', _0x2ac7f6);
        document['removeEventListener']('keydown', _0x2ac7f6);
        document['removeEventListener']('touchstart', _0x2ac7f6);
    };
    document['addEventListener']('click', _0x2ac7f6, { 'once': !![] });
    document['addEventListener']('keydown', _0x2ac7f6, { 'once': !![] });
    document['addEventListener']('touchstart', _0x2ac7f6, { 'once': !![] });
    if (_0x59c846) {
        _0x59c846['addEventListener']('click', () => {
            const _0x36264a = window['_FB'] && window['_FB']['_currentUser'];
            const _0x7436bb = window['_FB'] && window['_FB']['_userData'];
            let _0x2123d8 = !![];
            if (_0x36264a && _0x7436bb && _0x7436bb['username']) {
                _0x503b20 = _0x7436bb['username'];
                _0x2123d8 = ![];
            } else {
                const _0xd651ab = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x503b20 = 'user' + _0xd651ab;
                _0x2123d8 = !![];
            }
            const _0x54303e = _0x2123d8 ? 'body01.png' : _0x1fbf7d;
            const _0x18e283 = _0x2123d8 ? 'eyes4.png' : _0xf68691;
            const _0xa88f91 = !_0x2123d8 && _0x7436bb && _0x7436bb['photoURL'] ? _0x7436bb['photoURL'] : '';
            const _0x64306 = !_0x2123d8 && _0x36264a ? _0x36264a['uid'] : '';
            localStorage['setItem']('playerName', _0x503b20);
            _0x14db5d = ![];
            _0x2db053['CAMERA']['x'] = null;
            _0x2db053['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x7291fc = document['getElementById']('chat-log-wrap');
            if (_0x7291fc)
                _0x7291fc['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x230d21 = document['getElementById']('controls-hint');
            if (_0x230d21 && !_0x43263f)
                _0x230d21['style']['display'] = 'block';
            _0x22777a();
            if (_0x43263f) {
                const _0x26e005 = document['getElementById']('leaderboard-list');
                const _0x50d7f5 = document['getElementById']('leaderboard-toggle');
                if (_0x26e005) {
                    _0x26e005['style']['display'] = 'none';
                    if (_0x50d7f5)
                        _0x50d7f5['style']['transform'] = 'rotate(180deg)';
                }
                const _0x2677d3 = document['getElementById']('role-list-items');
                const _0x3d88b5 = document['getElementById']('role-list-toggle');
                if (_0x2677d3) {
                    _0x2677d3['style']['display'] = 'none';
                    if (_0x3d88b5)
                        _0x3d88b5['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x1aa5e0 = !_0x2123d8 && _0x7436bb ? {
                'townWins': _0x7436bb['townWins'] || 0x0,
                'mafiaWins': _0x7436bb['mafiaWins'] || 0x0,
                'deaths': _0x7436bb['deaths'] || 0x0,
                'townLosses': _0x7436bb['townLosses'] || 0x0,
                'mafiaLosses': _0x7436bb['mafiaLosses'] || 0x0
            } : null;
            const _0x24dd7a = JSON['stringify']({
                'type': 'join',
                'name': _0x503b20,
                'token': _0x4e559e,
                'body': _0x54303e,
                'eyes': _0x18e283,
                'isGuest': _0x2123d8,
                'uid': _0x64306,
                'photoURL': _0xa88f91,
                'accountStats': _0x1aa5e0
            });
            if (_0x4c6e33 && _0x4c6e33['readyState'] === WebSocket['OPEN']) {
                _0x4c6e33['send'](_0x24dd7a);
            } else if (!_0x4c6e33 || _0x4c6e33['readyState'] === WebSocket['CLOSED'] || _0x4c6e33['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x24dd7a;
                _0x1f39e8();
            }
        });
    }
    _0x13ecc7();
    _0x1f39e8();
    _0xc57f8a();
    _0x3dd9e2();
    _0x33ad7c();
});
function _0x3dd9e2() {
    const _0x23260e = document['getElementById']('settings-btn');
    const _0x376363 = document['getElementById']('settings-panel');
    const _0x964077 = document['getElementById']('close-settings-btn');
    const _0x186fa2 = document['getElementById']('setting-mouse-relative');
    if (_0x186fa2) {
        _0x186fa2['checked'] = _0x2ce755;
        _0x186fa2['addEventListener']('change', () => {
            _0x2ce755 = _0x186fa2['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x2ce755 ? 'true' : 'false');
        });
    }
    const _0x8afcc6 = document['getElementById']('setting-music-volume');
    const _0xeadaa6 = document['getElementById']('setting-music-volume-display');
    function _0x31cd78(_0x48c3d8) {
        const _0x19274a = (_0x48c3d8['value'] - _0x48c3d8['min']) / (_0x48c3d8['max'] - _0x48c3d8['min']) * 0x64;
        _0x48c3d8['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x19274a + '%,\x20#444\x20' + _0x19274a + '%)';
    }
    if (_0x8afcc6) {
        const _0x1a8cba = _0x3c652f['getVolume']();
        const _0x7e8728 = Math['round'](_0x1a8cba * 0x64);
        _0x8afcc6['value'] = _0x7e8728;
        if (_0xeadaa6)
            _0xeadaa6['textContent'] = _0x7e8728 + '%';
        _0x31cd78(_0x8afcc6);
        _0x8afcc6['addEventListener']('input', () => {
            const _0x2a25f8 = parseInt(_0x8afcc6['value'], 0xa);
            if (_0xeadaa6)
                _0xeadaa6['textContent'] = _0x2a25f8 + '%';
            _0x31cd78(_0x8afcc6);
            _0x3c652f['setVolume'](_0x2a25f8 / 0x64);
            _0x3c652f['setMuted'](_0x2a25f8 === 0x0);
        });
    }
    if (_0x23260e && _0x376363) {
        _0x23260e['addEventListener']('click', _0x35bbd3 => {
            _0x35bbd3['stopPropagation']();
            _0x376363['style']['display'] = _0x376363['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x964077 && _0x376363) {
        _0x964077['addEventListener']('click', () => {
            _0x376363['style']['display'] = 'none';
        });
    }
    const _0x7c35b1 = document['getElementById']('mayor-confirm-yes');
    const _0x4fc451 = document['getElementById']('mayor-confirm-no');
    const _0x3039a7 = document['getElementById']('mayor-confirm-dialog');
    if (_0x7c35b1 && _0x3039a7) {
        _0x7c35b1['addEventListener']('click', () => {
            if (_0x4c6e33 && _0x4c6e33['readyState'] === WebSocket['OPEN']) {
                _0x4c6e33['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x3039a7['style']['display'] = 'none';
        });
    }
    if (_0x4fc451 && _0x3039a7) {
        _0x4fc451['addEventListener']('click', () => {
            _0x3039a7['style']['display'] = 'none';
        });
    }
    const _0x4eb2fc = document['getElementById']('close-ability-btn');
    if (_0x4eb2fc) {
        _0x4eb2fc['addEventListener']('click', () => {
            const _0x42fc1d = document['getElementById']('ability-ui');
            if (_0x42fc1d)
                _0x42fc1d['style']['display'] = 'none';
        });
    }
}
let _0x568b60 = '';
function _0x3511ca(_0x35cf93) {
    const _0x31b792 = document['getElementById']('vote-tally-panel');
    const _0x24ee9c = document['getElementById']('vote-tally-list');
    if (!_0x31b792 || !_0x24ee9c)
        return;
    if (_0x35cf93['state'] !== 'DAY_VOTE') {
        _0x31b792['style']['display'] = 'none';
        _0x568b60 = '';
        return;
    }
    _0x31b792['style']['display'] = 'block';
    const _0x35dfef = {};
    for (const _0x269516 in _0x543120) {
        if (!_0x543120[_0x269516]['isDead'])
            _0x35dfef[_0x269516] = 0x0;
    }
    if (_0x5870bb && !_0x5d0144['isDead'])
        _0x35dfef[_0x5870bb] = 0x0;
    const _0x41ea7d = _0x35cf93['votes'] || {};
    for (const _0x543499 in _0x41ea7d) {
        const _0x45fcab = _0x41ea7d[_0x543499];
        const _0x34beff = _0x35cf93['mayorRevealed'] && _0x35cf93['mayorRevealed'][_0x543499] ? 0x2 : 0x1;
        _0x35dfef[_0x45fcab] = (_0x35dfef[_0x45fcab] || 0x0) + _0x34beff;
    }
    let _0x459b1f = 0x0;
    const _0x165104 = _0x35cf93['skips'] || {};
    for (const _0x2a3366 in _0x165104) {
        _0x459b1f += Number(_0x165104[_0x2a3366]) || 0x1;
    }
    const _0x3acca3 = JSON['stringify'](_0x35dfef) + '_' + _0x459b1f + '_' + _0x5d0144['isDead'];
    if (_0x3acca3 === _0x568b60)
        return;
    _0x568b60 = _0x3acca3;
    _0x24ee9c['innerHTML'] = '';
    for (const _0x1a5971 in _0x35dfef) {
        const _0x339833 = parseInt(_0x1a5971);
        const _0x508ec9 = _0x339833 === _0x5870bb ? _0x503b20 : _0x543120[_0x1a5971] ? _0x543120[_0x1a5971]['name'] : 'Player\x20' + _0x1a5971;
        const _0x16a9ec = document['createElement']('div');
        _0x16a9ec['className'] = 'vote-tally-entry';
        const _0x449c3e = document['createElement']('span');
        _0x449c3e['textContent'] = _0x508ec9;
        const _0x322a17 = document['createElement']('span');
        _0x322a17['className'] = 'vote-count';
        _0x322a17['textContent'] = _0x35dfef[_0x1a5971] + '\x20vote' + (_0x35dfef[_0x1a5971] === 0x1 ? '' : 's');
        _0x16a9ec['appendChild'](_0x449c3e);
        _0x16a9ec['appendChild'](_0x322a17);
        if (_0x339833 !== _0x5870bb && !_0x5d0144['isDead']) {
            _0x16a9ec['style']['cursor'] = 'pointer';
            _0x16a9ec['title'] = 'Vote\x20for\x20' + _0x508ec9;
            _0x16a9ec['addEventListener']('click', _0x586424 => {
                _0x586424['stopPropagation']();
                if (_0x4c6e33 && _0x4c6e33['readyState'] === WebSocket['OPEN']) {
                    _0x4c6e33['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x508ec9
                    }));
                }
            });
        }
        _0x24ee9c['appendChild'](_0x16a9ec);
    }
    const _0x5e95b4 = document['createElement']('div');
    _0x5e95b4['className'] = 'vote-tally-skip';
    _0x5e95b4['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x459b1f + '</span>';
    if (!_0x5d0144['isDead']) {
        _0x5e95b4['style']['cursor'] = 'pointer';
        _0x5e95b4['title'] = 'Click\x20to\x20skip\x20vote';
        _0x5e95b4['addEventListener']('click', _0x457f0e => {
            _0x457f0e['stopPropagation']();
            if (_0x4c6e33 && _0x4c6e33['readyState'] === WebSocket['OPEN']) {
                _0x4c6e33['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x24ee9c['appendChild'](_0x5e95b4);
}
let _0x37897d = null;
let _0x15e26f = null;
let _0x592666 = null;
function _0x1a34fa() {
    if (_0x4c6e33 && _0x4c6e33['readyState'] === WebSocket['OPEN']) {
        _0x4c6e33['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x37897d,
            'abilityTarget': _0x15e26f,
            'killTarget': _0x592666
        }));
    }
}
function _0x4de2e0() {
    const _0x8b84f = document['getElementById']('ability-ui-body');
    if (!_0x8b84f)
        return;
    _0x8b84f['innerHTML'] = '';
    if (_0x38e3df === 'Celebrity' || _0x38e3df === 'Mayor') {
        const _0x22b416 = document['createElement']('div');
        _0x22b416['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x22b416['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x8b84f['appendChild'](_0x22b416);
        return;
    }
    if (_0x38e3df === 'Skinwalker') {
        const _0xfce898 = document['createElement']('div');
        _0xfce898['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0xfce898['innerText'] = 'Transform\x20into:';
        _0x8b84f['appendChild'](_0xfce898);
        const _0x34ed96 = document['createElement']('div');
        _0x34ed96['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x1e56e2 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x1649a6 = _0x4f0070 => {
            if (_0x2db053['ROLES_IN_GAME'] && Array['isArray'](_0x2db053['ROLES_IN_GAME'])) {
                return _0x2db053['ROLES_IN_GAME']['includes'](_0x4f0070);
            }
            if (_0x2db053['ROLE_LIST_RAW'] && _0x2db053['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x2db053['ROLE_LIST_RAW']['some'](_0x16dd48 => _0x16dd48['name'] === _0x4f0070 && !_0x16dd48['isDead']);
            }
            return ![];
        };
        const _0x28d75d = [
            'None',
            ..._0x1e56e2['filter'](_0x1649a6)
        ];
        _0x28d75d['forEach'](_0x1b8fc0 => {
            const _0x197581 = document['createElement']('button');
            _0x197581['className'] = 'layer-btn';
            _0x197581['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x197581['innerText'] = _0x1b8fc0;
            const _0x337bca = _0x1b8fc0 === 'None' && !_0x37897d || _0x37897d === _0x1b8fc0;
            if (_0x337bca)
                _0x197581['classList']['add']('active');
            _0x197581['onclick'] = () => {
                _0x37897d = _0x1b8fc0 === 'None' ? null : _0x1b8fc0;
                _0x1a34fa();
                _0x4de2e0();
            };
            _0x34ed96['appendChild'](_0x197581);
        });
        _0x8b84f['appendChild'](_0x34ed96);
        if (_0x1649a6('Vigilante')) {
            const _0x3ee843 = document['createElement']('div');
            _0x3ee843['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x3ee843['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x8b84f['appendChild'](_0x3ee843);
        }
        if (_0x37897d === 'Vigilante') {
            const _0x38fefa = document['createElement']('div');
            _0x38fefa['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x38fefa['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x8b84f['appendChild'](_0x38fefa);
        } else if (_0x37897d && _0x37897d !== 'Celebrity') {
            const _0x1fe734 = document['createElement']('div');
            _0x1fe734['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x1fe734['innerText'] = 'Use\x20' + _0x37897d + '\x20ability\x20on:';
            _0x8b84f['appendChild'](_0x1fe734);
            const _0x3778cd = document['createElement']('div');
            _0x3778cd['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x2d011e = document['createElement']('button');
            _0x2d011e['className'] = 'layer-btn';
            _0x2d011e['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x2d011e['innerText'] = 'No\x20one';
            if (!_0x15e26f)
                _0x2d011e['classList']['add']('active');
            _0x2d011e['onclick'] = () => {
                _0x15e26f = null;
                _0x1a34fa();
                _0x4de2e0();
            };
            _0x3778cd['appendChild'](_0x2d011e);
            for (const _0x4baf05 in _0x543120) {
                const _0x9b2a8e = _0x543120[_0x4baf05];
                if (_0x9b2a8e['isDead'])
                    continue;
                const _0x1b4c05 = document['createElement']('button');
                _0x1b4c05['className'] = 'layer-btn';
                _0x1b4c05['innerText'] = _0x9b2a8e['name'];
                if (_0x15e26f === parseInt(_0x4baf05))
                    _0x1b4c05['classList']['add']('active');
                _0x1b4c05['onclick'] = () => {
                    _0x15e26f = parseInt(_0x4baf05);
                    _0x1a34fa();
                    _0x4de2e0();
                };
                _0x3778cd['appendChild'](_0x1b4c05);
            }
            _0x8b84f['appendChild'](_0x3778cd);
        }
        const _0x31c7d5 = document['createElement']('div');
        _0x31c7d5['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x31c7d5['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x8b84f['appendChild'](_0x31c7d5);
        const _0x5ae5d3 = document['createElement']('div');
        _0x5ae5d3['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x3aeced = document['createElement']('button');
        _0x3aeced['className'] = 'layer-btn';
        _0x3aeced['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x3aeced['innerText'] = 'No\x20one';
        if (!_0x592666 && !_0x2db053['CURRENT_TARGET'])
            _0x3aeced['classList']['add']('active');
        _0x3aeced['onclick'] = () => {
            _0x592666 = null;
            _0x2db053['CURRENT_TARGET'] = null;
            _0x1a34fa();
            _0x4de2e0();
        };
        _0x5ae5d3['appendChild'](_0x3aeced);
        for (const _0x37162f in _0x543120) {
            const _0x48566e = _0x543120[_0x37162f];
            if (_0x48566e['isDead'])
                continue;
            const _0x1ff62b = document['createElement']('button');
            _0x1ff62b['className'] = 'layer-btn';
            _0x1ff62b['innerText'] = _0x48566e['name'];
            if (_0x592666 === parseInt(_0x37162f) || _0x2db053['CURRENT_TARGET'] === parseInt(_0x37162f))
                _0x1ff62b['classList']['add']('active');
            _0x1ff62b['onclick'] = () => {
                _0x592666 = parseInt(_0x37162f);
                _0x2db053['CURRENT_TARGET'] = parseInt(_0x37162f);
                _0x1a34fa();
                _0x4de2e0();
            };
            _0x5ae5d3['appendChild'](_0x1ff62b);
        }
        _0x8b84f['appendChild'](_0x5ae5d3);
        return;
    }
    let _0x46f31e = '';
    let _0x33c080 = ![];
    if (_0x38e3df === 'Doctor') {
        _0x46f31e = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x33c080 = !![];
    } else if (_0x38e3df === 'Investigator') {
        _0x46f31e = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x38e3df === 'Tracker') {
        _0x46f31e = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x38e3df === 'Archer') {
        _0x46f31e = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x38e3df === 'Escort') {
        _0x46f31e = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x38e3df === 'Vigilante') {
        _0x46f31e = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x5261ef = document['createElement']('div');
    _0x5261ef['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x5261ef['innerText'] = _0x46f31e;
    _0x8b84f['appendChild'](_0x5261ef);
    const _0x9c0702 = document['createElement']('div');
    _0x9c0702['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x2094bd = document['createElement']('button');
    _0x2094bd['className'] = 'layer-btn';
    _0x2094bd['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x2094bd['innerText'] = 'No\x20one';
    if (_0x2db053['CURRENT_TARGET'] === null)
        _0x2094bd['classList']['add']('active');
    _0x2094bd['onclick'] = () => {
        _0x2db053['CURRENT_TARGET'] = null;
        if (_0x4c6e33 && _0x4c6e33['readyState'] === WebSocket['OPEN']) {
            _0x4c6e33['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x4de2e0();
    };
    _0x9c0702['appendChild'](_0x2094bd);
    for (const _0xdbfa08 in _0x543120) {
        const _0x5e4612 = _0x543120[_0xdbfa08];
        if (_0x5e4612['isDead'])
            continue;
        const _0x3f6278 = document['createElement']('button');
        _0x3f6278['className'] = 'layer-btn';
        _0x3f6278['innerText'] = _0x5e4612['name'];
        if (_0x2db053['CURRENT_TARGET'] === parseInt(_0xdbfa08))
            _0x3f6278['classList']['add']('active');
        _0x3f6278['onclick'] = () => {
            _0x2db053['CURRENT_TARGET'] = parseInt(_0xdbfa08);
            if (_0x4c6e33 && _0x4c6e33['readyState'] === WebSocket['OPEN']) {
                _0x4c6e33['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0xdbfa08)
                }));
            }
            _0x4de2e0();
        };
        _0x9c0702['appendChild'](_0x3f6278);
    }
    if (_0x33c080 && !_0x5d0144['isDead']) {
        const _0x55195d = document['createElement']('button');
        _0x55195d['className'] = 'layer-btn';
        _0x55195d['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x55195d['innerText'] = _0x503b20 + '\x20(Self)';
        if (_0x2db053['CURRENT_TARGET'] === _0x5870bb)
            _0x55195d['classList']['add']('active');
        _0x55195d['onclick'] = () => {
            _0x2db053['CURRENT_TARGET'] = _0x5870bb;
            if (_0x4c6e33 && _0x4c6e33['readyState'] === WebSocket['OPEN']) {
                _0x4c6e33['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x5870bb
                }));
            }
            _0x4de2e0();
        };
        _0x9c0702['appendChild'](_0x55195d);
    }
    _0x8b84f['appendChild'](_0x9c0702);
}
function _0x1f39e8() {
    if (_0x4c6e33 && (_0x4c6e33['readyState'] === WebSocket['OPEN'] || _0x4c6e33['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x4f2ae8 = new URLSearchParams();
    if (_0x4e559e)
        _0x4f2ae8['set']('token', _0x4e559e);
    _0x4f2ae8['set']('ngrok-skip-browser-warning', 'true');
    const _0x1620f0 = 'wss://this-studying-motherboard-emissions.trycloudflare.com';
    const _0x159ce6 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x1620f0;
    const _0xc5b353 = _0x159ce6 + '/?' + _0x4f2ae8['toString']();
    _0x4c6e33 = new WebSocket(_0xc5b353);
    _0x4c6e33['onopen'] = function () {
        if (!_0x14db5d && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x257584 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x258790 = window['_FB'] && window['_FB']['_userData'];
                const _0x1a0d85 = !(_0x257584 && _0x258790 && _0x258790['username']);
                const _0x193e48 = _0x1a0d85 ? 'body01.png' : _0x1fbf7d;
                const _0x43c33c = _0x1a0d85 ? 'eyes4.png' : _0xf68691;
                const _0x116a38 = !_0x1a0d85 && _0x258790 && _0x258790['photoURL'] ? _0x258790['photoURL'] : '';
                const _0x4922c3 = !_0x1a0d85 && _0x257584 ? _0x257584['uid'] : '';
                const _0x3ddce5 = !_0x1a0d85 && _0x258790 ? {
                    'townWins': _0x258790['townWins'] || 0x0,
                    'mafiaWins': _0x258790['mafiaWins'] || 0x0,
                    'deaths': _0x258790['deaths'] || 0x0,
                    'townLosses': _0x258790['townLosses'] || 0x0,
                    'mafiaLosses': _0x258790['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x503b20,
                    'token': _0x4e559e,
                    'body': _0x193e48,
                    'eyes': _0x43c33c,
                    'isGuest': _0x1a0d85,
                    'uid': _0x4922c3,
                    'photoURL': _0x116a38,
                    'accountStats': _0x3ddce5
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x4c6e33 && _0x4c6e33['readyState'] === WebSocket['OPEN']) {
            _0x4c6e33['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x4c6e33['onclose'] = _0x4ca541 => {
        if (_0x4ca541['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x4ca541['code'] === 0xfa2 || _0x4ca541['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x3e8d7f = document['getElementById']('disconnect-overlay');
        if (!_0x3e8d7f) {
            _0x3e8d7f = document['createElement']('div');
            _0x3e8d7f['id'] = 'disconnect-overlay';
            _0x3e8d7f['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x3e8d7f['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x3e8d7f);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x4c6e33['onmessage'] = _0x141a81 => {
        const _0x5a3c29 = JSON['parse'](_0x141a81['data']);
        if (_0x5a3c29['type'] === 'map_data') {
            _0x2db053['MAP']['tileSize'] = _0x5a3c29['map']['tileSize'];
            _0x2db053['MAP']['columns'] = _0x5a3c29['map']['columns'];
            _0x2db053['MAP']['rows'] = _0x5a3c29['map']['rows'];
            _0x2db053['MAP']['layers'] = _0x5a3c29['map']['layers'];
            if (_0x5a3c29['map']['doors']) {
                _0x2db053['MAP']['doors'] = _0x5a3c29['map']['doors'];
                const _0x4479e6 = _0x2db053['MAP']['layers']['find'](_0x37bf94 => _0x37bf94['name'] === 'floor2');
                if (_0x4479e6) {
                    for (const _0x1e66e2 in _0x2db053['MAP']['doors']) {
                        _0x4479e6['data'][parseInt(_0x1e66e2)] = 0x2;
                    }
                }
            }
            if (_0x5a3c29['entities'])
                _0x2db053['ENTITIES'] = _0x5a3c29['entities'];
            _0x766d86();
            _0x2db053['SYSTEM']['isReady'] = !![];
            _0xae48e3();
            if (!_0x2db053['SYSTEM']['_gameLoopRunning']) {
                _0x2db053['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x312e20);
            }
            return;
        }
        if (_0x5a3c29['type'] === 'init') {
            _0x5870bb = _0x5a3c29['id'];
            _0x14db5d = ![];
            _0x22777a();
            if (_0x43263f) {
                const _0x3a1e40 = document['getElementById']('leaderboard-list');
                const _0x2d7045 = document['getElementById']('leaderboard-toggle');
                if (_0x3a1e40) {
                    _0x3a1e40['style']['display'] = 'none';
                    if (_0x2d7045)
                        _0x2d7045['style']['transform'] = 'rotate(180deg)';
                }
                const _0x1998a5 = document['getElementById']('role-list-items');
                const _0x452efd = document['getElementById']('role-list-toggle');
                if (_0x1998a5) {
                    _0x1998a5['style']['display'] = 'none';
                    if (_0x452efd)
                        _0x452efd['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x2129c7 = _0x5a3c29['isOwner'] || ![];
            _0x503b20 = _0x5a3c29['name'] || _0x503b20;
            _0x2db053['MAP']['tileSize'] = _0x5a3c29['map']['tileSize'];
            _0x2db053['MAP']['columns'] = _0x5a3c29['map']['columns'];
            _0x2db053['MAP']['rows'] = _0x5a3c29['map']['rows'];
            _0x2db053['MAP']['layers'] = _0x5a3c29['map']['layers'];
            if (_0x5a3c29['map']['doors']) {
                _0x2db053['MAP']['doors'] = _0x5a3c29['map']['doors'];
                const _0x33ae4e = _0x2db053['MAP']['layers']['find'](_0x4323cb => _0x4323cb['name'] === 'floor2');
                if (_0x33ae4e) {
                    for (const _0x31983f in _0x2db053['MAP']['doors']) {
                        _0x33ae4e['data'][parseInt(_0x31983f)] = 0x2;
                    }
                }
            }
            if (_0x5a3c29['entities'])
                _0x2db053['ENTITIES'] = _0x5a3c29['entities'];
            _0x766d86();
            _0x5d0144['x'] = _0x2db053['MAP']['columns'] * _0x2db053['MAP']['tileSize'] / 0x2;
            _0x5d0144['y'] = _0x2db053['MAP']['rows'] * _0x2db053['MAP']['tileSize'] / 0x2;
            _0x2db053['CAMERA']['x'] = _0x5d0144['x'] + _0x5d0144['width'] / 0x2 - _0x2db053['CAMERA']['width'] / 0x2;
            _0x2db053['CAMERA']['y'] = _0x5d0144['y'] + _0x5d0144['height'] / 0x2 - _0x2db053['CAMERA']['height'] / 0x2;
            if (_0x2129c7) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x92307d();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x2db053['SYSTEM']['lastTime'] = performance['now']();
            _0x2db053['SYSTEM']['isReady'] = !![];
            _0x259299();
            if (!_0x2db053['SYSTEM']['_gameLoopRunning']) {
                _0x2db053['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x312e20);
            }
            return;
        } else if (_0x5a3c29['type'] === 'state') {
            const _0x303e91 = {};
            for (const _0x23c550 in _0x5a3c29['players']) {
                if (parseInt(_0x23c550) === _0x5870bb)
                    continue;
                const _0x3757c7 = _0x5a3c29['players'][_0x23c550];
                const _0x93767d = _0x543120[_0x23c550];
                if (_0x93767d) {
                    const _0x56aa4c = _0x3757c7['x'] - _0x93767d['renderX'];
                    const _0x17eca6 = _0x3757c7['y'] - _0x93767d['renderY'];
                    const _0x33fc3e = _0x56aa4c * _0x56aa4c + _0x17eca6 * _0x17eca6 > 0x78 * 0x78;
                    Object['assign'](_0x93767d, _0x3757c7);
                    if (_0x33fc3e) {
                        _0x93767d['renderX'] = _0x3757c7['x'];
                        _0x93767d['renderY'] = _0x3757c7['y'];
                    }
                    _0x303e91[_0x23c550] = _0x93767d;
                } else {
                    _0x303e91[_0x23c550] = {
                        ..._0x3757c7,
                        'renderX': _0x3757c7['x'],
                        'renderY': _0x3757c7['y'],
                        'renderAngle': _0x3757c7['angle'] || 0x0
                    };
                }
            }
            _0x543120 = _0x303e91;
            _0x1e739d();
            if (_0x5a3c29['players'][_0x5870bb]) {
                const _0x1cb214 = _0x5a3c29['players'][_0x5870bb];
                _0x5d0144['chats'] = _0x1cb214['chats'] || [];
                _0x5d0144['isDead'] = _0x1cb214['isDead'];
                if (_0x1cb214['name'])
                    _0x503b20 = _0x1cb214['name'];
                _0x259299();
                const _0xdf40b9 = Math['hypot'](_0x1cb214['x'] - _0x5d0144['x'], _0x1cb214['y'] - _0x5d0144['y']);
                if (_0xdf40b9 > 0xfa) {
                    _0x5d0144['x'] = _0x1cb214['x'];
                    _0x5d0144['y'] = _0x1cb214['y'];
                } else if (_0xdf40b9 > 0x50) {
                    _0x5d0144['x'] += (_0x1cb214['x'] - _0x5d0144['x']) * 0.06;
                    _0x5d0144['y'] += (_0x1cb214['y'] - _0x5d0144['y']) * 0.06;
                }
            }
            if (_0x5a3c29['entities'])
                _0x2db053['ENTITIES'] = _0x5a3c29['entities'];
            if (_0x5a3c29['game']) {
                _0x2db053['GAME_STATE'] = _0x5a3c29['game']['state'];
                _0x2db053['NIGHT_ABILITY_OPEN'] = _0x5a3c29['game']['nightAbilityOpen'];
                if (_0x5a3c29['game']['mayorRevealed']) {
                    for (const _0x3ab9d2 in _0x5a3c29['game']['mayorRevealed']) {
                        _0x2f812b['add'](parseInt(_0x3ab9d2));
                    }
                }
                if (_0x2db053['LAST_STATE'] !== _0x2db053['GAME_STATE']) {
                    if (_0x2db053['GAME_STATE'] !== 'NIGHT') {
                        _0x2db053['CURRENT_TARGET'] = null;
                        _0x37897d = null;
                        _0x15e26f = null;
                        _0x592666 = null;
                        const _0x3de40f = document['getElementById']('ability-ui');
                        if (_0x3de40f)
                            _0x3de40f['style']['display'] = 'none';
                    }
                    if (_0x2db053['GAME_STATE'] === 'NIGHT') {
                        _0x5d0144['chats'] = [];
                        for (const _0x2d83be in _0x543120) {
                            _0x543120[_0x2d83be]['chats'] = [];
                        }
                    }
                    _0x2db053['LAST_STATE'] = _0x2db053['GAME_STATE'];
                    _0x5e35d4();
                    _0x3c652f['onStateChange'](_0x2db053['GAME_STATE'], _0x5a3c29['game']['nightAbilityOpen']);
                }
                const _0x92c51b = document['getElementById']('phase-ui');
                if (_0x92c51b) {
                    if (_0x5a3c29['game']['state'] === 'LOBBY') {
                        _0x92c51b['style']['display'] = 'none';
                    } else {
                        _0x92c51b['style']['display'] = 'block';
                    }
                    let _0x5f0f6c = _0x5a3c29['game']['state']['replace']('_', '\x20');
                    if (_0x5a3c29['game']['state'] === 'DAY_DISCUSS') {
                        _0x5f0f6c = 'DAY\x20' + (_0x5a3c29['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x5a3c29['game']['timer'] + 's';
                    } else if (_0x5a3c29['game']['state'] === 'DAY_VOTE') {
                        _0x5f0f6c = 'DAY\x20' + (_0x5a3c29['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x5a3c29['game']['timer'] + 's';
                    } else if (_0x5a3c29['game']['state'] === 'NIGHT') {
                        const _0x25b9fe = _0x5a3c29['game']['dayCount'] || 0x1;
                        if (_0x5a3c29['game']['nightAbilityOpen']) {
                            _0x5f0f6c = 'NIGHT\x20' + _0x25b9fe + '\x20ABILITY\x20PHASE';
                            const _0x440920 = _0x5a3c29['game']['abilityTimer'] !== undefined ? _0x5a3c29['game']['abilityTimer'] : _0x5a3c29['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x440920 + 's';
                        } else {
                            _0x5f0f6c = 'NIGHT\x20' + _0x25b9fe;
                            document['getElementById']('phase-timer')['innerText'] = _0x5a3c29['game']['timer'] + 's';
                        }
                    }
                    if (_0x5a3c29['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x5f0f6c;
                    }
                }
                if (_0x5a3c29['game']['state'] === 'NIGHT') {
                    const _0xef0373 = document['getElementById']('ability-timer-label');
                    if (_0xef0373) {
                        const _0x28182a = _0x5a3c29['game']['abilityTimer'] !== undefined ? _0x5a3c29['game']['abilityTimer'] : _0x5a3c29['game']['timer'];
                        _0xef0373['innerText'] = _0x5a3c29['game']['nightAbilityOpen'] ? _0x28182a + 's' : '';
                    }
                    if (_0x5a3c29['game']['nightAbilityOpen'] && !_0x564f67 && !_0x5d0144['isDead']) {
                        _0x564f67 = !![];
                        _0x4de2e0();
                        const _0x1a5cc0 = document['getElementById']('ability-ui');
                        if (_0x1a5cc0)
                            _0x1a5cc0['style']['display'] = 'block';
                    }
                    if (!_0x5a3c29['game']['nightAbilityOpen']) {
                        const _0x48af01 = document['getElementById']('ability-ui');
                        if (_0x48af01 && _0x48af01['style']['display'] === 'block') {
                            _0x48af01['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x564f67 = ![];
                }
                if (_0x5a3c29['game']['rolesInGame']) {
                    _0x2db053['ROLES_IN_GAME'] = _0x5a3c29['game']['rolesInGame'];
                }
                if (_0x5a3c29['game']['state'] === 'NIGHT') {
                    const _0x22ae3d = document['getElementById']('will-ui');
                    if (_0x22ae3d && _0x22ae3d['style']['display'] === 'flex') {
                        _0x22ae3d['style']['display'] = 'none';
                        const _0x1d12fb = document['getElementById']('will-input');
                        if (_0x1d12fb)
                            _0x1d12fb['blur']();
                    }
                }
                _0x3511ca(_0x5a3c29['game']);
                if (_0x5a3c29['game']['roleListMode'] !== undefined) {
                    _0x2db053['ROLE_LIST_RAW'] = _0x5a3c29['game']['roleList'] || [];
                    _0xc7e182(_0x5a3c29['game']['roleList'], _0x5a3c29['game']['roleListMode']);
                }
            }
        } else if (_0x5a3c29['type'] === 'teleport') {
            _0x5d0144['x'] = _0x5a3c29['x'];
            _0x5d0144['y'] = _0x5a3c29['y'];
            _0x5d0144['vx'] = 0x0;
            _0x5d0144['vy'] = 0x0;
            _0x2db053['CAMERA']['x'] = null;
            if (_0x5a3c29['teleportId'] !== undefined)
                _0x17cb83 = _0x5a3c29['teleportId'];
        } else if (_0x5a3c29['type'] === 'bulk_teleport') {
            for (const _0x1e3bd8 in _0x5a3c29['positions']) {
                const _0x102d38 = _0x5a3c29['positions'][_0x1e3bd8];
                if (parseInt(_0x1e3bd8) === _0x5870bb) {
                    _0x5d0144['x'] = _0x102d38['x'];
                    _0x5d0144['y'] = _0x102d38['y'];
                    _0x5d0144['vx'] = 0x0;
                    _0x5d0144['vy'] = 0x0;
                    _0x2db053['CAMERA']['x'] = null;
                    continue;
                }
                const _0x4d95fb = _0x543120[_0x1e3bd8];
                if (_0x4d95fb) {
                    _0x4d95fb['x'] = _0x102d38['x'];
                    _0x4d95fb['y'] = _0x102d38['y'];
                    _0x4d95fb['renderX'] = _0x102d38['x'];
                    _0x4d95fb['renderY'] = _0x102d38['y'];
                    _0x4d95fb['vx'] = 0x0;
                    _0x4d95fb['vy'] = 0x0;
                }
            }
        } else if (_0x5a3c29['type'] === 'player_left') {
            delete _0x543120[_0x5a3c29['id']];
            _0x2f812b['delete'](parseInt(_0x5a3c29['id']));
        } else if (_0x5a3c29['type'] === 'map_update') {
            const _0x3df982 = _0x2db053['MAP']['layers']['find'](_0x19a625 => _0x19a625['name'] === _0x5a3c29['layer']);
            if (_0x3df982) {
                _0x3df982['data'][_0x5a3c29['row'] * _0x2db053['MAP']['columns'] + _0x5a3c29['col']] = _0x5a3c29['gid'];
                const _0x29e7af = _0x5a3c29['row'] * _0x2db053['MAP']['columns'] + _0x5a3c29['col'];
                if (_0x2db053['MAP']['doors'] && _0x2db053['MAP']['doors'][_0x29e7af]) {
                    const _0x218294 = _0x2db053['MAP']['layers']['find'](_0x1b9a81 => _0x1b9a81['name'] === 'floor2');
                    if (_0x218294)
                        _0x218294['data'][_0x29e7af] = 0x2;
                }
                const _0x1db93e = Math['floor'](_0x5a3c29['col'] * _0x2db053['MAP']['tileSize'] / _0x2db053['MAP']['chunkSize']);
                const _0x108f73 = Math['floor'](_0x5a3c29['row'] * _0x2db053['MAP']['tileSize'] / _0x2db053['MAP']['chunkSize']);
                _0x1c7c22(_0x1db93e, _0x108f73);
            }
        } else if (_0x5a3c29['type'] === 'role_assign') {
            _0x38e3df = _0x5a3c29['role'];
            _0x5d0144['isDead'] = _0x38e3df === 'Spectator';
            _0x2f812b['clear']();
            _0x2db053['CURRENT_TARGET'] = null;
            _0x37897d = null;
            _0x15e26f = null;
            _0x592666 = null;
            _0x564f67 = ![];
            const _0x4125e3 = document['getElementById']('ability-ui');
            if (_0x4125e3)
                _0x4125e3['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x38e3df;
            _0x5e35d4();
            _0x4de2b4(_0x38e3df === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x38e3df, !![]);
            let _0x432018 = '';
            if (_0x38e3df === 'Investigator')
                _0x432018 = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x38e3df === 'Tracker')
                _0x432018 = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x38e3df === 'Doctor')
                _0x432018 = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x38e3df === 'Archer')
                _0x432018 = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x38e3df === 'Escort')
                _0x432018 = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x38e3df === 'Vigilante')
                _0x432018 = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x38e3df === 'Skinwalker')
                _0x432018 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x38e3df === 'Celebrity')
                _0x432018 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x38e3df === 'Mayor')
                _0x432018 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x4de2b4(_0x432018, !![]);
        } else if (_0x5a3c29['type'] === 'mayor_reveal') {
            _0x2f812b['add'](parseInt(_0x5a3c29['playerId']));
            _0x259299();
            _0x5e35d4();
        } else if (_0x5a3c29['type'] === 'rolelist_update') {
            _0x2db053['ROLE_LIST_RAW'] = _0x5a3c29['list'] || [];
            _0xc7e182(_0x5a3c29['list'], _0x5a3c29['mode']);
        } else if (_0x5a3c29['type'] === 'sound_event') {
            _0x3c652f['onSoundEvent'](_0x5a3c29['track']);
        } else if (_0x5a3c29['type'] === 'day_fade') {
            _0x3e24fc = 0x1;
            _0x95670c = performance['now']() + 0x3e8;
        } else if (_0x5a3c29['type'] === 'player_stats_updated') {
            const _0x4be906 = parseInt(_0x5a3c29['id']);
            if (_0x4be906 === _0x5870bb && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x5a3c29['accountStats']);
            }
            if (_0x543120[_0x5a3c29['id']]) {
                _0x543120[_0x5a3c29['id']]['accountStats'] = _0x5a3c29['accountStats'];
            }
            _0x1e739d();
        } else if (_0x5a3c29['type'] === 'stats_update') {
            const _0x4f0427 = window['_FB'];
            if (_0x4f0427 && _0x4f0427['_currentUser'] && _0x4f0427['_userData']) {
                const _0x4ad8fe = _0x4f0427['_currentUser']['uid'];
                const _0x1a1e49 = _0x5a3c29['patch'] || {};
                const _0x510786 = _0x4f0427['_userData'];
                const _0xf07e9b = {
                    'townWins': (_0x510786['townWins'] || 0x0) + (_0x1a1e49['townWins'] || 0x0),
                    'mafiaWins': (_0x510786['mafiaWins'] || 0x0) + (_0x1a1e49['mafiaWins'] || 0x0),
                    'deaths': (_0x510786['deaths'] || 0x0) + (_0x1a1e49['deaths'] || 0x0),
                    'townLosses': (_0x510786['townLosses'] || 0x0) + (_0x1a1e49['townLosses'] || 0x0),
                    'mafiaLosses': (_0x510786['mafiaLosses'] || 0x0) + (_0x1a1e49['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x4f0427['_userData'], _0xf07e9b);
                const _0x5ca5a4 = _0x4f0427['doc'](_0x4f0427['db'], 'users', _0x4ad8fe);
                _0x4f0427['updateDoc'](_0x5ca5a4, _0xf07e9b)['catch'](() => {
                });
                if (_0x4c6e33 && _0x4c6e33['readyState'] === WebSocket['OPEN']) {
                    _0x4c6e33['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0xf07e9b
                    }));
                }
                _0x1e739d();
            }
        } else if (_0x5a3c29['type'] === 'game_over') {
            _0x3c652f['onStateChange']('LOBBY', ![]);
            _0xc7e182([], 'off');
            _0x38e3df = null;
            _0x5d0144['isDead'] = ![];
            _0x2f812b['clear']();
            _0x2db053['CURRENT_TARGET'] = null;
            _0x37897d = null;
            _0x15e26f = null;
            _0x592666 = null;
            _0x564f67 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x5e35d4();
            _0x4de2b4('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x5a3c29['type'] === 'chat_log') {
            _0x4de2b4(_0x5a3c29['sender'] + ':\x20' + _0x5a3c29['text']);
        } else if (_0x5a3c29['type'] === 'sys_chat') {
            _0x4de2b4(_0x5a3c29['text'], !![]);
        }
    };
}
function _0x4de2b4(_0x2bed55, _0x2e90ef = ![]) {
    const _0x4102bd = document['getElementById']('chat-log-messages');
    const _0x5e23ef = document['getElementById']('chat-log-ui');
    const _0x42a459 = _0x5e23ef['scrollHeight'] - _0x5e23ef['scrollTop'] - _0x5e23ef['clientHeight'] < 0x1e;
    const _0x1ae76d = document['createElement']('div');
    _0x1ae76d['className'] = 'chat-log-line' + (_0x2e90ef ? '\x20sys-msg' : '');
    _0x1ae76d['innerText'] = _0x2bed55;
    _0x4102bd['appendChild'](_0x1ae76d);
    if (_0x42a459) {
        _0x5e23ef['scrollTop'] = _0x5e23ef['scrollHeight'];
    }
    if (_0x4102bd['childElementCount'] > 0xc8) {
        _0x4102bd['removeChild'](_0x4102bd['firstChild']);
    }
}
function _0x1e4330(_0x350948, _0x4007fd, _0x2883d5) {
    const _0x5827d8 = document['createElement']('canvas');
    _0x5827d8['width'] = _0x2883d5;
    _0x5827d8['height'] = _0x2883d5;
    const _0xce49e4 = _0x5827d8['getContext']('2d');
    _0xce49e4['imageSmoothingEnabled'] = ![];
    const _0x55259d = 'assets/' + (_0x350948 || 'body01.png');
    const _0x454b49 = _0x4bcf16(_0x55259d);
    if (_0x454b49['complete'] && _0x454b49['naturalWidth'] > 0x0)
        _0xce49e4['drawImage'](_0x454b49, 0x0, 0x0, _0x2883d5, _0x2883d5);
    if (_0x4007fd) {
        const _0x5170f2 = 'assets/' + _0x4007fd;
        const _0x24ec1a = _0x4bcf16(_0x5170f2);
        if (_0x24ec1a['complete'] && _0x24ec1a['naturalWidth'] > 0x0)
            _0xce49e4['drawImage'](_0x24ec1a, 0x0, 0x0, _0x2883d5, _0x2883d5);
    }
    return _0x5827d8['toDataURL']();
}
function _0x1e739d() {
    const _0x3d0b7d = document['getElementById']('chat-profile-panel');
    if (!_0x3d0b7d)
        return;
    _0x3d0b7d['innerHTML'] = '';
    let _0x2e0035 = ![];
    const _0x2d3183 = [];
    if (_0x5870bb !== null) {
        const _0x33ec92 = _0x1fbf7d || 'body01.png';
        const _0x2937d4 = _0xf68691 || 'eyes4.png';
        const _0x21e7ff = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x2d3183['push']({
            'id': _0x5870bb,
            'name': _0x503b20,
            'body': _0x33ec92,
            'eyes': _0x2937d4,
            'stats': _0x21e7ff
        });
    }
    for (const _0x1e87b6 in _0x543120) {
        const _0xa70c48 = _0x543120[_0x1e87b6];
        const _0x32a394 = _0xa70c48['accountStats'] || null;
        _0x2d3183['push']({
            'id': parseInt(_0x1e87b6),
            'name': _0xa70c48['name'],
            'body': _0xa70c48['body'] || 'body01.png',
            'eyes': _0xa70c48['eyes'] || 'eyes4.png',
            'stats': _0x32a394
        });
    }
    for (const _0x35326d of _0x2d3183) {
        _0x2e0035 = !![];
        const _0x26a95c = _0x1e4330(_0x35326d['body'], _0x35326d['eyes'], 0x20);
        const _0x3505d0 = document['createElement']('div');
        _0x3505d0['className'] = 'chat-pfp-entry';
        const _0x6b880a = document['createElement']('img');
        _0x6b880a['src'] = _0x26a95c;
        _0x6b880a['alt'] = _0x35326d['name'];
        _0x3505d0['appendChild'](_0x6b880a);
        const _0x367e61 = document['createElement']('div');
        _0x367e61['className'] = 'chat-pfp-tooltip';
        let _0x3cc04b = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x35326d['name'] + '</div>';
        const _0x596393 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x52791c = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x2857c0 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x4eb029 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x43d848 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x5db814 = (_0x5523d1, _0x3d9e4f, _0x52b637) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x5523d1 + '<span\x20style=\x22flex:1;\x22>' + _0x3d9e4f + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x52b637 + '</span></div>';
        if (_0x35326d['stats']) {
            _0x3cc04b += _0x5db814(_0x596393, 'Town\x20Wins', _0x35326d['stats']['townWins'] || 0x0);
            _0x3cc04b += _0x5db814(_0x52791c, 'Mafia\x20Wins', _0x35326d['stats']['mafiaWins'] || 0x0);
            _0x3cc04b += _0x5db814(_0x2857c0, 'Deaths', _0x35326d['stats']['deaths'] || 0x0);
            _0x3cc04b += _0x5db814(_0x4eb029, 'Town\x20Losses', _0x35326d['stats']['townLosses'] || 0x0);
            _0x3cc04b += _0x5db814(_0x43d848, 'Mafia\x20Losses', _0x35326d['stats']['mafiaLosses'] || 0x0);
        } else {
            _0x3cc04b += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x367e61['innerHTML'] = _0x3cc04b;
        _0x3505d0['appendChild'](_0x367e61);
        _0x3d0b7d['appendChild'](_0x3505d0);
    }
    const _0x1b09e1 = document['getElementById']('chat-log-wrap');
    if (_0x1b09e1) {
        if (_0x2e0035) {
            _0x1b09e1['classList']['add']('has-profiles');
            _0x3d0b7d['style']['display'] = 'flex';
        } else {
            _0x1b09e1['classList']['remove']('has-profiles');
            _0x3d0b7d['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x1e739d;
let _0x5a3415 = -0x1, _0x46ea53 = -0x1, _0x2d4d14 = -0x1, _0x5c83db = 0x0;
function _0x3ebfb3() {
    if (!_0x5870bb || !_0x4c6e33 || _0x4c6e33['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x506216 = performance['now']();
    const _0x135776 = _0x506216 - _0x5c83db;
    const _0x2e2f88 = Math['abs'](_0x5d0144['x'] - _0x5a3415) > 0.05 || Math['abs'](_0x5d0144['y'] - _0x46ea53) > 0.05 || Math['abs'](_0x5d0144['angle'] - _0x2d4d14) > 0.02;
    if (!_0x2e2f88 && _0x135776 < 0xc8)
        return;
    if (_0x135776 < 0x19)
        return;
    _0x5c83db = _0x506216;
    _0x5a3415 = _0x5d0144['x'];
    _0x46ea53 = _0x5d0144['y'];
    _0x2d4d14 = _0x5d0144['angle'];
    if (!_0x5870bb || !_0x4c6e33 || _0x4c6e33['readyState'] !== WebSocket['OPEN'])
        return;
    _0x4c6e33['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x5d0144['x'],
        'y': _0x5d0144['y'],
        'vx': _0x5d0144['vx'],
        'vy': _0x5d0144['vy'],
        'angle': _0x5d0144['angle'],
        'scale': _0x5d0144['scale'],
        'teleportId': _0x17cb83,
        'clientTimestamp': Date['now']()
    }));
}
function _0x1d7a38() {
    if (_0x5d0144['isDead'])
        return;
    const _0x142ebe = _0x2db053['MAP']['layers']['find'](_0x49bdce => _0x49bdce['name'] === 'walls');
    if (!_0x142ebe)
        return;
    const _0x21bd16 = _0x5d0144['scale'];
    const _0x4d64b4 = _0x5d0144['width'] * _0x21bd16 / 0x2;
    for (let _0x36fb9e = 0x0; _0x36fb9e < 0x3; _0x36fb9e++) {
        let _0x2ac018 = _0x5d0144['x'] + _0x5d0144['width'] / 0x2;
        let _0x4a13a3 = _0x5d0144['y'] + _0x5d0144['height'] / 0x2;
        const _0x3f4a5d = Math['floor']((_0x2ac018 - _0x4d64b4) / _0x2db053['MAP']['tileSize']);
        const _0xf8582d = Math['floor']((_0x2ac018 + _0x4d64b4) / _0x2db053['MAP']['tileSize']);
        const _0x4ff96a = Math['floor']((_0x4a13a3 - _0x4d64b4) / _0x2db053['MAP']['tileSize']);
        const _0x26abd1 = Math['floor']((_0x4a13a3 + _0x4d64b4) / _0x2db053['MAP']['tileSize']);
        for (let _0x4f3e7a = _0x4ff96a; _0x4f3e7a <= _0x26abd1; _0x4f3e7a++) {
            for (let _0x1b2e18 = _0x3f4a5d; _0x1b2e18 <= _0xf8582d; _0x1b2e18++) {
                if (_0x1b2e18 < 0x0 || _0x1b2e18 >= _0x2db053['MAP']['columns'] || _0x4f3e7a < 0x0 || _0x4f3e7a >= _0x2db053['MAP']['rows'])
                    continue;
                if (_0x142ebe['data'][_0x4f3e7a * _0x2db053['MAP']['columns'] + _0x1b2e18] === 0x0)
                    continue;
                const _0x425bb8 = _0x1b2e18 * _0x2db053['MAP']['tileSize'];
                const _0x1ac416 = _0x4f3e7a * _0x2db053['MAP']['tileSize'];
                const _0x2f0e93 = _0x2ac018 < _0x425bb8 ? _0x425bb8 : _0x2ac018 > _0x425bb8 + _0x2db053['MAP']['tileSize'] ? _0x425bb8 + _0x2db053['MAP']['tileSize'] : _0x2ac018;
                const _0xa1821c = _0x4a13a3 < _0x1ac416 ? _0x1ac416 : _0x4a13a3 > _0x1ac416 + _0x2db053['MAP']['tileSize'] ? _0x1ac416 + _0x2db053['MAP']['tileSize'] : _0x4a13a3;
                const _0x10e68e = _0x2ac018 - _0x2f0e93;
                const _0x2b0f78 = _0x4a13a3 - _0xa1821c;
                const _0x2d0d1b = Math['sqrt'](_0x10e68e * _0x10e68e + _0x2b0f78 * _0x2b0f78);
                if (_0x2d0d1b < _0x4d64b4) {
                    if (_0x2d0d1b === 0x0) {
                        const _0x3e9a3c = _0x2ac018 - _0x425bb8;
                        const _0x2101de = _0x425bb8 + _0x2db053['MAP']['tileSize'] - _0x2ac018;
                        const _0x4db9e5 = _0x4a13a3 - _0x1ac416;
                        const _0x2a7113 = _0x1ac416 + _0x2db053['MAP']['tileSize'] - _0x4a13a3;
                        const _0x4e3e6b = Math['min'](_0x3e9a3c, _0x2101de, _0x4db9e5, _0x2a7113);
                        if (_0x4e3e6b === _0x3e9a3c)
                            _0x2ac018 = _0x425bb8 - _0x4d64b4;
                        else if (_0x4e3e6b === _0x2101de)
                            _0x2ac018 = _0x425bb8 + _0x2db053['MAP']['tileSize'] + _0x4d64b4;
                        else if (_0x4e3e6b === _0x4db9e5)
                            _0x4a13a3 = _0x1ac416 - _0x4d64b4;
                        else
                            _0x4a13a3 = _0x1ac416 + _0x2db053['MAP']['tileSize'] + _0x4d64b4;
                    } else {
                        const _0x39f64e = _0x4d64b4 - _0x2d0d1b;
                        _0x2ac018 += _0x10e68e / _0x2d0d1b * _0x39f64e;
                        _0x4a13a3 += _0x2b0f78 / _0x2d0d1b * _0x39f64e;
                        const _0x916e81 = _0x5d0144['vx'] * (_0x10e68e / _0x2d0d1b) + _0x5d0144['vy'] * (_0x2b0f78 / _0x2d0d1b);
                        if (_0x916e81 < 0x0) {
                            _0x5d0144['vx'] -= _0x916e81 * (_0x10e68e / _0x2d0d1b);
                            _0x5d0144['vy'] -= _0x916e81 * (_0x2b0f78 / _0x2d0d1b);
                        }
                    }
                }
            }
        }
        _0x5d0144['x'] = _0x2ac018 - _0x5d0144['width'] / 0x2;
        _0x5d0144['y'] = _0x4a13a3 - _0x5d0144['height'] / 0x2;
    }
}
function _0x4245fe(_0xc19c4e) {
    const _0x55af48 = _0x2db053['MAP']['layers']['find'](_0x319d0a => _0x319d0a['name'] === 'walls');
    if (!_0x55af48)
        return;
    const _0x2417f4 = _0xc19c4e['width'] / 0x2;
    for (let _0x1aad33 = 0x0; _0x1aad33 < 0x2; _0x1aad33++) {
        let _0x23790f = _0xc19c4e['x'] + _0xc19c4e['width'] / 0x2;
        let _0x3d3c5e = _0xc19c4e['y'] + _0xc19c4e['height'] / 0x2;
        const _0x51a174 = Math['floor']((_0x23790f - _0x2417f4) / _0x2db053['MAP']['tileSize']);
        const _0x1dc01f = Math['floor']((_0x23790f + _0x2417f4) / _0x2db053['MAP']['tileSize']);
        const _0x465739 = Math['floor']((_0x3d3c5e - _0x2417f4) / _0x2db053['MAP']['tileSize']);
        const _0x237bb5 = Math['floor']((_0x3d3c5e + _0x2417f4) / _0x2db053['MAP']['tileSize']);
        for (let _0xcdd7d = _0x465739; _0xcdd7d <= _0x237bb5; _0xcdd7d++) {
            for (let _0x43a501 = _0x51a174; _0x43a501 <= _0x1dc01f; _0x43a501++) {
                if (_0x43a501 < 0x0 || _0x43a501 >= _0x2db053['MAP']['columns'] || _0xcdd7d < 0x0 || _0xcdd7d >= _0x2db053['MAP']['rows'])
                    continue;
                if (_0x55af48['data'][_0xcdd7d * _0x2db053['MAP']['columns'] + _0x43a501] === 0x0)
                    continue;
                const _0x235600 = _0x43a501 * _0x2db053['MAP']['tileSize'];
                const _0x99c38e = _0xcdd7d * _0x2db053['MAP']['tileSize'];
                const _0x358ece = _0x23790f < _0x235600 ? _0x235600 : _0x23790f > _0x235600 + _0x2db053['MAP']['tileSize'] ? _0x235600 + _0x2db053['MAP']['tileSize'] : _0x23790f;
                const _0x525cf2 = _0x3d3c5e < _0x99c38e ? _0x99c38e : _0x3d3c5e > _0x99c38e + _0x2db053['MAP']['tileSize'] ? _0x99c38e + _0x2db053['MAP']['tileSize'] : _0x3d3c5e;
                const _0x3edcc6 = _0x23790f - _0x358ece;
                const _0x3553ea = _0x3d3c5e - _0x525cf2;
                const _0x5d87b5 = Math['sqrt'](_0x3edcc6 * _0x3edcc6 + _0x3553ea * _0x3553ea);
                if (_0x5d87b5 < _0x2417f4) {
                    if (_0x5d87b5 === 0x0) {
                        const _0x42232d = _0x23790f - _0x235600;
                        const _0x22522c = _0x235600 + _0x2db053['MAP']['tileSize'] - _0x23790f;
                        const _0xa36921 = _0x3d3c5e - _0x99c38e;
                        const _0x40b8dc = _0x99c38e + _0x2db053['MAP']['tileSize'] - _0x3d3c5e;
                        const _0xbc39 = Math['min'](_0x42232d, _0x22522c, _0xa36921, _0x40b8dc);
                        if (_0xbc39 === _0x42232d)
                            _0x23790f = _0x235600 - _0x2417f4;
                        else if (_0xbc39 === _0x22522c)
                            _0x23790f = _0x235600 + _0x2db053['MAP']['tileSize'] + _0x2417f4;
                        else if (_0xbc39 === _0xa36921)
                            _0x3d3c5e = _0x99c38e - _0x2417f4;
                        else
                            _0x3d3c5e = _0x99c38e + _0x2db053['MAP']['tileSize'] + _0x2417f4;
                    } else {
                        const _0x48865b = _0x2417f4 - _0x5d87b5;
                        _0x23790f += _0x3edcc6 / _0x5d87b5 * _0x48865b;
                        _0x3d3c5e += _0x3553ea / _0x5d87b5 * _0x48865b;
                    }
                }
            }
        }
        _0xc19c4e['x'] = _0x23790f - _0xc19c4e['width'] / 0x2;
        _0xc19c4e['y'] = _0x3d3c5e - _0xc19c4e['height'] / 0x2;
    }
}
function _0x4b94ad(_0xc566e2) {
    const _0x3ab839 = _0xc566e2['width'] / 0x2;
    for (let _0x58eb32 = 0x0; _0x58eb32 < 0x2; _0x58eb32++) {
        let _0x4bb6e8 = _0xc566e2['x'] + _0xc566e2['width'] / 0x2;
        let _0x5d1213 = _0xc566e2['y'] + _0xc566e2['height'] / 0x2;
        for (const _0x393198 of _0x2db053['ENTITIES']) {
            const _0x1634f5 = _0x4bb6e8 < _0x393198['x'] ? _0x393198['x'] : _0x4bb6e8 > _0x393198['x'] + _0x393198['w'] ? _0x393198['x'] + _0x393198['w'] : _0x4bb6e8;
            const _0x3699db = _0x5d1213 < _0x393198['y'] ? _0x393198['y'] : _0x5d1213 > _0x393198['y'] + _0x393198['h'] ? _0x393198['y'] + _0x393198['h'] : _0x5d1213;
            const _0x2f0e61 = _0x4bb6e8 - _0x1634f5;
            const _0x241a8d = _0x5d1213 - _0x3699db;
            const _0xbca4cb = Math['sqrt'](_0x2f0e61 * _0x2f0e61 + _0x241a8d * _0x241a8d);
            if (_0xbca4cb < _0x3ab839 && _0xbca4cb > 0x0) {
                const _0x18fe9c = _0x3ab839 - _0xbca4cb;
                const _0x3b5656 = _0x2f0e61 / _0xbca4cb;
                const _0x45c228 = _0x241a8d / _0xbca4cb;
                _0x4bb6e8 += _0x3b5656 * _0x18fe9c;
                _0x5d1213 += _0x45c228 * _0x18fe9c;
            } else if (_0xbca4cb === 0x0) {
                const _0x56c628 = _0x4bb6e8 - _0x393198['x'];
                const _0xc46925 = _0x393198['x'] + _0x393198['w'] - _0x4bb6e8;
                const _0x4e7746 = _0x5d1213 - _0x393198['y'];
                const _0x1f319e = _0x393198['y'] + _0x393198['h'] - _0x5d1213;
                const _0x1a927b = Math['min'](_0x56c628, _0xc46925, _0x4e7746, _0x1f319e);
                if (_0x1a927b === _0x56c628)
                    _0x4bb6e8 = _0x393198['x'] - _0x3ab839;
                else if (_0x1a927b === _0xc46925)
                    _0x4bb6e8 = _0x393198['x'] + _0x393198['w'] + _0x3ab839;
                else if (_0x1a927b === _0x4e7746)
                    _0x5d1213 = _0x393198['y'] - _0x3ab839;
                else
                    _0x5d1213 = _0x393198['y'] + _0x393198['h'] + _0x3ab839;
            }
        }
        _0xc566e2['x'] = _0x4bb6e8 - _0xc566e2['width'] / 0x2;
        _0xc566e2['y'] = _0x5d1213 - _0xc566e2['height'] / 0x2;
    }
}
function _0x76aac1() {
    if (_0x5d0144['isDead'])
        return;
    const _0xbecb74 = _0x5d0144['width'] / 0x2;
    const _0x219620 = _0x5d0144['x'] + _0x5d0144['width'] / 0x2;
    const _0x50de6e = _0x5d0144['y'] + _0x5d0144['height'] / 0x2;
    for (const _0xd53b6 in _0x543120) {
        const _0x2bed2 = _0x543120[_0xd53b6];
        if (_0x2bed2['isDead'])
            continue;
        const _0x6b5788 = _0x2bed2['width'] / 0x2;
        const _0x38ce97 = _0xbecb74 + _0x6b5788;
        const _0x5dfb5e = (_0x2bed2['renderX'] ?? _0x2bed2['x']) + _0x2bed2['width'] / 0x2;
        const _0x5d2656 = (_0x2bed2['renderY'] ?? _0x2bed2['y']) + _0x2bed2['height'] / 0x2;
        const _0x4ee60f = _0x219620 - _0x5dfb5e;
        const _0x206030 = _0x50de6e - _0x5d2656;
        const _0x153220 = Math['sqrt'](_0x4ee60f * _0x4ee60f + _0x206030 * _0x206030);
        if (_0x153220 > 0x0 && _0x153220 < _0x38ce97) {
            const _0xb32a69 = _0x38ce97 - _0x153220;
            const _0x5c09f6 = _0x4ee60f / _0x153220;
            const _0x3833db = _0x206030 / _0x153220;
            _0x5d0144['x'] += _0x5c09f6 * (_0xb32a69 * 0.25);
            _0x5d0144['y'] += _0x3833db * (_0xb32a69 * 0.25);
            _0x2bed2['x'] -= _0x5c09f6 * (_0xb32a69 * 0.75);
            _0x2bed2['y'] -= _0x3833db * (_0xb32a69 * 0.75);
            _0x4245fe(_0x2bed2);
            _0x4b94ad(_0x2bed2);
            if (_0x2bed2['renderX'] !== undefined) {
                _0x2bed2['renderX'] = _0x2bed2['x'];
                _0x2bed2['renderY'] = _0x2bed2['y'];
            }
            const _0x1e5eb8 = _0x5d0144['vx'] * _0x5c09f6 + _0x5d0144['vy'] * _0x3833db;
            if (_0x1e5eb8 < 0x0) {
                _0x5d0144['vx'] -= _0x1e5eb8 * _0x5c09f6 * 0.25;
                _0x5d0144['vy'] -= _0x1e5eb8 * _0x3833db * 0.25;
            }
        }
    }
    _0x1d7a38();
    _0x53fa4a();
}
function _0x53fa4a() {
    if (_0x5d0144['isDead'])
        return;
    const _0x34845d = _0x5d0144['scale'];
    const _0xdf0a75 = _0x5d0144['width'] * _0x34845d / 0x2;
    for (let _0x46e6fc = 0x0; _0x46e6fc < 0x2; _0x46e6fc++) {
        let _0x44e493 = _0x5d0144['x'] + _0x5d0144['width'] / 0x2;
        let _0x5c40ea = _0x5d0144['y'] + _0x5d0144['height'] / 0x2;
        for (const _0x5d20fe of _0x2db053['ENTITIES']) {
            const _0x108d1c = _0x44e493 < _0x5d20fe['x'] ? _0x5d20fe['x'] : _0x44e493 > _0x5d20fe['x'] + _0x5d20fe['w'] ? _0x5d20fe['x'] + _0x5d20fe['w'] : _0x44e493;
            const _0xc8bb9f = _0x5c40ea < _0x5d20fe['y'] ? _0x5d20fe['y'] : _0x5c40ea > _0x5d20fe['y'] + _0x5d20fe['h'] ? _0x5d20fe['y'] + _0x5d20fe['h'] : _0x5c40ea;
            const _0x450187 = _0x44e493 - _0x108d1c;
            const _0x45d069 = _0x5c40ea - _0xc8bb9f;
            const _0x33eb9c = Math['sqrt'](_0x450187 * _0x450187 + _0x45d069 * _0x45d069);
            if (_0x33eb9c < _0xdf0a75 && _0x33eb9c > 0x0) {
                const _0x12519d = _0xdf0a75 - _0x33eb9c;
                const _0x3c98e7 = _0x450187 / _0x33eb9c;
                const _0x2d5b5a = _0x45d069 / _0x33eb9c;
                _0x44e493 += _0x3c98e7 * _0x12519d;
                _0x5c40ea += _0x2d5b5a * _0x12519d;
                const _0x3b059a = _0x5d0144['vx'] * _0x3c98e7 + _0x5d0144['vy'] * _0x2d5b5a;
                if (_0x3b059a < 0x0) {
                    _0x5d0144['vx'] -= _0x3b059a * _0x3c98e7;
                    _0x5d0144['vy'] -= _0x3b059a * _0x2d5b5a;
                }
            } else if (_0x33eb9c === 0x0) {
                const _0x400273 = _0x44e493 - _0x5d20fe['x'];
                const _0x12cf4d = _0x5d20fe['x'] + _0x5d20fe['w'] - _0x44e493;
                const _0x1467dd = _0x5c40ea - _0x5d20fe['y'];
                const _0x50462b = _0x5d20fe['y'] + _0x5d20fe['h'] - _0x5c40ea;
                const _0x3f5409 = Math['min'](_0x400273, _0x12cf4d, _0x1467dd, _0x50462b);
                if (_0x3f5409 === _0x400273)
                    _0x44e493 = _0x5d20fe['x'] - _0xdf0a75;
                else if (_0x3f5409 === _0x12cf4d)
                    _0x44e493 = _0x5d20fe['x'] + _0x5d20fe['w'] + _0xdf0a75;
                else if (_0x3f5409 === _0x1467dd)
                    _0x5c40ea = _0x5d20fe['y'] - _0xdf0a75;
                else
                    _0x5c40ea = _0x5d20fe['y'] + _0x5d20fe['h'] + _0xdf0a75;
            }
        }
        _0x5d0144['x'] = _0x44e493 - _0x5d0144['width'] / 0x2;
        _0x5d0144['y'] = _0x5c40ea - _0x5d0144['height'] / 0x2;
    }
}
function _0x1f1133(_0x2daab0, _0x432574) {
    const _0x32975c = _0x2db053['MAP']['layers']['find'](_0x20bb67 => _0x20bb67['name'] === 'trees');
    if (!_0x32975c)
        return ![];
    const _0x33c4b0 = Math['floor'](_0x2daab0 / _0x2db053['MAP']['tileSize']);
    const _0x4909fd = Math['floor'](_0x432574 / _0x2db053['MAP']['tileSize']);
    if (_0x33c4b0 < 0x0 || _0x33c4b0 >= _0x2db053['MAP']['columns'] || _0x4909fd < 0x0 || _0x4909fd >= _0x2db053['MAP']['rows'])
        return ![];
    return _0x32975c['data'][_0x4909fd * _0x2db053['MAP']['columns'] + _0x33c4b0] === 0xb;
}
let _0x56077d = null;
function _0x29e14a() {
    const _0x4e7beb = _0x2db053['MAP'];
    const _0x4c3b84 = _0x4e7beb['layers']['find'](_0x31bb85 => _0x31bb85['name'] === 'floor2');
    const _0xfba49c = _0x4e7beb['layers']['find'](_0x58f56 => _0x58f56['name'] === 'walls');
    if (!_0x4c3b84 || !_0xfba49c) {
        _0x56077d = null;
        return;
    }
    const _0x578051 = _0x4e7beb['columns'];
    const _0x32facb = _0x4e7beb['rows'];
    const _0x136588 = [];
    const _0x41c781 = [];
    const _0x3c7777 = new Set();
    for (let _0x5cbc30 = 0x0; _0x5cbc30 < _0x32facb; _0x5cbc30++) {
        for (let _0x3a5ad8 = 0x0; _0x3a5ad8 < _0x578051; _0x3a5ad8++) {
            const _0x1fa144 = _0x5cbc30 * _0x578051 + _0x3a5ad8;
            const _0x493b11 = _0x4c3b84['data'][_0x1fa144];
            const _0x3af9b8 = _0xfba49c['data'][_0x1fa144];
            if (_0x493b11 === 0x2 || _0x493b11 === 0x4) {
                _0x136588['push']({
                    'c': _0x3a5ad8,
                    'r': _0x5cbc30
                });
                if (_0x3af9b8 !== 0x0)
                    _0x41c781['push']({
                        'c': _0x3a5ad8,
                        'r': _0x5cbc30
                    });
            }
            if (_0x3af9b8 !== 0x0)
                _0x3c7777['add'](_0x3a5ad8 + ',' + _0x5cbc30);
        }
    }
    const _0x175075 = new Set(_0x136588['map'](_0x43a147 => _0x43a147['c'] + ',' + _0x43a147['r']));
    const _0x258684 = [
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
                c: _0x2f984d,
                r: _0x1e7cbd
            } of _0x136588) {
        for (const [_0x32d18f, _0x5d766f] of _0x258684) {
            const _0x5b4fea = _0x2f984d + _0x32d18f, _0x25a053 = _0x1e7cbd + _0x5d766f;
            const _0x3bb4c2 = _0x5b4fea + ',' + _0x25a053;
            if (!_0x175075['has'](_0x3bb4c2))
                _0x3c7777['add'](_0x3bb4c2);
        }
    }
    _0x56077d = {
        'wallSet': _0x3c7777,
        'floorTiles': _0x136588,
        'wallTiles': _0x41c781,
        'interiorSet': _0x175075
    };
}
function _0x565396() {
    const _0x3e6a8f = _0x2db053['MAP']['layers']['find'](_0x849a24 => _0x849a24['name'] === 'floor2');
    if (!_0x3e6a8f)
        return ![];
    const _0xbbdcf4 = Math['floor']((_0x5d0144['x'] + _0x5d0144['width'] / 0x2) / _0x2db053['MAP']['tileSize']);
    const _0x4949cb = Math['floor']((_0x5d0144['y'] + _0x5d0144['height'] / 0x2) / _0x2db053['MAP']['tileSize']);
    if (_0xbbdcf4 < 0x0 || _0xbbdcf4 >= _0x2db053['MAP']['columns'] || _0x4949cb < 0x0 || _0x4949cb >= _0x2db053['MAP']['rows'])
        return ![];
    const _0x45053c = _0x3e6a8f['data'][_0x4949cb * _0x2db053['MAP']['columns'] + _0xbbdcf4];
    return _0x45053c === 0x2;
}
function _0x4e97b5() {
    if (_0x5d0144['isDead']) {
        _0x2db053['SHADOW']['polygon'] = null;
        return;
    }
    const _0x527210 = _0x2db053['MAP'];
    const _0x3c3d8b = _0x2db053['SHADOW'];
    const _0x5e6766 = _0x527210['tileSize'];
    if (!_0x56077d)
        _0x29e14a();
    if (!_0x56077d) {
        _0x3c3d8b['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x2ae606,
        floorTiles: _0x2465e2
    } = _0x56077d;
    if (_0x2465e2['length'] === 0x0) {
        _0x3c3d8b['polygon'] = null;
        return;
    }
    if (!_0x565396()) {
        _0x3c3d8b['polygon'] = null;
        return;
    }
    const _0x3993c1 = _0x5d0144['x'] + _0x5d0144['width'] / 0x2;
    const _0xb2d54e = _0x5d0144['y'] + _0x5d0144['height'] / 0x2;
    if (!_0x56077d['_bounds']) {
        let _0x26724f = Infinity, _0x46ae6f = -Infinity, _0x4c5989 = Infinity, _0x14f0de = -Infinity;
        for (const {
                    c: _0x342e5b,
                    r: _0x1c1d33
                } of _0x2465e2) {
            if (_0x342e5b < _0x26724f)
                _0x26724f = _0x342e5b;
            if (_0x342e5b > _0x46ae6f)
                _0x46ae6f = _0x342e5b;
            if (_0x1c1d33 < _0x4c5989)
                _0x4c5989 = _0x1c1d33;
            if (_0x1c1d33 > _0x14f0de)
                _0x14f0de = _0x1c1d33;
        }
        _0x56077d['_bounds'] = {
            'minC': Math['max'](0x0, _0x26724f - 0x1),
            'maxC': Math['min'](_0x527210['columns'] - 0x1, _0x46ae6f + 0x1),
            'minR': Math['max'](0x0, _0x4c5989 - 0x1),
            'maxR': Math['min'](_0x527210['rows'] - 0x1, _0x14f0de + 0x1)
        };
        const _0x4d3d98 = [];
        for (let _0x4c0b01 = _0x56077d['_bounds']['minR']; _0x4c0b01 <= _0x56077d['_bounds']['maxR']; _0x4c0b01++) {
            for (let _0x6f6d0e = _0x56077d['_bounds']['minC']; _0x6f6d0e <= _0x56077d['_bounds']['maxC']; _0x6f6d0e++) {
                if (_0x2ae606['has'](_0x6f6d0e + ',' + _0x4c0b01))
                    _0x4d3d98['push'](_0x6f6d0e, _0x4c0b01);
            }
        }
        _0x56077d['_wallArr'] = _0x4d3d98;
    }
    const {
        minC: _0x1c7aa7,
        maxC: _0x36ab0e,
        minR: _0x5e6278,
        maxR: _0x1540a8
    } = _0x56077d['_bounds'];
    const _0x39ba8d = _0x56077d['_wallArr'];
    const _0x6da07b = 0.001;
    const _0x48a074 = new Set();
    const _0x4069fd = [];
    for (let _0x27d67f = 0x0; _0x27d67f < _0x39ba8d['length']; _0x27d67f += 0x2) {
        const _0x59b029 = _0x39ba8d[_0x27d67f], _0x56c6e6 = _0x39ba8d[_0x27d67f + 0x1];
        const _0x13f8b3 = [
            _0x59b029 * _0x5e6766,
            _0x56c6e6 * _0x5e6766,
            _0x59b029 * _0x5e6766 + _0x5e6766,
            _0x56c6e6 * _0x5e6766,
            _0x59b029 * _0x5e6766,
            _0x56c6e6 * _0x5e6766 + _0x5e6766,
            _0x59b029 * _0x5e6766 + _0x5e6766,
            _0x56c6e6 * _0x5e6766 + _0x5e6766
        ];
        for (let _0x1330cf = 0x0; _0x1330cf < _0x13f8b3['length']; _0x1330cf += 0x2) {
            const _0x217236 = _0x13f8b3[_0x1330cf], _0x1b380a = _0x13f8b3[_0x1330cf + 0x1];
            const _0x224f43 = Math['atan2'](_0x1b380a - _0xb2d54e, _0x217236 - _0x3993c1);
            const _0x377941 = Math['round'](_0x224f43 * 0x4e20);
            if (!_0x48a074['has'](_0x377941 - 0x1)) {
                _0x48a074['add'](_0x377941 - 0x1);
                _0x4069fd['push'](_0x224f43 - _0x6da07b);
            }
            if (!_0x48a074['has'](_0x377941)) {
                _0x48a074['add'](_0x377941);
                _0x4069fd['push'](_0x224f43);
            }
            if (!_0x48a074['has'](_0x377941 + 0x1)) {
                _0x48a074['add'](_0x377941 + 0x1);
                _0x4069fd['push'](_0x224f43 + _0x6da07b);
            }
        }
    }
    _0x4069fd['sort']((_0x2f6783, _0x5d385c) => _0x2f6783 - _0x5d385c);
    const _0x42544c = Math['hypot']((_0x36ab0e - _0x1c7aa7 + 0x2) * _0x5e6766, (_0x1540a8 - _0x5e6278 + 0x2) * _0x5e6766);
    const _0x57959c = _0x278d13 => {
        const _0x54809c = Math['cos'](_0x278d13);
        const _0x33c2d7 = Math['sin'](_0x278d13);
        let _0x466a4e = _0x42544c;
        for (let _0x1e65aa = 0x0; _0x1e65aa < _0x39ba8d['length']; _0x1e65aa += 0x2) {
            const _0x1bdae2 = _0x39ba8d[_0x1e65aa], _0xa2c652 = _0x39ba8d[_0x1e65aa + 0x1];
            const _0x18f052 = _0x1bdae2 * _0x5e6766, _0x123df7 = _0xa2c652 * _0x5e6766;
            const _0x29e865 = _0x18f052 + _0x5e6766, _0x443aaa = _0x123df7 + _0x5e6766;
            const _0x522467 = _0x18f052 + _0x5e6766 * 0.5, _0x35cd82 = _0x123df7 + _0x5e6766 * 0.5;
            const _0x105ca8 = Math['abs'](_0x522467 - _0x3993c1) + Math['abs'](_0x35cd82 - _0xb2d54e);
            if (_0x105ca8 > _0x466a4e + _0x5e6766 * 1.5)
                continue;
            let _0x54d12d, _0x46f970, _0x13ff3a;
            _0x54d12d = -_0x33c2d7 * _0x5e6766;
            if (Math['abs'](_0x54d12d) >= 1e-10) {
                _0x46f970 = -(_0x123df7 - _0xb2d54e) * _0x5e6766 / _0x54d12d;
                _0x13ff3a = ((_0x18f052 - _0x3993c1) * _0x33c2d7 - (_0x123df7 - _0xb2d54e) * _0x54809c) / _0x54d12d;
                if (_0x46f970 > 0.001 && _0x13ff3a >= 0x0 && _0x13ff3a <= 0x1 && _0x46f970 < _0x466a4e)
                    _0x466a4e = _0x46f970;
            }
            _0x54d12d = _0x54809c * _0x5e6766;
            if (Math['abs'](_0x54d12d) >= 1e-10) {
                _0x46f970 = (_0x29e865 - _0x3993c1) * _0x5e6766 / _0x54d12d;
                _0x13ff3a = ((_0x29e865 - _0x3993c1) * _0x33c2d7 - (_0x123df7 - _0xb2d54e) * _0x54809c) / _0x54d12d;
                if (_0x46f970 > 0.001 && _0x13ff3a >= 0x0 && _0x13ff3a <= 0x1 && _0x46f970 < _0x466a4e)
                    _0x466a4e = _0x46f970;
            }
            _0x54d12d = _0x33c2d7 * _0x5e6766;
            if (Math['abs'](_0x54d12d) >= 1e-10) {
                _0x46f970 = (_0x443aaa - _0xb2d54e) * _0x5e6766 / _0x54d12d;
                _0x13ff3a = ((_0x29e865 - _0x3993c1) * _0x33c2d7 - (_0x443aaa - _0xb2d54e) * _0x54809c) / _0x54d12d;
                if (_0x46f970 > 0.001 && _0x13ff3a >= 0x0 && _0x13ff3a <= 0x1 && _0x46f970 < _0x466a4e)
                    _0x466a4e = _0x46f970;
            }
            _0x54d12d = -_0x54809c * _0x5e6766;
            if (Math['abs'](_0x54d12d) >= 1e-10) {
                _0x46f970 = -(_0x18f052 - _0x3993c1) * _0x5e6766 / _0x54d12d;
                _0x13ff3a = ((_0x18f052 - _0x3993c1) * _0x33c2d7 - (_0x443aaa - _0xb2d54e) * _0x54809c) / _0x54d12d;
                if (_0x46f970 > 0.001 && _0x13ff3a >= 0x0 && _0x13ff3a <= 0x1 && _0x46f970 < _0x466a4e)
                    _0x466a4e = _0x46f970;
            }
        }
        const _0x5599eb = _0x466a4e < _0x42544c ? _0x466a4e + 0x2 : _0x466a4e;
        return {
            'x': _0x3993c1 + _0x54809c * _0x5599eb,
            'y': _0xb2d54e + _0x33c2d7 * _0x5599eb
        };
    };
    const _0x277373 = [];
    for (let _0x48655e = 0x0; _0x48655e < _0x4069fd['length']; _0x48655e++) {
        const _0x499e24 = _0x57959c(_0x4069fd[_0x48655e]);
        _0x277373['push'](_0x499e24['x'], _0x499e24['y']);
    }
    _0x3c3d8b['polygon'] = _0x277373['length'] >= 0x6 ? _0x277373 : null;
}
function _0x318162(_0x51b7d6, _0x2dbbcd, _0x3fcddd) {
    if (_0x5d0144['isDead'])
        return;
    if (!_0x56077d)
        return;
    const {
        floorTiles: _0x379c92,
        wallTiles: _0x5b0b78
    } = _0x56077d;
    if (_0x379c92['length'] === 0x0)
        return;
    const _0x5ecafd = _0x2db053['SHADOW'];
    const _0x3b8629 = _0x2db053['MAP']['tileSize'];
    const _0x5c27b8 = _0x2db053['CAMERA']['width'];
    const _0x1abf12 = _0x2db053['CAMERA']['height'];
    if (!_0x2db053['SHADOW']['_buf'] || _0x2db053['SHADOW']['_buf']['width'] !== _0x5c27b8 || _0x2db053['SHADOW']['_buf']['height'] !== _0x1abf12) {
        _0x2db053['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x2db053['SHADOW']['_buf']['width'] = _0x5c27b8;
        _0x2db053['SHADOW']['_buf']['height'] = _0x1abf12;
    }
    const _0x1a2e32 = _0x2db053['SHADOW']['_buf'];
    const _0x4dca2d = _0x1a2e32['getContext']('2d');
    _0x4dca2d['clearRect'](0x0, 0x0, _0x5c27b8, _0x1abf12);
    _0x4dca2d['fillStyle'] = 'rgba(0,0,0,0.92)';
    _0x4dca2d['beginPath']();
    for (const {
                c: _0x448944,
                r: _0x18415a
            } of _0x379c92) {
        const _0x1140f7 = Math['round'](_0x448944 * _0x3b8629 - _0x2dbbcd), _0x43897a = Math['round'](_0x18415a * _0x3b8629 - _0x3fcddd);
        if (_0x1140f7 > _0x5c27b8 || _0x43897a > _0x1abf12 || _0x1140f7 + _0x3b8629 < 0x0 || _0x43897a + _0x3b8629 < 0x0)
            continue;
        _0x4dca2d['rect'](_0x1140f7, _0x43897a, _0x3b8629 + 0x1, _0x3b8629 + 0x1);
    }
    _0x4dca2d['fill']();
    if (_0x5b0b78['length'] > 0x0) {
        _0x4dca2d['globalCompositeOperation'] = 'destination-out';
        _0x4dca2d['fillStyle'] = 'rgba(0,0,0,1)';
        _0x4dca2d['beginPath']();
        for (const {
                    c: _0x55dd40,
                    r: _0x3375b0
                } of _0x5b0b78) {
            const _0x109504 = Math['round'](_0x55dd40 * _0x3b8629 - _0x2dbbcd), _0x3a5088 = Math['round'](_0x3375b0 * _0x3b8629 - _0x3fcddd);
            if (_0x109504 > _0x5c27b8 || _0x3a5088 > _0x1abf12 || _0x109504 + _0x3b8629 < 0x0 || _0x3a5088 + _0x3b8629 < 0x0)
                continue;
            _0x4dca2d['rect'](_0x109504, _0x3a5088, _0x3b8629, _0x3b8629);
        }
        _0x4dca2d['fill']();
        _0x4dca2d['globalCompositeOperation'] = 'source-over';
    }
    if (_0x5ecafd['polygon'] && _0x5ecafd['polygon']['length'] >= 0x6) {
        _0x4dca2d['globalCompositeOperation'] = 'destination-out';
        const _0x736050 = _0x5ecafd['polygon'];
        _0x4dca2d['save']();
        _0x4dca2d['shadowBlur'] = 0xa;
        _0x4dca2d['shadowColor'] = 'rgba(0,0,0,1)';
        _0x4dca2d['beginPath']();
        _0x4dca2d['moveTo'](_0x736050[0x0] - _0x2dbbcd, _0x736050[0x1] - _0x3fcddd);
        for (let _0x5593b8 = 0x2; _0x5593b8 < _0x736050['length']; _0x5593b8 += 0x2) {
            _0x4dca2d['lineTo'](_0x736050[_0x5593b8] - _0x2dbbcd, _0x736050[_0x5593b8 + 0x1] - _0x3fcddd);
        }
        _0x4dca2d['closePath']();
        _0x4dca2d['fill']();
        _0x4dca2d['restore']();
        _0x4dca2d['beginPath']();
        _0x4dca2d['moveTo'](_0x736050[0x0] - _0x2dbbcd, _0x736050[0x1] - _0x3fcddd);
        for (let _0x4ef732 = 0x2; _0x4ef732 < _0x736050['length']; _0x4ef732 += 0x2) {
            _0x4dca2d['lineTo'](_0x736050[_0x4ef732] - _0x2dbbcd, _0x736050[_0x4ef732 + 0x1] - _0x3fcddd);
        }
        _0x4dca2d['closePath']();
        _0x4dca2d['fill']();
        _0x4dca2d['globalCompositeOperation'] = 'source-over';
    }
    _0x51b7d6['drawImage'](_0x1a2e32, 0x0, 0x0);
}
function _0xc1f145(_0x4d8ea9) {
    let _0x110843 = 0x0, _0x84b571 = 0x0;
    const _0x41c7e1 = _0x2db053['INPUTS']['mouseX'] / _0x2db053['SYSTEM']['viewScale'];
    const _0x13d520 = _0x2db053['INPUTS']['mouseY'] / _0x2db053['SYSTEM']['viewScale'];
    const _0x54ecb4 = _0x5d0144['x'] - _0x2db053['CAMERA']['x'] + _0x5d0144['width'] / 0x2;
    const _0x56ae2e = _0x5d0144['y'] - _0x2db053['CAMERA']['y'] + _0x5d0144['height'] / 0x2;
    const _0x237846 = Math['atan2'](_0x13d520 - _0x56ae2e, _0x41c7e1 - _0x54ecb4);
    if (_0x2dcd9d !== 0x0 || _0x3eefa9 !== 0x0) {
        _0x110843 = _0x2dcd9d;
        _0x84b571 = _0x3eefa9;
    } else if (_0x2ce755) {
        let _0x2f6826 = 0x0, _0x5358da = 0x0;
        if (_0x2db053['INPUTS']['keys']['w'] || _0x2db053['INPUTS']['keys']['arrowup'])
            _0x2f6826 += 0x1;
        if (_0x2db053['INPUTS']['keys']['s'] || _0x2db053['INPUTS']['keys']['arrowdown'])
            _0x2f6826 -= 0x1;
        if (_0x2db053['INPUTS']['keys']['d'] || _0x2db053['INPUTS']['keys']['arrowright'])
            _0x5358da += 0x1;
        if (_0x2db053['INPUTS']['keys']['a'] || _0x2db053['INPUTS']['keys']['arrowleft'])
            _0x5358da -= 0x1;
        if (_0x2f6826 !== 0x0 || _0x5358da !== 0x0) {
            const _0x2fbbbb = _0x237846 + Math['atan2'](_0x5358da, _0x2f6826);
            _0x110843 = Math['cos'](_0x2fbbbb);
            _0x84b571 = Math['sin'](_0x2fbbbb);
        }
    } else {
        if (_0x2db053['INPUTS']['keys']['w'] || _0x2db053['INPUTS']['keys']['arrowup'])
            _0x84b571 -= 0x1;
        if (_0x2db053['INPUTS']['keys']['s'] || _0x2db053['INPUTS']['keys']['arrowdown'])
            _0x84b571 += 0x1;
        if (_0x2db053['INPUTS']['keys']['a'] || _0x2db053['INPUTS']['keys']['arrowleft'])
            _0x110843 -= 0x1;
        if (_0x2db053['INPUTS']['keys']['d'] || _0x2db053['INPUTS']['keys']['arrowright'])
            _0x110843 += 0x1;
        const _0x2a9b73 = _0x110843 !== 0x0 || _0x84b571 !== 0x0;
        if (_0x2a9b73) {
            const _0x2474aa = Math['sqrt'](_0x110843 * _0x110843 + _0x84b571 * _0x84b571);
            _0x110843 /= _0x2474aa;
            _0x84b571 /= _0x2474aa;
        }
    }
    if (_0x2db053['GAME_STATE'] === 'NIGHT' && _0x38e3df === 'Skinwalker') {
        if (_0x2db053['NIGHT_ABILITY_OPEN'] || !_0x2db053['CURRENT_TARGET']) {
            _0x110843 = 0x0;
            _0x84b571 = 0x0;
            _0x5d0144['vx'] = 0x0;
            _0x5d0144['vy'] = 0x0;
            _0x5d0144['x'] = _0x2db053['MAP']['columns'] * _0x2db053['MAP']['tileSize'] / 0x2 - _0x5d0144['width'] / 0x2;
            _0x5d0144['y'] = _0x2db053['MAP']['rows'] * _0x2db053['MAP']['tileSize'] / 0x2 - _0x5d0144['height'] / 0x2;
        }
    }
    const _0x558b56 = _0x110843 !== 0x0 || _0x84b571 !== 0x0;
    const _0x1a5c54 = (_0x2db053['INPUTS']['keys']['shift'] || _0x4479d6 || _0x516a3e) && _0x558b56;
    _0x5d0144['bopTimer'] = _0x1a5c54 ? _0x5d0144['bopTimer'] + _0x4d8ea9 : 0x0;
    _0x5d0144['scale'] = 0x1 + (_0x5d0144['bopTimer'] > 0x0 ? Math['sin'](_0x5d0144['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x10cd2b = Math['pow'](0.001, _0x4d8ea9);
    const _0x326b69 = _0x1a5c54 ? 0x74a : 0x5d5;
    _0x5d0144['vx'] += _0x110843 * _0x326b69 * _0x4d8ea9;
    _0x5d0144['vy'] += _0x84b571 * _0x326b69 * _0x4d8ea9;
    _0x5d0144['vx'] *= _0x10cd2b;
    _0x5d0144['vy'] *= _0x10cd2b;
    _0x5d0144['x'] += _0x5d0144['vx'] * _0x4d8ea9;
    _0x5d0144['y'] += _0x5d0144['vy'] * _0x4d8ea9;
    for (let _0x504d47 = 0x0; _0x504d47 < 0x3; _0x504d47++)
        _0x1d7a38();
    for (let _0x291626 = 0x0; _0x291626 < 0x2; _0x291626++)
        _0x53fa4a();
    for (let _0x1d8330 = 0x0; _0x1d8330 < 0x2; _0x1d8330++)
        _0x76aac1();
    if (_0x5d0144['x'] < 0x0)
        _0x5d0144['x'] = 0x0;
    if (_0x5d0144['y'] < 0x0)
        _0x5d0144['y'] = 0x0;
    if (_0x5d0144['x'] + _0x5d0144['width'] > _0x2db053['MAP']['columns'] * _0x2db053['MAP']['tileSize'])
        _0x5d0144['x'] = _0x2db053['MAP']['columns'] * _0x2db053['MAP']['tileSize'] - _0x5d0144['width'];
    if (_0x5d0144['y'] + _0x5d0144['height'] > _0x2db053['MAP']['rows'] * _0x2db053['MAP']['tileSize'])
        _0x5d0144['y'] = _0x2db053['MAP']['rows'] * _0x2db053['MAP']['tileSize'] - _0x5d0144['height'];
    if (_0x5b48ef) {
        _0x5d0144['angle'] = _0x3f9a43 + Math['PI'] / 0x2;
    } else if (_0x2dcd9d !== 0x0 || _0x3eefa9 !== 0x0) {
        _0x5d0144['angle'] = Math['atan2'](_0x3eefa9, _0x2dcd9d) + Math['PI'] / 0x2;
    } else if (!_0x43263f) {
        _0x5d0144['angle'] = _0x237846 + Math['PI'] / 0x2;
    }
    const _0x1a33cb = _0x5d0144['x'] + _0x5d0144['width'] / 0x2 - _0x2db053['CAMERA']['width'] / 0x2;
    const _0x2dc7f7 = _0x5d0144['y'] + _0x5d0144['height'] / 0x2 - _0x2db053['CAMERA']['height'] / 0x2;
    if (_0x2db053['CAMERA']['x'] === null || isNaN(_0x2db053['CAMERA']['x']) || !isFinite(_0x2db053['CAMERA']['x'])) {
        _0x2db053['CAMERA']['x'] = _0x1a33cb;
        _0x2db053['CAMERA']['y'] = _0x2dc7f7;
    } else {
        const _0x400831 = 0x1 - Math['exp'](-Math['max'](0x0, _0x4d8ea9) * 0x28);
        _0x2db053['CAMERA']['x'] += (_0x1a33cb - _0x2db053['CAMERA']['x']) * _0x400831;
        _0x2db053['CAMERA']['y'] += (_0x2dc7f7 - _0x2db053['CAMERA']['y']) * _0x400831;
    }
    for (const _0x56a68f in _0x543120) {
        const _0xc25e33 = _0x543120[_0x56a68f];
        if (_0xc25e33['renderX'] === undefined) {
            _0xc25e33['renderX'] = _0xc25e33['x'];
            _0xc25e33['renderY'] = _0xc25e33['y'];
            _0xc25e33['renderAngle'] = _0xc25e33['angle'] || 0x0;
        }
        const _0x579ea7 = _0xc25e33['x'] + (_0xc25e33['vx'] || 0x0) * _0x4d8ea9;
        const _0x47f429 = _0xc25e33['y'] + (_0xc25e33['vy'] || 0x0) * _0x4d8ea9;
        _0xc25e33['x'] = _0x579ea7;
        _0xc25e33['y'] = _0x47f429;
        const _0x57e3c6 = 0x1 - Math['exp'](-_0x4d8ea9 * 0x12);
        const _0x3917b0 = _0xc25e33['x'] - _0xc25e33['renderX'], _0x18b5c5 = _0xc25e33['y'] - _0xc25e33['renderY'];
        const _0x5015c1 = Math['sqrt'](_0x3917b0 * _0x3917b0 + _0x18b5c5 * _0x18b5c5);
        const _0x5cdce0 = 0xc8;
        if (_0x5015c1 > _0x5cdce0) {
            _0xc25e33['renderX'] = _0xc25e33['x'] - _0x3917b0 / _0x5015c1 * _0x5cdce0;
            _0xc25e33['renderY'] = _0xc25e33['y'] - _0x18b5c5 / _0x5015c1 * _0x5cdce0;
        }
        _0xc25e33['renderX'] += (_0xc25e33['x'] - _0xc25e33['renderX']) * _0x57e3c6;
        _0xc25e33['renderY'] += (_0xc25e33['y'] - _0xc25e33['renderY']) * _0x57e3c6;
        let _0x645707 = (_0xc25e33['angle'] || 0x0) - _0xc25e33['renderAngle'];
        while (_0x645707 < -Math['PI'])
            _0x645707 += Math['PI'] * 0x2;
        while (_0x645707 > Math['PI'])
            _0x645707 -= Math['PI'] * 0x2;
        _0xc25e33['renderAngle'] += _0x645707 * (0x1 - Math['exp'](-_0x4d8ea9 * 0x14));
    }
    if (_0x2db053['GAME_STATE'] === 'NIGHT') {
        _0x4667a8 = Math['min'](0.6, _0x4667a8 + _0x4d8ea9 * 0.5);
    } else {
        _0x4667a8 = Math['max'](0x0, _0x4667a8 - _0x4d8ea9 * 0.5);
    }
    if (_0x3e24fc > 0x0) {
        if (performance['now']() > _0x95670c) {
            _0x3e24fc = Math['max'](0x0, _0x3e24fc - _0x4d8ea9 * 0x2);
        }
    }
    _0x4e97b5();
    _0x3ebfb3();
}
function _0x35c4bc(_0x462d66, _0x8e6a4c, _0x214a41, _0x17c11b, _0x396efe = !![]) {
    _0x462d66['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x4fcd59 = _0x462d66['measureText'](_0x8e6a4c)['width'];
    const _0x4925c3 = _0x4fcd59 + 0x18;
    const _0x183c25 = 0x1c;
    _0x462d66['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x462d66['beginPath']();
    if (_0x462d66['roundRect']) {
        _0x462d66['roundRect'](_0x214a41 - _0x4925c3 / 0x2, _0x17c11b - _0x183c25, _0x4925c3, _0x183c25, 0x6);
    } else {
        _0x462d66['rect'](_0x214a41 - _0x4925c3 / 0x2, _0x17c11b - _0x183c25, _0x4925c3, _0x183c25);
    }
    _0x462d66['fill']();
    if (_0x396efe) {
        _0x462d66['beginPath']();
        _0x462d66['moveTo'](_0x214a41 - 0x6, _0x17c11b);
        _0x462d66['lineTo'](_0x214a41 + 0x6, _0x17c11b);
        _0x462d66['lineTo'](_0x214a41, _0x17c11b + 0x6);
        _0x462d66['fill']();
    }
    _0x462d66['fillStyle'] = '#ffffff';
    _0x462d66['textAlign'] = 'center';
    _0x462d66['textBaseline'] = 'middle';
    _0x462d66['fillText'](_0x8e6a4c, _0x214a41, _0x17c11b - _0x183c25 / 0x2 + 0x1);
}
function _0x3a1e62(_0x291cfe, _0x4f6e14, _0xdcc964, _0x19dd9b) {
    if (!_0x4f6e14 || _0x4f6e14['length'] === 0x0)
        return;
    let _0x2be2cf = _0x19dd9b;
    for (let _0x1c9a93 = 0x0; _0x1c9a93 < _0x4f6e14['length']; _0x1c9a93++) {
        _0x35c4bc(_0x291cfe, _0x4f6e14[_0x1c9a93]['text'], _0xdcc964, _0x2be2cf, _0x1c9a93 === 0x0);
        _0x2be2cf -= 0x24;
    }
}
function _0x3257ad() {
    if (!_0x2db053['SYSTEM']['isReady'])
        return;
    _0x4f4ae3['fillStyle'] = '#000000';
    _0x4f4ae3['fillRect'](0x0, 0x0, _0x4ef7be['width'], _0x4ef7be['height']);
    _0x4f4ae3['save']();
    try {
        _0x4f4ae3['scale'](_0x2db053['SYSTEM']['viewScale'], _0x2db053['SYSTEM']['viewScale']);
        _0x4f4ae3['imageSmoothingEnabled'] = ![];
        const _0x3ca92f = Math['floor'](_0x2db053['CAMERA']['x'] || 0x0);
        const _0xb6a9e4 = Math['floor'](_0x2db053['CAMERA']['y'] || 0x0);
        const _0x206564 = Math['max'](0x0, Math['floor'](_0x3ca92f / _0x2db053['MAP']['chunkSize']));
        const _0x4fa469 = Math['min'](_0x2db053['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x3ca92f + _0x2db053['CAMERA']['width']) / _0x2db053['MAP']['chunkSize']));
        const _0x3a2df6 = Math['max'](0x0, Math['floor'](_0xb6a9e4 / _0x2db053['MAP']['chunkSize']));
        const _0x423b88 = Math['min'](_0x2db053['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0xb6a9e4 + _0x2db053['CAMERA']['height']) / _0x2db053['MAP']['chunkSize']));
        for (let _0xada9b5 = _0x3a2df6; _0xada9b5 <= _0x423b88; _0xada9b5++)
            for (let _0x3ca599 = _0x206564; _0x3ca599 <= _0x4fa469; _0x3ca599++) {
                const _0x49fabd = _0x3ca599 * _0x2db053['MAP']['chunkSize'] - _0x3ca92f;
                const _0xf2dc09 = _0xada9b5 * _0x2db053['MAP']['chunkSize'] - _0xb6a9e4;
                _0x4f4ae3['drawImage'](_0x2db053['MAP']['bgChunks'][_0xada9b5][_0x3ca599], _0x49fabd, _0xf2dc09, _0x2db053['MAP']['chunkSize'] + 0x1, _0x2db053['MAP']['chunkSize'] + 0x1);
            }
        if (_0x25b59e['complete'] && _0x25b59e['naturalWidth'] > 0x0) {
            const _0x75b20b = _0x2db053['MAP']['tileSize'];
            const _0x36a69d = _0x75b20b * 0xa;
            const _0x487d39 = _0x2db053['MAP']['columns'] / 0x2 * _0x75b20b - _0x36a69d / 0x2 - _0x3ca92f;
            const _0x37dc5c = _0x2db053['MAP']['rows'] / 0x2 * _0x75b20b - _0x36a69d / 0x2 - _0xb6a9e4;
            _0x4f4ae3['imageSmoothingEnabled'] = ![];
            _0x4f4ae3['drawImage'](_0x25b59e, _0x487d39, _0x37dc5c, _0x36a69d, _0x36a69d);
        }
        if (_0x1a0354['complete'] && _0x1a0354['naturalWidth'] > 0x0) {
            _0x2db053['ENTITIES']['forEach'](_0x1f5596 => {
                if (_0x1f5596['type'] !== 'table')
                    return;
                _0x4f4ae3['save']();
                _0x4f4ae3['imageSmoothingEnabled'] = ![];
                const _0x4be378 = _0x1a0354['naturalWidth'] >= _0x1a0354['naturalHeight'];
                const _0x23d5e3 = _0x1f5596['w'] >= _0x1f5596['h'];
                if (_0x4be378 === _0x23d5e3) {
                    _0x4f4ae3['drawImage'](_0x1a0354, _0x1f5596['x'] - _0x3ca92f, _0x1f5596['y'] - _0xb6a9e4, _0x1f5596['w'], _0x1f5596['h']);
                } else {
                    _0x4f4ae3['translate'](_0x1f5596['x'] - _0x3ca92f + _0x1f5596['w'] / 0x2, _0x1f5596['y'] - _0xb6a9e4 + _0x1f5596['h'] / 0x2);
                    _0x4f4ae3['rotate'](Math['PI'] / 0x2);
                    _0x4f4ae3['drawImage'](_0x1a0354, -_0x1f5596['h'] / 0x2, -_0x1f5596['w'] / 0x2, _0x1f5596['h'], _0x1f5596['w']);
                }
                _0x4f4ae3['restore']();
            });
        } else {
            _0x2db053['ENTITIES']['forEach'](_0x4479a5 => {
                if (_0x4479a5['type'] !== 'table')
                    return;
                _0x4f4ae3['save']();
                _0x4f4ae3['fillStyle'] = '#6b4423';
                _0x4f4ae3['fillRect'](_0x4479a5['x'] - _0x3ca92f, _0x4479a5['y'] - _0xb6a9e4, _0x4479a5['w'], _0x4479a5['h']);
                _0x4f4ae3['strokeStyle'] = '#422810';
                _0x4f4ae3['lineWidth'] = 0x3;
                _0x4f4ae3['strokeRect'](_0x4479a5['x'] - _0x3ca92f + 0x1, _0x4479a5['y'] - _0xb6a9e4 + 0x1, _0x4479a5['w'] - 0x2, _0x4479a5['h'] - 0x2);
                _0x4f4ae3['fillStyle'] = '#82532a';
                _0x4f4ae3['fillRect'](_0x4479a5['x'] - _0x3ca92f + 0x4, _0x4479a5['y'] - _0xb6a9e4 + 0x4, _0x4479a5['w'] - 0x8, _0x4479a5['h'] - 0x8);
                _0x4f4ae3['restore']();
            });
        }
        if (_0x14db5d) {
            if (_0x2db053['MAP']['wallChunks'] && _0x2db053['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x34ee4b = _0x3a2df6; _0x34ee4b <= _0x423b88; _0x34ee4b++) {
                    for (let _0x10aa10 = _0x206564; _0x10aa10 <= _0x4fa469; _0x10aa10++) {
                        if (!_0x2db053['MAP']['wallChunks'][_0x34ee4b] || !_0x2db053['MAP']['wallChunks'][_0x34ee4b][_0x10aa10])
                            continue;
                        const _0x585238 = _0x10aa10 * _0x2db053['MAP']['chunkSize'] - _0x3ca92f;
                        const _0x1e3fbd = _0x34ee4b * _0x2db053['MAP']['chunkSize'] - _0xb6a9e4;
                        _0x4f4ae3['drawImage'](_0x2db053['MAP']['wallChunks'][_0x34ee4b][_0x10aa10], _0x585238, _0x1e3fbd, _0x2db053['MAP']['chunkSize'] + 0x1, _0x2db053['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x56290a = _0x3a2df6; _0x56290a <= _0x423b88; _0x56290a++) {
                for (let _0x3ad250 = _0x206564; _0x3ad250 <= _0x4fa469; _0x3ad250++) {
                    const _0x461431 = _0x3ad250 * _0x2db053['MAP']['chunkSize'] - _0x3ca92f;
                    const _0x29a48b = _0x56290a * _0x2db053['MAP']['chunkSize'] - _0xb6a9e4;
                    _0x4f4ae3['drawImage'](_0x2db053['MAP']['fgChunks'][_0x56290a][_0x3ad250], _0x461431, _0x29a48b, _0x2db053['MAP']['chunkSize'] + 0x1, _0x2db053['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x56d0ae = _0x2db053['GAME_STATE'] === 'NIGHT' && _0x38e3df === 'Skinwalker' && !_0x5d0144['isDead'];
        const _0x405c00 = _0x5d0144['x'] - _0x3ca92f + _0x5d0144['width'] / 0x2;
        const _0x11efc1 = _0x5d0144['y'] - _0xb6a9e4 + _0x5d0144['height'] / 0x2;
        const _0x12c693 = _0x5d0144['width'] * _0x5d0144['scale'] * 1.3;
        const _0x4147cd = _0x5d0144['height'] * _0x5d0144['scale'] * 1.3;
        for (const _0x4267fb in _0x543120) {
            const _0x2a9325 = _0x543120[_0x4267fb];
            if (_0x2a9325['isDead'])
                continue;
            const _0x356e73 = (_0x2a9325['renderX'] ?? _0x2a9325['x']) - _0x3ca92f + _0x2a9325['width'] / 0x2;
            const _0x3bfb17 = (_0x2a9325['renderY'] ?? _0x2a9325['y']) - _0xb6a9e4 + _0x2a9325['height'] / 0x2;
            const _0x4d9f9f = Math['min'](0x2, Math['max'](0.3, _0x2a9325['scale'] || 0x1));
            const _0x4fbca9 = _0x2a9325['width'] * _0x4d9f9f * 1.3;
            const _0x3d1b49 = _0x2a9325['height'] * _0x4d9f9f * 1.3;
            _0x4f4ae3['save']();
            try {
                _0x4f4ae3['translate'](_0x356e73, _0x3bfb17);
                _0x4f4ae3['rotate'](_0x2a9325['renderAngle'] ?? 0x0);
                if (_0x2a9325['isDark'])
                    _0x4f4ae3['filter'] = 'brightness(0)';
                _0x5d238a(_0x4f4ae3, _0x2a9325['body'], _0x2a9325['eyes'], _0x4fbca9, _0x3d1b49);
                if (_0x2f812b['has'](parseInt(_0x4267fb)) && _0x3df87b['complete'] && _0x3df87b['naturalWidth'] > 0x0) {
                    _0x4f4ae3['drawImage'](_0x3df87b, -_0x4fbca9 / 0x2, -_0x3d1b49 / 0x2, _0x4fbca9, _0x3d1b49);
                }
                if (_0x2a9325['isDark'])
                    _0x4f4ae3['filter'] = 'none';
            } finally {
                _0x4f4ae3['restore']();
            }
            if (!_0x1f1133((_0x2a9325['renderX'] ?? _0x2a9325['x']) + _0x2a9325['width'] / 0x2, (_0x2a9325['renderY'] ?? _0x2a9325['y']) + _0x2a9325['height'] / 0x2)) {
                _0x4f4ae3['textAlign'] = 'center';
                _0x4f4ae3['lineJoin'] = 'round';
                _0x4f4ae3['lineWidth'] = 0x3;
                _0x4f4ae3['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x4f4ae3['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x4f4ae3['fillStyle'] = _0x2f812b['has'](parseInt(_0x4267fb)) ? '#cc88ff' : '#ffffff';
                const _0x1ffbbd = _0x2a9325['isDark'] ? '???' : _0x2a9325['name'] + (_0x2a9325['isOwner'] ? '\x20[🗝️]' : '');
                _0x4f4ae3['strokeText'](_0x1ffbbd, _0x356e73, _0x3bfb17 - _0x3d1b49 / 0x2 - 0x10);
                _0x4f4ae3['fillText'](_0x1ffbbd, _0x356e73, _0x3bfb17 - _0x3d1b49 / 0x2 - 0x10);
            }
        }
        if (!_0x5d0144['isDead']) {
            _0x4f4ae3['save']();
            try {
                _0x4f4ae3['translate'](_0x405c00, _0x11efc1);
                _0x4f4ae3['rotate'](_0x5d0144['angle']);
                if (_0x56d0ae)
                    _0x4f4ae3['filter'] = 'brightness(0)';
                _0x5d238a(_0x4f4ae3, _0x1fbf7d, _0xf68691, _0x12c693, _0x4147cd);
                if (_0x2f812b['has'](_0x5870bb) && _0x3df87b['complete'] && _0x3df87b['naturalWidth'] > 0x0) {
                    _0x4f4ae3['drawImage'](_0x3df87b, -_0x12c693 / 0x2, -_0x4147cd / 0x2, _0x12c693, _0x4147cd);
                }
                if (_0x56d0ae)
                    _0x4f4ae3['filter'] = 'none';
            } finally {
                _0x4f4ae3['restore']();
            }
            if (!_0x1f1133(_0x5d0144['x'] + _0x5d0144['width'] / 0x2, _0x5d0144['y'] + _0x5d0144['height'] / 0x2)) {
                _0x4f4ae3['textAlign'] = 'center';
                _0x4f4ae3['lineJoin'] = 'round';
                _0x4f4ae3['lineWidth'] = 0x3;
                _0x4f4ae3['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x4f4ae3['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x4f4ae3['fillStyle'] = _0x2f812b['has'](_0x5870bb) ? '#cc88ff' : '#ffffff';
                const _0x384b6e = _0x56d0ae ? '???' : _0x503b20 + (_0x2129c7 ? '\x20[🗝️]' : '');
                _0x4f4ae3['strokeText'](_0x384b6e, _0x405c00, _0x11efc1 - _0x4147cd / 0x2 - 0x10);
                _0x4f4ae3['fillText'](_0x384b6e, _0x405c00, _0x11efc1 - _0x4147cd / 0x2 - 0x10);
            }
        }
        if (_0x2db053['MAP']['wallChunks'] && _0x2db053['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x1f8d0c = _0x3a2df6; _0x1f8d0c <= _0x423b88; _0x1f8d0c++)
                for (let _0x346fb0 = _0x206564; _0x346fb0 <= _0x4fa469; _0x346fb0++) {
                    if (!_0x2db053['MAP']['wallChunks'][_0x1f8d0c] || !_0x2db053['MAP']['wallChunks'][_0x1f8d0c][_0x346fb0])
                        continue;
                    const _0x3e9397 = _0x346fb0 * _0x2db053['MAP']['chunkSize'] - _0x3ca92f;
                    const _0x1f36f2 = _0x1f8d0c * _0x2db053['MAP']['chunkSize'] - _0xb6a9e4;
                    _0x4f4ae3['drawImage'](_0x2db053['MAP']['wallChunks'][_0x1f8d0c][_0x346fb0], _0x3e9397, _0x1f36f2, _0x2db053['MAP']['chunkSize'] + 0x1, _0x2db053['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x59edf3 of _0x2db053['ENTITIES']) {
            if (_0x59edf3['type'] !== 'npc')
                continue;
            const _0x11de16 = _0x59edf3['x'] - _0x3ca92f + _0x59edf3['w'] / 0x2;
            const _0x35535a = _0x59edf3['y'] - _0xb6a9e4 + _0x59edf3['h'] / 0x2;
            const _0x6928dd = _0x59edf3['w'];
            const _0x205df7 = _0x59edf3['h'];
            _0x4f4ae3['save']();
            _0x4f4ae3['translate'](_0x11de16, _0x35535a);
            _0x4f4ae3['rotate'](_0x59edf3['angle'] !== undefined ? _0x59edf3['angle'] : 0x0);
            _0x5d238a(_0x4f4ae3, _0x59edf3['body'] || 'yanito932.png', _0x59edf3['eyes'], _0x6928dd, _0x205df7);
            _0x4f4ae3['restore']();
            _0x4f4ae3['textAlign'] = 'center';
            _0x4f4ae3['lineJoin'] = 'round';
            _0x4f4ae3['lineWidth'] = 0x3;
            _0x4f4ae3['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x4f4ae3['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x4f4ae3['fillStyle'] = '#aaaaaa';
            _0x4f4ae3['strokeText'](_0x59edf3['name'] || 'NPC', _0x11de16, _0x35535a - _0x205df7 / 0x2 - 0x10);
            _0x4f4ae3['fillText'](_0x59edf3['name'] || 'NPC', _0x11de16, _0x35535a - _0x205df7 / 0x2 - 0x10);
        }
        if (_0x5d0144['isDead']) {
            for (const _0x27fa75 in _0x543120) {
                const _0x1a0c6d = _0x543120[_0x27fa75];
                if (!_0x1a0c6d['isDead'])
                    continue;
                const _0x225142 = (_0x1a0c6d['renderX'] ?? _0x1a0c6d['x']) - _0x3ca92f + _0x1a0c6d['width'] / 0x2;
                const _0x43dcbe = (_0x1a0c6d['renderY'] ?? _0x1a0c6d['y']) - _0xb6a9e4 + _0x1a0c6d['height'] / 0x2;
                const _0x3438e1 = _0x1a0c6d['width'] * (_0x1a0c6d['scale'] || 0x1) * 1.3;
                const _0x4972f2 = _0x1a0c6d['height'] * (_0x1a0c6d['scale'] || 0x1) * 1.3;
                _0x4f4ae3['save']();
                try {
                    _0x4f4ae3['translate'](_0x225142, _0x43dcbe);
                    _0x4f4ae3['rotate'](_0x1a0c6d['renderAngle'] ?? 0x0);
                    _0x4f4ae3['globalAlpha'] = 0.3;
                    _0x5d238a(_0x4f4ae3, _0x1a0c6d['body'], _0x1a0c6d['eyes'], _0x3438e1, _0x4972f2);
                } finally {
                    _0x4f4ae3['restore']();
                }
                if (!_0x1f1133((_0x1a0c6d['renderX'] ?? _0x1a0c6d['x']) + _0x1a0c6d['width'] / 0x2, (_0x1a0c6d['renderY'] ?? _0x1a0c6d['y']) + _0x1a0c6d['height'] / 0x2)) {
                    _0x4f4ae3['save']();
                    _0x4f4ae3['globalAlpha'] = 0.3;
                    _0x4f4ae3['textAlign'] = 'center';
                    _0x4f4ae3['lineJoin'] = 'round';
                    _0x4f4ae3['lineWidth'] = 0x3;
                    _0x4f4ae3['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x4f4ae3['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x4f4ae3['fillStyle'] = '#ffffff';
                    const _0x5bf3fb = _0x1a0c6d['name'] + (_0x1a0c6d['isOwner'] ? '\x20[🗝️]' : '');
                    _0x4f4ae3['strokeText'](_0x5bf3fb, _0x225142, _0x43dcbe - _0x4972f2 / 0x2 - 0x10);
                    _0x4f4ae3['fillText'](_0x5bf3fb, _0x225142, _0x43dcbe - _0x4972f2 / 0x2 - 0x10);
                    _0x4f4ae3['restore']();
                }
            }
            _0x4f4ae3['save']();
            try {
                _0x4f4ae3['translate'](_0x405c00, _0x11efc1);
                _0x4f4ae3['rotate'](_0x5d0144['angle']);
                _0x4f4ae3['globalAlpha'] = 0.3;
                _0x5d238a(_0x4f4ae3, _0x1fbf7d, _0xf68691, _0x12c693, _0x4147cd);
            } finally {
                _0x4f4ae3['restore']();
            }
            if (!_0x1f1133(_0x5d0144['x'] + _0x5d0144['width'] / 0x2, _0x5d0144['y'] + _0x5d0144['height'] / 0x2)) {
                _0x4f4ae3['save']();
                _0x4f4ae3['globalAlpha'] = 0.3;
                _0x4f4ae3['textAlign'] = 'center';
                _0x4f4ae3['lineJoin'] = 'round';
                _0x4f4ae3['lineWidth'] = 0x3;
                _0x4f4ae3['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x4f4ae3['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x4f4ae3['fillStyle'] = '#ffffff';
                const _0x5c223d = _0x503b20 + (_0x2129c7 ? '\x20[🗝️]' : '');
                _0x4f4ae3['strokeText'](_0x5c223d, _0x405c00, _0x11efc1 - _0x4147cd / 0x2 - 0x10);
                _0x4f4ae3['fillText'](_0x5c223d, _0x405c00, _0x11efc1 - _0x4147cd / 0x2 - 0x10);
                _0x4f4ae3['restore']();
            }
        }
        for (let _0x3116ed = _0x3a2df6; _0x3116ed <= _0x423b88; _0x3116ed++)
            for (let _0x27ec35 = _0x206564; _0x27ec35 <= _0x4fa469; _0x27ec35++) {
                const _0x1f7d19 = _0x27ec35 * _0x2db053['MAP']['chunkSize'] - _0x3ca92f;
                const _0x143d96 = _0x3116ed * _0x2db053['MAP']['chunkSize'] - _0xb6a9e4;
                _0x4f4ae3['drawImage'](_0x2db053['MAP']['fgChunks'][_0x3116ed][_0x27ec35], _0x1f7d19, _0x143d96, _0x2db053['MAP']['chunkSize'] + 0x1, _0x2db053['MAP']['chunkSize'] + 0x1);
            }
        if (_0x2db053['EDITOR']['enabled'] && _0x2db053['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x1bd361 = _0x2db053['INPUTS']['mouseX'] / _0x2db053['SYSTEM']['viewScale'] + _0x2db053['CAMERA']['x'];
            const _0x4e4484 = _0x2db053['INPUTS']['mouseY'] / _0x2db053['SYSTEM']['viewScale'] + _0x2db053['CAMERA']['y'];
            const _0xb5e82b = Math['floor'](_0x1bd361 / _0x2db053['MAP']['tileSize']);
            const _0xbef490 = Math['floor'](_0x4e4484 / _0x2db053['MAP']['tileSize']);
            if (_0xb5e82b >= 0x0 && _0xb5e82b < _0x2db053['MAP']['columns'] && _0xbef490 >= 0x0 && _0xbef490 < _0x2db053['MAP']['rows']) {
                const _0x2c142d = _0xb5e82b * _0x2db053['MAP']['tileSize'] - _0x3ca92f;
                const _0x225d3f = _0xbef490 * _0x2db053['MAP']['tileSize'] - _0xb6a9e4;
                _0x4f4ae3['save']();
                _0x4f4ae3['globalAlpha'] = 0.5;
                if (_0x2db053['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x439bef = _0x2db053['EDITOR']['selectedTileGid'] - 0x1;
                    _0x4f4ae3['drawImage'](_0x5026a6, _0x439bef % _0x2db053['MAP']['tilesetCols'] * _0x2db053['MAP']['tileSize'], Math['floor'](_0x439bef / _0x2db053['MAP']['tilesetCols']) * _0x2db053['MAP']['tileSize'], _0x2db053['MAP']['tileSize'], _0x2db053['MAP']['tileSize'], _0x2c142d, _0x225d3f, _0x2db053['MAP']['tileSize'], _0x2db053['MAP']['tileSize']);
                } else {
                    _0x4f4ae3['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x4f4ae3['fillRect'](_0x2c142d, _0x225d3f, _0x2db053['MAP']['tileSize'], _0x2db053['MAP']['tileSize']);
                }
                _0x4f4ae3['restore']();
            }
        }
        _0x318162(_0x4f4ae3, _0x3ca92f, _0xb6a9e4);
        if (_0x4667a8 > 0x0) {
            _0x4f4ae3['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x4667a8 + ')';
            _0x4f4ae3['fillRect'](0x0, 0x0, _0x2db053['CAMERA']['width'], _0x2db053['CAMERA']['height']);
        }
        for (const _0x2f54fe in _0x543120) {
            const _0x26df38 = _0x543120[_0x2f54fe];
            if (_0x26df38['isDead'] && !_0x5d0144['isDead'])
                continue;
            const _0x41f94d = (_0x26df38['renderX'] ?? _0x26df38['x']) - _0x3ca92f + _0x26df38['width'] / 0x2;
            const _0x24844f = (_0x26df38['renderY'] ?? _0x26df38['y']) - _0xb6a9e4 + _0x26df38['height'] / 0x2;
            _0x3a1e62(_0x4f4ae3, _0x26df38['chats'], _0x41f94d, _0x24844f - _0x26df38['height'] / 0x2 - 0x20);
        }
        _0x3a1e62(_0x4f4ae3, _0x5d0144['chats'], _0x405c00, _0x11efc1 - _0x5d0144['height'] / 0x2 - 0x20);
        if (_0x3e24fc > 0x0) {
            _0x4f4ae3['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x3e24fc + ')';
            _0x4f4ae3['fillRect'](0x0, 0x0, _0x2db053['CAMERA']['width'], _0x2db053['CAMERA']['height']);
        }
    } finally {
        _0x4f4ae3['restore']();
    }
}
function _0x312e20(_0x1898b7) {
    if (!_0x2db053['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x312e20);
    let _0x254725 = (_0x1898b7 - _0x2db053['SYSTEM']['lastTime']) / 0x3e8;
    _0x2db053['SYSTEM']['lastTime'] = _0x1898b7;
    if (_0x254725 > 0.1)
        _0x254725 = 0.1;
    if (_0x254725 < 0x0 || isNaN(_0x254725))
        _0x254725 = 0.016;
    if (_0x14db5d) {
        _0x17ead0(_0x254725);
        _0x3257ad();
        return;
    }
    if (!_0x5870bb)
        return;
    _0xc1f145(_0x254725);
    _0x2749fe['tick'](_0x1898b7);
    _0x3257ad();
}
function _0x766d86() {
    const _0xdf7727 = Math['ceil'](_0x2db053['MAP']['columns'] * _0x2db053['MAP']['tileSize'] / _0x2db053['MAP']['chunkSize']);
    const _0x25bc3d = Math['ceil'](_0x2db053['MAP']['rows'] * _0x2db053['MAP']['tileSize'] / _0x2db053['MAP']['chunkSize']);
    _0x2db053['MAP']['bgChunks'] = [];
    _0x2db053['MAP']['fgChunks'] = [];
    _0x2db053['MAP']['wallChunks'] = [];
    for (let _0x315758 = 0x0; _0x315758 < _0x25bc3d; _0x315758++) {
        _0x2db053['MAP']['bgChunks'][_0x315758] = [];
        _0x2db053['MAP']['fgChunks'][_0x315758] = [];
        _0x2db053['MAP']['wallChunks'][_0x315758] = [];
        for (let _0x3f6a4d = 0x0; _0x3f6a4d < _0xdf7727; _0x3f6a4d++) {
            const _0x2aa848 = document['createElement']('canvas');
            _0x2aa848['width'] = _0x2aa848['height'] = _0x2db053['MAP']['chunkSize'];
            const _0x4e1bd4 = document['createElement']('canvas');
            _0x4e1bd4['width'] = _0x4e1bd4['height'] = _0x2db053['MAP']['chunkSize'];
            const _0x26896a = document['createElement']('canvas');
            _0x26896a['width'] = _0x26896a['height'] = _0x2db053['MAP']['chunkSize'];
            _0x2db053['MAP']['bgChunks'][_0x315758][_0x3f6a4d] = _0x2aa848;
            _0x2db053['MAP']['fgChunks'][_0x315758][_0x3f6a4d] = _0x4e1bd4;
            _0x2db053['MAP']['wallChunks'][_0x315758][_0x3f6a4d] = _0x26896a;
            _0x1c7c22(_0x3f6a4d, _0x315758);
        }
    }
}
function _0x1c7c22(_0x1d964f, _0x9018a3) {
    const _0x53c24e = _0x2db053['MAP']['bgChunks'][_0x9018a3][_0x1d964f]['getContext']('2d', { 'alpha': !![] });
    const _0x214219 = _0x2db053['MAP']['fgChunks'][_0x9018a3][_0x1d964f]['getContext']('2d', { 'alpha': !![] });
    const _0x1a4f19 = _0x2db053['MAP']['wallChunks'][_0x9018a3] && _0x2db053['MAP']['wallChunks'][_0x9018a3][_0x1d964f] ? _0x2db053['MAP']['wallChunks'][_0x9018a3][_0x1d964f]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x53c24e['imageSmoothingEnabled'] = _0x214219['imageSmoothingEnabled'] = ![];
    if (_0x1a4f19)
        _0x1a4f19['imageSmoothingEnabled'] = ![];
    _0x53c24e['clearRect'](0x0, 0x0, _0x2db053['MAP']['chunkSize'], _0x2db053['MAP']['chunkSize']);
    _0x214219['clearRect'](0x0, 0x0, _0x2db053['MAP']['chunkSize'], _0x2db053['MAP']['chunkSize']);
    if (_0x1a4f19)
        _0x1a4f19['clearRect'](0x0, 0x0, _0x2db053['MAP']['chunkSize'], _0x2db053['MAP']['chunkSize']);
    const _0x330f64 = Math['floor'](_0x1d964f * _0x2db053['MAP']['chunkSize'] / _0x2db053['MAP']['tileSize']);
    const _0x4ef1da = Math['ceil']((_0x1d964f + 0x1) * _0x2db053['MAP']['chunkSize'] / _0x2db053['MAP']['tileSize']);
    const _0xe242f5 = Math['floor'](_0x9018a3 * _0x2db053['MAP']['chunkSize'] / _0x2db053['MAP']['tileSize']);
    const _0x12079b = Math['ceil']((_0x9018a3 + 0x1) * _0x2db053['MAP']['chunkSize'] / _0x2db053['MAP']['tileSize']);
    const _0x41908b = 0.5;
    const _0x4d08b1 = _0x2db053['MAP']['tileSize'] - _0x41908b * 0x2;
    _0x2db053['MAP']['layers']['forEach'](_0x258740 => {
        const _0x48ea21 = _0x258740['name'] === 'walls';
        const _0x59a6d7 = _0x258740['name'] === 'trees' ? _0x214219 : _0x48ea21 ? _0x1a4f19 || _0x53c24e : _0x53c24e;
        for (let _0x21a585 = Math['max'](0x0, _0xe242f5); _0x21a585 < Math['min'](_0x2db053['MAP']['rows'], _0x12079b); _0x21a585++) {
            for (let _0x2553d3 = Math['max'](0x0, _0x330f64); _0x2553d3 < Math['min'](_0x2db053['MAP']['columns'], _0x4ef1da); _0x2553d3++) {
                let _0x570c4d = _0x258740['data'][_0x21a585 * _0x2db053['MAP']['columns'] + _0x2553d3];
                if (_0x258740['name'] === 'floor2' && _0x2db053['MAP']['doors'] && _0x2db053['MAP']['doors'][_0x21a585 * _0x2db053['MAP']['columns'] + _0x2553d3]) {
                    _0x570c4d = 0x2;
                }
                if (_0x570c4d > 0x0) {
                    const _0xb0416c = _0x570c4d - 0x1;
                    const _0x1c88cf = _0xb0416c % _0x2db053['MAP']['tilesetCols'] * _0x2db053['MAP']['tileSize'] + _0x41908b;
                    const _0x2f0167 = Math['floor'](_0xb0416c / _0x2db053['MAP']['tilesetCols']) * _0x2db053['MAP']['tileSize'] + _0x41908b;
                    const _0x36505d = _0x2553d3 * _0x2db053['MAP']['tileSize'] - _0x1d964f * _0x2db053['MAP']['chunkSize'];
                    const _0x22aa83 = _0x21a585 * _0x2db053['MAP']['tileSize'] - _0x9018a3 * _0x2db053['MAP']['chunkSize'];
                    if (_0x570c4d === 0x4) {
                        const _0x381661 = 0x1;
                        const _0x56c4e9 = _0x381661 % _0x2db053['MAP']['tilesetCols'] * _0x2db053['MAP']['tileSize'] + _0x41908b;
                        const _0x5d9ed6 = Math['floor'](_0x381661 / _0x2db053['MAP']['tilesetCols']) * _0x2db053['MAP']['tileSize'] + _0x41908b;
                        _0x53c24e['drawImage'](_0x5026a6, _0x56c4e9, _0x5d9ed6, _0x4d08b1, _0x4d08b1, _0x36505d, _0x22aa83, _0x2db053['MAP']['tileSize'], _0x2db053['MAP']['tileSize']);
                        let _0x256987 = _0x2db053['MAP']['doors'] ? _0x2db053['MAP']['doors'][_0x21a585 * _0x2db053['MAP']['columns'] + _0x2553d3] : null;
                        if (!_0x256987) {
                            const _0x276f47 = _0x2db053['MAP']['layers']['find'](_0x206905 => _0x206905['name'] === 'walls');
                            const _0x57ef09 = _0x21a585 > 0x0 && _0x276f47 && _0x276f47['data'][(_0x21a585 - 0x1) * _0x2db053['MAP']['columns'] + _0x2553d3] > 0x0;
                            const _0x154353 = _0x21a585 < _0x2db053['MAP']['rows'] - 0x1 && _0x276f47 && _0x276f47['data'][(_0x21a585 + 0x1) * _0x2db053['MAP']['columns'] + _0x2553d3] > 0x0;
                            const _0x5e1366 = _0x2553d3 > 0x0 && _0x276f47 && _0x276f47['data'][_0x21a585 * _0x2db053['MAP']['columns'] + _0x2553d3 - 0x1] > 0x0;
                            const _0x3e656b = _0x2553d3 < _0x2db053['MAP']['columns'] - 0x1 && _0x276f47 && _0x276f47['data'][_0x21a585 * _0x2db053['MAP']['columns'] + _0x2553d3 + 0x1] > 0x0;
                            if (_0x5e1366 && _0x3e656b)
                                _0x256987 = _0x21a585 < _0x2db053['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x57ef09 && _0x154353)
                                _0x256987 = _0x2553d3 < _0x2db053['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x47aef0 = 0x0;
                        if (_0x256987 === 'bottom')
                            _0x47aef0 = Math['PI'] / 0x2;
                        else if (_0x256987 === 'left')
                            _0x47aef0 = Math['PI'];
                        else if (_0x256987 === 'top')
                            _0x47aef0 = -Math['PI'] / 0x2;
                        else if (_0x256987 === 'right')
                            _0x47aef0 = 0x0;
                        if (_0x47aef0 !== 0x0) {
                            _0x59a6d7['save']();
                            _0x59a6d7['translate'](_0x36505d + _0x2db053['MAP']['tileSize'] / 0x2, _0x22aa83 + _0x2db053['MAP']['tileSize'] / 0x2);
                            _0x59a6d7['rotate'](_0x47aef0);
                            _0x59a6d7['drawImage'](_0x5026a6, _0x1c88cf, _0x2f0167, _0x4d08b1, _0x4d08b1, -_0x2db053['MAP']['tileSize'] / 0x2, -_0x2db053['MAP']['tileSize'] / 0x2, _0x2db053['MAP']['tileSize'], _0x2db053['MAP']['tileSize']);
                            _0x59a6d7['restore']();
                        } else {
                            _0x59a6d7['drawImage'](_0x5026a6, _0x1c88cf, _0x2f0167, _0x4d08b1, _0x4d08b1, _0x36505d, _0x22aa83, _0x2db053['MAP']['tileSize'], _0x2db053['MAP']['tileSize']);
                        }
                    } else {
                        _0x59a6d7['drawImage'](_0x5026a6, _0x1c88cf, _0x2f0167, _0x4d08b1, _0x4d08b1, _0x36505d, _0x22aa83, _0x2db053['MAP']['tileSize'], _0x2db053['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0xc57f8a() {
    _0x5026a6['crossOrigin'] = 'Anonymous';
    _0x5026a6['onload'] = () => {
        _0x2db053['MAP']['tilesetCols'] = 0x3;
        _0x21bb52();
    };
    _0x5026a6['onerror'] = () => {
        _0x2db053['MAP']['tilesetCols'] = 0x1;
        _0x21bb52();
    };
    _0x5026a6['src'] = 'assets/tilesheet.png';
    _0x25b59e['crossOrigin'] = 'Anonymous';
    _0x25b59e['onload'] = _0x21bb52;
    _0x25b59e['onerror'] = () => {
        _0x21bb52();
    };
    _0x25b59e['src'] = 'assets/center.png';
    _0x1a0354['crossOrigin'] = 'Anonymous';
    _0x1a0354['onload'] = _0x21bb52;
    _0x1a0354['onerror'] = () => {
        _0x21bb52();
    };
    _0x1a0354['src'] = 'assets/table.png';
}
function _0x21bb52() {
    _0x2db053['SYSTEM']['assetsLoaded']++;
    if (_0x2db053['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0xae48e3();
    }
}
function _0x219c97(_0x2f1bf0, _0x3b35cf) {
    if (!_0x2129c7 || !_0x4c6e33)
        return;
    const _0x26acf8 = _0x2f1bf0 / _0x2db053['SYSTEM']['viewScale'] + _0x2db053['CAMERA']['x'];
    const _0x3ce96d = _0x3b35cf / _0x2db053['SYSTEM']['viewScale'] + _0x2db053['CAMERA']['y'];
    const _0x50f0eb = Math['floor'](_0x26acf8 / _0x2db053['MAP']['tileSize']);
    const _0x7350b3 = Math['floor'](_0x3ce96d / _0x2db053['MAP']['tileSize']);
    if (_0x50f0eb >= 0x0 && _0x50f0eb < _0x2db053['MAP']['columns'] && _0x7350b3 >= 0x0 && _0x7350b3 < _0x2db053['MAP']['rows'])
        _0x4c6e33['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x2db053['EDITOR']['selectedLayer'],
            'col': _0x50f0eb,
            'row': _0x7350b3,
            'gid': _0x2db053['EDITOR']['selectedTileGid']
        }));
}
function _0x92307d() {
    const _0x32d061 = document['getElementById']('palette');
    if (!_0x32d061 || _0x32d061['children']['length'] > 0x0)
        return;
    const _0x1a45f2 = 0x40;
    const _0x3285e1 = _0x5026a6;
    const _0x32db0f = document['createElement']('div');
    _0x32db0f['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x5d257f = document['createElement']('canvas');
    _0x5d257f['width'] = 0xc0;
    _0x5d257f['height'] = 0xa0;
    _0x5d257f['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x32db0f['appendChild'](_0x5d257f);
    const _0x5a14fa = document['createElement']('div');
    _0x5a14fa['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x32db0f['appendChild'](_0x5a14fa);
    let _0x1d6cc9 = 0x0, _0x16796d = 0x0;
    let _0x153b6c = ![], _0x7cbd3d = 0x0, _0x3ccbd9 = 0x0, _0x3e0406 = 0x0, _0x2206aa = 0x0;
    function _0xcd32f5() {
        const _0x6a559a = _0x5d257f['getContext']('2d');
        _0x6a559a['clearRect'](0x0, 0x0, _0x5d257f['width'], _0x5d257f['height']);
        _0x6a559a['imageSmoothingEnabled'] = ![];
        if (_0x3285e1['complete'] && _0x3285e1['naturalWidth'] > 0x0) {
            _0x6a559a['drawImage'](_0x3285e1, _0x1d6cc9, _0x16796d, _0x5d257f['width'], _0x5d257f['height'], 0x0, 0x0, _0x5d257f['width'], _0x5d257f['height']);
        }
        _0x6a559a['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x6a559a['lineWidth'] = 0x1;
        const _0x5756d6 = Math['floor'](_0x1d6cc9 / _0x1a45f2);
        const _0x398088 = Math['floor'](_0x16796d / _0x1a45f2);
        for (let _0x45f658 = _0x5756d6; _0x45f658 <= _0x5756d6 + Math['ceil'](_0x5d257f['width'] / _0x1a45f2) + 0x1; _0x45f658++) {
            const _0x15dea6 = _0x45f658 * _0x1a45f2 - _0x1d6cc9;
            _0x6a559a['beginPath']();
            _0x6a559a['moveTo'](_0x15dea6, 0x0);
            _0x6a559a['lineTo'](_0x15dea6, _0x5d257f['height']);
            _0x6a559a['stroke']();
        }
        for (let _0x955ae6 = _0x398088; _0x955ae6 <= _0x398088 + Math['ceil'](_0x5d257f['height'] / _0x1a45f2) + 0x1; _0x955ae6++) {
            const _0x3c5fbb = _0x955ae6 * _0x1a45f2 - _0x16796d;
            _0x6a559a['beginPath']();
            _0x6a559a['moveTo'](0x0, _0x3c5fbb);
            _0x6a559a['lineTo'](_0x5d257f['width'], _0x3c5fbb);
            _0x6a559a['stroke']();
        }
    }
    function _0x4c7fc5() {
        const _0x5149c3 = Math['max'](0x1, Math['ceil'](_0x3285e1['naturalWidth'] / _0x1a45f2));
        const _0x1d2130 = _0x2db053['EDITOR']['selectedTileGid'];
        if (_0x1d2130 <= 0x0) {
            _0x5a14fa['style']['display'] = 'none';
            return;
        }
        const _0x2bacf0 = _0x1d2130 - 0x1;
        const _0x5f2f42 = _0x2bacf0 % _0x5149c3;
        const _0x16d928 = Math['floor'](_0x2bacf0 / _0x5149c3);
        const _0x12df90 = _0x5f2f42 * _0x1a45f2 - _0x1d6cc9;
        const _0xb7e2f4 = _0x16d928 * _0x1a45f2 - _0x16796d;
        _0x5a14fa['style']['display'] = 'block';
        _0x5a14fa['style']['left'] = _0x12df90 + 'px';
        _0x5a14fa['style']['top'] = _0xb7e2f4 + 'px';
    }
    _0x3285e1['onload'] = () => {
        _0xcd32f5();
        _0x4c7fc5();
    };
    if (_0x3285e1['complete'] && _0x3285e1['naturalWidth'] > 0x0) {
        _0xcd32f5();
        _0x4c7fc5();
    }
    _0x32db0f['addEventListener']('mousedown', _0x1008ce => {
        if (_0x1008ce['button'] === 0x0) {
            _0x153b6c = !![];
            _0x7cbd3d = _0x1008ce['clientX'];
            _0x3ccbd9 = _0x1008ce['clientY'];
            _0x3e0406 = _0x1d6cc9;
            _0x2206aa = _0x16796d;
            _0x32db0f['style']['cursor'] = 'grabbing';
            _0x1008ce['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x23bf53 => {
        if (!_0x153b6c)
            return;
        const _0x12d794 = _0x7cbd3d - _0x23bf53['clientX'];
        const _0x5a5e09 = _0x3ccbd9 - _0x23bf53['clientY'];
        const _0x2b801d = Math['max'](0x0, _0x3285e1['naturalWidth'] - _0x5d257f['width']);
        const _0x234090 = Math['max'](0x0, _0x3285e1['naturalHeight'] - _0x5d257f['height']);
        _0x1d6cc9 = Math['max'](0x0, Math['min'](_0x2b801d, _0x3e0406 + _0x12d794));
        _0x16796d = Math['max'](0x0, Math['min'](_0x234090, _0x2206aa + _0x5a5e09));
        _0xcd32f5();
        _0x4c7fc5();
    });
    window['addEventListener']('mouseup', _0x50012e => {
        if (_0x153b6c) {
            _0x153b6c = ![];
            _0x32db0f['style']['cursor'] = 'grab';
        }
    });
    _0x32db0f['addEventListener']('click', _0x10d556 => {
        const _0x167b49 = _0x32db0f['getBoundingClientRect']();
        const _0x2304af = _0x10d556['clientX'] - _0x167b49['left'] + _0x1d6cc9;
        const _0x59df70 = _0x10d556['clientY'] - _0x167b49['top'] + _0x16796d;
        const _0x195688 = Math['max'](0x1, Math['ceil'](_0x3285e1['naturalWidth'] / _0x1a45f2));
        const _0x20e458 = Math['floor'](_0x2304af / _0x1a45f2);
        const _0x555e8f = Math['floor'](_0x59df70 / _0x1a45f2);
        const _0xf799f8 = _0x555e8f * _0x195688 + _0x20e458 + 0x1;
        _0x2db053['EDITOR']['selectedTileGid'] = _0xf799f8;
        _0x4c7fc5();
    });
    _0x32d061['appendChild'](_0x32db0f);
    const _0x4a3b1b = document['createElement']('div');
    _0x4a3b1b['className'] = 'tile-btn\x20eraser-btn';
    _0x4a3b1b['title'] = 'Eraser\x20(gid\x200)';
    _0x4a3b1b['onclick'] = () => {
        _0x2db053['EDITOR']['selectedTileGid'] = 0x0;
        _0x5a14fa['style']['display'] = 'none';
    };
    _0x32d061['appendChild'](_0x4a3b1b);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x2db053['EDITOR']['enabled'] = !_0x2db053['EDITOR']['enabled'];
        const _0x4a3c53 = document['getElementById']('editor-tools');
        if (_0x2db053['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x4a3c53['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x4a3c53['style']['display'] = 'none';
        }
    });
    const _0x3d7458 = document['getElementById']('start-game-btn');
    if (_0x3d7458) {
        _0x3d7458['addEventListener']('click', () => {
            if (_0x4c6e33)
                _0x4c6e33['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x55276e = document['getElementById']('rolelist-toggle-btn');
    if (_0x55276e) {
        let _0x1305ca = 'subalignments';
        _0x55276e['addEventListener']('click', () => {
            if (_0x1305ca === 'subalignments')
                _0x1305ca = 'precise';
            else if (_0x1305ca === 'precise')
                _0x1305ca = 'off';
            else
                _0x1305ca = 'subalignments';
            _0x55276e['innerText'] = 'Role\x20List:\x20' + _0x1305ca['charAt'](0x0)['toUpperCase']() + _0x1305ca['slice'](0x1);
            if (_0x4c6e33)
                _0x4c6e33['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x1305ca
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x289e98 => {
        if (_0x289e98['id'] === 'editor-toggle-btn' || _0x289e98['id'] === 'start-game-btn' || _0x289e98['id'] === 'rolelist-toggle-btn')
            return;
        _0x289e98['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0xb2bf56 => _0xb2bf56['classList']['remove']('active'));
            _0x289e98['classList']['add']('active');
            _0x2db053['EDITOR']['selectedLayer'] = _0x289e98['dataset']['layer'];
        });
    });
}
function _0x1890b6(_0x46eba4) {
    if (_0x4c6e33)
        _0x4c6e33['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x46eba4
        }));
}
function _0x35ec99(_0x6efc9e) {
    if (_0x4c6e33)
        _0x4c6e33['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x6efc9e
        }));
}
function _0x57ae6c(_0x36adfd, _0x83d834, _0x31999f, _0x2fddf5) {
    const _0x4df6ae = document['getElementById']('admin-panel');
    if (_0x4df6ae)
        _0x4df6ae['remove']();
    if (_0x4df6ae && _0x4df6ae['dataset']['target'] === String(_0x36adfd))
        return;
    const _0x58a9e5 = document['createElement']('div');
    _0x58a9e5['id'] = 'admin-panel';
    _0x58a9e5['dataset']['target'] = String(_0x36adfd);
    _0x58a9e5['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x38e2c7 = document['createElement']('div');
    _0x38e2c7['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x38e2c7['textContent'] = _0x83d834;
    _0x58a9e5['appendChild'](_0x38e2c7);
    const _0x108ca3 = document['createElement']('button');
    _0x108ca3['textContent'] = 'Kick';
    _0x108ca3['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x108ca3['onmouseenter'] = () => _0x108ca3['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x108ca3['onmouseleave'] = () => _0x108ca3['style']['background'] = 'transparent';
    _0x108ca3['onclick'] = () => {
        _0x1890b6(_0x36adfd);
        _0x58a9e5['remove']();
    };
    _0x58a9e5['appendChild'](_0x108ca3);
    const _0x453d77 = document['createElement']('button');
    _0x453d77['textContent'] = 'Ban';
    _0x453d77['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x453d77['onmouseenter'] = () => _0x453d77['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x453d77['onmouseleave'] = () => _0x453d77['style']['background'] = 'transparent';
    _0x453d77['onclick'] = () => {
        _0x35ec99(_0x36adfd);
        _0x58a9e5['remove']();
    };
    _0x58a9e5['appendChild'](_0x453d77);
    document['body']['appendChild'](_0x58a9e5);
    const _0x3e3397 = _0x58a9e5['offsetWidth'] || 0x91;
    const _0x13c738 = _0x58a9e5['offsetHeight'] || 0x50;
    let _0x5cded4 = _0x31999f - _0x3e3397;
    let _0x215a7b = _0x2fddf5;
    if (_0x5cded4 < 0x4)
        _0x5cded4 = _0x31999f;
    if (_0x215a7b + _0x13c738 > window['innerHeight'] - 0x4)
        _0x215a7b = window['innerHeight'] - _0x13c738 - 0x4;
    _0x58a9e5['style']['left'] = _0x5cded4 + 'px';
    _0x58a9e5['style']['top'] = _0x215a7b + 'px';
    const _0x343312 = _0x3e62a6 => {
        if (!_0x58a9e5['contains'](_0x3e62a6['target'])) {
            _0x58a9e5['remove']();
            document['removeEventListener']('mousedown', _0x343312);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x343312), 0x0);
}
function _0x259299() {
    const _0x1fd317 = document['getElementById']('leaderboard-list');
    _0x1fd317['innerHTML'] = '';
    const _0x178704 = document['createElement']('div');
    _0x178704['className'] = 'leaderboard-entry';
    const _0x9c8db1 = document['createElement']('span');
    _0x9c8db1['textContent'] = _0x503b20 + (_0x2129c7 ? '\x20[🗝️]' : '');
    if (_0x2f812b['has'](_0x5870bb) && !_0x5d0144['isDead']) {
        _0x9c8db1['style']['color'] = '#cc88ff';
    }
    _0x178704['appendChild'](_0x9c8db1);
    _0x1fd317['appendChild'](_0x178704);
    for (const _0x5dad23 in _0x543120) {
        const _0x2b2867 = document['createElement']('div');
        _0x2b2867['className'] = 'leaderboard-entry';
        const _0x3d58a0 = document['createElement']('span');
        _0x3d58a0['textContent'] = _0x543120[_0x5dad23]['name'] + (_0x543120[_0x5dad23]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x2f812b['has'](parseInt(_0x5dad23)) && !_0x543120[_0x5dad23]['isDead']) {
            _0x3d58a0['style']['color'] = '#cc88ff';
        }
        _0x2b2867['appendChild'](_0x3d58a0);
        if (_0x2129c7 && !_0x543120[_0x5dad23]['isOwner']) {
            const _0x56571f = _0x543120[_0x5dad23]['id'];
            const _0x2f0203 = _0x543120[_0x5dad23]['name'];
            _0x2b2867['style']['cursor'] = 'context-menu';
            _0x2b2867['addEventListener']('contextmenu', _0x509ffc => {
                _0x509ffc['preventDefault']();
                _0x509ffc['stopPropagation']();
                _0x57ae6c(_0x56571f, _0x2f0203, _0x509ffc['clientX'], _0x509ffc['clientY']);
            });
        }
        _0x1fd317['appendChild'](_0x2b2867);
    }
}
window['addEventListener']('resize', _0xae48e3);
function _0xae48e3() {
    _0x4ef7be['width'] = window['innerWidth'];
    _0x4ef7be['height'] = window['innerHeight'];
    _0x2db053['SYSTEM']['viewScale'] = Math['max'](_0x4ef7be['width'] / _0x45588e, _0x4ef7be['height'] / _0x58e48e);
    _0x2db053['CAMERA']['width'] = _0x4ef7be['width'] / _0x2db053['SYSTEM']['viewScale'];
    _0x2db053['CAMERA']['height'] = _0x4ef7be['height'] / _0x2db053['SYSTEM']['viewScale'];
    _0x4f4ae3['imageSmoothingEnabled'] = ![];
}
function _0x241bbe(_0x4d310d) {
    if (_0x4d310d['ctrlKey'] || _0x4d310d['metaKey']) {
        if (_0x4d310d['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x4d310d['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x4d310d['code'])) {
            _0x4d310d['preventDefault']();
            _0x4d310d['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x241bbe, { 'passive': ![] });
window['addEventListener']('keydown', _0x241bbe, { 'passive': ![] });
window['addEventListener']('keydown', _0x29b8de => {
    const _0x449e8b = _0x29b8de['key']['toLowerCase']();
    if (_0x449e8b === 'tab') {
        _0x29b8de['preventDefault']();
        const _0x5031ae = document['getElementById']('will-ui');
        const _0x1ba106 = document['getElementById']('will-input');
        if (_0x5031ae['style']['display'] === 'flex') {
            _0x5031ae['style']['display'] = 'none';
            if (_0x2db053['GAME_STATE'] !== 'NIGHT' && _0x4c6e33)
                _0x4c6e33['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x1ba106['value']
                }));
            _0x1ba106['blur']();
        } else {
            if (_0x2db053['GAME_STATE'] === 'NIGHT') {
                _0x4de2b4('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x5031ae['style']['display'] = 'flex';
            _0x1ba106['focus']();
            for (let _0x1a7a76 in _0x2db053['INPUTS']['keys'])
                _0x2db053['INPUTS']['keys'][_0x1a7a76] = ![];
        }
        return;
    }
    if (_0x29b8de['key'] === 'Enter') {
        if (_0x14db5d) {
            const _0x38f1f9 = document['getElementById']('play-btn');
            if (_0x38f1f9)
                _0x38f1f9['click']();
            return;
        }
        if (!_0x4c6e33 || _0x4c6e33['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x12fad4 = document['getElementById']('chat-ui');
        const _0x26371b = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x26371b) {
            const _0xcc74ba = _0x26371b['value']['trim']();
            if (_0xcc74ba['length'] > 0x0) {
                _0x4c6e33['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0xcc74ba
                }));
            }
            _0x26371b['value'] = '';
            _0x12fad4['style']['display'] = 'none';
            _0x26371b['blur']();
        } else {
            _0x12fad4['style']['display'] = 'block';
            _0x26371b['focus']();
            for (let _0xc16cc8 in _0x2db053['INPUTS']['keys'])
                _0x2db053['INPUTS']['keys'][_0xc16cc8] = ![];
        }
        _0x29b8de['preventDefault']();
        return;
    }
    if (_0x29b8de['key'] === 'Escape') {
        const _0x52640a = document['getElementById']('guide-ui');
        if (_0x52640a && _0x52640a['style']['display'] === 'flex') {
            _0x52640a['style']['display'] = 'none';
            return;
        }
        const _0x525dbc = document['getElementById']('ability-ui');
        if (_0x525dbc && _0x525dbc['style']['display'] === 'block') {
            _0x525dbc['style']['display'] = 'none';
            return;
        }
        const _0x1a21c5 = document['getElementById']('settings-panel');
        if (_0x1a21c5 && _0x1a21c5['style']['display'] === 'block') {
            _0x1a21c5['style']['display'] = 'none';
            return;
        }
        const _0xa12829 = document['getElementById']('mayor-confirm-dialog');
        if (_0xa12829 && _0xa12829['style']['display'] === 'flex') {
            _0xa12829['style']['display'] = 'none';
            return;
        }
        const _0x3f4209 = document['getElementById']('target-chooser-ui');
        if (_0x3f4209 && _0x3f4209['style']['display'] === 'flex') {
            _0x3f4209['style']['display'] = 'none';
            return;
        }
        const _0x335ca1 = document['getElementById']('chat-ui');
        const _0x294fa = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x294fa) {
            _0x294fa['value'] = '';
            _0x335ca1['style']['display'] = 'none';
            _0x294fa['blur']();
            _0x29b8de['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x2db053['INPUTS']['keys']['hasOwnProperty'](_0x449e8b))
            _0x2db053['INPUTS']['keys'][_0x449e8b] = !![];
        if (!_0x4c6e33 || _0x4c6e33['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x449e8b === 'h' && !_0x29b8de['repeat']) {
            const _0x4ddb00 = document['getElementById']('guide-ui');
            if (_0x4ddb00) {
                _0x4ddb00['style']['display'] = _0x4ddb00['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x449e8b === 't' && !_0x29b8de['repeat']) {
            if (_0x5d0144['isDead'])
                return;
            if (_0x38e3df === 'Mayor') {
                if (_0x2f812b['has'](_0x5870bb)) {
                    _0x4de2b4('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x48f14a = document['getElementById']('mayor-confirm-dialog');
                if (_0x48f14a)
                    _0x48f14a['style']['display'] = 'flex';
                return;
            }
            if (_0x2db053['GAME_STATE'] === 'NIGHT') {
                if (!_0x2db053['NIGHT_ABILITY_OPEN']) {
                    _0x4de2b4('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x444c59 = document['getElementById']('ability-ui');
                if (_0x444c59) {
                    if (_0x444c59['style']['display'] === 'block') {
                        _0x444c59['style']['display'] = 'none';
                    } else {
                        _0x4de2e0();
                        _0x444c59['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x2db053['GAME_STATE'] === 'DAY_DISCUSS' || _0x2db053['GAME_STATE'] === 'DAY_VOTE') {
                _0x4de2b4('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x449e8b === 'e' && !_0x5d0144['isDead']) {
            const _0x5a8e11 = Date['now']();
            if (!window['_lastDoorSend'] || _0x5a8e11 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x5a8e11;
                _0x4c6e33['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x229adc => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x5f407b = _0x229adc['key']['toLowerCase']();
        if (_0x2db053['INPUTS']['keys']['hasOwnProperty'](_0x5f407b))
            _0x2db053['INPUTS']['keys'][_0x5f407b] = ![];
    }
});
window['addEventListener']('mousemove', _0x42cc1a => {
    _0x2db053['INPUTS']['mouseX'] = _0x42cc1a['clientX'];
    _0x2db053['INPUTS']['mouseY'] = _0x42cc1a['clientY'];
    if (_0x2db053['INPUTS']['isMouseDown'] && _0x2db053['EDITOR']['enabled']) {
        _0x219c97(_0x42cc1a['clientX'], _0x42cc1a['clientY']);
    }
});
window['addEventListener']('mousedown', _0x36c6e8 => {
    if (_0x36c6e8['target']['closest']('#editor-ui') || _0x36c6e8['target']['closest']('#leaderboard-ui') || _0x36c6e8['target']['closest']('#chat-log-ui') || _0x36c6e8['target']['closest']('#target-chooser-ui') || _0x36c6e8['target']['closest']('#guide-ui') || _0x36c6e8['target']['closest']('#role-list-ui') || _0x36c6e8['target']['closest']('#ability-ui') || _0x36c6e8['target']['closest']('#settings-panel') || _0x36c6e8['target']['closest']('#mayor-confirm-dialog') || _0x36c6e8['target']['closest']('#mobile-action-bar') || _0x36c6e8['target']['closest']('#mobile-top-bar') || _0x36c6e8['target']['closest']('#mobile-joystick-zone') || _0x36c6e8['target']['closest']('#mobile-chat-overlay') || _0x36c6e8['target']['closest']('#will-ui') || _0x36c6e8['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x36c6e8['button'] === 0x0) {
        _0x2db053['INPUTS']['isMouseDown'] = !![];
        if (_0x2db053['EDITOR']['enabled'])
            _0x219c97(_0x36c6e8['clientX'], _0x36c6e8['clientY']);
    }
});
window['addEventListener']('mouseup', _0x56d010 => {
    _0x2db053['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x3323e3 => {
    if (_0x3323e3['target']['closest']('#settings-btn'))
        return;
    const _0x13bb67 = document['getElementById']('leaderboard-list');
    const _0x4c15e5 = document['getElementById']('leaderboard-toggle');
    if (_0x13bb67['style']['display'] === 'none') {
        _0x13bb67['style']['display'] = 'flex';
        _0x4c15e5['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x13bb67['style']['display'] = 'none';
        _0x4c15e5['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x2a8c06 = document['getElementById']('close-target-btn');
if (_0x2a8c06) {
    _0x2a8c06['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x406c40 = document['getElementById']('close-guide-btn');
if (_0x406c40) {
    _0x406c40['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x28ad84 = document['getElementById']('role-list-header');
if (_0x28ad84) {
    _0x28ad84['addEventListener']('click', () => {
        const _0x2c3f0a = document['getElementById']('role-list-items');
        const _0x488eda = document['getElementById']('role-list-toggle');
        if (_0x2c3f0a['style']['display'] === 'none') {
            _0x2c3f0a['style']['display'] = 'flex';
            _0x488eda['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x2c3f0a['style']['display'] = 'none';
            _0x488eda['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x33ad7c() {
    const _0x3aecc9 = document['getElementById']('mobile-joystick-zone');
    const _0x1a116b = document['getElementById']('mobile-joystick-base');
    const _0x1d3ece = document['getElementById']('mobile-joystick-knob');
    if (_0x3aecc9 && _0x1a116b && _0x1d3ece) {
        const _0x53a2a9 = 0x3e;
        const _0x2f45b4 = (_0x66c2ad, _0x3c1cdf) => {
            const _0x3149c8 = _0x1a116b['getBoundingClientRect']();
            const _0x4f39b9 = _0x3149c8['left'] + _0x3149c8['width'] / 0x2;
            const _0x3e2dcd = _0x3149c8['top'] + _0x3149c8['height'] / 0x2;
            const _0x28d2fa = _0x66c2ad - _0x4f39b9;
            const _0x495f2e = _0x3c1cdf - _0x3e2dcd;
            const _0x5ca17e = Math['hypot'](_0x28d2fa, _0x495f2e);
            if (_0x5ca17e === 0x0) {
                _0x2dcd9d = 0x0;
                _0x3eefa9 = 0x0;
                _0x516a3e = ![];
                _0x1d3ece['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x29b9a8 = Math['min'](_0x5ca17e, _0x53a2a9);
            const _0x348761 = _0x28d2fa / _0x5ca17e * _0x29b9a8;
            const _0x37ffe5 = _0x495f2e / _0x5ca17e * _0x29b9a8;
            _0x2dcd9d = _0x348761 / _0x53a2a9;
            _0x3eefa9 = _0x37ffe5 / _0x53a2a9;
            _0x516a3e = _0x5ca17e >= _0x53a2a9 * 0.75;
            _0x1d3ece['style']['transform'] = 'translate(' + _0x348761 + 'px,\x20' + _0x37ffe5 + 'px)';
        };
        const _0x3c2a23 = _0x353cf1 => {
            for (let _0x31bbdf = 0x0; _0x31bbdf < _0x353cf1['changedTouches']['length']; _0x31bbdf++) {
                const _0x1a753e = _0x353cf1['changedTouches'][_0x31bbdf];
                if (_0x3138d9 === null) {
                    _0x3138d9 = _0x1a753e['identifier'];
                    _0x3b1f37 = !![];
                    _0x2f45b4(_0x1a753e['clientX'], _0x1a753e['clientY']);
                    break;
                }
            }
        };
        const _0x45141a = _0x3839cc => {
            for (let _0x31caf2 = 0x0; _0x31caf2 < _0x3839cc['changedTouches']['length']; _0x31caf2++) {
                const _0x4aa6d8 = _0x3839cc['changedTouches'][_0x31caf2];
                if (_0x4aa6d8['identifier'] === _0x3138d9) {
                    _0x2f45b4(_0x4aa6d8['clientX'], _0x4aa6d8['clientY']);
                    break;
                }
            }
        };
        const _0x50411e = _0x23c79d => {
            for (let _0x3f451f = 0x0; _0x3f451f < _0x23c79d['changedTouches']['length']; _0x3f451f++) {
                const _0x32b53e = _0x23c79d['changedTouches'][_0x3f451f];
                if (_0x32b53e['identifier'] === _0x3138d9) {
                    _0x3138d9 = null;
                    _0x3b1f37 = ![];
                    _0x2dcd9d = 0x0;
                    _0x3eefa9 = 0x0;
                    _0x516a3e = ![];
                    _0x1d3ece['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x3aecc9['addEventListener']('touchstart', _0x33cbf3 => {
            _0x33cbf3['preventDefault']();
            _0x3c2a23(_0x33cbf3);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x45141a, { 'passive': !![] });
        window['addEventListener']('touchend', _0x50411e, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x50411e, { 'passive': !![] });
    }
    const _0x2d73df = (_0x424bb3, _0x3514f0) => {
        const _0xf563b2 = _0x424bb3 / _0x2db053['SYSTEM']['viewScale'];
        const _0x3738cc = _0x3514f0 / _0x2db053['SYSTEM']['viewScale'];
        const _0x3f8e8f = _0x5d0144['x'] - _0x2db053['CAMERA']['x'] + _0x5d0144['width'] / 0x2;
        const _0x471974 = _0x5d0144['y'] - _0x2db053['CAMERA']['y'] + _0x5d0144['height'] / 0x2;
        _0x3f9a43 = Math['atan2'](_0x3738cc - _0x471974, _0xf563b2 - _0x3f8e8f);
        _0x5b48ef = !![];
        _0x2db053['INPUTS']['mouseX'] = _0x424bb3;
        _0x2db053['INPUTS']['mouseY'] = _0x3514f0;
    };
    _0x4ef7be['addEventListener']('touchstart', _0x58d016 => {
        if (_0x14db5d)
            return;
        for (let _0x7d00d9 = 0x0; _0x7d00d9 < _0x58d016['changedTouches']['length']; _0x7d00d9++) {
            const _0x33caf3 = _0x58d016['changedTouches'][_0x7d00d9];
            if (_0x33caf3['identifier'] !== _0x3138d9 && _0x370bd8 === null) {
                _0x370bd8 = _0x33caf3['identifier'];
                _0x2d73df(_0x33caf3['clientX'], _0x33caf3['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x4ef7be['addEventListener']('touchmove', _0x2a7051 => {
        if (_0x14db5d)
            return;
        for (let _0x2e714a = 0x0; _0x2e714a < _0x2a7051['changedTouches']['length']; _0x2e714a++) {
            const _0x12df63 = _0x2a7051['changedTouches'][_0x2e714a];
            if (_0x12df63['identifier'] === _0x370bd8) {
                _0x2d73df(_0x12df63['clientX'], _0x12df63['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0xbc5519 = _0x4ee071 => {
        for (let _0x3cb17a = 0x0; _0x3cb17a < _0x4ee071['changedTouches']['length']; _0x3cb17a++) {
            const _0x5b37fc = _0x4ee071['changedTouches'][_0x3cb17a];
            if (_0x5b37fc['identifier'] === _0x370bd8) {
                _0x370bd8 = null;
                _0x5b48ef = ![];
                break;
            }
        }
    };
    _0x4ef7be['addEventListener']('touchend', _0xbc5519, { 'passive': !![] });
    _0x4ef7be['addEventListener']('touchcancel', _0xbc5519, { 'passive': !![] });
    const _0x15e310 = document['getElementById']('mob-sprint-btn');
    if (_0x15e310) {
        _0x15e310['addEventListener']('click', _0x39738a => {
            _0x39738a['stopPropagation']();
            _0x4479d6 = !_0x4479d6;
            _0x15e310['classList']['toggle']('active', _0x4479d6);
        });
    }
    const _0x4a09a6 = document['getElementById']('mob-interact-btn');
    if (_0x4a09a6) {
        _0x4a09a6['addEventListener']('click', _0x1c1da7 => {
            _0x1c1da7['stopPropagation']();
            if (!_0x5d0144['isDead']) {
                const _0x4d65e7 = Date['now']();
                if (!window['_lastDoorSend'] || _0x4d65e7 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x4d65e7;
                    if (_0x4c6e33 && _0x4c6e33['readyState'] === WebSocket['OPEN'])
                        _0x4c6e33['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x3ffde9 = document['getElementById']('mob-ability-btn');
    if (_0x3ffde9) {
        _0x3ffde9['addEventListener']('click', _0x1ce2fc => {
            _0x1ce2fc['stopPropagation']();
            if (_0x5d0144['isDead'])
                return;
            if (_0x38e3df === 'Mayor') {
                if (_0x2f812b['has'](_0x5870bb)) {
                    _0x4de2b4('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x8d3545 = document['getElementById']('mayor-confirm-dialog');
                if (_0x8d3545)
                    _0x8d3545['style']['display'] = 'flex';
                return;
            }
            if (_0x2db053['GAME_STATE'] === 'NIGHT') {
                if (!_0x2db053['NIGHT_ABILITY_OPEN']) {
                    _0x4de2b4('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x14545e = document['getElementById']('ability-ui');
                if (_0x14545e) {
                    if (_0x14545e['style']['display'] === 'block') {
                        _0x14545e['style']['display'] = 'none';
                    } else {
                        _0x4de2e0();
                        _0x14545e['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x2db053['GAME_STATE'] === 'DAY_DISCUSS' || _0x2db053['GAME_STATE'] === 'DAY_VOTE') {
                _0x4de2b4('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x6dc11c = document['getElementById']('mob-will-btn');
    const _0x47e501 = document['getElementById']('will-ui');
    const _0x27e1b5 = document['getElementById']('will-input');
    const _0x4d8e25 = document['getElementById']('close-will-btn');
    const _0x3e5988 = () => {
        if (!_0x47e501)
            return;
        if (_0x47e501['style']['display'] === 'flex') {
            _0x47e501['style']['display'] = 'none';
            if (_0x2db053['GAME_STATE'] !== 'NIGHT' && _0x4c6e33 && _0x4c6e33['readyState'] === WebSocket['OPEN'] && _0x27e1b5) {
                _0x4c6e33['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x27e1b5['value']
                }));
            }
            if (_0x27e1b5)
                _0x27e1b5['blur']();
        } else {
            if (_0x2db053['GAME_STATE'] === 'NIGHT') {
                _0x4de2b4('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x47e501['style']['display'] = 'flex';
            if (_0x27e1b5)
                _0x27e1b5['focus']();
        }
    };
    if (_0x6dc11c)
        _0x6dc11c['addEventListener']('click', _0x2ff34b => {
            _0x2ff34b['stopPropagation']();
            _0x3e5988();
        });
    if (_0x4d8e25)
        _0x4d8e25['addEventListener']('click', _0x14d7bd => {
            _0x14d7bd['stopPropagation']();
            _0x3e5988();
        });
    const _0x3ce2bd = document['getElementById']('mob-chat-btn');
    const _0x537c0e = document['getElementById']('mobile-chat-overlay');
    const _0x152aa1 = document['getElementById']('mobile-chat-input');
    const _0x4a7bf2 = document['getElementById']('mobile-chat-send');
    const _0x5ccbb7 = document['getElementById']('mobile-chat-cancel');
    const _0x48679e = () => {
        if (!_0x537c0e || !_0x152aa1)
            return;
        _0x537c0e['style']['display'] = 'flex';
        _0x152aa1['value'] = '';
        _0x152aa1['focus']();
    };
    const _0xa9ffe2 = () => {
        if (!_0x537c0e || !_0x152aa1)
            return;
        _0x537c0e['style']['display'] = 'none';
        _0x152aa1['blur']();
    };
    const _0x46762c = () => {
        if (!_0x152aa1)
            return;
        const _0x56cbcb = _0x152aa1['value']['trim']();
        if (_0x56cbcb['length'] > 0x0 && _0x4c6e33 && _0x4c6e33['readyState'] === WebSocket['OPEN']) {
            _0x4c6e33['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x56cbcb
            }));
        }
        _0x152aa1['value'] = '';
        _0xa9ffe2();
    };
    if (_0x3ce2bd)
        _0x3ce2bd['addEventListener']('click', _0x168320 => {
            _0x168320['stopPropagation']();
            _0x48679e();
        });
    if (_0x4a7bf2)
        _0x4a7bf2['addEventListener']('click', _0x48e1c7 => {
            _0x48e1c7['stopPropagation']();
            _0x46762c();
        });
    if (_0x5ccbb7)
        _0x5ccbb7['addEventListener']('click', _0x57c763 => {
            _0x57c763['stopPropagation']();
            _0xa9ffe2();
        });
    if (_0x152aa1) {
        _0x152aa1['addEventListener']('keydown', _0x354f51 => {
            if (_0x354f51['key'] === 'Enter') {
                _0x354f51['preventDefault']();
                _0x46762c();
            } else if (_0x354f51['key'] === 'Escape') {
                _0xa9ffe2();
            }
        });
    }
    const _0xc348a0 = document['getElementById']('mob-top-chat');
    if (_0xc348a0)
        _0xc348a0['addEventListener']('click', _0x51fecd => {
            _0x51fecd['stopPropagation']();
            _0x48679e();
        });
    const _0x51c30c = document['getElementById']('mob-top-will');
    if (_0x51c30c)
        _0x51c30c['addEventListener']('click', _0x170df5 => {
            _0x170df5['stopPropagation']();
            _0x3e5988();
        });
    const _0x157150 = document['getElementById']('mob-top-roles');
    if (_0x157150) {
        _0x157150['addEventListener']('click', _0x4962fa => {
            _0x4962fa['stopPropagation']();
            const _0x1aa039 = document['getElementById']('role-list-ui');
            const _0x33bd45 = document['getElementById']('leaderboard-ui');
            if (_0x33bd45)
                _0x33bd45['style']['display'] = 'none';
            if (_0x1aa039)
                _0x1aa039['style']['display'] = _0x1aa039['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x1daf6c = document['getElementById']('mob-top-players');
    if (_0x1daf6c) {
        _0x1daf6c['addEventListener']('click', _0xa91f15 => {
            _0xa91f15['stopPropagation']();
            const _0x5e76db = document['getElementById']('leaderboard-ui');
            const _0x26a3f8 = document['getElementById']('role-list-ui');
            if (_0x26a3f8)
                _0x26a3f8['style']['display'] = 'none';
            if (_0x5e76db)
                _0x5e76db['style']['display'] = _0x5e76db['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0xaea0c0 = document['getElementById']('mob-top-help');
    if (_0xaea0c0) {
        _0xaea0c0['addEventListener']('click', _0x50f592 => {
            _0x50f592['stopPropagation']();
            const _0x43cc7a = document['getElementById']('guide-ui');
            if (_0x43cc7a)
                _0x43cc7a['style']['display'] = _0x43cc7a['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x43263f) {
            _0x43263f = !![];
            _0x22777a();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
