document['addEventListener']('contextmenu', _0x561cbe => _0x561cbe['preventDefault']());
const _0xf39980 = {
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
let _0x3d7de1 = '';
function _0x443077(_0x381540, _0x234881) {
    const _0x41bdd6 = document['getElementById']('role-list-ui');
    const _0x347934 = document['getElementById']('role-list-items');
    if (!_0x41bdd6 || !_0x347934)
        return;
    if (!_0x234881 || _0x234881 === 'off' || !_0x381540 || _0x381540['length'] === 0x0) {
        _0x41bdd6['style']['display'] = 'none';
        return;
    }
    const _0x5dde9a = _0x234881 + '|' + JSON['stringify'](_0x381540);
    if (_0x5dde9a === _0x3d7de1)
        return;
    _0x3d7de1 = _0x5dde9a;
    const _0x514785 = document['getElementById']('role-tooltip');
    if (_0x514785) {
        _0x514785['style']['visibility'] = 'hidden';
        _0x514785['style']['opacity'] = '0';
    }
    _0x41bdd6['style']['display'] = 'flex';
    _0x347934['innerHTML'] = '';
    _0x381540['forEach'](_0x31bbc3 => {
        const _0xd9493c = document['createElement']('div');
        _0xd9493c['className'] = 'role-list-entry';
        const _0x16a2d8 = _0x31bbc3['name']['includes']('Mafia') || _0x31bbc3['name'] === 'Skinwalker';
        _0xd9493c['classList']['add'](_0x16a2d8 ? 'mafia' : 'town');
        if (_0x234881 === 'precise' && _0x31bbc3['isDead']) {
            _0xd9493c['classList']['remove']('town', 'mafia');
            _0xd9493c['classList']['add']('dead');
            _0xd9493c['innerHTML'] = '<span>' + _0x31bbc3['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x247c70 = _0x31bbc3['count'] !== undefined && _0x31bbc3['count'] !== null ? _0x31bbc3['count'] + 'x\x20' : '';
            _0xd9493c['innerHTML'] = '<span>' + _0x247c70 + _0x31bbc3['name'] + '</span>';
        }
        if (_0x234881 === 'subalignments' && _0xf39980[_0x31bbc3['name']]) {
            _0xd9493c['style']['cursor'] = 'pointer';
            _0xd9493c['addEventListener']('mouseenter', () => {
                const _0x4c50b7 = document['getElementById']('role-tooltip');
                if (!_0x4c50b7)
                    return;
                const _0x1429f3 = _0xf39980[_0x31bbc3['name']]['join'](',\x20');
                _0x4c50b7['innerHTML'] = '';
                const _0x3df590 = document['createElement']('span');
                _0x3df590['style']['color'] = '#ffcc00';
                _0x3df590['textContent'] = _0x31bbc3['name'];
                _0x4c50b7['appendChild'](_0x3df590);
                _0x4c50b7['appendChild'](document['createElement']('br'));
                _0x4c50b7['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x1429f3));
                const _0x5e9fb1 = _0xd9493c['getBoundingClientRect']();
                _0x4c50b7['style']['left'] = _0x5e9fb1['left'] - 0xeb + 'px';
                _0x4c50b7['style']['top'] = _0x5e9fb1['top'] + 'px';
                _0x4c50b7['style']['display'] = 'block';
                _0x4c50b7['style']['visibility'] = 'visible';
                _0x4c50b7['style']['opacity'] = '1';
            });
            _0xd9493c['addEventListener']('mouseleave', () => {
                const _0x3bb47f = document['getElementById']('role-tooltip');
                if (_0x3bb47f) {
                    _0x3bb47f['style']['display'] = 'none';
                    _0x3bb47f['style']['visibility'] = 'hidden';
                    _0x3bb47f['style']['opacity'] = '0';
                }
            });
        }
        _0x347934['appendChild'](_0xd9493c);
    });
}
let _0x295c3d = null;
let _0x362fbd = null;
const _0x378845 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x57a6b7 = 'Player???';
let _0x2bb082 = ![];
let _0x52df60 = {};
let _0x3cfa61 = null;
let _0x59e593 = 0x0;
let _0x455998 = 0x0;
let _0x300c6f = new Set();
let _0x475975 = ![];
let _0x5ceac7 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x3c58ba = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x377036 = ![];
let _0x3bbc95 = null;
let _0x42f5f1 = 0x0;
let _0x1d82cc = 0x0;
let _0x3e032c = ![];
let _0x21ebb4 = ![];
let _0x4fa900 = 0x0;
let _0x5467cf = null;
let _0x1b445b = ![];
let _0x2472a4 = 0x0;
let _0x4b9ba9 = 0x0;
const _0xc4e784 = ((() => {
    const _0x1832f7 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x22f830 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x3c39d3 = 0x320;
    const _0x507599 = {};
    const _0xd96702 = {};
    let _0x5445a4 = null;
    let _0x329c9d = _0x22f830 === 0x0;
    let _0x316ce2 = ![];
    for (const [_0x4de1b6, _0x43d6a9] of Object['entries'](_0x1832f7)) {
        const _0xc41fd7 = new Audio(_0x43d6a9);
        _0xc41fd7['loop'] = !![];
        _0xc41fd7['volume'] = 0x0;
        _0xc41fd7['preload'] = 'auto';
        _0x507599[_0x4de1b6] = _0xc41fd7;
        _0xd96702[_0x4de1b6] = null;
    }
    const _0x163f9f = _0x566240 => Math['min'](0x1, Math['max'](0x0, _0x566240));
    function _0x43960a(_0x482671) {
        if (_0xd96702[_0x482671] !== null) {
            cancelAnimationFrame(_0xd96702[_0x482671]);
            _0xd96702[_0x482671] = null;
        }
    }
    function _0x20dd32(_0x4bf97f, _0x5ddbe8, _0x747f74, _0x13fb66, _0x4e448b) {
        _0x43960a(_0x4bf97f);
        const _0xb6272d = _0x507599[_0x4bf97f];
        const _0x5f0266 = performance['now']();
        const _0x226e4e = _0x1cfefb => {
            const _0x4acf39 = _0x163f9f((_0x1cfefb - _0x5f0266) / _0x13fb66);
            const _0x57a4b3 = _0x163f9f(_0x5ddbe8 + (_0x747f74 - _0x5ddbe8) * _0x4acf39);
            _0xb6272d['volume'] = _0x329c9d ? 0x0 : _0x57a4b3;
            if (_0x4acf39 < 0x1) {
                _0xd96702[_0x4bf97f] = requestAnimationFrame(_0x226e4e);
            } else {
                _0xd96702[_0x4bf97f] = null;
                _0xb6272d['volume'] = _0x329c9d ? 0x0 : _0x163f9f(_0x747f74);
                if (_0x4e448b)
                    _0x4e448b();
            }
        };
        _0xd96702[_0x4bf97f] = requestAnimationFrame(_0x226e4e);
    }
    function _0xc762ce(_0x2bbc48) {
        const _0x3b2212 = _0x2bbc48['play']();
        if (_0x3b2212 && _0x3b2212['catch']) {
            _0x3b2212['catch'](() => {
                if (!_0x316ce2) {
                    const _0x1cd4dd = () => {
                        _0x316ce2 = !![];
                        _0x2bbc48['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x1cd4dd);
                        document['removeEventListener']('keydown', _0x1cd4dd);
                        document['removeEventListener']('touchstart', _0x1cd4dd);
                    };
                    document['addEventListener']('click', _0x1cd4dd, { 'once': !![] });
                    document['addEventListener']('keydown', _0x1cd4dd, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x1cd4dd, { 'once': !![] });
                }
            });
        }
    }
    function _0xfc20c7(_0x3c6dbf) {
        if (!_0x1832f7[_0x3c6dbf])
            return;
        if (_0x5445a4 === _0x3c6dbf)
            return;
        const _0x127686 = _0x5445a4;
        _0x5445a4 = _0x3c6dbf;
        const _0x23e129 = _0x507599[_0x3c6dbf];
        _0x43960a(_0x3c6dbf);
        _0x23e129['currentTime'] = 0x0;
        _0x23e129['volume'] = 0x0;
        _0xc762ce(_0x23e129);
        _0x20dd32(_0x3c6dbf, 0x0, _0x22f830, _0x3c39d3);
        if (_0x127686 && _0x507599[_0x127686]) {
            const _0x5b2068 = _0x127686;
            const _0x25f851 = _0x507599[_0x5b2068];
            const _0x3dc989 = _0x163f9f(_0x25f851['volume']);
            _0x20dd32(_0x5b2068, _0x3dc989, 0x0, _0x3c39d3, () => {
                _0x25f851['pause']();
                _0x25f851['currentTime'] = 0x0;
            });
        }
    }
    function _0x13bd5e(_0x3e05f3) {
        _0x22f830 = _0x163f9f(_0x3e05f3);
        localStorage['setItem']('musicVolume', String(_0x22f830));
        if (!_0x329c9d && _0x5445a4 && _0xd96702[_0x5445a4] === null) {
            _0x507599[_0x5445a4]['volume'] = _0x22f830;
        }
    }
    function _0x21b1f4() {
        return _0x22f830;
    }
    function _0x524ee8(_0x364356) {
        _0x329c9d = _0x364356;
        for (const _0x1b80b0 of Object['keys'](_0x507599)) {
            if (_0xd96702[_0x1b80b0] === null) {
                _0x507599[_0x1b80b0]['volume'] = _0x364356 || _0x1b80b0 !== _0x5445a4 ? 0x0 : _0x22f830;
            }
        }
    }
    function _0x34d62d() {
        return _0x329c9d;
    }
    function _0x277e88(_0x1cfcb6) {
        if (_0x1cfcb6 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x1cfcb6 === 'DAY_VOTE')
            return 'voting';
        if (_0x1cfcb6 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x2c597a(_0x1b9d3b) {
        _0xfc20c7(_0x277e88(_0x1b9d3b));
    }
    function _0x5f3937(_0xa3d8b8) {
        _0xfc20c7(_0xa3d8b8);
    }
    return {
        'play': _0xfc20c7,
        'onStateChange': _0x2c597a,
        'onSoundEvent': _0x5f3937,
        'setVolume': _0x13bd5e,
        'getVolume': _0x21b1f4,
        'setMuted': _0x524ee8,
        'isMuted': _0x34d62d
    };
})());
const _0x39ffdd = ((() => {
    const _0x318d72 = 0x258;
    const _0xdf5b3b = 0xb4;
    const _0x5e4ea4 = 0x708;
    const _0x1dccba = 0x140;
    const _0x2d00c5 = 0.18;
    const _0x102cbc = 0.95;
    const _0x1a8801 = new Audio('audio/heartbeat.mp3');
    _0x1a8801['loop'] = ![];
    _0x1a8801['preload'] = 'auto';
    _0x1a8801['volume'] = 0x0;
    let _0x5fdc98 = 0x0;
    let _0x44608c = Infinity;
    function _0x38f370(_0x54f47f, _0x1b1ace, _0x255a20) {
        return Math['min'](_0x255a20, Math['max'](_0x1b1ace, _0x54f47f));
    }
    function _0x45bc12(_0x4b7c13, _0x5a1a74, _0x3af03d) {
        return _0x4b7c13 + (_0x5a1a74 - _0x4b7c13) * _0x3af03d;
    }
    function _0x5bba83(_0x35683c) {
        if (_0xa2417d['GAME_STATE'] !== 'NIGHT' || _0x234c7d['isDead'] || _0x3cfa61 === 'Skinwalker') {
            _0x44608c = Infinity;
            return;
        }
        const _0x41602e = _0x234c7d['x'] + 22.5;
        const _0x597536 = _0x234c7d['y'] + 22.5;
        let _0x23dc33 = Infinity;
        for (const _0x1fc12d in _0x52df60) {
            const _0x3f049d = _0x52df60[_0x1fc12d];
            if (!_0x3f049d['isDark'] || _0x3f049d['isDead'])
                continue;
            const _0x3939ab = _0x3f049d['renderX'] + 22.5 - _0x41602e;
            const _0x1c04f1 = _0x3f049d['renderY'] + 22.5 - _0x597536;
            const _0x55a36a = Math['sqrt'](_0x3939ab * _0x3939ab + _0x1c04f1 * _0x1c04f1);
            if (_0x55a36a < _0x23dc33)
                _0x23dc33 = _0x55a36a;
        }
        _0x44608c = _0x23dc33;
        if (_0x23dc33 > _0x318d72)
            return;
        const _0x4cbac5 = 0x1 - _0x38f370((_0x23dc33 - _0xdf5b3b) / (_0x318d72 - _0xdf5b3b), 0x0, 0x1);
        const _0x53580d = _0x45bc12(_0x5e4ea4, _0x1dccba, _0x4cbac5);
        const _0x279696 = _0x45bc12(_0x2d00c5, _0x102cbc, _0x4cbac5);
        if (_0x35683c >= _0x5fdc98) {
            _0x1a8801['currentTime'] = 0x0;
            _0x1a8801['volume'] = _0xc4e784['isMuted']() ? 0x0 : _0x38f370(_0x279696 * _0xc4e784['getVolume']() / 0.7, 0x0, 0x1);
            _0x1a8801['play']()['catch'](() => {
            });
            _0x5fdc98 = _0x35683c + _0x53580d;
        }
    }
    return { 'tick': _0x5bba83 };
})());
function _0x454258() {
    const _0x1a7d69 = document['getElementById']('mob-ability-btn');
    if (!_0x1a7d69)
        return;
    const _0x195662 = _0xa2417d['GAME_STATE'] === 'NIGHT' && !_0x234c7d['isDead'];
    const _0xe9ca0a = _0x3cfa61 === 'Mayor' && !_0x300c6f['has'](_0x362fbd) && !_0x234c7d['isDead'];
    if (_0x195662 || _0xe9ca0a) {
        _0x1a7d69['style']['display'] = 'flex';
    } else {
        _0x1a7d69['style']['display'] = 'none';
    }
}
function _0xea39d8() {
    const _0x435692 = document['getElementById']('mobile-joystick-zone');
    const _0x53b52c = document['getElementById']('mobile-top-bar');
    const _0x564b06 = document['getElementById']('mobile-action-bar');
    if (!_0x435692 || !_0x53b52c || !_0x564b06)
        return;
    if (!_0x321f38 && _0x3c58ba) {
        _0x435692['style']['display'] = 'flex';
        _0x53b52c['style']['display'] = 'flex';
        _0x564b06['style']['display'] = 'flex';
        _0x454258();
    } else {
        _0x435692['style']['display'] = 'none';
        _0x53b52c['style']['display'] = 'none';
        _0x564b06['style']['display'] = 'none';
    }
}
const _0x2bd7ca = document['getElementById']('gameCanvas');
const _0x1db674 = _0x2bd7ca['getContext']('2d', { 'alpha': ![] });
const _0x42f5a3 = 0x500;
const _0x1686fc = 0x2d0;
const _0xa2417d = {
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
        'width': _0x42f5a3,
        'height': _0x1686fc
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
const _0x234c7d = {
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
const _0x27a8ed = new Image();
const _0xc8be2d = new Image();
const _0x14f821 = new Image();
const _0x37c98d = new Image();
_0x37c98d['src'] = 'assets/mayor\x20cosmetic.png';
const _0xfa3baa = [
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
const _0x3a1111 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x54739e = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x54739e === 'body1.png' || _0x54739e === 'body1')
    _0x54739e = 'body01.png';
if (!_0x54739e['endsWith']('.png'))
    _0x54739e += '.png';
let _0x53b153 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x53b153['endsWith']('.png'))
    _0x53b153 += '.png';
let _0x321f38 = !![];
let _0x229d4d = null;
let _0x496f56 = null;
let _0x1c2dd6 = 0x3c;
let _0x5b4cc9 = 0x2d;
const _0x10f6d2 = {};
const _0x3df97e = new Image();
_0x3df97e['src'] = 'assets/yanito932.png';
_0x10f6d2['assets/yanito932.png'] = _0x3df97e;
function _0x411892(_0x5c2de8) {
    if (!_0x10f6d2[_0x5c2de8] || !_0x10f6d2[_0x5c2de8]['complete'] && _0x10f6d2[_0x5c2de8]['naturalWidth'] === 0x0 && _0x10f6d2[_0x5c2de8]['naturalHeight'] === 0x0) {
        const _0x4d4da8 = new Image();
        _0x4d4da8['src'] = _0x5c2de8;
        _0x10f6d2[_0x5c2de8] = _0x4d4da8;
    }
    return _0x10f6d2[_0x5c2de8];
}
function _0x4422e8(_0x404dd2, _0x3f251d, _0x3b60b4, _0x4b1b00, _0x178ac7) {
    try {
        const _0x17e8d5 = 'assets/' + (_0x3f251d || 'body01.png');
        const _0x776286 = _0x411892(_0x17e8d5);
        if (_0x776286['complete'] && _0x776286['naturalWidth'] > 0x0) {
            _0x404dd2['drawImage'](_0x776286, -_0x4b1b00 / 0x2, -_0x178ac7 / 0x2, _0x4b1b00, _0x178ac7);
        }
        if (_0x3b60b4 === null || _0x3b60b4 === undefined)
            return;
        const _0x230176 = 'assets/' + _0x3b60b4;
        const _0x33a5eb = _0x411892(_0x230176);
        if (_0x33a5eb['complete'] && _0x33a5eb['naturalWidth'] > 0x0) {
            _0x404dd2['drawImage'](_0x33a5eb, -_0x4b1b00 / 0x2, -_0x178ac7 / 0x2, _0x4b1b00, _0x178ac7);
        }
    } catch (_0x2f8fdf) {
    }
}
function _0x1fb964() {
    const _0x56b03a = document['getElementById']('body-skin-grid');
    const _0x2eb0ff = document['getElementById']('eyes-skin-grid');
    if (!_0x56b03a || !_0x2eb0ff)
        return;
    _0x56b03a['innerHTML'] = '';
    _0xfa3baa['forEach'](_0x3d5067 => {
        const _0x441cac = document['createElement']('button');
        _0x441cac['className'] = 'skin-btn' + (_0x3d5067 === _0x54739e ? '\x20selected' : '');
        const _0x3f01f = document['createElement']('img');
        _0x3f01f['src'] = 'assets/' + _0x3d5067;
        _0x441cac['appendChild'](_0x3f01f);
        _0x441cac['onclick'] = () => {
            _0x54739e = _0x3d5067;
            localStorage['setItem']('selectedBody', _0x3d5067);
            _0x56b03a['querySelectorAll']('.skin-btn')['forEach'](_0x36ba21 => _0x36ba21['classList']['remove']('selected'));
            _0x441cac['classList']['add']('selected');
        };
        _0x56b03a['appendChild'](_0x441cac);
    });
    _0x2eb0ff['innerHTML'] = '';
    _0x3a1111['forEach'](_0x39ef1a => {
        const _0xc605e0 = document['createElement']('button');
        _0xc605e0['className'] = 'skin-btn' + (_0x39ef1a === _0x53b153 ? '\x20selected' : '');
        const _0x5042f7 = document['createElement']('img');
        _0x5042f7['src'] = 'assets/' + _0x39ef1a;
        _0xc605e0['appendChild'](_0x5042f7);
        _0xc605e0['onclick'] = () => {
            _0x53b153 = _0x39ef1a;
            localStorage['setItem']('selectedEyes', _0x39ef1a);
            _0x2eb0ff['querySelectorAll']('.skin-btn')['forEach'](_0x4b7359 => _0x4b7359['classList']['remove']('selected'));
            _0xc605e0['classList']['add']('selected');
        };
        _0x2eb0ff['appendChild'](_0xc605e0);
    });
}
function _0x2cf781(_0x37f432) {
    if (!_0xa2417d['MAP']['columns'] || !_0xa2417d['CAMERA']['width'])
        return;
    const _0x5663b5 = Math['max'](0x0, _0xa2417d['MAP']['columns'] * _0xa2417d['MAP']['tileSize'] - _0xa2417d['CAMERA']['width']);
    const _0x1f7192 = Math['max'](0x0, _0xa2417d['MAP']['rows'] * _0xa2417d['MAP']['tileSize'] - _0xa2417d['CAMERA']['height']);
    if (_0x229d4d === null) {
        _0x229d4d = _0x5663b5 / 0x2;
        _0x496f56 = _0x1f7192 / 0x2;
    }
    _0x229d4d += _0x1c2dd6 * _0x37f432;
    _0x496f56 += _0x5b4cc9 * _0x37f432;
    if (_0x229d4d <= 0x0) {
        _0x229d4d = 0x0;
        _0x1c2dd6 = Math['abs'](_0x1c2dd6);
    } else if (_0x229d4d >= _0x5663b5) {
        _0x229d4d = _0x5663b5;
        _0x1c2dd6 = -Math['abs'](_0x1c2dd6);
    }
    if (_0x496f56 <= 0x0) {
        _0x496f56 = 0x0;
        _0x5b4cc9 = Math['abs'](_0x5b4cc9);
    } else if (_0x496f56 >= _0x1f7192) {
        _0x496f56 = _0x1f7192;
        _0x5b4cc9 = -Math['abs'](_0x5b4cc9);
    }
    _0xa2417d['CAMERA']['x'] = _0x229d4d;
    _0xa2417d['CAMERA']['y'] = _0x496f56;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x307fa1 = document['getElementById']('play-btn');
    const _0x17fc52 = document['getElementById']('username-input');
    const _0x1ee12f = localStorage['getItem']('playerName');
    if (_0x1ee12f && _0x17fc52) {
        _0x17fc52['value'] = _0x1ee12f;
    }
    const _0x518409 = () => {
        _0xc4e784['play']('wait');
        document['removeEventListener']('click', _0x518409);
        document['removeEventListener']('keydown', _0x518409);
        document['removeEventListener']('touchstart', _0x518409);
    };
    document['addEventListener']('click', _0x518409, { 'once': !![] });
    document['addEventListener']('keydown', _0x518409, { 'once': !![] });
    document['addEventListener']('touchstart', _0x518409, { 'once': !![] });
    if (_0x307fa1) {
        _0x307fa1['addEventListener']('click', () => {
            const _0x4b358f = window['_FB'] && window['_FB']['_currentUser'];
            const _0xbea8e3 = window['_FB'] && window['_FB']['_userData'];
            let _0x268ade = !![];
            if (_0x4b358f && _0xbea8e3 && _0xbea8e3['username']) {
                _0x57a6b7 = _0xbea8e3['username'];
                _0x268ade = ![];
            } else {
                const _0x2eabf6 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x57a6b7 = 'user' + _0x2eabf6;
                _0x268ade = !![];
            }
            const _0x2fbe28 = _0x268ade ? 'body01.png' : _0x54739e;
            const _0x5284d8 = _0x268ade ? 'eyes4.png' : _0x53b153;
            const _0xa3690c = !_0x268ade && _0xbea8e3 && _0xbea8e3['photoURL'] ? _0xbea8e3['photoURL'] : '';
            const _0x2a6643 = !_0x268ade && _0x4b358f ? _0x4b358f['uid'] : '';
            localStorage['setItem']('playerName', _0x57a6b7);
            _0x321f38 = ![];
            _0xa2417d['CAMERA']['x'] = null;
            _0xa2417d['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x31df79 = document['getElementById']('chat-log-wrap');
            if (_0x31df79)
                _0x31df79['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x4e0103 = document['getElementById']('controls-hint');
            if (_0x4e0103 && !_0x3c58ba)
                _0x4e0103['style']['display'] = 'block';
            _0xea39d8();
            if (_0x3c58ba) {
                const _0x3b5797 = document['getElementById']('leaderboard-list');
                const _0x11322e = document['getElementById']('leaderboard-toggle');
                if (_0x3b5797) {
                    _0x3b5797['style']['display'] = 'none';
                    if (_0x11322e)
                        _0x11322e['style']['transform'] = 'rotate(180deg)';
                }
                const _0x6fbb52 = document['getElementById']('role-list-items');
                const _0x54314a = document['getElementById']('role-list-toggle');
                if (_0x6fbb52) {
                    _0x6fbb52['style']['display'] = 'none';
                    if (_0x54314a)
                        _0x54314a['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x31bb3d = !_0x268ade && _0xbea8e3 ? {
                'townWins': _0xbea8e3['townWins'] || 0x0,
                'mafiaWins': _0xbea8e3['mafiaWins'] || 0x0,
                'deaths': _0xbea8e3['deaths'] || 0x0,
                'townLosses': _0xbea8e3['townLosses'] || 0x0,
                'mafiaLosses': _0xbea8e3['mafiaLosses'] || 0x0
            } : null;
            const _0x2584e9 = JSON['stringify']({
                'type': 'join',
                'name': _0x57a6b7,
                'token': _0x378845,
                'body': _0x2fbe28,
                'eyes': _0x5284d8,
                'isGuest': _0x268ade,
                'uid': _0x2a6643,
                'photoURL': _0xa3690c,
                'accountStats': _0x31bb3d
            });
            if (_0x295c3d && _0x295c3d['readyState'] === WebSocket['OPEN']) {
                _0x295c3d['send'](_0x2584e9);
            } else if (!_0x295c3d || _0x295c3d['readyState'] === WebSocket['CLOSED'] || _0x295c3d['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x2584e9;
                _0x350209();
            }
        });
    }
    _0x1fb964();
    _0x350209();
    _0x46374f();
    _0x1ed301();
    _0x6b486c();
});
function _0x1ed301() {
    const _0x514d03 = document['getElementById']('settings-btn');
    const _0x5514d7 = document['getElementById']('settings-panel');
    const _0x459943 = document['getElementById']('close-settings-btn');
    const _0x2fa29e = document['getElementById']('setting-mouse-relative');
    if (_0x2fa29e) {
        _0x2fa29e['checked'] = _0x5ceac7;
        _0x2fa29e['addEventListener']('change', () => {
            _0x5ceac7 = _0x2fa29e['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x5ceac7 ? 'true' : 'false');
        });
    }
    const _0x558161 = document['getElementById']('setting-music-volume');
    const _0x1552d0 = document['getElementById']('setting-music-volume-display');
    function _0x45d9bb(_0x18c6b6) {
        const _0x3be50a = (_0x18c6b6['value'] - _0x18c6b6['min']) / (_0x18c6b6['max'] - _0x18c6b6['min']) * 0x64;
        _0x18c6b6['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x3be50a + '%,\x20#444\x20' + _0x3be50a + '%)';
    }
    if (_0x558161) {
        const _0x1b048e = _0xc4e784['getVolume']();
        const _0x59ee8e = Math['round'](_0x1b048e * 0x64);
        _0x558161['value'] = _0x59ee8e;
        if (_0x1552d0)
            _0x1552d0['textContent'] = _0x59ee8e + '%';
        _0x45d9bb(_0x558161);
        _0x558161['addEventListener']('input', () => {
            const _0x1ea424 = parseInt(_0x558161['value'], 0xa);
            if (_0x1552d0)
                _0x1552d0['textContent'] = _0x1ea424 + '%';
            _0x45d9bb(_0x558161);
            _0xc4e784['setVolume'](_0x1ea424 / 0x64);
            _0xc4e784['setMuted'](_0x1ea424 === 0x0);
        });
    }
    if (_0x514d03 && _0x5514d7) {
        _0x514d03['addEventListener']('click', _0x3c9877 => {
            _0x3c9877['stopPropagation']();
            _0x5514d7['style']['display'] = _0x5514d7['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x459943 && _0x5514d7) {
        _0x459943['addEventListener']('click', () => {
            _0x5514d7['style']['display'] = 'none';
        });
    }
    const _0x3752a1 = document['getElementById']('mayor-confirm-yes');
    const _0x10cad1 = document['getElementById']('mayor-confirm-no');
    const _0x28a93c = document['getElementById']('mayor-confirm-dialog');
    if (_0x3752a1 && _0x28a93c) {
        _0x3752a1['addEventListener']('click', () => {
            if (_0x295c3d && _0x295c3d['readyState'] === WebSocket['OPEN']) {
                _0x295c3d['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x28a93c['style']['display'] = 'none';
        });
    }
    if (_0x10cad1 && _0x28a93c) {
        _0x10cad1['addEventListener']('click', () => {
            _0x28a93c['style']['display'] = 'none';
        });
    }
    const _0xeefbc1 = document['getElementById']('close-ability-btn');
    if (_0xeefbc1) {
        _0xeefbc1['addEventListener']('click', () => {
            const _0x468021 = document['getElementById']('ability-ui');
            if (_0x468021)
                _0x468021['style']['display'] = 'none';
        });
    }
}
let _0x1aec7d = '';
function _0x52c372(_0x3cb184) {
    const _0x451474 = document['getElementById']('vote-tally-panel');
    const _0x1385ec = document['getElementById']('vote-tally-list');
    if (!_0x451474 || !_0x1385ec)
        return;
    if (_0x3cb184['state'] !== 'DAY_VOTE') {
        _0x451474['style']['display'] = 'none';
        _0x1aec7d = '';
        return;
    }
    _0x451474['style']['display'] = 'block';
    const _0x41d053 = {};
    for (const _0x5baeca in _0x52df60) {
        if (!_0x52df60[_0x5baeca]['isDead'])
            _0x41d053[_0x5baeca] = 0x0;
    }
    if (_0x362fbd && !_0x234c7d['isDead'])
        _0x41d053[_0x362fbd] = 0x0;
    const _0x407938 = _0x3cb184['votes'] || {};
    for (const _0x4fdf35 in _0x407938) {
        const _0x4e4d12 = _0x407938[_0x4fdf35];
        const _0x1b06ff = _0x3cb184['mayorRevealed'] && _0x3cb184['mayorRevealed'][_0x4fdf35] ? 0x2 : 0x1;
        _0x41d053[_0x4e4d12] = (_0x41d053[_0x4e4d12] || 0x0) + _0x1b06ff;
    }
    let _0x1f85a4 = 0x0;
    const _0x129c7f = _0x3cb184['skips'] || {};
    for (const _0x5071d7 in _0x129c7f) {
        _0x1f85a4 += Number(_0x129c7f[_0x5071d7]) || 0x1;
    }
    const _0x10e321 = JSON['stringify'](_0x41d053) + '_' + _0x1f85a4 + '_' + _0x234c7d['isDead'];
    if (_0x10e321 === _0x1aec7d)
        return;
    _0x1aec7d = _0x10e321;
    _0x1385ec['innerHTML'] = '';
    for (const _0x47922f in _0x41d053) {
        const _0x153edc = parseInt(_0x47922f);
        const _0x5d3a22 = _0x153edc === _0x362fbd ? _0x57a6b7 : _0x52df60[_0x47922f] ? _0x52df60[_0x47922f]['name'] : 'Player\x20' + _0x47922f;
        const _0x27cd5f = document['createElement']('div');
        _0x27cd5f['className'] = 'vote-tally-entry';
        const _0x29d5cf = document['createElement']('span');
        _0x29d5cf['textContent'] = _0x5d3a22;
        const _0xd17c2d = document['createElement']('span');
        _0xd17c2d['className'] = 'vote-count';
        _0xd17c2d['textContent'] = _0x41d053[_0x47922f] + '\x20vote' + (_0x41d053[_0x47922f] === 0x1 ? '' : 's');
        _0x27cd5f['appendChild'](_0x29d5cf);
        _0x27cd5f['appendChild'](_0xd17c2d);
        if (_0x153edc !== _0x362fbd && !_0x234c7d['isDead']) {
            _0x27cd5f['style']['cursor'] = 'pointer';
            _0x27cd5f['title'] = 'Vote\x20for\x20' + _0x5d3a22;
            _0x27cd5f['addEventListener']('click', _0x313f41 => {
                _0x313f41['stopPropagation']();
                if (_0x295c3d && _0x295c3d['readyState'] === WebSocket['OPEN']) {
                    _0x295c3d['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x5d3a22
                    }));
                }
            });
        }
        _0x1385ec['appendChild'](_0x27cd5f);
    }
    const _0x5abe82 = document['createElement']('div');
    _0x5abe82['className'] = 'vote-tally-skip';
    _0x5abe82['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x1f85a4 + '</span>';
    if (!_0x234c7d['isDead']) {
        _0x5abe82['style']['cursor'] = 'pointer';
        _0x5abe82['title'] = 'Click\x20to\x20skip\x20vote';
        _0x5abe82['addEventListener']('click', _0x11b046 => {
            _0x11b046['stopPropagation']();
            if (_0x295c3d && _0x295c3d['readyState'] === WebSocket['OPEN']) {
                _0x295c3d['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x1385ec['appendChild'](_0x5abe82);
}
let _0x20d003 = null;
let _0xa5062f = null;
let _0x5a5cf5 = null;
function _0x446c7d() {
    if (_0x295c3d && _0x295c3d['readyState'] === WebSocket['OPEN']) {
        _0x295c3d['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x20d003,
            'abilityTarget': _0xa5062f,
            'killTarget': _0x5a5cf5
        }));
    }
}
function _0x57e164() {
    const _0x2f6369 = document['getElementById']('ability-ui-body');
    if (!_0x2f6369)
        return;
    _0x2f6369['innerHTML'] = '';
    if (_0x3cfa61 === 'Celebrity' || _0x3cfa61 === 'Mayor') {
        const _0x42a88e = document['createElement']('div');
        _0x42a88e['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x42a88e['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x2f6369['appendChild'](_0x42a88e);
        return;
    }
    if (_0x3cfa61 === 'Skinwalker') {
        const _0x178252 = document['createElement']('div');
        _0x178252['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x178252['innerText'] = 'Transform\x20into:';
        _0x2f6369['appendChild'](_0x178252);
        const _0x3cfe46 = document['createElement']('div');
        _0x3cfe46['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x28dc76 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x845194 = _0x323728 => {
            if (_0xa2417d['ROLES_IN_GAME'] && Array['isArray'](_0xa2417d['ROLES_IN_GAME'])) {
                return _0xa2417d['ROLES_IN_GAME']['includes'](_0x323728);
            }
            if (_0xa2417d['ROLE_LIST_RAW'] && _0xa2417d['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0xa2417d['ROLE_LIST_RAW']['some'](_0x8921ea => _0x8921ea['name'] === _0x323728 && !_0x8921ea['isDead']);
            }
            return ![];
        };
        const _0x3bd0a6 = [
            'None',
            ..._0x28dc76['filter'](_0x845194)
        ];
        _0x3bd0a6['forEach'](_0x2f917c => {
            const _0x164f97 = document['createElement']('button');
            _0x164f97['className'] = 'layer-btn';
            _0x164f97['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x164f97['innerText'] = _0x2f917c;
            const _0x9cdcd = _0x2f917c === 'None' && !_0x20d003 || _0x20d003 === _0x2f917c;
            if (_0x9cdcd)
                _0x164f97['classList']['add']('active');
            _0x164f97['onclick'] = () => {
                _0x20d003 = _0x2f917c === 'None' ? null : _0x2f917c;
                _0x446c7d();
                _0x57e164();
            };
            _0x3cfe46['appendChild'](_0x164f97);
        });
        _0x2f6369['appendChild'](_0x3cfe46);
        if (_0x845194('Vigilante')) {
            const _0x209cd3 = document['createElement']('div');
            _0x209cd3['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x209cd3['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x2f6369['appendChild'](_0x209cd3);
        }
        if (_0x20d003 === 'Vigilante') {
            const _0x557101 = document['createElement']('div');
            _0x557101['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x557101['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x2f6369['appendChild'](_0x557101);
        } else if (_0x20d003 && _0x20d003 !== 'Celebrity') {
            const _0x472211 = document['createElement']('div');
            _0x472211['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x472211['innerText'] = 'Use\x20' + _0x20d003 + '\x20ability\x20on:';
            _0x2f6369['appendChild'](_0x472211);
            const _0x4559a0 = document['createElement']('div');
            _0x4559a0['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x55d425 = document['createElement']('button');
            _0x55d425['className'] = 'layer-btn';
            _0x55d425['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x55d425['innerText'] = 'No\x20one';
            if (!_0xa5062f)
                _0x55d425['classList']['add']('active');
            _0x55d425['onclick'] = () => {
                _0xa5062f = null;
                _0x446c7d();
                _0x57e164();
            };
            _0x4559a0['appendChild'](_0x55d425);
            for (const _0x2e2751 in _0x52df60) {
                const _0x5517cc = _0x52df60[_0x2e2751];
                if (_0x5517cc['isDead'])
                    continue;
                const _0x23beb4 = document['createElement']('button');
                _0x23beb4['className'] = 'layer-btn';
                _0x23beb4['innerText'] = _0x5517cc['name'];
                if (_0xa5062f === parseInt(_0x2e2751))
                    _0x23beb4['classList']['add']('active');
                _0x23beb4['onclick'] = () => {
                    _0xa5062f = parseInt(_0x2e2751);
                    _0x446c7d();
                    _0x57e164();
                };
                _0x4559a0['appendChild'](_0x23beb4);
            }
            _0x2f6369['appendChild'](_0x4559a0);
        }
        const _0x3e3b20 = document['createElement']('div');
        _0x3e3b20['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x3e3b20['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x2f6369['appendChild'](_0x3e3b20);
        const _0xdde91 = document['createElement']('div');
        _0xdde91['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x404de6 = document['createElement']('button');
        _0x404de6['className'] = 'layer-btn';
        _0x404de6['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x404de6['innerText'] = 'No\x20one';
        if (!_0x5a5cf5 && !_0xa2417d['CURRENT_TARGET'])
            _0x404de6['classList']['add']('active');
        _0x404de6['onclick'] = () => {
            _0x5a5cf5 = null;
            _0xa2417d['CURRENT_TARGET'] = null;
            _0x446c7d();
            _0x57e164();
        };
        _0xdde91['appendChild'](_0x404de6);
        for (const _0x1f0570 in _0x52df60) {
            const _0x20b0dc = _0x52df60[_0x1f0570];
            if (_0x20b0dc['isDead'])
                continue;
            const _0x149fb4 = document['createElement']('button');
            _0x149fb4['className'] = 'layer-btn';
            _0x149fb4['innerText'] = _0x20b0dc['name'];
            if (_0x5a5cf5 === parseInt(_0x1f0570) || _0xa2417d['CURRENT_TARGET'] === parseInt(_0x1f0570))
                _0x149fb4['classList']['add']('active');
            _0x149fb4['onclick'] = () => {
                _0x5a5cf5 = parseInt(_0x1f0570);
                _0xa2417d['CURRENT_TARGET'] = parseInt(_0x1f0570);
                _0x446c7d();
                _0x57e164();
            };
            _0xdde91['appendChild'](_0x149fb4);
        }
        _0x2f6369['appendChild'](_0xdde91);
        return;
    }
    let _0x5c7a47 = '';
    let _0x59402f = ![];
    if (_0x3cfa61 === 'Doctor') {
        _0x5c7a47 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x59402f = !![];
    } else if (_0x3cfa61 === 'Investigator') {
        _0x5c7a47 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x3cfa61 === 'Tracker') {
        _0x5c7a47 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x3cfa61 === 'Archer') {
        _0x5c7a47 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x3cfa61 === 'Escort') {
        _0x5c7a47 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x3cfa61 === 'Vigilante') {
        _0x5c7a47 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0xaa2423 = document['createElement']('div');
    _0xaa2423['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0xaa2423['innerText'] = _0x5c7a47;
    _0x2f6369['appendChild'](_0xaa2423);
    const _0x1286c4 = document['createElement']('div');
    _0x1286c4['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x5bfa09 = document['createElement']('button');
    _0x5bfa09['className'] = 'layer-btn';
    _0x5bfa09['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x5bfa09['innerText'] = 'No\x20one';
    if (_0xa2417d['CURRENT_TARGET'] === null)
        _0x5bfa09['classList']['add']('active');
    _0x5bfa09['onclick'] = () => {
        _0xa2417d['CURRENT_TARGET'] = null;
        if (_0x295c3d && _0x295c3d['readyState'] === WebSocket['OPEN']) {
            _0x295c3d['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x57e164();
    };
    _0x1286c4['appendChild'](_0x5bfa09);
    for (const _0x5755c6 in _0x52df60) {
        const _0x5f126c = _0x52df60[_0x5755c6];
        if (_0x5f126c['isDead'])
            continue;
        const _0x372bdc = document['createElement']('button');
        _0x372bdc['className'] = 'layer-btn';
        _0x372bdc['innerText'] = _0x5f126c['name'];
        if (_0xa2417d['CURRENT_TARGET'] === parseInt(_0x5755c6))
            _0x372bdc['classList']['add']('active');
        _0x372bdc['onclick'] = () => {
            _0xa2417d['CURRENT_TARGET'] = parseInt(_0x5755c6);
            if (_0x295c3d && _0x295c3d['readyState'] === WebSocket['OPEN']) {
                _0x295c3d['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x5755c6)
                }));
            }
            _0x57e164();
        };
        _0x1286c4['appendChild'](_0x372bdc);
    }
    if (_0x59402f && !_0x234c7d['isDead']) {
        const _0x26cbf4 = document['createElement']('button');
        _0x26cbf4['className'] = 'layer-btn';
        _0x26cbf4['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x26cbf4['innerText'] = _0x57a6b7 + '\x20(Self)';
        if (_0xa2417d['CURRENT_TARGET'] === _0x362fbd)
            _0x26cbf4['classList']['add']('active');
        _0x26cbf4['onclick'] = () => {
            _0xa2417d['CURRENT_TARGET'] = _0x362fbd;
            if (_0x295c3d && _0x295c3d['readyState'] === WebSocket['OPEN']) {
                _0x295c3d['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x362fbd
                }));
            }
            _0x57e164();
        };
        _0x1286c4['appendChild'](_0x26cbf4);
    }
    _0x2f6369['appendChild'](_0x1286c4);
}
function _0x350209() {
    if (_0x295c3d && (_0x295c3d['readyState'] === WebSocket['OPEN'] || _0x295c3d['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x58d7f5 = new URLSearchParams();
    if (_0x378845)
        _0x58d7f5['set']('token', _0x378845);
    _0x58d7f5['set']('ngrok-skip-browser-warning', 'true');
    const _0x5c6867 = 'wss://this-studying-motherboard-emissions.trycloudflare.com';
    const _0x92f39a = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x5c6867;
    const _0x5a5970 = _0x92f39a + '/?' + _0x58d7f5['toString']();
    _0x295c3d = new WebSocket(_0x5a5970);
    _0x295c3d['onopen'] = function () {
        if (!_0x321f38 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x4cf5b3 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x3353dc = window['_FB'] && window['_FB']['_userData'];
                const _0x290e03 = !(_0x4cf5b3 && _0x3353dc && _0x3353dc['username']);
                const _0x53a878 = _0x290e03 ? 'body01.png' : _0x54739e;
                const _0x6ccf0e = _0x290e03 ? 'eyes4.png' : _0x53b153;
                const _0x4bed28 = !_0x290e03 && _0x3353dc && _0x3353dc['photoURL'] ? _0x3353dc['photoURL'] : '';
                const _0x130381 = !_0x290e03 && _0x4cf5b3 ? _0x4cf5b3['uid'] : '';
                const _0x35500a = !_0x290e03 && _0x3353dc ? {
                    'townWins': _0x3353dc['townWins'] || 0x0,
                    'mafiaWins': _0x3353dc['mafiaWins'] || 0x0,
                    'deaths': _0x3353dc['deaths'] || 0x0,
                    'townLosses': _0x3353dc['townLosses'] || 0x0,
                    'mafiaLosses': _0x3353dc['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x57a6b7,
                    'token': _0x378845,
                    'body': _0x53a878,
                    'eyes': _0x6ccf0e,
                    'isGuest': _0x290e03,
                    'uid': _0x130381,
                    'photoURL': _0x4bed28,
                    'accountStats': _0x35500a
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x295c3d && _0x295c3d['readyState'] === WebSocket['OPEN']) {
            _0x295c3d['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x295c3d['onclose'] = _0x2560eb => {
        if (_0x2560eb['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x2560eb['code'] === 0xfa2 || _0x2560eb['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x2afe68 = document['getElementById']('disconnect-overlay');
        if (!_0x2afe68) {
            _0x2afe68 = document['createElement']('div');
            _0x2afe68['id'] = 'disconnect-overlay';
            _0x2afe68['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x2afe68['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x2afe68);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x295c3d['onmessage'] = _0x1eb6d6 => {
        const _0x809abb = JSON['parse'](_0x1eb6d6['data']);
        if (_0x809abb['type'] === 'map_data') {
            _0xa2417d['MAP']['tileSize'] = _0x809abb['map']['tileSize'];
            _0xa2417d['MAP']['columns'] = _0x809abb['map']['columns'];
            _0xa2417d['MAP']['rows'] = _0x809abb['map']['rows'];
            _0xa2417d['MAP']['layers'] = _0x809abb['map']['layers'];
            if (_0x809abb['map']['doors']) {
                _0xa2417d['MAP']['doors'] = _0x809abb['map']['doors'];
                const _0x5e1bba = _0xa2417d['MAP']['layers']['find'](_0x315b48 => _0x315b48['name'] === 'floor2');
                if (_0x5e1bba) {
                    for (const _0x2ada80 in _0xa2417d['MAP']['doors']) {
                        _0x5e1bba['data'][parseInt(_0x2ada80)] = 0x2;
                    }
                }
            }
            if (_0x809abb['entities'])
                _0xa2417d['ENTITIES'] = _0x809abb['entities'];
            _0x1776d3();
            _0xa2417d['SYSTEM']['isReady'] = !![];
            _0x51d6a1();
            if (!_0xa2417d['SYSTEM']['_gameLoopRunning']) {
                _0xa2417d['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0xaa0b14);
            }
            return;
        }
        if (_0x809abb['type'] === 'init') {
            _0x362fbd = _0x809abb['id'];
            _0x321f38 = ![];
            _0xea39d8();
            if (_0x3c58ba) {
                const _0x33d634 = document['getElementById']('leaderboard-list');
                const _0x50a359 = document['getElementById']('leaderboard-toggle');
                if (_0x33d634) {
                    _0x33d634['style']['display'] = 'none';
                    if (_0x50a359)
                        _0x50a359['style']['transform'] = 'rotate(180deg)';
                }
                const _0x16c22f = document['getElementById']('role-list-items');
                const _0x7dc026 = document['getElementById']('role-list-toggle');
                if (_0x16c22f) {
                    _0x16c22f['style']['display'] = 'none';
                    if (_0x7dc026)
                        _0x7dc026['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x2bb082 = _0x809abb['isOwner'] || ![];
            _0x57a6b7 = _0x809abb['name'] || _0x57a6b7;
            _0xa2417d['MAP']['tileSize'] = _0x809abb['map']['tileSize'];
            _0xa2417d['MAP']['columns'] = _0x809abb['map']['columns'];
            _0xa2417d['MAP']['rows'] = _0x809abb['map']['rows'];
            _0xa2417d['MAP']['layers'] = _0x809abb['map']['layers'];
            if (_0x809abb['map']['doors']) {
                _0xa2417d['MAP']['doors'] = _0x809abb['map']['doors'];
                const _0x271c91 = _0xa2417d['MAP']['layers']['find'](_0x4f41f1 => _0x4f41f1['name'] === 'floor2');
                if (_0x271c91) {
                    for (const _0x47bac8 in _0xa2417d['MAP']['doors']) {
                        _0x271c91['data'][parseInt(_0x47bac8)] = 0x2;
                    }
                }
            }
            if (_0x809abb['entities'])
                _0xa2417d['ENTITIES'] = _0x809abb['entities'];
            _0x1776d3();
            _0x234c7d['x'] = _0xa2417d['MAP']['columns'] * _0xa2417d['MAP']['tileSize'] / 0x2;
            _0x234c7d['y'] = _0xa2417d['MAP']['rows'] * _0xa2417d['MAP']['tileSize'] / 0x2;
            _0xa2417d['CAMERA']['x'] = _0x234c7d['x'] + _0x234c7d['width'] / 0x2 - _0xa2417d['CAMERA']['width'] / 0x2;
            _0xa2417d['CAMERA']['y'] = _0x234c7d['y'] + _0x234c7d['height'] / 0x2 - _0xa2417d['CAMERA']['height'] / 0x2;
            if (_0x2bb082) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x9f2463();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0xa2417d['SYSTEM']['lastTime'] = performance['now']();
            _0xa2417d['SYSTEM']['isReady'] = !![];
            _0x271c8f();
            if (!_0xa2417d['SYSTEM']['_gameLoopRunning']) {
                _0xa2417d['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0xaa0b14);
            }
            return;
        } else if (_0x809abb['type'] === 'state') {
            const _0x1868f4 = {};
            for (const _0x454693 in _0x809abb['players']) {
                if (parseInt(_0x454693) === _0x362fbd)
                    continue;
                const _0x6a367 = _0x809abb['players'][_0x454693];
                const _0xc09bb0 = _0x52df60[_0x454693];
                if (_0xc09bb0) {
                    const _0x5045cd = _0x6a367['x'] - _0xc09bb0['renderX'];
                    const _0x1875d0 = _0x6a367['y'] - _0xc09bb0['renderY'];
                    const _0x5eaa3d = _0x5045cd * _0x5045cd + _0x1875d0 * _0x1875d0 > 0x78 * 0x78;
                    Object['assign'](_0xc09bb0, _0x6a367);
                    if (_0x5eaa3d) {
                        _0xc09bb0['renderX'] = _0x6a367['x'];
                        _0xc09bb0['renderY'] = _0x6a367['y'];
                    }
                    _0x1868f4[_0x454693] = _0xc09bb0;
                } else {
                    _0x1868f4[_0x454693] = {
                        ..._0x6a367,
                        'renderX': _0x6a367['x'],
                        'renderY': _0x6a367['y'],
                        'renderAngle': _0x6a367['angle'] || 0x0
                    };
                }
            }
            _0x52df60 = _0x1868f4;
            _0x19f299();
            if (_0x809abb['players'][_0x362fbd]) {
                const _0x24cacf = _0x809abb['players'][_0x362fbd];
                _0x234c7d['chats'] = _0x24cacf['chats'] || [];
                _0x234c7d['isDead'] = _0x24cacf['isDead'];
                if (_0x24cacf['name'])
                    _0x57a6b7 = _0x24cacf['name'];
                _0x271c8f();
                const _0x36f444 = Math['hypot'](_0x24cacf['x'] - _0x234c7d['x'], _0x24cacf['y'] - _0x234c7d['y']);
                if (_0x36f444 > 0xfa) {
                    _0x234c7d['x'] = _0x24cacf['x'];
                    _0x234c7d['y'] = _0x24cacf['y'];
                } else if (_0x36f444 > 0x50) {
                    _0x234c7d['x'] += (_0x24cacf['x'] - _0x234c7d['x']) * 0.06;
                    _0x234c7d['y'] += (_0x24cacf['y'] - _0x234c7d['y']) * 0.06;
                }
            }
            if (_0x809abb['entities'])
                _0xa2417d['ENTITIES'] = _0x809abb['entities'];
            if (_0x809abb['game']) {
                _0xa2417d['GAME_STATE'] = _0x809abb['game']['state'];
                _0xa2417d['NIGHT_ABILITY_OPEN'] = _0x809abb['game']['nightAbilityOpen'];
                if (_0x809abb['game']['mayorRevealed']) {
                    for (const _0x538c2e in _0x809abb['game']['mayorRevealed']) {
                        _0x300c6f['add'](parseInt(_0x538c2e));
                    }
                }
                if (_0xa2417d['LAST_STATE'] !== _0xa2417d['GAME_STATE']) {
                    if (_0xa2417d['GAME_STATE'] !== 'NIGHT') {
                        _0xa2417d['CURRENT_TARGET'] = null;
                        _0x20d003 = null;
                        _0xa5062f = null;
                        _0x5a5cf5 = null;
                        const _0x443199 = document['getElementById']('ability-ui');
                        if (_0x443199)
                            _0x443199['style']['display'] = 'none';
                    }
                    if (_0xa2417d['GAME_STATE'] === 'NIGHT') {
                        _0x234c7d['chats'] = [];
                        for (const _0x5d7abf in _0x52df60) {
                            _0x52df60[_0x5d7abf]['chats'] = [];
                        }
                    }
                    _0xa2417d['LAST_STATE'] = _0xa2417d['GAME_STATE'];
                    _0x454258();
                    _0xc4e784['onStateChange'](_0xa2417d['GAME_STATE'], _0x809abb['game']['nightAbilityOpen']);
                }
                const _0x42df01 = document['getElementById']('phase-ui');
                if (_0x42df01) {
                    if (_0x809abb['game']['state'] === 'LOBBY') {
                        _0x42df01['style']['display'] = 'none';
                    } else {
                        _0x42df01['style']['display'] = 'block';
                    }
                    let _0x49db89 = _0x809abb['game']['state']['replace']('_', '\x20');
                    if (_0x809abb['game']['state'] === 'DAY_DISCUSS') {
                        _0x49db89 = 'DAY\x20' + (_0x809abb['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x809abb['game']['timer'] + 's';
                    } else if (_0x809abb['game']['state'] === 'DAY_VOTE') {
                        _0x49db89 = 'DAY\x20' + (_0x809abb['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x809abb['game']['timer'] + 's';
                    } else if (_0x809abb['game']['state'] === 'NIGHT') {
                        const _0x174656 = _0x809abb['game']['dayCount'] || 0x1;
                        if (_0x809abb['game']['nightAbilityOpen']) {
                            _0x49db89 = 'NIGHT\x20' + _0x174656 + '\x20ABILITY\x20PHASE';
                            const _0x513057 = _0x809abb['game']['abilityTimer'] !== undefined ? _0x809abb['game']['abilityTimer'] : _0x809abb['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x513057 + 's';
                        } else {
                            _0x49db89 = 'NIGHT\x20' + _0x174656;
                            document['getElementById']('phase-timer')['innerText'] = _0x809abb['game']['timer'] + 's';
                        }
                    }
                    if (_0x809abb['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x49db89;
                    }
                }
                if (_0x809abb['game']['state'] === 'NIGHT') {
                    const _0x5715fd = document['getElementById']('ability-timer-label');
                    if (_0x5715fd) {
                        const _0x4cefde = _0x809abb['game']['abilityTimer'] !== undefined ? _0x809abb['game']['abilityTimer'] : _0x809abb['game']['timer'];
                        _0x5715fd['innerText'] = _0x809abb['game']['nightAbilityOpen'] ? _0x4cefde + 's' : '';
                    }
                    if (_0x809abb['game']['nightAbilityOpen'] && !_0x475975 && !_0x234c7d['isDead']) {
                        _0x475975 = !![];
                        _0x57e164();
                        const _0x6d8d0d = document['getElementById']('ability-ui');
                        if (_0x6d8d0d)
                            _0x6d8d0d['style']['display'] = 'block';
                    }
                    if (!_0x809abb['game']['nightAbilityOpen']) {
                        const _0x320542 = document['getElementById']('ability-ui');
                        if (_0x320542 && _0x320542['style']['display'] === 'block') {
                            _0x320542['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x475975 = ![];
                }
                if (_0x809abb['game']['rolesInGame']) {
                    _0xa2417d['ROLES_IN_GAME'] = _0x809abb['game']['rolesInGame'];
                }
                if (_0x809abb['game']['state'] === 'NIGHT') {
                    const _0xece990 = document['getElementById']('will-ui');
                    if (_0xece990 && _0xece990['style']['display'] === 'flex') {
                        _0xece990['style']['display'] = 'none';
                        const _0x25557e = document['getElementById']('will-input');
                        if (_0x25557e)
                            _0x25557e['blur']();
                    }
                }
                _0x52c372(_0x809abb['game']);
                if (_0x809abb['game']['roleListMode'] !== undefined) {
                    _0xa2417d['ROLE_LIST_RAW'] = _0x809abb['game']['roleList'] || [];
                    _0x443077(_0x809abb['game']['roleList'], _0x809abb['game']['roleListMode']);
                }
            }
        } else if (_0x809abb['type'] === 'teleport') {
            _0x234c7d['x'] = _0x809abb['x'];
            _0x234c7d['y'] = _0x809abb['y'];
            _0x234c7d['vx'] = 0x0;
            _0x234c7d['vy'] = 0x0;
            _0xa2417d['CAMERA']['x'] = null;
            if (_0x809abb['teleportId'] !== undefined)
                _0x455998 = _0x809abb['teleportId'];
        } else if (_0x809abb['type'] === 'bulk_teleport') {
            for (const _0x4acdee in _0x809abb['positions']) {
                const _0x4bad94 = _0x809abb['positions'][_0x4acdee];
                if (parseInt(_0x4acdee) === _0x362fbd) {
                    _0x234c7d['x'] = _0x4bad94['x'];
                    _0x234c7d['y'] = _0x4bad94['y'];
                    _0x234c7d['vx'] = 0x0;
                    _0x234c7d['vy'] = 0x0;
                    _0xa2417d['CAMERA']['x'] = null;
                    continue;
                }
                const _0x39463b = _0x52df60[_0x4acdee];
                if (_0x39463b) {
                    _0x39463b['x'] = _0x4bad94['x'];
                    _0x39463b['y'] = _0x4bad94['y'];
                    _0x39463b['renderX'] = _0x4bad94['x'];
                    _0x39463b['renderY'] = _0x4bad94['y'];
                    _0x39463b['vx'] = 0x0;
                    _0x39463b['vy'] = 0x0;
                }
            }
        } else if (_0x809abb['type'] === 'player_left') {
            delete _0x52df60[_0x809abb['id']];
            _0x300c6f['delete'](parseInt(_0x809abb['id']));
        } else if (_0x809abb['type'] === 'map_update') {
            const _0x1024cd = _0xa2417d['MAP']['layers']['find'](_0x34f0d5 => _0x34f0d5['name'] === _0x809abb['layer']);
            if (_0x1024cd) {
                _0x1024cd['data'][_0x809abb['row'] * _0xa2417d['MAP']['columns'] + _0x809abb['col']] = _0x809abb['gid'];
                const _0x4e0afd = _0x809abb['row'] * _0xa2417d['MAP']['columns'] + _0x809abb['col'];
                if (_0xa2417d['MAP']['doors'] && _0xa2417d['MAP']['doors'][_0x4e0afd]) {
                    const _0x1ad868 = _0xa2417d['MAP']['layers']['find'](_0x5ad9af => _0x5ad9af['name'] === 'floor2');
                    if (_0x1ad868)
                        _0x1ad868['data'][_0x4e0afd] = 0x2;
                }
                const _0x1ba8df = Math['floor'](_0x809abb['col'] * _0xa2417d['MAP']['tileSize'] / _0xa2417d['MAP']['chunkSize']);
                const _0x4ef921 = Math['floor'](_0x809abb['row'] * _0xa2417d['MAP']['tileSize'] / _0xa2417d['MAP']['chunkSize']);
                _0x178daa(_0x1ba8df, _0x4ef921);
            }
        } else if (_0x809abb['type'] === 'role_assign') {
            _0x3cfa61 = _0x809abb['role'];
            _0x234c7d['isDead'] = _0x3cfa61 === 'Spectator';
            _0x300c6f['clear']();
            _0xa2417d['CURRENT_TARGET'] = null;
            _0x20d003 = null;
            _0xa5062f = null;
            _0x5a5cf5 = null;
            _0x475975 = ![];
            const _0x485541 = document['getElementById']('ability-ui');
            if (_0x485541)
                _0x485541['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x3cfa61;
            _0x454258();
            _0x4b70fd(_0x3cfa61 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x3cfa61, !![]);
            let _0x2c4f38 = '';
            if (_0x3cfa61 === 'Investigator')
                _0x2c4f38 = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x3cfa61 === 'Tracker')
                _0x2c4f38 = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x3cfa61 === 'Doctor')
                _0x2c4f38 = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x3cfa61 === 'Archer')
                _0x2c4f38 = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x3cfa61 === 'Escort')
                _0x2c4f38 = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x3cfa61 === 'Vigilante')
                _0x2c4f38 = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x3cfa61 === 'Skinwalker')
                _0x2c4f38 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x3cfa61 === 'Celebrity')
                _0x2c4f38 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x3cfa61 === 'Mayor')
                _0x2c4f38 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x4b70fd(_0x2c4f38, !![]);
        } else if (_0x809abb['type'] === 'mayor_reveal') {
            _0x300c6f['add'](parseInt(_0x809abb['playerId']));
            _0x271c8f();
            _0x454258();
        } else if (_0x809abb['type'] === 'rolelist_update') {
            _0xa2417d['ROLE_LIST_RAW'] = _0x809abb['list'] || [];
            _0x443077(_0x809abb['list'], _0x809abb['mode']);
        } else if (_0x809abb['type'] === 'sound_event') {
            _0xc4e784['onSoundEvent'](_0x809abb['track']);
        } else if (_0x809abb['type'] === 'day_fade') {
            _0x2472a4 = 0x1;
            _0x4b9ba9 = performance['now']() + 0x3e8;
        } else if (_0x809abb['type'] === 'player_stats_updated') {
            const _0xe1c034 = parseInt(_0x809abb['id']);
            if (_0xe1c034 === _0x362fbd && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x809abb['accountStats']);
            }
            if (_0x52df60[_0x809abb['id']]) {
                _0x52df60[_0x809abb['id']]['accountStats'] = _0x809abb['accountStats'];
            }
            _0x19f299();
        } else if (_0x809abb['type'] === 'stats_update') {
            const _0x4ca822 = window['_FB'];
            if (_0x4ca822 && _0x4ca822['_currentUser'] && _0x4ca822['_userData']) {
                const _0x1d0221 = _0x4ca822['_currentUser']['uid'];
                const _0x73a572 = _0x809abb['patch'] || {};
                const _0x3ee06e = _0x4ca822['_userData'];
                const _0xa3c5ac = {
                    'townWins': (_0x3ee06e['townWins'] || 0x0) + (_0x73a572['townWins'] || 0x0),
                    'mafiaWins': (_0x3ee06e['mafiaWins'] || 0x0) + (_0x73a572['mafiaWins'] || 0x0),
                    'deaths': (_0x3ee06e['deaths'] || 0x0) + (_0x73a572['deaths'] || 0x0),
                    'townLosses': (_0x3ee06e['townLosses'] || 0x0) + (_0x73a572['townLosses'] || 0x0),
                    'mafiaLosses': (_0x3ee06e['mafiaLosses'] || 0x0) + (_0x73a572['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x4ca822['_userData'], _0xa3c5ac);
                const _0x43d30a = _0x4ca822['doc'](_0x4ca822['db'], 'users', _0x1d0221);
                _0x4ca822['updateDoc'](_0x43d30a, _0xa3c5ac)['catch'](() => {
                });
                if (_0x295c3d && _0x295c3d['readyState'] === WebSocket['OPEN']) {
                    _0x295c3d['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0xa3c5ac
                    }));
                }
                _0x19f299();
            }
        } else if (_0x809abb['type'] === 'game_over') {
            _0xc4e784['onStateChange']('LOBBY', ![]);
            _0x443077([], 'off');
            _0x3cfa61 = null;
            _0x234c7d['isDead'] = ![];
            _0x300c6f['clear']();
            _0xa2417d['CURRENT_TARGET'] = null;
            _0x20d003 = null;
            _0xa5062f = null;
            _0x5a5cf5 = null;
            _0x475975 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x454258();
            _0x4b70fd('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x809abb['type'] === 'chat_log') {
            _0x4b70fd(_0x809abb['sender'] + ':\x20' + _0x809abb['text']);
        } else if (_0x809abb['type'] === 'sys_chat') {
            _0x4b70fd(_0x809abb['text'], !![]);
        }
    };
}
function _0x4b70fd(_0x27db49, _0x3c0edd = ![]) {
    const _0x3a1eed = document['getElementById']('chat-log-messages');
    const _0x546917 = document['getElementById']('chat-log-ui');
    const _0x15eeb5 = _0x546917['scrollHeight'] - _0x546917['scrollTop'] - _0x546917['clientHeight'] < 0x1e;
    const _0x44e356 = document['createElement']('div');
    _0x44e356['className'] = 'chat-log-line' + (_0x3c0edd ? '\x20sys-msg' : '');
    _0x44e356['innerText'] = _0x27db49;
    _0x3a1eed['appendChild'](_0x44e356);
    if (_0x15eeb5) {
        _0x546917['scrollTop'] = _0x546917['scrollHeight'];
    }
    if (_0x3a1eed['childElementCount'] > 0xc8) {
        _0x3a1eed['removeChild'](_0x3a1eed['firstChild']);
    }
}
function _0x1a4b30(_0x9008ff, _0x25341d, _0x27abde) {
    const _0x406680 = document['createElement']('canvas');
    _0x406680['width'] = _0x27abde;
    _0x406680['height'] = _0x27abde;
    const _0x1509b3 = _0x406680['getContext']('2d');
    _0x1509b3['imageSmoothingEnabled'] = ![];
    const _0x14408d = 'assets/' + (_0x9008ff || 'body01.png');
    const _0x3a102b = _0x411892(_0x14408d);
    if (_0x3a102b['complete'] && _0x3a102b['naturalWidth'] > 0x0)
        _0x1509b3['drawImage'](_0x3a102b, 0x0, 0x0, _0x27abde, _0x27abde);
    if (_0x25341d) {
        const _0x78647 = 'assets/' + _0x25341d;
        const _0x1b5d81 = _0x411892(_0x78647);
        if (_0x1b5d81['complete'] && _0x1b5d81['naturalWidth'] > 0x0)
            _0x1509b3['drawImage'](_0x1b5d81, 0x0, 0x0, _0x27abde, _0x27abde);
    }
    return _0x406680['toDataURL']();
}
let _0x1b504e = '';
function _0x19f299() {
    const _0x1f40f4 = document['getElementById']('chat-profile-panel');
    if (!_0x1f40f4)
        return;
    const _0x517048 = [];
    if (_0x362fbd !== null) {
        const _0x3b1e63 = _0x54739e || 'body01.png';
        const _0x5c7e4c = _0x53b153 || 'eyes4.png';
        const _0x34c64e = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x517048['push']({
            'id': _0x362fbd,
            'name': _0x57a6b7,
            'body': _0x3b1e63,
            'eyes': _0x5c7e4c,
            'stats': _0x34c64e
        });
    }
    for (const _0x2e9144 in _0x52df60) {
        const _0xcb9964 = _0x52df60[_0x2e9144];
        const _0x44e613 = _0xcb9964['accountStats'] || null;
        _0x517048['push']({
            'id': parseInt(_0x2e9144),
            'name': _0xcb9964['name'],
            'body': _0xcb9964['body'] || 'body01.png',
            'eyes': _0xcb9964['eyes'] || 'eyes4.png',
            'stats': _0x44e613
        });
    }
    const _0x332cea = _0x517048['map'](_0x35888b => _0x35888b['id'] + '_' + _0x35888b['name'] + '_' + _0x35888b['body'] + '_' + _0x35888b['eyes'] + '_' + JSON['stringify'](_0x35888b['stats']))['join']('|');
    if (_0x332cea === _0x1b504e)
        return;
    _0x1b504e = _0x332cea;
    _0x1f40f4['innerHTML'] = '';
    let _0x408826 = ![];
    for (const _0x950c3 of _0x517048) {
        _0x408826 = !![];
        const _0x2f63ae = _0x1a4b30(_0x950c3['body'], _0x950c3['eyes'], 0x20);
        const _0x51c869 = document['createElement']('div');
        _0x51c869['className'] = 'chat-pfp-entry';
        const _0x54be2e = document['createElement']('img');
        _0x54be2e['src'] = _0x2f63ae;
        _0x54be2e['alt'] = _0x950c3['name'];
        _0x51c869['appendChild'](_0x54be2e);
        const _0xb9326d = document['createElement']('div');
        _0xb9326d['className'] = 'chat-pfp-tooltip';
        let _0x58df16 = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x950c3['name'] + '</div>';
        const _0x15d39a = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x512968 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x3adf26 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x10e177 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x5e61bd = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x47c3cf = (_0x5501cb, _0xacda41, _0x1d4738, _0x4b1046) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x5501cb + '<span\x20style=\x22flex:1;color:' + _0x4b1046 + ';\x22>' + _0xacda41 + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x1d4738 + '</span></div>';
        if (_0x950c3['stats']) {
            _0x58df16 += _0x47c3cf(_0x15d39a, 'Town\x20Wins', _0x950c3['stats']['townWins'] || 0x0, '#55ee77');
            _0x58df16 += _0x47c3cf(_0x512968, 'Mafia\x20Wins', _0x950c3['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x58df16 += _0x47c3cf(_0x3adf26, 'Deaths', _0x950c3['stats']['deaths'] || 0x0, '#aaa');
            _0x58df16 += _0x47c3cf(_0x10e177, 'Town\x20Losses', _0x950c3['stats']['townLosses'] || 0x0, '#6688aa');
            _0x58df16 += _0x47c3cf(_0x5e61bd, 'Mafia\x20Losses', _0x950c3['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x58df16 += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0xb9326d['innerHTML'] = _0x58df16;
        _0x51c869['appendChild'](_0xb9326d);
        _0x1f40f4['appendChild'](_0x51c869);
    }
    const _0x2772a1 = document['getElementById']('chat-log-wrap');
    if (_0x2772a1) {
        if (_0x408826) {
            _0x2772a1['classList']['add']('has-profiles');
            _0x1f40f4['style']['display'] = 'flex';
        } else {
            _0x2772a1['classList']['remove']('has-profiles');
            _0x1f40f4['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x19f299;
let _0x32d524 = -0x1, _0x7b5fb9 = -0x1, _0x2829aa = -0x1, _0x6fd1c8 = 0x0;
function _0x35857f() {
    if (!_0x362fbd || !_0x295c3d || _0x295c3d['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x4fb116 = performance['now']();
    const _0x44bcc5 = _0x4fb116 - _0x6fd1c8;
    const _0x5c38db = Math['abs'](_0x234c7d['x'] - _0x32d524) > 0.05 || Math['abs'](_0x234c7d['y'] - _0x7b5fb9) > 0.05 || Math['abs'](_0x234c7d['angle'] - _0x2829aa) > 0.02;
    if (!_0x5c38db && _0x44bcc5 < 0xc8)
        return;
    if (_0x44bcc5 < 0x19)
        return;
    _0x6fd1c8 = _0x4fb116;
    _0x32d524 = _0x234c7d['x'];
    _0x7b5fb9 = _0x234c7d['y'];
    _0x2829aa = _0x234c7d['angle'];
    if (!_0x362fbd || !_0x295c3d || _0x295c3d['readyState'] !== WebSocket['OPEN'])
        return;
    _0x295c3d['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x234c7d['x'],
        'y': _0x234c7d['y'],
        'vx': _0x234c7d['vx'],
        'vy': _0x234c7d['vy'],
        'angle': _0x234c7d['angle'],
        'scale': _0x234c7d['scale'],
        'teleportId': _0x455998,
        'clientTimestamp': Date['now']()
    }));
}
function _0x3d3c55() {
    if (_0x234c7d['isDead'])
        return;
    const _0x39b3ac = _0xa2417d['MAP']['layers']['find'](_0x6ce9c0 => _0x6ce9c0['name'] === 'walls');
    if (!_0x39b3ac)
        return;
    const _0x26f11f = _0x234c7d['scale'];
    const _0x4cd807 = _0x234c7d['width'] * _0x26f11f / 0x2;
    for (let _0x3948ee = 0x0; _0x3948ee < 0x3; _0x3948ee++) {
        let _0x129570 = _0x234c7d['x'] + _0x234c7d['width'] / 0x2;
        let _0x3ef2c8 = _0x234c7d['y'] + _0x234c7d['height'] / 0x2;
        const _0x36c2f8 = Math['floor']((_0x129570 - _0x4cd807) / _0xa2417d['MAP']['tileSize']);
        const _0xe334e3 = Math['floor']((_0x129570 + _0x4cd807) / _0xa2417d['MAP']['tileSize']);
        const _0x501bca = Math['floor']((_0x3ef2c8 - _0x4cd807) / _0xa2417d['MAP']['tileSize']);
        const _0x591e20 = Math['floor']((_0x3ef2c8 + _0x4cd807) / _0xa2417d['MAP']['tileSize']);
        for (let _0x104c06 = _0x501bca; _0x104c06 <= _0x591e20; _0x104c06++) {
            for (let _0x4b0927 = _0x36c2f8; _0x4b0927 <= _0xe334e3; _0x4b0927++) {
                if (_0x4b0927 < 0x0 || _0x4b0927 >= _0xa2417d['MAP']['columns'] || _0x104c06 < 0x0 || _0x104c06 >= _0xa2417d['MAP']['rows'])
                    continue;
                if (_0x39b3ac['data'][_0x104c06 * _0xa2417d['MAP']['columns'] + _0x4b0927] === 0x0)
                    continue;
                const _0x28396d = _0x4b0927 * _0xa2417d['MAP']['tileSize'];
                const _0x95af87 = _0x104c06 * _0xa2417d['MAP']['tileSize'];
                const _0x2c5004 = _0x129570 < _0x28396d ? _0x28396d : _0x129570 > _0x28396d + _0xa2417d['MAP']['tileSize'] ? _0x28396d + _0xa2417d['MAP']['tileSize'] : _0x129570;
                const _0x4bac08 = _0x3ef2c8 < _0x95af87 ? _0x95af87 : _0x3ef2c8 > _0x95af87 + _0xa2417d['MAP']['tileSize'] ? _0x95af87 + _0xa2417d['MAP']['tileSize'] : _0x3ef2c8;
                const _0x2deea4 = _0x129570 - _0x2c5004;
                const _0x1a606c = _0x3ef2c8 - _0x4bac08;
                const _0x43c929 = Math['sqrt'](_0x2deea4 * _0x2deea4 + _0x1a606c * _0x1a606c);
                if (_0x43c929 < _0x4cd807) {
                    if (_0x43c929 === 0x0) {
                        const _0x37b306 = _0x129570 - _0x28396d;
                        const _0x5076c7 = _0x28396d + _0xa2417d['MAP']['tileSize'] - _0x129570;
                        const _0x34ce98 = _0x3ef2c8 - _0x95af87;
                        const _0x239d6d = _0x95af87 + _0xa2417d['MAP']['tileSize'] - _0x3ef2c8;
                        const _0x396858 = Math['min'](_0x37b306, _0x5076c7, _0x34ce98, _0x239d6d);
                        if (_0x396858 === _0x37b306)
                            _0x129570 = _0x28396d - _0x4cd807;
                        else if (_0x396858 === _0x5076c7)
                            _0x129570 = _0x28396d + _0xa2417d['MAP']['tileSize'] + _0x4cd807;
                        else if (_0x396858 === _0x34ce98)
                            _0x3ef2c8 = _0x95af87 - _0x4cd807;
                        else
                            _0x3ef2c8 = _0x95af87 + _0xa2417d['MAP']['tileSize'] + _0x4cd807;
                    } else {
                        const _0x4214e4 = _0x4cd807 - _0x43c929;
                        _0x129570 += _0x2deea4 / _0x43c929 * _0x4214e4;
                        _0x3ef2c8 += _0x1a606c / _0x43c929 * _0x4214e4;
                        const _0x18aa13 = _0x234c7d['vx'] * (_0x2deea4 / _0x43c929) + _0x234c7d['vy'] * (_0x1a606c / _0x43c929);
                        if (_0x18aa13 < 0x0) {
                            _0x234c7d['vx'] -= _0x18aa13 * (_0x2deea4 / _0x43c929);
                            _0x234c7d['vy'] -= _0x18aa13 * (_0x1a606c / _0x43c929);
                        }
                    }
                }
            }
        }
        _0x234c7d['x'] = _0x129570 - _0x234c7d['width'] / 0x2;
        _0x234c7d['y'] = _0x3ef2c8 - _0x234c7d['height'] / 0x2;
    }
}
function _0x5b5dff(_0x86e810) {
    const _0x1fc57f = _0xa2417d['MAP']['layers']['find'](_0x6bda8 => _0x6bda8['name'] === 'walls');
    if (!_0x1fc57f)
        return;
    const _0x2b5198 = _0x86e810['width'] / 0x2;
    for (let _0x551422 = 0x0; _0x551422 < 0x2; _0x551422++) {
        let _0x1577a7 = _0x86e810['x'] + _0x86e810['width'] / 0x2;
        let _0x37f4b0 = _0x86e810['y'] + _0x86e810['height'] / 0x2;
        const _0x31200c = Math['floor']((_0x1577a7 - _0x2b5198) / _0xa2417d['MAP']['tileSize']);
        const _0xbfd9a3 = Math['floor']((_0x1577a7 + _0x2b5198) / _0xa2417d['MAP']['tileSize']);
        const _0x1fdc61 = Math['floor']((_0x37f4b0 - _0x2b5198) / _0xa2417d['MAP']['tileSize']);
        const _0x41856d = Math['floor']((_0x37f4b0 + _0x2b5198) / _0xa2417d['MAP']['tileSize']);
        for (let _0x3603ea = _0x1fdc61; _0x3603ea <= _0x41856d; _0x3603ea++) {
            for (let _0x5791ef = _0x31200c; _0x5791ef <= _0xbfd9a3; _0x5791ef++) {
                if (_0x5791ef < 0x0 || _0x5791ef >= _0xa2417d['MAP']['columns'] || _0x3603ea < 0x0 || _0x3603ea >= _0xa2417d['MAP']['rows'])
                    continue;
                if (_0x1fc57f['data'][_0x3603ea * _0xa2417d['MAP']['columns'] + _0x5791ef] === 0x0)
                    continue;
                const _0x5c4a24 = _0x5791ef * _0xa2417d['MAP']['tileSize'];
                const _0xe92b52 = _0x3603ea * _0xa2417d['MAP']['tileSize'];
                const _0x42244f = _0x1577a7 < _0x5c4a24 ? _0x5c4a24 : _0x1577a7 > _0x5c4a24 + _0xa2417d['MAP']['tileSize'] ? _0x5c4a24 + _0xa2417d['MAP']['tileSize'] : _0x1577a7;
                const _0x3405c6 = _0x37f4b0 < _0xe92b52 ? _0xe92b52 : _0x37f4b0 > _0xe92b52 + _0xa2417d['MAP']['tileSize'] ? _0xe92b52 + _0xa2417d['MAP']['tileSize'] : _0x37f4b0;
                const _0x2069ad = _0x1577a7 - _0x42244f;
                const _0x55b0f6 = _0x37f4b0 - _0x3405c6;
                const _0x565a17 = Math['sqrt'](_0x2069ad * _0x2069ad + _0x55b0f6 * _0x55b0f6);
                if (_0x565a17 < _0x2b5198) {
                    if (_0x565a17 === 0x0) {
                        const _0x1202f7 = _0x1577a7 - _0x5c4a24;
                        const _0x1aef61 = _0x5c4a24 + _0xa2417d['MAP']['tileSize'] - _0x1577a7;
                        const _0x12672d = _0x37f4b0 - _0xe92b52;
                        const _0x50235e = _0xe92b52 + _0xa2417d['MAP']['tileSize'] - _0x37f4b0;
                        const _0x2e0384 = Math['min'](_0x1202f7, _0x1aef61, _0x12672d, _0x50235e);
                        if (_0x2e0384 === _0x1202f7)
                            _0x1577a7 = _0x5c4a24 - _0x2b5198;
                        else if (_0x2e0384 === _0x1aef61)
                            _0x1577a7 = _0x5c4a24 + _0xa2417d['MAP']['tileSize'] + _0x2b5198;
                        else if (_0x2e0384 === _0x12672d)
                            _0x37f4b0 = _0xe92b52 - _0x2b5198;
                        else
                            _0x37f4b0 = _0xe92b52 + _0xa2417d['MAP']['tileSize'] + _0x2b5198;
                    } else {
                        const _0x1ed667 = _0x2b5198 - _0x565a17;
                        _0x1577a7 += _0x2069ad / _0x565a17 * _0x1ed667;
                        _0x37f4b0 += _0x55b0f6 / _0x565a17 * _0x1ed667;
                    }
                }
            }
        }
        _0x86e810['x'] = _0x1577a7 - _0x86e810['width'] / 0x2;
        _0x86e810['y'] = _0x37f4b0 - _0x86e810['height'] / 0x2;
    }
}
function _0x4856c4(_0x1f4eaa) {
    const _0x3ec6e6 = _0x1f4eaa['width'] / 0x2;
    for (let _0x366ce5 = 0x0; _0x366ce5 < 0x2; _0x366ce5++) {
        let _0x14d47f = _0x1f4eaa['x'] + _0x1f4eaa['width'] / 0x2;
        let _0x4478af = _0x1f4eaa['y'] + _0x1f4eaa['height'] / 0x2;
        for (const _0x1bc5a0 of _0xa2417d['ENTITIES']) {
            const _0x4ab4ce = _0x14d47f < _0x1bc5a0['x'] ? _0x1bc5a0['x'] : _0x14d47f > _0x1bc5a0['x'] + _0x1bc5a0['w'] ? _0x1bc5a0['x'] + _0x1bc5a0['w'] : _0x14d47f;
            const _0x509811 = _0x4478af < _0x1bc5a0['y'] ? _0x1bc5a0['y'] : _0x4478af > _0x1bc5a0['y'] + _0x1bc5a0['h'] ? _0x1bc5a0['y'] + _0x1bc5a0['h'] : _0x4478af;
            const _0x39afa2 = _0x14d47f - _0x4ab4ce;
            const _0x5df88a = _0x4478af - _0x509811;
            const _0x1a5a08 = Math['sqrt'](_0x39afa2 * _0x39afa2 + _0x5df88a * _0x5df88a);
            if (_0x1a5a08 < _0x3ec6e6 && _0x1a5a08 > 0x0) {
                const _0x5087b1 = _0x3ec6e6 - _0x1a5a08;
                const _0x3854fa = _0x39afa2 / _0x1a5a08;
                const _0x37870a = _0x5df88a / _0x1a5a08;
                _0x14d47f += _0x3854fa * _0x5087b1;
                _0x4478af += _0x37870a * _0x5087b1;
            } else if (_0x1a5a08 === 0x0) {
                const _0x2f4015 = _0x14d47f - _0x1bc5a0['x'];
                const _0x430ee2 = _0x1bc5a0['x'] + _0x1bc5a0['w'] - _0x14d47f;
                const _0x56f1be = _0x4478af - _0x1bc5a0['y'];
                const _0x23826 = _0x1bc5a0['y'] + _0x1bc5a0['h'] - _0x4478af;
                const _0x1f938e = Math['min'](_0x2f4015, _0x430ee2, _0x56f1be, _0x23826);
                if (_0x1f938e === _0x2f4015)
                    _0x14d47f = _0x1bc5a0['x'] - _0x3ec6e6;
                else if (_0x1f938e === _0x430ee2)
                    _0x14d47f = _0x1bc5a0['x'] + _0x1bc5a0['w'] + _0x3ec6e6;
                else if (_0x1f938e === _0x56f1be)
                    _0x4478af = _0x1bc5a0['y'] - _0x3ec6e6;
                else
                    _0x4478af = _0x1bc5a0['y'] + _0x1bc5a0['h'] + _0x3ec6e6;
            }
        }
        _0x1f4eaa['x'] = _0x14d47f - _0x1f4eaa['width'] / 0x2;
        _0x1f4eaa['y'] = _0x4478af - _0x1f4eaa['height'] / 0x2;
    }
}
function _0x54f227() {
    if (_0x234c7d['isDead'])
        return;
    const _0x4261f1 = _0x234c7d['width'] / 0x2;
    const _0x33a5e1 = _0x234c7d['x'] + _0x234c7d['width'] / 0x2;
    const _0x41702e = _0x234c7d['y'] + _0x234c7d['height'] / 0x2;
    for (const _0x44fe42 in _0x52df60) {
        const _0x220e62 = _0x52df60[_0x44fe42];
        if (_0x220e62['isDead'])
            continue;
        const _0x573a9f = _0x220e62['width'] / 0x2;
        const _0x330d52 = _0x4261f1 + _0x573a9f;
        const _0x518382 = (_0x220e62['renderX'] ?? _0x220e62['x']) + _0x220e62['width'] / 0x2;
        const _0x1ead5e = (_0x220e62['renderY'] ?? _0x220e62['y']) + _0x220e62['height'] / 0x2;
        const _0xa600e7 = _0x33a5e1 - _0x518382;
        const _0x1c3f77 = _0x41702e - _0x1ead5e;
        const _0x5ba4c5 = Math['sqrt'](_0xa600e7 * _0xa600e7 + _0x1c3f77 * _0x1c3f77);
        if (_0x5ba4c5 > 0x0 && _0x5ba4c5 < _0x330d52) {
            const _0xe052dc = _0x330d52 - _0x5ba4c5;
            const _0x2d802b = _0xa600e7 / _0x5ba4c5;
            const _0x58dd11 = _0x1c3f77 / _0x5ba4c5;
            _0x234c7d['x'] += _0x2d802b * (_0xe052dc * 0.25);
            _0x234c7d['y'] += _0x58dd11 * (_0xe052dc * 0.25);
            _0x220e62['x'] -= _0x2d802b * (_0xe052dc * 0.75);
            _0x220e62['y'] -= _0x58dd11 * (_0xe052dc * 0.75);
            _0x5b5dff(_0x220e62);
            _0x4856c4(_0x220e62);
            if (_0x220e62['renderX'] !== undefined) {
                _0x220e62['renderX'] = _0x220e62['x'];
                _0x220e62['renderY'] = _0x220e62['y'];
            }
            const _0x2b9c4e = _0x234c7d['vx'] * _0x2d802b + _0x234c7d['vy'] * _0x58dd11;
            if (_0x2b9c4e < 0x0) {
                _0x234c7d['vx'] -= _0x2b9c4e * _0x2d802b * 0.25;
                _0x234c7d['vy'] -= _0x2b9c4e * _0x58dd11 * 0.25;
            }
        }
    }
    _0x3d3c55();
    _0x398b7d();
}
function _0x398b7d() {
    if (_0x234c7d['isDead'])
        return;
    const _0x24649e = _0x234c7d['scale'];
    const _0x4cf8ab = _0x234c7d['width'] * _0x24649e / 0x2;
    for (let _0x512875 = 0x0; _0x512875 < 0x2; _0x512875++) {
        let _0x6b5bd8 = _0x234c7d['x'] + _0x234c7d['width'] / 0x2;
        let _0x597b71 = _0x234c7d['y'] + _0x234c7d['height'] / 0x2;
        for (const _0x3391bc of _0xa2417d['ENTITIES']) {
            const _0x298e01 = _0x6b5bd8 < _0x3391bc['x'] ? _0x3391bc['x'] : _0x6b5bd8 > _0x3391bc['x'] + _0x3391bc['w'] ? _0x3391bc['x'] + _0x3391bc['w'] : _0x6b5bd8;
            const _0x50b30a = _0x597b71 < _0x3391bc['y'] ? _0x3391bc['y'] : _0x597b71 > _0x3391bc['y'] + _0x3391bc['h'] ? _0x3391bc['y'] + _0x3391bc['h'] : _0x597b71;
            const _0x1c95f8 = _0x6b5bd8 - _0x298e01;
            const _0x39fecc = _0x597b71 - _0x50b30a;
            const _0x190aa7 = Math['sqrt'](_0x1c95f8 * _0x1c95f8 + _0x39fecc * _0x39fecc);
            if (_0x190aa7 < _0x4cf8ab && _0x190aa7 > 0x0) {
                const _0x1dff99 = _0x4cf8ab - _0x190aa7;
                const _0x49b2a2 = _0x1c95f8 / _0x190aa7;
                const _0x37a1f6 = _0x39fecc / _0x190aa7;
                _0x6b5bd8 += _0x49b2a2 * _0x1dff99;
                _0x597b71 += _0x37a1f6 * _0x1dff99;
                const _0x13ea0d = _0x234c7d['vx'] * _0x49b2a2 + _0x234c7d['vy'] * _0x37a1f6;
                if (_0x13ea0d < 0x0) {
                    _0x234c7d['vx'] -= _0x13ea0d * _0x49b2a2;
                    _0x234c7d['vy'] -= _0x13ea0d * _0x37a1f6;
                }
            } else if (_0x190aa7 === 0x0) {
                const _0x2ea2ce = _0x6b5bd8 - _0x3391bc['x'];
                const _0x310c94 = _0x3391bc['x'] + _0x3391bc['w'] - _0x6b5bd8;
                const _0x420f07 = _0x597b71 - _0x3391bc['y'];
                const _0x5b751e = _0x3391bc['y'] + _0x3391bc['h'] - _0x597b71;
                const _0x57d471 = Math['min'](_0x2ea2ce, _0x310c94, _0x420f07, _0x5b751e);
                if (_0x57d471 === _0x2ea2ce)
                    _0x6b5bd8 = _0x3391bc['x'] - _0x4cf8ab;
                else if (_0x57d471 === _0x310c94)
                    _0x6b5bd8 = _0x3391bc['x'] + _0x3391bc['w'] + _0x4cf8ab;
                else if (_0x57d471 === _0x420f07)
                    _0x597b71 = _0x3391bc['y'] - _0x4cf8ab;
                else
                    _0x597b71 = _0x3391bc['y'] + _0x3391bc['h'] + _0x4cf8ab;
            }
        }
        _0x234c7d['x'] = _0x6b5bd8 - _0x234c7d['width'] / 0x2;
        _0x234c7d['y'] = _0x597b71 - _0x234c7d['height'] / 0x2;
    }
}
function _0x5847b4(_0x21aab6, _0x24fe8e) {
    const _0x543d8e = _0xa2417d['MAP']['layers']['find'](_0x55f087 => _0x55f087['name'] === 'trees');
    if (!_0x543d8e)
        return ![];
    const _0xe4306b = Math['floor'](_0x21aab6 / _0xa2417d['MAP']['tileSize']);
    const _0x3da37a = Math['floor'](_0x24fe8e / _0xa2417d['MAP']['tileSize']);
    if (_0xe4306b < 0x0 || _0xe4306b >= _0xa2417d['MAP']['columns'] || _0x3da37a < 0x0 || _0x3da37a >= _0xa2417d['MAP']['rows'])
        return ![];
    return _0x543d8e['data'][_0x3da37a * _0xa2417d['MAP']['columns'] + _0xe4306b] === 0xb;
}
let _0x36753a = null;
function _0x2db732() {
    const _0x40b345 = _0xa2417d['MAP'];
    const _0x58f723 = _0x40b345['layers']['find'](_0x3f6094 => _0x3f6094['name'] === 'floor2');
    const _0xd7682c = _0x40b345['layers']['find'](_0x2a8c3a => _0x2a8c3a['name'] === 'walls');
    if (!_0x58f723 || !_0xd7682c) {
        _0x36753a = null;
        return;
    }
    const _0x21a8ac = _0x40b345['columns'];
    const _0x1c2803 = _0x40b345['rows'];
    const _0x41e996 = [];
    const _0x3b2226 = [];
    const _0x1071db = new Set();
    for (let _0x367434 = 0x0; _0x367434 < _0x1c2803; _0x367434++) {
        for (let _0x3eb67f = 0x0; _0x3eb67f < _0x21a8ac; _0x3eb67f++) {
            const _0x76bd51 = _0x367434 * _0x21a8ac + _0x3eb67f;
            const _0x4e0416 = _0x58f723['data'][_0x76bd51];
            const _0x135f8c = _0xd7682c['data'][_0x76bd51];
            if (_0x4e0416 === 0x2 || _0x4e0416 === 0x4) {
                _0x41e996['push']({
                    'c': _0x3eb67f,
                    'r': _0x367434
                });
                if (_0x135f8c !== 0x0)
                    _0x3b2226['push']({
                        'c': _0x3eb67f,
                        'r': _0x367434
                    });
            }
            if (_0x135f8c !== 0x0)
                _0x1071db['add'](_0x3eb67f + ',' + _0x367434);
        }
    }
    const _0x3c37fa = new Set(_0x41e996['map'](_0x4d422b => _0x4d422b['c'] + ',' + _0x4d422b['r']));
    const _0xfa9122 = [
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
                c: _0x48815d,
                r: _0x454623
            } of _0x41e996) {
        for (const [_0xb0422c, _0x1d66a8] of _0xfa9122) {
            const _0x1b3f40 = _0x48815d + _0xb0422c, _0x502f55 = _0x454623 + _0x1d66a8;
            const _0x4c2b20 = _0x1b3f40 + ',' + _0x502f55;
            if (!_0x3c37fa['has'](_0x4c2b20))
                _0x1071db['add'](_0x4c2b20);
        }
    }
    _0x36753a = {
        'wallSet': _0x1071db,
        'floorTiles': _0x41e996,
        'wallTiles': _0x3b2226,
        'interiorSet': _0x3c37fa
    };
}
function _0x1ae2c8() {
    const _0x1f0a03 = _0xa2417d['MAP']['layers']['find'](_0x7b3f2d => _0x7b3f2d['name'] === 'floor2');
    if (!_0x1f0a03)
        return ![];
    const _0x68cf8f = Math['floor']((_0x234c7d['x'] + _0x234c7d['width'] / 0x2) / _0xa2417d['MAP']['tileSize']);
    const _0x27c73a = Math['floor']((_0x234c7d['y'] + _0x234c7d['height'] / 0x2) / _0xa2417d['MAP']['tileSize']);
    if (_0x68cf8f < 0x0 || _0x68cf8f >= _0xa2417d['MAP']['columns'] || _0x27c73a < 0x0 || _0x27c73a >= _0xa2417d['MAP']['rows'])
        return ![];
    const _0x385e69 = _0x1f0a03['data'][_0x27c73a * _0xa2417d['MAP']['columns'] + _0x68cf8f];
    return _0x385e69 === 0x2;
}
let _0x2282e1 = null, _0x235b67 = null;
function _0x93f7c2() {
    if (_0x234c7d['isDead']) {
        _0xa2417d['SHADOW']['polygon'] = null;
        _0x2282e1 = null;
        return;
    }
    const _0x2d4f1b = _0xa2417d['MAP'];
    const _0xa2483b = _0xa2417d['SHADOW'];
    const _0x5aab84 = _0x2d4f1b['tileSize'];
    if (!_0x36753a)
        _0x2db732();
    if (!_0x36753a) {
        _0xa2483b['polygon'] = null;
        _0x2282e1 = null;
        return;
    }
    const {
        wallSet: _0x147112,
        floorTiles: _0x4ab746
    } = _0x36753a;
    if (_0x4ab746['length'] === 0x0) {
        _0xa2483b['polygon'] = null;
        _0x2282e1 = null;
        return;
    }
    if (!_0x1ae2c8()) {
        _0xa2483b['polygon'] = null;
        _0x2282e1 = null;
        return;
    }
    const _0x348e1b = _0x234c7d['x'] + _0x234c7d['width'] / 0x2;
    const _0x17cd20 = _0x234c7d['y'] + _0x234c7d['height'] / 0x2;
    if (_0x2282e1 !== null && _0xa2483b['polygon'] && Math['hypot'](_0x348e1b - _0x2282e1, _0x17cd20 - _0x235b67) < 0x1) {
        return;
    }
    _0x2282e1 = _0x348e1b;
    _0x235b67 = _0x17cd20;
    const _0x16257f = Math['floor'](_0x348e1b / _0x5aab84);
    const _0x5e1d23 = Math['floor'](_0x17cd20 / _0x5aab84);
    const _0x54e228 = Math['max'](0x0, _0x16257f - 0x6);
    const _0x5291a5 = Math['min'](_0x2d4f1b['columns'] - 0x1, _0x16257f + 0x6);
    const _0x1b6ddd = Math['max'](0x0, _0x5e1d23 - 0x6);
    const _0x574879 = Math['min'](_0x2d4f1b['rows'] - 0x1, _0x5e1d23 + 0x6);
    const _0x303dc = [];
    for (let _0x32e7b7 = _0x1b6ddd; _0x32e7b7 <= _0x574879; _0x32e7b7++) {
        for (let _0x16697c = _0x54e228; _0x16697c <= _0x5291a5; _0x16697c++) {
            if (_0x147112['has'](_0x16697c + ',' + _0x32e7b7))
                _0x303dc['push'](_0x16697c, _0x32e7b7);
        }
    }
    const _0x35b22f = 0.001;
    const _0x26cf62 = new Set();
    const _0x44b67d = [];
    for (let _0x304bb1 = 0x0; _0x304bb1 < _0x303dc['length']; _0x304bb1 += 0x2) {
        const _0x323233 = _0x303dc[_0x304bb1], _0x267f69 = _0x303dc[_0x304bb1 + 0x1];
        const _0x201b7 = [
            _0x323233 * _0x5aab84,
            _0x267f69 * _0x5aab84,
            _0x323233 * _0x5aab84 + _0x5aab84,
            _0x267f69 * _0x5aab84,
            _0x323233 * _0x5aab84,
            _0x267f69 * _0x5aab84 + _0x5aab84,
            _0x323233 * _0x5aab84 + _0x5aab84,
            _0x267f69 * _0x5aab84 + _0x5aab84
        ];
        for (let _0x29101a = 0x0; _0x29101a < _0x201b7['length']; _0x29101a += 0x2) {
            const _0x21d696 = _0x201b7[_0x29101a], _0x96fdb8 = _0x201b7[_0x29101a + 0x1];
            const _0x38a13f = Math['atan2'](_0x96fdb8 - _0x17cd20, _0x21d696 - _0x348e1b);
            const _0x3f5520 = Math['round'](_0x38a13f * 0x4e20);
            if (!_0x26cf62['has'](_0x3f5520 - 0x1)) {
                _0x26cf62['add'](_0x3f5520 - 0x1);
                _0x44b67d['push'](_0x38a13f - _0x35b22f);
            }
            if (!_0x26cf62['has'](_0x3f5520)) {
                _0x26cf62['add'](_0x3f5520);
                _0x44b67d['push'](_0x38a13f);
            }
            if (!_0x26cf62['has'](_0x3f5520 + 0x1)) {
                _0x26cf62['add'](_0x3f5520 + 0x1);
                _0x44b67d['push'](_0x38a13f + _0x35b22f);
            }
        }
    }
    _0x44b67d['sort']((_0x2c7d44, _0x16e0aa) => _0x2c7d44 - _0x16e0aa);
    const _0x22ba7b = 0xc * _0x5aab84;
    const _0x45f5cc = _0x5e6850 => {
        const _0x28e19e = Math['cos'](_0x5e6850);
        const _0x245bd5 = Math['sin'](_0x5e6850);
        let _0x454de0 = _0x22ba7b;
        for (let _0x5df7c5 = 0x0; _0x5df7c5 < _0x303dc['length']; _0x5df7c5 += 0x2) {
            const _0x2038e3 = _0x303dc[_0x5df7c5], _0x288733 = _0x303dc[_0x5df7c5 + 0x1];
            const _0x16484b = _0x2038e3 * _0x5aab84, _0x153310 = _0x288733 * _0x5aab84;
            const _0x19cb77 = _0x16484b + _0x5aab84, _0xfee460 = _0x153310 + _0x5aab84;
            const _0x436d41 = _0x16484b + _0x5aab84 * 0.5, _0xff62ec = _0x153310 + _0x5aab84 * 0.5;
            const _0x34ce9a = Math['abs'](_0x436d41 - _0x348e1b) + Math['abs'](_0xff62ec - _0x17cd20);
            if (_0x34ce9a > _0x454de0 + _0x5aab84 * 1.5)
                continue;
            let _0x2f1c17, _0x4de0bc, _0x42587b;
            _0x2f1c17 = -_0x245bd5 * _0x5aab84;
            if (Math['abs'](_0x2f1c17) >= 1e-10) {
                _0x4de0bc = -(_0x153310 - _0x17cd20) * _0x5aab84 / _0x2f1c17;
                _0x42587b = ((_0x16484b - _0x348e1b) * _0x245bd5 - (_0x153310 - _0x17cd20) * _0x28e19e) / _0x2f1c17;
                if (_0x4de0bc > 0.001 && _0x42587b >= 0x0 && _0x42587b <= 0x1 && _0x4de0bc < _0x454de0)
                    _0x454de0 = _0x4de0bc;
            }
            _0x2f1c17 = _0x28e19e * _0x5aab84;
            if (Math['abs'](_0x2f1c17) >= 1e-10) {
                _0x4de0bc = (_0x19cb77 - _0x348e1b) * _0x5aab84 / _0x2f1c17;
                _0x42587b = ((_0x19cb77 - _0x348e1b) * _0x245bd5 - (_0x153310 - _0x17cd20) * _0x28e19e) / _0x2f1c17;
                if (_0x4de0bc > 0.001 && _0x42587b >= 0x0 && _0x42587b <= 0x1 && _0x4de0bc < _0x454de0)
                    _0x454de0 = _0x4de0bc;
            }
            _0x2f1c17 = _0x245bd5 * _0x5aab84;
            if (Math['abs'](_0x2f1c17) >= 1e-10) {
                _0x4de0bc = (_0xfee460 - _0x17cd20) * _0x5aab84 / _0x2f1c17;
                _0x42587b = ((_0x19cb77 - _0x348e1b) * _0x245bd5 - (_0xfee460 - _0x17cd20) * _0x28e19e) / _0x2f1c17;
                if (_0x4de0bc > 0.001 && _0x42587b >= 0x0 && _0x42587b <= 0x1 && _0x4de0bc < _0x454de0)
                    _0x454de0 = _0x4de0bc;
            }
            _0x2f1c17 = -_0x28e19e * _0x5aab84;
            if (Math['abs'](_0x2f1c17) >= 1e-10) {
                _0x4de0bc = -(_0x16484b - _0x348e1b) * _0x5aab84 / _0x2f1c17;
                _0x42587b = ((_0x16484b - _0x348e1b) * _0x245bd5 - (_0xfee460 - _0x17cd20) * _0x28e19e) / _0x2f1c17;
                if (_0x4de0bc > 0.001 && _0x42587b >= 0x0 && _0x42587b <= 0x1 && _0x4de0bc < _0x454de0)
                    _0x454de0 = _0x4de0bc;
            }
        }
        const _0x519914 = _0x454de0 < _0x22ba7b ? _0x454de0 + 0x2 : _0x454de0;
        return {
            'x': _0x348e1b + _0x28e19e * _0x519914,
            'y': _0x17cd20 + _0x245bd5 * _0x519914
        };
    };
    const _0x937c4a = [];
    for (let _0x58b02f = 0x0; _0x58b02f < _0x44b67d['length']; _0x58b02f++) {
        const _0x230c93 = _0x45f5cc(_0x44b67d[_0x58b02f]);
        _0x937c4a['push'](_0x230c93['x'], _0x230c93['y']);
    }
    _0xa2483b['polygon'] = _0x937c4a['length'] >= 0x6 ? _0x937c4a : null;
}
function _0x4f1cf2(_0x2f6a76, _0x3f5fa7, _0x2d90bf) {
    if (_0x234c7d['isDead'])
        return;
    if (!_0x36753a)
        return;
    const {
        floorTiles: _0x1a5d0a,
        wallTiles: _0x13a970
    } = _0x36753a;
    if (_0x1a5d0a['length'] === 0x0)
        return;
    const _0x54ad1a = _0xa2417d['SHADOW'];
    const _0x58e0a7 = _0xa2417d['MAP']['tileSize'];
    const _0x423650 = _0xa2417d['CAMERA']['width'];
    const _0x14c2a1 = _0xa2417d['CAMERA']['height'];
    if (!_0xa2417d['SHADOW']['_buf'] || _0xa2417d['SHADOW']['_buf']['width'] !== _0x423650 || _0xa2417d['SHADOW']['_buf']['height'] !== _0x14c2a1) {
        _0xa2417d['SHADOW']['_buf'] = document['createElement']('canvas');
        _0xa2417d['SHADOW']['_buf']['width'] = _0x423650;
        _0xa2417d['SHADOW']['_buf']['height'] = _0x14c2a1;
    }
    const _0x8f3020 = _0xa2417d['SHADOW']['_buf'];
    const _0x26ce31 = _0x8f3020['getContext']('2d');
    _0x26ce31['clearRect'](0x0, 0x0, _0x423650, _0x14c2a1);
    const _0x463bb6 = _0x234c7d['x'] + _0x234c7d['width'] / 0x2;
    const _0x599506 = _0x234c7d['y'] + _0x234c7d['height'] / 0x2;
    const _0x270013 = Math['floor'](_0x463bb6 / _0x58e0a7);
    const _0x1f8b9d = Math['floor'](_0x599506 / _0x58e0a7);
    _0x26ce31['fillStyle'] = 'rgba(0,0,0,0.92)';
    _0x26ce31['beginPath']();
    for (const {
                c: _0x5977d6,
                r: _0x2ee116
            } of _0x1a5d0a) {
        if (Math['abs'](_0x5977d6 - _0x270013) > 0x7 || Math['abs'](_0x2ee116 - _0x1f8b9d) > 0x7)
            continue;
        const _0x379f92 = Math['round'](_0x5977d6 * _0x58e0a7 - _0x3f5fa7), _0x5c891a = Math['round'](_0x2ee116 * _0x58e0a7 - _0x2d90bf);
        if (_0x379f92 > _0x423650 || _0x5c891a > _0x14c2a1 || _0x379f92 + _0x58e0a7 < 0x0 || _0x5c891a + _0x58e0a7 < 0x0)
            continue;
        _0x26ce31['rect'](_0x379f92, _0x5c891a, _0x58e0a7 + 0x1, _0x58e0a7 + 0x1);
    }
    _0x26ce31['fill']();
    if (_0x13a970['length'] > 0x0) {
        _0x26ce31['globalCompositeOperation'] = 'destination-out';
        _0x26ce31['fillStyle'] = 'rgba(0,0,0,1)';
        _0x26ce31['beginPath']();
        for (const {
                    c: _0x5918c3,
                    r: _0x184095
                } of _0x13a970) {
            if (Math['abs'](_0x5918c3 - _0x270013) > 0x7 || Math['abs'](_0x184095 - _0x1f8b9d) > 0x7)
                continue;
            const _0x1168d4 = Math['round'](_0x5918c3 * _0x58e0a7 - _0x3f5fa7), _0x9ec923 = Math['round'](_0x184095 * _0x58e0a7 - _0x2d90bf);
            if (_0x1168d4 > _0x423650 || _0x9ec923 > _0x14c2a1 || _0x1168d4 + _0x58e0a7 < 0x0 || _0x9ec923 + _0x58e0a7 < 0x0)
                continue;
            _0x26ce31['rect'](_0x1168d4, _0x9ec923, _0x58e0a7, _0x58e0a7);
        }
        _0x26ce31['fill']();
        _0x26ce31['globalCompositeOperation'] = 'source-over';
    }
    if (_0x54ad1a['polygon'] && _0x54ad1a['polygon']['length'] >= 0x6) {
        _0x26ce31['globalCompositeOperation'] = 'destination-out';
        const _0x4e3db5 = _0x54ad1a['polygon'];
        _0x26ce31['beginPath']();
        _0x26ce31['moveTo'](_0x4e3db5[0x0] - _0x3f5fa7, _0x4e3db5[0x1] - _0x2d90bf);
        for (let _0x50f8bb = 0x2; _0x50f8bb < _0x4e3db5['length']; _0x50f8bb += 0x2) {
            _0x26ce31['lineTo'](_0x4e3db5[_0x50f8bb] - _0x3f5fa7, _0x4e3db5[_0x50f8bb + 0x1] - _0x2d90bf);
        }
        _0x26ce31['closePath']();
        _0x26ce31['fill']();
        _0x26ce31['globalCompositeOperation'] = 'source-over';
    }
    _0x2f6a76['drawImage'](_0x8f3020, 0x0, 0x0);
}
function _0x5da73f(_0x178be7) {
    let _0x5c8442 = 0x0, _0x341cdf = 0x0;
    const _0x1d4cff = _0xa2417d['INPUTS']['mouseX'] / _0xa2417d['SYSTEM']['viewScale'];
    const _0x31c195 = _0xa2417d['INPUTS']['mouseY'] / _0xa2417d['SYSTEM']['viewScale'];
    const _0x370afa = _0x234c7d['x'] - _0xa2417d['CAMERA']['x'] + _0x234c7d['width'] / 0x2;
    const _0x54b045 = _0x234c7d['y'] - _0xa2417d['CAMERA']['y'] + _0x234c7d['height'] / 0x2;
    const _0x38ac01 = Math['atan2'](_0x31c195 - _0x54b045, _0x1d4cff - _0x370afa);
    if (_0x42f5f1 !== 0x0 || _0x1d82cc !== 0x0) {
        _0x5c8442 = _0x42f5f1;
        _0x341cdf = _0x1d82cc;
    } else if (_0x5ceac7) {
        let _0x12be80 = 0x0, _0x4af4d3 = 0x0;
        if (_0xa2417d['INPUTS']['keys']['w'] || _0xa2417d['INPUTS']['keys']['arrowup'])
            _0x12be80 += 0x1;
        if (_0xa2417d['INPUTS']['keys']['s'] || _0xa2417d['INPUTS']['keys']['arrowdown'])
            _0x12be80 -= 0x1;
        if (_0xa2417d['INPUTS']['keys']['d'] || _0xa2417d['INPUTS']['keys']['arrowright'])
            _0x4af4d3 += 0x1;
        if (_0xa2417d['INPUTS']['keys']['a'] || _0xa2417d['INPUTS']['keys']['arrowleft'])
            _0x4af4d3 -= 0x1;
        if (_0x12be80 !== 0x0 || _0x4af4d3 !== 0x0) {
            const _0x1439da = _0x38ac01 + Math['atan2'](_0x4af4d3, _0x12be80);
            _0x5c8442 = Math['cos'](_0x1439da);
            _0x341cdf = Math['sin'](_0x1439da);
        }
    } else {
        if (_0xa2417d['INPUTS']['keys']['w'] || _0xa2417d['INPUTS']['keys']['arrowup'])
            _0x341cdf -= 0x1;
        if (_0xa2417d['INPUTS']['keys']['s'] || _0xa2417d['INPUTS']['keys']['arrowdown'])
            _0x341cdf += 0x1;
        if (_0xa2417d['INPUTS']['keys']['a'] || _0xa2417d['INPUTS']['keys']['arrowleft'])
            _0x5c8442 -= 0x1;
        if (_0xa2417d['INPUTS']['keys']['d'] || _0xa2417d['INPUTS']['keys']['arrowright'])
            _0x5c8442 += 0x1;
        const _0x29b155 = _0x5c8442 !== 0x0 || _0x341cdf !== 0x0;
        if (_0x29b155) {
            const _0x6910df = Math['sqrt'](_0x5c8442 * _0x5c8442 + _0x341cdf * _0x341cdf);
            _0x5c8442 /= _0x6910df;
            _0x341cdf /= _0x6910df;
        }
    }
    if (_0xa2417d['GAME_STATE'] === 'NIGHT' && _0x3cfa61 === 'Skinwalker') {
        if (_0xa2417d['NIGHT_ABILITY_OPEN'] || !_0xa2417d['CURRENT_TARGET']) {
            _0x5c8442 = 0x0;
            _0x341cdf = 0x0;
            _0x234c7d['vx'] = 0x0;
            _0x234c7d['vy'] = 0x0;
            _0x234c7d['x'] = _0xa2417d['MAP']['columns'] * _0xa2417d['MAP']['tileSize'] / 0x2 - _0x234c7d['width'] / 0x2;
            _0x234c7d['y'] = _0xa2417d['MAP']['rows'] * _0xa2417d['MAP']['tileSize'] / 0x2 - _0x234c7d['height'] / 0x2;
        }
    }
    const _0x43d532 = _0x5c8442 !== 0x0 || _0x341cdf !== 0x0;
    const _0x29a7d7 = (_0xa2417d['INPUTS']['keys']['shift'] || _0x3e032c || _0x1b445b) && _0x43d532;
    _0x234c7d['bopTimer'] = _0x29a7d7 ? _0x234c7d['bopTimer'] + _0x178be7 : 0x0;
    _0x234c7d['scale'] = 0x1 + (_0x234c7d['bopTimer'] > 0x0 ? Math['sin'](_0x234c7d['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0xc1fb8b = Math['pow'](0.001, _0x178be7);
    const _0x5b70ae = _0x29a7d7 ? 0x74a : 0x5d5;
    _0x234c7d['vx'] += _0x5c8442 * _0x5b70ae * _0x178be7;
    _0x234c7d['vy'] += _0x341cdf * _0x5b70ae * _0x178be7;
    _0x234c7d['vx'] *= _0xc1fb8b;
    _0x234c7d['vy'] *= _0xc1fb8b;
    _0x234c7d['x'] += _0x234c7d['vx'] * _0x178be7;
    _0x234c7d['y'] += _0x234c7d['vy'] * _0x178be7;
    for (let _0x70f231 = 0x0; _0x70f231 < 0x3; _0x70f231++)
        _0x3d3c55();
    for (let _0x4d995f = 0x0; _0x4d995f < 0x2; _0x4d995f++)
        _0x398b7d();
    for (let _0x1ca62b = 0x0; _0x1ca62b < 0x2; _0x1ca62b++)
        _0x54f227();
    if (_0x234c7d['x'] < 0x0)
        _0x234c7d['x'] = 0x0;
    if (_0x234c7d['y'] < 0x0)
        _0x234c7d['y'] = 0x0;
    if (_0x234c7d['x'] + _0x234c7d['width'] > _0xa2417d['MAP']['columns'] * _0xa2417d['MAP']['tileSize'])
        _0x234c7d['x'] = _0xa2417d['MAP']['columns'] * _0xa2417d['MAP']['tileSize'] - _0x234c7d['width'];
    if (_0x234c7d['y'] + _0x234c7d['height'] > _0xa2417d['MAP']['rows'] * _0xa2417d['MAP']['tileSize'])
        _0x234c7d['y'] = _0xa2417d['MAP']['rows'] * _0xa2417d['MAP']['tileSize'] - _0x234c7d['height'];
    if (_0x21ebb4) {
        _0x234c7d['angle'] = _0x4fa900 + Math['PI'] / 0x2;
    } else if (_0x42f5f1 !== 0x0 || _0x1d82cc !== 0x0) {
        _0x234c7d['angle'] = Math['atan2'](_0x1d82cc, _0x42f5f1) + Math['PI'] / 0x2;
    } else if (!_0x3c58ba) {
        _0x234c7d['angle'] = _0x38ac01 + Math['PI'] / 0x2;
    }
    const _0x20d3c8 = _0x234c7d['x'] + _0x234c7d['width'] / 0x2 - _0xa2417d['CAMERA']['width'] / 0x2;
    const _0x427d54 = _0x234c7d['y'] + _0x234c7d['height'] / 0x2 - _0xa2417d['CAMERA']['height'] / 0x2;
    if (_0xa2417d['CAMERA']['x'] === null || isNaN(_0xa2417d['CAMERA']['x']) || !isFinite(_0xa2417d['CAMERA']['x'])) {
        _0xa2417d['CAMERA']['x'] = _0x20d3c8;
        _0xa2417d['CAMERA']['y'] = _0x427d54;
    } else {
        const _0x56ee84 = 0x1 - Math['exp'](-Math['max'](0x0, _0x178be7) * 0x28);
        _0xa2417d['CAMERA']['x'] += (_0x20d3c8 - _0xa2417d['CAMERA']['x']) * _0x56ee84;
        _0xa2417d['CAMERA']['y'] += (_0x427d54 - _0xa2417d['CAMERA']['y']) * _0x56ee84;
    }
    for (const _0x3265b4 in _0x52df60) {
        const _0x483ee3 = _0x52df60[_0x3265b4];
        if (_0x483ee3['renderX'] === undefined) {
            _0x483ee3['renderX'] = _0x483ee3['x'];
            _0x483ee3['renderY'] = _0x483ee3['y'];
            _0x483ee3['renderAngle'] = _0x483ee3['angle'] || 0x0;
        }
        const _0xd3501d = _0x483ee3['x'] + (_0x483ee3['vx'] || 0x0) * _0x178be7;
        const _0x21df7b = _0x483ee3['y'] + (_0x483ee3['vy'] || 0x0) * _0x178be7;
        _0x483ee3['x'] = _0xd3501d;
        _0x483ee3['y'] = _0x21df7b;
        const _0x1a2e7d = 0x1 - Math['exp'](-_0x178be7 * 0x12);
        const _0x235e56 = _0x483ee3['x'] - _0x483ee3['renderX'], _0x5301df = _0x483ee3['y'] - _0x483ee3['renderY'];
        const _0x57dad5 = Math['sqrt'](_0x235e56 * _0x235e56 + _0x5301df * _0x5301df);
        const _0x413167 = 0xc8;
        if (_0x57dad5 > _0x413167) {
            _0x483ee3['renderX'] = _0x483ee3['x'] - _0x235e56 / _0x57dad5 * _0x413167;
            _0x483ee3['renderY'] = _0x483ee3['y'] - _0x5301df / _0x57dad5 * _0x413167;
        }
        _0x483ee3['renderX'] += (_0x483ee3['x'] - _0x483ee3['renderX']) * _0x1a2e7d;
        _0x483ee3['renderY'] += (_0x483ee3['y'] - _0x483ee3['renderY']) * _0x1a2e7d;
        let _0x286d9d = (_0x483ee3['angle'] || 0x0) - _0x483ee3['renderAngle'];
        while (_0x286d9d < -Math['PI'])
            _0x286d9d += Math['PI'] * 0x2;
        while (_0x286d9d > Math['PI'])
            _0x286d9d -= Math['PI'] * 0x2;
        _0x483ee3['renderAngle'] += _0x286d9d * (0x1 - Math['exp'](-_0x178be7 * 0x14));
    }
    if (_0xa2417d['GAME_STATE'] === 'NIGHT') {
        _0x59e593 = Math['min'](0.6, _0x59e593 + _0x178be7 * 0.5);
    } else {
        _0x59e593 = Math['max'](0x0, _0x59e593 - _0x178be7 * 0.5);
    }
    if (_0x2472a4 > 0x0) {
        if (performance['now']() > _0x4b9ba9) {
            _0x2472a4 = Math['max'](0x0, _0x2472a4 - _0x178be7 * 0x2);
        }
    }
    _0x93f7c2();
    _0x35857f();
}
function _0x3072e3(_0x447b76, _0x4a6d61, _0x5a5cad, _0x379a0b, _0x146459 = !![]) {
    _0x447b76['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x311c2b = _0x447b76['measureText'](_0x4a6d61)['width'];
    const _0x1b9a3c = _0x311c2b + 0x18;
    const _0xe38e73 = 0x1c;
    _0x447b76['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x447b76['beginPath']();
    if (_0x447b76['roundRect']) {
        _0x447b76['roundRect'](_0x5a5cad - _0x1b9a3c / 0x2, _0x379a0b - _0xe38e73, _0x1b9a3c, _0xe38e73, 0x6);
    } else {
        _0x447b76['rect'](_0x5a5cad - _0x1b9a3c / 0x2, _0x379a0b - _0xe38e73, _0x1b9a3c, _0xe38e73);
    }
    _0x447b76['fill']();
    if (_0x146459) {
        _0x447b76['beginPath']();
        _0x447b76['moveTo'](_0x5a5cad - 0x6, _0x379a0b);
        _0x447b76['lineTo'](_0x5a5cad + 0x6, _0x379a0b);
        _0x447b76['lineTo'](_0x5a5cad, _0x379a0b + 0x6);
        _0x447b76['fill']();
    }
    _0x447b76['fillStyle'] = '#ffffff';
    _0x447b76['textAlign'] = 'center';
    _0x447b76['textBaseline'] = 'middle';
    _0x447b76['fillText'](_0x4a6d61, _0x5a5cad, _0x379a0b - _0xe38e73 / 0x2 + 0x1);
}
function _0x46a63c(_0x312bae, _0xe6d9b0, _0x458892, _0x33af09) {
    if (!_0xe6d9b0 || _0xe6d9b0['length'] === 0x0)
        return;
    let _0x194915 = _0x33af09;
    for (let _0x1d748f = 0x0; _0x1d748f < _0xe6d9b0['length']; _0x1d748f++) {
        _0x3072e3(_0x312bae, _0xe6d9b0[_0x1d748f]['text'], _0x458892, _0x194915, _0x1d748f === 0x0);
        _0x194915 -= 0x24;
    }
}
function _0x2881ed() {
    if (!_0xa2417d['SYSTEM']['isReady'])
        return;
    if (_0xa2417d['MAP']['layers'] && _0xa2417d['MAP']['layers']['length'] > 0x0 && _0x27a8ed['complete'] && _0x27a8ed['naturalWidth'] > 0x0) {
        if (!_0xa2417d['MAP']['_prerenderedWithTileset'] || !_0xa2417d['MAP']['bgChunks'] || _0xa2417d['MAP']['bgChunks']['length'] === 0x0) {
            _0x1776d3();
        }
    }
    if (!_0xa2417d['MAP']['bgChunks'] || _0xa2417d['MAP']['bgChunks']['length'] === 0x0 || !_0xa2417d['MAP']['bgChunks'][0x0] || _0xa2417d['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x1db674['fillStyle'] = '#000000';
    _0x1db674['fillRect'](0x0, 0x0, _0x2bd7ca['width'], _0x2bd7ca['height']);
    _0x1db674['save']();
    try {
        _0x1db674['scale'](_0xa2417d['SYSTEM']['viewScale'], _0xa2417d['SYSTEM']['viewScale']);
        _0x1db674['imageSmoothingEnabled'] = ![];
        const _0x345905 = Math['floor'](_0xa2417d['CAMERA']['x'] || 0x0);
        const _0xb94026 = Math['floor'](_0xa2417d['CAMERA']['y'] || 0x0);
        const _0x126a1f = Math['max'](0x0, Math['floor'](_0x345905 / _0xa2417d['MAP']['chunkSize']));
        const _0x4f0eeb = Math['min'](_0xa2417d['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x345905 + _0xa2417d['CAMERA']['width']) / _0xa2417d['MAP']['chunkSize']));
        const _0x590ff9 = Math['max'](0x0, Math['floor'](_0xb94026 / _0xa2417d['MAP']['chunkSize']));
        const _0xd9617f = Math['min'](_0xa2417d['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0xb94026 + _0xa2417d['CAMERA']['height']) / _0xa2417d['MAP']['chunkSize']));
        for (let _0x5d8404 = _0x590ff9; _0x5d8404 <= _0xd9617f; _0x5d8404++)
            for (let _0x4e753a = _0x126a1f; _0x4e753a <= _0x4f0eeb; _0x4e753a++) {
                const _0x1ccc67 = _0x4e753a * _0xa2417d['MAP']['chunkSize'] - _0x345905;
                const _0x39d777 = _0x5d8404 * _0xa2417d['MAP']['chunkSize'] - _0xb94026;
                _0x1db674['drawImage'](_0xa2417d['MAP']['bgChunks'][_0x5d8404][_0x4e753a], _0x1ccc67, _0x39d777, _0xa2417d['MAP']['chunkSize'] + 0x1, _0xa2417d['MAP']['chunkSize'] + 0x1);
            }
        if (_0xc8be2d['complete'] && _0xc8be2d['naturalWidth'] > 0x0) {
            const _0x325da2 = _0xa2417d['MAP']['tileSize'];
            const _0x54368b = _0x325da2 * 0xa;
            const _0x1fcf82 = _0xa2417d['MAP']['columns'] / 0x2 * _0x325da2 - _0x54368b / 0x2 - _0x345905;
            const _0x8d152a = _0xa2417d['MAP']['rows'] / 0x2 * _0x325da2 - _0x54368b / 0x2 - _0xb94026;
            _0x1db674['imageSmoothingEnabled'] = ![];
            _0x1db674['drawImage'](_0xc8be2d, _0x1fcf82, _0x8d152a, _0x54368b, _0x54368b);
        }
        if (_0x14f821['complete'] && _0x14f821['naturalWidth'] > 0x0) {
            _0xa2417d['ENTITIES']['forEach'](_0x2b8e0f => {
                if (_0x2b8e0f['type'] !== 'table')
                    return;
                _0x1db674['save']();
                _0x1db674['imageSmoothingEnabled'] = ![];
                const _0x29d6c7 = _0x14f821['naturalWidth'] >= _0x14f821['naturalHeight'];
                const _0x46b83a = _0x2b8e0f['w'] >= _0x2b8e0f['h'];
                if (_0x29d6c7 === _0x46b83a) {
                    _0x1db674['drawImage'](_0x14f821, _0x2b8e0f['x'] - _0x345905, _0x2b8e0f['y'] - _0xb94026, _0x2b8e0f['w'], _0x2b8e0f['h']);
                } else {
                    _0x1db674['translate'](_0x2b8e0f['x'] - _0x345905 + _0x2b8e0f['w'] / 0x2, _0x2b8e0f['y'] - _0xb94026 + _0x2b8e0f['h'] / 0x2);
                    _0x1db674['rotate'](Math['PI'] / 0x2);
                    _0x1db674['drawImage'](_0x14f821, -_0x2b8e0f['h'] / 0x2, -_0x2b8e0f['w'] / 0x2, _0x2b8e0f['h'], _0x2b8e0f['w']);
                }
                _0x1db674['restore']();
            });
        } else {
            _0xa2417d['ENTITIES']['forEach'](_0x4eda5e => {
                if (_0x4eda5e['type'] !== 'table')
                    return;
                _0x1db674['save']();
                _0x1db674['fillStyle'] = '#6b4423';
                _0x1db674['fillRect'](_0x4eda5e['x'] - _0x345905, _0x4eda5e['y'] - _0xb94026, _0x4eda5e['w'], _0x4eda5e['h']);
                _0x1db674['strokeStyle'] = '#422810';
                _0x1db674['lineWidth'] = 0x3;
                _0x1db674['strokeRect'](_0x4eda5e['x'] - _0x345905 + 0x1, _0x4eda5e['y'] - _0xb94026 + 0x1, _0x4eda5e['w'] - 0x2, _0x4eda5e['h'] - 0x2);
                _0x1db674['fillStyle'] = '#82532a';
                _0x1db674['fillRect'](_0x4eda5e['x'] - _0x345905 + 0x4, _0x4eda5e['y'] - _0xb94026 + 0x4, _0x4eda5e['w'] - 0x8, _0x4eda5e['h'] - 0x8);
                _0x1db674['restore']();
            });
        }
        if (_0x321f38) {
            if (_0xa2417d['MAP']['wallChunks'] && _0xa2417d['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x215617 = _0x590ff9; _0x215617 <= _0xd9617f; _0x215617++) {
                    for (let _0x4dac40 = _0x126a1f; _0x4dac40 <= _0x4f0eeb; _0x4dac40++) {
                        if (!_0xa2417d['MAP']['wallChunks'][_0x215617] || !_0xa2417d['MAP']['wallChunks'][_0x215617][_0x4dac40])
                            continue;
                        const _0x31eb2f = _0x4dac40 * _0xa2417d['MAP']['chunkSize'] - _0x345905;
                        const _0x1a0d4d = _0x215617 * _0xa2417d['MAP']['chunkSize'] - _0xb94026;
                        _0x1db674['drawImage'](_0xa2417d['MAP']['wallChunks'][_0x215617][_0x4dac40], _0x31eb2f, _0x1a0d4d, _0xa2417d['MAP']['chunkSize'] + 0x1, _0xa2417d['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x4dec93 = _0x590ff9; _0x4dec93 <= _0xd9617f; _0x4dec93++) {
                for (let _0x85c0c0 = _0x126a1f; _0x85c0c0 <= _0x4f0eeb; _0x85c0c0++) {
                    const _0x2d286c = _0x85c0c0 * _0xa2417d['MAP']['chunkSize'] - _0x345905;
                    const _0x5580aa = _0x4dec93 * _0xa2417d['MAP']['chunkSize'] - _0xb94026;
                    _0x1db674['drawImage'](_0xa2417d['MAP']['fgChunks'][_0x4dec93][_0x85c0c0], _0x2d286c, _0x5580aa, _0xa2417d['MAP']['chunkSize'] + 0x1, _0xa2417d['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x71ad7c = _0xa2417d['GAME_STATE'] === 'NIGHT' && _0x3cfa61 === 'Skinwalker' && !_0x234c7d['isDead'];
        const _0x10bdc9 = _0x234c7d['x'] - _0x345905 + _0x234c7d['width'] / 0x2;
        const _0x5cbacc = _0x234c7d['y'] - _0xb94026 + _0x234c7d['height'] / 0x2;
        const _0x3507e1 = _0x234c7d['width'] * _0x234c7d['scale'] * 1.3;
        const _0x2d0921 = _0x234c7d['height'] * _0x234c7d['scale'] * 1.3;
        for (const _0x1bb112 in _0x52df60) {
            const _0x319b69 = _0x52df60[_0x1bb112];
            if (_0x319b69['isDead'])
                continue;
            const _0x216715 = (_0x319b69['renderX'] ?? _0x319b69['x']) - _0x345905 + _0x319b69['width'] / 0x2;
            const _0x476ee4 = (_0x319b69['renderY'] ?? _0x319b69['y']) - _0xb94026 + _0x319b69['height'] / 0x2;
            const _0x389275 = Math['min'](0x2, Math['max'](0.3, _0x319b69['scale'] || 0x1));
            const _0x263217 = _0x319b69['width'] * _0x389275 * 1.3;
            const _0x38d88f = _0x319b69['height'] * _0x389275 * 1.3;
            _0x1db674['save']();
            try {
                _0x1db674['translate'](_0x216715, _0x476ee4);
                _0x1db674['rotate'](_0x319b69['renderAngle'] ?? 0x0);
                if (_0x319b69['isDark'])
                    _0x1db674['filter'] = 'brightness(0)';
                _0x4422e8(_0x1db674, _0x319b69['body'], _0x319b69['eyes'], _0x263217, _0x38d88f);
                if (_0x300c6f['has'](parseInt(_0x1bb112)) && _0x37c98d['complete'] && _0x37c98d['naturalWidth'] > 0x0) {
                    _0x1db674['drawImage'](_0x37c98d, -_0x263217 / 0x2, -_0x38d88f / 0x2, _0x263217, _0x38d88f);
                }
                if (_0x319b69['isDark'])
                    _0x1db674['filter'] = 'none';
            } finally {
                _0x1db674['restore']();
            }
            if (!_0x5847b4((_0x319b69['renderX'] ?? _0x319b69['x']) + _0x319b69['width'] / 0x2, (_0x319b69['renderY'] ?? _0x319b69['y']) + _0x319b69['height'] / 0x2)) {
                _0x1db674['textAlign'] = 'center';
                _0x1db674['lineJoin'] = 'round';
                _0x1db674['lineWidth'] = 0x3;
                _0x1db674['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1db674['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x1db674['fillStyle'] = _0x300c6f['has'](parseInt(_0x1bb112)) ? '#cc88ff' : '#ffffff';
                const _0x11f86d = _0x319b69['isDark'] ? '???' : _0x319b69['name'] + (_0x319b69['isOwner'] ? '\x20[🗝️]' : '');
                _0x1db674['strokeText'](_0x11f86d, _0x216715, _0x476ee4 - _0x38d88f / 0x2 - 0x10);
                _0x1db674['fillText'](_0x11f86d, _0x216715, _0x476ee4 - _0x38d88f / 0x2 - 0x10);
            }
        }
        if (!_0x234c7d['isDead']) {
            _0x1db674['save']();
            try {
                _0x1db674['translate'](_0x10bdc9, _0x5cbacc);
                _0x1db674['rotate'](_0x234c7d['angle']);
                if (_0x71ad7c)
                    _0x1db674['filter'] = 'brightness(0)';
                _0x4422e8(_0x1db674, _0x54739e, _0x53b153, _0x3507e1, _0x2d0921);
                if (_0x300c6f['has'](_0x362fbd) && _0x37c98d['complete'] && _0x37c98d['naturalWidth'] > 0x0) {
                    _0x1db674['drawImage'](_0x37c98d, -_0x3507e1 / 0x2, -_0x2d0921 / 0x2, _0x3507e1, _0x2d0921);
                }
                if (_0x71ad7c)
                    _0x1db674['filter'] = 'none';
            } finally {
                _0x1db674['restore']();
            }
            if (!_0x5847b4(_0x234c7d['x'] + _0x234c7d['width'] / 0x2, _0x234c7d['y'] + _0x234c7d['height'] / 0x2)) {
                _0x1db674['textAlign'] = 'center';
                _0x1db674['lineJoin'] = 'round';
                _0x1db674['lineWidth'] = 0x3;
                _0x1db674['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1db674['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x1db674['fillStyle'] = _0x300c6f['has'](_0x362fbd) ? '#cc88ff' : '#ffffff';
                const _0xf6892 = _0x71ad7c ? '???' : _0x57a6b7 + (_0x2bb082 ? '\x20[🗝️]' : '');
                _0x1db674['strokeText'](_0xf6892, _0x10bdc9, _0x5cbacc - _0x2d0921 / 0x2 - 0x10);
                _0x1db674['fillText'](_0xf6892, _0x10bdc9, _0x5cbacc - _0x2d0921 / 0x2 - 0x10);
            }
        }
        if (_0xa2417d['MAP']['wallChunks'] && _0xa2417d['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x3b0990 = _0x590ff9; _0x3b0990 <= _0xd9617f; _0x3b0990++)
                for (let _0x59ee1e = _0x126a1f; _0x59ee1e <= _0x4f0eeb; _0x59ee1e++) {
                    if (!_0xa2417d['MAP']['wallChunks'][_0x3b0990] || !_0xa2417d['MAP']['wallChunks'][_0x3b0990][_0x59ee1e])
                        continue;
                    const _0x4d452d = _0x59ee1e * _0xa2417d['MAP']['chunkSize'] - _0x345905;
                    const _0xbcbf8d = _0x3b0990 * _0xa2417d['MAP']['chunkSize'] - _0xb94026;
                    _0x1db674['drawImage'](_0xa2417d['MAP']['wallChunks'][_0x3b0990][_0x59ee1e], _0x4d452d, _0xbcbf8d, _0xa2417d['MAP']['chunkSize'] + 0x1, _0xa2417d['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x303ed3 of _0xa2417d['ENTITIES']) {
            if (_0x303ed3['type'] !== 'npc')
                continue;
            const _0x2b5a3a = _0x303ed3['x'] - _0x345905 + _0x303ed3['w'] / 0x2;
            const _0x3f07af = _0x303ed3['y'] - _0xb94026 + _0x303ed3['h'] / 0x2;
            const _0x57c3d4 = _0x303ed3['w'];
            const _0xed548a = _0x303ed3['h'];
            _0x1db674['save']();
            _0x1db674['translate'](_0x2b5a3a, _0x3f07af);
            _0x1db674['rotate'](_0x303ed3['angle'] !== undefined ? _0x303ed3['angle'] : 0x0);
            _0x4422e8(_0x1db674, _0x303ed3['body'] || 'yanito932.png', _0x303ed3['eyes'], _0x57c3d4, _0xed548a);
            _0x1db674['restore']();
            _0x1db674['textAlign'] = 'center';
            _0x1db674['lineJoin'] = 'round';
            _0x1db674['lineWidth'] = 0x3;
            _0x1db674['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x1db674['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x1db674['fillStyle'] = '#aaaaaa';
            _0x1db674['strokeText'](_0x303ed3['name'] || 'NPC', _0x2b5a3a, _0x3f07af - _0xed548a / 0x2 - 0x10);
            _0x1db674['fillText'](_0x303ed3['name'] || 'NPC', _0x2b5a3a, _0x3f07af - _0xed548a / 0x2 - 0x10);
        }
        if (_0x234c7d['isDead']) {
            for (const _0x4e9133 in _0x52df60) {
                const _0x455caa = _0x52df60[_0x4e9133];
                if (!_0x455caa['isDead'])
                    continue;
                const _0x531d0f = (_0x455caa['renderX'] ?? _0x455caa['x']) - _0x345905 + _0x455caa['width'] / 0x2;
                const _0x1f971f = (_0x455caa['renderY'] ?? _0x455caa['y']) - _0xb94026 + _0x455caa['height'] / 0x2;
                const _0x7e3d6f = _0x455caa['width'] * (_0x455caa['scale'] || 0x1) * 1.3;
                const _0x430c48 = _0x455caa['height'] * (_0x455caa['scale'] || 0x1) * 1.3;
                _0x1db674['save']();
                try {
                    _0x1db674['translate'](_0x531d0f, _0x1f971f);
                    _0x1db674['rotate'](_0x455caa['renderAngle'] ?? 0x0);
                    _0x1db674['globalAlpha'] = 0.3;
                    _0x4422e8(_0x1db674, _0x455caa['body'], _0x455caa['eyes'], _0x7e3d6f, _0x430c48);
                } finally {
                    _0x1db674['restore']();
                }
                if (!_0x5847b4((_0x455caa['renderX'] ?? _0x455caa['x']) + _0x455caa['width'] / 0x2, (_0x455caa['renderY'] ?? _0x455caa['y']) + _0x455caa['height'] / 0x2)) {
                    _0x1db674['save']();
                    _0x1db674['globalAlpha'] = 0.3;
                    _0x1db674['textAlign'] = 'center';
                    _0x1db674['lineJoin'] = 'round';
                    _0x1db674['lineWidth'] = 0x3;
                    _0x1db674['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x1db674['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x1db674['fillStyle'] = '#ffffff';
                    const _0x458218 = _0x455caa['name'] + (_0x455caa['isOwner'] ? '\x20[🗝️]' : '');
                    _0x1db674['strokeText'](_0x458218, _0x531d0f, _0x1f971f - _0x430c48 / 0x2 - 0x10);
                    _0x1db674['fillText'](_0x458218, _0x531d0f, _0x1f971f - _0x430c48 / 0x2 - 0x10);
                    _0x1db674['restore']();
                }
            }
            _0x1db674['save']();
            try {
                _0x1db674['translate'](_0x10bdc9, _0x5cbacc);
                _0x1db674['rotate'](_0x234c7d['angle']);
                _0x1db674['globalAlpha'] = 0.3;
                _0x4422e8(_0x1db674, _0x54739e, _0x53b153, _0x3507e1, _0x2d0921);
            } finally {
                _0x1db674['restore']();
            }
            if (!_0x5847b4(_0x234c7d['x'] + _0x234c7d['width'] / 0x2, _0x234c7d['y'] + _0x234c7d['height'] / 0x2)) {
                _0x1db674['save']();
                _0x1db674['globalAlpha'] = 0.3;
                _0x1db674['textAlign'] = 'center';
                _0x1db674['lineJoin'] = 'round';
                _0x1db674['lineWidth'] = 0x3;
                _0x1db674['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1db674['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x1db674['fillStyle'] = '#ffffff';
                const _0x100357 = _0x57a6b7 + (_0x2bb082 ? '\x20[🗝️]' : '');
                _0x1db674['strokeText'](_0x100357, _0x10bdc9, _0x5cbacc - _0x2d0921 / 0x2 - 0x10);
                _0x1db674['fillText'](_0x100357, _0x10bdc9, _0x5cbacc - _0x2d0921 / 0x2 - 0x10);
                _0x1db674['restore']();
            }
        }
        for (let _0x1d490e = _0x590ff9; _0x1d490e <= _0xd9617f; _0x1d490e++)
            for (let _0xe48ed = _0x126a1f; _0xe48ed <= _0x4f0eeb; _0xe48ed++) {
                const _0x10cd04 = _0xe48ed * _0xa2417d['MAP']['chunkSize'] - _0x345905;
                const _0x209d29 = _0x1d490e * _0xa2417d['MAP']['chunkSize'] - _0xb94026;
                _0x1db674['drawImage'](_0xa2417d['MAP']['fgChunks'][_0x1d490e][_0xe48ed], _0x10cd04, _0x209d29, _0xa2417d['MAP']['chunkSize'] + 0x1, _0xa2417d['MAP']['chunkSize'] + 0x1);
            }
        if (_0xa2417d['EDITOR']['enabled'] && _0xa2417d['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x59918c = _0xa2417d['INPUTS']['mouseX'] / _0xa2417d['SYSTEM']['viewScale'] + _0xa2417d['CAMERA']['x'];
            const _0x97d0f0 = _0xa2417d['INPUTS']['mouseY'] / _0xa2417d['SYSTEM']['viewScale'] + _0xa2417d['CAMERA']['y'];
            const _0x29fd8b = Math['floor'](_0x59918c / _0xa2417d['MAP']['tileSize']);
            const _0x327bec = Math['floor'](_0x97d0f0 / _0xa2417d['MAP']['tileSize']);
            if (_0x29fd8b >= 0x0 && _0x29fd8b < _0xa2417d['MAP']['columns'] && _0x327bec >= 0x0 && _0x327bec < _0xa2417d['MAP']['rows']) {
                const _0x11d370 = _0x29fd8b * _0xa2417d['MAP']['tileSize'] - _0x345905;
                const _0x38c813 = _0x327bec * _0xa2417d['MAP']['tileSize'] - _0xb94026;
                _0x1db674['save']();
                _0x1db674['globalAlpha'] = 0.5;
                if (_0xa2417d['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x54159c = _0xa2417d['EDITOR']['selectedTileGid'] - 0x1;
                    _0x1db674['drawImage'](_0x27a8ed, _0x54159c % _0xa2417d['MAP']['tilesetCols'] * _0xa2417d['MAP']['tileSize'], Math['floor'](_0x54159c / _0xa2417d['MAP']['tilesetCols']) * _0xa2417d['MAP']['tileSize'], _0xa2417d['MAP']['tileSize'], _0xa2417d['MAP']['tileSize'], _0x11d370, _0x38c813, _0xa2417d['MAP']['tileSize'], _0xa2417d['MAP']['tileSize']);
                } else {
                    _0x1db674['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x1db674['fillRect'](_0x11d370, _0x38c813, _0xa2417d['MAP']['tileSize'], _0xa2417d['MAP']['tileSize']);
                }
                _0x1db674['restore']();
            }
        }
        _0x4f1cf2(_0x1db674, _0x345905, _0xb94026);
        if (_0x59e593 > 0x0) {
            _0x1db674['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x59e593 + ')';
            _0x1db674['fillRect'](0x0, 0x0, _0xa2417d['CAMERA']['width'], _0xa2417d['CAMERA']['height']);
        }
        for (const _0x2888c5 in _0x52df60) {
            const _0x1fde4e = _0x52df60[_0x2888c5];
            if (_0x1fde4e['isDead'] && !_0x234c7d['isDead'])
                continue;
            const _0x51a922 = (_0x1fde4e['renderX'] ?? _0x1fde4e['x']) - _0x345905 + _0x1fde4e['width'] / 0x2;
            const _0x409e63 = (_0x1fde4e['renderY'] ?? _0x1fde4e['y']) - _0xb94026 + _0x1fde4e['height'] / 0x2;
            _0x46a63c(_0x1db674, _0x1fde4e['chats'], _0x51a922, _0x409e63 - _0x1fde4e['height'] / 0x2 - 0x20);
        }
        _0x46a63c(_0x1db674, _0x234c7d['chats'], _0x10bdc9, _0x5cbacc - _0x234c7d['height'] / 0x2 - 0x20);
        if (_0x2472a4 > 0x0) {
            _0x1db674['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x2472a4 + ')';
            _0x1db674['fillRect'](0x0, 0x0, _0xa2417d['CAMERA']['width'], _0xa2417d['CAMERA']['height']);
        }
    } finally {
        _0x1db674['restore']();
    }
}
function _0xaa0b14(_0x12cadb) {
    if (!_0xa2417d['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0xaa0b14);
    let _0x136286 = (_0x12cadb - _0xa2417d['SYSTEM']['lastTime']) / 0x3e8;
    _0xa2417d['SYSTEM']['lastTime'] = _0x12cadb;
    if (_0x136286 > 0.1)
        _0x136286 = 0.1;
    if (_0x136286 < 0x0 || isNaN(_0x136286))
        _0x136286 = 0.016;
    if (_0x321f38) {
        _0x2cf781(_0x136286);
        _0x2881ed();
        return;
    }
    if (!_0x362fbd)
        return;
    _0x5da73f(_0x136286);
    _0x39ffdd['tick'](_0x12cadb);
    _0x2881ed();
}
function _0x1776d3() {
    if (_0x27a8ed['complete'] && _0x27a8ed['naturalWidth'] > 0x0) {
        _0xa2417d['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x521966 = Math['ceil'](_0xa2417d['MAP']['columns'] * _0xa2417d['MAP']['tileSize'] / _0xa2417d['MAP']['chunkSize']);
    const _0x11fcc1 = Math['ceil'](_0xa2417d['MAP']['rows'] * _0xa2417d['MAP']['tileSize'] / _0xa2417d['MAP']['chunkSize']);
    _0xa2417d['MAP']['bgChunks'] = [];
    _0xa2417d['MAP']['fgChunks'] = [];
    _0xa2417d['MAP']['wallChunks'] = [];
    for (let _0x2431a7 = 0x0; _0x2431a7 < _0x11fcc1; _0x2431a7++) {
        _0xa2417d['MAP']['bgChunks'][_0x2431a7] = [];
        _0xa2417d['MAP']['fgChunks'][_0x2431a7] = [];
        _0xa2417d['MAP']['wallChunks'][_0x2431a7] = [];
        for (let _0x151e93 = 0x0; _0x151e93 < _0x521966; _0x151e93++) {
            const _0x49a927 = document['createElement']('canvas');
            _0x49a927['width'] = _0x49a927['height'] = _0xa2417d['MAP']['chunkSize'];
            const _0x46f59d = document['createElement']('canvas');
            _0x46f59d['width'] = _0x46f59d['height'] = _0xa2417d['MAP']['chunkSize'];
            const _0x499870 = document['createElement']('canvas');
            _0x499870['width'] = _0x499870['height'] = _0xa2417d['MAP']['chunkSize'];
            _0xa2417d['MAP']['bgChunks'][_0x2431a7][_0x151e93] = _0x49a927;
            _0xa2417d['MAP']['fgChunks'][_0x2431a7][_0x151e93] = _0x46f59d;
            _0xa2417d['MAP']['wallChunks'][_0x2431a7][_0x151e93] = _0x499870;
            _0x178daa(_0x151e93, _0x2431a7);
        }
    }
}
function _0x178daa(_0x117c1f, _0x1d5fcb) {
    const _0x2034d7 = _0xa2417d['MAP']['bgChunks'][_0x1d5fcb][_0x117c1f]['getContext']('2d', { 'alpha': !![] });
    const _0x3cb572 = _0xa2417d['MAP']['fgChunks'][_0x1d5fcb][_0x117c1f]['getContext']('2d', { 'alpha': !![] });
    const _0x1d5d3f = _0xa2417d['MAP']['wallChunks'][_0x1d5fcb] && _0xa2417d['MAP']['wallChunks'][_0x1d5fcb][_0x117c1f] ? _0xa2417d['MAP']['wallChunks'][_0x1d5fcb][_0x117c1f]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x2034d7['imageSmoothingEnabled'] = _0x3cb572['imageSmoothingEnabled'] = ![];
    if (_0x1d5d3f)
        _0x1d5d3f['imageSmoothingEnabled'] = ![];
    _0x2034d7['clearRect'](0x0, 0x0, _0xa2417d['MAP']['chunkSize'], _0xa2417d['MAP']['chunkSize']);
    _0x3cb572['clearRect'](0x0, 0x0, _0xa2417d['MAP']['chunkSize'], _0xa2417d['MAP']['chunkSize']);
    if (_0x1d5d3f)
        _0x1d5d3f['clearRect'](0x0, 0x0, _0xa2417d['MAP']['chunkSize'], _0xa2417d['MAP']['chunkSize']);
    const _0x456e9d = Math['floor'](_0x117c1f * _0xa2417d['MAP']['chunkSize'] / _0xa2417d['MAP']['tileSize']);
    const _0x51bb78 = Math['ceil']((_0x117c1f + 0x1) * _0xa2417d['MAP']['chunkSize'] / _0xa2417d['MAP']['tileSize']);
    const _0x12ac85 = Math['floor'](_0x1d5fcb * _0xa2417d['MAP']['chunkSize'] / _0xa2417d['MAP']['tileSize']);
    const _0x3b6fcb = Math['ceil']((_0x1d5fcb + 0x1) * _0xa2417d['MAP']['chunkSize'] / _0xa2417d['MAP']['tileSize']);
    const _0x449780 = 0.5;
    const _0x55a4c2 = _0xa2417d['MAP']['tileSize'] - _0x449780 * 0x2;
    _0xa2417d['MAP']['layers']['forEach'](_0x10adb7 => {
        const _0x3ef4ad = _0x10adb7['name'] === 'walls';
        const _0x591ee9 = _0x10adb7['name'] === 'trees' ? _0x3cb572 : _0x3ef4ad ? _0x1d5d3f || _0x2034d7 : _0x2034d7;
        for (let _0x37f42d = Math['max'](0x0, _0x12ac85); _0x37f42d < Math['min'](_0xa2417d['MAP']['rows'], _0x3b6fcb); _0x37f42d++) {
            for (let _0x45ecff = Math['max'](0x0, _0x456e9d); _0x45ecff < Math['min'](_0xa2417d['MAP']['columns'], _0x51bb78); _0x45ecff++) {
                let _0x2b2e8b = _0x10adb7['data'][_0x37f42d * _0xa2417d['MAP']['columns'] + _0x45ecff];
                if (_0x10adb7['name'] === 'floor2' && _0xa2417d['MAP']['doors'] && _0xa2417d['MAP']['doors'][_0x37f42d * _0xa2417d['MAP']['columns'] + _0x45ecff]) {
                    _0x2b2e8b = 0x2;
                }
                if (_0x2b2e8b > 0x0) {
                    const _0x270ee5 = _0x2b2e8b - 0x1;
                    const _0x314b23 = _0x270ee5 % _0xa2417d['MAP']['tilesetCols'] * _0xa2417d['MAP']['tileSize'] + _0x449780;
                    const _0x4c907f = Math['floor'](_0x270ee5 / _0xa2417d['MAP']['tilesetCols']) * _0xa2417d['MAP']['tileSize'] + _0x449780;
                    const _0x1bee38 = _0x45ecff * _0xa2417d['MAP']['tileSize'] - _0x117c1f * _0xa2417d['MAP']['chunkSize'];
                    const _0x3cc0a6 = _0x37f42d * _0xa2417d['MAP']['tileSize'] - _0x1d5fcb * _0xa2417d['MAP']['chunkSize'];
                    if (_0x2b2e8b === 0x4) {
                        const _0x265c34 = 0x1;
                        const _0x575076 = _0x265c34 % _0xa2417d['MAP']['tilesetCols'] * _0xa2417d['MAP']['tileSize'] + _0x449780;
                        const _0x202deb = Math['floor'](_0x265c34 / _0xa2417d['MAP']['tilesetCols']) * _0xa2417d['MAP']['tileSize'] + _0x449780;
                        _0x2034d7['drawImage'](_0x27a8ed, _0x575076, _0x202deb, _0x55a4c2, _0x55a4c2, _0x1bee38, _0x3cc0a6, _0xa2417d['MAP']['tileSize'], _0xa2417d['MAP']['tileSize']);
                        let _0xff6df2 = _0xa2417d['MAP']['doors'] ? _0xa2417d['MAP']['doors'][_0x37f42d * _0xa2417d['MAP']['columns'] + _0x45ecff] : null;
                        if (!_0xff6df2) {
                            const _0x4cfa22 = _0xa2417d['MAP']['layers']['find'](_0x3f48d9 => _0x3f48d9['name'] === 'walls');
                            const _0x3f8b93 = _0x37f42d > 0x0 && _0x4cfa22 && _0x4cfa22['data'][(_0x37f42d - 0x1) * _0xa2417d['MAP']['columns'] + _0x45ecff] > 0x0;
                            const _0x42f494 = _0x37f42d < _0xa2417d['MAP']['rows'] - 0x1 && _0x4cfa22 && _0x4cfa22['data'][(_0x37f42d + 0x1) * _0xa2417d['MAP']['columns'] + _0x45ecff] > 0x0;
                            const _0x54c2ab = _0x45ecff > 0x0 && _0x4cfa22 && _0x4cfa22['data'][_0x37f42d * _0xa2417d['MAP']['columns'] + _0x45ecff - 0x1] > 0x0;
                            const _0x338546 = _0x45ecff < _0xa2417d['MAP']['columns'] - 0x1 && _0x4cfa22 && _0x4cfa22['data'][_0x37f42d * _0xa2417d['MAP']['columns'] + _0x45ecff + 0x1] > 0x0;
                            if (_0x54c2ab && _0x338546)
                                _0xff6df2 = _0x37f42d < _0xa2417d['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x3f8b93 && _0x42f494)
                                _0xff6df2 = _0x45ecff < _0xa2417d['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x3a8f02 = 0x0;
                        if (_0xff6df2 === 'bottom')
                            _0x3a8f02 = Math['PI'] / 0x2;
                        else if (_0xff6df2 === 'left')
                            _0x3a8f02 = Math['PI'];
                        else if (_0xff6df2 === 'top')
                            _0x3a8f02 = -Math['PI'] / 0x2;
                        else if (_0xff6df2 === 'right')
                            _0x3a8f02 = 0x0;
                        if (_0x3a8f02 !== 0x0) {
                            _0x591ee9['save']();
                            _0x591ee9['translate'](_0x1bee38 + _0xa2417d['MAP']['tileSize'] / 0x2, _0x3cc0a6 + _0xa2417d['MAP']['tileSize'] / 0x2);
                            _0x591ee9['rotate'](_0x3a8f02);
                            _0x591ee9['drawImage'](_0x27a8ed, _0x314b23, _0x4c907f, _0x55a4c2, _0x55a4c2, -_0xa2417d['MAP']['tileSize'] / 0x2, -_0xa2417d['MAP']['tileSize'] / 0x2, _0xa2417d['MAP']['tileSize'], _0xa2417d['MAP']['tileSize']);
                            _0x591ee9['restore']();
                        } else {
                            _0x591ee9['drawImage'](_0x27a8ed, _0x314b23, _0x4c907f, _0x55a4c2, _0x55a4c2, _0x1bee38, _0x3cc0a6, _0xa2417d['MAP']['tileSize'], _0xa2417d['MAP']['tileSize']);
                        }
                    } else {
                        _0x591ee9['drawImage'](_0x27a8ed, _0x314b23, _0x4c907f, _0x55a4c2, _0x55a4c2, _0x1bee38, _0x3cc0a6, _0xa2417d['MAP']['tileSize'], _0xa2417d['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x46374f() {
    _0x27a8ed['crossOrigin'] = 'Anonymous';
    _0x27a8ed['onload'] = () => {
        _0xa2417d['MAP']['tilesetCols'] = 0x3;
        if (_0xa2417d['MAP']['columns'] > 0x0 && _0xa2417d['MAP']['layers'] && _0xa2417d['MAP']['layers']['length'] > 0x0) {
            _0x1776d3();
        }
        _0x29c878();
    };
    _0x27a8ed['onerror'] = () => {
        _0xa2417d['MAP']['tilesetCols'] = 0x1;
        _0x29c878();
    };
    _0x27a8ed['src'] = 'assets/tilesheet.png';
    _0xc8be2d['crossOrigin'] = 'Anonymous';
    _0xc8be2d['onload'] = _0x29c878;
    _0xc8be2d['onerror'] = () => {
        _0x29c878();
    };
    _0xc8be2d['src'] = 'assets/center.png';
    _0x14f821['crossOrigin'] = 'Anonymous';
    _0x14f821['onload'] = _0x29c878;
    _0x14f821['onerror'] = () => {
        _0x29c878();
    };
    _0x14f821['src'] = 'assets/table.png';
}
function _0x29c878() {
    _0xa2417d['SYSTEM']['assetsLoaded']++;
    if (_0xa2417d['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0xa2417d['MAP']['columns'] > 0x0 && _0xa2417d['MAP']['layers'] && _0xa2417d['MAP']['layers']['length'] > 0x0) {
            _0x1776d3();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x51d6a1();
    }
}
function _0x49ad4f(_0x417ca7, _0x2c3b3b) {
    if (!_0x2bb082 || !_0x295c3d)
        return;
    const _0x13ec9a = _0x417ca7 / _0xa2417d['SYSTEM']['viewScale'] + _0xa2417d['CAMERA']['x'];
    const _0x396852 = _0x2c3b3b / _0xa2417d['SYSTEM']['viewScale'] + _0xa2417d['CAMERA']['y'];
    const _0x3a3285 = Math['floor'](_0x13ec9a / _0xa2417d['MAP']['tileSize']);
    const _0x14033d = Math['floor'](_0x396852 / _0xa2417d['MAP']['tileSize']);
    if (_0x3a3285 >= 0x0 && _0x3a3285 < _0xa2417d['MAP']['columns'] && _0x14033d >= 0x0 && _0x14033d < _0xa2417d['MAP']['rows'])
        _0x295c3d['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0xa2417d['EDITOR']['selectedLayer'],
            'col': _0x3a3285,
            'row': _0x14033d,
            'gid': _0xa2417d['EDITOR']['selectedTileGid']
        }));
}
function _0x9f2463() {
    const _0x1fa08d = document['getElementById']('palette');
    if (!_0x1fa08d || _0x1fa08d['children']['length'] > 0x0)
        return;
    const _0x5597cc = 0x40;
    const _0x991b56 = _0x27a8ed;
    const _0x568817 = document['createElement']('div');
    _0x568817['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x196f43 = document['createElement']('canvas');
    _0x196f43['width'] = 0xc0;
    _0x196f43['height'] = 0xa0;
    _0x196f43['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x568817['appendChild'](_0x196f43);
    const _0xd28f8c = document['createElement']('div');
    _0xd28f8c['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x568817['appendChild'](_0xd28f8c);
    let _0x5e4872 = 0x0, _0x2139f4 = 0x0;
    let _0x16a564 = ![], _0x107d0c = 0x0, _0x415212 = 0x0, _0x3c6348 = 0x0, _0x4e673f = 0x0;
    function _0x440894() {
        const _0x451028 = _0x196f43['getContext']('2d');
        _0x451028['clearRect'](0x0, 0x0, _0x196f43['width'], _0x196f43['height']);
        _0x451028['imageSmoothingEnabled'] = ![];
        if (_0x991b56['complete'] && _0x991b56['naturalWidth'] > 0x0) {
            _0x451028['drawImage'](_0x991b56, _0x5e4872, _0x2139f4, _0x196f43['width'], _0x196f43['height'], 0x0, 0x0, _0x196f43['width'], _0x196f43['height']);
        }
        _0x451028['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x451028['lineWidth'] = 0x1;
        const _0x2c72b5 = Math['floor'](_0x5e4872 / _0x5597cc);
        const _0x232bfd = Math['floor'](_0x2139f4 / _0x5597cc);
        for (let _0x91305d = _0x2c72b5; _0x91305d <= _0x2c72b5 + Math['ceil'](_0x196f43['width'] / _0x5597cc) + 0x1; _0x91305d++) {
            const _0x97c7b6 = _0x91305d * _0x5597cc - _0x5e4872;
            _0x451028['beginPath']();
            _0x451028['moveTo'](_0x97c7b6, 0x0);
            _0x451028['lineTo'](_0x97c7b6, _0x196f43['height']);
            _0x451028['stroke']();
        }
        for (let _0x39623c = _0x232bfd; _0x39623c <= _0x232bfd + Math['ceil'](_0x196f43['height'] / _0x5597cc) + 0x1; _0x39623c++) {
            const _0x3f40f0 = _0x39623c * _0x5597cc - _0x2139f4;
            _0x451028['beginPath']();
            _0x451028['moveTo'](0x0, _0x3f40f0);
            _0x451028['lineTo'](_0x196f43['width'], _0x3f40f0);
            _0x451028['stroke']();
        }
    }
    function _0x475c82() {
        const _0x9b891b = Math['max'](0x1, Math['ceil'](_0x991b56['naturalWidth'] / _0x5597cc));
        const _0xab4b5a = _0xa2417d['EDITOR']['selectedTileGid'];
        if (_0xab4b5a <= 0x0) {
            _0xd28f8c['style']['display'] = 'none';
            return;
        }
        const _0x3e0e95 = _0xab4b5a - 0x1;
        const _0x2c8072 = _0x3e0e95 % _0x9b891b;
        const _0x4c2d51 = Math['floor'](_0x3e0e95 / _0x9b891b);
        const _0x1bc0e9 = _0x2c8072 * _0x5597cc - _0x5e4872;
        const _0x19cd1b = _0x4c2d51 * _0x5597cc - _0x2139f4;
        _0xd28f8c['style']['display'] = 'block';
        _0xd28f8c['style']['left'] = _0x1bc0e9 + 'px';
        _0xd28f8c['style']['top'] = _0x19cd1b + 'px';
    }
    _0x991b56['onload'] = () => {
        _0x440894();
        _0x475c82();
    };
    if (_0x991b56['complete'] && _0x991b56['naturalWidth'] > 0x0) {
        _0x440894();
        _0x475c82();
    }
    _0x568817['addEventListener']('mousedown', _0x408547 => {
        if (_0x408547['button'] === 0x0) {
            _0x16a564 = !![];
            _0x107d0c = _0x408547['clientX'];
            _0x415212 = _0x408547['clientY'];
            _0x3c6348 = _0x5e4872;
            _0x4e673f = _0x2139f4;
            _0x568817['style']['cursor'] = 'grabbing';
            _0x408547['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x33bc12 => {
        if (!_0x16a564)
            return;
        const _0x29fc53 = _0x107d0c - _0x33bc12['clientX'];
        const _0x4bbe4f = _0x415212 - _0x33bc12['clientY'];
        const _0x2a4317 = Math['max'](0x0, _0x991b56['naturalWidth'] - _0x196f43['width']);
        const _0xadba52 = Math['max'](0x0, _0x991b56['naturalHeight'] - _0x196f43['height']);
        _0x5e4872 = Math['max'](0x0, Math['min'](_0x2a4317, _0x3c6348 + _0x29fc53));
        _0x2139f4 = Math['max'](0x0, Math['min'](_0xadba52, _0x4e673f + _0x4bbe4f));
        _0x440894();
        _0x475c82();
    });
    window['addEventListener']('mouseup', _0x2f667e => {
        if (_0x16a564) {
            _0x16a564 = ![];
            _0x568817['style']['cursor'] = 'grab';
        }
    });
    _0x568817['addEventListener']('click', _0x1796d4 => {
        const _0x3d905c = _0x568817['getBoundingClientRect']();
        const _0xbe3512 = _0x1796d4['clientX'] - _0x3d905c['left'] + _0x5e4872;
        const _0x3067e1 = _0x1796d4['clientY'] - _0x3d905c['top'] + _0x2139f4;
        const _0x533ee8 = Math['max'](0x1, Math['ceil'](_0x991b56['naturalWidth'] / _0x5597cc));
        const _0x5195b1 = Math['floor'](_0xbe3512 / _0x5597cc);
        const _0x1c4fef = Math['floor'](_0x3067e1 / _0x5597cc);
        const _0x266fc4 = _0x1c4fef * _0x533ee8 + _0x5195b1 + 0x1;
        _0xa2417d['EDITOR']['selectedTileGid'] = _0x266fc4;
        _0x475c82();
    });
    _0x1fa08d['appendChild'](_0x568817);
    const _0x7fd9cf = document['createElement']('div');
    _0x7fd9cf['className'] = 'tile-btn\x20eraser-btn';
    _0x7fd9cf['title'] = 'Eraser\x20(gid\x200)';
    _0x7fd9cf['onclick'] = () => {
        _0xa2417d['EDITOR']['selectedTileGid'] = 0x0;
        _0xd28f8c['style']['display'] = 'none';
    };
    _0x1fa08d['appendChild'](_0x7fd9cf);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0xa2417d['EDITOR']['enabled'] = !_0xa2417d['EDITOR']['enabled'];
        const _0x36365f = document['getElementById']('editor-tools');
        if (_0xa2417d['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x36365f['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x36365f['style']['display'] = 'none';
        }
    });
    const _0xbb62b9 = document['getElementById']('start-game-btn');
    if (_0xbb62b9) {
        _0xbb62b9['addEventListener']('click', () => {
            if (_0x295c3d)
                _0x295c3d['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x5dea5f = document['getElementById']('rolelist-toggle-btn');
    if (_0x5dea5f) {
        let _0x49c917 = 'subalignments';
        _0x5dea5f['addEventListener']('click', () => {
            if (_0x49c917 === 'subalignments')
                _0x49c917 = 'precise';
            else if (_0x49c917 === 'precise')
                _0x49c917 = 'off';
            else
                _0x49c917 = 'subalignments';
            _0x5dea5f['innerText'] = 'Role\x20List:\x20' + _0x49c917['charAt'](0x0)['toUpperCase']() + _0x49c917['slice'](0x1);
            if (_0x295c3d)
                _0x295c3d['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x49c917
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x213f75 => {
        if (_0x213f75['id'] === 'editor-toggle-btn' || _0x213f75['id'] === 'start-game-btn' || _0x213f75['id'] === 'rolelist-toggle-btn')
            return;
        _0x213f75['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x391bfd => _0x391bfd['classList']['remove']('active'));
            _0x213f75['classList']['add']('active');
            _0xa2417d['EDITOR']['selectedLayer'] = _0x213f75['dataset']['layer'];
        });
    });
}
function _0x316834(_0x3803d6) {
    if (_0x295c3d)
        _0x295c3d['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x3803d6
        }));
}
function _0x3fb6dd(_0x19fb8) {
    if (_0x295c3d)
        _0x295c3d['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x19fb8
        }));
}
function _0x44bd4c(_0x3f6799, _0x25c33a, _0x37b97b, _0x38c2e7) {
    const _0x1707c9 = document['getElementById']('admin-panel');
    if (_0x1707c9)
        _0x1707c9['remove']();
    if (_0x1707c9 && _0x1707c9['dataset']['target'] === String(_0x3f6799))
        return;
    const _0x4f9b6b = document['createElement']('div');
    _0x4f9b6b['id'] = 'admin-panel';
    _0x4f9b6b['dataset']['target'] = String(_0x3f6799);
    _0x4f9b6b['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x47b42a = document['createElement']('div');
    _0x47b42a['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x47b42a['textContent'] = _0x25c33a;
    _0x4f9b6b['appendChild'](_0x47b42a);
    const _0x34b35d = document['createElement']('button');
    _0x34b35d['textContent'] = 'Kick';
    _0x34b35d['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x34b35d['onmouseenter'] = () => _0x34b35d['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x34b35d['onmouseleave'] = () => _0x34b35d['style']['background'] = 'transparent';
    _0x34b35d['onclick'] = () => {
        _0x316834(_0x3f6799);
        _0x4f9b6b['remove']();
    };
    _0x4f9b6b['appendChild'](_0x34b35d);
    const _0x4ade05 = document['createElement']('button');
    _0x4ade05['textContent'] = 'Ban';
    _0x4ade05['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x4ade05['onmouseenter'] = () => _0x4ade05['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x4ade05['onmouseleave'] = () => _0x4ade05['style']['background'] = 'transparent';
    _0x4ade05['onclick'] = () => {
        _0x3fb6dd(_0x3f6799);
        _0x4f9b6b['remove']();
    };
    _0x4f9b6b['appendChild'](_0x4ade05);
    document['body']['appendChild'](_0x4f9b6b);
    const _0x4d8085 = _0x4f9b6b['offsetWidth'] || 0x91;
    const _0x1f5992 = _0x4f9b6b['offsetHeight'] || 0x50;
    let _0x203f52 = _0x37b97b - _0x4d8085;
    let _0x10e828 = _0x38c2e7;
    if (_0x203f52 < 0x4)
        _0x203f52 = _0x37b97b;
    if (_0x10e828 + _0x1f5992 > window['innerHeight'] - 0x4)
        _0x10e828 = window['innerHeight'] - _0x1f5992 - 0x4;
    _0x4f9b6b['style']['left'] = _0x203f52 + 'px';
    _0x4f9b6b['style']['top'] = _0x10e828 + 'px';
    const _0x324ca5 = _0x24eb08 => {
        if (!_0x4f9b6b['contains'](_0x24eb08['target'])) {
            _0x4f9b6b['remove']();
            document['removeEventListener']('mousedown', _0x324ca5);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x324ca5), 0x0);
}
function _0x271c8f() {
    const _0x8532f3 = document['getElementById']('leaderboard-list');
    _0x8532f3['innerHTML'] = '';
    const _0x427f51 = document['createElement']('div');
    _0x427f51['className'] = 'leaderboard-entry';
    const _0x475c7a = document['createElement']('span');
    _0x475c7a['textContent'] = _0x57a6b7 + (_0x2bb082 ? '\x20[🗝️]' : '');
    if (_0x300c6f['has'](_0x362fbd) && !_0x234c7d['isDead']) {
        _0x475c7a['style']['color'] = '#cc88ff';
    }
    _0x427f51['appendChild'](_0x475c7a);
    _0x8532f3['appendChild'](_0x427f51);
    for (const _0x92948d in _0x52df60) {
        const _0x17c0f3 = document['createElement']('div');
        _0x17c0f3['className'] = 'leaderboard-entry';
        const _0x22e8ea = document['createElement']('span');
        _0x22e8ea['textContent'] = _0x52df60[_0x92948d]['name'] + (_0x52df60[_0x92948d]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x300c6f['has'](parseInt(_0x92948d)) && !_0x52df60[_0x92948d]['isDead']) {
            _0x22e8ea['style']['color'] = '#cc88ff';
        }
        _0x17c0f3['appendChild'](_0x22e8ea);
        if (_0x2bb082 && !_0x52df60[_0x92948d]['isOwner']) {
            const _0x70fc6f = _0x52df60[_0x92948d]['id'];
            const _0x118d85 = _0x52df60[_0x92948d]['name'];
            _0x17c0f3['style']['cursor'] = 'context-menu';
            _0x17c0f3['addEventListener']('contextmenu', _0x763353 => {
                _0x763353['preventDefault']();
                _0x763353['stopPropagation']();
                _0x44bd4c(_0x70fc6f, _0x118d85, _0x763353['clientX'], _0x763353['clientY']);
            });
        }
        _0x8532f3['appendChild'](_0x17c0f3);
    }
}
window['addEventListener']('resize', _0x51d6a1);
function _0x51d6a1() {
    _0x2bd7ca['width'] = window['innerWidth'];
    _0x2bd7ca['height'] = window['innerHeight'];
    _0xa2417d['SYSTEM']['viewScale'] = Math['max'](_0x2bd7ca['width'] / _0x42f5a3, _0x2bd7ca['height'] / _0x1686fc);
    _0xa2417d['CAMERA']['width'] = _0x2bd7ca['width'] / _0xa2417d['SYSTEM']['viewScale'];
    _0xa2417d['CAMERA']['height'] = _0x2bd7ca['height'] / _0xa2417d['SYSTEM']['viewScale'];
    _0x1db674['imageSmoothingEnabled'] = ![];
}
function _0x3a07b9(_0x345d6f) {
    if (_0x345d6f['ctrlKey'] || _0x345d6f['metaKey']) {
        if (_0x345d6f['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x345d6f['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x345d6f['code'])) {
            _0x345d6f['preventDefault']();
            _0x345d6f['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x3a07b9, { 'passive': ![] });
window['addEventListener']('keydown', _0x3a07b9, { 'passive': ![] });
window['addEventListener']('keydown', _0x535350 => {
    const _0x357b58 = _0x535350['key']['toLowerCase']();
    if (_0x357b58 === 'tab') {
        _0x535350['preventDefault']();
        const _0xf40ce7 = document['getElementById']('will-ui');
        const _0x270a21 = document['getElementById']('will-input');
        if (_0xf40ce7['style']['display'] === 'flex') {
            _0xf40ce7['style']['display'] = 'none';
            if (_0xa2417d['GAME_STATE'] !== 'NIGHT' && _0x295c3d)
                _0x295c3d['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x270a21['value']
                }));
            _0x270a21['blur']();
        } else {
            if (_0xa2417d['GAME_STATE'] === 'NIGHT') {
                _0x4b70fd('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0xf40ce7['style']['display'] = 'flex';
            _0x270a21['focus']();
            for (let _0x3f9ce4 in _0xa2417d['INPUTS']['keys'])
                _0xa2417d['INPUTS']['keys'][_0x3f9ce4] = ![];
        }
        return;
    }
    if (_0x535350['key'] === 'Enter') {
        if (_0x321f38) {
            const _0x82436d = document['getElementById']('play-btn');
            if (_0x82436d)
                _0x82436d['click']();
            return;
        }
        if (!_0x295c3d || _0x295c3d['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x11ad1e = document['getElementById']('chat-ui');
        const _0xff3387 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0xff3387) {
            const _0x5a1140 = _0xff3387['value']['trim']();
            if (_0x5a1140['length'] > 0x0) {
                _0x295c3d['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x5a1140
                }));
            }
            _0xff3387['value'] = '';
            _0x11ad1e['style']['display'] = 'none';
            _0xff3387['blur']();
        } else {
            _0x11ad1e['style']['display'] = 'block';
            _0xff3387['focus']();
            for (let _0x163ea2 in _0xa2417d['INPUTS']['keys'])
                _0xa2417d['INPUTS']['keys'][_0x163ea2] = ![];
        }
        _0x535350['preventDefault']();
        return;
    }
    if (_0x535350['key'] === 'Escape') {
        const _0x125a1f = document['getElementById']('guide-ui');
        if (_0x125a1f && _0x125a1f['style']['display'] === 'flex') {
            _0x125a1f['style']['display'] = 'none';
            return;
        }
        const _0x2223cf = document['getElementById']('ability-ui');
        if (_0x2223cf && _0x2223cf['style']['display'] === 'block') {
            _0x2223cf['style']['display'] = 'none';
            return;
        }
        const _0x20ea4b = document['getElementById']('settings-panel');
        if (_0x20ea4b && _0x20ea4b['style']['display'] === 'block') {
            _0x20ea4b['style']['display'] = 'none';
            return;
        }
        const _0x1fbe97 = document['getElementById']('mayor-confirm-dialog');
        if (_0x1fbe97 && _0x1fbe97['style']['display'] === 'flex') {
            _0x1fbe97['style']['display'] = 'none';
            return;
        }
        const _0x538329 = document['getElementById']('target-chooser-ui');
        if (_0x538329 && _0x538329['style']['display'] === 'flex') {
            _0x538329['style']['display'] = 'none';
            return;
        }
        const _0xec54dd = document['getElementById']('chat-ui');
        const _0x1953f7 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x1953f7) {
            _0x1953f7['value'] = '';
            _0xec54dd['style']['display'] = 'none';
            _0x1953f7['blur']();
            _0x535350['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0xa2417d['INPUTS']['keys']['hasOwnProperty'](_0x357b58))
            _0xa2417d['INPUTS']['keys'][_0x357b58] = !![];
        if (!_0x295c3d || _0x295c3d['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x357b58 === 'h' && !_0x535350['repeat']) {
            const _0x81b604 = document['getElementById']('guide-ui');
            if (_0x81b604) {
                _0x81b604['style']['display'] = _0x81b604['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x357b58 === 't' && !_0x535350['repeat']) {
            if (_0x234c7d['isDead'])
                return;
            if (_0x3cfa61 === 'Mayor') {
                if (_0x300c6f['has'](_0x362fbd)) {
                    _0x4b70fd('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x33b068 = document['getElementById']('mayor-confirm-dialog');
                if (_0x33b068)
                    _0x33b068['style']['display'] = 'flex';
                return;
            }
            if (_0xa2417d['GAME_STATE'] === 'NIGHT') {
                if (!_0xa2417d['NIGHT_ABILITY_OPEN']) {
                    _0x4b70fd('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x1a5e09 = document['getElementById']('ability-ui');
                if (_0x1a5e09) {
                    if (_0x1a5e09['style']['display'] === 'block') {
                        _0x1a5e09['style']['display'] = 'none';
                    } else {
                        _0x57e164();
                        _0x1a5e09['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0xa2417d['GAME_STATE'] === 'DAY_DISCUSS' || _0xa2417d['GAME_STATE'] === 'DAY_VOTE') {
                _0x4b70fd('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x357b58 === 'e' && !_0x234c7d['isDead']) {
            const _0x27e9fa = Date['now']();
            if (!window['_lastDoorSend'] || _0x27e9fa - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x27e9fa;
                _0x295c3d['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x522927 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x1a6c5d = _0x522927['key']['toLowerCase']();
        if (_0xa2417d['INPUTS']['keys']['hasOwnProperty'](_0x1a6c5d))
            _0xa2417d['INPUTS']['keys'][_0x1a6c5d] = ![];
    }
});
window['addEventListener']('mousemove', _0xed660e => {
    _0xa2417d['INPUTS']['mouseX'] = _0xed660e['clientX'];
    _0xa2417d['INPUTS']['mouseY'] = _0xed660e['clientY'];
    if (_0xa2417d['INPUTS']['isMouseDown'] && _0xa2417d['EDITOR']['enabled']) {
        _0x49ad4f(_0xed660e['clientX'], _0xed660e['clientY']);
    }
});
window['addEventListener']('mousedown', _0x1ae4f7 => {
    if (_0x1ae4f7['target']['closest']('#editor-ui') || _0x1ae4f7['target']['closest']('#leaderboard-ui') || _0x1ae4f7['target']['closest']('#chat-log-ui') || _0x1ae4f7['target']['closest']('#target-chooser-ui') || _0x1ae4f7['target']['closest']('#guide-ui') || _0x1ae4f7['target']['closest']('#role-list-ui') || _0x1ae4f7['target']['closest']('#ability-ui') || _0x1ae4f7['target']['closest']('#settings-panel') || _0x1ae4f7['target']['closest']('#mayor-confirm-dialog') || _0x1ae4f7['target']['closest']('#mobile-action-bar') || _0x1ae4f7['target']['closest']('#mobile-top-bar') || _0x1ae4f7['target']['closest']('#mobile-joystick-zone') || _0x1ae4f7['target']['closest']('#mobile-chat-overlay') || _0x1ae4f7['target']['closest']('#will-ui') || _0x1ae4f7['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x1ae4f7['button'] === 0x0) {
        _0xa2417d['INPUTS']['isMouseDown'] = !![];
        if (_0xa2417d['EDITOR']['enabled'])
            _0x49ad4f(_0x1ae4f7['clientX'], _0x1ae4f7['clientY']);
    }
});
window['addEventListener']('mouseup', _0x3dbf50 => {
    _0xa2417d['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x180319 => {
    if (_0x180319['target']['closest']('#settings-btn'))
        return;
    const _0x2a47ee = document['getElementById']('leaderboard-list');
    const _0xa0264c = document['getElementById']('leaderboard-toggle');
    if (_0x2a47ee['style']['display'] === 'none') {
        _0x2a47ee['style']['display'] = 'flex';
        _0xa0264c['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x2a47ee['style']['display'] = 'none';
        _0xa0264c['style']['transform'] = 'rotate(180deg)';
    }
});
const _0xe1d832 = document['getElementById']('close-target-btn');
if (_0xe1d832) {
    _0xe1d832['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x3a259a = document['getElementById']('close-guide-btn');
if (_0x3a259a) {
    _0x3a259a['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x3e4652 = document['getElementById']('role-list-header');
if (_0x3e4652) {
    _0x3e4652['addEventListener']('click', () => {
        const _0x3431d5 = document['getElementById']('role-list-items');
        const _0x3592b8 = document['getElementById']('role-list-toggle');
        if (_0x3431d5['style']['display'] === 'none') {
            _0x3431d5['style']['display'] = 'flex';
            _0x3592b8['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x3431d5['style']['display'] = 'none';
            _0x3592b8['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x6b486c() {
    const _0x54d0ce = document['getElementById']('mobile-joystick-zone');
    const _0x5d958c = document['getElementById']('mobile-joystick-base');
    const _0x3005b1 = document['getElementById']('mobile-joystick-knob');
    if (_0x54d0ce && _0x5d958c && _0x3005b1) {
        const _0x501c3a = 0x3e;
        const _0x522d93 = (_0x5effef, _0xdb707e) => {
            const _0x1e04b7 = _0x5d958c['getBoundingClientRect']();
            const _0x59e4d2 = _0x1e04b7['left'] + _0x1e04b7['width'] / 0x2;
            const _0x36d2ea = _0x1e04b7['top'] + _0x1e04b7['height'] / 0x2;
            const _0x245799 = _0x5effef - _0x59e4d2;
            const _0x37fb39 = _0xdb707e - _0x36d2ea;
            const _0x4a171e = Math['hypot'](_0x245799, _0x37fb39);
            if (_0x4a171e === 0x0) {
                _0x42f5f1 = 0x0;
                _0x1d82cc = 0x0;
                _0x1b445b = ![];
                _0x3005b1['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x443e4f = Math['min'](_0x4a171e, _0x501c3a);
            const _0x30118b = _0x245799 / _0x4a171e * _0x443e4f;
            const _0x2b4e99 = _0x37fb39 / _0x4a171e * _0x443e4f;
            _0x42f5f1 = _0x30118b / _0x501c3a;
            _0x1d82cc = _0x2b4e99 / _0x501c3a;
            _0x1b445b = _0x4a171e >= _0x501c3a * 0.75;
            _0x3005b1['style']['transform'] = 'translate(' + _0x30118b + 'px,\x20' + _0x2b4e99 + 'px)';
        };
        const _0x2dafa9 = _0x418e81 => {
            for (let _0x5bf68b = 0x0; _0x5bf68b < _0x418e81['changedTouches']['length']; _0x5bf68b++) {
                const _0x382a97 = _0x418e81['changedTouches'][_0x5bf68b];
                if (_0x3bbc95 === null) {
                    _0x3bbc95 = _0x382a97['identifier'];
                    _0x377036 = !![];
                    _0x522d93(_0x382a97['clientX'], _0x382a97['clientY']);
                    break;
                }
            }
        };
        const _0x4e4f1b = _0x421777 => {
            for (let _0x21e827 = 0x0; _0x21e827 < _0x421777['changedTouches']['length']; _0x21e827++) {
                const _0x8b5c25 = _0x421777['changedTouches'][_0x21e827];
                if (_0x8b5c25['identifier'] === _0x3bbc95) {
                    _0x522d93(_0x8b5c25['clientX'], _0x8b5c25['clientY']);
                    break;
                }
            }
        };
        const _0x546464 = _0x126c74 => {
            for (let _0x3d71bc = 0x0; _0x3d71bc < _0x126c74['changedTouches']['length']; _0x3d71bc++) {
                const _0x2471fa = _0x126c74['changedTouches'][_0x3d71bc];
                if (_0x2471fa['identifier'] === _0x3bbc95) {
                    _0x3bbc95 = null;
                    _0x377036 = ![];
                    _0x42f5f1 = 0x0;
                    _0x1d82cc = 0x0;
                    _0x1b445b = ![];
                    _0x3005b1['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x54d0ce['addEventListener']('touchstart', _0x45f5f1 => {
            _0x45f5f1['preventDefault']();
            _0x2dafa9(_0x45f5f1);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x4e4f1b, { 'passive': !![] });
        window['addEventListener']('touchend', _0x546464, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x546464, { 'passive': !![] });
    }
    const _0x1e2204 = (_0xcd7825, _0x3a2839) => {
        const _0x32112a = _0xcd7825 / _0xa2417d['SYSTEM']['viewScale'];
        const _0xa8d34c = _0x3a2839 / _0xa2417d['SYSTEM']['viewScale'];
        const _0x2f7473 = _0x234c7d['x'] - _0xa2417d['CAMERA']['x'] + _0x234c7d['width'] / 0x2;
        const _0x39995a = _0x234c7d['y'] - _0xa2417d['CAMERA']['y'] + _0x234c7d['height'] / 0x2;
        _0x4fa900 = Math['atan2'](_0xa8d34c - _0x39995a, _0x32112a - _0x2f7473);
        _0x21ebb4 = !![];
        _0xa2417d['INPUTS']['mouseX'] = _0xcd7825;
        _0xa2417d['INPUTS']['mouseY'] = _0x3a2839;
    };
    _0x2bd7ca['addEventListener']('touchstart', _0x2319db => {
        if (_0x321f38)
            return;
        for (let _0x5f1c63 = 0x0; _0x5f1c63 < _0x2319db['changedTouches']['length']; _0x5f1c63++) {
            const _0x58f31f = _0x2319db['changedTouches'][_0x5f1c63];
            if (_0x58f31f['identifier'] !== _0x3bbc95 && _0x5467cf === null) {
                _0x5467cf = _0x58f31f['identifier'];
                _0x1e2204(_0x58f31f['clientX'], _0x58f31f['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x2bd7ca['addEventListener']('touchmove', _0x4dadd2 => {
        if (_0x321f38)
            return;
        for (let _0x3fb1ef = 0x0; _0x3fb1ef < _0x4dadd2['changedTouches']['length']; _0x3fb1ef++) {
            const _0x5f3346 = _0x4dadd2['changedTouches'][_0x3fb1ef];
            if (_0x5f3346['identifier'] === _0x5467cf) {
                _0x1e2204(_0x5f3346['clientX'], _0x5f3346['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x146c26 = _0x16d851 => {
        for (let _0x361825 = 0x0; _0x361825 < _0x16d851['changedTouches']['length']; _0x361825++) {
            const _0x57f0d2 = _0x16d851['changedTouches'][_0x361825];
            if (_0x57f0d2['identifier'] === _0x5467cf) {
                _0x5467cf = null;
                _0x21ebb4 = ![];
                break;
            }
        }
    };
    _0x2bd7ca['addEventListener']('touchend', _0x146c26, { 'passive': !![] });
    _0x2bd7ca['addEventListener']('touchcancel', _0x146c26, { 'passive': !![] });
    const _0x26f575 = document['getElementById']('mob-sprint-btn');
    if (_0x26f575) {
        _0x26f575['addEventListener']('click', _0x2c1966 => {
            _0x2c1966['stopPropagation']();
            _0x3e032c = !_0x3e032c;
            _0x26f575['classList']['toggle']('active', _0x3e032c);
        });
    }
    const _0x2181e1 = document['getElementById']('mob-interact-btn');
    if (_0x2181e1) {
        _0x2181e1['addEventListener']('click', _0x265894 => {
            _0x265894['stopPropagation']();
            if (!_0x234c7d['isDead']) {
                const _0x2d8594 = Date['now']();
                if (!window['_lastDoorSend'] || _0x2d8594 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x2d8594;
                    if (_0x295c3d && _0x295c3d['readyState'] === WebSocket['OPEN'])
                        _0x295c3d['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x558e42 = document['getElementById']('mob-ability-btn');
    if (_0x558e42) {
        _0x558e42['addEventListener']('click', _0xde2295 => {
            _0xde2295['stopPropagation']();
            if (_0x234c7d['isDead'])
                return;
            if (_0x3cfa61 === 'Mayor') {
                if (_0x300c6f['has'](_0x362fbd)) {
                    _0x4b70fd('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x5aa9ec = document['getElementById']('mayor-confirm-dialog');
                if (_0x5aa9ec)
                    _0x5aa9ec['style']['display'] = 'flex';
                return;
            }
            if (_0xa2417d['GAME_STATE'] === 'NIGHT') {
                if (!_0xa2417d['NIGHT_ABILITY_OPEN']) {
                    _0x4b70fd('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x21f4d8 = document['getElementById']('ability-ui');
                if (_0x21f4d8) {
                    if (_0x21f4d8['style']['display'] === 'block') {
                        _0x21f4d8['style']['display'] = 'none';
                    } else {
                        _0x57e164();
                        _0x21f4d8['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0xa2417d['GAME_STATE'] === 'DAY_DISCUSS' || _0xa2417d['GAME_STATE'] === 'DAY_VOTE') {
                _0x4b70fd('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x2000d1 = document['getElementById']('mob-will-btn');
    const _0x693834 = document['getElementById']('will-ui');
    const _0x19ba91 = document['getElementById']('will-input');
    const _0x29f9f6 = document['getElementById']('close-will-btn');
    const _0x50717b = () => {
        if (!_0x693834)
            return;
        if (_0x693834['style']['display'] === 'flex') {
            _0x693834['style']['display'] = 'none';
            if (_0xa2417d['GAME_STATE'] !== 'NIGHT' && _0x295c3d && _0x295c3d['readyState'] === WebSocket['OPEN'] && _0x19ba91) {
                _0x295c3d['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x19ba91['value']
                }));
            }
            if (_0x19ba91)
                _0x19ba91['blur']();
        } else {
            if (_0xa2417d['GAME_STATE'] === 'NIGHT') {
                _0x4b70fd('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x693834['style']['display'] = 'flex';
            if (_0x19ba91)
                _0x19ba91['focus']();
        }
    };
    if (_0x2000d1)
        _0x2000d1['addEventListener']('click', _0x3cbb68 => {
            _0x3cbb68['stopPropagation']();
            _0x50717b();
        });
    if (_0x29f9f6)
        _0x29f9f6['addEventListener']('click', _0x582d74 => {
            _0x582d74['stopPropagation']();
            _0x50717b();
        });
    const _0x1b9968 = document['getElementById']('mob-chat-btn');
    const _0x45287e = document['getElementById']('mobile-chat-overlay');
    const _0x2901ff = document['getElementById']('mobile-chat-input');
    const _0x131d23 = document['getElementById']('mobile-chat-send');
    const _0x352d08 = document['getElementById']('mobile-chat-cancel');
    const _0x1142ae = () => {
        if (!_0x45287e || !_0x2901ff)
            return;
        _0x45287e['style']['display'] = 'flex';
        _0x2901ff['value'] = '';
        _0x2901ff['focus']();
    };
    const _0x5dac45 = () => {
        if (!_0x45287e || !_0x2901ff)
            return;
        _0x45287e['style']['display'] = 'none';
        _0x2901ff['blur']();
    };
    const _0x10897c = () => {
        if (!_0x2901ff)
            return;
        const _0x5b30fa = _0x2901ff['value']['trim']();
        if (_0x5b30fa['length'] > 0x0 && _0x295c3d && _0x295c3d['readyState'] === WebSocket['OPEN']) {
            _0x295c3d['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x5b30fa
            }));
        }
        _0x2901ff['value'] = '';
        _0x5dac45();
    };
    if (_0x1b9968)
        _0x1b9968['addEventListener']('click', _0xb52e8e => {
            _0xb52e8e['stopPropagation']();
            _0x1142ae();
        });
    if (_0x131d23)
        _0x131d23['addEventListener']('click', _0x1afc43 => {
            _0x1afc43['stopPropagation']();
            _0x10897c();
        });
    if (_0x352d08)
        _0x352d08['addEventListener']('click', _0x55303d => {
            _0x55303d['stopPropagation']();
            _0x5dac45();
        });
    if (_0x2901ff) {
        _0x2901ff['addEventListener']('keydown', _0x4fe330 => {
            if (_0x4fe330['key'] === 'Enter') {
                _0x4fe330['preventDefault']();
                _0x10897c();
            } else if (_0x4fe330['key'] === 'Escape') {
                _0x5dac45();
            }
        });
    }
    const _0x5c78dd = document['getElementById']('mob-top-chat');
    if (_0x5c78dd)
        _0x5c78dd['addEventListener']('click', _0x5e97e7 => {
            _0x5e97e7['stopPropagation']();
            _0x1142ae();
        });
    const _0x1727e2 = document['getElementById']('mob-top-will');
    if (_0x1727e2)
        _0x1727e2['addEventListener']('click', _0x3e57b4 => {
            _0x3e57b4['stopPropagation']();
            _0x50717b();
        });
    const _0x49a79e = document['getElementById']('mob-top-roles');
    if (_0x49a79e) {
        _0x49a79e['addEventListener']('click', _0x341a66 => {
            _0x341a66['stopPropagation']();
            const _0x456955 = document['getElementById']('role-list-ui');
            const _0x4e9a09 = document['getElementById']('leaderboard-ui');
            if (_0x4e9a09)
                _0x4e9a09['style']['display'] = 'none';
            if (_0x456955)
                _0x456955['style']['display'] = _0x456955['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x5b2ccb = document['getElementById']('mob-top-players');
    if (_0x5b2ccb) {
        _0x5b2ccb['addEventListener']('click', _0x142577 => {
            _0x142577['stopPropagation']();
            const _0xd11449 = document['getElementById']('leaderboard-ui');
            const _0x2137ef = document['getElementById']('role-list-ui');
            if (_0x2137ef)
                _0x2137ef['style']['display'] = 'none';
            if (_0xd11449)
                _0xd11449['style']['display'] = _0xd11449['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x481d60 = document['getElementById']('mob-top-help');
    if (_0x481d60) {
        _0x481d60['addEventListener']('click', _0x5c4996 => {
            _0x5c4996['stopPropagation']();
            const _0x5bfe58 = document['getElementById']('guide-ui');
            if (_0x5bfe58)
                _0x5bfe58['style']['display'] = _0x5bfe58['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x3c58ba) {
            _0x3c58ba = !![];
            _0xea39d8();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
