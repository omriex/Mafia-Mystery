document['addEventListener']('contextmenu', _0x4409df => _0x4409df['preventDefault']());
const _0x25a026 = {
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
let _0x5b0d40 = '';
function _0x386313(_0x31683e, _0x418166) {
    const _0x2913b = document['getElementById']('role-list-ui');
    const _0x3c07a0 = document['getElementById']('role-list-items');
    if (!_0x2913b || !_0x3c07a0)
        return;
    if (!_0x418166 || _0x418166 === 'off' || !_0x31683e || _0x31683e['length'] === 0x0) {
        _0x2913b['style']['display'] = 'none';
        return;
    }
    const _0x3742a2 = _0x418166 + '|' + JSON['stringify'](_0x31683e);
    if (_0x3742a2 === _0x5b0d40)
        return;
    _0x5b0d40 = _0x3742a2;
    const _0x19f158 = document['getElementById']('role-tooltip');
    if (_0x19f158) {
        _0x19f158['style']['visibility'] = 'hidden';
        _0x19f158['style']['opacity'] = '0';
    }
    _0x2913b['style']['display'] = 'flex';
    _0x3c07a0['innerHTML'] = '';
    _0x31683e['forEach'](_0x3f0f5b => {
        const _0x3fd421 = document['createElement']('div');
        _0x3fd421['className'] = 'role-list-entry';
        const _0x42584e = _0x3f0f5b['name']['includes']('Mafia') || _0x3f0f5b['name'] === 'Skinwalker' || _0x3f0f5b['name'] === 'Blackmailer';
        _0x3fd421['classList']['add'](_0x42584e ? 'mafia' : 'town');
        if (_0x418166 === 'precise' && _0x3f0f5b['isDead']) {
            _0x3fd421['classList']['remove']('town', 'mafia');
            _0x3fd421['classList']['add']('dead');
            _0x3fd421['innerHTML'] = '<span>' + _0x3f0f5b['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x330e85 = _0x3f0f5b['count'] !== undefined && _0x3f0f5b['count'] !== null ? _0x3f0f5b['count'] + 'x\x20' : '';
            _0x3fd421['innerHTML'] = '<span>' + _0x330e85 + _0x3f0f5b['name'] + '</span>';
        }
        if (_0x418166 === 'subalignments' && _0x25a026[_0x3f0f5b['name']]) {
            _0x3fd421['style']['cursor'] = 'pointer';
            _0x3fd421['addEventListener']('mouseenter', () => {
                const _0x1d52d1 = document['getElementById']('role-tooltip');
                if (!_0x1d52d1)
                    return;
                const _0x27bd4a = _0x25a026[_0x3f0f5b['name']]['join'](',\x20');
                _0x1d52d1['innerHTML'] = '';
                const _0x46466d = document['createElement']('span');
                _0x46466d['style']['color'] = '#ffcc00';
                _0x46466d['textContent'] = _0x3f0f5b['name'];
                _0x1d52d1['appendChild'](_0x46466d);
                _0x1d52d1['appendChild'](document['createElement']('br'));
                _0x1d52d1['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x27bd4a));
                const _0x2a437d = _0x3fd421['getBoundingClientRect']();
                _0x1d52d1['style']['left'] = _0x2a437d['left'] - 0xeb + 'px';
                _0x1d52d1['style']['top'] = _0x2a437d['top'] + 'px';
                _0x1d52d1['style']['display'] = 'block';
                _0x1d52d1['style']['visibility'] = 'visible';
                _0x1d52d1['style']['opacity'] = '1';
            });
            _0x3fd421['addEventListener']('mouseleave', () => {
                const _0x547089 = document['getElementById']('role-tooltip');
                if (_0x547089) {
                    _0x547089['style']['display'] = 'none';
                    _0x547089['style']['visibility'] = 'hidden';
                    _0x547089['style']['opacity'] = '0';
                }
            });
        }
        _0x3c07a0['appendChild'](_0x3fd421);
    });
}
let _0x28fa48 = null;
let _0x13b1ed = null;
const _0x15a797 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x57f265 = 'Player???';
let _0x49d73a = ![];
let _0x138367 = {};
let _0x471929 = null;
let _0x273aba = 0x0;
let _0x2d2311 = 0x0;
let _0x3df085 = new Set();
let _0x48db67 = ![];
let _0x2397ce = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x17780c = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x14bedd = ![];
let _0x360d92 = null;
let _0x39b91e = 0x0;
let _0x589060 = 0x0;
let _0x1d9dd7 = ![];
let _0x54f83f = ![];
let _0x867e6a = 0x0;
let _0x20a26a = null;
let _0xcb3c50 = ![];
let _0x4bee5b = 0x0;
let _0x295569 = 0x0;
let _0x39d70b = [];
let _0x1449e5 = [];
let _0x6f01bf = new Set();
const _0x2e3166 = ((() => {
    const _0x449006 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x588cc5 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x343ddc = 0x320;
    const _0x164ea3 = {};
    const _0x479439 = {};
    let _0x5ec84e = null;
    let _0x126bb3 = _0x588cc5 === 0x0;
    let _0x1d45ae = ![];
    for (const [_0x3b37e6, _0x5d0d10] of Object['entries'](_0x449006)) {
        const _0x26cdea = new Audio(_0x5d0d10);
        _0x26cdea['loop'] = !![];
        _0x26cdea['volume'] = 0x0;
        _0x26cdea['preload'] = 'auto';
        _0x164ea3[_0x3b37e6] = _0x26cdea;
        _0x479439[_0x3b37e6] = null;
    }
    const _0x37eae0 = _0x1436f5 => Math['min'](0x1, Math['max'](0x0, _0x1436f5));
    function _0x1c01c7(_0x59972a) {
        if (_0x479439[_0x59972a] !== null) {
            cancelAnimationFrame(_0x479439[_0x59972a]);
            _0x479439[_0x59972a] = null;
        }
    }
    function _0x546ddd(_0x30622f, _0x35437a, _0x16ab70, _0x47e6ff, _0x1c8548) {
        _0x1c01c7(_0x30622f);
        const _0x528b01 = _0x164ea3[_0x30622f];
        const _0x12e89a = performance['now']();
        const _0xe5f92e = _0x1371c9 => {
            const _0x2ef24d = _0x37eae0((_0x1371c9 - _0x12e89a) / _0x47e6ff);
            const _0x29a1ae = _0x37eae0(_0x35437a + (_0x16ab70 - _0x35437a) * _0x2ef24d);
            _0x528b01['volume'] = _0x126bb3 ? 0x0 : _0x29a1ae;
            if (_0x2ef24d < 0x1) {
                _0x479439[_0x30622f] = requestAnimationFrame(_0xe5f92e);
            } else {
                _0x479439[_0x30622f] = null;
                _0x528b01['volume'] = _0x126bb3 ? 0x0 : _0x37eae0(_0x16ab70);
                if (_0x1c8548)
                    _0x1c8548();
            }
        };
        _0x479439[_0x30622f] = requestAnimationFrame(_0xe5f92e);
    }
    function _0x310390(_0x3acf2e) {
        const _0x714ca8 = _0x3acf2e['play']();
        if (_0x714ca8 && _0x714ca8['catch']) {
            _0x714ca8['catch'](() => {
                if (!_0x1d45ae) {
                    const _0x3bb8c5 = () => {
                        _0x1d45ae = !![];
                        _0x3acf2e['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x3bb8c5);
                        document['removeEventListener']('keydown', _0x3bb8c5);
                        document['removeEventListener']('touchstart', _0x3bb8c5);
                    };
                    document['addEventListener']('click', _0x3bb8c5, { 'once': !![] });
                    document['addEventListener']('keydown', _0x3bb8c5, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x3bb8c5, { 'once': !![] });
                }
            });
        }
    }
    function _0x2bb391(_0x519dfd) {
        if (!_0x449006[_0x519dfd])
            return;
        if (_0x5ec84e === _0x519dfd)
            return;
        const _0x224628 = _0x5ec84e;
        _0x5ec84e = _0x519dfd;
        const _0x4a9217 = _0x164ea3[_0x519dfd];
        _0x1c01c7(_0x519dfd);
        _0x4a9217['currentTime'] = 0x0;
        _0x4a9217['volume'] = 0x0;
        _0x310390(_0x4a9217);
        _0x546ddd(_0x519dfd, 0x0, _0x588cc5, _0x343ddc);
        if (_0x224628 && _0x164ea3[_0x224628]) {
            const _0x3d8fea = _0x224628;
            const _0x3bc0cd = _0x164ea3[_0x3d8fea];
            const _0x417e0a = _0x37eae0(_0x3bc0cd['volume']);
            _0x546ddd(_0x3d8fea, _0x417e0a, 0x0, _0x343ddc, () => {
                _0x3bc0cd['pause']();
                _0x3bc0cd['currentTime'] = 0x0;
            });
        }
    }
    function _0x57eb48(_0x35c062) {
        _0x588cc5 = _0x37eae0(_0x35c062);
        localStorage['setItem']('musicVolume', String(_0x588cc5));
        if (!_0x126bb3 && _0x5ec84e && _0x479439[_0x5ec84e] === null) {
            _0x164ea3[_0x5ec84e]['volume'] = _0x588cc5;
        }
    }
    function _0x2f8a73() {
        return _0x588cc5;
    }
    function _0x92f84b(_0x751866) {
        _0x126bb3 = _0x751866;
        for (const _0x1f4d15 of Object['keys'](_0x164ea3)) {
            if (_0x479439[_0x1f4d15] === null) {
                _0x164ea3[_0x1f4d15]['volume'] = _0x751866 || _0x1f4d15 !== _0x5ec84e ? 0x0 : _0x588cc5;
            }
        }
    }
    function _0x544e75() {
        return _0x126bb3;
    }
    function _0x28d311(_0x25d4e2) {
        if (_0x25d4e2 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x25d4e2 === 'DAY_VOTE')
            return 'voting';
        if (_0x25d4e2 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x504977(_0x19c80b) {
        _0x2bb391(_0x28d311(_0x19c80b));
    }
    function _0xdd8c9d(_0x2fea5f) {
        _0x2bb391(_0x2fea5f);
    }
    return {
        'play': _0x2bb391,
        'onStateChange': _0x504977,
        'onSoundEvent': _0xdd8c9d,
        'setVolume': _0x57eb48,
        'getVolume': _0x2f8a73,
        'setMuted': _0x92f84b,
        'isMuted': _0x544e75
    };
})());
const _0x190514 = ((() => {
    const _0x4cd409 = 0x258;
    const _0x1f5c99 = 0xb4;
    const _0x4b8731 = 0x708;
    const _0x24a0d9 = 0x140;
    const _0x1adbf4 = 0.18;
    const _0x31c232 = 0.95;
    const _0x33623b = new Audio('audio/heartbeat.mp3');
    _0x33623b['loop'] = ![];
    _0x33623b['preload'] = 'auto';
    _0x33623b['volume'] = 0x0;
    let _0x586ffa = 0x0;
    let _0x3828f5 = Infinity;
    function _0x119bf4(_0x29814c, _0x922d3a, _0x26deee) {
        return Math['min'](_0x26deee, Math['max'](_0x922d3a, _0x29814c));
    }
    function _0xda76f4(_0x349890, _0x243af3, _0x1594db) {
        return _0x349890 + (_0x243af3 - _0x349890) * _0x1594db;
    }
    function _0x14e697(_0x4281e2) {
        if (_0xc93faf['GAME_STATE'] !== 'NIGHT' || _0x9ab68e['isDead'] || _0x471929 === 'Skinwalker' || _0x471929 === 'Blackmailer') {
            _0x3828f5 = Infinity;
            return;
        }
        const _0x3497e7 = _0x9ab68e['x'] + 22.5;
        const _0x24ebec = _0x9ab68e['y'] + 22.5;
        let _0x3edba2 = Infinity;
        for (const _0x3fe2b1 in _0x138367) {
            const _0x6407d7 = _0x138367[_0x3fe2b1];
            if (!_0x6407d7['isDark'] || _0x6407d7['isDead'])
                continue;
            const _0x5ce4db = _0x6407d7['renderX'] + 22.5 - _0x3497e7;
            const _0x303ed2 = _0x6407d7['renderY'] + 22.5 - _0x24ebec;
            const _0x3b70bf = Math['sqrt'](_0x5ce4db * _0x5ce4db + _0x303ed2 * _0x303ed2);
            if (_0x3b70bf < _0x3edba2)
                _0x3edba2 = _0x3b70bf;
        }
        _0x3828f5 = _0x3edba2;
        if (_0x3edba2 > _0x4cd409)
            return;
        const _0x1a888d = 0x1 - _0x119bf4((_0x3edba2 - _0x1f5c99) / (_0x4cd409 - _0x1f5c99), 0x0, 0x1);
        const _0x174544 = _0xda76f4(_0x4b8731, _0x24a0d9, _0x1a888d);
        const _0x5991b3 = _0xda76f4(_0x1adbf4, _0x31c232, _0x1a888d);
        if (_0x4281e2 >= _0x586ffa) {
            _0x33623b['currentTime'] = 0x0;
            _0x33623b['volume'] = _0x2e3166['isMuted']() ? 0x0 : _0x119bf4(_0x5991b3 * _0x2e3166['getVolume']() / 0.7, 0x0, 0x1);
            _0x33623b['play']()['catch'](() => {
            });
            _0x586ffa = _0x4281e2 + _0x174544;
        }
    }
    return { 'tick': _0x14e697 };
})());
function _0x1f5214() {
    const _0x2a6d4e = document['getElementById']('mob-ability-btn');
    if (!_0x2a6d4e)
        return;
    const _0x43191d = _0xc93faf['GAME_STATE'] === 'NIGHT' && !_0x9ab68e['isDead'];
    const _0x2ca745 = _0x471929 === 'Mayor' && !_0x3df085['has'](_0x13b1ed) && !_0x9ab68e['isDead'];
    if (_0x43191d || _0x2ca745) {
        _0x2a6d4e['style']['display'] = 'flex';
    } else {
        _0x2a6d4e['style']['display'] = 'none';
    }
}
function _0x131cf6() {
    const _0x18e3c0 = document['getElementById']('mobile-joystick-zone');
    const _0x328e19 = document['getElementById']('mobile-top-bar');
    const _0x12c217 = document['getElementById']('mobile-action-bar');
    if (!_0x18e3c0 || !_0x328e19 || !_0x12c217)
        return;
    if (!_0x29bde8 && _0x17780c) {
        _0x18e3c0['style']['display'] = 'flex';
        _0x328e19['style']['display'] = 'flex';
        _0x12c217['style']['display'] = 'flex';
        _0x1f5214();
    } else {
        _0x18e3c0['style']['display'] = 'none';
        _0x328e19['style']['display'] = 'none';
        _0x12c217['style']['display'] = 'none';
    }
}
const _0x2670a5 = document['getElementById']('gameCanvas');
const _0x1e7d98 = _0x2670a5['getContext']('2d', { 'alpha': ![] });
const _0x521dac = 0x500;
const _0x264e27 = 0x2d0;
const _0xc93faf = {
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
        'width': _0x521dac,
        'height': _0x264e27
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
const _0x9ab68e = {
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
const _0x47ddbe = new Image();
const _0x375672 = new Image();
const _0x2a6d3e = new Image();
const _0x1f7763 = new Image();
_0x1f7763['src'] = 'assets/mayor\x20cosmetic.png';
const _0x2c9838 = [
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
const _0x281bcf = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x528545 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x528545 === 'body1.png' || _0x528545 === 'body1')
    _0x528545 = 'body01.png';
if (!_0x528545['endsWith']('.png'))
    _0x528545 += '.png';
let _0x4b35c1 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x4b35c1['endsWith']('.png'))
    _0x4b35c1 += '.png';
let _0x29bde8 = !![];
let _0xdf38c5 = null;
let _0x19fe12 = null;
let _0xc1f80d = 0x3c;
let _0x1f44cc = 0x2d;
const _0xe406e6 = {};
const _0x4b6b13 = new Image();
_0x4b6b13['src'] = 'assets/yanito932.png';
_0xe406e6['assets/yanito932.png'] = _0x4b6b13;
function _0x561c5b(_0x51d550) {
    if (!_0xe406e6[_0x51d550] || !_0xe406e6[_0x51d550]['complete'] && _0xe406e6[_0x51d550]['naturalWidth'] === 0x0 && _0xe406e6[_0x51d550]['naturalHeight'] === 0x0) {
        const _0x3fd343 = new Image();
        _0x3fd343['src'] = _0x51d550;
        _0xe406e6[_0x51d550] = _0x3fd343;
    }
    return _0xe406e6[_0x51d550];
}
function _0x3e5039(_0x10e751, _0x53e279, _0x3533dd, _0x14bd87, _0x6c280) {
    try {
        const _0xdd774f = 'assets/' + (_0x53e279 || 'body01.png');
        const _0x4aead6 = _0x561c5b(_0xdd774f);
        if (_0x4aead6['complete'] && _0x4aead6['naturalWidth'] > 0x0) {
            _0x10e751['drawImage'](_0x4aead6, -_0x14bd87 / 0x2, -_0x6c280 / 0x2, _0x14bd87, _0x6c280);
        }
        if (_0x3533dd === null || _0x3533dd === undefined)
            return;
        const _0x4ca117 = 'assets/' + _0x3533dd;
        const _0x397888 = _0x561c5b(_0x4ca117);
        if (_0x397888['complete'] && _0x397888['naturalWidth'] > 0x0) {
            _0x10e751['drawImage'](_0x397888, -_0x14bd87 / 0x2, -_0x6c280 / 0x2, _0x14bd87, _0x6c280);
        }
    } catch (_0x3ef36f) {
    }
}
function _0x333ec3() {
    const _0x3734d7 = document['getElementById']('body-skin-grid');
    const _0x490451 = document['getElementById']('eyes-skin-grid');
    if (!_0x3734d7 || !_0x490451)
        return;
    _0x3734d7['innerHTML'] = '';
    _0x2c9838['forEach'](_0x684167 => {
        const _0x3a5afe = document['createElement']('button');
        _0x3a5afe['className'] = 'skin-btn' + (_0x684167 === _0x528545 ? '\x20selected' : '');
        const _0x49e26b = document['createElement']('img');
        _0x49e26b['src'] = 'assets/' + _0x684167;
        _0x3a5afe['appendChild'](_0x49e26b);
        _0x3a5afe['onclick'] = () => {
            _0x528545 = _0x684167;
            localStorage['setItem']('selectedBody', _0x684167);
            _0x3734d7['querySelectorAll']('.skin-btn')['forEach'](_0x585a12 => _0x585a12['classList']['remove']('selected'));
            _0x3a5afe['classList']['add']('selected');
        };
        _0x3734d7['appendChild'](_0x3a5afe);
    });
    _0x490451['innerHTML'] = '';
    _0x281bcf['forEach'](_0x44d76e => {
        const _0x5a4a00 = document['createElement']('button');
        _0x5a4a00['className'] = 'skin-btn' + (_0x44d76e === _0x4b35c1 ? '\x20selected' : '');
        const _0x2d2f1c = document['createElement']('img');
        _0x2d2f1c['src'] = 'assets/' + _0x44d76e;
        _0x5a4a00['appendChild'](_0x2d2f1c);
        _0x5a4a00['onclick'] = () => {
            _0x4b35c1 = _0x44d76e;
            localStorage['setItem']('selectedEyes', _0x44d76e);
            _0x490451['querySelectorAll']('.skin-btn')['forEach'](_0x87467c => _0x87467c['classList']['remove']('selected'));
            _0x5a4a00['classList']['add']('selected');
        };
        _0x490451['appendChild'](_0x5a4a00);
    });
}
function _0x4ce644(_0x32081b) {
    if (!_0xc93faf['MAP']['columns'] || !_0xc93faf['CAMERA']['width'])
        return;
    const _0x17e8a0 = Math['max'](0x0, _0xc93faf['MAP']['columns'] * _0xc93faf['MAP']['tileSize'] - _0xc93faf['CAMERA']['width']);
    const _0x4cee84 = Math['max'](0x0, _0xc93faf['MAP']['rows'] * _0xc93faf['MAP']['tileSize'] - _0xc93faf['CAMERA']['height']);
    if (_0xdf38c5 === null) {
        _0xdf38c5 = _0x17e8a0 / 0x2;
        _0x19fe12 = _0x4cee84 / 0x2;
    }
    _0xdf38c5 += _0xc1f80d * _0x32081b;
    _0x19fe12 += _0x1f44cc * _0x32081b;
    if (_0xdf38c5 <= 0x0) {
        _0xdf38c5 = 0x0;
        _0xc1f80d = Math['abs'](_0xc1f80d);
    } else if (_0xdf38c5 >= _0x17e8a0) {
        _0xdf38c5 = _0x17e8a0;
        _0xc1f80d = -Math['abs'](_0xc1f80d);
    }
    if (_0x19fe12 <= 0x0) {
        _0x19fe12 = 0x0;
        _0x1f44cc = Math['abs'](_0x1f44cc);
    } else if (_0x19fe12 >= _0x4cee84) {
        _0x19fe12 = _0x4cee84;
        _0x1f44cc = -Math['abs'](_0x1f44cc);
    }
    _0xc93faf['CAMERA']['x'] = _0xdf38c5;
    _0xc93faf['CAMERA']['y'] = _0x19fe12;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x519266 = document['getElementById']('play-btn');
    const _0x22fe32 = document['getElementById']('username-input');
    const _0x10f3db = localStorage['getItem']('playerName');
    if (_0x10f3db && _0x22fe32) {
        _0x22fe32['value'] = _0x10f3db;
    }
    const _0x365630 = () => {
        _0x2e3166['play']('wait');
        document['removeEventListener']('click', _0x365630);
        document['removeEventListener']('keydown', _0x365630);
        document['removeEventListener']('touchstart', _0x365630);
    };
    document['addEventListener']('click', _0x365630, { 'once': !![] });
    document['addEventListener']('keydown', _0x365630, { 'once': !![] });
    document['addEventListener']('touchstart', _0x365630, { 'once': !![] });
    if (_0x519266) {
        _0x519266['addEventListener']('click', () => {
            const _0x2d84f1 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x1c6a7a = window['_FB'] && window['_FB']['_userData'];
            let _0x33ff96 = !![];
            if (_0x2d84f1 && _0x1c6a7a && _0x1c6a7a['username']) {
                _0x57f265 = _0x1c6a7a['username'];
                _0x33ff96 = ![];
            } else {
                const _0x8aea9c = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x57f265 = 'user' + _0x8aea9c;
                _0x33ff96 = !![];
            }
            const _0x1e550b = _0x33ff96 ? 'body01.png' : _0x528545;
            const _0x4fc9ca = _0x33ff96 ? 'eyes4.png' : _0x4b35c1;
            const _0x1ba02 = !_0x33ff96 && _0x1c6a7a && _0x1c6a7a['photoURL'] ? _0x1c6a7a['photoURL'] : '';
            const _0x1cf131 = !_0x33ff96 && _0x2d84f1 ? _0x2d84f1['uid'] : '';
            localStorage['setItem']('playerName', _0x57f265);
            _0x29bde8 = ![];
            _0xc93faf['CAMERA']['x'] = null;
            _0xc93faf['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x1eb045 = document['getElementById']('chat-log-wrap');
            if (_0x1eb045)
                _0x1eb045['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0xa07b60 = document['getElementById']('controls-hint');
            if (_0xa07b60 && !_0x17780c)
                _0xa07b60['style']['display'] = 'block';
            _0x131cf6();
            if (_0x17780c) {
                const _0x5b891d = document['getElementById']('leaderboard-list');
                const _0x205841 = document['getElementById']('leaderboard-toggle');
                if (_0x5b891d) {
                    _0x5b891d['style']['display'] = 'none';
                    if (_0x205841)
                        _0x205841['style']['transform'] = 'rotate(180deg)';
                }
                const _0x10bef8 = document['getElementById']('role-list-items');
                const _0x2cf4a6 = document['getElementById']('role-list-toggle');
                if (_0x10bef8) {
                    _0x10bef8['style']['display'] = 'none';
                    if (_0x2cf4a6)
                        _0x2cf4a6['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x336934 = !_0x33ff96 && _0x1c6a7a ? {
                'townWins': _0x1c6a7a['townWins'] || 0x0,
                'mafiaWins': _0x1c6a7a['mafiaWins'] || 0x0,
                'deaths': _0x1c6a7a['deaths'] || 0x0,
                'townLosses': _0x1c6a7a['townLosses'] || 0x0,
                'mafiaLosses': _0x1c6a7a['mafiaLosses'] || 0x0
            } : null;
            const _0x42f3ab = JSON['stringify']({
                'type': 'join',
                'name': _0x57f265,
                'token': _0x15a797,
                'body': _0x1e550b,
                'eyes': _0x4fc9ca,
                'isGuest': _0x33ff96,
                'uid': _0x1cf131,
                'photoURL': _0x1ba02,
                'accountStats': _0x336934
            });
            if (_0x28fa48 && _0x28fa48['readyState'] === WebSocket['OPEN']) {
                _0x28fa48['send'](_0x42f3ab);
            } else if (!_0x28fa48 || _0x28fa48['readyState'] === WebSocket['CLOSED'] || _0x28fa48['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x42f3ab;
                _0x46ccd3();
            }
        });
    }
    _0x333ec3();
    _0x46ccd3();
    _0x1de614();
    _0x3da901();
    _0x117124();
    _0x352e70();
});
const _0x23d411 = [
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
let _0x1cc562 = 'Town';
let _0x2244c4 = 0x0;
function _0x4cd0d7() {
    const _0x40844d = document['getElementById']('role-index-main-tabs');
    const _0x2d2236 = document['getElementById']('role-index-tabs');
    const _0x17c4dc = document['getElementById']('role-index-body');
    if (!_0x2d2236 || !_0x17c4dc)
        return;
    if (_0x40844d) {
        _0x40844d['innerHTML'] = '';
        const _0x25d42f = document['createElement']('button');
        _0x25d42f['className'] = 'role-index-main-tab-btn\x20main-town' + (_0x1cc562 === 'Town' ? '\x20active' : '');
        _0x25d42f['textContent'] = 'TOWN';
        _0x25d42f['addEventListener']('click', () => {
            _0x1cc562 = 'Town';
            _0x2244c4 = 0x0;
            _0x4cd0d7();
        });
        _0x40844d['appendChild'](_0x25d42f);
        const _0x592226 = document['createElement']('button');
        _0x592226['className'] = 'role-index-main-tab-btn\x20main-mafia' + (_0x1cc562 === 'Mafia' ? '\x20active' : '');
        _0x592226['textContent'] = 'MAFIA';
        _0x592226['addEventListener']('click', () => {
            _0x1cc562 = 'Mafia';
            _0x2244c4 = 0x0;
            _0x4cd0d7();
        });
        _0x40844d['appendChild'](_0x592226);
    }
    const _0x4fa3fd = _0x23d411['filter'](_0x5ca7d5 => _0x5ca7d5['faction'] === _0x1cc562);
    _0x2d2236['innerHTML'] = '';
    _0x4fa3fd['forEach']((_0x477920, _0x3cd42a) => {
        const _0x1fd0ca = document['createElement']('button');
        _0x1fd0ca['className'] = 'role-index-tab-btn' + (_0x477920['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x3cd42a === _0x2244c4 ? '\x20active' : '');
        _0x1fd0ca['textContent'] = _0x477920['name'];
        _0x1fd0ca['addEventListener']('click', () => {
            _0x2244c4 = _0x3cd42a;
            _0x4cd0d7();
        });
        _0x2d2236['appendChild'](_0x1fd0ca);
    });
    const _0x44133c = _0x4fa3fd[_0x2244c4] || _0x4fa3fd[0x0];
    _0x17c4dc['innerHTML'] = '';
    if (!_0x44133c)
        return;
    const _0x5a7dcd = document['createElement']('div');
    _0x5a7dcd['className'] = 'role-index-title-row';
    const _0x43b47e = document['createElement']('span');
    _0x43b47e['className'] = 'role-index-name\x20' + (_0x44133c['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0x43b47e['textContent'] = _0x44133c['name'];
    _0x5a7dcd['appendChild'](_0x43b47e);
    const _0x18c988 = document['createElement']('span');
    _0x18c988['className'] = 'role-index-faction-badge\x20' + (_0x44133c['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x18c988['textContent'] = _0x44133c['faction'];
    _0x5a7dcd['appendChild'](_0x18c988);
    _0x17c4dc['appendChild'](_0x5a7dcd);
    _0x44133c['paragraphs']['forEach'](_0x14693f => {
        const _0x2fe6de = document['createElement']('p');
        _0x2fe6de['className'] = 'role-index-desc-paragraph';
        _0x2fe6de['innerHTML'] = _0x14693f;
        _0x17c4dc['appendChild'](_0x2fe6de);
    });
}
function _0x352e70() {
    const _0x3e41bb = document['getElementById']('role-index-btn');
    const _0x28d91c = document['getElementById']('role-index-modal');
    const _0x577104 = document['getElementById']('close-role-index-btn');
    const _0x3a5044 = document['getElementById']('mob-top-index');
    if (_0x3e41bb && _0x28d91c) {
        _0x3e41bb['addEventListener']('click', _0x47742a => {
            _0x47742a['stopPropagation']();
            if (_0x28d91c['style']['display'] === 'none' || !_0x28d91c['style']['display']) {
                _0x4cd0d7();
                _0x28d91c['style']['display'] = 'flex';
            } else {
                _0x28d91c['style']['display'] = 'none';
            }
        });
    }
    if (_0x577104 && _0x28d91c) {
        _0x577104['addEventListener']('click', _0x2b9988 => {
            _0x2b9988['stopPropagation']();
            _0x28d91c['style']['display'] = 'none';
        });
    }
    if (_0x3a5044 && _0x28d91c) {
        _0x3a5044['addEventListener']('click', _0x45ef70 => {
            _0x45ef70['stopPropagation']();
            if (_0x28d91c['style']['display'] === 'none' || !_0x28d91c['style']['display']) {
                _0x4cd0d7();
                _0x28d91c['style']['display'] = 'flex';
            } else {
                _0x28d91c['style']['display'] = 'none';
            }
        });
    }
}
function _0x3da901() {
    const _0x394641 = document['getElementById']('settings-btn');
    const _0x5c483d = document['getElementById']('settings-panel');
    const _0x5f2cf5 = document['getElementById']('close-settings-btn');
    const _0x2ff5cc = document['getElementById']('setting-mouse-relative');
    if (_0x2ff5cc) {
        _0x2ff5cc['checked'] = _0x2397ce;
        _0x2ff5cc['addEventListener']('change', () => {
            _0x2397ce = _0x2ff5cc['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x2397ce ? 'true' : 'false');
        });
    }
    const _0xe24f92 = document['getElementById']('setting-music-volume');
    const _0x2cc7ec = document['getElementById']('setting-music-volume-display');
    function _0x46c2d7(_0x3aaea6) {
        const _0x182580 = (_0x3aaea6['value'] - _0x3aaea6['min']) / (_0x3aaea6['max'] - _0x3aaea6['min']) * 0x64;
        _0x3aaea6['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x182580 + '%,\x20#444\x20' + _0x182580 + '%)';
    }
    if (_0xe24f92) {
        const _0x498441 = _0x2e3166['getVolume']();
        const _0x38e048 = Math['round'](_0x498441 * 0x64);
        _0xe24f92['value'] = _0x38e048;
        if (_0x2cc7ec)
            _0x2cc7ec['textContent'] = _0x38e048 + '%';
        _0x46c2d7(_0xe24f92);
        _0xe24f92['addEventListener']('input', () => {
            const _0x2cc25c = parseInt(_0xe24f92['value'], 0xa);
            if (_0x2cc7ec)
                _0x2cc7ec['textContent'] = _0x2cc25c + '%';
            _0x46c2d7(_0xe24f92);
            _0x2e3166['setVolume'](_0x2cc25c / 0x64);
            _0x2e3166['setMuted'](_0x2cc25c === 0x0);
        });
    }
    if (_0x394641 && _0x5c483d) {
        _0x394641['addEventListener']('click', _0x48ef68 => {
            _0x48ef68['stopPropagation']();
            _0x5c483d['style']['display'] = _0x5c483d['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x5f2cf5 && _0x5c483d) {
        _0x5f2cf5['addEventListener']('click', () => {
            _0x5c483d['style']['display'] = 'none';
        });
    }
    const _0x2a0c24 = document['getElementById']('mayor-confirm-yes');
    const _0xc227d4 = document['getElementById']('mayor-confirm-no');
    const _0x4ef411 = document['getElementById']('mayor-confirm-dialog');
    if (_0x2a0c24 && _0x4ef411) {
        _0x2a0c24['addEventListener']('click', () => {
            if (_0x28fa48 && _0x28fa48['readyState'] === WebSocket['OPEN']) {
                _0x28fa48['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x4ef411['style']['display'] = 'none';
        });
    }
    if (_0xc227d4 && _0x4ef411) {
        _0xc227d4['addEventListener']('click', () => {
            _0x4ef411['style']['display'] = 'none';
        });
    }
    const _0x1e8713 = document['getElementById']('close-ability-btn');
    if (_0x1e8713) {
        _0x1e8713['addEventListener']('click', () => {
            const _0x43befa = document['getElementById']('ability-ui');
            if (_0x43befa)
                _0x43befa['style']['display'] = 'none';
        });
    }
}
let _0x529978 = '';
function _0xd082d8(_0x41c0cc) {
    const _0x30588c = document['getElementById']('vote-tally-panel');
    const _0x3abffe = document['getElementById']('vote-tally-list');
    if (!_0x30588c || !_0x3abffe)
        return;
    if (_0x41c0cc['state'] !== 'DAY_VOTE') {
        _0x30588c['style']['display'] = 'none';
        _0x529978 = '';
        return;
    }
    _0x30588c['style']['display'] = 'block';
    const _0x14cbe2 = {};
    for (const _0x2dd925 in _0x138367) {
        if (!_0x138367[_0x2dd925]['isDead'])
            _0x14cbe2[_0x2dd925] = 0x0;
    }
    if (_0x13b1ed && !_0x9ab68e['isDead'])
        _0x14cbe2[_0x13b1ed] = 0x0;
    const _0x53e494 = _0x41c0cc['votes'] || {};
    for (const _0x245e2f in _0x53e494) {
        const _0x1d8350 = _0x53e494[_0x245e2f];
        const _0xfef654 = _0x41c0cc['mayorRevealed'] && _0x41c0cc['mayorRevealed'][_0x245e2f] ? 0x2 : 0x1;
        _0x14cbe2[_0x1d8350] = (_0x14cbe2[_0x1d8350] || 0x0) + _0xfef654;
    }
    let _0x11fb1f = 0x0;
    const _0x365a70 = _0x41c0cc['skips'] || {};
    for (const _0x6ad62 in _0x365a70) {
        _0x11fb1f += Number(_0x365a70[_0x6ad62]) || 0x1;
    }
    const _0x5995cf = JSON['stringify'](_0x14cbe2) + '_' + _0x11fb1f + '_' + _0x9ab68e['isDead'];
    if (_0x5995cf === _0x529978)
        return;
    _0x529978 = _0x5995cf;
    _0x3abffe['innerHTML'] = '';
    for (const _0x31eed5 in _0x14cbe2) {
        const _0x36ac1a = parseInt(_0x31eed5);
        const _0x206ac1 = _0x36ac1a === _0x13b1ed ? _0x57f265 : _0x138367[_0x31eed5] ? _0x138367[_0x31eed5]['name'] : 'Player\x20' + _0x31eed5;
        const _0x3228f2 = document['createElement']('div');
        _0x3228f2['className'] = 'vote-tally-entry';
        const _0x243b2b = document['createElement']('span');
        _0x243b2b['textContent'] = _0x206ac1;
        const _0x1960d0 = document['createElement']('span');
        _0x1960d0['className'] = 'vote-count';
        _0x1960d0['textContent'] = _0x14cbe2[_0x31eed5] + '\x20vote' + (_0x14cbe2[_0x31eed5] === 0x1 ? '' : 's');
        _0x3228f2['appendChild'](_0x243b2b);
        _0x3228f2['appendChild'](_0x1960d0);
        if (_0x36ac1a !== _0x13b1ed && !_0x9ab68e['isDead']) {
            _0x3228f2['style']['cursor'] = 'pointer';
            _0x3228f2['title'] = 'Vote\x20for\x20' + _0x206ac1;
            _0x3228f2['addEventListener']('click', _0x1c2fc2 => {
                _0x1c2fc2['stopPropagation']();
                if (_0x28fa48 && _0x28fa48['readyState'] === WebSocket['OPEN']) {
                    _0x28fa48['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x206ac1
                    }));
                }
            });
        }
        _0x3abffe['appendChild'](_0x3228f2);
    }
    const _0x1a678d = document['createElement']('div');
    _0x1a678d['className'] = 'vote-tally-skip';
    _0x1a678d['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x11fb1f + '</span>';
    if (!_0x9ab68e['isDead']) {
        _0x1a678d['style']['cursor'] = 'pointer';
        _0x1a678d['title'] = 'Click\x20to\x20skip\x20vote';
        _0x1a678d['addEventListener']('click', _0x1f2fce => {
            _0x1f2fce['stopPropagation']();
            if (_0x28fa48 && _0x28fa48['readyState'] === WebSocket['OPEN']) {
                _0x28fa48['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x3abffe['appendChild'](_0x1a678d);
}
let _0x37eae6 = null;
let _0x11d89f = null;
let _0x3003e1 = null;
let _0x5ee37e = null;
let _0x45fae0 = null;
function _0x524cdd() {
    if (_0x28fa48 && _0x28fa48['readyState'] === WebSocket['OPEN']) {
        _0x28fa48['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x37eae6,
            'abilityTarget': _0x11d89f,
            'killTarget': _0x3003e1
        }));
    }
}
function _0x2276e5() {
    if (_0x28fa48 && _0x28fa48['readyState'] === WebSocket['OPEN']) {
        _0x28fa48['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'blackmailTarget': _0x5ee37e,
            'killTarget': _0x45fae0
        }));
    }
}
function _0x2283db() {
    const _0x20d0b1 = document['getElementById']('ability-ui-body');
    if (!_0x20d0b1)
        return;
    _0x20d0b1['innerHTML'] = '';
    if (_0x471929 === 'Celebrity' || _0x471929 === 'Mayor') {
        const _0x4e5066 = document['createElement']('div');
        _0x4e5066['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x4e5066['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x20d0b1['appendChild'](_0x4e5066);
        return;
    }
    if (_0x471929 === 'Blackmailer') {
        const _0x32febb = document['createElement']('div');
        _0x32febb['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x32febb['innerText'] = 'Blackmail\x20Target\x20(Silences\x20for\x20full\x20day):';
        _0x20d0b1['appendChild'](_0x32febb);
        const _0x1c57cd = document['createElement']('div');
        _0x1c57cd['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x58d0cb = document['createElement']('button');
        _0x58d0cb['className'] = 'layer-btn';
        _0x58d0cb['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x58d0cb['innerText'] = 'No\x20one';
        if (_0x5ee37e === null)
            _0x58d0cb['classList']['add']('active');
        _0x58d0cb['onclick'] = () => {
            _0x5ee37e = null;
            _0x2276e5();
            _0x2283db();
        };
        _0x1c57cd['appendChild'](_0x58d0cb);
        for (const _0x394dbd in _0x138367) {
            const _0x1e8141 = _0x138367[_0x394dbd];
            if (_0x1e8141['isDead'])
                continue;
            const _0x57e8b7 = document['createElement']('button');
            _0x57e8b7['className'] = 'layer-btn';
            _0x57e8b7['innerText'] = _0x1e8141['name'];
            if (_0x5ee37e === parseInt(_0x394dbd))
                _0x57e8b7['classList']['add']('active');
            _0x57e8b7['onclick'] = () => {
                _0x5ee37e = parseInt(_0x394dbd);
                _0x2276e5();
                _0x2283db();
            };
            _0x1c57cd['appendChild'](_0x57e8b7);
        }
        if (!_0x9ab68e['isDead']) {
            const _0x5b9ef0 = document['createElement']('button');
            _0x5b9ef0['className'] = 'layer-btn';
            _0x5b9ef0['style']['cssText'] = 'grid-column:\x20span\x202;';
            _0x5b9ef0['innerText'] = _0x57f265 + '\x20(Self\x20-\x20Decoy)';
            if (_0x5ee37e === _0x13b1ed)
                _0x5b9ef0['classList']['add']('active');
            _0x5b9ef0['onclick'] = () => {
                _0x5ee37e = _0x13b1ed;
                _0x2276e5();
                _0x2283db();
            };
            _0x1c57cd['appendChild'](_0x5b9ef0);
        }
        _0x20d0b1['appendChild'](_0x1c57cd);
        const _0x597b2e = document['createElement']('div');
        _0x597b2e['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x597b2e['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x20d0b1['appendChild'](_0x597b2e);
        const _0x2bdc92 = document['createElement']('div');
        _0x2bdc92['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x203b4f = document['createElement']('button');
        _0x203b4f['className'] = 'layer-btn';
        _0x203b4f['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x203b4f['innerText'] = 'No\x20one';
        if (!_0x45fae0 && !_0xc93faf['CURRENT_TARGET'])
            _0x203b4f['classList']['add']('active');
        _0x203b4f['onclick'] = () => {
            _0x45fae0 = null;
            _0xc93faf['CURRENT_TARGET'] = null;
            _0x2276e5();
            _0x2283db();
        };
        _0x2bdc92['appendChild'](_0x203b4f);
        for (const _0x45ccf5 in _0x138367) {
            const _0x5b59b4 = _0x138367[_0x45ccf5];
            if (_0x5b59b4['isDead'])
                continue;
            const _0x277a96 = document['createElement']('button');
            _0x277a96['className'] = 'layer-btn';
            _0x277a96['innerText'] = _0x5b59b4['name'];
            if (_0x45fae0 === parseInt(_0x45ccf5) || _0xc93faf['CURRENT_TARGET'] === parseInt(_0x45ccf5))
                _0x277a96['classList']['add']('active');
            _0x277a96['onclick'] = () => {
                _0x45fae0 = parseInt(_0x45ccf5);
                _0xc93faf['CURRENT_TARGET'] = parseInt(_0x45ccf5);
                _0x2276e5();
                _0x2283db();
            };
            _0x2bdc92['appendChild'](_0x277a96);
        }
        _0x20d0b1['appendChild'](_0x2bdc92);
        return;
    }
    if (_0x471929 === 'Skinwalker') {
        const _0x1ff9f9 = document['createElement']('div');
        _0x1ff9f9['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x1ff9f9['innerText'] = 'Transform\x20into:';
        _0x20d0b1['appendChild'](_0x1ff9f9);
        const _0x13d946 = document['createElement']('div');
        _0x13d946['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x5db9f2 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x1352ed = _0x1782a8 => {
            if (_0xc93faf['ROLES_IN_GAME'] && Array['isArray'](_0xc93faf['ROLES_IN_GAME'])) {
                return _0xc93faf['ROLES_IN_GAME']['includes'](_0x1782a8);
            }
            if (_0xc93faf['ROLE_LIST_RAW'] && _0xc93faf['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0xc93faf['ROLE_LIST_RAW']['some'](_0xdd9258 => _0xdd9258['name'] === _0x1782a8 && !_0xdd9258['isDead']);
            }
            return ![];
        };
        const _0x54bb82 = [
            'None',
            ..._0x5db9f2['filter'](_0x1352ed)
        ];
        _0x54bb82['forEach'](_0xfc54e6 => {
            const _0x56386f = document['createElement']('button');
            _0x56386f['className'] = 'layer-btn';
            _0x56386f['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x56386f['innerText'] = _0xfc54e6;
            const _0x35ba36 = _0xfc54e6 === 'None' && !_0x37eae6 || _0x37eae6 === _0xfc54e6;
            if (_0x35ba36)
                _0x56386f['classList']['add']('active');
            const _0x48227f = _0xfc54e6 !== 'None' && _0xc93faf['SKINWALKER_LAST_ROLE'] && _0xc93faf['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0xfc54e6['toLowerCase']();
            if (_0x48227f) {
                _0x56386f['style']['opacity'] = '0.45';
                _0x56386f['style']['cursor'] = 'not-allowed';
                _0x56386f['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x56386f['onclick'] = () => {
                    _0x192c88('You\x20cannot\x20transform\x20into\x20' + _0xfc54e6 + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x56386f['onclick'] = () => {
                    _0x37eae6 = _0xfc54e6 === 'None' ? null : _0xfc54e6;
                    _0x524cdd();
                    _0x2283db();
                };
            }
            _0x13d946['appendChild'](_0x56386f);
        });
        _0x20d0b1['appendChild'](_0x13d946);
        if (_0x1352ed('Vigilante')) {
            const _0x325580 = document['createElement']('div');
            _0x325580['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x325580['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x20d0b1['appendChild'](_0x325580);
        }
        if (_0x37eae6 === 'Vigilante') {
            const _0x104e6f = document['createElement']('div');
            _0x104e6f['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x104e6f['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x20d0b1['appendChild'](_0x104e6f);
        } else if (_0x37eae6 && _0x37eae6 !== 'Celebrity') {
            const _0x417217 = document['createElement']('div');
            _0x417217['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x417217['innerText'] = 'Use\x20' + _0x37eae6 + '\x20ability\x20on:';
            _0x20d0b1['appendChild'](_0x417217);
            const _0x81bffa = document['createElement']('div');
            _0x81bffa['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x34e39b = document['createElement']('button');
            _0x34e39b['className'] = 'layer-btn';
            _0x34e39b['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x34e39b['innerText'] = 'No\x20one';
            if (!_0x11d89f)
                _0x34e39b['classList']['add']('active');
            _0x34e39b['onclick'] = () => {
                _0x11d89f = null;
                _0x524cdd();
                _0x2283db();
            };
            _0x81bffa['appendChild'](_0x34e39b);
            for (const _0x111d95 in _0x138367) {
                const _0x3db22d = _0x138367[_0x111d95];
                if (_0x3db22d['isDead'])
                    continue;
                const _0x4cbdde = document['createElement']('button');
                _0x4cbdde['className'] = 'layer-btn';
                _0x4cbdde['innerText'] = _0x3db22d['name'];
                if (_0x11d89f === parseInt(_0x111d95))
                    _0x4cbdde['classList']['add']('active');
                _0x4cbdde['onclick'] = () => {
                    _0x11d89f = parseInt(_0x111d95);
                    _0x524cdd();
                    _0x2283db();
                };
                _0x81bffa['appendChild'](_0x4cbdde);
            }
            _0x20d0b1['appendChild'](_0x81bffa);
        }
        const _0x3bc8ee = document['createElement']('div');
        _0x3bc8ee['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x3bc8ee['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x20d0b1['appendChild'](_0x3bc8ee);
        const _0x3a9cd6 = document['createElement']('div');
        _0x3a9cd6['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x282ea1 = document['createElement']('button');
        _0x282ea1['className'] = 'layer-btn';
        _0x282ea1['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x282ea1['innerText'] = 'No\x20one';
        if (!_0x3003e1 && !_0xc93faf['CURRENT_TARGET'])
            _0x282ea1['classList']['add']('active');
        _0x282ea1['onclick'] = () => {
            _0x3003e1 = null;
            _0xc93faf['CURRENT_TARGET'] = null;
            _0x524cdd();
            _0x2283db();
        };
        _0x3a9cd6['appendChild'](_0x282ea1);
        for (const _0x110476 in _0x138367) {
            const _0x5690d7 = _0x138367[_0x110476];
            if (_0x5690d7['isDead'])
                continue;
            const _0x262aa6 = document['createElement']('button');
            _0x262aa6['className'] = 'layer-btn';
            _0x262aa6['innerText'] = _0x5690d7['name'];
            if (_0x3003e1 === parseInt(_0x110476) || _0xc93faf['CURRENT_TARGET'] === parseInt(_0x110476))
                _0x262aa6['classList']['add']('active');
            _0x262aa6['onclick'] = () => {
                _0x3003e1 = parseInt(_0x110476);
                _0xc93faf['CURRENT_TARGET'] = parseInt(_0x110476);
                _0x524cdd();
                _0x2283db();
            };
            _0x3a9cd6['appendChild'](_0x262aa6);
        }
        _0x20d0b1['appendChild'](_0x3a9cd6);
        return;
    }
    let _0x237154 = '';
    let _0x125043 = ![];
    if (_0x471929 === 'Doctor') {
        _0x237154 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x125043 = !![];
    } else if (_0x471929 === 'Investigator') {
        _0x237154 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x471929 === 'Tracker') {
        _0x237154 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x471929 === 'Archer') {
        _0x237154 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x471929 === 'Escort') {
        _0x237154 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x471929 === 'Vigilante') {
        _0x237154 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x20c580 = document['createElement']('div');
    _0x20c580['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x20c580['innerText'] = _0x237154;
    _0x20d0b1['appendChild'](_0x20c580);
    const _0x25eec3 = document['createElement']('div');
    _0x25eec3['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x1a1877 = document['createElement']('button');
    _0x1a1877['className'] = 'layer-btn';
    _0x1a1877['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x1a1877['innerText'] = 'No\x20one';
    if (_0xc93faf['CURRENT_TARGET'] === null)
        _0x1a1877['classList']['add']('active');
    _0x1a1877['onclick'] = () => {
        _0xc93faf['CURRENT_TARGET'] = null;
        if (_0x28fa48 && _0x28fa48['readyState'] === WebSocket['OPEN']) {
            _0x28fa48['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x2283db();
    };
    _0x25eec3['appendChild'](_0x1a1877);
    for (const _0x142af4 in _0x138367) {
        const _0x5842dd = _0x138367[_0x142af4];
        if (_0x5842dd['isDead'])
            continue;
        const _0xaa110a = document['createElement']('button');
        _0xaa110a['className'] = 'layer-btn';
        _0xaa110a['innerText'] = _0x5842dd['name'];
        if (_0xc93faf['CURRENT_TARGET'] === parseInt(_0x142af4))
            _0xaa110a['classList']['add']('active');
        _0xaa110a['onclick'] = () => {
            _0xc93faf['CURRENT_TARGET'] = parseInt(_0x142af4);
            if (_0x28fa48 && _0x28fa48['readyState'] === WebSocket['OPEN']) {
                _0x28fa48['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x142af4)
                }));
            }
            _0x2283db();
        };
        _0x25eec3['appendChild'](_0xaa110a);
    }
    if (_0x125043 && !_0x9ab68e['isDead']) {
        const _0x35e316 = document['createElement']('button');
        _0x35e316['className'] = 'layer-btn';
        _0x35e316['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x35e316['innerText'] = _0x57f265 + '\x20(Self)';
        if (_0xc93faf['CURRENT_TARGET'] === _0x13b1ed)
            _0x35e316['classList']['add']('active');
        _0x35e316['onclick'] = () => {
            _0xc93faf['CURRENT_TARGET'] = _0x13b1ed;
            if (_0x28fa48 && _0x28fa48['readyState'] === WebSocket['OPEN']) {
                _0x28fa48['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x13b1ed
                }));
            }
            _0x2283db();
        };
        _0x25eec3['appendChild'](_0x35e316);
    }
    _0x20d0b1['appendChild'](_0x25eec3);
}
function _0x46ccd3() {
    if (_0x28fa48 && (_0x28fa48['readyState'] === WebSocket['OPEN'] || _0x28fa48['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x2cf73a = new URLSearchParams();
    if (_0x15a797)
        _0x2cf73a['set']('token', _0x15a797);
    _0x2cf73a['set']('ngrok-skip-browser-warning', 'true');
    const _0x5111fe = 'wss://permit-sisters-loc-postposted.trycloudflare.com';
    const _0x279901 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x5111fe;
    const _0x4bce86 = _0x279901 + '/?' + _0x2cf73a['toString']();
    _0x28fa48 = new WebSocket(_0x4bce86);
    _0x28fa48['onopen'] = function () {
        if (!_0x29bde8 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0xcd928a = window['_FB'] && window['_FB']['_currentUser'];
                const _0x4c9198 = window['_FB'] && window['_FB']['_userData'];
                const _0xa9a9b5 = !(_0xcd928a && _0x4c9198 && _0x4c9198['username']);
                const _0x374140 = _0xa9a9b5 ? 'body01.png' : _0x528545;
                const _0x3c7501 = _0xa9a9b5 ? 'eyes4.png' : _0x4b35c1;
                const _0x6bbb61 = !_0xa9a9b5 && _0x4c9198 && _0x4c9198['photoURL'] ? _0x4c9198['photoURL'] : '';
                const _0x39a840 = !_0xa9a9b5 && _0xcd928a ? _0xcd928a['uid'] : '';
                const _0xd96c6d = !_0xa9a9b5 && _0x4c9198 ? {
                    'townWins': _0x4c9198['townWins'] || 0x0,
                    'mafiaWins': _0x4c9198['mafiaWins'] || 0x0,
                    'deaths': _0x4c9198['deaths'] || 0x0,
                    'townLosses': _0x4c9198['townLosses'] || 0x0,
                    'mafiaLosses': _0x4c9198['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x57f265,
                    'token': _0x15a797,
                    'body': _0x374140,
                    'eyes': _0x3c7501,
                    'isGuest': _0xa9a9b5,
                    'uid': _0x39a840,
                    'photoURL': _0x6bbb61,
                    'accountStats': _0xd96c6d
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x28fa48 && _0x28fa48['readyState'] === WebSocket['OPEN']) {
            _0x28fa48['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x28fa48['onclose'] = _0xa025a5 => {
        if (_0xa025a5['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0xa025a5['code'] === 0xfa2 || _0xa025a5['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x5400d7 = document['getElementById']('disconnect-overlay');
        if (!_0x5400d7) {
            _0x5400d7 = document['createElement']('div');
            _0x5400d7['id'] = 'disconnect-overlay';
            _0x5400d7['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x5400d7['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x5400d7);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x28fa48['onmessage'] = _0x470907 => {
        const _0x247783 = JSON['parse'](_0x470907['data']);
        if (_0x247783['type'] === 'map_data') {
            _0xc93faf['MAP']['tileSize'] = _0x247783['map']['tileSize'];
            _0xc93faf['MAP']['columns'] = _0x247783['map']['columns'];
            _0xc93faf['MAP']['rows'] = _0x247783['map']['rows'];
            _0xc93faf['MAP']['layers'] = _0x247783['map']['layers'];
            if (_0x247783['map']['doors']) {
                _0xc93faf['MAP']['doors'] = _0x247783['map']['doors'];
                const _0x4793a9 = _0xc93faf['MAP']['layers']['find'](_0xddd176 => _0xddd176['name'] === 'floor2');
                if (_0x4793a9) {
                    for (const _0x52e215 in _0xc93faf['MAP']['doors']) {
                        _0x4793a9['data'][parseInt(_0x52e215)] = 0x2;
                    }
                }
            }
            if (_0x247783['entities'])
                _0xc93faf['ENTITIES'] = _0x247783['entities'];
            _0x3c5025();
            _0xc93faf['SYSTEM']['isReady'] = !![];
            _0x962535();
            if (!_0xc93faf['SYSTEM']['_gameLoopRunning']) {
                _0xc93faf['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x40ed03);
            }
            return;
        }
        if (_0x247783['type'] === 'init') {
            _0x13b1ed = _0x247783['id'];
            _0x29bde8 = ![];
            _0x131cf6();
            if (_0x17780c) {
                const _0x7f05c2 = document['getElementById']('leaderboard-list');
                const _0x5f4c29 = document['getElementById']('leaderboard-toggle');
                if (_0x7f05c2) {
                    _0x7f05c2['style']['display'] = 'none';
                    if (_0x5f4c29)
                        _0x5f4c29['style']['transform'] = 'rotate(180deg)';
                }
                const _0x4291e6 = document['getElementById']('role-list-items');
                const _0x1eb0c8 = document['getElementById']('role-list-toggle');
                if (_0x4291e6) {
                    _0x4291e6['style']['display'] = 'none';
                    if (_0x1eb0c8)
                        _0x1eb0c8['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x49d73a = _0x247783['isOwner'] || ![];
            _0x57f265 = _0x247783['name'] || _0x57f265;
            _0xc93faf['MAP']['tileSize'] = _0x247783['map']['tileSize'];
            _0xc93faf['MAP']['columns'] = _0x247783['map']['columns'];
            _0xc93faf['MAP']['rows'] = _0x247783['map']['rows'];
            _0xc93faf['MAP']['layers'] = _0x247783['map']['layers'];
            if (_0x247783['map']['doors']) {
                _0xc93faf['MAP']['doors'] = _0x247783['map']['doors'];
                const _0x445d28 = _0xc93faf['MAP']['layers']['find'](_0x448afb => _0x448afb['name'] === 'floor2');
                if (_0x445d28) {
                    for (const _0x7d8ccb in _0xc93faf['MAP']['doors']) {
                        _0x445d28['data'][parseInt(_0x7d8ccb)] = 0x2;
                    }
                }
            }
            if (_0x247783['entities'])
                _0xc93faf['ENTITIES'] = _0x247783['entities'];
            if (_0x247783['bloodSplatters'])
                _0x39d70b = _0x247783['bloodSplatters'];
            if (_0x247783['bloodDrops'])
                _0x1449e5 = _0x247783['bloodDrops'];
            if (_0x247783['roleList'] && _0x247783['roleList']['length'] > 0x0) {
                _0xc93faf['ROLE_LIST_RAW'] = _0x247783['roleList'];
                _0x386313(_0x247783['roleList'], _0x247783['roleListMode']);
            }
            _0x3c5025();
            _0x9ab68e['x'] = _0xc93faf['MAP']['columns'] * _0xc93faf['MAP']['tileSize'] / 0x2;
            _0x9ab68e['y'] = _0xc93faf['MAP']['rows'] * _0xc93faf['MAP']['tileSize'] / 0x2;
            _0xc93faf['CAMERA']['x'] = _0x9ab68e['x'] + _0x9ab68e['width'] / 0x2 - _0xc93faf['CAMERA']['width'] / 0x2;
            _0xc93faf['CAMERA']['y'] = _0x9ab68e['y'] + _0x9ab68e['height'] / 0x2 - _0xc93faf['CAMERA']['height'] / 0x2;
            if (_0x49d73a) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x436afc();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x200698 = document['getElementById']('role-index-btn-wrap');
            if (_0x200698)
                _0x200698['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0xc93faf['SYSTEM']['lastTime'] = performance['now']();
            _0xc93faf['SYSTEM']['isReady'] = !![];
            _0x2a70fc();
            if (!_0xc93faf['SYSTEM']['_gameLoopRunning']) {
                _0xc93faf['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x40ed03);
            }
            return;
        } else if (_0x247783['type'] === 'state') {
            const _0xfb8d2a = {};
            for (const _0x1bf04e in _0x247783['players']) {
                if (parseInt(_0x1bf04e) === _0x13b1ed)
                    continue;
                const _0x2c79ef = _0x247783['players'][_0x1bf04e];
                const _0x1c0e16 = _0x138367[_0x1bf04e];
                if (_0x1c0e16) {
                    const _0x5d99bf = _0x2c79ef['x'] - _0x1c0e16['renderX'];
                    const _0x1ec6c6 = _0x2c79ef['y'] - _0x1c0e16['renderY'];
                    const _0x146965 = _0x5d99bf * _0x5d99bf + _0x1ec6c6 * _0x1ec6c6 > 0x78 * 0x78;
                    Object['assign'](_0x1c0e16, _0x2c79ef);
                    if (_0x146965) {
                        _0x1c0e16['renderX'] = _0x2c79ef['x'];
                        _0x1c0e16['renderY'] = _0x2c79ef['y'];
                    }
                    _0xfb8d2a[_0x1bf04e] = _0x1c0e16;
                } else {
                    _0xfb8d2a[_0x1bf04e] = {
                        ..._0x2c79ef,
                        'renderX': _0x2c79ef['x'],
                        'renderY': _0x2c79ef['y'],
                        'renderAngle': _0x2c79ef['angle'] || 0x0
                    };
                }
            }
            _0x138367 = _0xfb8d2a;
            _0x28c69a();
            if (_0x247783['players'][_0x13b1ed]) {
                const _0x864618 = _0x247783['players'][_0x13b1ed];
                _0x9ab68e['chats'] = _0x864618['chats'] || [];
                _0x9ab68e['isDead'] = _0x864618['isDead'];
                _0x9ab68e['hasArrow'] = _0x864618['hasArrow'] || ![];
                if (_0x864618['name'])
                    _0x57f265 = _0x864618['name'];
                _0x2a70fc();
                const _0x452806 = Math['hypot'](_0x864618['x'] - _0x9ab68e['x'], _0x864618['y'] - _0x9ab68e['y']);
                if (_0x452806 > 0xfa) {
                    _0x9ab68e['x'] = _0x864618['x'];
                    _0x9ab68e['y'] = _0x864618['y'];
                } else if (_0x452806 > 0x50) {
                    _0x9ab68e['x'] += (_0x864618['x'] - _0x9ab68e['x']) * 0.06;
                    _0x9ab68e['y'] += (_0x864618['y'] - _0x9ab68e['y']) * 0.06;
                }
            }
            if (_0x247783['entities'])
                _0xc93faf['ENTITIES'] = _0x247783['entities'];
            if (_0x247783['game']) {
                _0xc93faf['GAME_STATE'] = _0x247783['game']['state'];
                _0xc93faf['NIGHT_ABILITY_OPEN'] = _0x247783['game']['nightAbilityOpen'];
                if (_0x247783['game']['bloodSplatters'])
                    _0x39d70b = _0x247783['game']['bloodSplatters'];
                if (_0x247783['game']['bloodDrops'])
                    _0x1449e5 = _0x247783['game']['bloodDrops'];
                if (_0x247783['game']['blackmailed']) {
                    _0x6f01bf = new Set(_0x247783['game']['blackmailed']);
                } else {
                    _0x6f01bf['clear']();
                }
                if (_0x247783['game']['mayorRevealed']) {
                    for (const _0x29f2e6 in _0x247783['game']['mayorRevealed']) {
                        _0x3df085['add'](parseInt(_0x29f2e6));
                    }
                }
                if (_0xc93faf['LAST_STATE'] !== _0xc93faf['GAME_STATE']) {
                    if (_0xc93faf['GAME_STATE'] !== 'NIGHT') {
                        _0xc93faf['CURRENT_TARGET'] = null;
                        _0x37eae6 = null;
                        _0x11d89f = null;
                        _0x3003e1 = null;
                        _0x5ee37e = null;
                        _0x45fae0 = null;
                        const _0x2f7d61 = document['getElementById']('ability-ui');
                        if (_0x2f7d61)
                            _0x2f7d61['style']['display'] = 'none';
                    }
                    if (_0xc93faf['GAME_STATE'] === 'NIGHT') {
                        _0x9ab68e['chats'] = [];
                        for (const _0x49eb62 in _0x138367) {
                            _0x138367[_0x49eb62]['chats'] = [];
                        }
                    }
                    _0xc93faf['LAST_STATE'] = _0xc93faf['GAME_STATE'];
                    _0x1f5214();
                    _0x2e3166['onStateChange'](_0xc93faf['GAME_STATE'], _0x247783['game']['nightAbilityOpen']);
                }
                const _0x33d144 = document['getElementById']('phase-ui');
                if (_0x33d144) {
                    if (_0x247783['game']['state'] === 'LOBBY') {
                        _0x33d144['style']['display'] = 'none';
                    } else {
                        _0x33d144['style']['display'] = 'block';
                    }
                    let _0x2f317b = _0x247783['game']['state']['replace']('_', '\x20');
                    if (_0x247783['game']['state'] === 'DAY_DISCUSS') {
                        _0x2f317b = 'DAY\x20' + (_0x247783['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x247783['game']['timer'] + 's';
                    } else if (_0x247783['game']['state'] === 'DAY_VOTE') {
                        _0x2f317b = 'DAY\x20' + (_0x247783['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x247783['game']['timer'] + 's';
                    } else if (_0x247783['game']['state'] === 'NIGHT') {
                        const _0x3d76bb = _0x247783['game']['dayCount'] || 0x1;
                        if (_0x247783['game']['nightAbilityOpen']) {
                            _0x2f317b = 'NIGHT\x20' + _0x3d76bb + '\x20ABILITY\x20PHASE';
                            const _0x3275a7 = _0x247783['game']['abilityTimer'] !== undefined ? _0x247783['game']['abilityTimer'] : _0x247783['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x3275a7 + 's';
                        } else {
                            _0x2f317b = 'NIGHT\x20' + _0x3d76bb;
                            document['getElementById']('phase-timer')['innerText'] = _0x247783['game']['timer'] + 's';
                        }
                    }
                    if (_0x247783['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x2f317b;
                    }
                }
                if (_0x247783['game']['state'] === 'NIGHT') {
                    const _0xbe0ecf = document['getElementById']('ability-timer-label');
                    if (_0xbe0ecf) {
                        const _0x38f481 = _0x247783['game']['abilityTimer'] !== undefined ? _0x247783['game']['abilityTimer'] : _0x247783['game']['timer'];
                        _0xbe0ecf['innerText'] = _0x247783['game']['nightAbilityOpen'] ? _0x38f481 + 's' : '';
                    }
                    if (_0x247783['game']['nightAbilityOpen'] && !_0x48db67 && !_0x9ab68e['isDead']) {
                        _0x48db67 = !![];
                        _0x2283db();
                        const _0x4c04e3 = document['getElementById']('ability-ui');
                        if (_0x4c04e3)
                            _0x4c04e3['style']['display'] = 'block';
                    }
                    if (!_0x247783['game']['nightAbilityOpen']) {
                        const _0x25e1dd = document['getElementById']('ability-ui');
                        if (_0x25e1dd && _0x25e1dd['style']['display'] === 'block') {
                            _0x25e1dd['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x48db67 = ![];
                }
                if (_0x247783['game']['rolesInGame']) {
                    _0xc93faf['ROLES_IN_GAME'] = _0x247783['game']['rolesInGame'];
                }
                if (_0x247783['game']['skinwalkerLastRole'] !== undefined) {
                    _0xc93faf['SKINWALKER_LAST_ROLE'] = _0x247783['game']['skinwalkerLastRole'];
                }
                if (_0x247783['game']['state'] === 'NIGHT') {
                    const _0x1e427f = document['getElementById']('will-ui');
                    if (_0x1e427f && _0x1e427f['style']['display'] === 'flex') {
                        _0x1e427f['style']['display'] = 'none';
                        const _0x83f29 = document['getElementById']('will-input');
                        if (_0x83f29)
                            _0x83f29['blur']();
                    }
                }
                _0xd082d8(_0x247783['game']);
                if (_0x247783['game']['roleListMode'] !== undefined) {
                    _0xc93faf['ROLE_LIST_RAW'] = _0x247783['game']['roleList'] || [];
                    _0x386313(_0x247783['game']['roleList'], _0x247783['game']['roleListMode']);
                }
            }
        } else if (_0x247783['type'] === 'teleport') {
            _0x9ab68e['x'] = _0x247783['x'];
            _0x9ab68e['y'] = _0x247783['y'];
            _0x9ab68e['vx'] = 0x0;
            _0x9ab68e['vy'] = 0x0;
            _0xc93faf['CAMERA']['x'] = null;
            if (_0x247783['teleportId'] !== undefined)
                _0x2d2311 = _0x247783['teleportId'];
        } else if (_0x247783['type'] === 'bulk_teleport') {
            for (const _0x54f989 in _0x247783['positions']) {
                const _0x383c08 = _0x247783['positions'][_0x54f989];
                if (parseInt(_0x54f989) === _0x13b1ed) {
                    _0x9ab68e['x'] = _0x383c08['x'];
                    _0x9ab68e['y'] = _0x383c08['y'];
                    _0x9ab68e['vx'] = 0x0;
                    _0x9ab68e['vy'] = 0x0;
                    _0xc93faf['CAMERA']['x'] = null;
                    continue;
                }
                const _0x130ccf = _0x138367[_0x54f989];
                if (_0x130ccf) {
                    _0x130ccf['x'] = _0x383c08['x'];
                    _0x130ccf['y'] = _0x383c08['y'];
                    _0x130ccf['renderX'] = _0x383c08['x'];
                    _0x130ccf['renderY'] = _0x383c08['y'];
                    _0x130ccf['vx'] = 0x0;
                    _0x130ccf['vy'] = 0x0;
                }
            }
        } else if (_0x247783['type'] === 'player_left') {
            delete _0x138367[_0x247783['id']];
            _0x3df085['delete'](parseInt(_0x247783['id']));
        } else if (_0x247783['type'] === 'map_update') {
            const _0x2729bc = _0xc93faf['MAP']['layers']['find'](_0x37b69e => _0x37b69e['name'] === _0x247783['layer']);
            if (_0x2729bc) {
                _0x2729bc['data'][_0x247783['row'] * _0xc93faf['MAP']['columns'] + _0x247783['col']] = _0x247783['gid'];
                const _0x5ae9f2 = _0x247783['row'] * _0xc93faf['MAP']['columns'] + _0x247783['col'];
                if (_0xc93faf['MAP']['doors'] && _0xc93faf['MAP']['doors'][_0x5ae9f2]) {
                    const _0x40024c = _0xc93faf['MAP']['layers']['find'](_0x9d012 => _0x9d012['name'] === 'floor2');
                    if (_0x40024c)
                        _0x40024c['data'][_0x5ae9f2] = 0x2;
                }
                const _0x10222e = Math['floor'](_0x247783['col'] * _0xc93faf['MAP']['tileSize'] / _0xc93faf['MAP']['chunkSize']);
                const _0x1b26d3 = Math['floor'](_0x247783['row'] * _0xc93faf['MAP']['tileSize'] / _0xc93faf['MAP']['chunkSize']);
                _0x3e98aa(_0x10222e, _0x1b26d3);
                _0x1ec9e8 = null;
                _0x1b4d0f = null;
            }
        } else if (_0x247783['type'] === 'role_assign') {
            _0x471929 = _0x247783['role'];
            _0x9ab68e['isDead'] = _0x471929 === 'Spectator';
            _0x3df085['clear']();
            _0xc93faf['CURRENT_TARGET'] = null;
            _0x37eae6 = null;
            _0x11d89f = null;
            _0x3003e1 = null;
            _0x5ee37e = null;
            _0x45fae0 = null;
            _0x48db67 = ![];
            const _0x27cf05 = document['getElementById']('ability-ui');
            if (_0x27cf05)
                _0x27cf05['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x471929;
            _0x1f5214();
            _0x192c88(_0x471929 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x471929, !![]);
            let _0x166343 = '';
            if (_0x471929 === 'Investigator')
                _0x166343 = 'Investigate\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x471929 === 'Tracker')
                _0x166343 = 'Track\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x471929 === 'Doctor')
                _0x166343 = 'Heal\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x471929 === 'Archer')
                _0x166343 = 'Guard\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x471929 === 'Escort')
                _0x166343 = 'Roleblock\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x471929 === 'Vigilante')
                _0x166343 = 'Shoot\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x471929 === 'Skinwalker')
                _0x166343 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x471929 === 'Blackmailer')
                _0x166343 = 'Pick\x20a\x20player\x20to\x20blackmail\x20and\x20a\x20player\x20to\x20kill\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x471929 === 'Celebrity')
                _0x166343 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x471929 === 'Mayor')
                _0x166343 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x192c88(_0x166343, !![]);
        } else if (_0x247783['type'] === 'mayor_reveal') {
            _0x3df085['add'](parseInt(_0x247783['playerId']));
            _0x2a70fc();
            _0x1f5214();
        } else if (_0x247783['type'] === 'rolelist_update') {
            _0xc93faf['ROLE_LIST_RAW'] = _0x247783['list'] || [];
            _0x386313(_0x247783['list'], _0x247783['mode']);
        } else if (_0x247783['type'] === 'sound_event') {
            _0x2e3166['onSoundEvent'](_0x247783['track']);
        } else if (_0x247783['type'] === 'blood_splatter') {
            _0x39d70b['push']({
                'x': _0x247783['x'],
                'y': _0x247783['y']
            });
        } else if (_0x247783['type'] === 'blood_drop') {
            _0x1449e5['push']({
                'x': _0x247783['x'],
                'y': _0x247783['y']
            });
        } else if (_0x247783['type'] === 'day_fade') {
            _0x4bee5b = 0x1;
            _0x295569 = performance['now']() + 0x3e8;
        } else if (_0x247783['type'] === 'player_stats_updated') {
            const _0x1296a9 = parseInt(_0x247783['id']);
            if (_0x1296a9 === _0x13b1ed && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x247783['accountStats']);
            }
            if (_0x138367[_0x247783['id']]) {
                _0x138367[_0x247783['id']]['accountStats'] = _0x247783['accountStats'];
            }
            _0x28c69a();
        } else if (_0x247783['type'] === 'stats_update') {
            const _0x5a6524 = window['_FB'];
            if (_0x5a6524 && _0x5a6524['_currentUser'] && _0x5a6524['_userData']) {
                const _0x4e1d04 = _0x5a6524['_currentUser']['uid'];
                const _0x2107c2 = _0x247783['patch'] || {};
                const _0x728135 = _0x5a6524['_userData'];
                const _0x361cab = {
                    'townWins': (_0x728135['townWins'] || 0x0) + (_0x2107c2['townWins'] || 0x0),
                    'mafiaWins': (_0x728135['mafiaWins'] || 0x0) + (_0x2107c2['mafiaWins'] || 0x0),
                    'deaths': (_0x728135['deaths'] || 0x0) + (_0x2107c2['deaths'] || 0x0),
                    'townLosses': (_0x728135['townLosses'] || 0x0) + (_0x2107c2['townLosses'] || 0x0),
                    'mafiaLosses': (_0x728135['mafiaLosses'] || 0x0) + (_0x2107c2['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x5a6524['_userData'], _0x361cab);
                const _0x246bb9 = _0x5a6524['doc'](_0x5a6524['db'], 'users', _0x4e1d04);
                _0x5a6524['updateDoc'](_0x246bb9, _0x361cab)['catch'](() => {
                });
                if (_0x28fa48 && _0x28fa48['readyState'] === WebSocket['OPEN']) {
                    _0x28fa48['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x361cab
                    }));
                }
                _0x28c69a();
            }
        } else if (_0x247783['type'] === 'game_over') {
            _0x2e3166['onStateChange']('LOBBY', ![]);
            _0x386313([], 'off');
            _0x471929 = null;
            _0x9ab68e['isDead'] = ![];
            _0x9ab68e['hasArrow'] = ![];
            _0x39d70b = [];
            _0x1449e5 = [];
            _0x6f01bf['clear']();
            _0x3df085['clear']();
            _0xc93faf['CURRENT_TARGET'] = null;
            _0x37eae6 = null;
            _0x11d89f = null;
            _0x3003e1 = null;
            _0x5ee37e = null;
            _0x45fae0 = null;
            _0x48db67 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x1f5214();
            _0x192c88('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x247783['type'] === 'chat_log') {
            _0x192c88(_0x247783['text'], ![], !!_0x247783['isHost'], _0x247783['sender']);
        } else if (_0x247783['type'] === 'sys_chat') {
            _0x192c88(_0x247783['text'], !![]);
        }
    };
}
function _0x192c88(_0x5b7963, _0x1fa1b5 = ![], _0x415701 = ![], _0x4bbc5f = null) {
    const _0xa9a5a7 = document['getElementById']('chat-log-messages');
    const _0x59cf91 = document['getElementById']('chat-log-ui');
    const _0x27e820 = _0x59cf91 ? _0x59cf91['scrollHeight'] - _0x59cf91['scrollTop'] - _0x59cf91['clientHeight'] < 0x1e : !![];
    const _0x18e021 = document['createElement']('div');
    _0x18e021['className'] = 'chat-log-line' + (_0x1fa1b5 ? '\x20sys-msg' : '');
    if (_0x4bbc5f) {
        const _0xa5972c = document['createElement']('span');
        _0xa5972c['className'] = _0x415701 ? 'chat-host-name' : 'chat-sender-name';
        _0xa5972c['textContent'] = _0x4bbc5f + ':\x20';
        const _0x330279 = document['createElement']('span');
        _0x330279['className'] = 'chat-msg-text';
        _0x330279['textContent'] = _0x5b7963;
        _0x18e021['appendChild'](_0xa5972c);
        _0x18e021['appendChild'](_0x330279);
    } else {
        _0x18e021['innerText'] = _0x5b7963;
    }
    if (_0xa9a5a7)
        _0xa9a5a7['appendChild'](_0x18e021);
    if (_0x59cf91 && _0x27e820) {
        _0x59cf91['scrollTop'] = _0x59cf91['scrollHeight'];
    }
    if (_0xa9a5a7 && _0xa9a5a7['childElementCount'] > 0xc8) {
        _0xa9a5a7['removeChild'](_0xa9a5a7['firstChild']);
    }
}
function _0x22ef5b(_0x3bc59a, _0x354847, _0x57bd22) {
    const _0x1a73ce = document['createElement']('canvas');
    _0x1a73ce['width'] = _0x57bd22;
    _0x1a73ce['height'] = _0x57bd22;
    const _0xae2be4 = _0x1a73ce['getContext']('2d');
    _0xae2be4['imageSmoothingEnabled'] = ![];
    const _0x1842e3 = 'assets/' + (_0x3bc59a || 'body01.png');
    const _0x16fc2f = _0x561c5b(_0x1842e3);
    if (_0x16fc2f['complete'] && _0x16fc2f['naturalWidth'] > 0x0)
        _0xae2be4['drawImage'](_0x16fc2f, 0x0, 0x0, _0x57bd22, _0x57bd22);
    if (_0x354847) {
        const _0x37faf6 = 'assets/' + _0x354847;
        const _0x5d30e0 = _0x561c5b(_0x37faf6);
        if (_0x5d30e0['complete'] && _0x5d30e0['naturalWidth'] > 0x0)
            _0xae2be4['drawImage'](_0x5d30e0, 0x0, 0x0, _0x57bd22, _0x57bd22);
    }
    return _0x1a73ce['toDataURL']();
}
let _0x120e0e = '';
function _0x28c69a() {
    const _0x12f0f3 = document['getElementById']('chat-profile-panel');
    if (!_0x12f0f3)
        return;
    const _0x3309e = [];
    if (_0x13b1ed !== null) {
        const _0x4e134e = _0x528545 || 'body01.png';
        const _0x2a6e39 = _0x4b35c1 || 'eyes4.png';
        const _0xc3718e = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x3309e['push']({
            'id': _0x13b1ed,
            'name': _0x57f265,
            'body': _0x4e134e,
            'eyes': _0x2a6e39,
            'stats': _0xc3718e
        });
    }
    for (const _0x3b88a1 in _0x138367) {
        const _0x2e512c = _0x138367[_0x3b88a1];
        const _0x20fbd6 = _0x2e512c['accountStats'] || null;
        _0x3309e['push']({
            'id': parseInt(_0x3b88a1),
            'name': _0x2e512c['name'],
            'body': _0x2e512c['body'] || 'body01.png',
            'eyes': _0x2e512c['eyes'] || 'eyes4.png',
            'stats': _0x20fbd6
        });
    }
    const _0x48747d = _0x3309e['map'](_0x4d06ee => _0x4d06ee['id'] + '_' + _0x4d06ee['name'] + '_' + _0x4d06ee['body'] + '_' + _0x4d06ee['eyes'] + '_' + JSON['stringify'](_0x4d06ee['stats']))['join']('|');
    if (_0x48747d === _0x120e0e)
        return;
    _0x120e0e = _0x48747d;
    _0x12f0f3['innerHTML'] = '';
    let _0x4d362d = ![];
    for (const _0x16dc9e of _0x3309e) {
        _0x4d362d = !![];
        const _0x24ba9b = _0x22ef5b(_0x16dc9e['body'], _0x16dc9e['eyes'], 0x20);
        const _0x3eb4ca = document['createElement']('div');
        _0x3eb4ca['className'] = 'chat-pfp-entry';
        const _0x523ece = document['createElement']('img');
        _0x523ece['src'] = _0x24ba9b;
        _0x523ece['alt'] = _0x16dc9e['name'];
        _0x3eb4ca['appendChild'](_0x523ece);
        const _0x5a991a = document['createElement']('div');
        _0x5a991a['className'] = 'chat-pfp-tooltip';
        let _0x220c50 = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x16dc9e['name'] + '</div>';
        const _0x299d13 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x4d1c37 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x47cef2 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x52ca2c = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x22f010 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x31456c = (_0x9f1c4d, _0x436adc, _0x8d967e, _0xc83731) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x9f1c4d + '<span\x20style=\x22flex:1;color:' + _0xc83731 + ';\x22>' + _0x436adc + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x8d967e + '</span></div>';
        if (_0x16dc9e['stats']) {
            _0x220c50 += _0x31456c(_0x299d13, 'Town\x20Wins', _0x16dc9e['stats']['townWins'] || 0x0, '#55ee77');
            _0x220c50 += _0x31456c(_0x4d1c37, 'Mafia\x20Wins', _0x16dc9e['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x220c50 += _0x31456c(_0x47cef2, 'Deaths', _0x16dc9e['stats']['deaths'] || 0x0, '#aaa');
            _0x220c50 += _0x31456c(_0x52ca2c, 'Town\x20Losses', _0x16dc9e['stats']['townLosses'] || 0x0, '#6688aa');
            _0x220c50 += _0x31456c(_0x22f010, 'Mafia\x20Losses', _0x16dc9e['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x220c50 += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x5a991a['innerHTML'] = _0x220c50;
        _0x3eb4ca['appendChild'](_0x5a991a);
        _0x3eb4ca['addEventListener']('mouseenter', () => {
            const _0x165771 = _0x3eb4ca['getBoundingClientRect']();
            _0x5a991a['style']['left'] = _0x165771['right'] + 0x6 + 'px';
            _0x5a991a['style']['top'] = _0x165771['top'] + _0x165771['height'] / 0x2 + 'px';
            _0x5a991a['style']['transform'] = 'translateY(-50%)';
        });
        _0x12f0f3['appendChild'](_0x3eb4ca);
    }
    const _0x406f66 = document['getElementById']('chat-log-wrap');
    if (_0x406f66) {
        if (_0x4d362d) {
            _0x406f66['classList']['add']('has-profiles');
            _0x12f0f3['style']['display'] = 'flex';
        } else {
            _0x406f66['classList']['remove']('has-profiles');
            _0x12f0f3['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x28c69a;
let _0x68daa4 = -0x1, _0x2001f4 = -0x1, _0x3e266b = -0x1, _0x1fb1f3 = 0x0;
function _0x43af18() {
    if (!_0x13b1ed || !_0x28fa48 || _0x28fa48['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x465324 = performance['now']();
    const _0x29a73b = _0x465324 - _0x1fb1f3;
    const _0x1c1fee = Math['abs'](_0x9ab68e['x'] - _0x68daa4) > 0.05 || Math['abs'](_0x9ab68e['y'] - _0x2001f4) > 0.05 || Math['abs'](_0x9ab68e['angle'] - _0x3e266b) > 0.02;
    if (!_0x1c1fee && _0x29a73b < 0xc8)
        return;
    if (_0x29a73b < 0x19)
        return;
    _0x1fb1f3 = _0x465324;
    _0x68daa4 = _0x9ab68e['x'];
    _0x2001f4 = _0x9ab68e['y'];
    _0x3e266b = _0x9ab68e['angle'];
    if (!_0x13b1ed || !_0x28fa48 || _0x28fa48['readyState'] !== WebSocket['OPEN'])
        return;
    _0x28fa48['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x9ab68e['x'],
        'y': _0x9ab68e['y'],
        'vx': _0x9ab68e['vx'],
        'vy': _0x9ab68e['vy'],
        'angle': _0x9ab68e['angle'],
        'scale': _0x9ab68e['scale'],
        'teleportId': _0x2d2311,
        'clientTimestamp': Date['now']()
    }));
}
function _0x377b55() {
    if (_0x9ab68e['isDead'])
        return;
    const _0x130c70 = _0xc93faf['MAP']['layers']['find'](_0x64d1e2 => _0x64d1e2['name'] === 'walls');
    if (!_0x130c70)
        return;
    const _0x1a3664 = _0x9ab68e['scale'];
    const _0x5b2730 = _0x9ab68e['width'] * _0x1a3664 / 0x2;
    for (let _0x187d72 = 0x0; _0x187d72 < 0x3; _0x187d72++) {
        let _0x1d6ddd = _0x9ab68e['x'] + _0x9ab68e['width'] / 0x2;
        let _0x294d5c = _0x9ab68e['y'] + _0x9ab68e['height'] / 0x2;
        const _0xcd5c78 = Math['floor']((_0x1d6ddd - _0x5b2730) / _0xc93faf['MAP']['tileSize']);
        const _0x5acdbd = Math['floor']((_0x1d6ddd + _0x5b2730) / _0xc93faf['MAP']['tileSize']);
        const _0x1e8764 = Math['floor']((_0x294d5c - _0x5b2730) / _0xc93faf['MAP']['tileSize']);
        const _0x81dc02 = Math['floor']((_0x294d5c + _0x5b2730) / _0xc93faf['MAP']['tileSize']);
        for (let _0x9a9b00 = _0x1e8764; _0x9a9b00 <= _0x81dc02; _0x9a9b00++) {
            for (let _0x587f0d = _0xcd5c78; _0x587f0d <= _0x5acdbd; _0x587f0d++) {
                if (_0x587f0d < 0x0 || _0x587f0d >= _0xc93faf['MAP']['columns'] || _0x9a9b00 < 0x0 || _0x9a9b00 >= _0xc93faf['MAP']['rows'])
                    continue;
                if (_0x130c70['data'][_0x9a9b00 * _0xc93faf['MAP']['columns'] + _0x587f0d] === 0x0)
                    continue;
                const _0x1fa395 = _0x587f0d * _0xc93faf['MAP']['tileSize'];
                const _0x4cbd19 = _0x9a9b00 * _0xc93faf['MAP']['tileSize'];
                const _0x5a188a = _0x1d6ddd < _0x1fa395 ? _0x1fa395 : _0x1d6ddd > _0x1fa395 + _0xc93faf['MAP']['tileSize'] ? _0x1fa395 + _0xc93faf['MAP']['tileSize'] : _0x1d6ddd;
                const _0x45f42b = _0x294d5c < _0x4cbd19 ? _0x4cbd19 : _0x294d5c > _0x4cbd19 + _0xc93faf['MAP']['tileSize'] ? _0x4cbd19 + _0xc93faf['MAP']['tileSize'] : _0x294d5c;
                const _0x153040 = _0x1d6ddd - _0x5a188a;
                const _0x1f2c75 = _0x294d5c - _0x45f42b;
                const _0x12bedc = Math['sqrt'](_0x153040 * _0x153040 + _0x1f2c75 * _0x1f2c75);
                if (_0x12bedc < _0x5b2730) {
                    if (_0x12bedc === 0x0) {
                        const _0x652c76 = _0x1d6ddd - _0x1fa395;
                        const _0x4fce86 = _0x1fa395 + _0xc93faf['MAP']['tileSize'] - _0x1d6ddd;
                        const _0x55789e = _0x294d5c - _0x4cbd19;
                        const _0x447fce = _0x4cbd19 + _0xc93faf['MAP']['tileSize'] - _0x294d5c;
                        const _0x2ecf56 = Math['min'](_0x652c76, _0x4fce86, _0x55789e, _0x447fce);
                        if (_0x2ecf56 === _0x652c76)
                            _0x1d6ddd = _0x1fa395 - _0x5b2730;
                        else if (_0x2ecf56 === _0x4fce86)
                            _0x1d6ddd = _0x1fa395 + _0xc93faf['MAP']['tileSize'] + _0x5b2730;
                        else if (_0x2ecf56 === _0x55789e)
                            _0x294d5c = _0x4cbd19 - _0x5b2730;
                        else
                            _0x294d5c = _0x4cbd19 + _0xc93faf['MAP']['tileSize'] + _0x5b2730;
                    } else {
                        const _0x295812 = _0x5b2730 - _0x12bedc;
                        _0x1d6ddd += _0x153040 / _0x12bedc * _0x295812;
                        _0x294d5c += _0x1f2c75 / _0x12bedc * _0x295812;
                        const _0x901c09 = _0x9ab68e['vx'] * (_0x153040 / _0x12bedc) + _0x9ab68e['vy'] * (_0x1f2c75 / _0x12bedc);
                        if (_0x901c09 < 0x0) {
                            _0x9ab68e['vx'] -= _0x901c09 * (_0x153040 / _0x12bedc);
                            _0x9ab68e['vy'] -= _0x901c09 * (_0x1f2c75 / _0x12bedc);
                        }
                    }
                }
            }
        }
        _0x9ab68e['x'] = _0x1d6ddd - _0x9ab68e['width'] / 0x2;
        _0x9ab68e['y'] = _0x294d5c - _0x9ab68e['height'] / 0x2;
    }
}
function _0x1fe1ff(_0x2119fb) {
    const _0x13aa8f = _0xc93faf['MAP']['layers']['find'](_0x377106 => _0x377106['name'] === 'walls');
    if (!_0x13aa8f)
        return;
    const _0x5b472a = _0x2119fb['width'] / 0x2;
    for (let _0x4269d2 = 0x0; _0x4269d2 < 0x2; _0x4269d2++) {
        let _0x2cc0ba = _0x2119fb['x'] + _0x2119fb['width'] / 0x2;
        let _0x2ec476 = _0x2119fb['y'] + _0x2119fb['height'] / 0x2;
        const _0x5aa1b3 = Math['floor']((_0x2cc0ba - _0x5b472a) / _0xc93faf['MAP']['tileSize']);
        const _0x26d4d8 = Math['floor']((_0x2cc0ba + _0x5b472a) / _0xc93faf['MAP']['tileSize']);
        const _0x4225d0 = Math['floor']((_0x2ec476 - _0x5b472a) / _0xc93faf['MAP']['tileSize']);
        const _0x13e260 = Math['floor']((_0x2ec476 + _0x5b472a) / _0xc93faf['MAP']['tileSize']);
        for (let _0x43cc3b = _0x4225d0; _0x43cc3b <= _0x13e260; _0x43cc3b++) {
            for (let _0x221b7a = _0x5aa1b3; _0x221b7a <= _0x26d4d8; _0x221b7a++) {
                if (_0x221b7a < 0x0 || _0x221b7a >= _0xc93faf['MAP']['columns'] || _0x43cc3b < 0x0 || _0x43cc3b >= _0xc93faf['MAP']['rows'])
                    continue;
                if (_0x13aa8f['data'][_0x43cc3b * _0xc93faf['MAP']['columns'] + _0x221b7a] === 0x0)
                    continue;
                const _0x4368d = _0x221b7a * _0xc93faf['MAP']['tileSize'];
                const _0x237e5d = _0x43cc3b * _0xc93faf['MAP']['tileSize'];
                const _0x1be0ff = _0x2cc0ba < _0x4368d ? _0x4368d : _0x2cc0ba > _0x4368d + _0xc93faf['MAP']['tileSize'] ? _0x4368d + _0xc93faf['MAP']['tileSize'] : _0x2cc0ba;
                const _0x26fe8d = _0x2ec476 < _0x237e5d ? _0x237e5d : _0x2ec476 > _0x237e5d + _0xc93faf['MAP']['tileSize'] ? _0x237e5d + _0xc93faf['MAP']['tileSize'] : _0x2ec476;
                const _0x4328d3 = _0x2cc0ba - _0x1be0ff;
                const _0x53a4c7 = _0x2ec476 - _0x26fe8d;
                const _0x2d4785 = Math['sqrt'](_0x4328d3 * _0x4328d3 + _0x53a4c7 * _0x53a4c7);
                if (_0x2d4785 < _0x5b472a) {
                    if (_0x2d4785 === 0x0) {
                        const _0x42bca1 = _0x2cc0ba - _0x4368d;
                        const _0x32298b = _0x4368d + _0xc93faf['MAP']['tileSize'] - _0x2cc0ba;
                        const _0x5ed20b = _0x2ec476 - _0x237e5d;
                        const _0xfe53a8 = _0x237e5d + _0xc93faf['MAP']['tileSize'] - _0x2ec476;
                        const _0x172406 = Math['min'](_0x42bca1, _0x32298b, _0x5ed20b, _0xfe53a8);
                        if (_0x172406 === _0x42bca1)
                            _0x2cc0ba = _0x4368d - _0x5b472a;
                        else if (_0x172406 === _0x32298b)
                            _0x2cc0ba = _0x4368d + _0xc93faf['MAP']['tileSize'] + _0x5b472a;
                        else if (_0x172406 === _0x5ed20b)
                            _0x2ec476 = _0x237e5d - _0x5b472a;
                        else
                            _0x2ec476 = _0x237e5d + _0xc93faf['MAP']['tileSize'] + _0x5b472a;
                    } else {
                        const _0xc81ca2 = _0x5b472a - _0x2d4785;
                        _0x2cc0ba += _0x4328d3 / _0x2d4785 * _0xc81ca2;
                        _0x2ec476 += _0x53a4c7 / _0x2d4785 * _0xc81ca2;
                    }
                }
            }
        }
        _0x2119fb['x'] = _0x2cc0ba - _0x2119fb['width'] / 0x2;
        _0x2119fb['y'] = _0x2ec476 - _0x2119fb['height'] / 0x2;
    }
}
function _0x5ce17c(_0x12f36c) {
    const _0x5b671c = _0x12f36c['width'] / 0x2;
    for (let _0x4aae32 = 0x0; _0x4aae32 < 0x2; _0x4aae32++) {
        let _0x36f7f2 = _0x12f36c['x'] + _0x12f36c['width'] / 0x2;
        let _0x45f94 = _0x12f36c['y'] + _0x12f36c['height'] / 0x2;
        for (const _0x5e6be6 of _0xc93faf['ENTITIES']) {
            const _0x4dde52 = _0x36f7f2 < _0x5e6be6['x'] ? _0x5e6be6['x'] : _0x36f7f2 > _0x5e6be6['x'] + _0x5e6be6['w'] ? _0x5e6be6['x'] + _0x5e6be6['w'] : _0x36f7f2;
            const _0xe5e578 = _0x45f94 < _0x5e6be6['y'] ? _0x5e6be6['y'] : _0x45f94 > _0x5e6be6['y'] + _0x5e6be6['h'] ? _0x5e6be6['y'] + _0x5e6be6['h'] : _0x45f94;
            const _0x5820ca = _0x36f7f2 - _0x4dde52;
            const _0xeceb52 = _0x45f94 - _0xe5e578;
            const _0x45745c = Math['sqrt'](_0x5820ca * _0x5820ca + _0xeceb52 * _0xeceb52);
            if (_0x45745c < _0x5b671c && _0x45745c > 0x0) {
                const _0x11373c = _0x5b671c - _0x45745c;
                const _0x78744a = _0x5820ca / _0x45745c;
                const _0x149a3d = _0xeceb52 / _0x45745c;
                _0x36f7f2 += _0x78744a * _0x11373c;
                _0x45f94 += _0x149a3d * _0x11373c;
            } else if (_0x45745c === 0x0) {
                const _0x51a47d = _0x36f7f2 - _0x5e6be6['x'];
                const _0x5b3758 = _0x5e6be6['x'] + _0x5e6be6['w'] - _0x36f7f2;
                const _0x50c209 = _0x45f94 - _0x5e6be6['y'];
                const _0x817d13 = _0x5e6be6['y'] + _0x5e6be6['h'] - _0x45f94;
                const _0x5414a5 = Math['min'](_0x51a47d, _0x5b3758, _0x50c209, _0x817d13);
                if (_0x5414a5 === _0x51a47d)
                    _0x36f7f2 = _0x5e6be6['x'] - _0x5b671c;
                else if (_0x5414a5 === _0x5b3758)
                    _0x36f7f2 = _0x5e6be6['x'] + _0x5e6be6['w'] + _0x5b671c;
                else if (_0x5414a5 === _0x50c209)
                    _0x45f94 = _0x5e6be6['y'] - _0x5b671c;
                else
                    _0x45f94 = _0x5e6be6['y'] + _0x5e6be6['h'] + _0x5b671c;
            }
        }
        _0x12f36c['x'] = _0x36f7f2 - _0x12f36c['width'] / 0x2;
        _0x12f36c['y'] = _0x45f94 - _0x12f36c['height'] / 0x2;
    }
}
function _0x526a78() {
    if (_0x9ab68e['isDead'])
        return;
    const _0xdcb560 = _0x9ab68e['width'] / 0x2;
    const _0xc85098 = _0x9ab68e['x'] + _0x9ab68e['width'] / 0x2;
    const _0x40181e = _0x9ab68e['y'] + _0x9ab68e['height'] / 0x2;
    for (const _0x11e241 in _0x138367) {
        const _0x316d27 = _0x138367[_0x11e241];
        if (_0x316d27['isDead'])
            continue;
        const _0x20c318 = _0x316d27['width'] / 0x2;
        const _0x4772bb = _0xdcb560 + _0x20c318;
        const _0x301412 = (_0x316d27['renderX'] ?? _0x316d27['x']) + _0x316d27['width'] / 0x2;
        const _0x4f35f2 = (_0x316d27['renderY'] ?? _0x316d27['y']) + _0x316d27['height'] / 0x2;
        const _0x58ce33 = _0xc85098 - _0x301412;
        const _0x54648b = _0x40181e - _0x4f35f2;
        const _0x4e54ae = Math['sqrt'](_0x58ce33 * _0x58ce33 + _0x54648b * _0x54648b);
        if (_0x4e54ae > 0x0 && _0x4e54ae < _0x4772bb) {
            const _0x2ffa53 = _0x4772bb - _0x4e54ae;
            const _0x4051ae = _0x58ce33 / _0x4e54ae;
            const _0x1ef600 = _0x54648b / _0x4e54ae;
            _0x9ab68e['x'] += _0x4051ae * (_0x2ffa53 * 0.25);
            _0x9ab68e['y'] += _0x1ef600 * (_0x2ffa53 * 0.25);
            _0x316d27['x'] -= _0x4051ae * (_0x2ffa53 * 0.75);
            _0x316d27['y'] -= _0x1ef600 * (_0x2ffa53 * 0.75);
            _0x1fe1ff(_0x316d27);
            _0x5ce17c(_0x316d27);
            if (_0x316d27['renderX'] !== undefined) {
                _0x316d27['renderX'] = _0x316d27['x'];
                _0x316d27['renderY'] = _0x316d27['y'];
            }
            const _0x3fc83b = _0x9ab68e['vx'] * _0x4051ae + _0x9ab68e['vy'] * _0x1ef600;
            if (_0x3fc83b < 0x0) {
                _0x9ab68e['vx'] -= _0x3fc83b * _0x4051ae * 0.25;
                _0x9ab68e['vy'] -= _0x3fc83b * _0x1ef600 * 0.25;
            }
        }
    }
    _0x377b55();
    _0x4c8057();
}
function _0x4c8057() {
    if (_0x9ab68e['isDead'])
        return;
    const _0x3a5eb7 = _0x9ab68e['scale'];
    const _0x991391 = _0x9ab68e['width'] * _0x3a5eb7 / 0x2;
    for (let _0x185e97 = 0x0; _0x185e97 < 0x2; _0x185e97++) {
        let _0x7d2128 = _0x9ab68e['x'] + _0x9ab68e['width'] / 0x2;
        let _0x7da477 = _0x9ab68e['y'] + _0x9ab68e['height'] / 0x2;
        for (const _0x26ba90 of _0xc93faf['ENTITIES']) {
            const _0x5cc259 = _0x7d2128 < _0x26ba90['x'] ? _0x26ba90['x'] : _0x7d2128 > _0x26ba90['x'] + _0x26ba90['w'] ? _0x26ba90['x'] + _0x26ba90['w'] : _0x7d2128;
            const _0x2b342a = _0x7da477 < _0x26ba90['y'] ? _0x26ba90['y'] : _0x7da477 > _0x26ba90['y'] + _0x26ba90['h'] ? _0x26ba90['y'] + _0x26ba90['h'] : _0x7da477;
            const _0x472dfe = _0x7d2128 - _0x5cc259;
            const _0x138b1d = _0x7da477 - _0x2b342a;
            const _0x1808db = Math['sqrt'](_0x472dfe * _0x472dfe + _0x138b1d * _0x138b1d);
            if (_0x1808db < _0x991391 && _0x1808db > 0x0) {
                const _0x4d2d81 = _0x991391 - _0x1808db;
                const _0x3b4c47 = _0x472dfe / _0x1808db;
                const _0x37d499 = _0x138b1d / _0x1808db;
                _0x7d2128 += _0x3b4c47 * _0x4d2d81;
                _0x7da477 += _0x37d499 * _0x4d2d81;
                const _0x286b0e = _0x9ab68e['vx'] * _0x3b4c47 + _0x9ab68e['vy'] * _0x37d499;
                if (_0x286b0e < 0x0) {
                    _0x9ab68e['vx'] -= _0x286b0e * _0x3b4c47;
                    _0x9ab68e['vy'] -= _0x286b0e * _0x37d499;
                }
            } else if (_0x1808db === 0x0) {
                const _0x335a5a = _0x7d2128 - _0x26ba90['x'];
                const _0x6f94d7 = _0x26ba90['x'] + _0x26ba90['w'] - _0x7d2128;
                const _0xe05377 = _0x7da477 - _0x26ba90['y'];
                const _0xaed6ec = _0x26ba90['y'] + _0x26ba90['h'] - _0x7da477;
                const _0x5d55ee = Math['min'](_0x335a5a, _0x6f94d7, _0xe05377, _0xaed6ec);
                if (_0x5d55ee === _0x335a5a)
                    _0x7d2128 = _0x26ba90['x'] - _0x991391;
                else if (_0x5d55ee === _0x6f94d7)
                    _0x7d2128 = _0x26ba90['x'] + _0x26ba90['w'] + _0x991391;
                else if (_0x5d55ee === _0xe05377)
                    _0x7da477 = _0x26ba90['y'] - _0x991391;
                else
                    _0x7da477 = _0x26ba90['y'] + _0x26ba90['h'] + _0x991391;
            }
        }
        _0x9ab68e['x'] = _0x7d2128 - _0x9ab68e['width'] / 0x2;
        _0x9ab68e['y'] = _0x7da477 - _0x9ab68e['height'] / 0x2;
    }
}
function _0x4d8042(_0x433312, _0x5b8e77) {
    const _0x351709 = _0xc93faf['MAP']['layers']['find'](_0x3210cf => _0x3210cf['name'] === 'trees');
    if (!_0x351709)
        return ![];
    const _0x2ee2d7 = Math['floor'](_0x433312 / _0xc93faf['MAP']['tileSize']);
    const _0xf1819d = Math['floor'](_0x5b8e77 / _0xc93faf['MAP']['tileSize']);
    if (_0x2ee2d7 < 0x0 || _0x2ee2d7 >= _0xc93faf['MAP']['columns'] || _0xf1819d < 0x0 || _0xf1819d >= _0xc93faf['MAP']['rows'])
        return ![];
    return _0x351709['data'][_0xf1819d * _0xc93faf['MAP']['columns'] + _0x2ee2d7] === 0xb;
}
let _0x1ec9e8 = null;
function _0x51c561() {
    const _0x46eeb5 = _0xc93faf['MAP'];
    const _0x29f542 = _0x46eeb5['layers']['find'](_0x5500b8 => _0x5500b8['name'] === 'floor2');
    const _0x3c1d11 = _0x46eeb5['layers']['find'](_0x465865 => _0x465865['name'] === 'walls');
    if (!_0x29f542 || !_0x3c1d11) {
        _0x1ec9e8 = null;
        return;
    }
    const _0x47ecc9 = _0x46eeb5['columns'];
    const _0x54a047 = _0x46eeb5['rows'];
    const _0x11f0b0 = [];
    const _0x26990a = new Set();
    const _0x56526c = new Set();
    for (let _0xc8b974 = 0x0; _0xc8b974 < _0x54a047; _0xc8b974++) {
        for (let _0x562d24 = 0x0; _0x562d24 < _0x47ecc9; _0x562d24++) {
            const _0x14b960 = _0xc8b974 * _0x47ecc9 + _0x562d24;
            const _0x2c4a0a = _0x29f542['data'][_0x14b960];
            const _0x7271cc = _0x3c1d11['data'][_0x14b960];
            if (_0x2c4a0a === 0x2 && _0x7271cc === 0x0) {
                _0x11f0b0['push']({
                    'c': _0x562d24,
                    'r': _0xc8b974
                });
                _0x56526c['add'](_0x562d24 + ',' + _0xc8b974);
            } else if (_0x7271cc !== 0x0) {
                _0x26990a['add'](_0x562d24 + ',' + _0xc8b974);
            }
        }
    }
    const _0x3d4fc2 = [
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
                c: _0x26ca93,
                r: _0x554fe5
            } of _0x11f0b0) {
        for (const [_0x21e631, _0x498e5b] of _0x3d4fc2) {
            const _0x3862ab = _0x26ca93 + _0x21e631, _0x53fe43 = _0x554fe5 + _0x498e5b;
            const _0x5b1a03 = _0x3862ab + ',' + _0x53fe43;
            if (!_0x56526c['has'](_0x5b1a03)) {
                _0x26990a['add'](_0x5b1a03);
            }
        }
    }
    _0x1ec9e8 = {
        'wallSet': _0x26990a,
        'floorTiles': _0x11f0b0,
        'interiorSet': _0x56526c
    };
}
function _0x2ed2a5() {
    const _0x408ba2 = _0xc93faf['MAP']['layers']['find'](_0x17dc34 => _0x17dc34['name'] === 'floor2');
    if (!_0x408ba2)
        return ![];
    const _0x5f78 = _0x9ab68e['x'] + _0x9ab68e['width'] / 0x2;
    const _0x27a8ff = _0x9ab68e['y'] + _0x9ab68e['height'] / 0x2;
    const _0x28a9b5 = _0xc93faf['MAP']['tileSize'];
    const _0x10e488 = Math['floor'](_0x5f78 / _0x28a9b5);
    const _0x4f4069 = Math['floor'](_0x27a8ff / _0x28a9b5);
    if (_0x10e488 < 0x0 || _0x10e488 >= _0xc93faf['MAP']['columns'] || _0x4f4069 < 0x0 || _0x4f4069 >= _0xc93faf['MAP']['rows'])
        return ![];
    const _0x712b5b = _0x4f4069 * _0xc93faf['MAP']['columns'] + _0x10e488;
    if (_0x408ba2['data'][_0x712b5b] === 0x2)
        return !![];
    if (_0xc93faf['MAP']['doors'] && _0xc93faf['MAP']['doors'][_0x712b5b])
        return !![];
    const _0x18b460 = [
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
    for (const [_0x5e90ef, _0xf8ba59] of _0x18b460) {
        const _0x539bfe = Math['floor']((_0x5f78 + _0x5e90ef) / _0x28a9b5);
        const _0x1fe20e = Math['floor']((_0x27a8ff + _0xf8ba59) / _0x28a9b5);
        if (_0x539bfe >= 0x0 && _0x539bfe < _0xc93faf['MAP']['columns'] && _0x1fe20e >= 0x0 && _0x1fe20e < _0xc93faf['MAP']['rows']) {
            const _0x1be174 = _0x1fe20e * _0xc93faf['MAP']['columns'] + _0x539bfe;
            if (_0x408ba2['data'][_0x1be174] === 0x2 || _0xc93faf['MAP']['doors'] && _0xc93faf['MAP']['doors'][_0x1be174]) {
                return !![];
            }
        }
    }
    return ![];
}
let _0x1b4d0f = null, _0x47f8de = null;
function _0x208715() {
    if (_0x9ab68e['isDead']) {
        _0xc93faf['SHADOW']['polygon'] = null;
        _0x1b4d0f = null;
        return;
    }
    const _0x1bb01d = _0xc93faf['MAP'];
    const _0x26b433 = _0xc93faf['SHADOW'];
    const _0x3742e = _0x1bb01d['tileSize'];
    if (!_0x1ec9e8)
        _0x51c561();
    if (!_0x1ec9e8) {
        _0x26b433['polygon'] = null;
        _0x1b4d0f = null;
        return;
    }
    const {
        wallSet: _0x148dfd,
        floorTiles: _0x45be7d
    } = _0x1ec9e8;
    if (_0x45be7d['length'] === 0x0) {
        _0x26b433['polygon'] = null;
        _0x1b4d0f = null;
        return;
    }
    if (!_0x2ed2a5()) {
        _0x26b433['polygon'] = null;
        _0x1b4d0f = null;
        return;
    }
    const _0x55e1be = _0x9ab68e['x'] + _0x9ab68e['width'] / 0x2;
    const _0x164cf1 = _0x9ab68e['y'] + _0x9ab68e['height'] / 0x2;
    if (_0x1b4d0f !== null && _0x26b433['polygon'] && Math['hypot'](_0x55e1be - _0x1b4d0f, _0x164cf1 - _0x47f8de) < 0.5) {
        return;
    }
    _0x1b4d0f = _0x55e1be;
    _0x47f8de = _0x164cf1;
    const _0x1c33d6 = Math['floor'](_0x55e1be / _0x3742e);
    const _0x1639a2 = Math['floor'](_0x164cf1 / _0x3742e);
    const _0x44112a = Math['max'](0x0, _0x1c33d6 - 0x8);
    const _0x3fe2aa = Math['min'](_0x1bb01d['columns'] - 0x1, _0x1c33d6 + 0x8);
    const _0x4042b2 = Math['max'](0x0, _0x1639a2 - 0x8);
    const _0x3125c6 = Math['min'](_0x1bb01d['rows'] - 0x1, _0x1639a2 + 0x8);
    const _0x78251e = [];
    const _0x280a3d = [];
    for (let _0x5b0bd4 = _0x4042b2; _0x5b0bd4 <= _0x3125c6; _0x5b0bd4++) {
        for (let _0x361769 = _0x44112a; _0x361769 <= _0x3fe2aa; _0x361769++) {
            if (!_0x148dfd['has'](_0x361769 + ',' + _0x5b0bd4))
                continue;
            const _0x201460 = _0x361769 * _0x3742e;
            const _0x3f6a00 = _0x5b0bd4 * _0x3742e;
            const _0x58ff82 = _0x201460 + _0x3742e;
            const _0xa441b5 = _0x3f6a00 + _0x3742e;
            if (!_0x148dfd['has'](_0x361769 + ',' + (_0x5b0bd4 - 0x1))) {
                _0x78251e['push'](_0x201460, _0x3f6a00, _0x58ff82, _0x3f6a00);
                _0x280a3d['push'](_0x201460, _0x3f6a00, _0x58ff82, _0x3f6a00);
            }
            if (!_0x148dfd['has'](_0x361769 + ',' + (_0x5b0bd4 + 0x1))) {
                _0x78251e['push'](_0x201460, _0xa441b5, _0x58ff82, _0xa441b5);
                _0x280a3d['push'](_0x201460, _0xa441b5, _0x58ff82, _0xa441b5);
            }
            if (!_0x148dfd['has'](_0x361769 - 0x1 + ',' + _0x5b0bd4)) {
                _0x78251e['push'](_0x201460, _0x3f6a00, _0x201460, _0xa441b5);
                _0x280a3d['push'](_0x201460, _0x3f6a00, _0x201460, _0xa441b5);
            }
            if (!_0x148dfd['has'](_0x361769 + 0x1 + ',' + _0x5b0bd4)) {
                _0x78251e['push'](_0x58ff82, _0x3f6a00, _0x58ff82, _0xa441b5);
                _0x280a3d['push'](_0x58ff82, _0x3f6a00, _0x58ff82, _0xa441b5);
            }
        }
    }
    const _0x36319f = new Set();
    const _0x31320f = [];
    const _0x3bf9aa = 0.0001;
    for (let _0x29d161 = 0x0; _0x29d161 < _0x280a3d['length']; _0x29d161 += 0x2) {
        const _0x4cbc0d = _0x280a3d[_0x29d161];
        const _0x2fab32 = _0x280a3d[_0x29d161 + 0x1];
        const _0x1c06bc = Math['atan2'](_0x2fab32 - _0x164cf1, _0x4cbc0d - _0x55e1be);
        const _0xa70be1 = Math['round'](_0x1c06bc * 0x9c40);
        if (!_0x36319f['has'](_0xa70be1 - 0x1)) {
            _0x36319f['add'](_0xa70be1 - 0x1);
            _0x31320f['push'](_0x1c06bc - _0x3bf9aa);
        }
        if (!_0x36319f['has'](_0xa70be1)) {
            _0x36319f['add'](_0xa70be1);
            _0x31320f['push'](_0x1c06bc);
        }
        if (!_0x36319f['has'](_0xa70be1 + 0x1)) {
            _0x36319f['add'](_0xa70be1 + 0x1);
            _0x31320f['push'](_0x1c06bc + _0x3bf9aa);
        }
    }
    for (let _0x158f8a = 0x0; _0x158f8a < 0x10; _0x158f8a++) {
        const _0x48e45c = -Math['PI'] + _0x158f8a * 0x2 * Math['PI'] / 0x10;
        _0x31320f['push'](_0x48e45c);
    }
    _0x31320f['sort']((_0x93ba2, _0x18a7d6) => _0x93ba2 - _0x18a7d6);
    const _0x4a4c23 = 0xc * _0x3742e;
    const _0x263971 = [];
    for (let _0x596155 = 0x0; _0x596155 < _0x31320f['length']; _0x596155++) {
        const _0x3c2577 = _0x31320f[_0x596155];
        const _0x6e031f = Math['cos'](_0x3c2577);
        const _0x4efc76 = Math['sin'](_0x3c2577);
        let _0x33b90b = _0x4a4c23;
        for (let _0x523f84 = 0x0; _0x523f84 < _0x78251e['length']; _0x523f84 += 0x4) {
            const _0x43c888 = _0x78251e[_0x523f84], _0x2175c2 = _0x78251e[_0x523f84 + 0x1];
            const _0x401c63 = _0x78251e[_0x523f84 + 0x2], _0x1e1e04 = _0x78251e[_0x523f84 + 0x3];
            const _0x58de9c = _0x401c63 - _0x43c888;
            const _0x15329a = _0x1e1e04 - _0x2175c2;
            const _0x1c49fe = _0x6e031f * _0x15329a - _0x4efc76 * _0x58de9c;
            if (Math['abs'](_0x1c49fe) < 1e-9)
                continue;
            const _0x42e6b7 = _0x43c888 - _0x55e1be;
            const _0x37671f = _0x2175c2 - _0x164cf1;
            const _0x1cdd31 = (_0x42e6b7 * _0x15329a - _0x37671f * _0x58de9c) / _0x1c49fe;
            const _0x427de7 = (_0x42e6b7 * _0x4efc76 - _0x37671f * _0x6e031f) / _0x1c49fe;
            if (_0x1cdd31 > 0x1 && _0x427de7 >= 0x0 && _0x427de7 <= 0x1 && _0x1cdd31 < _0x33b90b) {
                _0x33b90b = _0x1cdd31;
            }
        }
        _0x263971['push'](_0x55e1be + _0x6e031f * _0x33b90b, _0x164cf1 + _0x4efc76 * _0x33b90b);
    }
    _0x26b433['polygon'] = _0x263971['length'] >= 0x6 ? _0x263971 : null;
}
function _0x383392(_0x3d1dc6, _0x77d117, _0x46fe34) {
    if (_0x9ab68e['isDead'])
        return;
    if (!_0x1ec9e8)
        _0x51c561();
    if (!_0x1ec9e8)
        return;
    const {floorTiles: _0xa0561e} = _0x1ec9e8;
    if (_0xa0561e['length'] === 0x0)
        return;
    const _0x3b45b1 = _0xc93faf['SHADOW'];
    const _0x2e7c2b = _0xc93faf['MAP']['tileSize'];
    const _0x3b6049 = _0xc93faf['CAMERA']['width'];
    const _0x221d9b = _0xc93faf['CAMERA']['height'];
    if (!_0xc93faf['SHADOW']['_buf'] || _0xc93faf['SHADOW']['_buf']['width'] !== _0x3b6049 || _0xc93faf['SHADOW']['_buf']['height'] !== _0x221d9b) {
        _0xc93faf['SHADOW']['_buf'] = document['createElement']('canvas');
        _0xc93faf['SHADOW']['_buf']['width'] = _0x3b6049;
        _0xc93faf['SHADOW']['_buf']['height'] = _0x221d9b;
    }
    const _0x4195d0 = _0xc93faf['SHADOW']['_buf'];
    const _0x5b90f7 = _0x4195d0['getContext']('2d');
    _0x5b90f7['clearRect'](0x0, 0x0, _0x3b6049, _0x221d9b);
    _0x5b90f7['fillStyle'] = 'rgba(0,0,0,0.95)';
    _0x5b90f7['beginPath']();
    for (const {
                c: _0x105ad9,
                r: _0x5c5389
            } of _0xa0561e) {
        const _0x4bf588 = Math['round'](_0x105ad9 * _0x2e7c2b - _0x77d117), _0x2bd7fc = Math['round'](_0x5c5389 * _0x2e7c2b - _0x46fe34);
        if (_0x4bf588 > _0x3b6049 || _0x2bd7fc > _0x221d9b || _0x4bf588 + _0x2e7c2b < 0x0 || _0x2bd7fc + _0x2e7c2b < 0x0)
            continue;
        _0x5b90f7['rect'](_0x4bf588, _0x2bd7fc, _0x2e7c2b + 0x1, _0x2e7c2b + 0x1);
    }
    _0x5b90f7['fill']();
    if (_0x2ed2a5() && _0x3b45b1['polygon'] && _0x3b45b1['polygon']['length'] >= 0x6) {
        _0x5b90f7['globalCompositeOperation'] = 'destination-out';
        _0x5b90f7['fillStyle'] = 'rgba(0,0,0,1)';
        const _0x3eec86 = _0x3b45b1['polygon'];
        _0x5b90f7['beginPath']();
        _0x5b90f7['moveTo'](_0x3eec86[0x0] - _0x77d117, _0x3eec86[0x1] - _0x46fe34);
        for (let _0x507af7 = 0x2; _0x507af7 < _0x3eec86['length']; _0x507af7 += 0x2) {
            _0x5b90f7['lineTo'](_0x3eec86[_0x507af7] - _0x77d117, _0x3eec86[_0x507af7 + 0x1] - _0x46fe34);
        }
        _0x5b90f7['closePath']();
        _0x5b90f7['fill']();
        _0x5b90f7['globalCompositeOperation'] = 'source-over';
    }
    _0x3d1dc6['drawImage'](_0x4195d0, 0x0, 0x0);
}
function _0x534ea4(_0x22051c) {
    let _0xfb540c = 0x0, _0x77aed7 = 0x0;
    const _0x509bc3 = _0xc93faf['INPUTS']['mouseX'] / _0xc93faf['SYSTEM']['viewScale'];
    const _0x3f4ee7 = _0xc93faf['INPUTS']['mouseY'] / _0xc93faf['SYSTEM']['viewScale'];
    const _0x4375b1 = _0x9ab68e['x'] - _0xc93faf['CAMERA']['x'] + _0x9ab68e['width'] / 0x2;
    const _0x3c616b = _0x9ab68e['y'] - _0xc93faf['CAMERA']['y'] + _0x9ab68e['height'] / 0x2;
    const _0x363550 = Math['atan2'](_0x3f4ee7 - _0x3c616b, _0x509bc3 - _0x4375b1);
    if (_0x39b91e !== 0x0 || _0x589060 !== 0x0) {
        _0xfb540c = _0x39b91e;
        _0x77aed7 = _0x589060;
    } else if (_0x2397ce) {
        let _0x3ceef4 = 0x0, _0x2e76a2 = 0x0;
        if (_0xc93faf['INPUTS']['keys']['w'] || _0xc93faf['INPUTS']['keys']['arrowup'])
            _0x3ceef4 += 0x1;
        if (_0xc93faf['INPUTS']['keys']['s'] || _0xc93faf['INPUTS']['keys']['arrowdown'])
            _0x3ceef4 -= 0x1;
        if (_0xc93faf['INPUTS']['keys']['d'] || _0xc93faf['INPUTS']['keys']['arrowright'])
            _0x2e76a2 += 0x1;
        if (_0xc93faf['INPUTS']['keys']['a'] || _0xc93faf['INPUTS']['keys']['arrowleft'])
            _0x2e76a2 -= 0x1;
        if (_0x3ceef4 !== 0x0 || _0x2e76a2 !== 0x0) {
            const _0x3b482d = _0x363550 + Math['atan2'](_0x2e76a2, _0x3ceef4);
            _0xfb540c = Math['cos'](_0x3b482d);
            _0x77aed7 = Math['sin'](_0x3b482d);
        }
    } else {
        if (_0xc93faf['INPUTS']['keys']['w'] || _0xc93faf['INPUTS']['keys']['arrowup'])
            _0x77aed7 -= 0x1;
        if (_0xc93faf['INPUTS']['keys']['s'] || _0xc93faf['INPUTS']['keys']['arrowdown'])
            _0x77aed7 += 0x1;
        if (_0xc93faf['INPUTS']['keys']['a'] || _0xc93faf['INPUTS']['keys']['arrowleft'])
            _0xfb540c -= 0x1;
        if (_0xc93faf['INPUTS']['keys']['d'] || _0xc93faf['INPUTS']['keys']['arrowright'])
            _0xfb540c += 0x1;
        const _0x2a7ee8 = _0xfb540c !== 0x0 || _0x77aed7 !== 0x0;
        if (_0x2a7ee8) {
            const _0x4fc6c7 = Math['sqrt'](_0xfb540c * _0xfb540c + _0x77aed7 * _0x77aed7);
            _0xfb540c /= _0x4fc6c7;
            _0x77aed7 /= _0x4fc6c7;
        }
    }
    if (_0xc93faf['GAME_STATE'] === 'NIGHT' && (_0x471929 === 'Skinwalker' || _0x471929 === 'Blackmailer')) {
        if (_0xc93faf['NIGHT_ABILITY_OPEN'] || !_0xc93faf['CURRENT_TARGET']) {
            _0xfb540c = 0x0;
            _0x77aed7 = 0x0;
            _0x9ab68e['vx'] = 0x0;
            _0x9ab68e['vy'] = 0x0;
            _0x9ab68e['x'] = _0xc93faf['MAP']['columns'] * _0xc93faf['MAP']['tileSize'] / 0x2 - _0x9ab68e['width'] / 0x2;
            _0x9ab68e['y'] = _0xc93faf['MAP']['rows'] * _0xc93faf['MAP']['tileSize'] / 0x2 - _0x9ab68e['height'] / 0x2;
        }
    }
    const _0x130f47 = _0xfb540c !== 0x0 || _0x77aed7 !== 0x0;
    const _0x522608 = (_0xc93faf['INPUTS']['keys']['shift'] || _0x1d9dd7 || _0xcb3c50) && _0x130f47;
    _0x9ab68e['bopTimer'] = _0x522608 ? _0x9ab68e['bopTimer'] + _0x22051c : 0x0;
    _0x9ab68e['scale'] = 0x1 + (_0x9ab68e['bopTimer'] > 0x0 ? Math['sin'](_0x9ab68e['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x3e48f6 = Math['pow'](0.001, _0x22051c);
    const _0x5b9098 = _0x522608 ? 0x74a : 0x5d5;
    _0x9ab68e['vx'] += _0xfb540c * _0x5b9098 * _0x22051c;
    _0x9ab68e['vy'] += _0x77aed7 * _0x5b9098 * _0x22051c;
    _0x9ab68e['vx'] *= _0x3e48f6;
    _0x9ab68e['vy'] *= _0x3e48f6;
    _0x9ab68e['x'] += _0x9ab68e['vx'] * _0x22051c;
    _0x9ab68e['y'] += _0x9ab68e['vy'] * _0x22051c;
    for (let _0xb711ec = 0x0; _0xb711ec < 0x3; _0xb711ec++)
        _0x377b55();
    for (let _0x254ba1 = 0x0; _0x254ba1 < 0x2; _0x254ba1++)
        _0x4c8057();
    for (let _0x176686 = 0x0; _0x176686 < 0x2; _0x176686++)
        _0x526a78();
    if (_0x9ab68e['x'] < 0x0)
        _0x9ab68e['x'] = 0x0;
    if (_0x9ab68e['y'] < 0x0)
        _0x9ab68e['y'] = 0x0;
    if (_0x9ab68e['x'] + _0x9ab68e['width'] > _0xc93faf['MAP']['columns'] * _0xc93faf['MAP']['tileSize'])
        _0x9ab68e['x'] = _0xc93faf['MAP']['columns'] * _0xc93faf['MAP']['tileSize'] - _0x9ab68e['width'];
    if (_0x9ab68e['y'] + _0x9ab68e['height'] > _0xc93faf['MAP']['rows'] * _0xc93faf['MAP']['tileSize'])
        _0x9ab68e['y'] = _0xc93faf['MAP']['rows'] * _0xc93faf['MAP']['tileSize'] - _0x9ab68e['height'];
    if (_0x54f83f) {
        _0x9ab68e['angle'] = _0x867e6a + Math['PI'] / 0x2;
    } else if (_0x39b91e !== 0x0 || _0x589060 !== 0x0) {
        _0x9ab68e['angle'] = Math['atan2'](_0x589060, _0x39b91e) + Math['PI'] / 0x2;
    } else if (!_0x17780c) {
        _0x9ab68e['angle'] = _0x363550 + Math['PI'] / 0x2;
    }
    const _0x2a6514 = _0x9ab68e['x'] + _0x9ab68e['width'] / 0x2 - _0xc93faf['CAMERA']['width'] / 0x2;
    const _0x5b50f8 = _0x9ab68e['y'] + _0x9ab68e['height'] / 0x2 - _0xc93faf['CAMERA']['height'] / 0x2;
    if (_0xc93faf['CAMERA']['x'] === null || isNaN(_0xc93faf['CAMERA']['x']) || !isFinite(_0xc93faf['CAMERA']['x'])) {
        _0xc93faf['CAMERA']['x'] = _0x2a6514;
        _0xc93faf['CAMERA']['y'] = _0x5b50f8;
    } else {
        const _0x839af9 = 0x1 - Math['exp'](-Math['max'](0x0, _0x22051c) * 0x28);
        _0xc93faf['CAMERA']['x'] += (_0x2a6514 - _0xc93faf['CAMERA']['x']) * _0x839af9;
        _0xc93faf['CAMERA']['y'] += (_0x5b50f8 - _0xc93faf['CAMERA']['y']) * _0x839af9;
    }
    for (const _0x59d637 in _0x138367) {
        const _0x10708b = _0x138367[_0x59d637];
        if (_0x10708b['renderX'] === undefined) {
            _0x10708b['renderX'] = _0x10708b['x'];
            _0x10708b['renderY'] = _0x10708b['y'];
            _0x10708b['renderAngle'] = _0x10708b['angle'] || 0x0;
        }
        const _0x21326d = _0x10708b['x'] + (_0x10708b['vx'] || 0x0) * _0x22051c;
        const _0x321ecd = _0x10708b['y'] + (_0x10708b['vy'] || 0x0) * _0x22051c;
        _0x10708b['x'] = _0x21326d;
        _0x10708b['y'] = _0x321ecd;
        const _0x17f076 = 0x1 - Math['exp'](-_0x22051c * 0x12);
        const _0x73261c = _0x10708b['x'] - _0x10708b['renderX'], _0x2494c6 = _0x10708b['y'] - _0x10708b['renderY'];
        const _0x5d6ab0 = Math['sqrt'](_0x73261c * _0x73261c + _0x2494c6 * _0x2494c6);
        const _0x1214f9 = 0xc8;
        if (_0x5d6ab0 > _0x1214f9) {
            _0x10708b['renderX'] = _0x10708b['x'] - _0x73261c / _0x5d6ab0 * _0x1214f9;
            _0x10708b['renderY'] = _0x10708b['y'] - _0x2494c6 / _0x5d6ab0 * _0x1214f9;
        }
        _0x10708b['renderX'] += (_0x10708b['x'] - _0x10708b['renderX']) * _0x17f076;
        _0x10708b['renderY'] += (_0x10708b['y'] - _0x10708b['renderY']) * _0x17f076;
        let _0x5c9b4a = (_0x10708b['angle'] || 0x0) - _0x10708b['renderAngle'];
        while (_0x5c9b4a < -Math['PI'])
            _0x5c9b4a += Math['PI'] * 0x2;
        while (_0x5c9b4a > Math['PI'])
            _0x5c9b4a -= Math['PI'] * 0x2;
        _0x10708b['renderAngle'] += _0x5c9b4a * (0x1 - Math['exp'](-_0x22051c * 0x14));
    }
    if (_0xc93faf['GAME_STATE'] === 'NIGHT') {
        _0x273aba = Math['min'](0.6, _0x273aba + _0x22051c * 0.5);
    } else {
        _0x273aba = Math['max'](0x0, _0x273aba - _0x22051c * 0.5);
    }
    if (_0x4bee5b > 0x0) {
        if (performance['now']() > _0x295569) {
            _0x4bee5b = Math['max'](0x0, _0x4bee5b - _0x22051c * 0x2);
        }
    }
    _0x208715();
    _0x43af18();
}
function _0x43adc1(_0x2a945a, _0x3e0141, _0x1a1e1a, _0x511185, _0x445ae9 = !![]) {
    _0x2a945a['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x128ca5 = _0x2a945a['measureText'](_0x3e0141)['width'];
    const _0x224567 = _0x128ca5 + 0x18;
    const _0x3a05b0 = 0x1c;
    _0x2a945a['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x2a945a['beginPath']();
    if (_0x2a945a['roundRect']) {
        _0x2a945a['roundRect'](_0x1a1e1a - _0x224567 / 0x2, _0x511185 - _0x3a05b0, _0x224567, _0x3a05b0, 0x6);
    } else {
        _0x2a945a['rect'](_0x1a1e1a - _0x224567 / 0x2, _0x511185 - _0x3a05b0, _0x224567, _0x3a05b0);
    }
    _0x2a945a['fill']();
    if (_0x445ae9) {
        _0x2a945a['beginPath']();
        _0x2a945a['moveTo'](_0x1a1e1a - 0x6, _0x511185);
        _0x2a945a['lineTo'](_0x1a1e1a + 0x6, _0x511185);
        _0x2a945a['lineTo'](_0x1a1e1a, _0x511185 + 0x6);
        _0x2a945a['fill']();
    }
    _0x2a945a['fillStyle'] = '#ffffff';
    _0x2a945a['textAlign'] = 'center';
    _0x2a945a['textBaseline'] = 'middle';
    _0x2a945a['fillText'](_0x3e0141, _0x1a1e1a, _0x511185 - _0x3a05b0 / 0x2 + 0x1);
}
function _0x5e6879(_0x506884, _0x262cab, _0x43b202, _0x339dde) {
    if (!_0x262cab || _0x262cab['length'] === 0x0)
        return;
    let _0xb9adee = _0x339dde;
    for (let _0x2b2ae0 = 0x0; _0x2b2ae0 < _0x262cab['length']; _0x2b2ae0++) {
        _0x43adc1(_0x506884, _0x262cab[_0x2b2ae0]['text'], _0x43b202, _0xb9adee, _0x2b2ae0 === 0x0);
        _0xb9adee -= 0x24;
    }
}
function _0x4e5e01() {
    if (!_0xc93faf['SYSTEM']['isReady'])
        return;
    if (_0xc93faf['MAP']['layers'] && _0xc93faf['MAP']['layers']['length'] > 0x0 && _0x47ddbe['complete'] && _0x47ddbe['naturalWidth'] > 0x0) {
        if (!_0xc93faf['MAP']['_prerenderedWithTileset'] || !_0xc93faf['MAP']['bgChunks'] || _0xc93faf['MAP']['bgChunks']['length'] === 0x0) {
            _0x3c5025();
        }
    }
    if (!_0xc93faf['MAP']['bgChunks'] || _0xc93faf['MAP']['bgChunks']['length'] === 0x0 || !_0xc93faf['MAP']['bgChunks'][0x0] || _0xc93faf['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x1e7d98['fillStyle'] = '#000000';
    _0x1e7d98['fillRect'](0x0, 0x0, _0x2670a5['width'], _0x2670a5['height']);
    _0x1e7d98['save']();
    try {
        _0x1e7d98['scale'](_0xc93faf['SYSTEM']['viewScale'], _0xc93faf['SYSTEM']['viewScale']);
        _0x1e7d98['imageSmoothingEnabled'] = ![];
        const _0x442879 = Math['floor'](_0xc93faf['CAMERA']['x'] || 0x0);
        const _0x45435c = Math['floor'](_0xc93faf['CAMERA']['y'] || 0x0);
        const _0x49b0c8 = Math['max'](0x0, Math['floor'](_0x442879 / _0xc93faf['MAP']['chunkSize']));
        const _0x3a058c = Math['min'](_0xc93faf['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x442879 + _0xc93faf['CAMERA']['width']) / _0xc93faf['MAP']['chunkSize']));
        const _0x76cb09 = Math['max'](0x0, Math['floor'](_0x45435c / _0xc93faf['MAP']['chunkSize']));
        const _0x815dc9 = Math['min'](_0xc93faf['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x45435c + _0xc93faf['CAMERA']['height']) / _0xc93faf['MAP']['chunkSize']));
        for (let _0x22d714 = _0x76cb09; _0x22d714 <= _0x815dc9; _0x22d714++)
            for (let _0x4da129 = _0x49b0c8; _0x4da129 <= _0x3a058c; _0x4da129++) {
                const _0x18c42d = _0x4da129 * _0xc93faf['MAP']['chunkSize'] - _0x442879;
                const _0x94611f = _0x22d714 * _0xc93faf['MAP']['chunkSize'] - _0x45435c;
                _0x1e7d98['drawImage'](_0xc93faf['MAP']['bgChunks'][_0x22d714][_0x4da129], _0x18c42d, _0x94611f, _0xc93faf['MAP']['chunkSize'] + 0x1, _0xc93faf['MAP']['chunkSize'] + 0x1);
            }
        const _0x485e5e = _0x561c5b('assets/blood\x20splatter.png');
        if (_0x39d70b && _0x39d70b['length'] > 0x0) {
            for (const _0x4441fd of _0x39d70b) {
                const _0x333b11 = _0x4441fd['x'] - _0x442879;
                const _0x319ae5 = _0x4441fd['y'] - _0x45435c;
                if (_0x485e5e['complete'] && _0x485e5e['naturalWidth'] > 0x0) {
                    _0x1e7d98['drawImage'](_0x485e5e, _0x333b11 - 0x20, _0x319ae5 - 0x20, 0x40, 0x40);
                } else {
                    _0x1e7d98['fillStyle'] = 'rgba(160,\x200,\x200,\x200.75)';
                    _0x1e7d98['beginPath']();
                    _0x1e7d98['arc'](_0x333b11, _0x319ae5, 0x16, 0x0, Math['PI'] * 0x2);
                    _0x1e7d98['fill']();
                }
            }
        }
        const _0x9372f2 = _0x561c5b('assets/blood.png');
        if (_0x1449e5 && _0x1449e5['length'] > 0x0) {
            for (const _0x22ed11 of _0x1449e5) {
                const _0x28f918 = _0x22ed11['x'] - _0x442879;
                const _0x1f61c3 = _0x22ed11['y'] - _0x45435c;
                if (_0x9372f2['complete'] && _0x9372f2['naturalWidth'] > 0x0) {
                    _0x1e7d98['drawImage'](_0x9372f2, _0x28f918 - 0xc, _0x1f61c3 - 0xc, 0x18, 0x18);
                } else {
                    _0x1e7d98['fillStyle'] = 'rgba(180,\x200,\x200,\x200.8)';
                    _0x1e7d98['beginPath']();
                    _0x1e7d98['arc'](_0x28f918, _0x1f61c3, 0x5, 0x0, Math['PI'] * 0x2);
                    _0x1e7d98['fill']();
                }
            }
        }
        if (_0x375672['complete'] && _0x375672['naturalWidth'] > 0x0) {
            const _0x2e75dc = _0xc93faf['MAP']['tileSize'];
            const _0x973a03 = _0x2e75dc * 0xa;
            const _0x509fea = _0xc93faf['MAP']['columns'] / 0x2 * _0x2e75dc - _0x973a03 / 0x2 - _0x442879;
            const _0xc0af1d = _0xc93faf['MAP']['rows'] / 0x2 * _0x2e75dc - _0x973a03 / 0x2 - _0x45435c;
            _0x1e7d98['imageSmoothingEnabled'] = ![];
            _0x1e7d98['drawImage'](_0x375672, _0x509fea, _0xc0af1d, _0x973a03, _0x973a03);
        }
        if (_0x2a6d3e['complete'] && _0x2a6d3e['naturalWidth'] > 0x0) {
            _0xc93faf['ENTITIES']['forEach'](_0x28689d => {
                if (_0x28689d['type'] !== 'table')
                    return;
                _0x1e7d98['save']();
                _0x1e7d98['imageSmoothingEnabled'] = ![];
                const _0x1182ea = _0x2a6d3e['naturalWidth'] >= _0x2a6d3e['naturalHeight'];
                const _0x3ca204 = _0x28689d['w'] >= _0x28689d['h'];
                if (_0x1182ea === _0x3ca204) {
                    _0x1e7d98['drawImage'](_0x2a6d3e, _0x28689d['x'] - _0x442879, _0x28689d['y'] - _0x45435c, _0x28689d['w'], _0x28689d['h']);
                } else {
                    _0x1e7d98['translate'](_0x28689d['x'] - _0x442879 + _0x28689d['w'] / 0x2, _0x28689d['y'] - _0x45435c + _0x28689d['h'] / 0x2);
                    _0x1e7d98['rotate'](Math['PI'] / 0x2);
                    _0x1e7d98['drawImage'](_0x2a6d3e, -_0x28689d['h'] / 0x2, -_0x28689d['w'] / 0x2, _0x28689d['h'], _0x28689d['w']);
                }
                _0x1e7d98['restore']();
            });
        } else {
            _0xc93faf['ENTITIES']['forEach'](_0x1842e9 => {
                if (_0x1842e9['type'] !== 'table')
                    return;
                _0x1e7d98['save']();
                _0x1e7d98['fillStyle'] = '#6b4423';
                _0x1e7d98['fillRect'](_0x1842e9['x'] - _0x442879, _0x1842e9['y'] - _0x45435c, _0x1842e9['w'], _0x1842e9['h']);
                _0x1e7d98['strokeStyle'] = '#422810';
                _0x1e7d98['lineWidth'] = 0x3;
                _0x1e7d98['strokeRect'](_0x1842e9['x'] - _0x442879 + 0x1, _0x1842e9['y'] - _0x45435c + 0x1, _0x1842e9['w'] - 0x2, _0x1842e9['h'] - 0x2);
                _0x1e7d98['fillStyle'] = '#82532a';
                _0x1e7d98['fillRect'](_0x1842e9['x'] - _0x442879 + 0x4, _0x1842e9['y'] - _0x45435c + 0x4, _0x1842e9['w'] - 0x8, _0x1842e9['h'] - 0x8);
                _0x1e7d98['restore']();
            });
        }
        if (_0x29bde8) {
            if (_0xc93faf['MAP']['wallChunks'] && _0xc93faf['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0xae8a7a = _0x76cb09; _0xae8a7a <= _0x815dc9; _0xae8a7a++) {
                    for (let _0x12d708 = _0x49b0c8; _0x12d708 <= _0x3a058c; _0x12d708++) {
                        if (!_0xc93faf['MAP']['wallChunks'][_0xae8a7a] || !_0xc93faf['MAP']['wallChunks'][_0xae8a7a][_0x12d708])
                            continue;
                        const _0x1d9b53 = _0x12d708 * _0xc93faf['MAP']['chunkSize'] - _0x442879;
                        const _0x5196b9 = _0xae8a7a * _0xc93faf['MAP']['chunkSize'] - _0x45435c;
                        _0x1e7d98['drawImage'](_0xc93faf['MAP']['wallChunks'][_0xae8a7a][_0x12d708], _0x1d9b53, _0x5196b9, _0xc93faf['MAP']['chunkSize'] + 0x1, _0xc93faf['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x2989a7 = _0x76cb09; _0x2989a7 <= _0x815dc9; _0x2989a7++) {
                for (let _0x980e81 = _0x49b0c8; _0x980e81 <= _0x3a058c; _0x980e81++) {
                    const _0x4e58be = _0x980e81 * _0xc93faf['MAP']['chunkSize'] - _0x442879;
                    const _0x203c5d = _0x2989a7 * _0xc93faf['MAP']['chunkSize'] - _0x45435c;
                    _0x1e7d98['drawImage'](_0xc93faf['MAP']['fgChunks'][_0x2989a7][_0x980e81], _0x4e58be, _0x203c5d, _0xc93faf['MAP']['chunkSize'] + 0x1, _0xc93faf['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x162b34 = _0xc93faf['GAME_STATE'] === 'NIGHT' && (_0x471929 === 'Skinwalker' || _0x471929 === 'Blackmailer') && !_0x9ab68e['isDead'];
        const _0x356054 = _0x9ab68e['x'] - _0x442879 + _0x9ab68e['width'] / 0x2;
        const _0x148d15 = _0x9ab68e['y'] - _0x45435c + _0x9ab68e['height'] / 0x2;
        const _0x1e3b28 = _0x9ab68e['width'] * _0x9ab68e['scale'] * 1.3;
        const _0x327e08 = _0x9ab68e['height'] * _0x9ab68e['scale'] * 1.3;
        const _0x42ca40 = _0x561c5b('assets/arrow.png');
        const _0x3befbf = _0x561c5b('assets/tape.png');
        for (const _0x25c168 in _0x138367) {
            const _0xbfd6e2 = _0x138367[_0x25c168];
            if (_0xbfd6e2['isDead'])
                continue;
            const _0x3989ed = parseInt(_0x25c168);
            const _0x2debbc = (_0xbfd6e2['renderX'] ?? _0xbfd6e2['x']) - _0x442879 + _0xbfd6e2['width'] / 0x2;
            const _0x47d644 = (_0xbfd6e2['renderY'] ?? _0xbfd6e2['y']) - _0x45435c + _0xbfd6e2['height'] / 0x2;
            const _0x42ecd1 = Math['min'](0x2, Math['max'](0.3, _0xbfd6e2['scale'] || 0x1));
            const _0x1c24d5 = _0xbfd6e2['width'] * _0x42ecd1 * 1.3;
            const _0x3333f2 = _0xbfd6e2['height'] * _0x42ecd1 * 1.3;
            _0x1e7d98['save']();
            try {
                _0x1e7d98['translate'](_0x2debbc, _0x47d644);
                _0x1e7d98['rotate'](_0xbfd6e2['renderAngle'] ?? 0x0);
                if (_0xbfd6e2['isDark'])
                    _0x1e7d98['filter'] = 'brightness(0)';
                _0x3e5039(_0x1e7d98, _0xbfd6e2['body'], _0xbfd6e2['eyes'], _0x1c24d5, _0x3333f2);
                if (_0x3df085['has'](_0x3989ed) && _0x1f7763['complete'] && _0x1f7763['naturalWidth'] > 0x0) {
                    _0x1e7d98['drawImage'](_0x1f7763, -_0x1c24d5 / 0x2, -_0x3333f2 / 0x2, _0x1c24d5, _0x3333f2);
                }
                if (_0xbfd6e2['hasArrow'] && _0xc93faf['GAME_STATE'] === 'NIGHT' && _0x42ca40['complete'] && _0x42ca40['naturalWidth'] > 0x0) {
                    _0x1e7d98['drawImage'](_0x42ca40, -_0x1c24d5 / 0x2, -_0x3333f2 / 0x2, _0x1c24d5, _0x3333f2);
                }
                if ((_0xbfd6e2['isBlackmailed'] || _0x6f01bf['has'](_0x3989ed)) && _0x3befbf['complete'] && _0x3befbf['naturalWidth'] > 0x0) {
                    _0x1e7d98['drawImage'](_0x3befbf, -_0x1c24d5 / 0x2, -_0x3333f2 / 0x2, _0x1c24d5, _0x3333f2);
                }
                if (_0xbfd6e2['isDark'])
                    _0x1e7d98['filter'] = 'none';
            } finally {
                _0x1e7d98['restore']();
            }
            if (!_0x4d8042((_0xbfd6e2['renderX'] ?? _0xbfd6e2['x']) + _0xbfd6e2['width'] / 0x2, (_0xbfd6e2['renderY'] ?? _0xbfd6e2['y']) + _0xbfd6e2['height'] / 0x2)) {
                _0x1e7d98['textAlign'] = 'center';
                _0x1e7d98['lineJoin'] = 'round';
                _0x1e7d98['lineWidth'] = 0x3;
                _0x1e7d98['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1e7d98['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x3c8c15 = '#ffffff';
                if (_0xbfd6e2['isBlackmailed'] || _0x6f01bf['has'](_0x3989ed)) {
                    _0x3c8c15 = '#ff4444';
                } else if (_0x3df085['has'](_0x3989ed)) {
                    _0x3c8c15 = '#cc88ff';
                }
                _0x1e7d98['fillStyle'] = _0x3c8c15;
                const _0x25a496 = _0xbfd6e2['isDark'] ? '???' : _0xbfd6e2['name'] + (_0xbfd6e2['isOwner'] ? '\x20[🗝️]' : '');
                _0x1e7d98['strokeText'](_0x25a496, _0x2debbc, _0x47d644 - _0x3333f2 / 0x2 - 0x10);
                _0x1e7d98['fillText'](_0x25a496, _0x2debbc, _0x47d644 - _0x3333f2 / 0x2 - 0x10);
            }
        }
        if (!_0x9ab68e['isDead']) {
            _0x1e7d98['save']();
            try {
                _0x1e7d98['translate'](_0x356054, _0x148d15);
                _0x1e7d98['rotate'](_0x9ab68e['angle']);
                if (_0x162b34)
                    _0x1e7d98['filter'] = 'brightness(0)';
                _0x3e5039(_0x1e7d98, _0x528545, _0x4b35c1, _0x1e3b28, _0x327e08);
                if (_0x3df085['has'](_0x13b1ed) && _0x1f7763['complete'] && _0x1f7763['naturalWidth'] > 0x0) {
                    _0x1e7d98['drawImage'](_0x1f7763, -_0x1e3b28 / 0x2, -_0x327e08 / 0x2, _0x1e3b28, _0x327e08);
                }
                if (_0x9ab68e['hasArrow'] && _0xc93faf['GAME_STATE'] === 'NIGHT' && _0x42ca40['complete'] && _0x42ca40['naturalWidth'] > 0x0) {
                    _0x1e7d98['drawImage'](_0x42ca40, -_0x1e3b28 / 0x2, -_0x327e08 / 0x2, _0x1e3b28, _0x327e08);
                }
                if (_0x6f01bf['has'](_0x13b1ed) && _0x3befbf['complete'] && _0x3befbf['naturalWidth'] > 0x0) {
                    _0x1e7d98['drawImage'](_0x3befbf, -_0x1e3b28 / 0x2, -_0x327e08 / 0x2, _0x1e3b28, _0x327e08);
                }
                if (_0x162b34)
                    _0x1e7d98['filter'] = 'none';
            } finally {
                _0x1e7d98['restore']();
            }
            if (!_0x4d8042(_0x9ab68e['x'] + _0x9ab68e['width'] / 0x2, _0x9ab68e['y'] + _0x9ab68e['height'] / 0x2)) {
                _0x1e7d98['textAlign'] = 'center';
                _0x1e7d98['lineJoin'] = 'round';
                _0x1e7d98['lineWidth'] = 0x3;
                _0x1e7d98['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1e7d98['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x392f40 = '#ffffff';
                if (_0x6f01bf['has'](_0x13b1ed)) {
                    _0x392f40 = '#ff4444';
                } else if (_0x3df085['has'](_0x13b1ed)) {
                    _0x392f40 = '#cc88ff';
                }
                _0x1e7d98['fillStyle'] = _0x392f40;
                const _0x69af54 = _0x162b34 ? '???' : _0x57f265 + (_0x49d73a ? '\x20[🗝️]' : '');
                _0x1e7d98['strokeText'](_0x69af54, _0x356054, _0x148d15 - _0x327e08 / 0x2 - 0x10);
                _0x1e7d98['fillText'](_0x69af54, _0x356054, _0x148d15 - _0x327e08 / 0x2 - 0x10);
            }
        }
        if (_0xc93faf['MAP']['wallChunks'] && _0xc93faf['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x1b1236 = _0x76cb09; _0x1b1236 <= _0x815dc9; _0x1b1236++)
                for (let _0x5cf283 = _0x49b0c8; _0x5cf283 <= _0x3a058c; _0x5cf283++) {
                    if (!_0xc93faf['MAP']['wallChunks'][_0x1b1236] || !_0xc93faf['MAP']['wallChunks'][_0x1b1236][_0x5cf283])
                        continue;
                    const _0x21935d = _0x5cf283 * _0xc93faf['MAP']['chunkSize'] - _0x442879;
                    const _0x543cb0 = _0x1b1236 * _0xc93faf['MAP']['chunkSize'] - _0x45435c;
                    _0x1e7d98['drawImage'](_0xc93faf['MAP']['wallChunks'][_0x1b1236][_0x5cf283], _0x21935d, _0x543cb0, _0xc93faf['MAP']['chunkSize'] + 0x1, _0xc93faf['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x112245 of _0xc93faf['ENTITIES']) {
            if (_0x112245['type'] !== 'npc')
                continue;
            const _0x52926a = _0x112245['x'] - _0x442879 + _0x112245['w'] / 0x2;
            const _0x214d54 = _0x112245['y'] - _0x45435c + _0x112245['h'] / 0x2;
            const _0x3a958b = _0x112245['w'];
            const _0x17c5b7 = _0x112245['h'];
            _0x1e7d98['save']();
            _0x1e7d98['translate'](_0x52926a, _0x214d54);
            _0x1e7d98['rotate'](_0x112245['angle'] !== undefined ? _0x112245['angle'] : 0x0);
            _0x3e5039(_0x1e7d98, _0x112245['body'] || 'yanito932.png', _0x112245['eyes'], _0x3a958b, _0x17c5b7);
            _0x1e7d98['restore']();
            _0x1e7d98['textAlign'] = 'center';
            _0x1e7d98['lineJoin'] = 'round';
            _0x1e7d98['lineWidth'] = 0x3;
            _0x1e7d98['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x1e7d98['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
            _0x1e7d98['fillStyle'] = '#aaaaaa';
            _0x1e7d98['strokeText'](_0x112245['name'] || 'NPC', _0x52926a, _0x214d54 - _0x17c5b7 / 0x2 - 0x10);
            _0x1e7d98['fillText'](_0x112245['name'] || 'NPC', _0x52926a, _0x214d54 - _0x17c5b7 / 0x2 - 0x10);
        }
        if (_0x9ab68e['isDead']) {
            for (const _0x447dc0 in _0x138367) {
                const _0xfcc2ce = _0x138367[_0x447dc0];
                if (!_0xfcc2ce['isDead'])
                    continue;
                const _0x56e207 = (_0xfcc2ce['renderX'] ?? _0xfcc2ce['x']) - _0x442879 + _0xfcc2ce['width'] / 0x2;
                const _0xbbe708 = (_0xfcc2ce['renderY'] ?? _0xfcc2ce['y']) - _0x45435c + _0xfcc2ce['height'] / 0x2;
                const _0x26f75b = _0xfcc2ce['width'] * (_0xfcc2ce['scale'] || 0x1) * 1.3;
                const _0x3f95cc = _0xfcc2ce['height'] * (_0xfcc2ce['scale'] || 0x1) * 1.3;
                _0x1e7d98['save']();
                try {
                    _0x1e7d98['translate'](_0x56e207, _0xbbe708);
                    _0x1e7d98['rotate'](_0xfcc2ce['renderAngle'] ?? 0x0);
                    _0x1e7d98['globalAlpha'] = 0.3;
                    _0x3e5039(_0x1e7d98, _0xfcc2ce['body'], _0xfcc2ce['eyes'], _0x26f75b, _0x3f95cc);
                } finally {
                    _0x1e7d98['restore']();
                }
                if (!_0x4d8042((_0xfcc2ce['renderX'] ?? _0xfcc2ce['x']) + _0xfcc2ce['width'] / 0x2, (_0xfcc2ce['renderY'] ?? _0xfcc2ce['y']) + _0xfcc2ce['height'] / 0x2)) {
                    _0x1e7d98['save']();
                    _0x1e7d98['globalAlpha'] = 0.3;
                    _0x1e7d98['textAlign'] = 'center';
                    _0x1e7d98['lineJoin'] = 'round';
                    _0x1e7d98['lineWidth'] = 0x3;
                    _0x1e7d98['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x1e7d98['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                    _0x1e7d98['fillStyle'] = '#ffffff';
                    const _0x4a8fbc = _0xfcc2ce['name'] + (_0xfcc2ce['isOwner'] ? '\x20[🗝️]' : '');
                    _0x1e7d98['strokeText'](_0x4a8fbc, _0x56e207, _0xbbe708 - _0x3f95cc / 0x2 - 0x10);
                    _0x1e7d98['fillText'](_0x4a8fbc, _0x56e207, _0xbbe708 - _0x3f95cc / 0x2 - 0x10);
                    _0x1e7d98['restore']();
                }
            }
            _0x1e7d98['save']();
            try {
                _0x1e7d98['translate'](_0x356054, _0x148d15);
                _0x1e7d98['rotate'](_0x9ab68e['angle']);
                _0x1e7d98['globalAlpha'] = 0.3;
                _0x3e5039(_0x1e7d98, _0x528545, _0x4b35c1, _0x1e3b28, _0x327e08);
            } finally {
                _0x1e7d98['restore']();
            }
            if (!_0x4d8042(_0x9ab68e['x'] + _0x9ab68e['width'] / 0x2, _0x9ab68e['y'] + _0x9ab68e['height'] / 0x2)) {
                _0x1e7d98['save']();
                _0x1e7d98['globalAlpha'] = 0.3;
                _0x1e7d98['textAlign'] = 'center';
                _0x1e7d98['lineJoin'] = 'round';
                _0x1e7d98['lineWidth'] = 0x3;
                _0x1e7d98['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1e7d98['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                _0x1e7d98['fillStyle'] = '#ffffff';
                const _0x3d6d9b = _0x57f265 + (_0x49d73a ? '\x20[🗝️]' : '');
                _0x1e7d98['strokeText'](_0x3d6d9b, _0x356054, _0x148d15 - _0x327e08 / 0x2 - 0x10);
                _0x1e7d98['fillText'](_0x3d6d9b, _0x356054, _0x148d15 - _0x327e08 / 0x2 - 0x10);
                _0x1e7d98['restore']();
            }
        }
        for (let _0x49cb68 = _0x76cb09; _0x49cb68 <= _0x815dc9; _0x49cb68++)
            for (let _0x13abbd = _0x49b0c8; _0x13abbd <= _0x3a058c; _0x13abbd++) {
                const _0x56c81e = _0x13abbd * _0xc93faf['MAP']['chunkSize'] - _0x442879;
                const _0x2572e6 = _0x49cb68 * _0xc93faf['MAP']['chunkSize'] - _0x45435c;
                _0x1e7d98['drawImage'](_0xc93faf['MAP']['fgChunks'][_0x49cb68][_0x13abbd], _0x56c81e, _0x2572e6, _0xc93faf['MAP']['chunkSize'] + 0x1, _0xc93faf['MAP']['chunkSize'] + 0x1);
            }
        if (_0xc93faf['EDITOR']['enabled'] && _0xc93faf['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x1cc88e = _0xc93faf['INPUTS']['mouseX'] / _0xc93faf['SYSTEM']['viewScale'] + _0xc93faf['CAMERA']['x'];
            const _0x4b900e = _0xc93faf['INPUTS']['mouseY'] / _0xc93faf['SYSTEM']['viewScale'] + _0xc93faf['CAMERA']['y'];
            const _0x4d2bbb = Math['floor'](_0x1cc88e / _0xc93faf['MAP']['tileSize']);
            const _0x512fb2 = Math['floor'](_0x4b900e / _0xc93faf['MAP']['tileSize']);
            if (_0x4d2bbb >= 0x0 && _0x4d2bbb < _0xc93faf['MAP']['columns'] && _0x512fb2 >= 0x0 && _0x512fb2 < _0xc93faf['MAP']['rows']) {
                const _0x298c72 = _0x4d2bbb * _0xc93faf['MAP']['tileSize'] - _0x442879;
                const _0x3585e = _0x512fb2 * _0xc93faf['MAP']['tileSize'] - _0x45435c;
                _0x1e7d98['save']();
                _0x1e7d98['globalAlpha'] = 0.5;
                if (_0xc93faf['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x164060 = _0xc93faf['EDITOR']['selectedTileGid'] - 0x1;
                    _0x1e7d98['drawImage'](_0x47ddbe, _0x164060 % _0xc93faf['MAP']['tilesetCols'] * _0xc93faf['MAP']['tileSize'], Math['floor'](_0x164060 / _0xc93faf['MAP']['tilesetCols']) * _0xc93faf['MAP']['tileSize'], _0xc93faf['MAP']['tileSize'], _0xc93faf['MAP']['tileSize'], _0x298c72, _0x3585e, _0xc93faf['MAP']['tileSize'], _0xc93faf['MAP']['tileSize']);
                } else {
                    _0x1e7d98['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x1e7d98['fillRect'](_0x298c72, _0x3585e, _0xc93faf['MAP']['tileSize'], _0xc93faf['MAP']['tileSize']);
                }
                _0x1e7d98['restore']();
            }
        }
        _0x383392(_0x1e7d98, _0x442879, _0x45435c);
        if (_0x273aba > 0x0) {
            _0x1e7d98['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x273aba + ')';
            _0x1e7d98['fillRect'](0x0, 0x0, _0xc93faf['CAMERA']['width'], _0xc93faf['CAMERA']['height']);
        }
        for (const _0x4b230a in _0x138367) {
            const _0x4f78cc = _0x138367[_0x4b230a];
            if (_0x4f78cc['isDead'] && !_0x9ab68e['isDead'])
                continue;
            const _0x226291 = (_0x4f78cc['renderX'] ?? _0x4f78cc['x']) - _0x442879 + _0x4f78cc['width'] / 0x2;
            const _0x46b66e = (_0x4f78cc['renderY'] ?? _0x4f78cc['y']) - _0x45435c + _0x4f78cc['height'] / 0x2;
            _0x5e6879(_0x1e7d98, _0x4f78cc['chats'], _0x226291, _0x46b66e - _0x4f78cc['height'] / 0x2 - 0x20);
        }
        _0x5e6879(_0x1e7d98, _0x9ab68e['chats'], _0x356054, _0x148d15 - _0x9ab68e['height'] / 0x2 - 0x20);
        if (_0x4bee5b > 0x0) {
            _0x1e7d98['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x4bee5b + ')';
            _0x1e7d98['fillRect'](0x0, 0x0, _0xc93faf['CAMERA']['width'], _0xc93faf['CAMERA']['height']);
        }
    } finally {
        _0x1e7d98['restore']();
    }
}
function _0x40ed03(_0x3f0799) {
    if (!_0xc93faf['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x40ed03);
    let _0x27ddbc = (_0x3f0799 - _0xc93faf['SYSTEM']['lastTime']) / 0x3e8;
    _0xc93faf['SYSTEM']['lastTime'] = _0x3f0799;
    if (_0x27ddbc > 0.1)
        _0x27ddbc = 0.1;
    if (_0x27ddbc < 0x0 || isNaN(_0x27ddbc))
        _0x27ddbc = 0.016;
    if (_0x29bde8) {
        _0x4ce644(_0x27ddbc);
        _0x4e5e01();
        return;
    }
    if (!_0x13b1ed)
        return;
    _0x534ea4(_0x27ddbc);
    _0x190514['tick'](_0x3f0799);
    _0x4e5e01();
}
function _0x3c5025() {
    if (_0x47ddbe['complete'] && _0x47ddbe['naturalWidth'] > 0x0) {
        _0xc93faf['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x5d4bdd = Math['ceil'](_0xc93faf['MAP']['columns'] * _0xc93faf['MAP']['tileSize'] / _0xc93faf['MAP']['chunkSize']);
    const _0x2f1c55 = Math['ceil'](_0xc93faf['MAP']['rows'] * _0xc93faf['MAP']['tileSize'] / _0xc93faf['MAP']['chunkSize']);
    _0xc93faf['MAP']['bgChunks'] = [];
    _0xc93faf['MAP']['fgChunks'] = [];
    _0xc93faf['MAP']['wallChunks'] = [];
    for (let _0x1d2c11 = 0x0; _0x1d2c11 < _0x2f1c55; _0x1d2c11++) {
        _0xc93faf['MAP']['bgChunks'][_0x1d2c11] = [];
        _0xc93faf['MAP']['fgChunks'][_0x1d2c11] = [];
        _0xc93faf['MAP']['wallChunks'][_0x1d2c11] = [];
        for (let _0x5add0c = 0x0; _0x5add0c < _0x5d4bdd; _0x5add0c++) {
            const _0x55ecf3 = document['createElement']('canvas');
            _0x55ecf3['width'] = _0x55ecf3['height'] = _0xc93faf['MAP']['chunkSize'];
            const _0x538d6b = document['createElement']('canvas');
            _0x538d6b['width'] = _0x538d6b['height'] = _0xc93faf['MAP']['chunkSize'];
            const _0x4d72ce = document['createElement']('canvas');
            _0x4d72ce['width'] = _0x4d72ce['height'] = _0xc93faf['MAP']['chunkSize'];
            _0xc93faf['MAP']['bgChunks'][_0x1d2c11][_0x5add0c] = _0x55ecf3;
            _0xc93faf['MAP']['fgChunks'][_0x1d2c11][_0x5add0c] = _0x538d6b;
            _0xc93faf['MAP']['wallChunks'][_0x1d2c11][_0x5add0c] = _0x4d72ce;
            _0x3e98aa(_0x5add0c, _0x1d2c11);
        }
    }
}
function _0x3e98aa(_0xc1fb8a, _0x5a51c6) {
    const _0x1ca754 = _0xc93faf['MAP']['bgChunks'][_0x5a51c6][_0xc1fb8a]['getContext']('2d', { 'alpha': !![] });
    const _0x684d30 = _0xc93faf['MAP']['fgChunks'][_0x5a51c6][_0xc1fb8a]['getContext']('2d', { 'alpha': !![] });
    const _0x1c3715 = _0xc93faf['MAP']['wallChunks'][_0x5a51c6] && _0xc93faf['MAP']['wallChunks'][_0x5a51c6][_0xc1fb8a] ? _0xc93faf['MAP']['wallChunks'][_0x5a51c6][_0xc1fb8a]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x1ca754['imageSmoothingEnabled'] = _0x684d30['imageSmoothingEnabled'] = ![];
    if (_0x1c3715)
        _0x1c3715['imageSmoothingEnabled'] = ![];
    _0x1ca754['clearRect'](0x0, 0x0, _0xc93faf['MAP']['chunkSize'], _0xc93faf['MAP']['chunkSize']);
    _0x684d30['clearRect'](0x0, 0x0, _0xc93faf['MAP']['chunkSize'], _0xc93faf['MAP']['chunkSize']);
    if (_0x1c3715)
        _0x1c3715['clearRect'](0x0, 0x0, _0xc93faf['MAP']['chunkSize'], _0xc93faf['MAP']['chunkSize']);
    const _0x270032 = Math['floor'](_0xc1fb8a * _0xc93faf['MAP']['chunkSize'] / _0xc93faf['MAP']['tileSize']);
    const _0x58c58d = Math['ceil']((_0xc1fb8a + 0x1) * _0xc93faf['MAP']['chunkSize'] / _0xc93faf['MAP']['tileSize']);
    const _0x435a7b = Math['floor'](_0x5a51c6 * _0xc93faf['MAP']['chunkSize'] / _0xc93faf['MAP']['tileSize']);
    const _0x1232d7 = Math['ceil']((_0x5a51c6 + 0x1) * _0xc93faf['MAP']['chunkSize'] / _0xc93faf['MAP']['tileSize']);
    const _0x39e01f = 0.5;
    const _0xc7f8c4 = _0xc93faf['MAP']['tileSize'] - _0x39e01f * 0x2;
    _0xc93faf['MAP']['layers']['forEach'](_0xabb073 => {
        const _0x130d59 = _0xabb073['name'] === 'walls';
        const _0x8080b3 = _0xabb073['name'] === 'trees' ? _0x684d30 : _0x130d59 ? _0x1c3715 || _0x1ca754 : _0x1ca754;
        for (let _0x2d96eb = Math['max'](0x0, _0x435a7b); _0x2d96eb < Math['min'](_0xc93faf['MAP']['rows'], _0x1232d7); _0x2d96eb++) {
            for (let _0x4b1dac = Math['max'](0x0, _0x270032); _0x4b1dac < Math['min'](_0xc93faf['MAP']['columns'], _0x58c58d); _0x4b1dac++) {
                let _0x5bc324 = _0xabb073['data'][_0x2d96eb * _0xc93faf['MAP']['columns'] + _0x4b1dac];
                if (_0xabb073['name'] === 'floor2' && _0xc93faf['MAP']['doors'] && _0xc93faf['MAP']['doors'][_0x2d96eb * _0xc93faf['MAP']['columns'] + _0x4b1dac]) {
                    _0x5bc324 = 0x2;
                }
                if (_0x5bc324 > 0x0) {
                    const _0x570dab = _0x5bc324 - 0x1;
                    const _0xdef8fb = _0x570dab % _0xc93faf['MAP']['tilesetCols'] * _0xc93faf['MAP']['tileSize'] + _0x39e01f;
                    const _0xa55f9c = Math['floor'](_0x570dab / _0xc93faf['MAP']['tilesetCols']) * _0xc93faf['MAP']['tileSize'] + _0x39e01f;
                    const _0x46c792 = _0x4b1dac * _0xc93faf['MAP']['tileSize'] - _0xc1fb8a * _0xc93faf['MAP']['chunkSize'];
                    const _0x293778 = _0x2d96eb * _0xc93faf['MAP']['tileSize'] - _0x5a51c6 * _0xc93faf['MAP']['chunkSize'];
                    if (_0x5bc324 === 0x4) {
                        const _0x19d966 = 0x1;
                        const _0x422777 = _0x19d966 % _0xc93faf['MAP']['tilesetCols'] * _0xc93faf['MAP']['tileSize'] + _0x39e01f;
                        const _0x267510 = Math['floor'](_0x19d966 / _0xc93faf['MAP']['tilesetCols']) * _0xc93faf['MAP']['tileSize'] + _0x39e01f;
                        _0x1ca754['drawImage'](_0x47ddbe, _0x422777, _0x267510, _0xc7f8c4, _0xc7f8c4, _0x46c792, _0x293778, _0xc93faf['MAP']['tileSize'], _0xc93faf['MAP']['tileSize']);
                        let _0x1228ca = _0xc93faf['MAP']['doors'] ? _0xc93faf['MAP']['doors'][_0x2d96eb * _0xc93faf['MAP']['columns'] + _0x4b1dac] : null;
                        if (!_0x1228ca) {
                            const _0x3b3a56 = _0xc93faf['MAP']['layers']['find'](_0x51c3ab => _0x51c3ab['name'] === 'walls');
                            const _0x10ffbc = _0x2d96eb > 0x0 && _0x3b3a56 && _0x3b3a56['data'][(_0x2d96eb - 0x1) * _0xc93faf['MAP']['columns'] + _0x4b1dac] > 0x0;
                            const _0x5e2854 = _0x2d96eb < _0xc93faf['MAP']['rows'] - 0x1 && _0x3b3a56 && _0x3b3a56['data'][(_0x2d96eb + 0x1) * _0xc93faf['MAP']['columns'] + _0x4b1dac] > 0x0;
                            const _0x3a50c6 = _0x4b1dac > 0x0 && _0x3b3a56 && _0x3b3a56['data'][_0x2d96eb * _0xc93faf['MAP']['columns'] + _0x4b1dac - 0x1] > 0x0;
                            const _0xc7bcca = _0x4b1dac < _0xc93faf['MAP']['columns'] - 0x1 && _0x3b3a56 && _0x3b3a56['data'][_0x2d96eb * _0xc93faf['MAP']['columns'] + _0x4b1dac + 0x1] > 0x0;
                            if (_0x3a50c6 && _0xc7bcca)
                                _0x1228ca = _0x2d96eb < _0xc93faf['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x10ffbc && _0x5e2854)
                                _0x1228ca = _0x4b1dac < _0xc93faf['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0xe0789b = 0x0;
                        if (_0x1228ca === 'bottom')
                            _0xe0789b = Math['PI'] / 0x2;
                        else if (_0x1228ca === 'left')
                            _0xe0789b = Math['PI'];
                        else if (_0x1228ca === 'top')
                            _0xe0789b = -Math['PI'] / 0x2;
                        else if (_0x1228ca === 'right')
                            _0xe0789b = 0x0;
                        if (_0xe0789b !== 0x0) {
                            _0x8080b3['save']();
                            _0x8080b3['translate'](_0x46c792 + _0xc93faf['MAP']['tileSize'] / 0x2, _0x293778 + _0xc93faf['MAP']['tileSize'] / 0x2);
                            _0x8080b3['rotate'](_0xe0789b);
                            _0x8080b3['drawImage'](_0x47ddbe, _0xdef8fb, _0xa55f9c, _0xc7f8c4, _0xc7f8c4, -_0xc93faf['MAP']['tileSize'] / 0x2, -_0xc93faf['MAP']['tileSize'] / 0x2, _0xc93faf['MAP']['tileSize'], _0xc93faf['MAP']['tileSize']);
                            _0x8080b3['restore']();
                        } else {
                            _0x8080b3['drawImage'](_0x47ddbe, _0xdef8fb, _0xa55f9c, _0xc7f8c4, _0xc7f8c4, _0x46c792, _0x293778, _0xc93faf['MAP']['tileSize'], _0xc93faf['MAP']['tileSize']);
                        }
                    } else {
                        _0x8080b3['drawImage'](_0x47ddbe, _0xdef8fb, _0xa55f9c, _0xc7f8c4, _0xc7f8c4, _0x46c792, _0x293778, _0xc93faf['MAP']['tileSize'], _0xc93faf['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x1de614() {
    _0x47ddbe['crossOrigin'] = 'Anonymous';
    _0x47ddbe['onload'] = () => {
        _0xc93faf['MAP']['tilesetCols'] = 0x3;
        if (_0xc93faf['MAP']['columns'] > 0x0 && _0xc93faf['MAP']['layers'] && _0xc93faf['MAP']['layers']['length'] > 0x0) {
            _0x3c5025();
        }
        _0x469239();
    };
    _0x47ddbe['onerror'] = () => {
        _0xc93faf['MAP']['tilesetCols'] = 0x1;
        _0x469239();
    };
    _0x47ddbe['src'] = 'assets/tilesheet.png';
    _0x375672['crossOrigin'] = 'Anonymous';
    _0x375672['onload'] = _0x469239;
    _0x375672['onerror'] = () => {
        _0x469239();
    };
    _0x375672['src'] = 'assets/center.png';
    _0x2a6d3e['crossOrigin'] = 'Anonymous';
    _0x2a6d3e['onload'] = _0x469239;
    _0x2a6d3e['onerror'] = () => {
        _0x469239();
    };
    _0x2a6d3e['src'] = 'assets/table.png';
}
function _0x469239() {
    _0xc93faf['SYSTEM']['assetsLoaded']++;
    if (_0xc93faf['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0xc93faf['MAP']['columns'] > 0x0 && _0xc93faf['MAP']['layers'] && _0xc93faf['MAP']['layers']['length'] > 0x0) {
            _0x3c5025();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x962535();
    }
}
function _0x16d803(_0x47e5f6, _0x52f2af) {
    if (!_0x49d73a || !_0x28fa48)
        return;
    const _0x1abef5 = _0x47e5f6 / _0xc93faf['SYSTEM']['viewScale'] + _0xc93faf['CAMERA']['x'];
    const _0x2864a7 = _0x52f2af / _0xc93faf['SYSTEM']['viewScale'] + _0xc93faf['CAMERA']['y'];
    const _0x5bdedd = Math['floor'](_0x1abef5 / _0xc93faf['MAP']['tileSize']);
    const _0x236f61 = Math['floor'](_0x2864a7 / _0xc93faf['MAP']['tileSize']);
    if (_0x5bdedd >= 0x0 && _0x5bdedd < _0xc93faf['MAP']['columns'] && _0x236f61 >= 0x0 && _0x236f61 < _0xc93faf['MAP']['rows'])
        _0x28fa48['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0xc93faf['EDITOR']['selectedLayer'],
            'col': _0x5bdedd,
            'row': _0x236f61,
            'gid': _0xc93faf['EDITOR']['selectedTileGid']
        }));
}
function _0x436afc() {
    const _0x267daf = document['getElementById']('palette');
    if (!_0x267daf || _0x267daf['children']['length'] > 0x0)
        return;
    const _0x456009 = 0x40;
    const _0x594a8a = _0x47ddbe;
    const _0x29f204 = document['createElement']('div');
    _0x29f204['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0xf8dfd6 = document['createElement']('canvas');
    _0xf8dfd6['width'] = 0xc0;
    _0xf8dfd6['height'] = 0xa0;
    _0xf8dfd6['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x29f204['appendChild'](_0xf8dfd6);
    const _0xc3a55 = document['createElement']('div');
    _0xc3a55['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x29f204['appendChild'](_0xc3a55);
    let _0x1bd5ca = 0x0, _0x4e9007 = 0x0;
    let _0x329c0b = ![], _0x196fe5 = 0x0, _0x2a8161 = 0x0, _0x5c830d = 0x0, _0x3b6087 = 0x0;
    function _0x297f02() {
        const _0x335b78 = _0xf8dfd6['getContext']('2d');
        _0x335b78['clearRect'](0x0, 0x0, _0xf8dfd6['width'], _0xf8dfd6['height']);
        _0x335b78['imageSmoothingEnabled'] = ![];
        if (_0x594a8a['complete'] && _0x594a8a['naturalWidth'] > 0x0) {
            _0x335b78['drawImage'](_0x594a8a, _0x1bd5ca, _0x4e9007, _0xf8dfd6['width'], _0xf8dfd6['height'], 0x0, 0x0, _0xf8dfd6['width'], _0xf8dfd6['height']);
        }
        _0x335b78['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x335b78['lineWidth'] = 0x1;
        const _0x1e1e83 = Math['floor'](_0x1bd5ca / _0x456009);
        const _0x39bad3 = Math['floor'](_0x4e9007 / _0x456009);
        for (let _0xbd41d6 = _0x1e1e83; _0xbd41d6 <= _0x1e1e83 + Math['ceil'](_0xf8dfd6['width'] / _0x456009) + 0x1; _0xbd41d6++) {
            const _0x43e34b = _0xbd41d6 * _0x456009 - _0x1bd5ca;
            _0x335b78['beginPath']();
            _0x335b78['moveTo'](_0x43e34b, 0x0);
            _0x335b78['lineTo'](_0x43e34b, _0xf8dfd6['height']);
            _0x335b78['stroke']();
        }
        for (let _0x191482 = _0x39bad3; _0x191482 <= _0x39bad3 + Math['ceil'](_0xf8dfd6['height'] / _0x456009) + 0x1; _0x191482++) {
            const _0x5967ec = _0x191482 * _0x456009 - _0x4e9007;
            _0x335b78['beginPath']();
            _0x335b78['moveTo'](0x0, _0x5967ec);
            _0x335b78['lineTo'](_0xf8dfd6['width'], _0x5967ec);
            _0x335b78['stroke']();
        }
    }
    function _0x5bd84a() {
        const _0x4abc4d = Math['max'](0x1, Math['ceil'](_0x594a8a['naturalWidth'] / _0x456009));
        const _0x40a4ef = _0xc93faf['EDITOR']['selectedTileGid'];
        if (_0x40a4ef <= 0x0) {
            _0xc3a55['style']['display'] = 'none';
            return;
        }
        const _0x328139 = _0x40a4ef - 0x1;
        const _0x43839b = _0x328139 % _0x4abc4d;
        const _0x3430f7 = Math['floor'](_0x328139 / _0x4abc4d);
        const _0x68f9aa = _0x43839b * _0x456009 - _0x1bd5ca;
        const _0x1411b9 = _0x3430f7 * _0x456009 - _0x4e9007;
        _0xc3a55['style']['display'] = 'block';
        _0xc3a55['style']['left'] = _0x68f9aa + 'px';
        _0xc3a55['style']['top'] = _0x1411b9 + 'px';
    }
    _0x594a8a['onload'] = () => {
        _0x297f02();
        _0x5bd84a();
    };
    if (_0x594a8a['complete'] && _0x594a8a['naturalWidth'] > 0x0) {
        _0x297f02();
        _0x5bd84a();
    }
    _0x29f204['addEventListener']('mousedown', _0x4eb3db => {
        if (_0x4eb3db['button'] === 0x0) {
            _0x329c0b = !![];
            _0x196fe5 = _0x4eb3db['clientX'];
            _0x2a8161 = _0x4eb3db['clientY'];
            _0x5c830d = _0x1bd5ca;
            _0x3b6087 = _0x4e9007;
            _0x29f204['style']['cursor'] = 'grabbing';
            _0x4eb3db['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x4db39b => {
        if (!_0x329c0b)
            return;
        const _0x116e97 = _0x196fe5 - _0x4db39b['clientX'];
        const _0x131dd3 = _0x2a8161 - _0x4db39b['clientY'];
        const _0x52e791 = Math['max'](0x0, _0x594a8a['naturalWidth'] - _0xf8dfd6['width']);
        const _0xe9a301 = Math['max'](0x0, _0x594a8a['naturalHeight'] - _0xf8dfd6['height']);
        _0x1bd5ca = Math['max'](0x0, Math['min'](_0x52e791, _0x5c830d + _0x116e97));
        _0x4e9007 = Math['max'](0x0, Math['min'](_0xe9a301, _0x3b6087 + _0x131dd3));
        _0x297f02();
        _0x5bd84a();
    });
    window['addEventListener']('mouseup', _0x547254 => {
        if (_0x329c0b) {
            _0x329c0b = ![];
            _0x29f204['style']['cursor'] = 'grab';
        }
    });
    _0x29f204['addEventListener']('click', _0x190d98 => {
        const _0x36399e = _0x29f204['getBoundingClientRect']();
        const _0x55940f = _0x190d98['clientX'] - _0x36399e['left'] + _0x1bd5ca;
        const _0x32f2f0 = _0x190d98['clientY'] - _0x36399e['top'] + _0x4e9007;
        const _0x16a6c5 = Math['max'](0x1, Math['ceil'](_0x594a8a['naturalWidth'] / _0x456009));
        const _0x1568e5 = Math['floor'](_0x55940f / _0x456009);
        const _0x2e41a9 = Math['floor'](_0x32f2f0 / _0x456009);
        const _0x25c29c = _0x2e41a9 * _0x16a6c5 + _0x1568e5 + 0x1;
        _0xc93faf['EDITOR']['selectedTileGid'] = _0x25c29c;
        _0x5bd84a();
    });
    _0x267daf['appendChild'](_0x29f204);
    const _0x354537 = document['createElement']('div');
    _0x354537['className'] = 'tile-btn\x20eraser-btn';
    _0x354537['title'] = 'Eraser\x20(gid\x200)';
    _0x354537['onclick'] = () => {
        _0xc93faf['EDITOR']['selectedTileGid'] = 0x0;
        _0xc3a55['style']['display'] = 'none';
    };
    _0x267daf['appendChild'](_0x354537);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0xc93faf['EDITOR']['enabled'] = !_0xc93faf['EDITOR']['enabled'];
        const _0x9bc609 = document['getElementById']('editor-tools');
        if (_0xc93faf['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x9bc609['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x9bc609['style']['display'] = 'none';
        }
    });
    const _0x54de59 = document['getElementById']('start-game-btn');
    if (_0x54de59) {
        _0x54de59['addEventListener']('click', () => {
            if (_0x28fa48)
                _0x28fa48['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x1b04f8 = document['getElementById']('rolelist-toggle-btn');
    if (_0x1b04f8) {
        let _0xf09d9 = 'subalignments';
        _0x1b04f8['addEventListener']('click', () => {
            if (_0xf09d9 === 'subalignments')
                _0xf09d9 = 'precise';
            else if (_0xf09d9 === 'precise')
                _0xf09d9 = 'off';
            else
                _0xf09d9 = 'subalignments';
            _0x1b04f8['innerText'] = 'Role\x20List:\x20' + _0xf09d9['charAt'](0x0)['toUpperCase']() + _0xf09d9['slice'](0x1);
            if (_0x28fa48)
                _0x28fa48['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0xf09d9
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x171558 => {
        if (_0x171558['id'] === 'editor-toggle-btn' || _0x171558['id'] === 'start-game-btn' || _0x171558['id'] === 'rolelist-toggle-btn')
            return;
        _0x171558['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x1d2a38 => _0x1d2a38['classList']['remove']('active'));
            _0x171558['classList']['add']('active');
            _0xc93faf['EDITOR']['selectedLayer'] = _0x171558['dataset']['layer'];
        });
    });
}
function _0x3080eb(_0x47d80d) {
    if (_0x28fa48)
        _0x28fa48['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x47d80d
        }));
}
function _0x4b1693(_0x2d8cb8) {
    if (_0x28fa48)
        _0x28fa48['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x2d8cb8
        }));
}
function _0x4571ae(_0x4d97bb, _0x38b924, _0x2723f7, _0x27a2ec) {
    const _0x387dc2 = document['getElementById']('admin-panel');
    if (_0x387dc2)
        _0x387dc2['remove']();
    if (_0x387dc2 && _0x387dc2['dataset']['target'] === String(_0x4d97bb))
        return;
    const _0x409359 = document['createElement']('div');
    _0x409359['id'] = 'admin-panel';
    _0x409359['dataset']['target'] = String(_0x4d97bb);
    _0x409359['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0xaee499 = document['createElement']('div');
    _0xaee499['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0xaee499['textContent'] = _0x38b924;
    _0x409359['appendChild'](_0xaee499);
    const _0x4773a8 = document['createElement']('button');
    _0x4773a8['textContent'] = 'Kick';
    _0x4773a8['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x4773a8['onmouseenter'] = () => _0x4773a8['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x4773a8['onmouseleave'] = () => _0x4773a8['style']['background'] = 'transparent';
    _0x4773a8['onclick'] = () => {
        _0x3080eb(_0x4d97bb);
        _0x409359['remove']();
    };
    _0x409359['appendChild'](_0x4773a8);
    const _0x29ace4 = document['createElement']('button');
    _0x29ace4['textContent'] = 'Ban';
    _0x29ace4['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x29ace4['onmouseenter'] = () => _0x29ace4['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x29ace4['onmouseleave'] = () => _0x29ace4['style']['background'] = 'transparent';
    _0x29ace4['onclick'] = () => {
        _0x4b1693(_0x4d97bb);
        _0x409359['remove']();
    };
    _0x409359['appendChild'](_0x29ace4);
    document['body']['appendChild'](_0x409359);
    const _0x440707 = _0x409359['offsetWidth'] || 0x91;
    const _0x66e321 = _0x409359['offsetHeight'] || 0x50;
    let _0x1574df = _0x2723f7 - _0x440707;
    let _0x532c27 = _0x27a2ec;
    if (_0x1574df < 0x4)
        _0x1574df = _0x2723f7;
    if (_0x532c27 + _0x66e321 > window['innerHeight'] - 0x4)
        _0x532c27 = window['innerHeight'] - _0x66e321 - 0x4;
    _0x409359['style']['left'] = _0x1574df + 'px';
    _0x409359['style']['top'] = _0x532c27 + 'px';
    const _0x508a63 = _0x314c5d => {
        if (!_0x409359['contains'](_0x314c5d['target'])) {
            _0x409359['remove']();
            document['removeEventListener']('mousedown', _0x508a63);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x508a63), 0x0);
}
let _0xcc9183 = '';
function _0x2a70fc() {
    const _0x21d9a1 = document['getElementById']('leaderboard-list');
    if (!_0x21d9a1)
        return;
    let _0x198887 = _0x57f265 + '|' + _0x49d73a + '|' + _0x9ab68e['isDead'] + '|' + _0x3df085['size'];
    for (const _0x5407fb in _0x138367) {
        const _0x2abd0c = _0x138367[_0x5407fb];
        _0x198887 += '|' + _0x5407fb + ':' + _0x2abd0c['name'] + ':' + !!_0x2abd0c['isOwner'] + ':' + !!_0x2abd0c['isDead'] + ':' + _0x3df085['has'](parseInt(_0x5407fb));
    }
    if (_0x198887 === _0xcc9183)
        return;
    _0xcc9183 = _0x198887;
    _0x21d9a1['innerHTML'] = '';
    const _0x8d6dbd = document['createElement']('div');
    _0x8d6dbd['className'] = 'leaderboard-entry';
    const _0x264e61 = document['createElement']('span');
    _0x264e61['textContent'] = _0x57f265 + (_0x49d73a ? '\x20[🗝️]' : '');
    if (_0x3df085['has'](_0x13b1ed) && !_0x9ab68e['isDead']) {
        _0x264e61['style']['color'] = '#cc88ff';
    }
    _0x8d6dbd['appendChild'](_0x264e61);
    _0x21d9a1['appendChild'](_0x8d6dbd);
    for (const _0x276877 in _0x138367) {
        const _0xff2e2d = document['createElement']('div');
        _0xff2e2d['className'] = 'leaderboard-entry';
        const _0x50e020 = document['createElement']('span');
        _0x50e020['textContent'] = _0x138367[_0x276877]['name'] + (_0x138367[_0x276877]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x3df085['has'](parseInt(_0x276877)) && !_0x138367[_0x276877]['isDead']) {
            _0x50e020['style']['color'] = '#cc88ff';
        }
        _0xff2e2d['appendChild'](_0x50e020);
        if (_0x49d73a && !_0x138367[_0x276877]['isOwner']) {
            const _0x167f81 = _0x138367[_0x276877]['id'];
            const _0x3ca0a3 = _0x138367[_0x276877]['name'];
            _0xff2e2d['style']['cursor'] = 'context-menu';
            _0xff2e2d['addEventListener']('contextmenu', _0x59eb28 => {
                _0x59eb28['preventDefault']();
                _0x59eb28['stopPropagation']();
                _0x4571ae(_0x167f81, _0x3ca0a3, _0x59eb28['clientX'], _0x59eb28['clientY']);
            });
        }
        _0x21d9a1['appendChild'](_0xff2e2d);
    }
}
window['addEventListener']('resize', _0x962535);
function _0x962535() {
    _0x2670a5['width'] = window['innerWidth'];
    _0x2670a5['height'] = window['innerHeight'];
    _0xc93faf['SYSTEM']['viewScale'] = Math['max'](_0x2670a5['width'] / _0x521dac, _0x2670a5['height'] / _0x264e27);
    _0xc93faf['CAMERA']['width'] = _0x2670a5['width'] / _0xc93faf['SYSTEM']['viewScale'];
    _0xc93faf['CAMERA']['height'] = _0x2670a5['height'] / _0xc93faf['SYSTEM']['viewScale'];
    _0x1e7d98['imageSmoothingEnabled'] = ![];
}
function _0xb67847(_0x4e8b55) {
    if (_0x4e8b55['ctrlKey'] || _0x4e8b55['metaKey']) {
        if (_0x4e8b55['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x4e8b55['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x4e8b55['code'])) {
            _0x4e8b55['preventDefault']();
            _0x4e8b55['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0xb67847, { 'passive': ![] });
window['addEventListener']('keydown', _0xb67847, { 'passive': ![] });
window['addEventListener']('keydown', _0x38a9c4 => {
    const _0x928090 = _0x38a9c4['key']['toLowerCase']();
    if (_0x928090 === 'tab') {
        _0x38a9c4['preventDefault']();
        const _0xdc021 = document['getElementById']('will-ui');
        const _0x29e5a7 = document['getElementById']('will-input');
        if (_0xdc021['style']['display'] === 'flex') {
            _0xdc021['style']['display'] = 'none';
            if (_0xc93faf['GAME_STATE'] !== 'NIGHT' && _0x28fa48)
                _0x28fa48['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x29e5a7['value']
                }));
            _0x29e5a7['blur']();
        } else {
            if (_0xc93faf['GAME_STATE'] === 'NIGHT') {
                _0x192c88('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0xdc021['style']['display'] = 'flex';
            _0x29e5a7['focus']();
            for (let _0x3c94c5 in _0xc93faf['INPUTS']['keys'])
                _0xc93faf['INPUTS']['keys'][_0x3c94c5] = ![];
        }
        return;
    }
    if (_0x38a9c4['key'] === 'Enter') {
        if (_0x29bde8) {
            const _0x810ce8 = document['getElementById']('play-btn');
            if (_0x810ce8)
                _0x810ce8['click']();
            return;
        }
        if (!_0x28fa48 || _0x28fa48['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x3dd295 = document['getElementById']('chat-ui');
        const _0x5ed698 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x5ed698) {
            const _0x3857f6 = _0x5ed698['value']['trim']();
            if (_0x3857f6['length'] > 0x0) {
                _0x28fa48['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x3857f6
                }));
            }
            _0x5ed698['value'] = '';
            _0x3dd295['style']['display'] = 'none';
            _0x5ed698['blur']();
        } else {
            _0x3dd295['style']['display'] = 'block';
            _0x5ed698['focus']();
            for (let _0x32593d in _0xc93faf['INPUTS']['keys'])
                _0xc93faf['INPUTS']['keys'][_0x32593d] = ![];
        }
        _0x38a9c4['preventDefault']();
        return;
    }
    if (_0x38a9c4['key'] === 'Escape') {
        const _0x2d0f40 = document['getElementById']('role-index-modal');
        if (_0x2d0f40 && _0x2d0f40['style']['display'] === 'flex') {
            _0x2d0f40['style']['display'] = 'none';
            return;
        }
        const _0x1414f7 = document['getElementById']('guide-ui');
        if (_0x1414f7 && _0x1414f7['style']['display'] === 'flex') {
            _0x1414f7['style']['display'] = 'none';
            return;
        }
        const _0xb8abeb = document['getElementById']('ability-ui');
        if (_0xb8abeb && _0xb8abeb['style']['display'] === 'block') {
            _0xb8abeb['style']['display'] = 'none';
            return;
        }
        const _0x4f0043 = document['getElementById']('settings-panel');
        if (_0x4f0043 && _0x4f0043['style']['display'] === 'block') {
            _0x4f0043['style']['display'] = 'none';
            return;
        }
        const _0x1cb080 = document['getElementById']('mayor-confirm-dialog');
        if (_0x1cb080 && _0x1cb080['style']['display'] === 'flex') {
            _0x1cb080['style']['display'] = 'none';
            return;
        }
        const _0x2c3021 = document['getElementById']('target-chooser-ui');
        if (_0x2c3021 && _0x2c3021['style']['display'] === 'flex') {
            _0x2c3021['style']['display'] = 'none';
            return;
        }
        const _0xc1ad01 = document['getElementById']('chat-ui');
        const _0x1b49a9 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x1b49a9) {
            _0x1b49a9['value'] = '';
            _0xc1ad01['style']['display'] = 'none';
            _0x1b49a9['blur']();
            _0x38a9c4['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0xc93faf['INPUTS']['keys']['hasOwnProperty'](_0x928090))
            _0xc93faf['INPUTS']['keys'][_0x928090] = !![];
        if (!_0x28fa48 || _0x28fa48['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x928090 === 'h' && !_0x38a9c4['repeat']) {
            const _0x5f5d43 = document['getElementById']('guide-ui');
            if (_0x5f5d43) {
                _0x5f5d43['style']['display'] = _0x5f5d43['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x928090 === 't' && !_0x38a9c4['repeat']) {
            if (_0x9ab68e['isDead'])
                return;
            if (_0x471929 === 'Mayor') {
                if (_0x3df085['has'](_0x13b1ed)) {
                    _0x192c88('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x148c0d = document['getElementById']('mayor-confirm-dialog');
                if (_0x148c0d)
                    _0x148c0d['style']['display'] = 'flex';
                return;
            }
            if (_0xc93faf['GAME_STATE'] === 'NIGHT') {
                if (!_0xc93faf['NIGHT_ABILITY_OPEN']) {
                    _0x192c88('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x1ee984 = document['getElementById']('ability-ui');
                if (_0x1ee984) {
                    if (_0x1ee984['style']['display'] === 'block') {
                        _0x1ee984['style']['display'] = 'none';
                    } else {
                        _0x2283db();
                        _0x1ee984['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0xc93faf['GAME_STATE'] === 'DAY_DISCUSS' || _0xc93faf['GAME_STATE'] === 'DAY_VOTE') {
                _0x192c88('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x928090 === 'e' && !_0x9ab68e['isDead']) {
            const _0x20e6ab = Date['now']();
            if (!window['_lastDoorSend'] || _0x20e6ab - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x20e6ab;
                _0x28fa48['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x55a82e => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x1a15e4 = _0x55a82e['key']['toLowerCase']();
        if (_0xc93faf['INPUTS']['keys']['hasOwnProperty'](_0x1a15e4))
            _0xc93faf['INPUTS']['keys'][_0x1a15e4] = ![];
    }
});
window['addEventListener']('mousemove', _0xdb027a => {
    _0xc93faf['INPUTS']['mouseX'] = _0xdb027a['clientX'];
    _0xc93faf['INPUTS']['mouseY'] = _0xdb027a['clientY'];
    if (_0xc93faf['INPUTS']['isMouseDown'] && _0xc93faf['EDITOR']['enabled']) {
        _0x16d803(_0xdb027a['clientX'], _0xdb027a['clientY']);
    }
});
window['addEventListener']('mousedown', _0x32a0bf => {
    if (_0x32a0bf['target']['closest']('#editor-ui') || _0x32a0bf['target']['closest']('#leaderboard-ui') || _0x32a0bf['target']['closest']('#role-index-btn-wrap') || _0x32a0bf['target']['closest']('#role-index-modal') || _0x32a0bf['target']['closest']('#chat-log-ui') || _0x32a0bf['target']['closest']('#target-chooser-ui') || _0x32a0bf['target']['closest']('#guide-ui') || _0x32a0bf['target']['closest']('#role-list-ui') || _0x32a0bf['target']['closest']('#ability-ui') || _0x32a0bf['target']['closest']('#settings-panel') || _0x32a0bf['target']['closest']('#mayor-confirm-dialog') || _0x32a0bf['target']['closest']('#mobile-action-bar') || _0x32a0bf['target']['closest']('#mobile-top-bar') || _0x32a0bf['target']['closest']('#mobile-joystick-zone') || _0x32a0bf['target']['closest']('#mobile-chat-overlay') || _0x32a0bf['target']['closest']('#will-ui') || _0x32a0bf['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x32a0bf['button'] === 0x0) {
        _0xc93faf['INPUTS']['isMouseDown'] = !![];
        if (_0xc93faf['EDITOR']['enabled'])
            _0x16d803(_0x32a0bf['clientX'], _0x32a0bf['clientY']);
    }
});
window['addEventListener']('mouseup', _0x4a03dd => {
    _0xc93faf['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x215d9e => {
    if (_0x215d9e['target']['closest']('#settings-btn'))
        return;
    const _0x288667 = document['getElementById']('leaderboard-list');
    const _0x31eaf0 = document['getElementById']('leaderboard-toggle');
    if (_0x288667['style']['display'] === 'none') {
        _0x288667['style']['display'] = 'flex';
        _0x31eaf0['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x288667['style']['display'] = 'none';
        _0x31eaf0['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x1c3f24 = document['getElementById']('close-target-btn');
if (_0x1c3f24) {
    _0x1c3f24['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x245e6c = document['getElementById']('close-guide-btn');
if (_0x245e6c) {
    _0x245e6c['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x2ba897 = document['getElementById']('role-list-header');
if (_0x2ba897) {
    _0x2ba897['addEventListener']('click', () => {
        const _0x3284df = document['getElementById']('role-list-items');
        const _0x88220e = document['getElementById']('role-list-toggle');
        if (_0x3284df['style']['display'] === 'none') {
            _0x3284df['style']['display'] = 'flex';
            _0x88220e['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x3284df['style']['display'] = 'none';
            _0x88220e['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x117124() {
    const _0x1288b2 = document['getElementById']('mobile-joystick-zone');
    const _0x4ab018 = document['getElementById']('mobile-joystick-base');
    const _0x437c1c = document['getElementById']('mobile-joystick-knob');
    if (_0x1288b2 && _0x4ab018 && _0x437c1c) {
        const _0x15322b = 0x3e;
        const _0xd2a9d4 = (_0x14b61a, _0x15590c) => {
            const _0x2043df = _0x4ab018['getBoundingClientRect']();
            const _0x43ffb9 = _0x2043df['left'] + _0x2043df['width'] / 0x2;
            const _0x30bc5f = _0x2043df['top'] + _0x2043df['height'] / 0x2;
            const _0x597511 = _0x14b61a - _0x43ffb9;
            const _0x437ea4 = _0x15590c - _0x30bc5f;
            const _0x250b12 = Math['hypot'](_0x597511, _0x437ea4);
            if (_0x250b12 === 0x0) {
                _0x39b91e = 0x0;
                _0x589060 = 0x0;
                _0xcb3c50 = ![];
                _0x437c1c['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x568780 = Math['min'](_0x250b12, _0x15322b);
            const _0x4e5744 = _0x597511 / _0x250b12 * _0x568780;
            const _0x4813e7 = _0x437ea4 / _0x250b12 * _0x568780;
            _0x39b91e = _0x4e5744 / _0x15322b;
            _0x589060 = _0x4813e7 / _0x15322b;
            _0xcb3c50 = _0x250b12 >= _0x15322b * 0.75;
            _0x437c1c['style']['transform'] = 'translate(' + _0x4e5744 + 'px,\x20' + _0x4813e7 + 'px)';
        };
        const _0x312093 = _0x385ef7 => {
            for (let _0x3da195 = 0x0; _0x3da195 < _0x385ef7['changedTouches']['length']; _0x3da195++) {
                const _0xf78b9e = _0x385ef7['changedTouches'][_0x3da195];
                if (_0x360d92 === null) {
                    _0x360d92 = _0xf78b9e['identifier'];
                    _0x14bedd = !![];
                    _0xd2a9d4(_0xf78b9e['clientX'], _0xf78b9e['clientY']);
                    break;
                }
            }
        };
        const _0x50081d = _0x28ae75 => {
            for (let _0x8c99d6 = 0x0; _0x8c99d6 < _0x28ae75['changedTouches']['length']; _0x8c99d6++) {
                const _0x3cd7a1 = _0x28ae75['changedTouches'][_0x8c99d6];
                if (_0x3cd7a1['identifier'] === _0x360d92) {
                    _0xd2a9d4(_0x3cd7a1['clientX'], _0x3cd7a1['clientY']);
                    break;
                }
            }
        };
        const _0x4f3ced = _0x5ab5cb => {
            for (let _0x65a98 = 0x0; _0x65a98 < _0x5ab5cb['changedTouches']['length']; _0x65a98++) {
                const _0xa405c = _0x5ab5cb['changedTouches'][_0x65a98];
                if (_0xa405c['identifier'] === _0x360d92) {
                    _0x360d92 = null;
                    _0x14bedd = ![];
                    _0x39b91e = 0x0;
                    _0x589060 = 0x0;
                    _0xcb3c50 = ![];
                    _0x437c1c['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x1288b2['addEventListener']('touchstart', _0x3951d4 => {
            _0x3951d4['preventDefault']();
            _0x312093(_0x3951d4);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x50081d, { 'passive': !![] });
        window['addEventListener']('touchend', _0x4f3ced, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x4f3ced, { 'passive': !![] });
    }
    const _0x52ccff = (_0xa2954c, _0x47220f) => {
        const _0x40f8ab = _0xa2954c / _0xc93faf['SYSTEM']['viewScale'];
        const _0x4b232e = _0x47220f / _0xc93faf['SYSTEM']['viewScale'];
        const _0x2f6b37 = _0x9ab68e['x'] - _0xc93faf['CAMERA']['x'] + _0x9ab68e['width'] / 0x2;
        const _0x508fe5 = _0x9ab68e['y'] - _0xc93faf['CAMERA']['y'] + _0x9ab68e['height'] / 0x2;
        _0x867e6a = Math['atan2'](_0x4b232e - _0x508fe5, _0x40f8ab - _0x2f6b37);
        _0x54f83f = !![];
        _0xc93faf['INPUTS']['mouseX'] = _0xa2954c;
        _0xc93faf['INPUTS']['mouseY'] = _0x47220f;
    };
    _0x2670a5['addEventListener']('touchstart', _0x5d70cf => {
        if (_0x29bde8)
            return;
        for (let _0x115952 = 0x0; _0x115952 < _0x5d70cf['changedTouches']['length']; _0x115952++) {
            const _0x4ed55d = _0x5d70cf['changedTouches'][_0x115952];
            if (_0x4ed55d['identifier'] !== _0x360d92 && _0x20a26a === null) {
                _0x20a26a = _0x4ed55d['identifier'];
                _0x52ccff(_0x4ed55d['clientX'], _0x4ed55d['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x2670a5['addEventListener']('touchmove', _0x385111 => {
        if (_0x29bde8)
            return;
        for (let _0x4f3878 = 0x0; _0x4f3878 < _0x385111['changedTouches']['length']; _0x4f3878++) {
            const _0x9f1aee = _0x385111['changedTouches'][_0x4f3878];
            if (_0x9f1aee['identifier'] === _0x20a26a) {
                _0x52ccff(_0x9f1aee['clientX'], _0x9f1aee['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x433071 = _0x5c8e96 => {
        for (let _0x392c30 = 0x0; _0x392c30 < _0x5c8e96['changedTouches']['length']; _0x392c30++) {
            const _0x23b0be = _0x5c8e96['changedTouches'][_0x392c30];
            if (_0x23b0be['identifier'] === _0x20a26a) {
                _0x20a26a = null;
                _0x54f83f = ![];
                break;
            }
        }
    };
    _0x2670a5['addEventListener']('touchend', _0x433071, { 'passive': !![] });
    _0x2670a5['addEventListener']('touchcancel', _0x433071, { 'passive': !![] });
    const _0x52a9fa = document['getElementById']('mob-sprint-btn');
    if (_0x52a9fa) {
        _0x52a9fa['addEventListener']('click', _0x1f56d2 => {
            _0x1f56d2['stopPropagation']();
            _0x1d9dd7 = !_0x1d9dd7;
            _0x52a9fa['classList']['toggle']('active', _0x1d9dd7);
        });
    }
    const _0x32743b = document['getElementById']('mob-interact-btn');
    if (_0x32743b) {
        _0x32743b['addEventListener']('click', _0x2479ea => {
            _0x2479ea['stopPropagation']();
            if (!_0x9ab68e['isDead']) {
                const _0x819d2 = Date['now']();
                if (!window['_lastDoorSend'] || _0x819d2 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x819d2;
                    if (_0x28fa48 && _0x28fa48['readyState'] === WebSocket['OPEN'])
                        _0x28fa48['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x551360 = document['getElementById']('mob-ability-btn');
    if (_0x551360) {
        _0x551360['addEventListener']('click', _0x2f871b => {
            _0x2f871b['stopPropagation']();
            if (_0x9ab68e['isDead'])
                return;
            if (_0x471929 === 'Mayor') {
                if (_0x3df085['has'](_0x13b1ed)) {
                    _0x192c88('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x1ff927 = document['getElementById']('mayor-confirm-dialog');
                if (_0x1ff927)
                    _0x1ff927['style']['display'] = 'flex';
                return;
            }
            if (_0xc93faf['GAME_STATE'] === 'NIGHT') {
                if (!_0xc93faf['NIGHT_ABILITY_OPEN']) {
                    _0x192c88('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x39ee5b = document['getElementById']('ability-ui');
                if (_0x39ee5b) {
                    if (_0x39ee5b['style']['display'] === 'block') {
                        _0x39ee5b['style']['display'] = 'none';
                    } else {
                        _0x2283db();
                        _0x39ee5b['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0xc93faf['GAME_STATE'] === 'DAY_DISCUSS' || _0xc93faf['GAME_STATE'] === 'DAY_VOTE') {
                _0x192c88('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0xbe9b54 = document['getElementById']('mob-will-btn');
    const _0x237ead = document['getElementById']('will-ui');
    const _0x3b9649 = document['getElementById']('will-input');
    const _0x54ca08 = document['getElementById']('close-will-btn');
    const _0xda29ed = () => {
        if (!_0x237ead)
            return;
        if (_0x237ead['style']['display'] === 'flex') {
            _0x237ead['style']['display'] = 'none';
            if (_0xc93faf['GAME_STATE'] !== 'NIGHT' && _0x28fa48 && _0x28fa48['readyState'] === WebSocket['OPEN'] && _0x3b9649) {
                _0x28fa48['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x3b9649['value']
                }));
            }
            if (_0x3b9649)
                _0x3b9649['blur']();
        } else {
            if (_0xc93faf['GAME_STATE'] === 'NIGHT') {
                _0x192c88('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x237ead['style']['display'] = 'flex';
            if (_0x3b9649)
                _0x3b9649['focus']();
        }
    };
    if (_0xbe9b54)
        _0xbe9b54['addEventListener']('click', _0x25bb5d => {
            _0x25bb5d['stopPropagation']();
            _0xda29ed();
        });
    if (_0x54ca08)
        _0x54ca08['addEventListener']('click', _0x3a6e3e => {
            _0x3a6e3e['stopPropagation']();
            _0xda29ed();
        });
    const _0x596c57 = document['getElementById']('mob-chat-btn');
    const _0x5b61b4 = document['getElementById']('mobile-chat-overlay');
    const _0x54119d = document['getElementById']('mobile-chat-input');
    const _0x2c2509 = document['getElementById']('mobile-chat-send');
    const _0x2ce376 = document['getElementById']('mobile-chat-cancel');
    const _0x5a6f77 = () => {
        if (!_0x5b61b4 || !_0x54119d)
            return;
        _0x5b61b4['style']['display'] = 'flex';
        _0x54119d['value'] = '';
        _0x54119d['focus']();
    };
    const _0x3adaa1 = () => {
        if (!_0x5b61b4 || !_0x54119d)
            return;
        _0x5b61b4['style']['display'] = 'none';
        _0x54119d['blur']();
    };
    const _0x14e1c7 = () => {
        if (!_0x54119d)
            return;
        const _0x2e8356 = _0x54119d['value']['trim']();
        if (_0x2e8356['length'] > 0x0 && _0x28fa48 && _0x28fa48['readyState'] === WebSocket['OPEN']) {
            _0x28fa48['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x2e8356
            }));
        }
        _0x54119d['value'] = '';
        _0x3adaa1();
    };
    if (_0x596c57)
        _0x596c57['addEventListener']('click', _0x5f2556 => {
            _0x5f2556['stopPropagation']();
            _0x5a6f77();
        });
    if (_0x2c2509)
        _0x2c2509['addEventListener']('click', _0x33c146 => {
            _0x33c146['stopPropagation']();
            _0x14e1c7();
        });
    if (_0x2ce376)
        _0x2ce376['addEventListener']('click', _0x51adfc => {
            _0x51adfc['stopPropagation']();
            _0x3adaa1();
        });
    if (_0x54119d) {
        _0x54119d['addEventListener']('keydown', _0x16802a => {
            if (_0x16802a['key'] === 'Enter') {
                _0x16802a['preventDefault']();
                _0x14e1c7();
            } else if (_0x16802a['key'] === 'Escape') {
                _0x3adaa1();
            }
        });
    }
    const _0x1fb088 = document['getElementById']('mob-top-chat');
    if (_0x1fb088)
        _0x1fb088['addEventListener']('click', _0x4e68b4 => {
            _0x4e68b4['stopPropagation']();
            _0x5a6f77();
        });
    const _0xf31b8d = document['getElementById']('mob-top-will');
    if (_0xf31b8d)
        _0xf31b8d['addEventListener']('click', _0x3ac7b7 => {
            _0x3ac7b7['stopPropagation']();
            _0xda29ed();
        });
    const _0x3876db = document['getElementById']('mob-top-roles');
    if (_0x3876db) {
        _0x3876db['addEventListener']('click', _0x24038d => {
            _0x24038d['stopPropagation']();
            const _0x14aff9 = document['getElementById']('role-list-ui');
            const _0x31fcfe = document['getElementById']('leaderboard-ui');
            if (_0x31fcfe)
                _0x31fcfe['style']['display'] = 'none';
            if (_0x14aff9)
                _0x14aff9['style']['display'] = _0x14aff9['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x389374 = document['getElementById']('mob-top-players');
    if (_0x389374) {
        _0x389374['addEventListener']('click', _0xb35643 => {
            _0xb35643['stopPropagation']();
            const _0x215177 = document['getElementById']('leaderboard-ui');
            const _0x982f88 = document['getElementById']('role-list-ui');
            if (_0x982f88)
                _0x982f88['style']['display'] = 'none';
            if (_0x215177)
                _0x215177['style']['display'] = _0x215177['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x41b351 = document['getElementById']('mob-top-help');
    if (_0x41b351) {
        _0x41b351['addEventListener']('click', _0x1d6901 => {
            _0x1d6901['stopPropagation']();
            const _0x37fc6f = document['getElementById']('guide-ui');
            if (_0x37fc6f)
                _0x37fc6f['style']['display'] = _0x37fc6f['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x17780c) {
            _0x17780c = !![];
            _0x131cf6();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
