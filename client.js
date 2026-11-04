document['addEventListener']('contextmenu', _0x4e449f => _0x4e449f['preventDefault']());
const _0x2a7dc1 = {
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
let _0x3dc030 = '';
function _0x18f53d(_0x21ffba, _0xd86493) {
    const _0x41c4a9 = document['getElementById']('role-list-ui');
    const _0x99198b = document['getElementById']('role-list-items');
    if (!_0x41c4a9 || !_0x99198b)
        return;
    if (!_0xd86493 || _0xd86493 === 'off' || !_0x21ffba || _0x21ffba['length'] === 0x0) {
        _0x41c4a9['style']['display'] = 'none';
        return;
    }
    const _0x1dccd2 = _0xd86493 + '|' + JSON['stringify'](_0x21ffba);
    if (_0x1dccd2 === _0x3dc030)
        return;
    _0x3dc030 = _0x1dccd2;
    const _0x5c1060 = document['getElementById']('role-tooltip');
    if (_0x5c1060) {
        _0x5c1060['style']['visibility'] = 'hidden';
        _0x5c1060['style']['opacity'] = '0';
    }
    _0x41c4a9['style']['display'] = 'flex';
    _0x99198b['innerHTML'] = '';
    _0x21ffba['forEach'](_0x4ea936 => {
        const _0x53b647 = document['createElement']('div');
        _0x53b647['className'] = 'role-list-entry';
        const _0x340c09 = _0x4ea936['name']['includes']('Mafia') || _0x4ea936['name'] === 'Skinwalker' || _0x4ea936['name'] === 'Blackmailer';
        _0x53b647['classList']['add'](_0x340c09 ? 'mafia' : 'town');
        if (_0xd86493 === 'precise' && _0x4ea936['isDead']) {
            _0x53b647['classList']['remove']('town', 'mafia');
            _0x53b647['classList']['add']('dead');
            _0x53b647['innerHTML'] = '<span>' + _0x4ea936['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x37f0f2 = _0x4ea936['count'] !== undefined && _0x4ea936['count'] !== null ? _0x4ea936['count'] + 'x\x20' : '';
            _0x53b647['innerHTML'] = '<span>' + _0x37f0f2 + _0x4ea936['name'] + '</span>';
        }
        if (_0xd86493 === 'subalignments' && _0x2a7dc1[_0x4ea936['name']]) {
            _0x53b647['style']['cursor'] = 'pointer';
            _0x53b647['addEventListener']('mouseenter', () => {
                const _0x2aea5c = document['getElementById']('role-tooltip');
                if (!_0x2aea5c)
                    return;
                const _0x3696cf = _0x2a7dc1[_0x4ea936['name']]['join'](',\x20');
                _0x2aea5c['innerHTML'] = '';
                const _0xdc6092 = document['createElement']('span');
                _0xdc6092['style']['color'] = '#ffcc00';
                _0xdc6092['textContent'] = _0x4ea936['name'];
                _0x2aea5c['appendChild'](_0xdc6092);
                _0x2aea5c['appendChild'](document['createElement']('br'));
                _0x2aea5c['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x3696cf));
                const _0x1593fc = _0x53b647['getBoundingClientRect']();
                _0x2aea5c['style']['left'] = _0x1593fc['left'] - 0xeb + 'px';
                _0x2aea5c['style']['top'] = _0x1593fc['top'] + 'px';
                _0x2aea5c['style']['display'] = 'block';
                _0x2aea5c['style']['visibility'] = 'visible';
                _0x2aea5c['style']['opacity'] = '1';
            });
            _0x53b647['addEventListener']('mouseleave', () => {
                const _0x47728e = document['getElementById']('role-tooltip');
                if (_0x47728e) {
                    _0x47728e['style']['display'] = 'none';
                    _0x47728e['style']['visibility'] = 'hidden';
                    _0x47728e['style']['opacity'] = '0';
                }
            });
        }
        _0x99198b['appendChild'](_0x53b647);
    });
}
let _0x35f6c9 = null;
let _0x180928 = null;
const _0x15964a = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x8b0c49 = 'Player???';
let _0x14f3a6 = ![];
let _0x141786 = {};
let _0x200614 = null;
let _0x31e4ce = 0x0;
let _0xcba136 = 0x0;
let _0x13d97d = new Set();
let _0x26be4a = ![];
let _0x2d6b8c = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x231526 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x432d54 = ![];
let _0x13def9 = null;
let _0xf556f8 = 0x0;
let _0x13422f = 0x0;
let _0x5693f2 = ![];
let _0x25f25a = ![];
let _0x4d53b5 = 0x0;
let _0x525c7e = null;
let _0x4504d8 = ![];
let _0x5888f0 = 0x0;
let _0x1a8fda = 0x0;
let _0x5e844e = [];
let _0x584fe3 = [];
let _0x2e3e7d = new Set();
const _0xe6f244 = ((() => {
    const _0x1083b7 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x1c6c0e = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x4642cf = 0x320;
    const _0x2b5eb6 = {};
    const _0x20dc9b = {};
    let _0x3ef27a = null;
    let _0x472c16 = _0x1c6c0e === 0x0;
    let _0x327c22 = ![];
    for (const [_0x4e780f, _0x1905d2] of Object['entries'](_0x1083b7)) {
        const _0x418a29 = new Audio(_0x1905d2);
        _0x418a29['loop'] = !![];
        _0x418a29['volume'] = 0x0;
        _0x418a29['preload'] = 'auto';
        _0x2b5eb6[_0x4e780f] = _0x418a29;
        _0x20dc9b[_0x4e780f] = null;
    }
    const _0x41f9b2 = _0x4fb0ae => Math['min'](0x1, Math['max'](0x0, _0x4fb0ae));
    function _0x1cc53e(_0x5b007b) {
        if (_0x20dc9b[_0x5b007b] !== null) {
            cancelAnimationFrame(_0x20dc9b[_0x5b007b]);
            _0x20dc9b[_0x5b007b] = null;
        }
    }
    function _0x2af88e(_0x24a499, _0x163f23, _0x58bd44, _0x20aa9f, _0x23fb95) {
        _0x1cc53e(_0x24a499);
        const _0x4fa7f5 = _0x2b5eb6[_0x24a499];
        const _0x382992 = performance['now']();
        const _0x55491f = _0x3b9455 => {
            const _0x38fe66 = _0x41f9b2((_0x3b9455 - _0x382992) / _0x20aa9f);
            const _0x3c4b54 = _0x41f9b2(_0x163f23 + (_0x58bd44 - _0x163f23) * _0x38fe66);
            _0x4fa7f5['volume'] = _0x472c16 ? 0x0 : _0x3c4b54;
            if (_0x38fe66 < 0x1) {
                _0x20dc9b[_0x24a499] = requestAnimationFrame(_0x55491f);
            } else {
                _0x20dc9b[_0x24a499] = null;
                _0x4fa7f5['volume'] = _0x472c16 ? 0x0 : _0x41f9b2(_0x58bd44);
                if (_0x23fb95)
                    _0x23fb95();
            }
        };
        _0x20dc9b[_0x24a499] = requestAnimationFrame(_0x55491f);
    }
    function _0x263f5b(_0x36400a) {
        const _0x15f250 = _0x36400a['play']();
        if (_0x15f250 && _0x15f250['catch']) {
            _0x15f250['catch'](() => {
                if (!_0x327c22) {
                    const _0x4db9c6 = () => {
                        _0x327c22 = !![];
                        _0x36400a['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x4db9c6);
                        document['removeEventListener']('keydown', _0x4db9c6);
                        document['removeEventListener']('touchstart', _0x4db9c6);
                    };
                    document['addEventListener']('click', _0x4db9c6, { 'once': !![] });
                    document['addEventListener']('keydown', _0x4db9c6, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x4db9c6, { 'once': !![] });
                }
            });
        }
    }
    function _0x248035(_0x5cf584) {
        if (!_0x1083b7[_0x5cf584])
            return;
        if (_0x3ef27a === _0x5cf584)
            return;
        const _0x450ec8 = _0x3ef27a;
        _0x3ef27a = _0x5cf584;
        const _0x3938a2 = _0x2b5eb6[_0x5cf584];
        _0x1cc53e(_0x5cf584);
        _0x3938a2['currentTime'] = 0x0;
        _0x3938a2['volume'] = 0x0;
        _0x263f5b(_0x3938a2);
        _0x2af88e(_0x5cf584, 0x0, _0x1c6c0e, _0x4642cf);
        if (_0x450ec8 && _0x2b5eb6[_0x450ec8]) {
            const _0x44f064 = _0x450ec8;
            const _0x7784f4 = _0x2b5eb6[_0x44f064];
            const _0xc0ba5d = _0x41f9b2(_0x7784f4['volume']);
            _0x2af88e(_0x44f064, _0xc0ba5d, 0x0, _0x4642cf, () => {
                _0x7784f4['pause']();
                _0x7784f4['currentTime'] = 0x0;
            });
        }
    }
    function _0x1b59ff(_0x4a5ba0) {
        _0x1c6c0e = _0x41f9b2(_0x4a5ba0);
        localStorage['setItem']('musicVolume', String(_0x1c6c0e));
        if (!_0x472c16 && _0x3ef27a && _0x20dc9b[_0x3ef27a] === null) {
            _0x2b5eb6[_0x3ef27a]['volume'] = _0x1c6c0e;
        }
    }
    function _0x456636() {
        return _0x1c6c0e;
    }
    function _0x4912ec(_0x4392f6) {
        _0x472c16 = _0x4392f6;
        for (const _0x77b6cb of Object['keys'](_0x2b5eb6)) {
            if (_0x20dc9b[_0x77b6cb] === null) {
                _0x2b5eb6[_0x77b6cb]['volume'] = _0x4392f6 || _0x77b6cb !== _0x3ef27a ? 0x0 : _0x1c6c0e;
            }
        }
    }
    function _0x236693() {
        return _0x472c16;
    }
    function _0xd9e3e7(_0x22f3bf) {
        if (_0x22f3bf === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x22f3bf === 'DAY_VOTE')
            return 'voting';
        if (_0x22f3bf === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x5d2c9f(_0x1442ba) {
        _0x248035(_0xd9e3e7(_0x1442ba));
    }
    function _0x3cf762(_0x16699c) {
        _0x248035(_0x16699c);
    }
    return {
        'play': _0x248035,
        'onStateChange': _0x5d2c9f,
        'onSoundEvent': _0x3cf762,
        'setVolume': _0x1b59ff,
        'getVolume': _0x456636,
        'setMuted': _0x4912ec,
        'isMuted': _0x236693
    };
})());
const _0x58c556 = ((() => {
    const _0x33f73e = 0x258;
    const _0x11b941 = 0xb4;
    const _0x346eac = 0x708;
    const _0x1ac124 = 0x140;
    const _0x27dad8 = 0.18;
    const _0x35540b = 0.95;
    const _0x2183e2 = new Audio('audio/heartbeat.mp3');
    _0x2183e2['loop'] = ![];
    _0x2183e2['preload'] = 'auto';
    _0x2183e2['volume'] = 0x0;
    let _0x527f4c = 0x0;
    let _0x743c8f = Infinity;
    function _0x21aa65(_0x445145, _0x44213c, _0xc79b75) {
        return Math['min'](_0xc79b75, Math['max'](_0x44213c, _0x445145));
    }
    function _0x324c3a(_0x4f348c, _0x627293, _0xb70c1d) {
        return _0x4f348c + (_0x627293 - _0x4f348c) * _0xb70c1d;
    }
    function _0x383c3e(_0x1d785a) {
        if (_0x1c538f['GAME_STATE'] !== 'NIGHT' || _0x1ac1c2['isDead'] || _0x200614 === 'Skinwalker' || _0x200614 === 'Blackmailer') {
            _0x743c8f = Infinity;
            return;
        }
        const _0x2b6145 = _0x1ac1c2['x'] + 22.5;
        const _0x11e80a = _0x1ac1c2['y'] + 22.5;
        let _0x5a3d16 = Infinity;
        for (const _0x2e4f7b in _0x141786) {
            const _0x2d8e10 = _0x141786[_0x2e4f7b];
            if (!_0x2d8e10['isDark'] || _0x2d8e10['isDead'])
                continue;
            const _0x50848c = _0x2d8e10['renderX'] + 22.5 - _0x2b6145;
            const _0x41c837 = _0x2d8e10['renderY'] + 22.5 - _0x11e80a;
            const _0x11818a = Math['sqrt'](_0x50848c * _0x50848c + _0x41c837 * _0x41c837);
            if (_0x11818a < _0x5a3d16)
                _0x5a3d16 = _0x11818a;
        }
        _0x743c8f = _0x5a3d16;
        if (_0x5a3d16 > _0x33f73e)
            return;
        const _0x233464 = 0x1 - _0x21aa65((_0x5a3d16 - _0x11b941) / (_0x33f73e - _0x11b941), 0x0, 0x1);
        const _0x380b1f = _0x324c3a(_0x346eac, _0x1ac124, _0x233464);
        const _0x407714 = _0x324c3a(_0x27dad8, _0x35540b, _0x233464);
        if (_0x1d785a >= _0x527f4c) {
            _0x2183e2['currentTime'] = 0x0;
            _0x2183e2['volume'] = _0xe6f244['isMuted']() ? 0x0 : _0x21aa65(_0x407714 * _0xe6f244['getVolume']() / 0.7, 0x0, 0x1);
            _0x2183e2['play']()['catch'](() => {
            });
            _0x527f4c = _0x1d785a + _0x380b1f;
        }
    }
    return { 'tick': _0x383c3e };
})());
function _0x3c1ffd() {
    const _0xa868f1 = document['getElementById']('mob-ability-btn');
    if (!_0xa868f1)
        return;
    const _0x1ba651 = _0x1c538f['GAME_STATE'] === 'NIGHT' && !_0x1ac1c2['isDead'];
    const _0x25eee4 = _0x200614 === 'Mayor' && !_0x13d97d['has'](_0x180928) && !_0x1ac1c2['isDead'];
    if (_0x1ba651 || _0x25eee4) {
        _0xa868f1['style']['display'] = 'flex';
    } else {
        _0xa868f1['style']['display'] = 'none';
    }
}
function _0x6e8565() {
    const _0xc63b11 = document['getElementById']('mobile-joystick-zone');
    const _0x5e6e2b = document['getElementById']('mobile-top-bar');
    const _0x461aaa = document['getElementById']('mobile-action-bar');
    if (!_0xc63b11 || !_0x5e6e2b || !_0x461aaa)
        return;
    if (!_0x534ea6 && _0x231526) {
        _0xc63b11['style']['display'] = 'flex';
        _0x5e6e2b['style']['display'] = 'flex';
        _0x461aaa['style']['display'] = 'flex';
        _0x3c1ffd();
    } else {
        _0xc63b11['style']['display'] = 'none';
        _0x5e6e2b['style']['display'] = 'none';
        _0x461aaa['style']['display'] = 'none';
    }
}
const _0x4f55b8 = document['getElementById']('gameCanvas');
const _0x4363e3 = _0x4f55b8['getContext']('2d', { 'alpha': ![] });
const _0x3b473b = 0x500;
const _0x437f97 = 0x2d0;
const _0x1c538f = {
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
        'width': _0x3b473b,
        'height': _0x437f97
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
const _0x1ac1c2 = {
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
const _0x181f8c = new Image();
const _0xdb809b = new Image();
const _0x2cf51c = new Image();
const _0x32de9a = new Image();
_0x32de9a['src'] = 'assets/mayor\x20cosmetic.png';
const _0x1ab77d = [
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
const _0x2d9023 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x2bfb82 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x2bfb82 === 'body1.png' || _0x2bfb82 === 'body1')
    _0x2bfb82 = 'body01.png';
if (!_0x2bfb82['endsWith']('.png'))
    _0x2bfb82 += '.png';
let _0x122e55 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x122e55['endsWith']('.png'))
    _0x122e55 += '.png';
let _0x534ea6 = !![];
let _0x1bb7b6 = null;
let _0x49f8ca = null;
let _0x149664 = 0x3c;
let _0x1e1f95 = 0x2d;
const _0x51e025 = {};
const _0x1d8056 = new Image();
_0x1d8056['src'] = 'assets/yanito932.png';
_0x51e025['assets/yanito932.png'] = _0x1d8056;
function _0x314e81(_0x4c212a) {
    if (!_0x51e025[_0x4c212a] || !_0x51e025[_0x4c212a]['complete'] && _0x51e025[_0x4c212a]['naturalWidth'] === 0x0 && _0x51e025[_0x4c212a]['naturalHeight'] === 0x0) {
        const _0x1fc4cf = new Image();
        _0x1fc4cf['src'] = _0x4c212a;
        _0x51e025[_0x4c212a] = _0x1fc4cf;
    }
    return _0x51e025[_0x4c212a];
}
function _0x564f96(_0x40f137, _0x243460, _0x1672eb, _0x3f6e14, _0x104fb0) {
    try {
        const _0x1cd1f5 = 'assets/' + (_0x243460 || 'body01.png');
        const _0x2a2b8e = _0x314e81(_0x1cd1f5);
        if (_0x2a2b8e['complete'] && _0x2a2b8e['naturalWidth'] > 0x0) {
            _0x40f137['drawImage'](_0x2a2b8e, -_0x3f6e14 / 0x2, -_0x104fb0 / 0x2, _0x3f6e14, _0x104fb0);
        }
        if (_0x1672eb === null || _0x1672eb === undefined)
            return;
        const _0x6cda57 = 'assets/' + _0x1672eb;
        const _0x2343dd = _0x314e81(_0x6cda57);
        if (_0x2343dd['complete'] && _0x2343dd['naturalWidth'] > 0x0) {
            _0x40f137['drawImage'](_0x2343dd, -_0x3f6e14 / 0x2, -_0x104fb0 / 0x2, _0x3f6e14, _0x104fb0);
        }
    } catch (_0x2901ae) {
    }
}
function _0x34318f() {
    const _0x2df90e = document['getElementById']('body-skin-grid');
    const _0x297184 = document['getElementById']('eyes-skin-grid');
    if (!_0x2df90e || !_0x297184)
        return;
    _0x2df90e['innerHTML'] = '';
    _0x1ab77d['forEach'](_0x31c1ac => {
        const _0x3d822d = document['createElement']('button');
        _0x3d822d['className'] = 'skin-btn' + (_0x31c1ac === _0x2bfb82 ? '\x20selected' : '');
        const _0x4646b7 = document['createElement']('img');
        _0x4646b7['src'] = 'assets/' + _0x31c1ac;
        _0x3d822d['appendChild'](_0x4646b7);
        _0x3d822d['onclick'] = () => {
            _0x2bfb82 = _0x31c1ac;
            localStorage['setItem']('selectedBody', _0x31c1ac);
            _0x2df90e['querySelectorAll']('.skin-btn')['forEach'](_0x415fc8 => _0x415fc8['classList']['remove']('selected'));
            _0x3d822d['classList']['add']('selected');
        };
        _0x2df90e['appendChild'](_0x3d822d);
    });
    _0x297184['innerHTML'] = '';
    _0x2d9023['forEach'](_0x1f85bd => {
        const _0x20db3b = document['createElement']('button');
        _0x20db3b['className'] = 'skin-btn' + (_0x1f85bd === _0x122e55 ? '\x20selected' : '');
        const _0x54fe97 = document['createElement']('img');
        _0x54fe97['src'] = 'assets/' + _0x1f85bd;
        _0x20db3b['appendChild'](_0x54fe97);
        _0x20db3b['onclick'] = () => {
            _0x122e55 = _0x1f85bd;
            localStorage['setItem']('selectedEyes', _0x1f85bd);
            _0x297184['querySelectorAll']('.skin-btn')['forEach'](_0x58f031 => _0x58f031['classList']['remove']('selected'));
            _0x20db3b['classList']['add']('selected');
        };
        _0x297184['appendChild'](_0x20db3b);
    });
}
function _0x16af8d(_0xea25cd) {
    if (!_0x1c538f['MAP']['columns'] || !_0x1c538f['CAMERA']['width'])
        return;
    const _0x28e215 = Math['max'](0x0, _0x1c538f['MAP']['columns'] * _0x1c538f['MAP']['tileSize'] - _0x1c538f['CAMERA']['width']);
    const _0x62190 = Math['max'](0x0, _0x1c538f['MAP']['rows'] * _0x1c538f['MAP']['tileSize'] - _0x1c538f['CAMERA']['height']);
    if (_0x1bb7b6 === null) {
        _0x1bb7b6 = _0x28e215 / 0x2;
        _0x49f8ca = _0x62190 / 0x2;
    }
    _0x1bb7b6 += _0x149664 * _0xea25cd;
    _0x49f8ca += _0x1e1f95 * _0xea25cd;
    if (_0x1bb7b6 <= 0x0) {
        _0x1bb7b6 = 0x0;
        _0x149664 = Math['abs'](_0x149664);
    } else if (_0x1bb7b6 >= _0x28e215) {
        _0x1bb7b6 = _0x28e215;
        _0x149664 = -Math['abs'](_0x149664);
    }
    if (_0x49f8ca <= 0x0) {
        _0x49f8ca = 0x0;
        _0x1e1f95 = Math['abs'](_0x1e1f95);
    } else if (_0x49f8ca >= _0x62190) {
        _0x49f8ca = _0x62190;
        _0x1e1f95 = -Math['abs'](_0x1e1f95);
    }
    _0x1c538f['CAMERA']['x'] = _0x1bb7b6;
    _0x1c538f['CAMERA']['y'] = _0x49f8ca;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x53bf1e = document['getElementById']('play-btn');
    const _0x2513ba = document['getElementById']('username-input');
    const _0x8934e2 = localStorage['getItem']('playerName');
    if (_0x8934e2 && _0x2513ba) {
        _0x2513ba['value'] = _0x8934e2;
    }
    const _0x5784c7 = () => {
        _0xe6f244['play']('wait');
        document['removeEventListener']('click', _0x5784c7);
        document['removeEventListener']('keydown', _0x5784c7);
        document['removeEventListener']('touchstart', _0x5784c7);
    };
    document['addEventListener']('click', _0x5784c7, { 'once': !![] });
    document['addEventListener']('keydown', _0x5784c7, { 'once': !![] });
    document['addEventListener']('touchstart', _0x5784c7, { 'once': !![] });
    if (_0x53bf1e) {
        _0x53bf1e['addEventListener']('click', () => {
            const _0x65eb87 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x49f076 = window['_FB'] && window['_FB']['_userData'];
            let _0x1626e1 = !![];
            if (_0x65eb87 && _0x49f076 && _0x49f076['username']) {
                _0x8b0c49 = _0x49f076['username'];
                _0x1626e1 = ![];
            } else {
                const _0x4b6494 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x8b0c49 = 'user' + _0x4b6494;
                _0x1626e1 = !![];
            }
            const _0x50edcc = _0x1626e1 ? 'body01.png' : _0x2bfb82;
            const _0x282db7 = _0x1626e1 ? 'eyes4.png' : _0x122e55;
            const _0x2d1796 = !_0x1626e1 && _0x49f076 && _0x49f076['photoURL'] ? _0x49f076['photoURL'] : '';
            const _0x3b7bdb = !_0x1626e1 && _0x65eb87 ? _0x65eb87['uid'] : '';
            localStorage['setItem']('playerName', _0x8b0c49);
            _0x534ea6 = ![];
            _0x1c538f['CAMERA']['x'] = null;
            _0x1c538f['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x292ffa = document['getElementById']('chat-log-wrap');
            if (_0x292ffa)
                _0x292ffa['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x21412e = document['getElementById']('controls-hint');
            if (_0x21412e && !_0x231526)
                _0x21412e['style']['display'] = 'block';
            _0x6e8565();
            if (_0x231526) {
                const _0x1a1a1a = document['getElementById']('leaderboard-list');
                const _0x4e4e69 = document['getElementById']('leaderboard-toggle');
                if (_0x1a1a1a) {
                    _0x1a1a1a['style']['display'] = 'none';
                    if (_0x4e4e69)
                        _0x4e4e69['style']['transform'] = 'rotate(180deg)';
                }
                const _0x35f85a = document['getElementById']('role-list-items');
                const _0x5d3adc = document['getElementById']('role-list-toggle');
                if (_0x35f85a) {
                    _0x35f85a['style']['display'] = 'none';
                    if (_0x5d3adc)
                        _0x5d3adc['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x321b50 = !_0x1626e1 && _0x49f076 ? {
                'townWins': _0x49f076['townWins'] || 0x0,
                'mafiaWins': _0x49f076['mafiaWins'] || 0x0,
                'deaths': _0x49f076['deaths'] || 0x0,
                'townLosses': _0x49f076['townLosses'] || 0x0,
                'mafiaLosses': _0x49f076['mafiaLosses'] || 0x0
            } : null;
            const _0x59a396 = JSON['stringify']({
                'type': 'join',
                'name': _0x8b0c49,
                'token': _0x15964a,
                'body': _0x50edcc,
                'eyes': _0x282db7,
                'isGuest': _0x1626e1,
                'uid': _0x3b7bdb,
                'photoURL': _0x2d1796,
                'accountStats': _0x321b50
            });
            if (_0x35f6c9 && _0x35f6c9['readyState'] === WebSocket['OPEN']) {
                _0x35f6c9['send'](_0x59a396);
            } else if (!_0x35f6c9 || _0x35f6c9['readyState'] === WebSocket['CLOSED'] || _0x35f6c9['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x59a396;
                _0x2b4230();
            }
        });
    }
    _0x34318f();
    _0x2b4230();
    _0xc2cf8d();
    _0xeaa39d();
    _0x5813c6();
    _0x55b709();
});
const _0x14cd5c = [
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
let _0x268941 = 'Town';
let _0x4b646b = 0x0;
function _0x4b4175() {
    const _0x3808e0 = document['getElementById']('role-index-main-tabs');
    const _0x45423a = document['getElementById']('role-index-tabs');
    const _0x15d6d9 = document['getElementById']('role-index-body');
    if (!_0x45423a || !_0x15d6d9)
        return;
    if (_0x3808e0) {
        _0x3808e0['innerHTML'] = '';
        const _0x2a63b0 = document['createElement']('button');
        _0x2a63b0['className'] = 'role-index-main-tab-btn\x20main-town' + (_0x268941 === 'Town' ? '\x20active' : '');
        _0x2a63b0['textContent'] = 'TOWN';
        _0x2a63b0['addEventListener']('click', () => {
            _0x268941 = 'Town';
            _0x4b646b = 0x0;
            _0x4b4175();
        });
        _0x3808e0['appendChild'](_0x2a63b0);
        const _0x5100b7 = document['createElement']('button');
        _0x5100b7['className'] = 'role-index-main-tab-btn\x20main-mafia' + (_0x268941 === 'Mafia' ? '\x20active' : '');
        _0x5100b7['textContent'] = 'MAFIA';
        _0x5100b7['addEventListener']('click', () => {
            _0x268941 = 'Mafia';
            _0x4b646b = 0x0;
            _0x4b4175();
        });
        _0x3808e0['appendChild'](_0x5100b7);
    }
    const _0x1a610c = _0x14cd5c['filter'](_0x4528af => _0x4528af['faction'] === _0x268941);
    _0x45423a['innerHTML'] = '';
    _0x1a610c['forEach']((_0x2dab51, _0x4f404a) => {
        const _0x33b3be = document['createElement']('button');
        _0x33b3be['className'] = 'role-index-tab-btn' + (_0x2dab51['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x4f404a === _0x4b646b ? '\x20active' : '');
        _0x33b3be['textContent'] = _0x2dab51['name'];
        _0x33b3be['addEventListener']('click', () => {
            _0x4b646b = _0x4f404a;
            _0x4b4175();
        });
        _0x45423a['appendChild'](_0x33b3be);
    });
    const _0x485334 = _0x1a610c[_0x4b646b] || _0x1a610c[0x0];
    _0x15d6d9['innerHTML'] = '';
    if (!_0x485334)
        return;
    const _0x41fae9 = document['createElement']('div');
    _0x41fae9['className'] = 'role-index-title-row';
    const _0x3eca1f = document['createElement']('span');
    _0x3eca1f['className'] = 'role-index-name\x20' + (_0x485334['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0x3eca1f['textContent'] = _0x485334['name'];
    _0x41fae9['appendChild'](_0x3eca1f);
    const _0x4dd766 = document['createElement']('span');
    _0x4dd766['className'] = 'role-index-faction-badge\x20' + (_0x485334['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x4dd766['textContent'] = _0x485334['faction'];
    _0x41fae9['appendChild'](_0x4dd766);
    _0x15d6d9['appendChild'](_0x41fae9);
    _0x485334['paragraphs']['forEach'](_0x150ae6 => {
        const _0x2e2be8 = document['createElement']('p');
        _0x2e2be8['className'] = 'role-index-desc-paragraph';
        _0x2e2be8['innerHTML'] = _0x150ae6;
        _0x15d6d9['appendChild'](_0x2e2be8);
    });
}
function _0x55b709() {
    const _0x1fed2d = document['getElementById']('role-index-btn');
    const _0x35fb08 = document['getElementById']('role-index-modal');
    const _0x526473 = document['getElementById']('close-role-index-btn');
    const _0x80f8c0 = document['getElementById']('mob-top-index');
    if (_0x1fed2d && _0x35fb08) {
        _0x1fed2d['addEventListener']('click', _0x914238 => {
            _0x914238['stopPropagation']();
            if (_0x35fb08['style']['display'] === 'none' || !_0x35fb08['style']['display']) {
                _0x4b4175();
                _0x35fb08['style']['display'] = 'flex';
            } else {
                _0x35fb08['style']['display'] = 'none';
            }
        });
    }
    if (_0x526473 && _0x35fb08) {
        _0x526473['addEventListener']('click', _0x89cf42 => {
            _0x89cf42['stopPropagation']();
            _0x35fb08['style']['display'] = 'none';
        });
    }
    if (_0x80f8c0 && _0x35fb08) {
        _0x80f8c0['addEventListener']('click', _0x30a2a7 => {
            _0x30a2a7['stopPropagation']();
            if (_0x35fb08['style']['display'] === 'none' || !_0x35fb08['style']['display']) {
                _0x4b4175();
                _0x35fb08['style']['display'] = 'flex';
            } else {
                _0x35fb08['style']['display'] = 'none';
            }
        });
    }
}
function _0xeaa39d() {
    const _0x47f89a = document['getElementById']('settings-btn');
    const _0x39fa6f = document['getElementById']('settings-panel');
    const _0x152471 = document['getElementById']('close-settings-btn');
    const _0x6019cf = document['getElementById']('setting-mouse-relative');
    if (_0x6019cf) {
        _0x6019cf['checked'] = _0x2d6b8c;
        _0x6019cf['addEventListener']('change', () => {
            _0x2d6b8c = _0x6019cf['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x2d6b8c ? 'true' : 'false');
        });
    }
    const _0x1c5200 = document['getElementById']('setting-music-volume');
    const _0x3dfe95 = document['getElementById']('setting-music-volume-display');
    function _0x5e42e3(_0x2f517d) {
        const _0x396513 = (_0x2f517d['value'] - _0x2f517d['min']) / (_0x2f517d['max'] - _0x2f517d['min']) * 0x64;
        _0x2f517d['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x396513 + '%,\x20#444\x20' + _0x396513 + '%)';
    }
    if (_0x1c5200) {
        const _0x3b3da6 = _0xe6f244['getVolume']();
        const _0x5f3412 = Math['round'](_0x3b3da6 * 0x64);
        _0x1c5200['value'] = _0x5f3412;
        if (_0x3dfe95)
            _0x3dfe95['textContent'] = _0x5f3412 + '%';
        _0x5e42e3(_0x1c5200);
        _0x1c5200['addEventListener']('input', () => {
            const _0x294921 = parseInt(_0x1c5200['value'], 0xa);
            if (_0x3dfe95)
                _0x3dfe95['textContent'] = _0x294921 + '%';
            _0x5e42e3(_0x1c5200);
            _0xe6f244['setVolume'](_0x294921 / 0x64);
            _0xe6f244['setMuted'](_0x294921 === 0x0);
        });
    }
    if (_0x47f89a && _0x39fa6f) {
        _0x47f89a['addEventListener']('click', _0xcaf256 => {
            _0xcaf256['stopPropagation']();
            _0x39fa6f['style']['display'] = _0x39fa6f['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x152471 && _0x39fa6f) {
        _0x152471['addEventListener']('click', () => {
            _0x39fa6f['style']['display'] = 'none';
        });
    }
    const _0x5a08a4 = document['getElementById']('mayor-confirm-yes');
    const _0x548a04 = document['getElementById']('mayor-confirm-no');
    const _0x4905be = document['getElementById']('mayor-confirm-dialog');
    if (_0x5a08a4 && _0x4905be) {
        _0x5a08a4['addEventListener']('click', () => {
            if (_0x35f6c9 && _0x35f6c9['readyState'] === WebSocket['OPEN']) {
                _0x35f6c9['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x4905be['style']['display'] = 'none';
        });
    }
    if (_0x548a04 && _0x4905be) {
        _0x548a04['addEventListener']('click', () => {
            _0x4905be['style']['display'] = 'none';
        });
    }
    const _0x4f51a4 = document['getElementById']('close-ability-btn');
    if (_0x4f51a4) {
        _0x4f51a4['addEventListener']('click', () => {
            const _0x2cb02d = document['getElementById']('ability-ui');
            if (_0x2cb02d)
                _0x2cb02d['style']['display'] = 'none';
        });
    }
}
let _0x1746ce = '';
function _0x5064f3(_0x1febd0) {
    const _0x27c848 = document['getElementById']('vote-tally-panel');
    const _0x1ce09a = document['getElementById']('vote-tally-list');
    if (!_0x27c848 || !_0x1ce09a)
        return;
    if (_0x1febd0['state'] !== 'DAY_VOTE') {
        _0x27c848['style']['display'] = 'none';
        _0x1746ce = '';
        return;
    }
    _0x27c848['style']['display'] = 'block';
    const _0x12f006 = {};
    for (const _0x10de96 in _0x141786) {
        if (!_0x141786[_0x10de96]['isDead'])
            _0x12f006[_0x10de96] = 0x0;
    }
    if (_0x180928 && !_0x1ac1c2['isDead'])
        _0x12f006[_0x180928] = 0x0;
    const _0x52ef86 = _0x1febd0['votes'] || {};
    for (const _0x3f1245 in _0x52ef86) {
        const _0x563043 = _0x52ef86[_0x3f1245];
        const _0x40a35d = _0x1febd0['mayorRevealed'] && _0x1febd0['mayorRevealed'][_0x3f1245] ? 0x2 : 0x1;
        _0x12f006[_0x563043] = (_0x12f006[_0x563043] || 0x0) + _0x40a35d;
    }
    let _0x1798d6 = 0x0;
    const _0x230acb = _0x1febd0['skips'] || {};
    for (const _0x26ded8 in _0x230acb) {
        _0x1798d6 += Number(_0x230acb[_0x26ded8]) || 0x1;
    }
    const _0xc3ed06 = JSON['stringify'](_0x12f006) + '_' + _0x1798d6 + '_' + _0x1ac1c2['isDead'];
    if (_0xc3ed06 === _0x1746ce)
        return;
    _0x1746ce = _0xc3ed06;
    _0x1ce09a['innerHTML'] = '';
    for (const _0x2f8cc1 in _0x12f006) {
        const _0x5d091d = parseInt(_0x2f8cc1);
        const _0x4ec3b1 = _0x5d091d === _0x180928 ? _0x8b0c49 : _0x141786[_0x2f8cc1] ? _0x141786[_0x2f8cc1]['name'] : 'Player\x20' + _0x2f8cc1;
        const _0x3e4e55 = document['createElement']('div');
        _0x3e4e55['className'] = 'vote-tally-entry';
        const _0xc1f6c6 = document['createElement']('span');
        _0xc1f6c6['textContent'] = _0x4ec3b1;
        const _0x20e6f8 = document['createElement']('span');
        _0x20e6f8['className'] = 'vote-count';
        _0x20e6f8['textContent'] = _0x12f006[_0x2f8cc1] + '\x20vote' + (_0x12f006[_0x2f8cc1] === 0x1 ? '' : 's');
        _0x3e4e55['appendChild'](_0xc1f6c6);
        _0x3e4e55['appendChild'](_0x20e6f8);
        if (_0x5d091d !== _0x180928 && !_0x1ac1c2['isDead']) {
            _0x3e4e55['style']['cursor'] = 'pointer';
            _0x3e4e55['title'] = 'Vote\x20for\x20' + _0x4ec3b1;
            _0x3e4e55['addEventListener']('click', _0x40231d => {
                _0x40231d['stopPropagation']();
                if (_0x35f6c9 && _0x35f6c9['readyState'] === WebSocket['OPEN']) {
                    _0x35f6c9['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x4ec3b1
                    }));
                }
            });
        }
        _0x1ce09a['appendChild'](_0x3e4e55);
    }
    const _0x6f1092 = document['createElement']('div');
    _0x6f1092['className'] = 'vote-tally-skip';
    _0x6f1092['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x1798d6 + '</span>';
    if (!_0x1ac1c2['isDead']) {
        _0x6f1092['style']['cursor'] = 'pointer';
        _0x6f1092['title'] = 'Click\x20to\x20skip\x20vote';
        _0x6f1092['addEventListener']('click', _0x133b23 => {
            _0x133b23['stopPropagation']();
            if (_0x35f6c9 && _0x35f6c9['readyState'] === WebSocket['OPEN']) {
                _0x35f6c9['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x1ce09a['appendChild'](_0x6f1092);
}
let _0x369e35 = null;
let _0x577627 = null;
let _0x3e0ffb = null;
let _0xaaa524 = null;
let _0x27dd2d = null;
function _0x17d08d() {
    if (_0x35f6c9 && _0x35f6c9['readyState'] === WebSocket['OPEN']) {
        _0x35f6c9['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x369e35,
            'abilityTarget': _0x577627,
            'killTarget': _0x3e0ffb
        }));
    }
}
function _0x1d2d26() {
    if (_0x35f6c9 && _0x35f6c9['readyState'] === WebSocket['OPEN']) {
        _0x35f6c9['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'blackmailTarget': _0xaaa524,
            'killTarget': _0x27dd2d
        }));
    }
}
function _0x5f7d22() {
    const _0x43a3d8 = document['getElementById']('ability-ui-body');
    if (!_0x43a3d8)
        return;
    _0x43a3d8['innerHTML'] = '';
    if (_0x200614 === 'Celebrity' || _0x200614 === 'Mayor') {
        const _0x18e183 = document['createElement']('div');
        _0x18e183['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x18e183['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x43a3d8['appendChild'](_0x18e183);
        return;
    }
    if (_0x200614 === 'Blackmailer') {
        const _0x2959a7 = document['createElement']('div');
        _0x2959a7['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x2959a7['innerText'] = 'Blackmail\x20Target\x20(Silences\x20for\x20full\x20day):';
        _0x43a3d8['appendChild'](_0x2959a7);
        const _0x1491dd = document['createElement']('div');
        _0x1491dd['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x490923 = document['createElement']('button');
        _0x490923['className'] = 'layer-btn';
        _0x490923['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x490923['innerText'] = 'No\x20one';
        if (_0xaaa524 === null)
            _0x490923['classList']['add']('active');
        _0x490923['onclick'] = () => {
            _0xaaa524 = null;
            _0x1d2d26();
            _0x5f7d22();
        };
        _0x1491dd['appendChild'](_0x490923);
        for (const _0x2e6820 in _0x141786) {
            const _0x2fa06f = _0x141786[_0x2e6820];
            if (_0x2fa06f['isDead'])
                continue;
            const _0x8aab08 = document['createElement']('button');
            _0x8aab08['className'] = 'layer-btn';
            _0x8aab08['innerText'] = _0x2fa06f['name'];
            if (_0xaaa524 === parseInt(_0x2e6820))
                _0x8aab08['classList']['add']('active');
            _0x8aab08['onclick'] = () => {
                _0xaaa524 = parseInt(_0x2e6820);
                _0x1d2d26();
                _0x5f7d22();
            };
            _0x1491dd['appendChild'](_0x8aab08);
        }
        if (!_0x1ac1c2['isDead']) {
            const _0x4da9dc = document['createElement']('button');
            _0x4da9dc['className'] = 'layer-btn';
            _0x4da9dc['style']['cssText'] = 'grid-column:\x20span\x202;';
            _0x4da9dc['innerText'] = _0x8b0c49 + '\x20(Self\x20-\x20Decoy)';
            if (_0xaaa524 === _0x180928)
                _0x4da9dc['classList']['add']('active');
            _0x4da9dc['onclick'] = () => {
                _0xaaa524 = _0x180928;
                _0x1d2d26();
                _0x5f7d22();
            };
            _0x1491dd['appendChild'](_0x4da9dc);
        }
        _0x43a3d8['appendChild'](_0x1491dd);
        const _0x5d31ed = document['createElement']('div');
        _0x5d31ed['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x5d31ed['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x43a3d8['appendChild'](_0x5d31ed);
        const _0x42ddb6 = document['createElement']('div');
        _0x42ddb6['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x5bac91 = document['createElement']('button');
        _0x5bac91['className'] = 'layer-btn';
        _0x5bac91['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x5bac91['innerText'] = 'No\x20one';
        if (!_0x27dd2d && !_0x1c538f['CURRENT_TARGET'])
            _0x5bac91['classList']['add']('active');
        _0x5bac91['onclick'] = () => {
            _0x27dd2d = null;
            _0x1c538f['CURRENT_TARGET'] = null;
            _0x1d2d26();
            _0x5f7d22();
        };
        _0x42ddb6['appendChild'](_0x5bac91);
        for (const _0x161773 in _0x141786) {
            const _0x1e8713 = _0x141786[_0x161773];
            if (_0x1e8713['isDead'])
                continue;
            const _0x46a0af = document['createElement']('button');
            _0x46a0af['className'] = 'layer-btn';
            _0x46a0af['innerText'] = _0x1e8713['name'];
            if (_0x27dd2d === parseInt(_0x161773) || _0x1c538f['CURRENT_TARGET'] === parseInt(_0x161773))
                _0x46a0af['classList']['add']('active');
            _0x46a0af['onclick'] = () => {
                _0x27dd2d = parseInt(_0x161773);
                _0x1c538f['CURRENT_TARGET'] = parseInt(_0x161773);
                _0x1d2d26();
                _0x5f7d22();
            };
            _0x42ddb6['appendChild'](_0x46a0af);
        }
        _0x43a3d8['appendChild'](_0x42ddb6);
        return;
    }
    if (_0x200614 === 'Skinwalker') {
        const _0x54cae4 = document['createElement']('div');
        _0x54cae4['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x54cae4['innerText'] = 'Transform\x20into:';
        _0x43a3d8['appendChild'](_0x54cae4);
        const _0x33ca19 = document['createElement']('div');
        _0x33ca19['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x133723 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x358292 = _0x4a1fb5 => {
            if (_0x1c538f['ROLES_IN_GAME'] && Array['isArray'](_0x1c538f['ROLES_IN_GAME'])) {
                return _0x1c538f['ROLES_IN_GAME']['includes'](_0x4a1fb5);
            }
            if (_0x1c538f['ROLE_LIST_RAW'] && _0x1c538f['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x1c538f['ROLE_LIST_RAW']['some'](_0x8f4822 => _0x8f4822['name'] === _0x4a1fb5 && !_0x8f4822['isDead']);
            }
            return ![];
        };
        const _0x447a60 = [
            'None',
            ..._0x133723['filter'](_0x358292)
        ];
        _0x447a60['forEach'](_0x139f1e => {
            const _0x2e0be8 = document['createElement']('button');
            _0x2e0be8['className'] = 'layer-btn';
            _0x2e0be8['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x2e0be8['innerText'] = _0x139f1e;
            const _0x24b528 = _0x139f1e === 'None' && !_0x369e35 || _0x369e35 === _0x139f1e;
            if (_0x24b528)
                _0x2e0be8['classList']['add']('active');
            const _0x114a59 = _0x139f1e !== 'None' && _0x1c538f['SKINWALKER_LAST_ROLE'] && _0x1c538f['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x139f1e['toLowerCase']();
            if (_0x114a59) {
                _0x2e0be8['style']['opacity'] = '0.45';
                _0x2e0be8['style']['cursor'] = 'not-allowed';
                _0x2e0be8['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x2e0be8['onclick'] = () => {
                    _0xb34a23('You\x20cannot\x20transform\x20into\x20' + _0x139f1e + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x2e0be8['onclick'] = () => {
                    _0x369e35 = _0x139f1e === 'None' ? null : _0x139f1e;
                    _0x17d08d();
                    _0x5f7d22();
                };
            }
            _0x33ca19['appendChild'](_0x2e0be8);
        });
        _0x43a3d8['appendChild'](_0x33ca19);
        if (_0x358292('Vigilante')) {
            const _0x495517 = document['createElement']('div');
            _0x495517['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x495517['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x43a3d8['appendChild'](_0x495517);
        }
        if (_0x369e35 === 'Vigilante') {
            const _0x5a2d14 = document['createElement']('div');
            _0x5a2d14['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x5a2d14['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x43a3d8['appendChild'](_0x5a2d14);
        } else if (_0x369e35 && _0x369e35 !== 'Celebrity') {
            const _0x5405f7 = document['createElement']('div');
            _0x5405f7['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x5405f7['innerText'] = 'Use\x20' + _0x369e35 + '\x20ability\x20on:';
            _0x43a3d8['appendChild'](_0x5405f7);
            const _0x211904 = document['createElement']('div');
            _0x211904['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x31f90e = document['createElement']('button');
            _0x31f90e['className'] = 'layer-btn';
            _0x31f90e['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x31f90e['innerText'] = 'No\x20one';
            if (!_0x577627)
                _0x31f90e['classList']['add']('active');
            _0x31f90e['onclick'] = () => {
                _0x577627 = null;
                _0x17d08d();
                _0x5f7d22();
            };
            _0x211904['appendChild'](_0x31f90e);
            for (const _0x438385 in _0x141786) {
                const _0x264afa = _0x141786[_0x438385];
                if (_0x264afa['isDead'])
                    continue;
                const _0x1548be = document['createElement']('button');
                _0x1548be['className'] = 'layer-btn';
                _0x1548be['innerText'] = _0x264afa['name'];
                if (_0x577627 === parseInt(_0x438385))
                    _0x1548be['classList']['add']('active');
                _0x1548be['onclick'] = () => {
                    _0x577627 = parseInt(_0x438385);
                    _0x17d08d();
                    _0x5f7d22();
                };
                _0x211904['appendChild'](_0x1548be);
            }
            _0x43a3d8['appendChild'](_0x211904);
        }
        const _0x3dfdb6 = document['createElement']('div');
        _0x3dfdb6['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x3dfdb6['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x43a3d8['appendChild'](_0x3dfdb6);
        const _0x1e8941 = document['createElement']('div');
        _0x1e8941['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x3085b0 = document['createElement']('button');
        _0x3085b0['className'] = 'layer-btn';
        _0x3085b0['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x3085b0['innerText'] = 'No\x20one';
        if (!_0x3e0ffb && !_0x1c538f['CURRENT_TARGET'])
            _0x3085b0['classList']['add']('active');
        _0x3085b0['onclick'] = () => {
            _0x3e0ffb = null;
            _0x1c538f['CURRENT_TARGET'] = null;
            _0x17d08d();
            _0x5f7d22();
        };
        _0x1e8941['appendChild'](_0x3085b0);
        for (const _0x52e84c in _0x141786) {
            const _0xd546ec = _0x141786[_0x52e84c];
            if (_0xd546ec['isDead'])
                continue;
            const _0x2943fc = document['createElement']('button');
            _0x2943fc['className'] = 'layer-btn';
            _0x2943fc['innerText'] = _0xd546ec['name'];
            if (_0x3e0ffb === parseInt(_0x52e84c) || _0x1c538f['CURRENT_TARGET'] === parseInt(_0x52e84c))
                _0x2943fc['classList']['add']('active');
            _0x2943fc['onclick'] = () => {
                _0x3e0ffb = parseInt(_0x52e84c);
                _0x1c538f['CURRENT_TARGET'] = parseInt(_0x52e84c);
                _0x17d08d();
                _0x5f7d22();
            };
            _0x1e8941['appendChild'](_0x2943fc);
        }
        _0x43a3d8['appendChild'](_0x1e8941);
        return;
    }
    let _0x1b2c31 = '';
    let _0x4dfeb3 = ![];
    if (_0x200614 === 'Doctor') {
        _0x1b2c31 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x4dfeb3 = !![];
    } else if (_0x200614 === 'Investigator') {
        _0x1b2c31 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x200614 === 'Tracker') {
        _0x1b2c31 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x200614 === 'Archer') {
        _0x1b2c31 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x200614 === 'Escort') {
        _0x1b2c31 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x200614 === 'Vigilante') {
        _0x1b2c31 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x207bed = document['createElement']('div');
    _0x207bed['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x207bed['innerText'] = _0x1b2c31;
    _0x43a3d8['appendChild'](_0x207bed);
    const _0x2700b9 = document['createElement']('div');
    _0x2700b9['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x272655 = document['createElement']('button');
    _0x272655['className'] = 'layer-btn';
    _0x272655['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x272655['innerText'] = 'No\x20one';
    if (_0x1c538f['CURRENT_TARGET'] === null)
        _0x272655['classList']['add']('active');
    _0x272655['onclick'] = () => {
        _0x1c538f['CURRENT_TARGET'] = null;
        if (_0x35f6c9 && _0x35f6c9['readyState'] === WebSocket['OPEN']) {
            _0x35f6c9['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x5f7d22();
    };
    _0x2700b9['appendChild'](_0x272655);
    for (const _0x34ad3f in _0x141786) {
        const _0x28c11c = _0x141786[_0x34ad3f];
        if (_0x28c11c['isDead'])
            continue;
        const _0x6f9e53 = document['createElement']('button');
        _0x6f9e53['className'] = 'layer-btn';
        _0x6f9e53['innerText'] = _0x28c11c['name'];
        if (_0x1c538f['CURRENT_TARGET'] === parseInt(_0x34ad3f))
            _0x6f9e53['classList']['add']('active');
        _0x6f9e53['onclick'] = () => {
            _0x1c538f['CURRENT_TARGET'] = parseInt(_0x34ad3f);
            if (_0x35f6c9 && _0x35f6c9['readyState'] === WebSocket['OPEN']) {
                _0x35f6c9['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x34ad3f)
                }));
            }
            _0x5f7d22();
        };
        _0x2700b9['appendChild'](_0x6f9e53);
    }
    if (_0x4dfeb3 && !_0x1ac1c2['isDead']) {
        const _0x26d86e = document['createElement']('button');
        _0x26d86e['className'] = 'layer-btn';
        _0x26d86e['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x26d86e['innerText'] = _0x8b0c49 + '\x20(Self)';
        if (_0x1c538f['CURRENT_TARGET'] === _0x180928)
            _0x26d86e['classList']['add']('active');
        _0x26d86e['onclick'] = () => {
            _0x1c538f['CURRENT_TARGET'] = _0x180928;
            if (_0x35f6c9 && _0x35f6c9['readyState'] === WebSocket['OPEN']) {
                _0x35f6c9['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x180928
                }));
            }
            _0x5f7d22();
        };
        _0x2700b9['appendChild'](_0x26d86e);
    }
    _0x43a3d8['appendChild'](_0x2700b9);
}
function _0x2b4230() {
    if (_0x35f6c9 && (_0x35f6c9['readyState'] === WebSocket['OPEN'] || _0x35f6c9['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x339687 = new URLSearchParams();
    if (_0x15964a)
        _0x339687['set']('token', _0x15964a);
    _0x339687['set']('ngrok-skip-browser-warning', 'true');
    const _0x4209ea = 'wss://eye-landscape-cal-ordered.trycloudflare.com';
    const _0x2b982a = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x4209ea;
    const _0x38afd4 = _0x2b982a + '/?' + _0x339687['toString']();
    _0x35f6c9 = new WebSocket(_0x38afd4);
    _0x35f6c9['onopen'] = function () {
        if (!_0x534ea6 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x21a3ea = window['_FB'] && window['_FB']['_currentUser'];
                const _0x3ff8ff = window['_FB'] && window['_FB']['_userData'];
                const _0x667521 = !(_0x21a3ea && _0x3ff8ff && _0x3ff8ff['username']);
                const _0x15c4ca = _0x667521 ? 'body01.png' : _0x2bfb82;
                const _0x5ec507 = _0x667521 ? 'eyes4.png' : _0x122e55;
                const _0x8a51f9 = !_0x667521 && _0x3ff8ff && _0x3ff8ff['photoURL'] ? _0x3ff8ff['photoURL'] : '';
                const _0x1837af = !_0x667521 && _0x21a3ea ? _0x21a3ea['uid'] : '';
                const _0x504eca = !_0x667521 && _0x3ff8ff ? {
                    'townWins': _0x3ff8ff['townWins'] || 0x0,
                    'mafiaWins': _0x3ff8ff['mafiaWins'] || 0x0,
                    'deaths': _0x3ff8ff['deaths'] || 0x0,
                    'townLosses': _0x3ff8ff['townLosses'] || 0x0,
                    'mafiaLosses': _0x3ff8ff['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x8b0c49,
                    'token': _0x15964a,
                    'body': _0x15c4ca,
                    'eyes': _0x5ec507,
                    'isGuest': _0x667521,
                    'uid': _0x1837af,
                    'photoURL': _0x8a51f9,
                    'accountStats': _0x504eca
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x35f6c9 && _0x35f6c9['readyState'] === WebSocket['OPEN']) {
            _0x35f6c9['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x35f6c9['onclose'] = _0x1837ac => {
        if (_0x1837ac['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x1837ac['code'] === 0xfa2 || _0x1837ac['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x2f23bc = document['getElementById']('disconnect-overlay');
        if (!_0x2f23bc) {
            _0x2f23bc = document['createElement']('div');
            _0x2f23bc['id'] = 'disconnect-overlay';
            _0x2f23bc['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x2f23bc['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x2f23bc);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x35f6c9['onmessage'] = _0x1e2763 => {
        const _0x2495d2 = JSON['parse'](_0x1e2763['data']);
        if (_0x2495d2['type'] === 'map_data') {
            _0x1c538f['MAP']['tileSize'] = _0x2495d2['map']['tileSize'];
            _0x1c538f['MAP']['columns'] = _0x2495d2['map']['columns'];
            _0x1c538f['MAP']['rows'] = _0x2495d2['map']['rows'];
            _0x1c538f['MAP']['layers'] = _0x2495d2['map']['layers'];
            if (_0x2495d2['map']['doors']) {
                _0x1c538f['MAP']['doors'] = _0x2495d2['map']['doors'];
                const _0x4d8b30 = _0x1c538f['MAP']['layers']['find'](_0x1a0c8c => _0x1a0c8c['name'] === 'floor2');
                if (_0x4d8b30) {
                    for (const _0x6b23c7 in _0x1c538f['MAP']['doors']) {
                        _0x4d8b30['data'][parseInt(_0x6b23c7)] = 0x2;
                    }
                }
            }
            if (_0x2495d2['entities'])
                _0x1c538f['ENTITIES'] = _0x2495d2['entities'];
            _0x573470();
            _0x1c538f['SYSTEM']['isReady'] = !![];
            _0x44622f();
            if (!_0x1c538f['SYSTEM']['_gameLoopRunning']) {
                _0x1c538f['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x85dae5);
            }
            return;
        }
        if (_0x2495d2['type'] === 'init') {
            _0x180928 = _0x2495d2['id'];
            _0x534ea6 = ![];
            _0x6e8565();
            if (_0x231526) {
                const _0x4cedbf = document['getElementById']('leaderboard-list');
                const _0x1f9b68 = document['getElementById']('leaderboard-toggle');
                if (_0x4cedbf) {
                    _0x4cedbf['style']['display'] = 'none';
                    if (_0x1f9b68)
                        _0x1f9b68['style']['transform'] = 'rotate(180deg)';
                }
                const _0x194497 = document['getElementById']('role-list-items');
                const _0x22b9a9 = document['getElementById']('role-list-toggle');
                if (_0x194497) {
                    _0x194497['style']['display'] = 'none';
                    if (_0x22b9a9)
                        _0x22b9a9['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x14f3a6 = _0x2495d2['isOwner'] || ![];
            _0x8b0c49 = _0x2495d2['name'] || _0x8b0c49;
            _0x1c538f['MAP']['tileSize'] = _0x2495d2['map']['tileSize'];
            _0x1c538f['MAP']['columns'] = _0x2495d2['map']['columns'];
            _0x1c538f['MAP']['rows'] = _0x2495d2['map']['rows'];
            _0x1c538f['MAP']['layers'] = _0x2495d2['map']['layers'];
            if (_0x2495d2['map']['doors']) {
                _0x1c538f['MAP']['doors'] = _0x2495d2['map']['doors'];
                const _0x4eedbb = _0x1c538f['MAP']['layers']['find'](_0x1638b0 => _0x1638b0['name'] === 'floor2');
                if (_0x4eedbb) {
                    for (const _0x243bb0 in _0x1c538f['MAP']['doors']) {
                        _0x4eedbb['data'][parseInt(_0x243bb0)] = 0x2;
                    }
                }
            }
            if (_0x2495d2['entities'])
                _0x1c538f['ENTITIES'] = _0x2495d2['entities'];
            if (_0x2495d2['bloodSplatters'])
                _0x5e844e = _0x2495d2['bloodSplatters'];
            if (_0x2495d2['bloodDrops'])
                _0x584fe3 = _0x2495d2['bloodDrops'];
            if (_0x2495d2['roleList'] && _0x2495d2['roleList']['length'] > 0x0) {
                _0x1c538f['ROLE_LIST_RAW'] = _0x2495d2['roleList'];
                _0x18f53d(_0x2495d2['roleList'], _0x2495d2['roleListMode']);
            }
            _0x573470();
            _0x1ac1c2['x'] = _0x1c538f['MAP']['columns'] * _0x1c538f['MAP']['tileSize'] / 0x2;
            _0x1ac1c2['y'] = _0x1c538f['MAP']['rows'] * _0x1c538f['MAP']['tileSize'] / 0x2;
            _0x1c538f['CAMERA']['x'] = _0x1ac1c2['x'] + _0x1ac1c2['width'] / 0x2 - _0x1c538f['CAMERA']['width'] / 0x2;
            _0x1c538f['CAMERA']['y'] = _0x1ac1c2['y'] + _0x1ac1c2['height'] / 0x2 - _0x1c538f['CAMERA']['height'] / 0x2;
            if (_0x14f3a6) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x5303dd();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x38ecec = document['getElementById']('role-index-btn-wrap');
            if (_0x38ecec)
                _0x38ecec['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x1c538f['SYSTEM']['lastTime'] = performance['now']();
            _0x1c538f['SYSTEM']['isReady'] = !![];
            _0x3a7cfa();
            if (!_0x1c538f['SYSTEM']['_gameLoopRunning']) {
                _0x1c538f['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x85dae5);
            }
            return;
        } else if (_0x2495d2['type'] === 'state') {
            const _0x3bd925 = {};
            for (const _0x1c22f1 in _0x2495d2['players']) {
                if (parseInt(_0x1c22f1) === _0x180928)
                    continue;
                const _0x1bbb35 = _0x2495d2['players'][_0x1c22f1];
                const _0x28a6b8 = _0x141786[_0x1c22f1];
                if (_0x28a6b8) {
                    const _0x369e12 = _0x1bbb35['x'] - _0x28a6b8['renderX'];
                    const _0xb2686f = _0x1bbb35['y'] - _0x28a6b8['renderY'];
                    const _0x4f20d1 = _0x369e12 * _0x369e12 + _0xb2686f * _0xb2686f > 0x78 * 0x78;
                    Object['assign'](_0x28a6b8, _0x1bbb35);
                    if (_0x4f20d1) {
                        _0x28a6b8['renderX'] = _0x1bbb35['x'];
                        _0x28a6b8['renderY'] = _0x1bbb35['y'];
                    }
                    _0x3bd925[_0x1c22f1] = _0x28a6b8;
                } else {
                    _0x3bd925[_0x1c22f1] = {
                        ..._0x1bbb35,
                        'renderX': _0x1bbb35['x'],
                        'renderY': _0x1bbb35['y'],
                        'renderAngle': _0x1bbb35['angle'] || 0x0
                    };
                }
            }
            _0x141786 = _0x3bd925;
            _0x16f5df();
            if (_0x2495d2['players'][_0x180928]) {
                const _0x48d111 = _0x2495d2['players'][_0x180928];
                _0x1ac1c2['chats'] = _0x48d111['chats'] || [];
                _0x1ac1c2['isDead'] = _0x48d111['isDead'];
                _0x1ac1c2['hasArrow'] = _0x48d111['hasArrow'] || ![];
                if (_0x48d111['name'])
                    _0x8b0c49 = _0x48d111['name'];
                _0x3a7cfa();
                const _0x5f42d8 = Math['hypot'](_0x48d111['x'] - _0x1ac1c2['x'], _0x48d111['y'] - _0x1ac1c2['y']);
                if (_0x5f42d8 > 0xfa) {
                    _0x1ac1c2['x'] = _0x48d111['x'];
                    _0x1ac1c2['y'] = _0x48d111['y'];
                } else if (_0x5f42d8 > 0x50) {
                    _0x1ac1c2['x'] += (_0x48d111['x'] - _0x1ac1c2['x']) * 0.06;
                    _0x1ac1c2['y'] += (_0x48d111['y'] - _0x1ac1c2['y']) * 0.06;
                }
            }
            if (_0x2495d2['entities'])
                _0x1c538f['ENTITIES'] = _0x2495d2['entities'];
            if (_0x2495d2['game']) {
                _0x1c538f['GAME_STATE'] = _0x2495d2['game']['state'];
                _0x1c538f['NIGHT_ABILITY_OPEN'] = _0x2495d2['game']['nightAbilityOpen'];
                if (_0x2495d2['game']['bloodSplatters'])
                    _0x5e844e = _0x2495d2['game']['bloodSplatters'];
                if (_0x2495d2['game']['bloodDrops'])
                    _0x584fe3 = _0x2495d2['game']['bloodDrops'];
                if (_0x2495d2['game']['blackmailed']) {
                    _0x2e3e7d = new Set(_0x2495d2['game']['blackmailed']);
                } else {
                    _0x2e3e7d['clear']();
                }
                if (_0x2495d2['game']['mayorRevealed']) {
                    for (const _0x4ee8a6 in _0x2495d2['game']['mayorRevealed']) {
                        _0x13d97d['add'](parseInt(_0x4ee8a6));
                    }
                }
                if (_0x1c538f['LAST_STATE'] !== _0x1c538f['GAME_STATE']) {
                    if (_0x1c538f['GAME_STATE'] !== 'NIGHT') {
                        _0x1c538f['CURRENT_TARGET'] = null;
                        _0x369e35 = null;
                        _0x577627 = null;
                        _0x3e0ffb = null;
                        _0xaaa524 = null;
                        _0x27dd2d = null;
                        const _0x446d5c = document['getElementById']('ability-ui');
                        if (_0x446d5c)
                            _0x446d5c['style']['display'] = 'none';
                    }
                    if (_0x1c538f['GAME_STATE'] === 'NIGHT') {
                        _0x1ac1c2['chats'] = [];
                        for (const _0x25a347 in _0x141786) {
                            _0x141786[_0x25a347]['chats'] = [];
                        }
                    }
                    _0x1c538f['LAST_STATE'] = _0x1c538f['GAME_STATE'];
                    _0x3c1ffd();
                    _0xe6f244['onStateChange'](_0x1c538f['GAME_STATE'], _0x2495d2['game']['nightAbilityOpen']);
                }
                const _0x194170 = document['getElementById']('phase-ui');
                if (_0x194170) {
                    if (_0x2495d2['game']['state'] === 'LOBBY') {
                        _0x194170['style']['display'] = 'none';
                    } else {
                        _0x194170['style']['display'] = 'block';
                    }
                    let _0x7628a8 = _0x2495d2['game']['state']['replace']('_', '\x20');
                    if (_0x2495d2['game']['state'] === 'DAY_DISCUSS') {
                        _0x7628a8 = 'DAY\x20' + (_0x2495d2['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x2495d2['game']['timer'] + 's';
                    } else if (_0x2495d2['game']['state'] === 'DAY_VOTE') {
                        _0x7628a8 = 'DAY\x20' + (_0x2495d2['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x2495d2['game']['timer'] + 's';
                    } else if (_0x2495d2['game']['state'] === 'NIGHT') {
                        const _0x3f4d2d = _0x2495d2['game']['dayCount'] || 0x1;
                        if (_0x2495d2['game']['nightAbilityOpen']) {
                            _0x7628a8 = 'NIGHT\x20' + _0x3f4d2d + '\x20ABILITY\x20PHASE';
                            const _0x5eaf9c = _0x2495d2['game']['abilityTimer'] !== undefined ? _0x2495d2['game']['abilityTimer'] : _0x2495d2['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x5eaf9c + 's';
                        } else {
                            _0x7628a8 = 'NIGHT\x20' + _0x3f4d2d;
                            document['getElementById']('phase-timer')['innerText'] = _0x2495d2['game']['timer'] + 's';
                        }
                    }
                    if (_0x2495d2['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x7628a8;
                    }
                }
                if (_0x2495d2['game']['state'] === 'NIGHT') {
                    const _0x40157f = document['getElementById']('ability-timer-label');
                    if (_0x40157f) {
                        const _0x33a0f5 = _0x2495d2['game']['abilityTimer'] !== undefined ? _0x2495d2['game']['abilityTimer'] : _0x2495d2['game']['timer'];
                        _0x40157f['innerText'] = _0x2495d2['game']['nightAbilityOpen'] ? _0x33a0f5 + 's' : '';
                    }
                    if (_0x2495d2['game']['nightAbilityOpen'] && !_0x26be4a && !_0x1ac1c2['isDead']) {
                        _0x26be4a = !![];
                        _0x5f7d22();
                        const _0x3956ca = document['getElementById']('ability-ui');
                        if (_0x3956ca)
                            _0x3956ca['style']['display'] = 'block';
                    }
                    if (!_0x2495d2['game']['nightAbilityOpen']) {
                        const _0x19fe68 = document['getElementById']('ability-ui');
                        if (_0x19fe68 && _0x19fe68['style']['display'] === 'block') {
                            _0x19fe68['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x26be4a = ![];
                }
                if (_0x2495d2['game']['rolesInGame']) {
                    _0x1c538f['ROLES_IN_GAME'] = _0x2495d2['game']['rolesInGame'];
                }
                if (_0x2495d2['game']['skinwalkerLastRole'] !== undefined) {
                    _0x1c538f['SKINWALKER_LAST_ROLE'] = _0x2495d2['game']['skinwalkerLastRole'];
                }
                if (_0x2495d2['game']['state'] === 'NIGHT') {
                    const _0x33f14f = document['getElementById']('will-ui');
                    if (_0x33f14f && _0x33f14f['style']['display'] === 'flex') {
                        _0x33f14f['style']['display'] = 'none';
                        const _0x4dc558 = document['getElementById']('will-input');
                        if (_0x4dc558)
                            _0x4dc558['blur']();
                    }
                }
                _0x5064f3(_0x2495d2['game']);
                if (_0x2495d2['game']['roleListMode'] !== undefined) {
                    _0x1c538f['ROLE_LIST_RAW'] = _0x2495d2['game']['roleList'] || [];
                    _0x18f53d(_0x2495d2['game']['roleList'], _0x2495d2['game']['roleListMode']);
                }
            }
        } else if (_0x2495d2['type'] === 'teleport') {
            _0x1ac1c2['x'] = _0x2495d2['x'];
            _0x1ac1c2['y'] = _0x2495d2['y'];
            _0x1ac1c2['vx'] = 0x0;
            _0x1ac1c2['vy'] = 0x0;
            _0x1c538f['CAMERA']['x'] = null;
            if (_0x2495d2['teleportId'] !== undefined)
                _0xcba136 = _0x2495d2['teleportId'];
        } else if (_0x2495d2['type'] === 'bulk_teleport') {
            for (const _0x2fc9c8 in _0x2495d2['positions']) {
                const _0x569f21 = _0x2495d2['positions'][_0x2fc9c8];
                if (parseInt(_0x2fc9c8) === _0x180928) {
                    _0x1ac1c2['x'] = _0x569f21['x'];
                    _0x1ac1c2['y'] = _0x569f21['y'];
                    _0x1ac1c2['vx'] = 0x0;
                    _0x1ac1c2['vy'] = 0x0;
                    _0x1c538f['CAMERA']['x'] = null;
                    continue;
                }
                const _0x55f351 = _0x141786[_0x2fc9c8];
                if (_0x55f351) {
                    _0x55f351['x'] = _0x569f21['x'];
                    _0x55f351['y'] = _0x569f21['y'];
                    _0x55f351['renderX'] = _0x569f21['x'];
                    _0x55f351['renderY'] = _0x569f21['y'];
                    _0x55f351['vx'] = 0x0;
                    _0x55f351['vy'] = 0x0;
                }
            }
        } else if (_0x2495d2['type'] === 'player_left') {
            delete _0x141786[_0x2495d2['id']];
            _0x13d97d['delete'](parseInt(_0x2495d2['id']));
        } else if (_0x2495d2['type'] === 'map_update') {
            const _0x594cec = _0x1c538f['MAP']['layers']['find'](_0x5b0df7 => _0x5b0df7['name'] === _0x2495d2['layer']);
            if (_0x594cec) {
                _0x594cec['data'][_0x2495d2['row'] * _0x1c538f['MAP']['columns'] + _0x2495d2['col']] = _0x2495d2['gid'];
                const _0x30450f = _0x2495d2['row'] * _0x1c538f['MAP']['columns'] + _0x2495d2['col'];
                if (_0x1c538f['MAP']['doors'] && _0x1c538f['MAP']['doors'][_0x30450f]) {
                    const _0x5bfe11 = _0x1c538f['MAP']['layers']['find'](_0xc5ac5e => _0xc5ac5e['name'] === 'floor2');
                    if (_0x5bfe11)
                        _0x5bfe11['data'][_0x30450f] = 0x2;
                }
                const _0x166a76 = Math['floor'](_0x2495d2['col'] * _0x1c538f['MAP']['tileSize'] / _0x1c538f['MAP']['chunkSize']);
                const _0x3ee268 = Math['floor'](_0x2495d2['row'] * _0x1c538f['MAP']['tileSize'] / _0x1c538f['MAP']['chunkSize']);
                _0x5a5056(_0x166a76, _0x3ee268);
                _0x34fc42 = null;
                _0xca967e = null;
            }
        } else if (_0x2495d2['type'] === 'role_assign') {
            _0x200614 = _0x2495d2['role'];
            _0x1ac1c2['isDead'] = _0x200614 === 'Spectator';
            _0x13d97d['clear']();
            _0x1c538f['CURRENT_TARGET'] = null;
            _0x369e35 = null;
            _0x577627 = null;
            _0x3e0ffb = null;
            _0xaaa524 = null;
            _0x27dd2d = null;
            _0x26be4a = ![];
            const _0x1649eb = document['getElementById']('ability-ui');
            if (_0x1649eb)
                _0x1649eb['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x200614;
            _0x3c1ffd();
            _0xb34a23(_0x200614 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x200614, !![]);
            let _0x5ed78f = '';
            if (_0x200614 === 'Investigator')
                _0x5ed78f = 'Investigate\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x200614 === 'Tracker')
                _0x5ed78f = 'Track\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x200614 === 'Doctor')
                _0x5ed78f = 'Heal\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x200614 === 'Archer')
                _0x5ed78f = 'Guard\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x200614 === 'Escort')
                _0x5ed78f = 'Roleblock\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x200614 === 'Vigilante')
                _0x5ed78f = 'Shoot\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x200614 === 'Skinwalker')
                _0x5ed78f = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x200614 === 'Blackmailer')
                _0x5ed78f = 'Pick\x20a\x20player\x20to\x20blackmail\x20and\x20a\x20player\x20to\x20kill\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x200614 === 'Celebrity')
                _0x5ed78f = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x200614 === 'Mayor')
                _0x5ed78f = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0xb34a23(_0x5ed78f, !![]);
        } else if (_0x2495d2['type'] === 'mayor_reveal') {
            _0x13d97d['add'](parseInt(_0x2495d2['playerId']));
            _0x3a7cfa();
            _0x3c1ffd();
        } else if (_0x2495d2['type'] === 'rolelist_update') {
            _0x1c538f['ROLE_LIST_RAW'] = _0x2495d2['list'] || [];
            _0x18f53d(_0x2495d2['list'], _0x2495d2['mode']);
        } else if (_0x2495d2['type'] === 'sound_event') {
            _0xe6f244['onSoundEvent'](_0x2495d2['track']);
        } else if (_0x2495d2['type'] === 'blood_splatter') {
            _0x5e844e['push']({
                'x': _0x2495d2['x'],
                'y': _0x2495d2['y']
            });
        } else if (_0x2495d2['type'] === 'blood_drop') {
            _0x584fe3['push']({
                'x': _0x2495d2['x'],
                'y': _0x2495d2['y']
            });
        } else if (_0x2495d2['type'] === 'day_fade') {
            _0x5888f0 = 0x1;
            _0x1a8fda = performance['now']() + 0x3e8;
        } else if (_0x2495d2['type'] === 'player_stats_updated') {
            const _0x1f9dab = parseInt(_0x2495d2['id']);
            if (_0x1f9dab === _0x180928 && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x2495d2['accountStats']);
            }
            if (_0x141786[_0x2495d2['id']]) {
                _0x141786[_0x2495d2['id']]['accountStats'] = _0x2495d2['accountStats'];
            }
            _0x16f5df();
        } else if (_0x2495d2['type'] === 'stats_update') {
            const _0x10689e = window['_FB'];
            if (_0x10689e && _0x10689e['_currentUser'] && _0x10689e['_userData']) {
                const _0x36969e = _0x10689e['_currentUser']['uid'];
                const _0x566d94 = _0x2495d2['patch'] || {};
                const _0x25ee67 = _0x10689e['_userData'];
                const _0x33802c = {
                    'townWins': (_0x25ee67['townWins'] || 0x0) + (_0x566d94['townWins'] || 0x0),
                    'mafiaWins': (_0x25ee67['mafiaWins'] || 0x0) + (_0x566d94['mafiaWins'] || 0x0),
                    'deaths': (_0x25ee67['deaths'] || 0x0) + (_0x566d94['deaths'] || 0x0),
                    'townLosses': (_0x25ee67['townLosses'] || 0x0) + (_0x566d94['townLosses'] || 0x0),
                    'mafiaLosses': (_0x25ee67['mafiaLosses'] || 0x0) + (_0x566d94['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x10689e['_userData'], _0x33802c);
                const _0x4f1864 = _0x10689e['doc'](_0x10689e['db'], 'users', _0x36969e);
                _0x10689e['updateDoc'](_0x4f1864, _0x33802c)['catch'](() => {
                });
                if (_0x35f6c9 && _0x35f6c9['readyState'] === WebSocket['OPEN']) {
                    _0x35f6c9['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x33802c
                    }));
                }
                _0x16f5df();
            }
        } else if (_0x2495d2['type'] === 'game_over') {
            _0xe6f244['onStateChange']('LOBBY', ![]);
            _0x18f53d([], 'off');
            _0x200614 = null;
            _0x1ac1c2['isDead'] = ![];
            _0x1ac1c2['hasArrow'] = ![];
            _0x5e844e = [];
            _0x584fe3 = [];
            _0x2e3e7d['clear']();
            _0x13d97d['clear']();
            _0x1c538f['CURRENT_TARGET'] = null;
            _0x369e35 = null;
            _0x577627 = null;
            _0x3e0ffb = null;
            _0xaaa524 = null;
            _0x27dd2d = null;
            _0x26be4a = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x3c1ffd();
            _0xb34a23('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x2495d2['type'] === 'chat_log') {
            _0xb34a23(_0x2495d2['text'], ![], !!_0x2495d2['isHost'], _0x2495d2['sender']);
        } else if (_0x2495d2['type'] === 'sys_chat') {
            _0xb34a23(_0x2495d2['text'], !![]);
        }
    };
}
function _0xb34a23(_0x174a8d, _0x4b1789 = ![], _0x3269c2 = ![], _0x3be829 = null) {
    const _0x40c156 = document['getElementById']('chat-log-messages');
    const _0x286b98 = document['getElementById']('chat-log-ui');
    const _0xadbb09 = _0x286b98 ? _0x286b98['scrollHeight'] - _0x286b98['scrollTop'] - _0x286b98['clientHeight'] < 0x1e : !![];
    const _0x22b5b2 = document['createElement']('div');
    _0x22b5b2['className'] = 'chat-log-line' + (_0x4b1789 ? '\x20sys-msg' : '');
    if (_0x3be829) {
        const _0x35593b = document['createElement']('span');
        _0x35593b['className'] = _0x3269c2 ? 'chat-host-name' : 'chat-sender-name';
        _0x35593b['textContent'] = _0x3be829 + ':\x20';
        const _0x23d93b = document['createElement']('span');
        _0x23d93b['className'] = 'chat-msg-text';
        _0x23d93b['textContent'] = _0x174a8d;
        _0x22b5b2['appendChild'](_0x35593b);
        _0x22b5b2['appendChild'](_0x23d93b);
    } else {
        _0x22b5b2['innerText'] = _0x174a8d;
    }
    if (_0x40c156)
        _0x40c156['appendChild'](_0x22b5b2);
    if (_0x286b98 && _0xadbb09) {
        _0x286b98['scrollTop'] = _0x286b98['scrollHeight'];
    }
    if (_0x40c156 && _0x40c156['childElementCount'] > 0xc8) {
        _0x40c156['removeChild'](_0x40c156['firstChild']);
    }
}
function _0x4d99a3(_0x565248, _0x43a048, _0x560764) {
    const _0x439c5b = document['createElement']('canvas');
    _0x439c5b['width'] = _0x560764;
    _0x439c5b['height'] = _0x560764;
    const _0x43ec70 = _0x439c5b['getContext']('2d');
    _0x43ec70['imageSmoothingEnabled'] = ![];
    const _0xc58375 = 'assets/' + (_0x565248 || 'body01.png');
    const _0xaaa17c = _0x314e81(_0xc58375);
    if (_0xaaa17c['complete'] && _0xaaa17c['naturalWidth'] > 0x0)
        _0x43ec70['drawImage'](_0xaaa17c, 0x0, 0x0, _0x560764, _0x560764);
    if (_0x43a048) {
        const _0x43f846 = 'assets/' + _0x43a048;
        const _0x4b0d28 = _0x314e81(_0x43f846);
        if (_0x4b0d28['complete'] && _0x4b0d28['naturalWidth'] > 0x0)
            _0x43ec70['drawImage'](_0x4b0d28, 0x0, 0x0, _0x560764, _0x560764);
    }
    return _0x439c5b['toDataURL']();
}
let _0x3157cb = '';
function _0x16f5df() {
    const _0x1be27e = document['getElementById']('chat-profile-panel');
    if (!_0x1be27e)
        return;
    const _0x12476f = [];
    if (_0x180928 !== null) {
        const _0x3cc0de = _0x2bfb82 || 'body01.png';
        const _0x5df2f5 = _0x122e55 || 'eyes4.png';
        const _0x287810 = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x12476f['push']({
            'id': _0x180928,
            'name': _0x8b0c49,
            'body': _0x3cc0de,
            'eyes': _0x5df2f5,
            'stats': _0x287810
        });
    }
    for (const _0x5ce897 in _0x141786) {
        const _0x776f78 = _0x141786[_0x5ce897];
        const _0x5cedce = _0x776f78['accountStats'] || null;
        _0x12476f['push']({
            'id': parseInt(_0x5ce897),
            'name': _0x776f78['name'],
            'body': _0x776f78['body'] || 'body01.png',
            'eyes': _0x776f78['eyes'] || 'eyes4.png',
            'stats': _0x5cedce
        });
    }
    const _0xbb73f1 = _0x12476f['map'](_0x555e07 => _0x555e07['id'] + '_' + _0x555e07['name'] + '_' + _0x555e07['body'] + '_' + _0x555e07['eyes'] + '_' + JSON['stringify'](_0x555e07['stats']))['join']('|');
    if (_0xbb73f1 === _0x3157cb)
        return;
    _0x3157cb = _0xbb73f1;
    _0x1be27e['innerHTML'] = '';
    let _0x5a9d27 = ![];
    for (const _0x3c8d3a of _0x12476f) {
        _0x5a9d27 = !![];
        const _0x1db808 = _0x4d99a3(_0x3c8d3a['body'], _0x3c8d3a['eyes'], 0x20);
        const _0x4b962e = document['createElement']('div');
        _0x4b962e['className'] = 'chat-pfp-entry';
        const _0x24e160 = document['createElement']('img');
        _0x24e160['src'] = _0x1db808;
        _0x24e160['alt'] = _0x3c8d3a['name'];
        _0x4b962e['appendChild'](_0x24e160);
        const _0x1ad5e8 = document['createElement']('div');
        _0x1ad5e8['className'] = 'chat-pfp-tooltip';
        let _0x4121a2 = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x3c8d3a['name'] + '</div>';
        const _0x140c19 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x45aa81 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x10c046 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0xfcf9bf = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x35dde8 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0xc42e9 = (_0x38c401, _0x41a42c, _0x3e0749, _0x50ad37) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x38c401 + '<span\x20style=\x22flex:1;color:' + _0x50ad37 + ';\x22>' + _0x41a42c + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x3e0749 + '</span></div>';
        if (_0x3c8d3a['stats']) {
            _0x4121a2 += _0xc42e9(_0x140c19, 'Town\x20Wins', _0x3c8d3a['stats']['townWins'] || 0x0, '#55ee77');
            _0x4121a2 += _0xc42e9(_0x45aa81, 'Mafia\x20Wins', _0x3c8d3a['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x4121a2 += _0xc42e9(_0x10c046, 'Deaths', _0x3c8d3a['stats']['deaths'] || 0x0, '#aaa');
            _0x4121a2 += _0xc42e9(_0xfcf9bf, 'Town\x20Losses', _0x3c8d3a['stats']['townLosses'] || 0x0, '#6688aa');
            _0x4121a2 += _0xc42e9(_0x35dde8, 'Mafia\x20Losses', _0x3c8d3a['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x4121a2 += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x1ad5e8['innerHTML'] = _0x4121a2;
        _0x4b962e['appendChild'](_0x1ad5e8);
        _0x4b962e['addEventListener']('mouseenter', () => {
            const _0x2a1a5f = _0x4b962e['getBoundingClientRect']();
            _0x1ad5e8['style']['left'] = _0x2a1a5f['right'] + 0x6 + 'px';
            _0x1ad5e8['style']['top'] = _0x2a1a5f['top'] + _0x2a1a5f['height'] / 0x2 + 'px';
            _0x1ad5e8['style']['transform'] = 'translateY(-50%)';
        });
        _0x1be27e['appendChild'](_0x4b962e);
    }
    const _0x2dea88 = document['getElementById']('chat-log-wrap');
    if (_0x2dea88) {
        if (_0x5a9d27) {
            _0x2dea88['classList']['add']('has-profiles');
            _0x1be27e['style']['display'] = 'flex';
        } else {
            _0x2dea88['classList']['remove']('has-profiles');
            _0x1be27e['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x16f5df;
let _0x3f5aaa = -0x1, _0x115f3b = -0x1, _0x1b7a95 = -0x1, _0x44ef3f = 0x0;
function _0x1efd12() {
    if (!_0x180928 || !_0x35f6c9 || _0x35f6c9['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x32945a = performance['now']();
    const _0x48f6ed = _0x32945a - _0x44ef3f;
    const _0x33688c = Math['abs'](_0x1ac1c2['x'] - _0x3f5aaa) > 0.05 || Math['abs'](_0x1ac1c2['y'] - _0x115f3b) > 0.05 || Math['abs'](_0x1ac1c2['angle'] - _0x1b7a95) > 0.02;
    if (!_0x33688c && _0x48f6ed < 0xc8)
        return;
    if (_0x48f6ed < 0x19)
        return;
    _0x44ef3f = _0x32945a;
    _0x3f5aaa = _0x1ac1c2['x'];
    _0x115f3b = _0x1ac1c2['y'];
    _0x1b7a95 = _0x1ac1c2['angle'];
    if (!_0x180928 || !_0x35f6c9 || _0x35f6c9['readyState'] !== WebSocket['OPEN'])
        return;
    _0x35f6c9['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x1ac1c2['x'],
        'y': _0x1ac1c2['y'],
        'vx': _0x1ac1c2['vx'],
        'vy': _0x1ac1c2['vy'],
        'angle': _0x1ac1c2['angle'],
        'scale': _0x1ac1c2['scale'],
        'teleportId': _0xcba136,
        'clientTimestamp': Date['now']()
    }));
}
function _0x36d58d() {
    if (_0x1ac1c2['isDead'])
        return;
    const _0x10a10c = _0x1c538f['MAP']['layers']['find'](_0x9e70b4 => _0x9e70b4['name'] === 'walls');
    if (!_0x10a10c)
        return;
    const _0x4e57a1 = _0x1ac1c2['scale'];
    const _0xe32163 = _0x1ac1c2['width'] * _0x4e57a1 / 0x2;
    for (let _0x4019bb = 0x0; _0x4019bb < 0x3; _0x4019bb++) {
        let _0x5cc36e = _0x1ac1c2['x'] + _0x1ac1c2['width'] / 0x2;
        let _0x5ac365 = _0x1ac1c2['y'] + _0x1ac1c2['height'] / 0x2;
        const _0x4b47f6 = Math['floor']((_0x5cc36e - _0xe32163) / _0x1c538f['MAP']['tileSize']);
        const _0x4ed249 = Math['floor']((_0x5cc36e + _0xe32163) / _0x1c538f['MAP']['tileSize']);
        const _0x39a52c = Math['floor']((_0x5ac365 - _0xe32163) / _0x1c538f['MAP']['tileSize']);
        const _0x550d6e = Math['floor']((_0x5ac365 + _0xe32163) / _0x1c538f['MAP']['tileSize']);
        for (let _0x328024 = _0x39a52c; _0x328024 <= _0x550d6e; _0x328024++) {
            for (let _0x1269b7 = _0x4b47f6; _0x1269b7 <= _0x4ed249; _0x1269b7++) {
                if (_0x1269b7 < 0x0 || _0x1269b7 >= _0x1c538f['MAP']['columns'] || _0x328024 < 0x0 || _0x328024 >= _0x1c538f['MAP']['rows'])
                    continue;
                if (_0x10a10c['data'][_0x328024 * _0x1c538f['MAP']['columns'] + _0x1269b7] === 0x0)
                    continue;
                const _0x1eb2d1 = _0x1269b7 * _0x1c538f['MAP']['tileSize'];
                const _0xc9a12d = _0x328024 * _0x1c538f['MAP']['tileSize'];
                const _0xad814 = _0x5cc36e < _0x1eb2d1 ? _0x1eb2d1 : _0x5cc36e > _0x1eb2d1 + _0x1c538f['MAP']['tileSize'] ? _0x1eb2d1 + _0x1c538f['MAP']['tileSize'] : _0x5cc36e;
                const _0x2931d2 = _0x5ac365 < _0xc9a12d ? _0xc9a12d : _0x5ac365 > _0xc9a12d + _0x1c538f['MAP']['tileSize'] ? _0xc9a12d + _0x1c538f['MAP']['tileSize'] : _0x5ac365;
                const _0x40fc8c = _0x5cc36e - _0xad814;
                const _0x1cc9f4 = _0x5ac365 - _0x2931d2;
                const _0x4b524a = Math['sqrt'](_0x40fc8c * _0x40fc8c + _0x1cc9f4 * _0x1cc9f4);
                if (_0x4b524a < _0xe32163) {
                    if (_0x4b524a === 0x0) {
                        const _0x3ab585 = _0x5cc36e - _0x1eb2d1;
                        const _0x2da53d = _0x1eb2d1 + _0x1c538f['MAP']['tileSize'] - _0x5cc36e;
                        const _0x3ed3e8 = _0x5ac365 - _0xc9a12d;
                        const _0x150028 = _0xc9a12d + _0x1c538f['MAP']['tileSize'] - _0x5ac365;
                        const _0x18740e = Math['min'](_0x3ab585, _0x2da53d, _0x3ed3e8, _0x150028);
                        if (_0x18740e === _0x3ab585)
                            _0x5cc36e = _0x1eb2d1 - _0xe32163;
                        else if (_0x18740e === _0x2da53d)
                            _0x5cc36e = _0x1eb2d1 + _0x1c538f['MAP']['tileSize'] + _0xe32163;
                        else if (_0x18740e === _0x3ed3e8)
                            _0x5ac365 = _0xc9a12d - _0xe32163;
                        else
                            _0x5ac365 = _0xc9a12d + _0x1c538f['MAP']['tileSize'] + _0xe32163;
                    } else {
                        const _0x108166 = _0xe32163 - _0x4b524a;
                        _0x5cc36e += _0x40fc8c / _0x4b524a * _0x108166;
                        _0x5ac365 += _0x1cc9f4 / _0x4b524a * _0x108166;
                        const _0x310aef = _0x1ac1c2['vx'] * (_0x40fc8c / _0x4b524a) + _0x1ac1c2['vy'] * (_0x1cc9f4 / _0x4b524a);
                        if (_0x310aef < 0x0) {
                            _0x1ac1c2['vx'] -= _0x310aef * (_0x40fc8c / _0x4b524a);
                            _0x1ac1c2['vy'] -= _0x310aef * (_0x1cc9f4 / _0x4b524a);
                        }
                    }
                }
            }
        }
        _0x1ac1c2['x'] = _0x5cc36e - _0x1ac1c2['width'] / 0x2;
        _0x1ac1c2['y'] = _0x5ac365 - _0x1ac1c2['height'] / 0x2;
    }
}
function _0x19b690(_0x57c93a) {
    const _0x198e04 = _0x1c538f['MAP']['layers']['find'](_0x58812f => _0x58812f['name'] === 'walls');
    if (!_0x198e04)
        return;
    const _0x17ce46 = _0x57c93a['width'] / 0x2;
    for (let _0x4ae350 = 0x0; _0x4ae350 < 0x2; _0x4ae350++) {
        let _0x35f1cd = _0x57c93a['x'] + _0x57c93a['width'] / 0x2;
        let _0x2547bd = _0x57c93a['y'] + _0x57c93a['height'] / 0x2;
        const _0x48d54f = Math['floor']((_0x35f1cd - _0x17ce46) / _0x1c538f['MAP']['tileSize']);
        const _0x564a34 = Math['floor']((_0x35f1cd + _0x17ce46) / _0x1c538f['MAP']['tileSize']);
        const _0x9402af = Math['floor']((_0x2547bd - _0x17ce46) / _0x1c538f['MAP']['tileSize']);
        const _0x25da23 = Math['floor']((_0x2547bd + _0x17ce46) / _0x1c538f['MAP']['tileSize']);
        for (let _0x2cf61e = _0x9402af; _0x2cf61e <= _0x25da23; _0x2cf61e++) {
            for (let _0x40eb04 = _0x48d54f; _0x40eb04 <= _0x564a34; _0x40eb04++) {
                if (_0x40eb04 < 0x0 || _0x40eb04 >= _0x1c538f['MAP']['columns'] || _0x2cf61e < 0x0 || _0x2cf61e >= _0x1c538f['MAP']['rows'])
                    continue;
                if (_0x198e04['data'][_0x2cf61e * _0x1c538f['MAP']['columns'] + _0x40eb04] === 0x0)
                    continue;
                const _0x522836 = _0x40eb04 * _0x1c538f['MAP']['tileSize'];
                const _0x5c0fa9 = _0x2cf61e * _0x1c538f['MAP']['tileSize'];
                const _0x36bc43 = _0x35f1cd < _0x522836 ? _0x522836 : _0x35f1cd > _0x522836 + _0x1c538f['MAP']['tileSize'] ? _0x522836 + _0x1c538f['MAP']['tileSize'] : _0x35f1cd;
                const _0x10677f = _0x2547bd < _0x5c0fa9 ? _0x5c0fa9 : _0x2547bd > _0x5c0fa9 + _0x1c538f['MAP']['tileSize'] ? _0x5c0fa9 + _0x1c538f['MAP']['tileSize'] : _0x2547bd;
                const _0x382269 = _0x35f1cd - _0x36bc43;
                const _0x98475c = _0x2547bd - _0x10677f;
                const _0x1d6868 = Math['sqrt'](_0x382269 * _0x382269 + _0x98475c * _0x98475c);
                if (_0x1d6868 < _0x17ce46) {
                    if (_0x1d6868 === 0x0) {
                        const _0x9d6a3a = _0x35f1cd - _0x522836;
                        const _0xbbc48c = _0x522836 + _0x1c538f['MAP']['tileSize'] - _0x35f1cd;
                        const _0xbb6a06 = _0x2547bd - _0x5c0fa9;
                        const _0x3ce17a = _0x5c0fa9 + _0x1c538f['MAP']['tileSize'] - _0x2547bd;
                        const _0x217666 = Math['min'](_0x9d6a3a, _0xbbc48c, _0xbb6a06, _0x3ce17a);
                        if (_0x217666 === _0x9d6a3a)
                            _0x35f1cd = _0x522836 - _0x17ce46;
                        else if (_0x217666 === _0xbbc48c)
                            _0x35f1cd = _0x522836 + _0x1c538f['MAP']['tileSize'] + _0x17ce46;
                        else if (_0x217666 === _0xbb6a06)
                            _0x2547bd = _0x5c0fa9 - _0x17ce46;
                        else
                            _0x2547bd = _0x5c0fa9 + _0x1c538f['MAP']['tileSize'] + _0x17ce46;
                    } else {
                        const _0x20f4d3 = _0x17ce46 - _0x1d6868;
                        _0x35f1cd += _0x382269 / _0x1d6868 * _0x20f4d3;
                        _0x2547bd += _0x98475c / _0x1d6868 * _0x20f4d3;
                    }
                }
            }
        }
        _0x57c93a['x'] = _0x35f1cd - _0x57c93a['width'] / 0x2;
        _0x57c93a['y'] = _0x2547bd - _0x57c93a['height'] / 0x2;
    }
}
function _0x58bd06(_0x108c3f) {
    const _0x4698d6 = _0x108c3f['width'] / 0x2;
    for (let _0x47f803 = 0x0; _0x47f803 < 0x2; _0x47f803++) {
        let _0x1ce6fa = _0x108c3f['x'] + _0x108c3f['width'] / 0x2;
        let _0x593330 = _0x108c3f['y'] + _0x108c3f['height'] / 0x2;
        for (const _0x3f8579 of _0x1c538f['ENTITIES']) {
            const _0x1f8ea5 = _0x1ce6fa < _0x3f8579['x'] ? _0x3f8579['x'] : _0x1ce6fa > _0x3f8579['x'] + _0x3f8579['w'] ? _0x3f8579['x'] + _0x3f8579['w'] : _0x1ce6fa;
            const _0x6f0a8b = _0x593330 < _0x3f8579['y'] ? _0x3f8579['y'] : _0x593330 > _0x3f8579['y'] + _0x3f8579['h'] ? _0x3f8579['y'] + _0x3f8579['h'] : _0x593330;
            const _0x3d3307 = _0x1ce6fa - _0x1f8ea5;
            const _0x47adba = _0x593330 - _0x6f0a8b;
            const _0x327a4c = Math['sqrt'](_0x3d3307 * _0x3d3307 + _0x47adba * _0x47adba);
            if (_0x327a4c < _0x4698d6 && _0x327a4c > 0x0) {
                const _0x2ad5cb = _0x4698d6 - _0x327a4c;
                const _0x553e4d = _0x3d3307 / _0x327a4c;
                const _0x43d504 = _0x47adba / _0x327a4c;
                _0x1ce6fa += _0x553e4d * _0x2ad5cb;
                _0x593330 += _0x43d504 * _0x2ad5cb;
            } else if (_0x327a4c === 0x0) {
                const _0x1dd60e = _0x1ce6fa - _0x3f8579['x'];
                const _0x357937 = _0x3f8579['x'] + _0x3f8579['w'] - _0x1ce6fa;
                const _0x229912 = _0x593330 - _0x3f8579['y'];
                const _0x3d52bb = _0x3f8579['y'] + _0x3f8579['h'] - _0x593330;
                const _0x1cfe3a = Math['min'](_0x1dd60e, _0x357937, _0x229912, _0x3d52bb);
                if (_0x1cfe3a === _0x1dd60e)
                    _0x1ce6fa = _0x3f8579['x'] - _0x4698d6;
                else if (_0x1cfe3a === _0x357937)
                    _0x1ce6fa = _0x3f8579['x'] + _0x3f8579['w'] + _0x4698d6;
                else if (_0x1cfe3a === _0x229912)
                    _0x593330 = _0x3f8579['y'] - _0x4698d6;
                else
                    _0x593330 = _0x3f8579['y'] + _0x3f8579['h'] + _0x4698d6;
            }
        }
        _0x108c3f['x'] = _0x1ce6fa - _0x108c3f['width'] / 0x2;
        _0x108c3f['y'] = _0x593330 - _0x108c3f['height'] / 0x2;
    }
}
function _0x4ac7fd() {
    if (_0x1ac1c2['isDead'])
        return;
    const _0xe4a96c = _0x1ac1c2['width'] / 0x2;
    const _0x38b548 = _0x1ac1c2['x'] + _0x1ac1c2['width'] / 0x2;
    const _0x3b6494 = _0x1ac1c2['y'] + _0x1ac1c2['height'] / 0x2;
    for (const _0x41b8b4 in _0x141786) {
        const _0x35beb2 = _0x141786[_0x41b8b4];
        if (_0x35beb2['isDead'])
            continue;
        const _0x4c1772 = _0x35beb2['width'] / 0x2;
        const _0x57d0f7 = _0xe4a96c + _0x4c1772;
        const _0x1f9166 = (_0x35beb2['renderX'] ?? _0x35beb2['x']) + _0x35beb2['width'] / 0x2;
        const _0x52917a = (_0x35beb2['renderY'] ?? _0x35beb2['y']) + _0x35beb2['height'] / 0x2;
        const _0x5611a6 = _0x38b548 - _0x1f9166;
        const _0x33b282 = _0x3b6494 - _0x52917a;
        const _0x5598b8 = Math['sqrt'](_0x5611a6 * _0x5611a6 + _0x33b282 * _0x33b282);
        if (_0x5598b8 > 0x0 && _0x5598b8 < _0x57d0f7) {
            const _0x776e5f = _0x57d0f7 - _0x5598b8;
            const _0x517114 = _0x5611a6 / _0x5598b8;
            const _0xd1c748 = _0x33b282 / _0x5598b8;
            _0x1ac1c2['x'] += _0x517114 * (_0x776e5f * 0.25);
            _0x1ac1c2['y'] += _0xd1c748 * (_0x776e5f * 0.25);
            _0x35beb2['x'] -= _0x517114 * (_0x776e5f * 0.75);
            _0x35beb2['y'] -= _0xd1c748 * (_0x776e5f * 0.75);
            _0x19b690(_0x35beb2);
            _0x58bd06(_0x35beb2);
            if (_0x35beb2['renderX'] !== undefined) {
                _0x35beb2['renderX'] = _0x35beb2['x'];
                _0x35beb2['renderY'] = _0x35beb2['y'];
            }
            const _0x392de3 = _0x1ac1c2['vx'] * _0x517114 + _0x1ac1c2['vy'] * _0xd1c748;
            if (_0x392de3 < 0x0) {
                _0x1ac1c2['vx'] -= _0x392de3 * _0x517114 * 0.25;
                _0x1ac1c2['vy'] -= _0x392de3 * _0xd1c748 * 0.25;
            }
        }
    }
    _0x36d58d();
    _0x6e21c7();
}
function _0x6e21c7() {
    if (_0x1ac1c2['isDead'])
        return;
    const _0x42f1dc = _0x1ac1c2['scale'];
    const _0x792bd8 = _0x1ac1c2['width'] * _0x42f1dc / 0x2;
    for (let _0x1934c8 = 0x0; _0x1934c8 < 0x2; _0x1934c8++) {
        let _0x4dbd7d = _0x1ac1c2['x'] + _0x1ac1c2['width'] / 0x2;
        let _0x1fa6c4 = _0x1ac1c2['y'] + _0x1ac1c2['height'] / 0x2;
        for (const _0x36ad15 of _0x1c538f['ENTITIES']) {
            const _0x9afd57 = _0x4dbd7d < _0x36ad15['x'] ? _0x36ad15['x'] : _0x4dbd7d > _0x36ad15['x'] + _0x36ad15['w'] ? _0x36ad15['x'] + _0x36ad15['w'] : _0x4dbd7d;
            const _0x29304a = _0x1fa6c4 < _0x36ad15['y'] ? _0x36ad15['y'] : _0x1fa6c4 > _0x36ad15['y'] + _0x36ad15['h'] ? _0x36ad15['y'] + _0x36ad15['h'] : _0x1fa6c4;
            const _0x596b2e = _0x4dbd7d - _0x9afd57;
            const _0x4c40e0 = _0x1fa6c4 - _0x29304a;
            const _0x1ec7e9 = Math['sqrt'](_0x596b2e * _0x596b2e + _0x4c40e0 * _0x4c40e0);
            if (_0x1ec7e9 < _0x792bd8 && _0x1ec7e9 > 0x0) {
                const _0x380cc9 = _0x792bd8 - _0x1ec7e9;
                const _0x35da20 = _0x596b2e / _0x1ec7e9;
                const _0x36e5bd = _0x4c40e0 / _0x1ec7e9;
                _0x4dbd7d += _0x35da20 * _0x380cc9;
                _0x1fa6c4 += _0x36e5bd * _0x380cc9;
                const _0x338b21 = _0x1ac1c2['vx'] * _0x35da20 + _0x1ac1c2['vy'] * _0x36e5bd;
                if (_0x338b21 < 0x0) {
                    _0x1ac1c2['vx'] -= _0x338b21 * _0x35da20;
                    _0x1ac1c2['vy'] -= _0x338b21 * _0x36e5bd;
                }
            } else if (_0x1ec7e9 === 0x0) {
                const _0x25f3b2 = _0x4dbd7d - _0x36ad15['x'];
                const _0x168c24 = _0x36ad15['x'] + _0x36ad15['w'] - _0x4dbd7d;
                const _0x594657 = _0x1fa6c4 - _0x36ad15['y'];
                const _0xa890cd = _0x36ad15['y'] + _0x36ad15['h'] - _0x1fa6c4;
                const _0x151ce1 = Math['min'](_0x25f3b2, _0x168c24, _0x594657, _0xa890cd);
                if (_0x151ce1 === _0x25f3b2)
                    _0x4dbd7d = _0x36ad15['x'] - _0x792bd8;
                else if (_0x151ce1 === _0x168c24)
                    _0x4dbd7d = _0x36ad15['x'] + _0x36ad15['w'] + _0x792bd8;
                else if (_0x151ce1 === _0x594657)
                    _0x1fa6c4 = _0x36ad15['y'] - _0x792bd8;
                else
                    _0x1fa6c4 = _0x36ad15['y'] + _0x36ad15['h'] + _0x792bd8;
            }
        }
        _0x1ac1c2['x'] = _0x4dbd7d - _0x1ac1c2['width'] / 0x2;
        _0x1ac1c2['y'] = _0x1fa6c4 - _0x1ac1c2['height'] / 0x2;
    }
}
function _0x4d27f5(_0x5ce321, _0x5aae26) {
    const _0x2056d9 = _0x1c538f['MAP']['layers']['find'](_0x41d2fb => _0x41d2fb['name'] === 'trees');
    if (!_0x2056d9)
        return ![];
    const _0x47ed47 = Math['floor'](_0x5ce321 / _0x1c538f['MAP']['tileSize']);
    const _0x43e8fc = Math['floor'](_0x5aae26 / _0x1c538f['MAP']['tileSize']);
    if (_0x47ed47 < 0x0 || _0x47ed47 >= _0x1c538f['MAP']['columns'] || _0x43e8fc < 0x0 || _0x43e8fc >= _0x1c538f['MAP']['rows'])
        return ![];
    return _0x2056d9['data'][_0x43e8fc * _0x1c538f['MAP']['columns'] + _0x47ed47] === 0xb;
}
let _0x34fc42 = null;
function _0x361de1() {
    const _0x29b43b = _0x1c538f['MAP'];
    const _0x4c18de = _0x29b43b['layers']['find'](_0x1ded03 => _0x1ded03['name'] === 'floor2');
    const _0x4ae978 = _0x29b43b['layers']['find'](_0x49e871 => _0x49e871['name'] === 'walls');
    if (!_0x4c18de || !_0x4ae978) {
        _0x34fc42 = null;
        return;
    }
    const _0x4647d5 = _0x29b43b['columns'];
    const _0x5649bb = _0x29b43b['rows'];
    const _0x5538ba = [];
    const _0x34ae60 = new Set();
    const _0xa569e8 = new Set();
    for (let _0x3cdff6 = 0x0; _0x3cdff6 < _0x5649bb; _0x3cdff6++) {
        for (let _0xaa819c = 0x0; _0xaa819c < _0x4647d5; _0xaa819c++) {
            const _0x53cb05 = _0x3cdff6 * _0x4647d5 + _0xaa819c;
            const _0x3b7a70 = _0x4c18de['data'][_0x53cb05];
            const _0x4a5a7e = _0x4ae978['data'][_0x53cb05];
            if (_0x3b7a70 === 0x2 && _0x4a5a7e === 0x0) {
                _0x5538ba['push']({
                    'c': _0xaa819c,
                    'r': _0x3cdff6
                });
                _0xa569e8['add'](_0xaa819c + ',' + _0x3cdff6);
            } else if (_0x4a5a7e !== 0x0) {
                _0x34ae60['add'](_0xaa819c + ',' + _0x3cdff6);
            }
        }
    }
    const _0x1cbc18 = [
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
                c: _0x249317,
                r: _0x3d26e2
            } of _0x5538ba) {
        for (const [_0x524570, _0x7cc1f3] of _0x1cbc18) {
            const _0x48006c = _0x249317 + _0x524570, _0x2e2920 = _0x3d26e2 + _0x7cc1f3;
            const _0x2bb92e = _0x48006c + ',' + _0x2e2920;
            if (!_0xa569e8['has'](_0x2bb92e)) {
                _0x34ae60['add'](_0x2bb92e);
            }
        }
    }
    _0x34fc42 = {
        'wallSet': _0x34ae60,
        'floorTiles': _0x5538ba,
        'interiorSet': _0xa569e8
    };
}
function _0x34c6bc() {
    const _0xb62550 = _0x1c538f['MAP']['layers']['find'](_0x56ada2 => _0x56ada2['name'] === 'floor2');
    if (!_0xb62550)
        return ![];
    const _0x4c1cb3 = _0x1ac1c2['x'] + _0x1ac1c2['width'] / 0x2;
    const _0x879b92 = _0x1ac1c2['y'] + _0x1ac1c2['height'] / 0x2;
    const _0x2257a2 = _0x1c538f['MAP']['tileSize'];
    const _0x59c3ce = Math['floor'](_0x4c1cb3 / _0x2257a2);
    const _0x72783c = Math['floor'](_0x879b92 / _0x2257a2);
    if (_0x59c3ce < 0x0 || _0x59c3ce >= _0x1c538f['MAP']['columns'] || _0x72783c < 0x0 || _0x72783c >= _0x1c538f['MAP']['rows'])
        return ![];
    const _0x1d3b49 = _0x72783c * _0x1c538f['MAP']['columns'] + _0x59c3ce;
    if (_0xb62550['data'][_0x1d3b49] === 0x2)
        return !![];
    if (_0x1c538f['MAP']['doors'] && _0x1c538f['MAP']['doors'][_0x1d3b49])
        return !![];
    const _0x45d47e = [
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
    for (const [_0x26fb19, _0x412b2d] of _0x45d47e) {
        const _0x52d954 = Math['floor']((_0x4c1cb3 + _0x26fb19) / _0x2257a2);
        const _0x152438 = Math['floor']((_0x879b92 + _0x412b2d) / _0x2257a2);
        if (_0x52d954 >= 0x0 && _0x52d954 < _0x1c538f['MAP']['columns'] && _0x152438 >= 0x0 && _0x152438 < _0x1c538f['MAP']['rows']) {
            const _0x3dd703 = _0x152438 * _0x1c538f['MAP']['columns'] + _0x52d954;
            if (_0xb62550['data'][_0x3dd703] === 0x2 || _0x1c538f['MAP']['doors'] && _0x1c538f['MAP']['doors'][_0x3dd703]) {
                return !![];
            }
        }
    }
    return ![];
}
let _0xca967e = null, _0x1d0716 = null;
function _0xbfaa5() {
    if (_0x1ac1c2['isDead']) {
        _0x1c538f['SHADOW']['polygon'] = null;
        _0xca967e = null;
        return;
    }
    const _0x2f2f15 = _0x1c538f['MAP'];
    const _0x544100 = _0x1c538f['SHADOW'];
    const _0x21bda0 = _0x2f2f15['tileSize'];
    if (!_0x34fc42)
        _0x361de1();
    if (!_0x34fc42) {
        _0x544100['polygon'] = null;
        _0xca967e = null;
        return;
    }
    const {
        wallSet: _0x3e2294,
        floorTiles: _0x363796
    } = _0x34fc42;
    if (_0x363796['length'] === 0x0) {
        _0x544100['polygon'] = null;
        _0xca967e = null;
        return;
    }
    if (!_0x34c6bc()) {
        _0x544100['polygon'] = null;
        _0xca967e = null;
        return;
    }
    const _0x1500ab = _0x1ac1c2['x'] + _0x1ac1c2['width'] / 0x2;
    const _0x4b9bbd = _0x1ac1c2['y'] + _0x1ac1c2['height'] / 0x2;
    if (_0xca967e !== null && _0x544100['polygon'] && Math['hypot'](_0x1500ab - _0xca967e, _0x4b9bbd - _0x1d0716) < 0.5) {
        return;
    }
    _0xca967e = _0x1500ab;
    _0x1d0716 = _0x4b9bbd;
    const _0x187b15 = Math['floor'](_0x1500ab / _0x21bda0);
    const _0x943f82 = Math['floor'](_0x4b9bbd / _0x21bda0);
    const _0x37fc6d = Math['max'](0x0, _0x187b15 - 0x8);
    const _0x2e0501 = Math['min'](_0x2f2f15['columns'] - 0x1, _0x187b15 + 0x8);
    const _0x38bc6d = Math['max'](0x0, _0x943f82 - 0x8);
    const _0xbd3467 = Math['min'](_0x2f2f15['rows'] - 0x1, _0x943f82 + 0x8);
    const _0x334976 = [];
    const _0x16312e = [];
    for (let _0x1c2e0c = _0x38bc6d; _0x1c2e0c <= _0xbd3467; _0x1c2e0c++) {
        for (let _0x5988fe = _0x37fc6d; _0x5988fe <= _0x2e0501; _0x5988fe++) {
            if (!_0x3e2294['has'](_0x5988fe + ',' + _0x1c2e0c))
                continue;
            const _0x3e317c = _0x5988fe * _0x21bda0;
            const _0x284993 = _0x1c2e0c * _0x21bda0;
            const _0x2f4a5d = _0x3e317c + _0x21bda0;
            const _0x35f88f = _0x284993 + _0x21bda0;
            if (!_0x3e2294['has'](_0x5988fe + ',' + (_0x1c2e0c - 0x1))) {
                _0x334976['push'](_0x3e317c, _0x284993, _0x2f4a5d, _0x284993);
                _0x16312e['push'](_0x3e317c, _0x284993, _0x2f4a5d, _0x284993);
            }
            if (!_0x3e2294['has'](_0x5988fe + ',' + (_0x1c2e0c + 0x1))) {
                _0x334976['push'](_0x3e317c, _0x35f88f, _0x2f4a5d, _0x35f88f);
                _0x16312e['push'](_0x3e317c, _0x35f88f, _0x2f4a5d, _0x35f88f);
            }
            if (!_0x3e2294['has'](_0x5988fe - 0x1 + ',' + _0x1c2e0c)) {
                _0x334976['push'](_0x3e317c, _0x284993, _0x3e317c, _0x35f88f);
                _0x16312e['push'](_0x3e317c, _0x284993, _0x3e317c, _0x35f88f);
            }
            if (!_0x3e2294['has'](_0x5988fe + 0x1 + ',' + _0x1c2e0c)) {
                _0x334976['push'](_0x2f4a5d, _0x284993, _0x2f4a5d, _0x35f88f);
                _0x16312e['push'](_0x2f4a5d, _0x284993, _0x2f4a5d, _0x35f88f);
            }
        }
    }
    const _0x24cf61 = new Set();
    const _0x24f559 = [];
    const _0x39ebb1 = 0.0001;
    for (let _0x4db4b9 = 0x0; _0x4db4b9 < _0x16312e['length']; _0x4db4b9 += 0x2) {
        const _0x1f640d = _0x16312e[_0x4db4b9];
        const _0x1941a1 = _0x16312e[_0x4db4b9 + 0x1];
        const _0x3ddc1a = Math['atan2'](_0x1941a1 - _0x4b9bbd, _0x1f640d - _0x1500ab);
        const _0x34c1a8 = Math['round'](_0x3ddc1a * 0x9c40);
        if (!_0x24cf61['has'](_0x34c1a8 - 0x1)) {
            _0x24cf61['add'](_0x34c1a8 - 0x1);
            _0x24f559['push'](_0x3ddc1a - _0x39ebb1);
        }
        if (!_0x24cf61['has'](_0x34c1a8)) {
            _0x24cf61['add'](_0x34c1a8);
            _0x24f559['push'](_0x3ddc1a);
        }
        if (!_0x24cf61['has'](_0x34c1a8 + 0x1)) {
            _0x24cf61['add'](_0x34c1a8 + 0x1);
            _0x24f559['push'](_0x3ddc1a + _0x39ebb1);
        }
    }
    for (let _0x3766e8 = 0x0; _0x3766e8 < 0x10; _0x3766e8++) {
        const _0x4609aa = -Math['PI'] + _0x3766e8 * 0x2 * Math['PI'] / 0x10;
        _0x24f559['push'](_0x4609aa);
    }
    _0x24f559['sort']((_0x4f5bda, _0x5e07b4) => _0x4f5bda - _0x5e07b4);
    const _0x1a99c4 = 0xc * _0x21bda0;
    const _0xba9ec7 = [];
    for (let _0x43f2dc = 0x0; _0x43f2dc < _0x24f559['length']; _0x43f2dc++) {
        const _0x1a2d75 = _0x24f559[_0x43f2dc];
        const _0xee1d5f = Math['cos'](_0x1a2d75);
        const _0x22c804 = Math['sin'](_0x1a2d75);
        let _0xc1cbcf = _0x1a99c4;
        for (let _0x1c6bf9 = 0x0; _0x1c6bf9 < _0x334976['length']; _0x1c6bf9 += 0x4) {
            const _0x5646e7 = _0x334976[_0x1c6bf9], _0x2f3135 = _0x334976[_0x1c6bf9 + 0x1];
            const _0x1eda6c = _0x334976[_0x1c6bf9 + 0x2], _0x3f495d = _0x334976[_0x1c6bf9 + 0x3];
            const _0x5af765 = _0x1eda6c - _0x5646e7;
            const _0x26fb02 = _0x3f495d - _0x2f3135;
            const _0x37d1db = _0xee1d5f * _0x26fb02 - _0x22c804 * _0x5af765;
            if (Math['abs'](_0x37d1db) < 1e-9)
                continue;
            const _0x11b18a = _0x5646e7 - _0x1500ab;
            const _0x25f35e = _0x2f3135 - _0x4b9bbd;
            const _0x1e62fa = (_0x11b18a * _0x26fb02 - _0x25f35e * _0x5af765) / _0x37d1db;
            const _0x10305a = (_0x11b18a * _0x22c804 - _0x25f35e * _0xee1d5f) / _0x37d1db;
            if (_0x1e62fa > 0x1 && _0x10305a >= 0x0 && _0x10305a <= 0x1 && _0x1e62fa < _0xc1cbcf) {
                _0xc1cbcf = _0x1e62fa;
            }
        }
        _0xba9ec7['push'](_0x1500ab + _0xee1d5f * _0xc1cbcf, _0x4b9bbd + _0x22c804 * _0xc1cbcf);
    }
    _0x544100['polygon'] = _0xba9ec7['length'] >= 0x6 ? _0xba9ec7 : null;
}
function _0x427a51(_0x22fb3d, _0x37115d, _0x4bde24) {
    if (_0x1ac1c2['isDead'])
        return;
    if (!_0x34fc42)
        _0x361de1();
    if (!_0x34fc42)
        return;
    const {floorTiles: _0x1af6f0} = _0x34fc42;
    if (_0x1af6f0['length'] === 0x0)
        return;
    const _0x391615 = _0x1c538f['SHADOW'];
    const _0x30a452 = _0x1c538f['MAP']['tileSize'];
    const _0x5d5c94 = _0x1c538f['CAMERA']['width'];
    const _0x447395 = _0x1c538f['CAMERA']['height'];
    if (!_0x1c538f['SHADOW']['_buf'] || _0x1c538f['SHADOW']['_buf']['width'] !== _0x5d5c94 || _0x1c538f['SHADOW']['_buf']['height'] !== _0x447395) {
        _0x1c538f['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x1c538f['SHADOW']['_buf']['width'] = _0x5d5c94;
        _0x1c538f['SHADOW']['_buf']['height'] = _0x447395;
    }
    const _0x4cea77 = _0x1c538f['SHADOW']['_buf'];
    const _0x453b50 = _0x4cea77['getContext']('2d');
    _0x453b50['clearRect'](0x0, 0x0, _0x5d5c94, _0x447395);
    _0x453b50['fillStyle'] = 'rgba(0,0,0,0.95)';
    _0x453b50['beginPath']();
    for (const {
                c: _0x3d73a7,
                r: _0x17c253
            } of _0x1af6f0) {
        const _0x467355 = Math['round'](_0x3d73a7 * _0x30a452 - _0x37115d), _0x5748b4 = Math['round'](_0x17c253 * _0x30a452 - _0x4bde24);
        if (_0x467355 > _0x5d5c94 || _0x5748b4 > _0x447395 || _0x467355 + _0x30a452 < 0x0 || _0x5748b4 + _0x30a452 < 0x0)
            continue;
        _0x453b50['rect'](_0x467355, _0x5748b4, _0x30a452 + 0x1, _0x30a452 + 0x1);
    }
    _0x453b50['fill']();
    if (_0x34c6bc() && _0x391615['polygon'] && _0x391615['polygon']['length'] >= 0x6) {
        _0x453b50['globalCompositeOperation'] = 'destination-out';
        _0x453b50['fillStyle'] = 'rgba(0,0,0,1)';
        const _0x1e41fb = _0x391615['polygon'];
        _0x453b50['beginPath']();
        _0x453b50['moveTo'](_0x1e41fb[0x0] - _0x37115d, _0x1e41fb[0x1] - _0x4bde24);
        for (let _0x604b98 = 0x2; _0x604b98 < _0x1e41fb['length']; _0x604b98 += 0x2) {
            _0x453b50['lineTo'](_0x1e41fb[_0x604b98] - _0x37115d, _0x1e41fb[_0x604b98 + 0x1] - _0x4bde24);
        }
        _0x453b50['closePath']();
        _0x453b50['fill']();
        _0x453b50['globalCompositeOperation'] = 'source-over';
    }
    _0x22fb3d['drawImage'](_0x4cea77, 0x0, 0x0);
}
function _0x16c529(_0x1c6006) {
    let _0x766500 = 0x0, _0x328b24 = 0x0;
    const _0x23c94a = _0x1c538f['INPUTS']['mouseX'] / _0x1c538f['SYSTEM']['viewScale'];
    const _0x2a0861 = _0x1c538f['INPUTS']['mouseY'] / _0x1c538f['SYSTEM']['viewScale'];
    const _0x3b2831 = _0x1ac1c2['x'] - _0x1c538f['CAMERA']['x'] + _0x1ac1c2['width'] / 0x2;
    const _0x5b5d2f = _0x1ac1c2['y'] - _0x1c538f['CAMERA']['y'] + _0x1ac1c2['height'] / 0x2;
    const _0x4b695b = Math['atan2'](_0x2a0861 - _0x5b5d2f, _0x23c94a - _0x3b2831);
    if (_0xf556f8 !== 0x0 || _0x13422f !== 0x0) {
        _0x766500 = _0xf556f8;
        _0x328b24 = _0x13422f;
    } else if (_0x2d6b8c) {
        let _0x579946 = 0x0, _0x39535f = 0x0;
        if (_0x1c538f['INPUTS']['keys']['w'] || _0x1c538f['INPUTS']['keys']['arrowup'])
            _0x579946 += 0x1;
        if (_0x1c538f['INPUTS']['keys']['s'] || _0x1c538f['INPUTS']['keys']['arrowdown'])
            _0x579946 -= 0x1;
        if (_0x1c538f['INPUTS']['keys']['d'] || _0x1c538f['INPUTS']['keys']['arrowright'])
            _0x39535f += 0x1;
        if (_0x1c538f['INPUTS']['keys']['a'] || _0x1c538f['INPUTS']['keys']['arrowleft'])
            _0x39535f -= 0x1;
        if (_0x579946 !== 0x0 || _0x39535f !== 0x0) {
            const _0x5b7968 = _0x4b695b + Math['atan2'](_0x39535f, _0x579946);
            _0x766500 = Math['cos'](_0x5b7968);
            _0x328b24 = Math['sin'](_0x5b7968);
        }
    } else {
        if (_0x1c538f['INPUTS']['keys']['w'] || _0x1c538f['INPUTS']['keys']['arrowup'])
            _0x328b24 -= 0x1;
        if (_0x1c538f['INPUTS']['keys']['s'] || _0x1c538f['INPUTS']['keys']['arrowdown'])
            _0x328b24 += 0x1;
        if (_0x1c538f['INPUTS']['keys']['a'] || _0x1c538f['INPUTS']['keys']['arrowleft'])
            _0x766500 -= 0x1;
        if (_0x1c538f['INPUTS']['keys']['d'] || _0x1c538f['INPUTS']['keys']['arrowright'])
            _0x766500 += 0x1;
        const _0x96d338 = _0x766500 !== 0x0 || _0x328b24 !== 0x0;
        if (_0x96d338) {
            const _0x533b96 = Math['sqrt'](_0x766500 * _0x766500 + _0x328b24 * _0x328b24);
            _0x766500 /= _0x533b96;
            _0x328b24 /= _0x533b96;
        }
    }
    if (_0x1c538f['GAME_STATE'] === 'NIGHT' && (_0x200614 === 'Skinwalker' || _0x200614 === 'Blackmailer')) {
        if (_0x1c538f['NIGHT_ABILITY_OPEN'] || !_0x1c538f['CURRENT_TARGET']) {
            _0x766500 = 0x0;
            _0x328b24 = 0x0;
            _0x1ac1c2['vx'] = 0x0;
            _0x1ac1c2['vy'] = 0x0;
            _0x1ac1c2['x'] = _0x1c538f['MAP']['columns'] * _0x1c538f['MAP']['tileSize'] / 0x2 - _0x1ac1c2['width'] / 0x2;
            _0x1ac1c2['y'] = _0x1c538f['MAP']['rows'] * _0x1c538f['MAP']['tileSize'] / 0x2 - _0x1ac1c2['height'] / 0x2;
        }
    }
    const _0x44a55c = _0x766500 !== 0x0 || _0x328b24 !== 0x0;
    const _0xc16be2 = (_0x1c538f['INPUTS']['keys']['shift'] || _0x5693f2 || _0x4504d8) && _0x44a55c;
    _0x1ac1c2['bopTimer'] = _0xc16be2 ? _0x1ac1c2['bopTimer'] + _0x1c6006 : 0x0;
    _0x1ac1c2['scale'] = 0x1 + (_0x1ac1c2['bopTimer'] > 0x0 ? Math['sin'](_0x1ac1c2['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x5d522d = Math['pow'](0.001, _0x1c6006);
    const _0x3614d0 = _0xc16be2 ? 0x74a : 0x5d5;
    _0x1ac1c2['vx'] += _0x766500 * _0x3614d0 * _0x1c6006;
    _0x1ac1c2['vy'] += _0x328b24 * _0x3614d0 * _0x1c6006;
    _0x1ac1c2['vx'] *= _0x5d522d;
    _0x1ac1c2['vy'] *= _0x5d522d;
    _0x1ac1c2['x'] += _0x1ac1c2['vx'] * _0x1c6006;
    _0x1ac1c2['y'] += _0x1ac1c2['vy'] * _0x1c6006;
    for (let _0x24eed2 = 0x0; _0x24eed2 < 0x3; _0x24eed2++)
        _0x36d58d();
    for (let _0x332406 = 0x0; _0x332406 < 0x2; _0x332406++)
        _0x6e21c7();
    for (let _0x299b10 = 0x0; _0x299b10 < 0x2; _0x299b10++)
        _0x4ac7fd();
    if (_0x1ac1c2['x'] < 0x0)
        _0x1ac1c2['x'] = 0x0;
    if (_0x1ac1c2['y'] < 0x0)
        _0x1ac1c2['y'] = 0x0;
    if (_0x1ac1c2['x'] + _0x1ac1c2['width'] > _0x1c538f['MAP']['columns'] * _0x1c538f['MAP']['tileSize'])
        _0x1ac1c2['x'] = _0x1c538f['MAP']['columns'] * _0x1c538f['MAP']['tileSize'] - _0x1ac1c2['width'];
    if (_0x1ac1c2['y'] + _0x1ac1c2['height'] > _0x1c538f['MAP']['rows'] * _0x1c538f['MAP']['tileSize'])
        _0x1ac1c2['y'] = _0x1c538f['MAP']['rows'] * _0x1c538f['MAP']['tileSize'] - _0x1ac1c2['height'];
    if (_0x25f25a) {
        _0x1ac1c2['angle'] = _0x4d53b5 + Math['PI'] / 0x2;
    } else if (_0xf556f8 !== 0x0 || _0x13422f !== 0x0) {
        _0x1ac1c2['angle'] = Math['atan2'](_0x13422f, _0xf556f8) + Math['PI'] / 0x2;
    } else if (!_0x231526) {
        _0x1ac1c2['angle'] = _0x4b695b + Math['PI'] / 0x2;
    }
    const _0x1e1a50 = _0x1ac1c2['x'] + _0x1ac1c2['width'] / 0x2 - _0x1c538f['CAMERA']['width'] / 0x2;
    const _0x595999 = _0x1ac1c2['y'] + _0x1ac1c2['height'] / 0x2 - _0x1c538f['CAMERA']['height'] / 0x2;
    if (_0x1c538f['CAMERA']['x'] === null || isNaN(_0x1c538f['CAMERA']['x']) || !isFinite(_0x1c538f['CAMERA']['x'])) {
        _0x1c538f['CAMERA']['x'] = _0x1e1a50;
        _0x1c538f['CAMERA']['y'] = _0x595999;
    } else {
        const _0x32d3d5 = 0x1 - Math['exp'](-Math['max'](0x0, _0x1c6006) * 0x28);
        _0x1c538f['CAMERA']['x'] += (_0x1e1a50 - _0x1c538f['CAMERA']['x']) * _0x32d3d5;
        _0x1c538f['CAMERA']['y'] += (_0x595999 - _0x1c538f['CAMERA']['y']) * _0x32d3d5;
    }
    for (const _0x4787f7 in _0x141786) {
        const _0x12ad26 = _0x141786[_0x4787f7];
        if (_0x12ad26['renderX'] === undefined) {
            _0x12ad26['renderX'] = _0x12ad26['x'];
            _0x12ad26['renderY'] = _0x12ad26['y'];
            _0x12ad26['renderAngle'] = _0x12ad26['angle'] || 0x0;
        }
        const _0x88438 = _0x12ad26['x'] + (_0x12ad26['vx'] || 0x0) * _0x1c6006;
        const _0x3471dc = _0x12ad26['y'] + (_0x12ad26['vy'] || 0x0) * _0x1c6006;
        _0x12ad26['x'] = _0x88438;
        _0x12ad26['y'] = _0x3471dc;
        const _0x3fcb7b = 0x1 - Math['exp'](-_0x1c6006 * 0x12);
        const _0x46df40 = _0x12ad26['x'] - _0x12ad26['renderX'], _0x179122 = _0x12ad26['y'] - _0x12ad26['renderY'];
        const _0x2265a8 = Math['sqrt'](_0x46df40 * _0x46df40 + _0x179122 * _0x179122);
        const _0x5a7479 = 0xc8;
        if (_0x2265a8 > _0x5a7479) {
            _0x12ad26['renderX'] = _0x12ad26['x'] - _0x46df40 / _0x2265a8 * _0x5a7479;
            _0x12ad26['renderY'] = _0x12ad26['y'] - _0x179122 / _0x2265a8 * _0x5a7479;
        }
        _0x12ad26['renderX'] += (_0x12ad26['x'] - _0x12ad26['renderX']) * _0x3fcb7b;
        _0x12ad26['renderY'] += (_0x12ad26['y'] - _0x12ad26['renderY']) * _0x3fcb7b;
        let _0x18b44c = (_0x12ad26['angle'] || 0x0) - _0x12ad26['renderAngle'];
        while (_0x18b44c < -Math['PI'])
            _0x18b44c += Math['PI'] * 0x2;
        while (_0x18b44c > Math['PI'])
            _0x18b44c -= Math['PI'] * 0x2;
        _0x12ad26['renderAngle'] += _0x18b44c * (0x1 - Math['exp'](-_0x1c6006 * 0x14));
    }
    if (_0x1c538f['GAME_STATE'] === 'NIGHT') {
        _0x31e4ce = Math['min'](0.6, _0x31e4ce + _0x1c6006 * 0.5);
    } else {
        _0x31e4ce = Math['max'](0x0, _0x31e4ce - _0x1c6006 * 0.5);
    }
    if (_0x5888f0 > 0x0) {
        if (performance['now']() > _0x1a8fda) {
            _0x5888f0 = Math['max'](0x0, _0x5888f0 - _0x1c6006 * 0x2);
        }
    }
    _0xbfaa5();
    _0x1efd12();
}
function _0x4dc233(_0x445c25, _0x1439c7, _0x33ed9c, _0x348614, _0x5660b4 = !![]) {
    _0x445c25['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x1db110 = _0x445c25['measureText'](_0x1439c7)['width'];
    const _0x5f3122 = _0x1db110 + 0x18;
    const _0x5ce4a1 = 0x1c;
    _0x445c25['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x445c25['beginPath']();
    if (_0x445c25['roundRect']) {
        _0x445c25['roundRect'](_0x33ed9c - _0x5f3122 / 0x2, _0x348614 - _0x5ce4a1, _0x5f3122, _0x5ce4a1, 0x6);
    } else {
        _0x445c25['rect'](_0x33ed9c - _0x5f3122 / 0x2, _0x348614 - _0x5ce4a1, _0x5f3122, _0x5ce4a1);
    }
    _0x445c25['fill']();
    if (_0x5660b4) {
        _0x445c25['beginPath']();
        _0x445c25['moveTo'](_0x33ed9c - 0x6, _0x348614);
        _0x445c25['lineTo'](_0x33ed9c + 0x6, _0x348614);
        _0x445c25['lineTo'](_0x33ed9c, _0x348614 + 0x6);
        _0x445c25['fill']();
    }
    _0x445c25['fillStyle'] = '#ffffff';
    _0x445c25['textAlign'] = 'center';
    _0x445c25['textBaseline'] = 'middle';
    _0x445c25['fillText'](_0x1439c7, _0x33ed9c, _0x348614 - _0x5ce4a1 / 0x2 + 0x1);
}
function _0x5d30ae(_0x585dfc, _0x8c063a, _0x2c3712, _0x4ef23c) {
    if (!_0x8c063a || _0x8c063a['length'] === 0x0)
        return;
    let _0x53ef2c = _0x4ef23c;
    for (let _0x3bd7be = 0x0; _0x3bd7be < _0x8c063a['length']; _0x3bd7be++) {
        _0x4dc233(_0x585dfc, _0x8c063a[_0x3bd7be]['text'], _0x2c3712, _0x53ef2c, _0x3bd7be === 0x0);
        _0x53ef2c -= 0x24;
    }
}
function _0xd2f201() {
    if (!_0x1c538f['SYSTEM']['isReady'])
        return;
    if (_0x1c538f['MAP']['layers'] && _0x1c538f['MAP']['layers']['length'] > 0x0 && _0x181f8c['complete'] && _0x181f8c['naturalWidth'] > 0x0) {
        if (!_0x1c538f['MAP']['_prerenderedWithTileset'] || !_0x1c538f['MAP']['bgChunks'] || _0x1c538f['MAP']['bgChunks']['length'] === 0x0) {
            _0x573470();
        }
    }
    if (!_0x1c538f['MAP']['bgChunks'] || _0x1c538f['MAP']['bgChunks']['length'] === 0x0 || !_0x1c538f['MAP']['bgChunks'][0x0] || _0x1c538f['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x4363e3['fillStyle'] = '#000000';
    _0x4363e3['fillRect'](0x0, 0x0, _0x4f55b8['width'], _0x4f55b8['height']);
    _0x4363e3['save']();
    try {
        _0x4363e3['scale'](_0x1c538f['SYSTEM']['viewScale'], _0x1c538f['SYSTEM']['viewScale']);
        _0x4363e3['imageSmoothingEnabled'] = ![];
        const _0x1ea57f = Math['floor'](_0x1c538f['CAMERA']['x'] || 0x0);
        const _0x3c21a2 = Math['floor'](_0x1c538f['CAMERA']['y'] || 0x0);
        const _0x2b2bf0 = Math['max'](0x0, Math['floor'](_0x1ea57f / _0x1c538f['MAP']['chunkSize']));
        const _0x29e8e9 = Math['min'](_0x1c538f['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x1ea57f + _0x1c538f['CAMERA']['width']) / _0x1c538f['MAP']['chunkSize']));
        const _0x57eed3 = Math['max'](0x0, Math['floor'](_0x3c21a2 / _0x1c538f['MAP']['chunkSize']));
        const _0x18f620 = Math['min'](_0x1c538f['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x3c21a2 + _0x1c538f['CAMERA']['height']) / _0x1c538f['MAP']['chunkSize']));
        for (let _0x53e3c0 = _0x57eed3; _0x53e3c0 <= _0x18f620; _0x53e3c0++)
            for (let _0x27641e = _0x2b2bf0; _0x27641e <= _0x29e8e9; _0x27641e++) {
                const _0x29a9a8 = _0x27641e * _0x1c538f['MAP']['chunkSize'] - _0x1ea57f;
                const _0x4d01ca = _0x53e3c0 * _0x1c538f['MAP']['chunkSize'] - _0x3c21a2;
                _0x4363e3['drawImage'](_0x1c538f['MAP']['bgChunks'][_0x53e3c0][_0x27641e], _0x29a9a8, _0x4d01ca, _0x1c538f['MAP']['chunkSize'] + 0x1, _0x1c538f['MAP']['chunkSize'] + 0x1);
            }
        const _0x3d4c29 = _0x314e81('assets/blood\x20splatter.png');
        if (_0x5e844e && _0x5e844e['length'] > 0x0) {
            for (const _0xc6eb8b of _0x5e844e) {
                const _0x422e83 = _0xc6eb8b['x'] - _0x1ea57f;
                const _0x3eaf71 = _0xc6eb8b['y'] - _0x3c21a2;
                if (_0x3d4c29['complete'] && _0x3d4c29['naturalWidth'] > 0x0) {
                    _0x4363e3['drawImage'](_0x3d4c29, _0x422e83 - 0x20, _0x3eaf71 - 0x20, 0x40, 0x40);
                } else {
                    _0x4363e3['fillStyle'] = 'rgba(160,\x200,\x200,\x200.75)';
                    _0x4363e3['beginPath']();
                    _0x4363e3['arc'](_0x422e83, _0x3eaf71, 0x16, 0x0, Math['PI'] * 0x2);
                    _0x4363e3['fill']();
                }
            }
        }
        const _0x43fd09 = _0x314e81('assets/blood.png');
        if (_0x584fe3 && _0x584fe3['length'] > 0x0) {
            for (const _0x3ba3f0 of _0x584fe3) {
                const _0x1d9de6 = _0x3ba3f0['x'] - _0x1ea57f;
                const _0xd8754 = _0x3ba3f0['y'] - _0x3c21a2;
                if (_0x43fd09['complete'] && _0x43fd09['naturalWidth'] > 0x0) {
                    _0x4363e3['drawImage'](_0x43fd09, _0x1d9de6 - 0xc, _0xd8754 - 0xc, 0x18, 0x18);
                } else {
                    _0x4363e3['fillStyle'] = 'rgba(180,\x200,\x200,\x200.8)';
                    _0x4363e3['beginPath']();
                    _0x4363e3['arc'](_0x1d9de6, _0xd8754, 0x5, 0x0, Math['PI'] * 0x2);
                    _0x4363e3['fill']();
                }
            }
        }
        if (_0xdb809b['complete'] && _0xdb809b['naturalWidth'] > 0x0) {
            const _0x329260 = _0x1c538f['MAP']['tileSize'];
            const _0x4528eb = _0x329260 * 0xa;
            const _0x24b839 = _0x1c538f['MAP']['columns'] / 0x2 * _0x329260 - _0x4528eb / 0x2 - _0x1ea57f;
            const _0x3a8f00 = _0x1c538f['MAP']['rows'] / 0x2 * _0x329260 - _0x4528eb / 0x2 - _0x3c21a2;
            _0x4363e3['imageSmoothingEnabled'] = ![];
            _0x4363e3['drawImage'](_0xdb809b, _0x24b839, _0x3a8f00, _0x4528eb, _0x4528eb);
        }
        if (_0x2cf51c['complete'] && _0x2cf51c['naturalWidth'] > 0x0) {
            _0x1c538f['ENTITIES']['forEach'](_0x40baea => {
                if (_0x40baea['type'] !== 'table')
                    return;
                _0x4363e3['save']();
                _0x4363e3['imageSmoothingEnabled'] = ![];
                const _0x16ccc7 = _0x2cf51c['naturalWidth'] >= _0x2cf51c['naturalHeight'];
                const _0x2a1f22 = _0x40baea['w'] >= _0x40baea['h'];
                if (_0x16ccc7 === _0x2a1f22) {
                    _0x4363e3['drawImage'](_0x2cf51c, _0x40baea['x'] - _0x1ea57f, _0x40baea['y'] - _0x3c21a2, _0x40baea['w'], _0x40baea['h']);
                } else {
                    _0x4363e3['translate'](_0x40baea['x'] - _0x1ea57f + _0x40baea['w'] / 0x2, _0x40baea['y'] - _0x3c21a2 + _0x40baea['h'] / 0x2);
                    _0x4363e3['rotate'](Math['PI'] / 0x2);
                    _0x4363e3['drawImage'](_0x2cf51c, -_0x40baea['h'] / 0x2, -_0x40baea['w'] / 0x2, _0x40baea['h'], _0x40baea['w']);
                }
                _0x4363e3['restore']();
            });
        } else {
            _0x1c538f['ENTITIES']['forEach'](_0x5d0653 => {
                if (_0x5d0653['type'] !== 'table')
                    return;
                _0x4363e3['save']();
                _0x4363e3['fillStyle'] = '#6b4423';
                _0x4363e3['fillRect'](_0x5d0653['x'] - _0x1ea57f, _0x5d0653['y'] - _0x3c21a2, _0x5d0653['w'], _0x5d0653['h']);
                _0x4363e3['strokeStyle'] = '#422810';
                _0x4363e3['lineWidth'] = 0x3;
                _0x4363e3['strokeRect'](_0x5d0653['x'] - _0x1ea57f + 0x1, _0x5d0653['y'] - _0x3c21a2 + 0x1, _0x5d0653['w'] - 0x2, _0x5d0653['h'] - 0x2);
                _0x4363e3['fillStyle'] = '#82532a';
                _0x4363e3['fillRect'](_0x5d0653['x'] - _0x1ea57f + 0x4, _0x5d0653['y'] - _0x3c21a2 + 0x4, _0x5d0653['w'] - 0x8, _0x5d0653['h'] - 0x8);
                _0x4363e3['restore']();
            });
        }
        if (_0x534ea6) {
            if (_0x1c538f['MAP']['wallChunks'] && _0x1c538f['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x2d8d27 = _0x57eed3; _0x2d8d27 <= _0x18f620; _0x2d8d27++) {
                    for (let _0x6916b0 = _0x2b2bf0; _0x6916b0 <= _0x29e8e9; _0x6916b0++) {
                        if (!_0x1c538f['MAP']['wallChunks'][_0x2d8d27] || !_0x1c538f['MAP']['wallChunks'][_0x2d8d27][_0x6916b0])
                            continue;
                        const _0x34d2f0 = _0x6916b0 * _0x1c538f['MAP']['chunkSize'] - _0x1ea57f;
                        const _0x17b837 = _0x2d8d27 * _0x1c538f['MAP']['chunkSize'] - _0x3c21a2;
                        _0x4363e3['drawImage'](_0x1c538f['MAP']['wallChunks'][_0x2d8d27][_0x6916b0], _0x34d2f0, _0x17b837, _0x1c538f['MAP']['chunkSize'] + 0x1, _0x1c538f['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x45a927 = _0x57eed3; _0x45a927 <= _0x18f620; _0x45a927++) {
                for (let _0x5e573d = _0x2b2bf0; _0x5e573d <= _0x29e8e9; _0x5e573d++) {
                    const _0x28b356 = _0x5e573d * _0x1c538f['MAP']['chunkSize'] - _0x1ea57f;
                    const _0x27a541 = _0x45a927 * _0x1c538f['MAP']['chunkSize'] - _0x3c21a2;
                    _0x4363e3['drawImage'](_0x1c538f['MAP']['fgChunks'][_0x45a927][_0x5e573d], _0x28b356, _0x27a541, _0x1c538f['MAP']['chunkSize'] + 0x1, _0x1c538f['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x5c078b = _0x1c538f['GAME_STATE'] === 'NIGHT' && (_0x200614 === 'Skinwalker' || _0x200614 === 'Blackmailer') && !_0x1ac1c2['isDead'];
        const _0x2974a8 = _0x1ac1c2['x'] - _0x1ea57f + _0x1ac1c2['width'] / 0x2;
        const _0x51cc81 = _0x1ac1c2['y'] - _0x3c21a2 + _0x1ac1c2['height'] / 0x2;
        const _0x571b2b = _0x1ac1c2['width'] * _0x1ac1c2['scale'] * 1.3;
        const _0x209a43 = _0x1ac1c2['height'] * _0x1ac1c2['scale'] * 1.3;
        const _0x8d51a5 = _0x314e81('assets/arrow.png');
        const _0x4b2b8d = _0x314e81('assets/tape.png');
        for (const _0x1fc43f in _0x141786) {
            const _0x4c7958 = _0x141786[_0x1fc43f];
            if (_0x4c7958['isDead'])
                continue;
            const _0x46f8b2 = parseInt(_0x1fc43f);
            const _0x30d533 = (_0x4c7958['renderX'] ?? _0x4c7958['x']) - _0x1ea57f + _0x4c7958['width'] / 0x2;
            const _0x3c3b43 = (_0x4c7958['renderY'] ?? _0x4c7958['y']) - _0x3c21a2 + _0x4c7958['height'] / 0x2;
            const _0x4dcdcf = Math['min'](0x2, Math['max'](0.3, _0x4c7958['scale'] || 0x1));
            const _0xa1e3bd = _0x4c7958['width'] * _0x4dcdcf * 1.3;
            const _0x1c2b20 = _0x4c7958['height'] * _0x4dcdcf * 1.3;
            _0x4363e3['save']();
            try {
                _0x4363e3['translate'](_0x30d533, _0x3c3b43);
                _0x4363e3['rotate'](_0x4c7958['renderAngle'] ?? 0x0);
                if (_0x4c7958['isDark'])
                    _0x4363e3['filter'] = 'brightness(0)';
                _0x564f96(_0x4363e3, _0x4c7958['body'], _0x4c7958['eyes'], _0xa1e3bd, _0x1c2b20);
                if (_0x13d97d['has'](_0x46f8b2) && _0x32de9a['complete'] && _0x32de9a['naturalWidth'] > 0x0) {
                    _0x4363e3['drawImage'](_0x32de9a, -_0xa1e3bd / 0x2, -_0x1c2b20 / 0x2, _0xa1e3bd, _0x1c2b20);
                }
                if (_0x4c7958['hasArrow'] && _0x1c538f['GAME_STATE'] === 'NIGHT' && _0x8d51a5['complete'] && _0x8d51a5['naturalWidth'] > 0x0) {
                    _0x4363e3['drawImage'](_0x8d51a5, -_0xa1e3bd / 0x2, -_0x1c2b20 / 0x2, _0xa1e3bd, _0x1c2b20);
                }
                if ((_0x4c7958['isBlackmailed'] || _0x2e3e7d['has'](_0x46f8b2)) && _0x4b2b8d['complete'] && _0x4b2b8d['naturalWidth'] > 0x0) {
                    _0x4363e3['drawImage'](_0x4b2b8d, -_0xa1e3bd / 0x2, -_0x1c2b20 / 0x2, _0xa1e3bd, _0x1c2b20);
                }
                if (_0x4c7958['isDark'])
                    _0x4363e3['filter'] = 'none';
            } finally {
                _0x4363e3['restore']();
            }
            if (!_0x4d27f5((_0x4c7958['renderX'] ?? _0x4c7958['x']) + _0x4c7958['width'] / 0x2, (_0x4c7958['renderY'] ?? _0x4c7958['y']) + _0x4c7958['height'] / 0x2)) {
                _0x4363e3['textAlign'] = 'center';
                _0x4363e3['lineJoin'] = 'round';
                _0x4363e3['lineWidth'] = 0x3;
                _0x4363e3['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x4363e3['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x369320 = '#ffffff';
                if (_0x4c7958['isBlackmailed'] || _0x2e3e7d['has'](_0x46f8b2)) {
                    _0x369320 = '#ff4444';
                } else if (_0x13d97d['has'](_0x46f8b2)) {
                    _0x369320 = '#cc88ff';
                }
                _0x4363e3['fillStyle'] = _0x369320;
                const _0x1d4638 = _0x4c7958['isDark'] ? '???' : _0x4c7958['name'] + (_0x4c7958['isOwner'] ? '\x20[🗝️]' : '');
                _0x4363e3['strokeText'](_0x1d4638, _0x30d533, _0x3c3b43 - _0x1c2b20 / 0x2 - 0x10);
                _0x4363e3['fillText'](_0x1d4638, _0x30d533, _0x3c3b43 - _0x1c2b20 / 0x2 - 0x10);
            }
        }
        if (!_0x1ac1c2['isDead']) {
            _0x4363e3['save']();
            try {
                _0x4363e3['translate'](_0x2974a8, _0x51cc81);
                _0x4363e3['rotate'](_0x1ac1c2['angle']);
                if (_0x5c078b)
                    _0x4363e3['filter'] = 'brightness(0)';
                _0x564f96(_0x4363e3, _0x2bfb82, _0x122e55, _0x571b2b, _0x209a43);
                if (_0x13d97d['has'](_0x180928) && _0x32de9a['complete'] && _0x32de9a['naturalWidth'] > 0x0) {
                    _0x4363e3['drawImage'](_0x32de9a, -_0x571b2b / 0x2, -_0x209a43 / 0x2, _0x571b2b, _0x209a43);
                }
                if (_0x1ac1c2['hasArrow'] && _0x1c538f['GAME_STATE'] === 'NIGHT' && _0x8d51a5['complete'] && _0x8d51a5['naturalWidth'] > 0x0) {
                    _0x4363e3['drawImage'](_0x8d51a5, -_0x571b2b / 0x2, -_0x209a43 / 0x2, _0x571b2b, _0x209a43);
                }
                if (_0x2e3e7d['has'](_0x180928) && _0x4b2b8d['complete'] && _0x4b2b8d['naturalWidth'] > 0x0) {
                    _0x4363e3['drawImage'](_0x4b2b8d, -_0x571b2b / 0x2, -_0x209a43 / 0x2, _0x571b2b, _0x209a43);
                }
                if (_0x5c078b)
                    _0x4363e3['filter'] = 'none';
            } finally {
                _0x4363e3['restore']();
            }
            if (!_0x4d27f5(_0x1ac1c2['x'] + _0x1ac1c2['width'] / 0x2, _0x1ac1c2['y'] + _0x1ac1c2['height'] / 0x2)) {
                _0x4363e3['textAlign'] = 'center';
                _0x4363e3['lineJoin'] = 'round';
                _0x4363e3['lineWidth'] = 0x3;
                _0x4363e3['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x4363e3['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x5ad2d3 = '#ffffff';
                if (_0x2e3e7d['has'](_0x180928)) {
                    _0x5ad2d3 = '#ff4444';
                } else if (_0x13d97d['has'](_0x180928)) {
                    _0x5ad2d3 = '#cc88ff';
                }
                _0x4363e3['fillStyle'] = _0x5ad2d3;
                const _0x4dbb34 = _0x5c078b ? '???' : _0x8b0c49 + (_0x14f3a6 ? '\x20[🗝️]' : '');
                _0x4363e3['strokeText'](_0x4dbb34, _0x2974a8, _0x51cc81 - _0x209a43 / 0x2 - 0x10);
                _0x4363e3['fillText'](_0x4dbb34, _0x2974a8, _0x51cc81 - _0x209a43 / 0x2 - 0x10);
            }
        }
        if (_0x1c538f['MAP']['wallChunks'] && _0x1c538f['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x376ed3 = _0x57eed3; _0x376ed3 <= _0x18f620; _0x376ed3++)
                for (let _0x4c6a7f = _0x2b2bf0; _0x4c6a7f <= _0x29e8e9; _0x4c6a7f++) {
                    if (!_0x1c538f['MAP']['wallChunks'][_0x376ed3] || !_0x1c538f['MAP']['wallChunks'][_0x376ed3][_0x4c6a7f])
                        continue;
                    const _0x563e0e = _0x4c6a7f * _0x1c538f['MAP']['chunkSize'] - _0x1ea57f;
                    const _0x2beede = _0x376ed3 * _0x1c538f['MAP']['chunkSize'] - _0x3c21a2;
                    _0x4363e3['drawImage'](_0x1c538f['MAP']['wallChunks'][_0x376ed3][_0x4c6a7f], _0x563e0e, _0x2beede, _0x1c538f['MAP']['chunkSize'] + 0x1, _0x1c538f['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x4ea653 of _0x1c538f['ENTITIES']) {
            if (_0x4ea653['type'] !== 'npc')
                continue;
            const _0x127dab = _0x4ea653['x'] - _0x1ea57f + _0x4ea653['w'] / 0x2;
            const _0x984dd0 = _0x4ea653['y'] - _0x3c21a2 + _0x4ea653['h'] / 0x2;
            const _0x560dc6 = _0x4ea653['w'];
            const _0x3cf0e6 = _0x4ea653['h'];
            _0x4363e3['save']();
            _0x4363e3['translate'](_0x127dab, _0x984dd0);
            _0x4363e3['rotate'](_0x4ea653['angle'] !== undefined ? _0x4ea653['angle'] : 0x0);
            _0x564f96(_0x4363e3, _0x4ea653['body'] || 'yanito932.png', _0x4ea653['eyes'], _0x560dc6, _0x3cf0e6);
            _0x4363e3['restore']();
            _0x4363e3['textAlign'] = 'center';
            _0x4363e3['lineJoin'] = 'round';
            _0x4363e3['lineWidth'] = 0x3;
            _0x4363e3['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x4363e3['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
            _0x4363e3['fillStyle'] = '#aaaaaa';
            _0x4363e3['strokeText'](_0x4ea653['name'] || 'NPC', _0x127dab, _0x984dd0 - _0x3cf0e6 / 0x2 - 0x10);
            _0x4363e3['fillText'](_0x4ea653['name'] || 'NPC', _0x127dab, _0x984dd0 - _0x3cf0e6 / 0x2 - 0x10);
        }
        if (_0x1ac1c2['isDead']) {
            for (const _0x40ffd0 in _0x141786) {
                const _0x5bf50a = _0x141786[_0x40ffd0];
                if (!_0x5bf50a['isDead'])
                    continue;
                const _0x2120ea = (_0x5bf50a['renderX'] ?? _0x5bf50a['x']) - _0x1ea57f + _0x5bf50a['width'] / 0x2;
                const _0x1fbfe6 = (_0x5bf50a['renderY'] ?? _0x5bf50a['y']) - _0x3c21a2 + _0x5bf50a['height'] / 0x2;
                const _0x2399c6 = _0x5bf50a['width'] * (_0x5bf50a['scale'] || 0x1) * 1.3;
                const _0x43c468 = _0x5bf50a['height'] * (_0x5bf50a['scale'] || 0x1) * 1.3;
                _0x4363e3['save']();
                try {
                    _0x4363e3['translate'](_0x2120ea, _0x1fbfe6);
                    _0x4363e3['rotate'](_0x5bf50a['renderAngle'] ?? 0x0);
                    _0x4363e3['globalAlpha'] = 0.3;
                    _0x564f96(_0x4363e3, _0x5bf50a['body'], _0x5bf50a['eyes'], _0x2399c6, _0x43c468);
                } finally {
                    _0x4363e3['restore']();
                }
                if (!_0x4d27f5((_0x5bf50a['renderX'] ?? _0x5bf50a['x']) + _0x5bf50a['width'] / 0x2, (_0x5bf50a['renderY'] ?? _0x5bf50a['y']) + _0x5bf50a['height'] / 0x2)) {
                    _0x4363e3['save']();
                    _0x4363e3['globalAlpha'] = 0.3;
                    _0x4363e3['textAlign'] = 'center';
                    _0x4363e3['lineJoin'] = 'round';
                    _0x4363e3['lineWidth'] = 0x3;
                    _0x4363e3['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x4363e3['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                    _0x4363e3['fillStyle'] = '#ffffff';
                    const _0xbb304a = _0x5bf50a['name'] + (_0x5bf50a['isOwner'] ? '\x20[🗝️]' : '');
                    _0x4363e3['strokeText'](_0xbb304a, _0x2120ea, _0x1fbfe6 - _0x43c468 / 0x2 - 0x10);
                    _0x4363e3['fillText'](_0xbb304a, _0x2120ea, _0x1fbfe6 - _0x43c468 / 0x2 - 0x10);
                    _0x4363e3['restore']();
                }
            }
            _0x4363e3['save']();
            try {
                _0x4363e3['translate'](_0x2974a8, _0x51cc81);
                _0x4363e3['rotate'](_0x1ac1c2['angle']);
                _0x4363e3['globalAlpha'] = 0.3;
                _0x564f96(_0x4363e3, _0x2bfb82, _0x122e55, _0x571b2b, _0x209a43);
            } finally {
                _0x4363e3['restore']();
            }
            if (!_0x4d27f5(_0x1ac1c2['x'] + _0x1ac1c2['width'] / 0x2, _0x1ac1c2['y'] + _0x1ac1c2['height'] / 0x2)) {
                _0x4363e3['save']();
                _0x4363e3['globalAlpha'] = 0.3;
                _0x4363e3['textAlign'] = 'center';
                _0x4363e3['lineJoin'] = 'round';
                _0x4363e3['lineWidth'] = 0x3;
                _0x4363e3['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x4363e3['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                _0x4363e3['fillStyle'] = '#ffffff';
                const _0x3ae01c = _0x8b0c49 + (_0x14f3a6 ? '\x20[🗝️]' : '');
                _0x4363e3['strokeText'](_0x3ae01c, _0x2974a8, _0x51cc81 - _0x209a43 / 0x2 - 0x10);
                _0x4363e3['fillText'](_0x3ae01c, _0x2974a8, _0x51cc81 - _0x209a43 / 0x2 - 0x10);
                _0x4363e3['restore']();
            }
        }
        for (let _0x5ce4a9 = _0x57eed3; _0x5ce4a9 <= _0x18f620; _0x5ce4a9++)
            for (let _0x3bb81e = _0x2b2bf0; _0x3bb81e <= _0x29e8e9; _0x3bb81e++) {
                const _0x494109 = _0x3bb81e * _0x1c538f['MAP']['chunkSize'] - _0x1ea57f;
                const _0x59e8b2 = _0x5ce4a9 * _0x1c538f['MAP']['chunkSize'] - _0x3c21a2;
                _0x4363e3['drawImage'](_0x1c538f['MAP']['fgChunks'][_0x5ce4a9][_0x3bb81e], _0x494109, _0x59e8b2, _0x1c538f['MAP']['chunkSize'] + 0x1, _0x1c538f['MAP']['chunkSize'] + 0x1);
            }
        if (_0x1c538f['EDITOR']['enabled'] && _0x1c538f['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x5c5efa = _0x1c538f['INPUTS']['mouseX'] / _0x1c538f['SYSTEM']['viewScale'] + _0x1c538f['CAMERA']['x'];
            const _0x595e55 = _0x1c538f['INPUTS']['mouseY'] / _0x1c538f['SYSTEM']['viewScale'] + _0x1c538f['CAMERA']['y'];
            const _0x105aab = Math['floor'](_0x5c5efa / _0x1c538f['MAP']['tileSize']);
            const _0x73a242 = Math['floor'](_0x595e55 / _0x1c538f['MAP']['tileSize']);
            if (_0x105aab >= 0x0 && _0x105aab < _0x1c538f['MAP']['columns'] && _0x73a242 >= 0x0 && _0x73a242 < _0x1c538f['MAP']['rows']) {
                const _0x3f841c = _0x105aab * _0x1c538f['MAP']['tileSize'] - _0x1ea57f;
                const _0x44388c = _0x73a242 * _0x1c538f['MAP']['tileSize'] - _0x3c21a2;
                _0x4363e3['save']();
                _0x4363e3['globalAlpha'] = 0.5;
                if (_0x1c538f['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x4b1158 = _0x1c538f['EDITOR']['selectedTileGid'] - 0x1;
                    _0x4363e3['drawImage'](_0x181f8c, _0x4b1158 % _0x1c538f['MAP']['tilesetCols'] * _0x1c538f['MAP']['tileSize'], Math['floor'](_0x4b1158 / _0x1c538f['MAP']['tilesetCols']) * _0x1c538f['MAP']['tileSize'], _0x1c538f['MAP']['tileSize'], _0x1c538f['MAP']['tileSize'], _0x3f841c, _0x44388c, _0x1c538f['MAP']['tileSize'], _0x1c538f['MAP']['tileSize']);
                } else {
                    _0x4363e3['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x4363e3['fillRect'](_0x3f841c, _0x44388c, _0x1c538f['MAP']['tileSize'], _0x1c538f['MAP']['tileSize']);
                }
                _0x4363e3['restore']();
            }
        }
        _0x427a51(_0x4363e3, _0x1ea57f, _0x3c21a2);
        if (_0x31e4ce > 0x0) {
            _0x4363e3['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x31e4ce + ')';
            _0x4363e3['fillRect'](0x0, 0x0, _0x1c538f['CAMERA']['width'], _0x1c538f['CAMERA']['height']);
        }
        for (const _0x23c2af in _0x141786) {
            const _0x24f006 = _0x141786[_0x23c2af];
            if (_0x24f006['isDead'] && !_0x1ac1c2['isDead'])
                continue;
            const _0x36dfff = (_0x24f006['renderX'] ?? _0x24f006['x']) - _0x1ea57f + _0x24f006['width'] / 0x2;
            const _0x5ea2eb = (_0x24f006['renderY'] ?? _0x24f006['y']) - _0x3c21a2 + _0x24f006['height'] / 0x2;
            _0x5d30ae(_0x4363e3, _0x24f006['chats'], _0x36dfff, _0x5ea2eb - _0x24f006['height'] / 0x2 - 0x20);
        }
        _0x5d30ae(_0x4363e3, _0x1ac1c2['chats'], _0x2974a8, _0x51cc81 - _0x1ac1c2['height'] / 0x2 - 0x20);
        if (_0x5888f0 > 0x0) {
            _0x4363e3['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x5888f0 + ')';
            _0x4363e3['fillRect'](0x0, 0x0, _0x1c538f['CAMERA']['width'], _0x1c538f['CAMERA']['height']);
        }
    } finally {
        _0x4363e3['restore']();
    }
}
function _0x85dae5(_0x266b4c) {
    if (!_0x1c538f['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x85dae5);
    let _0xb1c10d = (_0x266b4c - _0x1c538f['SYSTEM']['lastTime']) / 0x3e8;
    _0x1c538f['SYSTEM']['lastTime'] = _0x266b4c;
    if (_0xb1c10d > 0.1)
        _0xb1c10d = 0.1;
    if (_0xb1c10d < 0x0 || isNaN(_0xb1c10d))
        _0xb1c10d = 0.016;
    if (_0x534ea6) {
        _0x16af8d(_0xb1c10d);
        _0xd2f201();
        return;
    }
    if (!_0x180928)
        return;
    _0x16c529(_0xb1c10d);
    _0x58c556['tick'](_0x266b4c);
    _0xd2f201();
}
function _0x573470() {
    if (_0x181f8c['complete'] && _0x181f8c['naturalWidth'] > 0x0) {
        _0x1c538f['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x5949b6 = Math['ceil'](_0x1c538f['MAP']['columns'] * _0x1c538f['MAP']['tileSize'] / _0x1c538f['MAP']['chunkSize']);
    const _0x167010 = Math['ceil'](_0x1c538f['MAP']['rows'] * _0x1c538f['MAP']['tileSize'] / _0x1c538f['MAP']['chunkSize']);
    _0x1c538f['MAP']['bgChunks'] = [];
    _0x1c538f['MAP']['fgChunks'] = [];
    _0x1c538f['MAP']['wallChunks'] = [];
    for (let _0xaf26db = 0x0; _0xaf26db < _0x167010; _0xaf26db++) {
        _0x1c538f['MAP']['bgChunks'][_0xaf26db] = [];
        _0x1c538f['MAP']['fgChunks'][_0xaf26db] = [];
        _0x1c538f['MAP']['wallChunks'][_0xaf26db] = [];
        for (let _0xa6b0d8 = 0x0; _0xa6b0d8 < _0x5949b6; _0xa6b0d8++) {
            const _0x196ba8 = document['createElement']('canvas');
            _0x196ba8['width'] = _0x196ba8['height'] = _0x1c538f['MAP']['chunkSize'];
            const _0x1a86a2 = document['createElement']('canvas');
            _0x1a86a2['width'] = _0x1a86a2['height'] = _0x1c538f['MAP']['chunkSize'];
            const _0x1c6e0b = document['createElement']('canvas');
            _0x1c6e0b['width'] = _0x1c6e0b['height'] = _0x1c538f['MAP']['chunkSize'];
            _0x1c538f['MAP']['bgChunks'][_0xaf26db][_0xa6b0d8] = _0x196ba8;
            _0x1c538f['MAP']['fgChunks'][_0xaf26db][_0xa6b0d8] = _0x1a86a2;
            _0x1c538f['MAP']['wallChunks'][_0xaf26db][_0xa6b0d8] = _0x1c6e0b;
            _0x5a5056(_0xa6b0d8, _0xaf26db);
        }
    }
}
function _0x5a5056(_0x25ea88, _0x5bc9b5) {
    const _0x8191c6 = _0x1c538f['MAP']['bgChunks'][_0x5bc9b5][_0x25ea88]['getContext']('2d', { 'alpha': !![] });
    const _0x207b4b = _0x1c538f['MAP']['fgChunks'][_0x5bc9b5][_0x25ea88]['getContext']('2d', { 'alpha': !![] });
    const _0x2bacea = _0x1c538f['MAP']['wallChunks'][_0x5bc9b5] && _0x1c538f['MAP']['wallChunks'][_0x5bc9b5][_0x25ea88] ? _0x1c538f['MAP']['wallChunks'][_0x5bc9b5][_0x25ea88]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x8191c6['imageSmoothingEnabled'] = _0x207b4b['imageSmoothingEnabled'] = ![];
    if (_0x2bacea)
        _0x2bacea['imageSmoothingEnabled'] = ![];
    _0x8191c6['clearRect'](0x0, 0x0, _0x1c538f['MAP']['chunkSize'], _0x1c538f['MAP']['chunkSize']);
    _0x207b4b['clearRect'](0x0, 0x0, _0x1c538f['MAP']['chunkSize'], _0x1c538f['MAP']['chunkSize']);
    if (_0x2bacea)
        _0x2bacea['clearRect'](0x0, 0x0, _0x1c538f['MAP']['chunkSize'], _0x1c538f['MAP']['chunkSize']);
    const _0x56993a = Math['floor'](_0x25ea88 * _0x1c538f['MAP']['chunkSize'] / _0x1c538f['MAP']['tileSize']);
    const _0x3d294b = Math['ceil']((_0x25ea88 + 0x1) * _0x1c538f['MAP']['chunkSize'] / _0x1c538f['MAP']['tileSize']);
    const _0x588c35 = Math['floor'](_0x5bc9b5 * _0x1c538f['MAP']['chunkSize'] / _0x1c538f['MAP']['tileSize']);
    const _0x15405d = Math['ceil']((_0x5bc9b5 + 0x1) * _0x1c538f['MAP']['chunkSize'] / _0x1c538f['MAP']['tileSize']);
    const _0x26118a = 0.5;
    const _0x4e5321 = _0x1c538f['MAP']['tileSize'] - _0x26118a * 0x2;
    _0x1c538f['MAP']['layers']['forEach'](_0x187109 => {
        const _0x5772d6 = _0x187109['name'] === 'walls';
        const _0x5246d3 = _0x187109['name'] === 'trees' ? _0x207b4b : _0x5772d6 ? _0x2bacea || _0x8191c6 : _0x8191c6;
        for (let _0x769b40 = Math['max'](0x0, _0x588c35); _0x769b40 < Math['min'](_0x1c538f['MAP']['rows'], _0x15405d); _0x769b40++) {
            for (let _0x5ade42 = Math['max'](0x0, _0x56993a); _0x5ade42 < Math['min'](_0x1c538f['MAP']['columns'], _0x3d294b); _0x5ade42++) {
                let _0x2be43f = _0x187109['data'][_0x769b40 * _0x1c538f['MAP']['columns'] + _0x5ade42];
                if (_0x187109['name'] === 'floor2' && _0x1c538f['MAP']['doors'] && _0x1c538f['MAP']['doors'][_0x769b40 * _0x1c538f['MAP']['columns'] + _0x5ade42]) {
                    _0x2be43f = 0x2;
                }
                if (_0x2be43f > 0x0) {
                    const _0x359de8 = _0x2be43f - 0x1;
                    const _0x190580 = _0x359de8 % _0x1c538f['MAP']['tilesetCols'] * _0x1c538f['MAP']['tileSize'] + _0x26118a;
                    const _0x4ec85f = Math['floor'](_0x359de8 / _0x1c538f['MAP']['tilesetCols']) * _0x1c538f['MAP']['tileSize'] + _0x26118a;
                    const _0x162514 = _0x5ade42 * _0x1c538f['MAP']['tileSize'] - _0x25ea88 * _0x1c538f['MAP']['chunkSize'];
                    const _0x23fef4 = _0x769b40 * _0x1c538f['MAP']['tileSize'] - _0x5bc9b5 * _0x1c538f['MAP']['chunkSize'];
                    if (_0x2be43f === 0x4) {
                        const _0x5b4338 = 0x1;
                        const _0xfea342 = _0x5b4338 % _0x1c538f['MAP']['tilesetCols'] * _0x1c538f['MAP']['tileSize'] + _0x26118a;
                        const _0x15e26b = Math['floor'](_0x5b4338 / _0x1c538f['MAP']['tilesetCols']) * _0x1c538f['MAP']['tileSize'] + _0x26118a;
                        _0x8191c6['drawImage'](_0x181f8c, _0xfea342, _0x15e26b, _0x4e5321, _0x4e5321, _0x162514, _0x23fef4, _0x1c538f['MAP']['tileSize'], _0x1c538f['MAP']['tileSize']);
                        let _0x97bdb0 = _0x1c538f['MAP']['doors'] ? _0x1c538f['MAP']['doors'][_0x769b40 * _0x1c538f['MAP']['columns'] + _0x5ade42] : null;
                        if (!_0x97bdb0) {
                            const _0x1b0c36 = _0x1c538f['MAP']['layers']['find'](_0x52dd7a => _0x52dd7a['name'] === 'walls');
                            const _0x107b5e = _0x769b40 > 0x0 && _0x1b0c36 && _0x1b0c36['data'][(_0x769b40 - 0x1) * _0x1c538f['MAP']['columns'] + _0x5ade42] > 0x0;
                            const _0xf96dfe = _0x769b40 < _0x1c538f['MAP']['rows'] - 0x1 && _0x1b0c36 && _0x1b0c36['data'][(_0x769b40 + 0x1) * _0x1c538f['MAP']['columns'] + _0x5ade42] > 0x0;
                            const _0xfdb0a7 = _0x5ade42 > 0x0 && _0x1b0c36 && _0x1b0c36['data'][_0x769b40 * _0x1c538f['MAP']['columns'] + _0x5ade42 - 0x1] > 0x0;
                            const _0x37f94f = _0x5ade42 < _0x1c538f['MAP']['columns'] - 0x1 && _0x1b0c36 && _0x1b0c36['data'][_0x769b40 * _0x1c538f['MAP']['columns'] + _0x5ade42 + 0x1] > 0x0;
                            if (_0xfdb0a7 && _0x37f94f)
                                _0x97bdb0 = _0x769b40 < _0x1c538f['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x107b5e && _0xf96dfe)
                                _0x97bdb0 = _0x5ade42 < _0x1c538f['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x34e958 = 0x0;
                        if (_0x97bdb0 === 'bottom')
                            _0x34e958 = Math['PI'] / 0x2;
                        else if (_0x97bdb0 === 'left')
                            _0x34e958 = Math['PI'];
                        else if (_0x97bdb0 === 'top')
                            _0x34e958 = -Math['PI'] / 0x2;
                        else if (_0x97bdb0 === 'right')
                            _0x34e958 = 0x0;
                        if (_0x34e958 !== 0x0) {
                            _0x5246d3['save']();
                            _0x5246d3['translate'](_0x162514 + _0x1c538f['MAP']['tileSize'] / 0x2, _0x23fef4 + _0x1c538f['MAP']['tileSize'] / 0x2);
                            _0x5246d3['rotate'](_0x34e958);
                            _0x5246d3['drawImage'](_0x181f8c, _0x190580, _0x4ec85f, _0x4e5321, _0x4e5321, -_0x1c538f['MAP']['tileSize'] / 0x2, -_0x1c538f['MAP']['tileSize'] / 0x2, _0x1c538f['MAP']['tileSize'], _0x1c538f['MAP']['tileSize']);
                            _0x5246d3['restore']();
                        } else {
                            _0x5246d3['drawImage'](_0x181f8c, _0x190580, _0x4ec85f, _0x4e5321, _0x4e5321, _0x162514, _0x23fef4, _0x1c538f['MAP']['tileSize'], _0x1c538f['MAP']['tileSize']);
                        }
                    } else {
                        _0x5246d3['drawImage'](_0x181f8c, _0x190580, _0x4ec85f, _0x4e5321, _0x4e5321, _0x162514, _0x23fef4, _0x1c538f['MAP']['tileSize'], _0x1c538f['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0xc2cf8d() {
    _0x181f8c['crossOrigin'] = 'Anonymous';
    _0x181f8c['onload'] = () => {
        _0x1c538f['MAP']['tilesetCols'] = 0x3;
        if (_0x1c538f['MAP']['columns'] > 0x0 && _0x1c538f['MAP']['layers'] && _0x1c538f['MAP']['layers']['length'] > 0x0) {
            _0x573470();
        }
        _0x28ad8f();
    };
    _0x181f8c['onerror'] = () => {
        _0x1c538f['MAP']['tilesetCols'] = 0x1;
        _0x28ad8f();
    };
    _0x181f8c['src'] = 'assets/tilesheet.png';
    _0xdb809b['crossOrigin'] = 'Anonymous';
    _0xdb809b['onload'] = _0x28ad8f;
    _0xdb809b['onerror'] = () => {
        _0x28ad8f();
    };
    _0xdb809b['src'] = 'assets/center.png';
    _0x2cf51c['crossOrigin'] = 'Anonymous';
    _0x2cf51c['onload'] = _0x28ad8f;
    _0x2cf51c['onerror'] = () => {
        _0x28ad8f();
    };
    _0x2cf51c['src'] = 'assets/table.png';
}
function _0x28ad8f() {
    _0x1c538f['SYSTEM']['assetsLoaded']++;
    if (_0x1c538f['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x1c538f['MAP']['columns'] > 0x0 && _0x1c538f['MAP']['layers'] && _0x1c538f['MAP']['layers']['length'] > 0x0) {
            _0x573470();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x44622f();
    }
}
function _0x4363c4(_0x3b689f, _0xc5f4c6) {
    if (!_0x14f3a6 || !_0x35f6c9)
        return;
    const _0x8b2d70 = _0x3b689f / _0x1c538f['SYSTEM']['viewScale'] + _0x1c538f['CAMERA']['x'];
    const _0x2fc017 = _0xc5f4c6 / _0x1c538f['SYSTEM']['viewScale'] + _0x1c538f['CAMERA']['y'];
    const _0x4d88e2 = Math['floor'](_0x8b2d70 / _0x1c538f['MAP']['tileSize']);
    const _0x32dc9e = Math['floor'](_0x2fc017 / _0x1c538f['MAP']['tileSize']);
    if (_0x4d88e2 >= 0x0 && _0x4d88e2 < _0x1c538f['MAP']['columns'] && _0x32dc9e >= 0x0 && _0x32dc9e < _0x1c538f['MAP']['rows'])
        _0x35f6c9['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x1c538f['EDITOR']['selectedLayer'],
            'col': _0x4d88e2,
            'row': _0x32dc9e,
            'gid': _0x1c538f['EDITOR']['selectedTileGid']
        }));
}
function _0x5303dd() {
    const _0x48ab74 = document['getElementById']('palette');
    if (!_0x48ab74 || _0x48ab74['children']['length'] > 0x0)
        return;
    const _0x230e5b = 0x40;
    const _0x359be4 = _0x181f8c;
    const _0x4733c1 = document['createElement']('div');
    _0x4733c1['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x17c85a = document['createElement']('canvas');
    _0x17c85a['width'] = 0xc0;
    _0x17c85a['height'] = 0xa0;
    _0x17c85a['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x4733c1['appendChild'](_0x17c85a);
    const _0x1f88d8 = document['createElement']('div');
    _0x1f88d8['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x4733c1['appendChild'](_0x1f88d8);
    let _0x3cbe89 = 0x0, _0x3e5fca = 0x0;
    let _0x22c52d = ![], _0x449cc3 = 0x0, _0x1a18bc = 0x0, _0x139bd8 = 0x0, _0x43c4ab = 0x0;
    function _0x45344a() {
        const _0xfefbf4 = _0x17c85a['getContext']('2d');
        _0xfefbf4['clearRect'](0x0, 0x0, _0x17c85a['width'], _0x17c85a['height']);
        _0xfefbf4['imageSmoothingEnabled'] = ![];
        if (_0x359be4['complete'] && _0x359be4['naturalWidth'] > 0x0) {
            _0xfefbf4['drawImage'](_0x359be4, _0x3cbe89, _0x3e5fca, _0x17c85a['width'], _0x17c85a['height'], 0x0, 0x0, _0x17c85a['width'], _0x17c85a['height']);
        }
        _0xfefbf4['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0xfefbf4['lineWidth'] = 0x1;
        const _0x53f5d9 = Math['floor'](_0x3cbe89 / _0x230e5b);
        const _0x77b030 = Math['floor'](_0x3e5fca / _0x230e5b);
        for (let _0x1e4de6 = _0x53f5d9; _0x1e4de6 <= _0x53f5d9 + Math['ceil'](_0x17c85a['width'] / _0x230e5b) + 0x1; _0x1e4de6++) {
            const _0x5991cf = _0x1e4de6 * _0x230e5b - _0x3cbe89;
            _0xfefbf4['beginPath']();
            _0xfefbf4['moveTo'](_0x5991cf, 0x0);
            _0xfefbf4['lineTo'](_0x5991cf, _0x17c85a['height']);
            _0xfefbf4['stroke']();
        }
        for (let _0x25a54c = _0x77b030; _0x25a54c <= _0x77b030 + Math['ceil'](_0x17c85a['height'] / _0x230e5b) + 0x1; _0x25a54c++) {
            const _0x131374 = _0x25a54c * _0x230e5b - _0x3e5fca;
            _0xfefbf4['beginPath']();
            _0xfefbf4['moveTo'](0x0, _0x131374);
            _0xfefbf4['lineTo'](_0x17c85a['width'], _0x131374);
            _0xfefbf4['stroke']();
        }
    }
    function _0x2001ff() {
        const _0x3122ae = Math['max'](0x1, Math['ceil'](_0x359be4['naturalWidth'] / _0x230e5b));
        const _0x9441fe = _0x1c538f['EDITOR']['selectedTileGid'];
        if (_0x9441fe <= 0x0) {
            _0x1f88d8['style']['display'] = 'none';
            return;
        }
        const _0x5dbb72 = _0x9441fe - 0x1;
        const _0x875156 = _0x5dbb72 % _0x3122ae;
        const _0x440c6b = Math['floor'](_0x5dbb72 / _0x3122ae);
        const _0x4816ba = _0x875156 * _0x230e5b - _0x3cbe89;
        const _0x11611b = _0x440c6b * _0x230e5b - _0x3e5fca;
        _0x1f88d8['style']['display'] = 'block';
        _0x1f88d8['style']['left'] = _0x4816ba + 'px';
        _0x1f88d8['style']['top'] = _0x11611b + 'px';
    }
    _0x359be4['onload'] = () => {
        _0x45344a();
        _0x2001ff();
    };
    if (_0x359be4['complete'] && _0x359be4['naturalWidth'] > 0x0) {
        _0x45344a();
        _0x2001ff();
    }
    _0x4733c1['addEventListener']('mousedown', _0x539406 => {
        if (_0x539406['button'] === 0x0) {
            _0x22c52d = !![];
            _0x449cc3 = _0x539406['clientX'];
            _0x1a18bc = _0x539406['clientY'];
            _0x139bd8 = _0x3cbe89;
            _0x43c4ab = _0x3e5fca;
            _0x4733c1['style']['cursor'] = 'grabbing';
            _0x539406['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x48159d => {
        if (!_0x22c52d)
            return;
        const _0x5b6c6d = _0x449cc3 - _0x48159d['clientX'];
        const _0x4c1700 = _0x1a18bc - _0x48159d['clientY'];
        const _0x3b7909 = Math['max'](0x0, _0x359be4['naturalWidth'] - _0x17c85a['width']);
        const _0x4a4126 = Math['max'](0x0, _0x359be4['naturalHeight'] - _0x17c85a['height']);
        _0x3cbe89 = Math['max'](0x0, Math['min'](_0x3b7909, _0x139bd8 + _0x5b6c6d));
        _0x3e5fca = Math['max'](0x0, Math['min'](_0x4a4126, _0x43c4ab + _0x4c1700));
        _0x45344a();
        _0x2001ff();
    });
    window['addEventListener']('mouseup', _0x1c8661 => {
        if (_0x22c52d) {
            _0x22c52d = ![];
            _0x4733c1['style']['cursor'] = 'grab';
        }
    });
    _0x4733c1['addEventListener']('click', _0x29e07b => {
        const _0x34f011 = _0x4733c1['getBoundingClientRect']();
        const _0x49f416 = _0x29e07b['clientX'] - _0x34f011['left'] + _0x3cbe89;
        const _0x941b98 = _0x29e07b['clientY'] - _0x34f011['top'] + _0x3e5fca;
        const _0x53630d = Math['max'](0x1, Math['ceil'](_0x359be4['naturalWidth'] / _0x230e5b));
        const _0x43494c = Math['floor'](_0x49f416 / _0x230e5b);
        const _0x195a13 = Math['floor'](_0x941b98 / _0x230e5b);
        const _0x57c997 = _0x195a13 * _0x53630d + _0x43494c + 0x1;
        _0x1c538f['EDITOR']['selectedTileGid'] = _0x57c997;
        _0x2001ff();
    });
    _0x48ab74['appendChild'](_0x4733c1);
    const _0x476c79 = document['createElement']('div');
    _0x476c79['className'] = 'tile-btn\x20eraser-btn';
    _0x476c79['title'] = 'Eraser\x20(gid\x200)';
    _0x476c79['onclick'] = () => {
        _0x1c538f['EDITOR']['selectedTileGid'] = 0x0;
        _0x1f88d8['style']['display'] = 'none';
    };
    _0x48ab74['appendChild'](_0x476c79);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x1c538f['EDITOR']['enabled'] = !_0x1c538f['EDITOR']['enabled'];
        const _0x257d1f = document['getElementById']('editor-tools');
        if (_0x1c538f['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x257d1f['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x257d1f['style']['display'] = 'none';
        }
    });
    const _0x5daac6 = document['getElementById']('start-game-btn');
    if (_0x5daac6) {
        _0x5daac6['addEventListener']('click', () => {
            if (_0x35f6c9)
                _0x35f6c9['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x410db1 = document['getElementById']('rolelist-toggle-btn');
    if (_0x410db1) {
        let _0x232786 = 'subalignments';
        _0x410db1['addEventListener']('click', () => {
            if (_0x232786 === 'subalignments')
                _0x232786 = 'precise';
            else if (_0x232786 === 'precise')
                _0x232786 = 'off';
            else
                _0x232786 = 'subalignments';
            _0x410db1['innerText'] = 'Role\x20List:\x20' + _0x232786['charAt'](0x0)['toUpperCase']() + _0x232786['slice'](0x1);
            if (_0x35f6c9)
                _0x35f6c9['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x232786
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x5ef51c => {
        if (_0x5ef51c['id'] === 'editor-toggle-btn' || _0x5ef51c['id'] === 'start-game-btn' || _0x5ef51c['id'] === 'rolelist-toggle-btn')
            return;
        _0x5ef51c['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x53c83b => _0x53c83b['classList']['remove']('active'));
            _0x5ef51c['classList']['add']('active');
            _0x1c538f['EDITOR']['selectedLayer'] = _0x5ef51c['dataset']['layer'];
        });
    });
}
function _0x7e4214(_0x6fbfb0) {
    if (_0x35f6c9)
        _0x35f6c9['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x6fbfb0
        }));
}
function _0x4352bb(_0x3edfea) {
    if (_0x35f6c9)
        _0x35f6c9['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x3edfea
        }));
}
function _0x4e4581(_0x5521d4, _0xfb905b, _0x6c9264, _0x12d370) {
    const _0x3f3477 = document['getElementById']('admin-panel');
    if (_0x3f3477)
        _0x3f3477['remove']();
    if (_0x3f3477 && _0x3f3477['dataset']['target'] === String(_0x5521d4))
        return;
    const _0x2087cd = document['createElement']('div');
    _0x2087cd['id'] = 'admin-panel';
    _0x2087cd['dataset']['target'] = String(_0x5521d4);
    _0x2087cd['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x568149 = document['createElement']('div');
    _0x568149['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x568149['textContent'] = _0xfb905b;
    _0x2087cd['appendChild'](_0x568149);
    const _0x58647f = document['createElement']('button');
    _0x58647f['textContent'] = 'Kick';
    _0x58647f['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x58647f['onmouseenter'] = () => _0x58647f['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x58647f['onmouseleave'] = () => _0x58647f['style']['background'] = 'transparent';
    _0x58647f['onclick'] = () => {
        _0x7e4214(_0x5521d4);
        _0x2087cd['remove']();
    };
    _0x2087cd['appendChild'](_0x58647f);
    const _0x481f52 = document['createElement']('button');
    _0x481f52['textContent'] = 'Ban';
    _0x481f52['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x481f52['onmouseenter'] = () => _0x481f52['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x481f52['onmouseleave'] = () => _0x481f52['style']['background'] = 'transparent';
    _0x481f52['onclick'] = () => {
        _0x4352bb(_0x5521d4);
        _0x2087cd['remove']();
    };
    _0x2087cd['appendChild'](_0x481f52);
    document['body']['appendChild'](_0x2087cd);
    const _0x2487c0 = _0x2087cd['offsetWidth'] || 0x91;
    const _0x390efe = _0x2087cd['offsetHeight'] || 0x50;
    let _0x64bc97 = _0x6c9264 - _0x2487c0;
    let _0x946694 = _0x12d370;
    if (_0x64bc97 < 0x4)
        _0x64bc97 = _0x6c9264;
    if (_0x946694 + _0x390efe > window['innerHeight'] - 0x4)
        _0x946694 = window['innerHeight'] - _0x390efe - 0x4;
    _0x2087cd['style']['left'] = _0x64bc97 + 'px';
    _0x2087cd['style']['top'] = _0x946694 + 'px';
    const _0x21ede8 = _0x31b257 => {
        if (!_0x2087cd['contains'](_0x31b257['target'])) {
            _0x2087cd['remove']();
            document['removeEventListener']('mousedown', _0x21ede8);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x21ede8), 0x0);
}
let _0x4f9ca5 = '';
function _0x3a7cfa() {
    const _0x1672db = document['getElementById']('leaderboard-list');
    if (!_0x1672db)
        return;
    let _0x39bb05 = _0x8b0c49 + '|' + _0x14f3a6 + '|' + _0x1ac1c2['isDead'] + '|' + _0x13d97d['size'];
    for (const _0x21e6e2 in _0x141786) {
        const _0x28c611 = _0x141786[_0x21e6e2];
        _0x39bb05 += '|' + _0x21e6e2 + ':' + _0x28c611['name'] + ':' + !!_0x28c611['isOwner'] + ':' + !!_0x28c611['isDead'] + ':' + _0x13d97d['has'](parseInt(_0x21e6e2));
    }
    if (_0x39bb05 === _0x4f9ca5)
        return;
    _0x4f9ca5 = _0x39bb05;
    _0x1672db['innerHTML'] = '';
    const _0x5af11b = document['createElement']('div');
    _0x5af11b['className'] = 'leaderboard-entry';
    const _0x489990 = document['createElement']('span');
    _0x489990['textContent'] = _0x8b0c49 + (_0x14f3a6 ? '\x20[🗝️]' : '');
    if (_0x13d97d['has'](_0x180928) && !_0x1ac1c2['isDead']) {
        _0x489990['style']['color'] = '#cc88ff';
    }
    _0x5af11b['appendChild'](_0x489990);
    _0x1672db['appendChild'](_0x5af11b);
    for (const _0x4499a in _0x141786) {
        const _0x454476 = document['createElement']('div');
        _0x454476['className'] = 'leaderboard-entry';
        const _0x455328 = document['createElement']('span');
        _0x455328['textContent'] = _0x141786[_0x4499a]['name'] + (_0x141786[_0x4499a]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x13d97d['has'](parseInt(_0x4499a)) && !_0x141786[_0x4499a]['isDead']) {
            _0x455328['style']['color'] = '#cc88ff';
        }
        _0x454476['appendChild'](_0x455328);
        if (_0x14f3a6 && !_0x141786[_0x4499a]['isOwner']) {
            const _0x4137bc = _0x141786[_0x4499a]['id'];
            const _0xa9caba = _0x141786[_0x4499a]['name'];
            _0x454476['style']['cursor'] = 'context-menu';
            _0x454476['addEventListener']('contextmenu', _0x5a220b => {
                _0x5a220b['preventDefault']();
                _0x5a220b['stopPropagation']();
                _0x4e4581(_0x4137bc, _0xa9caba, _0x5a220b['clientX'], _0x5a220b['clientY']);
            });
        }
        _0x1672db['appendChild'](_0x454476);
    }
}
window['addEventListener']('resize', _0x44622f);
function _0x44622f() {
    _0x4f55b8['width'] = window['innerWidth'];
    _0x4f55b8['height'] = window['innerHeight'];
    _0x1c538f['SYSTEM']['viewScale'] = Math['max'](_0x4f55b8['width'] / _0x3b473b, _0x4f55b8['height'] / _0x437f97);
    _0x1c538f['CAMERA']['width'] = _0x4f55b8['width'] / _0x1c538f['SYSTEM']['viewScale'];
    _0x1c538f['CAMERA']['height'] = _0x4f55b8['height'] / _0x1c538f['SYSTEM']['viewScale'];
    _0x4363e3['imageSmoothingEnabled'] = ![];
}
function _0x1ef925(_0x2864e0) {
    if (_0x2864e0['ctrlKey'] || _0x2864e0['metaKey']) {
        if (_0x2864e0['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x2864e0['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x2864e0['code'])) {
            _0x2864e0['preventDefault']();
            _0x2864e0['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x1ef925, { 'passive': ![] });
window['addEventListener']('keydown', _0x1ef925, { 'passive': ![] });
window['addEventListener']('keydown', _0x11537b => {
    const _0x1e34f1 = _0x11537b['key']['toLowerCase']();
    if (_0x1e34f1 === 'tab') {
        _0x11537b['preventDefault']();
        const _0x552fc3 = document['getElementById']('will-ui');
        const _0x45b43d = document['getElementById']('will-input');
        if (_0x552fc3['style']['display'] === 'flex') {
            _0x552fc3['style']['display'] = 'none';
            if (_0x1c538f['GAME_STATE'] !== 'NIGHT' && _0x35f6c9)
                _0x35f6c9['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x45b43d['value']
                }));
            _0x45b43d['blur']();
        } else {
            if (_0x1c538f['GAME_STATE'] === 'NIGHT') {
                _0xb34a23('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x552fc3['style']['display'] = 'flex';
            _0x45b43d['focus']();
            for (let _0x4d57a2 in _0x1c538f['INPUTS']['keys'])
                _0x1c538f['INPUTS']['keys'][_0x4d57a2] = ![];
        }
        return;
    }
    if (_0x11537b['key'] === 'Enter') {
        if (_0x534ea6) {
            const _0x192615 = document['getElementById']('play-btn');
            if (_0x192615)
                _0x192615['click']();
            return;
        }
        if (!_0x35f6c9 || _0x35f6c9['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x40e686 = document['getElementById']('chat-ui');
        const _0x54b700 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x54b700) {
            const _0x438330 = _0x54b700['value']['trim']();
            if (_0x438330['length'] > 0x0) {
                _0x35f6c9['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x438330
                }));
            }
            _0x54b700['value'] = '';
            _0x40e686['style']['display'] = 'none';
            _0x54b700['blur']();
        } else {
            _0x40e686['style']['display'] = 'block';
            _0x54b700['focus']();
            for (let _0x347119 in _0x1c538f['INPUTS']['keys'])
                _0x1c538f['INPUTS']['keys'][_0x347119] = ![];
        }
        _0x11537b['preventDefault']();
        return;
    }
    if (_0x11537b['key'] === 'Escape') {
        const _0x488ee6 = document['getElementById']('role-index-modal');
        if (_0x488ee6 && _0x488ee6['style']['display'] === 'flex') {
            _0x488ee6['style']['display'] = 'none';
            return;
        }
        const _0x1aefe4 = document['getElementById']('guide-ui');
        if (_0x1aefe4 && _0x1aefe4['style']['display'] === 'flex') {
            _0x1aefe4['style']['display'] = 'none';
            return;
        }
        const _0x1a6603 = document['getElementById']('ability-ui');
        if (_0x1a6603 && _0x1a6603['style']['display'] === 'block') {
            _0x1a6603['style']['display'] = 'none';
            return;
        }
        const _0x43722b = document['getElementById']('settings-panel');
        if (_0x43722b && _0x43722b['style']['display'] === 'block') {
            _0x43722b['style']['display'] = 'none';
            return;
        }
        const _0x329374 = document['getElementById']('mayor-confirm-dialog');
        if (_0x329374 && _0x329374['style']['display'] === 'flex') {
            _0x329374['style']['display'] = 'none';
            return;
        }
        const _0x52cd91 = document['getElementById']('target-chooser-ui');
        if (_0x52cd91 && _0x52cd91['style']['display'] === 'flex') {
            _0x52cd91['style']['display'] = 'none';
            return;
        }
        const _0x1c7c70 = document['getElementById']('chat-ui');
        const _0x2eac22 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x2eac22) {
            _0x2eac22['value'] = '';
            _0x1c7c70['style']['display'] = 'none';
            _0x2eac22['blur']();
            _0x11537b['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x1c538f['INPUTS']['keys']['hasOwnProperty'](_0x1e34f1))
            _0x1c538f['INPUTS']['keys'][_0x1e34f1] = !![];
        if (!_0x35f6c9 || _0x35f6c9['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x1e34f1 === 'h' && !_0x11537b['repeat']) {
            const _0x335fae = document['getElementById']('guide-ui');
            if (_0x335fae) {
                _0x335fae['style']['display'] = _0x335fae['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x1e34f1 === 't' && !_0x11537b['repeat']) {
            if (_0x1ac1c2['isDead'])
                return;
            if (_0x200614 === 'Mayor') {
                if (_0x13d97d['has'](_0x180928)) {
                    _0xb34a23('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x981231 = document['getElementById']('mayor-confirm-dialog');
                if (_0x981231)
                    _0x981231['style']['display'] = 'flex';
                return;
            }
            if (_0x1c538f['GAME_STATE'] === 'NIGHT') {
                if (!_0x1c538f['NIGHT_ABILITY_OPEN']) {
                    _0xb34a23('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x32ea26 = document['getElementById']('ability-ui');
                if (_0x32ea26) {
                    if (_0x32ea26['style']['display'] === 'block') {
                        _0x32ea26['style']['display'] = 'none';
                    } else {
                        _0x5f7d22();
                        _0x32ea26['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1c538f['GAME_STATE'] === 'DAY_DISCUSS' || _0x1c538f['GAME_STATE'] === 'DAY_VOTE') {
                _0xb34a23('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x1e34f1 === 'e' && !_0x1ac1c2['isDead']) {
            const _0x5beba8 = Date['now']();
            if (!window['_lastDoorSend'] || _0x5beba8 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x5beba8;
                _0x35f6c9['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x4bafde => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x483962 = _0x4bafde['key']['toLowerCase']();
        if (_0x1c538f['INPUTS']['keys']['hasOwnProperty'](_0x483962))
            _0x1c538f['INPUTS']['keys'][_0x483962] = ![];
    }
});
window['addEventListener']('mousemove', _0x1fe501 => {
    _0x1c538f['INPUTS']['mouseX'] = _0x1fe501['clientX'];
    _0x1c538f['INPUTS']['mouseY'] = _0x1fe501['clientY'];
    if (_0x1c538f['INPUTS']['isMouseDown'] && _0x1c538f['EDITOR']['enabled']) {
        _0x4363c4(_0x1fe501['clientX'], _0x1fe501['clientY']);
    }
});
window['addEventListener']('mousedown', _0x12dd85 => {
    if (_0x12dd85['target']['closest']('#editor-ui') || _0x12dd85['target']['closest']('#leaderboard-ui') || _0x12dd85['target']['closest']('#role-index-btn-wrap') || _0x12dd85['target']['closest']('#role-index-modal') || _0x12dd85['target']['closest']('#chat-log-ui') || _0x12dd85['target']['closest']('#target-chooser-ui') || _0x12dd85['target']['closest']('#guide-ui') || _0x12dd85['target']['closest']('#role-list-ui') || _0x12dd85['target']['closest']('#ability-ui') || _0x12dd85['target']['closest']('#settings-panel') || _0x12dd85['target']['closest']('#mayor-confirm-dialog') || _0x12dd85['target']['closest']('#mobile-action-bar') || _0x12dd85['target']['closest']('#mobile-top-bar') || _0x12dd85['target']['closest']('#mobile-joystick-zone') || _0x12dd85['target']['closest']('#mobile-chat-overlay') || _0x12dd85['target']['closest']('#will-ui') || _0x12dd85['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x12dd85['button'] === 0x0) {
        _0x1c538f['INPUTS']['isMouseDown'] = !![];
        if (_0x1c538f['EDITOR']['enabled'])
            _0x4363c4(_0x12dd85['clientX'], _0x12dd85['clientY']);
    }
});
window['addEventListener']('mouseup', _0x50185c => {
    _0x1c538f['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x3d0642 => {
    if (_0x3d0642['target']['closest']('#settings-btn'))
        return;
    const _0x1b82bf = document['getElementById']('leaderboard-list');
    const _0x5e57cd = document['getElementById']('leaderboard-toggle');
    if (_0x1b82bf['style']['display'] === 'none') {
        _0x1b82bf['style']['display'] = 'flex';
        _0x5e57cd['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x1b82bf['style']['display'] = 'none';
        _0x5e57cd['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x50492d = document['getElementById']('close-target-btn');
if (_0x50492d) {
    _0x50492d['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x1d104c = document['getElementById']('close-guide-btn');
if (_0x1d104c) {
    _0x1d104c['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x3f6d80 = document['getElementById']('role-list-header');
if (_0x3f6d80) {
    _0x3f6d80['addEventListener']('click', () => {
        const _0x3cc317 = document['getElementById']('role-list-items');
        const _0xc216af = document['getElementById']('role-list-toggle');
        if (_0x3cc317['style']['display'] === 'none') {
            _0x3cc317['style']['display'] = 'flex';
            _0xc216af['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x3cc317['style']['display'] = 'none';
            _0xc216af['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x5813c6() {
    const _0x4e38fc = document['getElementById']('mobile-joystick-zone');
    const _0x3339cd = document['getElementById']('mobile-joystick-base');
    const _0x3b807b = document['getElementById']('mobile-joystick-knob');
    if (_0x4e38fc && _0x3339cd && _0x3b807b) {
        const _0x15c91c = 0x3e;
        const _0x4ce82d = (_0x25e34a, _0x3addcf) => {
            const _0x1830f9 = _0x3339cd['getBoundingClientRect']();
            const _0x4dd669 = _0x1830f9['left'] + _0x1830f9['width'] / 0x2;
            const _0x38dfc7 = _0x1830f9['top'] + _0x1830f9['height'] / 0x2;
            const _0x2eba18 = _0x25e34a - _0x4dd669;
            const _0x333e9b = _0x3addcf - _0x38dfc7;
            const _0x23d327 = Math['hypot'](_0x2eba18, _0x333e9b);
            if (_0x23d327 === 0x0) {
                _0xf556f8 = 0x0;
                _0x13422f = 0x0;
                _0x4504d8 = ![];
                _0x3b807b['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x3646ec = Math['min'](_0x23d327, _0x15c91c);
            const _0x437e9d = _0x2eba18 / _0x23d327 * _0x3646ec;
            const _0x3fce50 = _0x333e9b / _0x23d327 * _0x3646ec;
            _0xf556f8 = _0x437e9d / _0x15c91c;
            _0x13422f = _0x3fce50 / _0x15c91c;
            _0x4504d8 = _0x23d327 >= _0x15c91c * 0.75;
            _0x3b807b['style']['transform'] = 'translate(' + _0x437e9d + 'px,\x20' + _0x3fce50 + 'px)';
        };
        const _0x4e5af6 = _0xf6eb06 => {
            for (let _0x38d9b1 = 0x0; _0x38d9b1 < _0xf6eb06['changedTouches']['length']; _0x38d9b1++) {
                const _0x4c7ec6 = _0xf6eb06['changedTouches'][_0x38d9b1];
                if (_0x13def9 === null) {
                    _0x13def9 = _0x4c7ec6['identifier'];
                    _0x432d54 = !![];
                    _0x4ce82d(_0x4c7ec6['clientX'], _0x4c7ec6['clientY']);
                    break;
                }
            }
        };
        const _0xda051f = _0x1b4756 => {
            for (let _0x2b347a = 0x0; _0x2b347a < _0x1b4756['changedTouches']['length']; _0x2b347a++) {
                const _0x31f38d = _0x1b4756['changedTouches'][_0x2b347a];
                if (_0x31f38d['identifier'] === _0x13def9) {
                    _0x4ce82d(_0x31f38d['clientX'], _0x31f38d['clientY']);
                    break;
                }
            }
        };
        const _0x42229b = _0x1111e6 => {
            for (let _0x3ddec4 = 0x0; _0x3ddec4 < _0x1111e6['changedTouches']['length']; _0x3ddec4++) {
                const _0x2d833a = _0x1111e6['changedTouches'][_0x3ddec4];
                if (_0x2d833a['identifier'] === _0x13def9) {
                    _0x13def9 = null;
                    _0x432d54 = ![];
                    _0xf556f8 = 0x0;
                    _0x13422f = 0x0;
                    _0x4504d8 = ![];
                    _0x3b807b['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x4e38fc['addEventListener']('touchstart', _0x309cca => {
            _0x309cca['preventDefault']();
            _0x4e5af6(_0x309cca);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0xda051f, { 'passive': !![] });
        window['addEventListener']('touchend', _0x42229b, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x42229b, { 'passive': !![] });
    }
    const _0x4e0192 = (_0x4a0a24, _0x11c06c) => {
        const _0x5a5778 = _0x4a0a24 / _0x1c538f['SYSTEM']['viewScale'];
        const _0x439528 = _0x11c06c / _0x1c538f['SYSTEM']['viewScale'];
        const _0x33aec5 = _0x1ac1c2['x'] - _0x1c538f['CAMERA']['x'] + _0x1ac1c2['width'] / 0x2;
        const _0x153ef1 = _0x1ac1c2['y'] - _0x1c538f['CAMERA']['y'] + _0x1ac1c2['height'] / 0x2;
        _0x4d53b5 = Math['atan2'](_0x439528 - _0x153ef1, _0x5a5778 - _0x33aec5);
        _0x25f25a = !![];
        _0x1c538f['INPUTS']['mouseX'] = _0x4a0a24;
        _0x1c538f['INPUTS']['mouseY'] = _0x11c06c;
    };
    _0x4f55b8['addEventListener']('touchstart', _0x8ee3c => {
        if (_0x534ea6)
            return;
        for (let _0x11a5fb = 0x0; _0x11a5fb < _0x8ee3c['changedTouches']['length']; _0x11a5fb++) {
            const _0x5c1041 = _0x8ee3c['changedTouches'][_0x11a5fb];
            if (_0x5c1041['identifier'] !== _0x13def9 && _0x525c7e === null) {
                _0x525c7e = _0x5c1041['identifier'];
                _0x4e0192(_0x5c1041['clientX'], _0x5c1041['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x4f55b8['addEventListener']('touchmove', _0x1700eb => {
        if (_0x534ea6)
            return;
        for (let _0x3e4e1b = 0x0; _0x3e4e1b < _0x1700eb['changedTouches']['length']; _0x3e4e1b++) {
            const _0x22af8e = _0x1700eb['changedTouches'][_0x3e4e1b];
            if (_0x22af8e['identifier'] === _0x525c7e) {
                _0x4e0192(_0x22af8e['clientX'], _0x22af8e['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x55be81 = _0x27d2e3 => {
        for (let _0x289635 = 0x0; _0x289635 < _0x27d2e3['changedTouches']['length']; _0x289635++) {
            const _0x239ded = _0x27d2e3['changedTouches'][_0x289635];
            if (_0x239ded['identifier'] === _0x525c7e) {
                _0x525c7e = null;
                _0x25f25a = ![];
                break;
            }
        }
    };
    _0x4f55b8['addEventListener']('touchend', _0x55be81, { 'passive': !![] });
    _0x4f55b8['addEventListener']('touchcancel', _0x55be81, { 'passive': !![] });
    const _0x14293e = document['getElementById']('mob-sprint-btn');
    if (_0x14293e) {
        _0x14293e['addEventListener']('click', _0x4d6eea => {
            _0x4d6eea['stopPropagation']();
            _0x5693f2 = !_0x5693f2;
            _0x14293e['classList']['toggle']('active', _0x5693f2);
        });
    }
    const _0x2484d7 = document['getElementById']('mob-interact-btn');
    if (_0x2484d7) {
        _0x2484d7['addEventListener']('click', _0x151465 => {
            _0x151465['stopPropagation']();
            if (!_0x1ac1c2['isDead']) {
                const _0x21c347 = Date['now']();
                if (!window['_lastDoorSend'] || _0x21c347 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x21c347;
                    if (_0x35f6c9 && _0x35f6c9['readyState'] === WebSocket['OPEN'])
                        _0x35f6c9['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x5b7745 = document['getElementById']('mob-ability-btn');
    if (_0x5b7745) {
        _0x5b7745['addEventListener']('click', _0x2956b1 => {
            _0x2956b1['stopPropagation']();
            if (_0x1ac1c2['isDead'])
                return;
            if (_0x200614 === 'Mayor') {
                if (_0x13d97d['has'](_0x180928)) {
                    _0xb34a23('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x502268 = document['getElementById']('mayor-confirm-dialog');
                if (_0x502268)
                    _0x502268['style']['display'] = 'flex';
                return;
            }
            if (_0x1c538f['GAME_STATE'] === 'NIGHT') {
                if (!_0x1c538f['NIGHT_ABILITY_OPEN']) {
                    _0xb34a23('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x29d996 = document['getElementById']('ability-ui');
                if (_0x29d996) {
                    if (_0x29d996['style']['display'] === 'block') {
                        _0x29d996['style']['display'] = 'none';
                    } else {
                        _0x5f7d22();
                        _0x29d996['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1c538f['GAME_STATE'] === 'DAY_DISCUSS' || _0x1c538f['GAME_STATE'] === 'DAY_VOTE') {
                _0xb34a23('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x225084 = document['getElementById']('mob-will-btn');
    const _0x329f78 = document['getElementById']('will-ui');
    const _0x2d6169 = document['getElementById']('will-input');
    const _0x13c59e = document['getElementById']('close-will-btn');
    const _0x491bf0 = () => {
        if (!_0x329f78)
            return;
        if (_0x329f78['style']['display'] === 'flex') {
            _0x329f78['style']['display'] = 'none';
            if (_0x1c538f['GAME_STATE'] !== 'NIGHT' && _0x35f6c9 && _0x35f6c9['readyState'] === WebSocket['OPEN'] && _0x2d6169) {
                _0x35f6c9['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x2d6169['value']
                }));
            }
            if (_0x2d6169)
                _0x2d6169['blur']();
        } else {
            if (_0x1c538f['GAME_STATE'] === 'NIGHT') {
                _0xb34a23('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x329f78['style']['display'] = 'flex';
            if (_0x2d6169)
                _0x2d6169['focus']();
        }
    };
    if (_0x225084)
        _0x225084['addEventListener']('click', _0x5350d4 => {
            _0x5350d4['stopPropagation']();
            _0x491bf0();
        });
    if (_0x13c59e)
        _0x13c59e['addEventListener']('click', _0x5d7693 => {
            _0x5d7693['stopPropagation']();
            _0x491bf0();
        });
    const _0x15913d = document['getElementById']('mob-chat-btn');
    const _0x214583 = document['getElementById']('mobile-chat-overlay');
    const _0x24077e = document['getElementById']('mobile-chat-input');
    const _0x212608 = document['getElementById']('mobile-chat-send');
    const _0x2a4999 = document['getElementById']('mobile-chat-cancel');
    const _0xd0c4b6 = () => {
        if (!_0x214583 || !_0x24077e)
            return;
        _0x214583['style']['display'] = 'flex';
        _0x24077e['value'] = '';
        _0x24077e['focus']();
    };
    const _0x4fb1e4 = () => {
        if (!_0x214583 || !_0x24077e)
            return;
        _0x214583['style']['display'] = 'none';
        _0x24077e['blur']();
    };
    const _0x1c3944 = () => {
        if (!_0x24077e)
            return;
        const _0x145671 = _0x24077e['value']['trim']();
        if (_0x145671['length'] > 0x0 && _0x35f6c9 && _0x35f6c9['readyState'] === WebSocket['OPEN']) {
            _0x35f6c9['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x145671
            }));
        }
        _0x24077e['value'] = '';
        _0x4fb1e4();
    };
    if (_0x15913d)
        _0x15913d['addEventListener']('click', _0x1a9154 => {
            _0x1a9154['stopPropagation']();
            _0xd0c4b6();
        });
    if (_0x212608)
        _0x212608['addEventListener']('click', _0xea1909 => {
            _0xea1909['stopPropagation']();
            _0x1c3944();
        });
    if (_0x2a4999)
        _0x2a4999['addEventListener']('click', _0x379611 => {
            _0x379611['stopPropagation']();
            _0x4fb1e4();
        });
    if (_0x24077e) {
        _0x24077e['addEventListener']('keydown', _0x4dc152 => {
            if (_0x4dc152['key'] === 'Enter') {
                _0x4dc152['preventDefault']();
                _0x1c3944();
            } else if (_0x4dc152['key'] === 'Escape') {
                _0x4fb1e4();
            }
        });
    }
    const _0x4166d5 = document['getElementById']('mob-top-chat');
    if (_0x4166d5)
        _0x4166d5['addEventListener']('click', _0x13d7b1 => {
            _0x13d7b1['stopPropagation']();
            _0xd0c4b6();
        });
    const _0x395cb6 = document['getElementById']('mob-top-will');
    if (_0x395cb6)
        _0x395cb6['addEventListener']('click', _0x1d58e3 => {
            _0x1d58e3['stopPropagation']();
            _0x491bf0();
        });
    const _0x180588 = document['getElementById']('mob-top-roles');
    if (_0x180588) {
        _0x180588['addEventListener']('click', _0x4f6808 => {
            _0x4f6808['stopPropagation']();
            const _0x520f80 = document['getElementById']('role-list-ui');
            const _0x35d9b0 = document['getElementById']('leaderboard-ui');
            if (_0x35d9b0)
                _0x35d9b0['style']['display'] = 'none';
            if (_0x520f80)
                _0x520f80['style']['display'] = _0x520f80['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x43cd5a = document['getElementById']('mob-top-players');
    if (_0x43cd5a) {
        _0x43cd5a['addEventListener']('click', _0x382790 => {
            _0x382790['stopPropagation']();
            const _0x2bbb1a = document['getElementById']('leaderboard-ui');
            const _0x285095 = document['getElementById']('role-list-ui');
            if (_0x285095)
                _0x285095['style']['display'] = 'none';
            if (_0x2bbb1a)
                _0x2bbb1a['style']['display'] = _0x2bbb1a['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0xa3cb63 = document['getElementById']('mob-top-help');
    if (_0xa3cb63) {
        _0xa3cb63['addEventListener']('click', _0x478779 => {
            _0x478779['stopPropagation']();
            const _0x1ae168 = document['getElementById']('guide-ui');
            if (_0x1ae168)
                _0x1ae168['style']['display'] = _0x1ae168['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x231526) {
            _0x231526 = !![];
            _0x6e8565();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
