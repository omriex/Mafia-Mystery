document['addEventListener']('contextmenu', _0x35bcd8 => _0x35bcd8['preventDefault']());
const _0xa72fa7 = {
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
let _0x2b4bfd = '';
function _0xfd6917(_0x4760ed, _0xa4d06b) {
    const _0x39e728 = document['getElementById']('role-list-ui');
    const _0x18a046 = document['getElementById']('role-list-items');
    if (!_0x39e728 || !_0x18a046)
        return;
    if (!_0xa4d06b || _0xa4d06b === 'off' || !_0x4760ed || _0x4760ed['length'] === 0x0) {
        _0x39e728['style']['display'] = 'none';
        return;
    }
    const _0x42bab5 = _0xa4d06b + '|' + JSON['stringify'](_0x4760ed);
    if (_0x42bab5 === _0x2b4bfd)
        return;
    _0x2b4bfd = _0x42bab5;
    const _0x378741 = document['getElementById']('role-tooltip');
    if (_0x378741) {
        _0x378741['style']['visibility'] = 'hidden';
        _0x378741['style']['opacity'] = '0';
    }
    _0x39e728['style']['display'] = 'flex';
    _0x18a046['innerHTML'] = '';
    _0x4760ed['forEach'](_0x1ca518 => {
        const _0x2a1481 = document['createElement']('div');
        _0x2a1481['className'] = 'role-list-entry';
        const _0x1e5774 = _0x1ca518['name']['includes']('Mafia') || _0x1ca518['name'] === 'Skinwalker';
        _0x2a1481['classList']['add'](_0x1e5774 ? 'mafia' : 'town');
        if (_0xa4d06b === 'precise' && _0x1ca518['isDead']) {
            _0x2a1481['classList']['remove']('town', 'mafia');
            _0x2a1481['classList']['add']('dead');
            _0x2a1481['innerHTML'] = '<span>' + _0x1ca518['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x575306 = _0x1ca518['count'] !== undefined && _0x1ca518['count'] !== null ? _0x1ca518['count'] + 'x\x20' : '';
            _0x2a1481['innerHTML'] = '<span>' + _0x575306 + _0x1ca518['name'] + '</span>';
        }
        if (_0xa4d06b === 'subalignments' && _0xa72fa7[_0x1ca518['name']]) {
            _0x2a1481['style']['cursor'] = 'pointer';
            _0x2a1481['addEventListener']('mouseenter', () => {
                const _0x43b64b = document['getElementById']('role-tooltip');
                if (!_0x43b64b)
                    return;
                const _0x2b4b89 = _0xa72fa7[_0x1ca518['name']]['join'](',\x20');
                _0x43b64b['innerHTML'] = '';
                const _0x5df8a9 = document['createElement']('span');
                _0x5df8a9['style']['color'] = '#ffcc00';
                _0x5df8a9['textContent'] = _0x1ca518['name'];
                _0x43b64b['appendChild'](_0x5df8a9);
                _0x43b64b['appendChild'](document['createElement']('br'));
                _0x43b64b['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x2b4b89));
                const _0x5db1fb = _0x2a1481['getBoundingClientRect']();
                _0x43b64b['style']['left'] = _0x5db1fb['left'] - 0xeb + 'px';
                _0x43b64b['style']['top'] = _0x5db1fb['top'] + 'px';
                _0x43b64b['style']['display'] = 'block';
                _0x43b64b['style']['visibility'] = 'visible';
                _0x43b64b['style']['opacity'] = '1';
            });
            _0x2a1481['addEventListener']('mouseleave', () => {
                const _0x4785b5 = document['getElementById']('role-tooltip');
                if (_0x4785b5) {
                    _0x4785b5['style']['display'] = 'none';
                    _0x4785b5['style']['visibility'] = 'hidden';
                    _0x4785b5['style']['opacity'] = '0';
                }
            });
        }
        _0x18a046['appendChild'](_0x2a1481);
    });
}
let _0x27e598 = null;
let _0x1fd455 = null;
const _0x1ee072 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x5cd5d1 = 'Player???';
let _0x5b920c = ![];
let _0xa47454 = {};
let _0xf1d4e = null;
let _0x326fcc = 0x0;
let _0x26c1db = 0x0;
let _0x761e50 = new Set();
let _0x5f3c32 = ![];
let _0x6e41a1 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x44d5ad = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x174ab1 = ![];
let _0xfbc83f = null;
let _0x331e5b = 0x0;
let _0x44e3dd = 0x0;
let _0xf57ffd = ![];
let _0x308c02 = ![];
let _0xaf9956 = 0x0;
let _0x3dde08 = null;
let _0x432e88 = ![];
const _0x11a657 = ((() => {
    const _0x4a7534 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3'
    };
    let _0x3a09de = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x3f6601 = 0x320;
    const _0x392b70 = {};
    const _0x116eba = {};
    let _0x4fb828 = null;
    let _0x1c749c = _0x3a09de === 0x0;
    let _0x1a1709 = ![];
    for (const [_0x31270d, _0x22bb53] of Object['entries'](_0x4a7534)) {
        const _0x597cb1 = new Audio(_0x22bb53);
        _0x597cb1['loop'] = !![];
        _0x597cb1['volume'] = 0x0;
        _0x597cb1['preload'] = 'auto';
        _0x392b70[_0x31270d] = _0x597cb1;
        _0x116eba[_0x31270d] = null;
    }
    const _0x1e8b34 = _0x1c40b2 => Math['min'](0x1, Math['max'](0x0, _0x1c40b2));
    function _0x998aed(_0x411b0a) {
        if (_0x116eba[_0x411b0a] !== null) {
            cancelAnimationFrame(_0x116eba[_0x411b0a]);
            _0x116eba[_0x411b0a] = null;
        }
    }
    function _0x175472(_0x4a4ff8, _0x538020, _0x16f809, _0x243929, _0x8749de) {
        _0x998aed(_0x4a4ff8);
        const _0x875c3a = _0x392b70[_0x4a4ff8];
        const _0x5a47da = performance['now']();
        const _0x40a9d7 = _0x282ee5 => {
            const _0x1bf82c = _0x1e8b34((_0x282ee5 - _0x5a47da) / _0x243929);
            const _0x18cc53 = _0x1e8b34(_0x538020 + (_0x16f809 - _0x538020) * _0x1bf82c);
            _0x875c3a['volume'] = _0x1c749c ? 0x0 : _0x18cc53;
            if (_0x1bf82c < 0x1) {
                _0x116eba[_0x4a4ff8] = requestAnimationFrame(_0x40a9d7);
            } else {
                _0x116eba[_0x4a4ff8] = null;
                _0x875c3a['volume'] = _0x1c749c ? 0x0 : _0x1e8b34(_0x16f809);
                if (_0x8749de)
                    _0x8749de();
            }
        };
        _0x116eba[_0x4a4ff8] = requestAnimationFrame(_0x40a9d7);
    }
    function _0x53f6fc(_0x3e1a8d) {
        const _0x6b6ba3 = _0x3e1a8d['play']();
        if (_0x6b6ba3 && _0x6b6ba3['catch']) {
            _0x6b6ba3['catch'](() => {
                if (!_0x1a1709) {
                    const _0x5809d6 = () => {
                        _0x1a1709 = !![];
                        _0x3e1a8d['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x5809d6);
                        document['removeEventListener']('keydown', _0x5809d6);
                        document['removeEventListener']('touchstart', _0x5809d6);
                    };
                    document['addEventListener']('click', _0x5809d6, { 'once': !![] });
                    document['addEventListener']('keydown', _0x5809d6, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x5809d6, { 'once': !![] });
                }
            });
        }
    }
    function _0x50dd01(_0x2a2659) {
        if (!_0x4a7534[_0x2a2659])
            return;
        if (_0x4fb828 === _0x2a2659)
            return;
        const _0x208658 = _0x4fb828;
        _0x4fb828 = _0x2a2659;
        const _0xb1d815 = _0x392b70[_0x2a2659];
        _0x998aed(_0x2a2659);
        _0xb1d815['currentTime'] = 0x0;
        _0xb1d815['volume'] = 0x0;
        _0x53f6fc(_0xb1d815);
        _0x175472(_0x2a2659, 0x0, _0x3a09de, _0x3f6601);
        if (_0x208658 && _0x392b70[_0x208658]) {
            const _0x5f3538 = _0x208658;
            const _0x133503 = _0x392b70[_0x5f3538];
            const _0xf5d014 = _0x1e8b34(_0x133503['volume']);
            _0x175472(_0x5f3538, _0xf5d014, 0x0, _0x3f6601, () => {
                _0x133503['pause']();
                _0x133503['currentTime'] = 0x0;
            });
        }
    }
    function _0x2509c8(_0x1178ad) {
        _0x3a09de = _0x1e8b34(_0x1178ad);
        localStorage['setItem']('musicVolume', String(_0x3a09de));
        if (!_0x1c749c && _0x4fb828 && _0x116eba[_0x4fb828] === null) {
            _0x392b70[_0x4fb828]['volume'] = _0x3a09de;
        }
    }
    function _0x4ee3ae() {
        return _0x3a09de;
    }
    function _0x7fe1d(_0x1fcb0c) {
        _0x1c749c = _0x1fcb0c;
        for (const _0x2164f9 of Object['keys'](_0x392b70)) {
            if (_0x116eba[_0x2164f9] === null) {
                _0x392b70[_0x2164f9]['volume'] = _0x1fcb0c || _0x2164f9 !== _0x4fb828 ? 0x0 : _0x3a09de;
            }
        }
    }
    function _0x8b4ca2() {
        return _0x1c749c;
    }
    function _0x4db79c(_0x5293bc) {
        if (_0x5293bc === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x5293bc === 'DAY_VOTE')
            return 'voting';
        return 'wait';
    }
    function _0x52110c(_0x4828fa) {
        _0x50dd01(_0x4db79c(_0x4828fa));
    }
    function _0x5bee0e(_0x40fc5e) {
        _0x50dd01(_0x40fc5e);
    }
    return {
        'play': _0x50dd01,
        'onStateChange': _0x52110c,
        'onSoundEvent': _0x5bee0e,
        'setVolume': _0x2509c8,
        'getVolume': _0x4ee3ae,
        'setMuted': _0x7fe1d,
        'isMuted': _0x8b4ca2
    };
})());
const _0x7dd38e = ((() => {
    const _0x6adf8c = 0x258;
    const _0xc32e00 = 0xb4;
    const _0x374dc8 = 0x708;
    const _0x533fc0 = 0x140;
    const _0x574699 = 0.18;
    const _0x3126ad = 0.95;
    const _0x416509 = new Audio('audio/heartbeat.mp3');
    _0x416509['loop'] = ![];
    _0x416509['preload'] = 'auto';
    _0x416509['volume'] = 0x0;
    let _0x373f04 = 0x0;
    let _0x5b7354 = Infinity;
    function _0x2c2af8(_0x26fadd, _0x5f0cfe, _0x30a5d6) {
        return Math['min'](_0x30a5d6, Math['max'](_0x5f0cfe, _0x26fadd));
    }
    function _0x124184(_0x1308b6, _0x40fe5f, _0x32c344) {
        return _0x1308b6 + (_0x40fe5f - _0x1308b6) * _0x32c344;
    }
    function _0x470286(_0x30cf69) {
        if (_0x1c8d04['GAME_STATE'] !== 'NIGHT' || _0x490533['isDead'] || _0xf1d4e === 'Skinwalker') {
            _0x5b7354 = Infinity;
            return;
        }
        const _0x3c84f5 = _0x490533['x'] + 22.5;
        const _0x56b8d9 = _0x490533['y'] + 22.5;
        let _0x3b48ed = Infinity;
        for (const _0x55c9d6 in _0xa47454) {
            const _0x4b7766 = _0xa47454[_0x55c9d6];
            if (!_0x4b7766['isDark'] || _0x4b7766['isDead'])
                continue;
            const _0x4f0e15 = _0x4b7766['renderX'] + 22.5 - _0x3c84f5;
            const _0x5ce249 = _0x4b7766['renderY'] + 22.5 - _0x56b8d9;
            const _0x3cdfa0 = Math['sqrt'](_0x4f0e15 * _0x4f0e15 + _0x5ce249 * _0x5ce249);
            if (_0x3cdfa0 < _0x3b48ed)
                _0x3b48ed = _0x3cdfa0;
        }
        _0x5b7354 = _0x3b48ed;
        if (_0x3b48ed > _0x6adf8c)
            return;
        const _0x4b786f = 0x1 - _0x2c2af8((_0x3b48ed - _0xc32e00) / (_0x6adf8c - _0xc32e00), 0x0, 0x1);
        const _0x81ce8f = _0x124184(_0x374dc8, _0x533fc0, _0x4b786f);
        const _0x1b68c8 = _0x124184(_0x574699, _0x3126ad, _0x4b786f);
        if (_0x30cf69 >= _0x373f04) {
            _0x416509['currentTime'] = 0x0;
            _0x416509['volume'] = _0x11a657['isMuted']() ? 0x0 : _0x2c2af8(_0x1b68c8 * _0x11a657['getVolume']() / 0.7, 0x0, 0x1);
            _0x416509['play']()['catch'](() => {
            });
            _0x373f04 = _0x30cf69 + _0x81ce8f;
        }
    }
    return { 'tick': _0x470286 };
})());
function _0x113a3c() {
    const _0x2df592 = document['getElementById']('mob-ability-btn');
    if (!_0x2df592)
        return;
    const _0x1f348e = _0x1c8d04['GAME_STATE'] === 'NIGHT' && !_0x490533['isDead'];
    const _0x90eb0b = _0xf1d4e === 'Mayor' && !_0x761e50['has'](_0x1fd455) && !_0x490533['isDead'];
    if (_0x1f348e || _0x90eb0b) {
        _0x2df592['style']['display'] = 'flex';
    } else {
        _0x2df592['style']['display'] = 'none';
    }
}
function _0x35014f() {
    const _0x5a3377 = document['getElementById']('mobile-joystick-zone');
    const _0x1cf9fa = document['getElementById']('mobile-top-bar');
    const _0x1de2b7 = document['getElementById']('mobile-action-bar');
    if (!_0x5a3377 || !_0x1cf9fa || !_0x1de2b7)
        return;
    if (!_0x1e068e && _0x44d5ad) {
        _0x5a3377['style']['display'] = 'flex';
        _0x1cf9fa['style']['display'] = 'flex';
        _0x1de2b7['style']['display'] = 'flex';
        _0x113a3c();
    } else {
        _0x5a3377['style']['display'] = 'none';
        _0x1cf9fa['style']['display'] = 'none';
        _0x1de2b7['style']['display'] = 'none';
    }
}
const _0x3a3595 = document['getElementById']('gameCanvas');
const _0x1f5fd2 = _0x3a3595['getContext']('2d', { 'alpha': ![] });
const _0x1c1991 = 0x500;
const _0x44303f = 0x2d0;
const _0x1c8d04 = {
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
        'width': _0x1c1991,
        'height': _0x44303f
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
const _0x490533 = {
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
const _0x4462a4 = new Image();
const _0x3b2929 = new Image();
const _0x590ead = new Image();
const _0x266458 = new Image();
_0x266458['src'] = 'assets/mayor\x20cosmetic.png';
const _0x5ae6a6 = [
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
const _0x43b49b = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x42b4cf = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x42b4cf === 'body1.png' || _0x42b4cf === 'body1')
    _0x42b4cf = 'body01.png';
if (!_0x42b4cf['endsWith']('.png'))
    _0x42b4cf += '.png';
let _0x14fc19 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x14fc19['endsWith']('.png'))
    _0x14fc19 += '.png';
let _0x1e068e = !![];
let _0x3043dd = null;
let _0x1f3515 = null;
let _0x401154 = 0x3c;
let _0x36785f = 0x2d;
const _0x1fd694 = {};
function _0xee1ddb(_0xe6d457) {
    if (!_0x1fd694[_0xe6d457]) {
        const _0x1d12b6 = new Image();
        _0x1d12b6['src'] = _0xe6d457;
        _0x1fd694[_0xe6d457] = _0x1d12b6;
    } else if (!_0x1fd694[_0xe6d457]['complete'] || _0x1fd694[_0xe6d457]['naturalWidth'] === 0x0) {
        const _0x3b6b8f = new Image();
        _0x3b6b8f['src'] = _0xe6d457 + '?v=' + Date['now']();
        _0x3b6b8f['src'] = _0xe6d457;
        _0x1fd694[_0xe6d457] = _0x3b6b8f;
    }
    return _0x1fd694[_0xe6d457];
}
function _0x2a12bd(_0x467fe3, _0x215171, _0x81b589, _0x376033, _0x1b4360) {
    try {
        const _0x406dd7 = 'assets/' + (_0x215171 || 'body01.png');
        const _0x5aef96 = _0xee1ddb(_0x406dd7);
        if (_0x5aef96['complete'] && _0x5aef96['naturalWidth'] > 0x0) {
            _0x467fe3['drawImage'](_0x5aef96, -_0x376033 / 0x2, -_0x1b4360 / 0x2, _0x376033, _0x1b4360);
        }
        if (_0x81b589 === null || _0x81b589 === undefined)
            return;
        const _0x3cdaff = 'assets/' + _0x81b589;
        const _0x517412 = _0xee1ddb(_0x3cdaff);
        if (_0x517412['complete'] && _0x517412['naturalWidth'] > 0x0) {
            _0x467fe3['drawImage'](_0x517412, -_0x376033 / 0x2, -_0x1b4360 / 0x2, _0x376033, _0x1b4360);
        }
    } catch (_0x56b070) {
    }
}
function _0x4afc9a() {
    const _0x365620 = document['getElementById']('body-skin-grid');
    const _0x3bd7f4 = document['getElementById']('eyes-skin-grid');
    if (!_0x365620 || !_0x3bd7f4)
        return;
    _0x365620['innerHTML'] = '';
    _0x5ae6a6['forEach'](_0x8b61e1 => {
        const _0x1ae23a = document['createElement']('button');
        _0x1ae23a['className'] = 'skin-btn' + (_0x8b61e1 === _0x42b4cf ? '\x20selected' : '');
        const _0x5b0538 = document['createElement']('img');
        _0x5b0538['src'] = 'assets/' + _0x8b61e1;
        _0x1ae23a['appendChild'](_0x5b0538);
        _0x1ae23a['onclick'] = () => {
            _0x42b4cf = _0x8b61e1;
            localStorage['setItem']('selectedBody', _0x8b61e1);
            _0x365620['querySelectorAll']('.skin-btn')['forEach'](_0x4d8ab2 => _0x4d8ab2['classList']['remove']('selected'));
            _0x1ae23a['classList']['add']('selected');
        };
        _0x365620['appendChild'](_0x1ae23a);
    });
    _0x3bd7f4['innerHTML'] = '';
    _0x43b49b['forEach'](_0x48cf6f => {
        const _0x350055 = document['createElement']('button');
        _0x350055['className'] = 'skin-btn' + (_0x48cf6f === _0x14fc19 ? '\x20selected' : '');
        const _0x2ae54c = document['createElement']('img');
        _0x2ae54c['src'] = 'assets/' + _0x48cf6f;
        _0x350055['appendChild'](_0x2ae54c);
        _0x350055['onclick'] = () => {
            _0x14fc19 = _0x48cf6f;
            localStorage['setItem']('selectedEyes', _0x48cf6f);
            _0x3bd7f4['querySelectorAll']('.skin-btn')['forEach'](_0x33e1cd => _0x33e1cd['classList']['remove']('selected'));
            _0x350055['classList']['add']('selected');
        };
        _0x3bd7f4['appendChild'](_0x350055);
    });
}
function _0x1499a7(_0xd83c11) {
    if (!_0x1c8d04['MAP']['columns'] || !_0x1c8d04['CAMERA']['width'])
        return;
    const _0x471094 = Math['max'](0x0, _0x1c8d04['MAP']['columns'] * _0x1c8d04['MAP']['tileSize'] - _0x1c8d04['CAMERA']['width']);
    const _0x1315d0 = Math['max'](0x0, _0x1c8d04['MAP']['rows'] * _0x1c8d04['MAP']['tileSize'] - _0x1c8d04['CAMERA']['height']);
    if (_0x3043dd === null) {
        _0x3043dd = _0x471094 / 0x2;
        _0x1f3515 = _0x1315d0 / 0x2;
    }
    _0x3043dd += _0x401154 * _0xd83c11;
    _0x1f3515 += _0x36785f * _0xd83c11;
    if (_0x3043dd <= 0x0) {
        _0x3043dd = 0x0;
        _0x401154 = Math['abs'](_0x401154);
    } else if (_0x3043dd >= _0x471094) {
        _0x3043dd = _0x471094;
        _0x401154 = -Math['abs'](_0x401154);
    }
    if (_0x1f3515 <= 0x0) {
        _0x1f3515 = 0x0;
        _0x36785f = Math['abs'](_0x36785f);
    } else if (_0x1f3515 >= _0x1315d0) {
        _0x1f3515 = _0x1315d0;
        _0x36785f = -Math['abs'](_0x36785f);
    }
    _0x1c8d04['CAMERA']['x'] = _0x3043dd;
    _0x1c8d04['CAMERA']['y'] = _0x1f3515;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x39e89e = document['getElementById']('play-btn');
    const _0x2d43ec = document['getElementById']('username-input');
    const _0x462a11 = localStorage['getItem']('playerName');
    if (_0x462a11 && _0x2d43ec) {
        _0x2d43ec['value'] = _0x462a11;
    }
    const _0x466f9d = () => {
        _0x11a657['play']('wait');
        document['removeEventListener']('click', _0x466f9d);
        document['removeEventListener']('keydown', _0x466f9d);
        document['removeEventListener']('touchstart', _0x466f9d);
    };
    document['addEventListener']('click', _0x466f9d, { 'once': !![] });
    document['addEventListener']('keydown', _0x466f9d, { 'once': !![] });
    document['addEventListener']('touchstart', _0x466f9d, { 'once': !![] });
    if (_0x39e89e) {
        _0x39e89e['addEventListener']('click', () => {
            const _0x3c61b0 = _0x2d43ec['value'];
            const _0x219b3f = _0x3c61b0['replace'](/<[^>]*>/g, '')['replace'](/[^\x20-\x7E]/g, '')['replace'](/[<>]/g, '')['replace'](/\s+/g, '\x20')['trim']()['substring'](0x0, 0xe);
            _0x5cd5d1 = _0x219b3f || 'Player';
            localStorage['setItem']('playerName', _0x5cd5d1);
            _0x1e068e = ![];
            _0x1c8d04['CAMERA']['x'] = null;
            _0x1c8d04['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x9dc93b = document['getElementById']('controls-hint');
            if (_0x9dc93b && !_0x44d5ad)
                _0x9dc93b['style']['display'] = 'block';
            _0x35014f();
            if (_0x44d5ad) {
                const _0x5905bd = document['getElementById']('leaderboard-list');
                const _0x4db57d = document['getElementById']('leaderboard-toggle');
                if (_0x5905bd) {
                    _0x5905bd['style']['display'] = 'none';
                    if (_0x4db57d)
                        _0x4db57d['style']['transform'] = 'rotate(180deg)';
                }
                const _0x2a2432 = document['getElementById']('role-list-items');
                const _0x4bd4dc = document['getElementById']('role-list-toggle');
                if (_0x2a2432) {
                    _0x2a2432['style']['display'] = 'none';
                    if (_0x4bd4dc)
                        _0x4bd4dc['style']['transform'] = 'rotate(180deg)';
                }
            }
            if (_0x27e598 && _0x27e598['readyState'] === WebSocket['OPEN']) {
                _0x27e598['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x5cd5d1,
                    'token': _0x1ee072,
                    'body': _0x42b4cf,
                    'eyes': _0x14fc19
                }));
            } else if (!_0x27e598 || _0x27e598['readyState'] === WebSocket['CLOSED'] || _0x27e598['readyState'] === WebSocket['CLOSING']) {
                _0x311b2f();
            }
        });
    }
    _0x4afc9a();
    _0x311b2f();
    _0x42d501();
    _0x2f8c87();
    _0x4fe710();
});
function _0x2f8c87() {
    const _0x18fa91 = document['getElementById']('settings-btn');
    const _0x129135 = document['getElementById']('settings-panel');
    const _0x132240 = document['getElementById']('close-settings-btn');
    const _0x102f62 = document['getElementById']('setting-mouse-relative');
    if (_0x102f62) {
        _0x102f62['checked'] = _0x6e41a1;
        _0x102f62['addEventListener']('change', () => {
            _0x6e41a1 = _0x102f62['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x6e41a1 ? 'true' : 'false');
        });
    }
    const _0xe18a73 = document['getElementById']('setting-music-volume');
    const _0x5ec901 = document['getElementById']('setting-music-volume-display');
    function _0x54dbdb(_0x15ca97) {
        const _0xf674d9 = (_0x15ca97['value'] - _0x15ca97['min']) / (_0x15ca97['max'] - _0x15ca97['min']) * 0x64;
        _0x15ca97['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0xf674d9 + '%,\x20#444\x20' + _0xf674d9 + '%)';
    }
    if (_0xe18a73) {
        const _0x4cf5ca = _0x11a657['getVolume']();
        const _0x512c2b = Math['round'](_0x4cf5ca * 0x64);
        _0xe18a73['value'] = _0x512c2b;
        if (_0x5ec901)
            _0x5ec901['textContent'] = _0x512c2b + '%';
        _0x54dbdb(_0xe18a73);
        _0xe18a73['addEventListener']('input', () => {
            const _0x590036 = parseInt(_0xe18a73['value'], 0xa);
            if (_0x5ec901)
                _0x5ec901['textContent'] = _0x590036 + '%';
            _0x54dbdb(_0xe18a73);
            _0x11a657['setVolume'](_0x590036 / 0x64);
            _0x11a657['setMuted'](_0x590036 === 0x0);
        });
    }
    if (_0x18fa91 && _0x129135) {
        _0x18fa91['addEventListener']('click', _0x40b92d => {
            _0x40b92d['stopPropagation']();
            _0x129135['style']['display'] = _0x129135['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x132240 && _0x129135) {
        _0x132240['addEventListener']('click', () => {
            _0x129135['style']['display'] = 'none';
        });
    }
    const _0x54d2a7 = document['getElementById']('mayor-confirm-yes');
    const _0x13b35b = document['getElementById']('mayor-confirm-no');
    const _0x308a34 = document['getElementById']('mayor-confirm-dialog');
    if (_0x54d2a7 && _0x308a34) {
        _0x54d2a7['addEventListener']('click', () => {
            if (_0x27e598 && _0x27e598['readyState'] === WebSocket['OPEN']) {
                _0x27e598['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x308a34['style']['display'] = 'none';
        });
    }
    if (_0x13b35b && _0x308a34) {
        _0x13b35b['addEventListener']('click', () => {
            _0x308a34['style']['display'] = 'none';
        });
    }
    const _0x3794dc = document['getElementById']('close-ability-btn');
    if (_0x3794dc) {
        _0x3794dc['addEventListener']('click', () => {
            const _0x2819da = document['getElementById']('ability-ui');
            if (_0x2819da)
                _0x2819da['style']['display'] = 'none';
        });
    }
}
let _0x8903d2 = '';
function _0xc37b39(_0x41b029) {
    const _0x5dc522 = document['getElementById']('vote-tally-panel');
    const _0x4ac63d = document['getElementById']('vote-tally-list');
    if (!_0x5dc522 || !_0x4ac63d)
        return;
    if (_0x41b029['state'] !== 'DAY_VOTE') {
        _0x5dc522['style']['display'] = 'none';
        _0x8903d2 = '';
        return;
    }
    _0x5dc522['style']['display'] = 'block';
    const _0x2cb988 = {};
    for (const _0x57567b in _0xa47454) {
        if (!_0xa47454[_0x57567b]['isDead'])
            _0x2cb988[_0x57567b] = 0x0;
    }
    if (_0x1fd455 && !_0x490533['isDead'])
        _0x2cb988[_0x1fd455] = 0x0;
    const _0x392922 = _0x41b029['votes'] || {};
    for (const _0x5f1aa6 in _0x392922) {
        const _0x52f674 = _0x392922[_0x5f1aa6];
        const _0x318d3b = _0x41b029['mayorRevealed'] && _0x41b029['mayorRevealed'][_0x5f1aa6] ? 0x2 : 0x1;
        _0x2cb988[_0x52f674] = (_0x2cb988[_0x52f674] || 0x0) + _0x318d3b;
    }
    let _0x1566a0 = 0x0;
    const _0x188568 = _0x41b029['skips'] || {};
    for (const _0x3612d2 in _0x188568) {
        _0x1566a0 += Number(_0x188568[_0x3612d2]) || 0x1;
    }
    const _0x1b1816 = JSON['stringify'](_0x2cb988) + '_' + _0x1566a0 + '_' + _0x490533['isDead'];
    if (_0x1b1816 === _0x8903d2)
        return;
    _0x8903d2 = _0x1b1816;
    _0x4ac63d['innerHTML'] = '';
    for (const _0x25db1d in _0x2cb988) {
        const _0x2e9308 = parseInt(_0x25db1d);
        const _0x45b909 = _0x2e9308 === _0x1fd455 ? _0x5cd5d1 : _0xa47454[_0x25db1d] ? _0xa47454[_0x25db1d]['name'] : 'Player\x20' + _0x25db1d;
        const _0x4186d3 = document['createElement']('div');
        _0x4186d3['className'] = 'vote-tally-entry';
        const _0x7a3160 = document['createElement']('span');
        _0x7a3160['textContent'] = _0x45b909;
        const _0x426205 = document['createElement']('span');
        _0x426205['className'] = 'vote-count';
        _0x426205['textContent'] = _0x2cb988[_0x25db1d] + '\x20vote' + (_0x2cb988[_0x25db1d] === 0x1 ? '' : 's');
        _0x4186d3['appendChild'](_0x7a3160);
        _0x4186d3['appendChild'](_0x426205);
        if (_0x2e9308 !== _0x1fd455 && !_0x490533['isDead']) {
            _0x4186d3['style']['cursor'] = 'pointer';
            _0x4186d3['title'] = 'Vote\x20for\x20' + _0x45b909;
            _0x4186d3['addEventListener']('click', _0x1a3881 => {
                _0x1a3881['stopPropagation']();
                if (_0x27e598 && _0x27e598['readyState'] === WebSocket['OPEN']) {
                    _0x27e598['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x45b909
                    }));
                }
            });
        }
        _0x4ac63d['appendChild'](_0x4186d3);
    }
    const _0x129b9b = document['createElement']('div');
    _0x129b9b['className'] = 'vote-tally-skip';
    _0x129b9b['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x1566a0 + '</span>';
    if (!_0x490533['isDead']) {
        _0x129b9b['style']['cursor'] = 'pointer';
        _0x129b9b['title'] = 'Click\x20to\x20skip\x20vote';
        _0x129b9b['addEventListener']('click', _0x1da225 => {
            _0x1da225['stopPropagation']();
            if (_0x27e598 && _0x27e598['readyState'] === WebSocket['OPEN']) {
                _0x27e598['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x4ac63d['appendChild'](_0x129b9b);
}
let _0x38f405 = null;
let _0x4a8114 = null;
let _0x42333a = null;
function _0x80ee07() {
    if (_0x27e598 && _0x27e598['readyState'] === WebSocket['OPEN']) {
        _0x27e598['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x38f405,
            'abilityTarget': _0x4a8114,
            'killTarget': _0x42333a
        }));
    }
}
function _0x1e8254() {
    const _0x2ae5dd = document['getElementById']('ability-ui-body');
    if (!_0x2ae5dd)
        return;
    _0x2ae5dd['innerHTML'] = '';
    if (_0xf1d4e === 'Celebrity' || _0xf1d4e === 'Mayor') {
        const _0x4f3b72 = document['createElement']('div');
        _0x4f3b72['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x4f3b72['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x2ae5dd['appendChild'](_0x4f3b72);
        return;
    }
    if (_0xf1d4e === 'Skinwalker') {
        const _0xedfd81 = document['createElement']('div');
        _0xedfd81['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0xedfd81['innerText'] = 'Transform\x20into:';
        _0x2ae5dd['appendChild'](_0xedfd81);
        const _0x39e0d2 = document['createElement']('div');
        _0x39e0d2['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x49c56c = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x6f65b3 = _0x21a2dd => {
            if (!_0x1c8d04['ROLE_LIST_RAW'] || _0x1c8d04['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x1c8d04['ROLE_LIST_RAW']['some'](_0x56c13a => {
                if (_0x56c13a['name'] === _0x21a2dd)
                    return !_0x56c13a['isDead'];
                if (_0xa72fa7[_0x56c13a['name']] && _0xa72fa7[_0x56c13a['name']]['includes'](_0x21a2dd))
                    return !![];
                return ![];
            });
        };
        const _0x7a58c3 = [
            'None',
            ..._0x49c56c['filter'](_0x6f65b3)
        ];
        _0x7a58c3['forEach'](_0xacb588 => {
            const _0x4424fd = document['createElement']('button');
            _0x4424fd['className'] = 'layer-btn';
            _0x4424fd['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x4424fd['innerText'] = _0xacb588;
            const _0x1be3ea = _0xacb588 === 'None' && !_0x38f405 || _0x38f405 === _0xacb588;
            if (_0x1be3ea)
                _0x4424fd['classList']['add']('active');
            _0x4424fd['onclick'] = () => {
                _0x38f405 = _0xacb588 === 'None' ? null : _0xacb588;
                _0x80ee07();
                _0x1e8254();
            };
            _0x39e0d2['appendChild'](_0x4424fd);
        });
        _0x2ae5dd['appendChild'](_0x39e0d2);
        if (_0x6f65b3('Vigilante')) {
            const _0x26849f = document['createElement']('div');
            _0x26849f['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x26849f['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x2ae5dd['appendChild'](_0x26849f);
        }
        if (_0x38f405 === 'Vigilante') {
            const _0xf54338 = document['createElement']('div');
            _0xf54338['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0xf54338['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x2ae5dd['appendChild'](_0xf54338);
        } else if (_0x38f405 && _0x38f405 !== 'Celebrity') {
            const _0x4dcee4 = document['createElement']('div');
            _0x4dcee4['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x4dcee4['innerText'] = 'Use\x20' + _0x38f405 + '\x20ability\x20on:';
            _0x2ae5dd['appendChild'](_0x4dcee4);
            const _0x47d947 = document['createElement']('div');
            _0x47d947['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x1902eb = document['createElement']('button');
            _0x1902eb['className'] = 'layer-btn';
            _0x1902eb['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x1902eb['innerText'] = 'No\x20one';
            if (!_0x4a8114)
                _0x1902eb['classList']['add']('active');
            _0x1902eb['onclick'] = () => {
                _0x4a8114 = null;
                _0x80ee07();
                _0x1e8254();
            };
            _0x47d947['appendChild'](_0x1902eb);
            for (const _0x2e6ccd in _0xa47454) {
                const _0x2fa7ca = _0xa47454[_0x2e6ccd];
                if (_0x2fa7ca['isDead'])
                    continue;
                const _0xb17b36 = document['createElement']('button');
                _0xb17b36['className'] = 'layer-btn';
                _0xb17b36['innerText'] = _0x2fa7ca['name'];
                if (_0x4a8114 === parseInt(_0x2e6ccd))
                    _0xb17b36['classList']['add']('active');
                _0xb17b36['onclick'] = () => {
                    _0x4a8114 = parseInt(_0x2e6ccd);
                    _0x80ee07();
                    _0x1e8254();
                };
                _0x47d947['appendChild'](_0xb17b36);
            }
            _0x2ae5dd['appendChild'](_0x47d947);
        }
        const _0x4d1541 = document['createElement']('div');
        _0x4d1541['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x4d1541['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x2ae5dd['appendChild'](_0x4d1541);
        const _0x2da784 = document['createElement']('div');
        _0x2da784['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x5a81bf = document['createElement']('button');
        _0x5a81bf['className'] = 'layer-btn';
        _0x5a81bf['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x5a81bf['innerText'] = 'No\x20one';
        if (!_0x42333a && !_0x1c8d04['CURRENT_TARGET'])
            _0x5a81bf['classList']['add']('active');
        _0x5a81bf['onclick'] = () => {
            _0x42333a = null;
            _0x1c8d04['CURRENT_TARGET'] = null;
            _0x80ee07();
            _0x1e8254();
        };
        _0x2da784['appendChild'](_0x5a81bf);
        for (const _0x381b29 in _0xa47454) {
            const _0x37a6db = _0xa47454[_0x381b29];
            if (_0x37a6db['isDead'])
                continue;
            const _0x5c95f2 = document['createElement']('button');
            _0x5c95f2['className'] = 'layer-btn';
            _0x5c95f2['innerText'] = _0x37a6db['name'];
            if (_0x42333a === parseInt(_0x381b29) || _0x1c8d04['CURRENT_TARGET'] === parseInt(_0x381b29))
                _0x5c95f2['classList']['add']('active');
            _0x5c95f2['onclick'] = () => {
                _0x42333a = parseInt(_0x381b29);
                _0x1c8d04['CURRENT_TARGET'] = parseInt(_0x381b29);
                _0x80ee07();
                _0x1e8254();
            };
            _0x2da784['appendChild'](_0x5c95f2);
        }
        _0x2ae5dd['appendChild'](_0x2da784);
        return;
    }
    let _0xf0f38f = '';
    let _0x29751c = ![];
    if (_0xf1d4e === 'Doctor') {
        _0xf0f38f = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x29751c = !![];
    } else if (_0xf1d4e === 'Investigator') {
        _0xf0f38f = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0xf1d4e === 'Tracker') {
        _0xf0f38f = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0xf1d4e === 'Archer') {
        _0xf0f38f = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0xf1d4e === 'Escort') {
        _0xf0f38f = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0xf1d4e === 'Vigilante') {
        _0xf0f38f = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x32ef4d = document['createElement']('div');
    _0x32ef4d['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x32ef4d['innerText'] = _0xf0f38f;
    _0x2ae5dd['appendChild'](_0x32ef4d);
    const _0x5bdf92 = document['createElement']('div');
    _0x5bdf92['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x19addd = document['createElement']('button');
    _0x19addd['className'] = 'layer-btn';
    _0x19addd['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x19addd['innerText'] = 'No\x20one';
    if (_0x1c8d04['CURRENT_TARGET'] === null)
        _0x19addd['classList']['add']('active');
    _0x19addd['onclick'] = () => {
        _0x1c8d04['CURRENT_TARGET'] = null;
        if (_0x27e598 && _0x27e598['readyState'] === WebSocket['OPEN']) {
            _0x27e598['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x1e8254();
    };
    _0x5bdf92['appendChild'](_0x19addd);
    for (const _0x4411e0 in _0xa47454) {
        const _0x3c8c30 = _0xa47454[_0x4411e0];
        if (_0x3c8c30['isDead'])
            continue;
        const _0x5c386d = document['createElement']('button');
        _0x5c386d['className'] = 'layer-btn';
        _0x5c386d['innerText'] = _0x3c8c30['name'];
        if (_0x1c8d04['CURRENT_TARGET'] === parseInt(_0x4411e0))
            _0x5c386d['classList']['add']('active');
        _0x5c386d['onclick'] = () => {
            _0x1c8d04['CURRENT_TARGET'] = parseInt(_0x4411e0);
            if (_0x27e598 && _0x27e598['readyState'] === WebSocket['OPEN']) {
                _0x27e598['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x4411e0)
                }));
            }
            _0x1e8254();
        };
        _0x5bdf92['appendChild'](_0x5c386d);
    }
    if (_0x29751c && !_0x490533['isDead']) {
        const _0x1b7adb = document['createElement']('button');
        _0x1b7adb['className'] = 'layer-btn';
        _0x1b7adb['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x1b7adb['innerText'] = _0x5cd5d1 + '\x20(Self)';
        if (_0x1c8d04['CURRENT_TARGET'] === _0x1fd455)
            _0x1b7adb['classList']['add']('active');
        _0x1b7adb['onclick'] = () => {
            _0x1c8d04['CURRENT_TARGET'] = _0x1fd455;
            if (_0x27e598 && _0x27e598['readyState'] === WebSocket['OPEN']) {
                _0x27e598['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x1fd455
                }));
            }
            _0x1e8254();
        };
        _0x5bdf92['appendChild'](_0x1b7adb);
    }
    _0x2ae5dd['appendChild'](_0x5bdf92);
}
function _0x311b2f() {
    if (_0x27e598 && (_0x27e598['readyState'] === WebSocket['OPEN'] || _0x27e598['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x57a668 = new URLSearchParams();
    if (_0x1ee072)
        _0x57a668['set']('token', _0x1ee072);
    _0x57a668['set']('ngrok-skip-browser-warning', 'true');
    const _0x363464 = 'wss://relating-worker-pipeline-enclosure.trycloudflare.com';
    const _0x358d5d = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x363464;
    const _0x52dfa0 = _0x358d5d + '/?' + _0x57a668['toString']();
    _0x27e598 = new WebSocket(_0x52dfa0);
    _0x27e598['onopen'] = function () {
        if (!_0x1e068e && this['readyState'] === WebSocket['OPEN']) {
            this['send'](JSON['stringify']({
                'type': 'join',
                'name': _0x5cd5d1,
                'token': _0x1ee072,
                'body': _0x42b4cf,
                'eyes': _0x14fc19
            }));
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x27e598 && _0x27e598['readyState'] === WebSocket['OPEN']) {
            _0x27e598['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x27e598['onclose'] = _0x29d2c1 => {
        if (_0x29d2c1['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x29d2c1['code'] === 0xfa2 || _0x29d2c1['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x2e41df = document['getElementById']('disconnect-overlay');
        if (!_0x2e41df) {
            _0x2e41df = document['createElement']('div');
            _0x2e41df['id'] = 'disconnect-overlay';
            _0x2e41df['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x2e41df['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x2e41df);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x27e598['onmessage'] = _0x5bc798 => {
        const _0x5f466a = JSON['parse'](_0x5bc798['data']);
        if (_0x5f466a['type'] === 'map_data') {
            _0x1c8d04['MAP']['tileSize'] = _0x5f466a['map']['tileSize'];
            _0x1c8d04['MAP']['columns'] = _0x5f466a['map']['columns'];
            _0x1c8d04['MAP']['rows'] = _0x5f466a['map']['rows'];
            _0x1c8d04['MAP']['layers'] = _0x5f466a['map']['layers'];
            if (_0x5f466a['map']['doors']) {
                _0x1c8d04['MAP']['doors'] = _0x5f466a['map']['doors'];
                const _0x2a8954 = _0x1c8d04['MAP']['layers']['find'](_0x48bd8b => _0x48bd8b['name'] === 'floor2');
                if (_0x2a8954) {
                    for (const _0x69d04e in _0x1c8d04['MAP']['doors']) {
                        _0x2a8954['data'][parseInt(_0x69d04e)] = 0x2;
                    }
                }
            }
            if (_0x5f466a['entities'])
                _0x1c8d04['ENTITIES'] = _0x5f466a['entities'];
            _0xc9a40e();
            _0x1c8d04['SYSTEM']['isReady'] = !![];
            _0xbe1c28();
            if (!_0x1c8d04['SYSTEM']['_gameLoopRunning']) {
                _0x1c8d04['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x1899f2);
            }
            return;
        }
        if (_0x5f466a['type'] === 'init') {
            _0x1fd455 = _0x5f466a['id'];
            _0x1e068e = ![];
            _0x35014f();
            if (_0x44d5ad) {
                const _0x127bb9 = document['getElementById']('leaderboard-list');
                const _0x5c6f4d = document['getElementById']('leaderboard-toggle');
                if (_0x127bb9) {
                    _0x127bb9['style']['display'] = 'none';
                    if (_0x5c6f4d)
                        _0x5c6f4d['style']['transform'] = 'rotate(180deg)';
                }
                const _0x3f75b5 = document['getElementById']('role-list-items');
                const _0xb0f064 = document['getElementById']('role-list-toggle');
                if (_0x3f75b5) {
                    _0x3f75b5['style']['display'] = 'none';
                    if (_0xb0f064)
                        _0xb0f064['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x5b920c = _0x5f466a['isOwner'] || ![];
            _0x5cd5d1 = _0x5f466a['name'] || _0x5cd5d1;
            _0x1c8d04['MAP']['tileSize'] = _0x5f466a['map']['tileSize'];
            _0x1c8d04['MAP']['columns'] = _0x5f466a['map']['columns'];
            _0x1c8d04['MAP']['rows'] = _0x5f466a['map']['rows'];
            _0x1c8d04['MAP']['layers'] = _0x5f466a['map']['layers'];
            if (_0x5f466a['map']['doors']) {
                _0x1c8d04['MAP']['doors'] = _0x5f466a['map']['doors'];
                const _0x36037f = _0x1c8d04['MAP']['layers']['find'](_0x3baa3b => _0x3baa3b['name'] === 'floor2');
                if (_0x36037f) {
                    for (const _0x3275ba in _0x1c8d04['MAP']['doors']) {
                        _0x36037f['data'][parseInt(_0x3275ba)] = 0x2;
                    }
                }
            }
            if (_0x5f466a['entities'])
                _0x1c8d04['ENTITIES'] = _0x5f466a['entities'];
            _0xc9a40e();
            _0x490533['x'] = _0x1c8d04['MAP']['columns'] * _0x1c8d04['MAP']['tileSize'] / 0x2;
            _0x490533['y'] = _0x1c8d04['MAP']['rows'] * _0x1c8d04['MAP']['tileSize'] / 0x2;
            _0x1c8d04['CAMERA']['x'] = _0x490533['x'] + _0x490533['width'] / 0x2 - _0x1c8d04['CAMERA']['width'] / 0x2;
            _0x1c8d04['CAMERA']['y'] = _0x490533['y'] + _0x490533['height'] / 0x2 - _0x1c8d04['CAMERA']['height'] / 0x2;
            if (_0x5b920c) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x1b7f62();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x1c8d04['SYSTEM']['lastTime'] = performance['now']();
            _0x1c8d04['SYSTEM']['isReady'] = !![];
            _0x41d3c7();
            if (!_0x1c8d04['SYSTEM']['_gameLoopRunning']) {
                _0x1c8d04['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x1899f2);
            }
            return;
        } else if (_0x5f466a['type'] === 'state') {
            const _0x565004 = {};
            for (const _0x3dc01d in _0x5f466a['players']) {
                if (parseInt(_0x3dc01d) === _0x1fd455)
                    continue;
                const _0x3b9c10 = _0x5f466a['players'][_0x3dc01d];
                const _0x2977d2 = _0xa47454[_0x3dc01d];
                if (_0x2977d2) {
                    const _0x1942b2 = _0x3b9c10['x'] - _0x2977d2['renderX'];
                    const _0x2aac86 = _0x3b9c10['y'] - _0x2977d2['renderY'];
                    const _0x4f75b7 = _0x1942b2 * _0x1942b2 + _0x2aac86 * _0x2aac86 > 0x78 * 0x78;
                    Object['assign'](_0x2977d2, _0x3b9c10);
                    if (_0x4f75b7) {
                        _0x2977d2['renderX'] = _0x3b9c10['x'];
                        _0x2977d2['renderY'] = _0x3b9c10['y'];
                    }
                    _0x565004[_0x3dc01d] = _0x2977d2;
                } else {
                    _0x565004[_0x3dc01d] = {
                        ..._0x3b9c10,
                        'renderX': _0x3b9c10['x'],
                        'renderY': _0x3b9c10['y'],
                        'renderAngle': _0x3b9c10['angle'] || 0x0
                    };
                }
            }
            _0xa47454 = _0x565004;
            if (_0x5f466a['players'][_0x1fd455]) {
                const _0x1a1696 = _0x5f466a['players'][_0x1fd455];
                _0x490533['chats'] = _0x1a1696['chats'] || [];
                _0x490533['isDead'] = _0x1a1696['isDead'];
                if (_0x1a1696['name'])
                    _0x5cd5d1 = _0x1a1696['name'];
                _0x41d3c7();
                const _0x5e5397 = Math['hypot'](_0x1a1696['x'] - _0x490533['x'], _0x1a1696['y'] - _0x490533['y']);
                if (_0x5e5397 > 0x32) {
                    _0x490533['x'] += (_0x1a1696['x'] - _0x490533['x']) * 0.35;
                    _0x490533['y'] += (_0x1a1696['y'] - _0x490533['y']) * 0.35;
                }
            }
            if (_0x5f466a['entities'])
                _0x1c8d04['ENTITIES'] = _0x5f466a['entities'];
            if (_0x5f466a['game']) {
                _0x1c8d04['GAME_STATE'] = _0x5f466a['game']['state'];
                _0x1c8d04['NIGHT_ABILITY_OPEN'] = _0x5f466a['game']['nightAbilityOpen'];
                if (_0x5f466a['game']['mayorRevealed']) {
                    for (const _0x2fe24c in _0x5f466a['game']['mayorRevealed']) {
                        _0x761e50['add'](parseInt(_0x2fe24c));
                    }
                }
                if (_0x1c8d04['LAST_STATE'] !== _0x1c8d04['GAME_STATE']) {
                    if (_0x1c8d04['GAME_STATE'] !== 'NIGHT') {
                        _0x1c8d04['CURRENT_TARGET'] = null;
                        _0x38f405 = null;
                        _0x4a8114 = null;
                        _0x42333a = null;
                        const _0x2dcbdd = document['getElementById']('ability-ui');
                        if (_0x2dcbdd)
                            _0x2dcbdd['style']['display'] = 'none';
                    }
                    if (_0x1c8d04['GAME_STATE'] === 'NIGHT') {
                        _0x490533['chats'] = [];
                        for (const _0x490ddf in _0xa47454) {
                            _0xa47454[_0x490ddf]['chats'] = [];
                        }
                    }
                    _0x1c8d04['LAST_STATE'] = _0x1c8d04['GAME_STATE'];
                    _0x113a3c();
                    _0x11a657['onStateChange'](_0x1c8d04['GAME_STATE'], _0x5f466a['game']['nightAbilityOpen']);
                }
                const _0x276467 = document['getElementById']('phase-ui');
                if (_0x276467) {
                    _0x276467['style']['display'] = 'block';
                    let _0x57af4f = _0x5f466a['game']['state']['replace']('_', '\x20');
                    if (_0x5f466a['game']['state'] === 'DAY_DISCUSS') {
                        _0x57af4f = 'DAY\x20' + (_0x5f466a['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x5f466a['game']['timer'] + 's';
                    } else if (_0x5f466a['game']['state'] === 'DAY_VOTE') {
                        _0x57af4f = 'DAY\x20' + (_0x5f466a['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x5f466a['game']['timer'] + 's';
                    } else if (_0x5f466a['game']['state'] === 'NIGHT') {
                        const _0x5edc68 = _0x5f466a['game']['dayCount'] || 0x1;
                        if (_0x5f466a['game']['nightAbilityOpen']) {
                            _0x57af4f = 'NIGHT\x20' + _0x5edc68 + '\x20ABILITY\x20PHASE';
                            const _0x443b98 = _0x5f466a['game']['abilityTimer'] !== undefined ? _0x5f466a['game']['abilityTimer'] : _0x5f466a['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x443b98 + 's';
                        } else {
                            _0x57af4f = 'NIGHT\x20' + _0x5edc68;
                            document['getElementById']('phase-timer')['innerText'] = _0x5f466a['game']['timer'] + 's';
                        }
                    }
                    document['getElementById']('phase-name')['innerText'] = _0x57af4f;
                }
                if (_0x5f466a['game']['state'] === 'NIGHT') {
                    const _0x3d7d17 = document['getElementById']('ability-timer-label');
                    if (_0x3d7d17) {
                        const _0x166275 = _0x5f466a['game']['abilityTimer'] !== undefined ? _0x5f466a['game']['abilityTimer'] : _0x5f466a['game']['timer'];
                        _0x3d7d17['innerText'] = _0x5f466a['game']['nightAbilityOpen'] ? _0x166275 + 's' : '';
                    }
                    if (_0x5f466a['game']['nightAbilityOpen'] && !_0x5f3c32 && !_0x490533['isDead']) {
                        _0x5f3c32 = !![];
                        _0x1e8254();
                        const _0x45a157 = document['getElementById']('ability-ui');
                        if (_0x45a157)
                            _0x45a157['style']['display'] = 'block';
                    }
                    if (!_0x5f466a['game']['nightAbilityOpen']) {
                        const _0x448ad7 = document['getElementById']('ability-ui');
                        if (_0x448ad7 && _0x448ad7['style']['display'] === 'block') {
                            _0x448ad7['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x5f3c32 = ![];
                }
                _0xc37b39(_0x5f466a['game']);
                if (_0x5f466a['game']['roleListMode'] !== undefined) {
                    _0x1c8d04['ROLE_LIST_RAW'] = _0x5f466a['game']['roleList'] || [];
                    _0xfd6917(_0x5f466a['game']['roleList'], _0x5f466a['game']['roleListMode']);
                }
            }
        } else if (_0x5f466a['type'] === 'teleport') {
            _0x490533['x'] = _0x5f466a['x'];
            _0x490533['y'] = _0x5f466a['y'];
            _0x490533['vx'] = 0x0;
            _0x490533['vy'] = 0x0;
            _0x1c8d04['CAMERA']['x'] = null;
            if (_0x5f466a['teleportId'] !== undefined)
                _0x26c1db = _0x5f466a['teleportId'];
        } else if (_0x5f466a['type'] === 'bulk_teleport') {
            for (const _0x5d2be6 in _0x5f466a['positions']) {
                const _0x3dd0a4 = _0x5f466a['positions'][_0x5d2be6];
                if (parseInt(_0x5d2be6) === _0x1fd455) {
                    _0x490533['x'] = _0x3dd0a4['x'];
                    _0x490533['y'] = _0x3dd0a4['y'];
                    _0x490533['vx'] = 0x0;
                    _0x490533['vy'] = 0x0;
                    _0x1c8d04['CAMERA']['x'] = null;
                    continue;
                }
                const _0x34664c = _0xa47454[_0x5d2be6];
                if (_0x34664c) {
                    _0x34664c['x'] = _0x3dd0a4['x'];
                    _0x34664c['y'] = _0x3dd0a4['y'];
                    _0x34664c['renderX'] = _0x3dd0a4['x'];
                    _0x34664c['renderY'] = _0x3dd0a4['y'];
                    _0x34664c['vx'] = 0x0;
                    _0x34664c['vy'] = 0x0;
                }
            }
        } else if (_0x5f466a['type'] === 'player_left') {
            delete _0xa47454[_0x5f466a['id']];
            _0x761e50['delete'](parseInt(_0x5f466a['id']));
        } else if (_0x5f466a['type'] === 'map_update') {
            const _0x4346d3 = _0x1c8d04['MAP']['layers']['find'](_0xd57b14 => _0xd57b14['name'] === _0x5f466a['layer']);
            if (_0x4346d3) {
                _0x4346d3['data'][_0x5f466a['row'] * _0x1c8d04['MAP']['columns'] + _0x5f466a['col']] = _0x5f466a['gid'];
                const _0x334a6d = _0x5f466a['row'] * _0x1c8d04['MAP']['columns'] + _0x5f466a['col'];
                if (_0x1c8d04['MAP']['doors'] && _0x1c8d04['MAP']['doors'][_0x334a6d]) {
                    const _0x3f83a4 = _0x1c8d04['MAP']['layers']['find'](_0x2546f3 => _0x2546f3['name'] === 'floor2');
                    if (_0x3f83a4)
                        _0x3f83a4['data'][_0x334a6d] = 0x2;
                }
                const _0xb34db8 = Math['floor'](_0x5f466a['col'] * _0x1c8d04['MAP']['tileSize'] / _0x1c8d04['MAP']['chunkSize']);
                const _0x4c0aaf = Math['floor'](_0x5f466a['row'] * _0x1c8d04['MAP']['tileSize'] / _0x1c8d04['MAP']['chunkSize']);
                _0x317989(_0xb34db8, _0x4c0aaf);
            }
        } else if (_0x5f466a['type'] === 'role_assign') {
            _0xf1d4e = _0x5f466a['role'];
            _0x490533['isDead'] = _0xf1d4e === 'Spectator';
            _0x761e50['clear']();
            _0x1c8d04['CURRENT_TARGET'] = null;
            _0x38f405 = null;
            _0x4a8114 = null;
            _0x42333a = null;
            _0x5f3c32 = ![];
            const _0x3ffb24 = document['getElementById']('ability-ui');
            if (_0x3ffb24)
                _0x3ffb24['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0xf1d4e;
            _0x113a3c();
            _0x2e3a56(_0xf1d4e === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0xf1d4e, !![]);
            let _0x5cbccd = '';
            if (_0xf1d4e === 'Investigator')
                _0x5cbccd = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0xf1d4e === 'Tracker')
                _0x5cbccd = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0xf1d4e === 'Doctor')
                _0x5cbccd = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0xf1d4e === 'Archer')
                _0x5cbccd = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0xf1d4e === 'Escort')
                _0x5cbccd = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0xf1d4e === 'Vigilante')
                _0x5cbccd = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0xf1d4e === 'Skinwalker')
                _0x5cbccd = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0xf1d4e === 'Celebrity')
                _0x5cbccd = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0xf1d4e === 'Mayor')
                _0x5cbccd = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x2e3a56(_0x5cbccd, !![]);
        } else if (_0x5f466a['type'] === 'mayor_reveal') {
            _0x761e50['add'](parseInt(_0x5f466a['playerId']));
            _0x41d3c7();
            _0x113a3c();
        } else if (_0x5f466a['type'] === 'rolelist_update') {
            _0x1c8d04['ROLE_LIST_RAW'] = _0x5f466a['list'] || [];
            _0xfd6917(_0x5f466a['list'], _0x5f466a['mode']);
        } else if (_0x5f466a['type'] === 'sound_event') {
            _0x11a657['onSoundEvent'](_0x5f466a['track']);
        } else if (_0x5f466a['type'] === 'game_over') {
            _0x11a657['onStateChange']('LOBBY', ![]);
            _0xfd6917([], 'off');
            _0xf1d4e = null;
            _0x490533['isDead'] = ![];
            _0x761e50['clear']();
            _0x1c8d04['CURRENT_TARGET'] = null;
            _0x38f405 = null;
            _0x4a8114 = null;
            _0x42333a = null;
            _0x5f3c32 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x113a3c();
            _0x2e3a56('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x5f466a['type'] === 'chat_log') {
            _0x2e3a56(_0x5f466a['sender'] + ':\x20' + _0x5f466a['text']);
        } else if (_0x5f466a['type'] === 'sys_chat') {
            _0x2e3a56(_0x5f466a['text'], !![]);
        }
    };
}
function _0x2e3a56(_0x2d864d, _0x9ca121 = ![]) {
    const _0x13dfae = document['getElementById']('chat-log-messages');
    const _0x539c29 = document['getElementById']('chat-log-ui');
    const _0x50130b = _0x539c29['scrollHeight'] - _0x539c29['scrollTop'] - _0x539c29['clientHeight'] < 0x1e;
    const _0x2a8a79 = document['createElement']('div');
    _0x2a8a79['className'] = 'chat-log-line' + (_0x9ca121 ? '\x20sys-msg' : '');
    _0x2a8a79['innerText'] = _0x2d864d;
    _0x13dfae['appendChild'](_0x2a8a79);
    if (_0x50130b) {
        _0x539c29['scrollTop'] = _0x539c29['scrollHeight'];
    }
    if (_0x13dfae['childElementCount'] > 0xc8) {
        _0x13dfae['removeChild'](_0x13dfae['firstChild']);
    }
}
let _0x215ce7 = -0x1, _0x4d1517 = -0x1, _0x24c1cb = -0x1, _0x1534f6 = 0x0;
function _0x936108() {
    if (!_0x1fd455 || !_0x27e598 || _0x27e598['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x36a525 = performance['now']();
    const _0x15e9e7 = _0x36a525 - _0x1534f6;
    const _0x48585f = Math['abs'](_0x490533['x'] - _0x215ce7) > 0.05 || Math['abs'](_0x490533['y'] - _0x4d1517) > 0.05 || Math['abs'](_0x490533['angle'] - _0x24c1cb) > 0.02;
    if (!_0x48585f && _0x15e9e7 < 0xc8)
        return;
    if (_0x15e9e7 < 0x19)
        return;
    _0x1534f6 = _0x36a525;
    _0x215ce7 = _0x490533['x'];
    _0x4d1517 = _0x490533['y'];
    _0x24c1cb = _0x490533['angle'];
    if (!_0x1fd455 || !_0x27e598 || _0x27e598['readyState'] !== WebSocket['OPEN'])
        return;
    _0x27e598['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x490533['x'],
        'y': _0x490533['y'],
        'vx': _0x490533['vx'],
        'vy': _0x490533['vy'],
        'angle': _0x490533['angle'],
        'scale': _0x490533['scale'],
        'teleportId': _0x26c1db
    }));
}
function _0x4372e5() {
    if (_0x490533['isDead'])
        return;
    const _0x3b1198 = _0x1c8d04['MAP']['layers']['find'](_0x163f05 => _0x163f05['name'] === 'walls');
    if (!_0x3b1198)
        return;
    const _0x16bee7 = _0x490533['scale'];
    const _0x326bc9 = _0x490533['width'] * _0x16bee7 / 0x2;
    for (let _0x2d9aad = 0x0; _0x2d9aad < 0x3; _0x2d9aad++) {
        let _0x472b26 = _0x490533['x'] + _0x490533['width'] / 0x2;
        let _0xced11b = _0x490533['y'] + _0x490533['height'] / 0x2;
        const _0x13ccb7 = Math['floor']((_0x472b26 - _0x326bc9) / _0x1c8d04['MAP']['tileSize']);
        const _0x434845 = Math['floor']((_0x472b26 + _0x326bc9) / _0x1c8d04['MAP']['tileSize']);
        const _0x4ee3eb = Math['floor']((_0xced11b - _0x326bc9) / _0x1c8d04['MAP']['tileSize']);
        const _0x28f43a = Math['floor']((_0xced11b + _0x326bc9) / _0x1c8d04['MAP']['tileSize']);
        for (let _0x628198 = _0x4ee3eb; _0x628198 <= _0x28f43a; _0x628198++) {
            for (let _0x4fbabd = _0x13ccb7; _0x4fbabd <= _0x434845; _0x4fbabd++) {
                if (_0x4fbabd < 0x0 || _0x4fbabd >= _0x1c8d04['MAP']['columns'] || _0x628198 < 0x0 || _0x628198 >= _0x1c8d04['MAP']['rows'])
                    continue;
                if (_0x3b1198['data'][_0x628198 * _0x1c8d04['MAP']['columns'] + _0x4fbabd] === 0x0)
                    continue;
                const _0x23e04e = _0x4fbabd * _0x1c8d04['MAP']['tileSize'];
                const _0x40f347 = _0x628198 * _0x1c8d04['MAP']['tileSize'];
                const _0x42b8a9 = _0x472b26 < _0x23e04e ? _0x23e04e : _0x472b26 > _0x23e04e + _0x1c8d04['MAP']['tileSize'] ? _0x23e04e + _0x1c8d04['MAP']['tileSize'] : _0x472b26;
                const _0x2a9c21 = _0xced11b < _0x40f347 ? _0x40f347 : _0xced11b > _0x40f347 + _0x1c8d04['MAP']['tileSize'] ? _0x40f347 + _0x1c8d04['MAP']['tileSize'] : _0xced11b;
                const _0x2a4656 = _0x472b26 - _0x42b8a9;
                const _0x25eff7 = _0xced11b - _0x2a9c21;
                const _0x1d8dad = Math['sqrt'](_0x2a4656 * _0x2a4656 + _0x25eff7 * _0x25eff7);
                if (_0x1d8dad < _0x326bc9) {
                    if (_0x1d8dad === 0x0) {
                        const _0x42e569 = _0x472b26 - _0x23e04e;
                        const _0x1c4e06 = _0x23e04e + _0x1c8d04['MAP']['tileSize'] - _0x472b26;
                        const _0x1e90c5 = _0xced11b - _0x40f347;
                        const _0x20a1e3 = _0x40f347 + _0x1c8d04['MAP']['tileSize'] - _0xced11b;
                        const _0x13b658 = Math['min'](_0x42e569, _0x1c4e06, _0x1e90c5, _0x20a1e3);
                        if (_0x13b658 === _0x42e569)
                            _0x472b26 = _0x23e04e - _0x326bc9;
                        else if (_0x13b658 === _0x1c4e06)
                            _0x472b26 = _0x23e04e + _0x1c8d04['MAP']['tileSize'] + _0x326bc9;
                        else if (_0x13b658 === _0x1e90c5)
                            _0xced11b = _0x40f347 - _0x326bc9;
                        else
                            _0xced11b = _0x40f347 + _0x1c8d04['MAP']['tileSize'] + _0x326bc9;
                    } else {
                        const _0x186b18 = _0x326bc9 - _0x1d8dad;
                        _0x472b26 += _0x2a4656 / _0x1d8dad * _0x186b18;
                        _0xced11b += _0x25eff7 / _0x1d8dad * _0x186b18;
                        const _0x57866e = _0x490533['vx'] * (_0x2a4656 / _0x1d8dad) + _0x490533['vy'] * (_0x25eff7 / _0x1d8dad);
                        if (_0x57866e < 0x0) {
                            _0x490533['vx'] -= _0x57866e * (_0x2a4656 / _0x1d8dad);
                            _0x490533['vy'] -= _0x57866e * (_0x25eff7 / _0x1d8dad);
                        }
                    }
                }
            }
        }
        _0x490533['x'] = _0x472b26 - _0x490533['width'] / 0x2;
        _0x490533['y'] = _0xced11b - _0x490533['height'] / 0x2;
    }
}
function _0x29bb50(_0xfa88e5) {
    const _0x24094a = _0x1c8d04['MAP']['layers']['find'](_0x132365 => _0x132365['name'] === 'walls');
    if (!_0x24094a)
        return;
    const _0xd02914 = _0xfa88e5['width'] / 0x2;
    for (let _0x2491b7 = 0x0; _0x2491b7 < 0x2; _0x2491b7++) {
        let _0x363ab4 = _0xfa88e5['x'] + _0xfa88e5['width'] / 0x2;
        let _0x5ac4e7 = _0xfa88e5['y'] + _0xfa88e5['height'] / 0x2;
        const _0x24c5d7 = Math['floor']((_0x363ab4 - _0xd02914) / _0x1c8d04['MAP']['tileSize']);
        const _0x440f65 = Math['floor']((_0x363ab4 + _0xd02914) / _0x1c8d04['MAP']['tileSize']);
        const _0x4f38a7 = Math['floor']((_0x5ac4e7 - _0xd02914) / _0x1c8d04['MAP']['tileSize']);
        const _0x4537f5 = Math['floor']((_0x5ac4e7 + _0xd02914) / _0x1c8d04['MAP']['tileSize']);
        for (let _0x2dd7dd = _0x4f38a7; _0x2dd7dd <= _0x4537f5; _0x2dd7dd++) {
            for (let _0x2c31d0 = _0x24c5d7; _0x2c31d0 <= _0x440f65; _0x2c31d0++) {
                if (_0x2c31d0 < 0x0 || _0x2c31d0 >= _0x1c8d04['MAP']['columns'] || _0x2dd7dd < 0x0 || _0x2dd7dd >= _0x1c8d04['MAP']['rows'])
                    continue;
                if (_0x24094a['data'][_0x2dd7dd * _0x1c8d04['MAP']['columns'] + _0x2c31d0] === 0x0)
                    continue;
                const _0x306276 = _0x2c31d0 * _0x1c8d04['MAP']['tileSize'];
                const _0x1c8719 = _0x2dd7dd * _0x1c8d04['MAP']['tileSize'];
                const _0x7ba8e6 = _0x363ab4 < _0x306276 ? _0x306276 : _0x363ab4 > _0x306276 + _0x1c8d04['MAP']['tileSize'] ? _0x306276 + _0x1c8d04['MAP']['tileSize'] : _0x363ab4;
                const _0x3a02ad = _0x5ac4e7 < _0x1c8719 ? _0x1c8719 : _0x5ac4e7 > _0x1c8719 + _0x1c8d04['MAP']['tileSize'] ? _0x1c8719 + _0x1c8d04['MAP']['tileSize'] : _0x5ac4e7;
                const _0xff913d = _0x363ab4 - _0x7ba8e6;
                const _0x5ec75b = _0x5ac4e7 - _0x3a02ad;
                const _0x430c9b = Math['sqrt'](_0xff913d * _0xff913d + _0x5ec75b * _0x5ec75b);
                if (_0x430c9b < _0xd02914) {
                    if (_0x430c9b === 0x0) {
                        const _0x4666f9 = _0x363ab4 - _0x306276;
                        const _0x22d681 = _0x306276 + _0x1c8d04['MAP']['tileSize'] - _0x363ab4;
                        const _0x52562e = _0x5ac4e7 - _0x1c8719;
                        const _0x180d53 = _0x1c8719 + _0x1c8d04['MAP']['tileSize'] - _0x5ac4e7;
                        const _0x2428de = Math['min'](_0x4666f9, _0x22d681, _0x52562e, _0x180d53);
                        if (_0x2428de === _0x4666f9)
                            _0x363ab4 = _0x306276 - _0xd02914;
                        else if (_0x2428de === _0x22d681)
                            _0x363ab4 = _0x306276 + _0x1c8d04['MAP']['tileSize'] + _0xd02914;
                        else if (_0x2428de === _0x52562e)
                            _0x5ac4e7 = _0x1c8719 - _0xd02914;
                        else
                            _0x5ac4e7 = _0x1c8719 + _0x1c8d04['MAP']['tileSize'] + _0xd02914;
                    } else {
                        const _0x59f430 = _0xd02914 - _0x430c9b;
                        _0x363ab4 += _0xff913d / _0x430c9b * _0x59f430;
                        _0x5ac4e7 += _0x5ec75b / _0x430c9b * _0x59f430;
                    }
                }
            }
        }
        _0xfa88e5['x'] = _0x363ab4 - _0xfa88e5['width'] / 0x2;
        _0xfa88e5['y'] = _0x5ac4e7 - _0xfa88e5['height'] / 0x2;
    }
}
function _0x5c2670(_0x351af2) {
    const _0x430bcc = _0x351af2['width'] / 0x2;
    for (let _0x463230 = 0x0; _0x463230 < 0x2; _0x463230++) {
        let _0x4980de = _0x351af2['x'] + _0x351af2['width'] / 0x2;
        let _0x2049a8 = _0x351af2['y'] + _0x351af2['height'] / 0x2;
        for (const _0x25a1a0 of _0x1c8d04['ENTITIES']) {
            const _0x3dd242 = _0x4980de < _0x25a1a0['x'] ? _0x25a1a0['x'] : _0x4980de > _0x25a1a0['x'] + _0x25a1a0['w'] ? _0x25a1a0['x'] + _0x25a1a0['w'] : _0x4980de;
            const _0x400710 = _0x2049a8 < _0x25a1a0['y'] ? _0x25a1a0['y'] : _0x2049a8 > _0x25a1a0['y'] + _0x25a1a0['h'] ? _0x25a1a0['y'] + _0x25a1a0['h'] : _0x2049a8;
            const _0xedac44 = _0x4980de - _0x3dd242;
            const _0x550e4d = _0x2049a8 - _0x400710;
            const _0x5ac4e0 = Math['sqrt'](_0xedac44 * _0xedac44 + _0x550e4d * _0x550e4d);
            if (_0x5ac4e0 < _0x430bcc && _0x5ac4e0 > 0x0) {
                const _0x5b40dc = _0x430bcc - _0x5ac4e0;
                const _0x54ba6c = _0xedac44 / _0x5ac4e0;
                const _0x375c79 = _0x550e4d / _0x5ac4e0;
                _0x4980de += _0x54ba6c * _0x5b40dc;
                _0x2049a8 += _0x375c79 * _0x5b40dc;
            } else if (_0x5ac4e0 === 0x0) {
                const _0x4b21f6 = _0x4980de - _0x25a1a0['x'];
                const _0x4c772a = _0x25a1a0['x'] + _0x25a1a0['w'] - _0x4980de;
                const _0x30068f = _0x2049a8 - _0x25a1a0['y'];
                const _0x44bd3b = _0x25a1a0['y'] + _0x25a1a0['h'] - _0x2049a8;
                const _0x207839 = Math['min'](_0x4b21f6, _0x4c772a, _0x30068f, _0x44bd3b);
                if (_0x207839 === _0x4b21f6)
                    _0x4980de = _0x25a1a0['x'] - _0x430bcc;
                else if (_0x207839 === _0x4c772a)
                    _0x4980de = _0x25a1a0['x'] + _0x25a1a0['w'] + _0x430bcc;
                else if (_0x207839 === _0x30068f)
                    _0x2049a8 = _0x25a1a0['y'] - _0x430bcc;
                else
                    _0x2049a8 = _0x25a1a0['y'] + _0x25a1a0['h'] + _0x430bcc;
            }
        }
        _0x351af2['x'] = _0x4980de - _0x351af2['width'] / 0x2;
        _0x351af2['y'] = _0x2049a8 - _0x351af2['height'] / 0x2;
    }
}
function _0x4fcaa2() {
    if (_0x490533['isDead'])
        return;
    const _0x68103a = _0x490533['width'] / 0x2;
    const _0x319c6a = _0x490533['x'] + _0x490533['width'] / 0x2;
    const _0x3161ea = _0x490533['y'] + _0x490533['height'] / 0x2;
    for (const _0x9e3095 in _0xa47454) {
        const _0x2cf4ab = _0xa47454[_0x9e3095];
        if (_0x2cf4ab['isDead'])
            continue;
        const _0x2f946b = _0x2cf4ab['width'] / 0x2;
        const _0x3690b4 = _0x68103a + _0x2f946b;
        const _0x3a3f1e = (_0x2cf4ab['renderX'] ?? _0x2cf4ab['x']) + _0x2cf4ab['width'] / 0x2;
        const _0x347056 = (_0x2cf4ab['renderY'] ?? _0x2cf4ab['y']) + _0x2cf4ab['height'] / 0x2;
        const _0x514c0e = _0x319c6a - _0x3a3f1e;
        const _0x5a2897 = _0x3161ea - _0x347056;
        const _0x3d7803 = Math['sqrt'](_0x514c0e * _0x514c0e + _0x5a2897 * _0x5a2897);
        if (_0x3d7803 > 0x0 && _0x3d7803 < _0x3690b4) {
            const _0x2c3b72 = _0x3690b4 - _0x3d7803;
            const _0x11a044 = _0x514c0e / _0x3d7803;
            const _0x17b23f = _0x5a2897 / _0x3d7803;
            _0x490533['x'] += _0x11a044 * (_0x2c3b72 * 0.25);
            _0x490533['y'] += _0x17b23f * (_0x2c3b72 * 0.25);
            _0x2cf4ab['x'] -= _0x11a044 * (_0x2c3b72 * 0.75);
            _0x2cf4ab['y'] -= _0x17b23f * (_0x2c3b72 * 0.75);
            _0x29bb50(_0x2cf4ab);
            _0x5c2670(_0x2cf4ab);
            if (_0x2cf4ab['renderX'] !== undefined) {
                _0x2cf4ab['renderX'] = _0x2cf4ab['x'];
                _0x2cf4ab['renderY'] = _0x2cf4ab['y'];
            }
            const _0x1edaaa = _0x490533['vx'] * _0x11a044 + _0x490533['vy'] * _0x17b23f;
            if (_0x1edaaa < 0x0) {
                _0x490533['vx'] -= _0x1edaaa * _0x11a044 * 0.25;
                _0x490533['vy'] -= _0x1edaaa * _0x17b23f * 0.25;
            }
        }
    }
    _0x4372e5();
    _0x23b817();
}
function _0x23b817() {
    if (_0x490533['isDead'])
        return;
    const _0x52f588 = _0x490533['scale'];
    const _0x507916 = _0x490533['width'] * _0x52f588 / 0x2;
    for (let _0x4d4443 = 0x0; _0x4d4443 < 0x2; _0x4d4443++) {
        let _0x2786d9 = _0x490533['x'] + _0x490533['width'] / 0x2;
        let _0x1d984e = _0x490533['y'] + _0x490533['height'] / 0x2;
        for (const _0x382da3 of _0x1c8d04['ENTITIES']) {
            const _0x55d4e7 = _0x2786d9 < _0x382da3['x'] ? _0x382da3['x'] : _0x2786d9 > _0x382da3['x'] + _0x382da3['w'] ? _0x382da3['x'] + _0x382da3['w'] : _0x2786d9;
            const _0x5d39a0 = _0x1d984e < _0x382da3['y'] ? _0x382da3['y'] : _0x1d984e > _0x382da3['y'] + _0x382da3['h'] ? _0x382da3['y'] + _0x382da3['h'] : _0x1d984e;
            const _0x1d8bdb = _0x2786d9 - _0x55d4e7;
            const _0x57ae49 = _0x1d984e - _0x5d39a0;
            const _0x110ec6 = Math['sqrt'](_0x1d8bdb * _0x1d8bdb + _0x57ae49 * _0x57ae49);
            if (_0x110ec6 < _0x507916 && _0x110ec6 > 0x0) {
                const _0x2b25f2 = _0x507916 - _0x110ec6;
                const _0x1080c8 = _0x1d8bdb / _0x110ec6;
                const _0x857610 = _0x57ae49 / _0x110ec6;
                _0x2786d9 += _0x1080c8 * _0x2b25f2;
                _0x1d984e += _0x857610 * _0x2b25f2;
                const _0x5318b2 = _0x490533['vx'] * _0x1080c8 + _0x490533['vy'] * _0x857610;
                if (_0x5318b2 < 0x0) {
                    _0x490533['vx'] -= _0x5318b2 * _0x1080c8;
                    _0x490533['vy'] -= _0x5318b2 * _0x857610;
                }
            } else if (_0x110ec6 === 0x0) {
                const _0x1dd432 = _0x2786d9 - _0x382da3['x'];
                const _0x1be036 = _0x382da3['x'] + _0x382da3['w'] - _0x2786d9;
                const _0xb885c6 = _0x1d984e - _0x382da3['y'];
                const _0x3b7c77 = _0x382da3['y'] + _0x382da3['h'] - _0x1d984e;
                const _0x4c7ec5 = Math['min'](_0x1dd432, _0x1be036, _0xb885c6, _0x3b7c77);
                if (_0x4c7ec5 === _0x1dd432)
                    _0x2786d9 = _0x382da3['x'] - _0x507916;
                else if (_0x4c7ec5 === _0x1be036)
                    _0x2786d9 = _0x382da3['x'] + _0x382da3['w'] + _0x507916;
                else if (_0x4c7ec5 === _0xb885c6)
                    _0x1d984e = _0x382da3['y'] - _0x507916;
                else
                    _0x1d984e = _0x382da3['y'] + _0x382da3['h'] + _0x507916;
            }
        }
        _0x490533['x'] = _0x2786d9 - _0x490533['width'] / 0x2;
        _0x490533['y'] = _0x1d984e - _0x490533['height'] / 0x2;
    }
}
function _0x551998(_0xacd220, _0x2dabca) {
    const _0x39149c = _0x1c8d04['MAP']['layers']['find'](_0x49659a => _0x49659a['name'] === 'trees');
    if (!_0x39149c)
        return ![];
    const _0x3822b3 = Math['floor'](_0xacd220 / _0x1c8d04['MAP']['tileSize']);
    const _0x35c9e8 = Math['floor'](_0x2dabca / _0x1c8d04['MAP']['tileSize']);
    if (_0x3822b3 < 0x0 || _0x3822b3 >= _0x1c8d04['MAP']['columns'] || _0x35c9e8 < 0x0 || _0x35c9e8 >= _0x1c8d04['MAP']['rows'])
        return ![];
    return _0x39149c['data'][_0x35c9e8 * _0x1c8d04['MAP']['columns'] + _0x3822b3] === 0xb;
}
let _0x128fba = null;
function _0x6d0d09() {
    const _0x1f110f = _0x1c8d04['MAP'];
    const _0x243577 = _0x1f110f['layers']['find'](_0x48f092 => _0x48f092['name'] === 'floor2');
    const _0x4491c8 = _0x1f110f['layers']['find'](_0x435453 => _0x435453['name'] === 'walls');
    if (!_0x243577 || !_0x4491c8) {
        _0x128fba = null;
        return;
    }
    const _0x26cdb3 = _0x1f110f['columns'];
    const _0x45bef4 = _0x1f110f['rows'];
    const _0x3eef82 = [];
    const _0x53f236 = [];
    const _0x3954c1 = new Set();
    for (let _0x3195a1 = 0x0; _0x3195a1 < _0x45bef4; _0x3195a1++) {
        for (let _0x1429e1 = 0x0; _0x1429e1 < _0x26cdb3; _0x1429e1++) {
            const _0x512569 = _0x3195a1 * _0x26cdb3 + _0x1429e1;
            const _0x22802f = _0x243577['data'][_0x512569];
            const _0x19de01 = _0x4491c8['data'][_0x512569];
            if (_0x22802f === 0x2 || _0x22802f === 0x4) {
                _0x3eef82['push']({
                    'c': _0x1429e1,
                    'r': _0x3195a1
                });
                if (_0x19de01 !== 0x0)
                    _0x53f236['push']({
                        'c': _0x1429e1,
                        'r': _0x3195a1
                    });
            }
            if (_0x19de01 !== 0x0)
                _0x3954c1['add'](_0x1429e1 + ',' + _0x3195a1);
        }
    }
    const _0x987e4f = new Set(_0x3eef82['map'](_0x3f872b => _0x3f872b['c'] + ',' + _0x3f872b['r']));
    const _0xe1fed = [
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
                c: _0xb1f567,
                r: _0x2c07c1
            } of _0x3eef82) {
        for (const [_0x214fe9, _0x2d925a] of _0xe1fed) {
            const _0x559983 = _0xb1f567 + _0x214fe9, _0x4fefde = _0x2c07c1 + _0x2d925a;
            const _0x1f1926 = _0x559983 + ',' + _0x4fefde;
            if (!_0x987e4f['has'](_0x1f1926))
                _0x3954c1['add'](_0x1f1926);
        }
    }
    _0x128fba = {
        'wallSet': _0x3954c1,
        'floorTiles': _0x3eef82,
        'wallTiles': _0x53f236,
        'interiorSet': _0x987e4f
    };
}
function _0x48f329() {
    const _0x142a75 = _0x1c8d04['MAP']['layers']['find'](_0x3c4b30 => _0x3c4b30['name'] === 'floor2');
    if (!_0x142a75)
        return ![];
    const _0x65c9f1 = Math['floor']((_0x490533['x'] + _0x490533['width'] / 0x2) / _0x1c8d04['MAP']['tileSize']);
    const _0xcedc68 = Math['floor']((_0x490533['y'] + _0x490533['height'] / 0x2) / _0x1c8d04['MAP']['tileSize']);
    if (_0x65c9f1 < 0x0 || _0x65c9f1 >= _0x1c8d04['MAP']['columns'] || _0xcedc68 < 0x0 || _0xcedc68 >= _0x1c8d04['MAP']['rows'])
        return ![];
    const _0x6c8cd5 = _0x142a75['data'][_0xcedc68 * _0x1c8d04['MAP']['columns'] + _0x65c9f1];
    return _0x6c8cd5 === 0x2;
}
function _0x4f6656() {
    if (_0x490533['isDead']) {
        _0x1c8d04['SHADOW']['polygon'] = null;
        return;
    }
    const _0x4bbe0d = _0x1c8d04['MAP'];
    const _0x17d8d1 = _0x1c8d04['SHADOW'];
    const _0xd8fc35 = _0x4bbe0d['tileSize'];
    if (!_0x128fba)
        _0x6d0d09();
    if (!_0x128fba) {
        _0x17d8d1['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x4cb43d,
        floorTiles: _0x5ab723
    } = _0x128fba;
    if (_0x5ab723['length'] === 0x0) {
        _0x17d8d1['polygon'] = null;
        return;
    }
    if (!_0x48f329()) {
        _0x17d8d1['polygon'] = null;
        return;
    }
    const _0x596d5d = _0x490533['x'] + _0x490533['width'] / 0x2;
    const _0x1d2561 = _0x490533['y'] + _0x490533['height'] / 0x2;
    if (!_0x128fba['_bounds']) {
        let _0x479b7f = Infinity, _0x2e653c = -Infinity, _0x2945b = Infinity, _0x44709f = -Infinity;
        for (const {
                    c: _0x38bd93,
                    r: _0x56ea7c
                } of _0x5ab723) {
            if (_0x38bd93 < _0x479b7f)
                _0x479b7f = _0x38bd93;
            if (_0x38bd93 > _0x2e653c)
                _0x2e653c = _0x38bd93;
            if (_0x56ea7c < _0x2945b)
                _0x2945b = _0x56ea7c;
            if (_0x56ea7c > _0x44709f)
                _0x44709f = _0x56ea7c;
        }
        _0x128fba['_bounds'] = {
            'minC': Math['max'](0x0, _0x479b7f - 0x1),
            'maxC': Math['min'](_0x4bbe0d['columns'] - 0x1, _0x2e653c + 0x1),
            'minR': Math['max'](0x0, _0x2945b - 0x1),
            'maxR': Math['min'](_0x4bbe0d['rows'] - 0x1, _0x44709f + 0x1)
        };
        const _0xae2f37 = [];
        for (let _0xd528d6 = _0x128fba['_bounds']['minR']; _0xd528d6 <= _0x128fba['_bounds']['maxR']; _0xd528d6++) {
            for (let _0x68f93b = _0x128fba['_bounds']['minC']; _0x68f93b <= _0x128fba['_bounds']['maxC']; _0x68f93b++) {
                if (_0x4cb43d['has'](_0x68f93b + ',' + _0xd528d6))
                    _0xae2f37['push'](_0x68f93b, _0xd528d6);
            }
        }
        _0x128fba['_wallArr'] = _0xae2f37;
    }
    const {
        minC: _0x2e4d8a,
        maxC: _0x58e0b1,
        minR: _0x591d47,
        maxR: _0xe84178
    } = _0x128fba['_bounds'];
    const _0x4d6be9 = _0x128fba['_wallArr'];
    const _0x4546e9 = 0.0001;
    const _0x2b9431 = new Set();
    const _0x5b6670 = [];
    for (let _0x244a03 = 0x0; _0x244a03 < _0x4d6be9['length']; _0x244a03 += 0x2) {
        const _0x25b029 = _0x4d6be9[_0x244a03], _0x30967f = _0x4d6be9[_0x244a03 + 0x1];
        const _0x3c6ae1 = [
            _0x25b029 * _0xd8fc35,
            _0x30967f * _0xd8fc35,
            _0x25b029 * _0xd8fc35 + _0xd8fc35,
            _0x30967f * _0xd8fc35,
            _0x25b029 * _0xd8fc35,
            _0x30967f * _0xd8fc35 + _0xd8fc35,
            _0x25b029 * _0xd8fc35 + _0xd8fc35,
            _0x30967f * _0xd8fc35 + _0xd8fc35
        ];
        for (let _0x155c15 = 0x0; _0x155c15 < _0x3c6ae1['length']; _0x155c15 += 0x2) {
            const _0x5bb19a = _0x3c6ae1[_0x155c15], _0x67937e = _0x3c6ae1[_0x155c15 + 0x1];
            const _0x321670 = Math['atan2'](_0x67937e - _0x1d2561, _0x5bb19a - _0x596d5d);
            const _0x3acae9 = Math['round'](_0x321670 * 0x4e20);
            if (!_0x2b9431['has'](_0x3acae9 - 0x1)) {
                _0x2b9431['add'](_0x3acae9 - 0x1);
                _0x5b6670['push'](_0x321670 - _0x4546e9);
            }
            if (!_0x2b9431['has'](_0x3acae9)) {
                _0x2b9431['add'](_0x3acae9);
                _0x5b6670['push'](_0x321670);
            }
            if (!_0x2b9431['has'](_0x3acae9 + 0x1)) {
                _0x2b9431['add'](_0x3acae9 + 0x1);
                _0x5b6670['push'](_0x321670 + _0x4546e9);
            }
        }
    }
    _0x5b6670['sort']((_0x209b89, _0x1d6267) => _0x209b89 - _0x1d6267);
    const _0x2b5e88 = Math['hypot']((_0x58e0b1 - _0x2e4d8a + 0x2) * _0xd8fc35, (_0xe84178 - _0x591d47 + 0x2) * _0xd8fc35);
    const _0x1807b5 = _0x1d47d0 => {
        const _0x4b136e = Math['cos'](_0x1d47d0);
        const _0x535aad = Math['sin'](_0x1d47d0);
        let _0x12c285 = _0x2b5e88;
        for (let _0x510822 = 0x0; _0x510822 < _0x4d6be9['length']; _0x510822 += 0x2) {
            const _0x2cc482 = _0x4d6be9[_0x510822], _0x46a6e2 = _0x4d6be9[_0x510822 + 0x1];
            const _0x35c4b7 = _0x2cc482 * _0xd8fc35, _0x4564f6 = _0x46a6e2 * _0xd8fc35;
            const _0x458065 = _0x35c4b7 + _0xd8fc35, _0x14960f = _0x4564f6 + _0xd8fc35;
            const _0x33a977 = _0x35c4b7 + _0xd8fc35 * 0.5, _0x220dbd = _0x4564f6 + _0xd8fc35 * 0.5;
            const _0x5011d4 = Math['abs'](_0x33a977 - _0x596d5d) + Math['abs'](_0x220dbd - _0x1d2561);
            if (_0x5011d4 > _0x12c285 + _0xd8fc35 * 1.5)
                continue;
            let _0x3c8eff, _0x3149d5, _0x1b684c;
            _0x3c8eff = -_0x535aad * _0xd8fc35;
            if (Math['abs'](_0x3c8eff) >= 1e-10) {
                _0x3149d5 = -(_0x4564f6 - _0x1d2561) * _0xd8fc35 / _0x3c8eff;
                _0x1b684c = ((_0x35c4b7 - _0x596d5d) * _0x535aad - (_0x4564f6 - _0x1d2561) * _0x4b136e) / _0x3c8eff;
                if (_0x3149d5 > 0.001 && _0x1b684c >= 0x0 && _0x1b684c <= 0x1 && _0x3149d5 < _0x12c285)
                    _0x12c285 = _0x3149d5;
            }
            _0x3c8eff = _0x4b136e * _0xd8fc35;
            if (Math['abs'](_0x3c8eff) >= 1e-10) {
                _0x3149d5 = (_0x458065 - _0x596d5d) * _0xd8fc35 / _0x3c8eff;
                _0x1b684c = ((_0x458065 - _0x596d5d) * _0x535aad - (_0x4564f6 - _0x1d2561) * _0x4b136e) / _0x3c8eff;
                if (_0x3149d5 > 0.001 && _0x1b684c >= 0x0 && _0x1b684c <= 0x1 && _0x3149d5 < _0x12c285)
                    _0x12c285 = _0x3149d5;
            }
            _0x3c8eff = _0x535aad * _0xd8fc35;
            if (Math['abs'](_0x3c8eff) >= 1e-10) {
                _0x3149d5 = (_0x14960f - _0x1d2561) * _0xd8fc35 / _0x3c8eff;
                _0x1b684c = ((_0x458065 - _0x596d5d) * _0x535aad - (_0x14960f - _0x1d2561) * _0x4b136e) / _0x3c8eff;
                if (_0x3149d5 > 0.001 && _0x1b684c >= 0x0 && _0x1b684c <= 0x1 && _0x3149d5 < _0x12c285)
                    _0x12c285 = _0x3149d5;
            }
            _0x3c8eff = -_0x4b136e * _0xd8fc35;
            if (Math['abs'](_0x3c8eff) >= 1e-10) {
                _0x3149d5 = -(_0x35c4b7 - _0x596d5d) * _0xd8fc35 / _0x3c8eff;
                _0x1b684c = ((_0x35c4b7 - _0x596d5d) * _0x535aad - (_0x14960f - _0x1d2561) * _0x4b136e) / _0x3c8eff;
                if (_0x3149d5 > 0.001 && _0x1b684c >= 0x0 && _0x1b684c <= 0x1 && _0x3149d5 < _0x12c285)
                    _0x12c285 = _0x3149d5;
            }
        }
        const _0x295801 = _0x12c285 < _0x2b5e88 ? _0x12c285 + 0x8 : _0x12c285;
        return {
            'x': _0x596d5d + _0x4b136e * _0x295801,
            'y': _0x1d2561 + _0x535aad * _0x295801
        };
    };
    const _0x4ee9d3 = [];
    for (let _0x5057be = 0x0; _0x5057be < _0x5b6670['length']; _0x5057be++) {
        const _0x37429e = _0x1807b5(_0x5b6670[_0x5057be]);
        _0x4ee9d3['push'](_0x37429e['x'], _0x37429e['y']);
    }
    _0x17d8d1['polygon'] = _0x4ee9d3['length'] >= 0x6 ? new Float32Array(_0x4ee9d3) : null;
}
function _0x37f753(_0x183076, _0x2ef358, _0x2fde12) {
    if (_0x490533['isDead'])
        return;
    if (!_0x128fba)
        return;
    const {
        floorTiles: _0x174173,
        wallTiles: _0x2e66e5
    } = _0x128fba;
    if (_0x174173['length'] === 0x0)
        return;
    const _0x32a073 = _0x1c8d04['SHADOW'];
    const _0x1f6568 = _0x1c8d04['MAP']['tileSize'];
    const _0x22fbca = _0x1c8d04['CAMERA']['width'];
    const _0x3a570f = _0x1c8d04['CAMERA']['height'];
    if (!_0x1c8d04['SHADOW']['_buf'] || _0x1c8d04['SHADOW']['_buf']['width'] !== _0x22fbca || _0x1c8d04['SHADOW']['_buf']['height'] !== _0x3a570f) {
        _0x1c8d04['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x1c8d04['SHADOW']['_buf']['width'] = _0x22fbca;
        _0x1c8d04['SHADOW']['_buf']['height'] = _0x3a570f;
    }
    const _0x104b80 = _0x1c8d04['SHADOW']['_buf'];
    const _0x3e4890 = _0x104b80['getContext']('2d');
    _0x3e4890['clearRect'](0x0, 0x0, _0x22fbca, _0x3a570f);
    _0x3e4890['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x3e4890['beginPath']();
    for (const {
                c: _0x348094,
                r: _0x6d7c67
            } of _0x174173) {
        const _0x17bd6f = Math['floor'](_0x348094 * _0x1f6568 - _0x2ef358), _0x236e1d = Math['floor'](_0x6d7c67 * _0x1f6568 - _0x2fde12);
        if (_0x17bd6f > _0x22fbca || _0x236e1d > _0x3a570f || _0x17bd6f + _0x1f6568 < 0x0 || _0x236e1d + _0x1f6568 < 0x0)
            continue;
        _0x3e4890['rect'](_0x17bd6f - 0x1, _0x236e1d - 0x1, _0x1f6568 + 0x2, _0x1f6568 + 0x2);
    }
    _0x3e4890['fill']();
    if (_0x2e66e5['length'] > 0x0) {
        _0x3e4890['globalCompositeOperation'] = 'destination-out';
        _0x3e4890['fillStyle'] = 'rgba(0,0,0,1)';
        _0x3e4890['beginPath']();
        for (const {
                    c: _0x4851ac,
                    r: _0x48ab19
                } of _0x2e66e5) {
            const _0xcc1081 = Math['floor'](_0x4851ac * _0x1f6568 - _0x2ef358), _0x186f9c = Math['floor'](_0x48ab19 * _0x1f6568 - _0x2fde12);
            if (_0xcc1081 > _0x22fbca || _0x186f9c > _0x3a570f || _0xcc1081 + _0x1f6568 < 0x0 || _0x186f9c + _0x1f6568 < 0x0)
                continue;
            _0x3e4890['rect'](_0xcc1081 - 0x1, _0x186f9c - 0x1, _0x1f6568 + 0x2, _0x1f6568 + 0x2);
        }
        _0x3e4890['fill']();
        _0x3e4890['globalCompositeOperation'] = 'source-over';
    }
    if (_0x32a073['polygon'] && _0x32a073['polygon']['length'] >= 0x6) {
        _0x3e4890['globalCompositeOperation'] = 'destination-out';
        _0x3e4890['beginPath']();
        const _0x1ef56b = _0x32a073['polygon'];
        _0x3e4890['moveTo'](_0x1ef56b[0x0] - _0x2ef358, _0x1ef56b[0x1] - _0x2fde12);
        for (let _0x17fd3 = 0x2; _0x17fd3 < _0x1ef56b['length']; _0x17fd3 += 0x2) {
            _0x3e4890['lineTo'](_0x1ef56b[_0x17fd3] - _0x2ef358, _0x1ef56b[_0x17fd3 + 0x1] - _0x2fde12);
        }
        _0x3e4890['closePath']();
        _0x3e4890['fill']();
        _0x3e4890['globalCompositeOperation'] = 'source-over';
    }
    _0x183076['drawImage'](_0x104b80, 0x0, 0x0);
}
function _0x3a614b(_0x40be33) {
    let _0x49a916 = 0x0, _0x419529 = 0x0;
    const _0x469d98 = _0x1c8d04['INPUTS']['mouseX'] / _0x1c8d04['SYSTEM']['viewScale'];
    const _0x6f7454 = _0x1c8d04['INPUTS']['mouseY'] / _0x1c8d04['SYSTEM']['viewScale'];
    const _0x299fe9 = _0x490533['x'] - _0x1c8d04['CAMERA']['x'] + _0x490533['width'] / 0x2;
    const _0x137d36 = _0x490533['y'] - _0x1c8d04['CAMERA']['y'] + _0x490533['height'] / 0x2;
    const _0x3b0158 = Math['atan2'](_0x6f7454 - _0x137d36, _0x469d98 - _0x299fe9);
    if (_0x331e5b !== 0x0 || _0x44e3dd !== 0x0) {
        _0x49a916 = _0x331e5b;
        _0x419529 = _0x44e3dd;
    } else if (_0x6e41a1) {
        let _0x3593f4 = 0x0, _0x371fe5 = 0x0;
        if (_0x1c8d04['INPUTS']['keys']['w'] || _0x1c8d04['INPUTS']['keys']['arrowup'])
            _0x3593f4 += 0x1;
        if (_0x1c8d04['INPUTS']['keys']['s'] || _0x1c8d04['INPUTS']['keys']['arrowdown'])
            _0x3593f4 -= 0x1;
        if (_0x1c8d04['INPUTS']['keys']['d'] || _0x1c8d04['INPUTS']['keys']['arrowright'])
            _0x371fe5 += 0x1;
        if (_0x1c8d04['INPUTS']['keys']['a'] || _0x1c8d04['INPUTS']['keys']['arrowleft'])
            _0x371fe5 -= 0x1;
        if (_0x3593f4 !== 0x0 || _0x371fe5 !== 0x0) {
            const _0x3ab695 = _0x3b0158 + Math['atan2'](_0x371fe5, _0x3593f4);
            _0x49a916 = Math['cos'](_0x3ab695);
            _0x419529 = Math['sin'](_0x3ab695);
        }
    } else {
        if (_0x1c8d04['INPUTS']['keys']['w'] || _0x1c8d04['INPUTS']['keys']['arrowup'])
            _0x419529 -= 0x1;
        if (_0x1c8d04['INPUTS']['keys']['s'] || _0x1c8d04['INPUTS']['keys']['arrowdown'])
            _0x419529 += 0x1;
        if (_0x1c8d04['INPUTS']['keys']['a'] || _0x1c8d04['INPUTS']['keys']['arrowleft'])
            _0x49a916 -= 0x1;
        if (_0x1c8d04['INPUTS']['keys']['d'] || _0x1c8d04['INPUTS']['keys']['arrowright'])
            _0x49a916 += 0x1;
        const _0x1f05e6 = _0x49a916 !== 0x0 || _0x419529 !== 0x0;
        if (_0x1f05e6) {
            const _0x5edb0f = Math['sqrt'](_0x49a916 * _0x49a916 + _0x419529 * _0x419529);
            _0x49a916 /= _0x5edb0f;
            _0x419529 /= _0x5edb0f;
        }
    }
    if (_0x1c8d04['GAME_STATE'] === 'NIGHT' && _0xf1d4e === 'Skinwalker') {
        if (_0x1c8d04['NIGHT_ABILITY_OPEN'] || !_0x1c8d04['CURRENT_TARGET']) {
            _0x49a916 = 0x0;
            _0x419529 = 0x0;
            _0x490533['vx'] = 0x0;
            _0x490533['vy'] = 0x0;
            _0x490533['x'] = _0x1c8d04['MAP']['columns'] * _0x1c8d04['MAP']['tileSize'] / 0x2 - _0x490533['width'] / 0x2;
            _0x490533['y'] = _0x1c8d04['MAP']['rows'] * _0x1c8d04['MAP']['tileSize'] / 0x2 - _0x490533['height'] / 0x2;
        }
    }
    const _0x4d8035 = _0x49a916 !== 0x0 || _0x419529 !== 0x0;
    const _0x25e525 = (_0x1c8d04['INPUTS']['keys']['shift'] || _0xf57ffd || _0x432e88) && _0x4d8035;
    _0x490533['bopTimer'] = _0x25e525 ? _0x490533['bopTimer'] + _0x40be33 : 0x0;
    _0x490533['scale'] = 0x1 + (_0x490533['bopTimer'] > 0x0 ? Math['sin'](_0x490533['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0xece86e = Math['pow'](0.001, _0x40be33);
    const _0x23ef1e = _0x25e525 ? 0x74a : 0x5d5;
    _0x490533['vx'] += _0x49a916 * _0x23ef1e * _0x40be33;
    _0x490533['vy'] += _0x419529 * _0x23ef1e * _0x40be33;
    _0x490533['vx'] *= _0xece86e;
    _0x490533['vy'] *= _0xece86e;
    _0x490533['x'] += _0x490533['vx'] * _0x40be33;
    _0x490533['y'] += _0x490533['vy'] * _0x40be33;
    for (let _0x51d43d = 0x0; _0x51d43d < 0x3; _0x51d43d++)
        _0x4372e5();
    for (let _0x500057 = 0x0; _0x500057 < 0x2; _0x500057++)
        _0x23b817();
    for (let _0x2c71a4 = 0x0; _0x2c71a4 < 0x2; _0x2c71a4++)
        _0x4fcaa2();
    if (_0x490533['x'] < 0x0)
        _0x490533['x'] = 0x0;
    if (_0x490533['y'] < 0x0)
        _0x490533['y'] = 0x0;
    if (_0x490533['x'] + _0x490533['width'] > _0x1c8d04['MAP']['columns'] * _0x1c8d04['MAP']['tileSize'])
        _0x490533['x'] = _0x1c8d04['MAP']['columns'] * _0x1c8d04['MAP']['tileSize'] - _0x490533['width'];
    if (_0x490533['y'] + _0x490533['height'] > _0x1c8d04['MAP']['rows'] * _0x1c8d04['MAP']['tileSize'])
        _0x490533['y'] = _0x1c8d04['MAP']['rows'] * _0x1c8d04['MAP']['tileSize'] - _0x490533['height'];
    if (_0x308c02) {
        _0x490533['angle'] = _0xaf9956 + Math['PI'] / 0x2;
    } else if (_0x331e5b !== 0x0 || _0x44e3dd !== 0x0) {
        _0x490533['angle'] = Math['atan2'](_0x44e3dd, _0x331e5b) + Math['PI'] / 0x2;
    } else if (!_0x44d5ad) {
        _0x490533['angle'] = _0x3b0158 + Math['PI'] / 0x2;
    }
    const _0x47ad2d = _0x490533['x'] + _0x490533['width'] / 0x2 - _0x1c8d04['CAMERA']['width'] / 0x2;
    const _0x5b699e = _0x490533['y'] + _0x490533['height'] / 0x2 - _0x1c8d04['CAMERA']['height'] / 0x2;
    if (_0x1c8d04['CAMERA']['x'] === null || isNaN(_0x1c8d04['CAMERA']['x']) || !isFinite(_0x1c8d04['CAMERA']['x'])) {
        _0x1c8d04['CAMERA']['x'] = _0x47ad2d;
        _0x1c8d04['CAMERA']['y'] = _0x5b699e;
    } else {
        const _0x58d1e9 = 0x1 - Math['exp'](-Math['max'](0x0, _0x40be33) * 0x28);
        _0x1c8d04['CAMERA']['x'] += (_0x47ad2d - _0x1c8d04['CAMERA']['x']) * _0x58d1e9;
        _0x1c8d04['CAMERA']['y'] += (_0x5b699e - _0x1c8d04['CAMERA']['y']) * _0x58d1e9;
    }
    for (const _0x27e535 in _0xa47454) {
        const _0x3d19c5 = _0xa47454[_0x27e535];
        if (_0x3d19c5['renderX'] === undefined) {
            _0x3d19c5['renderX'] = _0x3d19c5['x'];
            _0x3d19c5['renderY'] = _0x3d19c5['y'];
            _0x3d19c5['renderAngle'] = _0x3d19c5['angle'] || 0x0;
        }
        const _0x8f5b32 = 0.25;
        const _0x5993cf = _0x3d19c5['x'] - _0x3d19c5['renderX'], _0x58d659 = _0x3d19c5['y'] - _0x3d19c5['renderY'];
        const _0xbf673b = Math['sqrt'](_0x5993cf * _0x5993cf + _0x58d659 * _0x58d659);
        const _0x495036 = 0xb4;
        if (_0xbf673b > _0x495036) {
            _0x3d19c5['renderX'] = _0x3d19c5['x'] - _0x5993cf / _0xbf673b * _0x495036;
            _0x3d19c5['renderY'] = _0x3d19c5['y'] - _0x58d659 / _0xbf673b * _0x495036;
        }
        _0x3d19c5['renderX'] += (_0x3d19c5['x'] - _0x3d19c5['renderX']) * _0x8f5b32;
        _0x3d19c5['renderY'] += (_0x3d19c5['y'] - _0x3d19c5['renderY']) * _0x8f5b32;
        let _0x459dfb = (_0x3d19c5['angle'] || 0x0) - _0x3d19c5['renderAngle'];
        while (_0x459dfb < -Math['PI'])
            _0x459dfb += Math['PI'] * 0x2;
        while (_0x459dfb > Math['PI'])
            _0x459dfb -= Math['PI'] * 0x2;
        _0x3d19c5['renderAngle'] += _0x459dfb * 0.3;
    }
    if (_0x1c8d04['GAME_STATE'] === 'NIGHT') {
        _0x326fcc = Math['min'](0.6, _0x326fcc + _0x40be33 * 0.5);
    } else {
        _0x326fcc = Math['max'](0x0, _0x326fcc - _0x40be33 * 0.5);
    }
    _0x4f6656();
    _0x936108();
}
function _0x197a4d(_0xdc50d6, _0x597fbc, _0x1e9b9f, _0x43b4e9, _0x1a8c28 = !![]) {
    _0xdc50d6['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x3f04f0 = _0xdc50d6['measureText'](_0x597fbc)['width'];
    const _0x59014a = _0x3f04f0 + 0x18;
    const _0x53616e = 0x1c;
    _0xdc50d6['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0xdc50d6['beginPath']();
    if (_0xdc50d6['roundRect']) {
        _0xdc50d6['roundRect'](_0x1e9b9f - _0x59014a / 0x2, _0x43b4e9 - _0x53616e, _0x59014a, _0x53616e, 0x6);
    } else {
        _0xdc50d6['rect'](_0x1e9b9f - _0x59014a / 0x2, _0x43b4e9 - _0x53616e, _0x59014a, _0x53616e);
    }
    _0xdc50d6['fill']();
    if (_0x1a8c28) {
        _0xdc50d6['beginPath']();
        _0xdc50d6['moveTo'](_0x1e9b9f - 0x6, _0x43b4e9);
        _0xdc50d6['lineTo'](_0x1e9b9f + 0x6, _0x43b4e9);
        _0xdc50d6['lineTo'](_0x1e9b9f, _0x43b4e9 + 0x6);
        _0xdc50d6['fill']();
    }
    _0xdc50d6['fillStyle'] = '#ffffff';
    _0xdc50d6['textAlign'] = 'center';
    _0xdc50d6['textBaseline'] = 'middle';
    _0xdc50d6['fillText'](_0x597fbc, _0x1e9b9f, _0x43b4e9 - _0x53616e / 0x2 + 0x1);
}
function _0x2a39fc(_0x1b81fe, _0x2608c9, _0x4a3e65, _0x5b4db0) {
    if (!_0x2608c9 || _0x2608c9['length'] === 0x0)
        return;
    let _0x4dd023 = _0x5b4db0;
    for (let _0x58d386 = 0x0; _0x58d386 < _0x2608c9['length']; _0x58d386++) {
        _0x197a4d(_0x1b81fe, _0x2608c9[_0x58d386]['text'], _0x4a3e65, _0x4dd023, _0x58d386 === 0x0);
        _0x4dd023 -= 0x24;
    }
}
function _0x308365() {
    if (!_0x1c8d04['SYSTEM']['isReady'])
        return;
    _0x1f5fd2['fillStyle'] = '#000000';
    _0x1f5fd2['fillRect'](0x0, 0x0, _0x3a3595['width'], _0x3a3595['height']);
    _0x1f5fd2['save']();
    try {
        _0x1f5fd2['scale'](_0x1c8d04['SYSTEM']['viewScale'], _0x1c8d04['SYSTEM']['viewScale']);
        _0x1f5fd2['imageSmoothingEnabled'] = ![];
        const _0x288967 = Math['floor'](_0x1c8d04['CAMERA']['x'] || 0x0);
        const _0xc02f73 = Math['floor'](_0x1c8d04['CAMERA']['y'] || 0x0);
        const _0x309ac6 = Math['max'](0x0, Math['floor'](_0x288967 / _0x1c8d04['MAP']['chunkSize']));
        const _0x386568 = Math['min'](_0x1c8d04['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x288967 + _0x1c8d04['CAMERA']['width']) / _0x1c8d04['MAP']['chunkSize']));
        const _0x43f7d9 = Math['max'](0x0, Math['floor'](_0xc02f73 / _0x1c8d04['MAP']['chunkSize']));
        const _0x133be6 = Math['min'](_0x1c8d04['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0xc02f73 + _0x1c8d04['CAMERA']['height']) / _0x1c8d04['MAP']['chunkSize']));
        for (let _0x44ecdf = _0x43f7d9; _0x44ecdf <= _0x133be6; _0x44ecdf++)
            for (let _0x2911f8 = _0x309ac6; _0x2911f8 <= _0x386568; _0x2911f8++) {
                const _0x1c8091 = _0x2911f8 * _0x1c8d04['MAP']['chunkSize'] - _0x288967;
                const _0x55f5ff = _0x44ecdf * _0x1c8d04['MAP']['chunkSize'] - _0xc02f73;
                _0x1f5fd2['drawImage'](_0x1c8d04['MAP']['bgChunks'][_0x44ecdf][_0x2911f8], _0x1c8091, _0x55f5ff, _0x1c8d04['MAP']['chunkSize'] + 0x1, _0x1c8d04['MAP']['chunkSize'] + 0x1);
            }
        if (_0x3b2929['complete'] && _0x3b2929['naturalWidth'] > 0x0) {
            const _0x15414e = _0x1c8d04['MAP']['tileSize'];
            const _0x549e0e = _0x15414e * 0xa;
            const _0xcc1ed5 = _0x1c8d04['MAP']['columns'] / 0x2 * _0x15414e - _0x549e0e / 0x2 - _0x288967;
            const _0x433463 = _0x1c8d04['MAP']['rows'] / 0x2 * _0x15414e - _0x549e0e / 0x2 - _0xc02f73;
            _0x1f5fd2['imageSmoothingEnabled'] = ![];
            _0x1f5fd2['drawImage'](_0x3b2929, _0xcc1ed5, _0x433463, _0x549e0e, _0x549e0e);
        }
        if (_0x590ead['complete'] && _0x590ead['naturalWidth'] > 0x0) {
            _0x1c8d04['ENTITIES']['forEach'](_0x185db8 => {
                if (_0x185db8['type'] !== 'table')
                    return;
                _0x1f5fd2['save']();
                _0x1f5fd2['imageSmoothingEnabled'] = ![];
                const _0x3a4355 = _0x590ead['naturalWidth'] >= _0x590ead['naturalHeight'];
                const _0x2717b3 = _0x185db8['w'] >= _0x185db8['h'];
                if (_0x3a4355 === _0x2717b3) {
                    _0x1f5fd2['drawImage'](_0x590ead, _0x185db8['x'] - _0x288967, _0x185db8['y'] - _0xc02f73, _0x185db8['w'], _0x185db8['h']);
                } else {
                    _0x1f5fd2['translate'](_0x185db8['x'] - _0x288967 + _0x185db8['w'] / 0x2, _0x185db8['y'] - _0xc02f73 + _0x185db8['h'] / 0x2);
                    _0x1f5fd2['rotate'](Math['PI'] / 0x2);
                    _0x1f5fd2['drawImage'](_0x590ead, -_0x185db8['h'] / 0x2, -_0x185db8['w'] / 0x2, _0x185db8['h'], _0x185db8['w']);
                }
                _0x1f5fd2['restore']();
            });
        } else {
            _0x1c8d04['ENTITIES']['forEach'](_0x308af6 => {
                if (_0x308af6['type'] !== 'table')
                    return;
                _0x1f5fd2['save']();
                _0x1f5fd2['fillStyle'] = '#6b4423';
                _0x1f5fd2['fillRect'](_0x308af6['x'] - _0x288967, _0x308af6['y'] - _0xc02f73, _0x308af6['w'], _0x308af6['h']);
                _0x1f5fd2['strokeStyle'] = '#422810';
                _0x1f5fd2['lineWidth'] = 0x3;
                _0x1f5fd2['strokeRect'](_0x308af6['x'] - _0x288967 + 0x1, _0x308af6['y'] - _0xc02f73 + 0x1, _0x308af6['w'] - 0x2, _0x308af6['h'] - 0x2);
                _0x1f5fd2['fillStyle'] = '#82532a';
                _0x1f5fd2['fillRect'](_0x308af6['x'] - _0x288967 + 0x4, _0x308af6['y'] - _0xc02f73 + 0x4, _0x308af6['w'] - 0x8, _0x308af6['h'] - 0x8);
                _0x1f5fd2['restore']();
            });
        }
        if (_0x1e068e) {
            for (let _0x3f15b7 = _0x43f7d9; _0x3f15b7 <= _0x133be6; _0x3f15b7++) {
                for (let _0x28ad99 = _0x309ac6; _0x28ad99 <= _0x386568; _0x28ad99++) {
                    const _0x2d471f = _0x28ad99 * _0x1c8d04['MAP']['chunkSize'] - _0x288967;
                    const _0x18e64b = _0x3f15b7 * _0x1c8d04['MAP']['chunkSize'] - _0xc02f73;
                    _0x1f5fd2['drawImage'](_0x1c8d04['MAP']['fgChunks'][_0x3f15b7][_0x28ad99], _0x2d471f, _0x18e64b, _0x1c8d04['MAP']['chunkSize'] + 0x1, _0x1c8d04['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x35eb73 = _0x1c8d04['GAME_STATE'] === 'NIGHT' && _0xf1d4e === 'Skinwalker' && !_0x490533['isDead'];
        const _0x1571a0 = _0x490533['x'] - _0x288967 + _0x490533['width'] / 0x2;
        const _0x444eb6 = _0x490533['y'] - _0xc02f73 + _0x490533['height'] / 0x2;
        const _0x323dbc = _0x490533['width'] * _0x490533['scale'] * 1.3;
        const _0x172ca4 = _0x490533['height'] * _0x490533['scale'] * 1.3;
        for (const _0x2bddc9 in _0xa47454) {
            const _0x1f1f0f = _0xa47454[_0x2bddc9];
            if (_0x1f1f0f['isDead'])
                continue;
            const _0x13e3c1 = (_0x1f1f0f['renderX'] ?? _0x1f1f0f['x']) - _0x288967 + _0x1f1f0f['width'] / 0x2;
            const _0x34d97f = (_0x1f1f0f['renderY'] ?? _0x1f1f0f['y']) - _0xc02f73 + _0x1f1f0f['height'] / 0x2;
            const _0x16004d = Math['min'](0x2, Math['max'](0.3, _0x1f1f0f['scale'] || 0x1));
            const _0x6e1c94 = _0x1f1f0f['width'] * _0x16004d * 1.3;
            const _0x34330b = _0x1f1f0f['height'] * _0x16004d * 1.3;
            _0x1f5fd2['save']();
            try {
                _0x1f5fd2['translate'](_0x13e3c1, _0x34d97f);
                _0x1f5fd2['rotate'](_0x1f1f0f['renderAngle'] ?? 0x0);
                if (_0x1f1f0f['isDark'])
                    _0x1f5fd2['filter'] = 'brightness(0)';
                _0x2a12bd(_0x1f5fd2, _0x1f1f0f['body'], _0x1f1f0f['eyes'], _0x6e1c94, _0x34330b);
                if (_0x761e50['has'](parseInt(_0x2bddc9)) && _0x266458['complete'] && _0x266458['naturalWidth'] > 0x0) {
                    _0x1f5fd2['drawImage'](_0x266458, -_0x6e1c94 / 0x2, -_0x34330b / 0x2, _0x6e1c94, _0x34330b);
                }
                if (_0x1f1f0f['isDark'])
                    _0x1f5fd2['filter'] = 'none';
            } finally {
                _0x1f5fd2['restore']();
            }
            if (!_0x551998((_0x1f1f0f['renderX'] ?? _0x1f1f0f['x']) + _0x1f1f0f['width'] / 0x2, (_0x1f1f0f['renderY'] ?? _0x1f1f0f['y']) + _0x1f1f0f['height'] / 0x2)) {
                _0x1f5fd2['textAlign'] = 'center';
                _0x1f5fd2['lineJoin'] = 'round';
                _0x1f5fd2['lineWidth'] = 0x3;
                _0x1f5fd2['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1f5fd2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x1f5fd2['fillStyle'] = _0x761e50['has'](parseInt(_0x2bddc9)) ? '#cc88ff' : '#ffffff';
                const _0x22d377 = _0x1f1f0f['isDark'] ? '???' : _0x1f1f0f['name'] + (_0x1f1f0f['isOwner'] ? '\x20[🗝️]' : '');
                _0x1f5fd2['strokeText'](_0x22d377, _0x13e3c1, _0x34d97f - _0x34330b / 0x2 - 0x10);
                _0x1f5fd2['fillText'](_0x22d377, _0x13e3c1, _0x34d97f - _0x34330b / 0x2 - 0x10);
            }
        }
        if (!_0x490533['isDead']) {
            _0x1f5fd2['save']();
            try {
                _0x1f5fd2['translate'](_0x1571a0, _0x444eb6);
                _0x1f5fd2['rotate'](_0x490533['angle']);
                if (_0x35eb73)
                    _0x1f5fd2['filter'] = 'brightness(0)';
                _0x2a12bd(_0x1f5fd2, _0x42b4cf, _0x14fc19, _0x323dbc, _0x172ca4);
                if (_0x761e50['has'](_0x1fd455) && _0x266458['complete'] && _0x266458['naturalWidth'] > 0x0) {
                    _0x1f5fd2['drawImage'](_0x266458, -_0x323dbc / 0x2, -_0x172ca4 / 0x2, _0x323dbc, _0x172ca4);
                }
                if (_0x35eb73)
                    _0x1f5fd2['filter'] = 'none';
            } finally {
                _0x1f5fd2['restore']();
            }
            if (!_0x551998(_0x490533['x'] + _0x490533['width'] / 0x2, _0x490533['y'] + _0x490533['height'] / 0x2)) {
                _0x1f5fd2['textAlign'] = 'center';
                _0x1f5fd2['lineJoin'] = 'round';
                _0x1f5fd2['lineWidth'] = 0x3;
                _0x1f5fd2['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1f5fd2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x1f5fd2['fillStyle'] = _0x761e50['has'](_0x1fd455) ? '#cc88ff' : '#ffffff';
                const _0x5df850 = _0x35eb73 ? '???' : _0x5cd5d1 + (_0x5b920c ? '\x20[🗝️]' : '');
                _0x1f5fd2['strokeText'](_0x5df850, _0x1571a0, _0x444eb6 - _0x172ca4 / 0x2 - 0x10);
                _0x1f5fd2['fillText'](_0x5df850, _0x1571a0, _0x444eb6 - _0x172ca4 / 0x2 - 0x10);
            }
        }
        for (const _0x28eb00 of _0x1c8d04['ENTITIES']) {
            if (_0x28eb00['type'] !== 'npc')
                continue;
            const _0x227ce8 = _0x28eb00['x'] - _0x288967 + _0x28eb00['w'] / 0x2;
            const _0x335d17 = _0x28eb00['y'] - _0xc02f73 + _0x28eb00['h'] / 0x2;
            const _0x2ce415 = _0x28eb00['w'] * 0.65;
            const _0x3bc698 = _0x28eb00['h'] * 0.65;
            _0x1f5fd2['save']();
            _0x1f5fd2['translate'](_0x227ce8, _0x335d17);
            _0x1f5fd2['rotate'](_0x28eb00['angle'] !== undefined ? _0x28eb00['angle'] : 0x0);
            _0x2a12bd(_0x1f5fd2, _0x28eb00['body'] || 'yanito932.png', _0x28eb00['eyes'], _0x2ce415, _0x3bc698);
            _0x1f5fd2['restore']();
            _0x1f5fd2['textAlign'] = 'center';
            _0x1f5fd2['lineJoin'] = 'round';
            _0x1f5fd2['lineWidth'] = 0x3;
            _0x1f5fd2['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x1f5fd2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x1f5fd2['fillStyle'] = '#aaaaaa';
            _0x1f5fd2['strokeText'](_0x28eb00['name'] || 'NPC', _0x227ce8, _0x335d17 - _0x3bc698 / 0x2 - 0x10);
            _0x1f5fd2['fillText'](_0x28eb00['name'] || 'NPC', _0x227ce8, _0x335d17 - _0x3bc698 / 0x2 - 0x10);
        }
        if (_0x1c8d04['MAP']['wallChunks'] && _0x1c8d04['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x373849 = _0x43f7d9; _0x373849 <= _0x133be6; _0x373849++)
                for (let _0x427039 = _0x309ac6; _0x427039 <= _0x386568; _0x427039++) {
                    if (!_0x1c8d04['MAP']['wallChunks'][_0x373849] || !_0x1c8d04['MAP']['wallChunks'][_0x373849][_0x427039])
                        continue;
                    const _0xbc9aa6 = _0x427039 * _0x1c8d04['MAP']['chunkSize'] - _0x288967;
                    const _0x11bfc0 = _0x373849 * _0x1c8d04['MAP']['chunkSize'] - _0xc02f73;
                    _0x1f5fd2['drawImage'](_0x1c8d04['MAP']['wallChunks'][_0x373849][_0x427039], _0xbc9aa6, _0x11bfc0, _0x1c8d04['MAP']['chunkSize'] + 0x1, _0x1c8d04['MAP']['chunkSize'] + 0x1);
                }
        }
        if (_0x490533['isDead']) {
            for (const _0x51b8e9 in _0xa47454) {
                const _0x16a86b = _0xa47454[_0x51b8e9];
                if (!_0x16a86b['isDead'])
                    continue;
                const _0x2fba90 = (_0x16a86b['renderX'] ?? _0x16a86b['x']) - _0x288967 + _0x16a86b['width'] / 0x2;
                const _0x4b45de = (_0x16a86b['renderY'] ?? _0x16a86b['y']) - _0xc02f73 + _0x16a86b['height'] / 0x2;
                const _0x12d24b = _0x16a86b['width'] * (_0x16a86b['scale'] || 0x1) * 1.3;
                const _0x53ba11 = _0x16a86b['height'] * (_0x16a86b['scale'] || 0x1) * 1.3;
                _0x1f5fd2['save']();
                try {
                    _0x1f5fd2['translate'](_0x2fba90, _0x4b45de);
                    _0x1f5fd2['rotate'](_0x16a86b['renderAngle'] ?? 0x0);
                    _0x1f5fd2['globalAlpha'] = 0.3;
                    _0x2a12bd(_0x1f5fd2, _0x16a86b['body'], _0x16a86b['eyes'], _0x12d24b, _0x53ba11);
                } finally {
                    _0x1f5fd2['restore']();
                }
                if (!_0x551998((_0x16a86b['renderX'] ?? _0x16a86b['x']) + _0x16a86b['width'] / 0x2, (_0x16a86b['renderY'] ?? _0x16a86b['y']) + _0x16a86b['height'] / 0x2)) {
                    _0x1f5fd2['save']();
                    _0x1f5fd2['globalAlpha'] = 0.3;
                    _0x1f5fd2['textAlign'] = 'center';
                    _0x1f5fd2['lineJoin'] = 'round';
                    _0x1f5fd2['lineWidth'] = 0x3;
                    _0x1f5fd2['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x1f5fd2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x1f5fd2['fillStyle'] = '#ffffff';
                    const _0x59e6a5 = _0x16a86b['name'] + (_0x16a86b['isOwner'] ? '\x20[🗝️]' : '');
                    _0x1f5fd2['strokeText'](_0x59e6a5, _0x2fba90, _0x4b45de - _0x53ba11 / 0x2 - 0x10);
                    _0x1f5fd2['fillText'](_0x59e6a5, _0x2fba90, _0x4b45de - _0x53ba11 / 0x2 - 0x10);
                    _0x1f5fd2['restore']();
                }
            }
            _0x1f5fd2['save']();
            try {
                _0x1f5fd2['translate'](_0x1571a0, _0x444eb6);
                _0x1f5fd2['rotate'](_0x490533['angle']);
                _0x1f5fd2['globalAlpha'] = 0.3;
                _0x2a12bd(_0x1f5fd2, _0x42b4cf, _0x14fc19, _0x323dbc, _0x172ca4);
            } finally {
                _0x1f5fd2['restore']();
            }
            if (!_0x551998(_0x490533['x'] + _0x490533['width'] / 0x2, _0x490533['y'] + _0x490533['height'] / 0x2)) {
                _0x1f5fd2['save']();
                _0x1f5fd2['globalAlpha'] = 0.3;
                _0x1f5fd2['textAlign'] = 'center';
                _0x1f5fd2['lineJoin'] = 'round';
                _0x1f5fd2['lineWidth'] = 0x3;
                _0x1f5fd2['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1f5fd2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x1f5fd2['fillStyle'] = '#ffffff';
                const _0x2891d6 = _0x5cd5d1 + (_0x5b920c ? '\x20[🗝️]' : '');
                _0x1f5fd2['strokeText'](_0x2891d6, _0x1571a0, _0x444eb6 - _0x172ca4 / 0x2 - 0x10);
                _0x1f5fd2['fillText'](_0x2891d6, _0x1571a0, _0x444eb6 - _0x172ca4 / 0x2 - 0x10);
                _0x1f5fd2['restore']();
            }
        }
        for (let _0x27731c = _0x43f7d9; _0x27731c <= _0x133be6; _0x27731c++)
            for (let _0x245a41 = _0x309ac6; _0x245a41 <= _0x386568; _0x245a41++) {
                const _0x23a7ca = _0x245a41 * _0x1c8d04['MAP']['chunkSize'] - _0x288967;
                const _0x577a7f = _0x27731c * _0x1c8d04['MAP']['chunkSize'] - _0xc02f73;
                _0x1f5fd2['drawImage'](_0x1c8d04['MAP']['fgChunks'][_0x27731c][_0x245a41], _0x23a7ca, _0x577a7f, _0x1c8d04['MAP']['chunkSize'] + 0x1, _0x1c8d04['MAP']['chunkSize'] + 0x1);
            }
        if (_0x1c8d04['EDITOR']['enabled'] && _0x1c8d04['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x30f0fa = _0x1c8d04['INPUTS']['mouseX'] / _0x1c8d04['SYSTEM']['viewScale'] + _0x1c8d04['CAMERA']['x'];
            const _0x5bdbc6 = _0x1c8d04['INPUTS']['mouseY'] / _0x1c8d04['SYSTEM']['viewScale'] + _0x1c8d04['CAMERA']['y'];
            const _0x5afaa8 = Math['floor'](_0x30f0fa / _0x1c8d04['MAP']['tileSize']);
            const _0x9f997f = Math['floor'](_0x5bdbc6 / _0x1c8d04['MAP']['tileSize']);
            if (_0x5afaa8 >= 0x0 && _0x5afaa8 < _0x1c8d04['MAP']['columns'] && _0x9f997f >= 0x0 && _0x9f997f < _0x1c8d04['MAP']['rows']) {
                const _0x4ef71c = _0x5afaa8 * _0x1c8d04['MAP']['tileSize'] - _0x288967;
                const _0x21939e = _0x9f997f * _0x1c8d04['MAP']['tileSize'] - _0xc02f73;
                _0x1f5fd2['save']();
                _0x1f5fd2['globalAlpha'] = 0.5;
                if (_0x1c8d04['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x55b5f3 = _0x1c8d04['EDITOR']['selectedTileGid'] - 0x1;
                    _0x1f5fd2['drawImage'](_0x4462a4, _0x55b5f3 % _0x1c8d04['MAP']['tilesetCols'] * _0x1c8d04['MAP']['tileSize'], Math['floor'](_0x55b5f3 / _0x1c8d04['MAP']['tilesetCols']) * _0x1c8d04['MAP']['tileSize'], _0x1c8d04['MAP']['tileSize'], _0x1c8d04['MAP']['tileSize'], _0x4ef71c, _0x21939e, _0x1c8d04['MAP']['tileSize'], _0x1c8d04['MAP']['tileSize']);
                } else {
                    _0x1f5fd2['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x1f5fd2['fillRect'](_0x4ef71c, _0x21939e, _0x1c8d04['MAP']['tileSize'], _0x1c8d04['MAP']['tileSize']);
                }
                _0x1f5fd2['restore']();
            }
        }
        _0x37f753(_0x1f5fd2, _0x288967, _0xc02f73);
        if (_0x326fcc > 0x0) {
            _0x1f5fd2['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x326fcc + ')';
            _0x1f5fd2['fillRect'](0x0, 0x0, _0x1c8d04['CAMERA']['width'], _0x1c8d04['CAMERA']['height']);
        }
        for (const _0x472101 in _0xa47454) {
            const _0x10efd6 = _0xa47454[_0x472101];
            if (_0x10efd6['isDead'] && !_0x490533['isDead'])
                continue;
            const _0x326963 = (_0x10efd6['renderX'] ?? _0x10efd6['x']) - _0x288967 + _0x10efd6['width'] / 0x2;
            const _0xb5a45a = (_0x10efd6['renderY'] ?? _0x10efd6['y']) - _0xc02f73 + _0x10efd6['height'] / 0x2;
            _0x2a39fc(_0x1f5fd2, _0x10efd6['chats'], _0x326963, _0xb5a45a - _0x10efd6['height'] / 0x2 - 0x20);
        }
        _0x2a39fc(_0x1f5fd2, _0x490533['chats'], _0x1571a0, _0x444eb6 - _0x490533['height'] / 0x2 - 0x20);
    } finally {
        _0x1f5fd2['restore']();
    }
}
function _0x1899f2(_0x452a55) {
    if (!_0x1c8d04['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x1899f2);
    let _0x533577 = (_0x452a55 - _0x1c8d04['SYSTEM']['lastTime']) / 0x3e8;
    _0x1c8d04['SYSTEM']['lastTime'] = _0x452a55;
    if (_0x533577 > 0.1)
        _0x533577 = 0.1;
    if (_0x533577 < 0x0 || isNaN(_0x533577))
        _0x533577 = 0.016;
    if (_0x1e068e) {
        _0x1499a7(_0x533577);
        _0x308365();
        return;
    }
    if (!_0x1fd455)
        return;
    _0x3a614b(_0x533577);
    _0x7dd38e['tick'](_0x452a55);
    _0x308365();
}
function _0xc9a40e() {
    const _0x56cec7 = Math['ceil'](_0x1c8d04['MAP']['columns'] * _0x1c8d04['MAP']['tileSize'] / _0x1c8d04['MAP']['chunkSize']);
    const _0x585e96 = Math['ceil'](_0x1c8d04['MAP']['rows'] * _0x1c8d04['MAP']['tileSize'] / _0x1c8d04['MAP']['chunkSize']);
    _0x1c8d04['MAP']['bgChunks'] = [];
    _0x1c8d04['MAP']['fgChunks'] = [];
    _0x1c8d04['MAP']['wallChunks'] = [];
    for (let _0x2ec491 = 0x0; _0x2ec491 < _0x585e96; _0x2ec491++) {
        _0x1c8d04['MAP']['bgChunks'][_0x2ec491] = [];
        _0x1c8d04['MAP']['fgChunks'][_0x2ec491] = [];
        _0x1c8d04['MAP']['wallChunks'][_0x2ec491] = [];
        for (let _0xff9f51 = 0x0; _0xff9f51 < _0x56cec7; _0xff9f51++) {
            const _0x5c5ff2 = document['createElement']('canvas');
            _0x5c5ff2['width'] = _0x5c5ff2['height'] = _0x1c8d04['MAP']['chunkSize'];
            const _0x299e72 = document['createElement']('canvas');
            _0x299e72['width'] = _0x299e72['height'] = _0x1c8d04['MAP']['chunkSize'];
            const _0x1b9583 = document['createElement']('canvas');
            _0x1b9583['width'] = _0x1b9583['height'] = _0x1c8d04['MAP']['chunkSize'];
            _0x1c8d04['MAP']['bgChunks'][_0x2ec491][_0xff9f51] = _0x5c5ff2;
            _0x1c8d04['MAP']['fgChunks'][_0x2ec491][_0xff9f51] = _0x299e72;
            _0x1c8d04['MAP']['wallChunks'][_0x2ec491][_0xff9f51] = _0x1b9583;
            _0x317989(_0xff9f51, _0x2ec491);
        }
    }
}
function _0x317989(_0x42a206, _0x42b835) {
    const _0x4d2ea9 = _0x1c8d04['MAP']['bgChunks'][_0x42b835][_0x42a206]['getContext']('2d', { 'alpha': !![] });
    const _0x15964c = _0x1c8d04['MAP']['fgChunks'][_0x42b835][_0x42a206]['getContext']('2d', { 'alpha': !![] });
    const _0x57fad4 = _0x1c8d04['MAP']['wallChunks'][_0x42b835] && _0x1c8d04['MAP']['wallChunks'][_0x42b835][_0x42a206] ? _0x1c8d04['MAP']['wallChunks'][_0x42b835][_0x42a206]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x4d2ea9['imageSmoothingEnabled'] = _0x15964c['imageSmoothingEnabled'] = ![];
    if (_0x57fad4)
        _0x57fad4['imageSmoothingEnabled'] = ![];
    _0x4d2ea9['clearRect'](0x0, 0x0, _0x1c8d04['MAP']['chunkSize'], _0x1c8d04['MAP']['chunkSize']);
    _0x15964c['clearRect'](0x0, 0x0, _0x1c8d04['MAP']['chunkSize'], _0x1c8d04['MAP']['chunkSize']);
    if (_0x57fad4)
        _0x57fad4['clearRect'](0x0, 0x0, _0x1c8d04['MAP']['chunkSize'], _0x1c8d04['MAP']['chunkSize']);
    const _0x1fec7f = Math['floor'](_0x42a206 * _0x1c8d04['MAP']['chunkSize'] / _0x1c8d04['MAP']['tileSize']);
    const _0x1c25fe = Math['ceil']((_0x42a206 + 0x1) * _0x1c8d04['MAP']['chunkSize'] / _0x1c8d04['MAP']['tileSize']);
    const _0x3872d8 = Math['floor'](_0x42b835 * _0x1c8d04['MAP']['chunkSize'] / _0x1c8d04['MAP']['tileSize']);
    const _0x5693f6 = Math['ceil']((_0x42b835 + 0x1) * _0x1c8d04['MAP']['chunkSize'] / _0x1c8d04['MAP']['tileSize']);
    const _0x1d15b3 = 0.5;
    const _0xad39e6 = _0x1c8d04['MAP']['tileSize'] - _0x1d15b3 * 0x2;
    _0x1c8d04['MAP']['layers']['forEach'](_0x45dfe6 => {
        const _0x225ce7 = _0x45dfe6['name'] === 'walls';
        const _0x58132f = _0x45dfe6['name'] === 'trees' ? _0x15964c : _0x225ce7 ? _0x57fad4 || _0x4d2ea9 : _0x4d2ea9;
        for (let _0x38f823 = Math['max'](0x0, _0x3872d8); _0x38f823 < Math['min'](_0x1c8d04['MAP']['rows'], _0x5693f6); _0x38f823++) {
            for (let _0x246c26 = Math['max'](0x0, _0x1fec7f); _0x246c26 < Math['min'](_0x1c8d04['MAP']['columns'], _0x1c25fe); _0x246c26++) {
                let _0x38e8c1 = _0x45dfe6['data'][_0x38f823 * _0x1c8d04['MAP']['columns'] + _0x246c26];
                if (_0x45dfe6['name'] === 'floor2' && _0x1c8d04['MAP']['doors'] && _0x1c8d04['MAP']['doors'][_0x38f823 * _0x1c8d04['MAP']['columns'] + _0x246c26]) {
                    _0x38e8c1 = 0x2;
                }
                if (_0x38e8c1 > 0x0) {
                    const _0x43d746 = _0x38e8c1 - 0x1;
                    const _0x585f2c = _0x43d746 % _0x1c8d04['MAP']['tilesetCols'] * _0x1c8d04['MAP']['tileSize'] + _0x1d15b3;
                    const _0x4980fe = Math['floor'](_0x43d746 / _0x1c8d04['MAP']['tilesetCols']) * _0x1c8d04['MAP']['tileSize'] + _0x1d15b3;
                    const _0x669d28 = _0x246c26 * _0x1c8d04['MAP']['tileSize'] - _0x42a206 * _0x1c8d04['MAP']['chunkSize'];
                    const _0x268150 = _0x38f823 * _0x1c8d04['MAP']['tileSize'] - _0x42b835 * _0x1c8d04['MAP']['chunkSize'];
                    if (_0x38e8c1 === 0x4) {
                        const _0x2ebc24 = 0x1;
                        const _0x49ae18 = _0x2ebc24 % _0x1c8d04['MAP']['tilesetCols'] * _0x1c8d04['MAP']['tileSize'] + _0x1d15b3;
                        const _0x3d9110 = Math['floor'](_0x2ebc24 / _0x1c8d04['MAP']['tilesetCols']) * _0x1c8d04['MAP']['tileSize'] + _0x1d15b3;
                        _0x4d2ea9['drawImage'](_0x4462a4, _0x49ae18, _0x3d9110, _0xad39e6, _0xad39e6, _0x669d28, _0x268150, _0x1c8d04['MAP']['tileSize'], _0x1c8d04['MAP']['tileSize']);
                        let _0x146519 = _0x1c8d04['MAP']['doors'] ? _0x1c8d04['MAP']['doors'][_0x38f823 * _0x1c8d04['MAP']['columns'] + _0x246c26] : null;
                        if (!_0x146519) {
                            const _0x94e854 = _0x1c8d04['MAP']['layers']['find'](_0x87b917 => _0x87b917['name'] === 'walls');
                            const _0x209a6c = _0x38f823 > 0x0 && _0x94e854 && _0x94e854['data'][(_0x38f823 - 0x1) * _0x1c8d04['MAP']['columns'] + _0x246c26] > 0x0;
                            const _0x2956fe = _0x38f823 < _0x1c8d04['MAP']['rows'] - 0x1 && _0x94e854 && _0x94e854['data'][(_0x38f823 + 0x1) * _0x1c8d04['MAP']['columns'] + _0x246c26] > 0x0;
                            const _0x4b4a20 = _0x246c26 > 0x0 && _0x94e854 && _0x94e854['data'][_0x38f823 * _0x1c8d04['MAP']['columns'] + _0x246c26 - 0x1] > 0x0;
                            const _0x38a384 = _0x246c26 < _0x1c8d04['MAP']['columns'] - 0x1 && _0x94e854 && _0x94e854['data'][_0x38f823 * _0x1c8d04['MAP']['columns'] + _0x246c26 + 0x1] > 0x0;
                            if (_0x4b4a20 && _0x38a384)
                                _0x146519 = _0x38f823 < _0x1c8d04['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x209a6c && _0x2956fe)
                                _0x146519 = _0x246c26 < _0x1c8d04['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x1d53f0 = 0x0;
                        if (_0x146519 === 'bottom')
                            _0x1d53f0 = Math['PI'] / 0x2;
                        else if (_0x146519 === 'left')
                            _0x1d53f0 = Math['PI'];
                        else if (_0x146519 === 'top')
                            _0x1d53f0 = -Math['PI'] / 0x2;
                        else if (_0x146519 === 'right')
                            _0x1d53f0 = 0x0;
                        if (_0x1d53f0 !== 0x0) {
                            _0x58132f['save']();
                            _0x58132f['translate'](_0x669d28 + _0x1c8d04['MAP']['tileSize'] / 0x2, _0x268150 + _0x1c8d04['MAP']['tileSize'] / 0x2);
                            _0x58132f['rotate'](_0x1d53f0);
                            _0x58132f['drawImage'](_0x4462a4, _0x585f2c, _0x4980fe, _0xad39e6, _0xad39e6, -_0x1c8d04['MAP']['tileSize'] / 0x2, -_0x1c8d04['MAP']['tileSize'] / 0x2, _0x1c8d04['MAP']['tileSize'], _0x1c8d04['MAP']['tileSize']);
                            _0x58132f['restore']();
                        } else {
                            _0x58132f['drawImage'](_0x4462a4, _0x585f2c, _0x4980fe, _0xad39e6, _0xad39e6, _0x669d28, _0x268150, _0x1c8d04['MAP']['tileSize'], _0x1c8d04['MAP']['tileSize']);
                        }
                    } else {
                        _0x58132f['drawImage'](_0x4462a4, _0x585f2c, _0x4980fe, _0xad39e6, _0xad39e6, _0x669d28, _0x268150, _0x1c8d04['MAP']['tileSize'], _0x1c8d04['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x42d501() {
    _0x4462a4['crossOrigin'] = 'Anonymous';
    _0x4462a4['onload'] = () => {
        _0x1c8d04['MAP']['tilesetCols'] = 0x3;
        _0x1a5450();
    };
    _0x4462a4['onerror'] = () => {
        _0x1c8d04['MAP']['tilesetCols'] = 0x1;
        _0x1a5450();
    };
    _0x4462a4['src'] = 'assets/tilesheet.png';
    _0x3b2929['crossOrigin'] = 'Anonymous';
    _0x3b2929['onload'] = _0x1a5450;
    _0x3b2929['onerror'] = () => {
        _0x1a5450();
    };
    _0x3b2929['src'] = 'assets/center.png';
    _0x590ead['crossOrigin'] = 'Anonymous';
    _0x590ead['onload'] = _0x1a5450;
    _0x590ead['onerror'] = () => {
        _0x1a5450();
    };
    _0x590ead['src'] = 'assets/table.png';
}
function _0x1a5450() {
    _0x1c8d04['SYSTEM']['assetsLoaded']++;
    if (_0x1c8d04['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0xbe1c28();
    }
}
function _0x3c47d3(_0x1da652, _0x3b3680) {
    if (!_0x5b920c || !_0x27e598)
        return;
    const _0x5e321d = _0x1da652 / _0x1c8d04['SYSTEM']['viewScale'] + _0x1c8d04['CAMERA']['x'];
    const _0x3c84c9 = _0x3b3680 / _0x1c8d04['SYSTEM']['viewScale'] + _0x1c8d04['CAMERA']['y'];
    const _0x59d70b = Math['floor'](_0x5e321d / _0x1c8d04['MAP']['tileSize']);
    const _0x1c3922 = Math['floor'](_0x3c84c9 / _0x1c8d04['MAP']['tileSize']);
    if (_0x59d70b >= 0x0 && _0x59d70b < _0x1c8d04['MAP']['columns'] && _0x1c3922 >= 0x0 && _0x1c3922 < _0x1c8d04['MAP']['rows'])
        _0x27e598['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x1c8d04['EDITOR']['selectedLayer'],
            'col': _0x59d70b,
            'row': _0x1c3922,
            'gid': _0x1c8d04['EDITOR']['selectedTileGid']
        }));
}
function _0x1b7f62() {
    const _0x3ed05c = document['getElementById']('palette');
    if (!_0x3ed05c || _0x3ed05c['children']['length'] > 0x0)
        return;
    const _0x56fa68 = 0x40;
    const _0x2e8cef = _0x4462a4;
    const _0x52ca2c = document['createElement']('div');
    _0x52ca2c['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x3211b4 = document['createElement']('canvas');
    _0x3211b4['width'] = 0xc0;
    _0x3211b4['height'] = 0xa0;
    _0x3211b4['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x52ca2c['appendChild'](_0x3211b4);
    const _0x168f9c = document['createElement']('div');
    _0x168f9c['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x52ca2c['appendChild'](_0x168f9c);
    let _0x515b8f = 0x0, _0x26632c = 0x0;
    let _0x453817 = ![], _0x41d208 = 0x0, _0x26c661 = 0x0, _0x4a1fba = 0x0, _0x104fdf = 0x0;
    function _0x29b802() {
        const _0x329052 = _0x3211b4['getContext']('2d');
        _0x329052['clearRect'](0x0, 0x0, _0x3211b4['width'], _0x3211b4['height']);
        _0x329052['imageSmoothingEnabled'] = ![];
        if (_0x2e8cef['complete'] && _0x2e8cef['naturalWidth'] > 0x0) {
            _0x329052['drawImage'](_0x2e8cef, _0x515b8f, _0x26632c, _0x3211b4['width'], _0x3211b4['height'], 0x0, 0x0, _0x3211b4['width'], _0x3211b4['height']);
        }
        _0x329052['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x329052['lineWidth'] = 0x1;
        const _0x1823e8 = Math['floor'](_0x515b8f / _0x56fa68);
        const _0x52da4e = Math['floor'](_0x26632c / _0x56fa68);
        for (let _0x3589d8 = _0x1823e8; _0x3589d8 <= _0x1823e8 + Math['ceil'](_0x3211b4['width'] / _0x56fa68) + 0x1; _0x3589d8++) {
            const _0x26c442 = _0x3589d8 * _0x56fa68 - _0x515b8f;
            _0x329052['beginPath']();
            _0x329052['moveTo'](_0x26c442, 0x0);
            _0x329052['lineTo'](_0x26c442, _0x3211b4['height']);
            _0x329052['stroke']();
        }
        for (let _0x2c2d86 = _0x52da4e; _0x2c2d86 <= _0x52da4e + Math['ceil'](_0x3211b4['height'] / _0x56fa68) + 0x1; _0x2c2d86++) {
            const _0xb9a478 = _0x2c2d86 * _0x56fa68 - _0x26632c;
            _0x329052['beginPath']();
            _0x329052['moveTo'](0x0, _0xb9a478);
            _0x329052['lineTo'](_0x3211b4['width'], _0xb9a478);
            _0x329052['stroke']();
        }
    }
    function _0x153a1f() {
        const _0x5cad9e = Math['max'](0x1, Math['ceil'](_0x2e8cef['naturalWidth'] / _0x56fa68));
        const _0x267c8b = _0x1c8d04['EDITOR']['selectedTileGid'];
        if (_0x267c8b <= 0x0) {
            _0x168f9c['style']['display'] = 'none';
            return;
        }
        const _0x337b48 = _0x267c8b - 0x1;
        const _0x49befb = _0x337b48 % _0x5cad9e;
        const _0x349151 = Math['floor'](_0x337b48 / _0x5cad9e);
        const _0x4c16a9 = _0x49befb * _0x56fa68 - _0x515b8f;
        const _0x29b0a6 = _0x349151 * _0x56fa68 - _0x26632c;
        _0x168f9c['style']['display'] = 'block';
        _0x168f9c['style']['left'] = _0x4c16a9 + 'px';
        _0x168f9c['style']['top'] = _0x29b0a6 + 'px';
    }
    _0x2e8cef['onload'] = () => {
        _0x29b802();
        _0x153a1f();
    };
    if (_0x2e8cef['complete'] && _0x2e8cef['naturalWidth'] > 0x0) {
        _0x29b802();
        _0x153a1f();
    }
    _0x52ca2c['addEventListener']('mousedown', _0x484617 => {
        if (_0x484617['button'] === 0x0) {
            _0x453817 = !![];
            _0x41d208 = _0x484617['clientX'];
            _0x26c661 = _0x484617['clientY'];
            _0x4a1fba = _0x515b8f;
            _0x104fdf = _0x26632c;
            _0x52ca2c['style']['cursor'] = 'grabbing';
            _0x484617['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x49d6c9 => {
        if (!_0x453817)
            return;
        const _0x521309 = _0x41d208 - _0x49d6c9['clientX'];
        const _0x4bef5f = _0x26c661 - _0x49d6c9['clientY'];
        const _0x2ba8d7 = Math['max'](0x0, _0x2e8cef['naturalWidth'] - _0x3211b4['width']);
        const _0x5c0748 = Math['max'](0x0, _0x2e8cef['naturalHeight'] - _0x3211b4['height']);
        _0x515b8f = Math['max'](0x0, Math['min'](_0x2ba8d7, _0x4a1fba + _0x521309));
        _0x26632c = Math['max'](0x0, Math['min'](_0x5c0748, _0x104fdf + _0x4bef5f));
        _0x29b802();
        _0x153a1f();
    });
    window['addEventListener']('mouseup', _0x240145 => {
        if (_0x453817) {
            _0x453817 = ![];
            _0x52ca2c['style']['cursor'] = 'grab';
        }
    });
    _0x52ca2c['addEventListener']('click', _0x44b31c => {
        const _0x2e113f = _0x52ca2c['getBoundingClientRect']();
        const _0x1ad726 = _0x44b31c['clientX'] - _0x2e113f['left'] + _0x515b8f;
        const _0x394e52 = _0x44b31c['clientY'] - _0x2e113f['top'] + _0x26632c;
        const _0x3adbfb = Math['max'](0x1, Math['ceil'](_0x2e8cef['naturalWidth'] / _0x56fa68));
        const _0x29d80a = Math['floor'](_0x1ad726 / _0x56fa68);
        const _0x2eff16 = Math['floor'](_0x394e52 / _0x56fa68);
        const _0x57797a = _0x2eff16 * _0x3adbfb + _0x29d80a + 0x1;
        _0x1c8d04['EDITOR']['selectedTileGid'] = _0x57797a;
        _0x153a1f();
    });
    _0x3ed05c['appendChild'](_0x52ca2c);
    const _0x257ba0 = document['createElement']('div');
    _0x257ba0['className'] = 'tile-btn\x20eraser-btn';
    _0x257ba0['title'] = 'Eraser\x20(gid\x200)';
    _0x257ba0['onclick'] = () => {
        _0x1c8d04['EDITOR']['selectedTileGid'] = 0x0;
        _0x168f9c['style']['display'] = 'none';
    };
    _0x3ed05c['appendChild'](_0x257ba0);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x1c8d04['EDITOR']['enabled'] = !_0x1c8d04['EDITOR']['enabled'];
        const _0x25f4b3 = document['getElementById']('editor-tools');
        if (_0x1c8d04['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x25f4b3['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x25f4b3['style']['display'] = 'none';
        }
    });
    const _0x352335 = document['getElementById']('start-game-btn');
    if (_0x352335) {
        _0x352335['addEventListener']('click', () => {
            if (_0x27e598)
                _0x27e598['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x2fa852 = document['getElementById']('rolelist-toggle-btn');
    if (_0x2fa852) {
        let _0x394b7 = 'subalignments';
        _0x2fa852['addEventListener']('click', () => {
            if (_0x394b7 === 'subalignments')
                _0x394b7 = 'precise';
            else if (_0x394b7 === 'precise')
                _0x394b7 = 'off';
            else
                _0x394b7 = 'subalignments';
            _0x2fa852['innerText'] = 'Role\x20List:\x20' + _0x394b7['charAt'](0x0)['toUpperCase']() + _0x394b7['slice'](0x1);
            if (_0x27e598)
                _0x27e598['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x394b7
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0xa975f9 => {
        if (_0xa975f9['id'] === 'editor-toggle-btn' || _0xa975f9['id'] === 'start-game-btn' || _0xa975f9['id'] === 'rolelist-toggle-btn')
            return;
        _0xa975f9['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x535f43 => _0x535f43['classList']['remove']('active'));
            _0xa975f9['classList']['add']('active');
            _0x1c8d04['EDITOR']['selectedLayer'] = _0xa975f9['dataset']['layer'];
        });
    });
}
function _0x191b00(_0x4cb177) {
    if (_0x27e598)
        _0x27e598['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x4cb177
        }));
}
function _0x15db17(_0xe23b11) {
    if (_0x27e598)
        _0x27e598['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0xe23b11
        }));
}
function _0x5ee055(_0x3fa702, _0x16ff64, _0x1007cb, _0x50cfe8) {
    const _0x41d7a8 = document['getElementById']('admin-panel');
    if (_0x41d7a8)
        _0x41d7a8['remove']();
    if (_0x41d7a8 && _0x41d7a8['dataset']['target'] === String(_0x3fa702))
        return;
    const _0x150573 = document['createElement']('div');
    _0x150573['id'] = 'admin-panel';
    _0x150573['dataset']['target'] = String(_0x3fa702);
    _0x150573['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0xc166f4 = document['createElement']('div');
    _0xc166f4['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0xc166f4['textContent'] = _0x16ff64;
    _0x150573['appendChild'](_0xc166f4);
    const _0x13a8e4 = document['createElement']('button');
    _0x13a8e4['textContent'] = 'Kick';
    _0x13a8e4['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x13a8e4['onmouseenter'] = () => _0x13a8e4['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x13a8e4['onmouseleave'] = () => _0x13a8e4['style']['background'] = 'transparent';
    _0x13a8e4['onclick'] = () => {
        _0x191b00(_0x3fa702);
        _0x150573['remove']();
    };
    _0x150573['appendChild'](_0x13a8e4);
    const _0x55e957 = document['createElement']('button');
    _0x55e957['textContent'] = 'Ban';
    _0x55e957['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x55e957['onmouseenter'] = () => _0x55e957['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x55e957['onmouseleave'] = () => _0x55e957['style']['background'] = 'transparent';
    _0x55e957['onclick'] = () => {
        _0x15db17(_0x3fa702);
        _0x150573['remove']();
    };
    _0x150573['appendChild'](_0x55e957);
    document['body']['appendChild'](_0x150573);
    const _0x2c2d9 = _0x150573['offsetWidth'] || 0x91;
    const _0x3ed2c2 = _0x150573['offsetHeight'] || 0x50;
    let _0x568355 = _0x1007cb - _0x2c2d9;
    let _0x14209e = _0x50cfe8;
    if (_0x568355 < 0x4)
        _0x568355 = _0x1007cb;
    if (_0x14209e + _0x3ed2c2 > window['innerHeight'] - 0x4)
        _0x14209e = window['innerHeight'] - _0x3ed2c2 - 0x4;
    _0x150573['style']['left'] = _0x568355 + 'px';
    _0x150573['style']['top'] = _0x14209e + 'px';
    const _0x3931b7 = _0x57b6d3 => {
        if (!_0x150573['contains'](_0x57b6d3['target'])) {
            _0x150573['remove']();
            document['removeEventListener']('mousedown', _0x3931b7);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x3931b7), 0x0);
}
function _0x41d3c7() {
    const _0x3e8426 = document['getElementById']('leaderboard-list');
    _0x3e8426['innerHTML'] = '';
    const _0x5eb584 = document['createElement']('div');
    _0x5eb584['className'] = 'leaderboard-entry';
    const _0x1689ea = document['createElement']('span');
    _0x1689ea['textContent'] = _0x5cd5d1 + (_0x5b920c ? '\x20[🗝️]' : '');
    if (_0x761e50['has'](_0x1fd455) && !_0x490533['isDead']) {
        _0x1689ea['style']['color'] = '#cc88ff';
    }
    _0x5eb584['appendChild'](_0x1689ea);
    _0x3e8426['appendChild'](_0x5eb584);
    for (const _0x53d640 in _0xa47454) {
        const _0x5c1c13 = document['createElement']('div');
        _0x5c1c13['className'] = 'leaderboard-entry';
        const _0x11ab10 = document['createElement']('span');
        _0x11ab10['textContent'] = _0xa47454[_0x53d640]['name'] + (_0xa47454[_0x53d640]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x761e50['has'](parseInt(_0x53d640)) && !_0xa47454[_0x53d640]['isDead']) {
            _0x11ab10['style']['color'] = '#cc88ff';
        }
        _0x5c1c13['appendChild'](_0x11ab10);
        if (_0x5b920c && !_0xa47454[_0x53d640]['isOwner']) {
            const _0x1b9cf3 = _0xa47454[_0x53d640]['id'];
            const _0x552734 = _0xa47454[_0x53d640]['name'];
            _0x5c1c13['style']['cursor'] = 'context-menu';
            _0x5c1c13['addEventListener']('contextmenu', _0x476730 => {
                _0x476730['preventDefault']();
                _0x476730['stopPropagation']();
                _0x5ee055(_0x1b9cf3, _0x552734, _0x476730['clientX'], _0x476730['clientY']);
            });
        }
        _0x3e8426['appendChild'](_0x5c1c13);
    }
}
window['addEventListener']('resize', _0xbe1c28);
function _0xbe1c28() {
    _0x3a3595['width'] = window['innerWidth'];
    _0x3a3595['height'] = window['innerHeight'];
    _0x1c8d04['SYSTEM']['viewScale'] = Math['max'](_0x3a3595['width'] / _0x1c1991, _0x3a3595['height'] / _0x44303f);
    _0x1c8d04['CAMERA']['width'] = _0x3a3595['width'] / _0x1c8d04['SYSTEM']['viewScale'];
    _0x1c8d04['CAMERA']['height'] = _0x3a3595['height'] / _0x1c8d04['SYSTEM']['viewScale'];
    _0x1f5fd2['imageSmoothingEnabled'] = ![];
}
function _0x154132(_0x32b061) {
    if (_0x32b061['ctrlKey'] || _0x32b061['metaKey']) {
        if (_0x32b061['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x32b061['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x32b061['code'])) {
            _0x32b061['preventDefault']();
            _0x32b061['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x154132, { 'passive': ![] });
window['addEventListener']('keydown', _0x154132, { 'passive': ![] });
window['addEventListener']('keydown', _0x678be2 => {
    const _0x96a2a = _0x678be2['key']['toLowerCase']();
    if (_0x96a2a === 'tab') {
        _0x678be2['preventDefault']();
        const _0x5aed5a = document['getElementById']('will-ui');
        const _0x2e625e = document['getElementById']('will-input');
        if (_0x5aed5a['style']['display'] === 'flex') {
            _0x5aed5a['style']['display'] = 'none';
            if (_0x27e598)
                _0x27e598['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x2e625e['value']
                }));
            _0x2e625e['blur']();
        } else {
            _0x5aed5a['style']['display'] = 'flex';
            _0x2e625e['focus']();
            for (let _0x4badb7 in _0x1c8d04['INPUTS']['keys'])
                _0x1c8d04['INPUTS']['keys'][_0x4badb7] = ![];
        }
        return;
    }
    if (_0x678be2['key'] === 'Enter') {
        if (_0x1e068e) {
            const _0x222c79 = document['getElementById']('play-btn');
            if (_0x222c79)
                _0x222c79['click']();
            return;
        }
        if (!_0x27e598 || _0x27e598['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x15f759 = document['getElementById']('chat-ui');
        const _0x20a5c = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x20a5c) {
            const _0x25e966 = _0x20a5c['value']['trim']();
            if (_0x25e966['length'] > 0x0) {
                _0x27e598['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x25e966
                }));
            }
            _0x20a5c['value'] = '';
            _0x15f759['style']['display'] = 'none';
            _0x20a5c['blur']();
        } else {
            _0x15f759['style']['display'] = 'block';
            _0x20a5c['focus']();
            for (let _0x3ebe87 in _0x1c8d04['INPUTS']['keys'])
                _0x1c8d04['INPUTS']['keys'][_0x3ebe87] = ![];
        }
        _0x678be2['preventDefault']();
        return;
    }
    if (_0x678be2['key'] === 'Escape') {
        const _0x1345ee = document['getElementById']('guide-ui');
        if (_0x1345ee && _0x1345ee['style']['display'] === 'flex') {
            _0x1345ee['style']['display'] = 'none';
            return;
        }
        const _0xeb467d = document['getElementById']('ability-ui');
        if (_0xeb467d && _0xeb467d['style']['display'] === 'block') {
            _0xeb467d['style']['display'] = 'none';
            return;
        }
        const _0x43a50d = document['getElementById']('settings-panel');
        if (_0x43a50d && _0x43a50d['style']['display'] === 'block') {
            _0x43a50d['style']['display'] = 'none';
            return;
        }
        const _0xbcf75d = document['getElementById']('mayor-confirm-dialog');
        if (_0xbcf75d && _0xbcf75d['style']['display'] === 'flex') {
            _0xbcf75d['style']['display'] = 'none';
            return;
        }
        const _0x2a8a27 = document['getElementById']('target-chooser-ui');
        if (_0x2a8a27 && _0x2a8a27['style']['display'] === 'flex') {
            _0x2a8a27['style']['display'] = 'none';
            return;
        }
        const _0x1adec0 = document['getElementById']('chat-ui');
        const _0x2718e5 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x2718e5) {
            _0x2718e5['value'] = '';
            _0x1adec0['style']['display'] = 'none';
            _0x2718e5['blur']();
            _0x678be2['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x1c8d04['INPUTS']['keys']['hasOwnProperty'](_0x96a2a))
            _0x1c8d04['INPUTS']['keys'][_0x96a2a] = !![];
        if (!_0x27e598 || _0x27e598['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x96a2a === 'h' && !_0x678be2['repeat']) {
            const _0x1b26f7 = document['getElementById']('guide-ui');
            if (_0x1b26f7) {
                _0x1b26f7['style']['display'] = _0x1b26f7['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x96a2a === 't' && !_0x678be2['repeat']) {
            if (_0x490533['isDead'])
                return;
            if (_0xf1d4e === 'Mayor') {
                if (_0x761e50['has'](_0x1fd455)) {
                    _0x2e3a56('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x368c84 = document['getElementById']('mayor-confirm-dialog');
                if (_0x368c84)
                    _0x368c84['style']['display'] = 'flex';
                return;
            }
            if (_0x1c8d04['GAME_STATE'] === 'NIGHT') {
                if (!_0x1c8d04['NIGHT_ABILITY_OPEN']) {
                    _0x2e3a56('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x4975ec = document['getElementById']('ability-ui');
                if (_0x4975ec) {
                    if (_0x4975ec['style']['display'] === 'block') {
                        _0x4975ec['style']['display'] = 'none';
                    } else {
                        _0x1e8254();
                        _0x4975ec['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1c8d04['GAME_STATE'] === 'DAY_DISCUSS' || _0x1c8d04['GAME_STATE'] === 'DAY_VOTE') {
                _0x2e3a56('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x96a2a === 'e' && !_0x490533['isDead']) {
            const _0x1bbc3b = Date['now']();
            if (!window['_lastDoorSend'] || _0x1bbc3b - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x1bbc3b;
                _0x27e598['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x37af4b => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x283a34 = _0x37af4b['key']['toLowerCase']();
        if (_0x1c8d04['INPUTS']['keys']['hasOwnProperty'](_0x283a34))
            _0x1c8d04['INPUTS']['keys'][_0x283a34] = ![];
    }
});
window['addEventListener']('mousemove', _0x514549 => {
    _0x1c8d04['INPUTS']['mouseX'] = _0x514549['clientX'];
    _0x1c8d04['INPUTS']['mouseY'] = _0x514549['clientY'];
    if (_0x1c8d04['INPUTS']['isMouseDown'] && _0x1c8d04['EDITOR']['enabled']) {
        _0x3c47d3(_0x514549['clientX'], _0x514549['clientY']);
    }
});
window['addEventListener']('mousedown', _0x3dbc9d => {
    if (_0x3dbc9d['target']['closest']('#editor-ui') || _0x3dbc9d['target']['closest']('#leaderboard-ui') || _0x3dbc9d['target']['closest']('#chat-log-ui') || _0x3dbc9d['target']['closest']('#target-chooser-ui') || _0x3dbc9d['target']['closest']('#guide-ui') || _0x3dbc9d['target']['closest']('#role-list-ui') || _0x3dbc9d['target']['closest']('#ability-ui') || _0x3dbc9d['target']['closest']('#settings-panel') || _0x3dbc9d['target']['closest']('#mayor-confirm-dialog') || _0x3dbc9d['target']['closest']('#mobile-action-bar') || _0x3dbc9d['target']['closest']('#mobile-top-bar') || _0x3dbc9d['target']['closest']('#mobile-joystick-zone') || _0x3dbc9d['target']['closest']('#mobile-chat-overlay') || _0x3dbc9d['target']['closest']('#will-ui') || _0x3dbc9d['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x3dbc9d['button'] === 0x0) {
        _0x1c8d04['INPUTS']['isMouseDown'] = !![];
        if (_0x1c8d04['EDITOR']['enabled'])
            _0x3c47d3(_0x3dbc9d['clientX'], _0x3dbc9d['clientY']);
    }
});
window['addEventListener']('mouseup', _0x1dcb2e => {
    _0x1c8d04['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x3d110b => {
    if (_0x3d110b['target']['closest']('#settings-btn'))
        return;
    const _0xd948ca = document['getElementById']('leaderboard-list');
    const _0x5c83cf = document['getElementById']('leaderboard-toggle');
    if (_0xd948ca['style']['display'] === 'none') {
        _0xd948ca['style']['display'] = 'flex';
        _0x5c83cf['style']['transform'] = 'rotate(0deg)';
    } else {
        _0xd948ca['style']['display'] = 'none';
        _0x5c83cf['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x708939 = document['getElementById']('close-target-btn');
if (_0x708939) {
    _0x708939['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x542777 = document['getElementById']('close-guide-btn');
if (_0x542777) {
    _0x542777['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x31192b = document['getElementById']('role-list-header');
if (_0x31192b) {
    _0x31192b['addEventListener']('click', () => {
        const _0x3c8974 = document['getElementById']('role-list-items');
        const _0x1c6816 = document['getElementById']('role-list-toggle');
        if (_0x3c8974['style']['display'] === 'none') {
            _0x3c8974['style']['display'] = 'flex';
            _0x1c6816['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x3c8974['style']['display'] = 'none';
            _0x1c6816['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x4fe710() {
    const _0x3e08f6 = document['getElementById']('mobile-joystick-zone');
    const _0xb52881 = document['getElementById']('mobile-joystick-base');
    const _0x1c7f8a = document['getElementById']('mobile-joystick-knob');
    if (_0x3e08f6 && _0xb52881 && _0x1c7f8a) {
        const _0x4eb72b = 0x3e;
        const _0x4a5c61 = (_0xaf0584, _0x23138c) => {
            const _0x539bc3 = _0xb52881['getBoundingClientRect']();
            const _0x5842ec = _0x539bc3['left'] + _0x539bc3['width'] / 0x2;
            const _0x22a7cc = _0x539bc3['top'] + _0x539bc3['height'] / 0x2;
            const _0x181920 = _0xaf0584 - _0x5842ec;
            const _0x3824fc = _0x23138c - _0x22a7cc;
            const _0x484cfd = Math['hypot'](_0x181920, _0x3824fc);
            if (_0x484cfd === 0x0) {
                _0x331e5b = 0x0;
                _0x44e3dd = 0x0;
                _0x432e88 = ![];
                _0x1c7f8a['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x12bc8a = Math['min'](_0x484cfd, _0x4eb72b);
            const _0x457ed5 = _0x181920 / _0x484cfd * _0x12bc8a;
            const _0x3d9c91 = _0x3824fc / _0x484cfd * _0x12bc8a;
            _0x331e5b = _0x457ed5 / _0x4eb72b;
            _0x44e3dd = _0x3d9c91 / _0x4eb72b;
            _0x432e88 = _0x484cfd >= _0x4eb72b * 0.75;
            _0x1c7f8a['style']['transform'] = 'translate(' + _0x457ed5 + 'px,\x20' + _0x3d9c91 + 'px)';
        };
        const _0x4cae53 = _0x34ddbb => {
            for (let _0xbb57f5 = 0x0; _0xbb57f5 < _0x34ddbb['changedTouches']['length']; _0xbb57f5++) {
                const _0x4bd81c = _0x34ddbb['changedTouches'][_0xbb57f5];
                if (_0xfbc83f === null) {
                    _0xfbc83f = _0x4bd81c['identifier'];
                    _0x174ab1 = !![];
                    _0x4a5c61(_0x4bd81c['clientX'], _0x4bd81c['clientY']);
                    break;
                }
            }
        };
        const _0x9b2bb4 = _0x3416b5 => {
            for (let _0x493c31 = 0x0; _0x493c31 < _0x3416b5['changedTouches']['length']; _0x493c31++) {
                const _0xc453e7 = _0x3416b5['changedTouches'][_0x493c31];
                if (_0xc453e7['identifier'] === _0xfbc83f) {
                    _0x4a5c61(_0xc453e7['clientX'], _0xc453e7['clientY']);
                    break;
                }
            }
        };
        const _0x5302fe = _0x44d7de => {
            for (let _0x4f21f4 = 0x0; _0x4f21f4 < _0x44d7de['changedTouches']['length']; _0x4f21f4++) {
                const _0x1597c0 = _0x44d7de['changedTouches'][_0x4f21f4];
                if (_0x1597c0['identifier'] === _0xfbc83f) {
                    _0xfbc83f = null;
                    _0x174ab1 = ![];
                    _0x331e5b = 0x0;
                    _0x44e3dd = 0x0;
                    _0x432e88 = ![];
                    _0x1c7f8a['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x3e08f6['addEventListener']('touchstart', _0x240372 => {
            _0x240372['preventDefault']();
            _0x4cae53(_0x240372);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x9b2bb4, { 'passive': !![] });
        window['addEventListener']('touchend', _0x5302fe, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x5302fe, { 'passive': !![] });
    }
    const _0x5a066b = (_0x2047d7, _0x5b730a) => {
        const _0x37eefa = _0x2047d7 / _0x1c8d04['SYSTEM']['viewScale'];
        const _0x1a50e7 = _0x5b730a / _0x1c8d04['SYSTEM']['viewScale'];
        const _0x590079 = _0x490533['x'] - _0x1c8d04['CAMERA']['x'] + _0x490533['width'] / 0x2;
        const _0x37effc = _0x490533['y'] - _0x1c8d04['CAMERA']['y'] + _0x490533['height'] / 0x2;
        _0xaf9956 = Math['atan2'](_0x1a50e7 - _0x37effc, _0x37eefa - _0x590079);
        _0x308c02 = !![];
        _0x1c8d04['INPUTS']['mouseX'] = _0x2047d7;
        _0x1c8d04['INPUTS']['mouseY'] = _0x5b730a;
    };
    _0x3a3595['addEventListener']('touchstart', _0xf12d40 => {
        if (_0x1e068e)
            return;
        for (let _0xd5a031 = 0x0; _0xd5a031 < _0xf12d40['changedTouches']['length']; _0xd5a031++) {
            const _0x1063af = _0xf12d40['changedTouches'][_0xd5a031];
            if (_0x1063af['identifier'] !== _0xfbc83f && _0x3dde08 === null) {
                _0x3dde08 = _0x1063af['identifier'];
                _0x5a066b(_0x1063af['clientX'], _0x1063af['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x3a3595['addEventListener']('touchmove', _0x79069 => {
        if (_0x1e068e)
            return;
        for (let _0x3f6aa3 = 0x0; _0x3f6aa3 < _0x79069['changedTouches']['length']; _0x3f6aa3++) {
            const _0x555106 = _0x79069['changedTouches'][_0x3f6aa3];
            if (_0x555106['identifier'] === _0x3dde08) {
                _0x5a066b(_0x555106['clientX'], _0x555106['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x457261 = _0x563988 => {
        for (let _0x175a66 = 0x0; _0x175a66 < _0x563988['changedTouches']['length']; _0x175a66++) {
            const _0x804fbd = _0x563988['changedTouches'][_0x175a66];
            if (_0x804fbd['identifier'] === _0x3dde08) {
                _0x3dde08 = null;
                _0x308c02 = ![];
                break;
            }
        }
    };
    _0x3a3595['addEventListener']('touchend', _0x457261, { 'passive': !![] });
    _0x3a3595['addEventListener']('touchcancel', _0x457261, { 'passive': !![] });
    const _0x8a1049 = document['getElementById']('mob-sprint-btn');
    if (_0x8a1049) {
        _0x8a1049['addEventListener']('click', _0x3833ce => {
            _0x3833ce['stopPropagation']();
            _0xf57ffd = !_0xf57ffd;
            _0x8a1049['classList']['toggle']('active', _0xf57ffd);
        });
    }
    const _0xc25c0f = document['getElementById']('mob-interact-btn');
    if (_0xc25c0f) {
        _0xc25c0f['addEventListener']('click', _0x38ec72 => {
            _0x38ec72['stopPropagation']();
            if (!_0x490533['isDead']) {
                const _0x2a2e30 = Date['now']();
                if (!window['_lastDoorSend'] || _0x2a2e30 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x2a2e30;
                    if (_0x27e598 && _0x27e598['readyState'] === WebSocket['OPEN'])
                        _0x27e598['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x2e12a2 = document['getElementById']('mob-ability-btn');
    if (_0x2e12a2) {
        _0x2e12a2['addEventListener']('click', _0x278050 => {
            _0x278050['stopPropagation']();
            if (_0x490533['isDead'])
                return;
            if (_0xf1d4e === 'Mayor') {
                if (_0x761e50['has'](_0x1fd455)) {
                    _0x2e3a56('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x5ca343 = document['getElementById']('mayor-confirm-dialog');
                if (_0x5ca343)
                    _0x5ca343['style']['display'] = 'flex';
                return;
            }
            if (_0x1c8d04['GAME_STATE'] === 'NIGHT') {
                if (!_0x1c8d04['NIGHT_ABILITY_OPEN']) {
                    _0x2e3a56('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x5bff96 = document['getElementById']('ability-ui');
                if (_0x5bff96) {
                    if (_0x5bff96['style']['display'] === 'block') {
                        _0x5bff96['style']['display'] = 'none';
                    } else {
                        _0x1e8254();
                        _0x5bff96['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1c8d04['GAME_STATE'] === 'DAY_DISCUSS' || _0x1c8d04['GAME_STATE'] === 'DAY_VOTE') {
                _0x2e3a56('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x539b0d = document['getElementById']('mob-will-btn');
    const _0x3318ed = document['getElementById']('will-ui');
    const _0x142ab1 = document['getElementById']('will-input');
    const _0x2bf6f8 = document['getElementById']('close-will-btn');
    const _0xc06c6f = () => {
        if (!_0x3318ed)
            return;
        if (_0x3318ed['style']['display'] === 'flex') {
            _0x3318ed['style']['display'] = 'none';
            if (_0x27e598 && _0x27e598['readyState'] === WebSocket['OPEN'] && _0x142ab1) {
                _0x27e598['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x142ab1['value']
                }));
            }
            if (_0x142ab1)
                _0x142ab1['blur']();
        } else {
            _0x3318ed['style']['display'] = 'flex';
            if (_0x142ab1)
                _0x142ab1['focus']();
        }
    };
    if (_0x539b0d)
        _0x539b0d['addEventListener']('click', _0x2aae49 => {
            _0x2aae49['stopPropagation']();
            _0xc06c6f();
        });
    if (_0x2bf6f8)
        _0x2bf6f8['addEventListener']('click', _0x187318 => {
            _0x187318['stopPropagation']();
            _0xc06c6f();
        });
    const _0x91d9a2 = document['getElementById']('mob-chat-btn');
    const _0x56ef71 = document['getElementById']('mobile-chat-overlay');
    const _0x3f4b64 = document['getElementById']('mobile-chat-input');
    const _0x1cfb3e = document['getElementById']('mobile-chat-send');
    const _0x2fbe84 = document['getElementById']('mobile-chat-cancel');
    const _0x240adc = () => {
        if (!_0x56ef71 || !_0x3f4b64)
            return;
        _0x56ef71['style']['display'] = 'flex';
        _0x3f4b64['value'] = '';
        _0x3f4b64['focus']();
    };
    const _0x11a0f8 = () => {
        if (!_0x56ef71 || !_0x3f4b64)
            return;
        _0x56ef71['style']['display'] = 'none';
        _0x3f4b64['blur']();
    };
    const _0x88de1b = () => {
        if (!_0x3f4b64)
            return;
        const _0x1f5952 = _0x3f4b64['value']['trim']();
        if (_0x1f5952['length'] > 0x0 && _0x27e598 && _0x27e598['readyState'] === WebSocket['OPEN']) {
            _0x27e598['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x1f5952
            }));
        }
        _0x3f4b64['value'] = '';
        _0x11a0f8();
    };
    if (_0x91d9a2)
        _0x91d9a2['addEventListener']('click', _0x2f4d8d => {
            _0x2f4d8d['stopPropagation']();
            _0x240adc();
        });
    if (_0x1cfb3e)
        _0x1cfb3e['addEventListener']('click', _0x180a2d => {
            _0x180a2d['stopPropagation']();
            _0x88de1b();
        });
    if (_0x2fbe84)
        _0x2fbe84['addEventListener']('click', _0x32db80 => {
            _0x32db80['stopPropagation']();
            _0x11a0f8();
        });
    if (_0x3f4b64) {
        _0x3f4b64['addEventListener']('keydown', _0x5102da => {
            if (_0x5102da['key'] === 'Enter') {
                _0x5102da['preventDefault']();
                _0x88de1b();
            } else if (_0x5102da['key'] === 'Escape') {
                _0x11a0f8();
            }
        });
    }
    const _0x182f67 = document['getElementById']('mob-top-chat');
    if (_0x182f67)
        _0x182f67['addEventListener']('click', _0x56a475 => {
            _0x56a475['stopPropagation']();
            _0x240adc();
        });
    const _0x541b55 = document['getElementById']('mob-top-will');
    if (_0x541b55)
        _0x541b55['addEventListener']('click', _0x2d4d98 => {
            _0x2d4d98['stopPropagation']();
            _0xc06c6f();
        });
    const _0x44b3eb = document['getElementById']('mob-top-roles');
    if (_0x44b3eb) {
        _0x44b3eb['addEventListener']('click', _0x46df50 => {
            _0x46df50['stopPropagation']();
            const _0x672477 = document['getElementById']('role-list-ui');
            const _0x288fba = document['getElementById']('leaderboard-ui');
            if (_0x288fba)
                _0x288fba['style']['display'] = 'none';
            if (_0x672477)
                _0x672477['style']['display'] = _0x672477['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x5b2220 = document['getElementById']('mob-top-players');
    if (_0x5b2220) {
        _0x5b2220['addEventListener']('click', _0x118238 => {
            _0x118238['stopPropagation']();
            const _0x41cff1 = document['getElementById']('leaderboard-ui');
            const _0x3941a2 = document['getElementById']('role-list-ui');
            if (_0x3941a2)
                _0x3941a2['style']['display'] = 'none';
            if (_0x41cff1)
                _0x41cff1['style']['display'] = _0x41cff1['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x50604b = document['getElementById']('mob-top-help');
    if (_0x50604b) {
        _0x50604b['addEventListener']('click', _0x30ed76 => {
            _0x30ed76['stopPropagation']();
            const _0x452b24 = document['getElementById']('guide-ui');
            if (_0x452b24)
                _0x452b24['style']['display'] = _0x452b24['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x44d5ad) {
            _0x44d5ad = !![];
            _0x35014f();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
