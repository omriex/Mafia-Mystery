document['addEventListener']('contextmenu', _0x13ec5d => _0x13ec5d['preventDefault']());
const _0x4c68ad = {
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
let _0x55ab3a = '';
function _0x4296f1(_0x174787, _0x267ea) {
    const _0x1964e1 = document['getElementById']('role-list-ui');
    const _0x21f137 = document['getElementById']('role-list-items');
    if (!_0x1964e1 || !_0x21f137)
        return;
    if (!_0x267ea || _0x267ea === 'off' || !_0x174787 || _0x174787['length'] === 0x0) {
        _0x1964e1['style']['display'] = 'none';
        return;
    }
    const _0x6d5871 = _0x267ea + '|' + JSON['stringify'](_0x174787);
    if (_0x6d5871 === _0x55ab3a)
        return;
    _0x55ab3a = _0x6d5871;
    const _0x145401 = document['getElementById']('role-tooltip');
    if (_0x145401) {
        _0x145401['style']['visibility'] = 'hidden';
        _0x145401['style']['opacity'] = '0';
    }
    _0x1964e1['style']['display'] = 'flex';
    _0x21f137['innerHTML'] = '';
    _0x174787['forEach'](_0x4aa5c3 => {
        const _0x2082c5 = document['createElement']('div');
        _0x2082c5['className'] = 'role-list-entry';
        const _0x4d7689 = _0x4aa5c3['name']['includes']('Mafia') || _0x4aa5c3['name'] === 'Skinwalker';
        _0x2082c5['classList']['add'](_0x4d7689 ? 'mafia' : 'town');
        if (_0x267ea === 'precise' && _0x4aa5c3['isDead']) {
            _0x2082c5['classList']['remove']('town', 'mafia');
            _0x2082c5['classList']['add']('dead');
            _0x2082c5['innerHTML'] = '<span>' + _0x4aa5c3['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x9d98e4 = _0x4aa5c3['count'] !== undefined && _0x4aa5c3['count'] !== null ? _0x4aa5c3['count'] + 'x\x20' : '';
            _0x2082c5['innerHTML'] = '<span>' + _0x9d98e4 + _0x4aa5c3['name'] + '</span>';
        }
        if (_0x267ea === 'subalignments' && _0x4c68ad[_0x4aa5c3['name']]) {
            _0x2082c5['style']['cursor'] = 'pointer';
            _0x2082c5['addEventListener']('mouseenter', () => {
                const _0x37c4f8 = document['getElementById']('role-tooltip');
                if (!_0x37c4f8)
                    return;
                const _0x555061 = _0x4c68ad[_0x4aa5c3['name']]['join'](',\x20');
                _0x37c4f8['innerHTML'] = '';
                const _0x2f49b0 = document['createElement']('span');
                _0x2f49b0['style']['color'] = '#ffcc00';
                _0x2f49b0['textContent'] = _0x4aa5c3['name'];
                _0x37c4f8['appendChild'](_0x2f49b0);
                _0x37c4f8['appendChild'](document['createElement']('br'));
                _0x37c4f8['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x555061));
                const _0x5b3cf7 = _0x2082c5['getBoundingClientRect']();
                _0x37c4f8['style']['left'] = _0x5b3cf7['left'] - 0xeb + 'px';
                _0x37c4f8['style']['top'] = _0x5b3cf7['top'] + 'px';
                _0x37c4f8['style']['display'] = 'block';
                _0x37c4f8['style']['visibility'] = 'visible';
                _0x37c4f8['style']['opacity'] = '1';
            });
            _0x2082c5['addEventListener']('mouseleave', () => {
                const _0x24b828 = document['getElementById']('role-tooltip');
                if (_0x24b828) {
                    _0x24b828['style']['display'] = 'none';
                    _0x24b828['style']['visibility'] = 'hidden';
                    _0x24b828['style']['opacity'] = '0';
                }
            });
        }
        _0x21f137['appendChild'](_0x2082c5);
    });
}
let _0x3a17f5 = null;
let _0x1850c6 = null;
const _0x4441c2 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x432ca8 = 'Player???';
let _0x133c27 = ![];
let _0x5488b8 = {};
let _0x1a73d2 = null;
let _0x4f4f5e = 0x0;
let _0x12d891 = 0x0;
let _0x3e0e55 = new Set();
let _0x55ac5e = ![];
let _0xe784dd = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x39012a = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x20f2c6 = ![];
let _0x2bc7c3 = null;
let _0x517338 = 0x0;
let _0x4751d6 = 0x0;
let _0x511120 = ![];
let _0x30c58e = ![];
let _0x731a6e = 0x0;
let _0x233e7d = null;
let _0x46e736 = ![];
const _0x5628bb = ((() => {
    const _0x43c95d = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x4acc84 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x2f9b45 = 0x320;
    const _0x32fb81 = {};
    const _0x3a7641 = {};
    let _0x5cbba = null;
    let _0x6fd3d8 = _0x4acc84 === 0x0;
    let _0x1648d8 = ![];
    for (const [_0x732e9b, _0x588174] of Object['entries'](_0x43c95d)) {
        const _0x460774 = new Audio(_0x588174);
        _0x460774['loop'] = !![];
        _0x460774['volume'] = 0x0;
        _0x460774['preload'] = 'auto';
        _0x32fb81[_0x732e9b] = _0x460774;
        _0x3a7641[_0x732e9b] = null;
    }
    const _0x1c99c7 = _0x285431 => Math['min'](0x1, Math['max'](0x0, _0x285431));
    function _0x49d11d(_0x51da68) {
        if (_0x3a7641[_0x51da68] !== null) {
            cancelAnimationFrame(_0x3a7641[_0x51da68]);
            _0x3a7641[_0x51da68] = null;
        }
    }
    function _0x515ec8(_0x5734a9, _0x426004, _0x58122f, _0x201da1, _0x4b91c5) {
        _0x49d11d(_0x5734a9);
        const _0x36fa8a = _0x32fb81[_0x5734a9];
        const _0x21b75e = performance['now']();
        const _0x2157bc = _0x27f237 => {
            const _0x31c21b = _0x1c99c7((_0x27f237 - _0x21b75e) / _0x201da1);
            const _0x225938 = _0x1c99c7(_0x426004 + (_0x58122f - _0x426004) * _0x31c21b);
            _0x36fa8a['volume'] = _0x6fd3d8 ? 0x0 : _0x225938;
            if (_0x31c21b < 0x1) {
                _0x3a7641[_0x5734a9] = requestAnimationFrame(_0x2157bc);
            } else {
                _0x3a7641[_0x5734a9] = null;
                _0x36fa8a['volume'] = _0x6fd3d8 ? 0x0 : _0x1c99c7(_0x58122f);
                if (_0x4b91c5)
                    _0x4b91c5();
            }
        };
        _0x3a7641[_0x5734a9] = requestAnimationFrame(_0x2157bc);
    }
    function _0x1354cd(_0x46e707) {
        const _0x1105ab = _0x46e707['play']();
        if (_0x1105ab && _0x1105ab['catch']) {
            _0x1105ab['catch'](() => {
                if (!_0x1648d8) {
                    const _0x16eae3 = () => {
                        _0x1648d8 = !![];
                        _0x46e707['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x16eae3);
                        document['removeEventListener']('keydown', _0x16eae3);
                        document['removeEventListener']('touchstart', _0x16eae3);
                    };
                    document['addEventListener']('click', _0x16eae3, { 'once': !![] });
                    document['addEventListener']('keydown', _0x16eae3, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x16eae3, { 'once': !![] });
                }
            });
        }
    }
    function _0x262903(_0x321208) {
        if (!_0x43c95d[_0x321208])
            return;
        if (_0x5cbba === _0x321208)
            return;
        const _0x55c2e3 = _0x5cbba;
        _0x5cbba = _0x321208;
        const _0x141d6b = _0x32fb81[_0x321208];
        _0x49d11d(_0x321208);
        _0x141d6b['currentTime'] = 0x0;
        _0x141d6b['volume'] = 0x0;
        _0x1354cd(_0x141d6b);
        _0x515ec8(_0x321208, 0x0, _0x4acc84, _0x2f9b45);
        if (_0x55c2e3 && _0x32fb81[_0x55c2e3]) {
            const _0x117cba = _0x55c2e3;
            const _0x2debc6 = _0x32fb81[_0x117cba];
            const _0x5eaaad = _0x1c99c7(_0x2debc6['volume']);
            _0x515ec8(_0x117cba, _0x5eaaad, 0x0, _0x2f9b45, () => {
                _0x2debc6['pause']();
                _0x2debc6['currentTime'] = 0x0;
            });
        }
    }
    function _0x33605c(_0x193b1e) {
        _0x4acc84 = _0x1c99c7(_0x193b1e);
        localStorage['setItem']('musicVolume', String(_0x4acc84));
        if (!_0x6fd3d8 && _0x5cbba && _0x3a7641[_0x5cbba] === null) {
            _0x32fb81[_0x5cbba]['volume'] = _0x4acc84;
        }
    }
    function _0x4e0cde() {
        return _0x4acc84;
    }
    function _0x2f75f1(_0x5d76f1) {
        _0x6fd3d8 = _0x5d76f1;
        for (const _0x142ee0 of Object['keys'](_0x32fb81)) {
            if (_0x3a7641[_0x142ee0] === null) {
                _0x32fb81[_0x142ee0]['volume'] = _0x5d76f1 || _0x142ee0 !== _0x5cbba ? 0x0 : _0x4acc84;
            }
        }
    }
    function _0x987d2d() {
        return _0x6fd3d8;
    }
    function _0x438262(_0x516888) {
        if (_0x516888 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x516888 === 'DAY_VOTE')
            return 'voting';
        if (_0x516888 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x409cb7(_0x48b114) {
        _0x262903(_0x438262(_0x48b114));
    }
    function _0x3521af(_0x21f9e6) {
        _0x262903(_0x21f9e6);
    }
    return {
        'play': _0x262903,
        'onStateChange': _0x409cb7,
        'onSoundEvent': _0x3521af,
        'setVolume': _0x33605c,
        'getVolume': _0x4e0cde,
        'setMuted': _0x2f75f1,
        'isMuted': _0x987d2d
    };
})());
const _0x2a6d0c = ((() => {
    const _0x59530d = 0x258;
    const _0x3d192e = 0xb4;
    const _0x598f9b = 0x708;
    const _0x4ae1d2 = 0x140;
    const _0x535993 = 0.18;
    const _0x2243b9 = 0.95;
    const _0x268a76 = new Audio('audio/heartbeat.mp3');
    _0x268a76['loop'] = ![];
    _0x268a76['preload'] = 'auto';
    _0x268a76['volume'] = 0x0;
    let _0x278d24 = 0x0;
    let _0xcfec65 = Infinity;
    function _0x139a4d(_0xeb095d, _0x53ce75, _0x5ad264) {
        return Math['min'](_0x5ad264, Math['max'](_0x53ce75, _0xeb095d));
    }
    function _0xff48c2(_0x101029, _0x500430, _0x2a000e) {
        return _0x101029 + (_0x500430 - _0x101029) * _0x2a000e;
    }
    function _0x81bb1(_0x4d8bf0) {
        if (_0x1d43a0['GAME_STATE'] !== 'NIGHT' || _0x33c173['isDead'] || _0x1a73d2 === 'Skinwalker') {
            _0xcfec65 = Infinity;
            return;
        }
        const _0x13c83f = _0x33c173['x'] + 22.5;
        const _0x18b7de = _0x33c173['y'] + 22.5;
        let _0x5151e6 = Infinity;
        for (const _0x79fd9f in _0x5488b8) {
            const _0x9f3603 = _0x5488b8[_0x79fd9f];
            if (!_0x9f3603['isDark'] || _0x9f3603['isDead'])
                continue;
            const _0x5d28f2 = _0x9f3603['renderX'] + 22.5 - _0x13c83f;
            const _0x22eef7 = _0x9f3603['renderY'] + 22.5 - _0x18b7de;
            const _0x1604f2 = Math['sqrt'](_0x5d28f2 * _0x5d28f2 + _0x22eef7 * _0x22eef7);
            if (_0x1604f2 < _0x5151e6)
                _0x5151e6 = _0x1604f2;
        }
        _0xcfec65 = _0x5151e6;
        if (_0x5151e6 > _0x59530d)
            return;
        const _0x47bcc3 = 0x1 - _0x139a4d((_0x5151e6 - _0x3d192e) / (_0x59530d - _0x3d192e), 0x0, 0x1);
        const _0x1ab2d2 = _0xff48c2(_0x598f9b, _0x4ae1d2, _0x47bcc3);
        const _0x2efbf5 = _0xff48c2(_0x535993, _0x2243b9, _0x47bcc3);
        if (_0x4d8bf0 >= _0x278d24) {
            _0x268a76['currentTime'] = 0x0;
            _0x268a76['volume'] = _0x5628bb['isMuted']() ? 0x0 : _0x139a4d(_0x2efbf5 * _0x5628bb['getVolume']() / 0.7, 0x0, 0x1);
            _0x268a76['play']()['catch'](() => {
            });
            _0x278d24 = _0x4d8bf0 + _0x1ab2d2;
        }
    }
    return { 'tick': _0x81bb1 };
})());
function _0x429e29() {
    const _0x3a0d29 = document['getElementById']('mob-ability-btn');
    if (!_0x3a0d29)
        return;
    const _0x2f746c = _0x1d43a0['GAME_STATE'] === 'NIGHT' && !_0x33c173['isDead'];
    const _0x121320 = _0x1a73d2 === 'Mayor' && !_0x3e0e55['has'](_0x1850c6) && !_0x33c173['isDead'];
    if (_0x2f746c || _0x121320) {
        _0x3a0d29['style']['display'] = 'flex';
    } else {
        _0x3a0d29['style']['display'] = 'none';
    }
}
function _0x42a5ad() {
    const _0xdb36f3 = document['getElementById']('mobile-joystick-zone');
    const _0x3c0d84 = document['getElementById']('mobile-top-bar');
    const _0x3d9133 = document['getElementById']('mobile-action-bar');
    if (!_0xdb36f3 || !_0x3c0d84 || !_0x3d9133)
        return;
    if (!_0x4ad161 && _0x39012a) {
        _0xdb36f3['style']['display'] = 'flex';
        _0x3c0d84['style']['display'] = 'flex';
        _0x3d9133['style']['display'] = 'flex';
        _0x429e29();
    } else {
        _0xdb36f3['style']['display'] = 'none';
        _0x3c0d84['style']['display'] = 'none';
        _0x3d9133['style']['display'] = 'none';
    }
}
const _0x5c90cb = document['getElementById']('gameCanvas');
const _0x8222e2 = _0x5c90cb['getContext']('2d', { 'alpha': ![] });
const _0x2e5b39 = 0x500;
const _0x195434 = 0x2d0;
const _0x1d43a0 = {
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
        'width': _0x2e5b39,
        'height': _0x195434
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
const _0x33c173 = {
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
const _0x133bc9 = new Image();
const _0xeeef72 = new Image();
const _0x37b7a1 = new Image();
const _0x14556c = new Image();
_0x14556c['src'] = 'assets/mayor\x20cosmetic.png';
const _0x2e6cd7 = [
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
const _0x574863 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x734aad = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x734aad === 'body1.png' || _0x734aad === 'body1')
    _0x734aad = 'body01.png';
if (!_0x734aad['endsWith']('.png'))
    _0x734aad += '.png';
let _0xb17213 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0xb17213['endsWith']('.png'))
    _0xb17213 += '.png';
let _0x4ad161 = !![];
let _0x19f8a9 = null;
let _0x433215 = null;
let _0x55d646 = 0x3c;
let _0x1ed052 = 0x2d;
const _0x2311c7 = {};
const _0x3a3878 = new Image();
_0x3a3878['src'] = 'assets/yanito932.png';
_0x2311c7['assets/yanito932.png'] = _0x3a3878;
function _0x51fc17(_0x91ebae) {
    if (!_0x2311c7[_0x91ebae] || !_0x2311c7[_0x91ebae]['complete'] && _0x2311c7[_0x91ebae]['naturalWidth'] === 0x0 && _0x2311c7[_0x91ebae]['naturalHeight'] === 0x0) {
        const _0x15c142 = new Image();
        _0x15c142['src'] = _0x91ebae;
        _0x2311c7[_0x91ebae] = _0x15c142;
    }
    return _0x2311c7[_0x91ebae];
}
function _0x55568b(_0x31cfe7, _0x25e5db, _0xb8bb8, _0xe99cfa, _0x203daa) {
    try {
        const _0x371cb0 = 'assets/' + (_0x25e5db || 'body01.png');
        const _0x2da1e6 = _0x51fc17(_0x371cb0);
        if (_0x2da1e6['complete'] && _0x2da1e6['naturalWidth'] > 0x0) {
            _0x31cfe7['drawImage'](_0x2da1e6, -_0xe99cfa / 0x2, -_0x203daa / 0x2, _0xe99cfa, _0x203daa);
        }
        if (_0xb8bb8 === null || _0xb8bb8 === undefined)
            return;
        const _0x54b8a6 = 'assets/' + _0xb8bb8;
        const _0x21cb40 = _0x51fc17(_0x54b8a6);
        if (_0x21cb40['complete'] && _0x21cb40['naturalWidth'] > 0x0) {
            _0x31cfe7['drawImage'](_0x21cb40, -_0xe99cfa / 0x2, -_0x203daa / 0x2, _0xe99cfa, _0x203daa);
        }
    } catch (_0xfb776a) {
    }
}
function _0x334efb() {
    const _0x448f2d = document['getElementById']('body-skin-grid');
    const _0x1448c8 = document['getElementById']('eyes-skin-grid');
    if (!_0x448f2d || !_0x1448c8)
        return;
    _0x448f2d['innerHTML'] = '';
    _0x2e6cd7['forEach'](_0x202b5b => {
        const _0x33d2e5 = document['createElement']('button');
        _0x33d2e5['className'] = 'skin-btn' + (_0x202b5b === _0x734aad ? '\x20selected' : '');
        const _0x83a533 = document['createElement']('img');
        _0x83a533['src'] = 'assets/' + _0x202b5b;
        _0x33d2e5['appendChild'](_0x83a533);
        _0x33d2e5['onclick'] = () => {
            _0x734aad = _0x202b5b;
            localStorage['setItem']('selectedBody', _0x202b5b);
            _0x448f2d['querySelectorAll']('.skin-btn')['forEach'](_0x1a3f1f => _0x1a3f1f['classList']['remove']('selected'));
            _0x33d2e5['classList']['add']('selected');
        };
        _0x448f2d['appendChild'](_0x33d2e5);
    });
    _0x1448c8['innerHTML'] = '';
    _0x574863['forEach'](_0x2338c4 => {
        const _0x4b1eb8 = document['createElement']('button');
        _0x4b1eb8['className'] = 'skin-btn' + (_0x2338c4 === _0xb17213 ? '\x20selected' : '');
        const _0x36b729 = document['createElement']('img');
        _0x36b729['src'] = 'assets/' + _0x2338c4;
        _0x4b1eb8['appendChild'](_0x36b729);
        _0x4b1eb8['onclick'] = () => {
            _0xb17213 = _0x2338c4;
            localStorage['setItem']('selectedEyes', _0x2338c4);
            _0x1448c8['querySelectorAll']('.skin-btn')['forEach'](_0x18b8c5 => _0x18b8c5['classList']['remove']('selected'));
            _0x4b1eb8['classList']['add']('selected');
        };
        _0x1448c8['appendChild'](_0x4b1eb8);
    });
}
function _0x1c6897(_0x2d2ba8) {
    if (!_0x1d43a0['MAP']['columns'] || !_0x1d43a0['CAMERA']['width'])
        return;
    const _0x401e40 = Math['max'](0x0, _0x1d43a0['MAP']['columns'] * _0x1d43a0['MAP']['tileSize'] - _0x1d43a0['CAMERA']['width']);
    const _0x54d4ea = Math['max'](0x0, _0x1d43a0['MAP']['rows'] * _0x1d43a0['MAP']['tileSize'] - _0x1d43a0['CAMERA']['height']);
    if (_0x19f8a9 === null) {
        _0x19f8a9 = _0x401e40 / 0x2;
        _0x433215 = _0x54d4ea / 0x2;
    }
    _0x19f8a9 += _0x55d646 * _0x2d2ba8;
    _0x433215 += _0x1ed052 * _0x2d2ba8;
    if (_0x19f8a9 <= 0x0) {
        _0x19f8a9 = 0x0;
        _0x55d646 = Math['abs'](_0x55d646);
    } else if (_0x19f8a9 >= _0x401e40) {
        _0x19f8a9 = _0x401e40;
        _0x55d646 = -Math['abs'](_0x55d646);
    }
    if (_0x433215 <= 0x0) {
        _0x433215 = 0x0;
        _0x1ed052 = Math['abs'](_0x1ed052);
    } else if (_0x433215 >= _0x54d4ea) {
        _0x433215 = _0x54d4ea;
        _0x1ed052 = -Math['abs'](_0x1ed052);
    }
    _0x1d43a0['CAMERA']['x'] = _0x19f8a9;
    _0x1d43a0['CAMERA']['y'] = _0x433215;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x1a6dba = document['getElementById']('play-btn');
    const _0x223576 = document['getElementById']('username-input');
    const _0x21bf8d = localStorage['getItem']('playerName');
    if (_0x21bf8d && _0x223576) {
        _0x223576['value'] = _0x21bf8d;
    }
    const _0x1e7ad4 = () => {
        _0x5628bb['play']('wait');
        document['removeEventListener']('click', _0x1e7ad4);
        document['removeEventListener']('keydown', _0x1e7ad4);
        document['removeEventListener']('touchstart', _0x1e7ad4);
    };
    document['addEventListener']('click', _0x1e7ad4, { 'once': !![] });
    document['addEventListener']('keydown', _0x1e7ad4, { 'once': !![] });
    document['addEventListener']('touchstart', _0x1e7ad4, { 'once': !![] });
    if (_0x1a6dba) {
        _0x1a6dba['addEventListener']('click', () => {
            const _0x3ad9df = window['_FB'] && window['_FB']['_currentUser'];
            const _0xcf8b50 = window['_FB'] && window['_FB']['_userData'];
            let _0x33d308 = !![];
            if (_0x3ad9df && _0xcf8b50 && _0xcf8b50['username']) {
                _0x432ca8 = _0xcf8b50['username'];
                _0x33d308 = ![];
            } else {
                const _0x4d1a40 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x432ca8 = 'user' + _0x4d1a40;
                _0x33d308 = !![];
            }
            const _0x47fd5e = _0x33d308 ? 'body01.png' : _0x734aad;
            const _0x317e57 = _0x33d308 ? 'eyes4.png' : _0xb17213;
            const _0xa19c25 = !_0x33d308 && _0xcf8b50 && _0xcf8b50['photoURL'] ? _0xcf8b50['photoURL'] : '';
            const _0x4cb0c1 = !_0x33d308 && _0x3ad9df ? _0x3ad9df['uid'] : '';
            localStorage['setItem']('playerName', _0x432ca8);
            _0x4ad161 = ![];
            _0x1d43a0['CAMERA']['x'] = null;
            _0x1d43a0['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x441317 = document['getElementById']('chat-log-wrap');
            if (_0x441317)
                _0x441317['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x19a655 = document['getElementById']('controls-hint');
            if (_0x19a655 && !_0x39012a)
                _0x19a655['style']['display'] = 'block';
            _0x42a5ad();
            if (_0x39012a) {
                const _0x1858c3 = document['getElementById']('leaderboard-list');
                const _0x272907 = document['getElementById']('leaderboard-toggle');
                if (_0x1858c3) {
                    _0x1858c3['style']['display'] = 'none';
                    if (_0x272907)
                        _0x272907['style']['transform'] = 'rotate(180deg)';
                }
                const _0x485f9b = document['getElementById']('role-list-items');
                const _0x1eccae = document['getElementById']('role-list-toggle');
                if (_0x485f9b) {
                    _0x485f9b['style']['display'] = 'none';
                    if (_0x1eccae)
                        _0x1eccae['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x53362c = JSON['stringify']({
                'type': 'join',
                'name': _0x432ca8,
                'token': _0x4441c2,
                'body': _0x47fd5e,
                'eyes': _0x317e57,
                'isGuest': _0x33d308,
                'uid': _0x4cb0c1,
                'photoURL': _0xa19c25
            });
            if (_0x3a17f5 && _0x3a17f5['readyState'] === WebSocket['OPEN']) {
                _0x3a17f5['send'](_0x53362c);
            } else if (!_0x3a17f5 || _0x3a17f5['readyState'] === WebSocket['CLOSED'] || _0x3a17f5['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x53362c;
                _0x449c79();
            }
        });
    }
    _0x334efb();
    _0x449c79();
    _0x2bcd33();
    _0x280189();
    _0x31de01();
});
function _0x280189() {
    const _0x16985e = document['getElementById']('settings-btn');
    const _0x4d537d = document['getElementById']('settings-panel');
    const _0x5eb593 = document['getElementById']('close-settings-btn');
    const _0xab6b01 = document['getElementById']('setting-mouse-relative');
    if (_0xab6b01) {
        _0xab6b01['checked'] = _0xe784dd;
        _0xab6b01['addEventListener']('change', () => {
            _0xe784dd = _0xab6b01['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0xe784dd ? 'true' : 'false');
        });
    }
    const _0x49411e = document['getElementById']('setting-music-volume');
    const _0xe27daa = document['getElementById']('setting-music-volume-display');
    function _0x55d1a2(_0x5b4745) {
        const _0xa6cbe3 = (_0x5b4745['value'] - _0x5b4745['min']) / (_0x5b4745['max'] - _0x5b4745['min']) * 0x64;
        _0x5b4745['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0xa6cbe3 + '%,\x20#444\x20' + _0xa6cbe3 + '%)';
    }
    if (_0x49411e) {
        const _0x3d0de7 = _0x5628bb['getVolume']();
        const _0x207215 = Math['round'](_0x3d0de7 * 0x64);
        _0x49411e['value'] = _0x207215;
        if (_0xe27daa)
            _0xe27daa['textContent'] = _0x207215 + '%';
        _0x55d1a2(_0x49411e);
        _0x49411e['addEventListener']('input', () => {
            const _0x1fcdc7 = parseInt(_0x49411e['value'], 0xa);
            if (_0xe27daa)
                _0xe27daa['textContent'] = _0x1fcdc7 + '%';
            _0x55d1a2(_0x49411e);
            _0x5628bb['setVolume'](_0x1fcdc7 / 0x64);
            _0x5628bb['setMuted'](_0x1fcdc7 === 0x0);
        });
    }
    if (_0x16985e && _0x4d537d) {
        _0x16985e['addEventListener']('click', _0xf8afed => {
            _0xf8afed['stopPropagation']();
            _0x4d537d['style']['display'] = _0x4d537d['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x5eb593 && _0x4d537d) {
        _0x5eb593['addEventListener']('click', () => {
            _0x4d537d['style']['display'] = 'none';
        });
    }
    const _0x1a2afa = document['getElementById']('mayor-confirm-yes');
    const _0x33274a = document['getElementById']('mayor-confirm-no');
    const _0x2fc1a7 = document['getElementById']('mayor-confirm-dialog');
    if (_0x1a2afa && _0x2fc1a7) {
        _0x1a2afa['addEventListener']('click', () => {
            if (_0x3a17f5 && _0x3a17f5['readyState'] === WebSocket['OPEN']) {
                _0x3a17f5['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x2fc1a7['style']['display'] = 'none';
        });
    }
    if (_0x33274a && _0x2fc1a7) {
        _0x33274a['addEventListener']('click', () => {
            _0x2fc1a7['style']['display'] = 'none';
        });
    }
    const _0x53b99d = document['getElementById']('close-ability-btn');
    if (_0x53b99d) {
        _0x53b99d['addEventListener']('click', () => {
            const _0x5f60ae = document['getElementById']('ability-ui');
            if (_0x5f60ae)
                _0x5f60ae['style']['display'] = 'none';
        });
    }
}
let _0x20735b = '';
function _0x2477cf(_0x3e8eae) {
    const _0x27037d = document['getElementById']('vote-tally-panel');
    const _0x468262 = document['getElementById']('vote-tally-list');
    if (!_0x27037d || !_0x468262)
        return;
    if (_0x3e8eae['state'] !== 'DAY_VOTE') {
        _0x27037d['style']['display'] = 'none';
        _0x20735b = '';
        return;
    }
    _0x27037d['style']['display'] = 'block';
    const _0x309884 = {};
    for (const _0x2fe68e in _0x5488b8) {
        if (!_0x5488b8[_0x2fe68e]['isDead'])
            _0x309884[_0x2fe68e] = 0x0;
    }
    if (_0x1850c6 && !_0x33c173['isDead'])
        _0x309884[_0x1850c6] = 0x0;
    const _0x1774e7 = _0x3e8eae['votes'] || {};
    for (const _0x44f26b in _0x1774e7) {
        const _0x39a3f5 = _0x1774e7[_0x44f26b];
        const _0xb4f4f0 = _0x3e8eae['mayorRevealed'] && _0x3e8eae['mayorRevealed'][_0x44f26b] ? 0x2 : 0x1;
        _0x309884[_0x39a3f5] = (_0x309884[_0x39a3f5] || 0x0) + _0xb4f4f0;
    }
    let _0x420520 = 0x0;
    const _0x3d676b = _0x3e8eae['skips'] || {};
    for (const _0x311ef2 in _0x3d676b) {
        _0x420520 += Number(_0x3d676b[_0x311ef2]) || 0x1;
    }
    const _0xde3131 = JSON['stringify'](_0x309884) + '_' + _0x420520 + '_' + _0x33c173['isDead'];
    if (_0xde3131 === _0x20735b)
        return;
    _0x20735b = _0xde3131;
    _0x468262['innerHTML'] = '';
    for (const _0x142bc8 in _0x309884) {
        const _0x29a244 = parseInt(_0x142bc8);
        const _0x5eb78d = _0x29a244 === _0x1850c6 ? _0x432ca8 : _0x5488b8[_0x142bc8] ? _0x5488b8[_0x142bc8]['name'] : 'Player\x20' + _0x142bc8;
        const _0x5572b4 = document['createElement']('div');
        _0x5572b4['className'] = 'vote-tally-entry';
        const _0x13e675 = document['createElement']('span');
        _0x13e675['textContent'] = _0x5eb78d;
        const _0x4be013 = document['createElement']('span');
        _0x4be013['className'] = 'vote-count';
        _0x4be013['textContent'] = _0x309884[_0x142bc8] + '\x20vote' + (_0x309884[_0x142bc8] === 0x1 ? '' : 's');
        _0x5572b4['appendChild'](_0x13e675);
        _0x5572b4['appendChild'](_0x4be013);
        if (_0x29a244 !== _0x1850c6 && !_0x33c173['isDead']) {
            _0x5572b4['style']['cursor'] = 'pointer';
            _0x5572b4['title'] = 'Vote\x20for\x20' + _0x5eb78d;
            _0x5572b4['addEventListener']('click', _0x1d54c1 => {
                _0x1d54c1['stopPropagation']();
                if (_0x3a17f5 && _0x3a17f5['readyState'] === WebSocket['OPEN']) {
                    _0x3a17f5['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x5eb78d
                    }));
                }
            });
        }
        _0x468262['appendChild'](_0x5572b4);
    }
    const _0x1baa51 = document['createElement']('div');
    _0x1baa51['className'] = 'vote-tally-skip';
    _0x1baa51['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x420520 + '</span>';
    if (!_0x33c173['isDead']) {
        _0x1baa51['style']['cursor'] = 'pointer';
        _0x1baa51['title'] = 'Click\x20to\x20skip\x20vote';
        _0x1baa51['addEventListener']('click', _0x329ffc => {
            _0x329ffc['stopPropagation']();
            if (_0x3a17f5 && _0x3a17f5['readyState'] === WebSocket['OPEN']) {
                _0x3a17f5['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x468262['appendChild'](_0x1baa51);
}
let _0x52177c = null;
let _0x20845e = null;
let _0x572abd = null;
function _0x104ad0() {
    if (_0x3a17f5 && _0x3a17f5['readyState'] === WebSocket['OPEN']) {
        _0x3a17f5['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x52177c,
            'abilityTarget': _0x20845e,
            'killTarget': _0x572abd
        }));
    }
}
function _0x518e0f() {
    const _0x5baf80 = document['getElementById']('ability-ui-body');
    if (!_0x5baf80)
        return;
    _0x5baf80['innerHTML'] = '';
    if (_0x1a73d2 === 'Celebrity' || _0x1a73d2 === 'Mayor') {
        const _0x4d8069 = document['createElement']('div');
        _0x4d8069['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x4d8069['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x5baf80['appendChild'](_0x4d8069);
        return;
    }
    if (_0x1a73d2 === 'Skinwalker') {
        const _0x31cb23 = document['createElement']('div');
        _0x31cb23['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x31cb23['innerText'] = 'Transform\x20into:';
        _0x5baf80['appendChild'](_0x31cb23);
        const _0x399278 = document['createElement']('div');
        _0x399278['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x25a401 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x88789 = _0x2de41f => {
            if (!_0x1d43a0['ROLE_LIST_RAW'] || _0x1d43a0['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x1d43a0['ROLE_LIST_RAW']['some'](_0x28557b => {
                if (_0x28557b['name'] === _0x2de41f)
                    return !_0x28557b['isDead'];
                if (_0x4c68ad[_0x28557b['name']] && _0x4c68ad[_0x28557b['name']]['includes'](_0x2de41f))
                    return !![];
                return ![];
            });
        };
        const _0x4e1b29 = [
            'None',
            ..._0x25a401['filter'](_0x88789)
        ];
        _0x4e1b29['forEach'](_0x592f31 => {
            const _0x2c3ca7 = document['createElement']('button');
            _0x2c3ca7['className'] = 'layer-btn';
            _0x2c3ca7['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x2c3ca7['innerText'] = _0x592f31;
            const _0x19f087 = _0x592f31 === 'None' && !_0x52177c || _0x52177c === _0x592f31;
            if (_0x19f087)
                _0x2c3ca7['classList']['add']('active');
            _0x2c3ca7['onclick'] = () => {
                _0x52177c = _0x592f31 === 'None' ? null : _0x592f31;
                _0x104ad0();
                _0x518e0f();
            };
            _0x399278['appendChild'](_0x2c3ca7);
        });
        _0x5baf80['appendChild'](_0x399278);
        if (_0x88789('Vigilante')) {
            const _0x5a053c = document['createElement']('div');
            _0x5a053c['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x5a053c['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x5baf80['appendChild'](_0x5a053c);
        }
        if (_0x52177c === 'Vigilante') {
            const _0xc8360c = document['createElement']('div');
            _0xc8360c['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0xc8360c['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x5baf80['appendChild'](_0xc8360c);
        } else if (_0x52177c && _0x52177c !== 'Celebrity') {
            const _0x33a414 = document['createElement']('div');
            _0x33a414['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x33a414['innerText'] = 'Use\x20' + _0x52177c + '\x20ability\x20on:';
            _0x5baf80['appendChild'](_0x33a414);
            const _0x3390ad = document['createElement']('div');
            _0x3390ad['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x29abdb = document['createElement']('button');
            _0x29abdb['className'] = 'layer-btn';
            _0x29abdb['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x29abdb['innerText'] = 'No\x20one';
            if (!_0x20845e)
                _0x29abdb['classList']['add']('active');
            _0x29abdb['onclick'] = () => {
                _0x20845e = null;
                _0x104ad0();
                _0x518e0f();
            };
            _0x3390ad['appendChild'](_0x29abdb);
            for (const _0x487c2f in _0x5488b8) {
                const _0x461197 = _0x5488b8[_0x487c2f];
                if (_0x461197['isDead'])
                    continue;
                const _0x1c49a3 = document['createElement']('button');
                _0x1c49a3['className'] = 'layer-btn';
                _0x1c49a3['innerText'] = _0x461197['name'];
                if (_0x20845e === parseInt(_0x487c2f))
                    _0x1c49a3['classList']['add']('active');
                _0x1c49a3['onclick'] = () => {
                    _0x20845e = parseInt(_0x487c2f);
                    _0x104ad0();
                    _0x518e0f();
                };
                _0x3390ad['appendChild'](_0x1c49a3);
            }
            _0x5baf80['appendChild'](_0x3390ad);
        }
        const _0x457041 = document['createElement']('div');
        _0x457041['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x457041['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x5baf80['appendChild'](_0x457041);
        const _0x2e179b = document['createElement']('div');
        _0x2e179b['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x38d975 = document['createElement']('button');
        _0x38d975['className'] = 'layer-btn';
        _0x38d975['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x38d975['innerText'] = 'No\x20one';
        if (!_0x572abd && !_0x1d43a0['CURRENT_TARGET'])
            _0x38d975['classList']['add']('active');
        _0x38d975['onclick'] = () => {
            _0x572abd = null;
            _0x1d43a0['CURRENT_TARGET'] = null;
            _0x104ad0();
            _0x518e0f();
        };
        _0x2e179b['appendChild'](_0x38d975);
        for (const _0x5642da in _0x5488b8) {
            const _0x38d5a5 = _0x5488b8[_0x5642da];
            if (_0x38d5a5['isDead'])
                continue;
            const _0x46a104 = document['createElement']('button');
            _0x46a104['className'] = 'layer-btn';
            _0x46a104['innerText'] = _0x38d5a5['name'];
            if (_0x572abd === parseInt(_0x5642da) || _0x1d43a0['CURRENT_TARGET'] === parseInt(_0x5642da))
                _0x46a104['classList']['add']('active');
            _0x46a104['onclick'] = () => {
                _0x572abd = parseInt(_0x5642da);
                _0x1d43a0['CURRENT_TARGET'] = parseInt(_0x5642da);
                _0x104ad0();
                _0x518e0f();
            };
            _0x2e179b['appendChild'](_0x46a104);
        }
        _0x5baf80['appendChild'](_0x2e179b);
        return;
    }
    let _0x5a89c4 = '';
    let _0x4776ce = ![];
    if (_0x1a73d2 === 'Doctor') {
        _0x5a89c4 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x4776ce = !![];
    } else if (_0x1a73d2 === 'Investigator') {
        _0x5a89c4 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x1a73d2 === 'Tracker') {
        _0x5a89c4 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x1a73d2 === 'Archer') {
        _0x5a89c4 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x1a73d2 === 'Escort') {
        _0x5a89c4 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x1a73d2 === 'Vigilante') {
        _0x5a89c4 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x259df5 = document['createElement']('div');
    _0x259df5['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x259df5['innerText'] = _0x5a89c4;
    _0x5baf80['appendChild'](_0x259df5);
    const _0x520d45 = document['createElement']('div');
    _0x520d45['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x478b6c = document['createElement']('button');
    _0x478b6c['className'] = 'layer-btn';
    _0x478b6c['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x478b6c['innerText'] = 'No\x20one';
    if (_0x1d43a0['CURRENT_TARGET'] === null)
        _0x478b6c['classList']['add']('active');
    _0x478b6c['onclick'] = () => {
        _0x1d43a0['CURRENT_TARGET'] = null;
        if (_0x3a17f5 && _0x3a17f5['readyState'] === WebSocket['OPEN']) {
            _0x3a17f5['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x518e0f();
    };
    _0x520d45['appendChild'](_0x478b6c);
    for (const _0x1eb9e7 in _0x5488b8) {
        const _0x4187e7 = _0x5488b8[_0x1eb9e7];
        if (_0x4187e7['isDead'])
            continue;
        const _0x20a782 = document['createElement']('button');
        _0x20a782['className'] = 'layer-btn';
        _0x20a782['innerText'] = _0x4187e7['name'];
        if (_0x1d43a0['CURRENT_TARGET'] === parseInt(_0x1eb9e7))
            _0x20a782['classList']['add']('active');
        _0x20a782['onclick'] = () => {
            _0x1d43a0['CURRENT_TARGET'] = parseInt(_0x1eb9e7);
            if (_0x3a17f5 && _0x3a17f5['readyState'] === WebSocket['OPEN']) {
                _0x3a17f5['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x1eb9e7)
                }));
            }
            _0x518e0f();
        };
        _0x520d45['appendChild'](_0x20a782);
    }
    if (_0x4776ce && !_0x33c173['isDead']) {
        const _0x135634 = document['createElement']('button');
        _0x135634['className'] = 'layer-btn';
        _0x135634['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x135634['innerText'] = _0x432ca8 + '\x20(Self)';
        if (_0x1d43a0['CURRENT_TARGET'] === _0x1850c6)
            _0x135634['classList']['add']('active');
        _0x135634['onclick'] = () => {
            _0x1d43a0['CURRENT_TARGET'] = _0x1850c6;
            if (_0x3a17f5 && _0x3a17f5['readyState'] === WebSocket['OPEN']) {
                _0x3a17f5['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x1850c6
                }));
            }
            _0x518e0f();
        };
        _0x520d45['appendChild'](_0x135634);
    }
    _0x5baf80['appendChild'](_0x520d45);
}
function _0x449c79() {
    if (_0x3a17f5 && (_0x3a17f5['readyState'] === WebSocket['OPEN'] || _0x3a17f5['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x4b454a = new URLSearchParams();
    if (_0x4441c2)
        _0x4b454a['set']('token', _0x4441c2);
    _0x4b454a['set']('ngrok-skip-browser-warning', 'true');
    const _0x46900c = 'wss://rubber-virtual-application-occupational.trycloudflare.com';
    const _0x28419b = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x46900c;
    const _0x5572e1 = _0x28419b + '/?' + _0x4b454a['toString']();
    _0x3a17f5 = new WebSocket(_0x5572e1);
    _0x3a17f5['onopen'] = function () {
        if (!_0x4ad161 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x9d82a = window['_FB'] && window['_FB']['_currentUser'];
                const _0x2d406c = window['_FB'] && window['_FB']['_userData'];
                const _0x56c58b = !(_0x9d82a && _0x2d406c && _0x2d406c['username']);
                const _0x50c931 = _0x56c58b ? 'body01.png' : _0x734aad;
                const _0x5ba442 = _0x56c58b ? 'eyes4.png' : _0xb17213;
                const _0x3f1d69 = !_0x56c58b && _0x2d406c && _0x2d406c['photoURL'] ? _0x2d406c['photoURL'] : '';
                const _0x2f4db0 = !_0x56c58b && _0x9d82a ? _0x9d82a['uid'] : '';
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x432ca8,
                    'token': _0x4441c2,
                    'body': _0x50c931,
                    'eyes': _0x5ba442,
                    'isGuest': _0x56c58b,
                    'uid': _0x2f4db0,
                    'photoURL': _0x3f1d69
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x3a17f5 && _0x3a17f5['readyState'] === WebSocket['OPEN']) {
            _0x3a17f5['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x3a17f5['onclose'] = _0x4cbe52 => {
        if (_0x4cbe52['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x4cbe52['code'] === 0xfa2 || _0x4cbe52['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x5bd5b1 = document['getElementById']('disconnect-overlay');
        if (!_0x5bd5b1) {
            _0x5bd5b1 = document['createElement']('div');
            _0x5bd5b1['id'] = 'disconnect-overlay';
            _0x5bd5b1['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x5bd5b1['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x5bd5b1);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x3a17f5['onmessage'] = _0x16c6e0 => {
        const _0x2468af = JSON['parse'](_0x16c6e0['data']);
        if (_0x2468af['type'] === 'map_data') {
            _0x1d43a0['MAP']['tileSize'] = _0x2468af['map']['tileSize'];
            _0x1d43a0['MAP']['columns'] = _0x2468af['map']['columns'];
            _0x1d43a0['MAP']['rows'] = _0x2468af['map']['rows'];
            _0x1d43a0['MAP']['layers'] = _0x2468af['map']['layers'];
            if (_0x2468af['map']['doors']) {
                _0x1d43a0['MAP']['doors'] = _0x2468af['map']['doors'];
                const _0x475d75 = _0x1d43a0['MAP']['layers']['find'](_0x4896a0 => _0x4896a0['name'] === 'floor2');
                if (_0x475d75) {
                    for (const _0x4c3129 in _0x1d43a0['MAP']['doors']) {
                        _0x475d75['data'][parseInt(_0x4c3129)] = 0x2;
                    }
                }
            }
            if (_0x2468af['entities'])
                _0x1d43a0['ENTITIES'] = _0x2468af['entities'];
            _0x3d2c7a();
            _0x1d43a0['SYSTEM']['isReady'] = !![];
            _0x3184e1();
            if (!_0x1d43a0['SYSTEM']['_gameLoopRunning']) {
                _0x1d43a0['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x5811cb);
            }
            return;
        }
        if (_0x2468af['type'] === 'init') {
            _0x1850c6 = _0x2468af['id'];
            _0x4ad161 = ![];
            _0x42a5ad();
            if (_0x39012a) {
                const _0xbdaa17 = document['getElementById']('leaderboard-list');
                const _0x156474 = document['getElementById']('leaderboard-toggle');
                if (_0xbdaa17) {
                    _0xbdaa17['style']['display'] = 'none';
                    if (_0x156474)
                        _0x156474['style']['transform'] = 'rotate(180deg)';
                }
                const _0x3843a7 = document['getElementById']('role-list-items');
                const _0x3524f0 = document['getElementById']('role-list-toggle');
                if (_0x3843a7) {
                    _0x3843a7['style']['display'] = 'none';
                    if (_0x3524f0)
                        _0x3524f0['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x133c27 = _0x2468af['isOwner'] || ![];
            _0x432ca8 = _0x2468af['name'] || _0x432ca8;
            _0x1d43a0['MAP']['tileSize'] = _0x2468af['map']['tileSize'];
            _0x1d43a0['MAP']['columns'] = _0x2468af['map']['columns'];
            _0x1d43a0['MAP']['rows'] = _0x2468af['map']['rows'];
            _0x1d43a0['MAP']['layers'] = _0x2468af['map']['layers'];
            if (_0x2468af['map']['doors']) {
                _0x1d43a0['MAP']['doors'] = _0x2468af['map']['doors'];
                const _0x174001 = _0x1d43a0['MAP']['layers']['find'](_0x5b6024 => _0x5b6024['name'] === 'floor2');
                if (_0x174001) {
                    for (const _0x2d3a5e in _0x1d43a0['MAP']['doors']) {
                        _0x174001['data'][parseInt(_0x2d3a5e)] = 0x2;
                    }
                }
            }
            if (_0x2468af['entities'])
                _0x1d43a0['ENTITIES'] = _0x2468af['entities'];
            _0x3d2c7a();
            _0x33c173['x'] = _0x1d43a0['MAP']['columns'] * _0x1d43a0['MAP']['tileSize'] / 0x2;
            _0x33c173['y'] = _0x1d43a0['MAP']['rows'] * _0x1d43a0['MAP']['tileSize'] / 0x2;
            _0x1d43a0['CAMERA']['x'] = _0x33c173['x'] + _0x33c173['width'] / 0x2 - _0x1d43a0['CAMERA']['width'] / 0x2;
            _0x1d43a0['CAMERA']['y'] = _0x33c173['y'] + _0x33c173['height'] / 0x2 - _0x1d43a0['CAMERA']['height'] / 0x2;
            if (_0x133c27) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x5c5f60();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x1d43a0['SYSTEM']['lastTime'] = performance['now']();
            _0x1d43a0['SYSTEM']['isReady'] = !![];
            _0x29efb9();
            if (!_0x1d43a0['SYSTEM']['_gameLoopRunning']) {
                _0x1d43a0['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x5811cb);
            }
            return;
        } else if (_0x2468af['type'] === 'state') {
            const _0x236d43 = {};
            for (const _0x333d3b in _0x2468af['players']) {
                if (parseInt(_0x333d3b) === _0x1850c6)
                    continue;
                const _0x4eff10 = _0x2468af['players'][_0x333d3b];
                const _0x26d7be = _0x5488b8[_0x333d3b];
                if (_0x26d7be) {
                    const _0xa926f6 = _0x4eff10['x'] - _0x26d7be['renderX'];
                    const _0x5b4977 = _0x4eff10['y'] - _0x26d7be['renderY'];
                    const _0x1127ec = _0xa926f6 * _0xa926f6 + _0x5b4977 * _0x5b4977 > 0x78 * 0x78;
                    Object['assign'](_0x26d7be, _0x4eff10);
                    if (_0x1127ec) {
                        _0x26d7be['renderX'] = _0x4eff10['x'];
                        _0x26d7be['renderY'] = _0x4eff10['y'];
                    }
                    _0x236d43[_0x333d3b] = _0x26d7be;
                } else {
                    _0x236d43[_0x333d3b] = {
                        ..._0x4eff10,
                        'renderX': _0x4eff10['x'],
                        'renderY': _0x4eff10['y'],
                        'renderAngle': _0x4eff10['angle'] || 0x0
                    };
                }
            }
            _0x5488b8 = _0x236d43;
            _0x4c3e99();
            if (_0x2468af['players'][_0x1850c6]) {
                const _0x346cc8 = _0x2468af['players'][_0x1850c6];
                _0x33c173['chats'] = _0x346cc8['chats'] || [];
                _0x33c173['isDead'] = _0x346cc8['isDead'];
                if (_0x346cc8['name'])
                    _0x432ca8 = _0x346cc8['name'];
                _0x29efb9();
                const _0x39333d = Math['hypot'](_0x346cc8['x'] - _0x33c173['x'], _0x346cc8['y'] - _0x33c173['y']);
                if (_0x39333d > 0xfa) {
                    _0x33c173['x'] = _0x346cc8['x'];
                    _0x33c173['y'] = _0x346cc8['y'];
                } else if (_0x39333d > 0x50) {
                    _0x33c173['x'] += (_0x346cc8['x'] - _0x33c173['x']) * 0.06;
                    _0x33c173['y'] += (_0x346cc8['y'] - _0x33c173['y']) * 0.06;
                }
            }
            if (_0x2468af['entities'])
                _0x1d43a0['ENTITIES'] = _0x2468af['entities'];
            if (_0x2468af['game']) {
                _0x1d43a0['GAME_STATE'] = _0x2468af['game']['state'];
                _0x1d43a0['NIGHT_ABILITY_OPEN'] = _0x2468af['game']['nightAbilityOpen'];
                if (_0x2468af['game']['mayorRevealed']) {
                    for (const _0x3cf9fd in _0x2468af['game']['mayorRevealed']) {
                        _0x3e0e55['add'](parseInt(_0x3cf9fd));
                    }
                }
                if (_0x1d43a0['LAST_STATE'] !== _0x1d43a0['GAME_STATE']) {
                    if (_0x1d43a0['GAME_STATE'] !== 'NIGHT') {
                        _0x1d43a0['CURRENT_TARGET'] = null;
                        _0x52177c = null;
                        _0x20845e = null;
                        _0x572abd = null;
                        const _0x2c8090 = document['getElementById']('ability-ui');
                        if (_0x2c8090)
                            _0x2c8090['style']['display'] = 'none';
                    }
                    if (_0x1d43a0['GAME_STATE'] === 'NIGHT') {
                        _0x33c173['chats'] = [];
                        for (const _0x226b46 in _0x5488b8) {
                            _0x5488b8[_0x226b46]['chats'] = [];
                        }
                    }
                    _0x1d43a0['LAST_STATE'] = _0x1d43a0['GAME_STATE'];
                    _0x429e29();
                    _0x5628bb['onStateChange'](_0x1d43a0['GAME_STATE'], _0x2468af['game']['nightAbilityOpen']);
                }
                const _0x52d014 = document['getElementById']('phase-ui');
                if (_0x52d014) {
                    if (_0x2468af['game']['state'] === 'LOBBY') {
                        _0x52d014['style']['display'] = 'none';
                    } else {
                        _0x52d014['style']['display'] = 'block';
                    }
                    let _0x226fa4 = _0x2468af['game']['state']['replace']('_', '\x20');
                    if (_0x2468af['game']['state'] === 'DAY_DISCUSS') {
                        _0x226fa4 = 'DAY\x20' + (_0x2468af['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x2468af['game']['timer'] + 's';
                    } else if (_0x2468af['game']['state'] === 'DAY_VOTE') {
                        _0x226fa4 = 'DAY\x20' + (_0x2468af['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x2468af['game']['timer'] + 's';
                    } else if (_0x2468af['game']['state'] === 'NIGHT') {
                        const _0x263751 = _0x2468af['game']['dayCount'] || 0x1;
                        if (_0x2468af['game']['nightAbilityOpen']) {
                            _0x226fa4 = 'NIGHT\x20' + _0x263751 + '\x20ABILITY\x20PHASE';
                            const _0x49630b = _0x2468af['game']['abilityTimer'] !== undefined ? _0x2468af['game']['abilityTimer'] : _0x2468af['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x49630b + 's';
                        } else {
                            _0x226fa4 = 'NIGHT\x20' + _0x263751;
                            document['getElementById']('phase-timer')['innerText'] = _0x2468af['game']['timer'] + 's';
                        }
                    }
                    if (_0x2468af['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x226fa4;
                    }
                }
                if (_0x2468af['game']['state'] === 'NIGHT') {
                    const _0x524221 = document['getElementById']('ability-timer-label');
                    if (_0x524221) {
                        const _0x139910 = _0x2468af['game']['abilityTimer'] !== undefined ? _0x2468af['game']['abilityTimer'] : _0x2468af['game']['timer'];
                        _0x524221['innerText'] = _0x2468af['game']['nightAbilityOpen'] ? _0x139910 + 's' : '';
                    }
                    if (_0x2468af['game']['nightAbilityOpen'] && !_0x55ac5e && !_0x33c173['isDead']) {
                        _0x55ac5e = !![];
                        _0x518e0f();
                        const _0xe13b35 = document['getElementById']('ability-ui');
                        if (_0xe13b35)
                            _0xe13b35['style']['display'] = 'block';
                    }
                    if (!_0x2468af['game']['nightAbilityOpen']) {
                        const _0x49958c = document['getElementById']('ability-ui');
                        if (_0x49958c && _0x49958c['style']['display'] === 'block') {
                            _0x49958c['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x55ac5e = ![];
                }
                _0x2477cf(_0x2468af['game']);
                if (_0x2468af['game']['roleListMode'] !== undefined) {
                    _0x1d43a0['ROLE_LIST_RAW'] = _0x2468af['game']['roleList'] || [];
                    _0x4296f1(_0x2468af['game']['roleList'], _0x2468af['game']['roleListMode']);
                }
            }
        } else if (_0x2468af['type'] === 'teleport') {
            _0x33c173['x'] = _0x2468af['x'];
            _0x33c173['y'] = _0x2468af['y'];
            _0x33c173['vx'] = 0x0;
            _0x33c173['vy'] = 0x0;
            _0x1d43a0['CAMERA']['x'] = null;
            if (_0x2468af['teleportId'] !== undefined)
                _0x12d891 = _0x2468af['teleportId'];
        } else if (_0x2468af['type'] === 'bulk_teleport') {
            for (const _0x57e96b in _0x2468af['positions']) {
                const _0x52a779 = _0x2468af['positions'][_0x57e96b];
                if (parseInt(_0x57e96b) === _0x1850c6) {
                    _0x33c173['x'] = _0x52a779['x'];
                    _0x33c173['y'] = _0x52a779['y'];
                    _0x33c173['vx'] = 0x0;
                    _0x33c173['vy'] = 0x0;
                    _0x1d43a0['CAMERA']['x'] = null;
                    continue;
                }
                const _0x215746 = _0x5488b8[_0x57e96b];
                if (_0x215746) {
                    _0x215746['x'] = _0x52a779['x'];
                    _0x215746['y'] = _0x52a779['y'];
                    _0x215746['renderX'] = _0x52a779['x'];
                    _0x215746['renderY'] = _0x52a779['y'];
                    _0x215746['vx'] = 0x0;
                    _0x215746['vy'] = 0x0;
                }
            }
        } else if (_0x2468af['type'] === 'player_left') {
            delete _0x5488b8[_0x2468af['id']];
            _0x3e0e55['delete'](parseInt(_0x2468af['id']));
        } else if (_0x2468af['type'] === 'map_update') {
            const _0x579fc2 = _0x1d43a0['MAP']['layers']['find'](_0x33b5e3 => _0x33b5e3['name'] === _0x2468af['layer']);
            if (_0x579fc2) {
                _0x579fc2['data'][_0x2468af['row'] * _0x1d43a0['MAP']['columns'] + _0x2468af['col']] = _0x2468af['gid'];
                const _0x51bf8e = _0x2468af['row'] * _0x1d43a0['MAP']['columns'] + _0x2468af['col'];
                if (_0x1d43a0['MAP']['doors'] && _0x1d43a0['MAP']['doors'][_0x51bf8e]) {
                    const _0x2a5cf3 = _0x1d43a0['MAP']['layers']['find'](_0x8a2b5c => _0x8a2b5c['name'] === 'floor2');
                    if (_0x2a5cf3)
                        _0x2a5cf3['data'][_0x51bf8e] = 0x2;
                }
                const _0x44b523 = Math['floor'](_0x2468af['col'] * _0x1d43a0['MAP']['tileSize'] / _0x1d43a0['MAP']['chunkSize']);
                const _0x3d2e8d = Math['floor'](_0x2468af['row'] * _0x1d43a0['MAP']['tileSize'] / _0x1d43a0['MAP']['chunkSize']);
                _0x21c49d(_0x44b523, _0x3d2e8d);
            }
        } else if (_0x2468af['type'] === 'role_assign') {
            _0x1a73d2 = _0x2468af['role'];
            _0x33c173['isDead'] = _0x1a73d2 === 'Spectator';
            _0x3e0e55['clear']();
            _0x1d43a0['CURRENT_TARGET'] = null;
            _0x52177c = null;
            _0x20845e = null;
            _0x572abd = null;
            _0x55ac5e = ![];
            const _0xa2fa06 = document['getElementById']('ability-ui');
            if (_0xa2fa06)
                _0xa2fa06['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x1a73d2;
            _0x429e29();
            _0x10ce57(_0x1a73d2 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x1a73d2, !![]);
            let _0x1ecf12 = '';
            if (_0x1a73d2 === 'Investigator')
                _0x1ecf12 = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x1a73d2 === 'Tracker')
                _0x1ecf12 = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x1a73d2 === 'Doctor')
                _0x1ecf12 = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x1a73d2 === 'Archer')
                _0x1ecf12 = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x1a73d2 === 'Escort')
                _0x1ecf12 = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x1a73d2 === 'Vigilante')
                _0x1ecf12 = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x1a73d2 === 'Skinwalker')
                _0x1ecf12 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x1a73d2 === 'Celebrity')
                _0x1ecf12 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x1a73d2 === 'Mayor')
                _0x1ecf12 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x10ce57(_0x1ecf12, !![]);
        } else if (_0x2468af['type'] === 'mayor_reveal') {
            _0x3e0e55['add'](parseInt(_0x2468af['playerId']));
            _0x29efb9();
            _0x429e29();
        } else if (_0x2468af['type'] === 'rolelist_update') {
            _0x1d43a0['ROLE_LIST_RAW'] = _0x2468af['list'] || [];
            _0x4296f1(_0x2468af['list'], _0x2468af['mode']);
        } else if (_0x2468af['type'] === 'sound_event') {
            _0x5628bb['onSoundEvent'](_0x2468af['track']);
        } else if (_0x2468af['type'] === 'game_over') {
            _0x5628bb['onStateChange']('LOBBY', ![]);
            _0x4296f1([], 'off');
            _0x1a73d2 = null;
            _0x33c173['isDead'] = ![];
            _0x3e0e55['clear']();
            _0x1d43a0['CURRENT_TARGET'] = null;
            _0x52177c = null;
            _0x20845e = null;
            _0x572abd = null;
            _0x55ac5e = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x429e29();
            _0x10ce57('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x2468af['type'] === 'chat_log') {
            _0x10ce57(_0x2468af['sender'] + ':\x20' + _0x2468af['text']);
        } else if (_0x2468af['type'] === 'sys_chat') {
            _0x10ce57(_0x2468af['text'], !![]);
        }
    };
}
function _0x10ce57(_0x1a619c, _0x2852bb = ![]) {
    const _0xafeec2 = document['getElementById']('chat-log-messages');
    const _0x5c7ef9 = document['getElementById']('chat-log-ui');
    const _0x99b8c7 = _0x5c7ef9['scrollHeight'] - _0x5c7ef9['scrollTop'] - _0x5c7ef9['clientHeight'] < 0x1e;
    const _0x1120a4 = document['createElement']('div');
    _0x1120a4['className'] = 'chat-log-line' + (_0x2852bb ? '\x20sys-msg' : '');
    _0x1120a4['innerText'] = _0x1a619c;
    _0xafeec2['appendChild'](_0x1120a4);
    if (_0x99b8c7) {
        _0x5c7ef9['scrollTop'] = _0x5c7ef9['scrollHeight'];
    }
    if (_0xafeec2['childElementCount'] > 0xc8) {
        _0xafeec2['removeChild'](_0xafeec2['firstChild']);
    }
}
function _0x4c3e99() {
    const _0xe21cf5 = document['getElementById']('chat-profile-panel');
    if (!_0xe21cf5)
        return;
    _0xe21cf5['innerHTML'] = '';
    let _0x4f2c4d = ![];
    const _0x80a86f = { ..._0x5488b8 };
    if (_0x1850c6 && window['_FB'] && window['_FB']['_currentUser'] && window['_FB']['_userData']) {
        _0x80a86f[_0x1850c6] = _0x80a86f[_0x1850c6] || {};
        _0x80a86f[_0x1850c6]['_localPhotoURL'] = window['_FB']['_userData']['photoURL'] || '';
        _0x80a86f[_0x1850c6]['_localUname'] = window['_FB']['_userData']['username'] || _0x432ca8;
        _0x80a86f[_0x1850c6]['_localStats'] = window['_FB']['_userData'];
    }
    for (const _0x183607 in _0x80a86f) {
        const _0x58eeb9 = _0x80a86f[_0x183607];
        const _0x5f23c7 = _0x58eeb9['photoURL'] || (parseInt(_0x183607) === _0x1850c6 ? window['_FB'] && window['_FB']['_userData'] && window['_FB']['_userData']['photoURL'] : '');
        if (!_0x5f23c7)
            continue;
        _0x4f2c4d = !![];
        const _0x256ae1 = _0x58eeb9['name'] || (parseInt(_0x183607) === _0x1850c6 ? _0x432ca8 : 'Player\x20' + _0x183607);
        const _0x66a2d = _0x58eeb9['accountStats'] || (parseInt(_0x183607) === _0x1850c6 && window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null);
        const _0x143604 = document['createElement']('div');
        _0x143604['className'] = 'chat-pfp-entry';
        const _0x59ee43 = document['createElement']('img');
        _0x59ee43['src'] = _0x5f23c7;
        _0x59ee43['alt'] = _0x256ae1;
        _0x143604['appendChild'](_0x59ee43);
        const _0x1a0d4f = document['createElement']('div');
        _0x1a0d4f['className'] = 'chat-pfp-tooltip';
        let _0x251065 = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x256ae1 + '</div>';
        if (_0x66a2d) {
            _0x251065 += '<div>🏙\x20Town\x20Wins:\x20' + (_0x66a2d['townWins'] || 0x0) + '</div>';
            _0x251065 += '<div>🔪\x20Mafia\x20Wins:\x20' + (_0x66a2d['mafiaWins'] || 0x0) + '</div>';
            _0x251065 += '<div>💀\x20Deaths:\x20' + (_0x66a2d['deaths'] || 0x0) + '</div>';
            _0x251065 += '<div>📉\x20Town\x20Losses:\x20' + (_0x66a2d['townLosses'] || 0x0) + '</div>';
            _0x251065 += '<div>📉\x20Mafia\x20Losses:\x20' + (_0x66a2d['mafiaLosses'] || 0x0) + '</div>';
        }
        _0x1a0d4f['innerHTML'] = _0x251065;
        _0x143604['appendChild'](_0x1a0d4f);
        _0xe21cf5['appendChild'](_0x143604);
    }
    const _0x2d7414 = document['getElementById']('chat-log-wrap');
    if (_0x2d7414) {
        if (_0x4f2c4d) {
            _0x2d7414['classList']['add']('has-profiles');
            _0xe21cf5['style']['display'] = 'flex';
        } else {
            _0x2d7414['classList']['remove']('has-profiles');
            _0xe21cf5['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x4c3e99;
let _0x13b0e7 = -0x1, _0xea435c = -0x1, _0x369b67 = -0x1, _0x391f4e = 0x0;
function _0x2ee757() {
    if (!_0x1850c6 || !_0x3a17f5 || _0x3a17f5['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x5a4b35 = performance['now']();
    const _0x30ba48 = _0x5a4b35 - _0x391f4e;
    const _0x5735a7 = Math['abs'](_0x33c173['x'] - _0x13b0e7) > 0.05 || Math['abs'](_0x33c173['y'] - _0xea435c) > 0.05 || Math['abs'](_0x33c173['angle'] - _0x369b67) > 0.02;
    if (!_0x5735a7 && _0x30ba48 < 0xc8)
        return;
    if (_0x30ba48 < 0x19)
        return;
    _0x391f4e = _0x5a4b35;
    _0x13b0e7 = _0x33c173['x'];
    _0xea435c = _0x33c173['y'];
    _0x369b67 = _0x33c173['angle'];
    if (!_0x1850c6 || !_0x3a17f5 || _0x3a17f5['readyState'] !== WebSocket['OPEN'])
        return;
    _0x3a17f5['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x33c173['x'],
        'y': _0x33c173['y'],
        'vx': _0x33c173['vx'],
        'vy': _0x33c173['vy'],
        'angle': _0x33c173['angle'],
        'scale': _0x33c173['scale'],
        'teleportId': _0x12d891,
        'clientTimestamp': Date['now']()
    }));
}
function _0x11c680() {
    if (_0x33c173['isDead'])
        return;
    const _0x4519cb = _0x1d43a0['MAP']['layers']['find'](_0x3b06a5 => _0x3b06a5['name'] === 'walls');
    if (!_0x4519cb)
        return;
    const _0x273bf2 = _0x33c173['scale'];
    const _0x2ffd3a = _0x33c173['width'] * _0x273bf2 / 0x2;
    for (let _0x8ea9eb = 0x0; _0x8ea9eb < 0x3; _0x8ea9eb++) {
        let _0x4e1025 = _0x33c173['x'] + _0x33c173['width'] / 0x2;
        let _0x325a4f = _0x33c173['y'] + _0x33c173['height'] / 0x2;
        const _0x528e2 = Math['floor']((_0x4e1025 - _0x2ffd3a) / _0x1d43a0['MAP']['tileSize']);
        const _0x49f032 = Math['floor']((_0x4e1025 + _0x2ffd3a) / _0x1d43a0['MAP']['tileSize']);
        const _0x4a6fa1 = Math['floor']((_0x325a4f - _0x2ffd3a) / _0x1d43a0['MAP']['tileSize']);
        const _0x57001e = Math['floor']((_0x325a4f + _0x2ffd3a) / _0x1d43a0['MAP']['tileSize']);
        for (let _0x330ba7 = _0x4a6fa1; _0x330ba7 <= _0x57001e; _0x330ba7++) {
            for (let _0x10bb88 = _0x528e2; _0x10bb88 <= _0x49f032; _0x10bb88++) {
                if (_0x10bb88 < 0x0 || _0x10bb88 >= _0x1d43a0['MAP']['columns'] || _0x330ba7 < 0x0 || _0x330ba7 >= _0x1d43a0['MAP']['rows'])
                    continue;
                if (_0x4519cb['data'][_0x330ba7 * _0x1d43a0['MAP']['columns'] + _0x10bb88] === 0x0)
                    continue;
                const _0x45eaa6 = _0x10bb88 * _0x1d43a0['MAP']['tileSize'];
                const _0xbda83b = _0x330ba7 * _0x1d43a0['MAP']['tileSize'];
                const _0x560c61 = _0x4e1025 < _0x45eaa6 ? _0x45eaa6 : _0x4e1025 > _0x45eaa6 + _0x1d43a0['MAP']['tileSize'] ? _0x45eaa6 + _0x1d43a0['MAP']['tileSize'] : _0x4e1025;
                const _0x5c595a = _0x325a4f < _0xbda83b ? _0xbda83b : _0x325a4f > _0xbda83b + _0x1d43a0['MAP']['tileSize'] ? _0xbda83b + _0x1d43a0['MAP']['tileSize'] : _0x325a4f;
                const _0x7aa732 = _0x4e1025 - _0x560c61;
                const _0x54a275 = _0x325a4f - _0x5c595a;
                const _0x507cd9 = Math['sqrt'](_0x7aa732 * _0x7aa732 + _0x54a275 * _0x54a275);
                if (_0x507cd9 < _0x2ffd3a) {
                    if (_0x507cd9 === 0x0) {
                        const _0x824c2a = _0x4e1025 - _0x45eaa6;
                        const _0x387c9c = _0x45eaa6 + _0x1d43a0['MAP']['tileSize'] - _0x4e1025;
                        const _0x5b33ef = _0x325a4f - _0xbda83b;
                        const _0x107b58 = _0xbda83b + _0x1d43a0['MAP']['tileSize'] - _0x325a4f;
                        const _0x275df5 = Math['min'](_0x824c2a, _0x387c9c, _0x5b33ef, _0x107b58);
                        if (_0x275df5 === _0x824c2a)
                            _0x4e1025 = _0x45eaa6 - _0x2ffd3a;
                        else if (_0x275df5 === _0x387c9c)
                            _0x4e1025 = _0x45eaa6 + _0x1d43a0['MAP']['tileSize'] + _0x2ffd3a;
                        else if (_0x275df5 === _0x5b33ef)
                            _0x325a4f = _0xbda83b - _0x2ffd3a;
                        else
                            _0x325a4f = _0xbda83b + _0x1d43a0['MAP']['tileSize'] + _0x2ffd3a;
                    } else {
                        const _0x37747f = _0x2ffd3a - _0x507cd9;
                        _0x4e1025 += _0x7aa732 / _0x507cd9 * _0x37747f;
                        _0x325a4f += _0x54a275 / _0x507cd9 * _0x37747f;
                        const _0xe690a5 = _0x33c173['vx'] * (_0x7aa732 / _0x507cd9) + _0x33c173['vy'] * (_0x54a275 / _0x507cd9);
                        if (_0xe690a5 < 0x0) {
                            _0x33c173['vx'] -= _0xe690a5 * (_0x7aa732 / _0x507cd9);
                            _0x33c173['vy'] -= _0xe690a5 * (_0x54a275 / _0x507cd9);
                        }
                    }
                }
            }
        }
        _0x33c173['x'] = _0x4e1025 - _0x33c173['width'] / 0x2;
        _0x33c173['y'] = _0x325a4f - _0x33c173['height'] / 0x2;
    }
}
function _0x432061(_0x1845c4) {
    const _0x8b3107 = _0x1d43a0['MAP']['layers']['find'](_0x4f7fcd => _0x4f7fcd['name'] === 'walls');
    if (!_0x8b3107)
        return;
    const _0xb4206a = _0x1845c4['width'] / 0x2;
    for (let _0x44bc4a = 0x0; _0x44bc4a < 0x2; _0x44bc4a++) {
        let _0x1ce773 = _0x1845c4['x'] + _0x1845c4['width'] / 0x2;
        let _0x4b5644 = _0x1845c4['y'] + _0x1845c4['height'] / 0x2;
        const _0x1cd9a7 = Math['floor']((_0x1ce773 - _0xb4206a) / _0x1d43a0['MAP']['tileSize']);
        const _0x40d281 = Math['floor']((_0x1ce773 + _0xb4206a) / _0x1d43a0['MAP']['tileSize']);
        const _0xe049f3 = Math['floor']((_0x4b5644 - _0xb4206a) / _0x1d43a0['MAP']['tileSize']);
        const _0x4fcd12 = Math['floor']((_0x4b5644 + _0xb4206a) / _0x1d43a0['MAP']['tileSize']);
        for (let _0x4b5bb9 = _0xe049f3; _0x4b5bb9 <= _0x4fcd12; _0x4b5bb9++) {
            for (let _0x31c2f0 = _0x1cd9a7; _0x31c2f0 <= _0x40d281; _0x31c2f0++) {
                if (_0x31c2f0 < 0x0 || _0x31c2f0 >= _0x1d43a0['MAP']['columns'] || _0x4b5bb9 < 0x0 || _0x4b5bb9 >= _0x1d43a0['MAP']['rows'])
                    continue;
                if (_0x8b3107['data'][_0x4b5bb9 * _0x1d43a0['MAP']['columns'] + _0x31c2f0] === 0x0)
                    continue;
                const _0x6e7bd2 = _0x31c2f0 * _0x1d43a0['MAP']['tileSize'];
                const _0x4ce886 = _0x4b5bb9 * _0x1d43a0['MAP']['tileSize'];
                const _0x23220e = _0x1ce773 < _0x6e7bd2 ? _0x6e7bd2 : _0x1ce773 > _0x6e7bd2 + _0x1d43a0['MAP']['tileSize'] ? _0x6e7bd2 + _0x1d43a0['MAP']['tileSize'] : _0x1ce773;
                const _0x465570 = _0x4b5644 < _0x4ce886 ? _0x4ce886 : _0x4b5644 > _0x4ce886 + _0x1d43a0['MAP']['tileSize'] ? _0x4ce886 + _0x1d43a0['MAP']['tileSize'] : _0x4b5644;
                const _0x9b6541 = _0x1ce773 - _0x23220e;
                const _0x4042cb = _0x4b5644 - _0x465570;
                const _0x43c38a = Math['sqrt'](_0x9b6541 * _0x9b6541 + _0x4042cb * _0x4042cb);
                if (_0x43c38a < _0xb4206a) {
                    if (_0x43c38a === 0x0) {
                        const _0x3f4bb2 = _0x1ce773 - _0x6e7bd2;
                        const _0x1e7582 = _0x6e7bd2 + _0x1d43a0['MAP']['tileSize'] - _0x1ce773;
                        const _0x2bd80b = _0x4b5644 - _0x4ce886;
                        const _0x3aed06 = _0x4ce886 + _0x1d43a0['MAP']['tileSize'] - _0x4b5644;
                        const _0x5b5ce4 = Math['min'](_0x3f4bb2, _0x1e7582, _0x2bd80b, _0x3aed06);
                        if (_0x5b5ce4 === _0x3f4bb2)
                            _0x1ce773 = _0x6e7bd2 - _0xb4206a;
                        else if (_0x5b5ce4 === _0x1e7582)
                            _0x1ce773 = _0x6e7bd2 + _0x1d43a0['MAP']['tileSize'] + _0xb4206a;
                        else if (_0x5b5ce4 === _0x2bd80b)
                            _0x4b5644 = _0x4ce886 - _0xb4206a;
                        else
                            _0x4b5644 = _0x4ce886 + _0x1d43a0['MAP']['tileSize'] + _0xb4206a;
                    } else {
                        const _0x5d5bef = _0xb4206a - _0x43c38a;
                        _0x1ce773 += _0x9b6541 / _0x43c38a * _0x5d5bef;
                        _0x4b5644 += _0x4042cb / _0x43c38a * _0x5d5bef;
                    }
                }
            }
        }
        _0x1845c4['x'] = _0x1ce773 - _0x1845c4['width'] / 0x2;
        _0x1845c4['y'] = _0x4b5644 - _0x1845c4['height'] / 0x2;
    }
}
function _0xe839ce(_0x51b5f6) {
    const _0xb87581 = _0x51b5f6['width'] / 0x2;
    for (let _0x2ca4d2 = 0x0; _0x2ca4d2 < 0x2; _0x2ca4d2++) {
        let _0x2eff49 = _0x51b5f6['x'] + _0x51b5f6['width'] / 0x2;
        let _0x338179 = _0x51b5f6['y'] + _0x51b5f6['height'] / 0x2;
        for (const _0x5dde03 of _0x1d43a0['ENTITIES']) {
            const _0x16bb49 = _0x2eff49 < _0x5dde03['x'] ? _0x5dde03['x'] : _0x2eff49 > _0x5dde03['x'] + _0x5dde03['w'] ? _0x5dde03['x'] + _0x5dde03['w'] : _0x2eff49;
            const _0x1b110 = _0x338179 < _0x5dde03['y'] ? _0x5dde03['y'] : _0x338179 > _0x5dde03['y'] + _0x5dde03['h'] ? _0x5dde03['y'] + _0x5dde03['h'] : _0x338179;
            const _0x274c26 = _0x2eff49 - _0x16bb49;
            const _0x491135 = _0x338179 - _0x1b110;
            const _0x4421a3 = Math['sqrt'](_0x274c26 * _0x274c26 + _0x491135 * _0x491135);
            if (_0x4421a3 < _0xb87581 && _0x4421a3 > 0x0) {
                const _0x4bf05d = _0xb87581 - _0x4421a3;
                const _0x504d1b = _0x274c26 / _0x4421a3;
                const _0xb29a21 = _0x491135 / _0x4421a3;
                _0x2eff49 += _0x504d1b * _0x4bf05d;
                _0x338179 += _0xb29a21 * _0x4bf05d;
            } else if (_0x4421a3 === 0x0) {
                const _0x214749 = _0x2eff49 - _0x5dde03['x'];
                const _0x2a9dd = _0x5dde03['x'] + _0x5dde03['w'] - _0x2eff49;
                const _0x5ade60 = _0x338179 - _0x5dde03['y'];
                const _0x2fbfea = _0x5dde03['y'] + _0x5dde03['h'] - _0x338179;
                const _0x5c6cae = Math['min'](_0x214749, _0x2a9dd, _0x5ade60, _0x2fbfea);
                if (_0x5c6cae === _0x214749)
                    _0x2eff49 = _0x5dde03['x'] - _0xb87581;
                else if (_0x5c6cae === _0x2a9dd)
                    _0x2eff49 = _0x5dde03['x'] + _0x5dde03['w'] + _0xb87581;
                else if (_0x5c6cae === _0x5ade60)
                    _0x338179 = _0x5dde03['y'] - _0xb87581;
                else
                    _0x338179 = _0x5dde03['y'] + _0x5dde03['h'] + _0xb87581;
            }
        }
        _0x51b5f6['x'] = _0x2eff49 - _0x51b5f6['width'] / 0x2;
        _0x51b5f6['y'] = _0x338179 - _0x51b5f6['height'] / 0x2;
    }
}
function _0x5b040d() {
    if (_0x33c173['isDead'])
        return;
    const _0x1ae409 = _0x33c173['width'] / 0x2;
    const _0x1847c8 = _0x33c173['x'] + _0x33c173['width'] / 0x2;
    const _0x1ee16c = _0x33c173['y'] + _0x33c173['height'] / 0x2;
    for (const _0x1cdc3f in _0x5488b8) {
        const _0x4090a7 = _0x5488b8[_0x1cdc3f];
        if (_0x4090a7['isDead'])
            continue;
        const _0x46cf45 = _0x4090a7['width'] / 0x2;
        const _0x1641ea = _0x1ae409 + _0x46cf45;
        const _0xe823a4 = (_0x4090a7['renderX'] ?? _0x4090a7['x']) + _0x4090a7['width'] / 0x2;
        const _0x5bc28c = (_0x4090a7['renderY'] ?? _0x4090a7['y']) + _0x4090a7['height'] / 0x2;
        const _0x4e9c88 = _0x1847c8 - _0xe823a4;
        const _0x213732 = _0x1ee16c - _0x5bc28c;
        const _0x21b658 = Math['sqrt'](_0x4e9c88 * _0x4e9c88 + _0x213732 * _0x213732);
        if (_0x21b658 > 0x0 && _0x21b658 < _0x1641ea) {
            const _0x26baae = _0x1641ea - _0x21b658;
            const _0x49c4e7 = _0x4e9c88 / _0x21b658;
            const _0x47ae0b = _0x213732 / _0x21b658;
            _0x33c173['x'] += _0x49c4e7 * (_0x26baae * 0.25);
            _0x33c173['y'] += _0x47ae0b * (_0x26baae * 0.25);
            _0x4090a7['x'] -= _0x49c4e7 * (_0x26baae * 0.75);
            _0x4090a7['y'] -= _0x47ae0b * (_0x26baae * 0.75);
            _0x432061(_0x4090a7);
            _0xe839ce(_0x4090a7);
            if (_0x4090a7['renderX'] !== undefined) {
                _0x4090a7['renderX'] = _0x4090a7['x'];
                _0x4090a7['renderY'] = _0x4090a7['y'];
            }
            const _0x4c0b04 = _0x33c173['vx'] * _0x49c4e7 + _0x33c173['vy'] * _0x47ae0b;
            if (_0x4c0b04 < 0x0) {
                _0x33c173['vx'] -= _0x4c0b04 * _0x49c4e7 * 0.25;
                _0x33c173['vy'] -= _0x4c0b04 * _0x47ae0b * 0.25;
            }
        }
    }
    _0x11c680();
    _0x5755be();
}
function _0x5755be() {
    if (_0x33c173['isDead'])
        return;
    const _0x3a8952 = _0x33c173['scale'];
    const _0x5153b7 = _0x33c173['width'] * _0x3a8952 / 0x2;
    for (let _0x27e43b = 0x0; _0x27e43b < 0x2; _0x27e43b++) {
        let _0x4647cd = _0x33c173['x'] + _0x33c173['width'] / 0x2;
        let _0x3619de = _0x33c173['y'] + _0x33c173['height'] / 0x2;
        for (const _0x28c0a0 of _0x1d43a0['ENTITIES']) {
            const _0x2c8440 = _0x4647cd < _0x28c0a0['x'] ? _0x28c0a0['x'] : _0x4647cd > _0x28c0a0['x'] + _0x28c0a0['w'] ? _0x28c0a0['x'] + _0x28c0a0['w'] : _0x4647cd;
            const _0x2cb1af = _0x3619de < _0x28c0a0['y'] ? _0x28c0a0['y'] : _0x3619de > _0x28c0a0['y'] + _0x28c0a0['h'] ? _0x28c0a0['y'] + _0x28c0a0['h'] : _0x3619de;
            const _0x30338 = _0x4647cd - _0x2c8440;
            const _0x1cf120 = _0x3619de - _0x2cb1af;
            const _0x253d3f = Math['sqrt'](_0x30338 * _0x30338 + _0x1cf120 * _0x1cf120);
            if (_0x253d3f < _0x5153b7 && _0x253d3f > 0x0) {
                const _0x392051 = _0x5153b7 - _0x253d3f;
                const _0x2d9dfe = _0x30338 / _0x253d3f;
                const _0x5944f8 = _0x1cf120 / _0x253d3f;
                _0x4647cd += _0x2d9dfe * _0x392051;
                _0x3619de += _0x5944f8 * _0x392051;
                const _0x4f957f = _0x33c173['vx'] * _0x2d9dfe + _0x33c173['vy'] * _0x5944f8;
                if (_0x4f957f < 0x0) {
                    _0x33c173['vx'] -= _0x4f957f * _0x2d9dfe;
                    _0x33c173['vy'] -= _0x4f957f * _0x5944f8;
                }
            } else if (_0x253d3f === 0x0) {
                const _0x17471d = _0x4647cd - _0x28c0a0['x'];
                const _0x107ec0 = _0x28c0a0['x'] + _0x28c0a0['w'] - _0x4647cd;
                const _0x5bf209 = _0x3619de - _0x28c0a0['y'];
                const _0x1efc3e = _0x28c0a0['y'] + _0x28c0a0['h'] - _0x3619de;
                const _0x57fca5 = Math['min'](_0x17471d, _0x107ec0, _0x5bf209, _0x1efc3e);
                if (_0x57fca5 === _0x17471d)
                    _0x4647cd = _0x28c0a0['x'] - _0x5153b7;
                else if (_0x57fca5 === _0x107ec0)
                    _0x4647cd = _0x28c0a0['x'] + _0x28c0a0['w'] + _0x5153b7;
                else if (_0x57fca5 === _0x5bf209)
                    _0x3619de = _0x28c0a0['y'] - _0x5153b7;
                else
                    _0x3619de = _0x28c0a0['y'] + _0x28c0a0['h'] + _0x5153b7;
            }
        }
        _0x33c173['x'] = _0x4647cd - _0x33c173['width'] / 0x2;
        _0x33c173['y'] = _0x3619de - _0x33c173['height'] / 0x2;
    }
}
function _0x26e2fc(_0x6bb51f, _0xc2c450) {
    const _0x3975b2 = _0x1d43a0['MAP']['layers']['find'](_0x494900 => _0x494900['name'] === 'trees');
    if (!_0x3975b2)
        return ![];
    const _0x460458 = Math['floor'](_0x6bb51f / _0x1d43a0['MAP']['tileSize']);
    const _0x4371ff = Math['floor'](_0xc2c450 / _0x1d43a0['MAP']['tileSize']);
    if (_0x460458 < 0x0 || _0x460458 >= _0x1d43a0['MAP']['columns'] || _0x4371ff < 0x0 || _0x4371ff >= _0x1d43a0['MAP']['rows'])
        return ![];
    return _0x3975b2['data'][_0x4371ff * _0x1d43a0['MAP']['columns'] + _0x460458] === 0xb;
}
let _0x5e2fbb = null;
function _0x3d085c() {
    const _0x1a66fc = _0x1d43a0['MAP'];
    const _0x43fe0e = _0x1a66fc['layers']['find'](_0x14ced4 => _0x14ced4['name'] === 'floor2');
    const _0x1750b4 = _0x1a66fc['layers']['find'](_0x13f26f => _0x13f26f['name'] === 'walls');
    if (!_0x43fe0e || !_0x1750b4) {
        _0x5e2fbb = null;
        return;
    }
    const _0xa36dd9 = _0x1a66fc['columns'];
    const _0x4a6fee = _0x1a66fc['rows'];
    const _0x59217a = [];
    const _0x242423 = [];
    const _0x59e8a4 = new Set();
    for (let _0xb7c8c1 = 0x0; _0xb7c8c1 < _0x4a6fee; _0xb7c8c1++) {
        for (let _0x528012 = 0x0; _0x528012 < _0xa36dd9; _0x528012++) {
            const _0xb26557 = _0xb7c8c1 * _0xa36dd9 + _0x528012;
            const _0x2fb4fc = _0x43fe0e['data'][_0xb26557];
            const _0x244b24 = _0x1750b4['data'][_0xb26557];
            if (_0x2fb4fc === 0x2 || _0x2fb4fc === 0x4) {
                _0x59217a['push']({
                    'c': _0x528012,
                    'r': _0xb7c8c1
                });
                if (_0x244b24 !== 0x0)
                    _0x242423['push']({
                        'c': _0x528012,
                        'r': _0xb7c8c1
                    });
            }
            if (_0x244b24 !== 0x0)
                _0x59e8a4['add'](_0x528012 + ',' + _0xb7c8c1);
        }
    }
    const _0x5f031f = new Set(_0x59217a['map'](_0xbc0baa => _0xbc0baa['c'] + ',' + _0xbc0baa['r']));
    const _0x19f0ba = [
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
                c: _0x210ee9,
                r: _0x14d69b
            } of _0x59217a) {
        for (const [_0x21efb0, _0x35a505] of _0x19f0ba) {
            const _0x4512ca = _0x210ee9 + _0x21efb0, _0x984ba0 = _0x14d69b + _0x35a505;
            const _0x368987 = _0x4512ca + ',' + _0x984ba0;
            if (!_0x5f031f['has'](_0x368987))
                _0x59e8a4['add'](_0x368987);
        }
    }
    _0x5e2fbb = {
        'wallSet': _0x59e8a4,
        'floorTiles': _0x59217a,
        'wallTiles': _0x242423,
        'interiorSet': _0x5f031f
    };
}
function _0x3bef60() {
    const _0x44e4bb = _0x1d43a0['MAP']['layers']['find'](_0x419340 => _0x419340['name'] === 'floor2');
    if (!_0x44e4bb)
        return ![];
    const _0x1b8881 = Math['floor']((_0x33c173['x'] + _0x33c173['width'] / 0x2) / _0x1d43a0['MAP']['tileSize']);
    const _0x4b2a51 = Math['floor']((_0x33c173['y'] + _0x33c173['height'] / 0x2) / _0x1d43a0['MAP']['tileSize']);
    if (_0x1b8881 < 0x0 || _0x1b8881 >= _0x1d43a0['MAP']['columns'] || _0x4b2a51 < 0x0 || _0x4b2a51 >= _0x1d43a0['MAP']['rows'])
        return ![];
    const _0x3bc1a2 = _0x44e4bb['data'][_0x4b2a51 * _0x1d43a0['MAP']['columns'] + _0x1b8881];
    return _0x3bc1a2 === 0x2;
}
function _0x4f0aef() {
    if (_0x33c173['isDead']) {
        _0x1d43a0['SHADOW']['polygon'] = null;
        return;
    }
    const _0x3a7284 = _0x1d43a0['MAP'];
    const _0x2fd974 = _0x1d43a0['SHADOW'];
    const _0x2bfba0 = _0x3a7284['tileSize'];
    if (!_0x5e2fbb)
        _0x3d085c();
    if (!_0x5e2fbb) {
        _0x2fd974['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x1abc7b,
        floorTiles: _0x344cc4
    } = _0x5e2fbb;
    if (_0x344cc4['length'] === 0x0) {
        _0x2fd974['polygon'] = null;
        return;
    }
    if (!_0x3bef60()) {
        _0x2fd974['polygon'] = null;
        return;
    }
    const _0x5989fa = _0x33c173['x'] + _0x33c173['width'] / 0x2;
    const _0x530046 = _0x33c173['y'] + _0x33c173['height'] / 0x2;
    if (!_0x5e2fbb['_bounds']) {
        let _0x2e6f67 = Infinity, _0x24d113 = -Infinity, _0x2a4008 = Infinity, _0x3d7d43 = -Infinity;
        for (const {
                    c: _0x620c89,
                    r: _0x3b0e51
                } of _0x344cc4) {
            if (_0x620c89 < _0x2e6f67)
                _0x2e6f67 = _0x620c89;
            if (_0x620c89 > _0x24d113)
                _0x24d113 = _0x620c89;
            if (_0x3b0e51 < _0x2a4008)
                _0x2a4008 = _0x3b0e51;
            if (_0x3b0e51 > _0x3d7d43)
                _0x3d7d43 = _0x3b0e51;
        }
        _0x5e2fbb['_bounds'] = {
            'minC': Math['max'](0x0, _0x2e6f67 - 0x1),
            'maxC': Math['min'](_0x3a7284['columns'] - 0x1, _0x24d113 + 0x1),
            'minR': Math['max'](0x0, _0x2a4008 - 0x1),
            'maxR': Math['min'](_0x3a7284['rows'] - 0x1, _0x3d7d43 + 0x1)
        };
        const _0x5b060e = [];
        for (let _0x501c75 = _0x5e2fbb['_bounds']['minR']; _0x501c75 <= _0x5e2fbb['_bounds']['maxR']; _0x501c75++) {
            for (let _0x314928 = _0x5e2fbb['_bounds']['minC']; _0x314928 <= _0x5e2fbb['_bounds']['maxC']; _0x314928++) {
                if (_0x1abc7b['has'](_0x314928 + ',' + _0x501c75))
                    _0x5b060e['push'](_0x314928, _0x501c75);
            }
        }
        _0x5e2fbb['_wallArr'] = _0x5b060e;
    }
    const {
        minC: _0x56ee45,
        maxC: _0x4a8caf,
        minR: _0x455a64,
        maxR: _0x54217c
    } = _0x5e2fbb['_bounds'];
    const _0x1c0706 = _0x5e2fbb['_wallArr'];
    const _0x461b5e = 0.0001;
    const _0x1c91f9 = new Set();
    const _0xf6c287 = [];
    for (let _0x4ed3b3 = 0x0; _0x4ed3b3 < _0x1c0706['length']; _0x4ed3b3 += 0x2) {
        const _0xe08775 = _0x1c0706[_0x4ed3b3], _0x50fa9c = _0x1c0706[_0x4ed3b3 + 0x1];
        const _0x172e4d = [
            _0xe08775 * _0x2bfba0,
            _0x50fa9c * _0x2bfba0,
            _0xe08775 * _0x2bfba0 + _0x2bfba0,
            _0x50fa9c * _0x2bfba0,
            _0xe08775 * _0x2bfba0,
            _0x50fa9c * _0x2bfba0 + _0x2bfba0,
            _0xe08775 * _0x2bfba0 + _0x2bfba0,
            _0x50fa9c * _0x2bfba0 + _0x2bfba0
        ];
        for (let _0x2a9e27 = 0x0; _0x2a9e27 < _0x172e4d['length']; _0x2a9e27 += 0x2) {
            const _0x4a2b65 = _0x172e4d[_0x2a9e27], _0x457e8d = _0x172e4d[_0x2a9e27 + 0x1];
            const _0x11ecdd = Math['atan2'](_0x457e8d - _0x530046, _0x4a2b65 - _0x5989fa);
            const _0x55fb56 = Math['round'](_0x11ecdd * 0x4e20);
            if (!_0x1c91f9['has'](_0x55fb56 - 0x1)) {
                _0x1c91f9['add'](_0x55fb56 - 0x1);
                _0xf6c287['push'](_0x11ecdd - _0x461b5e);
            }
            if (!_0x1c91f9['has'](_0x55fb56)) {
                _0x1c91f9['add'](_0x55fb56);
                _0xf6c287['push'](_0x11ecdd);
            }
            if (!_0x1c91f9['has'](_0x55fb56 + 0x1)) {
                _0x1c91f9['add'](_0x55fb56 + 0x1);
                _0xf6c287['push'](_0x11ecdd + _0x461b5e);
            }
        }
    }
    _0xf6c287['sort']((_0x4ee1f5, _0xd04411) => _0x4ee1f5 - _0xd04411);
    const _0x4438c1 = Math['hypot']((_0x4a8caf - _0x56ee45 + 0x2) * _0x2bfba0, (_0x54217c - _0x455a64 + 0x2) * _0x2bfba0);
    const _0x45f2e0 = _0x47d1c0 => {
        const _0x477dc5 = Math['cos'](_0x47d1c0);
        const _0x3cb072 = Math['sin'](_0x47d1c0);
        let _0x1b7335 = _0x4438c1;
        for (let _0x48ef81 = 0x0; _0x48ef81 < _0x1c0706['length']; _0x48ef81 += 0x2) {
            const _0x36c517 = _0x1c0706[_0x48ef81], _0x4b6f6e = _0x1c0706[_0x48ef81 + 0x1];
            const _0x26cd07 = _0x36c517 * _0x2bfba0, _0x45048d = _0x4b6f6e * _0x2bfba0;
            const _0x266d5e = _0x26cd07 + _0x2bfba0, _0x379e6e = _0x45048d + _0x2bfba0;
            const _0x15623d = _0x26cd07 + _0x2bfba0 * 0.5, _0x13d232 = _0x45048d + _0x2bfba0 * 0.5;
            const _0x4f1e21 = Math['abs'](_0x15623d - _0x5989fa) + Math['abs'](_0x13d232 - _0x530046);
            if (_0x4f1e21 > _0x1b7335 + _0x2bfba0 * 1.5)
                continue;
            let _0x58e2c2, _0x48893a, _0x367a90;
            _0x58e2c2 = -_0x3cb072 * _0x2bfba0;
            if (Math['abs'](_0x58e2c2) >= 1e-10) {
                _0x48893a = -(_0x45048d - _0x530046) * _0x2bfba0 / _0x58e2c2;
                _0x367a90 = ((_0x26cd07 - _0x5989fa) * _0x3cb072 - (_0x45048d - _0x530046) * _0x477dc5) / _0x58e2c2;
                if (_0x48893a > 0.001 && _0x367a90 >= 0x0 && _0x367a90 <= 0x1 && _0x48893a < _0x1b7335)
                    _0x1b7335 = _0x48893a;
            }
            _0x58e2c2 = _0x477dc5 * _0x2bfba0;
            if (Math['abs'](_0x58e2c2) >= 1e-10) {
                _0x48893a = (_0x266d5e - _0x5989fa) * _0x2bfba0 / _0x58e2c2;
                _0x367a90 = ((_0x266d5e - _0x5989fa) * _0x3cb072 - (_0x45048d - _0x530046) * _0x477dc5) / _0x58e2c2;
                if (_0x48893a > 0.001 && _0x367a90 >= 0x0 && _0x367a90 <= 0x1 && _0x48893a < _0x1b7335)
                    _0x1b7335 = _0x48893a;
            }
            _0x58e2c2 = _0x3cb072 * _0x2bfba0;
            if (Math['abs'](_0x58e2c2) >= 1e-10) {
                _0x48893a = (_0x379e6e - _0x530046) * _0x2bfba0 / _0x58e2c2;
                _0x367a90 = ((_0x266d5e - _0x5989fa) * _0x3cb072 - (_0x379e6e - _0x530046) * _0x477dc5) / _0x58e2c2;
                if (_0x48893a > 0.001 && _0x367a90 >= 0x0 && _0x367a90 <= 0x1 && _0x48893a < _0x1b7335)
                    _0x1b7335 = _0x48893a;
            }
            _0x58e2c2 = -_0x477dc5 * _0x2bfba0;
            if (Math['abs'](_0x58e2c2) >= 1e-10) {
                _0x48893a = -(_0x26cd07 - _0x5989fa) * _0x2bfba0 / _0x58e2c2;
                _0x367a90 = ((_0x26cd07 - _0x5989fa) * _0x3cb072 - (_0x379e6e - _0x530046) * _0x477dc5) / _0x58e2c2;
                if (_0x48893a > 0.001 && _0x367a90 >= 0x0 && _0x367a90 <= 0x1 && _0x48893a < _0x1b7335)
                    _0x1b7335 = _0x48893a;
            }
        }
        const _0x49c412 = _0x1b7335 < _0x4438c1 ? _0x1b7335 + _0x2bfba0 * 0.5 : _0x1b7335;
        return {
            'x': _0x5989fa + _0x477dc5 * _0x49c412,
            'y': _0x530046 + _0x3cb072 * _0x49c412
        };
    };
    const _0x79e453 = [];
    for (let _0x536ac3 = 0x0; _0x536ac3 < _0xf6c287['length']; _0x536ac3++) {
        const _0x3d1238 = _0x45f2e0(_0xf6c287[_0x536ac3]);
        _0x79e453['push'](_0x3d1238['x'], _0x3d1238['y']);
    }
    _0x2fd974['polygon'] = _0x79e453['length'] >= 0x6 ? new Float32Array(_0x79e453) : null;
}
function _0x1aa533(_0x2b8831, _0x2d7b10, _0x4b0bf5) {
    if (_0x33c173['isDead'])
        return;
    if (!_0x5e2fbb)
        return;
    const {
        floorTiles: _0x475905,
        wallTiles: _0x32b8fb
    } = _0x5e2fbb;
    if (_0x475905['length'] === 0x0)
        return;
    const _0x1dc137 = _0x1d43a0['SHADOW'];
    const _0x4c62a6 = _0x1d43a0['MAP']['tileSize'];
    const _0x172290 = _0x1d43a0['CAMERA']['width'];
    const _0x534d16 = _0x1d43a0['CAMERA']['height'];
    if (!_0x1d43a0['SHADOW']['_buf'] || _0x1d43a0['SHADOW']['_buf']['width'] !== _0x172290 || _0x1d43a0['SHADOW']['_buf']['height'] !== _0x534d16) {
        _0x1d43a0['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x1d43a0['SHADOW']['_buf']['width'] = _0x172290;
        _0x1d43a0['SHADOW']['_buf']['height'] = _0x534d16;
    }
    const _0x3b18ec = _0x1d43a0['SHADOW']['_buf'];
    const _0x9e021e = _0x3b18ec['getContext']('2d');
    _0x9e021e['clearRect'](0x0, 0x0, _0x172290, _0x534d16);
    _0x9e021e['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x9e021e['beginPath']();
    for (const {
                c: _0x3e7e7d,
                r: _0x14f1a5
            } of _0x475905) {
        const _0x48d47e = Math['floor'](_0x3e7e7d * _0x4c62a6 - _0x2d7b10), _0x29dcb5 = Math['floor'](_0x14f1a5 * _0x4c62a6 - _0x4b0bf5);
        if (_0x48d47e > _0x172290 || _0x29dcb5 > _0x534d16 || _0x48d47e + _0x4c62a6 < 0x0 || _0x29dcb5 + _0x4c62a6 < 0x0)
            continue;
        _0x9e021e['rect'](_0x48d47e - 0x1, _0x29dcb5 - 0x1, _0x4c62a6 + 0x4, _0x4c62a6 + 0x4);
    }
    _0x9e021e['fill']();
    if (_0x32b8fb['length'] > 0x0) {
        _0x9e021e['globalCompositeOperation'] = 'destination-out';
        _0x9e021e['fillStyle'] = 'rgba(0,0,0,1)';
        _0x9e021e['beginPath']();
        for (const {
                    c: _0x45293a,
                    r: _0x36328a
                } of _0x32b8fb) {
            const _0x32d45f = Math['floor'](_0x45293a * _0x4c62a6 - _0x2d7b10), _0x4c364a = Math['floor'](_0x36328a * _0x4c62a6 - _0x4b0bf5);
            if (_0x32d45f > _0x172290 || _0x4c364a > _0x534d16 || _0x32d45f + _0x4c62a6 < 0x0 || _0x4c364a + _0x4c62a6 < 0x0)
                continue;
            _0x9e021e['rect'](_0x32d45f - 0x1, _0x4c364a - 0x1, _0x4c62a6 + 0x4, _0x4c62a6 + 0x4);
        }
        _0x9e021e['fill']();
        _0x9e021e['globalCompositeOperation'] = 'source-over';
    }
    if (_0x1dc137['polygon'] && _0x1dc137['polygon']['length'] >= 0x6) {
        _0x9e021e['globalCompositeOperation'] = 'destination-out';
        _0x9e021e['beginPath']();
        const _0x14b52b = _0x1dc137['polygon'];
        _0x9e021e['moveTo'](_0x14b52b[0x0] - _0x2d7b10, _0x14b52b[0x1] - _0x4b0bf5);
        for (let _0x574d1b = 0x2; _0x574d1b < _0x14b52b['length']; _0x574d1b += 0x2) {
            _0x9e021e['lineTo'](_0x14b52b[_0x574d1b] - _0x2d7b10, _0x14b52b[_0x574d1b + 0x1] - _0x4b0bf5);
        }
        _0x9e021e['closePath']();
        _0x9e021e['fill']();
        _0x9e021e['globalCompositeOperation'] = 'source-over';
    }
    _0x2b8831['drawImage'](_0x3b18ec, 0x0, 0x0);
}
function _0x25fcbb(_0x344ed5) {
    let _0x44987c = 0x0, _0x8612b8 = 0x0;
    const _0x1745e8 = _0x1d43a0['INPUTS']['mouseX'] / _0x1d43a0['SYSTEM']['viewScale'];
    const _0x15d6ca = _0x1d43a0['INPUTS']['mouseY'] / _0x1d43a0['SYSTEM']['viewScale'];
    const _0xb4cc62 = _0x33c173['x'] - _0x1d43a0['CAMERA']['x'] + _0x33c173['width'] / 0x2;
    const _0x404eee = _0x33c173['y'] - _0x1d43a0['CAMERA']['y'] + _0x33c173['height'] / 0x2;
    const _0x8d7826 = Math['atan2'](_0x15d6ca - _0x404eee, _0x1745e8 - _0xb4cc62);
    if (_0x517338 !== 0x0 || _0x4751d6 !== 0x0) {
        _0x44987c = _0x517338;
        _0x8612b8 = _0x4751d6;
    } else if (_0xe784dd) {
        let _0x162436 = 0x0, _0x4ab674 = 0x0;
        if (_0x1d43a0['INPUTS']['keys']['w'] || _0x1d43a0['INPUTS']['keys']['arrowup'])
            _0x162436 += 0x1;
        if (_0x1d43a0['INPUTS']['keys']['s'] || _0x1d43a0['INPUTS']['keys']['arrowdown'])
            _0x162436 -= 0x1;
        if (_0x1d43a0['INPUTS']['keys']['d'] || _0x1d43a0['INPUTS']['keys']['arrowright'])
            _0x4ab674 += 0x1;
        if (_0x1d43a0['INPUTS']['keys']['a'] || _0x1d43a0['INPUTS']['keys']['arrowleft'])
            _0x4ab674 -= 0x1;
        if (_0x162436 !== 0x0 || _0x4ab674 !== 0x0) {
            const _0x150a29 = _0x8d7826 + Math['atan2'](_0x4ab674, _0x162436);
            _0x44987c = Math['cos'](_0x150a29);
            _0x8612b8 = Math['sin'](_0x150a29);
        }
    } else {
        if (_0x1d43a0['INPUTS']['keys']['w'] || _0x1d43a0['INPUTS']['keys']['arrowup'])
            _0x8612b8 -= 0x1;
        if (_0x1d43a0['INPUTS']['keys']['s'] || _0x1d43a0['INPUTS']['keys']['arrowdown'])
            _0x8612b8 += 0x1;
        if (_0x1d43a0['INPUTS']['keys']['a'] || _0x1d43a0['INPUTS']['keys']['arrowleft'])
            _0x44987c -= 0x1;
        if (_0x1d43a0['INPUTS']['keys']['d'] || _0x1d43a0['INPUTS']['keys']['arrowright'])
            _0x44987c += 0x1;
        const _0x15617a = _0x44987c !== 0x0 || _0x8612b8 !== 0x0;
        if (_0x15617a) {
            const _0x5c2336 = Math['sqrt'](_0x44987c * _0x44987c + _0x8612b8 * _0x8612b8);
            _0x44987c /= _0x5c2336;
            _0x8612b8 /= _0x5c2336;
        }
    }
    if (_0x1d43a0['GAME_STATE'] === 'NIGHT' && _0x1a73d2 === 'Skinwalker') {
        if (_0x1d43a0['NIGHT_ABILITY_OPEN'] || !_0x1d43a0['CURRENT_TARGET']) {
            _0x44987c = 0x0;
            _0x8612b8 = 0x0;
            _0x33c173['vx'] = 0x0;
            _0x33c173['vy'] = 0x0;
            _0x33c173['x'] = _0x1d43a0['MAP']['columns'] * _0x1d43a0['MAP']['tileSize'] / 0x2 - _0x33c173['width'] / 0x2;
            _0x33c173['y'] = _0x1d43a0['MAP']['rows'] * _0x1d43a0['MAP']['tileSize'] / 0x2 - _0x33c173['height'] / 0x2;
        }
    }
    const _0x2cbffb = _0x44987c !== 0x0 || _0x8612b8 !== 0x0;
    const _0x551552 = (_0x1d43a0['INPUTS']['keys']['shift'] || _0x511120 || _0x46e736) && _0x2cbffb;
    _0x33c173['bopTimer'] = _0x551552 ? _0x33c173['bopTimer'] + _0x344ed5 : 0x0;
    _0x33c173['scale'] = 0x1 + (_0x33c173['bopTimer'] > 0x0 ? Math['sin'](_0x33c173['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x185a9e = Math['pow'](0.001, _0x344ed5);
    const _0x56b8b6 = _0x551552 ? 0x74a : 0x5d5;
    _0x33c173['vx'] += _0x44987c * _0x56b8b6 * _0x344ed5;
    _0x33c173['vy'] += _0x8612b8 * _0x56b8b6 * _0x344ed5;
    _0x33c173['vx'] *= _0x185a9e;
    _0x33c173['vy'] *= _0x185a9e;
    _0x33c173['x'] += _0x33c173['vx'] * _0x344ed5;
    _0x33c173['y'] += _0x33c173['vy'] * _0x344ed5;
    for (let _0x3b0fbe = 0x0; _0x3b0fbe < 0x3; _0x3b0fbe++)
        _0x11c680();
    for (let _0x2862df = 0x0; _0x2862df < 0x2; _0x2862df++)
        _0x5755be();
    for (let _0x5e47ca = 0x0; _0x5e47ca < 0x2; _0x5e47ca++)
        _0x5b040d();
    if (_0x33c173['x'] < 0x0)
        _0x33c173['x'] = 0x0;
    if (_0x33c173['y'] < 0x0)
        _0x33c173['y'] = 0x0;
    if (_0x33c173['x'] + _0x33c173['width'] > _0x1d43a0['MAP']['columns'] * _0x1d43a0['MAP']['tileSize'])
        _0x33c173['x'] = _0x1d43a0['MAP']['columns'] * _0x1d43a0['MAP']['tileSize'] - _0x33c173['width'];
    if (_0x33c173['y'] + _0x33c173['height'] > _0x1d43a0['MAP']['rows'] * _0x1d43a0['MAP']['tileSize'])
        _0x33c173['y'] = _0x1d43a0['MAP']['rows'] * _0x1d43a0['MAP']['tileSize'] - _0x33c173['height'];
    if (_0x30c58e) {
        _0x33c173['angle'] = _0x731a6e + Math['PI'] / 0x2;
    } else if (_0x517338 !== 0x0 || _0x4751d6 !== 0x0) {
        _0x33c173['angle'] = Math['atan2'](_0x4751d6, _0x517338) + Math['PI'] / 0x2;
    } else if (!_0x39012a) {
        _0x33c173['angle'] = _0x8d7826 + Math['PI'] / 0x2;
    }
    const _0x50fc53 = _0x33c173['x'] + _0x33c173['width'] / 0x2 - _0x1d43a0['CAMERA']['width'] / 0x2;
    const _0x3ac58d = _0x33c173['y'] + _0x33c173['height'] / 0x2 - _0x1d43a0['CAMERA']['height'] / 0x2;
    if (_0x1d43a0['CAMERA']['x'] === null || isNaN(_0x1d43a0['CAMERA']['x']) || !isFinite(_0x1d43a0['CAMERA']['x'])) {
        _0x1d43a0['CAMERA']['x'] = _0x50fc53;
        _0x1d43a0['CAMERA']['y'] = _0x3ac58d;
    } else {
        const _0x3559a4 = 0x1 - Math['exp'](-Math['max'](0x0, _0x344ed5) * 0x28);
        _0x1d43a0['CAMERA']['x'] += (_0x50fc53 - _0x1d43a0['CAMERA']['x']) * _0x3559a4;
        _0x1d43a0['CAMERA']['y'] += (_0x3ac58d - _0x1d43a0['CAMERA']['y']) * _0x3559a4;
    }
    for (const _0x264a33 in _0x5488b8) {
        const _0x170496 = _0x5488b8[_0x264a33];
        if (_0x170496['renderX'] === undefined) {
            _0x170496['renderX'] = _0x170496['x'];
            _0x170496['renderY'] = _0x170496['y'];
            _0x170496['renderAngle'] = _0x170496['angle'] || 0x0;
        }
        const _0x57e851 = _0x170496['x'] + (_0x170496['vx'] || 0x0) * _0x344ed5;
        const _0x391ccd = _0x170496['y'] + (_0x170496['vy'] || 0x0) * _0x344ed5;
        _0x170496['x'] = _0x57e851;
        _0x170496['y'] = _0x391ccd;
        const _0x54d705 = 0x1 - Math['exp'](-_0x344ed5 * 0x12);
        const _0x80f079 = _0x170496['x'] - _0x170496['renderX'], _0x2a7a67 = _0x170496['y'] - _0x170496['renderY'];
        const _0x1bdac7 = Math['sqrt'](_0x80f079 * _0x80f079 + _0x2a7a67 * _0x2a7a67);
        const _0x3877bf = 0xc8;
        if (_0x1bdac7 > _0x3877bf) {
            _0x170496['renderX'] = _0x170496['x'] - _0x80f079 / _0x1bdac7 * _0x3877bf;
            _0x170496['renderY'] = _0x170496['y'] - _0x2a7a67 / _0x1bdac7 * _0x3877bf;
        }
        _0x170496['renderX'] += (_0x170496['x'] - _0x170496['renderX']) * _0x54d705;
        _0x170496['renderY'] += (_0x170496['y'] - _0x170496['renderY']) * _0x54d705;
        let _0x2aa6f7 = (_0x170496['angle'] || 0x0) - _0x170496['renderAngle'];
        while (_0x2aa6f7 < -Math['PI'])
            _0x2aa6f7 += Math['PI'] * 0x2;
        while (_0x2aa6f7 > Math['PI'])
            _0x2aa6f7 -= Math['PI'] * 0x2;
        _0x170496['renderAngle'] += _0x2aa6f7 * (0x1 - Math['exp'](-_0x344ed5 * 0x14));
    }
    if (_0x1d43a0['GAME_STATE'] === 'NIGHT') {
        _0x4f4f5e = Math['min'](0.6, _0x4f4f5e + _0x344ed5 * 0.5);
    } else {
        _0x4f4f5e = Math['max'](0x0, _0x4f4f5e - _0x344ed5 * 0.5);
    }
    _0x4f0aef();
    _0x2ee757();
}
function _0x13c771(_0x1f048d, _0x34758e, _0x30938c, _0x135d88, _0x58a93f = !![]) {
    _0x1f048d['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x413e6d = _0x1f048d['measureText'](_0x34758e)['width'];
    const _0x5251c9 = _0x413e6d + 0x18;
    const _0x14ffa0 = 0x1c;
    _0x1f048d['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x1f048d['beginPath']();
    if (_0x1f048d['roundRect']) {
        _0x1f048d['roundRect'](_0x30938c - _0x5251c9 / 0x2, _0x135d88 - _0x14ffa0, _0x5251c9, _0x14ffa0, 0x6);
    } else {
        _0x1f048d['rect'](_0x30938c - _0x5251c9 / 0x2, _0x135d88 - _0x14ffa0, _0x5251c9, _0x14ffa0);
    }
    _0x1f048d['fill']();
    if (_0x58a93f) {
        _0x1f048d['beginPath']();
        _0x1f048d['moveTo'](_0x30938c - 0x6, _0x135d88);
        _0x1f048d['lineTo'](_0x30938c + 0x6, _0x135d88);
        _0x1f048d['lineTo'](_0x30938c, _0x135d88 + 0x6);
        _0x1f048d['fill']();
    }
    _0x1f048d['fillStyle'] = '#ffffff';
    _0x1f048d['textAlign'] = 'center';
    _0x1f048d['textBaseline'] = 'middle';
    _0x1f048d['fillText'](_0x34758e, _0x30938c, _0x135d88 - _0x14ffa0 / 0x2 + 0x1);
}
function _0x19cd7c(_0x3f7266, _0xe4110c, _0x530775, _0x212712) {
    if (!_0xe4110c || _0xe4110c['length'] === 0x0)
        return;
    let _0x82e22f = _0x212712;
    for (let _0x377747 = 0x0; _0x377747 < _0xe4110c['length']; _0x377747++) {
        _0x13c771(_0x3f7266, _0xe4110c[_0x377747]['text'], _0x530775, _0x82e22f, _0x377747 === 0x0);
        _0x82e22f -= 0x24;
    }
}
function _0x2a15e1() {
    if (!_0x1d43a0['SYSTEM']['isReady'])
        return;
    _0x8222e2['fillStyle'] = '#000000';
    _0x8222e2['fillRect'](0x0, 0x0, _0x5c90cb['width'], _0x5c90cb['height']);
    _0x8222e2['save']();
    try {
        _0x8222e2['scale'](_0x1d43a0['SYSTEM']['viewScale'], _0x1d43a0['SYSTEM']['viewScale']);
        _0x8222e2['imageSmoothingEnabled'] = ![];
        const _0x40abc5 = Math['floor'](_0x1d43a0['CAMERA']['x'] || 0x0);
        const _0x1b2bd3 = Math['floor'](_0x1d43a0['CAMERA']['y'] || 0x0);
        const _0x184622 = Math['max'](0x0, Math['floor'](_0x40abc5 / _0x1d43a0['MAP']['chunkSize']));
        const _0x521341 = Math['min'](_0x1d43a0['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x40abc5 + _0x1d43a0['CAMERA']['width']) / _0x1d43a0['MAP']['chunkSize']));
        const _0x22186e = Math['max'](0x0, Math['floor'](_0x1b2bd3 / _0x1d43a0['MAP']['chunkSize']));
        const _0xb2060a = Math['min'](_0x1d43a0['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x1b2bd3 + _0x1d43a0['CAMERA']['height']) / _0x1d43a0['MAP']['chunkSize']));
        for (let _0x51e40a = _0x22186e; _0x51e40a <= _0xb2060a; _0x51e40a++)
            for (let _0x717d32 = _0x184622; _0x717d32 <= _0x521341; _0x717d32++) {
                const _0x1083b4 = _0x717d32 * _0x1d43a0['MAP']['chunkSize'] - _0x40abc5;
                const _0x5f266d = _0x51e40a * _0x1d43a0['MAP']['chunkSize'] - _0x1b2bd3;
                _0x8222e2['drawImage'](_0x1d43a0['MAP']['bgChunks'][_0x51e40a][_0x717d32], _0x1083b4, _0x5f266d, _0x1d43a0['MAP']['chunkSize'] + 0x1, _0x1d43a0['MAP']['chunkSize'] + 0x1);
            }
        if (_0xeeef72['complete'] && _0xeeef72['naturalWidth'] > 0x0) {
            const _0x34475a = _0x1d43a0['MAP']['tileSize'];
            const _0x3aee60 = _0x34475a * 0xa;
            const _0x7952d4 = _0x1d43a0['MAP']['columns'] / 0x2 * _0x34475a - _0x3aee60 / 0x2 - _0x40abc5;
            const _0x4617d6 = _0x1d43a0['MAP']['rows'] / 0x2 * _0x34475a - _0x3aee60 / 0x2 - _0x1b2bd3;
            _0x8222e2['imageSmoothingEnabled'] = ![];
            _0x8222e2['drawImage'](_0xeeef72, _0x7952d4, _0x4617d6, _0x3aee60, _0x3aee60);
        }
        if (_0x37b7a1['complete'] && _0x37b7a1['naturalWidth'] > 0x0) {
            _0x1d43a0['ENTITIES']['forEach'](_0x3069b4 => {
                if (_0x3069b4['type'] !== 'table')
                    return;
                _0x8222e2['save']();
                _0x8222e2['imageSmoothingEnabled'] = ![];
                const _0x36e603 = _0x37b7a1['naturalWidth'] >= _0x37b7a1['naturalHeight'];
                const _0xbd336a = _0x3069b4['w'] >= _0x3069b4['h'];
                if (_0x36e603 === _0xbd336a) {
                    _0x8222e2['drawImage'](_0x37b7a1, _0x3069b4['x'] - _0x40abc5, _0x3069b4['y'] - _0x1b2bd3, _0x3069b4['w'], _0x3069b4['h']);
                } else {
                    _0x8222e2['translate'](_0x3069b4['x'] - _0x40abc5 + _0x3069b4['w'] / 0x2, _0x3069b4['y'] - _0x1b2bd3 + _0x3069b4['h'] / 0x2);
                    _0x8222e2['rotate'](Math['PI'] / 0x2);
                    _0x8222e2['drawImage'](_0x37b7a1, -_0x3069b4['h'] / 0x2, -_0x3069b4['w'] / 0x2, _0x3069b4['h'], _0x3069b4['w']);
                }
                _0x8222e2['restore']();
            });
        } else {
            _0x1d43a0['ENTITIES']['forEach'](_0x3ac97b => {
                if (_0x3ac97b['type'] !== 'table')
                    return;
                _0x8222e2['save']();
                _0x8222e2['fillStyle'] = '#6b4423';
                _0x8222e2['fillRect'](_0x3ac97b['x'] - _0x40abc5, _0x3ac97b['y'] - _0x1b2bd3, _0x3ac97b['w'], _0x3ac97b['h']);
                _0x8222e2['strokeStyle'] = '#422810';
                _0x8222e2['lineWidth'] = 0x3;
                _0x8222e2['strokeRect'](_0x3ac97b['x'] - _0x40abc5 + 0x1, _0x3ac97b['y'] - _0x1b2bd3 + 0x1, _0x3ac97b['w'] - 0x2, _0x3ac97b['h'] - 0x2);
                _0x8222e2['fillStyle'] = '#82532a';
                _0x8222e2['fillRect'](_0x3ac97b['x'] - _0x40abc5 + 0x4, _0x3ac97b['y'] - _0x1b2bd3 + 0x4, _0x3ac97b['w'] - 0x8, _0x3ac97b['h'] - 0x8);
                _0x8222e2['restore']();
            });
        }
        if (_0x4ad161) {
            if (_0x1d43a0['MAP']['wallChunks'] && _0x1d43a0['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x460401 = _0x22186e; _0x460401 <= _0xb2060a; _0x460401++) {
                    for (let _0x5e8aa6 = _0x184622; _0x5e8aa6 <= _0x521341; _0x5e8aa6++) {
                        if (!_0x1d43a0['MAP']['wallChunks'][_0x460401] || !_0x1d43a0['MAP']['wallChunks'][_0x460401][_0x5e8aa6])
                            continue;
                        const _0x35c8c8 = _0x5e8aa6 * _0x1d43a0['MAP']['chunkSize'] - _0x40abc5;
                        const _0x216721 = _0x460401 * _0x1d43a0['MAP']['chunkSize'] - _0x1b2bd3;
                        _0x8222e2['drawImage'](_0x1d43a0['MAP']['wallChunks'][_0x460401][_0x5e8aa6], _0x35c8c8, _0x216721, _0x1d43a0['MAP']['chunkSize'] + 0x1, _0x1d43a0['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x5261ae = _0x22186e; _0x5261ae <= _0xb2060a; _0x5261ae++) {
                for (let _0x210a5c = _0x184622; _0x210a5c <= _0x521341; _0x210a5c++) {
                    const _0x474fba = _0x210a5c * _0x1d43a0['MAP']['chunkSize'] - _0x40abc5;
                    const _0x240027 = _0x5261ae * _0x1d43a0['MAP']['chunkSize'] - _0x1b2bd3;
                    _0x8222e2['drawImage'](_0x1d43a0['MAP']['fgChunks'][_0x5261ae][_0x210a5c], _0x474fba, _0x240027, _0x1d43a0['MAP']['chunkSize'] + 0x1, _0x1d43a0['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x1abaef = _0x1d43a0['GAME_STATE'] === 'NIGHT' && _0x1a73d2 === 'Skinwalker' && !_0x33c173['isDead'];
        const _0x55ca5b = _0x33c173['x'] - _0x40abc5 + _0x33c173['width'] / 0x2;
        const _0x507423 = _0x33c173['y'] - _0x1b2bd3 + _0x33c173['height'] / 0x2;
        const _0x17a6e5 = _0x33c173['width'] * _0x33c173['scale'] * 1.3;
        const _0xc6473a = _0x33c173['height'] * _0x33c173['scale'] * 1.3;
        for (const _0x4761a6 in _0x5488b8) {
            const _0x32cb51 = _0x5488b8[_0x4761a6];
            if (_0x32cb51['isDead'])
                continue;
            const _0x226052 = (_0x32cb51['renderX'] ?? _0x32cb51['x']) - _0x40abc5 + _0x32cb51['width'] / 0x2;
            const _0x2bfd91 = (_0x32cb51['renderY'] ?? _0x32cb51['y']) - _0x1b2bd3 + _0x32cb51['height'] / 0x2;
            const _0x5b74b9 = Math['min'](0x2, Math['max'](0.3, _0x32cb51['scale'] || 0x1));
            const _0x2b62f3 = _0x32cb51['width'] * _0x5b74b9 * 1.3;
            const _0xaec0aa = _0x32cb51['height'] * _0x5b74b9 * 1.3;
            _0x8222e2['save']();
            try {
                _0x8222e2['translate'](_0x226052, _0x2bfd91);
                _0x8222e2['rotate'](_0x32cb51['renderAngle'] ?? 0x0);
                if (_0x32cb51['isDark'])
                    _0x8222e2['filter'] = 'brightness(0)';
                _0x55568b(_0x8222e2, _0x32cb51['body'], _0x32cb51['eyes'], _0x2b62f3, _0xaec0aa);
                if (_0x3e0e55['has'](parseInt(_0x4761a6)) && _0x14556c['complete'] && _0x14556c['naturalWidth'] > 0x0) {
                    _0x8222e2['drawImage'](_0x14556c, -_0x2b62f3 / 0x2, -_0xaec0aa / 0x2, _0x2b62f3, _0xaec0aa);
                }
                if (_0x32cb51['isDark'])
                    _0x8222e2['filter'] = 'none';
            } finally {
                _0x8222e2['restore']();
            }
            if (!_0x26e2fc((_0x32cb51['renderX'] ?? _0x32cb51['x']) + _0x32cb51['width'] / 0x2, (_0x32cb51['renderY'] ?? _0x32cb51['y']) + _0x32cb51['height'] / 0x2)) {
                _0x8222e2['textAlign'] = 'center';
                _0x8222e2['lineJoin'] = 'round';
                _0x8222e2['lineWidth'] = 0x3;
                _0x8222e2['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x8222e2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x8222e2['fillStyle'] = _0x3e0e55['has'](parseInt(_0x4761a6)) ? '#cc88ff' : '#ffffff';
                const _0x4e6522 = _0x32cb51['isDark'] ? '???' : _0x32cb51['name'] + (_0x32cb51['isOwner'] ? '\x20[🗝️]' : '');
                _0x8222e2['strokeText'](_0x4e6522, _0x226052, _0x2bfd91 - _0xaec0aa / 0x2 - 0x10);
                _0x8222e2['fillText'](_0x4e6522, _0x226052, _0x2bfd91 - _0xaec0aa / 0x2 - 0x10);
            }
        }
        if (!_0x33c173['isDead']) {
            _0x8222e2['save']();
            try {
                _0x8222e2['translate'](_0x55ca5b, _0x507423);
                _0x8222e2['rotate'](_0x33c173['angle']);
                if (_0x1abaef)
                    _0x8222e2['filter'] = 'brightness(0)';
                _0x55568b(_0x8222e2, _0x734aad, _0xb17213, _0x17a6e5, _0xc6473a);
                if (_0x3e0e55['has'](_0x1850c6) && _0x14556c['complete'] && _0x14556c['naturalWidth'] > 0x0) {
                    _0x8222e2['drawImage'](_0x14556c, -_0x17a6e5 / 0x2, -_0xc6473a / 0x2, _0x17a6e5, _0xc6473a);
                }
                if (_0x1abaef)
                    _0x8222e2['filter'] = 'none';
            } finally {
                _0x8222e2['restore']();
            }
            if (!_0x26e2fc(_0x33c173['x'] + _0x33c173['width'] / 0x2, _0x33c173['y'] + _0x33c173['height'] / 0x2)) {
                _0x8222e2['textAlign'] = 'center';
                _0x8222e2['lineJoin'] = 'round';
                _0x8222e2['lineWidth'] = 0x3;
                _0x8222e2['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x8222e2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x8222e2['fillStyle'] = _0x3e0e55['has'](_0x1850c6) ? '#cc88ff' : '#ffffff';
                const _0x45aeaf = _0x1abaef ? '???' : _0x432ca8 + (_0x133c27 ? '\x20[🗝️]' : '');
                _0x8222e2['strokeText'](_0x45aeaf, _0x55ca5b, _0x507423 - _0xc6473a / 0x2 - 0x10);
                _0x8222e2['fillText'](_0x45aeaf, _0x55ca5b, _0x507423 - _0xc6473a / 0x2 - 0x10);
            }
        }
        if (_0x1d43a0['MAP']['wallChunks'] && _0x1d43a0['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x5f45ca = _0x22186e; _0x5f45ca <= _0xb2060a; _0x5f45ca++)
                for (let _0xe5ff57 = _0x184622; _0xe5ff57 <= _0x521341; _0xe5ff57++) {
                    if (!_0x1d43a0['MAP']['wallChunks'][_0x5f45ca] || !_0x1d43a0['MAP']['wallChunks'][_0x5f45ca][_0xe5ff57])
                        continue;
                    const _0x34e630 = _0xe5ff57 * _0x1d43a0['MAP']['chunkSize'] - _0x40abc5;
                    const _0x556bf7 = _0x5f45ca * _0x1d43a0['MAP']['chunkSize'] - _0x1b2bd3;
                    _0x8222e2['drawImage'](_0x1d43a0['MAP']['wallChunks'][_0x5f45ca][_0xe5ff57], _0x34e630, _0x556bf7, _0x1d43a0['MAP']['chunkSize'] + 0x1, _0x1d43a0['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x1fe868 of _0x1d43a0['ENTITIES']) {
            if (_0x1fe868['type'] !== 'npc')
                continue;
            const _0x2bfd48 = _0x1fe868['x'] - _0x40abc5 + _0x1fe868['w'] / 0x2;
            const _0x164dbe = _0x1fe868['y'] - _0x1b2bd3 + _0x1fe868['h'] / 0x2;
            const _0x3b13fd = _0x1fe868['w'];
            const _0x1bbb77 = _0x1fe868['h'];
            _0x8222e2['save']();
            _0x8222e2['translate'](_0x2bfd48, _0x164dbe);
            _0x8222e2['rotate'](_0x1fe868['angle'] !== undefined ? _0x1fe868['angle'] : 0x0);
            _0x55568b(_0x8222e2, _0x1fe868['body'] || 'yanito932.png', _0x1fe868['eyes'], _0x3b13fd, _0x1bbb77);
            _0x8222e2['restore']();
            _0x8222e2['textAlign'] = 'center';
            _0x8222e2['lineJoin'] = 'round';
            _0x8222e2['lineWidth'] = 0x3;
            _0x8222e2['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x8222e2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x8222e2['fillStyle'] = '#aaaaaa';
            _0x8222e2['strokeText'](_0x1fe868['name'] || 'NPC', _0x2bfd48, _0x164dbe - _0x1bbb77 / 0x2 - 0x10);
            _0x8222e2['fillText'](_0x1fe868['name'] || 'NPC', _0x2bfd48, _0x164dbe - _0x1bbb77 / 0x2 - 0x10);
        }
        if (_0x33c173['isDead']) {
            for (const _0x4e98c0 in _0x5488b8) {
                const _0x33e9df = _0x5488b8[_0x4e98c0];
                if (!_0x33e9df['isDead'])
                    continue;
                const _0x5d4a95 = (_0x33e9df['renderX'] ?? _0x33e9df['x']) - _0x40abc5 + _0x33e9df['width'] / 0x2;
                const _0x11895f = (_0x33e9df['renderY'] ?? _0x33e9df['y']) - _0x1b2bd3 + _0x33e9df['height'] / 0x2;
                const _0x49b1e0 = _0x33e9df['width'] * (_0x33e9df['scale'] || 0x1) * 1.3;
                const _0x4275f5 = _0x33e9df['height'] * (_0x33e9df['scale'] || 0x1) * 1.3;
                _0x8222e2['save']();
                try {
                    _0x8222e2['translate'](_0x5d4a95, _0x11895f);
                    _0x8222e2['rotate'](_0x33e9df['renderAngle'] ?? 0x0);
                    _0x8222e2['globalAlpha'] = 0.3;
                    _0x55568b(_0x8222e2, _0x33e9df['body'], _0x33e9df['eyes'], _0x49b1e0, _0x4275f5);
                } finally {
                    _0x8222e2['restore']();
                }
                if (!_0x26e2fc((_0x33e9df['renderX'] ?? _0x33e9df['x']) + _0x33e9df['width'] / 0x2, (_0x33e9df['renderY'] ?? _0x33e9df['y']) + _0x33e9df['height'] / 0x2)) {
                    _0x8222e2['save']();
                    _0x8222e2['globalAlpha'] = 0.3;
                    _0x8222e2['textAlign'] = 'center';
                    _0x8222e2['lineJoin'] = 'round';
                    _0x8222e2['lineWidth'] = 0x3;
                    _0x8222e2['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x8222e2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x8222e2['fillStyle'] = '#ffffff';
                    const _0x36ec8f = _0x33e9df['name'] + (_0x33e9df['isOwner'] ? '\x20[🗝️]' : '');
                    _0x8222e2['strokeText'](_0x36ec8f, _0x5d4a95, _0x11895f - _0x4275f5 / 0x2 - 0x10);
                    _0x8222e2['fillText'](_0x36ec8f, _0x5d4a95, _0x11895f - _0x4275f5 / 0x2 - 0x10);
                    _0x8222e2['restore']();
                }
            }
            _0x8222e2['save']();
            try {
                _0x8222e2['translate'](_0x55ca5b, _0x507423);
                _0x8222e2['rotate'](_0x33c173['angle']);
                _0x8222e2['globalAlpha'] = 0.3;
                _0x55568b(_0x8222e2, _0x734aad, _0xb17213, _0x17a6e5, _0xc6473a);
            } finally {
                _0x8222e2['restore']();
            }
            if (!_0x26e2fc(_0x33c173['x'] + _0x33c173['width'] / 0x2, _0x33c173['y'] + _0x33c173['height'] / 0x2)) {
                _0x8222e2['save']();
                _0x8222e2['globalAlpha'] = 0.3;
                _0x8222e2['textAlign'] = 'center';
                _0x8222e2['lineJoin'] = 'round';
                _0x8222e2['lineWidth'] = 0x3;
                _0x8222e2['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x8222e2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x8222e2['fillStyle'] = '#ffffff';
                const _0xcf7a55 = _0x432ca8 + (_0x133c27 ? '\x20[🗝️]' : '');
                _0x8222e2['strokeText'](_0xcf7a55, _0x55ca5b, _0x507423 - _0xc6473a / 0x2 - 0x10);
                _0x8222e2['fillText'](_0xcf7a55, _0x55ca5b, _0x507423 - _0xc6473a / 0x2 - 0x10);
                _0x8222e2['restore']();
            }
        }
        for (let _0x1c58e7 = _0x22186e; _0x1c58e7 <= _0xb2060a; _0x1c58e7++)
            for (let _0x3de407 = _0x184622; _0x3de407 <= _0x521341; _0x3de407++) {
                const _0x4cd842 = _0x3de407 * _0x1d43a0['MAP']['chunkSize'] - _0x40abc5;
                const _0x2ae0ba = _0x1c58e7 * _0x1d43a0['MAP']['chunkSize'] - _0x1b2bd3;
                _0x8222e2['drawImage'](_0x1d43a0['MAP']['fgChunks'][_0x1c58e7][_0x3de407], _0x4cd842, _0x2ae0ba, _0x1d43a0['MAP']['chunkSize'] + 0x1, _0x1d43a0['MAP']['chunkSize'] + 0x1);
            }
        if (_0x1d43a0['EDITOR']['enabled'] && _0x1d43a0['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x1ebd5b = _0x1d43a0['INPUTS']['mouseX'] / _0x1d43a0['SYSTEM']['viewScale'] + _0x1d43a0['CAMERA']['x'];
            const _0x1765d9 = _0x1d43a0['INPUTS']['mouseY'] / _0x1d43a0['SYSTEM']['viewScale'] + _0x1d43a0['CAMERA']['y'];
            const _0x39244f = Math['floor'](_0x1ebd5b / _0x1d43a0['MAP']['tileSize']);
            const _0x28d5d1 = Math['floor'](_0x1765d9 / _0x1d43a0['MAP']['tileSize']);
            if (_0x39244f >= 0x0 && _0x39244f < _0x1d43a0['MAP']['columns'] && _0x28d5d1 >= 0x0 && _0x28d5d1 < _0x1d43a0['MAP']['rows']) {
                const _0x7743e6 = _0x39244f * _0x1d43a0['MAP']['tileSize'] - _0x40abc5;
                const _0x4c3eb3 = _0x28d5d1 * _0x1d43a0['MAP']['tileSize'] - _0x1b2bd3;
                _0x8222e2['save']();
                _0x8222e2['globalAlpha'] = 0.5;
                if (_0x1d43a0['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x43a871 = _0x1d43a0['EDITOR']['selectedTileGid'] - 0x1;
                    _0x8222e2['drawImage'](_0x133bc9, _0x43a871 % _0x1d43a0['MAP']['tilesetCols'] * _0x1d43a0['MAP']['tileSize'], Math['floor'](_0x43a871 / _0x1d43a0['MAP']['tilesetCols']) * _0x1d43a0['MAP']['tileSize'], _0x1d43a0['MAP']['tileSize'], _0x1d43a0['MAP']['tileSize'], _0x7743e6, _0x4c3eb3, _0x1d43a0['MAP']['tileSize'], _0x1d43a0['MAP']['tileSize']);
                } else {
                    _0x8222e2['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x8222e2['fillRect'](_0x7743e6, _0x4c3eb3, _0x1d43a0['MAP']['tileSize'], _0x1d43a0['MAP']['tileSize']);
                }
                _0x8222e2['restore']();
            }
        }
        _0x1aa533(_0x8222e2, _0x40abc5, _0x1b2bd3);
        if (_0x4f4f5e > 0x0) {
            _0x8222e2['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x4f4f5e + ')';
            _0x8222e2['fillRect'](0x0, 0x0, _0x1d43a0['CAMERA']['width'], _0x1d43a0['CAMERA']['height']);
        }
        for (const _0x1430df in _0x5488b8) {
            const _0x5a002b = _0x5488b8[_0x1430df];
            if (_0x5a002b['isDead'] && !_0x33c173['isDead'])
                continue;
            const _0x354a9c = (_0x5a002b['renderX'] ?? _0x5a002b['x']) - _0x40abc5 + _0x5a002b['width'] / 0x2;
            const _0xaa893e = (_0x5a002b['renderY'] ?? _0x5a002b['y']) - _0x1b2bd3 + _0x5a002b['height'] / 0x2;
            _0x19cd7c(_0x8222e2, _0x5a002b['chats'], _0x354a9c, _0xaa893e - _0x5a002b['height'] / 0x2 - 0x20);
        }
        _0x19cd7c(_0x8222e2, _0x33c173['chats'], _0x55ca5b, _0x507423 - _0x33c173['height'] / 0x2 - 0x20);
    } finally {
        _0x8222e2['restore']();
    }
}
function _0x5811cb(_0x167690) {
    if (!_0x1d43a0['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x5811cb);
    let _0x14a2f8 = (_0x167690 - _0x1d43a0['SYSTEM']['lastTime']) / 0x3e8;
    _0x1d43a0['SYSTEM']['lastTime'] = _0x167690;
    if (_0x14a2f8 > 0.1)
        _0x14a2f8 = 0.1;
    if (_0x14a2f8 < 0x0 || isNaN(_0x14a2f8))
        _0x14a2f8 = 0.016;
    if (_0x4ad161) {
        _0x1c6897(_0x14a2f8);
        _0x2a15e1();
        return;
    }
    if (!_0x1850c6)
        return;
    _0x25fcbb(_0x14a2f8);
    _0x2a6d0c['tick'](_0x167690);
    _0x2a15e1();
}
function _0x3d2c7a() {
    const _0xf6136a = Math['ceil'](_0x1d43a0['MAP']['columns'] * _0x1d43a0['MAP']['tileSize'] / _0x1d43a0['MAP']['chunkSize']);
    const _0x25ca4a = Math['ceil'](_0x1d43a0['MAP']['rows'] * _0x1d43a0['MAP']['tileSize'] / _0x1d43a0['MAP']['chunkSize']);
    _0x1d43a0['MAP']['bgChunks'] = [];
    _0x1d43a0['MAP']['fgChunks'] = [];
    _0x1d43a0['MAP']['wallChunks'] = [];
    for (let _0x13cd7e = 0x0; _0x13cd7e < _0x25ca4a; _0x13cd7e++) {
        _0x1d43a0['MAP']['bgChunks'][_0x13cd7e] = [];
        _0x1d43a0['MAP']['fgChunks'][_0x13cd7e] = [];
        _0x1d43a0['MAP']['wallChunks'][_0x13cd7e] = [];
        for (let _0xcad906 = 0x0; _0xcad906 < _0xf6136a; _0xcad906++) {
            const _0x48326c = document['createElement']('canvas');
            _0x48326c['width'] = _0x48326c['height'] = _0x1d43a0['MAP']['chunkSize'];
            const _0xb0853a = document['createElement']('canvas');
            _0xb0853a['width'] = _0xb0853a['height'] = _0x1d43a0['MAP']['chunkSize'];
            const _0x3464a1 = document['createElement']('canvas');
            _0x3464a1['width'] = _0x3464a1['height'] = _0x1d43a0['MAP']['chunkSize'];
            _0x1d43a0['MAP']['bgChunks'][_0x13cd7e][_0xcad906] = _0x48326c;
            _0x1d43a0['MAP']['fgChunks'][_0x13cd7e][_0xcad906] = _0xb0853a;
            _0x1d43a0['MAP']['wallChunks'][_0x13cd7e][_0xcad906] = _0x3464a1;
            _0x21c49d(_0xcad906, _0x13cd7e);
        }
    }
}
function _0x21c49d(_0x5258a8, _0x4d3363) {
    const _0x19bcd9 = _0x1d43a0['MAP']['bgChunks'][_0x4d3363][_0x5258a8]['getContext']('2d', { 'alpha': !![] });
    const _0x5e459f = _0x1d43a0['MAP']['fgChunks'][_0x4d3363][_0x5258a8]['getContext']('2d', { 'alpha': !![] });
    const _0x4cfe59 = _0x1d43a0['MAP']['wallChunks'][_0x4d3363] && _0x1d43a0['MAP']['wallChunks'][_0x4d3363][_0x5258a8] ? _0x1d43a0['MAP']['wallChunks'][_0x4d3363][_0x5258a8]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x19bcd9['imageSmoothingEnabled'] = _0x5e459f['imageSmoothingEnabled'] = ![];
    if (_0x4cfe59)
        _0x4cfe59['imageSmoothingEnabled'] = ![];
    _0x19bcd9['clearRect'](0x0, 0x0, _0x1d43a0['MAP']['chunkSize'], _0x1d43a0['MAP']['chunkSize']);
    _0x5e459f['clearRect'](0x0, 0x0, _0x1d43a0['MAP']['chunkSize'], _0x1d43a0['MAP']['chunkSize']);
    if (_0x4cfe59)
        _0x4cfe59['clearRect'](0x0, 0x0, _0x1d43a0['MAP']['chunkSize'], _0x1d43a0['MAP']['chunkSize']);
    const _0x5b5dd0 = Math['floor'](_0x5258a8 * _0x1d43a0['MAP']['chunkSize'] / _0x1d43a0['MAP']['tileSize']);
    const _0x5e4a65 = Math['ceil']((_0x5258a8 + 0x1) * _0x1d43a0['MAP']['chunkSize'] / _0x1d43a0['MAP']['tileSize']);
    const _0x257ae8 = Math['floor'](_0x4d3363 * _0x1d43a0['MAP']['chunkSize'] / _0x1d43a0['MAP']['tileSize']);
    const _0x499362 = Math['ceil']((_0x4d3363 + 0x1) * _0x1d43a0['MAP']['chunkSize'] / _0x1d43a0['MAP']['tileSize']);
    const _0x1946c0 = 0.5;
    const _0x471868 = _0x1d43a0['MAP']['tileSize'] - _0x1946c0 * 0x2;
    _0x1d43a0['MAP']['layers']['forEach'](_0x44f0cc => {
        const _0xcdd19d = _0x44f0cc['name'] === 'walls';
        const _0x11edba = _0x44f0cc['name'] === 'trees' ? _0x5e459f : _0xcdd19d ? _0x4cfe59 || _0x19bcd9 : _0x19bcd9;
        for (let _0x318516 = Math['max'](0x0, _0x257ae8); _0x318516 < Math['min'](_0x1d43a0['MAP']['rows'], _0x499362); _0x318516++) {
            for (let _0x44df3e = Math['max'](0x0, _0x5b5dd0); _0x44df3e < Math['min'](_0x1d43a0['MAP']['columns'], _0x5e4a65); _0x44df3e++) {
                let _0x102dbf = _0x44f0cc['data'][_0x318516 * _0x1d43a0['MAP']['columns'] + _0x44df3e];
                if (_0x44f0cc['name'] === 'floor2' && _0x1d43a0['MAP']['doors'] && _0x1d43a0['MAP']['doors'][_0x318516 * _0x1d43a0['MAP']['columns'] + _0x44df3e]) {
                    _0x102dbf = 0x2;
                }
                if (_0x102dbf > 0x0) {
                    const _0x6c3a7b = _0x102dbf - 0x1;
                    const _0x11c559 = _0x6c3a7b % _0x1d43a0['MAP']['tilesetCols'] * _0x1d43a0['MAP']['tileSize'] + _0x1946c0;
                    const _0x5d0777 = Math['floor'](_0x6c3a7b / _0x1d43a0['MAP']['tilesetCols']) * _0x1d43a0['MAP']['tileSize'] + _0x1946c0;
                    const _0x299dc7 = _0x44df3e * _0x1d43a0['MAP']['tileSize'] - _0x5258a8 * _0x1d43a0['MAP']['chunkSize'];
                    const _0x461f48 = _0x318516 * _0x1d43a0['MAP']['tileSize'] - _0x4d3363 * _0x1d43a0['MAP']['chunkSize'];
                    if (_0x102dbf === 0x4) {
                        const _0x4d9107 = 0x1;
                        const _0x47b27b = _0x4d9107 % _0x1d43a0['MAP']['tilesetCols'] * _0x1d43a0['MAP']['tileSize'] + _0x1946c0;
                        const _0xf18fe5 = Math['floor'](_0x4d9107 / _0x1d43a0['MAP']['tilesetCols']) * _0x1d43a0['MAP']['tileSize'] + _0x1946c0;
                        _0x19bcd9['drawImage'](_0x133bc9, _0x47b27b, _0xf18fe5, _0x471868, _0x471868, _0x299dc7, _0x461f48, _0x1d43a0['MAP']['tileSize'], _0x1d43a0['MAP']['tileSize']);
                        let _0x5b03d4 = _0x1d43a0['MAP']['doors'] ? _0x1d43a0['MAP']['doors'][_0x318516 * _0x1d43a0['MAP']['columns'] + _0x44df3e] : null;
                        if (!_0x5b03d4) {
                            const _0x12219e = _0x1d43a0['MAP']['layers']['find'](_0x114e6b => _0x114e6b['name'] === 'walls');
                            const _0x5b6ebf = _0x318516 > 0x0 && _0x12219e && _0x12219e['data'][(_0x318516 - 0x1) * _0x1d43a0['MAP']['columns'] + _0x44df3e] > 0x0;
                            const _0x29e154 = _0x318516 < _0x1d43a0['MAP']['rows'] - 0x1 && _0x12219e && _0x12219e['data'][(_0x318516 + 0x1) * _0x1d43a0['MAP']['columns'] + _0x44df3e] > 0x0;
                            const _0x457dbc = _0x44df3e > 0x0 && _0x12219e && _0x12219e['data'][_0x318516 * _0x1d43a0['MAP']['columns'] + _0x44df3e - 0x1] > 0x0;
                            const _0x67f8ce = _0x44df3e < _0x1d43a0['MAP']['columns'] - 0x1 && _0x12219e && _0x12219e['data'][_0x318516 * _0x1d43a0['MAP']['columns'] + _0x44df3e + 0x1] > 0x0;
                            if (_0x457dbc && _0x67f8ce)
                                _0x5b03d4 = _0x318516 < _0x1d43a0['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x5b6ebf && _0x29e154)
                                _0x5b03d4 = _0x44df3e < _0x1d43a0['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x1fdf7a = 0x0;
                        if (_0x5b03d4 === 'bottom')
                            _0x1fdf7a = Math['PI'] / 0x2;
                        else if (_0x5b03d4 === 'left')
                            _0x1fdf7a = Math['PI'];
                        else if (_0x5b03d4 === 'top')
                            _0x1fdf7a = -Math['PI'] / 0x2;
                        else if (_0x5b03d4 === 'right')
                            _0x1fdf7a = 0x0;
                        if (_0x1fdf7a !== 0x0) {
                            _0x11edba['save']();
                            _0x11edba['translate'](_0x299dc7 + _0x1d43a0['MAP']['tileSize'] / 0x2, _0x461f48 + _0x1d43a0['MAP']['tileSize'] / 0x2);
                            _0x11edba['rotate'](_0x1fdf7a);
                            _0x11edba['drawImage'](_0x133bc9, _0x11c559, _0x5d0777, _0x471868, _0x471868, -_0x1d43a0['MAP']['tileSize'] / 0x2, -_0x1d43a0['MAP']['tileSize'] / 0x2, _0x1d43a0['MAP']['tileSize'], _0x1d43a0['MAP']['tileSize']);
                            _0x11edba['restore']();
                        } else {
                            _0x11edba['drawImage'](_0x133bc9, _0x11c559, _0x5d0777, _0x471868, _0x471868, _0x299dc7, _0x461f48, _0x1d43a0['MAP']['tileSize'], _0x1d43a0['MAP']['tileSize']);
                        }
                    } else {
                        _0x11edba['drawImage'](_0x133bc9, _0x11c559, _0x5d0777, _0x471868, _0x471868, _0x299dc7, _0x461f48, _0x1d43a0['MAP']['tileSize'], _0x1d43a0['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x2bcd33() {
    _0x133bc9['crossOrigin'] = 'Anonymous';
    _0x133bc9['onload'] = () => {
        _0x1d43a0['MAP']['tilesetCols'] = 0x3;
        _0x43308a();
    };
    _0x133bc9['onerror'] = () => {
        _0x1d43a0['MAP']['tilesetCols'] = 0x1;
        _0x43308a();
    };
    _0x133bc9['src'] = 'assets/tilesheet.png';
    _0xeeef72['crossOrigin'] = 'Anonymous';
    _0xeeef72['onload'] = _0x43308a;
    _0xeeef72['onerror'] = () => {
        _0x43308a();
    };
    _0xeeef72['src'] = 'assets/center.png';
    _0x37b7a1['crossOrigin'] = 'Anonymous';
    _0x37b7a1['onload'] = _0x43308a;
    _0x37b7a1['onerror'] = () => {
        _0x43308a();
    };
    _0x37b7a1['src'] = 'assets/table.png';
}
function _0x43308a() {
    _0x1d43a0['SYSTEM']['assetsLoaded']++;
    if (_0x1d43a0['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x3184e1();
    }
}
function _0x2fa8c9(_0x982624, _0x3adadf) {
    if (!_0x133c27 || !_0x3a17f5)
        return;
    const _0x51591d = _0x982624 / _0x1d43a0['SYSTEM']['viewScale'] + _0x1d43a0['CAMERA']['x'];
    const _0x5a70db = _0x3adadf / _0x1d43a0['SYSTEM']['viewScale'] + _0x1d43a0['CAMERA']['y'];
    const _0x2a3b9c = Math['floor'](_0x51591d / _0x1d43a0['MAP']['tileSize']);
    const _0x5d92d7 = Math['floor'](_0x5a70db / _0x1d43a0['MAP']['tileSize']);
    if (_0x2a3b9c >= 0x0 && _0x2a3b9c < _0x1d43a0['MAP']['columns'] && _0x5d92d7 >= 0x0 && _0x5d92d7 < _0x1d43a0['MAP']['rows'])
        _0x3a17f5['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x1d43a0['EDITOR']['selectedLayer'],
            'col': _0x2a3b9c,
            'row': _0x5d92d7,
            'gid': _0x1d43a0['EDITOR']['selectedTileGid']
        }));
}
function _0x5c5f60() {
    const _0x484870 = document['getElementById']('palette');
    if (!_0x484870 || _0x484870['children']['length'] > 0x0)
        return;
    const _0x42204d = 0x40;
    const _0x151f02 = _0x133bc9;
    const _0x59aa5f = document['createElement']('div');
    _0x59aa5f['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x465358 = document['createElement']('canvas');
    _0x465358['width'] = 0xc0;
    _0x465358['height'] = 0xa0;
    _0x465358['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x59aa5f['appendChild'](_0x465358);
    const _0x53eb94 = document['createElement']('div');
    _0x53eb94['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x59aa5f['appendChild'](_0x53eb94);
    let _0x220c16 = 0x0, _0x3bf458 = 0x0;
    let _0x3e5285 = ![], _0x9f968a = 0x0, _0x50dd85 = 0x0, _0x40b2d4 = 0x0, _0x1360ae = 0x0;
    function _0x3468b8() {
        const _0x44516c = _0x465358['getContext']('2d');
        _0x44516c['clearRect'](0x0, 0x0, _0x465358['width'], _0x465358['height']);
        _0x44516c['imageSmoothingEnabled'] = ![];
        if (_0x151f02['complete'] && _0x151f02['naturalWidth'] > 0x0) {
            _0x44516c['drawImage'](_0x151f02, _0x220c16, _0x3bf458, _0x465358['width'], _0x465358['height'], 0x0, 0x0, _0x465358['width'], _0x465358['height']);
        }
        _0x44516c['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x44516c['lineWidth'] = 0x1;
        const _0x439f7a = Math['floor'](_0x220c16 / _0x42204d);
        const _0xd672a5 = Math['floor'](_0x3bf458 / _0x42204d);
        for (let _0x50cc0d = _0x439f7a; _0x50cc0d <= _0x439f7a + Math['ceil'](_0x465358['width'] / _0x42204d) + 0x1; _0x50cc0d++) {
            const _0x3baf90 = _0x50cc0d * _0x42204d - _0x220c16;
            _0x44516c['beginPath']();
            _0x44516c['moveTo'](_0x3baf90, 0x0);
            _0x44516c['lineTo'](_0x3baf90, _0x465358['height']);
            _0x44516c['stroke']();
        }
        for (let _0x516ef4 = _0xd672a5; _0x516ef4 <= _0xd672a5 + Math['ceil'](_0x465358['height'] / _0x42204d) + 0x1; _0x516ef4++) {
            const _0x27ba3a = _0x516ef4 * _0x42204d - _0x3bf458;
            _0x44516c['beginPath']();
            _0x44516c['moveTo'](0x0, _0x27ba3a);
            _0x44516c['lineTo'](_0x465358['width'], _0x27ba3a);
            _0x44516c['stroke']();
        }
    }
    function _0x28b73d() {
        const _0x1172bd = Math['max'](0x1, Math['ceil'](_0x151f02['naturalWidth'] / _0x42204d));
        const _0x9b8039 = _0x1d43a0['EDITOR']['selectedTileGid'];
        if (_0x9b8039 <= 0x0) {
            _0x53eb94['style']['display'] = 'none';
            return;
        }
        const _0x1279bf = _0x9b8039 - 0x1;
        const _0x8b6fec = _0x1279bf % _0x1172bd;
        const _0x39a5ea = Math['floor'](_0x1279bf / _0x1172bd);
        const _0x583b7b = _0x8b6fec * _0x42204d - _0x220c16;
        const _0x317adc = _0x39a5ea * _0x42204d - _0x3bf458;
        _0x53eb94['style']['display'] = 'block';
        _0x53eb94['style']['left'] = _0x583b7b + 'px';
        _0x53eb94['style']['top'] = _0x317adc + 'px';
    }
    _0x151f02['onload'] = () => {
        _0x3468b8();
        _0x28b73d();
    };
    if (_0x151f02['complete'] && _0x151f02['naturalWidth'] > 0x0) {
        _0x3468b8();
        _0x28b73d();
    }
    _0x59aa5f['addEventListener']('mousedown', _0x20b7ae => {
        if (_0x20b7ae['button'] === 0x0) {
            _0x3e5285 = !![];
            _0x9f968a = _0x20b7ae['clientX'];
            _0x50dd85 = _0x20b7ae['clientY'];
            _0x40b2d4 = _0x220c16;
            _0x1360ae = _0x3bf458;
            _0x59aa5f['style']['cursor'] = 'grabbing';
            _0x20b7ae['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x3c6ef4 => {
        if (!_0x3e5285)
            return;
        const _0x1417b8 = _0x9f968a - _0x3c6ef4['clientX'];
        const _0x64f7f7 = _0x50dd85 - _0x3c6ef4['clientY'];
        const _0x3e5f50 = Math['max'](0x0, _0x151f02['naturalWidth'] - _0x465358['width']);
        const _0x48afe3 = Math['max'](0x0, _0x151f02['naturalHeight'] - _0x465358['height']);
        _0x220c16 = Math['max'](0x0, Math['min'](_0x3e5f50, _0x40b2d4 + _0x1417b8));
        _0x3bf458 = Math['max'](0x0, Math['min'](_0x48afe3, _0x1360ae + _0x64f7f7));
        _0x3468b8();
        _0x28b73d();
    });
    window['addEventListener']('mouseup', _0x19fb5e => {
        if (_0x3e5285) {
            _0x3e5285 = ![];
            _0x59aa5f['style']['cursor'] = 'grab';
        }
    });
    _0x59aa5f['addEventListener']('click', _0x3511e3 => {
        const _0x1230b = _0x59aa5f['getBoundingClientRect']();
        const _0x1e8bd3 = _0x3511e3['clientX'] - _0x1230b['left'] + _0x220c16;
        const _0x378d14 = _0x3511e3['clientY'] - _0x1230b['top'] + _0x3bf458;
        const _0x471d17 = Math['max'](0x1, Math['ceil'](_0x151f02['naturalWidth'] / _0x42204d));
        const _0x35fbb6 = Math['floor'](_0x1e8bd3 / _0x42204d);
        const _0x3e4e91 = Math['floor'](_0x378d14 / _0x42204d);
        const _0x4edca1 = _0x3e4e91 * _0x471d17 + _0x35fbb6 + 0x1;
        _0x1d43a0['EDITOR']['selectedTileGid'] = _0x4edca1;
        _0x28b73d();
    });
    _0x484870['appendChild'](_0x59aa5f);
    const _0x5d8a5c = document['createElement']('div');
    _0x5d8a5c['className'] = 'tile-btn\x20eraser-btn';
    _0x5d8a5c['title'] = 'Eraser\x20(gid\x200)';
    _0x5d8a5c['onclick'] = () => {
        _0x1d43a0['EDITOR']['selectedTileGid'] = 0x0;
        _0x53eb94['style']['display'] = 'none';
    };
    _0x484870['appendChild'](_0x5d8a5c);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x1d43a0['EDITOR']['enabled'] = !_0x1d43a0['EDITOR']['enabled'];
        const _0x3ded67 = document['getElementById']('editor-tools');
        if (_0x1d43a0['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x3ded67['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x3ded67['style']['display'] = 'none';
        }
    });
    const _0x3eb78c = document['getElementById']('start-game-btn');
    if (_0x3eb78c) {
        _0x3eb78c['addEventListener']('click', () => {
            if (_0x3a17f5)
                _0x3a17f5['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x1a3187 = document['getElementById']('rolelist-toggle-btn');
    if (_0x1a3187) {
        let _0x4b1313 = 'subalignments';
        _0x1a3187['addEventListener']('click', () => {
            if (_0x4b1313 === 'subalignments')
                _0x4b1313 = 'precise';
            else if (_0x4b1313 === 'precise')
                _0x4b1313 = 'off';
            else
                _0x4b1313 = 'subalignments';
            _0x1a3187['innerText'] = 'Role\x20List:\x20' + _0x4b1313['charAt'](0x0)['toUpperCase']() + _0x4b1313['slice'](0x1);
            if (_0x3a17f5)
                _0x3a17f5['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x4b1313
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x471b66 => {
        if (_0x471b66['id'] === 'editor-toggle-btn' || _0x471b66['id'] === 'start-game-btn' || _0x471b66['id'] === 'rolelist-toggle-btn')
            return;
        _0x471b66['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x23509f => _0x23509f['classList']['remove']('active'));
            _0x471b66['classList']['add']('active');
            _0x1d43a0['EDITOR']['selectedLayer'] = _0x471b66['dataset']['layer'];
        });
    });
}
function _0x168c33(_0x17f9d0) {
    if (_0x3a17f5)
        _0x3a17f5['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x17f9d0
        }));
}
function _0x21e623(_0x43f2b0) {
    if (_0x3a17f5)
        _0x3a17f5['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x43f2b0
        }));
}
function _0x5e02c1(_0x3cb816, _0x1fadef, _0x329ae2, _0x4be411) {
    const _0x3b6708 = document['getElementById']('admin-panel');
    if (_0x3b6708)
        _0x3b6708['remove']();
    if (_0x3b6708 && _0x3b6708['dataset']['target'] === String(_0x3cb816))
        return;
    const _0x302155 = document['createElement']('div');
    _0x302155['id'] = 'admin-panel';
    _0x302155['dataset']['target'] = String(_0x3cb816);
    _0x302155['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0xc12f85 = document['createElement']('div');
    _0xc12f85['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0xc12f85['textContent'] = _0x1fadef;
    _0x302155['appendChild'](_0xc12f85);
    const _0x2c50d5 = document['createElement']('button');
    _0x2c50d5['textContent'] = 'Kick';
    _0x2c50d5['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x2c50d5['onmouseenter'] = () => _0x2c50d5['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x2c50d5['onmouseleave'] = () => _0x2c50d5['style']['background'] = 'transparent';
    _0x2c50d5['onclick'] = () => {
        _0x168c33(_0x3cb816);
        _0x302155['remove']();
    };
    _0x302155['appendChild'](_0x2c50d5);
    const _0x81460 = document['createElement']('button');
    _0x81460['textContent'] = 'Ban';
    _0x81460['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x81460['onmouseenter'] = () => _0x81460['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x81460['onmouseleave'] = () => _0x81460['style']['background'] = 'transparent';
    _0x81460['onclick'] = () => {
        _0x21e623(_0x3cb816);
        _0x302155['remove']();
    };
    _0x302155['appendChild'](_0x81460);
    document['body']['appendChild'](_0x302155);
    const _0x241a62 = _0x302155['offsetWidth'] || 0x91;
    const _0x4dfadb = _0x302155['offsetHeight'] || 0x50;
    let _0xacec49 = _0x329ae2 - _0x241a62;
    let _0x30f40c = _0x4be411;
    if (_0xacec49 < 0x4)
        _0xacec49 = _0x329ae2;
    if (_0x30f40c + _0x4dfadb > window['innerHeight'] - 0x4)
        _0x30f40c = window['innerHeight'] - _0x4dfadb - 0x4;
    _0x302155['style']['left'] = _0xacec49 + 'px';
    _0x302155['style']['top'] = _0x30f40c + 'px';
    const _0x5f35e5 = _0x9b7435 => {
        if (!_0x302155['contains'](_0x9b7435['target'])) {
            _0x302155['remove']();
            document['removeEventListener']('mousedown', _0x5f35e5);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x5f35e5), 0x0);
}
function _0x29efb9() {
    const _0x1f63be = document['getElementById']('leaderboard-list');
    _0x1f63be['innerHTML'] = '';
    const _0x2d58fd = document['createElement']('div');
    _0x2d58fd['className'] = 'leaderboard-entry';
    const _0x5f312c = document['createElement']('span');
    _0x5f312c['textContent'] = _0x432ca8 + (_0x133c27 ? '\x20[🗝️]' : '');
    if (_0x3e0e55['has'](_0x1850c6) && !_0x33c173['isDead']) {
        _0x5f312c['style']['color'] = '#cc88ff';
    }
    _0x2d58fd['appendChild'](_0x5f312c);
    _0x1f63be['appendChild'](_0x2d58fd);
    for (const _0x53db2b in _0x5488b8) {
        const _0x53103a = document['createElement']('div');
        _0x53103a['className'] = 'leaderboard-entry';
        const _0x125bea = document['createElement']('span');
        _0x125bea['textContent'] = _0x5488b8[_0x53db2b]['name'] + (_0x5488b8[_0x53db2b]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x3e0e55['has'](parseInt(_0x53db2b)) && !_0x5488b8[_0x53db2b]['isDead']) {
            _0x125bea['style']['color'] = '#cc88ff';
        }
        _0x53103a['appendChild'](_0x125bea);
        if (_0x133c27 && !_0x5488b8[_0x53db2b]['isOwner']) {
            const _0x381fed = _0x5488b8[_0x53db2b]['id'];
            const _0x331b71 = _0x5488b8[_0x53db2b]['name'];
            _0x53103a['style']['cursor'] = 'context-menu';
            _0x53103a['addEventListener']('contextmenu', _0xcd08ad => {
                _0xcd08ad['preventDefault']();
                _0xcd08ad['stopPropagation']();
                _0x5e02c1(_0x381fed, _0x331b71, _0xcd08ad['clientX'], _0xcd08ad['clientY']);
            });
        }
        _0x1f63be['appendChild'](_0x53103a);
    }
}
window['addEventListener']('resize', _0x3184e1);
function _0x3184e1() {
    _0x5c90cb['width'] = window['innerWidth'];
    _0x5c90cb['height'] = window['innerHeight'];
    _0x1d43a0['SYSTEM']['viewScale'] = Math['max'](_0x5c90cb['width'] / _0x2e5b39, _0x5c90cb['height'] / _0x195434);
    _0x1d43a0['CAMERA']['width'] = _0x5c90cb['width'] / _0x1d43a0['SYSTEM']['viewScale'];
    _0x1d43a0['CAMERA']['height'] = _0x5c90cb['height'] / _0x1d43a0['SYSTEM']['viewScale'];
    _0x8222e2['imageSmoothingEnabled'] = ![];
}
function _0x487570(_0x2106ec) {
    if (_0x2106ec['ctrlKey'] || _0x2106ec['metaKey']) {
        if (_0x2106ec['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x2106ec['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x2106ec['code'])) {
            _0x2106ec['preventDefault']();
            _0x2106ec['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x487570, { 'passive': ![] });
window['addEventListener']('keydown', _0x487570, { 'passive': ![] });
window['addEventListener']('keydown', _0x41b29e => {
    const _0x5234c8 = _0x41b29e['key']['toLowerCase']();
    if (_0x5234c8 === 'tab') {
        _0x41b29e['preventDefault']();
        const _0x22f26f = document['getElementById']('will-ui');
        const _0x5486ca = document['getElementById']('will-input');
        if (_0x22f26f['style']['display'] === 'flex') {
            _0x22f26f['style']['display'] = 'none';
            if (_0x3a17f5)
                _0x3a17f5['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x5486ca['value']
                }));
            _0x5486ca['blur']();
        } else {
            _0x22f26f['style']['display'] = 'flex';
            _0x5486ca['focus']();
            for (let _0x34a4b1 in _0x1d43a0['INPUTS']['keys'])
                _0x1d43a0['INPUTS']['keys'][_0x34a4b1] = ![];
        }
        return;
    }
    if (_0x41b29e['key'] === 'Enter') {
        if (_0x4ad161) {
            const _0x32c9d5 = document['getElementById']('play-btn');
            if (_0x32c9d5)
                _0x32c9d5['click']();
            return;
        }
        if (!_0x3a17f5 || _0x3a17f5['readyState'] !== WebSocket['OPEN'])
            return;
        const _0xe61ab2 = document['getElementById']('chat-ui');
        const _0x3963fd = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x3963fd) {
            const _0xb54288 = _0x3963fd['value']['trim']();
            if (_0xb54288['length'] > 0x0) {
                _0x3a17f5['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0xb54288
                }));
            }
            _0x3963fd['value'] = '';
            _0xe61ab2['style']['display'] = 'none';
            _0x3963fd['blur']();
        } else {
            _0xe61ab2['style']['display'] = 'block';
            _0x3963fd['focus']();
            for (let _0x5d6ad9 in _0x1d43a0['INPUTS']['keys'])
                _0x1d43a0['INPUTS']['keys'][_0x5d6ad9] = ![];
        }
        _0x41b29e['preventDefault']();
        return;
    }
    if (_0x41b29e['key'] === 'Escape') {
        const _0x46d805 = document['getElementById']('guide-ui');
        if (_0x46d805 && _0x46d805['style']['display'] === 'flex') {
            _0x46d805['style']['display'] = 'none';
            return;
        }
        const _0x4ac172 = document['getElementById']('ability-ui');
        if (_0x4ac172 && _0x4ac172['style']['display'] === 'block') {
            _0x4ac172['style']['display'] = 'none';
            return;
        }
        const _0x38bd42 = document['getElementById']('settings-panel');
        if (_0x38bd42 && _0x38bd42['style']['display'] === 'block') {
            _0x38bd42['style']['display'] = 'none';
            return;
        }
        const _0x11e338 = document['getElementById']('mayor-confirm-dialog');
        if (_0x11e338 && _0x11e338['style']['display'] === 'flex') {
            _0x11e338['style']['display'] = 'none';
            return;
        }
        const _0x5994e6 = document['getElementById']('target-chooser-ui');
        if (_0x5994e6 && _0x5994e6['style']['display'] === 'flex') {
            _0x5994e6['style']['display'] = 'none';
            return;
        }
        const _0x1cff14 = document['getElementById']('chat-ui');
        const _0x4ade01 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x4ade01) {
            _0x4ade01['value'] = '';
            _0x1cff14['style']['display'] = 'none';
            _0x4ade01['blur']();
            _0x41b29e['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x1d43a0['INPUTS']['keys']['hasOwnProperty'](_0x5234c8))
            _0x1d43a0['INPUTS']['keys'][_0x5234c8] = !![];
        if (!_0x3a17f5 || _0x3a17f5['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x5234c8 === 'h' && !_0x41b29e['repeat']) {
            const _0x40635a = document['getElementById']('guide-ui');
            if (_0x40635a) {
                _0x40635a['style']['display'] = _0x40635a['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x5234c8 === 't' && !_0x41b29e['repeat']) {
            if (_0x33c173['isDead'])
                return;
            if (_0x1a73d2 === 'Mayor') {
                if (_0x3e0e55['has'](_0x1850c6)) {
                    _0x10ce57('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x969fb6 = document['getElementById']('mayor-confirm-dialog');
                if (_0x969fb6)
                    _0x969fb6['style']['display'] = 'flex';
                return;
            }
            if (_0x1d43a0['GAME_STATE'] === 'NIGHT') {
                if (!_0x1d43a0['NIGHT_ABILITY_OPEN']) {
                    _0x10ce57('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x22b224 = document['getElementById']('ability-ui');
                if (_0x22b224) {
                    if (_0x22b224['style']['display'] === 'block') {
                        _0x22b224['style']['display'] = 'none';
                    } else {
                        _0x518e0f();
                        _0x22b224['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1d43a0['GAME_STATE'] === 'DAY_DISCUSS' || _0x1d43a0['GAME_STATE'] === 'DAY_VOTE') {
                _0x10ce57('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x5234c8 === 'e' && !_0x33c173['isDead']) {
            const _0x507fe3 = Date['now']();
            if (!window['_lastDoorSend'] || _0x507fe3 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x507fe3;
                _0x3a17f5['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x1bd7fd => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x2eab56 = _0x1bd7fd['key']['toLowerCase']();
        if (_0x1d43a0['INPUTS']['keys']['hasOwnProperty'](_0x2eab56))
            _0x1d43a0['INPUTS']['keys'][_0x2eab56] = ![];
    }
});
window['addEventListener']('mousemove', _0x77dc1c => {
    _0x1d43a0['INPUTS']['mouseX'] = _0x77dc1c['clientX'];
    _0x1d43a0['INPUTS']['mouseY'] = _0x77dc1c['clientY'];
    if (_0x1d43a0['INPUTS']['isMouseDown'] && _0x1d43a0['EDITOR']['enabled']) {
        _0x2fa8c9(_0x77dc1c['clientX'], _0x77dc1c['clientY']);
    }
});
window['addEventListener']('mousedown', _0x9eefa8 => {
    if (_0x9eefa8['target']['closest']('#editor-ui') || _0x9eefa8['target']['closest']('#leaderboard-ui') || _0x9eefa8['target']['closest']('#chat-log-ui') || _0x9eefa8['target']['closest']('#target-chooser-ui') || _0x9eefa8['target']['closest']('#guide-ui') || _0x9eefa8['target']['closest']('#role-list-ui') || _0x9eefa8['target']['closest']('#ability-ui') || _0x9eefa8['target']['closest']('#settings-panel') || _0x9eefa8['target']['closest']('#mayor-confirm-dialog') || _0x9eefa8['target']['closest']('#mobile-action-bar') || _0x9eefa8['target']['closest']('#mobile-top-bar') || _0x9eefa8['target']['closest']('#mobile-joystick-zone') || _0x9eefa8['target']['closest']('#mobile-chat-overlay') || _0x9eefa8['target']['closest']('#will-ui') || _0x9eefa8['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x9eefa8['button'] === 0x0) {
        _0x1d43a0['INPUTS']['isMouseDown'] = !![];
        if (_0x1d43a0['EDITOR']['enabled'])
            _0x2fa8c9(_0x9eefa8['clientX'], _0x9eefa8['clientY']);
    }
});
window['addEventListener']('mouseup', _0x4ea28c => {
    _0x1d43a0['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x42fd74 => {
    if (_0x42fd74['target']['closest']('#settings-btn'))
        return;
    const _0x2852d8 = document['getElementById']('leaderboard-list');
    const _0x1ad12c = document['getElementById']('leaderboard-toggle');
    if (_0x2852d8['style']['display'] === 'none') {
        _0x2852d8['style']['display'] = 'flex';
        _0x1ad12c['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x2852d8['style']['display'] = 'none';
        _0x1ad12c['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x44932a = document['getElementById']('close-target-btn');
if (_0x44932a) {
    _0x44932a['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x166446 = document['getElementById']('close-guide-btn');
if (_0x166446) {
    _0x166446['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x534a6b = document['getElementById']('role-list-header');
if (_0x534a6b) {
    _0x534a6b['addEventListener']('click', () => {
        const _0x5f39bd = document['getElementById']('role-list-items');
        const _0xbe1b96 = document['getElementById']('role-list-toggle');
        if (_0x5f39bd['style']['display'] === 'none') {
            _0x5f39bd['style']['display'] = 'flex';
            _0xbe1b96['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x5f39bd['style']['display'] = 'none';
            _0xbe1b96['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x31de01() {
    const _0x6f732 = document['getElementById']('mobile-joystick-zone');
    const _0xf703b = document['getElementById']('mobile-joystick-base');
    const _0x37df2c = document['getElementById']('mobile-joystick-knob');
    if (_0x6f732 && _0xf703b && _0x37df2c) {
        const _0x59e575 = 0x3e;
        const _0x10c455 = (_0x2c81d9, _0x2ca02c) => {
            const _0x2b95de = _0xf703b['getBoundingClientRect']();
            const _0x196cf3 = _0x2b95de['left'] + _0x2b95de['width'] / 0x2;
            const _0x3ad691 = _0x2b95de['top'] + _0x2b95de['height'] / 0x2;
            const _0x499503 = _0x2c81d9 - _0x196cf3;
            const _0x4fc66e = _0x2ca02c - _0x3ad691;
            const _0x31f1b0 = Math['hypot'](_0x499503, _0x4fc66e);
            if (_0x31f1b0 === 0x0) {
                _0x517338 = 0x0;
                _0x4751d6 = 0x0;
                _0x46e736 = ![];
                _0x37df2c['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x359371 = Math['min'](_0x31f1b0, _0x59e575);
            const _0x34b655 = _0x499503 / _0x31f1b0 * _0x359371;
            const _0x3bfdd7 = _0x4fc66e / _0x31f1b0 * _0x359371;
            _0x517338 = _0x34b655 / _0x59e575;
            _0x4751d6 = _0x3bfdd7 / _0x59e575;
            _0x46e736 = _0x31f1b0 >= _0x59e575 * 0.75;
            _0x37df2c['style']['transform'] = 'translate(' + _0x34b655 + 'px,\x20' + _0x3bfdd7 + 'px)';
        };
        const _0x5b8baf = _0x3c4c43 => {
            for (let _0xcb12bd = 0x0; _0xcb12bd < _0x3c4c43['changedTouches']['length']; _0xcb12bd++) {
                const _0x4489cc = _0x3c4c43['changedTouches'][_0xcb12bd];
                if (_0x2bc7c3 === null) {
                    _0x2bc7c3 = _0x4489cc['identifier'];
                    _0x20f2c6 = !![];
                    _0x10c455(_0x4489cc['clientX'], _0x4489cc['clientY']);
                    break;
                }
            }
        };
        const _0x4efdb7 = _0x3f9152 => {
            for (let _0x57c771 = 0x0; _0x57c771 < _0x3f9152['changedTouches']['length']; _0x57c771++) {
                const _0x293d6c = _0x3f9152['changedTouches'][_0x57c771];
                if (_0x293d6c['identifier'] === _0x2bc7c3) {
                    _0x10c455(_0x293d6c['clientX'], _0x293d6c['clientY']);
                    break;
                }
            }
        };
        const _0x13ec21 = _0x5bd7c8 => {
            for (let _0x457671 = 0x0; _0x457671 < _0x5bd7c8['changedTouches']['length']; _0x457671++) {
                const _0x947f79 = _0x5bd7c8['changedTouches'][_0x457671];
                if (_0x947f79['identifier'] === _0x2bc7c3) {
                    _0x2bc7c3 = null;
                    _0x20f2c6 = ![];
                    _0x517338 = 0x0;
                    _0x4751d6 = 0x0;
                    _0x46e736 = ![];
                    _0x37df2c['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x6f732['addEventListener']('touchstart', _0x6993a1 => {
            _0x6993a1['preventDefault']();
            _0x5b8baf(_0x6993a1);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x4efdb7, { 'passive': !![] });
        window['addEventListener']('touchend', _0x13ec21, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x13ec21, { 'passive': !![] });
    }
    const _0x546111 = (_0x15071a, _0x3efa8e) => {
        const _0x317184 = _0x15071a / _0x1d43a0['SYSTEM']['viewScale'];
        const _0x346265 = _0x3efa8e / _0x1d43a0['SYSTEM']['viewScale'];
        const _0x3b0d0b = _0x33c173['x'] - _0x1d43a0['CAMERA']['x'] + _0x33c173['width'] / 0x2;
        const _0x5e3871 = _0x33c173['y'] - _0x1d43a0['CAMERA']['y'] + _0x33c173['height'] / 0x2;
        _0x731a6e = Math['atan2'](_0x346265 - _0x5e3871, _0x317184 - _0x3b0d0b);
        _0x30c58e = !![];
        _0x1d43a0['INPUTS']['mouseX'] = _0x15071a;
        _0x1d43a0['INPUTS']['mouseY'] = _0x3efa8e;
    };
    _0x5c90cb['addEventListener']('touchstart', _0x1c5b5c => {
        if (_0x4ad161)
            return;
        for (let _0x4bd9aa = 0x0; _0x4bd9aa < _0x1c5b5c['changedTouches']['length']; _0x4bd9aa++) {
            const _0x4573ee = _0x1c5b5c['changedTouches'][_0x4bd9aa];
            if (_0x4573ee['identifier'] !== _0x2bc7c3 && _0x233e7d === null) {
                _0x233e7d = _0x4573ee['identifier'];
                _0x546111(_0x4573ee['clientX'], _0x4573ee['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x5c90cb['addEventListener']('touchmove', _0x2b709c => {
        if (_0x4ad161)
            return;
        for (let _0x3df275 = 0x0; _0x3df275 < _0x2b709c['changedTouches']['length']; _0x3df275++) {
            const _0x481c25 = _0x2b709c['changedTouches'][_0x3df275];
            if (_0x481c25['identifier'] === _0x233e7d) {
                _0x546111(_0x481c25['clientX'], _0x481c25['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x2345f3 = _0x3ac771 => {
        for (let _0x197eeb = 0x0; _0x197eeb < _0x3ac771['changedTouches']['length']; _0x197eeb++) {
            const _0x45b476 = _0x3ac771['changedTouches'][_0x197eeb];
            if (_0x45b476['identifier'] === _0x233e7d) {
                _0x233e7d = null;
                _0x30c58e = ![];
                break;
            }
        }
    };
    _0x5c90cb['addEventListener']('touchend', _0x2345f3, { 'passive': !![] });
    _0x5c90cb['addEventListener']('touchcancel', _0x2345f3, { 'passive': !![] });
    const _0x21496f = document['getElementById']('mob-sprint-btn');
    if (_0x21496f) {
        _0x21496f['addEventListener']('click', _0x39ed32 => {
            _0x39ed32['stopPropagation']();
            _0x511120 = !_0x511120;
            _0x21496f['classList']['toggle']('active', _0x511120);
        });
    }
    const _0x226ecc = document['getElementById']('mob-interact-btn');
    if (_0x226ecc) {
        _0x226ecc['addEventListener']('click', _0x210a9b => {
            _0x210a9b['stopPropagation']();
            if (!_0x33c173['isDead']) {
                const _0x356386 = Date['now']();
                if (!window['_lastDoorSend'] || _0x356386 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x356386;
                    if (_0x3a17f5 && _0x3a17f5['readyState'] === WebSocket['OPEN'])
                        _0x3a17f5['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x1d6c47 = document['getElementById']('mob-ability-btn');
    if (_0x1d6c47) {
        _0x1d6c47['addEventListener']('click', _0x38084f => {
            _0x38084f['stopPropagation']();
            if (_0x33c173['isDead'])
                return;
            if (_0x1a73d2 === 'Mayor') {
                if (_0x3e0e55['has'](_0x1850c6)) {
                    _0x10ce57('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x4032bb = document['getElementById']('mayor-confirm-dialog');
                if (_0x4032bb)
                    _0x4032bb['style']['display'] = 'flex';
                return;
            }
            if (_0x1d43a0['GAME_STATE'] === 'NIGHT') {
                if (!_0x1d43a0['NIGHT_ABILITY_OPEN']) {
                    _0x10ce57('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x5ca50e = document['getElementById']('ability-ui');
                if (_0x5ca50e) {
                    if (_0x5ca50e['style']['display'] === 'block') {
                        _0x5ca50e['style']['display'] = 'none';
                    } else {
                        _0x518e0f();
                        _0x5ca50e['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1d43a0['GAME_STATE'] === 'DAY_DISCUSS' || _0x1d43a0['GAME_STATE'] === 'DAY_VOTE') {
                _0x10ce57('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x22352b = document['getElementById']('mob-will-btn');
    const _0x1d2b58 = document['getElementById']('will-ui');
    const _0x1927c7 = document['getElementById']('will-input');
    const _0x463fb3 = document['getElementById']('close-will-btn');
    const _0x17e203 = () => {
        if (!_0x1d2b58)
            return;
        if (_0x1d2b58['style']['display'] === 'flex') {
            _0x1d2b58['style']['display'] = 'none';
            if (_0x3a17f5 && _0x3a17f5['readyState'] === WebSocket['OPEN'] && _0x1927c7) {
                _0x3a17f5['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x1927c7['value']
                }));
            }
            if (_0x1927c7)
                _0x1927c7['blur']();
        } else {
            _0x1d2b58['style']['display'] = 'flex';
            if (_0x1927c7)
                _0x1927c7['focus']();
        }
    };
    if (_0x22352b)
        _0x22352b['addEventListener']('click', _0x4fba35 => {
            _0x4fba35['stopPropagation']();
            _0x17e203();
        });
    if (_0x463fb3)
        _0x463fb3['addEventListener']('click', _0x1a4c8a => {
            _0x1a4c8a['stopPropagation']();
            _0x17e203();
        });
    const _0x2386b1 = document['getElementById']('mob-chat-btn');
    const _0x40e1f6 = document['getElementById']('mobile-chat-overlay');
    const _0x165cf7 = document['getElementById']('mobile-chat-input');
    const _0x21a606 = document['getElementById']('mobile-chat-send');
    const _0x48ef2b = document['getElementById']('mobile-chat-cancel');
    const _0x260459 = () => {
        if (!_0x40e1f6 || !_0x165cf7)
            return;
        _0x40e1f6['style']['display'] = 'flex';
        _0x165cf7['value'] = '';
        _0x165cf7['focus']();
    };
    const _0xef9d74 = () => {
        if (!_0x40e1f6 || !_0x165cf7)
            return;
        _0x40e1f6['style']['display'] = 'none';
        _0x165cf7['blur']();
    };
    const _0x39137a = () => {
        if (!_0x165cf7)
            return;
        const _0x1d8f2a = _0x165cf7['value']['trim']();
        if (_0x1d8f2a['length'] > 0x0 && _0x3a17f5 && _0x3a17f5['readyState'] === WebSocket['OPEN']) {
            _0x3a17f5['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x1d8f2a
            }));
        }
        _0x165cf7['value'] = '';
        _0xef9d74();
    };
    if (_0x2386b1)
        _0x2386b1['addEventListener']('click', _0xa35589 => {
            _0xa35589['stopPropagation']();
            _0x260459();
        });
    if (_0x21a606)
        _0x21a606['addEventListener']('click', _0x5a6c45 => {
            _0x5a6c45['stopPropagation']();
            _0x39137a();
        });
    if (_0x48ef2b)
        _0x48ef2b['addEventListener']('click', _0x5a046b => {
            _0x5a046b['stopPropagation']();
            _0xef9d74();
        });
    if (_0x165cf7) {
        _0x165cf7['addEventListener']('keydown', _0x523159 => {
            if (_0x523159['key'] === 'Enter') {
                _0x523159['preventDefault']();
                _0x39137a();
            } else if (_0x523159['key'] === 'Escape') {
                _0xef9d74();
            }
        });
    }
    const _0x1cb3e7 = document['getElementById']('mob-top-chat');
    if (_0x1cb3e7)
        _0x1cb3e7['addEventListener']('click', _0x1ab2e4 => {
            _0x1ab2e4['stopPropagation']();
            _0x260459();
        });
    const _0x4ec6dd = document['getElementById']('mob-top-will');
    if (_0x4ec6dd)
        _0x4ec6dd['addEventListener']('click', _0x3f8f31 => {
            _0x3f8f31['stopPropagation']();
            _0x17e203();
        });
    const _0x5945e6 = document['getElementById']('mob-top-roles');
    if (_0x5945e6) {
        _0x5945e6['addEventListener']('click', _0xa28364 => {
            _0xa28364['stopPropagation']();
            const _0xd2fad0 = document['getElementById']('role-list-ui');
            const _0x47cc16 = document['getElementById']('leaderboard-ui');
            if (_0x47cc16)
                _0x47cc16['style']['display'] = 'none';
            if (_0xd2fad0)
                _0xd2fad0['style']['display'] = _0xd2fad0['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x35842f = document['getElementById']('mob-top-players');
    if (_0x35842f) {
        _0x35842f['addEventListener']('click', _0x6339e3 => {
            _0x6339e3['stopPropagation']();
            const _0x432c57 = document['getElementById']('leaderboard-ui');
            const _0x1e4cc5 = document['getElementById']('role-list-ui');
            if (_0x1e4cc5)
                _0x1e4cc5['style']['display'] = 'none';
            if (_0x432c57)
                _0x432c57['style']['display'] = _0x432c57['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x16dcfe = document['getElementById']('mob-top-help');
    if (_0x16dcfe) {
        _0x16dcfe['addEventListener']('click', _0x20c9ae => {
            _0x20c9ae['stopPropagation']();
            const _0x185f21 = document['getElementById']('guide-ui');
            if (_0x185f21)
                _0x185f21['style']['display'] = _0x185f21['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x39012a) {
            _0x39012a = !![];
            _0x42a5ad();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
