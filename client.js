document['addEventListener']('contextmenu', _0x502792 => _0x502792['preventDefault']());
const _0x49ad7b = {
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
let _0xf378ad = '';
function _0x5312f3(_0x481ba1, _0x44c0dd) {
    const _0x213122 = document['getElementById']('role-list-ui');
    const _0x20562c = document['getElementById']('role-list-items');
    if (!_0x213122 || !_0x20562c)
        return;
    if (!_0x44c0dd || _0x44c0dd === 'off' || !_0x481ba1 || _0x481ba1['length'] === 0x0) {
        _0x213122['style']['display'] = 'none';
        return;
    }
    const _0x5053c9 = _0x44c0dd + '|' + JSON['stringify'](_0x481ba1);
    if (_0x5053c9 === _0xf378ad)
        return;
    _0xf378ad = _0x5053c9;
    const _0x16daf0 = document['getElementById']('role-tooltip');
    if (_0x16daf0) {
        _0x16daf0['style']['visibility'] = 'hidden';
        _0x16daf0['style']['opacity'] = '0';
    }
    _0x213122['style']['display'] = 'flex';
    _0x20562c['innerHTML'] = '';
    _0x481ba1['forEach'](_0x52f6c6 => {
        const _0x307547 = document['createElement']('div');
        _0x307547['className'] = 'role-list-entry';
        const _0x15d64b = _0x52f6c6['name']['includes']('Mafia') || _0x52f6c6['name'] === 'Skinwalker';
        _0x307547['classList']['add'](_0x15d64b ? 'mafia' : 'town');
        if (_0x44c0dd === 'precise' && _0x52f6c6['isDead']) {
            _0x307547['classList']['remove']('town', 'mafia');
            _0x307547['classList']['add']('dead');
            _0x307547['innerHTML'] = '<span>' + _0x52f6c6['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0xd11492 = _0x52f6c6['count'] !== undefined && _0x52f6c6['count'] !== null ? _0x52f6c6['count'] + 'x\x20' : '';
            _0x307547['innerHTML'] = '<span>' + _0xd11492 + _0x52f6c6['name'] + '</span>';
        }
        if (_0x44c0dd === 'subalignments' && _0x49ad7b[_0x52f6c6['name']]) {
            _0x307547['style']['cursor'] = 'pointer';
            _0x307547['addEventListener']('mouseenter', () => {
                const _0x221e61 = document['getElementById']('role-tooltip');
                if (!_0x221e61)
                    return;
                const _0x5b5ef8 = _0x49ad7b[_0x52f6c6['name']]['join'](',\x20');
                _0x221e61['innerHTML'] = '';
                const _0x4fb28a = document['createElement']('span');
                _0x4fb28a['style']['color'] = '#ffcc00';
                _0x4fb28a['textContent'] = _0x52f6c6['name'];
                _0x221e61['appendChild'](_0x4fb28a);
                _0x221e61['appendChild'](document['createElement']('br'));
                _0x221e61['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x5b5ef8));
                const _0x4cb49f = _0x307547['getBoundingClientRect']();
                _0x221e61['style']['left'] = _0x4cb49f['left'] - 0xeb + 'px';
                _0x221e61['style']['top'] = _0x4cb49f['top'] + 'px';
                _0x221e61['style']['display'] = 'block';
                _0x221e61['style']['visibility'] = 'visible';
                _0x221e61['style']['opacity'] = '1';
            });
            _0x307547['addEventListener']('mouseleave', () => {
                const _0x4644a4 = document['getElementById']('role-tooltip');
                if (_0x4644a4) {
                    _0x4644a4['style']['display'] = 'none';
                    _0x4644a4['style']['visibility'] = 'hidden';
                    _0x4644a4['style']['opacity'] = '0';
                }
            });
        }
        _0x20562c['appendChild'](_0x307547);
    });
}
let _0x5b79f3 = null;
let _0x4037a5 = null;
const _0x3b98d4 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x34ea00 = 'Player???';
let _0x37e7cc = ![];
let _0x59fd94 = {};
let _0x42f346 = null;
let _0x494d06 = 0x0;
let _0x4f9f5f = 0x0;
let _0x158ffa = new Set();
let _0x2cb8de = ![];
let _0x240893 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x3eb1c3 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x5bad43 = ![];
let _0xa537f2 = null;
let _0x13ec80 = 0x0;
let _0x365a01 = 0x0;
let _0x13451f = ![];
let _0x4d24f5 = ![];
let _0x3a6be4 = 0x0;
let _0x1cfd5f = null;
let _0x3a7b77 = ![];
const _0x500675 = ((() => {
    const _0x3df34e = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3'
    };
    let _0x3012b7 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0xbf20da = 0x320;
    const _0xfe76e = {};
    const _0x5759a9 = {};
    let _0x8d1ba7 = null;
    let _0x4d46f5 = _0x3012b7 === 0x0;
    let _0xf88c02 = ![];
    for (const [_0x425972, _0x29644a] of Object['entries'](_0x3df34e)) {
        const _0x27d355 = new Audio(_0x29644a);
        _0x27d355['loop'] = !![];
        _0x27d355['volume'] = 0x0;
        _0x27d355['preload'] = 'auto';
        _0xfe76e[_0x425972] = _0x27d355;
        _0x5759a9[_0x425972] = null;
    }
    const _0x2a9cd7 = _0x4c7835 => Math['min'](0x1, Math['max'](0x0, _0x4c7835));
    function _0x592624(_0x1b0e06) {
        if (_0x5759a9[_0x1b0e06] !== null) {
            cancelAnimationFrame(_0x5759a9[_0x1b0e06]);
            _0x5759a9[_0x1b0e06] = null;
        }
    }
    function _0x2bcc5d(_0x3352c0, _0x5782d2, _0x33d48a, _0x55e6e5, _0x46fc00) {
        _0x592624(_0x3352c0);
        const _0x37d23d = _0xfe76e[_0x3352c0];
        const _0x154bae = performance['now']();
        const _0xe84081 = _0x652478 => {
            const _0x44bc91 = _0x2a9cd7((_0x652478 - _0x154bae) / _0x55e6e5);
            const _0x22b738 = _0x2a9cd7(_0x5782d2 + (_0x33d48a - _0x5782d2) * _0x44bc91);
            _0x37d23d['volume'] = _0x4d46f5 ? 0x0 : _0x22b738;
            if (_0x44bc91 < 0x1) {
                _0x5759a9[_0x3352c0] = requestAnimationFrame(_0xe84081);
            } else {
                _0x5759a9[_0x3352c0] = null;
                _0x37d23d['volume'] = _0x4d46f5 ? 0x0 : _0x2a9cd7(_0x33d48a);
                if (_0x46fc00)
                    _0x46fc00();
            }
        };
        _0x5759a9[_0x3352c0] = requestAnimationFrame(_0xe84081);
    }
    function _0x54e5bb(_0x3f9425) {
        const _0x2939ee = _0x3f9425['play']();
        if (_0x2939ee && _0x2939ee['catch']) {
            _0x2939ee['catch'](() => {
                if (!_0xf88c02) {
                    const _0x55f5d5 = () => {
                        _0xf88c02 = !![];
                        _0x3f9425['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x55f5d5);
                        document['removeEventListener']('keydown', _0x55f5d5);
                        document['removeEventListener']('touchstart', _0x55f5d5);
                    };
                    document['addEventListener']('click', _0x55f5d5, { 'once': !![] });
                    document['addEventListener']('keydown', _0x55f5d5, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x55f5d5, { 'once': !![] });
                }
            });
        }
    }
    function _0x50e28e(_0x1a9d6d) {
        if (!_0x3df34e[_0x1a9d6d])
            return;
        if (_0x8d1ba7 === _0x1a9d6d)
            return;
        const _0x17908a = _0x8d1ba7;
        _0x8d1ba7 = _0x1a9d6d;
        const _0x3deb55 = _0xfe76e[_0x1a9d6d];
        _0x592624(_0x1a9d6d);
        _0x3deb55['currentTime'] = 0x0;
        _0x3deb55['volume'] = 0x0;
        _0x54e5bb(_0x3deb55);
        _0x2bcc5d(_0x1a9d6d, 0x0, _0x3012b7, _0xbf20da);
        if (_0x17908a && _0xfe76e[_0x17908a]) {
            const _0x1c100a = _0x17908a;
            const _0x269429 = _0xfe76e[_0x1c100a];
            const _0x59a103 = _0x2a9cd7(_0x269429['volume']);
            _0x2bcc5d(_0x1c100a, _0x59a103, 0x0, _0xbf20da, () => {
                _0x269429['pause']();
                _0x269429['currentTime'] = 0x0;
            });
        }
    }
    function _0x366290(_0x14c0f3) {
        _0x3012b7 = _0x2a9cd7(_0x14c0f3);
        localStorage['setItem']('musicVolume', String(_0x3012b7));
        if (!_0x4d46f5 && _0x8d1ba7 && _0x5759a9[_0x8d1ba7] === null) {
            _0xfe76e[_0x8d1ba7]['volume'] = _0x3012b7;
        }
    }
    function _0x17a0c2() {
        return _0x3012b7;
    }
    function _0x4c5afb(_0x2f06fe) {
        _0x4d46f5 = _0x2f06fe;
        for (const _0x5382e1 of Object['keys'](_0xfe76e)) {
            if (_0x5759a9[_0x5382e1] === null) {
                _0xfe76e[_0x5382e1]['volume'] = _0x2f06fe || _0x5382e1 !== _0x8d1ba7 ? 0x0 : _0x3012b7;
            }
        }
    }
    function _0x5194c5() {
        return _0x4d46f5;
    }
    function _0xbd5a9c(_0x3bf5f6) {
        if (_0x3bf5f6 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x3bf5f6 === 'DAY_VOTE')
            return 'voting';
        return 'wait';
    }
    function _0xd66be1(_0x22315a) {
        _0x50e28e(_0xbd5a9c(_0x22315a));
    }
    function _0x3a785e(_0x4f1e22) {
        _0x50e28e(_0x4f1e22);
    }
    return {
        'play': _0x50e28e,
        'onStateChange': _0xd66be1,
        'onSoundEvent': _0x3a785e,
        'setVolume': _0x366290,
        'getVolume': _0x17a0c2,
        'setMuted': _0x4c5afb,
        'isMuted': _0x5194c5
    };
})());
const _0x5aa71e = ((() => {
    const _0x4dc3f0 = 0x258;
    const _0x3fa537 = 0xb4;
    const _0x8c3340 = 0x708;
    const _0x21fd81 = 0x140;
    const _0x550ffb = 0.18;
    const _0x499578 = 0.95;
    const _0x27a92c = new Audio('audio/heartbeat.mp3');
    _0x27a92c['loop'] = ![];
    _0x27a92c['preload'] = 'auto';
    _0x27a92c['volume'] = 0x0;
    let _0x31f347 = 0x0;
    let _0x3b33a0 = Infinity;
    function _0x39cd83(_0x5a94ea, _0x122893, _0x41910c) {
        return Math['min'](_0x41910c, Math['max'](_0x122893, _0x5a94ea));
    }
    function _0x408603(_0x570e32, _0x37ad33, _0x28fb02) {
        return _0x570e32 + (_0x37ad33 - _0x570e32) * _0x28fb02;
    }
    function _0x171a0c(_0x4175db) {
        if (_0x2db359['GAME_STATE'] !== 'NIGHT' || _0x3e4f57['isDead'] || _0x42f346 === 'Skinwalker') {
            _0x3b33a0 = Infinity;
            return;
        }
        const _0x1561ba = _0x3e4f57['x'] + 22.5;
        const _0x1cc68f = _0x3e4f57['y'] + 22.5;
        let _0x231070 = Infinity;
        for (const _0x23ae9b in _0x59fd94) {
            const _0x177d4e = _0x59fd94[_0x23ae9b];
            if (!_0x177d4e['isDark'] || _0x177d4e['isDead'])
                continue;
            const _0x46d1ab = _0x177d4e['renderX'] + 22.5 - _0x1561ba;
            const _0x2608fb = _0x177d4e['renderY'] + 22.5 - _0x1cc68f;
            const _0x3e42a6 = Math['sqrt'](_0x46d1ab * _0x46d1ab + _0x2608fb * _0x2608fb);
            if (_0x3e42a6 < _0x231070)
                _0x231070 = _0x3e42a6;
        }
        _0x3b33a0 = _0x231070;
        if (_0x231070 > _0x4dc3f0)
            return;
        const _0x20c55d = 0x1 - _0x39cd83((_0x231070 - _0x3fa537) / (_0x4dc3f0 - _0x3fa537), 0x0, 0x1);
        const _0x5d15d2 = _0x408603(_0x8c3340, _0x21fd81, _0x20c55d);
        const _0x4c5177 = _0x408603(_0x550ffb, _0x499578, _0x20c55d);
        if (_0x4175db >= _0x31f347) {
            _0x27a92c['currentTime'] = 0x0;
            _0x27a92c['volume'] = _0x500675['isMuted']() ? 0x0 : _0x39cd83(_0x4c5177 * _0x500675['getVolume']() / 0.7, 0x0, 0x1);
            _0x27a92c['play']()['catch'](() => {
            });
            _0x31f347 = _0x4175db + _0x5d15d2;
        }
    }
    return { 'tick': _0x171a0c };
})());
function _0x5ed601() {
    const _0x5bfd2e = document['getElementById']('mob-ability-btn');
    if (!_0x5bfd2e)
        return;
    const _0x455e5e = _0x2db359['GAME_STATE'] === 'NIGHT' && !_0x3e4f57['isDead'];
    const _0x1721d8 = _0x42f346 === 'Mayor' && !_0x158ffa['has'](_0x4037a5) && !_0x3e4f57['isDead'];
    if (_0x455e5e || _0x1721d8) {
        _0x5bfd2e['style']['display'] = 'flex';
    } else {
        _0x5bfd2e['style']['display'] = 'none';
    }
}
function _0x256ab6() {
    const _0x1fa3e2 = document['getElementById']('mobile-joystick-zone');
    const _0xc5fdfd = document['getElementById']('mobile-top-bar');
    const _0x2b4760 = document['getElementById']('mobile-action-bar');
    if (!_0x1fa3e2 || !_0xc5fdfd || !_0x2b4760)
        return;
    if (!_0xc8ec00 && _0x3eb1c3) {
        _0x1fa3e2['style']['display'] = 'flex';
        _0xc5fdfd['style']['display'] = 'flex';
        _0x2b4760['style']['display'] = 'flex';
        _0x5ed601();
    } else {
        _0x1fa3e2['style']['display'] = 'none';
        _0xc5fdfd['style']['display'] = 'none';
        _0x2b4760['style']['display'] = 'none';
    }
}
const _0x1f0b5c = document['getElementById']('gameCanvas');
const _0x13ff1e = _0x1f0b5c['getContext']('2d', { 'alpha': ![] });
const _0xb99670 = 0x500;
const _0x3f230f = 0x2d0;
const _0x2db359 = {
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
        'width': _0xb99670,
        'height': _0x3f230f
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
const _0x3e4f57 = {
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
const _0x2288e0 = new Image();
const _0x204f02 = new Image();
const _0x31c6a3 = new Image();
const _0x18bb4a = new Image();
_0x18bb4a['src'] = 'assets/mayor\x20cosmetic.png';
const _0x25e111 = [
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
const _0x58e85e = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x24165e = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x24165e === 'body1.png' || _0x24165e === 'body1')
    _0x24165e = 'body01.png';
if (!_0x24165e['endsWith']('.png'))
    _0x24165e += '.png';
let _0x2d81a8 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x2d81a8['endsWith']('.png'))
    _0x2d81a8 += '.png';
let _0xc8ec00 = !![];
let _0x55b0d7 = null;
let _0x1200f9 = null;
let _0x2e36a5 = 0x3c;
let _0x374e16 = 0x2d;
const _0x34ee84 = {};
const _0x54048d = new Image();
_0x54048d['src'] = 'assets/yanito932.png';
_0x34ee84['assets/yanito932.png'] = _0x54048d;
function _0x181179(_0x3b931a) {
    if (!_0x34ee84[_0x3b931a] || !_0x34ee84[_0x3b931a]['complete'] && _0x34ee84[_0x3b931a]['naturalWidth'] === 0x0 && _0x34ee84[_0x3b931a]['naturalHeight'] === 0x0) {
        const _0x180b24 = new Image();
        _0x180b24['src'] = _0x3b931a;
        _0x34ee84[_0x3b931a] = _0x180b24;
    }
    return _0x34ee84[_0x3b931a];
}
function _0x5add2a(_0x9774a, _0x537d74, _0x201dc2, _0x27cff9, _0x44955e) {
    try {
        const _0x3653ad = 'assets/' + (_0x537d74 || 'body01.png');
        const _0x3d166b = _0x181179(_0x3653ad);
        if (_0x3d166b['complete'] && _0x3d166b['naturalWidth'] > 0x0) {
            _0x9774a['drawImage'](_0x3d166b, -_0x27cff9 / 0x2, -_0x44955e / 0x2, _0x27cff9, _0x44955e);
        }
        if (_0x201dc2 === null || _0x201dc2 === undefined)
            return;
        const _0x2c2b0c = 'assets/' + _0x201dc2;
        const _0x4f4b34 = _0x181179(_0x2c2b0c);
        if (_0x4f4b34['complete'] && _0x4f4b34['naturalWidth'] > 0x0) {
            _0x9774a['drawImage'](_0x4f4b34, -_0x27cff9 / 0x2, -_0x44955e / 0x2, _0x27cff9, _0x44955e);
        }
    } catch (_0x1e45dd) {
    }
}
function _0x1fa8e9() {
    const _0x1c8181 = document['getElementById']('body-skin-grid');
    const _0x356f2c = document['getElementById']('eyes-skin-grid');
    if (!_0x1c8181 || !_0x356f2c)
        return;
    _0x1c8181['innerHTML'] = '';
    _0x25e111['forEach'](_0x1dfdc4 => {
        const _0x3b4ff2 = document['createElement']('button');
        _0x3b4ff2['className'] = 'skin-btn' + (_0x1dfdc4 === _0x24165e ? '\x20selected' : '');
        const _0x235cf2 = document['createElement']('img');
        _0x235cf2['src'] = 'assets/' + _0x1dfdc4;
        _0x3b4ff2['appendChild'](_0x235cf2);
        _0x3b4ff2['onclick'] = () => {
            _0x24165e = _0x1dfdc4;
            localStorage['setItem']('selectedBody', _0x1dfdc4);
            _0x1c8181['querySelectorAll']('.skin-btn')['forEach'](_0x4c9cd3 => _0x4c9cd3['classList']['remove']('selected'));
            _0x3b4ff2['classList']['add']('selected');
        };
        _0x1c8181['appendChild'](_0x3b4ff2);
    });
    _0x356f2c['innerHTML'] = '';
    _0x58e85e['forEach'](_0x110923 => {
        const _0x5da6e7 = document['createElement']('button');
        _0x5da6e7['className'] = 'skin-btn' + (_0x110923 === _0x2d81a8 ? '\x20selected' : '');
        const _0x1b20dc = document['createElement']('img');
        _0x1b20dc['src'] = 'assets/' + _0x110923;
        _0x5da6e7['appendChild'](_0x1b20dc);
        _0x5da6e7['onclick'] = () => {
            _0x2d81a8 = _0x110923;
            localStorage['setItem']('selectedEyes', _0x110923);
            _0x356f2c['querySelectorAll']('.skin-btn')['forEach'](_0x201b53 => _0x201b53['classList']['remove']('selected'));
            _0x5da6e7['classList']['add']('selected');
        };
        _0x356f2c['appendChild'](_0x5da6e7);
    });
}
function _0x363b39(_0x5a76b9) {
    if (!_0x2db359['MAP']['columns'] || !_0x2db359['CAMERA']['width'])
        return;
    const _0x46e324 = Math['max'](0x0, _0x2db359['MAP']['columns'] * _0x2db359['MAP']['tileSize'] - _0x2db359['CAMERA']['width']);
    const _0x133c47 = Math['max'](0x0, _0x2db359['MAP']['rows'] * _0x2db359['MAP']['tileSize'] - _0x2db359['CAMERA']['height']);
    if (_0x55b0d7 === null) {
        _0x55b0d7 = _0x46e324 / 0x2;
        _0x1200f9 = _0x133c47 / 0x2;
    }
    _0x55b0d7 += _0x2e36a5 * _0x5a76b9;
    _0x1200f9 += _0x374e16 * _0x5a76b9;
    if (_0x55b0d7 <= 0x0) {
        _0x55b0d7 = 0x0;
        _0x2e36a5 = Math['abs'](_0x2e36a5);
    } else if (_0x55b0d7 >= _0x46e324) {
        _0x55b0d7 = _0x46e324;
        _0x2e36a5 = -Math['abs'](_0x2e36a5);
    }
    if (_0x1200f9 <= 0x0) {
        _0x1200f9 = 0x0;
        _0x374e16 = Math['abs'](_0x374e16);
    } else if (_0x1200f9 >= _0x133c47) {
        _0x1200f9 = _0x133c47;
        _0x374e16 = -Math['abs'](_0x374e16);
    }
    _0x2db359['CAMERA']['x'] = _0x55b0d7;
    _0x2db359['CAMERA']['y'] = _0x1200f9;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0xdedcce = document['getElementById']('play-btn');
    const _0x5e99ff = document['getElementById']('username-input');
    const _0x3bd57d = localStorage['getItem']('playerName');
    if (_0x3bd57d && _0x5e99ff) {
        _0x5e99ff['value'] = _0x3bd57d;
    }
    const _0x16a4e1 = () => {
        _0x500675['play']('wait');
        document['removeEventListener']('click', _0x16a4e1);
        document['removeEventListener']('keydown', _0x16a4e1);
        document['removeEventListener']('touchstart', _0x16a4e1);
    };
    document['addEventListener']('click', _0x16a4e1, { 'once': !![] });
    document['addEventListener']('keydown', _0x16a4e1, { 'once': !![] });
    document['addEventListener']('touchstart', _0x16a4e1, { 'once': !![] });
    if (_0xdedcce) {
        _0xdedcce['addEventListener']('click', () => {
            const _0x1294c2 = _0x5e99ff['value'];
            const _0x47bb04 = _0x1294c2['replace'](/<[^>]*>/g, '')['replace'](/[^\x20-\x7E]/g, '')['replace'](/[<>]/g, '')['replace'](/\s+/g, '\x20')['trim']()['substring'](0x0, 0xe);
            _0x34ea00 = _0x47bb04 || 'Player';
            localStorage['setItem']('playerName', _0x34ea00);
            _0xc8ec00 = ![];
            _0x2db359['CAMERA']['x'] = null;
            _0x2db359['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x4af261 = document['getElementById']('controls-hint');
            if (_0x4af261 && !_0x3eb1c3)
                _0x4af261['style']['display'] = 'block';
            _0x256ab6();
            if (_0x3eb1c3) {
                const _0x342853 = document['getElementById']('leaderboard-list');
                const _0x4979bd = document['getElementById']('leaderboard-toggle');
                if (_0x342853) {
                    _0x342853['style']['display'] = 'none';
                    if (_0x4979bd)
                        _0x4979bd['style']['transform'] = 'rotate(180deg)';
                }
                const _0x2546f9 = document['getElementById']('role-list-items');
                const _0x448735 = document['getElementById']('role-list-toggle');
                if (_0x2546f9) {
                    _0x2546f9['style']['display'] = 'none';
                    if (_0x448735)
                        _0x448735['style']['transform'] = 'rotate(180deg)';
                }
            }
            if (_0x5b79f3 && _0x5b79f3['readyState'] === WebSocket['OPEN']) {
                _0x5b79f3['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x34ea00,
                    'token': _0x3b98d4,
                    'body': _0x24165e,
                    'eyes': _0x2d81a8
                }));
            } else if (!_0x5b79f3 || _0x5b79f3['readyState'] === WebSocket['CLOSED'] || _0x5b79f3['readyState'] === WebSocket['CLOSING']) {
                _0x41e20e();
            }
        });
    }
    _0x1fa8e9();
    _0x41e20e();
    _0x229534();
    _0x5c2d17();
    _0x196262();
});
function _0x5c2d17() {
    const _0xf6ca0f = document['getElementById']('settings-btn');
    const _0x4716cb = document['getElementById']('settings-panel');
    const _0x1717a4 = document['getElementById']('close-settings-btn');
    const _0x30817c = document['getElementById']('setting-mouse-relative');
    if (_0x30817c) {
        _0x30817c['checked'] = _0x240893;
        _0x30817c['addEventListener']('change', () => {
            _0x240893 = _0x30817c['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x240893 ? 'true' : 'false');
        });
    }
    const _0x4822ce = document['getElementById']('setting-music-volume');
    const _0x46b06b = document['getElementById']('setting-music-volume-display');
    function _0x234864(_0x5dfe4e) {
        const _0x5d353d = (_0x5dfe4e['value'] - _0x5dfe4e['min']) / (_0x5dfe4e['max'] - _0x5dfe4e['min']) * 0x64;
        _0x5dfe4e['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x5d353d + '%,\x20#444\x20' + _0x5d353d + '%)';
    }
    if (_0x4822ce) {
        const _0x61679 = _0x500675['getVolume']();
        const _0x323f5c = Math['round'](_0x61679 * 0x64);
        _0x4822ce['value'] = _0x323f5c;
        if (_0x46b06b)
            _0x46b06b['textContent'] = _0x323f5c + '%';
        _0x234864(_0x4822ce);
        _0x4822ce['addEventListener']('input', () => {
            const _0x5440e2 = parseInt(_0x4822ce['value'], 0xa);
            if (_0x46b06b)
                _0x46b06b['textContent'] = _0x5440e2 + '%';
            _0x234864(_0x4822ce);
            _0x500675['setVolume'](_0x5440e2 / 0x64);
            _0x500675['setMuted'](_0x5440e2 === 0x0);
        });
    }
    if (_0xf6ca0f && _0x4716cb) {
        _0xf6ca0f['addEventListener']('click', _0x16fecd => {
            _0x16fecd['stopPropagation']();
            _0x4716cb['style']['display'] = _0x4716cb['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x1717a4 && _0x4716cb) {
        _0x1717a4['addEventListener']('click', () => {
            _0x4716cb['style']['display'] = 'none';
        });
    }
    const _0x428092 = document['getElementById']('mayor-confirm-yes');
    const _0x588b16 = document['getElementById']('mayor-confirm-no');
    const _0x1c1dd7 = document['getElementById']('mayor-confirm-dialog');
    if (_0x428092 && _0x1c1dd7) {
        _0x428092['addEventListener']('click', () => {
            if (_0x5b79f3 && _0x5b79f3['readyState'] === WebSocket['OPEN']) {
                _0x5b79f3['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x1c1dd7['style']['display'] = 'none';
        });
    }
    if (_0x588b16 && _0x1c1dd7) {
        _0x588b16['addEventListener']('click', () => {
            _0x1c1dd7['style']['display'] = 'none';
        });
    }
    const _0x1c4261 = document['getElementById']('close-ability-btn');
    if (_0x1c4261) {
        _0x1c4261['addEventListener']('click', () => {
            const _0x5aa5e6 = document['getElementById']('ability-ui');
            if (_0x5aa5e6)
                _0x5aa5e6['style']['display'] = 'none';
        });
    }
}
let _0x34ee29 = '';
function _0xc3c1b9(_0x5abc0a) {
    const _0x258bf7 = document['getElementById']('vote-tally-panel');
    const _0x20b1a2 = document['getElementById']('vote-tally-list');
    if (!_0x258bf7 || !_0x20b1a2)
        return;
    if (_0x5abc0a['state'] !== 'DAY_VOTE') {
        _0x258bf7['style']['display'] = 'none';
        _0x34ee29 = '';
        return;
    }
    _0x258bf7['style']['display'] = 'block';
    const _0x5e9c57 = {};
    for (const _0xf7a89a in _0x59fd94) {
        if (!_0x59fd94[_0xf7a89a]['isDead'])
            _0x5e9c57[_0xf7a89a] = 0x0;
    }
    if (_0x4037a5 && !_0x3e4f57['isDead'])
        _0x5e9c57[_0x4037a5] = 0x0;
    const _0x3f8d55 = _0x5abc0a['votes'] || {};
    for (const _0x1e4428 in _0x3f8d55) {
        const _0x117eb5 = _0x3f8d55[_0x1e4428];
        const _0x13dda9 = _0x5abc0a['mayorRevealed'] && _0x5abc0a['mayorRevealed'][_0x1e4428] ? 0x2 : 0x1;
        _0x5e9c57[_0x117eb5] = (_0x5e9c57[_0x117eb5] || 0x0) + _0x13dda9;
    }
    let _0x547acb = 0x0;
    const _0x39c72d = _0x5abc0a['skips'] || {};
    for (const _0x7928b9 in _0x39c72d) {
        _0x547acb += Number(_0x39c72d[_0x7928b9]) || 0x1;
    }
    const _0xe64b81 = JSON['stringify'](_0x5e9c57) + '_' + _0x547acb + '_' + _0x3e4f57['isDead'];
    if (_0xe64b81 === _0x34ee29)
        return;
    _0x34ee29 = _0xe64b81;
    _0x20b1a2['innerHTML'] = '';
    for (const _0x23a3ca in _0x5e9c57) {
        const _0x528a15 = parseInt(_0x23a3ca);
        const _0x586d1b = _0x528a15 === _0x4037a5 ? _0x34ea00 : _0x59fd94[_0x23a3ca] ? _0x59fd94[_0x23a3ca]['name'] : 'Player\x20' + _0x23a3ca;
        const _0x1d194b = document['createElement']('div');
        _0x1d194b['className'] = 'vote-tally-entry';
        const _0x5574ef = document['createElement']('span');
        _0x5574ef['textContent'] = _0x586d1b;
        const _0x4e0f8e = document['createElement']('span');
        _0x4e0f8e['className'] = 'vote-count';
        _0x4e0f8e['textContent'] = _0x5e9c57[_0x23a3ca] + '\x20vote' + (_0x5e9c57[_0x23a3ca] === 0x1 ? '' : 's');
        _0x1d194b['appendChild'](_0x5574ef);
        _0x1d194b['appendChild'](_0x4e0f8e);
        if (_0x528a15 !== _0x4037a5 && !_0x3e4f57['isDead']) {
            _0x1d194b['style']['cursor'] = 'pointer';
            _0x1d194b['title'] = 'Vote\x20for\x20' + _0x586d1b;
            _0x1d194b['addEventListener']('click', _0xb0693b => {
                _0xb0693b['stopPropagation']();
                if (_0x5b79f3 && _0x5b79f3['readyState'] === WebSocket['OPEN']) {
                    _0x5b79f3['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x586d1b
                    }));
                }
            });
        }
        _0x20b1a2['appendChild'](_0x1d194b);
    }
    const _0x537efa = document['createElement']('div');
    _0x537efa['className'] = 'vote-tally-skip';
    _0x537efa['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x547acb + '</span>';
    if (!_0x3e4f57['isDead']) {
        _0x537efa['style']['cursor'] = 'pointer';
        _0x537efa['title'] = 'Click\x20to\x20skip\x20vote';
        _0x537efa['addEventListener']('click', _0x3ae36b => {
            _0x3ae36b['stopPropagation']();
            if (_0x5b79f3 && _0x5b79f3['readyState'] === WebSocket['OPEN']) {
                _0x5b79f3['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x20b1a2['appendChild'](_0x537efa);
}
let _0x40cf99 = null;
let _0x58a202 = null;
let _0xb6aadd = null;
function _0x537dbc() {
    if (_0x5b79f3 && _0x5b79f3['readyState'] === WebSocket['OPEN']) {
        _0x5b79f3['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x40cf99,
            'abilityTarget': _0x58a202,
            'killTarget': _0xb6aadd
        }));
    }
}
function _0x140e79() {
    const _0x3fe5ac = document['getElementById']('ability-ui-body');
    if (!_0x3fe5ac)
        return;
    _0x3fe5ac['innerHTML'] = '';
    if (_0x42f346 === 'Celebrity' || _0x42f346 === 'Mayor') {
        const _0x1d0d87 = document['createElement']('div');
        _0x1d0d87['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x1d0d87['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x3fe5ac['appendChild'](_0x1d0d87);
        return;
    }
    if (_0x42f346 === 'Skinwalker') {
        const _0x5e52fc = document['createElement']('div');
        _0x5e52fc['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x5e52fc['innerText'] = 'Transform\x20into:';
        _0x3fe5ac['appendChild'](_0x5e52fc);
        const _0x25e54a = document['createElement']('div');
        _0x25e54a['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0xc39efc = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x7a38b4 = _0x549165 => {
            if (!_0x2db359['ROLE_LIST_RAW'] || _0x2db359['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x2db359['ROLE_LIST_RAW']['some'](_0x173339 => {
                if (_0x173339['name'] === _0x549165)
                    return !_0x173339['isDead'];
                if (_0x49ad7b[_0x173339['name']] && _0x49ad7b[_0x173339['name']]['includes'](_0x549165))
                    return !![];
                return ![];
            });
        };
        const _0x5975c0 = [
            'None',
            ..._0xc39efc['filter'](_0x7a38b4)
        ];
        _0x5975c0['forEach'](_0x52d339 => {
            const _0x40afd0 = document['createElement']('button');
            _0x40afd0['className'] = 'layer-btn';
            _0x40afd0['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x40afd0['innerText'] = _0x52d339;
            const _0x2b3900 = _0x52d339 === 'None' && !_0x40cf99 || _0x40cf99 === _0x52d339;
            if (_0x2b3900)
                _0x40afd0['classList']['add']('active');
            _0x40afd0['onclick'] = () => {
                _0x40cf99 = _0x52d339 === 'None' ? null : _0x52d339;
                _0x537dbc();
                _0x140e79();
            };
            _0x25e54a['appendChild'](_0x40afd0);
        });
        _0x3fe5ac['appendChild'](_0x25e54a);
        if (_0x7a38b4('Vigilante')) {
            const _0x5183ee = document['createElement']('div');
            _0x5183ee['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x5183ee['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x3fe5ac['appendChild'](_0x5183ee);
        }
        if (_0x40cf99 === 'Vigilante') {
            const _0x3429c8 = document['createElement']('div');
            _0x3429c8['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x3429c8['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x3fe5ac['appendChild'](_0x3429c8);
        } else if (_0x40cf99 && _0x40cf99 !== 'Celebrity') {
            const _0xa763f9 = document['createElement']('div');
            _0xa763f9['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0xa763f9['innerText'] = 'Use\x20' + _0x40cf99 + '\x20ability\x20on:';
            _0x3fe5ac['appendChild'](_0xa763f9);
            const _0xf36d20 = document['createElement']('div');
            _0xf36d20['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0xa4752 = document['createElement']('button');
            _0xa4752['className'] = 'layer-btn';
            _0xa4752['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0xa4752['innerText'] = 'No\x20one';
            if (!_0x58a202)
                _0xa4752['classList']['add']('active');
            _0xa4752['onclick'] = () => {
                _0x58a202 = null;
                _0x537dbc();
                _0x140e79();
            };
            _0xf36d20['appendChild'](_0xa4752);
            for (const _0x13ba03 in _0x59fd94) {
                const _0x1d21e3 = _0x59fd94[_0x13ba03];
                if (_0x1d21e3['isDead'])
                    continue;
                const _0xef628 = document['createElement']('button');
                _0xef628['className'] = 'layer-btn';
                _0xef628['innerText'] = _0x1d21e3['name'];
                if (_0x58a202 === parseInt(_0x13ba03))
                    _0xef628['classList']['add']('active');
                _0xef628['onclick'] = () => {
                    _0x58a202 = parseInt(_0x13ba03);
                    _0x537dbc();
                    _0x140e79();
                };
                _0xf36d20['appendChild'](_0xef628);
            }
            _0x3fe5ac['appendChild'](_0xf36d20);
        }
        const _0x34dca8 = document['createElement']('div');
        _0x34dca8['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x34dca8['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x3fe5ac['appendChild'](_0x34dca8);
        const _0x1302f9 = document['createElement']('div');
        _0x1302f9['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x5b3f54 = document['createElement']('button');
        _0x5b3f54['className'] = 'layer-btn';
        _0x5b3f54['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x5b3f54['innerText'] = 'No\x20one';
        if (!_0xb6aadd && !_0x2db359['CURRENT_TARGET'])
            _0x5b3f54['classList']['add']('active');
        _0x5b3f54['onclick'] = () => {
            _0xb6aadd = null;
            _0x2db359['CURRENT_TARGET'] = null;
            _0x537dbc();
            _0x140e79();
        };
        _0x1302f9['appendChild'](_0x5b3f54);
        for (const _0x39ec53 in _0x59fd94) {
            const _0x257815 = _0x59fd94[_0x39ec53];
            if (_0x257815['isDead'])
                continue;
            const _0x2aba0e = document['createElement']('button');
            _0x2aba0e['className'] = 'layer-btn';
            _0x2aba0e['innerText'] = _0x257815['name'];
            if (_0xb6aadd === parseInt(_0x39ec53) || _0x2db359['CURRENT_TARGET'] === parseInt(_0x39ec53))
                _0x2aba0e['classList']['add']('active');
            _0x2aba0e['onclick'] = () => {
                _0xb6aadd = parseInt(_0x39ec53);
                _0x2db359['CURRENT_TARGET'] = parseInt(_0x39ec53);
                _0x537dbc();
                _0x140e79();
            };
            _0x1302f9['appendChild'](_0x2aba0e);
        }
        _0x3fe5ac['appendChild'](_0x1302f9);
        return;
    }
    let _0x177de6 = '';
    let _0x39695d = ![];
    if (_0x42f346 === 'Doctor') {
        _0x177de6 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x39695d = !![];
    } else if (_0x42f346 === 'Investigator') {
        _0x177de6 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x42f346 === 'Tracker') {
        _0x177de6 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x42f346 === 'Archer') {
        _0x177de6 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x42f346 === 'Escort') {
        _0x177de6 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x42f346 === 'Vigilante') {
        _0x177de6 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x6c9196 = document['createElement']('div');
    _0x6c9196['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x6c9196['innerText'] = _0x177de6;
    _0x3fe5ac['appendChild'](_0x6c9196);
    const _0x25b09e = document['createElement']('div');
    _0x25b09e['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x21609d = document['createElement']('button');
    _0x21609d['className'] = 'layer-btn';
    _0x21609d['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x21609d['innerText'] = 'No\x20one';
    if (_0x2db359['CURRENT_TARGET'] === null)
        _0x21609d['classList']['add']('active');
    _0x21609d['onclick'] = () => {
        _0x2db359['CURRENT_TARGET'] = null;
        if (_0x5b79f3 && _0x5b79f3['readyState'] === WebSocket['OPEN']) {
            _0x5b79f3['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x140e79();
    };
    _0x25b09e['appendChild'](_0x21609d);
    for (const _0x47229f in _0x59fd94) {
        const _0x4cfdc4 = _0x59fd94[_0x47229f];
        if (_0x4cfdc4['isDead'])
            continue;
        const _0x40caa2 = document['createElement']('button');
        _0x40caa2['className'] = 'layer-btn';
        _0x40caa2['innerText'] = _0x4cfdc4['name'];
        if (_0x2db359['CURRENT_TARGET'] === parseInt(_0x47229f))
            _0x40caa2['classList']['add']('active');
        _0x40caa2['onclick'] = () => {
            _0x2db359['CURRENT_TARGET'] = parseInt(_0x47229f);
            if (_0x5b79f3 && _0x5b79f3['readyState'] === WebSocket['OPEN']) {
                _0x5b79f3['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x47229f)
                }));
            }
            _0x140e79();
        };
        _0x25b09e['appendChild'](_0x40caa2);
    }
    if (_0x39695d && !_0x3e4f57['isDead']) {
        const _0x523217 = document['createElement']('button');
        _0x523217['className'] = 'layer-btn';
        _0x523217['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x523217['innerText'] = _0x34ea00 + '\x20(Self)';
        if (_0x2db359['CURRENT_TARGET'] === _0x4037a5)
            _0x523217['classList']['add']('active');
        _0x523217['onclick'] = () => {
            _0x2db359['CURRENT_TARGET'] = _0x4037a5;
            if (_0x5b79f3 && _0x5b79f3['readyState'] === WebSocket['OPEN']) {
                _0x5b79f3['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x4037a5
                }));
            }
            _0x140e79();
        };
        _0x25b09e['appendChild'](_0x523217);
    }
    _0x3fe5ac['appendChild'](_0x25b09e);
}
function _0x41e20e() {
    if (_0x5b79f3 && (_0x5b79f3['readyState'] === WebSocket['OPEN'] || _0x5b79f3['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x40573b = new URLSearchParams();
    if (_0x3b98d4)
        _0x40573b['set']('token', _0x3b98d4);
    _0x40573b['set']('ngrok-skip-browser-warning', 'true');
    const _0x41d301 = 'wss://prison-rankings-inspector-terry.trycloudflare.com';
    const _0x12c11e = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x41d301;
    const _0x3c117f = _0x12c11e + '/?' + _0x40573b['toString']();
    _0x5b79f3 = new WebSocket(_0x3c117f);
    _0x5b79f3['onopen'] = function () {
        if (!_0xc8ec00 && this['readyState'] === WebSocket['OPEN']) {
            this['send'](JSON['stringify']({
                'type': 'join',
                'name': _0x34ea00,
                'token': _0x3b98d4,
                'body': _0x24165e,
                'eyes': _0x2d81a8
            }));
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x5b79f3 && _0x5b79f3['readyState'] === WebSocket['OPEN']) {
            _0x5b79f3['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x5b79f3['onclose'] = _0x38810d => {
        if (_0x38810d['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x38810d['code'] === 0xfa2 || _0x38810d['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x5cd667 = document['getElementById']('disconnect-overlay');
        if (!_0x5cd667) {
            _0x5cd667 = document['createElement']('div');
            _0x5cd667['id'] = 'disconnect-overlay';
            _0x5cd667['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x5cd667['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x5cd667);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x5b79f3['onmessage'] = _0x276c4d => {
        const _0x1aa804 = JSON['parse'](_0x276c4d['data']);
        if (_0x1aa804['type'] === 'map_data') {
            _0x2db359['MAP']['tileSize'] = _0x1aa804['map']['tileSize'];
            _0x2db359['MAP']['columns'] = _0x1aa804['map']['columns'];
            _0x2db359['MAP']['rows'] = _0x1aa804['map']['rows'];
            _0x2db359['MAP']['layers'] = _0x1aa804['map']['layers'];
            if (_0x1aa804['map']['doors']) {
                _0x2db359['MAP']['doors'] = _0x1aa804['map']['doors'];
                const _0xe30b50 = _0x2db359['MAP']['layers']['find'](_0x24c2d1 => _0x24c2d1['name'] === 'floor2');
                if (_0xe30b50) {
                    for (const _0x425f80 in _0x2db359['MAP']['doors']) {
                        _0xe30b50['data'][parseInt(_0x425f80)] = 0x2;
                    }
                }
            }
            if (_0x1aa804['entities'])
                _0x2db359['ENTITIES'] = _0x1aa804['entities'];
            _0x2b3450();
            _0x2db359['SYSTEM']['isReady'] = !![];
            _0x509f7e();
            if (!_0x2db359['SYSTEM']['_gameLoopRunning']) {
                _0x2db359['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x3f4b22);
            }
            return;
        }
        if (_0x1aa804['type'] === 'init') {
            _0x4037a5 = _0x1aa804['id'];
            _0xc8ec00 = ![];
            _0x256ab6();
            if (_0x3eb1c3) {
                const _0x17bac0 = document['getElementById']('leaderboard-list');
                const _0x5c29b4 = document['getElementById']('leaderboard-toggle');
                if (_0x17bac0) {
                    _0x17bac0['style']['display'] = 'none';
                    if (_0x5c29b4)
                        _0x5c29b4['style']['transform'] = 'rotate(180deg)';
                }
                const _0x41b392 = document['getElementById']('role-list-items');
                const _0x361ced = document['getElementById']('role-list-toggle');
                if (_0x41b392) {
                    _0x41b392['style']['display'] = 'none';
                    if (_0x361ced)
                        _0x361ced['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x37e7cc = _0x1aa804['isOwner'] || ![];
            _0x34ea00 = _0x1aa804['name'] || _0x34ea00;
            _0x2db359['MAP']['tileSize'] = _0x1aa804['map']['tileSize'];
            _0x2db359['MAP']['columns'] = _0x1aa804['map']['columns'];
            _0x2db359['MAP']['rows'] = _0x1aa804['map']['rows'];
            _0x2db359['MAP']['layers'] = _0x1aa804['map']['layers'];
            if (_0x1aa804['map']['doors']) {
                _0x2db359['MAP']['doors'] = _0x1aa804['map']['doors'];
                const _0x58b7e9 = _0x2db359['MAP']['layers']['find'](_0x48104f => _0x48104f['name'] === 'floor2');
                if (_0x58b7e9) {
                    for (const _0x1a8f2c in _0x2db359['MAP']['doors']) {
                        _0x58b7e9['data'][parseInt(_0x1a8f2c)] = 0x2;
                    }
                }
            }
            if (_0x1aa804['entities'])
                _0x2db359['ENTITIES'] = _0x1aa804['entities'];
            _0x2b3450();
            _0x3e4f57['x'] = _0x2db359['MAP']['columns'] * _0x2db359['MAP']['tileSize'] / 0x2;
            _0x3e4f57['y'] = _0x2db359['MAP']['rows'] * _0x2db359['MAP']['tileSize'] / 0x2;
            _0x2db359['CAMERA']['x'] = _0x3e4f57['x'] + _0x3e4f57['width'] / 0x2 - _0x2db359['CAMERA']['width'] / 0x2;
            _0x2db359['CAMERA']['y'] = _0x3e4f57['y'] + _0x3e4f57['height'] / 0x2 - _0x2db359['CAMERA']['height'] / 0x2;
            if (_0x37e7cc) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x3db51e();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x2db359['SYSTEM']['lastTime'] = performance['now']();
            _0x2db359['SYSTEM']['isReady'] = !![];
            _0x26abc9();
            if (!_0x2db359['SYSTEM']['_gameLoopRunning']) {
                _0x2db359['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x3f4b22);
            }
            return;
        } else if (_0x1aa804['type'] === 'state') {
            const _0x10ec85 = {};
            for (const _0x379818 in _0x1aa804['players']) {
                if (parseInt(_0x379818) === _0x4037a5)
                    continue;
                const _0xc46cd3 = _0x1aa804['players'][_0x379818];
                const _0x84996e = _0x59fd94[_0x379818];
                if (_0x84996e) {
                    const _0x5837e1 = _0xc46cd3['x'] - _0x84996e['renderX'];
                    const _0x372ef2 = _0xc46cd3['y'] - _0x84996e['renderY'];
                    const _0x4e234a = _0x5837e1 * _0x5837e1 + _0x372ef2 * _0x372ef2 > 0x78 * 0x78;
                    Object['assign'](_0x84996e, _0xc46cd3);
                    if (_0x4e234a) {
                        _0x84996e['renderX'] = _0xc46cd3['x'];
                        _0x84996e['renderY'] = _0xc46cd3['y'];
                    }
                    _0x10ec85[_0x379818] = _0x84996e;
                } else {
                    _0x10ec85[_0x379818] = {
                        ..._0xc46cd3,
                        'renderX': _0xc46cd3['x'],
                        'renderY': _0xc46cd3['y'],
                        'renderAngle': _0xc46cd3['angle'] || 0x0
                    };
                }
            }
            _0x59fd94 = _0x10ec85;
            if (_0x1aa804['players'][_0x4037a5]) {
                const _0x1e0024 = _0x1aa804['players'][_0x4037a5];
                _0x3e4f57['chats'] = _0x1e0024['chats'] || [];
                _0x3e4f57['isDead'] = _0x1e0024['isDead'];
                if (_0x1e0024['name'])
                    _0x34ea00 = _0x1e0024['name'];
                _0x26abc9();
                const _0x144a7f = Math['hypot'](_0x1e0024['x'] - _0x3e4f57['x'], _0x1e0024['y'] - _0x3e4f57['y']);
                if (_0x144a7f > 0x32) {
                    _0x3e4f57['x'] += (_0x1e0024['x'] - _0x3e4f57['x']) * 0.35;
                    _0x3e4f57['y'] += (_0x1e0024['y'] - _0x3e4f57['y']) * 0.35;
                }
            }
            if (_0x1aa804['entities'])
                _0x2db359['ENTITIES'] = _0x1aa804['entities'];
            if (_0x1aa804['game']) {
                _0x2db359['GAME_STATE'] = _0x1aa804['game']['state'];
                _0x2db359['NIGHT_ABILITY_OPEN'] = _0x1aa804['game']['nightAbilityOpen'];
                if (_0x1aa804['game']['mayorRevealed']) {
                    for (const _0xeb0d51 in _0x1aa804['game']['mayorRevealed']) {
                        _0x158ffa['add'](parseInt(_0xeb0d51));
                    }
                }
                if (_0x2db359['LAST_STATE'] !== _0x2db359['GAME_STATE']) {
                    if (_0x2db359['GAME_STATE'] !== 'NIGHT') {
                        _0x2db359['CURRENT_TARGET'] = null;
                        _0x40cf99 = null;
                        _0x58a202 = null;
                        _0xb6aadd = null;
                        const _0x2816bc = document['getElementById']('ability-ui');
                        if (_0x2816bc)
                            _0x2816bc['style']['display'] = 'none';
                    }
                    if (_0x2db359['GAME_STATE'] === 'NIGHT') {
                        _0x3e4f57['chats'] = [];
                        for (const _0xbc72d3 in _0x59fd94) {
                            _0x59fd94[_0xbc72d3]['chats'] = [];
                        }
                    }
                    _0x2db359['LAST_STATE'] = _0x2db359['GAME_STATE'];
                    _0x5ed601();
                    _0x500675['onStateChange'](_0x2db359['GAME_STATE'], _0x1aa804['game']['nightAbilityOpen']);
                }
                const _0x4779e0 = document['getElementById']('phase-ui');
                if (_0x4779e0) {
                    _0x4779e0['style']['display'] = 'block';
                    let _0x411ae7 = _0x1aa804['game']['state']['replace']('_', '\x20');
                    if (_0x1aa804['game']['state'] === 'DAY_DISCUSS') {
                        _0x411ae7 = 'DAY\x20' + (_0x1aa804['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x1aa804['game']['timer'] + 's';
                    } else if (_0x1aa804['game']['state'] === 'DAY_VOTE') {
                        _0x411ae7 = 'DAY\x20' + (_0x1aa804['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x1aa804['game']['timer'] + 's';
                    } else if (_0x1aa804['game']['state'] === 'NIGHT') {
                        const _0x3e040d = _0x1aa804['game']['dayCount'] || 0x1;
                        if (_0x1aa804['game']['nightAbilityOpen']) {
                            _0x411ae7 = 'NIGHT\x20' + _0x3e040d + '\x20ABILITY\x20PHASE';
                            const _0x41c92e = _0x1aa804['game']['abilityTimer'] !== undefined ? _0x1aa804['game']['abilityTimer'] : _0x1aa804['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x41c92e + 's';
                        } else {
                            _0x411ae7 = 'NIGHT\x20' + _0x3e040d;
                            document['getElementById']('phase-timer')['innerText'] = _0x1aa804['game']['timer'] + 's';
                        }
                    }
                    document['getElementById']('phase-name')['innerText'] = _0x411ae7;
                }
                if (_0x1aa804['game']['state'] === 'NIGHT') {
                    const _0x50df06 = document['getElementById']('ability-timer-label');
                    if (_0x50df06) {
                        const _0xa02290 = _0x1aa804['game']['abilityTimer'] !== undefined ? _0x1aa804['game']['abilityTimer'] : _0x1aa804['game']['timer'];
                        _0x50df06['innerText'] = _0x1aa804['game']['nightAbilityOpen'] ? _0xa02290 + 's' : '';
                    }
                    if (_0x1aa804['game']['nightAbilityOpen'] && !_0x2cb8de && !_0x3e4f57['isDead']) {
                        _0x2cb8de = !![];
                        _0x140e79();
                        const _0x44db11 = document['getElementById']('ability-ui');
                        if (_0x44db11)
                            _0x44db11['style']['display'] = 'block';
                    }
                    if (!_0x1aa804['game']['nightAbilityOpen']) {
                        const _0x4c3eb3 = document['getElementById']('ability-ui');
                        if (_0x4c3eb3 && _0x4c3eb3['style']['display'] === 'block') {
                            _0x4c3eb3['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x2cb8de = ![];
                }
                _0xc3c1b9(_0x1aa804['game']);
                if (_0x1aa804['game']['roleListMode'] !== undefined) {
                    _0x2db359['ROLE_LIST_RAW'] = _0x1aa804['game']['roleList'] || [];
                    _0x5312f3(_0x1aa804['game']['roleList'], _0x1aa804['game']['roleListMode']);
                }
            }
        } else if (_0x1aa804['type'] === 'teleport') {
            _0x3e4f57['x'] = _0x1aa804['x'];
            _0x3e4f57['y'] = _0x1aa804['y'];
            _0x3e4f57['vx'] = 0x0;
            _0x3e4f57['vy'] = 0x0;
            _0x2db359['CAMERA']['x'] = null;
            if (_0x1aa804['teleportId'] !== undefined)
                _0x4f9f5f = _0x1aa804['teleportId'];
        } else if (_0x1aa804['type'] === 'bulk_teleport') {
            for (const _0x169973 in _0x1aa804['positions']) {
                const _0x5af171 = _0x1aa804['positions'][_0x169973];
                if (parseInt(_0x169973) === _0x4037a5) {
                    _0x3e4f57['x'] = _0x5af171['x'];
                    _0x3e4f57['y'] = _0x5af171['y'];
                    _0x3e4f57['vx'] = 0x0;
                    _0x3e4f57['vy'] = 0x0;
                    _0x2db359['CAMERA']['x'] = null;
                    continue;
                }
                const _0x554659 = _0x59fd94[_0x169973];
                if (_0x554659) {
                    _0x554659['x'] = _0x5af171['x'];
                    _0x554659['y'] = _0x5af171['y'];
                    _0x554659['renderX'] = _0x5af171['x'];
                    _0x554659['renderY'] = _0x5af171['y'];
                    _0x554659['vx'] = 0x0;
                    _0x554659['vy'] = 0x0;
                }
            }
        } else if (_0x1aa804['type'] === 'player_left') {
            delete _0x59fd94[_0x1aa804['id']];
            _0x158ffa['delete'](parseInt(_0x1aa804['id']));
        } else if (_0x1aa804['type'] === 'map_update') {
            const _0x534716 = _0x2db359['MAP']['layers']['find'](_0x335387 => _0x335387['name'] === _0x1aa804['layer']);
            if (_0x534716) {
                _0x534716['data'][_0x1aa804['row'] * _0x2db359['MAP']['columns'] + _0x1aa804['col']] = _0x1aa804['gid'];
                const _0x2bc82a = _0x1aa804['row'] * _0x2db359['MAP']['columns'] + _0x1aa804['col'];
                if (_0x2db359['MAP']['doors'] && _0x2db359['MAP']['doors'][_0x2bc82a]) {
                    const _0x876294 = _0x2db359['MAP']['layers']['find'](_0x5a3d27 => _0x5a3d27['name'] === 'floor2');
                    if (_0x876294)
                        _0x876294['data'][_0x2bc82a] = 0x2;
                }
                const _0x387e8e = Math['floor'](_0x1aa804['col'] * _0x2db359['MAP']['tileSize'] / _0x2db359['MAP']['chunkSize']);
                const _0x7aa3d9 = Math['floor'](_0x1aa804['row'] * _0x2db359['MAP']['tileSize'] / _0x2db359['MAP']['chunkSize']);
                _0x142f18(_0x387e8e, _0x7aa3d9);
            }
        } else if (_0x1aa804['type'] === 'role_assign') {
            _0x42f346 = _0x1aa804['role'];
            _0x3e4f57['isDead'] = _0x42f346 === 'Spectator';
            _0x158ffa['clear']();
            _0x2db359['CURRENT_TARGET'] = null;
            _0x40cf99 = null;
            _0x58a202 = null;
            _0xb6aadd = null;
            _0x2cb8de = ![];
            const _0x187374 = document['getElementById']('ability-ui');
            if (_0x187374)
                _0x187374['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x42f346;
            _0x5ed601();
            _0x4919ec(_0x42f346 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x42f346, !![]);
            let _0x12e0db = '';
            if (_0x42f346 === 'Investigator')
                _0x12e0db = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x42f346 === 'Tracker')
                _0x12e0db = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x42f346 === 'Doctor')
                _0x12e0db = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x42f346 === 'Archer')
                _0x12e0db = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x42f346 === 'Escort')
                _0x12e0db = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x42f346 === 'Vigilante')
                _0x12e0db = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x42f346 === 'Skinwalker')
                _0x12e0db = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x42f346 === 'Celebrity')
                _0x12e0db = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x42f346 === 'Mayor')
                _0x12e0db = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x4919ec(_0x12e0db, !![]);
        } else if (_0x1aa804['type'] === 'mayor_reveal') {
            _0x158ffa['add'](parseInt(_0x1aa804['playerId']));
            _0x26abc9();
            _0x5ed601();
        } else if (_0x1aa804['type'] === 'rolelist_update') {
            _0x2db359['ROLE_LIST_RAW'] = _0x1aa804['list'] || [];
            _0x5312f3(_0x1aa804['list'], _0x1aa804['mode']);
        } else if (_0x1aa804['type'] === 'sound_event') {
            _0x500675['onSoundEvent'](_0x1aa804['track']);
        } else if (_0x1aa804['type'] === 'game_over') {
            _0x500675['onStateChange']('LOBBY', ![]);
            _0x5312f3([], 'off');
            _0x42f346 = null;
            _0x3e4f57['isDead'] = ![];
            _0x158ffa['clear']();
            _0x2db359['CURRENT_TARGET'] = null;
            _0x40cf99 = null;
            _0x58a202 = null;
            _0xb6aadd = null;
            _0x2cb8de = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x5ed601();
            _0x4919ec('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x1aa804['type'] === 'chat_log') {
            _0x4919ec(_0x1aa804['sender'] + ':\x20' + _0x1aa804['text']);
        } else if (_0x1aa804['type'] === 'sys_chat') {
            _0x4919ec(_0x1aa804['text'], !![]);
        }
    };
}
function _0x4919ec(_0x28fa2e, _0x31899b = ![]) {
    const _0x4a2c47 = document['getElementById']('chat-log-messages');
    const _0x1ed3e4 = document['getElementById']('chat-log-ui');
    const _0x545f27 = _0x1ed3e4['scrollHeight'] - _0x1ed3e4['scrollTop'] - _0x1ed3e4['clientHeight'] < 0x1e;
    const _0x310aa3 = document['createElement']('div');
    _0x310aa3['className'] = 'chat-log-line' + (_0x31899b ? '\x20sys-msg' : '');
    _0x310aa3['innerText'] = _0x28fa2e;
    _0x4a2c47['appendChild'](_0x310aa3);
    if (_0x545f27) {
        _0x1ed3e4['scrollTop'] = _0x1ed3e4['scrollHeight'];
    }
    if (_0x4a2c47['childElementCount'] > 0xc8) {
        _0x4a2c47['removeChild'](_0x4a2c47['firstChild']);
    }
}
let _0x300d48 = -0x1, _0x5aca77 = -0x1, _0x6712a9 = -0x1, _0x4297f2 = 0x0;
function _0x3d6c32() {
    if (!_0x4037a5 || !_0x5b79f3 || _0x5b79f3['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x3a8393 = performance['now']();
    const _0x23c1b8 = _0x3a8393 - _0x4297f2;
    const _0x455d76 = Math['abs'](_0x3e4f57['x'] - _0x300d48) > 0.05 || Math['abs'](_0x3e4f57['y'] - _0x5aca77) > 0.05 || Math['abs'](_0x3e4f57['angle'] - _0x6712a9) > 0.02;
    if (!_0x455d76 && _0x23c1b8 < 0xc8)
        return;
    if (_0x23c1b8 < 0x19)
        return;
    _0x4297f2 = _0x3a8393;
    _0x300d48 = _0x3e4f57['x'];
    _0x5aca77 = _0x3e4f57['y'];
    _0x6712a9 = _0x3e4f57['angle'];
    if (!_0x4037a5 || !_0x5b79f3 || _0x5b79f3['readyState'] !== WebSocket['OPEN'])
        return;
    _0x5b79f3['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x3e4f57['x'],
        'y': _0x3e4f57['y'],
        'vx': _0x3e4f57['vx'],
        'vy': _0x3e4f57['vy'],
        'angle': _0x3e4f57['angle'],
        'scale': _0x3e4f57['scale'],
        'teleportId': _0x4f9f5f,
        'clientTimestamp': Date['now']()
    }));
}
function _0x569ce0() {
    if (_0x3e4f57['isDead'])
        return;
    const _0x35ab8e = _0x2db359['MAP']['layers']['find'](_0x2762d7 => _0x2762d7['name'] === 'walls');
    if (!_0x35ab8e)
        return;
    const _0x463c32 = _0x3e4f57['scale'];
    const _0x2330b7 = _0x3e4f57['width'] * _0x463c32 / 0x2;
    for (let _0x4682fb = 0x0; _0x4682fb < 0x3; _0x4682fb++) {
        let _0x2628d2 = _0x3e4f57['x'] + _0x3e4f57['width'] / 0x2;
        let _0x3e1c1f = _0x3e4f57['y'] + _0x3e4f57['height'] / 0x2;
        const _0x2e51c3 = Math['floor']((_0x2628d2 - _0x2330b7) / _0x2db359['MAP']['tileSize']);
        const _0x48205d = Math['floor']((_0x2628d2 + _0x2330b7) / _0x2db359['MAP']['tileSize']);
        const _0x14643c = Math['floor']((_0x3e1c1f - _0x2330b7) / _0x2db359['MAP']['tileSize']);
        const _0x5833e8 = Math['floor']((_0x3e1c1f + _0x2330b7) / _0x2db359['MAP']['tileSize']);
        for (let _0x4b697c = _0x14643c; _0x4b697c <= _0x5833e8; _0x4b697c++) {
            for (let _0x2c6626 = _0x2e51c3; _0x2c6626 <= _0x48205d; _0x2c6626++) {
                if (_0x2c6626 < 0x0 || _0x2c6626 >= _0x2db359['MAP']['columns'] || _0x4b697c < 0x0 || _0x4b697c >= _0x2db359['MAP']['rows'])
                    continue;
                if (_0x35ab8e['data'][_0x4b697c * _0x2db359['MAP']['columns'] + _0x2c6626] === 0x0)
                    continue;
                const _0x12eade = _0x2c6626 * _0x2db359['MAP']['tileSize'];
                const _0x2a5f7e = _0x4b697c * _0x2db359['MAP']['tileSize'];
                const _0x3a8ba1 = _0x2628d2 < _0x12eade ? _0x12eade : _0x2628d2 > _0x12eade + _0x2db359['MAP']['tileSize'] ? _0x12eade + _0x2db359['MAP']['tileSize'] : _0x2628d2;
                const _0x4983ad = _0x3e1c1f < _0x2a5f7e ? _0x2a5f7e : _0x3e1c1f > _0x2a5f7e + _0x2db359['MAP']['tileSize'] ? _0x2a5f7e + _0x2db359['MAP']['tileSize'] : _0x3e1c1f;
                const _0x26b647 = _0x2628d2 - _0x3a8ba1;
                const _0x320f01 = _0x3e1c1f - _0x4983ad;
                const _0x334c31 = Math['sqrt'](_0x26b647 * _0x26b647 + _0x320f01 * _0x320f01);
                if (_0x334c31 < _0x2330b7) {
                    if (_0x334c31 === 0x0) {
                        const _0x2a0749 = _0x2628d2 - _0x12eade;
                        const _0x233dc6 = _0x12eade + _0x2db359['MAP']['tileSize'] - _0x2628d2;
                        const _0x54fead = _0x3e1c1f - _0x2a5f7e;
                        const _0x3229e8 = _0x2a5f7e + _0x2db359['MAP']['tileSize'] - _0x3e1c1f;
                        const _0x11705e = Math['min'](_0x2a0749, _0x233dc6, _0x54fead, _0x3229e8);
                        if (_0x11705e === _0x2a0749)
                            _0x2628d2 = _0x12eade - _0x2330b7;
                        else if (_0x11705e === _0x233dc6)
                            _0x2628d2 = _0x12eade + _0x2db359['MAP']['tileSize'] + _0x2330b7;
                        else if (_0x11705e === _0x54fead)
                            _0x3e1c1f = _0x2a5f7e - _0x2330b7;
                        else
                            _0x3e1c1f = _0x2a5f7e + _0x2db359['MAP']['tileSize'] + _0x2330b7;
                    } else {
                        const _0x3ff9a8 = _0x2330b7 - _0x334c31;
                        _0x2628d2 += _0x26b647 / _0x334c31 * _0x3ff9a8;
                        _0x3e1c1f += _0x320f01 / _0x334c31 * _0x3ff9a8;
                        const _0x2feb0a = _0x3e4f57['vx'] * (_0x26b647 / _0x334c31) + _0x3e4f57['vy'] * (_0x320f01 / _0x334c31);
                        if (_0x2feb0a < 0x0) {
                            _0x3e4f57['vx'] -= _0x2feb0a * (_0x26b647 / _0x334c31);
                            _0x3e4f57['vy'] -= _0x2feb0a * (_0x320f01 / _0x334c31);
                        }
                    }
                }
            }
        }
        _0x3e4f57['x'] = _0x2628d2 - _0x3e4f57['width'] / 0x2;
        _0x3e4f57['y'] = _0x3e1c1f - _0x3e4f57['height'] / 0x2;
    }
}
function _0xed423f(_0x2726f4) {
    const _0x59de19 = _0x2db359['MAP']['layers']['find'](_0xa4c298 => _0xa4c298['name'] === 'walls');
    if (!_0x59de19)
        return;
    const _0x1261ce = _0x2726f4['width'] / 0x2;
    for (let _0x5103f3 = 0x0; _0x5103f3 < 0x2; _0x5103f3++) {
        let _0x2c4308 = _0x2726f4['x'] + _0x2726f4['width'] / 0x2;
        let _0x1c2d95 = _0x2726f4['y'] + _0x2726f4['height'] / 0x2;
        const _0x616081 = Math['floor']((_0x2c4308 - _0x1261ce) / _0x2db359['MAP']['tileSize']);
        const _0x5d6cd7 = Math['floor']((_0x2c4308 + _0x1261ce) / _0x2db359['MAP']['tileSize']);
        const _0x1c9714 = Math['floor']((_0x1c2d95 - _0x1261ce) / _0x2db359['MAP']['tileSize']);
        const _0x2ccf4 = Math['floor']((_0x1c2d95 + _0x1261ce) / _0x2db359['MAP']['tileSize']);
        for (let _0x3619b6 = _0x1c9714; _0x3619b6 <= _0x2ccf4; _0x3619b6++) {
            for (let _0x3891b9 = _0x616081; _0x3891b9 <= _0x5d6cd7; _0x3891b9++) {
                if (_0x3891b9 < 0x0 || _0x3891b9 >= _0x2db359['MAP']['columns'] || _0x3619b6 < 0x0 || _0x3619b6 >= _0x2db359['MAP']['rows'])
                    continue;
                if (_0x59de19['data'][_0x3619b6 * _0x2db359['MAP']['columns'] + _0x3891b9] === 0x0)
                    continue;
                const _0x4c5d82 = _0x3891b9 * _0x2db359['MAP']['tileSize'];
                const _0x370d18 = _0x3619b6 * _0x2db359['MAP']['tileSize'];
                const _0x345aa8 = _0x2c4308 < _0x4c5d82 ? _0x4c5d82 : _0x2c4308 > _0x4c5d82 + _0x2db359['MAP']['tileSize'] ? _0x4c5d82 + _0x2db359['MAP']['tileSize'] : _0x2c4308;
                const _0x3dd347 = _0x1c2d95 < _0x370d18 ? _0x370d18 : _0x1c2d95 > _0x370d18 + _0x2db359['MAP']['tileSize'] ? _0x370d18 + _0x2db359['MAP']['tileSize'] : _0x1c2d95;
                const _0x479ea1 = _0x2c4308 - _0x345aa8;
                const _0x439ab1 = _0x1c2d95 - _0x3dd347;
                const _0x3135a6 = Math['sqrt'](_0x479ea1 * _0x479ea1 + _0x439ab1 * _0x439ab1);
                if (_0x3135a6 < _0x1261ce) {
                    if (_0x3135a6 === 0x0) {
                        const _0x52ba5c = _0x2c4308 - _0x4c5d82;
                        const _0x5188e1 = _0x4c5d82 + _0x2db359['MAP']['tileSize'] - _0x2c4308;
                        const _0x159361 = _0x1c2d95 - _0x370d18;
                        const _0x3cd668 = _0x370d18 + _0x2db359['MAP']['tileSize'] - _0x1c2d95;
                        const _0x211fbf = Math['min'](_0x52ba5c, _0x5188e1, _0x159361, _0x3cd668);
                        if (_0x211fbf === _0x52ba5c)
                            _0x2c4308 = _0x4c5d82 - _0x1261ce;
                        else if (_0x211fbf === _0x5188e1)
                            _0x2c4308 = _0x4c5d82 + _0x2db359['MAP']['tileSize'] + _0x1261ce;
                        else if (_0x211fbf === _0x159361)
                            _0x1c2d95 = _0x370d18 - _0x1261ce;
                        else
                            _0x1c2d95 = _0x370d18 + _0x2db359['MAP']['tileSize'] + _0x1261ce;
                    } else {
                        const _0x51d0d8 = _0x1261ce - _0x3135a6;
                        _0x2c4308 += _0x479ea1 / _0x3135a6 * _0x51d0d8;
                        _0x1c2d95 += _0x439ab1 / _0x3135a6 * _0x51d0d8;
                    }
                }
            }
        }
        _0x2726f4['x'] = _0x2c4308 - _0x2726f4['width'] / 0x2;
        _0x2726f4['y'] = _0x1c2d95 - _0x2726f4['height'] / 0x2;
    }
}
function _0x4005a2(_0x55d202) {
    const _0x17abf3 = _0x55d202['width'] / 0x2;
    for (let _0x34e386 = 0x0; _0x34e386 < 0x2; _0x34e386++) {
        let _0x1edbdd = _0x55d202['x'] + _0x55d202['width'] / 0x2;
        let _0x485812 = _0x55d202['y'] + _0x55d202['height'] / 0x2;
        for (const _0x56fa91 of _0x2db359['ENTITIES']) {
            const _0x35a09e = _0x1edbdd < _0x56fa91['x'] ? _0x56fa91['x'] : _0x1edbdd > _0x56fa91['x'] + _0x56fa91['w'] ? _0x56fa91['x'] + _0x56fa91['w'] : _0x1edbdd;
            const _0x4661c8 = _0x485812 < _0x56fa91['y'] ? _0x56fa91['y'] : _0x485812 > _0x56fa91['y'] + _0x56fa91['h'] ? _0x56fa91['y'] + _0x56fa91['h'] : _0x485812;
            const _0x43162e = _0x1edbdd - _0x35a09e;
            const _0x2a40a3 = _0x485812 - _0x4661c8;
            const _0x48dcd7 = Math['sqrt'](_0x43162e * _0x43162e + _0x2a40a3 * _0x2a40a3);
            if (_0x48dcd7 < _0x17abf3 && _0x48dcd7 > 0x0) {
                const _0x3080ee = _0x17abf3 - _0x48dcd7;
                const _0x583e64 = _0x43162e / _0x48dcd7;
                const _0x28e034 = _0x2a40a3 / _0x48dcd7;
                _0x1edbdd += _0x583e64 * _0x3080ee;
                _0x485812 += _0x28e034 * _0x3080ee;
            } else if (_0x48dcd7 === 0x0) {
                const _0x3fda2d = _0x1edbdd - _0x56fa91['x'];
                const _0x224c4e = _0x56fa91['x'] + _0x56fa91['w'] - _0x1edbdd;
                const _0x36eebd = _0x485812 - _0x56fa91['y'];
                const _0x162625 = _0x56fa91['y'] + _0x56fa91['h'] - _0x485812;
                const _0x5872ae = Math['min'](_0x3fda2d, _0x224c4e, _0x36eebd, _0x162625);
                if (_0x5872ae === _0x3fda2d)
                    _0x1edbdd = _0x56fa91['x'] - _0x17abf3;
                else if (_0x5872ae === _0x224c4e)
                    _0x1edbdd = _0x56fa91['x'] + _0x56fa91['w'] + _0x17abf3;
                else if (_0x5872ae === _0x36eebd)
                    _0x485812 = _0x56fa91['y'] - _0x17abf3;
                else
                    _0x485812 = _0x56fa91['y'] + _0x56fa91['h'] + _0x17abf3;
            }
        }
        _0x55d202['x'] = _0x1edbdd - _0x55d202['width'] / 0x2;
        _0x55d202['y'] = _0x485812 - _0x55d202['height'] / 0x2;
    }
}
function _0x4cd8e5() {
    if (_0x3e4f57['isDead'])
        return;
    const _0x45b529 = _0x3e4f57['width'] / 0x2;
    const _0x2e5213 = _0x3e4f57['x'] + _0x3e4f57['width'] / 0x2;
    const _0x50cd50 = _0x3e4f57['y'] + _0x3e4f57['height'] / 0x2;
    for (const _0x57844b in _0x59fd94) {
        const _0x12ec14 = _0x59fd94[_0x57844b];
        if (_0x12ec14['isDead'])
            continue;
        const _0x245acc = _0x12ec14['width'] / 0x2;
        const _0x1ac75a = _0x45b529 + _0x245acc;
        const _0x4ee14e = (_0x12ec14['renderX'] ?? _0x12ec14['x']) + _0x12ec14['width'] / 0x2;
        const _0x333792 = (_0x12ec14['renderY'] ?? _0x12ec14['y']) + _0x12ec14['height'] / 0x2;
        const _0x43f262 = _0x2e5213 - _0x4ee14e;
        const _0x49350b = _0x50cd50 - _0x333792;
        const _0xe4dea5 = Math['sqrt'](_0x43f262 * _0x43f262 + _0x49350b * _0x49350b);
        if (_0xe4dea5 > 0x0 && _0xe4dea5 < _0x1ac75a) {
            const _0x267688 = _0x1ac75a - _0xe4dea5;
            const _0x2094b1 = _0x43f262 / _0xe4dea5;
            const _0x10a203 = _0x49350b / _0xe4dea5;
            _0x3e4f57['x'] += _0x2094b1 * (_0x267688 * 0.25);
            _0x3e4f57['y'] += _0x10a203 * (_0x267688 * 0.25);
            _0x12ec14['x'] -= _0x2094b1 * (_0x267688 * 0.75);
            _0x12ec14['y'] -= _0x10a203 * (_0x267688 * 0.75);
            _0xed423f(_0x12ec14);
            _0x4005a2(_0x12ec14);
            if (_0x12ec14['renderX'] !== undefined) {
                _0x12ec14['renderX'] = _0x12ec14['x'];
                _0x12ec14['renderY'] = _0x12ec14['y'];
            }
            const _0x3dbd77 = _0x3e4f57['vx'] * _0x2094b1 + _0x3e4f57['vy'] * _0x10a203;
            if (_0x3dbd77 < 0x0) {
                _0x3e4f57['vx'] -= _0x3dbd77 * _0x2094b1 * 0.25;
                _0x3e4f57['vy'] -= _0x3dbd77 * _0x10a203 * 0.25;
            }
        }
    }
    _0x569ce0();
    _0x1f2a7f();
}
function _0x1f2a7f() {
    if (_0x3e4f57['isDead'])
        return;
    const _0x1d4ab1 = _0x3e4f57['scale'];
    const _0x44f1f7 = _0x3e4f57['width'] * _0x1d4ab1 / 0x2;
    for (let _0x29b835 = 0x0; _0x29b835 < 0x2; _0x29b835++) {
        let _0xd3f611 = _0x3e4f57['x'] + _0x3e4f57['width'] / 0x2;
        let _0x8efefd = _0x3e4f57['y'] + _0x3e4f57['height'] / 0x2;
        for (const _0x18b1ae of _0x2db359['ENTITIES']) {
            const _0x5ef58a = _0xd3f611 < _0x18b1ae['x'] ? _0x18b1ae['x'] : _0xd3f611 > _0x18b1ae['x'] + _0x18b1ae['w'] ? _0x18b1ae['x'] + _0x18b1ae['w'] : _0xd3f611;
            const _0x2896a4 = _0x8efefd < _0x18b1ae['y'] ? _0x18b1ae['y'] : _0x8efefd > _0x18b1ae['y'] + _0x18b1ae['h'] ? _0x18b1ae['y'] + _0x18b1ae['h'] : _0x8efefd;
            const _0x15e33a = _0xd3f611 - _0x5ef58a;
            const _0x181ea9 = _0x8efefd - _0x2896a4;
            const _0x5cd2da = Math['sqrt'](_0x15e33a * _0x15e33a + _0x181ea9 * _0x181ea9);
            if (_0x5cd2da < _0x44f1f7 && _0x5cd2da > 0x0) {
                const _0x29739a = _0x44f1f7 - _0x5cd2da;
                const _0x21840c = _0x15e33a / _0x5cd2da;
                const _0x43b91f = _0x181ea9 / _0x5cd2da;
                _0xd3f611 += _0x21840c * _0x29739a;
                _0x8efefd += _0x43b91f * _0x29739a;
                const _0x1cc6af = _0x3e4f57['vx'] * _0x21840c + _0x3e4f57['vy'] * _0x43b91f;
                if (_0x1cc6af < 0x0) {
                    _0x3e4f57['vx'] -= _0x1cc6af * _0x21840c;
                    _0x3e4f57['vy'] -= _0x1cc6af * _0x43b91f;
                }
            } else if (_0x5cd2da === 0x0) {
                const _0x159cea = _0xd3f611 - _0x18b1ae['x'];
                const _0x435cf3 = _0x18b1ae['x'] + _0x18b1ae['w'] - _0xd3f611;
                const _0x2cc69e = _0x8efefd - _0x18b1ae['y'];
                const _0x4f0558 = _0x18b1ae['y'] + _0x18b1ae['h'] - _0x8efefd;
                const _0x3d3626 = Math['min'](_0x159cea, _0x435cf3, _0x2cc69e, _0x4f0558);
                if (_0x3d3626 === _0x159cea)
                    _0xd3f611 = _0x18b1ae['x'] - _0x44f1f7;
                else if (_0x3d3626 === _0x435cf3)
                    _0xd3f611 = _0x18b1ae['x'] + _0x18b1ae['w'] + _0x44f1f7;
                else if (_0x3d3626 === _0x2cc69e)
                    _0x8efefd = _0x18b1ae['y'] - _0x44f1f7;
                else
                    _0x8efefd = _0x18b1ae['y'] + _0x18b1ae['h'] + _0x44f1f7;
            }
        }
        _0x3e4f57['x'] = _0xd3f611 - _0x3e4f57['width'] / 0x2;
        _0x3e4f57['y'] = _0x8efefd - _0x3e4f57['height'] / 0x2;
    }
}
function _0x2d4c42(_0x3be8b8, _0xa3c2eb) {
    const _0x4bc1f6 = _0x2db359['MAP']['layers']['find'](_0x7a81c5 => _0x7a81c5['name'] === 'trees');
    if (!_0x4bc1f6)
        return ![];
    const _0x3982b5 = Math['floor'](_0x3be8b8 / _0x2db359['MAP']['tileSize']);
    const _0x43056e = Math['floor'](_0xa3c2eb / _0x2db359['MAP']['tileSize']);
    if (_0x3982b5 < 0x0 || _0x3982b5 >= _0x2db359['MAP']['columns'] || _0x43056e < 0x0 || _0x43056e >= _0x2db359['MAP']['rows'])
        return ![];
    return _0x4bc1f6['data'][_0x43056e * _0x2db359['MAP']['columns'] + _0x3982b5] === 0xb;
}
let _0xca5cbf = null;
function _0x2aef2b() {
    const _0x3c7556 = _0x2db359['MAP'];
    const _0x5a2f47 = _0x3c7556['layers']['find'](_0x1807b2 => _0x1807b2['name'] === 'floor2');
    const _0x421ebd = _0x3c7556['layers']['find'](_0x533e6e => _0x533e6e['name'] === 'walls');
    if (!_0x5a2f47 || !_0x421ebd) {
        _0xca5cbf = null;
        return;
    }
    const _0x15bc6b = _0x3c7556['columns'];
    const _0x40365f = _0x3c7556['rows'];
    const _0x50166a = [];
    const _0x37a1c7 = [];
    const _0x18f4e1 = new Set();
    for (let _0x47fdfa = 0x0; _0x47fdfa < _0x40365f; _0x47fdfa++) {
        for (let _0x4478e4 = 0x0; _0x4478e4 < _0x15bc6b; _0x4478e4++) {
            const _0x2a8f0a = _0x47fdfa * _0x15bc6b + _0x4478e4;
            const _0x406727 = _0x5a2f47['data'][_0x2a8f0a];
            const _0x116640 = _0x421ebd['data'][_0x2a8f0a];
            if (_0x406727 === 0x2 || _0x406727 === 0x4) {
                _0x50166a['push']({
                    'c': _0x4478e4,
                    'r': _0x47fdfa
                });
                if (_0x116640 !== 0x0)
                    _0x37a1c7['push']({
                        'c': _0x4478e4,
                        'r': _0x47fdfa
                    });
            }
            if (_0x116640 !== 0x0)
                _0x18f4e1['add'](_0x4478e4 + ',' + _0x47fdfa);
        }
    }
    const _0x553c98 = new Set(_0x50166a['map'](_0x4e41cb => _0x4e41cb['c'] + ',' + _0x4e41cb['r']));
    const _0x4ad83d = [
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
                c: _0xd95279,
                r: _0xdb4216
            } of _0x50166a) {
        for (const [_0x19756f, _0x3296a8] of _0x4ad83d) {
            const _0x1961f8 = _0xd95279 + _0x19756f, _0x4e8c48 = _0xdb4216 + _0x3296a8;
            const _0x374d93 = _0x1961f8 + ',' + _0x4e8c48;
            if (!_0x553c98['has'](_0x374d93))
                _0x18f4e1['add'](_0x374d93);
        }
    }
    _0xca5cbf = {
        'wallSet': _0x18f4e1,
        'floorTiles': _0x50166a,
        'wallTiles': _0x37a1c7,
        'interiorSet': _0x553c98
    };
}
function _0x10e90a() {
    const _0x1f4da2 = _0x2db359['MAP']['layers']['find'](_0x41afeb => _0x41afeb['name'] === 'floor2');
    if (!_0x1f4da2)
        return ![];
    const _0x567358 = Math['floor']((_0x3e4f57['x'] + _0x3e4f57['width'] / 0x2) / _0x2db359['MAP']['tileSize']);
    const _0x24889c = Math['floor']((_0x3e4f57['y'] + _0x3e4f57['height'] / 0x2) / _0x2db359['MAP']['tileSize']);
    if (_0x567358 < 0x0 || _0x567358 >= _0x2db359['MAP']['columns'] || _0x24889c < 0x0 || _0x24889c >= _0x2db359['MAP']['rows'])
        return ![];
    const _0x2f1f9c = _0x1f4da2['data'][_0x24889c * _0x2db359['MAP']['columns'] + _0x567358];
    return _0x2f1f9c === 0x2;
}
function _0x9404bd() {
    if (_0x3e4f57['isDead']) {
        _0x2db359['SHADOW']['polygon'] = null;
        return;
    }
    const _0x18ffa8 = _0x2db359['MAP'];
    const _0x89677c = _0x2db359['SHADOW'];
    const _0x6a60d2 = _0x18ffa8['tileSize'];
    if (!_0xca5cbf)
        _0x2aef2b();
    if (!_0xca5cbf) {
        _0x89677c['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x44b585,
        floorTiles: _0x5c0f14
    } = _0xca5cbf;
    if (_0x5c0f14['length'] === 0x0) {
        _0x89677c['polygon'] = null;
        return;
    }
    if (!_0x10e90a()) {
        _0x89677c['polygon'] = null;
        return;
    }
    const _0x106a7b = _0x3e4f57['x'] + _0x3e4f57['width'] / 0x2;
    const _0x52d65b = _0x3e4f57['y'] + _0x3e4f57['height'] / 0x2;
    if (!_0xca5cbf['_bounds']) {
        let _0x26f3eb = Infinity, _0x1c2af8 = -Infinity, _0x2f906c = Infinity, _0x58e2e9 = -Infinity;
        for (const {
                    c: _0x3a3e14,
                    r: _0x1532d2
                } of _0x5c0f14) {
            if (_0x3a3e14 < _0x26f3eb)
                _0x26f3eb = _0x3a3e14;
            if (_0x3a3e14 > _0x1c2af8)
                _0x1c2af8 = _0x3a3e14;
            if (_0x1532d2 < _0x2f906c)
                _0x2f906c = _0x1532d2;
            if (_0x1532d2 > _0x58e2e9)
                _0x58e2e9 = _0x1532d2;
        }
        _0xca5cbf['_bounds'] = {
            'minC': Math['max'](0x0, _0x26f3eb - 0x1),
            'maxC': Math['min'](_0x18ffa8['columns'] - 0x1, _0x1c2af8 + 0x1),
            'minR': Math['max'](0x0, _0x2f906c - 0x1),
            'maxR': Math['min'](_0x18ffa8['rows'] - 0x1, _0x58e2e9 + 0x1)
        };
        const _0x3f0d87 = [];
        for (let _0xae540f = _0xca5cbf['_bounds']['minR']; _0xae540f <= _0xca5cbf['_bounds']['maxR']; _0xae540f++) {
            for (let _0x50d41b = _0xca5cbf['_bounds']['minC']; _0x50d41b <= _0xca5cbf['_bounds']['maxC']; _0x50d41b++) {
                if (_0x44b585['has'](_0x50d41b + ',' + _0xae540f))
                    _0x3f0d87['push'](_0x50d41b, _0xae540f);
            }
        }
        _0xca5cbf['_wallArr'] = _0x3f0d87;
    }
    const {
        minC: _0x532102,
        maxC: _0x2b7f0a,
        minR: _0x598fd5,
        maxR: _0x31296d
    } = _0xca5cbf['_bounds'];
    const _0x23a90b = _0xca5cbf['_wallArr'];
    const _0x267d47 = 0.0001;
    const _0x5ecd7e = new Set();
    const _0x127057 = [];
    for (let _0x582c43 = 0x0; _0x582c43 < _0x23a90b['length']; _0x582c43 += 0x2) {
        const _0x2264be = _0x23a90b[_0x582c43], _0x109e38 = _0x23a90b[_0x582c43 + 0x1];
        const _0x3ec318 = [
            _0x2264be * _0x6a60d2,
            _0x109e38 * _0x6a60d2,
            _0x2264be * _0x6a60d2 + _0x6a60d2,
            _0x109e38 * _0x6a60d2,
            _0x2264be * _0x6a60d2,
            _0x109e38 * _0x6a60d2 + _0x6a60d2,
            _0x2264be * _0x6a60d2 + _0x6a60d2,
            _0x109e38 * _0x6a60d2 + _0x6a60d2
        ];
        for (let _0x4f276a = 0x0; _0x4f276a < _0x3ec318['length']; _0x4f276a += 0x2) {
            const _0x482b73 = _0x3ec318[_0x4f276a], _0x35ca6c = _0x3ec318[_0x4f276a + 0x1];
            const _0x3e040a = Math['atan2'](_0x35ca6c - _0x52d65b, _0x482b73 - _0x106a7b);
            const _0x2d1dd5 = Math['round'](_0x3e040a * 0x4e20);
            if (!_0x5ecd7e['has'](_0x2d1dd5 - 0x1)) {
                _0x5ecd7e['add'](_0x2d1dd5 - 0x1);
                _0x127057['push'](_0x3e040a - _0x267d47);
            }
            if (!_0x5ecd7e['has'](_0x2d1dd5)) {
                _0x5ecd7e['add'](_0x2d1dd5);
                _0x127057['push'](_0x3e040a);
            }
            if (!_0x5ecd7e['has'](_0x2d1dd5 + 0x1)) {
                _0x5ecd7e['add'](_0x2d1dd5 + 0x1);
                _0x127057['push'](_0x3e040a + _0x267d47);
            }
        }
    }
    _0x127057['sort']((_0x542c44, _0x517d2e) => _0x542c44 - _0x517d2e);
    const _0x1c666e = Math['hypot']((_0x2b7f0a - _0x532102 + 0x2) * _0x6a60d2, (_0x31296d - _0x598fd5 + 0x2) * _0x6a60d2);
    const _0x37a732 = _0x23d90c => {
        const _0x3bbc85 = Math['cos'](_0x23d90c);
        const _0x2e2f23 = Math['sin'](_0x23d90c);
        let _0x151658 = _0x1c666e;
        for (let _0x354d68 = 0x0; _0x354d68 < _0x23a90b['length']; _0x354d68 += 0x2) {
            const _0x446388 = _0x23a90b[_0x354d68], _0x336b1c = _0x23a90b[_0x354d68 + 0x1];
            const _0x14bbb5 = _0x446388 * _0x6a60d2, _0xb61586 = _0x336b1c * _0x6a60d2;
            const _0x5b862c = _0x14bbb5 + _0x6a60d2, _0x134bcb = _0xb61586 + _0x6a60d2;
            const _0x5a44e1 = _0x14bbb5 + _0x6a60d2 * 0.5, _0x2739e5 = _0xb61586 + _0x6a60d2 * 0.5;
            const _0x4bb538 = Math['abs'](_0x5a44e1 - _0x106a7b) + Math['abs'](_0x2739e5 - _0x52d65b);
            if (_0x4bb538 > _0x151658 + _0x6a60d2 * 1.5)
                continue;
            let _0x16a6a1, _0x1fceb5, _0x4b3d3e;
            _0x16a6a1 = -_0x2e2f23 * _0x6a60d2;
            if (Math['abs'](_0x16a6a1) >= 1e-10) {
                _0x1fceb5 = -(_0xb61586 - _0x52d65b) * _0x6a60d2 / _0x16a6a1;
                _0x4b3d3e = ((_0x14bbb5 - _0x106a7b) * _0x2e2f23 - (_0xb61586 - _0x52d65b) * _0x3bbc85) / _0x16a6a1;
                if (_0x1fceb5 > 0.001 && _0x4b3d3e >= 0x0 && _0x4b3d3e <= 0x1 && _0x1fceb5 < _0x151658)
                    _0x151658 = _0x1fceb5;
            }
            _0x16a6a1 = _0x3bbc85 * _0x6a60d2;
            if (Math['abs'](_0x16a6a1) >= 1e-10) {
                _0x1fceb5 = (_0x5b862c - _0x106a7b) * _0x6a60d2 / _0x16a6a1;
                _0x4b3d3e = ((_0x5b862c - _0x106a7b) * _0x2e2f23 - (_0xb61586 - _0x52d65b) * _0x3bbc85) / _0x16a6a1;
                if (_0x1fceb5 > 0.001 && _0x4b3d3e >= 0x0 && _0x4b3d3e <= 0x1 && _0x1fceb5 < _0x151658)
                    _0x151658 = _0x1fceb5;
            }
            _0x16a6a1 = _0x2e2f23 * _0x6a60d2;
            if (Math['abs'](_0x16a6a1) >= 1e-10) {
                _0x1fceb5 = (_0x134bcb - _0x52d65b) * _0x6a60d2 / _0x16a6a1;
                _0x4b3d3e = ((_0x5b862c - _0x106a7b) * _0x2e2f23 - (_0x134bcb - _0x52d65b) * _0x3bbc85) / _0x16a6a1;
                if (_0x1fceb5 > 0.001 && _0x4b3d3e >= 0x0 && _0x4b3d3e <= 0x1 && _0x1fceb5 < _0x151658)
                    _0x151658 = _0x1fceb5;
            }
            _0x16a6a1 = -_0x3bbc85 * _0x6a60d2;
            if (Math['abs'](_0x16a6a1) >= 1e-10) {
                _0x1fceb5 = -(_0x14bbb5 - _0x106a7b) * _0x6a60d2 / _0x16a6a1;
                _0x4b3d3e = ((_0x14bbb5 - _0x106a7b) * _0x2e2f23 - (_0x134bcb - _0x52d65b) * _0x3bbc85) / _0x16a6a1;
                if (_0x1fceb5 > 0.001 && _0x4b3d3e >= 0x0 && _0x4b3d3e <= 0x1 && _0x1fceb5 < _0x151658)
                    _0x151658 = _0x1fceb5;
            }
        }
        const _0x5bde39 = _0x151658 < _0x1c666e ? _0x151658 + 0x8 : _0x151658;
        return {
            'x': _0x106a7b + _0x3bbc85 * _0x5bde39,
            'y': _0x52d65b + _0x2e2f23 * _0x5bde39
        };
    };
    const _0x2ac66c = [];
    for (let _0x494e0d = 0x0; _0x494e0d < _0x127057['length']; _0x494e0d++) {
        const _0x43c709 = _0x37a732(_0x127057[_0x494e0d]);
        _0x2ac66c['push'](_0x43c709['x'], _0x43c709['y']);
    }
    _0x89677c['polygon'] = _0x2ac66c['length'] >= 0x6 ? new Float32Array(_0x2ac66c) : null;
}
function _0x1493cd(_0x5a690b, _0x437b22, _0x2c3b1d) {
    if (_0x3e4f57['isDead'])
        return;
    if (!_0xca5cbf)
        return;
    const {
        floorTiles: _0x378a7b,
        wallTiles: _0x1c5650
    } = _0xca5cbf;
    if (_0x378a7b['length'] === 0x0)
        return;
    const _0xece1a = _0x2db359['SHADOW'];
    const _0x5635ac = _0x2db359['MAP']['tileSize'];
    const _0x5b93a1 = _0x2db359['CAMERA']['width'];
    const _0x4fc335 = _0x2db359['CAMERA']['height'];
    if (!_0x2db359['SHADOW']['_buf'] || _0x2db359['SHADOW']['_buf']['width'] !== _0x5b93a1 || _0x2db359['SHADOW']['_buf']['height'] !== _0x4fc335) {
        _0x2db359['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x2db359['SHADOW']['_buf']['width'] = _0x5b93a1;
        _0x2db359['SHADOW']['_buf']['height'] = _0x4fc335;
    }
    const _0x744257 = _0x2db359['SHADOW']['_buf'];
    const _0x5c04db = _0x744257['getContext']('2d');
    _0x5c04db['clearRect'](0x0, 0x0, _0x5b93a1, _0x4fc335);
    _0x5c04db['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x5c04db['beginPath']();
    for (const {
                c: _0x4a7464,
                r: _0x3e457e
            } of _0x378a7b) {
        const _0x9454bb = Math['floor'](_0x4a7464 * _0x5635ac - _0x437b22), _0xa84704 = Math['floor'](_0x3e457e * _0x5635ac - _0x2c3b1d);
        if (_0x9454bb > _0x5b93a1 || _0xa84704 > _0x4fc335 || _0x9454bb + _0x5635ac < 0x0 || _0xa84704 + _0x5635ac < 0x0)
            continue;
        _0x5c04db['rect'](_0x9454bb - 0x1, _0xa84704 - 0x1, _0x5635ac + 0x2, _0x5635ac + 0x2);
    }
    _0x5c04db['fill']();
    if (_0x1c5650['length'] > 0x0) {
        _0x5c04db['globalCompositeOperation'] = 'destination-out';
        _0x5c04db['fillStyle'] = 'rgba(0,0,0,1)';
        _0x5c04db['beginPath']();
        for (const {
                    c: _0x150f6c,
                    r: _0x2bfd91
                } of _0x1c5650) {
            const _0x5caa27 = Math['floor'](_0x150f6c * _0x5635ac - _0x437b22), _0x42fbb5 = Math['floor'](_0x2bfd91 * _0x5635ac - _0x2c3b1d);
            if (_0x5caa27 > _0x5b93a1 || _0x42fbb5 > _0x4fc335 || _0x5caa27 + _0x5635ac < 0x0 || _0x42fbb5 + _0x5635ac < 0x0)
                continue;
            _0x5c04db['rect'](_0x5caa27 - 0x1, _0x42fbb5 - 0x1, _0x5635ac + 0x2, _0x5635ac + 0x2);
        }
        _0x5c04db['fill']();
        _0x5c04db['globalCompositeOperation'] = 'source-over';
    }
    if (_0xece1a['polygon'] && _0xece1a['polygon']['length'] >= 0x6) {
        _0x5c04db['globalCompositeOperation'] = 'destination-out';
        _0x5c04db['beginPath']();
        const _0x9ac83b = _0xece1a['polygon'];
        _0x5c04db['moveTo'](_0x9ac83b[0x0] - _0x437b22, _0x9ac83b[0x1] - _0x2c3b1d);
        for (let _0x567de4 = 0x2; _0x567de4 < _0x9ac83b['length']; _0x567de4 += 0x2) {
            _0x5c04db['lineTo'](_0x9ac83b[_0x567de4] - _0x437b22, _0x9ac83b[_0x567de4 + 0x1] - _0x2c3b1d);
        }
        _0x5c04db['closePath']();
        _0x5c04db['fill']();
        _0x5c04db['globalCompositeOperation'] = 'source-over';
    }
    _0x5a690b['drawImage'](_0x744257, 0x0, 0x0);
}
function _0xf3d7e8(_0x403dd2) {
    let _0x3a7b55 = 0x0, _0x142fee = 0x0;
    const _0x400bce = _0x2db359['INPUTS']['mouseX'] / _0x2db359['SYSTEM']['viewScale'];
    const _0x59252d = _0x2db359['INPUTS']['mouseY'] / _0x2db359['SYSTEM']['viewScale'];
    const _0x36b96a = _0x3e4f57['x'] - _0x2db359['CAMERA']['x'] + _0x3e4f57['width'] / 0x2;
    const _0x2613f3 = _0x3e4f57['y'] - _0x2db359['CAMERA']['y'] + _0x3e4f57['height'] / 0x2;
    const _0xdb12e5 = Math['atan2'](_0x59252d - _0x2613f3, _0x400bce - _0x36b96a);
    if (_0x13ec80 !== 0x0 || _0x365a01 !== 0x0) {
        _0x3a7b55 = _0x13ec80;
        _0x142fee = _0x365a01;
    } else if (_0x240893) {
        let _0x37e157 = 0x0, _0x1a74a4 = 0x0;
        if (_0x2db359['INPUTS']['keys']['w'] || _0x2db359['INPUTS']['keys']['arrowup'])
            _0x37e157 += 0x1;
        if (_0x2db359['INPUTS']['keys']['s'] || _0x2db359['INPUTS']['keys']['arrowdown'])
            _0x37e157 -= 0x1;
        if (_0x2db359['INPUTS']['keys']['d'] || _0x2db359['INPUTS']['keys']['arrowright'])
            _0x1a74a4 += 0x1;
        if (_0x2db359['INPUTS']['keys']['a'] || _0x2db359['INPUTS']['keys']['arrowleft'])
            _0x1a74a4 -= 0x1;
        if (_0x37e157 !== 0x0 || _0x1a74a4 !== 0x0) {
            const _0x3250f7 = _0xdb12e5 + Math['atan2'](_0x1a74a4, _0x37e157);
            _0x3a7b55 = Math['cos'](_0x3250f7);
            _0x142fee = Math['sin'](_0x3250f7);
        }
    } else {
        if (_0x2db359['INPUTS']['keys']['w'] || _0x2db359['INPUTS']['keys']['arrowup'])
            _0x142fee -= 0x1;
        if (_0x2db359['INPUTS']['keys']['s'] || _0x2db359['INPUTS']['keys']['arrowdown'])
            _0x142fee += 0x1;
        if (_0x2db359['INPUTS']['keys']['a'] || _0x2db359['INPUTS']['keys']['arrowleft'])
            _0x3a7b55 -= 0x1;
        if (_0x2db359['INPUTS']['keys']['d'] || _0x2db359['INPUTS']['keys']['arrowright'])
            _0x3a7b55 += 0x1;
        const _0x1b0b05 = _0x3a7b55 !== 0x0 || _0x142fee !== 0x0;
        if (_0x1b0b05) {
            const _0x552eb4 = Math['sqrt'](_0x3a7b55 * _0x3a7b55 + _0x142fee * _0x142fee);
            _0x3a7b55 /= _0x552eb4;
            _0x142fee /= _0x552eb4;
        }
    }
    if (_0x2db359['GAME_STATE'] === 'NIGHT' && _0x42f346 === 'Skinwalker') {
        if (_0x2db359['NIGHT_ABILITY_OPEN'] || !_0x2db359['CURRENT_TARGET']) {
            _0x3a7b55 = 0x0;
            _0x142fee = 0x0;
            _0x3e4f57['vx'] = 0x0;
            _0x3e4f57['vy'] = 0x0;
            _0x3e4f57['x'] = _0x2db359['MAP']['columns'] * _0x2db359['MAP']['tileSize'] / 0x2 - _0x3e4f57['width'] / 0x2;
            _0x3e4f57['y'] = _0x2db359['MAP']['rows'] * _0x2db359['MAP']['tileSize'] / 0x2 - _0x3e4f57['height'] / 0x2;
        }
    }
    const _0x12ba06 = _0x3a7b55 !== 0x0 || _0x142fee !== 0x0;
    const _0x4f97ad = (_0x2db359['INPUTS']['keys']['shift'] || _0x13451f || _0x3a7b77) && _0x12ba06;
    _0x3e4f57['bopTimer'] = _0x4f97ad ? _0x3e4f57['bopTimer'] + _0x403dd2 : 0x0;
    _0x3e4f57['scale'] = 0x1 + (_0x3e4f57['bopTimer'] > 0x0 ? Math['sin'](_0x3e4f57['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x117a4d = Math['pow'](0.001, _0x403dd2);
    const _0x88cfcd = _0x4f97ad ? 0x74a : 0x5d5;
    _0x3e4f57['vx'] += _0x3a7b55 * _0x88cfcd * _0x403dd2;
    _0x3e4f57['vy'] += _0x142fee * _0x88cfcd * _0x403dd2;
    _0x3e4f57['vx'] *= _0x117a4d;
    _0x3e4f57['vy'] *= _0x117a4d;
    _0x3e4f57['x'] += _0x3e4f57['vx'] * _0x403dd2;
    _0x3e4f57['y'] += _0x3e4f57['vy'] * _0x403dd2;
    for (let _0x54aec3 = 0x0; _0x54aec3 < 0x3; _0x54aec3++)
        _0x569ce0();
    for (let _0x2ef4f2 = 0x0; _0x2ef4f2 < 0x2; _0x2ef4f2++)
        _0x1f2a7f();
    for (let _0x206e0f = 0x0; _0x206e0f < 0x2; _0x206e0f++)
        _0x4cd8e5();
    if (_0x3e4f57['x'] < 0x0)
        _0x3e4f57['x'] = 0x0;
    if (_0x3e4f57['y'] < 0x0)
        _0x3e4f57['y'] = 0x0;
    if (_0x3e4f57['x'] + _0x3e4f57['width'] > _0x2db359['MAP']['columns'] * _0x2db359['MAP']['tileSize'])
        _0x3e4f57['x'] = _0x2db359['MAP']['columns'] * _0x2db359['MAP']['tileSize'] - _0x3e4f57['width'];
    if (_0x3e4f57['y'] + _0x3e4f57['height'] > _0x2db359['MAP']['rows'] * _0x2db359['MAP']['tileSize'])
        _0x3e4f57['y'] = _0x2db359['MAP']['rows'] * _0x2db359['MAP']['tileSize'] - _0x3e4f57['height'];
    if (_0x4d24f5) {
        _0x3e4f57['angle'] = _0x3a6be4 + Math['PI'] / 0x2;
    } else if (_0x13ec80 !== 0x0 || _0x365a01 !== 0x0) {
        _0x3e4f57['angle'] = Math['atan2'](_0x365a01, _0x13ec80) + Math['PI'] / 0x2;
    } else if (!_0x3eb1c3) {
        _0x3e4f57['angle'] = _0xdb12e5 + Math['PI'] / 0x2;
    }
    const _0x505472 = _0x3e4f57['x'] + _0x3e4f57['width'] / 0x2 - _0x2db359['CAMERA']['width'] / 0x2;
    const _0x40142f = _0x3e4f57['y'] + _0x3e4f57['height'] / 0x2 - _0x2db359['CAMERA']['height'] / 0x2;
    if (_0x2db359['CAMERA']['x'] === null || isNaN(_0x2db359['CAMERA']['x']) || !isFinite(_0x2db359['CAMERA']['x'])) {
        _0x2db359['CAMERA']['x'] = _0x505472;
        _0x2db359['CAMERA']['y'] = _0x40142f;
    } else {
        const _0x4ae9ae = 0x1 - Math['exp'](-Math['max'](0x0, _0x403dd2) * 0x28);
        _0x2db359['CAMERA']['x'] += (_0x505472 - _0x2db359['CAMERA']['x']) * _0x4ae9ae;
        _0x2db359['CAMERA']['y'] += (_0x40142f - _0x2db359['CAMERA']['y']) * _0x4ae9ae;
    }
    for (const _0x4d348d in _0x59fd94) {
        const _0x596589 = _0x59fd94[_0x4d348d];
        if (_0x596589['renderX'] === undefined) {
            _0x596589['renderX'] = _0x596589['x'];
            _0x596589['renderY'] = _0x596589['y'];
            _0x596589['renderAngle'] = _0x596589['angle'] || 0x0;
        }
        const _0x174712 = 0.25;
        const _0x13e2c1 = _0x596589['x'] - _0x596589['renderX'], _0x46608f = _0x596589['y'] - _0x596589['renderY'];
        const _0x49c3b2 = Math['sqrt'](_0x13e2c1 * _0x13e2c1 + _0x46608f * _0x46608f);
        const _0x3bf415 = 0xb4;
        if (_0x49c3b2 > _0x3bf415) {
            _0x596589['renderX'] = _0x596589['x'] - _0x13e2c1 / _0x49c3b2 * _0x3bf415;
            _0x596589['renderY'] = _0x596589['y'] - _0x46608f / _0x49c3b2 * _0x3bf415;
        }
        _0x596589['renderX'] += (_0x596589['x'] - _0x596589['renderX']) * _0x174712;
        _0x596589['renderY'] += (_0x596589['y'] - _0x596589['renderY']) * _0x174712;
        let _0x512716 = (_0x596589['angle'] || 0x0) - _0x596589['renderAngle'];
        while (_0x512716 < -Math['PI'])
            _0x512716 += Math['PI'] * 0x2;
        while (_0x512716 > Math['PI'])
            _0x512716 -= Math['PI'] * 0x2;
        _0x596589['renderAngle'] += _0x512716 * 0.3;
    }
    if (_0x2db359['GAME_STATE'] === 'NIGHT') {
        _0x494d06 = Math['min'](0.6, _0x494d06 + _0x403dd2 * 0.5);
    } else {
        _0x494d06 = Math['max'](0x0, _0x494d06 - _0x403dd2 * 0.5);
    }
    _0x9404bd();
    _0x3d6c32();
}
function _0x47049e(_0x354466, _0xecb2e7, _0x564aee, _0x32c0ff, _0x4ecae1 = !![]) {
    _0x354466['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x1684cb = _0x354466['measureText'](_0xecb2e7)['width'];
    const _0x438cc4 = _0x1684cb + 0x18;
    const _0xdaed6e = 0x1c;
    _0x354466['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x354466['beginPath']();
    if (_0x354466['roundRect']) {
        _0x354466['roundRect'](_0x564aee - _0x438cc4 / 0x2, _0x32c0ff - _0xdaed6e, _0x438cc4, _0xdaed6e, 0x6);
    } else {
        _0x354466['rect'](_0x564aee - _0x438cc4 / 0x2, _0x32c0ff - _0xdaed6e, _0x438cc4, _0xdaed6e);
    }
    _0x354466['fill']();
    if (_0x4ecae1) {
        _0x354466['beginPath']();
        _0x354466['moveTo'](_0x564aee - 0x6, _0x32c0ff);
        _0x354466['lineTo'](_0x564aee + 0x6, _0x32c0ff);
        _0x354466['lineTo'](_0x564aee, _0x32c0ff + 0x6);
        _0x354466['fill']();
    }
    _0x354466['fillStyle'] = '#ffffff';
    _0x354466['textAlign'] = 'center';
    _0x354466['textBaseline'] = 'middle';
    _0x354466['fillText'](_0xecb2e7, _0x564aee, _0x32c0ff - _0xdaed6e / 0x2 + 0x1);
}
function _0x553dc4(_0x3992ce, _0x35e29e, _0x596437, _0x30cc9f) {
    if (!_0x35e29e || _0x35e29e['length'] === 0x0)
        return;
    let _0x40f5f6 = _0x30cc9f;
    for (let _0x53af40 = 0x0; _0x53af40 < _0x35e29e['length']; _0x53af40++) {
        _0x47049e(_0x3992ce, _0x35e29e[_0x53af40]['text'], _0x596437, _0x40f5f6, _0x53af40 === 0x0);
        _0x40f5f6 -= 0x24;
    }
}
function _0x306c67() {
    if (!_0x2db359['SYSTEM']['isReady'])
        return;
    _0x13ff1e['fillStyle'] = '#000000';
    _0x13ff1e['fillRect'](0x0, 0x0, _0x1f0b5c['width'], _0x1f0b5c['height']);
    _0x13ff1e['save']();
    try {
        _0x13ff1e['scale'](_0x2db359['SYSTEM']['viewScale'], _0x2db359['SYSTEM']['viewScale']);
        _0x13ff1e['imageSmoothingEnabled'] = ![];
        const _0x5cbab5 = Math['floor'](_0x2db359['CAMERA']['x'] || 0x0);
        const _0xaadd18 = Math['floor'](_0x2db359['CAMERA']['y'] || 0x0);
        const _0x928714 = Math['max'](0x0, Math['floor'](_0x5cbab5 / _0x2db359['MAP']['chunkSize']));
        const _0xdd1eb4 = Math['min'](_0x2db359['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x5cbab5 + _0x2db359['CAMERA']['width']) / _0x2db359['MAP']['chunkSize']));
        const _0x11d430 = Math['max'](0x0, Math['floor'](_0xaadd18 / _0x2db359['MAP']['chunkSize']));
        const _0x51f256 = Math['min'](_0x2db359['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0xaadd18 + _0x2db359['CAMERA']['height']) / _0x2db359['MAP']['chunkSize']));
        for (let _0xeb568a = _0x11d430; _0xeb568a <= _0x51f256; _0xeb568a++)
            for (let _0x51f582 = _0x928714; _0x51f582 <= _0xdd1eb4; _0x51f582++) {
                const _0x5c97c3 = _0x51f582 * _0x2db359['MAP']['chunkSize'] - _0x5cbab5;
                const _0x1def65 = _0xeb568a * _0x2db359['MAP']['chunkSize'] - _0xaadd18;
                _0x13ff1e['drawImage'](_0x2db359['MAP']['bgChunks'][_0xeb568a][_0x51f582], _0x5c97c3, _0x1def65, _0x2db359['MAP']['chunkSize'] + 0x1, _0x2db359['MAP']['chunkSize'] + 0x1);
            }
        if (_0x204f02['complete'] && _0x204f02['naturalWidth'] > 0x0) {
            const _0x1c363a = _0x2db359['MAP']['tileSize'];
            const _0x4b5ca6 = _0x1c363a * 0xa;
            const _0x492af4 = _0x2db359['MAP']['columns'] / 0x2 * _0x1c363a - _0x4b5ca6 / 0x2 - _0x5cbab5;
            const _0x5d0365 = _0x2db359['MAP']['rows'] / 0x2 * _0x1c363a - _0x4b5ca6 / 0x2 - _0xaadd18;
            _0x13ff1e['imageSmoothingEnabled'] = ![];
            _0x13ff1e['drawImage'](_0x204f02, _0x492af4, _0x5d0365, _0x4b5ca6, _0x4b5ca6);
        }
        if (_0x31c6a3['complete'] && _0x31c6a3['naturalWidth'] > 0x0) {
            _0x2db359['ENTITIES']['forEach'](_0x720040 => {
                if (_0x720040['type'] !== 'table')
                    return;
                _0x13ff1e['save']();
                _0x13ff1e['imageSmoothingEnabled'] = ![];
                const _0x38e92e = _0x31c6a3['naturalWidth'] >= _0x31c6a3['naturalHeight'];
                const _0x35f40d = _0x720040['w'] >= _0x720040['h'];
                if (_0x38e92e === _0x35f40d) {
                    _0x13ff1e['drawImage'](_0x31c6a3, _0x720040['x'] - _0x5cbab5, _0x720040['y'] - _0xaadd18, _0x720040['w'], _0x720040['h']);
                } else {
                    _0x13ff1e['translate'](_0x720040['x'] - _0x5cbab5 + _0x720040['w'] / 0x2, _0x720040['y'] - _0xaadd18 + _0x720040['h'] / 0x2);
                    _0x13ff1e['rotate'](Math['PI'] / 0x2);
                    _0x13ff1e['drawImage'](_0x31c6a3, -_0x720040['h'] / 0x2, -_0x720040['w'] / 0x2, _0x720040['h'], _0x720040['w']);
                }
                _0x13ff1e['restore']();
            });
        } else {
            _0x2db359['ENTITIES']['forEach'](_0x519571 => {
                if (_0x519571['type'] !== 'table')
                    return;
                _0x13ff1e['save']();
                _0x13ff1e['fillStyle'] = '#6b4423';
                _0x13ff1e['fillRect'](_0x519571['x'] - _0x5cbab5, _0x519571['y'] - _0xaadd18, _0x519571['w'], _0x519571['h']);
                _0x13ff1e['strokeStyle'] = '#422810';
                _0x13ff1e['lineWidth'] = 0x3;
                _0x13ff1e['strokeRect'](_0x519571['x'] - _0x5cbab5 + 0x1, _0x519571['y'] - _0xaadd18 + 0x1, _0x519571['w'] - 0x2, _0x519571['h'] - 0x2);
                _0x13ff1e['fillStyle'] = '#82532a';
                _0x13ff1e['fillRect'](_0x519571['x'] - _0x5cbab5 + 0x4, _0x519571['y'] - _0xaadd18 + 0x4, _0x519571['w'] - 0x8, _0x519571['h'] - 0x8);
                _0x13ff1e['restore']();
            });
        }
        if (_0xc8ec00) {
            for (let _0xfb54b0 = _0x11d430; _0xfb54b0 <= _0x51f256; _0xfb54b0++) {
                for (let _0x2ad46e = _0x928714; _0x2ad46e <= _0xdd1eb4; _0x2ad46e++) {
                    const _0x11f748 = _0x2ad46e * _0x2db359['MAP']['chunkSize'] - _0x5cbab5;
                    const _0x28c098 = _0xfb54b0 * _0x2db359['MAP']['chunkSize'] - _0xaadd18;
                    _0x13ff1e['drawImage'](_0x2db359['MAP']['fgChunks'][_0xfb54b0][_0x2ad46e], _0x11f748, _0x28c098, _0x2db359['MAP']['chunkSize'] + 0x1, _0x2db359['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x46d6a1 = _0x2db359['GAME_STATE'] === 'NIGHT' && _0x42f346 === 'Skinwalker' && !_0x3e4f57['isDead'];
        const _0x4d43ae = _0x3e4f57['x'] - _0x5cbab5 + _0x3e4f57['width'] / 0x2;
        const _0x42243f = _0x3e4f57['y'] - _0xaadd18 + _0x3e4f57['height'] / 0x2;
        const _0x4cd763 = _0x3e4f57['width'] * _0x3e4f57['scale'] * 1.3;
        const _0x597913 = _0x3e4f57['height'] * _0x3e4f57['scale'] * 1.3;
        for (const _0x2cdb5d in _0x59fd94) {
            const _0x2214d9 = _0x59fd94[_0x2cdb5d];
            if (_0x2214d9['isDead'])
                continue;
            const _0x45da6d = (_0x2214d9['renderX'] ?? _0x2214d9['x']) - _0x5cbab5 + _0x2214d9['width'] / 0x2;
            const _0x4d263b = (_0x2214d9['renderY'] ?? _0x2214d9['y']) - _0xaadd18 + _0x2214d9['height'] / 0x2;
            const _0x403d82 = Math['min'](0x2, Math['max'](0.3, _0x2214d9['scale'] || 0x1));
            const _0x651754 = _0x2214d9['width'] * _0x403d82 * 1.3;
            const _0x1e6be1 = _0x2214d9['height'] * _0x403d82 * 1.3;
            _0x13ff1e['save']();
            try {
                _0x13ff1e['translate'](_0x45da6d, _0x4d263b);
                _0x13ff1e['rotate'](_0x2214d9['renderAngle'] ?? 0x0);
                if (_0x2214d9['isDark'])
                    _0x13ff1e['filter'] = 'brightness(0)';
                _0x5add2a(_0x13ff1e, _0x2214d9['body'], _0x2214d9['eyes'], _0x651754, _0x1e6be1);
                if (_0x158ffa['has'](parseInt(_0x2cdb5d)) && _0x18bb4a['complete'] && _0x18bb4a['naturalWidth'] > 0x0) {
                    _0x13ff1e['drawImage'](_0x18bb4a, -_0x651754 / 0x2, -_0x1e6be1 / 0x2, _0x651754, _0x1e6be1);
                }
                if (_0x2214d9['isDark'])
                    _0x13ff1e['filter'] = 'none';
            } finally {
                _0x13ff1e['restore']();
            }
            if (!_0x2d4c42((_0x2214d9['renderX'] ?? _0x2214d9['x']) + _0x2214d9['width'] / 0x2, (_0x2214d9['renderY'] ?? _0x2214d9['y']) + _0x2214d9['height'] / 0x2)) {
                _0x13ff1e['textAlign'] = 'center';
                _0x13ff1e['lineJoin'] = 'round';
                _0x13ff1e['lineWidth'] = 0x3;
                _0x13ff1e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x13ff1e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x13ff1e['fillStyle'] = _0x158ffa['has'](parseInt(_0x2cdb5d)) ? '#cc88ff' : '#ffffff';
                const _0x17a4be = _0x2214d9['isDark'] ? '???' : _0x2214d9['name'] + (_0x2214d9['isOwner'] ? '\x20[🗝️]' : '');
                _0x13ff1e['strokeText'](_0x17a4be, _0x45da6d, _0x4d263b - _0x1e6be1 / 0x2 - 0x10);
                _0x13ff1e['fillText'](_0x17a4be, _0x45da6d, _0x4d263b - _0x1e6be1 / 0x2 - 0x10);
            }
        }
        if (!_0x3e4f57['isDead']) {
            _0x13ff1e['save']();
            try {
                _0x13ff1e['translate'](_0x4d43ae, _0x42243f);
                _0x13ff1e['rotate'](_0x3e4f57['angle']);
                if (_0x46d6a1)
                    _0x13ff1e['filter'] = 'brightness(0)';
                _0x5add2a(_0x13ff1e, _0x24165e, _0x2d81a8, _0x4cd763, _0x597913);
                if (_0x158ffa['has'](_0x4037a5) && _0x18bb4a['complete'] && _0x18bb4a['naturalWidth'] > 0x0) {
                    _0x13ff1e['drawImage'](_0x18bb4a, -_0x4cd763 / 0x2, -_0x597913 / 0x2, _0x4cd763, _0x597913);
                }
                if (_0x46d6a1)
                    _0x13ff1e['filter'] = 'none';
            } finally {
                _0x13ff1e['restore']();
            }
            if (!_0x2d4c42(_0x3e4f57['x'] + _0x3e4f57['width'] / 0x2, _0x3e4f57['y'] + _0x3e4f57['height'] / 0x2)) {
                _0x13ff1e['textAlign'] = 'center';
                _0x13ff1e['lineJoin'] = 'round';
                _0x13ff1e['lineWidth'] = 0x3;
                _0x13ff1e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x13ff1e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x13ff1e['fillStyle'] = _0x158ffa['has'](_0x4037a5) ? '#cc88ff' : '#ffffff';
                const _0x8ff095 = _0x46d6a1 ? '???' : _0x34ea00 + (_0x37e7cc ? '\x20[🗝️]' : '');
                _0x13ff1e['strokeText'](_0x8ff095, _0x4d43ae, _0x42243f - _0x597913 / 0x2 - 0x10);
                _0x13ff1e['fillText'](_0x8ff095, _0x4d43ae, _0x42243f - _0x597913 / 0x2 - 0x10);
            }
        }
        if (_0x2db359['MAP']['wallChunks'] && _0x2db359['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x5efc3f = _0x11d430; _0x5efc3f <= _0x51f256; _0x5efc3f++)
                for (let _0x4cdcc4 = _0x928714; _0x4cdcc4 <= _0xdd1eb4; _0x4cdcc4++) {
                    if (!_0x2db359['MAP']['wallChunks'][_0x5efc3f] || !_0x2db359['MAP']['wallChunks'][_0x5efc3f][_0x4cdcc4])
                        continue;
                    const _0x4a0adc = _0x4cdcc4 * _0x2db359['MAP']['chunkSize'] - _0x5cbab5;
                    const _0x4c4767 = _0x5efc3f * _0x2db359['MAP']['chunkSize'] - _0xaadd18;
                    _0x13ff1e['drawImage'](_0x2db359['MAP']['wallChunks'][_0x5efc3f][_0x4cdcc4], _0x4a0adc, _0x4c4767, _0x2db359['MAP']['chunkSize'] + 0x1, _0x2db359['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x285ca5 of _0x2db359['ENTITIES']) {
            if (_0x285ca5['type'] !== 'npc')
                continue;
            const _0x299e84 = _0x285ca5['x'] - _0x5cbab5 + _0x285ca5['w'] / 0x2;
            const _0x58c17d = _0x285ca5['y'] - _0xaadd18 + _0x285ca5['h'] / 0x2;
            const _0x569357 = _0x285ca5['w'];
            const _0x570529 = _0x285ca5['h'];
            _0x13ff1e['save']();
            _0x13ff1e['translate'](_0x299e84, _0x58c17d);
            _0x13ff1e['rotate'](_0x285ca5['angle'] !== undefined ? _0x285ca5['angle'] : 0x0);
            _0x5add2a(_0x13ff1e, _0x285ca5['body'] || 'yanito932.png', _0x285ca5['eyes'], _0x569357, _0x570529);
            _0x13ff1e['restore']();
            _0x13ff1e['textAlign'] = 'center';
            _0x13ff1e['lineJoin'] = 'round';
            _0x13ff1e['lineWidth'] = 0x3;
            _0x13ff1e['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x13ff1e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x13ff1e['fillStyle'] = '#aaaaaa';
            _0x13ff1e['strokeText'](_0x285ca5['name'] || 'NPC', _0x299e84, _0x58c17d - _0x570529 / 0x2 - 0x10);
            _0x13ff1e['fillText'](_0x285ca5['name'] || 'NPC', _0x299e84, _0x58c17d - _0x570529 / 0x2 - 0x10);
        }
        if (_0x3e4f57['isDead']) {
            for (const _0x2b8592 in _0x59fd94) {
                const _0x459bee = _0x59fd94[_0x2b8592];
                if (!_0x459bee['isDead'])
                    continue;
                const _0x17ea72 = (_0x459bee['renderX'] ?? _0x459bee['x']) - _0x5cbab5 + _0x459bee['width'] / 0x2;
                const _0x1e1b88 = (_0x459bee['renderY'] ?? _0x459bee['y']) - _0xaadd18 + _0x459bee['height'] / 0x2;
                const _0xa84a3f = _0x459bee['width'] * (_0x459bee['scale'] || 0x1) * 1.3;
                const _0x39abff = _0x459bee['height'] * (_0x459bee['scale'] || 0x1) * 1.3;
                _0x13ff1e['save']();
                try {
                    _0x13ff1e['translate'](_0x17ea72, _0x1e1b88);
                    _0x13ff1e['rotate'](_0x459bee['renderAngle'] ?? 0x0);
                    _0x13ff1e['globalAlpha'] = 0.3;
                    _0x5add2a(_0x13ff1e, _0x459bee['body'], _0x459bee['eyes'], _0xa84a3f, _0x39abff);
                } finally {
                    _0x13ff1e['restore']();
                }
                if (!_0x2d4c42((_0x459bee['renderX'] ?? _0x459bee['x']) + _0x459bee['width'] / 0x2, (_0x459bee['renderY'] ?? _0x459bee['y']) + _0x459bee['height'] / 0x2)) {
                    _0x13ff1e['save']();
                    _0x13ff1e['globalAlpha'] = 0.3;
                    _0x13ff1e['textAlign'] = 'center';
                    _0x13ff1e['lineJoin'] = 'round';
                    _0x13ff1e['lineWidth'] = 0x3;
                    _0x13ff1e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x13ff1e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x13ff1e['fillStyle'] = '#ffffff';
                    const _0x45d44a = _0x459bee['name'] + (_0x459bee['isOwner'] ? '\x20[🗝️]' : '');
                    _0x13ff1e['strokeText'](_0x45d44a, _0x17ea72, _0x1e1b88 - _0x39abff / 0x2 - 0x10);
                    _0x13ff1e['fillText'](_0x45d44a, _0x17ea72, _0x1e1b88 - _0x39abff / 0x2 - 0x10);
                    _0x13ff1e['restore']();
                }
            }
            _0x13ff1e['save']();
            try {
                _0x13ff1e['translate'](_0x4d43ae, _0x42243f);
                _0x13ff1e['rotate'](_0x3e4f57['angle']);
                _0x13ff1e['globalAlpha'] = 0.3;
                _0x5add2a(_0x13ff1e, _0x24165e, _0x2d81a8, _0x4cd763, _0x597913);
            } finally {
                _0x13ff1e['restore']();
            }
            if (!_0x2d4c42(_0x3e4f57['x'] + _0x3e4f57['width'] / 0x2, _0x3e4f57['y'] + _0x3e4f57['height'] / 0x2)) {
                _0x13ff1e['save']();
                _0x13ff1e['globalAlpha'] = 0.3;
                _0x13ff1e['textAlign'] = 'center';
                _0x13ff1e['lineJoin'] = 'round';
                _0x13ff1e['lineWidth'] = 0x3;
                _0x13ff1e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x13ff1e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x13ff1e['fillStyle'] = '#ffffff';
                const _0x6d6da7 = _0x34ea00 + (_0x37e7cc ? '\x20[🗝️]' : '');
                _0x13ff1e['strokeText'](_0x6d6da7, _0x4d43ae, _0x42243f - _0x597913 / 0x2 - 0x10);
                _0x13ff1e['fillText'](_0x6d6da7, _0x4d43ae, _0x42243f - _0x597913 / 0x2 - 0x10);
                _0x13ff1e['restore']();
            }
        }
        for (let _0x24c362 = _0x11d430; _0x24c362 <= _0x51f256; _0x24c362++)
            for (let _0x18562e = _0x928714; _0x18562e <= _0xdd1eb4; _0x18562e++) {
                const _0x34d0a1 = _0x18562e * _0x2db359['MAP']['chunkSize'] - _0x5cbab5;
                const _0x13077d = _0x24c362 * _0x2db359['MAP']['chunkSize'] - _0xaadd18;
                _0x13ff1e['drawImage'](_0x2db359['MAP']['fgChunks'][_0x24c362][_0x18562e], _0x34d0a1, _0x13077d, _0x2db359['MAP']['chunkSize'] + 0x1, _0x2db359['MAP']['chunkSize'] + 0x1);
            }
        if (_0x2db359['EDITOR']['enabled'] && _0x2db359['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x16e8f2 = _0x2db359['INPUTS']['mouseX'] / _0x2db359['SYSTEM']['viewScale'] + _0x2db359['CAMERA']['x'];
            const _0x194e8e = _0x2db359['INPUTS']['mouseY'] / _0x2db359['SYSTEM']['viewScale'] + _0x2db359['CAMERA']['y'];
            const _0x4dd37d = Math['floor'](_0x16e8f2 / _0x2db359['MAP']['tileSize']);
            const _0x308c65 = Math['floor'](_0x194e8e / _0x2db359['MAP']['tileSize']);
            if (_0x4dd37d >= 0x0 && _0x4dd37d < _0x2db359['MAP']['columns'] && _0x308c65 >= 0x0 && _0x308c65 < _0x2db359['MAP']['rows']) {
                const _0x468e7b = _0x4dd37d * _0x2db359['MAP']['tileSize'] - _0x5cbab5;
                const _0x4853b5 = _0x308c65 * _0x2db359['MAP']['tileSize'] - _0xaadd18;
                _0x13ff1e['save']();
                _0x13ff1e['globalAlpha'] = 0.5;
                if (_0x2db359['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x1f202b = _0x2db359['EDITOR']['selectedTileGid'] - 0x1;
                    _0x13ff1e['drawImage'](_0x2288e0, _0x1f202b % _0x2db359['MAP']['tilesetCols'] * _0x2db359['MAP']['tileSize'], Math['floor'](_0x1f202b / _0x2db359['MAP']['tilesetCols']) * _0x2db359['MAP']['tileSize'], _0x2db359['MAP']['tileSize'], _0x2db359['MAP']['tileSize'], _0x468e7b, _0x4853b5, _0x2db359['MAP']['tileSize'], _0x2db359['MAP']['tileSize']);
                } else {
                    _0x13ff1e['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x13ff1e['fillRect'](_0x468e7b, _0x4853b5, _0x2db359['MAP']['tileSize'], _0x2db359['MAP']['tileSize']);
                }
                _0x13ff1e['restore']();
            }
        }
        _0x1493cd(_0x13ff1e, _0x5cbab5, _0xaadd18);
        if (_0x494d06 > 0x0) {
            _0x13ff1e['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x494d06 + ')';
            _0x13ff1e['fillRect'](0x0, 0x0, _0x2db359['CAMERA']['width'], _0x2db359['CAMERA']['height']);
        }
        for (const _0x101cf9 in _0x59fd94) {
            const _0x3e7cbc = _0x59fd94[_0x101cf9];
            if (_0x3e7cbc['isDead'] && !_0x3e4f57['isDead'])
                continue;
            const _0x3576d2 = (_0x3e7cbc['renderX'] ?? _0x3e7cbc['x']) - _0x5cbab5 + _0x3e7cbc['width'] / 0x2;
            const _0x451251 = (_0x3e7cbc['renderY'] ?? _0x3e7cbc['y']) - _0xaadd18 + _0x3e7cbc['height'] / 0x2;
            _0x553dc4(_0x13ff1e, _0x3e7cbc['chats'], _0x3576d2, _0x451251 - _0x3e7cbc['height'] / 0x2 - 0x20);
        }
        _0x553dc4(_0x13ff1e, _0x3e4f57['chats'], _0x4d43ae, _0x42243f - _0x3e4f57['height'] / 0x2 - 0x20);
    } finally {
        _0x13ff1e['restore']();
    }
}
function _0x3f4b22(_0x4d17a0) {
    if (!_0x2db359['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x3f4b22);
    let _0x178114 = (_0x4d17a0 - _0x2db359['SYSTEM']['lastTime']) / 0x3e8;
    _0x2db359['SYSTEM']['lastTime'] = _0x4d17a0;
    if (_0x178114 > 0.1)
        _0x178114 = 0.1;
    if (_0x178114 < 0x0 || isNaN(_0x178114))
        _0x178114 = 0.016;
    if (_0xc8ec00) {
        _0x363b39(_0x178114);
        _0x306c67();
        return;
    }
    if (!_0x4037a5)
        return;
    _0xf3d7e8(_0x178114);
    _0x5aa71e['tick'](_0x4d17a0);
    _0x306c67();
}
function _0x2b3450() {
    const _0x41b607 = Math['ceil'](_0x2db359['MAP']['columns'] * _0x2db359['MAP']['tileSize'] / _0x2db359['MAP']['chunkSize']);
    const _0x253ff0 = Math['ceil'](_0x2db359['MAP']['rows'] * _0x2db359['MAP']['tileSize'] / _0x2db359['MAP']['chunkSize']);
    _0x2db359['MAP']['bgChunks'] = [];
    _0x2db359['MAP']['fgChunks'] = [];
    _0x2db359['MAP']['wallChunks'] = [];
    for (let _0xed3b5b = 0x0; _0xed3b5b < _0x253ff0; _0xed3b5b++) {
        _0x2db359['MAP']['bgChunks'][_0xed3b5b] = [];
        _0x2db359['MAP']['fgChunks'][_0xed3b5b] = [];
        _0x2db359['MAP']['wallChunks'][_0xed3b5b] = [];
        for (let _0x20d515 = 0x0; _0x20d515 < _0x41b607; _0x20d515++) {
            const _0x1d719b = document['createElement']('canvas');
            _0x1d719b['width'] = _0x1d719b['height'] = _0x2db359['MAP']['chunkSize'];
            const _0x142648 = document['createElement']('canvas');
            _0x142648['width'] = _0x142648['height'] = _0x2db359['MAP']['chunkSize'];
            const _0x3d0b47 = document['createElement']('canvas');
            _0x3d0b47['width'] = _0x3d0b47['height'] = _0x2db359['MAP']['chunkSize'];
            _0x2db359['MAP']['bgChunks'][_0xed3b5b][_0x20d515] = _0x1d719b;
            _0x2db359['MAP']['fgChunks'][_0xed3b5b][_0x20d515] = _0x142648;
            _0x2db359['MAP']['wallChunks'][_0xed3b5b][_0x20d515] = _0x3d0b47;
            _0x142f18(_0x20d515, _0xed3b5b);
        }
    }
}
function _0x142f18(_0x3b2be9, _0x114e96) {
    const _0x1e32b0 = _0x2db359['MAP']['bgChunks'][_0x114e96][_0x3b2be9]['getContext']('2d', { 'alpha': !![] });
    const _0x484c6a = _0x2db359['MAP']['fgChunks'][_0x114e96][_0x3b2be9]['getContext']('2d', { 'alpha': !![] });
    const _0x16ad74 = _0x2db359['MAP']['wallChunks'][_0x114e96] && _0x2db359['MAP']['wallChunks'][_0x114e96][_0x3b2be9] ? _0x2db359['MAP']['wallChunks'][_0x114e96][_0x3b2be9]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x1e32b0['imageSmoothingEnabled'] = _0x484c6a['imageSmoothingEnabled'] = ![];
    if (_0x16ad74)
        _0x16ad74['imageSmoothingEnabled'] = ![];
    _0x1e32b0['clearRect'](0x0, 0x0, _0x2db359['MAP']['chunkSize'], _0x2db359['MAP']['chunkSize']);
    _0x484c6a['clearRect'](0x0, 0x0, _0x2db359['MAP']['chunkSize'], _0x2db359['MAP']['chunkSize']);
    if (_0x16ad74)
        _0x16ad74['clearRect'](0x0, 0x0, _0x2db359['MAP']['chunkSize'], _0x2db359['MAP']['chunkSize']);
    const _0x1303ff = Math['floor'](_0x3b2be9 * _0x2db359['MAP']['chunkSize'] / _0x2db359['MAP']['tileSize']);
    const _0x4d2759 = Math['ceil']((_0x3b2be9 + 0x1) * _0x2db359['MAP']['chunkSize'] / _0x2db359['MAP']['tileSize']);
    const _0x371ad5 = Math['floor'](_0x114e96 * _0x2db359['MAP']['chunkSize'] / _0x2db359['MAP']['tileSize']);
    const _0x3514fa = Math['ceil']((_0x114e96 + 0x1) * _0x2db359['MAP']['chunkSize'] / _0x2db359['MAP']['tileSize']);
    const _0xb1becc = 0.5;
    const _0x73c461 = _0x2db359['MAP']['tileSize'] - _0xb1becc * 0x2;
    _0x2db359['MAP']['layers']['forEach'](_0x48f54f => {
        const _0x6407df = _0x48f54f['name'] === 'walls';
        const _0x5b9cb6 = _0x48f54f['name'] === 'trees' ? _0x484c6a : _0x6407df ? _0x16ad74 || _0x1e32b0 : _0x1e32b0;
        for (let _0x5dc473 = Math['max'](0x0, _0x371ad5); _0x5dc473 < Math['min'](_0x2db359['MAP']['rows'], _0x3514fa); _0x5dc473++) {
            for (let _0x52564a = Math['max'](0x0, _0x1303ff); _0x52564a < Math['min'](_0x2db359['MAP']['columns'], _0x4d2759); _0x52564a++) {
                let _0x3ffe9c = _0x48f54f['data'][_0x5dc473 * _0x2db359['MAP']['columns'] + _0x52564a];
                if (_0x48f54f['name'] === 'floor2' && _0x2db359['MAP']['doors'] && _0x2db359['MAP']['doors'][_0x5dc473 * _0x2db359['MAP']['columns'] + _0x52564a]) {
                    _0x3ffe9c = 0x2;
                }
                if (_0x3ffe9c > 0x0) {
                    const _0x597bf7 = _0x3ffe9c - 0x1;
                    const _0x6c1605 = _0x597bf7 % _0x2db359['MAP']['tilesetCols'] * _0x2db359['MAP']['tileSize'] + _0xb1becc;
                    const _0x5dd5aa = Math['floor'](_0x597bf7 / _0x2db359['MAP']['tilesetCols']) * _0x2db359['MAP']['tileSize'] + _0xb1becc;
                    const _0x3bcb45 = _0x52564a * _0x2db359['MAP']['tileSize'] - _0x3b2be9 * _0x2db359['MAP']['chunkSize'];
                    const _0xe7261b = _0x5dc473 * _0x2db359['MAP']['tileSize'] - _0x114e96 * _0x2db359['MAP']['chunkSize'];
                    if (_0x3ffe9c === 0x4) {
                        const _0x169477 = 0x1;
                        const _0x35032b = _0x169477 % _0x2db359['MAP']['tilesetCols'] * _0x2db359['MAP']['tileSize'] + _0xb1becc;
                        const _0x2684c5 = Math['floor'](_0x169477 / _0x2db359['MAP']['tilesetCols']) * _0x2db359['MAP']['tileSize'] + _0xb1becc;
                        _0x1e32b0['drawImage'](_0x2288e0, _0x35032b, _0x2684c5, _0x73c461, _0x73c461, _0x3bcb45, _0xe7261b, _0x2db359['MAP']['tileSize'], _0x2db359['MAP']['tileSize']);
                        let _0x37fa24 = _0x2db359['MAP']['doors'] ? _0x2db359['MAP']['doors'][_0x5dc473 * _0x2db359['MAP']['columns'] + _0x52564a] : null;
                        if (!_0x37fa24) {
                            const _0x40866d = _0x2db359['MAP']['layers']['find'](_0x301b45 => _0x301b45['name'] === 'walls');
                            const _0x19a655 = _0x5dc473 > 0x0 && _0x40866d && _0x40866d['data'][(_0x5dc473 - 0x1) * _0x2db359['MAP']['columns'] + _0x52564a] > 0x0;
                            const _0x35fd4b = _0x5dc473 < _0x2db359['MAP']['rows'] - 0x1 && _0x40866d && _0x40866d['data'][(_0x5dc473 + 0x1) * _0x2db359['MAP']['columns'] + _0x52564a] > 0x0;
                            const _0x2b3fe3 = _0x52564a > 0x0 && _0x40866d && _0x40866d['data'][_0x5dc473 * _0x2db359['MAP']['columns'] + _0x52564a - 0x1] > 0x0;
                            const _0x319390 = _0x52564a < _0x2db359['MAP']['columns'] - 0x1 && _0x40866d && _0x40866d['data'][_0x5dc473 * _0x2db359['MAP']['columns'] + _0x52564a + 0x1] > 0x0;
                            if (_0x2b3fe3 && _0x319390)
                                _0x37fa24 = _0x5dc473 < _0x2db359['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x19a655 && _0x35fd4b)
                                _0x37fa24 = _0x52564a < _0x2db359['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x15449c = 0x0;
                        if (_0x37fa24 === 'bottom')
                            _0x15449c = Math['PI'] / 0x2;
                        else if (_0x37fa24 === 'left')
                            _0x15449c = Math['PI'];
                        else if (_0x37fa24 === 'top')
                            _0x15449c = -Math['PI'] / 0x2;
                        else if (_0x37fa24 === 'right')
                            _0x15449c = 0x0;
                        if (_0x15449c !== 0x0) {
                            _0x5b9cb6['save']();
                            _0x5b9cb6['translate'](_0x3bcb45 + _0x2db359['MAP']['tileSize'] / 0x2, _0xe7261b + _0x2db359['MAP']['tileSize'] / 0x2);
                            _0x5b9cb6['rotate'](_0x15449c);
                            _0x5b9cb6['drawImage'](_0x2288e0, _0x6c1605, _0x5dd5aa, _0x73c461, _0x73c461, -_0x2db359['MAP']['tileSize'] / 0x2, -_0x2db359['MAP']['tileSize'] / 0x2, _0x2db359['MAP']['tileSize'], _0x2db359['MAP']['tileSize']);
                            _0x5b9cb6['restore']();
                        } else {
                            _0x5b9cb6['drawImage'](_0x2288e0, _0x6c1605, _0x5dd5aa, _0x73c461, _0x73c461, _0x3bcb45, _0xe7261b, _0x2db359['MAP']['tileSize'], _0x2db359['MAP']['tileSize']);
                        }
                    } else {
                        _0x5b9cb6['drawImage'](_0x2288e0, _0x6c1605, _0x5dd5aa, _0x73c461, _0x73c461, _0x3bcb45, _0xe7261b, _0x2db359['MAP']['tileSize'], _0x2db359['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x229534() {
    _0x2288e0['crossOrigin'] = 'Anonymous';
    _0x2288e0['onload'] = () => {
        _0x2db359['MAP']['tilesetCols'] = 0x3;
        _0x529ad9();
    };
    _0x2288e0['onerror'] = () => {
        _0x2db359['MAP']['tilesetCols'] = 0x1;
        _0x529ad9();
    };
    _0x2288e0['src'] = 'assets/tilesheet.png';
    _0x204f02['crossOrigin'] = 'Anonymous';
    _0x204f02['onload'] = _0x529ad9;
    _0x204f02['onerror'] = () => {
        _0x529ad9();
    };
    _0x204f02['src'] = 'assets/center.png';
    _0x31c6a3['crossOrigin'] = 'Anonymous';
    _0x31c6a3['onload'] = _0x529ad9;
    _0x31c6a3['onerror'] = () => {
        _0x529ad9();
    };
    _0x31c6a3['src'] = 'assets/table.png';
}
function _0x529ad9() {
    _0x2db359['SYSTEM']['assetsLoaded']++;
    if (_0x2db359['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x509f7e();
    }
}
function _0xa2e20f(_0x5d7da0, _0x11f42c) {
    if (!_0x37e7cc || !_0x5b79f3)
        return;
    const _0x2ac9c8 = _0x5d7da0 / _0x2db359['SYSTEM']['viewScale'] + _0x2db359['CAMERA']['x'];
    const _0x52f280 = _0x11f42c / _0x2db359['SYSTEM']['viewScale'] + _0x2db359['CAMERA']['y'];
    const _0x1a4425 = Math['floor'](_0x2ac9c8 / _0x2db359['MAP']['tileSize']);
    const _0x57f052 = Math['floor'](_0x52f280 / _0x2db359['MAP']['tileSize']);
    if (_0x1a4425 >= 0x0 && _0x1a4425 < _0x2db359['MAP']['columns'] && _0x57f052 >= 0x0 && _0x57f052 < _0x2db359['MAP']['rows'])
        _0x5b79f3['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x2db359['EDITOR']['selectedLayer'],
            'col': _0x1a4425,
            'row': _0x57f052,
            'gid': _0x2db359['EDITOR']['selectedTileGid']
        }));
}
function _0x3db51e() {
    const _0x504a9d = document['getElementById']('palette');
    if (!_0x504a9d || _0x504a9d['children']['length'] > 0x0)
        return;
    const _0x5590c7 = 0x40;
    const _0x5e6d63 = _0x2288e0;
    const _0x4d8879 = document['createElement']('div');
    _0x4d8879['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x1ae946 = document['createElement']('canvas');
    _0x1ae946['width'] = 0xc0;
    _0x1ae946['height'] = 0xa0;
    _0x1ae946['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x4d8879['appendChild'](_0x1ae946);
    const _0x20ff74 = document['createElement']('div');
    _0x20ff74['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x4d8879['appendChild'](_0x20ff74);
    let _0x3c5544 = 0x0, _0x5524d5 = 0x0;
    let _0x19c514 = ![], _0x282171 = 0x0, _0x7a6f1d = 0x0, _0x12f4fc = 0x0, _0x318e65 = 0x0;
    function _0x5c2446() {
        const _0x47abc7 = _0x1ae946['getContext']('2d');
        _0x47abc7['clearRect'](0x0, 0x0, _0x1ae946['width'], _0x1ae946['height']);
        _0x47abc7['imageSmoothingEnabled'] = ![];
        if (_0x5e6d63['complete'] && _0x5e6d63['naturalWidth'] > 0x0) {
            _0x47abc7['drawImage'](_0x5e6d63, _0x3c5544, _0x5524d5, _0x1ae946['width'], _0x1ae946['height'], 0x0, 0x0, _0x1ae946['width'], _0x1ae946['height']);
        }
        _0x47abc7['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x47abc7['lineWidth'] = 0x1;
        const _0x42e51b = Math['floor'](_0x3c5544 / _0x5590c7);
        const _0x5afb6e = Math['floor'](_0x5524d5 / _0x5590c7);
        for (let _0x558c7d = _0x42e51b; _0x558c7d <= _0x42e51b + Math['ceil'](_0x1ae946['width'] / _0x5590c7) + 0x1; _0x558c7d++) {
            const _0xc66cb0 = _0x558c7d * _0x5590c7 - _0x3c5544;
            _0x47abc7['beginPath']();
            _0x47abc7['moveTo'](_0xc66cb0, 0x0);
            _0x47abc7['lineTo'](_0xc66cb0, _0x1ae946['height']);
            _0x47abc7['stroke']();
        }
        for (let _0x3d8287 = _0x5afb6e; _0x3d8287 <= _0x5afb6e + Math['ceil'](_0x1ae946['height'] / _0x5590c7) + 0x1; _0x3d8287++) {
            const _0x582330 = _0x3d8287 * _0x5590c7 - _0x5524d5;
            _0x47abc7['beginPath']();
            _0x47abc7['moveTo'](0x0, _0x582330);
            _0x47abc7['lineTo'](_0x1ae946['width'], _0x582330);
            _0x47abc7['stroke']();
        }
    }
    function _0x5e0ffa() {
        const _0x463d97 = Math['max'](0x1, Math['ceil'](_0x5e6d63['naturalWidth'] / _0x5590c7));
        const _0x56e22c = _0x2db359['EDITOR']['selectedTileGid'];
        if (_0x56e22c <= 0x0) {
            _0x20ff74['style']['display'] = 'none';
            return;
        }
        const _0x225706 = _0x56e22c - 0x1;
        const _0x515fb4 = _0x225706 % _0x463d97;
        const _0x5e5bc9 = Math['floor'](_0x225706 / _0x463d97);
        const _0xa88912 = _0x515fb4 * _0x5590c7 - _0x3c5544;
        const _0x58d6e2 = _0x5e5bc9 * _0x5590c7 - _0x5524d5;
        _0x20ff74['style']['display'] = 'block';
        _0x20ff74['style']['left'] = _0xa88912 + 'px';
        _0x20ff74['style']['top'] = _0x58d6e2 + 'px';
    }
    _0x5e6d63['onload'] = () => {
        _0x5c2446();
        _0x5e0ffa();
    };
    if (_0x5e6d63['complete'] && _0x5e6d63['naturalWidth'] > 0x0) {
        _0x5c2446();
        _0x5e0ffa();
    }
    _0x4d8879['addEventListener']('mousedown', _0x1121eb => {
        if (_0x1121eb['button'] === 0x0) {
            _0x19c514 = !![];
            _0x282171 = _0x1121eb['clientX'];
            _0x7a6f1d = _0x1121eb['clientY'];
            _0x12f4fc = _0x3c5544;
            _0x318e65 = _0x5524d5;
            _0x4d8879['style']['cursor'] = 'grabbing';
            _0x1121eb['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x39a969 => {
        if (!_0x19c514)
            return;
        const _0x3ffe13 = _0x282171 - _0x39a969['clientX'];
        const _0x35b98a = _0x7a6f1d - _0x39a969['clientY'];
        const _0xbbc6b5 = Math['max'](0x0, _0x5e6d63['naturalWidth'] - _0x1ae946['width']);
        const _0x44f957 = Math['max'](0x0, _0x5e6d63['naturalHeight'] - _0x1ae946['height']);
        _0x3c5544 = Math['max'](0x0, Math['min'](_0xbbc6b5, _0x12f4fc + _0x3ffe13));
        _0x5524d5 = Math['max'](0x0, Math['min'](_0x44f957, _0x318e65 + _0x35b98a));
        _0x5c2446();
        _0x5e0ffa();
    });
    window['addEventListener']('mouseup', _0x3a2489 => {
        if (_0x19c514) {
            _0x19c514 = ![];
            _0x4d8879['style']['cursor'] = 'grab';
        }
    });
    _0x4d8879['addEventListener']('click', _0x48b729 => {
        const _0x4e132a = _0x4d8879['getBoundingClientRect']();
        const _0xaa9f68 = _0x48b729['clientX'] - _0x4e132a['left'] + _0x3c5544;
        const _0x50499f = _0x48b729['clientY'] - _0x4e132a['top'] + _0x5524d5;
        const _0x41895e = Math['max'](0x1, Math['ceil'](_0x5e6d63['naturalWidth'] / _0x5590c7));
        const _0x5023cb = Math['floor'](_0xaa9f68 / _0x5590c7);
        const _0x595e55 = Math['floor'](_0x50499f / _0x5590c7);
        const _0x1f582a = _0x595e55 * _0x41895e + _0x5023cb + 0x1;
        _0x2db359['EDITOR']['selectedTileGid'] = _0x1f582a;
        _0x5e0ffa();
    });
    _0x504a9d['appendChild'](_0x4d8879);
    const _0x2bac15 = document['createElement']('div');
    _0x2bac15['className'] = 'tile-btn\x20eraser-btn';
    _0x2bac15['title'] = 'Eraser\x20(gid\x200)';
    _0x2bac15['onclick'] = () => {
        _0x2db359['EDITOR']['selectedTileGid'] = 0x0;
        _0x20ff74['style']['display'] = 'none';
    };
    _0x504a9d['appendChild'](_0x2bac15);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x2db359['EDITOR']['enabled'] = !_0x2db359['EDITOR']['enabled'];
        const _0x1cdd33 = document['getElementById']('editor-tools');
        if (_0x2db359['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x1cdd33['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x1cdd33['style']['display'] = 'none';
        }
    });
    const _0x5afabc = document['getElementById']('start-game-btn');
    if (_0x5afabc) {
        _0x5afabc['addEventListener']('click', () => {
            if (_0x5b79f3)
                _0x5b79f3['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x4f7196 = document['getElementById']('rolelist-toggle-btn');
    if (_0x4f7196) {
        let _0x1be237 = 'subalignments';
        _0x4f7196['addEventListener']('click', () => {
            if (_0x1be237 === 'subalignments')
                _0x1be237 = 'precise';
            else if (_0x1be237 === 'precise')
                _0x1be237 = 'off';
            else
                _0x1be237 = 'subalignments';
            _0x4f7196['innerText'] = 'Role\x20List:\x20' + _0x1be237['charAt'](0x0)['toUpperCase']() + _0x1be237['slice'](0x1);
            if (_0x5b79f3)
                _0x5b79f3['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x1be237
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x4831de => {
        if (_0x4831de['id'] === 'editor-toggle-btn' || _0x4831de['id'] === 'start-game-btn' || _0x4831de['id'] === 'rolelist-toggle-btn')
            return;
        _0x4831de['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x5b26ce => _0x5b26ce['classList']['remove']('active'));
            _0x4831de['classList']['add']('active');
            _0x2db359['EDITOR']['selectedLayer'] = _0x4831de['dataset']['layer'];
        });
    });
}
function _0x245592(_0x5a29d3) {
    if (_0x5b79f3)
        _0x5b79f3['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x5a29d3
        }));
}
function _0x103fb0(_0x6f5767) {
    if (_0x5b79f3)
        _0x5b79f3['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x6f5767
        }));
}
function _0x4f7f56(_0x3c653d, _0x2d3660, _0x588fc4, _0x3da024) {
    const _0x51ecf6 = document['getElementById']('admin-panel');
    if (_0x51ecf6)
        _0x51ecf6['remove']();
    if (_0x51ecf6 && _0x51ecf6['dataset']['target'] === String(_0x3c653d))
        return;
    const _0x4db059 = document['createElement']('div');
    _0x4db059['id'] = 'admin-panel';
    _0x4db059['dataset']['target'] = String(_0x3c653d);
    _0x4db059['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x439438 = document['createElement']('div');
    _0x439438['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x439438['textContent'] = _0x2d3660;
    _0x4db059['appendChild'](_0x439438);
    const _0x2084f6 = document['createElement']('button');
    _0x2084f6['textContent'] = 'Kick';
    _0x2084f6['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x2084f6['onmouseenter'] = () => _0x2084f6['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x2084f6['onmouseleave'] = () => _0x2084f6['style']['background'] = 'transparent';
    _0x2084f6['onclick'] = () => {
        _0x245592(_0x3c653d);
        _0x4db059['remove']();
    };
    _0x4db059['appendChild'](_0x2084f6);
    const _0x22409a = document['createElement']('button');
    _0x22409a['textContent'] = 'Ban';
    _0x22409a['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x22409a['onmouseenter'] = () => _0x22409a['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x22409a['onmouseleave'] = () => _0x22409a['style']['background'] = 'transparent';
    _0x22409a['onclick'] = () => {
        _0x103fb0(_0x3c653d);
        _0x4db059['remove']();
    };
    _0x4db059['appendChild'](_0x22409a);
    document['body']['appendChild'](_0x4db059);
    const _0x28e52d = _0x4db059['offsetWidth'] || 0x91;
    const _0x7c148 = _0x4db059['offsetHeight'] || 0x50;
    let _0x53341f = _0x588fc4 - _0x28e52d;
    let _0x12db29 = _0x3da024;
    if (_0x53341f < 0x4)
        _0x53341f = _0x588fc4;
    if (_0x12db29 + _0x7c148 > window['innerHeight'] - 0x4)
        _0x12db29 = window['innerHeight'] - _0x7c148 - 0x4;
    _0x4db059['style']['left'] = _0x53341f + 'px';
    _0x4db059['style']['top'] = _0x12db29 + 'px';
    const _0x5ef8e5 = _0x2bdbd4 => {
        if (!_0x4db059['contains'](_0x2bdbd4['target'])) {
            _0x4db059['remove']();
            document['removeEventListener']('mousedown', _0x5ef8e5);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x5ef8e5), 0x0);
}
function _0x26abc9() {
    const _0x3427f6 = document['getElementById']('leaderboard-list');
    _0x3427f6['innerHTML'] = '';
    const _0x4b4faf = document['createElement']('div');
    _0x4b4faf['className'] = 'leaderboard-entry';
    const _0x59e7bc = document['createElement']('span');
    _0x59e7bc['textContent'] = _0x34ea00 + (_0x37e7cc ? '\x20[🗝️]' : '');
    if (_0x158ffa['has'](_0x4037a5) && !_0x3e4f57['isDead']) {
        _0x59e7bc['style']['color'] = '#cc88ff';
    }
    _0x4b4faf['appendChild'](_0x59e7bc);
    _0x3427f6['appendChild'](_0x4b4faf);
    for (const _0x237c58 in _0x59fd94) {
        const _0x51624d = document['createElement']('div');
        _0x51624d['className'] = 'leaderboard-entry';
        const _0x52e2d1 = document['createElement']('span');
        _0x52e2d1['textContent'] = _0x59fd94[_0x237c58]['name'] + (_0x59fd94[_0x237c58]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x158ffa['has'](parseInt(_0x237c58)) && !_0x59fd94[_0x237c58]['isDead']) {
            _0x52e2d1['style']['color'] = '#cc88ff';
        }
        _0x51624d['appendChild'](_0x52e2d1);
        if (_0x37e7cc && !_0x59fd94[_0x237c58]['isOwner']) {
            const _0x25a030 = _0x59fd94[_0x237c58]['id'];
            const _0x575aa5 = _0x59fd94[_0x237c58]['name'];
            _0x51624d['style']['cursor'] = 'context-menu';
            _0x51624d['addEventListener']('contextmenu', _0xa97a3a => {
                _0xa97a3a['preventDefault']();
                _0xa97a3a['stopPropagation']();
                _0x4f7f56(_0x25a030, _0x575aa5, _0xa97a3a['clientX'], _0xa97a3a['clientY']);
            });
        }
        _0x3427f6['appendChild'](_0x51624d);
    }
}
window['addEventListener']('resize', _0x509f7e);
function _0x509f7e() {
    _0x1f0b5c['width'] = window['innerWidth'];
    _0x1f0b5c['height'] = window['innerHeight'];
    _0x2db359['SYSTEM']['viewScale'] = Math['max'](_0x1f0b5c['width'] / _0xb99670, _0x1f0b5c['height'] / _0x3f230f);
    _0x2db359['CAMERA']['width'] = _0x1f0b5c['width'] / _0x2db359['SYSTEM']['viewScale'];
    _0x2db359['CAMERA']['height'] = _0x1f0b5c['height'] / _0x2db359['SYSTEM']['viewScale'];
    _0x13ff1e['imageSmoothingEnabled'] = ![];
}
function _0x3da19a(_0x426571) {
    if (_0x426571['ctrlKey'] || _0x426571['metaKey']) {
        if (_0x426571['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x426571['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x426571['code'])) {
            _0x426571['preventDefault']();
            _0x426571['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x3da19a, { 'passive': ![] });
window['addEventListener']('keydown', _0x3da19a, { 'passive': ![] });
window['addEventListener']('keydown', _0x11cf9d => {
    const _0x174bda = _0x11cf9d['key']['toLowerCase']();
    if (_0x174bda === 'tab') {
        _0x11cf9d['preventDefault']();
        const _0x29fb2b = document['getElementById']('will-ui');
        const _0x1273da = document['getElementById']('will-input');
        if (_0x29fb2b['style']['display'] === 'flex') {
            _0x29fb2b['style']['display'] = 'none';
            if (_0x5b79f3)
                _0x5b79f3['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x1273da['value']
                }));
            _0x1273da['blur']();
        } else {
            _0x29fb2b['style']['display'] = 'flex';
            _0x1273da['focus']();
            for (let _0x2200a3 in _0x2db359['INPUTS']['keys'])
                _0x2db359['INPUTS']['keys'][_0x2200a3] = ![];
        }
        return;
    }
    if (_0x11cf9d['key'] === 'Enter') {
        if (_0xc8ec00) {
            const _0x5db7db = document['getElementById']('play-btn');
            if (_0x5db7db)
                _0x5db7db['click']();
            return;
        }
        if (!_0x5b79f3 || _0x5b79f3['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x103c91 = document['getElementById']('chat-ui');
        const _0x5709e7 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x5709e7) {
            const _0x2298c4 = _0x5709e7['value']['trim']();
            if (_0x2298c4['length'] > 0x0) {
                _0x5b79f3['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x2298c4
                }));
            }
            _0x5709e7['value'] = '';
            _0x103c91['style']['display'] = 'none';
            _0x5709e7['blur']();
        } else {
            _0x103c91['style']['display'] = 'block';
            _0x5709e7['focus']();
            for (let _0x39e9df in _0x2db359['INPUTS']['keys'])
                _0x2db359['INPUTS']['keys'][_0x39e9df] = ![];
        }
        _0x11cf9d['preventDefault']();
        return;
    }
    if (_0x11cf9d['key'] === 'Escape') {
        const _0x37ce99 = document['getElementById']('guide-ui');
        if (_0x37ce99 && _0x37ce99['style']['display'] === 'flex') {
            _0x37ce99['style']['display'] = 'none';
            return;
        }
        const _0x4a78bc = document['getElementById']('ability-ui');
        if (_0x4a78bc && _0x4a78bc['style']['display'] === 'block') {
            _0x4a78bc['style']['display'] = 'none';
            return;
        }
        const _0x255522 = document['getElementById']('settings-panel');
        if (_0x255522 && _0x255522['style']['display'] === 'block') {
            _0x255522['style']['display'] = 'none';
            return;
        }
        const _0x1f4279 = document['getElementById']('mayor-confirm-dialog');
        if (_0x1f4279 && _0x1f4279['style']['display'] === 'flex') {
            _0x1f4279['style']['display'] = 'none';
            return;
        }
        const _0x33225b = document['getElementById']('target-chooser-ui');
        if (_0x33225b && _0x33225b['style']['display'] === 'flex') {
            _0x33225b['style']['display'] = 'none';
            return;
        }
        const _0x1a5baa = document['getElementById']('chat-ui');
        const _0x574ba4 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x574ba4) {
            _0x574ba4['value'] = '';
            _0x1a5baa['style']['display'] = 'none';
            _0x574ba4['blur']();
            _0x11cf9d['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x2db359['INPUTS']['keys']['hasOwnProperty'](_0x174bda))
            _0x2db359['INPUTS']['keys'][_0x174bda] = !![];
        if (!_0x5b79f3 || _0x5b79f3['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x174bda === 'h' && !_0x11cf9d['repeat']) {
            const _0x52ae65 = document['getElementById']('guide-ui');
            if (_0x52ae65) {
                _0x52ae65['style']['display'] = _0x52ae65['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x174bda === 't' && !_0x11cf9d['repeat']) {
            if (_0x3e4f57['isDead'])
                return;
            if (_0x42f346 === 'Mayor') {
                if (_0x158ffa['has'](_0x4037a5)) {
                    _0x4919ec('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x5d2f74 = document['getElementById']('mayor-confirm-dialog');
                if (_0x5d2f74)
                    _0x5d2f74['style']['display'] = 'flex';
                return;
            }
            if (_0x2db359['GAME_STATE'] === 'NIGHT') {
                if (!_0x2db359['NIGHT_ABILITY_OPEN']) {
                    _0x4919ec('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x9fa2c6 = document['getElementById']('ability-ui');
                if (_0x9fa2c6) {
                    if (_0x9fa2c6['style']['display'] === 'block') {
                        _0x9fa2c6['style']['display'] = 'none';
                    } else {
                        _0x140e79();
                        _0x9fa2c6['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x2db359['GAME_STATE'] === 'DAY_DISCUSS' || _0x2db359['GAME_STATE'] === 'DAY_VOTE') {
                _0x4919ec('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x174bda === 'e' && !_0x3e4f57['isDead']) {
            const _0xc661fc = Date['now']();
            if (!window['_lastDoorSend'] || _0xc661fc - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0xc661fc;
                _0x5b79f3['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x5c6e44 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x14f76c = _0x5c6e44['key']['toLowerCase']();
        if (_0x2db359['INPUTS']['keys']['hasOwnProperty'](_0x14f76c))
            _0x2db359['INPUTS']['keys'][_0x14f76c] = ![];
    }
});
window['addEventListener']('mousemove', _0x356286 => {
    _0x2db359['INPUTS']['mouseX'] = _0x356286['clientX'];
    _0x2db359['INPUTS']['mouseY'] = _0x356286['clientY'];
    if (_0x2db359['INPUTS']['isMouseDown'] && _0x2db359['EDITOR']['enabled']) {
        _0xa2e20f(_0x356286['clientX'], _0x356286['clientY']);
    }
});
window['addEventListener']('mousedown', _0x3e261f => {
    if (_0x3e261f['target']['closest']('#editor-ui') || _0x3e261f['target']['closest']('#leaderboard-ui') || _0x3e261f['target']['closest']('#chat-log-ui') || _0x3e261f['target']['closest']('#target-chooser-ui') || _0x3e261f['target']['closest']('#guide-ui') || _0x3e261f['target']['closest']('#role-list-ui') || _0x3e261f['target']['closest']('#ability-ui') || _0x3e261f['target']['closest']('#settings-panel') || _0x3e261f['target']['closest']('#mayor-confirm-dialog') || _0x3e261f['target']['closest']('#mobile-action-bar') || _0x3e261f['target']['closest']('#mobile-top-bar') || _0x3e261f['target']['closest']('#mobile-joystick-zone') || _0x3e261f['target']['closest']('#mobile-chat-overlay') || _0x3e261f['target']['closest']('#will-ui') || _0x3e261f['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x3e261f['button'] === 0x0) {
        _0x2db359['INPUTS']['isMouseDown'] = !![];
        if (_0x2db359['EDITOR']['enabled'])
            _0xa2e20f(_0x3e261f['clientX'], _0x3e261f['clientY']);
    }
});
window['addEventListener']('mouseup', _0x2b34d3 => {
    _0x2db359['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x181451 => {
    if (_0x181451['target']['closest']('#settings-btn'))
        return;
    const _0x52970a = document['getElementById']('leaderboard-list');
    const _0x1f7e28 = document['getElementById']('leaderboard-toggle');
    if (_0x52970a['style']['display'] === 'none') {
        _0x52970a['style']['display'] = 'flex';
        _0x1f7e28['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x52970a['style']['display'] = 'none';
        _0x1f7e28['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x43da0a = document['getElementById']('close-target-btn');
if (_0x43da0a) {
    _0x43da0a['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x510afb = document['getElementById']('close-guide-btn');
if (_0x510afb) {
    _0x510afb['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x1f8083 = document['getElementById']('role-list-header');
if (_0x1f8083) {
    _0x1f8083['addEventListener']('click', () => {
        const _0x5c6542 = document['getElementById']('role-list-items');
        const _0x50270a = document['getElementById']('role-list-toggle');
        if (_0x5c6542['style']['display'] === 'none') {
            _0x5c6542['style']['display'] = 'flex';
            _0x50270a['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x5c6542['style']['display'] = 'none';
            _0x50270a['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x196262() {
    const _0x33d97d = document['getElementById']('mobile-joystick-zone');
    const _0x4d5edd = document['getElementById']('mobile-joystick-base');
    const _0x4eadea = document['getElementById']('mobile-joystick-knob');
    if (_0x33d97d && _0x4d5edd && _0x4eadea) {
        const _0x31b277 = 0x3e;
        const _0x50e896 = (_0x4ce596, _0xc8ffa0) => {
            const _0x3fbc40 = _0x4d5edd['getBoundingClientRect']();
            const _0x5e21eb = _0x3fbc40['left'] + _0x3fbc40['width'] / 0x2;
            const _0x2e6d57 = _0x3fbc40['top'] + _0x3fbc40['height'] / 0x2;
            const _0x335efe = _0x4ce596 - _0x5e21eb;
            const _0x3798e9 = _0xc8ffa0 - _0x2e6d57;
            const _0x462623 = Math['hypot'](_0x335efe, _0x3798e9);
            if (_0x462623 === 0x0) {
                _0x13ec80 = 0x0;
                _0x365a01 = 0x0;
                _0x3a7b77 = ![];
                _0x4eadea['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x112bad = Math['min'](_0x462623, _0x31b277);
            const _0x56aa03 = _0x335efe / _0x462623 * _0x112bad;
            const _0x2f8eb4 = _0x3798e9 / _0x462623 * _0x112bad;
            _0x13ec80 = _0x56aa03 / _0x31b277;
            _0x365a01 = _0x2f8eb4 / _0x31b277;
            _0x3a7b77 = _0x462623 >= _0x31b277 * 0.75;
            _0x4eadea['style']['transform'] = 'translate(' + _0x56aa03 + 'px,\x20' + _0x2f8eb4 + 'px)';
        };
        const _0x5c0330 = _0x3328a8 => {
            for (let _0x48dcef = 0x0; _0x48dcef < _0x3328a8['changedTouches']['length']; _0x48dcef++) {
                const _0x2588e0 = _0x3328a8['changedTouches'][_0x48dcef];
                if (_0xa537f2 === null) {
                    _0xa537f2 = _0x2588e0['identifier'];
                    _0x5bad43 = !![];
                    _0x50e896(_0x2588e0['clientX'], _0x2588e0['clientY']);
                    break;
                }
            }
        };
        const _0x291d72 = _0x315d68 => {
            for (let _0x2cfb0e = 0x0; _0x2cfb0e < _0x315d68['changedTouches']['length']; _0x2cfb0e++) {
                const _0x61be04 = _0x315d68['changedTouches'][_0x2cfb0e];
                if (_0x61be04['identifier'] === _0xa537f2) {
                    _0x50e896(_0x61be04['clientX'], _0x61be04['clientY']);
                    break;
                }
            }
        };
        const _0x12430b = _0x84c36e => {
            for (let _0xa733ec = 0x0; _0xa733ec < _0x84c36e['changedTouches']['length']; _0xa733ec++) {
                const _0x2f994d = _0x84c36e['changedTouches'][_0xa733ec];
                if (_0x2f994d['identifier'] === _0xa537f2) {
                    _0xa537f2 = null;
                    _0x5bad43 = ![];
                    _0x13ec80 = 0x0;
                    _0x365a01 = 0x0;
                    _0x3a7b77 = ![];
                    _0x4eadea['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x33d97d['addEventListener']('touchstart', _0x7faa99 => {
            _0x7faa99['preventDefault']();
            _0x5c0330(_0x7faa99);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x291d72, { 'passive': !![] });
        window['addEventListener']('touchend', _0x12430b, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x12430b, { 'passive': !![] });
    }
    const _0x5cd82b = (_0x2f21f5, _0x2e0458) => {
        const _0x4665cb = _0x2f21f5 / _0x2db359['SYSTEM']['viewScale'];
        const _0x23356e = _0x2e0458 / _0x2db359['SYSTEM']['viewScale'];
        const _0x4a390c = _0x3e4f57['x'] - _0x2db359['CAMERA']['x'] + _0x3e4f57['width'] / 0x2;
        const _0x296f9e = _0x3e4f57['y'] - _0x2db359['CAMERA']['y'] + _0x3e4f57['height'] / 0x2;
        _0x3a6be4 = Math['atan2'](_0x23356e - _0x296f9e, _0x4665cb - _0x4a390c);
        _0x4d24f5 = !![];
        _0x2db359['INPUTS']['mouseX'] = _0x2f21f5;
        _0x2db359['INPUTS']['mouseY'] = _0x2e0458;
    };
    _0x1f0b5c['addEventListener']('touchstart', _0x59eaae => {
        if (_0xc8ec00)
            return;
        for (let _0x30d4b9 = 0x0; _0x30d4b9 < _0x59eaae['changedTouches']['length']; _0x30d4b9++) {
            const _0x405464 = _0x59eaae['changedTouches'][_0x30d4b9];
            if (_0x405464['identifier'] !== _0xa537f2 && _0x1cfd5f === null) {
                _0x1cfd5f = _0x405464['identifier'];
                _0x5cd82b(_0x405464['clientX'], _0x405464['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x1f0b5c['addEventListener']('touchmove', _0x43e785 => {
        if (_0xc8ec00)
            return;
        for (let _0x22e00e = 0x0; _0x22e00e < _0x43e785['changedTouches']['length']; _0x22e00e++) {
            const _0x297d90 = _0x43e785['changedTouches'][_0x22e00e];
            if (_0x297d90['identifier'] === _0x1cfd5f) {
                _0x5cd82b(_0x297d90['clientX'], _0x297d90['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x5316d5 = _0x50c0aa => {
        for (let _0x144b65 = 0x0; _0x144b65 < _0x50c0aa['changedTouches']['length']; _0x144b65++) {
            const _0x18631f = _0x50c0aa['changedTouches'][_0x144b65];
            if (_0x18631f['identifier'] === _0x1cfd5f) {
                _0x1cfd5f = null;
                _0x4d24f5 = ![];
                break;
            }
        }
    };
    _0x1f0b5c['addEventListener']('touchend', _0x5316d5, { 'passive': !![] });
    _0x1f0b5c['addEventListener']('touchcancel', _0x5316d5, { 'passive': !![] });
    const _0x344db0 = document['getElementById']('mob-sprint-btn');
    if (_0x344db0) {
        _0x344db0['addEventListener']('click', _0x3c9c11 => {
            _0x3c9c11['stopPropagation']();
            _0x13451f = !_0x13451f;
            _0x344db0['classList']['toggle']('active', _0x13451f);
        });
    }
    const _0x127eb8 = document['getElementById']('mob-interact-btn');
    if (_0x127eb8) {
        _0x127eb8['addEventListener']('click', _0x332f75 => {
            _0x332f75['stopPropagation']();
            if (!_0x3e4f57['isDead']) {
                const _0x2aaf5a = Date['now']();
                if (!window['_lastDoorSend'] || _0x2aaf5a - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x2aaf5a;
                    if (_0x5b79f3 && _0x5b79f3['readyState'] === WebSocket['OPEN'])
                        _0x5b79f3['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x59490d = document['getElementById']('mob-ability-btn');
    if (_0x59490d) {
        _0x59490d['addEventListener']('click', _0x31e5b9 => {
            _0x31e5b9['stopPropagation']();
            if (_0x3e4f57['isDead'])
                return;
            if (_0x42f346 === 'Mayor') {
                if (_0x158ffa['has'](_0x4037a5)) {
                    _0x4919ec('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0xf9985a = document['getElementById']('mayor-confirm-dialog');
                if (_0xf9985a)
                    _0xf9985a['style']['display'] = 'flex';
                return;
            }
            if (_0x2db359['GAME_STATE'] === 'NIGHT') {
                if (!_0x2db359['NIGHT_ABILITY_OPEN']) {
                    _0x4919ec('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x3dc6b4 = document['getElementById']('ability-ui');
                if (_0x3dc6b4) {
                    if (_0x3dc6b4['style']['display'] === 'block') {
                        _0x3dc6b4['style']['display'] = 'none';
                    } else {
                        _0x140e79();
                        _0x3dc6b4['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x2db359['GAME_STATE'] === 'DAY_DISCUSS' || _0x2db359['GAME_STATE'] === 'DAY_VOTE') {
                _0x4919ec('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x1493a3 = document['getElementById']('mob-will-btn');
    const _0x562e74 = document['getElementById']('will-ui');
    const _0xaabebe = document['getElementById']('will-input');
    const _0x4509f7 = document['getElementById']('close-will-btn');
    const _0x5bcc20 = () => {
        if (!_0x562e74)
            return;
        if (_0x562e74['style']['display'] === 'flex') {
            _0x562e74['style']['display'] = 'none';
            if (_0x5b79f3 && _0x5b79f3['readyState'] === WebSocket['OPEN'] && _0xaabebe) {
                _0x5b79f3['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0xaabebe['value']
                }));
            }
            if (_0xaabebe)
                _0xaabebe['blur']();
        } else {
            _0x562e74['style']['display'] = 'flex';
            if (_0xaabebe)
                _0xaabebe['focus']();
        }
    };
    if (_0x1493a3)
        _0x1493a3['addEventListener']('click', _0x588468 => {
            _0x588468['stopPropagation']();
            _0x5bcc20();
        });
    if (_0x4509f7)
        _0x4509f7['addEventListener']('click', _0xc3cd04 => {
            _0xc3cd04['stopPropagation']();
            _0x5bcc20();
        });
    const _0x3d96c0 = document['getElementById']('mob-chat-btn');
    const _0x5d72a2 = document['getElementById']('mobile-chat-overlay');
    const _0x8ad8a2 = document['getElementById']('mobile-chat-input');
    const _0xf7691b = document['getElementById']('mobile-chat-send');
    const _0x58de5d = document['getElementById']('mobile-chat-cancel');
    const _0x5e81f3 = () => {
        if (!_0x5d72a2 || !_0x8ad8a2)
            return;
        _0x5d72a2['style']['display'] = 'flex';
        _0x8ad8a2['value'] = '';
        _0x8ad8a2['focus']();
    };
    const _0x1b3a39 = () => {
        if (!_0x5d72a2 || !_0x8ad8a2)
            return;
        _0x5d72a2['style']['display'] = 'none';
        _0x8ad8a2['blur']();
    };
    const _0x24b3dd = () => {
        if (!_0x8ad8a2)
            return;
        const _0x23749a = _0x8ad8a2['value']['trim']();
        if (_0x23749a['length'] > 0x0 && _0x5b79f3 && _0x5b79f3['readyState'] === WebSocket['OPEN']) {
            _0x5b79f3['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x23749a
            }));
        }
        _0x8ad8a2['value'] = '';
        _0x1b3a39();
    };
    if (_0x3d96c0)
        _0x3d96c0['addEventListener']('click', _0x71569f => {
            _0x71569f['stopPropagation']();
            _0x5e81f3();
        });
    if (_0xf7691b)
        _0xf7691b['addEventListener']('click', _0x31f73d => {
            _0x31f73d['stopPropagation']();
            _0x24b3dd();
        });
    if (_0x58de5d)
        _0x58de5d['addEventListener']('click', _0x27a192 => {
            _0x27a192['stopPropagation']();
            _0x1b3a39();
        });
    if (_0x8ad8a2) {
        _0x8ad8a2['addEventListener']('keydown', _0x481f8d => {
            if (_0x481f8d['key'] === 'Enter') {
                _0x481f8d['preventDefault']();
                _0x24b3dd();
            } else if (_0x481f8d['key'] === 'Escape') {
                _0x1b3a39();
            }
        });
    }
    const _0x10b23e = document['getElementById']('mob-top-chat');
    if (_0x10b23e)
        _0x10b23e['addEventListener']('click', _0x3642c5 => {
            _0x3642c5['stopPropagation']();
            _0x5e81f3();
        });
    const _0x593084 = document['getElementById']('mob-top-will');
    if (_0x593084)
        _0x593084['addEventListener']('click', _0x402ba1 => {
            _0x402ba1['stopPropagation']();
            _0x5bcc20();
        });
    const _0x58fdfc = document['getElementById']('mob-top-roles');
    if (_0x58fdfc) {
        _0x58fdfc['addEventListener']('click', _0x246b4d => {
            _0x246b4d['stopPropagation']();
            const _0x12e313 = document['getElementById']('role-list-ui');
            const _0x1cecdc = document['getElementById']('leaderboard-ui');
            if (_0x1cecdc)
                _0x1cecdc['style']['display'] = 'none';
            if (_0x12e313)
                _0x12e313['style']['display'] = _0x12e313['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x1bef2e = document['getElementById']('mob-top-players');
    if (_0x1bef2e) {
        _0x1bef2e['addEventListener']('click', _0x4dfa65 => {
            _0x4dfa65['stopPropagation']();
            const _0x356261 = document['getElementById']('leaderboard-ui');
            const _0x50c642 = document['getElementById']('role-list-ui');
            if (_0x50c642)
                _0x50c642['style']['display'] = 'none';
            if (_0x356261)
                _0x356261['style']['display'] = _0x356261['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0xb224ea = document['getElementById']('mob-top-help');
    if (_0xb224ea) {
        _0xb224ea['addEventListener']('click', _0x19a042 => {
            _0x19a042['stopPropagation']();
            const _0x27d05e = document['getElementById']('guide-ui');
            if (_0x27d05e)
                _0x27d05e['style']['display'] = _0x27d05e['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x3eb1c3) {
            _0x3eb1c3 = !![];
            _0x256ab6();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
