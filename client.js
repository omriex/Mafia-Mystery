document['addEventListener']('contextmenu', _0x2ad5c0 => _0x2ad5c0['preventDefault']());
const _0x1c0d0e = {
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
let _0x2ba230 = '';
function _0x339587(_0x1524c0, _0x1df91c) {
    const _0x6db308 = document['getElementById']('role-list-ui');
    const _0x3374d7 = document['getElementById']('role-list-items');
    if (!_0x6db308 || !_0x3374d7)
        return;
    if (!_0x1df91c || _0x1df91c === 'off' || !_0x1524c0 || _0x1524c0['length'] === 0x0) {
        _0x6db308['style']['display'] = 'none';
        return;
    }
    const _0x3758cf = _0x1df91c + '|' + JSON['stringify'](_0x1524c0);
    if (_0x3758cf === _0x2ba230)
        return;
    _0x2ba230 = _0x3758cf;
    const _0x469a35 = document['getElementById']('role-tooltip');
    if (_0x469a35) {
        _0x469a35['style']['visibility'] = 'hidden';
        _0x469a35['style']['opacity'] = '0';
    }
    _0x6db308['style']['display'] = 'flex';
    _0x3374d7['innerHTML'] = '';
    _0x1524c0['forEach'](_0x1347e5 => {
        const _0x348ac2 = document['createElement']('div');
        _0x348ac2['className'] = 'role-list-entry';
        const _0x4ec91d = _0x1347e5['name']['includes']('Mafia') || _0x1347e5['name'] === 'Skinwalker' || _0x1347e5['name'] === 'Blackmailer';
        _0x348ac2['classList']['add'](_0x4ec91d ? 'mafia' : 'town');
        if (_0x1df91c === 'precise' && _0x1347e5['isDead']) {
            _0x348ac2['classList']['remove']('town', 'mafia');
            _0x348ac2['classList']['add']('dead');
            _0x348ac2['innerHTML'] = '<span>' + _0x1347e5['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0xe9bbd5 = _0x1347e5['count'] !== undefined && _0x1347e5['count'] !== null ? _0x1347e5['count'] + 'x\x20' : '';
            _0x348ac2['innerHTML'] = '<span>' + _0xe9bbd5 + _0x1347e5['name'] + '</span>';
        }
        if (_0x1df91c === 'subalignments' && _0x1c0d0e[_0x1347e5['name']]) {
            _0x348ac2['style']['cursor'] = 'pointer';
            _0x348ac2['addEventListener']('mouseenter', () => {
                const _0x52f362 = document['getElementById']('role-tooltip');
                if (!_0x52f362)
                    return;
                const _0x2344bd = _0x1c0d0e[_0x1347e5['name']]['join'](',\x20');
                _0x52f362['innerHTML'] = '';
                const _0x3a79b9 = document['createElement']('span');
                _0x3a79b9['style']['color'] = '#ffcc00';
                _0x3a79b9['textContent'] = _0x1347e5['name'];
                _0x52f362['appendChild'](_0x3a79b9);
                _0x52f362['appendChild'](document['createElement']('br'));
                _0x52f362['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x2344bd));
                const _0x46811a = _0x348ac2['getBoundingClientRect']();
                _0x52f362['style']['left'] = _0x46811a['left'] - 0xeb + 'px';
                _0x52f362['style']['top'] = _0x46811a['top'] + 'px';
                _0x52f362['style']['display'] = 'block';
                _0x52f362['style']['visibility'] = 'visible';
                _0x52f362['style']['opacity'] = '1';
            });
            _0x348ac2['addEventListener']('mouseleave', () => {
                const _0x32268e = document['getElementById']('role-tooltip');
                if (_0x32268e) {
                    _0x32268e['style']['display'] = 'none';
                    _0x32268e['style']['visibility'] = 'hidden';
                    _0x32268e['style']['opacity'] = '0';
                }
            });
        }
        _0x3374d7['appendChild'](_0x348ac2);
    });
}
let _0x5b2bc2 = null;
let _0x131772 = null;
const _0x61e54a = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x3b58ee = 'Player???';
let _0xc65fb1 = ![];
let _0x595265 = {};
let _0x2f26d8 = null;
let _0x5b84c8 = 0x0;
let _0x341f5d = 0x0;
let _0x131aa6 = new Set();
let _0x23f41c = ![];
let _0x2c07a2 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x657aac = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x58565e = ![];
let _0x445720 = null;
let _0x33e871 = 0x0;
let _0x1f1080 = 0x0;
let _0x3616f1 = ![];
let _0x26c0a9 = ![];
let _0x2403f5 = 0x0;
let _0x53df64 = null;
let _0x2a147f = ![];
let _0x2dd3ac = 0x0;
let _0xb4dfff = 0x0;
let _0x16b465 = [];
let _0x318444 = [];
let _0x395d4d = new Set();
const _0x36e3fc = ((() => {
    const _0x4cda1c = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x2547fb = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x369df4 = 0x320;
    const _0x5ee57c = {};
    const _0x589cd5 = {};
    let _0x5cbad8 = null;
    let _0xff3fba = _0x2547fb === 0x0;
    let _0x4819d5 = ![];
    for (const [_0x5b9593, _0x1e5130] of Object['entries'](_0x4cda1c)) {
        const _0x45e229 = new Audio(_0x1e5130);
        _0x45e229['loop'] = !![];
        _0x45e229['volume'] = 0x0;
        _0x45e229['preload'] = 'auto';
        _0x5ee57c[_0x5b9593] = _0x45e229;
        _0x589cd5[_0x5b9593] = null;
    }
    const _0x2c16ff = _0x3dbc6c => Math['min'](0x1, Math['max'](0x0, _0x3dbc6c));
    function _0x5e6fe0(_0x30a852) {
        if (_0x589cd5[_0x30a852] !== null) {
            cancelAnimationFrame(_0x589cd5[_0x30a852]);
            _0x589cd5[_0x30a852] = null;
        }
    }
    function _0x1c4495(_0x2ed2f7, _0x6e1cb8, _0x2db0c6, _0x205a2b, _0x72d88) {
        _0x5e6fe0(_0x2ed2f7);
        const _0x3c192a = _0x5ee57c[_0x2ed2f7];
        const _0x247058 = performance['now']();
        const _0x5dc009 = _0x35f3be => {
            const _0x86aae3 = _0x2c16ff((_0x35f3be - _0x247058) / _0x205a2b);
            const _0x2a09a9 = _0x2c16ff(_0x6e1cb8 + (_0x2db0c6 - _0x6e1cb8) * _0x86aae3);
            _0x3c192a['volume'] = _0xff3fba ? 0x0 : _0x2a09a9;
            if (_0x86aae3 < 0x1) {
                _0x589cd5[_0x2ed2f7] = requestAnimationFrame(_0x5dc009);
            } else {
                _0x589cd5[_0x2ed2f7] = null;
                _0x3c192a['volume'] = _0xff3fba ? 0x0 : _0x2c16ff(_0x2db0c6);
                if (_0x72d88)
                    _0x72d88();
            }
        };
        _0x589cd5[_0x2ed2f7] = requestAnimationFrame(_0x5dc009);
    }
    function _0x481a33(_0x318625) {
        const _0x3ffd6e = _0x318625['play']();
        if (_0x3ffd6e && _0x3ffd6e['catch']) {
            _0x3ffd6e['catch'](() => {
                if (!_0x4819d5) {
                    const _0x38f6b1 = () => {
                        _0x4819d5 = !![];
                        _0x318625['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x38f6b1);
                        document['removeEventListener']('keydown', _0x38f6b1);
                        document['removeEventListener']('touchstart', _0x38f6b1);
                    };
                    document['addEventListener']('click', _0x38f6b1, { 'once': !![] });
                    document['addEventListener']('keydown', _0x38f6b1, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x38f6b1, { 'once': !![] });
                }
            });
        }
    }
    function _0x31b0d2(_0x239164) {
        if (!_0x4cda1c[_0x239164])
            return;
        if (_0x5cbad8 === _0x239164)
            return;
        const _0x46aebe = _0x5cbad8;
        _0x5cbad8 = _0x239164;
        const _0x168d96 = _0x5ee57c[_0x239164];
        _0x5e6fe0(_0x239164);
        _0x168d96['currentTime'] = 0x0;
        _0x168d96['volume'] = 0x0;
        _0x481a33(_0x168d96);
        _0x1c4495(_0x239164, 0x0, _0x2547fb, _0x369df4);
        if (_0x46aebe && _0x5ee57c[_0x46aebe]) {
            const _0x18f19f = _0x46aebe;
            const _0xfb99cf = _0x5ee57c[_0x18f19f];
            const _0x1cc554 = _0x2c16ff(_0xfb99cf['volume']);
            _0x1c4495(_0x18f19f, _0x1cc554, 0x0, _0x369df4, () => {
                _0xfb99cf['pause']();
                _0xfb99cf['currentTime'] = 0x0;
            });
        }
    }
    function _0x32e146(_0x1b9f2f) {
        _0x2547fb = _0x2c16ff(_0x1b9f2f);
        localStorage['setItem']('musicVolume', String(_0x2547fb));
        if (!_0xff3fba && _0x5cbad8 && _0x589cd5[_0x5cbad8] === null) {
            _0x5ee57c[_0x5cbad8]['volume'] = _0x2547fb;
        }
    }
    function _0x49ee59() {
        return _0x2547fb;
    }
    function _0x1c2fb3(_0x437ca4) {
        _0xff3fba = _0x437ca4;
        for (const _0x39efa3 of Object['keys'](_0x5ee57c)) {
            if (_0x589cd5[_0x39efa3] === null) {
                _0x5ee57c[_0x39efa3]['volume'] = _0x437ca4 || _0x39efa3 !== _0x5cbad8 ? 0x0 : _0x2547fb;
            }
        }
    }
    function _0x5dfdb1() {
        return _0xff3fba;
    }
    function _0xda3ad2(_0x173d28) {
        if (_0x173d28 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x173d28 === 'DAY_VOTE')
            return 'voting';
        if (_0x173d28 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x4685ec(_0x4b85dc) {
        _0x31b0d2(_0xda3ad2(_0x4b85dc));
    }
    function _0x57ebbf(_0x3a3eab) {
        _0x31b0d2(_0x3a3eab);
    }
    return {
        'play': _0x31b0d2,
        'onStateChange': _0x4685ec,
        'onSoundEvent': _0x57ebbf,
        'setVolume': _0x32e146,
        'getVolume': _0x49ee59,
        'setMuted': _0x1c2fb3,
        'isMuted': _0x5dfdb1
    };
})());
const _0xaa085c = ((() => {
    const _0x4ca761 = 0x258;
    const _0x5d6f31 = 0xb4;
    const _0x45019a = 0x708;
    const _0x4cd808 = 0x140;
    const _0x4be619 = 0.18;
    const _0x51ec6f = 0.95;
    const _0x33706b = new Audio('audio/heartbeat.mp3');
    _0x33706b['loop'] = ![];
    _0x33706b['preload'] = 'auto';
    _0x33706b['volume'] = 0x0;
    let _0x312f03 = 0x0;
    let _0x262e65 = Infinity;
    function _0x8b961f(_0xf691d4, _0x263bec, _0x3940e0) {
        return Math['min'](_0x3940e0, Math['max'](_0x263bec, _0xf691d4));
    }
    function _0x1e7e24(_0x1dd960, _0x4142d6, _0x1a74f5) {
        return _0x1dd960 + (_0x4142d6 - _0x1dd960) * _0x1a74f5;
    }
    function _0x264a7c(_0x39d32a) {
        if (_0x1d4674['GAME_STATE'] !== 'NIGHT' || _0x33a7db['isDead'] || _0x2f26d8 === 'Skinwalker' || _0x2f26d8 === 'Blackmailer') {
            _0x262e65 = Infinity;
            return;
        }
        const _0x45a2d7 = _0x33a7db['x'] + 22.5;
        const _0x12ea79 = _0x33a7db['y'] + 22.5;
        let _0x452fac = Infinity;
        for (const _0x55fa98 in _0x595265) {
            const _0x1d80af = _0x595265[_0x55fa98];
            if (!_0x1d80af['isDark'] || _0x1d80af['isDead'])
                continue;
            const _0x125c63 = _0x1d80af['renderX'] + 22.5 - _0x45a2d7;
            const _0xb96643 = _0x1d80af['renderY'] + 22.5 - _0x12ea79;
            const _0x1afc3e = Math['sqrt'](_0x125c63 * _0x125c63 + _0xb96643 * _0xb96643);
            if (_0x1afc3e < _0x452fac)
                _0x452fac = _0x1afc3e;
        }
        _0x262e65 = _0x452fac;
        if (_0x452fac > _0x4ca761)
            return;
        const _0x525bbb = 0x1 - _0x8b961f((_0x452fac - _0x5d6f31) / (_0x4ca761 - _0x5d6f31), 0x0, 0x1);
        const _0x373d38 = _0x1e7e24(_0x45019a, _0x4cd808, _0x525bbb);
        const _0x331d43 = _0x1e7e24(_0x4be619, _0x51ec6f, _0x525bbb);
        if (_0x39d32a >= _0x312f03) {
            _0x33706b['currentTime'] = 0x0;
            _0x33706b['volume'] = _0x36e3fc['isMuted']() ? 0x0 : _0x8b961f(_0x331d43 * _0x36e3fc['getVolume']() / 0.7, 0x0, 0x1);
            _0x33706b['play']()['catch'](() => {
            });
            _0x312f03 = _0x39d32a + _0x373d38;
        }
    }
    return { 'tick': _0x264a7c };
})());
function _0x433410() {
    const _0x4d17bb = document['getElementById']('mob-ability-btn');
    if (!_0x4d17bb)
        return;
    const _0x28dba2 = _0x1d4674['GAME_STATE'] === 'NIGHT' && !_0x33a7db['isDead'];
    const _0x3a6083 = _0x2f26d8 === 'Mayor' && !_0x131aa6['has'](_0x131772) && !_0x33a7db['isDead'];
    if (_0x28dba2 || _0x3a6083) {
        _0x4d17bb['style']['display'] = 'flex';
    } else {
        _0x4d17bb['style']['display'] = 'none';
    }
}
function _0xf159d() {
    const _0x1c94ac = document['getElementById']('mobile-joystick-zone');
    const _0x2fa1f2 = document['getElementById']('mobile-top-bar');
    const _0x22884c = document['getElementById']('mobile-action-bar');
    if (!_0x1c94ac || !_0x2fa1f2 || !_0x22884c)
        return;
    if (!_0x2d912d && _0x657aac) {
        _0x1c94ac['style']['display'] = 'flex';
        _0x2fa1f2['style']['display'] = 'flex';
        _0x22884c['style']['display'] = 'flex';
        _0x433410();
    } else {
        _0x1c94ac['style']['display'] = 'none';
        _0x2fa1f2['style']['display'] = 'none';
        _0x22884c['style']['display'] = 'none';
    }
}
const _0x255df0 = document['getElementById']('gameCanvas');
const _0x3c6f46 = _0x255df0['getContext']('2d', { 'alpha': ![] });
const _0x21ce75 = 0x500;
const _0x1b97b6 = 0x2d0;
const _0x1d4674 = {
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
        'width': _0x21ce75,
        'height': _0x1b97b6
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
const _0x33a7db = {
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
const _0x149262 = new Image();
const _0x302dc4 = new Image();
const _0x30a072 = new Image();
const _0x3c8a15 = new Image();
_0x3c8a15['src'] = 'assets/mayor\x20cosmetic.png';
const _0x522e58 = [
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
const _0x10e3ec = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x1e4260 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x1e4260 === 'body1.png' || _0x1e4260 === 'body1')
    _0x1e4260 = 'body01.png';
if (!_0x1e4260['endsWith']('.png'))
    _0x1e4260 += '.png';
let _0x508b6e = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x508b6e['endsWith']('.png'))
    _0x508b6e += '.png';
let _0x2d912d = !![];
let _0x484915 = null;
let _0x4eb24e = null;
let _0x5b04d6 = 0x3c;
let _0x20470b = 0x2d;
const _0xc7006d = {};
const _0x368b50 = new Image();
_0x368b50['src'] = 'assets/yanito932.png';
_0xc7006d['assets/yanito932.png'] = _0x368b50;
function _0x13e4f0(_0x3c22db) {
    if (!_0xc7006d[_0x3c22db] || !_0xc7006d[_0x3c22db]['complete'] && _0xc7006d[_0x3c22db]['naturalWidth'] === 0x0 && _0xc7006d[_0x3c22db]['naturalHeight'] === 0x0) {
        const _0x36463f = new Image();
        _0x36463f['src'] = _0x3c22db;
        _0xc7006d[_0x3c22db] = _0x36463f;
    }
    return _0xc7006d[_0x3c22db];
}
function _0x516a90(_0x53dc9a, _0x5ec98b, _0x1b3659, _0x1b0d31, _0x151466) {
    try {
        const _0x3d34f1 = 'assets/' + (_0x5ec98b || 'body01.png');
        const _0x3b5ee1 = _0x13e4f0(_0x3d34f1);
        if (_0x3b5ee1['complete'] && _0x3b5ee1['naturalWidth'] > 0x0) {
            _0x53dc9a['drawImage'](_0x3b5ee1, -_0x1b0d31 / 0x2, -_0x151466 / 0x2, _0x1b0d31, _0x151466);
        }
        if (_0x1b3659 === null || _0x1b3659 === undefined)
            return;
        const _0x1ada4f = 'assets/' + _0x1b3659;
        const _0x18e878 = _0x13e4f0(_0x1ada4f);
        if (_0x18e878['complete'] && _0x18e878['naturalWidth'] > 0x0) {
            _0x53dc9a['drawImage'](_0x18e878, -_0x1b0d31 / 0x2, -_0x151466 / 0x2, _0x1b0d31, _0x151466);
        }
    } catch (_0x3d258f) {
    }
}
function _0x3faea2() {
    const _0x4363c6 = document['getElementById']('body-skin-grid');
    const _0x1d8df5 = document['getElementById']('eyes-skin-grid');
    if (!_0x4363c6 || !_0x1d8df5)
        return;
    _0x4363c6['innerHTML'] = '';
    _0x522e58['forEach'](_0x4da1be => {
        const _0x528638 = document['createElement']('button');
        _0x528638['className'] = 'skin-btn' + (_0x4da1be === _0x1e4260 ? '\x20selected' : '');
        const _0x4be6b3 = document['createElement']('img');
        _0x4be6b3['src'] = 'assets/' + _0x4da1be;
        _0x528638['appendChild'](_0x4be6b3);
        _0x528638['onclick'] = () => {
            _0x1e4260 = _0x4da1be;
            localStorage['setItem']('selectedBody', _0x4da1be);
            _0x4363c6['querySelectorAll']('.skin-btn')['forEach'](_0x49deeb => _0x49deeb['classList']['remove']('selected'));
            _0x528638['classList']['add']('selected');
        };
        _0x4363c6['appendChild'](_0x528638);
    });
    _0x1d8df5['innerHTML'] = '';
    _0x10e3ec['forEach'](_0x4ce112 => {
        const _0x2c3081 = document['createElement']('button');
        _0x2c3081['className'] = 'skin-btn' + (_0x4ce112 === _0x508b6e ? '\x20selected' : '');
        const _0x5b3b2d = document['createElement']('img');
        _0x5b3b2d['src'] = 'assets/' + _0x4ce112;
        _0x2c3081['appendChild'](_0x5b3b2d);
        _0x2c3081['onclick'] = () => {
            _0x508b6e = _0x4ce112;
            localStorage['setItem']('selectedEyes', _0x4ce112);
            _0x1d8df5['querySelectorAll']('.skin-btn')['forEach'](_0x17447a => _0x17447a['classList']['remove']('selected'));
            _0x2c3081['classList']['add']('selected');
        };
        _0x1d8df5['appendChild'](_0x2c3081);
    });
}
function _0x25b679(_0x422241) {
    if (!_0x1d4674['MAP']['columns'] || !_0x1d4674['CAMERA']['width'])
        return;
    const _0x1fefb0 = Math['max'](0x0, _0x1d4674['MAP']['columns'] * _0x1d4674['MAP']['tileSize'] - _0x1d4674['CAMERA']['width']);
    const _0xd02757 = Math['max'](0x0, _0x1d4674['MAP']['rows'] * _0x1d4674['MAP']['tileSize'] - _0x1d4674['CAMERA']['height']);
    if (_0x484915 === null) {
        _0x484915 = _0x1fefb0 / 0x2;
        _0x4eb24e = _0xd02757 / 0x2;
    }
    _0x484915 += _0x5b04d6 * _0x422241;
    _0x4eb24e += _0x20470b * _0x422241;
    if (_0x484915 <= 0x0) {
        _0x484915 = 0x0;
        _0x5b04d6 = Math['abs'](_0x5b04d6);
    } else if (_0x484915 >= _0x1fefb0) {
        _0x484915 = _0x1fefb0;
        _0x5b04d6 = -Math['abs'](_0x5b04d6);
    }
    if (_0x4eb24e <= 0x0) {
        _0x4eb24e = 0x0;
        _0x20470b = Math['abs'](_0x20470b);
    } else if (_0x4eb24e >= _0xd02757) {
        _0x4eb24e = _0xd02757;
        _0x20470b = -Math['abs'](_0x20470b);
    }
    _0x1d4674['CAMERA']['x'] = _0x484915;
    _0x1d4674['CAMERA']['y'] = _0x4eb24e;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x145ae8 = document['getElementById']('play-btn');
    const _0x397871 = document['getElementById']('username-input');
    const _0x4b0fe8 = localStorage['getItem']('playerName');
    if (_0x4b0fe8 && _0x397871) {
        _0x397871['value'] = _0x4b0fe8;
    }
    const _0x1a4106 = () => {
        _0x36e3fc['play']('wait');
        document['removeEventListener']('click', _0x1a4106);
        document['removeEventListener']('keydown', _0x1a4106);
        document['removeEventListener']('touchstart', _0x1a4106);
    };
    document['addEventListener']('click', _0x1a4106, { 'once': !![] });
    document['addEventListener']('keydown', _0x1a4106, { 'once': !![] });
    document['addEventListener']('touchstart', _0x1a4106, { 'once': !![] });
    if (_0x145ae8) {
        _0x145ae8['addEventListener']('click', () => {
            const _0x423a31 = window['_FB'] && window['_FB']['_currentUser'];
            const _0xa52fb7 = window['_FB'] && window['_FB']['_userData'];
            let _0x571f37 = !![];
            if (_0x423a31 && _0xa52fb7 && _0xa52fb7['username']) {
                _0x3b58ee = _0xa52fb7['username'];
                _0x571f37 = ![];
            } else {
                const _0x5b6299 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x3b58ee = 'user' + _0x5b6299;
                _0x571f37 = !![];
            }
            const _0x14e0e6 = _0x571f37 ? 'body01.png' : _0x1e4260;
            const _0x158cd2 = _0x571f37 ? 'eyes4.png' : _0x508b6e;
            const _0x1ef258 = !_0x571f37 && _0xa52fb7 && _0xa52fb7['photoURL'] ? _0xa52fb7['photoURL'] : '';
            const _0x1a719e = !_0x571f37 && _0x423a31 ? _0x423a31['uid'] : '';
            localStorage['setItem']('playerName', _0x3b58ee);
            _0x2d912d = ![];
            _0x1d4674['CAMERA']['x'] = null;
            _0x1d4674['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x195fbe = document['getElementById']('chat-log-wrap');
            if (_0x195fbe)
                _0x195fbe['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x514bb1 = document['getElementById']('controls-hint');
            if (_0x514bb1 && !_0x657aac)
                _0x514bb1['style']['display'] = 'block';
            _0xf159d();
            if (_0x657aac) {
                const _0x183a2c = document['getElementById']('leaderboard-list');
                const _0x1beb45 = document['getElementById']('leaderboard-toggle');
                if (_0x183a2c) {
                    _0x183a2c['style']['display'] = 'none';
                    if (_0x1beb45)
                        _0x1beb45['style']['transform'] = 'rotate(180deg)';
                }
                const _0x21aa55 = document['getElementById']('role-list-items');
                const _0x2c2e7e = document['getElementById']('role-list-toggle');
                if (_0x21aa55) {
                    _0x21aa55['style']['display'] = 'none';
                    if (_0x2c2e7e)
                        _0x2c2e7e['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x57e21b = !_0x571f37 && _0xa52fb7 ? {
                'townWins': _0xa52fb7['townWins'] || 0x0,
                'mafiaWins': _0xa52fb7['mafiaWins'] || 0x0,
                'deaths': _0xa52fb7['deaths'] || 0x0,
                'townLosses': _0xa52fb7['townLosses'] || 0x0,
                'mafiaLosses': _0xa52fb7['mafiaLosses'] || 0x0
            } : null;
            const _0x1c8881 = JSON['stringify']({
                'type': 'join',
                'name': _0x3b58ee,
                'token': _0x61e54a,
                'body': _0x14e0e6,
                'eyes': _0x158cd2,
                'isGuest': _0x571f37,
                'uid': _0x1a719e,
                'photoURL': _0x1ef258,
                'accountStats': _0x57e21b
            });
            if (_0x5b2bc2 && _0x5b2bc2['readyState'] === WebSocket['OPEN']) {
                _0x5b2bc2['send'](_0x1c8881);
            } else if (!_0x5b2bc2 || _0x5b2bc2['readyState'] === WebSocket['CLOSED'] || _0x5b2bc2['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x1c8881;
                _0x3cf5cc();
            }
        });
    }
    _0x3faea2();
    _0x3cf5cc();
    _0x34f084();
    _0x5ec3b5();
    _0x41d04c();
    _0x28106e();
});
const _0x35cbe8 = [
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
let _0x21f242 = 'Town';
let _0x431fca = 0x0;
function _0x2396bd() {
    const _0x59a8fa = document['getElementById']('role-index-main-tabs');
    const _0x3839a0 = document['getElementById']('role-index-tabs');
    const _0x4636e5 = document['getElementById']('role-index-body');
    if (!_0x3839a0 || !_0x4636e5)
        return;
    if (_0x59a8fa) {
        _0x59a8fa['innerHTML'] = '';
        const _0x52c7aa = document['createElement']('button');
        _0x52c7aa['className'] = 'role-index-main-tab-btn\x20main-town' + (_0x21f242 === 'Town' ? '\x20active' : '');
        _0x52c7aa['textContent'] = 'TOWN';
        _0x52c7aa['addEventListener']('click', () => {
            _0x21f242 = 'Town';
            _0x431fca = 0x0;
            _0x2396bd();
        });
        _0x59a8fa['appendChild'](_0x52c7aa);
        const _0x14e563 = document['createElement']('button');
        _0x14e563['className'] = 'role-index-main-tab-btn\x20main-mafia' + (_0x21f242 === 'Mafia' ? '\x20active' : '');
        _0x14e563['textContent'] = 'MAFIA';
        _0x14e563['addEventListener']('click', () => {
            _0x21f242 = 'Mafia';
            _0x431fca = 0x0;
            _0x2396bd();
        });
        _0x59a8fa['appendChild'](_0x14e563);
    }
    const _0x5de3d1 = _0x35cbe8['filter'](_0x55cfb9 => _0x55cfb9['faction'] === _0x21f242);
    _0x3839a0['innerHTML'] = '';
    _0x5de3d1['forEach']((_0x3f06c7, _0x1171af) => {
        const _0x38b548 = document['createElement']('button');
        _0x38b548['className'] = 'role-index-tab-btn' + (_0x3f06c7['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x1171af === _0x431fca ? '\x20active' : '');
        _0x38b548['textContent'] = _0x3f06c7['name'];
        _0x38b548['addEventListener']('click', () => {
            _0x431fca = _0x1171af;
            _0x2396bd();
        });
        _0x3839a0['appendChild'](_0x38b548);
    });
    const _0x20be74 = _0x5de3d1[_0x431fca] || _0x5de3d1[0x0];
    _0x4636e5['innerHTML'] = '';
    if (!_0x20be74)
        return;
    const _0x1f640c = document['createElement']('div');
    _0x1f640c['className'] = 'role-index-title-row';
    const _0xf992ef = document['createElement']('span');
    _0xf992ef['className'] = 'role-index-name\x20' + (_0x20be74['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0xf992ef['textContent'] = _0x20be74['name'];
    _0x1f640c['appendChild'](_0xf992ef);
    const _0xc4f523 = document['createElement']('span');
    _0xc4f523['className'] = 'role-index-faction-badge\x20' + (_0x20be74['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0xc4f523['textContent'] = _0x20be74['faction'];
    _0x1f640c['appendChild'](_0xc4f523);
    _0x4636e5['appendChild'](_0x1f640c);
    _0x20be74['paragraphs']['forEach'](_0x196a06 => {
        const _0x497b9c = document['createElement']('p');
        _0x497b9c['className'] = 'role-index-desc-paragraph';
        _0x497b9c['innerHTML'] = _0x196a06;
        _0x4636e5['appendChild'](_0x497b9c);
    });
}
function _0x28106e() {
    const _0x2a62ff = document['getElementById']('role-index-btn');
    const _0x4920de = document['getElementById']('role-index-modal');
    const _0x235352 = document['getElementById']('close-role-index-btn');
    const _0x4be0ef = document['getElementById']('mob-top-index');
    if (_0x2a62ff && _0x4920de) {
        _0x2a62ff['addEventListener']('click', _0x2af72e => {
            _0x2af72e['stopPropagation']();
            if (_0x4920de['style']['display'] === 'none' || !_0x4920de['style']['display']) {
                _0x2396bd();
                _0x4920de['style']['display'] = 'flex';
            } else {
                _0x4920de['style']['display'] = 'none';
            }
        });
    }
    if (_0x235352 && _0x4920de) {
        _0x235352['addEventListener']('click', _0x2f4e62 => {
            _0x2f4e62['stopPropagation']();
            _0x4920de['style']['display'] = 'none';
        });
    }
    if (_0x4be0ef && _0x4920de) {
        _0x4be0ef['addEventListener']('click', _0x3e5c7a => {
            _0x3e5c7a['stopPropagation']();
            if (_0x4920de['style']['display'] === 'none' || !_0x4920de['style']['display']) {
                _0x2396bd();
                _0x4920de['style']['display'] = 'flex';
            } else {
                _0x4920de['style']['display'] = 'none';
            }
        });
    }
}
function _0x5ec3b5() {
    const _0x172f4a = document['getElementById']('settings-btn');
    const _0xe6071 = document['getElementById']('settings-panel');
    const _0xa6b1e7 = document['getElementById']('close-settings-btn');
    const _0x44059b = document['getElementById']('setting-mouse-relative');
    if (_0x44059b) {
        _0x44059b['checked'] = _0x2c07a2;
        _0x44059b['addEventListener']('change', () => {
            _0x2c07a2 = _0x44059b['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x2c07a2 ? 'true' : 'false');
        });
    }
    const _0x196ead = document['getElementById']('setting-music-volume');
    const _0x4d3a9e = document['getElementById']('setting-music-volume-display');
    function _0x128e95(_0x73bd11) {
        const _0x333eee = (_0x73bd11['value'] - _0x73bd11['min']) / (_0x73bd11['max'] - _0x73bd11['min']) * 0x64;
        _0x73bd11['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x333eee + '%,\x20#444\x20' + _0x333eee + '%)';
    }
    if (_0x196ead) {
        const _0x34e784 = _0x36e3fc['getVolume']();
        const _0x3cb650 = Math['round'](_0x34e784 * 0x64);
        _0x196ead['value'] = _0x3cb650;
        if (_0x4d3a9e)
            _0x4d3a9e['textContent'] = _0x3cb650 + '%';
        _0x128e95(_0x196ead);
        _0x196ead['addEventListener']('input', () => {
            const _0x2f5583 = parseInt(_0x196ead['value'], 0xa);
            if (_0x4d3a9e)
                _0x4d3a9e['textContent'] = _0x2f5583 + '%';
            _0x128e95(_0x196ead);
            _0x36e3fc['setVolume'](_0x2f5583 / 0x64);
            _0x36e3fc['setMuted'](_0x2f5583 === 0x0);
        });
    }
    if (_0x172f4a && _0xe6071) {
        _0x172f4a['addEventListener']('click', _0x2dbaec => {
            _0x2dbaec['stopPropagation']();
            _0xe6071['style']['display'] = _0xe6071['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0xa6b1e7 && _0xe6071) {
        _0xa6b1e7['addEventListener']('click', () => {
            _0xe6071['style']['display'] = 'none';
        });
    }
    const _0x4941fa = document['getElementById']('mayor-confirm-yes');
    const _0x2cc3f3 = document['getElementById']('mayor-confirm-no');
    const _0x224667 = document['getElementById']('mayor-confirm-dialog');
    if (_0x4941fa && _0x224667) {
        _0x4941fa['addEventListener']('click', () => {
            if (_0x5b2bc2 && _0x5b2bc2['readyState'] === WebSocket['OPEN']) {
                _0x5b2bc2['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x224667['style']['display'] = 'none';
        });
    }
    if (_0x2cc3f3 && _0x224667) {
        _0x2cc3f3['addEventListener']('click', () => {
            _0x224667['style']['display'] = 'none';
        });
    }
    const _0x2ffcfb = document['getElementById']('close-ability-btn');
    if (_0x2ffcfb) {
        _0x2ffcfb['addEventListener']('click', () => {
            const _0x4acf50 = document['getElementById']('ability-ui');
            if (_0x4acf50)
                _0x4acf50['style']['display'] = 'none';
        });
    }
}
let _0x833add = '';
function _0x123c7c(_0x331357) {
    const _0x21b3d5 = document['getElementById']('vote-tally-panel');
    const _0xed0cdf = document['getElementById']('vote-tally-list');
    if (!_0x21b3d5 || !_0xed0cdf)
        return;
    if (_0x331357['state'] !== 'DAY_VOTE') {
        _0x21b3d5['style']['display'] = 'none';
        _0x833add = '';
        return;
    }
    _0x21b3d5['style']['display'] = 'block';
    const _0x1d101d = {};
    for (const _0x126013 in _0x595265) {
        if (!_0x595265[_0x126013]['isDead'])
            _0x1d101d[_0x126013] = 0x0;
    }
    if (_0x131772 && !_0x33a7db['isDead'])
        _0x1d101d[_0x131772] = 0x0;
    const _0x16f6cd = _0x331357['votes'] || {};
    for (const _0x4af623 in _0x16f6cd) {
        const _0x482875 = _0x16f6cd[_0x4af623];
        const _0x2c8305 = _0x331357['mayorRevealed'] && _0x331357['mayorRevealed'][_0x4af623] ? 0x2 : 0x1;
        _0x1d101d[_0x482875] = (_0x1d101d[_0x482875] || 0x0) + _0x2c8305;
    }
    let _0x484696 = 0x0;
    const _0x4bbba9 = _0x331357['skips'] || {};
    for (const _0x20d411 in _0x4bbba9) {
        _0x484696 += Number(_0x4bbba9[_0x20d411]) || 0x1;
    }
    const _0xc242ef = JSON['stringify'](_0x1d101d) + '_' + _0x484696 + '_' + _0x33a7db['isDead'];
    if (_0xc242ef === _0x833add)
        return;
    _0x833add = _0xc242ef;
    _0xed0cdf['innerHTML'] = '';
    for (const _0x4f4fb3 in _0x1d101d) {
        const _0x3a2a5f = parseInt(_0x4f4fb3);
        const _0x512dd9 = _0x3a2a5f === _0x131772 ? _0x3b58ee : _0x595265[_0x4f4fb3] ? _0x595265[_0x4f4fb3]['name'] : 'Player\x20' + _0x4f4fb3;
        const _0x5a899e = document['createElement']('div');
        _0x5a899e['className'] = 'vote-tally-entry';
        const _0x2b42db = document['createElement']('span');
        _0x2b42db['textContent'] = _0x512dd9;
        const _0x67b325 = document['createElement']('span');
        _0x67b325['className'] = 'vote-count';
        _0x67b325['textContent'] = _0x1d101d[_0x4f4fb3] + '\x20vote' + (_0x1d101d[_0x4f4fb3] === 0x1 ? '' : 's');
        _0x5a899e['appendChild'](_0x2b42db);
        _0x5a899e['appendChild'](_0x67b325);
        if (_0x3a2a5f !== _0x131772 && !_0x33a7db['isDead']) {
            _0x5a899e['style']['cursor'] = 'pointer';
            _0x5a899e['title'] = 'Vote\x20for\x20' + _0x512dd9;
            _0x5a899e['addEventListener']('click', _0x5a7ae0 => {
                _0x5a7ae0['stopPropagation']();
                if (_0x5b2bc2 && _0x5b2bc2['readyState'] === WebSocket['OPEN']) {
                    _0x5b2bc2['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x512dd9
                    }));
                }
            });
        }
        _0xed0cdf['appendChild'](_0x5a899e);
    }
    const _0x3d22d8 = document['createElement']('div');
    _0x3d22d8['className'] = 'vote-tally-skip';
    _0x3d22d8['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x484696 + '</span>';
    if (!_0x33a7db['isDead']) {
        _0x3d22d8['style']['cursor'] = 'pointer';
        _0x3d22d8['title'] = 'Click\x20to\x20skip\x20vote';
        _0x3d22d8['addEventListener']('click', _0xddf3dc => {
            _0xddf3dc['stopPropagation']();
            if (_0x5b2bc2 && _0x5b2bc2['readyState'] === WebSocket['OPEN']) {
                _0x5b2bc2['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0xed0cdf['appendChild'](_0x3d22d8);
}
let _0x2216d7 = null;
let _0x3d2245 = null;
let _0x332943 = null;
let _0xdf7368 = null;
let _0x410bdc = null;
function _0x22453b() {
    if (_0x5b2bc2 && _0x5b2bc2['readyState'] === WebSocket['OPEN']) {
        _0x5b2bc2['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x2216d7,
            'abilityTarget': _0x3d2245,
            'killTarget': _0x332943
        }));
    }
}
function _0x586531() {
    if (_0x5b2bc2 && _0x5b2bc2['readyState'] === WebSocket['OPEN']) {
        _0x5b2bc2['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'blackmailTarget': _0xdf7368,
            'killTarget': _0x410bdc
        }));
    }
}
function _0x2ce9fc() {
    const _0x28d253 = document['getElementById']('ability-ui-body');
    if (!_0x28d253)
        return;
    _0x28d253['innerHTML'] = '';
    if (_0x2f26d8 === 'Celebrity' || _0x2f26d8 === 'Mayor') {
        const _0x2944a7 = document['createElement']('div');
        _0x2944a7['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x2944a7['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x28d253['appendChild'](_0x2944a7);
        return;
    }
    if (_0x2f26d8 === 'Blackmailer') {
        const _0x46d023 = document['createElement']('div');
        _0x46d023['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x46d023['innerText'] = 'Blackmail\x20Target\x20(Silences\x20for\x20full\x20day):';
        _0x28d253['appendChild'](_0x46d023);
        const _0x376acd = document['createElement']('div');
        _0x376acd['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x49b3c5 = document['createElement']('button');
        _0x49b3c5['className'] = 'layer-btn';
        _0x49b3c5['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x49b3c5['innerText'] = 'No\x20one';
        if (_0xdf7368 === null)
            _0x49b3c5['classList']['add']('active');
        _0x49b3c5['onclick'] = () => {
            _0xdf7368 = null;
            _0x586531();
            _0x2ce9fc();
        };
        _0x376acd['appendChild'](_0x49b3c5);
        for (const _0x295e7f in _0x595265) {
            const _0x5ca435 = _0x595265[_0x295e7f];
            if (_0x5ca435['isDead'])
                continue;
            const _0x122baf = document['createElement']('button');
            _0x122baf['className'] = 'layer-btn';
            _0x122baf['innerText'] = _0x5ca435['name'];
            if (_0xdf7368 === parseInt(_0x295e7f))
                _0x122baf['classList']['add']('active');
            _0x122baf['onclick'] = () => {
                _0xdf7368 = parseInt(_0x295e7f);
                _0x586531();
                _0x2ce9fc();
            };
            _0x376acd['appendChild'](_0x122baf);
        }
        if (!_0x33a7db['isDead']) {
            const _0xbaff2b = document['createElement']('button');
            _0xbaff2b['className'] = 'layer-btn';
            _0xbaff2b['style']['cssText'] = 'grid-column:\x20span\x202;';
            _0xbaff2b['innerText'] = _0x3b58ee + '\x20(Self\x20-\x20Decoy)';
            if (_0xdf7368 === _0x131772)
                _0xbaff2b['classList']['add']('active');
            _0xbaff2b['onclick'] = () => {
                _0xdf7368 = _0x131772;
                _0x586531();
                _0x2ce9fc();
            };
            _0x376acd['appendChild'](_0xbaff2b);
        }
        _0x28d253['appendChild'](_0x376acd);
        const _0x1b7095 = document['createElement']('div');
        _0x1b7095['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x1b7095['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x28d253['appendChild'](_0x1b7095);
        const _0xde27b = document['createElement']('div');
        _0xde27b['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x22b06c = document['createElement']('button');
        _0x22b06c['className'] = 'layer-btn';
        _0x22b06c['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x22b06c['innerText'] = 'No\x20one';
        if (!_0x410bdc && !_0x1d4674['CURRENT_TARGET'])
            _0x22b06c['classList']['add']('active');
        _0x22b06c['onclick'] = () => {
            _0x410bdc = null;
            _0x1d4674['CURRENT_TARGET'] = null;
            _0x586531();
            _0x2ce9fc();
        };
        _0xde27b['appendChild'](_0x22b06c);
        for (const _0x118feb in _0x595265) {
            const _0x2b7696 = _0x595265[_0x118feb];
            if (_0x2b7696['isDead'])
                continue;
            const _0x1f82f9 = document['createElement']('button');
            _0x1f82f9['className'] = 'layer-btn';
            _0x1f82f9['innerText'] = _0x2b7696['name'];
            if (_0x410bdc === parseInt(_0x118feb) || _0x1d4674['CURRENT_TARGET'] === parseInt(_0x118feb))
                _0x1f82f9['classList']['add']('active');
            _0x1f82f9['onclick'] = () => {
                _0x410bdc = parseInt(_0x118feb);
                _0x1d4674['CURRENT_TARGET'] = parseInt(_0x118feb);
                _0x586531();
                _0x2ce9fc();
            };
            _0xde27b['appendChild'](_0x1f82f9);
        }
        _0x28d253['appendChild'](_0xde27b);
        return;
    }
    if (_0x2f26d8 === 'Skinwalker') {
        const _0x9c4578 = document['createElement']('div');
        _0x9c4578['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x9c4578['innerText'] = 'Transform\x20into:';
        _0x28d253['appendChild'](_0x9c4578);
        const _0x134f1b = document['createElement']('div');
        _0x134f1b['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0xda8e6b = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x2ec270 = _0x3c789e => {
            if (_0x1d4674['ROLES_IN_GAME'] && Array['isArray'](_0x1d4674['ROLES_IN_GAME'])) {
                return _0x1d4674['ROLES_IN_GAME']['includes'](_0x3c789e);
            }
            if (_0x1d4674['ROLE_LIST_RAW'] && _0x1d4674['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x1d4674['ROLE_LIST_RAW']['some'](_0x149eba => _0x149eba['name'] === _0x3c789e && !_0x149eba['isDead']);
            }
            return ![];
        };
        const _0x542c59 = [
            'None',
            ..._0xda8e6b['filter'](_0x2ec270)
        ];
        _0x542c59['forEach'](_0x2e0a70 => {
            const _0xbf029b = document['createElement']('button');
            _0xbf029b['className'] = 'layer-btn';
            _0xbf029b['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0xbf029b['innerText'] = _0x2e0a70;
            const _0x500521 = _0x2e0a70 === 'None' && !_0x2216d7 || _0x2216d7 === _0x2e0a70;
            if (_0x500521)
                _0xbf029b['classList']['add']('active');
            const _0x2800ad = _0x2e0a70 !== 'None' && _0x1d4674['SKINWALKER_LAST_ROLE'] && _0x1d4674['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x2e0a70['toLowerCase']();
            if (_0x2800ad) {
                _0xbf029b['style']['opacity'] = '0.45';
                _0xbf029b['style']['cursor'] = 'not-allowed';
                _0xbf029b['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0xbf029b['onclick'] = () => {
                    _0x531c33('You\x20cannot\x20transform\x20into\x20' + _0x2e0a70 + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0xbf029b['onclick'] = () => {
                    _0x2216d7 = _0x2e0a70 === 'None' ? null : _0x2e0a70;
                    _0x22453b();
                    _0x2ce9fc();
                };
            }
            _0x134f1b['appendChild'](_0xbf029b);
        });
        _0x28d253['appendChild'](_0x134f1b);
        if (_0x2ec270('Vigilante')) {
            const _0x2d5cab = document['createElement']('div');
            _0x2d5cab['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x2d5cab['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x28d253['appendChild'](_0x2d5cab);
        }
        if (_0x2216d7 === 'Vigilante') {
            const _0x380b1d = document['createElement']('div');
            _0x380b1d['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x380b1d['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x28d253['appendChild'](_0x380b1d);
        } else if (_0x2216d7 && _0x2216d7 !== 'Celebrity') {
            const _0x321329 = document['createElement']('div');
            _0x321329['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x321329['innerText'] = 'Use\x20' + _0x2216d7 + '\x20ability\x20on:';
            _0x28d253['appendChild'](_0x321329);
            const _0x5c0c20 = document['createElement']('div');
            _0x5c0c20['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x9bab8b = document['createElement']('button');
            _0x9bab8b['className'] = 'layer-btn';
            _0x9bab8b['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x9bab8b['innerText'] = 'No\x20one';
            if (!_0x3d2245)
                _0x9bab8b['classList']['add']('active');
            _0x9bab8b['onclick'] = () => {
                _0x3d2245 = null;
                _0x22453b();
                _0x2ce9fc();
            };
            _0x5c0c20['appendChild'](_0x9bab8b);
            for (const _0x137a42 in _0x595265) {
                const _0x33727c = _0x595265[_0x137a42];
                if (_0x33727c['isDead'])
                    continue;
                const _0x9f6bb7 = document['createElement']('button');
                _0x9f6bb7['className'] = 'layer-btn';
                _0x9f6bb7['innerText'] = _0x33727c['name'];
                if (_0x3d2245 === parseInt(_0x137a42))
                    _0x9f6bb7['classList']['add']('active');
                _0x9f6bb7['onclick'] = () => {
                    _0x3d2245 = parseInt(_0x137a42);
                    _0x22453b();
                    _0x2ce9fc();
                };
                _0x5c0c20['appendChild'](_0x9f6bb7);
            }
            _0x28d253['appendChild'](_0x5c0c20);
        }
        const _0x407c6a = document['createElement']('div');
        _0x407c6a['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x407c6a['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x28d253['appendChild'](_0x407c6a);
        const _0xedbca2 = document['createElement']('div');
        _0xedbca2['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x1ac450 = document['createElement']('button');
        _0x1ac450['className'] = 'layer-btn';
        _0x1ac450['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x1ac450['innerText'] = 'No\x20one';
        if (!_0x332943 && !_0x1d4674['CURRENT_TARGET'])
            _0x1ac450['classList']['add']('active');
        _0x1ac450['onclick'] = () => {
            _0x332943 = null;
            _0x1d4674['CURRENT_TARGET'] = null;
            _0x22453b();
            _0x2ce9fc();
        };
        _0xedbca2['appendChild'](_0x1ac450);
        for (const _0x33f5ab in _0x595265) {
            const _0x34d930 = _0x595265[_0x33f5ab];
            if (_0x34d930['isDead'])
                continue;
            const _0x276d19 = document['createElement']('button');
            _0x276d19['className'] = 'layer-btn';
            _0x276d19['innerText'] = _0x34d930['name'];
            if (_0x332943 === parseInt(_0x33f5ab) || _0x1d4674['CURRENT_TARGET'] === parseInt(_0x33f5ab))
                _0x276d19['classList']['add']('active');
            _0x276d19['onclick'] = () => {
                _0x332943 = parseInt(_0x33f5ab);
                _0x1d4674['CURRENT_TARGET'] = parseInt(_0x33f5ab);
                _0x22453b();
                _0x2ce9fc();
            };
            _0xedbca2['appendChild'](_0x276d19);
        }
        _0x28d253['appendChild'](_0xedbca2);
        return;
    }
    let _0x4f3aaf = '';
    let _0x1046b9 = ![];
    if (_0x2f26d8 === 'Doctor') {
        _0x4f3aaf = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x1046b9 = !![];
    } else if (_0x2f26d8 === 'Investigator') {
        _0x4f3aaf = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x2f26d8 === 'Tracker') {
        _0x4f3aaf = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x2f26d8 === 'Archer') {
        _0x4f3aaf = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x2f26d8 === 'Escort') {
        _0x4f3aaf = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x2f26d8 === 'Vigilante') {
        _0x4f3aaf = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0xa29198 = document['createElement']('div');
    _0xa29198['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0xa29198['innerText'] = _0x4f3aaf;
    _0x28d253['appendChild'](_0xa29198);
    const _0x3f5f6d = document['createElement']('div');
    _0x3f5f6d['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x432f77 = document['createElement']('button');
    _0x432f77['className'] = 'layer-btn';
    _0x432f77['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x432f77['innerText'] = 'No\x20one';
    if (_0x1d4674['CURRENT_TARGET'] === null)
        _0x432f77['classList']['add']('active');
    _0x432f77['onclick'] = () => {
        _0x1d4674['CURRENT_TARGET'] = null;
        if (_0x5b2bc2 && _0x5b2bc2['readyState'] === WebSocket['OPEN']) {
            _0x5b2bc2['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x2ce9fc();
    };
    _0x3f5f6d['appendChild'](_0x432f77);
    for (const _0xbfb1d4 in _0x595265) {
        const _0x1aac2d = _0x595265[_0xbfb1d4];
        if (_0x1aac2d['isDead'])
            continue;
        const _0x311821 = document['createElement']('button');
        _0x311821['className'] = 'layer-btn';
        _0x311821['innerText'] = _0x1aac2d['name'];
        if (_0x1d4674['CURRENT_TARGET'] === parseInt(_0xbfb1d4))
            _0x311821['classList']['add']('active');
        _0x311821['onclick'] = () => {
            _0x1d4674['CURRENT_TARGET'] = parseInt(_0xbfb1d4);
            if (_0x5b2bc2 && _0x5b2bc2['readyState'] === WebSocket['OPEN']) {
                _0x5b2bc2['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0xbfb1d4)
                }));
            }
            _0x2ce9fc();
        };
        _0x3f5f6d['appendChild'](_0x311821);
    }
    if (_0x1046b9 && !_0x33a7db['isDead']) {
        const _0x1164aa = document['createElement']('button');
        _0x1164aa['className'] = 'layer-btn';
        _0x1164aa['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x1164aa['innerText'] = _0x3b58ee + '\x20(Self)';
        if (_0x1d4674['CURRENT_TARGET'] === _0x131772)
            _0x1164aa['classList']['add']('active');
        _0x1164aa['onclick'] = () => {
            _0x1d4674['CURRENT_TARGET'] = _0x131772;
            if (_0x5b2bc2 && _0x5b2bc2['readyState'] === WebSocket['OPEN']) {
                _0x5b2bc2['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x131772
                }));
            }
            _0x2ce9fc();
        };
        _0x3f5f6d['appendChild'](_0x1164aa);
    }
    _0x28d253['appendChild'](_0x3f5f6d);
}
function _0x3cf5cc() {
    if (_0x5b2bc2 && (_0x5b2bc2['readyState'] === WebSocket['OPEN'] || _0x5b2bc2['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x314a7f = new URLSearchParams();
    if (_0x61e54a)
        _0x314a7f['set']('token', _0x61e54a);
    _0x314a7f['set']('ngrok-skip-browser-warning', 'true');
    const _0x170566 = 'wss://opening-tales-fiscal-murphy.trycloudflare.com';
    const _0x263a5b = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x170566;
    const _0x3a0142 = _0x263a5b + '/?' + _0x314a7f['toString']();
    _0x5b2bc2 = new WebSocket(_0x3a0142);
    _0x5b2bc2['onopen'] = function () {
        if (!_0x2d912d && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x31a849 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x4851e1 = window['_FB'] && window['_FB']['_userData'];
                const _0x34bf90 = !(_0x31a849 && _0x4851e1 && _0x4851e1['username']);
                const _0x224910 = _0x34bf90 ? 'body01.png' : _0x1e4260;
                const _0x423f86 = _0x34bf90 ? 'eyes4.png' : _0x508b6e;
                const _0x3dcd53 = !_0x34bf90 && _0x4851e1 && _0x4851e1['photoURL'] ? _0x4851e1['photoURL'] : '';
                const _0x54dd65 = !_0x34bf90 && _0x31a849 ? _0x31a849['uid'] : '';
                const _0x233c5e = !_0x34bf90 && _0x4851e1 ? {
                    'townWins': _0x4851e1['townWins'] || 0x0,
                    'mafiaWins': _0x4851e1['mafiaWins'] || 0x0,
                    'deaths': _0x4851e1['deaths'] || 0x0,
                    'townLosses': _0x4851e1['townLosses'] || 0x0,
                    'mafiaLosses': _0x4851e1['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x3b58ee,
                    'token': _0x61e54a,
                    'body': _0x224910,
                    'eyes': _0x423f86,
                    'isGuest': _0x34bf90,
                    'uid': _0x54dd65,
                    'photoURL': _0x3dcd53,
                    'accountStats': _0x233c5e
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x5b2bc2 && _0x5b2bc2['readyState'] === WebSocket['OPEN']) {
            _0x5b2bc2['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x5b2bc2['onclose'] = _0x3f298c => {
        if (_0x3f298c['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x3f298c['code'] === 0xfa2 || _0x3f298c['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x2aa209 = document['getElementById']('disconnect-overlay');
        if (!_0x2aa209) {
            _0x2aa209 = document['createElement']('div');
            _0x2aa209['id'] = 'disconnect-overlay';
            _0x2aa209['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x2aa209['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x2aa209);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x5b2bc2['onmessage'] = _0x2e21ba => {
        const _0x119ffc = JSON['parse'](_0x2e21ba['data']);
        if (_0x119ffc['type'] === 'map_data') {
            _0x1d4674['MAP']['tileSize'] = _0x119ffc['map']['tileSize'];
            _0x1d4674['MAP']['columns'] = _0x119ffc['map']['columns'];
            _0x1d4674['MAP']['rows'] = _0x119ffc['map']['rows'];
            _0x1d4674['MAP']['layers'] = _0x119ffc['map']['layers'];
            if (_0x119ffc['map']['doors']) {
                _0x1d4674['MAP']['doors'] = _0x119ffc['map']['doors'];
                const _0x47f2c4 = _0x1d4674['MAP']['layers']['find'](_0x57a2c3 => _0x57a2c3['name'] === 'floor2');
                if (_0x47f2c4) {
                    for (const _0x47aa6b in _0x1d4674['MAP']['doors']) {
                        _0x47f2c4['data'][parseInt(_0x47aa6b)] = 0x2;
                    }
                }
            }
            if (_0x119ffc['entities'])
                _0x1d4674['ENTITIES'] = _0x119ffc['entities'];
            _0x37c8ba();
            _0x1d4674['SYSTEM']['isReady'] = !![];
            _0x5c399a();
            if (!_0x1d4674['SYSTEM']['_gameLoopRunning']) {
                _0x1d4674['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x27b6b6);
            }
            return;
        }
        if (_0x119ffc['type'] === 'init') {
            _0x131772 = _0x119ffc['id'];
            _0x2d912d = ![];
            _0xf159d();
            if (_0x657aac) {
                const _0x57460a = document['getElementById']('leaderboard-list');
                const _0x18474e = document['getElementById']('leaderboard-toggle');
                if (_0x57460a) {
                    _0x57460a['style']['display'] = 'none';
                    if (_0x18474e)
                        _0x18474e['style']['transform'] = 'rotate(180deg)';
                }
                const _0x437b54 = document['getElementById']('role-list-items');
                const _0x9977f4 = document['getElementById']('role-list-toggle');
                if (_0x437b54) {
                    _0x437b54['style']['display'] = 'none';
                    if (_0x9977f4)
                        _0x9977f4['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0xc65fb1 = _0x119ffc['isOwner'] || ![];
            _0x3b58ee = _0x119ffc['name'] || _0x3b58ee;
            _0x1d4674['MAP']['tileSize'] = _0x119ffc['map']['tileSize'];
            _0x1d4674['MAP']['columns'] = _0x119ffc['map']['columns'];
            _0x1d4674['MAP']['rows'] = _0x119ffc['map']['rows'];
            _0x1d4674['MAP']['layers'] = _0x119ffc['map']['layers'];
            if (_0x119ffc['map']['doors']) {
                _0x1d4674['MAP']['doors'] = _0x119ffc['map']['doors'];
                const _0x56ee8e = _0x1d4674['MAP']['layers']['find'](_0x418cce => _0x418cce['name'] === 'floor2');
                if (_0x56ee8e) {
                    for (const _0x4d1af3 in _0x1d4674['MAP']['doors']) {
                        _0x56ee8e['data'][parseInt(_0x4d1af3)] = 0x2;
                    }
                }
            }
            if (_0x119ffc['entities'])
                _0x1d4674['ENTITIES'] = _0x119ffc['entities'];
            if (_0x119ffc['bloodSplatters'])
                _0x16b465 = _0x119ffc['bloodSplatters'];
            if (_0x119ffc['bloodDrops'])
                _0x318444 = _0x119ffc['bloodDrops'];
            if (_0x119ffc['roleList'] && _0x119ffc['roleList']['length'] > 0x0) {
                _0x1d4674['ROLE_LIST_RAW'] = _0x119ffc['roleList'];
                _0x339587(_0x119ffc['roleList'], _0x119ffc['roleListMode']);
            }
            _0x37c8ba();
            _0x33a7db['x'] = _0x1d4674['MAP']['columns'] * _0x1d4674['MAP']['tileSize'] / 0x2;
            _0x33a7db['y'] = _0x1d4674['MAP']['rows'] * _0x1d4674['MAP']['tileSize'] / 0x2;
            _0x1d4674['CAMERA']['x'] = _0x33a7db['x'] + _0x33a7db['width'] / 0x2 - _0x1d4674['CAMERA']['width'] / 0x2;
            _0x1d4674['CAMERA']['y'] = _0x33a7db['y'] + _0x33a7db['height'] / 0x2 - _0x1d4674['CAMERA']['height'] / 0x2;
            if (_0xc65fb1) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x395580();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x526e1b = document['getElementById']('role-index-btn-wrap');
            if (_0x526e1b)
                _0x526e1b['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x1d4674['SYSTEM']['lastTime'] = performance['now']();
            _0x1d4674['SYSTEM']['isReady'] = !![];
            _0x2f0b49();
            if (!_0x1d4674['SYSTEM']['_gameLoopRunning']) {
                _0x1d4674['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x27b6b6);
            }
            return;
        } else if (_0x119ffc['type'] === 'state') {
            const _0x139886 = {};
            for (const _0x4d065c in _0x119ffc['players']) {
                if (parseInt(_0x4d065c) === _0x131772)
                    continue;
                const _0xdbadcf = _0x119ffc['players'][_0x4d065c];
                const _0x690f16 = _0x595265[_0x4d065c];
                if (_0x690f16) {
                    const _0x41b0d8 = _0xdbadcf['x'] - _0x690f16['renderX'];
                    const _0xf5b207 = _0xdbadcf['y'] - _0x690f16['renderY'];
                    const _0x5ccffb = _0x41b0d8 * _0x41b0d8 + _0xf5b207 * _0xf5b207 > 0x78 * 0x78;
                    Object['assign'](_0x690f16, _0xdbadcf);
                    if (_0x5ccffb) {
                        _0x690f16['renderX'] = _0xdbadcf['x'];
                        _0x690f16['renderY'] = _0xdbadcf['y'];
                    }
                    _0x139886[_0x4d065c] = _0x690f16;
                } else {
                    _0x139886[_0x4d065c] = {
                        ..._0xdbadcf,
                        'renderX': _0xdbadcf['x'],
                        'renderY': _0xdbadcf['y'],
                        'renderAngle': _0xdbadcf['angle'] || 0x0
                    };
                }
            }
            _0x595265 = _0x139886;
            _0x3f6d1b();
            if (_0x119ffc['players'][_0x131772]) {
                const _0x3b55f8 = _0x119ffc['players'][_0x131772];
                _0x33a7db['chats'] = _0x3b55f8['chats'] || [];
                _0x33a7db['isDead'] = _0x3b55f8['isDead'];
                _0x33a7db['hasArrow'] = _0x3b55f8['hasArrow'] || ![];
                if (_0x3b55f8['name'])
                    _0x3b58ee = _0x3b55f8['name'];
                _0x2f0b49();
                const _0x5d5d57 = Math['hypot'](_0x3b55f8['x'] - _0x33a7db['x'], _0x3b55f8['y'] - _0x33a7db['y']);
                if (_0x5d5d57 > 0xfa) {
                    _0x33a7db['x'] = _0x3b55f8['x'];
                    _0x33a7db['y'] = _0x3b55f8['y'];
                } else if (_0x5d5d57 > 0x50) {
                    _0x33a7db['x'] += (_0x3b55f8['x'] - _0x33a7db['x']) * 0.06;
                    _0x33a7db['y'] += (_0x3b55f8['y'] - _0x33a7db['y']) * 0.06;
                }
            }
            if (_0x119ffc['entities'])
                _0x1d4674['ENTITIES'] = _0x119ffc['entities'];
            if (_0x119ffc['game']) {
                _0x1d4674['GAME_STATE'] = _0x119ffc['game']['state'];
                _0x1d4674['NIGHT_ABILITY_OPEN'] = _0x119ffc['game']['nightAbilityOpen'];
                if (_0x119ffc['game']['bloodSplatters'])
                    _0x16b465 = _0x119ffc['game']['bloodSplatters'];
                if (_0x119ffc['game']['bloodDrops'])
                    _0x318444 = _0x119ffc['game']['bloodDrops'];
                if (_0x119ffc['game']['blackmailed']) {
                    _0x395d4d = new Set(_0x119ffc['game']['blackmailed']);
                } else {
                    _0x395d4d['clear']();
                }
                if (_0x119ffc['game']['mayorRevealed']) {
                    for (const _0x808917 in _0x119ffc['game']['mayorRevealed']) {
                        _0x131aa6['add'](parseInt(_0x808917));
                    }
                }
                if (_0x1d4674['LAST_STATE'] !== _0x1d4674['GAME_STATE']) {
                    if (_0x1d4674['GAME_STATE'] !== 'NIGHT') {
                        _0x1d4674['CURRENT_TARGET'] = null;
                        _0x2216d7 = null;
                        _0x3d2245 = null;
                        _0x332943 = null;
                        _0xdf7368 = null;
                        _0x410bdc = null;
                        const _0x101ad6 = document['getElementById']('ability-ui');
                        if (_0x101ad6)
                            _0x101ad6['style']['display'] = 'none';
                    }
                    if (_0x1d4674['GAME_STATE'] === 'NIGHT') {
                        _0x33a7db['chats'] = [];
                        for (const _0x25de10 in _0x595265) {
                            _0x595265[_0x25de10]['chats'] = [];
                        }
                    }
                    _0x1d4674['LAST_STATE'] = _0x1d4674['GAME_STATE'];
                    _0x433410();
                    _0x36e3fc['onStateChange'](_0x1d4674['GAME_STATE'], _0x119ffc['game']['nightAbilityOpen']);
                }
                const _0x240fb0 = document['getElementById']('phase-ui');
                if (_0x240fb0) {
                    if (_0x119ffc['game']['state'] === 'LOBBY') {
                        _0x240fb0['style']['display'] = 'none';
                    } else {
                        _0x240fb0['style']['display'] = 'block';
                    }
                    let _0x3c9eba = _0x119ffc['game']['state']['replace']('_', '\x20');
                    if (_0x119ffc['game']['state'] === 'DAY_DISCUSS') {
                        _0x3c9eba = 'DAY\x20' + (_0x119ffc['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x119ffc['game']['timer'] + 's';
                    } else if (_0x119ffc['game']['state'] === 'DAY_VOTE') {
                        _0x3c9eba = 'DAY\x20' + (_0x119ffc['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x119ffc['game']['timer'] + 's';
                    } else if (_0x119ffc['game']['state'] === 'NIGHT') {
                        const _0x4227f8 = _0x119ffc['game']['dayCount'] || 0x1;
                        if (_0x119ffc['game']['nightAbilityOpen']) {
                            _0x3c9eba = 'NIGHT\x20' + _0x4227f8 + '\x20ABILITY\x20PHASE';
                            const _0x18e24e = _0x119ffc['game']['abilityTimer'] !== undefined ? _0x119ffc['game']['abilityTimer'] : _0x119ffc['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x18e24e + 's';
                        } else {
                            _0x3c9eba = 'NIGHT\x20' + _0x4227f8;
                            document['getElementById']('phase-timer')['innerText'] = _0x119ffc['game']['timer'] + 's';
                        }
                    }
                    if (_0x119ffc['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x3c9eba;
                    }
                }
                if (_0x119ffc['game']['state'] === 'NIGHT') {
                    const _0x5c4bc5 = document['getElementById']('ability-timer-label');
                    if (_0x5c4bc5) {
                        const _0x38a4ff = _0x119ffc['game']['abilityTimer'] !== undefined ? _0x119ffc['game']['abilityTimer'] : _0x119ffc['game']['timer'];
                        _0x5c4bc5['innerText'] = _0x119ffc['game']['nightAbilityOpen'] ? _0x38a4ff + 's' : '';
                    }
                    if (_0x119ffc['game']['nightAbilityOpen'] && !_0x23f41c && !_0x33a7db['isDead']) {
                        _0x23f41c = !![];
                        _0x2ce9fc();
                        const _0x34addb = document['getElementById']('ability-ui');
                        if (_0x34addb)
                            _0x34addb['style']['display'] = 'block';
                    }
                    if (!_0x119ffc['game']['nightAbilityOpen']) {
                        const _0x1ec281 = document['getElementById']('ability-ui');
                        if (_0x1ec281 && _0x1ec281['style']['display'] === 'block') {
                            _0x1ec281['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x23f41c = ![];
                }
                if (_0x119ffc['game']['rolesInGame']) {
                    _0x1d4674['ROLES_IN_GAME'] = _0x119ffc['game']['rolesInGame'];
                }
                if (_0x119ffc['game']['skinwalkerLastRole'] !== undefined) {
                    _0x1d4674['SKINWALKER_LAST_ROLE'] = _0x119ffc['game']['skinwalkerLastRole'];
                }
                if (_0x119ffc['game']['state'] === 'NIGHT') {
                    const _0x37824f = document['getElementById']('will-ui');
                    if (_0x37824f && _0x37824f['style']['display'] === 'flex') {
                        _0x37824f['style']['display'] = 'none';
                        const _0x3e2157 = document['getElementById']('will-input');
                        if (_0x3e2157)
                            _0x3e2157['blur']();
                    }
                }
                _0x123c7c(_0x119ffc['game']);
                if (_0x119ffc['game']['roleListMode'] !== undefined) {
                    _0x1d4674['ROLE_LIST_RAW'] = _0x119ffc['game']['roleList'] || [];
                    _0x339587(_0x119ffc['game']['roleList'], _0x119ffc['game']['roleListMode']);
                }
            }
        } else if (_0x119ffc['type'] === 'teleport') {
            _0x33a7db['x'] = _0x119ffc['x'];
            _0x33a7db['y'] = _0x119ffc['y'];
            _0x33a7db['vx'] = 0x0;
            _0x33a7db['vy'] = 0x0;
            _0x1d4674['CAMERA']['x'] = null;
            if (_0x119ffc['teleportId'] !== undefined)
                _0x341f5d = _0x119ffc['teleportId'];
        } else if (_0x119ffc['type'] === 'bulk_teleport') {
            for (const _0x3cf98c in _0x119ffc['positions']) {
                const _0x20c871 = _0x119ffc['positions'][_0x3cf98c];
                if (parseInt(_0x3cf98c) === _0x131772) {
                    _0x33a7db['x'] = _0x20c871['x'];
                    _0x33a7db['y'] = _0x20c871['y'];
                    _0x33a7db['vx'] = 0x0;
                    _0x33a7db['vy'] = 0x0;
                    _0x1d4674['CAMERA']['x'] = null;
                    continue;
                }
                const _0x1c546c = _0x595265[_0x3cf98c];
                if (_0x1c546c) {
                    _0x1c546c['x'] = _0x20c871['x'];
                    _0x1c546c['y'] = _0x20c871['y'];
                    _0x1c546c['renderX'] = _0x20c871['x'];
                    _0x1c546c['renderY'] = _0x20c871['y'];
                    _0x1c546c['vx'] = 0x0;
                    _0x1c546c['vy'] = 0x0;
                }
            }
        } else if (_0x119ffc['type'] === 'player_left') {
            delete _0x595265[_0x119ffc['id']];
            _0x131aa6['delete'](parseInt(_0x119ffc['id']));
        } else if (_0x119ffc['type'] === 'map_update') {
            const _0x47b86f = _0x1d4674['MAP']['layers']['find'](_0x172390 => _0x172390['name'] === _0x119ffc['layer']);
            if (_0x47b86f) {
                _0x47b86f['data'][_0x119ffc['row'] * _0x1d4674['MAP']['columns'] + _0x119ffc['col']] = _0x119ffc['gid'];
                const _0x520406 = _0x119ffc['row'] * _0x1d4674['MAP']['columns'] + _0x119ffc['col'];
                if (_0x1d4674['MAP']['doors'] && _0x1d4674['MAP']['doors'][_0x520406]) {
                    const _0x559f67 = _0x1d4674['MAP']['layers']['find'](_0x30ad37 => _0x30ad37['name'] === 'floor2');
                    if (_0x559f67)
                        _0x559f67['data'][_0x520406] = 0x2;
                }
                const _0x22ff00 = Math['floor'](_0x119ffc['col'] * _0x1d4674['MAP']['tileSize'] / _0x1d4674['MAP']['chunkSize']);
                const _0x37cd78 = Math['floor'](_0x119ffc['row'] * _0x1d4674['MAP']['tileSize'] / _0x1d4674['MAP']['chunkSize']);
                _0x237f8f(_0x22ff00, _0x37cd78);
                _0x209d05 = null;
                _0x6611e3 = null;
            }
        } else if (_0x119ffc['type'] === 'role_assign') {
            _0x2f26d8 = _0x119ffc['role'];
            _0x33a7db['isDead'] = _0x2f26d8 === 'Spectator';
            _0x131aa6['clear']();
            _0x1d4674['CURRENT_TARGET'] = null;
            _0x2216d7 = null;
            _0x3d2245 = null;
            _0x332943 = null;
            _0xdf7368 = null;
            _0x410bdc = null;
            _0x23f41c = ![];
            const _0x12bbd6 = document['getElementById']('ability-ui');
            if (_0x12bbd6)
                _0x12bbd6['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x2f26d8;
            _0x433410();
            _0x531c33(_0x2f26d8 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x2f26d8, !![]);
            let _0x2c2932 = '';
            if (_0x2f26d8 === 'Investigator')
                _0x2c2932 = 'Investigate\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x2f26d8 === 'Tracker')
                _0x2c2932 = 'Track\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x2f26d8 === 'Doctor')
                _0x2c2932 = 'Heal\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x2f26d8 === 'Archer')
                _0x2c2932 = 'Guard\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x2f26d8 === 'Escort')
                _0x2c2932 = 'Roleblock\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x2f26d8 === 'Vigilante')
                _0x2c2932 = 'Shoot\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x2f26d8 === 'Skinwalker')
                _0x2c2932 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x2f26d8 === 'Blackmailer')
                _0x2c2932 = 'Pick\x20a\x20player\x20to\x20blackmail\x20and\x20a\x20player\x20to\x20kill\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x2f26d8 === 'Celebrity')
                _0x2c2932 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x2f26d8 === 'Mayor')
                _0x2c2932 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x531c33(_0x2c2932, !![]);
        } else if (_0x119ffc['type'] === 'mayor_reveal') {
            _0x131aa6['add'](parseInt(_0x119ffc['playerId']));
            _0x2f0b49();
            _0x433410();
        } else if (_0x119ffc['type'] === 'rolelist_update') {
            _0x1d4674['ROLE_LIST_RAW'] = _0x119ffc['list'] || [];
            _0x339587(_0x119ffc['list'], _0x119ffc['mode']);
        } else if (_0x119ffc['type'] === 'sound_event') {
            _0x36e3fc['onSoundEvent'](_0x119ffc['track']);
        } else if (_0x119ffc['type'] === 'blood_splatter') {
            _0x16b465['push']({
                'x': _0x119ffc['x'],
                'y': _0x119ffc['y']
            });
        } else if (_0x119ffc['type'] === 'blood_drop') {
            _0x318444['push']({
                'x': _0x119ffc['x'],
                'y': _0x119ffc['y']
            });
        } else if (_0x119ffc['type'] === 'day_fade') {
            _0x2dd3ac = 0x1;
            _0xb4dfff = performance['now']() + 0x3e8;
        } else if (_0x119ffc['type'] === 'player_stats_updated') {
            const _0x52df4a = parseInt(_0x119ffc['id']);
            if (_0x52df4a === _0x131772 && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x119ffc['accountStats']);
            }
            if (_0x595265[_0x119ffc['id']]) {
                _0x595265[_0x119ffc['id']]['accountStats'] = _0x119ffc['accountStats'];
            }
            _0x3f6d1b();
        } else if (_0x119ffc['type'] === 'stats_update') {
            const _0x92c791 = window['_FB'];
            if (_0x92c791 && _0x92c791['_currentUser'] && _0x92c791['_userData']) {
                const _0x583fa8 = _0x92c791['_currentUser']['uid'];
                const _0x5c690e = _0x119ffc['patch'] || {};
                const _0x417230 = _0x92c791['_userData'];
                const _0x483fdb = {
                    'townWins': (_0x417230['townWins'] || 0x0) + (_0x5c690e['townWins'] || 0x0),
                    'mafiaWins': (_0x417230['mafiaWins'] || 0x0) + (_0x5c690e['mafiaWins'] || 0x0),
                    'deaths': (_0x417230['deaths'] || 0x0) + (_0x5c690e['deaths'] || 0x0),
                    'townLosses': (_0x417230['townLosses'] || 0x0) + (_0x5c690e['townLosses'] || 0x0),
                    'mafiaLosses': (_0x417230['mafiaLosses'] || 0x0) + (_0x5c690e['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x92c791['_userData'], _0x483fdb);
                const _0x99d580 = _0x92c791['doc'](_0x92c791['db'], 'users', _0x583fa8);
                _0x92c791['updateDoc'](_0x99d580, _0x483fdb)['catch'](() => {
                });
                if (_0x5b2bc2 && _0x5b2bc2['readyState'] === WebSocket['OPEN']) {
                    _0x5b2bc2['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x483fdb
                    }));
                }
                _0x3f6d1b();
            }
        } else if (_0x119ffc['type'] === 'game_over') {
            _0x36e3fc['onStateChange']('LOBBY', ![]);
            _0x339587([], 'off');
            _0x2f26d8 = null;
            _0x33a7db['isDead'] = ![];
            _0x33a7db['hasArrow'] = ![];
            _0x16b465 = [];
            _0x318444 = [];
            _0x395d4d['clear']();
            _0x131aa6['clear']();
            _0x1d4674['CURRENT_TARGET'] = null;
            _0x2216d7 = null;
            _0x3d2245 = null;
            _0x332943 = null;
            _0xdf7368 = null;
            _0x410bdc = null;
            _0x23f41c = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x433410();
            _0x531c33('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x119ffc['type'] === 'chat_log') {
            _0x531c33(_0x119ffc['text'], ![], !!_0x119ffc['isHost'], _0x119ffc['sender']);
        } else if (_0x119ffc['type'] === 'sys_chat') {
            _0x531c33(_0x119ffc['text'], !![]);
        }
    };
}
function _0x531c33(_0x4f50ec, _0x11a43a = ![], _0x1c4bac = ![], _0x2180e7 = null) {
    const _0x3ec430 = document['getElementById']('chat-log-messages');
    const _0x5ec8d1 = document['getElementById']('chat-log-ui');
    const _0x36ecd3 = _0x5ec8d1 ? _0x5ec8d1['scrollHeight'] - _0x5ec8d1['scrollTop'] - _0x5ec8d1['clientHeight'] < 0x1e : !![];
    const _0x2a73a4 = document['createElement']('div');
    _0x2a73a4['className'] = 'chat-log-line' + (_0x11a43a ? '\x20sys-msg' : '');
    if (_0x2180e7) {
        const _0x16db0a = document['createElement']('span');
        _0x16db0a['className'] = _0x1c4bac ? 'chat-host-name' : 'chat-sender-name';
        _0x16db0a['textContent'] = _0x2180e7 + ':\x20';
        const _0x1ce5e8 = document['createElement']('span');
        _0x1ce5e8['className'] = 'chat-msg-text';
        _0x1ce5e8['textContent'] = _0x4f50ec;
        _0x2a73a4['appendChild'](_0x16db0a);
        _0x2a73a4['appendChild'](_0x1ce5e8);
    } else {
        _0x2a73a4['innerText'] = _0x4f50ec;
    }
    if (_0x3ec430)
        _0x3ec430['appendChild'](_0x2a73a4);
    if (_0x5ec8d1 && _0x36ecd3) {
        _0x5ec8d1['scrollTop'] = _0x5ec8d1['scrollHeight'];
    }
    if (_0x3ec430 && _0x3ec430['childElementCount'] > 0xc8) {
        _0x3ec430['removeChild'](_0x3ec430['firstChild']);
    }
}
function _0x300c71(_0x179abb, _0x4ec038, _0x882172) {
    const _0x42ea1b = document['createElement']('canvas');
    _0x42ea1b['width'] = _0x882172;
    _0x42ea1b['height'] = _0x882172;
    const _0xa9c49 = _0x42ea1b['getContext']('2d');
    _0xa9c49['imageSmoothingEnabled'] = ![];
    const _0x48e7c7 = 'assets/' + (_0x179abb || 'body01.png');
    const _0x38c9ee = _0x13e4f0(_0x48e7c7);
    if (_0x38c9ee['complete'] && _0x38c9ee['naturalWidth'] > 0x0)
        _0xa9c49['drawImage'](_0x38c9ee, 0x0, 0x0, _0x882172, _0x882172);
    if (_0x4ec038) {
        const _0xf17443 = 'assets/' + _0x4ec038;
        const _0x53a589 = _0x13e4f0(_0xf17443);
        if (_0x53a589['complete'] && _0x53a589['naturalWidth'] > 0x0)
            _0xa9c49['drawImage'](_0x53a589, 0x0, 0x0, _0x882172, _0x882172);
    }
    return _0x42ea1b['toDataURL']();
}
let _0x31a9e4 = '';
function _0x3f6d1b() {
    const _0x1a0aef = document['getElementById']('chat-profile-panel');
    if (!_0x1a0aef)
        return;
    const _0x2406a = [];
    if (_0x131772 !== null) {
        const _0x26fe50 = _0x1e4260 || 'body01.png';
        const _0xca72ba = _0x508b6e || 'eyes4.png';
        const _0x4efc71 = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x2406a['push']({
            'id': _0x131772,
            'name': _0x3b58ee,
            'body': _0x26fe50,
            'eyes': _0xca72ba,
            'stats': _0x4efc71
        });
    }
    for (const _0x133144 in _0x595265) {
        const _0x56fe5f = _0x595265[_0x133144];
        const _0x178c66 = _0x56fe5f['accountStats'] || null;
        _0x2406a['push']({
            'id': parseInt(_0x133144),
            'name': _0x56fe5f['name'],
            'body': _0x56fe5f['body'] || 'body01.png',
            'eyes': _0x56fe5f['eyes'] || 'eyes4.png',
            'stats': _0x178c66
        });
    }
    const _0x6ed0c2 = _0x2406a['map'](_0x22b60f => _0x22b60f['id'] + '_' + _0x22b60f['name'] + '_' + _0x22b60f['body'] + '_' + _0x22b60f['eyes'] + '_' + JSON['stringify'](_0x22b60f['stats']))['join']('|');
    if (_0x6ed0c2 === _0x31a9e4)
        return;
    _0x31a9e4 = _0x6ed0c2;
    _0x1a0aef['innerHTML'] = '';
    let _0x19e70f = ![];
    for (const _0x1dc675 of _0x2406a) {
        _0x19e70f = !![];
        const _0x4e2de2 = _0x300c71(_0x1dc675['body'], _0x1dc675['eyes'], 0x20);
        const _0x46b2a4 = document['createElement']('div');
        _0x46b2a4['className'] = 'chat-pfp-entry';
        const _0x332d92 = document['createElement']('img');
        _0x332d92['src'] = _0x4e2de2;
        _0x332d92['alt'] = _0x1dc675['name'];
        _0x46b2a4['appendChild'](_0x332d92);
        const _0x47444f = document['createElement']('div');
        _0x47444f['className'] = 'chat-pfp-tooltip';
        let _0xf22d95 = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x1dc675['name'] + '</div>';
        const _0x2f416d = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x570dd0 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x11578b = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x360fbd = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x55dd20 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0xbe03b5 = (_0x361ebe, _0xe5cb4a, _0x4ada45, _0x23eab7) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x361ebe + '<span\x20style=\x22flex:1;color:' + _0x23eab7 + ';\x22>' + _0xe5cb4a + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x4ada45 + '</span></div>';
        if (_0x1dc675['stats']) {
            _0xf22d95 += _0xbe03b5(_0x2f416d, 'Town\x20Wins', _0x1dc675['stats']['townWins'] || 0x0, '#55ee77');
            _0xf22d95 += _0xbe03b5(_0x570dd0, 'Mafia\x20Wins', _0x1dc675['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0xf22d95 += _0xbe03b5(_0x11578b, 'Deaths', _0x1dc675['stats']['deaths'] || 0x0, '#aaa');
            _0xf22d95 += _0xbe03b5(_0x360fbd, 'Town\x20Losses', _0x1dc675['stats']['townLosses'] || 0x0, '#6688aa');
            _0xf22d95 += _0xbe03b5(_0x55dd20, 'Mafia\x20Losses', _0x1dc675['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0xf22d95 += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x47444f['innerHTML'] = _0xf22d95;
        _0x46b2a4['appendChild'](_0x47444f);
        _0x46b2a4['addEventListener']('mouseenter', () => {
            const _0x4e76c6 = _0x46b2a4['getBoundingClientRect']();
            _0x47444f['style']['left'] = _0x4e76c6['right'] + 0x6 + 'px';
            _0x47444f['style']['top'] = _0x4e76c6['top'] + _0x4e76c6['height'] / 0x2 + 'px';
            _0x47444f['style']['transform'] = 'translateY(-50%)';
        });
        _0x1a0aef['appendChild'](_0x46b2a4);
    }
    const _0x17b5f5 = document['getElementById']('chat-log-wrap');
    if (_0x17b5f5) {
        if (_0x19e70f) {
            _0x17b5f5['classList']['add']('has-profiles');
            _0x1a0aef['style']['display'] = 'flex';
        } else {
            _0x17b5f5['classList']['remove']('has-profiles');
            _0x1a0aef['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x3f6d1b;
let _0x56d4c5 = -0x1, _0x2f9463 = -0x1, _0x38c350 = -0x1, _0x19af20 = 0x0;
function _0x205e29() {
    if (!_0x131772 || !_0x5b2bc2 || _0x5b2bc2['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x241788 = performance['now']();
    const _0x4c1639 = _0x241788 - _0x19af20;
    const _0x3685a4 = Math['abs'](_0x33a7db['x'] - _0x56d4c5) > 0.05 || Math['abs'](_0x33a7db['y'] - _0x2f9463) > 0.05 || Math['abs'](_0x33a7db['angle'] - _0x38c350) > 0.02;
    if (!_0x3685a4 && _0x4c1639 < 0xc8)
        return;
    if (_0x4c1639 < 0x19)
        return;
    _0x19af20 = _0x241788;
    _0x56d4c5 = _0x33a7db['x'];
    _0x2f9463 = _0x33a7db['y'];
    _0x38c350 = _0x33a7db['angle'];
    if (!_0x131772 || !_0x5b2bc2 || _0x5b2bc2['readyState'] !== WebSocket['OPEN'])
        return;
    _0x5b2bc2['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x33a7db['x'],
        'y': _0x33a7db['y'],
        'vx': _0x33a7db['vx'],
        'vy': _0x33a7db['vy'],
        'angle': _0x33a7db['angle'],
        'scale': _0x33a7db['scale'],
        'teleportId': _0x341f5d,
        'clientTimestamp': Date['now']()
    }));
}
function _0x8cf58() {
    if (_0x33a7db['isDead'])
        return;
    const _0x6275fc = _0x1d4674['MAP']['layers']['find'](_0x83bb1d => _0x83bb1d['name'] === 'walls');
    if (!_0x6275fc)
        return;
    const _0x42f307 = _0x33a7db['scale'];
    const _0x49f071 = _0x33a7db['width'] * _0x42f307 / 0x2;
    for (let _0x4147f5 = 0x0; _0x4147f5 < 0x3; _0x4147f5++) {
        let _0x3dc02b = _0x33a7db['x'] + _0x33a7db['width'] / 0x2;
        let _0x47fab5 = _0x33a7db['y'] + _0x33a7db['height'] / 0x2;
        const _0x2f30fc = Math['floor']((_0x3dc02b - _0x49f071) / _0x1d4674['MAP']['tileSize']);
        const _0x41ef75 = Math['floor']((_0x3dc02b + _0x49f071) / _0x1d4674['MAP']['tileSize']);
        const _0x3ef7fe = Math['floor']((_0x47fab5 - _0x49f071) / _0x1d4674['MAP']['tileSize']);
        const _0x1d925f = Math['floor']((_0x47fab5 + _0x49f071) / _0x1d4674['MAP']['tileSize']);
        for (let _0x13537f = _0x3ef7fe; _0x13537f <= _0x1d925f; _0x13537f++) {
            for (let _0x3120a6 = _0x2f30fc; _0x3120a6 <= _0x41ef75; _0x3120a6++) {
                if (_0x3120a6 < 0x0 || _0x3120a6 >= _0x1d4674['MAP']['columns'] || _0x13537f < 0x0 || _0x13537f >= _0x1d4674['MAP']['rows'])
                    continue;
                if (_0x6275fc['data'][_0x13537f * _0x1d4674['MAP']['columns'] + _0x3120a6] === 0x0)
                    continue;
                const _0x450419 = _0x3120a6 * _0x1d4674['MAP']['tileSize'];
                const _0x3eab2a = _0x13537f * _0x1d4674['MAP']['tileSize'];
                const _0x111fb6 = _0x3dc02b < _0x450419 ? _0x450419 : _0x3dc02b > _0x450419 + _0x1d4674['MAP']['tileSize'] ? _0x450419 + _0x1d4674['MAP']['tileSize'] : _0x3dc02b;
                const _0x1fbd0a = _0x47fab5 < _0x3eab2a ? _0x3eab2a : _0x47fab5 > _0x3eab2a + _0x1d4674['MAP']['tileSize'] ? _0x3eab2a + _0x1d4674['MAP']['tileSize'] : _0x47fab5;
                const _0x535830 = _0x3dc02b - _0x111fb6;
                const _0x252051 = _0x47fab5 - _0x1fbd0a;
                const _0x307923 = Math['sqrt'](_0x535830 * _0x535830 + _0x252051 * _0x252051);
                if (_0x307923 < _0x49f071) {
                    if (_0x307923 === 0x0) {
                        const _0x6e8ebb = _0x3dc02b - _0x450419;
                        const _0x476ab1 = _0x450419 + _0x1d4674['MAP']['tileSize'] - _0x3dc02b;
                        const _0x4af302 = _0x47fab5 - _0x3eab2a;
                        const _0x30fe53 = _0x3eab2a + _0x1d4674['MAP']['tileSize'] - _0x47fab5;
                        const _0x196310 = Math['min'](_0x6e8ebb, _0x476ab1, _0x4af302, _0x30fe53);
                        if (_0x196310 === _0x6e8ebb)
                            _0x3dc02b = _0x450419 - _0x49f071;
                        else if (_0x196310 === _0x476ab1)
                            _0x3dc02b = _0x450419 + _0x1d4674['MAP']['tileSize'] + _0x49f071;
                        else if (_0x196310 === _0x4af302)
                            _0x47fab5 = _0x3eab2a - _0x49f071;
                        else
                            _0x47fab5 = _0x3eab2a + _0x1d4674['MAP']['tileSize'] + _0x49f071;
                    } else {
                        const _0x1086ff = _0x49f071 - _0x307923;
                        _0x3dc02b += _0x535830 / _0x307923 * _0x1086ff;
                        _0x47fab5 += _0x252051 / _0x307923 * _0x1086ff;
                        const _0x1fd61c = _0x33a7db['vx'] * (_0x535830 / _0x307923) + _0x33a7db['vy'] * (_0x252051 / _0x307923);
                        if (_0x1fd61c < 0x0) {
                            _0x33a7db['vx'] -= _0x1fd61c * (_0x535830 / _0x307923);
                            _0x33a7db['vy'] -= _0x1fd61c * (_0x252051 / _0x307923);
                        }
                    }
                }
            }
        }
        _0x33a7db['x'] = _0x3dc02b - _0x33a7db['width'] / 0x2;
        _0x33a7db['y'] = _0x47fab5 - _0x33a7db['height'] / 0x2;
    }
}
function _0x233348(_0x4053a3) {
    const _0x2ee547 = _0x1d4674['MAP']['layers']['find'](_0x3d07d4 => _0x3d07d4['name'] === 'walls');
    if (!_0x2ee547)
        return;
    const _0x25f7a1 = _0x4053a3['width'] / 0x2;
    for (let _0x49674d = 0x0; _0x49674d < 0x2; _0x49674d++) {
        let _0x26fc6b = _0x4053a3['x'] + _0x4053a3['width'] / 0x2;
        let _0x5845e2 = _0x4053a3['y'] + _0x4053a3['height'] / 0x2;
        const _0x2e63fa = Math['floor']((_0x26fc6b - _0x25f7a1) / _0x1d4674['MAP']['tileSize']);
        const _0x8bed33 = Math['floor']((_0x26fc6b + _0x25f7a1) / _0x1d4674['MAP']['tileSize']);
        const _0x2c6f4b = Math['floor']((_0x5845e2 - _0x25f7a1) / _0x1d4674['MAP']['tileSize']);
        const _0x28cf65 = Math['floor']((_0x5845e2 + _0x25f7a1) / _0x1d4674['MAP']['tileSize']);
        for (let _0x3917eb = _0x2c6f4b; _0x3917eb <= _0x28cf65; _0x3917eb++) {
            for (let _0x20a73d = _0x2e63fa; _0x20a73d <= _0x8bed33; _0x20a73d++) {
                if (_0x20a73d < 0x0 || _0x20a73d >= _0x1d4674['MAP']['columns'] || _0x3917eb < 0x0 || _0x3917eb >= _0x1d4674['MAP']['rows'])
                    continue;
                if (_0x2ee547['data'][_0x3917eb * _0x1d4674['MAP']['columns'] + _0x20a73d] === 0x0)
                    continue;
                const _0xfc157a = _0x20a73d * _0x1d4674['MAP']['tileSize'];
                const _0x509013 = _0x3917eb * _0x1d4674['MAP']['tileSize'];
                const _0x4154e9 = _0x26fc6b < _0xfc157a ? _0xfc157a : _0x26fc6b > _0xfc157a + _0x1d4674['MAP']['tileSize'] ? _0xfc157a + _0x1d4674['MAP']['tileSize'] : _0x26fc6b;
                const _0x49d382 = _0x5845e2 < _0x509013 ? _0x509013 : _0x5845e2 > _0x509013 + _0x1d4674['MAP']['tileSize'] ? _0x509013 + _0x1d4674['MAP']['tileSize'] : _0x5845e2;
                const _0x3936de = _0x26fc6b - _0x4154e9;
                const _0x46e9f4 = _0x5845e2 - _0x49d382;
                const _0x21915b = Math['sqrt'](_0x3936de * _0x3936de + _0x46e9f4 * _0x46e9f4);
                if (_0x21915b < _0x25f7a1) {
                    if (_0x21915b === 0x0) {
                        const _0x5906b3 = _0x26fc6b - _0xfc157a;
                        const _0x48168b = _0xfc157a + _0x1d4674['MAP']['tileSize'] - _0x26fc6b;
                        const _0x89dbcc = _0x5845e2 - _0x509013;
                        const _0x4c1696 = _0x509013 + _0x1d4674['MAP']['tileSize'] - _0x5845e2;
                        const _0x30ec9a = Math['min'](_0x5906b3, _0x48168b, _0x89dbcc, _0x4c1696);
                        if (_0x30ec9a === _0x5906b3)
                            _0x26fc6b = _0xfc157a - _0x25f7a1;
                        else if (_0x30ec9a === _0x48168b)
                            _0x26fc6b = _0xfc157a + _0x1d4674['MAP']['tileSize'] + _0x25f7a1;
                        else if (_0x30ec9a === _0x89dbcc)
                            _0x5845e2 = _0x509013 - _0x25f7a1;
                        else
                            _0x5845e2 = _0x509013 + _0x1d4674['MAP']['tileSize'] + _0x25f7a1;
                    } else {
                        const _0x541072 = _0x25f7a1 - _0x21915b;
                        _0x26fc6b += _0x3936de / _0x21915b * _0x541072;
                        _0x5845e2 += _0x46e9f4 / _0x21915b * _0x541072;
                    }
                }
            }
        }
        _0x4053a3['x'] = _0x26fc6b - _0x4053a3['width'] / 0x2;
        _0x4053a3['y'] = _0x5845e2 - _0x4053a3['height'] / 0x2;
    }
}
function _0x14fca0(_0x1678b4) {
    const _0x9e3d3a = _0x1678b4['width'] / 0x2;
    for (let _0x2d05fb = 0x0; _0x2d05fb < 0x2; _0x2d05fb++) {
        let _0xef5a0f = _0x1678b4['x'] + _0x1678b4['width'] / 0x2;
        let _0x599e67 = _0x1678b4['y'] + _0x1678b4['height'] / 0x2;
        for (const _0x5b0eae of _0x1d4674['ENTITIES']) {
            const _0x372eea = _0xef5a0f < _0x5b0eae['x'] ? _0x5b0eae['x'] : _0xef5a0f > _0x5b0eae['x'] + _0x5b0eae['w'] ? _0x5b0eae['x'] + _0x5b0eae['w'] : _0xef5a0f;
            const _0x3ae693 = _0x599e67 < _0x5b0eae['y'] ? _0x5b0eae['y'] : _0x599e67 > _0x5b0eae['y'] + _0x5b0eae['h'] ? _0x5b0eae['y'] + _0x5b0eae['h'] : _0x599e67;
            const _0x180853 = _0xef5a0f - _0x372eea;
            const _0x17d81f = _0x599e67 - _0x3ae693;
            const _0x552133 = Math['sqrt'](_0x180853 * _0x180853 + _0x17d81f * _0x17d81f);
            if (_0x552133 < _0x9e3d3a && _0x552133 > 0x0) {
                const _0x498330 = _0x9e3d3a - _0x552133;
                const _0x3a7883 = _0x180853 / _0x552133;
                const _0x44f72e = _0x17d81f / _0x552133;
                _0xef5a0f += _0x3a7883 * _0x498330;
                _0x599e67 += _0x44f72e * _0x498330;
            } else if (_0x552133 === 0x0) {
                const _0x30c642 = _0xef5a0f - _0x5b0eae['x'];
                const _0x5482d3 = _0x5b0eae['x'] + _0x5b0eae['w'] - _0xef5a0f;
                const _0x2a441c = _0x599e67 - _0x5b0eae['y'];
                const _0xbb43af = _0x5b0eae['y'] + _0x5b0eae['h'] - _0x599e67;
                const _0x77403 = Math['min'](_0x30c642, _0x5482d3, _0x2a441c, _0xbb43af);
                if (_0x77403 === _0x30c642)
                    _0xef5a0f = _0x5b0eae['x'] - _0x9e3d3a;
                else if (_0x77403 === _0x5482d3)
                    _0xef5a0f = _0x5b0eae['x'] + _0x5b0eae['w'] + _0x9e3d3a;
                else if (_0x77403 === _0x2a441c)
                    _0x599e67 = _0x5b0eae['y'] - _0x9e3d3a;
                else
                    _0x599e67 = _0x5b0eae['y'] + _0x5b0eae['h'] + _0x9e3d3a;
            }
        }
        _0x1678b4['x'] = _0xef5a0f - _0x1678b4['width'] / 0x2;
        _0x1678b4['y'] = _0x599e67 - _0x1678b4['height'] / 0x2;
    }
}
function _0x3a576e() {
    if (_0x33a7db['isDead'])
        return;
    const _0xa4f05 = _0x33a7db['width'] / 0x2;
    const _0x4b736f = _0x33a7db['x'] + _0x33a7db['width'] / 0x2;
    const _0x16237f = _0x33a7db['y'] + _0x33a7db['height'] / 0x2;
    for (const _0x417d42 in _0x595265) {
        const _0x3ea383 = _0x595265[_0x417d42];
        if (_0x3ea383['isDead'])
            continue;
        const _0x5c05c4 = _0x3ea383['width'] / 0x2;
        const _0x25a8ad = _0xa4f05 + _0x5c05c4;
        const _0xaa83f2 = (_0x3ea383['renderX'] ?? _0x3ea383['x']) + _0x3ea383['width'] / 0x2;
        const _0x16cfed = (_0x3ea383['renderY'] ?? _0x3ea383['y']) + _0x3ea383['height'] / 0x2;
        const _0x761ac5 = _0x4b736f - _0xaa83f2;
        const _0x5c85d7 = _0x16237f - _0x16cfed;
        const _0x5cc930 = Math['sqrt'](_0x761ac5 * _0x761ac5 + _0x5c85d7 * _0x5c85d7);
        if (_0x5cc930 > 0x0 && _0x5cc930 < _0x25a8ad) {
            const _0x30e650 = _0x25a8ad - _0x5cc930;
            const _0x388af1 = _0x761ac5 / _0x5cc930;
            const _0x1345e7 = _0x5c85d7 / _0x5cc930;
            _0x33a7db['x'] += _0x388af1 * (_0x30e650 * 0.25);
            _0x33a7db['y'] += _0x1345e7 * (_0x30e650 * 0.25);
            _0x3ea383['x'] -= _0x388af1 * (_0x30e650 * 0.75);
            _0x3ea383['y'] -= _0x1345e7 * (_0x30e650 * 0.75);
            _0x233348(_0x3ea383);
            _0x14fca0(_0x3ea383);
            if (_0x3ea383['renderX'] !== undefined) {
                _0x3ea383['renderX'] = _0x3ea383['x'];
                _0x3ea383['renderY'] = _0x3ea383['y'];
            }
            const _0xbfa12c = _0x33a7db['vx'] * _0x388af1 + _0x33a7db['vy'] * _0x1345e7;
            if (_0xbfa12c < 0x0) {
                _0x33a7db['vx'] -= _0xbfa12c * _0x388af1 * 0.25;
                _0x33a7db['vy'] -= _0xbfa12c * _0x1345e7 * 0.25;
            }
        }
    }
    _0x8cf58();
    _0x110706();
}
function _0x110706() {
    if (_0x33a7db['isDead'])
        return;
    const _0x3bfafb = _0x33a7db['scale'];
    const _0x5b4447 = _0x33a7db['width'] * _0x3bfafb / 0x2;
    for (let _0x11943a = 0x0; _0x11943a < 0x2; _0x11943a++) {
        let _0x182780 = _0x33a7db['x'] + _0x33a7db['width'] / 0x2;
        let _0x2ad70d = _0x33a7db['y'] + _0x33a7db['height'] / 0x2;
        for (const _0x51fb58 of _0x1d4674['ENTITIES']) {
            const _0x3d0ec9 = _0x182780 < _0x51fb58['x'] ? _0x51fb58['x'] : _0x182780 > _0x51fb58['x'] + _0x51fb58['w'] ? _0x51fb58['x'] + _0x51fb58['w'] : _0x182780;
            const _0x34d1d5 = _0x2ad70d < _0x51fb58['y'] ? _0x51fb58['y'] : _0x2ad70d > _0x51fb58['y'] + _0x51fb58['h'] ? _0x51fb58['y'] + _0x51fb58['h'] : _0x2ad70d;
            const _0x328e16 = _0x182780 - _0x3d0ec9;
            const _0x21a2ba = _0x2ad70d - _0x34d1d5;
            const _0x419906 = Math['sqrt'](_0x328e16 * _0x328e16 + _0x21a2ba * _0x21a2ba);
            if (_0x419906 < _0x5b4447 && _0x419906 > 0x0) {
                const _0x2378d8 = _0x5b4447 - _0x419906;
                const _0x3cdac6 = _0x328e16 / _0x419906;
                const _0x557330 = _0x21a2ba / _0x419906;
                _0x182780 += _0x3cdac6 * _0x2378d8;
                _0x2ad70d += _0x557330 * _0x2378d8;
                const _0x468d3 = _0x33a7db['vx'] * _0x3cdac6 + _0x33a7db['vy'] * _0x557330;
                if (_0x468d3 < 0x0) {
                    _0x33a7db['vx'] -= _0x468d3 * _0x3cdac6;
                    _0x33a7db['vy'] -= _0x468d3 * _0x557330;
                }
            } else if (_0x419906 === 0x0) {
                const _0x4ba6e6 = _0x182780 - _0x51fb58['x'];
                const _0x421de0 = _0x51fb58['x'] + _0x51fb58['w'] - _0x182780;
                const _0x309398 = _0x2ad70d - _0x51fb58['y'];
                const _0xffac0f = _0x51fb58['y'] + _0x51fb58['h'] - _0x2ad70d;
                const _0x3a0cd6 = Math['min'](_0x4ba6e6, _0x421de0, _0x309398, _0xffac0f);
                if (_0x3a0cd6 === _0x4ba6e6)
                    _0x182780 = _0x51fb58['x'] - _0x5b4447;
                else if (_0x3a0cd6 === _0x421de0)
                    _0x182780 = _0x51fb58['x'] + _0x51fb58['w'] + _0x5b4447;
                else if (_0x3a0cd6 === _0x309398)
                    _0x2ad70d = _0x51fb58['y'] - _0x5b4447;
                else
                    _0x2ad70d = _0x51fb58['y'] + _0x51fb58['h'] + _0x5b4447;
            }
        }
        _0x33a7db['x'] = _0x182780 - _0x33a7db['width'] / 0x2;
        _0x33a7db['y'] = _0x2ad70d - _0x33a7db['height'] / 0x2;
    }
}
function _0x260fa0(_0x40edf3, _0x542a7e) {
    const _0x50be5a = _0x1d4674['MAP']['layers']['find'](_0x3cab3f => _0x3cab3f['name'] === 'trees');
    if (!_0x50be5a)
        return ![];
    const _0x5d1c8d = Math['floor'](_0x40edf3 / _0x1d4674['MAP']['tileSize']);
    const _0x10f807 = Math['floor'](_0x542a7e / _0x1d4674['MAP']['tileSize']);
    if (_0x5d1c8d < 0x0 || _0x5d1c8d >= _0x1d4674['MAP']['columns'] || _0x10f807 < 0x0 || _0x10f807 >= _0x1d4674['MAP']['rows'])
        return ![];
    return _0x50be5a['data'][_0x10f807 * _0x1d4674['MAP']['columns'] + _0x5d1c8d] === 0xb;
}
let _0x209d05 = null;
function _0x48052c() {
    const _0x574800 = _0x1d4674['MAP'];
    const _0x2dd0ac = _0x574800['layers']['find'](_0x1c84f2 => _0x1c84f2['name'] === 'floor2');
    const _0x4f282f = _0x574800['layers']['find'](_0x2a3575 => _0x2a3575['name'] === 'walls');
    if (!_0x2dd0ac || !_0x4f282f) {
        _0x209d05 = null;
        return;
    }
    const _0x42bcce = _0x574800['columns'];
    const _0xeaa5c2 = _0x574800['rows'];
    const _0xf2a5e1 = [];
    const _0x19b9c5 = new Set();
    const _0x472450 = new Set();
    for (let _0x46ca57 = 0x0; _0x46ca57 < _0xeaa5c2; _0x46ca57++) {
        for (let _0x234cb2 = 0x0; _0x234cb2 < _0x42bcce; _0x234cb2++) {
            const _0x1d2fa4 = _0x46ca57 * _0x42bcce + _0x234cb2;
            const _0x3c3e6e = _0x2dd0ac['data'][_0x1d2fa4];
            const _0x49b172 = _0x4f282f['data'][_0x1d2fa4];
            if (_0x3c3e6e === 0x2 && _0x49b172 === 0x0) {
                _0xf2a5e1['push']({
                    'c': _0x234cb2,
                    'r': _0x46ca57
                });
                _0x472450['add'](_0x234cb2 + ',' + _0x46ca57);
            } else if (_0x49b172 !== 0x0) {
                _0x19b9c5['add'](_0x234cb2 + ',' + _0x46ca57);
            }
        }
    }
    const _0x46a8d1 = [
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
                c: _0x4e6d97,
                r: _0x396415
            } of _0xf2a5e1) {
        for (const [_0x1f2eb3, _0x5ab338] of _0x46a8d1) {
            const _0x290804 = _0x4e6d97 + _0x1f2eb3, _0x140242 = _0x396415 + _0x5ab338;
            const _0x4419d9 = _0x290804 + ',' + _0x140242;
            if (!_0x472450['has'](_0x4419d9)) {
                _0x19b9c5['add'](_0x4419d9);
            }
        }
    }
    _0x209d05 = {
        'wallSet': _0x19b9c5,
        'floorTiles': _0xf2a5e1,
        'interiorSet': _0x472450
    };
}
function _0x2029c2() {
    const _0x3f067c = _0x1d4674['MAP']['layers']['find'](_0x4e9aac => _0x4e9aac['name'] === 'floor2');
    if (!_0x3f067c)
        return ![];
    const _0x117bab = _0x33a7db['x'] + _0x33a7db['width'] / 0x2;
    const _0x4bd1af = _0x33a7db['y'] + _0x33a7db['height'] / 0x2;
    const _0x355170 = _0x1d4674['MAP']['tileSize'];
    const _0x198917 = Math['floor'](_0x117bab / _0x355170);
    const _0x1c809a = Math['floor'](_0x4bd1af / _0x355170);
    if (_0x198917 < 0x0 || _0x198917 >= _0x1d4674['MAP']['columns'] || _0x1c809a < 0x0 || _0x1c809a >= _0x1d4674['MAP']['rows'])
        return ![];
    const _0x1cef28 = _0x1c809a * _0x1d4674['MAP']['columns'] + _0x198917;
    if (_0x3f067c['data'][_0x1cef28] === 0x2)
        return !![];
    if (_0x1d4674['MAP']['doors'] && _0x1d4674['MAP']['doors'][_0x1cef28])
        return !![];
    const _0x57cb0f = [
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
    for (const [_0x4bd2b8, _0xd6e8e5] of _0x57cb0f) {
        const _0x123291 = Math['floor']((_0x117bab + _0x4bd2b8) / _0x355170);
        const _0x2fd4e1 = Math['floor']((_0x4bd1af + _0xd6e8e5) / _0x355170);
        if (_0x123291 >= 0x0 && _0x123291 < _0x1d4674['MAP']['columns'] && _0x2fd4e1 >= 0x0 && _0x2fd4e1 < _0x1d4674['MAP']['rows']) {
            const _0x52416e = _0x2fd4e1 * _0x1d4674['MAP']['columns'] + _0x123291;
            if (_0x3f067c['data'][_0x52416e] === 0x2 || _0x1d4674['MAP']['doors'] && _0x1d4674['MAP']['doors'][_0x52416e]) {
                return !![];
            }
        }
    }
    return ![];
}
let _0x6611e3 = null, _0x546fff = null;
function _0x5191b9() {
    if (_0x33a7db['isDead']) {
        _0x1d4674['SHADOW']['polygon'] = null;
        _0x6611e3 = null;
        return;
    }
    const _0x23c6cf = _0x1d4674['MAP'];
    const _0xf5068c = _0x1d4674['SHADOW'];
    const _0x58ccec = _0x23c6cf['tileSize'];
    if (!_0x209d05)
        _0x48052c();
    if (!_0x209d05) {
        _0xf5068c['polygon'] = null;
        _0x6611e3 = null;
        return;
    }
    const {
        wallSet: _0x1d13d1,
        floorTiles: _0x481ffa
    } = _0x209d05;
    if (_0x481ffa['length'] === 0x0) {
        _0xf5068c['polygon'] = null;
        _0x6611e3 = null;
        return;
    }
    if (!_0x2029c2()) {
        _0xf5068c['polygon'] = null;
        _0x6611e3 = null;
        return;
    }
    const _0x22621e = _0x33a7db['x'] + _0x33a7db['width'] / 0x2;
    const _0x206910 = _0x33a7db['y'] + _0x33a7db['height'] / 0x2;
    if (_0x6611e3 !== null && _0xf5068c['polygon'] && Math['hypot'](_0x22621e - _0x6611e3, _0x206910 - _0x546fff) < 0.5) {
        return;
    }
    _0x6611e3 = _0x22621e;
    _0x546fff = _0x206910;
    const _0x2e2abb = Math['floor'](_0x22621e / _0x58ccec);
    const _0x335e27 = Math['floor'](_0x206910 / _0x58ccec);
    const _0x4df7b0 = Math['max'](0x0, _0x2e2abb - 0x8);
    const _0x1f3333 = Math['min'](_0x23c6cf['columns'] - 0x1, _0x2e2abb + 0x8);
    const _0xbc1179 = Math['max'](0x0, _0x335e27 - 0x8);
    const _0x40637c = Math['min'](_0x23c6cf['rows'] - 0x1, _0x335e27 + 0x8);
    const _0x2405fe = [];
    const _0x5e0ead = [];
    for (let _0x3506b1 = _0xbc1179; _0x3506b1 <= _0x40637c; _0x3506b1++) {
        for (let _0xaf33db = _0x4df7b0; _0xaf33db <= _0x1f3333; _0xaf33db++) {
            if (!_0x1d13d1['has'](_0xaf33db + ',' + _0x3506b1))
                continue;
            const _0xad498 = _0xaf33db * _0x58ccec;
            const _0x49f04d = _0x3506b1 * _0x58ccec;
            const _0x446b3a = _0xad498 + _0x58ccec;
            const _0x5ab734 = _0x49f04d + _0x58ccec;
            if (!_0x1d13d1['has'](_0xaf33db + ',' + (_0x3506b1 - 0x1))) {
                _0x2405fe['push'](_0xad498, _0x49f04d, _0x446b3a, _0x49f04d);
                _0x5e0ead['push'](_0xad498, _0x49f04d, _0x446b3a, _0x49f04d);
            }
            if (!_0x1d13d1['has'](_0xaf33db + ',' + (_0x3506b1 + 0x1))) {
                _0x2405fe['push'](_0xad498, _0x5ab734, _0x446b3a, _0x5ab734);
                _0x5e0ead['push'](_0xad498, _0x5ab734, _0x446b3a, _0x5ab734);
            }
            if (!_0x1d13d1['has'](_0xaf33db - 0x1 + ',' + _0x3506b1)) {
                _0x2405fe['push'](_0xad498, _0x49f04d, _0xad498, _0x5ab734);
                _0x5e0ead['push'](_0xad498, _0x49f04d, _0xad498, _0x5ab734);
            }
            if (!_0x1d13d1['has'](_0xaf33db + 0x1 + ',' + _0x3506b1)) {
                _0x2405fe['push'](_0x446b3a, _0x49f04d, _0x446b3a, _0x5ab734);
                _0x5e0ead['push'](_0x446b3a, _0x49f04d, _0x446b3a, _0x5ab734);
            }
        }
    }
    const _0x244472 = new Set();
    const _0x4648e8 = [];
    const _0x46e341 = 0.0001;
    for (let _0xa7020a = 0x0; _0xa7020a < _0x5e0ead['length']; _0xa7020a += 0x2) {
        const _0x1e761a = _0x5e0ead[_0xa7020a];
        const _0x57e9e3 = _0x5e0ead[_0xa7020a + 0x1];
        const _0x37fbdd = Math['atan2'](_0x57e9e3 - _0x206910, _0x1e761a - _0x22621e);
        const _0x368b8d = Math['round'](_0x37fbdd * 0x9c40);
        if (!_0x244472['has'](_0x368b8d - 0x1)) {
            _0x244472['add'](_0x368b8d - 0x1);
            _0x4648e8['push'](_0x37fbdd - _0x46e341);
        }
        if (!_0x244472['has'](_0x368b8d)) {
            _0x244472['add'](_0x368b8d);
            _0x4648e8['push'](_0x37fbdd);
        }
        if (!_0x244472['has'](_0x368b8d + 0x1)) {
            _0x244472['add'](_0x368b8d + 0x1);
            _0x4648e8['push'](_0x37fbdd + _0x46e341);
        }
    }
    for (let _0x178aaa = 0x0; _0x178aaa < 0x10; _0x178aaa++) {
        const _0x2d3613 = -Math['PI'] + _0x178aaa * 0x2 * Math['PI'] / 0x10;
        _0x4648e8['push'](_0x2d3613);
    }
    _0x4648e8['sort']((_0x296468, _0x2088cd) => _0x296468 - _0x2088cd);
    const _0x4a90d6 = 0xc * _0x58ccec;
    const _0x541877 = [];
    for (let _0x4ad208 = 0x0; _0x4ad208 < _0x4648e8['length']; _0x4ad208++) {
        const _0x43baa0 = _0x4648e8[_0x4ad208];
        const _0x2daea9 = Math['cos'](_0x43baa0);
        const _0x4b0c6a = Math['sin'](_0x43baa0);
        let _0x18dc29 = _0x4a90d6;
        for (let _0x419e3c = 0x0; _0x419e3c < _0x2405fe['length']; _0x419e3c += 0x4) {
            const _0x5a045a = _0x2405fe[_0x419e3c], _0x2bc4f8 = _0x2405fe[_0x419e3c + 0x1];
            const _0x17ea53 = _0x2405fe[_0x419e3c + 0x2], _0x2fa3b4 = _0x2405fe[_0x419e3c + 0x3];
            const _0x2c6f0c = _0x17ea53 - _0x5a045a;
            const _0x4d32c2 = _0x2fa3b4 - _0x2bc4f8;
            const _0x1e66e9 = _0x2daea9 * _0x4d32c2 - _0x4b0c6a * _0x2c6f0c;
            if (Math['abs'](_0x1e66e9) < 1e-9)
                continue;
            const _0x4422cb = _0x5a045a - _0x22621e;
            const _0x526f5b = _0x2bc4f8 - _0x206910;
            const _0x3ca1ab = (_0x4422cb * _0x4d32c2 - _0x526f5b * _0x2c6f0c) / _0x1e66e9;
            const _0x3b78c7 = (_0x4422cb * _0x4b0c6a - _0x526f5b * _0x2daea9) / _0x1e66e9;
            if (_0x3ca1ab > 0x1 && _0x3b78c7 >= 0x0 && _0x3b78c7 <= 0x1 && _0x3ca1ab < _0x18dc29) {
                _0x18dc29 = _0x3ca1ab;
            }
        }
        _0x541877['push'](_0x22621e + _0x2daea9 * _0x18dc29, _0x206910 + _0x4b0c6a * _0x18dc29);
    }
    _0xf5068c['polygon'] = _0x541877['length'] >= 0x6 ? _0x541877 : null;
}
function _0x4ef693(_0xadc4e6, _0x73d3c3, _0x237a14) {
    if (_0x33a7db['isDead'])
        return;
    if (!_0x209d05)
        _0x48052c();
    if (!_0x209d05)
        return;
    const {floorTiles: _0x1e108a} = _0x209d05;
    if (_0x1e108a['length'] === 0x0)
        return;
    const _0x2778e9 = _0x1d4674['SHADOW'];
    const _0x187f02 = _0x1d4674['MAP']['tileSize'];
    const _0x43a057 = _0x1d4674['CAMERA']['width'];
    const _0x5f065f = _0x1d4674['CAMERA']['height'];
    if (!_0x1d4674['SHADOW']['_buf'] || _0x1d4674['SHADOW']['_buf']['width'] !== _0x43a057 || _0x1d4674['SHADOW']['_buf']['height'] !== _0x5f065f) {
        _0x1d4674['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x1d4674['SHADOW']['_buf']['width'] = _0x43a057;
        _0x1d4674['SHADOW']['_buf']['height'] = _0x5f065f;
    }
    const _0x26b4fa = _0x1d4674['SHADOW']['_buf'];
    const _0x5a4cf7 = _0x26b4fa['getContext']('2d');
    _0x5a4cf7['clearRect'](0x0, 0x0, _0x43a057, _0x5f065f);
    _0x5a4cf7['fillStyle'] = 'rgba(0,0,0,0.95)';
    _0x5a4cf7['beginPath']();
    for (const {
                c: _0x2229df,
                r: _0x2801c4
            } of _0x1e108a) {
        const _0x56d014 = Math['round'](_0x2229df * _0x187f02 - _0x73d3c3), _0x406cd4 = Math['round'](_0x2801c4 * _0x187f02 - _0x237a14);
        if (_0x56d014 > _0x43a057 || _0x406cd4 > _0x5f065f || _0x56d014 + _0x187f02 < 0x0 || _0x406cd4 + _0x187f02 < 0x0)
            continue;
        _0x5a4cf7['rect'](_0x56d014, _0x406cd4, _0x187f02 + 0x1, _0x187f02 + 0x1);
    }
    _0x5a4cf7['fill']();
    if (_0x2029c2() && _0x2778e9['polygon'] && _0x2778e9['polygon']['length'] >= 0x6) {
        _0x5a4cf7['globalCompositeOperation'] = 'destination-out';
        _0x5a4cf7['fillStyle'] = 'rgba(0,0,0,1)';
        const _0x41d20d = _0x2778e9['polygon'];
        _0x5a4cf7['beginPath']();
        _0x5a4cf7['moveTo'](_0x41d20d[0x0] - _0x73d3c3, _0x41d20d[0x1] - _0x237a14);
        for (let _0xad24a3 = 0x2; _0xad24a3 < _0x41d20d['length']; _0xad24a3 += 0x2) {
            _0x5a4cf7['lineTo'](_0x41d20d[_0xad24a3] - _0x73d3c3, _0x41d20d[_0xad24a3 + 0x1] - _0x237a14);
        }
        _0x5a4cf7['closePath']();
        _0x5a4cf7['fill']();
        _0x5a4cf7['globalCompositeOperation'] = 'source-over';
    }
    _0xadc4e6['drawImage'](_0x26b4fa, 0x0, 0x0);
}
function _0x3d16a1(_0x12f430) {
    let _0x41f5cb = 0x0, _0x589b50 = 0x0;
    const _0x1d667d = _0x1d4674['INPUTS']['mouseX'] / _0x1d4674['SYSTEM']['viewScale'];
    const _0x282df8 = _0x1d4674['INPUTS']['mouseY'] / _0x1d4674['SYSTEM']['viewScale'];
    const _0x31e001 = _0x33a7db['x'] - _0x1d4674['CAMERA']['x'] + _0x33a7db['width'] / 0x2;
    const _0x3c6706 = _0x33a7db['y'] - _0x1d4674['CAMERA']['y'] + _0x33a7db['height'] / 0x2;
    const _0x5e3b21 = Math['atan2'](_0x282df8 - _0x3c6706, _0x1d667d - _0x31e001);
    if (_0x33e871 !== 0x0 || _0x1f1080 !== 0x0) {
        _0x41f5cb = _0x33e871;
        _0x589b50 = _0x1f1080;
    } else if (_0x2c07a2) {
        let _0x508fd5 = 0x0, _0x404618 = 0x0;
        if (_0x1d4674['INPUTS']['keys']['w'] || _0x1d4674['INPUTS']['keys']['arrowup'])
            _0x508fd5 += 0x1;
        if (_0x1d4674['INPUTS']['keys']['s'] || _0x1d4674['INPUTS']['keys']['arrowdown'])
            _0x508fd5 -= 0x1;
        if (_0x1d4674['INPUTS']['keys']['d'] || _0x1d4674['INPUTS']['keys']['arrowright'])
            _0x404618 += 0x1;
        if (_0x1d4674['INPUTS']['keys']['a'] || _0x1d4674['INPUTS']['keys']['arrowleft'])
            _0x404618 -= 0x1;
        if (_0x508fd5 !== 0x0 || _0x404618 !== 0x0) {
            const _0x20754c = _0x5e3b21 + Math['atan2'](_0x404618, _0x508fd5);
            _0x41f5cb = Math['cos'](_0x20754c);
            _0x589b50 = Math['sin'](_0x20754c);
        }
    } else {
        if (_0x1d4674['INPUTS']['keys']['w'] || _0x1d4674['INPUTS']['keys']['arrowup'])
            _0x589b50 -= 0x1;
        if (_0x1d4674['INPUTS']['keys']['s'] || _0x1d4674['INPUTS']['keys']['arrowdown'])
            _0x589b50 += 0x1;
        if (_0x1d4674['INPUTS']['keys']['a'] || _0x1d4674['INPUTS']['keys']['arrowleft'])
            _0x41f5cb -= 0x1;
        if (_0x1d4674['INPUTS']['keys']['d'] || _0x1d4674['INPUTS']['keys']['arrowright'])
            _0x41f5cb += 0x1;
        const _0x4e04c0 = _0x41f5cb !== 0x0 || _0x589b50 !== 0x0;
        if (_0x4e04c0) {
            const _0x436313 = Math['sqrt'](_0x41f5cb * _0x41f5cb + _0x589b50 * _0x589b50);
            _0x41f5cb /= _0x436313;
            _0x589b50 /= _0x436313;
        }
    }
    if (_0x1d4674['GAME_STATE'] === 'NIGHT' && (_0x2f26d8 === 'Skinwalker' || _0x2f26d8 === 'Blackmailer')) {
        if (_0x1d4674['NIGHT_ABILITY_OPEN'] || !_0x1d4674['CURRENT_TARGET']) {
            _0x41f5cb = 0x0;
            _0x589b50 = 0x0;
            _0x33a7db['vx'] = 0x0;
            _0x33a7db['vy'] = 0x0;
            _0x33a7db['x'] = _0x1d4674['MAP']['columns'] * _0x1d4674['MAP']['tileSize'] / 0x2 - _0x33a7db['width'] / 0x2;
            _0x33a7db['y'] = _0x1d4674['MAP']['rows'] * _0x1d4674['MAP']['tileSize'] / 0x2 - _0x33a7db['height'] / 0x2;
        }
    }
    const _0x35d50f = _0x41f5cb !== 0x0 || _0x589b50 !== 0x0;
    const _0x47bce8 = (_0x1d4674['INPUTS']['keys']['shift'] || _0x3616f1 || _0x2a147f) && _0x35d50f;
    _0x33a7db['bopTimer'] = _0x47bce8 ? _0x33a7db['bopTimer'] + _0x12f430 : 0x0;
    _0x33a7db['scale'] = 0x1 + (_0x33a7db['bopTimer'] > 0x0 ? Math['sin'](_0x33a7db['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x59ab96 = Math['pow'](0.001, _0x12f430);
    const _0x320d74 = _0x47bce8 ? 0x74a : 0x5d5;
    _0x33a7db['vx'] += _0x41f5cb * _0x320d74 * _0x12f430;
    _0x33a7db['vy'] += _0x589b50 * _0x320d74 * _0x12f430;
    _0x33a7db['vx'] *= _0x59ab96;
    _0x33a7db['vy'] *= _0x59ab96;
    _0x33a7db['x'] += _0x33a7db['vx'] * _0x12f430;
    _0x33a7db['y'] += _0x33a7db['vy'] * _0x12f430;
    for (let _0x1345a5 = 0x0; _0x1345a5 < 0x3; _0x1345a5++)
        _0x8cf58();
    for (let _0x170f34 = 0x0; _0x170f34 < 0x2; _0x170f34++)
        _0x110706();
    for (let _0x21549d = 0x0; _0x21549d < 0x2; _0x21549d++)
        _0x3a576e();
    if (_0x33a7db['x'] < 0x0)
        _0x33a7db['x'] = 0x0;
    if (_0x33a7db['y'] < 0x0)
        _0x33a7db['y'] = 0x0;
    if (_0x33a7db['x'] + _0x33a7db['width'] > _0x1d4674['MAP']['columns'] * _0x1d4674['MAP']['tileSize'])
        _0x33a7db['x'] = _0x1d4674['MAP']['columns'] * _0x1d4674['MAP']['tileSize'] - _0x33a7db['width'];
    if (_0x33a7db['y'] + _0x33a7db['height'] > _0x1d4674['MAP']['rows'] * _0x1d4674['MAP']['tileSize'])
        _0x33a7db['y'] = _0x1d4674['MAP']['rows'] * _0x1d4674['MAP']['tileSize'] - _0x33a7db['height'];
    if (_0x26c0a9) {
        _0x33a7db['angle'] = _0x2403f5 + Math['PI'] / 0x2;
    } else if (_0x33e871 !== 0x0 || _0x1f1080 !== 0x0) {
        _0x33a7db['angle'] = Math['atan2'](_0x1f1080, _0x33e871) + Math['PI'] / 0x2;
    } else if (!_0x657aac) {
        _0x33a7db['angle'] = _0x5e3b21 + Math['PI'] / 0x2;
    }
    const _0x30e147 = _0x33a7db['x'] + _0x33a7db['width'] / 0x2 - _0x1d4674['CAMERA']['width'] / 0x2;
    const _0x4d8b9c = _0x33a7db['y'] + _0x33a7db['height'] / 0x2 - _0x1d4674['CAMERA']['height'] / 0x2;
    if (_0x1d4674['CAMERA']['x'] === null || isNaN(_0x1d4674['CAMERA']['x']) || !isFinite(_0x1d4674['CAMERA']['x'])) {
        _0x1d4674['CAMERA']['x'] = _0x30e147;
        _0x1d4674['CAMERA']['y'] = _0x4d8b9c;
    } else {
        const _0x33ed9b = 0x1 - Math['exp'](-Math['max'](0x0, _0x12f430) * 0x28);
        _0x1d4674['CAMERA']['x'] += (_0x30e147 - _0x1d4674['CAMERA']['x']) * _0x33ed9b;
        _0x1d4674['CAMERA']['y'] += (_0x4d8b9c - _0x1d4674['CAMERA']['y']) * _0x33ed9b;
    }
    for (const _0x5dba75 in _0x595265) {
        const _0x132375 = _0x595265[_0x5dba75];
        if (_0x132375['renderX'] === undefined) {
            _0x132375['renderX'] = _0x132375['x'];
            _0x132375['renderY'] = _0x132375['y'];
            _0x132375['renderAngle'] = _0x132375['angle'] || 0x0;
        }
        const _0x196422 = _0x132375['x'] + (_0x132375['vx'] || 0x0) * _0x12f430;
        const _0x1d3a09 = _0x132375['y'] + (_0x132375['vy'] || 0x0) * _0x12f430;
        _0x132375['x'] = _0x196422;
        _0x132375['y'] = _0x1d3a09;
        const _0x1de2eb = 0x1 - Math['exp'](-_0x12f430 * 0x12);
        const _0x153daf = _0x132375['x'] - _0x132375['renderX'], _0x3f35cc = _0x132375['y'] - _0x132375['renderY'];
        const _0x1a218b = Math['sqrt'](_0x153daf * _0x153daf + _0x3f35cc * _0x3f35cc);
        const _0x1ff437 = 0xc8;
        if (_0x1a218b > _0x1ff437) {
            _0x132375['renderX'] = _0x132375['x'] - _0x153daf / _0x1a218b * _0x1ff437;
            _0x132375['renderY'] = _0x132375['y'] - _0x3f35cc / _0x1a218b * _0x1ff437;
        }
        _0x132375['renderX'] += (_0x132375['x'] - _0x132375['renderX']) * _0x1de2eb;
        _0x132375['renderY'] += (_0x132375['y'] - _0x132375['renderY']) * _0x1de2eb;
        let _0x326d73 = (_0x132375['angle'] || 0x0) - _0x132375['renderAngle'];
        while (_0x326d73 < -Math['PI'])
            _0x326d73 += Math['PI'] * 0x2;
        while (_0x326d73 > Math['PI'])
            _0x326d73 -= Math['PI'] * 0x2;
        _0x132375['renderAngle'] += _0x326d73 * (0x1 - Math['exp'](-_0x12f430 * 0x14));
    }
    if (_0x1d4674['GAME_STATE'] === 'NIGHT') {
        _0x5b84c8 = Math['min'](0.6, _0x5b84c8 + _0x12f430 * 0.5);
    } else {
        _0x5b84c8 = Math['max'](0x0, _0x5b84c8 - _0x12f430 * 0.5);
    }
    if (_0x2dd3ac > 0x0) {
        if (performance['now']() > _0xb4dfff) {
            _0x2dd3ac = Math['max'](0x0, _0x2dd3ac - _0x12f430 * 0x2);
        }
    }
    _0x5191b9();
    _0x205e29();
}
function _0x661c9(_0x4c4824, _0x2c4911, _0x532a5d, _0x176dfc, _0x59057a = !![]) {
    _0x4c4824['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x4f8690 = _0x4c4824['measureText'](_0x2c4911)['width'];
    const _0x718ad7 = _0x4f8690 + 0x18;
    const _0x50ee1a = 0x1c;
    _0x4c4824['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x4c4824['beginPath']();
    if (_0x4c4824['roundRect']) {
        _0x4c4824['roundRect'](_0x532a5d - _0x718ad7 / 0x2, _0x176dfc - _0x50ee1a, _0x718ad7, _0x50ee1a, 0x6);
    } else {
        _0x4c4824['rect'](_0x532a5d - _0x718ad7 / 0x2, _0x176dfc - _0x50ee1a, _0x718ad7, _0x50ee1a);
    }
    _0x4c4824['fill']();
    if (_0x59057a) {
        _0x4c4824['beginPath']();
        _0x4c4824['moveTo'](_0x532a5d - 0x6, _0x176dfc);
        _0x4c4824['lineTo'](_0x532a5d + 0x6, _0x176dfc);
        _0x4c4824['lineTo'](_0x532a5d, _0x176dfc + 0x6);
        _0x4c4824['fill']();
    }
    _0x4c4824['fillStyle'] = '#ffffff';
    _0x4c4824['textAlign'] = 'center';
    _0x4c4824['textBaseline'] = 'middle';
    _0x4c4824['fillText'](_0x2c4911, _0x532a5d, _0x176dfc - _0x50ee1a / 0x2 + 0x1);
}
function _0xb8b0d6(_0x36d5ca, _0x266d2c, _0x5a9a4e, _0x315698) {
    if (!_0x266d2c || _0x266d2c['length'] === 0x0)
        return;
    let _0x2fb756 = _0x315698;
    for (let _0x466ac8 = 0x0; _0x466ac8 < _0x266d2c['length']; _0x466ac8++) {
        _0x661c9(_0x36d5ca, _0x266d2c[_0x466ac8]['text'], _0x5a9a4e, _0x2fb756, _0x466ac8 === 0x0);
        _0x2fb756 -= 0x24;
    }
}
function _0x2eb14d() {
    if (!_0x1d4674['SYSTEM']['isReady'])
        return;
    if (_0x1d4674['MAP']['layers'] && _0x1d4674['MAP']['layers']['length'] > 0x0 && _0x149262['complete'] && _0x149262['naturalWidth'] > 0x0) {
        if (!_0x1d4674['MAP']['_prerenderedWithTileset'] || !_0x1d4674['MAP']['bgChunks'] || _0x1d4674['MAP']['bgChunks']['length'] === 0x0) {
            _0x37c8ba();
        }
    }
    if (!_0x1d4674['MAP']['bgChunks'] || _0x1d4674['MAP']['bgChunks']['length'] === 0x0 || !_0x1d4674['MAP']['bgChunks'][0x0] || _0x1d4674['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x3c6f46['fillStyle'] = '#000000';
    _0x3c6f46['fillRect'](0x0, 0x0, _0x255df0['width'], _0x255df0['height']);
    _0x3c6f46['save']();
    try {
        _0x3c6f46['scale'](_0x1d4674['SYSTEM']['viewScale'], _0x1d4674['SYSTEM']['viewScale']);
        _0x3c6f46['imageSmoothingEnabled'] = ![];
        const _0x298810 = Math['floor'](_0x1d4674['CAMERA']['x'] || 0x0);
        const _0x1d01a8 = Math['floor'](_0x1d4674['CAMERA']['y'] || 0x0);
        const _0x108d25 = Math['max'](0x0, Math['floor'](_0x298810 / _0x1d4674['MAP']['chunkSize']));
        const _0x30fba8 = Math['min'](_0x1d4674['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x298810 + _0x1d4674['CAMERA']['width']) / _0x1d4674['MAP']['chunkSize']));
        const _0x370ec2 = Math['max'](0x0, Math['floor'](_0x1d01a8 / _0x1d4674['MAP']['chunkSize']));
        const _0x439679 = Math['min'](_0x1d4674['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x1d01a8 + _0x1d4674['CAMERA']['height']) / _0x1d4674['MAP']['chunkSize']));
        for (let _0x7028a2 = _0x370ec2; _0x7028a2 <= _0x439679; _0x7028a2++)
            for (let _0x342b7a = _0x108d25; _0x342b7a <= _0x30fba8; _0x342b7a++) {
                const _0x47f730 = _0x342b7a * _0x1d4674['MAP']['chunkSize'] - _0x298810;
                const _0x3c4235 = _0x7028a2 * _0x1d4674['MAP']['chunkSize'] - _0x1d01a8;
                _0x3c6f46['drawImage'](_0x1d4674['MAP']['bgChunks'][_0x7028a2][_0x342b7a], _0x47f730, _0x3c4235, _0x1d4674['MAP']['chunkSize'] + 0x1, _0x1d4674['MAP']['chunkSize'] + 0x1);
            }
        const _0x427b20 = _0x13e4f0('assets/blood\x20splatter.png');
        if (_0x16b465 && _0x16b465['length'] > 0x0) {
            for (const _0x174b9f of _0x16b465) {
                const _0x5654e4 = _0x174b9f['x'] - _0x298810;
                const _0x40469d = _0x174b9f['y'] - _0x1d01a8;
                if (_0x427b20['complete'] && _0x427b20['naturalWidth'] > 0x0) {
                    _0x3c6f46['drawImage'](_0x427b20, _0x5654e4 - 0x20, _0x40469d - 0x20, 0x40, 0x40);
                } else {
                    _0x3c6f46['fillStyle'] = 'rgba(160,\x200,\x200,\x200.75)';
                    _0x3c6f46['beginPath']();
                    _0x3c6f46['arc'](_0x5654e4, _0x40469d, 0x16, 0x0, Math['PI'] * 0x2);
                    _0x3c6f46['fill']();
                }
            }
        }
        const _0x2f164f = _0x13e4f0('assets/blood.png');
        if (_0x318444 && _0x318444['length'] > 0x0) {
            for (const _0x40ce33 of _0x318444) {
                const _0x5772e1 = _0x40ce33['x'] - _0x298810;
                const _0x182930 = _0x40ce33['y'] - _0x1d01a8;
                if (_0x2f164f['complete'] && _0x2f164f['naturalWidth'] > 0x0) {
                    _0x3c6f46['drawImage'](_0x2f164f, _0x5772e1 - 0xc, _0x182930 - 0xc, 0x18, 0x18);
                } else {
                    _0x3c6f46['fillStyle'] = 'rgba(180,\x200,\x200,\x200.8)';
                    _0x3c6f46['beginPath']();
                    _0x3c6f46['arc'](_0x5772e1, _0x182930, 0x5, 0x0, Math['PI'] * 0x2);
                    _0x3c6f46['fill']();
                }
            }
        }
        if (_0x302dc4['complete'] && _0x302dc4['naturalWidth'] > 0x0) {
            const _0x28c100 = _0x1d4674['MAP']['tileSize'];
            const _0x4778f1 = _0x28c100 * 0xa;
            const _0x51dbf8 = _0x1d4674['MAP']['columns'] / 0x2 * _0x28c100 - _0x4778f1 / 0x2 - _0x298810;
            const _0x4338af = _0x1d4674['MAP']['rows'] / 0x2 * _0x28c100 - _0x4778f1 / 0x2 - _0x1d01a8;
            _0x3c6f46['imageSmoothingEnabled'] = ![];
            _0x3c6f46['drawImage'](_0x302dc4, _0x51dbf8, _0x4338af, _0x4778f1, _0x4778f1);
        }
        if (_0x30a072['complete'] && _0x30a072['naturalWidth'] > 0x0) {
            _0x1d4674['ENTITIES']['forEach'](_0x1224a3 => {
                if (_0x1224a3['type'] !== 'table')
                    return;
                _0x3c6f46['save']();
                _0x3c6f46['imageSmoothingEnabled'] = ![];
                const _0x1e1510 = _0x30a072['naturalWidth'] >= _0x30a072['naturalHeight'];
                const _0x527bd7 = _0x1224a3['w'] >= _0x1224a3['h'];
                if (_0x1e1510 === _0x527bd7) {
                    _0x3c6f46['drawImage'](_0x30a072, _0x1224a3['x'] - _0x298810, _0x1224a3['y'] - _0x1d01a8, _0x1224a3['w'], _0x1224a3['h']);
                } else {
                    _0x3c6f46['translate'](_0x1224a3['x'] - _0x298810 + _0x1224a3['w'] / 0x2, _0x1224a3['y'] - _0x1d01a8 + _0x1224a3['h'] / 0x2);
                    _0x3c6f46['rotate'](Math['PI'] / 0x2);
                    _0x3c6f46['drawImage'](_0x30a072, -_0x1224a3['h'] / 0x2, -_0x1224a3['w'] / 0x2, _0x1224a3['h'], _0x1224a3['w']);
                }
                _0x3c6f46['restore']();
            });
        } else {
            _0x1d4674['ENTITIES']['forEach'](_0x1bde10 => {
                if (_0x1bde10['type'] !== 'table')
                    return;
                _0x3c6f46['save']();
                _0x3c6f46['fillStyle'] = '#6b4423';
                _0x3c6f46['fillRect'](_0x1bde10['x'] - _0x298810, _0x1bde10['y'] - _0x1d01a8, _0x1bde10['w'], _0x1bde10['h']);
                _0x3c6f46['strokeStyle'] = '#422810';
                _0x3c6f46['lineWidth'] = 0x3;
                _0x3c6f46['strokeRect'](_0x1bde10['x'] - _0x298810 + 0x1, _0x1bde10['y'] - _0x1d01a8 + 0x1, _0x1bde10['w'] - 0x2, _0x1bde10['h'] - 0x2);
                _0x3c6f46['fillStyle'] = '#82532a';
                _0x3c6f46['fillRect'](_0x1bde10['x'] - _0x298810 + 0x4, _0x1bde10['y'] - _0x1d01a8 + 0x4, _0x1bde10['w'] - 0x8, _0x1bde10['h'] - 0x8);
                _0x3c6f46['restore']();
            });
        }
        if (_0x2d912d) {
            if (_0x1d4674['MAP']['wallChunks'] && _0x1d4674['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x54c8ad = _0x370ec2; _0x54c8ad <= _0x439679; _0x54c8ad++) {
                    for (let _0x11f2ab = _0x108d25; _0x11f2ab <= _0x30fba8; _0x11f2ab++) {
                        if (!_0x1d4674['MAP']['wallChunks'][_0x54c8ad] || !_0x1d4674['MAP']['wallChunks'][_0x54c8ad][_0x11f2ab])
                            continue;
                        const _0x166efe = _0x11f2ab * _0x1d4674['MAP']['chunkSize'] - _0x298810;
                        const _0x2845aa = _0x54c8ad * _0x1d4674['MAP']['chunkSize'] - _0x1d01a8;
                        _0x3c6f46['drawImage'](_0x1d4674['MAP']['wallChunks'][_0x54c8ad][_0x11f2ab], _0x166efe, _0x2845aa, _0x1d4674['MAP']['chunkSize'] + 0x1, _0x1d4674['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x464aee = _0x370ec2; _0x464aee <= _0x439679; _0x464aee++) {
                for (let _0x54b0c5 = _0x108d25; _0x54b0c5 <= _0x30fba8; _0x54b0c5++) {
                    const _0x43de6d = _0x54b0c5 * _0x1d4674['MAP']['chunkSize'] - _0x298810;
                    const _0x2f3fb7 = _0x464aee * _0x1d4674['MAP']['chunkSize'] - _0x1d01a8;
                    _0x3c6f46['drawImage'](_0x1d4674['MAP']['fgChunks'][_0x464aee][_0x54b0c5], _0x43de6d, _0x2f3fb7, _0x1d4674['MAP']['chunkSize'] + 0x1, _0x1d4674['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x32c5a2 = _0x1d4674['GAME_STATE'] === 'NIGHT' && (_0x2f26d8 === 'Skinwalker' || _0x2f26d8 === 'Blackmailer') && !_0x33a7db['isDead'];
        const _0x2d60bd = _0x33a7db['x'] - _0x298810 + _0x33a7db['width'] / 0x2;
        const _0x1aaeb1 = _0x33a7db['y'] - _0x1d01a8 + _0x33a7db['height'] / 0x2;
        const _0x1eb025 = _0x33a7db['width'] * _0x33a7db['scale'] * 1.3;
        const _0x3f90b6 = _0x33a7db['height'] * _0x33a7db['scale'] * 1.3;
        const _0x50325a = _0x13e4f0('assets/arrow.png');
        const _0x2c42d7 = _0x13e4f0('assets/tape.png');
        for (const _0x441df0 in _0x595265) {
            const _0x1c6ca1 = _0x595265[_0x441df0];
            if (_0x1c6ca1['isDead'])
                continue;
            const _0x2a4be7 = parseInt(_0x441df0);
            const _0x2aac79 = (_0x1c6ca1['renderX'] ?? _0x1c6ca1['x']) - _0x298810 + _0x1c6ca1['width'] / 0x2;
            const _0x368bf5 = (_0x1c6ca1['renderY'] ?? _0x1c6ca1['y']) - _0x1d01a8 + _0x1c6ca1['height'] / 0x2;
            const _0x317c0e = Math['min'](0x2, Math['max'](0.3, _0x1c6ca1['scale'] || 0x1));
            const _0x1effa0 = _0x1c6ca1['width'] * _0x317c0e * 1.3;
            const _0x29f13f = _0x1c6ca1['height'] * _0x317c0e * 1.3;
            _0x3c6f46['save']();
            try {
                _0x3c6f46['translate'](_0x2aac79, _0x368bf5);
                _0x3c6f46['rotate'](_0x1c6ca1['renderAngle'] ?? 0x0);
                if (_0x1c6ca1['isDark'])
                    _0x3c6f46['filter'] = 'brightness(0)';
                _0x516a90(_0x3c6f46, _0x1c6ca1['body'], _0x1c6ca1['eyes'], _0x1effa0, _0x29f13f);
                if (_0x131aa6['has'](_0x2a4be7) && _0x3c8a15['complete'] && _0x3c8a15['naturalWidth'] > 0x0) {
                    _0x3c6f46['drawImage'](_0x3c8a15, -_0x1effa0 / 0x2, -_0x29f13f / 0x2, _0x1effa0, _0x29f13f);
                }
                if (_0x1c6ca1['hasArrow'] && _0x1d4674['GAME_STATE'] === 'NIGHT' && _0x50325a['complete'] && _0x50325a['naturalWidth'] > 0x0) {
                    _0x3c6f46['drawImage'](_0x50325a, -_0x1effa0 / 0x2, -_0x29f13f / 0x2, _0x1effa0, _0x29f13f);
                }
                if ((_0x1c6ca1['isBlackmailed'] || _0x395d4d['has'](_0x2a4be7)) && _0x2c42d7['complete'] && _0x2c42d7['naturalWidth'] > 0x0) {
                    _0x3c6f46['drawImage'](_0x2c42d7, -_0x1effa0 / 0x2, -_0x29f13f / 0x2, _0x1effa0, _0x29f13f);
                }
                if (_0x1c6ca1['isDark'])
                    _0x3c6f46['filter'] = 'none';
            } finally {
                _0x3c6f46['restore']();
            }
            if (!_0x260fa0((_0x1c6ca1['renderX'] ?? _0x1c6ca1['x']) + _0x1c6ca1['width'] / 0x2, (_0x1c6ca1['renderY'] ?? _0x1c6ca1['y']) + _0x1c6ca1['height'] / 0x2)) {
                _0x3c6f46['textAlign'] = 'center';
                _0x3c6f46['lineJoin'] = 'round';
                _0x3c6f46['lineWidth'] = 0x3;
                _0x3c6f46['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x3c6f46['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x72955e = '#ffffff';
                if (_0x1c6ca1['isBlackmailed'] || _0x395d4d['has'](_0x2a4be7)) {
                    _0x72955e = '#ff4444';
                } else if (_0x131aa6['has'](_0x2a4be7)) {
                    _0x72955e = '#cc88ff';
                }
                _0x3c6f46['fillStyle'] = _0x72955e;
                const _0x373e35 = _0x1c6ca1['isDark'] ? '???' : _0x1c6ca1['name'] + (_0x1c6ca1['isOwner'] ? '\x20[🗝️]' : '');
                _0x3c6f46['strokeText'](_0x373e35, _0x2aac79, _0x368bf5 - _0x29f13f / 0x2 - 0x10);
                _0x3c6f46['fillText'](_0x373e35, _0x2aac79, _0x368bf5 - _0x29f13f / 0x2 - 0x10);
            }
        }
        if (!_0x33a7db['isDead']) {
            _0x3c6f46['save']();
            try {
                _0x3c6f46['translate'](_0x2d60bd, _0x1aaeb1);
                _0x3c6f46['rotate'](_0x33a7db['angle']);
                if (_0x32c5a2)
                    _0x3c6f46['filter'] = 'brightness(0)';
                _0x516a90(_0x3c6f46, _0x1e4260, _0x508b6e, _0x1eb025, _0x3f90b6);
                if (_0x131aa6['has'](_0x131772) && _0x3c8a15['complete'] && _0x3c8a15['naturalWidth'] > 0x0) {
                    _0x3c6f46['drawImage'](_0x3c8a15, -_0x1eb025 / 0x2, -_0x3f90b6 / 0x2, _0x1eb025, _0x3f90b6);
                }
                if (_0x33a7db['hasArrow'] && _0x1d4674['GAME_STATE'] === 'NIGHT' && _0x50325a['complete'] && _0x50325a['naturalWidth'] > 0x0) {
                    _0x3c6f46['drawImage'](_0x50325a, -_0x1eb025 / 0x2, -_0x3f90b6 / 0x2, _0x1eb025, _0x3f90b6);
                }
                if (_0x395d4d['has'](_0x131772) && _0x2c42d7['complete'] && _0x2c42d7['naturalWidth'] > 0x0) {
                    _0x3c6f46['drawImage'](_0x2c42d7, -_0x1eb025 / 0x2, -_0x3f90b6 / 0x2, _0x1eb025, _0x3f90b6);
                }
                if (_0x32c5a2)
                    _0x3c6f46['filter'] = 'none';
            } finally {
                _0x3c6f46['restore']();
            }
            if (!_0x260fa0(_0x33a7db['x'] + _0x33a7db['width'] / 0x2, _0x33a7db['y'] + _0x33a7db['height'] / 0x2)) {
                _0x3c6f46['textAlign'] = 'center';
                _0x3c6f46['lineJoin'] = 'round';
                _0x3c6f46['lineWidth'] = 0x3;
                _0x3c6f46['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x3c6f46['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x1c2e96 = '#ffffff';
                if (_0x395d4d['has'](_0x131772)) {
                    _0x1c2e96 = '#ff4444';
                } else if (_0x131aa6['has'](_0x131772)) {
                    _0x1c2e96 = '#cc88ff';
                }
                _0x3c6f46['fillStyle'] = _0x1c2e96;
                const _0x2675aa = _0x32c5a2 ? '???' : _0x3b58ee + (_0xc65fb1 ? '\x20[🗝️]' : '');
                _0x3c6f46['strokeText'](_0x2675aa, _0x2d60bd, _0x1aaeb1 - _0x3f90b6 / 0x2 - 0x10);
                _0x3c6f46['fillText'](_0x2675aa, _0x2d60bd, _0x1aaeb1 - _0x3f90b6 / 0x2 - 0x10);
            }
        }
        if (_0x1d4674['MAP']['wallChunks'] && _0x1d4674['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x19e89a = _0x370ec2; _0x19e89a <= _0x439679; _0x19e89a++)
                for (let _0x9c3130 = _0x108d25; _0x9c3130 <= _0x30fba8; _0x9c3130++) {
                    if (!_0x1d4674['MAP']['wallChunks'][_0x19e89a] || !_0x1d4674['MAP']['wallChunks'][_0x19e89a][_0x9c3130])
                        continue;
                    const _0x24ba51 = _0x9c3130 * _0x1d4674['MAP']['chunkSize'] - _0x298810;
                    const _0x19ddb6 = _0x19e89a * _0x1d4674['MAP']['chunkSize'] - _0x1d01a8;
                    _0x3c6f46['drawImage'](_0x1d4674['MAP']['wallChunks'][_0x19e89a][_0x9c3130], _0x24ba51, _0x19ddb6, _0x1d4674['MAP']['chunkSize'] + 0x1, _0x1d4674['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x55797e of _0x1d4674['ENTITIES']) {
            if (_0x55797e['type'] !== 'npc')
                continue;
            const _0x253a12 = _0x55797e['x'] - _0x298810 + _0x55797e['w'] / 0x2;
            const _0x1cfc8d = _0x55797e['y'] - _0x1d01a8 + _0x55797e['h'] / 0x2;
            const _0x16c7b0 = _0x55797e['w'];
            const _0x24eccf = _0x55797e['h'];
            _0x3c6f46['save']();
            _0x3c6f46['translate'](_0x253a12, _0x1cfc8d);
            _0x3c6f46['rotate'](_0x55797e['angle'] !== undefined ? _0x55797e['angle'] : 0x0);
            _0x516a90(_0x3c6f46, _0x55797e['body'] || 'yanito932.png', _0x55797e['eyes'], _0x16c7b0, _0x24eccf);
            _0x3c6f46['restore']();
            _0x3c6f46['textAlign'] = 'center';
            _0x3c6f46['lineJoin'] = 'round';
            _0x3c6f46['lineWidth'] = 0x3;
            _0x3c6f46['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x3c6f46['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
            _0x3c6f46['fillStyle'] = '#aaaaaa';
            _0x3c6f46['strokeText'](_0x55797e['name'] || 'NPC', _0x253a12, _0x1cfc8d - _0x24eccf / 0x2 - 0x10);
            _0x3c6f46['fillText'](_0x55797e['name'] || 'NPC', _0x253a12, _0x1cfc8d - _0x24eccf / 0x2 - 0x10);
        }
        if (_0x33a7db['isDead']) {
            for (const _0x26abb6 in _0x595265) {
                const _0x7f04ba = _0x595265[_0x26abb6];
                if (!_0x7f04ba['isDead'])
                    continue;
                const _0x17c471 = (_0x7f04ba['renderX'] ?? _0x7f04ba['x']) - _0x298810 + _0x7f04ba['width'] / 0x2;
                const _0x4750bf = (_0x7f04ba['renderY'] ?? _0x7f04ba['y']) - _0x1d01a8 + _0x7f04ba['height'] / 0x2;
                const _0x1cb431 = _0x7f04ba['width'] * (_0x7f04ba['scale'] || 0x1) * 1.3;
                const _0x32f454 = _0x7f04ba['height'] * (_0x7f04ba['scale'] || 0x1) * 1.3;
                _0x3c6f46['save']();
                try {
                    _0x3c6f46['translate'](_0x17c471, _0x4750bf);
                    _0x3c6f46['rotate'](_0x7f04ba['renderAngle'] ?? 0x0);
                    _0x3c6f46['globalAlpha'] = 0.3;
                    _0x516a90(_0x3c6f46, _0x7f04ba['body'], _0x7f04ba['eyes'], _0x1cb431, _0x32f454);
                } finally {
                    _0x3c6f46['restore']();
                }
                if (!_0x260fa0((_0x7f04ba['renderX'] ?? _0x7f04ba['x']) + _0x7f04ba['width'] / 0x2, (_0x7f04ba['renderY'] ?? _0x7f04ba['y']) + _0x7f04ba['height'] / 0x2)) {
                    _0x3c6f46['save']();
                    _0x3c6f46['globalAlpha'] = 0.3;
                    _0x3c6f46['textAlign'] = 'center';
                    _0x3c6f46['lineJoin'] = 'round';
                    _0x3c6f46['lineWidth'] = 0x3;
                    _0x3c6f46['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x3c6f46['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                    _0x3c6f46['fillStyle'] = '#ffffff';
                    const _0x1a47c5 = _0x7f04ba['name'] + (_0x7f04ba['isOwner'] ? '\x20[🗝️]' : '');
                    _0x3c6f46['strokeText'](_0x1a47c5, _0x17c471, _0x4750bf - _0x32f454 / 0x2 - 0x10);
                    _0x3c6f46['fillText'](_0x1a47c5, _0x17c471, _0x4750bf - _0x32f454 / 0x2 - 0x10);
                    _0x3c6f46['restore']();
                }
            }
            _0x3c6f46['save']();
            try {
                _0x3c6f46['translate'](_0x2d60bd, _0x1aaeb1);
                _0x3c6f46['rotate'](_0x33a7db['angle']);
                _0x3c6f46['globalAlpha'] = 0.3;
                _0x516a90(_0x3c6f46, _0x1e4260, _0x508b6e, _0x1eb025, _0x3f90b6);
            } finally {
                _0x3c6f46['restore']();
            }
            if (!_0x260fa0(_0x33a7db['x'] + _0x33a7db['width'] / 0x2, _0x33a7db['y'] + _0x33a7db['height'] / 0x2)) {
                _0x3c6f46['save']();
                _0x3c6f46['globalAlpha'] = 0.3;
                _0x3c6f46['textAlign'] = 'center';
                _0x3c6f46['lineJoin'] = 'round';
                _0x3c6f46['lineWidth'] = 0x3;
                _0x3c6f46['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x3c6f46['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                _0x3c6f46['fillStyle'] = '#ffffff';
                const _0x505d64 = _0x3b58ee + (_0xc65fb1 ? '\x20[🗝️]' : '');
                _0x3c6f46['strokeText'](_0x505d64, _0x2d60bd, _0x1aaeb1 - _0x3f90b6 / 0x2 - 0x10);
                _0x3c6f46['fillText'](_0x505d64, _0x2d60bd, _0x1aaeb1 - _0x3f90b6 / 0x2 - 0x10);
                _0x3c6f46['restore']();
            }
        }
        for (let _0x14a3ed = _0x370ec2; _0x14a3ed <= _0x439679; _0x14a3ed++)
            for (let _0x23fcb4 = _0x108d25; _0x23fcb4 <= _0x30fba8; _0x23fcb4++) {
                const _0x44000d = _0x23fcb4 * _0x1d4674['MAP']['chunkSize'] - _0x298810;
                const _0x571d8d = _0x14a3ed * _0x1d4674['MAP']['chunkSize'] - _0x1d01a8;
                _0x3c6f46['drawImage'](_0x1d4674['MAP']['fgChunks'][_0x14a3ed][_0x23fcb4], _0x44000d, _0x571d8d, _0x1d4674['MAP']['chunkSize'] + 0x1, _0x1d4674['MAP']['chunkSize'] + 0x1);
            }
        if (_0x1d4674['EDITOR']['enabled'] && _0x1d4674['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x4f01a8 = _0x1d4674['INPUTS']['mouseX'] / _0x1d4674['SYSTEM']['viewScale'] + _0x1d4674['CAMERA']['x'];
            const _0x22dc53 = _0x1d4674['INPUTS']['mouseY'] / _0x1d4674['SYSTEM']['viewScale'] + _0x1d4674['CAMERA']['y'];
            const _0x5e7909 = Math['floor'](_0x4f01a8 / _0x1d4674['MAP']['tileSize']);
            const _0x396162 = Math['floor'](_0x22dc53 / _0x1d4674['MAP']['tileSize']);
            if (_0x5e7909 >= 0x0 && _0x5e7909 < _0x1d4674['MAP']['columns'] && _0x396162 >= 0x0 && _0x396162 < _0x1d4674['MAP']['rows']) {
                const _0xeaf8e3 = _0x5e7909 * _0x1d4674['MAP']['tileSize'] - _0x298810;
                const _0x2ec5e2 = _0x396162 * _0x1d4674['MAP']['tileSize'] - _0x1d01a8;
                _0x3c6f46['save']();
                _0x3c6f46['globalAlpha'] = 0.5;
                if (_0x1d4674['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x5dd541 = _0x1d4674['EDITOR']['selectedTileGid'] - 0x1;
                    _0x3c6f46['drawImage'](_0x149262, _0x5dd541 % _0x1d4674['MAP']['tilesetCols'] * _0x1d4674['MAP']['tileSize'], Math['floor'](_0x5dd541 / _0x1d4674['MAP']['tilesetCols']) * _0x1d4674['MAP']['tileSize'], _0x1d4674['MAP']['tileSize'], _0x1d4674['MAP']['tileSize'], _0xeaf8e3, _0x2ec5e2, _0x1d4674['MAP']['tileSize'], _0x1d4674['MAP']['tileSize']);
                } else {
                    _0x3c6f46['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x3c6f46['fillRect'](_0xeaf8e3, _0x2ec5e2, _0x1d4674['MAP']['tileSize'], _0x1d4674['MAP']['tileSize']);
                }
                _0x3c6f46['restore']();
            }
        }
        _0x4ef693(_0x3c6f46, _0x298810, _0x1d01a8);
        if (_0x5b84c8 > 0x0) {
            _0x3c6f46['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x5b84c8 + ')';
            _0x3c6f46['fillRect'](0x0, 0x0, _0x1d4674['CAMERA']['width'], _0x1d4674['CAMERA']['height']);
        }
        for (const _0x3c2d8c in _0x595265) {
            const _0x2bcb51 = _0x595265[_0x3c2d8c];
            if (_0x2bcb51['isDead'] && !_0x33a7db['isDead'])
                continue;
            const _0x3b202a = (_0x2bcb51['renderX'] ?? _0x2bcb51['x']) - _0x298810 + _0x2bcb51['width'] / 0x2;
            const _0x1efa03 = (_0x2bcb51['renderY'] ?? _0x2bcb51['y']) - _0x1d01a8 + _0x2bcb51['height'] / 0x2;
            _0xb8b0d6(_0x3c6f46, _0x2bcb51['chats'], _0x3b202a, _0x1efa03 - _0x2bcb51['height'] / 0x2 - 0x20);
        }
        _0xb8b0d6(_0x3c6f46, _0x33a7db['chats'], _0x2d60bd, _0x1aaeb1 - _0x33a7db['height'] / 0x2 - 0x20);
        if (_0x2dd3ac > 0x0) {
            _0x3c6f46['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x2dd3ac + ')';
            _0x3c6f46['fillRect'](0x0, 0x0, _0x1d4674['CAMERA']['width'], _0x1d4674['CAMERA']['height']);
        }
    } finally {
        _0x3c6f46['restore']();
    }
}
function _0x27b6b6(_0x2491c2) {
    if (!_0x1d4674['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x27b6b6);
    let _0x25719d = (_0x2491c2 - _0x1d4674['SYSTEM']['lastTime']) / 0x3e8;
    _0x1d4674['SYSTEM']['lastTime'] = _0x2491c2;
    if (_0x25719d > 0.1)
        _0x25719d = 0.1;
    if (_0x25719d < 0x0 || isNaN(_0x25719d))
        _0x25719d = 0.016;
    if (_0x2d912d) {
        _0x25b679(_0x25719d);
        _0x2eb14d();
        return;
    }
    if (!_0x131772)
        return;
    _0x3d16a1(_0x25719d);
    _0xaa085c['tick'](_0x2491c2);
    _0x2eb14d();
}
function _0x37c8ba() {
    if (_0x149262['complete'] && _0x149262['naturalWidth'] > 0x0) {
        _0x1d4674['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x6ed9df = Math['ceil'](_0x1d4674['MAP']['columns'] * _0x1d4674['MAP']['tileSize'] / _0x1d4674['MAP']['chunkSize']);
    const _0x21b9f8 = Math['ceil'](_0x1d4674['MAP']['rows'] * _0x1d4674['MAP']['tileSize'] / _0x1d4674['MAP']['chunkSize']);
    _0x1d4674['MAP']['bgChunks'] = [];
    _0x1d4674['MAP']['fgChunks'] = [];
    _0x1d4674['MAP']['wallChunks'] = [];
    for (let _0x4770dc = 0x0; _0x4770dc < _0x21b9f8; _0x4770dc++) {
        _0x1d4674['MAP']['bgChunks'][_0x4770dc] = [];
        _0x1d4674['MAP']['fgChunks'][_0x4770dc] = [];
        _0x1d4674['MAP']['wallChunks'][_0x4770dc] = [];
        for (let _0x115f86 = 0x0; _0x115f86 < _0x6ed9df; _0x115f86++) {
            const _0x56a10c = document['createElement']('canvas');
            _0x56a10c['width'] = _0x56a10c['height'] = _0x1d4674['MAP']['chunkSize'];
            const _0x3f7dac = document['createElement']('canvas');
            _0x3f7dac['width'] = _0x3f7dac['height'] = _0x1d4674['MAP']['chunkSize'];
            const _0x35e6c7 = document['createElement']('canvas');
            _0x35e6c7['width'] = _0x35e6c7['height'] = _0x1d4674['MAP']['chunkSize'];
            _0x1d4674['MAP']['bgChunks'][_0x4770dc][_0x115f86] = _0x56a10c;
            _0x1d4674['MAP']['fgChunks'][_0x4770dc][_0x115f86] = _0x3f7dac;
            _0x1d4674['MAP']['wallChunks'][_0x4770dc][_0x115f86] = _0x35e6c7;
            _0x237f8f(_0x115f86, _0x4770dc);
        }
    }
}
function _0x237f8f(_0x4f916c, _0x348759) {
    const _0x2f25a9 = _0x1d4674['MAP']['bgChunks'][_0x348759][_0x4f916c]['getContext']('2d', { 'alpha': !![] });
    const _0x3447d4 = _0x1d4674['MAP']['fgChunks'][_0x348759][_0x4f916c]['getContext']('2d', { 'alpha': !![] });
    const _0x228d0d = _0x1d4674['MAP']['wallChunks'][_0x348759] && _0x1d4674['MAP']['wallChunks'][_0x348759][_0x4f916c] ? _0x1d4674['MAP']['wallChunks'][_0x348759][_0x4f916c]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x2f25a9['imageSmoothingEnabled'] = _0x3447d4['imageSmoothingEnabled'] = ![];
    if (_0x228d0d)
        _0x228d0d['imageSmoothingEnabled'] = ![];
    _0x2f25a9['clearRect'](0x0, 0x0, _0x1d4674['MAP']['chunkSize'], _0x1d4674['MAP']['chunkSize']);
    _0x3447d4['clearRect'](0x0, 0x0, _0x1d4674['MAP']['chunkSize'], _0x1d4674['MAP']['chunkSize']);
    if (_0x228d0d)
        _0x228d0d['clearRect'](0x0, 0x0, _0x1d4674['MAP']['chunkSize'], _0x1d4674['MAP']['chunkSize']);
    const _0x5c7201 = Math['floor'](_0x4f916c * _0x1d4674['MAP']['chunkSize'] / _0x1d4674['MAP']['tileSize']);
    const _0x45dd19 = Math['ceil']((_0x4f916c + 0x1) * _0x1d4674['MAP']['chunkSize'] / _0x1d4674['MAP']['tileSize']);
    const _0x11d76f = Math['floor'](_0x348759 * _0x1d4674['MAP']['chunkSize'] / _0x1d4674['MAP']['tileSize']);
    const _0x2ef576 = Math['ceil']((_0x348759 + 0x1) * _0x1d4674['MAP']['chunkSize'] / _0x1d4674['MAP']['tileSize']);
    const _0xd8a033 = 0.5;
    const _0x18115b = _0x1d4674['MAP']['tileSize'] - _0xd8a033 * 0x2;
    _0x1d4674['MAP']['layers']['forEach'](_0x26926d => {
        const _0x15d885 = _0x26926d['name'] === 'walls';
        const _0xd5827c = _0x26926d['name'] === 'trees' ? _0x3447d4 : _0x15d885 ? _0x228d0d || _0x2f25a9 : _0x2f25a9;
        for (let _0x22f708 = Math['max'](0x0, _0x11d76f); _0x22f708 < Math['min'](_0x1d4674['MAP']['rows'], _0x2ef576); _0x22f708++) {
            for (let _0x2d7034 = Math['max'](0x0, _0x5c7201); _0x2d7034 < Math['min'](_0x1d4674['MAP']['columns'], _0x45dd19); _0x2d7034++) {
                let _0x3acf61 = _0x26926d['data'][_0x22f708 * _0x1d4674['MAP']['columns'] + _0x2d7034];
                if (_0x26926d['name'] === 'floor2' && _0x1d4674['MAP']['doors'] && _0x1d4674['MAP']['doors'][_0x22f708 * _0x1d4674['MAP']['columns'] + _0x2d7034]) {
                    _0x3acf61 = 0x2;
                }
                if (_0x3acf61 > 0x0) {
                    const _0x3c7d19 = _0x3acf61 - 0x1;
                    const _0xd78495 = _0x3c7d19 % _0x1d4674['MAP']['tilesetCols'] * _0x1d4674['MAP']['tileSize'] + _0xd8a033;
                    const _0x1fdd38 = Math['floor'](_0x3c7d19 / _0x1d4674['MAP']['tilesetCols']) * _0x1d4674['MAP']['tileSize'] + _0xd8a033;
                    const _0x3d0b91 = _0x2d7034 * _0x1d4674['MAP']['tileSize'] - _0x4f916c * _0x1d4674['MAP']['chunkSize'];
                    const _0x54117a = _0x22f708 * _0x1d4674['MAP']['tileSize'] - _0x348759 * _0x1d4674['MAP']['chunkSize'];
                    if (_0x3acf61 === 0x4) {
                        const _0x46837e = 0x1;
                        const _0x186a3e = _0x46837e % _0x1d4674['MAP']['tilesetCols'] * _0x1d4674['MAP']['tileSize'] + _0xd8a033;
                        const _0x423acb = Math['floor'](_0x46837e / _0x1d4674['MAP']['tilesetCols']) * _0x1d4674['MAP']['tileSize'] + _0xd8a033;
                        _0x2f25a9['drawImage'](_0x149262, _0x186a3e, _0x423acb, _0x18115b, _0x18115b, _0x3d0b91, _0x54117a, _0x1d4674['MAP']['tileSize'], _0x1d4674['MAP']['tileSize']);
                        let _0x3616a2 = _0x1d4674['MAP']['doors'] ? _0x1d4674['MAP']['doors'][_0x22f708 * _0x1d4674['MAP']['columns'] + _0x2d7034] : null;
                        if (!_0x3616a2) {
                            const _0x4e911c = _0x1d4674['MAP']['layers']['find'](_0x37fd01 => _0x37fd01['name'] === 'walls');
                            const _0x4fe49a = _0x22f708 > 0x0 && _0x4e911c && _0x4e911c['data'][(_0x22f708 - 0x1) * _0x1d4674['MAP']['columns'] + _0x2d7034] > 0x0;
                            const _0x4f9a1b = _0x22f708 < _0x1d4674['MAP']['rows'] - 0x1 && _0x4e911c && _0x4e911c['data'][(_0x22f708 + 0x1) * _0x1d4674['MAP']['columns'] + _0x2d7034] > 0x0;
                            const _0x1147f8 = _0x2d7034 > 0x0 && _0x4e911c && _0x4e911c['data'][_0x22f708 * _0x1d4674['MAP']['columns'] + _0x2d7034 - 0x1] > 0x0;
                            const _0x12b02f = _0x2d7034 < _0x1d4674['MAP']['columns'] - 0x1 && _0x4e911c && _0x4e911c['data'][_0x22f708 * _0x1d4674['MAP']['columns'] + _0x2d7034 + 0x1] > 0x0;
                            if (_0x1147f8 && _0x12b02f)
                                _0x3616a2 = _0x22f708 < _0x1d4674['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x4fe49a && _0x4f9a1b)
                                _0x3616a2 = _0x2d7034 < _0x1d4674['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x1efe06 = 0x0;
                        if (_0x3616a2 === 'bottom')
                            _0x1efe06 = Math['PI'] / 0x2;
                        else if (_0x3616a2 === 'left')
                            _0x1efe06 = Math['PI'];
                        else if (_0x3616a2 === 'top')
                            _0x1efe06 = -Math['PI'] / 0x2;
                        else if (_0x3616a2 === 'right')
                            _0x1efe06 = 0x0;
                        if (_0x1efe06 !== 0x0) {
                            _0xd5827c['save']();
                            _0xd5827c['translate'](_0x3d0b91 + _0x1d4674['MAP']['tileSize'] / 0x2, _0x54117a + _0x1d4674['MAP']['tileSize'] / 0x2);
                            _0xd5827c['rotate'](_0x1efe06);
                            _0xd5827c['drawImage'](_0x149262, _0xd78495, _0x1fdd38, _0x18115b, _0x18115b, -_0x1d4674['MAP']['tileSize'] / 0x2, -_0x1d4674['MAP']['tileSize'] / 0x2, _0x1d4674['MAP']['tileSize'], _0x1d4674['MAP']['tileSize']);
                            _0xd5827c['restore']();
                        } else {
                            _0xd5827c['drawImage'](_0x149262, _0xd78495, _0x1fdd38, _0x18115b, _0x18115b, _0x3d0b91, _0x54117a, _0x1d4674['MAP']['tileSize'], _0x1d4674['MAP']['tileSize']);
                        }
                    } else {
                        _0xd5827c['drawImage'](_0x149262, _0xd78495, _0x1fdd38, _0x18115b, _0x18115b, _0x3d0b91, _0x54117a, _0x1d4674['MAP']['tileSize'], _0x1d4674['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x34f084() {
    _0x149262['crossOrigin'] = 'Anonymous';
    _0x149262['onload'] = () => {
        _0x1d4674['MAP']['tilesetCols'] = 0x3;
        if (_0x1d4674['MAP']['columns'] > 0x0 && _0x1d4674['MAP']['layers'] && _0x1d4674['MAP']['layers']['length'] > 0x0) {
            _0x37c8ba();
        }
        _0x367b05();
    };
    _0x149262['onerror'] = () => {
        _0x1d4674['MAP']['tilesetCols'] = 0x1;
        _0x367b05();
    };
    _0x149262['src'] = 'assets/tilesheet.png';
    _0x302dc4['crossOrigin'] = 'Anonymous';
    _0x302dc4['onload'] = _0x367b05;
    _0x302dc4['onerror'] = () => {
        _0x367b05();
    };
    _0x302dc4['src'] = 'assets/center.png';
    _0x30a072['crossOrigin'] = 'Anonymous';
    _0x30a072['onload'] = _0x367b05;
    _0x30a072['onerror'] = () => {
        _0x367b05();
    };
    _0x30a072['src'] = 'assets/table.png';
}
function _0x367b05() {
    _0x1d4674['SYSTEM']['assetsLoaded']++;
    if (_0x1d4674['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x1d4674['MAP']['columns'] > 0x0 && _0x1d4674['MAP']['layers'] && _0x1d4674['MAP']['layers']['length'] > 0x0) {
            _0x37c8ba();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x5c399a();
    }
}
function _0x2bd3d7(_0x176ee2, _0x2164fb) {
    if (!_0xc65fb1 || !_0x5b2bc2)
        return;
    const _0x4e3de9 = _0x176ee2 / _0x1d4674['SYSTEM']['viewScale'] + _0x1d4674['CAMERA']['x'];
    const _0x4763db = _0x2164fb / _0x1d4674['SYSTEM']['viewScale'] + _0x1d4674['CAMERA']['y'];
    const _0x38a9c9 = Math['floor'](_0x4e3de9 / _0x1d4674['MAP']['tileSize']);
    const _0x32497c = Math['floor'](_0x4763db / _0x1d4674['MAP']['tileSize']);
    if (_0x38a9c9 >= 0x0 && _0x38a9c9 < _0x1d4674['MAP']['columns'] && _0x32497c >= 0x0 && _0x32497c < _0x1d4674['MAP']['rows'])
        _0x5b2bc2['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x1d4674['EDITOR']['selectedLayer'],
            'col': _0x38a9c9,
            'row': _0x32497c,
            'gid': _0x1d4674['EDITOR']['selectedTileGid']
        }));
}
function _0x395580() {
    const _0x4cd128 = document['getElementById']('palette');
    if (!_0x4cd128 || _0x4cd128['children']['length'] > 0x0)
        return;
    const _0x5df0fc = 0x40;
    const _0x4d95c3 = _0x149262;
    const _0x467b80 = document['createElement']('div');
    _0x467b80['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x5659b6 = document['createElement']('canvas');
    _0x5659b6['width'] = 0xc0;
    _0x5659b6['height'] = 0xa0;
    _0x5659b6['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x467b80['appendChild'](_0x5659b6);
    const _0x4e3f65 = document['createElement']('div');
    _0x4e3f65['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x467b80['appendChild'](_0x4e3f65);
    let _0x178e6d = 0x0, _0x4101f5 = 0x0;
    let _0x3a1a8d = ![], _0x1ef5f1 = 0x0, _0xa7dd35 = 0x0, _0x22f2af = 0x0, _0x4087c5 = 0x0;
    function _0x8a3728() {
        const _0x2b0491 = _0x5659b6['getContext']('2d');
        _0x2b0491['clearRect'](0x0, 0x0, _0x5659b6['width'], _0x5659b6['height']);
        _0x2b0491['imageSmoothingEnabled'] = ![];
        if (_0x4d95c3['complete'] && _0x4d95c3['naturalWidth'] > 0x0) {
            _0x2b0491['drawImage'](_0x4d95c3, _0x178e6d, _0x4101f5, _0x5659b6['width'], _0x5659b6['height'], 0x0, 0x0, _0x5659b6['width'], _0x5659b6['height']);
        }
        _0x2b0491['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x2b0491['lineWidth'] = 0x1;
        const _0x330964 = Math['floor'](_0x178e6d / _0x5df0fc);
        const _0x13702a = Math['floor'](_0x4101f5 / _0x5df0fc);
        for (let _0x122a2d = _0x330964; _0x122a2d <= _0x330964 + Math['ceil'](_0x5659b6['width'] / _0x5df0fc) + 0x1; _0x122a2d++) {
            const _0x4ce66b = _0x122a2d * _0x5df0fc - _0x178e6d;
            _0x2b0491['beginPath']();
            _0x2b0491['moveTo'](_0x4ce66b, 0x0);
            _0x2b0491['lineTo'](_0x4ce66b, _0x5659b6['height']);
            _0x2b0491['stroke']();
        }
        for (let _0x449361 = _0x13702a; _0x449361 <= _0x13702a + Math['ceil'](_0x5659b6['height'] / _0x5df0fc) + 0x1; _0x449361++) {
            const _0x4d0829 = _0x449361 * _0x5df0fc - _0x4101f5;
            _0x2b0491['beginPath']();
            _0x2b0491['moveTo'](0x0, _0x4d0829);
            _0x2b0491['lineTo'](_0x5659b6['width'], _0x4d0829);
            _0x2b0491['stroke']();
        }
    }
    function _0x4dc93() {
        const _0x1e1e84 = Math['max'](0x1, Math['ceil'](_0x4d95c3['naturalWidth'] / _0x5df0fc));
        const _0x53f05d = _0x1d4674['EDITOR']['selectedTileGid'];
        if (_0x53f05d <= 0x0) {
            _0x4e3f65['style']['display'] = 'none';
            return;
        }
        const _0x4a757b = _0x53f05d - 0x1;
        const _0x447c7b = _0x4a757b % _0x1e1e84;
        const _0x22a919 = Math['floor'](_0x4a757b / _0x1e1e84);
        const _0x493769 = _0x447c7b * _0x5df0fc - _0x178e6d;
        const _0x13ac20 = _0x22a919 * _0x5df0fc - _0x4101f5;
        _0x4e3f65['style']['display'] = 'block';
        _0x4e3f65['style']['left'] = _0x493769 + 'px';
        _0x4e3f65['style']['top'] = _0x13ac20 + 'px';
    }
    _0x4d95c3['onload'] = () => {
        _0x8a3728();
        _0x4dc93();
    };
    if (_0x4d95c3['complete'] && _0x4d95c3['naturalWidth'] > 0x0) {
        _0x8a3728();
        _0x4dc93();
    }
    _0x467b80['addEventListener']('mousedown', _0x2a9875 => {
        if (_0x2a9875['button'] === 0x0) {
            _0x3a1a8d = !![];
            _0x1ef5f1 = _0x2a9875['clientX'];
            _0xa7dd35 = _0x2a9875['clientY'];
            _0x22f2af = _0x178e6d;
            _0x4087c5 = _0x4101f5;
            _0x467b80['style']['cursor'] = 'grabbing';
            _0x2a9875['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x1ef59d => {
        if (!_0x3a1a8d)
            return;
        const _0x25fce4 = _0x1ef5f1 - _0x1ef59d['clientX'];
        const _0x4ed763 = _0xa7dd35 - _0x1ef59d['clientY'];
        const _0x27f9c4 = Math['max'](0x0, _0x4d95c3['naturalWidth'] - _0x5659b6['width']);
        const _0x2403b3 = Math['max'](0x0, _0x4d95c3['naturalHeight'] - _0x5659b6['height']);
        _0x178e6d = Math['max'](0x0, Math['min'](_0x27f9c4, _0x22f2af + _0x25fce4));
        _0x4101f5 = Math['max'](0x0, Math['min'](_0x2403b3, _0x4087c5 + _0x4ed763));
        _0x8a3728();
        _0x4dc93();
    });
    window['addEventListener']('mouseup', _0xe84a20 => {
        if (_0x3a1a8d) {
            _0x3a1a8d = ![];
            _0x467b80['style']['cursor'] = 'grab';
        }
    });
    _0x467b80['addEventListener']('click', _0x25d932 => {
        const _0x389f59 = _0x467b80['getBoundingClientRect']();
        const _0x2d385f = _0x25d932['clientX'] - _0x389f59['left'] + _0x178e6d;
        const _0x223cce = _0x25d932['clientY'] - _0x389f59['top'] + _0x4101f5;
        const _0x189d9f = Math['max'](0x1, Math['ceil'](_0x4d95c3['naturalWidth'] / _0x5df0fc));
        const _0x4b6c5e = Math['floor'](_0x2d385f / _0x5df0fc);
        const _0x5407f6 = Math['floor'](_0x223cce / _0x5df0fc);
        const _0x466566 = _0x5407f6 * _0x189d9f + _0x4b6c5e + 0x1;
        _0x1d4674['EDITOR']['selectedTileGid'] = _0x466566;
        _0x4dc93();
    });
    _0x4cd128['appendChild'](_0x467b80);
    const _0x707a27 = document['createElement']('div');
    _0x707a27['className'] = 'tile-btn\x20eraser-btn';
    _0x707a27['title'] = 'Eraser\x20(gid\x200)';
    _0x707a27['onclick'] = () => {
        _0x1d4674['EDITOR']['selectedTileGid'] = 0x0;
        _0x4e3f65['style']['display'] = 'none';
    };
    _0x4cd128['appendChild'](_0x707a27);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x1d4674['EDITOR']['enabled'] = !_0x1d4674['EDITOR']['enabled'];
        const _0x12d779 = document['getElementById']('editor-tools');
        if (_0x1d4674['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x12d779['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x12d779['style']['display'] = 'none';
        }
    });
    const _0x2f1e0b = document['getElementById']('start-game-btn');
    if (_0x2f1e0b) {
        _0x2f1e0b['addEventListener']('click', () => {
            if (_0x5b2bc2)
                _0x5b2bc2['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x35afec = document['getElementById']('rolelist-toggle-btn');
    if (_0x35afec) {
        let _0x2bd75c = 'subalignments';
        _0x35afec['addEventListener']('click', () => {
            if (_0x2bd75c === 'subalignments')
                _0x2bd75c = 'precise';
            else if (_0x2bd75c === 'precise')
                _0x2bd75c = 'off';
            else
                _0x2bd75c = 'subalignments';
            _0x35afec['innerText'] = 'Role\x20List:\x20' + _0x2bd75c['charAt'](0x0)['toUpperCase']() + _0x2bd75c['slice'](0x1);
            if (_0x5b2bc2)
                _0x5b2bc2['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x2bd75c
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x1f3c52 => {
        if (_0x1f3c52['id'] === 'editor-toggle-btn' || _0x1f3c52['id'] === 'start-game-btn' || _0x1f3c52['id'] === 'rolelist-toggle-btn')
            return;
        _0x1f3c52['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x5065f5 => _0x5065f5['classList']['remove']('active'));
            _0x1f3c52['classList']['add']('active');
            _0x1d4674['EDITOR']['selectedLayer'] = _0x1f3c52['dataset']['layer'];
        });
    });
}
function _0x1c2f52(_0x2bd384) {
    if (_0x5b2bc2)
        _0x5b2bc2['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x2bd384
        }));
}
function _0x5c478f(_0x248b8e) {
    if (_0x5b2bc2)
        _0x5b2bc2['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x248b8e
        }));
}
function _0x4203a5(_0x1dbf29, _0x806dc2, _0x282c25, _0x9227ee) {
    const _0x199f03 = document['getElementById']('admin-panel');
    if (_0x199f03)
        _0x199f03['remove']();
    if (_0x199f03 && _0x199f03['dataset']['target'] === String(_0x1dbf29))
        return;
    const _0x11c59a = document['createElement']('div');
    _0x11c59a['id'] = 'admin-panel';
    _0x11c59a['dataset']['target'] = String(_0x1dbf29);
    _0x11c59a['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0xaa09d6 = document['createElement']('div');
    _0xaa09d6['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0xaa09d6['textContent'] = _0x806dc2;
    _0x11c59a['appendChild'](_0xaa09d6);
    const _0x4c58ba = document['createElement']('button');
    _0x4c58ba['textContent'] = 'Kick';
    _0x4c58ba['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x4c58ba['onmouseenter'] = () => _0x4c58ba['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x4c58ba['onmouseleave'] = () => _0x4c58ba['style']['background'] = 'transparent';
    _0x4c58ba['onclick'] = () => {
        _0x1c2f52(_0x1dbf29);
        _0x11c59a['remove']();
    };
    _0x11c59a['appendChild'](_0x4c58ba);
    const _0x26adf3 = document['createElement']('button');
    _0x26adf3['textContent'] = 'Ban';
    _0x26adf3['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x26adf3['onmouseenter'] = () => _0x26adf3['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x26adf3['onmouseleave'] = () => _0x26adf3['style']['background'] = 'transparent';
    _0x26adf3['onclick'] = () => {
        _0x5c478f(_0x1dbf29);
        _0x11c59a['remove']();
    };
    _0x11c59a['appendChild'](_0x26adf3);
    document['body']['appendChild'](_0x11c59a);
    const _0x61e695 = _0x11c59a['offsetWidth'] || 0x91;
    const _0x596529 = _0x11c59a['offsetHeight'] || 0x50;
    let _0x14608d = _0x282c25 - _0x61e695;
    let _0x1c29c1 = _0x9227ee;
    if (_0x14608d < 0x4)
        _0x14608d = _0x282c25;
    if (_0x1c29c1 + _0x596529 > window['innerHeight'] - 0x4)
        _0x1c29c1 = window['innerHeight'] - _0x596529 - 0x4;
    _0x11c59a['style']['left'] = _0x14608d + 'px';
    _0x11c59a['style']['top'] = _0x1c29c1 + 'px';
    const _0x2c7c8b = _0x1a009b => {
        if (!_0x11c59a['contains'](_0x1a009b['target'])) {
            _0x11c59a['remove']();
            document['removeEventListener']('mousedown', _0x2c7c8b);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x2c7c8b), 0x0);
}
let _0x3f4b3f = '';
function _0x2f0b49() {
    const _0x1c047b = document['getElementById']('leaderboard-list');
    if (!_0x1c047b)
        return;
    let _0x5d4378 = _0x3b58ee + '|' + _0xc65fb1 + '|' + _0x33a7db['isDead'] + '|' + _0x131aa6['size'];
    for (const _0x53e515 in _0x595265) {
        const _0x2b5c0d = _0x595265[_0x53e515];
        _0x5d4378 += '|' + _0x53e515 + ':' + _0x2b5c0d['name'] + ':' + !!_0x2b5c0d['isOwner'] + ':' + !!_0x2b5c0d['isDead'] + ':' + _0x131aa6['has'](parseInt(_0x53e515));
    }
    if (_0x5d4378 === _0x3f4b3f)
        return;
    _0x3f4b3f = _0x5d4378;
    _0x1c047b['innerHTML'] = '';
    const _0x5ae227 = document['createElement']('div');
    _0x5ae227['className'] = 'leaderboard-entry';
    const _0x35dc7b = document['createElement']('span');
    _0x35dc7b['textContent'] = _0x3b58ee + (_0xc65fb1 ? '\x20[🗝️]' : '');
    if (_0x131aa6['has'](_0x131772) && !_0x33a7db['isDead']) {
        _0x35dc7b['style']['color'] = '#cc88ff';
    }
    _0x5ae227['appendChild'](_0x35dc7b);
    _0x1c047b['appendChild'](_0x5ae227);
    for (const _0x1ede8b in _0x595265) {
        const _0x1b4a4d = document['createElement']('div');
        _0x1b4a4d['className'] = 'leaderboard-entry';
        const _0x3d568f = document['createElement']('span');
        _0x3d568f['textContent'] = _0x595265[_0x1ede8b]['name'] + (_0x595265[_0x1ede8b]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x131aa6['has'](parseInt(_0x1ede8b)) && !_0x595265[_0x1ede8b]['isDead']) {
            _0x3d568f['style']['color'] = '#cc88ff';
        }
        _0x1b4a4d['appendChild'](_0x3d568f);
        if (_0xc65fb1 && !_0x595265[_0x1ede8b]['isOwner']) {
            const _0x56a890 = _0x595265[_0x1ede8b]['id'];
            const _0x3a8788 = _0x595265[_0x1ede8b]['name'];
            _0x1b4a4d['style']['cursor'] = 'context-menu';
            _0x1b4a4d['addEventListener']('contextmenu', _0x40c418 => {
                _0x40c418['preventDefault']();
                _0x40c418['stopPropagation']();
                _0x4203a5(_0x56a890, _0x3a8788, _0x40c418['clientX'], _0x40c418['clientY']);
            });
        }
        _0x1c047b['appendChild'](_0x1b4a4d);
    }
}
window['addEventListener']('resize', _0x5c399a);
function _0x5c399a() {
    _0x255df0['width'] = window['innerWidth'];
    _0x255df0['height'] = window['innerHeight'];
    _0x1d4674['SYSTEM']['viewScale'] = Math['max'](_0x255df0['width'] / _0x21ce75, _0x255df0['height'] / _0x1b97b6);
    _0x1d4674['CAMERA']['width'] = _0x255df0['width'] / _0x1d4674['SYSTEM']['viewScale'];
    _0x1d4674['CAMERA']['height'] = _0x255df0['height'] / _0x1d4674['SYSTEM']['viewScale'];
    _0x3c6f46['imageSmoothingEnabled'] = ![];
}
function _0x10d94f(_0x27e07e) {
    if (_0x27e07e['ctrlKey'] || _0x27e07e['metaKey']) {
        if (_0x27e07e['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x27e07e['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x27e07e['code'])) {
            _0x27e07e['preventDefault']();
            _0x27e07e['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x10d94f, { 'passive': ![] });
window['addEventListener']('keydown', _0x10d94f, { 'passive': ![] });
window['addEventListener']('keydown', _0x2d11b5 => {
    const _0x34c0fd = _0x2d11b5['key']['toLowerCase']();
    if (_0x34c0fd === 'tab') {
        _0x2d11b5['preventDefault']();
        const _0x5a9676 = document['getElementById']('will-ui');
        const _0x33540d = document['getElementById']('will-input');
        if (_0x5a9676['style']['display'] === 'flex') {
            _0x5a9676['style']['display'] = 'none';
            if (_0x1d4674['GAME_STATE'] !== 'NIGHT' && _0x5b2bc2)
                _0x5b2bc2['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x33540d['value']
                }));
            _0x33540d['blur']();
        } else {
            if (_0x1d4674['GAME_STATE'] === 'NIGHT') {
                _0x531c33('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x5a9676['style']['display'] = 'flex';
            _0x33540d['focus']();
            for (let _0x3d6ce4 in _0x1d4674['INPUTS']['keys'])
                _0x1d4674['INPUTS']['keys'][_0x3d6ce4] = ![];
        }
        return;
    }
    if (_0x2d11b5['key'] === 'Enter') {
        if (_0x2d912d) {
            const _0x337762 = document['getElementById']('play-btn');
            if (_0x337762)
                _0x337762['click']();
            return;
        }
        if (!_0x5b2bc2 || _0x5b2bc2['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x4561a6 = document['getElementById']('chat-ui');
        const _0x5ca0c0 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x5ca0c0) {
            const _0x981744 = _0x5ca0c0['value']['trim']();
            if (_0x981744['length'] > 0x0) {
                _0x5b2bc2['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x981744
                }));
            }
            _0x5ca0c0['value'] = '';
            _0x4561a6['style']['display'] = 'none';
            _0x5ca0c0['blur']();
        } else {
            _0x4561a6['style']['display'] = 'block';
            _0x5ca0c0['focus']();
            for (let _0x362df2 in _0x1d4674['INPUTS']['keys'])
                _0x1d4674['INPUTS']['keys'][_0x362df2] = ![];
        }
        _0x2d11b5['preventDefault']();
        return;
    }
    if (_0x2d11b5['key'] === 'Escape') {
        const _0x5d6e70 = document['getElementById']('role-index-modal');
        if (_0x5d6e70 && _0x5d6e70['style']['display'] === 'flex') {
            _0x5d6e70['style']['display'] = 'none';
            return;
        }
        const _0x2b9b49 = document['getElementById']('guide-ui');
        if (_0x2b9b49 && _0x2b9b49['style']['display'] === 'flex') {
            _0x2b9b49['style']['display'] = 'none';
            return;
        }
        const _0x4f2127 = document['getElementById']('ability-ui');
        if (_0x4f2127 && _0x4f2127['style']['display'] === 'block') {
            _0x4f2127['style']['display'] = 'none';
            return;
        }
        const _0x269125 = document['getElementById']('settings-panel');
        if (_0x269125 && _0x269125['style']['display'] === 'block') {
            _0x269125['style']['display'] = 'none';
            return;
        }
        const _0x3496f = document['getElementById']('mayor-confirm-dialog');
        if (_0x3496f && _0x3496f['style']['display'] === 'flex') {
            _0x3496f['style']['display'] = 'none';
            return;
        }
        const _0x12f8e3 = document['getElementById']('target-chooser-ui');
        if (_0x12f8e3 && _0x12f8e3['style']['display'] === 'flex') {
            _0x12f8e3['style']['display'] = 'none';
            return;
        }
        const _0x26596b = document['getElementById']('chat-ui');
        const _0x214182 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x214182) {
            _0x214182['value'] = '';
            _0x26596b['style']['display'] = 'none';
            _0x214182['blur']();
            _0x2d11b5['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x1d4674['INPUTS']['keys']['hasOwnProperty'](_0x34c0fd))
            _0x1d4674['INPUTS']['keys'][_0x34c0fd] = !![];
        if (!_0x5b2bc2 || _0x5b2bc2['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x34c0fd === 'h' && !_0x2d11b5['repeat']) {
            const _0x2b5067 = document['getElementById']('guide-ui');
            if (_0x2b5067) {
                _0x2b5067['style']['display'] = _0x2b5067['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x34c0fd === 't' && !_0x2d11b5['repeat']) {
            if (_0x33a7db['isDead'])
                return;
            if (_0x2f26d8 === 'Mayor') {
                if (_0x131aa6['has'](_0x131772)) {
                    _0x531c33('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x2893a0 = document['getElementById']('mayor-confirm-dialog');
                if (_0x2893a0)
                    _0x2893a0['style']['display'] = 'flex';
                return;
            }
            if (_0x1d4674['GAME_STATE'] === 'NIGHT') {
                if (!_0x1d4674['NIGHT_ABILITY_OPEN']) {
                    _0x531c33('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x894338 = document['getElementById']('ability-ui');
                if (_0x894338) {
                    if (_0x894338['style']['display'] === 'block') {
                        _0x894338['style']['display'] = 'none';
                    } else {
                        _0x2ce9fc();
                        _0x894338['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1d4674['GAME_STATE'] === 'DAY_DISCUSS' || _0x1d4674['GAME_STATE'] === 'DAY_VOTE') {
                _0x531c33('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x34c0fd === 'e' && !_0x33a7db['isDead']) {
            const _0xfcd9 = Date['now']();
            if (!window['_lastDoorSend'] || _0xfcd9 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0xfcd9;
                _0x5b2bc2['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x348a0a => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x461ed8 = _0x348a0a['key']['toLowerCase']();
        if (_0x1d4674['INPUTS']['keys']['hasOwnProperty'](_0x461ed8))
            _0x1d4674['INPUTS']['keys'][_0x461ed8] = ![];
    }
});
window['addEventListener']('mousemove', _0x444acb => {
    _0x1d4674['INPUTS']['mouseX'] = _0x444acb['clientX'];
    _0x1d4674['INPUTS']['mouseY'] = _0x444acb['clientY'];
    if (_0x1d4674['INPUTS']['isMouseDown'] && _0x1d4674['EDITOR']['enabled']) {
        _0x2bd3d7(_0x444acb['clientX'], _0x444acb['clientY']);
    }
});
window['addEventListener']('mousedown', _0x59b0c1 => {
    if (_0x59b0c1['target']['closest']('#editor-ui') || _0x59b0c1['target']['closest']('#leaderboard-ui') || _0x59b0c1['target']['closest']('#role-index-btn-wrap') || _0x59b0c1['target']['closest']('#role-index-modal') || _0x59b0c1['target']['closest']('#chat-log-ui') || _0x59b0c1['target']['closest']('#target-chooser-ui') || _0x59b0c1['target']['closest']('#guide-ui') || _0x59b0c1['target']['closest']('#role-list-ui') || _0x59b0c1['target']['closest']('#ability-ui') || _0x59b0c1['target']['closest']('#settings-panel') || _0x59b0c1['target']['closest']('#mayor-confirm-dialog') || _0x59b0c1['target']['closest']('#mobile-action-bar') || _0x59b0c1['target']['closest']('#mobile-top-bar') || _0x59b0c1['target']['closest']('#mobile-joystick-zone') || _0x59b0c1['target']['closest']('#mobile-chat-overlay') || _0x59b0c1['target']['closest']('#will-ui') || _0x59b0c1['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x59b0c1['button'] === 0x0) {
        _0x1d4674['INPUTS']['isMouseDown'] = !![];
        if (_0x1d4674['EDITOR']['enabled'])
            _0x2bd3d7(_0x59b0c1['clientX'], _0x59b0c1['clientY']);
    }
});
window['addEventListener']('mouseup', _0x46eaa3 => {
    _0x1d4674['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x1d1564 => {
    if (_0x1d1564['target']['closest']('#settings-btn'))
        return;
    const _0x4290a0 = document['getElementById']('leaderboard-list');
    const _0x5b8640 = document['getElementById']('leaderboard-toggle');
    if (_0x4290a0['style']['display'] === 'none') {
        _0x4290a0['style']['display'] = 'flex';
        _0x5b8640['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x4290a0['style']['display'] = 'none';
        _0x5b8640['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x53345e = document['getElementById']('close-target-btn');
if (_0x53345e) {
    _0x53345e['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x47f806 = document['getElementById']('close-guide-btn');
if (_0x47f806) {
    _0x47f806['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x35b84c = document['getElementById']('role-list-header');
if (_0x35b84c) {
    _0x35b84c['addEventListener']('click', () => {
        const _0x3f4ad4 = document['getElementById']('role-list-items');
        const _0x522f2c = document['getElementById']('role-list-toggle');
        if (_0x3f4ad4['style']['display'] === 'none') {
            _0x3f4ad4['style']['display'] = 'flex';
            _0x522f2c['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x3f4ad4['style']['display'] = 'none';
            _0x522f2c['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x41d04c() {
    const _0xd817c2 = document['getElementById']('mobile-joystick-zone');
    const _0x384279 = document['getElementById']('mobile-joystick-base');
    const _0x4ac32b = document['getElementById']('mobile-joystick-knob');
    if (_0xd817c2 && _0x384279 && _0x4ac32b) {
        const _0x3abf2f = 0x3e;
        const _0x22fa75 = (_0x24a851, _0x200ff5) => {
            const _0x43e013 = _0x384279['getBoundingClientRect']();
            const _0xdcc719 = _0x43e013['left'] + _0x43e013['width'] / 0x2;
            const _0x1bfd8d = _0x43e013['top'] + _0x43e013['height'] / 0x2;
            const _0x2b131c = _0x24a851 - _0xdcc719;
            const _0x362516 = _0x200ff5 - _0x1bfd8d;
            const _0x2af644 = Math['hypot'](_0x2b131c, _0x362516);
            if (_0x2af644 === 0x0) {
                _0x33e871 = 0x0;
                _0x1f1080 = 0x0;
                _0x2a147f = ![];
                _0x4ac32b['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x130441 = Math['min'](_0x2af644, _0x3abf2f);
            const _0x237948 = _0x2b131c / _0x2af644 * _0x130441;
            const _0xc12a35 = _0x362516 / _0x2af644 * _0x130441;
            _0x33e871 = _0x237948 / _0x3abf2f;
            _0x1f1080 = _0xc12a35 / _0x3abf2f;
            _0x2a147f = _0x2af644 >= _0x3abf2f * 0.75;
            _0x4ac32b['style']['transform'] = 'translate(' + _0x237948 + 'px,\x20' + _0xc12a35 + 'px)';
        };
        const _0x179cc0 = _0xf484bf => {
            for (let _0x5378a7 = 0x0; _0x5378a7 < _0xf484bf['changedTouches']['length']; _0x5378a7++) {
                const _0x36fbd4 = _0xf484bf['changedTouches'][_0x5378a7];
                if (_0x445720 === null) {
                    _0x445720 = _0x36fbd4['identifier'];
                    _0x58565e = !![];
                    _0x22fa75(_0x36fbd4['clientX'], _0x36fbd4['clientY']);
                    break;
                }
            }
        };
        const _0x3a7890 = _0x16577e => {
            for (let _0xa5d074 = 0x0; _0xa5d074 < _0x16577e['changedTouches']['length']; _0xa5d074++) {
                const _0x502fdf = _0x16577e['changedTouches'][_0xa5d074];
                if (_0x502fdf['identifier'] === _0x445720) {
                    _0x22fa75(_0x502fdf['clientX'], _0x502fdf['clientY']);
                    break;
                }
            }
        };
        const _0x3906aa = _0x12d53f => {
            for (let _0x26e7e5 = 0x0; _0x26e7e5 < _0x12d53f['changedTouches']['length']; _0x26e7e5++) {
                const _0x5f24e0 = _0x12d53f['changedTouches'][_0x26e7e5];
                if (_0x5f24e0['identifier'] === _0x445720) {
                    _0x445720 = null;
                    _0x58565e = ![];
                    _0x33e871 = 0x0;
                    _0x1f1080 = 0x0;
                    _0x2a147f = ![];
                    _0x4ac32b['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0xd817c2['addEventListener']('touchstart', _0x457619 => {
            _0x457619['preventDefault']();
            _0x179cc0(_0x457619);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x3a7890, { 'passive': !![] });
        window['addEventListener']('touchend', _0x3906aa, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x3906aa, { 'passive': !![] });
    }
    const _0x43e86c = (_0x2acfac, _0x57322e) => {
        const _0x5413af = _0x2acfac / _0x1d4674['SYSTEM']['viewScale'];
        const _0x16a071 = _0x57322e / _0x1d4674['SYSTEM']['viewScale'];
        const _0x19b501 = _0x33a7db['x'] - _0x1d4674['CAMERA']['x'] + _0x33a7db['width'] / 0x2;
        const _0x3204e4 = _0x33a7db['y'] - _0x1d4674['CAMERA']['y'] + _0x33a7db['height'] / 0x2;
        _0x2403f5 = Math['atan2'](_0x16a071 - _0x3204e4, _0x5413af - _0x19b501);
        _0x26c0a9 = !![];
        _0x1d4674['INPUTS']['mouseX'] = _0x2acfac;
        _0x1d4674['INPUTS']['mouseY'] = _0x57322e;
    };
    _0x255df0['addEventListener']('touchstart', _0x20f350 => {
        if (_0x2d912d)
            return;
        for (let _0x35a35b = 0x0; _0x35a35b < _0x20f350['changedTouches']['length']; _0x35a35b++) {
            const _0x24a9fe = _0x20f350['changedTouches'][_0x35a35b];
            if (_0x24a9fe['identifier'] !== _0x445720 && _0x53df64 === null) {
                _0x53df64 = _0x24a9fe['identifier'];
                _0x43e86c(_0x24a9fe['clientX'], _0x24a9fe['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x255df0['addEventListener']('touchmove', _0x34a6a7 => {
        if (_0x2d912d)
            return;
        for (let _0x208b4b = 0x0; _0x208b4b < _0x34a6a7['changedTouches']['length']; _0x208b4b++) {
            const _0x1b5198 = _0x34a6a7['changedTouches'][_0x208b4b];
            if (_0x1b5198['identifier'] === _0x53df64) {
                _0x43e86c(_0x1b5198['clientX'], _0x1b5198['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x1cd46a = _0x59b5fd => {
        for (let _0x12e812 = 0x0; _0x12e812 < _0x59b5fd['changedTouches']['length']; _0x12e812++) {
            const _0x273f18 = _0x59b5fd['changedTouches'][_0x12e812];
            if (_0x273f18['identifier'] === _0x53df64) {
                _0x53df64 = null;
                _0x26c0a9 = ![];
                break;
            }
        }
    };
    _0x255df0['addEventListener']('touchend', _0x1cd46a, { 'passive': !![] });
    _0x255df0['addEventListener']('touchcancel', _0x1cd46a, { 'passive': !![] });
    const _0xa39c7 = document['getElementById']('mob-sprint-btn');
    if (_0xa39c7) {
        _0xa39c7['addEventListener']('click', _0x1aeda0 => {
            _0x1aeda0['stopPropagation']();
            _0x3616f1 = !_0x3616f1;
            _0xa39c7['classList']['toggle']('active', _0x3616f1);
        });
    }
    const _0x336842 = document['getElementById']('mob-interact-btn');
    if (_0x336842) {
        _0x336842['addEventListener']('click', _0x10b74d => {
            _0x10b74d['stopPropagation']();
            if (!_0x33a7db['isDead']) {
                const _0x436ac9 = Date['now']();
                if (!window['_lastDoorSend'] || _0x436ac9 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x436ac9;
                    if (_0x5b2bc2 && _0x5b2bc2['readyState'] === WebSocket['OPEN'])
                        _0x5b2bc2['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x85897c = document['getElementById']('mob-ability-btn');
    if (_0x85897c) {
        _0x85897c['addEventListener']('click', _0x70e365 => {
            _0x70e365['stopPropagation']();
            if (_0x33a7db['isDead'])
                return;
            if (_0x2f26d8 === 'Mayor') {
                if (_0x131aa6['has'](_0x131772)) {
                    _0x531c33('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x30af0d = document['getElementById']('mayor-confirm-dialog');
                if (_0x30af0d)
                    _0x30af0d['style']['display'] = 'flex';
                return;
            }
            if (_0x1d4674['GAME_STATE'] === 'NIGHT') {
                if (!_0x1d4674['NIGHT_ABILITY_OPEN']) {
                    _0x531c33('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x273db1 = document['getElementById']('ability-ui');
                if (_0x273db1) {
                    if (_0x273db1['style']['display'] === 'block') {
                        _0x273db1['style']['display'] = 'none';
                    } else {
                        _0x2ce9fc();
                        _0x273db1['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1d4674['GAME_STATE'] === 'DAY_DISCUSS' || _0x1d4674['GAME_STATE'] === 'DAY_VOTE') {
                _0x531c33('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x587a50 = document['getElementById']('mob-will-btn');
    const _0x2ffa1b = document['getElementById']('will-ui');
    const _0x5df46d = document['getElementById']('will-input');
    const _0x3ad7df = document['getElementById']('close-will-btn');
    const _0x2800ef = () => {
        if (!_0x2ffa1b)
            return;
        if (_0x2ffa1b['style']['display'] === 'flex') {
            _0x2ffa1b['style']['display'] = 'none';
            if (_0x1d4674['GAME_STATE'] !== 'NIGHT' && _0x5b2bc2 && _0x5b2bc2['readyState'] === WebSocket['OPEN'] && _0x5df46d) {
                _0x5b2bc2['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x5df46d['value']
                }));
            }
            if (_0x5df46d)
                _0x5df46d['blur']();
        } else {
            if (_0x1d4674['GAME_STATE'] === 'NIGHT') {
                _0x531c33('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x2ffa1b['style']['display'] = 'flex';
            if (_0x5df46d)
                _0x5df46d['focus']();
        }
    };
    if (_0x587a50)
        _0x587a50['addEventListener']('click', _0x1ad302 => {
            _0x1ad302['stopPropagation']();
            _0x2800ef();
        });
    if (_0x3ad7df)
        _0x3ad7df['addEventListener']('click', _0x543976 => {
            _0x543976['stopPropagation']();
            _0x2800ef();
        });
    const _0x2837c5 = document['getElementById']('mob-chat-btn');
    const _0x494379 = document['getElementById']('mobile-chat-overlay');
    const _0x514719 = document['getElementById']('mobile-chat-input');
    const _0x2eced9 = document['getElementById']('mobile-chat-send');
    const _0xe9d05 = document['getElementById']('mobile-chat-cancel');
    const _0x15e761 = () => {
        if (!_0x494379 || !_0x514719)
            return;
        _0x494379['style']['display'] = 'flex';
        _0x514719['value'] = '';
        _0x514719['focus']();
    };
    const _0x41cbed = () => {
        if (!_0x494379 || !_0x514719)
            return;
        _0x494379['style']['display'] = 'none';
        _0x514719['blur']();
    };
    const _0x225c60 = () => {
        if (!_0x514719)
            return;
        const _0xcca956 = _0x514719['value']['trim']();
        if (_0xcca956['length'] > 0x0 && _0x5b2bc2 && _0x5b2bc2['readyState'] === WebSocket['OPEN']) {
            _0x5b2bc2['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0xcca956
            }));
        }
        _0x514719['value'] = '';
        _0x41cbed();
    };
    if (_0x2837c5)
        _0x2837c5['addEventListener']('click', _0x5c1466 => {
            _0x5c1466['stopPropagation']();
            _0x15e761();
        });
    if (_0x2eced9)
        _0x2eced9['addEventListener']('click', _0x4e38f8 => {
            _0x4e38f8['stopPropagation']();
            _0x225c60();
        });
    if (_0xe9d05)
        _0xe9d05['addEventListener']('click', _0x1085f3 => {
            _0x1085f3['stopPropagation']();
            _0x41cbed();
        });
    if (_0x514719) {
        _0x514719['addEventListener']('keydown', _0x536817 => {
            if (_0x536817['key'] === 'Enter') {
                _0x536817['preventDefault']();
                _0x225c60();
            } else if (_0x536817['key'] === 'Escape') {
                _0x41cbed();
            }
        });
    }
    const _0x5e79ee = document['getElementById']('mob-top-chat');
    if (_0x5e79ee)
        _0x5e79ee['addEventListener']('click', _0x36055b => {
            _0x36055b['stopPropagation']();
            _0x15e761();
        });
    const _0x3963da = document['getElementById']('mob-top-will');
    if (_0x3963da)
        _0x3963da['addEventListener']('click', _0x3a05b0 => {
            _0x3a05b0['stopPropagation']();
            _0x2800ef();
        });
    const _0x3eb8d2 = document['getElementById']('mob-top-roles');
    if (_0x3eb8d2) {
        _0x3eb8d2['addEventListener']('click', _0x5c11ee => {
            _0x5c11ee['stopPropagation']();
            const _0x474aef = document['getElementById']('role-list-ui');
            const _0x2e0acd = document['getElementById']('leaderboard-ui');
            if (_0x2e0acd)
                _0x2e0acd['style']['display'] = 'none';
            if (_0x474aef)
                _0x474aef['style']['display'] = _0x474aef['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x231421 = document['getElementById']('mob-top-players');
    if (_0x231421) {
        _0x231421['addEventListener']('click', _0x36b02a => {
            _0x36b02a['stopPropagation']();
            const _0x3e5006 = document['getElementById']('leaderboard-ui');
            const _0x5becfd = document['getElementById']('role-list-ui');
            if (_0x5becfd)
                _0x5becfd['style']['display'] = 'none';
            if (_0x3e5006)
                _0x3e5006['style']['display'] = _0x3e5006['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x38b48d = document['getElementById']('mob-top-help');
    if (_0x38b48d) {
        _0x38b48d['addEventListener']('click', _0x27b9cc => {
            _0x27b9cc['stopPropagation']();
            const _0x104a46 = document['getElementById']('guide-ui');
            if (_0x104a46)
                _0x104a46['style']['display'] = _0x104a46['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x657aac) {
            _0x657aac = !![];
            _0xf159d();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
