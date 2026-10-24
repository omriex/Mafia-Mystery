document['addEventListener']('contextmenu', _0x4711b9 => _0x4711b9['preventDefault']());
const _0x16dd5b = {
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
let _0x1a64b6 = '';
function _0x5c2105(_0x5870c9, _0x36342d) {
    const _0x2320c9 = document['getElementById']('role-list-ui');
    const _0x1cfc68 = document['getElementById']('role-list-items');
    if (!_0x2320c9 || !_0x1cfc68)
        return;
    if (!_0x36342d || _0x36342d === 'off' || !_0x5870c9 || _0x5870c9['length'] === 0x0) {
        _0x2320c9['style']['display'] = 'none';
        return;
    }
    const _0x119343 = _0x36342d + '|' + JSON['stringify'](_0x5870c9);
    if (_0x119343 === _0x1a64b6)
        return;
    _0x1a64b6 = _0x119343;
    const _0x3da90c = document['getElementById']('role-tooltip');
    if (_0x3da90c) {
        _0x3da90c['style']['visibility'] = 'hidden';
        _0x3da90c['style']['opacity'] = '0';
    }
    _0x2320c9['style']['display'] = 'flex';
    _0x1cfc68['innerHTML'] = '';
    _0x5870c9['forEach'](_0x4e3cd5 => {
        const _0x5d3dec = document['createElement']('div');
        _0x5d3dec['className'] = 'role-list-entry';
        const _0x2c2b99 = _0x4e3cd5['name']['includes']('Mafia') || _0x4e3cd5['name'] === 'Skinwalker';
        _0x5d3dec['classList']['add'](_0x2c2b99 ? 'mafia' : 'town');
        if (_0x36342d === 'precise' && _0x4e3cd5['isDead']) {
            _0x5d3dec['classList']['remove']('town', 'mafia');
            _0x5d3dec['classList']['add']('dead');
            _0x5d3dec['innerHTML'] = '<span>' + _0x4e3cd5['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0xf34fb5 = _0x4e3cd5['count'] !== undefined && _0x4e3cd5['count'] !== null ? _0x4e3cd5['count'] + 'x\x20' : '';
            _0x5d3dec['innerHTML'] = '<span>' + _0xf34fb5 + _0x4e3cd5['name'] + '</span>';
        }
        if (_0x36342d === 'subalignments' && _0x16dd5b[_0x4e3cd5['name']]) {
            _0x5d3dec['style']['cursor'] = 'pointer';
            _0x5d3dec['addEventListener']('mouseenter', () => {
                const _0x2bf7cc = document['getElementById']('role-tooltip');
                if (!_0x2bf7cc)
                    return;
                const _0x15b6d5 = _0x16dd5b[_0x4e3cd5['name']]['join'](',\x20');
                _0x2bf7cc['innerHTML'] = '';
                const _0x23e5ff = document['createElement']('span');
                _0x23e5ff['style']['color'] = '#ffcc00';
                _0x23e5ff['textContent'] = _0x4e3cd5['name'];
                _0x2bf7cc['appendChild'](_0x23e5ff);
                _0x2bf7cc['appendChild'](document['createElement']('br'));
                _0x2bf7cc['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x15b6d5));
                const _0x8fa3c7 = _0x5d3dec['getBoundingClientRect']();
                _0x2bf7cc['style']['left'] = _0x8fa3c7['left'] - 0xeb + 'px';
                _0x2bf7cc['style']['top'] = _0x8fa3c7['top'] + 'px';
                _0x2bf7cc['style']['display'] = 'block';
                _0x2bf7cc['style']['visibility'] = 'visible';
                _0x2bf7cc['style']['opacity'] = '1';
            });
            _0x5d3dec['addEventListener']('mouseleave', () => {
                const _0xf6536d = document['getElementById']('role-tooltip');
                if (_0xf6536d) {
                    _0xf6536d['style']['display'] = 'none';
                    _0xf6536d['style']['visibility'] = 'hidden';
                    _0xf6536d['style']['opacity'] = '0';
                }
            });
        }
        _0x1cfc68['appendChild'](_0x5d3dec);
    });
}
let _0x17bec9 = null;
let _0x52cb91 = null;
const _0x3da6c9 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x4c651f = 'Player???';
let _0x16d7ab = ![];
let _0x3182c1 = {};
let _0xb09f85 = null;
let _0x27b0bc = 0x0;
let _0x599b84 = 0x0;
let _0x49916f = new Set();
let _0x273f24 = ![];
let _0x5c543d = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x352d80 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x2e9a0e = ![];
let _0x4ebf73 = null;
let _0x39c3b = 0x0;
let _0x1784b7 = 0x0;
let _0x33e08b = ![];
let _0x56f140 = ![];
let _0x31c969 = 0x0;
let _0x438ee9 = null;
let _0x466732 = ![];
const _0x303f6c = ((() => {
    const _0xe83b4b = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3'
    };
    let _0x4683dd = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x143771 = 0x320;
    const _0x2f7321 = {};
    const _0x2e183b = {};
    let _0x48b6b4 = null;
    let _0x1aa9ac = _0x4683dd === 0x0;
    let _0x1633d2 = ![];
    for (const [_0x436b9a, _0x121561] of Object['entries'](_0xe83b4b)) {
        const _0x1f3f09 = new Audio(_0x121561);
        _0x1f3f09['loop'] = !![];
        _0x1f3f09['volume'] = 0x0;
        _0x1f3f09['preload'] = 'auto';
        _0x2f7321[_0x436b9a] = _0x1f3f09;
        _0x2e183b[_0x436b9a] = null;
    }
    const _0x3cc89f = _0x45cd03 => Math['min'](0x1, Math['max'](0x0, _0x45cd03));
    function _0x546366(_0x192733) {
        if (_0x2e183b[_0x192733] !== null) {
            cancelAnimationFrame(_0x2e183b[_0x192733]);
            _0x2e183b[_0x192733] = null;
        }
    }
    function _0x12ae91(_0x4578ef, _0x271e96, _0x19b020, _0x19c665, _0x4dacf4) {
        _0x546366(_0x4578ef);
        const _0x54e0a3 = _0x2f7321[_0x4578ef];
        const _0x2ec5ef = performance['now']();
        const _0x21d2f4 = _0x2b2eaf => {
            const _0x3abcff = _0x3cc89f((_0x2b2eaf - _0x2ec5ef) / _0x19c665);
            const _0x5ecf9b = _0x3cc89f(_0x271e96 + (_0x19b020 - _0x271e96) * _0x3abcff);
            _0x54e0a3['volume'] = _0x1aa9ac ? 0x0 : _0x5ecf9b;
            if (_0x3abcff < 0x1) {
                _0x2e183b[_0x4578ef] = requestAnimationFrame(_0x21d2f4);
            } else {
                _0x2e183b[_0x4578ef] = null;
                _0x54e0a3['volume'] = _0x1aa9ac ? 0x0 : _0x3cc89f(_0x19b020);
                if (_0x4dacf4)
                    _0x4dacf4();
            }
        };
        _0x2e183b[_0x4578ef] = requestAnimationFrame(_0x21d2f4);
    }
    function _0x23dcb5(_0x3eac42) {
        const _0x5c4431 = _0x3eac42['play']();
        if (_0x5c4431 && _0x5c4431['catch']) {
            _0x5c4431['catch'](() => {
                if (!_0x1633d2) {
                    const _0x5accc4 = () => {
                        _0x1633d2 = !![];
                        _0x3eac42['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x5accc4);
                        document['removeEventListener']('keydown', _0x5accc4);
                        document['removeEventListener']('touchstart', _0x5accc4);
                    };
                    document['addEventListener']('click', _0x5accc4, { 'once': !![] });
                    document['addEventListener']('keydown', _0x5accc4, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x5accc4, { 'once': !![] });
                }
            });
        }
    }
    function _0x3abbc6(_0x29e127) {
        if (!_0xe83b4b[_0x29e127])
            return;
        if (_0x48b6b4 === _0x29e127)
            return;
        const _0x4588e7 = _0x48b6b4;
        _0x48b6b4 = _0x29e127;
        const _0x69d1be = _0x2f7321[_0x29e127];
        _0x546366(_0x29e127);
        _0x69d1be['currentTime'] = 0x0;
        _0x69d1be['volume'] = 0x0;
        _0x23dcb5(_0x69d1be);
        _0x12ae91(_0x29e127, 0x0, _0x4683dd, _0x143771);
        if (_0x4588e7 && _0x2f7321[_0x4588e7]) {
            const _0x56342c = _0x4588e7;
            const _0x527493 = _0x2f7321[_0x56342c];
            const _0x4e283c = _0x3cc89f(_0x527493['volume']);
            _0x12ae91(_0x56342c, _0x4e283c, 0x0, _0x143771, () => {
                _0x527493['pause']();
                _0x527493['currentTime'] = 0x0;
            });
        }
    }
    function _0x23380b(_0x247799) {
        _0x4683dd = _0x3cc89f(_0x247799);
        localStorage['setItem']('musicVolume', String(_0x4683dd));
        if (!_0x1aa9ac && _0x48b6b4 && _0x2e183b[_0x48b6b4] === null) {
            _0x2f7321[_0x48b6b4]['volume'] = _0x4683dd;
        }
    }
    function _0xb7dbaf() {
        return _0x4683dd;
    }
    function _0x7caf18(_0x5cfaff) {
        _0x1aa9ac = _0x5cfaff;
        for (const _0x564287 of Object['keys'](_0x2f7321)) {
            if (_0x2e183b[_0x564287] === null) {
                _0x2f7321[_0x564287]['volume'] = _0x5cfaff || _0x564287 !== _0x48b6b4 ? 0x0 : _0x4683dd;
            }
        }
    }
    function _0x326d0f() {
        return _0x1aa9ac;
    }
    function _0x481c21(_0x52a55a) {
        if (_0x52a55a === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x52a55a === 'DAY_VOTE')
            return 'voting';
        return 'wait';
    }
    function _0x475471(_0x1ee817) {
        _0x3abbc6(_0x481c21(_0x1ee817));
    }
    function _0x4b1bb1(_0x1ec408) {
        _0x3abbc6(_0x1ec408);
    }
    return {
        'play': _0x3abbc6,
        'onStateChange': _0x475471,
        'onSoundEvent': _0x4b1bb1,
        'setVolume': _0x23380b,
        'getVolume': _0xb7dbaf,
        'setMuted': _0x7caf18,
        'isMuted': _0x326d0f
    };
})());
const _0x2f61af = ((() => {
    const _0x5a0604 = 0x258;
    const _0xa20bc = 0xb4;
    const _0x3ec0b5 = 0x708;
    const _0x43c8a7 = 0x140;
    const _0x70bec8 = 0.18;
    const _0x3f4ce9 = 0.95;
    const _0x375346 = new Audio('audio/heartbeat.mp3');
    _0x375346['loop'] = ![];
    _0x375346['preload'] = 'auto';
    _0x375346['volume'] = 0x0;
    let _0xa1daea = 0x0;
    let _0xbb0b75 = Infinity;
    function _0x34def8(_0x4fdf9e, _0x37a942, _0x4a9f1f) {
        return Math['min'](_0x4a9f1f, Math['max'](_0x37a942, _0x4fdf9e));
    }
    function _0xbe5dbb(_0x1a102e, _0x1948ed, _0x2d5cf3) {
        return _0x1a102e + (_0x1948ed - _0x1a102e) * _0x2d5cf3;
    }
    function _0x4b8f54(_0x29ffce) {
        if (_0x5b5ada['GAME_STATE'] !== 'NIGHT' || _0x4e1adb['isDead'] || _0xb09f85 === 'Skinwalker') {
            _0xbb0b75 = Infinity;
            return;
        }
        const _0xf466b6 = _0x4e1adb['x'] + 22.5;
        const _0x4ce585 = _0x4e1adb['y'] + 22.5;
        let _0x13389b = Infinity;
        for (const _0x552add in _0x3182c1) {
            const _0xacdbc9 = _0x3182c1[_0x552add];
            if (!_0xacdbc9['isDark'] || _0xacdbc9['isDead'])
                continue;
            const _0x2a4aa5 = _0xacdbc9['renderX'] + 22.5 - _0xf466b6;
            const _0x262aa6 = _0xacdbc9['renderY'] + 22.5 - _0x4ce585;
            const _0x420188 = Math['sqrt'](_0x2a4aa5 * _0x2a4aa5 + _0x262aa6 * _0x262aa6);
            if (_0x420188 < _0x13389b)
                _0x13389b = _0x420188;
        }
        _0xbb0b75 = _0x13389b;
        if (_0x13389b > _0x5a0604)
            return;
        const _0xd991ed = 0x1 - _0x34def8((_0x13389b - _0xa20bc) / (_0x5a0604 - _0xa20bc), 0x0, 0x1);
        const _0xec4b6b = _0xbe5dbb(_0x3ec0b5, _0x43c8a7, _0xd991ed);
        const _0x560d27 = _0xbe5dbb(_0x70bec8, _0x3f4ce9, _0xd991ed);
        if (_0x29ffce >= _0xa1daea) {
            _0x375346['currentTime'] = 0x0;
            _0x375346['volume'] = _0x303f6c['isMuted']() ? 0x0 : _0x34def8(_0x560d27 * _0x303f6c['getVolume']() / 0.7, 0x0, 0x1);
            _0x375346['play']()['catch'](() => {
            });
            _0xa1daea = _0x29ffce + _0xec4b6b;
        }
    }
    return { 'tick': _0x4b8f54 };
})());
function _0x58cb7f() {
    const _0x55ab96 = document['getElementById']('mob-ability-btn');
    if (!_0x55ab96)
        return;
    const _0x58f3c6 = _0x5b5ada['GAME_STATE'] === 'NIGHT' && !_0x4e1adb['isDead'];
    const _0xdf1af2 = _0xb09f85 === 'Mayor' && !_0x49916f['has'](_0x52cb91) && !_0x4e1adb['isDead'];
    if (_0x58f3c6 || _0xdf1af2) {
        _0x55ab96['style']['display'] = 'flex';
    } else {
        _0x55ab96['style']['display'] = 'none';
    }
}
function _0x382a4f() {
    const _0x4f1850 = document['getElementById']('mobile-joystick-zone');
    const _0x54208c = document['getElementById']('mobile-top-bar');
    const _0x2e4de3 = document['getElementById']('mobile-action-bar');
    if (!_0x4f1850 || !_0x54208c || !_0x2e4de3)
        return;
    if (!_0x181d57 && _0x352d80) {
        _0x4f1850['style']['display'] = 'flex';
        _0x54208c['style']['display'] = 'flex';
        _0x2e4de3['style']['display'] = 'flex';
        _0x58cb7f();
    } else {
        _0x4f1850['style']['display'] = 'none';
        _0x54208c['style']['display'] = 'none';
        _0x2e4de3['style']['display'] = 'none';
    }
}
const _0x3788eb = document['getElementById']('gameCanvas');
const _0x2a1632 = _0x3788eb['getContext']('2d', { 'alpha': ![] });
const _0x3a2280 = 0x500;
const _0x1c49c3 = 0x2d0;
const _0x5b5ada = {
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
        'width': _0x3a2280,
        'height': _0x1c49c3
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
const _0x4e1adb = {
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
const _0x3ba034 = new Image();
const _0x60f0a2 = new Image();
const _0x417568 = new Image();
const _0x3c5210 = new Image();
_0x3c5210['src'] = 'assets/mayor\x20cosmetic.png';
const _0x2349ff = [
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
const _0x425172 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x2fcc3e = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x2fcc3e === 'body1.png' || _0x2fcc3e === 'body1')
    _0x2fcc3e = 'body01.png';
if (!_0x2fcc3e['endsWith']('.png'))
    _0x2fcc3e += '.png';
let _0x1e0f0a = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x1e0f0a['endsWith']('.png'))
    _0x1e0f0a += '.png';
let _0x181d57 = !![];
let _0x3c16f8 = null;
let _0x1b394c = null;
let _0xd591ac = 0x3c;
let _0x334c3c = 0x2d;
const _0x198b43 = {};
function _0x38b1f0(_0x52b3bb) {
    if (!_0x198b43[_0x52b3bb]) {
        const _0x51b512 = new Image();
        _0x51b512['src'] = _0x52b3bb;
        _0x198b43[_0x52b3bb] = _0x51b512;
    }
    return _0x198b43[_0x52b3bb];
}
function _0x15fb49(_0x20c239, _0x3d2453, _0x5a2e4e, _0x1bead3, _0x3abe97) {
    try {
        const _0x5e8f1c = 'assets/' + (_0x3d2453 || 'body01.png');
        const _0x1098a9 = _0x38b1f0(_0x5e8f1c);
        if (_0x1098a9['complete'] && _0x1098a9['naturalWidth'] > 0x0) {
            _0x20c239['drawImage'](_0x1098a9, -_0x1bead3 / 0x2, -_0x3abe97 / 0x2, _0x1bead3, _0x3abe97);
        }
        const _0x2d1178 = 'assets/' + (_0x5a2e4e || 'eyes4.png');
        const _0x267829 = _0x38b1f0(_0x2d1178);
        if (_0x267829['complete'] && _0x267829['naturalWidth'] > 0x0) {
            _0x20c239['drawImage'](_0x267829, -_0x1bead3 / 0x2, -_0x3abe97 / 0x2, _0x1bead3, _0x3abe97);
        }
    } catch (_0x3c9e7a) {
    }
}
function _0x46f63b() {
    const _0x1f0763 = document['getElementById']('body-skin-grid');
    const _0x157bce = document['getElementById']('eyes-skin-grid');
    if (!_0x1f0763 || !_0x157bce)
        return;
    _0x1f0763['innerHTML'] = '';
    _0x2349ff['forEach'](_0x2b93af => {
        const _0x4da484 = document['createElement']('button');
        _0x4da484['className'] = 'skin-btn' + (_0x2b93af === _0x2fcc3e ? '\x20selected' : '');
        const _0x3720c2 = document['createElement']('img');
        _0x3720c2['src'] = 'assets/' + _0x2b93af;
        _0x4da484['appendChild'](_0x3720c2);
        _0x4da484['onclick'] = () => {
            _0x2fcc3e = _0x2b93af;
            localStorage['setItem']('selectedBody', _0x2b93af);
            _0x1f0763['querySelectorAll']('.skin-btn')['forEach'](_0x4324f7 => _0x4324f7['classList']['remove']('selected'));
            _0x4da484['classList']['add']('selected');
        };
        _0x1f0763['appendChild'](_0x4da484);
    });
    _0x157bce['innerHTML'] = '';
    _0x425172['forEach'](_0x3b37e1 => {
        const _0x4993f7 = document['createElement']('button');
        _0x4993f7['className'] = 'skin-btn' + (_0x3b37e1 === _0x1e0f0a ? '\x20selected' : '');
        const _0x505272 = document['createElement']('img');
        _0x505272['src'] = 'assets/' + _0x3b37e1;
        _0x4993f7['appendChild'](_0x505272);
        _0x4993f7['onclick'] = () => {
            _0x1e0f0a = _0x3b37e1;
            localStorage['setItem']('selectedEyes', _0x3b37e1);
            _0x157bce['querySelectorAll']('.skin-btn')['forEach'](_0x37109 => _0x37109['classList']['remove']('selected'));
            _0x4993f7['classList']['add']('selected');
        };
        _0x157bce['appendChild'](_0x4993f7);
    });
}
function _0x37a59a(_0x3370b5) {
    if (!_0x5b5ada['MAP']['columns'] || !_0x5b5ada['CAMERA']['width'])
        return;
    const _0x21c318 = Math['max'](0x0, _0x5b5ada['MAP']['columns'] * _0x5b5ada['MAP']['tileSize'] - _0x5b5ada['CAMERA']['width']);
    const _0x1a3005 = Math['max'](0x0, _0x5b5ada['MAP']['rows'] * _0x5b5ada['MAP']['tileSize'] - _0x5b5ada['CAMERA']['height']);
    if (_0x3c16f8 === null) {
        _0x3c16f8 = _0x21c318 / 0x2;
        _0x1b394c = _0x1a3005 / 0x2;
    }
    _0x3c16f8 += _0xd591ac * _0x3370b5;
    _0x1b394c += _0x334c3c * _0x3370b5;
    if (_0x3c16f8 <= 0x0) {
        _0x3c16f8 = 0x0;
        _0xd591ac = Math['abs'](_0xd591ac);
    } else if (_0x3c16f8 >= _0x21c318) {
        _0x3c16f8 = _0x21c318;
        _0xd591ac = -Math['abs'](_0xd591ac);
    }
    if (_0x1b394c <= 0x0) {
        _0x1b394c = 0x0;
        _0x334c3c = Math['abs'](_0x334c3c);
    } else if (_0x1b394c >= _0x1a3005) {
        _0x1b394c = _0x1a3005;
        _0x334c3c = -Math['abs'](_0x334c3c);
    }
    _0x5b5ada['CAMERA']['x'] = _0x3c16f8;
    _0x5b5ada['CAMERA']['y'] = _0x1b394c;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x4aa537 = document['getElementById']('play-btn');
    const _0x2f6a1a = document['getElementById']('username-input');
    const _0x12bddd = localStorage['getItem']('playerName');
    if (_0x12bddd && _0x2f6a1a) {
        _0x2f6a1a['value'] = _0x12bddd;
    }
    const _0x358a1e = () => {
        _0x303f6c['play']('wait');
        document['removeEventListener']('click', _0x358a1e);
        document['removeEventListener']('keydown', _0x358a1e);
        document['removeEventListener']('touchstart', _0x358a1e);
    };
    document['addEventListener']('click', _0x358a1e, { 'once': !![] });
    document['addEventListener']('keydown', _0x358a1e, { 'once': !![] });
    document['addEventListener']('touchstart', _0x358a1e, { 'once': !![] });
    if (_0x4aa537) {
        _0x4aa537['addEventListener']('click', () => {
            const _0x2bd86b = _0x2f6a1a['value'];
            const _0x15ee35 = _0x2bd86b['replace'](/<[^>]*>/g, '')['replace'](/[^\x20-\x7E]/g, '')['replace'](/[<>]/g, '')['replace'](/\s+/g, '\x20')['trim']()['substring'](0x0, 0xe);
            _0x4c651f = _0x15ee35 || 'Player';
            localStorage['setItem']('playerName', _0x4c651f);
            _0x181d57 = ![];
            _0x5b5ada['CAMERA']['x'] = null;
            _0x5b5ada['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x5bb88b = document['getElementById']('controls-hint');
            if (_0x5bb88b && !_0x352d80)
                _0x5bb88b['style']['display'] = 'block';
            _0x382a4f();
            if (_0x352d80) {
                const _0x1c350f = document['getElementById']('leaderboard-list');
                const _0x1daf31 = document['getElementById']('leaderboard-toggle');
                if (_0x1c350f) {
                    _0x1c350f['style']['display'] = 'none';
                    if (_0x1daf31)
                        _0x1daf31['style']['transform'] = 'rotate(180deg)';
                }
                const _0x22fbca = document['getElementById']('role-list-items');
                const _0x1cf6d2 = document['getElementById']('role-list-toggle');
                if (_0x22fbca) {
                    _0x22fbca['style']['display'] = 'none';
                    if (_0x1cf6d2)
                        _0x1cf6d2['style']['transform'] = 'rotate(180deg)';
                }
            }
            if (_0x17bec9 && _0x17bec9['readyState'] === WebSocket['OPEN']) {
                _0x17bec9['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x4c651f,
                    'token': _0x3da6c9,
                    'body': _0x2fcc3e,
                    'eyes': _0x1e0f0a
                }));
            } else if (!_0x17bec9 || _0x17bec9['readyState'] === WebSocket['CLOSED'] || _0x17bec9['readyState'] === WebSocket['CLOSING']) {
                _0x346cb9();
            }
        });
    }
    _0x46f63b();
    _0x346cb9();
    _0x1616ea();
    _0x41b908();
    _0x1afa0f();
});
function _0x41b908() {
    const _0x3337b3 = document['getElementById']('settings-btn');
    const _0x25cabb = document['getElementById']('settings-panel');
    const _0x162b89 = document['getElementById']('close-settings-btn');
    const _0x11f5ad = document['getElementById']('setting-mouse-relative');
    if (_0x11f5ad) {
        _0x11f5ad['checked'] = _0x5c543d;
        _0x11f5ad['addEventListener']('change', () => {
            _0x5c543d = _0x11f5ad['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x5c543d ? 'true' : 'false');
        });
    }
    const _0x47b6b0 = document['getElementById']('setting-music-volume');
    const _0x5a0575 = document['getElementById']('setting-music-volume-display');
    function _0x50d371(_0x140ecf) {
        const _0x2358b8 = (_0x140ecf['value'] - _0x140ecf['min']) / (_0x140ecf['max'] - _0x140ecf['min']) * 0x64;
        _0x140ecf['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x2358b8 + '%,\x20#444\x20' + _0x2358b8 + '%)';
    }
    if (_0x47b6b0) {
        const _0x3e1f9c = _0x303f6c['getVolume']();
        const _0x2f9a77 = Math['round'](_0x3e1f9c * 0x64);
        _0x47b6b0['value'] = _0x2f9a77;
        if (_0x5a0575)
            _0x5a0575['textContent'] = _0x2f9a77 + '%';
        _0x50d371(_0x47b6b0);
        _0x47b6b0['addEventListener']('input', () => {
            const _0x4c0244 = parseInt(_0x47b6b0['value'], 0xa);
            if (_0x5a0575)
                _0x5a0575['textContent'] = _0x4c0244 + '%';
            _0x50d371(_0x47b6b0);
            _0x303f6c['setVolume'](_0x4c0244 / 0x64);
            _0x303f6c['setMuted'](_0x4c0244 === 0x0);
        });
    }
    if (_0x3337b3 && _0x25cabb) {
        _0x3337b3['addEventListener']('click', _0x1f3f38 => {
            _0x1f3f38['stopPropagation']();
            _0x25cabb['style']['display'] = _0x25cabb['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x162b89 && _0x25cabb) {
        _0x162b89['addEventListener']('click', () => {
            _0x25cabb['style']['display'] = 'none';
        });
    }
    const _0x638b10 = document['getElementById']('mayor-confirm-yes');
    const _0x31752d = document['getElementById']('mayor-confirm-no');
    const _0x3ff340 = document['getElementById']('mayor-confirm-dialog');
    if (_0x638b10 && _0x3ff340) {
        _0x638b10['addEventListener']('click', () => {
            if (_0x17bec9 && _0x17bec9['readyState'] === WebSocket['OPEN']) {
                _0x17bec9['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x3ff340['style']['display'] = 'none';
        });
    }
    if (_0x31752d && _0x3ff340) {
        _0x31752d['addEventListener']('click', () => {
            _0x3ff340['style']['display'] = 'none';
        });
    }
    const _0x2f9caf = document['getElementById']('close-ability-btn');
    if (_0x2f9caf) {
        _0x2f9caf['addEventListener']('click', () => {
            const _0x262469 = document['getElementById']('ability-ui');
            if (_0x262469)
                _0x262469['style']['display'] = 'none';
        });
    }
}
let _0x1913aa = '';
function _0x1fc2e1(_0x20aaae) {
    const _0xcdd6c2 = document['getElementById']('vote-tally-panel');
    const _0x4b876f = document['getElementById']('vote-tally-list');
    if (!_0xcdd6c2 || !_0x4b876f)
        return;
    if (_0x20aaae['state'] !== 'DAY_VOTE') {
        _0xcdd6c2['style']['display'] = 'none';
        _0x1913aa = '';
        return;
    }
    _0xcdd6c2['style']['display'] = 'block';
    const _0x4ebc36 = {};
    for (const _0x1abbdf in _0x3182c1) {
        if (!_0x3182c1[_0x1abbdf]['isDead'])
            _0x4ebc36[_0x1abbdf] = 0x0;
    }
    if (_0x52cb91 && !_0x4e1adb['isDead'])
        _0x4ebc36[_0x52cb91] = 0x0;
    const _0x42936e = _0x20aaae['votes'] || {};
    for (const _0x3d3c89 in _0x42936e) {
        const _0x5a71aa = _0x42936e[_0x3d3c89];
        const _0x3e518e = _0x20aaae['mayorRevealed'] && _0x20aaae['mayorRevealed'][_0x3d3c89] ? 0x2 : 0x1;
        _0x4ebc36[_0x5a71aa] = (_0x4ebc36[_0x5a71aa] || 0x0) + _0x3e518e;
    }
    let _0x5b0816 = 0x0;
    const _0x44f245 = _0x20aaae['skips'] || {};
    for (const _0x48ae9f in _0x44f245) {
        _0x5b0816 += Number(_0x44f245[_0x48ae9f]) || 0x1;
    }
    const _0x3a380a = JSON['stringify'](_0x4ebc36) + '_' + _0x5b0816 + '_' + _0x4e1adb['isDead'];
    if (_0x3a380a === _0x1913aa)
        return;
    _0x1913aa = _0x3a380a;
    _0x4b876f['innerHTML'] = '';
    for (const _0x1ceb5b in _0x4ebc36) {
        const _0xf4f210 = parseInt(_0x1ceb5b);
        const _0x22393e = _0xf4f210 === _0x52cb91 ? _0x4c651f : _0x3182c1[_0x1ceb5b] ? _0x3182c1[_0x1ceb5b]['name'] : 'Player\x20' + _0x1ceb5b;
        const _0x57b5a8 = document['createElement']('div');
        _0x57b5a8['className'] = 'vote-tally-entry';
        const _0x101442 = document['createElement']('span');
        _0x101442['textContent'] = _0x22393e;
        const _0x7480e5 = document['createElement']('span');
        _0x7480e5['className'] = 'vote-count';
        _0x7480e5['textContent'] = _0x4ebc36[_0x1ceb5b] + '\x20vote' + (_0x4ebc36[_0x1ceb5b] === 0x1 ? '' : 's');
        _0x57b5a8['appendChild'](_0x101442);
        _0x57b5a8['appendChild'](_0x7480e5);
        if (_0xf4f210 !== _0x52cb91 && !_0x4e1adb['isDead']) {
            _0x57b5a8['style']['cursor'] = 'pointer';
            _0x57b5a8['title'] = 'Vote\x20for\x20' + _0x22393e;
            _0x57b5a8['addEventListener']('click', _0x47e365 => {
                _0x47e365['stopPropagation']();
                if (_0x17bec9 && _0x17bec9['readyState'] === WebSocket['OPEN']) {
                    _0x17bec9['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x22393e
                    }));
                }
            });
        }
        _0x4b876f['appendChild'](_0x57b5a8);
    }
    const _0x7503d7 = document['createElement']('div');
    _0x7503d7['className'] = 'vote-tally-skip';
    _0x7503d7['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x5b0816 + '</span>';
    if (!_0x4e1adb['isDead']) {
        _0x7503d7['style']['cursor'] = 'pointer';
        _0x7503d7['title'] = 'Click\x20to\x20skip\x20vote';
        _0x7503d7['addEventListener']('click', _0x4575d2 => {
            _0x4575d2['stopPropagation']();
            if (_0x17bec9 && _0x17bec9['readyState'] === WebSocket['OPEN']) {
                _0x17bec9['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x4b876f['appendChild'](_0x7503d7);
}
let _0x47a6e7 = null;
let _0x2d39e5 = null;
let _0x4b1f84 = null;
function _0x205d26() {
    if (_0x17bec9 && _0x17bec9['readyState'] === WebSocket['OPEN']) {
        _0x17bec9['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x47a6e7,
            'abilityTarget': _0x2d39e5,
            'killTarget': _0x4b1f84
        }));
    }
}
function _0xf74723() {
    const _0x4d2d0d = document['getElementById']('ability-ui-body');
    if (!_0x4d2d0d)
        return;
    _0x4d2d0d['innerHTML'] = '';
    if (_0xb09f85 === 'Celebrity' || _0xb09f85 === 'Mayor') {
        const _0x5d0571 = document['createElement']('div');
        _0x5d0571['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x5d0571['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x4d2d0d['appendChild'](_0x5d0571);
        return;
    }
    if (_0xb09f85 === 'Skinwalker') {
        const _0xc8dde8 = document['createElement']('div');
        _0xc8dde8['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0xc8dde8['innerText'] = 'Transform\x20into:';
        _0x4d2d0d['appendChild'](_0xc8dde8);
        const _0x44de62 = document['createElement']('div');
        _0x44de62['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x38f135 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x53a02c = _0x40168d => {
            if (!_0x5b5ada['ROLE_LIST_RAW'] || _0x5b5ada['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x5b5ada['ROLE_LIST_RAW']['some'](_0x440afb => {
                if (_0x440afb['name'] === _0x40168d)
                    return !_0x440afb['isDead'];
                if (_0x16dd5b[_0x440afb['name']] && _0x16dd5b[_0x440afb['name']]['includes'](_0x40168d))
                    return !![];
                return ![];
            });
        };
        const _0x47d4cd = [
            'None',
            ..._0x38f135['filter'](_0x53a02c)
        ];
        _0x47d4cd['forEach'](_0x2873f4 => {
            const _0x5b4740 = document['createElement']('button');
            _0x5b4740['className'] = 'layer-btn';
            _0x5b4740['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x5b4740['innerText'] = _0x2873f4;
            const _0x277a8f = _0x2873f4 === 'None' && !_0x47a6e7 || _0x47a6e7 === _0x2873f4;
            if (_0x277a8f)
                _0x5b4740['classList']['add']('active');
            _0x5b4740['onclick'] = () => {
                _0x47a6e7 = _0x2873f4 === 'None' ? null : _0x2873f4;
                _0x205d26();
                _0xf74723();
            };
            _0x44de62['appendChild'](_0x5b4740);
        });
        _0x4d2d0d['appendChild'](_0x44de62);
        if (_0x53a02c('Vigilante')) {
            const _0x2ab361 = document['createElement']('div');
            _0x2ab361['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x2ab361['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x4d2d0d['appendChild'](_0x2ab361);
        }
        if (_0x47a6e7 === 'Vigilante') {
            const _0x196f20 = document['createElement']('div');
            _0x196f20['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x196f20['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x4d2d0d['appendChild'](_0x196f20);
        } else if (_0x47a6e7 && _0x47a6e7 !== 'Celebrity') {
            const _0x2d9272 = document['createElement']('div');
            _0x2d9272['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x2d9272['innerText'] = 'Use\x20' + _0x47a6e7 + '\x20ability\x20on:';
            _0x4d2d0d['appendChild'](_0x2d9272);
            const _0x13f3f7 = document['createElement']('div');
            _0x13f3f7['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x3dde1f = document['createElement']('button');
            _0x3dde1f['className'] = 'layer-btn';
            _0x3dde1f['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x3dde1f['innerText'] = 'No\x20one';
            if (!_0x2d39e5)
                _0x3dde1f['classList']['add']('active');
            _0x3dde1f['onclick'] = () => {
                _0x2d39e5 = null;
                _0x205d26();
                _0xf74723();
            };
            _0x13f3f7['appendChild'](_0x3dde1f);
            for (const _0xdc0da3 in _0x3182c1) {
                const _0x1a5fe8 = _0x3182c1[_0xdc0da3];
                if (_0x1a5fe8['isDead'])
                    continue;
                const _0x3462c7 = document['createElement']('button');
                _0x3462c7['className'] = 'layer-btn';
                _0x3462c7['innerText'] = _0x1a5fe8['name'];
                if (_0x2d39e5 === parseInt(_0xdc0da3))
                    _0x3462c7['classList']['add']('active');
                _0x3462c7['onclick'] = () => {
                    _0x2d39e5 = parseInt(_0xdc0da3);
                    _0x205d26();
                    _0xf74723();
                };
                _0x13f3f7['appendChild'](_0x3462c7);
            }
            _0x4d2d0d['appendChild'](_0x13f3f7);
        }
        const _0x3c8988 = document['createElement']('div');
        _0x3c8988['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x3c8988['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x4d2d0d['appendChild'](_0x3c8988);
        const _0x2c3960 = document['createElement']('div');
        _0x2c3960['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x16f8db = document['createElement']('button');
        _0x16f8db['className'] = 'layer-btn';
        _0x16f8db['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x16f8db['innerText'] = 'No\x20one';
        if (!_0x4b1f84 && !_0x5b5ada['CURRENT_TARGET'])
            _0x16f8db['classList']['add']('active');
        _0x16f8db['onclick'] = () => {
            _0x4b1f84 = null;
            _0x5b5ada['CURRENT_TARGET'] = null;
            _0x205d26();
            _0xf74723();
        };
        _0x2c3960['appendChild'](_0x16f8db);
        for (const _0x1e160f in _0x3182c1) {
            const _0x145434 = _0x3182c1[_0x1e160f];
            if (_0x145434['isDead'])
                continue;
            const _0x180ba7 = document['createElement']('button');
            _0x180ba7['className'] = 'layer-btn';
            _0x180ba7['innerText'] = _0x145434['name'];
            if (_0x4b1f84 === parseInt(_0x1e160f) || _0x5b5ada['CURRENT_TARGET'] === parseInt(_0x1e160f))
                _0x180ba7['classList']['add']('active');
            _0x180ba7['onclick'] = () => {
                _0x4b1f84 = parseInt(_0x1e160f);
                _0x5b5ada['CURRENT_TARGET'] = parseInt(_0x1e160f);
                _0x205d26();
                _0xf74723();
            };
            _0x2c3960['appendChild'](_0x180ba7);
        }
        _0x4d2d0d['appendChild'](_0x2c3960);
        return;
    }
    let _0x762ce2 = '';
    let _0x9734b2 = ![];
    if (_0xb09f85 === 'Doctor') {
        _0x762ce2 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x9734b2 = !![];
    } else if (_0xb09f85 === 'Investigator') {
        _0x762ce2 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0xb09f85 === 'Tracker') {
        _0x762ce2 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0xb09f85 === 'Archer') {
        _0x762ce2 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0xb09f85 === 'Escort') {
        _0x762ce2 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0xb09f85 === 'Vigilante') {
        _0x762ce2 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x3b6d02 = document['createElement']('div');
    _0x3b6d02['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x3b6d02['innerText'] = _0x762ce2;
    _0x4d2d0d['appendChild'](_0x3b6d02);
    const _0x5bf0c5 = document['createElement']('div');
    _0x5bf0c5['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x4a1ece = document['createElement']('button');
    _0x4a1ece['className'] = 'layer-btn';
    _0x4a1ece['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x4a1ece['innerText'] = 'No\x20one';
    if (_0x5b5ada['CURRENT_TARGET'] === null)
        _0x4a1ece['classList']['add']('active');
    _0x4a1ece['onclick'] = () => {
        _0x5b5ada['CURRENT_TARGET'] = null;
        if (_0x17bec9 && _0x17bec9['readyState'] === WebSocket['OPEN']) {
            _0x17bec9['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0xf74723();
    };
    _0x5bf0c5['appendChild'](_0x4a1ece);
    for (const _0x5497f0 in _0x3182c1) {
        const _0x3b364a = _0x3182c1[_0x5497f0];
        if (_0x3b364a['isDead'])
            continue;
        const _0x3b310b = document['createElement']('button');
        _0x3b310b['className'] = 'layer-btn';
        _0x3b310b['innerText'] = _0x3b364a['name'];
        if (_0x5b5ada['CURRENT_TARGET'] === parseInt(_0x5497f0))
            _0x3b310b['classList']['add']('active');
        _0x3b310b['onclick'] = () => {
            _0x5b5ada['CURRENT_TARGET'] = parseInt(_0x5497f0);
            if (_0x17bec9 && _0x17bec9['readyState'] === WebSocket['OPEN']) {
                _0x17bec9['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x5497f0)
                }));
            }
            _0xf74723();
        };
        _0x5bf0c5['appendChild'](_0x3b310b);
    }
    if (_0x9734b2 && !_0x4e1adb['isDead']) {
        const _0x33d567 = document['createElement']('button');
        _0x33d567['className'] = 'layer-btn';
        _0x33d567['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x33d567['innerText'] = _0x4c651f + '\x20(Self)';
        if (_0x5b5ada['CURRENT_TARGET'] === _0x52cb91)
            _0x33d567['classList']['add']('active');
        _0x33d567['onclick'] = () => {
            _0x5b5ada['CURRENT_TARGET'] = _0x52cb91;
            if (_0x17bec9 && _0x17bec9['readyState'] === WebSocket['OPEN']) {
                _0x17bec9['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x52cb91
                }));
            }
            _0xf74723();
        };
        _0x5bf0c5['appendChild'](_0x33d567);
    }
    _0x4d2d0d['appendChild'](_0x5bf0c5);
}
function _0x346cb9() {
    if (_0x17bec9 && (_0x17bec9['readyState'] === WebSocket['OPEN'] || _0x17bec9['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x1087c2 = new URLSearchParams();
    if (_0x3da6c9)
        _0x1087c2['set']('token', _0x3da6c9);
    _0x1087c2['set']('ngrok-skip-browser-warning', 'true');
    const _0x50e942 = 'wss://relating-worker-pipeline-enclosure.trycloudflare.com';
    const _0x5a0fa8 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x50e942;
    const _0x220005 = _0x5a0fa8 + '/?' + _0x1087c2['toString']();
    _0x17bec9 = new WebSocket(_0x220005);
    _0x17bec9['onopen'] = function () {
        if (!_0x181d57 && this['readyState'] === WebSocket['OPEN']) {
            this['send'](JSON['stringify']({
                'type': 'join',
                'name': _0x4c651f,
                'token': _0x3da6c9,
                'body': _0x2fcc3e,
                'eyes': _0x1e0f0a
            }));
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x17bec9 && _0x17bec9['readyState'] === WebSocket['OPEN']) {
            _0x17bec9['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x17bec9['onclose'] = _0x3dbe4c => {
        if (_0x3dbe4c['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x3dbe4c['code'] === 0xfa2 || _0x3dbe4c['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x14f913 = document['getElementById']('disconnect-overlay');
        if (!_0x14f913) {
            _0x14f913 = document['createElement']('div');
            _0x14f913['id'] = 'disconnect-overlay';
            _0x14f913['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x14f913['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x14f913);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x17bec9['onmessage'] = _0x345a53 => {
        const _0x62f5d5 = JSON['parse'](_0x345a53['data']);
        if (_0x62f5d5['type'] === 'map_data') {
            _0x5b5ada['MAP']['tileSize'] = _0x62f5d5['map']['tileSize'];
            _0x5b5ada['MAP']['columns'] = _0x62f5d5['map']['columns'];
            _0x5b5ada['MAP']['rows'] = _0x62f5d5['map']['rows'];
            _0x5b5ada['MAP']['layers'] = _0x62f5d5['map']['layers'];
            if (_0x62f5d5['map']['doors']) {
                _0x5b5ada['MAP']['doors'] = _0x62f5d5['map']['doors'];
                const _0x205321 = _0x5b5ada['MAP']['layers']['find'](_0x502536 => _0x502536['name'] === 'floor2');
                if (_0x205321) {
                    for (const _0x63492b in _0x5b5ada['MAP']['doors']) {
                        _0x205321['data'][parseInt(_0x63492b)] = 0x2;
                    }
                }
            }
            if (_0x62f5d5['entities'])
                _0x5b5ada['ENTITIES'] = _0x62f5d5['entities'];
            _0x1ae3f2();
            _0x5b5ada['SYSTEM']['isReady'] = !![];
            _0x198efa();
            if (!_0x5b5ada['SYSTEM']['_gameLoopRunning']) {
                _0x5b5ada['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x40d304);
            }
            return;
        }
        if (_0x62f5d5['type'] === 'init') {
            _0x52cb91 = _0x62f5d5['id'];
            _0x181d57 = ![];
            _0x382a4f();
            if (_0x352d80) {
                const _0x1323ff = document['getElementById']('leaderboard-list');
                const _0x4c254f = document['getElementById']('leaderboard-toggle');
                if (_0x1323ff) {
                    _0x1323ff['style']['display'] = 'none';
                    if (_0x4c254f)
                        _0x4c254f['style']['transform'] = 'rotate(180deg)';
                }
                const _0x36aee1 = document['getElementById']('role-list-items');
                const _0x29e5aa = document['getElementById']('role-list-toggle');
                if (_0x36aee1) {
                    _0x36aee1['style']['display'] = 'none';
                    if (_0x29e5aa)
                        _0x29e5aa['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x16d7ab = _0x62f5d5['isOwner'] || ![];
            _0x4c651f = _0x62f5d5['name'] || _0x4c651f;
            _0x5b5ada['MAP']['tileSize'] = _0x62f5d5['map']['tileSize'];
            _0x5b5ada['MAP']['columns'] = _0x62f5d5['map']['columns'];
            _0x5b5ada['MAP']['rows'] = _0x62f5d5['map']['rows'];
            _0x5b5ada['MAP']['layers'] = _0x62f5d5['map']['layers'];
            if (_0x62f5d5['map']['doors']) {
                _0x5b5ada['MAP']['doors'] = _0x62f5d5['map']['doors'];
                const _0xf13da3 = _0x5b5ada['MAP']['layers']['find'](_0x3fa8fe => _0x3fa8fe['name'] === 'floor2');
                if (_0xf13da3) {
                    for (const _0x9ca710 in _0x5b5ada['MAP']['doors']) {
                        _0xf13da3['data'][parseInt(_0x9ca710)] = 0x2;
                    }
                }
            }
            if (_0x62f5d5['entities'])
                _0x5b5ada['ENTITIES'] = _0x62f5d5['entities'];
            _0x1ae3f2();
            _0x4e1adb['x'] = _0x5b5ada['MAP']['columns'] * _0x5b5ada['MAP']['tileSize'] / 0x2;
            _0x4e1adb['y'] = _0x5b5ada['MAP']['rows'] * _0x5b5ada['MAP']['tileSize'] / 0x2;
            _0x5b5ada['CAMERA']['x'] = _0x4e1adb['x'] + _0x4e1adb['width'] / 0x2 - _0x5b5ada['CAMERA']['width'] / 0x2;
            _0x5b5ada['CAMERA']['y'] = _0x4e1adb['y'] + _0x4e1adb['height'] / 0x2 - _0x5b5ada['CAMERA']['height'] / 0x2;
            if (_0x16d7ab) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x138566();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x5b5ada['SYSTEM']['lastTime'] = performance['now']();
            _0x5b5ada['SYSTEM']['isReady'] = !![];
            _0x4c3210();
            if (!_0x5b5ada['SYSTEM']['_gameLoopRunning']) {
                _0x5b5ada['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x40d304);
            }
            return;
        } else if (_0x62f5d5['type'] === 'state') {
            const _0x507e4e = {};
            for (const _0x1f8cfc in _0x62f5d5['players']) {
                if (parseInt(_0x1f8cfc) === _0x52cb91)
                    continue;
                const _0x35cfe7 = _0x62f5d5['players'][_0x1f8cfc];
                const _0x3ec3fc = _0x3182c1[_0x1f8cfc];
                if (_0x3ec3fc) {
                    const _0x1e13b4 = _0x35cfe7['x'] - _0x3ec3fc['renderX'];
                    const _0x40f8db = _0x35cfe7['y'] - _0x3ec3fc['renderY'];
                    const _0xb0dba1 = _0x1e13b4 * _0x1e13b4 + _0x40f8db * _0x40f8db > 0x78 * 0x78;
                    Object['assign'](_0x3ec3fc, _0x35cfe7);
                    if (_0xb0dba1) {
                        _0x3ec3fc['renderX'] = _0x35cfe7['x'];
                        _0x3ec3fc['renderY'] = _0x35cfe7['y'];
                    }
                    _0x507e4e[_0x1f8cfc] = _0x3ec3fc;
                } else {
                    _0x507e4e[_0x1f8cfc] = {
                        ..._0x35cfe7,
                        'renderX': _0x35cfe7['x'],
                        'renderY': _0x35cfe7['y'],
                        'renderAngle': _0x35cfe7['angle'] || 0x0
                    };
                }
            }
            _0x3182c1 = _0x507e4e;
            if (_0x62f5d5['players'][_0x52cb91]) {
                const _0x54ded4 = _0x62f5d5['players'][_0x52cb91];
                _0x4e1adb['chats'] = _0x54ded4['chats'] || [];
                _0x4e1adb['isDead'] = _0x54ded4['isDead'];
                if (_0x54ded4['name'])
                    _0x4c651f = _0x54ded4['name'];
                _0x4c3210();
                const _0x1f9f42 = Math['hypot'](_0x54ded4['x'] - _0x4e1adb['x'], _0x54ded4['y'] - _0x4e1adb['y']);
                if (_0x1f9f42 > 0x32) {
                    _0x4e1adb['x'] += (_0x54ded4['x'] - _0x4e1adb['x']) * 0.35;
                    _0x4e1adb['y'] += (_0x54ded4['y'] - _0x4e1adb['y']) * 0.35;
                }
            }
            if (_0x62f5d5['entities'])
                _0x5b5ada['ENTITIES'] = _0x62f5d5['entities'];
            if (_0x62f5d5['game']) {
                _0x5b5ada['GAME_STATE'] = _0x62f5d5['game']['state'];
                _0x5b5ada['NIGHT_ABILITY_OPEN'] = _0x62f5d5['game']['nightAbilityOpen'];
                if (_0x62f5d5['game']['mayorRevealed']) {
                    for (const _0x275355 in _0x62f5d5['game']['mayorRevealed']) {
                        _0x49916f['add'](parseInt(_0x275355));
                    }
                }
                if (_0x5b5ada['LAST_STATE'] !== _0x5b5ada['GAME_STATE']) {
                    if (_0x5b5ada['GAME_STATE'] !== 'NIGHT') {
                        _0x5b5ada['CURRENT_TARGET'] = null;
                        _0x47a6e7 = null;
                        _0x2d39e5 = null;
                        _0x4b1f84 = null;
                        const _0x1e4406 = document['getElementById']('ability-ui');
                        if (_0x1e4406)
                            _0x1e4406['style']['display'] = 'none';
                    }
                    if (_0x5b5ada['GAME_STATE'] === 'NIGHT') {
                        _0x4e1adb['chats'] = [];
                        for (const _0x125f9e in _0x3182c1) {
                            _0x3182c1[_0x125f9e]['chats'] = [];
                        }
                    }
                    _0x5b5ada['LAST_STATE'] = _0x5b5ada['GAME_STATE'];
                    _0x58cb7f();
                    _0x303f6c['onStateChange'](_0x5b5ada['GAME_STATE'], _0x62f5d5['game']['nightAbilityOpen']);
                }
                const _0x28d3cf = document['getElementById']('phase-ui');
                if (_0x28d3cf) {
                    _0x28d3cf['style']['display'] = 'block';
                    let _0x3af47c = _0x62f5d5['game']['state']['replace']('_', '\x20');
                    if (_0x62f5d5['game']['state'] === 'DAY_DISCUSS') {
                        _0x3af47c = 'DAY\x20' + (_0x62f5d5['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x62f5d5['game']['timer'] + 's';
                    } else if (_0x62f5d5['game']['state'] === 'DAY_VOTE') {
                        _0x3af47c = 'DAY\x20' + (_0x62f5d5['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x62f5d5['game']['timer'] + 's';
                    } else if (_0x62f5d5['game']['state'] === 'NIGHT') {
                        const _0x5e9ea7 = _0x62f5d5['game']['dayCount'] || 0x1;
                        if (_0x62f5d5['game']['nightAbilityOpen']) {
                            _0x3af47c = 'NIGHT\x20' + _0x5e9ea7 + '\x20ABILITY\x20PHASE';
                            const _0x3d4c61 = _0x62f5d5['game']['abilityTimer'] !== undefined ? _0x62f5d5['game']['abilityTimer'] : _0x62f5d5['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x3d4c61 + 's';
                        } else {
                            _0x3af47c = 'NIGHT\x20' + _0x5e9ea7;
                            document['getElementById']('phase-timer')['innerText'] = _0x62f5d5['game']['timer'] + 's';
                        }
                    }
                    document['getElementById']('phase-name')['innerText'] = _0x3af47c;
                }
                if (_0x62f5d5['game']['state'] === 'NIGHT') {
                    const _0x5ed83d = document['getElementById']('ability-timer-label');
                    if (_0x5ed83d) {
                        const _0x2d694a = _0x62f5d5['game']['abilityTimer'] !== undefined ? _0x62f5d5['game']['abilityTimer'] : _0x62f5d5['game']['timer'];
                        _0x5ed83d['innerText'] = _0x62f5d5['game']['nightAbilityOpen'] ? _0x2d694a + 's' : '';
                    }
                    if (_0x62f5d5['game']['nightAbilityOpen'] && !_0x273f24 && !_0x4e1adb['isDead']) {
                        _0x273f24 = !![];
                        _0xf74723();
                        const _0x10a255 = document['getElementById']('ability-ui');
                        if (_0x10a255)
                            _0x10a255['style']['display'] = 'block';
                    }
                    if (!_0x62f5d5['game']['nightAbilityOpen']) {
                        const _0x1c6ec0 = document['getElementById']('ability-ui');
                        if (_0x1c6ec0 && _0x1c6ec0['style']['display'] === 'block') {
                            _0x1c6ec0['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x273f24 = ![];
                }
                _0x1fc2e1(_0x62f5d5['game']);
                if (_0x62f5d5['game']['roleListMode'] !== undefined) {
                    _0x5b5ada['ROLE_LIST_RAW'] = _0x62f5d5['game']['roleList'] || [];
                    _0x5c2105(_0x62f5d5['game']['roleList'], _0x62f5d5['game']['roleListMode']);
                }
            }
        } else if (_0x62f5d5['type'] === 'teleport') {
            _0x4e1adb['x'] = _0x62f5d5['x'];
            _0x4e1adb['y'] = _0x62f5d5['y'];
            _0x4e1adb['vx'] = 0x0;
            _0x4e1adb['vy'] = 0x0;
            _0x5b5ada['CAMERA']['x'] = null;
            if (_0x62f5d5['teleportId'] !== undefined)
                _0x599b84 = _0x62f5d5['teleportId'];
        } else if (_0x62f5d5['type'] === 'bulk_teleport') {
            for (const _0x328c15 in _0x62f5d5['positions']) {
                const _0xdb2af4 = _0x62f5d5['positions'][_0x328c15];
                if (parseInt(_0x328c15) === _0x52cb91) {
                    _0x4e1adb['x'] = _0xdb2af4['x'];
                    _0x4e1adb['y'] = _0xdb2af4['y'];
                    _0x4e1adb['vx'] = 0x0;
                    _0x4e1adb['vy'] = 0x0;
                    _0x5b5ada['CAMERA']['x'] = null;
                    continue;
                }
                const _0x5a4a64 = _0x3182c1[_0x328c15];
                if (_0x5a4a64) {
                    _0x5a4a64['x'] = _0xdb2af4['x'];
                    _0x5a4a64['y'] = _0xdb2af4['y'];
                    _0x5a4a64['renderX'] = _0xdb2af4['x'];
                    _0x5a4a64['renderY'] = _0xdb2af4['y'];
                    _0x5a4a64['vx'] = 0x0;
                    _0x5a4a64['vy'] = 0x0;
                }
            }
        } else if (_0x62f5d5['type'] === 'player_left') {
            delete _0x3182c1[_0x62f5d5['id']];
            _0x49916f['delete'](parseInt(_0x62f5d5['id']));
        } else if (_0x62f5d5['type'] === 'map_update') {
            const _0x16a8b3 = _0x5b5ada['MAP']['layers']['find'](_0x417d97 => _0x417d97['name'] === _0x62f5d5['layer']);
            if (_0x16a8b3) {
                _0x16a8b3['data'][_0x62f5d5['row'] * _0x5b5ada['MAP']['columns'] + _0x62f5d5['col']] = _0x62f5d5['gid'];
                const _0x165dcc = _0x62f5d5['row'] * _0x5b5ada['MAP']['columns'] + _0x62f5d5['col'];
                if (_0x5b5ada['MAP']['doors'] && _0x5b5ada['MAP']['doors'][_0x165dcc]) {
                    const _0x3ea6cb = _0x5b5ada['MAP']['layers']['find'](_0x140422 => _0x140422['name'] === 'floor2');
                    if (_0x3ea6cb)
                        _0x3ea6cb['data'][_0x165dcc] = 0x2;
                }
                const _0x4e908 = Math['floor'](_0x62f5d5['col'] * _0x5b5ada['MAP']['tileSize'] / _0x5b5ada['MAP']['chunkSize']);
                const _0xa008d4 = Math['floor'](_0x62f5d5['row'] * _0x5b5ada['MAP']['tileSize'] / _0x5b5ada['MAP']['chunkSize']);
                _0x3e330e(_0x4e908, _0xa008d4);
            }
        } else if (_0x62f5d5['type'] === 'role_assign') {
            _0xb09f85 = _0x62f5d5['role'];
            _0x4e1adb['isDead'] = _0xb09f85 === 'Spectator';
            _0x49916f['clear']();
            _0x5b5ada['CURRENT_TARGET'] = null;
            _0x47a6e7 = null;
            _0x2d39e5 = null;
            _0x4b1f84 = null;
            _0x273f24 = ![];
            const _0x11cb15 = document['getElementById']('ability-ui');
            if (_0x11cb15)
                _0x11cb15['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0xb09f85;
            _0x58cb7f();
            _0x4ae8d5(_0xb09f85 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0xb09f85, !![]);
            let _0x13533e = '';
            if (_0xb09f85 === 'Investigator')
                _0x13533e = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0xb09f85 === 'Tracker')
                _0x13533e = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0xb09f85 === 'Doctor')
                _0x13533e = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0xb09f85 === 'Archer')
                _0x13533e = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0xb09f85 === 'Escort')
                _0x13533e = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0xb09f85 === 'Vigilante')
                _0x13533e = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0xb09f85 === 'Skinwalker')
                _0x13533e = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0xb09f85 === 'Celebrity')
                _0x13533e = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0xb09f85 === 'Mayor')
                _0x13533e = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x4ae8d5(_0x13533e, !![]);
        } else if (_0x62f5d5['type'] === 'mayor_reveal') {
            _0x49916f['add'](parseInt(_0x62f5d5['playerId']));
            _0x4c3210();
            _0x58cb7f();
        } else if (_0x62f5d5['type'] === 'rolelist_update') {
            _0x5b5ada['ROLE_LIST_RAW'] = _0x62f5d5['list'] || [];
            _0x5c2105(_0x62f5d5['list'], _0x62f5d5['mode']);
        } else if (_0x62f5d5['type'] === 'sound_event') {
            _0x303f6c['onSoundEvent'](_0x62f5d5['track']);
        } else if (_0x62f5d5['type'] === 'game_over') {
            _0x303f6c['onStateChange']('LOBBY', ![]);
            _0x5c2105([], 'off');
            _0xb09f85 = null;
            _0x4e1adb['isDead'] = ![];
            _0x49916f['clear']();
            _0x5b5ada['CURRENT_TARGET'] = null;
            _0x47a6e7 = null;
            _0x2d39e5 = null;
            _0x4b1f84 = null;
            _0x273f24 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x58cb7f();
            _0x4ae8d5('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x62f5d5['type'] === 'chat_log') {
            _0x4ae8d5(_0x62f5d5['sender'] + ':\x20' + _0x62f5d5['text']);
        } else if (_0x62f5d5['type'] === 'sys_chat') {
            _0x4ae8d5(_0x62f5d5['text'], !![]);
        }
    };
}
function _0x4ae8d5(_0x10c821, _0x2d9fa7 = ![]) {
    const _0x1f80d9 = document['getElementById']('chat-log-messages');
    const _0x2c3c7f = document['getElementById']('chat-log-ui');
    const _0x2e8d81 = _0x2c3c7f['scrollHeight'] - _0x2c3c7f['scrollTop'] - _0x2c3c7f['clientHeight'] < 0x1e;
    const _0x4ec81c = document['createElement']('div');
    _0x4ec81c['className'] = 'chat-log-line' + (_0x2d9fa7 ? '\x20sys-msg' : '');
    _0x4ec81c['innerText'] = _0x10c821;
    _0x1f80d9['appendChild'](_0x4ec81c);
    if (_0x2e8d81) {
        _0x2c3c7f['scrollTop'] = _0x2c3c7f['scrollHeight'];
    }
    if (_0x1f80d9['childElementCount'] > 0xc8) {
        _0x1f80d9['removeChild'](_0x1f80d9['firstChild']);
    }
}
let _0x45171c = -0x1, _0x5b38dc = -0x1, _0x917fff = -0x1, _0x5e872c = 0x0;
function _0x112a11() {
    if (!_0x52cb91 || !_0x17bec9 || _0x17bec9['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x4bb6b5 = performance['now']();
    const _0x348fed = _0x4bb6b5 - _0x5e872c;
    const _0x343917 = Math['abs'](_0x4e1adb['x'] - _0x45171c) > 0.05 || Math['abs'](_0x4e1adb['y'] - _0x5b38dc) > 0.05 || Math['abs'](_0x4e1adb['angle'] - _0x917fff) > 0.02;
    if (!_0x343917 && _0x348fed < 0xc8)
        return;
    if (_0x348fed < 0x19)
        return;
    _0x5e872c = _0x4bb6b5;
    _0x45171c = _0x4e1adb['x'];
    _0x5b38dc = _0x4e1adb['y'];
    _0x917fff = _0x4e1adb['angle'];
    if (!_0x52cb91 || !_0x17bec9 || _0x17bec9['readyState'] !== WebSocket['OPEN'])
        return;
    _0x17bec9['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x4e1adb['x'],
        'y': _0x4e1adb['y'],
        'vx': _0x4e1adb['vx'],
        'vy': _0x4e1adb['vy'],
        'angle': _0x4e1adb['angle'],
        'scale': _0x4e1adb['scale'],
        'teleportId': _0x599b84
    }));
}
function _0x2f54b0() {
    if (_0x4e1adb['isDead'])
        return;
    const _0xe84611 = _0x5b5ada['MAP']['layers']['find'](_0x328950 => _0x328950['name'] === 'walls');
    if (!_0xe84611)
        return;
    const _0x4f56c2 = _0x4e1adb['scale'];
    const _0x34488f = _0x4e1adb['width'] * _0x4f56c2 / 0x2;
    for (let _0x55a589 = 0x0; _0x55a589 < 0x3; _0x55a589++) {
        let _0x1b725a = _0x4e1adb['x'] + _0x4e1adb['width'] / 0x2;
        let _0x1bc22e = _0x4e1adb['y'] + _0x4e1adb['height'] / 0x2;
        const _0x322c05 = Math['floor']((_0x1b725a - _0x34488f) / _0x5b5ada['MAP']['tileSize']);
        const _0x110afb = Math['floor']((_0x1b725a + _0x34488f) / _0x5b5ada['MAP']['tileSize']);
        const _0x3bb929 = Math['floor']((_0x1bc22e - _0x34488f) / _0x5b5ada['MAP']['tileSize']);
        const _0xa2c726 = Math['floor']((_0x1bc22e + _0x34488f) / _0x5b5ada['MAP']['tileSize']);
        for (let _0x5a58ee = _0x3bb929; _0x5a58ee <= _0xa2c726; _0x5a58ee++) {
            for (let _0x1dab7b = _0x322c05; _0x1dab7b <= _0x110afb; _0x1dab7b++) {
                if (_0x1dab7b < 0x0 || _0x1dab7b >= _0x5b5ada['MAP']['columns'] || _0x5a58ee < 0x0 || _0x5a58ee >= _0x5b5ada['MAP']['rows'])
                    continue;
                if (_0xe84611['data'][_0x5a58ee * _0x5b5ada['MAP']['columns'] + _0x1dab7b] === 0x0)
                    continue;
                const _0x10de1f = _0x1dab7b * _0x5b5ada['MAP']['tileSize'];
                const _0x4dc2b1 = _0x5a58ee * _0x5b5ada['MAP']['tileSize'];
                const _0x1d8f1e = _0x1b725a < _0x10de1f ? _0x10de1f : _0x1b725a > _0x10de1f + _0x5b5ada['MAP']['tileSize'] ? _0x10de1f + _0x5b5ada['MAP']['tileSize'] : _0x1b725a;
                const _0x64ea38 = _0x1bc22e < _0x4dc2b1 ? _0x4dc2b1 : _0x1bc22e > _0x4dc2b1 + _0x5b5ada['MAP']['tileSize'] ? _0x4dc2b1 + _0x5b5ada['MAP']['tileSize'] : _0x1bc22e;
                const _0x4c84d3 = _0x1b725a - _0x1d8f1e;
                const _0x1a20b0 = _0x1bc22e - _0x64ea38;
                const _0x2b4f0a = Math['sqrt'](_0x4c84d3 * _0x4c84d3 + _0x1a20b0 * _0x1a20b0);
                if (_0x2b4f0a < _0x34488f) {
                    if (_0x2b4f0a === 0x0) {
                        const _0x4b131b = _0x1b725a - _0x10de1f;
                        const _0x5a5904 = _0x10de1f + _0x5b5ada['MAP']['tileSize'] - _0x1b725a;
                        const _0x3b40ef = _0x1bc22e - _0x4dc2b1;
                        const _0x19d724 = _0x4dc2b1 + _0x5b5ada['MAP']['tileSize'] - _0x1bc22e;
                        const _0x3d95f9 = Math['min'](_0x4b131b, _0x5a5904, _0x3b40ef, _0x19d724);
                        if (_0x3d95f9 === _0x4b131b)
                            _0x1b725a = _0x10de1f - _0x34488f;
                        else if (_0x3d95f9 === _0x5a5904)
                            _0x1b725a = _0x10de1f + _0x5b5ada['MAP']['tileSize'] + _0x34488f;
                        else if (_0x3d95f9 === _0x3b40ef)
                            _0x1bc22e = _0x4dc2b1 - _0x34488f;
                        else
                            _0x1bc22e = _0x4dc2b1 + _0x5b5ada['MAP']['tileSize'] + _0x34488f;
                    } else {
                        const _0x565b56 = _0x34488f - _0x2b4f0a;
                        _0x1b725a += _0x4c84d3 / _0x2b4f0a * _0x565b56;
                        _0x1bc22e += _0x1a20b0 / _0x2b4f0a * _0x565b56;
                        const _0x501723 = _0x4e1adb['vx'] * (_0x4c84d3 / _0x2b4f0a) + _0x4e1adb['vy'] * (_0x1a20b0 / _0x2b4f0a);
                        if (_0x501723 < 0x0) {
                            _0x4e1adb['vx'] -= _0x501723 * (_0x4c84d3 / _0x2b4f0a);
                            _0x4e1adb['vy'] -= _0x501723 * (_0x1a20b0 / _0x2b4f0a);
                        }
                    }
                }
            }
        }
        _0x4e1adb['x'] = _0x1b725a - _0x4e1adb['width'] / 0x2;
        _0x4e1adb['y'] = _0x1bc22e - _0x4e1adb['height'] / 0x2;
    }
}
function _0x1181bc(_0x489b38) {
    const _0x434399 = _0x5b5ada['MAP']['layers']['find'](_0x3fa5e4 => _0x3fa5e4['name'] === 'walls');
    if (!_0x434399)
        return;
    const _0xf4e349 = _0x489b38['width'] / 0x2;
    for (let _0x21d9f5 = 0x0; _0x21d9f5 < 0x2; _0x21d9f5++) {
        let _0x21419 = _0x489b38['x'] + _0x489b38['width'] / 0x2;
        let _0x4ee4e5 = _0x489b38['y'] + _0x489b38['height'] / 0x2;
        const _0x25838c = Math['floor']((_0x21419 - _0xf4e349) / _0x5b5ada['MAP']['tileSize']);
        const _0x54b097 = Math['floor']((_0x21419 + _0xf4e349) / _0x5b5ada['MAP']['tileSize']);
        const _0x14cd93 = Math['floor']((_0x4ee4e5 - _0xf4e349) / _0x5b5ada['MAP']['tileSize']);
        const _0x4cfe54 = Math['floor']((_0x4ee4e5 + _0xf4e349) / _0x5b5ada['MAP']['tileSize']);
        for (let _0x4e6be6 = _0x14cd93; _0x4e6be6 <= _0x4cfe54; _0x4e6be6++) {
            for (let _0x1aca23 = _0x25838c; _0x1aca23 <= _0x54b097; _0x1aca23++) {
                if (_0x1aca23 < 0x0 || _0x1aca23 >= _0x5b5ada['MAP']['columns'] || _0x4e6be6 < 0x0 || _0x4e6be6 >= _0x5b5ada['MAP']['rows'])
                    continue;
                if (_0x434399['data'][_0x4e6be6 * _0x5b5ada['MAP']['columns'] + _0x1aca23] === 0x0)
                    continue;
                const _0x25bf69 = _0x1aca23 * _0x5b5ada['MAP']['tileSize'];
                const _0x24f457 = _0x4e6be6 * _0x5b5ada['MAP']['tileSize'];
                const _0x96e34a = _0x21419 < _0x25bf69 ? _0x25bf69 : _0x21419 > _0x25bf69 + _0x5b5ada['MAP']['tileSize'] ? _0x25bf69 + _0x5b5ada['MAP']['tileSize'] : _0x21419;
                const _0x34b526 = _0x4ee4e5 < _0x24f457 ? _0x24f457 : _0x4ee4e5 > _0x24f457 + _0x5b5ada['MAP']['tileSize'] ? _0x24f457 + _0x5b5ada['MAP']['tileSize'] : _0x4ee4e5;
                const _0x16a450 = _0x21419 - _0x96e34a;
                const _0x4081f9 = _0x4ee4e5 - _0x34b526;
                const _0x5d8424 = Math['sqrt'](_0x16a450 * _0x16a450 + _0x4081f9 * _0x4081f9);
                if (_0x5d8424 < _0xf4e349) {
                    if (_0x5d8424 === 0x0) {
                        const _0x13ad96 = _0x21419 - _0x25bf69;
                        const _0x615c0e = _0x25bf69 + _0x5b5ada['MAP']['tileSize'] - _0x21419;
                        const _0x1d2da3 = _0x4ee4e5 - _0x24f457;
                        const _0x4319e5 = _0x24f457 + _0x5b5ada['MAP']['tileSize'] - _0x4ee4e5;
                        const _0x7cef61 = Math['min'](_0x13ad96, _0x615c0e, _0x1d2da3, _0x4319e5);
                        if (_0x7cef61 === _0x13ad96)
                            _0x21419 = _0x25bf69 - _0xf4e349;
                        else if (_0x7cef61 === _0x615c0e)
                            _0x21419 = _0x25bf69 + _0x5b5ada['MAP']['tileSize'] + _0xf4e349;
                        else if (_0x7cef61 === _0x1d2da3)
                            _0x4ee4e5 = _0x24f457 - _0xf4e349;
                        else
                            _0x4ee4e5 = _0x24f457 + _0x5b5ada['MAP']['tileSize'] + _0xf4e349;
                    } else {
                        const _0x1f6f05 = _0xf4e349 - _0x5d8424;
                        _0x21419 += _0x16a450 / _0x5d8424 * _0x1f6f05;
                        _0x4ee4e5 += _0x4081f9 / _0x5d8424 * _0x1f6f05;
                    }
                }
            }
        }
        _0x489b38['x'] = _0x21419 - _0x489b38['width'] / 0x2;
        _0x489b38['y'] = _0x4ee4e5 - _0x489b38['height'] / 0x2;
    }
}
function _0x149886(_0x5a466f) {
    const _0x2df0e9 = _0x5a466f['width'] / 0x2;
    for (let _0x33175e = 0x0; _0x33175e < 0x2; _0x33175e++) {
        let _0x444ff1 = _0x5a466f['x'] + _0x5a466f['width'] / 0x2;
        let _0x2183c6 = _0x5a466f['y'] + _0x5a466f['height'] / 0x2;
        for (const _0x3e6e4e of _0x5b5ada['ENTITIES']) {
            const _0x22a190 = _0x444ff1 < _0x3e6e4e['x'] ? _0x3e6e4e['x'] : _0x444ff1 > _0x3e6e4e['x'] + _0x3e6e4e['w'] ? _0x3e6e4e['x'] + _0x3e6e4e['w'] : _0x444ff1;
            const _0x559b8b = _0x2183c6 < _0x3e6e4e['y'] ? _0x3e6e4e['y'] : _0x2183c6 > _0x3e6e4e['y'] + _0x3e6e4e['h'] ? _0x3e6e4e['y'] + _0x3e6e4e['h'] : _0x2183c6;
            const _0x481e77 = _0x444ff1 - _0x22a190;
            const _0xb58301 = _0x2183c6 - _0x559b8b;
            const _0x44e7f8 = Math['sqrt'](_0x481e77 * _0x481e77 + _0xb58301 * _0xb58301);
            if (_0x44e7f8 < _0x2df0e9 && _0x44e7f8 > 0x0) {
                const _0x48d93f = _0x2df0e9 - _0x44e7f8;
                const _0x20c630 = _0x481e77 / _0x44e7f8;
                const _0x2b229f = _0xb58301 / _0x44e7f8;
                _0x444ff1 += _0x20c630 * _0x48d93f;
                _0x2183c6 += _0x2b229f * _0x48d93f;
            } else if (_0x44e7f8 === 0x0) {
                const _0x2ec0bc = _0x444ff1 - _0x3e6e4e['x'];
                const _0x1a33b8 = _0x3e6e4e['x'] + _0x3e6e4e['w'] - _0x444ff1;
                const _0x4abfd7 = _0x2183c6 - _0x3e6e4e['y'];
                const _0x3e066d = _0x3e6e4e['y'] + _0x3e6e4e['h'] - _0x2183c6;
                const _0x405ff6 = Math['min'](_0x2ec0bc, _0x1a33b8, _0x4abfd7, _0x3e066d);
                if (_0x405ff6 === _0x2ec0bc)
                    _0x444ff1 = _0x3e6e4e['x'] - _0x2df0e9;
                else if (_0x405ff6 === _0x1a33b8)
                    _0x444ff1 = _0x3e6e4e['x'] + _0x3e6e4e['w'] + _0x2df0e9;
                else if (_0x405ff6 === _0x4abfd7)
                    _0x2183c6 = _0x3e6e4e['y'] - _0x2df0e9;
                else
                    _0x2183c6 = _0x3e6e4e['y'] + _0x3e6e4e['h'] + _0x2df0e9;
            }
        }
        _0x5a466f['x'] = _0x444ff1 - _0x5a466f['width'] / 0x2;
        _0x5a466f['y'] = _0x2183c6 - _0x5a466f['height'] / 0x2;
    }
}
function _0x40bfbe() {
    if (_0x4e1adb['isDead'])
        return;
    const _0x51d0cd = _0x4e1adb['width'] / 0x2;
    const _0xae40b = _0x4e1adb['x'] + _0x4e1adb['width'] / 0x2;
    const _0x508bca = _0x4e1adb['y'] + _0x4e1adb['height'] / 0x2;
    for (const _0x1632f6 in _0x3182c1) {
        const _0x3ab30c = _0x3182c1[_0x1632f6];
        if (_0x3ab30c['isDead'])
            continue;
        const _0x46a335 = _0x3ab30c['width'] / 0x2;
        const _0xb18f14 = _0x51d0cd + _0x46a335;
        const _0x284d1a = (_0x3ab30c['renderX'] ?? _0x3ab30c['x']) + _0x3ab30c['width'] / 0x2;
        const _0x3fb6c1 = (_0x3ab30c['renderY'] ?? _0x3ab30c['y']) + _0x3ab30c['height'] / 0x2;
        const _0x1904c8 = _0xae40b - _0x284d1a;
        const _0x198bb8 = _0x508bca - _0x3fb6c1;
        const _0x583a44 = Math['sqrt'](_0x1904c8 * _0x1904c8 + _0x198bb8 * _0x198bb8);
        if (_0x583a44 > 0x0 && _0x583a44 < _0xb18f14) {
            const _0x3d168c = _0xb18f14 - _0x583a44;
            const _0x2a733c = _0x1904c8 / _0x583a44;
            const _0x1bb7e5 = _0x198bb8 / _0x583a44;
            _0x4e1adb['x'] += _0x2a733c * (_0x3d168c * 0.25);
            _0x4e1adb['y'] += _0x1bb7e5 * (_0x3d168c * 0.25);
            _0x3ab30c['x'] -= _0x2a733c * (_0x3d168c * 0.75);
            _0x3ab30c['y'] -= _0x1bb7e5 * (_0x3d168c * 0.75);
            _0x1181bc(_0x3ab30c);
            _0x149886(_0x3ab30c);
            if (_0x3ab30c['renderX'] !== undefined) {
                _0x3ab30c['renderX'] = _0x3ab30c['x'];
                _0x3ab30c['renderY'] = _0x3ab30c['y'];
            }
            const _0x23bd63 = _0x4e1adb['vx'] * _0x2a733c + _0x4e1adb['vy'] * _0x1bb7e5;
            if (_0x23bd63 < 0x0) {
                _0x4e1adb['vx'] -= _0x23bd63 * _0x2a733c * 0.25;
                _0x4e1adb['vy'] -= _0x23bd63 * _0x1bb7e5 * 0.25;
            }
        }
    }
    _0x2f54b0();
    _0x3980fb();
}
function _0x3980fb() {
    if (_0x4e1adb['isDead'])
        return;
    const _0x5eab81 = _0x4e1adb['scale'];
    const _0x3998c1 = _0x4e1adb['width'] * _0x5eab81 / 0x2;
    for (let _0x2eaec0 = 0x0; _0x2eaec0 < 0x2; _0x2eaec0++) {
        let _0x4cfa3c = _0x4e1adb['x'] + _0x4e1adb['width'] / 0x2;
        let _0x5e79b1 = _0x4e1adb['y'] + _0x4e1adb['height'] / 0x2;
        for (const _0x57a451 of _0x5b5ada['ENTITIES']) {
            const _0x4a0f16 = _0x4cfa3c < _0x57a451['x'] ? _0x57a451['x'] : _0x4cfa3c > _0x57a451['x'] + _0x57a451['w'] ? _0x57a451['x'] + _0x57a451['w'] : _0x4cfa3c;
            const _0x370e39 = _0x5e79b1 < _0x57a451['y'] ? _0x57a451['y'] : _0x5e79b1 > _0x57a451['y'] + _0x57a451['h'] ? _0x57a451['y'] + _0x57a451['h'] : _0x5e79b1;
            const _0x5945c1 = _0x4cfa3c - _0x4a0f16;
            const _0x392bc3 = _0x5e79b1 - _0x370e39;
            const _0x58e054 = Math['sqrt'](_0x5945c1 * _0x5945c1 + _0x392bc3 * _0x392bc3);
            if (_0x58e054 < _0x3998c1 && _0x58e054 > 0x0) {
                const _0x225a1d = _0x3998c1 - _0x58e054;
                const _0x331d2c = _0x5945c1 / _0x58e054;
                const _0x31605c = _0x392bc3 / _0x58e054;
                _0x4cfa3c += _0x331d2c * _0x225a1d;
                _0x5e79b1 += _0x31605c * _0x225a1d;
                const _0x759f84 = _0x4e1adb['vx'] * _0x331d2c + _0x4e1adb['vy'] * _0x31605c;
                if (_0x759f84 < 0x0) {
                    _0x4e1adb['vx'] -= _0x759f84 * _0x331d2c;
                    _0x4e1adb['vy'] -= _0x759f84 * _0x31605c;
                }
            } else if (_0x58e054 === 0x0) {
                const _0x488848 = _0x4cfa3c - _0x57a451['x'];
                const _0x58ef53 = _0x57a451['x'] + _0x57a451['w'] - _0x4cfa3c;
                const _0x2c8c38 = _0x5e79b1 - _0x57a451['y'];
                const _0x31a658 = _0x57a451['y'] + _0x57a451['h'] - _0x5e79b1;
                const _0x31f47b = Math['min'](_0x488848, _0x58ef53, _0x2c8c38, _0x31a658);
                if (_0x31f47b === _0x488848)
                    _0x4cfa3c = _0x57a451['x'] - _0x3998c1;
                else if (_0x31f47b === _0x58ef53)
                    _0x4cfa3c = _0x57a451['x'] + _0x57a451['w'] + _0x3998c1;
                else if (_0x31f47b === _0x2c8c38)
                    _0x5e79b1 = _0x57a451['y'] - _0x3998c1;
                else
                    _0x5e79b1 = _0x57a451['y'] + _0x57a451['h'] + _0x3998c1;
            }
        }
        _0x4e1adb['x'] = _0x4cfa3c - _0x4e1adb['width'] / 0x2;
        _0x4e1adb['y'] = _0x5e79b1 - _0x4e1adb['height'] / 0x2;
    }
}
function _0x4b3abe(_0x451fa9, _0x26c3c6) {
    const _0x58720f = _0x5b5ada['MAP']['layers']['find'](_0x5222a0 => _0x5222a0['name'] === 'trees');
    if (!_0x58720f)
        return ![];
    const _0x550227 = Math['floor'](_0x451fa9 / _0x5b5ada['MAP']['tileSize']);
    const _0x2bf618 = Math['floor'](_0x26c3c6 / _0x5b5ada['MAP']['tileSize']);
    if (_0x550227 < 0x0 || _0x550227 >= _0x5b5ada['MAP']['columns'] || _0x2bf618 < 0x0 || _0x2bf618 >= _0x5b5ada['MAP']['rows'])
        return ![];
    return _0x58720f['data'][_0x2bf618 * _0x5b5ada['MAP']['columns'] + _0x550227] === 0xb;
}
let _0x54d4e4 = null;
function _0x4e82e9() {
    const _0x50f663 = _0x5b5ada['MAP'];
    const _0x1bbc6b = _0x50f663['layers']['find'](_0x17fe54 => _0x17fe54['name'] === 'floor2');
    const _0x5023d4 = _0x50f663['layers']['find'](_0xeaf2a3 => _0xeaf2a3['name'] === 'walls');
    if (!_0x1bbc6b || !_0x5023d4) {
        _0x54d4e4 = null;
        return;
    }
    const _0x4c3b47 = _0x50f663['columns'];
    const _0x1e9a4e = _0x50f663['rows'];
    const _0x2dd0c0 = [];
    const _0x26eacd = [];
    const _0x454eef = new Set();
    for (let _0x28b4b5 = 0x0; _0x28b4b5 < _0x1e9a4e; _0x28b4b5++) {
        for (let _0x1626d9 = 0x0; _0x1626d9 < _0x4c3b47; _0x1626d9++) {
            const _0x18e38d = _0x28b4b5 * _0x4c3b47 + _0x1626d9;
            const _0x39a136 = _0x1bbc6b['data'][_0x18e38d];
            const _0x267e33 = _0x5023d4['data'][_0x18e38d];
            if (_0x39a136 === 0x2 || _0x39a136 === 0x4) {
                _0x2dd0c0['push']({
                    'c': _0x1626d9,
                    'r': _0x28b4b5
                });
                if (_0x267e33 !== 0x0)
                    _0x26eacd['push']({
                        'c': _0x1626d9,
                        'r': _0x28b4b5
                    });
            }
            if (_0x267e33 !== 0x0)
                _0x454eef['add'](_0x1626d9 + ',' + _0x28b4b5);
        }
    }
    const _0x5782a8 = new Set(_0x2dd0c0['map'](_0x488a9f => _0x488a9f['c'] + ',' + _0x488a9f['r']));
    const _0x2a2bc6 = [
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
                c: _0x5984ab,
                r: _0x27f7ef
            } of _0x2dd0c0) {
        for (const [_0x5136fa, _0x19d368] of _0x2a2bc6) {
            const _0x307671 = _0x5984ab + _0x5136fa, _0x47b073 = _0x27f7ef + _0x19d368;
            const _0x421358 = _0x307671 + ',' + _0x47b073;
            if (!_0x5782a8['has'](_0x421358))
                _0x454eef['add'](_0x421358);
        }
    }
    _0x54d4e4 = {
        'wallSet': _0x454eef,
        'floorTiles': _0x2dd0c0,
        'wallTiles': _0x26eacd,
        'interiorSet': _0x5782a8
    };
}
function _0x249ea1() {
    const _0x2a41e2 = _0x5b5ada['MAP']['layers']['find'](_0x720d7 => _0x720d7['name'] === 'floor2');
    if (!_0x2a41e2)
        return ![];
    const _0x56f813 = Math['floor']((_0x4e1adb['x'] + _0x4e1adb['width'] / 0x2) / _0x5b5ada['MAP']['tileSize']);
    const _0x3c6d0a = Math['floor']((_0x4e1adb['y'] + _0x4e1adb['height'] / 0x2) / _0x5b5ada['MAP']['tileSize']);
    if (_0x56f813 < 0x0 || _0x56f813 >= _0x5b5ada['MAP']['columns'] || _0x3c6d0a < 0x0 || _0x3c6d0a >= _0x5b5ada['MAP']['rows'])
        return ![];
    const _0x33fb11 = _0x2a41e2['data'][_0x3c6d0a * _0x5b5ada['MAP']['columns'] + _0x56f813];
    return _0x33fb11 === 0x2;
}
function _0x65a256() {
    if (_0x4e1adb['isDead']) {
        _0x5b5ada['SHADOW']['polygon'] = null;
        return;
    }
    const _0x16985e = _0x5b5ada['MAP'];
    const _0x4deeed = _0x5b5ada['SHADOW'];
    const _0x4a3a12 = _0x16985e['tileSize'];
    if (!_0x54d4e4)
        _0x4e82e9();
    if (!_0x54d4e4) {
        _0x4deeed['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x53bd9e,
        floorTiles: _0x2fae2f
    } = _0x54d4e4;
    if (_0x2fae2f['length'] === 0x0) {
        _0x4deeed['polygon'] = null;
        return;
    }
    if (!_0x249ea1()) {
        _0x4deeed['polygon'] = null;
        return;
    }
    const _0x2352a5 = _0x4e1adb['x'] + _0x4e1adb['width'] / 0x2;
    const _0x4acd59 = _0x4e1adb['y'] + _0x4e1adb['height'] / 0x2;
    if (!_0x54d4e4['_bounds']) {
        let _0x297ab2 = Infinity, _0x223c83 = -Infinity, _0x4d36b4 = Infinity, _0x2a25fc = -Infinity;
        for (const {
                    c: _0x2a99df,
                    r: _0x495a5b
                } of _0x2fae2f) {
            if (_0x2a99df < _0x297ab2)
                _0x297ab2 = _0x2a99df;
            if (_0x2a99df > _0x223c83)
                _0x223c83 = _0x2a99df;
            if (_0x495a5b < _0x4d36b4)
                _0x4d36b4 = _0x495a5b;
            if (_0x495a5b > _0x2a25fc)
                _0x2a25fc = _0x495a5b;
        }
        _0x54d4e4['_bounds'] = {
            'minC': Math['max'](0x0, _0x297ab2 - 0x1),
            'maxC': Math['min'](_0x16985e['columns'] - 0x1, _0x223c83 + 0x1),
            'minR': Math['max'](0x0, _0x4d36b4 - 0x1),
            'maxR': Math['min'](_0x16985e['rows'] - 0x1, _0x2a25fc + 0x1)
        };
        const _0x13c3a8 = [];
        for (let _0x34d4ac = _0x54d4e4['_bounds']['minR']; _0x34d4ac <= _0x54d4e4['_bounds']['maxR']; _0x34d4ac++) {
            for (let _0x1c7578 = _0x54d4e4['_bounds']['minC']; _0x1c7578 <= _0x54d4e4['_bounds']['maxC']; _0x1c7578++) {
                if (_0x53bd9e['has'](_0x1c7578 + ',' + _0x34d4ac))
                    _0x13c3a8['push'](_0x1c7578, _0x34d4ac);
            }
        }
        _0x54d4e4['_wallArr'] = _0x13c3a8;
    }
    const {
        minC: _0x302ddc,
        maxC: _0x1ed647,
        minR: _0x3d86a5,
        maxR: _0x57e18d
    } = _0x54d4e4['_bounds'];
    const _0x5756ef = _0x54d4e4['_wallArr'];
    const _0x540a1a = 0.0001;
    const _0x1d1265 = new Set();
    const _0x5637a7 = [];
    for (let _0x3ef3a8 = 0x0; _0x3ef3a8 < _0x5756ef['length']; _0x3ef3a8 += 0x2) {
        const _0x492f03 = _0x5756ef[_0x3ef3a8], _0xd301df = _0x5756ef[_0x3ef3a8 + 0x1];
        const _0x1e1fed = [
            _0x492f03 * _0x4a3a12,
            _0xd301df * _0x4a3a12,
            _0x492f03 * _0x4a3a12 + _0x4a3a12,
            _0xd301df * _0x4a3a12,
            _0x492f03 * _0x4a3a12,
            _0xd301df * _0x4a3a12 + _0x4a3a12,
            _0x492f03 * _0x4a3a12 + _0x4a3a12,
            _0xd301df * _0x4a3a12 + _0x4a3a12
        ];
        for (let _0x4d9112 = 0x0; _0x4d9112 < _0x1e1fed['length']; _0x4d9112 += 0x2) {
            const _0x43a15f = _0x1e1fed[_0x4d9112], _0x59ec01 = _0x1e1fed[_0x4d9112 + 0x1];
            const _0x494216 = Math['atan2'](_0x59ec01 - _0x4acd59, _0x43a15f - _0x2352a5);
            const _0x5a5697 = Math['round'](_0x494216 * 0x4e20);
            if (!_0x1d1265['has'](_0x5a5697 - 0x1)) {
                _0x1d1265['add'](_0x5a5697 - 0x1);
                _0x5637a7['push'](_0x494216 - _0x540a1a);
            }
            if (!_0x1d1265['has'](_0x5a5697)) {
                _0x1d1265['add'](_0x5a5697);
                _0x5637a7['push'](_0x494216);
            }
            if (!_0x1d1265['has'](_0x5a5697 + 0x1)) {
                _0x1d1265['add'](_0x5a5697 + 0x1);
                _0x5637a7['push'](_0x494216 + _0x540a1a);
            }
        }
    }
    _0x5637a7['sort']((_0x4be80c, _0x1fa931) => _0x4be80c - _0x1fa931);
    const _0x5beaa7 = Math['hypot']((_0x1ed647 - _0x302ddc + 0x2) * _0x4a3a12, (_0x57e18d - _0x3d86a5 + 0x2) * _0x4a3a12);
    const _0x383b83 = _0x189585 => {
        const _0x156d1a = Math['cos'](_0x189585);
        const _0x44bd1a = Math['sin'](_0x189585);
        let _0x5cadc9 = _0x5beaa7;
        for (let _0x2a88b3 = 0x0; _0x2a88b3 < _0x5756ef['length']; _0x2a88b3 += 0x2) {
            const _0x568d49 = _0x5756ef[_0x2a88b3], _0x4e53cf = _0x5756ef[_0x2a88b3 + 0x1];
            const _0x373c93 = _0x568d49 * _0x4a3a12, _0x5dfa1e = _0x4e53cf * _0x4a3a12;
            const _0x4b1e94 = _0x373c93 + _0x4a3a12, _0x385ecc = _0x5dfa1e + _0x4a3a12;
            const _0xc6e419 = _0x373c93 + _0x4a3a12 * 0.5, _0x3e5f67 = _0x5dfa1e + _0x4a3a12 * 0.5;
            const _0x3369a9 = Math['abs'](_0xc6e419 - _0x2352a5) + Math['abs'](_0x3e5f67 - _0x4acd59);
            if (_0x3369a9 > _0x5cadc9 + _0x4a3a12 * 1.5)
                continue;
            let _0xf6de21, _0x58ef9f, _0x36512b;
            _0xf6de21 = -_0x44bd1a * _0x4a3a12;
            if (Math['abs'](_0xf6de21) >= 1e-10) {
                _0x58ef9f = -(_0x5dfa1e - _0x4acd59) * _0x4a3a12 / _0xf6de21;
                _0x36512b = ((_0x373c93 - _0x2352a5) * _0x44bd1a - (_0x5dfa1e - _0x4acd59) * _0x156d1a) / _0xf6de21;
                if (_0x58ef9f > 0.001 && _0x36512b >= 0x0 && _0x36512b <= 0x1 && _0x58ef9f < _0x5cadc9)
                    _0x5cadc9 = _0x58ef9f;
            }
            _0xf6de21 = _0x156d1a * _0x4a3a12;
            if (Math['abs'](_0xf6de21) >= 1e-10) {
                _0x58ef9f = (_0x4b1e94 - _0x2352a5) * _0x4a3a12 / _0xf6de21;
                _0x36512b = ((_0x4b1e94 - _0x2352a5) * _0x44bd1a - (_0x5dfa1e - _0x4acd59) * _0x156d1a) / _0xf6de21;
                if (_0x58ef9f > 0.001 && _0x36512b >= 0x0 && _0x36512b <= 0x1 && _0x58ef9f < _0x5cadc9)
                    _0x5cadc9 = _0x58ef9f;
            }
            _0xf6de21 = _0x44bd1a * _0x4a3a12;
            if (Math['abs'](_0xf6de21) >= 1e-10) {
                _0x58ef9f = (_0x385ecc - _0x4acd59) * _0x4a3a12 / _0xf6de21;
                _0x36512b = ((_0x4b1e94 - _0x2352a5) * _0x44bd1a - (_0x385ecc - _0x4acd59) * _0x156d1a) / _0xf6de21;
                if (_0x58ef9f > 0.001 && _0x36512b >= 0x0 && _0x36512b <= 0x1 && _0x58ef9f < _0x5cadc9)
                    _0x5cadc9 = _0x58ef9f;
            }
            _0xf6de21 = -_0x156d1a * _0x4a3a12;
            if (Math['abs'](_0xf6de21) >= 1e-10) {
                _0x58ef9f = -(_0x373c93 - _0x2352a5) * _0x4a3a12 / _0xf6de21;
                _0x36512b = ((_0x373c93 - _0x2352a5) * _0x44bd1a - (_0x385ecc - _0x4acd59) * _0x156d1a) / _0xf6de21;
                if (_0x58ef9f > 0.001 && _0x36512b >= 0x0 && _0x36512b <= 0x1 && _0x58ef9f < _0x5cadc9)
                    _0x5cadc9 = _0x58ef9f;
            }
        }
        const _0x34ff5a = _0x5cadc9 < _0x5beaa7 ? _0x5cadc9 + 0x8 : _0x5cadc9;
        return {
            'x': _0x2352a5 + _0x156d1a * _0x34ff5a,
            'y': _0x4acd59 + _0x44bd1a * _0x34ff5a
        };
    };
    const _0x40cb2d = [];
    for (let _0x3ccd21 = 0x0; _0x3ccd21 < _0x5637a7['length']; _0x3ccd21++) {
        const _0x4fb255 = _0x383b83(_0x5637a7[_0x3ccd21]);
        _0x40cb2d['push'](_0x4fb255['x'], _0x4fb255['y']);
    }
    _0x4deeed['polygon'] = _0x40cb2d['length'] >= 0x6 ? new Float32Array(_0x40cb2d) : null;
}
function _0x545bac(_0x18db06, _0x532e0b, _0x16906d) {
    if (_0x4e1adb['isDead'])
        return;
    if (!_0x54d4e4)
        return;
    const {
        floorTiles: _0x4ba971,
        wallTiles: _0x207a88
    } = _0x54d4e4;
    if (_0x4ba971['length'] === 0x0)
        return;
    const _0x36cc5d = _0x5b5ada['SHADOW'];
    const _0x98e506 = _0x5b5ada['MAP']['tileSize'];
    const _0x2b2e3b = _0x5b5ada['CAMERA']['width'];
    const _0x1aa2e7 = _0x5b5ada['CAMERA']['height'];
    if (!_0x5b5ada['SHADOW']['_buf'] || _0x5b5ada['SHADOW']['_buf']['width'] !== _0x2b2e3b || _0x5b5ada['SHADOW']['_buf']['height'] !== _0x1aa2e7) {
        _0x5b5ada['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x5b5ada['SHADOW']['_buf']['width'] = _0x2b2e3b;
        _0x5b5ada['SHADOW']['_buf']['height'] = _0x1aa2e7;
    }
    const _0x32acff = _0x5b5ada['SHADOW']['_buf'];
    const _0x50c70d = _0x32acff['getContext']('2d');
    _0x50c70d['clearRect'](0x0, 0x0, _0x2b2e3b, _0x1aa2e7);
    _0x50c70d['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x50c70d['beginPath']();
    for (const {
                c: _0x515787,
                r: _0x23fb03
            } of _0x4ba971) {
        const _0x43818e = Math['floor'](_0x515787 * _0x98e506 - _0x532e0b), _0x21e66a = Math['floor'](_0x23fb03 * _0x98e506 - _0x16906d);
        if (_0x43818e > _0x2b2e3b || _0x21e66a > _0x1aa2e7 || _0x43818e + _0x98e506 < 0x0 || _0x21e66a + _0x98e506 < 0x0)
            continue;
        _0x50c70d['rect'](_0x43818e - 0x1, _0x21e66a - 0x1, _0x98e506 + 0x2, _0x98e506 + 0x2);
    }
    _0x50c70d['fill']();
    if (_0x207a88['length'] > 0x0) {
        _0x50c70d['globalCompositeOperation'] = 'destination-out';
        _0x50c70d['fillStyle'] = 'rgba(0,0,0,1)';
        _0x50c70d['beginPath']();
        for (const {
                    c: _0x265ad4,
                    r: _0x1d22d8
                } of _0x207a88) {
            const _0x1e5ad3 = Math['floor'](_0x265ad4 * _0x98e506 - _0x532e0b), _0x591b8d = Math['floor'](_0x1d22d8 * _0x98e506 - _0x16906d);
            if (_0x1e5ad3 > _0x2b2e3b || _0x591b8d > _0x1aa2e7 || _0x1e5ad3 + _0x98e506 < 0x0 || _0x591b8d + _0x98e506 < 0x0)
                continue;
            _0x50c70d['rect'](_0x1e5ad3 - 0x1, _0x591b8d - 0x1, _0x98e506 + 0x2, _0x98e506 + 0x2);
        }
        _0x50c70d['fill']();
        _0x50c70d['globalCompositeOperation'] = 'source-over';
    }
    if (_0x36cc5d['polygon'] && _0x36cc5d['polygon']['length'] >= 0x6) {
        _0x50c70d['globalCompositeOperation'] = 'destination-out';
        _0x50c70d['beginPath']();
        const _0x235033 = _0x36cc5d['polygon'];
        _0x50c70d['moveTo'](_0x235033[0x0] - _0x532e0b, _0x235033[0x1] - _0x16906d);
        for (let _0x233f4b = 0x2; _0x233f4b < _0x235033['length']; _0x233f4b += 0x2) {
            _0x50c70d['lineTo'](_0x235033[_0x233f4b] - _0x532e0b, _0x235033[_0x233f4b + 0x1] - _0x16906d);
        }
        _0x50c70d['closePath']();
        _0x50c70d['fill']();
        _0x50c70d['globalCompositeOperation'] = 'source-over';
    }
    _0x18db06['drawImage'](_0x32acff, 0x0, 0x0);
}
function _0x47d065(_0x3628c6) {
    let _0x203551 = 0x0, _0x191e6b = 0x0;
    const _0x22c6d8 = _0x5b5ada['INPUTS']['mouseX'] / _0x5b5ada['SYSTEM']['viewScale'];
    const _0x13eae = _0x5b5ada['INPUTS']['mouseY'] / _0x5b5ada['SYSTEM']['viewScale'];
    const _0x365d0f = _0x4e1adb['x'] - _0x5b5ada['CAMERA']['x'] + _0x4e1adb['width'] / 0x2;
    const _0x409777 = _0x4e1adb['y'] - _0x5b5ada['CAMERA']['y'] + _0x4e1adb['height'] / 0x2;
    const _0x5aed47 = Math['atan2'](_0x13eae - _0x409777, _0x22c6d8 - _0x365d0f);
    if (_0x39c3b !== 0x0 || _0x1784b7 !== 0x0) {
        _0x203551 = _0x39c3b;
        _0x191e6b = _0x1784b7;
    } else if (_0x5c543d) {
        let _0x2b0af9 = 0x0, _0x4c9ccd = 0x0;
        if (_0x5b5ada['INPUTS']['keys']['w'] || _0x5b5ada['INPUTS']['keys']['arrowup'])
            _0x2b0af9 += 0x1;
        if (_0x5b5ada['INPUTS']['keys']['s'] || _0x5b5ada['INPUTS']['keys']['arrowdown'])
            _0x2b0af9 -= 0x1;
        if (_0x5b5ada['INPUTS']['keys']['d'] || _0x5b5ada['INPUTS']['keys']['arrowright'])
            _0x4c9ccd += 0x1;
        if (_0x5b5ada['INPUTS']['keys']['a'] || _0x5b5ada['INPUTS']['keys']['arrowleft'])
            _0x4c9ccd -= 0x1;
        if (_0x2b0af9 !== 0x0 || _0x4c9ccd !== 0x0) {
            const _0x45e396 = _0x5aed47 + Math['atan2'](_0x4c9ccd, _0x2b0af9);
            _0x203551 = Math['cos'](_0x45e396);
            _0x191e6b = Math['sin'](_0x45e396);
        }
    } else {
        if (_0x5b5ada['INPUTS']['keys']['w'] || _0x5b5ada['INPUTS']['keys']['arrowup'])
            _0x191e6b -= 0x1;
        if (_0x5b5ada['INPUTS']['keys']['s'] || _0x5b5ada['INPUTS']['keys']['arrowdown'])
            _0x191e6b += 0x1;
        if (_0x5b5ada['INPUTS']['keys']['a'] || _0x5b5ada['INPUTS']['keys']['arrowleft'])
            _0x203551 -= 0x1;
        if (_0x5b5ada['INPUTS']['keys']['d'] || _0x5b5ada['INPUTS']['keys']['arrowright'])
            _0x203551 += 0x1;
        const _0x2153de = _0x203551 !== 0x0 || _0x191e6b !== 0x0;
        if (_0x2153de) {
            const _0x7831ee = Math['sqrt'](_0x203551 * _0x203551 + _0x191e6b * _0x191e6b);
            _0x203551 /= _0x7831ee;
            _0x191e6b /= _0x7831ee;
        }
    }
    if (_0x5b5ada['GAME_STATE'] === 'NIGHT' && _0xb09f85 === 'Skinwalker') {
        if (_0x5b5ada['NIGHT_ABILITY_OPEN'] || !_0x5b5ada['CURRENT_TARGET']) {
            _0x203551 = 0x0;
            _0x191e6b = 0x0;
            _0x4e1adb['vx'] = 0x0;
            _0x4e1adb['vy'] = 0x0;
            _0x4e1adb['x'] = _0x5b5ada['MAP']['columns'] * _0x5b5ada['MAP']['tileSize'] / 0x2 - _0x4e1adb['width'] / 0x2;
            _0x4e1adb['y'] = _0x5b5ada['MAP']['rows'] * _0x5b5ada['MAP']['tileSize'] / 0x2 - _0x4e1adb['height'] / 0x2;
        }
    }
    const _0x502782 = _0x203551 !== 0x0 || _0x191e6b !== 0x0;
    const _0x33c8e2 = (_0x5b5ada['INPUTS']['keys']['shift'] || _0x33e08b || _0x466732) && _0x502782;
    _0x4e1adb['bopTimer'] = _0x33c8e2 ? _0x4e1adb['bopTimer'] + _0x3628c6 : 0x0;
    _0x4e1adb['scale'] = 0x1 + (_0x4e1adb['bopTimer'] > 0x0 ? Math['sin'](_0x4e1adb['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x1d6b08 = Math['pow'](0.001, _0x3628c6);
    const _0x5e852d = _0x33c8e2 ? 0x74a : 0x5d5;
    _0x4e1adb['vx'] += _0x203551 * _0x5e852d * _0x3628c6;
    _0x4e1adb['vy'] += _0x191e6b * _0x5e852d * _0x3628c6;
    _0x4e1adb['vx'] *= _0x1d6b08;
    _0x4e1adb['vy'] *= _0x1d6b08;
    _0x4e1adb['x'] += _0x4e1adb['vx'] * _0x3628c6;
    _0x4e1adb['y'] += _0x4e1adb['vy'] * _0x3628c6;
    for (let _0xf4f13d = 0x0; _0xf4f13d < 0x3; _0xf4f13d++)
        _0x2f54b0();
    for (let _0x7891a2 = 0x0; _0x7891a2 < 0x2; _0x7891a2++)
        _0x3980fb();
    for (let _0x584e75 = 0x0; _0x584e75 < 0x2; _0x584e75++)
        _0x40bfbe();
    if (_0x4e1adb['x'] < 0x0)
        _0x4e1adb['x'] = 0x0;
    if (_0x4e1adb['y'] < 0x0)
        _0x4e1adb['y'] = 0x0;
    if (_0x4e1adb['x'] + _0x4e1adb['width'] > _0x5b5ada['MAP']['columns'] * _0x5b5ada['MAP']['tileSize'])
        _0x4e1adb['x'] = _0x5b5ada['MAP']['columns'] * _0x5b5ada['MAP']['tileSize'] - _0x4e1adb['width'];
    if (_0x4e1adb['y'] + _0x4e1adb['height'] > _0x5b5ada['MAP']['rows'] * _0x5b5ada['MAP']['tileSize'])
        _0x4e1adb['y'] = _0x5b5ada['MAP']['rows'] * _0x5b5ada['MAP']['tileSize'] - _0x4e1adb['height'];
    if (_0x56f140) {
        _0x4e1adb['angle'] = _0x31c969 + Math['PI'] / 0x2;
    } else if (_0x39c3b !== 0x0 || _0x1784b7 !== 0x0) {
        _0x4e1adb['angle'] = Math['atan2'](_0x1784b7, _0x39c3b) + Math['PI'] / 0x2;
    } else if (!_0x352d80) {
        _0x4e1adb['angle'] = _0x5aed47 + Math['PI'] / 0x2;
    }
    const _0x260bb8 = _0x4e1adb['x'] + _0x4e1adb['width'] / 0x2 - _0x5b5ada['CAMERA']['width'] / 0x2;
    const _0x344779 = _0x4e1adb['y'] + _0x4e1adb['height'] / 0x2 - _0x5b5ada['CAMERA']['height'] / 0x2;
    if (_0x5b5ada['CAMERA']['x'] === null || isNaN(_0x5b5ada['CAMERA']['x']) || !isFinite(_0x5b5ada['CAMERA']['x'])) {
        _0x5b5ada['CAMERA']['x'] = _0x260bb8;
        _0x5b5ada['CAMERA']['y'] = _0x344779;
    } else {
        const _0x3ebe75 = 0x1 - Math['exp'](-Math['max'](0x0, _0x3628c6) * 0x28);
        _0x5b5ada['CAMERA']['x'] += (_0x260bb8 - _0x5b5ada['CAMERA']['x']) * _0x3ebe75;
        _0x5b5ada['CAMERA']['y'] += (_0x344779 - _0x5b5ada['CAMERA']['y']) * _0x3ebe75;
    }
    for (const _0x14d5bc in _0x3182c1) {
        const _0x39d007 = _0x3182c1[_0x14d5bc];
        if (_0x39d007['renderX'] === undefined) {
            _0x39d007['renderX'] = _0x39d007['x'];
            _0x39d007['renderY'] = _0x39d007['y'];
            _0x39d007['renderAngle'] = _0x39d007['angle'] || 0x0;
        }
        const _0x12a673 = 0.25;
        const _0x9160ec = _0x39d007['x'] - _0x39d007['renderX'], _0x60cc8d = _0x39d007['y'] - _0x39d007['renderY'];
        const _0x34f714 = Math['sqrt'](_0x9160ec * _0x9160ec + _0x60cc8d * _0x60cc8d);
        const _0x198f21 = 0xb4;
        if (_0x34f714 > _0x198f21) {
            _0x39d007['renderX'] = _0x39d007['x'] - _0x9160ec / _0x34f714 * _0x198f21;
            _0x39d007['renderY'] = _0x39d007['y'] - _0x60cc8d / _0x34f714 * _0x198f21;
        }
        _0x39d007['renderX'] += (_0x39d007['x'] - _0x39d007['renderX']) * _0x12a673;
        _0x39d007['renderY'] += (_0x39d007['y'] - _0x39d007['renderY']) * _0x12a673;
        let _0x36576f = (_0x39d007['angle'] || 0x0) - _0x39d007['renderAngle'];
        while (_0x36576f < -Math['PI'])
            _0x36576f += Math['PI'] * 0x2;
        while (_0x36576f > Math['PI'])
            _0x36576f -= Math['PI'] * 0x2;
        _0x39d007['renderAngle'] += _0x36576f * 0.3;
    }
    if (_0x5b5ada['GAME_STATE'] === 'NIGHT') {
        _0x27b0bc = Math['min'](0.6, _0x27b0bc + _0x3628c6 * 0.5);
    } else {
        _0x27b0bc = Math['max'](0x0, _0x27b0bc - _0x3628c6 * 0.5);
    }
    _0x65a256();
    _0x112a11();
}
function _0x21785c(_0x33cde2, _0x27a5b7, _0xe9ad28, _0x3a7257, _0x305925 = !![]) {
    _0x33cde2['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0xebe97c = _0x33cde2['measureText'](_0x27a5b7)['width'];
    const _0x39d39f = _0xebe97c + 0x18;
    const _0x4f335c = 0x1c;
    _0x33cde2['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x33cde2['beginPath']();
    if (_0x33cde2['roundRect']) {
        _0x33cde2['roundRect'](_0xe9ad28 - _0x39d39f / 0x2, _0x3a7257 - _0x4f335c, _0x39d39f, _0x4f335c, 0x6);
    } else {
        _0x33cde2['rect'](_0xe9ad28 - _0x39d39f / 0x2, _0x3a7257 - _0x4f335c, _0x39d39f, _0x4f335c);
    }
    _0x33cde2['fill']();
    if (_0x305925) {
        _0x33cde2['beginPath']();
        _0x33cde2['moveTo'](_0xe9ad28 - 0x6, _0x3a7257);
        _0x33cde2['lineTo'](_0xe9ad28 + 0x6, _0x3a7257);
        _0x33cde2['lineTo'](_0xe9ad28, _0x3a7257 + 0x6);
        _0x33cde2['fill']();
    }
    _0x33cde2['fillStyle'] = '#ffffff';
    _0x33cde2['textAlign'] = 'center';
    _0x33cde2['textBaseline'] = 'middle';
    _0x33cde2['fillText'](_0x27a5b7, _0xe9ad28, _0x3a7257 - _0x4f335c / 0x2 + 0x1);
}
function _0x579960(_0x140b71, _0x3a804b, _0x337e64, _0x2fb0e) {
    if (!_0x3a804b || _0x3a804b['length'] === 0x0)
        return;
    let _0x5bb6e4 = _0x2fb0e;
    for (let _0x28e48e = 0x0; _0x28e48e < _0x3a804b['length']; _0x28e48e++) {
        _0x21785c(_0x140b71, _0x3a804b[_0x28e48e]['text'], _0x337e64, _0x5bb6e4, _0x28e48e === 0x0);
        _0x5bb6e4 -= 0x24;
    }
}
function _0x20c6ae() {
    if (!_0x5b5ada['SYSTEM']['isReady'])
        return;
    _0x2a1632['fillStyle'] = '#000000';
    _0x2a1632['fillRect'](0x0, 0x0, _0x3788eb['width'], _0x3788eb['height']);
    _0x2a1632['save']();
    try {
        _0x2a1632['scale'](_0x5b5ada['SYSTEM']['viewScale'], _0x5b5ada['SYSTEM']['viewScale']);
        _0x2a1632['imageSmoothingEnabled'] = ![];
        const _0x6dcde3 = Math['floor'](_0x5b5ada['CAMERA']['x'] || 0x0);
        const _0x56bfa7 = Math['floor'](_0x5b5ada['CAMERA']['y'] || 0x0);
        const _0x11f23e = Math['max'](0x0, Math['floor'](_0x6dcde3 / _0x5b5ada['MAP']['chunkSize']));
        const _0x4af96a = Math['min'](_0x5b5ada['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x6dcde3 + _0x5b5ada['CAMERA']['width']) / _0x5b5ada['MAP']['chunkSize']));
        const _0x1cdb8e = Math['max'](0x0, Math['floor'](_0x56bfa7 / _0x5b5ada['MAP']['chunkSize']));
        const _0x24c85c = Math['min'](_0x5b5ada['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x56bfa7 + _0x5b5ada['CAMERA']['height']) / _0x5b5ada['MAP']['chunkSize']));
        for (let _0x4f9d06 = _0x1cdb8e; _0x4f9d06 <= _0x24c85c; _0x4f9d06++)
            for (let _0x22b002 = _0x11f23e; _0x22b002 <= _0x4af96a; _0x22b002++) {
                const _0x114dec = _0x22b002 * _0x5b5ada['MAP']['chunkSize'] - _0x6dcde3;
                const _0x7166d9 = _0x4f9d06 * _0x5b5ada['MAP']['chunkSize'] - _0x56bfa7;
                _0x2a1632['drawImage'](_0x5b5ada['MAP']['bgChunks'][_0x4f9d06][_0x22b002], _0x114dec, _0x7166d9, _0x5b5ada['MAP']['chunkSize'] + 0x1, _0x5b5ada['MAP']['chunkSize'] + 0x1);
            }
        if (_0x60f0a2['complete'] && _0x60f0a2['naturalWidth'] > 0x0) {
            const _0xa1228b = _0x5b5ada['MAP']['tileSize'];
            const _0x7062b8 = _0xa1228b * 0xa;
            const _0x3d7d1f = _0x5b5ada['MAP']['columns'] / 0x2 * _0xa1228b - _0x7062b8 / 0x2 - _0x6dcde3;
            const _0x85edd9 = _0x5b5ada['MAP']['rows'] / 0x2 * _0xa1228b - _0x7062b8 / 0x2 - _0x56bfa7;
            _0x2a1632['imageSmoothingEnabled'] = ![];
            _0x2a1632['drawImage'](_0x60f0a2, _0x3d7d1f, _0x85edd9, _0x7062b8, _0x7062b8);
        }
        if (_0x417568['complete'] && _0x417568['naturalWidth'] > 0x0) {
            _0x5b5ada['ENTITIES']['forEach'](_0x433136 => {
                if (_0x433136['type'] !== 'table')
                    return;
                _0x2a1632['save']();
                _0x2a1632['imageSmoothingEnabled'] = ![];
                const _0xcec5d7 = _0x417568['naturalWidth'] >= _0x417568['naturalHeight'];
                const _0x23b07e = _0x433136['w'] >= _0x433136['h'];
                if (_0xcec5d7 === _0x23b07e) {
                    _0x2a1632['drawImage'](_0x417568, _0x433136['x'] - _0x6dcde3, _0x433136['y'] - _0x56bfa7, _0x433136['w'], _0x433136['h']);
                } else {
                    _0x2a1632['translate'](_0x433136['x'] - _0x6dcde3 + _0x433136['w'] / 0x2, _0x433136['y'] - _0x56bfa7 + _0x433136['h'] / 0x2);
                    _0x2a1632['rotate'](Math['PI'] / 0x2);
                    _0x2a1632['drawImage'](_0x417568, -_0x433136['h'] / 0x2, -_0x433136['w'] / 0x2, _0x433136['h'], _0x433136['w']);
                }
                _0x2a1632['restore']();
            });
        } else {
            _0x5b5ada['ENTITIES']['forEach'](_0x5d7894 => {
                if (_0x5d7894['type'] !== 'table')
                    return;
                _0x2a1632['save']();
                _0x2a1632['fillStyle'] = '#6b4423';
                _0x2a1632['fillRect'](_0x5d7894['x'] - _0x6dcde3, _0x5d7894['y'] - _0x56bfa7, _0x5d7894['w'], _0x5d7894['h']);
                _0x2a1632['strokeStyle'] = '#422810';
                _0x2a1632['lineWidth'] = 0x3;
                _0x2a1632['strokeRect'](_0x5d7894['x'] - _0x6dcde3 + 0x1, _0x5d7894['y'] - _0x56bfa7 + 0x1, _0x5d7894['w'] - 0x2, _0x5d7894['h'] - 0x2);
                _0x2a1632['fillStyle'] = '#82532a';
                _0x2a1632['fillRect'](_0x5d7894['x'] - _0x6dcde3 + 0x4, _0x5d7894['y'] - _0x56bfa7 + 0x4, _0x5d7894['w'] - 0x8, _0x5d7894['h'] - 0x8);
                _0x2a1632['restore']();
            });
        }
        if (_0x181d57) {
            for (let _0x4176f3 = _0x1cdb8e; _0x4176f3 <= _0x24c85c; _0x4176f3++) {
                for (let _0x1287cb = _0x11f23e; _0x1287cb <= _0x4af96a; _0x1287cb++) {
                    const _0x556cfa = _0x1287cb * _0x5b5ada['MAP']['chunkSize'] - _0x6dcde3;
                    const _0x57dd34 = _0x4176f3 * _0x5b5ada['MAP']['chunkSize'] - _0x56bfa7;
                    _0x2a1632['drawImage'](_0x5b5ada['MAP']['fgChunks'][_0x4176f3][_0x1287cb], _0x556cfa, _0x57dd34, _0x5b5ada['MAP']['chunkSize'] + 0x1, _0x5b5ada['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0xfa04bd = _0x5b5ada['GAME_STATE'] === 'NIGHT' && _0xb09f85 === 'Skinwalker' && !_0x4e1adb['isDead'];
        const _0x237fcc = _0x4e1adb['x'] - _0x6dcde3 + _0x4e1adb['width'] / 0x2;
        const _0xe22485 = _0x4e1adb['y'] - _0x56bfa7 + _0x4e1adb['height'] / 0x2;
        const _0x339c12 = _0x4e1adb['width'] * _0x4e1adb['scale'] * 1.3;
        const _0x20c5d7 = _0x4e1adb['height'] * _0x4e1adb['scale'] * 1.3;
        for (const _0x6aff82 in _0x3182c1) {
            const _0x2dc90e = _0x3182c1[_0x6aff82];
            if (_0x2dc90e['isDead'])
                continue;
            const _0x404103 = (_0x2dc90e['renderX'] ?? _0x2dc90e['x']) - _0x6dcde3 + _0x2dc90e['width'] / 0x2;
            const _0xf182de = (_0x2dc90e['renderY'] ?? _0x2dc90e['y']) - _0x56bfa7 + _0x2dc90e['height'] / 0x2;
            const _0x4fe502 = Math['min'](0x2, Math['max'](0.3, _0x2dc90e['scale'] || 0x1));
            const _0x3907f3 = _0x2dc90e['width'] * _0x4fe502 * 1.3;
            const _0x562856 = _0x2dc90e['height'] * _0x4fe502 * 1.3;
            _0x2a1632['save']();
            try {
                _0x2a1632['translate'](_0x404103, _0xf182de);
                _0x2a1632['rotate'](_0x2dc90e['renderAngle'] ?? 0x0);
                if (_0x2dc90e['isDark'])
                    _0x2a1632['filter'] = 'brightness(0)';
                _0x15fb49(_0x2a1632, _0x2dc90e['body'], _0x2dc90e['eyes'], _0x3907f3, _0x562856);
                if (_0x49916f['has'](parseInt(_0x6aff82)) && _0x3c5210['complete'] && _0x3c5210['naturalWidth'] > 0x0) {
                    _0x2a1632['drawImage'](_0x3c5210, -_0x3907f3 / 0x2, -_0x562856 / 0x2, _0x3907f3, _0x562856);
                }
                if (_0x2dc90e['isDark'])
                    _0x2a1632['filter'] = 'none';
            } finally {
                _0x2a1632['restore']();
            }
            if (!_0x4b3abe((_0x2dc90e['renderX'] ?? _0x2dc90e['x']) + _0x2dc90e['width'] / 0x2, (_0x2dc90e['renderY'] ?? _0x2dc90e['y']) + _0x2dc90e['height'] / 0x2)) {
                _0x2a1632['textAlign'] = 'center';
                _0x2a1632['lineJoin'] = 'round';
                _0x2a1632['lineWidth'] = 0x3;
                _0x2a1632['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x2a1632['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x2a1632['fillStyle'] = _0x49916f['has'](parseInt(_0x6aff82)) ? '#cc88ff' : '#ffffff';
                const _0xca3054 = _0x2dc90e['isDark'] ? '???' : _0x2dc90e['name'] + (_0x2dc90e['isOwner'] ? '\x20[🗝️]' : '');
                _0x2a1632['strokeText'](_0xca3054, _0x404103, _0xf182de - _0x562856 / 0x2 - 0x10);
                _0x2a1632['fillText'](_0xca3054, _0x404103, _0xf182de - _0x562856 / 0x2 - 0x10);
            }
        }
        if (!_0x4e1adb['isDead']) {
            _0x2a1632['save']();
            try {
                _0x2a1632['translate'](_0x237fcc, _0xe22485);
                _0x2a1632['rotate'](_0x4e1adb['angle']);
                if (_0xfa04bd)
                    _0x2a1632['filter'] = 'brightness(0)';
                _0x15fb49(_0x2a1632, _0x2fcc3e, _0x1e0f0a, _0x339c12, _0x20c5d7);
                if (_0x49916f['has'](_0x52cb91) && _0x3c5210['complete'] && _0x3c5210['naturalWidth'] > 0x0) {
                    _0x2a1632['drawImage'](_0x3c5210, -_0x339c12 / 0x2, -_0x20c5d7 / 0x2, _0x339c12, _0x20c5d7);
                }
                if (_0xfa04bd)
                    _0x2a1632['filter'] = 'none';
            } finally {
                _0x2a1632['restore']();
            }
            if (!_0x4b3abe(_0x4e1adb['x'] + _0x4e1adb['width'] / 0x2, _0x4e1adb['y'] + _0x4e1adb['height'] / 0x2)) {
                _0x2a1632['textAlign'] = 'center';
                _0x2a1632['lineJoin'] = 'round';
                _0x2a1632['lineWidth'] = 0x3;
                _0x2a1632['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x2a1632['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x2a1632['fillStyle'] = _0x49916f['has'](_0x52cb91) ? '#cc88ff' : '#ffffff';
                const _0x107708 = _0xfa04bd ? '???' : _0x4c651f + (_0x16d7ab ? '\x20[🗝️]' : '');
                _0x2a1632['strokeText'](_0x107708, _0x237fcc, _0xe22485 - _0x20c5d7 / 0x2 - 0x10);
                _0x2a1632['fillText'](_0x107708, _0x237fcc, _0xe22485 - _0x20c5d7 / 0x2 - 0x10);
            }
        }
        for (const _0x490ecd of _0x5b5ada['ENTITIES']) {
            if (_0x490ecd['type'] !== 'npc')
                continue;
            const _0x245f78 = _0x490ecd['x'] - _0x6dcde3 + _0x490ecd['w'] / 0x2;
            const _0x59479e = _0x490ecd['y'] - _0x56bfa7 + _0x490ecd['h'] / 0x2;
            const _0x494cd1 = _0x490ecd['w'] * 0.65;
            const _0x1e92ec = _0x490ecd['h'] * 0.65;
            _0x2a1632['save']();
            _0x2a1632['translate'](_0x245f78, _0x59479e);
            _0x2a1632['rotate'](_0x490ecd['angle'] !== undefined ? _0x490ecd['angle'] : 0x0);
            _0x15fb49(_0x2a1632, _0x490ecd['body'] || 'yanito932.png', _0x490ecd['eyes'] || null, _0x494cd1, _0x1e92ec);
            _0x2a1632['restore']();
            _0x2a1632['textAlign'] = 'center';
            _0x2a1632['lineJoin'] = 'round';
            _0x2a1632['lineWidth'] = 0x3;
            _0x2a1632['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x2a1632['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x2a1632['fillStyle'] = '#aaaaaa';
            _0x2a1632['strokeText'](_0x490ecd['name'] || 'NPC', _0x245f78, _0x59479e - _0x1e92ec / 0x2 - 0x10);
            _0x2a1632['fillText'](_0x490ecd['name'] || 'NPC', _0x245f78, _0x59479e - _0x1e92ec / 0x2 - 0x10);
        }
        if (_0x5b5ada['MAP']['wallChunks'] && _0x5b5ada['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x38c590 = _0x1cdb8e; _0x38c590 <= _0x24c85c; _0x38c590++)
                for (let _0x50a18e = _0x11f23e; _0x50a18e <= _0x4af96a; _0x50a18e++) {
                    if (!_0x5b5ada['MAP']['wallChunks'][_0x38c590] || !_0x5b5ada['MAP']['wallChunks'][_0x38c590][_0x50a18e])
                        continue;
                    const _0x3531f2 = _0x50a18e * _0x5b5ada['MAP']['chunkSize'] - _0x6dcde3;
                    const _0x4ea905 = _0x38c590 * _0x5b5ada['MAP']['chunkSize'] - _0x56bfa7;
                    _0x2a1632['drawImage'](_0x5b5ada['MAP']['wallChunks'][_0x38c590][_0x50a18e], _0x3531f2, _0x4ea905, _0x5b5ada['MAP']['chunkSize'] + 0x1, _0x5b5ada['MAP']['chunkSize'] + 0x1);
                }
        }
        if (_0x4e1adb['isDead']) {
            for (const _0x1aed04 in _0x3182c1) {
                const _0x1c9bed = _0x3182c1[_0x1aed04];
                if (!_0x1c9bed['isDead'])
                    continue;
                const _0x19461e = (_0x1c9bed['renderX'] ?? _0x1c9bed['x']) - _0x6dcde3 + _0x1c9bed['width'] / 0x2;
                const _0x460a5b = (_0x1c9bed['renderY'] ?? _0x1c9bed['y']) - _0x56bfa7 + _0x1c9bed['height'] / 0x2;
                const _0x3d5b5f = _0x1c9bed['width'] * (_0x1c9bed['scale'] || 0x1) * 1.3;
                const _0x576798 = _0x1c9bed['height'] * (_0x1c9bed['scale'] || 0x1) * 1.3;
                _0x2a1632['save']();
                try {
                    _0x2a1632['translate'](_0x19461e, _0x460a5b);
                    _0x2a1632['rotate'](_0x1c9bed['renderAngle'] ?? 0x0);
                    _0x2a1632['globalAlpha'] = 0.3;
                    _0x15fb49(_0x2a1632, _0x1c9bed['body'], _0x1c9bed['eyes'], _0x3d5b5f, _0x576798);
                } finally {
                    _0x2a1632['restore']();
                }
                if (!_0x4b3abe((_0x1c9bed['renderX'] ?? _0x1c9bed['x']) + _0x1c9bed['width'] / 0x2, (_0x1c9bed['renderY'] ?? _0x1c9bed['y']) + _0x1c9bed['height'] / 0x2)) {
                    _0x2a1632['save']();
                    _0x2a1632['globalAlpha'] = 0.3;
                    _0x2a1632['textAlign'] = 'center';
                    _0x2a1632['lineJoin'] = 'round';
                    _0x2a1632['lineWidth'] = 0x3;
                    _0x2a1632['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x2a1632['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x2a1632['fillStyle'] = '#ffffff';
                    const _0x17fe80 = _0x1c9bed['name'] + (_0x1c9bed['isOwner'] ? '\x20[🗝️]' : '');
                    _0x2a1632['strokeText'](_0x17fe80, _0x19461e, _0x460a5b - _0x576798 / 0x2 - 0x10);
                    _0x2a1632['fillText'](_0x17fe80, _0x19461e, _0x460a5b - _0x576798 / 0x2 - 0x10);
                    _0x2a1632['restore']();
                }
            }
            _0x2a1632['save']();
            try {
                _0x2a1632['translate'](_0x237fcc, _0xe22485);
                _0x2a1632['rotate'](_0x4e1adb['angle']);
                _0x2a1632['globalAlpha'] = 0.3;
                _0x15fb49(_0x2a1632, _0x2fcc3e, _0x1e0f0a, _0x339c12, _0x20c5d7);
            } finally {
                _0x2a1632['restore']();
            }
            if (!_0x4b3abe(_0x4e1adb['x'] + _0x4e1adb['width'] / 0x2, _0x4e1adb['y'] + _0x4e1adb['height'] / 0x2)) {
                _0x2a1632['save']();
                _0x2a1632['globalAlpha'] = 0.3;
                _0x2a1632['textAlign'] = 'center';
                _0x2a1632['lineJoin'] = 'round';
                _0x2a1632['lineWidth'] = 0x3;
                _0x2a1632['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x2a1632['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x2a1632['fillStyle'] = '#ffffff';
                const _0x51a1f2 = _0x4c651f + (_0x16d7ab ? '\x20[🗝️]' : '');
                _0x2a1632['strokeText'](_0x51a1f2, _0x237fcc, _0xe22485 - _0x20c5d7 / 0x2 - 0x10);
                _0x2a1632['fillText'](_0x51a1f2, _0x237fcc, _0xe22485 - _0x20c5d7 / 0x2 - 0x10);
                _0x2a1632['restore']();
            }
        }
        for (let _0x47b754 = _0x1cdb8e; _0x47b754 <= _0x24c85c; _0x47b754++)
            for (let _0x52f2d7 = _0x11f23e; _0x52f2d7 <= _0x4af96a; _0x52f2d7++) {
                const _0x573115 = _0x52f2d7 * _0x5b5ada['MAP']['chunkSize'] - _0x6dcde3;
                const _0x292c35 = _0x47b754 * _0x5b5ada['MAP']['chunkSize'] - _0x56bfa7;
                _0x2a1632['drawImage'](_0x5b5ada['MAP']['fgChunks'][_0x47b754][_0x52f2d7], _0x573115, _0x292c35, _0x5b5ada['MAP']['chunkSize'] + 0x1, _0x5b5ada['MAP']['chunkSize'] + 0x1);
            }
        if (_0x5b5ada['EDITOR']['enabled'] && _0x5b5ada['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x2d97a6 = _0x5b5ada['INPUTS']['mouseX'] / _0x5b5ada['SYSTEM']['viewScale'] + _0x5b5ada['CAMERA']['x'];
            const _0xc05637 = _0x5b5ada['INPUTS']['mouseY'] / _0x5b5ada['SYSTEM']['viewScale'] + _0x5b5ada['CAMERA']['y'];
            const _0x206b93 = Math['floor'](_0x2d97a6 / _0x5b5ada['MAP']['tileSize']);
            const _0x47bb91 = Math['floor'](_0xc05637 / _0x5b5ada['MAP']['tileSize']);
            if (_0x206b93 >= 0x0 && _0x206b93 < _0x5b5ada['MAP']['columns'] && _0x47bb91 >= 0x0 && _0x47bb91 < _0x5b5ada['MAP']['rows']) {
                const _0x622cc1 = _0x206b93 * _0x5b5ada['MAP']['tileSize'] - _0x6dcde3;
                const _0x4cc8fa = _0x47bb91 * _0x5b5ada['MAP']['tileSize'] - _0x56bfa7;
                _0x2a1632['save']();
                _0x2a1632['globalAlpha'] = 0.5;
                if (_0x5b5ada['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x4ad694 = _0x5b5ada['EDITOR']['selectedTileGid'] - 0x1;
                    _0x2a1632['drawImage'](_0x3ba034, _0x4ad694 % _0x5b5ada['MAP']['tilesetCols'] * _0x5b5ada['MAP']['tileSize'], Math['floor'](_0x4ad694 / _0x5b5ada['MAP']['tilesetCols']) * _0x5b5ada['MAP']['tileSize'], _0x5b5ada['MAP']['tileSize'], _0x5b5ada['MAP']['tileSize'], _0x622cc1, _0x4cc8fa, _0x5b5ada['MAP']['tileSize'], _0x5b5ada['MAP']['tileSize']);
                } else {
                    _0x2a1632['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x2a1632['fillRect'](_0x622cc1, _0x4cc8fa, _0x5b5ada['MAP']['tileSize'], _0x5b5ada['MAP']['tileSize']);
                }
                _0x2a1632['restore']();
            }
        }
        _0x545bac(_0x2a1632, _0x6dcde3, _0x56bfa7);
        if (_0x27b0bc > 0x0) {
            _0x2a1632['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x27b0bc + ')';
            _0x2a1632['fillRect'](0x0, 0x0, _0x5b5ada['CAMERA']['width'], _0x5b5ada['CAMERA']['height']);
        }
        for (const _0x1f0872 in _0x3182c1) {
            const _0x5a6da2 = _0x3182c1[_0x1f0872];
            if (_0x5a6da2['isDead'] && !_0x4e1adb['isDead'])
                continue;
            const _0x34d66a = (_0x5a6da2['renderX'] ?? _0x5a6da2['x']) - _0x6dcde3 + _0x5a6da2['width'] / 0x2;
            const _0x577a05 = (_0x5a6da2['renderY'] ?? _0x5a6da2['y']) - _0x56bfa7 + _0x5a6da2['height'] / 0x2;
            _0x579960(_0x2a1632, _0x5a6da2['chats'], _0x34d66a, _0x577a05 - _0x5a6da2['height'] / 0x2 - 0x20);
        }
        _0x579960(_0x2a1632, _0x4e1adb['chats'], _0x237fcc, _0xe22485 - _0x4e1adb['height'] / 0x2 - 0x20);
    } finally {
        _0x2a1632['restore']();
    }
}
function _0x40d304(_0x185ffd) {
    if (!_0x5b5ada['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x40d304);
    let _0x25b276 = (_0x185ffd - _0x5b5ada['SYSTEM']['lastTime']) / 0x3e8;
    _0x5b5ada['SYSTEM']['lastTime'] = _0x185ffd;
    if (_0x25b276 > 0.1)
        _0x25b276 = 0.1;
    if (_0x25b276 < 0x0 || isNaN(_0x25b276))
        _0x25b276 = 0.016;
    if (_0x181d57) {
        _0x37a59a(_0x25b276);
        _0x20c6ae();
        return;
    }
    if (!_0x52cb91)
        return;
    _0x47d065(_0x25b276);
    _0x2f61af['tick'](_0x185ffd);
    _0x20c6ae();
}
function _0x1ae3f2() {
    const _0x1293c4 = Math['ceil'](_0x5b5ada['MAP']['columns'] * _0x5b5ada['MAP']['tileSize'] / _0x5b5ada['MAP']['chunkSize']);
    const _0x11cd81 = Math['ceil'](_0x5b5ada['MAP']['rows'] * _0x5b5ada['MAP']['tileSize'] / _0x5b5ada['MAP']['chunkSize']);
    _0x5b5ada['MAP']['bgChunks'] = [];
    _0x5b5ada['MAP']['fgChunks'] = [];
    _0x5b5ada['MAP']['wallChunks'] = [];
    for (let _0x7b029b = 0x0; _0x7b029b < _0x11cd81; _0x7b029b++) {
        _0x5b5ada['MAP']['bgChunks'][_0x7b029b] = [];
        _0x5b5ada['MAP']['fgChunks'][_0x7b029b] = [];
        _0x5b5ada['MAP']['wallChunks'][_0x7b029b] = [];
        for (let _0x4ff1f0 = 0x0; _0x4ff1f0 < _0x1293c4; _0x4ff1f0++) {
            const _0xc224c1 = document['createElement']('canvas');
            _0xc224c1['width'] = _0xc224c1['height'] = _0x5b5ada['MAP']['chunkSize'];
            const _0x762abb = document['createElement']('canvas');
            _0x762abb['width'] = _0x762abb['height'] = _0x5b5ada['MAP']['chunkSize'];
            const _0x34b357 = document['createElement']('canvas');
            _0x34b357['width'] = _0x34b357['height'] = _0x5b5ada['MAP']['chunkSize'];
            _0x5b5ada['MAP']['bgChunks'][_0x7b029b][_0x4ff1f0] = _0xc224c1;
            _0x5b5ada['MAP']['fgChunks'][_0x7b029b][_0x4ff1f0] = _0x762abb;
            _0x5b5ada['MAP']['wallChunks'][_0x7b029b][_0x4ff1f0] = _0x34b357;
            _0x3e330e(_0x4ff1f0, _0x7b029b);
        }
    }
}
function _0x3e330e(_0x1df151, _0x5b4e2b) {
    const _0x14d2f7 = _0x5b5ada['MAP']['bgChunks'][_0x5b4e2b][_0x1df151]['getContext']('2d', { 'alpha': !![] });
    const _0x5bb2eb = _0x5b5ada['MAP']['fgChunks'][_0x5b4e2b][_0x1df151]['getContext']('2d', { 'alpha': !![] });
    const _0x46c321 = _0x5b5ada['MAP']['wallChunks'][_0x5b4e2b] && _0x5b5ada['MAP']['wallChunks'][_0x5b4e2b][_0x1df151] ? _0x5b5ada['MAP']['wallChunks'][_0x5b4e2b][_0x1df151]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x14d2f7['imageSmoothingEnabled'] = _0x5bb2eb['imageSmoothingEnabled'] = ![];
    if (_0x46c321)
        _0x46c321['imageSmoothingEnabled'] = ![];
    _0x14d2f7['clearRect'](0x0, 0x0, _0x5b5ada['MAP']['chunkSize'], _0x5b5ada['MAP']['chunkSize']);
    _0x5bb2eb['clearRect'](0x0, 0x0, _0x5b5ada['MAP']['chunkSize'], _0x5b5ada['MAP']['chunkSize']);
    if (_0x46c321)
        _0x46c321['clearRect'](0x0, 0x0, _0x5b5ada['MAP']['chunkSize'], _0x5b5ada['MAP']['chunkSize']);
    const _0x2b8321 = Math['floor'](_0x1df151 * _0x5b5ada['MAP']['chunkSize'] / _0x5b5ada['MAP']['tileSize']);
    const _0x4d10e4 = Math['ceil']((_0x1df151 + 0x1) * _0x5b5ada['MAP']['chunkSize'] / _0x5b5ada['MAP']['tileSize']);
    const _0x412eea = Math['floor'](_0x5b4e2b * _0x5b5ada['MAP']['chunkSize'] / _0x5b5ada['MAP']['tileSize']);
    const _0x172bd7 = Math['ceil']((_0x5b4e2b + 0x1) * _0x5b5ada['MAP']['chunkSize'] / _0x5b5ada['MAP']['tileSize']);
    const _0x3abff1 = 0.5;
    const _0x25027f = _0x5b5ada['MAP']['tileSize'] - _0x3abff1 * 0x2;
    _0x5b5ada['MAP']['layers']['forEach'](_0x524bc3 => {
        const _0x5e74b2 = _0x524bc3['name'] === 'walls';
        const _0x1fd6dc = _0x524bc3['name'] === 'trees' ? _0x5bb2eb : _0x5e74b2 ? _0x46c321 || _0x14d2f7 : _0x14d2f7;
        for (let _0x5884e2 = Math['max'](0x0, _0x412eea); _0x5884e2 < Math['min'](_0x5b5ada['MAP']['rows'], _0x172bd7); _0x5884e2++) {
            for (let _0x3638b1 = Math['max'](0x0, _0x2b8321); _0x3638b1 < Math['min'](_0x5b5ada['MAP']['columns'], _0x4d10e4); _0x3638b1++) {
                let _0x218e57 = _0x524bc3['data'][_0x5884e2 * _0x5b5ada['MAP']['columns'] + _0x3638b1];
                if (_0x524bc3['name'] === 'floor2' && _0x5b5ada['MAP']['doors'] && _0x5b5ada['MAP']['doors'][_0x5884e2 * _0x5b5ada['MAP']['columns'] + _0x3638b1]) {
                    _0x218e57 = 0x2;
                }
                if (_0x218e57 > 0x0) {
                    const _0xed6eb1 = _0x218e57 - 0x1;
                    const _0x4b798a = _0xed6eb1 % _0x5b5ada['MAP']['tilesetCols'] * _0x5b5ada['MAP']['tileSize'] + _0x3abff1;
                    const _0xce3669 = Math['floor'](_0xed6eb1 / _0x5b5ada['MAP']['tilesetCols']) * _0x5b5ada['MAP']['tileSize'] + _0x3abff1;
                    const _0x11854f = _0x3638b1 * _0x5b5ada['MAP']['tileSize'] - _0x1df151 * _0x5b5ada['MAP']['chunkSize'];
                    const _0x1ede27 = _0x5884e2 * _0x5b5ada['MAP']['tileSize'] - _0x5b4e2b * _0x5b5ada['MAP']['chunkSize'];
                    if (_0x218e57 === 0x4) {
                        const _0x2fc9d6 = 0x1;
                        const _0x50c1a7 = _0x2fc9d6 % _0x5b5ada['MAP']['tilesetCols'] * _0x5b5ada['MAP']['tileSize'] + _0x3abff1;
                        const _0x9e607a = Math['floor'](_0x2fc9d6 / _0x5b5ada['MAP']['tilesetCols']) * _0x5b5ada['MAP']['tileSize'] + _0x3abff1;
                        _0x14d2f7['drawImage'](_0x3ba034, _0x50c1a7, _0x9e607a, _0x25027f, _0x25027f, _0x11854f, _0x1ede27, _0x5b5ada['MAP']['tileSize'], _0x5b5ada['MAP']['tileSize']);
                        let _0x1397cc = _0x5b5ada['MAP']['doors'] ? _0x5b5ada['MAP']['doors'][_0x5884e2 * _0x5b5ada['MAP']['columns'] + _0x3638b1] : null;
                        if (!_0x1397cc) {
                            const _0x226a18 = _0x5b5ada['MAP']['layers']['find'](_0x2893ea => _0x2893ea['name'] === 'walls');
                            const _0x566e9f = _0x5884e2 > 0x0 && _0x226a18 && _0x226a18['data'][(_0x5884e2 - 0x1) * _0x5b5ada['MAP']['columns'] + _0x3638b1] > 0x0;
                            const _0x144870 = _0x5884e2 < _0x5b5ada['MAP']['rows'] - 0x1 && _0x226a18 && _0x226a18['data'][(_0x5884e2 + 0x1) * _0x5b5ada['MAP']['columns'] + _0x3638b1] > 0x0;
                            const _0x133261 = _0x3638b1 > 0x0 && _0x226a18 && _0x226a18['data'][_0x5884e2 * _0x5b5ada['MAP']['columns'] + _0x3638b1 - 0x1] > 0x0;
                            const _0x1ef4c2 = _0x3638b1 < _0x5b5ada['MAP']['columns'] - 0x1 && _0x226a18 && _0x226a18['data'][_0x5884e2 * _0x5b5ada['MAP']['columns'] + _0x3638b1 + 0x1] > 0x0;
                            if (_0x133261 && _0x1ef4c2)
                                _0x1397cc = _0x5884e2 < _0x5b5ada['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x566e9f && _0x144870)
                                _0x1397cc = _0x3638b1 < _0x5b5ada['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x538642 = 0x0;
                        if (_0x1397cc === 'bottom')
                            _0x538642 = Math['PI'] / 0x2;
                        else if (_0x1397cc === 'left')
                            _0x538642 = Math['PI'];
                        else if (_0x1397cc === 'top')
                            _0x538642 = -Math['PI'] / 0x2;
                        else if (_0x1397cc === 'right')
                            _0x538642 = 0x0;
                        if (_0x538642 !== 0x0) {
                            _0x1fd6dc['save']();
                            _0x1fd6dc['translate'](_0x11854f + _0x5b5ada['MAP']['tileSize'] / 0x2, _0x1ede27 + _0x5b5ada['MAP']['tileSize'] / 0x2);
                            _0x1fd6dc['rotate'](_0x538642);
                            _0x1fd6dc['drawImage'](_0x3ba034, _0x4b798a, _0xce3669, _0x25027f, _0x25027f, -_0x5b5ada['MAP']['tileSize'] / 0x2, -_0x5b5ada['MAP']['tileSize'] / 0x2, _0x5b5ada['MAP']['tileSize'], _0x5b5ada['MAP']['tileSize']);
                            _0x1fd6dc['restore']();
                        } else {
                            _0x1fd6dc['drawImage'](_0x3ba034, _0x4b798a, _0xce3669, _0x25027f, _0x25027f, _0x11854f, _0x1ede27, _0x5b5ada['MAP']['tileSize'], _0x5b5ada['MAP']['tileSize']);
                        }
                    } else {
                        _0x1fd6dc['drawImage'](_0x3ba034, _0x4b798a, _0xce3669, _0x25027f, _0x25027f, _0x11854f, _0x1ede27, _0x5b5ada['MAP']['tileSize'], _0x5b5ada['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x1616ea() {
    _0x3ba034['crossOrigin'] = 'Anonymous';
    _0x3ba034['onload'] = () => {
        _0x5b5ada['MAP']['tilesetCols'] = 0x3;
        _0x49412b();
    };
    _0x3ba034['onerror'] = () => {
        _0x5b5ada['MAP']['tilesetCols'] = 0x1;
        _0x49412b();
    };
    _0x3ba034['src'] = 'assets/tilesheet.png';
    _0x60f0a2['crossOrigin'] = 'Anonymous';
    _0x60f0a2['onload'] = _0x49412b;
    _0x60f0a2['onerror'] = () => {
        _0x49412b();
    };
    _0x60f0a2['src'] = 'assets/center.png';
    _0x417568['crossOrigin'] = 'Anonymous';
    _0x417568['onload'] = _0x49412b;
    _0x417568['onerror'] = () => {
        _0x49412b();
    };
    _0x417568['src'] = 'assets/table.png';
}
function _0x49412b() {
    _0x5b5ada['SYSTEM']['assetsLoaded']++;
    if (_0x5b5ada['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x198efa();
    }
}
function _0x15c7f0(_0x334fc1, _0x566cbd) {
    if (!_0x16d7ab || !_0x17bec9)
        return;
    const _0x26c1f4 = _0x334fc1 / _0x5b5ada['SYSTEM']['viewScale'] + _0x5b5ada['CAMERA']['x'];
    const _0x1de48b = _0x566cbd / _0x5b5ada['SYSTEM']['viewScale'] + _0x5b5ada['CAMERA']['y'];
    const _0x4e77a6 = Math['floor'](_0x26c1f4 / _0x5b5ada['MAP']['tileSize']);
    const _0x40064b = Math['floor'](_0x1de48b / _0x5b5ada['MAP']['tileSize']);
    if (_0x4e77a6 >= 0x0 && _0x4e77a6 < _0x5b5ada['MAP']['columns'] && _0x40064b >= 0x0 && _0x40064b < _0x5b5ada['MAP']['rows'])
        _0x17bec9['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x5b5ada['EDITOR']['selectedLayer'],
            'col': _0x4e77a6,
            'row': _0x40064b,
            'gid': _0x5b5ada['EDITOR']['selectedTileGid']
        }));
}
function _0x138566() {
    const _0x48d2e7 = document['getElementById']('palette');
    if (!_0x48d2e7 || _0x48d2e7['children']['length'] > 0x0)
        return;
    const _0x113a32 = 0x40;
    const _0x5ee8cb = _0x3ba034;
    const _0x18e65c = document['createElement']('div');
    _0x18e65c['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x4fe416 = document['createElement']('canvas');
    _0x4fe416['width'] = 0xc0;
    _0x4fe416['height'] = 0xa0;
    _0x4fe416['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x18e65c['appendChild'](_0x4fe416);
    const _0xba46de = document['createElement']('div');
    _0xba46de['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x18e65c['appendChild'](_0xba46de);
    let _0xe62c99 = 0x0, _0x22e918 = 0x0;
    let _0x2139a8 = ![], _0x437e14 = 0x0, _0x58ea40 = 0x0, _0x291ddc = 0x0, _0xd3ce7e = 0x0;
    function _0x4787f0() {
        const _0x55eba7 = _0x4fe416['getContext']('2d');
        _0x55eba7['clearRect'](0x0, 0x0, _0x4fe416['width'], _0x4fe416['height']);
        _0x55eba7['imageSmoothingEnabled'] = ![];
        if (_0x5ee8cb['complete'] && _0x5ee8cb['naturalWidth'] > 0x0) {
            _0x55eba7['drawImage'](_0x5ee8cb, _0xe62c99, _0x22e918, _0x4fe416['width'], _0x4fe416['height'], 0x0, 0x0, _0x4fe416['width'], _0x4fe416['height']);
        }
        _0x55eba7['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x55eba7['lineWidth'] = 0x1;
        const _0x535c06 = Math['floor'](_0xe62c99 / _0x113a32);
        const _0x3d3cd3 = Math['floor'](_0x22e918 / _0x113a32);
        for (let _0x2e1763 = _0x535c06; _0x2e1763 <= _0x535c06 + Math['ceil'](_0x4fe416['width'] / _0x113a32) + 0x1; _0x2e1763++) {
            const _0x538e92 = _0x2e1763 * _0x113a32 - _0xe62c99;
            _0x55eba7['beginPath']();
            _0x55eba7['moveTo'](_0x538e92, 0x0);
            _0x55eba7['lineTo'](_0x538e92, _0x4fe416['height']);
            _0x55eba7['stroke']();
        }
        for (let _0xacdb0a = _0x3d3cd3; _0xacdb0a <= _0x3d3cd3 + Math['ceil'](_0x4fe416['height'] / _0x113a32) + 0x1; _0xacdb0a++) {
            const _0x395379 = _0xacdb0a * _0x113a32 - _0x22e918;
            _0x55eba7['beginPath']();
            _0x55eba7['moveTo'](0x0, _0x395379);
            _0x55eba7['lineTo'](_0x4fe416['width'], _0x395379);
            _0x55eba7['stroke']();
        }
    }
    function _0x27d43f() {
        const _0x3c98b0 = Math['max'](0x1, Math['ceil'](_0x5ee8cb['naturalWidth'] / _0x113a32));
        const _0x557452 = _0x5b5ada['EDITOR']['selectedTileGid'];
        if (_0x557452 <= 0x0) {
            _0xba46de['style']['display'] = 'none';
            return;
        }
        const _0x1d0cdc = _0x557452 - 0x1;
        const _0x3f5288 = _0x1d0cdc % _0x3c98b0;
        const _0x1228e1 = Math['floor'](_0x1d0cdc / _0x3c98b0);
        const _0x266d6d = _0x3f5288 * _0x113a32 - _0xe62c99;
        const _0x24ede0 = _0x1228e1 * _0x113a32 - _0x22e918;
        _0xba46de['style']['display'] = 'block';
        _0xba46de['style']['left'] = _0x266d6d + 'px';
        _0xba46de['style']['top'] = _0x24ede0 + 'px';
    }
    _0x5ee8cb['onload'] = () => {
        _0x4787f0();
        _0x27d43f();
    };
    if (_0x5ee8cb['complete'] && _0x5ee8cb['naturalWidth'] > 0x0) {
        _0x4787f0();
        _0x27d43f();
    }
    _0x18e65c['addEventListener']('mousedown', _0x51de68 => {
        if (_0x51de68['button'] === 0x0) {
            _0x2139a8 = !![];
            _0x437e14 = _0x51de68['clientX'];
            _0x58ea40 = _0x51de68['clientY'];
            _0x291ddc = _0xe62c99;
            _0xd3ce7e = _0x22e918;
            _0x18e65c['style']['cursor'] = 'grabbing';
            _0x51de68['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x4291f2 => {
        if (!_0x2139a8)
            return;
        const _0x50e0fd = _0x437e14 - _0x4291f2['clientX'];
        const _0x4dc100 = _0x58ea40 - _0x4291f2['clientY'];
        const _0x3eb874 = Math['max'](0x0, _0x5ee8cb['naturalWidth'] - _0x4fe416['width']);
        const _0x392148 = Math['max'](0x0, _0x5ee8cb['naturalHeight'] - _0x4fe416['height']);
        _0xe62c99 = Math['max'](0x0, Math['min'](_0x3eb874, _0x291ddc + _0x50e0fd));
        _0x22e918 = Math['max'](0x0, Math['min'](_0x392148, _0xd3ce7e + _0x4dc100));
        _0x4787f0();
        _0x27d43f();
    });
    window['addEventListener']('mouseup', _0x10e637 => {
        if (_0x2139a8) {
            _0x2139a8 = ![];
            _0x18e65c['style']['cursor'] = 'grab';
        }
    });
    _0x18e65c['addEventListener']('click', _0x46ad1b => {
        const _0x2832de = _0x18e65c['getBoundingClientRect']();
        const _0x5b5c08 = _0x46ad1b['clientX'] - _0x2832de['left'] + _0xe62c99;
        const _0x326e29 = _0x46ad1b['clientY'] - _0x2832de['top'] + _0x22e918;
        const _0x403349 = Math['max'](0x1, Math['ceil'](_0x5ee8cb['naturalWidth'] / _0x113a32));
        const _0x401a19 = Math['floor'](_0x5b5c08 / _0x113a32);
        const _0x370d58 = Math['floor'](_0x326e29 / _0x113a32);
        const _0x584a1a = _0x370d58 * _0x403349 + _0x401a19 + 0x1;
        _0x5b5ada['EDITOR']['selectedTileGid'] = _0x584a1a;
        _0x27d43f();
    });
    _0x48d2e7['appendChild'](_0x18e65c);
    const _0x15ec7c = document['createElement']('div');
    _0x15ec7c['className'] = 'tile-btn\x20eraser-btn';
    _0x15ec7c['title'] = 'Eraser\x20(gid\x200)';
    _0x15ec7c['onclick'] = () => {
        _0x5b5ada['EDITOR']['selectedTileGid'] = 0x0;
        _0xba46de['style']['display'] = 'none';
    };
    _0x48d2e7['appendChild'](_0x15ec7c);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x5b5ada['EDITOR']['enabled'] = !_0x5b5ada['EDITOR']['enabled'];
        const _0x2ed54a = document['getElementById']('editor-tools');
        if (_0x5b5ada['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x2ed54a['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x2ed54a['style']['display'] = 'none';
        }
    });
    const _0x3bcba8 = document['getElementById']('start-game-btn');
    if (_0x3bcba8) {
        _0x3bcba8['addEventListener']('click', () => {
            if (_0x17bec9)
                _0x17bec9['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x1fc010 = document['getElementById']('rolelist-toggle-btn');
    if (_0x1fc010) {
        let _0x560dce = 'subalignments';
        _0x1fc010['addEventListener']('click', () => {
            if (_0x560dce === 'subalignments')
                _0x560dce = 'precise';
            else if (_0x560dce === 'precise')
                _0x560dce = 'off';
            else
                _0x560dce = 'subalignments';
            _0x1fc010['innerText'] = 'Role\x20List:\x20' + _0x560dce['charAt'](0x0)['toUpperCase']() + _0x560dce['slice'](0x1);
            if (_0x17bec9)
                _0x17bec9['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x560dce
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x38c5b5 => {
        if (_0x38c5b5['id'] === 'editor-toggle-btn' || _0x38c5b5['id'] === 'start-game-btn' || _0x38c5b5['id'] === 'rolelist-toggle-btn')
            return;
        _0x38c5b5['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x370473 => _0x370473['classList']['remove']('active'));
            _0x38c5b5['classList']['add']('active');
            _0x5b5ada['EDITOR']['selectedLayer'] = _0x38c5b5['dataset']['layer'];
        });
    });
}
function _0xa5d428(_0x5f3349) {
    if (_0x17bec9)
        _0x17bec9['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x5f3349
        }));
}
function _0xc23f36(_0x2f5e10) {
    if (_0x17bec9)
        _0x17bec9['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x2f5e10
        }));
}
function _0x4a2177(_0x352c02, _0x3c6abc, _0x17e3ac, _0x28a694) {
    const _0x2a700a = document['getElementById']('admin-panel');
    if (_0x2a700a)
        _0x2a700a['remove']();
    if (_0x2a700a && _0x2a700a['dataset']['target'] === String(_0x352c02))
        return;
    const _0x5e9f75 = document['createElement']('div');
    _0x5e9f75['id'] = 'admin-panel';
    _0x5e9f75['dataset']['target'] = String(_0x352c02);
    _0x5e9f75['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x17981b = document['createElement']('div');
    _0x17981b['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x17981b['textContent'] = _0x3c6abc;
    _0x5e9f75['appendChild'](_0x17981b);
    const _0x293019 = document['createElement']('button');
    _0x293019['textContent'] = 'Kick';
    _0x293019['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x293019['onmouseenter'] = () => _0x293019['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x293019['onmouseleave'] = () => _0x293019['style']['background'] = 'transparent';
    _0x293019['onclick'] = () => {
        _0xa5d428(_0x352c02);
        _0x5e9f75['remove']();
    };
    _0x5e9f75['appendChild'](_0x293019);
    const _0x819e10 = document['createElement']('button');
    _0x819e10['textContent'] = 'Ban';
    _0x819e10['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x819e10['onmouseenter'] = () => _0x819e10['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x819e10['onmouseleave'] = () => _0x819e10['style']['background'] = 'transparent';
    _0x819e10['onclick'] = () => {
        _0xc23f36(_0x352c02);
        _0x5e9f75['remove']();
    };
    _0x5e9f75['appendChild'](_0x819e10);
    document['body']['appendChild'](_0x5e9f75);
    const _0x3d8a31 = _0x5e9f75['offsetWidth'] || 0x91;
    const _0x4c6d17 = _0x5e9f75['offsetHeight'] || 0x50;
    let _0x223496 = _0x17e3ac - _0x3d8a31;
    let _0x4d2f04 = _0x28a694;
    if (_0x223496 < 0x4)
        _0x223496 = _0x17e3ac;
    if (_0x4d2f04 + _0x4c6d17 > window['innerHeight'] - 0x4)
        _0x4d2f04 = window['innerHeight'] - _0x4c6d17 - 0x4;
    _0x5e9f75['style']['left'] = _0x223496 + 'px';
    _0x5e9f75['style']['top'] = _0x4d2f04 + 'px';
    const _0xf45184 = _0x4b0946 => {
        if (!_0x5e9f75['contains'](_0x4b0946['target'])) {
            _0x5e9f75['remove']();
            document['removeEventListener']('mousedown', _0xf45184);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0xf45184), 0x0);
}
function _0x4c3210() {
    const _0x196bd5 = document['getElementById']('leaderboard-list');
    _0x196bd5['innerHTML'] = '';
    const _0xc4b89c = document['createElement']('div');
    _0xc4b89c['className'] = 'leaderboard-entry';
    const _0x4c8370 = document['createElement']('span');
    _0x4c8370['textContent'] = _0x4c651f + (_0x16d7ab ? '\x20[🗝️]' : '');
    if (_0x49916f['has'](_0x52cb91) && !_0x4e1adb['isDead']) {
        _0x4c8370['style']['color'] = '#cc88ff';
    }
    _0xc4b89c['appendChild'](_0x4c8370);
    _0x196bd5['appendChild'](_0xc4b89c);
    for (const _0xaf684c in _0x3182c1) {
        const _0x2b77f9 = document['createElement']('div');
        _0x2b77f9['className'] = 'leaderboard-entry';
        const _0x18fb8b = document['createElement']('span');
        _0x18fb8b['textContent'] = _0x3182c1[_0xaf684c]['name'] + (_0x3182c1[_0xaf684c]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x49916f['has'](parseInt(_0xaf684c)) && !_0x3182c1[_0xaf684c]['isDead']) {
            _0x18fb8b['style']['color'] = '#cc88ff';
        }
        _0x2b77f9['appendChild'](_0x18fb8b);
        if (_0x16d7ab && !_0x3182c1[_0xaf684c]['isOwner']) {
            const _0x4fbdb8 = _0x3182c1[_0xaf684c]['id'];
            const _0x517cdf = _0x3182c1[_0xaf684c]['name'];
            _0x2b77f9['style']['cursor'] = 'context-menu';
            _0x2b77f9['addEventListener']('contextmenu', _0x51d8c1 => {
                _0x51d8c1['preventDefault']();
                _0x51d8c1['stopPropagation']();
                _0x4a2177(_0x4fbdb8, _0x517cdf, _0x51d8c1['clientX'], _0x51d8c1['clientY']);
            });
        }
        _0x196bd5['appendChild'](_0x2b77f9);
    }
}
window['addEventListener']('resize', _0x198efa);
function _0x198efa() {
    _0x3788eb['width'] = window['innerWidth'];
    _0x3788eb['height'] = window['innerHeight'];
    _0x5b5ada['SYSTEM']['viewScale'] = Math['max'](_0x3788eb['width'] / _0x3a2280, _0x3788eb['height'] / _0x1c49c3);
    _0x5b5ada['CAMERA']['width'] = _0x3788eb['width'] / _0x5b5ada['SYSTEM']['viewScale'];
    _0x5b5ada['CAMERA']['height'] = _0x3788eb['height'] / _0x5b5ada['SYSTEM']['viewScale'];
    _0x2a1632['imageSmoothingEnabled'] = ![];
}
function _0x445f37(_0x4e0ec4) {
    if (_0x4e0ec4['ctrlKey'] || _0x4e0ec4['metaKey']) {
        if (_0x4e0ec4['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x4e0ec4['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x4e0ec4['code'])) {
            _0x4e0ec4['preventDefault']();
            _0x4e0ec4['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x445f37, { 'passive': ![] });
window['addEventListener']('keydown', _0x445f37, { 'passive': ![] });
window['addEventListener']('keydown', _0x3a4500 => {
    const _0x56e544 = _0x3a4500['key']['toLowerCase']();
    if (_0x56e544 === 'tab') {
        _0x3a4500['preventDefault']();
        const _0x292544 = document['getElementById']('will-ui');
        const _0x343747 = document['getElementById']('will-input');
        if (_0x292544['style']['display'] === 'flex') {
            _0x292544['style']['display'] = 'none';
            if (_0x17bec9)
                _0x17bec9['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x343747['value']
                }));
            _0x343747['blur']();
        } else {
            _0x292544['style']['display'] = 'flex';
            _0x343747['focus']();
            for (let _0x1bd76a in _0x5b5ada['INPUTS']['keys'])
                _0x5b5ada['INPUTS']['keys'][_0x1bd76a] = ![];
        }
        return;
    }
    if (_0x3a4500['key'] === 'Enter') {
        if (_0x181d57) {
            const _0x3a6ac0 = document['getElementById']('play-btn');
            if (_0x3a6ac0)
                _0x3a6ac0['click']();
            return;
        }
        if (!_0x17bec9 || _0x17bec9['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x51f000 = document['getElementById']('chat-ui');
        const _0x37b71d = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x37b71d) {
            const _0xa184d6 = _0x37b71d['value']['trim']();
            if (_0xa184d6['length'] > 0x0) {
                _0x17bec9['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0xa184d6
                }));
            }
            _0x37b71d['value'] = '';
            _0x51f000['style']['display'] = 'none';
            _0x37b71d['blur']();
        } else {
            _0x51f000['style']['display'] = 'block';
            _0x37b71d['focus']();
            for (let _0x371160 in _0x5b5ada['INPUTS']['keys'])
                _0x5b5ada['INPUTS']['keys'][_0x371160] = ![];
        }
        _0x3a4500['preventDefault']();
        return;
    }
    if (_0x3a4500['key'] === 'Escape') {
        const _0x478d19 = document['getElementById']('guide-ui');
        if (_0x478d19 && _0x478d19['style']['display'] === 'flex') {
            _0x478d19['style']['display'] = 'none';
            return;
        }
        const _0x569df9 = document['getElementById']('ability-ui');
        if (_0x569df9 && _0x569df9['style']['display'] === 'block') {
            _0x569df9['style']['display'] = 'none';
            return;
        }
        const _0x5bfe23 = document['getElementById']('settings-panel');
        if (_0x5bfe23 && _0x5bfe23['style']['display'] === 'block') {
            _0x5bfe23['style']['display'] = 'none';
            return;
        }
        const _0x55dd36 = document['getElementById']('mayor-confirm-dialog');
        if (_0x55dd36 && _0x55dd36['style']['display'] === 'flex') {
            _0x55dd36['style']['display'] = 'none';
            return;
        }
        const _0x411e50 = document['getElementById']('target-chooser-ui');
        if (_0x411e50 && _0x411e50['style']['display'] === 'flex') {
            _0x411e50['style']['display'] = 'none';
            return;
        }
        const _0x3763b1 = document['getElementById']('chat-ui');
        const _0x5a69dc = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x5a69dc) {
            _0x5a69dc['value'] = '';
            _0x3763b1['style']['display'] = 'none';
            _0x5a69dc['blur']();
            _0x3a4500['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x5b5ada['INPUTS']['keys']['hasOwnProperty'](_0x56e544))
            _0x5b5ada['INPUTS']['keys'][_0x56e544] = !![];
        if (!_0x17bec9 || _0x17bec9['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x56e544 === 'h' && !_0x3a4500['repeat']) {
            const _0x50cc98 = document['getElementById']('guide-ui');
            if (_0x50cc98) {
                _0x50cc98['style']['display'] = _0x50cc98['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x56e544 === 't' && !_0x3a4500['repeat']) {
            if (_0x4e1adb['isDead'])
                return;
            if (_0xb09f85 === 'Mayor') {
                if (_0x49916f['has'](_0x52cb91)) {
                    _0x4ae8d5('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x2a108b = document['getElementById']('mayor-confirm-dialog');
                if (_0x2a108b)
                    _0x2a108b['style']['display'] = 'flex';
                return;
            }
            if (_0x5b5ada['GAME_STATE'] === 'NIGHT') {
                if (!_0x5b5ada['NIGHT_ABILITY_OPEN']) {
                    _0x4ae8d5('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x8b20bf = document['getElementById']('ability-ui');
                if (_0x8b20bf) {
                    if (_0x8b20bf['style']['display'] === 'block') {
                        _0x8b20bf['style']['display'] = 'none';
                    } else {
                        _0xf74723();
                        _0x8b20bf['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x5b5ada['GAME_STATE'] === 'DAY_DISCUSS' || _0x5b5ada['GAME_STATE'] === 'DAY_VOTE') {
                _0x4ae8d5('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x56e544 === 'e' && !_0x4e1adb['isDead']) {
            const _0x48bffc = Date['now']();
            if (!window['_lastDoorSend'] || _0x48bffc - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x48bffc;
                _0x17bec9['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x5a1ec3 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x3183c2 = _0x5a1ec3['key']['toLowerCase']();
        if (_0x5b5ada['INPUTS']['keys']['hasOwnProperty'](_0x3183c2))
            _0x5b5ada['INPUTS']['keys'][_0x3183c2] = ![];
    }
});
window['addEventListener']('mousemove', _0x3bdc6f => {
    _0x5b5ada['INPUTS']['mouseX'] = _0x3bdc6f['clientX'];
    _0x5b5ada['INPUTS']['mouseY'] = _0x3bdc6f['clientY'];
    if (_0x5b5ada['INPUTS']['isMouseDown'] && _0x5b5ada['EDITOR']['enabled']) {
        _0x15c7f0(_0x3bdc6f['clientX'], _0x3bdc6f['clientY']);
    }
});
window['addEventListener']('mousedown', _0x1cf634 => {
    if (_0x1cf634['target']['closest']('#editor-ui') || _0x1cf634['target']['closest']('#leaderboard-ui') || _0x1cf634['target']['closest']('#chat-log-ui') || _0x1cf634['target']['closest']('#target-chooser-ui') || _0x1cf634['target']['closest']('#guide-ui') || _0x1cf634['target']['closest']('#role-list-ui') || _0x1cf634['target']['closest']('#ability-ui') || _0x1cf634['target']['closest']('#settings-panel') || _0x1cf634['target']['closest']('#mayor-confirm-dialog') || _0x1cf634['target']['closest']('#mobile-action-bar') || _0x1cf634['target']['closest']('#mobile-top-bar') || _0x1cf634['target']['closest']('#mobile-joystick-zone') || _0x1cf634['target']['closest']('#mobile-chat-overlay') || _0x1cf634['target']['closest']('#will-ui') || _0x1cf634['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x1cf634['button'] === 0x0) {
        _0x5b5ada['INPUTS']['isMouseDown'] = !![];
        if (_0x5b5ada['EDITOR']['enabled'])
            _0x15c7f0(_0x1cf634['clientX'], _0x1cf634['clientY']);
    }
});
window['addEventListener']('mouseup', _0x5c8ecf => {
    _0x5b5ada['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x200e04 => {
    if (_0x200e04['target']['closest']('#settings-btn'))
        return;
    const _0x114acf = document['getElementById']('leaderboard-list');
    const _0x444a68 = document['getElementById']('leaderboard-toggle');
    if (_0x114acf['style']['display'] === 'none') {
        _0x114acf['style']['display'] = 'flex';
        _0x444a68['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x114acf['style']['display'] = 'none';
        _0x444a68['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x30d1e4 = document['getElementById']('close-target-btn');
if (_0x30d1e4) {
    _0x30d1e4['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x2923b8 = document['getElementById']('close-guide-btn');
if (_0x2923b8) {
    _0x2923b8['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x3e73a7 = document['getElementById']('role-list-header');
if (_0x3e73a7) {
    _0x3e73a7['addEventListener']('click', () => {
        const _0x2f2d14 = document['getElementById']('role-list-items');
        const _0x54684d = document['getElementById']('role-list-toggle');
        if (_0x2f2d14['style']['display'] === 'none') {
            _0x2f2d14['style']['display'] = 'flex';
            _0x54684d['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x2f2d14['style']['display'] = 'none';
            _0x54684d['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x1afa0f() {
    const _0xffd88f = document['getElementById']('mobile-joystick-zone');
    const _0x359705 = document['getElementById']('mobile-joystick-base');
    const _0x4049f3 = document['getElementById']('mobile-joystick-knob');
    if (_0xffd88f && _0x359705 && _0x4049f3) {
        const _0x5e5b4e = 0x3e;
        const _0x350b9e = (_0xf0cbe, _0x212f23) => {
            const _0x478bbc = _0x359705['getBoundingClientRect']();
            const _0x293418 = _0x478bbc['left'] + _0x478bbc['width'] / 0x2;
            const _0x23df18 = _0x478bbc['top'] + _0x478bbc['height'] / 0x2;
            const _0x1493e4 = _0xf0cbe - _0x293418;
            const _0x55d7df = _0x212f23 - _0x23df18;
            const _0x340c08 = Math['hypot'](_0x1493e4, _0x55d7df);
            if (_0x340c08 === 0x0) {
                _0x39c3b = 0x0;
                _0x1784b7 = 0x0;
                _0x466732 = ![];
                _0x4049f3['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x5db2e1 = Math['min'](_0x340c08, _0x5e5b4e);
            const _0x3ab5b7 = _0x1493e4 / _0x340c08 * _0x5db2e1;
            const _0x57cb44 = _0x55d7df / _0x340c08 * _0x5db2e1;
            _0x39c3b = _0x3ab5b7 / _0x5e5b4e;
            _0x1784b7 = _0x57cb44 / _0x5e5b4e;
            _0x466732 = _0x340c08 >= _0x5e5b4e * 0.75;
            _0x4049f3['style']['transform'] = 'translate(' + _0x3ab5b7 + 'px,\x20' + _0x57cb44 + 'px)';
        };
        const _0x272f1f = _0x21467e => {
            for (let _0x169aff = 0x0; _0x169aff < _0x21467e['changedTouches']['length']; _0x169aff++) {
                const _0x211562 = _0x21467e['changedTouches'][_0x169aff];
                if (_0x4ebf73 === null) {
                    _0x4ebf73 = _0x211562['identifier'];
                    _0x2e9a0e = !![];
                    _0x350b9e(_0x211562['clientX'], _0x211562['clientY']);
                    break;
                }
            }
        };
        const _0x56e9df = _0x4e0f46 => {
            for (let _0x514eb7 = 0x0; _0x514eb7 < _0x4e0f46['changedTouches']['length']; _0x514eb7++) {
                const _0x1a00c9 = _0x4e0f46['changedTouches'][_0x514eb7];
                if (_0x1a00c9['identifier'] === _0x4ebf73) {
                    _0x350b9e(_0x1a00c9['clientX'], _0x1a00c9['clientY']);
                    break;
                }
            }
        };
        const _0x341831 = _0x2e6967 => {
            for (let _0x20b598 = 0x0; _0x20b598 < _0x2e6967['changedTouches']['length']; _0x20b598++) {
                const _0x3c6f49 = _0x2e6967['changedTouches'][_0x20b598];
                if (_0x3c6f49['identifier'] === _0x4ebf73) {
                    _0x4ebf73 = null;
                    _0x2e9a0e = ![];
                    _0x39c3b = 0x0;
                    _0x1784b7 = 0x0;
                    _0x466732 = ![];
                    _0x4049f3['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0xffd88f['addEventListener']('touchstart', _0x2a027b => {
            _0x2a027b['preventDefault']();
            _0x272f1f(_0x2a027b);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x56e9df, { 'passive': !![] });
        window['addEventListener']('touchend', _0x341831, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x341831, { 'passive': !![] });
    }
    const _0x2bda6a = (_0x2f7d09, _0x2177fb) => {
        const _0x2f71a8 = _0x2f7d09 / _0x5b5ada['SYSTEM']['viewScale'];
        const _0x39604a = _0x2177fb / _0x5b5ada['SYSTEM']['viewScale'];
        const _0x4cc849 = _0x4e1adb['x'] - _0x5b5ada['CAMERA']['x'] + _0x4e1adb['width'] / 0x2;
        const _0x5f59c1 = _0x4e1adb['y'] - _0x5b5ada['CAMERA']['y'] + _0x4e1adb['height'] / 0x2;
        _0x31c969 = Math['atan2'](_0x39604a - _0x5f59c1, _0x2f71a8 - _0x4cc849);
        _0x56f140 = !![];
        _0x5b5ada['INPUTS']['mouseX'] = _0x2f7d09;
        _0x5b5ada['INPUTS']['mouseY'] = _0x2177fb;
    };
    _0x3788eb['addEventListener']('touchstart', _0x4492d2 => {
        if (_0x181d57)
            return;
        for (let _0x30ad63 = 0x0; _0x30ad63 < _0x4492d2['changedTouches']['length']; _0x30ad63++) {
            const _0x3656c4 = _0x4492d2['changedTouches'][_0x30ad63];
            if (_0x3656c4['identifier'] !== _0x4ebf73 && _0x438ee9 === null) {
                _0x438ee9 = _0x3656c4['identifier'];
                _0x2bda6a(_0x3656c4['clientX'], _0x3656c4['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x3788eb['addEventListener']('touchmove', _0x452b8b => {
        if (_0x181d57)
            return;
        for (let _0x166c11 = 0x0; _0x166c11 < _0x452b8b['changedTouches']['length']; _0x166c11++) {
            const _0x1abdd1 = _0x452b8b['changedTouches'][_0x166c11];
            if (_0x1abdd1['identifier'] === _0x438ee9) {
                _0x2bda6a(_0x1abdd1['clientX'], _0x1abdd1['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x232881 = _0x28c24d => {
        for (let _0x4a6647 = 0x0; _0x4a6647 < _0x28c24d['changedTouches']['length']; _0x4a6647++) {
            const _0x532d7a = _0x28c24d['changedTouches'][_0x4a6647];
            if (_0x532d7a['identifier'] === _0x438ee9) {
                _0x438ee9 = null;
                _0x56f140 = ![];
                break;
            }
        }
    };
    _0x3788eb['addEventListener']('touchend', _0x232881, { 'passive': !![] });
    _0x3788eb['addEventListener']('touchcancel', _0x232881, { 'passive': !![] });
    const _0x6e7e20 = document['getElementById']('mob-sprint-btn');
    if (_0x6e7e20) {
        _0x6e7e20['addEventListener']('click', _0x171381 => {
            _0x171381['stopPropagation']();
            _0x33e08b = !_0x33e08b;
            _0x6e7e20['classList']['toggle']('active', _0x33e08b);
        });
    }
    const _0x4149de = document['getElementById']('mob-interact-btn');
    if (_0x4149de) {
        _0x4149de['addEventListener']('click', _0x3be40f => {
            _0x3be40f['stopPropagation']();
            if (!_0x4e1adb['isDead']) {
                const _0x29a475 = Date['now']();
                if (!window['_lastDoorSend'] || _0x29a475 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x29a475;
                    if (_0x17bec9 && _0x17bec9['readyState'] === WebSocket['OPEN'])
                        _0x17bec9['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0xfb32bc = document['getElementById']('mob-ability-btn');
    if (_0xfb32bc) {
        _0xfb32bc['addEventListener']('click', _0x4ea3c4 => {
            _0x4ea3c4['stopPropagation']();
            if (_0x4e1adb['isDead'])
                return;
            if (_0xb09f85 === 'Mayor') {
                if (_0x49916f['has'](_0x52cb91)) {
                    _0x4ae8d5('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x322e5c = document['getElementById']('mayor-confirm-dialog');
                if (_0x322e5c)
                    _0x322e5c['style']['display'] = 'flex';
                return;
            }
            if (_0x5b5ada['GAME_STATE'] === 'NIGHT') {
                if (!_0x5b5ada['NIGHT_ABILITY_OPEN']) {
                    _0x4ae8d5('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x3de79a = document['getElementById']('ability-ui');
                if (_0x3de79a) {
                    if (_0x3de79a['style']['display'] === 'block') {
                        _0x3de79a['style']['display'] = 'none';
                    } else {
                        _0xf74723();
                        _0x3de79a['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x5b5ada['GAME_STATE'] === 'DAY_DISCUSS' || _0x5b5ada['GAME_STATE'] === 'DAY_VOTE') {
                _0x4ae8d5('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0xcb68f5 = document['getElementById']('mob-will-btn');
    const _0x1b7d5f = document['getElementById']('will-ui');
    const _0x2ee8ff = document['getElementById']('will-input');
    const _0x56bd17 = document['getElementById']('close-will-btn');
    const _0x213495 = () => {
        if (!_0x1b7d5f)
            return;
        if (_0x1b7d5f['style']['display'] === 'flex') {
            _0x1b7d5f['style']['display'] = 'none';
            if (_0x17bec9 && _0x17bec9['readyState'] === WebSocket['OPEN'] && _0x2ee8ff) {
                _0x17bec9['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x2ee8ff['value']
                }));
            }
            if (_0x2ee8ff)
                _0x2ee8ff['blur']();
        } else {
            _0x1b7d5f['style']['display'] = 'flex';
            if (_0x2ee8ff)
                _0x2ee8ff['focus']();
        }
    };
    if (_0xcb68f5)
        _0xcb68f5['addEventListener']('click', _0x18dda9 => {
            _0x18dda9['stopPropagation']();
            _0x213495();
        });
    if (_0x56bd17)
        _0x56bd17['addEventListener']('click', _0x29530b => {
            _0x29530b['stopPropagation']();
            _0x213495();
        });
    const _0xe3df1a = document['getElementById']('mob-chat-btn');
    const _0x199886 = document['getElementById']('mobile-chat-overlay');
    const _0x2a1bc4 = document['getElementById']('mobile-chat-input');
    const _0x11d2da = document['getElementById']('mobile-chat-send');
    const _0x1421fd = document['getElementById']('mobile-chat-cancel');
    const _0x1eb9c9 = () => {
        if (!_0x199886 || !_0x2a1bc4)
            return;
        _0x199886['style']['display'] = 'flex';
        _0x2a1bc4['value'] = '';
        _0x2a1bc4['focus']();
    };
    const _0x3d61fe = () => {
        if (!_0x199886 || !_0x2a1bc4)
            return;
        _0x199886['style']['display'] = 'none';
        _0x2a1bc4['blur']();
    };
    const _0x183f88 = () => {
        if (!_0x2a1bc4)
            return;
        const _0x5cf135 = _0x2a1bc4['value']['trim']();
        if (_0x5cf135['length'] > 0x0 && _0x17bec9 && _0x17bec9['readyState'] === WebSocket['OPEN']) {
            _0x17bec9['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x5cf135
            }));
        }
        _0x2a1bc4['value'] = '';
        _0x3d61fe();
    };
    if (_0xe3df1a)
        _0xe3df1a['addEventListener']('click', _0x2c1366 => {
            _0x2c1366['stopPropagation']();
            _0x1eb9c9();
        });
    if (_0x11d2da)
        _0x11d2da['addEventListener']('click', _0xfd1304 => {
            _0xfd1304['stopPropagation']();
            _0x183f88();
        });
    if (_0x1421fd)
        _0x1421fd['addEventListener']('click', _0x22eab9 => {
            _0x22eab9['stopPropagation']();
            _0x3d61fe();
        });
    if (_0x2a1bc4) {
        _0x2a1bc4['addEventListener']('keydown', _0xf48f32 => {
            if (_0xf48f32['key'] === 'Enter') {
                _0xf48f32['preventDefault']();
                _0x183f88();
            } else if (_0xf48f32['key'] === 'Escape') {
                _0x3d61fe();
            }
        });
    }
    const _0x1c2c29 = document['getElementById']('mob-top-chat');
    if (_0x1c2c29)
        _0x1c2c29['addEventListener']('click', _0x181541 => {
            _0x181541['stopPropagation']();
            _0x1eb9c9();
        });
    const _0x145f74 = document['getElementById']('mob-top-will');
    if (_0x145f74)
        _0x145f74['addEventListener']('click', _0x46fc89 => {
            _0x46fc89['stopPropagation']();
            _0x213495();
        });
    const _0x59163c = document['getElementById']('mob-top-roles');
    if (_0x59163c) {
        _0x59163c['addEventListener']('click', _0x25bf99 => {
            _0x25bf99['stopPropagation']();
            const _0x54fd9c = document['getElementById']('role-list-ui');
            const _0x5e2664 = document['getElementById']('leaderboard-ui');
            if (_0x5e2664)
                _0x5e2664['style']['display'] = 'none';
            if (_0x54fd9c)
                _0x54fd9c['style']['display'] = _0x54fd9c['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x2ea802 = document['getElementById']('mob-top-players');
    if (_0x2ea802) {
        _0x2ea802['addEventListener']('click', _0xa28fe6 => {
            _0xa28fe6['stopPropagation']();
            const _0x3d6cdb = document['getElementById']('leaderboard-ui');
            const _0x4727f6 = document['getElementById']('role-list-ui');
            if (_0x4727f6)
                _0x4727f6['style']['display'] = 'none';
            if (_0x3d6cdb)
                _0x3d6cdb['style']['display'] = _0x3d6cdb['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x11682a = document['getElementById']('mob-top-help');
    if (_0x11682a) {
        _0x11682a['addEventListener']('click', _0x52c19d => {
            _0x52c19d['stopPropagation']();
            const _0x2ead1f = document['getElementById']('guide-ui');
            if (_0x2ead1f)
                _0x2ead1f['style']['display'] = _0x2ead1f['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x352d80) {
            _0x352d80 = !![];
            _0x382a4f();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
