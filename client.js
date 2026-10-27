document['addEventListener']('contextmenu', _0x327e00 => _0x327e00['preventDefault']());
const _0x1e513c = {
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
let _0x1f04c4 = '';
function _0x3bbff4(_0x2eab73, _0x5a2e40) {
    const _0x2ea42d = document['getElementById']('role-list-ui');
    const _0x360cb2 = document['getElementById']('role-list-items');
    if (!_0x2ea42d || !_0x360cb2)
        return;
    if (!_0x5a2e40 || _0x5a2e40 === 'off' || !_0x2eab73 || _0x2eab73['length'] === 0x0) {
        _0x2ea42d['style']['display'] = 'none';
        return;
    }
    const _0x44f34f = _0x5a2e40 + '|' + JSON['stringify'](_0x2eab73);
    if (_0x44f34f === _0x1f04c4)
        return;
    _0x1f04c4 = _0x44f34f;
    const _0x33a5e6 = document['getElementById']('role-tooltip');
    if (_0x33a5e6) {
        _0x33a5e6['style']['visibility'] = 'hidden';
        _0x33a5e6['style']['opacity'] = '0';
    }
    _0x2ea42d['style']['display'] = 'flex';
    _0x360cb2['innerHTML'] = '';
    _0x2eab73['forEach'](_0x171eb6 => {
        const _0x68855 = document['createElement']('div');
        _0x68855['className'] = 'role-list-entry';
        const _0x4740de = _0x171eb6['name']['includes']('Mafia') || _0x171eb6['name'] === 'Skinwalker' || _0x171eb6['name'] === 'Blackmailer';
        _0x68855['classList']['add'](_0x4740de ? 'mafia' : 'town');
        if (_0x5a2e40 === 'precise' && _0x171eb6['isDead']) {
            _0x68855['classList']['remove']('town', 'mafia');
            _0x68855['classList']['add']('dead');
            _0x68855['innerHTML'] = '<span>' + _0x171eb6['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x5266a7 = _0x171eb6['count'] !== undefined && _0x171eb6['count'] !== null ? _0x171eb6['count'] + 'x\x20' : '';
            _0x68855['innerHTML'] = '<span>' + _0x5266a7 + _0x171eb6['name'] + '</span>';
        }
        if (_0x5a2e40 === 'subalignments' && _0x1e513c[_0x171eb6['name']]) {
            _0x68855['style']['cursor'] = 'pointer';
            _0x68855['addEventListener']('mouseenter', () => {
                const _0x3fc4a3 = document['getElementById']('role-tooltip');
                if (!_0x3fc4a3)
                    return;
                const _0x27a269 = _0x1e513c[_0x171eb6['name']]['join'](',\x20');
                _0x3fc4a3['innerHTML'] = '';
                const _0x49e273 = document['createElement']('span');
                _0x49e273['style']['color'] = '#ffcc00';
                _0x49e273['textContent'] = _0x171eb6['name'];
                _0x3fc4a3['appendChild'](_0x49e273);
                _0x3fc4a3['appendChild'](document['createElement']('br'));
                _0x3fc4a3['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x27a269));
                const _0x303449 = _0x68855['getBoundingClientRect']();
                _0x3fc4a3['style']['left'] = _0x303449['left'] - 0xeb + 'px';
                _0x3fc4a3['style']['top'] = _0x303449['top'] + 'px';
                _0x3fc4a3['style']['display'] = 'block';
                _0x3fc4a3['style']['visibility'] = 'visible';
                _0x3fc4a3['style']['opacity'] = '1';
            });
            _0x68855['addEventListener']('mouseleave', () => {
                const _0xb24084 = document['getElementById']('role-tooltip');
                if (_0xb24084) {
                    _0xb24084['style']['display'] = 'none';
                    _0xb24084['style']['visibility'] = 'hidden';
                    _0xb24084['style']['opacity'] = '0';
                }
            });
        }
        _0x360cb2['appendChild'](_0x68855);
    });
}
let _0x1e443d = null;
let _0x32a3b9 = null;
const _0x34e050 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x2a649e = 'Player???';
let _0x3f9b57 = ![];
let _0x2e5d9c = {};
let _0x41b96f = null;
let _0x4ec117 = 0x0;
let _0x1de9bc = 0x0;
let _0x4a15f7 = new Set();
let _0x2a952e = ![];
let _0x5517df = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x14c242 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x51225f = ![];
let _0x5f0d55 = null;
let _0x5e3403 = 0x0;
let _0x494104 = 0x0;
let _0x1e7d53 = ![];
let _0x305c41 = ![];
let _0x3f2e12 = 0x0;
let _0x4d7c1f = null;
let _0x5cfe26 = ![];
let _0x407467 = 0x0;
let _0x4fa5be = 0x0;
let _0xd35a6b = [];
let _0x4e8fad = [];
let _0x357b9f = new Set();
const _0x1016d9 = ((() => {
    const _0x1d3026 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x2788bf = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x455a94 = 0x320;
    const _0x264bb3 = {};
    const _0x3e1e48 = {};
    let _0xf1bb03 = null;
    let _0x4ddf42 = _0x2788bf === 0x0;
    let _0x50693e = ![];
    for (const [_0x45529b, _0x39c0bd] of Object['entries'](_0x1d3026)) {
        const _0x1bc98f = new Audio(_0x39c0bd);
        _0x1bc98f['loop'] = !![];
        _0x1bc98f['volume'] = 0x0;
        _0x1bc98f['preload'] = 'auto';
        _0x264bb3[_0x45529b] = _0x1bc98f;
        _0x3e1e48[_0x45529b] = null;
    }
    const _0x5cc520 = _0x496d0b => Math['min'](0x1, Math['max'](0x0, _0x496d0b));
    function _0x46cfc1(_0x2ae984) {
        if (_0x3e1e48[_0x2ae984] !== null) {
            cancelAnimationFrame(_0x3e1e48[_0x2ae984]);
            _0x3e1e48[_0x2ae984] = null;
        }
    }
    function _0x197629(_0x59f67e, _0x2c1161, _0x382e63, _0x195316, _0x2e766c) {
        _0x46cfc1(_0x59f67e);
        const _0x39b9e4 = _0x264bb3[_0x59f67e];
        const _0x8b768 = performance['now']();
        const _0x6a5fb7 = _0x2a4043 => {
            const _0x1793a4 = _0x5cc520((_0x2a4043 - _0x8b768) / _0x195316);
            const _0x204a0f = _0x5cc520(_0x2c1161 + (_0x382e63 - _0x2c1161) * _0x1793a4);
            _0x39b9e4['volume'] = _0x4ddf42 ? 0x0 : _0x204a0f;
            if (_0x1793a4 < 0x1) {
                _0x3e1e48[_0x59f67e] = requestAnimationFrame(_0x6a5fb7);
            } else {
                _0x3e1e48[_0x59f67e] = null;
                _0x39b9e4['volume'] = _0x4ddf42 ? 0x0 : _0x5cc520(_0x382e63);
                if (_0x2e766c)
                    _0x2e766c();
            }
        };
        _0x3e1e48[_0x59f67e] = requestAnimationFrame(_0x6a5fb7);
    }
    function _0x1528ff(_0x2e770f) {
        const _0x381c69 = _0x2e770f['play']();
        if (_0x381c69 && _0x381c69['catch']) {
            _0x381c69['catch'](() => {
                if (!_0x50693e) {
                    const _0xfc5d38 = () => {
                        _0x50693e = !![];
                        _0x2e770f['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0xfc5d38);
                        document['removeEventListener']('keydown', _0xfc5d38);
                        document['removeEventListener']('touchstart', _0xfc5d38);
                    };
                    document['addEventListener']('click', _0xfc5d38, { 'once': !![] });
                    document['addEventListener']('keydown', _0xfc5d38, { 'once': !![] });
                    document['addEventListener']('touchstart', _0xfc5d38, { 'once': !![] });
                }
            });
        }
    }
    function _0x487914(_0x475bc8) {
        if (!_0x1d3026[_0x475bc8])
            return;
        if (_0xf1bb03 === _0x475bc8)
            return;
        const _0x5c503f = _0xf1bb03;
        _0xf1bb03 = _0x475bc8;
        const _0x5b6c43 = _0x264bb3[_0x475bc8];
        _0x46cfc1(_0x475bc8);
        _0x5b6c43['currentTime'] = 0x0;
        _0x5b6c43['volume'] = 0x0;
        _0x1528ff(_0x5b6c43);
        _0x197629(_0x475bc8, 0x0, _0x2788bf, _0x455a94);
        if (_0x5c503f && _0x264bb3[_0x5c503f]) {
            const _0x470df6 = _0x5c503f;
            const _0x9c0305 = _0x264bb3[_0x470df6];
            const _0x437a01 = _0x5cc520(_0x9c0305['volume']);
            _0x197629(_0x470df6, _0x437a01, 0x0, _0x455a94, () => {
                _0x9c0305['pause']();
                _0x9c0305['currentTime'] = 0x0;
            });
        }
    }
    function _0x4a92b2(_0x428833) {
        _0x2788bf = _0x5cc520(_0x428833);
        localStorage['setItem']('musicVolume', String(_0x2788bf));
        if (!_0x4ddf42 && _0xf1bb03 && _0x3e1e48[_0xf1bb03] === null) {
            _0x264bb3[_0xf1bb03]['volume'] = _0x2788bf;
        }
    }
    function _0xc97719() {
        return _0x2788bf;
    }
    function _0x1a4cc6(_0x376176) {
        _0x4ddf42 = _0x376176;
        for (const _0xafdbad of Object['keys'](_0x264bb3)) {
            if (_0x3e1e48[_0xafdbad] === null) {
                _0x264bb3[_0xafdbad]['volume'] = _0x376176 || _0xafdbad !== _0xf1bb03 ? 0x0 : _0x2788bf;
            }
        }
    }
    function _0x532272() {
        return _0x4ddf42;
    }
    function _0x318838(_0xb2fbfa) {
        if (_0xb2fbfa === 'DAY_DISCUSS')
            return 'discussion';
        if (_0xb2fbfa === 'DAY_VOTE')
            return 'voting';
        if (_0xb2fbfa === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x5c7a79(_0x28ae6d) {
        _0x487914(_0x318838(_0x28ae6d));
    }
    function _0x37d90d(_0xfa4ac0) {
        _0x487914(_0xfa4ac0);
    }
    return {
        'play': _0x487914,
        'onStateChange': _0x5c7a79,
        'onSoundEvent': _0x37d90d,
        'setVolume': _0x4a92b2,
        'getVolume': _0xc97719,
        'setMuted': _0x1a4cc6,
        'isMuted': _0x532272
    };
})());
const _0x154aeb = ((() => {
    const _0x49ddbf = 0x258;
    const _0x56684b = 0xb4;
    const _0x1084f3 = 0x708;
    const _0x30a48e = 0x140;
    const _0xb10f4f = 0.18;
    const _0xc4f4af = 0.95;
    const _0x7fb0e4 = new Audio('audio/heartbeat.mp3');
    _0x7fb0e4['loop'] = ![];
    _0x7fb0e4['preload'] = 'auto';
    _0x7fb0e4['volume'] = 0x0;
    let _0x9c1e63 = 0x0;
    let _0x5ed756 = Infinity;
    function _0x5e314c(_0x523834, _0x49fe74, _0x8621ff) {
        return Math['min'](_0x8621ff, Math['max'](_0x49fe74, _0x523834));
    }
    function _0x404f71(_0x50210d, _0x363290, _0x24fd5d) {
        return _0x50210d + (_0x363290 - _0x50210d) * _0x24fd5d;
    }
    function _0x414f99(_0x316876) {
        if (_0x1e780b['GAME_STATE'] !== 'NIGHT' || _0x3ae52e['isDead'] || _0x41b96f === 'Skinwalker' || _0x41b96f === 'Blackmailer') {
            _0x5ed756 = Infinity;
            return;
        }
        const _0x5d5823 = _0x3ae52e['x'] + 22.5;
        const _0x13b6a9 = _0x3ae52e['y'] + 22.5;
        let _0x5e05f2 = Infinity;
        for (const _0x200458 in _0x2e5d9c) {
            const _0x12c9b1 = _0x2e5d9c[_0x200458];
            if (!_0x12c9b1['isDark'] || _0x12c9b1['isDead'])
                continue;
            const _0x3488ba = _0x12c9b1['renderX'] + 22.5 - _0x5d5823;
            const _0x28ae72 = _0x12c9b1['renderY'] + 22.5 - _0x13b6a9;
            const _0x3097ef = Math['sqrt'](_0x3488ba * _0x3488ba + _0x28ae72 * _0x28ae72);
            if (_0x3097ef < _0x5e05f2)
                _0x5e05f2 = _0x3097ef;
        }
        _0x5ed756 = _0x5e05f2;
        if (_0x5e05f2 > _0x49ddbf)
            return;
        const _0x58f9d1 = 0x1 - _0x5e314c((_0x5e05f2 - _0x56684b) / (_0x49ddbf - _0x56684b), 0x0, 0x1);
        const _0x2a128b = _0x404f71(_0x1084f3, _0x30a48e, _0x58f9d1);
        const _0x2ef66b = _0x404f71(_0xb10f4f, _0xc4f4af, _0x58f9d1);
        if (_0x316876 >= _0x9c1e63) {
            _0x7fb0e4['currentTime'] = 0x0;
            _0x7fb0e4['volume'] = _0x1016d9['isMuted']() ? 0x0 : _0x5e314c(_0x2ef66b * _0x1016d9['getVolume']() / 0.7, 0x0, 0x1);
            _0x7fb0e4['play']()['catch'](() => {
            });
            _0x9c1e63 = _0x316876 + _0x2a128b;
        }
    }
    return { 'tick': _0x414f99 };
})());
function _0xcca5b7() {
    const _0x1580de = document['getElementById']('mob-ability-btn');
    if (!_0x1580de)
        return;
    const _0x1be8e0 = _0x1e780b['GAME_STATE'] === 'NIGHT' && !_0x3ae52e['isDead'];
    const _0x362df8 = _0x41b96f === 'Mayor' && !_0x4a15f7['has'](_0x32a3b9) && !_0x3ae52e['isDead'];
    if (_0x1be8e0 || _0x362df8) {
        _0x1580de['style']['display'] = 'flex';
    } else {
        _0x1580de['style']['display'] = 'none';
    }
}
function _0x4f44c8() {
    const _0x49bb08 = document['getElementById']('mobile-joystick-zone');
    const _0xa9f70c = document['getElementById']('mobile-top-bar');
    const _0x3a1873 = document['getElementById']('mobile-action-bar');
    if (!_0x49bb08 || !_0xa9f70c || !_0x3a1873)
        return;
    if (!_0x312f87 && _0x14c242) {
        _0x49bb08['style']['display'] = 'flex';
        _0xa9f70c['style']['display'] = 'flex';
        _0x3a1873['style']['display'] = 'flex';
        _0xcca5b7();
    } else {
        _0x49bb08['style']['display'] = 'none';
        _0xa9f70c['style']['display'] = 'none';
        _0x3a1873['style']['display'] = 'none';
    }
}
const _0x2ba5d1 = document['getElementById']('gameCanvas');
const _0x2fce09 = _0x2ba5d1['getContext']('2d', { 'alpha': ![] });
const _0x32c369 = 0x500;
const _0x374d7a = 0x2d0;
const _0x1e780b = {
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
        'width': _0x32c369,
        'height': _0x374d7a
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
const _0x3ae52e = {
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
const _0x56dd00 = new Image();
const _0x3c8f8f = new Image();
const _0x599cc9 = new Image();
const _0x2de7d5 = new Image();
_0x2de7d5['src'] = 'assets/mayor\x20cosmetic.png';
const _0x189575 = [
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
const _0x4b035e = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x3b242b = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x3b242b === 'body1.png' || _0x3b242b === 'body1')
    _0x3b242b = 'body01.png';
if (!_0x3b242b['endsWith']('.png'))
    _0x3b242b += '.png';
let _0x577819 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x577819['endsWith']('.png'))
    _0x577819 += '.png';
let _0x312f87 = !![];
let _0x23ec38 = null;
let _0x468b81 = null;
let _0x197b52 = 0x3c;
let _0x3c1879 = 0x2d;
const _0x23fb5e = {};
const _0x556895 = new Image();
_0x556895['src'] = 'assets/yanito932.png';
_0x23fb5e['assets/yanito932.png'] = _0x556895;
function _0x380141(_0x2a574f) {
    if (!_0x23fb5e[_0x2a574f] || !_0x23fb5e[_0x2a574f]['complete'] && _0x23fb5e[_0x2a574f]['naturalWidth'] === 0x0 && _0x23fb5e[_0x2a574f]['naturalHeight'] === 0x0) {
        const _0x5cb32a = new Image();
        _0x5cb32a['src'] = _0x2a574f;
        _0x23fb5e[_0x2a574f] = _0x5cb32a;
    }
    return _0x23fb5e[_0x2a574f];
}
function _0x58de4d(_0x196ed1, _0x51859f, _0x8f7e90, _0x10ece7, _0x2d7a60) {
    try {
        const _0x21b3c1 = 'assets/' + (_0x51859f || 'body01.png');
        const _0x49c4a6 = _0x380141(_0x21b3c1);
        if (_0x49c4a6['complete'] && _0x49c4a6['naturalWidth'] > 0x0) {
            _0x196ed1['drawImage'](_0x49c4a6, -_0x10ece7 / 0x2, -_0x2d7a60 / 0x2, _0x10ece7, _0x2d7a60);
        }
        if (_0x8f7e90 === null || _0x8f7e90 === undefined)
            return;
        const _0x3aea0d = 'assets/' + _0x8f7e90;
        const _0x46aa3a = _0x380141(_0x3aea0d);
        if (_0x46aa3a['complete'] && _0x46aa3a['naturalWidth'] > 0x0) {
            _0x196ed1['drawImage'](_0x46aa3a, -_0x10ece7 / 0x2, -_0x2d7a60 / 0x2, _0x10ece7, _0x2d7a60);
        }
    } catch (_0x3e3e55) {
    }
}
function _0x2357ff() {
    const _0x416594 = document['getElementById']('body-skin-grid');
    const _0x497a64 = document['getElementById']('eyes-skin-grid');
    if (!_0x416594 || !_0x497a64)
        return;
    _0x416594['innerHTML'] = '';
    _0x189575['forEach'](_0x42509b => {
        const _0x476dc3 = document['createElement']('button');
        _0x476dc3['className'] = 'skin-btn' + (_0x42509b === _0x3b242b ? '\x20selected' : '');
        const _0x56f096 = document['createElement']('img');
        _0x56f096['src'] = 'assets/' + _0x42509b;
        _0x476dc3['appendChild'](_0x56f096);
        _0x476dc3['onclick'] = () => {
            _0x3b242b = _0x42509b;
            localStorage['setItem']('selectedBody', _0x42509b);
            _0x416594['querySelectorAll']('.skin-btn')['forEach'](_0x1039e1 => _0x1039e1['classList']['remove']('selected'));
            _0x476dc3['classList']['add']('selected');
        };
        _0x416594['appendChild'](_0x476dc3);
    });
    _0x497a64['innerHTML'] = '';
    _0x4b035e['forEach'](_0x28ca29 => {
        const _0x36cec9 = document['createElement']('button');
        _0x36cec9['className'] = 'skin-btn' + (_0x28ca29 === _0x577819 ? '\x20selected' : '');
        const _0x303f60 = document['createElement']('img');
        _0x303f60['src'] = 'assets/' + _0x28ca29;
        _0x36cec9['appendChild'](_0x303f60);
        _0x36cec9['onclick'] = () => {
            _0x577819 = _0x28ca29;
            localStorage['setItem']('selectedEyes', _0x28ca29);
            _0x497a64['querySelectorAll']('.skin-btn')['forEach'](_0x164aff => _0x164aff['classList']['remove']('selected'));
            _0x36cec9['classList']['add']('selected');
        };
        _0x497a64['appendChild'](_0x36cec9);
    });
}
function _0x43d28d(_0x4907e4) {
    if (!_0x1e780b['MAP']['columns'] || !_0x1e780b['CAMERA']['width'])
        return;
    const _0x527c10 = Math['max'](0x0, _0x1e780b['MAP']['columns'] * _0x1e780b['MAP']['tileSize'] - _0x1e780b['CAMERA']['width']);
    const _0x594955 = Math['max'](0x0, _0x1e780b['MAP']['rows'] * _0x1e780b['MAP']['tileSize'] - _0x1e780b['CAMERA']['height']);
    if (_0x23ec38 === null) {
        _0x23ec38 = _0x527c10 / 0x2;
        _0x468b81 = _0x594955 / 0x2;
    }
    _0x23ec38 += _0x197b52 * _0x4907e4;
    _0x468b81 += _0x3c1879 * _0x4907e4;
    if (_0x23ec38 <= 0x0) {
        _0x23ec38 = 0x0;
        _0x197b52 = Math['abs'](_0x197b52);
    } else if (_0x23ec38 >= _0x527c10) {
        _0x23ec38 = _0x527c10;
        _0x197b52 = -Math['abs'](_0x197b52);
    }
    if (_0x468b81 <= 0x0) {
        _0x468b81 = 0x0;
        _0x3c1879 = Math['abs'](_0x3c1879);
    } else if (_0x468b81 >= _0x594955) {
        _0x468b81 = _0x594955;
        _0x3c1879 = -Math['abs'](_0x3c1879);
    }
    _0x1e780b['CAMERA']['x'] = _0x23ec38;
    _0x1e780b['CAMERA']['y'] = _0x468b81;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x1bb101 = document['getElementById']('play-btn');
    const _0x42ed69 = document['getElementById']('username-input');
    const _0x524133 = localStorage['getItem']('playerName');
    if (_0x524133 && _0x42ed69) {
        _0x42ed69['value'] = _0x524133;
    }
    const _0x57d9d2 = () => {
        _0x1016d9['play']('wait');
        document['removeEventListener']('click', _0x57d9d2);
        document['removeEventListener']('keydown', _0x57d9d2);
        document['removeEventListener']('touchstart', _0x57d9d2);
    };
    document['addEventListener']('click', _0x57d9d2, { 'once': !![] });
    document['addEventListener']('keydown', _0x57d9d2, { 'once': !![] });
    document['addEventListener']('touchstart', _0x57d9d2, { 'once': !![] });
    if (_0x1bb101) {
        _0x1bb101['addEventListener']('click', () => {
            const _0x1581b2 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x2d6491 = window['_FB'] && window['_FB']['_userData'];
            let _0x38b001 = !![];
            if (_0x1581b2 && _0x2d6491 && _0x2d6491['username']) {
                _0x2a649e = _0x2d6491['username'];
                _0x38b001 = ![];
            } else {
                const _0x29d510 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x2a649e = 'user' + _0x29d510;
                _0x38b001 = !![];
            }
            const _0x701309 = _0x38b001 ? 'body01.png' : _0x3b242b;
            const _0x18cba3 = _0x38b001 ? 'eyes4.png' : _0x577819;
            const _0x35176a = !_0x38b001 && _0x2d6491 && _0x2d6491['photoURL'] ? _0x2d6491['photoURL'] : '';
            const _0x506844 = !_0x38b001 && _0x1581b2 ? _0x1581b2['uid'] : '';
            localStorage['setItem']('playerName', _0x2a649e);
            _0x312f87 = ![];
            _0x1e780b['CAMERA']['x'] = null;
            _0x1e780b['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x13e975 = document['getElementById']('chat-log-wrap');
            if (_0x13e975)
                _0x13e975['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x34ac6a = document['getElementById']('controls-hint');
            if (_0x34ac6a && !_0x14c242)
                _0x34ac6a['style']['display'] = 'block';
            _0x4f44c8();
            if (_0x14c242) {
                const _0x2ae391 = document['getElementById']('leaderboard-list');
                const _0x3a357d = document['getElementById']('leaderboard-toggle');
                if (_0x2ae391) {
                    _0x2ae391['style']['display'] = 'none';
                    if (_0x3a357d)
                        _0x3a357d['style']['transform'] = 'rotate(180deg)';
                }
                const _0x2b107d = document['getElementById']('role-list-items');
                const _0x35706c = document['getElementById']('role-list-toggle');
                if (_0x2b107d) {
                    _0x2b107d['style']['display'] = 'none';
                    if (_0x35706c)
                        _0x35706c['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x52724a = !_0x38b001 && _0x2d6491 ? {
                'townWins': _0x2d6491['townWins'] || 0x0,
                'mafiaWins': _0x2d6491['mafiaWins'] || 0x0,
                'deaths': _0x2d6491['deaths'] || 0x0,
                'townLosses': _0x2d6491['townLosses'] || 0x0,
                'mafiaLosses': _0x2d6491['mafiaLosses'] || 0x0
            } : null;
            const _0x59913a = JSON['stringify']({
                'type': 'join',
                'name': _0x2a649e,
                'token': _0x34e050,
                'body': _0x701309,
                'eyes': _0x18cba3,
                'isGuest': _0x38b001,
                'uid': _0x506844,
                'photoURL': _0x35176a,
                'accountStats': _0x52724a
            });
            if (_0x1e443d && _0x1e443d['readyState'] === WebSocket['OPEN']) {
                _0x1e443d['send'](_0x59913a);
            } else if (!_0x1e443d || _0x1e443d['readyState'] === WebSocket['CLOSED'] || _0x1e443d['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x59913a;
                _0x4a4eb0();
            }
        });
    }
    _0x2357ff();
    _0x4a4eb0();
    _0x9e40c0();
    _0x5081aa();
    _0x2b0649();
    _0x4f406c();
});
const _0xe06edf = [
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
let _0x5583ad = 'Town';
let _0x1c9f07 = 0x0;
function _0xb21193() {
    const _0x4bbb66 = document['getElementById']('role-index-main-tabs');
    const _0x537d26 = document['getElementById']('role-index-tabs');
    const _0x9b6eba = document['getElementById']('role-index-body');
    if (!_0x537d26 || !_0x9b6eba)
        return;
    if (_0x4bbb66) {
        _0x4bbb66['innerHTML'] = '';
        const _0x8066b8 = document['createElement']('button');
        _0x8066b8['className'] = 'role-index-main-tab-btn\x20main-town' + (_0x5583ad === 'Town' ? '\x20active' : '');
        _0x8066b8['textContent'] = 'TOWN';
        _0x8066b8['addEventListener']('click', () => {
            _0x5583ad = 'Town';
            _0x1c9f07 = 0x0;
            _0xb21193();
        });
        _0x4bbb66['appendChild'](_0x8066b8);
        const _0x382b97 = document['createElement']('button');
        _0x382b97['className'] = 'role-index-main-tab-btn\x20main-mafia' + (_0x5583ad === 'Mafia' ? '\x20active' : '');
        _0x382b97['textContent'] = 'MAFIA';
        _0x382b97['addEventListener']('click', () => {
            _0x5583ad = 'Mafia';
            _0x1c9f07 = 0x0;
            _0xb21193();
        });
        _0x4bbb66['appendChild'](_0x382b97);
    }
    const _0xf9d960 = _0xe06edf['filter'](_0xf1625b => _0xf1625b['faction'] === _0x5583ad);
    _0x537d26['innerHTML'] = '';
    _0xf9d960['forEach']((_0x12c085, _0x553058) => {
        const _0x3da106 = document['createElement']('button');
        _0x3da106['className'] = 'role-index-tab-btn' + (_0x12c085['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x553058 === _0x1c9f07 ? '\x20active' : '');
        _0x3da106['textContent'] = _0x12c085['name'];
        _0x3da106['addEventListener']('click', () => {
            _0x1c9f07 = _0x553058;
            _0xb21193();
        });
        _0x537d26['appendChild'](_0x3da106);
    });
    const _0x44defc = _0xf9d960[_0x1c9f07] || _0xf9d960[0x0];
    _0x9b6eba['innerHTML'] = '';
    if (!_0x44defc)
        return;
    const _0x21b53e = document['createElement']('div');
    _0x21b53e['className'] = 'role-index-title-row';
    const _0x54ad08 = document['createElement']('span');
    _0x54ad08['className'] = 'role-index-name\x20' + (_0x44defc['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0x54ad08['textContent'] = _0x44defc['name'];
    _0x21b53e['appendChild'](_0x54ad08);
    const _0xdedcb0 = document['createElement']('span');
    _0xdedcb0['className'] = 'role-index-faction-badge\x20' + (_0x44defc['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0xdedcb0['textContent'] = _0x44defc['faction'];
    _0x21b53e['appendChild'](_0xdedcb0);
    _0x9b6eba['appendChild'](_0x21b53e);
    _0x44defc['paragraphs']['forEach'](_0x3ddc0f => {
        const _0x442c2e = document['createElement']('p');
        _0x442c2e['className'] = 'role-index-desc-paragraph';
        _0x442c2e['innerHTML'] = _0x3ddc0f;
        _0x9b6eba['appendChild'](_0x442c2e);
    });
}
function _0x4f406c() {
    const _0x3be4ae = document['getElementById']('role-index-btn');
    const _0x36e83a = document['getElementById']('role-index-modal');
    const _0x36cf1a = document['getElementById']('close-role-index-btn');
    const _0x3d3074 = document['getElementById']('mob-top-index');
    if (_0x3be4ae && _0x36e83a) {
        _0x3be4ae['addEventListener']('click', _0x49ab83 => {
            _0x49ab83['stopPropagation']();
            if (_0x36e83a['style']['display'] === 'none' || !_0x36e83a['style']['display']) {
                _0xb21193();
                _0x36e83a['style']['display'] = 'flex';
            } else {
                _0x36e83a['style']['display'] = 'none';
            }
        });
    }
    if (_0x36cf1a && _0x36e83a) {
        _0x36cf1a['addEventListener']('click', _0xec9ccb => {
            _0xec9ccb['stopPropagation']();
            _0x36e83a['style']['display'] = 'none';
        });
    }
    if (_0x3d3074 && _0x36e83a) {
        _0x3d3074['addEventListener']('click', _0x1dc62e => {
            _0x1dc62e['stopPropagation']();
            if (_0x36e83a['style']['display'] === 'none' || !_0x36e83a['style']['display']) {
                _0xb21193();
                _0x36e83a['style']['display'] = 'flex';
            } else {
                _0x36e83a['style']['display'] = 'none';
            }
        });
    }
}
function _0x5081aa() {
    const _0x5ba845 = document['getElementById']('settings-btn');
    const _0x426cf0 = document['getElementById']('settings-panel');
    const _0x57bdb9 = document['getElementById']('close-settings-btn');
    const _0x20bff4 = document['getElementById']('setting-mouse-relative');
    if (_0x20bff4) {
        _0x20bff4['checked'] = _0x5517df;
        _0x20bff4['addEventListener']('change', () => {
            _0x5517df = _0x20bff4['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x5517df ? 'true' : 'false');
        });
    }
    const _0x39a6b6 = document['getElementById']('setting-music-volume');
    const _0x47e081 = document['getElementById']('setting-music-volume-display');
    function _0xdefec4(_0x517059) {
        const _0x173b6d = (_0x517059['value'] - _0x517059['min']) / (_0x517059['max'] - _0x517059['min']) * 0x64;
        _0x517059['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x173b6d + '%,\x20#444\x20' + _0x173b6d + '%)';
    }
    if (_0x39a6b6) {
        const _0x5d3017 = _0x1016d9['getVolume']();
        const _0x33a526 = Math['round'](_0x5d3017 * 0x64);
        _0x39a6b6['value'] = _0x33a526;
        if (_0x47e081)
            _0x47e081['textContent'] = _0x33a526 + '%';
        _0xdefec4(_0x39a6b6);
        _0x39a6b6['addEventListener']('input', () => {
            const _0x1ae8e0 = parseInt(_0x39a6b6['value'], 0xa);
            if (_0x47e081)
                _0x47e081['textContent'] = _0x1ae8e0 + '%';
            _0xdefec4(_0x39a6b6);
            _0x1016d9['setVolume'](_0x1ae8e0 / 0x64);
            _0x1016d9['setMuted'](_0x1ae8e0 === 0x0);
        });
    }
    if (_0x5ba845 && _0x426cf0) {
        _0x5ba845['addEventListener']('click', _0x39693b => {
            _0x39693b['stopPropagation']();
            _0x426cf0['style']['display'] = _0x426cf0['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x57bdb9 && _0x426cf0) {
        _0x57bdb9['addEventListener']('click', () => {
            _0x426cf0['style']['display'] = 'none';
        });
    }
    const _0x1c692f = document['getElementById']('mayor-confirm-yes');
    const _0x465229 = document['getElementById']('mayor-confirm-no');
    const _0x27a68f = document['getElementById']('mayor-confirm-dialog');
    if (_0x1c692f && _0x27a68f) {
        _0x1c692f['addEventListener']('click', () => {
            if (_0x1e443d && _0x1e443d['readyState'] === WebSocket['OPEN']) {
                _0x1e443d['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x27a68f['style']['display'] = 'none';
        });
    }
    if (_0x465229 && _0x27a68f) {
        _0x465229['addEventListener']('click', () => {
            _0x27a68f['style']['display'] = 'none';
        });
    }
    const _0x2431bd = document['getElementById']('close-ability-btn');
    if (_0x2431bd) {
        _0x2431bd['addEventListener']('click', () => {
            const _0x1a8e31 = document['getElementById']('ability-ui');
            if (_0x1a8e31)
                _0x1a8e31['style']['display'] = 'none';
        });
    }
}
let _0x17d65b = '';
function _0x4b5eaa(_0x2aa145) {
    const _0x7da867 = document['getElementById']('vote-tally-panel');
    const _0x8acbf1 = document['getElementById']('vote-tally-list');
    if (!_0x7da867 || !_0x8acbf1)
        return;
    if (_0x2aa145['state'] !== 'DAY_VOTE') {
        _0x7da867['style']['display'] = 'none';
        _0x17d65b = '';
        return;
    }
    _0x7da867['style']['display'] = 'block';
    const _0x4e9192 = {};
    for (const _0x1cbd9e in _0x2e5d9c) {
        if (!_0x2e5d9c[_0x1cbd9e]['isDead'])
            _0x4e9192[_0x1cbd9e] = 0x0;
    }
    if (_0x32a3b9 && !_0x3ae52e['isDead'])
        _0x4e9192[_0x32a3b9] = 0x0;
    const _0x29397e = _0x2aa145['votes'] || {};
    for (const _0x3d9f0f in _0x29397e) {
        const _0x51a9c8 = _0x29397e[_0x3d9f0f];
        const _0x1d7d01 = _0x2aa145['mayorRevealed'] && _0x2aa145['mayorRevealed'][_0x3d9f0f] ? 0x2 : 0x1;
        _0x4e9192[_0x51a9c8] = (_0x4e9192[_0x51a9c8] || 0x0) + _0x1d7d01;
    }
    let _0x2088b9 = 0x0;
    const _0x2c8c4c = _0x2aa145['skips'] || {};
    for (const _0x5c8d3d in _0x2c8c4c) {
        _0x2088b9 += Number(_0x2c8c4c[_0x5c8d3d]) || 0x1;
    }
    const _0x50afdb = JSON['stringify'](_0x4e9192) + '_' + _0x2088b9 + '_' + _0x3ae52e['isDead'];
    if (_0x50afdb === _0x17d65b)
        return;
    _0x17d65b = _0x50afdb;
    _0x8acbf1['innerHTML'] = '';
    for (const _0x1a87af in _0x4e9192) {
        const _0x18b4a5 = parseInt(_0x1a87af);
        const _0x96244 = _0x18b4a5 === _0x32a3b9 ? _0x2a649e : _0x2e5d9c[_0x1a87af] ? _0x2e5d9c[_0x1a87af]['name'] : 'Player\x20' + _0x1a87af;
        const _0x52016e = document['createElement']('div');
        _0x52016e['className'] = 'vote-tally-entry';
        const _0x52d3a1 = document['createElement']('span');
        _0x52d3a1['textContent'] = _0x96244;
        const _0x41c766 = document['createElement']('span');
        _0x41c766['className'] = 'vote-count';
        _0x41c766['textContent'] = _0x4e9192[_0x1a87af] + '\x20vote' + (_0x4e9192[_0x1a87af] === 0x1 ? '' : 's');
        _0x52016e['appendChild'](_0x52d3a1);
        _0x52016e['appendChild'](_0x41c766);
        if (_0x18b4a5 !== _0x32a3b9 && !_0x3ae52e['isDead']) {
            _0x52016e['style']['cursor'] = 'pointer';
            _0x52016e['title'] = 'Vote\x20for\x20' + _0x96244;
            _0x52016e['addEventListener']('click', _0x2b4700 => {
                _0x2b4700['stopPropagation']();
                if (_0x1e443d && _0x1e443d['readyState'] === WebSocket['OPEN']) {
                    _0x1e443d['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x96244
                    }));
                }
            });
        }
        _0x8acbf1['appendChild'](_0x52016e);
    }
    const _0x507e0e = document['createElement']('div');
    _0x507e0e['className'] = 'vote-tally-skip';
    _0x507e0e['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x2088b9 + '</span>';
    if (!_0x3ae52e['isDead']) {
        _0x507e0e['style']['cursor'] = 'pointer';
        _0x507e0e['title'] = 'Click\x20to\x20skip\x20vote';
        _0x507e0e['addEventListener']('click', _0x1ec731 => {
            _0x1ec731['stopPropagation']();
            if (_0x1e443d && _0x1e443d['readyState'] === WebSocket['OPEN']) {
                _0x1e443d['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x8acbf1['appendChild'](_0x507e0e);
}
let _0x18e4e9 = null;
let _0x261ec2 = null;
let _0xbe759f = null;
let _0x32b061 = null;
let _0x61fc1b = null;
function _0x5bef31() {
    if (_0x1e443d && _0x1e443d['readyState'] === WebSocket['OPEN']) {
        _0x1e443d['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x18e4e9,
            'abilityTarget': _0x261ec2,
            'killTarget': _0xbe759f
        }));
    }
}
function _0x3faca4() {
    if (_0x1e443d && _0x1e443d['readyState'] === WebSocket['OPEN']) {
        _0x1e443d['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'blackmailTarget': _0x32b061,
            'killTarget': _0x61fc1b
        }));
    }
}
function _0x5d8056() {
    const _0x5200a1 = document['getElementById']('ability-ui-body');
    if (!_0x5200a1)
        return;
    _0x5200a1['innerHTML'] = '';
    if (_0x41b96f === 'Celebrity' || _0x41b96f === 'Mayor') {
        const _0x493a36 = document['createElement']('div');
        _0x493a36['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x493a36['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x5200a1['appendChild'](_0x493a36);
        return;
    }
    if (_0x41b96f === 'Blackmailer') {
        const _0x25e4f9 = document['createElement']('div');
        _0x25e4f9['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x25e4f9['innerText'] = 'Blackmail\x20Target\x20(Silences\x20for\x20full\x20day):';
        _0x5200a1['appendChild'](_0x25e4f9);
        const _0x3db239 = document['createElement']('div');
        _0x3db239['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x5388ea = document['createElement']('button');
        _0x5388ea['className'] = 'layer-btn';
        _0x5388ea['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x5388ea['innerText'] = 'No\x20one';
        if (_0x32b061 === null)
            _0x5388ea['classList']['add']('active');
        _0x5388ea['onclick'] = () => {
            _0x32b061 = null;
            _0x3faca4();
            _0x5d8056();
        };
        _0x3db239['appendChild'](_0x5388ea);
        for (const _0x4d4673 in _0x2e5d9c) {
            const _0x2e7247 = _0x2e5d9c[_0x4d4673];
            if (_0x2e7247['isDead'])
                continue;
            const _0x4f8a37 = document['createElement']('button');
            _0x4f8a37['className'] = 'layer-btn';
            _0x4f8a37['innerText'] = _0x2e7247['name'];
            if (_0x32b061 === parseInt(_0x4d4673))
                _0x4f8a37['classList']['add']('active');
            _0x4f8a37['onclick'] = () => {
                _0x32b061 = parseInt(_0x4d4673);
                _0x3faca4();
                _0x5d8056();
            };
            _0x3db239['appendChild'](_0x4f8a37);
        }
        if (!_0x3ae52e['isDead']) {
            const _0x2c9c69 = document['createElement']('button');
            _0x2c9c69['className'] = 'layer-btn';
            _0x2c9c69['style']['cssText'] = 'grid-column:\x20span\x202;';
            _0x2c9c69['innerText'] = _0x2a649e + '\x20(Self\x20-\x20Decoy)';
            if (_0x32b061 === _0x32a3b9)
                _0x2c9c69['classList']['add']('active');
            _0x2c9c69['onclick'] = () => {
                _0x32b061 = _0x32a3b9;
                _0x3faca4();
                _0x5d8056();
            };
            _0x3db239['appendChild'](_0x2c9c69);
        }
        _0x5200a1['appendChild'](_0x3db239);
        const _0x35fe1b = document['createElement']('div');
        _0x35fe1b['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x35fe1b['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x5200a1['appendChild'](_0x35fe1b);
        const _0x599337 = document['createElement']('div');
        _0x599337['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x379f8a = document['createElement']('button');
        _0x379f8a['className'] = 'layer-btn';
        _0x379f8a['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x379f8a['innerText'] = 'No\x20one';
        if (!_0x61fc1b && !_0x1e780b['CURRENT_TARGET'])
            _0x379f8a['classList']['add']('active');
        _0x379f8a['onclick'] = () => {
            _0x61fc1b = null;
            _0x1e780b['CURRENT_TARGET'] = null;
            _0x3faca4();
            _0x5d8056();
        };
        _0x599337['appendChild'](_0x379f8a);
        for (const _0x1d0043 in _0x2e5d9c) {
            const _0x27f429 = _0x2e5d9c[_0x1d0043];
            if (_0x27f429['isDead'])
                continue;
            const _0x587567 = document['createElement']('button');
            _0x587567['className'] = 'layer-btn';
            _0x587567['innerText'] = _0x27f429['name'];
            if (_0x61fc1b === parseInt(_0x1d0043) || _0x1e780b['CURRENT_TARGET'] === parseInt(_0x1d0043))
                _0x587567['classList']['add']('active');
            _0x587567['onclick'] = () => {
                _0x61fc1b = parseInt(_0x1d0043);
                _0x1e780b['CURRENT_TARGET'] = parseInt(_0x1d0043);
                _0x3faca4();
                _0x5d8056();
            };
            _0x599337['appendChild'](_0x587567);
        }
        _0x5200a1['appendChild'](_0x599337);
        return;
    }
    if (_0x41b96f === 'Skinwalker') {
        const _0x1987cc = document['createElement']('div');
        _0x1987cc['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x1987cc['innerText'] = 'Transform\x20into:';
        _0x5200a1['appendChild'](_0x1987cc);
        const _0x4d2527 = document['createElement']('div');
        _0x4d2527['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x56ba6a = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x1a088c = _0x4c7351 => {
            if (_0x1e780b['ROLES_IN_GAME'] && Array['isArray'](_0x1e780b['ROLES_IN_GAME'])) {
                return _0x1e780b['ROLES_IN_GAME']['includes'](_0x4c7351);
            }
            if (_0x1e780b['ROLE_LIST_RAW'] && _0x1e780b['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x1e780b['ROLE_LIST_RAW']['some'](_0x516731 => _0x516731['name'] === _0x4c7351 && !_0x516731['isDead']);
            }
            return ![];
        };
        const _0x2c6ea0 = [
            'None',
            ..._0x56ba6a['filter'](_0x1a088c)
        ];
        _0x2c6ea0['forEach'](_0x57b89c => {
            const _0xb51e57 = document['createElement']('button');
            _0xb51e57['className'] = 'layer-btn';
            _0xb51e57['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0xb51e57['innerText'] = _0x57b89c;
            const _0xdd7734 = _0x57b89c === 'None' && !_0x18e4e9 || _0x18e4e9 === _0x57b89c;
            if (_0xdd7734)
                _0xb51e57['classList']['add']('active');
            const _0x187cd6 = _0x57b89c !== 'None' && _0x1e780b['SKINWALKER_LAST_ROLE'] && _0x1e780b['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x57b89c['toLowerCase']();
            if (_0x187cd6) {
                _0xb51e57['style']['opacity'] = '0.45';
                _0xb51e57['style']['cursor'] = 'not-allowed';
                _0xb51e57['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0xb51e57['onclick'] = () => {
                    _0x1c68df('You\x20cannot\x20transform\x20into\x20' + _0x57b89c + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0xb51e57['onclick'] = () => {
                    _0x18e4e9 = _0x57b89c === 'None' ? null : _0x57b89c;
                    _0x5bef31();
                    _0x5d8056();
                };
            }
            _0x4d2527['appendChild'](_0xb51e57);
        });
        _0x5200a1['appendChild'](_0x4d2527);
        if (_0x1a088c('Vigilante')) {
            const _0x597e3b = document['createElement']('div');
            _0x597e3b['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x597e3b['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x5200a1['appendChild'](_0x597e3b);
        }
        if (_0x18e4e9 === 'Vigilante') {
            const _0x43a5b9 = document['createElement']('div');
            _0x43a5b9['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x43a5b9['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x5200a1['appendChild'](_0x43a5b9);
        } else if (_0x18e4e9 && _0x18e4e9 !== 'Celebrity') {
            const _0x2f1990 = document['createElement']('div');
            _0x2f1990['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x2f1990['innerText'] = 'Use\x20' + _0x18e4e9 + '\x20ability\x20on:';
            _0x5200a1['appendChild'](_0x2f1990);
            const _0x49b60b = document['createElement']('div');
            _0x49b60b['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x2197ad = document['createElement']('button');
            _0x2197ad['className'] = 'layer-btn';
            _0x2197ad['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x2197ad['innerText'] = 'No\x20one';
            if (!_0x261ec2)
                _0x2197ad['classList']['add']('active');
            _0x2197ad['onclick'] = () => {
                _0x261ec2 = null;
                _0x5bef31();
                _0x5d8056();
            };
            _0x49b60b['appendChild'](_0x2197ad);
            for (const _0x144438 in _0x2e5d9c) {
                const _0x246207 = _0x2e5d9c[_0x144438];
                if (_0x246207['isDead'])
                    continue;
                const _0x528f15 = document['createElement']('button');
                _0x528f15['className'] = 'layer-btn';
                _0x528f15['innerText'] = _0x246207['name'];
                if (_0x261ec2 === parseInt(_0x144438))
                    _0x528f15['classList']['add']('active');
                _0x528f15['onclick'] = () => {
                    _0x261ec2 = parseInt(_0x144438);
                    _0x5bef31();
                    _0x5d8056();
                };
                _0x49b60b['appendChild'](_0x528f15);
            }
            _0x5200a1['appendChild'](_0x49b60b);
        }
        const _0x2bd032 = document['createElement']('div');
        _0x2bd032['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x2bd032['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x5200a1['appendChild'](_0x2bd032);
        const _0x56adfe = document['createElement']('div');
        _0x56adfe['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x1c798b = document['createElement']('button');
        _0x1c798b['className'] = 'layer-btn';
        _0x1c798b['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x1c798b['innerText'] = 'No\x20one';
        if (!_0xbe759f && !_0x1e780b['CURRENT_TARGET'])
            _0x1c798b['classList']['add']('active');
        _0x1c798b['onclick'] = () => {
            _0xbe759f = null;
            _0x1e780b['CURRENT_TARGET'] = null;
            _0x5bef31();
            _0x5d8056();
        };
        _0x56adfe['appendChild'](_0x1c798b);
        for (const _0x4db882 in _0x2e5d9c) {
            const _0x45a5bf = _0x2e5d9c[_0x4db882];
            if (_0x45a5bf['isDead'])
                continue;
            const _0x4ba0fc = document['createElement']('button');
            _0x4ba0fc['className'] = 'layer-btn';
            _0x4ba0fc['innerText'] = _0x45a5bf['name'];
            if (_0xbe759f === parseInt(_0x4db882) || _0x1e780b['CURRENT_TARGET'] === parseInt(_0x4db882))
                _0x4ba0fc['classList']['add']('active');
            _0x4ba0fc['onclick'] = () => {
                _0xbe759f = parseInt(_0x4db882);
                _0x1e780b['CURRENT_TARGET'] = parseInt(_0x4db882);
                _0x5bef31();
                _0x5d8056();
            };
            _0x56adfe['appendChild'](_0x4ba0fc);
        }
        _0x5200a1['appendChild'](_0x56adfe);
        return;
    }
    let _0x55786b = '';
    let _0x762929 = ![];
    if (_0x41b96f === 'Doctor') {
        _0x55786b = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x762929 = !![];
    } else if (_0x41b96f === 'Investigator') {
        _0x55786b = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x41b96f === 'Tracker') {
        _0x55786b = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x41b96f === 'Archer') {
        _0x55786b = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x41b96f === 'Escort') {
        _0x55786b = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x41b96f === 'Vigilante') {
        _0x55786b = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x4324e0 = document['createElement']('div');
    _0x4324e0['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x4324e0['innerText'] = _0x55786b;
    _0x5200a1['appendChild'](_0x4324e0);
    const _0x516b96 = document['createElement']('div');
    _0x516b96['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x269281 = document['createElement']('button');
    _0x269281['className'] = 'layer-btn';
    _0x269281['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x269281['innerText'] = 'No\x20one';
    if (_0x1e780b['CURRENT_TARGET'] === null)
        _0x269281['classList']['add']('active');
    _0x269281['onclick'] = () => {
        _0x1e780b['CURRENT_TARGET'] = null;
        if (_0x1e443d && _0x1e443d['readyState'] === WebSocket['OPEN']) {
            _0x1e443d['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x5d8056();
    };
    _0x516b96['appendChild'](_0x269281);
    for (const _0x26496e in _0x2e5d9c) {
        const _0x31d6d8 = _0x2e5d9c[_0x26496e];
        if (_0x31d6d8['isDead'])
            continue;
        const _0x498b77 = document['createElement']('button');
        _0x498b77['className'] = 'layer-btn';
        _0x498b77['innerText'] = _0x31d6d8['name'];
        if (_0x1e780b['CURRENT_TARGET'] === parseInt(_0x26496e))
            _0x498b77['classList']['add']('active');
        _0x498b77['onclick'] = () => {
            _0x1e780b['CURRENT_TARGET'] = parseInt(_0x26496e);
            if (_0x1e443d && _0x1e443d['readyState'] === WebSocket['OPEN']) {
                _0x1e443d['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x26496e)
                }));
            }
            _0x5d8056();
        };
        _0x516b96['appendChild'](_0x498b77);
    }
    if (_0x762929 && !_0x3ae52e['isDead']) {
        const _0x14da1e = document['createElement']('button');
        _0x14da1e['className'] = 'layer-btn';
        _0x14da1e['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x14da1e['innerText'] = _0x2a649e + '\x20(Self)';
        if (_0x1e780b['CURRENT_TARGET'] === _0x32a3b9)
            _0x14da1e['classList']['add']('active');
        _0x14da1e['onclick'] = () => {
            _0x1e780b['CURRENT_TARGET'] = _0x32a3b9;
            if (_0x1e443d && _0x1e443d['readyState'] === WebSocket['OPEN']) {
                _0x1e443d['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x32a3b9
                }));
            }
            _0x5d8056();
        };
        _0x516b96['appendChild'](_0x14da1e);
    }
    _0x5200a1['appendChild'](_0x516b96);
}
function _0x4a4eb0() {
    if (_0x1e443d && (_0x1e443d['readyState'] === WebSocket['OPEN'] || _0x1e443d['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x53b5f6 = new URLSearchParams();
    if (_0x34e050)
        _0x53b5f6['set']('token', _0x34e050);
    _0x53b5f6['set']('ngrok-skip-browser-warning', 'true');
    const _0x5d4b6c = 'wss://this-studying-motherboard-emissions.trycloudflare.com';
    const _0x429262 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x5d4b6c;
    const _0x3563d1 = _0x429262 + '/?' + _0x53b5f6['toString']();
    _0x1e443d = new WebSocket(_0x3563d1);
    _0x1e443d['onopen'] = function () {
        if (!_0x312f87 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x1bada2 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x6b9532 = window['_FB'] && window['_FB']['_userData'];
                const _0x23ee7e = !(_0x1bada2 && _0x6b9532 && _0x6b9532['username']);
                const _0x15a5bf = _0x23ee7e ? 'body01.png' : _0x3b242b;
                const _0x425ed4 = _0x23ee7e ? 'eyes4.png' : _0x577819;
                const _0x150170 = !_0x23ee7e && _0x6b9532 && _0x6b9532['photoURL'] ? _0x6b9532['photoURL'] : '';
                const _0x24a17b = !_0x23ee7e && _0x1bada2 ? _0x1bada2['uid'] : '';
                const _0x331b45 = !_0x23ee7e && _0x6b9532 ? {
                    'townWins': _0x6b9532['townWins'] || 0x0,
                    'mafiaWins': _0x6b9532['mafiaWins'] || 0x0,
                    'deaths': _0x6b9532['deaths'] || 0x0,
                    'townLosses': _0x6b9532['townLosses'] || 0x0,
                    'mafiaLosses': _0x6b9532['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x2a649e,
                    'token': _0x34e050,
                    'body': _0x15a5bf,
                    'eyes': _0x425ed4,
                    'isGuest': _0x23ee7e,
                    'uid': _0x24a17b,
                    'photoURL': _0x150170,
                    'accountStats': _0x331b45
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x1e443d && _0x1e443d['readyState'] === WebSocket['OPEN']) {
            _0x1e443d['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x1e443d['onclose'] = _0x5d64cb => {
        if (_0x5d64cb['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x5d64cb['code'] === 0xfa2 || _0x5d64cb['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x26b1de = document['getElementById']('disconnect-overlay');
        if (!_0x26b1de) {
            _0x26b1de = document['createElement']('div');
            _0x26b1de['id'] = 'disconnect-overlay';
            _0x26b1de['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x26b1de['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x26b1de);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x1e443d['onmessage'] = _0x3d16ce => {
        const _0x5d434f = JSON['parse'](_0x3d16ce['data']);
        if (_0x5d434f['type'] === 'map_data') {
            _0x1e780b['MAP']['tileSize'] = _0x5d434f['map']['tileSize'];
            _0x1e780b['MAP']['columns'] = _0x5d434f['map']['columns'];
            _0x1e780b['MAP']['rows'] = _0x5d434f['map']['rows'];
            _0x1e780b['MAP']['layers'] = _0x5d434f['map']['layers'];
            if (_0x5d434f['map']['doors']) {
                _0x1e780b['MAP']['doors'] = _0x5d434f['map']['doors'];
                const _0x41db8d = _0x1e780b['MAP']['layers']['find'](_0x10382e => _0x10382e['name'] === 'floor2');
                if (_0x41db8d) {
                    for (const _0x5a297f in _0x1e780b['MAP']['doors']) {
                        _0x41db8d['data'][parseInt(_0x5a297f)] = 0x2;
                    }
                }
            }
            if (_0x5d434f['entities'])
                _0x1e780b['ENTITIES'] = _0x5d434f['entities'];
            _0x56f68c();
            _0x1e780b['SYSTEM']['isReady'] = !![];
            _0x3398f5();
            if (!_0x1e780b['SYSTEM']['_gameLoopRunning']) {
                _0x1e780b['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x311fa6);
            }
            return;
        }
        if (_0x5d434f['type'] === 'init') {
            _0x32a3b9 = _0x5d434f['id'];
            _0x312f87 = ![];
            _0x4f44c8();
            if (_0x14c242) {
                const _0xc1e288 = document['getElementById']('leaderboard-list');
                const _0x383e85 = document['getElementById']('leaderboard-toggle');
                if (_0xc1e288) {
                    _0xc1e288['style']['display'] = 'none';
                    if (_0x383e85)
                        _0x383e85['style']['transform'] = 'rotate(180deg)';
                }
                const _0x2b6521 = document['getElementById']('role-list-items');
                const _0x5cb0a3 = document['getElementById']('role-list-toggle');
                if (_0x2b6521) {
                    _0x2b6521['style']['display'] = 'none';
                    if (_0x5cb0a3)
                        _0x5cb0a3['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x3f9b57 = _0x5d434f['isOwner'] || ![];
            _0x2a649e = _0x5d434f['name'] || _0x2a649e;
            _0x1e780b['MAP']['tileSize'] = _0x5d434f['map']['tileSize'];
            _0x1e780b['MAP']['columns'] = _0x5d434f['map']['columns'];
            _0x1e780b['MAP']['rows'] = _0x5d434f['map']['rows'];
            _0x1e780b['MAP']['layers'] = _0x5d434f['map']['layers'];
            if (_0x5d434f['map']['doors']) {
                _0x1e780b['MAP']['doors'] = _0x5d434f['map']['doors'];
                const _0x5643f1 = _0x1e780b['MAP']['layers']['find'](_0x50d206 => _0x50d206['name'] === 'floor2');
                if (_0x5643f1) {
                    for (const _0x321d89 in _0x1e780b['MAP']['doors']) {
                        _0x5643f1['data'][parseInt(_0x321d89)] = 0x2;
                    }
                }
            }
            if (_0x5d434f['entities'])
                _0x1e780b['ENTITIES'] = _0x5d434f['entities'];
            _0x56f68c();
            _0x3ae52e['x'] = _0x1e780b['MAP']['columns'] * _0x1e780b['MAP']['tileSize'] / 0x2;
            _0x3ae52e['y'] = _0x1e780b['MAP']['rows'] * _0x1e780b['MAP']['tileSize'] / 0x2;
            _0x1e780b['CAMERA']['x'] = _0x3ae52e['x'] + _0x3ae52e['width'] / 0x2 - _0x1e780b['CAMERA']['width'] / 0x2;
            _0x1e780b['CAMERA']['y'] = _0x3ae52e['y'] + _0x3ae52e['height'] / 0x2 - _0x1e780b['CAMERA']['height'] / 0x2;
            if (_0x3f9b57) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x40adca();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x191090 = document['getElementById']('role-index-btn-wrap');
            if (_0x191090)
                _0x191090['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x1e780b['SYSTEM']['lastTime'] = performance['now']();
            _0x1e780b['SYSTEM']['isReady'] = !![];
            _0x219571();
            if (!_0x1e780b['SYSTEM']['_gameLoopRunning']) {
                _0x1e780b['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x311fa6);
            }
            return;
        } else if (_0x5d434f['type'] === 'state') {
            const _0x7c31b0 = {};
            for (const _0x23834f in _0x5d434f['players']) {
                if (parseInt(_0x23834f) === _0x32a3b9)
                    continue;
                const _0x51d13c = _0x5d434f['players'][_0x23834f];
                const _0x598ada = _0x2e5d9c[_0x23834f];
                if (_0x598ada) {
                    const _0x160743 = _0x51d13c['x'] - _0x598ada['renderX'];
                    const _0x15b213 = _0x51d13c['y'] - _0x598ada['renderY'];
                    const _0xf65b81 = _0x160743 * _0x160743 + _0x15b213 * _0x15b213 > 0x78 * 0x78;
                    Object['assign'](_0x598ada, _0x51d13c);
                    if (_0xf65b81) {
                        _0x598ada['renderX'] = _0x51d13c['x'];
                        _0x598ada['renderY'] = _0x51d13c['y'];
                    }
                    _0x7c31b0[_0x23834f] = _0x598ada;
                } else {
                    _0x7c31b0[_0x23834f] = {
                        ..._0x51d13c,
                        'renderX': _0x51d13c['x'],
                        'renderY': _0x51d13c['y'],
                        'renderAngle': _0x51d13c['angle'] || 0x0
                    };
                }
            }
            _0x2e5d9c = _0x7c31b0;
            _0x566eff();
            if (_0x5d434f['players'][_0x32a3b9]) {
                const _0x5e6678 = _0x5d434f['players'][_0x32a3b9];
                _0x3ae52e['chats'] = _0x5e6678['chats'] || [];
                _0x3ae52e['isDead'] = _0x5e6678['isDead'];
                _0x3ae52e['hasArrow'] = _0x5e6678['hasArrow'] || ![];
                if (_0x5e6678['name'])
                    _0x2a649e = _0x5e6678['name'];
                _0x219571();
                const _0x1dc8f7 = Math['hypot'](_0x5e6678['x'] - _0x3ae52e['x'], _0x5e6678['y'] - _0x3ae52e['y']);
                if (_0x1dc8f7 > 0xfa) {
                    _0x3ae52e['x'] = _0x5e6678['x'];
                    _0x3ae52e['y'] = _0x5e6678['y'];
                } else if (_0x1dc8f7 > 0x50) {
                    _0x3ae52e['x'] += (_0x5e6678['x'] - _0x3ae52e['x']) * 0.06;
                    _0x3ae52e['y'] += (_0x5e6678['y'] - _0x3ae52e['y']) * 0.06;
                }
            }
            if (_0x5d434f['entities'])
                _0x1e780b['ENTITIES'] = _0x5d434f['entities'];
            if (_0x5d434f['game']) {
                _0x1e780b['GAME_STATE'] = _0x5d434f['game']['state'];
                _0x1e780b['NIGHT_ABILITY_OPEN'] = _0x5d434f['game']['nightAbilityOpen'];
                if (_0x5d434f['game']['bloodSplatters'])
                    _0xd35a6b = _0x5d434f['game']['bloodSplatters'];
                if (_0x5d434f['game']['bloodDrops'])
                    _0x4e8fad = _0x5d434f['game']['bloodDrops'];
                if (_0x5d434f['game']['blackmailed']) {
                    _0x357b9f = new Set(_0x5d434f['game']['blackmailed']);
                } else {
                    _0x357b9f['clear']();
                }
                if (_0x5d434f['game']['mayorRevealed']) {
                    for (const _0x3726f6 in _0x5d434f['game']['mayorRevealed']) {
                        _0x4a15f7['add'](parseInt(_0x3726f6));
                    }
                }
                if (_0x1e780b['LAST_STATE'] !== _0x1e780b['GAME_STATE']) {
                    if (_0x1e780b['GAME_STATE'] !== 'NIGHT') {
                        _0x1e780b['CURRENT_TARGET'] = null;
                        _0x18e4e9 = null;
                        _0x261ec2 = null;
                        _0xbe759f = null;
                        _0x32b061 = null;
                        _0x61fc1b = null;
                        const _0x2de8f0 = document['getElementById']('ability-ui');
                        if (_0x2de8f0)
                            _0x2de8f0['style']['display'] = 'none';
                    }
                    if (_0x1e780b['GAME_STATE'] === 'NIGHT') {
                        _0x3ae52e['chats'] = [];
                        for (const _0x5c320b in _0x2e5d9c) {
                            _0x2e5d9c[_0x5c320b]['chats'] = [];
                        }
                    }
                    _0x1e780b['LAST_STATE'] = _0x1e780b['GAME_STATE'];
                    _0xcca5b7();
                    _0x1016d9['onStateChange'](_0x1e780b['GAME_STATE'], _0x5d434f['game']['nightAbilityOpen']);
                }
                const _0x1f00f1 = document['getElementById']('phase-ui');
                if (_0x1f00f1) {
                    if (_0x5d434f['game']['state'] === 'LOBBY') {
                        _0x1f00f1['style']['display'] = 'none';
                    } else {
                        _0x1f00f1['style']['display'] = 'block';
                    }
                    let _0x3f3094 = _0x5d434f['game']['state']['replace']('_', '\x20');
                    if (_0x5d434f['game']['state'] === 'DAY_DISCUSS') {
                        _0x3f3094 = 'DAY\x20' + (_0x5d434f['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x5d434f['game']['timer'] + 's';
                    } else if (_0x5d434f['game']['state'] === 'DAY_VOTE') {
                        _0x3f3094 = 'DAY\x20' + (_0x5d434f['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x5d434f['game']['timer'] + 's';
                    } else if (_0x5d434f['game']['state'] === 'NIGHT') {
                        const _0x598e86 = _0x5d434f['game']['dayCount'] || 0x1;
                        if (_0x5d434f['game']['nightAbilityOpen']) {
                            _0x3f3094 = 'NIGHT\x20' + _0x598e86 + '\x20ABILITY\x20PHASE';
                            const _0x10a3c0 = _0x5d434f['game']['abilityTimer'] !== undefined ? _0x5d434f['game']['abilityTimer'] : _0x5d434f['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x10a3c0 + 's';
                        } else {
                            _0x3f3094 = 'NIGHT\x20' + _0x598e86;
                            document['getElementById']('phase-timer')['innerText'] = _0x5d434f['game']['timer'] + 's';
                        }
                    }
                    if (_0x5d434f['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x3f3094;
                    }
                }
                if (_0x5d434f['game']['state'] === 'NIGHT') {
                    const _0x211e5b = document['getElementById']('ability-timer-label');
                    if (_0x211e5b) {
                        const _0x603b7d = _0x5d434f['game']['abilityTimer'] !== undefined ? _0x5d434f['game']['abilityTimer'] : _0x5d434f['game']['timer'];
                        _0x211e5b['innerText'] = _0x5d434f['game']['nightAbilityOpen'] ? _0x603b7d + 's' : '';
                    }
                    if (_0x5d434f['game']['nightAbilityOpen'] && !_0x2a952e && !_0x3ae52e['isDead']) {
                        _0x2a952e = !![];
                        _0x5d8056();
                        const _0x5629af = document['getElementById']('ability-ui');
                        if (_0x5629af)
                            _0x5629af['style']['display'] = 'block';
                    }
                    if (!_0x5d434f['game']['nightAbilityOpen']) {
                        const _0x1ff990 = document['getElementById']('ability-ui');
                        if (_0x1ff990 && _0x1ff990['style']['display'] === 'block') {
                            _0x1ff990['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x2a952e = ![];
                }
                if (_0x5d434f['game']['rolesInGame']) {
                    _0x1e780b['ROLES_IN_GAME'] = _0x5d434f['game']['rolesInGame'];
                }
                if (_0x5d434f['game']['skinwalkerLastRole'] !== undefined) {
                    _0x1e780b['SKINWALKER_LAST_ROLE'] = _0x5d434f['game']['skinwalkerLastRole'];
                }
                if (_0x5d434f['game']['state'] === 'NIGHT') {
                    const _0xb53ab6 = document['getElementById']('will-ui');
                    if (_0xb53ab6 && _0xb53ab6['style']['display'] === 'flex') {
                        _0xb53ab6['style']['display'] = 'none';
                        const _0x293d8e = document['getElementById']('will-input');
                        if (_0x293d8e)
                            _0x293d8e['blur']();
                    }
                }
                _0x4b5eaa(_0x5d434f['game']);
                if (_0x5d434f['game']['roleListMode'] !== undefined) {
                    _0x1e780b['ROLE_LIST_RAW'] = _0x5d434f['game']['roleList'] || [];
                    _0x3bbff4(_0x5d434f['game']['roleList'], _0x5d434f['game']['roleListMode']);
                }
            }
        } else if (_0x5d434f['type'] === 'teleport') {
            _0x3ae52e['x'] = _0x5d434f['x'];
            _0x3ae52e['y'] = _0x5d434f['y'];
            _0x3ae52e['vx'] = 0x0;
            _0x3ae52e['vy'] = 0x0;
            _0x1e780b['CAMERA']['x'] = null;
            if (_0x5d434f['teleportId'] !== undefined)
                _0x1de9bc = _0x5d434f['teleportId'];
        } else if (_0x5d434f['type'] === 'bulk_teleport') {
            for (const _0x3b4bf8 in _0x5d434f['positions']) {
                const _0x533414 = _0x5d434f['positions'][_0x3b4bf8];
                if (parseInt(_0x3b4bf8) === _0x32a3b9) {
                    _0x3ae52e['x'] = _0x533414['x'];
                    _0x3ae52e['y'] = _0x533414['y'];
                    _0x3ae52e['vx'] = 0x0;
                    _0x3ae52e['vy'] = 0x0;
                    _0x1e780b['CAMERA']['x'] = null;
                    continue;
                }
                const _0x3974ed = _0x2e5d9c[_0x3b4bf8];
                if (_0x3974ed) {
                    _0x3974ed['x'] = _0x533414['x'];
                    _0x3974ed['y'] = _0x533414['y'];
                    _0x3974ed['renderX'] = _0x533414['x'];
                    _0x3974ed['renderY'] = _0x533414['y'];
                    _0x3974ed['vx'] = 0x0;
                    _0x3974ed['vy'] = 0x0;
                }
            }
        } else if (_0x5d434f['type'] === 'player_left') {
            delete _0x2e5d9c[_0x5d434f['id']];
            _0x4a15f7['delete'](parseInt(_0x5d434f['id']));
        } else if (_0x5d434f['type'] === 'map_update') {
            const _0x5f0d51 = _0x1e780b['MAP']['layers']['find'](_0x5435b0 => _0x5435b0['name'] === _0x5d434f['layer']);
            if (_0x5f0d51) {
                _0x5f0d51['data'][_0x5d434f['row'] * _0x1e780b['MAP']['columns'] + _0x5d434f['col']] = _0x5d434f['gid'];
                const _0x4b559d = _0x5d434f['row'] * _0x1e780b['MAP']['columns'] + _0x5d434f['col'];
                if (_0x1e780b['MAP']['doors'] && _0x1e780b['MAP']['doors'][_0x4b559d]) {
                    const _0xf4fe45 = _0x1e780b['MAP']['layers']['find'](_0x2b9eda => _0x2b9eda['name'] === 'floor2');
                    if (_0xf4fe45)
                        _0xf4fe45['data'][_0x4b559d] = 0x2;
                }
                const _0x585340 = Math['floor'](_0x5d434f['col'] * _0x1e780b['MAP']['tileSize'] / _0x1e780b['MAP']['chunkSize']);
                const _0x3e8a34 = Math['floor'](_0x5d434f['row'] * _0x1e780b['MAP']['tileSize'] / _0x1e780b['MAP']['chunkSize']);
                _0x80d68b(_0x585340, _0x3e8a34);
                _0x4a1f99 = null;
                _0xbbacc7 = null;
            }
        } else if (_0x5d434f['type'] === 'role_assign') {
            _0x41b96f = _0x5d434f['role'];
            _0x3ae52e['isDead'] = _0x41b96f === 'Spectator';
            _0x4a15f7['clear']();
            _0x1e780b['CURRENT_TARGET'] = null;
            _0x18e4e9 = null;
            _0x261ec2 = null;
            _0xbe759f = null;
            _0x32b061 = null;
            _0x61fc1b = null;
            _0x2a952e = ![];
            const _0x394d3c = document['getElementById']('ability-ui');
            if (_0x394d3c)
                _0x394d3c['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x41b96f;
            _0xcca5b7();
            _0x1c68df(_0x41b96f === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x41b96f, !![]);
            let _0x3e5f8d = '';
            if (_0x41b96f === 'Investigator')
                _0x3e5f8d = 'Investigate\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x41b96f === 'Tracker')
                _0x3e5f8d = 'Track\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x41b96f === 'Doctor')
                _0x3e5f8d = 'Heal\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x41b96f === 'Archer')
                _0x3e5f8d = 'Guard\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x41b96f === 'Escort')
                _0x3e5f8d = 'Roleblock\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x41b96f === 'Vigilante')
                _0x3e5f8d = 'Shoot\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x41b96f === 'Skinwalker')
                _0x3e5f8d = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x41b96f === 'Blackmailer')
                _0x3e5f8d = 'Pick\x20a\x20player\x20to\x20blackmail\x20and\x20a\x20player\x20to\x20kill\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x41b96f === 'Celebrity')
                _0x3e5f8d = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x41b96f === 'Mayor')
                _0x3e5f8d = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x1c68df(_0x3e5f8d, !![]);
        } else if (_0x5d434f['type'] === 'mayor_reveal') {
            _0x4a15f7['add'](parseInt(_0x5d434f['playerId']));
            _0x219571();
            _0xcca5b7();
        } else if (_0x5d434f['type'] === 'rolelist_update') {
            _0x1e780b['ROLE_LIST_RAW'] = _0x5d434f['list'] || [];
            _0x3bbff4(_0x5d434f['list'], _0x5d434f['mode']);
        } else if (_0x5d434f['type'] === 'sound_event') {
            _0x1016d9['onSoundEvent'](_0x5d434f['track']);
        } else if (_0x5d434f['type'] === 'blood_splatter') {
            _0xd35a6b['push']({
                'x': _0x5d434f['x'],
                'y': _0x5d434f['y']
            });
        } else if (_0x5d434f['type'] === 'blood_drop') {
            _0x4e8fad['push']({
                'x': _0x5d434f['x'],
                'y': _0x5d434f['y']
            });
        } else if (_0x5d434f['type'] === 'day_fade') {
            _0x407467 = 0x1;
            _0x4fa5be = performance['now']() + 0x3e8;
        } else if (_0x5d434f['type'] === 'player_stats_updated') {
            const _0x42746f = parseInt(_0x5d434f['id']);
            if (_0x42746f === _0x32a3b9 && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x5d434f['accountStats']);
            }
            if (_0x2e5d9c[_0x5d434f['id']]) {
                _0x2e5d9c[_0x5d434f['id']]['accountStats'] = _0x5d434f['accountStats'];
            }
            _0x566eff();
        } else if (_0x5d434f['type'] === 'stats_update') {
            const _0x1a442c = window['_FB'];
            if (_0x1a442c && _0x1a442c['_currentUser'] && _0x1a442c['_userData']) {
                const _0x259318 = _0x1a442c['_currentUser']['uid'];
                const _0x3d1b30 = _0x5d434f['patch'] || {};
                const _0x1caa21 = _0x1a442c['_userData'];
                const _0x5d424e = {
                    'townWins': (_0x1caa21['townWins'] || 0x0) + (_0x3d1b30['townWins'] || 0x0),
                    'mafiaWins': (_0x1caa21['mafiaWins'] || 0x0) + (_0x3d1b30['mafiaWins'] || 0x0),
                    'deaths': (_0x1caa21['deaths'] || 0x0) + (_0x3d1b30['deaths'] || 0x0),
                    'townLosses': (_0x1caa21['townLosses'] || 0x0) + (_0x3d1b30['townLosses'] || 0x0),
                    'mafiaLosses': (_0x1caa21['mafiaLosses'] || 0x0) + (_0x3d1b30['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x1a442c['_userData'], _0x5d424e);
                const _0x572e43 = _0x1a442c['doc'](_0x1a442c['db'], 'users', _0x259318);
                _0x1a442c['updateDoc'](_0x572e43, _0x5d424e)['catch'](() => {
                });
                if (_0x1e443d && _0x1e443d['readyState'] === WebSocket['OPEN']) {
                    _0x1e443d['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x5d424e
                    }));
                }
                _0x566eff();
            }
        } else if (_0x5d434f['type'] === 'game_over') {
            _0x1016d9['onStateChange']('LOBBY', ![]);
            _0x3bbff4([], 'off');
            _0x41b96f = null;
            _0x3ae52e['isDead'] = ![];
            _0x3ae52e['hasArrow'] = ![];
            _0xd35a6b = [];
            _0x4e8fad = [];
            _0x357b9f['clear']();
            _0x4a15f7['clear']();
            _0x1e780b['CURRENT_TARGET'] = null;
            _0x18e4e9 = null;
            _0x261ec2 = null;
            _0xbe759f = null;
            _0x32b061 = null;
            _0x61fc1b = null;
            _0x2a952e = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0xcca5b7();
            _0x1c68df('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x5d434f['type'] === 'chat_log') {
            _0x1c68df(_0x5d434f['text'], ![], !!_0x5d434f['isHost'], _0x5d434f['sender']);
        } else if (_0x5d434f['type'] === 'sys_chat') {
            _0x1c68df(_0x5d434f['text'], !![]);
        }
    };
}
function _0x1c68df(_0x1a7492, _0x551000 = ![], _0x24bf8f = ![], _0x164c8e = null) {
    const _0x27d433 = document['getElementById']('chat-log-messages');
    const _0x1ab2b8 = document['getElementById']('chat-log-ui');
    const _0x342d35 = _0x1ab2b8 ? _0x1ab2b8['scrollHeight'] - _0x1ab2b8['scrollTop'] - _0x1ab2b8['clientHeight'] < 0x1e : !![];
    const _0x1e5aa5 = document['createElement']('div');
    _0x1e5aa5['className'] = 'chat-log-line' + (_0x551000 ? '\x20sys-msg' : '');
    if (_0x164c8e) {
        const _0x15c436 = document['createElement']('span');
        _0x15c436['className'] = _0x24bf8f ? 'chat-host-name' : 'chat-sender-name';
        _0x15c436['textContent'] = _0x164c8e + ':\x20';
        const _0x302636 = document['createElement']('span');
        _0x302636['className'] = 'chat-msg-text';
        _0x302636['textContent'] = _0x1a7492;
        _0x1e5aa5['appendChild'](_0x15c436);
        _0x1e5aa5['appendChild'](_0x302636);
    } else {
        _0x1e5aa5['innerText'] = _0x1a7492;
    }
    if (_0x27d433)
        _0x27d433['appendChild'](_0x1e5aa5);
    if (_0x1ab2b8 && _0x342d35) {
        _0x1ab2b8['scrollTop'] = _0x1ab2b8['scrollHeight'];
    }
    if (_0x27d433 && _0x27d433['childElementCount'] > 0xc8) {
        _0x27d433['removeChild'](_0x27d433['firstChild']);
    }
}
function _0x2b9c8a(_0x1f656d, _0x6ae423, _0x3786c5) {
    const _0x41d890 = document['createElement']('canvas');
    _0x41d890['width'] = _0x3786c5;
    _0x41d890['height'] = _0x3786c5;
    const _0x51316b = _0x41d890['getContext']('2d');
    _0x51316b['imageSmoothingEnabled'] = ![];
    const _0x3ea3fd = 'assets/' + (_0x1f656d || 'body01.png');
    const _0x2290d3 = _0x380141(_0x3ea3fd);
    if (_0x2290d3['complete'] && _0x2290d3['naturalWidth'] > 0x0)
        _0x51316b['drawImage'](_0x2290d3, 0x0, 0x0, _0x3786c5, _0x3786c5);
    if (_0x6ae423) {
        const _0x479d4b = 'assets/' + _0x6ae423;
        const _0x4bc2af = _0x380141(_0x479d4b);
        if (_0x4bc2af['complete'] && _0x4bc2af['naturalWidth'] > 0x0)
            _0x51316b['drawImage'](_0x4bc2af, 0x0, 0x0, _0x3786c5, _0x3786c5);
    }
    return _0x41d890['toDataURL']();
}
let _0x398bc8 = '';
function _0x566eff() {
    const _0x262915 = document['getElementById']('chat-profile-panel');
    if (!_0x262915)
        return;
    const _0x5cff8 = [];
    if (_0x32a3b9 !== null) {
        const _0x5b55e9 = _0x3b242b || 'body01.png';
        const _0x3f7d61 = _0x577819 || 'eyes4.png';
        const _0x2a6238 = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x5cff8['push']({
            'id': _0x32a3b9,
            'name': _0x2a649e,
            'body': _0x5b55e9,
            'eyes': _0x3f7d61,
            'stats': _0x2a6238
        });
    }
    for (const _0x47860f in _0x2e5d9c) {
        const _0x5d3f7e = _0x2e5d9c[_0x47860f];
        const _0x17ebce = _0x5d3f7e['accountStats'] || null;
        _0x5cff8['push']({
            'id': parseInt(_0x47860f),
            'name': _0x5d3f7e['name'],
            'body': _0x5d3f7e['body'] || 'body01.png',
            'eyes': _0x5d3f7e['eyes'] || 'eyes4.png',
            'stats': _0x17ebce
        });
    }
    const _0x46c06d = _0x5cff8['map'](_0x4c24e5 => _0x4c24e5['id'] + '_' + _0x4c24e5['name'] + '_' + _0x4c24e5['body'] + '_' + _0x4c24e5['eyes'] + '_' + JSON['stringify'](_0x4c24e5['stats']))['join']('|');
    if (_0x46c06d === _0x398bc8)
        return;
    _0x398bc8 = _0x46c06d;
    _0x262915['innerHTML'] = '';
    let _0x451607 = ![];
    for (const _0x331491 of _0x5cff8) {
        _0x451607 = !![];
        const _0x2fd316 = _0x2b9c8a(_0x331491['body'], _0x331491['eyes'], 0x20);
        const _0x2489ac = document['createElement']('div');
        _0x2489ac['className'] = 'chat-pfp-entry';
        const _0x32e0b3 = document['createElement']('img');
        _0x32e0b3['src'] = _0x2fd316;
        _0x32e0b3['alt'] = _0x331491['name'];
        _0x2489ac['appendChild'](_0x32e0b3);
        const _0x5df62b = document['createElement']('div');
        _0x5df62b['className'] = 'chat-pfp-tooltip';
        let _0x2a0948 = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x331491['name'] + '</div>';
        const _0x3467bf = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x257367 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x47fdc3 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x14cab2 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x3f422e = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x43697c = (_0x1a2b47, _0x4c8f68, _0x6fa8a4, _0x1989b6) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x1a2b47 + '<span\x20style=\x22flex:1;color:' + _0x1989b6 + ';\x22>' + _0x4c8f68 + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x6fa8a4 + '</span></div>';
        if (_0x331491['stats']) {
            _0x2a0948 += _0x43697c(_0x3467bf, 'Town\x20Wins', _0x331491['stats']['townWins'] || 0x0, '#55ee77');
            _0x2a0948 += _0x43697c(_0x257367, 'Mafia\x20Wins', _0x331491['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x2a0948 += _0x43697c(_0x47fdc3, 'Deaths', _0x331491['stats']['deaths'] || 0x0, '#aaa');
            _0x2a0948 += _0x43697c(_0x14cab2, 'Town\x20Losses', _0x331491['stats']['townLosses'] || 0x0, '#6688aa');
            _0x2a0948 += _0x43697c(_0x3f422e, 'Mafia\x20Losses', _0x331491['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x2a0948 += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x5df62b['innerHTML'] = _0x2a0948;
        _0x2489ac['appendChild'](_0x5df62b);
        _0x262915['appendChild'](_0x2489ac);
    }
    const _0x466d13 = document['getElementById']('chat-log-wrap');
    if (_0x466d13) {
        if (_0x451607) {
            _0x466d13['classList']['add']('has-profiles');
            _0x262915['style']['display'] = 'flex';
        } else {
            _0x466d13['classList']['remove']('has-profiles');
            _0x262915['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x566eff;
let _0x5dc0e9 = -0x1, _0x1ef31e = -0x1, _0x38f7af = -0x1, _0x9404ed = 0x0;
function _0x8e4a8c() {
    if (!_0x32a3b9 || !_0x1e443d || _0x1e443d['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x499405 = performance['now']();
    const _0x43db31 = _0x499405 - _0x9404ed;
    const _0x2017cd = Math['abs'](_0x3ae52e['x'] - _0x5dc0e9) > 0.05 || Math['abs'](_0x3ae52e['y'] - _0x1ef31e) > 0.05 || Math['abs'](_0x3ae52e['angle'] - _0x38f7af) > 0.02;
    if (!_0x2017cd && _0x43db31 < 0xc8)
        return;
    if (_0x43db31 < 0x19)
        return;
    _0x9404ed = _0x499405;
    _0x5dc0e9 = _0x3ae52e['x'];
    _0x1ef31e = _0x3ae52e['y'];
    _0x38f7af = _0x3ae52e['angle'];
    if (!_0x32a3b9 || !_0x1e443d || _0x1e443d['readyState'] !== WebSocket['OPEN'])
        return;
    _0x1e443d['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x3ae52e['x'],
        'y': _0x3ae52e['y'],
        'vx': _0x3ae52e['vx'],
        'vy': _0x3ae52e['vy'],
        'angle': _0x3ae52e['angle'],
        'scale': _0x3ae52e['scale'],
        'teleportId': _0x1de9bc,
        'clientTimestamp': Date['now']()
    }));
}
function _0x3c96e0() {
    if (_0x3ae52e['isDead'])
        return;
    const _0x254adc = _0x1e780b['MAP']['layers']['find'](_0x31517f => _0x31517f['name'] === 'walls');
    if (!_0x254adc)
        return;
    const _0x91c890 = _0x3ae52e['scale'];
    const _0x57bd5c = _0x3ae52e['width'] * _0x91c890 / 0x2;
    for (let _0x54c43d = 0x0; _0x54c43d < 0x3; _0x54c43d++) {
        let _0x303f05 = _0x3ae52e['x'] + _0x3ae52e['width'] / 0x2;
        let _0x1b277e = _0x3ae52e['y'] + _0x3ae52e['height'] / 0x2;
        const _0x4647ec = Math['floor']((_0x303f05 - _0x57bd5c) / _0x1e780b['MAP']['tileSize']);
        const _0x55d455 = Math['floor']((_0x303f05 + _0x57bd5c) / _0x1e780b['MAP']['tileSize']);
        const _0x3125f8 = Math['floor']((_0x1b277e - _0x57bd5c) / _0x1e780b['MAP']['tileSize']);
        const _0x9c5fa7 = Math['floor']((_0x1b277e + _0x57bd5c) / _0x1e780b['MAP']['tileSize']);
        for (let _0x20bb70 = _0x3125f8; _0x20bb70 <= _0x9c5fa7; _0x20bb70++) {
            for (let _0x342b04 = _0x4647ec; _0x342b04 <= _0x55d455; _0x342b04++) {
                if (_0x342b04 < 0x0 || _0x342b04 >= _0x1e780b['MAP']['columns'] || _0x20bb70 < 0x0 || _0x20bb70 >= _0x1e780b['MAP']['rows'])
                    continue;
                if (_0x254adc['data'][_0x20bb70 * _0x1e780b['MAP']['columns'] + _0x342b04] === 0x0)
                    continue;
                const _0x44586b = _0x342b04 * _0x1e780b['MAP']['tileSize'];
                const _0xdcde2b = _0x20bb70 * _0x1e780b['MAP']['tileSize'];
                const _0x18591f = _0x303f05 < _0x44586b ? _0x44586b : _0x303f05 > _0x44586b + _0x1e780b['MAP']['tileSize'] ? _0x44586b + _0x1e780b['MAP']['tileSize'] : _0x303f05;
                const _0x4383e2 = _0x1b277e < _0xdcde2b ? _0xdcde2b : _0x1b277e > _0xdcde2b + _0x1e780b['MAP']['tileSize'] ? _0xdcde2b + _0x1e780b['MAP']['tileSize'] : _0x1b277e;
                const _0x36af7f = _0x303f05 - _0x18591f;
                const _0x5a5a12 = _0x1b277e - _0x4383e2;
                const _0x21fac3 = Math['sqrt'](_0x36af7f * _0x36af7f + _0x5a5a12 * _0x5a5a12);
                if (_0x21fac3 < _0x57bd5c) {
                    if (_0x21fac3 === 0x0) {
                        const _0x137dc2 = _0x303f05 - _0x44586b;
                        const _0x427c39 = _0x44586b + _0x1e780b['MAP']['tileSize'] - _0x303f05;
                        const _0x16a736 = _0x1b277e - _0xdcde2b;
                        const _0x9eed29 = _0xdcde2b + _0x1e780b['MAP']['tileSize'] - _0x1b277e;
                        const _0x226b9b = Math['min'](_0x137dc2, _0x427c39, _0x16a736, _0x9eed29);
                        if (_0x226b9b === _0x137dc2)
                            _0x303f05 = _0x44586b - _0x57bd5c;
                        else if (_0x226b9b === _0x427c39)
                            _0x303f05 = _0x44586b + _0x1e780b['MAP']['tileSize'] + _0x57bd5c;
                        else if (_0x226b9b === _0x16a736)
                            _0x1b277e = _0xdcde2b - _0x57bd5c;
                        else
                            _0x1b277e = _0xdcde2b + _0x1e780b['MAP']['tileSize'] + _0x57bd5c;
                    } else {
                        const _0x1f7c76 = _0x57bd5c - _0x21fac3;
                        _0x303f05 += _0x36af7f / _0x21fac3 * _0x1f7c76;
                        _0x1b277e += _0x5a5a12 / _0x21fac3 * _0x1f7c76;
                        const _0x4c83a4 = _0x3ae52e['vx'] * (_0x36af7f / _0x21fac3) + _0x3ae52e['vy'] * (_0x5a5a12 / _0x21fac3);
                        if (_0x4c83a4 < 0x0) {
                            _0x3ae52e['vx'] -= _0x4c83a4 * (_0x36af7f / _0x21fac3);
                            _0x3ae52e['vy'] -= _0x4c83a4 * (_0x5a5a12 / _0x21fac3);
                        }
                    }
                }
            }
        }
        _0x3ae52e['x'] = _0x303f05 - _0x3ae52e['width'] / 0x2;
        _0x3ae52e['y'] = _0x1b277e - _0x3ae52e['height'] / 0x2;
    }
}
function _0x238b70(_0x442316) {
    const _0x3bd36e = _0x1e780b['MAP']['layers']['find'](_0x5f3af9 => _0x5f3af9['name'] === 'walls');
    if (!_0x3bd36e)
        return;
    const _0x988499 = _0x442316['width'] / 0x2;
    for (let _0x91bfd0 = 0x0; _0x91bfd0 < 0x2; _0x91bfd0++) {
        let _0x27fc8a = _0x442316['x'] + _0x442316['width'] / 0x2;
        let _0x4f2f59 = _0x442316['y'] + _0x442316['height'] / 0x2;
        const _0x7d9715 = Math['floor']((_0x27fc8a - _0x988499) / _0x1e780b['MAP']['tileSize']);
        const _0x43e9a0 = Math['floor']((_0x27fc8a + _0x988499) / _0x1e780b['MAP']['tileSize']);
        const _0x1392b5 = Math['floor']((_0x4f2f59 - _0x988499) / _0x1e780b['MAP']['tileSize']);
        const _0x1d66bc = Math['floor']((_0x4f2f59 + _0x988499) / _0x1e780b['MAP']['tileSize']);
        for (let _0x45d2b5 = _0x1392b5; _0x45d2b5 <= _0x1d66bc; _0x45d2b5++) {
            for (let _0x13164e = _0x7d9715; _0x13164e <= _0x43e9a0; _0x13164e++) {
                if (_0x13164e < 0x0 || _0x13164e >= _0x1e780b['MAP']['columns'] || _0x45d2b5 < 0x0 || _0x45d2b5 >= _0x1e780b['MAP']['rows'])
                    continue;
                if (_0x3bd36e['data'][_0x45d2b5 * _0x1e780b['MAP']['columns'] + _0x13164e] === 0x0)
                    continue;
                const _0x47cc11 = _0x13164e * _0x1e780b['MAP']['tileSize'];
                const _0x4955cc = _0x45d2b5 * _0x1e780b['MAP']['tileSize'];
                const _0x2b698e = _0x27fc8a < _0x47cc11 ? _0x47cc11 : _0x27fc8a > _0x47cc11 + _0x1e780b['MAP']['tileSize'] ? _0x47cc11 + _0x1e780b['MAP']['tileSize'] : _0x27fc8a;
                const _0x1cf9e3 = _0x4f2f59 < _0x4955cc ? _0x4955cc : _0x4f2f59 > _0x4955cc + _0x1e780b['MAP']['tileSize'] ? _0x4955cc + _0x1e780b['MAP']['tileSize'] : _0x4f2f59;
                const _0x343f23 = _0x27fc8a - _0x2b698e;
                const _0x41ab9e = _0x4f2f59 - _0x1cf9e3;
                const _0x53fb52 = Math['sqrt'](_0x343f23 * _0x343f23 + _0x41ab9e * _0x41ab9e);
                if (_0x53fb52 < _0x988499) {
                    if (_0x53fb52 === 0x0) {
                        const _0x21fae5 = _0x27fc8a - _0x47cc11;
                        const _0x11777c = _0x47cc11 + _0x1e780b['MAP']['tileSize'] - _0x27fc8a;
                        const _0x2cfba8 = _0x4f2f59 - _0x4955cc;
                        const _0x4e5611 = _0x4955cc + _0x1e780b['MAP']['tileSize'] - _0x4f2f59;
                        const _0x4fda68 = Math['min'](_0x21fae5, _0x11777c, _0x2cfba8, _0x4e5611);
                        if (_0x4fda68 === _0x21fae5)
                            _0x27fc8a = _0x47cc11 - _0x988499;
                        else if (_0x4fda68 === _0x11777c)
                            _0x27fc8a = _0x47cc11 + _0x1e780b['MAP']['tileSize'] + _0x988499;
                        else if (_0x4fda68 === _0x2cfba8)
                            _0x4f2f59 = _0x4955cc - _0x988499;
                        else
                            _0x4f2f59 = _0x4955cc + _0x1e780b['MAP']['tileSize'] + _0x988499;
                    } else {
                        const _0x5aa694 = _0x988499 - _0x53fb52;
                        _0x27fc8a += _0x343f23 / _0x53fb52 * _0x5aa694;
                        _0x4f2f59 += _0x41ab9e / _0x53fb52 * _0x5aa694;
                    }
                }
            }
        }
        _0x442316['x'] = _0x27fc8a - _0x442316['width'] / 0x2;
        _0x442316['y'] = _0x4f2f59 - _0x442316['height'] / 0x2;
    }
}
function _0x4f7796(_0x320aac) {
    const _0x238e5a = _0x320aac['width'] / 0x2;
    for (let _0x2a5186 = 0x0; _0x2a5186 < 0x2; _0x2a5186++) {
        let _0x12c480 = _0x320aac['x'] + _0x320aac['width'] / 0x2;
        let _0x463656 = _0x320aac['y'] + _0x320aac['height'] / 0x2;
        for (const _0x42a66f of _0x1e780b['ENTITIES']) {
            const _0x5b905e = _0x12c480 < _0x42a66f['x'] ? _0x42a66f['x'] : _0x12c480 > _0x42a66f['x'] + _0x42a66f['w'] ? _0x42a66f['x'] + _0x42a66f['w'] : _0x12c480;
            const _0x230eaa = _0x463656 < _0x42a66f['y'] ? _0x42a66f['y'] : _0x463656 > _0x42a66f['y'] + _0x42a66f['h'] ? _0x42a66f['y'] + _0x42a66f['h'] : _0x463656;
            const _0x364914 = _0x12c480 - _0x5b905e;
            const _0x486441 = _0x463656 - _0x230eaa;
            const _0x503e62 = Math['sqrt'](_0x364914 * _0x364914 + _0x486441 * _0x486441);
            if (_0x503e62 < _0x238e5a && _0x503e62 > 0x0) {
                const _0x21191f = _0x238e5a - _0x503e62;
                const _0x28f3a5 = _0x364914 / _0x503e62;
                const _0xe343ac = _0x486441 / _0x503e62;
                _0x12c480 += _0x28f3a5 * _0x21191f;
                _0x463656 += _0xe343ac * _0x21191f;
            } else if (_0x503e62 === 0x0) {
                const _0x5ef20c = _0x12c480 - _0x42a66f['x'];
                const _0x150a5d = _0x42a66f['x'] + _0x42a66f['w'] - _0x12c480;
                const _0x1d5fc8 = _0x463656 - _0x42a66f['y'];
                const _0x52c3f1 = _0x42a66f['y'] + _0x42a66f['h'] - _0x463656;
                const _0x55b8c2 = Math['min'](_0x5ef20c, _0x150a5d, _0x1d5fc8, _0x52c3f1);
                if (_0x55b8c2 === _0x5ef20c)
                    _0x12c480 = _0x42a66f['x'] - _0x238e5a;
                else if (_0x55b8c2 === _0x150a5d)
                    _0x12c480 = _0x42a66f['x'] + _0x42a66f['w'] + _0x238e5a;
                else if (_0x55b8c2 === _0x1d5fc8)
                    _0x463656 = _0x42a66f['y'] - _0x238e5a;
                else
                    _0x463656 = _0x42a66f['y'] + _0x42a66f['h'] + _0x238e5a;
            }
        }
        _0x320aac['x'] = _0x12c480 - _0x320aac['width'] / 0x2;
        _0x320aac['y'] = _0x463656 - _0x320aac['height'] / 0x2;
    }
}
function _0x222597() {
    if (_0x3ae52e['isDead'])
        return;
    const _0x3f3df9 = _0x3ae52e['width'] / 0x2;
    const _0x2b837d = _0x3ae52e['x'] + _0x3ae52e['width'] / 0x2;
    const _0x46ca31 = _0x3ae52e['y'] + _0x3ae52e['height'] / 0x2;
    for (const _0x2e3f46 in _0x2e5d9c) {
        const _0x58dca3 = _0x2e5d9c[_0x2e3f46];
        if (_0x58dca3['isDead'])
            continue;
        const _0x2d47ec = _0x58dca3['width'] / 0x2;
        const _0x514dfd = _0x3f3df9 + _0x2d47ec;
        const _0x23895a = (_0x58dca3['renderX'] ?? _0x58dca3['x']) + _0x58dca3['width'] / 0x2;
        const _0x215805 = (_0x58dca3['renderY'] ?? _0x58dca3['y']) + _0x58dca3['height'] / 0x2;
        const _0x4c0d16 = _0x2b837d - _0x23895a;
        const _0x3315ad = _0x46ca31 - _0x215805;
        const _0x70bf33 = Math['sqrt'](_0x4c0d16 * _0x4c0d16 + _0x3315ad * _0x3315ad);
        if (_0x70bf33 > 0x0 && _0x70bf33 < _0x514dfd) {
            const _0x24542c = _0x514dfd - _0x70bf33;
            const _0x264cb7 = _0x4c0d16 / _0x70bf33;
            const _0x2bba76 = _0x3315ad / _0x70bf33;
            _0x3ae52e['x'] += _0x264cb7 * (_0x24542c * 0.25);
            _0x3ae52e['y'] += _0x2bba76 * (_0x24542c * 0.25);
            _0x58dca3['x'] -= _0x264cb7 * (_0x24542c * 0.75);
            _0x58dca3['y'] -= _0x2bba76 * (_0x24542c * 0.75);
            _0x238b70(_0x58dca3);
            _0x4f7796(_0x58dca3);
            if (_0x58dca3['renderX'] !== undefined) {
                _0x58dca3['renderX'] = _0x58dca3['x'];
                _0x58dca3['renderY'] = _0x58dca3['y'];
            }
            const _0x174e0d = _0x3ae52e['vx'] * _0x264cb7 + _0x3ae52e['vy'] * _0x2bba76;
            if (_0x174e0d < 0x0) {
                _0x3ae52e['vx'] -= _0x174e0d * _0x264cb7 * 0.25;
                _0x3ae52e['vy'] -= _0x174e0d * _0x2bba76 * 0.25;
            }
        }
    }
    _0x3c96e0();
    _0x501eda();
}
function _0x501eda() {
    if (_0x3ae52e['isDead'])
        return;
    const _0x564a45 = _0x3ae52e['scale'];
    const _0x121643 = _0x3ae52e['width'] * _0x564a45 / 0x2;
    for (let _0x3337e4 = 0x0; _0x3337e4 < 0x2; _0x3337e4++) {
        let _0x58363d = _0x3ae52e['x'] + _0x3ae52e['width'] / 0x2;
        let _0x3a03b7 = _0x3ae52e['y'] + _0x3ae52e['height'] / 0x2;
        for (const _0x143629 of _0x1e780b['ENTITIES']) {
            const _0x121651 = _0x58363d < _0x143629['x'] ? _0x143629['x'] : _0x58363d > _0x143629['x'] + _0x143629['w'] ? _0x143629['x'] + _0x143629['w'] : _0x58363d;
            const _0x2c982d = _0x3a03b7 < _0x143629['y'] ? _0x143629['y'] : _0x3a03b7 > _0x143629['y'] + _0x143629['h'] ? _0x143629['y'] + _0x143629['h'] : _0x3a03b7;
            const _0x2627b2 = _0x58363d - _0x121651;
            const _0x1b6b87 = _0x3a03b7 - _0x2c982d;
            const _0x52cee6 = Math['sqrt'](_0x2627b2 * _0x2627b2 + _0x1b6b87 * _0x1b6b87);
            if (_0x52cee6 < _0x121643 && _0x52cee6 > 0x0) {
                const _0x202de6 = _0x121643 - _0x52cee6;
                const _0x1f63a0 = _0x2627b2 / _0x52cee6;
                const _0x1223e1 = _0x1b6b87 / _0x52cee6;
                _0x58363d += _0x1f63a0 * _0x202de6;
                _0x3a03b7 += _0x1223e1 * _0x202de6;
                const _0x210b8d = _0x3ae52e['vx'] * _0x1f63a0 + _0x3ae52e['vy'] * _0x1223e1;
                if (_0x210b8d < 0x0) {
                    _0x3ae52e['vx'] -= _0x210b8d * _0x1f63a0;
                    _0x3ae52e['vy'] -= _0x210b8d * _0x1223e1;
                }
            } else if (_0x52cee6 === 0x0) {
                const _0x5ef300 = _0x58363d - _0x143629['x'];
                const _0x46ed7b = _0x143629['x'] + _0x143629['w'] - _0x58363d;
                const _0x37c493 = _0x3a03b7 - _0x143629['y'];
                const _0x54fe82 = _0x143629['y'] + _0x143629['h'] - _0x3a03b7;
                const _0x57d484 = Math['min'](_0x5ef300, _0x46ed7b, _0x37c493, _0x54fe82);
                if (_0x57d484 === _0x5ef300)
                    _0x58363d = _0x143629['x'] - _0x121643;
                else if (_0x57d484 === _0x46ed7b)
                    _0x58363d = _0x143629['x'] + _0x143629['w'] + _0x121643;
                else if (_0x57d484 === _0x37c493)
                    _0x3a03b7 = _0x143629['y'] - _0x121643;
                else
                    _0x3a03b7 = _0x143629['y'] + _0x143629['h'] + _0x121643;
            }
        }
        _0x3ae52e['x'] = _0x58363d - _0x3ae52e['width'] / 0x2;
        _0x3ae52e['y'] = _0x3a03b7 - _0x3ae52e['height'] / 0x2;
    }
}
function _0x2de5f5(_0x26d6f9, _0x2f32bc) {
    const _0x3525ea = _0x1e780b['MAP']['layers']['find'](_0x37cc9f => _0x37cc9f['name'] === 'trees');
    if (!_0x3525ea)
        return ![];
    const _0x3509e2 = Math['floor'](_0x26d6f9 / _0x1e780b['MAP']['tileSize']);
    const _0x3966cc = Math['floor'](_0x2f32bc / _0x1e780b['MAP']['tileSize']);
    if (_0x3509e2 < 0x0 || _0x3509e2 >= _0x1e780b['MAP']['columns'] || _0x3966cc < 0x0 || _0x3966cc >= _0x1e780b['MAP']['rows'])
        return ![];
    return _0x3525ea['data'][_0x3966cc * _0x1e780b['MAP']['columns'] + _0x3509e2] === 0xb;
}
let _0x4a1f99 = null;
function _0x5e8929() {
    const _0x536c15 = _0x1e780b['MAP'];
    const _0xb14870 = _0x536c15['layers']['find'](_0xec2b15 => _0xec2b15['name'] === 'floor2');
    const _0x131ed2 = _0x536c15['layers']['find'](_0x186867 => _0x186867['name'] === 'walls');
    if (!_0xb14870 || !_0x131ed2) {
        _0x4a1f99 = null;
        return;
    }
    const _0x16fdf9 = _0x536c15['columns'];
    const _0x4351bb = _0x536c15['rows'];
    const _0x43cfc8 = [];
    const _0x212ddf = new Set();
    const _0x120c58 = new Set();
    for (let _0x40676a = 0x0; _0x40676a < _0x4351bb; _0x40676a++) {
        for (let _0x1fa9c7 = 0x0; _0x1fa9c7 < _0x16fdf9; _0x1fa9c7++) {
            const _0x48aaa8 = _0x40676a * _0x16fdf9 + _0x1fa9c7;
            const _0x13c53e = _0xb14870['data'][_0x48aaa8];
            const _0x2bbff4 = _0x131ed2['data'][_0x48aaa8];
            if (_0x13c53e === 0x2 && _0x2bbff4 === 0x0) {
                _0x43cfc8['push']({
                    'c': _0x1fa9c7,
                    'r': _0x40676a
                });
                _0x120c58['add'](_0x1fa9c7 + ',' + _0x40676a);
            } else if (_0x2bbff4 !== 0x0) {
                _0x212ddf['add'](_0x1fa9c7 + ',' + _0x40676a);
            }
        }
    }
    const _0x460fbf = [
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
                c: _0x51cb56,
                r: _0x27e4ee
            } of _0x43cfc8) {
        for (const [_0x180915, _0x3b2f44] of _0x460fbf) {
            const _0x5a4424 = _0x51cb56 + _0x180915, _0x538ad6 = _0x27e4ee + _0x3b2f44;
            const _0x5b5d8f = _0x5a4424 + ',' + _0x538ad6;
            if (!_0x120c58['has'](_0x5b5d8f)) {
                _0x212ddf['add'](_0x5b5d8f);
            }
        }
    }
    _0x4a1f99 = {
        'wallSet': _0x212ddf,
        'floorTiles': _0x43cfc8,
        'interiorSet': _0x120c58
    };
}
function _0x478bef() {
    const _0x3100df = _0x1e780b['MAP']['layers']['find'](_0x557c48 => _0x557c48['name'] === 'floor2');
    if (!_0x3100df)
        return ![];
    const _0x1218fe = _0x3ae52e['x'] + _0x3ae52e['width'] / 0x2;
    const _0x2e91e9 = _0x3ae52e['y'] + _0x3ae52e['height'] / 0x2;
    const _0x4156a9 = _0x1e780b['MAP']['tileSize'];
    const _0x1454ac = Math['floor'](_0x1218fe / _0x4156a9);
    const _0x5711f4 = Math['floor'](_0x2e91e9 / _0x4156a9);
    if (_0x1454ac < 0x0 || _0x1454ac >= _0x1e780b['MAP']['columns'] || _0x5711f4 < 0x0 || _0x5711f4 >= _0x1e780b['MAP']['rows'])
        return ![];
    const _0x41ca23 = _0x5711f4 * _0x1e780b['MAP']['columns'] + _0x1454ac;
    if (_0x3100df['data'][_0x41ca23] === 0x2)
        return !![];
    if (_0x1e780b['MAP']['doors'] && _0x1e780b['MAP']['doors'][_0x41ca23])
        return !![];
    const _0xabd76e = [
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
    for (const [_0x40c5fa, _0xf10f64] of _0xabd76e) {
        const _0xbdc973 = Math['floor']((_0x1218fe + _0x40c5fa) / _0x4156a9);
        const _0x5b0b03 = Math['floor']((_0x2e91e9 + _0xf10f64) / _0x4156a9);
        if (_0xbdc973 >= 0x0 && _0xbdc973 < _0x1e780b['MAP']['columns'] && _0x5b0b03 >= 0x0 && _0x5b0b03 < _0x1e780b['MAP']['rows']) {
            const _0x1018bb = _0x5b0b03 * _0x1e780b['MAP']['columns'] + _0xbdc973;
            if (_0x3100df['data'][_0x1018bb] === 0x2 || _0x1e780b['MAP']['doors'] && _0x1e780b['MAP']['doors'][_0x1018bb]) {
                return !![];
            }
        }
    }
    return ![];
}
let _0xbbacc7 = null, _0x112f24 = null;
function _0x2ddb87() {
    if (_0x3ae52e['isDead']) {
        _0x1e780b['SHADOW']['polygon'] = null;
        _0xbbacc7 = null;
        return;
    }
    const _0x1b0998 = _0x1e780b['MAP'];
    const _0x5d5328 = _0x1e780b['SHADOW'];
    const _0x217bb6 = _0x1b0998['tileSize'];
    if (!_0x4a1f99)
        _0x5e8929();
    if (!_0x4a1f99) {
        _0x5d5328['polygon'] = null;
        _0xbbacc7 = null;
        return;
    }
    const {
        wallSet: _0x1192a4,
        floorTiles: _0x2987a5
    } = _0x4a1f99;
    if (_0x2987a5['length'] === 0x0) {
        _0x5d5328['polygon'] = null;
        _0xbbacc7 = null;
        return;
    }
    if (!_0x478bef()) {
        _0x5d5328['polygon'] = null;
        _0xbbacc7 = null;
        return;
    }
    const _0x40bcf8 = _0x3ae52e['x'] + _0x3ae52e['width'] / 0x2;
    const _0x3f3de0 = _0x3ae52e['y'] + _0x3ae52e['height'] / 0x2;
    if (_0xbbacc7 !== null && _0x5d5328['polygon'] && Math['hypot'](_0x40bcf8 - _0xbbacc7, _0x3f3de0 - _0x112f24) < 0.5) {
        return;
    }
    _0xbbacc7 = _0x40bcf8;
    _0x112f24 = _0x3f3de0;
    const _0x1a17fe = Math['floor'](_0x40bcf8 / _0x217bb6);
    const _0x113df4 = Math['floor'](_0x3f3de0 / _0x217bb6);
    const _0x42ce82 = Math['max'](0x0, _0x1a17fe - 0x8);
    const _0x12245d = Math['min'](_0x1b0998['columns'] - 0x1, _0x1a17fe + 0x8);
    const _0x1257ef = Math['max'](0x0, _0x113df4 - 0x8);
    const _0x22e65e = Math['min'](_0x1b0998['rows'] - 0x1, _0x113df4 + 0x8);
    const _0x5d50e1 = [];
    const _0xada918 = [];
    for (let _0x3a6c87 = _0x1257ef; _0x3a6c87 <= _0x22e65e; _0x3a6c87++) {
        for (let _0x25e73f = _0x42ce82; _0x25e73f <= _0x12245d; _0x25e73f++) {
            if (!_0x1192a4['has'](_0x25e73f + ',' + _0x3a6c87))
                continue;
            const _0x499faa = _0x25e73f * _0x217bb6;
            const _0x5e1c64 = _0x3a6c87 * _0x217bb6;
            const _0x58efa5 = _0x499faa + _0x217bb6;
            const _0x27432a = _0x5e1c64 + _0x217bb6;
            if (!_0x1192a4['has'](_0x25e73f + ',' + (_0x3a6c87 - 0x1))) {
                _0x5d50e1['push'](_0x499faa, _0x5e1c64, _0x58efa5, _0x5e1c64);
                _0xada918['push'](_0x499faa, _0x5e1c64, _0x58efa5, _0x5e1c64);
            }
            if (!_0x1192a4['has'](_0x25e73f + ',' + (_0x3a6c87 + 0x1))) {
                _0x5d50e1['push'](_0x499faa, _0x27432a, _0x58efa5, _0x27432a);
                _0xada918['push'](_0x499faa, _0x27432a, _0x58efa5, _0x27432a);
            }
            if (!_0x1192a4['has'](_0x25e73f - 0x1 + ',' + _0x3a6c87)) {
                _0x5d50e1['push'](_0x499faa, _0x5e1c64, _0x499faa, _0x27432a);
                _0xada918['push'](_0x499faa, _0x5e1c64, _0x499faa, _0x27432a);
            }
            if (!_0x1192a4['has'](_0x25e73f + 0x1 + ',' + _0x3a6c87)) {
                _0x5d50e1['push'](_0x58efa5, _0x5e1c64, _0x58efa5, _0x27432a);
                _0xada918['push'](_0x58efa5, _0x5e1c64, _0x58efa5, _0x27432a);
            }
        }
    }
    const _0x2706b3 = new Set();
    const _0x4b39b4 = [];
    const _0x487ed3 = 0.0001;
    for (let _0x5634e3 = 0x0; _0x5634e3 < _0xada918['length']; _0x5634e3 += 0x2) {
        const _0x298280 = _0xada918[_0x5634e3];
        const _0x444e82 = _0xada918[_0x5634e3 + 0x1];
        const _0x267bc7 = Math['atan2'](_0x444e82 - _0x3f3de0, _0x298280 - _0x40bcf8);
        const _0x5d4ffe = Math['round'](_0x267bc7 * 0x9c40);
        if (!_0x2706b3['has'](_0x5d4ffe - 0x1)) {
            _0x2706b3['add'](_0x5d4ffe - 0x1);
            _0x4b39b4['push'](_0x267bc7 - _0x487ed3);
        }
        if (!_0x2706b3['has'](_0x5d4ffe)) {
            _0x2706b3['add'](_0x5d4ffe);
            _0x4b39b4['push'](_0x267bc7);
        }
        if (!_0x2706b3['has'](_0x5d4ffe + 0x1)) {
            _0x2706b3['add'](_0x5d4ffe + 0x1);
            _0x4b39b4['push'](_0x267bc7 + _0x487ed3);
        }
    }
    for (let _0x27e8ed = 0x0; _0x27e8ed < 0x10; _0x27e8ed++) {
        const _0x2ef9b3 = -Math['PI'] + _0x27e8ed * 0x2 * Math['PI'] / 0x10;
        _0x4b39b4['push'](_0x2ef9b3);
    }
    _0x4b39b4['sort']((_0x12afe1, _0x26ef42) => _0x12afe1 - _0x26ef42);
    const _0x4a723e = 0xc * _0x217bb6;
    const _0x351a3b = [];
    for (let _0x5e63cb = 0x0; _0x5e63cb < _0x4b39b4['length']; _0x5e63cb++) {
        const _0x2dfca6 = _0x4b39b4[_0x5e63cb];
        const _0xd82cda = Math['cos'](_0x2dfca6);
        const _0x5ec1ec = Math['sin'](_0x2dfca6);
        let _0x167ac8 = _0x4a723e;
        for (let _0x485ffd = 0x0; _0x485ffd < _0x5d50e1['length']; _0x485ffd += 0x4) {
            const _0x3a4aa5 = _0x5d50e1[_0x485ffd], _0x14b081 = _0x5d50e1[_0x485ffd + 0x1];
            const _0x4691a6 = _0x5d50e1[_0x485ffd + 0x2], _0x47431f = _0x5d50e1[_0x485ffd + 0x3];
            const _0x19f3cb = _0x4691a6 - _0x3a4aa5;
            const _0x12f551 = _0x47431f - _0x14b081;
            const _0x31bfc8 = _0xd82cda * _0x12f551 - _0x5ec1ec * _0x19f3cb;
            if (Math['abs'](_0x31bfc8) < 1e-9)
                continue;
            const _0x2c4b1b = _0x3a4aa5 - _0x40bcf8;
            const _0x69b970 = _0x14b081 - _0x3f3de0;
            const _0xf065fb = (_0x2c4b1b * _0x12f551 - _0x69b970 * _0x19f3cb) / _0x31bfc8;
            const _0x23fed3 = (_0x2c4b1b * _0x5ec1ec - _0x69b970 * _0xd82cda) / _0x31bfc8;
            if (_0xf065fb > 0x1 && _0x23fed3 >= 0x0 && _0x23fed3 <= 0x1 && _0xf065fb < _0x167ac8) {
                _0x167ac8 = _0xf065fb;
            }
        }
        _0x351a3b['push'](_0x40bcf8 + _0xd82cda * _0x167ac8, _0x3f3de0 + _0x5ec1ec * _0x167ac8);
    }
    _0x5d5328['polygon'] = _0x351a3b['length'] >= 0x6 ? _0x351a3b : null;
}
function _0x5b26c4(_0x3258ac, _0x17ce7c, _0xe8ae98) {
    if (_0x3ae52e['isDead'])
        return;
    if (!_0x4a1f99)
        _0x5e8929();
    if (!_0x4a1f99)
        return;
    const {floorTiles: _0x183ce0} = _0x4a1f99;
    if (_0x183ce0['length'] === 0x0)
        return;
    const _0x30b42e = _0x1e780b['SHADOW'];
    const _0x4f47ce = _0x1e780b['MAP']['tileSize'];
    const _0x29f408 = _0x1e780b['CAMERA']['width'];
    const _0x17a0f1 = _0x1e780b['CAMERA']['height'];
    if (!_0x1e780b['SHADOW']['_buf'] || _0x1e780b['SHADOW']['_buf']['width'] !== _0x29f408 || _0x1e780b['SHADOW']['_buf']['height'] !== _0x17a0f1) {
        _0x1e780b['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x1e780b['SHADOW']['_buf']['width'] = _0x29f408;
        _0x1e780b['SHADOW']['_buf']['height'] = _0x17a0f1;
    }
    const _0x328eae = _0x1e780b['SHADOW']['_buf'];
    const _0x20f7a8 = _0x328eae['getContext']('2d');
    _0x20f7a8['clearRect'](0x0, 0x0, _0x29f408, _0x17a0f1);
    _0x20f7a8['fillStyle'] = 'rgba(0,0,0,0.95)';
    _0x20f7a8['beginPath']();
    for (const {
                c: _0x35d9ad,
                r: _0x27bd27
            } of _0x183ce0) {
        const _0x1e3262 = Math['round'](_0x35d9ad * _0x4f47ce - _0x17ce7c), _0x46feac = Math['round'](_0x27bd27 * _0x4f47ce - _0xe8ae98);
        if (_0x1e3262 > _0x29f408 || _0x46feac > _0x17a0f1 || _0x1e3262 + _0x4f47ce < 0x0 || _0x46feac + _0x4f47ce < 0x0)
            continue;
        _0x20f7a8['rect'](_0x1e3262, _0x46feac, _0x4f47ce + 0x1, _0x4f47ce + 0x1);
    }
    _0x20f7a8['fill']();
    if (_0x478bef() && _0x30b42e['polygon'] && _0x30b42e['polygon']['length'] >= 0x6) {
        _0x20f7a8['globalCompositeOperation'] = 'destination-out';
        _0x20f7a8['fillStyle'] = 'rgba(0,0,0,1)';
        const _0x4c5147 = _0x30b42e['polygon'];
        _0x20f7a8['beginPath']();
        _0x20f7a8['moveTo'](_0x4c5147[0x0] - _0x17ce7c, _0x4c5147[0x1] - _0xe8ae98);
        for (let _0x1e4505 = 0x2; _0x1e4505 < _0x4c5147['length']; _0x1e4505 += 0x2) {
            _0x20f7a8['lineTo'](_0x4c5147[_0x1e4505] - _0x17ce7c, _0x4c5147[_0x1e4505 + 0x1] - _0xe8ae98);
        }
        _0x20f7a8['closePath']();
        _0x20f7a8['fill']();
        _0x20f7a8['globalCompositeOperation'] = 'source-over';
    }
    _0x3258ac['drawImage'](_0x328eae, 0x0, 0x0);
}
function _0x4b05ac(_0x89624e) {
    let _0x52468c = 0x0, _0x58ee9c = 0x0;
    const _0x4b8290 = _0x1e780b['INPUTS']['mouseX'] / _0x1e780b['SYSTEM']['viewScale'];
    const _0x53d02c = _0x1e780b['INPUTS']['mouseY'] / _0x1e780b['SYSTEM']['viewScale'];
    const _0x602f51 = _0x3ae52e['x'] - _0x1e780b['CAMERA']['x'] + _0x3ae52e['width'] / 0x2;
    const _0x9c182a = _0x3ae52e['y'] - _0x1e780b['CAMERA']['y'] + _0x3ae52e['height'] / 0x2;
    const _0xfeca9e = Math['atan2'](_0x53d02c - _0x9c182a, _0x4b8290 - _0x602f51);
    if (_0x5e3403 !== 0x0 || _0x494104 !== 0x0) {
        _0x52468c = _0x5e3403;
        _0x58ee9c = _0x494104;
    } else if (_0x5517df) {
        let _0x4fbb7a = 0x0, _0x1039ee = 0x0;
        if (_0x1e780b['INPUTS']['keys']['w'] || _0x1e780b['INPUTS']['keys']['arrowup'])
            _0x4fbb7a += 0x1;
        if (_0x1e780b['INPUTS']['keys']['s'] || _0x1e780b['INPUTS']['keys']['arrowdown'])
            _0x4fbb7a -= 0x1;
        if (_0x1e780b['INPUTS']['keys']['d'] || _0x1e780b['INPUTS']['keys']['arrowright'])
            _0x1039ee += 0x1;
        if (_0x1e780b['INPUTS']['keys']['a'] || _0x1e780b['INPUTS']['keys']['arrowleft'])
            _0x1039ee -= 0x1;
        if (_0x4fbb7a !== 0x0 || _0x1039ee !== 0x0) {
            const _0x163ecc = _0xfeca9e + Math['atan2'](_0x1039ee, _0x4fbb7a);
            _0x52468c = Math['cos'](_0x163ecc);
            _0x58ee9c = Math['sin'](_0x163ecc);
        }
    } else {
        if (_0x1e780b['INPUTS']['keys']['w'] || _0x1e780b['INPUTS']['keys']['arrowup'])
            _0x58ee9c -= 0x1;
        if (_0x1e780b['INPUTS']['keys']['s'] || _0x1e780b['INPUTS']['keys']['arrowdown'])
            _0x58ee9c += 0x1;
        if (_0x1e780b['INPUTS']['keys']['a'] || _0x1e780b['INPUTS']['keys']['arrowleft'])
            _0x52468c -= 0x1;
        if (_0x1e780b['INPUTS']['keys']['d'] || _0x1e780b['INPUTS']['keys']['arrowright'])
            _0x52468c += 0x1;
        const _0x20f53f = _0x52468c !== 0x0 || _0x58ee9c !== 0x0;
        if (_0x20f53f) {
            const _0x1d1ffa = Math['sqrt'](_0x52468c * _0x52468c + _0x58ee9c * _0x58ee9c);
            _0x52468c /= _0x1d1ffa;
            _0x58ee9c /= _0x1d1ffa;
        }
    }
    if (_0x1e780b['GAME_STATE'] === 'NIGHT' && (_0x41b96f === 'Skinwalker' || _0x41b96f === 'Blackmailer')) {
        if (_0x1e780b['NIGHT_ABILITY_OPEN'] || !_0x1e780b['CURRENT_TARGET']) {
            _0x52468c = 0x0;
            _0x58ee9c = 0x0;
            _0x3ae52e['vx'] = 0x0;
            _0x3ae52e['vy'] = 0x0;
            _0x3ae52e['x'] = _0x1e780b['MAP']['columns'] * _0x1e780b['MAP']['tileSize'] / 0x2 - _0x3ae52e['width'] / 0x2;
            _0x3ae52e['y'] = _0x1e780b['MAP']['rows'] * _0x1e780b['MAP']['tileSize'] / 0x2 - _0x3ae52e['height'] / 0x2;
        }
    }
    const _0x48ae25 = _0x52468c !== 0x0 || _0x58ee9c !== 0x0;
    const _0x5642e4 = (_0x1e780b['INPUTS']['keys']['shift'] || _0x1e7d53 || _0x5cfe26) && _0x48ae25;
    _0x3ae52e['bopTimer'] = _0x5642e4 ? _0x3ae52e['bopTimer'] + _0x89624e : 0x0;
    _0x3ae52e['scale'] = 0x1 + (_0x3ae52e['bopTimer'] > 0x0 ? Math['sin'](_0x3ae52e['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x480913 = Math['pow'](0.001, _0x89624e);
    const _0x2ac954 = _0x5642e4 ? 0x74a : 0x5d5;
    _0x3ae52e['vx'] += _0x52468c * _0x2ac954 * _0x89624e;
    _0x3ae52e['vy'] += _0x58ee9c * _0x2ac954 * _0x89624e;
    _0x3ae52e['vx'] *= _0x480913;
    _0x3ae52e['vy'] *= _0x480913;
    _0x3ae52e['x'] += _0x3ae52e['vx'] * _0x89624e;
    _0x3ae52e['y'] += _0x3ae52e['vy'] * _0x89624e;
    for (let _0x445711 = 0x0; _0x445711 < 0x3; _0x445711++)
        _0x3c96e0();
    for (let _0x2d264a = 0x0; _0x2d264a < 0x2; _0x2d264a++)
        _0x501eda();
    for (let _0x22e342 = 0x0; _0x22e342 < 0x2; _0x22e342++)
        _0x222597();
    if (_0x3ae52e['x'] < 0x0)
        _0x3ae52e['x'] = 0x0;
    if (_0x3ae52e['y'] < 0x0)
        _0x3ae52e['y'] = 0x0;
    if (_0x3ae52e['x'] + _0x3ae52e['width'] > _0x1e780b['MAP']['columns'] * _0x1e780b['MAP']['tileSize'])
        _0x3ae52e['x'] = _0x1e780b['MAP']['columns'] * _0x1e780b['MAP']['tileSize'] - _0x3ae52e['width'];
    if (_0x3ae52e['y'] + _0x3ae52e['height'] > _0x1e780b['MAP']['rows'] * _0x1e780b['MAP']['tileSize'])
        _0x3ae52e['y'] = _0x1e780b['MAP']['rows'] * _0x1e780b['MAP']['tileSize'] - _0x3ae52e['height'];
    if (_0x305c41) {
        _0x3ae52e['angle'] = _0x3f2e12 + Math['PI'] / 0x2;
    } else if (_0x5e3403 !== 0x0 || _0x494104 !== 0x0) {
        _0x3ae52e['angle'] = Math['atan2'](_0x494104, _0x5e3403) + Math['PI'] / 0x2;
    } else if (!_0x14c242) {
        _0x3ae52e['angle'] = _0xfeca9e + Math['PI'] / 0x2;
    }
    const _0x5424a5 = _0x3ae52e['x'] + _0x3ae52e['width'] / 0x2 - _0x1e780b['CAMERA']['width'] / 0x2;
    const _0x37aea2 = _0x3ae52e['y'] + _0x3ae52e['height'] / 0x2 - _0x1e780b['CAMERA']['height'] / 0x2;
    if (_0x1e780b['CAMERA']['x'] === null || isNaN(_0x1e780b['CAMERA']['x']) || !isFinite(_0x1e780b['CAMERA']['x'])) {
        _0x1e780b['CAMERA']['x'] = _0x5424a5;
        _0x1e780b['CAMERA']['y'] = _0x37aea2;
    } else {
        const _0x545430 = 0x1 - Math['exp'](-Math['max'](0x0, _0x89624e) * 0x28);
        _0x1e780b['CAMERA']['x'] += (_0x5424a5 - _0x1e780b['CAMERA']['x']) * _0x545430;
        _0x1e780b['CAMERA']['y'] += (_0x37aea2 - _0x1e780b['CAMERA']['y']) * _0x545430;
    }
    for (const _0x199ac5 in _0x2e5d9c) {
        const _0x36db45 = _0x2e5d9c[_0x199ac5];
        if (_0x36db45['renderX'] === undefined) {
            _0x36db45['renderX'] = _0x36db45['x'];
            _0x36db45['renderY'] = _0x36db45['y'];
            _0x36db45['renderAngle'] = _0x36db45['angle'] || 0x0;
        }
        const _0x30d74f = _0x36db45['x'] + (_0x36db45['vx'] || 0x0) * _0x89624e;
        const _0x114736 = _0x36db45['y'] + (_0x36db45['vy'] || 0x0) * _0x89624e;
        _0x36db45['x'] = _0x30d74f;
        _0x36db45['y'] = _0x114736;
        const _0x33f87a = 0x1 - Math['exp'](-_0x89624e * 0x12);
        const _0x10a7ae = _0x36db45['x'] - _0x36db45['renderX'], _0x5c4157 = _0x36db45['y'] - _0x36db45['renderY'];
        const _0x40ec18 = Math['sqrt'](_0x10a7ae * _0x10a7ae + _0x5c4157 * _0x5c4157);
        const _0x1764da = 0xc8;
        if (_0x40ec18 > _0x1764da) {
            _0x36db45['renderX'] = _0x36db45['x'] - _0x10a7ae / _0x40ec18 * _0x1764da;
            _0x36db45['renderY'] = _0x36db45['y'] - _0x5c4157 / _0x40ec18 * _0x1764da;
        }
        _0x36db45['renderX'] += (_0x36db45['x'] - _0x36db45['renderX']) * _0x33f87a;
        _0x36db45['renderY'] += (_0x36db45['y'] - _0x36db45['renderY']) * _0x33f87a;
        let _0x98eddb = (_0x36db45['angle'] || 0x0) - _0x36db45['renderAngle'];
        while (_0x98eddb < -Math['PI'])
            _0x98eddb += Math['PI'] * 0x2;
        while (_0x98eddb > Math['PI'])
            _0x98eddb -= Math['PI'] * 0x2;
        _0x36db45['renderAngle'] += _0x98eddb * (0x1 - Math['exp'](-_0x89624e * 0x14));
    }
    if (_0x1e780b['GAME_STATE'] === 'NIGHT') {
        _0x4ec117 = Math['min'](0.6, _0x4ec117 + _0x89624e * 0.5);
    } else {
        _0x4ec117 = Math['max'](0x0, _0x4ec117 - _0x89624e * 0.5);
    }
    if (_0x407467 > 0x0) {
        if (performance['now']() > _0x4fa5be) {
            _0x407467 = Math['max'](0x0, _0x407467 - _0x89624e * 0x2);
        }
    }
    _0x2ddb87();
    _0x8e4a8c();
}
function _0x1c52a1(_0x555080, _0x41442b, _0x5243e2, _0x43cfa3, _0xcd5394 = !![]) {
    _0x555080['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x59a44b = _0x555080['measureText'](_0x41442b)['width'];
    const _0x12eb06 = _0x59a44b + 0x18;
    const _0x477cc9 = 0x1c;
    _0x555080['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x555080['beginPath']();
    if (_0x555080['roundRect']) {
        _0x555080['roundRect'](_0x5243e2 - _0x12eb06 / 0x2, _0x43cfa3 - _0x477cc9, _0x12eb06, _0x477cc9, 0x6);
    } else {
        _0x555080['rect'](_0x5243e2 - _0x12eb06 / 0x2, _0x43cfa3 - _0x477cc9, _0x12eb06, _0x477cc9);
    }
    _0x555080['fill']();
    if (_0xcd5394) {
        _0x555080['beginPath']();
        _0x555080['moveTo'](_0x5243e2 - 0x6, _0x43cfa3);
        _0x555080['lineTo'](_0x5243e2 + 0x6, _0x43cfa3);
        _0x555080['lineTo'](_0x5243e2, _0x43cfa3 + 0x6);
        _0x555080['fill']();
    }
    _0x555080['fillStyle'] = '#ffffff';
    _0x555080['textAlign'] = 'center';
    _0x555080['textBaseline'] = 'middle';
    _0x555080['fillText'](_0x41442b, _0x5243e2, _0x43cfa3 - _0x477cc9 / 0x2 + 0x1);
}
function _0xcc98bc(_0x3d7915, _0x37966d, _0x5c216f, _0x449072) {
    if (!_0x37966d || _0x37966d['length'] === 0x0)
        return;
    let _0x265bb0 = _0x449072;
    for (let _0x4b742c = 0x0; _0x4b742c < _0x37966d['length']; _0x4b742c++) {
        _0x1c52a1(_0x3d7915, _0x37966d[_0x4b742c]['text'], _0x5c216f, _0x265bb0, _0x4b742c === 0x0);
        _0x265bb0 -= 0x24;
    }
}
function _0xc97cdc() {
    if (!_0x1e780b['SYSTEM']['isReady'])
        return;
    if (_0x1e780b['MAP']['layers'] && _0x1e780b['MAP']['layers']['length'] > 0x0 && _0x56dd00['complete'] && _0x56dd00['naturalWidth'] > 0x0) {
        if (!_0x1e780b['MAP']['_prerenderedWithTileset'] || !_0x1e780b['MAP']['bgChunks'] || _0x1e780b['MAP']['bgChunks']['length'] === 0x0) {
            _0x56f68c();
        }
    }
    if (!_0x1e780b['MAP']['bgChunks'] || _0x1e780b['MAP']['bgChunks']['length'] === 0x0 || !_0x1e780b['MAP']['bgChunks'][0x0] || _0x1e780b['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x2fce09['fillStyle'] = '#000000';
    _0x2fce09['fillRect'](0x0, 0x0, _0x2ba5d1['width'], _0x2ba5d1['height']);
    _0x2fce09['save']();
    try {
        _0x2fce09['scale'](_0x1e780b['SYSTEM']['viewScale'], _0x1e780b['SYSTEM']['viewScale']);
        _0x2fce09['imageSmoothingEnabled'] = ![];
        const _0x4462cd = Math['floor'](_0x1e780b['CAMERA']['x'] || 0x0);
        const _0x32de37 = Math['floor'](_0x1e780b['CAMERA']['y'] || 0x0);
        const _0x108099 = Math['max'](0x0, Math['floor'](_0x4462cd / _0x1e780b['MAP']['chunkSize']));
        const _0x59cbb2 = Math['min'](_0x1e780b['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x4462cd + _0x1e780b['CAMERA']['width']) / _0x1e780b['MAP']['chunkSize']));
        const _0x308e6e = Math['max'](0x0, Math['floor'](_0x32de37 / _0x1e780b['MAP']['chunkSize']));
        const _0x13f682 = Math['min'](_0x1e780b['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x32de37 + _0x1e780b['CAMERA']['height']) / _0x1e780b['MAP']['chunkSize']));
        for (let _0x247b67 = _0x308e6e; _0x247b67 <= _0x13f682; _0x247b67++)
            for (let _0x464a6a = _0x108099; _0x464a6a <= _0x59cbb2; _0x464a6a++) {
                const _0x5a7200 = _0x464a6a * _0x1e780b['MAP']['chunkSize'] - _0x4462cd;
                const _0x46b6c0 = _0x247b67 * _0x1e780b['MAP']['chunkSize'] - _0x32de37;
                _0x2fce09['drawImage'](_0x1e780b['MAP']['bgChunks'][_0x247b67][_0x464a6a], _0x5a7200, _0x46b6c0, _0x1e780b['MAP']['chunkSize'] + 0x1, _0x1e780b['MAP']['chunkSize'] + 0x1);
            }
        const _0x188570 = _0x380141('assets/blood\x20splatter.png');
        if (_0xd35a6b && _0xd35a6b['length'] > 0x0) {
            for (const _0x3bb885 of _0xd35a6b) {
                const _0xe618b1 = _0x3bb885['x'] - _0x4462cd;
                const _0x31352b = _0x3bb885['y'] - _0x32de37;
                if (_0x188570['complete'] && _0x188570['naturalWidth'] > 0x0) {
                    _0x2fce09['drawImage'](_0x188570, _0xe618b1 - 0x20, _0x31352b - 0x20, 0x40, 0x40);
                } else {
                    _0x2fce09['fillStyle'] = 'rgba(160,\x200,\x200,\x200.75)';
                    _0x2fce09['beginPath']();
                    _0x2fce09['arc'](_0xe618b1, _0x31352b, 0x16, 0x0, Math['PI'] * 0x2);
                    _0x2fce09['fill']();
                }
            }
        }
        const _0x68b552 = _0x380141('assets/blood.png');
        if (_0x4e8fad && _0x4e8fad['length'] > 0x0) {
            for (const _0x2a4477 of _0x4e8fad) {
                const _0x369200 = _0x2a4477['x'] - _0x4462cd;
                const _0x5338d7 = _0x2a4477['y'] - _0x32de37;
                if (_0x68b552['complete'] && _0x68b552['naturalWidth'] > 0x0) {
                    _0x2fce09['drawImage'](_0x68b552, _0x369200 - 0xc, _0x5338d7 - 0xc, 0x18, 0x18);
                } else {
                    _0x2fce09['fillStyle'] = 'rgba(180,\x200,\x200,\x200.8)';
                    _0x2fce09['beginPath']();
                    _0x2fce09['arc'](_0x369200, _0x5338d7, 0x5, 0x0, Math['PI'] * 0x2);
                    _0x2fce09['fill']();
                }
            }
        }
        if (_0x3c8f8f['complete'] && _0x3c8f8f['naturalWidth'] > 0x0) {
            const _0x33ea48 = _0x1e780b['MAP']['tileSize'];
            const _0x3e2fb5 = _0x33ea48 * 0xa;
            const _0x11e766 = _0x1e780b['MAP']['columns'] / 0x2 * _0x33ea48 - _0x3e2fb5 / 0x2 - _0x4462cd;
            const _0x39a635 = _0x1e780b['MAP']['rows'] / 0x2 * _0x33ea48 - _0x3e2fb5 / 0x2 - _0x32de37;
            _0x2fce09['imageSmoothingEnabled'] = ![];
            _0x2fce09['drawImage'](_0x3c8f8f, _0x11e766, _0x39a635, _0x3e2fb5, _0x3e2fb5);
        }
        if (_0x599cc9['complete'] && _0x599cc9['naturalWidth'] > 0x0) {
            _0x1e780b['ENTITIES']['forEach'](_0xf8aa64 => {
                if (_0xf8aa64['type'] !== 'table')
                    return;
                _0x2fce09['save']();
                _0x2fce09['imageSmoothingEnabled'] = ![];
                const _0x45b8e2 = _0x599cc9['naturalWidth'] >= _0x599cc9['naturalHeight'];
                const _0x408e37 = _0xf8aa64['w'] >= _0xf8aa64['h'];
                if (_0x45b8e2 === _0x408e37) {
                    _0x2fce09['drawImage'](_0x599cc9, _0xf8aa64['x'] - _0x4462cd, _0xf8aa64['y'] - _0x32de37, _0xf8aa64['w'], _0xf8aa64['h']);
                } else {
                    _0x2fce09['translate'](_0xf8aa64['x'] - _0x4462cd + _0xf8aa64['w'] / 0x2, _0xf8aa64['y'] - _0x32de37 + _0xf8aa64['h'] / 0x2);
                    _0x2fce09['rotate'](Math['PI'] / 0x2);
                    _0x2fce09['drawImage'](_0x599cc9, -_0xf8aa64['h'] / 0x2, -_0xf8aa64['w'] / 0x2, _0xf8aa64['h'], _0xf8aa64['w']);
                }
                _0x2fce09['restore']();
            });
        } else {
            _0x1e780b['ENTITIES']['forEach'](_0x5445cc => {
                if (_0x5445cc['type'] !== 'table')
                    return;
                _0x2fce09['save']();
                _0x2fce09['fillStyle'] = '#6b4423';
                _0x2fce09['fillRect'](_0x5445cc['x'] - _0x4462cd, _0x5445cc['y'] - _0x32de37, _0x5445cc['w'], _0x5445cc['h']);
                _0x2fce09['strokeStyle'] = '#422810';
                _0x2fce09['lineWidth'] = 0x3;
                _0x2fce09['strokeRect'](_0x5445cc['x'] - _0x4462cd + 0x1, _0x5445cc['y'] - _0x32de37 + 0x1, _0x5445cc['w'] - 0x2, _0x5445cc['h'] - 0x2);
                _0x2fce09['fillStyle'] = '#82532a';
                _0x2fce09['fillRect'](_0x5445cc['x'] - _0x4462cd + 0x4, _0x5445cc['y'] - _0x32de37 + 0x4, _0x5445cc['w'] - 0x8, _0x5445cc['h'] - 0x8);
                _0x2fce09['restore']();
            });
        }
        if (_0x312f87) {
            if (_0x1e780b['MAP']['wallChunks'] && _0x1e780b['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x436606 = _0x308e6e; _0x436606 <= _0x13f682; _0x436606++) {
                    for (let _0x560e55 = _0x108099; _0x560e55 <= _0x59cbb2; _0x560e55++) {
                        if (!_0x1e780b['MAP']['wallChunks'][_0x436606] || !_0x1e780b['MAP']['wallChunks'][_0x436606][_0x560e55])
                            continue;
                        const _0x19376b = _0x560e55 * _0x1e780b['MAP']['chunkSize'] - _0x4462cd;
                        const _0x57e642 = _0x436606 * _0x1e780b['MAP']['chunkSize'] - _0x32de37;
                        _0x2fce09['drawImage'](_0x1e780b['MAP']['wallChunks'][_0x436606][_0x560e55], _0x19376b, _0x57e642, _0x1e780b['MAP']['chunkSize'] + 0x1, _0x1e780b['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x1df3f0 = _0x308e6e; _0x1df3f0 <= _0x13f682; _0x1df3f0++) {
                for (let _0x1697c0 = _0x108099; _0x1697c0 <= _0x59cbb2; _0x1697c0++) {
                    const _0x39f21b = _0x1697c0 * _0x1e780b['MAP']['chunkSize'] - _0x4462cd;
                    const _0x41f9f4 = _0x1df3f0 * _0x1e780b['MAP']['chunkSize'] - _0x32de37;
                    _0x2fce09['drawImage'](_0x1e780b['MAP']['fgChunks'][_0x1df3f0][_0x1697c0], _0x39f21b, _0x41f9f4, _0x1e780b['MAP']['chunkSize'] + 0x1, _0x1e780b['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x1f286f = _0x1e780b['GAME_STATE'] === 'NIGHT' && (_0x41b96f === 'Skinwalker' || _0x41b96f === 'Blackmailer') && !_0x3ae52e['isDead'];
        const _0x2cddde = _0x3ae52e['x'] - _0x4462cd + _0x3ae52e['width'] / 0x2;
        const _0x2be704 = _0x3ae52e['y'] - _0x32de37 + _0x3ae52e['height'] / 0x2;
        const _0x5737b3 = _0x3ae52e['width'] * _0x3ae52e['scale'] * 1.3;
        const _0x5db348 = _0x3ae52e['height'] * _0x3ae52e['scale'] * 1.3;
        const _0x2fb924 = _0x380141('assets/arrow.png');
        const _0x40e78a = _0x380141('assets/tape.png');
        for (const _0x431c9a in _0x2e5d9c) {
            const _0x5a0e16 = _0x2e5d9c[_0x431c9a];
            if (_0x5a0e16['isDead'])
                continue;
            const _0x4acd61 = parseInt(_0x431c9a);
            const _0x45f881 = (_0x5a0e16['renderX'] ?? _0x5a0e16['x']) - _0x4462cd + _0x5a0e16['width'] / 0x2;
            const _0x37be11 = (_0x5a0e16['renderY'] ?? _0x5a0e16['y']) - _0x32de37 + _0x5a0e16['height'] / 0x2;
            const _0x183657 = Math['min'](0x2, Math['max'](0.3, _0x5a0e16['scale'] || 0x1));
            const _0x3dfae2 = _0x5a0e16['width'] * _0x183657 * 1.3;
            const _0x47f3fc = _0x5a0e16['height'] * _0x183657 * 1.3;
            _0x2fce09['save']();
            try {
                _0x2fce09['translate'](_0x45f881, _0x37be11);
                _0x2fce09['rotate'](_0x5a0e16['renderAngle'] ?? 0x0);
                if (_0x5a0e16['isDark'])
                    _0x2fce09['filter'] = 'brightness(0)';
                _0x58de4d(_0x2fce09, _0x5a0e16['body'], _0x5a0e16['eyes'], _0x3dfae2, _0x47f3fc);
                if (_0x4a15f7['has'](_0x4acd61) && _0x2de7d5['complete'] && _0x2de7d5['naturalWidth'] > 0x0) {
                    _0x2fce09['drawImage'](_0x2de7d5, -_0x3dfae2 / 0x2, -_0x47f3fc / 0x2, _0x3dfae2, _0x47f3fc);
                }
                if (_0x5a0e16['hasArrow'] && _0x1e780b['GAME_STATE'] === 'NIGHT' && _0x2fb924['complete'] && _0x2fb924['naturalWidth'] > 0x0) {
                    _0x2fce09['drawImage'](_0x2fb924, -_0x3dfae2 / 0x2, -_0x47f3fc / 0x2, _0x3dfae2, _0x47f3fc);
                }
                if ((_0x5a0e16['isBlackmailed'] || _0x357b9f['has'](_0x4acd61)) && _0x40e78a['complete'] && _0x40e78a['naturalWidth'] > 0x0) {
                    _0x2fce09['drawImage'](_0x40e78a, -_0x3dfae2 / 0x2, -_0x47f3fc / 0x2, _0x3dfae2, _0x47f3fc);
                }
                if (_0x5a0e16['isDark'])
                    _0x2fce09['filter'] = 'none';
            } finally {
                _0x2fce09['restore']();
            }
            if (!_0x2de5f5((_0x5a0e16['renderX'] ?? _0x5a0e16['x']) + _0x5a0e16['width'] / 0x2, (_0x5a0e16['renderY'] ?? _0x5a0e16['y']) + _0x5a0e16['height'] / 0x2)) {
                _0x2fce09['textAlign'] = 'center';
                _0x2fce09['lineJoin'] = 'round';
                _0x2fce09['lineWidth'] = 0x3;
                _0x2fce09['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x2fce09['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0xf91f41 = '#ffffff';
                if (_0x5a0e16['isBlackmailed'] || _0x357b9f['has'](_0x4acd61)) {
                    _0xf91f41 = '#ff4444';
                } else if (_0x4a15f7['has'](_0x4acd61)) {
                    _0xf91f41 = '#cc88ff';
                }
                _0x2fce09['fillStyle'] = _0xf91f41;
                const _0x1a9620 = _0x5a0e16['isDark'] ? '???' : _0x5a0e16['name'] + (_0x5a0e16['isOwner'] ? '\x20[🗝️]' : '');
                _0x2fce09['strokeText'](_0x1a9620, _0x45f881, _0x37be11 - _0x47f3fc / 0x2 - 0x10);
                _0x2fce09['fillText'](_0x1a9620, _0x45f881, _0x37be11 - _0x47f3fc / 0x2 - 0x10);
            }
        }
        if (!_0x3ae52e['isDead']) {
            _0x2fce09['save']();
            try {
                _0x2fce09['translate'](_0x2cddde, _0x2be704);
                _0x2fce09['rotate'](_0x3ae52e['angle']);
                if (_0x1f286f)
                    _0x2fce09['filter'] = 'brightness(0)';
                _0x58de4d(_0x2fce09, _0x3b242b, _0x577819, _0x5737b3, _0x5db348);
                if (_0x4a15f7['has'](_0x32a3b9) && _0x2de7d5['complete'] && _0x2de7d5['naturalWidth'] > 0x0) {
                    _0x2fce09['drawImage'](_0x2de7d5, -_0x5737b3 / 0x2, -_0x5db348 / 0x2, _0x5737b3, _0x5db348);
                }
                if (_0x3ae52e['hasArrow'] && _0x1e780b['GAME_STATE'] === 'NIGHT' && _0x2fb924['complete'] && _0x2fb924['naturalWidth'] > 0x0) {
                    _0x2fce09['drawImage'](_0x2fb924, -_0x5737b3 / 0x2, -_0x5db348 / 0x2, _0x5737b3, _0x5db348);
                }
                if (_0x357b9f['has'](_0x32a3b9) && _0x40e78a['complete'] && _0x40e78a['naturalWidth'] > 0x0) {
                    _0x2fce09['drawImage'](_0x40e78a, -_0x5737b3 / 0x2, -_0x5db348 / 0x2, _0x5737b3, _0x5db348);
                }
                if (_0x1f286f)
                    _0x2fce09['filter'] = 'none';
            } finally {
                _0x2fce09['restore']();
            }
            if (!_0x2de5f5(_0x3ae52e['x'] + _0x3ae52e['width'] / 0x2, _0x3ae52e['y'] + _0x3ae52e['height'] / 0x2)) {
                _0x2fce09['textAlign'] = 'center';
                _0x2fce09['lineJoin'] = 'round';
                _0x2fce09['lineWidth'] = 0x3;
                _0x2fce09['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x2fce09['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x3ac660 = '#ffffff';
                if (_0x357b9f['has'](_0x32a3b9)) {
                    _0x3ac660 = '#ff4444';
                } else if (_0x4a15f7['has'](_0x32a3b9)) {
                    _0x3ac660 = '#cc88ff';
                }
                _0x2fce09['fillStyle'] = _0x3ac660;
                const _0x465746 = _0x1f286f ? '???' : _0x2a649e + (_0x3f9b57 ? '\x20[🗝️]' : '');
                _0x2fce09['strokeText'](_0x465746, _0x2cddde, _0x2be704 - _0x5db348 / 0x2 - 0x10);
                _0x2fce09['fillText'](_0x465746, _0x2cddde, _0x2be704 - _0x5db348 / 0x2 - 0x10);
            }
        }
        if (_0x1e780b['MAP']['wallChunks'] && _0x1e780b['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x582b63 = _0x308e6e; _0x582b63 <= _0x13f682; _0x582b63++)
                for (let _0x294965 = _0x108099; _0x294965 <= _0x59cbb2; _0x294965++) {
                    if (!_0x1e780b['MAP']['wallChunks'][_0x582b63] || !_0x1e780b['MAP']['wallChunks'][_0x582b63][_0x294965])
                        continue;
                    const _0x44bfc4 = _0x294965 * _0x1e780b['MAP']['chunkSize'] - _0x4462cd;
                    const _0x3b4ba6 = _0x582b63 * _0x1e780b['MAP']['chunkSize'] - _0x32de37;
                    _0x2fce09['drawImage'](_0x1e780b['MAP']['wallChunks'][_0x582b63][_0x294965], _0x44bfc4, _0x3b4ba6, _0x1e780b['MAP']['chunkSize'] + 0x1, _0x1e780b['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x4aac6f of _0x1e780b['ENTITIES']) {
            if (_0x4aac6f['type'] !== 'npc')
                continue;
            const _0x36544e = _0x4aac6f['x'] - _0x4462cd + _0x4aac6f['w'] / 0x2;
            const _0x53c7fa = _0x4aac6f['y'] - _0x32de37 + _0x4aac6f['h'] / 0x2;
            const _0x216e86 = _0x4aac6f['w'];
            const _0x30450e = _0x4aac6f['h'];
            _0x2fce09['save']();
            _0x2fce09['translate'](_0x36544e, _0x53c7fa);
            _0x2fce09['rotate'](_0x4aac6f['angle'] !== undefined ? _0x4aac6f['angle'] : 0x0);
            _0x58de4d(_0x2fce09, _0x4aac6f['body'] || 'yanito932.png', _0x4aac6f['eyes'], _0x216e86, _0x30450e);
            _0x2fce09['restore']();
            _0x2fce09['textAlign'] = 'center';
            _0x2fce09['lineJoin'] = 'round';
            _0x2fce09['lineWidth'] = 0x3;
            _0x2fce09['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x2fce09['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
            _0x2fce09['fillStyle'] = '#aaaaaa';
            _0x2fce09['strokeText'](_0x4aac6f['name'] || 'NPC', _0x36544e, _0x53c7fa - _0x30450e / 0x2 - 0x10);
            _0x2fce09['fillText'](_0x4aac6f['name'] || 'NPC', _0x36544e, _0x53c7fa - _0x30450e / 0x2 - 0x10);
        }
        if (_0x3ae52e['isDead']) {
            for (const _0x14593f in _0x2e5d9c) {
                const _0x294273 = _0x2e5d9c[_0x14593f];
                if (!_0x294273['isDead'])
                    continue;
                const _0x10d400 = (_0x294273['renderX'] ?? _0x294273['x']) - _0x4462cd + _0x294273['width'] / 0x2;
                const _0x500c24 = (_0x294273['renderY'] ?? _0x294273['y']) - _0x32de37 + _0x294273['height'] / 0x2;
                const _0x38058b = _0x294273['width'] * (_0x294273['scale'] || 0x1) * 1.3;
                const _0x1d698c = _0x294273['height'] * (_0x294273['scale'] || 0x1) * 1.3;
                _0x2fce09['save']();
                try {
                    _0x2fce09['translate'](_0x10d400, _0x500c24);
                    _0x2fce09['rotate'](_0x294273['renderAngle'] ?? 0x0);
                    _0x2fce09['globalAlpha'] = 0.3;
                    _0x58de4d(_0x2fce09, _0x294273['body'], _0x294273['eyes'], _0x38058b, _0x1d698c);
                } finally {
                    _0x2fce09['restore']();
                }
                if (!_0x2de5f5((_0x294273['renderX'] ?? _0x294273['x']) + _0x294273['width'] / 0x2, (_0x294273['renderY'] ?? _0x294273['y']) + _0x294273['height'] / 0x2)) {
                    _0x2fce09['save']();
                    _0x2fce09['globalAlpha'] = 0.3;
                    _0x2fce09['textAlign'] = 'center';
                    _0x2fce09['lineJoin'] = 'round';
                    _0x2fce09['lineWidth'] = 0x3;
                    _0x2fce09['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x2fce09['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                    _0x2fce09['fillStyle'] = '#ffffff';
                    const _0x130f1d = _0x294273['name'] + (_0x294273['isOwner'] ? '\x20[🗝️]' : '');
                    _0x2fce09['strokeText'](_0x130f1d, _0x10d400, _0x500c24 - _0x1d698c / 0x2 - 0x10);
                    _0x2fce09['fillText'](_0x130f1d, _0x10d400, _0x500c24 - _0x1d698c / 0x2 - 0x10);
                    _0x2fce09['restore']();
                }
            }
            _0x2fce09['save']();
            try {
                _0x2fce09['translate'](_0x2cddde, _0x2be704);
                _0x2fce09['rotate'](_0x3ae52e['angle']);
                _0x2fce09['globalAlpha'] = 0.3;
                _0x58de4d(_0x2fce09, _0x3b242b, _0x577819, _0x5737b3, _0x5db348);
            } finally {
                _0x2fce09['restore']();
            }
            if (!_0x2de5f5(_0x3ae52e['x'] + _0x3ae52e['width'] / 0x2, _0x3ae52e['y'] + _0x3ae52e['height'] / 0x2)) {
                _0x2fce09['save']();
                _0x2fce09['globalAlpha'] = 0.3;
                _0x2fce09['textAlign'] = 'center';
                _0x2fce09['lineJoin'] = 'round';
                _0x2fce09['lineWidth'] = 0x3;
                _0x2fce09['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x2fce09['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                _0x2fce09['fillStyle'] = '#ffffff';
                const _0x244b38 = _0x2a649e + (_0x3f9b57 ? '\x20[🗝️]' : '');
                _0x2fce09['strokeText'](_0x244b38, _0x2cddde, _0x2be704 - _0x5db348 / 0x2 - 0x10);
                _0x2fce09['fillText'](_0x244b38, _0x2cddde, _0x2be704 - _0x5db348 / 0x2 - 0x10);
                _0x2fce09['restore']();
            }
        }
        for (let _0x2ba8fb = _0x308e6e; _0x2ba8fb <= _0x13f682; _0x2ba8fb++)
            for (let _0xcf26e5 = _0x108099; _0xcf26e5 <= _0x59cbb2; _0xcf26e5++) {
                const _0x2b6235 = _0xcf26e5 * _0x1e780b['MAP']['chunkSize'] - _0x4462cd;
                const _0x299466 = _0x2ba8fb * _0x1e780b['MAP']['chunkSize'] - _0x32de37;
                _0x2fce09['drawImage'](_0x1e780b['MAP']['fgChunks'][_0x2ba8fb][_0xcf26e5], _0x2b6235, _0x299466, _0x1e780b['MAP']['chunkSize'] + 0x1, _0x1e780b['MAP']['chunkSize'] + 0x1);
            }
        if (_0x1e780b['EDITOR']['enabled'] && _0x1e780b['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0xbe3baf = _0x1e780b['INPUTS']['mouseX'] / _0x1e780b['SYSTEM']['viewScale'] + _0x1e780b['CAMERA']['x'];
            const _0x12df0b = _0x1e780b['INPUTS']['mouseY'] / _0x1e780b['SYSTEM']['viewScale'] + _0x1e780b['CAMERA']['y'];
            const _0x3696d2 = Math['floor'](_0xbe3baf / _0x1e780b['MAP']['tileSize']);
            const _0x567ffd = Math['floor'](_0x12df0b / _0x1e780b['MAP']['tileSize']);
            if (_0x3696d2 >= 0x0 && _0x3696d2 < _0x1e780b['MAP']['columns'] && _0x567ffd >= 0x0 && _0x567ffd < _0x1e780b['MAP']['rows']) {
                const _0x3ef0c2 = _0x3696d2 * _0x1e780b['MAP']['tileSize'] - _0x4462cd;
                const _0x186154 = _0x567ffd * _0x1e780b['MAP']['tileSize'] - _0x32de37;
                _0x2fce09['save']();
                _0x2fce09['globalAlpha'] = 0.5;
                if (_0x1e780b['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x14f140 = _0x1e780b['EDITOR']['selectedTileGid'] - 0x1;
                    _0x2fce09['drawImage'](_0x56dd00, _0x14f140 % _0x1e780b['MAP']['tilesetCols'] * _0x1e780b['MAP']['tileSize'], Math['floor'](_0x14f140 / _0x1e780b['MAP']['tilesetCols']) * _0x1e780b['MAP']['tileSize'], _0x1e780b['MAP']['tileSize'], _0x1e780b['MAP']['tileSize'], _0x3ef0c2, _0x186154, _0x1e780b['MAP']['tileSize'], _0x1e780b['MAP']['tileSize']);
                } else {
                    _0x2fce09['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x2fce09['fillRect'](_0x3ef0c2, _0x186154, _0x1e780b['MAP']['tileSize'], _0x1e780b['MAP']['tileSize']);
                }
                _0x2fce09['restore']();
            }
        }
        _0x5b26c4(_0x2fce09, _0x4462cd, _0x32de37);
        if (_0x4ec117 > 0x0) {
            _0x2fce09['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x4ec117 + ')';
            _0x2fce09['fillRect'](0x0, 0x0, _0x1e780b['CAMERA']['width'], _0x1e780b['CAMERA']['height']);
        }
        for (const _0x12a768 in _0x2e5d9c) {
            const _0x2b48a8 = _0x2e5d9c[_0x12a768];
            if (_0x2b48a8['isDead'] && !_0x3ae52e['isDead'])
                continue;
            const _0x1ac997 = (_0x2b48a8['renderX'] ?? _0x2b48a8['x']) - _0x4462cd + _0x2b48a8['width'] / 0x2;
            const _0x2502b7 = (_0x2b48a8['renderY'] ?? _0x2b48a8['y']) - _0x32de37 + _0x2b48a8['height'] / 0x2;
            _0xcc98bc(_0x2fce09, _0x2b48a8['chats'], _0x1ac997, _0x2502b7 - _0x2b48a8['height'] / 0x2 - 0x20);
        }
        _0xcc98bc(_0x2fce09, _0x3ae52e['chats'], _0x2cddde, _0x2be704 - _0x3ae52e['height'] / 0x2 - 0x20);
        if (_0x407467 > 0x0) {
            _0x2fce09['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x407467 + ')';
            _0x2fce09['fillRect'](0x0, 0x0, _0x1e780b['CAMERA']['width'], _0x1e780b['CAMERA']['height']);
        }
    } finally {
        _0x2fce09['restore']();
    }
}
function _0x311fa6(_0x151567) {
    if (!_0x1e780b['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x311fa6);
    let _0x5ae797 = (_0x151567 - _0x1e780b['SYSTEM']['lastTime']) / 0x3e8;
    _0x1e780b['SYSTEM']['lastTime'] = _0x151567;
    if (_0x5ae797 > 0.1)
        _0x5ae797 = 0.1;
    if (_0x5ae797 < 0x0 || isNaN(_0x5ae797))
        _0x5ae797 = 0.016;
    if (_0x312f87) {
        _0x43d28d(_0x5ae797);
        _0xc97cdc();
        return;
    }
    if (!_0x32a3b9)
        return;
    _0x4b05ac(_0x5ae797);
    _0x154aeb['tick'](_0x151567);
    _0xc97cdc();
}
function _0x56f68c() {
    if (_0x56dd00['complete'] && _0x56dd00['naturalWidth'] > 0x0) {
        _0x1e780b['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x320d13 = Math['ceil'](_0x1e780b['MAP']['columns'] * _0x1e780b['MAP']['tileSize'] / _0x1e780b['MAP']['chunkSize']);
    const _0x175714 = Math['ceil'](_0x1e780b['MAP']['rows'] * _0x1e780b['MAP']['tileSize'] / _0x1e780b['MAP']['chunkSize']);
    _0x1e780b['MAP']['bgChunks'] = [];
    _0x1e780b['MAP']['fgChunks'] = [];
    _0x1e780b['MAP']['wallChunks'] = [];
    for (let _0x46e453 = 0x0; _0x46e453 < _0x175714; _0x46e453++) {
        _0x1e780b['MAP']['bgChunks'][_0x46e453] = [];
        _0x1e780b['MAP']['fgChunks'][_0x46e453] = [];
        _0x1e780b['MAP']['wallChunks'][_0x46e453] = [];
        for (let _0x2039e8 = 0x0; _0x2039e8 < _0x320d13; _0x2039e8++) {
            const _0x1a299e = document['createElement']('canvas');
            _0x1a299e['width'] = _0x1a299e['height'] = _0x1e780b['MAP']['chunkSize'];
            const _0x4159a4 = document['createElement']('canvas');
            _0x4159a4['width'] = _0x4159a4['height'] = _0x1e780b['MAP']['chunkSize'];
            const _0x1eeda0 = document['createElement']('canvas');
            _0x1eeda0['width'] = _0x1eeda0['height'] = _0x1e780b['MAP']['chunkSize'];
            _0x1e780b['MAP']['bgChunks'][_0x46e453][_0x2039e8] = _0x1a299e;
            _0x1e780b['MAP']['fgChunks'][_0x46e453][_0x2039e8] = _0x4159a4;
            _0x1e780b['MAP']['wallChunks'][_0x46e453][_0x2039e8] = _0x1eeda0;
            _0x80d68b(_0x2039e8, _0x46e453);
        }
    }
}
function _0x80d68b(_0x306b9a, _0x11e510) {
    const _0x585661 = _0x1e780b['MAP']['bgChunks'][_0x11e510][_0x306b9a]['getContext']('2d', { 'alpha': !![] });
    const _0x23351b = _0x1e780b['MAP']['fgChunks'][_0x11e510][_0x306b9a]['getContext']('2d', { 'alpha': !![] });
    const _0x516934 = _0x1e780b['MAP']['wallChunks'][_0x11e510] && _0x1e780b['MAP']['wallChunks'][_0x11e510][_0x306b9a] ? _0x1e780b['MAP']['wallChunks'][_0x11e510][_0x306b9a]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x585661['imageSmoothingEnabled'] = _0x23351b['imageSmoothingEnabled'] = ![];
    if (_0x516934)
        _0x516934['imageSmoothingEnabled'] = ![];
    _0x585661['clearRect'](0x0, 0x0, _0x1e780b['MAP']['chunkSize'], _0x1e780b['MAP']['chunkSize']);
    _0x23351b['clearRect'](0x0, 0x0, _0x1e780b['MAP']['chunkSize'], _0x1e780b['MAP']['chunkSize']);
    if (_0x516934)
        _0x516934['clearRect'](0x0, 0x0, _0x1e780b['MAP']['chunkSize'], _0x1e780b['MAP']['chunkSize']);
    const _0x3695e2 = Math['floor'](_0x306b9a * _0x1e780b['MAP']['chunkSize'] / _0x1e780b['MAP']['tileSize']);
    const _0x1715f7 = Math['ceil']((_0x306b9a + 0x1) * _0x1e780b['MAP']['chunkSize'] / _0x1e780b['MAP']['tileSize']);
    const _0x92c152 = Math['floor'](_0x11e510 * _0x1e780b['MAP']['chunkSize'] / _0x1e780b['MAP']['tileSize']);
    const _0x329ec7 = Math['ceil']((_0x11e510 + 0x1) * _0x1e780b['MAP']['chunkSize'] / _0x1e780b['MAP']['tileSize']);
    const _0x110a13 = 0.5;
    const _0x154ff6 = _0x1e780b['MAP']['tileSize'] - _0x110a13 * 0x2;
    _0x1e780b['MAP']['layers']['forEach'](_0x3ea0ac => {
        const _0x1bdca9 = _0x3ea0ac['name'] === 'walls';
        const _0x4f058a = _0x3ea0ac['name'] === 'trees' ? _0x23351b : _0x1bdca9 ? _0x516934 || _0x585661 : _0x585661;
        for (let _0x105f4b = Math['max'](0x0, _0x92c152); _0x105f4b < Math['min'](_0x1e780b['MAP']['rows'], _0x329ec7); _0x105f4b++) {
            for (let _0x2640eb = Math['max'](0x0, _0x3695e2); _0x2640eb < Math['min'](_0x1e780b['MAP']['columns'], _0x1715f7); _0x2640eb++) {
                let _0x39c2a1 = _0x3ea0ac['data'][_0x105f4b * _0x1e780b['MAP']['columns'] + _0x2640eb];
                if (_0x3ea0ac['name'] === 'floor2' && _0x1e780b['MAP']['doors'] && _0x1e780b['MAP']['doors'][_0x105f4b * _0x1e780b['MAP']['columns'] + _0x2640eb]) {
                    _0x39c2a1 = 0x2;
                }
                if (_0x39c2a1 > 0x0) {
                    const _0x39f359 = _0x39c2a1 - 0x1;
                    const _0x2e865a = _0x39f359 % _0x1e780b['MAP']['tilesetCols'] * _0x1e780b['MAP']['tileSize'] + _0x110a13;
                    const _0x13dfa7 = Math['floor'](_0x39f359 / _0x1e780b['MAP']['tilesetCols']) * _0x1e780b['MAP']['tileSize'] + _0x110a13;
                    const _0x130fbd = _0x2640eb * _0x1e780b['MAP']['tileSize'] - _0x306b9a * _0x1e780b['MAP']['chunkSize'];
                    const _0x122ab9 = _0x105f4b * _0x1e780b['MAP']['tileSize'] - _0x11e510 * _0x1e780b['MAP']['chunkSize'];
                    if (_0x39c2a1 === 0x4) {
                        const _0x3f0ede = 0x1;
                        const _0xd6febe = _0x3f0ede % _0x1e780b['MAP']['tilesetCols'] * _0x1e780b['MAP']['tileSize'] + _0x110a13;
                        const _0x1e65ae = Math['floor'](_0x3f0ede / _0x1e780b['MAP']['tilesetCols']) * _0x1e780b['MAP']['tileSize'] + _0x110a13;
                        _0x585661['drawImage'](_0x56dd00, _0xd6febe, _0x1e65ae, _0x154ff6, _0x154ff6, _0x130fbd, _0x122ab9, _0x1e780b['MAP']['tileSize'], _0x1e780b['MAP']['tileSize']);
                        let _0x4d1ee0 = _0x1e780b['MAP']['doors'] ? _0x1e780b['MAP']['doors'][_0x105f4b * _0x1e780b['MAP']['columns'] + _0x2640eb] : null;
                        if (!_0x4d1ee0) {
                            const _0x3d9c16 = _0x1e780b['MAP']['layers']['find'](_0x246412 => _0x246412['name'] === 'walls');
                            const _0xf5cae5 = _0x105f4b > 0x0 && _0x3d9c16 && _0x3d9c16['data'][(_0x105f4b - 0x1) * _0x1e780b['MAP']['columns'] + _0x2640eb] > 0x0;
                            const _0x147c60 = _0x105f4b < _0x1e780b['MAP']['rows'] - 0x1 && _0x3d9c16 && _0x3d9c16['data'][(_0x105f4b + 0x1) * _0x1e780b['MAP']['columns'] + _0x2640eb] > 0x0;
                            const _0x3a826a = _0x2640eb > 0x0 && _0x3d9c16 && _0x3d9c16['data'][_0x105f4b * _0x1e780b['MAP']['columns'] + _0x2640eb - 0x1] > 0x0;
                            const _0x52510d = _0x2640eb < _0x1e780b['MAP']['columns'] - 0x1 && _0x3d9c16 && _0x3d9c16['data'][_0x105f4b * _0x1e780b['MAP']['columns'] + _0x2640eb + 0x1] > 0x0;
                            if (_0x3a826a && _0x52510d)
                                _0x4d1ee0 = _0x105f4b < _0x1e780b['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0xf5cae5 && _0x147c60)
                                _0x4d1ee0 = _0x2640eb < _0x1e780b['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x1f1f25 = 0x0;
                        if (_0x4d1ee0 === 'bottom')
                            _0x1f1f25 = Math['PI'] / 0x2;
                        else if (_0x4d1ee0 === 'left')
                            _0x1f1f25 = Math['PI'];
                        else if (_0x4d1ee0 === 'top')
                            _0x1f1f25 = -Math['PI'] / 0x2;
                        else if (_0x4d1ee0 === 'right')
                            _0x1f1f25 = 0x0;
                        if (_0x1f1f25 !== 0x0) {
                            _0x4f058a['save']();
                            _0x4f058a['translate'](_0x130fbd + _0x1e780b['MAP']['tileSize'] / 0x2, _0x122ab9 + _0x1e780b['MAP']['tileSize'] / 0x2);
                            _0x4f058a['rotate'](_0x1f1f25);
                            _0x4f058a['drawImage'](_0x56dd00, _0x2e865a, _0x13dfa7, _0x154ff6, _0x154ff6, -_0x1e780b['MAP']['tileSize'] / 0x2, -_0x1e780b['MAP']['tileSize'] / 0x2, _0x1e780b['MAP']['tileSize'], _0x1e780b['MAP']['tileSize']);
                            _0x4f058a['restore']();
                        } else {
                            _0x4f058a['drawImage'](_0x56dd00, _0x2e865a, _0x13dfa7, _0x154ff6, _0x154ff6, _0x130fbd, _0x122ab9, _0x1e780b['MAP']['tileSize'], _0x1e780b['MAP']['tileSize']);
                        }
                    } else {
                        _0x4f058a['drawImage'](_0x56dd00, _0x2e865a, _0x13dfa7, _0x154ff6, _0x154ff6, _0x130fbd, _0x122ab9, _0x1e780b['MAP']['tileSize'], _0x1e780b['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x9e40c0() {
    _0x56dd00['crossOrigin'] = 'Anonymous';
    _0x56dd00['onload'] = () => {
        _0x1e780b['MAP']['tilesetCols'] = 0x3;
        if (_0x1e780b['MAP']['columns'] > 0x0 && _0x1e780b['MAP']['layers'] && _0x1e780b['MAP']['layers']['length'] > 0x0) {
            _0x56f68c();
        }
        _0x3363df();
    };
    _0x56dd00['onerror'] = () => {
        _0x1e780b['MAP']['tilesetCols'] = 0x1;
        _0x3363df();
    };
    _0x56dd00['src'] = 'assets/tilesheet.png';
    _0x3c8f8f['crossOrigin'] = 'Anonymous';
    _0x3c8f8f['onload'] = _0x3363df;
    _0x3c8f8f['onerror'] = () => {
        _0x3363df();
    };
    _0x3c8f8f['src'] = 'assets/center.png';
    _0x599cc9['crossOrigin'] = 'Anonymous';
    _0x599cc9['onload'] = _0x3363df;
    _0x599cc9['onerror'] = () => {
        _0x3363df();
    };
    _0x599cc9['src'] = 'assets/table.png';
}
function _0x3363df() {
    _0x1e780b['SYSTEM']['assetsLoaded']++;
    if (_0x1e780b['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x1e780b['MAP']['columns'] > 0x0 && _0x1e780b['MAP']['layers'] && _0x1e780b['MAP']['layers']['length'] > 0x0) {
            _0x56f68c();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x3398f5();
    }
}
function _0x877ce8(_0x8647d7, _0x181dae) {
    if (!_0x3f9b57 || !_0x1e443d)
        return;
    const _0x5ef3a4 = _0x8647d7 / _0x1e780b['SYSTEM']['viewScale'] + _0x1e780b['CAMERA']['x'];
    const _0x5f500b = _0x181dae / _0x1e780b['SYSTEM']['viewScale'] + _0x1e780b['CAMERA']['y'];
    const _0x209fe8 = Math['floor'](_0x5ef3a4 / _0x1e780b['MAP']['tileSize']);
    const _0x33110a = Math['floor'](_0x5f500b / _0x1e780b['MAP']['tileSize']);
    if (_0x209fe8 >= 0x0 && _0x209fe8 < _0x1e780b['MAP']['columns'] && _0x33110a >= 0x0 && _0x33110a < _0x1e780b['MAP']['rows'])
        _0x1e443d['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x1e780b['EDITOR']['selectedLayer'],
            'col': _0x209fe8,
            'row': _0x33110a,
            'gid': _0x1e780b['EDITOR']['selectedTileGid']
        }));
}
function _0x40adca() {
    const _0x3d863e = document['getElementById']('palette');
    if (!_0x3d863e || _0x3d863e['children']['length'] > 0x0)
        return;
    const _0x4be1cb = 0x40;
    const _0x5ad3b6 = _0x56dd00;
    const _0x49247b = document['createElement']('div');
    _0x49247b['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x514896 = document['createElement']('canvas');
    _0x514896['width'] = 0xc0;
    _0x514896['height'] = 0xa0;
    _0x514896['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x49247b['appendChild'](_0x514896);
    const _0x1f87e3 = document['createElement']('div');
    _0x1f87e3['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x49247b['appendChild'](_0x1f87e3);
    let _0x5030a4 = 0x0, _0x44bf51 = 0x0;
    let _0x374594 = ![], _0x1540f1 = 0x0, _0x5068bb = 0x0, _0x284063 = 0x0, _0x2dae76 = 0x0;
    function _0x46d81f() {
        const _0x188909 = _0x514896['getContext']('2d');
        _0x188909['clearRect'](0x0, 0x0, _0x514896['width'], _0x514896['height']);
        _0x188909['imageSmoothingEnabled'] = ![];
        if (_0x5ad3b6['complete'] && _0x5ad3b6['naturalWidth'] > 0x0) {
            _0x188909['drawImage'](_0x5ad3b6, _0x5030a4, _0x44bf51, _0x514896['width'], _0x514896['height'], 0x0, 0x0, _0x514896['width'], _0x514896['height']);
        }
        _0x188909['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x188909['lineWidth'] = 0x1;
        const _0x32a9d4 = Math['floor'](_0x5030a4 / _0x4be1cb);
        const _0x5e46c2 = Math['floor'](_0x44bf51 / _0x4be1cb);
        for (let _0x52155c = _0x32a9d4; _0x52155c <= _0x32a9d4 + Math['ceil'](_0x514896['width'] / _0x4be1cb) + 0x1; _0x52155c++) {
            const _0x17945c = _0x52155c * _0x4be1cb - _0x5030a4;
            _0x188909['beginPath']();
            _0x188909['moveTo'](_0x17945c, 0x0);
            _0x188909['lineTo'](_0x17945c, _0x514896['height']);
            _0x188909['stroke']();
        }
        for (let _0xa5f74b = _0x5e46c2; _0xa5f74b <= _0x5e46c2 + Math['ceil'](_0x514896['height'] / _0x4be1cb) + 0x1; _0xa5f74b++) {
            const _0x3b4392 = _0xa5f74b * _0x4be1cb - _0x44bf51;
            _0x188909['beginPath']();
            _0x188909['moveTo'](0x0, _0x3b4392);
            _0x188909['lineTo'](_0x514896['width'], _0x3b4392);
            _0x188909['stroke']();
        }
    }
    function _0x2697fb() {
        const _0x2a76c9 = Math['max'](0x1, Math['ceil'](_0x5ad3b6['naturalWidth'] / _0x4be1cb));
        const _0x27eac4 = _0x1e780b['EDITOR']['selectedTileGid'];
        if (_0x27eac4 <= 0x0) {
            _0x1f87e3['style']['display'] = 'none';
            return;
        }
        const _0x38ee61 = _0x27eac4 - 0x1;
        const _0x1cf939 = _0x38ee61 % _0x2a76c9;
        const _0x33813f = Math['floor'](_0x38ee61 / _0x2a76c9);
        const _0x3210de = _0x1cf939 * _0x4be1cb - _0x5030a4;
        const _0x50a62f = _0x33813f * _0x4be1cb - _0x44bf51;
        _0x1f87e3['style']['display'] = 'block';
        _0x1f87e3['style']['left'] = _0x3210de + 'px';
        _0x1f87e3['style']['top'] = _0x50a62f + 'px';
    }
    _0x5ad3b6['onload'] = () => {
        _0x46d81f();
        _0x2697fb();
    };
    if (_0x5ad3b6['complete'] && _0x5ad3b6['naturalWidth'] > 0x0) {
        _0x46d81f();
        _0x2697fb();
    }
    _0x49247b['addEventListener']('mousedown', _0x5702ac => {
        if (_0x5702ac['button'] === 0x0) {
            _0x374594 = !![];
            _0x1540f1 = _0x5702ac['clientX'];
            _0x5068bb = _0x5702ac['clientY'];
            _0x284063 = _0x5030a4;
            _0x2dae76 = _0x44bf51;
            _0x49247b['style']['cursor'] = 'grabbing';
            _0x5702ac['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x495ce3 => {
        if (!_0x374594)
            return;
        const _0x21e5f9 = _0x1540f1 - _0x495ce3['clientX'];
        const _0x48de0e = _0x5068bb - _0x495ce3['clientY'];
        const _0x5ab8c8 = Math['max'](0x0, _0x5ad3b6['naturalWidth'] - _0x514896['width']);
        const _0x455304 = Math['max'](0x0, _0x5ad3b6['naturalHeight'] - _0x514896['height']);
        _0x5030a4 = Math['max'](0x0, Math['min'](_0x5ab8c8, _0x284063 + _0x21e5f9));
        _0x44bf51 = Math['max'](0x0, Math['min'](_0x455304, _0x2dae76 + _0x48de0e));
        _0x46d81f();
        _0x2697fb();
    });
    window['addEventListener']('mouseup', _0x4df975 => {
        if (_0x374594) {
            _0x374594 = ![];
            _0x49247b['style']['cursor'] = 'grab';
        }
    });
    _0x49247b['addEventListener']('click', _0x5cea53 => {
        const _0x39daa0 = _0x49247b['getBoundingClientRect']();
        const _0x2d2ee5 = _0x5cea53['clientX'] - _0x39daa0['left'] + _0x5030a4;
        const _0x3b9e36 = _0x5cea53['clientY'] - _0x39daa0['top'] + _0x44bf51;
        const _0x362717 = Math['max'](0x1, Math['ceil'](_0x5ad3b6['naturalWidth'] / _0x4be1cb));
        const _0x290db4 = Math['floor'](_0x2d2ee5 / _0x4be1cb);
        const _0x416027 = Math['floor'](_0x3b9e36 / _0x4be1cb);
        const _0xb1d00b = _0x416027 * _0x362717 + _0x290db4 + 0x1;
        _0x1e780b['EDITOR']['selectedTileGid'] = _0xb1d00b;
        _0x2697fb();
    });
    _0x3d863e['appendChild'](_0x49247b);
    const _0x126cdf = document['createElement']('div');
    _0x126cdf['className'] = 'tile-btn\x20eraser-btn';
    _0x126cdf['title'] = 'Eraser\x20(gid\x200)';
    _0x126cdf['onclick'] = () => {
        _0x1e780b['EDITOR']['selectedTileGid'] = 0x0;
        _0x1f87e3['style']['display'] = 'none';
    };
    _0x3d863e['appendChild'](_0x126cdf);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x1e780b['EDITOR']['enabled'] = !_0x1e780b['EDITOR']['enabled'];
        const _0x221042 = document['getElementById']('editor-tools');
        if (_0x1e780b['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x221042['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x221042['style']['display'] = 'none';
        }
    });
    const _0x57468d = document['getElementById']('start-game-btn');
    if (_0x57468d) {
        _0x57468d['addEventListener']('click', () => {
            if (_0x1e443d)
                _0x1e443d['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x502240 = document['getElementById']('rolelist-toggle-btn');
    if (_0x502240) {
        let _0x430288 = 'subalignments';
        _0x502240['addEventListener']('click', () => {
            if (_0x430288 === 'subalignments')
                _0x430288 = 'precise';
            else if (_0x430288 === 'precise')
                _0x430288 = 'off';
            else
                _0x430288 = 'subalignments';
            _0x502240['innerText'] = 'Role\x20List:\x20' + _0x430288['charAt'](0x0)['toUpperCase']() + _0x430288['slice'](0x1);
            if (_0x1e443d)
                _0x1e443d['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x430288
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x442415 => {
        if (_0x442415['id'] === 'editor-toggle-btn' || _0x442415['id'] === 'start-game-btn' || _0x442415['id'] === 'rolelist-toggle-btn')
            return;
        _0x442415['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0xeb702f => _0xeb702f['classList']['remove']('active'));
            _0x442415['classList']['add']('active');
            _0x1e780b['EDITOR']['selectedLayer'] = _0x442415['dataset']['layer'];
        });
    });
}
function _0x5bab07(_0x39a88a) {
    if (_0x1e443d)
        _0x1e443d['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x39a88a
        }));
}
function _0x325bda(_0x59e91e) {
    if (_0x1e443d)
        _0x1e443d['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x59e91e
        }));
}
function _0x1f03d3(_0x5b7f04, _0x40c23b, _0x214f1e, _0x543c70) {
    const _0x7f5dd = document['getElementById']('admin-panel');
    if (_0x7f5dd)
        _0x7f5dd['remove']();
    if (_0x7f5dd && _0x7f5dd['dataset']['target'] === String(_0x5b7f04))
        return;
    const _0x453057 = document['createElement']('div');
    _0x453057['id'] = 'admin-panel';
    _0x453057['dataset']['target'] = String(_0x5b7f04);
    _0x453057['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0xe5f85b = document['createElement']('div');
    _0xe5f85b['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0xe5f85b['textContent'] = _0x40c23b;
    _0x453057['appendChild'](_0xe5f85b);
    const _0x234e27 = document['createElement']('button');
    _0x234e27['textContent'] = 'Kick';
    _0x234e27['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x234e27['onmouseenter'] = () => _0x234e27['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x234e27['onmouseleave'] = () => _0x234e27['style']['background'] = 'transparent';
    _0x234e27['onclick'] = () => {
        _0x5bab07(_0x5b7f04);
        _0x453057['remove']();
    };
    _0x453057['appendChild'](_0x234e27);
    const _0x44aa94 = document['createElement']('button');
    _0x44aa94['textContent'] = 'Ban';
    _0x44aa94['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x44aa94['onmouseenter'] = () => _0x44aa94['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x44aa94['onmouseleave'] = () => _0x44aa94['style']['background'] = 'transparent';
    _0x44aa94['onclick'] = () => {
        _0x325bda(_0x5b7f04);
        _0x453057['remove']();
    };
    _0x453057['appendChild'](_0x44aa94);
    document['body']['appendChild'](_0x453057);
    const _0x3013ad = _0x453057['offsetWidth'] || 0x91;
    const _0x2f247d = _0x453057['offsetHeight'] || 0x50;
    let _0x43e48d = _0x214f1e - _0x3013ad;
    let _0x348939 = _0x543c70;
    if (_0x43e48d < 0x4)
        _0x43e48d = _0x214f1e;
    if (_0x348939 + _0x2f247d > window['innerHeight'] - 0x4)
        _0x348939 = window['innerHeight'] - _0x2f247d - 0x4;
    _0x453057['style']['left'] = _0x43e48d + 'px';
    _0x453057['style']['top'] = _0x348939 + 'px';
    const _0x4715bc = _0x173dc3 => {
        if (!_0x453057['contains'](_0x173dc3['target'])) {
            _0x453057['remove']();
            document['removeEventListener']('mousedown', _0x4715bc);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x4715bc), 0x0);
}
function _0x219571() {
    const _0x5b9aaa = document['getElementById']('leaderboard-list');
    _0x5b9aaa['innerHTML'] = '';
    const _0x103c8a = document['createElement']('div');
    _0x103c8a['className'] = 'leaderboard-entry';
    const _0x291198 = document['createElement']('span');
    _0x291198['textContent'] = _0x2a649e + (_0x3f9b57 ? '\x20[🗝️]' : '');
    if (_0x4a15f7['has'](_0x32a3b9) && !_0x3ae52e['isDead']) {
        _0x291198['style']['color'] = '#cc88ff';
    }
    _0x103c8a['appendChild'](_0x291198);
    _0x5b9aaa['appendChild'](_0x103c8a);
    for (const _0xa7a0cb in _0x2e5d9c) {
        const _0x200b56 = document['createElement']('div');
        _0x200b56['className'] = 'leaderboard-entry';
        const _0x2a4367 = document['createElement']('span');
        _0x2a4367['textContent'] = _0x2e5d9c[_0xa7a0cb]['name'] + (_0x2e5d9c[_0xa7a0cb]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x4a15f7['has'](parseInt(_0xa7a0cb)) && !_0x2e5d9c[_0xa7a0cb]['isDead']) {
            _0x2a4367['style']['color'] = '#cc88ff';
        }
        _0x200b56['appendChild'](_0x2a4367);
        if (_0x3f9b57 && !_0x2e5d9c[_0xa7a0cb]['isOwner']) {
            const _0x5c35f9 = _0x2e5d9c[_0xa7a0cb]['id'];
            const _0x3b93a0 = _0x2e5d9c[_0xa7a0cb]['name'];
            _0x200b56['style']['cursor'] = 'context-menu';
            _0x200b56['addEventListener']('contextmenu', _0x1682b9 => {
                _0x1682b9['preventDefault']();
                _0x1682b9['stopPropagation']();
                _0x1f03d3(_0x5c35f9, _0x3b93a0, _0x1682b9['clientX'], _0x1682b9['clientY']);
            });
        }
        _0x5b9aaa['appendChild'](_0x200b56);
    }
}
window['addEventListener']('resize', _0x3398f5);
function _0x3398f5() {
    _0x2ba5d1['width'] = window['innerWidth'];
    _0x2ba5d1['height'] = window['innerHeight'];
    _0x1e780b['SYSTEM']['viewScale'] = Math['max'](_0x2ba5d1['width'] / _0x32c369, _0x2ba5d1['height'] / _0x374d7a);
    _0x1e780b['CAMERA']['width'] = _0x2ba5d1['width'] / _0x1e780b['SYSTEM']['viewScale'];
    _0x1e780b['CAMERA']['height'] = _0x2ba5d1['height'] / _0x1e780b['SYSTEM']['viewScale'];
    _0x2fce09['imageSmoothingEnabled'] = ![];
}
function _0x371f3b(_0x40f212) {
    if (_0x40f212['ctrlKey'] || _0x40f212['metaKey']) {
        if (_0x40f212['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x40f212['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x40f212['code'])) {
            _0x40f212['preventDefault']();
            _0x40f212['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x371f3b, { 'passive': ![] });
window['addEventListener']('keydown', _0x371f3b, { 'passive': ![] });
window['addEventListener']('keydown', _0x43f703 => {
    const _0x54ee13 = _0x43f703['key']['toLowerCase']();
    if (_0x54ee13 === 'tab') {
        _0x43f703['preventDefault']();
        const _0x1099a2 = document['getElementById']('will-ui');
        const _0x12f463 = document['getElementById']('will-input');
        if (_0x1099a2['style']['display'] === 'flex') {
            _0x1099a2['style']['display'] = 'none';
            if (_0x1e780b['GAME_STATE'] !== 'NIGHT' && _0x1e443d)
                _0x1e443d['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x12f463['value']
                }));
            _0x12f463['blur']();
        } else {
            if (_0x1e780b['GAME_STATE'] === 'NIGHT') {
                _0x1c68df('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x1099a2['style']['display'] = 'flex';
            _0x12f463['focus']();
            for (let _0x86f5f0 in _0x1e780b['INPUTS']['keys'])
                _0x1e780b['INPUTS']['keys'][_0x86f5f0] = ![];
        }
        return;
    }
    if (_0x43f703['key'] === 'Enter') {
        if (_0x312f87) {
            const _0x35a76c = document['getElementById']('play-btn');
            if (_0x35a76c)
                _0x35a76c['click']();
            return;
        }
        if (!_0x1e443d || _0x1e443d['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x2f5baf = document['getElementById']('chat-ui');
        const _0x260231 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x260231) {
            const _0x329e04 = _0x260231['value']['trim']();
            if (_0x329e04['length'] > 0x0) {
                _0x1e443d['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x329e04
                }));
            }
            _0x260231['value'] = '';
            _0x2f5baf['style']['display'] = 'none';
            _0x260231['blur']();
        } else {
            _0x2f5baf['style']['display'] = 'block';
            _0x260231['focus']();
            for (let _0xd5dcea in _0x1e780b['INPUTS']['keys'])
                _0x1e780b['INPUTS']['keys'][_0xd5dcea] = ![];
        }
        _0x43f703['preventDefault']();
        return;
    }
    if (_0x43f703['key'] === 'Escape') {
        const _0x35d096 = document['getElementById']('role-index-modal');
        if (_0x35d096 && _0x35d096['style']['display'] === 'flex') {
            _0x35d096['style']['display'] = 'none';
            return;
        }
        const _0x322cfc = document['getElementById']('guide-ui');
        if (_0x322cfc && _0x322cfc['style']['display'] === 'flex') {
            _0x322cfc['style']['display'] = 'none';
            return;
        }
        const _0x4b701a = document['getElementById']('ability-ui');
        if (_0x4b701a && _0x4b701a['style']['display'] === 'block') {
            _0x4b701a['style']['display'] = 'none';
            return;
        }
        const _0x1bbbd2 = document['getElementById']('settings-panel');
        if (_0x1bbbd2 && _0x1bbbd2['style']['display'] === 'block') {
            _0x1bbbd2['style']['display'] = 'none';
            return;
        }
        const _0x443cfc = document['getElementById']('mayor-confirm-dialog');
        if (_0x443cfc && _0x443cfc['style']['display'] === 'flex') {
            _0x443cfc['style']['display'] = 'none';
            return;
        }
        const _0x3b71bd = document['getElementById']('target-chooser-ui');
        if (_0x3b71bd && _0x3b71bd['style']['display'] === 'flex') {
            _0x3b71bd['style']['display'] = 'none';
            return;
        }
        const _0xbd8277 = document['getElementById']('chat-ui');
        const _0x2afdb4 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x2afdb4) {
            _0x2afdb4['value'] = '';
            _0xbd8277['style']['display'] = 'none';
            _0x2afdb4['blur']();
            _0x43f703['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x1e780b['INPUTS']['keys']['hasOwnProperty'](_0x54ee13))
            _0x1e780b['INPUTS']['keys'][_0x54ee13] = !![];
        if (!_0x1e443d || _0x1e443d['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x54ee13 === 'h' && !_0x43f703['repeat']) {
            const _0x1698ed = document['getElementById']('guide-ui');
            if (_0x1698ed) {
                _0x1698ed['style']['display'] = _0x1698ed['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x54ee13 === 't' && !_0x43f703['repeat']) {
            if (_0x3ae52e['isDead'])
                return;
            if (_0x41b96f === 'Mayor') {
                if (_0x4a15f7['has'](_0x32a3b9)) {
                    _0x1c68df('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x1472fd = document['getElementById']('mayor-confirm-dialog');
                if (_0x1472fd)
                    _0x1472fd['style']['display'] = 'flex';
                return;
            }
            if (_0x1e780b['GAME_STATE'] === 'NIGHT') {
                if (!_0x1e780b['NIGHT_ABILITY_OPEN']) {
                    _0x1c68df('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x5d78a1 = document['getElementById']('ability-ui');
                if (_0x5d78a1) {
                    if (_0x5d78a1['style']['display'] === 'block') {
                        _0x5d78a1['style']['display'] = 'none';
                    } else {
                        _0x5d8056();
                        _0x5d78a1['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1e780b['GAME_STATE'] === 'DAY_DISCUSS' || _0x1e780b['GAME_STATE'] === 'DAY_VOTE') {
                _0x1c68df('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x54ee13 === 'e' && !_0x3ae52e['isDead']) {
            const _0x422568 = Date['now']();
            if (!window['_lastDoorSend'] || _0x422568 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x422568;
                _0x1e443d['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x4a00f1 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x508005 = _0x4a00f1['key']['toLowerCase']();
        if (_0x1e780b['INPUTS']['keys']['hasOwnProperty'](_0x508005))
            _0x1e780b['INPUTS']['keys'][_0x508005] = ![];
    }
});
window['addEventListener']('mousemove', _0x27ec06 => {
    _0x1e780b['INPUTS']['mouseX'] = _0x27ec06['clientX'];
    _0x1e780b['INPUTS']['mouseY'] = _0x27ec06['clientY'];
    if (_0x1e780b['INPUTS']['isMouseDown'] && _0x1e780b['EDITOR']['enabled']) {
        _0x877ce8(_0x27ec06['clientX'], _0x27ec06['clientY']);
    }
});
window['addEventListener']('mousedown', _0x4680d0 => {
    if (_0x4680d0['target']['closest']('#editor-ui') || _0x4680d0['target']['closest']('#leaderboard-ui') || _0x4680d0['target']['closest']('#role-index-btn-wrap') || _0x4680d0['target']['closest']('#role-index-modal') || _0x4680d0['target']['closest']('#chat-log-ui') || _0x4680d0['target']['closest']('#target-chooser-ui') || _0x4680d0['target']['closest']('#guide-ui') || _0x4680d0['target']['closest']('#role-list-ui') || _0x4680d0['target']['closest']('#ability-ui') || _0x4680d0['target']['closest']('#settings-panel') || _0x4680d0['target']['closest']('#mayor-confirm-dialog') || _0x4680d0['target']['closest']('#mobile-action-bar') || _0x4680d0['target']['closest']('#mobile-top-bar') || _0x4680d0['target']['closest']('#mobile-joystick-zone') || _0x4680d0['target']['closest']('#mobile-chat-overlay') || _0x4680d0['target']['closest']('#will-ui') || _0x4680d0['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x4680d0['button'] === 0x0) {
        _0x1e780b['INPUTS']['isMouseDown'] = !![];
        if (_0x1e780b['EDITOR']['enabled'])
            _0x877ce8(_0x4680d0['clientX'], _0x4680d0['clientY']);
    }
});
window['addEventListener']('mouseup', _0x3cf94a => {
    _0x1e780b['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x3896af => {
    if (_0x3896af['target']['closest']('#settings-btn'))
        return;
    const _0x1dd71c = document['getElementById']('leaderboard-list');
    const _0x218b73 = document['getElementById']('leaderboard-toggle');
    if (_0x1dd71c['style']['display'] === 'none') {
        _0x1dd71c['style']['display'] = 'flex';
        _0x218b73['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x1dd71c['style']['display'] = 'none';
        _0x218b73['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x11f525 = document['getElementById']('close-target-btn');
if (_0x11f525) {
    _0x11f525['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x24d8b0 = document['getElementById']('close-guide-btn');
if (_0x24d8b0) {
    _0x24d8b0['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x5ddba9 = document['getElementById']('role-list-header');
if (_0x5ddba9) {
    _0x5ddba9['addEventListener']('click', () => {
        const _0x5ed1d5 = document['getElementById']('role-list-items');
        const _0xf91943 = document['getElementById']('role-list-toggle');
        if (_0x5ed1d5['style']['display'] === 'none') {
            _0x5ed1d5['style']['display'] = 'flex';
            _0xf91943['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x5ed1d5['style']['display'] = 'none';
            _0xf91943['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x2b0649() {
    const _0x163fcd = document['getElementById']('mobile-joystick-zone');
    const _0x406265 = document['getElementById']('mobile-joystick-base');
    const _0x19d766 = document['getElementById']('mobile-joystick-knob');
    if (_0x163fcd && _0x406265 && _0x19d766) {
        const _0x131e1f = 0x3e;
        const _0x1b8c6b = (_0x39db29, _0x558e86) => {
            const _0x3b2db1 = _0x406265['getBoundingClientRect']();
            const _0x4ca2e6 = _0x3b2db1['left'] + _0x3b2db1['width'] / 0x2;
            const _0x1f5cee = _0x3b2db1['top'] + _0x3b2db1['height'] / 0x2;
            const _0x408850 = _0x39db29 - _0x4ca2e6;
            const _0x37c357 = _0x558e86 - _0x1f5cee;
            const _0x210a95 = Math['hypot'](_0x408850, _0x37c357);
            if (_0x210a95 === 0x0) {
                _0x5e3403 = 0x0;
                _0x494104 = 0x0;
                _0x5cfe26 = ![];
                _0x19d766['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x3b4d98 = Math['min'](_0x210a95, _0x131e1f);
            const _0x82cc2e = _0x408850 / _0x210a95 * _0x3b4d98;
            const _0x41df75 = _0x37c357 / _0x210a95 * _0x3b4d98;
            _0x5e3403 = _0x82cc2e / _0x131e1f;
            _0x494104 = _0x41df75 / _0x131e1f;
            _0x5cfe26 = _0x210a95 >= _0x131e1f * 0.75;
            _0x19d766['style']['transform'] = 'translate(' + _0x82cc2e + 'px,\x20' + _0x41df75 + 'px)';
        };
        const _0x57bb83 = _0x412cd1 => {
            for (let _0x4b48f0 = 0x0; _0x4b48f0 < _0x412cd1['changedTouches']['length']; _0x4b48f0++) {
                const _0x3f4632 = _0x412cd1['changedTouches'][_0x4b48f0];
                if (_0x5f0d55 === null) {
                    _0x5f0d55 = _0x3f4632['identifier'];
                    _0x51225f = !![];
                    _0x1b8c6b(_0x3f4632['clientX'], _0x3f4632['clientY']);
                    break;
                }
            }
        };
        const _0x5ef205 = _0x486add => {
            for (let _0x681de1 = 0x0; _0x681de1 < _0x486add['changedTouches']['length']; _0x681de1++) {
                const _0x26f2e4 = _0x486add['changedTouches'][_0x681de1];
                if (_0x26f2e4['identifier'] === _0x5f0d55) {
                    _0x1b8c6b(_0x26f2e4['clientX'], _0x26f2e4['clientY']);
                    break;
                }
            }
        };
        const _0x2951e7 = _0x1085e2 => {
            for (let _0x4e89bb = 0x0; _0x4e89bb < _0x1085e2['changedTouches']['length']; _0x4e89bb++) {
                const _0x4c2072 = _0x1085e2['changedTouches'][_0x4e89bb];
                if (_0x4c2072['identifier'] === _0x5f0d55) {
                    _0x5f0d55 = null;
                    _0x51225f = ![];
                    _0x5e3403 = 0x0;
                    _0x494104 = 0x0;
                    _0x5cfe26 = ![];
                    _0x19d766['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x163fcd['addEventListener']('touchstart', _0x2cee01 => {
            _0x2cee01['preventDefault']();
            _0x57bb83(_0x2cee01);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x5ef205, { 'passive': !![] });
        window['addEventListener']('touchend', _0x2951e7, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x2951e7, { 'passive': !![] });
    }
    const _0x3ed70b = (_0x479d8b, _0x2fa900) => {
        const _0x5e8a80 = _0x479d8b / _0x1e780b['SYSTEM']['viewScale'];
        const _0xe84fe4 = _0x2fa900 / _0x1e780b['SYSTEM']['viewScale'];
        const _0xe7007 = _0x3ae52e['x'] - _0x1e780b['CAMERA']['x'] + _0x3ae52e['width'] / 0x2;
        const _0x2db443 = _0x3ae52e['y'] - _0x1e780b['CAMERA']['y'] + _0x3ae52e['height'] / 0x2;
        _0x3f2e12 = Math['atan2'](_0xe84fe4 - _0x2db443, _0x5e8a80 - _0xe7007);
        _0x305c41 = !![];
        _0x1e780b['INPUTS']['mouseX'] = _0x479d8b;
        _0x1e780b['INPUTS']['mouseY'] = _0x2fa900;
    };
    _0x2ba5d1['addEventListener']('touchstart', _0xf2d03b => {
        if (_0x312f87)
            return;
        for (let _0x3c54c5 = 0x0; _0x3c54c5 < _0xf2d03b['changedTouches']['length']; _0x3c54c5++) {
            const _0x4db36b = _0xf2d03b['changedTouches'][_0x3c54c5];
            if (_0x4db36b['identifier'] !== _0x5f0d55 && _0x4d7c1f === null) {
                _0x4d7c1f = _0x4db36b['identifier'];
                _0x3ed70b(_0x4db36b['clientX'], _0x4db36b['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x2ba5d1['addEventListener']('touchmove', _0x3f4a50 => {
        if (_0x312f87)
            return;
        for (let _0x105ef3 = 0x0; _0x105ef3 < _0x3f4a50['changedTouches']['length']; _0x105ef3++) {
            const _0x34d696 = _0x3f4a50['changedTouches'][_0x105ef3];
            if (_0x34d696['identifier'] === _0x4d7c1f) {
                _0x3ed70b(_0x34d696['clientX'], _0x34d696['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x2aa86a = _0x58121b => {
        for (let _0x55550c = 0x0; _0x55550c < _0x58121b['changedTouches']['length']; _0x55550c++) {
            const _0x20a858 = _0x58121b['changedTouches'][_0x55550c];
            if (_0x20a858['identifier'] === _0x4d7c1f) {
                _0x4d7c1f = null;
                _0x305c41 = ![];
                break;
            }
        }
    };
    _0x2ba5d1['addEventListener']('touchend', _0x2aa86a, { 'passive': !![] });
    _0x2ba5d1['addEventListener']('touchcancel', _0x2aa86a, { 'passive': !![] });
    const _0x2fc683 = document['getElementById']('mob-sprint-btn');
    if (_0x2fc683) {
        _0x2fc683['addEventListener']('click', _0x5707da => {
            _0x5707da['stopPropagation']();
            _0x1e7d53 = !_0x1e7d53;
            _0x2fc683['classList']['toggle']('active', _0x1e7d53);
        });
    }
    const _0x16831a = document['getElementById']('mob-interact-btn');
    if (_0x16831a) {
        _0x16831a['addEventListener']('click', _0x1739ce => {
            _0x1739ce['stopPropagation']();
            if (!_0x3ae52e['isDead']) {
                const _0x1d0fb9 = Date['now']();
                if (!window['_lastDoorSend'] || _0x1d0fb9 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x1d0fb9;
                    if (_0x1e443d && _0x1e443d['readyState'] === WebSocket['OPEN'])
                        _0x1e443d['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x39e111 = document['getElementById']('mob-ability-btn');
    if (_0x39e111) {
        _0x39e111['addEventListener']('click', _0x28ba1c => {
            _0x28ba1c['stopPropagation']();
            if (_0x3ae52e['isDead'])
                return;
            if (_0x41b96f === 'Mayor') {
                if (_0x4a15f7['has'](_0x32a3b9)) {
                    _0x1c68df('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x120342 = document['getElementById']('mayor-confirm-dialog');
                if (_0x120342)
                    _0x120342['style']['display'] = 'flex';
                return;
            }
            if (_0x1e780b['GAME_STATE'] === 'NIGHT') {
                if (!_0x1e780b['NIGHT_ABILITY_OPEN']) {
                    _0x1c68df('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x29bb1e = document['getElementById']('ability-ui');
                if (_0x29bb1e) {
                    if (_0x29bb1e['style']['display'] === 'block') {
                        _0x29bb1e['style']['display'] = 'none';
                    } else {
                        _0x5d8056();
                        _0x29bb1e['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1e780b['GAME_STATE'] === 'DAY_DISCUSS' || _0x1e780b['GAME_STATE'] === 'DAY_VOTE') {
                _0x1c68df('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x1197e8 = document['getElementById']('mob-will-btn');
    const _0x11baac = document['getElementById']('will-ui');
    const _0x538d7b = document['getElementById']('will-input');
    const _0xf7f4d7 = document['getElementById']('close-will-btn');
    const _0x2d6fb3 = () => {
        if (!_0x11baac)
            return;
        if (_0x11baac['style']['display'] === 'flex') {
            _0x11baac['style']['display'] = 'none';
            if (_0x1e780b['GAME_STATE'] !== 'NIGHT' && _0x1e443d && _0x1e443d['readyState'] === WebSocket['OPEN'] && _0x538d7b) {
                _0x1e443d['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x538d7b['value']
                }));
            }
            if (_0x538d7b)
                _0x538d7b['blur']();
        } else {
            if (_0x1e780b['GAME_STATE'] === 'NIGHT') {
                _0x1c68df('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x11baac['style']['display'] = 'flex';
            if (_0x538d7b)
                _0x538d7b['focus']();
        }
    };
    if (_0x1197e8)
        _0x1197e8['addEventListener']('click', _0x36074a => {
            _0x36074a['stopPropagation']();
            _0x2d6fb3();
        });
    if (_0xf7f4d7)
        _0xf7f4d7['addEventListener']('click', _0xec0ecf => {
            _0xec0ecf['stopPropagation']();
            _0x2d6fb3();
        });
    const _0x5e5cdd = document['getElementById']('mob-chat-btn');
    const _0x3158f9 = document['getElementById']('mobile-chat-overlay');
    const _0x383c5e = document['getElementById']('mobile-chat-input');
    const _0x5bbf56 = document['getElementById']('mobile-chat-send');
    const _0x4d2f67 = document['getElementById']('mobile-chat-cancel');
    const _0x3faa7e = () => {
        if (!_0x3158f9 || !_0x383c5e)
            return;
        _0x3158f9['style']['display'] = 'flex';
        _0x383c5e['value'] = '';
        _0x383c5e['focus']();
    };
    const _0x7758b = () => {
        if (!_0x3158f9 || !_0x383c5e)
            return;
        _0x3158f9['style']['display'] = 'none';
        _0x383c5e['blur']();
    };
    const _0x4fe8b3 = () => {
        if (!_0x383c5e)
            return;
        const _0x29e70f = _0x383c5e['value']['trim']();
        if (_0x29e70f['length'] > 0x0 && _0x1e443d && _0x1e443d['readyState'] === WebSocket['OPEN']) {
            _0x1e443d['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x29e70f
            }));
        }
        _0x383c5e['value'] = '';
        _0x7758b();
    };
    if (_0x5e5cdd)
        _0x5e5cdd['addEventListener']('click', _0x435423 => {
            _0x435423['stopPropagation']();
            _0x3faa7e();
        });
    if (_0x5bbf56)
        _0x5bbf56['addEventListener']('click', _0x1b6c90 => {
            _0x1b6c90['stopPropagation']();
            _0x4fe8b3();
        });
    if (_0x4d2f67)
        _0x4d2f67['addEventListener']('click', _0x3b32ee => {
            _0x3b32ee['stopPropagation']();
            _0x7758b();
        });
    if (_0x383c5e) {
        _0x383c5e['addEventListener']('keydown', _0x33ac36 => {
            if (_0x33ac36['key'] === 'Enter') {
                _0x33ac36['preventDefault']();
                _0x4fe8b3();
            } else if (_0x33ac36['key'] === 'Escape') {
                _0x7758b();
            }
        });
    }
    const _0x16a3b9 = document['getElementById']('mob-top-chat');
    if (_0x16a3b9)
        _0x16a3b9['addEventListener']('click', _0x4bd5f1 => {
            _0x4bd5f1['stopPropagation']();
            _0x3faa7e();
        });
    const _0x1dc53c = document['getElementById']('mob-top-will');
    if (_0x1dc53c)
        _0x1dc53c['addEventListener']('click', _0x495b4d => {
            _0x495b4d['stopPropagation']();
            _0x2d6fb3();
        });
    const _0x46954f = document['getElementById']('mob-top-roles');
    if (_0x46954f) {
        _0x46954f['addEventListener']('click', _0x21d2e9 => {
            _0x21d2e9['stopPropagation']();
            const _0x5af4a7 = document['getElementById']('role-list-ui');
            const _0x23dffc = document['getElementById']('leaderboard-ui');
            if (_0x23dffc)
                _0x23dffc['style']['display'] = 'none';
            if (_0x5af4a7)
                _0x5af4a7['style']['display'] = _0x5af4a7['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x235905 = document['getElementById']('mob-top-players');
    if (_0x235905) {
        _0x235905['addEventListener']('click', _0x418a1e => {
            _0x418a1e['stopPropagation']();
            const _0x1c1c75 = document['getElementById']('leaderboard-ui');
            const _0x409491 = document['getElementById']('role-list-ui');
            if (_0x409491)
                _0x409491['style']['display'] = 'none';
            if (_0x1c1c75)
                _0x1c1c75['style']['display'] = _0x1c1c75['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x5d194b = document['getElementById']('mob-top-help');
    if (_0x5d194b) {
        _0x5d194b['addEventListener']('click', _0x526a37 => {
            _0x526a37['stopPropagation']();
            const _0x3e5105 = document['getElementById']('guide-ui');
            if (_0x3e5105)
                _0x3e5105['style']['display'] = _0x3e5105['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x14c242) {
            _0x14c242 = !![];
            _0x4f44c8();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
