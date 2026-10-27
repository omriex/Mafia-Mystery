const _0x40b5a9 = {
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
let _0x240b14 = '';
function _0x2873dc(_0x579fbe, _0x375a8e) {
    const _0x2fb45c = document['getElementById']('role-list-ui');
    const _0x49bbdb = document['getElementById']('role-list-items');
    if (!_0x2fb45c || !_0x49bbdb)
        return;
    if (!_0x375a8e || _0x375a8e === 'off' || !_0x579fbe || _0x579fbe['length'] === 0x0) {
        _0x2fb45c['style']['display'] = 'none';
        return;
    }
    const _0x4bf29a = _0x375a8e + '|' + JSON['stringify'](_0x579fbe);
    if (_0x4bf29a === _0x240b14)
        return;
    _0x240b14 = _0x4bf29a;
    const _0x28b96d = document['getElementById']('role-tooltip');
    if (_0x28b96d) {
        _0x28b96d['style']['visibility'] = 'hidden';
        _0x28b96d['style']['opacity'] = '0';
    }
    _0x2fb45c['style']['display'] = 'flex';
    _0x49bbdb['innerHTML'] = '';
    _0x579fbe['forEach'](_0x14c884 => {
        const _0x25574e = document['createElement']('div');
        _0x25574e['className'] = 'role-list-entry';
        const _0x21e86d = _0x14c884['name']['includes']('Mafia') || _0x14c884['name'] === 'Skinwalker' || _0x14c884['name'] === 'Blackmailer';
        _0x25574e['classList']['add'](_0x21e86d ? 'mafia' : 'town');
        if (_0x375a8e === 'precise' && _0x14c884['isDead']) {
            _0x25574e['classList']['remove']('town', 'mafia');
            _0x25574e['classList']['add']('dead');
            _0x25574e['innerHTML'] = '<span>' + _0x14c884['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x49fa43 = _0x14c884['count'] !== undefined && _0x14c884['count'] !== null ? _0x14c884['count'] + 'x\x20' : '';
            _0x25574e['innerHTML'] = '<span>' + _0x49fa43 + _0x14c884['name'] + '</span>';
        }
        if (_0x375a8e === 'subalignments' && _0x40b5a9[_0x14c884['name']]) {
            _0x25574e['style']['cursor'] = 'pointer';
            _0x25574e['addEventListener']('mouseenter', () => {
                const _0x55289e = document['getElementById']('role-tooltip');
                if (!_0x55289e)
                    return;
                const _0x415f70 = _0x40b5a9[_0x14c884['name']]['join'](',\x20');
                _0x55289e['innerHTML'] = '';
                const _0x34c2c7 = document['createElement']('span');
                _0x34c2c7['style']['color'] = '#ffcc00';
                _0x34c2c7['textContent'] = _0x14c884['name'];
                _0x55289e['appendChild'](_0x34c2c7);
                _0x55289e['appendChild'](document['createElement']('br'));
                _0x55289e['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x415f70));
                const _0x10becb = _0x25574e['getBoundingClientRect']();
                _0x55289e['style']['left'] = _0x10becb['left'] - 0xeb + 'px';
                _0x55289e['style']['top'] = _0x10becb['top'] + 'px';
                _0x55289e['style']['display'] = 'block';
                _0x55289e['style']['visibility'] = 'visible';
                _0x55289e['style']['opacity'] = '1';
            });
            _0x25574e['addEventListener']('mouseleave', () => {
                const _0x1cf66d = document['getElementById']('role-tooltip');
                if (_0x1cf66d) {
                    _0x1cf66d['style']['display'] = 'none';
                    _0x1cf66d['style']['visibility'] = 'hidden';
                    _0x1cf66d['style']['opacity'] = '0';
                }
            });
        }
        _0x49bbdb['appendChild'](_0x25574e);
    });
}
let _0x13741d = null;
let _0x117720 = null;
const _0x580d79 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x2de396 = 'Player???';
let _0x425684 = ![];
let _0x22ad68 = {};
let _0x5a65f4 = null;
let _0x298b34 = 0x0;
let _0x44cdb4 = 0x0;
let _0xefee20 = new Set();
let _0x5a6ed3 = new Set();
let _0x1fa479 = ![];
let _0x25f405 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x4a4ba2 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x489ffe = null;
let _0x7c4a69 = 0x0;
let _0x316481 = 0x0;
let _0x1624d2 = ![];
let _0x21c45e = ![];
let _0x210beb = 0x0;
let _0x358dd7 = null;
let _0x4d18ff = ![];
let _0x2ad38 = 0x0;
let _0x8f60a1 = 0x0;
const _0x1fc0b2 = ((() => {
    const _0x11f4a3 = {
        'discussion': '/audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': '/audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': '/audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': '/audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': '/audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': '/audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x3e25ab = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x5c62bb = 0x320;
    const _0x6b6000 = {};
    const _0xa3011 = {};
    let _0x1795f1 = null;
    let _0x5b836e = _0x3e25ab === 0x0;
    let _0x28a85f = ![];
    for (const [_0x115422, _0x215118] of Object['entries'](_0x11f4a3)) {
        const _0x3e38fd = new Audio(_0x215118);
        _0x3e38fd['loop'] = !![];
        _0x3e38fd['volume'] = 0x0;
        _0x3e38fd['preload'] = 'auto';
        _0x6b6000[_0x115422] = _0x3e38fd;
        _0xa3011[_0x115422] = null;
    }
    const _0x4e4efd = _0x4b4720 => Math['min'](0x1, Math['max'](0x0, _0x4b4720));
    function _0x55c692(_0x3333b2) {
        if (_0xa3011[_0x3333b2] !== null) {
            cancelAnimationFrame(_0xa3011[_0x3333b2]);
            _0xa3011[_0x3333b2] = null;
        }
    }
    function _0x22cbaf(_0x4c6583, _0x5616a, _0x1c63ad, _0x2e4270, _0x17e910) {
        _0x55c692(_0x4c6583);
        const _0x1acf64 = _0x6b6000[_0x4c6583];
        const _0x21488e = performance['now']();
        const _0x50f374 = _0x163b7f => {
            const _0x305ff5 = _0x4e4efd((_0x163b7f - _0x21488e) / _0x2e4270);
            const _0x4a0eab = _0x4e4efd(_0x5616a + (_0x1c63ad - _0x5616a) * _0x305ff5);
            _0x1acf64['volume'] = _0x5b836e ? 0x0 : _0x4a0eab;
            if (_0x305ff5 < 0x1) {
                _0xa3011[_0x4c6583] = requestAnimationFrame(_0x50f374);
            } else {
                _0xa3011[_0x4c6583] = null;
                _0x1acf64['volume'] = _0x5b836e ? 0x0 : _0x4e4efd(_0x1c63ad);
                if (_0x17e910)
                    _0x17e910();
            }
        };
        _0xa3011[_0x4c6583] = requestAnimationFrame(_0x50f374);
    }
    function _0x267946(_0x48d284) {
        const _0x5edfd2 = _0x48d284['play']();
        if (_0x5edfd2 && _0x5edfd2['catch']) {
            _0x5edfd2['catch'](() => {
                if (!_0x28a85f) {
                    const _0x37b306 = () => {
                        _0x28a85f = !![];
                        _0x48d284['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x37b306);
                        document['removeEventListener']('keydown', _0x37b306);
                        document['removeEventListener']('touchstart', _0x37b306);
                    };
                    document['addEventListener']('click', _0x37b306, { 'once': !![] });
                    document['addEventListener']('keydown', _0x37b306, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x37b306, { 'once': !![] });
                }
            });
        }
    }
    function _0x422d60(_0x319def) {
        if (!_0x11f4a3[_0x319def])
            return;
        if (_0x1795f1 === _0x319def)
            return;
        const _0x2f5f45 = _0x1795f1;
        _0x1795f1 = _0x319def;
        const _0x59c65a = _0x6b6000[_0x319def];
        _0x55c692(_0x319def);
        _0x59c65a['currentTime'] = 0x0;
        _0x59c65a['volume'] = 0x0;
        _0x267946(_0x59c65a);
        _0x22cbaf(_0x319def, 0x0, _0x3e25ab, _0x5c62bb);
        if (_0x2f5f45 && _0x6b6000[_0x2f5f45]) {
            const _0x73eb36 = _0x2f5f45;
            const _0x302651 = _0x6b6000[_0x73eb36];
            const _0x33f775 = _0x4e4efd(_0x302651['volume']);
            _0x22cbaf(_0x73eb36, _0x33f775, 0x0, _0x5c62bb, () => {
                _0x302651['pause']();
                _0x302651['currentTime'] = 0x0;
            });
        }
    }
    function _0x4aad29(_0x2fb1eb) {
        _0x3e25ab = _0x4e4efd(_0x2fb1eb);
        localStorage['setItem']('musicVolume', String(_0x3e25ab));
        if (!_0x5b836e && _0x1795f1 && _0xa3011[_0x1795f1] === null) {
            _0x6b6000[_0x1795f1]['volume'] = _0x3e25ab;
        }
    }
    function _0x1ed216() {
        return _0x3e25ab;
    }
    function _0x4d6c53(_0x21124c) {
        _0x5b836e = _0x21124c;
        for (const _0x2d85af of Object['keys'](_0x6b6000)) {
            if (_0xa3011[_0x2d85af] === null) {
                _0x6b6000[_0x2d85af]['volume'] = _0x21124c || _0x2d85af !== _0x1795f1 ? 0x0 : _0x3e25ab;
            }
        }
    }
    function _0x106be5() {
        return _0x5b836e;
    }
    function _0x270b47(_0x4efa8d) {
        if (_0x4efa8d === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x4efa8d === 'DAY_VOTE')
            return 'voting';
        if (_0x4efa8d === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x432f53(_0xf96220) {
        _0x422d60(_0x270b47(_0xf96220));
    }
    function _0x4a998d(_0x5c23a7) {
        _0x422d60(_0x5c23a7);
    }
    return {
        'play': _0x422d60,
        'onStateChange': _0x432f53,
        'onSoundEvent': _0x4a998d,
        'setVolume': _0x4aad29,
        'getVolume': _0x1ed216,
        'setMuted': _0x4d6c53,
        'isMuted': _0x106be5
    };
})());
const _0x5b0dd7 = ((() => {
    const _0x5812c1 = 0x258;
    const _0x1f4974 = 0xb4;
    const _0x5ad68d = 0x708;
    const _0x4425d0 = 0x140;
    const _0x3ce880 = 0.18;
    const _0x9f6caa = 0.95;
    const _0x5d3938 = new Audio('/audio/heartbeat.mp3');
    _0x5d3938['loop'] = ![];
    _0x5d3938['preload'] = 'auto';
    _0x5d3938['volume'] = 0x0;
    let _0x2c7911 = 0x0;
    function _0x50c1c4(_0x59a499, _0x2a5311, _0x573464) {
        return Math['min'](_0x573464, Math['max'](_0x2a5311, _0x59a499));
    }
    function _0x9bff2a(_0x31a5f6, _0x155e3a, _0x4db555) {
        return _0x31a5f6 + (_0x155e3a - _0x31a5f6) * _0x4db555;
    }
    function _0x54dcaa(_0x21f022) {
        if (_0x53ac7f['GAME_STATE'] !== 'NIGHT' || _0x33402a['isDead'] || _0x5a65f4 === 'Skinwalker' || _0x5a65f4 === 'Blackmailer') {
            return;
        }
        const _0x2de7d8 = _0x33402a['x'] + 22.5;
        const _0x260540 = _0x33402a['y'] + 22.5;
        let _0x1319a5 = Infinity;
        for (const _0x4c01cb in _0x22ad68) {
            const _0x4f2556 = _0x22ad68[_0x4c01cb];
            if (!_0x4f2556['isDark'] || _0x4f2556['isDead'])
                continue;
            const _0x44aca8 = _0x4f2556['renderX'] + 22.5 - _0x2de7d8;
            const _0x51998c = _0x4f2556['renderY'] + 22.5 - _0x260540;
            const _0x53eed8 = Math['sqrt'](_0x44aca8 * _0x44aca8 + _0x51998c * _0x51998c);
            if (_0x53eed8 < _0x1319a5)
                _0x1319a5 = _0x53eed8;
        }
        if (_0x1319a5 > _0x5812c1)
            return;
        const _0x4c4004 = 0x1 - _0x50c1c4((_0x1319a5 - _0x1f4974) / (_0x5812c1 - _0x1f4974), 0x0, 0x1);
        const _0x143a22 = _0x9bff2a(_0x5ad68d, _0x4425d0, _0x4c4004);
        const _0x1b03f8 = _0x9bff2a(_0x3ce880, _0x9f6caa, _0x4c4004);
        if (_0x21f022 >= _0x2c7911) {
            _0x5d3938['currentTime'] = 0x0;
            _0x5d3938['volume'] = _0x1fc0b2['isMuted']() ? 0x0 : _0x50c1c4(_0x1b03f8 * _0x1fc0b2['getVolume']() / 0.7, 0x0, 0x1);
            _0x5d3938['play']()['catch'](() => {
            });
            _0x2c7911 = _0x21f022 + _0x143a22;
        }
    }
    return { 'tick': _0x54dcaa };
})());
function _0x12ca72() {
    const _0x4aba65 = document['getElementById']('mob-ability-btn');
    if (!_0x4aba65)
        return;
    const _0x444f72 = _0x53ac7f['GAME_STATE'] === 'NIGHT' && !_0x33402a['isDead'];
    const _0x1b7a79 = _0x5a65f4 === 'Mayor' && !_0xefee20['has'](_0x117720 || 0x0) && !_0x33402a['isDead'];
    if (_0x444f72 || _0x1b7a79) {
        _0x4aba65['style']['display'] = 'flex';
    } else {
        _0x4aba65['style']['display'] = 'none';
    }
}
function _0x4052d9() {
    const _0xa567b3 = document['getElementById']('mobile-joystick-zone');
    const _0x19822e = document['getElementById']('mobile-top-bar');
    const _0x35b688 = document['getElementById']('mobile-action-bar');
    if (!_0xa567b3 || !_0x19822e || !_0x35b688)
        return;
    if (!_0x26061b && _0x4a4ba2) {
        _0xa567b3['style']['display'] = 'flex';
        _0x19822e['style']['display'] = 'flex';
        _0x35b688['style']['display'] = 'flex';
        _0x12ca72();
    } else {
        _0xa567b3['style']['display'] = 'none';
        _0x19822e['style']['display'] = 'none';
        _0x35b688['style']['display'] = 'none';
    }
}
const _0x2a29b0 = document['getElementById']('gameCanvas');
const _0x134f7c = _0x2a29b0['getContext']('2d', { 'alpha': ![] });
const _0x378075 = 0x500;
const _0x65d2c7 = 0x2d0;
const _0x53ac7f = {
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
        'width': _0x378075,
        'height': _0x65d2c7
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
    },
    'BLOOD_SPLATTERS': [],
    'BLOOD_DROPS': [],
    'INJURED_THIS_NIGHT': {}
};
const _0x33402a = {
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
    'isBlackmailed': ![],
    '_lastBloodDropTime': 0x0
};
const _0x248d66 = new Image();
const _0x117bfc = new Image();
const _0x23eda4 = new Image();
const _0x207abd = new Image();
_0x207abd['src'] = '/assets/mayor\x20cosmetic.png';
const _0xed355d = new Image();
_0xed355d['src'] = '/assets/blood\x20splatter.png';
const _0x551cf2 = new Image();
_0x551cf2['src'] = '/assets/blood.png';
const _0x35df55 = new Image();
_0x35df55['src'] = '/assets/arrow.png';
const _0x5938fb = new Image();
_0x5938fb['src'] = '/assets/tape.png';
const _0x20bd45 = [
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
const _0x5abc0e = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x35b051 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x35b051 === 'body1.png' || _0x35b051 === 'body1')
    _0x35b051 = 'body01.png';
if (!_0x35b051['endsWith']('.png'))
    _0x35b051 += '.png';
let _0xdeb9a3 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0xdeb9a3['endsWith']('.png'))
    _0xdeb9a3 += '.png';
let _0x26061b = !![];
let _0x475f52 = null;
let _0x3393d2 = null;
let _0x24e39f = 0x3c;
let _0x2b65b1 = 0x2d;
const _0xc1c23 = {};
const _0x1ba6fa = new Image();
_0x1ba6fa['src'] = '/assets/yanito932.png';
_0xc1c23['/assets/yanito932.png'] = _0x1ba6fa;
function _0x1b20bd(_0x15d666) {
    if (!_0xc1c23[_0x15d666] || !_0xc1c23[_0x15d666]['complete'] && _0xc1c23[_0x15d666]['naturalWidth'] === 0x0 && _0xc1c23[_0x15d666]['naturalHeight'] === 0x0) {
        const _0x38858c = new Image();
        _0x38858c['src'] = _0x15d666;
        _0xc1c23[_0x15d666] = _0x38858c;
    }
    return _0xc1c23[_0x15d666];
}
function _0x11da06(_0x14a177, _0x4f6c0e, _0x4f15ec, _0x14e6b5, _0xba7c7) {
    try {
        const _0x200754 = '/assets/' + (_0x4f6c0e || 'body01.png');
        const _0x3d4a2d = _0x1b20bd(_0x200754);
        if (_0x3d4a2d['complete'] && _0x3d4a2d['naturalWidth'] > 0x0) {
            _0x14a177['drawImage'](_0x3d4a2d, -_0x14e6b5 / 0x2, -_0xba7c7 / 0x2, _0x14e6b5, _0xba7c7);
        }
        if (_0x4f15ec === null || _0x4f15ec === undefined)
            return;
        const _0x504c0a = '/assets/' + _0x4f15ec;
        const _0x3bc6a9 = _0x1b20bd(_0x504c0a);
        if (_0x3bc6a9['complete'] && _0x3bc6a9['naturalWidth'] > 0x0) {
            _0x14a177['drawImage'](_0x3bc6a9, -_0x14e6b5 / 0x2, -_0xba7c7 / 0x2, _0x14e6b5, _0xba7c7);
        }
    } catch (_0x3c2f91) {
    }
}
function _0x5b51e4() {
    const _0x48dda2 = document['getElementById']('body-skin-grid');
    const _0x2aee08 = document['getElementById']('eyes-skin-grid');
    if (!_0x48dda2 || !_0x2aee08)
        return;
    _0x48dda2['innerHTML'] = '';
    _0x20bd45['forEach'](_0x2288cc => {
        const _0x510baf = document['createElement']('button');
        _0x510baf['className'] = 'skin-btn' + (_0x2288cc === _0x35b051 ? '\x20selected' : '');
        const _0x5976fb = document['createElement']('img');
        _0x5976fb['src'] = '/assets/' + _0x2288cc;
        _0x510baf['appendChild'](_0x5976fb);
        _0x510baf['onclick'] = () => {
            _0x35b051 = _0x2288cc;
            localStorage['setItem']('selectedBody', _0x2288cc);
            _0x48dda2['querySelectorAll']('.skin-btn')['forEach'](_0xccf725 => _0xccf725['classList']['remove']('selected'));
            _0x510baf['classList']['add']('selected');
        };
        _0x48dda2['appendChild'](_0x510baf);
    });
    _0x2aee08['innerHTML'] = '';
    _0x5abc0e['forEach'](_0x493269 => {
        const _0x25df47 = document['createElement']('button');
        _0x25df47['className'] = 'skin-btn' + (_0x493269 === _0xdeb9a3 ? '\x20selected' : '');
        const _0xab99fd = document['createElement']('img');
        _0xab99fd['src'] = '/assets/' + _0x493269;
        _0x25df47['appendChild'](_0xab99fd);
        _0x25df47['onclick'] = () => {
            _0xdeb9a3 = _0x493269;
            localStorage['setItem']('selectedEyes', _0x493269);
            _0x2aee08['querySelectorAll']('.skin-btn')['forEach'](_0x41882f => _0x41882f['classList']['remove']('selected'));
            _0x25df47['classList']['add']('selected');
        };
        _0x2aee08['appendChild'](_0x25df47);
    });
}
function _0x2e5472(_0x309109) {
    if (!_0x53ac7f['MAP']['columns'] || !_0x53ac7f['CAMERA']['width'])
        return;
    const _0x3688ac = Math['max'](0x0, _0x53ac7f['MAP']['columns'] * _0x53ac7f['MAP']['tileSize'] - _0x53ac7f['CAMERA']['width']);
    const _0x979cc4 = Math['max'](0x0, _0x53ac7f['MAP']['rows'] * _0x53ac7f['MAP']['tileSize'] - _0x53ac7f['CAMERA']['height']);
    if (_0x475f52 === null || _0x3393d2 === null) {
        _0x475f52 = _0x3688ac / 0x2;
        _0x3393d2 = _0x979cc4 / 0x2;
    }
    _0x475f52 += _0x24e39f * _0x309109;
    _0x3393d2 += _0x2b65b1 * _0x309109;
    if (_0x475f52 <= 0x0) {
        _0x475f52 = 0x0;
        _0x24e39f = Math['abs'](_0x24e39f);
    } else if (_0x475f52 >= _0x3688ac) {
        _0x475f52 = _0x3688ac;
        _0x24e39f = -Math['abs'](_0x24e39f);
    }
    if (_0x3393d2 <= 0x0) {
        _0x3393d2 = 0x0;
        _0x2b65b1 = Math['abs'](_0x2b65b1);
    } else if (_0x3393d2 >= _0x979cc4) {
        _0x3393d2 = _0x979cc4;
        _0x2b65b1 = -Math['abs'](_0x2b65b1);
    }
    _0x53ac7f['CAMERA']['x'] = _0x475f52;
    _0x53ac7f['CAMERA']['y'] = _0x3393d2;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x56b77e = document['getElementById']('play-btn');
    const _0x595813 = document['getElementById']('username-input');
    const _0x5500ea = localStorage['getItem']('playerName');
    if (_0x5500ea && _0x595813) {
        _0x595813['value'] = _0x5500ea;
    }
    const _0x44de7b = () => {
        _0x1fc0b2['play']('wait');
        document['removeEventListener']('click', _0x44de7b);
        document['removeEventListener']('keydown', _0x44de7b);
        document['removeEventListener']('touchstart', _0x44de7b);
    };
    document['addEventListener']('click', _0x44de7b, { 'once': !![] });
    document['addEventListener']('keydown', _0x44de7b, { 'once': !![] });
    document['addEventListener']('touchstart', _0x44de7b, { 'once': !![] });
    if (_0x56b77e) {
        _0x56b77e['addEventListener']('click', () => {
            const _0x127f89 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x3efc64 = window['_FB'] && window['_FB']['_userData'];
            let _0x5e3d14 = !![];
            if (_0x127f89 && _0x3efc64 && _0x3efc64['username']) {
                _0x2de396 = _0x3efc64['username'];
                _0x5e3d14 = ![];
            } else {
                const _0x3756f9 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x2de396 = 'user' + _0x3756f9;
                _0x5e3d14 = !![];
            }
            const _0x31d3a1 = _0x5e3d14 ? 'body01.png' : _0x35b051;
            const _0x2f909b = _0x5e3d14 ? 'eyes4.png' : _0xdeb9a3;
            const _0x1773e2 = !_0x5e3d14 && _0x3efc64 && _0x3efc64['photoURL'] ? _0x3efc64['photoURL'] : '';
            const _0x38fed1 = !_0x5e3d14 && _0x127f89 ? _0x127f89['uid'] : '';
            localStorage['setItem']('playerName', _0x2de396);
            _0x26061b = ![];
            _0x53ac7f['CAMERA']['x'] = null;
            _0x53ac7f['CAMERA']['y'] = null;
            const _0x514d5e = document['getElementById']('main-menu-ui');
            if (_0x514d5e)
                _0x514d5e['style']['display'] = 'none';
            const _0x4cd5bc = document['getElementById']('chat-log-wrap');
            if (_0x4cd5bc)
                _0x4cd5bc['classList']['add']('active');
            const _0x31aa6e = document['getElementById']('chat-log-ui');
            if (_0x31aa6e)
                _0x31aa6e['style']['display'] = 'flex';
            const _0x1f0627 = document['getElementById']('controls-hint');
            if (_0x1f0627 && !_0x4a4ba2)
                _0x1f0627['style']['display'] = 'block';
            _0x4052d9();
            if (_0x4a4ba2) {
                const _0x4329f2 = document['getElementById']('leaderboard-list');
                const _0x1a66db = document['getElementById']('leaderboard-toggle');
                if (_0x4329f2) {
                    _0x4329f2['style']['display'] = 'none';
                    if (_0x1a66db)
                        _0x1a66db['style']['transform'] = 'rotate(180deg)';
                }
                const _0x546415 = document['getElementById']('role-list-items');
                const _0x3c108d = document['getElementById']('role-list-toggle');
                if (_0x546415) {
                    _0x546415['style']['display'] = 'none';
                    if (_0x3c108d)
                        _0x3c108d['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x576c0b = !_0x5e3d14 && _0x3efc64 ? {
                'townWins': _0x3efc64['townWins'] || 0x0,
                'mafiaWins': _0x3efc64['mafiaWins'] || 0x0,
                'deaths': _0x3efc64['deaths'] || 0x0,
                'townLosses': _0x3efc64['townLosses'] || 0x0,
                'mafiaLosses': _0x3efc64['mafiaLosses'] || 0x0
            } : null;
            const _0x2d15fd = JSON['stringify']({
                'type': 'join',
                'name': _0x2de396,
                'token': _0x580d79,
                'body': _0x31d3a1,
                'eyes': _0x2f909b,
                'isGuest': _0x5e3d14,
                'uid': _0x38fed1,
                'photoURL': _0x1773e2,
                'accountStats': _0x576c0b
            });
            if (_0x13741d && _0x13741d['readyState'] === WebSocket['OPEN']) {
                _0x13741d['send'](_0x2d15fd);
            } else if (!_0x13741d || _0x13741d['readyState'] === WebSocket['CLOSED'] || _0x13741d['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x2d15fd;
                _0x4a71d8();
            }
        });
    }
    _0x5b51e4();
    _0x4a71d8();
    _0x2cb23a();
    _0x58947b();
    _0x4ed3d0();
    _0xf39d5b();
});
const _0xb22639 = [
    {
        'name': 'Investigator',
        'faction': 'Town',
        'subalignment': 'Town\x20Investigative',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Investigator</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Investigative</span>\x20role\x20whose\x20purpose\x20is\x20to\x20gather\x20information\x20about\x20players\x27\x20possible\x20roles.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>investigate</span>\x20a\x20player.\x20You\x20will\x20get\x20a\x20list\x20of\x20half\x20of\x20the\x20roles\x20in\x20the\x20game\x20at\x20the\x20end\x20of\x20the\x20night,\x20one\x20of\x20which\x20being\x20their\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>real\x20role</span>.',
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Investigator</span>\x20is\x20the\x20only\x20role\x20that\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>can\x27t\x20be\x20fooled</span>\x20by\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>,\x20as\x20any\x20other\x20future\x20roles\x20with\x20role\x20learning\x20capabilities\x20will\x20be\x20fooled\x20by\x20Skinwalker.'
        ]
    },
    {
        'name': 'Tracker',
        'faction': 'Town',
        'subalignment': 'Town\x20Investigative',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Tracker</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Investigative</span>\x20role\x20who\x20is\x20able\x20to\x20track\x20players\x20during\x20the\x20night.',
            'You\x20get\x20to\x20pick\x20one\x20player\x20per\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>.\x20You\x20will\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>track</span>\x20them\x20and\x20find\x20out\x20who\x20they\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>visit</span>\x20(aka\x20who\x20they\x20go\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>kill</span>\x20if\x20they\x27re\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>)\x20OR\x20who\x20they\x20use\x20their\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>ability</span>\x20on.'
        ]
    },
    {
        'name': 'Doctor',
        'faction': 'Town',
        'subalignment': 'Town\x20Protective',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Doctor</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Protective</span>\x20role\x20whose\x20purpose\x20is\x20to\x20protect\x20important\x20town\x20members\x20from\x20being\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>attacked</span>.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>protect</span>\x20a\x20player.\x20This\x20will\x20prevent\x20them\x20from\x20being\x20visited\x20and\x20killed\x20by\x20the\x20Mafia.',
            'They\x20can\x20also\x20protect\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20who\x20is\x20currently\x20feeling\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>guilty</span>\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>get\x20rid\x20of\x20their\x20guilt</span>\x20and\x20prevent\x20them\x20from\x20dying\x20from\x20it.'
        ]
    },
    {
        'name': 'Archer',
        'faction': 'Town',
        'subalignment': 'Town\x20Protective',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Archer</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Protective</span>\x20member\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>protect</span>\x20the\x20Town\x20and\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>injure</span>\x20any\x20evil\x20visitors.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20choose\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>watch\x20over</span>\x20a\x20player.\x20If\x20the\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20visits\x20them\x20or\x20attempts\x20to\x20blackmail\x20them,\x20they\x20will\x20fail\x20and\x20be\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>injured</span>\x20with\x20an\x20arrow.',
            'If\x20an\x20already\x20injured\x20player\x20is\x20injured\x20again,\x20they\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>die</span>.\x20If\x20an\x20Archer\x20guards\x20a\x20Mafia\x20member,\x20the\x20Archer\x20dies.'
        ]
    },
    {
        'name': 'Vigilante',
        'faction': 'Town',
        'subalignment': 'Town\x20Killing',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Killing</span>\x20role\x20whose\x20purpose\x20is\x20to\x20shoot\x20highly\x20suspicious\x20players.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20choose\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>shoot</span>\x20a\x20player.\x20This\x20is\x20optional.\x20At\x20the\x20end\x20of\x20the\x20night,\x20the\x20person\x20you\x20picked\x20will\x20be\x20killed.',
            'If\x20you\x20kill\x20a\x20Town\x20member,\x20you\x20will\x20gain\x20guilt\x20and\x20die\x20the\x20next\x20night\x20unless\x20cured\x20by\x20a\x20Doctor.'
        ]
    },
    {
        'name': 'Escort',
        'faction': 'Town',
        'subalignment': 'Town\x20Support',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Escort</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Support</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblock</span>\x20suspicious\x20individuals.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>\x20you\x20may\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblock</span>\x20one\x20player.\x20Roleblocking\x20prevents\x20role\x20abilities\x20such\x20as\x20transforming,\x20investigating,\x20shooting,\x20or\x20blackmailing.'
        ]
    },
    {
        'name': 'Celebrity',
        'faction': 'Town',
        'subalignment': 'Town\x20Support',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Celebrity</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Support</span>\x20role\x20whose\x20purpose\x20is\x20to\x20give\x20the\x20rest\x20of\x20the\x20Town\x20a\x20hint\x20upon\x20death.',
            'When\x20the\x20Celebrity\x20dies,\x20a\x20random\x20letter\x20of\x20their\x20killer\x20will\x20be\x20revealed.\x20This\x20will\x20fail\x20if\x20the\x20Celebrity\x20is\x20roleblocked.'
        ]
    },
    {
        'name': 'Mayor',
        'faction': 'Town',
        'subalignment': 'Town\x20Support',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Mayor</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Support</span>\x20role\x20whose\x20purpose\x20is\x20to\x20control\x20discussions\x20and\x20voting.',
            'At\x20any\x20point\x20during\x20the\x20day,\x20you\x20are\x20able\x20to\x20publicly\x20reveal\x20yourself\x20as\x20the\x20Mayor.\x20Upon\x20revealing,\x20your\x20vote\x20will\x20count\x20as\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>two\x20votes</span>\x20for\x20the\x20rest\x20of\x20the\x20game,\x20and\x20you\x20get\x20a\x20top\x20hat\x20and\x20monocle.'
        ]
    },
    {
        'name': 'Skinwalker',
        'faction': 'Mafia',
        'subalignment': 'Mafia\x20Deception',
        'color': '#ff5555',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>\x20is\x20a\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia\x20Deception</span>\x20role\x20whose\x20purpose\x20is\x20to\x20offer\x20high\x20versatility\x20to\x20the\x20Mafia\x20while\x20also\x20suppressing\x20strong\x20Town\x20members.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20pick\x20an\x20alive\x20Town\x20role\x20to\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>transform</span>\x20into,\x20and\x20a\x20person\x20to\x20use\x20its\x20ability\x20on.\x20You\x20are\x20unable\x20to\x20shoot\x20players\x20as\x20Vigilante.',
            'Additionally,\x20when\x20you\x20transform\x20into\x20a\x20role,\x20any\x20player\x20with\x20that\x20role\x20will\x20fail\x20to\x20use\x20their\x20ability.'
        ]
    },
    {
        'name': 'Blackmailer',
        'faction': 'Mafia',
        'subalignment': 'Mafia\x20Support',
        'color': '#ff5555',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Blackmailer</span>\x20is\x20a\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia\x20Support</span>\x20role\x20whose\x20purpose\x20is\x20to\x20silence\x20the\x20smartest\x20players\x20of\x20the\x20Town.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>ability\x20phase</span>,\x20alongside\x20killing\x20you\x20will\x20be\x20able\x20to\x20pick\x20a\x20target\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Blackmail</span>.\x20This\x20ability\x20will\x20succeed\x20as\x20long\x20as\x20you\x20aren\x27t\x20roleblocked,\x20and\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>CANNOT</span>\x20be\x20protected\x20by\x20Doctor.',
            'Blackmailed\x20players\x20will\x20be\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>unable\x20to\x20talk\x20for\x20a\x20whole\x20day</span>.\x20Blackmailed\x20players\x20will\x20receive\x20a\x20graphical\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>red\x20tape\x20over\x20their\x20mouth</span>\x20and\x20their\x20name\x20will\x20turn\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>red</span>.\x20It\x20will\x20also\x20be\x20announced\x20in\x20chat\x20that\x20they\x20have\x20been\x20blackmailed.',
            'The\x20Blackmailer\x20is\x20allowed\x20to\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>blackmail\x20themselves</span>\x20to\x20avoid\x20Town\x20clearing\x20blackmailed\x20players.\x20If\x20your\x20blackmail\x20target\x20is\x20guarded\x20by\x20an\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Archer</span>,\x20you\x20will\x20fail\x20and\x20be\x20injured.\x20If\x20you\x20blackmail\x20AND\x20kill\x20a\x20target\x20guarded\x20by\x20Archer,\x20you\x20will\x20only\x20be\x20injured\x20once.'
        ]
    }
];
let _0x4d8f09 = 'Town';
let _0x1f2dc1 = 0x0;
function _0x9572d1() {
    const _0x5584b8 = document['getElementById']('role-index-tabs');
    const _0x25ac2b = document['getElementById']('role-index-body');
    const _0x19eb62 = document['getElementById']('main-tab-town');
    const _0x276bb3 = document['getElementById']('main-tab-mafia');
    if (!_0x5584b8 || !_0x25ac2b)
        return;
    if (_0x19eb62 && _0x276bb3) {
        _0x19eb62['classList']['toggle']('active', _0x4d8f09 === 'Town');
        _0x276bb3['classList']['toggle']('active', _0x4d8f09 === 'Mafia');
    }
    const _0x46e889 = _0xb22639['filter'](_0x30967f => _0x30967f['faction'] === _0x4d8f09);
    if (_0x1f2dc1 >= _0x46e889['length']) {
        _0x1f2dc1 = 0x0;
    }
    _0x5584b8['innerHTML'] = '';
    _0x46e889['forEach']((_0x39757b, _0x2e86da) => {
        const _0x4d5ea6 = document['createElement']('button');
        _0x4d5ea6['className'] = 'role-index-tab-btn' + (_0x39757b['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x2e86da === _0x1f2dc1 ? '\x20active' : '');
        _0x4d5ea6['textContent'] = _0x39757b['name'];
        _0x4d5ea6['addEventListener']('click', () => {
            _0x1f2dc1 = _0x2e86da;
            _0x9572d1();
        });
        _0x5584b8['appendChild'](_0x4d5ea6);
    });
    const _0x5c9c65 = _0x46e889[_0x1f2dc1] || _0x46e889[0x0];
    _0x25ac2b['innerHTML'] = '';
    const _0x4a1d0b = document['createElement']('div');
    _0x4a1d0b['className'] = 'role-index-title-row';
    const _0x244f7d = document['createElement']('span');
    _0x244f7d['className'] = 'role-index-name\x20' + (_0x5c9c65['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0x244f7d['textContent'] = _0x5c9c65['name'];
    _0x4a1d0b['appendChild'](_0x244f7d);
    const _0x3d8461 = document['createElement']('span');
    _0x3d8461['className'] = 'role-index-faction-badge\x20' + (_0x5c9c65['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x3d8461['textContent'] = _0x5c9c65['subalignment'] || _0x5c9c65['faction'];
    _0x4a1d0b['appendChild'](_0x3d8461);
    _0x25ac2b['appendChild'](_0x4a1d0b);
    _0x5c9c65['paragraphs']['forEach'](_0x21deac => {
        const _0x130ef9 = document['createElement']('p');
        _0x130ef9['className'] = 'role-index-desc-paragraph';
        _0x130ef9['innerHTML'] = _0x21deac;
        _0x25ac2b['appendChild'](_0x130ef9);
    });
}
function _0xf39d5b() {
    const _0x401b90 = document['getElementById']('role-index-btn');
    const _0x54355b = document['getElementById']('role-index-modal');
    const _0x353a1b = document['getElementById']('close-role-index-btn');
    const _0xe02803 = document['getElementById']('mob-top-index');
    const _0x3cfbe1 = document['getElementById']('main-tab-town');
    const _0x66f0ac = document['getElementById']('main-tab-mafia');
    if (_0x3cfbe1) {
        _0x3cfbe1['addEventListener']('click', () => {
            _0x4d8f09 = 'Town';
            _0x1f2dc1 = 0x0;
            _0x9572d1();
        });
    }
    if (_0x66f0ac) {
        _0x66f0ac['addEventListener']('click', () => {
            _0x4d8f09 = 'Mafia';
            _0x1f2dc1 = 0x0;
            _0x9572d1();
        });
    }
    if (_0x401b90 && _0x54355b) {
        _0x401b90['addEventListener']('click', _0x23a6fd => {
            _0x23a6fd['stopPropagation']();
            if (_0x54355b['style']['display'] === 'none' || !_0x54355b['style']['display']) {
                _0x9572d1();
                _0x54355b['style']['display'] = 'flex';
            } else {
                _0x54355b['style']['display'] = 'none';
            }
        });
    }
    if (_0x353a1b && _0x54355b) {
        _0x353a1b['addEventListener']('click', _0x77a272 => {
            _0x77a272['stopPropagation']();
            _0x54355b['style']['display'] = 'none';
        });
    }
    if (_0xe02803 && _0x54355b) {
        _0xe02803['addEventListener']('click', _0x489885 => {
            _0x489885['stopPropagation']();
            if (_0x54355b['style']['display'] === 'none' || !_0x54355b['style']['display']) {
                _0x9572d1();
                _0x54355b['style']['display'] = 'flex';
            } else {
                _0x54355b['style']['display'] = 'none';
            }
        });
    }
}
function _0x58947b() {
    const _0x24f6a8 = document['getElementById']('settings-btn');
    const _0x5e733e = document['getElementById']('settings-panel');
    const _0x46049e = document['getElementById']('close-settings-btn');
    const _0x52b313 = document['getElementById']('setting-mouse-relative');
    if (_0x52b313) {
        _0x52b313['checked'] = _0x25f405;
        _0x52b313['addEventListener']('change', () => {
            _0x25f405 = _0x52b313['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x25f405 ? 'true' : 'false');
        });
    }
    const _0x268c99 = document['getElementById']('setting-music-volume');
    const _0x35412a = document['getElementById']('setting-music-volume-display');
    function _0x5323d1(_0x4dd0a6) {
        const _0x5b955d = (Number(_0x4dd0a6['value']) - Number(_0x4dd0a6['min'])) / (Number(_0x4dd0a6['max']) - Number(_0x4dd0a6['min'])) * 0x64;
        _0x4dd0a6['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x5b955d + '%,\x20#444\x20' + _0x5b955d + '%)';
    }
    if (_0x268c99) {
        const _0x5ba395 = _0x1fc0b2['getVolume']();
        const _0x131846 = Math['round'](_0x5ba395 * 0x64);
        _0x268c99['value'] = String(_0x131846);
        if (_0x35412a)
            _0x35412a['textContent'] = _0x131846 + '%';
        _0x5323d1(_0x268c99);
        _0x268c99['addEventListener']('input', () => {
            const _0x417e35 = parseInt(_0x268c99['value'], 0xa);
            if (_0x35412a)
                _0x35412a['textContent'] = _0x417e35 + '%';
            _0x5323d1(_0x268c99);
            _0x1fc0b2['setVolume'](_0x417e35 / 0x64);
            _0x1fc0b2['setMuted'](_0x417e35 === 0x0);
        });
    }
    if (_0x24f6a8 && _0x5e733e) {
        _0x24f6a8['addEventListener']('click', _0xa3393 => {
            _0xa3393['stopPropagation']();
            _0x5e733e['style']['display'] = _0x5e733e['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x46049e && _0x5e733e) {
        _0x46049e['addEventListener']('click', () => {
            _0x5e733e['style']['display'] = 'none';
        });
    }
    const _0x98ea3 = document['getElementById']('mayor-confirm-yes');
    const _0x3c7b21 = document['getElementById']('mayor-confirm-no');
    const _0x28e1c2 = document['getElementById']('mayor-confirm-dialog');
    if (_0x98ea3 && _0x28e1c2) {
        _0x98ea3['addEventListener']('click', () => {
            if (_0x13741d && _0x13741d['readyState'] === WebSocket['OPEN']) {
                _0x13741d['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x28e1c2['style']['display'] = 'none';
        });
    }
    if (_0x3c7b21 && _0x28e1c2) {
        _0x3c7b21['addEventListener']('click', () => {
            _0x28e1c2['style']['display'] = 'none';
        });
    }
    const _0x306cae = document['getElementById']('close-ability-btn');
    if (_0x306cae) {
        _0x306cae['addEventListener']('click', () => {
            const _0x460140 = document['getElementById']('ability-ui');
            if (_0x460140)
                _0x460140['style']['display'] = 'none';
        });
    }
}
let _0x218550 = '';
function _0x17adf8(_0x22274a) {
    const _0x5784e2 = document['getElementById']('vote-tally-panel');
    const _0x4593bf = document['getElementById']('vote-tally-list');
    if (!_0x5784e2 || !_0x4593bf)
        return;
    if (_0x22274a['state'] !== 'DAY_VOTE') {
        _0x5784e2['style']['display'] = 'none';
        _0x218550 = '';
        return;
    }
    _0x5784e2['style']['display'] = 'block';
    const _0x71bc31 = {};
    for (const _0x42e472 in _0x22ad68) {
        if (!_0x22ad68[_0x42e472]['isDead'])
            _0x71bc31[_0x42e472] = 0x0;
    }
    if (_0x117720 && !_0x33402a['isDead'])
        _0x71bc31[_0x117720] = 0x0;
    const _0x212ce3 = _0x22274a['votes'] || {};
    for (const _0x5a05a9 in _0x212ce3) {
        const _0x4e48f5 = _0x212ce3[_0x5a05a9];
        const _0x417afb = _0x22274a['mayorRevealed'] && _0x22274a['mayorRevealed'][_0x5a05a9] ? 0x2 : 0x1;
        _0x71bc31[_0x4e48f5] = (_0x71bc31[_0x4e48f5] || 0x0) + _0x417afb;
    }
    let _0x478a0c = 0x0;
    const _0x7f93cd = _0x22274a['skips'] || {};
    for (const _0x52dfbf in _0x7f93cd) {
        _0x478a0c += Number(_0x7f93cd[_0x52dfbf]) || 0x1;
    }
    const _0x39589f = JSON['stringify'](_0x71bc31) + '_' + _0x478a0c + '_' + _0x33402a['isDead'];
    if (_0x39589f === _0x218550)
        return;
    _0x218550 = _0x39589f;
    _0x4593bf['innerHTML'] = '';
    for (const _0x2f99c6 in _0x71bc31) {
        const _0x49c4d8 = parseInt(_0x2f99c6, 0xa);
        const _0x107f37 = _0x49c4d8 === _0x117720 ? _0x2de396 : _0x22ad68[_0x2f99c6] ? _0x22ad68[_0x2f99c6]['name'] : 'Player\x20' + _0x2f99c6;
        const _0x43686d = document['createElement']('div');
        _0x43686d['className'] = 'vote-tally-entry';
        const _0x46c32f = document['createElement']('span');
        _0x46c32f['textContent'] = _0x107f37;
        const _0x4c4860 = document['createElement']('span');
        _0x4c4860['className'] = 'vote-count';
        _0x4c4860['textContent'] = _0x71bc31[_0x2f99c6] + '\x20vote' + (_0x71bc31[_0x2f99c6] === 0x1 ? '' : 's');
        _0x43686d['appendChild'](_0x46c32f);
        _0x43686d['appendChild'](_0x4c4860);
        if (_0x49c4d8 !== _0x117720 && !_0x33402a['isDead']) {
            _0x43686d['style']['cursor'] = 'pointer';
            _0x43686d['title'] = 'Vote\x20for\x20' + _0x107f37;
            _0x43686d['addEventListener']('click', _0x15b545 => {
                _0x15b545['stopPropagation']();
                if (_0x13741d && _0x13741d['readyState'] === WebSocket['OPEN']) {
                    _0x13741d['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x107f37
                    }));
                }
            });
        }
        _0x4593bf['appendChild'](_0x43686d);
    }
    const _0x2bda57 = document['createElement']('div');
    _0x2bda57['className'] = 'vote-tally-skip';
    _0x2bda57['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x478a0c + '</span>';
    if (!_0x33402a['isDead']) {
        _0x2bda57['style']['cursor'] = 'pointer';
        _0x2bda57['title'] = 'Click\x20to\x20skip\x20vote';
        _0x2bda57['addEventListener']('click', _0x525280 => {
            _0x525280['stopPropagation']();
            if (_0x13741d && _0x13741d['readyState'] === WebSocket['OPEN']) {
                _0x13741d['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x4593bf['appendChild'](_0x2bda57);
}
let _0x3ee06e = null;
let _0x3a89ad = null;
let _0x503d29 = null;
let _0x596e2c = null;
let _0x374e9f = null;
function _0x4ca83b() {
    if (_0x13741d && _0x13741d['readyState'] === WebSocket['OPEN']) {
        _0x13741d['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x3ee06e,
            'abilityTarget': _0x3a89ad,
            'killTarget': _0x503d29
        }));
    }
}
function _0x18ecb2() {
    if (_0x13741d && _0x13741d['readyState'] === WebSocket['OPEN']) {
        _0x13741d['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'killTarget': _0x596e2c,
            'blackmailTarget': _0x374e9f
        }));
    }
}
function _0x3ac507() {
    const _0x113167 = document['getElementById']('ability-ui-body');
    if (!_0x113167)
        return;
    _0x113167['innerHTML'] = '';
    if (_0x5a65f4 === 'Celebrity' || _0x5a65f4 === 'Mayor') {
        const _0x442c29 = document['createElement']('div');
        _0x442c29['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x442c29['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x113167['appendChild'](_0x442c29);
        return;
    }
    if (_0x5a65f4 === 'Blackmailer') {
        const _0x323f79 = document['createElement']('div');
        _0x323f79['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x323f79['innerText'] = 'Choose\x20Player\x20to\x20Blackmail:';
        _0x113167['appendChild'](_0x323f79);
        const _0x494ce7 = document['createElement']('div');
        _0x494ce7['style']['cssText'] = 'color:\x20#aaa;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
        _0x494ce7['innerText'] = 'Blackmailed\x20players\x20cannot\x20talk\x20for\x20the\x20entire\x20next\x20day.\x20You\x20may\x20blackmail\x20yourself.';
        _0x113167['appendChild'](_0x494ce7);
        const _0xf59f09 = document['createElement']('div');
        _0xf59f09['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x386c88 = document['createElement']('button');
        _0x386c88['className'] = 'layer-btn';
        _0x386c88['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x386c88['innerText'] = 'No\x20one';
        if (_0x374e9f === null)
            _0x386c88['classList']['add']('active');
        _0x386c88['onclick'] = () => {
            _0x374e9f = null;
            _0x18ecb2();
            _0x3ac507();
        };
        _0xf59f09['appendChild'](_0x386c88);
        const _0x43ea51 = document['createElement']('button');
        _0x43ea51['className'] = 'layer-btn';
        _0x43ea51['innerText'] = _0x2de396 + '\x20(Self)';
        if (_0x374e9f === _0x117720)
            _0x43ea51['classList']['add']('active');
        _0x43ea51['onclick'] = () => {
            _0x374e9f = _0x117720;
            _0x18ecb2();
            _0x3ac507();
        };
        _0xf59f09['appendChild'](_0x43ea51);
        for (const _0x13c986 in _0x22ad68) {
            const _0x20f49e = _0x22ad68[_0x13c986];
            if (_0x20f49e['isDead'])
                continue;
            const _0x2dc1f3 = document['createElement']('button');
            _0x2dc1f3['className'] = 'layer-btn';
            _0x2dc1f3['innerText'] = _0x20f49e['name'];
            if (_0x374e9f === parseInt(_0x13c986, 0xa))
                _0x2dc1f3['classList']['add']('active');
            _0x2dc1f3['onclick'] = () => {
                _0x374e9f = parseInt(_0x13c986, 0xa);
                _0x18ecb2();
                _0x3ac507();
            };
            _0xf59f09['appendChild'](_0x2dc1f3);
        }
        _0x113167['appendChild'](_0xf59f09);
        const _0x4ec970 = document['createElement']('div');
        _0x4ec970['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x4ec970['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x113167['appendChild'](_0x4ec970);
        const _0x48a2e9 = document['createElement']('div');
        _0x48a2e9['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x2cd2ef = document['createElement']('button');
        _0x2cd2ef['className'] = 'layer-btn';
        _0x2cd2ef['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x2cd2ef['innerText'] = 'No\x20one';
        if (!_0x596e2c && !_0x53ac7f['CURRENT_TARGET'])
            _0x2cd2ef['classList']['add']('active');
        _0x2cd2ef['onclick'] = () => {
            _0x596e2c = null;
            _0x53ac7f['CURRENT_TARGET'] = null;
            _0x18ecb2();
            _0x3ac507();
        };
        _0x48a2e9['appendChild'](_0x2cd2ef);
        for (const _0x4d3daf in _0x22ad68) {
            const _0xf09098 = _0x22ad68[_0x4d3daf];
            if (_0xf09098['isDead'])
                continue;
            const _0xbeffce = document['createElement']('button');
            _0xbeffce['className'] = 'layer-btn';
            _0xbeffce['innerText'] = _0xf09098['name'];
            if (_0x596e2c === parseInt(_0x4d3daf, 0xa) || _0x53ac7f['CURRENT_TARGET'] === parseInt(_0x4d3daf, 0xa))
                _0xbeffce['classList']['add']('active');
            _0xbeffce['onclick'] = () => {
                _0x596e2c = parseInt(_0x4d3daf, 0xa);
                _0x53ac7f['CURRENT_TARGET'] = parseInt(_0x4d3daf, 0xa);
                _0x18ecb2();
                _0x3ac507();
            };
            _0x48a2e9['appendChild'](_0xbeffce);
        }
        _0x113167['appendChild'](_0x48a2e9);
        return;
    }
    if (_0x5a65f4 === 'Skinwalker') {
        const _0x24b2a5 = document['createElement']('div');
        _0x24b2a5['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x24b2a5['innerText'] = 'Transform\x20into:';
        _0x113167['appendChild'](_0x24b2a5);
        const _0x5559d0 = document['createElement']('div');
        _0x5559d0['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x2c73b4 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x48e6e1 = _0x220928 => {
            if (_0x53ac7f['ROLES_IN_GAME'] && Array['isArray'](_0x53ac7f['ROLES_IN_GAME'])) {
                return _0x53ac7f['ROLES_IN_GAME']['includes'](_0x220928);
            }
            if (_0x53ac7f['ROLE_LIST_RAW'] && _0x53ac7f['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x53ac7f['ROLE_LIST_RAW']['some'](_0x190308 => _0x190308['name'] === _0x220928 && !_0x190308['isDead']);
            }
            return ![];
        };
        const _0x5c370b = [
            'None',
            ..._0x2c73b4['filter'](_0x48e6e1)
        ];
        _0x5c370b['forEach'](_0x5b1bd5 => {
            const _0x2dc0ec = document['createElement']('button');
            _0x2dc0ec['className'] = 'layer-btn';
            _0x2dc0ec['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x2dc0ec['innerText'] = _0x5b1bd5;
            const _0x1f4732 = _0x5b1bd5 === 'None' && !_0x3ee06e || _0x3ee06e === _0x5b1bd5;
            if (_0x1f4732)
                _0x2dc0ec['classList']['add']('active');
            const _0x727f89 = _0x5b1bd5 !== 'None' && _0x53ac7f['SKINWALKER_LAST_ROLE'] && _0x53ac7f['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x5b1bd5['toLowerCase']();
            if (_0x727f89) {
                _0x2dc0ec['style']['opacity'] = '0.45';
                _0x2dc0ec['style']['cursor'] = 'not-allowed';
                _0x2dc0ec['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x2dc0ec['onclick'] = () => {
                    _0x160fde('You\x20cannot\x20transform\x20into\x20' + _0x5b1bd5 + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x2dc0ec['onclick'] = () => {
                    _0x3ee06e = _0x5b1bd5 === 'None' ? null : _0x5b1bd5;
                    _0x4ca83b();
                    _0x3ac507();
                };
            }
            _0x5559d0['appendChild'](_0x2dc0ec);
        });
        _0x113167['appendChild'](_0x5559d0);
        if (_0x48e6e1('Vigilante')) {
            const _0x4e8545 = document['createElement']('div');
            _0x4e8545['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x4e8545['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x113167['appendChild'](_0x4e8545);
        }
        if (_0x3ee06e === 'Vigilante') {
            const _0x12e8b2 = document['createElement']('div');
            _0x12e8b2['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x12e8b2['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x113167['appendChild'](_0x12e8b2);
        } else if (_0x3ee06e && _0x3ee06e !== 'Celebrity') {
            const _0x470ab0 = document['createElement']('div');
            _0x470ab0['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x470ab0['innerText'] = 'Use\x20' + _0x3ee06e + '\x20ability\x20on:';
            _0x113167['appendChild'](_0x470ab0);
            const _0xf352dd = document['createElement']('div');
            _0xf352dd['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x4b7eb4 = document['createElement']('button');
            _0x4b7eb4['className'] = 'layer-btn';
            _0x4b7eb4['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x4b7eb4['innerText'] = 'No\x20one';
            if (!_0x3a89ad)
                _0x4b7eb4['classList']['add']('active');
            _0x4b7eb4['onclick'] = () => {
                _0x3a89ad = null;
                _0x4ca83b();
                _0x3ac507();
            };
            _0xf352dd['appendChild'](_0x4b7eb4);
            for (const _0x26e4aa in _0x22ad68) {
                const _0x306107 = _0x22ad68[_0x26e4aa];
                if (_0x306107['isDead'])
                    continue;
                const _0x16e9ed = document['createElement']('button');
                _0x16e9ed['className'] = 'layer-btn';
                _0x16e9ed['innerText'] = _0x306107['name'];
                if (_0x3a89ad === parseInt(_0x26e4aa, 0xa))
                    _0x16e9ed['classList']['add']('active');
                _0x16e9ed['onclick'] = () => {
                    _0x3a89ad = parseInt(_0x26e4aa, 0xa);
                    _0x4ca83b();
                    _0x3ac507();
                };
                _0xf352dd['appendChild'](_0x16e9ed);
            }
            _0x113167['appendChild'](_0xf352dd);
        }
        const _0x3e673e = document['createElement']('div');
        _0x3e673e['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x3e673e['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x113167['appendChild'](_0x3e673e);
        const _0x4e11cd = document['createElement']('div');
        _0x4e11cd['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x5b316e = document['createElement']('button');
        _0x5b316e['className'] = 'layer-btn';
        _0x5b316e['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x5b316e['innerText'] = 'No\x20one';
        if (!_0x503d29 && !_0x53ac7f['CURRENT_TARGET'])
            _0x5b316e['classList']['add']('active');
        _0x5b316e['onclick'] = () => {
            _0x503d29 = null;
            _0x53ac7f['CURRENT_TARGET'] = null;
            _0x4ca83b();
            _0x3ac507();
        };
        _0x4e11cd['appendChild'](_0x5b316e);
        for (const _0x2ff4a6 in _0x22ad68) {
            const _0x243afe = _0x22ad68[_0x2ff4a6];
            if (_0x243afe['isDead'])
                continue;
            const _0x33385f = document['createElement']('button');
            _0x33385f['className'] = 'layer-btn';
            _0x33385f['innerText'] = _0x243afe['name'];
            if (_0x503d29 === parseInt(_0x2ff4a6, 0xa) || _0x53ac7f['CURRENT_TARGET'] === parseInt(_0x2ff4a6, 0xa))
                _0x33385f['classList']['add']('active');
            _0x33385f['onclick'] = () => {
                _0x503d29 = parseInt(_0x2ff4a6, 0xa);
                _0x53ac7f['CURRENT_TARGET'] = parseInt(_0x2ff4a6, 0xa);
                _0x4ca83b();
                _0x3ac507();
            };
            _0x4e11cd['appendChild'](_0x33385f);
        }
        _0x113167['appendChild'](_0x4e11cd);
        return;
    }
    let _0xfb98dc = '';
    let _0x5afe09 = ![];
    if (_0x5a65f4 === 'Doctor') {
        _0xfb98dc = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x5afe09 = !![];
    } else if (_0x5a65f4 === 'Investigator') {
        _0xfb98dc = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x5a65f4 === 'Tracker') {
        _0xfb98dc = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x5a65f4 === 'Archer') {
        _0xfb98dc = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x5a65f4 === 'Escort') {
        _0xfb98dc = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x5a65f4 === 'Vigilante') {
        _0xfb98dc = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x1cb831 = document['createElement']('div');
    _0x1cb831['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x1cb831['innerText'] = _0xfb98dc;
    _0x113167['appendChild'](_0x1cb831);
    const _0xb70f32 = document['createElement']('div');
    _0xb70f32['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x25600e = document['createElement']('button');
    _0x25600e['className'] = 'layer-btn';
    _0x25600e['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x25600e['innerText'] = 'No\x20one';
    if (_0x53ac7f['CURRENT_TARGET'] === null)
        _0x25600e['classList']['add']('active');
    _0x25600e['onclick'] = () => {
        _0x53ac7f['CURRENT_TARGET'] = null;
        if (_0x13741d && _0x13741d['readyState'] === WebSocket['OPEN']) {
            _0x13741d['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x3ac507();
    };
    _0xb70f32['appendChild'](_0x25600e);
    for (const _0x331a6b in _0x22ad68) {
        const _0x379cbc = _0x22ad68[_0x331a6b];
        if (_0x379cbc['isDead'])
            continue;
        const _0x142f35 = document['createElement']('button');
        _0x142f35['className'] = 'layer-btn';
        _0x142f35['innerText'] = _0x379cbc['name'];
        if (_0x53ac7f['CURRENT_TARGET'] === parseInt(_0x331a6b, 0xa))
            _0x142f35['classList']['add']('active');
        _0x142f35['onclick'] = () => {
            _0x53ac7f['CURRENT_TARGET'] = parseInt(_0x331a6b, 0xa);
            if (_0x13741d && _0x13741d['readyState'] === WebSocket['OPEN']) {
                _0x13741d['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x331a6b, 0xa)
                }));
            }
            _0x3ac507();
        };
        _0xb70f32['appendChild'](_0x142f35);
    }
    if (_0x5afe09 && !_0x33402a['isDead']) {
        const _0x1880ad = document['createElement']('button');
        _0x1880ad['className'] = 'layer-btn';
        _0x1880ad['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x1880ad['innerText'] = _0x2de396 + '\x20(Self)';
        if (_0x53ac7f['CURRENT_TARGET'] === _0x117720)
            _0x1880ad['classList']['add']('active');
        _0x1880ad['onclick'] = () => {
            _0x53ac7f['CURRENT_TARGET'] = _0x117720;
            if (_0x13741d && _0x13741d['readyState'] === WebSocket['OPEN']) {
                _0x13741d['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x117720
                }));
            }
            _0x3ac507();
        };
        _0xb70f32['appendChild'](_0x1880ad);
    }
    _0x113167['appendChild'](_0xb70f32);
}
function _0x4a71d8() {
    if (_0x13741d && (_0x13741d['readyState'] === WebSocket['OPEN'] || _0x13741d['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x48cdf4 = new URLSearchParams();
    if (_0x580d79)
        _0x48cdf4['set']('token', _0x580d79);
    const _0x3b7719 = window['location']['protocol'] === 'https:';
    const _0x1f01a8 = _0x3b7719 ? 'wss:' : 'ws:';
    const _0x190947 = window['location']['host'] ? _0x1f01a8 + '//' + window['location']['host'] : 'ws://localhost:3000';
    const _0x5add92 = _0x190947 + '/?' + _0x48cdf4['toString']();
    _0x13741d = new WebSocket(_0x5add92);
    _0x13741d['onopen'] = function () {
        if (!_0x26061b && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x2dfdd5 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x3cc5f7 = window['_FB'] && window['_FB']['_userData'];
                const _0x5ea5f0 = !(_0x2dfdd5 && _0x3cc5f7 && _0x3cc5f7['username']);
                const _0x5af45e = _0x5ea5f0 ? 'body01.png' : _0x35b051;
                const _0x599258 = _0x5ea5f0 ? 'eyes4.png' : _0xdeb9a3;
                const _0x107dee = !_0x5ea5f0 && _0x3cc5f7 && _0x3cc5f7['photoURL'] ? _0x3cc5f7['photoURL'] : '';
                const _0x2b2520 = !_0x5ea5f0 && _0x2dfdd5 ? _0x2dfdd5['uid'] : '';
                const _0x29e38b = !_0x5ea5f0 && _0x3cc5f7 ? {
                    'townWins': _0x3cc5f7['townWins'] || 0x0,
                    'mafiaWins': _0x3cc5f7['mafiaWins'] || 0x0,
                    'deaths': _0x3cc5f7['deaths'] || 0x0,
                    'townLosses': _0x3cc5f7['townLosses'] || 0x0,
                    'mafiaLosses': _0x3cc5f7['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x2de396,
                    'token': _0x580d79,
                    'body': _0x5af45e,
                    'eyes': _0x599258,
                    'isGuest': _0x5ea5f0,
                    'uid': _0x2b2520,
                    'photoURL': _0x107dee,
                    'accountStats': _0x29e38b
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x13741d && _0x13741d['readyState'] === WebSocket['OPEN']) {
            _0x13741d['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x13741d['onclose'] = _0x266e41 => {
        if (_0x266e41['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x266e41['code'] === 0xfa2 || _0x266e41['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x1da33f = document['getElementById']('disconnect-overlay');
        if (!_0x1da33f) {
            _0x1da33f = document['createElement']('div');
            _0x1da33f['id'] = 'disconnect-overlay';
            _0x1da33f['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x1da33f['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Reconnecting...</div>';
            document['body']['appendChild'](_0x1da33f);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x13741d['onmessage'] = _0xc9c782 => {
        const _0x40b47f = JSON['parse'](_0xc9c782['data']);
        if (_0x40b47f['type'] === 'map_data') {
            _0x53ac7f['MAP']['tileSize'] = _0x40b47f['map']['tileSize'];
            _0x53ac7f['MAP']['columns'] = _0x40b47f['map']['columns'];
            _0x53ac7f['MAP']['rows'] = _0x40b47f['map']['rows'];
            _0x53ac7f['MAP']['layers'] = _0x40b47f['map']['layers'];
            if (_0x40b47f['map']['doors']) {
                _0x53ac7f['MAP']['doors'] = _0x40b47f['map']['doors'];
                const _0x4235b6 = _0x53ac7f['MAP']['layers']['find'](_0x43b56c => _0x43b56c['name'] === 'floor2');
                if (_0x4235b6) {
                    for (const _0x5f103a in _0x53ac7f['MAP']['doors']) {
                        _0x4235b6['data'][parseInt(_0x5f103a, 0xa)] = 0x2;
                    }
                }
            }
            if (_0x40b47f['entities'])
                _0x53ac7f['ENTITIES'] = _0x40b47f['entities'];
            _0x5363da();
            _0x53ac7f['SYSTEM']['isReady'] = !![];
            _0x381ce4();
            if (!_0x53ac7f['SYSTEM']['_gameLoopRunning']) {
                _0x53ac7f['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x520f25);
            }
            return;
        }
        if (_0x40b47f['type'] === 'init') {
            _0x117720 = _0x40b47f['id'];
            _0x26061b = ![];
            _0x4052d9();
            if (_0x4a4ba2) {
                const _0x128436 = document['getElementById']('leaderboard-list');
                const _0x244bab = document['getElementById']('leaderboard-toggle');
                if (_0x128436) {
                    _0x128436['style']['display'] = 'none';
                    if (_0x244bab)
                        _0x244bab['style']['transform'] = 'rotate(180deg)';
                }
                const _0x340711 = document['getElementById']('role-list-items');
                const _0x5e6328 = document['getElementById']('role-list-toggle');
                if (_0x340711) {
                    _0x340711['style']['display'] = 'none';
                    if (_0x5e6328)
                        _0x5e6328['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x425684 = _0x40b47f['isOwner'] || ![];
            _0x2de396 = _0x40b47f['name'] || _0x2de396;
            _0x53ac7f['MAP']['tileSize'] = _0x40b47f['map']['tileSize'];
            _0x53ac7f['MAP']['columns'] = _0x40b47f['map']['columns'];
            _0x53ac7f['MAP']['rows'] = _0x40b47f['map']['rows'];
            _0x53ac7f['MAP']['layers'] = _0x40b47f['map']['layers'];
            if (_0x40b47f['map']['doors']) {
                _0x53ac7f['MAP']['doors'] = _0x40b47f['map']['doors'];
                const _0x1620d9 = _0x53ac7f['MAP']['layers']['find'](_0x23ab97 => _0x23ab97['name'] === 'floor2');
                if (_0x1620d9) {
                    for (const _0x2f2c56 in _0x53ac7f['MAP']['doors']) {
                        _0x1620d9['data'][parseInt(_0x2f2c56, 0xa)] = 0x2;
                    }
                }
            }
            if (_0x40b47f['entities'])
                _0x53ac7f['ENTITIES'] = _0x40b47f['entities'];
            _0x5363da();
            _0x33402a['x'] = _0x53ac7f['MAP']['columns'] * _0x53ac7f['MAP']['tileSize'] / 0x2;
            _0x33402a['y'] = _0x53ac7f['MAP']['rows'] * _0x53ac7f['MAP']['tileSize'] / 0x2;
            _0x53ac7f['CAMERA']['x'] = _0x33402a['x'] + _0x33402a['width'] / 0x2 - _0x53ac7f['CAMERA']['width'] / 0x2;
            _0x53ac7f['CAMERA']['y'] = _0x33402a['y'] + _0x33402a['height'] / 0x2 - _0x53ac7f['CAMERA']['height'] / 0x2;
            if (_0x425684) {
                const _0x3da6ce = document['getElementById']('editor-ui');
                if (_0x3da6ce)
                    _0x3da6ce['style']['display'] = 'flex';
                _0x4c64de();
            }
            const _0xa5e5f = document['getElementById']('settings-btn-wrap');
            if (_0xa5e5f)
                _0xa5e5f['style']['display'] = 'block';
            const _0x10b713 = document['getElementById']('leaderboard-ui');
            if (_0x10b713)
                _0x10b713['style']['display'] = 'flex';
            const _0x30859f = document['getElementById']('role-index-btn-wrap');
            if (_0x30859f)
                _0x30859f['style']['display'] = 'block';
            const _0x5c43e6 = document['getElementById']('role-list-ui');
            if (_0x5c43e6)
                _0x5c43e6['style']['display'] = 'flex';
            _0x53ac7f['SYSTEM']['lastTime'] = performance['now']();
            _0x53ac7f['SYSTEM']['isReady'] = !![];
            _0x53b858();
            if (!_0x53ac7f['SYSTEM']['_gameLoopRunning']) {
                _0x53ac7f['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x520f25);
            }
            return;
        } else if (_0x40b47f['type'] === 'state') {
            const _0x3b55da = {};
            for (const _0x7f756e in _0x40b47f['players']) {
                if (parseInt(_0x7f756e, 0xa) === _0x117720)
                    continue;
                const _0x141076 = _0x40b47f['players'][_0x7f756e];
                const _0x4e4c3a = _0x22ad68[_0x7f756e];
                if (_0x4e4c3a) {
                    const _0x52f551 = _0x141076['x'] - _0x4e4c3a['renderX'];
                    const _0x237de9 = _0x141076['y'] - _0x4e4c3a['renderY'];
                    const _0x4f5217 = _0x52f551 * _0x52f551 + _0x237de9 * _0x237de9 > 0x78 * 0x78;
                    Object['assign'](_0x4e4c3a, _0x141076);
                    if (_0x4f5217) {
                        _0x4e4c3a['renderX'] = _0x141076['x'];
                        _0x4e4c3a['renderY'] = _0x141076['y'];
                    }
                    _0x3b55da[_0x7f756e] = _0x4e4c3a;
                } else {
                    _0x3b55da[_0x7f756e] = {
                        ..._0x141076,
                        'renderX': _0x141076['x'],
                        'renderY': _0x141076['y'],
                        'renderAngle': _0x141076['angle'] || 0x0
                    };
                }
            }
            _0x22ad68 = _0x3b55da;
            _0x337d53();
            if (_0x40b47f['players'][_0x117720]) {
                const _0x32d811 = _0x40b47f['players'][_0x117720];
                _0x33402a['chats'] = _0x32d811['chats'] || [];
                _0x33402a['isDead'] = _0x32d811['isDead'];
                _0x33402a['isBlackmailed'] = !!_0x32d811['isBlackmailed'];
                if (_0x32d811['name'])
                    _0x2de396 = _0x32d811['name'];
                _0x53b858();
                const _0x14b311 = Math['hypot'](_0x32d811['x'] - _0x33402a['x'], _0x32d811['y'] - _0x33402a['y']);
                if (_0x14b311 > 0xfa) {
                    _0x33402a['x'] = _0x32d811['x'];
                    _0x33402a['y'] = _0x32d811['y'];
                } else if (_0x14b311 > 0x50) {
                    _0x33402a['x'] += (_0x32d811['x'] - _0x33402a['x']) * 0.06;
                    _0x33402a['y'] += (_0x32d811['y'] - _0x33402a['y']) * 0.06;
                }
            }
            if (_0x40b47f['entities'])
                _0x53ac7f['ENTITIES'] = _0x40b47f['entities'];
            if (_0x40b47f['game']) {
                _0x53ac7f['GAME_STATE'] = _0x40b47f['game']['state'];
                _0x53ac7f['NIGHT_ABILITY_OPEN'] = _0x40b47f['game']['nightAbilityOpen'];
                _0x53ac7f['BLOOD_SPLATTERS'] = _0x40b47f['game']['bloodSplatters'] || [];
                _0x53ac7f['INJURED_THIS_NIGHT'] = _0x40b47f['game']['injuredThisNight'] || {};
                _0x5a6ed3['clear']();
                if (_0x40b47f['game']['blackmailedPlayers']) {
                    for (const _0x36d16e in _0x40b47f['game']['blackmailedPlayers']) {
                        _0x5a6ed3['add'](parseInt(_0x36d16e, 0xa));
                    }
                }
                if (_0x40b47f['game']['mayorRevealed']) {
                    for (const _0x1918f9 in _0x40b47f['game']['mayorRevealed']) {
                        _0xefee20['add'](parseInt(_0x1918f9, 0xa));
                    }
                }
                if (_0x53ac7f['LAST_STATE'] !== _0x53ac7f['GAME_STATE']) {
                    if (_0x53ac7f['GAME_STATE'] !== 'NIGHT') {
                        _0x53ac7f['CURRENT_TARGET'] = null;
                        _0x3ee06e = null;
                        _0x3a89ad = null;
                        _0x503d29 = null;
                        _0x596e2c = null;
                        _0x374e9f = null;
                        const _0x3dbd29 = document['getElementById']('ability-ui');
                        if (_0x3dbd29)
                            _0x3dbd29['style']['display'] = 'none';
                    }
                    if (_0x53ac7f['GAME_STATE'] === 'NIGHT') {
                        _0x33402a['chats'] = [];
                        for (const _0x2c3a1d in _0x22ad68) {
                            _0x22ad68[_0x2c3a1d]['chats'] = [];
                        }
                    }
                    _0x53ac7f['LAST_STATE'] = _0x53ac7f['GAME_STATE'];
                    _0x12ca72();
                    _0x1fc0b2['onStateChange'](_0x53ac7f['GAME_STATE']);
                }
                const _0x572e3e = document['getElementById']('phase-ui');
                if (_0x572e3e) {
                    if (_0x40b47f['game']['state'] === 'LOBBY') {
                        _0x572e3e['style']['display'] = 'none';
                    } else {
                        _0x572e3e['style']['display'] = 'block';
                    }
                    let _0x3360ec = _0x40b47f['game']['state']['replace']('_', '\x20');
                    if (_0x40b47f['game']['state'] === 'DAY_DISCUSS') {
                        _0x3360ec = 'DAY\x20' + (_0x40b47f['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        const _0x430163 = document['getElementById']('phase-timer');
                        if (_0x430163)
                            _0x430163['innerText'] = _0x40b47f['game']['timer'] + 's';
                    } else if (_0x40b47f['game']['state'] === 'DAY_VOTE') {
                        _0x3360ec = 'DAY\x20' + (_0x40b47f['game']['dayCount'] || 0x1) + '\x20VOTING';
                        const _0x8cc8cc = document['getElementById']('phase-timer');
                        if (_0x8cc8cc)
                            _0x8cc8cc['innerText'] = _0x40b47f['game']['timer'] + 's';
                    } else if (_0x40b47f['game']['state'] === 'NIGHT') {
                        const _0x3586dd = _0x40b47f['game']['dayCount'] || 0x1;
                        if (_0x40b47f['game']['nightAbilityOpen']) {
                            _0x3360ec = 'NIGHT\x20' + _0x3586dd + '\x20ABILITY\x20PHASE';
                            const _0x18a974 = _0x40b47f['game']['abilityTimer'] !== undefined ? _0x40b47f['game']['abilityTimer'] : _0x40b47f['game']['timer'];
                            const _0x14f823 = document['getElementById']('phase-timer');
                            if (_0x14f823)
                                _0x14f823['innerText'] = _0x18a974 + 's';
                        } else {
                            _0x3360ec = 'NIGHT\x20' + _0x3586dd;
                            const _0x4d923e = document['getElementById']('phase-timer');
                            if (_0x4d923e)
                                _0x4d923e['innerText'] = _0x40b47f['game']['timer'] + 's';
                        }
                    }
                    if (_0x40b47f['game']['state'] !== 'LOBBY') {
                        const _0x16cd7f = document['getElementById']('phase-name');
                        if (_0x16cd7f)
                            _0x16cd7f['innerText'] = _0x3360ec;
                    }
                }
                if (_0x40b47f['game']['state'] === 'NIGHT') {
                    const _0x1acebf = document['getElementById']('ability-timer-label');
                    if (_0x1acebf) {
                        const _0x3999a0 = _0x40b47f['game']['abilityTimer'] !== undefined ? _0x40b47f['game']['abilityTimer'] : _0x40b47f['game']['timer'];
                        _0x1acebf['innerText'] = _0x40b47f['game']['nightAbilityOpen'] ? _0x3999a0 + 's' : '';
                    }
                    if (_0x40b47f['game']['nightAbilityOpen'] && !_0x1fa479 && !_0x33402a['isDead']) {
                        _0x1fa479 = !![];
                        _0x3ac507();
                        const _0x4fa580 = document['getElementById']('ability-ui');
                        if (_0x4fa580)
                            _0x4fa580['style']['display'] = 'block';
                    }
                    if (!_0x40b47f['game']['nightAbilityOpen']) {
                        const _0x5bfa5e = document['getElementById']('ability-ui');
                        if (_0x5bfa5e && _0x5bfa5e['style']['display'] === 'block') {
                            _0x5bfa5e['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x1fa479 = ![];
                }
                if (_0x40b47f['game']['rolesInGame']) {
                    _0x53ac7f['ROLES_IN_GAME'] = _0x40b47f['game']['rolesInGame'];
                }
                if (_0x40b47f['game']['skinwalkerLastRole'] !== undefined) {
                    _0x53ac7f['SKINWALKER_LAST_ROLE'] = _0x40b47f['game']['skinwalkerLastRole'];
                }
                if (_0x40b47f['game']['state'] === 'NIGHT') {
                    const _0x240aae = document['getElementById']('will-ui');
                    if (_0x240aae && _0x240aae['style']['display'] === 'flex') {
                        _0x240aae['style']['display'] = 'none';
                        const _0x527128 = document['getElementById']('will-input');
                        if (_0x527128)
                            _0x527128['blur']();
                    }
                }
                _0x17adf8(_0x40b47f['game']);
                if (_0x40b47f['game']['roleListMode'] !== undefined) {
                    _0x53ac7f['ROLE_LIST_RAW'] = _0x40b47f['game']['roleList'] || [];
                    _0x2873dc(_0x40b47f['game']['roleList'], _0x40b47f['game']['roleListMode']);
                }
            }
        } else if (_0x40b47f['type'] === 'teleport') {
            _0x33402a['x'] = _0x40b47f['x'];
            _0x33402a['y'] = _0x40b47f['y'];
            _0x33402a['vx'] = 0x0;
            _0x33402a['vy'] = 0x0;
            _0x53ac7f['CAMERA']['x'] = null;
            if (_0x40b47f['teleportId'] !== undefined)
                _0x44cdb4 = _0x40b47f['teleportId'];
        } else if (_0x40b47f['type'] === 'bulk_teleport') {
            for (const _0x521622 in _0x40b47f['positions']) {
                const _0x6cf8ee = _0x40b47f['positions'][_0x521622];
                if (parseInt(_0x521622, 0xa) === _0x117720) {
                    _0x33402a['x'] = _0x6cf8ee['x'];
                    _0x33402a['y'] = _0x6cf8ee['y'];
                    _0x33402a['vx'] = 0x0;
                    _0x33402a['vy'] = 0x0;
                    _0x53ac7f['CAMERA']['x'] = null;
                    continue;
                }
                const _0xb78f1d = _0x22ad68[_0x521622];
                if (_0xb78f1d) {
                    _0xb78f1d['x'] = _0x6cf8ee['x'];
                    _0xb78f1d['y'] = _0x6cf8ee['y'];
                    _0xb78f1d['renderX'] = _0x6cf8ee['x'];
                    _0xb78f1d['renderY'] = _0x6cf8ee['y'];
                    _0xb78f1d['vx'] = 0x0;
                    _0xb78f1d['vy'] = 0x0;
                }
            }
        } else if (_0x40b47f['type'] === 'player_left') {
            delete _0x22ad68[_0x40b47f['id']];
            _0xefee20['delete'](parseInt(_0x40b47f['id'], 0xa));
            _0x5a6ed3['delete'](parseInt(_0x40b47f['id'], 0xa));
            _0x53b858();
        } else if (_0x40b47f['type'] === 'map_update') {
            const _0x2ff660 = _0x53ac7f['MAP']['layers']['find'](_0x1ddb33 => _0x1ddb33['name'] === _0x40b47f['layer']);
            if (_0x2ff660) {
                _0x2ff660['data'][_0x40b47f['row'] * _0x53ac7f['MAP']['columns'] + _0x40b47f['col']] = _0x40b47f['gid'];
                const _0x3b8fbc = _0x40b47f['row'] * _0x53ac7f['MAP']['columns'] + _0x40b47f['col'];
                if (_0x53ac7f['MAP']['doors'] && _0x53ac7f['MAP']['doors'][_0x3b8fbc]) {
                    const _0x28f743 = _0x53ac7f['MAP']['layers']['find'](_0x212549 => _0x212549['name'] === 'floor2');
                    if (_0x28f743)
                        _0x28f743['data'][_0x3b8fbc] = 0x2;
                }
                const _0x21a9ce = Math['floor'](_0x40b47f['col'] * _0x53ac7f['MAP']['tileSize'] / _0x53ac7f['MAP']['chunkSize']);
                const _0x4f9315 = Math['floor'](_0x40b47f['row'] * _0x53ac7f['MAP']['tileSize'] / _0x53ac7f['MAP']['chunkSize']);
                _0x1d54a7(_0x21a9ce, _0x4f9315);
            }
        } else if (_0x40b47f['type'] === 'role_assign') {
            _0x5a65f4 = _0x40b47f['role'];
            _0x33402a['isDead'] = _0x5a65f4 === 'Spectator';
            _0xefee20['clear']();
            _0x5a6ed3['clear']();
            _0x53ac7f['CURRENT_TARGET'] = null;
            _0x3ee06e = null;
            _0x3a89ad = null;
            _0x503d29 = null;
            _0x596e2c = null;
            _0x374e9f = null;
            _0x1fa479 = ![];
            const _0x368c45 = document['getElementById']('ability-ui');
            if (_0x368c45)
                _0x368c45['style']['display'] = 'none';
            const _0x1637b7 = document['getElementById']('role-ui');
            if (_0x1637b7)
                _0x1637b7['style']['display'] = 'block';
            const _0xe8d3d1 = document['getElementById']('my-role-name');
            if (_0xe8d3d1)
                _0xe8d3d1['innerText'] = _0x5a65f4 || '';
            _0x12ca72();
            _0x160fde(_0x5a65f4 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x5a65f4, !![]);
            let _0x48f2f5 = '';
            if (_0x5a65f4 === 'Investigator')
                _0x48f2f5 = 'Investigate\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x5a65f4 === 'Tracker')
                _0x48f2f5 = 'Track\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x5a65f4 === 'Doctor')
                _0x48f2f5 = 'Heal\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x5a65f4 === 'Archer')
                _0x48f2f5 = 'Guard\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x5a65f4 === 'Escort')
                _0x48f2f5 = 'Roleblock\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x5a65f4 === 'Vigilante')
                _0x48f2f5 = 'Shoot\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x5a65f4 === 'Skinwalker')
                _0x48f2f5 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x5a65f4 === 'Blackmailer')
                _0x48f2f5 = 'Choose\x20your\x20blackmail\x20target\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x5a65f4 === 'Celebrity')
                _0x48f2f5 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x5a65f4 === 'Mayor')
                _0x48f2f5 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x160fde(_0x48f2f5, !![]);
        } else if (_0x40b47f['type'] === 'mayor_reveal') {
            _0xefee20['add'](parseInt(_0x40b47f['playerId'], 0xa));
            _0x53b858();
            _0x12ca72();
        } else if (_0x40b47f['type'] === 'rolelist_update') {
            _0x53ac7f['ROLE_LIST_RAW'] = _0x40b47f['list'] || [];
            _0x2873dc(_0x40b47f['list'], _0x40b47f['mode']);
        } else if (_0x40b47f['type'] === 'sound_event') {
            _0x1fc0b2['onSoundEvent'](_0x40b47f['track']);
        } else if (_0x40b47f['type'] === 'day_fade') {
            _0x2ad38 = 0x1;
            _0x8f60a1 = performance['now']() + 0x3e8;
        } else if (_0x40b47f['type'] === 'game_over') {
            _0x1fc0b2['onStateChange']('LOBBY');
            _0x2873dc([], 'off');
            _0x5a65f4 = null;
            _0x33402a['isDead'] = ![];
            _0x33402a['isBlackmailed'] = ![];
            _0xefee20['clear']();
            _0x5a6ed3['clear']();
            _0x53ac7f['CURRENT_TARGET'] = null;
            _0x53ac7f['BLOOD_SPLATTERS'] = [];
            _0x53ac7f['BLOOD_DROPS'] = [];
            _0x53ac7f['INJURED_THIS_NIGHT'] = {};
            _0x3ee06e = null;
            _0x3a89ad = null;
            _0x503d29 = null;
            _0x596e2c = null;
            _0x374e9f = null;
            _0x1fa479 = ![];
            const _0x525508 = document['getElementById']('role-ui');
            if (_0x525508)
                _0x525508['style']['display'] = 'none';
            const _0x268322 = document['getElementById']('ability-ui');
            if (_0x268322)
                _0x268322['style']['display'] = 'none';
            const _0x11cda1 = document['getElementById']('vote-tally-panel');
            if (_0x11cda1)
                _0x11cda1['style']['display'] = 'none';
            _0x12ca72();
            _0x160fde('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x40b47f['type'] === 'chat_log') {
            _0x160fde(_0x40b47f['sender'] + ':\x20' + _0x40b47f['text'], ![], !!_0x40b47f['isHost']);
        } else if (_0x40b47f['type'] === 'sys_chat') {
            _0x160fde(_0x40b47f['text'], !![]);
        }
    };
}
function _0x160fde(_0xb748c3, _0x676d66 = ![], _0x5a5cba = ![]) {
    const _0x5bd574 = document['getElementById']('chat-log-messages');
    const _0x5ab33a = document['getElementById']('chat-log-ui');
    if (!_0x5bd574 || !_0x5ab33a)
        return;
    const _0x59fb77 = _0x5ab33a['scrollHeight'] - _0x5ab33a['scrollTop'] - _0x5ab33a['clientHeight'] < 0x1e;
    const _0x283a4a = document['createElement']('div');
    _0x283a4a['className'] = 'chat-log-line' + (_0x676d66 ? '\x20sys-msg' : '') + (_0x5a5cba ? '\x20host-msg' : '');
    _0x283a4a['innerText'] = _0xb748c3;
    _0x5bd574['appendChild'](_0x283a4a);
    if (_0x59fb77) {
        _0x5ab33a['scrollTop'] = _0x5ab33a['scrollHeight'];
    }
    if (_0x5bd574['childElementCount'] > 0xc8) {
        _0x5bd574['removeChild'](_0x5bd574['firstChild']);
    }
}
function _0x468b6d(_0x4ab0a6, _0x10647a, _0x72f473) {
    const _0x17f5ce = document['createElement']('canvas');
    _0x17f5ce['width'] = _0x72f473;
    _0x17f5ce['height'] = _0x72f473;
    const _0x2b02b1 = _0x17f5ce['getContext']('2d');
    _0x2b02b1['imageSmoothingEnabled'] = ![];
    const _0x33473f = '/assets/' + (_0x4ab0a6 || 'body01.png');
    const _0x4a71ca = _0x1b20bd(_0x33473f);
    if (_0x4a71ca['complete'] && _0x4a71ca['naturalWidth'] > 0x0)
        _0x2b02b1['drawImage'](_0x4a71ca, 0x0, 0x0, _0x72f473, _0x72f473);
    if (_0x10647a) {
        const _0x48cd3c = '/assets/' + _0x10647a;
        const _0x2a7826 = _0x1b20bd(_0x48cd3c);
        if (_0x2a7826['complete'] && _0x2a7826['naturalWidth'] > 0x0)
            _0x2b02b1['drawImage'](_0x2a7826, 0x0, 0x0, _0x72f473, _0x72f473);
    }
    return _0x17f5ce['toDataURL']();
}
let _0x29a587 = '';
function _0x337d53() {
    const _0x216818 = document['getElementById']('chat-profile-panel');
    if (!_0x216818)
        return;
    const _0x1988b7 = [];
    if (_0x117720 !== null) {
        const _0x450565 = _0x35b051 || 'body01.png';
        const _0x2dedb1 = _0xdeb9a3 || 'eyes4.png';
        const _0x347d85 = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x1988b7['push']({
            'id': _0x117720,
            'name': _0x2de396,
            'body': _0x450565,
            'eyes': _0x2dedb1,
            'stats': _0x347d85
        });
    }
    for (const _0x166eec in _0x22ad68) {
        const _0x4d4738 = _0x22ad68[_0x166eec];
        const _0x532b9d = _0x4d4738['accountStats'] || null;
        _0x1988b7['push']({
            'id': parseInt(_0x166eec, 0xa),
            'name': _0x4d4738['name'],
            'body': _0x4d4738['body'] || 'body01.png',
            'eyes': _0x4d4738['eyes'] || 'eyes4.png',
            'stats': _0x532b9d
        });
    }
    const _0x50cf6a = _0x1988b7['map'](_0x244fd4 => _0x244fd4['id'] + '_' + _0x244fd4['name'] + '_' + _0x244fd4['body'] + '_' + _0x244fd4['eyes'] + '_' + JSON['stringify'](_0x244fd4['stats']))['join']('|');
    if (_0x50cf6a === _0x29a587)
        return;
    _0x29a587 = _0x50cf6a;
    _0x216818['innerHTML'] = '';
    let _0x1011f4 = ![];
    for (const _0x59ad97 of _0x1988b7) {
        _0x1011f4 = !![];
        const _0x3bc8a0 = _0x468b6d(_0x59ad97['body'], _0x59ad97['eyes'], 0x20);
        const _0x209846 = document['createElement']('div');
        _0x209846['className'] = 'chat-pfp-entry';
        const _0x55bc39 = document['createElement']('img');
        _0x55bc39['src'] = _0x3bc8a0;
        _0x55bc39['alt'] = _0x59ad97['name'];
        _0x209846['appendChild'](_0x55bc39);
        const _0x8e7f1f = document['createElement']('div');
        _0x8e7f1f['className'] = 'chat-pfp-tooltip';
        let _0x1c46e6 = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x59ad97['name'] + '</div>';
        const _0x210486 = (_0xb3c83c, _0x3ad691, _0xc358f3) => '<div\x20style=\x22display:flex;align-items:center;\x22><span\x20style=\x22flex:1;color:' + _0xc358f3 + ';\x22>' + _0xb3c83c + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x3ad691 + '</span></div>';
        if (_0x59ad97['stats']) {
            _0x1c46e6 += _0x210486('Town\x20Wins', _0x59ad97['stats']['townWins'] || 0x0, '#55ee77');
            _0x1c46e6 += _0x210486('Mafia\x20Wins', _0x59ad97['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x1c46e6 += _0x210486('Deaths', _0x59ad97['stats']['deaths'] || 0x0, '#aaa');
            _0x1c46e6 += _0x210486('Town\x20Losses', _0x59ad97['stats']['townLosses'] || 0x0, '#6688aa');
            _0x1c46e6 += _0x210486('Mafia\x20Losses', _0x59ad97['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x1c46e6 += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x8e7f1f['innerHTML'] = _0x1c46e6;
        _0x209846['appendChild'](_0x8e7f1f);
        _0x216818['appendChild'](_0x209846);
    }
    const _0xd4bd2c = document['getElementById']('chat-log-wrap');
    if (_0xd4bd2c) {
        if (_0x1011f4) {
            _0xd4bd2c['classList']['add']('has-profiles');
            _0x216818['style']['display'] = 'flex';
        } else {
            _0xd4bd2c['classList']['remove']('has-profiles');
            _0x216818['style']['display'] = 'none';
        }
    }
}
let _0x19e324 = -0x1, _0xb2c377 = -0x1, _0x3dd06c = -0x1, _0x666a60 = 0x0;
function _0x4f95a9() {
    if (!_0x117720 || !_0x13741d || _0x13741d['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x57344b = performance['now']();
    const _0x5bf225 = _0x57344b - _0x666a60;
    const _0x4d4872 = Math['abs'](_0x33402a['x'] - _0x19e324) > 0.05 || Math['abs'](_0x33402a['y'] - _0xb2c377) > 0.05 || Math['abs'](_0x33402a['angle'] - _0x3dd06c) > 0.02;
    if (!_0x4d4872 && _0x5bf225 < 0xc8)
        return;
    if (_0x5bf225 < 0x19)
        return;
    _0x666a60 = _0x57344b;
    _0x19e324 = _0x33402a['x'];
    _0xb2c377 = _0x33402a['y'];
    _0x3dd06c = _0x33402a['angle'];
    if (!_0x117720 || !_0x13741d || _0x13741d['readyState'] !== WebSocket['OPEN'])
        return;
    _0x13741d['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x33402a['x'],
        'y': _0x33402a['y'],
        'vx': _0x33402a['vx'],
        'vy': _0x33402a['vy'],
        'angle': _0x33402a['angle'],
        'scale': _0x33402a['scale'],
        'teleportId': _0x44cdb4,
        'clientTimestamp': Date['now']()
    }));
}
function _0x17f8cd() {
    if (_0x33402a['isDead'])
        return;
    const _0x23f41b = _0x53ac7f['MAP']['layers']['find'](_0x49b08a => _0x49b08a['name'] === 'walls');
    if (!_0x23f41b)
        return;
    const _0x31558c = _0x33402a['scale'];
    const _0x25dbfc = _0x33402a['width'] * _0x31558c / 0x2;
    for (let _0x5bca49 = 0x0; _0x5bca49 < 0x3; _0x5bca49++) {
        let _0x5941ec = _0x33402a['x'] + _0x33402a['width'] / 0x2;
        let _0x2cf05c = _0x33402a['y'] + _0x33402a['height'] / 0x2;
        const _0x315f47 = Math['floor']((_0x5941ec - _0x25dbfc) / _0x53ac7f['MAP']['tileSize']);
        const _0x56270f = Math['floor']((_0x5941ec + _0x25dbfc) / _0x53ac7f['MAP']['tileSize']);
        const _0x964933 = Math['floor']((_0x2cf05c - _0x25dbfc) / _0x53ac7f['MAP']['tileSize']);
        const _0x23b444 = Math['floor']((_0x2cf05c + _0x25dbfc) / _0x53ac7f['MAP']['tileSize']);
        for (let _0xd48f13 = _0x964933; _0xd48f13 <= _0x23b444; _0xd48f13++) {
            for (let _0x5efe5a = _0x315f47; _0x5efe5a <= _0x56270f; _0x5efe5a++) {
                if (_0x5efe5a < 0x0 || _0x5efe5a >= _0x53ac7f['MAP']['columns'] || _0xd48f13 < 0x0 || _0xd48f13 >= _0x53ac7f['MAP']['rows'])
                    continue;
                if (_0x23f41b['data'][_0xd48f13 * _0x53ac7f['MAP']['columns'] + _0x5efe5a] === 0x0)
                    continue;
                const _0x400637 = _0x5efe5a * _0x53ac7f['MAP']['tileSize'];
                const _0x197340 = _0xd48f13 * _0x53ac7f['MAP']['tileSize'];
                const _0x3ddf4d = _0x5941ec < _0x400637 ? _0x400637 : _0x5941ec > _0x400637 + _0x53ac7f['MAP']['tileSize'] ? _0x400637 + _0x53ac7f['MAP']['tileSize'] : _0x5941ec;
                const _0x5b9abd = _0x2cf05c < _0x197340 ? _0x197340 : _0x2cf05c > _0x197340 + _0x53ac7f['MAP']['tileSize'] ? _0x197340 + _0x53ac7f['MAP']['tileSize'] : _0x2cf05c;
                const _0xe31e1a = _0x5941ec - _0x3ddf4d;
                const _0x3f09d7 = _0x2cf05c - _0x5b9abd;
                const _0x547765 = Math['sqrt'](_0xe31e1a * _0xe31e1a + _0x3f09d7 * _0x3f09d7);
                if (_0x547765 < _0x25dbfc) {
                    if (_0x547765 === 0x0) {
                        const _0x564ed1 = _0x5941ec - _0x400637;
                        const _0x28fd8c = _0x400637 + _0x53ac7f['MAP']['tileSize'] - _0x5941ec;
                        const _0x51391b = _0x2cf05c - _0x197340;
                        const _0x23fd90 = _0x197340 + _0x53ac7f['MAP']['tileSize'] - _0x2cf05c;
                        const _0x1f3fa7 = Math['min'](_0x564ed1, _0x28fd8c, _0x51391b, _0x23fd90);
                        if (_0x1f3fa7 === _0x564ed1)
                            _0x5941ec = _0x400637 - _0x25dbfc;
                        else if (_0x1f3fa7 === _0x28fd8c)
                            _0x5941ec = _0x400637 + _0x53ac7f['MAP']['tileSize'] + _0x25dbfc;
                        else if (_0x1f3fa7 === _0x51391b)
                            _0x2cf05c = _0x197340 - _0x25dbfc;
                        else
                            _0x2cf05c = _0x197340 + _0x53ac7f['MAP']['tileSize'] + _0x25dbfc;
                    } else {
                        const _0x203e49 = _0x25dbfc - _0x547765;
                        _0x5941ec += _0xe31e1a / _0x547765 * _0x203e49;
                        _0x2cf05c += _0x3f09d7 / _0x547765 * _0x203e49;
                        const _0xc5f904 = _0x33402a['vx'] * (_0xe31e1a / _0x547765) + _0x33402a['vy'] * (_0x3f09d7 / _0x547765);
                        if (_0xc5f904 < 0x0) {
                            _0x33402a['vx'] -= _0xc5f904 * (_0xe31e1a / _0x547765);
                            _0x33402a['vy'] -= _0xc5f904 * (_0x3f09d7 / _0x547765);
                        }
                    }
                }
            }
        }
        _0x33402a['x'] = _0x5941ec - _0x33402a['width'] / 0x2;
        _0x33402a['y'] = _0x2cf05c - _0x33402a['height'] / 0x2;
    }
}
function _0x59849e() {
    if (_0x33402a['isDead'])
        return;
    const _0x20ef7d = _0x33402a['scale'];
    const _0x4fd3eb = _0x33402a['width'] * _0x20ef7d / 0x2;
    for (let _0x2b6c12 = 0x0; _0x2b6c12 < 0x2; _0x2b6c12++) {
        let _0x17f15d = _0x33402a['x'] + _0x33402a['width'] / 0x2;
        let _0x8919be = _0x33402a['y'] + _0x33402a['height'] / 0x2;
        for (const _0x51b485 of _0x53ac7f['ENTITIES']) {
            const _0x486eef = _0x17f15d < _0x51b485['x'] ? _0x51b485['x'] : _0x17f15d > _0x51b485['x'] + _0x51b485['w'] ? _0x51b485['x'] + _0x51b485['w'] : _0x17f15d;
            const _0x397fa5 = _0x8919be < _0x51b485['y'] ? _0x51b485['y'] : _0x8919be > _0x51b485['y'] + _0x51b485['h'] ? _0x51b485['y'] + _0x51b485['h'] : _0x8919be;
            const _0x3ec960 = _0x17f15d - _0x486eef;
            const _0x1c7413 = _0x8919be - _0x397fa5;
            const _0x4d4147 = Math['sqrt'](_0x3ec960 * _0x3ec960 + _0x1c7413 * _0x1c7413);
            if (_0x4d4147 < _0x4fd3eb && _0x4d4147 > 0x0) {
                const _0x279b69 = _0x4fd3eb - _0x4d4147;
                const _0xb3a593 = _0x3ec960 / _0x4d4147;
                const _0x518de6 = _0x1c7413 / _0x4d4147;
                _0x17f15d += _0xb3a593 * _0x279b69;
                _0x8919be += _0x518de6 * _0x279b69;
                const _0x263ea5 = _0x33402a['vx'] * _0xb3a593 + _0x33402a['vy'] * _0x518de6;
                if (_0x263ea5 < 0x0) {
                    _0x33402a['vx'] -= _0x263ea5 * _0xb3a593;
                    _0x33402a['vy'] -= _0x263ea5 * _0x518de6;
                }
            } else if (_0x4d4147 === 0x0) {
                const _0x25ef6f = _0x17f15d - _0x51b485['x'];
                const _0x4e3636 = _0x51b485['x'] + _0x51b485['w'] - _0x17f15d;
                const _0x3ef962 = _0x8919be - _0x51b485['y'];
                const _0x24c53c = _0x51b485['y'] + _0x51b485['h'] - _0x8919be;
                const _0x1a645c = Math['min'](_0x25ef6f, _0x4e3636, _0x3ef962, _0x24c53c);
                if (_0x1a645c === _0x25ef6f)
                    _0x17f15d = _0x51b485['x'] - _0x4fd3eb;
                else if (_0x1a645c === _0x4e3636)
                    _0x17f15d = _0x51b485['x'] + _0x51b485['w'] + _0x4fd3eb;
                else if (_0x1a645c === _0x3ef962)
                    _0x8919be = _0x51b485['y'] - _0x4fd3eb;
                else
                    _0x8919be = _0x51b485['y'] + _0x51b485['h'] + _0x4fd3eb;
            }
        }
        _0x33402a['x'] = _0x17f15d - _0x33402a['width'] / 0x2;
        _0x33402a['y'] = _0x8919be - _0x33402a['height'] / 0x2;
    }
}
function _0x1b3b99(_0x58e657, _0xd336a6) {
    const _0x547e76 = _0x53ac7f['MAP']['layers']['find'](_0x37f319 => _0x37f319['name'] === 'trees');
    if (!_0x547e76)
        return ![];
    const _0x12bf94 = Math['floor'](_0x58e657 / _0x53ac7f['MAP']['tileSize']);
    const _0x4bb6a8 = Math['floor'](_0xd336a6 / _0x53ac7f['MAP']['tileSize']);
    if (_0x12bf94 < 0x0 || _0x12bf94 >= _0x53ac7f['MAP']['columns'] || _0x4bb6a8 < 0x0 || _0x4bb6a8 >= _0x53ac7f['MAP']['rows'])
        return ![];
    return _0x547e76['data'][_0x4bb6a8 * _0x53ac7f['MAP']['columns'] + _0x12bf94] === 0xb;
}
function _0x348541(_0xccaf80) {
    let _0x4c9911 = 0x0, _0x54ff43 = 0x0;
    const _0x9687cb = _0x53ac7f['INPUTS']['mouseX'] / _0x53ac7f['SYSTEM']['viewScale'];
    const _0x57edb5 = _0x53ac7f['INPUTS']['mouseY'] / _0x53ac7f['SYSTEM']['viewScale'];
    const _0x2fdc8c = _0x33402a['x'] - _0x53ac7f['CAMERA']['x'] + _0x33402a['width'] / 0x2;
    const _0x3e9e62 = _0x33402a['y'] - _0x53ac7f['CAMERA']['y'] + _0x33402a['height'] / 0x2;
    const _0x1ff77d = Math['atan2'](_0x57edb5 - _0x3e9e62, _0x9687cb - _0x2fdc8c);
    if (_0x7c4a69 !== 0x0 || _0x316481 !== 0x0) {
        _0x4c9911 = _0x7c4a69;
        _0x54ff43 = _0x316481;
    } else if (_0x25f405) {
        let _0x4ec78d = 0x0, _0x2190d4 = 0x0;
        if (_0x53ac7f['INPUTS']['keys']['w'] || _0x53ac7f['INPUTS']['keys']['arrowup'])
            _0x4ec78d += 0x1;
        if (_0x53ac7f['INPUTS']['keys']['s'] || _0x53ac7f['INPUTS']['keys']['arrowdown'])
            _0x4ec78d -= 0x1;
        if (_0x53ac7f['INPUTS']['keys']['d'] || _0x53ac7f['INPUTS']['keys']['arrowright'])
            _0x2190d4 += 0x1;
        if (_0x53ac7f['INPUTS']['keys']['a'] || _0x53ac7f['INPUTS']['keys']['arrowleft'])
            _0x2190d4 -= 0x1;
        if (_0x4ec78d !== 0x0 || _0x2190d4 !== 0x0) {
            const _0x5a76d3 = _0x1ff77d + Math['atan2'](_0x2190d4, _0x4ec78d);
            _0x4c9911 = Math['cos'](_0x5a76d3);
            _0x54ff43 = Math['sin'](_0x5a76d3);
        }
    } else {
        if (_0x53ac7f['INPUTS']['keys']['w'] || _0x53ac7f['INPUTS']['keys']['arrowup'])
            _0x54ff43 -= 0x1;
        if (_0x53ac7f['INPUTS']['keys']['s'] || _0x53ac7f['INPUTS']['keys']['arrowdown'])
            _0x54ff43 += 0x1;
        if (_0x53ac7f['INPUTS']['keys']['a'] || _0x53ac7f['INPUTS']['keys']['arrowleft'])
            _0x4c9911 -= 0x1;
        if (_0x53ac7f['INPUTS']['keys']['d'] || _0x53ac7f['INPUTS']['keys']['arrowright'])
            _0x4c9911 += 0x1;
        const _0x4ce026 = _0x4c9911 !== 0x0 || _0x54ff43 !== 0x0;
        if (_0x4ce026) {
            const _0x1c24ae = Math['sqrt'](_0x4c9911 * _0x4c9911 + _0x54ff43 * _0x54ff43);
            _0x4c9911 /= _0x1c24ae;
            _0x54ff43 /= _0x1c24ae;
        }
    }
    if (_0x53ac7f['GAME_STATE'] === 'NIGHT' && (_0x5a65f4 === 'Skinwalker' || _0x5a65f4 === 'Blackmailer')) {
        if (_0x53ac7f['NIGHT_ABILITY_OPEN'] || !_0x53ac7f['CURRENT_TARGET']) {
            _0x4c9911 = 0x0;
            _0x54ff43 = 0x0;
            _0x33402a['vx'] = 0x0;
            _0x33402a['vy'] = 0x0;
            _0x33402a['x'] = _0x53ac7f['MAP']['columns'] * _0x53ac7f['MAP']['tileSize'] / 0x2 - _0x33402a['width'] / 0x2;
            _0x33402a['y'] = _0x53ac7f['MAP']['rows'] * _0x53ac7f['MAP']['tileSize'] / 0x2 - _0x33402a['height'] / 0x2;
        }
    }
    const _0x5c0a8a = _0x4c9911 !== 0x0 || _0x54ff43 !== 0x0;
    const _0x4a91c9 = (_0x53ac7f['INPUTS']['keys']['shift'] || _0x1624d2 || _0x4d18ff) && _0x5c0a8a;
    _0x33402a['bopTimer'] = _0x4a91c9 ? _0x33402a['bopTimer'] + _0xccaf80 : 0x0;
    _0x33402a['scale'] = 0x1 + (_0x33402a['bopTimer'] > 0x0 ? Math['sin'](_0x33402a['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x549092 = Math['pow'](0.001, _0xccaf80);
    const _0x40fa5a = _0x4a91c9 ? 0x74a : 0x5d5;
    _0x33402a['vx'] += _0x4c9911 * _0x40fa5a * _0xccaf80;
    _0x33402a['vy'] += _0x54ff43 * _0x40fa5a * _0xccaf80;
    _0x33402a['vx'] *= _0x549092;
    _0x33402a['vy'] *= _0x549092;
    _0x33402a['x'] += _0x33402a['vx'] * _0xccaf80;
    _0x33402a['y'] += _0x33402a['vy'] * _0xccaf80;
    for (let _0x314de5 = 0x0; _0x314de5 < 0x3; _0x314de5++)
        _0x17f8cd();
    for (let _0x70bb69 = 0x0; _0x70bb69 < 0x2; _0x70bb69++)
        _0x59849e();
    if (_0x33402a['x'] < 0x0)
        _0x33402a['x'] = 0x0;
    if (_0x33402a['y'] < 0x0)
        _0x33402a['y'] = 0x0;
    if (_0x33402a['x'] + _0x33402a['width'] > _0x53ac7f['MAP']['columns'] * _0x53ac7f['MAP']['tileSize'])
        _0x33402a['x'] = _0x53ac7f['MAP']['columns'] * _0x53ac7f['MAP']['tileSize'] - _0x33402a['width'];
    if (_0x33402a['y'] + _0x33402a['height'] > _0x53ac7f['MAP']['rows'] * _0x53ac7f['MAP']['tileSize'])
        _0x33402a['y'] = _0x53ac7f['MAP']['rows'] * _0x53ac7f['MAP']['tileSize'] - _0x33402a['height'];
    if (_0x21c45e) {
        _0x33402a['angle'] = _0x210beb + Math['PI'] / 0x2;
    } else if (_0x7c4a69 !== 0x0 || _0x316481 !== 0x0) {
        _0x33402a['angle'] = Math['atan2'](_0x316481, _0x7c4a69) + Math['PI'] / 0x2;
    } else if (!_0x4a4ba2) {
        _0x33402a['angle'] = _0x1ff77d + Math['PI'] / 0x2;
    }
    const _0x2ddd39 = performance['now']();
    const _0x1d2931 = !!(_0x53ac7f['INJURED_THIS_NIGHT'] && _0x117720 && _0x53ac7f['INJURED_THIS_NIGHT'][_0x117720]);
    if (_0x53ac7f['GAME_STATE'] === 'NIGHT' && _0x1d2931 && Math['hypot'](_0x33402a['vx'], _0x33402a['vy']) > 0x1e) {
        if (_0x2ddd39 - _0x33402a['_lastBloodDropTime'] > 0xfa) {
            _0x33402a['_lastBloodDropTime'] = _0x2ddd39;
            _0x53ac7f['BLOOD_DROPS']['push']({
                'x': _0x33402a['x'] + _0x33402a['width'] / 0x2 + (Math['random']() * 0x8 - 0x4),
                'y': _0x33402a['y'] + _0x33402a['height'] / 0x2 + (Math['random']() * 0x8 - 0x4),
                'rot': Math['random']() * Math['PI'] * 0x2
            });
            if (_0x53ac7f['BLOOD_DROPS']['length'] > 0x12c)
                _0x53ac7f['BLOOD_DROPS']['shift']();
        }
    }
    for (const _0x320230 in _0x22ad68) {
        const _0xb8e215 = _0x22ad68[_0x320230];
        const _0xf81acb = !!(_0x53ac7f['INJURED_THIS_NIGHT'] && _0x53ac7f['INJURED_THIS_NIGHT'][Number(_0x320230)]);
        if (_0x53ac7f['GAME_STATE'] === 'NIGHT' && _0xf81acb && Math['hypot'](_0xb8e215['vx'] || 0x0, _0xb8e215['vy'] || 0x0) > 0x1e) {
            if (_0x2ddd39 - (_0xb8e215['_lastBloodDrop'] || 0x0) > 0x118) {
                _0xb8e215['_lastBloodDrop'] = _0x2ddd39;
                _0x53ac7f['BLOOD_DROPS']['push']({
                    'x': (_0xb8e215['renderX'] ?? _0xb8e215['x']) + _0xb8e215['width'] / 0x2 + (Math['random']() * 0x8 - 0x4),
                    'y': (_0xb8e215['renderY'] ?? _0xb8e215['y']) + _0xb8e215['height'] / 0x2 + (Math['random']() * 0x8 - 0x4),
                    'rot': Math['random']() * Math['PI'] * 0x2
                });
                if (_0x53ac7f['BLOOD_DROPS']['length'] > 0x12c)
                    _0x53ac7f['BLOOD_DROPS']['shift']();
            }
        }
    }
    const _0x12d163 = _0x33402a['x'] + _0x33402a['width'] / 0x2 - _0x53ac7f['CAMERA']['width'] / 0x2;
    const _0x21a226 = _0x33402a['y'] + _0x33402a['height'] / 0x2 - _0x53ac7f['CAMERA']['height'] / 0x2;
    if (_0x53ac7f['CAMERA']['x'] === null || isNaN(_0x53ac7f['CAMERA']['x']) || !isFinite(_0x53ac7f['CAMERA']['x'])) {
        _0x53ac7f['CAMERA']['x'] = _0x12d163;
        _0x53ac7f['CAMERA']['y'] = _0x21a226;
    } else {
        const _0x325f6d = 0x1 - Math['exp'](-Math['max'](0x0, _0xccaf80) * 0x28);
        _0x53ac7f['CAMERA']['x'] += (_0x12d163 - _0x53ac7f['CAMERA']['x']) * _0x325f6d;
        _0x53ac7f['CAMERA']['y'] += (_0x21a226 - _0x53ac7f['CAMERA']['y']) * _0x325f6d;
    }
    for (const _0x4657db in _0x22ad68) {
        const _0x46251c = _0x22ad68[_0x4657db];
        if (_0x46251c['renderX'] === undefined) {
            _0x46251c['renderX'] = _0x46251c['x'];
            _0x46251c['renderY'] = _0x46251c['y'];
            _0x46251c['renderAngle'] = _0x46251c['angle'] || 0x0;
        }
        const _0x547905 = _0x46251c['x'] + (_0x46251c['vx'] || 0x0) * _0xccaf80;
        const _0x2594b8 = _0x46251c['y'] + (_0x46251c['vy'] || 0x0) * _0xccaf80;
        _0x46251c['x'] = _0x547905;
        _0x46251c['y'] = _0x2594b8;
        const _0x3a1cc6 = 0x1 - Math['exp'](-_0xccaf80 * 0x12);
        const _0x5e1081 = _0x46251c['x'] - _0x46251c['renderX'], _0x4c7334 = _0x46251c['y'] - _0x46251c['renderY'];
        const _0x29032b = Math['sqrt'](_0x5e1081 * _0x5e1081 + _0x4c7334 * _0x4c7334);
        const _0x3d3153 = 0xc8;
        if (_0x29032b > _0x3d3153) {
            _0x46251c['renderX'] = _0x46251c['x'] - _0x5e1081 / _0x29032b * _0x3d3153;
            _0x46251c['renderY'] = _0x46251c['y'] - _0x4c7334 / _0x29032b * _0x3d3153;
        }
        _0x46251c['renderX'] += (_0x46251c['x'] - _0x46251c['renderX']) * _0x3a1cc6;
        _0x46251c['renderY'] += (_0x46251c['y'] - _0x46251c['renderY']) * _0x3a1cc6;
        let _0x559e2a = (_0x46251c['angle'] || 0x0) - _0x46251c['renderAngle'];
        while (_0x559e2a < -Math['PI'])
            _0x559e2a += Math['PI'] * 0x2;
        while (_0x559e2a > Math['PI'])
            _0x559e2a -= Math['PI'] * 0x2;
        _0x46251c['renderAngle'] += _0x559e2a * (0x1 - Math['exp'](-_0xccaf80 * 0x14));
    }
    if (_0x53ac7f['GAME_STATE'] === 'NIGHT') {
        _0x298b34 = Math['min'](0.6, _0x298b34 + _0xccaf80 * 0.5);
    } else {
        _0x298b34 = Math['max'](0x0, _0x298b34 - _0xccaf80 * 0.5);
    }
    if (_0x2ad38 > 0x0) {
        if (performance['now']() > _0x8f60a1) {
            _0x2ad38 = Math['max'](0x0, _0x2ad38 - _0xccaf80 * 0x2);
        }
    }
    _0x4f95a9();
}
function _0x46cdda(_0x44f1aa, _0x3e66f5, _0x3cd3f9, _0x525937, _0x26b62b = !![]) {
    _0x44f1aa['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x1d232f = _0x44f1aa['measureText'](_0x3e66f5)['width'];
    const _0x12fa6b = _0x1d232f + 0x18;
    const _0x690ea1 = 0x1c;
    _0x44f1aa['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x44f1aa['beginPath']();
    if (_0x44f1aa['roundRect']) {
        _0x44f1aa['roundRect'](_0x3cd3f9 - _0x12fa6b / 0x2, _0x525937 - _0x690ea1, _0x12fa6b, _0x690ea1, 0x6);
    } else {
        _0x44f1aa['rect'](_0x3cd3f9 - _0x12fa6b / 0x2, _0x525937 - _0x690ea1, _0x12fa6b, _0x690ea1);
    }
    _0x44f1aa['fill']();
    if (_0x26b62b) {
        _0x44f1aa['beginPath']();
        _0x44f1aa['moveTo'](_0x3cd3f9 - 0x6, _0x525937);
        _0x44f1aa['lineTo'](_0x3cd3f9 + 0x6, _0x525937);
        _0x44f1aa['lineTo'](_0x3cd3f9, _0x525937 + 0x6);
        _0x44f1aa['fill']();
    }
    _0x44f1aa['fillStyle'] = '#ffffff';
    _0x44f1aa['textAlign'] = 'center';
    _0x44f1aa['textBaseline'] = 'middle';
    _0x44f1aa['fillText'](_0x3e66f5, _0x3cd3f9, _0x525937 - _0x690ea1 / 0x2 + 0x1);
}
function _0x2d18d4(_0x1ad527, _0x3d8ce3, _0x52fbd0, _0x318fed) {
    if (!_0x3d8ce3 || _0x3d8ce3['length'] === 0x0)
        return;
    let _0x3a0aea = _0x318fed;
    for (let _0x1bd961 = 0x0; _0x1bd961 < _0x3d8ce3['length']; _0x1bd961++) {
        _0x46cdda(_0x1ad527, _0x3d8ce3[_0x1bd961]['text'], _0x52fbd0, _0x3a0aea, _0x1bd961 === 0x0);
        _0x3a0aea -= 0x24;
    }
}
function _0x1b48a0() {
    if (!_0x53ac7f['SYSTEM']['isReady'])
        return;
    if (_0x53ac7f['MAP']['layers'] && _0x53ac7f['MAP']['layers']['length'] > 0x0 && _0x248d66['complete'] && _0x248d66['naturalWidth'] > 0x0) {
        if (!_0x53ac7f['MAP']['_prerenderedWithTileset'] || !_0x53ac7f['MAP']['bgChunks'] || _0x53ac7f['MAP']['bgChunks']['length'] === 0x0) {
            _0x5363da();
        }
    }
    if (!_0x53ac7f['MAP']['bgChunks'] || _0x53ac7f['MAP']['bgChunks']['length'] === 0x0 || !_0x53ac7f['MAP']['bgChunks'][0x0] || _0x53ac7f['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x134f7c['fillStyle'] = '#000000';
    _0x134f7c['fillRect'](0x0, 0x0, _0x2a29b0['width'], _0x2a29b0['height']);
    _0x134f7c['save']();
    try {
        _0x134f7c['scale'](_0x53ac7f['SYSTEM']['viewScale'], _0x53ac7f['SYSTEM']['viewScale']);
        _0x134f7c['imageSmoothingEnabled'] = ![];
        const _0x45de6e = Math['floor'](_0x53ac7f['CAMERA']['x'] || 0x0);
        const _0x1affb6 = Math['floor'](_0x53ac7f['CAMERA']['y'] || 0x0);
        const _0x53ddc0 = Math['max'](0x0, Math['floor'](_0x45de6e / _0x53ac7f['MAP']['chunkSize']));
        const _0x28cb7e = Math['min'](_0x53ac7f['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x45de6e + _0x53ac7f['CAMERA']['width']) / _0x53ac7f['MAP']['chunkSize']));
        const _0x18c8f4 = Math['max'](0x0, Math['floor'](_0x1affb6 / _0x53ac7f['MAP']['chunkSize']));
        const _0x4ca29d = Math['min'](_0x53ac7f['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x1affb6 + _0x53ac7f['CAMERA']['height']) / _0x53ac7f['MAP']['chunkSize']));
        for (let _0x20cffb = _0x18c8f4; _0x20cffb <= _0x4ca29d; _0x20cffb++) {
            for (let _0x47838b = _0x53ddc0; _0x47838b <= _0x28cb7e; _0x47838b++) {
                const _0x395b88 = _0x47838b * _0x53ac7f['MAP']['chunkSize'] - _0x45de6e;
                const _0x110be4 = _0x20cffb * _0x53ac7f['MAP']['chunkSize'] - _0x1affb6;
                _0x134f7c['drawImage'](_0x53ac7f['MAP']['bgChunks'][_0x20cffb][_0x47838b], _0x395b88, _0x110be4, _0x53ac7f['MAP']['chunkSize'] + 0x1, _0x53ac7f['MAP']['chunkSize'] + 0x1);
            }
        }
        if (_0x117bfc['complete'] && _0x117bfc['naturalWidth'] > 0x0) {
            const _0x208fe4 = _0x53ac7f['MAP']['tileSize'];
            const _0x1d239b = _0x208fe4 * 0xa;
            const _0x3e47df = _0x53ac7f['MAP']['columns'] / 0x2 * _0x208fe4 - _0x1d239b / 0x2 - _0x45de6e;
            const _0x3ca2cd = _0x53ac7f['MAP']['rows'] / 0x2 * _0x208fe4 - _0x1d239b / 0x2 - _0x1affb6;
            _0x134f7c['drawImage'](_0x117bfc, _0x3e47df, _0x3ca2cd, _0x1d239b, _0x1d239b);
        }
        if (_0x23eda4['complete'] && _0x23eda4['naturalWidth'] > 0x0) {
            _0x53ac7f['ENTITIES']['forEach'](_0x138514 => {
                if (_0x138514['type'] !== 'table')
                    return;
                _0x134f7c['save']();
                const _0x3486e2 = _0x23eda4['naturalWidth'] >= _0x23eda4['naturalHeight'];
                const _0x194e8f = _0x138514['w'] >= _0x138514['h'];
                if (_0x3486e2 === _0x194e8f) {
                    _0x134f7c['drawImage'](_0x23eda4, _0x138514['x'] - _0x45de6e, _0x138514['y'] - _0x1affb6, _0x138514['w'], _0x138514['h']);
                } else {
                    _0x134f7c['translate'](_0x138514['x'] - _0x45de6e + _0x138514['w'] / 0x2, _0x138514['y'] - _0x1affb6 + _0x138514['h'] / 0x2);
                    _0x134f7c['rotate'](Math['PI'] / 0x2);
                    _0x134f7c['drawImage'](_0x23eda4, -_0x138514['h'] / 0x2, -_0x138514['w'] / 0x2, _0x138514['h'], _0x138514['w']);
                }
                _0x134f7c['restore']();
            });
        }
        if (_0x53ac7f['BLOOD_DROPS'] && _0x53ac7f['BLOOD_DROPS']['length'] > 0x0) {
            _0x53ac7f['BLOOD_DROPS']['forEach'](_0x4c93e4 => {
                const _0x4093f1 = _0x4c93e4['x'] - _0x45de6e;
                const _0x63d81b = _0x4c93e4['y'] - _0x1affb6;
                _0x134f7c['save']();
                _0x134f7c['translate'](_0x4093f1, _0x63d81b);
                _0x134f7c['rotate'](_0x4c93e4['rot']);
                if (_0x551cf2['complete'] && _0x551cf2['naturalWidth'] > 0x0) {
                    _0x134f7c['drawImage'](_0x551cf2, -0xa, -0xa, 0x14, 0x14);
                } else {
                    _0x134f7c['fillStyle'] = '#aa111a';
                    _0x134f7c['beginPath']();
                    _0x134f7c['arc'](0x0, 0x0, 0x5, 0x0, Math['PI'] * 0x2);
                    _0x134f7c['fill']();
                }
                _0x134f7c['restore']();
            });
        }
        if (_0x53ac7f['BLOOD_SPLATTERS'] && _0x53ac7f['BLOOD_SPLATTERS']['length'] > 0x0) {
            _0x53ac7f['BLOOD_SPLATTERS']['forEach'](_0x591169 => {
                const _0x9a913e = _0x591169['x'] - _0x45de6e;
                const _0x51ff56 = _0x591169['y'] - _0x1affb6;
                const _0x304433 = 0x50 * (_0x591169['scale'] || 0x1);
                const _0x14dc8c = 0x50 * (_0x591169['scale'] || 0x1);
                _0x134f7c['save']();
                _0x134f7c['translate'](_0x9a913e, _0x51ff56);
                _0x134f7c['rotate'](_0x591169['rot'] || 0x0);
                if (_0xed355d['complete'] && _0xed355d['naturalWidth'] > 0x0) {
                    _0x134f7c['drawImage'](_0xed355d, -_0x304433 / 0x2, -_0x14dc8c / 0x2, _0x304433, _0x14dc8c);
                } else {
                    _0x134f7c['fillStyle'] = '#b8141e';
                    _0x134f7c['beginPath']();
                    _0x134f7c['arc'](0x0, 0x0, _0x304433 * 0.35, 0x0, Math['PI'] * 0x2);
                    _0x134f7c['fill']();
                }
                _0x134f7c['restore']();
            });
        }
        if (_0x26061b) {
            if (_0x53ac7f['MAP']['wallChunks'] && _0x53ac7f['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x3676e1 = _0x18c8f4; _0x3676e1 <= _0x4ca29d; _0x3676e1++) {
                    for (let _0xd87e68 = _0x53ddc0; _0xd87e68 <= _0x28cb7e; _0xd87e68++) {
                        if (!_0x53ac7f['MAP']['wallChunks'][_0x3676e1] || !_0x53ac7f['MAP']['wallChunks'][_0x3676e1][_0xd87e68])
                            continue;
                        const _0x3b513e = _0xd87e68 * _0x53ac7f['MAP']['chunkSize'] - _0x45de6e;
                        const _0x5e0e90 = _0x3676e1 * _0x53ac7f['MAP']['chunkSize'] - _0x1affb6;
                        _0x134f7c['drawImage'](_0x53ac7f['MAP']['wallChunks'][_0x3676e1][_0xd87e68], _0x3b513e, _0x5e0e90, _0x53ac7f['MAP']['chunkSize'] + 0x1, _0x53ac7f['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x302697 = _0x18c8f4; _0x302697 <= _0x4ca29d; _0x302697++) {
                for (let _0x41255b = _0x53ddc0; _0x41255b <= _0x28cb7e; _0x41255b++) {
                    const _0x5f591c = _0x41255b * _0x53ac7f['MAP']['chunkSize'] - _0x45de6e;
                    const _0x26fcfc = _0x302697 * _0x53ac7f['MAP']['chunkSize'] - _0x1affb6;
                    _0x134f7c['drawImage'](_0x53ac7f['MAP']['fgChunks'][_0x302697][_0x41255b], _0x5f591c, _0x26fcfc, _0x53ac7f['MAP']['chunkSize'] + 0x1, _0x53ac7f['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x4c7836 = _0x53ac7f['GAME_STATE'] === 'NIGHT' && (_0x5a65f4 === 'Skinwalker' || _0x5a65f4 === 'Blackmailer') && !_0x33402a['isDead'];
        const _0x180fe3 = _0x33402a['x'] - _0x45de6e + _0x33402a['width'] / 0x2;
        const _0x2a3c1c = _0x33402a['y'] - _0x1affb6 + _0x33402a['height'] / 0x2;
        const _0x2b1023 = _0x33402a['width'] * _0x33402a['scale'] * 1.3;
        const _0x585235 = _0x33402a['height'] * _0x33402a['scale'] * 1.3;
        for (const _0x323f8b in _0x22ad68) {
            const _0x20f8f7 = _0x22ad68[_0x323f8b];
            if (_0x20f8f7['isDead'])
                continue;
            const _0x30e489 = (_0x20f8f7['renderX'] ?? _0x20f8f7['x']) - _0x45de6e + _0x20f8f7['width'] / 0x2;
            const _0x318214 = (_0x20f8f7['renderY'] ?? _0x20f8f7['y']) - _0x1affb6 + _0x20f8f7['height'] / 0x2;
            const _0x5ba91a = Math['min'](0x2, Math['max'](0.3, _0x20f8f7['scale'] || 0x1));
            const _0x58b121 = _0x20f8f7['width'] * _0x5ba91a * 1.3;
            const _0x2cdb01 = _0x20f8f7['height'] * _0x5ba91a * 1.3;
            const _0x175122 = !!_0x20f8f7['isBlackmailed'] || _0x5a6ed3['has'](parseInt(_0x323f8b, 0xa));
            const _0x2ab19a = !!(_0x53ac7f['INJURED_THIS_NIGHT'] && _0x53ac7f['INJURED_THIS_NIGHT'][parseInt(_0x323f8b, 0xa)]);
            _0x134f7c['save']();
            try {
                _0x134f7c['translate'](_0x30e489, _0x318214);
                _0x134f7c['rotate'](_0x20f8f7['renderAngle'] ?? 0x0);
                if (_0x20f8f7['isDark'])
                    _0x134f7c['filter'] = 'brightness(0)';
                _0x11da06(_0x134f7c, _0x20f8f7['body'], _0x20f8f7['eyes'], _0x58b121, _0x2cdb01);
                if (_0xefee20['has'](parseInt(_0x323f8b, 0xa)) && _0x207abd['complete'] && _0x207abd['naturalWidth'] > 0x0) {
                    _0x134f7c['drawImage'](_0x207abd, -_0x58b121 / 0x2, -_0x2cdb01 / 0x2, _0x58b121, _0x2cdb01);
                }
                if (_0x20f8f7['isDark'])
                    _0x134f7c['filter'] = 'none';
                if (_0x175122 && _0x5938fb['complete'] && _0x5938fb['naturalWidth'] > 0x0) {
                    _0x134f7c['drawImage'](_0x5938fb, -_0x58b121 / 0x2, -_0x2cdb01 / 0x2, _0x58b121, _0x2cdb01);
                }
                if (_0x53ac7f['GAME_STATE'] === 'NIGHT' && _0x2ab19a && _0x35df55['complete'] && _0x35df55['naturalWidth'] > 0x0) {
                    _0x134f7c['drawImage'](_0x35df55, -_0x58b121 / 0x2, -_0x2cdb01 / 0x2, _0x58b121, _0x2cdb01);
                }
            } finally {
                _0x134f7c['restore']();
            }
            if (!_0x1b3b99((_0x20f8f7['renderX'] ?? _0x20f8f7['x']) + _0x20f8f7['width'] / 0x2, (_0x20f8f7['renderY'] ?? _0x20f8f7['y']) + _0x20f8f7['height'] / 0x2)) {
                _0x134f7c['textAlign'] = 'center';
                _0x134f7c['lineJoin'] = 'round';
                _0x134f7c['lineWidth'] = 0x3;
                _0x134f7c['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x134f7c['font'] = 'bold\x2013px\x20\x27Viga\x27,\x20sans-serif';
                if (_0x175122) {
                    _0x134f7c['fillStyle'] = '#ff4444';
                } else if (_0xefee20['has'](parseInt(_0x323f8b, 0xa))) {
                    _0x134f7c['fillStyle'] = '#cc88ff';
                } else {
                    _0x134f7c['fillStyle'] = '#ffffff';
                }
                const _0x26f44c = _0x20f8f7['isDark'] ? '???' : _0x20f8f7['name'] + (_0x20f8f7['isOwner'] ? '\x20[🗝️]' : '');
                _0x134f7c['strokeText'](_0x26f44c, _0x30e489, _0x318214 - _0x2cdb01 / 0x2 - 0x10);
                _0x134f7c['fillText'](_0x26f44c, _0x30e489, _0x318214 - _0x2cdb01 / 0x2 - 0x10);
            }
        }
        if (!_0x33402a['isDead']) {
            const _0x22c608 = !!_0x33402a['isBlackmailed'] || _0x117720 !== null && _0x5a6ed3['has'](_0x117720);
            const _0x56ea6e = !!(_0x53ac7f['INJURED_THIS_NIGHT'] && _0x117720 && _0x53ac7f['INJURED_THIS_NIGHT'][_0x117720]);
            _0x134f7c['save']();
            try {
                _0x134f7c['translate'](_0x180fe3, _0x2a3c1c);
                _0x134f7c['rotate'](_0x33402a['angle']);
                if (_0x4c7836)
                    _0x134f7c['filter'] = 'brightness(0)';
                _0x11da06(_0x134f7c, _0x35b051, _0xdeb9a3, _0x2b1023, _0x585235);
                if (_0xefee20['has'](_0x117720 || 0x0) && _0x207abd['complete'] && _0x207abd['naturalWidth'] > 0x0) {
                    _0x134f7c['drawImage'](_0x207abd, -_0x2b1023 / 0x2, -_0x585235 / 0x2, _0x2b1023, _0x585235);
                }
                if (_0x4c7836)
                    _0x134f7c['filter'] = 'none';
                if (_0x22c608 && _0x5938fb['complete'] && _0x5938fb['naturalWidth'] > 0x0) {
                    _0x134f7c['drawImage'](_0x5938fb, -_0x2b1023 / 0x2, -_0x585235 / 0x2, _0x2b1023, _0x585235);
                }
                if (_0x53ac7f['GAME_STATE'] === 'NIGHT' && _0x56ea6e && _0x35df55['complete'] && _0x35df55['naturalWidth'] > 0x0) {
                    _0x134f7c['drawImage'](_0x35df55, -_0x2b1023 / 0x2, -_0x585235 / 0x2, _0x2b1023, _0x585235);
                }
            } finally {
                _0x134f7c['restore']();
            }
            if (!_0x1b3b99(_0x33402a['x'] + _0x33402a['width'] / 0x2, _0x33402a['y'] + _0x33402a['height'] / 0x2)) {
                _0x134f7c['textAlign'] = 'center';
                _0x134f7c['lineJoin'] = 'round';
                _0x134f7c['lineWidth'] = 0x3;
                _0x134f7c['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x134f7c['font'] = 'bold\x2013px\x20\x27Viga\x27,\x20sans-serif';
                if (_0x22c608) {
                    _0x134f7c['fillStyle'] = '#ff4444';
                } else if (_0xefee20['has'](_0x117720 || 0x0)) {
                    _0x134f7c['fillStyle'] = '#cc88ff';
                } else {
                    _0x134f7c['fillStyle'] = '#ffffff';
                }
                const _0x55fe2c = _0x4c7836 ? '???' : _0x2de396 + (_0x425684 ? '\x20[🗝️]' : '');
                _0x134f7c['strokeText'](_0x55fe2c, _0x180fe3, _0x2a3c1c - _0x585235 / 0x2 - 0x10);
                _0x134f7c['fillText'](_0x55fe2c, _0x180fe3, _0x2a3c1c - _0x585235 / 0x2 - 0x10);
            }
        }
        if (_0x53ac7f['MAP']['wallChunks'] && _0x53ac7f['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x56e1a9 = _0x18c8f4; _0x56e1a9 <= _0x4ca29d; _0x56e1a9++) {
                for (let _0x2a41b7 = _0x53ddc0; _0x2a41b7 <= _0x28cb7e; _0x2a41b7++) {
                    if (!_0x53ac7f['MAP']['wallChunks'][_0x56e1a9] || !_0x53ac7f['MAP']['wallChunks'][_0x56e1a9][_0x2a41b7])
                        continue;
                    const _0x3c110c = _0x2a41b7 * _0x53ac7f['MAP']['chunkSize'] - _0x45de6e;
                    const _0x568f7e = _0x56e1a9 * _0x53ac7f['MAP']['chunkSize'] - _0x1affb6;
                    _0x134f7c['drawImage'](_0x53ac7f['MAP']['wallChunks'][_0x56e1a9][_0x2a41b7], _0x3c110c, _0x568f7e, _0x53ac7f['MAP']['chunkSize'] + 0x1, _0x53ac7f['MAP']['chunkSize'] + 0x1);
                }
            }
        }
        for (const _0xb2baae of _0x53ac7f['ENTITIES']) {
            if (_0xb2baae['type'] !== 'npc')
                continue;
            const _0x5f1686 = _0xb2baae['x'] - _0x45de6e + _0xb2baae['w'] / 0x2;
            const _0x5eaa34 = _0xb2baae['y'] - _0x1affb6 + _0xb2baae['h'] / 0x2;
            const _0x1a1d93 = _0xb2baae['w'];
            const _0x50ac41 = _0xb2baae['h'];
            _0x134f7c['save']();
            _0x134f7c['translate'](_0x5f1686, _0x5eaa34);
            _0x134f7c['rotate'](_0xb2baae['angle'] !== undefined ? _0xb2baae['angle'] : 0x0);
            _0x11da06(_0x134f7c, _0xb2baae['body'] || 'yanito932.png', _0xb2baae['eyes'], _0x1a1d93, _0x50ac41);
            _0x134f7c['restore']();
            _0x134f7c['textAlign'] = 'center';
            _0x134f7c['lineJoin'] = 'round';
            _0x134f7c['lineWidth'] = 0x3;
            _0x134f7c['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x134f7c['font'] = 'bold\x2013px\x20\x27Viga\x27,\x20sans-serif';
            _0x134f7c['fillStyle'] = '#aaaaaa';
            _0x134f7c['strokeText'](_0xb2baae['name'] || 'NPC', _0x5f1686, _0x5eaa34 - _0x50ac41 / 0x2 - 0x10);
            _0x134f7c['fillText'](_0xb2baae['name'] || 'NPC', _0x5f1686, _0x5eaa34 - _0x50ac41 / 0x2 - 0x10);
        }
        if (_0x33402a['isDead']) {
            for (const _0x3ffd7d in _0x22ad68) {
                const _0x18cb6e = _0x22ad68[_0x3ffd7d];
                if (!_0x18cb6e['isDead'])
                    continue;
                const _0x12feb0 = (_0x18cb6e['renderX'] ?? _0x18cb6e['x']) - _0x45de6e + _0x18cb6e['width'] / 0x2;
                const _0x568fea = (_0x18cb6e['renderY'] ?? _0x18cb6e['y']) - _0x1affb6 + _0x18cb6e['height'] / 0x2;
                const _0x5c0258 = _0x18cb6e['width'] * (_0x18cb6e['scale'] || 0x1) * 1.3;
                const _0x3767ff = _0x18cb6e['height'] * (_0x18cb6e['scale'] || 0x1) * 1.3;
                _0x134f7c['save']();
                try {
                    _0x134f7c['translate'](_0x12feb0, _0x568fea);
                    _0x134f7c['rotate'](_0x18cb6e['renderAngle'] ?? 0x0);
                    _0x134f7c['globalAlpha'] = 0.3;
                    _0x11da06(_0x134f7c, _0x18cb6e['body'], _0x18cb6e['eyes'], _0x5c0258, _0x3767ff);
                } finally {
                    _0x134f7c['restore']();
                }
                if (!_0x1b3b99((_0x18cb6e['renderX'] ?? _0x18cb6e['x']) + _0x18cb6e['width'] / 0x2, (_0x18cb6e['renderY'] ?? _0x18cb6e['y']) + _0x18cb6e['height'] / 0x2)) {
                    _0x134f7c['save']();
                    _0x134f7c['globalAlpha'] = 0.3;
                    _0x134f7c['textAlign'] = 'center';
                    _0x134f7c['lineJoin'] = 'round';
                    _0x134f7c['lineWidth'] = 0x3;
                    _0x134f7c['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x134f7c['font'] = 'bold\x2013px\x20\x27Viga\x27,\x20sans-serif';
                    _0x134f7c['fillStyle'] = '#ffffff';
                    const _0x4e20cf = _0x18cb6e['name'] + (_0x18cb6e['isOwner'] ? '\x20[🗝️]' : '');
                    _0x134f7c['strokeText'](_0x4e20cf, _0x12feb0, _0x568fea - _0x3767ff / 0x2 - 0x10);
                    _0x134f7c['fillText'](_0x4e20cf, _0x12feb0, _0x568fea - _0x3767ff / 0x2 - 0x10);
                    _0x134f7c['restore']();
                }
            }
            _0x134f7c['save']();
            try {
                _0x134f7c['translate'](_0x180fe3, _0x2a3c1c);
                _0x134f7c['rotate'](_0x33402a['angle']);
                _0x134f7c['globalAlpha'] = 0.3;
                _0x11da06(_0x134f7c, _0x35b051, _0xdeb9a3, _0x2b1023, _0x585235);
            } finally {
                _0x134f7c['restore']();
            }
            if (!_0x1b3b99(_0x33402a['x'] + _0x33402a['width'] / 0x2, _0x33402a['y'] + _0x33402a['height'] / 0x2)) {
                _0x134f7c['save']();
                _0x134f7c['globalAlpha'] = 0.3;
                _0x134f7c['textAlign'] = 'center';
                _0x134f7c['lineJoin'] = 'round';
                _0x134f7c['lineWidth'] = 0x3;
                _0x134f7c['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x134f7c['font'] = 'bold\x2013px\x20\x27Viga\x27,\x20sans-serif';
                _0x134f7c['fillStyle'] = '#ffffff';
                const _0x2beee7 = _0x2de396 + (_0x425684 ? '\x20[🗝️]' : '');
                _0x134f7c['strokeText'](_0x2beee7, _0x180fe3, _0x2a3c1c - _0x585235 / 0x2 - 0x10);
                _0x134f7c['fillText'](_0x2beee7, _0x180fe3, _0x2a3c1c - _0x585235 / 0x2 - 0x10);
                _0x134f7c['restore']();
            }
        }
        for (let _0x4cdbc5 = _0x18c8f4; _0x4cdbc5 <= _0x4ca29d; _0x4cdbc5++) {
            for (let _0x323b83 = _0x53ddc0; _0x323b83 <= _0x28cb7e; _0x323b83++) {
                const _0x22c9fe = _0x323b83 * _0x53ac7f['MAP']['chunkSize'] - _0x45de6e;
                const _0x47ab90 = _0x4cdbc5 * _0x53ac7f['MAP']['chunkSize'] - _0x1affb6;
                _0x134f7c['drawImage'](_0x53ac7f['MAP']['fgChunks'][_0x4cdbc5][_0x323b83], _0x22c9fe, _0x47ab90, _0x53ac7f['MAP']['chunkSize'] + 0x1, _0x53ac7f['MAP']['chunkSize'] + 0x1);
            }
        }
        if (_0x53ac7f['EDITOR']['enabled'] && _0x53ac7f['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x17805c = _0x53ac7f['INPUTS']['mouseX'] / _0x53ac7f['SYSTEM']['viewScale'] + _0x53ac7f['CAMERA']['x'];
            const _0x18b70e = _0x53ac7f['INPUTS']['mouseY'] / _0x53ac7f['SYSTEM']['viewScale'] + _0x53ac7f['CAMERA']['y'];
            const _0x5c60c1 = Math['floor'](_0x17805c / _0x53ac7f['MAP']['tileSize']);
            const _0x4be15d = Math['floor'](_0x18b70e / _0x53ac7f['MAP']['tileSize']);
            if (_0x5c60c1 >= 0x0 && _0x5c60c1 < _0x53ac7f['MAP']['columns'] && _0x4be15d >= 0x0 && _0x4be15d < _0x53ac7f['MAP']['rows']) {
                const _0x4881ed = _0x5c60c1 * _0x53ac7f['MAP']['tileSize'] - _0x45de6e;
                const _0x11fa0a = _0x4be15d * _0x53ac7f['MAP']['tileSize'] - _0x1affb6;
                _0x134f7c['save']();
                _0x134f7c['globalAlpha'] = 0.5;
                if (_0x53ac7f['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0xc171b8 = _0x53ac7f['EDITOR']['selectedTileGid'] - 0x1;
                    _0x134f7c['drawImage'](_0x248d66, _0xc171b8 % _0x53ac7f['MAP']['tilesetCols'] * _0x53ac7f['MAP']['tileSize'], Math['floor'](_0xc171b8 / _0x53ac7f['MAP']['tilesetCols']) * _0x53ac7f['MAP']['tileSize'], _0x53ac7f['MAP']['tileSize'], _0x53ac7f['MAP']['tileSize'], _0x4881ed, _0x11fa0a, _0x53ac7f['MAP']['tileSize'], _0x53ac7f['MAP']['tileSize']);
                } else {
                    _0x134f7c['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x134f7c['fillRect'](_0x4881ed, _0x11fa0a, _0x53ac7f['MAP']['tileSize'], _0x53ac7f['MAP']['tileSize']);
                }
                _0x134f7c['restore']();
            }
        }
        if (_0x298b34 > 0x0) {
            _0x134f7c['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x298b34 + ')';
            _0x134f7c['fillRect'](0x0, 0x0, _0x53ac7f['CAMERA']['width'], _0x53ac7f['CAMERA']['height']);
        }
        for (const _0x328f0a in _0x22ad68) {
            const _0x38c455 = _0x22ad68[_0x328f0a];
            if (_0x38c455['isDead'] && !_0x33402a['isDead'])
                continue;
            const _0x3069ce = (_0x38c455['renderX'] ?? _0x38c455['x']) - _0x45de6e + _0x38c455['width'] / 0x2;
            const _0x29ae5a = (_0x38c455['renderY'] ?? _0x38c455['y']) - _0x1affb6 + _0x38c455['height'] / 0x2;
            _0x2d18d4(_0x134f7c, _0x38c455['chats'], _0x3069ce, _0x29ae5a - _0x38c455['height'] / 0x2 - 0x20);
        }
        _0x2d18d4(_0x134f7c, _0x33402a['chats'], _0x180fe3, _0x2a3c1c - _0x33402a['height'] / 0x2 - 0x20);
        if (_0x2ad38 > 0x0) {
            _0x134f7c['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x2ad38 + ')';
            _0x134f7c['fillRect'](0x0, 0x0, _0x53ac7f['CAMERA']['width'], _0x53ac7f['CAMERA']['height']);
        }
    } finally {
        _0x134f7c['restore']();
    }
}
function _0x520f25(_0x2d82a4) {
    if (!_0x53ac7f['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x520f25);
    let _0x2bed1e = (_0x2d82a4 - _0x53ac7f['SYSTEM']['lastTime']) / 0x3e8;
    _0x53ac7f['SYSTEM']['lastTime'] = _0x2d82a4;
    if (_0x2bed1e > 0.1)
        _0x2bed1e = 0.1;
    if (_0x2bed1e < 0x0 || isNaN(_0x2bed1e))
        _0x2bed1e = 0.016;
    if (_0x26061b) {
        _0x2e5472(_0x2bed1e);
        _0x1b48a0();
        return;
    }
    if (!_0x117720)
        return;
    _0x348541(_0x2bed1e);
    _0x5b0dd7['tick'](_0x2d82a4);
    _0x1b48a0();
}
function _0x5363da() {
    if (_0x248d66['complete'] && _0x248d66['naturalWidth'] > 0x0) {
        _0x53ac7f['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x388f31 = Math['ceil'](_0x53ac7f['MAP']['columns'] * _0x53ac7f['MAP']['tileSize'] / _0x53ac7f['MAP']['chunkSize']);
    const _0x422c68 = Math['ceil'](_0x53ac7f['MAP']['rows'] * _0x53ac7f['MAP']['tileSize'] / _0x53ac7f['MAP']['chunkSize']);
    _0x53ac7f['MAP']['bgChunks'] = [];
    _0x53ac7f['MAP']['fgChunks'] = [];
    _0x53ac7f['MAP']['wallChunks'] = [];
    for (let _0x3ff05c = 0x0; _0x3ff05c < _0x422c68; _0x3ff05c++) {
        _0x53ac7f['MAP']['bgChunks'][_0x3ff05c] = [];
        _0x53ac7f['MAP']['fgChunks'][_0x3ff05c] = [];
        _0x53ac7f['MAP']['wallChunks'][_0x3ff05c] = [];
        for (let _0x3fa530 = 0x0; _0x3fa530 < _0x388f31; _0x3fa530++) {
            const _0x5cda21 = document['createElement']('canvas');
            _0x5cda21['width'] = _0x5cda21['height'] = _0x53ac7f['MAP']['chunkSize'];
            const _0x41d682 = document['createElement']('canvas');
            _0x41d682['width'] = _0x41d682['height'] = _0x53ac7f['MAP']['chunkSize'];
            const _0x14f635 = document['createElement']('canvas');
            _0x14f635['width'] = _0x14f635['height'] = _0x53ac7f['MAP']['chunkSize'];
            _0x53ac7f['MAP']['bgChunks'][_0x3ff05c][_0x3fa530] = _0x5cda21;
            _0x53ac7f['MAP']['fgChunks'][_0x3ff05c][_0x3fa530] = _0x41d682;
            _0x53ac7f['MAP']['wallChunks'][_0x3ff05c][_0x3fa530] = _0x14f635;
            _0x1d54a7(_0x3fa530, _0x3ff05c);
        }
    }
}
function _0x1d54a7(_0x32aeea, _0x19ec14) {
    const _0x41de96 = _0x53ac7f['MAP']['bgChunks'][_0x19ec14][_0x32aeea]['getContext']('2d', { 'alpha': !![] });
    const _0x1ebc04 = _0x53ac7f['MAP']['fgChunks'][_0x19ec14][_0x32aeea]['getContext']('2d', { 'alpha': !![] });
    const _0x310764 = _0x53ac7f['MAP']['wallChunks'][_0x19ec14] && _0x53ac7f['MAP']['wallChunks'][_0x19ec14][_0x32aeea] ? _0x53ac7f['MAP']['wallChunks'][_0x19ec14][_0x32aeea]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x41de96['imageSmoothingEnabled'] = _0x1ebc04['imageSmoothingEnabled'] = ![];
    if (_0x310764)
        _0x310764['imageSmoothingEnabled'] = ![];
    _0x41de96['clearRect'](0x0, 0x0, _0x53ac7f['MAP']['chunkSize'], _0x53ac7f['MAP']['chunkSize']);
    _0x1ebc04['clearRect'](0x0, 0x0, _0x53ac7f['MAP']['chunkSize'], _0x53ac7f['MAP']['chunkSize']);
    if (_0x310764)
        _0x310764['clearRect'](0x0, 0x0, _0x53ac7f['MAP']['chunkSize'], _0x53ac7f['MAP']['chunkSize']);
    const _0x187551 = Math['floor'](_0x32aeea * _0x53ac7f['MAP']['chunkSize'] / _0x53ac7f['MAP']['tileSize']);
    const _0x1f88b9 = Math['ceil']((_0x32aeea + 0x1) * _0x53ac7f['MAP']['chunkSize'] / _0x53ac7f['MAP']['tileSize']);
    const _0xc67f08 = Math['floor'](_0x19ec14 * _0x53ac7f['MAP']['chunkSize'] / _0x53ac7f['MAP']['tileSize']);
    const _0x461606 = Math['ceil']((_0x19ec14 + 0x1) * _0x53ac7f['MAP']['chunkSize'] / _0x53ac7f['MAP']['tileSize']);
    const _0x39d493 = 0.5;
    const _0x3c4a28 = _0x53ac7f['MAP']['tileSize'] - _0x39d493 * 0x2;
    _0x53ac7f['MAP']['layers']['forEach'](_0x37ceb4 => {
        const _0x145c7a = _0x37ceb4['name'] === 'walls';
        const _0x2bb430 = _0x37ceb4['name'] === 'trees' ? _0x1ebc04 : _0x145c7a ? _0x310764 || _0x41de96 : _0x41de96;
        for (let _0x182ca8 = Math['max'](0x0, _0xc67f08); _0x182ca8 < Math['min'](_0x53ac7f['MAP']['rows'], _0x461606); _0x182ca8++) {
            for (let _0x4770f7 = Math['max'](0x0, _0x187551); _0x4770f7 < Math['min'](_0x53ac7f['MAP']['columns'], _0x1f88b9); _0x4770f7++) {
                let _0x310025 = _0x37ceb4['data'][_0x182ca8 * _0x53ac7f['MAP']['columns'] + _0x4770f7];
                if (_0x37ceb4['name'] === 'floor2' && _0x53ac7f['MAP']['doors'] && _0x53ac7f['MAP']['doors'][_0x182ca8 * _0x53ac7f['MAP']['columns'] + _0x4770f7]) {
                    _0x310025 = 0x2;
                }
                if (_0x310025 > 0x0) {
                    const _0x122cc4 = _0x310025 - 0x1;
                    const _0x5da3de = _0x122cc4 % _0x53ac7f['MAP']['tilesetCols'] * _0x53ac7f['MAP']['tileSize'] + _0x39d493;
                    const _0x36ca81 = Math['floor'](_0x122cc4 / _0x53ac7f['MAP']['tilesetCols']) * _0x53ac7f['MAP']['tileSize'] + _0x39d493;
                    const _0x4a921e = _0x4770f7 * _0x53ac7f['MAP']['tileSize'] - _0x32aeea * _0x53ac7f['MAP']['chunkSize'];
                    const _0x107b1a = _0x182ca8 * _0x53ac7f['MAP']['tileSize'] - _0x19ec14 * _0x53ac7f['MAP']['chunkSize'];
                    if (_0x310025 === 0x4) {
                        const _0x5b1475 = 0x1;
                        const _0x142d47 = _0x5b1475 % _0x53ac7f['MAP']['tilesetCols'] * _0x53ac7f['MAP']['tileSize'] + _0x39d493;
                        const _0x33099c = Math['floor'](_0x5b1475 / _0x53ac7f['MAP']['tilesetCols']) * _0x53ac7f['MAP']['tileSize'] + _0x39d493;
                        _0x41de96['drawImage'](_0x248d66, _0x142d47, _0x33099c, _0x3c4a28, _0x3c4a28, _0x4a921e, _0x107b1a, _0x53ac7f['MAP']['tileSize'], _0x53ac7f['MAP']['tileSize']);
                        let _0x2af47e = _0x53ac7f['MAP']['doors'] ? _0x53ac7f['MAP']['doors'][_0x182ca8 * _0x53ac7f['MAP']['columns'] + _0x4770f7] : null;
                        if (!_0x2af47e) {
                            const _0xf6f2f2 = _0x53ac7f['MAP']['layers']['find'](_0x256893 => _0x256893['name'] === 'walls');
                            const _0x394ed5 = _0x182ca8 > 0x0 && _0xf6f2f2 && _0xf6f2f2['data'][(_0x182ca8 - 0x1) * _0x53ac7f['MAP']['columns'] + _0x4770f7] > 0x0;
                            const _0x12152b = _0x182ca8 < _0x53ac7f['MAP']['rows'] - 0x1 && _0xf6f2f2 && _0xf6f2f2['data'][(_0x182ca8 + 0x1) * _0x53ac7f['MAP']['columns'] + _0x4770f7] > 0x0;
                            const _0x30a4ed = _0x4770f7 > 0x0 && _0xf6f2f2 && _0xf6f2f2['data'][_0x182ca8 * _0x53ac7f['MAP']['columns'] + _0x4770f7 - 0x1] > 0x0;
                            const _0x373869 = _0x4770f7 < _0x53ac7f['MAP']['columns'] - 0x1 && _0xf6f2f2 && _0xf6f2f2['data'][_0x182ca8 * _0x53ac7f['MAP']['columns'] + _0x4770f7 + 0x1] > 0x0;
                            if (_0x30a4ed && _0x373869)
                                _0x2af47e = _0x182ca8 < _0x53ac7f['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x394ed5 && _0x12152b)
                                _0x2af47e = _0x4770f7 < _0x53ac7f['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x3121fb = 0x0;
                        if (_0x2af47e === 'bottom')
                            _0x3121fb = Math['PI'] / 0x2;
                        else if (_0x2af47e === 'left')
                            _0x3121fb = Math['PI'];
                        else if (_0x2af47e === 'top')
                            _0x3121fb = -Math['PI'] / 0x2;
                        else if (_0x2af47e === 'right')
                            _0x3121fb = 0x0;
                        if (_0x3121fb !== 0x0) {
                            _0x2bb430['save']();
                            _0x2bb430['translate'](_0x4a921e + _0x53ac7f['MAP']['tileSize'] / 0x2, _0x107b1a + _0x53ac7f['MAP']['tileSize'] / 0x2);
                            _0x2bb430['rotate'](_0x3121fb);
                            _0x2bb430['drawImage'](_0x248d66, _0x5da3de, _0x36ca81, _0x3c4a28, _0x3c4a28, -_0x53ac7f['MAP']['tileSize'] / 0x2, -_0x53ac7f['MAP']['tileSize'] / 0x2, _0x53ac7f['MAP']['tileSize'], _0x53ac7f['MAP']['tileSize']);
                            _0x2bb430['restore']();
                        } else {
                            _0x2bb430['drawImage'](_0x248d66, _0x5da3de, _0x36ca81, _0x3c4a28, _0x3c4a28, _0x4a921e, _0x107b1a, _0x53ac7f['MAP']['tileSize'], _0x53ac7f['MAP']['tileSize']);
                        }
                    } else {
                        _0x2bb430['drawImage'](_0x248d66, _0x5da3de, _0x36ca81, _0x3c4a28, _0x3c4a28, _0x4a921e, _0x107b1a, _0x53ac7f['MAP']['tileSize'], _0x53ac7f['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x2cb23a() {
    _0x248d66['crossOrigin'] = 'Anonymous';
    _0x248d66['onload'] = () => {
        _0x53ac7f['MAP']['tilesetCols'] = 0x3;
        if (_0x53ac7f['MAP']['columns'] > 0x0 && _0x53ac7f['MAP']['layers'] && _0x53ac7f['MAP']['layers']['length'] > 0x0) {
            _0x5363da();
        }
        _0x573c27();
    };
    _0x248d66['onerror'] = () => {
        _0x53ac7f['MAP']['tilesetCols'] = 0x1;
        _0x573c27();
    };
    _0x248d66['src'] = '/assets/tilesheet.png';
    _0x117bfc['crossOrigin'] = 'Anonymous';
    _0x117bfc['onload'] = _0x573c27;
    _0x117bfc['onerror'] = () => {
        _0x573c27();
    };
    _0x117bfc['src'] = '/assets/center.png';
    _0x23eda4['crossOrigin'] = 'Anonymous';
    _0x23eda4['onload'] = _0x573c27;
    _0x23eda4['onerror'] = () => {
        _0x573c27();
    };
    _0x23eda4['src'] = '/assets/table.png';
}
function _0x573c27() {
    _0x53ac7f['SYSTEM']['assetsLoaded']++;
    if (_0x53ac7f['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x53ac7f['MAP']['columns'] > 0x0 && _0x53ac7f['MAP']['layers'] && _0x53ac7f['MAP']['layers']['length'] > 0x0) {
            _0x5363da();
        }
        const _0x4ccea0 = document['getElementById']('loading-screen');
        if (_0x4ccea0)
            _0x4ccea0['style']['display'] = 'none';
        const _0x3c7ec8 = document['getElementById']('main-menu-ui');
        if (_0x3c7ec8)
            _0x3c7ec8['style']['display'] = 'flex';
        _0x381ce4();
    }
}
function _0x5399cb(_0x1cad2e, _0x272f05) {
    if (!_0x425684 || !_0x13741d)
        return;
    const _0x30eec2 = _0x1cad2e / _0x53ac7f['SYSTEM']['viewScale'] + _0x53ac7f['CAMERA']['x'];
    const _0x2a8b35 = _0x272f05 / _0x53ac7f['SYSTEM']['viewScale'] + _0x53ac7f['CAMERA']['y'];
    const _0x5e6b3f = Math['floor'](_0x30eec2 / _0x53ac7f['MAP']['tileSize']);
    const _0x37d0fe = Math['floor'](_0x2a8b35 / _0x53ac7f['MAP']['tileSize']);
    if (_0x5e6b3f >= 0x0 && _0x5e6b3f < _0x53ac7f['MAP']['columns'] && _0x37d0fe >= 0x0 && _0x37d0fe < _0x53ac7f['MAP']['rows'])
        _0x13741d['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x53ac7f['EDITOR']['selectedLayer'],
            'col': _0x5e6b3f,
            'row': _0x37d0fe,
            'gid': _0x53ac7f['EDITOR']['selectedTileGid']
        }));
}
function _0x4c64de() {
    const _0x410c74 = document['getElementById']('palette');
    if (!_0x410c74 || _0x410c74['children']['length'] > 0x0)
        return;
    const _0x36d27b = 0x40;
    const _0x5e7b69 = _0x248d66;
    const _0x899d1 = document['createElement']('div');
    _0x899d1['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x3742a5 = document['createElement']('canvas');
    _0x3742a5['width'] = 0xc0;
    _0x3742a5['height'] = 0xa0;
    _0x3742a5['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x899d1['appendChild'](_0x3742a5);
    const _0x27c064 = document['createElement']('div');
    _0x27c064['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x899d1['appendChild'](_0x27c064);
    let _0x1ffc4c = 0x0, _0x1a755e = 0x0;
    let _0x36b3e8 = ![], _0x5ce5bb = 0x0, _0x44c52c = 0x0, _0x390e56 = 0x0, _0xd6d34 = 0x0;
    function _0xcd88ec() {
        const _0x3f2d6e = _0x3742a5['getContext']('2d');
        _0x3f2d6e['clearRect'](0x0, 0x0, _0x3742a5['width'], _0x3742a5['height']);
        _0x3f2d6e['imageSmoothingEnabled'] = ![];
        if (_0x5e7b69['complete'] && _0x5e7b69['naturalWidth'] > 0x0) {
            _0x3f2d6e['drawImage'](_0x5e7b69, _0x1ffc4c, _0x1a755e, _0x3742a5['width'], _0x3742a5['height'], 0x0, 0x0, _0x3742a5['width'], _0x3742a5['height']);
        }
        _0x3f2d6e['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x3f2d6e['lineWidth'] = 0x1;
        const _0x38a444 = Math['floor'](_0x1ffc4c / _0x36d27b);
        const _0x57775c = Math['floor'](_0x1a755e / _0x36d27b);
        for (let _0x3d3832 = _0x38a444; _0x3d3832 <= _0x38a444 + Math['ceil'](_0x3742a5['width'] / _0x36d27b) + 0x1; _0x3d3832++) {
            const _0x2745f1 = _0x3d3832 * _0x36d27b - _0x1ffc4c;
            _0x3f2d6e['beginPath']();
            _0x3f2d6e['moveTo'](_0x2745f1, 0x0);
            _0x3f2d6e['lineTo'](_0x2745f1, _0x3742a5['height']);
            _0x3f2d6e['stroke']();
        }
        for (let _0x998c87 = _0x57775c; _0x998c87 <= _0x57775c + Math['ceil'](_0x3742a5['height'] / _0x36d27b) + 0x1; _0x998c87++) {
            const _0x3c8131 = _0x998c87 * _0x36d27b - _0x1a755e;
            _0x3f2d6e['beginPath']();
            _0x3f2d6e['moveTo'](0x0, _0x3c8131);
            _0x3f2d6e['lineTo'](_0x3742a5['width'], _0x3c8131);
            _0x3f2d6e['stroke']();
        }
    }
    function _0x115382() {
        const _0x27ea37 = Math['max'](0x1, Math['ceil'](_0x5e7b69['naturalWidth'] / _0x36d27b));
        const _0x4218cc = _0x53ac7f['EDITOR']['selectedTileGid'];
        if (_0x4218cc <= 0x0) {
            _0x27c064['style']['display'] = 'none';
            return;
        }
        const _0x1bf2d5 = _0x4218cc - 0x1;
        const _0x1c2bb8 = _0x1bf2d5 % _0x27ea37;
        const _0x360515 = Math['floor'](_0x1bf2d5 / _0x27ea37);
        const _0x16133a = _0x1c2bb8 * _0x36d27b - _0x1ffc4c;
        const _0x390d2e = _0x360515 * _0x36d27b - _0x1a755e;
        _0x27c064['style']['display'] = 'block';
        _0x27c064['style']['left'] = _0x16133a + 'px';
        _0x27c064['style']['top'] = _0x390d2e + 'px';
    }
    _0x5e7b69['onload'] = () => {
        _0xcd88ec();
        _0x115382();
    };
    if (_0x5e7b69['complete'] && _0x5e7b69['naturalWidth'] > 0x0) {
        _0xcd88ec();
        _0x115382();
    }
    _0x899d1['addEventListener']('mousedown', _0x1cdadf => {
        if (_0x1cdadf['button'] === 0x0) {
            _0x36b3e8 = !![];
            _0x5ce5bb = _0x1cdadf['clientX'];
            _0x44c52c = _0x1cdadf['clientY'];
            _0x390e56 = _0x1ffc4c;
            _0xd6d34 = _0x1a755e;
            _0x899d1['style']['cursor'] = 'grabbing';
            _0x1cdadf['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x5879bd => {
        if (!_0x36b3e8)
            return;
        const _0x4d3a24 = _0x5ce5bb - _0x5879bd['clientX'];
        const _0x22e143 = _0x44c52c - _0x5879bd['clientY'];
        const _0x411cf2 = Math['max'](0x0, _0x5e7b69['naturalWidth'] - _0x3742a5['width']);
        const _0x135872 = Math['max'](0x0, _0x5e7b69['naturalHeight'] - _0x3742a5['height']);
        _0x1ffc4c = Math['max'](0x0, Math['min'](_0x411cf2, _0x390e56 + _0x4d3a24));
        _0x1a755e = Math['max'](0x0, Math['min'](_0x135872, _0xd6d34 + _0x22e143));
        _0xcd88ec();
        _0x115382();
    });
    window['addEventListener']('mouseup', () => {
        if (_0x36b3e8) {
            _0x36b3e8 = ![];
            _0x899d1['style']['cursor'] = 'grab';
        }
    });
    _0x899d1['addEventListener']('click', _0x532e03 => {
        const _0x4e7779 = _0x899d1['getBoundingClientRect']();
        const _0x94c036 = _0x532e03['clientX'] - _0x4e7779['left'] + _0x1ffc4c;
        const _0xae18d1 = _0x532e03['clientY'] - _0x4e7779['top'] + _0x1a755e;
        const _0x2a3189 = Math['max'](0x1, Math['ceil'](_0x5e7b69['naturalWidth'] / _0x36d27b));
        const _0x81a138 = Math['floor'](_0x94c036 / _0x36d27b);
        const _0x11f8ba = Math['floor'](_0xae18d1 / _0x36d27b);
        const _0x446f1f = _0x11f8ba * _0x2a3189 + _0x81a138 + 0x1;
        _0x53ac7f['EDITOR']['selectedTileGid'] = _0x446f1f;
        _0x115382();
    });
    _0x410c74['appendChild'](_0x899d1);
    const _0xe708c6 = document['createElement']('div');
    _0xe708c6['className'] = 'tile-btn\x20eraser-btn';
    _0xe708c6['title'] = 'Eraser\x20(gid\x200)';
    _0xe708c6['onclick'] = () => {
        _0x53ac7f['EDITOR']['selectedTileGid'] = 0x0;
        _0x27c064['style']['display'] = 'none';
    };
    _0x410c74['appendChild'](_0xe708c6);
    const _0x16ba6f = document['getElementById']('editor-toggle-btn');
    if (_0x16ba6f) {
        _0x16ba6f['addEventListener']('click', function () {
            _0x53ac7f['EDITOR']['enabled'] = !_0x53ac7f['EDITOR']['enabled'];
            const _0x2ac086 = document['getElementById']('editor-tools');
            if (_0x53ac7f['EDITOR']['enabled']) {
                this['innerText'] = 'Editor:\x20ON';
                this['classList']['add']('active');
                if (_0x2ac086)
                    _0x2ac086['style']['display'] = 'flex';
            } else {
                this['innerText'] = 'Editor:\x20OFF';
                this['classList']['remove']('active');
                if (_0x2ac086)
                    _0x2ac086['style']['display'] = 'none';
            }
        });
    }
    const _0x19f813 = document['getElementById']('start-game-btn');
    if (_0x19f813) {
        _0x19f813['addEventListener']('click', () => {
            if (_0x13741d)
                _0x13741d['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x331e39 = document['getElementById']('rolelist-toggle-btn');
    if (_0x331e39) {
        let _0x336bf9 = 'subalignments';
        _0x331e39['addEventListener']('click', () => {
            if (_0x336bf9 === 'subalignments')
                _0x336bf9 = 'precise';
            else if (_0x336bf9 === 'precise')
                _0x336bf9 = 'off';
            else
                _0x336bf9 = 'subalignments';
            _0x331e39['innerText'] = 'Role\x20List:\x20' + _0x336bf9['charAt'](0x0)['toUpperCase']() + _0x336bf9['slice'](0x1);
            if (_0x13741d)
                _0x13741d['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x336bf9
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x42944f => {
        if (_0x42944f['id'] === 'editor-toggle-btn' || _0x42944f['id'] === 'start-game-btn' || _0x42944f['id'] === 'rolelist-toggle-btn')
            return;
        _0x42944f['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x58e3f4 => _0x58e3f4['classList']['remove']('active'));
            _0x42944f['classList']['add']('active');
            _0x53ac7f['EDITOR']['selectedLayer'] = _0x42944f['dataset']['layer'];
        });
    });
}
function _0x53b858() {
    const _0x1d4a63 = document['getElementById']('leaderboard-list');
    if (!_0x1d4a63)
        return;
    _0x1d4a63['innerHTML'] = '';
    const _0x49b3c9 = document['createElement']('div');
    _0x49b3c9['className'] = 'leaderboard-entry';
    const _0x1ed0e7 = !!_0x33402a['isBlackmailed'] || _0x117720 !== null && _0x5a6ed3['has'](_0x117720);
    if (_0x1ed0e7)
        _0x49b3c9['classList']['add']('blackmailed');
    const _0x46d138 = document['createElement']('span');
    _0x46d138['textContent'] = _0x2de396 + (_0x425684 ? '\x20[🗝️]' : '');
    if (_0x1ed0e7) {
        _0x46d138['style']['color'] = '#ff4444';
    } else if (_0xefee20['has'](_0x117720 || 0x0) && !_0x33402a['isDead']) {
        _0x46d138['style']['color'] = '#cc88ff';
    }
    _0x49b3c9['appendChild'](_0x46d138);
    _0x1d4a63['appendChild'](_0x49b3c9);
    for (const _0x4a3ac0 in _0x22ad68) {
        const _0x26c12c = document['createElement']('div');
        _0x26c12c['className'] = 'leaderboard-entry';
        const _0x4b1304 = !!_0x22ad68[_0x4a3ac0]['isBlackmailed'] || _0x5a6ed3['has'](parseInt(_0x4a3ac0, 0xa));
        if (_0x4b1304)
            _0x26c12c['classList']['add']('blackmailed');
        const _0x48faf1 = document['createElement']('span');
        _0x48faf1['textContent'] = _0x22ad68[_0x4a3ac0]['name'] + (_0x22ad68[_0x4a3ac0]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x4b1304) {
            _0x48faf1['style']['color'] = '#ff4444';
        } else if (_0xefee20['has'](parseInt(_0x4a3ac0, 0xa)) && !_0x22ad68[_0x4a3ac0]['isDead']) {
            _0x48faf1['style']['color'] = '#cc88ff';
        }
        _0x26c12c['appendChild'](_0x48faf1);
        _0x1d4a63['appendChild'](_0x26c12c);
    }
}
window['addEventListener']('resize', _0x381ce4);
function _0x381ce4() {
    _0x2a29b0['width'] = window['innerWidth'];
    _0x2a29b0['height'] = window['innerHeight'];
    _0x53ac7f['SYSTEM']['viewScale'] = Math['max'](_0x2a29b0['width'] / _0x378075, _0x2a29b0['height'] / _0x65d2c7);
    _0x53ac7f['CAMERA']['width'] = _0x2a29b0['width'] / _0x53ac7f['SYSTEM']['viewScale'];
    _0x53ac7f['CAMERA']['height'] = _0x2a29b0['height'] / _0x53ac7f['SYSTEM']['viewScale'];
    _0x134f7c['imageSmoothingEnabled'] = ![];
}
function _0x3436e6(_0xaf49bf) {
    if (_0xaf49bf['ctrlKey'] || _0xaf49bf['metaKey']) {
        if (_0xaf49bf['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0xaf49bf['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0xaf49bf['code'])) {
            _0xaf49bf['preventDefault']();
            _0xaf49bf['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x3436e6, { 'passive': ![] });
window['addEventListener']('keydown', _0x3436e6, { 'passive': ![] });
window['addEventListener']('keydown', _0x3b3380 => {
    const _0x919bf4 = _0x3b3380['key']['toLowerCase']();
    if (_0x919bf4 === 'tab') {
        _0x3b3380['preventDefault']();
        const _0x996eb5 = document['getElementById']('will-ui');
        const _0x4812e5 = document['getElementById']('will-input');
        if (!_0x996eb5 || !_0x4812e5)
            return;
        if (_0x996eb5['style']['display'] === 'flex') {
            _0x996eb5['style']['display'] = 'none';
            if (_0x53ac7f['GAME_STATE'] !== 'NIGHT' && _0x13741d)
                _0x13741d['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x4812e5['value']
                }));
            _0x4812e5['blur']();
        } else {
            if (_0x53ac7f['GAME_STATE'] === 'NIGHT') {
                _0x160fde('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x996eb5['style']['display'] = 'flex';
            _0x4812e5['focus']();
            for (let _0x12892b in _0x53ac7f['INPUTS']['keys'])
                _0x53ac7f['INPUTS']['keys'][_0x12892b] = ![];
        }
        return;
    }
    if (_0x3b3380['key'] === 'Enter') {
        if (_0x26061b) {
            const _0x188933 = document['getElementById']('play-btn');
            if (_0x188933)
                _0x188933['click']();
            return;
        }
        if (!_0x13741d || _0x13741d['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x281f6a = document['getElementById']('chat-ui');
        const _0x49ca2a = document['getElementById']('chat-input');
        if (!_0x281f6a || !_0x49ca2a)
            return;
        if (document['activeElement'] === _0x49ca2a) {
            const _0x10b578 = _0x49ca2a['value']['trim']();
            if (_0x10b578['length'] > 0x0) {
                _0x13741d['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x10b578
                }));
            }
            _0x49ca2a['value'] = '';
            _0x281f6a['style']['display'] = 'none';
            _0x49ca2a['blur']();
        } else {
            _0x281f6a['style']['display'] = 'block';
            _0x49ca2a['focus']();
            for (let _0x5b3588 in _0x53ac7f['INPUTS']['keys'])
                _0x53ac7f['INPUTS']['keys'][_0x5b3588] = ![];
        }
        _0x3b3380['preventDefault']();
        return;
    }
    if (_0x3b3380['key'] === 'Escape') {
        const _0x44cccd = document['getElementById']('role-index-modal');
        if (_0x44cccd && _0x44cccd['style']['display'] === 'flex') {
            _0x44cccd['style']['display'] = 'none';
            return;
        }
        const _0x3c7477 = document['getElementById']('guide-ui');
        if (_0x3c7477 && _0x3c7477['style']['display'] === 'flex') {
            _0x3c7477['style']['display'] = 'none';
            return;
        }
        const _0x17ed20 = document['getElementById']('ability-ui');
        if (_0x17ed20 && _0x17ed20['style']['display'] === 'block') {
            _0x17ed20['style']['display'] = 'none';
            return;
        }
        const _0x24ac39 = document['getElementById']('settings-panel');
        if (_0x24ac39 && _0x24ac39['style']['display'] === 'block') {
            _0x24ac39['style']['display'] = 'none';
            return;
        }
        const _0x5a3db1 = document['getElementById']('mayor-confirm-dialog');
        if (_0x5a3db1 && _0x5a3db1['style']['display'] === 'flex') {
            _0x5a3db1['style']['display'] = 'none';
            return;
        }
        const _0x21dfab = document['getElementById']('chat-ui');
        const _0x1ff863 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x1ff863 && _0x21dfab) {
            _0x1ff863['value'] = '';
            _0x21dfab['style']['display'] = 'none';
            _0x1ff863['blur']();
            _0x3b3380['preventDefault']();
            return;
        }
    }
    if (document['activeElement'] && document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x53ac7f['INPUTS']['keys']['hasOwnProperty'](_0x919bf4))
            _0x53ac7f['INPUTS']['keys'][_0x919bf4] = !![];
        if (!_0x13741d || _0x13741d['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x919bf4 === 'h' && !_0x3b3380['repeat']) {
            const _0x3ad55d = document['getElementById']('guide-ui');
            if (_0x3ad55d) {
                _0x3ad55d['style']['display'] = _0x3ad55d['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x919bf4 === 't' && !_0x3b3380['repeat']) {
            if (_0x33402a['isDead'])
                return;
            if (_0x5a65f4 === 'Mayor') {
                if (_0xefee20['has'](_0x117720 || 0x0)) {
                    _0x160fde('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x32167f = document['getElementById']('mayor-confirm-dialog');
                if (_0x32167f)
                    _0x32167f['style']['display'] = 'flex';
                return;
            }
            if (_0x53ac7f['GAME_STATE'] === 'NIGHT') {
                if (!_0x53ac7f['NIGHT_ABILITY_OPEN']) {
                    _0x160fde('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x2ea3e5 = document['getElementById']('ability-ui');
                if (_0x2ea3e5) {
                    if (_0x2ea3e5['style']['display'] === 'block') {
                        _0x2ea3e5['style']['display'] = 'none';
                    } else {
                        _0x3ac507();
                        _0x2ea3e5['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x53ac7f['GAME_STATE'] === 'DAY_DISCUSS' || _0x53ac7f['GAME_STATE'] === 'DAY_VOTE') {
                _0x160fde('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x919bf4 === 'e' && !_0x33402a['isDead']) {
            const _0x51efbc = Date['now']();
            if (!window['_lastDoorSend'] || _0x51efbc - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x51efbc;
                _0x13741d['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x5a9c18 => {
    if (document['activeElement'] && document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x443796 = _0x5a9c18['key']['toLowerCase']();
        if (_0x53ac7f['INPUTS']['keys']['hasOwnProperty'](_0x443796))
            _0x53ac7f['INPUTS']['keys'][_0x443796] = ![];
    }
});
window['addEventListener']('mousemove', _0x37ab75 => {
    _0x53ac7f['INPUTS']['mouseX'] = _0x37ab75['clientX'];
    _0x53ac7f['INPUTS']['mouseY'] = _0x37ab75['clientY'];
    if (_0x53ac7f['INPUTS']['isMouseDown'] && _0x53ac7f['EDITOR']['enabled']) {
        _0x5399cb(_0x37ab75['clientX'], _0x37ab75['clientY']);
    }
});
window['addEventListener']('mousedown', _0x4f189f => {
    const _0x21069d = _0x4f189f['target'];
    if (_0x21069d['closest']('#editor-ui') || _0x21069d['closest']('#leaderboard-ui') || _0x21069d['closest']('#role-index-btn-wrap') || _0x21069d['closest']('#role-index-modal') || _0x21069d['closest']('#chat-log-ui') || _0x21069d['closest']('#guide-ui') || _0x21069d['closest']('#role-list-ui') || _0x21069d['closest']('#ability-ui') || _0x21069d['closest']('#settings-panel') || _0x21069d['closest']('#mayor-confirm-dialog') || _0x21069d['closest']('#mobile-action-bar') || _0x21069d['closest']('#mobile-top-bar') || _0x21069d['closest']('#mobile-joystick-zone') || _0x21069d['closest']('#mobile-chat-overlay') || _0x21069d['closest']('#will-ui') || _0x21069d['closest']('#vote-tally-panel'))
        return;
    if (_0x4f189f['button'] === 0x0) {
        _0x53ac7f['INPUTS']['isMouseDown'] = !![];
        if (_0x53ac7f['EDITOR']['enabled'])
            _0x5399cb(_0x4f189f['clientX'], _0x4f189f['clientY']);
    }
});
window['addEventListener']('mouseup', () => {
    _0x53ac7f['INPUTS']['isMouseDown'] = ![];
});
const _0x5699b2 = document['getElementById']('leaderboard-header');
if (_0x5699b2) {
    _0x5699b2['addEventListener']('click', _0x151efb => {
        const _0x51f701 = _0x151efb['target'];
        if (_0x51f701['closest']('#settings-btn'))
            return;
        const _0x181f11 = document['getElementById']('leaderboard-list');
        const _0x596507 = document['getElementById']('leaderboard-toggle');
        if (!_0x181f11 || !_0x596507)
            return;
        if (_0x181f11['style']['display'] === 'none') {
            _0x181f11['style']['display'] = 'flex';
            _0x596507['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x181f11['style']['display'] = 'none';
            _0x596507['style']['transform'] = 'rotate(180deg)';
        }
    });
}
const _0x1e6ef2 = document['getElementById']('close-guide-btn');
if (_0x1e6ef2) {
    _0x1e6ef2['onclick'] = () => {
        const _0x53758e = document['getElementById']('guide-ui');
        if (_0x53758e)
            _0x53758e['style']['display'] = 'none';
    };
}
const _0x5d0585 = document['getElementById']('role-list-header');
if (_0x5d0585) {
    _0x5d0585['addEventListener']('click', () => {
        const _0x55d4a9 = document['getElementById']('role-list-items');
        const _0x42ef8c = document['getElementById']('role-list-toggle');
        if (!_0x55d4a9 || !_0x42ef8c)
            return;
        if (_0x55d4a9['style']['display'] === 'none') {
            _0x55d4a9['style']['display'] = 'flex';
            _0x42ef8c['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x55d4a9['style']['display'] = 'none';
            _0x42ef8c['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x4ed3d0() {
    const _0x5dfa89 = document['getElementById']('mobile-joystick-zone');
    const _0x354a46 = document['getElementById']('mobile-joystick-base');
    const _0x4e739 = document['getElementById']('mobile-joystick-knob');
    if (_0x5dfa89 && _0x354a46 && _0x4e739) {
        const _0x294b1b = 0x3e;
        const _0xa1b586 = (_0x50e946, _0x2f9a8a) => {
            const _0x141bd9 = _0x354a46['getBoundingClientRect']();
            const _0x756b9b = _0x141bd9['left'] + _0x141bd9['width'] / 0x2;
            const _0x3a5cb2 = _0x141bd9['top'] + _0x141bd9['height'] / 0x2;
            const _0x64c382 = _0x50e946 - _0x756b9b;
            const _0x533e20 = _0x2f9a8a - _0x3a5cb2;
            const _0x9049c9 = Math['hypot'](_0x64c382, _0x533e20);
            if (_0x9049c9 === 0x0) {
                _0x7c4a69 = 0x0;
                _0x316481 = 0x0;
                _0x4d18ff = ![];
                _0x4e739['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x45dd61 = Math['min'](_0x9049c9, _0x294b1b);
            const _0x9a90b8 = _0x64c382 / _0x9049c9 * _0x45dd61;
            const _0x5b3506 = _0x533e20 / _0x9049c9 * _0x45dd61;
            _0x7c4a69 = _0x9a90b8 / _0x294b1b;
            _0x316481 = _0x5b3506 / _0x294b1b;
            _0x4d18ff = _0x9049c9 >= _0x294b1b * 0.75;
            _0x4e739['style']['transform'] = 'translate(' + _0x9a90b8 + 'px,\x20' + _0x5b3506 + 'px)';
        };
        const _0x2b1c5f = _0x513d5f => {
            for (let _0x5447b6 = 0x0; _0x5447b6 < _0x513d5f['changedTouches']['length']; _0x5447b6++) {
                const _0x4cb7c3 = _0x513d5f['changedTouches'][_0x5447b6];
                if (_0x489ffe === null) {
                    _0x489ffe = _0x4cb7c3['identifier'];
                    _0xa1b586(_0x4cb7c3['clientX'], _0x4cb7c3['clientY']);
                    break;
                }
            }
        };
        const _0x4a05d7 = _0x54c27f => {
            for (let _0x5a29bf = 0x0; _0x5a29bf < _0x54c27f['changedTouches']['length']; _0x5a29bf++) {
                const _0x1464ad = _0x54c27f['changedTouches'][_0x5a29bf];
                if (_0x1464ad['identifier'] === _0x489ffe) {
                    _0xa1b586(_0x1464ad['clientX'], _0x1464ad['clientY']);
                    break;
                }
            }
        };
        const _0x19a8a6 = _0x441ab0 => {
            for (let _0xad1d97 = 0x0; _0xad1d97 < _0x441ab0['changedTouches']['length']; _0xad1d97++) {
                const _0x27e397 = _0x441ab0['changedTouches'][_0xad1d97];
                if (_0x27e397['identifier'] === _0x489ffe) {
                    _0x489ffe = null;
                    _0x7c4a69 = 0x0;
                    _0x316481 = 0x0;
                    _0x4d18ff = ![];
                    _0x4e739['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x5dfa89['addEventListener']('touchstart', _0x19b2fb => {
            _0x19b2fb['preventDefault']();
            _0x2b1c5f(_0x19b2fb);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x4a05d7, { 'passive': !![] });
        window['addEventListener']('touchend', _0x19a8a6, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x19a8a6, { 'passive': !![] });
    }
    const _0x1b9266 = (_0x4a35a6, _0x4fd82c) => {
        const _0x4d557f = _0x4a35a6 / _0x53ac7f['SYSTEM']['viewScale'];
        const _0xeeda7c = _0x4fd82c / _0x53ac7f['SYSTEM']['viewScale'];
        const _0x2d4317 = _0x33402a['x'] - _0x53ac7f['CAMERA']['x'] + _0x33402a['width'] / 0x2;
        const _0x252698 = _0x33402a['y'] - _0x53ac7f['CAMERA']['y'] + _0x33402a['height'] / 0x2;
        _0x210beb = Math['atan2'](_0xeeda7c - _0x252698, _0x4d557f - _0x2d4317);
        _0x21c45e = !![];
        _0x53ac7f['INPUTS']['mouseX'] = _0x4a35a6;
        _0x53ac7f['INPUTS']['mouseY'] = _0x4fd82c;
    };
    _0x2a29b0['addEventListener']('touchstart', _0x1bcc5f => {
        if (_0x26061b)
            return;
        for (let _0x3f5edb = 0x0; _0x3f5edb < _0x1bcc5f['changedTouches']['length']; _0x3f5edb++) {
            const _0x48b641 = _0x1bcc5f['changedTouches'][_0x3f5edb];
            if (_0x48b641['identifier'] !== _0x489ffe && _0x358dd7 === null) {
                _0x358dd7 = _0x48b641['identifier'];
                _0x1b9266(_0x48b641['clientX'], _0x48b641['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x2a29b0['addEventListener']('touchmove', _0x5a2ddc => {
        if (_0x26061b)
            return;
        for (let _0x197d36 = 0x0; _0x197d36 < _0x5a2ddc['changedTouches']['length']; _0x197d36++) {
            const _0x5dacc4 = _0x5a2ddc['changedTouches'][_0x197d36];
            if (_0x5dacc4['identifier'] === _0x358dd7) {
                _0x1b9266(_0x5dacc4['clientX'], _0x5dacc4['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x5a72f8 = _0xc52178 => {
        for (let _0x327224 = 0x0; _0x327224 < _0xc52178['changedTouches']['length']; _0x327224++) {
            const _0x2c2564 = _0xc52178['changedTouches'][_0x327224];
            if (_0x2c2564['identifier'] === _0x358dd7) {
                _0x358dd7 = null;
                _0x21c45e = ![];
                break;
            }
        }
    };
    _0x2a29b0['addEventListener']('touchend', _0x5a72f8, { 'passive': !![] });
    _0x2a29b0['addEventListener']('touchcancel', _0x5a72f8, { 'passive': !![] });
    const _0x3d2c3b = document['getElementById']('mob-sprint-btn');
    if (_0x3d2c3b) {
        _0x3d2c3b['addEventListener']('click', _0x4d2e80 => {
            _0x4d2e80['stopPropagation']();
            _0x1624d2 = !_0x1624d2;
            _0x3d2c3b['classList']['toggle']('active', _0x1624d2);
        });
    }
    const _0x3564c0 = document['getElementById']('mob-interact-btn');
    if (_0x3564c0) {
        _0x3564c0['addEventListener']('click', _0xdbc79b => {
            _0xdbc79b['stopPropagation']();
            if (!_0x33402a['isDead']) {
                const _0x3f8db2 = Date['now']();
                if (!window['_lastDoorSend'] || _0x3f8db2 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x3f8db2;
                    if (_0x13741d && _0x13741d['readyState'] === WebSocket['OPEN'])
                        _0x13741d['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0xeb1111 = document['getElementById']('mob-ability-btn');
    if (_0xeb1111) {
        _0xeb1111['addEventListener']('click', _0x188c66 => {
            _0x188c66['stopPropagation']();
            if (_0x33402a['isDead'])
                return;
            if (_0x5a65f4 === 'Mayor') {
                if (_0xefee20['has'](_0x117720 || 0x0)) {
                    _0x160fde('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x4cdbd6 = document['getElementById']('mayor-confirm-dialog');
                if (_0x4cdbd6)
                    _0x4cdbd6['style']['display'] = 'flex';
                return;
            }
            if (_0x53ac7f['GAME_STATE'] === 'NIGHT') {
                if (!_0x53ac7f['NIGHT_ABILITY_OPEN']) {
                    _0x160fde('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x5804ed = document['getElementById']('ability-ui');
                if (_0x5804ed) {
                    if (_0x5804ed['style']['display'] === 'block') {
                        _0x5804ed['style']['display'] = 'none';
                    } else {
                        _0x3ac507();
                        _0x5804ed['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x53ac7f['GAME_STATE'] === 'DAY_DISCUSS' || _0x53ac7f['GAME_STATE'] === 'DAY_VOTE') {
                _0x160fde('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0xf3ad25 = document['getElementById']('will-ui');
    const _0x39171a = document['getElementById']('will-input');
    const _0x10baad = document['getElementById']('close-will-btn');
    const _0x1f2fb8 = () => {
        if (!_0xf3ad25)
            return;
        if (_0xf3ad25['style']['display'] === 'flex') {
            _0xf3ad25['style']['display'] = 'none';
            if (_0x53ac7f['GAME_STATE'] !== 'NIGHT' && _0x13741d && _0x13741d['readyState'] === WebSocket['OPEN'] && _0x39171a) {
                _0x13741d['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x39171a['value']
                }));
            }
            if (_0x39171a)
                _0x39171a['blur']();
        } else {
            if (_0x53ac7f['GAME_STATE'] === 'NIGHT') {
                _0x160fde('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0xf3ad25['style']['display'] = 'flex';
            if (_0x39171a)
                _0x39171a['focus']();
        }
    };
    if (_0x10baad)
        _0x10baad['addEventListener']('click', _0x28d8b2 => {
            _0x28d8b2['stopPropagation']();
            _0x1f2fb8();
        });
    const _0x303400 = document['getElementById']('mobile-chat-overlay');
    const _0x3f5caa = document['getElementById']('mobile-chat-input');
    const _0x4df731 = document['getElementById']('mobile-chat-send');
    const _0x3340c4 = document['getElementById']('mobile-chat-cancel');
    const _0x16e193 = () => {
        if (!_0x303400 || !_0x3f5caa)
            return;
        _0x303400['style']['display'] = 'flex';
        _0x3f5caa['value'] = '';
        _0x3f5caa['focus']();
    };
    const _0x2e89cd = () => {
        if (!_0x303400 || !_0x3f5caa)
            return;
        _0x303400['style']['display'] = 'none';
        _0x3f5caa['blur']();
    };
    const _0x91a3c3 = () => {
        if (!_0x3f5caa)
            return;
        const _0x4e9c74 = _0x3f5caa['value']['trim']();
        if (_0x4e9c74['length'] > 0x0 && _0x13741d && _0x13741d['readyState'] === WebSocket['OPEN']) {
            _0x13741d['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x4e9c74
            }));
        }
        _0x3f5caa['value'] = '';
        _0x2e89cd();
    };
    if (_0x4df731)
        _0x4df731['addEventListener']('click', _0x52b3cf => {
            _0x52b3cf['stopPropagation']();
            _0x91a3c3();
        });
    if (_0x3340c4)
        _0x3340c4['addEventListener']('click', _0x4ce769 => {
            _0x4ce769['stopPropagation']();
            _0x2e89cd();
        });
    if (_0x3f5caa) {
        _0x3f5caa['addEventListener']('keydown', _0x2f3475 => {
            if (_0x2f3475['key'] === 'Enter') {
                _0x2f3475['preventDefault']();
                _0x91a3c3();
            } else if (_0x2f3475['key'] === 'Escape') {
                _0x2e89cd();
            }
        });
    }
    const _0x2eb341 = document['getElementById']('mob-top-chat');
    if (_0x2eb341)
        _0x2eb341['addEventListener']('click', _0x4d28f6 => {
            _0x4d28f6['stopPropagation']();
            _0x16e193();
        });
    const _0x5beefd = document['getElementById']('mob-top-will');
    if (_0x5beefd)
        _0x5beefd['addEventListener']('click', _0x535c73 => {
            _0x535c73['stopPropagation']();
            _0x1f2fb8();
        });
    const _0x4d5be1 = document['getElementById']('mob-top-roles');
    if (_0x4d5be1) {
        _0x4d5be1['addEventListener']('click', _0x201896 => {
            _0x201896['stopPropagation']();
            const _0x263833 = document['getElementById']('role-list-ui');
            const _0x1848bf = document['getElementById']('leaderboard-ui');
            if (_0x1848bf)
                _0x1848bf['style']['display'] = 'none';
            if (_0x263833)
                _0x263833['style']['display'] = _0x263833['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0xf9588b = document['getElementById']('mob-top-players');
    if (_0xf9588b) {
        _0xf9588b['addEventListener']('click', _0x11b812 => {
            _0x11b812['stopPropagation']();
            const _0x1603ba = document['getElementById']('leaderboard-ui');
            const _0x458c55 = document['getElementById']('role-list-ui');
            if (_0x458c55)
                _0x458c55['style']['display'] = 'none';
            if (_0x1603ba)
                _0x1603ba['style']['display'] = _0x1603ba['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x2df0ab = document['getElementById']('mob-top-help');
    if (_0x2df0ab) {
        _0x2df0ab['addEventListener']('click', _0x2fb0f5 => {
            _0x2fb0f5['stopPropagation']();
            const _0x274a6f = document['getElementById']('guide-ui');
            if (_0x274a6f)
                _0x274a6f['style']['display'] = _0x274a6f['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x4a4ba2) {
            _0x4a4ba2 = !![];
            _0x4052d9();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
