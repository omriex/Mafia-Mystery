document['addEventListener']('contextmenu', _0x202368 => _0x202368['preventDefault']());
const _0x2d7377 = {
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
let _0x5d0b2e = '';
function _0x1da01b(_0x282630, _0x1b9b93) {
    const _0x347d63 = document['getElementById']('role-list-ui');
    const _0x1100d5 = document['getElementById']('role-list-items');
    if (!_0x347d63 || !_0x1100d5)
        return;
    if (!_0x1b9b93 || _0x1b9b93 === 'off' || !_0x282630 || _0x282630['length'] === 0x0) {
        _0x347d63['style']['display'] = 'none';
        return;
    }
    const _0xf29eef = _0x1b9b93 + '|' + JSON['stringify'](_0x282630);
    if (_0xf29eef === _0x5d0b2e)
        return;
    _0x5d0b2e = _0xf29eef;
    const _0x568349 = document['getElementById']('role-tooltip');
    if (_0x568349) {
        _0x568349['style']['visibility'] = 'hidden';
        _0x568349['style']['opacity'] = '0';
    }
    _0x347d63['style']['display'] = 'flex';
    _0x1100d5['innerHTML'] = '';
    _0x282630['forEach'](_0x110fd4 => {
        const _0x516f2d = document['createElement']('div');
        _0x516f2d['className'] = 'role-list-entry';
        const _0x56d8fa = _0x110fd4['name']['includes']('Mafia') || _0x110fd4['name'] === 'Skinwalker';
        _0x516f2d['classList']['add'](_0x56d8fa ? 'mafia' : 'town');
        if (_0x1b9b93 === 'precise' && _0x110fd4['isDead']) {
            _0x516f2d['classList']['remove']('town', 'mafia');
            _0x516f2d['classList']['add']('dead');
            _0x516f2d['innerHTML'] = '<span>' + _0x110fd4['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x58a146 = _0x110fd4['count'] !== undefined && _0x110fd4['count'] !== null ? _0x110fd4['count'] + 'x\x20' : '';
            _0x516f2d['innerHTML'] = '<span>' + _0x58a146 + _0x110fd4['name'] + '</span>';
        }
        if (_0x1b9b93 === 'subalignments' && _0x2d7377[_0x110fd4['name']]) {
            _0x516f2d['style']['cursor'] = 'pointer';
            _0x516f2d['addEventListener']('mouseenter', () => {
                const _0x314094 = document['getElementById']('role-tooltip');
                if (!_0x314094)
                    return;
                const _0x138ff7 = _0x2d7377[_0x110fd4['name']]['join'](',\x20');
                _0x314094['innerHTML'] = '';
                const _0x16695d = document['createElement']('span');
                _0x16695d['style']['color'] = '#ffcc00';
                _0x16695d['textContent'] = _0x110fd4['name'];
                _0x314094['appendChild'](_0x16695d);
                _0x314094['appendChild'](document['createElement']('br'));
                _0x314094['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x138ff7));
                const _0x2e21dc = _0x516f2d['getBoundingClientRect']();
                _0x314094['style']['left'] = _0x2e21dc['left'] - 0xeb + 'px';
                _0x314094['style']['top'] = _0x2e21dc['top'] + 'px';
                _0x314094['style']['display'] = 'block';
                _0x314094['style']['visibility'] = 'visible';
                _0x314094['style']['opacity'] = '1';
            });
            _0x516f2d['addEventListener']('mouseleave', () => {
                const _0x583e77 = document['getElementById']('role-tooltip');
                if (_0x583e77) {
                    _0x583e77['style']['display'] = 'none';
                    _0x583e77['style']['visibility'] = 'hidden';
                    _0x583e77['style']['opacity'] = '0';
                }
            });
        }
        _0x1100d5['appendChild'](_0x516f2d);
    });
}
let _0x1ab0de = null;
let _0x5c6f01 = null;
const _0x387feb = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x54f4a1 = 'Player???';
let _0x484d63 = ![];
let _0x292c33 = {};
let _0x4fb31f = null;
let _0x13ba4f = 0x0;
let _0x29dfd8 = 0x0;
let _0x152869 = new Set();
let _0x10c7df = ![];
let _0x5b9e60 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x94bd31 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x5dcfaa = ![];
let _0x421b07 = null;
let _0x54ac9f = 0x0;
let _0x5c34dc = 0x0;
let _0x2ea040 = ![];
let _0x1d097a = ![];
let _0x3473b9 = 0x0;
let _0x146398 = null;
let _0x354cf5 = ![];
const _0x33dc31 = ((() => {
    const _0x1ad932 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x50e36c = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x1158d2 = 0x320;
    const _0x53893b = {};
    const _0x264f53 = {};
    let _0x1e05c9 = null;
    let _0x3dde6b = _0x50e36c === 0x0;
    let _0x40bf65 = ![];
    for (const [_0x553e89, _0x4c1f80] of Object['entries'](_0x1ad932)) {
        const _0x4fa61f = new Audio(_0x4c1f80);
        _0x4fa61f['loop'] = !![];
        _0x4fa61f['volume'] = 0x0;
        _0x4fa61f['preload'] = 'auto';
        _0x53893b[_0x553e89] = _0x4fa61f;
        _0x264f53[_0x553e89] = null;
    }
    const _0x1d2e8e = _0x21da83 => Math['min'](0x1, Math['max'](0x0, _0x21da83));
    function _0x4d4eff(_0x42832f) {
        if (_0x264f53[_0x42832f] !== null) {
            cancelAnimationFrame(_0x264f53[_0x42832f]);
            _0x264f53[_0x42832f] = null;
        }
    }
    function _0x5beaae(_0x4fd0bf, _0x32b949, _0x194439, _0x51b6e7, _0x36a9ad) {
        _0x4d4eff(_0x4fd0bf);
        const _0x292cab = _0x53893b[_0x4fd0bf];
        const _0x44b592 = performance['now']();
        const _0x3d19cd = _0x2535a3 => {
            const _0xe78f53 = _0x1d2e8e((_0x2535a3 - _0x44b592) / _0x51b6e7);
            const _0x3e76e9 = _0x1d2e8e(_0x32b949 + (_0x194439 - _0x32b949) * _0xe78f53);
            _0x292cab['volume'] = _0x3dde6b ? 0x0 : _0x3e76e9;
            if (_0xe78f53 < 0x1) {
                _0x264f53[_0x4fd0bf] = requestAnimationFrame(_0x3d19cd);
            } else {
                _0x264f53[_0x4fd0bf] = null;
                _0x292cab['volume'] = _0x3dde6b ? 0x0 : _0x1d2e8e(_0x194439);
                if (_0x36a9ad)
                    _0x36a9ad();
            }
        };
        _0x264f53[_0x4fd0bf] = requestAnimationFrame(_0x3d19cd);
    }
    function _0x13b463(_0x21b787) {
        const _0x43a05e = _0x21b787['play']();
        if (_0x43a05e && _0x43a05e['catch']) {
            _0x43a05e['catch'](() => {
                if (!_0x40bf65) {
                    const _0x23fe71 = () => {
                        _0x40bf65 = !![];
                        _0x21b787['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x23fe71);
                        document['removeEventListener']('keydown', _0x23fe71);
                        document['removeEventListener']('touchstart', _0x23fe71);
                    };
                    document['addEventListener']('click', _0x23fe71, { 'once': !![] });
                    document['addEventListener']('keydown', _0x23fe71, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x23fe71, { 'once': !![] });
                }
            });
        }
    }
    function _0x44ccc9(_0x27307b) {
        if (!_0x1ad932[_0x27307b])
            return;
        if (_0x1e05c9 === _0x27307b)
            return;
        const _0x3d92fe = _0x1e05c9;
        _0x1e05c9 = _0x27307b;
        const _0x5531d4 = _0x53893b[_0x27307b];
        _0x4d4eff(_0x27307b);
        _0x5531d4['currentTime'] = 0x0;
        _0x5531d4['volume'] = 0x0;
        _0x13b463(_0x5531d4);
        _0x5beaae(_0x27307b, 0x0, _0x50e36c, _0x1158d2);
        if (_0x3d92fe && _0x53893b[_0x3d92fe]) {
            const _0x4f03c8 = _0x3d92fe;
            const _0xa2f99 = _0x53893b[_0x4f03c8];
            const _0x4d6b61 = _0x1d2e8e(_0xa2f99['volume']);
            _0x5beaae(_0x4f03c8, _0x4d6b61, 0x0, _0x1158d2, () => {
                _0xa2f99['pause']();
                _0xa2f99['currentTime'] = 0x0;
            });
        }
    }
    function _0x55580d(_0x3a35f8) {
        _0x50e36c = _0x1d2e8e(_0x3a35f8);
        localStorage['setItem']('musicVolume', String(_0x50e36c));
        if (!_0x3dde6b && _0x1e05c9 && _0x264f53[_0x1e05c9] === null) {
            _0x53893b[_0x1e05c9]['volume'] = _0x50e36c;
        }
    }
    function _0x17bf28() {
        return _0x50e36c;
    }
    function _0x18b68c(_0x5653ef) {
        _0x3dde6b = _0x5653ef;
        for (const _0x48d78b of Object['keys'](_0x53893b)) {
            if (_0x264f53[_0x48d78b] === null) {
                _0x53893b[_0x48d78b]['volume'] = _0x5653ef || _0x48d78b !== _0x1e05c9 ? 0x0 : _0x50e36c;
            }
        }
    }
    function _0x3001f5() {
        return _0x3dde6b;
    }
    function _0x2c1985(_0x8a8555) {
        if (_0x8a8555 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x8a8555 === 'DAY_VOTE')
            return 'voting';
        if (_0x8a8555 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0xf961c(_0x20b1a4) {
        _0x44ccc9(_0x2c1985(_0x20b1a4));
    }
    function _0xadd7b4(_0x3d47f3) {
        _0x44ccc9(_0x3d47f3);
    }
    return {
        'play': _0x44ccc9,
        'onStateChange': _0xf961c,
        'onSoundEvent': _0xadd7b4,
        'setVolume': _0x55580d,
        'getVolume': _0x17bf28,
        'setMuted': _0x18b68c,
        'isMuted': _0x3001f5
    };
})());
const _0xfbf0c = ((() => {
    const _0x7537b1 = 0x258;
    const _0x4e92e8 = 0xb4;
    const _0x2ce96a = 0x708;
    const _0x127705 = 0x140;
    const _0x2c462b = 0.18;
    const _0x20ac94 = 0.95;
    const _0x1c8777 = new Audio('audio/heartbeat.mp3');
    _0x1c8777['loop'] = ![];
    _0x1c8777['preload'] = 'auto';
    _0x1c8777['volume'] = 0x0;
    let _0x291bde = 0x0;
    let _0x396ddd = Infinity;
    function _0x208e25(_0x256872, _0x3b18b6, _0x208876) {
        return Math['min'](_0x208876, Math['max'](_0x3b18b6, _0x256872));
    }
    function _0x57cb0f(_0x136d28, _0x422341, _0x2f126b) {
        return _0x136d28 + (_0x422341 - _0x136d28) * _0x2f126b;
    }
    function _0x21ebed(_0x3ebc74) {
        if (_0x1bc4e7['GAME_STATE'] !== 'NIGHT' || _0x3b2baf['isDead'] || _0x4fb31f === 'Skinwalker') {
            _0x396ddd = Infinity;
            return;
        }
        const _0x4915ef = _0x3b2baf['x'] + 22.5;
        const _0x3c6100 = _0x3b2baf['y'] + 22.5;
        let _0xd7f29d = Infinity;
        for (const _0x1ea6c8 in _0x292c33) {
            const _0x11afb0 = _0x292c33[_0x1ea6c8];
            if (!_0x11afb0['isDark'] || _0x11afb0['isDead'])
                continue;
            const _0x467801 = _0x11afb0['renderX'] + 22.5 - _0x4915ef;
            const _0x57d8a8 = _0x11afb0['renderY'] + 22.5 - _0x3c6100;
            const _0x4b1949 = Math['sqrt'](_0x467801 * _0x467801 + _0x57d8a8 * _0x57d8a8);
            if (_0x4b1949 < _0xd7f29d)
                _0xd7f29d = _0x4b1949;
        }
        _0x396ddd = _0xd7f29d;
        if (_0xd7f29d > _0x7537b1)
            return;
        const _0x59cdc2 = 0x1 - _0x208e25((_0xd7f29d - _0x4e92e8) / (_0x7537b1 - _0x4e92e8), 0x0, 0x1);
        const _0x32716a = _0x57cb0f(_0x2ce96a, _0x127705, _0x59cdc2);
        const _0x3c5881 = _0x57cb0f(_0x2c462b, _0x20ac94, _0x59cdc2);
        if (_0x3ebc74 >= _0x291bde) {
            _0x1c8777['currentTime'] = 0x0;
            _0x1c8777['volume'] = _0x33dc31['isMuted']() ? 0x0 : _0x208e25(_0x3c5881 * _0x33dc31['getVolume']() / 0.7, 0x0, 0x1);
            _0x1c8777['play']()['catch'](() => {
            });
            _0x291bde = _0x3ebc74 + _0x32716a;
        }
    }
    return { 'tick': _0x21ebed };
})());
function _0x128a4c() {
    const _0x1261d5 = document['getElementById']('mob-ability-btn');
    if (!_0x1261d5)
        return;
    const _0x572b81 = _0x1bc4e7['GAME_STATE'] === 'NIGHT' && !_0x3b2baf['isDead'];
    const _0x47c831 = _0x4fb31f === 'Mayor' && !_0x152869['has'](_0x5c6f01) && !_0x3b2baf['isDead'];
    if (_0x572b81 || _0x47c831) {
        _0x1261d5['style']['display'] = 'flex';
    } else {
        _0x1261d5['style']['display'] = 'none';
    }
}
function _0x35caaa() {
    const _0x3655ee = document['getElementById']('mobile-joystick-zone');
    const _0x1bfee3 = document['getElementById']('mobile-top-bar');
    const _0x348c0a = document['getElementById']('mobile-action-bar');
    if (!_0x3655ee || !_0x1bfee3 || !_0x348c0a)
        return;
    if (!_0x1291d2 && _0x94bd31) {
        _0x3655ee['style']['display'] = 'flex';
        _0x1bfee3['style']['display'] = 'flex';
        _0x348c0a['style']['display'] = 'flex';
        _0x128a4c();
    } else {
        _0x3655ee['style']['display'] = 'none';
        _0x1bfee3['style']['display'] = 'none';
        _0x348c0a['style']['display'] = 'none';
    }
}
const _0x53f1dc = document['getElementById']('gameCanvas');
const _0x50a837 = _0x53f1dc['getContext']('2d', { 'alpha': ![] });
const _0x4cc23b = 0x500;
const _0x2d852f = 0x2d0;
const _0x1bc4e7 = {
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
        'width': _0x4cc23b,
        'height': _0x2d852f
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
const _0x3b2baf = {
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
const _0x3c41ba = new Image();
const _0x253c1e = new Image();
const _0x2ba891 = new Image();
const _0x19b8d7 = new Image();
_0x19b8d7['src'] = 'assets/mayor\x20cosmetic.png';
const _0x483939 = [
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
const _0x436249 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x5c2fc7 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x5c2fc7 === 'body1.png' || _0x5c2fc7 === 'body1')
    _0x5c2fc7 = 'body01.png';
if (!_0x5c2fc7['endsWith']('.png'))
    _0x5c2fc7 += '.png';
let _0x15be43 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x15be43['endsWith']('.png'))
    _0x15be43 += '.png';
let _0x1291d2 = !![];
let _0x35bc3b = null;
let _0x3874e4 = null;
let _0x14e4df = 0x3c;
let _0x417168 = 0x2d;
const _0x5c508a = {};
const _0x4e16ba = new Image();
_0x4e16ba['src'] = 'assets/yanito932.png';
_0x5c508a['assets/yanito932.png'] = _0x4e16ba;
function _0x419450(_0x1263dc) {
    if (!_0x5c508a[_0x1263dc] || !_0x5c508a[_0x1263dc]['complete'] && _0x5c508a[_0x1263dc]['naturalWidth'] === 0x0 && _0x5c508a[_0x1263dc]['naturalHeight'] === 0x0) {
        const _0x520768 = new Image();
        _0x520768['src'] = _0x1263dc;
        _0x5c508a[_0x1263dc] = _0x520768;
    }
    return _0x5c508a[_0x1263dc];
}
function _0x49d018(_0x4e14ed, _0x255316, _0x1ef562, _0x305f38, _0x3bbc2e) {
    try {
        const _0x42a36c = 'assets/' + (_0x255316 || 'body01.png');
        const _0x57311d = _0x419450(_0x42a36c);
        if (_0x57311d['complete'] && _0x57311d['naturalWidth'] > 0x0) {
            _0x4e14ed['drawImage'](_0x57311d, -_0x305f38 / 0x2, -_0x3bbc2e / 0x2, _0x305f38, _0x3bbc2e);
        }
        if (_0x1ef562 === null || _0x1ef562 === undefined)
            return;
        const _0x7c8955 = 'assets/' + _0x1ef562;
        const _0x868c9 = _0x419450(_0x7c8955);
        if (_0x868c9['complete'] && _0x868c9['naturalWidth'] > 0x0) {
            _0x4e14ed['drawImage'](_0x868c9, -_0x305f38 / 0x2, -_0x3bbc2e / 0x2, _0x305f38, _0x3bbc2e);
        }
    } catch (_0x204078) {
    }
}
function _0x4f9d2f() {
    const _0x3a75e8 = document['getElementById']('body-skin-grid');
    const _0x38b717 = document['getElementById']('eyes-skin-grid');
    if (!_0x3a75e8 || !_0x38b717)
        return;
    _0x3a75e8['innerHTML'] = '';
    _0x483939['forEach'](_0x458434 => {
        const _0x5c0be4 = document['createElement']('button');
        _0x5c0be4['className'] = 'skin-btn' + (_0x458434 === _0x5c2fc7 ? '\x20selected' : '');
        const _0x7b0c7d = document['createElement']('img');
        _0x7b0c7d['src'] = 'assets/' + _0x458434;
        _0x5c0be4['appendChild'](_0x7b0c7d);
        _0x5c0be4['onclick'] = () => {
            _0x5c2fc7 = _0x458434;
            localStorage['setItem']('selectedBody', _0x458434);
            _0x3a75e8['querySelectorAll']('.skin-btn')['forEach'](_0x10962d => _0x10962d['classList']['remove']('selected'));
            _0x5c0be4['classList']['add']('selected');
        };
        _0x3a75e8['appendChild'](_0x5c0be4);
    });
    _0x38b717['innerHTML'] = '';
    _0x436249['forEach'](_0x2774f6 => {
        const _0x37ae17 = document['createElement']('button');
        _0x37ae17['className'] = 'skin-btn' + (_0x2774f6 === _0x15be43 ? '\x20selected' : '');
        const _0x337d7b = document['createElement']('img');
        _0x337d7b['src'] = 'assets/' + _0x2774f6;
        _0x37ae17['appendChild'](_0x337d7b);
        _0x37ae17['onclick'] = () => {
            _0x15be43 = _0x2774f6;
            localStorage['setItem']('selectedEyes', _0x2774f6);
            _0x38b717['querySelectorAll']('.skin-btn')['forEach'](_0x2bc2e4 => _0x2bc2e4['classList']['remove']('selected'));
            _0x37ae17['classList']['add']('selected');
        };
        _0x38b717['appendChild'](_0x37ae17);
    });
}
function _0x5e6753(_0x5e1d12) {
    if (!_0x1bc4e7['MAP']['columns'] || !_0x1bc4e7['CAMERA']['width'])
        return;
    const _0x326a4f = Math['max'](0x0, _0x1bc4e7['MAP']['columns'] * _0x1bc4e7['MAP']['tileSize'] - _0x1bc4e7['CAMERA']['width']);
    const _0x58758c = Math['max'](0x0, _0x1bc4e7['MAP']['rows'] * _0x1bc4e7['MAP']['tileSize'] - _0x1bc4e7['CAMERA']['height']);
    if (_0x35bc3b === null) {
        _0x35bc3b = _0x326a4f / 0x2;
        _0x3874e4 = _0x58758c / 0x2;
    }
    _0x35bc3b += _0x14e4df * _0x5e1d12;
    _0x3874e4 += _0x417168 * _0x5e1d12;
    if (_0x35bc3b <= 0x0) {
        _0x35bc3b = 0x0;
        _0x14e4df = Math['abs'](_0x14e4df);
    } else if (_0x35bc3b >= _0x326a4f) {
        _0x35bc3b = _0x326a4f;
        _0x14e4df = -Math['abs'](_0x14e4df);
    }
    if (_0x3874e4 <= 0x0) {
        _0x3874e4 = 0x0;
        _0x417168 = Math['abs'](_0x417168);
    } else if (_0x3874e4 >= _0x58758c) {
        _0x3874e4 = _0x58758c;
        _0x417168 = -Math['abs'](_0x417168);
    }
    _0x1bc4e7['CAMERA']['x'] = _0x35bc3b;
    _0x1bc4e7['CAMERA']['y'] = _0x3874e4;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x32afd2 = document['getElementById']('play-btn');
    const _0x3f571b = document['getElementById']('username-input');
    const _0x4684e0 = localStorage['getItem']('playerName');
    if (_0x4684e0 && _0x3f571b) {
        _0x3f571b['value'] = _0x4684e0;
    }
    const _0x5bdee3 = () => {
        _0x33dc31['play']('wait');
        document['removeEventListener']('click', _0x5bdee3);
        document['removeEventListener']('keydown', _0x5bdee3);
        document['removeEventListener']('touchstart', _0x5bdee3);
    };
    document['addEventListener']('click', _0x5bdee3, { 'once': !![] });
    document['addEventListener']('keydown', _0x5bdee3, { 'once': !![] });
    document['addEventListener']('touchstart', _0x5bdee3, { 'once': !![] });
    if (_0x32afd2) {
        _0x32afd2['addEventListener']('click', () => {
            const _0x5bc857 = _0x3f571b['value'];
            const _0x1c9c38 = _0x5bc857['replace'](/<[^>]*>/g, '')['replace'](/[^\x20-\x7E]/g, '')['replace'](/[<>]/g, '')['replace'](/\s+/g, '\x20')['trim']()['substring'](0x0, 0xe);
            _0x54f4a1 = _0x1c9c38 || 'Player';
            localStorage['setItem']('playerName', _0x54f4a1);
            _0x1291d2 = ![];
            _0x1bc4e7['CAMERA']['x'] = null;
            _0x1bc4e7['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x37c9dd = document['getElementById']('controls-hint');
            if (_0x37c9dd && !_0x94bd31)
                _0x37c9dd['style']['display'] = 'block';
            _0x35caaa();
            if (_0x94bd31) {
                const _0x2363b1 = document['getElementById']('leaderboard-list');
                const _0x3fa18a = document['getElementById']('leaderboard-toggle');
                if (_0x2363b1) {
                    _0x2363b1['style']['display'] = 'none';
                    if (_0x3fa18a)
                        _0x3fa18a['style']['transform'] = 'rotate(180deg)';
                }
                const _0x1d7cd0 = document['getElementById']('role-list-items');
                const _0x1bfd24 = document['getElementById']('role-list-toggle');
                if (_0x1d7cd0) {
                    _0x1d7cd0['style']['display'] = 'none';
                    if (_0x1bfd24)
                        _0x1bfd24['style']['transform'] = 'rotate(180deg)';
                }
            }
            if (_0x1ab0de && _0x1ab0de['readyState'] === WebSocket['OPEN']) {
                _0x1ab0de['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x54f4a1,
                    'token': _0x387feb,
                    'body': _0x5c2fc7,
                    'eyes': _0x15be43
                }));
            } else if (!_0x1ab0de || _0x1ab0de['readyState'] === WebSocket['CLOSED'] || _0x1ab0de['readyState'] === WebSocket['CLOSING']) {
                _0x531358();
            }
        });
    }
    _0x4f9d2f();
    _0x531358();
    _0x1fd7c6();
    _0x3f5cc1();
    _0x217266();
});
function _0x3f5cc1() {
    const _0x4ee62b = document['getElementById']('settings-btn');
    const _0x1308c7 = document['getElementById']('settings-panel');
    const _0x4ea8df = document['getElementById']('close-settings-btn');
    const _0x363dc7 = document['getElementById']('setting-mouse-relative');
    if (_0x363dc7) {
        _0x363dc7['checked'] = _0x5b9e60;
        _0x363dc7['addEventListener']('change', () => {
            _0x5b9e60 = _0x363dc7['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x5b9e60 ? 'true' : 'false');
        });
    }
    const _0x46577e = document['getElementById']('setting-music-volume');
    const _0x234f92 = document['getElementById']('setting-music-volume-display');
    function _0x32b910(_0x556e65) {
        const _0x168e45 = (_0x556e65['value'] - _0x556e65['min']) / (_0x556e65['max'] - _0x556e65['min']) * 0x64;
        _0x556e65['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x168e45 + '%,\x20#444\x20' + _0x168e45 + '%)';
    }
    if (_0x46577e) {
        const _0x432495 = _0x33dc31['getVolume']();
        const _0xd7d273 = Math['round'](_0x432495 * 0x64);
        _0x46577e['value'] = _0xd7d273;
        if (_0x234f92)
            _0x234f92['textContent'] = _0xd7d273 + '%';
        _0x32b910(_0x46577e);
        _0x46577e['addEventListener']('input', () => {
            const _0x1c6627 = parseInt(_0x46577e['value'], 0xa);
            if (_0x234f92)
                _0x234f92['textContent'] = _0x1c6627 + '%';
            _0x32b910(_0x46577e);
            _0x33dc31['setVolume'](_0x1c6627 / 0x64);
            _0x33dc31['setMuted'](_0x1c6627 === 0x0);
        });
    }
    if (_0x4ee62b && _0x1308c7) {
        _0x4ee62b['addEventListener']('click', _0x6f5e9e => {
            _0x6f5e9e['stopPropagation']();
            _0x1308c7['style']['display'] = _0x1308c7['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x4ea8df && _0x1308c7) {
        _0x4ea8df['addEventListener']('click', () => {
            _0x1308c7['style']['display'] = 'none';
        });
    }
    const _0x4370aa = document['getElementById']('mayor-confirm-yes');
    const _0x34039a = document['getElementById']('mayor-confirm-no');
    const _0x3407e4 = document['getElementById']('mayor-confirm-dialog');
    if (_0x4370aa && _0x3407e4) {
        _0x4370aa['addEventListener']('click', () => {
            if (_0x1ab0de && _0x1ab0de['readyState'] === WebSocket['OPEN']) {
                _0x1ab0de['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x3407e4['style']['display'] = 'none';
        });
    }
    if (_0x34039a && _0x3407e4) {
        _0x34039a['addEventListener']('click', () => {
            _0x3407e4['style']['display'] = 'none';
        });
    }
    const _0x52668d = document['getElementById']('close-ability-btn');
    if (_0x52668d) {
        _0x52668d['addEventListener']('click', () => {
            const _0x492b9d = document['getElementById']('ability-ui');
            if (_0x492b9d)
                _0x492b9d['style']['display'] = 'none';
        });
    }
}
let _0x359537 = '';
function _0x189e88(_0xbd56c3) {
    const _0x574fbe = document['getElementById']('vote-tally-panel');
    const _0x277440 = document['getElementById']('vote-tally-list');
    if (!_0x574fbe || !_0x277440)
        return;
    if (_0xbd56c3['state'] !== 'DAY_VOTE') {
        _0x574fbe['style']['display'] = 'none';
        _0x359537 = '';
        return;
    }
    _0x574fbe['style']['display'] = 'block';
    const _0x219b0d = {};
    for (const _0x117029 in _0x292c33) {
        if (!_0x292c33[_0x117029]['isDead'])
            _0x219b0d[_0x117029] = 0x0;
    }
    if (_0x5c6f01 && !_0x3b2baf['isDead'])
        _0x219b0d[_0x5c6f01] = 0x0;
    const _0x191f36 = _0xbd56c3['votes'] || {};
    for (const _0x52237b in _0x191f36) {
        const _0x50d2b1 = _0x191f36[_0x52237b];
        const _0x441f7d = _0xbd56c3['mayorRevealed'] && _0xbd56c3['mayorRevealed'][_0x52237b] ? 0x2 : 0x1;
        _0x219b0d[_0x50d2b1] = (_0x219b0d[_0x50d2b1] || 0x0) + _0x441f7d;
    }
    let _0x3cf087 = 0x0;
    const _0x4662c8 = _0xbd56c3['skips'] || {};
    for (const _0xd32b07 in _0x4662c8) {
        _0x3cf087 += Number(_0x4662c8[_0xd32b07]) || 0x1;
    }
    const _0x5ec16f = JSON['stringify'](_0x219b0d) + '_' + _0x3cf087 + '_' + _0x3b2baf['isDead'];
    if (_0x5ec16f === _0x359537)
        return;
    _0x359537 = _0x5ec16f;
    _0x277440['innerHTML'] = '';
    for (const _0xfaa89e in _0x219b0d) {
        const _0x31fae5 = parseInt(_0xfaa89e);
        const _0x1a59f7 = _0x31fae5 === _0x5c6f01 ? _0x54f4a1 : _0x292c33[_0xfaa89e] ? _0x292c33[_0xfaa89e]['name'] : 'Player\x20' + _0xfaa89e;
        const _0x303fca = document['createElement']('div');
        _0x303fca['className'] = 'vote-tally-entry';
        const _0x41b8c8 = document['createElement']('span');
        _0x41b8c8['textContent'] = _0x1a59f7;
        const _0x1e392d = document['createElement']('span');
        _0x1e392d['className'] = 'vote-count';
        _0x1e392d['textContent'] = _0x219b0d[_0xfaa89e] + '\x20vote' + (_0x219b0d[_0xfaa89e] === 0x1 ? '' : 's');
        _0x303fca['appendChild'](_0x41b8c8);
        _0x303fca['appendChild'](_0x1e392d);
        if (_0x31fae5 !== _0x5c6f01 && !_0x3b2baf['isDead']) {
            _0x303fca['style']['cursor'] = 'pointer';
            _0x303fca['title'] = 'Vote\x20for\x20' + _0x1a59f7;
            _0x303fca['addEventListener']('click', _0x219b13 => {
                _0x219b13['stopPropagation']();
                if (_0x1ab0de && _0x1ab0de['readyState'] === WebSocket['OPEN']) {
                    _0x1ab0de['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x1a59f7
                    }));
                }
            });
        }
        _0x277440['appendChild'](_0x303fca);
    }
    const _0x49603c = document['createElement']('div');
    _0x49603c['className'] = 'vote-tally-skip';
    _0x49603c['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x3cf087 + '</span>';
    if (!_0x3b2baf['isDead']) {
        _0x49603c['style']['cursor'] = 'pointer';
        _0x49603c['title'] = 'Click\x20to\x20skip\x20vote';
        _0x49603c['addEventListener']('click', _0x3c4cee => {
            _0x3c4cee['stopPropagation']();
            if (_0x1ab0de && _0x1ab0de['readyState'] === WebSocket['OPEN']) {
                _0x1ab0de['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x277440['appendChild'](_0x49603c);
}
let _0x112f18 = null;
let _0x469e13 = null;
let _0x50782e = null;
function _0x2b7fa1() {
    if (_0x1ab0de && _0x1ab0de['readyState'] === WebSocket['OPEN']) {
        _0x1ab0de['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x112f18,
            'abilityTarget': _0x469e13,
            'killTarget': _0x50782e
        }));
    }
}
function _0x20ccd5() {
    const _0x440ae0 = document['getElementById']('ability-ui-body');
    if (!_0x440ae0)
        return;
    _0x440ae0['innerHTML'] = '';
    if (_0x4fb31f === 'Celebrity' || _0x4fb31f === 'Mayor') {
        const _0x336ecc = document['createElement']('div');
        _0x336ecc['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x336ecc['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x440ae0['appendChild'](_0x336ecc);
        return;
    }
    if (_0x4fb31f === 'Skinwalker') {
        const _0x364e16 = document['createElement']('div');
        _0x364e16['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x364e16['innerText'] = 'Transform\x20into:';
        _0x440ae0['appendChild'](_0x364e16);
        const _0x1edb58 = document['createElement']('div');
        _0x1edb58['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x23a5f7 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x2813b4 = _0x53c27e => {
            if (!_0x1bc4e7['ROLE_LIST_RAW'] || _0x1bc4e7['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x1bc4e7['ROLE_LIST_RAW']['some'](_0x317cdd => {
                if (_0x317cdd['name'] === _0x53c27e)
                    return !_0x317cdd['isDead'];
                if (_0x2d7377[_0x317cdd['name']] && _0x2d7377[_0x317cdd['name']]['includes'](_0x53c27e))
                    return !![];
                return ![];
            });
        };
        const _0x33f969 = [
            'None',
            ..._0x23a5f7['filter'](_0x2813b4)
        ];
        _0x33f969['forEach'](_0x1b6722 => {
            const _0xaaaca = document['createElement']('button');
            _0xaaaca['className'] = 'layer-btn';
            _0xaaaca['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0xaaaca['innerText'] = _0x1b6722;
            const _0x3940e6 = _0x1b6722 === 'None' && !_0x112f18 || _0x112f18 === _0x1b6722;
            if (_0x3940e6)
                _0xaaaca['classList']['add']('active');
            _0xaaaca['onclick'] = () => {
                _0x112f18 = _0x1b6722 === 'None' ? null : _0x1b6722;
                _0x2b7fa1();
                _0x20ccd5();
            };
            _0x1edb58['appendChild'](_0xaaaca);
        });
        _0x440ae0['appendChild'](_0x1edb58);
        if (_0x2813b4('Vigilante')) {
            const _0x295ad6 = document['createElement']('div');
            _0x295ad6['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x295ad6['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x440ae0['appendChild'](_0x295ad6);
        }
        if (_0x112f18 === 'Vigilante') {
            const _0x263dea = document['createElement']('div');
            _0x263dea['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x263dea['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x440ae0['appendChild'](_0x263dea);
        } else if (_0x112f18 && _0x112f18 !== 'Celebrity') {
            const _0x42837d = document['createElement']('div');
            _0x42837d['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x42837d['innerText'] = 'Use\x20' + _0x112f18 + '\x20ability\x20on:';
            _0x440ae0['appendChild'](_0x42837d);
            const _0x423ac2 = document['createElement']('div');
            _0x423ac2['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x3353bd = document['createElement']('button');
            _0x3353bd['className'] = 'layer-btn';
            _0x3353bd['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x3353bd['innerText'] = 'No\x20one';
            if (!_0x469e13)
                _0x3353bd['classList']['add']('active');
            _0x3353bd['onclick'] = () => {
                _0x469e13 = null;
                _0x2b7fa1();
                _0x20ccd5();
            };
            _0x423ac2['appendChild'](_0x3353bd);
            for (const _0x2ca1bb in _0x292c33) {
                const _0x1f73bc = _0x292c33[_0x2ca1bb];
                if (_0x1f73bc['isDead'])
                    continue;
                const _0x1fc8c7 = document['createElement']('button');
                _0x1fc8c7['className'] = 'layer-btn';
                _0x1fc8c7['innerText'] = _0x1f73bc['name'];
                if (_0x469e13 === parseInt(_0x2ca1bb))
                    _0x1fc8c7['classList']['add']('active');
                _0x1fc8c7['onclick'] = () => {
                    _0x469e13 = parseInt(_0x2ca1bb);
                    _0x2b7fa1();
                    _0x20ccd5();
                };
                _0x423ac2['appendChild'](_0x1fc8c7);
            }
            _0x440ae0['appendChild'](_0x423ac2);
        }
        const _0x10f10b = document['createElement']('div');
        _0x10f10b['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x10f10b['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x440ae0['appendChild'](_0x10f10b);
        const _0x3bf808 = document['createElement']('div');
        _0x3bf808['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x384701 = document['createElement']('button');
        _0x384701['className'] = 'layer-btn';
        _0x384701['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x384701['innerText'] = 'No\x20one';
        if (!_0x50782e && !_0x1bc4e7['CURRENT_TARGET'])
            _0x384701['classList']['add']('active');
        _0x384701['onclick'] = () => {
            _0x50782e = null;
            _0x1bc4e7['CURRENT_TARGET'] = null;
            _0x2b7fa1();
            _0x20ccd5();
        };
        _0x3bf808['appendChild'](_0x384701);
        for (const _0x2cd285 in _0x292c33) {
            const _0x3ce42d = _0x292c33[_0x2cd285];
            if (_0x3ce42d['isDead'])
                continue;
            const _0x4aca83 = document['createElement']('button');
            _0x4aca83['className'] = 'layer-btn';
            _0x4aca83['innerText'] = _0x3ce42d['name'];
            if (_0x50782e === parseInt(_0x2cd285) || _0x1bc4e7['CURRENT_TARGET'] === parseInt(_0x2cd285))
                _0x4aca83['classList']['add']('active');
            _0x4aca83['onclick'] = () => {
                _0x50782e = parseInt(_0x2cd285);
                _0x1bc4e7['CURRENT_TARGET'] = parseInt(_0x2cd285);
                _0x2b7fa1();
                _0x20ccd5();
            };
            _0x3bf808['appendChild'](_0x4aca83);
        }
        _0x440ae0['appendChild'](_0x3bf808);
        return;
    }
    let _0x4ccc66 = '';
    let _0x5d6026 = ![];
    if (_0x4fb31f === 'Doctor') {
        _0x4ccc66 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x5d6026 = !![];
    } else if (_0x4fb31f === 'Investigator') {
        _0x4ccc66 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x4fb31f === 'Tracker') {
        _0x4ccc66 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x4fb31f === 'Archer') {
        _0x4ccc66 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x4fb31f === 'Escort') {
        _0x4ccc66 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x4fb31f === 'Vigilante') {
        _0x4ccc66 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x5bd896 = document['createElement']('div');
    _0x5bd896['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x5bd896['innerText'] = _0x4ccc66;
    _0x440ae0['appendChild'](_0x5bd896);
    const _0x563e31 = document['createElement']('div');
    _0x563e31['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x46dfdb = document['createElement']('button');
    _0x46dfdb['className'] = 'layer-btn';
    _0x46dfdb['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x46dfdb['innerText'] = 'No\x20one';
    if (_0x1bc4e7['CURRENT_TARGET'] === null)
        _0x46dfdb['classList']['add']('active');
    _0x46dfdb['onclick'] = () => {
        _0x1bc4e7['CURRENT_TARGET'] = null;
        if (_0x1ab0de && _0x1ab0de['readyState'] === WebSocket['OPEN']) {
            _0x1ab0de['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x20ccd5();
    };
    _0x563e31['appendChild'](_0x46dfdb);
    for (const _0x23c07e in _0x292c33) {
        const _0xc32c74 = _0x292c33[_0x23c07e];
        if (_0xc32c74['isDead'])
            continue;
        const _0x2e9cc8 = document['createElement']('button');
        _0x2e9cc8['className'] = 'layer-btn';
        _0x2e9cc8['innerText'] = _0xc32c74['name'];
        if (_0x1bc4e7['CURRENT_TARGET'] === parseInt(_0x23c07e))
            _0x2e9cc8['classList']['add']('active');
        _0x2e9cc8['onclick'] = () => {
            _0x1bc4e7['CURRENT_TARGET'] = parseInt(_0x23c07e);
            if (_0x1ab0de && _0x1ab0de['readyState'] === WebSocket['OPEN']) {
                _0x1ab0de['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x23c07e)
                }));
            }
            _0x20ccd5();
        };
        _0x563e31['appendChild'](_0x2e9cc8);
    }
    if (_0x5d6026 && !_0x3b2baf['isDead']) {
        const _0x4bf256 = document['createElement']('button');
        _0x4bf256['className'] = 'layer-btn';
        _0x4bf256['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x4bf256['innerText'] = _0x54f4a1 + '\x20(Self)';
        if (_0x1bc4e7['CURRENT_TARGET'] === _0x5c6f01)
            _0x4bf256['classList']['add']('active');
        _0x4bf256['onclick'] = () => {
            _0x1bc4e7['CURRENT_TARGET'] = _0x5c6f01;
            if (_0x1ab0de && _0x1ab0de['readyState'] === WebSocket['OPEN']) {
                _0x1ab0de['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x5c6f01
                }));
            }
            _0x20ccd5();
        };
        _0x563e31['appendChild'](_0x4bf256);
    }
    _0x440ae0['appendChild'](_0x563e31);
}
function _0x531358() {
    if (_0x1ab0de && (_0x1ab0de['readyState'] === WebSocket['OPEN'] || _0x1ab0de['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x2b9a52 = new URLSearchParams();
    if (_0x387feb)
        _0x2b9a52['set']('token', _0x387feb);
    _0x2b9a52['set']('ngrok-skip-browser-warning', 'true');
    const _0x376ec1 = 'wss://prison-rankings-inspector-terry.trycloudflare.com';
    const _0x2c5664 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x376ec1;
    const _0x1ef150 = _0x2c5664 + '/?' + _0x2b9a52['toString']();
    _0x1ab0de = new WebSocket(_0x1ef150);
    _0x1ab0de['onopen'] = function () {
        if (!_0x1291d2 && this['readyState'] === WebSocket['OPEN']) {
            this['send'](JSON['stringify']({
                'type': 'join',
                'name': _0x54f4a1,
                'token': _0x387feb,
                'body': _0x5c2fc7,
                'eyes': _0x15be43
            }));
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x1ab0de && _0x1ab0de['readyState'] === WebSocket['OPEN']) {
            _0x1ab0de['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x1ab0de['onclose'] = _0xea3d2f => {
        if (_0xea3d2f['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0xea3d2f['code'] === 0xfa2 || _0xea3d2f['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x1ac59d = document['getElementById']('disconnect-overlay');
        if (!_0x1ac59d) {
            _0x1ac59d = document['createElement']('div');
            _0x1ac59d['id'] = 'disconnect-overlay';
            _0x1ac59d['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x1ac59d['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x1ac59d);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x1ab0de['onmessage'] = _0xd291f0 => {
        const _0x281e3d = JSON['parse'](_0xd291f0['data']);
        if (_0x281e3d['type'] === 'map_data') {
            _0x1bc4e7['MAP']['tileSize'] = _0x281e3d['map']['tileSize'];
            _0x1bc4e7['MAP']['columns'] = _0x281e3d['map']['columns'];
            _0x1bc4e7['MAP']['rows'] = _0x281e3d['map']['rows'];
            _0x1bc4e7['MAP']['layers'] = _0x281e3d['map']['layers'];
            if (_0x281e3d['map']['doors']) {
                _0x1bc4e7['MAP']['doors'] = _0x281e3d['map']['doors'];
                const _0x540a32 = _0x1bc4e7['MAP']['layers']['find'](_0x507908 => _0x507908['name'] === 'floor2');
                if (_0x540a32) {
                    for (const _0x574889 in _0x1bc4e7['MAP']['doors']) {
                        _0x540a32['data'][parseInt(_0x574889)] = 0x2;
                    }
                }
            }
            if (_0x281e3d['entities'])
                _0x1bc4e7['ENTITIES'] = _0x281e3d['entities'];
            _0x59bc5d();
            _0x1bc4e7['SYSTEM']['isReady'] = !![];
            _0x18b441();
            if (!_0x1bc4e7['SYSTEM']['_gameLoopRunning']) {
                _0x1bc4e7['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x4f92a1);
            }
            return;
        }
        if (_0x281e3d['type'] === 'init') {
            _0x5c6f01 = _0x281e3d['id'];
            _0x1291d2 = ![];
            _0x35caaa();
            if (_0x94bd31) {
                const _0x4282a7 = document['getElementById']('leaderboard-list');
                const _0x289243 = document['getElementById']('leaderboard-toggle');
                if (_0x4282a7) {
                    _0x4282a7['style']['display'] = 'none';
                    if (_0x289243)
                        _0x289243['style']['transform'] = 'rotate(180deg)';
                }
                const _0x2412bd = document['getElementById']('role-list-items');
                const _0x1c1ebe = document['getElementById']('role-list-toggle');
                if (_0x2412bd) {
                    _0x2412bd['style']['display'] = 'none';
                    if (_0x1c1ebe)
                        _0x1c1ebe['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x484d63 = _0x281e3d['isOwner'] || ![];
            _0x54f4a1 = _0x281e3d['name'] || _0x54f4a1;
            _0x1bc4e7['MAP']['tileSize'] = _0x281e3d['map']['tileSize'];
            _0x1bc4e7['MAP']['columns'] = _0x281e3d['map']['columns'];
            _0x1bc4e7['MAP']['rows'] = _0x281e3d['map']['rows'];
            _0x1bc4e7['MAP']['layers'] = _0x281e3d['map']['layers'];
            if (_0x281e3d['map']['doors']) {
                _0x1bc4e7['MAP']['doors'] = _0x281e3d['map']['doors'];
                const _0x40db1a = _0x1bc4e7['MAP']['layers']['find'](_0x5ccca2 => _0x5ccca2['name'] === 'floor2');
                if (_0x40db1a) {
                    for (const _0x5607e3 in _0x1bc4e7['MAP']['doors']) {
                        _0x40db1a['data'][parseInt(_0x5607e3)] = 0x2;
                    }
                }
            }
            if (_0x281e3d['entities'])
                _0x1bc4e7['ENTITIES'] = _0x281e3d['entities'];
            _0x59bc5d();
            _0x3b2baf['x'] = _0x1bc4e7['MAP']['columns'] * _0x1bc4e7['MAP']['tileSize'] / 0x2;
            _0x3b2baf['y'] = _0x1bc4e7['MAP']['rows'] * _0x1bc4e7['MAP']['tileSize'] / 0x2;
            _0x1bc4e7['CAMERA']['x'] = _0x3b2baf['x'] + _0x3b2baf['width'] / 0x2 - _0x1bc4e7['CAMERA']['width'] / 0x2;
            _0x1bc4e7['CAMERA']['y'] = _0x3b2baf['y'] + _0x3b2baf['height'] / 0x2 - _0x1bc4e7['CAMERA']['height'] / 0x2;
            if (_0x484d63) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x30cd76();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x1bc4e7['SYSTEM']['lastTime'] = performance['now']();
            _0x1bc4e7['SYSTEM']['isReady'] = !![];
            _0x561984();
            if (!_0x1bc4e7['SYSTEM']['_gameLoopRunning']) {
                _0x1bc4e7['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x4f92a1);
            }
            return;
        } else if (_0x281e3d['type'] === 'state') {
            const _0x136a67 = {};
            for (const _0x4fec95 in _0x281e3d['players']) {
                if (parseInt(_0x4fec95) === _0x5c6f01)
                    continue;
                const _0x3d57cf = _0x281e3d['players'][_0x4fec95];
                const _0x16d21a = _0x292c33[_0x4fec95];
                if (_0x16d21a) {
                    const _0x25f72a = _0x3d57cf['x'] - _0x16d21a['renderX'];
                    const _0xcf7560 = _0x3d57cf['y'] - _0x16d21a['renderY'];
                    const _0x598d15 = _0x25f72a * _0x25f72a + _0xcf7560 * _0xcf7560 > 0x78 * 0x78;
                    Object['assign'](_0x16d21a, _0x3d57cf);
                    if (_0x598d15) {
                        _0x16d21a['renderX'] = _0x3d57cf['x'];
                        _0x16d21a['renderY'] = _0x3d57cf['y'];
                    }
                    _0x136a67[_0x4fec95] = _0x16d21a;
                } else {
                    _0x136a67[_0x4fec95] = {
                        ..._0x3d57cf,
                        'renderX': _0x3d57cf['x'],
                        'renderY': _0x3d57cf['y'],
                        'renderAngle': _0x3d57cf['angle'] || 0x0
                    };
                }
            }
            _0x292c33 = _0x136a67;
            if (_0x281e3d['players'][_0x5c6f01]) {
                const _0xb60d79 = _0x281e3d['players'][_0x5c6f01];
                _0x3b2baf['chats'] = _0xb60d79['chats'] || [];
                _0x3b2baf['isDead'] = _0xb60d79['isDead'];
                if (_0xb60d79['name'])
                    _0x54f4a1 = _0xb60d79['name'];
                _0x561984();
                const _0x32f7f8 = Math['hypot'](_0xb60d79['x'] - _0x3b2baf['x'], _0xb60d79['y'] - _0x3b2baf['y']);
                if (_0x32f7f8 > 0xfa) {
                    _0x3b2baf['x'] = _0xb60d79['x'];
                    _0x3b2baf['y'] = _0xb60d79['y'];
                } else if (_0x32f7f8 > 0x50) {
                    _0x3b2baf['x'] += (_0xb60d79['x'] - _0x3b2baf['x']) * 0.06;
                    _0x3b2baf['y'] += (_0xb60d79['y'] - _0x3b2baf['y']) * 0.06;
                }
            }
            if (_0x281e3d['entities'])
                _0x1bc4e7['ENTITIES'] = _0x281e3d['entities'];
            if (_0x281e3d['game']) {
                _0x1bc4e7['GAME_STATE'] = _0x281e3d['game']['state'];
                _0x1bc4e7['NIGHT_ABILITY_OPEN'] = _0x281e3d['game']['nightAbilityOpen'];
                if (_0x281e3d['game']['mayorRevealed']) {
                    for (const _0x506bf8 in _0x281e3d['game']['mayorRevealed']) {
                        _0x152869['add'](parseInt(_0x506bf8));
                    }
                }
                if (_0x1bc4e7['LAST_STATE'] !== _0x1bc4e7['GAME_STATE']) {
                    if (_0x1bc4e7['GAME_STATE'] !== 'NIGHT') {
                        _0x1bc4e7['CURRENT_TARGET'] = null;
                        _0x112f18 = null;
                        _0x469e13 = null;
                        _0x50782e = null;
                        const _0x5cfd43 = document['getElementById']('ability-ui');
                        if (_0x5cfd43)
                            _0x5cfd43['style']['display'] = 'none';
                    }
                    if (_0x1bc4e7['GAME_STATE'] === 'NIGHT') {
                        _0x3b2baf['chats'] = [];
                        for (const _0x57545a in _0x292c33) {
                            _0x292c33[_0x57545a]['chats'] = [];
                        }
                    }
                    _0x1bc4e7['LAST_STATE'] = _0x1bc4e7['GAME_STATE'];
                    _0x128a4c();
                    _0x33dc31['onStateChange'](_0x1bc4e7['GAME_STATE'], _0x281e3d['game']['nightAbilityOpen']);
                }
                const _0xbf040a = document['getElementById']('phase-ui');
                if (_0xbf040a) {
                    _0xbf040a['style']['display'] = 'block';
                    let _0x4787a7 = _0x281e3d['game']['state']['replace']('_', '\x20');
                    if (_0x281e3d['game']['state'] === 'DAY_DISCUSS') {
                        _0x4787a7 = 'DAY\x20' + (_0x281e3d['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x281e3d['game']['timer'] + 's';
                    } else if (_0x281e3d['game']['state'] === 'DAY_VOTE') {
                        _0x4787a7 = 'DAY\x20' + (_0x281e3d['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x281e3d['game']['timer'] + 's';
                    } else if (_0x281e3d['game']['state'] === 'NIGHT') {
                        const _0x4489b9 = _0x281e3d['game']['dayCount'] || 0x1;
                        if (_0x281e3d['game']['nightAbilityOpen']) {
                            _0x4787a7 = 'NIGHT\x20' + _0x4489b9 + '\x20ABILITY\x20PHASE';
                            const _0x2b337e = _0x281e3d['game']['abilityTimer'] !== undefined ? _0x281e3d['game']['abilityTimer'] : _0x281e3d['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x2b337e + 's';
                        } else {
                            _0x4787a7 = 'NIGHT\x20' + _0x4489b9;
                            document['getElementById']('phase-timer')['innerText'] = _0x281e3d['game']['timer'] + 's';
                        }
                    }
                    document['getElementById']('phase-name')['innerText'] = _0x4787a7;
                }
                if (_0x281e3d['game']['state'] === 'NIGHT') {
                    const _0x1c0148 = document['getElementById']('ability-timer-label');
                    if (_0x1c0148) {
                        const _0xa8b3ec = _0x281e3d['game']['abilityTimer'] !== undefined ? _0x281e3d['game']['abilityTimer'] : _0x281e3d['game']['timer'];
                        _0x1c0148['innerText'] = _0x281e3d['game']['nightAbilityOpen'] ? _0xa8b3ec + 's' : '';
                    }
                    if (_0x281e3d['game']['nightAbilityOpen'] && !_0x10c7df && !_0x3b2baf['isDead']) {
                        _0x10c7df = !![];
                        _0x20ccd5();
                        const _0xff20c7 = document['getElementById']('ability-ui');
                        if (_0xff20c7)
                            _0xff20c7['style']['display'] = 'block';
                    }
                    if (!_0x281e3d['game']['nightAbilityOpen']) {
                        const _0x454238 = document['getElementById']('ability-ui');
                        if (_0x454238 && _0x454238['style']['display'] === 'block') {
                            _0x454238['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x10c7df = ![];
                }
                _0x189e88(_0x281e3d['game']);
                if (_0x281e3d['game']['roleListMode'] !== undefined) {
                    _0x1bc4e7['ROLE_LIST_RAW'] = _0x281e3d['game']['roleList'] || [];
                    _0x1da01b(_0x281e3d['game']['roleList'], _0x281e3d['game']['roleListMode']);
                }
            }
        } else if (_0x281e3d['type'] === 'teleport') {
            _0x3b2baf['x'] = _0x281e3d['x'];
            _0x3b2baf['y'] = _0x281e3d['y'];
            _0x3b2baf['vx'] = 0x0;
            _0x3b2baf['vy'] = 0x0;
            _0x1bc4e7['CAMERA']['x'] = null;
            if (_0x281e3d['teleportId'] !== undefined)
                _0x29dfd8 = _0x281e3d['teleportId'];
        } else if (_0x281e3d['type'] === 'bulk_teleport') {
            for (const _0x19cc66 in _0x281e3d['positions']) {
                const _0x370546 = _0x281e3d['positions'][_0x19cc66];
                if (parseInt(_0x19cc66) === _0x5c6f01) {
                    _0x3b2baf['x'] = _0x370546['x'];
                    _0x3b2baf['y'] = _0x370546['y'];
                    _0x3b2baf['vx'] = 0x0;
                    _0x3b2baf['vy'] = 0x0;
                    _0x1bc4e7['CAMERA']['x'] = null;
                    continue;
                }
                const _0x19ee6e = _0x292c33[_0x19cc66];
                if (_0x19ee6e) {
                    _0x19ee6e['x'] = _0x370546['x'];
                    _0x19ee6e['y'] = _0x370546['y'];
                    _0x19ee6e['renderX'] = _0x370546['x'];
                    _0x19ee6e['renderY'] = _0x370546['y'];
                    _0x19ee6e['vx'] = 0x0;
                    _0x19ee6e['vy'] = 0x0;
                }
            }
        } else if (_0x281e3d['type'] === 'player_left') {
            delete _0x292c33[_0x281e3d['id']];
            _0x152869['delete'](parseInt(_0x281e3d['id']));
        } else if (_0x281e3d['type'] === 'map_update') {
            const _0xcfa6f5 = _0x1bc4e7['MAP']['layers']['find'](_0x449302 => _0x449302['name'] === _0x281e3d['layer']);
            if (_0xcfa6f5) {
                _0xcfa6f5['data'][_0x281e3d['row'] * _0x1bc4e7['MAP']['columns'] + _0x281e3d['col']] = _0x281e3d['gid'];
                const _0x43f294 = _0x281e3d['row'] * _0x1bc4e7['MAP']['columns'] + _0x281e3d['col'];
                if (_0x1bc4e7['MAP']['doors'] && _0x1bc4e7['MAP']['doors'][_0x43f294]) {
                    const _0x3a71df = _0x1bc4e7['MAP']['layers']['find'](_0x32dee0 => _0x32dee0['name'] === 'floor2');
                    if (_0x3a71df)
                        _0x3a71df['data'][_0x43f294] = 0x2;
                }
                const _0x2c897c = Math['floor'](_0x281e3d['col'] * _0x1bc4e7['MAP']['tileSize'] / _0x1bc4e7['MAP']['chunkSize']);
                const _0x4a4cc2 = Math['floor'](_0x281e3d['row'] * _0x1bc4e7['MAP']['tileSize'] / _0x1bc4e7['MAP']['chunkSize']);
                _0x2f9081(_0x2c897c, _0x4a4cc2);
            }
        } else if (_0x281e3d['type'] === 'role_assign') {
            _0x4fb31f = _0x281e3d['role'];
            _0x3b2baf['isDead'] = _0x4fb31f === 'Spectator';
            _0x152869['clear']();
            _0x1bc4e7['CURRENT_TARGET'] = null;
            _0x112f18 = null;
            _0x469e13 = null;
            _0x50782e = null;
            _0x10c7df = ![];
            const _0x1e40e0 = document['getElementById']('ability-ui');
            if (_0x1e40e0)
                _0x1e40e0['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x4fb31f;
            _0x128a4c();
            _0x540046(_0x4fb31f === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x4fb31f, !![]);
            let _0x4c0843 = '';
            if (_0x4fb31f === 'Investigator')
                _0x4c0843 = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x4fb31f === 'Tracker')
                _0x4c0843 = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x4fb31f === 'Doctor')
                _0x4c0843 = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x4fb31f === 'Archer')
                _0x4c0843 = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x4fb31f === 'Escort')
                _0x4c0843 = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x4fb31f === 'Vigilante')
                _0x4c0843 = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x4fb31f === 'Skinwalker')
                _0x4c0843 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x4fb31f === 'Celebrity')
                _0x4c0843 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x4fb31f === 'Mayor')
                _0x4c0843 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x540046(_0x4c0843, !![]);
        } else if (_0x281e3d['type'] === 'mayor_reveal') {
            _0x152869['add'](parseInt(_0x281e3d['playerId']));
            _0x561984();
            _0x128a4c();
        } else if (_0x281e3d['type'] === 'rolelist_update') {
            _0x1bc4e7['ROLE_LIST_RAW'] = _0x281e3d['list'] || [];
            _0x1da01b(_0x281e3d['list'], _0x281e3d['mode']);
        } else if (_0x281e3d['type'] === 'sound_event') {
            _0x33dc31['onSoundEvent'](_0x281e3d['track']);
        } else if (_0x281e3d['type'] === 'game_over') {
            _0x33dc31['onStateChange']('LOBBY', ![]);
            _0x1da01b([], 'off');
            _0x4fb31f = null;
            _0x3b2baf['isDead'] = ![];
            _0x152869['clear']();
            _0x1bc4e7['CURRENT_TARGET'] = null;
            _0x112f18 = null;
            _0x469e13 = null;
            _0x50782e = null;
            _0x10c7df = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x128a4c();
            _0x540046('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x281e3d['type'] === 'chat_log') {
            _0x540046(_0x281e3d['sender'] + ':\x20' + _0x281e3d['text']);
        } else if (_0x281e3d['type'] === 'sys_chat') {
            _0x540046(_0x281e3d['text'], !![]);
        }
    };
}
function _0x540046(_0x207549, _0x1ed75c = ![]) {
    const _0x1b263c = document['getElementById']('chat-log-messages');
    const _0x64ca34 = document['getElementById']('chat-log-ui');
    const _0x37e067 = _0x64ca34['scrollHeight'] - _0x64ca34['scrollTop'] - _0x64ca34['clientHeight'] < 0x1e;
    const _0xf46d1 = document['createElement']('div');
    _0xf46d1['className'] = 'chat-log-line' + (_0x1ed75c ? '\x20sys-msg' : '');
    _0xf46d1['innerText'] = _0x207549;
    _0x1b263c['appendChild'](_0xf46d1);
    if (_0x37e067) {
        _0x64ca34['scrollTop'] = _0x64ca34['scrollHeight'];
    }
    if (_0x1b263c['childElementCount'] > 0xc8) {
        _0x1b263c['removeChild'](_0x1b263c['firstChild']);
    }
}
let _0x1d410e = -0x1, _0x191e10 = -0x1, _0x409657 = -0x1, _0x59efc3 = 0x0;
function _0x37e4f0() {
    if (!_0x5c6f01 || !_0x1ab0de || _0x1ab0de['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x245654 = performance['now']();
    const _0x32012d = _0x245654 - _0x59efc3;
    const _0x30c4dc = Math['abs'](_0x3b2baf['x'] - _0x1d410e) > 0.05 || Math['abs'](_0x3b2baf['y'] - _0x191e10) > 0.05 || Math['abs'](_0x3b2baf['angle'] - _0x409657) > 0.02;
    if (!_0x30c4dc && _0x32012d < 0xc8)
        return;
    if (_0x32012d < 0x19)
        return;
    _0x59efc3 = _0x245654;
    _0x1d410e = _0x3b2baf['x'];
    _0x191e10 = _0x3b2baf['y'];
    _0x409657 = _0x3b2baf['angle'];
    if (!_0x5c6f01 || !_0x1ab0de || _0x1ab0de['readyState'] !== WebSocket['OPEN'])
        return;
    _0x1ab0de['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x3b2baf['x'],
        'y': _0x3b2baf['y'],
        'vx': _0x3b2baf['vx'],
        'vy': _0x3b2baf['vy'],
        'angle': _0x3b2baf['angle'],
        'scale': _0x3b2baf['scale'],
        'teleportId': _0x29dfd8,
        'clientTimestamp': Date['now']()
    }));
}
function _0x142403() {
    if (_0x3b2baf['isDead'])
        return;
    const _0x288cc1 = _0x1bc4e7['MAP']['layers']['find'](_0x4850bc => _0x4850bc['name'] === 'walls');
    if (!_0x288cc1)
        return;
    const _0x1b0cc2 = _0x3b2baf['scale'];
    const _0x5d6c0d = _0x3b2baf['width'] * _0x1b0cc2 / 0x2;
    for (let _0x2872f8 = 0x0; _0x2872f8 < 0x3; _0x2872f8++) {
        let _0x3609f7 = _0x3b2baf['x'] + _0x3b2baf['width'] / 0x2;
        let _0x11a641 = _0x3b2baf['y'] + _0x3b2baf['height'] / 0x2;
        const _0x4c4eea = Math['floor']((_0x3609f7 - _0x5d6c0d) / _0x1bc4e7['MAP']['tileSize']);
        const _0x21fa1c = Math['floor']((_0x3609f7 + _0x5d6c0d) / _0x1bc4e7['MAP']['tileSize']);
        const _0x1c48b4 = Math['floor']((_0x11a641 - _0x5d6c0d) / _0x1bc4e7['MAP']['tileSize']);
        const _0x17b0a7 = Math['floor']((_0x11a641 + _0x5d6c0d) / _0x1bc4e7['MAP']['tileSize']);
        for (let _0x276f6d = _0x1c48b4; _0x276f6d <= _0x17b0a7; _0x276f6d++) {
            for (let _0x10fa8c = _0x4c4eea; _0x10fa8c <= _0x21fa1c; _0x10fa8c++) {
                if (_0x10fa8c < 0x0 || _0x10fa8c >= _0x1bc4e7['MAP']['columns'] || _0x276f6d < 0x0 || _0x276f6d >= _0x1bc4e7['MAP']['rows'])
                    continue;
                if (_0x288cc1['data'][_0x276f6d * _0x1bc4e7['MAP']['columns'] + _0x10fa8c] === 0x0)
                    continue;
                const _0x4c4668 = _0x10fa8c * _0x1bc4e7['MAP']['tileSize'];
                const _0x474d3b = _0x276f6d * _0x1bc4e7['MAP']['tileSize'];
                const _0x5abe94 = _0x3609f7 < _0x4c4668 ? _0x4c4668 : _0x3609f7 > _0x4c4668 + _0x1bc4e7['MAP']['tileSize'] ? _0x4c4668 + _0x1bc4e7['MAP']['tileSize'] : _0x3609f7;
                const _0xce8865 = _0x11a641 < _0x474d3b ? _0x474d3b : _0x11a641 > _0x474d3b + _0x1bc4e7['MAP']['tileSize'] ? _0x474d3b + _0x1bc4e7['MAP']['tileSize'] : _0x11a641;
                const _0xc1e97c = _0x3609f7 - _0x5abe94;
                const _0x2faa34 = _0x11a641 - _0xce8865;
                const _0x3461b3 = Math['sqrt'](_0xc1e97c * _0xc1e97c + _0x2faa34 * _0x2faa34);
                if (_0x3461b3 < _0x5d6c0d) {
                    if (_0x3461b3 === 0x0) {
                        const _0x774a80 = _0x3609f7 - _0x4c4668;
                        const _0xd146b3 = _0x4c4668 + _0x1bc4e7['MAP']['tileSize'] - _0x3609f7;
                        const _0x18d38c = _0x11a641 - _0x474d3b;
                        const _0x3596ec = _0x474d3b + _0x1bc4e7['MAP']['tileSize'] - _0x11a641;
                        const _0x45dd28 = Math['min'](_0x774a80, _0xd146b3, _0x18d38c, _0x3596ec);
                        if (_0x45dd28 === _0x774a80)
                            _0x3609f7 = _0x4c4668 - _0x5d6c0d;
                        else if (_0x45dd28 === _0xd146b3)
                            _0x3609f7 = _0x4c4668 + _0x1bc4e7['MAP']['tileSize'] + _0x5d6c0d;
                        else if (_0x45dd28 === _0x18d38c)
                            _0x11a641 = _0x474d3b - _0x5d6c0d;
                        else
                            _0x11a641 = _0x474d3b + _0x1bc4e7['MAP']['tileSize'] + _0x5d6c0d;
                    } else {
                        const _0x5d201e = _0x5d6c0d - _0x3461b3;
                        _0x3609f7 += _0xc1e97c / _0x3461b3 * _0x5d201e;
                        _0x11a641 += _0x2faa34 / _0x3461b3 * _0x5d201e;
                        const _0x422bcb = _0x3b2baf['vx'] * (_0xc1e97c / _0x3461b3) + _0x3b2baf['vy'] * (_0x2faa34 / _0x3461b3);
                        if (_0x422bcb < 0x0) {
                            _0x3b2baf['vx'] -= _0x422bcb * (_0xc1e97c / _0x3461b3);
                            _0x3b2baf['vy'] -= _0x422bcb * (_0x2faa34 / _0x3461b3);
                        }
                    }
                }
            }
        }
        _0x3b2baf['x'] = _0x3609f7 - _0x3b2baf['width'] / 0x2;
        _0x3b2baf['y'] = _0x11a641 - _0x3b2baf['height'] / 0x2;
    }
}
function _0x44fff5(_0x113963) {
    const _0x54895c = _0x1bc4e7['MAP']['layers']['find'](_0x45c329 => _0x45c329['name'] === 'walls');
    if (!_0x54895c)
        return;
    const _0x54018d = _0x113963['width'] / 0x2;
    for (let _0x4f04df = 0x0; _0x4f04df < 0x2; _0x4f04df++) {
        let _0x3c7a0c = _0x113963['x'] + _0x113963['width'] / 0x2;
        let _0x3b055f = _0x113963['y'] + _0x113963['height'] / 0x2;
        const _0x49da0b = Math['floor']((_0x3c7a0c - _0x54018d) / _0x1bc4e7['MAP']['tileSize']);
        const _0x131dd1 = Math['floor']((_0x3c7a0c + _0x54018d) / _0x1bc4e7['MAP']['tileSize']);
        const _0x30f9b7 = Math['floor']((_0x3b055f - _0x54018d) / _0x1bc4e7['MAP']['tileSize']);
        const _0x1d4bb3 = Math['floor']((_0x3b055f + _0x54018d) / _0x1bc4e7['MAP']['tileSize']);
        for (let _0x3482e7 = _0x30f9b7; _0x3482e7 <= _0x1d4bb3; _0x3482e7++) {
            for (let _0x38119e = _0x49da0b; _0x38119e <= _0x131dd1; _0x38119e++) {
                if (_0x38119e < 0x0 || _0x38119e >= _0x1bc4e7['MAP']['columns'] || _0x3482e7 < 0x0 || _0x3482e7 >= _0x1bc4e7['MAP']['rows'])
                    continue;
                if (_0x54895c['data'][_0x3482e7 * _0x1bc4e7['MAP']['columns'] + _0x38119e] === 0x0)
                    continue;
                const _0x26c8dc = _0x38119e * _0x1bc4e7['MAP']['tileSize'];
                const _0xd590a6 = _0x3482e7 * _0x1bc4e7['MAP']['tileSize'];
                const _0x1e2242 = _0x3c7a0c < _0x26c8dc ? _0x26c8dc : _0x3c7a0c > _0x26c8dc + _0x1bc4e7['MAP']['tileSize'] ? _0x26c8dc + _0x1bc4e7['MAP']['tileSize'] : _0x3c7a0c;
                const _0x4d032b = _0x3b055f < _0xd590a6 ? _0xd590a6 : _0x3b055f > _0xd590a6 + _0x1bc4e7['MAP']['tileSize'] ? _0xd590a6 + _0x1bc4e7['MAP']['tileSize'] : _0x3b055f;
                const _0x142d5f = _0x3c7a0c - _0x1e2242;
                const _0x59db99 = _0x3b055f - _0x4d032b;
                const _0x22a577 = Math['sqrt'](_0x142d5f * _0x142d5f + _0x59db99 * _0x59db99);
                if (_0x22a577 < _0x54018d) {
                    if (_0x22a577 === 0x0) {
                        const _0x182128 = _0x3c7a0c - _0x26c8dc;
                        const _0x3e462c = _0x26c8dc + _0x1bc4e7['MAP']['tileSize'] - _0x3c7a0c;
                        const _0x11887c = _0x3b055f - _0xd590a6;
                        const _0x12c791 = _0xd590a6 + _0x1bc4e7['MAP']['tileSize'] - _0x3b055f;
                        const _0x55e52d = Math['min'](_0x182128, _0x3e462c, _0x11887c, _0x12c791);
                        if (_0x55e52d === _0x182128)
                            _0x3c7a0c = _0x26c8dc - _0x54018d;
                        else if (_0x55e52d === _0x3e462c)
                            _0x3c7a0c = _0x26c8dc + _0x1bc4e7['MAP']['tileSize'] + _0x54018d;
                        else if (_0x55e52d === _0x11887c)
                            _0x3b055f = _0xd590a6 - _0x54018d;
                        else
                            _0x3b055f = _0xd590a6 + _0x1bc4e7['MAP']['tileSize'] + _0x54018d;
                    } else {
                        const _0x298103 = _0x54018d - _0x22a577;
                        _0x3c7a0c += _0x142d5f / _0x22a577 * _0x298103;
                        _0x3b055f += _0x59db99 / _0x22a577 * _0x298103;
                    }
                }
            }
        }
        _0x113963['x'] = _0x3c7a0c - _0x113963['width'] / 0x2;
        _0x113963['y'] = _0x3b055f - _0x113963['height'] / 0x2;
    }
}
function _0x3d89c1(_0xae674b) {
    const _0x266ecc = _0xae674b['width'] / 0x2;
    for (let _0x554910 = 0x0; _0x554910 < 0x2; _0x554910++) {
        let _0x2b5010 = _0xae674b['x'] + _0xae674b['width'] / 0x2;
        let _0x5eabe9 = _0xae674b['y'] + _0xae674b['height'] / 0x2;
        for (const _0xff1a83 of _0x1bc4e7['ENTITIES']) {
            const _0x41f274 = _0x2b5010 < _0xff1a83['x'] ? _0xff1a83['x'] : _0x2b5010 > _0xff1a83['x'] + _0xff1a83['w'] ? _0xff1a83['x'] + _0xff1a83['w'] : _0x2b5010;
            const _0x436da8 = _0x5eabe9 < _0xff1a83['y'] ? _0xff1a83['y'] : _0x5eabe9 > _0xff1a83['y'] + _0xff1a83['h'] ? _0xff1a83['y'] + _0xff1a83['h'] : _0x5eabe9;
            const _0xc3b2a6 = _0x2b5010 - _0x41f274;
            const _0x67dfe4 = _0x5eabe9 - _0x436da8;
            const _0x482d3e = Math['sqrt'](_0xc3b2a6 * _0xc3b2a6 + _0x67dfe4 * _0x67dfe4);
            if (_0x482d3e < _0x266ecc && _0x482d3e > 0x0) {
                const _0x611d3a = _0x266ecc - _0x482d3e;
                const _0x193963 = _0xc3b2a6 / _0x482d3e;
                const _0x2cb8a7 = _0x67dfe4 / _0x482d3e;
                _0x2b5010 += _0x193963 * _0x611d3a;
                _0x5eabe9 += _0x2cb8a7 * _0x611d3a;
            } else if (_0x482d3e === 0x0) {
                const _0x2e84bb = _0x2b5010 - _0xff1a83['x'];
                const _0x3e5f52 = _0xff1a83['x'] + _0xff1a83['w'] - _0x2b5010;
                const _0x5a70e7 = _0x5eabe9 - _0xff1a83['y'];
                const _0x110b20 = _0xff1a83['y'] + _0xff1a83['h'] - _0x5eabe9;
                const _0x32c90c = Math['min'](_0x2e84bb, _0x3e5f52, _0x5a70e7, _0x110b20);
                if (_0x32c90c === _0x2e84bb)
                    _0x2b5010 = _0xff1a83['x'] - _0x266ecc;
                else if (_0x32c90c === _0x3e5f52)
                    _0x2b5010 = _0xff1a83['x'] + _0xff1a83['w'] + _0x266ecc;
                else if (_0x32c90c === _0x5a70e7)
                    _0x5eabe9 = _0xff1a83['y'] - _0x266ecc;
                else
                    _0x5eabe9 = _0xff1a83['y'] + _0xff1a83['h'] + _0x266ecc;
            }
        }
        _0xae674b['x'] = _0x2b5010 - _0xae674b['width'] / 0x2;
        _0xae674b['y'] = _0x5eabe9 - _0xae674b['height'] / 0x2;
    }
}
function _0x1d9abf() {
    if (_0x3b2baf['isDead'])
        return;
    const _0x3fa0cd = _0x3b2baf['width'] / 0x2;
    const _0x22a35e = _0x3b2baf['x'] + _0x3b2baf['width'] / 0x2;
    const _0xdcb198 = _0x3b2baf['y'] + _0x3b2baf['height'] / 0x2;
    for (const _0x3a8e0a in _0x292c33) {
        const _0x4ac166 = _0x292c33[_0x3a8e0a];
        if (_0x4ac166['isDead'])
            continue;
        const _0x5b20e3 = _0x4ac166['width'] / 0x2;
        const _0x12bd72 = _0x3fa0cd + _0x5b20e3;
        const _0x3cbf9d = (_0x4ac166['renderX'] ?? _0x4ac166['x']) + _0x4ac166['width'] / 0x2;
        const _0x333c92 = (_0x4ac166['renderY'] ?? _0x4ac166['y']) + _0x4ac166['height'] / 0x2;
        const _0x169a35 = _0x22a35e - _0x3cbf9d;
        const _0x1f7614 = _0xdcb198 - _0x333c92;
        const _0x1812fa = Math['sqrt'](_0x169a35 * _0x169a35 + _0x1f7614 * _0x1f7614);
        if (_0x1812fa > 0x0 && _0x1812fa < _0x12bd72) {
            const _0x1e503 = _0x12bd72 - _0x1812fa;
            const _0x389bfe = _0x169a35 / _0x1812fa;
            const _0x43b948 = _0x1f7614 / _0x1812fa;
            _0x3b2baf['x'] += _0x389bfe * (_0x1e503 * 0.25);
            _0x3b2baf['y'] += _0x43b948 * (_0x1e503 * 0.25);
            _0x4ac166['x'] -= _0x389bfe * (_0x1e503 * 0.75);
            _0x4ac166['y'] -= _0x43b948 * (_0x1e503 * 0.75);
            _0x44fff5(_0x4ac166);
            _0x3d89c1(_0x4ac166);
            if (_0x4ac166['renderX'] !== undefined) {
                _0x4ac166['renderX'] = _0x4ac166['x'];
                _0x4ac166['renderY'] = _0x4ac166['y'];
            }
            const _0x4bfdc4 = _0x3b2baf['vx'] * _0x389bfe + _0x3b2baf['vy'] * _0x43b948;
            if (_0x4bfdc4 < 0x0) {
                _0x3b2baf['vx'] -= _0x4bfdc4 * _0x389bfe * 0.25;
                _0x3b2baf['vy'] -= _0x4bfdc4 * _0x43b948 * 0.25;
            }
        }
    }
    _0x142403();
    _0x6a8004();
}
function _0x6a8004() {
    if (_0x3b2baf['isDead'])
        return;
    const _0x56def0 = _0x3b2baf['scale'];
    const _0x2400bc = _0x3b2baf['width'] * _0x56def0 / 0x2;
    for (let _0x189f14 = 0x0; _0x189f14 < 0x2; _0x189f14++) {
        let _0x395965 = _0x3b2baf['x'] + _0x3b2baf['width'] / 0x2;
        let _0x5d78e5 = _0x3b2baf['y'] + _0x3b2baf['height'] / 0x2;
        for (const _0x255a71 of _0x1bc4e7['ENTITIES']) {
            const _0x2984af = _0x395965 < _0x255a71['x'] ? _0x255a71['x'] : _0x395965 > _0x255a71['x'] + _0x255a71['w'] ? _0x255a71['x'] + _0x255a71['w'] : _0x395965;
            const _0xf4a99f = _0x5d78e5 < _0x255a71['y'] ? _0x255a71['y'] : _0x5d78e5 > _0x255a71['y'] + _0x255a71['h'] ? _0x255a71['y'] + _0x255a71['h'] : _0x5d78e5;
            const _0x100c5f = _0x395965 - _0x2984af;
            const _0x2a23d8 = _0x5d78e5 - _0xf4a99f;
            const _0x65cf0a = Math['sqrt'](_0x100c5f * _0x100c5f + _0x2a23d8 * _0x2a23d8);
            if (_0x65cf0a < _0x2400bc && _0x65cf0a > 0x0) {
                const _0x231930 = _0x2400bc - _0x65cf0a;
                const _0xea8c22 = _0x100c5f / _0x65cf0a;
                const _0x58b13d = _0x2a23d8 / _0x65cf0a;
                _0x395965 += _0xea8c22 * _0x231930;
                _0x5d78e5 += _0x58b13d * _0x231930;
                const _0x51c960 = _0x3b2baf['vx'] * _0xea8c22 + _0x3b2baf['vy'] * _0x58b13d;
                if (_0x51c960 < 0x0) {
                    _0x3b2baf['vx'] -= _0x51c960 * _0xea8c22;
                    _0x3b2baf['vy'] -= _0x51c960 * _0x58b13d;
                }
            } else if (_0x65cf0a === 0x0) {
                const _0x1ac79d = _0x395965 - _0x255a71['x'];
                const _0x5424e0 = _0x255a71['x'] + _0x255a71['w'] - _0x395965;
                const _0x289b43 = _0x5d78e5 - _0x255a71['y'];
                const _0x42f69e = _0x255a71['y'] + _0x255a71['h'] - _0x5d78e5;
                const _0x445912 = Math['min'](_0x1ac79d, _0x5424e0, _0x289b43, _0x42f69e);
                if (_0x445912 === _0x1ac79d)
                    _0x395965 = _0x255a71['x'] - _0x2400bc;
                else if (_0x445912 === _0x5424e0)
                    _0x395965 = _0x255a71['x'] + _0x255a71['w'] + _0x2400bc;
                else if (_0x445912 === _0x289b43)
                    _0x5d78e5 = _0x255a71['y'] - _0x2400bc;
                else
                    _0x5d78e5 = _0x255a71['y'] + _0x255a71['h'] + _0x2400bc;
            }
        }
        _0x3b2baf['x'] = _0x395965 - _0x3b2baf['width'] / 0x2;
        _0x3b2baf['y'] = _0x5d78e5 - _0x3b2baf['height'] / 0x2;
    }
}
function _0x46a2ff(_0x57d598, _0x117b50) {
    const _0x2d29c2 = _0x1bc4e7['MAP']['layers']['find'](_0x1b4751 => _0x1b4751['name'] === 'trees');
    if (!_0x2d29c2)
        return ![];
    const _0x50d03c = Math['floor'](_0x57d598 / _0x1bc4e7['MAP']['tileSize']);
    const _0x4a3bd5 = Math['floor'](_0x117b50 / _0x1bc4e7['MAP']['tileSize']);
    if (_0x50d03c < 0x0 || _0x50d03c >= _0x1bc4e7['MAP']['columns'] || _0x4a3bd5 < 0x0 || _0x4a3bd5 >= _0x1bc4e7['MAP']['rows'])
        return ![];
    return _0x2d29c2['data'][_0x4a3bd5 * _0x1bc4e7['MAP']['columns'] + _0x50d03c] === 0xb;
}
let _0x36ad7c = null;
function _0x564f4d() {
    const _0x304ef6 = _0x1bc4e7['MAP'];
    const _0x3efcb9 = _0x304ef6['layers']['find'](_0x412b87 => _0x412b87['name'] === 'floor2');
    const _0x5c1710 = _0x304ef6['layers']['find'](_0x2d6002 => _0x2d6002['name'] === 'walls');
    if (!_0x3efcb9 || !_0x5c1710) {
        _0x36ad7c = null;
        return;
    }
    const _0x122c03 = _0x304ef6['columns'];
    const _0x1c78ca = _0x304ef6['rows'];
    const _0x1e8494 = [];
    const _0x15170b = [];
    const _0x1df410 = new Set();
    for (let _0x49195d = 0x0; _0x49195d < _0x1c78ca; _0x49195d++) {
        for (let _0x686cda = 0x0; _0x686cda < _0x122c03; _0x686cda++) {
            const _0x585a47 = _0x49195d * _0x122c03 + _0x686cda;
            const _0x226ba4 = _0x3efcb9['data'][_0x585a47];
            const _0x4c1702 = _0x5c1710['data'][_0x585a47];
            if (_0x226ba4 === 0x2 || _0x226ba4 === 0x4) {
                _0x1e8494['push']({
                    'c': _0x686cda,
                    'r': _0x49195d
                });
                if (_0x4c1702 !== 0x0)
                    _0x15170b['push']({
                        'c': _0x686cda,
                        'r': _0x49195d
                    });
            }
            if (_0x4c1702 !== 0x0)
                _0x1df410['add'](_0x686cda + ',' + _0x49195d);
        }
    }
    const _0x4b2091 = new Set(_0x1e8494['map'](_0x2ca6bc => _0x2ca6bc['c'] + ',' + _0x2ca6bc['r']));
    const _0x5a6eb0 = [
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
                c: _0x1e454e,
                r: _0x1670d5
            } of _0x1e8494) {
        for (const [_0x1fbff1, _0x29a2a9] of _0x5a6eb0) {
            const _0xeaf489 = _0x1e454e + _0x1fbff1, _0x284d01 = _0x1670d5 + _0x29a2a9;
            const _0x3ab850 = _0xeaf489 + ',' + _0x284d01;
            if (!_0x4b2091['has'](_0x3ab850))
                _0x1df410['add'](_0x3ab850);
        }
    }
    _0x36ad7c = {
        'wallSet': _0x1df410,
        'floorTiles': _0x1e8494,
        'wallTiles': _0x15170b,
        'interiorSet': _0x4b2091
    };
}
function _0x49a573() {
    const _0x31007b = _0x1bc4e7['MAP']['layers']['find'](_0x91ea5 => _0x91ea5['name'] === 'floor2');
    if (!_0x31007b)
        return ![];
    const _0x45f45f = Math['floor']((_0x3b2baf['x'] + _0x3b2baf['width'] / 0x2) / _0x1bc4e7['MAP']['tileSize']);
    const _0x407e0e = Math['floor']((_0x3b2baf['y'] + _0x3b2baf['height'] / 0x2) / _0x1bc4e7['MAP']['tileSize']);
    if (_0x45f45f < 0x0 || _0x45f45f >= _0x1bc4e7['MAP']['columns'] || _0x407e0e < 0x0 || _0x407e0e >= _0x1bc4e7['MAP']['rows'])
        return ![];
    const _0x473955 = _0x31007b['data'][_0x407e0e * _0x1bc4e7['MAP']['columns'] + _0x45f45f];
    return _0x473955 === 0x2;
}
function _0x57ede1() {
    if (_0x3b2baf['isDead']) {
        _0x1bc4e7['SHADOW']['polygon'] = null;
        return;
    }
    const _0x54f75b = _0x1bc4e7['MAP'];
    const _0x5c020e = _0x1bc4e7['SHADOW'];
    const _0x4d0136 = _0x54f75b['tileSize'];
    if (!_0x36ad7c)
        _0x564f4d();
    if (!_0x36ad7c) {
        _0x5c020e['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x5fc136,
        floorTiles: _0x3b7e77
    } = _0x36ad7c;
    if (_0x3b7e77['length'] === 0x0) {
        _0x5c020e['polygon'] = null;
        return;
    }
    if (!_0x49a573()) {
        _0x5c020e['polygon'] = null;
        return;
    }
    const _0x145b74 = _0x3b2baf['x'] + _0x3b2baf['width'] / 0x2;
    const _0x50dc87 = _0x3b2baf['y'] + _0x3b2baf['height'] / 0x2;
    if (!_0x36ad7c['_bounds']) {
        let _0x66cf11 = Infinity, _0x468987 = -Infinity, _0x483b7f = Infinity, _0x539a83 = -Infinity;
        for (const {
                    c: _0x305656,
                    r: _0x4909d6
                } of _0x3b7e77) {
            if (_0x305656 < _0x66cf11)
                _0x66cf11 = _0x305656;
            if (_0x305656 > _0x468987)
                _0x468987 = _0x305656;
            if (_0x4909d6 < _0x483b7f)
                _0x483b7f = _0x4909d6;
            if (_0x4909d6 > _0x539a83)
                _0x539a83 = _0x4909d6;
        }
        _0x36ad7c['_bounds'] = {
            'minC': Math['max'](0x0, _0x66cf11 - 0x1),
            'maxC': Math['min'](_0x54f75b['columns'] - 0x1, _0x468987 + 0x1),
            'minR': Math['max'](0x0, _0x483b7f - 0x1),
            'maxR': Math['min'](_0x54f75b['rows'] - 0x1, _0x539a83 + 0x1)
        };
        const _0x2ac050 = [];
        for (let _0x355247 = _0x36ad7c['_bounds']['minR']; _0x355247 <= _0x36ad7c['_bounds']['maxR']; _0x355247++) {
            for (let _0x4800e7 = _0x36ad7c['_bounds']['minC']; _0x4800e7 <= _0x36ad7c['_bounds']['maxC']; _0x4800e7++) {
                if (_0x5fc136['has'](_0x4800e7 + ',' + _0x355247))
                    _0x2ac050['push'](_0x4800e7, _0x355247);
            }
        }
        _0x36ad7c['_wallArr'] = _0x2ac050;
    }
    const {
        minC: _0x5aec6d,
        maxC: _0x4f8c35,
        minR: _0x266848,
        maxR: _0x380127
    } = _0x36ad7c['_bounds'];
    const _0x310302 = _0x36ad7c['_wallArr'];
    const _0x3d3848 = 0.0001;
    const _0x2937aa = new Set();
    const _0x49bc6f = [];
    for (let _0x4d41a0 = 0x0; _0x4d41a0 < _0x310302['length']; _0x4d41a0 += 0x2) {
        const _0x978e84 = _0x310302[_0x4d41a0], _0xdff589 = _0x310302[_0x4d41a0 + 0x1];
        const _0xb1cb87 = [
            _0x978e84 * _0x4d0136,
            _0xdff589 * _0x4d0136,
            _0x978e84 * _0x4d0136 + _0x4d0136,
            _0xdff589 * _0x4d0136,
            _0x978e84 * _0x4d0136,
            _0xdff589 * _0x4d0136 + _0x4d0136,
            _0x978e84 * _0x4d0136 + _0x4d0136,
            _0xdff589 * _0x4d0136 + _0x4d0136
        ];
        for (let _0x5d9d87 = 0x0; _0x5d9d87 < _0xb1cb87['length']; _0x5d9d87 += 0x2) {
            const _0x4fcded = _0xb1cb87[_0x5d9d87], _0x476577 = _0xb1cb87[_0x5d9d87 + 0x1];
            const _0x1c1d28 = Math['atan2'](_0x476577 - _0x50dc87, _0x4fcded - _0x145b74);
            const _0x5101ca = Math['round'](_0x1c1d28 * 0x4e20);
            if (!_0x2937aa['has'](_0x5101ca - 0x1)) {
                _0x2937aa['add'](_0x5101ca - 0x1);
                _0x49bc6f['push'](_0x1c1d28 - _0x3d3848);
            }
            if (!_0x2937aa['has'](_0x5101ca)) {
                _0x2937aa['add'](_0x5101ca);
                _0x49bc6f['push'](_0x1c1d28);
            }
            if (!_0x2937aa['has'](_0x5101ca + 0x1)) {
                _0x2937aa['add'](_0x5101ca + 0x1);
                _0x49bc6f['push'](_0x1c1d28 + _0x3d3848);
            }
        }
    }
    _0x49bc6f['sort']((_0x320437, _0x33a0f7) => _0x320437 - _0x33a0f7);
    const _0x42266d = Math['hypot']((_0x4f8c35 - _0x5aec6d + 0x2) * _0x4d0136, (_0x380127 - _0x266848 + 0x2) * _0x4d0136);
    const _0x239357 = _0x4b65f9 => {
        const _0x3fb810 = Math['cos'](_0x4b65f9);
        const _0xff796a = Math['sin'](_0x4b65f9);
        let _0x4e658d = _0x42266d;
        for (let _0x1f1ce3 = 0x0; _0x1f1ce3 < _0x310302['length']; _0x1f1ce3 += 0x2) {
            const _0x52b132 = _0x310302[_0x1f1ce3], _0x5e1337 = _0x310302[_0x1f1ce3 + 0x1];
            const _0x545999 = _0x52b132 * _0x4d0136, _0x1add75 = _0x5e1337 * _0x4d0136;
            const _0x43f680 = _0x545999 + _0x4d0136, _0x392136 = _0x1add75 + _0x4d0136;
            const _0x3751d7 = _0x545999 + _0x4d0136 * 0.5, _0x2efedd = _0x1add75 + _0x4d0136 * 0.5;
            const _0x38aef0 = Math['abs'](_0x3751d7 - _0x145b74) + Math['abs'](_0x2efedd - _0x50dc87);
            if (_0x38aef0 > _0x4e658d + _0x4d0136 * 1.5)
                continue;
            let _0x4b2902, _0x1d2f0b, _0x23e757;
            _0x4b2902 = -_0xff796a * _0x4d0136;
            if (Math['abs'](_0x4b2902) >= 1e-10) {
                _0x1d2f0b = -(_0x1add75 - _0x50dc87) * _0x4d0136 / _0x4b2902;
                _0x23e757 = ((_0x545999 - _0x145b74) * _0xff796a - (_0x1add75 - _0x50dc87) * _0x3fb810) / _0x4b2902;
                if (_0x1d2f0b > 0.001 && _0x23e757 >= 0x0 && _0x23e757 <= 0x1 && _0x1d2f0b < _0x4e658d)
                    _0x4e658d = _0x1d2f0b;
            }
            _0x4b2902 = _0x3fb810 * _0x4d0136;
            if (Math['abs'](_0x4b2902) >= 1e-10) {
                _0x1d2f0b = (_0x43f680 - _0x145b74) * _0x4d0136 / _0x4b2902;
                _0x23e757 = ((_0x43f680 - _0x145b74) * _0xff796a - (_0x1add75 - _0x50dc87) * _0x3fb810) / _0x4b2902;
                if (_0x1d2f0b > 0.001 && _0x23e757 >= 0x0 && _0x23e757 <= 0x1 && _0x1d2f0b < _0x4e658d)
                    _0x4e658d = _0x1d2f0b;
            }
            _0x4b2902 = _0xff796a * _0x4d0136;
            if (Math['abs'](_0x4b2902) >= 1e-10) {
                _0x1d2f0b = (_0x392136 - _0x50dc87) * _0x4d0136 / _0x4b2902;
                _0x23e757 = ((_0x43f680 - _0x145b74) * _0xff796a - (_0x392136 - _0x50dc87) * _0x3fb810) / _0x4b2902;
                if (_0x1d2f0b > 0.001 && _0x23e757 >= 0x0 && _0x23e757 <= 0x1 && _0x1d2f0b < _0x4e658d)
                    _0x4e658d = _0x1d2f0b;
            }
            _0x4b2902 = -_0x3fb810 * _0x4d0136;
            if (Math['abs'](_0x4b2902) >= 1e-10) {
                _0x1d2f0b = -(_0x545999 - _0x145b74) * _0x4d0136 / _0x4b2902;
                _0x23e757 = ((_0x545999 - _0x145b74) * _0xff796a - (_0x392136 - _0x50dc87) * _0x3fb810) / _0x4b2902;
                if (_0x1d2f0b > 0.001 && _0x23e757 >= 0x0 && _0x23e757 <= 0x1 && _0x1d2f0b < _0x4e658d)
                    _0x4e658d = _0x1d2f0b;
            }
        }
        const _0x48fc99 = _0x4e658d < _0x42266d ? _0x4e658d + 0x8 : _0x4e658d;
        return {
            'x': _0x145b74 + _0x3fb810 * _0x48fc99,
            'y': _0x50dc87 + _0xff796a * _0x48fc99
        };
    };
    const _0x228a6e = [];
    for (let _0x312e99 = 0x0; _0x312e99 < _0x49bc6f['length']; _0x312e99++) {
        const _0x4ad915 = _0x239357(_0x49bc6f[_0x312e99]);
        _0x228a6e['push'](_0x4ad915['x'], _0x4ad915['y']);
    }
    _0x5c020e['polygon'] = _0x228a6e['length'] >= 0x6 ? new Float32Array(_0x228a6e) : null;
}
function _0x2804c1(_0x3c3090, _0x1f7fd8, _0x2d5278) {
    if (_0x3b2baf['isDead'])
        return;
    if (!_0x36ad7c)
        return;
    const {
        floorTiles: _0x49e1c0,
        wallTiles: _0x13da1a
    } = _0x36ad7c;
    if (_0x49e1c0['length'] === 0x0)
        return;
    const _0x423df7 = _0x1bc4e7['SHADOW'];
    const _0x9c812 = _0x1bc4e7['MAP']['tileSize'];
    const _0x17534f = _0x1bc4e7['CAMERA']['width'];
    const _0x454847 = _0x1bc4e7['CAMERA']['height'];
    if (!_0x1bc4e7['SHADOW']['_buf'] || _0x1bc4e7['SHADOW']['_buf']['width'] !== _0x17534f || _0x1bc4e7['SHADOW']['_buf']['height'] !== _0x454847) {
        _0x1bc4e7['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x1bc4e7['SHADOW']['_buf']['width'] = _0x17534f;
        _0x1bc4e7['SHADOW']['_buf']['height'] = _0x454847;
    }
    const _0x1ac5b1 = _0x1bc4e7['SHADOW']['_buf'];
    const _0x1d7ab3 = _0x1ac5b1['getContext']('2d');
    _0x1d7ab3['clearRect'](0x0, 0x0, _0x17534f, _0x454847);
    _0x1d7ab3['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x1d7ab3['beginPath']();
    for (const {
                c: _0x43ad43,
                r: _0x5ed0d9
            } of _0x49e1c0) {
        const _0xda6087 = Math['floor'](_0x43ad43 * _0x9c812 - _0x1f7fd8), _0x5828a3 = Math['floor'](_0x5ed0d9 * _0x9c812 - _0x2d5278);
        if (_0xda6087 > _0x17534f || _0x5828a3 > _0x454847 || _0xda6087 + _0x9c812 < 0x0 || _0x5828a3 + _0x9c812 < 0x0)
            continue;
        _0x1d7ab3['rect'](_0xda6087 - 0x1, _0x5828a3 - 0x1, _0x9c812 + 0x2, _0x9c812 + 0x2);
    }
    _0x1d7ab3['fill']();
    if (_0x13da1a['length'] > 0x0) {
        _0x1d7ab3['globalCompositeOperation'] = 'destination-out';
        _0x1d7ab3['fillStyle'] = 'rgba(0,0,0,1)';
        _0x1d7ab3['beginPath']();
        for (const {
                    c: _0x5ee5f4,
                    r: _0x4d97f0
                } of _0x13da1a) {
            const _0x34a36f = Math['floor'](_0x5ee5f4 * _0x9c812 - _0x1f7fd8), _0x4a3ec2 = Math['floor'](_0x4d97f0 * _0x9c812 - _0x2d5278);
            if (_0x34a36f > _0x17534f || _0x4a3ec2 > _0x454847 || _0x34a36f + _0x9c812 < 0x0 || _0x4a3ec2 + _0x9c812 < 0x0)
                continue;
            _0x1d7ab3['rect'](_0x34a36f - 0x1, _0x4a3ec2 - 0x1, _0x9c812 + 0x2, _0x9c812 + 0x2);
        }
        _0x1d7ab3['fill']();
        _0x1d7ab3['globalCompositeOperation'] = 'source-over';
    }
    if (_0x423df7['polygon'] && _0x423df7['polygon']['length'] >= 0x6) {
        _0x1d7ab3['globalCompositeOperation'] = 'destination-out';
        _0x1d7ab3['beginPath']();
        const _0x36138b = _0x423df7['polygon'];
        _0x1d7ab3['moveTo'](_0x36138b[0x0] - _0x1f7fd8, _0x36138b[0x1] - _0x2d5278);
        for (let _0x63b2a4 = 0x2; _0x63b2a4 < _0x36138b['length']; _0x63b2a4 += 0x2) {
            _0x1d7ab3['lineTo'](_0x36138b[_0x63b2a4] - _0x1f7fd8, _0x36138b[_0x63b2a4 + 0x1] - _0x2d5278);
        }
        _0x1d7ab3['closePath']();
        _0x1d7ab3['fill']();
        _0x1d7ab3['globalCompositeOperation'] = 'source-over';
    }
    _0x3c3090['drawImage'](_0x1ac5b1, 0x0, 0x0);
}
function _0x598e1d(_0x2834ff) {
    let _0x3c657e = 0x0, _0x2cc3a7 = 0x0;
    const _0x4209e5 = _0x1bc4e7['INPUTS']['mouseX'] / _0x1bc4e7['SYSTEM']['viewScale'];
    const _0x5424ac = _0x1bc4e7['INPUTS']['mouseY'] / _0x1bc4e7['SYSTEM']['viewScale'];
    const _0x46d422 = _0x3b2baf['x'] - _0x1bc4e7['CAMERA']['x'] + _0x3b2baf['width'] / 0x2;
    const _0x329487 = _0x3b2baf['y'] - _0x1bc4e7['CAMERA']['y'] + _0x3b2baf['height'] / 0x2;
    const _0x5ef48e = Math['atan2'](_0x5424ac - _0x329487, _0x4209e5 - _0x46d422);
    if (_0x54ac9f !== 0x0 || _0x5c34dc !== 0x0) {
        _0x3c657e = _0x54ac9f;
        _0x2cc3a7 = _0x5c34dc;
    } else if (_0x5b9e60) {
        let _0x47eac1 = 0x0, _0x525bbe = 0x0;
        if (_0x1bc4e7['INPUTS']['keys']['w'] || _0x1bc4e7['INPUTS']['keys']['arrowup'])
            _0x47eac1 += 0x1;
        if (_0x1bc4e7['INPUTS']['keys']['s'] || _0x1bc4e7['INPUTS']['keys']['arrowdown'])
            _0x47eac1 -= 0x1;
        if (_0x1bc4e7['INPUTS']['keys']['d'] || _0x1bc4e7['INPUTS']['keys']['arrowright'])
            _0x525bbe += 0x1;
        if (_0x1bc4e7['INPUTS']['keys']['a'] || _0x1bc4e7['INPUTS']['keys']['arrowleft'])
            _0x525bbe -= 0x1;
        if (_0x47eac1 !== 0x0 || _0x525bbe !== 0x0) {
            const _0x361f98 = _0x5ef48e + Math['atan2'](_0x525bbe, _0x47eac1);
            _0x3c657e = Math['cos'](_0x361f98);
            _0x2cc3a7 = Math['sin'](_0x361f98);
        }
    } else {
        if (_0x1bc4e7['INPUTS']['keys']['w'] || _0x1bc4e7['INPUTS']['keys']['arrowup'])
            _0x2cc3a7 -= 0x1;
        if (_0x1bc4e7['INPUTS']['keys']['s'] || _0x1bc4e7['INPUTS']['keys']['arrowdown'])
            _0x2cc3a7 += 0x1;
        if (_0x1bc4e7['INPUTS']['keys']['a'] || _0x1bc4e7['INPUTS']['keys']['arrowleft'])
            _0x3c657e -= 0x1;
        if (_0x1bc4e7['INPUTS']['keys']['d'] || _0x1bc4e7['INPUTS']['keys']['arrowright'])
            _0x3c657e += 0x1;
        const _0x8b40c9 = _0x3c657e !== 0x0 || _0x2cc3a7 !== 0x0;
        if (_0x8b40c9) {
            const _0x1a5187 = Math['sqrt'](_0x3c657e * _0x3c657e + _0x2cc3a7 * _0x2cc3a7);
            _0x3c657e /= _0x1a5187;
            _0x2cc3a7 /= _0x1a5187;
        }
    }
    if (_0x1bc4e7['GAME_STATE'] === 'NIGHT' && _0x4fb31f === 'Skinwalker') {
        if (_0x1bc4e7['NIGHT_ABILITY_OPEN'] || !_0x1bc4e7['CURRENT_TARGET']) {
            _0x3c657e = 0x0;
            _0x2cc3a7 = 0x0;
            _0x3b2baf['vx'] = 0x0;
            _0x3b2baf['vy'] = 0x0;
            _0x3b2baf['x'] = _0x1bc4e7['MAP']['columns'] * _0x1bc4e7['MAP']['tileSize'] / 0x2 - _0x3b2baf['width'] / 0x2;
            _0x3b2baf['y'] = _0x1bc4e7['MAP']['rows'] * _0x1bc4e7['MAP']['tileSize'] / 0x2 - _0x3b2baf['height'] / 0x2;
        }
    }
    const _0x48e480 = _0x3c657e !== 0x0 || _0x2cc3a7 !== 0x0;
    const _0x561a03 = (_0x1bc4e7['INPUTS']['keys']['shift'] || _0x2ea040 || _0x354cf5) && _0x48e480;
    _0x3b2baf['bopTimer'] = _0x561a03 ? _0x3b2baf['bopTimer'] + _0x2834ff : 0x0;
    _0x3b2baf['scale'] = 0x1 + (_0x3b2baf['bopTimer'] > 0x0 ? Math['sin'](_0x3b2baf['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x33b150 = Math['pow'](0.001, _0x2834ff);
    const _0x26f3cd = _0x561a03 ? 0x74a : 0x5d5;
    _0x3b2baf['vx'] += _0x3c657e * _0x26f3cd * _0x2834ff;
    _0x3b2baf['vy'] += _0x2cc3a7 * _0x26f3cd * _0x2834ff;
    _0x3b2baf['vx'] *= _0x33b150;
    _0x3b2baf['vy'] *= _0x33b150;
    _0x3b2baf['x'] += _0x3b2baf['vx'] * _0x2834ff;
    _0x3b2baf['y'] += _0x3b2baf['vy'] * _0x2834ff;
    for (let _0x2b3e34 = 0x0; _0x2b3e34 < 0x3; _0x2b3e34++)
        _0x142403();
    for (let _0x2ff6f2 = 0x0; _0x2ff6f2 < 0x2; _0x2ff6f2++)
        _0x6a8004();
    for (let _0x5e61d6 = 0x0; _0x5e61d6 < 0x2; _0x5e61d6++)
        _0x1d9abf();
    if (_0x3b2baf['x'] < 0x0)
        _0x3b2baf['x'] = 0x0;
    if (_0x3b2baf['y'] < 0x0)
        _0x3b2baf['y'] = 0x0;
    if (_0x3b2baf['x'] + _0x3b2baf['width'] > _0x1bc4e7['MAP']['columns'] * _0x1bc4e7['MAP']['tileSize'])
        _0x3b2baf['x'] = _0x1bc4e7['MAP']['columns'] * _0x1bc4e7['MAP']['tileSize'] - _0x3b2baf['width'];
    if (_0x3b2baf['y'] + _0x3b2baf['height'] > _0x1bc4e7['MAP']['rows'] * _0x1bc4e7['MAP']['tileSize'])
        _0x3b2baf['y'] = _0x1bc4e7['MAP']['rows'] * _0x1bc4e7['MAP']['tileSize'] - _0x3b2baf['height'];
    if (_0x1d097a) {
        _0x3b2baf['angle'] = _0x3473b9 + Math['PI'] / 0x2;
    } else if (_0x54ac9f !== 0x0 || _0x5c34dc !== 0x0) {
        _0x3b2baf['angle'] = Math['atan2'](_0x5c34dc, _0x54ac9f) + Math['PI'] / 0x2;
    } else if (!_0x94bd31) {
        _0x3b2baf['angle'] = _0x5ef48e + Math['PI'] / 0x2;
    }
    const _0x16f19e = _0x3b2baf['x'] + _0x3b2baf['width'] / 0x2 - _0x1bc4e7['CAMERA']['width'] / 0x2;
    const _0x163c54 = _0x3b2baf['y'] + _0x3b2baf['height'] / 0x2 - _0x1bc4e7['CAMERA']['height'] / 0x2;
    if (_0x1bc4e7['CAMERA']['x'] === null || isNaN(_0x1bc4e7['CAMERA']['x']) || !isFinite(_0x1bc4e7['CAMERA']['x'])) {
        _0x1bc4e7['CAMERA']['x'] = _0x16f19e;
        _0x1bc4e7['CAMERA']['y'] = _0x163c54;
    } else {
        const _0x16d1ec = 0x1 - Math['exp'](-Math['max'](0x0, _0x2834ff) * 0x28);
        _0x1bc4e7['CAMERA']['x'] += (_0x16f19e - _0x1bc4e7['CAMERA']['x']) * _0x16d1ec;
        _0x1bc4e7['CAMERA']['y'] += (_0x163c54 - _0x1bc4e7['CAMERA']['y']) * _0x16d1ec;
    }
    for (const _0x76ab97 in _0x292c33) {
        const _0x1cc420 = _0x292c33[_0x76ab97];
        if (_0x1cc420['renderX'] === undefined) {
            _0x1cc420['renderX'] = _0x1cc420['x'];
            _0x1cc420['renderY'] = _0x1cc420['y'];
            _0x1cc420['renderAngle'] = _0x1cc420['angle'] || 0x0;
        }
        const _0x46f1be = _0x1cc420['x'] + (_0x1cc420['vx'] || 0x0) * _0x2834ff;
        const _0x12ce8c = _0x1cc420['y'] + (_0x1cc420['vy'] || 0x0) * _0x2834ff;
        _0x1cc420['x'] = _0x46f1be;
        _0x1cc420['y'] = _0x12ce8c;
        const _0x56b48e = 0x1 - Math['exp'](-_0x2834ff * 0x12);
        const _0x2bf7c6 = _0x1cc420['x'] - _0x1cc420['renderX'], _0x16233a = _0x1cc420['y'] - _0x1cc420['renderY'];
        const _0x8ea1f9 = Math['sqrt'](_0x2bf7c6 * _0x2bf7c6 + _0x16233a * _0x16233a);
        const _0x2222db = 0xc8;
        if (_0x8ea1f9 > _0x2222db) {
            _0x1cc420['renderX'] = _0x1cc420['x'] - _0x2bf7c6 / _0x8ea1f9 * _0x2222db;
            _0x1cc420['renderY'] = _0x1cc420['y'] - _0x16233a / _0x8ea1f9 * _0x2222db;
        }
        _0x1cc420['renderX'] += (_0x1cc420['x'] - _0x1cc420['renderX']) * _0x56b48e;
        _0x1cc420['renderY'] += (_0x1cc420['y'] - _0x1cc420['renderY']) * _0x56b48e;
        let _0x4da1c0 = (_0x1cc420['angle'] || 0x0) - _0x1cc420['renderAngle'];
        while (_0x4da1c0 < -Math['PI'])
            _0x4da1c0 += Math['PI'] * 0x2;
        while (_0x4da1c0 > Math['PI'])
            _0x4da1c0 -= Math['PI'] * 0x2;
        _0x1cc420['renderAngle'] += _0x4da1c0 * (0x1 - Math['exp'](-_0x2834ff * 0x14));
    }
    if (_0x1bc4e7['GAME_STATE'] === 'NIGHT') {
        _0x13ba4f = Math['min'](0.6, _0x13ba4f + _0x2834ff * 0.5);
    } else {
        _0x13ba4f = Math['max'](0x0, _0x13ba4f - _0x2834ff * 0.5);
    }
    _0x57ede1();
    _0x37e4f0();
}
function _0x166df3(_0x49b061, _0xb209d1, _0x4cffcc, _0x194089, _0x33a3c8 = !![]) {
    _0x49b061['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x5c94e6 = _0x49b061['measureText'](_0xb209d1)['width'];
    const _0x1726c6 = _0x5c94e6 + 0x18;
    const _0x30c16e = 0x1c;
    _0x49b061['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x49b061['beginPath']();
    if (_0x49b061['roundRect']) {
        _0x49b061['roundRect'](_0x4cffcc - _0x1726c6 / 0x2, _0x194089 - _0x30c16e, _0x1726c6, _0x30c16e, 0x6);
    } else {
        _0x49b061['rect'](_0x4cffcc - _0x1726c6 / 0x2, _0x194089 - _0x30c16e, _0x1726c6, _0x30c16e);
    }
    _0x49b061['fill']();
    if (_0x33a3c8) {
        _0x49b061['beginPath']();
        _0x49b061['moveTo'](_0x4cffcc - 0x6, _0x194089);
        _0x49b061['lineTo'](_0x4cffcc + 0x6, _0x194089);
        _0x49b061['lineTo'](_0x4cffcc, _0x194089 + 0x6);
        _0x49b061['fill']();
    }
    _0x49b061['fillStyle'] = '#ffffff';
    _0x49b061['textAlign'] = 'center';
    _0x49b061['textBaseline'] = 'middle';
    _0x49b061['fillText'](_0xb209d1, _0x4cffcc, _0x194089 - _0x30c16e / 0x2 + 0x1);
}
function _0x5c444f(_0x3d61f8, _0x2e5ac2, _0x498c69, _0x11398a) {
    if (!_0x2e5ac2 || _0x2e5ac2['length'] === 0x0)
        return;
    let _0x16758a = _0x11398a;
    for (let _0x132b43 = 0x0; _0x132b43 < _0x2e5ac2['length']; _0x132b43++) {
        _0x166df3(_0x3d61f8, _0x2e5ac2[_0x132b43]['text'], _0x498c69, _0x16758a, _0x132b43 === 0x0);
        _0x16758a -= 0x24;
    }
}
function _0xea76be() {
    if (!_0x1bc4e7['SYSTEM']['isReady'])
        return;
    _0x50a837['fillStyle'] = '#000000';
    _0x50a837['fillRect'](0x0, 0x0, _0x53f1dc['width'], _0x53f1dc['height']);
    _0x50a837['save']();
    try {
        _0x50a837['scale'](_0x1bc4e7['SYSTEM']['viewScale'], _0x1bc4e7['SYSTEM']['viewScale']);
        _0x50a837['imageSmoothingEnabled'] = ![];
        const _0x483e12 = Math['floor'](_0x1bc4e7['CAMERA']['x'] || 0x0);
        const _0x3698ad = Math['floor'](_0x1bc4e7['CAMERA']['y'] || 0x0);
        const _0x4ececa = Math['max'](0x0, Math['floor'](_0x483e12 / _0x1bc4e7['MAP']['chunkSize']));
        const _0x5b5cc9 = Math['min'](_0x1bc4e7['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x483e12 + _0x1bc4e7['CAMERA']['width']) / _0x1bc4e7['MAP']['chunkSize']));
        const _0x530f54 = Math['max'](0x0, Math['floor'](_0x3698ad / _0x1bc4e7['MAP']['chunkSize']));
        const _0x569f7d = Math['min'](_0x1bc4e7['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x3698ad + _0x1bc4e7['CAMERA']['height']) / _0x1bc4e7['MAP']['chunkSize']));
        for (let _0x199361 = _0x530f54; _0x199361 <= _0x569f7d; _0x199361++)
            for (let _0x1701b8 = _0x4ececa; _0x1701b8 <= _0x5b5cc9; _0x1701b8++) {
                const _0x5b215e = _0x1701b8 * _0x1bc4e7['MAP']['chunkSize'] - _0x483e12;
                const _0x5b356f = _0x199361 * _0x1bc4e7['MAP']['chunkSize'] - _0x3698ad;
                _0x50a837['drawImage'](_0x1bc4e7['MAP']['bgChunks'][_0x199361][_0x1701b8], _0x5b215e, _0x5b356f, _0x1bc4e7['MAP']['chunkSize'] + 0x1, _0x1bc4e7['MAP']['chunkSize'] + 0x1);
            }
        if (_0x253c1e['complete'] && _0x253c1e['naturalWidth'] > 0x0) {
            const _0x5a4005 = _0x1bc4e7['MAP']['tileSize'];
            const _0x3e2824 = _0x5a4005 * 0xa;
            const _0x2152c6 = _0x1bc4e7['MAP']['columns'] / 0x2 * _0x5a4005 - _0x3e2824 / 0x2 - _0x483e12;
            const _0x3437c8 = _0x1bc4e7['MAP']['rows'] / 0x2 * _0x5a4005 - _0x3e2824 / 0x2 - _0x3698ad;
            _0x50a837['imageSmoothingEnabled'] = ![];
            _0x50a837['drawImage'](_0x253c1e, _0x2152c6, _0x3437c8, _0x3e2824, _0x3e2824);
        }
        if (_0x2ba891['complete'] && _0x2ba891['naturalWidth'] > 0x0) {
            _0x1bc4e7['ENTITIES']['forEach'](_0x3ab5b6 => {
                if (_0x3ab5b6['type'] !== 'table')
                    return;
                _0x50a837['save']();
                _0x50a837['imageSmoothingEnabled'] = ![];
                const _0x5069f5 = _0x2ba891['naturalWidth'] >= _0x2ba891['naturalHeight'];
                const _0x1b5430 = _0x3ab5b6['w'] >= _0x3ab5b6['h'];
                if (_0x5069f5 === _0x1b5430) {
                    _0x50a837['drawImage'](_0x2ba891, _0x3ab5b6['x'] - _0x483e12, _0x3ab5b6['y'] - _0x3698ad, _0x3ab5b6['w'], _0x3ab5b6['h']);
                } else {
                    _0x50a837['translate'](_0x3ab5b6['x'] - _0x483e12 + _0x3ab5b6['w'] / 0x2, _0x3ab5b6['y'] - _0x3698ad + _0x3ab5b6['h'] / 0x2);
                    _0x50a837['rotate'](Math['PI'] / 0x2);
                    _0x50a837['drawImage'](_0x2ba891, -_0x3ab5b6['h'] / 0x2, -_0x3ab5b6['w'] / 0x2, _0x3ab5b6['h'], _0x3ab5b6['w']);
                }
                _0x50a837['restore']();
            });
        } else {
            _0x1bc4e7['ENTITIES']['forEach'](_0x146a88 => {
                if (_0x146a88['type'] !== 'table')
                    return;
                _0x50a837['save']();
                _0x50a837['fillStyle'] = '#6b4423';
                _0x50a837['fillRect'](_0x146a88['x'] - _0x483e12, _0x146a88['y'] - _0x3698ad, _0x146a88['w'], _0x146a88['h']);
                _0x50a837['strokeStyle'] = '#422810';
                _0x50a837['lineWidth'] = 0x3;
                _0x50a837['strokeRect'](_0x146a88['x'] - _0x483e12 + 0x1, _0x146a88['y'] - _0x3698ad + 0x1, _0x146a88['w'] - 0x2, _0x146a88['h'] - 0x2);
                _0x50a837['fillStyle'] = '#82532a';
                _0x50a837['fillRect'](_0x146a88['x'] - _0x483e12 + 0x4, _0x146a88['y'] - _0x3698ad + 0x4, _0x146a88['w'] - 0x8, _0x146a88['h'] - 0x8);
                _0x50a837['restore']();
            });
        }
        if (_0x1291d2) {
            for (let _0x198bd0 = _0x530f54; _0x198bd0 <= _0x569f7d; _0x198bd0++) {
                for (let _0x5d5a1c = _0x4ececa; _0x5d5a1c <= _0x5b5cc9; _0x5d5a1c++) {
                    const _0x5166a8 = _0x5d5a1c * _0x1bc4e7['MAP']['chunkSize'] - _0x483e12;
                    const _0x191e05 = _0x198bd0 * _0x1bc4e7['MAP']['chunkSize'] - _0x3698ad;
                    _0x50a837['drawImage'](_0x1bc4e7['MAP']['fgChunks'][_0x198bd0][_0x5d5a1c], _0x5166a8, _0x191e05, _0x1bc4e7['MAP']['chunkSize'] + 0x1, _0x1bc4e7['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x4e459b = _0x1bc4e7['GAME_STATE'] === 'NIGHT' && _0x4fb31f === 'Skinwalker' && !_0x3b2baf['isDead'];
        const _0x194cf0 = _0x3b2baf['x'] - _0x483e12 + _0x3b2baf['width'] / 0x2;
        const _0x4ce179 = _0x3b2baf['y'] - _0x3698ad + _0x3b2baf['height'] / 0x2;
        const _0x3f7d98 = _0x3b2baf['width'] * _0x3b2baf['scale'] * 1.3;
        const _0x10d7dd = _0x3b2baf['height'] * _0x3b2baf['scale'] * 1.3;
        for (const _0x1cd04a in _0x292c33) {
            const _0x5b06af = _0x292c33[_0x1cd04a];
            if (_0x5b06af['isDead'])
                continue;
            const _0x40cacf = (_0x5b06af['renderX'] ?? _0x5b06af['x']) - _0x483e12 + _0x5b06af['width'] / 0x2;
            const _0x24996b = (_0x5b06af['renderY'] ?? _0x5b06af['y']) - _0x3698ad + _0x5b06af['height'] / 0x2;
            const _0x5cf69d = Math['min'](0x2, Math['max'](0.3, _0x5b06af['scale'] || 0x1));
            const _0x500603 = _0x5b06af['width'] * _0x5cf69d * 1.3;
            const _0x2d5549 = _0x5b06af['height'] * _0x5cf69d * 1.3;
            _0x50a837['save']();
            try {
                _0x50a837['translate'](_0x40cacf, _0x24996b);
                _0x50a837['rotate'](_0x5b06af['renderAngle'] ?? 0x0);
                if (_0x5b06af['isDark'])
                    _0x50a837['filter'] = 'brightness(0)';
                _0x49d018(_0x50a837, _0x5b06af['body'], _0x5b06af['eyes'], _0x500603, _0x2d5549);
                if (_0x152869['has'](parseInt(_0x1cd04a)) && _0x19b8d7['complete'] && _0x19b8d7['naturalWidth'] > 0x0) {
                    _0x50a837['drawImage'](_0x19b8d7, -_0x500603 / 0x2, -_0x2d5549 / 0x2, _0x500603, _0x2d5549);
                }
                if (_0x5b06af['isDark'])
                    _0x50a837['filter'] = 'none';
            } finally {
                _0x50a837['restore']();
            }
            if (!_0x46a2ff((_0x5b06af['renderX'] ?? _0x5b06af['x']) + _0x5b06af['width'] / 0x2, (_0x5b06af['renderY'] ?? _0x5b06af['y']) + _0x5b06af['height'] / 0x2)) {
                _0x50a837['textAlign'] = 'center';
                _0x50a837['lineJoin'] = 'round';
                _0x50a837['lineWidth'] = 0x3;
                _0x50a837['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x50a837['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x50a837['fillStyle'] = _0x152869['has'](parseInt(_0x1cd04a)) ? '#cc88ff' : '#ffffff';
                const _0x364f90 = _0x5b06af['isDark'] ? '???' : _0x5b06af['name'] + (_0x5b06af['isOwner'] ? '\x20[🗝️]' : '');
                _0x50a837['strokeText'](_0x364f90, _0x40cacf, _0x24996b - _0x2d5549 / 0x2 - 0x10);
                _0x50a837['fillText'](_0x364f90, _0x40cacf, _0x24996b - _0x2d5549 / 0x2 - 0x10);
            }
        }
        if (!_0x3b2baf['isDead']) {
            _0x50a837['save']();
            try {
                _0x50a837['translate'](_0x194cf0, _0x4ce179);
                _0x50a837['rotate'](_0x3b2baf['angle']);
                if (_0x4e459b)
                    _0x50a837['filter'] = 'brightness(0)';
                _0x49d018(_0x50a837, _0x5c2fc7, _0x15be43, _0x3f7d98, _0x10d7dd);
                if (_0x152869['has'](_0x5c6f01) && _0x19b8d7['complete'] && _0x19b8d7['naturalWidth'] > 0x0) {
                    _0x50a837['drawImage'](_0x19b8d7, -_0x3f7d98 / 0x2, -_0x10d7dd / 0x2, _0x3f7d98, _0x10d7dd);
                }
                if (_0x4e459b)
                    _0x50a837['filter'] = 'none';
            } finally {
                _0x50a837['restore']();
            }
            if (!_0x46a2ff(_0x3b2baf['x'] + _0x3b2baf['width'] / 0x2, _0x3b2baf['y'] + _0x3b2baf['height'] / 0x2)) {
                _0x50a837['textAlign'] = 'center';
                _0x50a837['lineJoin'] = 'round';
                _0x50a837['lineWidth'] = 0x3;
                _0x50a837['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x50a837['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x50a837['fillStyle'] = _0x152869['has'](_0x5c6f01) ? '#cc88ff' : '#ffffff';
                const _0x374872 = _0x4e459b ? '???' : _0x54f4a1 + (_0x484d63 ? '\x20[🗝️]' : '');
                _0x50a837['strokeText'](_0x374872, _0x194cf0, _0x4ce179 - _0x10d7dd / 0x2 - 0x10);
                _0x50a837['fillText'](_0x374872, _0x194cf0, _0x4ce179 - _0x10d7dd / 0x2 - 0x10);
            }
        }
        if (_0x1bc4e7['MAP']['wallChunks'] && _0x1bc4e7['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x28b180 = _0x530f54; _0x28b180 <= _0x569f7d; _0x28b180++)
                for (let _0x1b41b5 = _0x4ececa; _0x1b41b5 <= _0x5b5cc9; _0x1b41b5++) {
                    if (!_0x1bc4e7['MAP']['wallChunks'][_0x28b180] || !_0x1bc4e7['MAP']['wallChunks'][_0x28b180][_0x1b41b5])
                        continue;
                    const _0x3002d6 = _0x1b41b5 * _0x1bc4e7['MAP']['chunkSize'] - _0x483e12;
                    const _0x42f76e = _0x28b180 * _0x1bc4e7['MAP']['chunkSize'] - _0x3698ad;
                    _0x50a837['drawImage'](_0x1bc4e7['MAP']['wallChunks'][_0x28b180][_0x1b41b5], _0x3002d6, _0x42f76e, _0x1bc4e7['MAP']['chunkSize'] + 0x1, _0x1bc4e7['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x47dbe9 of _0x1bc4e7['ENTITIES']) {
            if (_0x47dbe9['type'] !== 'npc')
                continue;
            const _0x33dede = _0x47dbe9['x'] - _0x483e12 + _0x47dbe9['w'] / 0x2;
            const _0x338a36 = _0x47dbe9['y'] - _0x3698ad + _0x47dbe9['h'] / 0x2;
            const _0x5c39e1 = _0x47dbe9['w'];
            const _0x25b08e = _0x47dbe9['h'];
            _0x50a837['save']();
            _0x50a837['translate'](_0x33dede, _0x338a36);
            _0x50a837['rotate'](_0x47dbe9['angle'] !== undefined ? _0x47dbe9['angle'] : 0x0);
            _0x49d018(_0x50a837, _0x47dbe9['body'] || 'yanito932.png', _0x47dbe9['eyes'], _0x5c39e1, _0x25b08e);
            _0x50a837['restore']();
            _0x50a837['textAlign'] = 'center';
            _0x50a837['lineJoin'] = 'round';
            _0x50a837['lineWidth'] = 0x3;
            _0x50a837['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x50a837['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x50a837['fillStyle'] = '#aaaaaa';
            _0x50a837['strokeText'](_0x47dbe9['name'] || 'NPC', _0x33dede, _0x338a36 - _0x25b08e / 0x2 - 0x10);
            _0x50a837['fillText'](_0x47dbe9['name'] || 'NPC', _0x33dede, _0x338a36 - _0x25b08e / 0x2 - 0x10);
        }
        if (_0x3b2baf['isDead']) {
            for (const _0x3e61a9 in _0x292c33) {
                const _0x1c59ab = _0x292c33[_0x3e61a9];
                if (!_0x1c59ab['isDead'])
                    continue;
                const _0x45b999 = (_0x1c59ab['renderX'] ?? _0x1c59ab['x']) - _0x483e12 + _0x1c59ab['width'] / 0x2;
                const _0x15aca9 = (_0x1c59ab['renderY'] ?? _0x1c59ab['y']) - _0x3698ad + _0x1c59ab['height'] / 0x2;
                const _0x23bc75 = _0x1c59ab['width'] * (_0x1c59ab['scale'] || 0x1) * 1.3;
                const _0x44d70a = _0x1c59ab['height'] * (_0x1c59ab['scale'] || 0x1) * 1.3;
                _0x50a837['save']();
                try {
                    _0x50a837['translate'](_0x45b999, _0x15aca9);
                    _0x50a837['rotate'](_0x1c59ab['renderAngle'] ?? 0x0);
                    _0x50a837['globalAlpha'] = 0.3;
                    _0x49d018(_0x50a837, _0x1c59ab['body'], _0x1c59ab['eyes'], _0x23bc75, _0x44d70a);
                } finally {
                    _0x50a837['restore']();
                }
                if (!_0x46a2ff((_0x1c59ab['renderX'] ?? _0x1c59ab['x']) + _0x1c59ab['width'] / 0x2, (_0x1c59ab['renderY'] ?? _0x1c59ab['y']) + _0x1c59ab['height'] / 0x2)) {
                    _0x50a837['save']();
                    _0x50a837['globalAlpha'] = 0.3;
                    _0x50a837['textAlign'] = 'center';
                    _0x50a837['lineJoin'] = 'round';
                    _0x50a837['lineWidth'] = 0x3;
                    _0x50a837['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x50a837['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x50a837['fillStyle'] = '#ffffff';
                    const _0x1f3fd8 = _0x1c59ab['name'] + (_0x1c59ab['isOwner'] ? '\x20[🗝️]' : '');
                    _0x50a837['strokeText'](_0x1f3fd8, _0x45b999, _0x15aca9 - _0x44d70a / 0x2 - 0x10);
                    _0x50a837['fillText'](_0x1f3fd8, _0x45b999, _0x15aca9 - _0x44d70a / 0x2 - 0x10);
                    _0x50a837['restore']();
                }
            }
            _0x50a837['save']();
            try {
                _0x50a837['translate'](_0x194cf0, _0x4ce179);
                _0x50a837['rotate'](_0x3b2baf['angle']);
                _0x50a837['globalAlpha'] = 0.3;
                _0x49d018(_0x50a837, _0x5c2fc7, _0x15be43, _0x3f7d98, _0x10d7dd);
            } finally {
                _0x50a837['restore']();
            }
            if (!_0x46a2ff(_0x3b2baf['x'] + _0x3b2baf['width'] / 0x2, _0x3b2baf['y'] + _0x3b2baf['height'] / 0x2)) {
                _0x50a837['save']();
                _0x50a837['globalAlpha'] = 0.3;
                _0x50a837['textAlign'] = 'center';
                _0x50a837['lineJoin'] = 'round';
                _0x50a837['lineWidth'] = 0x3;
                _0x50a837['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x50a837['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x50a837['fillStyle'] = '#ffffff';
                const _0x456823 = _0x54f4a1 + (_0x484d63 ? '\x20[🗝️]' : '');
                _0x50a837['strokeText'](_0x456823, _0x194cf0, _0x4ce179 - _0x10d7dd / 0x2 - 0x10);
                _0x50a837['fillText'](_0x456823, _0x194cf0, _0x4ce179 - _0x10d7dd / 0x2 - 0x10);
                _0x50a837['restore']();
            }
        }
        for (let _0x4be4d6 = _0x530f54; _0x4be4d6 <= _0x569f7d; _0x4be4d6++)
            for (let _0x382140 = _0x4ececa; _0x382140 <= _0x5b5cc9; _0x382140++) {
                const _0x3aaf27 = _0x382140 * _0x1bc4e7['MAP']['chunkSize'] - _0x483e12;
                const _0x621ccf = _0x4be4d6 * _0x1bc4e7['MAP']['chunkSize'] - _0x3698ad;
                _0x50a837['drawImage'](_0x1bc4e7['MAP']['fgChunks'][_0x4be4d6][_0x382140], _0x3aaf27, _0x621ccf, _0x1bc4e7['MAP']['chunkSize'] + 0x1, _0x1bc4e7['MAP']['chunkSize'] + 0x1);
            }
        if (_0x1bc4e7['EDITOR']['enabled'] && _0x1bc4e7['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x73d881 = _0x1bc4e7['INPUTS']['mouseX'] / _0x1bc4e7['SYSTEM']['viewScale'] + _0x1bc4e7['CAMERA']['x'];
            const _0x17cb5a = _0x1bc4e7['INPUTS']['mouseY'] / _0x1bc4e7['SYSTEM']['viewScale'] + _0x1bc4e7['CAMERA']['y'];
            const _0x352c6d = Math['floor'](_0x73d881 / _0x1bc4e7['MAP']['tileSize']);
            const _0x5b4372 = Math['floor'](_0x17cb5a / _0x1bc4e7['MAP']['tileSize']);
            if (_0x352c6d >= 0x0 && _0x352c6d < _0x1bc4e7['MAP']['columns'] && _0x5b4372 >= 0x0 && _0x5b4372 < _0x1bc4e7['MAP']['rows']) {
                const _0xb52960 = _0x352c6d * _0x1bc4e7['MAP']['tileSize'] - _0x483e12;
                const _0x2393ed = _0x5b4372 * _0x1bc4e7['MAP']['tileSize'] - _0x3698ad;
                _0x50a837['save']();
                _0x50a837['globalAlpha'] = 0.5;
                if (_0x1bc4e7['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x5f3712 = _0x1bc4e7['EDITOR']['selectedTileGid'] - 0x1;
                    _0x50a837['drawImage'](_0x3c41ba, _0x5f3712 % _0x1bc4e7['MAP']['tilesetCols'] * _0x1bc4e7['MAP']['tileSize'], Math['floor'](_0x5f3712 / _0x1bc4e7['MAP']['tilesetCols']) * _0x1bc4e7['MAP']['tileSize'], _0x1bc4e7['MAP']['tileSize'], _0x1bc4e7['MAP']['tileSize'], _0xb52960, _0x2393ed, _0x1bc4e7['MAP']['tileSize'], _0x1bc4e7['MAP']['tileSize']);
                } else {
                    _0x50a837['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x50a837['fillRect'](_0xb52960, _0x2393ed, _0x1bc4e7['MAP']['tileSize'], _0x1bc4e7['MAP']['tileSize']);
                }
                _0x50a837['restore']();
            }
        }
        _0x2804c1(_0x50a837, _0x483e12, _0x3698ad);
        if (_0x13ba4f > 0x0) {
            _0x50a837['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x13ba4f + ')';
            _0x50a837['fillRect'](0x0, 0x0, _0x1bc4e7['CAMERA']['width'], _0x1bc4e7['CAMERA']['height']);
        }
        for (const _0x53d6cb in _0x292c33) {
            const _0x58d217 = _0x292c33[_0x53d6cb];
            if (_0x58d217['isDead'] && !_0x3b2baf['isDead'])
                continue;
            const _0x5b500a = (_0x58d217['renderX'] ?? _0x58d217['x']) - _0x483e12 + _0x58d217['width'] / 0x2;
            const _0x42a65d = (_0x58d217['renderY'] ?? _0x58d217['y']) - _0x3698ad + _0x58d217['height'] / 0x2;
            _0x5c444f(_0x50a837, _0x58d217['chats'], _0x5b500a, _0x42a65d - _0x58d217['height'] / 0x2 - 0x20);
        }
        _0x5c444f(_0x50a837, _0x3b2baf['chats'], _0x194cf0, _0x4ce179 - _0x3b2baf['height'] / 0x2 - 0x20);
    } finally {
        _0x50a837['restore']();
    }
}
function _0x4f92a1(_0x1d4af5) {
    if (!_0x1bc4e7['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x4f92a1);
    let _0x19220e = (_0x1d4af5 - _0x1bc4e7['SYSTEM']['lastTime']) / 0x3e8;
    _0x1bc4e7['SYSTEM']['lastTime'] = _0x1d4af5;
    if (_0x19220e > 0.1)
        _0x19220e = 0.1;
    if (_0x19220e < 0x0 || isNaN(_0x19220e))
        _0x19220e = 0.016;
    if (_0x1291d2) {
        _0x5e6753(_0x19220e);
        _0xea76be();
        return;
    }
    if (!_0x5c6f01)
        return;
    _0x598e1d(_0x19220e);
    _0xfbf0c['tick'](_0x1d4af5);
    _0xea76be();
}
function _0x59bc5d() {
    const _0x538443 = Math['ceil'](_0x1bc4e7['MAP']['columns'] * _0x1bc4e7['MAP']['tileSize'] / _0x1bc4e7['MAP']['chunkSize']);
    const _0x211dcd = Math['ceil'](_0x1bc4e7['MAP']['rows'] * _0x1bc4e7['MAP']['tileSize'] / _0x1bc4e7['MAP']['chunkSize']);
    _0x1bc4e7['MAP']['bgChunks'] = [];
    _0x1bc4e7['MAP']['fgChunks'] = [];
    _0x1bc4e7['MAP']['wallChunks'] = [];
    for (let _0x5d675e = 0x0; _0x5d675e < _0x211dcd; _0x5d675e++) {
        _0x1bc4e7['MAP']['bgChunks'][_0x5d675e] = [];
        _0x1bc4e7['MAP']['fgChunks'][_0x5d675e] = [];
        _0x1bc4e7['MAP']['wallChunks'][_0x5d675e] = [];
        for (let _0x2af1af = 0x0; _0x2af1af < _0x538443; _0x2af1af++) {
            const _0x1ebd54 = document['createElement']('canvas');
            _0x1ebd54['width'] = _0x1ebd54['height'] = _0x1bc4e7['MAP']['chunkSize'];
            const _0x52b76d = document['createElement']('canvas');
            _0x52b76d['width'] = _0x52b76d['height'] = _0x1bc4e7['MAP']['chunkSize'];
            const _0x4e7c70 = document['createElement']('canvas');
            _0x4e7c70['width'] = _0x4e7c70['height'] = _0x1bc4e7['MAP']['chunkSize'];
            _0x1bc4e7['MAP']['bgChunks'][_0x5d675e][_0x2af1af] = _0x1ebd54;
            _0x1bc4e7['MAP']['fgChunks'][_0x5d675e][_0x2af1af] = _0x52b76d;
            _0x1bc4e7['MAP']['wallChunks'][_0x5d675e][_0x2af1af] = _0x4e7c70;
            _0x2f9081(_0x2af1af, _0x5d675e);
        }
    }
}
function _0x2f9081(_0x1b09d9, _0xe35569) {
    const _0x42815a = _0x1bc4e7['MAP']['bgChunks'][_0xe35569][_0x1b09d9]['getContext']('2d', { 'alpha': !![] });
    const _0x555a7f = _0x1bc4e7['MAP']['fgChunks'][_0xe35569][_0x1b09d9]['getContext']('2d', { 'alpha': !![] });
    const _0x44b471 = _0x1bc4e7['MAP']['wallChunks'][_0xe35569] && _0x1bc4e7['MAP']['wallChunks'][_0xe35569][_0x1b09d9] ? _0x1bc4e7['MAP']['wallChunks'][_0xe35569][_0x1b09d9]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x42815a['imageSmoothingEnabled'] = _0x555a7f['imageSmoothingEnabled'] = ![];
    if (_0x44b471)
        _0x44b471['imageSmoothingEnabled'] = ![];
    _0x42815a['clearRect'](0x0, 0x0, _0x1bc4e7['MAP']['chunkSize'], _0x1bc4e7['MAP']['chunkSize']);
    _0x555a7f['clearRect'](0x0, 0x0, _0x1bc4e7['MAP']['chunkSize'], _0x1bc4e7['MAP']['chunkSize']);
    if (_0x44b471)
        _0x44b471['clearRect'](0x0, 0x0, _0x1bc4e7['MAP']['chunkSize'], _0x1bc4e7['MAP']['chunkSize']);
    const _0x1ab3da = Math['floor'](_0x1b09d9 * _0x1bc4e7['MAP']['chunkSize'] / _0x1bc4e7['MAP']['tileSize']);
    const _0x4c190f = Math['ceil']((_0x1b09d9 + 0x1) * _0x1bc4e7['MAP']['chunkSize'] / _0x1bc4e7['MAP']['tileSize']);
    const _0x19ecd6 = Math['floor'](_0xe35569 * _0x1bc4e7['MAP']['chunkSize'] / _0x1bc4e7['MAP']['tileSize']);
    const _0x14e410 = Math['ceil']((_0xe35569 + 0x1) * _0x1bc4e7['MAP']['chunkSize'] / _0x1bc4e7['MAP']['tileSize']);
    const _0x4eb793 = 0.5;
    const _0x7379c0 = _0x1bc4e7['MAP']['tileSize'] - _0x4eb793 * 0x2;
    _0x1bc4e7['MAP']['layers']['forEach'](_0x42466e => {
        const _0x3b3f48 = _0x42466e['name'] === 'walls';
        const _0x21ca85 = _0x42466e['name'] === 'trees' ? _0x555a7f : _0x3b3f48 ? _0x44b471 || _0x42815a : _0x42815a;
        for (let _0x59ed2c = Math['max'](0x0, _0x19ecd6); _0x59ed2c < Math['min'](_0x1bc4e7['MAP']['rows'], _0x14e410); _0x59ed2c++) {
            for (let _0x18d190 = Math['max'](0x0, _0x1ab3da); _0x18d190 < Math['min'](_0x1bc4e7['MAP']['columns'], _0x4c190f); _0x18d190++) {
                let _0x2902bf = _0x42466e['data'][_0x59ed2c * _0x1bc4e7['MAP']['columns'] + _0x18d190];
                if (_0x42466e['name'] === 'floor2' && _0x1bc4e7['MAP']['doors'] && _0x1bc4e7['MAP']['doors'][_0x59ed2c * _0x1bc4e7['MAP']['columns'] + _0x18d190]) {
                    _0x2902bf = 0x2;
                }
                if (_0x2902bf > 0x0) {
                    const _0x443152 = _0x2902bf - 0x1;
                    const _0x4e37dc = _0x443152 % _0x1bc4e7['MAP']['tilesetCols'] * _0x1bc4e7['MAP']['tileSize'] + _0x4eb793;
                    const _0x29589e = Math['floor'](_0x443152 / _0x1bc4e7['MAP']['tilesetCols']) * _0x1bc4e7['MAP']['tileSize'] + _0x4eb793;
                    const _0x9aa82 = _0x18d190 * _0x1bc4e7['MAP']['tileSize'] - _0x1b09d9 * _0x1bc4e7['MAP']['chunkSize'];
                    const _0x1e88b1 = _0x59ed2c * _0x1bc4e7['MAP']['tileSize'] - _0xe35569 * _0x1bc4e7['MAP']['chunkSize'];
                    if (_0x2902bf === 0x4) {
                        const _0x2175dc = 0x1;
                        const _0x132702 = _0x2175dc % _0x1bc4e7['MAP']['tilesetCols'] * _0x1bc4e7['MAP']['tileSize'] + _0x4eb793;
                        const _0x20abc2 = Math['floor'](_0x2175dc / _0x1bc4e7['MAP']['tilesetCols']) * _0x1bc4e7['MAP']['tileSize'] + _0x4eb793;
                        _0x42815a['drawImage'](_0x3c41ba, _0x132702, _0x20abc2, _0x7379c0, _0x7379c0, _0x9aa82, _0x1e88b1, _0x1bc4e7['MAP']['tileSize'], _0x1bc4e7['MAP']['tileSize']);
                        let _0xd7b713 = _0x1bc4e7['MAP']['doors'] ? _0x1bc4e7['MAP']['doors'][_0x59ed2c * _0x1bc4e7['MAP']['columns'] + _0x18d190] : null;
                        if (!_0xd7b713) {
                            const _0x101d17 = _0x1bc4e7['MAP']['layers']['find'](_0x245854 => _0x245854['name'] === 'walls');
                            const _0x4218a2 = _0x59ed2c > 0x0 && _0x101d17 && _0x101d17['data'][(_0x59ed2c - 0x1) * _0x1bc4e7['MAP']['columns'] + _0x18d190] > 0x0;
                            const _0x389ae6 = _0x59ed2c < _0x1bc4e7['MAP']['rows'] - 0x1 && _0x101d17 && _0x101d17['data'][(_0x59ed2c + 0x1) * _0x1bc4e7['MAP']['columns'] + _0x18d190] > 0x0;
                            const _0x4db78c = _0x18d190 > 0x0 && _0x101d17 && _0x101d17['data'][_0x59ed2c * _0x1bc4e7['MAP']['columns'] + _0x18d190 - 0x1] > 0x0;
                            const _0x5c2e0f = _0x18d190 < _0x1bc4e7['MAP']['columns'] - 0x1 && _0x101d17 && _0x101d17['data'][_0x59ed2c * _0x1bc4e7['MAP']['columns'] + _0x18d190 + 0x1] > 0x0;
                            if (_0x4db78c && _0x5c2e0f)
                                _0xd7b713 = _0x59ed2c < _0x1bc4e7['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x4218a2 && _0x389ae6)
                                _0xd7b713 = _0x18d190 < _0x1bc4e7['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0xe28a30 = 0x0;
                        if (_0xd7b713 === 'bottom')
                            _0xe28a30 = Math['PI'] / 0x2;
                        else if (_0xd7b713 === 'left')
                            _0xe28a30 = Math['PI'];
                        else if (_0xd7b713 === 'top')
                            _0xe28a30 = -Math['PI'] / 0x2;
                        else if (_0xd7b713 === 'right')
                            _0xe28a30 = 0x0;
                        if (_0xe28a30 !== 0x0) {
                            _0x21ca85['save']();
                            _0x21ca85['translate'](_0x9aa82 + _0x1bc4e7['MAP']['tileSize'] / 0x2, _0x1e88b1 + _0x1bc4e7['MAP']['tileSize'] / 0x2);
                            _0x21ca85['rotate'](_0xe28a30);
                            _0x21ca85['drawImage'](_0x3c41ba, _0x4e37dc, _0x29589e, _0x7379c0, _0x7379c0, -_0x1bc4e7['MAP']['tileSize'] / 0x2, -_0x1bc4e7['MAP']['tileSize'] / 0x2, _0x1bc4e7['MAP']['tileSize'], _0x1bc4e7['MAP']['tileSize']);
                            _0x21ca85['restore']();
                        } else {
                            _0x21ca85['drawImage'](_0x3c41ba, _0x4e37dc, _0x29589e, _0x7379c0, _0x7379c0, _0x9aa82, _0x1e88b1, _0x1bc4e7['MAP']['tileSize'], _0x1bc4e7['MAP']['tileSize']);
                        }
                    } else {
                        _0x21ca85['drawImage'](_0x3c41ba, _0x4e37dc, _0x29589e, _0x7379c0, _0x7379c0, _0x9aa82, _0x1e88b1, _0x1bc4e7['MAP']['tileSize'], _0x1bc4e7['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x1fd7c6() {
    _0x3c41ba['crossOrigin'] = 'Anonymous';
    _0x3c41ba['onload'] = () => {
        _0x1bc4e7['MAP']['tilesetCols'] = 0x3;
        _0x447d8f();
    };
    _0x3c41ba['onerror'] = () => {
        _0x1bc4e7['MAP']['tilesetCols'] = 0x1;
        _0x447d8f();
    };
    _0x3c41ba['src'] = 'assets/tilesheet.png';
    _0x253c1e['crossOrigin'] = 'Anonymous';
    _0x253c1e['onload'] = _0x447d8f;
    _0x253c1e['onerror'] = () => {
        _0x447d8f();
    };
    _0x253c1e['src'] = 'assets/center.png';
    _0x2ba891['crossOrigin'] = 'Anonymous';
    _0x2ba891['onload'] = _0x447d8f;
    _0x2ba891['onerror'] = () => {
        _0x447d8f();
    };
    _0x2ba891['src'] = 'assets/table.png';
}
function _0x447d8f() {
    _0x1bc4e7['SYSTEM']['assetsLoaded']++;
    if (_0x1bc4e7['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x18b441();
    }
}
function _0x4295be(_0x4e3b36, _0x5e44b3) {
    if (!_0x484d63 || !_0x1ab0de)
        return;
    const _0x30c173 = _0x4e3b36 / _0x1bc4e7['SYSTEM']['viewScale'] + _0x1bc4e7['CAMERA']['x'];
    const _0x231279 = _0x5e44b3 / _0x1bc4e7['SYSTEM']['viewScale'] + _0x1bc4e7['CAMERA']['y'];
    const _0x303d50 = Math['floor'](_0x30c173 / _0x1bc4e7['MAP']['tileSize']);
    const _0x15d30a = Math['floor'](_0x231279 / _0x1bc4e7['MAP']['tileSize']);
    if (_0x303d50 >= 0x0 && _0x303d50 < _0x1bc4e7['MAP']['columns'] && _0x15d30a >= 0x0 && _0x15d30a < _0x1bc4e7['MAP']['rows'])
        _0x1ab0de['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x1bc4e7['EDITOR']['selectedLayer'],
            'col': _0x303d50,
            'row': _0x15d30a,
            'gid': _0x1bc4e7['EDITOR']['selectedTileGid']
        }));
}
function _0x30cd76() {
    const _0x5231ce = document['getElementById']('palette');
    if (!_0x5231ce || _0x5231ce['children']['length'] > 0x0)
        return;
    const _0x14fe4e = 0x40;
    const _0x5b364b = _0x3c41ba;
    const _0x5cecde = document['createElement']('div');
    _0x5cecde['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x15a9b2 = document['createElement']('canvas');
    _0x15a9b2['width'] = 0xc0;
    _0x15a9b2['height'] = 0xa0;
    _0x15a9b2['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x5cecde['appendChild'](_0x15a9b2);
    const _0x4ee7c3 = document['createElement']('div');
    _0x4ee7c3['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x5cecde['appendChild'](_0x4ee7c3);
    let _0x2e7b86 = 0x0, _0x3607c0 = 0x0;
    let _0x11504e = ![], _0x496ad7 = 0x0, _0xe0ed53 = 0x0, _0x31857b = 0x0, _0x567803 = 0x0;
    function _0x176e5b() {
        const _0x438bdd = _0x15a9b2['getContext']('2d');
        _0x438bdd['clearRect'](0x0, 0x0, _0x15a9b2['width'], _0x15a9b2['height']);
        _0x438bdd['imageSmoothingEnabled'] = ![];
        if (_0x5b364b['complete'] && _0x5b364b['naturalWidth'] > 0x0) {
            _0x438bdd['drawImage'](_0x5b364b, _0x2e7b86, _0x3607c0, _0x15a9b2['width'], _0x15a9b2['height'], 0x0, 0x0, _0x15a9b2['width'], _0x15a9b2['height']);
        }
        _0x438bdd['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x438bdd['lineWidth'] = 0x1;
        const _0x7bdc19 = Math['floor'](_0x2e7b86 / _0x14fe4e);
        const _0x43c976 = Math['floor'](_0x3607c0 / _0x14fe4e);
        for (let _0x3dc18a = _0x7bdc19; _0x3dc18a <= _0x7bdc19 + Math['ceil'](_0x15a9b2['width'] / _0x14fe4e) + 0x1; _0x3dc18a++) {
            const _0x4bff61 = _0x3dc18a * _0x14fe4e - _0x2e7b86;
            _0x438bdd['beginPath']();
            _0x438bdd['moveTo'](_0x4bff61, 0x0);
            _0x438bdd['lineTo'](_0x4bff61, _0x15a9b2['height']);
            _0x438bdd['stroke']();
        }
        for (let _0x453226 = _0x43c976; _0x453226 <= _0x43c976 + Math['ceil'](_0x15a9b2['height'] / _0x14fe4e) + 0x1; _0x453226++) {
            const _0xefbdfa = _0x453226 * _0x14fe4e - _0x3607c0;
            _0x438bdd['beginPath']();
            _0x438bdd['moveTo'](0x0, _0xefbdfa);
            _0x438bdd['lineTo'](_0x15a9b2['width'], _0xefbdfa);
            _0x438bdd['stroke']();
        }
    }
    function _0x2a7172() {
        const _0x33947e = Math['max'](0x1, Math['ceil'](_0x5b364b['naturalWidth'] / _0x14fe4e));
        const _0x43b950 = _0x1bc4e7['EDITOR']['selectedTileGid'];
        if (_0x43b950 <= 0x0) {
            _0x4ee7c3['style']['display'] = 'none';
            return;
        }
        const _0x724b50 = _0x43b950 - 0x1;
        const _0xe4e55d = _0x724b50 % _0x33947e;
        const _0x519f41 = Math['floor'](_0x724b50 / _0x33947e);
        const _0x42e0bc = _0xe4e55d * _0x14fe4e - _0x2e7b86;
        const _0x39b5be = _0x519f41 * _0x14fe4e - _0x3607c0;
        _0x4ee7c3['style']['display'] = 'block';
        _0x4ee7c3['style']['left'] = _0x42e0bc + 'px';
        _0x4ee7c3['style']['top'] = _0x39b5be + 'px';
    }
    _0x5b364b['onload'] = () => {
        _0x176e5b();
        _0x2a7172();
    };
    if (_0x5b364b['complete'] && _0x5b364b['naturalWidth'] > 0x0) {
        _0x176e5b();
        _0x2a7172();
    }
    _0x5cecde['addEventListener']('mousedown', _0x105c13 => {
        if (_0x105c13['button'] === 0x0) {
            _0x11504e = !![];
            _0x496ad7 = _0x105c13['clientX'];
            _0xe0ed53 = _0x105c13['clientY'];
            _0x31857b = _0x2e7b86;
            _0x567803 = _0x3607c0;
            _0x5cecde['style']['cursor'] = 'grabbing';
            _0x105c13['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x2e8b3e => {
        if (!_0x11504e)
            return;
        const _0x208bbc = _0x496ad7 - _0x2e8b3e['clientX'];
        const _0x32461e = _0xe0ed53 - _0x2e8b3e['clientY'];
        const _0x18eb38 = Math['max'](0x0, _0x5b364b['naturalWidth'] - _0x15a9b2['width']);
        const _0xd3130b = Math['max'](0x0, _0x5b364b['naturalHeight'] - _0x15a9b2['height']);
        _0x2e7b86 = Math['max'](0x0, Math['min'](_0x18eb38, _0x31857b + _0x208bbc));
        _0x3607c0 = Math['max'](0x0, Math['min'](_0xd3130b, _0x567803 + _0x32461e));
        _0x176e5b();
        _0x2a7172();
    });
    window['addEventListener']('mouseup', _0x230921 => {
        if (_0x11504e) {
            _0x11504e = ![];
            _0x5cecde['style']['cursor'] = 'grab';
        }
    });
    _0x5cecde['addEventListener']('click', _0x3f70ba => {
        const _0x1c02b4 = _0x5cecde['getBoundingClientRect']();
        const _0x202905 = _0x3f70ba['clientX'] - _0x1c02b4['left'] + _0x2e7b86;
        const _0x22ff33 = _0x3f70ba['clientY'] - _0x1c02b4['top'] + _0x3607c0;
        const _0x5db39d = Math['max'](0x1, Math['ceil'](_0x5b364b['naturalWidth'] / _0x14fe4e));
        const _0x5d827b = Math['floor'](_0x202905 / _0x14fe4e);
        const _0x3b493b = Math['floor'](_0x22ff33 / _0x14fe4e);
        const _0x2642e4 = _0x3b493b * _0x5db39d + _0x5d827b + 0x1;
        _0x1bc4e7['EDITOR']['selectedTileGid'] = _0x2642e4;
        _0x2a7172();
    });
    _0x5231ce['appendChild'](_0x5cecde);
    const _0x3d40a1 = document['createElement']('div');
    _0x3d40a1['className'] = 'tile-btn\x20eraser-btn';
    _0x3d40a1['title'] = 'Eraser\x20(gid\x200)';
    _0x3d40a1['onclick'] = () => {
        _0x1bc4e7['EDITOR']['selectedTileGid'] = 0x0;
        _0x4ee7c3['style']['display'] = 'none';
    };
    _0x5231ce['appendChild'](_0x3d40a1);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x1bc4e7['EDITOR']['enabled'] = !_0x1bc4e7['EDITOR']['enabled'];
        const _0x394e71 = document['getElementById']('editor-tools');
        if (_0x1bc4e7['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x394e71['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x394e71['style']['display'] = 'none';
        }
    });
    const _0x317c26 = document['getElementById']('start-game-btn');
    if (_0x317c26) {
        _0x317c26['addEventListener']('click', () => {
            if (_0x1ab0de)
                _0x1ab0de['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x483cda = document['getElementById']('rolelist-toggle-btn');
    if (_0x483cda) {
        let _0x4d9141 = 'subalignments';
        _0x483cda['addEventListener']('click', () => {
            if (_0x4d9141 === 'subalignments')
                _0x4d9141 = 'precise';
            else if (_0x4d9141 === 'precise')
                _0x4d9141 = 'off';
            else
                _0x4d9141 = 'subalignments';
            _0x483cda['innerText'] = 'Role\x20List:\x20' + _0x4d9141['charAt'](0x0)['toUpperCase']() + _0x4d9141['slice'](0x1);
            if (_0x1ab0de)
                _0x1ab0de['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x4d9141
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x3e45f7 => {
        if (_0x3e45f7['id'] === 'editor-toggle-btn' || _0x3e45f7['id'] === 'start-game-btn' || _0x3e45f7['id'] === 'rolelist-toggle-btn')
            return;
        _0x3e45f7['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x532367 => _0x532367['classList']['remove']('active'));
            _0x3e45f7['classList']['add']('active');
            _0x1bc4e7['EDITOR']['selectedLayer'] = _0x3e45f7['dataset']['layer'];
        });
    });
}
function _0x379fa1(_0x37106f) {
    if (_0x1ab0de)
        _0x1ab0de['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x37106f
        }));
}
function _0x7395a2(_0x99188c) {
    if (_0x1ab0de)
        _0x1ab0de['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x99188c
        }));
}
function _0x10f3db(_0xe74a65, _0x18687a, _0x285024, _0x259ddc) {
    const _0x1286f0 = document['getElementById']('admin-panel');
    if (_0x1286f0)
        _0x1286f0['remove']();
    if (_0x1286f0 && _0x1286f0['dataset']['target'] === String(_0xe74a65))
        return;
    const _0x4cef21 = document['createElement']('div');
    _0x4cef21['id'] = 'admin-panel';
    _0x4cef21['dataset']['target'] = String(_0xe74a65);
    _0x4cef21['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x2c79cb = document['createElement']('div');
    _0x2c79cb['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x2c79cb['textContent'] = _0x18687a;
    _0x4cef21['appendChild'](_0x2c79cb);
    const _0x139440 = document['createElement']('button');
    _0x139440['textContent'] = 'Kick';
    _0x139440['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x139440['onmouseenter'] = () => _0x139440['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x139440['onmouseleave'] = () => _0x139440['style']['background'] = 'transparent';
    _0x139440['onclick'] = () => {
        _0x379fa1(_0xe74a65);
        _0x4cef21['remove']();
    };
    _0x4cef21['appendChild'](_0x139440);
    const _0x1c89b9 = document['createElement']('button');
    _0x1c89b9['textContent'] = 'Ban';
    _0x1c89b9['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x1c89b9['onmouseenter'] = () => _0x1c89b9['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x1c89b9['onmouseleave'] = () => _0x1c89b9['style']['background'] = 'transparent';
    _0x1c89b9['onclick'] = () => {
        _0x7395a2(_0xe74a65);
        _0x4cef21['remove']();
    };
    _0x4cef21['appendChild'](_0x1c89b9);
    document['body']['appendChild'](_0x4cef21);
    const _0x185d03 = _0x4cef21['offsetWidth'] || 0x91;
    const _0x46d255 = _0x4cef21['offsetHeight'] || 0x50;
    let _0x1cb709 = _0x285024 - _0x185d03;
    let _0x27ea07 = _0x259ddc;
    if (_0x1cb709 < 0x4)
        _0x1cb709 = _0x285024;
    if (_0x27ea07 + _0x46d255 > window['innerHeight'] - 0x4)
        _0x27ea07 = window['innerHeight'] - _0x46d255 - 0x4;
    _0x4cef21['style']['left'] = _0x1cb709 + 'px';
    _0x4cef21['style']['top'] = _0x27ea07 + 'px';
    const _0x22bdb3 = _0x281f0e => {
        if (!_0x4cef21['contains'](_0x281f0e['target'])) {
            _0x4cef21['remove']();
            document['removeEventListener']('mousedown', _0x22bdb3);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x22bdb3), 0x0);
}
function _0x561984() {
    const _0x40c20a = document['getElementById']('leaderboard-list');
    _0x40c20a['innerHTML'] = '';
    const _0x5f333b = document['createElement']('div');
    _0x5f333b['className'] = 'leaderboard-entry';
    const _0x493e87 = document['createElement']('span');
    _0x493e87['textContent'] = _0x54f4a1 + (_0x484d63 ? '\x20[🗝️]' : '');
    if (_0x152869['has'](_0x5c6f01) && !_0x3b2baf['isDead']) {
        _0x493e87['style']['color'] = '#cc88ff';
    }
    _0x5f333b['appendChild'](_0x493e87);
    _0x40c20a['appendChild'](_0x5f333b);
    for (const _0x262e75 in _0x292c33) {
        const _0x429d99 = document['createElement']('div');
        _0x429d99['className'] = 'leaderboard-entry';
        const _0x5995b8 = document['createElement']('span');
        _0x5995b8['textContent'] = _0x292c33[_0x262e75]['name'] + (_0x292c33[_0x262e75]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x152869['has'](parseInt(_0x262e75)) && !_0x292c33[_0x262e75]['isDead']) {
            _0x5995b8['style']['color'] = '#cc88ff';
        }
        _0x429d99['appendChild'](_0x5995b8);
        if (_0x484d63 && !_0x292c33[_0x262e75]['isOwner']) {
            const _0xf5f576 = _0x292c33[_0x262e75]['id'];
            const _0x2f38c0 = _0x292c33[_0x262e75]['name'];
            _0x429d99['style']['cursor'] = 'context-menu';
            _0x429d99['addEventListener']('contextmenu', _0x29893a => {
                _0x29893a['preventDefault']();
                _0x29893a['stopPropagation']();
                _0x10f3db(_0xf5f576, _0x2f38c0, _0x29893a['clientX'], _0x29893a['clientY']);
            });
        }
        _0x40c20a['appendChild'](_0x429d99);
    }
}
window['addEventListener']('resize', _0x18b441);
function _0x18b441() {
    _0x53f1dc['width'] = window['innerWidth'];
    _0x53f1dc['height'] = window['innerHeight'];
    _0x1bc4e7['SYSTEM']['viewScale'] = Math['max'](_0x53f1dc['width'] / _0x4cc23b, _0x53f1dc['height'] / _0x2d852f);
    _0x1bc4e7['CAMERA']['width'] = _0x53f1dc['width'] / _0x1bc4e7['SYSTEM']['viewScale'];
    _0x1bc4e7['CAMERA']['height'] = _0x53f1dc['height'] / _0x1bc4e7['SYSTEM']['viewScale'];
    _0x50a837['imageSmoothingEnabled'] = ![];
}
function _0x25ea02(_0x2aaf6b) {
    if (_0x2aaf6b['ctrlKey'] || _0x2aaf6b['metaKey']) {
        if (_0x2aaf6b['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x2aaf6b['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x2aaf6b['code'])) {
            _0x2aaf6b['preventDefault']();
            _0x2aaf6b['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x25ea02, { 'passive': ![] });
window['addEventListener']('keydown', _0x25ea02, { 'passive': ![] });
window['addEventListener']('keydown', _0x598724 => {
    const _0x3977f3 = _0x598724['key']['toLowerCase']();
    if (_0x3977f3 === 'tab') {
        _0x598724['preventDefault']();
        const _0x39e6d8 = document['getElementById']('will-ui');
        const _0x1c9f59 = document['getElementById']('will-input');
        if (_0x39e6d8['style']['display'] === 'flex') {
            _0x39e6d8['style']['display'] = 'none';
            if (_0x1ab0de)
                _0x1ab0de['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x1c9f59['value']
                }));
            _0x1c9f59['blur']();
        } else {
            _0x39e6d8['style']['display'] = 'flex';
            _0x1c9f59['focus']();
            for (let _0x42a598 in _0x1bc4e7['INPUTS']['keys'])
                _0x1bc4e7['INPUTS']['keys'][_0x42a598] = ![];
        }
        return;
    }
    if (_0x598724['key'] === 'Enter') {
        if (_0x1291d2) {
            const _0x3a25f8 = document['getElementById']('play-btn');
            if (_0x3a25f8)
                _0x3a25f8['click']();
            return;
        }
        if (!_0x1ab0de || _0x1ab0de['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x3c53e8 = document['getElementById']('chat-ui');
        const _0xbead03 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0xbead03) {
            const _0x439f68 = _0xbead03['value']['trim']();
            if (_0x439f68['length'] > 0x0) {
                _0x1ab0de['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x439f68
                }));
            }
            _0xbead03['value'] = '';
            _0x3c53e8['style']['display'] = 'none';
            _0xbead03['blur']();
        } else {
            _0x3c53e8['style']['display'] = 'block';
            _0xbead03['focus']();
            for (let _0x56dca0 in _0x1bc4e7['INPUTS']['keys'])
                _0x1bc4e7['INPUTS']['keys'][_0x56dca0] = ![];
        }
        _0x598724['preventDefault']();
        return;
    }
    if (_0x598724['key'] === 'Escape') {
        const _0x38dc9d = document['getElementById']('guide-ui');
        if (_0x38dc9d && _0x38dc9d['style']['display'] === 'flex') {
            _0x38dc9d['style']['display'] = 'none';
            return;
        }
        const _0x100eb7 = document['getElementById']('ability-ui');
        if (_0x100eb7 && _0x100eb7['style']['display'] === 'block') {
            _0x100eb7['style']['display'] = 'none';
            return;
        }
        const _0x4b0b33 = document['getElementById']('settings-panel');
        if (_0x4b0b33 && _0x4b0b33['style']['display'] === 'block') {
            _0x4b0b33['style']['display'] = 'none';
            return;
        }
        const _0x5a58a5 = document['getElementById']('mayor-confirm-dialog');
        if (_0x5a58a5 && _0x5a58a5['style']['display'] === 'flex') {
            _0x5a58a5['style']['display'] = 'none';
            return;
        }
        const _0x1ed92a = document['getElementById']('target-chooser-ui');
        if (_0x1ed92a && _0x1ed92a['style']['display'] === 'flex') {
            _0x1ed92a['style']['display'] = 'none';
            return;
        }
        const _0xf6eb54 = document['getElementById']('chat-ui');
        const _0x1fb5db = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x1fb5db) {
            _0x1fb5db['value'] = '';
            _0xf6eb54['style']['display'] = 'none';
            _0x1fb5db['blur']();
            _0x598724['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x1bc4e7['INPUTS']['keys']['hasOwnProperty'](_0x3977f3))
            _0x1bc4e7['INPUTS']['keys'][_0x3977f3] = !![];
        if (!_0x1ab0de || _0x1ab0de['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x3977f3 === 'h' && !_0x598724['repeat']) {
            const _0x42737b = document['getElementById']('guide-ui');
            if (_0x42737b) {
                _0x42737b['style']['display'] = _0x42737b['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x3977f3 === 't' && !_0x598724['repeat']) {
            if (_0x3b2baf['isDead'])
                return;
            if (_0x4fb31f === 'Mayor') {
                if (_0x152869['has'](_0x5c6f01)) {
                    _0x540046('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x3fb5c6 = document['getElementById']('mayor-confirm-dialog');
                if (_0x3fb5c6)
                    _0x3fb5c6['style']['display'] = 'flex';
                return;
            }
            if (_0x1bc4e7['GAME_STATE'] === 'NIGHT') {
                if (!_0x1bc4e7['NIGHT_ABILITY_OPEN']) {
                    _0x540046('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x59e89c = document['getElementById']('ability-ui');
                if (_0x59e89c) {
                    if (_0x59e89c['style']['display'] === 'block') {
                        _0x59e89c['style']['display'] = 'none';
                    } else {
                        _0x20ccd5();
                        _0x59e89c['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1bc4e7['GAME_STATE'] === 'DAY_DISCUSS' || _0x1bc4e7['GAME_STATE'] === 'DAY_VOTE') {
                _0x540046('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x3977f3 === 'e' && !_0x3b2baf['isDead']) {
            const _0x4a84af = Date['now']();
            if (!window['_lastDoorSend'] || _0x4a84af - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x4a84af;
                _0x1ab0de['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x428ab0 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x13bd3c = _0x428ab0['key']['toLowerCase']();
        if (_0x1bc4e7['INPUTS']['keys']['hasOwnProperty'](_0x13bd3c))
            _0x1bc4e7['INPUTS']['keys'][_0x13bd3c] = ![];
    }
});
window['addEventListener']('mousemove', _0x3ca974 => {
    _0x1bc4e7['INPUTS']['mouseX'] = _0x3ca974['clientX'];
    _0x1bc4e7['INPUTS']['mouseY'] = _0x3ca974['clientY'];
    if (_0x1bc4e7['INPUTS']['isMouseDown'] && _0x1bc4e7['EDITOR']['enabled']) {
        _0x4295be(_0x3ca974['clientX'], _0x3ca974['clientY']);
    }
});
window['addEventListener']('mousedown', _0x5f030e => {
    if (_0x5f030e['target']['closest']('#editor-ui') || _0x5f030e['target']['closest']('#leaderboard-ui') || _0x5f030e['target']['closest']('#chat-log-ui') || _0x5f030e['target']['closest']('#target-chooser-ui') || _0x5f030e['target']['closest']('#guide-ui') || _0x5f030e['target']['closest']('#role-list-ui') || _0x5f030e['target']['closest']('#ability-ui') || _0x5f030e['target']['closest']('#settings-panel') || _0x5f030e['target']['closest']('#mayor-confirm-dialog') || _0x5f030e['target']['closest']('#mobile-action-bar') || _0x5f030e['target']['closest']('#mobile-top-bar') || _0x5f030e['target']['closest']('#mobile-joystick-zone') || _0x5f030e['target']['closest']('#mobile-chat-overlay') || _0x5f030e['target']['closest']('#will-ui') || _0x5f030e['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x5f030e['button'] === 0x0) {
        _0x1bc4e7['INPUTS']['isMouseDown'] = !![];
        if (_0x1bc4e7['EDITOR']['enabled'])
            _0x4295be(_0x5f030e['clientX'], _0x5f030e['clientY']);
    }
});
window['addEventListener']('mouseup', _0x5e3fa9 => {
    _0x1bc4e7['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x485aeb => {
    if (_0x485aeb['target']['closest']('#settings-btn'))
        return;
    const _0x132362 = document['getElementById']('leaderboard-list');
    const _0x5144b7 = document['getElementById']('leaderboard-toggle');
    if (_0x132362['style']['display'] === 'none') {
        _0x132362['style']['display'] = 'flex';
        _0x5144b7['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x132362['style']['display'] = 'none';
        _0x5144b7['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x55540d = document['getElementById']('close-target-btn');
if (_0x55540d) {
    _0x55540d['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x2fa659 = document['getElementById']('close-guide-btn');
if (_0x2fa659) {
    _0x2fa659['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x487b47 = document['getElementById']('role-list-header');
if (_0x487b47) {
    _0x487b47['addEventListener']('click', () => {
        const _0xbf6b4a = document['getElementById']('role-list-items');
        const _0x5747fe = document['getElementById']('role-list-toggle');
        if (_0xbf6b4a['style']['display'] === 'none') {
            _0xbf6b4a['style']['display'] = 'flex';
            _0x5747fe['style']['transform'] = 'rotate(0deg)';
        } else {
            _0xbf6b4a['style']['display'] = 'none';
            _0x5747fe['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x217266() {
    const _0x271664 = document['getElementById']('mobile-joystick-zone');
    const _0x386c82 = document['getElementById']('mobile-joystick-base');
    const _0x5447ba = document['getElementById']('mobile-joystick-knob');
    if (_0x271664 && _0x386c82 && _0x5447ba) {
        const _0x83a524 = 0x3e;
        const _0x250ece = (_0x151eaf, _0x52e9dd) => {
            const _0x581bb3 = _0x386c82['getBoundingClientRect']();
            const _0x4f569e = _0x581bb3['left'] + _0x581bb3['width'] / 0x2;
            const _0x217a77 = _0x581bb3['top'] + _0x581bb3['height'] / 0x2;
            const _0x3fcdf0 = _0x151eaf - _0x4f569e;
            const _0x302d2c = _0x52e9dd - _0x217a77;
            const _0x71b46b = Math['hypot'](_0x3fcdf0, _0x302d2c);
            if (_0x71b46b === 0x0) {
                _0x54ac9f = 0x0;
                _0x5c34dc = 0x0;
                _0x354cf5 = ![];
                _0x5447ba['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x55ec6d = Math['min'](_0x71b46b, _0x83a524);
            const _0xaf5439 = _0x3fcdf0 / _0x71b46b * _0x55ec6d;
            const _0x3c0ed2 = _0x302d2c / _0x71b46b * _0x55ec6d;
            _0x54ac9f = _0xaf5439 / _0x83a524;
            _0x5c34dc = _0x3c0ed2 / _0x83a524;
            _0x354cf5 = _0x71b46b >= _0x83a524 * 0.75;
            _0x5447ba['style']['transform'] = 'translate(' + _0xaf5439 + 'px,\x20' + _0x3c0ed2 + 'px)';
        };
        const _0x2b9c75 = _0x4c8141 => {
            for (let _0x33e89e = 0x0; _0x33e89e < _0x4c8141['changedTouches']['length']; _0x33e89e++) {
                const _0x3129f2 = _0x4c8141['changedTouches'][_0x33e89e];
                if (_0x421b07 === null) {
                    _0x421b07 = _0x3129f2['identifier'];
                    _0x5dcfaa = !![];
                    _0x250ece(_0x3129f2['clientX'], _0x3129f2['clientY']);
                    break;
                }
            }
        };
        const _0x40324a = _0x55ecff => {
            for (let _0x4891ed = 0x0; _0x4891ed < _0x55ecff['changedTouches']['length']; _0x4891ed++) {
                const _0x395785 = _0x55ecff['changedTouches'][_0x4891ed];
                if (_0x395785['identifier'] === _0x421b07) {
                    _0x250ece(_0x395785['clientX'], _0x395785['clientY']);
                    break;
                }
            }
        };
        const _0x1c227c = _0x4a9de8 => {
            for (let _0x551c6a = 0x0; _0x551c6a < _0x4a9de8['changedTouches']['length']; _0x551c6a++) {
                const _0xf77c3b = _0x4a9de8['changedTouches'][_0x551c6a];
                if (_0xf77c3b['identifier'] === _0x421b07) {
                    _0x421b07 = null;
                    _0x5dcfaa = ![];
                    _0x54ac9f = 0x0;
                    _0x5c34dc = 0x0;
                    _0x354cf5 = ![];
                    _0x5447ba['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x271664['addEventListener']('touchstart', _0x28f67f => {
            _0x28f67f['preventDefault']();
            _0x2b9c75(_0x28f67f);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x40324a, { 'passive': !![] });
        window['addEventListener']('touchend', _0x1c227c, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x1c227c, { 'passive': !![] });
    }
    const _0x348dc3 = (_0xa34504, _0x3240b1) => {
        const _0x4141e3 = _0xa34504 / _0x1bc4e7['SYSTEM']['viewScale'];
        const _0x28a8e2 = _0x3240b1 / _0x1bc4e7['SYSTEM']['viewScale'];
        const _0xf3f1c6 = _0x3b2baf['x'] - _0x1bc4e7['CAMERA']['x'] + _0x3b2baf['width'] / 0x2;
        const _0x3d1a01 = _0x3b2baf['y'] - _0x1bc4e7['CAMERA']['y'] + _0x3b2baf['height'] / 0x2;
        _0x3473b9 = Math['atan2'](_0x28a8e2 - _0x3d1a01, _0x4141e3 - _0xf3f1c6);
        _0x1d097a = !![];
        _0x1bc4e7['INPUTS']['mouseX'] = _0xa34504;
        _0x1bc4e7['INPUTS']['mouseY'] = _0x3240b1;
    };
    _0x53f1dc['addEventListener']('touchstart', _0x2de691 => {
        if (_0x1291d2)
            return;
        for (let _0x109218 = 0x0; _0x109218 < _0x2de691['changedTouches']['length']; _0x109218++) {
            const _0x266e20 = _0x2de691['changedTouches'][_0x109218];
            if (_0x266e20['identifier'] !== _0x421b07 && _0x146398 === null) {
                _0x146398 = _0x266e20['identifier'];
                _0x348dc3(_0x266e20['clientX'], _0x266e20['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x53f1dc['addEventListener']('touchmove', _0x53ef29 => {
        if (_0x1291d2)
            return;
        for (let _0x15a6e3 = 0x0; _0x15a6e3 < _0x53ef29['changedTouches']['length']; _0x15a6e3++) {
            const _0xf77124 = _0x53ef29['changedTouches'][_0x15a6e3];
            if (_0xf77124['identifier'] === _0x146398) {
                _0x348dc3(_0xf77124['clientX'], _0xf77124['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x4033bb = _0x2ecc19 => {
        for (let _0x3bb6e9 = 0x0; _0x3bb6e9 < _0x2ecc19['changedTouches']['length']; _0x3bb6e9++) {
            const _0x526e89 = _0x2ecc19['changedTouches'][_0x3bb6e9];
            if (_0x526e89['identifier'] === _0x146398) {
                _0x146398 = null;
                _0x1d097a = ![];
                break;
            }
        }
    };
    _0x53f1dc['addEventListener']('touchend', _0x4033bb, { 'passive': !![] });
    _0x53f1dc['addEventListener']('touchcancel', _0x4033bb, { 'passive': !![] });
    const _0x1ce3ef = document['getElementById']('mob-sprint-btn');
    if (_0x1ce3ef) {
        _0x1ce3ef['addEventListener']('click', _0x5b5788 => {
            _0x5b5788['stopPropagation']();
            _0x2ea040 = !_0x2ea040;
            _0x1ce3ef['classList']['toggle']('active', _0x2ea040);
        });
    }
    const _0x33ff54 = document['getElementById']('mob-interact-btn');
    if (_0x33ff54) {
        _0x33ff54['addEventListener']('click', _0x1e021e => {
            _0x1e021e['stopPropagation']();
            if (!_0x3b2baf['isDead']) {
                const _0x10d7e3 = Date['now']();
                if (!window['_lastDoorSend'] || _0x10d7e3 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x10d7e3;
                    if (_0x1ab0de && _0x1ab0de['readyState'] === WebSocket['OPEN'])
                        _0x1ab0de['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x279a6e = document['getElementById']('mob-ability-btn');
    if (_0x279a6e) {
        _0x279a6e['addEventListener']('click', _0x389d68 => {
            _0x389d68['stopPropagation']();
            if (_0x3b2baf['isDead'])
                return;
            if (_0x4fb31f === 'Mayor') {
                if (_0x152869['has'](_0x5c6f01)) {
                    _0x540046('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x535320 = document['getElementById']('mayor-confirm-dialog');
                if (_0x535320)
                    _0x535320['style']['display'] = 'flex';
                return;
            }
            if (_0x1bc4e7['GAME_STATE'] === 'NIGHT') {
                if (!_0x1bc4e7['NIGHT_ABILITY_OPEN']) {
                    _0x540046('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x26a7e7 = document['getElementById']('ability-ui');
                if (_0x26a7e7) {
                    if (_0x26a7e7['style']['display'] === 'block') {
                        _0x26a7e7['style']['display'] = 'none';
                    } else {
                        _0x20ccd5();
                        _0x26a7e7['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1bc4e7['GAME_STATE'] === 'DAY_DISCUSS' || _0x1bc4e7['GAME_STATE'] === 'DAY_VOTE') {
                _0x540046('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x1fdb18 = document['getElementById']('mob-will-btn');
    const _0x46c8ee = document['getElementById']('will-ui');
    const _0x10b9d0 = document['getElementById']('will-input');
    const _0x38b4fa = document['getElementById']('close-will-btn');
    const _0x12afcd = () => {
        if (!_0x46c8ee)
            return;
        if (_0x46c8ee['style']['display'] === 'flex') {
            _0x46c8ee['style']['display'] = 'none';
            if (_0x1ab0de && _0x1ab0de['readyState'] === WebSocket['OPEN'] && _0x10b9d0) {
                _0x1ab0de['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x10b9d0['value']
                }));
            }
            if (_0x10b9d0)
                _0x10b9d0['blur']();
        } else {
            _0x46c8ee['style']['display'] = 'flex';
            if (_0x10b9d0)
                _0x10b9d0['focus']();
        }
    };
    if (_0x1fdb18)
        _0x1fdb18['addEventListener']('click', _0x97d374 => {
            _0x97d374['stopPropagation']();
            _0x12afcd();
        });
    if (_0x38b4fa)
        _0x38b4fa['addEventListener']('click', _0x4e89a3 => {
            _0x4e89a3['stopPropagation']();
            _0x12afcd();
        });
    const _0x19cd5d = document['getElementById']('mob-chat-btn');
    const _0x48ba35 = document['getElementById']('mobile-chat-overlay');
    const _0x1f1d09 = document['getElementById']('mobile-chat-input');
    const _0x56d0b2 = document['getElementById']('mobile-chat-send');
    const _0xe88a72 = document['getElementById']('mobile-chat-cancel');
    const _0x12e124 = () => {
        if (!_0x48ba35 || !_0x1f1d09)
            return;
        _0x48ba35['style']['display'] = 'flex';
        _0x1f1d09['value'] = '';
        _0x1f1d09['focus']();
    };
    const _0x24a995 = () => {
        if (!_0x48ba35 || !_0x1f1d09)
            return;
        _0x48ba35['style']['display'] = 'none';
        _0x1f1d09['blur']();
    };
    const _0x5e1820 = () => {
        if (!_0x1f1d09)
            return;
        const _0x14ff12 = _0x1f1d09['value']['trim']();
        if (_0x14ff12['length'] > 0x0 && _0x1ab0de && _0x1ab0de['readyState'] === WebSocket['OPEN']) {
            _0x1ab0de['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x14ff12
            }));
        }
        _0x1f1d09['value'] = '';
        _0x24a995();
    };
    if (_0x19cd5d)
        _0x19cd5d['addEventListener']('click', _0x30884a => {
            _0x30884a['stopPropagation']();
            _0x12e124();
        });
    if (_0x56d0b2)
        _0x56d0b2['addEventListener']('click', _0x42757b => {
            _0x42757b['stopPropagation']();
            _0x5e1820();
        });
    if (_0xe88a72)
        _0xe88a72['addEventListener']('click', _0x24375a => {
            _0x24375a['stopPropagation']();
            _0x24a995();
        });
    if (_0x1f1d09) {
        _0x1f1d09['addEventListener']('keydown', _0x52a5a0 => {
            if (_0x52a5a0['key'] === 'Enter') {
                _0x52a5a0['preventDefault']();
                _0x5e1820();
            } else if (_0x52a5a0['key'] === 'Escape') {
                _0x24a995();
            }
        });
    }
    const _0x595fe6 = document['getElementById']('mob-top-chat');
    if (_0x595fe6)
        _0x595fe6['addEventListener']('click', _0x5cc597 => {
            _0x5cc597['stopPropagation']();
            _0x12e124();
        });
    const _0x871a26 = document['getElementById']('mob-top-will');
    if (_0x871a26)
        _0x871a26['addEventListener']('click', _0x50ebf3 => {
            _0x50ebf3['stopPropagation']();
            _0x12afcd();
        });
    const _0x49090d = document['getElementById']('mob-top-roles');
    if (_0x49090d) {
        _0x49090d['addEventListener']('click', _0x1b4179 => {
            _0x1b4179['stopPropagation']();
            const _0x416250 = document['getElementById']('role-list-ui');
            const _0x40c4c5 = document['getElementById']('leaderboard-ui');
            if (_0x40c4c5)
                _0x40c4c5['style']['display'] = 'none';
            if (_0x416250)
                _0x416250['style']['display'] = _0x416250['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x3dd3ae = document['getElementById']('mob-top-players');
    if (_0x3dd3ae) {
        _0x3dd3ae['addEventListener']('click', _0x2cac59 => {
            _0x2cac59['stopPropagation']();
            const _0x1b1425 = document['getElementById']('leaderboard-ui');
            const _0x1272fa = document['getElementById']('role-list-ui');
            if (_0x1272fa)
                _0x1272fa['style']['display'] = 'none';
            if (_0x1b1425)
                _0x1b1425['style']['display'] = _0x1b1425['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x5d2fd0 = document['getElementById']('mob-top-help');
    if (_0x5d2fd0) {
        _0x5d2fd0['addEventListener']('click', _0x47d6bc => {
            _0x47d6bc['stopPropagation']();
            const _0x4a4be0 = document['getElementById']('guide-ui');
            if (_0x4a4be0)
                _0x4a4be0['style']['display'] = _0x4a4be0['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x94bd31) {
            _0x94bd31 = !![];
            _0x35caaa();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
