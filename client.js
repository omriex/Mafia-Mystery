document['addEventListener']('contextmenu', _0x24cf49 => _0x24cf49['preventDefault']());
const _0x426ad2 = {
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
let _0x266930 = '';
function _0x2959ac(_0x3b212c, _0x22fdb5) {
    const _0x5b5d3a = document['getElementById']('role-list-ui');
    const _0x555dc2 = document['getElementById']('role-list-items');
    if (!_0x5b5d3a || !_0x555dc2)
        return;
    if (!_0x22fdb5 || _0x22fdb5 === 'off' || !_0x3b212c || _0x3b212c['length'] === 0x0) {
        _0x5b5d3a['style']['display'] = 'none';
        return;
    }
    const _0x2d3816 = _0x22fdb5 + '|' + JSON['stringify'](_0x3b212c);
    if (_0x2d3816 === _0x266930)
        return;
    _0x266930 = _0x2d3816;
    const _0x12183f = document['getElementById']('role-tooltip');
    if (_0x12183f) {
        _0x12183f['style']['visibility'] = 'hidden';
        _0x12183f['style']['opacity'] = '0';
    }
    _0x5b5d3a['style']['display'] = 'flex';
    _0x555dc2['innerHTML'] = '';
    _0x3b212c['forEach'](_0x3fa6b0 => {
        const _0x5f5221 = document['createElement']('div');
        _0x5f5221['className'] = 'role-list-entry';
        const _0x5d45b3 = _0x3fa6b0['name']['includes']('Mafia') || _0x3fa6b0['name'] === 'Skinwalker' || _0x3fa6b0['name'] === 'Blackmailer';
        _0x5f5221['classList']['add'](_0x5d45b3 ? 'mafia' : 'town');
        if (_0x22fdb5 === 'precise' && _0x3fa6b0['isDead']) {
            _0x5f5221['classList']['remove']('town', 'mafia');
            _0x5f5221['classList']['add']('dead');
            _0x5f5221['innerHTML'] = '<span>' + _0x3fa6b0['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x2d4de7 = _0x3fa6b0['count'] !== undefined && _0x3fa6b0['count'] !== null ? _0x3fa6b0['count'] + 'x\x20' : '';
            _0x5f5221['innerHTML'] = '<span>' + _0x2d4de7 + _0x3fa6b0['name'] + '</span>';
        }
        if (_0x22fdb5 === 'subalignments' && _0x426ad2[_0x3fa6b0['name']]) {
            _0x5f5221['style']['cursor'] = 'pointer';
            _0x5f5221['addEventListener']('mouseenter', () => {
                const _0x2ee630 = document['getElementById']('role-tooltip');
                if (!_0x2ee630)
                    return;
                const _0x338f76 = _0x426ad2[_0x3fa6b0['name']]['join'](',\x20');
                _0x2ee630['innerHTML'] = '';
                const _0x1a281a = document['createElement']('span');
                _0x1a281a['style']['color'] = '#ffcc00';
                _0x1a281a['textContent'] = _0x3fa6b0['name'];
                _0x2ee630['appendChild'](_0x1a281a);
                _0x2ee630['appendChild'](document['createElement']('br'));
                _0x2ee630['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x338f76));
                const _0x406b4d = _0x5f5221['getBoundingClientRect']();
                _0x2ee630['style']['left'] = _0x406b4d['left'] - 0xeb + 'px';
                _0x2ee630['style']['top'] = _0x406b4d['top'] + 'px';
                _0x2ee630['style']['display'] = 'block';
                _0x2ee630['style']['visibility'] = 'visible';
                _0x2ee630['style']['opacity'] = '1';
            });
            _0x5f5221['addEventListener']('mouseleave', () => {
                const _0x52a815 = document['getElementById']('role-tooltip');
                if (_0x52a815) {
                    _0x52a815['style']['display'] = 'none';
                    _0x52a815['style']['visibility'] = 'hidden';
                    _0x52a815['style']['opacity'] = '0';
                }
            });
        }
        _0x555dc2['appendChild'](_0x5f5221);
    });
}
let _0x3deee7 = null;
let _0x16badb = null;
const _0x3c12bc = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x2adc50 = 'Player???';
let _0x1ce262 = ![];
let _0x52b337 = {};
let _0x2d2651 = null;
let _0x2760e6 = 0x0;
let _0x11c199 = 0x0;
let _0x7b86f1 = new Set();
let _0x522285 = ![];
let _0x42f09d = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x2e6d79 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x2a436b = ![];
let _0x2a9d47 = null;
let _0xec123e = 0x0;
let _0x190da5 = 0x0;
let _0x19b352 = ![];
let _0x54b77c = ![];
let _0x4598b8 = 0x0;
let _0x2da9dd = null;
let _0x574e4f = ![];
let _0xfc00b5 = 0x0;
let _0x13c080 = 0x0;
let _0xa59685 = [];
let _0x133132 = [];
let _0x31dd3c = new Set();
const _0x573e78 = ((() => {
    const _0x105d1a = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x1b0035 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x2f54a5 = 0x320;
    const _0x43ab54 = {};
    const _0x24b742 = {};
    let _0x19e4fe = null;
    let _0x3052ad = _0x1b0035 === 0x0;
    let _0x5cc34c = ![];
    for (const [_0x3355e2, _0x49f825] of Object['entries'](_0x105d1a)) {
        const _0x4563df = new Audio(_0x49f825);
        _0x4563df['loop'] = !![];
        _0x4563df['volume'] = 0x0;
        _0x4563df['preload'] = 'auto';
        _0x43ab54[_0x3355e2] = _0x4563df;
        _0x24b742[_0x3355e2] = null;
    }
    const _0x32a21f = _0x4448a8 => Math['min'](0x1, Math['max'](0x0, _0x4448a8));
    function _0x3bf286(_0x307236) {
        if (_0x24b742[_0x307236] !== null) {
            cancelAnimationFrame(_0x24b742[_0x307236]);
            _0x24b742[_0x307236] = null;
        }
    }
    function _0x334021(_0x43300b, _0x1eee82, _0x3fcb11, _0x504356, _0x12b798) {
        _0x3bf286(_0x43300b);
        const _0x210ac3 = _0x43ab54[_0x43300b];
        const _0x509f50 = performance['now']();
        const _0x25aa48 = _0x2d213b => {
            const _0x579899 = _0x32a21f((_0x2d213b - _0x509f50) / _0x504356);
            const _0x38b57c = _0x32a21f(_0x1eee82 + (_0x3fcb11 - _0x1eee82) * _0x579899);
            _0x210ac3['volume'] = _0x3052ad ? 0x0 : _0x38b57c;
            if (_0x579899 < 0x1) {
                _0x24b742[_0x43300b] = requestAnimationFrame(_0x25aa48);
            } else {
                _0x24b742[_0x43300b] = null;
                _0x210ac3['volume'] = _0x3052ad ? 0x0 : _0x32a21f(_0x3fcb11);
                if (_0x12b798)
                    _0x12b798();
            }
        };
        _0x24b742[_0x43300b] = requestAnimationFrame(_0x25aa48);
    }
    function _0x3aa501(_0x2b7e0f) {
        const _0x77648 = _0x2b7e0f['play']();
        if (_0x77648 && _0x77648['catch']) {
            _0x77648['catch'](() => {
                if (!_0x5cc34c) {
                    const _0x59a817 = () => {
                        _0x5cc34c = !![];
                        _0x2b7e0f['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x59a817);
                        document['removeEventListener']('keydown', _0x59a817);
                        document['removeEventListener']('touchstart', _0x59a817);
                    };
                    document['addEventListener']('click', _0x59a817, { 'once': !![] });
                    document['addEventListener']('keydown', _0x59a817, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x59a817, { 'once': !![] });
                }
            });
        }
    }
    function _0x26fc31(_0x4bb8ff) {
        if (!_0x105d1a[_0x4bb8ff])
            return;
        if (_0x19e4fe === _0x4bb8ff)
            return;
        const _0x1cabae = _0x19e4fe;
        _0x19e4fe = _0x4bb8ff;
        const _0x1cddd8 = _0x43ab54[_0x4bb8ff];
        _0x3bf286(_0x4bb8ff);
        _0x1cddd8['currentTime'] = 0x0;
        _0x1cddd8['volume'] = 0x0;
        _0x3aa501(_0x1cddd8);
        _0x334021(_0x4bb8ff, 0x0, _0x1b0035, _0x2f54a5);
        if (_0x1cabae && _0x43ab54[_0x1cabae]) {
            const _0x21e6a5 = _0x1cabae;
            const _0x40a6c5 = _0x43ab54[_0x21e6a5];
            const _0x1e6e20 = _0x32a21f(_0x40a6c5['volume']);
            _0x334021(_0x21e6a5, _0x1e6e20, 0x0, _0x2f54a5, () => {
                _0x40a6c5['pause']();
                _0x40a6c5['currentTime'] = 0x0;
            });
        }
    }
    function _0x3147bc(_0x9bf69) {
        _0x1b0035 = _0x32a21f(_0x9bf69);
        localStorage['setItem']('musicVolume', String(_0x1b0035));
        if (!_0x3052ad && _0x19e4fe && _0x24b742[_0x19e4fe] === null) {
            _0x43ab54[_0x19e4fe]['volume'] = _0x1b0035;
        }
    }
    function _0x4b31d5() {
        return _0x1b0035;
    }
    function _0x194924(_0x4335a4) {
        _0x3052ad = _0x4335a4;
        for (const _0x9b2140 of Object['keys'](_0x43ab54)) {
            if (_0x24b742[_0x9b2140] === null) {
                _0x43ab54[_0x9b2140]['volume'] = _0x4335a4 || _0x9b2140 !== _0x19e4fe ? 0x0 : _0x1b0035;
            }
        }
    }
    function _0x19a96b() {
        return _0x3052ad;
    }
    function _0x4bf4ea(_0x30b406) {
        if (_0x30b406 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x30b406 === 'DAY_VOTE')
            return 'voting';
        if (_0x30b406 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x29cf6d(_0x4f7f92) {
        _0x26fc31(_0x4bf4ea(_0x4f7f92));
    }
    function _0x34134e(_0x53f67e) {
        _0x26fc31(_0x53f67e);
    }
    return {
        'play': _0x26fc31,
        'onStateChange': _0x29cf6d,
        'onSoundEvent': _0x34134e,
        'setVolume': _0x3147bc,
        'getVolume': _0x4b31d5,
        'setMuted': _0x194924,
        'isMuted': _0x19a96b
    };
})());
const _0x4f250b = ((() => {
    const _0x33cc14 = 0x258;
    const _0x428057 = 0xb4;
    const _0x5c6d2e = 0x708;
    const _0x4d1c01 = 0x140;
    const _0x4b79b0 = 0.18;
    const _0x46624c = 0.95;
    const _0x19d074 = new Audio('audio/heartbeat.mp3');
    _0x19d074['loop'] = ![];
    _0x19d074['preload'] = 'auto';
    _0x19d074['volume'] = 0x0;
    let _0x1772db = 0x0;
    let _0x5b24d9 = Infinity;
    function _0x414606(_0x5107fb, _0x20863d, _0x4244b8) {
        return Math['min'](_0x4244b8, Math['max'](_0x20863d, _0x5107fb));
    }
    function _0x12bdb0(_0x53867a, _0x4dbf5c, _0x47f39e) {
        return _0x53867a + (_0x4dbf5c - _0x53867a) * _0x47f39e;
    }
    function _0x4c651e(_0xad8178) {
        if (_0x4c9809['GAME_STATE'] !== 'NIGHT' || _0x2974aa['isDead'] || _0x2d2651 === 'Skinwalker' || _0x2d2651 === 'Blackmailer') {
            _0x5b24d9 = Infinity;
            return;
        }
        const _0x38cb2f = _0x2974aa['x'] + 22.5;
        const _0x37196a = _0x2974aa['y'] + 22.5;
        let _0x4ba196 = Infinity;
        for (const _0x5a2550 in _0x52b337) {
            const _0x560b75 = _0x52b337[_0x5a2550];
            if (!_0x560b75['isDark'] || _0x560b75['isDead'])
                continue;
            const _0xcee01f = _0x560b75['renderX'] + 22.5 - _0x38cb2f;
            const _0x578566 = _0x560b75['renderY'] + 22.5 - _0x37196a;
            const _0x3e776d = Math['sqrt'](_0xcee01f * _0xcee01f + _0x578566 * _0x578566);
            if (_0x3e776d < _0x4ba196)
                _0x4ba196 = _0x3e776d;
        }
        _0x5b24d9 = _0x4ba196;
        if (_0x4ba196 > _0x33cc14)
            return;
        const _0x24b0e2 = 0x1 - _0x414606((_0x4ba196 - _0x428057) / (_0x33cc14 - _0x428057), 0x0, 0x1);
        const _0x3f78c5 = _0x12bdb0(_0x5c6d2e, _0x4d1c01, _0x24b0e2);
        const _0x2348bc = _0x12bdb0(_0x4b79b0, _0x46624c, _0x24b0e2);
        if (_0xad8178 >= _0x1772db) {
            _0x19d074['currentTime'] = 0x0;
            _0x19d074['volume'] = _0x573e78['isMuted']() ? 0x0 : _0x414606(_0x2348bc * _0x573e78['getVolume']() / 0.7, 0x0, 0x1);
            _0x19d074['play']()['catch'](() => {
            });
            _0x1772db = _0xad8178 + _0x3f78c5;
        }
    }
    return { 'tick': _0x4c651e };
})());
function _0x21778f() {
    const _0x178305 = document['getElementById']('mob-ability-btn');
    if (!_0x178305)
        return;
    const _0x33ca20 = _0x4c9809['GAME_STATE'] === 'NIGHT' && !_0x2974aa['isDead'];
    const _0x156910 = _0x2d2651 === 'Mayor' && !_0x7b86f1['has'](_0x16badb) && !_0x2974aa['isDead'];
    if (_0x33ca20 || _0x156910) {
        _0x178305['style']['display'] = 'flex';
    } else {
        _0x178305['style']['display'] = 'none';
    }
}
function _0x3246bd() {
    const _0x46e9de = document['getElementById']('mobile-joystick-zone');
    const _0x14701c = document['getElementById']('mobile-top-bar');
    const _0x5f24e5 = document['getElementById']('mobile-action-bar');
    if (!_0x46e9de || !_0x14701c || !_0x5f24e5)
        return;
    if (!_0x504f49 && _0x2e6d79) {
        _0x46e9de['style']['display'] = 'flex';
        _0x14701c['style']['display'] = 'flex';
        _0x5f24e5['style']['display'] = 'flex';
        _0x21778f();
    } else {
        _0x46e9de['style']['display'] = 'none';
        _0x14701c['style']['display'] = 'none';
        _0x5f24e5['style']['display'] = 'none';
    }
}
const _0x2684ef = document['getElementById']('gameCanvas');
const _0x4cb236 = _0x2684ef['getContext']('2d', { 'alpha': ![] });
const _0x1fd2ee = 0x500;
const _0xc8eb02 = 0x2d0;
const _0x4c9809 = {
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
        'width': _0x1fd2ee,
        'height': _0xc8eb02
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
const _0x2974aa = {
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
const _0x1bab2e = new Image();
const _0x260596 = new Image();
const _0x16639d = new Image();
const _0x36177d = new Image();
_0x36177d['src'] = 'assets/mayor\x20cosmetic.png';
const _0x3c38e8 = [
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
const _0xc760a4 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x27f41d = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x27f41d === 'body1.png' || _0x27f41d === 'body1')
    _0x27f41d = 'body01.png';
if (!_0x27f41d['endsWith']('.png'))
    _0x27f41d += '.png';
let _0x173b31 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x173b31['endsWith']('.png'))
    _0x173b31 += '.png';
let _0x504f49 = !![];
let _0x1779bb = null;
let _0x7e709b = null;
let _0x5af89e = 0x3c;
let _0x51eaf7 = 0x2d;
const _0x1a101b = {};
const _0xbff378 = new Image();
_0xbff378['src'] = 'assets/yanito932.png';
_0x1a101b['assets/yanito932.png'] = _0xbff378;
function _0x3edc06(_0x23a487) {
    if (!_0x1a101b[_0x23a487] || !_0x1a101b[_0x23a487]['complete'] && _0x1a101b[_0x23a487]['naturalWidth'] === 0x0 && _0x1a101b[_0x23a487]['naturalHeight'] === 0x0) {
        const _0x5172cd = new Image();
        _0x5172cd['src'] = _0x23a487;
        _0x1a101b[_0x23a487] = _0x5172cd;
    }
    return _0x1a101b[_0x23a487];
}
function _0x3c648d(_0x1d09f8, _0x1ec50c, _0x31e226, _0x17cf41, _0x22430a) {
    try {
        const _0x18cd53 = 'assets/' + (_0x1ec50c || 'body01.png');
        const _0x140804 = _0x3edc06(_0x18cd53);
        if (_0x140804['complete'] && _0x140804['naturalWidth'] > 0x0) {
            _0x1d09f8['drawImage'](_0x140804, -_0x17cf41 / 0x2, -_0x22430a / 0x2, _0x17cf41, _0x22430a);
        }
        if (_0x31e226 === null || _0x31e226 === undefined)
            return;
        const _0x47019a = 'assets/' + _0x31e226;
        const _0x1535a2 = _0x3edc06(_0x47019a);
        if (_0x1535a2['complete'] && _0x1535a2['naturalWidth'] > 0x0) {
            _0x1d09f8['drawImage'](_0x1535a2, -_0x17cf41 / 0x2, -_0x22430a / 0x2, _0x17cf41, _0x22430a);
        }
    } catch (_0x4a45cf) {
    }
}
function _0x3cd037() {
    const _0x4d4b1b = document['getElementById']('body-skin-grid');
    const _0x13fe42 = document['getElementById']('eyes-skin-grid');
    if (!_0x4d4b1b || !_0x13fe42)
        return;
    _0x4d4b1b['innerHTML'] = '';
    _0x3c38e8['forEach'](_0x54fa39 => {
        const _0x430bbe = document['createElement']('button');
        _0x430bbe['className'] = 'skin-btn' + (_0x54fa39 === _0x27f41d ? '\x20selected' : '');
        const _0x31153d = document['createElement']('img');
        _0x31153d['src'] = 'assets/' + _0x54fa39;
        _0x430bbe['appendChild'](_0x31153d);
        _0x430bbe['onclick'] = () => {
            _0x27f41d = _0x54fa39;
            localStorage['setItem']('selectedBody', _0x54fa39);
            _0x4d4b1b['querySelectorAll']('.skin-btn')['forEach'](_0x17fd22 => _0x17fd22['classList']['remove']('selected'));
            _0x430bbe['classList']['add']('selected');
        };
        _0x4d4b1b['appendChild'](_0x430bbe);
    });
    _0x13fe42['innerHTML'] = '';
    _0xc760a4['forEach'](_0x186143 => {
        const _0x2f5663 = document['createElement']('button');
        _0x2f5663['className'] = 'skin-btn' + (_0x186143 === _0x173b31 ? '\x20selected' : '');
        const _0x2e1cd3 = document['createElement']('img');
        _0x2e1cd3['src'] = 'assets/' + _0x186143;
        _0x2f5663['appendChild'](_0x2e1cd3);
        _0x2f5663['onclick'] = () => {
            _0x173b31 = _0x186143;
            localStorage['setItem']('selectedEyes', _0x186143);
            _0x13fe42['querySelectorAll']('.skin-btn')['forEach'](_0x5b9708 => _0x5b9708['classList']['remove']('selected'));
            _0x2f5663['classList']['add']('selected');
        };
        _0x13fe42['appendChild'](_0x2f5663);
    });
}
function _0x2114d0(_0x3bca77) {
    if (!_0x4c9809['MAP']['columns'] || !_0x4c9809['CAMERA']['width'])
        return;
    const _0x2b19c7 = Math['max'](0x0, _0x4c9809['MAP']['columns'] * _0x4c9809['MAP']['tileSize'] - _0x4c9809['CAMERA']['width']);
    const _0x5c1709 = Math['max'](0x0, _0x4c9809['MAP']['rows'] * _0x4c9809['MAP']['tileSize'] - _0x4c9809['CAMERA']['height']);
    if (_0x1779bb === null) {
        _0x1779bb = _0x2b19c7 / 0x2;
        _0x7e709b = _0x5c1709 / 0x2;
    }
    _0x1779bb += _0x5af89e * _0x3bca77;
    _0x7e709b += _0x51eaf7 * _0x3bca77;
    if (_0x1779bb <= 0x0) {
        _0x1779bb = 0x0;
        _0x5af89e = Math['abs'](_0x5af89e);
    } else if (_0x1779bb >= _0x2b19c7) {
        _0x1779bb = _0x2b19c7;
        _0x5af89e = -Math['abs'](_0x5af89e);
    }
    if (_0x7e709b <= 0x0) {
        _0x7e709b = 0x0;
        _0x51eaf7 = Math['abs'](_0x51eaf7);
    } else if (_0x7e709b >= _0x5c1709) {
        _0x7e709b = _0x5c1709;
        _0x51eaf7 = -Math['abs'](_0x51eaf7);
    }
    _0x4c9809['CAMERA']['x'] = _0x1779bb;
    _0x4c9809['CAMERA']['y'] = _0x7e709b;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x3b6e57 = document['getElementById']('play-btn');
    const _0x487462 = document['getElementById']('username-input');
    const _0xb478a4 = localStorage['getItem']('playerName');
    if (_0xb478a4 && _0x487462) {
        _0x487462['value'] = _0xb478a4;
    }
    const _0x324db7 = () => {
        _0x573e78['play']('wait');
        document['removeEventListener']('click', _0x324db7);
        document['removeEventListener']('keydown', _0x324db7);
        document['removeEventListener']('touchstart', _0x324db7);
    };
    document['addEventListener']('click', _0x324db7, { 'once': !![] });
    document['addEventListener']('keydown', _0x324db7, { 'once': !![] });
    document['addEventListener']('touchstart', _0x324db7, { 'once': !![] });
    if (_0x3b6e57) {
        _0x3b6e57['addEventListener']('click', () => {
            const _0x54be94 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x21b9c9 = window['_FB'] && window['_FB']['_userData'];
            let _0x11dc52 = !![];
            if (_0x54be94 && _0x21b9c9 && _0x21b9c9['username']) {
                _0x2adc50 = _0x21b9c9['username'];
                _0x11dc52 = ![];
            } else {
                const _0x230fcd = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x2adc50 = 'user' + _0x230fcd;
                _0x11dc52 = !![];
            }
            const _0xfd1ac6 = _0x11dc52 ? 'body01.png' : _0x27f41d;
            const _0x9528f = _0x11dc52 ? 'eyes4.png' : _0x173b31;
            const _0x3db453 = !_0x11dc52 && _0x21b9c9 && _0x21b9c9['photoURL'] ? _0x21b9c9['photoURL'] : '';
            const _0x471bbc = !_0x11dc52 && _0x54be94 ? _0x54be94['uid'] : '';
            localStorage['setItem']('playerName', _0x2adc50);
            _0x504f49 = ![];
            _0x4c9809['CAMERA']['x'] = null;
            _0x4c9809['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x1d0cd4 = document['getElementById']('chat-log-wrap');
            if (_0x1d0cd4)
                _0x1d0cd4['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0xb4718d = document['getElementById']('controls-hint');
            if (_0xb4718d && !_0x2e6d79)
                _0xb4718d['style']['display'] = 'block';
            _0x3246bd();
            if (_0x2e6d79) {
                const _0x3d4e1 = document['getElementById']('leaderboard-list');
                const _0x1c234e = document['getElementById']('leaderboard-toggle');
                if (_0x3d4e1) {
                    _0x3d4e1['style']['display'] = 'none';
                    if (_0x1c234e)
                        _0x1c234e['style']['transform'] = 'rotate(180deg)';
                }
                const _0x44930 = document['getElementById']('role-list-items');
                const _0x513dce = document['getElementById']('role-list-toggle');
                if (_0x44930) {
                    _0x44930['style']['display'] = 'none';
                    if (_0x513dce)
                        _0x513dce['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x48ac5d = !_0x11dc52 && _0x21b9c9 ? {
                'townWins': _0x21b9c9['townWins'] || 0x0,
                'mafiaWins': _0x21b9c9['mafiaWins'] || 0x0,
                'deaths': _0x21b9c9['deaths'] || 0x0,
                'townLosses': _0x21b9c9['townLosses'] || 0x0,
                'mafiaLosses': _0x21b9c9['mafiaLosses'] || 0x0
            } : null;
            const _0x4243fb = JSON['stringify']({
                'type': 'join',
                'name': _0x2adc50,
                'token': _0x3c12bc,
                'body': _0xfd1ac6,
                'eyes': _0x9528f,
                'isGuest': _0x11dc52,
                'uid': _0x471bbc,
                'photoURL': _0x3db453,
                'accountStats': _0x48ac5d
            });
            if (_0x3deee7 && _0x3deee7['readyState'] === WebSocket['OPEN']) {
                _0x3deee7['send'](_0x4243fb);
            } else if (!_0x3deee7 || _0x3deee7['readyState'] === WebSocket['CLOSED'] || _0x3deee7['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x4243fb;
                _0xe43c3();
            }
        });
    }
    _0x3cd037();
    _0xe43c3();
    _0x1dca83();
    _0xab95f1();
    _0x48eb8b();
    _0xa89720();
});
const _0x1c7e04 = [
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
let _0x12409f = 'Town';
let _0x595c20 = 0x0;
function _0x5dd9a4() {
    const _0x411c5c = document['getElementById']('role-index-main-tabs');
    const _0x3bd4fa = document['getElementById']('role-index-tabs');
    const _0x2be966 = document['getElementById']('role-index-body');
    if (!_0x3bd4fa || !_0x2be966)
        return;
    if (_0x411c5c) {
        _0x411c5c['innerHTML'] = '';
        const _0x22bed7 = document['createElement']('button');
        _0x22bed7['className'] = 'role-index-main-tab-btn\x20main-town' + (_0x12409f === 'Town' ? '\x20active' : '');
        _0x22bed7['textContent'] = 'TOWN';
        _0x22bed7['addEventListener']('click', () => {
            _0x12409f = 'Town';
            _0x595c20 = 0x0;
            _0x5dd9a4();
        });
        _0x411c5c['appendChild'](_0x22bed7);
        const _0x13cfce = document['createElement']('button');
        _0x13cfce['className'] = 'role-index-main-tab-btn\x20main-mafia' + (_0x12409f === 'Mafia' ? '\x20active' : '');
        _0x13cfce['textContent'] = 'MAFIA';
        _0x13cfce['addEventListener']('click', () => {
            _0x12409f = 'Mafia';
            _0x595c20 = 0x0;
            _0x5dd9a4();
        });
        _0x411c5c['appendChild'](_0x13cfce);
    }
    const _0x2a75f5 = _0x1c7e04['filter'](_0x2fee7e => _0x2fee7e['faction'] === _0x12409f);
    _0x3bd4fa['innerHTML'] = '';
    _0x2a75f5['forEach']((_0x49c55a, _0x3b5e58) => {
        const _0x24fb65 = document['createElement']('button');
        _0x24fb65['className'] = 'role-index-tab-btn' + (_0x49c55a['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x3b5e58 === _0x595c20 ? '\x20active' : '');
        _0x24fb65['textContent'] = _0x49c55a['name'];
        _0x24fb65['addEventListener']('click', () => {
            _0x595c20 = _0x3b5e58;
            _0x5dd9a4();
        });
        _0x3bd4fa['appendChild'](_0x24fb65);
    });
    const _0x443427 = _0x2a75f5[_0x595c20] || _0x2a75f5[0x0];
    _0x2be966['innerHTML'] = '';
    if (!_0x443427)
        return;
    const _0x532b63 = document['createElement']('div');
    _0x532b63['className'] = 'role-index-title-row';
    const _0x82a73c = document['createElement']('span');
    _0x82a73c['className'] = 'role-index-name\x20' + (_0x443427['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0x82a73c['textContent'] = _0x443427['name'];
    _0x532b63['appendChild'](_0x82a73c);
    const _0x4b77c8 = document['createElement']('span');
    _0x4b77c8['className'] = 'role-index-faction-badge\x20' + (_0x443427['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x4b77c8['textContent'] = _0x443427['faction'];
    _0x532b63['appendChild'](_0x4b77c8);
    _0x2be966['appendChild'](_0x532b63);
    _0x443427['paragraphs']['forEach'](_0x428831 => {
        const _0xf6218a = document['createElement']('p');
        _0xf6218a['className'] = 'role-index-desc-paragraph';
        _0xf6218a['innerHTML'] = _0x428831;
        _0x2be966['appendChild'](_0xf6218a);
    });
}
function _0xa89720() {
    const _0x229466 = document['getElementById']('role-index-btn');
    const _0x2e19cc = document['getElementById']('role-index-modal');
    const _0x4e5e75 = document['getElementById']('close-role-index-btn');
    const _0x410434 = document['getElementById']('mob-top-index');
    if (_0x229466 && _0x2e19cc) {
        _0x229466['addEventListener']('click', _0x507996 => {
            _0x507996['stopPropagation']();
            if (_0x2e19cc['style']['display'] === 'none' || !_0x2e19cc['style']['display']) {
                _0x5dd9a4();
                _0x2e19cc['style']['display'] = 'flex';
            } else {
                _0x2e19cc['style']['display'] = 'none';
            }
        });
    }
    if (_0x4e5e75 && _0x2e19cc) {
        _0x4e5e75['addEventListener']('click', _0x4b549a => {
            _0x4b549a['stopPropagation']();
            _0x2e19cc['style']['display'] = 'none';
        });
    }
    if (_0x410434 && _0x2e19cc) {
        _0x410434['addEventListener']('click', _0x13a678 => {
            _0x13a678['stopPropagation']();
            if (_0x2e19cc['style']['display'] === 'none' || !_0x2e19cc['style']['display']) {
                _0x5dd9a4();
                _0x2e19cc['style']['display'] = 'flex';
            } else {
                _0x2e19cc['style']['display'] = 'none';
            }
        });
    }
}
function _0xab95f1() {
    const _0x466174 = document['getElementById']('settings-btn');
    const _0x472907 = document['getElementById']('settings-panel');
    const _0x443155 = document['getElementById']('close-settings-btn');
    const _0x7596eb = document['getElementById']('setting-mouse-relative');
    if (_0x7596eb) {
        _0x7596eb['checked'] = _0x42f09d;
        _0x7596eb['addEventListener']('change', () => {
            _0x42f09d = _0x7596eb['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x42f09d ? 'true' : 'false');
        });
    }
    const _0x5319f2 = document['getElementById']('setting-music-volume');
    const _0x435ff5 = document['getElementById']('setting-music-volume-display');
    function _0x5792b6(_0x4c6af2) {
        const _0x31c95b = (_0x4c6af2['value'] - _0x4c6af2['min']) / (_0x4c6af2['max'] - _0x4c6af2['min']) * 0x64;
        _0x4c6af2['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x31c95b + '%,\x20#444\x20' + _0x31c95b + '%)';
    }
    if (_0x5319f2) {
        const _0x11c98e = _0x573e78['getVolume']();
        const _0x5bb33f = Math['round'](_0x11c98e * 0x64);
        _0x5319f2['value'] = _0x5bb33f;
        if (_0x435ff5)
            _0x435ff5['textContent'] = _0x5bb33f + '%';
        _0x5792b6(_0x5319f2);
        _0x5319f2['addEventListener']('input', () => {
            const _0xaf8db6 = parseInt(_0x5319f2['value'], 0xa);
            if (_0x435ff5)
                _0x435ff5['textContent'] = _0xaf8db6 + '%';
            _0x5792b6(_0x5319f2);
            _0x573e78['setVolume'](_0xaf8db6 / 0x64);
            _0x573e78['setMuted'](_0xaf8db6 === 0x0);
        });
    }
    if (_0x466174 && _0x472907) {
        _0x466174['addEventListener']('click', _0x1beba4 => {
            _0x1beba4['stopPropagation']();
            _0x472907['style']['display'] = _0x472907['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x443155 && _0x472907) {
        _0x443155['addEventListener']('click', () => {
            _0x472907['style']['display'] = 'none';
        });
    }
    const _0x2b8d7b = document['getElementById']('mayor-confirm-yes');
    const _0x592842 = document['getElementById']('mayor-confirm-no');
    const _0x3a02e9 = document['getElementById']('mayor-confirm-dialog');
    if (_0x2b8d7b && _0x3a02e9) {
        _0x2b8d7b['addEventListener']('click', () => {
            if (_0x3deee7 && _0x3deee7['readyState'] === WebSocket['OPEN']) {
                _0x3deee7['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x3a02e9['style']['display'] = 'none';
        });
    }
    if (_0x592842 && _0x3a02e9) {
        _0x592842['addEventListener']('click', () => {
            _0x3a02e9['style']['display'] = 'none';
        });
    }
    const _0x17c830 = document['getElementById']('close-ability-btn');
    if (_0x17c830) {
        _0x17c830['addEventListener']('click', () => {
            const _0x2784fd = document['getElementById']('ability-ui');
            if (_0x2784fd)
                _0x2784fd['style']['display'] = 'none';
        });
    }
}
let _0x31a574 = '';
function _0x5866e3(_0x5268e0) {
    const _0xcf29f6 = document['getElementById']('vote-tally-panel');
    const _0x3daa6c = document['getElementById']('vote-tally-list');
    if (!_0xcf29f6 || !_0x3daa6c)
        return;
    if (_0x5268e0['state'] !== 'DAY_VOTE') {
        _0xcf29f6['style']['display'] = 'none';
        _0x31a574 = '';
        return;
    }
    _0xcf29f6['style']['display'] = 'block';
    const _0x7536d9 = {};
    for (const _0x4648cf in _0x52b337) {
        if (!_0x52b337[_0x4648cf]['isDead'])
            _0x7536d9[_0x4648cf] = 0x0;
    }
    if (_0x16badb && !_0x2974aa['isDead'])
        _0x7536d9[_0x16badb] = 0x0;
    const _0x56e1df = _0x5268e0['votes'] || {};
    for (const _0x10ffdf in _0x56e1df) {
        const _0x24e13d = _0x56e1df[_0x10ffdf];
        const _0x4582d5 = _0x5268e0['mayorRevealed'] && _0x5268e0['mayorRevealed'][_0x10ffdf] ? 0x2 : 0x1;
        _0x7536d9[_0x24e13d] = (_0x7536d9[_0x24e13d] || 0x0) + _0x4582d5;
    }
    let _0x2c7a48 = 0x0;
    const _0x5ab403 = _0x5268e0['skips'] || {};
    for (const _0x3f36e2 in _0x5ab403) {
        _0x2c7a48 += Number(_0x5ab403[_0x3f36e2]) || 0x1;
    }
    const _0x23c6bf = JSON['stringify'](_0x7536d9) + '_' + _0x2c7a48 + '_' + _0x2974aa['isDead'];
    if (_0x23c6bf === _0x31a574)
        return;
    _0x31a574 = _0x23c6bf;
    _0x3daa6c['innerHTML'] = '';
    for (const _0x55c371 in _0x7536d9) {
        const _0xbe650c = parseInt(_0x55c371);
        const _0x33d2cb = _0xbe650c === _0x16badb ? _0x2adc50 : _0x52b337[_0x55c371] ? _0x52b337[_0x55c371]['name'] : 'Player\x20' + _0x55c371;
        const _0x1bc430 = document['createElement']('div');
        _0x1bc430['className'] = 'vote-tally-entry';
        const _0x1da78c = document['createElement']('span');
        _0x1da78c['textContent'] = _0x33d2cb;
        const _0x11ec9d = document['createElement']('span');
        _0x11ec9d['className'] = 'vote-count';
        _0x11ec9d['textContent'] = _0x7536d9[_0x55c371] + '\x20vote' + (_0x7536d9[_0x55c371] === 0x1 ? '' : 's');
        _0x1bc430['appendChild'](_0x1da78c);
        _0x1bc430['appendChild'](_0x11ec9d);
        if (_0xbe650c !== _0x16badb && !_0x2974aa['isDead']) {
            _0x1bc430['style']['cursor'] = 'pointer';
            _0x1bc430['title'] = 'Vote\x20for\x20' + _0x33d2cb;
            _0x1bc430['addEventListener']('click', _0x3bf3df => {
                _0x3bf3df['stopPropagation']();
                if (_0x3deee7 && _0x3deee7['readyState'] === WebSocket['OPEN']) {
                    _0x3deee7['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x33d2cb
                    }));
                }
            });
        }
        _0x3daa6c['appendChild'](_0x1bc430);
    }
    const _0x2db64c = document['createElement']('div');
    _0x2db64c['className'] = 'vote-tally-skip';
    _0x2db64c['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x2c7a48 + '</span>';
    if (!_0x2974aa['isDead']) {
        _0x2db64c['style']['cursor'] = 'pointer';
        _0x2db64c['title'] = 'Click\x20to\x20skip\x20vote';
        _0x2db64c['addEventListener']('click', _0x292673 => {
            _0x292673['stopPropagation']();
            if (_0x3deee7 && _0x3deee7['readyState'] === WebSocket['OPEN']) {
                _0x3deee7['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x3daa6c['appendChild'](_0x2db64c);
}
let _0x45a547 = null;
let _0x255cf5 = null;
let _0x592d44 = null;
let _0x10b9e2 = null;
let _0x5ed062 = null;
function _0x16f9c1() {
    if (_0x3deee7 && _0x3deee7['readyState'] === WebSocket['OPEN']) {
        _0x3deee7['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x45a547,
            'abilityTarget': _0x255cf5,
            'killTarget': _0x592d44
        }));
    }
}
function _0x578dc6() {
    if (_0x3deee7 && _0x3deee7['readyState'] === WebSocket['OPEN']) {
        _0x3deee7['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'blackmailTarget': _0x10b9e2,
            'killTarget': _0x5ed062
        }));
    }
}
function _0xf5cc89() {
    const _0x477c9a = document['getElementById']('ability-ui-body');
    if (!_0x477c9a)
        return;
    _0x477c9a['innerHTML'] = '';
    if (_0x2d2651 === 'Celebrity' || _0x2d2651 === 'Mayor') {
        const _0x23033f = document['createElement']('div');
        _0x23033f['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x23033f['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x477c9a['appendChild'](_0x23033f);
        return;
    }
    if (_0x2d2651 === 'Blackmailer') {
        const _0x3e84de = document['createElement']('div');
        _0x3e84de['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x3e84de['innerText'] = 'Blackmail\x20Target\x20(Silences\x20for\x20full\x20day):';
        _0x477c9a['appendChild'](_0x3e84de);
        const _0xcc87e = document['createElement']('div');
        _0xcc87e['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x14ccef = document['createElement']('button');
        _0x14ccef['className'] = 'layer-btn';
        _0x14ccef['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x14ccef['innerText'] = 'No\x20one';
        if (_0x10b9e2 === null)
            _0x14ccef['classList']['add']('active');
        _0x14ccef['onclick'] = () => {
            _0x10b9e2 = null;
            _0x578dc6();
            _0xf5cc89();
        };
        _0xcc87e['appendChild'](_0x14ccef);
        for (const _0x37cf2e in _0x52b337) {
            const _0x2ea25b = _0x52b337[_0x37cf2e];
            if (_0x2ea25b['isDead'])
                continue;
            const _0xec08a6 = document['createElement']('button');
            _0xec08a6['className'] = 'layer-btn';
            _0xec08a6['innerText'] = _0x2ea25b['name'];
            if (_0x10b9e2 === parseInt(_0x37cf2e))
                _0xec08a6['classList']['add']('active');
            _0xec08a6['onclick'] = () => {
                _0x10b9e2 = parseInt(_0x37cf2e);
                _0x578dc6();
                _0xf5cc89();
            };
            _0xcc87e['appendChild'](_0xec08a6);
        }
        if (!_0x2974aa['isDead']) {
            const _0x5a809f = document['createElement']('button');
            _0x5a809f['className'] = 'layer-btn';
            _0x5a809f['style']['cssText'] = 'grid-column:\x20span\x202;';
            _0x5a809f['innerText'] = _0x2adc50 + '\x20(Self\x20-\x20Decoy)';
            if (_0x10b9e2 === _0x16badb)
                _0x5a809f['classList']['add']('active');
            _0x5a809f['onclick'] = () => {
                _0x10b9e2 = _0x16badb;
                _0x578dc6();
                _0xf5cc89();
            };
            _0xcc87e['appendChild'](_0x5a809f);
        }
        _0x477c9a['appendChild'](_0xcc87e);
        const _0x260420 = document['createElement']('div');
        _0x260420['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x260420['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x477c9a['appendChild'](_0x260420);
        const _0x777396 = document['createElement']('div');
        _0x777396['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x2023f4 = document['createElement']('button');
        _0x2023f4['className'] = 'layer-btn';
        _0x2023f4['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x2023f4['innerText'] = 'No\x20one';
        if (!_0x5ed062 && !_0x4c9809['CURRENT_TARGET'])
            _0x2023f4['classList']['add']('active');
        _0x2023f4['onclick'] = () => {
            _0x5ed062 = null;
            _0x4c9809['CURRENT_TARGET'] = null;
            _0x578dc6();
            _0xf5cc89();
        };
        _0x777396['appendChild'](_0x2023f4);
        for (const _0x10cef0 in _0x52b337) {
            const _0x538d90 = _0x52b337[_0x10cef0];
            if (_0x538d90['isDead'])
                continue;
            const _0xdd3baf = document['createElement']('button');
            _0xdd3baf['className'] = 'layer-btn';
            _0xdd3baf['innerText'] = _0x538d90['name'];
            if (_0x5ed062 === parseInt(_0x10cef0) || _0x4c9809['CURRENT_TARGET'] === parseInt(_0x10cef0))
                _0xdd3baf['classList']['add']('active');
            _0xdd3baf['onclick'] = () => {
                _0x5ed062 = parseInt(_0x10cef0);
                _0x4c9809['CURRENT_TARGET'] = parseInt(_0x10cef0);
                _0x578dc6();
                _0xf5cc89();
            };
            _0x777396['appendChild'](_0xdd3baf);
        }
        _0x477c9a['appendChild'](_0x777396);
        return;
    }
    if (_0x2d2651 === 'Skinwalker') {
        const _0x309e1e = document['createElement']('div');
        _0x309e1e['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x309e1e['innerText'] = 'Transform\x20into:';
        _0x477c9a['appendChild'](_0x309e1e);
        const _0x578cb4 = document['createElement']('div');
        _0x578cb4['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x19c937 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x1542da = _0x567fc2 => {
            if (_0x4c9809['ROLES_IN_GAME'] && Array['isArray'](_0x4c9809['ROLES_IN_GAME'])) {
                return _0x4c9809['ROLES_IN_GAME']['includes'](_0x567fc2);
            }
            if (_0x4c9809['ROLE_LIST_RAW'] && _0x4c9809['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x4c9809['ROLE_LIST_RAW']['some'](_0x1f24eb => _0x1f24eb['name'] === _0x567fc2 && !_0x1f24eb['isDead']);
            }
            return ![];
        };
        const _0x20a2c8 = [
            'None',
            ..._0x19c937['filter'](_0x1542da)
        ];
        _0x20a2c8['forEach'](_0x5e2700 => {
            const _0x4cdad0 = document['createElement']('button');
            _0x4cdad0['className'] = 'layer-btn';
            _0x4cdad0['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x4cdad0['innerText'] = _0x5e2700;
            const _0x29faa0 = _0x5e2700 === 'None' && !_0x45a547 || _0x45a547 === _0x5e2700;
            if (_0x29faa0)
                _0x4cdad0['classList']['add']('active');
            const _0x2ac3f9 = _0x5e2700 !== 'None' && _0x4c9809['SKINWALKER_LAST_ROLE'] && _0x4c9809['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x5e2700['toLowerCase']();
            if (_0x2ac3f9) {
                _0x4cdad0['style']['opacity'] = '0.45';
                _0x4cdad0['style']['cursor'] = 'not-allowed';
                _0x4cdad0['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x4cdad0['onclick'] = () => {
                    _0x160ee0('You\x20cannot\x20transform\x20into\x20' + _0x5e2700 + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x4cdad0['onclick'] = () => {
                    _0x45a547 = _0x5e2700 === 'None' ? null : _0x5e2700;
                    _0x16f9c1();
                    _0xf5cc89();
                };
            }
            _0x578cb4['appendChild'](_0x4cdad0);
        });
        _0x477c9a['appendChild'](_0x578cb4);
        if (_0x1542da('Vigilante')) {
            const _0x3a3d7f = document['createElement']('div');
            _0x3a3d7f['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x3a3d7f['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x477c9a['appendChild'](_0x3a3d7f);
        }
        if (_0x45a547 === 'Vigilante') {
            const _0x12ea43 = document['createElement']('div');
            _0x12ea43['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x12ea43['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x477c9a['appendChild'](_0x12ea43);
        } else if (_0x45a547 && _0x45a547 !== 'Celebrity') {
            const _0x328649 = document['createElement']('div');
            _0x328649['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x328649['innerText'] = 'Use\x20' + _0x45a547 + '\x20ability\x20on:';
            _0x477c9a['appendChild'](_0x328649);
            const _0xaa00ad = document['createElement']('div');
            _0xaa00ad['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0xb52353 = document['createElement']('button');
            _0xb52353['className'] = 'layer-btn';
            _0xb52353['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0xb52353['innerText'] = 'No\x20one';
            if (!_0x255cf5)
                _0xb52353['classList']['add']('active');
            _0xb52353['onclick'] = () => {
                _0x255cf5 = null;
                _0x16f9c1();
                _0xf5cc89();
            };
            _0xaa00ad['appendChild'](_0xb52353);
            for (const _0x3f4d16 in _0x52b337) {
                const _0x5e724a = _0x52b337[_0x3f4d16];
                if (_0x5e724a['isDead'])
                    continue;
                const _0x261a68 = document['createElement']('button');
                _0x261a68['className'] = 'layer-btn';
                _0x261a68['innerText'] = _0x5e724a['name'];
                if (_0x255cf5 === parseInt(_0x3f4d16))
                    _0x261a68['classList']['add']('active');
                _0x261a68['onclick'] = () => {
                    _0x255cf5 = parseInt(_0x3f4d16);
                    _0x16f9c1();
                    _0xf5cc89();
                };
                _0xaa00ad['appendChild'](_0x261a68);
            }
            _0x477c9a['appendChild'](_0xaa00ad);
        }
        const _0x281c6d = document['createElement']('div');
        _0x281c6d['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x281c6d['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x477c9a['appendChild'](_0x281c6d);
        const _0x44a7d4 = document['createElement']('div');
        _0x44a7d4['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x4f501d = document['createElement']('button');
        _0x4f501d['className'] = 'layer-btn';
        _0x4f501d['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x4f501d['innerText'] = 'No\x20one';
        if (!_0x592d44 && !_0x4c9809['CURRENT_TARGET'])
            _0x4f501d['classList']['add']('active');
        _0x4f501d['onclick'] = () => {
            _0x592d44 = null;
            _0x4c9809['CURRENT_TARGET'] = null;
            _0x16f9c1();
            _0xf5cc89();
        };
        _0x44a7d4['appendChild'](_0x4f501d);
        for (const _0x1b836a in _0x52b337) {
            const _0x3dcc91 = _0x52b337[_0x1b836a];
            if (_0x3dcc91['isDead'])
                continue;
            const _0x567dca = document['createElement']('button');
            _0x567dca['className'] = 'layer-btn';
            _0x567dca['innerText'] = _0x3dcc91['name'];
            if (_0x592d44 === parseInt(_0x1b836a) || _0x4c9809['CURRENT_TARGET'] === parseInt(_0x1b836a))
                _0x567dca['classList']['add']('active');
            _0x567dca['onclick'] = () => {
                _0x592d44 = parseInt(_0x1b836a);
                _0x4c9809['CURRENT_TARGET'] = parseInt(_0x1b836a);
                _0x16f9c1();
                _0xf5cc89();
            };
            _0x44a7d4['appendChild'](_0x567dca);
        }
        _0x477c9a['appendChild'](_0x44a7d4);
        return;
    }
    let _0x19f9c1 = '';
    let _0x3f025e = ![];
    if (_0x2d2651 === 'Doctor') {
        _0x19f9c1 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x3f025e = !![];
    } else if (_0x2d2651 === 'Investigator') {
        _0x19f9c1 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x2d2651 === 'Tracker') {
        _0x19f9c1 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x2d2651 === 'Archer') {
        _0x19f9c1 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x2d2651 === 'Escort') {
        _0x19f9c1 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x2d2651 === 'Vigilante') {
        _0x19f9c1 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x5bca69 = document['createElement']('div');
    _0x5bca69['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x5bca69['innerText'] = _0x19f9c1;
    _0x477c9a['appendChild'](_0x5bca69);
    const _0x1fed39 = document['createElement']('div');
    _0x1fed39['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x2478d7 = document['createElement']('button');
    _0x2478d7['className'] = 'layer-btn';
    _0x2478d7['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x2478d7['innerText'] = 'No\x20one';
    if (_0x4c9809['CURRENT_TARGET'] === null)
        _0x2478d7['classList']['add']('active');
    _0x2478d7['onclick'] = () => {
        _0x4c9809['CURRENT_TARGET'] = null;
        if (_0x3deee7 && _0x3deee7['readyState'] === WebSocket['OPEN']) {
            _0x3deee7['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0xf5cc89();
    };
    _0x1fed39['appendChild'](_0x2478d7);
    for (const _0x160939 in _0x52b337) {
        const _0x1ebc2d = _0x52b337[_0x160939];
        if (_0x1ebc2d['isDead'])
            continue;
        const _0x10612c = document['createElement']('button');
        _0x10612c['className'] = 'layer-btn';
        _0x10612c['innerText'] = _0x1ebc2d['name'];
        if (_0x4c9809['CURRENT_TARGET'] === parseInt(_0x160939))
            _0x10612c['classList']['add']('active');
        _0x10612c['onclick'] = () => {
            _0x4c9809['CURRENT_TARGET'] = parseInt(_0x160939);
            if (_0x3deee7 && _0x3deee7['readyState'] === WebSocket['OPEN']) {
                _0x3deee7['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x160939)
                }));
            }
            _0xf5cc89();
        };
        _0x1fed39['appendChild'](_0x10612c);
    }
    if (_0x3f025e && !_0x2974aa['isDead']) {
        const _0x332b1c = document['createElement']('button');
        _0x332b1c['className'] = 'layer-btn';
        _0x332b1c['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x332b1c['innerText'] = _0x2adc50 + '\x20(Self)';
        if (_0x4c9809['CURRENT_TARGET'] === _0x16badb)
            _0x332b1c['classList']['add']('active');
        _0x332b1c['onclick'] = () => {
            _0x4c9809['CURRENT_TARGET'] = _0x16badb;
            if (_0x3deee7 && _0x3deee7['readyState'] === WebSocket['OPEN']) {
                _0x3deee7['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x16badb
                }));
            }
            _0xf5cc89();
        };
        _0x1fed39['appendChild'](_0x332b1c);
    }
    _0x477c9a['appendChild'](_0x1fed39);
}
function _0xe43c3() {
    if (_0x3deee7 && (_0x3deee7['readyState'] === WebSocket['OPEN'] || _0x3deee7['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x4e4ce9 = new URLSearchParams();
    if (_0x3c12bc)
        _0x4e4ce9['set']('token', _0x3c12bc);
    _0x4e4ce9['set']('ngrok-skip-browser-warning', 'true');
    const _0x5a6896 = 'wss://thru-descriptions-physically-phi.trycloudflare.com';
    const _0x3d6043 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x5a6896;
    const _0x3af051 = _0x3d6043 + '/?' + _0x4e4ce9['toString']();
    _0x3deee7 = new WebSocket(_0x3af051);
    _0x3deee7['onopen'] = function () {
        if (!_0x504f49 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x53dbb2 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x400333 = window['_FB'] && window['_FB']['_userData'];
                const _0x19f801 = !(_0x53dbb2 && _0x400333 && _0x400333['username']);
                const _0x4131ae = _0x19f801 ? 'body01.png' : _0x27f41d;
                const _0x569acb = _0x19f801 ? 'eyes4.png' : _0x173b31;
                const _0x133799 = !_0x19f801 && _0x400333 && _0x400333['photoURL'] ? _0x400333['photoURL'] : '';
                const _0x3e7a47 = !_0x19f801 && _0x53dbb2 ? _0x53dbb2['uid'] : '';
                const _0x1fb465 = !_0x19f801 && _0x400333 ? {
                    'townWins': _0x400333['townWins'] || 0x0,
                    'mafiaWins': _0x400333['mafiaWins'] || 0x0,
                    'deaths': _0x400333['deaths'] || 0x0,
                    'townLosses': _0x400333['townLosses'] || 0x0,
                    'mafiaLosses': _0x400333['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x2adc50,
                    'token': _0x3c12bc,
                    'body': _0x4131ae,
                    'eyes': _0x569acb,
                    'isGuest': _0x19f801,
                    'uid': _0x3e7a47,
                    'photoURL': _0x133799,
                    'accountStats': _0x1fb465
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x3deee7 && _0x3deee7['readyState'] === WebSocket['OPEN']) {
            _0x3deee7['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x3deee7['onclose'] = _0x54407f => {
        if (_0x54407f['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x54407f['code'] === 0xfa2 || _0x54407f['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x264116 = document['getElementById']('disconnect-overlay');
        if (!_0x264116) {
            _0x264116 = document['createElement']('div');
            _0x264116['id'] = 'disconnect-overlay';
            _0x264116['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x264116['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x264116);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x3deee7['onmessage'] = _0x49d879 => {
        const _0x2696af = JSON['parse'](_0x49d879['data']);
        if (_0x2696af['type'] === 'map_data') {
            _0x4c9809['MAP']['tileSize'] = _0x2696af['map']['tileSize'];
            _0x4c9809['MAP']['columns'] = _0x2696af['map']['columns'];
            _0x4c9809['MAP']['rows'] = _0x2696af['map']['rows'];
            _0x4c9809['MAP']['layers'] = _0x2696af['map']['layers'];
            if (_0x2696af['map']['doors']) {
                _0x4c9809['MAP']['doors'] = _0x2696af['map']['doors'];
                const _0x373716 = _0x4c9809['MAP']['layers']['find'](_0x3c9942 => _0x3c9942['name'] === 'floor2');
                if (_0x373716) {
                    for (const _0x528b08 in _0x4c9809['MAP']['doors']) {
                        _0x373716['data'][parseInt(_0x528b08)] = 0x2;
                    }
                }
            }
            if (_0x2696af['entities'])
                _0x4c9809['ENTITIES'] = _0x2696af['entities'];
            _0x367632();
            _0x4c9809['SYSTEM']['isReady'] = !![];
            _0x2b6837();
            if (!_0x4c9809['SYSTEM']['_gameLoopRunning']) {
                _0x4c9809['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x3affd7);
            }
            return;
        }
        if (_0x2696af['type'] === 'init') {
            _0x16badb = _0x2696af['id'];
            _0x504f49 = ![];
            _0x3246bd();
            if (_0x2e6d79) {
                const _0xeaf5a8 = document['getElementById']('leaderboard-list');
                const _0x25d0a7 = document['getElementById']('leaderboard-toggle');
                if (_0xeaf5a8) {
                    _0xeaf5a8['style']['display'] = 'none';
                    if (_0x25d0a7)
                        _0x25d0a7['style']['transform'] = 'rotate(180deg)';
                }
                const _0x14dfa9 = document['getElementById']('role-list-items');
                const _0x4a3dfc = document['getElementById']('role-list-toggle');
                if (_0x14dfa9) {
                    _0x14dfa9['style']['display'] = 'none';
                    if (_0x4a3dfc)
                        _0x4a3dfc['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x1ce262 = _0x2696af['isOwner'] || ![];
            _0x2adc50 = _0x2696af['name'] || _0x2adc50;
            _0x4c9809['MAP']['tileSize'] = _0x2696af['map']['tileSize'];
            _0x4c9809['MAP']['columns'] = _0x2696af['map']['columns'];
            _0x4c9809['MAP']['rows'] = _0x2696af['map']['rows'];
            _0x4c9809['MAP']['layers'] = _0x2696af['map']['layers'];
            if (_0x2696af['map']['doors']) {
                _0x4c9809['MAP']['doors'] = _0x2696af['map']['doors'];
                const _0x14d791 = _0x4c9809['MAP']['layers']['find'](_0x4326bc => _0x4326bc['name'] === 'floor2');
                if (_0x14d791) {
                    for (const _0x228d8c in _0x4c9809['MAP']['doors']) {
                        _0x14d791['data'][parseInt(_0x228d8c)] = 0x2;
                    }
                }
            }
            if (_0x2696af['entities'])
                _0x4c9809['ENTITIES'] = _0x2696af['entities'];
            if (_0x2696af['bloodSplatters'])
                _0xa59685 = _0x2696af['bloodSplatters'];
            if (_0x2696af['bloodDrops'])
                _0x133132 = _0x2696af['bloodDrops'];
            if (_0x2696af['roleList'] && _0x2696af['roleList']['length'] > 0x0) {
                _0x4c9809['ROLE_LIST_RAW'] = _0x2696af['roleList'];
                _0x2959ac(_0x2696af['roleList'], _0x2696af['roleListMode']);
            }
            _0x367632();
            _0x2974aa['x'] = _0x4c9809['MAP']['columns'] * _0x4c9809['MAP']['tileSize'] / 0x2;
            _0x2974aa['y'] = _0x4c9809['MAP']['rows'] * _0x4c9809['MAP']['tileSize'] / 0x2;
            _0x4c9809['CAMERA']['x'] = _0x2974aa['x'] + _0x2974aa['width'] / 0x2 - _0x4c9809['CAMERA']['width'] / 0x2;
            _0x4c9809['CAMERA']['y'] = _0x2974aa['y'] + _0x2974aa['height'] / 0x2 - _0x4c9809['CAMERA']['height'] / 0x2;
            if (_0x1ce262) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x23de70();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x33a06c = document['getElementById']('role-index-btn-wrap');
            if (_0x33a06c)
                _0x33a06c['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x4c9809['SYSTEM']['lastTime'] = performance['now']();
            _0x4c9809['SYSTEM']['isReady'] = !![];
            _0x357759();
            if (!_0x4c9809['SYSTEM']['_gameLoopRunning']) {
                _0x4c9809['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x3affd7);
            }
            return;
        } else if (_0x2696af['type'] === 'state') {
            const _0x2b0966 = {};
            for (const _0x1eae69 in _0x2696af['players']) {
                if (parseInt(_0x1eae69) === _0x16badb)
                    continue;
                const _0x4de4f8 = _0x2696af['players'][_0x1eae69];
                const _0x42638f = _0x52b337[_0x1eae69];
                if (_0x42638f) {
                    const _0x149208 = _0x4de4f8['x'] - _0x42638f['renderX'];
                    const _0x179848 = _0x4de4f8['y'] - _0x42638f['renderY'];
                    const _0x592046 = _0x149208 * _0x149208 + _0x179848 * _0x179848 > 0x78 * 0x78;
                    Object['assign'](_0x42638f, _0x4de4f8);
                    if (_0x592046) {
                        _0x42638f['renderX'] = _0x4de4f8['x'];
                        _0x42638f['renderY'] = _0x4de4f8['y'];
                    }
                    _0x2b0966[_0x1eae69] = _0x42638f;
                } else {
                    _0x2b0966[_0x1eae69] = {
                        ..._0x4de4f8,
                        'renderX': _0x4de4f8['x'],
                        'renderY': _0x4de4f8['y'],
                        'renderAngle': _0x4de4f8['angle'] || 0x0
                    };
                }
            }
            _0x52b337 = _0x2b0966;
            _0x123975();
            if (_0x2696af['players'][_0x16badb]) {
                const _0x122384 = _0x2696af['players'][_0x16badb];
                _0x2974aa['chats'] = _0x122384['chats'] || [];
                _0x2974aa['isDead'] = _0x122384['isDead'];
                _0x2974aa['hasArrow'] = _0x122384['hasArrow'] || ![];
                if (_0x122384['name'])
                    _0x2adc50 = _0x122384['name'];
                _0x357759();
                const _0x3cafef = Math['hypot'](_0x122384['x'] - _0x2974aa['x'], _0x122384['y'] - _0x2974aa['y']);
                if (_0x3cafef > 0xfa) {
                    _0x2974aa['x'] = _0x122384['x'];
                    _0x2974aa['y'] = _0x122384['y'];
                } else if (_0x3cafef > 0x50) {
                    _0x2974aa['x'] += (_0x122384['x'] - _0x2974aa['x']) * 0.06;
                    _0x2974aa['y'] += (_0x122384['y'] - _0x2974aa['y']) * 0.06;
                }
            }
            if (_0x2696af['entities'])
                _0x4c9809['ENTITIES'] = _0x2696af['entities'];
            if (_0x2696af['game']) {
                _0x4c9809['GAME_STATE'] = _0x2696af['game']['state'];
                _0x4c9809['NIGHT_ABILITY_OPEN'] = _0x2696af['game']['nightAbilityOpen'];
                if (_0x2696af['game']['bloodSplatters'])
                    _0xa59685 = _0x2696af['game']['bloodSplatters'];
                if (_0x2696af['game']['bloodDrops'])
                    _0x133132 = _0x2696af['game']['bloodDrops'];
                if (_0x2696af['game']['blackmailed']) {
                    _0x31dd3c = new Set(_0x2696af['game']['blackmailed']);
                } else {
                    _0x31dd3c['clear']();
                }
                if (_0x2696af['game']['mayorRevealed']) {
                    for (const _0x4213d0 in _0x2696af['game']['mayorRevealed']) {
                        _0x7b86f1['add'](parseInt(_0x4213d0));
                    }
                }
                if (_0x4c9809['LAST_STATE'] !== _0x4c9809['GAME_STATE']) {
                    if (_0x4c9809['GAME_STATE'] !== 'NIGHT') {
                        _0x4c9809['CURRENT_TARGET'] = null;
                        _0x45a547 = null;
                        _0x255cf5 = null;
                        _0x592d44 = null;
                        _0x10b9e2 = null;
                        _0x5ed062 = null;
                        const _0xdcf4df = document['getElementById']('ability-ui');
                        if (_0xdcf4df)
                            _0xdcf4df['style']['display'] = 'none';
                    }
                    if (_0x4c9809['GAME_STATE'] === 'NIGHT') {
                        _0x2974aa['chats'] = [];
                        for (const _0x203553 in _0x52b337) {
                            _0x52b337[_0x203553]['chats'] = [];
                        }
                    }
                    _0x4c9809['LAST_STATE'] = _0x4c9809['GAME_STATE'];
                    _0x21778f();
                    _0x573e78['onStateChange'](_0x4c9809['GAME_STATE'], _0x2696af['game']['nightAbilityOpen']);
                }
                const _0x191720 = document['getElementById']('phase-ui');
                if (_0x191720) {
                    if (_0x2696af['game']['state'] === 'LOBBY') {
                        _0x191720['style']['display'] = 'none';
                    } else {
                        _0x191720['style']['display'] = 'block';
                    }
                    let _0x27e590 = _0x2696af['game']['state']['replace']('_', '\x20');
                    if (_0x2696af['game']['state'] === 'DAY_DISCUSS') {
                        _0x27e590 = 'DAY\x20' + (_0x2696af['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x2696af['game']['timer'] + 's';
                    } else if (_0x2696af['game']['state'] === 'DAY_VOTE') {
                        _0x27e590 = 'DAY\x20' + (_0x2696af['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x2696af['game']['timer'] + 's';
                    } else if (_0x2696af['game']['state'] === 'NIGHT') {
                        const _0x56a556 = _0x2696af['game']['dayCount'] || 0x1;
                        if (_0x2696af['game']['nightAbilityOpen']) {
                            _0x27e590 = 'NIGHT\x20' + _0x56a556 + '\x20ABILITY\x20PHASE';
                            const _0x267b11 = _0x2696af['game']['abilityTimer'] !== undefined ? _0x2696af['game']['abilityTimer'] : _0x2696af['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x267b11 + 's';
                        } else {
                            _0x27e590 = 'NIGHT\x20' + _0x56a556;
                            document['getElementById']('phase-timer')['innerText'] = _0x2696af['game']['timer'] + 's';
                        }
                    }
                    if (_0x2696af['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x27e590;
                    }
                }
                if (_0x2696af['game']['state'] === 'NIGHT') {
                    const _0x1c1b63 = document['getElementById']('ability-timer-label');
                    if (_0x1c1b63) {
                        const _0x2f1a7f = _0x2696af['game']['abilityTimer'] !== undefined ? _0x2696af['game']['abilityTimer'] : _0x2696af['game']['timer'];
                        _0x1c1b63['innerText'] = _0x2696af['game']['nightAbilityOpen'] ? _0x2f1a7f + 's' : '';
                    }
                    if (_0x2696af['game']['nightAbilityOpen'] && !_0x522285 && !_0x2974aa['isDead']) {
                        _0x522285 = !![];
                        _0xf5cc89();
                        const _0x3e52d5 = document['getElementById']('ability-ui');
                        if (_0x3e52d5)
                            _0x3e52d5['style']['display'] = 'block';
                    }
                    if (!_0x2696af['game']['nightAbilityOpen']) {
                        const _0x3860cf = document['getElementById']('ability-ui');
                        if (_0x3860cf && _0x3860cf['style']['display'] === 'block') {
                            _0x3860cf['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x522285 = ![];
                }
                if (_0x2696af['game']['rolesInGame']) {
                    _0x4c9809['ROLES_IN_GAME'] = _0x2696af['game']['rolesInGame'];
                }
                if (_0x2696af['game']['skinwalkerLastRole'] !== undefined) {
                    _0x4c9809['SKINWALKER_LAST_ROLE'] = _0x2696af['game']['skinwalkerLastRole'];
                }
                if (_0x2696af['game']['state'] === 'NIGHT') {
                    const _0x19f218 = document['getElementById']('will-ui');
                    if (_0x19f218 && _0x19f218['style']['display'] === 'flex') {
                        _0x19f218['style']['display'] = 'none';
                        const _0x4d25de = document['getElementById']('will-input');
                        if (_0x4d25de)
                            _0x4d25de['blur']();
                    }
                }
                _0x5866e3(_0x2696af['game']);
                if (_0x2696af['game']['roleListMode'] !== undefined) {
                    _0x4c9809['ROLE_LIST_RAW'] = _0x2696af['game']['roleList'] || [];
                    _0x2959ac(_0x2696af['game']['roleList'], _0x2696af['game']['roleListMode']);
                }
            }
        } else if (_0x2696af['type'] === 'teleport') {
            _0x2974aa['x'] = _0x2696af['x'];
            _0x2974aa['y'] = _0x2696af['y'];
            _0x2974aa['vx'] = 0x0;
            _0x2974aa['vy'] = 0x0;
            _0x4c9809['CAMERA']['x'] = null;
            if (_0x2696af['teleportId'] !== undefined)
                _0x11c199 = _0x2696af['teleportId'];
        } else if (_0x2696af['type'] === 'bulk_teleport') {
            for (const _0x4cf065 in _0x2696af['positions']) {
                const _0x436829 = _0x2696af['positions'][_0x4cf065];
                if (parseInt(_0x4cf065) === _0x16badb) {
                    _0x2974aa['x'] = _0x436829['x'];
                    _0x2974aa['y'] = _0x436829['y'];
                    _0x2974aa['vx'] = 0x0;
                    _0x2974aa['vy'] = 0x0;
                    _0x4c9809['CAMERA']['x'] = null;
                    continue;
                }
                const _0x4cda40 = _0x52b337[_0x4cf065];
                if (_0x4cda40) {
                    _0x4cda40['x'] = _0x436829['x'];
                    _0x4cda40['y'] = _0x436829['y'];
                    _0x4cda40['renderX'] = _0x436829['x'];
                    _0x4cda40['renderY'] = _0x436829['y'];
                    _0x4cda40['vx'] = 0x0;
                    _0x4cda40['vy'] = 0x0;
                }
            }
        } else if (_0x2696af['type'] === 'player_left') {
            delete _0x52b337[_0x2696af['id']];
            _0x7b86f1['delete'](parseInt(_0x2696af['id']));
        } else if (_0x2696af['type'] === 'map_update') {
            const _0x5b9224 = _0x4c9809['MAP']['layers']['find'](_0x3cf501 => _0x3cf501['name'] === _0x2696af['layer']);
            if (_0x5b9224) {
                _0x5b9224['data'][_0x2696af['row'] * _0x4c9809['MAP']['columns'] + _0x2696af['col']] = _0x2696af['gid'];
                const _0x5075b4 = _0x2696af['row'] * _0x4c9809['MAP']['columns'] + _0x2696af['col'];
                if (_0x4c9809['MAP']['doors'] && _0x4c9809['MAP']['doors'][_0x5075b4]) {
                    const _0x445172 = _0x4c9809['MAP']['layers']['find'](_0x33bb7e => _0x33bb7e['name'] === 'floor2');
                    if (_0x445172)
                        _0x445172['data'][_0x5075b4] = 0x2;
                }
                const _0x104cae = Math['floor'](_0x2696af['col'] * _0x4c9809['MAP']['tileSize'] / _0x4c9809['MAP']['chunkSize']);
                const _0x905772 = Math['floor'](_0x2696af['row'] * _0x4c9809['MAP']['tileSize'] / _0x4c9809['MAP']['chunkSize']);
                _0x2a89ba(_0x104cae, _0x905772);
                _0x5208ec = null;
                _0x294ed8 = null;
            }
        } else if (_0x2696af['type'] === 'role_assign') {
            _0x2d2651 = _0x2696af['role'];
            _0x2974aa['isDead'] = _0x2d2651 === 'Spectator';
            _0x7b86f1['clear']();
            _0x4c9809['CURRENT_TARGET'] = null;
            _0x45a547 = null;
            _0x255cf5 = null;
            _0x592d44 = null;
            _0x10b9e2 = null;
            _0x5ed062 = null;
            _0x522285 = ![];
            const _0x4ff7ec = document['getElementById']('ability-ui');
            if (_0x4ff7ec)
                _0x4ff7ec['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x2d2651;
            _0x21778f();
            _0x160ee0(_0x2d2651 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x2d2651, !![]);
            let _0x363dda = '';
            if (_0x2d2651 === 'Investigator')
                _0x363dda = 'Investigate\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x2d2651 === 'Tracker')
                _0x363dda = 'Track\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x2d2651 === 'Doctor')
                _0x363dda = 'Heal\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x2d2651 === 'Archer')
                _0x363dda = 'Guard\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x2d2651 === 'Escort')
                _0x363dda = 'Roleblock\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x2d2651 === 'Vigilante')
                _0x363dda = 'Shoot\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x2d2651 === 'Skinwalker')
                _0x363dda = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x2d2651 === 'Blackmailer')
                _0x363dda = 'Pick\x20a\x20player\x20to\x20blackmail\x20and\x20a\x20player\x20to\x20kill\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x2d2651 === 'Celebrity')
                _0x363dda = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x2d2651 === 'Mayor')
                _0x363dda = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x160ee0(_0x363dda, !![]);
        } else if (_0x2696af['type'] === 'mayor_reveal') {
            _0x7b86f1['add'](parseInt(_0x2696af['playerId']));
            _0x357759();
            _0x21778f();
        } else if (_0x2696af['type'] === 'rolelist_update') {
            _0x4c9809['ROLE_LIST_RAW'] = _0x2696af['list'] || [];
            _0x2959ac(_0x2696af['list'], _0x2696af['mode']);
        } else if (_0x2696af['type'] === 'sound_event') {
            _0x573e78['onSoundEvent'](_0x2696af['track']);
        } else if (_0x2696af['type'] === 'blood_splatter') {
            _0xa59685['push']({
                'x': _0x2696af['x'],
                'y': _0x2696af['y']
            });
        } else if (_0x2696af['type'] === 'blood_drop') {
            _0x133132['push']({
                'x': _0x2696af['x'],
                'y': _0x2696af['y']
            });
        } else if (_0x2696af['type'] === 'day_fade') {
            _0xfc00b5 = 0x1;
            _0x13c080 = performance['now']() + 0x3e8;
        } else if (_0x2696af['type'] === 'player_stats_updated') {
            const _0x556cac = parseInt(_0x2696af['id']);
            if (_0x556cac === _0x16badb && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x2696af['accountStats']);
            }
            if (_0x52b337[_0x2696af['id']]) {
                _0x52b337[_0x2696af['id']]['accountStats'] = _0x2696af['accountStats'];
            }
            _0x123975();
        } else if (_0x2696af['type'] === 'stats_update') {
            const _0x335558 = window['_FB'];
            if (_0x335558 && _0x335558['_currentUser'] && _0x335558['_userData']) {
                const _0x5180e6 = _0x335558['_currentUser']['uid'];
                const _0x1471ac = _0x2696af['patch'] || {};
                const _0x336536 = _0x335558['_userData'];
                const _0x84e2e = {
                    'townWins': (_0x336536['townWins'] || 0x0) + (_0x1471ac['townWins'] || 0x0),
                    'mafiaWins': (_0x336536['mafiaWins'] || 0x0) + (_0x1471ac['mafiaWins'] || 0x0),
                    'deaths': (_0x336536['deaths'] || 0x0) + (_0x1471ac['deaths'] || 0x0),
                    'townLosses': (_0x336536['townLosses'] || 0x0) + (_0x1471ac['townLosses'] || 0x0),
                    'mafiaLosses': (_0x336536['mafiaLosses'] || 0x0) + (_0x1471ac['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x335558['_userData'], _0x84e2e);
                const _0x4953c2 = _0x335558['doc'](_0x335558['db'], 'users', _0x5180e6);
                _0x335558['updateDoc'](_0x4953c2, _0x84e2e)['catch'](() => {
                });
                if (_0x3deee7 && _0x3deee7['readyState'] === WebSocket['OPEN']) {
                    _0x3deee7['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x84e2e
                    }));
                }
                _0x123975();
            }
        } else if (_0x2696af['type'] === 'game_over') {
            _0x573e78['onStateChange']('LOBBY', ![]);
            _0x2959ac([], 'off');
            _0x2d2651 = null;
            _0x2974aa['isDead'] = ![];
            _0x2974aa['hasArrow'] = ![];
            _0xa59685 = [];
            _0x133132 = [];
            _0x31dd3c['clear']();
            _0x7b86f1['clear']();
            _0x4c9809['CURRENT_TARGET'] = null;
            _0x45a547 = null;
            _0x255cf5 = null;
            _0x592d44 = null;
            _0x10b9e2 = null;
            _0x5ed062 = null;
            _0x522285 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x21778f();
            _0x160ee0('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x2696af['type'] === 'chat_log') {
            _0x160ee0(_0x2696af['text'], ![], !!_0x2696af['isHost'], _0x2696af['sender']);
        } else if (_0x2696af['type'] === 'sys_chat') {
            _0x160ee0(_0x2696af['text'], !![]);
        }
    };
}
function _0x160ee0(_0x5e4afc, _0x27c5fd = ![], _0x47d522 = ![], _0x3b3bb6 = null) {
    const _0x4e2b74 = document['getElementById']('chat-log-messages');
    const _0x2e57d6 = document['getElementById']('chat-log-ui');
    const _0x2c75c8 = _0x2e57d6 ? _0x2e57d6['scrollHeight'] - _0x2e57d6['scrollTop'] - _0x2e57d6['clientHeight'] < 0x1e : !![];
    const _0x55ab45 = document['createElement']('div');
    _0x55ab45['className'] = 'chat-log-line' + (_0x27c5fd ? '\x20sys-msg' : '');
    if (_0x3b3bb6) {
        const _0x287020 = document['createElement']('span');
        _0x287020['className'] = _0x47d522 ? 'chat-host-name' : 'chat-sender-name';
        _0x287020['textContent'] = _0x3b3bb6 + ':\x20';
        const _0x2304e9 = document['createElement']('span');
        _0x2304e9['className'] = 'chat-msg-text';
        _0x2304e9['textContent'] = _0x5e4afc;
        _0x55ab45['appendChild'](_0x287020);
        _0x55ab45['appendChild'](_0x2304e9);
    } else {
        _0x55ab45['innerText'] = _0x5e4afc;
    }
    if (_0x4e2b74)
        _0x4e2b74['appendChild'](_0x55ab45);
    if (_0x2e57d6 && _0x2c75c8) {
        _0x2e57d6['scrollTop'] = _0x2e57d6['scrollHeight'];
    }
    if (_0x4e2b74 && _0x4e2b74['childElementCount'] > 0xc8) {
        _0x4e2b74['removeChild'](_0x4e2b74['firstChild']);
    }
}
function _0x29aeab(_0x26e494, _0x1f898c, _0x4b83d1) {
    const _0x1404d6 = document['createElement']('canvas');
    _0x1404d6['width'] = _0x4b83d1;
    _0x1404d6['height'] = _0x4b83d1;
    const _0x508a19 = _0x1404d6['getContext']('2d');
    _0x508a19['imageSmoothingEnabled'] = ![];
    const _0x379dc1 = 'assets/' + (_0x26e494 || 'body01.png');
    const _0x2e2685 = _0x3edc06(_0x379dc1);
    if (_0x2e2685['complete'] && _0x2e2685['naturalWidth'] > 0x0)
        _0x508a19['drawImage'](_0x2e2685, 0x0, 0x0, _0x4b83d1, _0x4b83d1);
    if (_0x1f898c) {
        const _0x3e357e = 'assets/' + _0x1f898c;
        const _0x89c016 = _0x3edc06(_0x3e357e);
        if (_0x89c016['complete'] && _0x89c016['naturalWidth'] > 0x0)
            _0x508a19['drawImage'](_0x89c016, 0x0, 0x0, _0x4b83d1, _0x4b83d1);
    }
    return _0x1404d6['toDataURL']();
}
let _0x4c983c = '';
function _0x123975() {
    const _0x213703 = document['getElementById']('chat-profile-panel');
    if (!_0x213703)
        return;
    const _0x3a86eb = [];
    if (_0x16badb !== null) {
        const _0x1d3e80 = _0x27f41d || 'body01.png';
        const _0x1e8b1b = _0x173b31 || 'eyes4.png';
        const _0x5184d8 = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x3a86eb['push']({
            'id': _0x16badb,
            'name': _0x2adc50,
            'body': _0x1d3e80,
            'eyes': _0x1e8b1b,
            'stats': _0x5184d8
        });
    }
    for (const _0x1ba5fb in _0x52b337) {
        const _0x3f8635 = _0x52b337[_0x1ba5fb];
        const _0x582435 = _0x3f8635['accountStats'] || null;
        _0x3a86eb['push']({
            'id': parseInt(_0x1ba5fb),
            'name': _0x3f8635['name'],
            'body': _0x3f8635['body'] || 'body01.png',
            'eyes': _0x3f8635['eyes'] || 'eyes4.png',
            'stats': _0x582435
        });
    }
    const _0xcf1058 = _0x3a86eb['map'](_0x486468 => _0x486468['id'] + '_' + _0x486468['name'] + '_' + _0x486468['body'] + '_' + _0x486468['eyes'] + '_' + JSON['stringify'](_0x486468['stats']))['join']('|');
    if (_0xcf1058 === _0x4c983c)
        return;
    _0x4c983c = _0xcf1058;
    _0x213703['innerHTML'] = '';
    let _0x1efed4 = ![];
    for (const _0x11cb57 of _0x3a86eb) {
        _0x1efed4 = !![];
        const _0x2a2d00 = _0x29aeab(_0x11cb57['body'], _0x11cb57['eyes'], 0x20);
        const _0x15f040 = document['createElement']('div');
        _0x15f040['className'] = 'chat-pfp-entry';
        const _0x2df82f = document['createElement']('img');
        _0x2df82f['src'] = _0x2a2d00;
        _0x2df82f['alt'] = _0x11cb57['name'];
        _0x15f040['appendChild'](_0x2df82f);
        const _0x13420d = document['createElement']('div');
        _0x13420d['className'] = 'chat-pfp-tooltip';
        let _0x14ff2b = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x11cb57['name'] + '</div>';
        const _0x5569f2 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x392e1c = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x54c066 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x3f218c = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x45fc1c = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x1931a3 = (_0x31422a, _0x1b437d, _0x50c84a, _0x35aae8) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x31422a + '<span\x20style=\x22flex:1;color:' + _0x35aae8 + ';\x22>' + _0x1b437d + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x50c84a + '</span></div>';
        if (_0x11cb57['stats']) {
            _0x14ff2b += _0x1931a3(_0x5569f2, 'Town\x20Wins', _0x11cb57['stats']['townWins'] || 0x0, '#55ee77');
            _0x14ff2b += _0x1931a3(_0x392e1c, 'Mafia\x20Wins', _0x11cb57['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x14ff2b += _0x1931a3(_0x54c066, 'Deaths', _0x11cb57['stats']['deaths'] || 0x0, '#aaa');
            _0x14ff2b += _0x1931a3(_0x3f218c, 'Town\x20Losses', _0x11cb57['stats']['townLosses'] || 0x0, '#6688aa');
            _0x14ff2b += _0x1931a3(_0x45fc1c, 'Mafia\x20Losses', _0x11cb57['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x14ff2b += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x13420d['innerHTML'] = _0x14ff2b;
        _0x15f040['appendChild'](_0x13420d);
        _0x15f040['addEventListener']('mouseenter', () => {
            const _0x1b58d8 = _0x15f040['getBoundingClientRect']();
            _0x13420d['style']['left'] = _0x1b58d8['right'] + 0x6 + 'px';
            _0x13420d['style']['top'] = _0x1b58d8['top'] + _0x1b58d8['height'] / 0x2 + 'px';
            _0x13420d['style']['transform'] = 'translateY(-50%)';
        });
        _0x213703['appendChild'](_0x15f040);
    }
    const _0x2fede7 = document['getElementById']('chat-log-wrap');
    if (_0x2fede7) {
        if (_0x1efed4) {
            _0x2fede7['classList']['add']('has-profiles');
            _0x213703['style']['display'] = 'flex';
        } else {
            _0x2fede7['classList']['remove']('has-profiles');
            _0x213703['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x123975;
let _0x5381f0 = -0x1, _0x2de787 = -0x1, _0x58c68a = -0x1, _0x4ccbb1 = 0x0;
function _0x48aa92() {
    if (!_0x16badb || !_0x3deee7 || _0x3deee7['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x230ac6 = performance['now']();
    const _0x5a280a = _0x230ac6 - _0x4ccbb1;
    const _0x593a16 = Math['abs'](_0x2974aa['x'] - _0x5381f0) > 0.05 || Math['abs'](_0x2974aa['y'] - _0x2de787) > 0.05 || Math['abs'](_0x2974aa['angle'] - _0x58c68a) > 0.02;
    if (!_0x593a16 && _0x5a280a < 0xc8)
        return;
    if (_0x5a280a < 0x19)
        return;
    _0x4ccbb1 = _0x230ac6;
    _0x5381f0 = _0x2974aa['x'];
    _0x2de787 = _0x2974aa['y'];
    _0x58c68a = _0x2974aa['angle'];
    if (!_0x16badb || !_0x3deee7 || _0x3deee7['readyState'] !== WebSocket['OPEN'])
        return;
    _0x3deee7['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x2974aa['x'],
        'y': _0x2974aa['y'],
        'vx': _0x2974aa['vx'],
        'vy': _0x2974aa['vy'],
        'angle': _0x2974aa['angle'],
        'scale': _0x2974aa['scale'],
        'teleportId': _0x11c199,
        'clientTimestamp': Date['now']()
    }));
}
function _0x47d771() {
    if (_0x2974aa['isDead'])
        return;
    const _0x2637e0 = _0x4c9809['MAP']['layers']['find'](_0x40f532 => _0x40f532['name'] === 'walls');
    if (!_0x2637e0)
        return;
    const _0x423f81 = _0x2974aa['scale'];
    const _0x17fd6f = _0x2974aa['width'] * _0x423f81 / 0x2;
    for (let _0x57f751 = 0x0; _0x57f751 < 0x3; _0x57f751++) {
        let _0x1eba5e = _0x2974aa['x'] + _0x2974aa['width'] / 0x2;
        let _0x89c162 = _0x2974aa['y'] + _0x2974aa['height'] / 0x2;
        const _0x203f36 = Math['floor']((_0x1eba5e - _0x17fd6f) / _0x4c9809['MAP']['tileSize']);
        const _0x5de5fa = Math['floor']((_0x1eba5e + _0x17fd6f) / _0x4c9809['MAP']['tileSize']);
        const _0x2569d2 = Math['floor']((_0x89c162 - _0x17fd6f) / _0x4c9809['MAP']['tileSize']);
        const _0x34bee6 = Math['floor']((_0x89c162 + _0x17fd6f) / _0x4c9809['MAP']['tileSize']);
        for (let _0x136cf1 = _0x2569d2; _0x136cf1 <= _0x34bee6; _0x136cf1++) {
            for (let _0x56c685 = _0x203f36; _0x56c685 <= _0x5de5fa; _0x56c685++) {
                if (_0x56c685 < 0x0 || _0x56c685 >= _0x4c9809['MAP']['columns'] || _0x136cf1 < 0x0 || _0x136cf1 >= _0x4c9809['MAP']['rows'])
                    continue;
                if (_0x2637e0['data'][_0x136cf1 * _0x4c9809['MAP']['columns'] + _0x56c685] === 0x0)
                    continue;
                const _0x1ea97d = _0x56c685 * _0x4c9809['MAP']['tileSize'];
                const _0x258871 = _0x136cf1 * _0x4c9809['MAP']['tileSize'];
                const _0x4aea1c = _0x1eba5e < _0x1ea97d ? _0x1ea97d : _0x1eba5e > _0x1ea97d + _0x4c9809['MAP']['tileSize'] ? _0x1ea97d + _0x4c9809['MAP']['tileSize'] : _0x1eba5e;
                const _0x592bee = _0x89c162 < _0x258871 ? _0x258871 : _0x89c162 > _0x258871 + _0x4c9809['MAP']['tileSize'] ? _0x258871 + _0x4c9809['MAP']['tileSize'] : _0x89c162;
                const _0x31ed0 = _0x1eba5e - _0x4aea1c;
                const _0x1115af = _0x89c162 - _0x592bee;
                const _0x359f37 = Math['sqrt'](_0x31ed0 * _0x31ed0 + _0x1115af * _0x1115af);
                if (_0x359f37 < _0x17fd6f) {
                    if (_0x359f37 === 0x0) {
                        const _0x1dd767 = _0x1eba5e - _0x1ea97d;
                        const _0x54defe = _0x1ea97d + _0x4c9809['MAP']['tileSize'] - _0x1eba5e;
                        const _0x411c17 = _0x89c162 - _0x258871;
                        const _0x5e4afa = _0x258871 + _0x4c9809['MAP']['tileSize'] - _0x89c162;
                        const _0xaae9c = Math['min'](_0x1dd767, _0x54defe, _0x411c17, _0x5e4afa);
                        if (_0xaae9c === _0x1dd767)
                            _0x1eba5e = _0x1ea97d - _0x17fd6f;
                        else if (_0xaae9c === _0x54defe)
                            _0x1eba5e = _0x1ea97d + _0x4c9809['MAP']['tileSize'] + _0x17fd6f;
                        else if (_0xaae9c === _0x411c17)
                            _0x89c162 = _0x258871 - _0x17fd6f;
                        else
                            _0x89c162 = _0x258871 + _0x4c9809['MAP']['tileSize'] + _0x17fd6f;
                    } else {
                        const _0x1032b1 = _0x17fd6f - _0x359f37;
                        _0x1eba5e += _0x31ed0 / _0x359f37 * _0x1032b1;
                        _0x89c162 += _0x1115af / _0x359f37 * _0x1032b1;
                        const _0x252e8 = _0x2974aa['vx'] * (_0x31ed0 / _0x359f37) + _0x2974aa['vy'] * (_0x1115af / _0x359f37);
                        if (_0x252e8 < 0x0) {
                            _0x2974aa['vx'] -= _0x252e8 * (_0x31ed0 / _0x359f37);
                            _0x2974aa['vy'] -= _0x252e8 * (_0x1115af / _0x359f37);
                        }
                    }
                }
            }
        }
        _0x2974aa['x'] = _0x1eba5e - _0x2974aa['width'] / 0x2;
        _0x2974aa['y'] = _0x89c162 - _0x2974aa['height'] / 0x2;
    }
}
function _0x29639a(_0x2ecf24) {
    const _0x4d3598 = _0x4c9809['MAP']['layers']['find'](_0xc139dd => _0xc139dd['name'] === 'walls');
    if (!_0x4d3598)
        return;
    const _0x35ff1b = _0x2ecf24['width'] / 0x2;
    for (let _0x217469 = 0x0; _0x217469 < 0x2; _0x217469++) {
        let _0x355d03 = _0x2ecf24['x'] + _0x2ecf24['width'] / 0x2;
        let _0x6e3d2b = _0x2ecf24['y'] + _0x2ecf24['height'] / 0x2;
        const _0x2ff7f9 = Math['floor']((_0x355d03 - _0x35ff1b) / _0x4c9809['MAP']['tileSize']);
        const _0x17ba89 = Math['floor']((_0x355d03 + _0x35ff1b) / _0x4c9809['MAP']['tileSize']);
        const _0x5c5a35 = Math['floor']((_0x6e3d2b - _0x35ff1b) / _0x4c9809['MAP']['tileSize']);
        const _0x3ceb08 = Math['floor']((_0x6e3d2b + _0x35ff1b) / _0x4c9809['MAP']['tileSize']);
        for (let _0x64dc49 = _0x5c5a35; _0x64dc49 <= _0x3ceb08; _0x64dc49++) {
            for (let _0x4aea63 = _0x2ff7f9; _0x4aea63 <= _0x17ba89; _0x4aea63++) {
                if (_0x4aea63 < 0x0 || _0x4aea63 >= _0x4c9809['MAP']['columns'] || _0x64dc49 < 0x0 || _0x64dc49 >= _0x4c9809['MAP']['rows'])
                    continue;
                if (_0x4d3598['data'][_0x64dc49 * _0x4c9809['MAP']['columns'] + _0x4aea63] === 0x0)
                    continue;
                const _0x262413 = _0x4aea63 * _0x4c9809['MAP']['tileSize'];
                const _0x325c9d = _0x64dc49 * _0x4c9809['MAP']['tileSize'];
                const _0x5864d1 = _0x355d03 < _0x262413 ? _0x262413 : _0x355d03 > _0x262413 + _0x4c9809['MAP']['tileSize'] ? _0x262413 + _0x4c9809['MAP']['tileSize'] : _0x355d03;
                const _0x5d7d3c = _0x6e3d2b < _0x325c9d ? _0x325c9d : _0x6e3d2b > _0x325c9d + _0x4c9809['MAP']['tileSize'] ? _0x325c9d + _0x4c9809['MAP']['tileSize'] : _0x6e3d2b;
                const _0x35f052 = _0x355d03 - _0x5864d1;
                const _0x170844 = _0x6e3d2b - _0x5d7d3c;
                const _0x11d603 = Math['sqrt'](_0x35f052 * _0x35f052 + _0x170844 * _0x170844);
                if (_0x11d603 < _0x35ff1b) {
                    if (_0x11d603 === 0x0) {
                        const _0x4ad40d = _0x355d03 - _0x262413;
                        const _0x38142b = _0x262413 + _0x4c9809['MAP']['tileSize'] - _0x355d03;
                        const _0x272d9e = _0x6e3d2b - _0x325c9d;
                        const _0x210bc3 = _0x325c9d + _0x4c9809['MAP']['tileSize'] - _0x6e3d2b;
                        const _0x537fab = Math['min'](_0x4ad40d, _0x38142b, _0x272d9e, _0x210bc3);
                        if (_0x537fab === _0x4ad40d)
                            _0x355d03 = _0x262413 - _0x35ff1b;
                        else if (_0x537fab === _0x38142b)
                            _0x355d03 = _0x262413 + _0x4c9809['MAP']['tileSize'] + _0x35ff1b;
                        else if (_0x537fab === _0x272d9e)
                            _0x6e3d2b = _0x325c9d - _0x35ff1b;
                        else
                            _0x6e3d2b = _0x325c9d + _0x4c9809['MAP']['tileSize'] + _0x35ff1b;
                    } else {
                        const _0x20474b = _0x35ff1b - _0x11d603;
                        _0x355d03 += _0x35f052 / _0x11d603 * _0x20474b;
                        _0x6e3d2b += _0x170844 / _0x11d603 * _0x20474b;
                    }
                }
            }
        }
        _0x2ecf24['x'] = _0x355d03 - _0x2ecf24['width'] / 0x2;
        _0x2ecf24['y'] = _0x6e3d2b - _0x2ecf24['height'] / 0x2;
    }
}
function _0x178482(_0x2312ef) {
    const _0x187971 = _0x2312ef['width'] / 0x2;
    for (let _0xc1bb6d = 0x0; _0xc1bb6d < 0x2; _0xc1bb6d++) {
        let _0x3478a0 = _0x2312ef['x'] + _0x2312ef['width'] / 0x2;
        let _0x7b072a = _0x2312ef['y'] + _0x2312ef['height'] / 0x2;
        for (const _0x27fdf0 of _0x4c9809['ENTITIES']) {
            const _0x534fcd = _0x3478a0 < _0x27fdf0['x'] ? _0x27fdf0['x'] : _0x3478a0 > _0x27fdf0['x'] + _0x27fdf0['w'] ? _0x27fdf0['x'] + _0x27fdf0['w'] : _0x3478a0;
            const _0x1dcad7 = _0x7b072a < _0x27fdf0['y'] ? _0x27fdf0['y'] : _0x7b072a > _0x27fdf0['y'] + _0x27fdf0['h'] ? _0x27fdf0['y'] + _0x27fdf0['h'] : _0x7b072a;
            const _0x57d407 = _0x3478a0 - _0x534fcd;
            const _0x95bb4c = _0x7b072a - _0x1dcad7;
            const _0x288d1f = Math['sqrt'](_0x57d407 * _0x57d407 + _0x95bb4c * _0x95bb4c);
            if (_0x288d1f < _0x187971 && _0x288d1f > 0x0) {
                const _0x2ccd5f = _0x187971 - _0x288d1f;
                const _0x4d2ff0 = _0x57d407 / _0x288d1f;
                const _0x1a98ea = _0x95bb4c / _0x288d1f;
                _0x3478a0 += _0x4d2ff0 * _0x2ccd5f;
                _0x7b072a += _0x1a98ea * _0x2ccd5f;
            } else if (_0x288d1f === 0x0) {
                const _0x57d658 = _0x3478a0 - _0x27fdf0['x'];
                const _0x288563 = _0x27fdf0['x'] + _0x27fdf0['w'] - _0x3478a0;
                const _0x4b335e = _0x7b072a - _0x27fdf0['y'];
                const _0x39bf99 = _0x27fdf0['y'] + _0x27fdf0['h'] - _0x7b072a;
                const _0x3991be = Math['min'](_0x57d658, _0x288563, _0x4b335e, _0x39bf99);
                if (_0x3991be === _0x57d658)
                    _0x3478a0 = _0x27fdf0['x'] - _0x187971;
                else if (_0x3991be === _0x288563)
                    _0x3478a0 = _0x27fdf0['x'] + _0x27fdf0['w'] + _0x187971;
                else if (_0x3991be === _0x4b335e)
                    _0x7b072a = _0x27fdf0['y'] - _0x187971;
                else
                    _0x7b072a = _0x27fdf0['y'] + _0x27fdf0['h'] + _0x187971;
            }
        }
        _0x2312ef['x'] = _0x3478a0 - _0x2312ef['width'] / 0x2;
        _0x2312ef['y'] = _0x7b072a - _0x2312ef['height'] / 0x2;
    }
}
function _0x581cd8() {
    if (_0x2974aa['isDead'])
        return;
    const _0x6f3b06 = _0x2974aa['width'] / 0x2;
    const _0x4e7954 = _0x2974aa['x'] + _0x2974aa['width'] / 0x2;
    const _0x5a2b47 = _0x2974aa['y'] + _0x2974aa['height'] / 0x2;
    for (const _0xe5d5b0 in _0x52b337) {
        const _0x2e047b = _0x52b337[_0xe5d5b0];
        if (_0x2e047b['isDead'])
            continue;
        const _0x2777c6 = _0x2e047b['width'] / 0x2;
        const _0x5e5b6c = _0x6f3b06 + _0x2777c6;
        const _0x32708d = (_0x2e047b['renderX'] ?? _0x2e047b['x']) + _0x2e047b['width'] / 0x2;
        const _0x1a5b3a = (_0x2e047b['renderY'] ?? _0x2e047b['y']) + _0x2e047b['height'] / 0x2;
        const _0x2c234d = _0x4e7954 - _0x32708d;
        const _0x1a7461 = _0x5a2b47 - _0x1a5b3a;
        const _0x5901fb = Math['sqrt'](_0x2c234d * _0x2c234d + _0x1a7461 * _0x1a7461);
        if (_0x5901fb > 0x0 && _0x5901fb < _0x5e5b6c) {
            const _0x14b059 = _0x5e5b6c - _0x5901fb;
            const _0x190307 = _0x2c234d / _0x5901fb;
            const _0xd32828 = _0x1a7461 / _0x5901fb;
            _0x2974aa['x'] += _0x190307 * (_0x14b059 * 0.25);
            _0x2974aa['y'] += _0xd32828 * (_0x14b059 * 0.25);
            _0x2e047b['x'] -= _0x190307 * (_0x14b059 * 0.75);
            _0x2e047b['y'] -= _0xd32828 * (_0x14b059 * 0.75);
            _0x29639a(_0x2e047b);
            _0x178482(_0x2e047b);
            if (_0x2e047b['renderX'] !== undefined) {
                _0x2e047b['renderX'] = _0x2e047b['x'];
                _0x2e047b['renderY'] = _0x2e047b['y'];
            }
            const _0x4348b7 = _0x2974aa['vx'] * _0x190307 + _0x2974aa['vy'] * _0xd32828;
            if (_0x4348b7 < 0x0) {
                _0x2974aa['vx'] -= _0x4348b7 * _0x190307 * 0.25;
                _0x2974aa['vy'] -= _0x4348b7 * _0xd32828 * 0.25;
            }
        }
    }
    _0x47d771();
    _0x558f42();
}
function _0x558f42() {
    if (_0x2974aa['isDead'])
        return;
    const _0x594eb9 = _0x2974aa['scale'];
    const _0x3f5e3a = _0x2974aa['width'] * _0x594eb9 / 0x2;
    for (let _0x27e3b7 = 0x0; _0x27e3b7 < 0x2; _0x27e3b7++) {
        let _0x579e39 = _0x2974aa['x'] + _0x2974aa['width'] / 0x2;
        let _0x2b6062 = _0x2974aa['y'] + _0x2974aa['height'] / 0x2;
        for (const _0xd97e61 of _0x4c9809['ENTITIES']) {
            const _0x17e0b4 = _0x579e39 < _0xd97e61['x'] ? _0xd97e61['x'] : _0x579e39 > _0xd97e61['x'] + _0xd97e61['w'] ? _0xd97e61['x'] + _0xd97e61['w'] : _0x579e39;
            const _0xa228e5 = _0x2b6062 < _0xd97e61['y'] ? _0xd97e61['y'] : _0x2b6062 > _0xd97e61['y'] + _0xd97e61['h'] ? _0xd97e61['y'] + _0xd97e61['h'] : _0x2b6062;
            const _0x4f30f1 = _0x579e39 - _0x17e0b4;
            const _0x239012 = _0x2b6062 - _0xa228e5;
            const _0x56f493 = Math['sqrt'](_0x4f30f1 * _0x4f30f1 + _0x239012 * _0x239012);
            if (_0x56f493 < _0x3f5e3a && _0x56f493 > 0x0) {
                const _0x43af99 = _0x3f5e3a - _0x56f493;
                const _0x21dd5a = _0x4f30f1 / _0x56f493;
                const _0x183522 = _0x239012 / _0x56f493;
                _0x579e39 += _0x21dd5a * _0x43af99;
                _0x2b6062 += _0x183522 * _0x43af99;
                const _0x33b779 = _0x2974aa['vx'] * _0x21dd5a + _0x2974aa['vy'] * _0x183522;
                if (_0x33b779 < 0x0) {
                    _0x2974aa['vx'] -= _0x33b779 * _0x21dd5a;
                    _0x2974aa['vy'] -= _0x33b779 * _0x183522;
                }
            } else if (_0x56f493 === 0x0) {
                const _0x4ebabf = _0x579e39 - _0xd97e61['x'];
                const _0x361ff9 = _0xd97e61['x'] + _0xd97e61['w'] - _0x579e39;
                const _0xe753d7 = _0x2b6062 - _0xd97e61['y'];
                const _0x118289 = _0xd97e61['y'] + _0xd97e61['h'] - _0x2b6062;
                const _0x2f6c9b = Math['min'](_0x4ebabf, _0x361ff9, _0xe753d7, _0x118289);
                if (_0x2f6c9b === _0x4ebabf)
                    _0x579e39 = _0xd97e61['x'] - _0x3f5e3a;
                else if (_0x2f6c9b === _0x361ff9)
                    _0x579e39 = _0xd97e61['x'] + _0xd97e61['w'] + _0x3f5e3a;
                else if (_0x2f6c9b === _0xe753d7)
                    _0x2b6062 = _0xd97e61['y'] - _0x3f5e3a;
                else
                    _0x2b6062 = _0xd97e61['y'] + _0xd97e61['h'] + _0x3f5e3a;
            }
        }
        _0x2974aa['x'] = _0x579e39 - _0x2974aa['width'] / 0x2;
        _0x2974aa['y'] = _0x2b6062 - _0x2974aa['height'] / 0x2;
    }
}
function _0x269842(_0x3dcaf3, _0x554059) {
    const _0x1c3d5f = _0x4c9809['MAP']['layers']['find'](_0x577f97 => _0x577f97['name'] === 'trees');
    if (!_0x1c3d5f)
        return ![];
    const _0xaa91b0 = Math['floor'](_0x3dcaf3 / _0x4c9809['MAP']['tileSize']);
    const _0x2ce630 = Math['floor'](_0x554059 / _0x4c9809['MAP']['tileSize']);
    if (_0xaa91b0 < 0x0 || _0xaa91b0 >= _0x4c9809['MAP']['columns'] || _0x2ce630 < 0x0 || _0x2ce630 >= _0x4c9809['MAP']['rows'])
        return ![];
    return _0x1c3d5f['data'][_0x2ce630 * _0x4c9809['MAP']['columns'] + _0xaa91b0] === 0xb;
}
let _0x5208ec = null;
function _0x10f088() {
    const _0x22a729 = _0x4c9809['MAP'];
    const _0x3a756b = _0x22a729['layers']['find'](_0x5b78ae => _0x5b78ae['name'] === 'floor2');
    const _0x4c0464 = _0x22a729['layers']['find'](_0x481766 => _0x481766['name'] === 'walls');
    if (!_0x3a756b || !_0x4c0464) {
        _0x5208ec = null;
        return;
    }
    const _0x185f67 = _0x22a729['columns'];
    const _0x13fdc4 = _0x22a729['rows'];
    const _0x468164 = [];
    const _0x3abbf1 = new Set();
    const _0x489cb9 = new Set();
    for (let _0x4d31a2 = 0x0; _0x4d31a2 < _0x13fdc4; _0x4d31a2++) {
        for (let _0x3d57c8 = 0x0; _0x3d57c8 < _0x185f67; _0x3d57c8++) {
            const _0x1ced7b = _0x4d31a2 * _0x185f67 + _0x3d57c8;
            const _0x2fc1e5 = _0x3a756b['data'][_0x1ced7b];
            const _0x21231a = _0x4c0464['data'][_0x1ced7b];
            if (_0x2fc1e5 === 0x2 && _0x21231a === 0x0) {
                _0x468164['push']({
                    'c': _0x3d57c8,
                    'r': _0x4d31a2
                });
                _0x489cb9['add'](_0x3d57c8 + ',' + _0x4d31a2);
            } else if (_0x21231a !== 0x0) {
                _0x3abbf1['add'](_0x3d57c8 + ',' + _0x4d31a2);
            }
        }
    }
    const _0x20f2b4 = [
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
                c: _0x47d8b6,
                r: _0x5d6a92
            } of _0x468164) {
        for (const [_0xf74a42, _0x39755f] of _0x20f2b4) {
            const _0x3e0499 = _0x47d8b6 + _0xf74a42, _0x94ee70 = _0x5d6a92 + _0x39755f;
            const _0x450484 = _0x3e0499 + ',' + _0x94ee70;
            if (!_0x489cb9['has'](_0x450484)) {
                _0x3abbf1['add'](_0x450484);
            }
        }
    }
    _0x5208ec = {
        'wallSet': _0x3abbf1,
        'floorTiles': _0x468164,
        'interiorSet': _0x489cb9
    };
}
function _0x486f24() {
    const _0x1c6ba0 = _0x4c9809['MAP']['layers']['find'](_0x429770 => _0x429770['name'] === 'floor2');
    if (!_0x1c6ba0)
        return ![];
    const _0x455242 = _0x2974aa['x'] + _0x2974aa['width'] / 0x2;
    const _0x187d97 = _0x2974aa['y'] + _0x2974aa['height'] / 0x2;
    const _0x587339 = _0x4c9809['MAP']['tileSize'];
    const _0x45ce01 = Math['floor'](_0x455242 / _0x587339);
    const _0x19018c = Math['floor'](_0x187d97 / _0x587339);
    if (_0x45ce01 < 0x0 || _0x45ce01 >= _0x4c9809['MAP']['columns'] || _0x19018c < 0x0 || _0x19018c >= _0x4c9809['MAP']['rows'])
        return ![];
    const _0x84ce11 = _0x19018c * _0x4c9809['MAP']['columns'] + _0x45ce01;
    if (_0x1c6ba0['data'][_0x84ce11] === 0x2)
        return !![];
    if (_0x4c9809['MAP']['doors'] && _0x4c9809['MAP']['doors'][_0x84ce11])
        return !![];
    const _0x7cbfd9 = [
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
    for (const [_0x5eda6c, _0x3fb361] of _0x7cbfd9) {
        const _0x5e4424 = Math['floor']((_0x455242 + _0x5eda6c) / _0x587339);
        const _0x2fca4f = Math['floor']((_0x187d97 + _0x3fb361) / _0x587339);
        if (_0x5e4424 >= 0x0 && _0x5e4424 < _0x4c9809['MAP']['columns'] && _0x2fca4f >= 0x0 && _0x2fca4f < _0x4c9809['MAP']['rows']) {
            const _0x472a80 = _0x2fca4f * _0x4c9809['MAP']['columns'] + _0x5e4424;
            if (_0x1c6ba0['data'][_0x472a80] === 0x2 || _0x4c9809['MAP']['doors'] && _0x4c9809['MAP']['doors'][_0x472a80]) {
                return !![];
            }
        }
    }
    return ![];
}
let _0x294ed8 = null, _0x49eea7 = null;
function _0x4f329b() {
    if (_0x2974aa['isDead']) {
        _0x4c9809['SHADOW']['polygon'] = null;
        _0x294ed8 = null;
        return;
    }
    const _0x3779bc = _0x4c9809['MAP'];
    const _0x57a431 = _0x4c9809['SHADOW'];
    const _0x976205 = _0x3779bc['tileSize'];
    if (!_0x5208ec)
        _0x10f088();
    if (!_0x5208ec) {
        _0x57a431['polygon'] = null;
        _0x294ed8 = null;
        return;
    }
    const {
        wallSet: _0x554e4b,
        floorTiles: _0x93b722
    } = _0x5208ec;
    if (_0x93b722['length'] === 0x0) {
        _0x57a431['polygon'] = null;
        _0x294ed8 = null;
        return;
    }
    if (!_0x486f24()) {
        _0x57a431['polygon'] = null;
        _0x294ed8 = null;
        return;
    }
    const _0x3bbb29 = _0x2974aa['x'] + _0x2974aa['width'] / 0x2;
    const _0x35806a = _0x2974aa['y'] + _0x2974aa['height'] / 0x2;
    if (_0x294ed8 !== null && _0x57a431['polygon'] && Math['hypot'](_0x3bbb29 - _0x294ed8, _0x35806a - _0x49eea7) < 0.5) {
        return;
    }
    _0x294ed8 = _0x3bbb29;
    _0x49eea7 = _0x35806a;
    const _0x5ddd44 = Math['floor'](_0x3bbb29 / _0x976205);
    const _0x245bc8 = Math['floor'](_0x35806a / _0x976205);
    const _0x569d13 = Math['max'](0x0, _0x5ddd44 - 0x8);
    const _0x3498ed = Math['min'](_0x3779bc['columns'] - 0x1, _0x5ddd44 + 0x8);
    const _0x1b81a2 = Math['max'](0x0, _0x245bc8 - 0x8);
    const _0x2c496c = Math['min'](_0x3779bc['rows'] - 0x1, _0x245bc8 + 0x8);
    const _0x476ada = [];
    const _0x3a45cc = [];
    for (let _0x14de8d = _0x1b81a2; _0x14de8d <= _0x2c496c; _0x14de8d++) {
        for (let _0xe38172 = _0x569d13; _0xe38172 <= _0x3498ed; _0xe38172++) {
            if (!_0x554e4b['has'](_0xe38172 + ',' + _0x14de8d))
                continue;
            const _0x3b3870 = _0xe38172 * _0x976205;
            const _0x2760f7 = _0x14de8d * _0x976205;
            const _0x5cb017 = _0x3b3870 + _0x976205;
            const _0x2c545a = _0x2760f7 + _0x976205;
            if (!_0x554e4b['has'](_0xe38172 + ',' + (_0x14de8d - 0x1))) {
                _0x476ada['push'](_0x3b3870, _0x2760f7, _0x5cb017, _0x2760f7);
                _0x3a45cc['push'](_0x3b3870, _0x2760f7, _0x5cb017, _0x2760f7);
            }
            if (!_0x554e4b['has'](_0xe38172 + ',' + (_0x14de8d + 0x1))) {
                _0x476ada['push'](_0x3b3870, _0x2c545a, _0x5cb017, _0x2c545a);
                _0x3a45cc['push'](_0x3b3870, _0x2c545a, _0x5cb017, _0x2c545a);
            }
            if (!_0x554e4b['has'](_0xe38172 - 0x1 + ',' + _0x14de8d)) {
                _0x476ada['push'](_0x3b3870, _0x2760f7, _0x3b3870, _0x2c545a);
                _0x3a45cc['push'](_0x3b3870, _0x2760f7, _0x3b3870, _0x2c545a);
            }
            if (!_0x554e4b['has'](_0xe38172 + 0x1 + ',' + _0x14de8d)) {
                _0x476ada['push'](_0x5cb017, _0x2760f7, _0x5cb017, _0x2c545a);
                _0x3a45cc['push'](_0x5cb017, _0x2760f7, _0x5cb017, _0x2c545a);
            }
        }
    }
    const _0x4f7d57 = new Set();
    const _0x585748 = [];
    const _0x1d9748 = 0.0001;
    for (let _0x50fd4d = 0x0; _0x50fd4d < _0x3a45cc['length']; _0x50fd4d += 0x2) {
        const _0x5f1118 = _0x3a45cc[_0x50fd4d];
        const _0x582fa7 = _0x3a45cc[_0x50fd4d + 0x1];
        const _0x2c7e0b = Math['atan2'](_0x582fa7 - _0x35806a, _0x5f1118 - _0x3bbb29);
        const _0x297ed7 = Math['round'](_0x2c7e0b * 0x9c40);
        if (!_0x4f7d57['has'](_0x297ed7 - 0x1)) {
            _0x4f7d57['add'](_0x297ed7 - 0x1);
            _0x585748['push'](_0x2c7e0b - _0x1d9748);
        }
        if (!_0x4f7d57['has'](_0x297ed7)) {
            _0x4f7d57['add'](_0x297ed7);
            _0x585748['push'](_0x2c7e0b);
        }
        if (!_0x4f7d57['has'](_0x297ed7 + 0x1)) {
            _0x4f7d57['add'](_0x297ed7 + 0x1);
            _0x585748['push'](_0x2c7e0b + _0x1d9748);
        }
    }
    for (let _0x4869e0 = 0x0; _0x4869e0 < 0x10; _0x4869e0++) {
        const _0x5c829e = -Math['PI'] + _0x4869e0 * 0x2 * Math['PI'] / 0x10;
        _0x585748['push'](_0x5c829e);
    }
    _0x585748['sort']((_0x49fa21, _0x49807d) => _0x49fa21 - _0x49807d);
    const _0x10b4f5 = 0xc * _0x976205;
    const _0x4f5e4c = [];
    for (let _0xdf0c5e = 0x0; _0xdf0c5e < _0x585748['length']; _0xdf0c5e++) {
        const _0x201df7 = _0x585748[_0xdf0c5e];
        const _0x1456e7 = Math['cos'](_0x201df7);
        const _0x129f4c = Math['sin'](_0x201df7);
        let _0x5ab3c1 = _0x10b4f5;
        for (let _0x106d8b = 0x0; _0x106d8b < _0x476ada['length']; _0x106d8b += 0x4) {
            const _0x239772 = _0x476ada[_0x106d8b], _0x3b326c = _0x476ada[_0x106d8b + 0x1];
            const _0x5a3a27 = _0x476ada[_0x106d8b + 0x2], _0x33bb2a = _0x476ada[_0x106d8b + 0x3];
            const _0xb34c8e = _0x5a3a27 - _0x239772;
            const _0x4a25d3 = _0x33bb2a - _0x3b326c;
            const _0x16eec1 = _0x1456e7 * _0x4a25d3 - _0x129f4c * _0xb34c8e;
            if (Math['abs'](_0x16eec1) < 1e-9)
                continue;
            const _0x3a9cb1 = _0x239772 - _0x3bbb29;
            const _0x122484 = _0x3b326c - _0x35806a;
            const _0x1e3621 = (_0x3a9cb1 * _0x4a25d3 - _0x122484 * _0xb34c8e) / _0x16eec1;
            const _0x342b0b = (_0x3a9cb1 * _0x129f4c - _0x122484 * _0x1456e7) / _0x16eec1;
            if (_0x1e3621 > 0x1 && _0x342b0b >= 0x0 && _0x342b0b <= 0x1 && _0x1e3621 < _0x5ab3c1) {
                _0x5ab3c1 = _0x1e3621;
            }
        }
        _0x4f5e4c['push'](_0x3bbb29 + _0x1456e7 * _0x5ab3c1, _0x35806a + _0x129f4c * _0x5ab3c1);
    }
    _0x57a431['polygon'] = _0x4f5e4c['length'] >= 0x6 ? _0x4f5e4c : null;
}
function _0x4ca932(_0x4cc92e, _0x341ff5, _0x166499) {
    if (_0x2974aa['isDead'])
        return;
    if (!_0x5208ec)
        _0x10f088();
    if (!_0x5208ec)
        return;
    const {floorTiles: _0x49a3df} = _0x5208ec;
    if (_0x49a3df['length'] === 0x0)
        return;
    const _0x2813fd = _0x4c9809['SHADOW'];
    const _0x3bc0f8 = _0x4c9809['MAP']['tileSize'];
    const _0x1e4125 = _0x4c9809['CAMERA']['width'];
    const _0xd73ca6 = _0x4c9809['CAMERA']['height'];
    if (!_0x4c9809['SHADOW']['_buf'] || _0x4c9809['SHADOW']['_buf']['width'] !== _0x1e4125 || _0x4c9809['SHADOW']['_buf']['height'] !== _0xd73ca6) {
        _0x4c9809['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x4c9809['SHADOW']['_buf']['width'] = _0x1e4125;
        _0x4c9809['SHADOW']['_buf']['height'] = _0xd73ca6;
    }
    const _0x3e20fa = _0x4c9809['SHADOW']['_buf'];
    const _0x4bac07 = _0x3e20fa['getContext']('2d');
    _0x4bac07['clearRect'](0x0, 0x0, _0x1e4125, _0xd73ca6);
    _0x4bac07['fillStyle'] = 'rgba(0,0,0,0.95)';
    _0x4bac07['beginPath']();
    for (const {
                c: _0x58094a,
                r: _0x51f975
            } of _0x49a3df) {
        const _0x3f2326 = Math['round'](_0x58094a * _0x3bc0f8 - _0x341ff5), _0x27b98b = Math['round'](_0x51f975 * _0x3bc0f8 - _0x166499);
        if (_0x3f2326 > _0x1e4125 || _0x27b98b > _0xd73ca6 || _0x3f2326 + _0x3bc0f8 < 0x0 || _0x27b98b + _0x3bc0f8 < 0x0)
            continue;
        _0x4bac07['rect'](_0x3f2326, _0x27b98b, _0x3bc0f8 + 0x1, _0x3bc0f8 + 0x1);
    }
    _0x4bac07['fill']();
    if (_0x486f24() && _0x2813fd['polygon'] && _0x2813fd['polygon']['length'] >= 0x6) {
        _0x4bac07['globalCompositeOperation'] = 'destination-out';
        _0x4bac07['fillStyle'] = 'rgba(0,0,0,1)';
        const _0x347a94 = _0x2813fd['polygon'];
        _0x4bac07['beginPath']();
        _0x4bac07['moveTo'](_0x347a94[0x0] - _0x341ff5, _0x347a94[0x1] - _0x166499);
        for (let _0x1f8ec5 = 0x2; _0x1f8ec5 < _0x347a94['length']; _0x1f8ec5 += 0x2) {
            _0x4bac07['lineTo'](_0x347a94[_0x1f8ec5] - _0x341ff5, _0x347a94[_0x1f8ec5 + 0x1] - _0x166499);
        }
        _0x4bac07['closePath']();
        _0x4bac07['fill']();
        _0x4bac07['globalCompositeOperation'] = 'source-over';
    }
    _0x4cc92e['drawImage'](_0x3e20fa, 0x0, 0x0);
}
function _0x19cc06(_0x1e6475) {
    let _0x56121b = 0x0, _0x1fe8d2 = 0x0;
    const _0x197a80 = _0x4c9809['INPUTS']['mouseX'] / _0x4c9809['SYSTEM']['viewScale'];
    const _0x4277f7 = _0x4c9809['INPUTS']['mouseY'] / _0x4c9809['SYSTEM']['viewScale'];
    const _0x59e1de = _0x2974aa['x'] - _0x4c9809['CAMERA']['x'] + _0x2974aa['width'] / 0x2;
    const _0x4fd933 = _0x2974aa['y'] - _0x4c9809['CAMERA']['y'] + _0x2974aa['height'] / 0x2;
    const _0x5c9ac1 = Math['atan2'](_0x4277f7 - _0x4fd933, _0x197a80 - _0x59e1de);
    if (_0xec123e !== 0x0 || _0x190da5 !== 0x0) {
        _0x56121b = _0xec123e;
        _0x1fe8d2 = _0x190da5;
    } else if (_0x42f09d) {
        let _0x374cc6 = 0x0, _0x2b58b7 = 0x0;
        if (_0x4c9809['INPUTS']['keys']['w'] || _0x4c9809['INPUTS']['keys']['arrowup'])
            _0x374cc6 += 0x1;
        if (_0x4c9809['INPUTS']['keys']['s'] || _0x4c9809['INPUTS']['keys']['arrowdown'])
            _0x374cc6 -= 0x1;
        if (_0x4c9809['INPUTS']['keys']['d'] || _0x4c9809['INPUTS']['keys']['arrowright'])
            _0x2b58b7 += 0x1;
        if (_0x4c9809['INPUTS']['keys']['a'] || _0x4c9809['INPUTS']['keys']['arrowleft'])
            _0x2b58b7 -= 0x1;
        if (_0x374cc6 !== 0x0 || _0x2b58b7 !== 0x0) {
            const _0x4c28d0 = _0x5c9ac1 + Math['atan2'](_0x2b58b7, _0x374cc6);
            _0x56121b = Math['cos'](_0x4c28d0);
            _0x1fe8d2 = Math['sin'](_0x4c28d0);
        }
    } else {
        if (_0x4c9809['INPUTS']['keys']['w'] || _0x4c9809['INPUTS']['keys']['arrowup'])
            _0x1fe8d2 -= 0x1;
        if (_0x4c9809['INPUTS']['keys']['s'] || _0x4c9809['INPUTS']['keys']['arrowdown'])
            _0x1fe8d2 += 0x1;
        if (_0x4c9809['INPUTS']['keys']['a'] || _0x4c9809['INPUTS']['keys']['arrowleft'])
            _0x56121b -= 0x1;
        if (_0x4c9809['INPUTS']['keys']['d'] || _0x4c9809['INPUTS']['keys']['arrowright'])
            _0x56121b += 0x1;
        const _0x203f57 = _0x56121b !== 0x0 || _0x1fe8d2 !== 0x0;
        if (_0x203f57) {
            const _0x129ac6 = Math['sqrt'](_0x56121b * _0x56121b + _0x1fe8d2 * _0x1fe8d2);
            _0x56121b /= _0x129ac6;
            _0x1fe8d2 /= _0x129ac6;
        }
    }
    if (_0x4c9809['GAME_STATE'] === 'NIGHT' && (_0x2d2651 === 'Skinwalker' || _0x2d2651 === 'Blackmailer')) {
        if (_0x4c9809['NIGHT_ABILITY_OPEN'] || !_0x4c9809['CURRENT_TARGET']) {
            _0x56121b = 0x0;
            _0x1fe8d2 = 0x0;
            _0x2974aa['vx'] = 0x0;
            _0x2974aa['vy'] = 0x0;
            _0x2974aa['x'] = _0x4c9809['MAP']['columns'] * _0x4c9809['MAP']['tileSize'] / 0x2 - _0x2974aa['width'] / 0x2;
            _0x2974aa['y'] = _0x4c9809['MAP']['rows'] * _0x4c9809['MAP']['tileSize'] / 0x2 - _0x2974aa['height'] / 0x2;
        }
    }
    const _0x28d9c0 = _0x56121b !== 0x0 || _0x1fe8d2 !== 0x0;
    const _0x34a1f6 = (_0x4c9809['INPUTS']['keys']['shift'] || _0x19b352 || _0x574e4f) && _0x28d9c0;
    _0x2974aa['bopTimer'] = _0x34a1f6 ? _0x2974aa['bopTimer'] + _0x1e6475 : 0x0;
    _0x2974aa['scale'] = 0x1 + (_0x2974aa['bopTimer'] > 0x0 ? Math['sin'](_0x2974aa['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0xbec525 = Math['pow'](0.001, _0x1e6475);
    const _0x19823b = _0x34a1f6 ? 0x74a : 0x5d5;
    _0x2974aa['vx'] += _0x56121b * _0x19823b * _0x1e6475;
    _0x2974aa['vy'] += _0x1fe8d2 * _0x19823b * _0x1e6475;
    _0x2974aa['vx'] *= _0xbec525;
    _0x2974aa['vy'] *= _0xbec525;
    _0x2974aa['x'] += _0x2974aa['vx'] * _0x1e6475;
    _0x2974aa['y'] += _0x2974aa['vy'] * _0x1e6475;
    for (let _0x1b49a0 = 0x0; _0x1b49a0 < 0x3; _0x1b49a0++)
        _0x47d771();
    for (let _0x1ebea2 = 0x0; _0x1ebea2 < 0x2; _0x1ebea2++)
        _0x558f42();
    for (let _0x1c09bd = 0x0; _0x1c09bd < 0x2; _0x1c09bd++)
        _0x581cd8();
    if (_0x2974aa['x'] < 0x0)
        _0x2974aa['x'] = 0x0;
    if (_0x2974aa['y'] < 0x0)
        _0x2974aa['y'] = 0x0;
    if (_0x2974aa['x'] + _0x2974aa['width'] > _0x4c9809['MAP']['columns'] * _0x4c9809['MAP']['tileSize'])
        _0x2974aa['x'] = _0x4c9809['MAP']['columns'] * _0x4c9809['MAP']['tileSize'] - _0x2974aa['width'];
    if (_0x2974aa['y'] + _0x2974aa['height'] > _0x4c9809['MAP']['rows'] * _0x4c9809['MAP']['tileSize'])
        _0x2974aa['y'] = _0x4c9809['MAP']['rows'] * _0x4c9809['MAP']['tileSize'] - _0x2974aa['height'];
    if (_0x54b77c) {
        _0x2974aa['angle'] = _0x4598b8 + Math['PI'] / 0x2;
    } else if (_0xec123e !== 0x0 || _0x190da5 !== 0x0) {
        _0x2974aa['angle'] = Math['atan2'](_0x190da5, _0xec123e) + Math['PI'] / 0x2;
    } else if (!_0x2e6d79) {
        _0x2974aa['angle'] = _0x5c9ac1 + Math['PI'] / 0x2;
    }
    const _0x2c4a30 = _0x2974aa['x'] + _0x2974aa['width'] / 0x2 - _0x4c9809['CAMERA']['width'] / 0x2;
    const _0x35fccf = _0x2974aa['y'] + _0x2974aa['height'] / 0x2 - _0x4c9809['CAMERA']['height'] / 0x2;
    if (_0x4c9809['CAMERA']['x'] === null || isNaN(_0x4c9809['CAMERA']['x']) || !isFinite(_0x4c9809['CAMERA']['x'])) {
        _0x4c9809['CAMERA']['x'] = _0x2c4a30;
        _0x4c9809['CAMERA']['y'] = _0x35fccf;
    } else {
        const _0x156d7c = 0x1 - Math['exp'](-Math['max'](0x0, _0x1e6475) * 0x28);
        _0x4c9809['CAMERA']['x'] += (_0x2c4a30 - _0x4c9809['CAMERA']['x']) * _0x156d7c;
        _0x4c9809['CAMERA']['y'] += (_0x35fccf - _0x4c9809['CAMERA']['y']) * _0x156d7c;
    }
    for (const _0x9b1ca5 in _0x52b337) {
        const _0x3ae12e = _0x52b337[_0x9b1ca5];
        if (_0x3ae12e['renderX'] === undefined) {
            _0x3ae12e['renderX'] = _0x3ae12e['x'];
            _0x3ae12e['renderY'] = _0x3ae12e['y'];
            _0x3ae12e['renderAngle'] = _0x3ae12e['angle'] || 0x0;
        }
        const _0xc48673 = _0x3ae12e['x'] + (_0x3ae12e['vx'] || 0x0) * _0x1e6475;
        const _0x3aabcf = _0x3ae12e['y'] + (_0x3ae12e['vy'] || 0x0) * _0x1e6475;
        _0x3ae12e['x'] = _0xc48673;
        _0x3ae12e['y'] = _0x3aabcf;
        const _0x36f827 = 0x1 - Math['exp'](-_0x1e6475 * 0x12);
        const _0x337130 = _0x3ae12e['x'] - _0x3ae12e['renderX'], _0x5ac2d5 = _0x3ae12e['y'] - _0x3ae12e['renderY'];
        const _0x3a344e = Math['sqrt'](_0x337130 * _0x337130 + _0x5ac2d5 * _0x5ac2d5);
        const _0x27b1ad = 0xc8;
        if (_0x3a344e > _0x27b1ad) {
            _0x3ae12e['renderX'] = _0x3ae12e['x'] - _0x337130 / _0x3a344e * _0x27b1ad;
            _0x3ae12e['renderY'] = _0x3ae12e['y'] - _0x5ac2d5 / _0x3a344e * _0x27b1ad;
        }
        _0x3ae12e['renderX'] += (_0x3ae12e['x'] - _0x3ae12e['renderX']) * _0x36f827;
        _0x3ae12e['renderY'] += (_0x3ae12e['y'] - _0x3ae12e['renderY']) * _0x36f827;
        let _0x379802 = (_0x3ae12e['angle'] || 0x0) - _0x3ae12e['renderAngle'];
        while (_0x379802 < -Math['PI'])
            _0x379802 += Math['PI'] * 0x2;
        while (_0x379802 > Math['PI'])
            _0x379802 -= Math['PI'] * 0x2;
        _0x3ae12e['renderAngle'] += _0x379802 * (0x1 - Math['exp'](-_0x1e6475 * 0x14));
    }
    if (_0x4c9809['GAME_STATE'] === 'NIGHT') {
        _0x2760e6 = Math['min'](0.6, _0x2760e6 + _0x1e6475 * 0.5);
    } else {
        _0x2760e6 = Math['max'](0x0, _0x2760e6 - _0x1e6475 * 0.5);
    }
    if (_0xfc00b5 > 0x0) {
        if (performance['now']() > _0x13c080) {
            _0xfc00b5 = Math['max'](0x0, _0xfc00b5 - _0x1e6475 * 0x2);
        }
    }
    _0x4f329b();
    _0x48aa92();
}
function _0x5234da(_0x120954, _0x3020d2, _0x290074, _0x15dd64, _0x105011 = !![]) {
    _0x120954['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x4be867 = _0x120954['measureText'](_0x3020d2)['width'];
    const _0xaf25ca = _0x4be867 + 0x18;
    const _0x54a321 = 0x1c;
    _0x120954['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x120954['beginPath']();
    if (_0x120954['roundRect']) {
        _0x120954['roundRect'](_0x290074 - _0xaf25ca / 0x2, _0x15dd64 - _0x54a321, _0xaf25ca, _0x54a321, 0x6);
    } else {
        _0x120954['rect'](_0x290074 - _0xaf25ca / 0x2, _0x15dd64 - _0x54a321, _0xaf25ca, _0x54a321);
    }
    _0x120954['fill']();
    if (_0x105011) {
        _0x120954['beginPath']();
        _0x120954['moveTo'](_0x290074 - 0x6, _0x15dd64);
        _0x120954['lineTo'](_0x290074 + 0x6, _0x15dd64);
        _0x120954['lineTo'](_0x290074, _0x15dd64 + 0x6);
        _0x120954['fill']();
    }
    _0x120954['fillStyle'] = '#ffffff';
    _0x120954['textAlign'] = 'center';
    _0x120954['textBaseline'] = 'middle';
    _0x120954['fillText'](_0x3020d2, _0x290074, _0x15dd64 - _0x54a321 / 0x2 + 0x1);
}
function _0x4ae199(_0xb7ffdd, _0x30cd85, _0x53d9b1, _0x49fe97) {
    if (!_0x30cd85 || _0x30cd85['length'] === 0x0)
        return;
    let _0x2a9a13 = _0x49fe97;
    for (let _0x2596a2 = 0x0; _0x2596a2 < _0x30cd85['length']; _0x2596a2++) {
        _0x5234da(_0xb7ffdd, _0x30cd85[_0x2596a2]['text'], _0x53d9b1, _0x2a9a13, _0x2596a2 === 0x0);
        _0x2a9a13 -= 0x24;
    }
}
function _0x2f730f() {
    if (!_0x4c9809['SYSTEM']['isReady'])
        return;
    if (_0x4c9809['MAP']['layers'] && _0x4c9809['MAP']['layers']['length'] > 0x0 && _0x1bab2e['complete'] && _0x1bab2e['naturalWidth'] > 0x0) {
        if (!_0x4c9809['MAP']['_prerenderedWithTileset'] || !_0x4c9809['MAP']['bgChunks'] || _0x4c9809['MAP']['bgChunks']['length'] === 0x0) {
            _0x367632();
        }
    }
    if (!_0x4c9809['MAP']['bgChunks'] || _0x4c9809['MAP']['bgChunks']['length'] === 0x0 || !_0x4c9809['MAP']['bgChunks'][0x0] || _0x4c9809['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x4cb236['fillStyle'] = '#000000';
    _0x4cb236['fillRect'](0x0, 0x0, _0x2684ef['width'], _0x2684ef['height']);
    _0x4cb236['save']();
    try {
        _0x4cb236['scale'](_0x4c9809['SYSTEM']['viewScale'], _0x4c9809['SYSTEM']['viewScale']);
        _0x4cb236['imageSmoothingEnabled'] = ![];
        const _0x2d11f1 = Math['floor'](_0x4c9809['CAMERA']['x'] || 0x0);
        const _0x1bf3c8 = Math['floor'](_0x4c9809['CAMERA']['y'] || 0x0);
        const _0x2b7657 = Math['max'](0x0, Math['floor'](_0x2d11f1 / _0x4c9809['MAP']['chunkSize']));
        const _0x35370f = Math['min'](_0x4c9809['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x2d11f1 + _0x4c9809['CAMERA']['width']) / _0x4c9809['MAP']['chunkSize']));
        const _0xd61775 = Math['max'](0x0, Math['floor'](_0x1bf3c8 / _0x4c9809['MAP']['chunkSize']));
        const _0x2034af = Math['min'](_0x4c9809['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x1bf3c8 + _0x4c9809['CAMERA']['height']) / _0x4c9809['MAP']['chunkSize']));
        for (let _0x18b576 = _0xd61775; _0x18b576 <= _0x2034af; _0x18b576++)
            for (let _0x38c539 = _0x2b7657; _0x38c539 <= _0x35370f; _0x38c539++) {
                const _0x1d863f = _0x38c539 * _0x4c9809['MAP']['chunkSize'] - _0x2d11f1;
                const _0x4a74ce = _0x18b576 * _0x4c9809['MAP']['chunkSize'] - _0x1bf3c8;
                _0x4cb236['drawImage'](_0x4c9809['MAP']['bgChunks'][_0x18b576][_0x38c539], _0x1d863f, _0x4a74ce, _0x4c9809['MAP']['chunkSize'] + 0x1, _0x4c9809['MAP']['chunkSize'] + 0x1);
            }
        const _0x2745f7 = _0x3edc06('assets/blood\x20splatter.png');
        if (_0xa59685 && _0xa59685['length'] > 0x0) {
            for (const _0x4f7990 of _0xa59685) {
                const _0x16ce9b = _0x4f7990['x'] - _0x2d11f1;
                const _0x383238 = _0x4f7990['y'] - _0x1bf3c8;
                if (_0x2745f7['complete'] && _0x2745f7['naturalWidth'] > 0x0) {
                    _0x4cb236['drawImage'](_0x2745f7, _0x16ce9b - 0x20, _0x383238 - 0x20, 0x40, 0x40);
                } else {
                    _0x4cb236['fillStyle'] = 'rgba(160,\x200,\x200,\x200.75)';
                    _0x4cb236['beginPath']();
                    _0x4cb236['arc'](_0x16ce9b, _0x383238, 0x16, 0x0, Math['PI'] * 0x2);
                    _0x4cb236['fill']();
                }
            }
        }
        const _0x3f2641 = _0x3edc06('assets/blood.png');
        if (_0x133132 && _0x133132['length'] > 0x0) {
            for (const _0x24d715 of _0x133132) {
                const _0x57d09b = _0x24d715['x'] - _0x2d11f1;
                const _0x340aeb = _0x24d715['y'] - _0x1bf3c8;
                if (_0x3f2641['complete'] && _0x3f2641['naturalWidth'] > 0x0) {
                    _0x4cb236['drawImage'](_0x3f2641, _0x57d09b - 0xc, _0x340aeb - 0xc, 0x18, 0x18);
                } else {
                    _0x4cb236['fillStyle'] = 'rgba(180,\x200,\x200,\x200.8)';
                    _0x4cb236['beginPath']();
                    _0x4cb236['arc'](_0x57d09b, _0x340aeb, 0x5, 0x0, Math['PI'] * 0x2);
                    _0x4cb236['fill']();
                }
            }
        }
        if (_0x260596['complete'] && _0x260596['naturalWidth'] > 0x0) {
            const _0x4fa090 = _0x4c9809['MAP']['tileSize'];
            const _0x35b0a5 = _0x4fa090 * 0xa;
            const _0x40b194 = _0x4c9809['MAP']['columns'] / 0x2 * _0x4fa090 - _0x35b0a5 / 0x2 - _0x2d11f1;
            const _0x1e87b3 = _0x4c9809['MAP']['rows'] / 0x2 * _0x4fa090 - _0x35b0a5 / 0x2 - _0x1bf3c8;
            _0x4cb236['imageSmoothingEnabled'] = ![];
            _0x4cb236['drawImage'](_0x260596, _0x40b194, _0x1e87b3, _0x35b0a5, _0x35b0a5);
        }
        if (_0x16639d['complete'] && _0x16639d['naturalWidth'] > 0x0) {
            _0x4c9809['ENTITIES']['forEach'](_0x618dae => {
                if (_0x618dae['type'] !== 'table')
                    return;
                _0x4cb236['save']();
                _0x4cb236['imageSmoothingEnabled'] = ![];
                const _0x551cee = _0x16639d['naturalWidth'] >= _0x16639d['naturalHeight'];
                const _0xbc004 = _0x618dae['w'] >= _0x618dae['h'];
                if (_0x551cee === _0xbc004) {
                    _0x4cb236['drawImage'](_0x16639d, _0x618dae['x'] - _0x2d11f1, _0x618dae['y'] - _0x1bf3c8, _0x618dae['w'], _0x618dae['h']);
                } else {
                    _0x4cb236['translate'](_0x618dae['x'] - _0x2d11f1 + _0x618dae['w'] / 0x2, _0x618dae['y'] - _0x1bf3c8 + _0x618dae['h'] / 0x2);
                    _0x4cb236['rotate'](Math['PI'] / 0x2);
                    _0x4cb236['drawImage'](_0x16639d, -_0x618dae['h'] / 0x2, -_0x618dae['w'] / 0x2, _0x618dae['h'], _0x618dae['w']);
                }
                _0x4cb236['restore']();
            });
        } else {
            _0x4c9809['ENTITIES']['forEach'](_0x860d55 => {
                if (_0x860d55['type'] !== 'table')
                    return;
                _0x4cb236['save']();
                _0x4cb236['fillStyle'] = '#6b4423';
                _0x4cb236['fillRect'](_0x860d55['x'] - _0x2d11f1, _0x860d55['y'] - _0x1bf3c8, _0x860d55['w'], _0x860d55['h']);
                _0x4cb236['strokeStyle'] = '#422810';
                _0x4cb236['lineWidth'] = 0x3;
                _0x4cb236['strokeRect'](_0x860d55['x'] - _0x2d11f1 + 0x1, _0x860d55['y'] - _0x1bf3c8 + 0x1, _0x860d55['w'] - 0x2, _0x860d55['h'] - 0x2);
                _0x4cb236['fillStyle'] = '#82532a';
                _0x4cb236['fillRect'](_0x860d55['x'] - _0x2d11f1 + 0x4, _0x860d55['y'] - _0x1bf3c8 + 0x4, _0x860d55['w'] - 0x8, _0x860d55['h'] - 0x8);
                _0x4cb236['restore']();
            });
        }
        if (_0x504f49) {
            if (_0x4c9809['MAP']['wallChunks'] && _0x4c9809['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x149e04 = _0xd61775; _0x149e04 <= _0x2034af; _0x149e04++) {
                    for (let _0x5c17e7 = _0x2b7657; _0x5c17e7 <= _0x35370f; _0x5c17e7++) {
                        if (!_0x4c9809['MAP']['wallChunks'][_0x149e04] || !_0x4c9809['MAP']['wallChunks'][_0x149e04][_0x5c17e7])
                            continue;
                        const _0x1c8ebd = _0x5c17e7 * _0x4c9809['MAP']['chunkSize'] - _0x2d11f1;
                        const _0xafca94 = _0x149e04 * _0x4c9809['MAP']['chunkSize'] - _0x1bf3c8;
                        _0x4cb236['drawImage'](_0x4c9809['MAP']['wallChunks'][_0x149e04][_0x5c17e7], _0x1c8ebd, _0xafca94, _0x4c9809['MAP']['chunkSize'] + 0x1, _0x4c9809['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x4bd3dd = _0xd61775; _0x4bd3dd <= _0x2034af; _0x4bd3dd++) {
                for (let _0x5bce34 = _0x2b7657; _0x5bce34 <= _0x35370f; _0x5bce34++) {
                    const _0x5bb4ea = _0x5bce34 * _0x4c9809['MAP']['chunkSize'] - _0x2d11f1;
                    const _0x451bb9 = _0x4bd3dd * _0x4c9809['MAP']['chunkSize'] - _0x1bf3c8;
                    _0x4cb236['drawImage'](_0x4c9809['MAP']['fgChunks'][_0x4bd3dd][_0x5bce34], _0x5bb4ea, _0x451bb9, _0x4c9809['MAP']['chunkSize'] + 0x1, _0x4c9809['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x44cca1 = _0x4c9809['GAME_STATE'] === 'NIGHT' && (_0x2d2651 === 'Skinwalker' || _0x2d2651 === 'Blackmailer') && !_0x2974aa['isDead'];
        const _0x1ea345 = _0x2974aa['x'] - _0x2d11f1 + _0x2974aa['width'] / 0x2;
        const _0x185df = _0x2974aa['y'] - _0x1bf3c8 + _0x2974aa['height'] / 0x2;
        const _0x1d76af = _0x2974aa['width'] * _0x2974aa['scale'] * 1.3;
        const _0x5cf07e = _0x2974aa['height'] * _0x2974aa['scale'] * 1.3;
        const _0x3f84ef = _0x3edc06('assets/arrow.png');
        const _0x69f56b = _0x3edc06('assets/tape.png');
        for (const _0x2a3269 in _0x52b337) {
            const _0x17d7ce = _0x52b337[_0x2a3269];
            if (_0x17d7ce['isDead'])
                continue;
            const _0x538ea7 = parseInt(_0x2a3269);
            const _0x24f4ab = (_0x17d7ce['renderX'] ?? _0x17d7ce['x']) - _0x2d11f1 + _0x17d7ce['width'] / 0x2;
            const _0x106e30 = (_0x17d7ce['renderY'] ?? _0x17d7ce['y']) - _0x1bf3c8 + _0x17d7ce['height'] / 0x2;
            const _0x5469cf = Math['min'](0x2, Math['max'](0.3, _0x17d7ce['scale'] || 0x1));
            const _0x3d479c = _0x17d7ce['width'] * _0x5469cf * 1.3;
            const _0x56842d = _0x17d7ce['height'] * _0x5469cf * 1.3;
            _0x4cb236['save']();
            try {
                _0x4cb236['translate'](_0x24f4ab, _0x106e30);
                _0x4cb236['rotate'](_0x17d7ce['renderAngle'] ?? 0x0);
                if (_0x17d7ce['isDark'])
                    _0x4cb236['filter'] = 'brightness(0)';
                _0x3c648d(_0x4cb236, _0x17d7ce['body'], _0x17d7ce['eyes'], _0x3d479c, _0x56842d);
                if (_0x7b86f1['has'](_0x538ea7) && _0x36177d['complete'] && _0x36177d['naturalWidth'] > 0x0) {
                    _0x4cb236['drawImage'](_0x36177d, -_0x3d479c / 0x2, -_0x56842d / 0x2, _0x3d479c, _0x56842d);
                }
                if (_0x17d7ce['hasArrow'] && _0x4c9809['GAME_STATE'] === 'NIGHT' && _0x3f84ef['complete'] && _0x3f84ef['naturalWidth'] > 0x0) {
                    _0x4cb236['drawImage'](_0x3f84ef, -_0x3d479c / 0x2, -_0x56842d / 0x2, _0x3d479c, _0x56842d);
                }
                if ((_0x17d7ce['isBlackmailed'] || _0x31dd3c['has'](_0x538ea7)) && _0x69f56b['complete'] && _0x69f56b['naturalWidth'] > 0x0) {
                    _0x4cb236['drawImage'](_0x69f56b, -_0x3d479c / 0x2, -_0x56842d / 0x2, _0x3d479c, _0x56842d);
                }
                if (_0x17d7ce['isDark'])
                    _0x4cb236['filter'] = 'none';
            } finally {
                _0x4cb236['restore']();
            }
            if (!_0x269842((_0x17d7ce['renderX'] ?? _0x17d7ce['x']) + _0x17d7ce['width'] / 0x2, (_0x17d7ce['renderY'] ?? _0x17d7ce['y']) + _0x17d7ce['height'] / 0x2)) {
                _0x4cb236['textAlign'] = 'center';
                _0x4cb236['lineJoin'] = 'round';
                _0x4cb236['lineWidth'] = 0x3;
                _0x4cb236['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x4cb236['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x33a826 = '#ffffff';
                if (_0x17d7ce['isBlackmailed'] || _0x31dd3c['has'](_0x538ea7)) {
                    _0x33a826 = '#ff4444';
                } else if (_0x7b86f1['has'](_0x538ea7)) {
                    _0x33a826 = '#cc88ff';
                }
                _0x4cb236['fillStyle'] = _0x33a826;
                const _0x19897b = _0x17d7ce['isDark'] ? '???' : _0x17d7ce['name'] + (_0x17d7ce['isOwner'] ? '\x20[🗝️]' : '');
                _0x4cb236['strokeText'](_0x19897b, _0x24f4ab, _0x106e30 - _0x56842d / 0x2 - 0x10);
                _0x4cb236['fillText'](_0x19897b, _0x24f4ab, _0x106e30 - _0x56842d / 0x2 - 0x10);
            }
        }
        if (!_0x2974aa['isDead']) {
            _0x4cb236['save']();
            try {
                _0x4cb236['translate'](_0x1ea345, _0x185df);
                _0x4cb236['rotate'](_0x2974aa['angle']);
                if (_0x44cca1)
                    _0x4cb236['filter'] = 'brightness(0)';
                _0x3c648d(_0x4cb236, _0x27f41d, _0x173b31, _0x1d76af, _0x5cf07e);
                if (_0x7b86f1['has'](_0x16badb) && _0x36177d['complete'] && _0x36177d['naturalWidth'] > 0x0) {
                    _0x4cb236['drawImage'](_0x36177d, -_0x1d76af / 0x2, -_0x5cf07e / 0x2, _0x1d76af, _0x5cf07e);
                }
                if (_0x2974aa['hasArrow'] && _0x4c9809['GAME_STATE'] === 'NIGHT' && _0x3f84ef['complete'] && _0x3f84ef['naturalWidth'] > 0x0) {
                    _0x4cb236['drawImage'](_0x3f84ef, -_0x1d76af / 0x2, -_0x5cf07e / 0x2, _0x1d76af, _0x5cf07e);
                }
                if (_0x31dd3c['has'](_0x16badb) && _0x69f56b['complete'] && _0x69f56b['naturalWidth'] > 0x0) {
                    _0x4cb236['drawImage'](_0x69f56b, -_0x1d76af / 0x2, -_0x5cf07e / 0x2, _0x1d76af, _0x5cf07e);
                }
                if (_0x44cca1)
                    _0x4cb236['filter'] = 'none';
            } finally {
                _0x4cb236['restore']();
            }
            if (!_0x269842(_0x2974aa['x'] + _0x2974aa['width'] / 0x2, _0x2974aa['y'] + _0x2974aa['height'] / 0x2)) {
                _0x4cb236['textAlign'] = 'center';
                _0x4cb236['lineJoin'] = 'round';
                _0x4cb236['lineWidth'] = 0x3;
                _0x4cb236['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x4cb236['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x597335 = '#ffffff';
                if (_0x31dd3c['has'](_0x16badb)) {
                    _0x597335 = '#ff4444';
                } else if (_0x7b86f1['has'](_0x16badb)) {
                    _0x597335 = '#cc88ff';
                }
                _0x4cb236['fillStyle'] = _0x597335;
                const _0x4a22b6 = _0x44cca1 ? '???' : _0x2adc50 + (_0x1ce262 ? '\x20[🗝️]' : '');
                _0x4cb236['strokeText'](_0x4a22b6, _0x1ea345, _0x185df - _0x5cf07e / 0x2 - 0x10);
                _0x4cb236['fillText'](_0x4a22b6, _0x1ea345, _0x185df - _0x5cf07e / 0x2 - 0x10);
            }
        }
        if (_0x4c9809['MAP']['wallChunks'] && _0x4c9809['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x50c4b7 = _0xd61775; _0x50c4b7 <= _0x2034af; _0x50c4b7++)
                for (let _0x11c831 = _0x2b7657; _0x11c831 <= _0x35370f; _0x11c831++) {
                    if (!_0x4c9809['MAP']['wallChunks'][_0x50c4b7] || !_0x4c9809['MAP']['wallChunks'][_0x50c4b7][_0x11c831])
                        continue;
                    const _0x43bf3f = _0x11c831 * _0x4c9809['MAP']['chunkSize'] - _0x2d11f1;
                    const _0x1b821e = _0x50c4b7 * _0x4c9809['MAP']['chunkSize'] - _0x1bf3c8;
                    _0x4cb236['drawImage'](_0x4c9809['MAP']['wallChunks'][_0x50c4b7][_0x11c831], _0x43bf3f, _0x1b821e, _0x4c9809['MAP']['chunkSize'] + 0x1, _0x4c9809['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x31f0d7 of _0x4c9809['ENTITIES']) {
            if (_0x31f0d7['type'] !== 'npc')
                continue;
            const _0x42342a = _0x31f0d7['x'] - _0x2d11f1 + _0x31f0d7['w'] / 0x2;
            const _0xf9d204 = _0x31f0d7['y'] - _0x1bf3c8 + _0x31f0d7['h'] / 0x2;
            const _0x3133d = _0x31f0d7['w'];
            const _0x434f3f = _0x31f0d7['h'];
            _0x4cb236['save']();
            _0x4cb236['translate'](_0x42342a, _0xf9d204);
            _0x4cb236['rotate'](_0x31f0d7['angle'] !== undefined ? _0x31f0d7['angle'] : 0x0);
            _0x3c648d(_0x4cb236, _0x31f0d7['body'] || 'yanito932.png', _0x31f0d7['eyes'], _0x3133d, _0x434f3f);
            _0x4cb236['restore']();
            _0x4cb236['textAlign'] = 'center';
            _0x4cb236['lineJoin'] = 'round';
            _0x4cb236['lineWidth'] = 0x3;
            _0x4cb236['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x4cb236['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
            _0x4cb236['fillStyle'] = '#aaaaaa';
            _0x4cb236['strokeText'](_0x31f0d7['name'] || 'NPC', _0x42342a, _0xf9d204 - _0x434f3f / 0x2 - 0x10);
            _0x4cb236['fillText'](_0x31f0d7['name'] || 'NPC', _0x42342a, _0xf9d204 - _0x434f3f / 0x2 - 0x10);
        }
        if (_0x2974aa['isDead']) {
            for (const _0x2ea3a5 in _0x52b337) {
                const _0x1c643e = _0x52b337[_0x2ea3a5];
                if (!_0x1c643e['isDead'])
                    continue;
                const _0x6de9fc = (_0x1c643e['renderX'] ?? _0x1c643e['x']) - _0x2d11f1 + _0x1c643e['width'] / 0x2;
                const _0x2162be = (_0x1c643e['renderY'] ?? _0x1c643e['y']) - _0x1bf3c8 + _0x1c643e['height'] / 0x2;
                const _0x2d3981 = _0x1c643e['width'] * (_0x1c643e['scale'] || 0x1) * 1.3;
                const _0x28c3b4 = _0x1c643e['height'] * (_0x1c643e['scale'] || 0x1) * 1.3;
                _0x4cb236['save']();
                try {
                    _0x4cb236['translate'](_0x6de9fc, _0x2162be);
                    _0x4cb236['rotate'](_0x1c643e['renderAngle'] ?? 0x0);
                    _0x4cb236['globalAlpha'] = 0.3;
                    _0x3c648d(_0x4cb236, _0x1c643e['body'], _0x1c643e['eyes'], _0x2d3981, _0x28c3b4);
                } finally {
                    _0x4cb236['restore']();
                }
                if (!_0x269842((_0x1c643e['renderX'] ?? _0x1c643e['x']) + _0x1c643e['width'] / 0x2, (_0x1c643e['renderY'] ?? _0x1c643e['y']) + _0x1c643e['height'] / 0x2)) {
                    _0x4cb236['save']();
                    _0x4cb236['globalAlpha'] = 0.3;
                    _0x4cb236['textAlign'] = 'center';
                    _0x4cb236['lineJoin'] = 'round';
                    _0x4cb236['lineWidth'] = 0x3;
                    _0x4cb236['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x4cb236['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                    _0x4cb236['fillStyle'] = '#ffffff';
                    const _0x5d3445 = _0x1c643e['name'] + (_0x1c643e['isOwner'] ? '\x20[🗝️]' : '');
                    _0x4cb236['strokeText'](_0x5d3445, _0x6de9fc, _0x2162be - _0x28c3b4 / 0x2 - 0x10);
                    _0x4cb236['fillText'](_0x5d3445, _0x6de9fc, _0x2162be - _0x28c3b4 / 0x2 - 0x10);
                    _0x4cb236['restore']();
                }
            }
            _0x4cb236['save']();
            try {
                _0x4cb236['translate'](_0x1ea345, _0x185df);
                _0x4cb236['rotate'](_0x2974aa['angle']);
                _0x4cb236['globalAlpha'] = 0.3;
                _0x3c648d(_0x4cb236, _0x27f41d, _0x173b31, _0x1d76af, _0x5cf07e);
            } finally {
                _0x4cb236['restore']();
            }
            if (!_0x269842(_0x2974aa['x'] + _0x2974aa['width'] / 0x2, _0x2974aa['y'] + _0x2974aa['height'] / 0x2)) {
                _0x4cb236['save']();
                _0x4cb236['globalAlpha'] = 0.3;
                _0x4cb236['textAlign'] = 'center';
                _0x4cb236['lineJoin'] = 'round';
                _0x4cb236['lineWidth'] = 0x3;
                _0x4cb236['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x4cb236['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                _0x4cb236['fillStyle'] = '#ffffff';
                const _0x4ec27a = _0x2adc50 + (_0x1ce262 ? '\x20[🗝️]' : '');
                _0x4cb236['strokeText'](_0x4ec27a, _0x1ea345, _0x185df - _0x5cf07e / 0x2 - 0x10);
                _0x4cb236['fillText'](_0x4ec27a, _0x1ea345, _0x185df - _0x5cf07e / 0x2 - 0x10);
                _0x4cb236['restore']();
            }
        }
        for (let _0x269a82 = _0xd61775; _0x269a82 <= _0x2034af; _0x269a82++)
            for (let _0x439bcd = _0x2b7657; _0x439bcd <= _0x35370f; _0x439bcd++) {
                const _0x6fb272 = _0x439bcd * _0x4c9809['MAP']['chunkSize'] - _0x2d11f1;
                const _0x427a78 = _0x269a82 * _0x4c9809['MAP']['chunkSize'] - _0x1bf3c8;
                _0x4cb236['drawImage'](_0x4c9809['MAP']['fgChunks'][_0x269a82][_0x439bcd], _0x6fb272, _0x427a78, _0x4c9809['MAP']['chunkSize'] + 0x1, _0x4c9809['MAP']['chunkSize'] + 0x1);
            }
        if (_0x4c9809['EDITOR']['enabled'] && _0x4c9809['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x45b940 = _0x4c9809['INPUTS']['mouseX'] / _0x4c9809['SYSTEM']['viewScale'] + _0x4c9809['CAMERA']['x'];
            const _0x21c5d0 = _0x4c9809['INPUTS']['mouseY'] / _0x4c9809['SYSTEM']['viewScale'] + _0x4c9809['CAMERA']['y'];
            const _0x5610db = Math['floor'](_0x45b940 / _0x4c9809['MAP']['tileSize']);
            const _0x8bca32 = Math['floor'](_0x21c5d0 / _0x4c9809['MAP']['tileSize']);
            if (_0x5610db >= 0x0 && _0x5610db < _0x4c9809['MAP']['columns'] && _0x8bca32 >= 0x0 && _0x8bca32 < _0x4c9809['MAP']['rows']) {
                const _0x3d0969 = _0x5610db * _0x4c9809['MAP']['tileSize'] - _0x2d11f1;
                const _0x4cc302 = _0x8bca32 * _0x4c9809['MAP']['tileSize'] - _0x1bf3c8;
                _0x4cb236['save']();
                _0x4cb236['globalAlpha'] = 0.5;
                if (_0x4c9809['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x376114 = _0x4c9809['EDITOR']['selectedTileGid'] - 0x1;
                    _0x4cb236['drawImage'](_0x1bab2e, _0x376114 % _0x4c9809['MAP']['tilesetCols'] * _0x4c9809['MAP']['tileSize'], Math['floor'](_0x376114 / _0x4c9809['MAP']['tilesetCols']) * _0x4c9809['MAP']['tileSize'], _0x4c9809['MAP']['tileSize'], _0x4c9809['MAP']['tileSize'], _0x3d0969, _0x4cc302, _0x4c9809['MAP']['tileSize'], _0x4c9809['MAP']['tileSize']);
                } else {
                    _0x4cb236['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x4cb236['fillRect'](_0x3d0969, _0x4cc302, _0x4c9809['MAP']['tileSize'], _0x4c9809['MAP']['tileSize']);
                }
                _0x4cb236['restore']();
            }
        }
        _0x4ca932(_0x4cb236, _0x2d11f1, _0x1bf3c8);
        if (_0x2760e6 > 0x0) {
            _0x4cb236['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x2760e6 + ')';
            _0x4cb236['fillRect'](0x0, 0x0, _0x4c9809['CAMERA']['width'], _0x4c9809['CAMERA']['height']);
        }
        for (const _0x245316 in _0x52b337) {
            const _0x59f3bc = _0x52b337[_0x245316];
            if (_0x59f3bc['isDead'] && !_0x2974aa['isDead'])
                continue;
            const _0x51a4e7 = (_0x59f3bc['renderX'] ?? _0x59f3bc['x']) - _0x2d11f1 + _0x59f3bc['width'] / 0x2;
            const _0x1c3b06 = (_0x59f3bc['renderY'] ?? _0x59f3bc['y']) - _0x1bf3c8 + _0x59f3bc['height'] / 0x2;
            _0x4ae199(_0x4cb236, _0x59f3bc['chats'], _0x51a4e7, _0x1c3b06 - _0x59f3bc['height'] / 0x2 - 0x20);
        }
        _0x4ae199(_0x4cb236, _0x2974aa['chats'], _0x1ea345, _0x185df - _0x2974aa['height'] / 0x2 - 0x20);
        if (_0xfc00b5 > 0x0) {
            _0x4cb236['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0xfc00b5 + ')';
            _0x4cb236['fillRect'](0x0, 0x0, _0x4c9809['CAMERA']['width'], _0x4c9809['CAMERA']['height']);
        }
    } finally {
        _0x4cb236['restore']();
    }
}
function _0x3affd7(_0x14bdfd) {
    if (!_0x4c9809['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x3affd7);
    let _0x1a22fa = (_0x14bdfd - _0x4c9809['SYSTEM']['lastTime']) / 0x3e8;
    _0x4c9809['SYSTEM']['lastTime'] = _0x14bdfd;
    if (_0x1a22fa > 0.1)
        _0x1a22fa = 0.1;
    if (_0x1a22fa < 0x0 || isNaN(_0x1a22fa))
        _0x1a22fa = 0.016;
    if (_0x504f49) {
        _0x2114d0(_0x1a22fa);
        _0x2f730f();
        return;
    }
    if (!_0x16badb)
        return;
    _0x19cc06(_0x1a22fa);
    _0x4f250b['tick'](_0x14bdfd);
    _0x2f730f();
}
function _0x367632() {
    if (_0x1bab2e['complete'] && _0x1bab2e['naturalWidth'] > 0x0) {
        _0x4c9809['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0xe90998 = Math['ceil'](_0x4c9809['MAP']['columns'] * _0x4c9809['MAP']['tileSize'] / _0x4c9809['MAP']['chunkSize']);
    const _0x489138 = Math['ceil'](_0x4c9809['MAP']['rows'] * _0x4c9809['MAP']['tileSize'] / _0x4c9809['MAP']['chunkSize']);
    _0x4c9809['MAP']['bgChunks'] = [];
    _0x4c9809['MAP']['fgChunks'] = [];
    _0x4c9809['MAP']['wallChunks'] = [];
    for (let _0xbd275a = 0x0; _0xbd275a < _0x489138; _0xbd275a++) {
        _0x4c9809['MAP']['bgChunks'][_0xbd275a] = [];
        _0x4c9809['MAP']['fgChunks'][_0xbd275a] = [];
        _0x4c9809['MAP']['wallChunks'][_0xbd275a] = [];
        for (let _0x53f863 = 0x0; _0x53f863 < _0xe90998; _0x53f863++) {
            const _0x3a0a97 = document['createElement']('canvas');
            _0x3a0a97['width'] = _0x3a0a97['height'] = _0x4c9809['MAP']['chunkSize'];
            const _0x5a8d0d = document['createElement']('canvas');
            _0x5a8d0d['width'] = _0x5a8d0d['height'] = _0x4c9809['MAP']['chunkSize'];
            const _0x23336d = document['createElement']('canvas');
            _0x23336d['width'] = _0x23336d['height'] = _0x4c9809['MAP']['chunkSize'];
            _0x4c9809['MAP']['bgChunks'][_0xbd275a][_0x53f863] = _0x3a0a97;
            _0x4c9809['MAP']['fgChunks'][_0xbd275a][_0x53f863] = _0x5a8d0d;
            _0x4c9809['MAP']['wallChunks'][_0xbd275a][_0x53f863] = _0x23336d;
            _0x2a89ba(_0x53f863, _0xbd275a);
        }
    }
}
function _0x2a89ba(_0x29a808, _0x2dc419) {
    const _0x4e40cd = _0x4c9809['MAP']['bgChunks'][_0x2dc419][_0x29a808]['getContext']('2d', { 'alpha': !![] });
    const _0x568904 = _0x4c9809['MAP']['fgChunks'][_0x2dc419][_0x29a808]['getContext']('2d', { 'alpha': !![] });
    const _0xe2ac23 = _0x4c9809['MAP']['wallChunks'][_0x2dc419] && _0x4c9809['MAP']['wallChunks'][_0x2dc419][_0x29a808] ? _0x4c9809['MAP']['wallChunks'][_0x2dc419][_0x29a808]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x4e40cd['imageSmoothingEnabled'] = _0x568904['imageSmoothingEnabled'] = ![];
    if (_0xe2ac23)
        _0xe2ac23['imageSmoothingEnabled'] = ![];
    _0x4e40cd['clearRect'](0x0, 0x0, _0x4c9809['MAP']['chunkSize'], _0x4c9809['MAP']['chunkSize']);
    _0x568904['clearRect'](0x0, 0x0, _0x4c9809['MAP']['chunkSize'], _0x4c9809['MAP']['chunkSize']);
    if (_0xe2ac23)
        _0xe2ac23['clearRect'](0x0, 0x0, _0x4c9809['MAP']['chunkSize'], _0x4c9809['MAP']['chunkSize']);
    const _0x977275 = Math['floor'](_0x29a808 * _0x4c9809['MAP']['chunkSize'] / _0x4c9809['MAP']['tileSize']);
    const _0xd36706 = Math['ceil']((_0x29a808 + 0x1) * _0x4c9809['MAP']['chunkSize'] / _0x4c9809['MAP']['tileSize']);
    const _0x509ad4 = Math['floor'](_0x2dc419 * _0x4c9809['MAP']['chunkSize'] / _0x4c9809['MAP']['tileSize']);
    const _0x4ba32d = Math['ceil']((_0x2dc419 + 0x1) * _0x4c9809['MAP']['chunkSize'] / _0x4c9809['MAP']['tileSize']);
    const _0xfa4351 = 0.5;
    const _0x10a991 = _0x4c9809['MAP']['tileSize'] - _0xfa4351 * 0x2;
    _0x4c9809['MAP']['layers']['forEach'](_0x2386e5 => {
        const _0x2b3842 = _0x2386e5['name'] === 'walls';
        const _0x941eab = _0x2386e5['name'] === 'trees' ? _0x568904 : _0x2b3842 ? _0xe2ac23 || _0x4e40cd : _0x4e40cd;
        for (let _0x2d5adb = Math['max'](0x0, _0x509ad4); _0x2d5adb < Math['min'](_0x4c9809['MAP']['rows'], _0x4ba32d); _0x2d5adb++) {
            for (let _0x53a878 = Math['max'](0x0, _0x977275); _0x53a878 < Math['min'](_0x4c9809['MAP']['columns'], _0xd36706); _0x53a878++) {
                let _0x454f33 = _0x2386e5['data'][_0x2d5adb * _0x4c9809['MAP']['columns'] + _0x53a878];
                if (_0x2386e5['name'] === 'floor2' && _0x4c9809['MAP']['doors'] && _0x4c9809['MAP']['doors'][_0x2d5adb * _0x4c9809['MAP']['columns'] + _0x53a878]) {
                    _0x454f33 = 0x2;
                }
                if (_0x454f33 > 0x0) {
                    const _0x99ea50 = _0x454f33 - 0x1;
                    const _0x21ad74 = _0x99ea50 % _0x4c9809['MAP']['tilesetCols'] * _0x4c9809['MAP']['tileSize'] + _0xfa4351;
                    const _0x1b3239 = Math['floor'](_0x99ea50 / _0x4c9809['MAP']['tilesetCols']) * _0x4c9809['MAP']['tileSize'] + _0xfa4351;
                    const _0x1681e7 = _0x53a878 * _0x4c9809['MAP']['tileSize'] - _0x29a808 * _0x4c9809['MAP']['chunkSize'];
                    const _0x1f6c8d = _0x2d5adb * _0x4c9809['MAP']['tileSize'] - _0x2dc419 * _0x4c9809['MAP']['chunkSize'];
                    if (_0x454f33 === 0x4) {
                        const _0x4d53eb = 0x1;
                        const _0x472704 = _0x4d53eb % _0x4c9809['MAP']['tilesetCols'] * _0x4c9809['MAP']['tileSize'] + _0xfa4351;
                        const _0x5d1855 = Math['floor'](_0x4d53eb / _0x4c9809['MAP']['tilesetCols']) * _0x4c9809['MAP']['tileSize'] + _0xfa4351;
                        _0x4e40cd['drawImage'](_0x1bab2e, _0x472704, _0x5d1855, _0x10a991, _0x10a991, _0x1681e7, _0x1f6c8d, _0x4c9809['MAP']['tileSize'], _0x4c9809['MAP']['tileSize']);
                        let _0xa8ef85 = _0x4c9809['MAP']['doors'] ? _0x4c9809['MAP']['doors'][_0x2d5adb * _0x4c9809['MAP']['columns'] + _0x53a878] : null;
                        if (!_0xa8ef85) {
                            const _0x2c684a = _0x4c9809['MAP']['layers']['find'](_0x39a8bd => _0x39a8bd['name'] === 'walls');
                            const _0x1df733 = _0x2d5adb > 0x0 && _0x2c684a && _0x2c684a['data'][(_0x2d5adb - 0x1) * _0x4c9809['MAP']['columns'] + _0x53a878] > 0x0;
                            const _0x12d7c7 = _0x2d5adb < _0x4c9809['MAP']['rows'] - 0x1 && _0x2c684a && _0x2c684a['data'][(_0x2d5adb + 0x1) * _0x4c9809['MAP']['columns'] + _0x53a878] > 0x0;
                            const _0x58e7ab = _0x53a878 > 0x0 && _0x2c684a && _0x2c684a['data'][_0x2d5adb * _0x4c9809['MAP']['columns'] + _0x53a878 - 0x1] > 0x0;
                            const _0x47aa08 = _0x53a878 < _0x4c9809['MAP']['columns'] - 0x1 && _0x2c684a && _0x2c684a['data'][_0x2d5adb * _0x4c9809['MAP']['columns'] + _0x53a878 + 0x1] > 0x0;
                            if (_0x58e7ab && _0x47aa08)
                                _0xa8ef85 = _0x2d5adb < _0x4c9809['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x1df733 && _0x12d7c7)
                                _0xa8ef85 = _0x53a878 < _0x4c9809['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x3ca539 = 0x0;
                        if (_0xa8ef85 === 'bottom')
                            _0x3ca539 = Math['PI'] / 0x2;
                        else if (_0xa8ef85 === 'left')
                            _0x3ca539 = Math['PI'];
                        else if (_0xa8ef85 === 'top')
                            _0x3ca539 = -Math['PI'] / 0x2;
                        else if (_0xa8ef85 === 'right')
                            _0x3ca539 = 0x0;
                        if (_0x3ca539 !== 0x0) {
                            _0x941eab['save']();
                            _0x941eab['translate'](_0x1681e7 + _0x4c9809['MAP']['tileSize'] / 0x2, _0x1f6c8d + _0x4c9809['MAP']['tileSize'] / 0x2);
                            _0x941eab['rotate'](_0x3ca539);
                            _0x941eab['drawImage'](_0x1bab2e, _0x21ad74, _0x1b3239, _0x10a991, _0x10a991, -_0x4c9809['MAP']['tileSize'] / 0x2, -_0x4c9809['MAP']['tileSize'] / 0x2, _0x4c9809['MAP']['tileSize'], _0x4c9809['MAP']['tileSize']);
                            _0x941eab['restore']();
                        } else {
                            _0x941eab['drawImage'](_0x1bab2e, _0x21ad74, _0x1b3239, _0x10a991, _0x10a991, _0x1681e7, _0x1f6c8d, _0x4c9809['MAP']['tileSize'], _0x4c9809['MAP']['tileSize']);
                        }
                    } else {
                        _0x941eab['drawImage'](_0x1bab2e, _0x21ad74, _0x1b3239, _0x10a991, _0x10a991, _0x1681e7, _0x1f6c8d, _0x4c9809['MAP']['tileSize'], _0x4c9809['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x1dca83() {
    _0x1bab2e['crossOrigin'] = 'Anonymous';
    _0x1bab2e['onload'] = () => {
        _0x4c9809['MAP']['tilesetCols'] = 0x3;
        if (_0x4c9809['MAP']['columns'] > 0x0 && _0x4c9809['MAP']['layers'] && _0x4c9809['MAP']['layers']['length'] > 0x0) {
            _0x367632();
        }
        _0x190ed6();
    };
    _0x1bab2e['onerror'] = () => {
        _0x4c9809['MAP']['tilesetCols'] = 0x1;
        _0x190ed6();
    };
    _0x1bab2e['src'] = 'assets/tilesheet.png';
    _0x260596['crossOrigin'] = 'Anonymous';
    _0x260596['onload'] = _0x190ed6;
    _0x260596['onerror'] = () => {
        _0x190ed6();
    };
    _0x260596['src'] = 'assets/center.png';
    _0x16639d['crossOrigin'] = 'Anonymous';
    _0x16639d['onload'] = _0x190ed6;
    _0x16639d['onerror'] = () => {
        _0x190ed6();
    };
    _0x16639d['src'] = 'assets/table.png';
}
function _0x190ed6() {
    _0x4c9809['SYSTEM']['assetsLoaded']++;
    if (_0x4c9809['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x4c9809['MAP']['columns'] > 0x0 && _0x4c9809['MAP']['layers'] && _0x4c9809['MAP']['layers']['length'] > 0x0) {
            _0x367632();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x2b6837();
    }
}
function _0x11ba08(_0x434778, _0x59e914) {
    if (!_0x1ce262 || !_0x3deee7)
        return;
    const _0x551691 = _0x434778 / _0x4c9809['SYSTEM']['viewScale'] + _0x4c9809['CAMERA']['x'];
    const _0xeb8d7c = _0x59e914 / _0x4c9809['SYSTEM']['viewScale'] + _0x4c9809['CAMERA']['y'];
    const _0x9122 = Math['floor'](_0x551691 / _0x4c9809['MAP']['tileSize']);
    const _0x12eaa = Math['floor'](_0xeb8d7c / _0x4c9809['MAP']['tileSize']);
    if (_0x9122 >= 0x0 && _0x9122 < _0x4c9809['MAP']['columns'] && _0x12eaa >= 0x0 && _0x12eaa < _0x4c9809['MAP']['rows'])
        _0x3deee7['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x4c9809['EDITOR']['selectedLayer'],
            'col': _0x9122,
            'row': _0x12eaa,
            'gid': _0x4c9809['EDITOR']['selectedTileGid']
        }));
}
function _0x23de70() {
    const _0x3ed883 = document['getElementById']('palette');
    if (!_0x3ed883 || _0x3ed883['children']['length'] > 0x0)
        return;
    const _0x3943b3 = 0x40;
    const _0x4a0c6c = _0x1bab2e;
    const _0x36de53 = document['createElement']('div');
    _0x36de53['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x3a6f8a = document['createElement']('canvas');
    _0x3a6f8a['width'] = 0xc0;
    _0x3a6f8a['height'] = 0xa0;
    _0x3a6f8a['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x36de53['appendChild'](_0x3a6f8a);
    const _0x5dd377 = document['createElement']('div');
    _0x5dd377['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x36de53['appendChild'](_0x5dd377);
    let _0x6c7462 = 0x0, _0x13487a = 0x0;
    let _0x426f1b = ![], _0x2b39e9 = 0x0, _0x31a2a6 = 0x0, _0x41368a = 0x0, _0x2548a1 = 0x0;
    function _0x11c76d() {
        const _0x546214 = _0x3a6f8a['getContext']('2d');
        _0x546214['clearRect'](0x0, 0x0, _0x3a6f8a['width'], _0x3a6f8a['height']);
        _0x546214['imageSmoothingEnabled'] = ![];
        if (_0x4a0c6c['complete'] && _0x4a0c6c['naturalWidth'] > 0x0) {
            _0x546214['drawImage'](_0x4a0c6c, _0x6c7462, _0x13487a, _0x3a6f8a['width'], _0x3a6f8a['height'], 0x0, 0x0, _0x3a6f8a['width'], _0x3a6f8a['height']);
        }
        _0x546214['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x546214['lineWidth'] = 0x1;
        const _0x5268c8 = Math['floor'](_0x6c7462 / _0x3943b3);
        const _0x6f934b = Math['floor'](_0x13487a / _0x3943b3);
        for (let _0xa09279 = _0x5268c8; _0xa09279 <= _0x5268c8 + Math['ceil'](_0x3a6f8a['width'] / _0x3943b3) + 0x1; _0xa09279++) {
            const _0x430c57 = _0xa09279 * _0x3943b3 - _0x6c7462;
            _0x546214['beginPath']();
            _0x546214['moveTo'](_0x430c57, 0x0);
            _0x546214['lineTo'](_0x430c57, _0x3a6f8a['height']);
            _0x546214['stroke']();
        }
        for (let _0x3225be = _0x6f934b; _0x3225be <= _0x6f934b + Math['ceil'](_0x3a6f8a['height'] / _0x3943b3) + 0x1; _0x3225be++) {
            const _0xc514cf = _0x3225be * _0x3943b3 - _0x13487a;
            _0x546214['beginPath']();
            _0x546214['moveTo'](0x0, _0xc514cf);
            _0x546214['lineTo'](_0x3a6f8a['width'], _0xc514cf);
            _0x546214['stroke']();
        }
    }
    function _0x2e0565() {
        const _0x371882 = Math['max'](0x1, Math['ceil'](_0x4a0c6c['naturalWidth'] / _0x3943b3));
        const _0x528e4b = _0x4c9809['EDITOR']['selectedTileGid'];
        if (_0x528e4b <= 0x0) {
            _0x5dd377['style']['display'] = 'none';
            return;
        }
        const _0x55db42 = _0x528e4b - 0x1;
        const _0x246b66 = _0x55db42 % _0x371882;
        const _0x24c539 = Math['floor'](_0x55db42 / _0x371882);
        const _0x2080dc = _0x246b66 * _0x3943b3 - _0x6c7462;
        const _0x6658ce = _0x24c539 * _0x3943b3 - _0x13487a;
        _0x5dd377['style']['display'] = 'block';
        _0x5dd377['style']['left'] = _0x2080dc + 'px';
        _0x5dd377['style']['top'] = _0x6658ce + 'px';
    }
    _0x4a0c6c['onload'] = () => {
        _0x11c76d();
        _0x2e0565();
    };
    if (_0x4a0c6c['complete'] && _0x4a0c6c['naturalWidth'] > 0x0) {
        _0x11c76d();
        _0x2e0565();
    }
    _0x36de53['addEventListener']('mousedown', _0x2d35d1 => {
        if (_0x2d35d1['button'] === 0x0) {
            _0x426f1b = !![];
            _0x2b39e9 = _0x2d35d1['clientX'];
            _0x31a2a6 = _0x2d35d1['clientY'];
            _0x41368a = _0x6c7462;
            _0x2548a1 = _0x13487a;
            _0x36de53['style']['cursor'] = 'grabbing';
            _0x2d35d1['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x5815b5 => {
        if (!_0x426f1b)
            return;
        const _0x1e87a8 = _0x2b39e9 - _0x5815b5['clientX'];
        const _0x8f8b4d = _0x31a2a6 - _0x5815b5['clientY'];
        const _0xca5ba3 = Math['max'](0x0, _0x4a0c6c['naturalWidth'] - _0x3a6f8a['width']);
        const _0x44c274 = Math['max'](0x0, _0x4a0c6c['naturalHeight'] - _0x3a6f8a['height']);
        _0x6c7462 = Math['max'](0x0, Math['min'](_0xca5ba3, _0x41368a + _0x1e87a8));
        _0x13487a = Math['max'](0x0, Math['min'](_0x44c274, _0x2548a1 + _0x8f8b4d));
        _0x11c76d();
        _0x2e0565();
    });
    window['addEventListener']('mouseup', _0x29aa14 => {
        if (_0x426f1b) {
            _0x426f1b = ![];
            _0x36de53['style']['cursor'] = 'grab';
        }
    });
    _0x36de53['addEventListener']('click', _0x5df086 => {
        const _0x149ff9 = _0x36de53['getBoundingClientRect']();
        const _0x370ab9 = _0x5df086['clientX'] - _0x149ff9['left'] + _0x6c7462;
        const _0x4409fc = _0x5df086['clientY'] - _0x149ff9['top'] + _0x13487a;
        const _0x48d404 = Math['max'](0x1, Math['ceil'](_0x4a0c6c['naturalWidth'] / _0x3943b3));
        const _0x2057ad = Math['floor'](_0x370ab9 / _0x3943b3);
        const _0x46404b = Math['floor'](_0x4409fc / _0x3943b3);
        const _0x3f4da3 = _0x46404b * _0x48d404 + _0x2057ad + 0x1;
        _0x4c9809['EDITOR']['selectedTileGid'] = _0x3f4da3;
        _0x2e0565();
    });
    _0x3ed883['appendChild'](_0x36de53);
    const _0x47df47 = document['createElement']('div');
    _0x47df47['className'] = 'tile-btn\x20eraser-btn';
    _0x47df47['title'] = 'Eraser\x20(gid\x200)';
    _0x47df47['onclick'] = () => {
        _0x4c9809['EDITOR']['selectedTileGid'] = 0x0;
        _0x5dd377['style']['display'] = 'none';
    };
    _0x3ed883['appendChild'](_0x47df47);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x4c9809['EDITOR']['enabled'] = !_0x4c9809['EDITOR']['enabled'];
        const _0x5a375e = document['getElementById']('editor-tools');
        if (_0x4c9809['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x5a375e['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x5a375e['style']['display'] = 'none';
        }
    });
    const _0x1d1d3f = document['getElementById']('start-game-btn');
    if (_0x1d1d3f) {
        _0x1d1d3f['addEventListener']('click', () => {
            if (_0x3deee7)
                _0x3deee7['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x422d9e = document['getElementById']('rolelist-toggle-btn');
    if (_0x422d9e) {
        let _0xec20a3 = 'subalignments';
        _0x422d9e['addEventListener']('click', () => {
            if (_0xec20a3 === 'subalignments')
                _0xec20a3 = 'precise';
            else if (_0xec20a3 === 'precise')
                _0xec20a3 = 'off';
            else
                _0xec20a3 = 'subalignments';
            _0x422d9e['innerText'] = 'Role\x20List:\x20' + _0xec20a3['charAt'](0x0)['toUpperCase']() + _0xec20a3['slice'](0x1);
            if (_0x3deee7)
                _0x3deee7['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0xec20a3
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x5b0a1c => {
        if (_0x5b0a1c['id'] === 'editor-toggle-btn' || _0x5b0a1c['id'] === 'start-game-btn' || _0x5b0a1c['id'] === 'rolelist-toggle-btn')
            return;
        _0x5b0a1c['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x3a2a0e => _0x3a2a0e['classList']['remove']('active'));
            _0x5b0a1c['classList']['add']('active');
            _0x4c9809['EDITOR']['selectedLayer'] = _0x5b0a1c['dataset']['layer'];
        });
    });
}
function _0x36e1a1(_0x3daf50) {
    if (_0x3deee7)
        _0x3deee7['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x3daf50
        }));
}
function _0x5658d1(_0x158bf9) {
    if (_0x3deee7)
        _0x3deee7['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x158bf9
        }));
}
function _0x2f2a5d(_0x1bab43, _0x489b3e, _0x329b82, _0x13fc3e) {
    const _0xef279 = document['getElementById']('admin-panel');
    if (_0xef279)
        _0xef279['remove']();
    if (_0xef279 && _0xef279['dataset']['target'] === String(_0x1bab43))
        return;
    const _0x4669f6 = document['createElement']('div');
    _0x4669f6['id'] = 'admin-panel';
    _0x4669f6['dataset']['target'] = String(_0x1bab43);
    _0x4669f6['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x201b01 = document['createElement']('div');
    _0x201b01['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x201b01['textContent'] = _0x489b3e;
    _0x4669f6['appendChild'](_0x201b01);
    const _0x43fc93 = document['createElement']('button');
    _0x43fc93['textContent'] = 'Kick';
    _0x43fc93['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x43fc93['onmouseenter'] = () => _0x43fc93['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x43fc93['onmouseleave'] = () => _0x43fc93['style']['background'] = 'transparent';
    _0x43fc93['onclick'] = () => {
        _0x36e1a1(_0x1bab43);
        _0x4669f6['remove']();
    };
    _0x4669f6['appendChild'](_0x43fc93);
    const _0x288025 = document['createElement']('button');
    _0x288025['textContent'] = 'Ban';
    _0x288025['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x288025['onmouseenter'] = () => _0x288025['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x288025['onmouseleave'] = () => _0x288025['style']['background'] = 'transparent';
    _0x288025['onclick'] = () => {
        _0x5658d1(_0x1bab43);
        _0x4669f6['remove']();
    };
    _0x4669f6['appendChild'](_0x288025);
    document['body']['appendChild'](_0x4669f6);
    const _0xc75854 = _0x4669f6['offsetWidth'] || 0x91;
    const _0x537476 = _0x4669f6['offsetHeight'] || 0x50;
    let _0x590505 = _0x329b82 - _0xc75854;
    let _0x1db9b2 = _0x13fc3e;
    if (_0x590505 < 0x4)
        _0x590505 = _0x329b82;
    if (_0x1db9b2 + _0x537476 > window['innerHeight'] - 0x4)
        _0x1db9b2 = window['innerHeight'] - _0x537476 - 0x4;
    _0x4669f6['style']['left'] = _0x590505 + 'px';
    _0x4669f6['style']['top'] = _0x1db9b2 + 'px';
    const _0x569b69 = _0x2fbc69 => {
        if (!_0x4669f6['contains'](_0x2fbc69['target'])) {
            _0x4669f6['remove']();
            document['removeEventListener']('mousedown', _0x569b69);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x569b69), 0x0);
}
let _0x54b967 = '';
function _0x357759() {
    const _0x2ad59e = document['getElementById']('leaderboard-list');
    if (!_0x2ad59e)
        return;
    let _0x2d5acc = _0x2adc50 + '|' + _0x1ce262 + '|' + _0x2974aa['isDead'] + '|' + _0x7b86f1['size'];
    for (const _0x47aa4e in _0x52b337) {
        const _0x241bad = _0x52b337[_0x47aa4e];
        _0x2d5acc += '|' + _0x47aa4e + ':' + _0x241bad['name'] + ':' + !!_0x241bad['isOwner'] + ':' + !!_0x241bad['isDead'] + ':' + _0x7b86f1['has'](parseInt(_0x47aa4e));
    }
    if (_0x2d5acc === _0x54b967)
        return;
    _0x54b967 = _0x2d5acc;
    _0x2ad59e['innerHTML'] = '';
    const _0x42a7c3 = document['createElement']('div');
    _0x42a7c3['className'] = 'leaderboard-entry';
    const _0x149f1c = document['createElement']('span');
    _0x149f1c['textContent'] = _0x2adc50 + (_0x1ce262 ? '\x20[🗝️]' : '');
    if (_0x7b86f1['has'](_0x16badb) && !_0x2974aa['isDead']) {
        _0x149f1c['style']['color'] = '#cc88ff';
    }
    _0x42a7c3['appendChild'](_0x149f1c);
    _0x2ad59e['appendChild'](_0x42a7c3);
    for (const _0x5689f2 in _0x52b337) {
        const _0x3f7aeb = document['createElement']('div');
        _0x3f7aeb['className'] = 'leaderboard-entry';
        const _0x1e2edf = document['createElement']('span');
        _0x1e2edf['textContent'] = _0x52b337[_0x5689f2]['name'] + (_0x52b337[_0x5689f2]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x7b86f1['has'](parseInt(_0x5689f2)) && !_0x52b337[_0x5689f2]['isDead']) {
            _0x1e2edf['style']['color'] = '#cc88ff';
        }
        _0x3f7aeb['appendChild'](_0x1e2edf);
        if (_0x1ce262 && !_0x52b337[_0x5689f2]['isOwner']) {
            const _0x2b41d9 = _0x52b337[_0x5689f2]['id'];
            const _0x22fb53 = _0x52b337[_0x5689f2]['name'];
            _0x3f7aeb['style']['cursor'] = 'context-menu';
            _0x3f7aeb['addEventListener']('contextmenu', _0x3e02db => {
                _0x3e02db['preventDefault']();
                _0x3e02db['stopPropagation']();
                _0x2f2a5d(_0x2b41d9, _0x22fb53, _0x3e02db['clientX'], _0x3e02db['clientY']);
            });
        }
        _0x2ad59e['appendChild'](_0x3f7aeb);
    }
}
window['addEventListener']('resize', _0x2b6837);
function _0x2b6837() {
    _0x2684ef['width'] = window['innerWidth'];
    _0x2684ef['height'] = window['innerHeight'];
    _0x4c9809['SYSTEM']['viewScale'] = Math['max'](_0x2684ef['width'] / _0x1fd2ee, _0x2684ef['height'] / _0xc8eb02);
    _0x4c9809['CAMERA']['width'] = _0x2684ef['width'] / _0x4c9809['SYSTEM']['viewScale'];
    _0x4c9809['CAMERA']['height'] = _0x2684ef['height'] / _0x4c9809['SYSTEM']['viewScale'];
    _0x4cb236['imageSmoothingEnabled'] = ![];
}
function _0x294d93(_0x576feb) {
    if (_0x576feb['ctrlKey'] || _0x576feb['metaKey']) {
        if (_0x576feb['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x576feb['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x576feb['code'])) {
            _0x576feb['preventDefault']();
            _0x576feb['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x294d93, { 'passive': ![] });
window['addEventListener']('keydown', _0x294d93, { 'passive': ![] });
window['addEventListener']('keydown', _0x56ce97 => {
    const _0x2f6bf3 = _0x56ce97['key']['toLowerCase']();
    if (_0x2f6bf3 === 'tab') {
        _0x56ce97['preventDefault']();
        const _0x5e1bdf = document['getElementById']('will-ui');
        const _0x5c2efd = document['getElementById']('will-input');
        if (_0x5e1bdf['style']['display'] === 'flex') {
            _0x5e1bdf['style']['display'] = 'none';
            if (_0x4c9809['GAME_STATE'] !== 'NIGHT' && _0x3deee7)
                _0x3deee7['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x5c2efd['value']
                }));
            _0x5c2efd['blur']();
        } else {
            if (_0x4c9809['GAME_STATE'] === 'NIGHT') {
                _0x160ee0('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x5e1bdf['style']['display'] = 'flex';
            _0x5c2efd['focus']();
            for (let _0x47b34c in _0x4c9809['INPUTS']['keys'])
                _0x4c9809['INPUTS']['keys'][_0x47b34c] = ![];
        }
        return;
    }
    if (_0x56ce97['key'] === 'Enter') {
        if (_0x504f49) {
            const _0x47f987 = document['getElementById']('play-btn');
            if (_0x47f987)
                _0x47f987['click']();
            return;
        }
        if (!_0x3deee7 || _0x3deee7['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x4b5f8b = document['getElementById']('chat-ui');
        const _0x4ced8e = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x4ced8e) {
            const _0x54d80f = _0x4ced8e['value']['trim']();
            if (_0x54d80f['length'] > 0x0) {
                _0x3deee7['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x54d80f
                }));
            }
            _0x4ced8e['value'] = '';
            _0x4b5f8b['style']['display'] = 'none';
            _0x4ced8e['blur']();
        } else {
            _0x4b5f8b['style']['display'] = 'block';
            _0x4ced8e['focus']();
            for (let _0x539ed9 in _0x4c9809['INPUTS']['keys'])
                _0x4c9809['INPUTS']['keys'][_0x539ed9] = ![];
        }
        _0x56ce97['preventDefault']();
        return;
    }
    if (_0x56ce97['key'] === 'Escape') {
        const _0x26bfc3 = document['getElementById']('role-index-modal');
        if (_0x26bfc3 && _0x26bfc3['style']['display'] === 'flex') {
            _0x26bfc3['style']['display'] = 'none';
            return;
        }
        const _0xfadd30 = document['getElementById']('guide-ui');
        if (_0xfadd30 && _0xfadd30['style']['display'] === 'flex') {
            _0xfadd30['style']['display'] = 'none';
            return;
        }
        const _0x647c85 = document['getElementById']('ability-ui');
        if (_0x647c85 && _0x647c85['style']['display'] === 'block') {
            _0x647c85['style']['display'] = 'none';
            return;
        }
        const _0x5dbcd4 = document['getElementById']('settings-panel');
        if (_0x5dbcd4 && _0x5dbcd4['style']['display'] === 'block') {
            _0x5dbcd4['style']['display'] = 'none';
            return;
        }
        const _0x135fe6 = document['getElementById']('mayor-confirm-dialog');
        if (_0x135fe6 && _0x135fe6['style']['display'] === 'flex') {
            _0x135fe6['style']['display'] = 'none';
            return;
        }
        const _0x273920 = document['getElementById']('target-chooser-ui');
        if (_0x273920 && _0x273920['style']['display'] === 'flex') {
            _0x273920['style']['display'] = 'none';
            return;
        }
        const _0x1ee8cc = document['getElementById']('chat-ui');
        const _0x5cbce5 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x5cbce5) {
            _0x5cbce5['value'] = '';
            _0x1ee8cc['style']['display'] = 'none';
            _0x5cbce5['blur']();
            _0x56ce97['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x4c9809['INPUTS']['keys']['hasOwnProperty'](_0x2f6bf3))
            _0x4c9809['INPUTS']['keys'][_0x2f6bf3] = !![];
        if (!_0x3deee7 || _0x3deee7['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x2f6bf3 === 'h' && !_0x56ce97['repeat']) {
            const _0x3707b9 = document['getElementById']('guide-ui');
            if (_0x3707b9) {
                _0x3707b9['style']['display'] = _0x3707b9['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x2f6bf3 === 't' && !_0x56ce97['repeat']) {
            if (_0x2974aa['isDead'])
                return;
            if (_0x2d2651 === 'Mayor') {
                if (_0x7b86f1['has'](_0x16badb)) {
                    _0x160ee0('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x5b83c0 = document['getElementById']('mayor-confirm-dialog');
                if (_0x5b83c0)
                    _0x5b83c0['style']['display'] = 'flex';
                return;
            }
            if (_0x4c9809['GAME_STATE'] === 'NIGHT') {
                if (!_0x4c9809['NIGHT_ABILITY_OPEN']) {
                    _0x160ee0('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x42e925 = document['getElementById']('ability-ui');
                if (_0x42e925) {
                    if (_0x42e925['style']['display'] === 'block') {
                        _0x42e925['style']['display'] = 'none';
                    } else {
                        _0xf5cc89();
                        _0x42e925['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x4c9809['GAME_STATE'] === 'DAY_DISCUSS' || _0x4c9809['GAME_STATE'] === 'DAY_VOTE') {
                _0x160ee0('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x2f6bf3 === 'e' && !_0x2974aa['isDead']) {
            const _0x29b961 = Date['now']();
            if (!window['_lastDoorSend'] || _0x29b961 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x29b961;
                _0x3deee7['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x35243b => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x2b29c7 = _0x35243b['key']['toLowerCase']();
        if (_0x4c9809['INPUTS']['keys']['hasOwnProperty'](_0x2b29c7))
            _0x4c9809['INPUTS']['keys'][_0x2b29c7] = ![];
    }
});
window['addEventListener']('mousemove', _0x33c031 => {
    _0x4c9809['INPUTS']['mouseX'] = _0x33c031['clientX'];
    _0x4c9809['INPUTS']['mouseY'] = _0x33c031['clientY'];
    if (_0x4c9809['INPUTS']['isMouseDown'] && _0x4c9809['EDITOR']['enabled']) {
        _0x11ba08(_0x33c031['clientX'], _0x33c031['clientY']);
    }
});
window['addEventListener']('mousedown', _0x1067cf => {
    if (_0x1067cf['target']['closest']('#editor-ui') || _0x1067cf['target']['closest']('#leaderboard-ui') || _0x1067cf['target']['closest']('#role-index-btn-wrap') || _0x1067cf['target']['closest']('#role-index-modal') || _0x1067cf['target']['closest']('#chat-log-ui') || _0x1067cf['target']['closest']('#target-chooser-ui') || _0x1067cf['target']['closest']('#guide-ui') || _0x1067cf['target']['closest']('#role-list-ui') || _0x1067cf['target']['closest']('#ability-ui') || _0x1067cf['target']['closest']('#settings-panel') || _0x1067cf['target']['closest']('#mayor-confirm-dialog') || _0x1067cf['target']['closest']('#mobile-action-bar') || _0x1067cf['target']['closest']('#mobile-top-bar') || _0x1067cf['target']['closest']('#mobile-joystick-zone') || _0x1067cf['target']['closest']('#mobile-chat-overlay') || _0x1067cf['target']['closest']('#will-ui') || _0x1067cf['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x1067cf['button'] === 0x0) {
        _0x4c9809['INPUTS']['isMouseDown'] = !![];
        if (_0x4c9809['EDITOR']['enabled'])
            _0x11ba08(_0x1067cf['clientX'], _0x1067cf['clientY']);
    }
});
window['addEventListener']('mouseup', _0x13b86e => {
    _0x4c9809['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0xcd2ab => {
    if (_0xcd2ab['target']['closest']('#settings-btn'))
        return;
    const _0x255414 = document['getElementById']('leaderboard-list');
    const _0x18716f = document['getElementById']('leaderboard-toggle');
    if (_0x255414['style']['display'] === 'none') {
        _0x255414['style']['display'] = 'flex';
        _0x18716f['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x255414['style']['display'] = 'none';
        _0x18716f['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x13a1ee = document['getElementById']('close-target-btn');
if (_0x13a1ee) {
    _0x13a1ee['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x43e298 = document['getElementById']('close-guide-btn');
if (_0x43e298) {
    _0x43e298['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0xa913d4 = document['getElementById']('role-list-header');
if (_0xa913d4) {
    _0xa913d4['addEventListener']('click', () => {
        const _0x49a8a0 = document['getElementById']('role-list-items');
        const _0x9d2d05 = document['getElementById']('role-list-toggle');
        if (_0x49a8a0['style']['display'] === 'none') {
            _0x49a8a0['style']['display'] = 'flex';
            _0x9d2d05['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x49a8a0['style']['display'] = 'none';
            _0x9d2d05['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x48eb8b() {
    const _0x5481bb = document['getElementById']('mobile-joystick-zone');
    const _0x211da9 = document['getElementById']('mobile-joystick-base');
    const _0x37d01d = document['getElementById']('mobile-joystick-knob');
    if (_0x5481bb && _0x211da9 && _0x37d01d) {
        const _0x2e8980 = 0x3e;
        const _0x49f3c7 = (_0x1d999c, _0x5c6419) => {
            const _0x58848e = _0x211da9['getBoundingClientRect']();
            const _0x191dad = _0x58848e['left'] + _0x58848e['width'] / 0x2;
            const _0x38c07e = _0x58848e['top'] + _0x58848e['height'] / 0x2;
            const _0x3bd466 = _0x1d999c - _0x191dad;
            const _0x18f64c = _0x5c6419 - _0x38c07e;
            const _0x4449a5 = Math['hypot'](_0x3bd466, _0x18f64c);
            if (_0x4449a5 === 0x0) {
                _0xec123e = 0x0;
                _0x190da5 = 0x0;
                _0x574e4f = ![];
                _0x37d01d['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0xf47814 = Math['min'](_0x4449a5, _0x2e8980);
            const _0x4c959f = _0x3bd466 / _0x4449a5 * _0xf47814;
            const _0x59f721 = _0x18f64c / _0x4449a5 * _0xf47814;
            _0xec123e = _0x4c959f / _0x2e8980;
            _0x190da5 = _0x59f721 / _0x2e8980;
            _0x574e4f = _0x4449a5 >= _0x2e8980 * 0.75;
            _0x37d01d['style']['transform'] = 'translate(' + _0x4c959f + 'px,\x20' + _0x59f721 + 'px)';
        };
        const _0x303178 = _0xd11326 => {
            for (let _0x22bc7d = 0x0; _0x22bc7d < _0xd11326['changedTouches']['length']; _0x22bc7d++) {
                const _0x33c2fe = _0xd11326['changedTouches'][_0x22bc7d];
                if (_0x2a9d47 === null) {
                    _0x2a9d47 = _0x33c2fe['identifier'];
                    _0x2a436b = !![];
                    _0x49f3c7(_0x33c2fe['clientX'], _0x33c2fe['clientY']);
                    break;
                }
            }
        };
        const _0x4a18af = _0x323d12 => {
            for (let _0x113783 = 0x0; _0x113783 < _0x323d12['changedTouches']['length']; _0x113783++) {
                const _0x434469 = _0x323d12['changedTouches'][_0x113783];
                if (_0x434469['identifier'] === _0x2a9d47) {
                    _0x49f3c7(_0x434469['clientX'], _0x434469['clientY']);
                    break;
                }
            }
        };
        const _0x851e88 = _0xf2dc50 => {
            for (let _0x397ca2 = 0x0; _0x397ca2 < _0xf2dc50['changedTouches']['length']; _0x397ca2++) {
                const _0x8ac453 = _0xf2dc50['changedTouches'][_0x397ca2];
                if (_0x8ac453['identifier'] === _0x2a9d47) {
                    _0x2a9d47 = null;
                    _0x2a436b = ![];
                    _0xec123e = 0x0;
                    _0x190da5 = 0x0;
                    _0x574e4f = ![];
                    _0x37d01d['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x5481bb['addEventListener']('touchstart', _0x26173a => {
            _0x26173a['preventDefault']();
            _0x303178(_0x26173a);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x4a18af, { 'passive': !![] });
        window['addEventListener']('touchend', _0x851e88, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x851e88, { 'passive': !![] });
    }
    const _0x30d247 = (_0x185d85, _0x58d159) => {
        const _0xb34b36 = _0x185d85 / _0x4c9809['SYSTEM']['viewScale'];
        const _0x1f2c19 = _0x58d159 / _0x4c9809['SYSTEM']['viewScale'];
        const _0x4acf9b = _0x2974aa['x'] - _0x4c9809['CAMERA']['x'] + _0x2974aa['width'] / 0x2;
        const _0x5a26c1 = _0x2974aa['y'] - _0x4c9809['CAMERA']['y'] + _0x2974aa['height'] / 0x2;
        _0x4598b8 = Math['atan2'](_0x1f2c19 - _0x5a26c1, _0xb34b36 - _0x4acf9b);
        _0x54b77c = !![];
        _0x4c9809['INPUTS']['mouseX'] = _0x185d85;
        _0x4c9809['INPUTS']['mouseY'] = _0x58d159;
    };
    _0x2684ef['addEventListener']('touchstart', _0x49e529 => {
        if (_0x504f49)
            return;
        for (let _0x4eec01 = 0x0; _0x4eec01 < _0x49e529['changedTouches']['length']; _0x4eec01++) {
            const _0x1c1e51 = _0x49e529['changedTouches'][_0x4eec01];
            if (_0x1c1e51['identifier'] !== _0x2a9d47 && _0x2da9dd === null) {
                _0x2da9dd = _0x1c1e51['identifier'];
                _0x30d247(_0x1c1e51['clientX'], _0x1c1e51['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x2684ef['addEventListener']('touchmove', _0x3f0007 => {
        if (_0x504f49)
            return;
        for (let _0x504714 = 0x0; _0x504714 < _0x3f0007['changedTouches']['length']; _0x504714++) {
            const _0x28f779 = _0x3f0007['changedTouches'][_0x504714];
            if (_0x28f779['identifier'] === _0x2da9dd) {
                _0x30d247(_0x28f779['clientX'], _0x28f779['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x48be09 = _0x41dc55 => {
        for (let _0x3d5900 = 0x0; _0x3d5900 < _0x41dc55['changedTouches']['length']; _0x3d5900++) {
            const _0x857e10 = _0x41dc55['changedTouches'][_0x3d5900];
            if (_0x857e10['identifier'] === _0x2da9dd) {
                _0x2da9dd = null;
                _0x54b77c = ![];
                break;
            }
        }
    };
    _0x2684ef['addEventListener']('touchend', _0x48be09, { 'passive': !![] });
    _0x2684ef['addEventListener']('touchcancel', _0x48be09, { 'passive': !![] });
    const _0x1b5e3a = document['getElementById']('mob-sprint-btn');
    if (_0x1b5e3a) {
        _0x1b5e3a['addEventListener']('click', _0x3b4255 => {
            _0x3b4255['stopPropagation']();
            _0x19b352 = !_0x19b352;
            _0x1b5e3a['classList']['toggle']('active', _0x19b352);
        });
    }
    const _0x114d91 = document['getElementById']('mob-interact-btn');
    if (_0x114d91) {
        _0x114d91['addEventListener']('click', _0x10b69a => {
            _0x10b69a['stopPropagation']();
            if (!_0x2974aa['isDead']) {
                const _0xb977d = Date['now']();
                if (!window['_lastDoorSend'] || _0xb977d - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0xb977d;
                    if (_0x3deee7 && _0x3deee7['readyState'] === WebSocket['OPEN'])
                        _0x3deee7['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x2cf2fe = document['getElementById']('mob-ability-btn');
    if (_0x2cf2fe) {
        _0x2cf2fe['addEventListener']('click', _0xcfa32a => {
            _0xcfa32a['stopPropagation']();
            if (_0x2974aa['isDead'])
                return;
            if (_0x2d2651 === 'Mayor') {
                if (_0x7b86f1['has'](_0x16badb)) {
                    _0x160ee0('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0xceb0e6 = document['getElementById']('mayor-confirm-dialog');
                if (_0xceb0e6)
                    _0xceb0e6['style']['display'] = 'flex';
                return;
            }
            if (_0x4c9809['GAME_STATE'] === 'NIGHT') {
                if (!_0x4c9809['NIGHT_ABILITY_OPEN']) {
                    _0x160ee0('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x560b8f = document['getElementById']('ability-ui');
                if (_0x560b8f) {
                    if (_0x560b8f['style']['display'] === 'block') {
                        _0x560b8f['style']['display'] = 'none';
                    } else {
                        _0xf5cc89();
                        _0x560b8f['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x4c9809['GAME_STATE'] === 'DAY_DISCUSS' || _0x4c9809['GAME_STATE'] === 'DAY_VOTE') {
                _0x160ee0('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x1e0343 = document['getElementById']('mob-will-btn');
    const _0x535292 = document['getElementById']('will-ui');
    const _0x4f30b3 = document['getElementById']('will-input');
    const _0x3b4674 = document['getElementById']('close-will-btn');
    const _0x2bc4fc = () => {
        if (!_0x535292)
            return;
        if (_0x535292['style']['display'] === 'flex') {
            _0x535292['style']['display'] = 'none';
            if (_0x4c9809['GAME_STATE'] !== 'NIGHT' && _0x3deee7 && _0x3deee7['readyState'] === WebSocket['OPEN'] && _0x4f30b3) {
                _0x3deee7['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x4f30b3['value']
                }));
            }
            if (_0x4f30b3)
                _0x4f30b3['blur']();
        } else {
            if (_0x4c9809['GAME_STATE'] === 'NIGHT') {
                _0x160ee0('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x535292['style']['display'] = 'flex';
            if (_0x4f30b3)
                _0x4f30b3['focus']();
        }
    };
    if (_0x1e0343)
        _0x1e0343['addEventListener']('click', _0x261451 => {
            _0x261451['stopPropagation']();
            _0x2bc4fc();
        });
    if (_0x3b4674)
        _0x3b4674['addEventListener']('click', _0x15e1a4 => {
            _0x15e1a4['stopPropagation']();
            _0x2bc4fc();
        });
    const _0x194f21 = document['getElementById']('mob-chat-btn');
    const _0x21ccde = document['getElementById']('mobile-chat-overlay');
    const _0x55a822 = document['getElementById']('mobile-chat-input');
    const _0x1d2390 = document['getElementById']('mobile-chat-send');
    const _0x20b0ec = document['getElementById']('mobile-chat-cancel');
    const _0x22ba24 = () => {
        if (!_0x21ccde || !_0x55a822)
            return;
        _0x21ccde['style']['display'] = 'flex';
        _0x55a822['value'] = '';
        _0x55a822['focus']();
    };
    const _0x4e78b7 = () => {
        if (!_0x21ccde || !_0x55a822)
            return;
        _0x21ccde['style']['display'] = 'none';
        _0x55a822['blur']();
    };
    const _0x106604 = () => {
        if (!_0x55a822)
            return;
        const _0x5a88cf = _0x55a822['value']['trim']();
        if (_0x5a88cf['length'] > 0x0 && _0x3deee7 && _0x3deee7['readyState'] === WebSocket['OPEN']) {
            _0x3deee7['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x5a88cf
            }));
        }
        _0x55a822['value'] = '';
        _0x4e78b7();
    };
    if (_0x194f21)
        _0x194f21['addEventListener']('click', _0x16fd1d => {
            _0x16fd1d['stopPropagation']();
            _0x22ba24();
        });
    if (_0x1d2390)
        _0x1d2390['addEventListener']('click', _0x1e1901 => {
            _0x1e1901['stopPropagation']();
            _0x106604();
        });
    if (_0x20b0ec)
        _0x20b0ec['addEventListener']('click', _0xbab6f1 => {
            _0xbab6f1['stopPropagation']();
            _0x4e78b7();
        });
    if (_0x55a822) {
        _0x55a822['addEventListener']('keydown', _0x284b0d => {
            if (_0x284b0d['key'] === 'Enter') {
                _0x284b0d['preventDefault']();
                _0x106604();
            } else if (_0x284b0d['key'] === 'Escape') {
                _0x4e78b7();
            }
        });
    }
    const _0x26e5c1 = document['getElementById']('mob-top-chat');
    if (_0x26e5c1)
        _0x26e5c1['addEventListener']('click', _0xca08cb => {
            _0xca08cb['stopPropagation']();
            _0x22ba24();
        });
    const _0xe9f417 = document['getElementById']('mob-top-will');
    if (_0xe9f417)
        _0xe9f417['addEventListener']('click', _0x5bd77e => {
            _0x5bd77e['stopPropagation']();
            _0x2bc4fc();
        });
    const _0x5b0bc5 = document['getElementById']('mob-top-roles');
    if (_0x5b0bc5) {
        _0x5b0bc5['addEventListener']('click', _0x292957 => {
            _0x292957['stopPropagation']();
            const _0x388794 = document['getElementById']('role-list-ui');
            const _0x56de88 = document['getElementById']('leaderboard-ui');
            if (_0x56de88)
                _0x56de88['style']['display'] = 'none';
            if (_0x388794)
                _0x388794['style']['display'] = _0x388794['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x4ea4ab = document['getElementById']('mob-top-players');
    if (_0x4ea4ab) {
        _0x4ea4ab['addEventListener']('click', _0x476cd5 => {
            _0x476cd5['stopPropagation']();
            const _0x339dd1 = document['getElementById']('leaderboard-ui');
            const _0x59f02a = document['getElementById']('role-list-ui');
            if (_0x59f02a)
                _0x59f02a['style']['display'] = 'none';
            if (_0x339dd1)
                _0x339dd1['style']['display'] = _0x339dd1['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0xad7797 = document['getElementById']('mob-top-help');
    if (_0xad7797) {
        _0xad7797['addEventListener']('click', _0x42832c => {
            _0x42832c['stopPropagation']();
            const _0x227086 = document['getElementById']('guide-ui');
            if (_0x227086)
                _0x227086['style']['display'] = _0x227086['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x2e6d79) {
            _0x2e6d79 = !![];
            _0x3246bd();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
