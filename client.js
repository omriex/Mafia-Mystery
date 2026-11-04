document['addEventListener']('contextmenu', _0x227c38 => _0x227c38['preventDefault']());
const _0x4ef172 = {
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
let _0x2be414 = '';
function _0x115b31(_0x413aa3, _0x334469) {
    const _0x256825 = document['getElementById']('role-list-ui');
    const _0x26fcd2 = document['getElementById']('role-list-items');
    if (!_0x256825 || !_0x26fcd2)
        return;
    if (!_0x334469 || _0x334469 === 'off' || !_0x413aa3 || _0x413aa3['length'] === 0x0) {
        _0x256825['style']['display'] = 'none';
        return;
    }
    const _0x168be0 = _0x334469 + '|' + JSON['stringify'](_0x413aa3);
    if (_0x168be0 === _0x2be414)
        return;
    _0x2be414 = _0x168be0;
    const _0x10459c = document['getElementById']('role-tooltip');
    if (_0x10459c) {
        _0x10459c['style']['visibility'] = 'hidden';
        _0x10459c['style']['opacity'] = '0';
    }
    _0x256825['style']['display'] = 'flex';
    _0x26fcd2['innerHTML'] = '';
    _0x413aa3['forEach'](_0x1f0aed => {
        const _0x5b5e83 = document['createElement']('div');
        _0x5b5e83['className'] = 'role-list-entry';
        const _0x263bab = _0x1f0aed['name']['includes']('Mafia') || _0x1f0aed['name'] === 'Skinwalker' || _0x1f0aed['name'] === 'Blackmailer';
        _0x5b5e83['classList']['add'](_0x263bab ? 'mafia' : 'town');
        if (_0x334469 === 'precise' && _0x1f0aed['isDead']) {
            _0x5b5e83['classList']['remove']('town', 'mafia');
            _0x5b5e83['classList']['add']('dead');
            _0x5b5e83['innerHTML'] = '<span>' + _0x1f0aed['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x428e24 = _0x1f0aed['count'] !== undefined && _0x1f0aed['count'] !== null ? _0x1f0aed['count'] + 'x\x20' : '';
            _0x5b5e83['innerHTML'] = '<span>' + _0x428e24 + _0x1f0aed['name'] + '</span>';
        }
        if (_0x334469 === 'subalignments' && _0x4ef172[_0x1f0aed['name']]) {
            _0x5b5e83['style']['cursor'] = 'pointer';
            _0x5b5e83['addEventListener']('mouseenter', () => {
                const _0x482e97 = document['getElementById']('role-tooltip');
                if (!_0x482e97)
                    return;
                const _0x3d96d0 = _0x4ef172[_0x1f0aed['name']]['join'](',\x20');
                _0x482e97['innerHTML'] = '';
                const _0x4e4431 = document['createElement']('span');
                _0x4e4431['style']['color'] = '#ffcc00';
                _0x4e4431['textContent'] = _0x1f0aed['name'];
                _0x482e97['appendChild'](_0x4e4431);
                _0x482e97['appendChild'](document['createElement']('br'));
                _0x482e97['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x3d96d0));
                const _0x1e7f84 = _0x5b5e83['getBoundingClientRect']();
                _0x482e97['style']['left'] = _0x1e7f84['left'] - 0xeb + 'px';
                _0x482e97['style']['top'] = _0x1e7f84['top'] + 'px';
                _0x482e97['style']['display'] = 'block';
                _0x482e97['style']['visibility'] = 'visible';
                _0x482e97['style']['opacity'] = '1';
            });
            _0x5b5e83['addEventListener']('mouseleave', () => {
                const _0x308926 = document['getElementById']('role-tooltip');
                if (_0x308926) {
                    _0x308926['style']['display'] = 'none';
                    _0x308926['style']['visibility'] = 'hidden';
                    _0x308926['style']['opacity'] = '0';
                }
            });
        }
        _0x26fcd2['appendChild'](_0x5b5e83);
    });
}
let _0x225b27 = null;
let _0xc0aaef = null;
const _0x29d4ac = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x19e4f6 = 'Player???';
let _0x2da1e6 = ![];
let _0x7eb8d8 = {};
let _0x1e85b8 = null;
let _0x3d99b9 = 0x0;
let _0x5ba263 = 0x0;
let _0x47a8d1 = new Set();
let _0x101fb7 = ![];
let _0x55aa7a = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x3c50ff = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x173c10 = ![];
let _0x2de08f = null;
let _0x3e0d46 = 0x0;
let _0x5cf468 = 0x0;
let _0x5c6c79 = ![];
let _0x2e5cf8 = ![];
let _0x5e8ba0 = 0x0;
let _0x1e5afd = null;
let _0x9373b3 = ![];
let _0xee2c95 = 0x0;
let _0x2f10dc = 0x0;
let _0x4737d5 = [];
let _0x2772f9 = [];
let _0x46df81 = new Set();
const _0x1f01b5 = ((() => {
    const _0xf04011 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x3faaf1 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x1b47c7 = 0x320;
    const _0x5f49ff = {};
    const _0x426940 = {};
    let _0x3ce1ac = null;
    let _0x49d5e8 = _0x3faaf1 === 0x0;
    let _0x12daca = ![];
    for (const [_0x3bc99f, _0xfdddbb] of Object['entries'](_0xf04011)) {
        const _0x3199da = new Audio(_0xfdddbb);
        _0x3199da['loop'] = !![];
        _0x3199da['volume'] = 0x0;
        _0x3199da['preload'] = 'auto';
        _0x5f49ff[_0x3bc99f] = _0x3199da;
        _0x426940[_0x3bc99f] = null;
    }
    const _0x5ea489 = _0x58335b => Math['min'](0x1, Math['max'](0x0, _0x58335b));
    function _0x35ef87(_0x3b0cab) {
        if (_0x426940[_0x3b0cab] !== null) {
            cancelAnimationFrame(_0x426940[_0x3b0cab]);
            _0x426940[_0x3b0cab] = null;
        }
    }
    function _0x5a2375(_0x4ee1e0, _0x47d457, _0x5ed907, _0x159128, _0x24cbdb) {
        _0x35ef87(_0x4ee1e0);
        const _0x44fc62 = _0x5f49ff[_0x4ee1e0];
        const _0x6bcdfd = performance['now']();
        const _0x29881e = _0x341fec => {
            const _0xee4005 = _0x5ea489((_0x341fec - _0x6bcdfd) / _0x159128);
            const _0x42f5c7 = _0x5ea489(_0x47d457 + (_0x5ed907 - _0x47d457) * _0xee4005);
            _0x44fc62['volume'] = _0x49d5e8 ? 0x0 : _0x42f5c7;
            if (_0xee4005 < 0x1) {
                _0x426940[_0x4ee1e0] = requestAnimationFrame(_0x29881e);
            } else {
                _0x426940[_0x4ee1e0] = null;
                _0x44fc62['volume'] = _0x49d5e8 ? 0x0 : _0x5ea489(_0x5ed907);
                if (_0x24cbdb)
                    _0x24cbdb();
            }
        };
        _0x426940[_0x4ee1e0] = requestAnimationFrame(_0x29881e);
    }
    function _0x4f3716(_0x48c631) {
        const _0x265b41 = _0x48c631['play']();
        if (_0x265b41 && _0x265b41['catch']) {
            _0x265b41['catch'](() => {
                if (!_0x12daca) {
                    const _0x1f1b0f = () => {
                        _0x12daca = !![];
                        _0x48c631['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x1f1b0f);
                        document['removeEventListener']('keydown', _0x1f1b0f);
                        document['removeEventListener']('touchstart', _0x1f1b0f);
                    };
                    document['addEventListener']('click', _0x1f1b0f, { 'once': !![] });
                    document['addEventListener']('keydown', _0x1f1b0f, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x1f1b0f, { 'once': !![] });
                }
            });
        }
    }
    function _0x4d95af(_0x143fe5) {
        if (!_0xf04011[_0x143fe5])
            return;
        if (_0x3ce1ac === _0x143fe5)
            return;
        const _0x433ba9 = _0x3ce1ac;
        _0x3ce1ac = _0x143fe5;
        const _0x3c764c = _0x5f49ff[_0x143fe5];
        _0x35ef87(_0x143fe5);
        _0x3c764c['currentTime'] = 0x0;
        _0x3c764c['volume'] = 0x0;
        _0x4f3716(_0x3c764c);
        _0x5a2375(_0x143fe5, 0x0, _0x3faaf1, _0x1b47c7);
        if (_0x433ba9 && _0x5f49ff[_0x433ba9]) {
            const _0x24f75e = _0x433ba9;
            const _0x38544a = _0x5f49ff[_0x24f75e];
            const _0x1bd371 = _0x5ea489(_0x38544a['volume']);
            _0x5a2375(_0x24f75e, _0x1bd371, 0x0, _0x1b47c7, () => {
                _0x38544a['pause']();
                _0x38544a['currentTime'] = 0x0;
            });
        }
    }
    function _0x1fd880(_0x54c5c8) {
        _0x3faaf1 = _0x5ea489(_0x54c5c8);
        localStorage['setItem']('musicVolume', String(_0x3faaf1));
        if (!_0x49d5e8 && _0x3ce1ac && _0x426940[_0x3ce1ac] === null) {
            _0x5f49ff[_0x3ce1ac]['volume'] = _0x3faaf1;
        }
    }
    function _0x10a129() {
        return _0x3faaf1;
    }
    function _0x1d42f0(_0x226668) {
        _0x49d5e8 = _0x226668;
        for (const _0x464e08 of Object['keys'](_0x5f49ff)) {
            if (_0x426940[_0x464e08] === null) {
                _0x5f49ff[_0x464e08]['volume'] = _0x226668 || _0x464e08 !== _0x3ce1ac ? 0x0 : _0x3faaf1;
            }
        }
    }
    function _0x67bb8e() {
        return _0x49d5e8;
    }
    function _0x1d302d(_0x4211af) {
        if (_0x4211af === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x4211af === 'DAY_VOTE')
            return 'voting';
        if (_0x4211af === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x432d67(_0x250a0f) {
        _0x4d95af(_0x1d302d(_0x250a0f));
    }
    function _0x3f293e(_0xac4ca6) {
        _0x4d95af(_0xac4ca6);
    }
    return {
        'play': _0x4d95af,
        'onStateChange': _0x432d67,
        'onSoundEvent': _0x3f293e,
        'setVolume': _0x1fd880,
        'getVolume': _0x10a129,
        'setMuted': _0x1d42f0,
        'isMuted': _0x67bb8e
    };
})());
const _0x2bbafa = ((() => {
    const _0x243de4 = 0x258;
    const _0x4df22a = 0xb4;
    const _0x19f2c5 = 0x708;
    const _0x11a77e = 0x140;
    const _0xb9cf40 = 0.18;
    const _0xc0f1e5 = 0.95;
    const _0x52df66 = new Audio('audio/heartbeat.mp3');
    _0x52df66['loop'] = ![];
    _0x52df66['preload'] = 'auto';
    _0x52df66['volume'] = 0x0;
    let _0xef8227 = 0x0;
    let _0x4684d4 = Infinity;
    function _0x5c272c(_0x251fac, _0x3b2960, _0x48c32f) {
        return Math['min'](_0x48c32f, Math['max'](_0x3b2960, _0x251fac));
    }
    function _0x25e1c5(_0x36976f, _0x1969cb, _0x1e9fe1) {
        return _0x36976f + (_0x1969cb - _0x36976f) * _0x1e9fe1;
    }
    function _0xb0fba0(_0x275980) {
        if (_0x280561['GAME_STATE'] !== 'NIGHT' || _0x235260['isDead'] || _0x1e85b8 === 'Skinwalker' || _0x1e85b8 === 'Blackmailer') {
            _0x4684d4 = Infinity;
            return;
        }
        const _0x5e7cf5 = _0x235260['x'] + 22.5;
        const _0x3ad052 = _0x235260['y'] + 22.5;
        let _0x12cf22 = Infinity;
        for (const _0x529194 in _0x7eb8d8) {
            const _0xc19150 = _0x7eb8d8[_0x529194];
            if (!_0xc19150['isDark'] || _0xc19150['isDead'])
                continue;
            const _0x24db68 = _0xc19150['renderX'] + 22.5 - _0x5e7cf5;
            const _0x34daeb = _0xc19150['renderY'] + 22.5 - _0x3ad052;
            const _0x434941 = Math['sqrt'](_0x24db68 * _0x24db68 + _0x34daeb * _0x34daeb);
            if (_0x434941 < _0x12cf22)
                _0x12cf22 = _0x434941;
        }
        _0x4684d4 = _0x12cf22;
        if (_0x12cf22 > _0x243de4)
            return;
        const _0xad654b = 0x1 - _0x5c272c((_0x12cf22 - _0x4df22a) / (_0x243de4 - _0x4df22a), 0x0, 0x1);
        const _0x581d2b = _0x25e1c5(_0x19f2c5, _0x11a77e, _0xad654b);
        const _0x56cc20 = _0x25e1c5(_0xb9cf40, _0xc0f1e5, _0xad654b);
        if (_0x275980 >= _0xef8227) {
            _0x52df66['currentTime'] = 0x0;
            _0x52df66['volume'] = _0x1f01b5['isMuted']() ? 0x0 : _0x5c272c(_0x56cc20 * _0x1f01b5['getVolume']() / 0.7, 0x0, 0x1);
            _0x52df66['play']()['catch'](() => {
            });
            _0xef8227 = _0x275980 + _0x581d2b;
        }
    }
    return { 'tick': _0xb0fba0 };
})());
function _0x3e5977() {
    const _0x3f92f5 = document['getElementById']('mob-ability-btn');
    if (!_0x3f92f5)
        return;
    const _0x13107e = _0x280561['GAME_STATE'] === 'NIGHT' && !_0x235260['isDead'];
    const _0x490388 = _0x1e85b8 === 'Mayor' && !_0x47a8d1['has'](_0xc0aaef) && !_0x235260['isDead'];
    if (_0x13107e || _0x490388) {
        _0x3f92f5['style']['display'] = 'flex';
    } else {
        _0x3f92f5['style']['display'] = 'none';
    }
}
function _0x426bcd() {
    const _0x1f166b = document['getElementById']('mobile-joystick-zone');
    const _0x4d0120 = document['getElementById']('mobile-top-bar');
    const _0x27c79c = document['getElementById']('mobile-action-bar');
    if (!_0x1f166b || !_0x4d0120 || !_0x27c79c)
        return;
    if (!_0x101e3a && _0x3c50ff) {
        _0x1f166b['style']['display'] = 'flex';
        _0x4d0120['style']['display'] = 'flex';
        _0x27c79c['style']['display'] = 'flex';
        _0x3e5977();
    } else {
        _0x1f166b['style']['display'] = 'none';
        _0x4d0120['style']['display'] = 'none';
        _0x27c79c['style']['display'] = 'none';
    }
}
const _0x46a429 = document['getElementById']('gameCanvas');
const _0x46cbe9 = _0x46a429['getContext']('2d', { 'alpha': ![] });
const _0x17bfa5 = 0x500;
const _0x1f8250 = 0x2d0;
const _0x280561 = {
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
        'width': _0x17bfa5,
        'height': _0x1f8250
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
const _0x235260 = {
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
const _0xd20432 = new Image();
const _0x22510c = new Image();
const _0x332412 = new Image();
const _0x59a170 = new Image();
_0x59a170['src'] = 'assets/mayor\x20cosmetic.png';
const _0x59d480 = [
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
const _0xeb5a25 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x5abe1a = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x5abe1a === 'body1.png' || _0x5abe1a === 'body1')
    _0x5abe1a = 'body01.png';
if (!_0x5abe1a['endsWith']('.png'))
    _0x5abe1a += '.png';
let _0x450ab9 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x450ab9['endsWith']('.png'))
    _0x450ab9 += '.png';
let _0x101e3a = !![];
let _0x2ded9f = null;
let _0x34f919 = null;
let _0x3d8351 = 0x3c;
let _0x46172e = 0x2d;
const _0x2d642a = {};
const _0x2985fe = new Image();
_0x2985fe['src'] = 'assets/yanito932.png';
_0x2d642a['assets/yanito932.png'] = _0x2985fe;
function _0x575c20(_0x52c227) {
    if (!_0x2d642a[_0x52c227] || !_0x2d642a[_0x52c227]['complete'] && _0x2d642a[_0x52c227]['naturalWidth'] === 0x0 && _0x2d642a[_0x52c227]['naturalHeight'] === 0x0) {
        const _0x64675e = new Image();
        _0x64675e['src'] = _0x52c227;
        _0x2d642a[_0x52c227] = _0x64675e;
    }
    return _0x2d642a[_0x52c227];
}
function _0x34063b(_0x2ec21c, _0x3c664a, _0x3c4668, _0x10f965, _0x592b74) {
    try {
        const _0x892e8b = 'assets/' + (_0x3c664a || 'body01.png');
        const _0x435745 = _0x575c20(_0x892e8b);
        if (_0x435745['complete'] && _0x435745['naturalWidth'] > 0x0) {
            _0x2ec21c['drawImage'](_0x435745, -_0x10f965 / 0x2, -_0x592b74 / 0x2, _0x10f965, _0x592b74);
        }
        if (_0x3c4668 === null || _0x3c4668 === undefined)
            return;
        const _0x3b7d57 = 'assets/' + _0x3c4668;
        const _0x136544 = _0x575c20(_0x3b7d57);
        if (_0x136544['complete'] && _0x136544['naturalWidth'] > 0x0) {
            _0x2ec21c['drawImage'](_0x136544, -_0x10f965 / 0x2, -_0x592b74 / 0x2, _0x10f965, _0x592b74);
        }
    } catch (_0x5367aa) {
    }
}
function _0x1cff0d() {
    const _0x7dbc33 = document['getElementById']('body-skin-grid');
    const _0x2876e8 = document['getElementById']('eyes-skin-grid');
    if (!_0x7dbc33 || !_0x2876e8)
        return;
    _0x7dbc33['innerHTML'] = '';
    _0x59d480['forEach'](_0x4f8642 => {
        const _0x463aa9 = document['createElement']('button');
        _0x463aa9['className'] = 'skin-btn' + (_0x4f8642 === _0x5abe1a ? '\x20selected' : '');
        const _0x166b17 = document['createElement']('img');
        _0x166b17['src'] = 'assets/' + _0x4f8642;
        _0x463aa9['appendChild'](_0x166b17);
        _0x463aa9['onclick'] = () => {
            _0x5abe1a = _0x4f8642;
            localStorage['setItem']('selectedBody', _0x4f8642);
            _0x7dbc33['querySelectorAll']('.skin-btn')['forEach'](_0xf56117 => _0xf56117['classList']['remove']('selected'));
            _0x463aa9['classList']['add']('selected');
        };
        _0x7dbc33['appendChild'](_0x463aa9);
    });
    _0x2876e8['innerHTML'] = '';
    _0xeb5a25['forEach'](_0x599628 => {
        const _0x17bdb9 = document['createElement']('button');
        _0x17bdb9['className'] = 'skin-btn' + (_0x599628 === _0x450ab9 ? '\x20selected' : '');
        const _0x226e42 = document['createElement']('img');
        _0x226e42['src'] = 'assets/' + _0x599628;
        _0x17bdb9['appendChild'](_0x226e42);
        _0x17bdb9['onclick'] = () => {
            _0x450ab9 = _0x599628;
            localStorage['setItem']('selectedEyes', _0x599628);
            _0x2876e8['querySelectorAll']('.skin-btn')['forEach'](_0x1b8de4 => _0x1b8de4['classList']['remove']('selected'));
            _0x17bdb9['classList']['add']('selected');
        };
        _0x2876e8['appendChild'](_0x17bdb9);
    });
}
function _0xfe803c(_0x35ff30) {
    if (!_0x280561['MAP']['columns'] || !_0x280561['CAMERA']['width'])
        return;
    const _0x570f58 = Math['max'](0x0, _0x280561['MAP']['columns'] * _0x280561['MAP']['tileSize'] - _0x280561['CAMERA']['width']);
    const _0x5a6a1b = Math['max'](0x0, _0x280561['MAP']['rows'] * _0x280561['MAP']['tileSize'] - _0x280561['CAMERA']['height']);
    if (_0x2ded9f === null) {
        _0x2ded9f = _0x570f58 / 0x2;
        _0x34f919 = _0x5a6a1b / 0x2;
    }
    _0x2ded9f += _0x3d8351 * _0x35ff30;
    _0x34f919 += _0x46172e * _0x35ff30;
    if (_0x2ded9f <= 0x0) {
        _0x2ded9f = 0x0;
        _0x3d8351 = Math['abs'](_0x3d8351);
    } else if (_0x2ded9f >= _0x570f58) {
        _0x2ded9f = _0x570f58;
        _0x3d8351 = -Math['abs'](_0x3d8351);
    }
    if (_0x34f919 <= 0x0) {
        _0x34f919 = 0x0;
        _0x46172e = Math['abs'](_0x46172e);
    } else if (_0x34f919 >= _0x5a6a1b) {
        _0x34f919 = _0x5a6a1b;
        _0x46172e = -Math['abs'](_0x46172e);
    }
    _0x280561['CAMERA']['x'] = _0x2ded9f;
    _0x280561['CAMERA']['y'] = _0x34f919;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x4675ad = document['getElementById']('play-btn');
    const _0x679679 = document['getElementById']('username-input');
    const _0x2feb4f = localStorage['getItem']('playerName');
    if (_0x2feb4f && _0x679679) {
        _0x679679['value'] = _0x2feb4f;
    }
    const _0x41fdd8 = () => {
        _0x1f01b5['play']('wait');
        document['removeEventListener']('click', _0x41fdd8);
        document['removeEventListener']('keydown', _0x41fdd8);
        document['removeEventListener']('touchstart', _0x41fdd8);
    };
    document['addEventListener']('click', _0x41fdd8, { 'once': !![] });
    document['addEventListener']('keydown', _0x41fdd8, { 'once': !![] });
    document['addEventListener']('touchstart', _0x41fdd8, { 'once': !![] });
    if (_0x4675ad) {
        _0x4675ad['addEventListener']('click', () => {
            const _0x4e11f1 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x2f9f55 = window['_FB'] && window['_FB']['_userData'];
            let _0x3e4ce7 = !![];
            if (_0x4e11f1 && _0x2f9f55 && _0x2f9f55['username']) {
                _0x19e4f6 = _0x2f9f55['username'];
                _0x3e4ce7 = ![];
            } else {
                const _0x2cf803 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x19e4f6 = 'user' + _0x2cf803;
                _0x3e4ce7 = !![];
            }
            const _0x50a581 = _0x3e4ce7 ? 'body01.png' : _0x5abe1a;
            const _0x57d71d = _0x3e4ce7 ? 'eyes4.png' : _0x450ab9;
            const _0x355418 = !_0x3e4ce7 && _0x2f9f55 && _0x2f9f55['photoURL'] ? _0x2f9f55['photoURL'] : '';
            const _0x15f9b4 = !_0x3e4ce7 && _0x4e11f1 ? _0x4e11f1['uid'] : '';
            localStorage['setItem']('playerName', _0x19e4f6);
            _0x101e3a = ![];
            _0x280561['CAMERA']['x'] = null;
            _0x280561['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x77e11e = document['getElementById']('chat-log-wrap');
            if (_0x77e11e)
                _0x77e11e['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x4f52e9 = document['getElementById']('controls-hint');
            if (_0x4f52e9 && !_0x3c50ff)
                _0x4f52e9['style']['display'] = 'block';
            _0x426bcd();
            if (_0x3c50ff) {
                const _0x3984e4 = document['getElementById']('leaderboard-list');
                const _0x4a5863 = document['getElementById']('leaderboard-toggle');
                if (_0x3984e4) {
                    _0x3984e4['style']['display'] = 'none';
                    if (_0x4a5863)
                        _0x4a5863['style']['transform'] = 'rotate(180deg)';
                }
                const _0x198d4e = document['getElementById']('role-list-items');
                const _0x16a335 = document['getElementById']('role-list-toggle');
                if (_0x198d4e) {
                    _0x198d4e['style']['display'] = 'none';
                    if (_0x16a335)
                        _0x16a335['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x12d806 = !_0x3e4ce7 && _0x2f9f55 ? {
                'townWins': _0x2f9f55['townWins'] || 0x0,
                'mafiaWins': _0x2f9f55['mafiaWins'] || 0x0,
                'deaths': _0x2f9f55['deaths'] || 0x0,
                'townLosses': _0x2f9f55['townLosses'] || 0x0,
                'mafiaLosses': _0x2f9f55['mafiaLosses'] || 0x0
            } : null;
            const _0xd4fcfe = JSON['stringify']({
                'type': 'join',
                'name': _0x19e4f6,
                'token': _0x29d4ac,
                'body': _0x50a581,
                'eyes': _0x57d71d,
                'isGuest': _0x3e4ce7,
                'uid': _0x15f9b4,
                'photoURL': _0x355418,
                'accountStats': _0x12d806
            });
            if (_0x225b27 && _0x225b27['readyState'] === WebSocket['OPEN']) {
                _0x225b27['send'](_0xd4fcfe);
            } else if (!_0x225b27 || _0x225b27['readyState'] === WebSocket['CLOSED'] || _0x225b27['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0xd4fcfe;
                _0x2a58b2();
            }
        });
    }
    _0x1cff0d();
    _0x2a58b2();
    _0x5be342();
    _0x3138b8();
    _0x33e426();
    _0xe00a10();
});
const _0x41f203 = [
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
let _0x4fce15 = 'Town';
let _0xd03d9f = 0x0;
function _0x498724() {
    const _0x39f325 = document['getElementById']('role-index-main-tabs');
    const _0x267e12 = document['getElementById']('role-index-tabs');
    const _0x2fbfc9 = document['getElementById']('role-index-body');
    if (!_0x267e12 || !_0x2fbfc9)
        return;
    if (_0x39f325) {
        _0x39f325['innerHTML'] = '';
        const _0x31cd55 = document['createElement']('button');
        _0x31cd55['className'] = 'role-index-main-tab-btn\x20main-town' + (_0x4fce15 === 'Town' ? '\x20active' : '');
        _0x31cd55['textContent'] = 'TOWN';
        _0x31cd55['addEventListener']('click', () => {
            _0x4fce15 = 'Town';
            _0xd03d9f = 0x0;
            _0x498724();
        });
        _0x39f325['appendChild'](_0x31cd55);
        const _0x392ae3 = document['createElement']('button');
        _0x392ae3['className'] = 'role-index-main-tab-btn\x20main-mafia' + (_0x4fce15 === 'Mafia' ? '\x20active' : '');
        _0x392ae3['textContent'] = 'MAFIA';
        _0x392ae3['addEventListener']('click', () => {
            _0x4fce15 = 'Mafia';
            _0xd03d9f = 0x0;
            _0x498724();
        });
        _0x39f325['appendChild'](_0x392ae3);
    }
    const _0x2bf4a4 = _0x41f203['filter'](_0x46d1bd => _0x46d1bd['faction'] === _0x4fce15);
    _0x267e12['innerHTML'] = '';
    _0x2bf4a4['forEach']((_0x2c51da, _0x82d247) => {
        const _0x4bfb28 = document['createElement']('button');
        _0x4bfb28['className'] = 'role-index-tab-btn' + (_0x2c51da['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x82d247 === _0xd03d9f ? '\x20active' : '');
        _0x4bfb28['textContent'] = _0x2c51da['name'];
        _0x4bfb28['addEventListener']('click', () => {
            _0xd03d9f = _0x82d247;
            _0x498724();
        });
        _0x267e12['appendChild'](_0x4bfb28);
    });
    const _0x4993d3 = _0x2bf4a4[_0xd03d9f] || _0x2bf4a4[0x0];
    _0x2fbfc9['innerHTML'] = '';
    if (!_0x4993d3)
        return;
    const _0x4bbde0 = document['createElement']('div');
    _0x4bbde0['className'] = 'role-index-title-row';
    const _0x5d3b53 = document['createElement']('span');
    _0x5d3b53['className'] = 'role-index-name\x20' + (_0x4993d3['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0x5d3b53['textContent'] = _0x4993d3['name'];
    _0x4bbde0['appendChild'](_0x5d3b53);
    const _0x2b09d2 = document['createElement']('span');
    _0x2b09d2['className'] = 'role-index-faction-badge\x20' + (_0x4993d3['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x2b09d2['textContent'] = _0x4993d3['faction'];
    _0x4bbde0['appendChild'](_0x2b09d2);
    _0x2fbfc9['appendChild'](_0x4bbde0);
    _0x4993d3['paragraphs']['forEach'](_0x2772e3 => {
        const _0x32b961 = document['createElement']('p');
        _0x32b961['className'] = 'role-index-desc-paragraph';
        _0x32b961['innerHTML'] = _0x2772e3;
        _0x2fbfc9['appendChild'](_0x32b961);
    });
}
function _0xe00a10() {
    const _0x4a1a14 = document['getElementById']('role-index-btn');
    const _0x1d7cbc = document['getElementById']('role-index-modal');
    const _0x4babb2 = document['getElementById']('close-role-index-btn');
    const _0x5d5fb7 = document['getElementById']('mob-top-index');
    if (_0x4a1a14 && _0x1d7cbc) {
        _0x4a1a14['addEventListener']('click', _0x43e68f => {
            _0x43e68f['stopPropagation']();
            if (_0x1d7cbc['style']['display'] === 'none' || !_0x1d7cbc['style']['display']) {
                _0x498724();
                _0x1d7cbc['style']['display'] = 'flex';
            } else {
                _0x1d7cbc['style']['display'] = 'none';
            }
        });
    }
    if (_0x4babb2 && _0x1d7cbc) {
        _0x4babb2['addEventListener']('click', _0xa6b13 => {
            _0xa6b13['stopPropagation']();
            _0x1d7cbc['style']['display'] = 'none';
        });
    }
    if (_0x5d5fb7 && _0x1d7cbc) {
        _0x5d5fb7['addEventListener']('click', _0x441873 => {
            _0x441873['stopPropagation']();
            if (_0x1d7cbc['style']['display'] === 'none' || !_0x1d7cbc['style']['display']) {
                _0x498724();
                _0x1d7cbc['style']['display'] = 'flex';
            } else {
                _0x1d7cbc['style']['display'] = 'none';
            }
        });
    }
}
function _0x3138b8() {
    const _0x493714 = document['getElementById']('settings-btn');
    const _0x4ba790 = document['getElementById']('settings-panel');
    const _0x1a9c32 = document['getElementById']('close-settings-btn');
    const _0x49b819 = document['getElementById']('setting-mouse-relative');
    if (_0x49b819) {
        _0x49b819['checked'] = _0x55aa7a;
        _0x49b819['addEventListener']('change', () => {
            _0x55aa7a = _0x49b819['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x55aa7a ? 'true' : 'false');
        });
    }
    const _0x4e0f41 = document['getElementById']('setting-music-volume');
    const _0x44136f = document['getElementById']('setting-music-volume-display');
    function _0x274be1(_0x449819) {
        const _0x399ba8 = (_0x449819['value'] - _0x449819['min']) / (_0x449819['max'] - _0x449819['min']) * 0x64;
        _0x449819['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x399ba8 + '%,\x20#444\x20' + _0x399ba8 + '%)';
    }
    if (_0x4e0f41) {
        const _0x3656c1 = _0x1f01b5['getVolume']();
        const _0x1165f7 = Math['round'](_0x3656c1 * 0x64);
        _0x4e0f41['value'] = _0x1165f7;
        if (_0x44136f)
            _0x44136f['textContent'] = _0x1165f7 + '%';
        _0x274be1(_0x4e0f41);
        _0x4e0f41['addEventListener']('input', () => {
            const _0x2f4edb = parseInt(_0x4e0f41['value'], 0xa);
            if (_0x44136f)
                _0x44136f['textContent'] = _0x2f4edb + '%';
            _0x274be1(_0x4e0f41);
            _0x1f01b5['setVolume'](_0x2f4edb / 0x64);
            _0x1f01b5['setMuted'](_0x2f4edb === 0x0);
        });
    }
    if (_0x493714 && _0x4ba790) {
        _0x493714['addEventListener']('click', _0x52c780 => {
            _0x52c780['stopPropagation']();
            _0x4ba790['style']['display'] = _0x4ba790['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x1a9c32 && _0x4ba790) {
        _0x1a9c32['addEventListener']('click', () => {
            _0x4ba790['style']['display'] = 'none';
        });
    }
    const _0x33fac1 = document['getElementById']('mayor-confirm-yes');
    const _0x27a4d9 = document['getElementById']('mayor-confirm-no');
    const _0x40c3fd = document['getElementById']('mayor-confirm-dialog');
    if (_0x33fac1 && _0x40c3fd) {
        _0x33fac1['addEventListener']('click', () => {
            if (_0x225b27 && _0x225b27['readyState'] === WebSocket['OPEN']) {
                _0x225b27['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x40c3fd['style']['display'] = 'none';
        });
    }
    if (_0x27a4d9 && _0x40c3fd) {
        _0x27a4d9['addEventListener']('click', () => {
            _0x40c3fd['style']['display'] = 'none';
        });
    }
    const _0x50f9f2 = document['getElementById']('close-ability-btn');
    if (_0x50f9f2) {
        _0x50f9f2['addEventListener']('click', () => {
            const _0xb6051f = document['getElementById']('ability-ui');
            if (_0xb6051f)
                _0xb6051f['style']['display'] = 'none';
        });
    }
}
let _0x1f45b5 = '';
function _0x1b8edd(_0x594c2a) {
    const _0x24adf7 = document['getElementById']('vote-tally-panel');
    const _0x393ef5 = document['getElementById']('vote-tally-list');
    if (!_0x24adf7 || !_0x393ef5)
        return;
    if (_0x594c2a['state'] !== 'DAY_VOTE') {
        _0x24adf7['style']['display'] = 'none';
        _0x1f45b5 = '';
        return;
    }
    _0x24adf7['style']['display'] = 'block';
    const _0x1b7370 = {};
    for (const _0x191060 in _0x7eb8d8) {
        if (!_0x7eb8d8[_0x191060]['isDead'])
            _0x1b7370[_0x191060] = 0x0;
    }
    if (_0xc0aaef && !_0x235260['isDead'])
        _0x1b7370[_0xc0aaef] = 0x0;
    const _0x3eaec2 = _0x594c2a['votes'] || {};
    for (const _0x448a27 in _0x3eaec2) {
        const _0x865a32 = _0x3eaec2[_0x448a27];
        const _0x49f22f = _0x594c2a['mayorRevealed'] && _0x594c2a['mayorRevealed'][_0x448a27] ? 0x2 : 0x1;
        _0x1b7370[_0x865a32] = (_0x1b7370[_0x865a32] || 0x0) + _0x49f22f;
    }
    let _0x801221 = 0x0;
    const _0x96c3a3 = _0x594c2a['skips'] || {};
    for (const _0x75a6e5 in _0x96c3a3) {
        _0x801221 += Number(_0x96c3a3[_0x75a6e5]) || 0x1;
    }
    const _0x5a4649 = JSON['stringify'](_0x1b7370) + '_' + _0x801221 + '_' + _0x235260['isDead'];
    if (_0x5a4649 === _0x1f45b5)
        return;
    _0x1f45b5 = _0x5a4649;
    _0x393ef5['innerHTML'] = '';
    for (const _0x38d6a9 in _0x1b7370) {
        const _0x444a30 = parseInt(_0x38d6a9);
        const _0x3e5f51 = _0x444a30 === _0xc0aaef ? _0x19e4f6 : _0x7eb8d8[_0x38d6a9] ? _0x7eb8d8[_0x38d6a9]['name'] : 'Player\x20' + _0x38d6a9;
        const _0x3de345 = document['createElement']('div');
        _0x3de345['className'] = 'vote-tally-entry';
        const _0x43865d = document['createElement']('span');
        _0x43865d['textContent'] = _0x3e5f51;
        const _0x2f53be = document['createElement']('span');
        _0x2f53be['className'] = 'vote-count';
        _0x2f53be['textContent'] = _0x1b7370[_0x38d6a9] + '\x20vote' + (_0x1b7370[_0x38d6a9] === 0x1 ? '' : 's');
        _0x3de345['appendChild'](_0x43865d);
        _0x3de345['appendChild'](_0x2f53be);
        if (_0x444a30 !== _0xc0aaef && !_0x235260['isDead']) {
            _0x3de345['style']['cursor'] = 'pointer';
            _0x3de345['title'] = 'Vote\x20for\x20' + _0x3e5f51;
            _0x3de345['addEventListener']('click', _0x8055a6 => {
                _0x8055a6['stopPropagation']();
                if (_0x225b27 && _0x225b27['readyState'] === WebSocket['OPEN']) {
                    _0x225b27['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x3e5f51
                    }));
                }
            });
        }
        _0x393ef5['appendChild'](_0x3de345);
    }
    const _0x5b0f7c = document['createElement']('div');
    _0x5b0f7c['className'] = 'vote-tally-skip';
    _0x5b0f7c['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x801221 + '</span>';
    if (!_0x235260['isDead']) {
        _0x5b0f7c['style']['cursor'] = 'pointer';
        _0x5b0f7c['title'] = 'Click\x20to\x20skip\x20vote';
        _0x5b0f7c['addEventListener']('click', _0x46c7c4 => {
            _0x46c7c4['stopPropagation']();
            if (_0x225b27 && _0x225b27['readyState'] === WebSocket['OPEN']) {
                _0x225b27['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x393ef5['appendChild'](_0x5b0f7c);
}
let _0x3df4bd = null;
let _0x51c7e6 = null;
let _0x2e5fd2 = null;
let _0x43e95c = null;
let _0x198834 = null;
function _0x12f77c() {
    if (_0x225b27 && _0x225b27['readyState'] === WebSocket['OPEN']) {
        _0x225b27['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x3df4bd,
            'abilityTarget': _0x51c7e6,
            'killTarget': _0x2e5fd2
        }));
    }
}
function _0x157b2a() {
    if (_0x225b27 && _0x225b27['readyState'] === WebSocket['OPEN']) {
        _0x225b27['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'blackmailTarget': _0x43e95c,
            'killTarget': _0x198834
        }));
    }
}
function _0x1700c4() {
    const _0x46fe03 = document['getElementById']('ability-ui-body');
    if (!_0x46fe03)
        return;
    _0x46fe03['innerHTML'] = '';
    if (_0x1e85b8 === 'Celebrity' || _0x1e85b8 === 'Mayor') {
        const _0x7b9f5d = document['createElement']('div');
        _0x7b9f5d['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x7b9f5d['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x46fe03['appendChild'](_0x7b9f5d);
        return;
    }
    if (_0x1e85b8 === 'Blackmailer') {
        const _0x415066 = document['createElement']('div');
        _0x415066['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x415066['innerText'] = 'Blackmail\x20Target\x20(Silences\x20for\x20full\x20day):';
        _0x46fe03['appendChild'](_0x415066);
        const _0x259390 = document['createElement']('div');
        _0x259390['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x498dc3 = document['createElement']('button');
        _0x498dc3['className'] = 'layer-btn';
        _0x498dc3['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x498dc3['innerText'] = 'No\x20one';
        if (_0x43e95c === null)
            _0x498dc3['classList']['add']('active');
        _0x498dc3['onclick'] = () => {
            _0x43e95c = null;
            _0x157b2a();
            _0x1700c4();
        };
        _0x259390['appendChild'](_0x498dc3);
        for (const _0x1660f8 in _0x7eb8d8) {
            const _0x34fdcf = _0x7eb8d8[_0x1660f8];
            if (_0x34fdcf['isDead'])
                continue;
            const _0x55c23e = document['createElement']('button');
            _0x55c23e['className'] = 'layer-btn';
            _0x55c23e['innerText'] = _0x34fdcf['name'];
            if (_0x43e95c === parseInt(_0x1660f8))
                _0x55c23e['classList']['add']('active');
            _0x55c23e['onclick'] = () => {
                _0x43e95c = parseInt(_0x1660f8);
                _0x157b2a();
                _0x1700c4();
            };
            _0x259390['appendChild'](_0x55c23e);
        }
        if (!_0x235260['isDead']) {
            const _0x75c76d = document['createElement']('button');
            _0x75c76d['className'] = 'layer-btn';
            _0x75c76d['style']['cssText'] = 'grid-column:\x20span\x202;';
            _0x75c76d['innerText'] = _0x19e4f6 + '\x20(Self\x20-\x20Decoy)';
            if (_0x43e95c === _0xc0aaef)
                _0x75c76d['classList']['add']('active');
            _0x75c76d['onclick'] = () => {
                _0x43e95c = _0xc0aaef;
                _0x157b2a();
                _0x1700c4();
            };
            _0x259390['appendChild'](_0x75c76d);
        }
        _0x46fe03['appendChild'](_0x259390);
        const _0x47b0a5 = document['createElement']('div');
        _0x47b0a5['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x47b0a5['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x46fe03['appendChild'](_0x47b0a5);
        const _0x2d465d = document['createElement']('div');
        _0x2d465d['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x4b3ecb = document['createElement']('button');
        _0x4b3ecb['className'] = 'layer-btn';
        _0x4b3ecb['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x4b3ecb['innerText'] = 'No\x20one';
        if (!_0x198834 && !_0x280561['CURRENT_TARGET'])
            _0x4b3ecb['classList']['add']('active');
        _0x4b3ecb['onclick'] = () => {
            _0x198834 = null;
            _0x280561['CURRENT_TARGET'] = null;
            _0x157b2a();
            _0x1700c4();
        };
        _0x2d465d['appendChild'](_0x4b3ecb);
        for (const _0x5f3884 in _0x7eb8d8) {
            const _0x110364 = _0x7eb8d8[_0x5f3884];
            if (_0x110364['isDead'])
                continue;
            const _0xa4f9b7 = document['createElement']('button');
            _0xa4f9b7['className'] = 'layer-btn';
            _0xa4f9b7['innerText'] = _0x110364['name'];
            if (_0x198834 === parseInt(_0x5f3884) || _0x280561['CURRENT_TARGET'] === parseInt(_0x5f3884))
                _0xa4f9b7['classList']['add']('active');
            _0xa4f9b7['onclick'] = () => {
                _0x198834 = parseInt(_0x5f3884);
                _0x280561['CURRENT_TARGET'] = parseInt(_0x5f3884);
                _0x157b2a();
                _0x1700c4();
            };
            _0x2d465d['appendChild'](_0xa4f9b7);
        }
        _0x46fe03['appendChild'](_0x2d465d);
        return;
    }
    if (_0x1e85b8 === 'Skinwalker') {
        const _0x55a165 = document['createElement']('div');
        _0x55a165['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x55a165['innerText'] = 'Transform\x20into:';
        _0x46fe03['appendChild'](_0x55a165);
        const _0x27242d = document['createElement']('div');
        _0x27242d['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x2e3bd8 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x5f1f8c = _0x4fe7e9 => {
            if (_0x280561['ROLES_IN_GAME'] && Array['isArray'](_0x280561['ROLES_IN_GAME'])) {
                return _0x280561['ROLES_IN_GAME']['includes'](_0x4fe7e9);
            }
            if (_0x280561['ROLE_LIST_RAW'] && _0x280561['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x280561['ROLE_LIST_RAW']['some'](_0x34e33e => _0x34e33e['name'] === _0x4fe7e9 && !_0x34e33e['isDead']);
            }
            return ![];
        };
        const _0x2305ba = [
            'None',
            ..._0x2e3bd8['filter'](_0x5f1f8c)
        ];
        _0x2305ba['forEach'](_0x2a1b79 => {
            const _0x5af92d = document['createElement']('button');
            _0x5af92d['className'] = 'layer-btn';
            _0x5af92d['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x5af92d['innerText'] = _0x2a1b79;
            const _0x45b6ed = _0x2a1b79 === 'None' && !_0x3df4bd || _0x3df4bd === _0x2a1b79;
            if (_0x45b6ed)
                _0x5af92d['classList']['add']('active');
            const _0x2b4736 = _0x2a1b79 !== 'None' && _0x280561['SKINWALKER_LAST_ROLE'] && _0x280561['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x2a1b79['toLowerCase']();
            if (_0x2b4736) {
                _0x5af92d['style']['opacity'] = '0.45';
                _0x5af92d['style']['cursor'] = 'not-allowed';
                _0x5af92d['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x5af92d['onclick'] = () => {
                    _0x3569a2('You\x20cannot\x20transform\x20into\x20' + _0x2a1b79 + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x5af92d['onclick'] = () => {
                    _0x3df4bd = _0x2a1b79 === 'None' ? null : _0x2a1b79;
                    _0x12f77c();
                    _0x1700c4();
                };
            }
            _0x27242d['appendChild'](_0x5af92d);
        });
        _0x46fe03['appendChild'](_0x27242d);
        if (_0x5f1f8c('Vigilante')) {
            const _0x36e9e5 = document['createElement']('div');
            _0x36e9e5['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x36e9e5['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x46fe03['appendChild'](_0x36e9e5);
        }
        if (_0x3df4bd === 'Vigilante') {
            const _0x5225be = document['createElement']('div');
            _0x5225be['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x5225be['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x46fe03['appendChild'](_0x5225be);
        } else if (_0x3df4bd && _0x3df4bd !== 'Celebrity') {
            const _0x244a1c = document['createElement']('div');
            _0x244a1c['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x244a1c['innerText'] = 'Use\x20' + _0x3df4bd + '\x20ability\x20on:';
            _0x46fe03['appendChild'](_0x244a1c);
            const _0x5c5243 = document['createElement']('div');
            _0x5c5243['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x2ab813 = document['createElement']('button');
            _0x2ab813['className'] = 'layer-btn';
            _0x2ab813['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x2ab813['innerText'] = 'No\x20one';
            if (!_0x51c7e6)
                _0x2ab813['classList']['add']('active');
            _0x2ab813['onclick'] = () => {
                _0x51c7e6 = null;
                _0x12f77c();
                _0x1700c4();
            };
            _0x5c5243['appendChild'](_0x2ab813);
            for (const _0x3b6e26 in _0x7eb8d8) {
                const _0x19566c = _0x7eb8d8[_0x3b6e26];
                if (_0x19566c['isDead'])
                    continue;
                const _0x155b77 = document['createElement']('button');
                _0x155b77['className'] = 'layer-btn';
                _0x155b77['innerText'] = _0x19566c['name'];
                if (_0x51c7e6 === parseInt(_0x3b6e26))
                    _0x155b77['classList']['add']('active');
                _0x155b77['onclick'] = () => {
                    _0x51c7e6 = parseInt(_0x3b6e26);
                    _0x12f77c();
                    _0x1700c4();
                };
                _0x5c5243['appendChild'](_0x155b77);
            }
            _0x46fe03['appendChild'](_0x5c5243);
        }
        const _0x27161a = document['createElement']('div');
        _0x27161a['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x27161a['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x46fe03['appendChild'](_0x27161a);
        const _0x2d27e2 = document['createElement']('div');
        _0x2d27e2['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x3e7913 = document['createElement']('button');
        _0x3e7913['className'] = 'layer-btn';
        _0x3e7913['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x3e7913['innerText'] = 'No\x20one';
        if (!_0x2e5fd2 && !_0x280561['CURRENT_TARGET'])
            _0x3e7913['classList']['add']('active');
        _0x3e7913['onclick'] = () => {
            _0x2e5fd2 = null;
            _0x280561['CURRENT_TARGET'] = null;
            _0x12f77c();
            _0x1700c4();
        };
        _0x2d27e2['appendChild'](_0x3e7913);
        for (const _0x34ec33 in _0x7eb8d8) {
            const _0x5ef3d1 = _0x7eb8d8[_0x34ec33];
            if (_0x5ef3d1['isDead'])
                continue;
            const _0x483d60 = document['createElement']('button');
            _0x483d60['className'] = 'layer-btn';
            _0x483d60['innerText'] = _0x5ef3d1['name'];
            if (_0x2e5fd2 === parseInt(_0x34ec33) || _0x280561['CURRENT_TARGET'] === parseInt(_0x34ec33))
                _0x483d60['classList']['add']('active');
            _0x483d60['onclick'] = () => {
                _0x2e5fd2 = parseInt(_0x34ec33);
                _0x280561['CURRENT_TARGET'] = parseInt(_0x34ec33);
                _0x12f77c();
                _0x1700c4();
            };
            _0x2d27e2['appendChild'](_0x483d60);
        }
        _0x46fe03['appendChild'](_0x2d27e2);
        return;
    }
    let _0xf82f98 = '';
    let _0x315e76 = ![];
    if (_0x1e85b8 === 'Doctor') {
        _0xf82f98 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x315e76 = !![];
    } else if (_0x1e85b8 === 'Investigator') {
        _0xf82f98 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x1e85b8 === 'Tracker') {
        _0xf82f98 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x1e85b8 === 'Archer') {
        _0xf82f98 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x1e85b8 === 'Escort') {
        _0xf82f98 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x1e85b8 === 'Vigilante') {
        _0xf82f98 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x331d29 = document['createElement']('div');
    _0x331d29['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x331d29['innerText'] = _0xf82f98;
    _0x46fe03['appendChild'](_0x331d29);
    const _0x2aa097 = document['createElement']('div');
    _0x2aa097['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0xd8c9c2 = document['createElement']('button');
    _0xd8c9c2['className'] = 'layer-btn';
    _0xd8c9c2['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0xd8c9c2['innerText'] = 'No\x20one';
    if (_0x280561['CURRENT_TARGET'] === null)
        _0xd8c9c2['classList']['add']('active');
    _0xd8c9c2['onclick'] = () => {
        _0x280561['CURRENT_TARGET'] = null;
        if (_0x225b27 && _0x225b27['readyState'] === WebSocket['OPEN']) {
            _0x225b27['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x1700c4();
    };
    _0x2aa097['appendChild'](_0xd8c9c2);
    for (const _0x4c4add in _0x7eb8d8) {
        const _0x52ff41 = _0x7eb8d8[_0x4c4add];
        if (_0x52ff41['isDead'])
            continue;
        const _0x57a046 = document['createElement']('button');
        _0x57a046['className'] = 'layer-btn';
        _0x57a046['innerText'] = _0x52ff41['name'];
        if (_0x280561['CURRENT_TARGET'] === parseInt(_0x4c4add))
            _0x57a046['classList']['add']('active');
        _0x57a046['onclick'] = () => {
            _0x280561['CURRENT_TARGET'] = parseInt(_0x4c4add);
            if (_0x225b27 && _0x225b27['readyState'] === WebSocket['OPEN']) {
                _0x225b27['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x4c4add)
                }));
            }
            _0x1700c4();
        };
        _0x2aa097['appendChild'](_0x57a046);
    }
    if (_0x315e76 && !_0x235260['isDead']) {
        const _0x20fec2 = document['createElement']('button');
        _0x20fec2['className'] = 'layer-btn';
        _0x20fec2['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x20fec2['innerText'] = _0x19e4f6 + '\x20(Self)';
        if (_0x280561['CURRENT_TARGET'] === _0xc0aaef)
            _0x20fec2['classList']['add']('active');
        _0x20fec2['onclick'] = () => {
            _0x280561['CURRENT_TARGET'] = _0xc0aaef;
            if (_0x225b27 && _0x225b27['readyState'] === WebSocket['OPEN']) {
                _0x225b27['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0xc0aaef
                }));
            }
            _0x1700c4();
        };
        _0x2aa097['appendChild'](_0x20fec2);
    }
    _0x46fe03['appendChild'](_0x2aa097);
}
function _0x2a58b2() {
    if (_0x225b27 && (_0x225b27['readyState'] === WebSocket['OPEN'] || _0x225b27['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x5d6bb1 = new URLSearchParams();
    if (_0x29d4ac)
        _0x5d6bb1['set']('token', _0x29d4ac);
    _0x5d6bb1['set']('ngrok-skip-browser-warning', 'true');
    const _0x44632c = 'wss://announces-viewers-ontario-san.trycloudflare.com';
    const _0x964560 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x44632c;
    const _0x49211f = _0x964560 + '/?' + _0x5d6bb1['toString']();
    _0x225b27 = new WebSocket(_0x49211f);
    _0x225b27['onopen'] = function () {
        if (!_0x101e3a && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x46f0a2 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x2167d2 = window['_FB'] && window['_FB']['_userData'];
                const _0x5865f1 = !(_0x46f0a2 && _0x2167d2 && _0x2167d2['username']);
                const _0x98247a = _0x5865f1 ? 'body01.png' : _0x5abe1a;
                const _0xd7fd02 = _0x5865f1 ? 'eyes4.png' : _0x450ab9;
                const _0x147f1e = !_0x5865f1 && _0x2167d2 && _0x2167d2['photoURL'] ? _0x2167d2['photoURL'] : '';
                const _0xe54f03 = !_0x5865f1 && _0x46f0a2 ? _0x46f0a2['uid'] : '';
                const _0x591306 = !_0x5865f1 && _0x2167d2 ? {
                    'townWins': _0x2167d2['townWins'] || 0x0,
                    'mafiaWins': _0x2167d2['mafiaWins'] || 0x0,
                    'deaths': _0x2167d2['deaths'] || 0x0,
                    'townLosses': _0x2167d2['townLosses'] || 0x0,
                    'mafiaLosses': _0x2167d2['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x19e4f6,
                    'token': _0x29d4ac,
                    'body': _0x98247a,
                    'eyes': _0xd7fd02,
                    'isGuest': _0x5865f1,
                    'uid': _0xe54f03,
                    'photoURL': _0x147f1e,
                    'accountStats': _0x591306
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x225b27 && _0x225b27['readyState'] === WebSocket['OPEN']) {
            _0x225b27['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x225b27['onclose'] = _0x5025de => {
        if (_0x5025de['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x5025de['code'] === 0xfa2 || _0x5025de['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x1f0836 = document['getElementById']('disconnect-overlay');
        if (!_0x1f0836) {
            _0x1f0836 = document['createElement']('div');
            _0x1f0836['id'] = 'disconnect-overlay';
            _0x1f0836['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x1f0836['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x1f0836);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x225b27['onmessage'] = _0x6a1879 => {
        const _0x5acecd = JSON['parse'](_0x6a1879['data']);
        if (_0x5acecd['type'] === 'map_data') {
            _0x280561['MAP']['tileSize'] = _0x5acecd['map']['tileSize'];
            _0x280561['MAP']['columns'] = _0x5acecd['map']['columns'];
            _0x280561['MAP']['rows'] = _0x5acecd['map']['rows'];
            _0x280561['MAP']['layers'] = _0x5acecd['map']['layers'];
            if (_0x5acecd['map']['doors']) {
                _0x280561['MAP']['doors'] = _0x5acecd['map']['doors'];
                const _0x4813db = _0x280561['MAP']['layers']['find'](_0x5e148d => _0x5e148d['name'] === 'floor2');
                if (_0x4813db) {
                    for (const _0x4be9f9 in _0x280561['MAP']['doors']) {
                        _0x4813db['data'][parseInt(_0x4be9f9)] = 0x2;
                    }
                }
            }
            if (_0x5acecd['entities'])
                _0x280561['ENTITIES'] = _0x5acecd['entities'];
            _0x71a26d();
            _0x280561['SYSTEM']['isReady'] = !![];
            _0x73cc1e();
            if (!_0x280561['SYSTEM']['_gameLoopRunning']) {
                _0x280561['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x309c08);
            }
            return;
        }
        if (_0x5acecd['type'] === 'init') {
            _0xc0aaef = _0x5acecd['id'];
            _0x101e3a = ![];
            _0x426bcd();
            if (_0x3c50ff) {
                const _0x2cb7a7 = document['getElementById']('leaderboard-list');
                const _0x4d2a05 = document['getElementById']('leaderboard-toggle');
                if (_0x2cb7a7) {
                    _0x2cb7a7['style']['display'] = 'none';
                    if (_0x4d2a05)
                        _0x4d2a05['style']['transform'] = 'rotate(180deg)';
                }
                const _0x4fbd16 = document['getElementById']('role-list-items');
                const _0x43bd92 = document['getElementById']('role-list-toggle');
                if (_0x4fbd16) {
                    _0x4fbd16['style']['display'] = 'none';
                    if (_0x43bd92)
                        _0x43bd92['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x2da1e6 = _0x5acecd['isOwner'] || ![];
            _0x19e4f6 = _0x5acecd['name'] || _0x19e4f6;
            _0x280561['MAP']['tileSize'] = _0x5acecd['map']['tileSize'];
            _0x280561['MAP']['columns'] = _0x5acecd['map']['columns'];
            _0x280561['MAP']['rows'] = _0x5acecd['map']['rows'];
            _0x280561['MAP']['layers'] = _0x5acecd['map']['layers'];
            if (_0x5acecd['map']['doors']) {
                _0x280561['MAP']['doors'] = _0x5acecd['map']['doors'];
                const _0xa5160f = _0x280561['MAP']['layers']['find'](_0x4ce0dd => _0x4ce0dd['name'] === 'floor2');
                if (_0xa5160f) {
                    for (const _0x191c0d in _0x280561['MAP']['doors']) {
                        _0xa5160f['data'][parseInt(_0x191c0d)] = 0x2;
                    }
                }
            }
            if (_0x5acecd['entities'])
                _0x280561['ENTITIES'] = _0x5acecd['entities'];
            if (_0x5acecd['bloodSplatters'])
                _0x4737d5 = _0x5acecd['bloodSplatters'];
            if (_0x5acecd['bloodDrops'])
                _0x2772f9 = _0x5acecd['bloodDrops'];
            if (_0x5acecd['roleList'] && _0x5acecd['roleList']['length'] > 0x0) {
                _0x280561['ROLE_LIST_RAW'] = _0x5acecd['roleList'];
                _0x115b31(_0x5acecd['roleList'], _0x5acecd['roleListMode']);
            }
            _0x71a26d();
            _0x235260['x'] = _0x280561['MAP']['columns'] * _0x280561['MAP']['tileSize'] / 0x2;
            _0x235260['y'] = _0x280561['MAP']['rows'] * _0x280561['MAP']['tileSize'] / 0x2;
            _0x280561['CAMERA']['x'] = _0x235260['x'] + _0x235260['width'] / 0x2 - _0x280561['CAMERA']['width'] / 0x2;
            _0x280561['CAMERA']['y'] = _0x235260['y'] + _0x235260['height'] / 0x2 - _0x280561['CAMERA']['height'] / 0x2;
            if (_0x2da1e6) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x2a13dc();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x57303f = document['getElementById']('role-index-btn-wrap');
            if (_0x57303f)
                _0x57303f['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x280561['SYSTEM']['lastTime'] = performance['now']();
            _0x280561['SYSTEM']['isReady'] = !![];
            _0x28c10c();
            if (!_0x280561['SYSTEM']['_gameLoopRunning']) {
                _0x280561['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x309c08);
            }
            return;
        } else if (_0x5acecd['type'] === 'state') {
            const _0x4b3b77 = {};
            for (const _0x42d946 in _0x5acecd['players']) {
                if (parseInt(_0x42d946) === _0xc0aaef)
                    continue;
                const _0x5e0a8c = _0x5acecd['players'][_0x42d946];
                const _0x273c6b = _0x7eb8d8[_0x42d946];
                if (_0x273c6b) {
                    const _0x1f34d0 = _0x5e0a8c['x'] - _0x273c6b['renderX'];
                    const _0x156408 = _0x5e0a8c['y'] - _0x273c6b['renderY'];
                    const _0x50a928 = _0x1f34d0 * _0x1f34d0 + _0x156408 * _0x156408 > 0x78 * 0x78;
                    Object['assign'](_0x273c6b, _0x5e0a8c);
                    if (_0x50a928) {
                        _0x273c6b['renderX'] = _0x5e0a8c['x'];
                        _0x273c6b['renderY'] = _0x5e0a8c['y'];
                    }
                    _0x4b3b77[_0x42d946] = _0x273c6b;
                } else {
                    _0x4b3b77[_0x42d946] = {
                        ..._0x5e0a8c,
                        'renderX': _0x5e0a8c['x'],
                        'renderY': _0x5e0a8c['y'],
                        'renderAngle': _0x5e0a8c['angle'] || 0x0
                    };
                }
            }
            _0x7eb8d8 = _0x4b3b77;
            _0x5d3d9e();
            if (_0x5acecd['players'][_0xc0aaef]) {
                const _0x179271 = _0x5acecd['players'][_0xc0aaef];
                _0x235260['chats'] = _0x179271['chats'] || [];
                _0x235260['isDead'] = _0x179271['isDead'];
                _0x235260['hasArrow'] = _0x179271['hasArrow'] || ![];
                if (_0x179271['name'])
                    _0x19e4f6 = _0x179271['name'];
                _0x28c10c();
                const _0x59695a = Math['hypot'](_0x179271['x'] - _0x235260['x'], _0x179271['y'] - _0x235260['y']);
                if (_0x59695a > 0xfa) {
                    _0x235260['x'] = _0x179271['x'];
                    _0x235260['y'] = _0x179271['y'];
                } else if (_0x59695a > 0x50) {
                    _0x235260['x'] += (_0x179271['x'] - _0x235260['x']) * 0.06;
                    _0x235260['y'] += (_0x179271['y'] - _0x235260['y']) * 0.06;
                }
            }
            if (_0x5acecd['entities'])
                _0x280561['ENTITIES'] = _0x5acecd['entities'];
            if (_0x5acecd['game']) {
                _0x280561['GAME_STATE'] = _0x5acecd['game']['state'];
                _0x280561['NIGHT_ABILITY_OPEN'] = _0x5acecd['game']['nightAbilityOpen'];
                if (_0x5acecd['game']['bloodSplatters'])
                    _0x4737d5 = _0x5acecd['game']['bloodSplatters'];
                if (_0x5acecd['game']['bloodDrops'])
                    _0x2772f9 = _0x5acecd['game']['bloodDrops'];
                if (_0x5acecd['game']['blackmailed']) {
                    _0x46df81 = new Set(_0x5acecd['game']['blackmailed']);
                } else {
                    _0x46df81['clear']();
                }
                if (_0x5acecd['game']['mayorRevealed']) {
                    for (const _0x299d03 in _0x5acecd['game']['mayorRevealed']) {
                        _0x47a8d1['add'](parseInt(_0x299d03));
                    }
                }
                if (_0x280561['LAST_STATE'] !== _0x280561['GAME_STATE']) {
                    if (_0x280561['GAME_STATE'] !== 'NIGHT') {
                        _0x280561['CURRENT_TARGET'] = null;
                        _0x3df4bd = null;
                        _0x51c7e6 = null;
                        _0x2e5fd2 = null;
                        _0x43e95c = null;
                        _0x198834 = null;
                        const _0xa82bf = document['getElementById']('ability-ui');
                        if (_0xa82bf)
                            _0xa82bf['style']['display'] = 'none';
                    }
                    if (_0x280561['GAME_STATE'] === 'NIGHT') {
                        _0x235260['chats'] = [];
                        for (const _0x39dd5f in _0x7eb8d8) {
                            _0x7eb8d8[_0x39dd5f]['chats'] = [];
                        }
                    }
                    _0x280561['LAST_STATE'] = _0x280561['GAME_STATE'];
                    _0x3e5977();
                    _0x1f01b5['onStateChange'](_0x280561['GAME_STATE'], _0x5acecd['game']['nightAbilityOpen']);
                }
                const _0x3a080f = document['getElementById']('phase-ui');
                if (_0x3a080f) {
                    if (_0x5acecd['game']['state'] === 'LOBBY') {
                        _0x3a080f['style']['display'] = 'none';
                    } else {
                        _0x3a080f['style']['display'] = 'block';
                    }
                    let _0x45b766 = _0x5acecd['game']['state']['replace']('_', '\x20');
                    if (_0x5acecd['game']['state'] === 'DAY_DISCUSS') {
                        _0x45b766 = 'DAY\x20' + (_0x5acecd['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x5acecd['game']['timer'] + 's';
                    } else if (_0x5acecd['game']['state'] === 'DAY_VOTE') {
                        _0x45b766 = 'DAY\x20' + (_0x5acecd['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x5acecd['game']['timer'] + 's';
                    } else if (_0x5acecd['game']['state'] === 'NIGHT') {
                        const _0x38992b = _0x5acecd['game']['dayCount'] || 0x1;
                        if (_0x5acecd['game']['nightAbilityOpen']) {
                            _0x45b766 = 'NIGHT\x20' + _0x38992b + '\x20ABILITY\x20PHASE';
                            const _0x1e95bf = _0x5acecd['game']['abilityTimer'] !== undefined ? _0x5acecd['game']['abilityTimer'] : _0x5acecd['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x1e95bf + 's';
                        } else {
                            _0x45b766 = 'NIGHT\x20' + _0x38992b;
                            document['getElementById']('phase-timer')['innerText'] = _0x5acecd['game']['timer'] + 's';
                        }
                    }
                    if (_0x5acecd['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x45b766;
                    }
                }
                if (_0x5acecd['game']['state'] === 'NIGHT') {
                    const _0x1ff5dc = document['getElementById']('ability-timer-label');
                    if (_0x1ff5dc) {
                        const _0x453cf6 = _0x5acecd['game']['abilityTimer'] !== undefined ? _0x5acecd['game']['abilityTimer'] : _0x5acecd['game']['timer'];
                        _0x1ff5dc['innerText'] = _0x5acecd['game']['nightAbilityOpen'] ? _0x453cf6 + 's' : '';
                    }
                    if (_0x5acecd['game']['nightAbilityOpen'] && !_0x101fb7 && !_0x235260['isDead']) {
                        _0x101fb7 = !![];
                        _0x1700c4();
                        const _0x439fc5 = document['getElementById']('ability-ui');
                        if (_0x439fc5)
                            _0x439fc5['style']['display'] = 'block';
                    }
                    if (!_0x5acecd['game']['nightAbilityOpen']) {
                        const _0x19531d = document['getElementById']('ability-ui');
                        if (_0x19531d && _0x19531d['style']['display'] === 'block') {
                            _0x19531d['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x101fb7 = ![];
                }
                if (_0x5acecd['game']['rolesInGame']) {
                    _0x280561['ROLES_IN_GAME'] = _0x5acecd['game']['rolesInGame'];
                }
                if (_0x5acecd['game']['skinwalkerLastRole'] !== undefined) {
                    _0x280561['SKINWALKER_LAST_ROLE'] = _0x5acecd['game']['skinwalkerLastRole'];
                }
                if (_0x5acecd['game']['state'] === 'NIGHT') {
                    const _0x255e43 = document['getElementById']('will-ui');
                    if (_0x255e43 && _0x255e43['style']['display'] === 'flex') {
                        _0x255e43['style']['display'] = 'none';
                        const _0x859d1e = document['getElementById']('will-input');
                        if (_0x859d1e)
                            _0x859d1e['blur']();
                    }
                }
                _0x1b8edd(_0x5acecd['game']);
                if (_0x5acecd['game']['roleListMode'] !== undefined) {
                    _0x280561['ROLE_LIST_RAW'] = _0x5acecd['game']['roleList'] || [];
                    _0x115b31(_0x5acecd['game']['roleList'], _0x5acecd['game']['roleListMode']);
                }
            }
        } else if (_0x5acecd['type'] === 'teleport') {
            _0x235260['x'] = _0x5acecd['x'];
            _0x235260['y'] = _0x5acecd['y'];
            _0x235260['vx'] = 0x0;
            _0x235260['vy'] = 0x0;
            _0x280561['CAMERA']['x'] = null;
            if (_0x5acecd['teleportId'] !== undefined)
                _0x5ba263 = _0x5acecd['teleportId'];
        } else if (_0x5acecd['type'] === 'bulk_teleport') {
            for (const _0x7e26b2 in _0x5acecd['positions']) {
                const _0x18e16a = _0x5acecd['positions'][_0x7e26b2];
                if (parseInt(_0x7e26b2) === _0xc0aaef) {
                    _0x235260['x'] = _0x18e16a['x'];
                    _0x235260['y'] = _0x18e16a['y'];
                    _0x235260['vx'] = 0x0;
                    _0x235260['vy'] = 0x0;
                    _0x280561['CAMERA']['x'] = null;
                    continue;
                }
                const _0x48ad77 = _0x7eb8d8[_0x7e26b2];
                if (_0x48ad77) {
                    _0x48ad77['x'] = _0x18e16a['x'];
                    _0x48ad77['y'] = _0x18e16a['y'];
                    _0x48ad77['renderX'] = _0x18e16a['x'];
                    _0x48ad77['renderY'] = _0x18e16a['y'];
                    _0x48ad77['vx'] = 0x0;
                    _0x48ad77['vy'] = 0x0;
                }
            }
        } else if (_0x5acecd['type'] === 'player_left') {
            delete _0x7eb8d8[_0x5acecd['id']];
            _0x47a8d1['delete'](parseInt(_0x5acecd['id']));
        } else if (_0x5acecd['type'] === 'map_update') {
            const _0x17e70e = _0x280561['MAP']['layers']['find'](_0x2520ea => _0x2520ea['name'] === _0x5acecd['layer']);
            if (_0x17e70e) {
                _0x17e70e['data'][_0x5acecd['row'] * _0x280561['MAP']['columns'] + _0x5acecd['col']] = _0x5acecd['gid'];
                const _0xfd7958 = _0x5acecd['row'] * _0x280561['MAP']['columns'] + _0x5acecd['col'];
                if (_0x280561['MAP']['doors'] && _0x280561['MAP']['doors'][_0xfd7958]) {
                    const _0x3c85af = _0x280561['MAP']['layers']['find'](_0x557d77 => _0x557d77['name'] === 'floor2');
                    if (_0x3c85af)
                        _0x3c85af['data'][_0xfd7958] = 0x2;
                }
                const _0x223240 = Math['floor'](_0x5acecd['col'] * _0x280561['MAP']['tileSize'] / _0x280561['MAP']['chunkSize']);
                const _0x49dbbe = Math['floor'](_0x5acecd['row'] * _0x280561['MAP']['tileSize'] / _0x280561['MAP']['chunkSize']);
                _0x556264(_0x223240, _0x49dbbe);
                _0x547457 = null;
                _0x4624b7 = null;
            }
        } else if (_0x5acecd['type'] === 'role_assign') {
            _0x1e85b8 = _0x5acecd['role'];
            _0x235260['isDead'] = _0x1e85b8 === 'Spectator';
            _0x47a8d1['clear']();
            _0x280561['CURRENT_TARGET'] = null;
            _0x3df4bd = null;
            _0x51c7e6 = null;
            _0x2e5fd2 = null;
            _0x43e95c = null;
            _0x198834 = null;
            _0x101fb7 = ![];
            const _0x58b978 = document['getElementById']('ability-ui');
            if (_0x58b978)
                _0x58b978['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x1e85b8;
            _0x3e5977();
            _0x3569a2(_0x1e85b8 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x1e85b8, !![]);
            let _0x298e66 = '';
            if (_0x1e85b8 === 'Investigator')
                _0x298e66 = 'Investigate\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x1e85b8 === 'Tracker')
                _0x298e66 = 'Track\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x1e85b8 === 'Doctor')
                _0x298e66 = 'Heal\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x1e85b8 === 'Archer')
                _0x298e66 = 'Guard\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x1e85b8 === 'Escort')
                _0x298e66 = 'Roleblock\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x1e85b8 === 'Vigilante')
                _0x298e66 = 'Shoot\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x1e85b8 === 'Skinwalker')
                _0x298e66 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x1e85b8 === 'Blackmailer')
                _0x298e66 = 'Pick\x20a\x20player\x20to\x20blackmail\x20and\x20a\x20player\x20to\x20kill\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x1e85b8 === 'Celebrity')
                _0x298e66 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x1e85b8 === 'Mayor')
                _0x298e66 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x3569a2(_0x298e66, !![]);
        } else if (_0x5acecd['type'] === 'mayor_reveal') {
            _0x47a8d1['add'](parseInt(_0x5acecd['playerId']));
            _0x28c10c();
            _0x3e5977();
        } else if (_0x5acecd['type'] === 'rolelist_update') {
            _0x280561['ROLE_LIST_RAW'] = _0x5acecd['list'] || [];
            _0x115b31(_0x5acecd['list'], _0x5acecd['mode']);
        } else if (_0x5acecd['type'] === 'sound_event') {
            _0x1f01b5['onSoundEvent'](_0x5acecd['track']);
        } else if (_0x5acecd['type'] === 'blood_splatter') {
            _0x4737d5['push']({
                'x': _0x5acecd['x'],
                'y': _0x5acecd['y']
            });
        } else if (_0x5acecd['type'] === 'blood_drop') {
            _0x2772f9['push']({
                'x': _0x5acecd['x'],
                'y': _0x5acecd['y']
            });
        } else if (_0x5acecd['type'] === 'day_fade') {
            _0xee2c95 = 0x1;
            _0x2f10dc = performance['now']() + 0x3e8;
        } else if (_0x5acecd['type'] === 'player_stats_updated') {
            const _0x3e3e52 = parseInt(_0x5acecd['id']);
            if (_0x3e3e52 === _0xc0aaef && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x5acecd['accountStats']);
            }
            if (_0x7eb8d8[_0x5acecd['id']]) {
                _0x7eb8d8[_0x5acecd['id']]['accountStats'] = _0x5acecd['accountStats'];
            }
            _0x5d3d9e();
        } else if (_0x5acecd['type'] === 'stats_update') {
            const _0x5f4d11 = window['_FB'];
            if (_0x5f4d11 && _0x5f4d11['_currentUser'] && _0x5f4d11['_userData']) {
                const _0x44d395 = _0x5f4d11['_currentUser']['uid'];
                const _0x455bfc = _0x5acecd['patch'] || {};
                const _0x3a62a5 = _0x5f4d11['_userData'];
                const _0x1d7054 = {
                    'townWins': (_0x3a62a5['townWins'] || 0x0) + (_0x455bfc['townWins'] || 0x0),
                    'mafiaWins': (_0x3a62a5['mafiaWins'] || 0x0) + (_0x455bfc['mafiaWins'] || 0x0),
                    'deaths': (_0x3a62a5['deaths'] || 0x0) + (_0x455bfc['deaths'] || 0x0),
                    'townLosses': (_0x3a62a5['townLosses'] || 0x0) + (_0x455bfc['townLosses'] || 0x0),
                    'mafiaLosses': (_0x3a62a5['mafiaLosses'] || 0x0) + (_0x455bfc['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x5f4d11['_userData'], _0x1d7054);
                const _0x31fce8 = _0x5f4d11['doc'](_0x5f4d11['db'], 'users', _0x44d395);
                _0x5f4d11['updateDoc'](_0x31fce8, _0x1d7054)['catch'](() => {
                });
                if (_0x225b27 && _0x225b27['readyState'] === WebSocket['OPEN']) {
                    _0x225b27['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x1d7054
                    }));
                }
                _0x5d3d9e();
            }
        } else if (_0x5acecd['type'] === 'game_over') {
            _0x1f01b5['onStateChange']('LOBBY', ![]);
            _0x115b31([], 'off');
            _0x1e85b8 = null;
            _0x235260['isDead'] = ![];
            _0x235260['hasArrow'] = ![];
            _0x4737d5 = [];
            _0x2772f9 = [];
            _0x46df81['clear']();
            _0x47a8d1['clear']();
            _0x280561['CURRENT_TARGET'] = null;
            _0x3df4bd = null;
            _0x51c7e6 = null;
            _0x2e5fd2 = null;
            _0x43e95c = null;
            _0x198834 = null;
            _0x101fb7 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x3e5977();
            _0x3569a2('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x5acecd['type'] === 'chat_log') {
            _0x3569a2(_0x5acecd['text'], ![], !!_0x5acecd['isHost'], _0x5acecd['sender']);
        } else if (_0x5acecd['type'] === 'sys_chat') {
            _0x3569a2(_0x5acecd['text'], !![]);
        }
    };
}
function _0x3569a2(_0x374697, _0x17333d = ![], _0x96cffe = ![], _0x15c827 = null) {
    const _0x3d7b8f = document['getElementById']('chat-log-messages');
    const _0x1883a0 = document['getElementById']('chat-log-ui');
    const _0x3f51e8 = _0x1883a0 ? _0x1883a0['scrollHeight'] - _0x1883a0['scrollTop'] - _0x1883a0['clientHeight'] < 0x1e : !![];
    const _0x2e746b = document['createElement']('div');
    _0x2e746b['className'] = 'chat-log-line' + (_0x17333d ? '\x20sys-msg' : '');
    if (_0x15c827) {
        const _0x30a827 = document['createElement']('span');
        _0x30a827['className'] = _0x96cffe ? 'chat-host-name' : 'chat-sender-name';
        _0x30a827['textContent'] = _0x15c827 + ':\x20';
        const _0x167e09 = document['createElement']('span');
        _0x167e09['className'] = 'chat-msg-text';
        _0x167e09['textContent'] = _0x374697;
        _0x2e746b['appendChild'](_0x30a827);
        _0x2e746b['appendChild'](_0x167e09);
    } else {
        _0x2e746b['innerText'] = _0x374697;
    }
    if (_0x3d7b8f)
        _0x3d7b8f['appendChild'](_0x2e746b);
    if (_0x1883a0 && _0x3f51e8) {
        _0x1883a0['scrollTop'] = _0x1883a0['scrollHeight'];
    }
    if (_0x3d7b8f && _0x3d7b8f['childElementCount'] > 0xc8) {
        _0x3d7b8f['removeChild'](_0x3d7b8f['firstChild']);
    }
}
function _0x47ce5a(_0x1370e7, _0x1ae75f, _0x558eee) {
    const _0x39f28f = document['createElement']('canvas');
    _0x39f28f['width'] = _0x558eee;
    _0x39f28f['height'] = _0x558eee;
    const _0x447833 = _0x39f28f['getContext']('2d');
    _0x447833['imageSmoothingEnabled'] = ![];
    const _0x36a54b = 'assets/' + (_0x1370e7 || 'body01.png');
    const _0x21bc4e = _0x575c20(_0x36a54b);
    if (_0x21bc4e['complete'] && _0x21bc4e['naturalWidth'] > 0x0)
        _0x447833['drawImage'](_0x21bc4e, 0x0, 0x0, _0x558eee, _0x558eee);
    if (_0x1ae75f) {
        const _0x26e427 = 'assets/' + _0x1ae75f;
        const _0x52c00e = _0x575c20(_0x26e427);
        if (_0x52c00e['complete'] && _0x52c00e['naturalWidth'] > 0x0)
            _0x447833['drawImage'](_0x52c00e, 0x0, 0x0, _0x558eee, _0x558eee);
    }
    return _0x39f28f['toDataURL']();
}
let _0x234a1c = '';
function _0x5d3d9e() {
    const _0x4487b2 = document['getElementById']('chat-profile-panel');
    if (!_0x4487b2)
        return;
    const _0x4a9dad = [];
    if (_0xc0aaef !== null) {
        const _0x41bd2c = _0x5abe1a || 'body01.png';
        const _0x30fd5a = _0x450ab9 || 'eyes4.png';
        const _0x49d8cf = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x4a9dad['push']({
            'id': _0xc0aaef,
            'name': _0x19e4f6,
            'body': _0x41bd2c,
            'eyes': _0x30fd5a,
            'stats': _0x49d8cf
        });
    }
    for (const _0x765b63 in _0x7eb8d8) {
        const _0x3c1837 = _0x7eb8d8[_0x765b63];
        const _0x5c05ab = _0x3c1837['accountStats'] || null;
        _0x4a9dad['push']({
            'id': parseInt(_0x765b63),
            'name': _0x3c1837['name'],
            'body': _0x3c1837['body'] || 'body01.png',
            'eyes': _0x3c1837['eyes'] || 'eyes4.png',
            'stats': _0x5c05ab
        });
    }
    const _0x3add69 = _0x4a9dad['map'](_0x4e7244 => _0x4e7244['id'] + '_' + _0x4e7244['name'] + '_' + _0x4e7244['body'] + '_' + _0x4e7244['eyes'] + '_' + JSON['stringify'](_0x4e7244['stats']))['join']('|');
    if (_0x3add69 === _0x234a1c)
        return;
    _0x234a1c = _0x3add69;
    _0x4487b2['innerHTML'] = '';
    let _0x269eb0 = ![];
    for (const _0x5848c1 of _0x4a9dad) {
        _0x269eb0 = !![];
        const _0x84146c = _0x47ce5a(_0x5848c1['body'], _0x5848c1['eyes'], 0x20);
        const _0x5bd755 = document['createElement']('div');
        _0x5bd755['className'] = 'chat-pfp-entry';
        const _0x5ccced = document['createElement']('img');
        _0x5ccced['src'] = _0x84146c;
        _0x5ccced['alt'] = _0x5848c1['name'];
        _0x5bd755['appendChild'](_0x5ccced);
        const _0x2d3c43 = document['createElement']('div');
        _0x2d3c43['className'] = 'chat-pfp-tooltip';
        let _0x424a8f = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x5848c1['name'] + '</div>';
        const _0x137db6 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x5627d1 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x1ed184 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x4f91bf = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x2a29cb = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0xa207a = (_0x510e33, _0x402cf3, _0x1db448, _0x1bbe37) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x510e33 + '<span\x20style=\x22flex:1;color:' + _0x1bbe37 + ';\x22>' + _0x402cf3 + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x1db448 + '</span></div>';
        if (_0x5848c1['stats']) {
            _0x424a8f += _0xa207a(_0x137db6, 'Town\x20Wins', _0x5848c1['stats']['townWins'] || 0x0, '#55ee77');
            _0x424a8f += _0xa207a(_0x5627d1, 'Mafia\x20Wins', _0x5848c1['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x424a8f += _0xa207a(_0x1ed184, 'Deaths', _0x5848c1['stats']['deaths'] || 0x0, '#aaa');
            _0x424a8f += _0xa207a(_0x4f91bf, 'Town\x20Losses', _0x5848c1['stats']['townLosses'] || 0x0, '#6688aa');
            _0x424a8f += _0xa207a(_0x2a29cb, 'Mafia\x20Losses', _0x5848c1['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x424a8f += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x2d3c43['innerHTML'] = _0x424a8f;
        _0x5bd755['appendChild'](_0x2d3c43);
        _0x5bd755['addEventListener']('mouseenter', () => {
            const _0x2d5ae5 = _0x5bd755['getBoundingClientRect']();
            _0x2d3c43['style']['left'] = _0x2d5ae5['right'] + 0x6 + 'px';
            _0x2d3c43['style']['top'] = _0x2d5ae5['top'] + _0x2d5ae5['height'] / 0x2 + 'px';
            _0x2d3c43['style']['transform'] = 'translateY(-50%)';
        });
        _0x4487b2['appendChild'](_0x5bd755);
    }
    const _0x4561cd = document['getElementById']('chat-log-wrap');
    if (_0x4561cd) {
        if (_0x269eb0) {
            _0x4561cd['classList']['add']('has-profiles');
            _0x4487b2['style']['display'] = 'flex';
        } else {
            _0x4561cd['classList']['remove']('has-profiles');
            _0x4487b2['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x5d3d9e;
let _0x24eb31 = -0x1, _0x3a9e98 = -0x1, _0x27b373 = -0x1, _0x101bb8 = 0x0;
function _0x520ae6() {
    if (!_0xc0aaef || !_0x225b27 || _0x225b27['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x3ba5a9 = performance['now']();
    const _0x36eddc = _0x3ba5a9 - _0x101bb8;
    const _0x1671f9 = Math['abs'](_0x235260['x'] - _0x24eb31) > 0.05 || Math['abs'](_0x235260['y'] - _0x3a9e98) > 0.05 || Math['abs'](_0x235260['angle'] - _0x27b373) > 0.02;
    if (!_0x1671f9 && _0x36eddc < 0xc8)
        return;
    if (_0x36eddc < 0x19)
        return;
    _0x101bb8 = _0x3ba5a9;
    _0x24eb31 = _0x235260['x'];
    _0x3a9e98 = _0x235260['y'];
    _0x27b373 = _0x235260['angle'];
    if (!_0xc0aaef || !_0x225b27 || _0x225b27['readyState'] !== WebSocket['OPEN'])
        return;
    _0x225b27['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x235260['x'],
        'y': _0x235260['y'],
        'vx': _0x235260['vx'],
        'vy': _0x235260['vy'],
        'angle': _0x235260['angle'],
        'scale': _0x235260['scale'],
        'teleportId': _0x5ba263,
        'clientTimestamp': Date['now']()
    }));
}
function _0xecb46e() {
    if (_0x235260['isDead'])
        return;
    const _0x34b2dd = _0x280561['MAP']['layers']['find'](_0xeaa232 => _0xeaa232['name'] === 'walls');
    if (!_0x34b2dd)
        return;
    const _0x2b9354 = _0x235260['scale'];
    const _0x375e83 = _0x235260['width'] * _0x2b9354 / 0x2;
    for (let _0x13b3f1 = 0x0; _0x13b3f1 < 0x3; _0x13b3f1++) {
        let _0x26b49c = _0x235260['x'] + _0x235260['width'] / 0x2;
        let _0x2f4aa3 = _0x235260['y'] + _0x235260['height'] / 0x2;
        const _0x249419 = Math['floor']((_0x26b49c - _0x375e83) / _0x280561['MAP']['tileSize']);
        const _0x21109c = Math['floor']((_0x26b49c + _0x375e83) / _0x280561['MAP']['tileSize']);
        const _0x377add = Math['floor']((_0x2f4aa3 - _0x375e83) / _0x280561['MAP']['tileSize']);
        const _0x1b6c28 = Math['floor']((_0x2f4aa3 + _0x375e83) / _0x280561['MAP']['tileSize']);
        for (let _0x55ffd1 = _0x377add; _0x55ffd1 <= _0x1b6c28; _0x55ffd1++) {
            for (let _0x4abd71 = _0x249419; _0x4abd71 <= _0x21109c; _0x4abd71++) {
                if (_0x4abd71 < 0x0 || _0x4abd71 >= _0x280561['MAP']['columns'] || _0x55ffd1 < 0x0 || _0x55ffd1 >= _0x280561['MAP']['rows'])
                    continue;
                if (_0x34b2dd['data'][_0x55ffd1 * _0x280561['MAP']['columns'] + _0x4abd71] === 0x0)
                    continue;
                const _0x49c9db = _0x4abd71 * _0x280561['MAP']['tileSize'];
                const _0x424122 = _0x55ffd1 * _0x280561['MAP']['tileSize'];
                const _0xe325d8 = _0x26b49c < _0x49c9db ? _0x49c9db : _0x26b49c > _0x49c9db + _0x280561['MAP']['tileSize'] ? _0x49c9db + _0x280561['MAP']['tileSize'] : _0x26b49c;
                const _0x51015d = _0x2f4aa3 < _0x424122 ? _0x424122 : _0x2f4aa3 > _0x424122 + _0x280561['MAP']['tileSize'] ? _0x424122 + _0x280561['MAP']['tileSize'] : _0x2f4aa3;
                const _0x3f63f6 = _0x26b49c - _0xe325d8;
                const _0x2f7ccd = _0x2f4aa3 - _0x51015d;
                const _0x2fd1ed = Math['sqrt'](_0x3f63f6 * _0x3f63f6 + _0x2f7ccd * _0x2f7ccd);
                if (_0x2fd1ed < _0x375e83) {
                    if (_0x2fd1ed === 0x0) {
                        const _0x5dbee5 = _0x26b49c - _0x49c9db;
                        const _0x4b2a79 = _0x49c9db + _0x280561['MAP']['tileSize'] - _0x26b49c;
                        const _0x24c019 = _0x2f4aa3 - _0x424122;
                        const _0x4e16c4 = _0x424122 + _0x280561['MAP']['tileSize'] - _0x2f4aa3;
                        const _0x1b7a15 = Math['min'](_0x5dbee5, _0x4b2a79, _0x24c019, _0x4e16c4);
                        if (_0x1b7a15 === _0x5dbee5)
                            _0x26b49c = _0x49c9db - _0x375e83;
                        else if (_0x1b7a15 === _0x4b2a79)
                            _0x26b49c = _0x49c9db + _0x280561['MAP']['tileSize'] + _0x375e83;
                        else if (_0x1b7a15 === _0x24c019)
                            _0x2f4aa3 = _0x424122 - _0x375e83;
                        else
                            _0x2f4aa3 = _0x424122 + _0x280561['MAP']['tileSize'] + _0x375e83;
                    } else {
                        const _0x516b39 = _0x375e83 - _0x2fd1ed;
                        _0x26b49c += _0x3f63f6 / _0x2fd1ed * _0x516b39;
                        _0x2f4aa3 += _0x2f7ccd / _0x2fd1ed * _0x516b39;
                        const _0x3819eb = _0x235260['vx'] * (_0x3f63f6 / _0x2fd1ed) + _0x235260['vy'] * (_0x2f7ccd / _0x2fd1ed);
                        if (_0x3819eb < 0x0) {
                            _0x235260['vx'] -= _0x3819eb * (_0x3f63f6 / _0x2fd1ed);
                            _0x235260['vy'] -= _0x3819eb * (_0x2f7ccd / _0x2fd1ed);
                        }
                    }
                }
            }
        }
        _0x235260['x'] = _0x26b49c - _0x235260['width'] / 0x2;
        _0x235260['y'] = _0x2f4aa3 - _0x235260['height'] / 0x2;
    }
}
function _0x587e6f(_0x252ddf) {
    const _0x2379bd = _0x280561['MAP']['layers']['find'](_0x207a58 => _0x207a58['name'] === 'walls');
    if (!_0x2379bd)
        return;
    const _0x47ec29 = _0x252ddf['width'] / 0x2;
    for (let _0x39c7c9 = 0x0; _0x39c7c9 < 0x2; _0x39c7c9++) {
        let _0x3145ea = _0x252ddf['x'] + _0x252ddf['width'] / 0x2;
        let _0x5e2aac = _0x252ddf['y'] + _0x252ddf['height'] / 0x2;
        const _0x2b71ba = Math['floor']((_0x3145ea - _0x47ec29) / _0x280561['MAP']['tileSize']);
        const _0x71f199 = Math['floor']((_0x3145ea + _0x47ec29) / _0x280561['MAP']['tileSize']);
        const _0x5a04e5 = Math['floor']((_0x5e2aac - _0x47ec29) / _0x280561['MAP']['tileSize']);
        const _0x28e321 = Math['floor']((_0x5e2aac + _0x47ec29) / _0x280561['MAP']['tileSize']);
        for (let _0x4cade4 = _0x5a04e5; _0x4cade4 <= _0x28e321; _0x4cade4++) {
            for (let _0x10415b = _0x2b71ba; _0x10415b <= _0x71f199; _0x10415b++) {
                if (_0x10415b < 0x0 || _0x10415b >= _0x280561['MAP']['columns'] || _0x4cade4 < 0x0 || _0x4cade4 >= _0x280561['MAP']['rows'])
                    continue;
                if (_0x2379bd['data'][_0x4cade4 * _0x280561['MAP']['columns'] + _0x10415b] === 0x0)
                    continue;
                const _0x2fbce1 = _0x10415b * _0x280561['MAP']['tileSize'];
                const _0x55b797 = _0x4cade4 * _0x280561['MAP']['tileSize'];
                const _0x4ae59f = _0x3145ea < _0x2fbce1 ? _0x2fbce1 : _0x3145ea > _0x2fbce1 + _0x280561['MAP']['tileSize'] ? _0x2fbce1 + _0x280561['MAP']['tileSize'] : _0x3145ea;
                const _0x2df8a7 = _0x5e2aac < _0x55b797 ? _0x55b797 : _0x5e2aac > _0x55b797 + _0x280561['MAP']['tileSize'] ? _0x55b797 + _0x280561['MAP']['tileSize'] : _0x5e2aac;
                const _0x36401b = _0x3145ea - _0x4ae59f;
                const _0x1270c6 = _0x5e2aac - _0x2df8a7;
                const _0x267968 = Math['sqrt'](_0x36401b * _0x36401b + _0x1270c6 * _0x1270c6);
                if (_0x267968 < _0x47ec29) {
                    if (_0x267968 === 0x0) {
                        const _0x5a58a9 = _0x3145ea - _0x2fbce1;
                        const _0x2b8d66 = _0x2fbce1 + _0x280561['MAP']['tileSize'] - _0x3145ea;
                        const _0x5e986c = _0x5e2aac - _0x55b797;
                        const _0x843416 = _0x55b797 + _0x280561['MAP']['tileSize'] - _0x5e2aac;
                        const _0x3ccdda = Math['min'](_0x5a58a9, _0x2b8d66, _0x5e986c, _0x843416);
                        if (_0x3ccdda === _0x5a58a9)
                            _0x3145ea = _0x2fbce1 - _0x47ec29;
                        else if (_0x3ccdda === _0x2b8d66)
                            _0x3145ea = _0x2fbce1 + _0x280561['MAP']['tileSize'] + _0x47ec29;
                        else if (_0x3ccdda === _0x5e986c)
                            _0x5e2aac = _0x55b797 - _0x47ec29;
                        else
                            _0x5e2aac = _0x55b797 + _0x280561['MAP']['tileSize'] + _0x47ec29;
                    } else {
                        const _0x2466e4 = _0x47ec29 - _0x267968;
                        _0x3145ea += _0x36401b / _0x267968 * _0x2466e4;
                        _0x5e2aac += _0x1270c6 / _0x267968 * _0x2466e4;
                    }
                }
            }
        }
        _0x252ddf['x'] = _0x3145ea - _0x252ddf['width'] / 0x2;
        _0x252ddf['y'] = _0x5e2aac - _0x252ddf['height'] / 0x2;
    }
}
function _0x4e7618(_0x5196f7) {
    const _0x4d6e0f = _0x5196f7['width'] / 0x2;
    for (let _0x1d715e = 0x0; _0x1d715e < 0x2; _0x1d715e++) {
        let _0x59369d = _0x5196f7['x'] + _0x5196f7['width'] / 0x2;
        let _0x433d7b = _0x5196f7['y'] + _0x5196f7['height'] / 0x2;
        for (const _0x46a94c of _0x280561['ENTITIES']) {
            const _0x41d976 = _0x59369d < _0x46a94c['x'] ? _0x46a94c['x'] : _0x59369d > _0x46a94c['x'] + _0x46a94c['w'] ? _0x46a94c['x'] + _0x46a94c['w'] : _0x59369d;
            const _0x51c872 = _0x433d7b < _0x46a94c['y'] ? _0x46a94c['y'] : _0x433d7b > _0x46a94c['y'] + _0x46a94c['h'] ? _0x46a94c['y'] + _0x46a94c['h'] : _0x433d7b;
            const _0x20bcff = _0x59369d - _0x41d976;
            const _0x52a11e = _0x433d7b - _0x51c872;
            const _0x17de9a = Math['sqrt'](_0x20bcff * _0x20bcff + _0x52a11e * _0x52a11e);
            if (_0x17de9a < _0x4d6e0f && _0x17de9a > 0x0) {
                const _0x3f0e2d = _0x4d6e0f - _0x17de9a;
                const _0x303f1c = _0x20bcff / _0x17de9a;
                const _0x172c37 = _0x52a11e / _0x17de9a;
                _0x59369d += _0x303f1c * _0x3f0e2d;
                _0x433d7b += _0x172c37 * _0x3f0e2d;
            } else if (_0x17de9a === 0x0) {
                const _0x4b9ba3 = _0x59369d - _0x46a94c['x'];
                const _0x2be7e6 = _0x46a94c['x'] + _0x46a94c['w'] - _0x59369d;
                const _0x282b7e = _0x433d7b - _0x46a94c['y'];
                const _0x4a3093 = _0x46a94c['y'] + _0x46a94c['h'] - _0x433d7b;
                const _0x3f53c0 = Math['min'](_0x4b9ba3, _0x2be7e6, _0x282b7e, _0x4a3093);
                if (_0x3f53c0 === _0x4b9ba3)
                    _0x59369d = _0x46a94c['x'] - _0x4d6e0f;
                else if (_0x3f53c0 === _0x2be7e6)
                    _0x59369d = _0x46a94c['x'] + _0x46a94c['w'] + _0x4d6e0f;
                else if (_0x3f53c0 === _0x282b7e)
                    _0x433d7b = _0x46a94c['y'] - _0x4d6e0f;
                else
                    _0x433d7b = _0x46a94c['y'] + _0x46a94c['h'] + _0x4d6e0f;
            }
        }
        _0x5196f7['x'] = _0x59369d - _0x5196f7['width'] / 0x2;
        _0x5196f7['y'] = _0x433d7b - _0x5196f7['height'] / 0x2;
    }
}
function _0x26b56d() {
    if (_0x235260['isDead'])
        return;
    const _0x4b9571 = _0x235260['width'] / 0x2;
    const _0x1cf854 = _0x235260['x'] + _0x235260['width'] / 0x2;
    const _0x27259e = _0x235260['y'] + _0x235260['height'] / 0x2;
    for (const _0x274b6d in _0x7eb8d8) {
        const _0x1bda65 = _0x7eb8d8[_0x274b6d];
        if (_0x1bda65['isDead'])
            continue;
        const _0x38ed5c = _0x1bda65['width'] / 0x2;
        const _0x36a209 = _0x4b9571 + _0x38ed5c;
        const _0x12e231 = (_0x1bda65['renderX'] ?? _0x1bda65['x']) + _0x1bda65['width'] / 0x2;
        const _0x1cdd0c = (_0x1bda65['renderY'] ?? _0x1bda65['y']) + _0x1bda65['height'] / 0x2;
        const _0x18d281 = _0x1cf854 - _0x12e231;
        const _0x361193 = _0x27259e - _0x1cdd0c;
        const _0x41a871 = Math['sqrt'](_0x18d281 * _0x18d281 + _0x361193 * _0x361193);
        if (_0x41a871 > 0x0 && _0x41a871 < _0x36a209) {
            const _0x525857 = _0x36a209 - _0x41a871;
            const _0x4e4c28 = _0x18d281 / _0x41a871;
            const _0x4c136f = _0x361193 / _0x41a871;
            _0x235260['x'] += _0x4e4c28 * (_0x525857 * 0.25);
            _0x235260['y'] += _0x4c136f * (_0x525857 * 0.25);
            _0x1bda65['x'] -= _0x4e4c28 * (_0x525857 * 0.75);
            _0x1bda65['y'] -= _0x4c136f * (_0x525857 * 0.75);
            _0x587e6f(_0x1bda65);
            _0x4e7618(_0x1bda65);
            if (_0x1bda65['renderX'] !== undefined) {
                _0x1bda65['renderX'] = _0x1bda65['x'];
                _0x1bda65['renderY'] = _0x1bda65['y'];
            }
            const _0x8baed6 = _0x235260['vx'] * _0x4e4c28 + _0x235260['vy'] * _0x4c136f;
            if (_0x8baed6 < 0x0) {
                _0x235260['vx'] -= _0x8baed6 * _0x4e4c28 * 0.25;
                _0x235260['vy'] -= _0x8baed6 * _0x4c136f * 0.25;
            }
        }
    }
    _0xecb46e();
    _0x16137c();
}
function _0x16137c() {
    if (_0x235260['isDead'])
        return;
    const _0x4cfe27 = _0x235260['scale'];
    const _0x3dd810 = _0x235260['width'] * _0x4cfe27 / 0x2;
    for (let _0x246aef = 0x0; _0x246aef < 0x2; _0x246aef++) {
        let _0x77a9d5 = _0x235260['x'] + _0x235260['width'] / 0x2;
        let _0x72bf14 = _0x235260['y'] + _0x235260['height'] / 0x2;
        for (const _0x4ecd2f of _0x280561['ENTITIES']) {
            const _0x4da7e6 = _0x77a9d5 < _0x4ecd2f['x'] ? _0x4ecd2f['x'] : _0x77a9d5 > _0x4ecd2f['x'] + _0x4ecd2f['w'] ? _0x4ecd2f['x'] + _0x4ecd2f['w'] : _0x77a9d5;
            const _0xe1a9ad = _0x72bf14 < _0x4ecd2f['y'] ? _0x4ecd2f['y'] : _0x72bf14 > _0x4ecd2f['y'] + _0x4ecd2f['h'] ? _0x4ecd2f['y'] + _0x4ecd2f['h'] : _0x72bf14;
            const _0xfffa07 = _0x77a9d5 - _0x4da7e6;
            const _0x1f51f3 = _0x72bf14 - _0xe1a9ad;
            const _0x1f96f8 = Math['sqrt'](_0xfffa07 * _0xfffa07 + _0x1f51f3 * _0x1f51f3);
            if (_0x1f96f8 < _0x3dd810 && _0x1f96f8 > 0x0) {
                const _0x3eebb2 = _0x3dd810 - _0x1f96f8;
                const _0x4b3e47 = _0xfffa07 / _0x1f96f8;
                const _0x992dd9 = _0x1f51f3 / _0x1f96f8;
                _0x77a9d5 += _0x4b3e47 * _0x3eebb2;
                _0x72bf14 += _0x992dd9 * _0x3eebb2;
                const _0x5e7527 = _0x235260['vx'] * _0x4b3e47 + _0x235260['vy'] * _0x992dd9;
                if (_0x5e7527 < 0x0) {
                    _0x235260['vx'] -= _0x5e7527 * _0x4b3e47;
                    _0x235260['vy'] -= _0x5e7527 * _0x992dd9;
                }
            } else if (_0x1f96f8 === 0x0) {
                const _0x13052b = _0x77a9d5 - _0x4ecd2f['x'];
                const _0x561689 = _0x4ecd2f['x'] + _0x4ecd2f['w'] - _0x77a9d5;
                const _0x4812ce = _0x72bf14 - _0x4ecd2f['y'];
                const _0xb90483 = _0x4ecd2f['y'] + _0x4ecd2f['h'] - _0x72bf14;
                const _0x46b5fe = Math['min'](_0x13052b, _0x561689, _0x4812ce, _0xb90483);
                if (_0x46b5fe === _0x13052b)
                    _0x77a9d5 = _0x4ecd2f['x'] - _0x3dd810;
                else if (_0x46b5fe === _0x561689)
                    _0x77a9d5 = _0x4ecd2f['x'] + _0x4ecd2f['w'] + _0x3dd810;
                else if (_0x46b5fe === _0x4812ce)
                    _0x72bf14 = _0x4ecd2f['y'] - _0x3dd810;
                else
                    _0x72bf14 = _0x4ecd2f['y'] + _0x4ecd2f['h'] + _0x3dd810;
            }
        }
        _0x235260['x'] = _0x77a9d5 - _0x235260['width'] / 0x2;
        _0x235260['y'] = _0x72bf14 - _0x235260['height'] / 0x2;
    }
}
function _0x88a384(_0x6918e5, _0x1677d1) {
    const _0x5068f0 = _0x280561['MAP']['layers']['find'](_0x3dc841 => _0x3dc841['name'] === 'trees');
    if (!_0x5068f0)
        return ![];
    const _0x2e77ac = Math['floor'](_0x6918e5 / _0x280561['MAP']['tileSize']);
    const _0x31d6b7 = Math['floor'](_0x1677d1 / _0x280561['MAP']['tileSize']);
    if (_0x2e77ac < 0x0 || _0x2e77ac >= _0x280561['MAP']['columns'] || _0x31d6b7 < 0x0 || _0x31d6b7 >= _0x280561['MAP']['rows'])
        return ![];
    return _0x5068f0['data'][_0x31d6b7 * _0x280561['MAP']['columns'] + _0x2e77ac] === 0xb;
}
let _0x547457 = null;
function _0x1842cd() {
    const _0x58f6d6 = _0x280561['MAP'];
    const _0x235988 = _0x58f6d6['layers']['find'](_0x7534 => _0x7534['name'] === 'floor2');
    const _0x4521f2 = _0x58f6d6['layers']['find'](_0x508aeb => _0x508aeb['name'] === 'walls');
    if (!_0x235988 || !_0x4521f2) {
        _0x547457 = null;
        return;
    }
    const _0x3e3302 = _0x58f6d6['columns'];
    const _0x213098 = _0x58f6d6['rows'];
    const _0xcc9372 = [];
    const _0x16170a = new Set();
    const _0x201b3d = new Set();
    for (let _0x3b54da = 0x0; _0x3b54da < _0x213098; _0x3b54da++) {
        for (let _0x267e40 = 0x0; _0x267e40 < _0x3e3302; _0x267e40++) {
            const _0x20d8a1 = _0x3b54da * _0x3e3302 + _0x267e40;
            const _0x10b17d = _0x235988['data'][_0x20d8a1];
            const _0x4684b7 = _0x4521f2['data'][_0x20d8a1];
            if (_0x10b17d === 0x2 && _0x4684b7 === 0x0) {
                _0xcc9372['push']({
                    'c': _0x267e40,
                    'r': _0x3b54da
                });
                _0x201b3d['add'](_0x267e40 + ',' + _0x3b54da);
            } else if (_0x4684b7 !== 0x0) {
                _0x16170a['add'](_0x267e40 + ',' + _0x3b54da);
            }
        }
    }
    const _0x591f98 = [
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
                c: _0x2494da,
                r: _0x283823
            } of _0xcc9372) {
        for (const [_0x4f1570, _0x3c6e94] of _0x591f98) {
            const _0x2a35e6 = _0x2494da + _0x4f1570, _0x52a2ff = _0x283823 + _0x3c6e94;
            const _0x2da4ac = _0x2a35e6 + ',' + _0x52a2ff;
            if (!_0x201b3d['has'](_0x2da4ac)) {
                _0x16170a['add'](_0x2da4ac);
            }
        }
    }
    _0x547457 = {
        'wallSet': _0x16170a,
        'floorTiles': _0xcc9372,
        'interiorSet': _0x201b3d
    };
}
function _0x598383() {
    const _0x179d00 = _0x280561['MAP']['layers']['find'](_0x1a64fd => _0x1a64fd['name'] === 'floor2');
    if (!_0x179d00)
        return ![];
    const _0x2eee25 = _0x235260['x'] + _0x235260['width'] / 0x2;
    const _0x37bb6c = _0x235260['y'] + _0x235260['height'] / 0x2;
    const _0x42932a = _0x280561['MAP']['tileSize'];
    const _0x4e981e = Math['floor'](_0x2eee25 / _0x42932a);
    const _0x94457e = Math['floor'](_0x37bb6c / _0x42932a);
    if (_0x4e981e < 0x0 || _0x4e981e >= _0x280561['MAP']['columns'] || _0x94457e < 0x0 || _0x94457e >= _0x280561['MAP']['rows'])
        return ![];
    const _0xb25f93 = _0x94457e * _0x280561['MAP']['columns'] + _0x4e981e;
    if (_0x179d00['data'][_0xb25f93] === 0x2)
        return !![];
    if (_0x280561['MAP']['doors'] && _0x280561['MAP']['doors'][_0xb25f93])
        return !![];
    const _0x512e65 = [
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
    for (const [_0x5ce0b6, _0x4a613b] of _0x512e65) {
        const _0x1782e2 = Math['floor']((_0x2eee25 + _0x5ce0b6) / _0x42932a);
        const _0x20f650 = Math['floor']((_0x37bb6c + _0x4a613b) / _0x42932a);
        if (_0x1782e2 >= 0x0 && _0x1782e2 < _0x280561['MAP']['columns'] && _0x20f650 >= 0x0 && _0x20f650 < _0x280561['MAP']['rows']) {
            const _0x47df50 = _0x20f650 * _0x280561['MAP']['columns'] + _0x1782e2;
            if (_0x179d00['data'][_0x47df50] === 0x2 || _0x280561['MAP']['doors'] && _0x280561['MAP']['doors'][_0x47df50]) {
                return !![];
            }
        }
    }
    return ![];
}
let _0x4624b7 = null, _0x27cbed = null;
function _0x3cc10f() {
    if (_0x235260['isDead']) {
        _0x280561['SHADOW']['polygon'] = null;
        _0x4624b7 = null;
        return;
    }
    const _0x257da2 = _0x280561['MAP'];
    const _0x1b929a = _0x280561['SHADOW'];
    const _0x2ce945 = _0x257da2['tileSize'];
    if (!_0x547457)
        _0x1842cd();
    if (!_0x547457) {
        _0x1b929a['polygon'] = null;
        _0x4624b7 = null;
        return;
    }
    const {
        wallSet: _0x1df591,
        floorTiles: _0x16865e
    } = _0x547457;
    if (_0x16865e['length'] === 0x0) {
        _0x1b929a['polygon'] = null;
        _0x4624b7 = null;
        return;
    }
    if (!_0x598383()) {
        _0x1b929a['polygon'] = null;
        _0x4624b7 = null;
        return;
    }
    const _0x320401 = _0x235260['x'] + _0x235260['width'] / 0x2;
    const _0x55363a = _0x235260['y'] + _0x235260['height'] / 0x2;
    if (_0x4624b7 !== null && _0x1b929a['polygon'] && Math['hypot'](_0x320401 - _0x4624b7, _0x55363a - _0x27cbed) < 0.5) {
        return;
    }
    _0x4624b7 = _0x320401;
    _0x27cbed = _0x55363a;
    const _0xc717f8 = Math['floor'](_0x320401 / _0x2ce945);
    const _0x1a10a8 = Math['floor'](_0x55363a / _0x2ce945);
    const _0x35d7d8 = Math['max'](0x0, _0xc717f8 - 0x8);
    const _0x3e7452 = Math['min'](_0x257da2['columns'] - 0x1, _0xc717f8 + 0x8);
    const _0x2f13c0 = Math['max'](0x0, _0x1a10a8 - 0x8);
    const _0x511ecb = Math['min'](_0x257da2['rows'] - 0x1, _0x1a10a8 + 0x8);
    const _0x242711 = [];
    const _0x173021 = [];
    for (let _0x251cea = _0x2f13c0; _0x251cea <= _0x511ecb; _0x251cea++) {
        for (let _0x479942 = _0x35d7d8; _0x479942 <= _0x3e7452; _0x479942++) {
            if (!_0x1df591['has'](_0x479942 + ',' + _0x251cea))
                continue;
            const _0x5829bc = _0x479942 * _0x2ce945;
            const _0x4dd19c = _0x251cea * _0x2ce945;
            const _0x365d31 = _0x5829bc + _0x2ce945;
            const _0x310df1 = _0x4dd19c + _0x2ce945;
            if (!_0x1df591['has'](_0x479942 + ',' + (_0x251cea - 0x1))) {
                _0x242711['push'](_0x5829bc, _0x4dd19c, _0x365d31, _0x4dd19c);
                _0x173021['push'](_0x5829bc, _0x4dd19c, _0x365d31, _0x4dd19c);
            }
            if (!_0x1df591['has'](_0x479942 + ',' + (_0x251cea + 0x1))) {
                _0x242711['push'](_0x5829bc, _0x310df1, _0x365d31, _0x310df1);
                _0x173021['push'](_0x5829bc, _0x310df1, _0x365d31, _0x310df1);
            }
            if (!_0x1df591['has'](_0x479942 - 0x1 + ',' + _0x251cea)) {
                _0x242711['push'](_0x5829bc, _0x4dd19c, _0x5829bc, _0x310df1);
                _0x173021['push'](_0x5829bc, _0x4dd19c, _0x5829bc, _0x310df1);
            }
            if (!_0x1df591['has'](_0x479942 + 0x1 + ',' + _0x251cea)) {
                _0x242711['push'](_0x365d31, _0x4dd19c, _0x365d31, _0x310df1);
                _0x173021['push'](_0x365d31, _0x4dd19c, _0x365d31, _0x310df1);
            }
        }
    }
    const _0x2ba1e5 = new Set();
    const _0x3cacae = [];
    const _0xcfca15 = 0.0001;
    for (let _0x33779e = 0x0; _0x33779e < _0x173021['length']; _0x33779e += 0x2) {
        const _0x3c7957 = _0x173021[_0x33779e];
        const _0xda8ae = _0x173021[_0x33779e + 0x1];
        const _0x411b32 = Math['atan2'](_0xda8ae - _0x55363a, _0x3c7957 - _0x320401);
        const _0x405ea5 = Math['round'](_0x411b32 * 0x9c40);
        if (!_0x2ba1e5['has'](_0x405ea5 - 0x1)) {
            _0x2ba1e5['add'](_0x405ea5 - 0x1);
            _0x3cacae['push'](_0x411b32 - _0xcfca15);
        }
        if (!_0x2ba1e5['has'](_0x405ea5)) {
            _0x2ba1e5['add'](_0x405ea5);
            _0x3cacae['push'](_0x411b32);
        }
        if (!_0x2ba1e5['has'](_0x405ea5 + 0x1)) {
            _0x2ba1e5['add'](_0x405ea5 + 0x1);
            _0x3cacae['push'](_0x411b32 + _0xcfca15);
        }
    }
    for (let _0x221bd0 = 0x0; _0x221bd0 < 0x10; _0x221bd0++) {
        const _0x897e23 = -Math['PI'] + _0x221bd0 * 0x2 * Math['PI'] / 0x10;
        _0x3cacae['push'](_0x897e23);
    }
    _0x3cacae['sort']((_0x40908e, _0x24546e) => _0x40908e - _0x24546e);
    const _0x40891a = 0xc * _0x2ce945;
    const _0x226210 = [];
    for (let _0x42a9b3 = 0x0; _0x42a9b3 < _0x3cacae['length']; _0x42a9b3++) {
        const _0x19256e = _0x3cacae[_0x42a9b3];
        const _0x49f2fc = Math['cos'](_0x19256e);
        const _0x2330dd = Math['sin'](_0x19256e);
        let _0x481430 = _0x40891a;
        for (let _0x44e89a = 0x0; _0x44e89a < _0x242711['length']; _0x44e89a += 0x4) {
            const _0x39591a = _0x242711[_0x44e89a], _0x187f26 = _0x242711[_0x44e89a + 0x1];
            const _0x1676cd = _0x242711[_0x44e89a + 0x2], _0x318ac6 = _0x242711[_0x44e89a + 0x3];
            const _0x36ad49 = _0x1676cd - _0x39591a;
            const _0x39280e = _0x318ac6 - _0x187f26;
            const _0x1015ab = _0x49f2fc * _0x39280e - _0x2330dd * _0x36ad49;
            if (Math['abs'](_0x1015ab) < 1e-9)
                continue;
            const _0x2d117a = _0x39591a - _0x320401;
            const _0x5d4aff = _0x187f26 - _0x55363a;
            const _0x5db5b7 = (_0x2d117a * _0x39280e - _0x5d4aff * _0x36ad49) / _0x1015ab;
            const _0x53e157 = (_0x2d117a * _0x2330dd - _0x5d4aff * _0x49f2fc) / _0x1015ab;
            if (_0x5db5b7 > 0x1 && _0x53e157 >= 0x0 && _0x53e157 <= 0x1 && _0x5db5b7 < _0x481430) {
                _0x481430 = _0x5db5b7;
            }
        }
        _0x226210['push'](_0x320401 + _0x49f2fc * _0x481430, _0x55363a + _0x2330dd * _0x481430);
    }
    _0x1b929a['polygon'] = _0x226210['length'] >= 0x6 ? _0x226210 : null;
}
function _0x5106e8(_0xb16dbe, _0x4f236d, _0x1da837) {
    if (_0x235260['isDead'])
        return;
    if (!_0x547457)
        _0x1842cd();
    if (!_0x547457)
        return;
    const {floorTiles: _0x30f734} = _0x547457;
    if (_0x30f734['length'] === 0x0)
        return;
    const _0x5593ba = _0x280561['SHADOW'];
    const _0x26fcbb = _0x280561['MAP']['tileSize'];
    const _0x23bd05 = _0x280561['CAMERA']['width'];
    const _0xe76fd5 = _0x280561['CAMERA']['height'];
    if (!_0x280561['SHADOW']['_buf'] || _0x280561['SHADOW']['_buf']['width'] !== _0x23bd05 || _0x280561['SHADOW']['_buf']['height'] !== _0xe76fd5) {
        _0x280561['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x280561['SHADOW']['_buf']['width'] = _0x23bd05;
        _0x280561['SHADOW']['_buf']['height'] = _0xe76fd5;
    }
    const _0x44403b = _0x280561['SHADOW']['_buf'];
    const _0x93e95c = _0x44403b['getContext']('2d');
    _0x93e95c['clearRect'](0x0, 0x0, _0x23bd05, _0xe76fd5);
    _0x93e95c['fillStyle'] = 'rgba(0,0,0,0.95)';
    _0x93e95c['beginPath']();
    for (const {
                c: _0x560a6d,
                r: _0x26a50d
            } of _0x30f734) {
        const _0x3a614e = Math['round'](_0x560a6d * _0x26fcbb - _0x4f236d), _0x248660 = Math['round'](_0x26a50d * _0x26fcbb - _0x1da837);
        if (_0x3a614e > _0x23bd05 || _0x248660 > _0xe76fd5 || _0x3a614e + _0x26fcbb < 0x0 || _0x248660 + _0x26fcbb < 0x0)
            continue;
        _0x93e95c['rect'](_0x3a614e, _0x248660, _0x26fcbb + 0x1, _0x26fcbb + 0x1);
    }
    _0x93e95c['fill']();
    if (_0x598383() && _0x5593ba['polygon'] && _0x5593ba['polygon']['length'] >= 0x6) {
        _0x93e95c['globalCompositeOperation'] = 'destination-out';
        _0x93e95c['fillStyle'] = 'rgba(0,0,0,1)';
        const _0x4f3e94 = _0x5593ba['polygon'];
        _0x93e95c['beginPath']();
        _0x93e95c['moveTo'](_0x4f3e94[0x0] - _0x4f236d, _0x4f3e94[0x1] - _0x1da837);
        for (let _0x3a20d1 = 0x2; _0x3a20d1 < _0x4f3e94['length']; _0x3a20d1 += 0x2) {
            _0x93e95c['lineTo'](_0x4f3e94[_0x3a20d1] - _0x4f236d, _0x4f3e94[_0x3a20d1 + 0x1] - _0x1da837);
        }
        _0x93e95c['closePath']();
        _0x93e95c['fill']();
        _0x93e95c['globalCompositeOperation'] = 'source-over';
    }
    _0xb16dbe['drawImage'](_0x44403b, 0x0, 0x0);
}
function _0x4eaed3(_0x4ffc59) {
    let _0x463b1c = 0x0, _0x443081 = 0x0;
    const _0x714a9f = _0x280561['INPUTS']['mouseX'] / _0x280561['SYSTEM']['viewScale'];
    const _0x346267 = _0x280561['INPUTS']['mouseY'] / _0x280561['SYSTEM']['viewScale'];
    const _0xe99fb3 = _0x235260['x'] - _0x280561['CAMERA']['x'] + _0x235260['width'] / 0x2;
    const _0x491eca = _0x235260['y'] - _0x280561['CAMERA']['y'] + _0x235260['height'] / 0x2;
    const _0x4ec81c = Math['atan2'](_0x346267 - _0x491eca, _0x714a9f - _0xe99fb3);
    if (_0x3e0d46 !== 0x0 || _0x5cf468 !== 0x0) {
        _0x463b1c = _0x3e0d46;
        _0x443081 = _0x5cf468;
    } else if (_0x55aa7a) {
        let _0x4312e1 = 0x0, _0x4c7cdc = 0x0;
        if (_0x280561['INPUTS']['keys']['w'] || _0x280561['INPUTS']['keys']['arrowup'])
            _0x4312e1 += 0x1;
        if (_0x280561['INPUTS']['keys']['s'] || _0x280561['INPUTS']['keys']['arrowdown'])
            _0x4312e1 -= 0x1;
        if (_0x280561['INPUTS']['keys']['d'] || _0x280561['INPUTS']['keys']['arrowright'])
            _0x4c7cdc += 0x1;
        if (_0x280561['INPUTS']['keys']['a'] || _0x280561['INPUTS']['keys']['arrowleft'])
            _0x4c7cdc -= 0x1;
        if (_0x4312e1 !== 0x0 || _0x4c7cdc !== 0x0) {
            const _0xc2f22b = _0x4ec81c + Math['atan2'](_0x4c7cdc, _0x4312e1);
            _0x463b1c = Math['cos'](_0xc2f22b);
            _0x443081 = Math['sin'](_0xc2f22b);
        }
    } else {
        if (_0x280561['INPUTS']['keys']['w'] || _0x280561['INPUTS']['keys']['arrowup'])
            _0x443081 -= 0x1;
        if (_0x280561['INPUTS']['keys']['s'] || _0x280561['INPUTS']['keys']['arrowdown'])
            _0x443081 += 0x1;
        if (_0x280561['INPUTS']['keys']['a'] || _0x280561['INPUTS']['keys']['arrowleft'])
            _0x463b1c -= 0x1;
        if (_0x280561['INPUTS']['keys']['d'] || _0x280561['INPUTS']['keys']['arrowright'])
            _0x463b1c += 0x1;
        const _0x1501e2 = _0x463b1c !== 0x0 || _0x443081 !== 0x0;
        if (_0x1501e2) {
            const _0x403e96 = Math['sqrt'](_0x463b1c * _0x463b1c + _0x443081 * _0x443081);
            _0x463b1c /= _0x403e96;
            _0x443081 /= _0x403e96;
        }
    }
    if (_0x280561['GAME_STATE'] === 'NIGHT' && (_0x1e85b8 === 'Skinwalker' || _0x1e85b8 === 'Blackmailer')) {
        if (_0x280561['NIGHT_ABILITY_OPEN'] || !_0x280561['CURRENT_TARGET']) {
            _0x463b1c = 0x0;
            _0x443081 = 0x0;
            _0x235260['vx'] = 0x0;
            _0x235260['vy'] = 0x0;
            _0x235260['x'] = _0x280561['MAP']['columns'] * _0x280561['MAP']['tileSize'] / 0x2 - _0x235260['width'] / 0x2;
            _0x235260['y'] = _0x280561['MAP']['rows'] * _0x280561['MAP']['tileSize'] / 0x2 - _0x235260['height'] / 0x2;
        }
    }
    const _0x505393 = _0x463b1c !== 0x0 || _0x443081 !== 0x0;
    const _0x4cbb97 = (_0x280561['INPUTS']['keys']['shift'] || _0x5c6c79 || _0x9373b3) && _0x505393;
    _0x235260['bopTimer'] = _0x4cbb97 ? _0x235260['bopTimer'] + _0x4ffc59 : 0x0;
    _0x235260['scale'] = 0x1 + (_0x235260['bopTimer'] > 0x0 ? Math['sin'](_0x235260['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x34ffbb = Math['pow'](0.001, _0x4ffc59);
    const _0x11ec84 = _0x4cbb97 ? 0x74a : 0x5d5;
    _0x235260['vx'] += _0x463b1c * _0x11ec84 * _0x4ffc59;
    _0x235260['vy'] += _0x443081 * _0x11ec84 * _0x4ffc59;
    _0x235260['vx'] *= _0x34ffbb;
    _0x235260['vy'] *= _0x34ffbb;
    _0x235260['x'] += _0x235260['vx'] * _0x4ffc59;
    _0x235260['y'] += _0x235260['vy'] * _0x4ffc59;
    for (let _0x1df4fa = 0x0; _0x1df4fa < 0x3; _0x1df4fa++)
        _0xecb46e();
    for (let _0x4cf971 = 0x0; _0x4cf971 < 0x2; _0x4cf971++)
        _0x16137c();
    for (let _0x83e7a6 = 0x0; _0x83e7a6 < 0x2; _0x83e7a6++)
        _0x26b56d();
    if (_0x235260['x'] < 0x0)
        _0x235260['x'] = 0x0;
    if (_0x235260['y'] < 0x0)
        _0x235260['y'] = 0x0;
    if (_0x235260['x'] + _0x235260['width'] > _0x280561['MAP']['columns'] * _0x280561['MAP']['tileSize'])
        _0x235260['x'] = _0x280561['MAP']['columns'] * _0x280561['MAP']['tileSize'] - _0x235260['width'];
    if (_0x235260['y'] + _0x235260['height'] > _0x280561['MAP']['rows'] * _0x280561['MAP']['tileSize'])
        _0x235260['y'] = _0x280561['MAP']['rows'] * _0x280561['MAP']['tileSize'] - _0x235260['height'];
    if (_0x2e5cf8) {
        _0x235260['angle'] = _0x5e8ba0 + Math['PI'] / 0x2;
    } else if (_0x3e0d46 !== 0x0 || _0x5cf468 !== 0x0) {
        _0x235260['angle'] = Math['atan2'](_0x5cf468, _0x3e0d46) + Math['PI'] / 0x2;
    } else if (!_0x3c50ff) {
        _0x235260['angle'] = _0x4ec81c + Math['PI'] / 0x2;
    }
    const _0x105f89 = _0x235260['x'] + _0x235260['width'] / 0x2 - _0x280561['CAMERA']['width'] / 0x2;
    const _0x590ee3 = _0x235260['y'] + _0x235260['height'] / 0x2 - _0x280561['CAMERA']['height'] / 0x2;
    if (_0x280561['CAMERA']['x'] === null || isNaN(_0x280561['CAMERA']['x']) || !isFinite(_0x280561['CAMERA']['x'])) {
        _0x280561['CAMERA']['x'] = _0x105f89;
        _0x280561['CAMERA']['y'] = _0x590ee3;
    } else {
        const _0x4dee95 = 0x1 - Math['exp'](-Math['max'](0x0, _0x4ffc59) * 0x28);
        _0x280561['CAMERA']['x'] += (_0x105f89 - _0x280561['CAMERA']['x']) * _0x4dee95;
        _0x280561['CAMERA']['y'] += (_0x590ee3 - _0x280561['CAMERA']['y']) * _0x4dee95;
    }
    for (const _0x506391 in _0x7eb8d8) {
        const _0x41e1fa = _0x7eb8d8[_0x506391];
        if (_0x41e1fa['renderX'] === undefined) {
            _0x41e1fa['renderX'] = _0x41e1fa['x'];
            _0x41e1fa['renderY'] = _0x41e1fa['y'];
            _0x41e1fa['renderAngle'] = _0x41e1fa['angle'] || 0x0;
        }
        const _0xa70212 = _0x41e1fa['x'] + (_0x41e1fa['vx'] || 0x0) * _0x4ffc59;
        const _0x1ae482 = _0x41e1fa['y'] + (_0x41e1fa['vy'] || 0x0) * _0x4ffc59;
        _0x41e1fa['x'] = _0xa70212;
        _0x41e1fa['y'] = _0x1ae482;
        const _0xac5107 = 0x1 - Math['exp'](-_0x4ffc59 * 0x12);
        const _0x344b35 = _0x41e1fa['x'] - _0x41e1fa['renderX'], _0x455ae3 = _0x41e1fa['y'] - _0x41e1fa['renderY'];
        const _0x35a6ca = Math['sqrt'](_0x344b35 * _0x344b35 + _0x455ae3 * _0x455ae3);
        const _0x3860f7 = 0xc8;
        if (_0x35a6ca > _0x3860f7) {
            _0x41e1fa['renderX'] = _0x41e1fa['x'] - _0x344b35 / _0x35a6ca * _0x3860f7;
            _0x41e1fa['renderY'] = _0x41e1fa['y'] - _0x455ae3 / _0x35a6ca * _0x3860f7;
        }
        _0x41e1fa['renderX'] += (_0x41e1fa['x'] - _0x41e1fa['renderX']) * _0xac5107;
        _0x41e1fa['renderY'] += (_0x41e1fa['y'] - _0x41e1fa['renderY']) * _0xac5107;
        let _0x24209e = (_0x41e1fa['angle'] || 0x0) - _0x41e1fa['renderAngle'];
        while (_0x24209e < -Math['PI'])
            _0x24209e += Math['PI'] * 0x2;
        while (_0x24209e > Math['PI'])
            _0x24209e -= Math['PI'] * 0x2;
        _0x41e1fa['renderAngle'] += _0x24209e * (0x1 - Math['exp'](-_0x4ffc59 * 0x14));
    }
    if (_0x280561['GAME_STATE'] === 'NIGHT') {
        _0x3d99b9 = Math['min'](0.6, _0x3d99b9 + _0x4ffc59 * 0.5);
    } else {
        _0x3d99b9 = Math['max'](0x0, _0x3d99b9 - _0x4ffc59 * 0.5);
    }
    if (_0xee2c95 > 0x0) {
        if (performance['now']() > _0x2f10dc) {
            _0xee2c95 = Math['max'](0x0, _0xee2c95 - _0x4ffc59 * 0x2);
        }
    }
    _0x3cc10f();
    _0x520ae6();
}
function _0x122277(_0x33754c, _0x2473ad, _0x1875fc, _0x3872ec, _0x3b3b0e = !![]) {
    _0x33754c['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x2db47a = _0x33754c['measureText'](_0x2473ad)['width'];
    const _0x28c89f = _0x2db47a + 0x18;
    const _0x3a94f0 = 0x1c;
    _0x33754c['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x33754c['beginPath']();
    if (_0x33754c['roundRect']) {
        _0x33754c['roundRect'](_0x1875fc - _0x28c89f / 0x2, _0x3872ec - _0x3a94f0, _0x28c89f, _0x3a94f0, 0x6);
    } else {
        _0x33754c['rect'](_0x1875fc - _0x28c89f / 0x2, _0x3872ec - _0x3a94f0, _0x28c89f, _0x3a94f0);
    }
    _0x33754c['fill']();
    if (_0x3b3b0e) {
        _0x33754c['beginPath']();
        _0x33754c['moveTo'](_0x1875fc - 0x6, _0x3872ec);
        _0x33754c['lineTo'](_0x1875fc + 0x6, _0x3872ec);
        _0x33754c['lineTo'](_0x1875fc, _0x3872ec + 0x6);
        _0x33754c['fill']();
    }
    _0x33754c['fillStyle'] = '#ffffff';
    _0x33754c['textAlign'] = 'center';
    _0x33754c['textBaseline'] = 'middle';
    _0x33754c['fillText'](_0x2473ad, _0x1875fc, _0x3872ec - _0x3a94f0 / 0x2 + 0x1);
}
function _0x500d3c(_0x4c4a54, _0x2c9911, _0x469797, _0x47c819) {
    if (!_0x2c9911 || _0x2c9911['length'] === 0x0)
        return;
    let _0x197fde = _0x47c819;
    for (let _0x2b8724 = 0x0; _0x2b8724 < _0x2c9911['length']; _0x2b8724++) {
        _0x122277(_0x4c4a54, _0x2c9911[_0x2b8724]['text'], _0x469797, _0x197fde, _0x2b8724 === 0x0);
        _0x197fde -= 0x24;
    }
}
function _0x5b517c() {
    if (!_0x280561['SYSTEM']['isReady'])
        return;
    if (_0x280561['MAP']['layers'] && _0x280561['MAP']['layers']['length'] > 0x0 && _0xd20432['complete'] && _0xd20432['naturalWidth'] > 0x0) {
        if (!_0x280561['MAP']['_prerenderedWithTileset'] || !_0x280561['MAP']['bgChunks'] || _0x280561['MAP']['bgChunks']['length'] === 0x0) {
            _0x71a26d();
        }
    }
    if (!_0x280561['MAP']['bgChunks'] || _0x280561['MAP']['bgChunks']['length'] === 0x0 || !_0x280561['MAP']['bgChunks'][0x0] || _0x280561['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x46cbe9['fillStyle'] = '#000000';
    _0x46cbe9['fillRect'](0x0, 0x0, _0x46a429['width'], _0x46a429['height']);
    _0x46cbe9['save']();
    try {
        _0x46cbe9['scale'](_0x280561['SYSTEM']['viewScale'], _0x280561['SYSTEM']['viewScale']);
        _0x46cbe9['imageSmoothingEnabled'] = ![];
        const _0x21cf05 = Math['floor'](_0x280561['CAMERA']['x'] || 0x0);
        const _0x28a028 = Math['floor'](_0x280561['CAMERA']['y'] || 0x0);
        const _0x5bad1c = Math['max'](0x0, Math['floor'](_0x21cf05 / _0x280561['MAP']['chunkSize']));
        const _0x543f5a = Math['min'](_0x280561['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x21cf05 + _0x280561['CAMERA']['width']) / _0x280561['MAP']['chunkSize']));
        const _0x3541e7 = Math['max'](0x0, Math['floor'](_0x28a028 / _0x280561['MAP']['chunkSize']));
        const _0x151266 = Math['min'](_0x280561['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x28a028 + _0x280561['CAMERA']['height']) / _0x280561['MAP']['chunkSize']));
        for (let _0x6935b1 = _0x3541e7; _0x6935b1 <= _0x151266; _0x6935b1++)
            for (let _0x4fb92b = _0x5bad1c; _0x4fb92b <= _0x543f5a; _0x4fb92b++) {
                const _0x293f78 = _0x4fb92b * _0x280561['MAP']['chunkSize'] - _0x21cf05;
                const _0x350595 = _0x6935b1 * _0x280561['MAP']['chunkSize'] - _0x28a028;
                _0x46cbe9['drawImage'](_0x280561['MAP']['bgChunks'][_0x6935b1][_0x4fb92b], _0x293f78, _0x350595, _0x280561['MAP']['chunkSize'] + 0x1, _0x280561['MAP']['chunkSize'] + 0x1);
            }
        const _0x144059 = _0x575c20('assets/blood\x20splatter.png');
        if (_0x4737d5 && _0x4737d5['length'] > 0x0) {
            for (const _0x1e3f22 of _0x4737d5) {
                const _0x1cd84b = _0x1e3f22['x'] - _0x21cf05;
                const _0x29cd66 = _0x1e3f22['y'] - _0x28a028;
                if (_0x144059['complete'] && _0x144059['naturalWidth'] > 0x0) {
                    _0x46cbe9['drawImage'](_0x144059, _0x1cd84b - 0x20, _0x29cd66 - 0x20, 0x40, 0x40);
                } else {
                    _0x46cbe9['fillStyle'] = 'rgba(160,\x200,\x200,\x200.75)';
                    _0x46cbe9['beginPath']();
                    _0x46cbe9['arc'](_0x1cd84b, _0x29cd66, 0x16, 0x0, Math['PI'] * 0x2);
                    _0x46cbe9['fill']();
                }
            }
        }
        const _0xcaad91 = _0x575c20('assets/blood.png');
        if (_0x2772f9 && _0x2772f9['length'] > 0x0) {
            for (const _0x469e49 of _0x2772f9) {
                const _0x439e5a = _0x469e49['x'] - _0x21cf05;
                const _0x13e81e = _0x469e49['y'] - _0x28a028;
                if (_0xcaad91['complete'] && _0xcaad91['naturalWidth'] > 0x0) {
                    _0x46cbe9['drawImage'](_0xcaad91, _0x439e5a - 0xc, _0x13e81e - 0xc, 0x18, 0x18);
                } else {
                    _0x46cbe9['fillStyle'] = 'rgba(180,\x200,\x200,\x200.8)';
                    _0x46cbe9['beginPath']();
                    _0x46cbe9['arc'](_0x439e5a, _0x13e81e, 0x5, 0x0, Math['PI'] * 0x2);
                    _0x46cbe9['fill']();
                }
            }
        }
        if (_0x22510c['complete'] && _0x22510c['naturalWidth'] > 0x0) {
            const _0x3b00da = _0x280561['MAP']['tileSize'];
            const _0x500962 = _0x3b00da * 0xa;
            const _0x28c444 = _0x280561['MAP']['columns'] / 0x2 * _0x3b00da - _0x500962 / 0x2 - _0x21cf05;
            const _0x70c0bd = _0x280561['MAP']['rows'] / 0x2 * _0x3b00da - _0x500962 / 0x2 - _0x28a028;
            _0x46cbe9['imageSmoothingEnabled'] = ![];
            _0x46cbe9['drawImage'](_0x22510c, _0x28c444, _0x70c0bd, _0x500962, _0x500962);
        }
        if (_0x332412['complete'] && _0x332412['naturalWidth'] > 0x0) {
            _0x280561['ENTITIES']['forEach'](_0x4cce5c => {
                if (_0x4cce5c['type'] !== 'table')
                    return;
                _0x46cbe9['save']();
                _0x46cbe9['imageSmoothingEnabled'] = ![];
                const _0x34ae98 = _0x332412['naturalWidth'] >= _0x332412['naturalHeight'];
                const _0x24197c = _0x4cce5c['w'] >= _0x4cce5c['h'];
                if (_0x34ae98 === _0x24197c) {
                    _0x46cbe9['drawImage'](_0x332412, _0x4cce5c['x'] - _0x21cf05, _0x4cce5c['y'] - _0x28a028, _0x4cce5c['w'], _0x4cce5c['h']);
                } else {
                    _0x46cbe9['translate'](_0x4cce5c['x'] - _0x21cf05 + _0x4cce5c['w'] / 0x2, _0x4cce5c['y'] - _0x28a028 + _0x4cce5c['h'] / 0x2);
                    _0x46cbe9['rotate'](Math['PI'] / 0x2);
                    _0x46cbe9['drawImage'](_0x332412, -_0x4cce5c['h'] / 0x2, -_0x4cce5c['w'] / 0x2, _0x4cce5c['h'], _0x4cce5c['w']);
                }
                _0x46cbe9['restore']();
            });
        } else {
            _0x280561['ENTITIES']['forEach'](_0x246f6f => {
                if (_0x246f6f['type'] !== 'table')
                    return;
                _0x46cbe9['save']();
                _0x46cbe9['fillStyle'] = '#6b4423';
                _0x46cbe9['fillRect'](_0x246f6f['x'] - _0x21cf05, _0x246f6f['y'] - _0x28a028, _0x246f6f['w'], _0x246f6f['h']);
                _0x46cbe9['strokeStyle'] = '#422810';
                _0x46cbe9['lineWidth'] = 0x3;
                _0x46cbe9['strokeRect'](_0x246f6f['x'] - _0x21cf05 + 0x1, _0x246f6f['y'] - _0x28a028 + 0x1, _0x246f6f['w'] - 0x2, _0x246f6f['h'] - 0x2);
                _0x46cbe9['fillStyle'] = '#82532a';
                _0x46cbe9['fillRect'](_0x246f6f['x'] - _0x21cf05 + 0x4, _0x246f6f['y'] - _0x28a028 + 0x4, _0x246f6f['w'] - 0x8, _0x246f6f['h'] - 0x8);
                _0x46cbe9['restore']();
            });
        }
        if (_0x101e3a) {
            if (_0x280561['MAP']['wallChunks'] && _0x280561['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x5a262b = _0x3541e7; _0x5a262b <= _0x151266; _0x5a262b++) {
                    for (let _0x3ce50d = _0x5bad1c; _0x3ce50d <= _0x543f5a; _0x3ce50d++) {
                        if (!_0x280561['MAP']['wallChunks'][_0x5a262b] || !_0x280561['MAP']['wallChunks'][_0x5a262b][_0x3ce50d])
                            continue;
                        const _0x39f28e = _0x3ce50d * _0x280561['MAP']['chunkSize'] - _0x21cf05;
                        const _0x2a8c85 = _0x5a262b * _0x280561['MAP']['chunkSize'] - _0x28a028;
                        _0x46cbe9['drawImage'](_0x280561['MAP']['wallChunks'][_0x5a262b][_0x3ce50d], _0x39f28e, _0x2a8c85, _0x280561['MAP']['chunkSize'] + 0x1, _0x280561['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x438ba7 = _0x3541e7; _0x438ba7 <= _0x151266; _0x438ba7++) {
                for (let _0x30db3f = _0x5bad1c; _0x30db3f <= _0x543f5a; _0x30db3f++) {
                    const _0x3ae000 = _0x30db3f * _0x280561['MAP']['chunkSize'] - _0x21cf05;
                    const _0x273221 = _0x438ba7 * _0x280561['MAP']['chunkSize'] - _0x28a028;
                    _0x46cbe9['drawImage'](_0x280561['MAP']['fgChunks'][_0x438ba7][_0x30db3f], _0x3ae000, _0x273221, _0x280561['MAP']['chunkSize'] + 0x1, _0x280561['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x1483a1 = _0x280561['GAME_STATE'] === 'NIGHT' && (_0x1e85b8 === 'Skinwalker' || _0x1e85b8 === 'Blackmailer') && !_0x235260['isDead'];
        const _0x48bda3 = _0x235260['x'] - _0x21cf05 + _0x235260['width'] / 0x2;
        const _0x29cd6e = _0x235260['y'] - _0x28a028 + _0x235260['height'] / 0x2;
        const _0x42f188 = _0x235260['width'] * _0x235260['scale'] * 1.3;
        const _0x49f6d4 = _0x235260['height'] * _0x235260['scale'] * 1.3;
        const _0x399660 = _0x575c20('assets/arrow.png');
        const _0x27e082 = _0x575c20('assets/tape.png');
        for (const _0x4dd976 in _0x7eb8d8) {
            const _0x1434dc = _0x7eb8d8[_0x4dd976];
            if (_0x1434dc['isDead'])
                continue;
            const _0x11828d = parseInt(_0x4dd976);
            const _0x97747a = (_0x1434dc['renderX'] ?? _0x1434dc['x']) - _0x21cf05 + _0x1434dc['width'] / 0x2;
            const _0x1f2587 = (_0x1434dc['renderY'] ?? _0x1434dc['y']) - _0x28a028 + _0x1434dc['height'] / 0x2;
            const _0x3e795a = Math['min'](0x2, Math['max'](0.3, _0x1434dc['scale'] || 0x1));
            const _0x675326 = _0x1434dc['width'] * _0x3e795a * 1.3;
            const _0x3050ab = _0x1434dc['height'] * _0x3e795a * 1.3;
            _0x46cbe9['save']();
            try {
                _0x46cbe9['translate'](_0x97747a, _0x1f2587);
                _0x46cbe9['rotate'](_0x1434dc['renderAngle'] ?? 0x0);
                if (_0x1434dc['isDark'])
                    _0x46cbe9['filter'] = 'brightness(0)';
                _0x34063b(_0x46cbe9, _0x1434dc['body'], _0x1434dc['eyes'], _0x675326, _0x3050ab);
                if (_0x47a8d1['has'](_0x11828d) && _0x59a170['complete'] && _0x59a170['naturalWidth'] > 0x0) {
                    _0x46cbe9['drawImage'](_0x59a170, -_0x675326 / 0x2, -_0x3050ab / 0x2, _0x675326, _0x3050ab);
                }
                if (_0x1434dc['hasArrow'] && _0x280561['GAME_STATE'] === 'NIGHT' && _0x399660['complete'] && _0x399660['naturalWidth'] > 0x0) {
                    _0x46cbe9['drawImage'](_0x399660, -_0x675326 / 0x2, -_0x3050ab / 0x2, _0x675326, _0x3050ab);
                }
                if ((_0x1434dc['isBlackmailed'] || _0x46df81['has'](_0x11828d)) && _0x27e082['complete'] && _0x27e082['naturalWidth'] > 0x0) {
                    _0x46cbe9['drawImage'](_0x27e082, -_0x675326 / 0x2, -_0x3050ab / 0x2, _0x675326, _0x3050ab);
                }
                if (_0x1434dc['isDark'])
                    _0x46cbe9['filter'] = 'none';
            } finally {
                _0x46cbe9['restore']();
            }
            if (!_0x88a384((_0x1434dc['renderX'] ?? _0x1434dc['x']) + _0x1434dc['width'] / 0x2, (_0x1434dc['renderY'] ?? _0x1434dc['y']) + _0x1434dc['height'] / 0x2)) {
                _0x46cbe9['textAlign'] = 'center';
                _0x46cbe9['lineJoin'] = 'round';
                _0x46cbe9['lineWidth'] = 0x3;
                _0x46cbe9['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x46cbe9['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x2e8cf4 = '#ffffff';
                if (_0x1434dc['isBlackmailed'] || _0x46df81['has'](_0x11828d)) {
                    _0x2e8cf4 = '#ff4444';
                } else if (_0x47a8d1['has'](_0x11828d)) {
                    _0x2e8cf4 = '#cc88ff';
                }
                _0x46cbe9['fillStyle'] = _0x2e8cf4;
                const _0x1ea6e8 = _0x1434dc['isDark'] ? '???' : _0x1434dc['name'] + (_0x1434dc['isOwner'] ? '\x20[🗝️]' : '');
                _0x46cbe9['strokeText'](_0x1ea6e8, _0x97747a, _0x1f2587 - _0x3050ab / 0x2 - 0x10);
                _0x46cbe9['fillText'](_0x1ea6e8, _0x97747a, _0x1f2587 - _0x3050ab / 0x2 - 0x10);
            }
        }
        if (!_0x235260['isDead']) {
            _0x46cbe9['save']();
            try {
                _0x46cbe9['translate'](_0x48bda3, _0x29cd6e);
                _0x46cbe9['rotate'](_0x235260['angle']);
                if (_0x1483a1)
                    _0x46cbe9['filter'] = 'brightness(0)';
                _0x34063b(_0x46cbe9, _0x5abe1a, _0x450ab9, _0x42f188, _0x49f6d4);
                if (_0x47a8d1['has'](_0xc0aaef) && _0x59a170['complete'] && _0x59a170['naturalWidth'] > 0x0) {
                    _0x46cbe9['drawImage'](_0x59a170, -_0x42f188 / 0x2, -_0x49f6d4 / 0x2, _0x42f188, _0x49f6d4);
                }
                if (_0x235260['hasArrow'] && _0x280561['GAME_STATE'] === 'NIGHT' && _0x399660['complete'] && _0x399660['naturalWidth'] > 0x0) {
                    _0x46cbe9['drawImage'](_0x399660, -_0x42f188 / 0x2, -_0x49f6d4 / 0x2, _0x42f188, _0x49f6d4);
                }
                if (_0x46df81['has'](_0xc0aaef) && _0x27e082['complete'] && _0x27e082['naturalWidth'] > 0x0) {
                    _0x46cbe9['drawImage'](_0x27e082, -_0x42f188 / 0x2, -_0x49f6d4 / 0x2, _0x42f188, _0x49f6d4);
                }
                if (_0x1483a1)
                    _0x46cbe9['filter'] = 'none';
            } finally {
                _0x46cbe9['restore']();
            }
            if (!_0x88a384(_0x235260['x'] + _0x235260['width'] / 0x2, _0x235260['y'] + _0x235260['height'] / 0x2)) {
                _0x46cbe9['textAlign'] = 'center';
                _0x46cbe9['lineJoin'] = 'round';
                _0x46cbe9['lineWidth'] = 0x3;
                _0x46cbe9['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x46cbe9['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x3310cb = '#ffffff';
                if (_0x46df81['has'](_0xc0aaef)) {
                    _0x3310cb = '#ff4444';
                } else if (_0x47a8d1['has'](_0xc0aaef)) {
                    _0x3310cb = '#cc88ff';
                }
                _0x46cbe9['fillStyle'] = _0x3310cb;
                const _0x39c23a = _0x1483a1 ? '???' : _0x19e4f6 + (_0x2da1e6 ? '\x20[🗝️]' : '');
                _0x46cbe9['strokeText'](_0x39c23a, _0x48bda3, _0x29cd6e - _0x49f6d4 / 0x2 - 0x10);
                _0x46cbe9['fillText'](_0x39c23a, _0x48bda3, _0x29cd6e - _0x49f6d4 / 0x2 - 0x10);
            }
        }
        if (_0x280561['MAP']['wallChunks'] && _0x280561['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x36b457 = _0x3541e7; _0x36b457 <= _0x151266; _0x36b457++)
                for (let _0x217ef2 = _0x5bad1c; _0x217ef2 <= _0x543f5a; _0x217ef2++) {
                    if (!_0x280561['MAP']['wallChunks'][_0x36b457] || !_0x280561['MAP']['wallChunks'][_0x36b457][_0x217ef2])
                        continue;
                    const _0x41f94f = _0x217ef2 * _0x280561['MAP']['chunkSize'] - _0x21cf05;
                    const _0x112a17 = _0x36b457 * _0x280561['MAP']['chunkSize'] - _0x28a028;
                    _0x46cbe9['drawImage'](_0x280561['MAP']['wallChunks'][_0x36b457][_0x217ef2], _0x41f94f, _0x112a17, _0x280561['MAP']['chunkSize'] + 0x1, _0x280561['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x4f1d95 of _0x280561['ENTITIES']) {
            if (_0x4f1d95['type'] !== 'npc')
                continue;
            const _0x8b30b4 = _0x4f1d95['x'] - _0x21cf05 + _0x4f1d95['w'] / 0x2;
            const _0x26ca66 = _0x4f1d95['y'] - _0x28a028 + _0x4f1d95['h'] / 0x2;
            const _0xb7e145 = _0x4f1d95['w'];
            const _0xf0093e = _0x4f1d95['h'];
            _0x46cbe9['save']();
            _0x46cbe9['translate'](_0x8b30b4, _0x26ca66);
            _0x46cbe9['rotate'](_0x4f1d95['angle'] !== undefined ? _0x4f1d95['angle'] : 0x0);
            _0x34063b(_0x46cbe9, _0x4f1d95['body'] || 'yanito932.png', _0x4f1d95['eyes'], _0xb7e145, _0xf0093e);
            _0x46cbe9['restore']();
            _0x46cbe9['textAlign'] = 'center';
            _0x46cbe9['lineJoin'] = 'round';
            _0x46cbe9['lineWidth'] = 0x3;
            _0x46cbe9['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x46cbe9['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
            _0x46cbe9['fillStyle'] = '#aaaaaa';
            _0x46cbe9['strokeText'](_0x4f1d95['name'] || 'NPC', _0x8b30b4, _0x26ca66 - _0xf0093e / 0x2 - 0x10);
            _0x46cbe9['fillText'](_0x4f1d95['name'] || 'NPC', _0x8b30b4, _0x26ca66 - _0xf0093e / 0x2 - 0x10);
        }
        if (_0x235260['isDead']) {
            for (const _0x53cf23 in _0x7eb8d8) {
                const _0x540942 = _0x7eb8d8[_0x53cf23];
                if (!_0x540942['isDead'])
                    continue;
                const _0x365f7f = (_0x540942['renderX'] ?? _0x540942['x']) - _0x21cf05 + _0x540942['width'] / 0x2;
                const _0x26ec22 = (_0x540942['renderY'] ?? _0x540942['y']) - _0x28a028 + _0x540942['height'] / 0x2;
                const _0x36106b = _0x540942['width'] * (_0x540942['scale'] || 0x1) * 1.3;
                const _0x4485b3 = _0x540942['height'] * (_0x540942['scale'] || 0x1) * 1.3;
                _0x46cbe9['save']();
                try {
                    _0x46cbe9['translate'](_0x365f7f, _0x26ec22);
                    _0x46cbe9['rotate'](_0x540942['renderAngle'] ?? 0x0);
                    _0x46cbe9['globalAlpha'] = 0.3;
                    _0x34063b(_0x46cbe9, _0x540942['body'], _0x540942['eyes'], _0x36106b, _0x4485b3);
                } finally {
                    _0x46cbe9['restore']();
                }
                if (!_0x88a384((_0x540942['renderX'] ?? _0x540942['x']) + _0x540942['width'] / 0x2, (_0x540942['renderY'] ?? _0x540942['y']) + _0x540942['height'] / 0x2)) {
                    _0x46cbe9['save']();
                    _0x46cbe9['globalAlpha'] = 0.3;
                    _0x46cbe9['textAlign'] = 'center';
                    _0x46cbe9['lineJoin'] = 'round';
                    _0x46cbe9['lineWidth'] = 0x3;
                    _0x46cbe9['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x46cbe9['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                    _0x46cbe9['fillStyle'] = '#ffffff';
                    const _0x5e7172 = _0x540942['name'] + (_0x540942['isOwner'] ? '\x20[🗝️]' : '');
                    _0x46cbe9['strokeText'](_0x5e7172, _0x365f7f, _0x26ec22 - _0x4485b3 / 0x2 - 0x10);
                    _0x46cbe9['fillText'](_0x5e7172, _0x365f7f, _0x26ec22 - _0x4485b3 / 0x2 - 0x10);
                    _0x46cbe9['restore']();
                }
            }
            _0x46cbe9['save']();
            try {
                _0x46cbe9['translate'](_0x48bda3, _0x29cd6e);
                _0x46cbe9['rotate'](_0x235260['angle']);
                _0x46cbe9['globalAlpha'] = 0.3;
                _0x34063b(_0x46cbe9, _0x5abe1a, _0x450ab9, _0x42f188, _0x49f6d4);
            } finally {
                _0x46cbe9['restore']();
            }
            if (!_0x88a384(_0x235260['x'] + _0x235260['width'] / 0x2, _0x235260['y'] + _0x235260['height'] / 0x2)) {
                _0x46cbe9['save']();
                _0x46cbe9['globalAlpha'] = 0.3;
                _0x46cbe9['textAlign'] = 'center';
                _0x46cbe9['lineJoin'] = 'round';
                _0x46cbe9['lineWidth'] = 0x3;
                _0x46cbe9['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x46cbe9['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                _0x46cbe9['fillStyle'] = '#ffffff';
                const _0x3b2e45 = _0x19e4f6 + (_0x2da1e6 ? '\x20[🗝️]' : '');
                _0x46cbe9['strokeText'](_0x3b2e45, _0x48bda3, _0x29cd6e - _0x49f6d4 / 0x2 - 0x10);
                _0x46cbe9['fillText'](_0x3b2e45, _0x48bda3, _0x29cd6e - _0x49f6d4 / 0x2 - 0x10);
                _0x46cbe9['restore']();
            }
        }
        for (let _0xfb91a0 = _0x3541e7; _0xfb91a0 <= _0x151266; _0xfb91a0++)
            for (let _0x29b690 = _0x5bad1c; _0x29b690 <= _0x543f5a; _0x29b690++) {
                const _0x1b6117 = _0x29b690 * _0x280561['MAP']['chunkSize'] - _0x21cf05;
                const _0x4cd0cd = _0xfb91a0 * _0x280561['MAP']['chunkSize'] - _0x28a028;
                _0x46cbe9['drawImage'](_0x280561['MAP']['fgChunks'][_0xfb91a0][_0x29b690], _0x1b6117, _0x4cd0cd, _0x280561['MAP']['chunkSize'] + 0x1, _0x280561['MAP']['chunkSize'] + 0x1);
            }
        if (_0x280561['EDITOR']['enabled'] && _0x280561['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x1875af = _0x280561['INPUTS']['mouseX'] / _0x280561['SYSTEM']['viewScale'] + _0x280561['CAMERA']['x'];
            const _0x894332 = _0x280561['INPUTS']['mouseY'] / _0x280561['SYSTEM']['viewScale'] + _0x280561['CAMERA']['y'];
            const _0x1d63bf = Math['floor'](_0x1875af / _0x280561['MAP']['tileSize']);
            const _0x177a6d = Math['floor'](_0x894332 / _0x280561['MAP']['tileSize']);
            if (_0x1d63bf >= 0x0 && _0x1d63bf < _0x280561['MAP']['columns'] && _0x177a6d >= 0x0 && _0x177a6d < _0x280561['MAP']['rows']) {
                const _0x3d2593 = _0x1d63bf * _0x280561['MAP']['tileSize'] - _0x21cf05;
                const _0x4cd1ef = _0x177a6d * _0x280561['MAP']['tileSize'] - _0x28a028;
                _0x46cbe9['save']();
                _0x46cbe9['globalAlpha'] = 0.5;
                if (_0x280561['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x498434 = _0x280561['EDITOR']['selectedTileGid'] - 0x1;
                    _0x46cbe9['drawImage'](_0xd20432, _0x498434 % _0x280561['MAP']['tilesetCols'] * _0x280561['MAP']['tileSize'], Math['floor'](_0x498434 / _0x280561['MAP']['tilesetCols']) * _0x280561['MAP']['tileSize'], _0x280561['MAP']['tileSize'], _0x280561['MAP']['tileSize'], _0x3d2593, _0x4cd1ef, _0x280561['MAP']['tileSize'], _0x280561['MAP']['tileSize']);
                } else {
                    _0x46cbe9['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x46cbe9['fillRect'](_0x3d2593, _0x4cd1ef, _0x280561['MAP']['tileSize'], _0x280561['MAP']['tileSize']);
                }
                _0x46cbe9['restore']();
            }
        }
        _0x5106e8(_0x46cbe9, _0x21cf05, _0x28a028);
        if (_0x3d99b9 > 0x0) {
            _0x46cbe9['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x3d99b9 + ')';
            _0x46cbe9['fillRect'](0x0, 0x0, _0x280561['CAMERA']['width'], _0x280561['CAMERA']['height']);
        }
        for (const _0x2d22fd in _0x7eb8d8) {
            const _0x2208e0 = _0x7eb8d8[_0x2d22fd];
            if (_0x2208e0['isDead'] && !_0x235260['isDead'])
                continue;
            const _0x3e3465 = (_0x2208e0['renderX'] ?? _0x2208e0['x']) - _0x21cf05 + _0x2208e0['width'] / 0x2;
            const _0x4e15e3 = (_0x2208e0['renderY'] ?? _0x2208e0['y']) - _0x28a028 + _0x2208e0['height'] / 0x2;
            _0x500d3c(_0x46cbe9, _0x2208e0['chats'], _0x3e3465, _0x4e15e3 - _0x2208e0['height'] / 0x2 - 0x20);
        }
        _0x500d3c(_0x46cbe9, _0x235260['chats'], _0x48bda3, _0x29cd6e - _0x235260['height'] / 0x2 - 0x20);
        if (_0xee2c95 > 0x0) {
            _0x46cbe9['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0xee2c95 + ')';
            _0x46cbe9['fillRect'](0x0, 0x0, _0x280561['CAMERA']['width'], _0x280561['CAMERA']['height']);
        }
    } finally {
        _0x46cbe9['restore']();
    }
}
function _0x309c08(_0x24fb26) {
    if (!_0x280561['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x309c08);
    let _0x15caa9 = (_0x24fb26 - _0x280561['SYSTEM']['lastTime']) / 0x3e8;
    _0x280561['SYSTEM']['lastTime'] = _0x24fb26;
    if (_0x15caa9 > 0.1)
        _0x15caa9 = 0.1;
    if (_0x15caa9 < 0x0 || isNaN(_0x15caa9))
        _0x15caa9 = 0.016;
    if (_0x101e3a) {
        _0xfe803c(_0x15caa9);
        _0x5b517c();
        return;
    }
    if (!_0xc0aaef)
        return;
    _0x4eaed3(_0x15caa9);
    _0x2bbafa['tick'](_0x24fb26);
    _0x5b517c();
}
function _0x71a26d() {
    if (_0xd20432['complete'] && _0xd20432['naturalWidth'] > 0x0) {
        _0x280561['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x5a1923 = Math['ceil'](_0x280561['MAP']['columns'] * _0x280561['MAP']['tileSize'] / _0x280561['MAP']['chunkSize']);
    const _0x5993db = Math['ceil'](_0x280561['MAP']['rows'] * _0x280561['MAP']['tileSize'] / _0x280561['MAP']['chunkSize']);
    _0x280561['MAP']['bgChunks'] = [];
    _0x280561['MAP']['fgChunks'] = [];
    _0x280561['MAP']['wallChunks'] = [];
    for (let _0x424410 = 0x0; _0x424410 < _0x5993db; _0x424410++) {
        _0x280561['MAP']['bgChunks'][_0x424410] = [];
        _0x280561['MAP']['fgChunks'][_0x424410] = [];
        _0x280561['MAP']['wallChunks'][_0x424410] = [];
        for (let _0xb1f82c = 0x0; _0xb1f82c < _0x5a1923; _0xb1f82c++) {
            const _0x4cc3ad = document['createElement']('canvas');
            _0x4cc3ad['width'] = _0x4cc3ad['height'] = _0x280561['MAP']['chunkSize'];
            const _0x2e928b = document['createElement']('canvas');
            _0x2e928b['width'] = _0x2e928b['height'] = _0x280561['MAP']['chunkSize'];
            const _0x44c430 = document['createElement']('canvas');
            _0x44c430['width'] = _0x44c430['height'] = _0x280561['MAP']['chunkSize'];
            _0x280561['MAP']['bgChunks'][_0x424410][_0xb1f82c] = _0x4cc3ad;
            _0x280561['MAP']['fgChunks'][_0x424410][_0xb1f82c] = _0x2e928b;
            _0x280561['MAP']['wallChunks'][_0x424410][_0xb1f82c] = _0x44c430;
            _0x556264(_0xb1f82c, _0x424410);
        }
    }
}
function _0x556264(_0x4beb39, _0x37cd06) {
    const _0x4c7a0c = _0x280561['MAP']['bgChunks'][_0x37cd06][_0x4beb39]['getContext']('2d', { 'alpha': !![] });
    const _0x1f3ffe = _0x280561['MAP']['fgChunks'][_0x37cd06][_0x4beb39]['getContext']('2d', { 'alpha': !![] });
    const _0x20b3a9 = _0x280561['MAP']['wallChunks'][_0x37cd06] && _0x280561['MAP']['wallChunks'][_0x37cd06][_0x4beb39] ? _0x280561['MAP']['wallChunks'][_0x37cd06][_0x4beb39]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x4c7a0c['imageSmoothingEnabled'] = _0x1f3ffe['imageSmoothingEnabled'] = ![];
    if (_0x20b3a9)
        _0x20b3a9['imageSmoothingEnabled'] = ![];
    _0x4c7a0c['clearRect'](0x0, 0x0, _0x280561['MAP']['chunkSize'], _0x280561['MAP']['chunkSize']);
    _0x1f3ffe['clearRect'](0x0, 0x0, _0x280561['MAP']['chunkSize'], _0x280561['MAP']['chunkSize']);
    if (_0x20b3a9)
        _0x20b3a9['clearRect'](0x0, 0x0, _0x280561['MAP']['chunkSize'], _0x280561['MAP']['chunkSize']);
    const _0x2a135e = Math['floor'](_0x4beb39 * _0x280561['MAP']['chunkSize'] / _0x280561['MAP']['tileSize']);
    const _0x384e12 = Math['ceil']((_0x4beb39 + 0x1) * _0x280561['MAP']['chunkSize'] / _0x280561['MAP']['tileSize']);
    const _0x3d8244 = Math['floor'](_0x37cd06 * _0x280561['MAP']['chunkSize'] / _0x280561['MAP']['tileSize']);
    const _0x3f9c87 = Math['ceil']((_0x37cd06 + 0x1) * _0x280561['MAP']['chunkSize'] / _0x280561['MAP']['tileSize']);
    const _0x2e85fd = 0.5;
    const _0x335396 = _0x280561['MAP']['tileSize'] - _0x2e85fd * 0x2;
    _0x280561['MAP']['layers']['forEach'](_0x46ee5e => {
        const _0x370ad5 = _0x46ee5e['name'] === 'walls';
        const _0x5a6cbe = _0x46ee5e['name'] === 'trees' ? _0x1f3ffe : _0x370ad5 ? _0x20b3a9 || _0x4c7a0c : _0x4c7a0c;
        for (let _0x5675f6 = Math['max'](0x0, _0x3d8244); _0x5675f6 < Math['min'](_0x280561['MAP']['rows'], _0x3f9c87); _0x5675f6++) {
            for (let _0x38ea1b = Math['max'](0x0, _0x2a135e); _0x38ea1b < Math['min'](_0x280561['MAP']['columns'], _0x384e12); _0x38ea1b++) {
                let _0x54ee71 = _0x46ee5e['data'][_0x5675f6 * _0x280561['MAP']['columns'] + _0x38ea1b];
                if (_0x46ee5e['name'] === 'floor2' && _0x280561['MAP']['doors'] && _0x280561['MAP']['doors'][_0x5675f6 * _0x280561['MAP']['columns'] + _0x38ea1b]) {
                    _0x54ee71 = 0x2;
                }
                if (_0x54ee71 > 0x0) {
                    const _0xbb5d65 = _0x54ee71 - 0x1;
                    const _0x2da68b = _0xbb5d65 % _0x280561['MAP']['tilesetCols'] * _0x280561['MAP']['tileSize'] + _0x2e85fd;
                    const _0xc22bc5 = Math['floor'](_0xbb5d65 / _0x280561['MAP']['tilesetCols']) * _0x280561['MAP']['tileSize'] + _0x2e85fd;
                    const _0x177f32 = _0x38ea1b * _0x280561['MAP']['tileSize'] - _0x4beb39 * _0x280561['MAP']['chunkSize'];
                    const _0x1694dc = _0x5675f6 * _0x280561['MAP']['tileSize'] - _0x37cd06 * _0x280561['MAP']['chunkSize'];
                    if (_0x54ee71 === 0x4) {
                        const _0x31e5c8 = 0x1;
                        const _0x125c9f = _0x31e5c8 % _0x280561['MAP']['tilesetCols'] * _0x280561['MAP']['tileSize'] + _0x2e85fd;
                        const _0x16a9c2 = Math['floor'](_0x31e5c8 / _0x280561['MAP']['tilesetCols']) * _0x280561['MAP']['tileSize'] + _0x2e85fd;
                        _0x4c7a0c['drawImage'](_0xd20432, _0x125c9f, _0x16a9c2, _0x335396, _0x335396, _0x177f32, _0x1694dc, _0x280561['MAP']['tileSize'], _0x280561['MAP']['tileSize']);
                        let _0x3cd9f2 = _0x280561['MAP']['doors'] ? _0x280561['MAP']['doors'][_0x5675f6 * _0x280561['MAP']['columns'] + _0x38ea1b] : null;
                        if (!_0x3cd9f2) {
                            const _0x4d1760 = _0x280561['MAP']['layers']['find'](_0x2ca367 => _0x2ca367['name'] === 'walls');
                            const _0x326f98 = _0x5675f6 > 0x0 && _0x4d1760 && _0x4d1760['data'][(_0x5675f6 - 0x1) * _0x280561['MAP']['columns'] + _0x38ea1b] > 0x0;
                            const _0x13c357 = _0x5675f6 < _0x280561['MAP']['rows'] - 0x1 && _0x4d1760 && _0x4d1760['data'][(_0x5675f6 + 0x1) * _0x280561['MAP']['columns'] + _0x38ea1b] > 0x0;
                            const _0x4f4d3e = _0x38ea1b > 0x0 && _0x4d1760 && _0x4d1760['data'][_0x5675f6 * _0x280561['MAP']['columns'] + _0x38ea1b - 0x1] > 0x0;
                            const _0x10558a = _0x38ea1b < _0x280561['MAP']['columns'] - 0x1 && _0x4d1760 && _0x4d1760['data'][_0x5675f6 * _0x280561['MAP']['columns'] + _0x38ea1b + 0x1] > 0x0;
                            if (_0x4f4d3e && _0x10558a)
                                _0x3cd9f2 = _0x5675f6 < _0x280561['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x326f98 && _0x13c357)
                                _0x3cd9f2 = _0x38ea1b < _0x280561['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0xb94b47 = 0x0;
                        if (_0x3cd9f2 === 'bottom')
                            _0xb94b47 = Math['PI'] / 0x2;
                        else if (_0x3cd9f2 === 'left')
                            _0xb94b47 = Math['PI'];
                        else if (_0x3cd9f2 === 'top')
                            _0xb94b47 = -Math['PI'] / 0x2;
                        else if (_0x3cd9f2 === 'right')
                            _0xb94b47 = 0x0;
                        if (_0xb94b47 !== 0x0) {
                            _0x5a6cbe['save']();
                            _0x5a6cbe['translate'](_0x177f32 + _0x280561['MAP']['tileSize'] / 0x2, _0x1694dc + _0x280561['MAP']['tileSize'] / 0x2);
                            _0x5a6cbe['rotate'](_0xb94b47);
                            _0x5a6cbe['drawImage'](_0xd20432, _0x2da68b, _0xc22bc5, _0x335396, _0x335396, -_0x280561['MAP']['tileSize'] / 0x2, -_0x280561['MAP']['tileSize'] / 0x2, _0x280561['MAP']['tileSize'], _0x280561['MAP']['tileSize']);
                            _0x5a6cbe['restore']();
                        } else {
                            _0x5a6cbe['drawImage'](_0xd20432, _0x2da68b, _0xc22bc5, _0x335396, _0x335396, _0x177f32, _0x1694dc, _0x280561['MAP']['tileSize'], _0x280561['MAP']['tileSize']);
                        }
                    } else {
                        _0x5a6cbe['drawImage'](_0xd20432, _0x2da68b, _0xc22bc5, _0x335396, _0x335396, _0x177f32, _0x1694dc, _0x280561['MAP']['tileSize'], _0x280561['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x5be342() {
    _0xd20432['crossOrigin'] = 'Anonymous';
    _0xd20432['onload'] = () => {
        _0x280561['MAP']['tilesetCols'] = 0x3;
        if (_0x280561['MAP']['columns'] > 0x0 && _0x280561['MAP']['layers'] && _0x280561['MAP']['layers']['length'] > 0x0) {
            _0x71a26d();
        }
        _0x31aeb5();
    };
    _0xd20432['onerror'] = () => {
        _0x280561['MAP']['tilesetCols'] = 0x1;
        _0x31aeb5();
    };
    _0xd20432['src'] = 'assets/tilesheet.png';
    _0x22510c['crossOrigin'] = 'Anonymous';
    _0x22510c['onload'] = _0x31aeb5;
    _0x22510c['onerror'] = () => {
        _0x31aeb5();
    };
    _0x22510c['src'] = 'assets/center.png';
    _0x332412['crossOrigin'] = 'Anonymous';
    _0x332412['onload'] = _0x31aeb5;
    _0x332412['onerror'] = () => {
        _0x31aeb5();
    };
    _0x332412['src'] = 'assets/table.png';
}
function _0x31aeb5() {
    _0x280561['SYSTEM']['assetsLoaded']++;
    if (_0x280561['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x280561['MAP']['columns'] > 0x0 && _0x280561['MAP']['layers'] && _0x280561['MAP']['layers']['length'] > 0x0) {
            _0x71a26d();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x73cc1e();
    }
}
function _0x221f18(_0x289b78, _0x134ac7) {
    if (!_0x2da1e6 || !_0x225b27)
        return;
    const _0x585e26 = _0x289b78 / _0x280561['SYSTEM']['viewScale'] + _0x280561['CAMERA']['x'];
    const _0xb8fdab = _0x134ac7 / _0x280561['SYSTEM']['viewScale'] + _0x280561['CAMERA']['y'];
    const _0x116dd9 = Math['floor'](_0x585e26 / _0x280561['MAP']['tileSize']);
    const _0x3185e9 = Math['floor'](_0xb8fdab / _0x280561['MAP']['tileSize']);
    if (_0x116dd9 >= 0x0 && _0x116dd9 < _0x280561['MAP']['columns'] && _0x3185e9 >= 0x0 && _0x3185e9 < _0x280561['MAP']['rows'])
        _0x225b27['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x280561['EDITOR']['selectedLayer'],
            'col': _0x116dd9,
            'row': _0x3185e9,
            'gid': _0x280561['EDITOR']['selectedTileGid']
        }));
}
function _0x2a13dc() {
    const _0x3be3db = document['getElementById']('palette');
    if (!_0x3be3db || _0x3be3db['children']['length'] > 0x0)
        return;
    const _0x37cc94 = 0x40;
    const _0x4f4ad2 = _0xd20432;
    const _0x51c5b5 = document['createElement']('div');
    _0x51c5b5['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x3bc63d = document['createElement']('canvas');
    _0x3bc63d['width'] = 0xc0;
    _0x3bc63d['height'] = 0xa0;
    _0x3bc63d['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x51c5b5['appendChild'](_0x3bc63d);
    const _0x25dbca = document['createElement']('div');
    _0x25dbca['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x51c5b5['appendChild'](_0x25dbca);
    let _0xa1f795 = 0x0, _0x47e9fe = 0x0;
    let _0x7e97c4 = ![], _0x27d0d6 = 0x0, _0x46b176 = 0x0, _0x5afbdf = 0x0, _0x1aa5af = 0x0;
    function _0x5cb6d8() {
        const _0x59f7eb = _0x3bc63d['getContext']('2d');
        _0x59f7eb['clearRect'](0x0, 0x0, _0x3bc63d['width'], _0x3bc63d['height']);
        _0x59f7eb['imageSmoothingEnabled'] = ![];
        if (_0x4f4ad2['complete'] && _0x4f4ad2['naturalWidth'] > 0x0) {
            _0x59f7eb['drawImage'](_0x4f4ad2, _0xa1f795, _0x47e9fe, _0x3bc63d['width'], _0x3bc63d['height'], 0x0, 0x0, _0x3bc63d['width'], _0x3bc63d['height']);
        }
        _0x59f7eb['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x59f7eb['lineWidth'] = 0x1;
        const _0x550e02 = Math['floor'](_0xa1f795 / _0x37cc94);
        const _0x13e8e0 = Math['floor'](_0x47e9fe / _0x37cc94);
        for (let _0x5e3418 = _0x550e02; _0x5e3418 <= _0x550e02 + Math['ceil'](_0x3bc63d['width'] / _0x37cc94) + 0x1; _0x5e3418++) {
            const _0x3fb047 = _0x5e3418 * _0x37cc94 - _0xa1f795;
            _0x59f7eb['beginPath']();
            _0x59f7eb['moveTo'](_0x3fb047, 0x0);
            _0x59f7eb['lineTo'](_0x3fb047, _0x3bc63d['height']);
            _0x59f7eb['stroke']();
        }
        for (let _0x1f9047 = _0x13e8e0; _0x1f9047 <= _0x13e8e0 + Math['ceil'](_0x3bc63d['height'] / _0x37cc94) + 0x1; _0x1f9047++) {
            const _0x4a1698 = _0x1f9047 * _0x37cc94 - _0x47e9fe;
            _0x59f7eb['beginPath']();
            _0x59f7eb['moveTo'](0x0, _0x4a1698);
            _0x59f7eb['lineTo'](_0x3bc63d['width'], _0x4a1698);
            _0x59f7eb['stroke']();
        }
    }
    function _0x1eb98d() {
        const _0x499075 = Math['max'](0x1, Math['ceil'](_0x4f4ad2['naturalWidth'] / _0x37cc94));
        const _0x19b6d5 = _0x280561['EDITOR']['selectedTileGid'];
        if (_0x19b6d5 <= 0x0) {
            _0x25dbca['style']['display'] = 'none';
            return;
        }
        const _0x5da979 = _0x19b6d5 - 0x1;
        const _0x39a662 = _0x5da979 % _0x499075;
        const _0x40ff0d = Math['floor'](_0x5da979 / _0x499075);
        const _0x4bbe41 = _0x39a662 * _0x37cc94 - _0xa1f795;
        const _0x3063de = _0x40ff0d * _0x37cc94 - _0x47e9fe;
        _0x25dbca['style']['display'] = 'block';
        _0x25dbca['style']['left'] = _0x4bbe41 + 'px';
        _0x25dbca['style']['top'] = _0x3063de + 'px';
    }
    _0x4f4ad2['onload'] = () => {
        _0x5cb6d8();
        _0x1eb98d();
    };
    if (_0x4f4ad2['complete'] && _0x4f4ad2['naturalWidth'] > 0x0) {
        _0x5cb6d8();
        _0x1eb98d();
    }
    _0x51c5b5['addEventListener']('mousedown', _0x22a3af => {
        if (_0x22a3af['button'] === 0x0) {
            _0x7e97c4 = !![];
            _0x27d0d6 = _0x22a3af['clientX'];
            _0x46b176 = _0x22a3af['clientY'];
            _0x5afbdf = _0xa1f795;
            _0x1aa5af = _0x47e9fe;
            _0x51c5b5['style']['cursor'] = 'grabbing';
            _0x22a3af['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x471a41 => {
        if (!_0x7e97c4)
            return;
        const _0x46db11 = _0x27d0d6 - _0x471a41['clientX'];
        const _0xeb0b07 = _0x46b176 - _0x471a41['clientY'];
        const _0x39b256 = Math['max'](0x0, _0x4f4ad2['naturalWidth'] - _0x3bc63d['width']);
        const _0x17a23c = Math['max'](0x0, _0x4f4ad2['naturalHeight'] - _0x3bc63d['height']);
        _0xa1f795 = Math['max'](0x0, Math['min'](_0x39b256, _0x5afbdf + _0x46db11));
        _0x47e9fe = Math['max'](0x0, Math['min'](_0x17a23c, _0x1aa5af + _0xeb0b07));
        _0x5cb6d8();
        _0x1eb98d();
    });
    window['addEventListener']('mouseup', _0x3b7706 => {
        if (_0x7e97c4) {
            _0x7e97c4 = ![];
            _0x51c5b5['style']['cursor'] = 'grab';
        }
    });
    _0x51c5b5['addEventListener']('click', _0x581c25 => {
        const _0x223749 = _0x51c5b5['getBoundingClientRect']();
        const _0x181fdb = _0x581c25['clientX'] - _0x223749['left'] + _0xa1f795;
        const _0x446c97 = _0x581c25['clientY'] - _0x223749['top'] + _0x47e9fe;
        const _0x260c63 = Math['max'](0x1, Math['ceil'](_0x4f4ad2['naturalWidth'] / _0x37cc94));
        const _0x5ce989 = Math['floor'](_0x181fdb / _0x37cc94);
        const _0xbc9900 = Math['floor'](_0x446c97 / _0x37cc94);
        const _0x74e770 = _0xbc9900 * _0x260c63 + _0x5ce989 + 0x1;
        _0x280561['EDITOR']['selectedTileGid'] = _0x74e770;
        _0x1eb98d();
    });
    _0x3be3db['appendChild'](_0x51c5b5);
    const _0x2c255f = document['createElement']('div');
    _0x2c255f['className'] = 'tile-btn\x20eraser-btn';
    _0x2c255f['title'] = 'Eraser\x20(gid\x200)';
    _0x2c255f['onclick'] = () => {
        _0x280561['EDITOR']['selectedTileGid'] = 0x0;
        _0x25dbca['style']['display'] = 'none';
    };
    _0x3be3db['appendChild'](_0x2c255f);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x280561['EDITOR']['enabled'] = !_0x280561['EDITOR']['enabled'];
        const _0x317a7f = document['getElementById']('editor-tools');
        if (_0x280561['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x317a7f['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x317a7f['style']['display'] = 'none';
        }
    });
    const _0x41993d = document['getElementById']('start-game-btn');
    if (_0x41993d) {
        _0x41993d['addEventListener']('click', () => {
            if (_0x225b27)
                _0x225b27['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x40bdc5 = document['getElementById']('rolelist-toggle-btn');
    if (_0x40bdc5) {
        let _0x128171 = 'subalignments';
        _0x40bdc5['addEventListener']('click', () => {
            if (_0x128171 === 'subalignments')
                _0x128171 = 'precise';
            else if (_0x128171 === 'precise')
                _0x128171 = 'off';
            else
                _0x128171 = 'subalignments';
            _0x40bdc5['innerText'] = 'Role\x20List:\x20' + _0x128171['charAt'](0x0)['toUpperCase']() + _0x128171['slice'](0x1);
            if (_0x225b27)
                _0x225b27['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x128171
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x52d606 => {
        if (_0x52d606['id'] === 'editor-toggle-btn' || _0x52d606['id'] === 'start-game-btn' || _0x52d606['id'] === 'rolelist-toggle-btn')
            return;
        _0x52d606['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x1888e0 => _0x1888e0['classList']['remove']('active'));
            _0x52d606['classList']['add']('active');
            _0x280561['EDITOR']['selectedLayer'] = _0x52d606['dataset']['layer'];
        });
    });
}
function _0x26fda2(_0x3c9d11) {
    if (_0x225b27)
        _0x225b27['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x3c9d11
        }));
}
function _0x39a456(_0x4bf2ff) {
    if (_0x225b27)
        _0x225b27['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x4bf2ff
        }));
}
function _0x1e111d(_0x534ae0, _0x5a26ed, _0x1b6ce5, _0xd66218) {
    const _0x1dd5ae = document['getElementById']('admin-panel');
    if (_0x1dd5ae)
        _0x1dd5ae['remove']();
    if (_0x1dd5ae && _0x1dd5ae['dataset']['target'] === String(_0x534ae0))
        return;
    const _0x2e41c7 = document['createElement']('div');
    _0x2e41c7['id'] = 'admin-panel';
    _0x2e41c7['dataset']['target'] = String(_0x534ae0);
    _0x2e41c7['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x1fe01d = document['createElement']('div');
    _0x1fe01d['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x1fe01d['textContent'] = _0x5a26ed;
    _0x2e41c7['appendChild'](_0x1fe01d);
    const _0x46da71 = document['createElement']('button');
    _0x46da71['textContent'] = 'Kick';
    _0x46da71['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x46da71['onmouseenter'] = () => _0x46da71['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x46da71['onmouseleave'] = () => _0x46da71['style']['background'] = 'transparent';
    _0x46da71['onclick'] = () => {
        _0x26fda2(_0x534ae0);
        _0x2e41c7['remove']();
    };
    _0x2e41c7['appendChild'](_0x46da71);
    const _0x92f3bb = document['createElement']('button');
    _0x92f3bb['textContent'] = 'Ban';
    _0x92f3bb['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x92f3bb['onmouseenter'] = () => _0x92f3bb['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x92f3bb['onmouseleave'] = () => _0x92f3bb['style']['background'] = 'transparent';
    _0x92f3bb['onclick'] = () => {
        _0x39a456(_0x534ae0);
        _0x2e41c7['remove']();
    };
    _0x2e41c7['appendChild'](_0x92f3bb);
    document['body']['appendChild'](_0x2e41c7);
    const _0x54abb3 = _0x2e41c7['offsetWidth'] || 0x91;
    const _0x347219 = _0x2e41c7['offsetHeight'] || 0x50;
    let _0x45222f = _0x1b6ce5 - _0x54abb3;
    let _0x249302 = _0xd66218;
    if (_0x45222f < 0x4)
        _0x45222f = _0x1b6ce5;
    if (_0x249302 + _0x347219 > window['innerHeight'] - 0x4)
        _0x249302 = window['innerHeight'] - _0x347219 - 0x4;
    _0x2e41c7['style']['left'] = _0x45222f + 'px';
    _0x2e41c7['style']['top'] = _0x249302 + 'px';
    const _0x5ba331 = _0x2fd9eb => {
        if (!_0x2e41c7['contains'](_0x2fd9eb['target'])) {
            _0x2e41c7['remove']();
            document['removeEventListener']('mousedown', _0x5ba331);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x5ba331), 0x0);
}
let _0x4e7418 = '';
function _0x28c10c() {
    const _0x5e02e8 = document['getElementById']('leaderboard-list');
    if (!_0x5e02e8)
        return;
    let _0x5dc12b = _0x19e4f6 + '|' + _0x2da1e6 + '|' + _0x235260['isDead'] + '|' + _0x47a8d1['size'];
    for (const _0x450867 in _0x7eb8d8) {
        const _0x2f7acc = _0x7eb8d8[_0x450867];
        _0x5dc12b += '|' + _0x450867 + ':' + _0x2f7acc['name'] + ':' + !!_0x2f7acc['isOwner'] + ':' + !!_0x2f7acc['isDead'] + ':' + _0x47a8d1['has'](parseInt(_0x450867));
    }
    if (_0x5dc12b === _0x4e7418)
        return;
    _0x4e7418 = _0x5dc12b;
    _0x5e02e8['innerHTML'] = '';
    const _0x533498 = document['createElement']('div');
    _0x533498['className'] = 'leaderboard-entry';
    const _0x328c48 = document['createElement']('span');
    _0x328c48['textContent'] = _0x19e4f6 + (_0x2da1e6 ? '\x20[🗝️]' : '');
    if (_0x47a8d1['has'](_0xc0aaef) && !_0x235260['isDead']) {
        _0x328c48['style']['color'] = '#cc88ff';
    }
    _0x533498['appendChild'](_0x328c48);
    _0x5e02e8['appendChild'](_0x533498);
    for (const _0x16e7f4 in _0x7eb8d8) {
        const _0x1c8e16 = document['createElement']('div');
        _0x1c8e16['className'] = 'leaderboard-entry';
        const _0x1a1a65 = document['createElement']('span');
        _0x1a1a65['textContent'] = _0x7eb8d8[_0x16e7f4]['name'] + (_0x7eb8d8[_0x16e7f4]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x47a8d1['has'](parseInt(_0x16e7f4)) && !_0x7eb8d8[_0x16e7f4]['isDead']) {
            _0x1a1a65['style']['color'] = '#cc88ff';
        }
        _0x1c8e16['appendChild'](_0x1a1a65);
        if (_0x2da1e6 && !_0x7eb8d8[_0x16e7f4]['isOwner']) {
            const _0x5c6826 = _0x7eb8d8[_0x16e7f4]['id'];
            const _0x475513 = _0x7eb8d8[_0x16e7f4]['name'];
            _0x1c8e16['style']['cursor'] = 'context-menu';
            _0x1c8e16['addEventListener']('contextmenu', _0x5000a0 => {
                _0x5000a0['preventDefault']();
                _0x5000a0['stopPropagation']();
                _0x1e111d(_0x5c6826, _0x475513, _0x5000a0['clientX'], _0x5000a0['clientY']);
            });
        }
        _0x5e02e8['appendChild'](_0x1c8e16);
    }
}
window['addEventListener']('resize', _0x73cc1e);
function _0x73cc1e() {
    _0x46a429['width'] = window['innerWidth'];
    _0x46a429['height'] = window['innerHeight'];
    _0x280561['SYSTEM']['viewScale'] = Math['max'](_0x46a429['width'] / _0x17bfa5, _0x46a429['height'] / _0x1f8250);
    _0x280561['CAMERA']['width'] = _0x46a429['width'] / _0x280561['SYSTEM']['viewScale'];
    _0x280561['CAMERA']['height'] = _0x46a429['height'] / _0x280561['SYSTEM']['viewScale'];
    _0x46cbe9['imageSmoothingEnabled'] = ![];
}
function _0x4bb80f(_0x189945) {
    if (_0x189945['ctrlKey'] || _0x189945['metaKey']) {
        if (_0x189945['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x189945['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x189945['code'])) {
            _0x189945['preventDefault']();
            _0x189945['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x4bb80f, { 'passive': ![] });
window['addEventListener']('keydown', _0x4bb80f, { 'passive': ![] });
window['addEventListener']('keydown', _0xafc20a => {
    const _0x3a4e76 = _0xafc20a['key']['toLowerCase']();
    if (_0x3a4e76 === 'tab') {
        _0xafc20a['preventDefault']();
        const _0x7673fd = document['getElementById']('will-ui');
        const _0x3fe264 = document['getElementById']('will-input');
        if (_0x7673fd['style']['display'] === 'flex') {
            _0x7673fd['style']['display'] = 'none';
            if (_0x280561['GAME_STATE'] !== 'NIGHT' && _0x225b27)
                _0x225b27['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x3fe264['value']
                }));
            _0x3fe264['blur']();
        } else {
            if (_0x280561['GAME_STATE'] === 'NIGHT') {
                _0x3569a2('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x7673fd['style']['display'] = 'flex';
            _0x3fe264['focus']();
            for (let _0x1fdd9a in _0x280561['INPUTS']['keys'])
                _0x280561['INPUTS']['keys'][_0x1fdd9a] = ![];
        }
        return;
    }
    if (_0xafc20a['key'] === 'Enter') {
        if (_0x101e3a) {
            const _0x371749 = document['getElementById']('play-btn');
            if (_0x371749)
                _0x371749['click']();
            return;
        }
        if (!_0x225b27 || _0x225b27['readyState'] !== WebSocket['OPEN'])
            return;
        const _0xd8ac21 = document['getElementById']('chat-ui');
        const _0x2fbc79 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x2fbc79) {
            const _0x36af69 = _0x2fbc79['value']['trim']();
            if (_0x36af69['length'] > 0x0) {
                _0x225b27['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x36af69
                }));
            }
            _0x2fbc79['value'] = '';
            _0xd8ac21['style']['display'] = 'none';
            _0x2fbc79['blur']();
        } else {
            _0xd8ac21['style']['display'] = 'block';
            _0x2fbc79['focus']();
            for (let _0x4534ad in _0x280561['INPUTS']['keys'])
                _0x280561['INPUTS']['keys'][_0x4534ad] = ![];
        }
        _0xafc20a['preventDefault']();
        return;
    }
    if (_0xafc20a['key'] === 'Escape') {
        const _0x246d2b = document['getElementById']('role-index-modal');
        if (_0x246d2b && _0x246d2b['style']['display'] === 'flex') {
            _0x246d2b['style']['display'] = 'none';
            return;
        }
        const _0x2f5149 = document['getElementById']('guide-ui');
        if (_0x2f5149 && _0x2f5149['style']['display'] === 'flex') {
            _0x2f5149['style']['display'] = 'none';
            return;
        }
        const _0x209a96 = document['getElementById']('ability-ui');
        if (_0x209a96 && _0x209a96['style']['display'] === 'block') {
            _0x209a96['style']['display'] = 'none';
            return;
        }
        const _0x52acc1 = document['getElementById']('settings-panel');
        if (_0x52acc1 && _0x52acc1['style']['display'] === 'block') {
            _0x52acc1['style']['display'] = 'none';
            return;
        }
        const _0x554443 = document['getElementById']('mayor-confirm-dialog');
        if (_0x554443 && _0x554443['style']['display'] === 'flex') {
            _0x554443['style']['display'] = 'none';
            return;
        }
        const _0x1614b3 = document['getElementById']('target-chooser-ui');
        if (_0x1614b3 && _0x1614b3['style']['display'] === 'flex') {
            _0x1614b3['style']['display'] = 'none';
            return;
        }
        const _0x454976 = document['getElementById']('chat-ui');
        const _0xd33df9 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0xd33df9) {
            _0xd33df9['value'] = '';
            _0x454976['style']['display'] = 'none';
            _0xd33df9['blur']();
            _0xafc20a['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x280561['INPUTS']['keys']['hasOwnProperty'](_0x3a4e76))
            _0x280561['INPUTS']['keys'][_0x3a4e76] = !![];
        if (!_0x225b27 || _0x225b27['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x3a4e76 === 'h' && !_0xafc20a['repeat']) {
            const _0x523314 = document['getElementById']('guide-ui');
            if (_0x523314) {
                _0x523314['style']['display'] = _0x523314['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x3a4e76 === 't' && !_0xafc20a['repeat']) {
            if (_0x235260['isDead'])
                return;
            if (_0x1e85b8 === 'Mayor') {
                if (_0x47a8d1['has'](_0xc0aaef)) {
                    _0x3569a2('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x51c128 = document['getElementById']('mayor-confirm-dialog');
                if (_0x51c128)
                    _0x51c128['style']['display'] = 'flex';
                return;
            }
            if (_0x280561['GAME_STATE'] === 'NIGHT') {
                if (!_0x280561['NIGHT_ABILITY_OPEN']) {
                    _0x3569a2('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x2548f9 = document['getElementById']('ability-ui');
                if (_0x2548f9) {
                    if (_0x2548f9['style']['display'] === 'block') {
                        _0x2548f9['style']['display'] = 'none';
                    } else {
                        _0x1700c4();
                        _0x2548f9['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x280561['GAME_STATE'] === 'DAY_DISCUSS' || _0x280561['GAME_STATE'] === 'DAY_VOTE') {
                _0x3569a2('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x3a4e76 === 'e' && !_0x235260['isDead']) {
            const _0xd9b1c8 = Date['now']();
            if (!window['_lastDoorSend'] || _0xd9b1c8 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0xd9b1c8;
                _0x225b27['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x35cea7 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x21d65d = _0x35cea7['key']['toLowerCase']();
        if (_0x280561['INPUTS']['keys']['hasOwnProperty'](_0x21d65d))
            _0x280561['INPUTS']['keys'][_0x21d65d] = ![];
    }
});
window['addEventListener']('mousemove', _0x34d774 => {
    _0x280561['INPUTS']['mouseX'] = _0x34d774['clientX'];
    _0x280561['INPUTS']['mouseY'] = _0x34d774['clientY'];
    if (_0x280561['INPUTS']['isMouseDown'] && _0x280561['EDITOR']['enabled']) {
        _0x221f18(_0x34d774['clientX'], _0x34d774['clientY']);
    }
});
window['addEventListener']('mousedown', _0x2f1002 => {
    if (_0x2f1002['target']['closest']('#editor-ui') || _0x2f1002['target']['closest']('#leaderboard-ui') || _0x2f1002['target']['closest']('#role-index-btn-wrap') || _0x2f1002['target']['closest']('#role-index-modal') || _0x2f1002['target']['closest']('#chat-log-ui') || _0x2f1002['target']['closest']('#target-chooser-ui') || _0x2f1002['target']['closest']('#guide-ui') || _0x2f1002['target']['closest']('#role-list-ui') || _0x2f1002['target']['closest']('#ability-ui') || _0x2f1002['target']['closest']('#settings-panel') || _0x2f1002['target']['closest']('#mayor-confirm-dialog') || _0x2f1002['target']['closest']('#mobile-action-bar') || _0x2f1002['target']['closest']('#mobile-top-bar') || _0x2f1002['target']['closest']('#mobile-joystick-zone') || _0x2f1002['target']['closest']('#mobile-chat-overlay') || _0x2f1002['target']['closest']('#will-ui') || _0x2f1002['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x2f1002['button'] === 0x0) {
        _0x280561['INPUTS']['isMouseDown'] = !![];
        if (_0x280561['EDITOR']['enabled'])
            _0x221f18(_0x2f1002['clientX'], _0x2f1002['clientY']);
    }
});
window['addEventListener']('mouseup', _0x30fb6b => {
    _0x280561['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x25d1f0 => {
    if (_0x25d1f0['target']['closest']('#settings-btn'))
        return;
    const _0x290d61 = document['getElementById']('leaderboard-list');
    const _0x4c0dee = document['getElementById']('leaderboard-toggle');
    if (_0x290d61['style']['display'] === 'none') {
        _0x290d61['style']['display'] = 'flex';
        _0x4c0dee['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x290d61['style']['display'] = 'none';
        _0x4c0dee['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x3d660f = document['getElementById']('close-target-btn');
if (_0x3d660f) {
    _0x3d660f['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x46bd85 = document['getElementById']('close-guide-btn');
if (_0x46bd85) {
    _0x46bd85['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x3a41da = document['getElementById']('role-list-header');
if (_0x3a41da) {
    _0x3a41da['addEventListener']('click', () => {
        const _0x4382da = document['getElementById']('role-list-items');
        const _0x55a211 = document['getElementById']('role-list-toggle');
        if (_0x4382da['style']['display'] === 'none') {
            _0x4382da['style']['display'] = 'flex';
            _0x55a211['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x4382da['style']['display'] = 'none';
            _0x55a211['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x33e426() {
    const _0x27d35b = document['getElementById']('mobile-joystick-zone');
    const _0x548334 = document['getElementById']('mobile-joystick-base');
    const _0x30900f = document['getElementById']('mobile-joystick-knob');
    if (_0x27d35b && _0x548334 && _0x30900f) {
        const _0x31d0b2 = 0x3e;
        const _0x31a22f = (_0x3d57a1, _0x48fd7b) => {
            const _0x13e559 = _0x548334['getBoundingClientRect']();
            const _0x15022d = _0x13e559['left'] + _0x13e559['width'] / 0x2;
            const _0x1066fa = _0x13e559['top'] + _0x13e559['height'] / 0x2;
            const _0x2d4f8f = _0x3d57a1 - _0x15022d;
            const _0x307a29 = _0x48fd7b - _0x1066fa;
            const _0x30217d = Math['hypot'](_0x2d4f8f, _0x307a29);
            if (_0x30217d === 0x0) {
                _0x3e0d46 = 0x0;
                _0x5cf468 = 0x0;
                _0x9373b3 = ![];
                _0x30900f['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x334906 = Math['min'](_0x30217d, _0x31d0b2);
            const _0x49b0cd = _0x2d4f8f / _0x30217d * _0x334906;
            const _0x38bddf = _0x307a29 / _0x30217d * _0x334906;
            _0x3e0d46 = _0x49b0cd / _0x31d0b2;
            _0x5cf468 = _0x38bddf / _0x31d0b2;
            _0x9373b3 = _0x30217d >= _0x31d0b2 * 0.75;
            _0x30900f['style']['transform'] = 'translate(' + _0x49b0cd + 'px,\x20' + _0x38bddf + 'px)';
        };
        const _0x5f5b14 = _0x381c03 => {
            for (let _0x33e3f7 = 0x0; _0x33e3f7 < _0x381c03['changedTouches']['length']; _0x33e3f7++) {
                const _0x747a37 = _0x381c03['changedTouches'][_0x33e3f7];
                if (_0x2de08f === null) {
                    _0x2de08f = _0x747a37['identifier'];
                    _0x173c10 = !![];
                    _0x31a22f(_0x747a37['clientX'], _0x747a37['clientY']);
                    break;
                }
            }
        };
        const _0x504260 = _0x15b975 => {
            for (let _0x30da0f = 0x0; _0x30da0f < _0x15b975['changedTouches']['length']; _0x30da0f++) {
                const _0x1f1443 = _0x15b975['changedTouches'][_0x30da0f];
                if (_0x1f1443['identifier'] === _0x2de08f) {
                    _0x31a22f(_0x1f1443['clientX'], _0x1f1443['clientY']);
                    break;
                }
            }
        };
        const _0x52291e = _0x1f834b => {
            for (let _0x43d46e = 0x0; _0x43d46e < _0x1f834b['changedTouches']['length']; _0x43d46e++) {
                const _0x169484 = _0x1f834b['changedTouches'][_0x43d46e];
                if (_0x169484['identifier'] === _0x2de08f) {
                    _0x2de08f = null;
                    _0x173c10 = ![];
                    _0x3e0d46 = 0x0;
                    _0x5cf468 = 0x0;
                    _0x9373b3 = ![];
                    _0x30900f['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x27d35b['addEventListener']('touchstart', _0x28e3b2 => {
            _0x28e3b2['preventDefault']();
            _0x5f5b14(_0x28e3b2);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x504260, { 'passive': !![] });
        window['addEventListener']('touchend', _0x52291e, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x52291e, { 'passive': !![] });
    }
    const _0x24a887 = (_0x2925e3, _0xdaad13) => {
        const _0x175d19 = _0x2925e3 / _0x280561['SYSTEM']['viewScale'];
        const _0x2c3b7e = _0xdaad13 / _0x280561['SYSTEM']['viewScale'];
        const _0x2af594 = _0x235260['x'] - _0x280561['CAMERA']['x'] + _0x235260['width'] / 0x2;
        const _0xad87a7 = _0x235260['y'] - _0x280561['CAMERA']['y'] + _0x235260['height'] / 0x2;
        _0x5e8ba0 = Math['atan2'](_0x2c3b7e - _0xad87a7, _0x175d19 - _0x2af594);
        _0x2e5cf8 = !![];
        _0x280561['INPUTS']['mouseX'] = _0x2925e3;
        _0x280561['INPUTS']['mouseY'] = _0xdaad13;
    };
    _0x46a429['addEventListener']('touchstart', _0xdb4f7f => {
        if (_0x101e3a)
            return;
        for (let _0x5a7367 = 0x0; _0x5a7367 < _0xdb4f7f['changedTouches']['length']; _0x5a7367++) {
            const _0x13202b = _0xdb4f7f['changedTouches'][_0x5a7367];
            if (_0x13202b['identifier'] !== _0x2de08f && _0x1e5afd === null) {
                _0x1e5afd = _0x13202b['identifier'];
                _0x24a887(_0x13202b['clientX'], _0x13202b['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x46a429['addEventListener']('touchmove', _0x490e55 => {
        if (_0x101e3a)
            return;
        for (let _0x51e2c1 = 0x0; _0x51e2c1 < _0x490e55['changedTouches']['length']; _0x51e2c1++) {
            const _0x5db85c = _0x490e55['changedTouches'][_0x51e2c1];
            if (_0x5db85c['identifier'] === _0x1e5afd) {
                _0x24a887(_0x5db85c['clientX'], _0x5db85c['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x20c5be = _0x37badc => {
        for (let _0x9b2e23 = 0x0; _0x9b2e23 < _0x37badc['changedTouches']['length']; _0x9b2e23++) {
            const _0x551f74 = _0x37badc['changedTouches'][_0x9b2e23];
            if (_0x551f74['identifier'] === _0x1e5afd) {
                _0x1e5afd = null;
                _0x2e5cf8 = ![];
                break;
            }
        }
    };
    _0x46a429['addEventListener']('touchend', _0x20c5be, { 'passive': !![] });
    _0x46a429['addEventListener']('touchcancel', _0x20c5be, { 'passive': !![] });
    const _0x33bf7b = document['getElementById']('mob-sprint-btn');
    if (_0x33bf7b) {
        _0x33bf7b['addEventListener']('click', _0xd24af => {
            _0xd24af['stopPropagation']();
            _0x5c6c79 = !_0x5c6c79;
            _0x33bf7b['classList']['toggle']('active', _0x5c6c79);
        });
    }
    const _0x5c4505 = document['getElementById']('mob-interact-btn');
    if (_0x5c4505) {
        _0x5c4505['addEventListener']('click', _0x2c3af0 => {
            _0x2c3af0['stopPropagation']();
            if (!_0x235260['isDead']) {
                const _0x250afa = Date['now']();
                if (!window['_lastDoorSend'] || _0x250afa - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x250afa;
                    if (_0x225b27 && _0x225b27['readyState'] === WebSocket['OPEN'])
                        _0x225b27['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x31e3bc = document['getElementById']('mob-ability-btn');
    if (_0x31e3bc) {
        _0x31e3bc['addEventListener']('click', _0x48c1f7 => {
            _0x48c1f7['stopPropagation']();
            if (_0x235260['isDead'])
                return;
            if (_0x1e85b8 === 'Mayor') {
                if (_0x47a8d1['has'](_0xc0aaef)) {
                    _0x3569a2('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x299579 = document['getElementById']('mayor-confirm-dialog');
                if (_0x299579)
                    _0x299579['style']['display'] = 'flex';
                return;
            }
            if (_0x280561['GAME_STATE'] === 'NIGHT') {
                if (!_0x280561['NIGHT_ABILITY_OPEN']) {
                    _0x3569a2('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x8c96d0 = document['getElementById']('ability-ui');
                if (_0x8c96d0) {
                    if (_0x8c96d0['style']['display'] === 'block') {
                        _0x8c96d0['style']['display'] = 'none';
                    } else {
                        _0x1700c4();
                        _0x8c96d0['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x280561['GAME_STATE'] === 'DAY_DISCUSS' || _0x280561['GAME_STATE'] === 'DAY_VOTE') {
                _0x3569a2('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x49920a = document['getElementById']('mob-will-btn');
    const _0x1f85dd = document['getElementById']('will-ui');
    const _0x4d45bb = document['getElementById']('will-input');
    const _0x116cae = document['getElementById']('close-will-btn');
    const _0x2b6751 = () => {
        if (!_0x1f85dd)
            return;
        if (_0x1f85dd['style']['display'] === 'flex') {
            _0x1f85dd['style']['display'] = 'none';
            if (_0x280561['GAME_STATE'] !== 'NIGHT' && _0x225b27 && _0x225b27['readyState'] === WebSocket['OPEN'] && _0x4d45bb) {
                _0x225b27['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x4d45bb['value']
                }));
            }
            if (_0x4d45bb)
                _0x4d45bb['blur']();
        } else {
            if (_0x280561['GAME_STATE'] === 'NIGHT') {
                _0x3569a2('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x1f85dd['style']['display'] = 'flex';
            if (_0x4d45bb)
                _0x4d45bb['focus']();
        }
    };
    if (_0x49920a)
        _0x49920a['addEventListener']('click', _0x1c0dd2 => {
            _0x1c0dd2['stopPropagation']();
            _0x2b6751();
        });
    if (_0x116cae)
        _0x116cae['addEventListener']('click', _0x38a600 => {
            _0x38a600['stopPropagation']();
            _0x2b6751();
        });
    const _0x59e19b = document['getElementById']('mob-chat-btn');
    const _0x1566b8 = document['getElementById']('mobile-chat-overlay');
    const _0x5089b1 = document['getElementById']('mobile-chat-input');
    const _0x524034 = document['getElementById']('mobile-chat-send');
    const _0x35b381 = document['getElementById']('mobile-chat-cancel');
    const _0x1cb5dd = () => {
        if (!_0x1566b8 || !_0x5089b1)
            return;
        _0x1566b8['style']['display'] = 'flex';
        _0x5089b1['value'] = '';
        _0x5089b1['focus']();
    };
    const _0x3522de = () => {
        if (!_0x1566b8 || !_0x5089b1)
            return;
        _0x1566b8['style']['display'] = 'none';
        _0x5089b1['blur']();
    };
    const _0x54d64c = () => {
        if (!_0x5089b1)
            return;
        const _0x4868c5 = _0x5089b1['value']['trim']();
        if (_0x4868c5['length'] > 0x0 && _0x225b27 && _0x225b27['readyState'] === WebSocket['OPEN']) {
            _0x225b27['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x4868c5
            }));
        }
        _0x5089b1['value'] = '';
        _0x3522de();
    };
    if (_0x59e19b)
        _0x59e19b['addEventListener']('click', _0x4643b0 => {
            _0x4643b0['stopPropagation']();
            _0x1cb5dd();
        });
    if (_0x524034)
        _0x524034['addEventListener']('click', _0x11b76b => {
            _0x11b76b['stopPropagation']();
            _0x54d64c();
        });
    if (_0x35b381)
        _0x35b381['addEventListener']('click', _0x55f62c => {
            _0x55f62c['stopPropagation']();
            _0x3522de();
        });
    if (_0x5089b1) {
        _0x5089b1['addEventListener']('keydown', _0x415463 => {
            if (_0x415463['key'] === 'Enter') {
                _0x415463['preventDefault']();
                _0x54d64c();
            } else if (_0x415463['key'] === 'Escape') {
                _0x3522de();
            }
        });
    }
    const _0x1ca254 = document['getElementById']('mob-top-chat');
    if (_0x1ca254)
        _0x1ca254['addEventListener']('click', _0x211721 => {
            _0x211721['stopPropagation']();
            _0x1cb5dd();
        });
    const _0x4255c7 = document['getElementById']('mob-top-will');
    if (_0x4255c7)
        _0x4255c7['addEventListener']('click', _0x380662 => {
            _0x380662['stopPropagation']();
            _0x2b6751();
        });
    const _0x5c5494 = document['getElementById']('mob-top-roles');
    if (_0x5c5494) {
        _0x5c5494['addEventListener']('click', _0x44a351 => {
            _0x44a351['stopPropagation']();
            const _0x8fc0fd = document['getElementById']('role-list-ui');
            const _0x211682 = document['getElementById']('leaderboard-ui');
            if (_0x211682)
                _0x211682['style']['display'] = 'none';
            if (_0x8fc0fd)
                _0x8fc0fd['style']['display'] = _0x8fc0fd['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x328cad = document['getElementById']('mob-top-players');
    if (_0x328cad) {
        _0x328cad['addEventListener']('click', _0x23cf6c => {
            _0x23cf6c['stopPropagation']();
            const _0x108f49 = document['getElementById']('leaderboard-ui');
            const _0x23a5f4 = document['getElementById']('role-list-ui');
            if (_0x23a5f4)
                _0x23a5f4['style']['display'] = 'none';
            if (_0x108f49)
                _0x108f49['style']['display'] = _0x108f49['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x2bd8de = document['getElementById']('mob-top-help');
    if (_0x2bd8de) {
        _0x2bd8de['addEventListener']('click', _0x473fdc => {
            _0x473fdc['stopPropagation']();
            const _0x552bfc = document['getElementById']('guide-ui');
            if (_0x552bfc)
                _0x552bfc['style']['display'] = _0x552bfc['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x3c50ff) {
            _0x3c50ff = !![];
            _0x426bcd();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
