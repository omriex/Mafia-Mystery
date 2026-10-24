document['addEventListener']('contextmenu', _0x49b92a => _0x49b92a['preventDefault']());
const _0x50d155 = {
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
let _0x8e123d = '';
function _0x349caa(_0x118bee, _0x521ec4) {
    const _0x3ebcf8 = document['getElementById']('role-list-ui');
    const _0x35a636 = document['getElementById']('role-list-items');
    if (!_0x3ebcf8 || !_0x35a636)
        return;
    if (!_0x521ec4 || _0x521ec4 === 'off' || !_0x118bee || _0x118bee['length'] === 0x0) {
        _0x3ebcf8['style']['display'] = 'none';
        return;
    }
    const _0x3b5011 = _0x521ec4 + '|' + JSON['stringify'](_0x118bee);
    if (_0x3b5011 === _0x8e123d)
        return;
    _0x8e123d = _0x3b5011;
    const _0x5374f8 = document['getElementById']('role-tooltip');
    if (_0x5374f8) {
        _0x5374f8['style']['visibility'] = 'hidden';
        _0x5374f8['style']['opacity'] = '0';
    }
    _0x3ebcf8['style']['display'] = 'flex';
    _0x35a636['innerHTML'] = '';
    _0x118bee['forEach'](_0xcc1631 => {
        const _0xa2840a = document['createElement']('div');
        _0xa2840a['className'] = 'role-list-entry';
        const _0x5c0a0a = _0xcc1631['name']['includes']('Mafia') || _0xcc1631['name'] === 'Skinwalker';
        _0xa2840a['classList']['add'](_0x5c0a0a ? 'mafia' : 'town');
        if (_0x521ec4 === 'precise' && _0xcc1631['isDead']) {
            _0xa2840a['classList']['remove']('town', 'mafia');
            _0xa2840a['classList']['add']('dead');
            _0xa2840a['innerHTML'] = '<span>' + _0xcc1631['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x173173 = _0xcc1631['count'] !== undefined && _0xcc1631['count'] !== null ? _0xcc1631['count'] + 'x\x20' : '';
            _0xa2840a['innerHTML'] = '<span>' + _0x173173 + _0xcc1631['name'] + '</span>';
        }
        if (_0x521ec4 === 'subalignments' && _0x50d155[_0xcc1631['name']]) {
            _0xa2840a['style']['cursor'] = 'pointer';
            _0xa2840a['addEventListener']('mouseenter', () => {
                const _0x17297e = document['getElementById']('role-tooltip');
                if (!_0x17297e)
                    return;
                const _0x477f0e = _0x50d155[_0xcc1631['name']]['join'](',\x20');
                _0x17297e['innerHTML'] = '';
                const _0x2687e9 = document['createElement']('span');
                _0x2687e9['style']['color'] = '#ffcc00';
                _0x2687e9['textContent'] = _0xcc1631['name'];
                _0x17297e['appendChild'](_0x2687e9);
                _0x17297e['appendChild'](document['createElement']('br'));
                _0x17297e['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x477f0e));
                const _0x1b0697 = _0xa2840a['getBoundingClientRect']();
                _0x17297e['style']['left'] = _0x1b0697['left'] - 0xeb + 'px';
                _0x17297e['style']['top'] = _0x1b0697['top'] + 'px';
                _0x17297e['style']['display'] = 'block';
                _0x17297e['style']['visibility'] = 'visible';
                _0x17297e['style']['opacity'] = '1';
            });
            _0xa2840a['addEventListener']('mouseleave', () => {
                const _0xdf6f67 = document['getElementById']('role-tooltip');
                if (_0xdf6f67) {
                    _0xdf6f67['style']['display'] = 'none';
                    _0xdf6f67['style']['visibility'] = 'hidden';
                    _0xdf6f67['style']['opacity'] = '0';
                }
            });
        }
        _0x35a636['appendChild'](_0xa2840a);
    });
}
let _0x37c19c = null;
let _0x2ef182 = null;
const _0x55eb30 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x4638e3 = 'Player???';
let _0x51591c = ![];
let _0x1e4c26 = {};
let _0x4974dd = null;
let _0x41fd3f = 0x0;
let _0x55cf6e = 0x0;
let _0x210f96 = new Set();
let _0x2228f9 = ![];
let _0xd5571b = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x351eee = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x2e871b = ![];
let _0xcd9f1c = null;
let _0x129829 = 0x0;
let _0x1d75d7 = 0x0;
let _0x4cec9d = ![];
let _0x2c484e = ![];
let _0x56b442 = 0x0;
let _0x32f70e = null;
let _0x531473 = ![];
const _0x2fea02 = ((() => {
    const _0x620090 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3'
    };
    let _0xfa1fa5 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x14f802 = 0x320;
    const _0x1e54fb = {};
    const _0x258e9d = {};
    let _0x2b4fa9 = null;
    let _0x3559c3 = _0xfa1fa5 === 0x0;
    let _0xb1aafe = ![];
    for (const [_0x517e33, _0x1130a8] of Object['entries'](_0x620090)) {
        const _0x5a6d76 = new Audio(_0x1130a8);
        _0x5a6d76['loop'] = !![];
        _0x5a6d76['volume'] = 0x0;
        _0x5a6d76['preload'] = 'auto';
        _0x1e54fb[_0x517e33] = _0x5a6d76;
        _0x258e9d[_0x517e33] = null;
    }
    const _0x447b38 = _0x3a2e48 => Math['min'](0x1, Math['max'](0x0, _0x3a2e48));
    function _0xcfd5d2(_0x1a8ba3) {
        if (_0x258e9d[_0x1a8ba3] !== null) {
            cancelAnimationFrame(_0x258e9d[_0x1a8ba3]);
            _0x258e9d[_0x1a8ba3] = null;
        }
    }
    function _0x409807(_0x422840, _0x568bc6, _0x1dc13b, _0x2980ac, _0x5257b1) {
        _0xcfd5d2(_0x422840);
        const _0x190b09 = _0x1e54fb[_0x422840];
        const _0x20314a = performance['now']();
        const _0x418ab3 = _0x4a4f05 => {
            const _0x4ed0df = _0x447b38((_0x4a4f05 - _0x20314a) / _0x2980ac);
            const _0x1ff1a8 = _0x447b38(_0x568bc6 + (_0x1dc13b - _0x568bc6) * _0x4ed0df);
            _0x190b09['volume'] = _0x3559c3 ? 0x0 : _0x1ff1a8;
            if (_0x4ed0df < 0x1) {
                _0x258e9d[_0x422840] = requestAnimationFrame(_0x418ab3);
            } else {
                _0x258e9d[_0x422840] = null;
                _0x190b09['volume'] = _0x3559c3 ? 0x0 : _0x447b38(_0x1dc13b);
                if (_0x5257b1)
                    _0x5257b1();
            }
        };
        _0x258e9d[_0x422840] = requestAnimationFrame(_0x418ab3);
    }
    function _0x44411e(_0x5d25da) {
        const _0x588bfd = _0x5d25da['play']();
        if (_0x588bfd && _0x588bfd['catch']) {
            _0x588bfd['catch'](() => {
                if (!_0xb1aafe) {
                    const _0x53efb0 = () => {
                        _0xb1aafe = !![];
                        _0x5d25da['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x53efb0);
                        document['removeEventListener']('keydown', _0x53efb0);
                        document['removeEventListener']('touchstart', _0x53efb0);
                    };
                    document['addEventListener']('click', _0x53efb0, { 'once': !![] });
                    document['addEventListener']('keydown', _0x53efb0, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x53efb0, { 'once': !![] });
                }
            });
        }
    }
    function _0x488455(_0x177975) {
        if (!_0x620090[_0x177975])
            return;
        if (_0x2b4fa9 === _0x177975)
            return;
        const _0x24a15b = _0x2b4fa9;
        _0x2b4fa9 = _0x177975;
        const _0x4806c0 = _0x1e54fb[_0x177975];
        _0xcfd5d2(_0x177975);
        _0x4806c0['currentTime'] = 0x0;
        _0x4806c0['volume'] = 0x0;
        _0x44411e(_0x4806c0);
        _0x409807(_0x177975, 0x0, _0xfa1fa5, _0x14f802);
        if (_0x24a15b && _0x1e54fb[_0x24a15b]) {
            const _0x4ae458 = _0x24a15b;
            const _0x3201ba = _0x1e54fb[_0x4ae458];
            const _0x3bab94 = _0x447b38(_0x3201ba['volume']);
            _0x409807(_0x4ae458, _0x3bab94, 0x0, _0x14f802, () => {
                _0x3201ba['pause']();
                _0x3201ba['currentTime'] = 0x0;
            });
        }
    }
    function _0x4e92cc(_0x5d6154) {
        _0xfa1fa5 = _0x447b38(_0x5d6154);
        localStorage['setItem']('musicVolume', String(_0xfa1fa5));
        if (!_0x3559c3 && _0x2b4fa9 && _0x258e9d[_0x2b4fa9] === null) {
            _0x1e54fb[_0x2b4fa9]['volume'] = _0xfa1fa5;
        }
    }
    function _0x1495c2() {
        return _0xfa1fa5;
    }
    function _0xa97444(_0x13a322) {
        _0x3559c3 = _0x13a322;
        for (const _0x44174f of Object['keys'](_0x1e54fb)) {
            if (_0x258e9d[_0x44174f] === null) {
                _0x1e54fb[_0x44174f]['volume'] = _0x13a322 || _0x44174f !== _0x2b4fa9 ? 0x0 : _0xfa1fa5;
            }
        }
    }
    function _0x4b91ea() {
        return _0x3559c3;
    }
    function _0x1945d6(_0x4fee5f) {
        if (_0x4fee5f === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x4fee5f === 'DAY_VOTE')
            return 'voting';
        return 'wait';
    }
    function _0x2848d3(_0x500692) {
        _0x488455(_0x1945d6(_0x500692));
    }
    function _0x5f08a7(_0x306c2e) {
        _0x488455(_0x306c2e);
    }
    return {
        'play': _0x488455,
        'onStateChange': _0x2848d3,
        'onSoundEvent': _0x5f08a7,
        'setVolume': _0x4e92cc,
        'getVolume': _0x1495c2,
        'setMuted': _0xa97444,
        'isMuted': _0x4b91ea
    };
})());
const _0x221d5d = ((() => {
    const _0x1b1bdf = 0x258;
    const _0x39ae4c = 0xb4;
    const _0x4b435d = 0x708;
    const _0x4d1bec = 0x140;
    const _0x43200a = 0.18;
    const _0x1c44b4 = 0.95;
    const _0x410a5a = new Audio('audio/heartbeat.mp3');
    _0x410a5a['loop'] = ![];
    _0x410a5a['preload'] = 'auto';
    _0x410a5a['volume'] = 0x0;
    let _0xc33160 = 0x0;
    let _0x3255dd = Infinity;
    function _0x50d173(_0x3af257, _0x44827a, _0x1729bc) {
        return Math['min'](_0x1729bc, Math['max'](_0x44827a, _0x3af257));
    }
    function _0x3d9dbf(_0x2f64a3, _0x2989b0, _0x3674ab) {
        return _0x2f64a3 + (_0x2989b0 - _0x2f64a3) * _0x3674ab;
    }
    function _0x3639d7(_0x1bee4d) {
        if (_0x3c84cf['GAME_STATE'] !== 'NIGHT' || _0x274dd6['isDead'] || _0x4974dd === 'Skinwalker') {
            _0x3255dd = Infinity;
            return;
        }
        const _0x548be1 = _0x274dd6['x'] + 22.5;
        const _0x2f49dc = _0x274dd6['y'] + 22.5;
        let _0x10f3b0 = Infinity;
        for (const _0x2f960e in _0x1e4c26) {
            const _0x514b77 = _0x1e4c26[_0x2f960e];
            if (!_0x514b77['isDark'] || _0x514b77['isDead'])
                continue;
            const _0xbe700 = _0x514b77['renderX'] + 22.5 - _0x548be1;
            const _0x5d9abf = _0x514b77['renderY'] + 22.5 - _0x2f49dc;
            const _0x39edc9 = Math['sqrt'](_0xbe700 * _0xbe700 + _0x5d9abf * _0x5d9abf);
            if (_0x39edc9 < _0x10f3b0)
                _0x10f3b0 = _0x39edc9;
        }
        _0x3255dd = _0x10f3b0;
        if (_0x10f3b0 > _0x1b1bdf)
            return;
        const _0x5b3ff8 = 0x1 - _0x50d173((_0x10f3b0 - _0x39ae4c) / (_0x1b1bdf - _0x39ae4c), 0x0, 0x1);
        const _0x57edf1 = _0x3d9dbf(_0x4b435d, _0x4d1bec, _0x5b3ff8);
        const _0x1ccaa6 = _0x3d9dbf(_0x43200a, _0x1c44b4, _0x5b3ff8);
        if (_0x1bee4d >= _0xc33160) {
            _0x410a5a['currentTime'] = 0x0;
            _0x410a5a['volume'] = _0x2fea02['isMuted']() ? 0x0 : _0x50d173(_0x1ccaa6 * _0x2fea02['getVolume']() / 0.7, 0x0, 0x1);
            _0x410a5a['play']()['catch'](() => {
            });
            _0xc33160 = _0x1bee4d + _0x57edf1;
        }
    }
    return { 'tick': _0x3639d7 };
})());
function _0x5797bc() {
    const _0x933a33 = document['getElementById']('mob-ability-btn');
    if (!_0x933a33)
        return;
    const _0x425d6d = _0x3c84cf['GAME_STATE'] === 'NIGHT' && !_0x274dd6['isDead'];
    const _0x37ec7c = _0x4974dd === 'Mayor' && !_0x210f96['has'](_0x2ef182) && !_0x274dd6['isDead'];
    if (_0x425d6d || _0x37ec7c) {
        _0x933a33['style']['display'] = 'flex';
    } else {
        _0x933a33['style']['display'] = 'none';
    }
}
function _0x1d8ad0() {
    const _0x161143 = document['getElementById']('mobile-joystick-zone');
    const _0x586ebb = document['getElementById']('mobile-top-bar');
    const _0x49cd4e = document['getElementById']('mobile-action-bar');
    if (!_0x161143 || !_0x586ebb || !_0x49cd4e)
        return;
    if (!_0x129bcf && _0x351eee) {
        _0x161143['style']['display'] = 'flex';
        _0x586ebb['style']['display'] = 'flex';
        _0x49cd4e['style']['display'] = 'flex';
        _0x5797bc();
    } else {
        _0x161143['style']['display'] = 'none';
        _0x586ebb['style']['display'] = 'none';
        _0x49cd4e['style']['display'] = 'none';
    }
}
const _0x18dd9f = document['getElementById']('gameCanvas');
const _0x17348b = _0x18dd9f['getContext']('2d', { 'alpha': ![] });
const _0x2b6ae9 = 0x500;
const _0x557cde = 0x2d0;
const _0x3c84cf = {
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
        'width': _0x2b6ae9,
        'height': _0x557cde
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
const _0x274dd6 = {
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
const _0x13d0c3 = new Image();
const _0x1b517f = new Image();
const _0xf1c1b2 = new Image();
const _0x5367b2 = new Image();
_0x5367b2['src'] = 'assets/mayor\x20cosmetic.png';
const _0x1d983b = [
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
const _0x1c3a01 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x51d7d7 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x51d7d7 === 'body1.png' || _0x51d7d7 === 'body1')
    _0x51d7d7 = 'body01.png';
if (!_0x51d7d7['endsWith']('.png'))
    _0x51d7d7 += '.png';
let _0x307171 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x307171['endsWith']('.png'))
    _0x307171 += '.png';
let _0x129bcf = !![];
let _0x4fa73e = null;
let _0x4f40d3 = null;
let _0x1cb94d = 0x3c;
let _0x14afcf = 0x2d;
const _0x178acd = {};
const _0x151ca3 = new Image();
_0x151ca3['src'] = 'assets/yanito932.png';
_0x178acd['assets/yanito932.png'] = _0x151ca3;
function _0x2e15bf(_0x330cfe) {
    if (!_0x178acd[_0x330cfe] || !_0x178acd[_0x330cfe]['complete'] && _0x178acd[_0x330cfe]['naturalWidth'] === 0x0 && _0x178acd[_0x330cfe]['naturalHeight'] === 0x0) {
        const _0x101149 = new Image();
        _0x101149['src'] = _0x330cfe;
        _0x178acd[_0x330cfe] = _0x101149;
    }
    return _0x178acd[_0x330cfe];
}
function _0x200475(_0x147f94, _0x4764c7, _0x38824e, _0x8ff561, _0xfec7b0) {
    try {
        const _0xc8be17 = 'assets/' + (_0x4764c7 || 'body01.png');
        const _0x1177df = _0x2e15bf(_0xc8be17);
        if (_0x1177df['complete'] && _0x1177df['naturalWidth'] > 0x0) {
            _0x147f94['drawImage'](_0x1177df, -_0x8ff561 / 0x2, -_0xfec7b0 / 0x2, _0x8ff561, _0xfec7b0);
        }
        if (_0x38824e === null || _0x38824e === undefined)
            return;
        const _0x388fab = 'assets/' + _0x38824e;
        const _0x1b207b = _0x2e15bf(_0x388fab);
        if (_0x1b207b['complete'] && _0x1b207b['naturalWidth'] > 0x0) {
            _0x147f94['drawImage'](_0x1b207b, -_0x8ff561 / 0x2, -_0xfec7b0 / 0x2, _0x8ff561, _0xfec7b0);
        }
    } catch (_0x50faff) {
    }
}
function _0x2b7472() {
    const _0x2a1bc9 = document['getElementById']('body-skin-grid');
    const _0x3f3d4a = document['getElementById']('eyes-skin-grid');
    if (!_0x2a1bc9 || !_0x3f3d4a)
        return;
    _0x2a1bc9['innerHTML'] = '';
    _0x1d983b['forEach'](_0x6305c8 => {
        const _0x24c992 = document['createElement']('button');
        _0x24c992['className'] = 'skin-btn' + (_0x6305c8 === _0x51d7d7 ? '\x20selected' : '');
        const _0x4ca6b1 = document['createElement']('img');
        _0x4ca6b1['src'] = 'assets/' + _0x6305c8;
        _0x24c992['appendChild'](_0x4ca6b1);
        _0x24c992['onclick'] = () => {
            _0x51d7d7 = _0x6305c8;
            localStorage['setItem']('selectedBody', _0x6305c8);
            _0x2a1bc9['querySelectorAll']('.skin-btn')['forEach'](_0x13d497 => _0x13d497['classList']['remove']('selected'));
            _0x24c992['classList']['add']('selected');
        };
        _0x2a1bc9['appendChild'](_0x24c992);
    });
    _0x3f3d4a['innerHTML'] = '';
    _0x1c3a01['forEach'](_0x52b1c7 => {
        const _0x12f994 = document['createElement']('button');
        _0x12f994['className'] = 'skin-btn' + (_0x52b1c7 === _0x307171 ? '\x20selected' : '');
        const _0x3d325f = document['createElement']('img');
        _0x3d325f['src'] = 'assets/' + _0x52b1c7;
        _0x12f994['appendChild'](_0x3d325f);
        _0x12f994['onclick'] = () => {
            _0x307171 = _0x52b1c7;
            localStorage['setItem']('selectedEyes', _0x52b1c7);
            _0x3f3d4a['querySelectorAll']('.skin-btn')['forEach'](_0x3b2237 => _0x3b2237['classList']['remove']('selected'));
            _0x12f994['classList']['add']('selected');
        };
        _0x3f3d4a['appendChild'](_0x12f994);
    });
}
function _0x48a0cc(_0x53267b) {
    if (!_0x3c84cf['MAP']['columns'] || !_0x3c84cf['CAMERA']['width'])
        return;
    const _0x41c8f6 = Math['max'](0x0, _0x3c84cf['MAP']['columns'] * _0x3c84cf['MAP']['tileSize'] - _0x3c84cf['CAMERA']['width']);
    const _0x42904e = Math['max'](0x0, _0x3c84cf['MAP']['rows'] * _0x3c84cf['MAP']['tileSize'] - _0x3c84cf['CAMERA']['height']);
    if (_0x4fa73e === null) {
        _0x4fa73e = _0x41c8f6 / 0x2;
        _0x4f40d3 = _0x42904e / 0x2;
    }
    _0x4fa73e += _0x1cb94d * _0x53267b;
    _0x4f40d3 += _0x14afcf * _0x53267b;
    if (_0x4fa73e <= 0x0) {
        _0x4fa73e = 0x0;
        _0x1cb94d = Math['abs'](_0x1cb94d);
    } else if (_0x4fa73e >= _0x41c8f6) {
        _0x4fa73e = _0x41c8f6;
        _0x1cb94d = -Math['abs'](_0x1cb94d);
    }
    if (_0x4f40d3 <= 0x0) {
        _0x4f40d3 = 0x0;
        _0x14afcf = Math['abs'](_0x14afcf);
    } else if (_0x4f40d3 >= _0x42904e) {
        _0x4f40d3 = _0x42904e;
        _0x14afcf = -Math['abs'](_0x14afcf);
    }
    _0x3c84cf['CAMERA']['x'] = _0x4fa73e;
    _0x3c84cf['CAMERA']['y'] = _0x4f40d3;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x2c8022 = document['getElementById']('play-btn');
    const _0x291b4d = document['getElementById']('username-input');
    const _0x5df418 = localStorage['getItem']('playerName');
    if (_0x5df418 && _0x291b4d) {
        _0x291b4d['value'] = _0x5df418;
    }
    const _0x4f6c09 = () => {
        _0x2fea02['play']('wait');
        document['removeEventListener']('click', _0x4f6c09);
        document['removeEventListener']('keydown', _0x4f6c09);
        document['removeEventListener']('touchstart', _0x4f6c09);
    };
    document['addEventListener']('click', _0x4f6c09, { 'once': !![] });
    document['addEventListener']('keydown', _0x4f6c09, { 'once': !![] });
    document['addEventListener']('touchstart', _0x4f6c09, { 'once': !![] });
    if (_0x2c8022) {
        _0x2c8022['addEventListener']('click', () => {
            const _0x439c0a = _0x291b4d['value'];
            const _0x4429b9 = _0x439c0a['replace'](/<[^>]*>/g, '')['replace'](/[^\x20-\x7E]/g, '')['replace'](/[<>]/g, '')['replace'](/\s+/g, '\x20')['trim']()['substring'](0x0, 0xe);
            _0x4638e3 = _0x4429b9 || 'Player';
            localStorage['setItem']('playerName', _0x4638e3);
            _0x129bcf = ![];
            _0x3c84cf['CAMERA']['x'] = null;
            _0x3c84cf['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x4f2cd1 = document['getElementById']('controls-hint');
            if (_0x4f2cd1 && !_0x351eee)
                _0x4f2cd1['style']['display'] = 'block';
            _0x1d8ad0();
            if (_0x351eee) {
                const _0x138c24 = document['getElementById']('leaderboard-list');
                const _0x53e9cc = document['getElementById']('leaderboard-toggle');
                if (_0x138c24) {
                    _0x138c24['style']['display'] = 'none';
                    if (_0x53e9cc)
                        _0x53e9cc['style']['transform'] = 'rotate(180deg)';
                }
                const _0x4f4bb6 = document['getElementById']('role-list-items');
                const _0x442d97 = document['getElementById']('role-list-toggle');
                if (_0x4f4bb6) {
                    _0x4f4bb6['style']['display'] = 'none';
                    if (_0x442d97)
                        _0x442d97['style']['transform'] = 'rotate(180deg)';
                }
            }
            if (_0x37c19c && _0x37c19c['readyState'] === WebSocket['OPEN']) {
                _0x37c19c['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x4638e3,
                    'token': _0x55eb30,
                    'body': _0x51d7d7,
                    'eyes': _0x307171
                }));
            } else if (!_0x37c19c || _0x37c19c['readyState'] === WebSocket['CLOSED'] || _0x37c19c['readyState'] === WebSocket['CLOSING']) {
                _0x3c8f04();
            }
        });
    }
    _0x2b7472();
    _0x3c8f04();
    _0xeea4ab();
    _0x4769c7();
    _0x18763();
});
function _0x4769c7() {
    const _0x357bb1 = document['getElementById']('settings-btn');
    const _0x18c3ff = document['getElementById']('settings-panel');
    const _0x4177a1 = document['getElementById']('close-settings-btn');
    const _0x397000 = document['getElementById']('setting-mouse-relative');
    if (_0x397000) {
        _0x397000['checked'] = _0xd5571b;
        _0x397000['addEventListener']('change', () => {
            _0xd5571b = _0x397000['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0xd5571b ? 'true' : 'false');
        });
    }
    const _0x555c4c = document['getElementById']('setting-music-volume');
    const _0x1fb7dc = document['getElementById']('setting-music-volume-display');
    function _0x1980cf(_0x4ee580) {
        const _0x273ba3 = (_0x4ee580['value'] - _0x4ee580['min']) / (_0x4ee580['max'] - _0x4ee580['min']) * 0x64;
        _0x4ee580['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x273ba3 + '%,\x20#444\x20' + _0x273ba3 + '%)';
    }
    if (_0x555c4c) {
        const _0x499fa4 = _0x2fea02['getVolume']();
        const _0x2650bb = Math['round'](_0x499fa4 * 0x64);
        _0x555c4c['value'] = _0x2650bb;
        if (_0x1fb7dc)
            _0x1fb7dc['textContent'] = _0x2650bb + '%';
        _0x1980cf(_0x555c4c);
        _0x555c4c['addEventListener']('input', () => {
            const _0x4a42c2 = parseInt(_0x555c4c['value'], 0xa);
            if (_0x1fb7dc)
                _0x1fb7dc['textContent'] = _0x4a42c2 + '%';
            _0x1980cf(_0x555c4c);
            _0x2fea02['setVolume'](_0x4a42c2 / 0x64);
            _0x2fea02['setMuted'](_0x4a42c2 === 0x0);
        });
    }
    if (_0x357bb1 && _0x18c3ff) {
        _0x357bb1['addEventListener']('click', _0x4a155e => {
            _0x4a155e['stopPropagation']();
            _0x18c3ff['style']['display'] = _0x18c3ff['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x4177a1 && _0x18c3ff) {
        _0x4177a1['addEventListener']('click', () => {
            _0x18c3ff['style']['display'] = 'none';
        });
    }
    const _0x7369e5 = document['getElementById']('mayor-confirm-yes');
    const _0x22e945 = document['getElementById']('mayor-confirm-no');
    const _0x132322 = document['getElementById']('mayor-confirm-dialog');
    if (_0x7369e5 && _0x132322) {
        _0x7369e5['addEventListener']('click', () => {
            if (_0x37c19c && _0x37c19c['readyState'] === WebSocket['OPEN']) {
                _0x37c19c['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x132322['style']['display'] = 'none';
        });
    }
    if (_0x22e945 && _0x132322) {
        _0x22e945['addEventListener']('click', () => {
            _0x132322['style']['display'] = 'none';
        });
    }
    const _0x9223c0 = document['getElementById']('close-ability-btn');
    if (_0x9223c0) {
        _0x9223c0['addEventListener']('click', () => {
            const _0x7b1dc7 = document['getElementById']('ability-ui');
            if (_0x7b1dc7)
                _0x7b1dc7['style']['display'] = 'none';
        });
    }
}
let _0x2ca941 = '';
function _0x37ca86(_0x452ec9) {
    const _0x317020 = document['getElementById']('vote-tally-panel');
    const _0xc2edd8 = document['getElementById']('vote-tally-list');
    if (!_0x317020 || !_0xc2edd8)
        return;
    if (_0x452ec9['state'] !== 'DAY_VOTE') {
        _0x317020['style']['display'] = 'none';
        _0x2ca941 = '';
        return;
    }
    _0x317020['style']['display'] = 'block';
    const _0x1890fa = {};
    for (const _0x1dabc0 in _0x1e4c26) {
        if (!_0x1e4c26[_0x1dabc0]['isDead'])
            _0x1890fa[_0x1dabc0] = 0x0;
    }
    if (_0x2ef182 && !_0x274dd6['isDead'])
        _0x1890fa[_0x2ef182] = 0x0;
    const _0x316355 = _0x452ec9['votes'] || {};
    for (const _0x26c190 in _0x316355) {
        const _0x1db17f = _0x316355[_0x26c190];
        const _0x50cd56 = _0x452ec9['mayorRevealed'] && _0x452ec9['mayorRevealed'][_0x26c190] ? 0x2 : 0x1;
        _0x1890fa[_0x1db17f] = (_0x1890fa[_0x1db17f] || 0x0) + _0x50cd56;
    }
    let _0x258a2d = 0x0;
    const _0x53d556 = _0x452ec9['skips'] || {};
    for (const _0x3bdae9 in _0x53d556) {
        _0x258a2d += Number(_0x53d556[_0x3bdae9]) || 0x1;
    }
    const _0x1aaf41 = JSON['stringify'](_0x1890fa) + '_' + _0x258a2d + '_' + _0x274dd6['isDead'];
    if (_0x1aaf41 === _0x2ca941)
        return;
    _0x2ca941 = _0x1aaf41;
    _0xc2edd8['innerHTML'] = '';
    for (const _0xb477ac in _0x1890fa) {
        const _0x1d6fd1 = parseInt(_0xb477ac);
        const _0x49a046 = _0x1d6fd1 === _0x2ef182 ? _0x4638e3 : _0x1e4c26[_0xb477ac] ? _0x1e4c26[_0xb477ac]['name'] : 'Player\x20' + _0xb477ac;
        const _0x44e3f1 = document['createElement']('div');
        _0x44e3f1['className'] = 'vote-tally-entry';
        const _0x3218c1 = document['createElement']('span');
        _0x3218c1['textContent'] = _0x49a046;
        const _0x3290f1 = document['createElement']('span');
        _0x3290f1['className'] = 'vote-count';
        _0x3290f1['textContent'] = _0x1890fa[_0xb477ac] + '\x20vote' + (_0x1890fa[_0xb477ac] === 0x1 ? '' : 's');
        _0x44e3f1['appendChild'](_0x3218c1);
        _0x44e3f1['appendChild'](_0x3290f1);
        if (_0x1d6fd1 !== _0x2ef182 && !_0x274dd6['isDead']) {
            _0x44e3f1['style']['cursor'] = 'pointer';
            _0x44e3f1['title'] = 'Vote\x20for\x20' + _0x49a046;
            _0x44e3f1['addEventListener']('click', _0x30423e => {
                _0x30423e['stopPropagation']();
                if (_0x37c19c && _0x37c19c['readyState'] === WebSocket['OPEN']) {
                    _0x37c19c['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x49a046
                    }));
                }
            });
        }
        _0xc2edd8['appendChild'](_0x44e3f1);
    }
    const _0x501ad3 = document['createElement']('div');
    _0x501ad3['className'] = 'vote-tally-skip';
    _0x501ad3['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x258a2d + '</span>';
    if (!_0x274dd6['isDead']) {
        _0x501ad3['style']['cursor'] = 'pointer';
        _0x501ad3['title'] = 'Click\x20to\x20skip\x20vote';
        _0x501ad3['addEventListener']('click', _0x4d6957 => {
            _0x4d6957['stopPropagation']();
            if (_0x37c19c && _0x37c19c['readyState'] === WebSocket['OPEN']) {
                _0x37c19c['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0xc2edd8['appendChild'](_0x501ad3);
}
let _0x5c89e2 = null;
let _0x23bf69 = null;
let _0x2f0239 = null;
function _0x281a2e() {
    if (_0x37c19c && _0x37c19c['readyState'] === WebSocket['OPEN']) {
        _0x37c19c['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x5c89e2,
            'abilityTarget': _0x23bf69,
            'killTarget': _0x2f0239
        }));
    }
}
function _0x11ca86() {
    const _0x1998db = document['getElementById']('ability-ui-body');
    if (!_0x1998db)
        return;
    _0x1998db['innerHTML'] = '';
    if (_0x4974dd === 'Celebrity' || _0x4974dd === 'Mayor') {
        const _0x2290ba = document['createElement']('div');
        _0x2290ba['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x2290ba['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x1998db['appendChild'](_0x2290ba);
        return;
    }
    if (_0x4974dd === 'Skinwalker') {
        const _0x3e6b3a = document['createElement']('div');
        _0x3e6b3a['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x3e6b3a['innerText'] = 'Transform\x20into:';
        _0x1998db['appendChild'](_0x3e6b3a);
        const _0x3128ee = document['createElement']('div');
        _0x3128ee['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x2e812b = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x2ae00d = _0xd3652e => {
            if (!_0x3c84cf['ROLE_LIST_RAW'] || _0x3c84cf['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x3c84cf['ROLE_LIST_RAW']['some'](_0x2eddc1 => {
                if (_0x2eddc1['name'] === _0xd3652e)
                    return !_0x2eddc1['isDead'];
                if (_0x50d155[_0x2eddc1['name']] && _0x50d155[_0x2eddc1['name']]['includes'](_0xd3652e))
                    return !![];
                return ![];
            });
        };
        const _0x16db5c = [
            'None',
            ..._0x2e812b['filter'](_0x2ae00d)
        ];
        _0x16db5c['forEach'](_0x46f626 => {
            const _0x3b8e6b = document['createElement']('button');
            _0x3b8e6b['className'] = 'layer-btn';
            _0x3b8e6b['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x3b8e6b['innerText'] = _0x46f626;
            const _0x5e97a0 = _0x46f626 === 'None' && !_0x5c89e2 || _0x5c89e2 === _0x46f626;
            if (_0x5e97a0)
                _0x3b8e6b['classList']['add']('active');
            _0x3b8e6b['onclick'] = () => {
                _0x5c89e2 = _0x46f626 === 'None' ? null : _0x46f626;
                _0x281a2e();
                _0x11ca86();
            };
            _0x3128ee['appendChild'](_0x3b8e6b);
        });
        _0x1998db['appendChild'](_0x3128ee);
        if (_0x2ae00d('Vigilante')) {
            const _0x398e1e = document['createElement']('div');
            _0x398e1e['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x398e1e['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x1998db['appendChild'](_0x398e1e);
        }
        if (_0x5c89e2 === 'Vigilante') {
            const _0x27cbfa = document['createElement']('div');
            _0x27cbfa['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x27cbfa['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x1998db['appendChild'](_0x27cbfa);
        } else if (_0x5c89e2 && _0x5c89e2 !== 'Celebrity') {
            const _0x48c04c = document['createElement']('div');
            _0x48c04c['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x48c04c['innerText'] = 'Use\x20' + _0x5c89e2 + '\x20ability\x20on:';
            _0x1998db['appendChild'](_0x48c04c);
            const _0x141949 = document['createElement']('div');
            _0x141949['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x10d8a4 = document['createElement']('button');
            _0x10d8a4['className'] = 'layer-btn';
            _0x10d8a4['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x10d8a4['innerText'] = 'No\x20one';
            if (!_0x23bf69)
                _0x10d8a4['classList']['add']('active');
            _0x10d8a4['onclick'] = () => {
                _0x23bf69 = null;
                _0x281a2e();
                _0x11ca86();
            };
            _0x141949['appendChild'](_0x10d8a4);
            for (const _0x238940 in _0x1e4c26) {
                const _0x553413 = _0x1e4c26[_0x238940];
                if (_0x553413['isDead'])
                    continue;
                const _0x2c569e = document['createElement']('button');
                _0x2c569e['className'] = 'layer-btn';
                _0x2c569e['innerText'] = _0x553413['name'];
                if (_0x23bf69 === parseInt(_0x238940))
                    _0x2c569e['classList']['add']('active');
                _0x2c569e['onclick'] = () => {
                    _0x23bf69 = parseInt(_0x238940);
                    _0x281a2e();
                    _0x11ca86();
                };
                _0x141949['appendChild'](_0x2c569e);
            }
            _0x1998db['appendChild'](_0x141949);
        }
        const _0x49f8df = document['createElement']('div');
        _0x49f8df['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x49f8df['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x1998db['appendChild'](_0x49f8df);
        const _0x1ab5ea = document['createElement']('div');
        _0x1ab5ea['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x1a5b48 = document['createElement']('button');
        _0x1a5b48['className'] = 'layer-btn';
        _0x1a5b48['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x1a5b48['innerText'] = 'No\x20one';
        if (!_0x2f0239 && !_0x3c84cf['CURRENT_TARGET'])
            _0x1a5b48['classList']['add']('active');
        _0x1a5b48['onclick'] = () => {
            _0x2f0239 = null;
            _0x3c84cf['CURRENT_TARGET'] = null;
            _0x281a2e();
            _0x11ca86();
        };
        _0x1ab5ea['appendChild'](_0x1a5b48);
        for (const _0x2725fe in _0x1e4c26) {
            const _0x4645cb = _0x1e4c26[_0x2725fe];
            if (_0x4645cb['isDead'])
                continue;
            const _0x4b433d = document['createElement']('button');
            _0x4b433d['className'] = 'layer-btn';
            _0x4b433d['innerText'] = _0x4645cb['name'];
            if (_0x2f0239 === parseInt(_0x2725fe) || _0x3c84cf['CURRENT_TARGET'] === parseInt(_0x2725fe))
                _0x4b433d['classList']['add']('active');
            _0x4b433d['onclick'] = () => {
                _0x2f0239 = parseInt(_0x2725fe);
                _0x3c84cf['CURRENT_TARGET'] = parseInt(_0x2725fe);
                _0x281a2e();
                _0x11ca86();
            };
            _0x1ab5ea['appendChild'](_0x4b433d);
        }
        _0x1998db['appendChild'](_0x1ab5ea);
        return;
    }
    let _0x1d74bf = '';
    let _0x146469 = ![];
    if (_0x4974dd === 'Doctor') {
        _0x1d74bf = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x146469 = !![];
    } else if (_0x4974dd === 'Investigator') {
        _0x1d74bf = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x4974dd === 'Tracker') {
        _0x1d74bf = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x4974dd === 'Archer') {
        _0x1d74bf = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x4974dd === 'Escort') {
        _0x1d74bf = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x4974dd === 'Vigilante') {
        _0x1d74bf = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0xb281f0 = document['createElement']('div');
    _0xb281f0['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0xb281f0['innerText'] = _0x1d74bf;
    _0x1998db['appendChild'](_0xb281f0);
    const _0xab75bd = document['createElement']('div');
    _0xab75bd['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x5f1dea = document['createElement']('button');
    _0x5f1dea['className'] = 'layer-btn';
    _0x5f1dea['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x5f1dea['innerText'] = 'No\x20one';
    if (_0x3c84cf['CURRENT_TARGET'] === null)
        _0x5f1dea['classList']['add']('active');
    _0x5f1dea['onclick'] = () => {
        _0x3c84cf['CURRENT_TARGET'] = null;
        if (_0x37c19c && _0x37c19c['readyState'] === WebSocket['OPEN']) {
            _0x37c19c['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x11ca86();
    };
    _0xab75bd['appendChild'](_0x5f1dea);
    for (const _0x2116b4 in _0x1e4c26) {
        const _0x1fe2c7 = _0x1e4c26[_0x2116b4];
        if (_0x1fe2c7['isDead'])
            continue;
        const _0x5a7c25 = document['createElement']('button');
        _0x5a7c25['className'] = 'layer-btn';
        _0x5a7c25['innerText'] = _0x1fe2c7['name'];
        if (_0x3c84cf['CURRENT_TARGET'] === parseInt(_0x2116b4))
            _0x5a7c25['classList']['add']('active');
        _0x5a7c25['onclick'] = () => {
            _0x3c84cf['CURRENT_TARGET'] = parseInt(_0x2116b4);
            if (_0x37c19c && _0x37c19c['readyState'] === WebSocket['OPEN']) {
                _0x37c19c['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x2116b4)
                }));
            }
            _0x11ca86();
        };
        _0xab75bd['appendChild'](_0x5a7c25);
    }
    if (_0x146469 && !_0x274dd6['isDead']) {
        const _0x178105 = document['createElement']('button');
        _0x178105['className'] = 'layer-btn';
        _0x178105['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x178105['innerText'] = _0x4638e3 + '\x20(Self)';
        if (_0x3c84cf['CURRENT_TARGET'] === _0x2ef182)
            _0x178105['classList']['add']('active');
        _0x178105['onclick'] = () => {
            _0x3c84cf['CURRENT_TARGET'] = _0x2ef182;
            if (_0x37c19c && _0x37c19c['readyState'] === WebSocket['OPEN']) {
                _0x37c19c['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x2ef182
                }));
            }
            _0x11ca86();
        };
        _0xab75bd['appendChild'](_0x178105);
    }
    _0x1998db['appendChild'](_0xab75bd);
}
function _0x3c8f04() {
    if (_0x37c19c && (_0x37c19c['readyState'] === WebSocket['OPEN'] || _0x37c19c['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x388306 = new URLSearchParams();
    if (_0x55eb30)
        _0x388306['set']('token', _0x55eb30);
    _0x388306['set']('ngrok-skip-browser-warning', 'true');
    const _0x95f3f0 = 'wss://relating-worker-pipeline-enclosure.trycloudflare.com';
    const _0x2ee238 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x95f3f0;
    const _0x516e15 = _0x2ee238 + '/?' + _0x388306['toString']();
    _0x37c19c = new WebSocket(_0x516e15);
    _0x37c19c['onopen'] = function () {
        if (!_0x129bcf && this['readyState'] === WebSocket['OPEN']) {
            this['send'](JSON['stringify']({
                'type': 'join',
                'name': _0x4638e3,
                'token': _0x55eb30,
                'body': _0x51d7d7,
                'eyes': _0x307171
            }));
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x37c19c && _0x37c19c['readyState'] === WebSocket['OPEN']) {
            _0x37c19c['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x37c19c['onclose'] = _0x56063c => {
        if (_0x56063c['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x56063c['code'] === 0xfa2 || _0x56063c['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x4e9b05 = document['getElementById']('disconnect-overlay');
        if (!_0x4e9b05) {
            _0x4e9b05 = document['createElement']('div');
            _0x4e9b05['id'] = 'disconnect-overlay';
            _0x4e9b05['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x4e9b05['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x4e9b05);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x37c19c['onmessage'] = _0xd14d78 => {
        const _0x5e66bd = JSON['parse'](_0xd14d78['data']);
        if (_0x5e66bd['type'] === 'map_data') {
            _0x3c84cf['MAP']['tileSize'] = _0x5e66bd['map']['tileSize'];
            _0x3c84cf['MAP']['columns'] = _0x5e66bd['map']['columns'];
            _0x3c84cf['MAP']['rows'] = _0x5e66bd['map']['rows'];
            _0x3c84cf['MAP']['layers'] = _0x5e66bd['map']['layers'];
            if (_0x5e66bd['map']['doors']) {
                _0x3c84cf['MAP']['doors'] = _0x5e66bd['map']['doors'];
                const _0xe464fe = _0x3c84cf['MAP']['layers']['find'](_0x1bcb99 => _0x1bcb99['name'] === 'floor2');
                if (_0xe464fe) {
                    for (const _0x22ac71 in _0x3c84cf['MAP']['doors']) {
                        _0xe464fe['data'][parseInt(_0x22ac71)] = 0x2;
                    }
                }
            }
            if (_0x5e66bd['entities'])
                _0x3c84cf['ENTITIES'] = _0x5e66bd['entities'];
            _0x3e233f();
            _0x3c84cf['SYSTEM']['isReady'] = !![];
            _0x48a84e();
            if (!_0x3c84cf['SYSTEM']['_gameLoopRunning']) {
                _0x3c84cf['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x4d72fe);
            }
            return;
        }
        if (_0x5e66bd['type'] === 'init') {
            _0x2ef182 = _0x5e66bd['id'];
            _0x129bcf = ![];
            _0x1d8ad0();
            if (_0x351eee) {
                const _0x1d943c = document['getElementById']('leaderboard-list');
                const _0x36075d = document['getElementById']('leaderboard-toggle');
                if (_0x1d943c) {
                    _0x1d943c['style']['display'] = 'none';
                    if (_0x36075d)
                        _0x36075d['style']['transform'] = 'rotate(180deg)';
                }
                const _0x40620b = document['getElementById']('role-list-items');
                const _0x324d90 = document['getElementById']('role-list-toggle');
                if (_0x40620b) {
                    _0x40620b['style']['display'] = 'none';
                    if (_0x324d90)
                        _0x324d90['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x51591c = _0x5e66bd['isOwner'] || ![];
            _0x4638e3 = _0x5e66bd['name'] || _0x4638e3;
            _0x3c84cf['MAP']['tileSize'] = _0x5e66bd['map']['tileSize'];
            _0x3c84cf['MAP']['columns'] = _0x5e66bd['map']['columns'];
            _0x3c84cf['MAP']['rows'] = _0x5e66bd['map']['rows'];
            _0x3c84cf['MAP']['layers'] = _0x5e66bd['map']['layers'];
            if (_0x5e66bd['map']['doors']) {
                _0x3c84cf['MAP']['doors'] = _0x5e66bd['map']['doors'];
                const _0x273d0f = _0x3c84cf['MAP']['layers']['find'](_0x4ed314 => _0x4ed314['name'] === 'floor2');
                if (_0x273d0f) {
                    for (const _0x20d1a0 in _0x3c84cf['MAP']['doors']) {
                        _0x273d0f['data'][parseInt(_0x20d1a0)] = 0x2;
                    }
                }
            }
            if (_0x5e66bd['entities'])
                _0x3c84cf['ENTITIES'] = _0x5e66bd['entities'];
            _0x3e233f();
            _0x274dd6['x'] = _0x3c84cf['MAP']['columns'] * _0x3c84cf['MAP']['tileSize'] / 0x2;
            _0x274dd6['y'] = _0x3c84cf['MAP']['rows'] * _0x3c84cf['MAP']['tileSize'] / 0x2;
            _0x3c84cf['CAMERA']['x'] = _0x274dd6['x'] + _0x274dd6['width'] / 0x2 - _0x3c84cf['CAMERA']['width'] / 0x2;
            _0x3c84cf['CAMERA']['y'] = _0x274dd6['y'] + _0x274dd6['height'] / 0x2 - _0x3c84cf['CAMERA']['height'] / 0x2;
            if (_0x51591c) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x371fdd();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x3c84cf['SYSTEM']['lastTime'] = performance['now']();
            _0x3c84cf['SYSTEM']['isReady'] = !![];
            _0x1d9196();
            if (!_0x3c84cf['SYSTEM']['_gameLoopRunning']) {
                _0x3c84cf['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x4d72fe);
            }
            return;
        } else if (_0x5e66bd['type'] === 'state') {
            const _0x41aa24 = {};
            for (const _0x20b6e5 in _0x5e66bd['players']) {
                if (parseInt(_0x20b6e5) === _0x2ef182)
                    continue;
                const _0x876bfe = _0x5e66bd['players'][_0x20b6e5];
                const _0x6bdf09 = _0x1e4c26[_0x20b6e5];
                if (_0x6bdf09) {
                    const _0x28da93 = _0x876bfe['x'] - _0x6bdf09['renderX'];
                    const _0x3a502b = _0x876bfe['y'] - _0x6bdf09['renderY'];
                    const _0x404d80 = _0x28da93 * _0x28da93 + _0x3a502b * _0x3a502b > 0x78 * 0x78;
                    Object['assign'](_0x6bdf09, _0x876bfe);
                    if (_0x404d80) {
                        _0x6bdf09['renderX'] = _0x876bfe['x'];
                        _0x6bdf09['renderY'] = _0x876bfe['y'];
                    }
                    _0x41aa24[_0x20b6e5] = _0x6bdf09;
                } else {
                    _0x41aa24[_0x20b6e5] = {
                        ..._0x876bfe,
                        'renderX': _0x876bfe['x'],
                        'renderY': _0x876bfe['y'],
                        'renderAngle': _0x876bfe['angle'] || 0x0
                    };
                }
            }
            _0x1e4c26 = _0x41aa24;
            if (_0x5e66bd['players'][_0x2ef182]) {
                const _0x4ff4fc = _0x5e66bd['players'][_0x2ef182];
                _0x274dd6['chats'] = _0x4ff4fc['chats'] || [];
                _0x274dd6['isDead'] = _0x4ff4fc['isDead'];
                if (_0x4ff4fc['name'])
                    _0x4638e3 = _0x4ff4fc['name'];
                _0x1d9196();
                const _0x1c75a8 = Math['hypot'](_0x4ff4fc['x'] - _0x274dd6['x'], _0x4ff4fc['y'] - _0x274dd6['y']);
                if (_0x1c75a8 > 0x32) {
                    _0x274dd6['x'] += (_0x4ff4fc['x'] - _0x274dd6['x']) * 0.35;
                    _0x274dd6['y'] += (_0x4ff4fc['y'] - _0x274dd6['y']) * 0.35;
                }
            }
            if (_0x5e66bd['entities'])
                _0x3c84cf['ENTITIES'] = _0x5e66bd['entities'];
            if (_0x5e66bd['game']) {
                _0x3c84cf['GAME_STATE'] = _0x5e66bd['game']['state'];
                _0x3c84cf['NIGHT_ABILITY_OPEN'] = _0x5e66bd['game']['nightAbilityOpen'];
                if (_0x5e66bd['game']['mayorRevealed']) {
                    for (const _0x455c4a in _0x5e66bd['game']['mayorRevealed']) {
                        _0x210f96['add'](parseInt(_0x455c4a));
                    }
                }
                if (_0x3c84cf['LAST_STATE'] !== _0x3c84cf['GAME_STATE']) {
                    if (_0x3c84cf['GAME_STATE'] !== 'NIGHT') {
                        _0x3c84cf['CURRENT_TARGET'] = null;
                        _0x5c89e2 = null;
                        _0x23bf69 = null;
                        _0x2f0239 = null;
                        const _0x32edeb = document['getElementById']('ability-ui');
                        if (_0x32edeb)
                            _0x32edeb['style']['display'] = 'none';
                    }
                    if (_0x3c84cf['GAME_STATE'] === 'NIGHT') {
                        _0x274dd6['chats'] = [];
                        for (const _0x16d5f9 in _0x1e4c26) {
                            _0x1e4c26[_0x16d5f9]['chats'] = [];
                        }
                    }
                    _0x3c84cf['LAST_STATE'] = _0x3c84cf['GAME_STATE'];
                    _0x5797bc();
                    _0x2fea02['onStateChange'](_0x3c84cf['GAME_STATE'], _0x5e66bd['game']['nightAbilityOpen']);
                }
                const _0x48117d = document['getElementById']('phase-ui');
                if (_0x48117d) {
                    _0x48117d['style']['display'] = 'block';
                    let _0xdd1f8e = _0x5e66bd['game']['state']['replace']('_', '\x20');
                    if (_0x5e66bd['game']['state'] === 'DAY_DISCUSS') {
                        _0xdd1f8e = 'DAY\x20' + (_0x5e66bd['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x5e66bd['game']['timer'] + 's';
                    } else if (_0x5e66bd['game']['state'] === 'DAY_VOTE') {
                        _0xdd1f8e = 'DAY\x20' + (_0x5e66bd['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x5e66bd['game']['timer'] + 's';
                    } else if (_0x5e66bd['game']['state'] === 'NIGHT') {
                        const _0x2d9058 = _0x5e66bd['game']['dayCount'] || 0x1;
                        if (_0x5e66bd['game']['nightAbilityOpen']) {
                            _0xdd1f8e = 'NIGHT\x20' + _0x2d9058 + '\x20ABILITY\x20PHASE';
                            const _0x1375bf = _0x5e66bd['game']['abilityTimer'] !== undefined ? _0x5e66bd['game']['abilityTimer'] : _0x5e66bd['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x1375bf + 's';
                        } else {
                            _0xdd1f8e = 'NIGHT\x20' + _0x2d9058;
                            document['getElementById']('phase-timer')['innerText'] = _0x5e66bd['game']['timer'] + 's';
                        }
                    }
                    document['getElementById']('phase-name')['innerText'] = _0xdd1f8e;
                }
                if (_0x5e66bd['game']['state'] === 'NIGHT') {
                    const _0x73d475 = document['getElementById']('ability-timer-label');
                    if (_0x73d475) {
                        const _0x50f3f2 = _0x5e66bd['game']['abilityTimer'] !== undefined ? _0x5e66bd['game']['abilityTimer'] : _0x5e66bd['game']['timer'];
                        _0x73d475['innerText'] = _0x5e66bd['game']['nightAbilityOpen'] ? _0x50f3f2 + 's' : '';
                    }
                    if (_0x5e66bd['game']['nightAbilityOpen'] && !_0x2228f9 && !_0x274dd6['isDead']) {
                        _0x2228f9 = !![];
                        _0x11ca86();
                        const _0x56f887 = document['getElementById']('ability-ui');
                        if (_0x56f887)
                            _0x56f887['style']['display'] = 'block';
                    }
                    if (!_0x5e66bd['game']['nightAbilityOpen']) {
                        const _0x41bec5 = document['getElementById']('ability-ui');
                        if (_0x41bec5 && _0x41bec5['style']['display'] === 'block') {
                            _0x41bec5['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x2228f9 = ![];
                }
                _0x37ca86(_0x5e66bd['game']);
                if (_0x5e66bd['game']['roleListMode'] !== undefined) {
                    _0x3c84cf['ROLE_LIST_RAW'] = _0x5e66bd['game']['roleList'] || [];
                    _0x349caa(_0x5e66bd['game']['roleList'], _0x5e66bd['game']['roleListMode']);
                }
            }
        } else if (_0x5e66bd['type'] === 'teleport') {
            _0x274dd6['x'] = _0x5e66bd['x'];
            _0x274dd6['y'] = _0x5e66bd['y'];
            _0x274dd6['vx'] = 0x0;
            _0x274dd6['vy'] = 0x0;
            _0x3c84cf['CAMERA']['x'] = null;
            if (_0x5e66bd['teleportId'] !== undefined)
                _0x55cf6e = _0x5e66bd['teleportId'];
        } else if (_0x5e66bd['type'] === 'bulk_teleport') {
            for (const _0x17f13a in _0x5e66bd['positions']) {
                const _0x12d1bc = _0x5e66bd['positions'][_0x17f13a];
                if (parseInt(_0x17f13a) === _0x2ef182) {
                    _0x274dd6['x'] = _0x12d1bc['x'];
                    _0x274dd6['y'] = _0x12d1bc['y'];
                    _0x274dd6['vx'] = 0x0;
                    _0x274dd6['vy'] = 0x0;
                    _0x3c84cf['CAMERA']['x'] = null;
                    continue;
                }
                const _0x3b04dc = _0x1e4c26[_0x17f13a];
                if (_0x3b04dc) {
                    _0x3b04dc['x'] = _0x12d1bc['x'];
                    _0x3b04dc['y'] = _0x12d1bc['y'];
                    _0x3b04dc['renderX'] = _0x12d1bc['x'];
                    _0x3b04dc['renderY'] = _0x12d1bc['y'];
                    _0x3b04dc['vx'] = 0x0;
                    _0x3b04dc['vy'] = 0x0;
                }
            }
        } else if (_0x5e66bd['type'] === 'player_left') {
            delete _0x1e4c26[_0x5e66bd['id']];
            _0x210f96['delete'](parseInt(_0x5e66bd['id']));
        } else if (_0x5e66bd['type'] === 'map_update') {
            const _0x95a9d7 = _0x3c84cf['MAP']['layers']['find'](_0xb61a82 => _0xb61a82['name'] === _0x5e66bd['layer']);
            if (_0x95a9d7) {
                _0x95a9d7['data'][_0x5e66bd['row'] * _0x3c84cf['MAP']['columns'] + _0x5e66bd['col']] = _0x5e66bd['gid'];
                const _0x51f2c0 = _0x5e66bd['row'] * _0x3c84cf['MAP']['columns'] + _0x5e66bd['col'];
                if (_0x3c84cf['MAP']['doors'] && _0x3c84cf['MAP']['doors'][_0x51f2c0]) {
                    const _0x2d6a73 = _0x3c84cf['MAP']['layers']['find'](_0x2791e8 => _0x2791e8['name'] === 'floor2');
                    if (_0x2d6a73)
                        _0x2d6a73['data'][_0x51f2c0] = 0x2;
                }
                const _0x270695 = Math['floor'](_0x5e66bd['col'] * _0x3c84cf['MAP']['tileSize'] / _0x3c84cf['MAP']['chunkSize']);
                const _0x3dba9b = Math['floor'](_0x5e66bd['row'] * _0x3c84cf['MAP']['tileSize'] / _0x3c84cf['MAP']['chunkSize']);
                _0x48f76c(_0x270695, _0x3dba9b);
            }
        } else if (_0x5e66bd['type'] === 'role_assign') {
            _0x4974dd = _0x5e66bd['role'];
            _0x274dd6['isDead'] = _0x4974dd === 'Spectator';
            _0x210f96['clear']();
            _0x3c84cf['CURRENT_TARGET'] = null;
            _0x5c89e2 = null;
            _0x23bf69 = null;
            _0x2f0239 = null;
            _0x2228f9 = ![];
            const _0xf91325 = document['getElementById']('ability-ui');
            if (_0xf91325)
                _0xf91325['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x4974dd;
            _0x5797bc();
            _0x3b9202(_0x4974dd === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x4974dd, !![]);
            let _0x31cd06 = '';
            if (_0x4974dd === 'Investigator')
                _0x31cd06 = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x4974dd === 'Tracker')
                _0x31cd06 = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x4974dd === 'Doctor')
                _0x31cd06 = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x4974dd === 'Archer')
                _0x31cd06 = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x4974dd === 'Escort')
                _0x31cd06 = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x4974dd === 'Vigilante')
                _0x31cd06 = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x4974dd === 'Skinwalker')
                _0x31cd06 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x4974dd === 'Celebrity')
                _0x31cd06 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x4974dd === 'Mayor')
                _0x31cd06 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x3b9202(_0x31cd06, !![]);
        } else if (_0x5e66bd['type'] === 'mayor_reveal') {
            _0x210f96['add'](parseInt(_0x5e66bd['playerId']));
            _0x1d9196();
            _0x5797bc();
        } else if (_0x5e66bd['type'] === 'rolelist_update') {
            _0x3c84cf['ROLE_LIST_RAW'] = _0x5e66bd['list'] || [];
            _0x349caa(_0x5e66bd['list'], _0x5e66bd['mode']);
        } else if (_0x5e66bd['type'] === 'sound_event') {
            _0x2fea02['onSoundEvent'](_0x5e66bd['track']);
        } else if (_0x5e66bd['type'] === 'game_over') {
            _0x2fea02['onStateChange']('LOBBY', ![]);
            _0x349caa([], 'off');
            _0x4974dd = null;
            _0x274dd6['isDead'] = ![];
            _0x210f96['clear']();
            _0x3c84cf['CURRENT_TARGET'] = null;
            _0x5c89e2 = null;
            _0x23bf69 = null;
            _0x2f0239 = null;
            _0x2228f9 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x5797bc();
            _0x3b9202('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x5e66bd['type'] === 'chat_log') {
            _0x3b9202(_0x5e66bd['sender'] + ':\x20' + _0x5e66bd['text']);
        } else if (_0x5e66bd['type'] === 'sys_chat') {
            _0x3b9202(_0x5e66bd['text'], !![]);
        }
    };
}
function _0x3b9202(_0x55768e, _0x5ab7ff = ![]) {
    const _0x51d870 = document['getElementById']('chat-log-messages');
    const _0xce8a45 = document['getElementById']('chat-log-ui');
    const _0x2107df = _0xce8a45['scrollHeight'] - _0xce8a45['scrollTop'] - _0xce8a45['clientHeight'] < 0x1e;
    const _0x2efaba = document['createElement']('div');
    _0x2efaba['className'] = 'chat-log-line' + (_0x5ab7ff ? '\x20sys-msg' : '');
    _0x2efaba['innerText'] = _0x55768e;
    _0x51d870['appendChild'](_0x2efaba);
    if (_0x2107df) {
        _0xce8a45['scrollTop'] = _0xce8a45['scrollHeight'];
    }
    if (_0x51d870['childElementCount'] > 0xc8) {
        _0x51d870['removeChild'](_0x51d870['firstChild']);
    }
}
let _0x1137bd = -0x1, _0x4bc0ab = -0x1, _0x232fdb = -0x1, _0xcbcc64 = 0x0;
function _0x4243aa() {
    if (!_0x2ef182 || !_0x37c19c || _0x37c19c['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x46b004 = performance['now']();
    const _0x3a146f = _0x46b004 - _0xcbcc64;
    const _0x13472f = Math['abs'](_0x274dd6['x'] - _0x1137bd) > 0.05 || Math['abs'](_0x274dd6['y'] - _0x4bc0ab) > 0.05 || Math['abs'](_0x274dd6['angle'] - _0x232fdb) > 0.02;
    if (!_0x13472f && _0x3a146f < 0xc8)
        return;
    if (_0x3a146f < 0x19)
        return;
    _0xcbcc64 = _0x46b004;
    _0x1137bd = _0x274dd6['x'];
    _0x4bc0ab = _0x274dd6['y'];
    _0x232fdb = _0x274dd6['angle'];
    if (!_0x2ef182 || !_0x37c19c || _0x37c19c['readyState'] !== WebSocket['OPEN'])
        return;
    _0x37c19c['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x274dd6['x'],
        'y': _0x274dd6['y'],
        'vx': _0x274dd6['vx'],
        'vy': _0x274dd6['vy'],
        'angle': _0x274dd6['angle'],
        'scale': _0x274dd6['scale'],
        'teleportId': _0x55cf6e
    }));
}
function _0x51614f() {
    if (_0x274dd6['isDead'])
        return;
    const _0x34b040 = _0x3c84cf['MAP']['layers']['find'](_0x322d4c => _0x322d4c['name'] === 'walls');
    if (!_0x34b040)
        return;
    const _0x4e56ae = _0x274dd6['scale'];
    const _0x12e912 = _0x274dd6['width'] * _0x4e56ae / 0x2;
    for (let _0x298b8f = 0x0; _0x298b8f < 0x3; _0x298b8f++) {
        let _0x478b8a = _0x274dd6['x'] + _0x274dd6['width'] / 0x2;
        let _0x5da2af = _0x274dd6['y'] + _0x274dd6['height'] / 0x2;
        const _0x4eea64 = Math['floor']((_0x478b8a - _0x12e912) / _0x3c84cf['MAP']['tileSize']);
        const _0x124052 = Math['floor']((_0x478b8a + _0x12e912) / _0x3c84cf['MAP']['tileSize']);
        const _0x172f26 = Math['floor']((_0x5da2af - _0x12e912) / _0x3c84cf['MAP']['tileSize']);
        const _0x2cbfcb = Math['floor']((_0x5da2af + _0x12e912) / _0x3c84cf['MAP']['tileSize']);
        for (let _0x35301d = _0x172f26; _0x35301d <= _0x2cbfcb; _0x35301d++) {
            for (let _0x9ded4f = _0x4eea64; _0x9ded4f <= _0x124052; _0x9ded4f++) {
                if (_0x9ded4f < 0x0 || _0x9ded4f >= _0x3c84cf['MAP']['columns'] || _0x35301d < 0x0 || _0x35301d >= _0x3c84cf['MAP']['rows'])
                    continue;
                if (_0x34b040['data'][_0x35301d * _0x3c84cf['MAP']['columns'] + _0x9ded4f] === 0x0)
                    continue;
                const _0x1e3e8f = _0x9ded4f * _0x3c84cf['MAP']['tileSize'];
                const _0x29ba15 = _0x35301d * _0x3c84cf['MAP']['tileSize'];
                const _0x251874 = _0x478b8a < _0x1e3e8f ? _0x1e3e8f : _0x478b8a > _0x1e3e8f + _0x3c84cf['MAP']['tileSize'] ? _0x1e3e8f + _0x3c84cf['MAP']['tileSize'] : _0x478b8a;
                const _0x37e5cb = _0x5da2af < _0x29ba15 ? _0x29ba15 : _0x5da2af > _0x29ba15 + _0x3c84cf['MAP']['tileSize'] ? _0x29ba15 + _0x3c84cf['MAP']['tileSize'] : _0x5da2af;
                const _0x345670 = _0x478b8a - _0x251874;
                const _0x130db6 = _0x5da2af - _0x37e5cb;
                const _0x12867b = Math['sqrt'](_0x345670 * _0x345670 + _0x130db6 * _0x130db6);
                if (_0x12867b < _0x12e912) {
                    if (_0x12867b === 0x0) {
                        const _0x343a83 = _0x478b8a - _0x1e3e8f;
                        const _0x43dcb0 = _0x1e3e8f + _0x3c84cf['MAP']['tileSize'] - _0x478b8a;
                        const _0x4fa7d7 = _0x5da2af - _0x29ba15;
                        const _0x33c5e2 = _0x29ba15 + _0x3c84cf['MAP']['tileSize'] - _0x5da2af;
                        const _0x423e83 = Math['min'](_0x343a83, _0x43dcb0, _0x4fa7d7, _0x33c5e2);
                        if (_0x423e83 === _0x343a83)
                            _0x478b8a = _0x1e3e8f - _0x12e912;
                        else if (_0x423e83 === _0x43dcb0)
                            _0x478b8a = _0x1e3e8f + _0x3c84cf['MAP']['tileSize'] + _0x12e912;
                        else if (_0x423e83 === _0x4fa7d7)
                            _0x5da2af = _0x29ba15 - _0x12e912;
                        else
                            _0x5da2af = _0x29ba15 + _0x3c84cf['MAP']['tileSize'] + _0x12e912;
                    } else {
                        const _0x37f93a = _0x12e912 - _0x12867b;
                        _0x478b8a += _0x345670 / _0x12867b * _0x37f93a;
                        _0x5da2af += _0x130db6 / _0x12867b * _0x37f93a;
                        const _0x366409 = _0x274dd6['vx'] * (_0x345670 / _0x12867b) + _0x274dd6['vy'] * (_0x130db6 / _0x12867b);
                        if (_0x366409 < 0x0) {
                            _0x274dd6['vx'] -= _0x366409 * (_0x345670 / _0x12867b);
                            _0x274dd6['vy'] -= _0x366409 * (_0x130db6 / _0x12867b);
                        }
                    }
                }
            }
        }
        _0x274dd6['x'] = _0x478b8a - _0x274dd6['width'] / 0x2;
        _0x274dd6['y'] = _0x5da2af - _0x274dd6['height'] / 0x2;
    }
}
function _0x2fa2b5(_0x4c7d28) {
    const _0x4397e8 = _0x3c84cf['MAP']['layers']['find'](_0x2dbf7e => _0x2dbf7e['name'] === 'walls');
    if (!_0x4397e8)
        return;
    const _0x2ef427 = _0x4c7d28['width'] / 0x2;
    for (let _0x762b04 = 0x0; _0x762b04 < 0x2; _0x762b04++) {
        let _0xb5a888 = _0x4c7d28['x'] + _0x4c7d28['width'] / 0x2;
        let _0x9f4004 = _0x4c7d28['y'] + _0x4c7d28['height'] / 0x2;
        const _0x4dbed1 = Math['floor']((_0xb5a888 - _0x2ef427) / _0x3c84cf['MAP']['tileSize']);
        const _0x4fd589 = Math['floor']((_0xb5a888 + _0x2ef427) / _0x3c84cf['MAP']['tileSize']);
        const _0x20cd98 = Math['floor']((_0x9f4004 - _0x2ef427) / _0x3c84cf['MAP']['tileSize']);
        const _0x35112e = Math['floor']((_0x9f4004 + _0x2ef427) / _0x3c84cf['MAP']['tileSize']);
        for (let _0x2917e2 = _0x20cd98; _0x2917e2 <= _0x35112e; _0x2917e2++) {
            for (let _0x32dc31 = _0x4dbed1; _0x32dc31 <= _0x4fd589; _0x32dc31++) {
                if (_0x32dc31 < 0x0 || _0x32dc31 >= _0x3c84cf['MAP']['columns'] || _0x2917e2 < 0x0 || _0x2917e2 >= _0x3c84cf['MAP']['rows'])
                    continue;
                if (_0x4397e8['data'][_0x2917e2 * _0x3c84cf['MAP']['columns'] + _0x32dc31] === 0x0)
                    continue;
                const _0x2349f0 = _0x32dc31 * _0x3c84cf['MAP']['tileSize'];
                const _0x30d9b7 = _0x2917e2 * _0x3c84cf['MAP']['tileSize'];
                const _0x36cf16 = _0xb5a888 < _0x2349f0 ? _0x2349f0 : _0xb5a888 > _0x2349f0 + _0x3c84cf['MAP']['tileSize'] ? _0x2349f0 + _0x3c84cf['MAP']['tileSize'] : _0xb5a888;
                const _0x20a084 = _0x9f4004 < _0x30d9b7 ? _0x30d9b7 : _0x9f4004 > _0x30d9b7 + _0x3c84cf['MAP']['tileSize'] ? _0x30d9b7 + _0x3c84cf['MAP']['tileSize'] : _0x9f4004;
                const _0x5d40e1 = _0xb5a888 - _0x36cf16;
                const _0x372ec4 = _0x9f4004 - _0x20a084;
                const _0x2be017 = Math['sqrt'](_0x5d40e1 * _0x5d40e1 + _0x372ec4 * _0x372ec4);
                if (_0x2be017 < _0x2ef427) {
                    if (_0x2be017 === 0x0) {
                        const _0x467ee6 = _0xb5a888 - _0x2349f0;
                        const _0x1fc0a6 = _0x2349f0 + _0x3c84cf['MAP']['tileSize'] - _0xb5a888;
                        const _0x4bfbda = _0x9f4004 - _0x30d9b7;
                        const _0x3cd84e = _0x30d9b7 + _0x3c84cf['MAP']['tileSize'] - _0x9f4004;
                        const _0x453a89 = Math['min'](_0x467ee6, _0x1fc0a6, _0x4bfbda, _0x3cd84e);
                        if (_0x453a89 === _0x467ee6)
                            _0xb5a888 = _0x2349f0 - _0x2ef427;
                        else if (_0x453a89 === _0x1fc0a6)
                            _0xb5a888 = _0x2349f0 + _0x3c84cf['MAP']['tileSize'] + _0x2ef427;
                        else if (_0x453a89 === _0x4bfbda)
                            _0x9f4004 = _0x30d9b7 - _0x2ef427;
                        else
                            _0x9f4004 = _0x30d9b7 + _0x3c84cf['MAP']['tileSize'] + _0x2ef427;
                    } else {
                        const _0x4c19ab = _0x2ef427 - _0x2be017;
                        _0xb5a888 += _0x5d40e1 / _0x2be017 * _0x4c19ab;
                        _0x9f4004 += _0x372ec4 / _0x2be017 * _0x4c19ab;
                    }
                }
            }
        }
        _0x4c7d28['x'] = _0xb5a888 - _0x4c7d28['width'] / 0x2;
        _0x4c7d28['y'] = _0x9f4004 - _0x4c7d28['height'] / 0x2;
    }
}
function _0xd60e0f(_0x50b90c) {
    const _0x3247d2 = _0x50b90c['width'] / 0x2;
    for (let _0x2093fa = 0x0; _0x2093fa < 0x2; _0x2093fa++) {
        let _0x137a0f = _0x50b90c['x'] + _0x50b90c['width'] / 0x2;
        let _0x1a78ee = _0x50b90c['y'] + _0x50b90c['height'] / 0x2;
        for (const _0x518ba6 of _0x3c84cf['ENTITIES']) {
            const _0x8f3b52 = _0x137a0f < _0x518ba6['x'] ? _0x518ba6['x'] : _0x137a0f > _0x518ba6['x'] + _0x518ba6['w'] ? _0x518ba6['x'] + _0x518ba6['w'] : _0x137a0f;
            const _0x2a73e6 = _0x1a78ee < _0x518ba6['y'] ? _0x518ba6['y'] : _0x1a78ee > _0x518ba6['y'] + _0x518ba6['h'] ? _0x518ba6['y'] + _0x518ba6['h'] : _0x1a78ee;
            const _0x5b19b8 = _0x137a0f - _0x8f3b52;
            const _0x18f564 = _0x1a78ee - _0x2a73e6;
            const _0xd12fdb = Math['sqrt'](_0x5b19b8 * _0x5b19b8 + _0x18f564 * _0x18f564);
            if (_0xd12fdb < _0x3247d2 && _0xd12fdb > 0x0) {
                const _0x431782 = _0x3247d2 - _0xd12fdb;
                const _0x347f6e = _0x5b19b8 / _0xd12fdb;
                const _0x4d5d09 = _0x18f564 / _0xd12fdb;
                _0x137a0f += _0x347f6e * _0x431782;
                _0x1a78ee += _0x4d5d09 * _0x431782;
            } else if (_0xd12fdb === 0x0) {
                const _0x515de7 = _0x137a0f - _0x518ba6['x'];
                const _0x5c1bce = _0x518ba6['x'] + _0x518ba6['w'] - _0x137a0f;
                const _0x5e0074 = _0x1a78ee - _0x518ba6['y'];
                const _0x3ee317 = _0x518ba6['y'] + _0x518ba6['h'] - _0x1a78ee;
                const _0x4db251 = Math['min'](_0x515de7, _0x5c1bce, _0x5e0074, _0x3ee317);
                if (_0x4db251 === _0x515de7)
                    _0x137a0f = _0x518ba6['x'] - _0x3247d2;
                else if (_0x4db251 === _0x5c1bce)
                    _0x137a0f = _0x518ba6['x'] + _0x518ba6['w'] + _0x3247d2;
                else if (_0x4db251 === _0x5e0074)
                    _0x1a78ee = _0x518ba6['y'] - _0x3247d2;
                else
                    _0x1a78ee = _0x518ba6['y'] + _0x518ba6['h'] + _0x3247d2;
            }
        }
        _0x50b90c['x'] = _0x137a0f - _0x50b90c['width'] / 0x2;
        _0x50b90c['y'] = _0x1a78ee - _0x50b90c['height'] / 0x2;
    }
}
function _0xd839fe() {
    if (_0x274dd6['isDead'])
        return;
    const _0x53895f = _0x274dd6['width'] / 0x2;
    const _0x3a0cf = _0x274dd6['x'] + _0x274dd6['width'] / 0x2;
    const _0x1dbaab = _0x274dd6['y'] + _0x274dd6['height'] / 0x2;
    for (const _0x5e7c78 in _0x1e4c26) {
        const _0x45b198 = _0x1e4c26[_0x5e7c78];
        if (_0x45b198['isDead'])
            continue;
        const _0x1eee4c = _0x45b198['width'] / 0x2;
        const _0x149454 = _0x53895f + _0x1eee4c;
        const _0x47b95e = (_0x45b198['renderX'] ?? _0x45b198['x']) + _0x45b198['width'] / 0x2;
        const _0x2ad6ea = (_0x45b198['renderY'] ?? _0x45b198['y']) + _0x45b198['height'] / 0x2;
        const _0x18664a = _0x3a0cf - _0x47b95e;
        const _0x4cd6b8 = _0x1dbaab - _0x2ad6ea;
        const _0x2e8a45 = Math['sqrt'](_0x18664a * _0x18664a + _0x4cd6b8 * _0x4cd6b8);
        if (_0x2e8a45 > 0x0 && _0x2e8a45 < _0x149454) {
            const _0x18df2d = _0x149454 - _0x2e8a45;
            const _0x3f1ee9 = _0x18664a / _0x2e8a45;
            const _0x4263e = _0x4cd6b8 / _0x2e8a45;
            _0x274dd6['x'] += _0x3f1ee9 * (_0x18df2d * 0.25);
            _0x274dd6['y'] += _0x4263e * (_0x18df2d * 0.25);
            _0x45b198['x'] -= _0x3f1ee9 * (_0x18df2d * 0.75);
            _0x45b198['y'] -= _0x4263e * (_0x18df2d * 0.75);
            _0x2fa2b5(_0x45b198);
            _0xd60e0f(_0x45b198);
            if (_0x45b198['renderX'] !== undefined) {
                _0x45b198['renderX'] = _0x45b198['x'];
                _0x45b198['renderY'] = _0x45b198['y'];
            }
            const _0x5b68e5 = _0x274dd6['vx'] * _0x3f1ee9 + _0x274dd6['vy'] * _0x4263e;
            if (_0x5b68e5 < 0x0) {
                _0x274dd6['vx'] -= _0x5b68e5 * _0x3f1ee9 * 0.25;
                _0x274dd6['vy'] -= _0x5b68e5 * _0x4263e * 0.25;
            }
        }
    }
    _0x51614f();
    _0x1d731f();
}
function _0x1d731f() {
    if (_0x274dd6['isDead'])
        return;
    const _0x3e8fd5 = _0x274dd6['scale'];
    const _0x39c10b = _0x274dd6['width'] * _0x3e8fd5 / 0x2;
    for (let _0x116a75 = 0x0; _0x116a75 < 0x2; _0x116a75++) {
        let _0x575bed = _0x274dd6['x'] + _0x274dd6['width'] / 0x2;
        let _0x50e573 = _0x274dd6['y'] + _0x274dd6['height'] / 0x2;
        for (const _0x159cd6 of _0x3c84cf['ENTITIES']) {
            const _0x44acdc = _0x575bed < _0x159cd6['x'] ? _0x159cd6['x'] : _0x575bed > _0x159cd6['x'] + _0x159cd6['w'] ? _0x159cd6['x'] + _0x159cd6['w'] : _0x575bed;
            const _0x359b81 = _0x50e573 < _0x159cd6['y'] ? _0x159cd6['y'] : _0x50e573 > _0x159cd6['y'] + _0x159cd6['h'] ? _0x159cd6['y'] + _0x159cd6['h'] : _0x50e573;
            const _0x130500 = _0x575bed - _0x44acdc;
            const _0x5e3add = _0x50e573 - _0x359b81;
            const _0x50d37a = Math['sqrt'](_0x130500 * _0x130500 + _0x5e3add * _0x5e3add);
            if (_0x50d37a < _0x39c10b && _0x50d37a > 0x0) {
                const _0x2694c2 = _0x39c10b - _0x50d37a;
                const _0x176bcd = _0x130500 / _0x50d37a;
                const _0x36338c = _0x5e3add / _0x50d37a;
                _0x575bed += _0x176bcd * _0x2694c2;
                _0x50e573 += _0x36338c * _0x2694c2;
                const _0x328366 = _0x274dd6['vx'] * _0x176bcd + _0x274dd6['vy'] * _0x36338c;
                if (_0x328366 < 0x0) {
                    _0x274dd6['vx'] -= _0x328366 * _0x176bcd;
                    _0x274dd6['vy'] -= _0x328366 * _0x36338c;
                }
            } else if (_0x50d37a === 0x0) {
                const _0x28aeb2 = _0x575bed - _0x159cd6['x'];
                const _0x51476a = _0x159cd6['x'] + _0x159cd6['w'] - _0x575bed;
                const _0x2416fb = _0x50e573 - _0x159cd6['y'];
                const _0x1d6607 = _0x159cd6['y'] + _0x159cd6['h'] - _0x50e573;
                const _0x53b30d = Math['min'](_0x28aeb2, _0x51476a, _0x2416fb, _0x1d6607);
                if (_0x53b30d === _0x28aeb2)
                    _0x575bed = _0x159cd6['x'] - _0x39c10b;
                else if (_0x53b30d === _0x51476a)
                    _0x575bed = _0x159cd6['x'] + _0x159cd6['w'] + _0x39c10b;
                else if (_0x53b30d === _0x2416fb)
                    _0x50e573 = _0x159cd6['y'] - _0x39c10b;
                else
                    _0x50e573 = _0x159cd6['y'] + _0x159cd6['h'] + _0x39c10b;
            }
        }
        _0x274dd6['x'] = _0x575bed - _0x274dd6['width'] / 0x2;
        _0x274dd6['y'] = _0x50e573 - _0x274dd6['height'] / 0x2;
    }
}
function _0x5223b0(_0x3d7f63, _0x2029da) {
    const _0x45b195 = _0x3c84cf['MAP']['layers']['find'](_0x202ec6 => _0x202ec6['name'] === 'trees');
    if (!_0x45b195)
        return ![];
    const _0x221b52 = Math['floor'](_0x3d7f63 / _0x3c84cf['MAP']['tileSize']);
    const _0xbf36c9 = Math['floor'](_0x2029da / _0x3c84cf['MAP']['tileSize']);
    if (_0x221b52 < 0x0 || _0x221b52 >= _0x3c84cf['MAP']['columns'] || _0xbf36c9 < 0x0 || _0xbf36c9 >= _0x3c84cf['MAP']['rows'])
        return ![];
    return _0x45b195['data'][_0xbf36c9 * _0x3c84cf['MAP']['columns'] + _0x221b52] === 0xb;
}
let _0x11f0b3 = null;
function _0x19fb08() {
    const _0x390679 = _0x3c84cf['MAP'];
    const _0x5acdfd = _0x390679['layers']['find'](_0x4ead1b => _0x4ead1b['name'] === 'floor2');
    const _0x57dba4 = _0x390679['layers']['find'](_0x4ab006 => _0x4ab006['name'] === 'walls');
    if (!_0x5acdfd || !_0x57dba4) {
        _0x11f0b3 = null;
        return;
    }
    const _0x1310d0 = _0x390679['columns'];
    const _0x473e6a = _0x390679['rows'];
    const _0x38d4f5 = [];
    const _0x26b31a = [];
    const _0x1bee54 = new Set();
    for (let _0x13fbbc = 0x0; _0x13fbbc < _0x473e6a; _0x13fbbc++) {
        for (let _0x4eaae5 = 0x0; _0x4eaae5 < _0x1310d0; _0x4eaae5++) {
            const _0x17d9b0 = _0x13fbbc * _0x1310d0 + _0x4eaae5;
            const _0x14ede1 = _0x5acdfd['data'][_0x17d9b0];
            const _0x33892f = _0x57dba4['data'][_0x17d9b0];
            if (_0x14ede1 === 0x2 || _0x14ede1 === 0x4) {
                _0x38d4f5['push']({
                    'c': _0x4eaae5,
                    'r': _0x13fbbc
                });
                if (_0x33892f !== 0x0)
                    _0x26b31a['push']({
                        'c': _0x4eaae5,
                        'r': _0x13fbbc
                    });
            }
            if (_0x33892f !== 0x0)
                _0x1bee54['add'](_0x4eaae5 + ',' + _0x13fbbc);
        }
    }
    const _0x51a1bc = new Set(_0x38d4f5['map'](_0x255fa6 => _0x255fa6['c'] + ',' + _0x255fa6['r']));
    const _0x5a1451 = [
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
                c: _0x4bd4b4,
                r: _0xada77a
            } of _0x38d4f5) {
        for (const [_0x48ac3f, _0x2054ea] of _0x5a1451) {
            const _0x240876 = _0x4bd4b4 + _0x48ac3f, _0x2d4aa0 = _0xada77a + _0x2054ea;
            const _0x29b824 = _0x240876 + ',' + _0x2d4aa0;
            if (!_0x51a1bc['has'](_0x29b824))
                _0x1bee54['add'](_0x29b824);
        }
    }
    _0x11f0b3 = {
        'wallSet': _0x1bee54,
        'floorTiles': _0x38d4f5,
        'wallTiles': _0x26b31a,
        'interiorSet': _0x51a1bc
    };
}
function _0x5e8132() {
    const _0x403da7 = _0x3c84cf['MAP']['layers']['find'](_0x6b131a => _0x6b131a['name'] === 'floor2');
    if (!_0x403da7)
        return ![];
    const _0x521f71 = Math['floor']((_0x274dd6['x'] + _0x274dd6['width'] / 0x2) / _0x3c84cf['MAP']['tileSize']);
    const _0x21000a = Math['floor']((_0x274dd6['y'] + _0x274dd6['height'] / 0x2) / _0x3c84cf['MAP']['tileSize']);
    if (_0x521f71 < 0x0 || _0x521f71 >= _0x3c84cf['MAP']['columns'] || _0x21000a < 0x0 || _0x21000a >= _0x3c84cf['MAP']['rows'])
        return ![];
    const _0x89b7f6 = _0x403da7['data'][_0x21000a * _0x3c84cf['MAP']['columns'] + _0x521f71];
    return _0x89b7f6 === 0x2;
}
function _0x403e68() {
    if (_0x274dd6['isDead']) {
        _0x3c84cf['SHADOW']['polygon'] = null;
        return;
    }
    const _0x13dcb6 = _0x3c84cf['MAP'];
    const _0x119507 = _0x3c84cf['SHADOW'];
    const _0x34c88b = _0x13dcb6['tileSize'];
    if (!_0x11f0b3)
        _0x19fb08();
    if (!_0x11f0b3) {
        _0x119507['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x444c5a,
        floorTiles: _0x14f50b
    } = _0x11f0b3;
    if (_0x14f50b['length'] === 0x0) {
        _0x119507['polygon'] = null;
        return;
    }
    if (!_0x5e8132()) {
        _0x119507['polygon'] = null;
        return;
    }
    const _0x219648 = _0x274dd6['x'] + _0x274dd6['width'] / 0x2;
    const _0x4fdbca = _0x274dd6['y'] + _0x274dd6['height'] / 0x2;
    if (!_0x11f0b3['_bounds']) {
        let _0x40059b = Infinity, _0x69735b = -Infinity, _0x4461fc = Infinity, _0x387780 = -Infinity;
        for (const {
                    c: _0x414536,
                    r: _0x59334b
                } of _0x14f50b) {
            if (_0x414536 < _0x40059b)
                _0x40059b = _0x414536;
            if (_0x414536 > _0x69735b)
                _0x69735b = _0x414536;
            if (_0x59334b < _0x4461fc)
                _0x4461fc = _0x59334b;
            if (_0x59334b > _0x387780)
                _0x387780 = _0x59334b;
        }
        _0x11f0b3['_bounds'] = {
            'minC': Math['max'](0x0, _0x40059b - 0x1),
            'maxC': Math['min'](_0x13dcb6['columns'] - 0x1, _0x69735b + 0x1),
            'minR': Math['max'](0x0, _0x4461fc - 0x1),
            'maxR': Math['min'](_0x13dcb6['rows'] - 0x1, _0x387780 + 0x1)
        };
        const _0x35a05b = [];
        for (let _0x2f4ac6 = _0x11f0b3['_bounds']['minR']; _0x2f4ac6 <= _0x11f0b3['_bounds']['maxR']; _0x2f4ac6++) {
            for (let _0x4b5ed3 = _0x11f0b3['_bounds']['minC']; _0x4b5ed3 <= _0x11f0b3['_bounds']['maxC']; _0x4b5ed3++) {
                if (_0x444c5a['has'](_0x4b5ed3 + ',' + _0x2f4ac6))
                    _0x35a05b['push'](_0x4b5ed3, _0x2f4ac6);
            }
        }
        _0x11f0b3['_wallArr'] = _0x35a05b;
    }
    const {
        minC: _0x41f957,
        maxC: _0x2ffd9c,
        minR: _0x49011e,
        maxR: _0x4301f7
    } = _0x11f0b3['_bounds'];
    const _0x13cad2 = _0x11f0b3['_wallArr'];
    const _0x4ddf09 = 0.0001;
    const _0x101e78 = new Set();
    const _0x28aa07 = [];
    for (let _0xdfdb30 = 0x0; _0xdfdb30 < _0x13cad2['length']; _0xdfdb30 += 0x2) {
        const _0x41f716 = _0x13cad2[_0xdfdb30], _0x4a0b03 = _0x13cad2[_0xdfdb30 + 0x1];
        const _0x15a912 = [
            _0x41f716 * _0x34c88b,
            _0x4a0b03 * _0x34c88b,
            _0x41f716 * _0x34c88b + _0x34c88b,
            _0x4a0b03 * _0x34c88b,
            _0x41f716 * _0x34c88b,
            _0x4a0b03 * _0x34c88b + _0x34c88b,
            _0x41f716 * _0x34c88b + _0x34c88b,
            _0x4a0b03 * _0x34c88b + _0x34c88b
        ];
        for (let _0x2d230b = 0x0; _0x2d230b < _0x15a912['length']; _0x2d230b += 0x2) {
            const _0x1fad5e = _0x15a912[_0x2d230b], _0x459b1a = _0x15a912[_0x2d230b + 0x1];
            const _0x32f5dd = Math['atan2'](_0x459b1a - _0x4fdbca, _0x1fad5e - _0x219648);
            const _0x19b2ec = Math['round'](_0x32f5dd * 0x4e20);
            if (!_0x101e78['has'](_0x19b2ec - 0x1)) {
                _0x101e78['add'](_0x19b2ec - 0x1);
                _0x28aa07['push'](_0x32f5dd - _0x4ddf09);
            }
            if (!_0x101e78['has'](_0x19b2ec)) {
                _0x101e78['add'](_0x19b2ec);
                _0x28aa07['push'](_0x32f5dd);
            }
            if (!_0x101e78['has'](_0x19b2ec + 0x1)) {
                _0x101e78['add'](_0x19b2ec + 0x1);
                _0x28aa07['push'](_0x32f5dd + _0x4ddf09);
            }
        }
    }
    _0x28aa07['sort']((_0x526431, _0x34a94f) => _0x526431 - _0x34a94f);
    const _0x2444a9 = Math['hypot']((_0x2ffd9c - _0x41f957 + 0x2) * _0x34c88b, (_0x4301f7 - _0x49011e + 0x2) * _0x34c88b);
    const _0x4fe319 = _0x54fdb6 => {
        const _0x2d91ff = Math['cos'](_0x54fdb6);
        const _0x89e32e = Math['sin'](_0x54fdb6);
        let _0x2537b1 = _0x2444a9;
        for (let _0x355849 = 0x0; _0x355849 < _0x13cad2['length']; _0x355849 += 0x2) {
            const _0x399aef = _0x13cad2[_0x355849], _0x1a9baa = _0x13cad2[_0x355849 + 0x1];
            const _0x1f81c5 = _0x399aef * _0x34c88b, _0xcb2960 = _0x1a9baa * _0x34c88b;
            const _0xc23bc0 = _0x1f81c5 + _0x34c88b, _0x1a7dd5 = _0xcb2960 + _0x34c88b;
            const _0x6f642b = _0x1f81c5 + _0x34c88b * 0.5, _0x45ecac = _0xcb2960 + _0x34c88b * 0.5;
            const _0x587e0e = Math['abs'](_0x6f642b - _0x219648) + Math['abs'](_0x45ecac - _0x4fdbca);
            if (_0x587e0e > _0x2537b1 + _0x34c88b * 1.5)
                continue;
            let _0x3128d4, _0x1a5f4f, _0x3b10b3;
            _0x3128d4 = -_0x89e32e * _0x34c88b;
            if (Math['abs'](_0x3128d4) >= 1e-10) {
                _0x1a5f4f = -(_0xcb2960 - _0x4fdbca) * _0x34c88b / _0x3128d4;
                _0x3b10b3 = ((_0x1f81c5 - _0x219648) * _0x89e32e - (_0xcb2960 - _0x4fdbca) * _0x2d91ff) / _0x3128d4;
                if (_0x1a5f4f > 0.001 && _0x3b10b3 >= 0x0 && _0x3b10b3 <= 0x1 && _0x1a5f4f < _0x2537b1)
                    _0x2537b1 = _0x1a5f4f;
            }
            _0x3128d4 = _0x2d91ff * _0x34c88b;
            if (Math['abs'](_0x3128d4) >= 1e-10) {
                _0x1a5f4f = (_0xc23bc0 - _0x219648) * _0x34c88b / _0x3128d4;
                _0x3b10b3 = ((_0xc23bc0 - _0x219648) * _0x89e32e - (_0xcb2960 - _0x4fdbca) * _0x2d91ff) / _0x3128d4;
                if (_0x1a5f4f > 0.001 && _0x3b10b3 >= 0x0 && _0x3b10b3 <= 0x1 && _0x1a5f4f < _0x2537b1)
                    _0x2537b1 = _0x1a5f4f;
            }
            _0x3128d4 = _0x89e32e * _0x34c88b;
            if (Math['abs'](_0x3128d4) >= 1e-10) {
                _0x1a5f4f = (_0x1a7dd5 - _0x4fdbca) * _0x34c88b / _0x3128d4;
                _0x3b10b3 = ((_0xc23bc0 - _0x219648) * _0x89e32e - (_0x1a7dd5 - _0x4fdbca) * _0x2d91ff) / _0x3128d4;
                if (_0x1a5f4f > 0.001 && _0x3b10b3 >= 0x0 && _0x3b10b3 <= 0x1 && _0x1a5f4f < _0x2537b1)
                    _0x2537b1 = _0x1a5f4f;
            }
            _0x3128d4 = -_0x2d91ff * _0x34c88b;
            if (Math['abs'](_0x3128d4) >= 1e-10) {
                _0x1a5f4f = -(_0x1f81c5 - _0x219648) * _0x34c88b / _0x3128d4;
                _0x3b10b3 = ((_0x1f81c5 - _0x219648) * _0x89e32e - (_0x1a7dd5 - _0x4fdbca) * _0x2d91ff) / _0x3128d4;
                if (_0x1a5f4f > 0.001 && _0x3b10b3 >= 0x0 && _0x3b10b3 <= 0x1 && _0x1a5f4f < _0x2537b1)
                    _0x2537b1 = _0x1a5f4f;
            }
        }
        const _0x1ba3c8 = _0x2537b1 < _0x2444a9 ? _0x2537b1 + 0x8 : _0x2537b1;
        return {
            'x': _0x219648 + _0x2d91ff * _0x1ba3c8,
            'y': _0x4fdbca + _0x89e32e * _0x1ba3c8
        };
    };
    const _0x551e06 = [];
    for (let _0x3f976a = 0x0; _0x3f976a < _0x28aa07['length']; _0x3f976a++) {
        const _0x36c949 = _0x4fe319(_0x28aa07[_0x3f976a]);
        _0x551e06['push'](_0x36c949['x'], _0x36c949['y']);
    }
    _0x119507['polygon'] = _0x551e06['length'] >= 0x6 ? new Float32Array(_0x551e06) : null;
}
function _0x5a1777(_0x524250, _0x38df35, _0xaa9f9a) {
    if (_0x274dd6['isDead'])
        return;
    if (!_0x11f0b3)
        return;
    const {
        floorTiles: _0x255da8,
        wallTiles: _0x2c8872
    } = _0x11f0b3;
    if (_0x255da8['length'] === 0x0)
        return;
    const _0x18c2e3 = _0x3c84cf['SHADOW'];
    const _0x92d1e0 = _0x3c84cf['MAP']['tileSize'];
    const _0x2ffb4 = _0x3c84cf['CAMERA']['width'];
    const _0x48b346 = _0x3c84cf['CAMERA']['height'];
    if (!_0x3c84cf['SHADOW']['_buf'] || _0x3c84cf['SHADOW']['_buf']['width'] !== _0x2ffb4 || _0x3c84cf['SHADOW']['_buf']['height'] !== _0x48b346) {
        _0x3c84cf['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x3c84cf['SHADOW']['_buf']['width'] = _0x2ffb4;
        _0x3c84cf['SHADOW']['_buf']['height'] = _0x48b346;
    }
    const _0x1ef5fa = _0x3c84cf['SHADOW']['_buf'];
    const _0x3f2b9f = _0x1ef5fa['getContext']('2d');
    _0x3f2b9f['clearRect'](0x0, 0x0, _0x2ffb4, _0x48b346);
    _0x3f2b9f['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x3f2b9f['beginPath']();
    for (const {
                c: _0x352102,
                r: _0x9b5d00
            } of _0x255da8) {
        const _0x30e519 = Math['floor'](_0x352102 * _0x92d1e0 - _0x38df35), _0x13d466 = Math['floor'](_0x9b5d00 * _0x92d1e0 - _0xaa9f9a);
        if (_0x30e519 > _0x2ffb4 || _0x13d466 > _0x48b346 || _0x30e519 + _0x92d1e0 < 0x0 || _0x13d466 + _0x92d1e0 < 0x0)
            continue;
        _0x3f2b9f['rect'](_0x30e519 - 0x1, _0x13d466 - 0x1, _0x92d1e0 + 0x2, _0x92d1e0 + 0x2);
    }
    _0x3f2b9f['fill']();
    if (_0x2c8872['length'] > 0x0) {
        _0x3f2b9f['globalCompositeOperation'] = 'destination-out';
        _0x3f2b9f['fillStyle'] = 'rgba(0,0,0,1)';
        _0x3f2b9f['beginPath']();
        for (const {
                    c: _0x23bdf4,
                    r: _0xf46329
                } of _0x2c8872) {
            const _0x317c0b = Math['floor'](_0x23bdf4 * _0x92d1e0 - _0x38df35), _0x420b44 = Math['floor'](_0xf46329 * _0x92d1e0 - _0xaa9f9a);
            if (_0x317c0b > _0x2ffb4 || _0x420b44 > _0x48b346 || _0x317c0b + _0x92d1e0 < 0x0 || _0x420b44 + _0x92d1e0 < 0x0)
                continue;
            _0x3f2b9f['rect'](_0x317c0b - 0x1, _0x420b44 - 0x1, _0x92d1e0 + 0x2, _0x92d1e0 + 0x2);
        }
        _0x3f2b9f['fill']();
        _0x3f2b9f['globalCompositeOperation'] = 'source-over';
    }
    if (_0x18c2e3['polygon'] && _0x18c2e3['polygon']['length'] >= 0x6) {
        _0x3f2b9f['globalCompositeOperation'] = 'destination-out';
        _0x3f2b9f['beginPath']();
        const _0x1eecb1 = _0x18c2e3['polygon'];
        _0x3f2b9f['moveTo'](_0x1eecb1[0x0] - _0x38df35, _0x1eecb1[0x1] - _0xaa9f9a);
        for (let _0x15697f = 0x2; _0x15697f < _0x1eecb1['length']; _0x15697f += 0x2) {
            _0x3f2b9f['lineTo'](_0x1eecb1[_0x15697f] - _0x38df35, _0x1eecb1[_0x15697f + 0x1] - _0xaa9f9a);
        }
        _0x3f2b9f['closePath']();
        _0x3f2b9f['fill']();
        _0x3f2b9f['globalCompositeOperation'] = 'source-over';
    }
    _0x524250['drawImage'](_0x1ef5fa, 0x0, 0x0);
}
function _0x196a1b(_0x40dbcd) {
    let _0x347a89 = 0x0, _0x35f798 = 0x0;
    const _0x544646 = _0x3c84cf['INPUTS']['mouseX'] / _0x3c84cf['SYSTEM']['viewScale'];
    const _0x179ab0 = _0x3c84cf['INPUTS']['mouseY'] / _0x3c84cf['SYSTEM']['viewScale'];
    const _0x283c76 = _0x274dd6['x'] - _0x3c84cf['CAMERA']['x'] + _0x274dd6['width'] / 0x2;
    const _0x285301 = _0x274dd6['y'] - _0x3c84cf['CAMERA']['y'] + _0x274dd6['height'] / 0x2;
    const _0x288f4f = Math['atan2'](_0x179ab0 - _0x285301, _0x544646 - _0x283c76);
    if (_0x129829 !== 0x0 || _0x1d75d7 !== 0x0) {
        _0x347a89 = _0x129829;
        _0x35f798 = _0x1d75d7;
    } else if (_0xd5571b) {
        let _0xd38dbe = 0x0, _0x16ec20 = 0x0;
        if (_0x3c84cf['INPUTS']['keys']['w'] || _0x3c84cf['INPUTS']['keys']['arrowup'])
            _0xd38dbe += 0x1;
        if (_0x3c84cf['INPUTS']['keys']['s'] || _0x3c84cf['INPUTS']['keys']['arrowdown'])
            _0xd38dbe -= 0x1;
        if (_0x3c84cf['INPUTS']['keys']['d'] || _0x3c84cf['INPUTS']['keys']['arrowright'])
            _0x16ec20 += 0x1;
        if (_0x3c84cf['INPUTS']['keys']['a'] || _0x3c84cf['INPUTS']['keys']['arrowleft'])
            _0x16ec20 -= 0x1;
        if (_0xd38dbe !== 0x0 || _0x16ec20 !== 0x0) {
            const _0x2edc96 = _0x288f4f + Math['atan2'](_0x16ec20, _0xd38dbe);
            _0x347a89 = Math['cos'](_0x2edc96);
            _0x35f798 = Math['sin'](_0x2edc96);
        }
    } else {
        if (_0x3c84cf['INPUTS']['keys']['w'] || _0x3c84cf['INPUTS']['keys']['arrowup'])
            _0x35f798 -= 0x1;
        if (_0x3c84cf['INPUTS']['keys']['s'] || _0x3c84cf['INPUTS']['keys']['arrowdown'])
            _0x35f798 += 0x1;
        if (_0x3c84cf['INPUTS']['keys']['a'] || _0x3c84cf['INPUTS']['keys']['arrowleft'])
            _0x347a89 -= 0x1;
        if (_0x3c84cf['INPUTS']['keys']['d'] || _0x3c84cf['INPUTS']['keys']['arrowright'])
            _0x347a89 += 0x1;
        const _0x137a26 = _0x347a89 !== 0x0 || _0x35f798 !== 0x0;
        if (_0x137a26) {
            const _0x591267 = Math['sqrt'](_0x347a89 * _0x347a89 + _0x35f798 * _0x35f798);
            _0x347a89 /= _0x591267;
            _0x35f798 /= _0x591267;
        }
    }
    if (_0x3c84cf['GAME_STATE'] === 'NIGHT' && _0x4974dd === 'Skinwalker') {
        if (_0x3c84cf['NIGHT_ABILITY_OPEN'] || !_0x3c84cf['CURRENT_TARGET']) {
            _0x347a89 = 0x0;
            _0x35f798 = 0x0;
            _0x274dd6['vx'] = 0x0;
            _0x274dd6['vy'] = 0x0;
            _0x274dd6['x'] = _0x3c84cf['MAP']['columns'] * _0x3c84cf['MAP']['tileSize'] / 0x2 - _0x274dd6['width'] / 0x2;
            _0x274dd6['y'] = _0x3c84cf['MAP']['rows'] * _0x3c84cf['MAP']['tileSize'] / 0x2 - _0x274dd6['height'] / 0x2;
        }
    }
    const _0x5c1d1d = _0x347a89 !== 0x0 || _0x35f798 !== 0x0;
    const _0x43b4d1 = (_0x3c84cf['INPUTS']['keys']['shift'] || _0x4cec9d || _0x531473) && _0x5c1d1d;
    _0x274dd6['bopTimer'] = _0x43b4d1 ? _0x274dd6['bopTimer'] + _0x40dbcd : 0x0;
    _0x274dd6['scale'] = 0x1 + (_0x274dd6['bopTimer'] > 0x0 ? Math['sin'](_0x274dd6['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x47eebe = Math['pow'](0.001, _0x40dbcd);
    const _0x43d0fe = _0x43b4d1 ? 0x74a : 0x5d5;
    _0x274dd6['vx'] += _0x347a89 * _0x43d0fe * _0x40dbcd;
    _0x274dd6['vy'] += _0x35f798 * _0x43d0fe * _0x40dbcd;
    _0x274dd6['vx'] *= _0x47eebe;
    _0x274dd6['vy'] *= _0x47eebe;
    _0x274dd6['x'] += _0x274dd6['vx'] * _0x40dbcd;
    _0x274dd6['y'] += _0x274dd6['vy'] * _0x40dbcd;
    for (let _0x2318b8 = 0x0; _0x2318b8 < 0x3; _0x2318b8++)
        _0x51614f();
    for (let _0x57ebde = 0x0; _0x57ebde < 0x2; _0x57ebde++)
        _0x1d731f();
    for (let _0x1adda4 = 0x0; _0x1adda4 < 0x2; _0x1adda4++)
        _0xd839fe();
    if (_0x274dd6['x'] < 0x0)
        _0x274dd6['x'] = 0x0;
    if (_0x274dd6['y'] < 0x0)
        _0x274dd6['y'] = 0x0;
    if (_0x274dd6['x'] + _0x274dd6['width'] > _0x3c84cf['MAP']['columns'] * _0x3c84cf['MAP']['tileSize'])
        _0x274dd6['x'] = _0x3c84cf['MAP']['columns'] * _0x3c84cf['MAP']['tileSize'] - _0x274dd6['width'];
    if (_0x274dd6['y'] + _0x274dd6['height'] > _0x3c84cf['MAP']['rows'] * _0x3c84cf['MAP']['tileSize'])
        _0x274dd6['y'] = _0x3c84cf['MAP']['rows'] * _0x3c84cf['MAP']['tileSize'] - _0x274dd6['height'];
    if (_0x2c484e) {
        _0x274dd6['angle'] = _0x56b442 + Math['PI'] / 0x2;
    } else if (_0x129829 !== 0x0 || _0x1d75d7 !== 0x0) {
        _0x274dd6['angle'] = Math['atan2'](_0x1d75d7, _0x129829) + Math['PI'] / 0x2;
    } else if (!_0x351eee) {
        _0x274dd6['angle'] = _0x288f4f + Math['PI'] / 0x2;
    }
    const _0x1222e9 = _0x274dd6['x'] + _0x274dd6['width'] / 0x2 - _0x3c84cf['CAMERA']['width'] / 0x2;
    const _0x3bf4a2 = _0x274dd6['y'] + _0x274dd6['height'] / 0x2 - _0x3c84cf['CAMERA']['height'] / 0x2;
    if (_0x3c84cf['CAMERA']['x'] === null || isNaN(_0x3c84cf['CAMERA']['x']) || !isFinite(_0x3c84cf['CAMERA']['x'])) {
        _0x3c84cf['CAMERA']['x'] = _0x1222e9;
        _0x3c84cf['CAMERA']['y'] = _0x3bf4a2;
    } else {
        const _0x32d2c3 = 0x1 - Math['exp'](-Math['max'](0x0, _0x40dbcd) * 0x28);
        _0x3c84cf['CAMERA']['x'] += (_0x1222e9 - _0x3c84cf['CAMERA']['x']) * _0x32d2c3;
        _0x3c84cf['CAMERA']['y'] += (_0x3bf4a2 - _0x3c84cf['CAMERA']['y']) * _0x32d2c3;
    }
    for (const _0x2618fe in _0x1e4c26) {
        const _0x126669 = _0x1e4c26[_0x2618fe];
        if (_0x126669['renderX'] === undefined) {
            _0x126669['renderX'] = _0x126669['x'];
            _0x126669['renderY'] = _0x126669['y'];
            _0x126669['renderAngle'] = _0x126669['angle'] || 0x0;
        }
        const _0x9ed1a3 = 0.25;
        const _0x44977c = _0x126669['x'] - _0x126669['renderX'], _0x4d2286 = _0x126669['y'] - _0x126669['renderY'];
        const _0x5ccb76 = Math['sqrt'](_0x44977c * _0x44977c + _0x4d2286 * _0x4d2286);
        const _0x5aaa6c = 0xb4;
        if (_0x5ccb76 > _0x5aaa6c) {
            _0x126669['renderX'] = _0x126669['x'] - _0x44977c / _0x5ccb76 * _0x5aaa6c;
            _0x126669['renderY'] = _0x126669['y'] - _0x4d2286 / _0x5ccb76 * _0x5aaa6c;
        }
        _0x126669['renderX'] += (_0x126669['x'] - _0x126669['renderX']) * _0x9ed1a3;
        _0x126669['renderY'] += (_0x126669['y'] - _0x126669['renderY']) * _0x9ed1a3;
        let _0x4b2c23 = (_0x126669['angle'] || 0x0) - _0x126669['renderAngle'];
        while (_0x4b2c23 < -Math['PI'])
            _0x4b2c23 += Math['PI'] * 0x2;
        while (_0x4b2c23 > Math['PI'])
            _0x4b2c23 -= Math['PI'] * 0x2;
        _0x126669['renderAngle'] += _0x4b2c23 * 0.3;
    }
    if (_0x3c84cf['GAME_STATE'] === 'NIGHT') {
        _0x41fd3f = Math['min'](0.6, _0x41fd3f + _0x40dbcd * 0.5);
    } else {
        _0x41fd3f = Math['max'](0x0, _0x41fd3f - _0x40dbcd * 0.5);
    }
    _0x403e68();
    _0x4243aa();
}
function _0x2d956e(_0x49c73a, _0xb82f44, _0x2c7727, _0x1b564d, _0x152cba = !![]) {
    _0x49c73a['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x1a24e4 = _0x49c73a['measureText'](_0xb82f44)['width'];
    const _0x3f49ff = _0x1a24e4 + 0x18;
    const _0x9dacc7 = 0x1c;
    _0x49c73a['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x49c73a['beginPath']();
    if (_0x49c73a['roundRect']) {
        _0x49c73a['roundRect'](_0x2c7727 - _0x3f49ff / 0x2, _0x1b564d - _0x9dacc7, _0x3f49ff, _0x9dacc7, 0x6);
    } else {
        _0x49c73a['rect'](_0x2c7727 - _0x3f49ff / 0x2, _0x1b564d - _0x9dacc7, _0x3f49ff, _0x9dacc7);
    }
    _0x49c73a['fill']();
    if (_0x152cba) {
        _0x49c73a['beginPath']();
        _0x49c73a['moveTo'](_0x2c7727 - 0x6, _0x1b564d);
        _0x49c73a['lineTo'](_0x2c7727 + 0x6, _0x1b564d);
        _0x49c73a['lineTo'](_0x2c7727, _0x1b564d + 0x6);
        _0x49c73a['fill']();
    }
    _0x49c73a['fillStyle'] = '#ffffff';
    _0x49c73a['textAlign'] = 'center';
    _0x49c73a['textBaseline'] = 'middle';
    _0x49c73a['fillText'](_0xb82f44, _0x2c7727, _0x1b564d - _0x9dacc7 / 0x2 + 0x1);
}
function _0x3b0737(_0x28b9b3, _0x3a4c6d, _0x16e15f, _0xd8dd91) {
    if (!_0x3a4c6d || _0x3a4c6d['length'] === 0x0)
        return;
    let _0x1206f0 = _0xd8dd91;
    for (let _0x11a214 = 0x0; _0x11a214 < _0x3a4c6d['length']; _0x11a214++) {
        _0x2d956e(_0x28b9b3, _0x3a4c6d[_0x11a214]['text'], _0x16e15f, _0x1206f0, _0x11a214 === 0x0);
        _0x1206f0 -= 0x24;
    }
}
function _0x2010a5() {
    if (!_0x3c84cf['SYSTEM']['isReady'])
        return;
    _0x17348b['fillStyle'] = '#000000';
    _0x17348b['fillRect'](0x0, 0x0, _0x18dd9f['width'], _0x18dd9f['height']);
    _0x17348b['save']();
    try {
        _0x17348b['scale'](_0x3c84cf['SYSTEM']['viewScale'], _0x3c84cf['SYSTEM']['viewScale']);
        _0x17348b['imageSmoothingEnabled'] = ![];
        const _0x3a0c5d = Math['floor'](_0x3c84cf['CAMERA']['x'] || 0x0);
        const _0x2bcd71 = Math['floor'](_0x3c84cf['CAMERA']['y'] || 0x0);
        const _0x223619 = Math['max'](0x0, Math['floor'](_0x3a0c5d / _0x3c84cf['MAP']['chunkSize']));
        const _0xe7650 = Math['min'](_0x3c84cf['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x3a0c5d + _0x3c84cf['CAMERA']['width']) / _0x3c84cf['MAP']['chunkSize']));
        const _0x5666b0 = Math['max'](0x0, Math['floor'](_0x2bcd71 / _0x3c84cf['MAP']['chunkSize']));
        const _0x35bd2e = Math['min'](_0x3c84cf['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x2bcd71 + _0x3c84cf['CAMERA']['height']) / _0x3c84cf['MAP']['chunkSize']));
        for (let _0x3d6e31 = _0x5666b0; _0x3d6e31 <= _0x35bd2e; _0x3d6e31++)
            for (let _0x2ea44d = _0x223619; _0x2ea44d <= _0xe7650; _0x2ea44d++) {
                const _0x2c34a2 = _0x2ea44d * _0x3c84cf['MAP']['chunkSize'] - _0x3a0c5d;
                const _0x366eb3 = _0x3d6e31 * _0x3c84cf['MAP']['chunkSize'] - _0x2bcd71;
                _0x17348b['drawImage'](_0x3c84cf['MAP']['bgChunks'][_0x3d6e31][_0x2ea44d], _0x2c34a2, _0x366eb3, _0x3c84cf['MAP']['chunkSize'] + 0x1, _0x3c84cf['MAP']['chunkSize'] + 0x1);
            }
        if (_0x1b517f['complete'] && _0x1b517f['naturalWidth'] > 0x0) {
            const _0x14f244 = _0x3c84cf['MAP']['tileSize'];
            const _0x18e7f6 = _0x14f244 * 0xa;
            const _0x202ef1 = _0x3c84cf['MAP']['columns'] / 0x2 * _0x14f244 - _0x18e7f6 / 0x2 - _0x3a0c5d;
            const _0x533cfd = _0x3c84cf['MAP']['rows'] / 0x2 * _0x14f244 - _0x18e7f6 / 0x2 - _0x2bcd71;
            _0x17348b['imageSmoothingEnabled'] = ![];
            _0x17348b['drawImage'](_0x1b517f, _0x202ef1, _0x533cfd, _0x18e7f6, _0x18e7f6);
        }
        if (_0xf1c1b2['complete'] && _0xf1c1b2['naturalWidth'] > 0x0) {
            _0x3c84cf['ENTITIES']['forEach'](_0x108949 => {
                if (_0x108949['type'] !== 'table')
                    return;
                _0x17348b['save']();
                _0x17348b['imageSmoothingEnabled'] = ![];
                const _0x1c2be1 = _0xf1c1b2['naturalWidth'] >= _0xf1c1b2['naturalHeight'];
                const _0x467ea8 = _0x108949['w'] >= _0x108949['h'];
                if (_0x1c2be1 === _0x467ea8) {
                    _0x17348b['drawImage'](_0xf1c1b2, _0x108949['x'] - _0x3a0c5d, _0x108949['y'] - _0x2bcd71, _0x108949['w'], _0x108949['h']);
                } else {
                    _0x17348b['translate'](_0x108949['x'] - _0x3a0c5d + _0x108949['w'] / 0x2, _0x108949['y'] - _0x2bcd71 + _0x108949['h'] / 0x2);
                    _0x17348b['rotate'](Math['PI'] / 0x2);
                    _0x17348b['drawImage'](_0xf1c1b2, -_0x108949['h'] / 0x2, -_0x108949['w'] / 0x2, _0x108949['h'], _0x108949['w']);
                }
                _0x17348b['restore']();
            });
        } else {
            _0x3c84cf['ENTITIES']['forEach'](_0x3a646d => {
                if (_0x3a646d['type'] !== 'table')
                    return;
                _0x17348b['save']();
                _0x17348b['fillStyle'] = '#6b4423';
                _0x17348b['fillRect'](_0x3a646d['x'] - _0x3a0c5d, _0x3a646d['y'] - _0x2bcd71, _0x3a646d['w'], _0x3a646d['h']);
                _0x17348b['strokeStyle'] = '#422810';
                _0x17348b['lineWidth'] = 0x3;
                _0x17348b['strokeRect'](_0x3a646d['x'] - _0x3a0c5d + 0x1, _0x3a646d['y'] - _0x2bcd71 + 0x1, _0x3a646d['w'] - 0x2, _0x3a646d['h'] - 0x2);
                _0x17348b['fillStyle'] = '#82532a';
                _0x17348b['fillRect'](_0x3a646d['x'] - _0x3a0c5d + 0x4, _0x3a646d['y'] - _0x2bcd71 + 0x4, _0x3a646d['w'] - 0x8, _0x3a646d['h'] - 0x8);
                _0x17348b['restore']();
            });
        }
        if (_0x129bcf) {
            for (let _0x257973 = _0x5666b0; _0x257973 <= _0x35bd2e; _0x257973++) {
                for (let _0x13eab3 = _0x223619; _0x13eab3 <= _0xe7650; _0x13eab3++) {
                    const _0x2c2b2e = _0x13eab3 * _0x3c84cf['MAP']['chunkSize'] - _0x3a0c5d;
                    const _0x4810a9 = _0x257973 * _0x3c84cf['MAP']['chunkSize'] - _0x2bcd71;
                    _0x17348b['drawImage'](_0x3c84cf['MAP']['fgChunks'][_0x257973][_0x13eab3], _0x2c2b2e, _0x4810a9, _0x3c84cf['MAP']['chunkSize'] + 0x1, _0x3c84cf['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x160209 = _0x3c84cf['GAME_STATE'] === 'NIGHT' && _0x4974dd === 'Skinwalker' && !_0x274dd6['isDead'];
        const _0x23b023 = _0x274dd6['x'] - _0x3a0c5d + _0x274dd6['width'] / 0x2;
        const _0x3eef92 = _0x274dd6['y'] - _0x2bcd71 + _0x274dd6['height'] / 0x2;
        const _0x21008b = _0x274dd6['width'] * _0x274dd6['scale'] * 1.3;
        const _0x177fc6 = _0x274dd6['height'] * _0x274dd6['scale'] * 1.3;
        for (const _0x15e60e in _0x1e4c26) {
            const _0x3902ef = _0x1e4c26[_0x15e60e];
            if (_0x3902ef['isDead'])
                continue;
            const _0x4f71b7 = (_0x3902ef['renderX'] ?? _0x3902ef['x']) - _0x3a0c5d + _0x3902ef['width'] / 0x2;
            const _0x584c42 = (_0x3902ef['renderY'] ?? _0x3902ef['y']) - _0x2bcd71 + _0x3902ef['height'] / 0x2;
            const _0x35275c = Math['min'](0x2, Math['max'](0.3, _0x3902ef['scale'] || 0x1));
            const _0x29f26a = _0x3902ef['width'] * _0x35275c * 1.3;
            const _0x863c7b = _0x3902ef['height'] * _0x35275c * 1.3;
            _0x17348b['save']();
            try {
                _0x17348b['translate'](_0x4f71b7, _0x584c42);
                _0x17348b['rotate'](_0x3902ef['renderAngle'] ?? 0x0);
                if (_0x3902ef['isDark'])
                    _0x17348b['filter'] = 'brightness(0)';
                _0x200475(_0x17348b, _0x3902ef['body'], _0x3902ef['eyes'], _0x29f26a, _0x863c7b);
                if (_0x210f96['has'](parseInt(_0x15e60e)) && _0x5367b2['complete'] && _0x5367b2['naturalWidth'] > 0x0) {
                    _0x17348b['drawImage'](_0x5367b2, -_0x29f26a / 0x2, -_0x863c7b / 0x2, _0x29f26a, _0x863c7b);
                }
                if (_0x3902ef['isDark'])
                    _0x17348b['filter'] = 'none';
            } finally {
                _0x17348b['restore']();
            }
            if (!_0x5223b0((_0x3902ef['renderX'] ?? _0x3902ef['x']) + _0x3902ef['width'] / 0x2, (_0x3902ef['renderY'] ?? _0x3902ef['y']) + _0x3902ef['height'] / 0x2)) {
                _0x17348b['textAlign'] = 'center';
                _0x17348b['lineJoin'] = 'round';
                _0x17348b['lineWidth'] = 0x3;
                _0x17348b['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x17348b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x17348b['fillStyle'] = _0x210f96['has'](parseInt(_0x15e60e)) ? '#cc88ff' : '#ffffff';
                const _0x339740 = _0x3902ef['isDark'] ? '???' : _0x3902ef['name'] + (_0x3902ef['isOwner'] ? '\x20[🗝️]' : '');
                _0x17348b['strokeText'](_0x339740, _0x4f71b7, _0x584c42 - _0x863c7b / 0x2 - 0x10);
                _0x17348b['fillText'](_0x339740, _0x4f71b7, _0x584c42 - _0x863c7b / 0x2 - 0x10);
            }
        }
        if (!_0x274dd6['isDead']) {
            _0x17348b['save']();
            try {
                _0x17348b['translate'](_0x23b023, _0x3eef92);
                _0x17348b['rotate'](_0x274dd6['angle']);
                if (_0x160209)
                    _0x17348b['filter'] = 'brightness(0)';
                _0x200475(_0x17348b, _0x51d7d7, _0x307171, _0x21008b, _0x177fc6);
                if (_0x210f96['has'](_0x2ef182) && _0x5367b2['complete'] && _0x5367b2['naturalWidth'] > 0x0) {
                    _0x17348b['drawImage'](_0x5367b2, -_0x21008b / 0x2, -_0x177fc6 / 0x2, _0x21008b, _0x177fc6);
                }
                if (_0x160209)
                    _0x17348b['filter'] = 'none';
            } finally {
                _0x17348b['restore']();
            }
            if (!_0x5223b0(_0x274dd6['x'] + _0x274dd6['width'] / 0x2, _0x274dd6['y'] + _0x274dd6['height'] / 0x2)) {
                _0x17348b['textAlign'] = 'center';
                _0x17348b['lineJoin'] = 'round';
                _0x17348b['lineWidth'] = 0x3;
                _0x17348b['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x17348b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x17348b['fillStyle'] = _0x210f96['has'](_0x2ef182) ? '#cc88ff' : '#ffffff';
                const _0x42f338 = _0x160209 ? '???' : _0x4638e3 + (_0x51591c ? '\x20[🗝️]' : '');
                _0x17348b['strokeText'](_0x42f338, _0x23b023, _0x3eef92 - _0x177fc6 / 0x2 - 0x10);
                _0x17348b['fillText'](_0x42f338, _0x23b023, _0x3eef92 - _0x177fc6 / 0x2 - 0x10);
            }
        }
        if (_0x3c84cf['MAP']['wallChunks'] && _0x3c84cf['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x23b9cc = _0x5666b0; _0x23b9cc <= _0x35bd2e; _0x23b9cc++)
                for (let _0x347e31 = _0x223619; _0x347e31 <= _0xe7650; _0x347e31++) {
                    if (!_0x3c84cf['MAP']['wallChunks'][_0x23b9cc] || !_0x3c84cf['MAP']['wallChunks'][_0x23b9cc][_0x347e31])
                        continue;
                    const _0x4a9759 = _0x347e31 * _0x3c84cf['MAP']['chunkSize'] - _0x3a0c5d;
                    const _0x30a3f0 = _0x23b9cc * _0x3c84cf['MAP']['chunkSize'] - _0x2bcd71;
                    _0x17348b['drawImage'](_0x3c84cf['MAP']['wallChunks'][_0x23b9cc][_0x347e31], _0x4a9759, _0x30a3f0, _0x3c84cf['MAP']['chunkSize'] + 0x1, _0x3c84cf['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x37d5bf of _0x3c84cf['ENTITIES']) {
            if (_0x37d5bf['type'] !== 'npc')
                continue;
            const _0x6af4cf = _0x37d5bf['x'] - _0x3a0c5d + _0x37d5bf['w'] / 0x2;
            const _0x249e3d = _0x37d5bf['y'] - _0x2bcd71 + _0x37d5bf['h'] / 0x2;
            const _0x27617c = _0x37d5bf['w'];
            const _0x4d2201 = _0x37d5bf['h'];
            _0x17348b['save']();
            _0x17348b['translate'](_0x6af4cf, _0x249e3d);
            _0x17348b['rotate'](_0x37d5bf['angle'] !== undefined ? _0x37d5bf['angle'] : 0x0);
            _0x200475(_0x17348b, _0x37d5bf['body'] || 'yanito932.png', _0x37d5bf['eyes'], _0x27617c, _0x4d2201);
            _0x17348b['restore']();
            _0x17348b['textAlign'] = 'center';
            _0x17348b['lineJoin'] = 'round';
            _0x17348b['lineWidth'] = 0x3;
            _0x17348b['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x17348b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x17348b['fillStyle'] = '#aaaaaa';
            _0x17348b['strokeText'](_0x37d5bf['name'] || 'NPC', _0x6af4cf, _0x249e3d - _0x4d2201 / 0x2 - 0x10);
            _0x17348b['fillText'](_0x37d5bf['name'] || 'NPC', _0x6af4cf, _0x249e3d - _0x4d2201 / 0x2 - 0x10);
        }
        if (_0x274dd6['isDead']) {
            for (const _0x28ad09 in _0x1e4c26) {
                const _0x14beca = _0x1e4c26[_0x28ad09];
                if (!_0x14beca['isDead'])
                    continue;
                const _0x94873c = (_0x14beca['renderX'] ?? _0x14beca['x']) - _0x3a0c5d + _0x14beca['width'] / 0x2;
                const _0x36f153 = (_0x14beca['renderY'] ?? _0x14beca['y']) - _0x2bcd71 + _0x14beca['height'] / 0x2;
                const _0x334b88 = _0x14beca['width'] * (_0x14beca['scale'] || 0x1) * 1.3;
                const _0x3f7240 = _0x14beca['height'] * (_0x14beca['scale'] || 0x1) * 1.3;
                _0x17348b['save']();
                try {
                    _0x17348b['translate'](_0x94873c, _0x36f153);
                    _0x17348b['rotate'](_0x14beca['renderAngle'] ?? 0x0);
                    _0x17348b['globalAlpha'] = 0.3;
                    _0x200475(_0x17348b, _0x14beca['body'], _0x14beca['eyes'], _0x334b88, _0x3f7240);
                } finally {
                    _0x17348b['restore']();
                }
                if (!_0x5223b0((_0x14beca['renderX'] ?? _0x14beca['x']) + _0x14beca['width'] / 0x2, (_0x14beca['renderY'] ?? _0x14beca['y']) + _0x14beca['height'] / 0x2)) {
                    _0x17348b['save']();
                    _0x17348b['globalAlpha'] = 0.3;
                    _0x17348b['textAlign'] = 'center';
                    _0x17348b['lineJoin'] = 'round';
                    _0x17348b['lineWidth'] = 0x3;
                    _0x17348b['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x17348b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x17348b['fillStyle'] = '#ffffff';
                    const _0x14caae = _0x14beca['name'] + (_0x14beca['isOwner'] ? '\x20[🗝️]' : '');
                    _0x17348b['strokeText'](_0x14caae, _0x94873c, _0x36f153 - _0x3f7240 / 0x2 - 0x10);
                    _0x17348b['fillText'](_0x14caae, _0x94873c, _0x36f153 - _0x3f7240 / 0x2 - 0x10);
                    _0x17348b['restore']();
                }
            }
            _0x17348b['save']();
            try {
                _0x17348b['translate'](_0x23b023, _0x3eef92);
                _0x17348b['rotate'](_0x274dd6['angle']);
                _0x17348b['globalAlpha'] = 0.3;
                _0x200475(_0x17348b, _0x51d7d7, _0x307171, _0x21008b, _0x177fc6);
            } finally {
                _0x17348b['restore']();
            }
            if (!_0x5223b0(_0x274dd6['x'] + _0x274dd6['width'] / 0x2, _0x274dd6['y'] + _0x274dd6['height'] / 0x2)) {
                _0x17348b['save']();
                _0x17348b['globalAlpha'] = 0.3;
                _0x17348b['textAlign'] = 'center';
                _0x17348b['lineJoin'] = 'round';
                _0x17348b['lineWidth'] = 0x3;
                _0x17348b['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x17348b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x17348b['fillStyle'] = '#ffffff';
                const _0x245da = _0x4638e3 + (_0x51591c ? '\x20[🗝️]' : '');
                _0x17348b['strokeText'](_0x245da, _0x23b023, _0x3eef92 - _0x177fc6 / 0x2 - 0x10);
                _0x17348b['fillText'](_0x245da, _0x23b023, _0x3eef92 - _0x177fc6 / 0x2 - 0x10);
                _0x17348b['restore']();
            }
        }
        for (let _0x40763f = _0x5666b0; _0x40763f <= _0x35bd2e; _0x40763f++)
            for (let _0x18a7ba = _0x223619; _0x18a7ba <= _0xe7650; _0x18a7ba++) {
                const _0x211fb0 = _0x18a7ba * _0x3c84cf['MAP']['chunkSize'] - _0x3a0c5d;
                const _0x2e4d75 = _0x40763f * _0x3c84cf['MAP']['chunkSize'] - _0x2bcd71;
                _0x17348b['drawImage'](_0x3c84cf['MAP']['fgChunks'][_0x40763f][_0x18a7ba], _0x211fb0, _0x2e4d75, _0x3c84cf['MAP']['chunkSize'] + 0x1, _0x3c84cf['MAP']['chunkSize'] + 0x1);
            }
        if (_0x3c84cf['EDITOR']['enabled'] && _0x3c84cf['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x5ac11f = _0x3c84cf['INPUTS']['mouseX'] / _0x3c84cf['SYSTEM']['viewScale'] + _0x3c84cf['CAMERA']['x'];
            const _0x1dfa9f = _0x3c84cf['INPUTS']['mouseY'] / _0x3c84cf['SYSTEM']['viewScale'] + _0x3c84cf['CAMERA']['y'];
            const _0x409c91 = Math['floor'](_0x5ac11f / _0x3c84cf['MAP']['tileSize']);
            const _0x9cbf36 = Math['floor'](_0x1dfa9f / _0x3c84cf['MAP']['tileSize']);
            if (_0x409c91 >= 0x0 && _0x409c91 < _0x3c84cf['MAP']['columns'] && _0x9cbf36 >= 0x0 && _0x9cbf36 < _0x3c84cf['MAP']['rows']) {
                const _0x3774c4 = _0x409c91 * _0x3c84cf['MAP']['tileSize'] - _0x3a0c5d;
                const _0x1eaebf = _0x9cbf36 * _0x3c84cf['MAP']['tileSize'] - _0x2bcd71;
                _0x17348b['save']();
                _0x17348b['globalAlpha'] = 0.5;
                if (_0x3c84cf['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x33d768 = _0x3c84cf['EDITOR']['selectedTileGid'] - 0x1;
                    _0x17348b['drawImage'](_0x13d0c3, _0x33d768 % _0x3c84cf['MAP']['tilesetCols'] * _0x3c84cf['MAP']['tileSize'], Math['floor'](_0x33d768 / _0x3c84cf['MAP']['tilesetCols']) * _0x3c84cf['MAP']['tileSize'], _0x3c84cf['MAP']['tileSize'], _0x3c84cf['MAP']['tileSize'], _0x3774c4, _0x1eaebf, _0x3c84cf['MAP']['tileSize'], _0x3c84cf['MAP']['tileSize']);
                } else {
                    _0x17348b['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x17348b['fillRect'](_0x3774c4, _0x1eaebf, _0x3c84cf['MAP']['tileSize'], _0x3c84cf['MAP']['tileSize']);
                }
                _0x17348b['restore']();
            }
        }
        _0x5a1777(_0x17348b, _0x3a0c5d, _0x2bcd71);
        if (_0x41fd3f > 0x0) {
            _0x17348b['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x41fd3f + ')';
            _0x17348b['fillRect'](0x0, 0x0, _0x3c84cf['CAMERA']['width'], _0x3c84cf['CAMERA']['height']);
        }
        for (const _0x4fed63 in _0x1e4c26) {
            const _0x5bdad3 = _0x1e4c26[_0x4fed63];
            if (_0x5bdad3['isDead'] && !_0x274dd6['isDead'])
                continue;
            const _0x47097e = (_0x5bdad3['renderX'] ?? _0x5bdad3['x']) - _0x3a0c5d + _0x5bdad3['width'] / 0x2;
            const _0x4056e2 = (_0x5bdad3['renderY'] ?? _0x5bdad3['y']) - _0x2bcd71 + _0x5bdad3['height'] / 0x2;
            _0x3b0737(_0x17348b, _0x5bdad3['chats'], _0x47097e, _0x4056e2 - _0x5bdad3['height'] / 0x2 - 0x20);
        }
        _0x3b0737(_0x17348b, _0x274dd6['chats'], _0x23b023, _0x3eef92 - _0x274dd6['height'] / 0x2 - 0x20);
    } finally {
        _0x17348b['restore']();
    }
}
function _0x4d72fe(_0x3a9285) {
    if (!_0x3c84cf['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x4d72fe);
    let _0x443a23 = (_0x3a9285 - _0x3c84cf['SYSTEM']['lastTime']) / 0x3e8;
    _0x3c84cf['SYSTEM']['lastTime'] = _0x3a9285;
    if (_0x443a23 > 0.1)
        _0x443a23 = 0.1;
    if (_0x443a23 < 0x0 || isNaN(_0x443a23))
        _0x443a23 = 0.016;
    if (_0x129bcf) {
        _0x48a0cc(_0x443a23);
        _0x2010a5();
        return;
    }
    if (!_0x2ef182)
        return;
    _0x196a1b(_0x443a23);
    _0x221d5d['tick'](_0x3a9285);
    _0x2010a5();
}
function _0x3e233f() {
    const _0x20b881 = Math['ceil'](_0x3c84cf['MAP']['columns'] * _0x3c84cf['MAP']['tileSize'] / _0x3c84cf['MAP']['chunkSize']);
    const _0x2944eb = Math['ceil'](_0x3c84cf['MAP']['rows'] * _0x3c84cf['MAP']['tileSize'] / _0x3c84cf['MAP']['chunkSize']);
    _0x3c84cf['MAP']['bgChunks'] = [];
    _0x3c84cf['MAP']['fgChunks'] = [];
    _0x3c84cf['MAP']['wallChunks'] = [];
    for (let _0x4f5b4b = 0x0; _0x4f5b4b < _0x2944eb; _0x4f5b4b++) {
        _0x3c84cf['MAP']['bgChunks'][_0x4f5b4b] = [];
        _0x3c84cf['MAP']['fgChunks'][_0x4f5b4b] = [];
        _0x3c84cf['MAP']['wallChunks'][_0x4f5b4b] = [];
        for (let _0x507d74 = 0x0; _0x507d74 < _0x20b881; _0x507d74++) {
            const _0x5b07e1 = document['createElement']('canvas');
            _0x5b07e1['width'] = _0x5b07e1['height'] = _0x3c84cf['MAP']['chunkSize'];
            const _0x4efeb9 = document['createElement']('canvas');
            _0x4efeb9['width'] = _0x4efeb9['height'] = _0x3c84cf['MAP']['chunkSize'];
            const _0x5d988c = document['createElement']('canvas');
            _0x5d988c['width'] = _0x5d988c['height'] = _0x3c84cf['MAP']['chunkSize'];
            _0x3c84cf['MAP']['bgChunks'][_0x4f5b4b][_0x507d74] = _0x5b07e1;
            _0x3c84cf['MAP']['fgChunks'][_0x4f5b4b][_0x507d74] = _0x4efeb9;
            _0x3c84cf['MAP']['wallChunks'][_0x4f5b4b][_0x507d74] = _0x5d988c;
            _0x48f76c(_0x507d74, _0x4f5b4b);
        }
    }
}
function _0x48f76c(_0x10ab3d, _0x4d87bb) {
    const _0x497a23 = _0x3c84cf['MAP']['bgChunks'][_0x4d87bb][_0x10ab3d]['getContext']('2d', { 'alpha': !![] });
    const _0x38e5c4 = _0x3c84cf['MAP']['fgChunks'][_0x4d87bb][_0x10ab3d]['getContext']('2d', { 'alpha': !![] });
    const _0x510665 = _0x3c84cf['MAP']['wallChunks'][_0x4d87bb] && _0x3c84cf['MAP']['wallChunks'][_0x4d87bb][_0x10ab3d] ? _0x3c84cf['MAP']['wallChunks'][_0x4d87bb][_0x10ab3d]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x497a23['imageSmoothingEnabled'] = _0x38e5c4['imageSmoothingEnabled'] = ![];
    if (_0x510665)
        _0x510665['imageSmoothingEnabled'] = ![];
    _0x497a23['clearRect'](0x0, 0x0, _0x3c84cf['MAP']['chunkSize'], _0x3c84cf['MAP']['chunkSize']);
    _0x38e5c4['clearRect'](0x0, 0x0, _0x3c84cf['MAP']['chunkSize'], _0x3c84cf['MAP']['chunkSize']);
    if (_0x510665)
        _0x510665['clearRect'](0x0, 0x0, _0x3c84cf['MAP']['chunkSize'], _0x3c84cf['MAP']['chunkSize']);
    const _0x415969 = Math['floor'](_0x10ab3d * _0x3c84cf['MAP']['chunkSize'] / _0x3c84cf['MAP']['tileSize']);
    const _0x45c483 = Math['ceil']((_0x10ab3d + 0x1) * _0x3c84cf['MAP']['chunkSize'] / _0x3c84cf['MAP']['tileSize']);
    const _0x1662f2 = Math['floor'](_0x4d87bb * _0x3c84cf['MAP']['chunkSize'] / _0x3c84cf['MAP']['tileSize']);
    const _0xa5fbda = Math['ceil']((_0x4d87bb + 0x1) * _0x3c84cf['MAP']['chunkSize'] / _0x3c84cf['MAP']['tileSize']);
    const _0x212a46 = 0.5;
    const _0x476959 = _0x3c84cf['MAP']['tileSize'] - _0x212a46 * 0x2;
    _0x3c84cf['MAP']['layers']['forEach'](_0xea793 => {
        const _0x41fa01 = _0xea793['name'] === 'walls';
        const _0x394ff5 = _0xea793['name'] === 'trees' ? _0x38e5c4 : _0x41fa01 ? _0x510665 || _0x497a23 : _0x497a23;
        for (let _0x1f2361 = Math['max'](0x0, _0x1662f2); _0x1f2361 < Math['min'](_0x3c84cf['MAP']['rows'], _0xa5fbda); _0x1f2361++) {
            for (let _0x1791ed = Math['max'](0x0, _0x415969); _0x1791ed < Math['min'](_0x3c84cf['MAP']['columns'], _0x45c483); _0x1791ed++) {
                let _0x44b23e = _0xea793['data'][_0x1f2361 * _0x3c84cf['MAP']['columns'] + _0x1791ed];
                if (_0xea793['name'] === 'floor2' && _0x3c84cf['MAP']['doors'] && _0x3c84cf['MAP']['doors'][_0x1f2361 * _0x3c84cf['MAP']['columns'] + _0x1791ed]) {
                    _0x44b23e = 0x2;
                }
                if (_0x44b23e > 0x0) {
                    const _0x91a403 = _0x44b23e - 0x1;
                    const _0x31f55d = _0x91a403 % _0x3c84cf['MAP']['tilesetCols'] * _0x3c84cf['MAP']['tileSize'] + _0x212a46;
                    const _0x5ee045 = Math['floor'](_0x91a403 / _0x3c84cf['MAP']['tilesetCols']) * _0x3c84cf['MAP']['tileSize'] + _0x212a46;
                    const _0x514eb7 = _0x1791ed * _0x3c84cf['MAP']['tileSize'] - _0x10ab3d * _0x3c84cf['MAP']['chunkSize'];
                    const _0x2f7503 = _0x1f2361 * _0x3c84cf['MAP']['tileSize'] - _0x4d87bb * _0x3c84cf['MAP']['chunkSize'];
                    if (_0x44b23e === 0x4) {
                        const _0x4b491b = 0x1;
                        const _0x37c463 = _0x4b491b % _0x3c84cf['MAP']['tilesetCols'] * _0x3c84cf['MAP']['tileSize'] + _0x212a46;
                        const _0x164b28 = Math['floor'](_0x4b491b / _0x3c84cf['MAP']['tilesetCols']) * _0x3c84cf['MAP']['tileSize'] + _0x212a46;
                        _0x497a23['drawImage'](_0x13d0c3, _0x37c463, _0x164b28, _0x476959, _0x476959, _0x514eb7, _0x2f7503, _0x3c84cf['MAP']['tileSize'], _0x3c84cf['MAP']['tileSize']);
                        let _0x4cc59d = _0x3c84cf['MAP']['doors'] ? _0x3c84cf['MAP']['doors'][_0x1f2361 * _0x3c84cf['MAP']['columns'] + _0x1791ed] : null;
                        if (!_0x4cc59d) {
                            const _0x396bc4 = _0x3c84cf['MAP']['layers']['find'](_0x5b8ce3 => _0x5b8ce3['name'] === 'walls');
                            const _0x18059f = _0x1f2361 > 0x0 && _0x396bc4 && _0x396bc4['data'][(_0x1f2361 - 0x1) * _0x3c84cf['MAP']['columns'] + _0x1791ed] > 0x0;
                            const _0x5d45d1 = _0x1f2361 < _0x3c84cf['MAP']['rows'] - 0x1 && _0x396bc4 && _0x396bc4['data'][(_0x1f2361 + 0x1) * _0x3c84cf['MAP']['columns'] + _0x1791ed] > 0x0;
                            const _0x294f07 = _0x1791ed > 0x0 && _0x396bc4 && _0x396bc4['data'][_0x1f2361 * _0x3c84cf['MAP']['columns'] + _0x1791ed - 0x1] > 0x0;
                            const _0x28f17f = _0x1791ed < _0x3c84cf['MAP']['columns'] - 0x1 && _0x396bc4 && _0x396bc4['data'][_0x1f2361 * _0x3c84cf['MAP']['columns'] + _0x1791ed + 0x1] > 0x0;
                            if (_0x294f07 && _0x28f17f)
                                _0x4cc59d = _0x1f2361 < _0x3c84cf['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x18059f && _0x5d45d1)
                                _0x4cc59d = _0x1791ed < _0x3c84cf['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x14cbf5 = 0x0;
                        if (_0x4cc59d === 'bottom')
                            _0x14cbf5 = Math['PI'] / 0x2;
                        else if (_0x4cc59d === 'left')
                            _0x14cbf5 = Math['PI'];
                        else if (_0x4cc59d === 'top')
                            _0x14cbf5 = -Math['PI'] / 0x2;
                        else if (_0x4cc59d === 'right')
                            _0x14cbf5 = 0x0;
                        if (_0x14cbf5 !== 0x0) {
                            _0x394ff5['save']();
                            _0x394ff5['translate'](_0x514eb7 + _0x3c84cf['MAP']['tileSize'] / 0x2, _0x2f7503 + _0x3c84cf['MAP']['tileSize'] / 0x2);
                            _0x394ff5['rotate'](_0x14cbf5);
                            _0x394ff5['drawImage'](_0x13d0c3, _0x31f55d, _0x5ee045, _0x476959, _0x476959, -_0x3c84cf['MAP']['tileSize'] / 0x2, -_0x3c84cf['MAP']['tileSize'] / 0x2, _0x3c84cf['MAP']['tileSize'], _0x3c84cf['MAP']['tileSize']);
                            _0x394ff5['restore']();
                        } else {
                            _0x394ff5['drawImage'](_0x13d0c3, _0x31f55d, _0x5ee045, _0x476959, _0x476959, _0x514eb7, _0x2f7503, _0x3c84cf['MAP']['tileSize'], _0x3c84cf['MAP']['tileSize']);
                        }
                    } else {
                        _0x394ff5['drawImage'](_0x13d0c3, _0x31f55d, _0x5ee045, _0x476959, _0x476959, _0x514eb7, _0x2f7503, _0x3c84cf['MAP']['tileSize'], _0x3c84cf['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0xeea4ab() {
    _0x13d0c3['crossOrigin'] = 'Anonymous';
    _0x13d0c3['onload'] = () => {
        _0x3c84cf['MAP']['tilesetCols'] = 0x3;
        _0x327240();
    };
    _0x13d0c3['onerror'] = () => {
        _0x3c84cf['MAP']['tilesetCols'] = 0x1;
        _0x327240();
    };
    _0x13d0c3['src'] = 'assets/tilesheet.png';
    _0x1b517f['crossOrigin'] = 'Anonymous';
    _0x1b517f['onload'] = _0x327240;
    _0x1b517f['onerror'] = () => {
        _0x327240();
    };
    _0x1b517f['src'] = 'assets/center.png';
    _0xf1c1b2['crossOrigin'] = 'Anonymous';
    _0xf1c1b2['onload'] = _0x327240;
    _0xf1c1b2['onerror'] = () => {
        _0x327240();
    };
    _0xf1c1b2['src'] = 'assets/table.png';
}
function _0x327240() {
    _0x3c84cf['SYSTEM']['assetsLoaded']++;
    if (_0x3c84cf['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x48a84e();
    }
}
function _0x549ae1(_0x1d9b83, _0x26089b) {
    if (!_0x51591c || !_0x37c19c)
        return;
    const _0x126c24 = _0x1d9b83 / _0x3c84cf['SYSTEM']['viewScale'] + _0x3c84cf['CAMERA']['x'];
    const _0x2116b5 = _0x26089b / _0x3c84cf['SYSTEM']['viewScale'] + _0x3c84cf['CAMERA']['y'];
    const _0x4dffa2 = Math['floor'](_0x126c24 / _0x3c84cf['MAP']['tileSize']);
    const _0x10d105 = Math['floor'](_0x2116b5 / _0x3c84cf['MAP']['tileSize']);
    if (_0x4dffa2 >= 0x0 && _0x4dffa2 < _0x3c84cf['MAP']['columns'] && _0x10d105 >= 0x0 && _0x10d105 < _0x3c84cf['MAP']['rows'])
        _0x37c19c['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x3c84cf['EDITOR']['selectedLayer'],
            'col': _0x4dffa2,
            'row': _0x10d105,
            'gid': _0x3c84cf['EDITOR']['selectedTileGid']
        }));
}
function _0x371fdd() {
    const _0x64179c = document['getElementById']('palette');
    if (!_0x64179c || _0x64179c['children']['length'] > 0x0)
        return;
    const _0x41ef98 = 0x40;
    const _0x1cda08 = _0x13d0c3;
    const _0x17ebdc = document['createElement']('div');
    _0x17ebdc['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x55240d = document['createElement']('canvas');
    _0x55240d['width'] = 0xc0;
    _0x55240d['height'] = 0xa0;
    _0x55240d['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x17ebdc['appendChild'](_0x55240d);
    const _0x57e0bf = document['createElement']('div');
    _0x57e0bf['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x17ebdc['appendChild'](_0x57e0bf);
    let _0x47c2f5 = 0x0, _0x53cab5 = 0x0;
    let _0x2f042f = ![], _0x25845b = 0x0, _0x43b6a5 = 0x0, _0x5e461c = 0x0, _0x180d97 = 0x0;
    function _0x5c2221() {
        const _0x2e8c5b = _0x55240d['getContext']('2d');
        _0x2e8c5b['clearRect'](0x0, 0x0, _0x55240d['width'], _0x55240d['height']);
        _0x2e8c5b['imageSmoothingEnabled'] = ![];
        if (_0x1cda08['complete'] && _0x1cda08['naturalWidth'] > 0x0) {
            _0x2e8c5b['drawImage'](_0x1cda08, _0x47c2f5, _0x53cab5, _0x55240d['width'], _0x55240d['height'], 0x0, 0x0, _0x55240d['width'], _0x55240d['height']);
        }
        _0x2e8c5b['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x2e8c5b['lineWidth'] = 0x1;
        const _0x424210 = Math['floor'](_0x47c2f5 / _0x41ef98);
        const _0x4bcb18 = Math['floor'](_0x53cab5 / _0x41ef98);
        for (let _0xe92887 = _0x424210; _0xe92887 <= _0x424210 + Math['ceil'](_0x55240d['width'] / _0x41ef98) + 0x1; _0xe92887++) {
            const _0x3c2d13 = _0xe92887 * _0x41ef98 - _0x47c2f5;
            _0x2e8c5b['beginPath']();
            _0x2e8c5b['moveTo'](_0x3c2d13, 0x0);
            _0x2e8c5b['lineTo'](_0x3c2d13, _0x55240d['height']);
            _0x2e8c5b['stroke']();
        }
        for (let _0x357b0b = _0x4bcb18; _0x357b0b <= _0x4bcb18 + Math['ceil'](_0x55240d['height'] / _0x41ef98) + 0x1; _0x357b0b++) {
            const _0x4cd9c4 = _0x357b0b * _0x41ef98 - _0x53cab5;
            _0x2e8c5b['beginPath']();
            _0x2e8c5b['moveTo'](0x0, _0x4cd9c4);
            _0x2e8c5b['lineTo'](_0x55240d['width'], _0x4cd9c4);
            _0x2e8c5b['stroke']();
        }
    }
    function _0x37c50e() {
        const _0x5a5b19 = Math['max'](0x1, Math['ceil'](_0x1cda08['naturalWidth'] / _0x41ef98));
        const _0x5bcdca = _0x3c84cf['EDITOR']['selectedTileGid'];
        if (_0x5bcdca <= 0x0) {
            _0x57e0bf['style']['display'] = 'none';
            return;
        }
        const _0x217ea3 = _0x5bcdca - 0x1;
        const _0x185fb6 = _0x217ea3 % _0x5a5b19;
        const _0x3fd2bc = Math['floor'](_0x217ea3 / _0x5a5b19);
        const _0x3b27c1 = _0x185fb6 * _0x41ef98 - _0x47c2f5;
        const _0x28df99 = _0x3fd2bc * _0x41ef98 - _0x53cab5;
        _0x57e0bf['style']['display'] = 'block';
        _0x57e0bf['style']['left'] = _0x3b27c1 + 'px';
        _0x57e0bf['style']['top'] = _0x28df99 + 'px';
    }
    _0x1cda08['onload'] = () => {
        _0x5c2221();
        _0x37c50e();
    };
    if (_0x1cda08['complete'] && _0x1cda08['naturalWidth'] > 0x0) {
        _0x5c2221();
        _0x37c50e();
    }
    _0x17ebdc['addEventListener']('mousedown', _0x3f9d43 => {
        if (_0x3f9d43['button'] === 0x0) {
            _0x2f042f = !![];
            _0x25845b = _0x3f9d43['clientX'];
            _0x43b6a5 = _0x3f9d43['clientY'];
            _0x5e461c = _0x47c2f5;
            _0x180d97 = _0x53cab5;
            _0x17ebdc['style']['cursor'] = 'grabbing';
            _0x3f9d43['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x6135b6 => {
        if (!_0x2f042f)
            return;
        const _0xc312b6 = _0x25845b - _0x6135b6['clientX'];
        const _0x3d5f74 = _0x43b6a5 - _0x6135b6['clientY'];
        const _0x3c9dc1 = Math['max'](0x0, _0x1cda08['naturalWidth'] - _0x55240d['width']);
        const _0x49b446 = Math['max'](0x0, _0x1cda08['naturalHeight'] - _0x55240d['height']);
        _0x47c2f5 = Math['max'](0x0, Math['min'](_0x3c9dc1, _0x5e461c + _0xc312b6));
        _0x53cab5 = Math['max'](0x0, Math['min'](_0x49b446, _0x180d97 + _0x3d5f74));
        _0x5c2221();
        _0x37c50e();
    });
    window['addEventListener']('mouseup', _0x2d6a2e => {
        if (_0x2f042f) {
            _0x2f042f = ![];
            _0x17ebdc['style']['cursor'] = 'grab';
        }
    });
    _0x17ebdc['addEventListener']('click', _0x293321 => {
        const _0x3964f6 = _0x17ebdc['getBoundingClientRect']();
        const _0x16f7f7 = _0x293321['clientX'] - _0x3964f6['left'] + _0x47c2f5;
        const _0x4a659e = _0x293321['clientY'] - _0x3964f6['top'] + _0x53cab5;
        const _0x474da0 = Math['max'](0x1, Math['ceil'](_0x1cda08['naturalWidth'] / _0x41ef98));
        const _0xe923b8 = Math['floor'](_0x16f7f7 / _0x41ef98);
        const _0xa66fd0 = Math['floor'](_0x4a659e / _0x41ef98);
        const _0x30d83e = _0xa66fd0 * _0x474da0 + _0xe923b8 + 0x1;
        _0x3c84cf['EDITOR']['selectedTileGid'] = _0x30d83e;
        _0x37c50e();
    });
    _0x64179c['appendChild'](_0x17ebdc);
    const _0x2e77eb = document['createElement']('div');
    _0x2e77eb['className'] = 'tile-btn\x20eraser-btn';
    _0x2e77eb['title'] = 'Eraser\x20(gid\x200)';
    _0x2e77eb['onclick'] = () => {
        _0x3c84cf['EDITOR']['selectedTileGid'] = 0x0;
        _0x57e0bf['style']['display'] = 'none';
    };
    _0x64179c['appendChild'](_0x2e77eb);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x3c84cf['EDITOR']['enabled'] = !_0x3c84cf['EDITOR']['enabled'];
        const _0x3e781d = document['getElementById']('editor-tools');
        if (_0x3c84cf['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x3e781d['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x3e781d['style']['display'] = 'none';
        }
    });
    const _0x1055f7 = document['getElementById']('start-game-btn');
    if (_0x1055f7) {
        _0x1055f7['addEventListener']('click', () => {
            if (_0x37c19c)
                _0x37c19c['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x426330 = document['getElementById']('rolelist-toggle-btn');
    if (_0x426330) {
        let _0x3e8f45 = 'subalignments';
        _0x426330['addEventListener']('click', () => {
            if (_0x3e8f45 === 'subalignments')
                _0x3e8f45 = 'precise';
            else if (_0x3e8f45 === 'precise')
                _0x3e8f45 = 'off';
            else
                _0x3e8f45 = 'subalignments';
            _0x426330['innerText'] = 'Role\x20List:\x20' + _0x3e8f45['charAt'](0x0)['toUpperCase']() + _0x3e8f45['slice'](0x1);
            if (_0x37c19c)
                _0x37c19c['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x3e8f45
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x56058a => {
        if (_0x56058a['id'] === 'editor-toggle-btn' || _0x56058a['id'] === 'start-game-btn' || _0x56058a['id'] === 'rolelist-toggle-btn')
            return;
        _0x56058a['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0xe35052 => _0xe35052['classList']['remove']('active'));
            _0x56058a['classList']['add']('active');
            _0x3c84cf['EDITOR']['selectedLayer'] = _0x56058a['dataset']['layer'];
        });
    });
}
function _0x47a052(_0x5c2372) {
    if (_0x37c19c)
        _0x37c19c['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x5c2372
        }));
}
function _0x44add5(_0x424e94) {
    if (_0x37c19c)
        _0x37c19c['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x424e94
        }));
}
function _0x275e96(_0x4356a3, _0x14c852, _0xd7d5df, _0x4c5b98) {
    const _0x306e95 = document['getElementById']('admin-panel');
    if (_0x306e95)
        _0x306e95['remove']();
    if (_0x306e95 && _0x306e95['dataset']['target'] === String(_0x4356a3))
        return;
    const _0x439754 = document['createElement']('div');
    _0x439754['id'] = 'admin-panel';
    _0x439754['dataset']['target'] = String(_0x4356a3);
    _0x439754['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x3e64e2 = document['createElement']('div');
    _0x3e64e2['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x3e64e2['textContent'] = _0x14c852;
    _0x439754['appendChild'](_0x3e64e2);
    const _0x37e56a = document['createElement']('button');
    _0x37e56a['textContent'] = 'Kick';
    _0x37e56a['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x37e56a['onmouseenter'] = () => _0x37e56a['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x37e56a['onmouseleave'] = () => _0x37e56a['style']['background'] = 'transparent';
    _0x37e56a['onclick'] = () => {
        _0x47a052(_0x4356a3);
        _0x439754['remove']();
    };
    _0x439754['appendChild'](_0x37e56a);
    const _0x2a6214 = document['createElement']('button');
    _0x2a6214['textContent'] = 'Ban';
    _0x2a6214['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x2a6214['onmouseenter'] = () => _0x2a6214['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x2a6214['onmouseleave'] = () => _0x2a6214['style']['background'] = 'transparent';
    _0x2a6214['onclick'] = () => {
        _0x44add5(_0x4356a3);
        _0x439754['remove']();
    };
    _0x439754['appendChild'](_0x2a6214);
    document['body']['appendChild'](_0x439754);
    const _0x2bc960 = _0x439754['offsetWidth'] || 0x91;
    const _0x3a8ce3 = _0x439754['offsetHeight'] || 0x50;
    let _0x418c90 = _0xd7d5df - _0x2bc960;
    let _0x3a97b6 = _0x4c5b98;
    if (_0x418c90 < 0x4)
        _0x418c90 = _0xd7d5df;
    if (_0x3a97b6 + _0x3a8ce3 > window['innerHeight'] - 0x4)
        _0x3a97b6 = window['innerHeight'] - _0x3a8ce3 - 0x4;
    _0x439754['style']['left'] = _0x418c90 + 'px';
    _0x439754['style']['top'] = _0x3a97b6 + 'px';
    const _0x567877 = _0x488064 => {
        if (!_0x439754['contains'](_0x488064['target'])) {
            _0x439754['remove']();
            document['removeEventListener']('mousedown', _0x567877);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x567877), 0x0);
}
function _0x1d9196() {
    const _0x34d98e = document['getElementById']('leaderboard-list');
    _0x34d98e['innerHTML'] = '';
    const _0x1fafab = document['createElement']('div');
    _0x1fafab['className'] = 'leaderboard-entry';
    const _0x303552 = document['createElement']('span');
    _0x303552['textContent'] = _0x4638e3 + (_0x51591c ? '\x20[🗝️]' : '');
    if (_0x210f96['has'](_0x2ef182) && !_0x274dd6['isDead']) {
        _0x303552['style']['color'] = '#cc88ff';
    }
    _0x1fafab['appendChild'](_0x303552);
    _0x34d98e['appendChild'](_0x1fafab);
    for (const _0x91db43 in _0x1e4c26) {
        const _0x2170bd = document['createElement']('div');
        _0x2170bd['className'] = 'leaderboard-entry';
        const _0x24b492 = document['createElement']('span');
        _0x24b492['textContent'] = _0x1e4c26[_0x91db43]['name'] + (_0x1e4c26[_0x91db43]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x210f96['has'](parseInt(_0x91db43)) && !_0x1e4c26[_0x91db43]['isDead']) {
            _0x24b492['style']['color'] = '#cc88ff';
        }
        _0x2170bd['appendChild'](_0x24b492);
        if (_0x51591c && !_0x1e4c26[_0x91db43]['isOwner']) {
            const _0x3a3aa1 = _0x1e4c26[_0x91db43]['id'];
            const _0x4df472 = _0x1e4c26[_0x91db43]['name'];
            _0x2170bd['style']['cursor'] = 'context-menu';
            _0x2170bd['addEventListener']('contextmenu', _0x92d896 => {
                _0x92d896['preventDefault']();
                _0x92d896['stopPropagation']();
                _0x275e96(_0x3a3aa1, _0x4df472, _0x92d896['clientX'], _0x92d896['clientY']);
            });
        }
        _0x34d98e['appendChild'](_0x2170bd);
    }
}
window['addEventListener']('resize', _0x48a84e);
function _0x48a84e() {
    _0x18dd9f['width'] = window['innerWidth'];
    _0x18dd9f['height'] = window['innerHeight'];
    _0x3c84cf['SYSTEM']['viewScale'] = Math['max'](_0x18dd9f['width'] / _0x2b6ae9, _0x18dd9f['height'] / _0x557cde);
    _0x3c84cf['CAMERA']['width'] = _0x18dd9f['width'] / _0x3c84cf['SYSTEM']['viewScale'];
    _0x3c84cf['CAMERA']['height'] = _0x18dd9f['height'] / _0x3c84cf['SYSTEM']['viewScale'];
    _0x17348b['imageSmoothingEnabled'] = ![];
}
function _0x76d4ad(_0x5e4149) {
    if (_0x5e4149['ctrlKey'] || _0x5e4149['metaKey']) {
        if (_0x5e4149['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x5e4149['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x5e4149['code'])) {
            _0x5e4149['preventDefault']();
            _0x5e4149['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x76d4ad, { 'passive': ![] });
window['addEventListener']('keydown', _0x76d4ad, { 'passive': ![] });
window['addEventListener']('keydown', _0x12739d => {
    const _0x47099e = _0x12739d['key']['toLowerCase']();
    if (_0x47099e === 'tab') {
        _0x12739d['preventDefault']();
        const _0x343a16 = document['getElementById']('will-ui');
        const _0x2df22f = document['getElementById']('will-input');
        if (_0x343a16['style']['display'] === 'flex') {
            _0x343a16['style']['display'] = 'none';
            if (_0x37c19c)
                _0x37c19c['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x2df22f['value']
                }));
            _0x2df22f['blur']();
        } else {
            _0x343a16['style']['display'] = 'flex';
            _0x2df22f['focus']();
            for (let _0x50c07b in _0x3c84cf['INPUTS']['keys'])
                _0x3c84cf['INPUTS']['keys'][_0x50c07b] = ![];
        }
        return;
    }
    if (_0x12739d['key'] === 'Enter') {
        if (_0x129bcf) {
            const _0x258b67 = document['getElementById']('play-btn');
            if (_0x258b67)
                _0x258b67['click']();
            return;
        }
        if (!_0x37c19c || _0x37c19c['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x1f358f = document['getElementById']('chat-ui');
        const _0x51b5a3 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x51b5a3) {
            const _0x4548dc = _0x51b5a3['value']['trim']();
            if (_0x4548dc['length'] > 0x0) {
                _0x37c19c['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x4548dc
                }));
            }
            _0x51b5a3['value'] = '';
            _0x1f358f['style']['display'] = 'none';
            _0x51b5a3['blur']();
        } else {
            _0x1f358f['style']['display'] = 'block';
            _0x51b5a3['focus']();
            for (let _0x71abbb in _0x3c84cf['INPUTS']['keys'])
                _0x3c84cf['INPUTS']['keys'][_0x71abbb] = ![];
        }
        _0x12739d['preventDefault']();
        return;
    }
    if (_0x12739d['key'] === 'Escape') {
        const _0x5be972 = document['getElementById']('guide-ui');
        if (_0x5be972 && _0x5be972['style']['display'] === 'flex') {
            _0x5be972['style']['display'] = 'none';
            return;
        }
        const _0x5981e5 = document['getElementById']('ability-ui');
        if (_0x5981e5 && _0x5981e5['style']['display'] === 'block') {
            _0x5981e5['style']['display'] = 'none';
            return;
        }
        const _0xfd9f05 = document['getElementById']('settings-panel');
        if (_0xfd9f05 && _0xfd9f05['style']['display'] === 'block') {
            _0xfd9f05['style']['display'] = 'none';
            return;
        }
        const _0x1c7f35 = document['getElementById']('mayor-confirm-dialog');
        if (_0x1c7f35 && _0x1c7f35['style']['display'] === 'flex') {
            _0x1c7f35['style']['display'] = 'none';
            return;
        }
        const _0x2ba2ae = document['getElementById']('target-chooser-ui');
        if (_0x2ba2ae && _0x2ba2ae['style']['display'] === 'flex') {
            _0x2ba2ae['style']['display'] = 'none';
            return;
        }
        const _0x1a5051 = document['getElementById']('chat-ui');
        const _0xc14851 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0xc14851) {
            _0xc14851['value'] = '';
            _0x1a5051['style']['display'] = 'none';
            _0xc14851['blur']();
            _0x12739d['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x3c84cf['INPUTS']['keys']['hasOwnProperty'](_0x47099e))
            _0x3c84cf['INPUTS']['keys'][_0x47099e] = !![];
        if (!_0x37c19c || _0x37c19c['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x47099e === 'h' && !_0x12739d['repeat']) {
            const _0x86a76e = document['getElementById']('guide-ui');
            if (_0x86a76e) {
                _0x86a76e['style']['display'] = _0x86a76e['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x47099e === 't' && !_0x12739d['repeat']) {
            if (_0x274dd6['isDead'])
                return;
            if (_0x4974dd === 'Mayor') {
                if (_0x210f96['has'](_0x2ef182)) {
                    _0x3b9202('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x7d0c70 = document['getElementById']('mayor-confirm-dialog');
                if (_0x7d0c70)
                    _0x7d0c70['style']['display'] = 'flex';
                return;
            }
            if (_0x3c84cf['GAME_STATE'] === 'NIGHT') {
                if (!_0x3c84cf['NIGHT_ABILITY_OPEN']) {
                    _0x3b9202('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x522355 = document['getElementById']('ability-ui');
                if (_0x522355) {
                    if (_0x522355['style']['display'] === 'block') {
                        _0x522355['style']['display'] = 'none';
                    } else {
                        _0x11ca86();
                        _0x522355['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x3c84cf['GAME_STATE'] === 'DAY_DISCUSS' || _0x3c84cf['GAME_STATE'] === 'DAY_VOTE') {
                _0x3b9202('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x47099e === 'e' && !_0x274dd6['isDead']) {
            const _0x331541 = Date['now']();
            if (!window['_lastDoorSend'] || _0x331541 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x331541;
                _0x37c19c['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x3e4129 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x2046b7 = _0x3e4129['key']['toLowerCase']();
        if (_0x3c84cf['INPUTS']['keys']['hasOwnProperty'](_0x2046b7))
            _0x3c84cf['INPUTS']['keys'][_0x2046b7] = ![];
    }
});
window['addEventListener']('mousemove', _0x4cd455 => {
    _0x3c84cf['INPUTS']['mouseX'] = _0x4cd455['clientX'];
    _0x3c84cf['INPUTS']['mouseY'] = _0x4cd455['clientY'];
    if (_0x3c84cf['INPUTS']['isMouseDown'] && _0x3c84cf['EDITOR']['enabled']) {
        _0x549ae1(_0x4cd455['clientX'], _0x4cd455['clientY']);
    }
});
window['addEventListener']('mousedown', _0x25a5f5 => {
    if (_0x25a5f5['target']['closest']('#editor-ui') || _0x25a5f5['target']['closest']('#leaderboard-ui') || _0x25a5f5['target']['closest']('#chat-log-ui') || _0x25a5f5['target']['closest']('#target-chooser-ui') || _0x25a5f5['target']['closest']('#guide-ui') || _0x25a5f5['target']['closest']('#role-list-ui') || _0x25a5f5['target']['closest']('#ability-ui') || _0x25a5f5['target']['closest']('#settings-panel') || _0x25a5f5['target']['closest']('#mayor-confirm-dialog') || _0x25a5f5['target']['closest']('#mobile-action-bar') || _0x25a5f5['target']['closest']('#mobile-top-bar') || _0x25a5f5['target']['closest']('#mobile-joystick-zone') || _0x25a5f5['target']['closest']('#mobile-chat-overlay') || _0x25a5f5['target']['closest']('#will-ui') || _0x25a5f5['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x25a5f5['button'] === 0x0) {
        _0x3c84cf['INPUTS']['isMouseDown'] = !![];
        if (_0x3c84cf['EDITOR']['enabled'])
            _0x549ae1(_0x25a5f5['clientX'], _0x25a5f5['clientY']);
    }
});
window['addEventListener']('mouseup', _0x58a4de => {
    _0x3c84cf['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x3028be => {
    if (_0x3028be['target']['closest']('#settings-btn'))
        return;
    const _0x1a8232 = document['getElementById']('leaderboard-list');
    const _0x221da1 = document['getElementById']('leaderboard-toggle');
    if (_0x1a8232['style']['display'] === 'none') {
        _0x1a8232['style']['display'] = 'flex';
        _0x221da1['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x1a8232['style']['display'] = 'none';
        _0x221da1['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x19fa4a = document['getElementById']('close-target-btn');
if (_0x19fa4a) {
    _0x19fa4a['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x4264a2 = document['getElementById']('close-guide-btn');
if (_0x4264a2) {
    _0x4264a2['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x79aca5 = document['getElementById']('role-list-header');
if (_0x79aca5) {
    _0x79aca5['addEventListener']('click', () => {
        const _0x539139 = document['getElementById']('role-list-items');
        const _0x396f7c = document['getElementById']('role-list-toggle');
        if (_0x539139['style']['display'] === 'none') {
            _0x539139['style']['display'] = 'flex';
            _0x396f7c['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x539139['style']['display'] = 'none';
            _0x396f7c['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x18763() {
    const _0x15a67b = document['getElementById']('mobile-joystick-zone');
    const _0x2bf944 = document['getElementById']('mobile-joystick-base');
    const _0x30779b = document['getElementById']('mobile-joystick-knob');
    if (_0x15a67b && _0x2bf944 && _0x30779b) {
        const _0xe8a8cc = 0x3e;
        const _0x451e07 = (_0x577251, _0x5b3da4) => {
            const _0x5b520c = _0x2bf944['getBoundingClientRect']();
            const _0x3dce1c = _0x5b520c['left'] + _0x5b520c['width'] / 0x2;
            const _0x16a2b8 = _0x5b520c['top'] + _0x5b520c['height'] / 0x2;
            const _0x4d7ae9 = _0x577251 - _0x3dce1c;
            const _0x2cf79a = _0x5b3da4 - _0x16a2b8;
            const _0x19deb8 = Math['hypot'](_0x4d7ae9, _0x2cf79a);
            if (_0x19deb8 === 0x0) {
                _0x129829 = 0x0;
                _0x1d75d7 = 0x0;
                _0x531473 = ![];
                _0x30779b['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x1f4321 = Math['min'](_0x19deb8, _0xe8a8cc);
            const _0x1951ac = _0x4d7ae9 / _0x19deb8 * _0x1f4321;
            const _0x231568 = _0x2cf79a / _0x19deb8 * _0x1f4321;
            _0x129829 = _0x1951ac / _0xe8a8cc;
            _0x1d75d7 = _0x231568 / _0xe8a8cc;
            _0x531473 = _0x19deb8 >= _0xe8a8cc * 0.75;
            _0x30779b['style']['transform'] = 'translate(' + _0x1951ac + 'px,\x20' + _0x231568 + 'px)';
        };
        const _0x4c154e = _0x861e3c => {
            for (let _0x1d4676 = 0x0; _0x1d4676 < _0x861e3c['changedTouches']['length']; _0x1d4676++) {
                const _0x4eae73 = _0x861e3c['changedTouches'][_0x1d4676];
                if (_0xcd9f1c === null) {
                    _0xcd9f1c = _0x4eae73['identifier'];
                    _0x2e871b = !![];
                    _0x451e07(_0x4eae73['clientX'], _0x4eae73['clientY']);
                    break;
                }
            }
        };
        const _0x2a8e18 = _0x55d477 => {
            for (let _0x1cd4bf = 0x0; _0x1cd4bf < _0x55d477['changedTouches']['length']; _0x1cd4bf++) {
                const _0x1b933d = _0x55d477['changedTouches'][_0x1cd4bf];
                if (_0x1b933d['identifier'] === _0xcd9f1c) {
                    _0x451e07(_0x1b933d['clientX'], _0x1b933d['clientY']);
                    break;
                }
            }
        };
        const _0x4ebed8 = _0x5108e5 => {
            for (let _0x57c907 = 0x0; _0x57c907 < _0x5108e5['changedTouches']['length']; _0x57c907++) {
                const _0x21d291 = _0x5108e5['changedTouches'][_0x57c907];
                if (_0x21d291['identifier'] === _0xcd9f1c) {
                    _0xcd9f1c = null;
                    _0x2e871b = ![];
                    _0x129829 = 0x0;
                    _0x1d75d7 = 0x0;
                    _0x531473 = ![];
                    _0x30779b['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x15a67b['addEventListener']('touchstart', _0x25547f => {
            _0x25547f['preventDefault']();
            _0x4c154e(_0x25547f);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x2a8e18, { 'passive': !![] });
        window['addEventListener']('touchend', _0x4ebed8, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x4ebed8, { 'passive': !![] });
    }
    const _0x3b8576 = (_0x49d98d, _0x11ed20) => {
        const _0x95d87b = _0x49d98d / _0x3c84cf['SYSTEM']['viewScale'];
        const _0x4b1fde = _0x11ed20 / _0x3c84cf['SYSTEM']['viewScale'];
        const _0x403ce9 = _0x274dd6['x'] - _0x3c84cf['CAMERA']['x'] + _0x274dd6['width'] / 0x2;
        const _0x1d5fd5 = _0x274dd6['y'] - _0x3c84cf['CAMERA']['y'] + _0x274dd6['height'] / 0x2;
        _0x56b442 = Math['atan2'](_0x4b1fde - _0x1d5fd5, _0x95d87b - _0x403ce9);
        _0x2c484e = !![];
        _0x3c84cf['INPUTS']['mouseX'] = _0x49d98d;
        _0x3c84cf['INPUTS']['mouseY'] = _0x11ed20;
    };
    _0x18dd9f['addEventListener']('touchstart', _0x30b732 => {
        if (_0x129bcf)
            return;
        for (let _0x16976f = 0x0; _0x16976f < _0x30b732['changedTouches']['length']; _0x16976f++) {
            const _0x2cda57 = _0x30b732['changedTouches'][_0x16976f];
            if (_0x2cda57['identifier'] !== _0xcd9f1c && _0x32f70e === null) {
                _0x32f70e = _0x2cda57['identifier'];
                _0x3b8576(_0x2cda57['clientX'], _0x2cda57['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x18dd9f['addEventListener']('touchmove', _0x21afc4 => {
        if (_0x129bcf)
            return;
        for (let _0x379085 = 0x0; _0x379085 < _0x21afc4['changedTouches']['length']; _0x379085++) {
            const _0x211482 = _0x21afc4['changedTouches'][_0x379085];
            if (_0x211482['identifier'] === _0x32f70e) {
                _0x3b8576(_0x211482['clientX'], _0x211482['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x4179df = _0x1b2731 => {
        for (let _0x46e9f3 = 0x0; _0x46e9f3 < _0x1b2731['changedTouches']['length']; _0x46e9f3++) {
            const _0x5cb1ea = _0x1b2731['changedTouches'][_0x46e9f3];
            if (_0x5cb1ea['identifier'] === _0x32f70e) {
                _0x32f70e = null;
                _0x2c484e = ![];
                break;
            }
        }
    };
    _0x18dd9f['addEventListener']('touchend', _0x4179df, { 'passive': !![] });
    _0x18dd9f['addEventListener']('touchcancel', _0x4179df, { 'passive': !![] });
    const _0x4c13e3 = document['getElementById']('mob-sprint-btn');
    if (_0x4c13e3) {
        _0x4c13e3['addEventListener']('click', _0x10a42e => {
            _0x10a42e['stopPropagation']();
            _0x4cec9d = !_0x4cec9d;
            _0x4c13e3['classList']['toggle']('active', _0x4cec9d);
        });
    }
    const _0x3d5b81 = document['getElementById']('mob-interact-btn');
    if (_0x3d5b81) {
        _0x3d5b81['addEventListener']('click', _0x4bdebe => {
            _0x4bdebe['stopPropagation']();
            if (!_0x274dd6['isDead']) {
                const _0x2549d5 = Date['now']();
                if (!window['_lastDoorSend'] || _0x2549d5 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x2549d5;
                    if (_0x37c19c && _0x37c19c['readyState'] === WebSocket['OPEN'])
                        _0x37c19c['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x186fe7 = document['getElementById']('mob-ability-btn');
    if (_0x186fe7) {
        _0x186fe7['addEventListener']('click', _0x12c451 => {
            _0x12c451['stopPropagation']();
            if (_0x274dd6['isDead'])
                return;
            if (_0x4974dd === 'Mayor') {
                if (_0x210f96['has'](_0x2ef182)) {
                    _0x3b9202('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x157029 = document['getElementById']('mayor-confirm-dialog');
                if (_0x157029)
                    _0x157029['style']['display'] = 'flex';
                return;
            }
            if (_0x3c84cf['GAME_STATE'] === 'NIGHT') {
                if (!_0x3c84cf['NIGHT_ABILITY_OPEN']) {
                    _0x3b9202('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x23a314 = document['getElementById']('ability-ui');
                if (_0x23a314) {
                    if (_0x23a314['style']['display'] === 'block') {
                        _0x23a314['style']['display'] = 'none';
                    } else {
                        _0x11ca86();
                        _0x23a314['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x3c84cf['GAME_STATE'] === 'DAY_DISCUSS' || _0x3c84cf['GAME_STATE'] === 'DAY_VOTE') {
                _0x3b9202('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0xddcfe1 = document['getElementById']('mob-will-btn');
    const _0x33a6b7 = document['getElementById']('will-ui');
    const _0x5cff05 = document['getElementById']('will-input');
    const _0xabf58a = document['getElementById']('close-will-btn');
    const _0x33de9d = () => {
        if (!_0x33a6b7)
            return;
        if (_0x33a6b7['style']['display'] === 'flex') {
            _0x33a6b7['style']['display'] = 'none';
            if (_0x37c19c && _0x37c19c['readyState'] === WebSocket['OPEN'] && _0x5cff05) {
                _0x37c19c['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x5cff05['value']
                }));
            }
            if (_0x5cff05)
                _0x5cff05['blur']();
        } else {
            _0x33a6b7['style']['display'] = 'flex';
            if (_0x5cff05)
                _0x5cff05['focus']();
        }
    };
    if (_0xddcfe1)
        _0xddcfe1['addEventListener']('click', _0x16e667 => {
            _0x16e667['stopPropagation']();
            _0x33de9d();
        });
    if (_0xabf58a)
        _0xabf58a['addEventListener']('click', _0x2e0b24 => {
            _0x2e0b24['stopPropagation']();
            _0x33de9d();
        });
    const _0xb9bbea = document['getElementById']('mob-chat-btn');
    const _0x961c1f = document['getElementById']('mobile-chat-overlay');
    const _0x5335cf = document['getElementById']('mobile-chat-input');
    const _0x20a37d = document['getElementById']('mobile-chat-send');
    const _0x54000c = document['getElementById']('mobile-chat-cancel');
    const _0x355cfb = () => {
        if (!_0x961c1f || !_0x5335cf)
            return;
        _0x961c1f['style']['display'] = 'flex';
        _0x5335cf['value'] = '';
        _0x5335cf['focus']();
    };
    const _0x3cb6c9 = () => {
        if (!_0x961c1f || !_0x5335cf)
            return;
        _0x961c1f['style']['display'] = 'none';
        _0x5335cf['blur']();
    };
    const _0x5c9969 = () => {
        if (!_0x5335cf)
            return;
        const _0x15a3b8 = _0x5335cf['value']['trim']();
        if (_0x15a3b8['length'] > 0x0 && _0x37c19c && _0x37c19c['readyState'] === WebSocket['OPEN']) {
            _0x37c19c['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x15a3b8
            }));
        }
        _0x5335cf['value'] = '';
        _0x3cb6c9();
    };
    if (_0xb9bbea)
        _0xb9bbea['addEventListener']('click', _0x23b086 => {
            _0x23b086['stopPropagation']();
            _0x355cfb();
        });
    if (_0x20a37d)
        _0x20a37d['addEventListener']('click', _0x28f08f => {
            _0x28f08f['stopPropagation']();
            _0x5c9969();
        });
    if (_0x54000c)
        _0x54000c['addEventListener']('click', _0x2d6601 => {
            _0x2d6601['stopPropagation']();
            _0x3cb6c9();
        });
    if (_0x5335cf) {
        _0x5335cf['addEventListener']('keydown', _0x40f006 => {
            if (_0x40f006['key'] === 'Enter') {
                _0x40f006['preventDefault']();
                _0x5c9969();
            } else if (_0x40f006['key'] === 'Escape') {
                _0x3cb6c9();
            }
        });
    }
    const _0x410921 = document['getElementById']('mob-top-chat');
    if (_0x410921)
        _0x410921['addEventListener']('click', _0x5aef1f => {
            _0x5aef1f['stopPropagation']();
            _0x355cfb();
        });
    const _0x4dc6e4 = document['getElementById']('mob-top-will');
    if (_0x4dc6e4)
        _0x4dc6e4['addEventListener']('click', _0x5dcf07 => {
            _0x5dcf07['stopPropagation']();
            _0x33de9d();
        });
    const _0x294e93 = document['getElementById']('mob-top-roles');
    if (_0x294e93) {
        _0x294e93['addEventListener']('click', _0x40fa0f => {
            _0x40fa0f['stopPropagation']();
            const _0x1189b0 = document['getElementById']('role-list-ui');
            const _0x282768 = document['getElementById']('leaderboard-ui');
            if (_0x282768)
                _0x282768['style']['display'] = 'none';
            if (_0x1189b0)
                _0x1189b0['style']['display'] = _0x1189b0['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x17c8f2 = document['getElementById']('mob-top-players');
    if (_0x17c8f2) {
        _0x17c8f2['addEventListener']('click', _0x6a14cc => {
            _0x6a14cc['stopPropagation']();
            const _0x3f7577 = document['getElementById']('leaderboard-ui');
            const _0xe36a3b = document['getElementById']('role-list-ui');
            if (_0xe36a3b)
                _0xe36a3b['style']['display'] = 'none';
            if (_0x3f7577)
                _0x3f7577['style']['display'] = _0x3f7577['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x21a7a6 = document['getElementById']('mob-top-help');
    if (_0x21a7a6) {
        _0x21a7a6['addEventListener']('click', _0x3b702f => {
            _0x3b702f['stopPropagation']();
            const _0x261f14 = document['getElementById']('guide-ui');
            if (_0x261f14)
                _0x261f14['style']['display'] = _0x261f14['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x351eee) {
            _0x351eee = !![];
            _0x1d8ad0();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
