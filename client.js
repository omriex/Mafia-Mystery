document['addEventListener']('contextmenu', _0x13e9c9 => _0x13e9c9['preventDefault']());
const _0x225261 = {
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
let _0x3e7678 = '';
function _0x4bec54(_0x2ac43e, _0x280bfa) {
    const _0x589bae = document['getElementById']('role-list-ui');
    const _0x4022eb = document['getElementById']('role-list-items');
    if (!_0x589bae || !_0x4022eb)
        return;
    if (!_0x280bfa || _0x280bfa === 'off' || !_0x2ac43e || _0x2ac43e['length'] === 0x0) {
        _0x589bae['style']['display'] = 'none';
        return;
    }
    const _0x395914 = _0x280bfa + '|' + JSON['stringify'](_0x2ac43e);
    if (_0x395914 === _0x3e7678)
        return;
    _0x3e7678 = _0x395914;
    const _0xe5e523 = document['getElementById']('role-tooltip');
    if (_0xe5e523) {
        _0xe5e523['style']['visibility'] = 'hidden';
        _0xe5e523['style']['opacity'] = '0';
    }
    _0x589bae['style']['display'] = 'flex';
    _0x4022eb['innerHTML'] = '';
    _0x2ac43e['forEach'](_0x2777eb => {
        const _0x4bb2e4 = document['createElement']('div');
        _0x4bb2e4['className'] = 'role-list-entry';
        const _0x188604 = _0x2777eb['name']['includes']('Mafia') || _0x2777eb['name'] === 'Skinwalker';
        _0x4bb2e4['classList']['add'](_0x188604 ? 'mafia' : 'town');
        if (_0x280bfa === 'precise' && _0x2777eb['isDead']) {
            _0x4bb2e4['classList']['remove']('town', 'mafia');
            _0x4bb2e4['classList']['add']('dead');
            _0x4bb2e4['innerHTML'] = '<span>' + _0x2777eb['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x18df36 = _0x2777eb['count'] !== undefined && _0x2777eb['count'] !== null ? _0x2777eb['count'] + 'x\x20' : '';
            _0x4bb2e4['innerHTML'] = '<span>' + _0x18df36 + _0x2777eb['name'] + '</span>';
        }
        if (_0x280bfa === 'subalignments' && _0x225261[_0x2777eb['name']]) {
            _0x4bb2e4['style']['cursor'] = 'pointer';
            _0x4bb2e4['addEventListener']('mouseenter', () => {
                const _0x5de46d = document['getElementById']('role-tooltip');
                if (!_0x5de46d)
                    return;
                const _0x1f7ebb = _0x225261[_0x2777eb['name']]['join'](',\x20');
                _0x5de46d['innerHTML'] = '';
                const _0xa21fa0 = document['createElement']('span');
                _0xa21fa0['style']['color'] = '#ffcc00';
                _0xa21fa0['textContent'] = _0x2777eb['name'];
                _0x5de46d['appendChild'](_0xa21fa0);
                _0x5de46d['appendChild'](document['createElement']('br'));
                _0x5de46d['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x1f7ebb));
                const _0x49a94a = _0x4bb2e4['getBoundingClientRect']();
                _0x5de46d['style']['left'] = _0x49a94a['left'] - 0xeb + 'px';
                _0x5de46d['style']['top'] = _0x49a94a['top'] + 'px';
                _0x5de46d['style']['display'] = 'block';
                _0x5de46d['style']['visibility'] = 'visible';
                _0x5de46d['style']['opacity'] = '1';
            });
            _0x4bb2e4['addEventListener']('mouseleave', () => {
                const _0x5c99b9 = document['getElementById']('role-tooltip');
                if (_0x5c99b9) {
                    _0x5c99b9['style']['display'] = 'none';
                    _0x5c99b9['style']['visibility'] = 'hidden';
                    _0x5c99b9['style']['opacity'] = '0';
                }
            });
        }
        _0x4022eb['appendChild'](_0x4bb2e4);
    });
}
let _0x299444 = null;
let _0x24d029 = null;
const _0x22606b = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x3f654c = 'Player???';
let _0x1e06f4 = ![];
let _0x4ef53b = {};
let _0x15c275 = null;
let _0x452f54 = 0x0;
let _0x54833a = 0x0;
let _0x3f2184 = new Set();
let _0xa38a79 = ![];
let _0x572cba = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x1edffa = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x5daf7e = ![];
let _0x528b78 = null;
let _0x1bb292 = 0x0;
let _0x504dcd = 0x0;
let _0x23aaf7 = ![];
let _0x257c57 = ![];
let _0xf02424 = 0x0;
let _0x18330f = null;
let _0xb54c33 = ![];
let _0x2a2faf = 0x0;
let _0x3eb425 = 0x0;
const _0x3eee62 = ((() => {
    const _0x5a5c55 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x5d517e = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x13c8a2 = 0x320;
    const _0x2645f2 = {};
    const _0x5abe7d = {};
    let _0x35ba2b = null;
    let _0xb94faa = _0x5d517e === 0x0;
    let _0x341e14 = ![];
    for (const [_0x192582, _0x3497ae] of Object['entries'](_0x5a5c55)) {
        const _0xf46827 = new Audio(_0x3497ae);
        _0xf46827['loop'] = !![];
        _0xf46827['volume'] = 0x0;
        _0xf46827['preload'] = 'auto';
        _0x2645f2[_0x192582] = _0xf46827;
        _0x5abe7d[_0x192582] = null;
    }
    const _0x406558 = _0x3ba819 => Math['min'](0x1, Math['max'](0x0, _0x3ba819));
    function _0x5ec27e(_0x44a710) {
        if (_0x5abe7d[_0x44a710] !== null) {
            cancelAnimationFrame(_0x5abe7d[_0x44a710]);
            _0x5abe7d[_0x44a710] = null;
        }
    }
    function _0x2e31bc(_0x5148b3, _0x3f456e, _0x5e972f, _0x3dc63d, _0x2fafec) {
        _0x5ec27e(_0x5148b3);
        const _0x815cbd = _0x2645f2[_0x5148b3];
        const _0x1060f7 = performance['now']();
        const _0x6dec1e = _0x544451 => {
            const _0x1cd972 = _0x406558((_0x544451 - _0x1060f7) / _0x3dc63d);
            const _0x36b91b = _0x406558(_0x3f456e + (_0x5e972f - _0x3f456e) * _0x1cd972);
            _0x815cbd['volume'] = _0xb94faa ? 0x0 : _0x36b91b;
            if (_0x1cd972 < 0x1) {
                _0x5abe7d[_0x5148b3] = requestAnimationFrame(_0x6dec1e);
            } else {
                _0x5abe7d[_0x5148b3] = null;
                _0x815cbd['volume'] = _0xb94faa ? 0x0 : _0x406558(_0x5e972f);
                if (_0x2fafec)
                    _0x2fafec();
            }
        };
        _0x5abe7d[_0x5148b3] = requestAnimationFrame(_0x6dec1e);
    }
    function _0x11430f(_0x494fd3) {
        const _0x4839b8 = _0x494fd3['play']();
        if (_0x4839b8 && _0x4839b8['catch']) {
            _0x4839b8['catch'](() => {
                if (!_0x341e14) {
                    const _0x3199db = () => {
                        _0x341e14 = !![];
                        _0x494fd3['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x3199db);
                        document['removeEventListener']('keydown', _0x3199db);
                        document['removeEventListener']('touchstart', _0x3199db);
                    };
                    document['addEventListener']('click', _0x3199db, { 'once': !![] });
                    document['addEventListener']('keydown', _0x3199db, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x3199db, { 'once': !![] });
                }
            });
        }
    }
    function _0x2e475f(_0x2b6304) {
        if (!_0x5a5c55[_0x2b6304])
            return;
        if (_0x35ba2b === _0x2b6304)
            return;
        const _0x7d925d = _0x35ba2b;
        _0x35ba2b = _0x2b6304;
        const _0x3978d7 = _0x2645f2[_0x2b6304];
        _0x5ec27e(_0x2b6304);
        _0x3978d7['currentTime'] = 0x0;
        _0x3978d7['volume'] = 0x0;
        _0x11430f(_0x3978d7);
        _0x2e31bc(_0x2b6304, 0x0, _0x5d517e, _0x13c8a2);
        if (_0x7d925d && _0x2645f2[_0x7d925d]) {
            const _0x4b3099 = _0x7d925d;
            const _0xe7c168 = _0x2645f2[_0x4b3099];
            const _0x47f9de = _0x406558(_0xe7c168['volume']);
            _0x2e31bc(_0x4b3099, _0x47f9de, 0x0, _0x13c8a2, () => {
                _0xe7c168['pause']();
                _0xe7c168['currentTime'] = 0x0;
            });
        }
    }
    function _0x4d551a(_0xeb590e) {
        _0x5d517e = _0x406558(_0xeb590e);
        localStorage['setItem']('musicVolume', String(_0x5d517e));
        if (!_0xb94faa && _0x35ba2b && _0x5abe7d[_0x35ba2b] === null) {
            _0x2645f2[_0x35ba2b]['volume'] = _0x5d517e;
        }
    }
    function _0x23ac78() {
        return _0x5d517e;
    }
    function _0x5ac458(_0x440e3d) {
        _0xb94faa = _0x440e3d;
        for (const _0x5d5c2e of Object['keys'](_0x2645f2)) {
            if (_0x5abe7d[_0x5d5c2e] === null) {
                _0x2645f2[_0x5d5c2e]['volume'] = _0x440e3d || _0x5d5c2e !== _0x35ba2b ? 0x0 : _0x5d517e;
            }
        }
    }
    function _0x4def81() {
        return _0xb94faa;
    }
    function _0x1624b2(_0x1b87b8) {
        if (_0x1b87b8 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x1b87b8 === 'DAY_VOTE')
            return 'voting';
        if (_0x1b87b8 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x32c78a(_0x2ece8c) {
        _0x2e475f(_0x1624b2(_0x2ece8c));
    }
    function _0x4cb6a6(_0x1759c5) {
        _0x2e475f(_0x1759c5);
    }
    return {
        'play': _0x2e475f,
        'onStateChange': _0x32c78a,
        'onSoundEvent': _0x4cb6a6,
        'setVolume': _0x4d551a,
        'getVolume': _0x23ac78,
        'setMuted': _0x5ac458,
        'isMuted': _0x4def81
    };
})());
const _0x245c80 = ((() => {
    const _0x85e299 = 0x258;
    const _0x57b66c = 0xb4;
    const _0x49b531 = 0x708;
    const _0x2c13b7 = 0x140;
    const _0x18b722 = 0.18;
    const _0x20192d = 0.95;
    const _0x548d80 = new Audio('audio/heartbeat.mp3');
    _0x548d80['loop'] = ![];
    _0x548d80['preload'] = 'auto';
    _0x548d80['volume'] = 0x0;
    let _0x344372 = 0x0;
    let _0x3075c9 = Infinity;
    function _0x5a4cd6(_0x2583b9, _0x4d9987, _0x68fe0f) {
        return Math['min'](_0x68fe0f, Math['max'](_0x4d9987, _0x2583b9));
    }
    function _0x7d4ed(_0x4bfbda, _0x4c894d, _0xbc1a1d) {
        return _0x4bfbda + (_0x4c894d - _0x4bfbda) * _0xbc1a1d;
    }
    function _0x2d3c01(_0x4b5c1d) {
        if (_0x369081['GAME_STATE'] !== 'NIGHT' || _0x5d460f['isDead'] || _0x15c275 === 'Skinwalker') {
            _0x3075c9 = Infinity;
            return;
        }
        const _0xd2a291 = _0x5d460f['x'] + 22.5;
        const _0x244b15 = _0x5d460f['y'] + 22.5;
        let _0xfc9430 = Infinity;
        for (const _0x486348 in _0x4ef53b) {
            const _0x2ba70a = _0x4ef53b[_0x486348];
            if (!_0x2ba70a['isDark'] || _0x2ba70a['isDead'])
                continue;
            const _0x2e758d = _0x2ba70a['renderX'] + 22.5 - _0xd2a291;
            const _0x590c6e = _0x2ba70a['renderY'] + 22.5 - _0x244b15;
            const _0x19f288 = Math['sqrt'](_0x2e758d * _0x2e758d + _0x590c6e * _0x590c6e);
            if (_0x19f288 < _0xfc9430)
                _0xfc9430 = _0x19f288;
        }
        _0x3075c9 = _0xfc9430;
        if (_0xfc9430 > _0x85e299)
            return;
        const _0x347763 = 0x1 - _0x5a4cd6((_0xfc9430 - _0x57b66c) / (_0x85e299 - _0x57b66c), 0x0, 0x1);
        const _0x432edf = _0x7d4ed(_0x49b531, _0x2c13b7, _0x347763);
        const _0x175535 = _0x7d4ed(_0x18b722, _0x20192d, _0x347763);
        if (_0x4b5c1d >= _0x344372) {
            _0x548d80['currentTime'] = 0x0;
            _0x548d80['volume'] = _0x3eee62['isMuted']() ? 0x0 : _0x5a4cd6(_0x175535 * _0x3eee62['getVolume']() / 0.7, 0x0, 0x1);
            _0x548d80['play']()['catch'](() => {
            });
            _0x344372 = _0x4b5c1d + _0x432edf;
        }
    }
    return { 'tick': _0x2d3c01 };
})());
function _0x5a3125() {
    const _0x2398e1 = document['getElementById']('mob-ability-btn');
    if (!_0x2398e1)
        return;
    const _0x3de29d = _0x369081['GAME_STATE'] === 'NIGHT' && !_0x5d460f['isDead'];
    const _0x3823ed = _0x15c275 === 'Mayor' && !_0x3f2184['has'](_0x24d029) && !_0x5d460f['isDead'];
    if (_0x3de29d || _0x3823ed) {
        _0x2398e1['style']['display'] = 'flex';
    } else {
        _0x2398e1['style']['display'] = 'none';
    }
}
function _0x31ba00() {
    const _0x3ee010 = document['getElementById']('mobile-joystick-zone');
    const _0x35f9ff = document['getElementById']('mobile-top-bar');
    const _0x37cf8e = document['getElementById']('mobile-action-bar');
    if (!_0x3ee010 || !_0x35f9ff || !_0x37cf8e)
        return;
    if (!_0x384fcc && _0x1edffa) {
        _0x3ee010['style']['display'] = 'flex';
        _0x35f9ff['style']['display'] = 'flex';
        _0x37cf8e['style']['display'] = 'flex';
        _0x5a3125();
    } else {
        _0x3ee010['style']['display'] = 'none';
        _0x35f9ff['style']['display'] = 'none';
        _0x37cf8e['style']['display'] = 'none';
    }
}
const _0x5e2569 = document['getElementById']('gameCanvas');
const _0xe1644 = _0x5e2569['getContext']('2d', { 'alpha': ![] });
const _0x770b00 = 0x500;
const _0x339460 = 0x2d0;
const _0x369081 = {
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
        'width': _0x770b00,
        'height': _0x339460
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
const _0x5d460f = {
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
const _0x203248 = new Image();
const _0x1712f0 = new Image();
const _0x20a85d = new Image();
const _0x2e35c8 = new Image();
_0x2e35c8['src'] = 'assets/mayor\x20cosmetic.png';
const _0x9df8bc = [
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
const _0x255294 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x5871c9 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x5871c9 === 'body1.png' || _0x5871c9 === 'body1')
    _0x5871c9 = 'body01.png';
if (!_0x5871c9['endsWith']('.png'))
    _0x5871c9 += '.png';
let _0x28f9a7 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x28f9a7['endsWith']('.png'))
    _0x28f9a7 += '.png';
let _0x384fcc = !![];
let _0x101030 = null;
let _0x4a9210 = null;
let _0x5ed5c4 = 0x3c;
let _0x1eb116 = 0x2d;
const _0x5d78ad = {};
const _0x442272 = new Image();
_0x442272['src'] = 'assets/yanito932.png';
_0x5d78ad['assets/yanito932.png'] = _0x442272;
function _0x151d61(_0x17a731) {
    if (!_0x5d78ad[_0x17a731] || !_0x5d78ad[_0x17a731]['complete'] && _0x5d78ad[_0x17a731]['naturalWidth'] === 0x0 && _0x5d78ad[_0x17a731]['naturalHeight'] === 0x0) {
        const _0x43cbd1 = new Image();
        _0x43cbd1['src'] = _0x17a731;
        _0x5d78ad[_0x17a731] = _0x43cbd1;
    }
    return _0x5d78ad[_0x17a731];
}
function _0x5765fb(_0x3ec6a4, _0x56325b, _0x3827ff, _0x2b400c, _0x329fdb) {
    try {
        const _0x4221b2 = 'assets/' + (_0x56325b || 'body01.png');
        const _0x13da85 = _0x151d61(_0x4221b2);
        if (_0x13da85['complete'] && _0x13da85['naturalWidth'] > 0x0) {
            _0x3ec6a4['drawImage'](_0x13da85, -_0x2b400c / 0x2, -_0x329fdb / 0x2, _0x2b400c, _0x329fdb);
        }
        if (_0x3827ff === null || _0x3827ff === undefined)
            return;
        const _0x1a1a61 = 'assets/' + _0x3827ff;
        const _0x42267d = _0x151d61(_0x1a1a61);
        if (_0x42267d['complete'] && _0x42267d['naturalWidth'] > 0x0) {
            _0x3ec6a4['drawImage'](_0x42267d, -_0x2b400c / 0x2, -_0x329fdb / 0x2, _0x2b400c, _0x329fdb);
        }
    } catch (_0x4cfe58) {
    }
}
function _0x1c1b5f() {
    const _0x2a2fdf = document['getElementById']('body-skin-grid');
    const _0x175cb4 = document['getElementById']('eyes-skin-grid');
    if (!_0x2a2fdf || !_0x175cb4)
        return;
    _0x2a2fdf['innerHTML'] = '';
    _0x9df8bc['forEach'](_0x4c2ac2 => {
        const _0x1e9c36 = document['createElement']('button');
        _0x1e9c36['className'] = 'skin-btn' + (_0x4c2ac2 === _0x5871c9 ? '\x20selected' : '');
        const _0x43eb70 = document['createElement']('img');
        _0x43eb70['src'] = 'assets/' + _0x4c2ac2;
        _0x1e9c36['appendChild'](_0x43eb70);
        _0x1e9c36['onclick'] = () => {
            _0x5871c9 = _0x4c2ac2;
            localStorage['setItem']('selectedBody', _0x4c2ac2);
            _0x2a2fdf['querySelectorAll']('.skin-btn')['forEach'](_0x1d532b => _0x1d532b['classList']['remove']('selected'));
            _0x1e9c36['classList']['add']('selected');
        };
        _0x2a2fdf['appendChild'](_0x1e9c36);
    });
    _0x175cb4['innerHTML'] = '';
    _0x255294['forEach'](_0x46dc10 => {
        const _0xaa5c02 = document['createElement']('button');
        _0xaa5c02['className'] = 'skin-btn' + (_0x46dc10 === _0x28f9a7 ? '\x20selected' : '');
        const _0x4a93b9 = document['createElement']('img');
        _0x4a93b9['src'] = 'assets/' + _0x46dc10;
        _0xaa5c02['appendChild'](_0x4a93b9);
        _0xaa5c02['onclick'] = () => {
            _0x28f9a7 = _0x46dc10;
            localStorage['setItem']('selectedEyes', _0x46dc10);
            _0x175cb4['querySelectorAll']('.skin-btn')['forEach'](_0x446359 => _0x446359['classList']['remove']('selected'));
            _0xaa5c02['classList']['add']('selected');
        };
        _0x175cb4['appendChild'](_0xaa5c02);
    });
}
function _0x435e02(_0x51c940) {
    if (!_0x369081['MAP']['columns'] || !_0x369081['CAMERA']['width'])
        return;
    const _0x5d4162 = Math['max'](0x0, _0x369081['MAP']['columns'] * _0x369081['MAP']['tileSize'] - _0x369081['CAMERA']['width']);
    const _0x458267 = Math['max'](0x0, _0x369081['MAP']['rows'] * _0x369081['MAP']['tileSize'] - _0x369081['CAMERA']['height']);
    if (_0x101030 === null) {
        _0x101030 = _0x5d4162 / 0x2;
        _0x4a9210 = _0x458267 / 0x2;
    }
    _0x101030 += _0x5ed5c4 * _0x51c940;
    _0x4a9210 += _0x1eb116 * _0x51c940;
    if (_0x101030 <= 0x0) {
        _0x101030 = 0x0;
        _0x5ed5c4 = Math['abs'](_0x5ed5c4);
    } else if (_0x101030 >= _0x5d4162) {
        _0x101030 = _0x5d4162;
        _0x5ed5c4 = -Math['abs'](_0x5ed5c4);
    }
    if (_0x4a9210 <= 0x0) {
        _0x4a9210 = 0x0;
        _0x1eb116 = Math['abs'](_0x1eb116);
    } else if (_0x4a9210 >= _0x458267) {
        _0x4a9210 = _0x458267;
        _0x1eb116 = -Math['abs'](_0x1eb116);
    }
    _0x369081['CAMERA']['x'] = _0x101030;
    _0x369081['CAMERA']['y'] = _0x4a9210;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x1fc7df = document['getElementById']('play-btn');
    const _0x3f684b = document['getElementById']('username-input');
    const _0x4e7c56 = localStorage['getItem']('playerName');
    if (_0x4e7c56 && _0x3f684b) {
        _0x3f684b['value'] = _0x4e7c56;
    }
    const _0x4ebc4b = () => {
        _0x3eee62['play']('wait');
        document['removeEventListener']('click', _0x4ebc4b);
        document['removeEventListener']('keydown', _0x4ebc4b);
        document['removeEventListener']('touchstart', _0x4ebc4b);
    };
    document['addEventListener']('click', _0x4ebc4b, { 'once': !![] });
    document['addEventListener']('keydown', _0x4ebc4b, { 'once': !![] });
    document['addEventListener']('touchstart', _0x4ebc4b, { 'once': !![] });
    if (_0x1fc7df) {
        _0x1fc7df['addEventListener']('click', () => {
            const _0x491117 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x424f31 = window['_FB'] && window['_FB']['_userData'];
            let _0x3bbb8c = !![];
            if (_0x491117 && _0x424f31 && _0x424f31['username']) {
                _0x3f654c = _0x424f31['username'];
                _0x3bbb8c = ![];
            } else {
                const _0x3ba23d = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x3f654c = 'user' + _0x3ba23d;
                _0x3bbb8c = !![];
            }
            const _0x496148 = _0x3bbb8c ? 'body01.png' : _0x5871c9;
            const _0x577e72 = _0x3bbb8c ? 'eyes4.png' : _0x28f9a7;
            const _0x135ada = !_0x3bbb8c && _0x424f31 && _0x424f31['photoURL'] ? _0x424f31['photoURL'] : '';
            const _0x2f784d = !_0x3bbb8c && _0x491117 ? _0x491117['uid'] : '';
            localStorage['setItem']('playerName', _0x3f654c);
            _0x384fcc = ![];
            _0x369081['CAMERA']['x'] = null;
            _0x369081['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x78a7b = document['getElementById']('chat-log-wrap');
            if (_0x78a7b)
                _0x78a7b['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x5f2f31 = document['getElementById']('controls-hint');
            if (_0x5f2f31 && !_0x1edffa)
                _0x5f2f31['style']['display'] = 'block';
            _0x31ba00();
            if (_0x1edffa) {
                const _0x49a162 = document['getElementById']('leaderboard-list');
                const _0x2e1d53 = document['getElementById']('leaderboard-toggle');
                if (_0x49a162) {
                    _0x49a162['style']['display'] = 'none';
                    if (_0x2e1d53)
                        _0x2e1d53['style']['transform'] = 'rotate(180deg)';
                }
                const _0x480981 = document['getElementById']('role-list-items');
                const _0x3addc5 = document['getElementById']('role-list-toggle');
                if (_0x480981) {
                    _0x480981['style']['display'] = 'none';
                    if (_0x3addc5)
                        _0x3addc5['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x101fc1 = !_0x3bbb8c && _0x424f31 ? {
                'townWins': _0x424f31['townWins'] || 0x0,
                'mafiaWins': _0x424f31['mafiaWins'] || 0x0,
                'deaths': _0x424f31['deaths'] || 0x0,
                'townLosses': _0x424f31['townLosses'] || 0x0,
                'mafiaLosses': _0x424f31['mafiaLosses'] || 0x0
            } : null;
            const _0x350ec9 = JSON['stringify']({
                'type': 'join',
                'name': _0x3f654c,
                'token': _0x22606b,
                'body': _0x496148,
                'eyes': _0x577e72,
                'isGuest': _0x3bbb8c,
                'uid': _0x2f784d,
                'photoURL': _0x135ada,
                'accountStats': _0x101fc1
            });
            if (_0x299444 && _0x299444['readyState'] === WebSocket['OPEN']) {
                _0x299444['send'](_0x350ec9);
            } else if (!_0x299444 || _0x299444['readyState'] === WebSocket['CLOSED'] || _0x299444['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x350ec9;
                _0x3a9472();
            }
        });
    }
    _0x1c1b5f();
    _0x3a9472();
    _0x180468();
    _0x1fc858();
    _0x230501();
    _0x362568();
});
const _0x466c90 = [
    {
        'name': 'Skinwalker',
        'faction': 'Mafia',
        'color': '#ff5555',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>\x20is\x20a\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20role\x20whose\x20purpose\x20is\x20to\x20offer\x20high\x20versability\x20to\x20the\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20while\x20also\x20suppressing\x20strong\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20members.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20pick\x20an\x20alive\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20to\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>transform</span>\x20into,\x20and\x20a\x20person\x20to\x20use\x20it\x27s\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>ability</span>\x20on.\x20You\x20are\x20unable\x20to\x20use\x20a\x20role\x27s\x20ability\x20on\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>yourself</span>,\x20and\x20also\x20unable\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>shoot</span>\x20players\x20as\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>.',
            'Additionally,\x20when\x20you\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>transform</span>\x20into\x20a\x20role,\x20any\x20player\x20with\x20that\x20role\x20will\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>fail</span>\x20to\x20use\x20their\x20ability,\x20letting\x20you\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>prevent</span>\x20strong\x20roles\x20from\x20working\x20but\x20also\x20letting\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20figure\x20out\x20what\x20role\x20you\x20transformed\x20into.'
        ]
    },
    {
        'name': 'Mayor',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Mayor</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20whose\x20purpose\x20is\x20to\x20control\x20discussions\x20and\x20voting\x20while\x20also\x20letting\x20you\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>hard\x20clear</span>\x20yourself.',
            'At\x20any\x20point\x20during\x20the\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>day</span>,\x20you\x20are\x20able\x20to\x20publicly\x20<span\x20style=\x22color:#cc88ff;font-weight:bold;\x22>reveal</span>\x20yourself\x20as\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Mayor</span>.\x20Upon\x20revealing,\x20your\x20vote\x20will\x20count\x20as\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>two\x20votes</span>\x20for\x20the\x20rest\x20of\x20the\x20game,\x20and\x20you\x20will\x20also\x20get\x20a\x20unique\x20<span\x20style=\x22color:#cc88ff;font-weight:bold;\x22>top\x20hat\x20and\x20monocle</span>.'
        ]
    },
    {
        'name': 'Escort',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Escort</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblock</span>\x20suspicious\x20individuals,\x20giving\x20players\x20the\x20ability\x20to\x20restrict\x20strong\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20roles\x20and\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20trolls.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>\x20you\x20may\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblock</span>\x20one\x20player.\x20Roleblocked\x20players\x20will\x20still\x20be\x20able\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>visit\x20and\x20kill</span>\x20if\x20they\x27re\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>,\x20as\x20roleblocking\x20specifically\x20prevents\x20their\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>role\x20ability</span>,\x20like\x20transforming\x20as\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>,\x20investigating\x20as\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Investigator</span>,\x20shooting\x20as\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20etc.'
        ]
    },
    {
        'name': 'Tracker',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Tracker</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20who\x20is\x20able\x20to\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>track</span>\x20players\x20during\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>.',
            'You\x20get\x20to\x20pick\x20one\x20player\x20per\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>.\x20You\x20will\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>track</span>\x20them\x20and\x20find\x20out\x20who\x20they\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>visit</span>\x20(aka\x20who\x20they\x20go\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>kill</span>\x20if\x20they\x27re\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>)\x20OR\x20who\x20they\x20use\x20their\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>ability</span>\x20on.'
        ]
    },
    {
        'name': 'Celebrity',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Celebrity</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20whose\x20purpose\x20is\x20to\x20give\x20the\x20rest\x20of\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20a\x20hint\x20upon\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>death</span>.',
            'When\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Celebrity</span>\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>dies</span>,\x20a\x20random\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>letter</span>\x20of\x20their\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>killer</span>\x20will\x20be\x20revealed.\x20Note\x20that\x20the\x20killer\x20doesn\x27t\x20have\x20to\x20be\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>!',
            'This\x20will\x20fail\x20if\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Celebrity</span>\x20is\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblocked</span>.'
        ]
    },
    {
        'name': 'Archer',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Archer</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20member\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>protect</span>\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20and\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>injure</span>\x20any\x20evil\x20visitors.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20choose\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>watch\x20over</span>\x20a\x20player.\x20If\x20the\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20visits\x20them,\x20they\x20will\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>fail\x20to\x20visit</span>\x20and\x20be\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>injured</span>.\x20If\x20an\x20already\x20injured\x20player\x20is\x20injured\x20again,\x20they\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>die</span>.'
        ]
    },
    {
        'name': 'Vigilante',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>shoot</span>\x20highly\x20suspicious\x20players.',
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
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Doctor</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>protect</span>\x20important\x20town\x20members\x20from\x20being\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>attacked</span>.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>protect</span>\x20a\x20player.\x20This\x20will\x20prevent\x20them\x20from\x20being\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>visited\x20by\x20the\x20Mafia</span>.',
            'They\x20can\x20also\x20protect\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20who\x20is\x20currently\x20feeling\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>guilty</span>\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>get\x20rid\x20of\x20their\x20guilt</span>\x20and\x20prevent\x20them\x20from\x20dying\x20from\x20it.'
        ]
    },
    {
        'name': 'Investigator',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Investigator</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>gather\x20information</span>\x20about\x20players\x27\x20possible\x20roles.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>investigate</span>\x20a\x20player.\x20You\x20will\x20get\x20a\x20list\x20of\x20half\x20of\x20the\x20roles\x20in\x20the\x20game\x20at\x20the\x20end\x20of\x20the\x20night,\x20one\x20of\x20which\x20being\x20their\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>real\x20role</span>.',
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Investigator</span>\x20is\x20the\x20only\x20role\x20that\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>can\x27t\x20be\x20fooled</span>\x20by\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>,\x20as\x20any\x20other\x20future\x20roles\x20with\x20role\x20learning\x20capabilities\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>WILL\x20be\x20fooled</span>\x20by\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>.'
        ]
    }
];
let _0x51a191 = 0x0;
function _0x543030() {
    const _0x52b8f2 = document['getElementById']('role-index-tabs');
    const _0x318b0f = document['getElementById']('role-index-body');
    if (!_0x52b8f2 || !_0x318b0f)
        return;
    _0x52b8f2['innerHTML'] = '';
    _0x466c90['forEach']((_0x92352c, _0x46ace8) => {
        const _0x2f71ec = document['createElement']('button');
        _0x2f71ec['className'] = 'role-index-tab-btn' + (_0x92352c['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x46ace8 === _0x51a191 ? '\x20active' : '');
        _0x2f71ec['textContent'] = _0x92352c['name'];
        _0x2f71ec['addEventListener']('click', () => {
            _0x51a191 = _0x46ace8;
            _0x543030();
        });
        _0x52b8f2['appendChild'](_0x2f71ec);
    });
    const _0x1df210 = _0x466c90[_0x51a191] || _0x466c90[0x0];
    _0x318b0f['innerHTML'] = '';
    const _0x29b141 = document['createElement']('div');
    _0x29b141['className'] = 'role-index-title-row';
    const _0xc336a6 = document['createElement']('span');
    _0xc336a6['className'] = 'role-index-name\x20' + (_0x1df210['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0xc336a6['textContent'] = _0x1df210['name'];
    _0x29b141['appendChild'](_0xc336a6);
    const _0x5965d2 = document['createElement']('span');
    _0x5965d2['className'] = 'role-index-faction-badge\x20' + (_0x1df210['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x5965d2['textContent'] = _0x1df210['faction'];
    _0x29b141['appendChild'](_0x5965d2);
    _0x318b0f['appendChild'](_0x29b141);
    _0x1df210['paragraphs']['forEach'](_0x2b8b2f => {
        const _0x27693b = document['createElement']('p');
        _0x27693b['className'] = 'role-index-desc-paragraph';
        _0x27693b['innerHTML'] = _0x2b8b2f;
        _0x318b0f['appendChild'](_0x27693b);
    });
}
function _0x362568() {
    const _0x3cd396 = document['getElementById']('role-index-btn');
    const _0x26905a = document['getElementById']('role-index-modal');
    const _0x4fdb82 = document['getElementById']('close-role-index-btn');
    const _0x882ebc = document['getElementById']('mob-top-index');
    if (_0x3cd396 && _0x26905a) {
        _0x3cd396['addEventListener']('click', _0x4831b7 => {
            _0x4831b7['stopPropagation']();
            if (_0x26905a['style']['display'] === 'none' || !_0x26905a['style']['display']) {
                _0x543030();
                _0x26905a['style']['display'] = 'flex';
            } else {
                _0x26905a['style']['display'] = 'none';
            }
        });
    }
    if (_0x4fdb82 && _0x26905a) {
        _0x4fdb82['addEventListener']('click', _0x2ee5ff => {
            _0x2ee5ff['stopPropagation']();
            _0x26905a['style']['display'] = 'none';
        });
    }
    if (_0x882ebc && _0x26905a) {
        _0x882ebc['addEventListener']('click', _0x1329fe => {
            _0x1329fe['stopPropagation']();
            if (_0x26905a['style']['display'] === 'none' || !_0x26905a['style']['display']) {
                _0x543030();
                _0x26905a['style']['display'] = 'flex';
            } else {
                _0x26905a['style']['display'] = 'none';
            }
        });
    }
}
function _0x1fc858() {
    const _0x77ffd6 = document['getElementById']('settings-btn');
    const _0xaff1ea = document['getElementById']('settings-panel');
    const _0x214543 = document['getElementById']('close-settings-btn');
    const _0x3cf151 = document['getElementById']('setting-mouse-relative');
    if (_0x3cf151) {
        _0x3cf151['checked'] = _0x572cba;
        _0x3cf151['addEventListener']('change', () => {
            _0x572cba = _0x3cf151['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x572cba ? 'true' : 'false');
        });
    }
    const _0x524e29 = document['getElementById']('setting-music-volume');
    const _0x1fd202 = document['getElementById']('setting-music-volume-display');
    function _0x28a875(_0x1e9af0) {
        const _0x3cec51 = (_0x1e9af0['value'] - _0x1e9af0['min']) / (_0x1e9af0['max'] - _0x1e9af0['min']) * 0x64;
        _0x1e9af0['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x3cec51 + '%,\x20#444\x20' + _0x3cec51 + '%)';
    }
    if (_0x524e29) {
        const _0x28a5a8 = _0x3eee62['getVolume']();
        const _0x34dcd5 = Math['round'](_0x28a5a8 * 0x64);
        _0x524e29['value'] = _0x34dcd5;
        if (_0x1fd202)
            _0x1fd202['textContent'] = _0x34dcd5 + '%';
        _0x28a875(_0x524e29);
        _0x524e29['addEventListener']('input', () => {
            const _0x151cec = parseInt(_0x524e29['value'], 0xa);
            if (_0x1fd202)
                _0x1fd202['textContent'] = _0x151cec + '%';
            _0x28a875(_0x524e29);
            _0x3eee62['setVolume'](_0x151cec / 0x64);
            _0x3eee62['setMuted'](_0x151cec === 0x0);
        });
    }
    if (_0x77ffd6 && _0xaff1ea) {
        _0x77ffd6['addEventListener']('click', _0x1f7024 => {
            _0x1f7024['stopPropagation']();
            _0xaff1ea['style']['display'] = _0xaff1ea['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x214543 && _0xaff1ea) {
        _0x214543['addEventListener']('click', () => {
            _0xaff1ea['style']['display'] = 'none';
        });
    }
    const _0x21826a = document['getElementById']('mayor-confirm-yes');
    const _0x1bdf7d = document['getElementById']('mayor-confirm-no');
    const _0x536303 = document['getElementById']('mayor-confirm-dialog');
    if (_0x21826a && _0x536303) {
        _0x21826a['addEventListener']('click', () => {
            if (_0x299444 && _0x299444['readyState'] === WebSocket['OPEN']) {
                _0x299444['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x536303['style']['display'] = 'none';
        });
    }
    if (_0x1bdf7d && _0x536303) {
        _0x1bdf7d['addEventListener']('click', () => {
            _0x536303['style']['display'] = 'none';
        });
    }
    const _0x16e3b4 = document['getElementById']('close-ability-btn');
    if (_0x16e3b4) {
        _0x16e3b4['addEventListener']('click', () => {
            const _0x73aa80 = document['getElementById']('ability-ui');
            if (_0x73aa80)
                _0x73aa80['style']['display'] = 'none';
        });
    }
}
let _0x12f31c = '';
function _0x1e681e(_0x3a5b12) {
    const _0x55cd06 = document['getElementById']('vote-tally-panel');
    const _0x1851c8 = document['getElementById']('vote-tally-list');
    if (!_0x55cd06 || !_0x1851c8)
        return;
    if (_0x3a5b12['state'] !== 'DAY_VOTE') {
        _0x55cd06['style']['display'] = 'none';
        _0x12f31c = '';
        return;
    }
    _0x55cd06['style']['display'] = 'block';
    const _0x53c44a = {};
    for (const _0x11654a in _0x4ef53b) {
        if (!_0x4ef53b[_0x11654a]['isDead'])
            _0x53c44a[_0x11654a] = 0x0;
    }
    if (_0x24d029 && !_0x5d460f['isDead'])
        _0x53c44a[_0x24d029] = 0x0;
    const _0x59a01b = _0x3a5b12['votes'] || {};
    for (const _0x3adca4 in _0x59a01b) {
        const _0x3edc2d = _0x59a01b[_0x3adca4];
        const _0x4b5027 = _0x3a5b12['mayorRevealed'] && _0x3a5b12['mayorRevealed'][_0x3adca4] ? 0x2 : 0x1;
        _0x53c44a[_0x3edc2d] = (_0x53c44a[_0x3edc2d] || 0x0) + _0x4b5027;
    }
    let _0x3baf20 = 0x0;
    const _0xcc3d95 = _0x3a5b12['skips'] || {};
    for (const _0x273838 in _0xcc3d95) {
        _0x3baf20 += Number(_0xcc3d95[_0x273838]) || 0x1;
    }
    const _0x32ae3b = JSON['stringify'](_0x53c44a) + '_' + _0x3baf20 + '_' + _0x5d460f['isDead'];
    if (_0x32ae3b === _0x12f31c)
        return;
    _0x12f31c = _0x32ae3b;
    _0x1851c8['innerHTML'] = '';
    for (const _0x6c25bc in _0x53c44a) {
        const _0x2d54c5 = parseInt(_0x6c25bc);
        const _0x2a2cfe = _0x2d54c5 === _0x24d029 ? _0x3f654c : _0x4ef53b[_0x6c25bc] ? _0x4ef53b[_0x6c25bc]['name'] : 'Player\x20' + _0x6c25bc;
        const _0x411be5 = document['createElement']('div');
        _0x411be5['className'] = 'vote-tally-entry';
        const _0x394239 = document['createElement']('span');
        _0x394239['textContent'] = _0x2a2cfe;
        const _0x11d330 = document['createElement']('span');
        _0x11d330['className'] = 'vote-count';
        _0x11d330['textContent'] = _0x53c44a[_0x6c25bc] + '\x20vote' + (_0x53c44a[_0x6c25bc] === 0x1 ? '' : 's');
        _0x411be5['appendChild'](_0x394239);
        _0x411be5['appendChild'](_0x11d330);
        if (_0x2d54c5 !== _0x24d029 && !_0x5d460f['isDead']) {
            _0x411be5['style']['cursor'] = 'pointer';
            _0x411be5['title'] = 'Vote\x20for\x20' + _0x2a2cfe;
            _0x411be5['addEventListener']('click', _0x54095b => {
                _0x54095b['stopPropagation']();
                if (_0x299444 && _0x299444['readyState'] === WebSocket['OPEN']) {
                    _0x299444['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x2a2cfe
                    }));
                }
            });
        }
        _0x1851c8['appendChild'](_0x411be5);
    }
    const _0xe44e2c = document['createElement']('div');
    _0xe44e2c['className'] = 'vote-tally-skip';
    _0xe44e2c['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x3baf20 + '</span>';
    if (!_0x5d460f['isDead']) {
        _0xe44e2c['style']['cursor'] = 'pointer';
        _0xe44e2c['title'] = 'Click\x20to\x20skip\x20vote';
        _0xe44e2c['addEventListener']('click', _0x18ab45 => {
            _0x18ab45['stopPropagation']();
            if (_0x299444 && _0x299444['readyState'] === WebSocket['OPEN']) {
                _0x299444['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x1851c8['appendChild'](_0xe44e2c);
}
let _0x32c02c = null;
let _0x1238a3 = null;
let _0x26be5 = null;
function _0xa6e868() {
    if (_0x299444 && _0x299444['readyState'] === WebSocket['OPEN']) {
        _0x299444['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x32c02c,
            'abilityTarget': _0x1238a3,
            'killTarget': _0x26be5
        }));
    }
}
function _0x14b9ff() {
    const _0x243f44 = document['getElementById']('ability-ui-body');
    if (!_0x243f44)
        return;
    _0x243f44['innerHTML'] = '';
    if (_0x15c275 === 'Celebrity' || _0x15c275 === 'Mayor') {
        const _0x4c1262 = document['createElement']('div');
        _0x4c1262['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x4c1262['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x243f44['appendChild'](_0x4c1262);
        return;
    }
    if (_0x15c275 === 'Skinwalker') {
        const _0x57dd31 = document['createElement']('div');
        _0x57dd31['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x57dd31['innerText'] = 'Transform\x20into:';
        _0x243f44['appendChild'](_0x57dd31);
        const _0x136332 = document['createElement']('div');
        _0x136332['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x20cece = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x15d5b1 = _0x4e40d8 => {
            if (_0x369081['ROLES_IN_GAME'] && Array['isArray'](_0x369081['ROLES_IN_GAME'])) {
                return _0x369081['ROLES_IN_GAME']['includes'](_0x4e40d8);
            }
            if (_0x369081['ROLE_LIST_RAW'] && _0x369081['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x369081['ROLE_LIST_RAW']['some'](_0x9e53da => _0x9e53da['name'] === _0x4e40d8 && !_0x9e53da['isDead']);
            }
            return ![];
        };
        const _0x552971 = [
            'None',
            ..._0x20cece['filter'](_0x15d5b1)
        ];
        _0x552971['forEach'](_0x3f50ec => {
            const _0x54fa34 = document['createElement']('button');
            _0x54fa34['className'] = 'layer-btn';
            _0x54fa34['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x54fa34['innerText'] = _0x3f50ec;
            const _0x5808ae = _0x3f50ec === 'None' && !_0x32c02c || _0x32c02c === _0x3f50ec;
            if (_0x5808ae)
                _0x54fa34['classList']['add']('active');
            const _0x4f4e84 = _0x3f50ec !== 'None' && _0x369081['SKINWALKER_LAST_ROLE'] && _0x369081['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x3f50ec['toLowerCase']();
            if (_0x4f4e84) {
                _0x54fa34['style']['opacity'] = '0.45';
                _0x54fa34['style']['cursor'] = 'not-allowed';
                _0x54fa34['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x54fa34['onclick'] = () => {
                    _0xbd72db('You\x20cannot\x20transform\x20into\x20' + _0x3f50ec + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x54fa34['onclick'] = () => {
                    _0x32c02c = _0x3f50ec === 'None' ? null : _0x3f50ec;
                    _0xa6e868();
                    _0x14b9ff();
                };
            }
            _0x136332['appendChild'](_0x54fa34);
        });
        _0x243f44['appendChild'](_0x136332);
        if (_0x15d5b1('Vigilante')) {
            const _0x55e248 = document['createElement']('div');
            _0x55e248['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x55e248['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x243f44['appendChild'](_0x55e248);
        }
        if (_0x32c02c === 'Vigilante') {
            const _0x513097 = document['createElement']('div');
            _0x513097['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x513097['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x243f44['appendChild'](_0x513097);
        } else if (_0x32c02c && _0x32c02c !== 'Celebrity') {
            const _0x20be1b = document['createElement']('div');
            _0x20be1b['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x20be1b['innerText'] = 'Use\x20' + _0x32c02c + '\x20ability\x20on:';
            _0x243f44['appendChild'](_0x20be1b);
            const _0x11f013 = document['createElement']('div');
            _0x11f013['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x4750f3 = document['createElement']('button');
            _0x4750f3['className'] = 'layer-btn';
            _0x4750f3['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x4750f3['innerText'] = 'No\x20one';
            if (!_0x1238a3)
                _0x4750f3['classList']['add']('active');
            _0x4750f3['onclick'] = () => {
                _0x1238a3 = null;
                _0xa6e868();
                _0x14b9ff();
            };
            _0x11f013['appendChild'](_0x4750f3);
            for (const _0x4373f5 in _0x4ef53b) {
                const _0x1b6f61 = _0x4ef53b[_0x4373f5];
                if (_0x1b6f61['isDead'])
                    continue;
                const _0x1541c0 = document['createElement']('button');
                _0x1541c0['className'] = 'layer-btn';
                _0x1541c0['innerText'] = _0x1b6f61['name'];
                if (_0x1238a3 === parseInt(_0x4373f5))
                    _0x1541c0['classList']['add']('active');
                _0x1541c0['onclick'] = () => {
                    _0x1238a3 = parseInt(_0x4373f5);
                    _0xa6e868();
                    _0x14b9ff();
                };
                _0x11f013['appendChild'](_0x1541c0);
            }
            _0x243f44['appendChild'](_0x11f013);
        }
        const _0x169a31 = document['createElement']('div');
        _0x169a31['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x169a31['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x243f44['appendChild'](_0x169a31);
        const _0x59961b = document['createElement']('div');
        _0x59961b['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x49879b = document['createElement']('button');
        _0x49879b['className'] = 'layer-btn';
        _0x49879b['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x49879b['innerText'] = 'No\x20one';
        if (!_0x26be5 && !_0x369081['CURRENT_TARGET'])
            _0x49879b['classList']['add']('active');
        _0x49879b['onclick'] = () => {
            _0x26be5 = null;
            _0x369081['CURRENT_TARGET'] = null;
            _0xa6e868();
            _0x14b9ff();
        };
        _0x59961b['appendChild'](_0x49879b);
        for (const _0x30dd05 in _0x4ef53b) {
            const _0x826edf = _0x4ef53b[_0x30dd05];
            if (_0x826edf['isDead'])
                continue;
            const _0x1e1240 = document['createElement']('button');
            _0x1e1240['className'] = 'layer-btn';
            _0x1e1240['innerText'] = _0x826edf['name'];
            if (_0x26be5 === parseInt(_0x30dd05) || _0x369081['CURRENT_TARGET'] === parseInt(_0x30dd05))
                _0x1e1240['classList']['add']('active');
            _0x1e1240['onclick'] = () => {
                _0x26be5 = parseInt(_0x30dd05);
                _0x369081['CURRENT_TARGET'] = parseInt(_0x30dd05);
                _0xa6e868();
                _0x14b9ff();
            };
            _0x59961b['appendChild'](_0x1e1240);
        }
        _0x243f44['appendChild'](_0x59961b);
        return;
    }
    let _0x3ad177 = '';
    let _0x512119 = ![];
    if (_0x15c275 === 'Doctor') {
        _0x3ad177 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x512119 = !![];
    } else if (_0x15c275 === 'Investigator') {
        _0x3ad177 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x15c275 === 'Tracker') {
        _0x3ad177 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x15c275 === 'Archer') {
        _0x3ad177 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x15c275 === 'Escort') {
        _0x3ad177 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x15c275 === 'Vigilante') {
        _0x3ad177 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x4d6c92 = document['createElement']('div');
    _0x4d6c92['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x4d6c92['innerText'] = _0x3ad177;
    _0x243f44['appendChild'](_0x4d6c92);
    const _0x3bf2ae = document['createElement']('div');
    _0x3bf2ae['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x2d52b6 = document['createElement']('button');
    _0x2d52b6['className'] = 'layer-btn';
    _0x2d52b6['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x2d52b6['innerText'] = 'No\x20one';
    if (_0x369081['CURRENT_TARGET'] === null)
        _0x2d52b6['classList']['add']('active');
    _0x2d52b6['onclick'] = () => {
        _0x369081['CURRENT_TARGET'] = null;
        if (_0x299444 && _0x299444['readyState'] === WebSocket['OPEN']) {
            _0x299444['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x14b9ff();
    };
    _0x3bf2ae['appendChild'](_0x2d52b6);
    for (const _0x1dc8dd in _0x4ef53b) {
        const _0x3a3194 = _0x4ef53b[_0x1dc8dd];
        if (_0x3a3194['isDead'])
            continue;
        const _0x5a9e4d = document['createElement']('button');
        _0x5a9e4d['className'] = 'layer-btn';
        _0x5a9e4d['innerText'] = _0x3a3194['name'];
        if (_0x369081['CURRENT_TARGET'] === parseInt(_0x1dc8dd))
            _0x5a9e4d['classList']['add']('active');
        _0x5a9e4d['onclick'] = () => {
            _0x369081['CURRENT_TARGET'] = parseInt(_0x1dc8dd);
            if (_0x299444 && _0x299444['readyState'] === WebSocket['OPEN']) {
                _0x299444['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x1dc8dd)
                }));
            }
            _0x14b9ff();
        };
        _0x3bf2ae['appendChild'](_0x5a9e4d);
    }
    if (_0x512119 && !_0x5d460f['isDead']) {
        const _0x2fae4a = document['createElement']('button');
        _0x2fae4a['className'] = 'layer-btn';
        _0x2fae4a['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x2fae4a['innerText'] = _0x3f654c + '\x20(Self)';
        if (_0x369081['CURRENT_TARGET'] === _0x24d029)
            _0x2fae4a['classList']['add']('active');
        _0x2fae4a['onclick'] = () => {
            _0x369081['CURRENT_TARGET'] = _0x24d029;
            if (_0x299444 && _0x299444['readyState'] === WebSocket['OPEN']) {
                _0x299444['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x24d029
                }));
            }
            _0x14b9ff();
        };
        _0x3bf2ae['appendChild'](_0x2fae4a);
    }
    _0x243f44['appendChild'](_0x3bf2ae);
}
function _0x3a9472() {
    if (_0x299444 && (_0x299444['readyState'] === WebSocket['OPEN'] || _0x299444['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0xbbbf18 = new URLSearchParams();
    if (_0x22606b)
        _0xbbbf18['set']('token', _0x22606b);
    _0xbbbf18['set']('ngrok-skip-browser-warning', 'true');
    const _0x4531e6 = 'wss://this-studying-motherboard-emissions.trycloudflare.com';
    const _0x55d144 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x4531e6;
    const _0x32200e = _0x55d144 + '/?' + _0xbbbf18['toString']();
    _0x299444 = new WebSocket(_0x32200e);
    _0x299444['onopen'] = function () {
        if (!_0x384fcc && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x2dab33 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x5d3012 = window['_FB'] && window['_FB']['_userData'];
                const _0x526a83 = !(_0x2dab33 && _0x5d3012 && _0x5d3012['username']);
                const _0x1fe6db = _0x526a83 ? 'body01.png' : _0x5871c9;
                const _0x2c072f = _0x526a83 ? 'eyes4.png' : _0x28f9a7;
                const _0x82a331 = !_0x526a83 && _0x5d3012 && _0x5d3012['photoURL'] ? _0x5d3012['photoURL'] : '';
                const _0xb1a347 = !_0x526a83 && _0x2dab33 ? _0x2dab33['uid'] : '';
                const _0x153afe = !_0x526a83 && _0x5d3012 ? {
                    'townWins': _0x5d3012['townWins'] || 0x0,
                    'mafiaWins': _0x5d3012['mafiaWins'] || 0x0,
                    'deaths': _0x5d3012['deaths'] || 0x0,
                    'townLosses': _0x5d3012['townLosses'] || 0x0,
                    'mafiaLosses': _0x5d3012['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x3f654c,
                    'token': _0x22606b,
                    'body': _0x1fe6db,
                    'eyes': _0x2c072f,
                    'isGuest': _0x526a83,
                    'uid': _0xb1a347,
                    'photoURL': _0x82a331,
                    'accountStats': _0x153afe
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x299444 && _0x299444['readyState'] === WebSocket['OPEN']) {
            _0x299444['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x299444['onclose'] = _0x1a0eb7 => {
        if (_0x1a0eb7['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x1a0eb7['code'] === 0xfa2 || _0x1a0eb7['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x36a6c2 = document['getElementById']('disconnect-overlay');
        if (!_0x36a6c2) {
            _0x36a6c2 = document['createElement']('div');
            _0x36a6c2['id'] = 'disconnect-overlay';
            _0x36a6c2['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x36a6c2['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x36a6c2);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x299444['onmessage'] = _0x7d0a57 => {
        const _0x1659a8 = JSON['parse'](_0x7d0a57['data']);
        if (_0x1659a8['type'] === 'map_data') {
            _0x369081['MAP']['tileSize'] = _0x1659a8['map']['tileSize'];
            _0x369081['MAP']['columns'] = _0x1659a8['map']['columns'];
            _0x369081['MAP']['rows'] = _0x1659a8['map']['rows'];
            _0x369081['MAP']['layers'] = _0x1659a8['map']['layers'];
            if (_0x1659a8['map']['doors']) {
                _0x369081['MAP']['doors'] = _0x1659a8['map']['doors'];
                const _0x548899 = _0x369081['MAP']['layers']['find'](_0xd06f7d => _0xd06f7d['name'] === 'floor2');
                if (_0x548899) {
                    for (const _0x2e9c45 in _0x369081['MAP']['doors']) {
                        _0x548899['data'][parseInt(_0x2e9c45)] = 0x2;
                    }
                }
            }
            if (_0x1659a8['entities'])
                _0x369081['ENTITIES'] = _0x1659a8['entities'];
            _0x489414();
            _0x369081['SYSTEM']['isReady'] = !![];
            _0x40a4e3();
            if (!_0x369081['SYSTEM']['_gameLoopRunning']) {
                _0x369081['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x4f7310);
            }
            return;
        }
        if (_0x1659a8['type'] === 'init') {
            _0x24d029 = _0x1659a8['id'];
            _0x384fcc = ![];
            _0x31ba00();
            if (_0x1edffa) {
                const _0x5d6662 = document['getElementById']('leaderboard-list');
                const _0x22b50b = document['getElementById']('leaderboard-toggle');
                if (_0x5d6662) {
                    _0x5d6662['style']['display'] = 'none';
                    if (_0x22b50b)
                        _0x22b50b['style']['transform'] = 'rotate(180deg)';
                }
                const _0x2464d2 = document['getElementById']('role-list-items');
                const _0x3360ab = document['getElementById']('role-list-toggle');
                if (_0x2464d2) {
                    _0x2464d2['style']['display'] = 'none';
                    if (_0x3360ab)
                        _0x3360ab['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x1e06f4 = _0x1659a8['isOwner'] || ![];
            _0x3f654c = _0x1659a8['name'] || _0x3f654c;
            _0x369081['MAP']['tileSize'] = _0x1659a8['map']['tileSize'];
            _0x369081['MAP']['columns'] = _0x1659a8['map']['columns'];
            _0x369081['MAP']['rows'] = _0x1659a8['map']['rows'];
            _0x369081['MAP']['layers'] = _0x1659a8['map']['layers'];
            if (_0x1659a8['map']['doors']) {
                _0x369081['MAP']['doors'] = _0x1659a8['map']['doors'];
                const _0x5183d6 = _0x369081['MAP']['layers']['find'](_0x196015 => _0x196015['name'] === 'floor2');
                if (_0x5183d6) {
                    for (const _0x2d048f in _0x369081['MAP']['doors']) {
                        _0x5183d6['data'][parseInt(_0x2d048f)] = 0x2;
                    }
                }
            }
            if (_0x1659a8['entities'])
                _0x369081['ENTITIES'] = _0x1659a8['entities'];
            _0x489414();
            _0x5d460f['x'] = _0x369081['MAP']['columns'] * _0x369081['MAP']['tileSize'] / 0x2;
            _0x5d460f['y'] = _0x369081['MAP']['rows'] * _0x369081['MAP']['tileSize'] / 0x2;
            _0x369081['CAMERA']['x'] = _0x5d460f['x'] + _0x5d460f['width'] / 0x2 - _0x369081['CAMERA']['width'] / 0x2;
            _0x369081['CAMERA']['y'] = _0x5d460f['y'] + _0x5d460f['height'] / 0x2 - _0x369081['CAMERA']['height'] / 0x2;
            if (_0x1e06f4) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x50bb7b();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x284eb3 = document['getElementById']('role-index-btn-wrap');
            if (_0x284eb3)
                _0x284eb3['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x369081['SYSTEM']['lastTime'] = performance['now']();
            _0x369081['SYSTEM']['isReady'] = !![];
            _0x3a0735();
            if (!_0x369081['SYSTEM']['_gameLoopRunning']) {
                _0x369081['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x4f7310);
            }
            return;
        } else if (_0x1659a8['type'] === 'state') {
            const _0x4d5f66 = {};
            for (const _0xfdc874 in _0x1659a8['players']) {
                if (parseInt(_0xfdc874) === _0x24d029)
                    continue;
                const _0x47a67d = _0x1659a8['players'][_0xfdc874];
                const _0x63cd90 = _0x4ef53b[_0xfdc874];
                if (_0x63cd90) {
                    const _0xe65e82 = _0x47a67d['x'] - _0x63cd90['renderX'];
                    const _0x5970e1 = _0x47a67d['y'] - _0x63cd90['renderY'];
                    const _0x59f3ab = _0xe65e82 * _0xe65e82 + _0x5970e1 * _0x5970e1 > 0x78 * 0x78;
                    Object['assign'](_0x63cd90, _0x47a67d);
                    if (_0x59f3ab) {
                        _0x63cd90['renderX'] = _0x47a67d['x'];
                        _0x63cd90['renderY'] = _0x47a67d['y'];
                    }
                    _0x4d5f66[_0xfdc874] = _0x63cd90;
                } else {
                    _0x4d5f66[_0xfdc874] = {
                        ..._0x47a67d,
                        'renderX': _0x47a67d['x'],
                        'renderY': _0x47a67d['y'],
                        'renderAngle': _0x47a67d['angle'] || 0x0
                    };
                }
            }
            _0x4ef53b = _0x4d5f66;
            _0x1f0349();
            if (_0x1659a8['players'][_0x24d029]) {
                const _0x513018 = _0x1659a8['players'][_0x24d029];
                _0x5d460f['chats'] = _0x513018['chats'] || [];
                _0x5d460f['isDead'] = _0x513018['isDead'];
                if (_0x513018['name'])
                    _0x3f654c = _0x513018['name'];
                _0x3a0735();
                const _0xfedf2f = Math['hypot'](_0x513018['x'] - _0x5d460f['x'], _0x513018['y'] - _0x5d460f['y']);
                if (_0xfedf2f > 0xfa) {
                    _0x5d460f['x'] = _0x513018['x'];
                    _0x5d460f['y'] = _0x513018['y'];
                } else if (_0xfedf2f > 0x50) {
                    _0x5d460f['x'] += (_0x513018['x'] - _0x5d460f['x']) * 0.06;
                    _0x5d460f['y'] += (_0x513018['y'] - _0x5d460f['y']) * 0.06;
                }
            }
            if (_0x1659a8['entities'])
                _0x369081['ENTITIES'] = _0x1659a8['entities'];
            if (_0x1659a8['game']) {
                _0x369081['GAME_STATE'] = _0x1659a8['game']['state'];
                _0x369081['NIGHT_ABILITY_OPEN'] = _0x1659a8['game']['nightAbilityOpen'];
                if (_0x1659a8['game']['mayorRevealed']) {
                    for (const _0x3ff765 in _0x1659a8['game']['mayorRevealed']) {
                        _0x3f2184['add'](parseInt(_0x3ff765));
                    }
                }
                if (_0x369081['LAST_STATE'] !== _0x369081['GAME_STATE']) {
                    if (_0x369081['GAME_STATE'] !== 'NIGHT') {
                        _0x369081['CURRENT_TARGET'] = null;
                        _0x32c02c = null;
                        _0x1238a3 = null;
                        _0x26be5 = null;
                        const _0x403556 = document['getElementById']('ability-ui');
                        if (_0x403556)
                            _0x403556['style']['display'] = 'none';
                    }
                    if (_0x369081['GAME_STATE'] === 'NIGHT') {
                        _0x5d460f['chats'] = [];
                        for (const _0x3e4ff7 in _0x4ef53b) {
                            _0x4ef53b[_0x3e4ff7]['chats'] = [];
                        }
                    }
                    _0x369081['LAST_STATE'] = _0x369081['GAME_STATE'];
                    _0x5a3125();
                    _0x3eee62['onStateChange'](_0x369081['GAME_STATE'], _0x1659a8['game']['nightAbilityOpen']);
                }
                const _0x56b7fc = document['getElementById']('phase-ui');
                if (_0x56b7fc) {
                    if (_0x1659a8['game']['state'] === 'LOBBY') {
                        _0x56b7fc['style']['display'] = 'none';
                    } else {
                        _0x56b7fc['style']['display'] = 'block';
                    }
                    let _0x58372d = _0x1659a8['game']['state']['replace']('_', '\x20');
                    if (_0x1659a8['game']['state'] === 'DAY_DISCUSS') {
                        _0x58372d = 'DAY\x20' + (_0x1659a8['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x1659a8['game']['timer'] + 's';
                    } else if (_0x1659a8['game']['state'] === 'DAY_VOTE') {
                        _0x58372d = 'DAY\x20' + (_0x1659a8['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x1659a8['game']['timer'] + 's';
                    } else if (_0x1659a8['game']['state'] === 'NIGHT') {
                        const _0xa44d15 = _0x1659a8['game']['dayCount'] || 0x1;
                        if (_0x1659a8['game']['nightAbilityOpen']) {
                            _0x58372d = 'NIGHT\x20' + _0xa44d15 + '\x20ABILITY\x20PHASE';
                            const _0xd52182 = _0x1659a8['game']['abilityTimer'] !== undefined ? _0x1659a8['game']['abilityTimer'] : _0x1659a8['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0xd52182 + 's';
                        } else {
                            _0x58372d = 'NIGHT\x20' + _0xa44d15;
                            document['getElementById']('phase-timer')['innerText'] = _0x1659a8['game']['timer'] + 's';
                        }
                    }
                    if (_0x1659a8['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x58372d;
                    }
                }
                if (_0x1659a8['game']['state'] === 'NIGHT') {
                    const _0x128d09 = document['getElementById']('ability-timer-label');
                    if (_0x128d09) {
                        const _0x1f6804 = _0x1659a8['game']['abilityTimer'] !== undefined ? _0x1659a8['game']['abilityTimer'] : _0x1659a8['game']['timer'];
                        _0x128d09['innerText'] = _0x1659a8['game']['nightAbilityOpen'] ? _0x1f6804 + 's' : '';
                    }
                    if (_0x1659a8['game']['nightAbilityOpen'] && !_0xa38a79 && !_0x5d460f['isDead']) {
                        _0xa38a79 = !![];
                        _0x14b9ff();
                        const _0x4954bb = document['getElementById']('ability-ui');
                        if (_0x4954bb)
                            _0x4954bb['style']['display'] = 'block';
                    }
                    if (!_0x1659a8['game']['nightAbilityOpen']) {
                        const _0x5075de = document['getElementById']('ability-ui');
                        if (_0x5075de && _0x5075de['style']['display'] === 'block') {
                            _0x5075de['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0xa38a79 = ![];
                }
                if (_0x1659a8['game']['rolesInGame']) {
                    _0x369081['ROLES_IN_GAME'] = _0x1659a8['game']['rolesInGame'];
                }
                if (_0x1659a8['game']['skinwalkerLastRole'] !== undefined) {
                    _0x369081['SKINWALKER_LAST_ROLE'] = _0x1659a8['game']['skinwalkerLastRole'];
                }
                if (_0x1659a8['game']['state'] === 'NIGHT') {
                    const _0x4aca1f = document['getElementById']('will-ui');
                    if (_0x4aca1f && _0x4aca1f['style']['display'] === 'flex') {
                        _0x4aca1f['style']['display'] = 'none';
                        const _0x568a4b = document['getElementById']('will-input');
                        if (_0x568a4b)
                            _0x568a4b['blur']();
                    }
                }
                _0x1e681e(_0x1659a8['game']);
                if (_0x1659a8['game']['roleListMode'] !== undefined) {
                    _0x369081['ROLE_LIST_RAW'] = _0x1659a8['game']['roleList'] || [];
                    _0x4bec54(_0x1659a8['game']['roleList'], _0x1659a8['game']['roleListMode']);
                }
            }
        } else if (_0x1659a8['type'] === 'teleport') {
            _0x5d460f['x'] = _0x1659a8['x'];
            _0x5d460f['y'] = _0x1659a8['y'];
            _0x5d460f['vx'] = 0x0;
            _0x5d460f['vy'] = 0x0;
            _0x369081['CAMERA']['x'] = null;
            if (_0x1659a8['teleportId'] !== undefined)
                _0x54833a = _0x1659a8['teleportId'];
        } else if (_0x1659a8['type'] === 'bulk_teleport') {
            for (const _0x3edda7 in _0x1659a8['positions']) {
                const _0x8a4e0e = _0x1659a8['positions'][_0x3edda7];
                if (parseInt(_0x3edda7) === _0x24d029) {
                    _0x5d460f['x'] = _0x8a4e0e['x'];
                    _0x5d460f['y'] = _0x8a4e0e['y'];
                    _0x5d460f['vx'] = 0x0;
                    _0x5d460f['vy'] = 0x0;
                    _0x369081['CAMERA']['x'] = null;
                    continue;
                }
                const _0x1f9a2f = _0x4ef53b[_0x3edda7];
                if (_0x1f9a2f) {
                    _0x1f9a2f['x'] = _0x8a4e0e['x'];
                    _0x1f9a2f['y'] = _0x8a4e0e['y'];
                    _0x1f9a2f['renderX'] = _0x8a4e0e['x'];
                    _0x1f9a2f['renderY'] = _0x8a4e0e['y'];
                    _0x1f9a2f['vx'] = 0x0;
                    _0x1f9a2f['vy'] = 0x0;
                }
            }
        } else if (_0x1659a8['type'] === 'player_left') {
            delete _0x4ef53b[_0x1659a8['id']];
            _0x3f2184['delete'](parseInt(_0x1659a8['id']));
        } else if (_0x1659a8['type'] === 'map_update') {
            const _0x3001d6 = _0x369081['MAP']['layers']['find'](_0x48b4d5 => _0x48b4d5['name'] === _0x1659a8['layer']);
            if (_0x3001d6) {
                _0x3001d6['data'][_0x1659a8['row'] * _0x369081['MAP']['columns'] + _0x1659a8['col']] = _0x1659a8['gid'];
                const _0x53b9bc = _0x1659a8['row'] * _0x369081['MAP']['columns'] + _0x1659a8['col'];
                if (_0x369081['MAP']['doors'] && _0x369081['MAP']['doors'][_0x53b9bc]) {
                    const _0xe34a6d = _0x369081['MAP']['layers']['find'](_0x2e5205 => _0x2e5205['name'] === 'floor2');
                    if (_0xe34a6d)
                        _0xe34a6d['data'][_0x53b9bc] = 0x2;
                }
                const _0x1bcbda = Math['floor'](_0x1659a8['col'] * _0x369081['MAP']['tileSize'] / _0x369081['MAP']['chunkSize']);
                const _0x16aa68 = Math['floor'](_0x1659a8['row'] * _0x369081['MAP']['tileSize'] / _0x369081['MAP']['chunkSize']);
                _0xb40d06(_0x1bcbda, _0x16aa68);
            }
        } else if (_0x1659a8['type'] === 'role_assign') {
            _0x15c275 = _0x1659a8['role'];
            _0x5d460f['isDead'] = _0x15c275 === 'Spectator';
            _0x3f2184['clear']();
            _0x369081['CURRENT_TARGET'] = null;
            _0x32c02c = null;
            _0x1238a3 = null;
            _0x26be5 = null;
            _0xa38a79 = ![];
            const _0x14d350 = document['getElementById']('ability-ui');
            if (_0x14d350)
                _0x14d350['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x15c275;
            _0x5a3125();
            _0xbd72db(_0x15c275 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x15c275, !![]);
            let _0x391627 = '';
            if (_0x15c275 === 'Investigator')
                _0x391627 = 'Investigate\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x15c275 === 'Tracker')
                _0x391627 = 'Track\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x15c275 === 'Doctor')
                _0x391627 = 'Heal\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x15c275 === 'Archer')
                _0x391627 = 'Guard\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x15c275 === 'Escort')
                _0x391627 = 'Roleblock\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x15c275 === 'Vigilante')
                _0x391627 = 'Shoot\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x15c275 === 'Skinwalker')
                _0x391627 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x15c275 === 'Celebrity')
                _0x391627 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x15c275 === 'Mayor')
                _0x391627 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0xbd72db(_0x391627, !![]);
        } else if (_0x1659a8['type'] === 'mayor_reveal') {
            _0x3f2184['add'](parseInt(_0x1659a8['playerId']));
            _0x3a0735();
            _0x5a3125();
        } else if (_0x1659a8['type'] === 'rolelist_update') {
            _0x369081['ROLE_LIST_RAW'] = _0x1659a8['list'] || [];
            _0x4bec54(_0x1659a8['list'], _0x1659a8['mode']);
        } else if (_0x1659a8['type'] === 'sound_event') {
            _0x3eee62['onSoundEvent'](_0x1659a8['track']);
        } else if (_0x1659a8['type'] === 'day_fade') {
            _0x2a2faf = 0x1;
            _0x3eb425 = performance['now']() + 0x3e8;
        } else if (_0x1659a8['type'] === 'player_stats_updated') {
            const _0xeabdb9 = parseInt(_0x1659a8['id']);
            if (_0xeabdb9 === _0x24d029 && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x1659a8['accountStats']);
            }
            if (_0x4ef53b[_0x1659a8['id']]) {
                _0x4ef53b[_0x1659a8['id']]['accountStats'] = _0x1659a8['accountStats'];
            }
            _0x1f0349();
        } else if (_0x1659a8['type'] === 'stats_update') {
            const _0x80010 = window['_FB'];
            if (_0x80010 && _0x80010['_currentUser'] && _0x80010['_userData']) {
                const _0x92ad42 = _0x80010['_currentUser']['uid'];
                const _0x29021e = _0x1659a8['patch'] || {};
                const _0xce7bb5 = _0x80010['_userData'];
                const _0x4d27ab = {
                    'townWins': (_0xce7bb5['townWins'] || 0x0) + (_0x29021e['townWins'] || 0x0),
                    'mafiaWins': (_0xce7bb5['mafiaWins'] || 0x0) + (_0x29021e['mafiaWins'] || 0x0),
                    'deaths': (_0xce7bb5['deaths'] || 0x0) + (_0x29021e['deaths'] || 0x0),
                    'townLosses': (_0xce7bb5['townLosses'] || 0x0) + (_0x29021e['townLosses'] || 0x0),
                    'mafiaLosses': (_0xce7bb5['mafiaLosses'] || 0x0) + (_0x29021e['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x80010['_userData'], _0x4d27ab);
                const _0x7bb806 = _0x80010['doc'](_0x80010['db'], 'users', _0x92ad42);
                _0x80010['updateDoc'](_0x7bb806, _0x4d27ab)['catch'](() => {
                });
                if (_0x299444 && _0x299444['readyState'] === WebSocket['OPEN']) {
                    _0x299444['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x4d27ab
                    }));
                }
                _0x1f0349();
            }
        } else if (_0x1659a8['type'] === 'game_over') {
            _0x3eee62['onStateChange']('LOBBY', ![]);
            _0x4bec54([], 'off');
            _0x15c275 = null;
            _0x5d460f['isDead'] = ![];
            _0x3f2184['clear']();
            _0x369081['CURRENT_TARGET'] = null;
            _0x32c02c = null;
            _0x1238a3 = null;
            _0x26be5 = null;
            _0xa38a79 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x5a3125();
            _0xbd72db('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x1659a8['type'] === 'chat_log') {
            _0xbd72db(_0x1659a8['sender'] + ':\x20' + _0x1659a8['text'], ![], !!_0x1659a8['isHost']);
        } else if (_0x1659a8['type'] === 'sys_chat') {
            _0xbd72db(_0x1659a8['text'], !![]);
        }
    };
}
function _0xbd72db(_0xd241d, _0x28a894 = ![], _0x33fc7a = ![]) {
    const _0x3791d5 = document['getElementById']('chat-log-messages');
    const _0x5b8cad = document['getElementById']('chat-log-ui');
    const _0x2c2d31 = _0x5b8cad['scrollHeight'] - _0x5b8cad['scrollTop'] - _0x5b8cad['clientHeight'] < 0x1e;
    const _0x41227b = document['createElement']('div');
    _0x41227b['className'] = 'chat-log-line' + (_0x28a894 ? '\x20sys-msg' : '') + (_0x33fc7a ? '\x20host-msg' : '');
    _0x41227b['innerText'] = _0xd241d;
    _0x3791d5['appendChild'](_0x41227b);
    if (_0x2c2d31) {
        _0x5b8cad['scrollTop'] = _0x5b8cad['scrollHeight'];
    }
    if (_0x3791d5['childElementCount'] > 0xc8) {
        _0x3791d5['removeChild'](_0x3791d5['firstChild']);
    }
}
function _0x31992d(_0x537678, _0x591da9, _0x385e11) {
    const _0x425ea0 = document['createElement']('canvas');
    _0x425ea0['width'] = _0x385e11;
    _0x425ea0['height'] = _0x385e11;
    const _0x4cd748 = _0x425ea0['getContext']('2d');
    _0x4cd748['imageSmoothingEnabled'] = ![];
    const _0x2c4f8b = 'assets/' + (_0x537678 || 'body01.png');
    const _0xd628db = _0x151d61(_0x2c4f8b);
    if (_0xd628db['complete'] && _0xd628db['naturalWidth'] > 0x0)
        _0x4cd748['drawImage'](_0xd628db, 0x0, 0x0, _0x385e11, _0x385e11);
    if (_0x591da9) {
        const _0x3b05ad = 'assets/' + _0x591da9;
        const _0x4bddc9 = _0x151d61(_0x3b05ad);
        if (_0x4bddc9['complete'] && _0x4bddc9['naturalWidth'] > 0x0)
            _0x4cd748['drawImage'](_0x4bddc9, 0x0, 0x0, _0x385e11, _0x385e11);
    }
    return _0x425ea0['toDataURL']();
}
let _0x5e94c9 = '';
function _0x1f0349() {
    const _0x84b4af = document['getElementById']('chat-profile-panel');
    if (!_0x84b4af)
        return;
    const _0x31f47c = [];
    if (_0x24d029 !== null) {
        const _0x3dfc30 = _0x5871c9 || 'body01.png';
        const _0x4dc8b8 = _0x28f9a7 || 'eyes4.png';
        const _0x1c8ae6 = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x31f47c['push']({
            'id': _0x24d029,
            'name': _0x3f654c,
            'body': _0x3dfc30,
            'eyes': _0x4dc8b8,
            'stats': _0x1c8ae6
        });
    }
    for (const _0x348ffe in _0x4ef53b) {
        const _0x32fe5f = _0x4ef53b[_0x348ffe];
        const _0x781c24 = _0x32fe5f['accountStats'] || null;
        _0x31f47c['push']({
            'id': parseInt(_0x348ffe),
            'name': _0x32fe5f['name'],
            'body': _0x32fe5f['body'] || 'body01.png',
            'eyes': _0x32fe5f['eyes'] || 'eyes4.png',
            'stats': _0x781c24
        });
    }
    const _0x12a929 = _0x31f47c['map'](_0x124e86 => _0x124e86['id'] + '_' + _0x124e86['name'] + '_' + _0x124e86['body'] + '_' + _0x124e86['eyes'] + '_' + JSON['stringify'](_0x124e86['stats']))['join']('|');
    if (_0x12a929 === _0x5e94c9)
        return;
    _0x5e94c9 = _0x12a929;
    _0x84b4af['innerHTML'] = '';
    let _0x56ed95 = ![];
    for (const _0xce6ff3 of _0x31f47c) {
        _0x56ed95 = !![];
        const _0x190e34 = _0x31992d(_0xce6ff3['body'], _0xce6ff3['eyes'], 0x20);
        const _0x4dfa9c = document['createElement']('div');
        _0x4dfa9c['className'] = 'chat-pfp-entry';
        const _0x52d0bb = document['createElement']('img');
        _0x52d0bb['src'] = _0x190e34;
        _0x52d0bb['alt'] = _0xce6ff3['name'];
        _0x4dfa9c['appendChild'](_0x52d0bb);
        const _0x382f4c = document['createElement']('div');
        _0x382f4c['className'] = 'chat-pfp-tooltip';
        let _0x27b708 = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0xce6ff3['name'] + '</div>';
        const _0x131e6d = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x214d3f = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x38e0d3 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x5b87ea = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x5cb515 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x426a33 = (_0xae7dcf, _0x2d9f14, _0x2327f8, _0x11aab9) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0xae7dcf + '<span\x20style=\x22flex:1;color:' + _0x11aab9 + ';\x22>' + _0x2d9f14 + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x2327f8 + '</span></div>';
        if (_0xce6ff3['stats']) {
            _0x27b708 += _0x426a33(_0x131e6d, 'Town\x20Wins', _0xce6ff3['stats']['townWins'] || 0x0, '#55ee77');
            _0x27b708 += _0x426a33(_0x214d3f, 'Mafia\x20Wins', _0xce6ff3['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x27b708 += _0x426a33(_0x38e0d3, 'Deaths', _0xce6ff3['stats']['deaths'] || 0x0, '#aaa');
            _0x27b708 += _0x426a33(_0x5b87ea, 'Town\x20Losses', _0xce6ff3['stats']['townLosses'] || 0x0, '#6688aa');
            _0x27b708 += _0x426a33(_0x5cb515, 'Mafia\x20Losses', _0xce6ff3['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x27b708 += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x382f4c['innerHTML'] = _0x27b708;
        _0x4dfa9c['appendChild'](_0x382f4c);
        _0x84b4af['appendChild'](_0x4dfa9c);
    }
    const _0x2cfede = document['getElementById']('chat-log-wrap');
    if (_0x2cfede) {
        if (_0x56ed95) {
            _0x2cfede['classList']['add']('has-profiles');
            _0x84b4af['style']['display'] = 'flex';
        } else {
            _0x2cfede['classList']['remove']('has-profiles');
            _0x84b4af['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x1f0349;
let _0x2e251 = -0x1, _0x34aafb = -0x1, _0x1f4bef = -0x1, _0x22412d = 0x0;
function _0x39a85b() {
    if (!_0x24d029 || !_0x299444 || _0x299444['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x3fdca5 = performance['now']();
    const _0x511afa = _0x3fdca5 - _0x22412d;
    const _0x10a713 = Math['abs'](_0x5d460f['x'] - _0x2e251) > 0.05 || Math['abs'](_0x5d460f['y'] - _0x34aafb) > 0.05 || Math['abs'](_0x5d460f['angle'] - _0x1f4bef) > 0.02;
    if (!_0x10a713 && _0x511afa < 0xc8)
        return;
    if (_0x511afa < 0x19)
        return;
    _0x22412d = _0x3fdca5;
    _0x2e251 = _0x5d460f['x'];
    _0x34aafb = _0x5d460f['y'];
    _0x1f4bef = _0x5d460f['angle'];
    if (!_0x24d029 || !_0x299444 || _0x299444['readyState'] !== WebSocket['OPEN'])
        return;
    _0x299444['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x5d460f['x'],
        'y': _0x5d460f['y'],
        'vx': _0x5d460f['vx'],
        'vy': _0x5d460f['vy'],
        'angle': _0x5d460f['angle'],
        'scale': _0x5d460f['scale'],
        'teleportId': _0x54833a,
        'clientTimestamp': Date['now']()
    }));
}
function _0x3c8cd0() {
    if (_0x5d460f['isDead'])
        return;
    const _0x5aa950 = _0x369081['MAP']['layers']['find'](_0x291eff => _0x291eff['name'] === 'walls');
    if (!_0x5aa950)
        return;
    const _0x4e31e4 = _0x5d460f['scale'];
    const _0x38733b = _0x5d460f['width'] * _0x4e31e4 / 0x2;
    for (let _0x293ee5 = 0x0; _0x293ee5 < 0x3; _0x293ee5++) {
        let _0x525307 = _0x5d460f['x'] + _0x5d460f['width'] / 0x2;
        let _0x5dc4c8 = _0x5d460f['y'] + _0x5d460f['height'] / 0x2;
        const _0x1326c8 = Math['floor']((_0x525307 - _0x38733b) / _0x369081['MAP']['tileSize']);
        const _0x111e29 = Math['floor']((_0x525307 + _0x38733b) / _0x369081['MAP']['tileSize']);
        const _0x4d8f8f = Math['floor']((_0x5dc4c8 - _0x38733b) / _0x369081['MAP']['tileSize']);
        const _0x3d1cdb = Math['floor']((_0x5dc4c8 + _0x38733b) / _0x369081['MAP']['tileSize']);
        for (let _0x402544 = _0x4d8f8f; _0x402544 <= _0x3d1cdb; _0x402544++) {
            for (let _0x3fdedc = _0x1326c8; _0x3fdedc <= _0x111e29; _0x3fdedc++) {
                if (_0x3fdedc < 0x0 || _0x3fdedc >= _0x369081['MAP']['columns'] || _0x402544 < 0x0 || _0x402544 >= _0x369081['MAP']['rows'])
                    continue;
                if (_0x5aa950['data'][_0x402544 * _0x369081['MAP']['columns'] + _0x3fdedc] === 0x0)
                    continue;
                const _0xa6856d = _0x3fdedc * _0x369081['MAP']['tileSize'];
                const _0x497c90 = _0x402544 * _0x369081['MAP']['tileSize'];
                const _0x2cbabe = _0x525307 < _0xa6856d ? _0xa6856d : _0x525307 > _0xa6856d + _0x369081['MAP']['tileSize'] ? _0xa6856d + _0x369081['MAP']['tileSize'] : _0x525307;
                const _0x818fc = _0x5dc4c8 < _0x497c90 ? _0x497c90 : _0x5dc4c8 > _0x497c90 + _0x369081['MAP']['tileSize'] ? _0x497c90 + _0x369081['MAP']['tileSize'] : _0x5dc4c8;
                const _0x22bd6a = _0x525307 - _0x2cbabe;
                const _0x5a1aa3 = _0x5dc4c8 - _0x818fc;
                const _0x2a2248 = Math['sqrt'](_0x22bd6a * _0x22bd6a + _0x5a1aa3 * _0x5a1aa3);
                if (_0x2a2248 < _0x38733b) {
                    if (_0x2a2248 === 0x0) {
                        const _0x16a203 = _0x525307 - _0xa6856d;
                        const _0x3a1c1a = _0xa6856d + _0x369081['MAP']['tileSize'] - _0x525307;
                        const _0x23cc83 = _0x5dc4c8 - _0x497c90;
                        const _0x4d6bfd = _0x497c90 + _0x369081['MAP']['tileSize'] - _0x5dc4c8;
                        const _0x3d4398 = Math['min'](_0x16a203, _0x3a1c1a, _0x23cc83, _0x4d6bfd);
                        if (_0x3d4398 === _0x16a203)
                            _0x525307 = _0xa6856d - _0x38733b;
                        else if (_0x3d4398 === _0x3a1c1a)
                            _0x525307 = _0xa6856d + _0x369081['MAP']['tileSize'] + _0x38733b;
                        else if (_0x3d4398 === _0x23cc83)
                            _0x5dc4c8 = _0x497c90 - _0x38733b;
                        else
                            _0x5dc4c8 = _0x497c90 + _0x369081['MAP']['tileSize'] + _0x38733b;
                    } else {
                        const _0xca84a6 = _0x38733b - _0x2a2248;
                        _0x525307 += _0x22bd6a / _0x2a2248 * _0xca84a6;
                        _0x5dc4c8 += _0x5a1aa3 / _0x2a2248 * _0xca84a6;
                        const _0x5a47bc = _0x5d460f['vx'] * (_0x22bd6a / _0x2a2248) + _0x5d460f['vy'] * (_0x5a1aa3 / _0x2a2248);
                        if (_0x5a47bc < 0x0) {
                            _0x5d460f['vx'] -= _0x5a47bc * (_0x22bd6a / _0x2a2248);
                            _0x5d460f['vy'] -= _0x5a47bc * (_0x5a1aa3 / _0x2a2248);
                        }
                    }
                }
            }
        }
        _0x5d460f['x'] = _0x525307 - _0x5d460f['width'] / 0x2;
        _0x5d460f['y'] = _0x5dc4c8 - _0x5d460f['height'] / 0x2;
    }
}
function _0x40a38d(_0x78ca68) {
    const _0x2987d3 = _0x369081['MAP']['layers']['find'](_0x3d8f49 => _0x3d8f49['name'] === 'walls');
    if (!_0x2987d3)
        return;
    const _0x2c6041 = _0x78ca68['width'] / 0x2;
    for (let _0xe516e4 = 0x0; _0xe516e4 < 0x2; _0xe516e4++) {
        let _0x10efb2 = _0x78ca68['x'] + _0x78ca68['width'] / 0x2;
        let _0x40178b = _0x78ca68['y'] + _0x78ca68['height'] / 0x2;
        const _0x1bb414 = Math['floor']((_0x10efb2 - _0x2c6041) / _0x369081['MAP']['tileSize']);
        const _0x23f7f3 = Math['floor']((_0x10efb2 + _0x2c6041) / _0x369081['MAP']['tileSize']);
        const _0x3c4ef2 = Math['floor']((_0x40178b - _0x2c6041) / _0x369081['MAP']['tileSize']);
        const _0x5a7799 = Math['floor']((_0x40178b + _0x2c6041) / _0x369081['MAP']['tileSize']);
        for (let _0x3f501c = _0x3c4ef2; _0x3f501c <= _0x5a7799; _0x3f501c++) {
            for (let _0x2d1382 = _0x1bb414; _0x2d1382 <= _0x23f7f3; _0x2d1382++) {
                if (_0x2d1382 < 0x0 || _0x2d1382 >= _0x369081['MAP']['columns'] || _0x3f501c < 0x0 || _0x3f501c >= _0x369081['MAP']['rows'])
                    continue;
                if (_0x2987d3['data'][_0x3f501c * _0x369081['MAP']['columns'] + _0x2d1382] === 0x0)
                    continue;
                const _0x5e188a = _0x2d1382 * _0x369081['MAP']['tileSize'];
                const _0x4501c9 = _0x3f501c * _0x369081['MAP']['tileSize'];
                const _0xdf2f4 = _0x10efb2 < _0x5e188a ? _0x5e188a : _0x10efb2 > _0x5e188a + _0x369081['MAP']['tileSize'] ? _0x5e188a + _0x369081['MAP']['tileSize'] : _0x10efb2;
                const _0x1dee91 = _0x40178b < _0x4501c9 ? _0x4501c9 : _0x40178b > _0x4501c9 + _0x369081['MAP']['tileSize'] ? _0x4501c9 + _0x369081['MAP']['tileSize'] : _0x40178b;
                const _0x7cb65c = _0x10efb2 - _0xdf2f4;
                const _0x447551 = _0x40178b - _0x1dee91;
                const _0x2c1da3 = Math['sqrt'](_0x7cb65c * _0x7cb65c + _0x447551 * _0x447551);
                if (_0x2c1da3 < _0x2c6041) {
                    if (_0x2c1da3 === 0x0) {
                        const _0x5a23b6 = _0x10efb2 - _0x5e188a;
                        const _0x1cba8f = _0x5e188a + _0x369081['MAP']['tileSize'] - _0x10efb2;
                        const _0x596f0d = _0x40178b - _0x4501c9;
                        const _0x27017b = _0x4501c9 + _0x369081['MAP']['tileSize'] - _0x40178b;
                        const _0x3adb8d = Math['min'](_0x5a23b6, _0x1cba8f, _0x596f0d, _0x27017b);
                        if (_0x3adb8d === _0x5a23b6)
                            _0x10efb2 = _0x5e188a - _0x2c6041;
                        else if (_0x3adb8d === _0x1cba8f)
                            _0x10efb2 = _0x5e188a + _0x369081['MAP']['tileSize'] + _0x2c6041;
                        else if (_0x3adb8d === _0x596f0d)
                            _0x40178b = _0x4501c9 - _0x2c6041;
                        else
                            _0x40178b = _0x4501c9 + _0x369081['MAP']['tileSize'] + _0x2c6041;
                    } else {
                        const _0x17bf06 = _0x2c6041 - _0x2c1da3;
                        _0x10efb2 += _0x7cb65c / _0x2c1da3 * _0x17bf06;
                        _0x40178b += _0x447551 / _0x2c1da3 * _0x17bf06;
                    }
                }
            }
        }
        _0x78ca68['x'] = _0x10efb2 - _0x78ca68['width'] / 0x2;
        _0x78ca68['y'] = _0x40178b - _0x78ca68['height'] / 0x2;
    }
}
function _0x267954(_0x34dab6) {
    const _0x384bb2 = _0x34dab6['width'] / 0x2;
    for (let _0x25c269 = 0x0; _0x25c269 < 0x2; _0x25c269++) {
        let _0x4b842f = _0x34dab6['x'] + _0x34dab6['width'] / 0x2;
        let _0x45b08c = _0x34dab6['y'] + _0x34dab6['height'] / 0x2;
        for (const _0x3bbbd9 of _0x369081['ENTITIES']) {
            const _0x5a8ca7 = _0x4b842f < _0x3bbbd9['x'] ? _0x3bbbd9['x'] : _0x4b842f > _0x3bbbd9['x'] + _0x3bbbd9['w'] ? _0x3bbbd9['x'] + _0x3bbbd9['w'] : _0x4b842f;
            const _0x1677b3 = _0x45b08c < _0x3bbbd9['y'] ? _0x3bbbd9['y'] : _0x45b08c > _0x3bbbd9['y'] + _0x3bbbd9['h'] ? _0x3bbbd9['y'] + _0x3bbbd9['h'] : _0x45b08c;
            const _0x4ff451 = _0x4b842f - _0x5a8ca7;
            const _0x35e466 = _0x45b08c - _0x1677b3;
            const _0x4b7602 = Math['sqrt'](_0x4ff451 * _0x4ff451 + _0x35e466 * _0x35e466);
            if (_0x4b7602 < _0x384bb2 && _0x4b7602 > 0x0) {
                const _0x5a7792 = _0x384bb2 - _0x4b7602;
                const _0x18e86a = _0x4ff451 / _0x4b7602;
                const _0x4d4dfa = _0x35e466 / _0x4b7602;
                _0x4b842f += _0x18e86a * _0x5a7792;
                _0x45b08c += _0x4d4dfa * _0x5a7792;
            } else if (_0x4b7602 === 0x0) {
                const _0x2e1eb2 = _0x4b842f - _0x3bbbd9['x'];
                const _0x8c8d6f = _0x3bbbd9['x'] + _0x3bbbd9['w'] - _0x4b842f;
                const _0x3cc3b1 = _0x45b08c - _0x3bbbd9['y'];
                const _0x1b196e = _0x3bbbd9['y'] + _0x3bbbd9['h'] - _0x45b08c;
                const _0x4d8cdb = Math['min'](_0x2e1eb2, _0x8c8d6f, _0x3cc3b1, _0x1b196e);
                if (_0x4d8cdb === _0x2e1eb2)
                    _0x4b842f = _0x3bbbd9['x'] - _0x384bb2;
                else if (_0x4d8cdb === _0x8c8d6f)
                    _0x4b842f = _0x3bbbd9['x'] + _0x3bbbd9['w'] + _0x384bb2;
                else if (_0x4d8cdb === _0x3cc3b1)
                    _0x45b08c = _0x3bbbd9['y'] - _0x384bb2;
                else
                    _0x45b08c = _0x3bbbd9['y'] + _0x3bbbd9['h'] + _0x384bb2;
            }
        }
        _0x34dab6['x'] = _0x4b842f - _0x34dab6['width'] / 0x2;
        _0x34dab6['y'] = _0x45b08c - _0x34dab6['height'] / 0x2;
    }
}
function _0x27d228() {
    if (_0x5d460f['isDead'])
        return;
    const _0x371b0e = _0x5d460f['width'] / 0x2;
    const _0x133ead = _0x5d460f['x'] + _0x5d460f['width'] / 0x2;
    const _0x349389 = _0x5d460f['y'] + _0x5d460f['height'] / 0x2;
    for (const _0xa5e5f in _0x4ef53b) {
        const _0x55c8ca = _0x4ef53b[_0xa5e5f];
        if (_0x55c8ca['isDead'])
            continue;
        const _0x347762 = _0x55c8ca['width'] / 0x2;
        const _0x52a4d3 = _0x371b0e + _0x347762;
        const _0x4b90d6 = (_0x55c8ca['renderX'] ?? _0x55c8ca['x']) + _0x55c8ca['width'] / 0x2;
        const _0x3bdb0a = (_0x55c8ca['renderY'] ?? _0x55c8ca['y']) + _0x55c8ca['height'] / 0x2;
        const _0x56a0aa = _0x133ead - _0x4b90d6;
        const _0x7088a8 = _0x349389 - _0x3bdb0a;
        const _0x31aea = Math['sqrt'](_0x56a0aa * _0x56a0aa + _0x7088a8 * _0x7088a8);
        if (_0x31aea > 0x0 && _0x31aea < _0x52a4d3) {
            const _0x5686cc = _0x52a4d3 - _0x31aea;
            const _0x5d9f7c = _0x56a0aa / _0x31aea;
            const _0xb5fef9 = _0x7088a8 / _0x31aea;
            _0x5d460f['x'] += _0x5d9f7c * (_0x5686cc * 0.25);
            _0x5d460f['y'] += _0xb5fef9 * (_0x5686cc * 0.25);
            _0x55c8ca['x'] -= _0x5d9f7c * (_0x5686cc * 0.75);
            _0x55c8ca['y'] -= _0xb5fef9 * (_0x5686cc * 0.75);
            _0x40a38d(_0x55c8ca);
            _0x267954(_0x55c8ca);
            if (_0x55c8ca['renderX'] !== undefined) {
                _0x55c8ca['renderX'] = _0x55c8ca['x'];
                _0x55c8ca['renderY'] = _0x55c8ca['y'];
            }
            const _0x5c9e2c = _0x5d460f['vx'] * _0x5d9f7c + _0x5d460f['vy'] * _0xb5fef9;
            if (_0x5c9e2c < 0x0) {
                _0x5d460f['vx'] -= _0x5c9e2c * _0x5d9f7c * 0.25;
                _0x5d460f['vy'] -= _0x5c9e2c * _0xb5fef9 * 0.25;
            }
        }
    }
    _0x3c8cd0();
    _0x27c713();
}
function _0x27c713() {
    if (_0x5d460f['isDead'])
        return;
    const _0x12d4f8 = _0x5d460f['scale'];
    const _0x2697be = _0x5d460f['width'] * _0x12d4f8 / 0x2;
    for (let _0x3b80bd = 0x0; _0x3b80bd < 0x2; _0x3b80bd++) {
        let _0x368f55 = _0x5d460f['x'] + _0x5d460f['width'] / 0x2;
        let _0x2366fd = _0x5d460f['y'] + _0x5d460f['height'] / 0x2;
        for (const _0x3d5a45 of _0x369081['ENTITIES']) {
            const _0xc7008e = _0x368f55 < _0x3d5a45['x'] ? _0x3d5a45['x'] : _0x368f55 > _0x3d5a45['x'] + _0x3d5a45['w'] ? _0x3d5a45['x'] + _0x3d5a45['w'] : _0x368f55;
            const _0x142efa = _0x2366fd < _0x3d5a45['y'] ? _0x3d5a45['y'] : _0x2366fd > _0x3d5a45['y'] + _0x3d5a45['h'] ? _0x3d5a45['y'] + _0x3d5a45['h'] : _0x2366fd;
            const _0x1a29a3 = _0x368f55 - _0xc7008e;
            const _0x10ccd3 = _0x2366fd - _0x142efa;
            const _0x263a45 = Math['sqrt'](_0x1a29a3 * _0x1a29a3 + _0x10ccd3 * _0x10ccd3);
            if (_0x263a45 < _0x2697be && _0x263a45 > 0x0) {
                const _0x2863e3 = _0x2697be - _0x263a45;
                const _0x20f3a2 = _0x1a29a3 / _0x263a45;
                const _0x7e06dd = _0x10ccd3 / _0x263a45;
                _0x368f55 += _0x20f3a2 * _0x2863e3;
                _0x2366fd += _0x7e06dd * _0x2863e3;
                const _0x64181 = _0x5d460f['vx'] * _0x20f3a2 + _0x5d460f['vy'] * _0x7e06dd;
                if (_0x64181 < 0x0) {
                    _0x5d460f['vx'] -= _0x64181 * _0x20f3a2;
                    _0x5d460f['vy'] -= _0x64181 * _0x7e06dd;
                }
            } else if (_0x263a45 === 0x0) {
                const _0x3b64f2 = _0x368f55 - _0x3d5a45['x'];
                const _0x170b1f = _0x3d5a45['x'] + _0x3d5a45['w'] - _0x368f55;
                const _0x3ea98e = _0x2366fd - _0x3d5a45['y'];
                const _0xbe9322 = _0x3d5a45['y'] + _0x3d5a45['h'] - _0x2366fd;
                const _0x5bd2dc = Math['min'](_0x3b64f2, _0x170b1f, _0x3ea98e, _0xbe9322);
                if (_0x5bd2dc === _0x3b64f2)
                    _0x368f55 = _0x3d5a45['x'] - _0x2697be;
                else if (_0x5bd2dc === _0x170b1f)
                    _0x368f55 = _0x3d5a45['x'] + _0x3d5a45['w'] + _0x2697be;
                else if (_0x5bd2dc === _0x3ea98e)
                    _0x2366fd = _0x3d5a45['y'] - _0x2697be;
                else
                    _0x2366fd = _0x3d5a45['y'] + _0x3d5a45['h'] + _0x2697be;
            }
        }
        _0x5d460f['x'] = _0x368f55 - _0x5d460f['width'] / 0x2;
        _0x5d460f['y'] = _0x2366fd - _0x5d460f['height'] / 0x2;
    }
}
function _0x10b3c9(_0xb87ba5, _0x930cc8) {
    const _0x354f95 = _0x369081['MAP']['layers']['find'](_0x5ca9ff => _0x5ca9ff['name'] === 'trees');
    if (!_0x354f95)
        return ![];
    const _0x29541e = Math['floor'](_0xb87ba5 / _0x369081['MAP']['tileSize']);
    const _0x48217d = Math['floor'](_0x930cc8 / _0x369081['MAP']['tileSize']);
    if (_0x29541e < 0x0 || _0x29541e >= _0x369081['MAP']['columns'] || _0x48217d < 0x0 || _0x48217d >= _0x369081['MAP']['rows'])
        return ![];
    return _0x354f95['data'][_0x48217d * _0x369081['MAP']['columns'] + _0x29541e] === 0xb;
}
let _0x20913d = null;
function _0x31d867() {
    const _0x4efcfe = _0x369081['MAP'];
    const _0x48eb9e = _0x4efcfe['layers']['find'](_0xc7b400 => _0xc7b400['name'] === 'floor2');
    const _0x26650e = _0x4efcfe['layers']['find'](_0xd68af3 => _0xd68af3['name'] === 'walls');
    if (!_0x48eb9e || !_0x26650e) {
        _0x20913d = null;
        return;
    }
    const _0x92b037 = _0x4efcfe['columns'];
    const _0x4346e4 = _0x4efcfe['rows'];
    const _0x5e594a = [];
    const _0x3dd1e1 = [];
    const _0x47f9a0 = new Set();
    for (let _0x407572 = 0x0; _0x407572 < _0x4346e4; _0x407572++) {
        for (let _0x59c5b7 = 0x0; _0x59c5b7 < _0x92b037; _0x59c5b7++) {
            const _0x1c0a61 = _0x407572 * _0x92b037 + _0x59c5b7;
            const _0x198769 = _0x48eb9e['data'][_0x1c0a61];
            const _0x12a540 = _0x26650e['data'][_0x1c0a61];
            if (_0x198769 === 0x2 || _0x198769 === 0x4) {
                _0x5e594a['push']({
                    'c': _0x59c5b7,
                    'r': _0x407572
                });
                if (_0x12a540 !== 0x0)
                    _0x3dd1e1['push']({
                        'c': _0x59c5b7,
                        'r': _0x407572
                    });
            }
            if (_0x12a540 !== 0x0)
                _0x47f9a0['add'](_0x59c5b7 + ',' + _0x407572);
        }
    }
    const _0x4752b9 = new Set(_0x5e594a['map'](_0x27a0e3 => _0x27a0e3['c'] + ',' + _0x27a0e3['r']));
    const _0x250d44 = [
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
                c: _0x216777,
                r: _0x1097c8
            } of _0x5e594a) {
        for (const [_0x23b99e, _0x355367] of _0x250d44) {
            const _0x35c1a9 = _0x216777 + _0x23b99e, _0x3c5f13 = _0x1097c8 + _0x355367;
            const _0xfb0985 = _0x35c1a9 + ',' + _0x3c5f13;
            if (!_0x4752b9['has'](_0xfb0985))
                _0x47f9a0['add'](_0xfb0985);
        }
    }
    _0x20913d = {
        'wallSet': _0x47f9a0,
        'floorTiles': _0x5e594a,
        'wallTiles': _0x3dd1e1,
        'interiorSet': _0x4752b9
    };
}
function _0x30f2af() {
    const _0x122148 = _0x369081['MAP']['layers']['find'](_0x33f54e => _0x33f54e['name'] === 'floor2');
    if (!_0x122148)
        return ![];
    const _0x2877d9 = Math['floor']((_0x5d460f['x'] + _0x5d460f['width'] / 0x2) / _0x369081['MAP']['tileSize']);
    const _0x48e5db = Math['floor']((_0x5d460f['y'] + _0x5d460f['height'] / 0x2) / _0x369081['MAP']['tileSize']);
    if (_0x2877d9 < 0x0 || _0x2877d9 >= _0x369081['MAP']['columns'] || _0x48e5db < 0x0 || _0x48e5db >= _0x369081['MAP']['rows'])
        return ![];
    const _0x2feda0 = _0x122148['data'][_0x48e5db * _0x369081['MAP']['columns'] + _0x2877d9];
    return _0x2feda0 === 0x2;
}
let _0x287396 = null, _0xb49bec = null;
function _0x136a11() {
    if (_0x5d460f['isDead']) {
        _0x369081['SHADOW']['polygon'] = null;
        _0x287396 = null;
        return;
    }
    const _0x89a621 = _0x369081['MAP'];
    const _0x72a9ad = _0x369081['SHADOW'];
    const _0x1c47a1 = _0x89a621['tileSize'];
    if (!_0x20913d)
        _0x31d867();
    if (!_0x20913d) {
        _0x72a9ad['polygon'] = null;
        _0x287396 = null;
        return;
    }
    const {
        wallSet: _0x50d886,
        floorTiles: _0x5cd9ed
    } = _0x20913d;
    if (_0x5cd9ed['length'] === 0x0) {
        _0x72a9ad['polygon'] = null;
        _0x287396 = null;
        return;
    }
    if (!_0x30f2af()) {
        _0x72a9ad['polygon'] = null;
        _0x287396 = null;
        return;
    }
    const _0xa9e567 = _0x5d460f['x'] + _0x5d460f['width'] / 0x2;
    const _0xcbd759 = _0x5d460f['y'] + _0x5d460f['height'] / 0x2;
    if (_0x287396 !== null && _0x72a9ad['polygon'] && Math['hypot'](_0xa9e567 - _0x287396, _0xcbd759 - _0xb49bec) < 0x1) {
        return;
    }
    _0x287396 = _0xa9e567;
    _0xb49bec = _0xcbd759;
    const _0x52c1a2 = Math['floor'](_0xa9e567 / _0x1c47a1);
    const _0x3e6f16 = Math['floor'](_0xcbd759 / _0x1c47a1);
    const _0x5dc4bd = Math['max'](0x0, _0x52c1a2 - 0x6);
    const _0x252683 = Math['min'](_0x89a621['columns'] - 0x1, _0x52c1a2 + 0x6);
    const _0x4f6f10 = Math['max'](0x0, _0x3e6f16 - 0x6);
    const _0x4a6ae9 = Math['min'](_0x89a621['rows'] - 0x1, _0x3e6f16 + 0x6);
    const _0x36948d = [];
    for (let _0x34906d = _0x4f6f10; _0x34906d <= _0x4a6ae9; _0x34906d++) {
        for (let _0x33985d = _0x5dc4bd; _0x33985d <= _0x252683; _0x33985d++) {
            if (_0x50d886['has'](_0x33985d + ',' + _0x34906d))
                _0x36948d['push'](_0x33985d, _0x34906d);
        }
    }
    const _0x195777 = 0.001;
    const _0x47962f = new Set();
    const _0x3e147c = [];
    for (let _0x382d04 = 0x0; _0x382d04 < _0x36948d['length']; _0x382d04 += 0x2) {
        const _0x27b25c = _0x36948d[_0x382d04], _0x5a3a67 = _0x36948d[_0x382d04 + 0x1];
        const _0x3fff73 = [
            _0x27b25c * _0x1c47a1,
            _0x5a3a67 * _0x1c47a1,
            _0x27b25c * _0x1c47a1 + _0x1c47a1,
            _0x5a3a67 * _0x1c47a1,
            _0x27b25c * _0x1c47a1,
            _0x5a3a67 * _0x1c47a1 + _0x1c47a1,
            _0x27b25c * _0x1c47a1 + _0x1c47a1,
            _0x5a3a67 * _0x1c47a1 + _0x1c47a1
        ];
        for (let _0x555bb2 = 0x0; _0x555bb2 < _0x3fff73['length']; _0x555bb2 += 0x2) {
            const _0x484820 = _0x3fff73[_0x555bb2], _0xd891 = _0x3fff73[_0x555bb2 + 0x1];
            const _0x3956db = Math['atan2'](_0xd891 - _0xcbd759, _0x484820 - _0xa9e567);
            const _0x2caf09 = Math['round'](_0x3956db * 0x4e20);
            if (!_0x47962f['has'](_0x2caf09 - 0x1)) {
                _0x47962f['add'](_0x2caf09 - 0x1);
                _0x3e147c['push'](_0x3956db - _0x195777);
            }
            if (!_0x47962f['has'](_0x2caf09)) {
                _0x47962f['add'](_0x2caf09);
                _0x3e147c['push'](_0x3956db);
            }
            if (!_0x47962f['has'](_0x2caf09 + 0x1)) {
                _0x47962f['add'](_0x2caf09 + 0x1);
                _0x3e147c['push'](_0x3956db + _0x195777);
            }
        }
    }
    _0x3e147c['sort']((_0x462275, _0x5eae97) => _0x462275 - _0x5eae97);
    const _0x490506 = 0xc * _0x1c47a1;
    const _0x1f5575 = _0x4c1291 => {
        const _0x34c491 = Math['cos'](_0x4c1291);
        const _0x4b0d5c = Math['sin'](_0x4c1291);
        let _0x26a1e8 = _0x490506;
        for (let _0x581dfd = 0x0; _0x581dfd < _0x36948d['length']; _0x581dfd += 0x2) {
            const _0x2e57db = _0x36948d[_0x581dfd], _0x3b109d = _0x36948d[_0x581dfd + 0x1];
            const _0x5d14fe = _0x2e57db * _0x1c47a1, _0x542316 = _0x3b109d * _0x1c47a1;
            const _0x5e0f98 = _0x5d14fe + _0x1c47a1, _0xf23221 = _0x542316 + _0x1c47a1;
            const _0x12cea6 = _0x5d14fe + _0x1c47a1 * 0.5, _0x4046e4 = _0x542316 + _0x1c47a1 * 0.5;
            const _0x5aaa2f = Math['abs'](_0x12cea6 - _0xa9e567) + Math['abs'](_0x4046e4 - _0xcbd759);
            if (_0x5aaa2f > _0x26a1e8 + _0x1c47a1 * 1.5)
                continue;
            let _0x2d1fcf, _0x14d72c, _0x140841;
            _0x2d1fcf = -_0x4b0d5c * _0x1c47a1;
            if (Math['abs'](_0x2d1fcf) >= 1e-10) {
                _0x14d72c = -(_0x542316 - _0xcbd759) * _0x1c47a1 / _0x2d1fcf;
                _0x140841 = ((_0x5d14fe - _0xa9e567) * _0x4b0d5c - (_0x542316 - _0xcbd759) * _0x34c491) / _0x2d1fcf;
                if (_0x14d72c > 0.001 && _0x140841 >= 0x0 && _0x140841 <= 0x1 && _0x14d72c < _0x26a1e8)
                    _0x26a1e8 = _0x14d72c;
            }
            _0x2d1fcf = _0x34c491 * _0x1c47a1;
            if (Math['abs'](_0x2d1fcf) >= 1e-10) {
                _0x14d72c = (_0x5e0f98 - _0xa9e567) * _0x1c47a1 / _0x2d1fcf;
                _0x140841 = ((_0x5e0f98 - _0xa9e567) * _0x4b0d5c - (_0x542316 - _0xcbd759) * _0x34c491) / _0x2d1fcf;
                if (_0x14d72c > 0.001 && _0x140841 >= 0x0 && _0x140841 <= 0x1 && _0x14d72c < _0x26a1e8)
                    _0x26a1e8 = _0x14d72c;
            }
            _0x2d1fcf = _0x4b0d5c * _0x1c47a1;
            if (Math['abs'](_0x2d1fcf) >= 1e-10) {
                _0x14d72c = (_0xf23221 - _0xcbd759) * _0x1c47a1 / _0x2d1fcf;
                _0x140841 = ((_0x5e0f98 - _0xa9e567) * _0x4b0d5c - (_0xf23221 - _0xcbd759) * _0x34c491) / _0x2d1fcf;
                if (_0x14d72c > 0.001 && _0x140841 >= 0x0 && _0x140841 <= 0x1 && _0x14d72c < _0x26a1e8)
                    _0x26a1e8 = _0x14d72c;
            }
            _0x2d1fcf = -_0x34c491 * _0x1c47a1;
            if (Math['abs'](_0x2d1fcf) >= 1e-10) {
                _0x14d72c = -(_0x5d14fe - _0xa9e567) * _0x1c47a1 / _0x2d1fcf;
                _0x140841 = ((_0x5d14fe - _0xa9e567) * _0x4b0d5c - (_0xf23221 - _0xcbd759) * _0x34c491) / _0x2d1fcf;
                if (_0x14d72c > 0.001 && _0x140841 >= 0x0 && _0x140841 <= 0x1 && _0x14d72c < _0x26a1e8)
                    _0x26a1e8 = _0x14d72c;
            }
        }
        const _0xe6a39 = _0x26a1e8 < _0x490506 ? _0x26a1e8 + 0x2 : _0x26a1e8;
        return {
            'x': _0xa9e567 + _0x34c491 * _0xe6a39,
            'y': _0xcbd759 + _0x4b0d5c * _0xe6a39
        };
    };
    const _0xa7c560 = [];
    for (let _0x294d75 = 0x0; _0x294d75 < _0x3e147c['length']; _0x294d75++) {
        const _0x318f26 = _0x1f5575(_0x3e147c[_0x294d75]);
        _0xa7c560['push'](_0x318f26['x'], _0x318f26['y']);
    }
    _0x72a9ad['polygon'] = _0xa7c560['length'] >= 0x6 ? _0xa7c560 : null;
}
function _0x5c95cb(_0x5b281e, _0x5ec4aa, _0x5e7bb7) {
    if (_0x5d460f['isDead'])
        return;
    if (!_0x20913d)
        return;
    const {
        floorTiles: _0x2a8f34,
        wallTiles: _0x398aa9
    } = _0x20913d;
    if (_0x2a8f34['length'] === 0x0)
        return;
    const _0x5f4b27 = _0x369081['SHADOW'];
    const _0x409592 = _0x369081['MAP']['tileSize'];
    const _0x1aa8b0 = _0x369081['CAMERA']['width'];
    const _0x4d0caf = _0x369081['CAMERA']['height'];
    if (!_0x369081['SHADOW']['_buf'] || _0x369081['SHADOW']['_buf']['width'] !== _0x1aa8b0 || _0x369081['SHADOW']['_buf']['height'] !== _0x4d0caf) {
        _0x369081['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x369081['SHADOW']['_buf']['width'] = _0x1aa8b0;
        _0x369081['SHADOW']['_buf']['height'] = _0x4d0caf;
    }
    const _0x172ac5 = _0x369081['SHADOW']['_buf'];
    const _0x22b562 = _0x172ac5['getContext']('2d');
    _0x22b562['clearRect'](0x0, 0x0, _0x1aa8b0, _0x4d0caf);
    const _0x35a39e = _0x5d460f['x'] + _0x5d460f['width'] / 0x2;
    const _0x232927 = _0x5d460f['y'] + _0x5d460f['height'] / 0x2;
    const _0x5d416d = Math['floor'](_0x35a39e / _0x409592);
    const _0x36958f = Math['floor'](_0x232927 / _0x409592);
    _0x22b562['fillStyle'] = 'rgba(0,0,0,0.92)';
    _0x22b562['beginPath']();
    for (const {
                c: _0x37a7a9,
                r: _0x48542c
            } of _0x2a8f34) {
        if (Math['abs'](_0x37a7a9 - _0x5d416d) > 0x7 || Math['abs'](_0x48542c - _0x36958f) > 0x7)
            continue;
        const _0x19c598 = Math['round'](_0x37a7a9 * _0x409592 - _0x5ec4aa), _0x2f48c5 = Math['round'](_0x48542c * _0x409592 - _0x5e7bb7);
        if (_0x19c598 > _0x1aa8b0 || _0x2f48c5 > _0x4d0caf || _0x19c598 + _0x409592 < 0x0 || _0x2f48c5 + _0x409592 < 0x0)
            continue;
        _0x22b562['rect'](_0x19c598, _0x2f48c5, _0x409592 + 0x1, _0x409592 + 0x1);
    }
    _0x22b562['fill']();
    if (_0x398aa9['length'] > 0x0) {
        _0x22b562['globalCompositeOperation'] = 'destination-out';
        _0x22b562['fillStyle'] = 'rgba(0,0,0,1)';
        _0x22b562['beginPath']();
        for (const {
                    c: _0x3ebe81,
                    r: _0xe4874
                } of _0x398aa9) {
            if (Math['abs'](_0x3ebe81 - _0x5d416d) > 0x7 || Math['abs'](_0xe4874 - _0x36958f) > 0x7)
                continue;
            const _0x25cdb7 = Math['round'](_0x3ebe81 * _0x409592 - _0x5ec4aa), _0x39ea2f = Math['round'](_0xe4874 * _0x409592 - _0x5e7bb7);
            if (_0x25cdb7 > _0x1aa8b0 || _0x39ea2f > _0x4d0caf || _0x25cdb7 + _0x409592 < 0x0 || _0x39ea2f + _0x409592 < 0x0)
                continue;
            _0x22b562['rect'](_0x25cdb7, _0x39ea2f, _0x409592, _0x409592);
        }
        _0x22b562['fill']();
        _0x22b562['globalCompositeOperation'] = 'source-over';
    }
    if (_0x5f4b27['polygon'] && _0x5f4b27['polygon']['length'] >= 0x6) {
        _0x22b562['globalCompositeOperation'] = 'destination-out';
        const _0x37a01b = _0x5f4b27['polygon'];
        _0x22b562['beginPath']();
        _0x22b562['moveTo'](_0x37a01b[0x0] - _0x5ec4aa, _0x37a01b[0x1] - _0x5e7bb7);
        for (let _0x441513 = 0x2; _0x441513 < _0x37a01b['length']; _0x441513 += 0x2) {
            _0x22b562['lineTo'](_0x37a01b[_0x441513] - _0x5ec4aa, _0x37a01b[_0x441513 + 0x1] - _0x5e7bb7);
        }
        _0x22b562['closePath']();
        _0x22b562['fill']();
        _0x22b562['globalCompositeOperation'] = 'source-over';
    }
    _0x5b281e['drawImage'](_0x172ac5, 0x0, 0x0);
}
function _0x2d56ca(_0x4c8b7c) {
    let _0x2f3330 = 0x0, _0x2b1fc1 = 0x0;
    const _0x163a56 = _0x369081['INPUTS']['mouseX'] / _0x369081['SYSTEM']['viewScale'];
    const _0x3514c6 = _0x369081['INPUTS']['mouseY'] / _0x369081['SYSTEM']['viewScale'];
    const _0x59fc71 = _0x5d460f['x'] - _0x369081['CAMERA']['x'] + _0x5d460f['width'] / 0x2;
    const _0x169b18 = _0x5d460f['y'] - _0x369081['CAMERA']['y'] + _0x5d460f['height'] / 0x2;
    const _0x1c6b86 = Math['atan2'](_0x3514c6 - _0x169b18, _0x163a56 - _0x59fc71);
    if (_0x1bb292 !== 0x0 || _0x504dcd !== 0x0) {
        _0x2f3330 = _0x1bb292;
        _0x2b1fc1 = _0x504dcd;
    } else if (_0x572cba) {
        let _0x12afc8 = 0x0, _0x25e33e = 0x0;
        if (_0x369081['INPUTS']['keys']['w'] || _0x369081['INPUTS']['keys']['arrowup'])
            _0x12afc8 += 0x1;
        if (_0x369081['INPUTS']['keys']['s'] || _0x369081['INPUTS']['keys']['arrowdown'])
            _0x12afc8 -= 0x1;
        if (_0x369081['INPUTS']['keys']['d'] || _0x369081['INPUTS']['keys']['arrowright'])
            _0x25e33e += 0x1;
        if (_0x369081['INPUTS']['keys']['a'] || _0x369081['INPUTS']['keys']['arrowleft'])
            _0x25e33e -= 0x1;
        if (_0x12afc8 !== 0x0 || _0x25e33e !== 0x0) {
            const _0x4ac57f = _0x1c6b86 + Math['atan2'](_0x25e33e, _0x12afc8);
            _0x2f3330 = Math['cos'](_0x4ac57f);
            _0x2b1fc1 = Math['sin'](_0x4ac57f);
        }
    } else {
        if (_0x369081['INPUTS']['keys']['w'] || _0x369081['INPUTS']['keys']['arrowup'])
            _0x2b1fc1 -= 0x1;
        if (_0x369081['INPUTS']['keys']['s'] || _0x369081['INPUTS']['keys']['arrowdown'])
            _0x2b1fc1 += 0x1;
        if (_0x369081['INPUTS']['keys']['a'] || _0x369081['INPUTS']['keys']['arrowleft'])
            _0x2f3330 -= 0x1;
        if (_0x369081['INPUTS']['keys']['d'] || _0x369081['INPUTS']['keys']['arrowright'])
            _0x2f3330 += 0x1;
        const _0x267e48 = _0x2f3330 !== 0x0 || _0x2b1fc1 !== 0x0;
        if (_0x267e48) {
            const _0x22ae81 = Math['sqrt'](_0x2f3330 * _0x2f3330 + _0x2b1fc1 * _0x2b1fc1);
            _0x2f3330 /= _0x22ae81;
            _0x2b1fc1 /= _0x22ae81;
        }
    }
    if (_0x369081['GAME_STATE'] === 'NIGHT' && _0x15c275 === 'Skinwalker') {
        if (_0x369081['NIGHT_ABILITY_OPEN'] || !_0x369081['CURRENT_TARGET']) {
            _0x2f3330 = 0x0;
            _0x2b1fc1 = 0x0;
            _0x5d460f['vx'] = 0x0;
            _0x5d460f['vy'] = 0x0;
            _0x5d460f['x'] = _0x369081['MAP']['columns'] * _0x369081['MAP']['tileSize'] / 0x2 - _0x5d460f['width'] / 0x2;
            _0x5d460f['y'] = _0x369081['MAP']['rows'] * _0x369081['MAP']['tileSize'] / 0x2 - _0x5d460f['height'] / 0x2;
        }
    }
    const _0x18bc2e = _0x2f3330 !== 0x0 || _0x2b1fc1 !== 0x0;
    const _0x485106 = (_0x369081['INPUTS']['keys']['shift'] || _0x23aaf7 || _0xb54c33) && _0x18bc2e;
    _0x5d460f['bopTimer'] = _0x485106 ? _0x5d460f['bopTimer'] + _0x4c8b7c : 0x0;
    _0x5d460f['scale'] = 0x1 + (_0x5d460f['bopTimer'] > 0x0 ? Math['sin'](_0x5d460f['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0xd10e70 = Math['pow'](0.001, _0x4c8b7c);
    const _0x2d43e7 = _0x485106 ? 0x74a : 0x5d5;
    _0x5d460f['vx'] += _0x2f3330 * _0x2d43e7 * _0x4c8b7c;
    _0x5d460f['vy'] += _0x2b1fc1 * _0x2d43e7 * _0x4c8b7c;
    _0x5d460f['vx'] *= _0xd10e70;
    _0x5d460f['vy'] *= _0xd10e70;
    _0x5d460f['x'] += _0x5d460f['vx'] * _0x4c8b7c;
    _0x5d460f['y'] += _0x5d460f['vy'] * _0x4c8b7c;
    for (let _0x2b1b4e = 0x0; _0x2b1b4e < 0x3; _0x2b1b4e++)
        _0x3c8cd0();
    for (let _0x119109 = 0x0; _0x119109 < 0x2; _0x119109++)
        _0x27c713();
    for (let _0x426d3c = 0x0; _0x426d3c < 0x2; _0x426d3c++)
        _0x27d228();
    if (_0x5d460f['x'] < 0x0)
        _0x5d460f['x'] = 0x0;
    if (_0x5d460f['y'] < 0x0)
        _0x5d460f['y'] = 0x0;
    if (_0x5d460f['x'] + _0x5d460f['width'] > _0x369081['MAP']['columns'] * _0x369081['MAP']['tileSize'])
        _0x5d460f['x'] = _0x369081['MAP']['columns'] * _0x369081['MAP']['tileSize'] - _0x5d460f['width'];
    if (_0x5d460f['y'] + _0x5d460f['height'] > _0x369081['MAP']['rows'] * _0x369081['MAP']['tileSize'])
        _0x5d460f['y'] = _0x369081['MAP']['rows'] * _0x369081['MAP']['tileSize'] - _0x5d460f['height'];
    if (_0x257c57) {
        _0x5d460f['angle'] = _0xf02424 + Math['PI'] / 0x2;
    } else if (_0x1bb292 !== 0x0 || _0x504dcd !== 0x0) {
        _0x5d460f['angle'] = Math['atan2'](_0x504dcd, _0x1bb292) + Math['PI'] / 0x2;
    } else if (!_0x1edffa) {
        _0x5d460f['angle'] = _0x1c6b86 + Math['PI'] / 0x2;
    }
    const _0x4593b1 = _0x5d460f['x'] + _0x5d460f['width'] / 0x2 - _0x369081['CAMERA']['width'] / 0x2;
    const _0x438c6a = _0x5d460f['y'] + _0x5d460f['height'] / 0x2 - _0x369081['CAMERA']['height'] / 0x2;
    if (_0x369081['CAMERA']['x'] === null || isNaN(_0x369081['CAMERA']['x']) || !isFinite(_0x369081['CAMERA']['x'])) {
        _0x369081['CAMERA']['x'] = _0x4593b1;
        _0x369081['CAMERA']['y'] = _0x438c6a;
    } else {
        const _0x1d6bc8 = 0x1 - Math['exp'](-Math['max'](0x0, _0x4c8b7c) * 0x28);
        _0x369081['CAMERA']['x'] += (_0x4593b1 - _0x369081['CAMERA']['x']) * _0x1d6bc8;
        _0x369081['CAMERA']['y'] += (_0x438c6a - _0x369081['CAMERA']['y']) * _0x1d6bc8;
    }
    for (const _0x485806 in _0x4ef53b) {
        const _0x441ee4 = _0x4ef53b[_0x485806];
        if (_0x441ee4['renderX'] === undefined) {
            _0x441ee4['renderX'] = _0x441ee4['x'];
            _0x441ee4['renderY'] = _0x441ee4['y'];
            _0x441ee4['renderAngle'] = _0x441ee4['angle'] || 0x0;
        }
        const _0x1a3bd7 = _0x441ee4['x'] + (_0x441ee4['vx'] || 0x0) * _0x4c8b7c;
        const _0x256f05 = _0x441ee4['y'] + (_0x441ee4['vy'] || 0x0) * _0x4c8b7c;
        _0x441ee4['x'] = _0x1a3bd7;
        _0x441ee4['y'] = _0x256f05;
        const _0x395e82 = 0x1 - Math['exp'](-_0x4c8b7c * 0x12);
        const _0x4725be = _0x441ee4['x'] - _0x441ee4['renderX'], _0x4a0b46 = _0x441ee4['y'] - _0x441ee4['renderY'];
        const _0xa45486 = Math['sqrt'](_0x4725be * _0x4725be + _0x4a0b46 * _0x4a0b46);
        const _0x1e6b71 = 0xc8;
        if (_0xa45486 > _0x1e6b71) {
            _0x441ee4['renderX'] = _0x441ee4['x'] - _0x4725be / _0xa45486 * _0x1e6b71;
            _0x441ee4['renderY'] = _0x441ee4['y'] - _0x4a0b46 / _0xa45486 * _0x1e6b71;
        }
        _0x441ee4['renderX'] += (_0x441ee4['x'] - _0x441ee4['renderX']) * _0x395e82;
        _0x441ee4['renderY'] += (_0x441ee4['y'] - _0x441ee4['renderY']) * _0x395e82;
        let _0x26844a = (_0x441ee4['angle'] || 0x0) - _0x441ee4['renderAngle'];
        while (_0x26844a < -Math['PI'])
            _0x26844a += Math['PI'] * 0x2;
        while (_0x26844a > Math['PI'])
            _0x26844a -= Math['PI'] * 0x2;
        _0x441ee4['renderAngle'] += _0x26844a * (0x1 - Math['exp'](-_0x4c8b7c * 0x14));
    }
    if (_0x369081['GAME_STATE'] === 'NIGHT') {
        _0x452f54 = Math['min'](0.6, _0x452f54 + _0x4c8b7c * 0.5);
    } else {
        _0x452f54 = Math['max'](0x0, _0x452f54 - _0x4c8b7c * 0.5);
    }
    if (_0x2a2faf > 0x0) {
        if (performance['now']() > _0x3eb425) {
            _0x2a2faf = Math['max'](0x0, _0x2a2faf - _0x4c8b7c * 0x2);
        }
    }
    _0x136a11();
    _0x39a85b();
}
function _0x430686(_0x1738ea, _0x14edf6, _0x556252, _0x1980e9, _0x133635 = !![]) {
    _0x1738ea['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x3938b2 = _0x1738ea['measureText'](_0x14edf6)['width'];
    const _0x1f4f95 = _0x3938b2 + 0x18;
    const _0x4e5012 = 0x1c;
    _0x1738ea['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x1738ea['beginPath']();
    if (_0x1738ea['roundRect']) {
        _0x1738ea['roundRect'](_0x556252 - _0x1f4f95 / 0x2, _0x1980e9 - _0x4e5012, _0x1f4f95, _0x4e5012, 0x6);
    } else {
        _0x1738ea['rect'](_0x556252 - _0x1f4f95 / 0x2, _0x1980e9 - _0x4e5012, _0x1f4f95, _0x4e5012);
    }
    _0x1738ea['fill']();
    if (_0x133635) {
        _0x1738ea['beginPath']();
        _0x1738ea['moveTo'](_0x556252 - 0x6, _0x1980e9);
        _0x1738ea['lineTo'](_0x556252 + 0x6, _0x1980e9);
        _0x1738ea['lineTo'](_0x556252, _0x1980e9 + 0x6);
        _0x1738ea['fill']();
    }
    _0x1738ea['fillStyle'] = '#ffffff';
    _0x1738ea['textAlign'] = 'center';
    _0x1738ea['textBaseline'] = 'middle';
    _0x1738ea['fillText'](_0x14edf6, _0x556252, _0x1980e9 - _0x4e5012 / 0x2 + 0x1);
}
function _0xb33b05(_0xb717d7, _0x3bbf9b, _0x5bf872, _0x1e081c) {
    if (!_0x3bbf9b || _0x3bbf9b['length'] === 0x0)
        return;
    let _0x176e0e = _0x1e081c;
    for (let _0x27bf3c = 0x0; _0x27bf3c < _0x3bbf9b['length']; _0x27bf3c++) {
        _0x430686(_0xb717d7, _0x3bbf9b[_0x27bf3c]['text'], _0x5bf872, _0x176e0e, _0x27bf3c === 0x0);
        _0x176e0e -= 0x24;
    }
}
function _0x4dc3c6() {
    if (!_0x369081['SYSTEM']['isReady'])
        return;
    if (_0x369081['MAP']['layers'] && _0x369081['MAP']['layers']['length'] > 0x0 && _0x203248['complete'] && _0x203248['naturalWidth'] > 0x0) {
        if (!_0x369081['MAP']['_prerenderedWithTileset'] || !_0x369081['MAP']['bgChunks'] || _0x369081['MAP']['bgChunks']['length'] === 0x0) {
            _0x489414();
        }
    }
    if (!_0x369081['MAP']['bgChunks'] || _0x369081['MAP']['bgChunks']['length'] === 0x0 || !_0x369081['MAP']['bgChunks'][0x0] || _0x369081['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0xe1644['fillStyle'] = '#000000';
    _0xe1644['fillRect'](0x0, 0x0, _0x5e2569['width'], _0x5e2569['height']);
    _0xe1644['save']();
    try {
        _0xe1644['scale'](_0x369081['SYSTEM']['viewScale'], _0x369081['SYSTEM']['viewScale']);
        _0xe1644['imageSmoothingEnabled'] = ![];
        const _0x3f3c0f = Math['floor'](_0x369081['CAMERA']['x'] || 0x0);
        const _0x4d1dc9 = Math['floor'](_0x369081['CAMERA']['y'] || 0x0);
        const _0x30efac = Math['max'](0x0, Math['floor'](_0x3f3c0f / _0x369081['MAP']['chunkSize']));
        const _0x5f4cbc = Math['min'](_0x369081['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x3f3c0f + _0x369081['CAMERA']['width']) / _0x369081['MAP']['chunkSize']));
        const _0x546d61 = Math['max'](0x0, Math['floor'](_0x4d1dc9 / _0x369081['MAP']['chunkSize']));
        const _0x2bbdfa = Math['min'](_0x369081['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x4d1dc9 + _0x369081['CAMERA']['height']) / _0x369081['MAP']['chunkSize']));
        for (let _0xbd4f3e = _0x546d61; _0xbd4f3e <= _0x2bbdfa; _0xbd4f3e++)
            for (let _0x860e5f = _0x30efac; _0x860e5f <= _0x5f4cbc; _0x860e5f++) {
                const _0x239c0e = _0x860e5f * _0x369081['MAP']['chunkSize'] - _0x3f3c0f;
                const _0x30c14c = _0xbd4f3e * _0x369081['MAP']['chunkSize'] - _0x4d1dc9;
                _0xe1644['drawImage'](_0x369081['MAP']['bgChunks'][_0xbd4f3e][_0x860e5f], _0x239c0e, _0x30c14c, _0x369081['MAP']['chunkSize'] + 0x1, _0x369081['MAP']['chunkSize'] + 0x1);
            }
        if (_0x1712f0['complete'] && _0x1712f0['naturalWidth'] > 0x0) {
            const _0x3122a1 = _0x369081['MAP']['tileSize'];
            const _0x434a87 = _0x3122a1 * 0xa;
            const _0x4c159f = _0x369081['MAP']['columns'] / 0x2 * _0x3122a1 - _0x434a87 / 0x2 - _0x3f3c0f;
            const _0x1c4ddd = _0x369081['MAP']['rows'] / 0x2 * _0x3122a1 - _0x434a87 / 0x2 - _0x4d1dc9;
            _0xe1644['imageSmoothingEnabled'] = ![];
            _0xe1644['drawImage'](_0x1712f0, _0x4c159f, _0x1c4ddd, _0x434a87, _0x434a87);
        }
        if (_0x20a85d['complete'] && _0x20a85d['naturalWidth'] > 0x0) {
            _0x369081['ENTITIES']['forEach'](_0x5c190e => {
                if (_0x5c190e['type'] !== 'table')
                    return;
                _0xe1644['save']();
                _0xe1644['imageSmoothingEnabled'] = ![];
                const _0x5d679d = _0x20a85d['naturalWidth'] >= _0x20a85d['naturalHeight'];
                const _0x482373 = _0x5c190e['w'] >= _0x5c190e['h'];
                if (_0x5d679d === _0x482373) {
                    _0xe1644['drawImage'](_0x20a85d, _0x5c190e['x'] - _0x3f3c0f, _0x5c190e['y'] - _0x4d1dc9, _0x5c190e['w'], _0x5c190e['h']);
                } else {
                    _0xe1644['translate'](_0x5c190e['x'] - _0x3f3c0f + _0x5c190e['w'] / 0x2, _0x5c190e['y'] - _0x4d1dc9 + _0x5c190e['h'] / 0x2);
                    _0xe1644['rotate'](Math['PI'] / 0x2);
                    _0xe1644['drawImage'](_0x20a85d, -_0x5c190e['h'] / 0x2, -_0x5c190e['w'] / 0x2, _0x5c190e['h'], _0x5c190e['w']);
                }
                _0xe1644['restore']();
            });
        } else {
            _0x369081['ENTITIES']['forEach'](_0xfab87f => {
                if (_0xfab87f['type'] !== 'table')
                    return;
                _0xe1644['save']();
                _0xe1644['fillStyle'] = '#6b4423';
                _0xe1644['fillRect'](_0xfab87f['x'] - _0x3f3c0f, _0xfab87f['y'] - _0x4d1dc9, _0xfab87f['w'], _0xfab87f['h']);
                _0xe1644['strokeStyle'] = '#422810';
                _0xe1644['lineWidth'] = 0x3;
                _0xe1644['strokeRect'](_0xfab87f['x'] - _0x3f3c0f + 0x1, _0xfab87f['y'] - _0x4d1dc9 + 0x1, _0xfab87f['w'] - 0x2, _0xfab87f['h'] - 0x2);
                _0xe1644['fillStyle'] = '#82532a';
                _0xe1644['fillRect'](_0xfab87f['x'] - _0x3f3c0f + 0x4, _0xfab87f['y'] - _0x4d1dc9 + 0x4, _0xfab87f['w'] - 0x8, _0xfab87f['h'] - 0x8);
                _0xe1644['restore']();
            });
        }
        if (_0x384fcc) {
            if (_0x369081['MAP']['wallChunks'] && _0x369081['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x5d5e26 = _0x546d61; _0x5d5e26 <= _0x2bbdfa; _0x5d5e26++) {
                    for (let _0x5be5a8 = _0x30efac; _0x5be5a8 <= _0x5f4cbc; _0x5be5a8++) {
                        if (!_0x369081['MAP']['wallChunks'][_0x5d5e26] || !_0x369081['MAP']['wallChunks'][_0x5d5e26][_0x5be5a8])
                            continue;
                        const _0xb04c14 = _0x5be5a8 * _0x369081['MAP']['chunkSize'] - _0x3f3c0f;
                        const _0x207a43 = _0x5d5e26 * _0x369081['MAP']['chunkSize'] - _0x4d1dc9;
                        _0xe1644['drawImage'](_0x369081['MAP']['wallChunks'][_0x5d5e26][_0x5be5a8], _0xb04c14, _0x207a43, _0x369081['MAP']['chunkSize'] + 0x1, _0x369081['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x396b75 = _0x546d61; _0x396b75 <= _0x2bbdfa; _0x396b75++) {
                for (let _0x45151d = _0x30efac; _0x45151d <= _0x5f4cbc; _0x45151d++) {
                    const _0x58d89d = _0x45151d * _0x369081['MAP']['chunkSize'] - _0x3f3c0f;
                    const _0x5c4f8a = _0x396b75 * _0x369081['MAP']['chunkSize'] - _0x4d1dc9;
                    _0xe1644['drawImage'](_0x369081['MAP']['fgChunks'][_0x396b75][_0x45151d], _0x58d89d, _0x5c4f8a, _0x369081['MAP']['chunkSize'] + 0x1, _0x369081['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x2d144d = _0x369081['GAME_STATE'] === 'NIGHT' && _0x15c275 === 'Skinwalker' && !_0x5d460f['isDead'];
        const _0xceb8f4 = _0x5d460f['x'] - _0x3f3c0f + _0x5d460f['width'] / 0x2;
        const _0x89df2b = _0x5d460f['y'] - _0x4d1dc9 + _0x5d460f['height'] / 0x2;
        const _0x43a546 = _0x5d460f['width'] * _0x5d460f['scale'] * 1.3;
        const _0x41d0e4 = _0x5d460f['height'] * _0x5d460f['scale'] * 1.3;
        for (const _0x3e7307 in _0x4ef53b) {
            const _0x2055cb = _0x4ef53b[_0x3e7307];
            if (_0x2055cb['isDead'])
                continue;
            const _0x18822e = (_0x2055cb['renderX'] ?? _0x2055cb['x']) - _0x3f3c0f + _0x2055cb['width'] / 0x2;
            const _0x40c2ca = (_0x2055cb['renderY'] ?? _0x2055cb['y']) - _0x4d1dc9 + _0x2055cb['height'] / 0x2;
            const _0x584129 = Math['min'](0x2, Math['max'](0.3, _0x2055cb['scale'] || 0x1));
            const _0x33e506 = _0x2055cb['width'] * _0x584129 * 1.3;
            const _0x557e29 = _0x2055cb['height'] * _0x584129 * 1.3;
            _0xe1644['save']();
            try {
                _0xe1644['translate'](_0x18822e, _0x40c2ca);
                _0xe1644['rotate'](_0x2055cb['renderAngle'] ?? 0x0);
                if (_0x2055cb['isDark'])
                    _0xe1644['filter'] = 'brightness(0)';
                _0x5765fb(_0xe1644, _0x2055cb['body'], _0x2055cb['eyes'], _0x33e506, _0x557e29);
                if (_0x3f2184['has'](parseInt(_0x3e7307)) && _0x2e35c8['complete'] && _0x2e35c8['naturalWidth'] > 0x0) {
                    _0xe1644['drawImage'](_0x2e35c8, -_0x33e506 / 0x2, -_0x557e29 / 0x2, _0x33e506, _0x557e29);
                }
                if (_0x2055cb['isDark'])
                    _0xe1644['filter'] = 'none';
            } finally {
                _0xe1644['restore']();
            }
            if (!_0x10b3c9((_0x2055cb['renderX'] ?? _0x2055cb['x']) + _0x2055cb['width'] / 0x2, (_0x2055cb['renderY'] ?? _0x2055cb['y']) + _0x2055cb['height'] / 0x2)) {
                _0xe1644['textAlign'] = 'center';
                _0xe1644['lineJoin'] = 'round';
                _0xe1644['lineWidth'] = 0x3;
                _0xe1644['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0xe1644['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0xe1644['fillStyle'] = _0x3f2184['has'](parseInt(_0x3e7307)) ? '#cc88ff' : '#ffffff';
                const _0x5c362f = _0x2055cb['isDark'] ? '???' : _0x2055cb['name'] + (_0x2055cb['isOwner'] ? '\x20[🗝️]' : '');
                _0xe1644['strokeText'](_0x5c362f, _0x18822e, _0x40c2ca - _0x557e29 / 0x2 - 0x10);
                _0xe1644['fillText'](_0x5c362f, _0x18822e, _0x40c2ca - _0x557e29 / 0x2 - 0x10);
            }
        }
        if (!_0x5d460f['isDead']) {
            _0xe1644['save']();
            try {
                _0xe1644['translate'](_0xceb8f4, _0x89df2b);
                _0xe1644['rotate'](_0x5d460f['angle']);
                if (_0x2d144d)
                    _0xe1644['filter'] = 'brightness(0)';
                _0x5765fb(_0xe1644, _0x5871c9, _0x28f9a7, _0x43a546, _0x41d0e4);
                if (_0x3f2184['has'](_0x24d029) && _0x2e35c8['complete'] && _0x2e35c8['naturalWidth'] > 0x0) {
                    _0xe1644['drawImage'](_0x2e35c8, -_0x43a546 / 0x2, -_0x41d0e4 / 0x2, _0x43a546, _0x41d0e4);
                }
                if (_0x2d144d)
                    _0xe1644['filter'] = 'none';
            } finally {
                _0xe1644['restore']();
            }
            if (!_0x10b3c9(_0x5d460f['x'] + _0x5d460f['width'] / 0x2, _0x5d460f['y'] + _0x5d460f['height'] / 0x2)) {
                _0xe1644['textAlign'] = 'center';
                _0xe1644['lineJoin'] = 'round';
                _0xe1644['lineWidth'] = 0x3;
                _0xe1644['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0xe1644['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0xe1644['fillStyle'] = _0x3f2184['has'](_0x24d029) ? '#cc88ff' : '#ffffff';
                const _0x5e6d5c = _0x2d144d ? '???' : _0x3f654c + (_0x1e06f4 ? '\x20[🗝️]' : '');
                _0xe1644['strokeText'](_0x5e6d5c, _0xceb8f4, _0x89df2b - _0x41d0e4 / 0x2 - 0x10);
                _0xe1644['fillText'](_0x5e6d5c, _0xceb8f4, _0x89df2b - _0x41d0e4 / 0x2 - 0x10);
            }
        }
        if (_0x369081['MAP']['wallChunks'] && _0x369081['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x212f2c = _0x546d61; _0x212f2c <= _0x2bbdfa; _0x212f2c++)
                for (let _0x168143 = _0x30efac; _0x168143 <= _0x5f4cbc; _0x168143++) {
                    if (!_0x369081['MAP']['wallChunks'][_0x212f2c] || !_0x369081['MAP']['wallChunks'][_0x212f2c][_0x168143])
                        continue;
                    const _0x11723a = _0x168143 * _0x369081['MAP']['chunkSize'] - _0x3f3c0f;
                    const _0x114b5c = _0x212f2c * _0x369081['MAP']['chunkSize'] - _0x4d1dc9;
                    _0xe1644['drawImage'](_0x369081['MAP']['wallChunks'][_0x212f2c][_0x168143], _0x11723a, _0x114b5c, _0x369081['MAP']['chunkSize'] + 0x1, _0x369081['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x3f0136 of _0x369081['ENTITIES']) {
            if (_0x3f0136['type'] !== 'npc')
                continue;
            const _0x546038 = _0x3f0136['x'] - _0x3f3c0f + _0x3f0136['w'] / 0x2;
            const _0x242eeb = _0x3f0136['y'] - _0x4d1dc9 + _0x3f0136['h'] / 0x2;
            const _0x384b5e = _0x3f0136['w'];
            const _0x1d45c2 = _0x3f0136['h'];
            _0xe1644['save']();
            _0xe1644['translate'](_0x546038, _0x242eeb);
            _0xe1644['rotate'](_0x3f0136['angle'] !== undefined ? _0x3f0136['angle'] : 0x0);
            _0x5765fb(_0xe1644, _0x3f0136['body'] || 'yanito932.png', _0x3f0136['eyes'], _0x384b5e, _0x1d45c2);
            _0xe1644['restore']();
            _0xe1644['textAlign'] = 'center';
            _0xe1644['lineJoin'] = 'round';
            _0xe1644['lineWidth'] = 0x3;
            _0xe1644['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0xe1644['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0xe1644['fillStyle'] = '#aaaaaa';
            _0xe1644['strokeText'](_0x3f0136['name'] || 'NPC', _0x546038, _0x242eeb - _0x1d45c2 / 0x2 - 0x10);
            _0xe1644['fillText'](_0x3f0136['name'] || 'NPC', _0x546038, _0x242eeb - _0x1d45c2 / 0x2 - 0x10);
        }
        if (_0x5d460f['isDead']) {
            for (const _0x376bd9 in _0x4ef53b) {
                const _0x55a4c9 = _0x4ef53b[_0x376bd9];
                if (!_0x55a4c9['isDead'])
                    continue;
                const _0x28e803 = (_0x55a4c9['renderX'] ?? _0x55a4c9['x']) - _0x3f3c0f + _0x55a4c9['width'] / 0x2;
                const _0x32f937 = (_0x55a4c9['renderY'] ?? _0x55a4c9['y']) - _0x4d1dc9 + _0x55a4c9['height'] / 0x2;
                const _0x4cabad = _0x55a4c9['width'] * (_0x55a4c9['scale'] || 0x1) * 1.3;
                const _0x1c3663 = _0x55a4c9['height'] * (_0x55a4c9['scale'] || 0x1) * 1.3;
                _0xe1644['save']();
                try {
                    _0xe1644['translate'](_0x28e803, _0x32f937);
                    _0xe1644['rotate'](_0x55a4c9['renderAngle'] ?? 0x0);
                    _0xe1644['globalAlpha'] = 0.3;
                    _0x5765fb(_0xe1644, _0x55a4c9['body'], _0x55a4c9['eyes'], _0x4cabad, _0x1c3663);
                } finally {
                    _0xe1644['restore']();
                }
                if (!_0x10b3c9((_0x55a4c9['renderX'] ?? _0x55a4c9['x']) + _0x55a4c9['width'] / 0x2, (_0x55a4c9['renderY'] ?? _0x55a4c9['y']) + _0x55a4c9['height'] / 0x2)) {
                    _0xe1644['save']();
                    _0xe1644['globalAlpha'] = 0.3;
                    _0xe1644['textAlign'] = 'center';
                    _0xe1644['lineJoin'] = 'round';
                    _0xe1644['lineWidth'] = 0x3;
                    _0xe1644['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0xe1644['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0xe1644['fillStyle'] = '#ffffff';
                    const _0x59683c = _0x55a4c9['name'] + (_0x55a4c9['isOwner'] ? '\x20[🗝️]' : '');
                    _0xe1644['strokeText'](_0x59683c, _0x28e803, _0x32f937 - _0x1c3663 / 0x2 - 0x10);
                    _0xe1644['fillText'](_0x59683c, _0x28e803, _0x32f937 - _0x1c3663 / 0x2 - 0x10);
                    _0xe1644['restore']();
                }
            }
            _0xe1644['save']();
            try {
                _0xe1644['translate'](_0xceb8f4, _0x89df2b);
                _0xe1644['rotate'](_0x5d460f['angle']);
                _0xe1644['globalAlpha'] = 0.3;
                _0x5765fb(_0xe1644, _0x5871c9, _0x28f9a7, _0x43a546, _0x41d0e4);
            } finally {
                _0xe1644['restore']();
            }
            if (!_0x10b3c9(_0x5d460f['x'] + _0x5d460f['width'] / 0x2, _0x5d460f['y'] + _0x5d460f['height'] / 0x2)) {
                _0xe1644['save']();
                _0xe1644['globalAlpha'] = 0.3;
                _0xe1644['textAlign'] = 'center';
                _0xe1644['lineJoin'] = 'round';
                _0xe1644['lineWidth'] = 0x3;
                _0xe1644['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0xe1644['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0xe1644['fillStyle'] = '#ffffff';
                const _0x1c77b5 = _0x3f654c + (_0x1e06f4 ? '\x20[🗝️]' : '');
                _0xe1644['strokeText'](_0x1c77b5, _0xceb8f4, _0x89df2b - _0x41d0e4 / 0x2 - 0x10);
                _0xe1644['fillText'](_0x1c77b5, _0xceb8f4, _0x89df2b - _0x41d0e4 / 0x2 - 0x10);
                _0xe1644['restore']();
            }
        }
        for (let _0x11ccfc = _0x546d61; _0x11ccfc <= _0x2bbdfa; _0x11ccfc++)
            for (let _0x3ba615 = _0x30efac; _0x3ba615 <= _0x5f4cbc; _0x3ba615++) {
                const _0x5b6077 = _0x3ba615 * _0x369081['MAP']['chunkSize'] - _0x3f3c0f;
                const _0x471a36 = _0x11ccfc * _0x369081['MAP']['chunkSize'] - _0x4d1dc9;
                _0xe1644['drawImage'](_0x369081['MAP']['fgChunks'][_0x11ccfc][_0x3ba615], _0x5b6077, _0x471a36, _0x369081['MAP']['chunkSize'] + 0x1, _0x369081['MAP']['chunkSize'] + 0x1);
            }
        if (_0x369081['EDITOR']['enabled'] && _0x369081['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x165134 = _0x369081['INPUTS']['mouseX'] / _0x369081['SYSTEM']['viewScale'] + _0x369081['CAMERA']['x'];
            const _0x511d43 = _0x369081['INPUTS']['mouseY'] / _0x369081['SYSTEM']['viewScale'] + _0x369081['CAMERA']['y'];
            const _0xa6be8f = Math['floor'](_0x165134 / _0x369081['MAP']['tileSize']);
            const _0x528243 = Math['floor'](_0x511d43 / _0x369081['MAP']['tileSize']);
            if (_0xa6be8f >= 0x0 && _0xa6be8f < _0x369081['MAP']['columns'] && _0x528243 >= 0x0 && _0x528243 < _0x369081['MAP']['rows']) {
                const _0x4733d8 = _0xa6be8f * _0x369081['MAP']['tileSize'] - _0x3f3c0f;
                const _0x51737b = _0x528243 * _0x369081['MAP']['tileSize'] - _0x4d1dc9;
                _0xe1644['save']();
                _0xe1644['globalAlpha'] = 0.5;
                if (_0x369081['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x7a35a8 = _0x369081['EDITOR']['selectedTileGid'] - 0x1;
                    _0xe1644['drawImage'](_0x203248, _0x7a35a8 % _0x369081['MAP']['tilesetCols'] * _0x369081['MAP']['tileSize'], Math['floor'](_0x7a35a8 / _0x369081['MAP']['tilesetCols']) * _0x369081['MAP']['tileSize'], _0x369081['MAP']['tileSize'], _0x369081['MAP']['tileSize'], _0x4733d8, _0x51737b, _0x369081['MAP']['tileSize'], _0x369081['MAP']['tileSize']);
                } else {
                    _0xe1644['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0xe1644['fillRect'](_0x4733d8, _0x51737b, _0x369081['MAP']['tileSize'], _0x369081['MAP']['tileSize']);
                }
                _0xe1644['restore']();
            }
        }
        _0x5c95cb(_0xe1644, _0x3f3c0f, _0x4d1dc9);
        if (_0x452f54 > 0x0) {
            _0xe1644['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x452f54 + ')';
            _0xe1644['fillRect'](0x0, 0x0, _0x369081['CAMERA']['width'], _0x369081['CAMERA']['height']);
        }
        for (const _0xc14e5 in _0x4ef53b) {
            const _0x3d3d6d = _0x4ef53b[_0xc14e5];
            if (_0x3d3d6d['isDead'] && !_0x5d460f['isDead'])
                continue;
            const _0x2c2350 = (_0x3d3d6d['renderX'] ?? _0x3d3d6d['x']) - _0x3f3c0f + _0x3d3d6d['width'] / 0x2;
            const _0x1cbec3 = (_0x3d3d6d['renderY'] ?? _0x3d3d6d['y']) - _0x4d1dc9 + _0x3d3d6d['height'] / 0x2;
            _0xb33b05(_0xe1644, _0x3d3d6d['chats'], _0x2c2350, _0x1cbec3 - _0x3d3d6d['height'] / 0x2 - 0x20);
        }
        _0xb33b05(_0xe1644, _0x5d460f['chats'], _0xceb8f4, _0x89df2b - _0x5d460f['height'] / 0x2 - 0x20);
        if (_0x2a2faf > 0x0) {
            _0xe1644['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x2a2faf + ')';
            _0xe1644['fillRect'](0x0, 0x0, _0x369081['CAMERA']['width'], _0x369081['CAMERA']['height']);
        }
    } finally {
        _0xe1644['restore']();
    }
}
function _0x4f7310(_0x54da3b) {
    if (!_0x369081['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x4f7310);
    let _0x33afdd = (_0x54da3b - _0x369081['SYSTEM']['lastTime']) / 0x3e8;
    _0x369081['SYSTEM']['lastTime'] = _0x54da3b;
    if (_0x33afdd > 0.1)
        _0x33afdd = 0.1;
    if (_0x33afdd < 0x0 || isNaN(_0x33afdd))
        _0x33afdd = 0.016;
    if (_0x384fcc) {
        _0x435e02(_0x33afdd);
        _0x4dc3c6();
        return;
    }
    if (!_0x24d029)
        return;
    _0x2d56ca(_0x33afdd);
    _0x245c80['tick'](_0x54da3b);
    _0x4dc3c6();
}
function _0x489414() {
    if (_0x203248['complete'] && _0x203248['naturalWidth'] > 0x0) {
        _0x369081['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x562511 = Math['ceil'](_0x369081['MAP']['columns'] * _0x369081['MAP']['tileSize'] / _0x369081['MAP']['chunkSize']);
    const _0x4c8c12 = Math['ceil'](_0x369081['MAP']['rows'] * _0x369081['MAP']['tileSize'] / _0x369081['MAP']['chunkSize']);
    _0x369081['MAP']['bgChunks'] = [];
    _0x369081['MAP']['fgChunks'] = [];
    _0x369081['MAP']['wallChunks'] = [];
    for (let _0x4cc0a4 = 0x0; _0x4cc0a4 < _0x4c8c12; _0x4cc0a4++) {
        _0x369081['MAP']['bgChunks'][_0x4cc0a4] = [];
        _0x369081['MAP']['fgChunks'][_0x4cc0a4] = [];
        _0x369081['MAP']['wallChunks'][_0x4cc0a4] = [];
        for (let _0x582662 = 0x0; _0x582662 < _0x562511; _0x582662++) {
            const _0x2d336a = document['createElement']('canvas');
            _0x2d336a['width'] = _0x2d336a['height'] = _0x369081['MAP']['chunkSize'];
            const _0x354088 = document['createElement']('canvas');
            _0x354088['width'] = _0x354088['height'] = _0x369081['MAP']['chunkSize'];
            const _0x597f8c = document['createElement']('canvas');
            _0x597f8c['width'] = _0x597f8c['height'] = _0x369081['MAP']['chunkSize'];
            _0x369081['MAP']['bgChunks'][_0x4cc0a4][_0x582662] = _0x2d336a;
            _0x369081['MAP']['fgChunks'][_0x4cc0a4][_0x582662] = _0x354088;
            _0x369081['MAP']['wallChunks'][_0x4cc0a4][_0x582662] = _0x597f8c;
            _0xb40d06(_0x582662, _0x4cc0a4);
        }
    }
}
function _0xb40d06(_0x57f01e, _0x3ff0b5) {
    const _0x339eb2 = _0x369081['MAP']['bgChunks'][_0x3ff0b5][_0x57f01e]['getContext']('2d', { 'alpha': !![] });
    const _0xf38be4 = _0x369081['MAP']['fgChunks'][_0x3ff0b5][_0x57f01e]['getContext']('2d', { 'alpha': !![] });
    const _0x203881 = _0x369081['MAP']['wallChunks'][_0x3ff0b5] && _0x369081['MAP']['wallChunks'][_0x3ff0b5][_0x57f01e] ? _0x369081['MAP']['wallChunks'][_0x3ff0b5][_0x57f01e]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x339eb2['imageSmoothingEnabled'] = _0xf38be4['imageSmoothingEnabled'] = ![];
    if (_0x203881)
        _0x203881['imageSmoothingEnabled'] = ![];
    _0x339eb2['clearRect'](0x0, 0x0, _0x369081['MAP']['chunkSize'], _0x369081['MAP']['chunkSize']);
    _0xf38be4['clearRect'](0x0, 0x0, _0x369081['MAP']['chunkSize'], _0x369081['MAP']['chunkSize']);
    if (_0x203881)
        _0x203881['clearRect'](0x0, 0x0, _0x369081['MAP']['chunkSize'], _0x369081['MAP']['chunkSize']);
    const _0x1c1e24 = Math['floor'](_0x57f01e * _0x369081['MAP']['chunkSize'] / _0x369081['MAP']['tileSize']);
    const _0x43a79a = Math['ceil']((_0x57f01e + 0x1) * _0x369081['MAP']['chunkSize'] / _0x369081['MAP']['tileSize']);
    const _0x3ad442 = Math['floor'](_0x3ff0b5 * _0x369081['MAP']['chunkSize'] / _0x369081['MAP']['tileSize']);
    const _0x3d4420 = Math['ceil']((_0x3ff0b5 + 0x1) * _0x369081['MAP']['chunkSize'] / _0x369081['MAP']['tileSize']);
    const _0x2a64ab = 0.5;
    const _0x430608 = _0x369081['MAP']['tileSize'] - _0x2a64ab * 0x2;
    _0x369081['MAP']['layers']['forEach'](_0x197146 => {
        const _0x425b6d = _0x197146['name'] === 'walls';
        const _0x5e24b8 = _0x197146['name'] === 'trees' ? _0xf38be4 : _0x425b6d ? _0x203881 || _0x339eb2 : _0x339eb2;
        for (let _0x404614 = Math['max'](0x0, _0x3ad442); _0x404614 < Math['min'](_0x369081['MAP']['rows'], _0x3d4420); _0x404614++) {
            for (let _0x41643b = Math['max'](0x0, _0x1c1e24); _0x41643b < Math['min'](_0x369081['MAP']['columns'], _0x43a79a); _0x41643b++) {
                let _0x35b9fe = _0x197146['data'][_0x404614 * _0x369081['MAP']['columns'] + _0x41643b];
                if (_0x197146['name'] === 'floor2' && _0x369081['MAP']['doors'] && _0x369081['MAP']['doors'][_0x404614 * _0x369081['MAP']['columns'] + _0x41643b]) {
                    _0x35b9fe = 0x2;
                }
                if (_0x35b9fe > 0x0) {
                    const _0x49e6eb = _0x35b9fe - 0x1;
                    const _0x1d78b4 = _0x49e6eb % _0x369081['MAP']['tilesetCols'] * _0x369081['MAP']['tileSize'] + _0x2a64ab;
                    const _0x28d4eb = Math['floor'](_0x49e6eb / _0x369081['MAP']['tilesetCols']) * _0x369081['MAP']['tileSize'] + _0x2a64ab;
                    const _0x424b01 = _0x41643b * _0x369081['MAP']['tileSize'] - _0x57f01e * _0x369081['MAP']['chunkSize'];
                    const _0x471142 = _0x404614 * _0x369081['MAP']['tileSize'] - _0x3ff0b5 * _0x369081['MAP']['chunkSize'];
                    if (_0x35b9fe === 0x4) {
                        const _0x1476fb = 0x1;
                        const _0x4fcfac = _0x1476fb % _0x369081['MAP']['tilesetCols'] * _0x369081['MAP']['tileSize'] + _0x2a64ab;
                        const _0x35bf70 = Math['floor'](_0x1476fb / _0x369081['MAP']['tilesetCols']) * _0x369081['MAP']['tileSize'] + _0x2a64ab;
                        _0x339eb2['drawImage'](_0x203248, _0x4fcfac, _0x35bf70, _0x430608, _0x430608, _0x424b01, _0x471142, _0x369081['MAP']['tileSize'], _0x369081['MAP']['tileSize']);
                        let _0x3e67ce = _0x369081['MAP']['doors'] ? _0x369081['MAP']['doors'][_0x404614 * _0x369081['MAP']['columns'] + _0x41643b] : null;
                        if (!_0x3e67ce) {
                            const _0x2e8384 = _0x369081['MAP']['layers']['find'](_0x4b991c => _0x4b991c['name'] === 'walls');
                            const _0x12b7bb = _0x404614 > 0x0 && _0x2e8384 && _0x2e8384['data'][(_0x404614 - 0x1) * _0x369081['MAP']['columns'] + _0x41643b] > 0x0;
                            const _0x262fed = _0x404614 < _0x369081['MAP']['rows'] - 0x1 && _0x2e8384 && _0x2e8384['data'][(_0x404614 + 0x1) * _0x369081['MAP']['columns'] + _0x41643b] > 0x0;
                            const _0x45f3d9 = _0x41643b > 0x0 && _0x2e8384 && _0x2e8384['data'][_0x404614 * _0x369081['MAP']['columns'] + _0x41643b - 0x1] > 0x0;
                            const _0x121886 = _0x41643b < _0x369081['MAP']['columns'] - 0x1 && _0x2e8384 && _0x2e8384['data'][_0x404614 * _0x369081['MAP']['columns'] + _0x41643b + 0x1] > 0x0;
                            if (_0x45f3d9 && _0x121886)
                                _0x3e67ce = _0x404614 < _0x369081['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x12b7bb && _0x262fed)
                                _0x3e67ce = _0x41643b < _0x369081['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x11c06a = 0x0;
                        if (_0x3e67ce === 'bottom')
                            _0x11c06a = Math['PI'] / 0x2;
                        else if (_0x3e67ce === 'left')
                            _0x11c06a = Math['PI'];
                        else if (_0x3e67ce === 'top')
                            _0x11c06a = -Math['PI'] / 0x2;
                        else if (_0x3e67ce === 'right')
                            _0x11c06a = 0x0;
                        if (_0x11c06a !== 0x0) {
                            _0x5e24b8['save']();
                            _0x5e24b8['translate'](_0x424b01 + _0x369081['MAP']['tileSize'] / 0x2, _0x471142 + _0x369081['MAP']['tileSize'] / 0x2);
                            _0x5e24b8['rotate'](_0x11c06a);
                            _0x5e24b8['drawImage'](_0x203248, _0x1d78b4, _0x28d4eb, _0x430608, _0x430608, -_0x369081['MAP']['tileSize'] / 0x2, -_0x369081['MAP']['tileSize'] / 0x2, _0x369081['MAP']['tileSize'], _0x369081['MAP']['tileSize']);
                            _0x5e24b8['restore']();
                        } else {
                            _0x5e24b8['drawImage'](_0x203248, _0x1d78b4, _0x28d4eb, _0x430608, _0x430608, _0x424b01, _0x471142, _0x369081['MAP']['tileSize'], _0x369081['MAP']['tileSize']);
                        }
                    } else {
                        _0x5e24b8['drawImage'](_0x203248, _0x1d78b4, _0x28d4eb, _0x430608, _0x430608, _0x424b01, _0x471142, _0x369081['MAP']['tileSize'], _0x369081['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x180468() {
    _0x203248['crossOrigin'] = 'Anonymous';
    _0x203248['onload'] = () => {
        _0x369081['MAP']['tilesetCols'] = 0x3;
        if (_0x369081['MAP']['columns'] > 0x0 && _0x369081['MAP']['layers'] && _0x369081['MAP']['layers']['length'] > 0x0) {
            _0x489414();
        }
        _0x3af444();
    };
    _0x203248['onerror'] = () => {
        _0x369081['MAP']['tilesetCols'] = 0x1;
        _0x3af444();
    };
    _0x203248['src'] = 'assets/tilesheet.png';
    _0x1712f0['crossOrigin'] = 'Anonymous';
    _0x1712f0['onload'] = _0x3af444;
    _0x1712f0['onerror'] = () => {
        _0x3af444();
    };
    _0x1712f0['src'] = 'assets/center.png';
    _0x20a85d['crossOrigin'] = 'Anonymous';
    _0x20a85d['onload'] = _0x3af444;
    _0x20a85d['onerror'] = () => {
        _0x3af444();
    };
    _0x20a85d['src'] = 'assets/table.png';
}
function _0x3af444() {
    _0x369081['SYSTEM']['assetsLoaded']++;
    if (_0x369081['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x369081['MAP']['columns'] > 0x0 && _0x369081['MAP']['layers'] && _0x369081['MAP']['layers']['length'] > 0x0) {
            _0x489414();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x40a4e3();
    }
}
function _0x4b239b(_0x505205, _0xe1f6fe) {
    if (!_0x1e06f4 || !_0x299444)
        return;
    const _0x1b5f84 = _0x505205 / _0x369081['SYSTEM']['viewScale'] + _0x369081['CAMERA']['x'];
    const _0xe57371 = _0xe1f6fe / _0x369081['SYSTEM']['viewScale'] + _0x369081['CAMERA']['y'];
    const _0x369f80 = Math['floor'](_0x1b5f84 / _0x369081['MAP']['tileSize']);
    const _0x5d549f = Math['floor'](_0xe57371 / _0x369081['MAP']['tileSize']);
    if (_0x369f80 >= 0x0 && _0x369f80 < _0x369081['MAP']['columns'] && _0x5d549f >= 0x0 && _0x5d549f < _0x369081['MAP']['rows'])
        _0x299444['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x369081['EDITOR']['selectedLayer'],
            'col': _0x369f80,
            'row': _0x5d549f,
            'gid': _0x369081['EDITOR']['selectedTileGid']
        }));
}
function _0x50bb7b() {
    const _0x15f681 = document['getElementById']('palette');
    if (!_0x15f681 || _0x15f681['children']['length'] > 0x0)
        return;
    const _0x2546e9 = 0x40;
    const _0x209a1b = _0x203248;
    const _0x40c3ef = document['createElement']('div');
    _0x40c3ef['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x3e78d9 = document['createElement']('canvas');
    _0x3e78d9['width'] = 0xc0;
    _0x3e78d9['height'] = 0xa0;
    _0x3e78d9['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x40c3ef['appendChild'](_0x3e78d9);
    const _0x556674 = document['createElement']('div');
    _0x556674['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x40c3ef['appendChild'](_0x556674);
    let _0x97848a = 0x0, _0x316538 = 0x0;
    let _0x28d4fe = ![], _0x34562e = 0x0, _0x505ee4 = 0x0, _0x315e8c = 0x0, _0xac897f = 0x0;
    function _0x107c9b() {
        const _0x3eaaff = _0x3e78d9['getContext']('2d');
        _0x3eaaff['clearRect'](0x0, 0x0, _0x3e78d9['width'], _0x3e78d9['height']);
        _0x3eaaff['imageSmoothingEnabled'] = ![];
        if (_0x209a1b['complete'] && _0x209a1b['naturalWidth'] > 0x0) {
            _0x3eaaff['drawImage'](_0x209a1b, _0x97848a, _0x316538, _0x3e78d9['width'], _0x3e78d9['height'], 0x0, 0x0, _0x3e78d9['width'], _0x3e78d9['height']);
        }
        _0x3eaaff['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x3eaaff['lineWidth'] = 0x1;
        const _0x4ac971 = Math['floor'](_0x97848a / _0x2546e9);
        const _0x23f4ca = Math['floor'](_0x316538 / _0x2546e9);
        for (let _0xb4b612 = _0x4ac971; _0xb4b612 <= _0x4ac971 + Math['ceil'](_0x3e78d9['width'] / _0x2546e9) + 0x1; _0xb4b612++) {
            const _0x963a28 = _0xb4b612 * _0x2546e9 - _0x97848a;
            _0x3eaaff['beginPath']();
            _0x3eaaff['moveTo'](_0x963a28, 0x0);
            _0x3eaaff['lineTo'](_0x963a28, _0x3e78d9['height']);
            _0x3eaaff['stroke']();
        }
        for (let _0x243534 = _0x23f4ca; _0x243534 <= _0x23f4ca + Math['ceil'](_0x3e78d9['height'] / _0x2546e9) + 0x1; _0x243534++) {
            const _0x81e067 = _0x243534 * _0x2546e9 - _0x316538;
            _0x3eaaff['beginPath']();
            _0x3eaaff['moveTo'](0x0, _0x81e067);
            _0x3eaaff['lineTo'](_0x3e78d9['width'], _0x81e067);
            _0x3eaaff['stroke']();
        }
    }
    function _0x239cd8() {
        const _0x59390d = Math['max'](0x1, Math['ceil'](_0x209a1b['naturalWidth'] / _0x2546e9));
        const _0x460c46 = _0x369081['EDITOR']['selectedTileGid'];
        if (_0x460c46 <= 0x0) {
            _0x556674['style']['display'] = 'none';
            return;
        }
        const _0xbc2f5e = _0x460c46 - 0x1;
        const _0x5320eb = _0xbc2f5e % _0x59390d;
        const _0xc16dd2 = Math['floor'](_0xbc2f5e / _0x59390d);
        const _0x3974fc = _0x5320eb * _0x2546e9 - _0x97848a;
        const _0x30c497 = _0xc16dd2 * _0x2546e9 - _0x316538;
        _0x556674['style']['display'] = 'block';
        _0x556674['style']['left'] = _0x3974fc + 'px';
        _0x556674['style']['top'] = _0x30c497 + 'px';
    }
    _0x209a1b['onload'] = () => {
        _0x107c9b();
        _0x239cd8();
    };
    if (_0x209a1b['complete'] && _0x209a1b['naturalWidth'] > 0x0) {
        _0x107c9b();
        _0x239cd8();
    }
    _0x40c3ef['addEventListener']('mousedown', _0x560f7c => {
        if (_0x560f7c['button'] === 0x0) {
            _0x28d4fe = !![];
            _0x34562e = _0x560f7c['clientX'];
            _0x505ee4 = _0x560f7c['clientY'];
            _0x315e8c = _0x97848a;
            _0xac897f = _0x316538;
            _0x40c3ef['style']['cursor'] = 'grabbing';
            _0x560f7c['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x2a3e6a => {
        if (!_0x28d4fe)
            return;
        const _0x5c6549 = _0x34562e - _0x2a3e6a['clientX'];
        const _0x3fb8e5 = _0x505ee4 - _0x2a3e6a['clientY'];
        const _0x5dc13e = Math['max'](0x0, _0x209a1b['naturalWidth'] - _0x3e78d9['width']);
        const _0x275a9c = Math['max'](0x0, _0x209a1b['naturalHeight'] - _0x3e78d9['height']);
        _0x97848a = Math['max'](0x0, Math['min'](_0x5dc13e, _0x315e8c + _0x5c6549));
        _0x316538 = Math['max'](0x0, Math['min'](_0x275a9c, _0xac897f + _0x3fb8e5));
        _0x107c9b();
        _0x239cd8();
    });
    window['addEventListener']('mouseup', _0x5d3d2b => {
        if (_0x28d4fe) {
            _0x28d4fe = ![];
            _0x40c3ef['style']['cursor'] = 'grab';
        }
    });
    _0x40c3ef['addEventListener']('click', _0x10aefa => {
        const _0x3d8985 = _0x40c3ef['getBoundingClientRect']();
        const _0x172bf6 = _0x10aefa['clientX'] - _0x3d8985['left'] + _0x97848a;
        const _0xd9f606 = _0x10aefa['clientY'] - _0x3d8985['top'] + _0x316538;
        const _0x215130 = Math['max'](0x1, Math['ceil'](_0x209a1b['naturalWidth'] / _0x2546e9));
        const _0x1bced5 = Math['floor'](_0x172bf6 / _0x2546e9);
        const _0x476e81 = Math['floor'](_0xd9f606 / _0x2546e9);
        const _0x12b6f3 = _0x476e81 * _0x215130 + _0x1bced5 + 0x1;
        _0x369081['EDITOR']['selectedTileGid'] = _0x12b6f3;
        _0x239cd8();
    });
    _0x15f681['appendChild'](_0x40c3ef);
    const _0x4c4afe = document['createElement']('div');
    _0x4c4afe['className'] = 'tile-btn\x20eraser-btn';
    _0x4c4afe['title'] = 'Eraser\x20(gid\x200)';
    _0x4c4afe['onclick'] = () => {
        _0x369081['EDITOR']['selectedTileGid'] = 0x0;
        _0x556674['style']['display'] = 'none';
    };
    _0x15f681['appendChild'](_0x4c4afe);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x369081['EDITOR']['enabled'] = !_0x369081['EDITOR']['enabled'];
        const _0x396f71 = document['getElementById']('editor-tools');
        if (_0x369081['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x396f71['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x396f71['style']['display'] = 'none';
        }
    });
    const _0x6a5acb = document['getElementById']('start-game-btn');
    if (_0x6a5acb) {
        _0x6a5acb['addEventListener']('click', () => {
            if (_0x299444)
                _0x299444['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x28e2ab = document['getElementById']('rolelist-toggle-btn');
    if (_0x28e2ab) {
        let _0x3189b0 = 'subalignments';
        _0x28e2ab['addEventListener']('click', () => {
            if (_0x3189b0 === 'subalignments')
                _0x3189b0 = 'precise';
            else if (_0x3189b0 === 'precise')
                _0x3189b0 = 'off';
            else
                _0x3189b0 = 'subalignments';
            _0x28e2ab['innerText'] = 'Role\x20List:\x20' + _0x3189b0['charAt'](0x0)['toUpperCase']() + _0x3189b0['slice'](0x1);
            if (_0x299444)
                _0x299444['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x3189b0
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x3d5b4b => {
        if (_0x3d5b4b['id'] === 'editor-toggle-btn' || _0x3d5b4b['id'] === 'start-game-btn' || _0x3d5b4b['id'] === 'rolelist-toggle-btn')
            return;
        _0x3d5b4b['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0xb8e45b => _0xb8e45b['classList']['remove']('active'));
            _0x3d5b4b['classList']['add']('active');
            _0x369081['EDITOR']['selectedLayer'] = _0x3d5b4b['dataset']['layer'];
        });
    });
}
function _0x1608ae(_0x2f75fb) {
    if (_0x299444)
        _0x299444['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x2f75fb
        }));
}
function _0xd0817a(_0x571d56) {
    if (_0x299444)
        _0x299444['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x571d56
        }));
}
function _0x2b1bb6(_0x4c75fc, _0x34b260, _0x23a081, _0x4b4623) {
    const _0x4aea43 = document['getElementById']('admin-panel');
    if (_0x4aea43)
        _0x4aea43['remove']();
    if (_0x4aea43 && _0x4aea43['dataset']['target'] === String(_0x4c75fc))
        return;
    const _0x2be9cb = document['createElement']('div');
    _0x2be9cb['id'] = 'admin-panel';
    _0x2be9cb['dataset']['target'] = String(_0x4c75fc);
    _0x2be9cb['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x4d486c = document['createElement']('div');
    _0x4d486c['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x4d486c['textContent'] = _0x34b260;
    _0x2be9cb['appendChild'](_0x4d486c);
    const _0x31732f = document['createElement']('button');
    _0x31732f['textContent'] = 'Kick';
    _0x31732f['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x31732f['onmouseenter'] = () => _0x31732f['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x31732f['onmouseleave'] = () => _0x31732f['style']['background'] = 'transparent';
    _0x31732f['onclick'] = () => {
        _0x1608ae(_0x4c75fc);
        _0x2be9cb['remove']();
    };
    _0x2be9cb['appendChild'](_0x31732f);
    const _0x4779e3 = document['createElement']('button');
    _0x4779e3['textContent'] = 'Ban';
    _0x4779e3['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x4779e3['onmouseenter'] = () => _0x4779e3['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x4779e3['onmouseleave'] = () => _0x4779e3['style']['background'] = 'transparent';
    _0x4779e3['onclick'] = () => {
        _0xd0817a(_0x4c75fc);
        _0x2be9cb['remove']();
    };
    _0x2be9cb['appendChild'](_0x4779e3);
    document['body']['appendChild'](_0x2be9cb);
    const _0x3a12ee = _0x2be9cb['offsetWidth'] || 0x91;
    const _0x24a137 = _0x2be9cb['offsetHeight'] || 0x50;
    let _0x1088e3 = _0x23a081 - _0x3a12ee;
    let _0x1c6d27 = _0x4b4623;
    if (_0x1088e3 < 0x4)
        _0x1088e3 = _0x23a081;
    if (_0x1c6d27 + _0x24a137 > window['innerHeight'] - 0x4)
        _0x1c6d27 = window['innerHeight'] - _0x24a137 - 0x4;
    _0x2be9cb['style']['left'] = _0x1088e3 + 'px';
    _0x2be9cb['style']['top'] = _0x1c6d27 + 'px';
    const _0x5b160a = _0x454570 => {
        if (!_0x2be9cb['contains'](_0x454570['target'])) {
            _0x2be9cb['remove']();
            document['removeEventListener']('mousedown', _0x5b160a);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x5b160a), 0x0);
}
function _0x3a0735() {
    const _0x2054bc = document['getElementById']('leaderboard-list');
    _0x2054bc['innerHTML'] = '';
    const _0x1fcf8e = document['createElement']('div');
    _0x1fcf8e['className'] = 'leaderboard-entry';
    const _0x488df5 = document['createElement']('span');
    _0x488df5['textContent'] = _0x3f654c + (_0x1e06f4 ? '\x20[🗝️]' : '');
    if (_0x3f2184['has'](_0x24d029) && !_0x5d460f['isDead']) {
        _0x488df5['style']['color'] = '#cc88ff';
    }
    _0x1fcf8e['appendChild'](_0x488df5);
    _0x2054bc['appendChild'](_0x1fcf8e);
    for (const _0x4d3e6b in _0x4ef53b) {
        const _0x5bd039 = document['createElement']('div');
        _0x5bd039['className'] = 'leaderboard-entry';
        const _0x1af3b7 = document['createElement']('span');
        _0x1af3b7['textContent'] = _0x4ef53b[_0x4d3e6b]['name'] + (_0x4ef53b[_0x4d3e6b]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x3f2184['has'](parseInt(_0x4d3e6b)) && !_0x4ef53b[_0x4d3e6b]['isDead']) {
            _0x1af3b7['style']['color'] = '#cc88ff';
        }
        _0x5bd039['appendChild'](_0x1af3b7);
        if (_0x1e06f4 && !_0x4ef53b[_0x4d3e6b]['isOwner']) {
            const _0x1f768e = _0x4ef53b[_0x4d3e6b]['id'];
            const _0x52aefb = _0x4ef53b[_0x4d3e6b]['name'];
            _0x5bd039['style']['cursor'] = 'context-menu';
            _0x5bd039['addEventListener']('contextmenu', _0x30902d => {
                _0x30902d['preventDefault']();
                _0x30902d['stopPropagation']();
                _0x2b1bb6(_0x1f768e, _0x52aefb, _0x30902d['clientX'], _0x30902d['clientY']);
            });
        }
        _0x2054bc['appendChild'](_0x5bd039);
    }
}
window['addEventListener']('resize', _0x40a4e3);
function _0x40a4e3() {
    _0x5e2569['width'] = window['innerWidth'];
    _0x5e2569['height'] = window['innerHeight'];
    _0x369081['SYSTEM']['viewScale'] = Math['max'](_0x5e2569['width'] / _0x770b00, _0x5e2569['height'] / _0x339460);
    _0x369081['CAMERA']['width'] = _0x5e2569['width'] / _0x369081['SYSTEM']['viewScale'];
    _0x369081['CAMERA']['height'] = _0x5e2569['height'] / _0x369081['SYSTEM']['viewScale'];
    _0xe1644['imageSmoothingEnabled'] = ![];
}
function _0x514d7b(_0x43e01b) {
    if (_0x43e01b['ctrlKey'] || _0x43e01b['metaKey']) {
        if (_0x43e01b['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x43e01b['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x43e01b['code'])) {
            _0x43e01b['preventDefault']();
            _0x43e01b['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x514d7b, { 'passive': ![] });
window['addEventListener']('keydown', _0x514d7b, { 'passive': ![] });
window['addEventListener']('keydown', _0x456e3f => {
    const _0x349122 = _0x456e3f['key']['toLowerCase']();
    if (_0x349122 === 'tab') {
        _0x456e3f['preventDefault']();
        const _0x35f758 = document['getElementById']('will-ui');
        const _0x30d90f = document['getElementById']('will-input');
        if (_0x35f758['style']['display'] === 'flex') {
            _0x35f758['style']['display'] = 'none';
            if (_0x369081['GAME_STATE'] !== 'NIGHT' && _0x299444)
                _0x299444['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x30d90f['value']
                }));
            _0x30d90f['blur']();
        } else {
            if (_0x369081['GAME_STATE'] === 'NIGHT') {
                _0xbd72db('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x35f758['style']['display'] = 'flex';
            _0x30d90f['focus']();
            for (let _0x56c519 in _0x369081['INPUTS']['keys'])
                _0x369081['INPUTS']['keys'][_0x56c519] = ![];
        }
        return;
    }
    if (_0x456e3f['key'] === 'Enter') {
        if (_0x384fcc) {
            const _0x406e2d = document['getElementById']('play-btn');
            if (_0x406e2d)
                _0x406e2d['click']();
            return;
        }
        if (!_0x299444 || _0x299444['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x3d8b3b = document['getElementById']('chat-ui');
        const _0x1dd778 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x1dd778) {
            const _0x5088b4 = _0x1dd778['value']['trim']();
            if (_0x5088b4['length'] > 0x0) {
                _0x299444['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x5088b4
                }));
            }
            _0x1dd778['value'] = '';
            _0x3d8b3b['style']['display'] = 'none';
            _0x1dd778['blur']();
        } else {
            _0x3d8b3b['style']['display'] = 'block';
            _0x1dd778['focus']();
            for (let _0xd94270 in _0x369081['INPUTS']['keys'])
                _0x369081['INPUTS']['keys'][_0xd94270] = ![];
        }
        _0x456e3f['preventDefault']();
        return;
    }
    if (_0x456e3f['key'] === 'Escape') {
        const _0x5763b7 = document['getElementById']('role-index-modal');
        if (_0x5763b7 && _0x5763b7['style']['display'] === 'flex') {
            _0x5763b7['style']['display'] = 'none';
            return;
        }
        const _0x24852e = document['getElementById']('guide-ui');
        if (_0x24852e && _0x24852e['style']['display'] === 'flex') {
            _0x24852e['style']['display'] = 'none';
            return;
        }
        const _0x55f8c8 = document['getElementById']('ability-ui');
        if (_0x55f8c8 && _0x55f8c8['style']['display'] === 'block') {
            _0x55f8c8['style']['display'] = 'none';
            return;
        }
        const _0x2723d3 = document['getElementById']('settings-panel');
        if (_0x2723d3 && _0x2723d3['style']['display'] === 'block') {
            _0x2723d3['style']['display'] = 'none';
            return;
        }
        const _0xe5a156 = document['getElementById']('mayor-confirm-dialog');
        if (_0xe5a156 && _0xe5a156['style']['display'] === 'flex') {
            _0xe5a156['style']['display'] = 'none';
            return;
        }
        const _0x176aee = document['getElementById']('target-chooser-ui');
        if (_0x176aee && _0x176aee['style']['display'] === 'flex') {
            _0x176aee['style']['display'] = 'none';
            return;
        }
        const _0x13e075 = document['getElementById']('chat-ui');
        const _0x3dea66 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x3dea66) {
            _0x3dea66['value'] = '';
            _0x13e075['style']['display'] = 'none';
            _0x3dea66['blur']();
            _0x456e3f['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x369081['INPUTS']['keys']['hasOwnProperty'](_0x349122))
            _0x369081['INPUTS']['keys'][_0x349122] = !![];
        if (!_0x299444 || _0x299444['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x349122 === 'h' && !_0x456e3f['repeat']) {
            const _0x487ca4 = document['getElementById']('guide-ui');
            if (_0x487ca4) {
                _0x487ca4['style']['display'] = _0x487ca4['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x349122 === 't' && !_0x456e3f['repeat']) {
            if (_0x5d460f['isDead'])
                return;
            if (_0x15c275 === 'Mayor') {
                if (_0x3f2184['has'](_0x24d029)) {
                    _0xbd72db('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0xac8cc3 = document['getElementById']('mayor-confirm-dialog');
                if (_0xac8cc3)
                    _0xac8cc3['style']['display'] = 'flex';
                return;
            }
            if (_0x369081['GAME_STATE'] === 'NIGHT') {
                if (!_0x369081['NIGHT_ABILITY_OPEN']) {
                    _0xbd72db('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x2f373f = document['getElementById']('ability-ui');
                if (_0x2f373f) {
                    if (_0x2f373f['style']['display'] === 'block') {
                        _0x2f373f['style']['display'] = 'none';
                    } else {
                        _0x14b9ff();
                        _0x2f373f['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x369081['GAME_STATE'] === 'DAY_DISCUSS' || _0x369081['GAME_STATE'] === 'DAY_VOTE') {
                _0xbd72db('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x349122 === 'e' && !_0x5d460f['isDead']) {
            const _0x18f736 = Date['now']();
            if (!window['_lastDoorSend'] || _0x18f736 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x18f736;
                _0x299444['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x55166f => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x4eedbe = _0x55166f['key']['toLowerCase']();
        if (_0x369081['INPUTS']['keys']['hasOwnProperty'](_0x4eedbe))
            _0x369081['INPUTS']['keys'][_0x4eedbe] = ![];
    }
});
window['addEventListener']('mousemove', _0x4e227e => {
    _0x369081['INPUTS']['mouseX'] = _0x4e227e['clientX'];
    _0x369081['INPUTS']['mouseY'] = _0x4e227e['clientY'];
    if (_0x369081['INPUTS']['isMouseDown'] && _0x369081['EDITOR']['enabled']) {
        _0x4b239b(_0x4e227e['clientX'], _0x4e227e['clientY']);
    }
});
window['addEventListener']('mousedown', _0x4faad0 => {
    if (_0x4faad0['target']['closest']('#editor-ui') || _0x4faad0['target']['closest']('#leaderboard-ui') || _0x4faad0['target']['closest']('#role-index-btn-wrap') || _0x4faad0['target']['closest']('#role-index-modal') || _0x4faad0['target']['closest']('#chat-log-ui') || _0x4faad0['target']['closest']('#target-chooser-ui') || _0x4faad0['target']['closest']('#guide-ui') || _0x4faad0['target']['closest']('#role-list-ui') || _0x4faad0['target']['closest']('#ability-ui') || _0x4faad0['target']['closest']('#settings-panel') || _0x4faad0['target']['closest']('#mayor-confirm-dialog') || _0x4faad0['target']['closest']('#mobile-action-bar') || _0x4faad0['target']['closest']('#mobile-top-bar') || _0x4faad0['target']['closest']('#mobile-joystick-zone') || _0x4faad0['target']['closest']('#mobile-chat-overlay') || _0x4faad0['target']['closest']('#will-ui') || _0x4faad0['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x4faad0['button'] === 0x0) {
        _0x369081['INPUTS']['isMouseDown'] = !![];
        if (_0x369081['EDITOR']['enabled'])
            _0x4b239b(_0x4faad0['clientX'], _0x4faad0['clientY']);
    }
});
window['addEventListener']('mouseup', _0xddd62e => {
    _0x369081['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0xa52667 => {
    if (_0xa52667['target']['closest']('#settings-btn'))
        return;
    const _0x12e6d5 = document['getElementById']('leaderboard-list');
    const _0x2b2435 = document['getElementById']('leaderboard-toggle');
    if (_0x12e6d5['style']['display'] === 'none') {
        _0x12e6d5['style']['display'] = 'flex';
        _0x2b2435['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x12e6d5['style']['display'] = 'none';
        _0x2b2435['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x1d29d3 = document['getElementById']('close-target-btn');
if (_0x1d29d3) {
    _0x1d29d3['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x56943c = document['getElementById']('close-guide-btn');
if (_0x56943c) {
    _0x56943c['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x51f95 = document['getElementById']('role-list-header');
if (_0x51f95) {
    _0x51f95['addEventListener']('click', () => {
        const _0x4888f3 = document['getElementById']('role-list-items');
        const _0x5b37af = document['getElementById']('role-list-toggle');
        if (_0x4888f3['style']['display'] === 'none') {
            _0x4888f3['style']['display'] = 'flex';
            _0x5b37af['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x4888f3['style']['display'] = 'none';
            _0x5b37af['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x230501() {
    const _0x453fe7 = document['getElementById']('mobile-joystick-zone');
    const _0x3d0175 = document['getElementById']('mobile-joystick-base');
    const _0x3659ca = document['getElementById']('mobile-joystick-knob');
    if (_0x453fe7 && _0x3d0175 && _0x3659ca) {
        const _0x18d6ad = 0x3e;
        const _0x31b0d4 = (_0x3cd605, _0x2e5371) => {
            const _0x8a03de = _0x3d0175['getBoundingClientRect']();
            const _0x38acb0 = _0x8a03de['left'] + _0x8a03de['width'] / 0x2;
            const _0x358cc8 = _0x8a03de['top'] + _0x8a03de['height'] / 0x2;
            const _0x21a0de = _0x3cd605 - _0x38acb0;
            const _0x3b091e = _0x2e5371 - _0x358cc8;
            const _0x215bf1 = Math['hypot'](_0x21a0de, _0x3b091e);
            if (_0x215bf1 === 0x0) {
                _0x1bb292 = 0x0;
                _0x504dcd = 0x0;
                _0xb54c33 = ![];
                _0x3659ca['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x28419a = Math['min'](_0x215bf1, _0x18d6ad);
            const _0xfb5607 = _0x21a0de / _0x215bf1 * _0x28419a;
            const _0x24c600 = _0x3b091e / _0x215bf1 * _0x28419a;
            _0x1bb292 = _0xfb5607 / _0x18d6ad;
            _0x504dcd = _0x24c600 / _0x18d6ad;
            _0xb54c33 = _0x215bf1 >= _0x18d6ad * 0.75;
            _0x3659ca['style']['transform'] = 'translate(' + _0xfb5607 + 'px,\x20' + _0x24c600 + 'px)';
        };
        const _0x19a6ad = _0x55b2b7 => {
            for (let _0x476149 = 0x0; _0x476149 < _0x55b2b7['changedTouches']['length']; _0x476149++) {
                const _0x375b1d = _0x55b2b7['changedTouches'][_0x476149];
                if (_0x528b78 === null) {
                    _0x528b78 = _0x375b1d['identifier'];
                    _0x5daf7e = !![];
                    _0x31b0d4(_0x375b1d['clientX'], _0x375b1d['clientY']);
                    break;
                }
            }
        };
        const _0xb7ee93 = _0x237c64 => {
            for (let _0x200300 = 0x0; _0x200300 < _0x237c64['changedTouches']['length']; _0x200300++) {
                const _0x4bbd40 = _0x237c64['changedTouches'][_0x200300];
                if (_0x4bbd40['identifier'] === _0x528b78) {
                    _0x31b0d4(_0x4bbd40['clientX'], _0x4bbd40['clientY']);
                    break;
                }
            }
        };
        const _0x573be8 = _0x3920a9 => {
            for (let _0x360652 = 0x0; _0x360652 < _0x3920a9['changedTouches']['length']; _0x360652++) {
                const _0x23f357 = _0x3920a9['changedTouches'][_0x360652];
                if (_0x23f357['identifier'] === _0x528b78) {
                    _0x528b78 = null;
                    _0x5daf7e = ![];
                    _0x1bb292 = 0x0;
                    _0x504dcd = 0x0;
                    _0xb54c33 = ![];
                    _0x3659ca['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x453fe7['addEventListener']('touchstart', _0x3c6758 => {
            _0x3c6758['preventDefault']();
            _0x19a6ad(_0x3c6758);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0xb7ee93, { 'passive': !![] });
        window['addEventListener']('touchend', _0x573be8, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x573be8, { 'passive': !![] });
    }
    const _0x9c2be2 = (_0x84c8c4, _0x31c4ee) => {
        const _0x53b56c = _0x84c8c4 / _0x369081['SYSTEM']['viewScale'];
        const _0x21d20c = _0x31c4ee / _0x369081['SYSTEM']['viewScale'];
        const _0x5cb376 = _0x5d460f['x'] - _0x369081['CAMERA']['x'] + _0x5d460f['width'] / 0x2;
        const _0x542829 = _0x5d460f['y'] - _0x369081['CAMERA']['y'] + _0x5d460f['height'] / 0x2;
        _0xf02424 = Math['atan2'](_0x21d20c - _0x542829, _0x53b56c - _0x5cb376);
        _0x257c57 = !![];
        _0x369081['INPUTS']['mouseX'] = _0x84c8c4;
        _0x369081['INPUTS']['mouseY'] = _0x31c4ee;
    };
    _0x5e2569['addEventListener']('touchstart', _0x3ee945 => {
        if (_0x384fcc)
            return;
        for (let _0x17d19c = 0x0; _0x17d19c < _0x3ee945['changedTouches']['length']; _0x17d19c++) {
            const _0x5c26f6 = _0x3ee945['changedTouches'][_0x17d19c];
            if (_0x5c26f6['identifier'] !== _0x528b78 && _0x18330f === null) {
                _0x18330f = _0x5c26f6['identifier'];
                _0x9c2be2(_0x5c26f6['clientX'], _0x5c26f6['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x5e2569['addEventListener']('touchmove', _0x30a7b2 => {
        if (_0x384fcc)
            return;
        for (let _0x5f1ab9 = 0x0; _0x5f1ab9 < _0x30a7b2['changedTouches']['length']; _0x5f1ab9++) {
            const _0x3b2093 = _0x30a7b2['changedTouches'][_0x5f1ab9];
            if (_0x3b2093['identifier'] === _0x18330f) {
                _0x9c2be2(_0x3b2093['clientX'], _0x3b2093['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x2b5866 = _0x382bae => {
        for (let _0x3d3088 = 0x0; _0x3d3088 < _0x382bae['changedTouches']['length']; _0x3d3088++) {
            const _0x3a3d3b = _0x382bae['changedTouches'][_0x3d3088];
            if (_0x3a3d3b['identifier'] === _0x18330f) {
                _0x18330f = null;
                _0x257c57 = ![];
                break;
            }
        }
    };
    _0x5e2569['addEventListener']('touchend', _0x2b5866, { 'passive': !![] });
    _0x5e2569['addEventListener']('touchcancel', _0x2b5866, { 'passive': !![] });
    const _0x4a3c22 = document['getElementById']('mob-sprint-btn');
    if (_0x4a3c22) {
        _0x4a3c22['addEventListener']('click', _0x1a2e47 => {
            _0x1a2e47['stopPropagation']();
            _0x23aaf7 = !_0x23aaf7;
            _0x4a3c22['classList']['toggle']('active', _0x23aaf7);
        });
    }
    const _0x546c00 = document['getElementById']('mob-interact-btn');
    if (_0x546c00) {
        _0x546c00['addEventListener']('click', _0x4f92d6 => {
            _0x4f92d6['stopPropagation']();
            if (!_0x5d460f['isDead']) {
                const _0x2a5767 = Date['now']();
                if (!window['_lastDoorSend'] || _0x2a5767 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x2a5767;
                    if (_0x299444 && _0x299444['readyState'] === WebSocket['OPEN'])
                        _0x299444['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x3900b0 = document['getElementById']('mob-ability-btn');
    if (_0x3900b0) {
        _0x3900b0['addEventListener']('click', _0x32e6ac => {
            _0x32e6ac['stopPropagation']();
            if (_0x5d460f['isDead'])
                return;
            if (_0x15c275 === 'Mayor') {
                if (_0x3f2184['has'](_0x24d029)) {
                    _0xbd72db('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x4068f0 = document['getElementById']('mayor-confirm-dialog');
                if (_0x4068f0)
                    _0x4068f0['style']['display'] = 'flex';
                return;
            }
            if (_0x369081['GAME_STATE'] === 'NIGHT') {
                if (!_0x369081['NIGHT_ABILITY_OPEN']) {
                    _0xbd72db('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x5075da = document['getElementById']('ability-ui');
                if (_0x5075da) {
                    if (_0x5075da['style']['display'] === 'block') {
                        _0x5075da['style']['display'] = 'none';
                    } else {
                        _0x14b9ff();
                        _0x5075da['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x369081['GAME_STATE'] === 'DAY_DISCUSS' || _0x369081['GAME_STATE'] === 'DAY_VOTE') {
                _0xbd72db('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x5179e5 = document['getElementById']('mob-will-btn');
    const _0x55d865 = document['getElementById']('will-ui');
    const _0x52d790 = document['getElementById']('will-input');
    const _0xfbee15 = document['getElementById']('close-will-btn');
    const _0x13ed9c = () => {
        if (!_0x55d865)
            return;
        if (_0x55d865['style']['display'] === 'flex') {
            _0x55d865['style']['display'] = 'none';
            if (_0x369081['GAME_STATE'] !== 'NIGHT' && _0x299444 && _0x299444['readyState'] === WebSocket['OPEN'] && _0x52d790) {
                _0x299444['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x52d790['value']
                }));
            }
            if (_0x52d790)
                _0x52d790['blur']();
        } else {
            if (_0x369081['GAME_STATE'] === 'NIGHT') {
                _0xbd72db('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x55d865['style']['display'] = 'flex';
            if (_0x52d790)
                _0x52d790['focus']();
        }
    };
    if (_0x5179e5)
        _0x5179e5['addEventListener']('click', _0x5ac10e => {
            _0x5ac10e['stopPropagation']();
            _0x13ed9c();
        });
    if (_0xfbee15)
        _0xfbee15['addEventListener']('click', _0x506825 => {
            _0x506825['stopPropagation']();
            _0x13ed9c();
        });
    const _0x56a3f0 = document['getElementById']('mob-chat-btn');
    const _0x5cc8ef = document['getElementById']('mobile-chat-overlay');
    const _0x504b80 = document['getElementById']('mobile-chat-input');
    const _0x5c9e42 = document['getElementById']('mobile-chat-send');
    const _0x2d775e = document['getElementById']('mobile-chat-cancel');
    const _0x1f2c95 = () => {
        if (!_0x5cc8ef || !_0x504b80)
            return;
        _0x5cc8ef['style']['display'] = 'flex';
        _0x504b80['value'] = '';
        _0x504b80['focus']();
    };
    const _0x585f2d = () => {
        if (!_0x5cc8ef || !_0x504b80)
            return;
        _0x5cc8ef['style']['display'] = 'none';
        _0x504b80['blur']();
    };
    const _0x4eba01 = () => {
        if (!_0x504b80)
            return;
        const _0x44f2cd = _0x504b80['value']['trim']();
        if (_0x44f2cd['length'] > 0x0 && _0x299444 && _0x299444['readyState'] === WebSocket['OPEN']) {
            _0x299444['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x44f2cd
            }));
        }
        _0x504b80['value'] = '';
        _0x585f2d();
    };
    if (_0x56a3f0)
        _0x56a3f0['addEventListener']('click', _0x17af7c => {
            _0x17af7c['stopPropagation']();
            _0x1f2c95();
        });
    if (_0x5c9e42)
        _0x5c9e42['addEventListener']('click', _0x1934a2 => {
            _0x1934a2['stopPropagation']();
            _0x4eba01();
        });
    if (_0x2d775e)
        _0x2d775e['addEventListener']('click', _0x5a805f => {
            _0x5a805f['stopPropagation']();
            _0x585f2d();
        });
    if (_0x504b80) {
        _0x504b80['addEventListener']('keydown', _0xf894de => {
            if (_0xf894de['key'] === 'Enter') {
                _0xf894de['preventDefault']();
                _0x4eba01();
            } else if (_0xf894de['key'] === 'Escape') {
                _0x585f2d();
            }
        });
    }
    const _0x53c848 = document['getElementById']('mob-top-chat');
    if (_0x53c848)
        _0x53c848['addEventListener']('click', _0x4127c0 => {
            _0x4127c0['stopPropagation']();
            _0x1f2c95();
        });
    const _0x4ea681 = document['getElementById']('mob-top-will');
    if (_0x4ea681)
        _0x4ea681['addEventListener']('click', _0x5b4bc1 => {
            _0x5b4bc1['stopPropagation']();
            _0x13ed9c();
        });
    const _0x139632 = document['getElementById']('mob-top-roles');
    if (_0x139632) {
        _0x139632['addEventListener']('click', _0x12a616 => {
            _0x12a616['stopPropagation']();
            const _0x5d4221 = document['getElementById']('role-list-ui');
            const _0x25ec75 = document['getElementById']('leaderboard-ui');
            if (_0x25ec75)
                _0x25ec75['style']['display'] = 'none';
            if (_0x5d4221)
                _0x5d4221['style']['display'] = _0x5d4221['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x5e0165 = document['getElementById']('mob-top-players');
    if (_0x5e0165) {
        _0x5e0165['addEventListener']('click', _0xb689eb => {
            _0xb689eb['stopPropagation']();
            const _0x57d9da = document['getElementById']('leaderboard-ui');
            const _0xe4b067 = document['getElementById']('role-list-ui');
            if (_0xe4b067)
                _0xe4b067['style']['display'] = 'none';
            if (_0x57d9da)
                _0x57d9da['style']['display'] = _0x57d9da['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x5c2368 = document['getElementById']('mob-top-help');
    if (_0x5c2368) {
        _0x5c2368['addEventListener']('click', _0x8fb8d3 => {
            _0x8fb8d3['stopPropagation']();
            const _0x4c3ab0 = document['getElementById']('guide-ui');
            if (_0x4c3ab0)
                _0x4c3ab0['style']['display'] = _0x4c3ab0['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x1edffa) {
            _0x1edffa = !![];
            _0x31ba00();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
