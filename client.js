document['addEventListener']('contextmenu', _0x186b83 => _0x186b83['preventDefault']());
const _0x3f504d = {
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
let _0x43eed8 = '';
function _0x32c274(_0x44c7ed, _0x288805) {
    const _0x21b4c2 = document['getElementById']('role-list-ui');
    const _0x42454a = document['getElementById']('role-list-items');
    if (!_0x21b4c2 || !_0x42454a)
        return;
    if (!_0x288805 || _0x288805 === 'off' || !_0x44c7ed || _0x44c7ed['length'] === 0x0) {
        _0x21b4c2['style']['display'] = 'none';
        return;
    }
    const _0xc36491 = _0x288805 + '|' + JSON['stringify'](_0x44c7ed);
    if (_0xc36491 === _0x43eed8)
        return;
    _0x43eed8 = _0xc36491;
    const _0x1ff28d = document['getElementById']('role-tooltip');
    if (_0x1ff28d) {
        _0x1ff28d['style']['visibility'] = 'hidden';
        _0x1ff28d['style']['opacity'] = '0';
    }
    _0x21b4c2['style']['display'] = 'flex';
    _0x42454a['innerHTML'] = '';
    _0x44c7ed['forEach'](_0x4a1522 => {
        const _0x56909a = document['createElement']('div');
        _0x56909a['className'] = 'role-list-entry';
        const _0x34d574 = _0x4a1522['name']['includes']('Mafia') || _0x4a1522['name'] === 'Skinwalker';
        _0x56909a['classList']['add'](_0x34d574 ? 'mafia' : 'town');
        if (_0x288805 === 'precise' && _0x4a1522['isDead']) {
            _0x56909a['classList']['remove']('town', 'mafia');
            _0x56909a['classList']['add']('dead');
            _0x56909a['innerHTML'] = '<span>' + _0x4a1522['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x422cb7 = _0x4a1522['count'] !== undefined && _0x4a1522['count'] !== null ? _0x4a1522['count'] + 'x\x20' : '';
            _0x56909a['innerHTML'] = '<span>' + _0x422cb7 + _0x4a1522['name'] + '</span>';
        }
        if (_0x288805 === 'subalignments' && _0x3f504d[_0x4a1522['name']]) {
            _0x56909a['style']['cursor'] = 'pointer';
            _0x56909a['addEventListener']('mouseenter', () => {
                const _0x214d42 = document['getElementById']('role-tooltip');
                if (!_0x214d42)
                    return;
                const _0x3937e2 = _0x3f504d[_0x4a1522['name']]['join'](',\x20');
                _0x214d42['innerHTML'] = '';
                const _0x5c1e82 = document['createElement']('span');
                _0x5c1e82['style']['color'] = '#ffcc00';
                _0x5c1e82['textContent'] = _0x4a1522['name'];
                _0x214d42['appendChild'](_0x5c1e82);
                _0x214d42['appendChild'](document['createElement']('br'));
                _0x214d42['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x3937e2));
                const _0x2fc73f = _0x56909a['getBoundingClientRect']();
                _0x214d42['style']['left'] = _0x2fc73f['left'] - 0xeb + 'px';
                _0x214d42['style']['top'] = _0x2fc73f['top'] + 'px';
                _0x214d42['style']['display'] = 'block';
                _0x214d42['style']['visibility'] = 'visible';
                _0x214d42['style']['opacity'] = '1';
            });
            _0x56909a['addEventListener']('mouseleave', () => {
                const _0x5d7177 = document['getElementById']('role-tooltip');
                if (_0x5d7177) {
                    _0x5d7177['style']['display'] = 'none';
                    _0x5d7177['style']['visibility'] = 'hidden';
                    _0x5d7177['style']['opacity'] = '0';
                }
            });
        }
        _0x42454a['appendChild'](_0x56909a);
    });
}
let _0x89aa11 = null;
let _0x33db9e = null;
const _0x435ef4 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x176b60 = 'Player???';
let _0x1f52a3 = ![];
let _0x568307 = {};
let _0xfcb219 = null;
let _0x205164 = 0x0;
let _0x4a5fa1 = 0x0;
let _0x1b4c70 = new Set();
let _0x185837 = ![];
let _0x136c46 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x25f80e = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x3bb96e = ![];
let _0x1dc754 = null;
let _0x4edd4c = 0x0;
let _0x1fe4ee = 0x0;
let _0x5cf804 = ![];
let _0x1248f8 = ![];
let _0x80c757 = 0x0;
let _0x5ada94 = null;
let _0x5bd274 = ![];
const _0x5993c9 = ((() => {
    const _0x24782b = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x444442 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x59d756 = 0x320;
    const _0x4cc1a1 = {};
    const _0x5030ee = {};
    let _0x122771 = null;
    let _0x93e99a = _0x444442 === 0x0;
    let _0x63a0e7 = ![];
    for (const [_0xe47305, _0x1cf55a] of Object['entries'](_0x24782b)) {
        const _0x5aed82 = new Audio(_0x1cf55a);
        _0x5aed82['loop'] = !![];
        _0x5aed82['volume'] = 0x0;
        _0x5aed82['preload'] = 'auto';
        _0x4cc1a1[_0xe47305] = _0x5aed82;
        _0x5030ee[_0xe47305] = null;
    }
    const _0xdff22f = _0x19287b => Math['min'](0x1, Math['max'](0x0, _0x19287b));
    function _0x31e994(_0x1704ff) {
        if (_0x5030ee[_0x1704ff] !== null) {
            cancelAnimationFrame(_0x5030ee[_0x1704ff]);
            _0x5030ee[_0x1704ff] = null;
        }
    }
    function _0x1bffa1(_0x49ed3e, _0x58ba7e, _0x3abcc9, _0x2b3f9b, _0x5eaaaf) {
        _0x31e994(_0x49ed3e);
        const _0x20bd03 = _0x4cc1a1[_0x49ed3e];
        const _0x54d26f = performance['now']();
        const _0x290e24 = _0x1e5fc5 => {
            const _0x391dd3 = _0xdff22f((_0x1e5fc5 - _0x54d26f) / _0x2b3f9b);
            const _0x8714f5 = _0xdff22f(_0x58ba7e + (_0x3abcc9 - _0x58ba7e) * _0x391dd3);
            _0x20bd03['volume'] = _0x93e99a ? 0x0 : _0x8714f5;
            if (_0x391dd3 < 0x1) {
                _0x5030ee[_0x49ed3e] = requestAnimationFrame(_0x290e24);
            } else {
                _0x5030ee[_0x49ed3e] = null;
                _0x20bd03['volume'] = _0x93e99a ? 0x0 : _0xdff22f(_0x3abcc9);
                if (_0x5eaaaf)
                    _0x5eaaaf();
            }
        };
        _0x5030ee[_0x49ed3e] = requestAnimationFrame(_0x290e24);
    }
    function _0x1134ef(_0x395710) {
        const _0x315fda = _0x395710['play']();
        if (_0x315fda && _0x315fda['catch']) {
            _0x315fda['catch'](() => {
                if (!_0x63a0e7) {
                    const _0x19cb61 = () => {
                        _0x63a0e7 = !![];
                        _0x395710['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x19cb61);
                        document['removeEventListener']('keydown', _0x19cb61);
                        document['removeEventListener']('touchstart', _0x19cb61);
                    };
                    document['addEventListener']('click', _0x19cb61, { 'once': !![] });
                    document['addEventListener']('keydown', _0x19cb61, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x19cb61, { 'once': !![] });
                }
            });
        }
    }
    function _0x1e8d1a(_0x17264f) {
        if (!_0x24782b[_0x17264f])
            return;
        if (_0x122771 === _0x17264f)
            return;
        const _0x57e1ff = _0x122771;
        _0x122771 = _0x17264f;
        const _0x10d3b1 = _0x4cc1a1[_0x17264f];
        _0x31e994(_0x17264f);
        _0x10d3b1['currentTime'] = 0x0;
        _0x10d3b1['volume'] = 0x0;
        _0x1134ef(_0x10d3b1);
        _0x1bffa1(_0x17264f, 0x0, _0x444442, _0x59d756);
        if (_0x57e1ff && _0x4cc1a1[_0x57e1ff]) {
            const _0x399934 = _0x57e1ff;
            const _0x5b0c00 = _0x4cc1a1[_0x399934];
            const _0x17cade = _0xdff22f(_0x5b0c00['volume']);
            _0x1bffa1(_0x399934, _0x17cade, 0x0, _0x59d756, () => {
                _0x5b0c00['pause']();
                _0x5b0c00['currentTime'] = 0x0;
            });
        }
    }
    function _0x1a183e(_0x250188) {
        _0x444442 = _0xdff22f(_0x250188);
        localStorage['setItem']('musicVolume', String(_0x444442));
        if (!_0x93e99a && _0x122771 && _0x5030ee[_0x122771] === null) {
            _0x4cc1a1[_0x122771]['volume'] = _0x444442;
        }
    }
    function _0xa24822() {
        return _0x444442;
    }
    function _0x68221a(_0x174393) {
        _0x93e99a = _0x174393;
        for (const _0x186c69 of Object['keys'](_0x4cc1a1)) {
            if (_0x5030ee[_0x186c69] === null) {
                _0x4cc1a1[_0x186c69]['volume'] = _0x174393 || _0x186c69 !== _0x122771 ? 0x0 : _0x444442;
            }
        }
    }
    function _0x2ae224() {
        return _0x93e99a;
    }
    function _0x3a43d6(_0xe3c058) {
        if (_0xe3c058 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0xe3c058 === 'DAY_VOTE')
            return 'voting';
        if (_0xe3c058 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x2a9c4c(_0x120eb0) {
        _0x1e8d1a(_0x3a43d6(_0x120eb0));
    }
    function _0x471336(_0x2cf055) {
        _0x1e8d1a(_0x2cf055);
    }
    return {
        'play': _0x1e8d1a,
        'onStateChange': _0x2a9c4c,
        'onSoundEvent': _0x471336,
        'setVolume': _0x1a183e,
        'getVolume': _0xa24822,
        'setMuted': _0x68221a,
        'isMuted': _0x2ae224
    };
})());
const _0x2a7394 = ((() => {
    const _0x572284 = 0x258;
    const _0x1c5405 = 0xb4;
    const _0x56e572 = 0x708;
    const _0x1ef951 = 0x140;
    const _0x2d5ac7 = 0.18;
    const _0x30bdec = 0.95;
    const _0x37d7c4 = new Audio('audio/heartbeat.mp3');
    _0x37d7c4['loop'] = ![];
    _0x37d7c4['preload'] = 'auto';
    _0x37d7c4['volume'] = 0x0;
    let _0x22f0df = 0x0;
    let _0x17ef47 = Infinity;
    function _0x13cdfd(_0x34902f, _0x11667c, _0x3b5017) {
        return Math['min'](_0x3b5017, Math['max'](_0x11667c, _0x34902f));
    }
    function _0x3984ad(_0x20a49c, _0x59d144, _0x29fa9f) {
        return _0x20a49c + (_0x59d144 - _0x20a49c) * _0x29fa9f;
    }
    function _0x34f2ba(_0x380d51) {
        if (_0x3262a0['GAME_STATE'] !== 'NIGHT' || _0x526be7['isDead'] || _0xfcb219 === 'Skinwalker') {
            _0x17ef47 = Infinity;
            return;
        }
        const _0x539ea6 = _0x526be7['x'] + 22.5;
        const _0x1db72f = _0x526be7['y'] + 22.5;
        let _0xc84963 = Infinity;
        for (const _0x476b75 in _0x568307) {
            const _0x236539 = _0x568307[_0x476b75];
            if (!_0x236539['isDark'] || _0x236539['isDead'])
                continue;
            const _0x2cc801 = _0x236539['renderX'] + 22.5 - _0x539ea6;
            const _0x3a3675 = _0x236539['renderY'] + 22.5 - _0x1db72f;
            const _0x2edab5 = Math['sqrt'](_0x2cc801 * _0x2cc801 + _0x3a3675 * _0x3a3675);
            if (_0x2edab5 < _0xc84963)
                _0xc84963 = _0x2edab5;
        }
        _0x17ef47 = _0xc84963;
        if (_0xc84963 > _0x572284)
            return;
        const _0x8a7895 = 0x1 - _0x13cdfd((_0xc84963 - _0x1c5405) / (_0x572284 - _0x1c5405), 0x0, 0x1);
        const _0x555660 = _0x3984ad(_0x56e572, _0x1ef951, _0x8a7895);
        const _0x44f409 = _0x3984ad(_0x2d5ac7, _0x30bdec, _0x8a7895);
        if (_0x380d51 >= _0x22f0df) {
            _0x37d7c4['currentTime'] = 0x0;
            _0x37d7c4['volume'] = _0x5993c9['isMuted']() ? 0x0 : _0x13cdfd(_0x44f409 * _0x5993c9['getVolume']() / 0.7, 0x0, 0x1);
            _0x37d7c4['play']()['catch'](() => {
            });
            _0x22f0df = _0x380d51 + _0x555660;
        }
    }
    return { 'tick': _0x34f2ba };
})());
function _0x9b826f() {
    const _0x2c6809 = document['getElementById']('mob-ability-btn');
    if (!_0x2c6809)
        return;
    const _0x4c0b61 = _0x3262a0['GAME_STATE'] === 'NIGHT' && !_0x526be7['isDead'];
    const _0xa2d741 = _0xfcb219 === 'Mayor' && !_0x1b4c70['has'](_0x33db9e) && !_0x526be7['isDead'];
    if (_0x4c0b61 || _0xa2d741) {
        _0x2c6809['style']['display'] = 'flex';
    } else {
        _0x2c6809['style']['display'] = 'none';
    }
}
function _0x270e35() {
    const _0x376ae2 = document['getElementById']('mobile-joystick-zone');
    const _0x2d57d7 = document['getElementById']('mobile-top-bar');
    const _0x45025b = document['getElementById']('mobile-action-bar');
    if (!_0x376ae2 || !_0x2d57d7 || !_0x45025b)
        return;
    if (!_0x3e3a4f && _0x25f80e) {
        _0x376ae2['style']['display'] = 'flex';
        _0x2d57d7['style']['display'] = 'flex';
        _0x45025b['style']['display'] = 'flex';
        _0x9b826f();
    } else {
        _0x376ae2['style']['display'] = 'none';
        _0x2d57d7['style']['display'] = 'none';
        _0x45025b['style']['display'] = 'none';
    }
}
const _0x191092 = document['getElementById']('gameCanvas');
const _0x1d0a3e = _0x191092['getContext']('2d', { 'alpha': ![] });
const _0x46ead2 = 0x500;
const _0x372b2f = 0x2d0;
const _0x3262a0 = {
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
        'width': _0x46ead2,
        'height': _0x372b2f
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
const _0x526be7 = {
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
const _0x358ba4 = new Image();
const _0x18fd10 = new Image();
const _0x173d7c = new Image();
const _0x2135b4 = new Image();
_0x2135b4['src'] = 'assets/mayor\x20cosmetic.png';
const _0x593a87 = [
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
const _0x437918 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x847bf5 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x847bf5 === 'body1.png' || _0x847bf5 === 'body1')
    _0x847bf5 = 'body01.png';
if (!_0x847bf5['endsWith']('.png'))
    _0x847bf5 += '.png';
let _0x320664 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x320664['endsWith']('.png'))
    _0x320664 += '.png';
let _0x3e3a4f = !![];
let _0xeb6155 = null;
let _0x4eba02 = null;
let _0x51b0f9 = 0x3c;
let _0x25e04a = 0x2d;
const _0x2d90b0 = {};
const _0x137ddf = new Image();
_0x137ddf['src'] = 'assets/yanito932.png';
_0x2d90b0['assets/yanito932.png'] = _0x137ddf;
function _0x1ebcf7(_0x3f1061) {
    if (!_0x2d90b0[_0x3f1061] || !_0x2d90b0[_0x3f1061]['complete'] && _0x2d90b0[_0x3f1061]['naturalWidth'] === 0x0 && _0x2d90b0[_0x3f1061]['naturalHeight'] === 0x0) {
        const _0x28d1e7 = new Image();
        _0x28d1e7['src'] = _0x3f1061;
        _0x2d90b0[_0x3f1061] = _0x28d1e7;
    }
    return _0x2d90b0[_0x3f1061];
}
function _0x23b009(_0x7674fc, _0x17a223, _0x5ac953, _0x3f76e6, _0x551d95) {
    try {
        const _0x575f61 = 'assets/' + (_0x17a223 || 'body01.png');
        const _0x55a7e0 = _0x1ebcf7(_0x575f61);
        if (_0x55a7e0['complete'] && _0x55a7e0['naturalWidth'] > 0x0) {
            _0x7674fc['drawImage'](_0x55a7e0, -_0x3f76e6 / 0x2, -_0x551d95 / 0x2, _0x3f76e6, _0x551d95);
        }
        if (_0x5ac953 === null || _0x5ac953 === undefined)
            return;
        const _0x4d3fe0 = 'assets/' + _0x5ac953;
        const _0x1ec4dd = _0x1ebcf7(_0x4d3fe0);
        if (_0x1ec4dd['complete'] && _0x1ec4dd['naturalWidth'] > 0x0) {
            _0x7674fc['drawImage'](_0x1ec4dd, -_0x3f76e6 / 0x2, -_0x551d95 / 0x2, _0x3f76e6, _0x551d95);
        }
    } catch (_0xfafb04) {
    }
}
function _0x4e3522() {
    const _0x4898f4 = document['getElementById']('body-skin-grid');
    const _0xb8f20a = document['getElementById']('eyes-skin-grid');
    if (!_0x4898f4 || !_0xb8f20a)
        return;
    _0x4898f4['innerHTML'] = '';
    _0x593a87['forEach'](_0x1bc9a4 => {
        const _0x4edbd3 = document['createElement']('button');
        _0x4edbd3['className'] = 'skin-btn' + (_0x1bc9a4 === _0x847bf5 ? '\x20selected' : '');
        const _0x49f102 = document['createElement']('img');
        _0x49f102['src'] = 'assets/' + _0x1bc9a4;
        _0x4edbd3['appendChild'](_0x49f102);
        _0x4edbd3['onclick'] = () => {
            _0x847bf5 = _0x1bc9a4;
            localStorage['setItem']('selectedBody', _0x1bc9a4);
            _0x4898f4['querySelectorAll']('.skin-btn')['forEach'](_0x9b413f => _0x9b413f['classList']['remove']('selected'));
            _0x4edbd3['classList']['add']('selected');
        };
        _0x4898f4['appendChild'](_0x4edbd3);
    });
    _0xb8f20a['innerHTML'] = '';
    _0x437918['forEach'](_0x57be3a => {
        const _0xb0ec43 = document['createElement']('button');
        _0xb0ec43['className'] = 'skin-btn' + (_0x57be3a === _0x320664 ? '\x20selected' : '');
        const _0xde7aa8 = document['createElement']('img');
        _0xde7aa8['src'] = 'assets/' + _0x57be3a;
        _0xb0ec43['appendChild'](_0xde7aa8);
        _0xb0ec43['onclick'] = () => {
            _0x320664 = _0x57be3a;
            localStorage['setItem']('selectedEyes', _0x57be3a);
            _0xb8f20a['querySelectorAll']('.skin-btn')['forEach'](_0x319bda => _0x319bda['classList']['remove']('selected'));
            _0xb0ec43['classList']['add']('selected');
        };
        _0xb8f20a['appendChild'](_0xb0ec43);
    });
}
function _0x12c525(_0x55be03) {
    if (!_0x3262a0['MAP']['columns'] || !_0x3262a0['CAMERA']['width'])
        return;
    const _0x1705e6 = Math['max'](0x0, _0x3262a0['MAP']['columns'] * _0x3262a0['MAP']['tileSize'] - _0x3262a0['CAMERA']['width']);
    const _0x15f8a4 = Math['max'](0x0, _0x3262a0['MAP']['rows'] * _0x3262a0['MAP']['tileSize'] - _0x3262a0['CAMERA']['height']);
    if (_0xeb6155 === null) {
        _0xeb6155 = _0x1705e6 / 0x2;
        _0x4eba02 = _0x15f8a4 / 0x2;
    }
    _0xeb6155 += _0x51b0f9 * _0x55be03;
    _0x4eba02 += _0x25e04a * _0x55be03;
    if (_0xeb6155 <= 0x0) {
        _0xeb6155 = 0x0;
        _0x51b0f9 = Math['abs'](_0x51b0f9);
    } else if (_0xeb6155 >= _0x1705e6) {
        _0xeb6155 = _0x1705e6;
        _0x51b0f9 = -Math['abs'](_0x51b0f9);
    }
    if (_0x4eba02 <= 0x0) {
        _0x4eba02 = 0x0;
        _0x25e04a = Math['abs'](_0x25e04a);
    } else if (_0x4eba02 >= _0x15f8a4) {
        _0x4eba02 = _0x15f8a4;
        _0x25e04a = -Math['abs'](_0x25e04a);
    }
    _0x3262a0['CAMERA']['x'] = _0xeb6155;
    _0x3262a0['CAMERA']['y'] = _0x4eba02;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x5ac69a = document['getElementById']('play-btn');
    const _0xbf75e = document['getElementById']('username-input');
    const _0x543cad = localStorage['getItem']('playerName');
    if (_0x543cad && _0xbf75e) {
        _0xbf75e['value'] = _0x543cad;
    }
    const _0xec9599 = () => {
        _0x5993c9['play']('wait');
        document['removeEventListener']('click', _0xec9599);
        document['removeEventListener']('keydown', _0xec9599);
        document['removeEventListener']('touchstart', _0xec9599);
    };
    document['addEventListener']('click', _0xec9599, { 'once': !![] });
    document['addEventListener']('keydown', _0xec9599, { 'once': !![] });
    document['addEventListener']('touchstart', _0xec9599, { 'once': !![] });
    if (_0x5ac69a) {
        _0x5ac69a['addEventListener']('click', () => {
            const _0x555884 = _0xbf75e['value'];
            const _0x274990 = _0x555884['replace'](/<[^>]*>/g, '')['replace'](/[^\x20-\x7E]/g, '')['replace'](/[<>]/g, '')['replace'](/\s+/g, '\x20')['trim']()['substring'](0x0, 0xe);
            _0x176b60 = _0x274990 || 'Player';
            localStorage['setItem']('playerName', _0x176b60);
            _0x3e3a4f = ![];
            _0x3262a0['CAMERA']['x'] = null;
            _0x3262a0['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x3e9df7 = document['getElementById']('controls-hint');
            if (_0x3e9df7 && !_0x25f80e)
                _0x3e9df7['style']['display'] = 'block';
            _0x270e35();
            if (_0x25f80e) {
                const _0x195fed = document['getElementById']('leaderboard-list');
                const _0x45bec9 = document['getElementById']('leaderboard-toggle');
                if (_0x195fed) {
                    _0x195fed['style']['display'] = 'none';
                    if (_0x45bec9)
                        _0x45bec9['style']['transform'] = 'rotate(180deg)';
                }
                const _0x470e7a = document['getElementById']('role-list-items');
                const _0x9ecb42 = document['getElementById']('role-list-toggle');
                if (_0x470e7a) {
                    _0x470e7a['style']['display'] = 'none';
                    if (_0x9ecb42)
                        _0x9ecb42['style']['transform'] = 'rotate(180deg)';
                }
            }
            if (_0x89aa11 && _0x89aa11['readyState'] === WebSocket['OPEN']) {
                _0x89aa11['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x176b60,
                    'token': _0x435ef4,
                    'body': _0x847bf5,
                    'eyes': _0x320664
                }));
            } else if (!_0x89aa11 || _0x89aa11['readyState'] === WebSocket['CLOSED'] || _0x89aa11['readyState'] === WebSocket['CLOSING']) {
                _0x3a999f();
            }
        });
    }
    _0x4e3522();
    _0x3a999f();
    _0xcb5c2();
    _0x3e0595();
    _0x3e60ea();
});
function _0x3e0595() {
    const _0x3ff471 = document['getElementById']('settings-btn');
    const _0x5c4530 = document['getElementById']('settings-panel');
    const _0x3a2b19 = document['getElementById']('close-settings-btn');
    const _0x57cd60 = document['getElementById']('setting-mouse-relative');
    if (_0x57cd60) {
        _0x57cd60['checked'] = _0x136c46;
        _0x57cd60['addEventListener']('change', () => {
            _0x136c46 = _0x57cd60['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x136c46 ? 'true' : 'false');
        });
    }
    const _0x207fde = document['getElementById']('setting-music-volume');
    const _0x201328 = document['getElementById']('setting-music-volume-display');
    function _0x2b82f7(_0x55c057) {
        const _0x4f4edb = (_0x55c057['value'] - _0x55c057['min']) / (_0x55c057['max'] - _0x55c057['min']) * 0x64;
        _0x55c057['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x4f4edb + '%,\x20#444\x20' + _0x4f4edb + '%)';
    }
    if (_0x207fde) {
        const _0x25a08c = _0x5993c9['getVolume']();
        const _0x50c999 = Math['round'](_0x25a08c * 0x64);
        _0x207fde['value'] = _0x50c999;
        if (_0x201328)
            _0x201328['textContent'] = _0x50c999 + '%';
        _0x2b82f7(_0x207fde);
        _0x207fde['addEventListener']('input', () => {
            const _0x292785 = parseInt(_0x207fde['value'], 0xa);
            if (_0x201328)
                _0x201328['textContent'] = _0x292785 + '%';
            _0x2b82f7(_0x207fde);
            _0x5993c9['setVolume'](_0x292785 / 0x64);
            _0x5993c9['setMuted'](_0x292785 === 0x0);
        });
    }
    if (_0x3ff471 && _0x5c4530) {
        _0x3ff471['addEventListener']('click', _0x974a95 => {
            _0x974a95['stopPropagation']();
            _0x5c4530['style']['display'] = _0x5c4530['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x3a2b19 && _0x5c4530) {
        _0x3a2b19['addEventListener']('click', () => {
            _0x5c4530['style']['display'] = 'none';
        });
    }
    const _0x1dc22d = document['getElementById']('mayor-confirm-yes');
    const _0x2b7bee = document['getElementById']('mayor-confirm-no');
    const _0x68ad7c = document['getElementById']('mayor-confirm-dialog');
    if (_0x1dc22d && _0x68ad7c) {
        _0x1dc22d['addEventListener']('click', () => {
            if (_0x89aa11 && _0x89aa11['readyState'] === WebSocket['OPEN']) {
                _0x89aa11['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x68ad7c['style']['display'] = 'none';
        });
    }
    if (_0x2b7bee && _0x68ad7c) {
        _0x2b7bee['addEventListener']('click', () => {
            _0x68ad7c['style']['display'] = 'none';
        });
    }
    const _0x443a8f = document['getElementById']('close-ability-btn');
    if (_0x443a8f) {
        _0x443a8f['addEventListener']('click', () => {
            const _0x5a8d2a = document['getElementById']('ability-ui');
            if (_0x5a8d2a)
                _0x5a8d2a['style']['display'] = 'none';
        });
    }
}
let _0x263ed2 = '';
function _0x1813b2(_0x2c79c8) {
    const _0x1c087f = document['getElementById']('vote-tally-panel');
    const _0x1db07c = document['getElementById']('vote-tally-list');
    if (!_0x1c087f || !_0x1db07c)
        return;
    if (_0x2c79c8['state'] !== 'DAY_VOTE') {
        _0x1c087f['style']['display'] = 'none';
        _0x263ed2 = '';
        return;
    }
    _0x1c087f['style']['display'] = 'block';
    const _0x5b2306 = {};
    for (const _0xa9130b in _0x568307) {
        if (!_0x568307[_0xa9130b]['isDead'])
            _0x5b2306[_0xa9130b] = 0x0;
    }
    if (_0x33db9e && !_0x526be7['isDead'])
        _0x5b2306[_0x33db9e] = 0x0;
    const _0x17566c = _0x2c79c8['votes'] || {};
    for (const _0x2cdfa3 in _0x17566c) {
        const _0x3c9e02 = _0x17566c[_0x2cdfa3];
        const _0x273617 = _0x2c79c8['mayorRevealed'] && _0x2c79c8['mayorRevealed'][_0x2cdfa3] ? 0x2 : 0x1;
        _0x5b2306[_0x3c9e02] = (_0x5b2306[_0x3c9e02] || 0x0) + _0x273617;
    }
    let _0x51a571 = 0x0;
    const _0x350211 = _0x2c79c8['skips'] || {};
    for (const _0x34d750 in _0x350211) {
        _0x51a571 += Number(_0x350211[_0x34d750]) || 0x1;
    }
    const _0x3f1bde = JSON['stringify'](_0x5b2306) + '_' + _0x51a571 + '_' + _0x526be7['isDead'];
    if (_0x3f1bde === _0x263ed2)
        return;
    _0x263ed2 = _0x3f1bde;
    _0x1db07c['innerHTML'] = '';
    for (const _0x446c93 in _0x5b2306) {
        const _0x24d4e7 = parseInt(_0x446c93);
        const _0x9fce46 = _0x24d4e7 === _0x33db9e ? _0x176b60 : _0x568307[_0x446c93] ? _0x568307[_0x446c93]['name'] : 'Player\x20' + _0x446c93;
        const _0xf26e3e = document['createElement']('div');
        _0xf26e3e['className'] = 'vote-tally-entry';
        const _0x5534e9 = document['createElement']('span');
        _0x5534e9['textContent'] = _0x9fce46;
        const _0x4eaab4 = document['createElement']('span');
        _0x4eaab4['className'] = 'vote-count';
        _0x4eaab4['textContent'] = _0x5b2306[_0x446c93] + '\x20vote' + (_0x5b2306[_0x446c93] === 0x1 ? '' : 's');
        _0xf26e3e['appendChild'](_0x5534e9);
        _0xf26e3e['appendChild'](_0x4eaab4);
        if (_0x24d4e7 !== _0x33db9e && !_0x526be7['isDead']) {
            _0xf26e3e['style']['cursor'] = 'pointer';
            _0xf26e3e['title'] = 'Vote\x20for\x20' + _0x9fce46;
            _0xf26e3e['addEventListener']('click', _0x5849d8 => {
                _0x5849d8['stopPropagation']();
                if (_0x89aa11 && _0x89aa11['readyState'] === WebSocket['OPEN']) {
                    _0x89aa11['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x9fce46
                    }));
                }
            });
        }
        _0x1db07c['appendChild'](_0xf26e3e);
    }
    const _0x3d891c = document['createElement']('div');
    _0x3d891c['className'] = 'vote-tally-skip';
    _0x3d891c['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x51a571 + '</span>';
    if (!_0x526be7['isDead']) {
        _0x3d891c['style']['cursor'] = 'pointer';
        _0x3d891c['title'] = 'Click\x20to\x20skip\x20vote';
        _0x3d891c['addEventListener']('click', _0x31c50c => {
            _0x31c50c['stopPropagation']();
            if (_0x89aa11 && _0x89aa11['readyState'] === WebSocket['OPEN']) {
                _0x89aa11['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x1db07c['appendChild'](_0x3d891c);
}
let _0xc19cf7 = null;
let _0x26271b = null;
let _0x47b5a2 = null;
function _0x5c1799() {
    if (_0x89aa11 && _0x89aa11['readyState'] === WebSocket['OPEN']) {
        _0x89aa11['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0xc19cf7,
            'abilityTarget': _0x26271b,
            'killTarget': _0x47b5a2
        }));
    }
}
function _0xe238cf() {
    const _0x2a3c03 = document['getElementById']('ability-ui-body');
    if (!_0x2a3c03)
        return;
    _0x2a3c03['innerHTML'] = '';
    if (_0xfcb219 === 'Celebrity' || _0xfcb219 === 'Mayor') {
        const _0x55ce88 = document['createElement']('div');
        _0x55ce88['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x55ce88['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x2a3c03['appendChild'](_0x55ce88);
        return;
    }
    if (_0xfcb219 === 'Skinwalker') {
        const _0x567216 = document['createElement']('div');
        _0x567216['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x567216['innerText'] = 'Transform\x20into:';
        _0x2a3c03['appendChild'](_0x567216);
        const _0x3e29f8 = document['createElement']('div');
        _0x3e29f8['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x1f0f64 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x551f35 = _0x5e0e06 => {
            if (!_0x3262a0['ROLE_LIST_RAW'] || _0x3262a0['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x3262a0['ROLE_LIST_RAW']['some'](_0x568e4e => {
                if (_0x568e4e['name'] === _0x5e0e06)
                    return !_0x568e4e['isDead'];
                if (_0x3f504d[_0x568e4e['name']] && _0x3f504d[_0x568e4e['name']]['includes'](_0x5e0e06))
                    return !![];
                return ![];
            });
        };
        const _0x32bb9e = [
            'None',
            ..._0x1f0f64['filter'](_0x551f35)
        ];
        _0x32bb9e['forEach'](_0x1b61f5 => {
            const _0x4bf130 = document['createElement']('button');
            _0x4bf130['className'] = 'layer-btn';
            _0x4bf130['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x4bf130['innerText'] = _0x1b61f5;
            const _0x3ad5a4 = _0x1b61f5 === 'None' && !_0xc19cf7 || _0xc19cf7 === _0x1b61f5;
            if (_0x3ad5a4)
                _0x4bf130['classList']['add']('active');
            _0x4bf130['onclick'] = () => {
                _0xc19cf7 = _0x1b61f5 === 'None' ? null : _0x1b61f5;
                _0x5c1799();
                _0xe238cf();
            };
            _0x3e29f8['appendChild'](_0x4bf130);
        });
        _0x2a3c03['appendChild'](_0x3e29f8);
        if (_0x551f35('Vigilante')) {
            const _0xa8b76e = document['createElement']('div');
            _0xa8b76e['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0xa8b76e['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x2a3c03['appendChild'](_0xa8b76e);
        }
        if (_0xc19cf7 === 'Vigilante') {
            const _0x197dd4 = document['createElement']('div');
            _0x197dd4['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x197dd4['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x2a3c03['appendChild'](_0x197dd4);
        } else if (_0xc19cf7 && _0xc19cf7 !== 'Celebrity') {
            const _0x1213e1 = document['createElement']('div');
            _0x1213e1['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x1213e1['innerText'] = 'Use\x20' + _0xc19cf7 + '\x20ability\x20on:';
            _0x2a3c03['appendChild'](_0x1213e1);
            const _0x367f94 = document['createElement']('div');
            _0x367f94['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x4cd8f5 = document['createElement']('button');
            _0x4cd8f5['className'] = 'layer-btn';
            _0x4cd8f5['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x4cd8f5['innerText'] = 'No\x20one';
            if (!_0x26271b)
                _0x4cd8f5['classList']['add']('active');
            _0x4cd8f5['onclick'] = () => {
                _0x26271b = null;
                _0x5c1799();
                _0xe238cf();
            };
            _0x367f94['appendChild'](_0x4cd8f5);
            for (const _0x137f93 in _0x568307) {
                const _0x56a58d = _0x568307[_0x137f93];
                if (_0x56a58d['isDead'])
                    continue;
                const _0x2ab345 = document['createElement']('button');
                _0x2ab345['className'] = 'layer-btn';
                _0x2ab345['innerText'] = _0x56a58d['name'];
                if (_0x26271b === parseInt(_0x137f93))
                    _0x2ab345['classList']['add']('active');
                _0x2ab345['onclick'] = () => {
                    _0x26271b = parseInt(_0x137f93);
                    _0x5c1799();
                    _0xe238cf();
                };
                _0x367f94['appendChild'](_0x2ab345);
            }
            _0x2a3c03['appendChild'](_0x367f94);
        }
        const _0x21001a = document['createElement']('div');
        _0x21001a['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x21001a['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x2a3c03['appendChild'](_0x21001a);
        const _0x48abee = document['createElement']('div');
        _0x48abee['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x20d572 = document['createElement']('button');
        _0x20d572['className'] = 'layer-btn';
        _0x20d572['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x20d572['innerText'] = 'No\x20one';
        if (!_0x47b5a2 && !_0x3262a0['CURRENT_TARGET'])
            _0x20d572['classList']['add']('active');
        _0x20d572['onclick'] = () => {
            _0x47b5a2 = null;
            _0x3262a0['CURRENT_TARGET'] = null;
            _0x5c1799();
            _0xe238cf();
        };
        _0x48abee['appendChild'](_0x20d572);
        for (const _0x334718 in _0x568307) {
            const _0x1fd554 = _0x568307[_0x334718];
            if (_0x1fd554['isDead'])
                continue;
            const _0x1a1132 = document['createElement']('button');
            _0x1a1132['className'] = 'layer-btn';
            _0x1a1132['innerText'] = _0x1fd554['name'];
            if (_0x47b5a2 === parseInt(_0x334718) || _0x3262a0['CURRENT_TARGET'] === parseInt(_0x334718))
                _0x1a1132['classList']['add']('active');
            _0x1a1132['onclick'] = () => {
                _0x47b5a2 = parseInt(_0x334718);
                _0x3262a0['CURRENT_TARGET'] = parseInt(_0x334718);
                _0x5c1799();
                _0xe238cf();
            };
            _0x48abee['appendChild'](_0x1a1132);
        }
        _0x2a3c03['appendChild'](_0x48abee);
        return;
    }
    let _0x43bcc8 = '';
    let _0x2e5798 = ![];
    if (_0xfcb219 === 'Doctor') {
        _0x43bcc8 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x2e5798 = !![];
    } else if (_0xfcb219 === 'Investigator') {
        _0x43bcc8 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0xfcb219 === 'Tracker') {
        _0x43bcc8 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0xfcb219 === 'Archer') {
        _0x43bcc8 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0xfcb219 === 'Escort') {
        _0x43bcc8 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0xfcb219 === 'Vigilante') {
        _0x43bcc8 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x376ce2 = document['createElement']('div');
    _0x376ce2['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x376ce2['innerText'] = _0x43bcc8;
    _0x2a3c03['appendChild'](_0x376ce2);
    const _0x414bdc = document['createElement']('div');
    _0x414bdc['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x16f6e0 = document['createElement']('button');
    _0x16f6e0['className'] = 'layer-btn';
    _0x16f6e0['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x16f6e0['innerText'] = 'No\x20one';
    if (_0x3262a0['CURRENT_TARGET'] === null)
        _0x16f6e0['classList']['add']('active');
    _0x16f6e0['onclick'] = () => {
        _0x3262a0['CURRENT_TARGET'] = null;
        if (_0x89aa11 && _0x89aa11['readyState'] === WebSocket['OPEN']) {
            _0x89aa11['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0xe238cf();
    };
    _0x414bdc['appendChild'](_0x16f6e0);
    for (const _0x7cc923 in _0x568307) {
        const _0x544ff7 = _0x568307[_0x7cc923];
        if (_0x544ff7['isDead'])
            continue;
        const _0x16a8d1 = document['createElement']('button');
        _0x16a8d1['className'] = 'layer-btn';
        _0x16a8d1['innerText'] = _0x544ff7['name'];
        if (_0x3262a0['CURRENT_TARGET'] === parseInt(_0x7cc923))
            _0x16a8d1['classList']['add']('active');
        _0x16a8d1['onclick'] = () => {
            _0x3262a0['CURRENT_TARGET'] = parseInt(_0x7cc923);
            if (_0x89aa11 && _0x89aa11['readyState'] === WebSocket['OPEN']) {
                _0x89aa11['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x7cc923)
                }));
            }
            _0xe238cf();
        };
        _0x414bdc['appendChild'](_0x16a8d1);
    }
    if (_0x2e5798 && !_0x526be7['isDead']) {
        const _0x333d7d = document['createElement']('button');
        _0x333d7d['className'] = 'layer-btn';
        _0x333d7d['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x333d7d['innerText'] = _0x176b60 + '\x20(Self)';
        if (_0x3262a0['CURRENT_TARGET'] === _0x33db9e)
            _0x333d7d['classList']['add']('active');
        _0x333d7d['onclick'] = () => {
            _0x3262a0['CURRENT_TARGET'] = _0x33db9e;
            if (_0x89aa11 && _0x89aa11['readyState'] === WebSocket['OPEN']) {
                _0x89aa11['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x33db9e
                }));
            }
            _0xe238cf();
        };
        _0x414bdc['appendChild'](_0x333d7d);
    }
    _0x2a3c03['appendChild'](_0x414bdc);
}
function _0x3a999f() {
    if (_0x89aa11 && (_0x89aa11['readyState'] === WebSocket['OPEN'] || _0x89aa11['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x58d2b5 = new URLSearchParams();
    if (_0x435ef4)
        _0x58d2b5['set']('token', _0x435ef4);
    _0x58d2b5['set']('ngrok-skip-browser-warning', 'true');
    const _0x290166 = 'wss://prison-rankings-inspector-terry.trycloudflare.com';
    const _0x339e7f = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x290166;
    const _0xa63fc6 = _0x339e7f + '/?' + _0x58d2b5['toString']();
    _0x89aa11 = new WebSocket(_0xa63fc6);
    _0x89aa11['onopen'] = function () {
        if (!_0x3e3a4f && this['readyState'] === WebSocket['OPEN']) {
            this['send'](JSON['stringify']({
                'type': 'join',
                'name': _0x176b60,
                'token': _0x435ef4,
                'body': _0x847bf5,
                'eyes': _0x320664
            }));
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x89aa11 && _0x89aa11['readyState'] === WebSocket['OPEN']) {
            _0x89aa11['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x89aa11['onclose'] = _0x5b2cdc => {
        if (_0x5b2cdc['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x5b2cdc['code'] === 0xfa2 || _0x5b2cdc['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x5f4784 = document['getElementById']('disconnect-overlay');
        if (!_0x5f4784) {
            _0x5f4784 = document['createElement']('div');
            _0x5f4784['id'] = 'disconnect-overlay';
            _0x5f4784['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x5f4784['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x5f4784);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x89aa11['onmessage'] = _0x10f9c7 => {
        const _0x3bfdf9 = JSON['parse'](_0x10f9c7['data']);
        if (_0x3bfdf9['type'] === 'map_data') {
            _0x3262a0['MAP']['tileSize'] = _0x3bfdf9['map']['tileSize'];
            _0x3262a0['MAP']['columns'] = _0x3bfdf9['map']['columns'];
            _0x3262a0['MAP']['rows'] = _0x3bfdf9['map']['rows'];
            _0x3262a0['MAP']['layers'] = _0x3bfdf9['map']['layers'];
            if (_0x3bfdf9['map']['doors']) {
                _0x3262a0['MAP']['doors'] = _0x3bfdf9['map']['doors'];
                const _0x68e1e = _0x3262a0['MAP']['layers']['find'](_0x70b2cb => _0x70b2cb['name'] === 'floor2');
                if (_0x68e1e) {
                    for (const _0x4f508a in _0x3262a0['MAP']['doors']) {
                        _0x68e1e['data'][parseInt(_0x4f508a)] = 0x2;
                    }
                }
            }
            if (_0x3bfdf9['entities'])
                _0x3262a0['ENTITIES'] = _0x3bfdf9['entities'];
            _0x5a1e91();
            _0x3262a0['SYSTEM']['isReady'] = !![];
            _0x44a58d();
            if (!_0x3262a0['SYSTEM']['_gameLoopRunning']) {
                _0x3262a0['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x31c5bf);
            }
            return;
        }
        if (_0x3bfdf9['type'] === 'init') {
            _0x33db9e = _0x3bfdf9['id'];
            _0x3e3a4f = ![];
            _0x270e35();
            if (_0x25f80e) {
                const _0x208ea3 = document['getElementById']('leaderboard-list');
                const _0x50b302 = document['getElementById']('leaderboard-toggle');
                if (_0x208ea3) {
                    _0x208ea3['style']['display'] = 'none';
                    if (_0x50b302)
                        _0x50b302['style']['transform'] = 'rotate(180deg)';
                }
                const _0x2d6d78 = document['getElementById']('role-list-items');
                const _0x28c8fb = document['getElementById']('role-list-toggle');
                if (_0x2d6d78) {
                    _0x2d6d78['style']['display'] = 'none';
                    if (_0x28c8fb)
                        _0x28c8fb['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x1f52a3 = _0x3bfdf9['isOwner'] || ![];
            _0x176b60 = _0x3bfdf9['name'] || _0x176b60;
            _0x3262a0['MAP']['tileSize'] = _0x3bfdf9['map']['tileSize'];
            _0x3262a0['MAP']['columns'] = _0x3bfdf9['map']['columns'];
            _0x3262a0['MAP']['rows'] = _0x3bfdf9['map']['rows'];
            _0x3262a0['MAP']['layers'] = _0x3bfdf9['map']['layers'];
            if (_0x3bfdf9['map']['doors']) {
                _0x3262a0['MAP']['doors'] = _0x3bfdf9['map']['doors'];
                const _0x2565d0 = _0x3262a0['MAP']['layers']['find'](_0x141c5d => _0x141c5d['name'] === 'floor2');
                if (_0x2565d0) {
                    for (const _0x2776c0 in _0x3262a0['MAP']['doors']) {
                        _0x2565d0['data'][parseInt(_0x2776c0)] = 0x2;
                    }
                }
            }
            if (_0x3bfdf9['entities'])
                _0x3262a0['ENTITIES'] = _0x3bfdf9['entities'];
            _0x5a1e91();
            _0x526be7['x'] = _0x3262a0['MAP']['columns'] * _0x3262a0['MAP']['tileSize'] / 0x2;
            _0x526be7['y'] = _0x3262a0['MAP']['rows'] * _0x3262a0['MAP']['tileSize'] / 0x2;
            _0x3262a0['CAMERA']['x'] = _0x526be7['x'] + _0x526be7['width'] / 0x2 - _0x3262a0['CAMERA']['width'] / 0x2;
            _0x3262a0['CAMERA']['y'] = _0x526be7['y'] + _0x526be7['height'] / 0x2 - _0x3262a0['CAMERA']['height'] / 0x2;
            if (_0x1f52a3) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x2898a3();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x3262a0['SYSTEM']['lastTime'] = performance['now']();
            _0x3262a0['SYSTEM']['isReady'] = !![];
            _0x1fb7fa();
            if (!_0x3262a0['SYSTEM']['_gameLoopRunning']) {
                _0x3262a0['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x31c5bf);
            }
            return;
        } else if (_0x3bfdf9['type'] === 'state') {
            const _0x4ce79f = {};
            for (const _0x3c0c25 in _0x3bfdf9['players']) {
                if (parseInt(_0x3c0c25) === _0x33db9e)
                    continue;
                const _0xaa69ec = _0x3bfdf9['players'][_0x3c0c25];
                const _0x5423b0 = _0x568307[_0x3c0c25];
                if (_0x5423b0) {
                    const _0x2e48de = _0xaa69ec['x'] - _0x5423b0['renderX'];
                    const _0x43bd29 = _0xaa69ec['y'] - _0x5423b0['renderY'];
                    const _0x119ed1 = _0x2e48de * _0x2e48de + _0x43bd29 * _0x43bd29 > 0x78 * 0x78;
                    Object['assign'](_0x5423b0, _0xaa69ec);
                    if (_0x119ed1) {
                        _0x5423b0['renderX'] = _0xaa69ec['x'];
                        _0x5423b0['renderY'] = _0xaa69ec['y'];
                    }
                    _0x4ce79f[_0x3c0c25] = _0x5423b0;
                } else {
                    _0x4ce79f[_0x3c0c25] = {
                        ..._0xaa69ec,
                        'renderX': _0xaa69ec['x'],
                        'renderY': _0xaa69ec['y'],
                        'renderAngle': _0xaa69ec['angle'] || 0x0
                    };
                }
            }
            _0x568307 = _0x4ce79f;
            if (_0x3bfdf9['players'][_0x33db9e]) {
                const _0x40b8a8 = _0x3bfdf9['players'][_0x33db9e];
                _0x526be7['chats'] = _0x40b8a8['chats'] || [];
                _0x526be7['isDead'] = _0x40b8a8['isDead'];
                if (_0x40b8a8['name'])
                    _0x176b60 = _0x40b8a8['name'];
                _0x1fb7fa();
                const _0x2bdf8d = Math['hypot'](_0x40b8a8['x'] - _0x526be7['x'], _0x40b8a8['y'] - _0x526be7['y']);
                if (_0x2bdf8d > 0xfa) {
                    _0x526be7['x'] = _0x40b8a8['x'];
                    _0x526be7['y'] = _0x40b8a8['y'];
                } else if (_0x2bdf8d > 0x50) {
                    _0x526be7['x'] += (_0x40b8a8['x'] - _0x526be7['x']) * 0.06;
                    _0x526be7['y'] += (_0x40b8a8['y'] - _0x526be7['y']) * 0.06;
                }
            }
            if (_0x3bfdf9['entities'])
                _0x3262a0['ENTITIES'] = _0x3bfdf9['entities'];
            if (_0x3bfdf9['game']) {
                _0x3262a0['GAME_STATE'] = _0x3bfdf9['game']['state'];
                _0x3262a0['NIGHT_ABILITY_OPEN'] = _0x3bfdf9['game']['nightAbilityOpen'];
                if (_0x3bfdf9['game']['mayorRevealed']) {
                    for (const _0x4c0baa in _0x3bfdf9['game']['mayorRevealed']) {
                        _0x1b4c70['add'](parseInt(_0x4c0baa));
                    }
                }
                if (_0x3262a0['LAST_STATE'] !== _0x3262a0['GAME_STATE']) {
                    if (_0x3262a0['GAME_STATE'] !== 'NIGHT') {
                        _0x3262a0['CURRENT_TARGET'] = null;
                        _0xc19cf7 = null;
                        _0x26271b = null;
                        _0x47b5a2 = null;
                        const _0x5ecbd1 = document['getElementById']('ability-ui');
                        if (_0x5ecbd1)
                            _0x5ecbd1['style']['display'] = 'none';
                    }
                    if (_0x3262a0['GAME_STATE'] === 'NIGHT') {
                        _0x526be7['chats'] = [];
                        for (const _0x1a574a in _0x568307) {
                            _0x568307[_0x1a574a]['chats'] = [];
                        }
                    }
                    _0x3262a0['LAST_STATE'] = _0x3262a0['GAME_STATE'];
                    _0x9b826f();
                    _0x5993c9['onStateChange'](_0x3262a0['GAME_STATE'], _0x3bfdf9['game']['nightAbilityOpen']);
                }
                const _0x576f1c = document['getElementById']('phase-ui');
                if (_0x576f1c) {
                    _0x576f1c['style']['display'] = 'block';
                    let _0x532fb5 = _0x3bfdf9['game']['state']['replace']('_', '\x20');
                    if (_0x3bfdf9['game']['state'] === 'DAY_DISCUSS') {
                        _0x532fb5 = 'DAY\x20' + (_0x3bfdf9['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x3bfdf9['game']['timer'] + 's';
                    } else if (_0x3bfdf9['game']['state'] === 'DAY_VOTE') {
                        _0x532fb5 = 'DAY\x20' + (_0x3bfdf9['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x3bfdf9['game']['timer'] + 's';
                    } else if (_0x3bfdf9['game']['state'] === 'NIGHT') {
                        const _0x12f9f4 = _0x3bfdf9['game']['dayCount'] || 0x1;
                        if (_0x3bfdf9['game']['nightAbilityOpen']) {
                            _0x532fb5 = 'NIGHT\x20' + _0x12f9f4 + '\x20ABILITY\x20PHASE';
                            const _0x321cb0 = _0x3bfdf9['game']['abilityTimer'] !== undefined ? _0x3bfdf9['game']['abilityTimer'] : _0x3bfdf9['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x321cb0 + 's';
                        } else {
                            _0x532fb5 = 'NIGHT\x20' + _0x12f9f4;
                            document['getElementById']('phase-timer')['innerText'] = _0x3bfdf9['game']['timer'] + 's';
                        }
                    }
                    document['getElementById']('phase-name')['innerText'] = _0x532fb5;
                }
                if (_0x3bfdf9['game']['state'] === 'NIGHT') {
                    const _0x14641a = document['getElementById']('ability-timer-label');
                    if (_0x14641a) {
                        const _0x4c228e = _0x3bfdf9['game']['abilityTimer'] !== undefined ? _0x3bfdf9['game']['abilityTimer'] : _0x3bfdf9['game']['timer'];
                        _0x14641a['innerText'] = _0x3bfdf9['game']['nightAbilityOpen'] ? _0x4c228e + 's' : '';
                    }
                    if (_0x3bfdf9['game']['nightAbilityOpen'] && !_0x185837 && !_0x526be7['isDead']) {
                        _0x185837 = !![];
                        _0xe238cf();
                        const _0x1372ac = document['getElementById']('ability-ui');
                        if (_0x1372ac)
                            _0x1372ac['style']['display'] = 'block';
                    }
                    if (!_0x3bfdf9['game']['nightAbilityOpen']) {
                        const _0x402f27 = document['getElementById']('ability-ui');
                        if (_0x402f27 && _0x402f27['style']['display'] === 'block') {
                            _0x402f27['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x185837 = ![];
                }
                _0x1813b2(_0x3bfdf9['game']);
                if (_0x3bfdf9['game']['roleListMode'] !== undefined) {
                    _0x3262a0['ROLE_LIST_RAW'] = _0x3bfdf9['game']['roleList'] || [];
                    _0x32c274(_0x3bfdf9['game']['roleList'], _0x3bfdf9['game']['roleListMode']);
                }
            }
        } else if (_0x3bfdf9['type'] === 'teleport') {
            _0x526be7['x'] = _0x3bfdf9['x'];
            _0x526be7['y'] = _0x3bfdf9['y'];
            _0x526be7['vx'] = 0x0;
            _0x526be7['vy'] = 0x0;
            _0x3262a0['CAMERA']['x'] = null;
            if (_0x3bfdf9['teleportId'] !== undefined)
                _0x4a5fa1 = _0x3bfdf9['teleportId'];
        } else if (_0x3bfdf9['type'] === 'bulk_teleport') {
            for (const _0x17de62 in _0x3bfdf9['positions']) {
                const _0x12e6d3 = _0x3bfdf9['positions'][_0x17de62];
                if (parseInt(_0x17de62) === _0x33db9e) {
                    _0x526be7['x'] = _0x12e6d3['x'];
                    _0x526be7['y'] = _0x12e6d3['y'];
                    _0x526be7['vx'] = 0x0;
                    _0x526be7['vy'] = 0x0;
                    _0x3262a0['CAMERA']['x'] = null;
                    continue;
                }
                const _0x1a335a = _0x568307[_0x17de62];
                if (_0x1a335a) {
                    _0x1a335a['x'] = _0x12e6d3['x'];
                    _0x1a335a['y'] = _0x12e6d3['y'];
                    _0x1a335a['renderX'] = _0x12e6d3['x'];
                    _0x1a335a['renderY'] = _0x12e6d3['y'];
                    _0x1a335a['vx'] = 0x0;
                    _0x1a335a['vy'] = 0x0;
                }
            }
        } else if (_0x3bfdf9['type'] === 'player_left') {
            delete _0x568307[_0x3bfdf9['id']];
            _0x1b4c70['delete'](parseInt(_0x3bfdf9['id']));
        } else if (_0x3bfdf9['type'] === 'map_update') {
            const _0xf275d = _0x3262a0['MAP']['layers']['find'](_0x841bd9 => _0x841bd9['name'] === _0x3bfdf9['layer']);
            if (_0xf275d) {
                _0xf275d['data'][_0x3bfdf9['row'] * _0x3262a0['MAP']['columns'] + _0x3bfdf9['col']] = _0x3bfdf9['gid'];
                const _0xd31521 = _0x3bfdf9['row'] * _0x3262a0['MAP']['columns'] + _0x3bfdf9['col'];
                if (_0x3262a0['MAP']['doors'] && _0x3262a0['MAP']['doors'][_0xd31521]) {
                    const _0x58a561 = _0x3262a0['MAP']['layers']['find'](_0x107817 => _0x107817['name'] === 'floor2');
                    if (_0x58a561)
                        _0x58a561['data'][_0xd31521] = 0x2;
                }
                const _0x32b7da = Math['floor'](_0x3bfdf9['col'] * _0x3262a0['MAP']['tileSize'] / _0x3262a0['MAP']['chunkSize']);
                const _0x1955a1 = Math['floor'](_0x3bfdf9['row'] * _0x3262a0['MAP']['tileSize'] / _0x3262a0['MAP']['chunkSize']);
                _0x520db8(_0x32b7da, _0x1955a1);
            }
        } else if (_0x3bfdf9['type'] === 'role_assign') {
            _0xfcb219 = _0x3bfdf9['role'];
            _0x526be7['isDead'] = _0xfcb219 === 'Spectator';
            _0x1b4c70['clear']();
            _0x3262a0['CURRENT_TARGET'] = null;
            _0xc19cf7 = null;
            _0x26271b = null;
            _0x47b5a2 = null;
            _0x185837 = ![];
            const _0x3bfe0d = document['getElementById']('ability-ui');
            if (_0x3bfe0d)
                _0x3bfe0d['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0xfcb219;
            _0x9b826f();
            _0x51409b(_0xfcb219 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0xfcb219, !![]);
            let _0x38328d = '';
            if (_0xfcb219 === 'Investigator')
                _0x38328d = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0xfcb219 === 'Tracker')
                _0x38328d = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0xfcb219 === 'Doctor')
                _0x38328d = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0xfcb219 === 'Archer')
                _0x38328d = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0xfcb219 === 'Escort')
                _0x38328d = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0xfcb219 === 'Vigilante')
                _0x38328d = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0xfcb219 === 'Skinwalker')
                _0x38328d = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0xfcb219 === 'Celebrity')
                _0x38328d = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0xfcb219 === 'Mayor')
                _0x38328d = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x51409b(_0x38328d, !![]);
        } else if (_0x3bfdf9['type'] === 'mayor_reveal') {
            _0x1b4c70['add'](parseInt(_0x3bfdf9['playerId']));
            _0x1fb7fa();
            _0x9b826f();
        } else if (_0x3bfdf9['type'] === 'rolelist_update') {
            _0x3262a0['ROLE_LIST_RAW'] = _0x3bfdf9['list'] || [];
            _0x32c274(_0x3bfdf9['list'], _0x3bfdf9['mode']);
        } else if (_0x3bfdf9['type'] === 'sound_event') {
            _0x5993c9['onSoundEvent'](_0x3bfdf9['track']);
        } else if (_0x3bfdf9['type'] === 'game_over') {
            _0x5993c9['onStateChange']('LOBBY', ![]);
            _0x32c274([], 'off');
            _0xfcb219 = null;
            _0x526be7['isDead'] = ![];
            _0x1b4c70['clear']();
            _0x3262a0['CURRENT_TARGET'] = null;
            _0xc19cf7 = null;
            _0x26271b = null;
            _0x47b5a2 = null;
            _0x185837 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x9b826f();
            _0x51409b('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x3bfdf9['type'] === 'chat_log') {
            _0x51409b(_0x3bfdf9['sender'] + ':\x20' + _0x3bfdf9['text']);
        } else if (_0x3bfdf9['type'] === 'sys_chat') {
            _0x51409b(_0x3bfdf9['text'], !![]);
        }
    };
}
function _0x51409b(_0x2afa35, _0x3f69bd = ![]) {
    const _0x5cd2ba = document['getElementById']('chat-log-messages');
    const _0x153aea = document['getElementById']('chat-log-ui');
    const _0x140c4c = _0x153aea['scrollHeight'] - _0x153aea['scrollTop'] - _0x153aea['clientHeight'] < 0x1e;
    const _0x22dbe3 = document['createElement']('div');
    _0x22dbe3['className'] = 'chat-log-line' + (_0x3f69bd ? '\x20sys-msg' : '');
    _0x22dbe3['innerText'] = _0x2afa35;
    _0x5cd2ba['appendChild'](_0x22dbe3);
    if (_0x140c4c) {
        _0x153aea['scrollTop'] = _0x153aea['scrollHeight'];
    }
    if (_0x5cd2ba['childElementCount'] > 0xc8) {
        _0x5cd2ba['removeChild'](_0x5cd2ba['firstChild']);
    }
}
let _0x12aab7 = -0x1, _0x5571d4 = -0x1, _0x500fc6 = -0x1, _0x428196 = 0x0;
function _0x13d9a1() {
    if (!_0x33db9e || !_0x89aa11 || _0x89aa11['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x3ca2ac = performance['now']();
    const _0x4ee66c = _0x3ca2ac - _0x428196;
    const _0xf3877 = Math['abs'](_0x526be7['x'] - _0x12aab7) > 0.05 || Math['abs'](_0x526be7['y'] - _0x5571d4) > 0.05 || Math['abs'](_0x526be7['angle'] - _0x500fc6) > 0.02;
    if (!_0xf3877 && _0x4ee66c < 0xc8)
        return;
    if (_0x4ee66c < 0x19)
        return;
    _0x428196 = _0x3ca2ac;
    _0x12aab7 = _0x526be7['x'];
    _0x5571d4 = _0x526be7['y'];
    _0x500fc6 = _0x526be7['angle'];
    if (!_0x33db9e || !_0x89aa11 || _0x89aa11['readyState'] !== WebSocket['OPEN'])
        return;
    _0x89aa11['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x526be7['x'],
        'y': _0x526be7['y'],
        'vx': _0x526be7['vx'],
        'vy': _0x526be7['vy'],
        'angle': _0x526be7['angle'],
        'scale': _0x526be7['scale'],
        'teleportId': _0x4a5fa1,
        'clientTimestamp': Date['now']()
    }));
}
function _0x92c27c() {
    if (_0x526be7['isDead'])
        return;
    const _0x431581 = _0x3262a0['MAP']['layers']['find'](_0x256334 => _0x256334['name'] === 'walls');
    if (!_0x431581)
        return;
    const _0x2c16d8 = _0x526be7['scale'];
    const _0x4bff8c = _0x526be7['width'] * _0x2c16d8 / 0x2;
    for (let _0x4ff206 = 0x0; _0x4ff206 < 0x3; _0x4ff206++) {
        let _0x2784ef = _0x526be7['x'] + _0x526be7['width'] / 0x2;
        let _0x1dc8b6 = _0x526be7['y'] + _0x526be7['height'] / 0x2;
        const _0x40949f = Math['floor']((_0x2784ef - _0x4bff8c) / _0x3262a0['MAP']['tileSize']);
        const _0x268ed3 = Math['floor']((_0x2784ef + _0x4bff8c) / _0x3262a0['MAP']['tileSize']);
        const _0x4e0925 = Math['floor']((_0x1dc8b6 - _0x4bff8c) / _0x3262a0['MAP']['tileSize']);
        const _0x9efe19 = Math['floor']((_0x1dc8b6 + _0x4bff8c) / _0x3262a0['MAP']['tileSize']);
        for (let _0x4fe120 = _0x4e0925; _0x4fe120 <= _0x9efe19; _0x4fe120++) {
            for (let _0x46e638 = _0x40949f; _0x46e638 <= _0x268ed3; _0x46e638++) {
                if (_0x46e638 < 0x0 || _0x46e638 >= _0x3262a0['MAP']['columns'] || _0x4fe120 < 0x0 || _0x4fe120 >= _0x3262a0['MAP']['rows'])
                    continue;
                if (_0x431581['data'][_0x4fe120 * _0x3262a0['MAP']['columns'] + _0x46e638] === 0x0)
                    continue;
                const _0x3cb988 = _0x46e638 * _0x3262a0['MAP']['tileSize'];
                const _0x462915 = _0x4fe120 * _0x3262a0['MAP']['tileSize'];
                const _0x4a89dd = _0x2784ef < _0x3cb988 ? _0x3cb988 : _0x2784ef > _0x3cb988 + _0x3262a0['MAP']['tileSize'] ? _0x3cb988 + _0x3262a0['MAP']['tileSize'] : _0x2784ef;
                const _0x4e7ccc = _0x1dc8b6 < _0x462915 ? _0x462915 : _0x1dc8b6 > _0x462915 + _0x3262a0['MAP']['tileSize'] ? _0x462915 + _0x3262a0['MAP']['tileSize'] : _0x1dc8b6;
                const _0x152ff0 = _0x2784ef - _0x4a89dd;
                const _0x581fab = _0x1dc8b6 - _0x4e7ccc;
                const _0x2c1c2b = Math['sqrt'](_0x152ff0 * _0x152ff0 + _0x581fab * _0x581fab);
                if (_0x2c1c2b < _0x4bff8c) {
                    if (_0x2c1c2b === 0x0) {
                        const _0xf8f428 = _0x2784ef - _0x3cb988;
                        const _0x1c346d = _0x3cb988 + _0x3262a0['MAP']['tileSize'] - _0x2784ef;
                        const _0x582c09 = _0x1dc8b6 - _0x462915;
                        const _0x30c63f = _0x462915 + _0x3262a0['MAP']['tileSize'] - _0x1dc8b6;
                        const _0x22402a = Math['min'](_0xf8f428, _0x1c346d, _0x582c09, _0x30c63f);
                        if (_0x22402a === _0xf8f428)
                            _0x2784ef = _0x3cb988 - _0x4bff8c;
                        else if (_0x22402a === _0x1c346d)
                            _0x2784ef = _0x3cb988 + _0x3262a0['MAP']['tileSize'] + _0x4bff8c;
                        else if (_0x22402a === _0x582c09)
                            _0x1dc8b6 = _0x462915 - _0x4bff8c;
                        else
                            _0x1dc8b6 = _0x462915 + _0x3262a0['MAP']['tileSize'] + _0x4bff8c;
                    } else {
                        const _0x370a95 = _0x4bff8c - _0x2c1c2b;
                        _0x2784ef += _0x152ff0 / _0x2c1c2b * _0x370a95;
                        _0x1dc8b6 += _0x581fab / _0x2c1c2b * _0x370a95;
                        const _0x52d6ab = _0x526be7['vx'] * (_0x152ff0 / _0x2c1c2b) + _0x526be7['vy'] * (_0x581fab / _0x2c1c2b);
                        if (_0x52d6ab < 0x0) {
                            _0x526be7['vx'] -= _0x52d6ab * (_0x152ff0 / _0x2c1c2b);
                            _0x526be7['vy'] -= _0x52d6ab * (_0x581fab / _0x2c1c2b);
                        }
                    }
                }
            }
        }
        _0x526be7['x'] = _0x2784ef - _0x526be7['width'] / 0x2;
        _0x526be7['y'] = _0x1dc8b6 - _0x526be7['height'] / 0x2;
    }
}
function _0x2e83c5(_0x42c2c8) {
    const _0x3494d4 = _0x3262a0['MAP']['layers']['find'](_0x30ab2e => _0x30ab2e['name'] === 'walls');
    if (!_0x3494d4)
        return;
    const _0x45f418 = _0x42c2c8['width'] / 0x2;
    for (let _0x11d6b9 = 0x0; _0x11d6b9 < 0x2; _0x11d6b9++) {
        let _0x27a815 = _0x42c2c8['x'] + _0x42c2c8['width'] / 0x2;
        let _0x3921e5 = _0x42c2c8['y'] + _0x42c2c8['height'] / 0x2;
        const _0x526845 = Math['floor']((_0x27a815 - _0x45f418) / _0x3262a0['MAP']['tileSize']);
        const _0x1b524c = Math['floor']((_0x27a815 + _0x45f418) / _0x3262a0['MAP']['tileSize']);
        const _0x53055d = Math['floor']((_0x3921e5 - _0x45f418) / _0x3262a0['MAP']['tileSize']);
        const _0x3efd0e = Math['floor']((_0x3921e5 + _0x45f418) / _0x3262a0['MAP']['tileSize']);
        for (let _0x4e9fff = _0x53055d; _0x4e9fff <= _0x3efd0e; _0x4e9fff++) {
            for (let _0x34512c = _0x526845; _0x34512c <= _0x1b524c; _0x34512c++) {
                if (_0x34512c < 0x0 || _0x34512c >= _0x3262a0['MAP']['columns'] || _0x4e9fff < 0x0 || _0x4e9fff >= _0x3262a0['MAP']['rows'])
                    continue;
                if (_0x3494d4['data'][_0x4e9fff * _0x3262a0['MAP']['columns'] + _0x34512c] === 0x0)
                    continue;
                const _0x8d7452 = _0x34512c * _0x3262a0['MAP']['tileSize'];
                const _0x146e4b = _0x4e9fff * _0x3262a0['MAP']['tileSize'];
                const _0x1dfc4c = _0x27a815 < _0x8d7452 ? _0x8d7452 : _0x27a815 > _0x8d7452 + _0x3262a0['MAP']['tileSize'] ? _0x8d7452 + _0x3262a0['MAP']['tileSize'] : _0x27a815;
                const _0x1e63bb = _0x3921e5 < _0x146e4b ? _0x146e4b : _0x3921e5 > _0x146e4b + _0x3262a0['MAP']['tileSize'] ? _0x146e4b + _0x3262a0['MAP']['tileSize'] : _0x3921e5;
                const _0x53eb59 = _0x27a815 - _0x1dfc4c;
                const _0x21e615 = _0x3921e5 - _0x1e63bb;
                const _0x2f1f03 = Math['sqrt'](_0x53eb59 * _0x53eb59 + _0x21e615 * _0x21e615);
                if (_0x2f1f03 < _0x45f418) {
                    if (_0x2f1f03 === 0x0) {
                        const _0x2a0fad = _0x27a815 - _0x8d7452;
                        const _0x1258b0 = _0x8d7452 + _0x3262a0['MAP']['tileSize'] - _0x27a815;
                        const _0x3b884e = _0x3921e5 - _0x146e4b;
                        const _0x59cc7e = _0x146e4b + _0x3262a0['MAP']['tileSize'] - _0x3921e5;
                        const _0x19b934 = Math['min'](_0x2a0fad, _0x1258b0, _0x3b884e, _0x59cc7e);
                        if (_0x19b934 === _0x2a0fad)
                            _0x27a815 = _0x8d7452 - _0x45f418;
                        else if (_0x19b934 === _0x1258b0)
                            _0x27a815 = _0x8d7452 + _0x3262a0['MAP']['tileSize'] + _0x45f418;
                        else if (_0x19b934 === _0x3b884e)
                            _0x3921e5 = _0x146e4b - _0x45f418;
                        else
                            _0x3921e5 = _0x146e4b + _0x3262a0['MAP']['tileSize'] + _0x45f418;
                    } else {
                        const _0x4801f4 = _0x45f418 - _0x2f1f03;
                        _0x27a815 += _0x53eb59 / _0x2f1f03 * _0x4801f4;
                        _0x3921e5 += _0x21e615 / _0x2f1f03 * _0x4801f4;
                    }
                }
            }
        }
        _0x42c2c8['x'] = _0x27a815 - _0x42c2c8['width'] / 0x2;
        _0x42c2c8['y'] = _0x3921e5 - _0x42c2c8['height'] / 0x2;
    }
}
function _0x40415a(_0x8263e7) {
    const _0x3fcd56 = _0x8263e7['width'] / 0x2;
    for (let _0x594b93 = 0x0; _0x594b93 < 0x2; _0x594b93++) {
        let _0x1d382d = _0x8263e7['x'] + _0x8263e7['width'] / 0x2;
        let _0x1b9f52 = _0x8263e7['y'] + _0x8263e7['height'] / 0x2;
        for (const _0x2c381e of _0x3262a0['ENTITIES']) {
            const _0x5b942c = _0x1d382d < _0x2c381e['x'] ? _0x2c381e['x'] : _0x1d382d > _0x2c381e['x'] + _0x2c381e['w'] ? _0x2c381e['x'] + _0x2c381e['w'] : _0x1d382d;
            const _0x4d0344 = _0x1b9f52 < _0x2c381e['y'] ? _0x2c381e['y'] : _0x1b9f52 > _0x2c381e['y'] + _0x2c381e['h'] ? _0x2c381e['y'] + _0x2c381e['h'] : _0x1b9f52;
            const _0x32a99c = _0x1d382d - _0x5b942c;
            const _0x17ff7b = _0x1b9f52 - _0x4d0344;
            const _0x354fef = Math['sqrt'](_0x32a99c * _0x32a99c + _0x17ff7b * _0x17ff7b);
            if (_0x354fef < _0x3fcd56 && _0x354fef > 0x0) {
                const _0x503522 = _0x3fcd56 - _0x354fef;
                const _0x3da50d = _0x32a99c / _0x354fef;
                const _0x47469e = _0x17ff7b / _0x354fef;
                _0x1d382d += _0x3da50d * _0x503522;
                _0x1b9f52 += _0x47469e * _0x503522;
            } else if (_0x354fef === 0x0) {
                const _0x3fc41a = _0x1d382d - _0x2c381e['x'];
                const _0x3725c3 = _0x2c381e['x'] + _0x2c381e['w'] - _0x1d382d;
                const _0x3eca5b = _0x1b9f52 - _0x2c381e['y'];
                const _0x59438e = _0x2c381e['y'] + _0x2c381e['h'] - _0x1b9f52;
                const _0x2f8bf4 = Math['min'](_0x3fc41a, _0x3725c3, _0x3eca5b, _0x59438e);
                if (_0x2f8bf4 === _0x3fc41a)
                    _0x1d382d = _0x2c381e['x'] - _0x3fcd56;
                else if (_0x2f8bf4 === _0x3725c3)
                    _0x1d382d = _0x2c381e['x'] + _0x2c381e['w'] + _0x3fcd56;
                else if (_0x2f8bf4 === _0x3eca5b)
                    _0x1b9f52 = _0x2c381e['y'] - _0x3fcd56;
                else
                    _0x1b9f52 = _0x2c381e['y'] + _0x2c381e['h'] + _0x3fcd56;
            }
        }
        _0x8263e7['x'] = _0x1d382d - _0x8263e7['width'] / 0x2;
        _0x8263e7['y'] = _0x1b9f52 - _0x8263e7['height'] / 0x2;
    }
}
function _0x400ce3() {
    if (_0x526be7['isDead'])
        return;
    const _0x5d71d7 = _0x526be7['width'] / 0x2;
    const _0x50bd49 = _0x526be7['x'] + _0x526be7['width'] / 0x2;
    const _0x104661 = _0x526be7['y'] + _0x526be7['height'] / 0x2;
    for (const _0x1b66fb in _0x568307) {
        const _0x1facd0 = _0x568307[_0x1b66fb];
        if (_0x1facd0['isDead'])
            continue;
        const _0xae94fc = _0x1facd0['width'] / 0x2;
        const _0x44ea89 = _0x5d71d7 + _0xae94fc;
        const _0x307993 = (_0x1facd0['renderX'] ?? _0x1facd0['x']) + _0x1facd0['width'] / 0x2;
        const _0x337a4e = (_0x1facd0['renderY'] ?? _0x1facd0['y']) + _0x1facd0['height'] / 0x2;
        const _0x14fc57 = _0x50bd49 - _0x307993;
        const _0x35d490 = _0x104661 - _0x337a4e;
        const _0x2853c4 = Math['sqrt'](_0x14fc57 * _0x14fc57 + _0x35d490 * _0x35d490);
        if (_0x2853c4 > 0x0 && _0x2853c4 < _0x44ea89) {
            const _0x359726 = _0x44ea89 - _0x2853c4;
            const _0x1c0da8 = _0x14fc57 / _0x2853c4;
            const _0x4ce6c4 = _0x35d490 / _0x2853c4;
            _0x526be7['x'] += _0x1c0da8 * (_0x359726 * 0.25);
            _0x526be7['y'] += _0x4ce6c4 * (_0x359726 * 0.25);
            _0x1facd0['x'] -= _0x1c0da8 * (_0x359726 * 0.75);
            _0x1facd0['y'] -= _0x4ce6c4 * (_0x359726 * 0.75);
            _0x2e83c5(_0x1facd0);
            _0x40415a(_0x1facd0);
            if (_0x1facd0['renderX'] !== undefined) {
                _0x1facd0['renderX'] = _0x1facd0['x'];
                _0x1facd0['renderY'] = _0x1facd0['y'];
            }
            const _0x2cdea8 = _0x526be7['vx'] * _0x1c0da8 + _0x526be7['vy'] * _0x4ce6c4;
            if (_0x2cdea8 < 0x0) {
                _0x526be7['vx'] -= _0x2cdea8 * _0x1c0da8 * 0.25;
                _0x526be7['vy'] -= _0x2cdea8 * _0x4ce6c4 * 0.25;
            }
        }
    }
    _0x92c27c();
    _0x40037c();
}
function _0x40037c() {
    if (_0x526be7['isDead'])
        return;
    const _0x14f218 = _0x526be7['scale'];
    const _0xc7c94c = _0x526be7['width'] * _0x14f218 / 0x2;
    for (let _0x2b2ff8 = 0x0; _0x2b2ff8 < 0x2; _0x2b2ff8++) {
        let _0x3ee874 = _0x526be7['x'] + _0x526be7['width'] / 0x2;
        let _0xf4ba98 = _0x526be7['y'] + _0x526be7['height'] / 0x2;
        for (const _0x16ff28 of _0x3262a0['ENTITIES']) {
            const _0x1eccbd = _0x3ee874 < _0x16ff28['x'] ? _0x16ff28['x'] : _0x3ee874 > _0x16ff28['x'] + _0x16ff28['w'] ? _0x16ff28['x'] + _0x16ff28['w'] : _0x3ee874;
            const _0x249f0a = _0xf4ba98 < _0x16ff28['y'] ? _0x16ff28['y'] : _0xf4ba98 > _0x16ff28['y'] + _0x16ff28['h'] ? _0x16ff28['y'] + _0x16ff28['h'] : _0xf4ba98;
            const _0xeafd96 = _0x3ee874 - _0x1eccbd;
            const _0x181d36 = _0xf4ba98 - _0x249f0a;
            const _0x350b1f = Math['sqrt'](_0xeafd96 * _0xeafd96 + _0x181d36 * _0x181d36);
            if (_0x350b1f < _0xc7c94c && _0x350b1f > 0x0) {
                const _0x37abfc = _0xc7c94c - _0x350b1f;
                const _0x38f5f2 = _0xeafd96 / _0x350b1f;
                const _0x40d73a = _0x181d36 / _0x350b1f;
                _0x3ee874 += _0x38f5f2 * _0x37abfc;
                _0xf4ba98 += _0x40d73a * _0x37abfc;
                const _0x34d4fe = _0x526be7['vx'] * _0x38f5f2 + _0x526be7['vy'] * _0x40d73a;
                if (_0x34d4fe < 0x0) {
                    _0x526be7['vx'] -= _0x34d4fe * _0x38f5f2;
                    _0x526be7['vy'] -= _0x34d4fe * _0x40d73a;
                }
            } else if (_0x350b1f === 0x0) {
                const _0x3f8929 = _0x3ee874 - _0x16ff28['x'];
                const _0x158a08 = _0x16ff28['x'] + _0x16ff28['w'] - _0x3ee874;
                const _0x42311b = _0xf4ba98 - _0x16ff28['y'];
                const _0x4b602c = _0x16ff28['y'] + _0x16ff28['h'] - _0xf4ba98;
                const _0x38c43f = Math['min'](_0x3f8929, _0x158a08, _0x42311b, _0x4b602c);
                if (_0x38c43f === _0x3f8929)
                    _0x3ee874 = _0x16ff28['x'] - _0xc7c94c;
                else if (_0x38c43f === _0x158a08)
                    _0x3ee874 = _0x16ff28['x'] + _0x16ff28['w'] + _0xc7c94c;
                else if (_0x38c43f === _0x42311b)
                    _0xf4ba98 = _0x16ff28['y'] - _0xc7c94c;
                else
                    _0xf4ba98 = _0x16ff28['y'] + _0x16ff28['h'] + _0xc7c94c;
            }
        }
        _0x526be7['x'] = _0x3ee874 - _0x526be7['width'] / 0x2;
        _0x526be7['y'] = _0xf4ba98 - _0x526be7['height'] / 0x2;
    }
}
function _0x36e8d7(_0x7222f6, _0x2b3974) {
    const _0xe3cde9 = _0x3262a0['MAP']['layers']['find'](_0xec4797 => _0xec4797['name'] === 'trees');
    if (!_0xe3cde9)
        return ![];
    const _0x464130 = Math['floor'](_0x7222f6 / _0x3262a0['MAP']['tileSize']);
    const _0x162abb = Math['floor'](_0x2b3974 / _0x3262a0['MAP']['tileSize']);
    if (_0x464130 < 0x0 || _0x464130 >= _0x3262a0['MAP']['columns'] || _0x162abb < 0x0 || _0x162abb >= _0x3262a0['MAP']['rows'])
        return ![];
    return _0xe3cde9['data'][_0x162abb * _0x3262a0['MAP']['columns'] + _0x464130] === 0xb;
}
let _0x5d2c79 = null;
function _0x430445() {
    const _0x179521 = _0x3262a0['MAP'];
    const _0xf3a9fe = _0x179521['layers']['find'](_0x202277 => _0x202277['name'] === 'floor2');
    const _0x4fc165 = _0x179521['layers']['find'](_0x552abf => _0x552abf['name'] === 'walls');
    if (!_0xf3a9fe || !_0x4fc165) {
        _0x5d2c79 = null;
        return;
    }
    const _0xdfcd16 = _0x179521['columns'];
    const _0x2b75fd = _0x179521['rows'];
    const _0x2050eb = [];
    const _0x23713e = [];
    const _0x2e2a72 = new Set();
    for (let _0x8bc0b5 = 0x0; _0x8bc0b5 < _0x2b75fd; _0x8bc0b5++) {
        for (let _0x2e29bd = 0x0; _0x2e29bd < _0xdfcd16; _0x2e29bd++) {
            const _0x58b53e = _0x8bc0b5 * _0xdfcd16 + _0x2e29bd;
            const _0x5312fd = _0xf3a9fe['data'][_0x58b53e];
            const _0x1b8735 = _0x4fc165['data'][_0x58b53e];
            if (_0x5312fd === 0x2 || _0x5312fd === 0x4) {
                _0x2050eb['push']({
                    'c': _0x2e29bd,
                    'r': _0x8bc0b5
                });
                if (_0x1b8735 !== 0x0)
                    _0x23713e['push']({
                        'c': _0x2e29bd,
                        'r': _0x8bc0b5
                    });
            }
            if (_0x1b8735 !== 0x0)
                _0x2e2a72['add'](_0x2e29bd + ',' + _0x8bc0b5);
        }
    }
    const _0x35ab6d = new Set(_0x2050eb['map'](_0x3a4c9f => _0x3a4c9f['c'] + ',' + _0x3a4c9f['r']));
    const _0x4c708c = [
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
                c: _0x207ed4,
                r: _0x18c4e1
            } of _0x2050eb) {
        for (const [_0x923838, _0xd37300] of _0x4c708c) {
            const _0x6aaa9c = _0x207ed4 + _0x923838, _0x560e6e = _0x18c4e1 + _0xd37300;
            const _0x342717 = _0x6aaa9c + ',' + _0x560e6e;
            if (!_0x35ab6d['has'](_0x342717))
                _0x2e2a72['add'](_0x342717);
        }
    }
    _0x5d2c79 = {
        'wallSet': _0x2e2a72,
        'floorTiles': _0x2050eb,
        'wallTiles': _0x23713e,
        'interiorSet': _0x35ab6d
    };
}
function _0x43dd18() {
    const _0x3d4dc7 = _0x3262a0['MAP']['layers']['find'](_0x424a0a => _0x424a0a['name'] === 'floor2');
    if (!_0x3d4dc7)
        return ![];
    const _0x1d78d4 = Math['floor']((_0x526be7['x'] + _0x526be7['width'] / 0x2) / _0x3262a0['MAP']['tileSize']);
    const _0x1d3a8f = Math['floor']((_0x526be7['y'] + _0x526be7['height'] / 0x2) / _0x3262a0['MAP']['tileSize']);
    if (_0x1d78d4 < 0x0 || _0x1d78d4 >= _0x3262a0['MAP']['columns'] || _0x1d3a8f < 0x0 || _0x1d3a8f >= _0x3262a0['MAP']['rows'])
        return ![];
    const _0x37431a = _0x3d4dc7['data'][_0x1d3a8f * _0x3262a0['MAP']['columns'] + _0x1d78d4];
    return _0x37431a === 0x2;
}
function _0x3148fe() {
    if (_0x526be7['isDead']) {
        _0x3262a0['SHADOW']['polygon'] = null;
        return;
    }
    const _0x1d449b = _0x3262a0['MAP'];
    const _0x491e95 = _0x3262a0['SHADOW'];
    const _0x23cf17 = _0x1d449b['tileSize'];
    if (!_0x5d2c79)
        _0x430445();
    if (!_0x5d2c79) {
        _0x491e95['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x4ed25a,
        floorTiles: _0x4a3f50
    } = _0x5d2c79;
    if (_0x4a3f50['length'] === 0x0) {
        _0x491e95['polygon'] = null;
        return;
    }
    if (!_0x43dd18()) {
        _0x491e95['polygon'] = null;
        return;
    }
    const _0x48c788 = _0x526be7['x'] + _0x526be7['width'] / 0x2;
    const _0x212aae = _0x526be7['y'] + _0x526be7['height'] / 0x2;
    if (!_0x5d2c79['_bounds']) {
        let _0x5097a5 = Infinity, _0x279f73 = -Infinity, _0x4b71b9 = Infinity, _0x56d871 = -Infinity;
        for (const {
                    c: _0x3c3a64,
                    r: _0x542d77
                } of _0x4a3f50) {
            if (_0x3c3a64 < _0x5097a5)
                _0x5097a5 = _0x3c3a64;
            if (_0x3c3a64 > _0x279f73)
                _0x279f73 = _0x3c3a64;
            if (_0x542d77 < _0x4b71b9)
                _0x4b71b9 = _0x542d77;
            if (_0x542d77 > _0x56d871)
                _0x56d871 = _0x542d77;
        }
        _0x5d2c79['_bounds'] = {
            'minC': Math['max'](0x0, _0x5097a5 - 0x1),
            'maxC': Math['min'](_0x1d449b['columns'] - 0x1, _0x279f73 + 0x1),
            'minR': Math['max'](0x0, _0x4b71b9 - 0x1),
            'maxR': Math['min'](_0x1d449b['rows'] - 0x1, _0x56d871 + 0x1)
        };
        const _0x2d7734 = [];
        for (let _0x4f525b = _0x5d2c79['_bounds']['minR']; _0x4f525b <= _0x5d2c79['_bounds']['maxR']; _0x4f525b++) {
            for (let _0x515271 = _0x5d2c79['_bounds']['minC']; _0x515271 <= _0x5d2c79['_bounds']['maxC']; _0x515271++) {
                if (_0x4ed25a['has'](_0x515271 + ',' + _0x4f525b))
                    _0x2d7734['push'](_0x515271, _0x4f525b);
            }
        }
        _0x5d2c79['_wallArr'] = _0x2d7734;
    }
    const {
        minC: _0x319261,
        maxC: _0x1a9e13,
        minR: _0x34c12d,
        maxR: _0x53d0db
    } = _0x5d2c79['_bounds'];
    const _0x2c38de = _0x5d2c79['_wallArr'];
    const _0x2b4167 = 0.0001;
    const _0x57d240 = new Set();
    const _0x2f58e7 = [];
    for (let _0x39bdc8 = 0x0; _0x39bdc8 < _0x2c38de['length']; _0x39bdc8 += 0x2) {
        const _0x26e28e = _0x2c38de[_0x39bdc8], _0x296361 = _0x2c38de[_0x39bdc8 + 0x1];
        const _0x5a503f = [
            _0x26e28e * _0x23cf17,
            _0x296361 * _0x23cf17,
            _0x26e28e * _0x23cf17 + _0x23cf17,
            _0x296361 * _0x23cf17,
            _0x26e28e * _0x23cf17,
            _0x296361 * _0x23cf17 + _0x23cf17,
            _0x26e28e * _0x23cf17 + _0x23cf17,
            _0x296361 * _0x23cf17 + _0x23cf17
        ];
        for (let _0x5795fe = 0x0; _0x5795fe < _0x5a503f['length']; _0x5795fe += 0x2) {
            const _0x240dd1 = _0x5a503f[_0x5795fe], _0x4ada13 = _0x5a503f[_0x5795fe + 0x1];
            const _0x4c8cb5 = Math['atan2'](_0x4ada13 - _0x212aae, _0x240dd1 - _0x48c788);
            const _0x1bb324 = Math['round'](_0x4c8cb5 * 0x4e20);
            if (!_0x57d240['has'](_0x1bb324 - 0x1)) {
                _0x57d240['add'](_0x1bb324 - 0x1);
                _0x2f58e7['push'](_0x4c8cb5 - _0x2b4167);
            }
            if (!_0x57d240['has'](_0x1bb324)) {
                _0x57d240['add'](_0x1bb324);
                _0x2f58e7['push'](_0x4c8cb5);
            }
            if (!_0x57d240['has'](_0x1bb324 + 0x1)) {
                _0x57d240['add'](_0x1bb324 + 0x1);
                _0x2f58e7['push'](_0x4c8cb5 + _0x2b4167);
            }
        }
    }
    _0x2f58e7['sort']((_0x26f547, _0x47a215) => _0x26f547 - _0x47a215);
    const _0x5cb12b = Math['hypot']((_0x1a9e13 - _0x319261 + 0x2) * _0x23cf17, (_0x53d0db - _0x34c12d + 0x2) * _0x23cf17);
    const _0x4cb49c = _0x5009c8 => {
        const _0x17e78c = Math['cos'](_0x5009c8);
        const _0x390d81 = Math['sin'](_0x5009c8);
        let _0x41a362 = _0x5cb12b;
        for (let _0x493d22 = 0x0; _0x493d22 < _0x2c38de['length']; _0x493d22 += 0x2) {
            const _0x5d2bc3 = _0x2c38de[_0x493d22], _0x97973a = _0x2c38de[_0x493d22 + 0x1];
            const _0x4547ec = _0x5d2bc3 * _0x23cf17, _0xfe3e6e = _0x97973a * _0x23cf17;
            const _0x12963d = _0x4547ec + _0x23cf17, _0x228be6 = _0xfe3e6e + _0x23cf17;
            const _0x49a477 = _0x4547ec + _0x23cf17 * 0.5, _0x14cacd = _0xfe3e6e + _0x23cf17 * 0.5;
            const _0x2010f0 = Math['abs'](_0x49a477 - _0x48c788) + Math['abs'](_0x14cacd - _0x212aae);
            if (_0x2010f0 > _0x41a362 + _0x23cf17 * 1.5)
                continue;
            let _0x51a82f, _0x9503e4, _0x5a3a2d;
            _0x51a82f = -_0x390d81 * _0x23cf17;
            if (Math['abs'](_0x51a82f) >= 1e-10) {
                _0x9503e4 = -(_0xfe3e6e - _0x212aae) * _0x23cf17 / _0x51a82f;
                _0x5a3a2d = ((_0x4547ec - _0x48c788) * _0x390d81 - (_0xfe3e6e - _0x212aae) * _0x17e78c) / _0x51a82f;
                if (_0x9503e4 > 0.001 && _0x5a3a2d >= 0x0 && _0x5a3a2d <= 0x1 && _0x9503e4 < _0x41a362)
                    _0x41a362 = _0x9503e4;
            }
            _0x51a82f = _0x17e78c * _0x23cf17;
            if (Math['abs'](_0x51a82f) >= 1e-10) {
                _0x9503e4 = (_0x12963d - _0x48c788) * _0x23cf17 / _0x51a82f;
                _0x5a3a2d = ((_0x12963d - _0x48c788) * _0x390d81 - (_0xfe3e6e - _0x212aae) * _0x17e78c) / _0x51a82f;
                if (_0x9503e4 > 0.001 && _0x5a3a2d >= 0x0 && _0x5a3a2d <= 0x1 && _0x9503e4 < _0x41a362)
                    _0x41a362 = _0x9503e4;
            }
            _0x51a82f = _0x390d81 * _0x23cf17;
            if (Math['abs'](_0x51a82f) >= 1e-10) {
                _0x9503e4 = (_0x228be6 - _0x212aae) * _0x23cf17 / _0x51a82f;
                _0x5a3a2d = ((_0x12963d - _0x48c788) * _0x390d81 - (_0x228be6 - _0x212aae) * _0x17e78c) / _0x51a82f;
                if (_0x9503e4 > 0.001 && _0x5a3a2d >= 0x0 && _0x5a3a2d <= 0x1 && _0x9503e4 < _0x41a362)
                    _0x41a362 = _0x9503e4;
            }
            _0x51a82f = -_0x17e78c * _0x23cf17;
            if (Math['abs'](_0x51a82f) >= 1e-10) {
                _0x9503e4 = -(_0x4547ec - _0x48c788) * _0x23cf17 / _0x51a82f;
                _0x5a3a2d = ((_0x4547ec - _0x48c788) * _0x390d81 - (_0x228be6 - _0x212aae) * _0x17e78c) / _0x51a82f;
                if (_0x9503e4 > 0.001 && _0x5a3a2d >= 0x0 && _0x5a3a2d <= 0x1 && _0x9503e4 < _0x41a362)
                    _0x41a362 = _0x9503e4;
            }
        }
        const _0x17c9be = _0x41a362 < _0x5cb12b ? _0x41a362 + 0x8 : _0x41a362;
        return {
            'x': _0x48c788 + _0x17e78c * _0x17c9be,
            'y': _0x212aae + _0x390d81 * _0x17c9be
        };
    };
    const _0x1af3e5 = [];
    for (let _0xe5090f = 0x0; _0xe5090f < _0x2f58e7['length']; _0xe5090f++) {
        const _0x42b319 = _0x4cb49c(_0x2f58e7[_0xe5090f]);
        _0x1af3e5['push'](_0x42b319['x'], _0x42b319['y']);
    }
    _0x491e95['polygon'] = _0x1af3e5['length'] >= 0x6 ? new Float32Array(_0x1af3e5) : null;
}
function _0x261030(_0x420273, _0xe22a37, _0x415423) {
    if (_0x526be7['isDead'])
        return;
    if (!_0x5d2c79)
        return;
    const {
        floorTiles: _0xbdea08,
        wallTiles: _0x514beb
    } = _0x5d2c79;
    if (_0xbdea08['length'] === 0x0)
        return;
    const _0x5c3a13 = _0x3262a0['SHADOW'];
    const _0x34201e = _0x3262a0['MAP']['tileSize'];
    const _0x4634c0 = _0x3262a0['CAMERA']['width'];
    const _0x5d2526 = _0x3262a0['CAMERA']['height'];
    if (!_0x3262a0['SHADOW']['_buf'] || _0x3262a0['SHADOW']['_buf']['width'] !== _0x4634c0 || _0x3262a0['SHADOW']['_buf']['height'] !== _0x5d2526) {
        _0x3262a0['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x3262a0['SHADOW']['_buf']['width'] = _0x4634c0;
        _0x3262a0['SHADOW']['_buf']['height'] = _0x5d2526;
    }
    const _0x36d3ae = _0x3262a0['SHADOW']['_buf'];
    const _0x4522f3 = _0x36d3ae['getContext']('2d');
    _0x4522f3['clearRect'](0x0, 0x0, _0x4634c0, _0x5d2526);
    _0x4522f3['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x4522f3['beginPath']();
    for (const {
                c: _0x3d14a0,
                r: _0xd91523
            } of _0xbdea08) {
        const _0x9f35e = Math['floor'](_0x3d14a0 * _0x34201e - _0xe22a37), _0x5f420e = Math['floor'](_0xd91523 * _0x34201e - _0x415423);
        if (_0x9f35e > _0x4634c0 || _0x5f420e > _0x5d2526 || _0x9f35e + _0x34201e < 0x0 || _0x5f420e + _0x34201e < 0x0)
            continue;
        _0x4522f3['rect'](_0x9f35e - 0x1, _0x5f420e - 0x1, _0x34201e + 0x2, _0x34201e + 0x2);
    }
    _0x4522f3['fill']();
    if (_0x514beb['length'] > 0x0) {
        _0x4522f3['globalCompositeOperation'] = 'destination-out';
        _0x4522f3['fillStyle'] = 'rgba(0,0,0,1)';
        _0x4522f3['beginPath']();
        for (const {
                    c: _0x4fbbe9,
                    r: _0x4cdbbf
                } of _0x514beb) {
            const _0x60a174 = Math['floor'](_0x4fbbe9 * _0x34201e - _0xe22a37), _0x3437bd = Math['floor'](_0x4cdbbf * _0x34201e - _0x415423);
            if (_0x60a174 > _0x4634c0 || _0x3437bd > _0x5d2526 || _0x60a174 + _0x34201e < 0x0 || _0x3437bd + _0x34201e < 0x0)
                continue;
            _0x4522f3['rect'](_0x60a174 - 0x1, _0x3437bd - 0x1, _0x34201e + 0x2, _0x34201e + 0x2);
        }
        _0x4522f3['fill']();
        _0x4522f3['globalCompositeOperation'] = 'source-over';
    }
    if (_0x5c3a13['polygon'] && _0x5c3a13['polygon']['length'] >= 0x6) {
        _0x4522f3['globalCompositeOperation'] = 'destination-out';
        _0x4522f3['beginPath']();
        const _0x17ff4b = _0x5c3a13['polygon'];
        _0x4522f3['moveTo'](_0x17ff4b[0x0] - _0xe22a37, _0x17ff4b[0x1] - _0x415423);
        for (let _0xb638c6 = 0x2; _0xb638c6 < _0x17ff4b['length']; _0xb638c6 += 0x2) {
            _0x4522f3['lineTo'](_0x17ff4b[_0xb638c6] - _0xe22a37, _0x17ff4b[_0xb638c6 + 0x1] - _0x415423);
        }
        _0x4522f3['closePath']();
        _0x4522f3['fill']();
        _0x4522f3['globalCompositeOperation'] = 'source-over';
    }
    _0x420273['drawImage'](_0x36d3ae, 0x0, 0x0);
}
function _0x3efdf2(_0x2bba77) {
    let _0x1944d2 = 0x0, _0x1cd019 = 0x0;
    const _0x304117 = _0x3262a0['INPUTS']['mouseX'] / _0x3262a0['SYSTEM']['viewScale'];
    const _0x2af9bd = _0x3262a0['INPUTS']['mouseY'] / _0x3262a0['SYSTEM']['viewScale'];
    const _0x3500e0 = _0x526be7['x'] - _0x3262a0['CAMERA']['x'] + _0x526be7['width'] / 0x2;
    const _0x2b72d5 = _0x526be7['y'] - _0x3262a0['CAMERA']['y'] + _0x526be7['height'] / 0x2;
    const _0x57b869 = Math['atan2'](_0x2af9bd - _0x2b72d5, _0x304117 - _0x3500e0);
    if (_0x4edd4c !== 0x0 || _0x1fe4ee !== 0x0) {
        _0x1944d2 = _0x4edd4c;
        _0x1cd019 = _0x1fe4ee;
    } else if (_0x136c46) {
        let _0x118f04 = 0x0, _0x1b785b = 0x0;
        if (_0x3262a0['INPUTS']['keys']['w'] || _0x3262a0['INPUTS']['keys']['arrowup'])
            _0x118f04 += 0x1;
        if (_0x3262a0['INPUTS']['keys']['s'] || _0x3262a0['INPUTS']['keys']['arrowdown'])
            _0x118f04 -= 0x1;
        if (_0x3262a0['INPUTS']['keys']['d'] || _0x3262a0['INPUTS']['keys']['arrowright'])
            _0x1b785b += 0x1;
        if (_0x3262a0['INPUTS']['keys']['a'] || _0x3262a0['INPUTS']['keys']['arrowleft'])
            _0x1b785b -= 0x1;
        if (_0x118f04 !== 0x0 || _0x1b785b !== 0x0) {
            const _0x259833 = _0x57b869 + Math['atan2'](_0x1b785b, _0x118f04);
            _0x1944d2 = Math['cos'](_0x259833);
            _0x1cd019 = Math['sin'](_0x259833);
        }
    } else {
        if (_0x3262a0['INPUTS']['keys']['w'] || _0x3262a0['INPUTS']['keys']['arrowup'])
            _0x1cd019 -= 0x1;
        if (_0x3262a0['INPUTS']['keys']['s'] || _0x3262a0['INPUTS']['keys']['arrowdown'])
            _0x1cd019 += 0x1;
        if (_0x3262a0['INPUTS']['keys']['a'] || _0x3262a0['INPUTS']['keys']['arrowleft'])
            _0x1944d2 -= 0x1;
        if (_0x3262a0['INPUTS']['keys']['d'] || _0x3262a0['INPUTS']['keys']['arrowright'])
            _0x1944d2 += 0x1;
        const _0x263ab7 = _0x1944d2 !== 0x0 || _0x1cd019 !== 0x0;
        if (_0x263ab7) {
            const _0x311ea4 = Math['sqrt'](_0x1944d2 * _0x1944d2 + _0x1cd019 * _0x1cd019);
            _0x1944d2 /= _0x311ea4;
            _0x1cd019 /= _0x311ea4;
        }
    }
    if (_0x3262a0['GAME_STATE'] === 'NIGHT' && _0xfcb219 === 'Skinwalker') {
        if (_0x3262a0['NIGHT_ABILITY_OPEN'] || !_0x3262a0['CURRENT_TARGET']) {
            _0x1944d2 = 0x0;
            _0x1cd019 = 0x0;
            _0x526be7['vx'] = 0x0;
            _0x526be7['vy'] = 0x0;
            _0x526be7['x'] = _0x3262a0['MAP']['columns'] * _0x3262a0['MAP']['tileSize'] / 0x2 - _0x526be7['width'] / 0x2;
            _0x526be7['y'] = _0x3262a0['MAP']['rows'] * _0x3262a0['MAP']['tileSize'] / 0x2 - _0x526be7['height'] / 0x2;
        }
    }
    const _0x2eda3a = _0x1944d2 !== 0x0 || _0x1cd019 !== 0x0;
    const _0x3f5afb = (_0x3262a0['INPUTS']['keys']['shift'] || _0x5cf804 || _0x5bd274) && _0x2eda3a;
    _0x526be7['bopTimer'] = _0x3f5afb ? _0x526be7['bopTimer'] + _0x2bba77 : 0x0;
    _0x526be7['scale'] = 0x1 + (_0x526be7['bopTimer'] > 0x0 ? Math['sin'](_0x526be7['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x2eb328 = Math['pow'](0.001, _0x2bba77);
    const _0x2254c5 = _0x3f5afb ? 0x74a : 0x5d5;
    _0x526be7['vx'] += _0x1944d2 * _0x2254c5 * _0x2bba77;
    _0x526be7['vy'] += _0x1cd019 * _0x2254c5 * _0x2bba77;
    _0x526be7['vx'] *= _0x2eb328;
    _0x526be7['vy'] *= _0x2eb328;
    _0x526be7['x'] += _0x526be7['vx'] * _0x2bba77;
    _0x526be7['y'] += _0x526be7['vy'] * _0x2bba77;
    for (let _0x1469c9 = 0x0; _0x1469c9 < 0x3; _0x1469c9++)
        _0x92c27c();
    for (let _0x53e6a8 = 0x0; _0x53e6a8 < 0x2; _0x53e6a8++)
        _0x40037c();
    for (let _0x42c331 = 0x0; _0x42c331 < 0x2; _0x42c331++)
        _0x400ce3();
    if (_0x526be7['x'] < 0x0)
        _0x526be7['x'] = 0x0;
    if (_0x526be7['y'] < 0x0)
        _0x526be7['y'] = 0x0;
    if (_0x526be7['x'] + _0x526be7['width'] > _0x3262a0['MAP']['columns'] * _0x3262a0['MAP']['tileSize'])
        _0x526be7['x'] = _0x3262a0['MAP']['columns'] * _0x3262a0['MAP']['tileSize'] - _0x526be7['width'];
    if (_0x526be7['y'] + _0x526be7['height'] > _0x3262a0['MAP']['rows'] * _0x3262a0['MAP']['tileSize'])
        _0x526be7['y'] = _0x3262a0['MAP']['rows'] * _0x3262a0['MAP']['tileSize'] - _0x526be7['height'];
    if (_0x1248f8) {
        _0x526be7['angle'] = _0x80c757 + Math['PI'] / 0x2;
    } else if (_0x4edd4c !== 0x0 || _0x1fe4ee !== 0x0) {
        _0x526be7['angle'] = Math['atan2'](_0x1fe4ee, _0x4edd4c) + Math['PI'] / 0x2;
    } else if (!_0x25f80e) {
        _0x526be7['angle'] = _0x57b869 + Math['PI'] / 0x2;
    }
    const _0x2f1c94 = _0x526be7['x'] + _0x526be7['width'] / 0x2 - _0x3262a0['CAMERA']['width'] / 0x2;
    const _0x2fbc3b = _0x526be7['y'] + _0x526be7['height'] / 0x2 - _0x3262a0['CAMERA']['height'] / 0x2;
    if (_0x3262a0['CAMERA']['x'] === null || isNaN(_0x3262a0['CAMERA']['x']) || !isFinite(_0x3262a0['CAMERA']['x'])) {
        _0x3262a0['CAMERA']['x'] = _0x2f1c94;
        _0x3262a0['CAMERA']['y'] = _0x2fbc3b;
    } else {
        const _0x48a9e7 = 0x1 - Math['exp'](-Math['max'](0x0, _0x2bba77) * 0x28);
        _0x3262a0['CAMERA']['x'] += (_0x2f1c94 - _0x3262a0['CAMERA']['x']) * _0x48a9e7;
        _0x3262a0['CAMERA']['y'] += (_0x2fbc3b - _0x3262a0['CAMERA']['y']) * _0x48a9e7;
    }
    for (const _0xd71d1c in _0x568307) {
        const _0x2ef0da = _0x568307[_0xd71d1c];
        if (_0x2ef0da['renderX'] === undefined) {
            _0x2ef0da['renderX'] = _0x2ef0da['x'];
            _0x2ef0da['renderY'] = _0x2ef0da['y'];
            _0x2ef0da['renderAngle'] = _0x2ef0da['angle'] || 0x0;
        }
        const _0x32eeb2 = _0x2ef0da['x'] + (_0x2ef0da['vx'] || 0x0) * _0x2bba77;
        const _0x3f58a7 = _0x2ef0da['y'] + (_0x2ef0da['vy'] || 0x0) * _0x2bba77;
        _0x2ef0da['x'] = _0x32eeb2;
        _0x2ef0da['y'] = _0x3f58a7;
        const _0x27d9d8 = 0x1 - Math['exp'](-_0x2bba77 * 0x12);
        const _0x19a0b3 = _0x2ef0da['x'] - _0x2ef0da['renderX'], _0x5b2fb2 = _0x2ef0da['y'] - _0x2ef0da['renderY'];
        const _0x4ccebd = Math['sqrt'](_0x19a0b3 * _0x19a0b3 + _0x5b2fb2 * _0x5b2fb2);
        const _0x45fc0f = 0xc8;
        if (_0x4ccebd > _0x45fc0f) {
            _0x2ef0da['renderX'] = _0x2ef0da['x'] - _0x19a0b3 / _0x4ccebd * _0x45fc0f;
            _0x2ef0da['renderY'] = _0x2ef0da['y'] - _0x5b2fb2 / _0x4ccebd * _0x45fc0f;
        }
        _0x2ef0da['renderX'] += (_0x2ef0da['x'] - _0x2ef0da['renderX']) * _0x27d9d8;
        _0x2ef0da['renderY'] += (_0x2ef0da['y'] - _0x2ef0da['renderY']) * _0x27d9d8;
        let _0x449ebe = (_0x2ef0da['angle'] || 0x0) - _0x2ef0da['renderAngle'];
        while (_0x449ebe < -Math['PI'])
            _0x449ebe += Math['PI'] * 0x2;
        while (_0x449ebe > Math['PI'])
            _0x449ebe -= Math['PI'] * 0x2;
        _0x2ef0da['renderAngle'] += _0x449ebe * (0x1 - Math['exp'](-_0x2bba77 * 0x14));
    }
    if (_0x3262a0['GAME_STATE'] === 'NIGHT') {
        _0x205164 = Math['min'](0.6, _0x205164 + _0x2bba77 * 0.5);
    } else {
        _0x205164 = Math['max'](0x0, _0x205164 - _0x2bba77 * 0.5);
    }
    _0x3148fe();
    _0x13d9a1();
}
function _0x262d27(_0x4a086e, _0x4c28ab, _0x248771, _0x1a8edc, _0x1d0e9b = !![]) {
    _0x4a086e['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x4fb27c = _0x4a086e['measureText'](_0x4c28ab)['width'];
    const _0x57735e = _0x4fb27c + 0x18;
    const _0x4ea1ff = 0x1c;
    _0x4a086e['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x4a086e['beginPath']();
    if (_0x4a086e['roundRect']) {
        _0x4a086e['roundRect'](_0x248771 - _0x57735e / 0x2, _0x1a8edc - _0x4ea1ff, _0x57735e, _0x4ea1ff, 0x6);
    } else {
        _0x4a086e['rect'](_0x248771 - _0x57735e / 0x2, _0x1a8edc - _0x4ea1ff, _0x57735e, _0x4ea1ff);
    }
    _0x4a086e['fill']();
    if (_0x1d0e9b) {
        _0x4a086e['beginPath']();
        _0x4a086e['moveTo'](_0x248771 - 0x6, _0x1a8edc);
        _0x4a086e['lineTo'](_0x248771 + 0x6, _0x1a8edc);
        _0x4a086e['lineTo'](_0x248771, _0x1a8edc + 0x6);
        _0x4a086e['fill']();
    }
    _0x4a086e['fillStyle'] = '#ffffff';
    _0x4a086e['textAlign'] = 'center';
    _0x4a086e['textBaseline'] = 'middle';
    _0x4a086e['fillText'](_0x4c28ab, _0x248771, _0x1a8edc - _0x4ea1ff / 0x2 + 0x1);
}
function _0xee1f12(_0x546d72, _0x37037f, _0x3d8683, _0x2f4da4) {
    if (!_0x37037f || _0x37037f['length'] === 0x0)
        return;
    let _0x20089b = _0x2f4da4;
    for (let _0x5ef2b7 = 0x0; _0x5ef2b7 < _0x37037f['length']; _0x5ef2b7++) {
        _0x262d27(_0x546d72, _0x37037f[_0x5ef2b7]['text'], _0x3d8683, _0x20089b, _0x5ef2b7 === 0x0);
        _0x20089b -= 0x24;
    }
}
function _0x25360b() {
    if (!_0x3262a0['SYSTEM']['isReady'])
        return;
    _0x1d0a3e['fillStyle'] = '#000000';
    _0x1d0a3e['fillRect'](0x0, 0x0, _0x191092['width'], _0x191092['height']);
    _0x1d0a3e['save']();
    try {
        _0x1d0a3e['scale'](_0x3262a0['SYSTEM']['viewScale'], _0x3262a0['SYSTEM']['viewScale']);
        _0x1d0a3e['imageSmoothingEnabled'] = ![];
        const _0x5ab1bb = Math['floor'](_0x3262a0['CAMERA']['x'] || 0x0);
        const _0x596d38 = Math['floor'](_0x3262a0['CAMERA']['y'] || 0x0);
        const _0x3ce67f = Math['max'](0x0, Math['floor'](_0x5ab1bb / _0x3262a0['MAP']['chunkSize']));
        const _0x23ebb6 = Math['min'](_0x3262a0['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x5ab1bb + _0x3262a0['CAMERA']['width']) / _0x3262a0['MAP']['chunkSize']));
        const _0x2c6142 = Math['max'](0x0, Math['floor'](_0x596d38 / _0x3262a0['MAP']['chunkSize']));
        const _0x7e60f = Math['min'](_0x3262a0['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x596d38 + _0x3262a0['CAMERA']['height']) / _0x3262a0['MAP']['chunkSize']));
        for (let _0x1dae01 = _0x2c6142; _0x1dae01 <= _0x7e60f; _0x1dae01++)
            for (let _0xe258b9 = _0x3ce67f; _0xe258b9 <= _0x23ebb6; _0xe258b9++) {
                const _0x17c311 = _0xe258b9 * _0x3262a0['MAP']['chunkSize'] - _0x5ab1bb;
                const _0x31c83c = _0x1dae01 * _0x3262a0['MAP']['chunkSize'] - _0x596d38;
                _0x1d0a3e['drawImage'](_0x3262a0['MAP']['bgChunks'][_0x1dae01][_0xe258b9], _0x17c311, _0x31c83c, _0x3262a0['MAP']['chunkSize'] + 0x1, _0x3262a0['MAP']['chunkSize'] + 0x1);
            }
        if (_0x18fd10['complete'] && _0x18fd10['naturalWidth'] > 0x0) {
            const _0x5d6099 = _0x3262a0['MAP']['tileSize'];
            const _0x423e9e = _0x5d6099 * 0xa;
            const _0x2b042e = _0x3262a0['MAP']['columns'] / 0x2 * _0x5d6099 - _0x423e9e / 0x2 - _0x5ab1bb;
            const _0x549661 = _0x3262a0['MAP']['rows'] / 0x2 * _0x5d6099 - _0x423e9e / 0x2 - _0x596d38;
            _0x1d0a3e['imageSmoothingEnabled'] = ![];
            _0x1d0a3e['drawImage'](_0x18fd10, _0x2b042e, _0x549661, _0x423e9e, _0x423e9e);
        }
        if (_0x173d7c['complete'] && _0x173d7c['naturalWidth'] > 0x0) {
            _0x3262a0['ENTITIES']['forEach'](_0x4d1130 => {
                if (_0x4d1130['type'] !== 'table')
                    return;
                _0x1d0a3e['save']();
                _0x1d0a3e['imageSmoothingEnabled'] = ![];
                const _0x3d73f2 = _0x173d7c['naturalWidth'] >= _0x173d7c['naturalHeight'];
                const _0x264b7e = _0x4d1130['w'] >= _0x4d1130['h'];
                if (_0x3d73f2 === _0x264b7e) {
                    _0x1d0a3e['drawImage'](_0x173d7c, _0x4d1130['x'] - _0x5ab1bb, _0x4d1130['y'] - _0x596d38, _0x4d1130['w'], _0x4d1130['h']);
                } else {
                    _0x1d0a3e['translate'](_0x4d1130['x'] - _0x5ab1bb + _0x4d1130['w'] / 0x2, _0x4d1130['y'] - _0x596d38 + _0x4d1130['h'] / 0x2);
                    _0x1d0a3e['rotate'](Math['PI'] / 0x2);
                    _0x1d0a3e['drawImage'](_0x173d7c, -_0x4d1130['h'] / 0x2, -_0x4d1130['w'] / 0x2, _0x4d1130['h'], _0x4d1130['w']);
                }
                _0x1d0a3e['restore']();
            });
        } else {
            _0x3262a0['ENTITIES']['forEach'](_0x36f197 => {
                if (_0x36f197['type'] !== 'table')
                    return;
                _0x1d0a3e['save']();
                _0x1d0a3e['fillStyle'] = '#6b4423';
                _0x1d0a3e['fillRect'](_0x36f197['x'] - _0x5ab1bb, _0x36f197['y'] - _0x596d38, _0x36f197['w'], _0x36f197['h']);
                _0x1d0a3e['strokeStyle'] = '#422810';
                _0x1d0a3e['lineWidth'] = 0x3;
                _0x1d0a3e['strokeRect'](_0x36f197['x'] - _0x5ab1bb + 0x1, _0x36f197['y'] - _0x596d38 + 0x1, _0x36f197['w'] - 0x2, _0x36f197['h'] - 0x2);
                _0x1d0a3e['fillStyle'] = '#82532a';
                _0x1d0a3e['fillRect'](_0x36f197['x'] - _0x5ab1bb + 0x4, _0x36f197['y'] - _0x596d38 + 0x4, _0x36f197['w'] - 0x8, _0x36f197['h'] - 0x8);
                _0x1d0a3e['restore']();
            });
        }
        if (_0x3e3a4f) {
            for (let _0x407d2d = _0x2c6142; _0x407d2d <= _0x7e60f; _0x407d2d++) {
                for (let _0x231d8e = _0x3ce67f; _0x231d8e <= _0x23ebb6; _0x231d8e++) {
                    const _0x47a2b8 = _0x231d8e * _0x3262a0['MAP']['chunkSize'] - _0x5ab1bb;
                    const _0x3acc1b = _0x407d2d * _0x3262a0['MAP']['chunkSize'] - _0x596d38;
                    _0x1d0a3e['drawImage'](_0x3262a0['MAP']['fgChunks'][_0x407d2d][_0x231d8e], _0x47a2b8, _0x3acc1b, _0x3262a0['MAP']['chunkSize'] + 0x1, _0x3262a0['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x461938 = _0x3262a0['GAME_STATE'] === 'NIGHT' && _0xfcb219 === 'Skinwalker' && !_0x526be7['isDead'];
        const _0x1ebf82 = _0x526be7['x'] - _0x5ab1bb + _0x526be7['width'] / 0x2;
        const _0x3ded6e = _0x526be7['y'] - _0x596d38 + _0x526be7['height'] / 0x2;
        const _0x4681c7 = _0x526be7['width'] * _0x526be7['scale'] * 1.3;
        const _0x3150f3 = _0x526be7['height'] * _0x526be7['scale'] * 1.3;
        for (const _0x4c90cd in _0x568307) {
            const _0x34f86d = _0x568307[_0x4c90cd];
            if (_0x34f86d['isDead'])
                continue;
            const _0x2d41a2 = (_0x34f86d['renderX'] ?? _0x34f86d['x']) - _0x5ab1bb + _0x34f86d['width'] / 0x2;
            const _0x5a6907 = (_0x34f86d['renderY'] ?? _0x34f86d['y']) - _0x596d38 + _0x34f86d['height'] / 0x2;
            const _0x231ec9 = Math['min'](0x2, Math['max'](0.3, _0x34f86d['scale'] || 0x1));
            const _0x4a8f07 = _0x34f86d['width'] * _0x231ec9 * 1.3;
            const _0x3b1db6 = _0x34f86d['height'] * _0x231ec9 * 1.3;
            _0x1d0a3e['save']();
            try {
                _0x1d0a3e['translate'](_0x2d41a2, _0x5a6907);
                _0x1d0a3e['rotate'](_0x34f86d['renderAngle'] ?? 0x0);
                if (_0x34f86d['isDark'])
                    _0x1d0a3e['filter'] = 'brightness(0)';
                _0x23b009(_0x1d0a3e, _0x34f86d['body'], _0x34f86d['eyes'], _0x4a8f07, _0x3b1db6);
                if (_0x1b4c70['has'](parseInt(_0x4c90cd)) && _0x2135b4['complete'] && _0x2135b4['naturalWidth'] > 0x0) {
                    _0x1d0a3e['drawImage'](_0x2135b4, -_0x4a8f07 / 0x2, -_0x3b1db6 / 0x2, _0x4a8f07, _0x3b1db6);
                }
                if (_0x34f86d['isDark'])
                    _0x1d0a3e['filter'] = 'none';
            } finally {
                _0x1d0a3e['restore']();
            }
            if (!_0x36e8d7((_0x34f86d['renderX'] ?? _0x34f86d['x']) + _0x34f86d['width'] / 0x2, (_0x34f86d['renderY'] ?? _0x34f86d['y']) + _0x34f86d['height'] / 0x2)) {
                _0x1d0a3e['textAlign'] = 'center';
                _0x1d0a3e['lineJoin'] = 'round';
                _0x1d0a3e['lineWidth'] = 0x3;
                _0x1d0a3e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1d0a3e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x1d0a3e['fillStyle'] = _0x1b4c70['has'](parseInt(_0x4c90cd)) ? '#cc88ff' : '#ffffff';
                const _0x9f8959 = _0x34f86d['isDark'] ? '???' : _0x34f86d['name'] + (_0x34f86d['isOwner'] ? '\x20[🗝️]' : '');
                _0x1d0a3e['strokeText'](_0x9f8959, _0x2d41a2, _0x5a6907 - _0x3b1db6 / 0x2 - 0x10);
                _0x1d0a3e['fillText'](_0x9f8959, _0x2d41a2, _0x5a6907 - _0x3b1db6 / 0x2 - 0x10);
            }
        }
        if (!_0x526be7['isDead']) {
            _0x1d0a3e['save']();
            try {
                _0x1d0a3e['translate'](_0x1ebf82, _0x3ded6e);
                _0x1d0a3e['rotate'](_0x526be7['angle']);
                if (_0x461938)
                    _0x1d0a3e['filter'] = 'brightness(0)';
                _0x23b009(_0x1d0a3e, _0x847bf5, _0x320664, _0x4681c7, _0x3150f3);
                if (_0x1b4c70['has'](_0x33db9e) && _0x2135b4['complete'] && _0x2135b4['naturalWidth'] > 0x0) {
                    _0x1d0a3e['drawImage'](_0x2135b4, -_0x4681c7 / 0x2, -_0x3150f3 / 0x2, _0x4681c7, _0x3150f3);
                }
                if (_0x461938)
                    _0x1d0a3e['filter'] = 'none';
            } finally {
                _0x1d0a3e['restore']();
            }
            if (!_0x36e8d7(_0x526be7['x'] + _0x526be7['width'] / 0x2, _0x526be7['y'] + _0x526be7['height'] / 0x2)) {
                _0x1d0a3e['textAlign'] = 'center';
                _0x1d0a3e['lineJoin'] = 'round';
                _0x1d0a3e['lineWidth'] = 0x3;
                _0x1d0a3e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1d0a3e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x1d0a3e['fillStyle'] = _0x1b4c70['has'](_0x33db9e) ? '#cc88ff' : '#ffffff';
                const _0x415496 = _0x461938 ? '???' : _0x176b60 + (_0x1f52a3 ? '\x20[🗝️]' : '');
                _0x1d0a3e['strokeText'](_0x415496, _0x1ebf82, _0x3ded6e - _0x3150f3 / 0x2 - 0x10);
                _0x1d0a3e['fillText'](_0x415496, _0x1ebf82, _0x3ded6e - _0x3150f3 / 0x2 - 0x10);
            }
        }
        if (_0x3262a0['MAP']['wallChunks'] && _0x3262a0['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x23ffc3 = _0x2c6142; _0x23ffc3 <= _0x7e60f; _0x23ffc3++)
                for (let _0x46d5be = _0x3ce67f; _0x46d5be <= _0x23ebb6; _0x46d5be++) {
                    if (!_0x3262a0['MAP']['wallChunks'][_0x23ffc3] || !_0x3262a0['MAP']['wallChunks'][_0x23ffc3][_0x46d5be])
                        continue;
                    const _0x49d30d = _0x46d5be * _0x3262a0['MAP']['chunkSize'] - _0x5ab1bb;
                    const _0x483fdd = _0x23ffc3 * _0x3262a0['MAP']['chunkSize'] - _0x596d38;
                    _0x1d0a3e['drawImage'](_0x3262a0['MAP']['wallChunks'][_0x23ffc3][_0x46d5be], _0x49d30d, _0x483fdd, _0x3262a0['MAP']['chunkSize'] + 0x1, _0x3262a0['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0xb0dcea of _0x3262a0['ENTITIES']) {
            if (_0xb0dcea['type'] !== 'npc')
                continue;
            const _0x35e34c = _0xb0dcea['x'] - _0x5ab1bb + _0xb0dcea['w'] / 0x2;
            const _0x128593 = _0xb0dcea['y'] - _0x596d38 + _0xb0dcea['h'] / 0x2;
            const _0x49bd93 = _0xb0dcea['w'];
            const _0x48f192 = _0xb0dcea['h'];
            _0x1d0a3e['save']();
            _0x1d0a3e['translate'](_0x35e34c, _0x128593);
            _0x1d0a3e['rotate'](_0xb0dcea['angle'] !== undefined ? _0xb0dcea['angle'] : 0x0);
            _0x23b009(_0x1d0a3e, _0xb0dcea['body'] || 'yanito932.png', _0xb0dcea['eyes'], _0x49bd93, _0x48f192);
            _0x1d0a3e['restore']();
            _0x1d0a3e['textAlign'] = 'center';
            _0x1d0a3e['lineJoin'] = 'round';
            _0x1d0a3e['lineWidth'] = 0x3;
            _0x1d0a3e['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x1d0a3e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x1d0a3e['fillStyle'] = '#aaaaaa';
            _0x1d0a3e['strokeText'](_0xb0dcea['name'] || 'NPC', _0x35e34c, _0x128593 - _0x48f192 / 0x2 - 0x10);
            _0x1d0a3e['fillText'](_0xb0dcea['name'] || 'NPC', _0x35e34c, _0x128593 - _0x48f192 / 0x2 - 0x10);
        }
        if (_0x526be7['isDead']) {
            for (const _0x3fb1b4 in _0x568307) {
                const _0x57b9e8 = _0x568307[_0x3fb1b4];
                if (!_0x57b9e8['isDead'])
                    continue;
                const _0x3a3a6b = (_0x57b9e8['renderX'] ?? _0x57b9e8['x']) - _0x5ab1bb + _0x57b9e8['width'] / 0x2;
                const _0x19b399 = (_0x57b9e8['renderY'] ?? _0x57b9e8['y']) - _0x596d38 + _0x57b9e8['height'] / 0x2;
                const _0x2e0ddf = _0x57b9e8['width'] * (_0x57b9e8['scale'] || 0x1) * 1.3;
                const _0x536159 = _0x57b9e8['height'] * (_0x57b9e8['scale'] || 0x1) * 1.3;
                _0x1d0a3e['save']();
                try {
                    _0x1d0a3e['translate'](_0x3a3a6b, _0x19b399);
                    _0x1d0a3e['rotate'](_0x57b9e8['renderAngle'] ?? 0x0);
                    _0x1d0a3e['globalAlpha'] = 0.3;
                    _0x23b009(_0x1d0a3e, _0x57b9e8['body'], _0x57b9e8['eyes'], _0x2e0ddf, _0x536159);
                } finally {
                    _0x1d0a3e['restore']();
                }
                if (!_0x36e8d7((_0x57b9e8['renderX'] ?? _0x57b9e8['x']) + _0x57b9e8['width'] / 0x2, (_0x57b9e8['renderY'] ?? _0x57b9e8['y']) + _0x57b9e8['height'] / 0x2)) {
                    _0x1d0a3e['save']();
                    _0x1d0a3e['globalAlpha'] = 0.3;
                    _0x1d0a3e['textAlign'] = 'center';
                    _0x1d0a3e['lineJoin'] = 'round';
                    _0x1d0a3e['lineWidth'] = 0x3;
                    _0x1d0a3e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x1d0a3e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x1d0a3e['fillStyle'] = '#ffffff';
                    const _0x49d7f2 = _0x57b9e8['name'] + (_0x57b9e8['isOwner'] ? '\x20[🗝️]' : '');
                    _0x1d0a3e['strokeText'](_0x49d7f2, _0x3a3a6b, _0x19b399 - _0x536159 / 0x2 - 0x10);
                    _0x1d0a3e['fillText'](_0x49d7f2, _0x3a3a6b, _0x19b399 - _0x536159 / 0x2 - 0x10);
                    _0x1d0a3e['restore']();
                }
            }
            _0x1d0a3e['save']();
            try {
                _0x1d0a3e['translate'](_0x1ebf82, _0x3ded6e);
                _0x1d0a3e['rotate'](_0x526be7['angle']);
                _0x1d0a3e['globalAlpha'] = 0.3;
                _0x23b009(_0x1d0a3e, _0x847bf5, _0x320664, _0x4681c7, _0x3150f3);
            } finally {
                _0x1d0a3e['restore']();
            }
            if (!_0x36e8d7(_0x526be7['x'] + _0x526be7['width'] / 0x2, _0x526be7['y'] + _0x526be7['height'] / 0x2)) {
                _0x1d0a3e['save']();
                _0x1d0a3e['globalAlpha'] = 0.3;
                _0x1d0a3e['textAlign'] = 'center';
                _0x1d0a3e['lineJoin'] = 'round';
                _0x1d0a3e['lineWidth'] = 0x3;
                _0x1d0a3e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1d0a3e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x1d0a3e['fillStyle'] = '#ffffff';
                const _0x5a99d8 = _0x176b60 + (_0x1f52a3 ? '\x20[🗝️]' : '');
                _0x1d0a3e['strokeText'](_0x5a99d8, _0x1ebf82, _0x3ded6e - _0x3150f3 / 0x2 - 0x10);
                _0x1d0a3e['fillText'](_0x5a99d8, _0x1ebf82, _0x3ded6e - _0x3150f3 / 0x2 - 0x10);
                _0x1d0a3e['restore']();
            }
        }
        for (let _0x1df28c = _0x2c6142; _0x1df28c <= _0x7e60f; _0x1df28c++)
            for (let _0xec9800 = _0x3ce67f; _0xec9800 <= _0x23ebb6; _0xec9800++) {
                const _0x285365 = _0xec9800 * _0x3262a0['MAP']['chunkSize'] - _0x5ab1bb;
                const _0x405287 = _0x1df28c * _0x3262a0['MAP']['chunkSize'] - _0x596d38;
                _0x1d0a3e['drawImage'](_0x3262a0['MAP']['fgChunks'][_0x1df28c][_0xec9800], _0x285365, _0x405287, _0x3262a0['MAP']['chunkSize'] + 0x1, _0x3262a0['MAP']['chunkSize'] + 0x1);
            }
        if (_0x3262a0['EDITOR']['enabled'] && _0x3262a0['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x85c512 = _0x3262a0['INPUTS']['mouseX'] / _0x3262a0['SYSTEM']['viewScale'] + _0x3262a0['CAMERA']['x'];
            const _0xe512ba = _0x3262a0['INPUTS']['mouseY'] / _0x3262a0['SYSTEM']['viewScale'] + _0x3262a0['CAMERA']['y'];
            const _0x21144c = Math['floor'](_0x85c512 / _0x3262a0['MAP']['tileSize']);
            const _0x3250af = Math['floor'](_0xe512ba / _0x3262a0['MAP']['tileSize']);
            if (_0x21144c >= 0x0 && _0x21144c < _0x3262a0['MAP']['columns'] && _0x3250af >= 0x0 && _0x3250af < _0x3262a0['MAP']['rows']) {
                const _0x4a9755 = _0x21144c * _0x3262a0['MAP']['tileSize'] - _0x5ab1bb;
                const _0x5a2c32 = _0x3250af * _0x3262a0['MAP']['tileSize'] - _0x596d38;
                _0x1d0a3e['save']();
                _0x1d0a3e['globalAlpha'] = 0.5;
                if (_0x3262a0['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x34f864 = _0x3262a0['EDITOR']['selectedTileGid'] - 0x1;
                    _0x1d0a3e['drawImage'](_0x358ba4, _0x34f864 % _0x3262a0['MAP']['tilesetCols'] * _0x3262a0['MAP']['tileSize'], Math['floor'](_0x34f864 / _0x3262a0['MAP']['tilesetCols']) * _0x3262a0['MAP']['tileSize'], _0x3262a0['MAP']['tileSize'], _0x3262a0['MAP']['tileSize'], _0x4a9755, _0x5a2c32, _0x3262a0['MAP']['tileSize'], _0x3262a0['MAP']['tileSize']);
                } else {
                    _0x1d0a3e['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x1d0a3e['fillRect'](_0x4a9755, _0x5a2c32, _0x3262a0['MAP']['tileSize'], _0x3262a0['MAP']['tileSize']);
                }
                _0x1d0a3e['restore']();
            }
        }
        _0x261030(_0x1d0a3e, _0x5ab1bb, _0x596d38);
        if (_0x205164 > 0x0) {
            _0x1d0a3e['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x205164 + ')';
            _0x1d0a3e['fillRect'](0x0, 0x0, _0x3262a0['CAMERA']['width'], _0x3262a0['CAMERA']['height']);
        }
        for (const _0x56493e in _0x568307) {
            const _0x20dae7 = _0x568307[_0x56493e];
            if (_0x20dae7['isDead'] && !_0x526be7['isDead'])
                continue;
            const _0x194718 = (_0x20dae7['renderX'] ?? _0x20dae7['x']) - _0x5ab1bb + _0x20dae7['width'] / 0x2;
            const _0x45a122 = (_0x20dae7['renderY'] ?? _0x20dae7['y']) - _0x596d38 + _0x20dae7['height'] / 0x2;
            _0xee1f12(_0x1d0a3e, _0x20dae7['chats'], _0x194718, _0x45a122 - _0x20dae7['height'] / 0x2 - 0x20);
        }
        _0xee1f12(_0x1d0a3e, _0x526be7['chats'], _0x1ebf82, _0x3ded6e - _0x526be7['height'] / 0x2 - 0x20);
    } finally {
        _0x1d0a3e['restore']();
    }
}
function _0x31c5bf(_0x307d63) {
    if (!_0x3262a0['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x31c5bf);
    let _0x32e3f6 = (_0x307d63 - _0x3262a0['SYSTEM']['lastTime']) / 0x3e8;
    _0x3262a0['SYSTEM']['lastTime'] = _0x307d63;
    if (_0x32e3f6 > 0.1)
        _0x32e3f6 = 0.1;
    if (_0x32e3f6 < 0x0 || isNaN(_0x32e3f6))
        _0x32e3f6 = 0.016;
    if (_0x3e3a4f) {
        _0x12c525(_0x32e3f6);
        _0x25360b();
        return;
    }
    if (!_0x33db9e)
        return;
    _0x3efdf2(_0x32e3f6);
    _0x2a7394['tick'](_0x307d63);
    _0x25360b();
}
function _0x5a1e91() {
    const _0x1c57eb = Math['ceil'](_0x3262a0['MAP']['columns'] * _0x3262a0['MAP']['tileSize'] / _0x3262a0['MAP']['chunkSize']);
    const _0x507455 = Math['ceil'](_0x3262a0['MAP']['rows'] * _0x3262a0['MAP']['tileSize'] / _0x3262a0['MAP']['chunkSize']);
    _0x3262a0['MAP']['bgChunks'] = [];
    _0x3262a0['MAP']['fgChunks'] = [];
    _0x3262a0['MAP']['wallChunks'] = [];
    for (let _0x50ae10 = 0x0; _0x50ae10 < _0x507455; _0x50ae10++) {
        _0x3262a0['MAP']['bgChunks'][_0x50ae10] = [];
        _0x3262a0['MAP']['fgChunks'][_0x50ae10] = [];
        _0x3262a0['MAP']['wallChunks'][_0x50ae10] = [];
        for (let _0x212e7f = 0x0; _0x212e7f < _0x1c57eb; _0x212e7f++) {
            const _0x170ca2 = document['createElement']('canvas');
            _0x170ca2['width'] = _0x170ca2['height'] = _0x3262a0['MAP']['chunkSize'];
            const _0x36c985 = document['createElement']('canvas');
            _0x36c985['width'] = _0x36c985['height'] = _0x3262a0['MAP']['chunkSize'];
            const _0x34ab71 = document['createElement']('canvas');
            _0x34ab71['width'] = _0x34ab71['height'] = _0x3262a0['MAP']['chunkSize'];
            _0x3262a0['MAP']['bgChunks'][_0x50ae10][_0x212e7f] = _0x170ca2;
            _0x3262a0['MAP']['fgChunks'][_0x50ae10][_0x212e7f] = _0x36c985;
            _0x3262a0['MAP']['wallChunks'][_0x50ae10][_0x212e7f] = _0x34ab71;
            _0x520db8(_0x212e7f, _0x50ae10);
        }
    }
}
function _0x520db8(_0x294b68, _0x47f7e2) {
    const _0x2c7afc = _0x3262a0['MAP']['bgChunks'][_0x47f7e2][_0x294b68]['getContext']('2d', { 'alpha': !![] });
    const _0x14d5ce = _0x3262a0['MAP']['fgChunks'][_0x47f7e2][_0x294b68]['getContext']('2d', { 'alpha': !![] });
    const _0x476820 = _0x3262a0['MAP']['wallChunks'][_0x47f7e2] && _0x3262a0['MAP']['wallChunks'][_0x47f7e2][_0x294b68] ? _0x3262a0['MAP']['wallChunks'][_0x47f7e2][_0x294b68]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x2c7afc['imageSmoothingEnabled'] = _0x14d5ce['imageSmoothingEnabled'] = ![];
    if (_0x476820)
        _0x476820['imageSmoothingEnabled'] = ![];
    _0x2c7afc['clearRect'](0x0, 0x0, _0x3262a0['MAP']['chunkSize'], _0x3262a0['MAP']['chunkSize']);
    _0x14d5ce['clearRect'](0x0, 0x0, _0x3262a0['MAP']['chunkSize'], _0x3262a0['MAP']['chunkSize']);
    if (_0x476820)
        _0x476820['clearRect'](0x0, 0x0, _0x3262a0['MAP']['chunkSize'], _0x3262a0['MAP']['chunkSize']);
    const _0x420d7a = Math['floor'](_0x294b68 * _0x3262a0['MAP']['chunkSize'] / _0x3262a0['MAP']['tileSize']);
    const _0x217553 = Math['ceil']((_0x294b68 + 0x1) * _0x3262a0['MAP']['chunkSize'] / _0x3262a0['MAP']['tileSize']);
    const _0x4f8376 = Math['floor'](_0x47f7e2 * _0x3262a0['MAP']['chunkSize'] / _0x3262a0['MAP']['tileSize']);
    const _0x30222f = Math['ceil']((_0x47f7e2 + 0x1) * _0x3262a0['MAP']['chunkSize'] / _0x3262a0['MAP']['tileSize']);
    const _0x2a5a89 = 0.5;
    const _0x445376 = _0x3262a0['MAP']['tileSize'] - _0x2a5a89 * 0x2;
    _0x3262a0['MAP']['layers']['forEach'](_0x325bae => {
        const _0x5576c9 = _0x325bae['name'] === 'walls';
        const _0x3a757f = _0x325bae['name'] === 'trees' ? _0x14d5ce : _0x5576c9 ? _0x476820 || _0x2c7afc : _0x2c7afc;
        for (let _0x58b3b3 = Math['max'](0x0, _0x4f8376); _0x58b3b3 < Math['min'](_0x3262a0['MAP']['rows'], _0x30222f); _0x58b3b3++) {
            for (let _0x1058f7 = Math['max'](0x0, _0x420d7a); _0x1058f7 < Math['min'](_0x3262a0['MAP']['columns'], _0x217553); _0x1058f7++) {
                let _0x1cd348 = _0x325bae['data'][_0x58b3b3 * _0x3262a0['MAP']['columns'] + _0x1058f7];
                if (_0x325bae['name'] === 'floor2' && _0x3262a0['MAP']['doors'] && _0x3262a0['MAP']['doors'][_0x58b3b3 * _0x3262a0['MAP']['columns'] + _0x1058f7]) {
                    _0x1cd348 = 0x2;
                }
                if (_0x1cd348 > 0x0) {
                    const _0x541d6c = _0x1cd348 - 0x1;
                    const _0x205dc9 = _0x541d6c % _0x3262a0['MAP']['tilesetCols'] * _0x3262a0['MAP']['tileSize'] + _0x2a5a89;
                    const _0x62a2a6 = Math['floor'](_0x541d6c / _0x3262a0['MAP']['tilesetCols']) * _0x3262a0['MAP']['tileSize'] + _0x2a5a89;
                    const _0x4f4398 = _0x1058f7 * _0x3262a0['MAP']['tileSize'] - _0x294b68 * _0x3262a0['MAP']['chunkSize'];
                    const _0x27adba = _0x58b3b3 * _0x3262a0['MAP']['tileSize'] - _0x47f7e2 * _0x3262a0['MAP']['chunkSize'];
                    if (_0x1cd348 === 0x4) {
                        const _0x2a6a5b = 0x1;
                        const _0x30d108 = _0x2a6a5b % _0x3262a0['MAP']['tilesetCols'] * _0x3262a0['MAP']['tileSize'] + _0x2a5a89;
                        const _0xb29250 = Math['floor'](_0x2a6a5b / _0x3262a0['MAP']['tilesetCols']) * _0x3262a0['MAP']['tileSize'] + _0x2a5a89;
                        _0x2c7afc['drawImage'](_0x358ba4, _0x30d108, _0xb29250, _0x445376, _0x445376, _0x4f4398, _0x27adba, _0x3262a0['MAP']['tileSize'], _0x3262a0['MAP']['tileSize']);
                        let _0x1b31e3 = _0x3262a0['MAP']['doors'] ? _0x3262a0['MAP']['doors'][_0x58b3b3 * _0x3262a0['MAP']['columns'] + _0x1058f7] : null;
                        if (!_0x1b31e3) {
                            const _0x5269bb = _0x3262a0['MAP']['layers']['find'](_0xde0efe => _0xde0efe['name'] === 'walls');
                            const _0x2b54a7 = _0x58b3b3 > 0x0 && _0x5269bb && _0x5269bb['data'][(_0x58b3b3 - 0x1) * _0x3262a0['MAP']['columns'] + _0x1058f7] > 0x0;
                            const _0x34235e = _0x58b3b3 < _0x3262a0['MAP']['rows'] - 0x1 && _0x5269bb && _0x5269bb['data'][(_0x58b3b3 + 0x1) * _0x3262a0['MAP']['columns'] + _0x1058f7] > 0x0;
                            const _0x38fb5d = _0x1058f7 > 0x0 && _0x5269bb && _0x5269bb['data'][_0x58b3b3 * _0x3262a0['MAP']['columns'] + _0x1058f7 - 0x1] > 0x0;
                            const _0x1ec3e3 = _0x1058f7 < _0x3262a0['MAP']['columns'] - 0x1 && _0x5269bb && _0x5269bb['data'][_0x58b3b3 * _0x3262a0['MAP']['columns'] + _0x1058f7 + 0x1] > 0x0;
                            if (_0x38fb5d && _0x1ec3e3)
                                _0x1b31e3 = _0x58b3b3 < _0x3262a0['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x2b54a7 && _0x34235e)
                                _0x1b31e3 = _0x1058f7 < _0x3262a0['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x387bfa = 0x0;
                        if (_0x1b31e3 === 'bottom')
                            _0x387bfa = Math['PI'] / 0x2;
                        else if (_0x1b31e3 === 'left')
                            _0x387bfa = Math['PI'];
                        else if (_0x1b31e3 === 'top')
                            _0x387bfa = -Math['PI'] / 0x2;
                        else if (_0x1b31e3 === 'right')
                            _0x387bfa = 0x0;
                        if (_0x387bfa !== 0x0) {
                            _0x3a757f['save']();
                            _0x3a757f['translate'](_0x4f4398 + _0x3262a0['MAP']['tileSize'] / 0x2, _0x27adba + _0x3262a0['MAP']['tileSize'] / 0x2);
                            _0x3a757f['rotate'](_0x387bfa);
                            _0x3a757f['drawImage'](_0x358ba4, _0x205dc9, _0x62a2a6, _0x445376, _0x445376, -_0x3262a0['MAP']['tileSize'] / 0x2, -_0x3262a0['MAP']['tileSize'] / 0x2, _0x3262a0['MAP']['tileSize'], _0x3262a0['MAP']['tileSize']);
                            _0x3a757f['restore']();
                        } else {
                            _0x3a757f['drawImage'](_0x358ba4, _0x205dc9, _0x62a2a6, _0x445376, _0x445376, _0x4f4398, _0x27adba, _0x3262a0['MAP']['tileSize'], _0x3262a0['MAP']['tileSize']);
                        }
                    } else {
                        _0x3a757f['drawImage'](_0x358ba4, _0x205dc9, _0x62a2a6, _0x445376, _0x445376, _0x4f4398, _0x27adba, _0x3262a0['MAP']['tileSize'], _0x3262a0['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0xcb5c2() {
    _0x358ba4['crossOrigin'] = 'Anonymous';
    _0x358ba4['onload'] = () => {
        _0x3262a0['MAP']['tilesetCols'] = 0x3;
        _0x33a825();
    };
    _0x358ba4['onerror'] = () => {
        _0x3262a0['MAP']['tilesetCols'] = 0x1;
        _0x33a825();
    };
    _0x358ba4['src'] = 'assets/tilesheet.png';
    _0x18fd10['crossOrigin'] = 'Anonymous';
    _0x18fd10['onload'] = _0x33a825;
    _0x18fd10['onerror'] = () => {
        _0x33a825();
    };
    _0x18fd10['src'] = 'assets/center.png';
    _0x173d7c['crossOrigin'] = 'Anonymous';
    _0x173d7c['onload'] = _0x33a825;
    _0x173d7c['onerror'] = () => {
        _0x33a825();
    };
    _0x173d7c['src'] = 'assets/table.png';
}
function _0x33a825() {
    _0x3262a0['SYSTEM']['assetsLoaded']++;
    if (_0x3262a0['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x44a58d();
    }
}
function _0x107fc0(_0x3fb599, _0x51ec59) {
    if (!_0x1f52a3 || !_0x89aa11)
        return;
    const _0x45d477 = _0x3fb599 / _0x3262a0['SYSTEM']['viewScale'] + _0x3262a0['CAMERA']['x'];
    const _0x22befe = _0x51ec59 / _0x3262a0['SYSTEM']['viewScale'] + _0x3262a0['CAMERA']['y'];
    const _0x3d92d2 = Math['floor'](_0x45d477 / _0x3262a0['MAP']['tileSize']);
    const _0x22293a = Math['floor'](_0x22befe / _0x3262a0['MAP']['tileSize']);
    if (_0x3d92d2 >= 0x0 && _0x3d92d2 < _0x3262a0['MAP']['columns'] && _0x22293a >= 0x0 && _0x22293a < _0x3262a0['MAP']['rows'])
        _0x89aa11['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x3262a0['EDITOR']['selectedLayer'],
            'col': _0x3d92d2,
            'row': _0x22293a,
            'gid': _0x3262a0['EDITOR']['selectedTileGid']
        }));
}
function _0x2898a3() {
    const _0x2346f1 = document['getElementById']('palette');
    if (!_0x2346f1 || _0x2346f1['children']['length'] > 0x0)
        return;
    const _0x1b26e1 = 0x40;
    const _0x19a724 = _0x358ba4;
    const _0x4761db = document['createElement']('div');
    _0x4761db['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x54782a = document['createElement']('canvas');
    _0x54782a['width'] = 0xc0;
    _0x54782a['height'] = 0xa0;
    _0x54782a['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x4761db['appendChild'](_0x54782a);
    const _0x1b8c6c = document['createElement']('div');
    _0x1b8c6c['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x4761db['appendChild'](_0x1b8c6c);
    let _0x2214f5 = 0x0, _0x4292f2 = 0x0;
    let _0x38d0fc = ![], _0x3a5575 = 0x0, _0x471c09 = 0x0, _0x49c914 = 0x0, _0x447e40 = 0x0;
    function _0x1a323e() {
        const _0xb338d8 = _0x54782a['getContext']('2d');
        _0xb338d8['clearRect'](0x0, 0x0, _0x54782a['width'], _0x54782a['height']);
        _0xb338d8['imageSmoothingEnabled'] = ![];
        if (_0x19a724['complete'] && _0x19a724['naturalWidth'] > 0x0) {
            _0xb338d8['drawImage'](_0x19a724, _0x2214f5, _0x4292f2, _0x54782a['width'], _0x54782a['height'], 0x0, 0x0, _0x54782a['width'], _0x54782a['height']);
        }
        _0xb338d8['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0xb338d8['lineWidth'] = 0x1;
        const _0x2f39b6 = Math['floor'](_0x2214f5 / _0x1b26e1);
        const _0x1209ee = Math['floor'](_0x4292f2 / _0x1b26e1);
        for (let _0x8d2406 = _0x2f39b6; _0x8d2406 <= _0x2f39b6 + Math['ceil'](_0x54782a['width'] / _0x1b26e1) + 0x1; _0x8d2406++) {
            const _0x45ef14 = _0x8d2406 * _0x1b26e1 - _0x2214f5;
            _0xb338d8['beginPath']();
            _0xb338d8['moveTo'](_0x45ef14, 0x0);
            _0xb338d8['lineTo'](_0x45ef14, _0x54782a['height']);
            _0xb338d8['stroke']();
        }
        for (let _0x325af0 = _0x1209ee; _0x325af0 <= _0x1209ee + Math['ceil'](_0x54782a['height'] / _0x1b26e1) + 0x1; _0x325af0++) {
            const _0x524610 = _0x325af0 * _0x1b26e1 - _0x4292f2;
            _0xb338d8['beginPath']();
            _0xb338d8['moveTo'](0x0, _0x524610);
            _0xb338d8['lineTo'](_0x54782a['width'], _0x524610);
            _0xb338d8['stroke']();
        }
    }
    function _0x24d47c() {
        const _0x357f37 = Math['max'](0x1, Math['ceil'](_0x19a724['naturalWidth'] / _0x1b26e1));
        const _0x133f4e = _0x3262a0['EDITOR']['selectedTileGid'];
        if (_0x133f4e <= 0x0) {
            _0x1b8c6c['style']['display'] = 'none';
            return;
        }
        const _0xd86589 = _0x133f4e - 0x1;
        const _0x1fe949 = _0xd86589 % _0x357f37;
        const _0x1acfbd = Math['floor'](_0xd86589 / _0x357f37);
        const _0x57e373 = _0x1fe949 * _0x1b26e1 - _0x2214f5;
        const _0x3a90b2 = _0x1acfbd * _0x1b26e1 - _0x4292f2;
        _0x1b8c6c['style']['display'] = 'block';
        _0x1b8c6c['style']['left'] = _0x57e373 + 'px';
        _0x1b8c6c['style']['top'] = _0x3a90b2 + 'px';
    }
    _0x19a724['onload'] = () => {
        _0x1a323e();
        _0x24d47c();
    };
    if (_0x19a724['complete'] && _0x19a724['naturalWidth'] > 0x0) {
        _0x1a323e();
        _0x24d47c();
    }
    _0x4761db['addEventListener']('mousedown', _0x495bb0 => {
        if (_0x495bb0['button'] === 0x0) {
            _0x38d0fc = !![];
            _0x3a5575 = _0x495bb0['clientX'];
            _0x471c09 = _0x495bb0['clientY'];
            _0x49c914 = _0x2214f5;
            _0x447e40 = _0x4292f2;
            _0x4761db['style']['cursor'] = 'grabbing';
            _0x495bb0['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x22fe09 => {
        if (!_0x38d0fc)
            return;
        const _0x337f6e = _0x3a5575 - _0x22fe09['clientX'];
        const _0xcae8c4 = _0x471c09 - _0x22fe09['clientY'];
        const _0x43e96f = Math['max'](0x0, _0x19a724['naturalWidth'] - _0x54782a['width']);
        const _0x1b872c = Math['max'](0x0, _0x19a724['naturalHeight'] - _0x54782a['height']);
        _0x2214f5 = Math['max'](0x0, Math['min'](_0x43e96f, _0x49c914 + _0x337f6e));
        _0x4292f2 = Math['max'](0x0, Math['min'](_0x1b872c, _0x447e40 + _0xcae8c4));
        _0x1a323e();
        _0x24d47c();
    });
    window['addEventListener']('mouseup', _0x504728 => {
        if (_0x38d0fc) {
            _0x38d0fc = ![];
            _0x4761db['style']['cursor'] = 'grab';
        }
    });
    _0x4761db['addEventListener']('click', _0x1420c5 => {
        const _0x3da175 = _0x4761db['getBoundingClientRect']();
        const _0x11a994 = _0x1420c5['clientX'] - _0x3da175['left'] + _0x2214f5;
        const _0x16ad77 = _0x1420c5['clientY'] - _0x3da175['top'] + _0x4292f2;
        const _0x566b39 = Math['max'](0x1, Math['ceil'](_0x19a724['naturalWidth'] / _0x1b26e1));
        const _0x19a401 = Math['floor'](_0x11a994 / _0x1b26e1);
        const _0x2b9029 = Math['floor'](_0x16ad77 / _0x1b26e1);
        const _0x2e2315 = _0x2b9029 * _0x566b39 + _0x19a401 + 0x1;
        _0x3262a0['EDITOR']['selectedTileGid'] = _0x2e2315;
        _0x24d47c();
    });
    _0x2346f1['appendChild'](_0x4761db);
    const _0x1c571e = document['createElement']('div');
    _0x1c571e['className'] = 'tile-btn\x20eraser-btn';
    _0x1c571e['title'] = 'Eraser\x20(gid\x200)';
    _0x1c571e['onclick'] = () => {
        _0x3262a0['EDITOR']['selectedTileGid'] = 0x0;
        _0x1b8c6c['style']['display'] = 'none';
    };
    _0x2346f1['appendChild'](_0x1c571e);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x3262a0['EDITOR']['enabled'] = !_0x3262a0['EDITOR']['enabled'];
        const _0x5461ec = document['getElementById']('editor-tools');
        if (_0x3262a0['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x5461ec['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x5461ec['style']['display'] = 'none';
        }
    });
    const _0x252e08 = document['getElementById']('start-game-btn');
    if (_0x252e08) {
        _0x252e08['addEventListener']('click', () => {
            if (_0x89aa11)
                _0x89aa11['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x3f2439 = document['getElementById']('rolelist-toggle-btn');
    if (_0x3f2439) {
        let _0x50209a = 'subalignments';
        _0x3f2439['addEventListener']('click', () => {
            if (_0x50209a === 'subalignments')
                _0x50209a = 'precise';
            else if (_0x50209a === 'precise')
                _0x50209a = 'off';
            else
                _0x50209a = 'subalignments';
            _0x3f2439['innerText'] = 'Role\x20List:\x20' + _0x50209a['charAt'](0x0)['toUpperCase']() + _0x50209a['slice'](0x1);
            if (_0x89aa11)
                _0x89aa11['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x50209a
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x20d9fc => {
        if (_0x20d9fc['id'] === 'editor-toggle-btn' || _0x20d9fc['id'] === 'start-game-btn' || _0x20d9fc['id'] === 'rolelist-toggle-btn')
            return;
        _0x20d9fc['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x5c3044 => _0x5c3044['classList']['remove']('active'));
            _0x20d9fc['classList']['add']('active');
            _0x3262a0['EDITOR']['selectedLayer'] = _0x20d9fc['dataset']['layer'];
        });
    });
}
function _0x1dc77e(_0x1b0160) {
    if (_0x89aa11)
        _0x89aa11['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x1b0160
        }));
}
function _0x1a0c3e(_0x47978e) {
    if (_0x89aa11)
        _0x89aa11['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x47978e
        }));
}
function _0x3c1281(_0x438420, _0x2c2edb, _0x13988d, _0xad9ed) {
    const _0x1ff35e = document['getElementById']('admin-panel');
    if (_0x1ff35e)
        _0x1ff35e['remove']();
    if (_0x1ff35e && _0x1ff35e['dataset']['target'] === String(_0x438420))
        return;
    const _0x4afa01 = document['createElement']('div');
    _0x4afa01['id'] = 'admin-panel';
    _0x4afa01['dataset']['target'] = String(_0x438420);
    _0x4afa01['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x558afd = document['createElement']('div');
    _0x558afd['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x558afd['textContent'] = _0x2c2edb;
    _0x4afa01['appendChild'](_0x558afd);
    const _0x2ccb19 = document['createElement']('button');
    _0x2ccb19['textContent'] = 'Kick';
    _0x2ccb19['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x2ccb19['onmouseenter'] = () => _0x2ccb19['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x2ccb19['onmouseleave'] = () => _0x2ccb19['style']['background'] = 'transparent';
    _0x2ccb19['onclick'] = () => {
        _0x1dc77e(_0x438420);
        _0x4afa01['remove']();
    };
    _0x4afa01['appendChild'](_0x2ccb19);
    const _0x5abefa = document['createElement']('button');
    _0x5abefa['textContent'] = 'Ban';
    _0x5abefa['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x5abefa['onmouseenter'] = () => _0x5abefa['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x5abefa['onmouseleave'] = () => _0x5abefa['style']['background'] = 'transparent';
    _0x5abefa['onclick'] = () => {
        _0x1a0c3e(_0x438420);
        _0x4afa01['remove']();
    };
    _0x4afa01['appendChild'](_0x5abefa);
    document['body']['appendChild'](_0x4afa01);
    const _0x1197f8 = _0x4afa01['offsetWidth'] || 0x91;
    const _0x4994c1 = _0x4afa01['offsetHeight'] || 0x50;
    let _0x80169f = _0x13988d - _0x1197f8;
    let _0xbaa5e2 = _0xad9ed;
    if (_0x80169f < 0x4)
        _0x80169f = _0x13988d;
    if (_0xbaa5e2 + _0x4994c1 > window['innerHeight'] - 0x4)
        _0xbaa5e2 = window['innerHeight'] - _0x4994c1 - 0x4;
    _0x4afa01['style']['left'] = _0x80169f + 'px';
    _0x4afa01['style']['top'] = _0xbaa5e2 + 'px';
    const _0x399183 = _0x2b8402 => {
        if (!_0x4afa01['contains'](_0x2b8402['target'])) {
            _0x4afa01['remove']();
            document['removeEventListener']('mousedown', _0x399183);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x399183), 0x0);
}
function _0x1fb7fa() {
    const _0x4f38bf = document['getElementById']('leaderboard-list');
    _0x4f38bf['innerHTML'] = '';
    const _0x8cc4eb = document['createElement']('div');
    _0x8cc4eb['className'] = 'leaderboard-entry';
    const _0x197d96 = document['createElement']('span');
    _0x197d96['textContent'] = _0x176b60 + (_0x1f52a3 ? '\x20[🗝️]' : '');
    if (_0x1b4c70['has'](_0x33db9e) && !_0x526be7['isDead']) {
        _0x197d96['style']['color'] = '#cc88ff';
    }
    _0x8cc4eb['appendChild'](_0x197d96);
    _0x4f38bf['appendChild'](_0x8cc4eb);
    for (const _0x16a655 in _0x568307) {
        const _0x55640f = document['createElement']('div');
        _0x55640f['className'] = 'leaderboard-entry';
        const _0x4fba70 = document['createElement']('span');
        _0x4fba70['textContent'] = _0x568307[_0x16a655]['name'] + (_0x568307[_0x16a655]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x1b4c70['has'](parseInt(_0x16a655)) && !_0x568307[_0x16a655]['isDead']) {
            _0x4fba70['style']['color'] = '#cc88ff';
        }
        _0x55640f['appendChild'](_0x4fba70);
        if (_0x1f52a3 && !_0x568307[_0x16a655]['isOwner']) {
            const _0x4af229 = _0x568307[_0x16a655]['id'];
            const _0x1781a3 = _0x568307[_0x16a655]['name'];
            _0x55640f['style']['cursor'] = 'context-menu';
            _0x55640f['addEventListener']('contextmenu', _0x53685f => {
                _0x53685f['preventDefault']();
                _0x53685f['stopPropagation']();
                _0x3c1281(_0x4af229, _0x1781a3, _0x53685f['clientX'], _0x53685f['clientY']);
            });
        }
        _0x4f38bf['appendChild'](_0x55640f);
    }
}
window['addEventListener']('resize', _0x44a58d);
function _0x44a58d() {
    _0x191092['width'] = window['innerWidth'];
    _0x191092['height'] = window['innerHeight'];
    _0x3262a0['SYSTEM']['viewScale'] = Math['max'](_0x191092['width'] / _0x46ead2, _0x191092['height'] / _0x372b2f);
    _0x3262a0['CAMERA']['width'] = _0x191092['width'] / _0x3262a0['SYSTEM']['viewScale'];
    _0x3262a0['CAMERA']['height'] = _0x191092['height'] / _0x3262a0['SYSTEM']['viewScale'];
    _0x1d0a3e['imageSmoothingEnabled'] = ![];
}
function _0x510861(_0x4a3f5b) {
    if (_0x4a3f5b['ctrlKey'] || _0x4a3f5b['metaKey']) {
        if (_0x4a3f5b['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x4a3f5b['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x4a3f5b['code'])) {
            _0x4a3f5b['preventDefault']();
            _0x4a3f5b['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x510861, { 'passive': ![] });
window['addEventListener']('keydown', _0x510861, { 'passive': ![] });
window['addEventListener']('keydown', _0x541501 => {
    const _0x491996 = _0x541501['key']['toLowerCase']();
    if (_0x491996 === 'tab') {
        _0x541501['preventDefault']();
        const _0x1647b1 = document['getElementById']('will-ui');
        const _0xc355f1 = document['getElementById']('will-input');
        if (_0x1647b1['style']['display'] === 'flex') {
            _0x1647b1['style']['display'] = 'none';
            if (_0x89aa11)
                _0x89aa11['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0xc355f1['value']
                }));
            _0xc355f1['blur']();
        } else {
            _0x1647b1['style']['display'] = 'flex';
            _0xc355f1['focus']();
            for (let _0x57160a in _0x3262a0['INPUTS']['keys'])
                _0x3262a0['INPUTS']['keys'][_0x57160a] = ![];
        }
        return;
    }
    if (_0x541501['key'] === 'Enter') {
        if (_0x3e3a4f) {
            const _0x1cf7c4 = document['getElementById']('play-btn');
            if (_0x1cf7c4)
                _0x1cf7c4['click']();
            return;
        }
        if (!_0x89aa11 || _0x89aa11['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x87c03d = document['getElementById']('chat-ui');
        const _0x241102 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x241102) {
            const _0x4ea294 = _0x241102['value']['trim']();
            if (_0x4ea294['length'] > 0x0) {
                _0x89aa11['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x4ea294
                }));
            }
            _0x241102['value'] = '';
            _0x87c03d['style']['display'] = 'none';
            _0x241102['blur']();
        } else {
            _0x87c03d['style']['display'] = 'block';
            _0x241102['focus']();
            for (let _0x5a3dd8 in _0x3262a0['INPUTS']['keys'])
                _0x3262a0['INPUTS']['keys'][_0x5a3dd8] = ![];
        }
        _0x541501['preventDefault']();
        return;
    }
    if (_0x541501['key'] === 'Escape') {
        const _0x3becdf = document['getElementById']('guide-ui');
        if (_0x3becdf && _0x3becdf['style']['display'] === 'flex') {
            _0x3becdf['style']['display'] = 'none';
            return;
        }
        const _0x28885c = document['getElementById']('ability-ui');
        if (_0x28885c && _0x28885c['style']['display'] === 'block') {
            _0x28885c['style']['display'] = 'none';
            return;
        }
        const _0x991838 = document['getElementById']('settings-panel');
        if (_0x991838 && _0x991838['style']['display'] === 'block') {
            _0x991838['style']['display'] = 'none';
            return;
        }
        const _0x5b0e8f = document['getElementById']('mayor-confirm-dialog');
        if (_0x5b0e8f && _0x5b0e8f['style']['display'] === 'flex') {
            _0x5b0e8f['style']['display'] = 'none';
            return;
        }
        const _0x3e4106 = document['getElementById']('target-chooser-ui');
        if (_0x3e4106 && _0x3e4106['style']['display'] === 'flex') {
            _0x3e4106['style']['display'] = 'none';
            return;
        }
        const _0x563a04 = document['getElementById']('chat-ui');
        const _0x25a955 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x25a955) {
            _0x25a955['value'] = '';
            _0x563a04['style']['display'] = 'none';
            _0x25a955['blur']();
            _0x541501['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x3262a0['INPUTS']['keys']['hasOwnProperty'](_0x491996))
            _0x3262a0['INPUTS']['keys'][_0x491996] = !![];
        if (!_0x89aa11 || _0x89aa11['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x491996 === 'h' && !_0x541501['repeat']) {
            const _0x49c6d1 = document['getElementById']('guide-ui');
            if (_0x49c6d1) {
                _0x49c6d1['style']['display'] = _0x49c6d1['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x491996 === 't' && !_0x541501['repeat']) {
            if (_0x526be7['isDead'])
                return;
            if (_0xfcb219 === 'Mayor') {
                if (_0x1b4c70['has'](_0x33db9e)) {
                    _0x51409b('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x1d366d = document['getElementById']('mayor-confirm-dialog');
                if (_0x1d366d)
                    _0x1d366d['style']['display'] = 'flex';
                return;
            }
            if (_0x3262a0['GAME_STATE'] === 'NIGHT') {
                if (!_0x3262a0['NIGHT_ABILITY_OPEN']) {
                    _0x51409b('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x44c725 = document['getElementById']('ability-ui');
                if (_0x44c725) {
                    if (_0x44c725['style']['display'] === 'block') {
                        _0x44c725['style']['display'] = 'none';
                    } else {
                        _0xe238cf();
                        _0x44c725['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x3262a0['GAME_STATE'] === 'DAY_DISCUSS' || _0x3262a0['GAME_STATE'] === 'DAY_VOTE') {
                _0x51409b('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x491996 === 'e' && !_0x526be7['isDead']) {
            const _0x5f1d20 = Date['now']();
            if (!window['_lastDoorSend'] || _0x5f1d20 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x5f1d20;
                _0x89aa11['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x167ecb => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x57b251 = _0x167ecb['key']['toLowerCase']();
        if (_0x3262a0['INPUTS']['keys']['hasOwnProperty'](_0x57b251))
            _0x3262a0['INPUTS']['keys'][_0x57b251] = ![];
    }
});
window['addEventListener']('mousemove', _0x77bdd9 => {
    _0x3262a0['INPUTS']['mouseX'] = _0x77bdd9['clientX'];
    _0x3262a0['INPUTS']['mouseY'] = _0x77bdd9['clientY'];
    if (_0x3262a0['INPUTS']['isMouseDown'] && _0x3262a0['EDITOR']['enabled']) {
        _0x107fc0(_0x77bdd9['clientX'], _0x77bdd9['clientY']);
    }
});
window['addEventListener']('mousedown', _0x20fb0f => {
    if (_0x20fb0f['target']['closest']('#editor-ui') || _0x20fb0f['target']['closest']('#leaderboard-ui') || _0x20fb0f['target']['closest']('#chat-log-ui') || _0x20fb0f['target']['closest']('#target-chooser-ui') || _0x20fb0f['target']['closest']('#guide-ui') || _0x20fb0f['target']['closest']('#role-list-ui') || _0x20fb0f['target']['closest']('#ability-ui') || _0x20fb0f['target']['closest']('#settings-panel') || _0x20fb0f['target']['closest']('#mayor-confirm-dialog') || _0x20fb0f['target']['closest']('#mobile-action-bar') || _0x20fb0f['target']['closest']('#mobile-top-bar') || _0x20fb0f['target']['closest']('#mobile-joystick-zone') || _0x20fb0f['target']['closest']('#mobile-chat-overlay') || _0x20fb0f['target']['closest']('#will-ui') || _0x20fb0f['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x20fb0f['button'] === 0x0) {
        _0x3262a0['INPUTS']['isMouseDown'] = !![];
        if (_0x3262a0['EDITOR']['enabled'])
            _0x107fc0(_0x20fb0f['clientX'], _0x20fb0f['clientY']);
    }
});
window['addEventListener']('mouseup', _0x308fdf => {
    _0x3262a0['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x35ab40 => {
    if (_0x35ab40['target']['closest']('#settings-btn'))
        return;
    const _0x18f33a = document['getElementById']('leaderboard-list');
    const _0x3b75aa = document['getElementById']('leaderboard-toggle');
    if (_0x18f33a['style']['display'] === 'none') {
        _0x18f33a['style']['display'] = 'flex';
        _0x3b75aa['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x18f33a['style']['display'] = 'none';
        _0x3b75aa['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x397b68 = document['getElementById']('close-target-btn');
if (_0x397b68) {
    _0x397b68['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x21d876 = document['getElementById']('close-guide-btn');
if (_0x21d876) {
    _0x21d876['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x85a3bc = document['getElementById']('role-list-header');
if (_0x85a3bc) {
    _0x85a3bc['addEventListener']('click', () => {
        const _0x482823 = document['getElementById']('role-list-items');
        const _0x459734 = document['getElementById']('role-list-toggle');
        if (_0x482823['style']['display'] === 'none') {
            _0x482823['style']['display'] = 'flex';
            _0x459734['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x482823['style']['display'] = 'none';
            _0x459734['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x3e60ea() {
    const _0x1982ee = document['getElementById']('mobile-joystick-zone');
    const _0x1bb5bb = document['getElementById']('mobile-joystick-base');
    const _0x23113b = document['getElementById']('mobile-joystick-knob');
    if (_0x1982ee && _0x1bb5bb && _0x23113b) {
        const _0x13be05 = 0x3e;
        const _0x3880ac = (_0x5bc58f, _0x2815dc) => {
            const _0x5ee714 = _0x1bb5bb['getBoundingClientRect']();
            const _0x551dda = _0x5ee714['left'] + _0x5ee714['width'] / 0x2;
            const _0xa71dd5 = _0x5ee714['top'] + _0x5ee714['height'] / 0x2;
            const _0x48e704 = _0x5bc58f - _0x551dda;
            const _0x3943ee = _0x2815dc - _0xa71dd5;
            const _0x5f5789 = Math['hypot'](_0x48e704, _0x3943ee);
            if (_0x5f5789 === 0x0) {
                _0x4edd4c = 0x0;
                _0x1fe4ee = 0x0;
                _0x5bd274 = ![];
                _0x23113b['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x5cd246 = Math['min'](_0x5f5789, _0x13be05);
            const _0x40158a = _0x48e704 / _0x5f5789 * _0x5cd246;
            const _0x4da1ec = _0x3943ee / _0x5f5789 * _0x5cd246;
            _0x4edd4c = _0x40158a / _0x13be05;
            _0x1fe4ee = _0x4da1ec / _0x13be05;
            _0x5bd274 = _0x5f5789 >= _0x13be05 * 0.75;
            _0x23113b['style']['transform'] = 'translate(' + _0x40158a + 'px,\x20' + _0x4da1ec + 'px)';
        };
        const _0x5e4743 = _0x583992 => {
            for (let _0x4d072f = 0x0; _0x4d072f < _0x583992['changedTouches']['length']; _0x4d072f++) {
                const _0x337000 = _0x583992['changedTouches'][_0x4d072f];
                if (_0x1dc754 === null) {
                    _0x1dc754 = _0x337000['identifier'];
                    _0x3bb96e = !![];
                    _0x3880ac(_0x337000['clientX'], _0x337000['clientY']);
                    break;
                }
            }
        };
        const _0x5b5d58 = _0x39c19d => {
            for (let _0x323a13 = 0x0; _0x323a13 < _0x39c19d['changedTouches']['length']; _0x323a13++) {
                const _0x72220d = _0x39c19d['changedTouches'][_0x323a13];
                if (_0x72220d['identifier'] === _0x1dc754) {
                    _0x3880ac(_0x72220d['clientX'], _0x72220d['clientY']);
                    break;
                }
            }
        };
        const _0x3bbb1b = _0x1a0ac7 => {
            for (let _0x2c45ed = 0x0; _0x2c45ed < _0x1a0ac7['changedTouches']['length']; _0x2c45ed++) {
                const _0x39232d = _0x1a0ac7['changedTouches'][_0x2c45ed];
                if (_0x39232d['identifier'] === _0x1dc754) {
                    _0x1dc754 = null;
                    _0x3bb96e = ![];
                    _0x4edd4c = 0x0;
                    _0x1fe4ee = 0x0;
                    _0x5bd274 = ![];
                    _0x23113b['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x1982ee['addEventListener']('touchstart', _0x2b84dc => {
            _0x2b84dc['preventDefault']();
            _0x5e4743(_0x2b84dc);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x5b5d58, { 'passive': !![] });
        window['addEventListener']('touchend', _0x3bbb1b, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x3bbb1b, { 'passive': !![] });
    }
    const _0x11c61d = (_0xde4296, _0x3bcbd2) => {
        const _0x262a5e = _0xde4296 / _0x3262a0['SYSTEM']['viewScale'];
        const _0x3ed1bc = _0x3bcbd2 / _0x3262a0['SYSTEM']['viewScale'];
        const _0x3f72d5 = _0x526be7['x'] - _0x3262a0['CAMERA']['x'] + _0x526be7['width'] / 0x2;
        const _0x5e009b = _0x526be7['y'] - _0x3262a0['CAMERA']['y'] + _0x526be7['height'] / 0x2;
        _0x80c757 = Math['atan2'](_0x3ed1bc - _0x5e009b, _0x262a5e - _0x3f72d5);
        _0x1248f8 = !![];
        _0x3262a0['INPUTS']['mouseX'] = _0xde4296;
        _0x3262a0['INPUTS']['mouseY'] = _0x3bcbd2;
    };
    _0x191092['addEventListener']('touchstart', _0x2e8e6a => {
        if (_0x3e3a4f)
            return;
        for (let _0x302519 = 0x0; _0x302519 < _0x2e8e6a['changedTouches']['length']; _0x302519++) {
            const _0xdad3c = _0x2e8e6a['changedTouches'][_0x302519];
            if (_0xdad3c['identifier'] !== _0x1dc754 && _0x5ada94 === null) {
                _0x5ada94 = _0xdad3c['identifier'];
                _0x11c61d(_0xdad3c['clientX'], _0xdad3c['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x191092['addEventListener']('touchmove', _0x5d5ada => {
        if (_0x3e3a4f)
            return;
        for (let _0x578105 = 0x0; _0x578105 < _0x5d5ada['changedTouches']['length']; _0x578105++) {
            const _0x5cac98 = _0x5d5ada['changedTouches'][_0x578105];
            if (_0x5cac98['identifier'] === _0x5ada94) {
                _0x11c61d(_0x5cac98['clientX'], _0x5cac98['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x489fb4 = _0x2c0005 => {
        for (let _0x48fc5d = 0x0; _0x48fc5d < _0x2c0005['changedTouches']['length']; _0x48fc5d++) {
            const _0x17f46d = _0x2c0005['changedTouches'][_0x48fc5d];
            if (_0x17f46d['identifier'] === _0x5ada94) {
                _0x5ada94 = null;
                _0x1248f8 = ![];
                break;
            }
        }
    };
    _0x191092['addEventListener']('touchend', _0x489fb4, { 'passive': !![] });
    _0x191092['addEventListener']('touchcancel', _0x489fb4, { 'passive': !![] });
    const _0x123ba = document['getElementById']('mob-sprint-btn');
    if (_0x123ba) {
        _0x123ba['addEventListener']('click', _0x5c525e => {
            _0x5c525e['stopPropagation']();
            _0x5cf804 = !_0x5cf804;
            _0x123ba['classList']['toggle']('active', _0x5cf804);
        });
    }
    const _0x1e56fb = document['getElementById']('mob-interact-btn');
    if (_0x1e56fb) {
        _0x1e56fb['addEventListener']('click', _0x479f9b => {
            _0x479f9b['stopPropagation']();
            if (!_0x526be7['isDead']) {
                const _0xae33a2 = Date['now']();
                if (!window['_lastDoorSend'] || _0xae33a2 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0xae33a2;
                    if (_0x89aa11 && _0x89aa11['readyState'] === WebSocket['OPEN'])
                        _0x89aa11['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x12c097 = document['getElementById']('mob-ability-btn');
    if (_0x12c097) {
        _0x12c097['addEventListener']('click', _0xab2eca => {
            _0xab2eca['stopPropagation']();
            if (_0x526be7['isDead'])
                return;
            if (_0xfcb219 === 'Mayor') {
                if (_0x1b4c70['has'](_0x33db9e)) {
                    _0x51409b('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x40537d = document['getElementById']('mayor-confirm-dialog');
                if (_0x40537d)
                    _0x40537d['style']['display'] = 'flex';
                return;
            }
            if (_0x3262a0['GAME_STATE'] === 'NIGHT') {
                if (!_0x3262a0['NIGHT_ABILITY_OPEN']) {
                    _0x51409b('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x3d2aef = document['getElementById']('ability-ui');
                if (_0x3d2aef) {
                    if (_0x3d2aef['style']['display'] === 'block') {
                        _0x3d2aef['style']['display'] = 'none';
                    } else {
                        _0xe238cf();
                        _0x3d2aef['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x3262a0['GAME_STATE'] === 'DAY_DISCUSS' || _0x3262a0['GAME_STATE'] === 'DAY_VOTE') {
                _0x51409b('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0xf0245e = document['getElementById']('mob-will-btn');
    const _0x17026e = document['getElementById']('will-ui');
    const _0x1571f4 = document['getElementById']('will-input');
    const _0x406fd9 = document['getElementById']('close-will-btn');
    const _0x2c78c6 = () => {
        if (!_0x17026e)
            return;
        if (_0x17026e['style']['display'] === 'flex') {
            _0x17026e['style']['display'] = 'none';
            if (_0x89aa11 && _0x89aa11['readyState'] === WebSocket['OPEN'] && _0x1571f4) {
                _0x89aa11['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x1571f4['value']
                }));
            }
            if (_0x1571f4)
                _0x1571f4['blur']();
        } else {
            _0x17026e['style']['display'] = 'flex';
            if (_0x1571f4)
                _0x1571f4['focus']();
        }
    };
    if (_0xf0245e)
        _0xf0245e['addEventListener']('click', _0x4027fe => {
            _0x4027fe['stopPropagation']();
            _0x2c78c6();
        });
    if (_0x406fd9)
        _0x406fd9['addEventListener']('click', _0x3d15ab => {
            _0x3d15ab['stopPropagation']();
            _0x2c78c6();
        });
    const _0x273105 = document['getElementById']('mob-chat-btn');
    const _0x520008 = document['getElementById']('mobile-chat-overlay');
    const _0x1d3099 = document['getElementById']('mobile-chat-input');
    const _0x43ccc7 = document['getElementById']('mobile-chat-send');
    const _0x317341 = document['getElementById']('mobile-chat-cancel');
    const _0x4ef7a1 = () => {
        if (!_0x520008 || !_0x1d3099)
            return;
        _0x520008['style']['display'] = 'flex';
        _0x1d3099['value'] = '';
        _0x1d3099['focus']();
    };
    const _0x55c713 = () => {
        if (!_0x520008 || !_0x1d3099)
            return;
        _0x520008['style']['display'] = 'none';
        _0x1d3099['blur']();
    };
    const _0x5a3278 = () => {
        if (!_0x1d3099)
            return;
        const _0xa160b5 = _0x1d3099['value']['trim']();
        if (_0xa160b5['length'] > 0x0 && _0x89aa11 && _0x89aa11['readyState'] === WebSocket['OPEN']) {
            _0x89aa11['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0xa160b5
            }));
        }
        _0x1d3099['value'] = '';
        _0x55c713();
    };
    if (_0x273105)
        _0x273105['addEventListener']('click', _0x190c81 => {
            _0x190c81['stopPropagation']();
            _0x4ef7a1();
        });
    if (_0x43ccc7)
        _0x43ccc7['addEventListener']('click', _0x544127 => {
            _0x544127['stopPropagation']();
            _0x5a3278();
        });
    if (_0x317341)
        _0x317341['addEventListener']('click', _0x3bbadd => {
            _0x3bbadd['stopPropagation']();
            _0x55c713();
        });
    if (_0x1d3099) {
        _0x1d3099['addEventListener']('keydown', _0x553ef4 => {
            if (_0x553ef4['key'] === 'Enter') {
                _0x553ef4['preventDefault']();
                _0x5a3278();
            } else if (_0x553ef4['key'] === 'Escape') {
                _0x55c713();
            }
        });
    }
    const _0x1b713e = document['getElementById']('mob-top-chat');
    if (_0x1b713e)
        _0x1b713e['addEventListener']('click', _0x57e125 => {
            _0x57e125['stopPropagation']();
            _0x4ef7a1();
        });
    const _0x4f2b34 = document['getElementById']('mob-top-will');
    if (_0x4f2b34)
        _0x4f2b34['addEventListener']('click', _0x182abc => {
            _0x182abc['stopPropagation']();
            _0x2c78c6();
        });
    const _0x1c675e = document['getElementById']('mob-top-roles');
    if (_0x1c675e) {
        _0x1c675e['addEventListener']('click', _0x19bebf => {
            _0x19bebf['stopPropagation']();
            const _0x23be3d = document['getElementById']('role-list-ui');
            const _0x48a920 = document['getElementById']('leaderboard-ui');
            if (_0x48a920)
                _0x48a920['style']['display'] = 'none';
            if (_0x23be3d)
                _0x23be3d['style']['display'] = _0x23be3d['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x3ab2d6 = document['getElementById']('mob-top-players');
    if (_0x3ab2d6) {
        _0x3ab2d6['addEventListener']('click', _0x59c46e => {
            _0x59c46e['stopPropagation']();
            const _0x240506 = document['getElementById']('leaderboard-ui');
            const _0x4d335c = document['getElementById']('role-list-ui');
            if (_0x4d335c)
                _0x4d335c['style']['display'] = 'none';
            if (_0x240506)
                _0x240506['style']['display'] = _0x240506['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x2c0138 = document['getElementById']('mob-top-help');
    if (_0x2c0138) {
        _0x2c0138['addEventListener']('click', _0x365c5d => {
            _0x365c5d['stopPropagation']();
            const _0x4f0197 = document['getElementById']('guide-ui');
            if (_0x4f0197)
                _0x4f0197['style']['display'] = _0x4f0197['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x25f80e) {
            _0x25f80e = !![];
            _0x270e35();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
