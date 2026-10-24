document['addEventListener']('contextmenu', _0x48b624 => _0x48b624['preventDefault']());
const _0x3d20f0 = {
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
let _0x38c7b4 = '';
function _0x4ea11d(_0x44ba20, _0x551249) {
    const _0x3adf10 = document['getElementById']('role-list-ui');
    const _0x5ddb45 = document['getElementById']('role-list-items');
    if (!_0x3adf10 || !_0x5ddb45)
        return;
    if (!_0x551249 || _0x551249 === 'off' || !_0x44ba20 || _0x44ba20['length'] === 0x0) {
        _0x3adf10['style']['display'] = 'none';
        return;
    }
    const _0xe7d568 = _0x551249 + '|' + JSON['stringify'](_0x44ba20);
    if (_0xe7d568 === _0x38c7b4)
        return;
    _0x38c7b4 = _0xe7d568;
    const _0x2e987f = document['getElementById']('role-tooltip');
    if (_0x2e987f) {
        _0x2e987f['style']['visibility'] = 'hidden';
        _0x2e987f['style']['opacity'] = '0';
    }
    _0x3adf10['style']['display'] = 'flex';
    _0x5ddb45['innerHTML'] = '';
    _0x44ba20['forEach'](_0x2af980 => {
        const _0x383e7d = document['createElement']('div');
        _0x383e7d['className'] = 'role-list-entry';
        const _0x4c4407 = _0x2af980['name']['includes']('Mafia') || _0x2af980['name'] === 'Skinwalker';
        _0x383e7d['classList']['add'](_0x4c4407 ? 'mafia' : 'town');
        if (_0x551249 === 'precise' && _0x2af980['isDead']) {
            _0x383e7d['classList']['remove']('town', 'mafia');
            _0x383e7d['classList']['add']('dead');
            _0x383e7d['innerHTML'] = '<span>' + _0x2af980['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x3f52c8 = _0x2af980['count'] !== undefined && _0x2af980['count'] !== null ? _0x2af980['count'] + 'x\x20' : '';
            _0x383e7d['innerHTML'] = '<span>' + _0x3f52c8 + _0x2af980['name'] + '</span>';
        }
        if (_0x551249 === 'subalignments' && _0x3d20f0[_0x2af980['name']]) {
            _0x383e7d['style']['cursor'] = 'pointer';
            _0x383e7d['addEventListener']('mouseenter', () => {
                const _0x299fc5 = document['getElementById']('role-tooltip');
                if (!_0x299fc5)
                    return;
                const _0x2b5a79 = _0x3d20f0[_0x2af980['name']]['join'](',\x20');
                _0x299fc5['innerHTML'] = '';
                const _0x2434c1 = document['createElement']('span');
                _0x2434c1['style']['color'] = '#ffcc00';
                _0x2434c1['textContent'] = _0x2af980['name'];
                _0x299fc5['appendChild'](_0x2434c1);
                _0x299fc5['appendChild'](document['createElement']('br'));
                _0x299fc5['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x2b5a79));
                const _0x3bcff6 = _0x383e7d['getBoundingClientRect']();
                _0x299fc5['style']['left'] = _0x3bcff6['left'] - 0xeb + 'px';
                _0x299fc5['style']['top'] = _0x3bcff6['top'] + 'px';
                _0x299fc5['style']['display'] = 'block';
                _0x299fc5['style']['visibility'] = 'visible';
                _0x299fc5['style']['opacity'] = '1';
            });
            _0x383e7d['addEventListener']('mouseleave', () => {
                const _0x3d3da7 = document['getElementById']('role-tooltip');
                if (_0x3d3da7) {
                    _0x3d3da7['style']['display'] = 'none';
                    _0x3d3da7['style']['visibility'] = 'hidden';
                    _0x3d3da7['style']['opacity'] = '0';
                }
            });
        }
        _0x5ddb45['appendChild'](_0x383e7d);
    });
}
let _0x131448 = null;
let _0xc7ab21 = null;
const _0x3a6377 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x19ed4f = 'Player???';
let _0x33a3ae = ![];
let _0x93ea24 = {};
let _0x4caf82 = null;
let _0x420b16 = 0x0;
let _0x16332f = 0x0;
let _0x4f06a2 = new Set();
let _0x54481c = ![];
let _0x31e9ce = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x227b38 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x4b9579 = ![];
let _0x290dd6 = null;
let _0x577aeb = 0x0;
let _0x2063e6 = 0x0;
let _0x3760a9 = ![];
let _0x5bcbf1 = ![];
let _0x326b3b = 0x0;
let _0x47e000 = null;
let _0x4d79db = ![];
const _0xd89867 = ((() => {
    const _0x5978f7 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3'
    };
    let _0x80c3 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x58d5fc = 0x320;
    const _0x3f43cd = {};
    const _0x254a32 = {};
    let _0x5eecdf = null;
    let _0x4daf63 = _0x80c3 === 0x0;
    let _0x422448 = ![];
    for (const [_0xadc509, _0x32cdab] of Object['entries'](_0x5978f7)) {
        const _0x18f520 = new Audio(_0x32cdab);
        _0x18f520['loop'] = !![];
        _0x18f520['volume'] = 0x0;
        _0x18f520['preload'] = 'auto';
        _0x3f43cd[_0xadc509] = _0x18f520;
        _0x254a32[_0xadc509] = null;
    }
    const _0x313312 = _0x17bcb4 => Math['min'](0x1, Math['max'](0x0, _0x17bcb4));
    function _0x4ee86c(_0x5f3b20) {
        if (_0x254a32[_0x5f3b20] !== null) {
            cancelAnimationFrame(_0x254a32[_0x5f3b20]);
            _0x254a32[_0x5f3b20] = null;
        }
    }
    function _0xdf51b4(_0xfb72d8, _0x10d38a, _0x36f87e, _0x3ad09d, _0x25a9dc) {
        _0x4ee86c(_0xfb72d8);
        const _0x5375ac = _0x3f43cd[_0xfb72d8];
        const _0xb42d4f = performance['now']();
        const _0x56dfaf = _0x4e3f24 => {
            const _0x137617 = _0x313312((_0x4e3f24 - _0xb42d4f) / _0x3ad09d);
            const _0x48fef4 = _0x313312(_0x10d38a + (_0x36f87e - _0x10d38a) * _0x137617);
            _0x5375ac['volume'] = _0x4daf63 ? 0x0 : _0x48fef4;
            if (_0x137617 < 0x1) {
                _0x254a32[_0xfb72d8] = requestAnimationFrame(_0x56dfaf);
            } else {
                _0x254a32[_0xfb72d8] = null;
                _0x5375ac['volume'] = _0x4daf63 ? 0x0 : _0x313312(_0x36f87e);
                if (_0x25a9dc)
                    _0x25a9dc();
            }
        };
        _0x254a32[_0xfb72d8] = requestAnimationFrame(_0x56dfaf);
    }
    function _0x13722c(_0x5a3c7a) {
        const _0x55e87b = _0x5a3c7a['play']();
        if (_0x55e87b && _0x55e87b['catch']) {
            _0x55e87b['catch'](() => {
                if (!_0x422448) {
                    const _0x20244a = () => {
                        _0x422448 = !![];
                        _0x5a3c7a['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x20244a);
                        document['removeEventListener']('keydown', _0x20244a);
                        document['removeEventListener']('touchstart', _0x20244a);
                    };
                    document['addEventListener']('click', _0x20244a, { 'once': !![] });
                    document['addEventListener']('keydown', _0x20244a, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x20244a, { 'once': !![] });
                }
            });
        }
    }
    function _0xbd0df1(_0x3e7943) {
        if (!_0x5978f7[_0x3e7943])
            return;
        if (_0x5eecdf === _0x3e7943)
            return;
        const _0x3ebd64 = _0x5eecdf;
        _0x5eecdf = _0x3e7943;
        const _0x48f39b = _0x3f43cd[_0x3e7943];
        _0x4ee86c(_0x3e7943);
        _0x48f39b['currentTime'] = 0x0;
        _0x48f39b['volume'] = 0x0;
        _0x13722c(_0x48f39b);
        _0xdf51b4(_0x3e7943, 0x0, _0x80c3, _0x58d5fc);
        if (_0x3ebd64 && _0x3f43cd[_0x3ebd64]) {
            const _0x3702cd = _0x3ebd64;
            const _0x43f5cd = _0x3f43cd[_0x3702cd];
            const _0x31bad1 = _0x313312(_0x43f5cd['volume']);
            _0xdf51b4(_0x3702cd, _0x31bad1, 0x0, _0x58d5fc, () => {
                _0x43f5cd['pause']();
                _0x43f5cd['currentTime'] = 0x0;
            });
        }
    }
    function _0x1d6188(_0x4bc2b7) {
        _0x80c3 = _0x313312(_0x4bc2b7);
        localStorage['setItem']('musicVolume', String(_0x80c3));
        if (!_0x4daf63 && _0x5eecdf && _0x254a32[_0x5eecdf] === null) {
            _0x3f43cd[_0x5eecdf]['volume'] = _0x80c3;
        }
    }
    function _0x206950() {
        return _0x80c3;
    }
    function _0x1ed6b8(_0x17fcf6) {
        _0x4daf63 = _0x17fcf6;
        for (const _0x121b6f of Object['keys'](_0x3f43cd)) {
            if (_0x254a32[_0x121b6f] === null) {
                _0x3f43cd[_0x121b6f]['volume'] = _0x17fcf6 || _0x121b6f !== _0x5eecdf ? 0x0 : _0x80c3;
            }
        }
    }
    function _0x3aafa4() {
        return _0x4daf63;
    }
    function _0x3670cb(_0x61f2a6) {
        if (_0x61f2a6 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x61f2a6 === 'DAY_VOTE')
            return 'voting';
        return 'wait';
    }
    function _0x4f3972(_0x3484f4) {
        _0xbd0df1(_0x3670cb(_0x3484f4));
    }
    function _0x1bd74f(_0x55b586) {
        _0xbd0df1(_0x55b586);
    }
    return {
        'play': _0xbd0df1,
        'onStateChange': _0x4f3972,
        'onSoundEvent': _0x1bd74f,
        'setVolume': _0x1d6188,
        'getVolume': _0x206950,
        'setMuted': _0x1ed6b8,
        'isMuted': _0x3aafa4
    };
})());
const _0xca34c1 = ((() => {
    const _0x33f965 = 0x258;
    const _0x8ad7e4 = 0xb4;
    const _0x1c6677 = 0x708;
    const _0x4281fa = 0x140;
    const _0x22d6b5 = 0.18;
    const _0x442b06 = 0.95;
    const _0x337ae2 = new Audio('audio/heartbeat.mp3');
    _0x337ae2['loop'] = ![];
    _0x337ae2['preload'] = 'auto';
    _0x337ae2['volume'] = 0x0;
    let _0x5d2c60 = 0x0;
    let _0x70638e = Infinity;
    function _0x493eda(_0x1ebdaa, _0x2a3400, _0x409749) {
        return Math['min'](_0x409749, Math['max'](_0x2a3400, _0x1ebdaa));
    }
    function _0x2c9b76(_0x4db598, _0x3f4ede, _0x5ea6c7) {
        return _0x4db598 + (_0x3f4ede - _0x4db598) * _0x5ea6c7;
    }
    function _0x43844d(_0x35501d) {
        if (_0x4878b0['GAME_STATE'] !== 'NIGHT' || _0x5f2e43['isDead'] || _0x4caf82 === 'Skinwalker') {
            _0x70638e = Infinity;
            return;
        }
        const _0xa97911 = _0x5f2e43['x'] + 22.5;
        const _0x3afa5c = _0x5f2e43['y'] + 22.5;
        let _0x1bb7b7 = Infinity;
        for (const _0xb4ee8a in _0x93ea24) {
            const _0x212e76 = _0x93ea24[_0xb4ee8a];
            if (!_0x212e76['isDark'] || _0x212e76['isDead'])
                continue;
            const _0x5223da = _0x212e76['renderX'] + 22.5 - _0xa97911;
            const _0x4d3057 = _0x212e76['renderY'] + 22.5 - _0x3afa5c;
            const _0x30f797 = Math['sqrt'](_0x5223da * _0x5223da + _0x4d3057 * _0x4d3057);
            if (_0x30f797 < _0x1bb7b7)
                _0x1bb7b7 = _0x30f797;
        }
        _0x70638e = _0x1bb7b7;
        if (_0x1bb7b7 > _0x33f965)
            return;
        const _0x134ece = 0x1 - _0x493eda((_0x1bb7b7 - _0x8ad7e4) / (_0x33f965 - _0x8ad7e4), 0x0, 0x1);
        const _0xe8bf3 = _0x2c9b76(_0x1c6677, _0x4281fa, _0x134ece);
        const _0x256e7e = _0x2c9b76(_0x22d6b5, _0x442b06, _0x134ece);
        if (_0x35501d >= _0x5d2c60) {
            _0x337ae2['currentTime'] = 0x0;
            _0x337ae2['volume'] = _0xd89867['isMuted']() ? 0x0 : _0x493eda(_0x256e7e * _0xd89867['getVolume']() / 0.7, 0x0, 0x1);
            _0x337ae2['play']()['catch'](() => {
            });
            _0x5d2c60 = _0x35501d + _0xe8bf3;
        }
    }
    return { 'tick': _0x43844d };
})());
function _0x54959c() {
    const _0x260d25 = document['getElementById']('mob-ability-btn');
    if (!_0x260d25)
        return;
    const _0xfc270c = _0x4878b0['GAME_STATE'] === 'NIGHT' && !_0x5f2e43['isDead'];
    const _0x563a65 = _0x4caf82 === 'Mayor' && !_0x4f06a2['has'](_0xc7ab21) && !_0x5f2e43['isDead'];
    if (_0xfc270c || _0x563a65) {
        _0x260d25['style']['display'] = 'flex';
    } else {
        _0x260d25['style']['display'] = 'none';
    }
}
function _0x2d6023() {
    const _0x2fd0a2 = document['getElementById']('mobile-joystick-zone');
    const _0x345066 = document['getElementById']('mobile-top-bar');
    const _0x20ecec = document['getElementById']('mobile-action-bar');
    if (!_0x2fd0a2 || !_0x345066 || !_0x20ecec)
        return;
    if (!_0x474b8b && _0x227b38) {
        _0x2fd0a2['style']['display'] = 'flex';
        _0x345066['style']['display'] = 'flex';
        _0x20ecec['style']['display'] = 'flex';
        _0x54959c();
    } else {
        _0x2fd0a2['style']['display'] = 'none';
        _0x345066['style']['display'] = 'none';
        _0x20ecec['style']['display'] = 'none';
    }
}
const _0x382898 = document['getElementById']('gameCanvas');
const _0x275e4b = _0x382898['getContext']('2d', { 'alpha': ![] });
const _0x3347b6 = 0x500;
const _0x1cbfc3 = 0x2d0;
const _0x4878b0 = {
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
        'width': _0x3347b6,
        'height': _0x1cbfc3
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
const _0x5f2e43 = {
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
const _0xcee409 = new Image();
const _0x166c56 = new Image();
const _0x59c38e = new Image();
const _0x4305a8 = new Image();
_0x4305a8['src'] = 'assets/mayor\x20cosmetic.png';
const _0x4d4d67 = [
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
const _0x2699d5 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x3f93dd = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x3f93dd === 'body1.png' || _0x3f93dd === 'body1')
    _0x3f93dd = 'body01.png';
if (!_0x3f93dd['endsWith']('.png'))
    _0x3f93dd += '.png';
let _0x493c35 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x493c35['endsWith']('.png'))
    _0x493c35 += '.png';
let _0x474b8b = !![];
let _0x195784 = null;
let _0x3c313b = null;
let _0x40ac7d = 0x3c;
let _0x5ae812 = 0x2d;
const _0x11fb26 = {};
function _0x41ac14(_0x13516d) {
    if (!_0x11fb26[_0x13516d]) {
        const _0xc32176 = new Image();
        _0xc32176['src'] = _0x13516d;
        _0x11fb26[_0x13516d] = _0xc32176;
    }
    return _0x11fb26[_0x13516d];
}
function _0x5691e2(_0xde7958, _0x3e02ad, _0x37a1a9, _0x373adb, _0x18e074) {
    try {
        const _0x1975b7 = 'assets/' + (_0x3e02ad || 'body01.png');
        const _0x17b171 = _0x41ac14(_0x1975b7);
        if (_0x17b171['complete'] && _0x17b171['naturalWidth'] > 0x0) {
            _0xde7958['drawImage'](_0x17b171, -_0x373adb / 0x2, -_0x18e074 / 0x2, _0x373adb, _0x18e074);
        }
        const _0x2432d2 = 'assets/' + (_0x37a1a9 || 'eyes4.png');
        const _0x2808e2 = _0x41ac14(_0x2432d2);
        if (_0x2808e2['complete'] && _0x2808e2['naturalWidth'] > 0x0) {
            _0xde7958['drawImage'](_0x2808e2, -_0x373adb / 0x2, -_0x18e074 / 0x2, _0x373adb, _0x18e074);
        }
    } catch (_0x221d79) {
    }
}
function _0x2224f2() {
    const _0x1ac678 = document['getElementById']('body-skin-grid');
    const _0x48d144 = document['getElementById']('eyes-skin-grid');
    if (!_0x1ac678 || !_0x48d144)
        return;
    _0x1ac678['innerHTML'] = '';
    _0x4d4d67['forEach'](_0x33dadf => {
        const _0x22c036 = document['createElement']('button');
        _0x22c036['className'] = 'skin-btn' + (_0x33dadf === _0x3f93dd ? '\x20selected' : '');
        const _0x2968aa = document['createElement']('img');
        _0x2968aa['src'] = 'assets/' + _0x33dadf;
        _0x22c036['appendChild'](_0x2968aa);
        _0x22c036['onclick'] = () => {
            _0x3f93dd = _0x33dadf;
            localStorage['setItem']('selectedBody', _0x33dadf);
            _0x1ac678['querySelectorAll']('.skin-btn')['forEach'](_0x266d6d => _0x266d6d['classList']['remove']('selected'));
            _0x22c036['classList']['add']('selected');
        };
        _0x1ac678['appendChild'](_0x22c036);
    });
    _0x48d144['innerHTML'] = '';
    _0x2699d5['forEach'](_0x4153d5 => {
        const _0x4450c1 = document['createElement']('button');
        _0x4450c1['className'] = 'skin-btn' + (_0x4153d5 === _0x493c35 ? '\x20selected' : '');
        const _0x524dbc = document['createElement']('img');
        _0x524dbc['src'] = 'assets/' + _0x4153d5;
        _0x4450c1['appendChild'](_0x524dbc);
        _0x4450c1['onclick'] = () => {
            _0x493c35 = _0x4153d5;
            localStorage['setItem']('selectedEyes', _0x4153d5);
            _0x48d144['querySelectorAll']('.skin-btn')['forEach'](_0x4c33a0 => _0x4c33a0['classList']['remove']('selected'));
            _0x4450c1['classList']['add']('selected');
        };
        _0x48d144['appendChild'](_0x4450c1);
    });
}
function _0x2057cc(_0x5d1187) {
    if (!_0x4878b0['MAP']['columns'] || !_0x4878b0['CAMERA']['width'])
        return;
    const _0x5e26e7 = Math['max'](0x0, _0x4878b0['MAP']['columns'] * _0x4878b0['MAP']['tileSize'] - _0x4878b0['CAMERA']['width']);
    const _0x1f3ca7 = Math['max'](0x0, _0x4878b0['MAP']['rows'] * _0x4878b0['MAP']['tileSize'] - _0x4878b0['CAMERA']['height']);
    if (_0x195784 === null) {
        _0x195784 = _0x5e26e7 / 0x2;
        _0x3c313b = _0x1f3ca7 / 0x2;
    }
    _0x195784 += _0x40ac7d * _0x5d1187;
    _0x3c313b += _0x5ae812 * _0x5d1187;
    if (_0x195784 <= 0x0) {
        _0x195784 = 0x0;
        _0x40ac7d = Math['abs'](_0x40ac7d);
    } else if (_0x195784 >= _0x5e26e7) {
        _0x195784 = _0x5e26e7;
        _0x40ac7d = -Math['abs'](_0x40ac7d);
    }
    if (_0x3c313b <= 0x0) {
        _0x3c313b = 0x0;
        _0x5ae812 = Math['abs'](_0x5ae812);
    } else if (_0x3c313b >= _0x1f3ca7) {
        _0x3c313b = _0x1f3ca7;
        _0x5ae812 = -Math['abs'](_0x5ae812);
    }
    _0x4878b0['CAMERA']['x'] = _0x195784;
    _0x4878b0['CAMERA']['y'] = _0x3c313b;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x499e36 = document['getElementById']('play-btn');
    const _0xb689cc = document['getElementById']('username-input');
    const _0x58e171 = localStorage['getItem']('playerName');
    if (_0x58e171 && _0xb689cc) {
        _0xb689cc['value'] = _0x58e171;
    }
    const _0x170f79 = () => {
        _0xd89867['play']('wait');
        document['removeEventListener']('click', _0x170f79);
        document['removeEventListener']('keydown', _0x170f79);
        document['removeEventListener']('touchstart', _0x170f79);
    };
    document['addEventListener']('click', _0x170f79, { 'once': !![] });
    document['addEventListener']('keydown', _0x170f79, { 'once': !![] });
    document['addEventListener']('touchstart', _0x170f79, { 'once': !![] });
    if (_0x499e36) {
        _0x499e36['addEventListener']('click', () => {
            const _0x50048a = _0xb689cc['value'];
            const _0x484483 = _0x50048a['replace'](/<[^>]*>/g, '')['replace'](/[^\x20-\x7E]/g, '')['replace'](/[<>]/g, '')['replace'](/\s+/g, '\x20')['trim']()['substring'](0x0, 0xe);
            _0x19ed4f = _0x484483 || 'Player';
            localStorage['setItem']('playerName', _0x19ed4f);
            _0x474b8b = ![];
            _0x4878b0['CAMERA']['x'] = null;
            _0x4878b0['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x43798b = document['getElementById']('controls-hint');
            if (_0x43798b && !_0x227b38)
                _0x43798b['style']['display'] = 'block';
            _0x2d6023();
            if (_0x227b38) {
                const _0x1cbb27 = document['getElementById']('leaderboard-list');
                const _0x437703 = document['getElementById']('leaderboard-toggle');
                if (_0x1cbb27) {
                    _0x1cbb27['style']['display'] = 'none';
                    if (_0x437703)
                        _0x437703['style']['transform'] = 'rotate(180deg)';
                }
                const _0x2b97a4 = document['getElementById']('role-list-items');
                const _0x44f8c1 = document['getElementById']('role-list-toggle');
                if (_0x2b97a4) {
                    _0x2b97a4['style']['display'] = 'none';
                    if (_0x44f8c1)
                        _0x44f8c1['style']['transform'] = 'rotate(180deg)';
                }
            }
            if (_0x131448 && _0x131448['readyState'] === WebSocket['OPEN']) {
                _0x131448['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x19ed4f,
                    'token': _0x3a6377,
                    'body': _0x3f93dd,
                    'eyes': _0x493c35
                }));
            } else if (!_0x131448 || _0x131448['readyState'] === WebSocket['CLOSED'] || _0x131448['readyState'] === WebSocket['CLOSING']) {
                _0x2b2570();
            }
        });
    }
    _0x2224f2();
    _0x2b2570();
    _0x37bdbe();
    _0x14d4c9();
    _0x533e7();
});
function _0x14d4c9() {
    const _0x34fd32 = document['getElementById']('settings-btn');
    const _0x9a0104 = document['getElementById']('settings-panel');
    const _0x26950f = document['getElementById']('close-settings-btn');
    const _0xb435cb = document['getElementById']('setting-mouse-relative');
    if (_0xb435cb) {
        _0xb435cb['checked'] = _0x31e9ce;
        _0xb435cb['addEventListener']('change', () => {
            _0x31e9ce = _0xb435cb['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x31e9ce ? 'true' : 'false');
        });
    }
    const _0x1f0929 = document['getElementById']('setting-music-volume');
    const _0x18e90e = document['getElementById']('setting-music-volume-display');
    function _0x3eebee(_0xbb9bc7) {
        const _0x1bb965 = (_0xbb9bc7['value'] - _0xbb9bc7['min']) / (_0xbb9bc7['max'] - _0xbb9bc7['min']) * 0x64;
        _0xbb9bc7['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x1bb965 + '%,\x20#444\x20' + _0x1bb965 + '%)';
    }
    if (_0x1f0929) {
        const _0x271792 = _0xd89867['getVolume']();
        const _0x34f23c = Math['round'](_0x271792 * 0x64);
        _0x1f0929['value'] = _0x34f23c;
        if (_0x18e90e)
            _0x18e90e['textContent'] = _0x34f23c + '%';
        _0x3eebee(_0x1f0929);
        _0x1f0929['addEventListener']('input', () => {
            const _0x41fcbf = parseInt(_0x1f0929['value'], 0xa);
            if (_0x18e90e)
                _0x18e90e['textContent'] = _0x41fcbf + '%';
            _0x3eebee(_0x1f0929);
            _0xd89867['setVolume'](_0x41fcbf / 0x64);
            _0xd89867['setMuted'](_0x41fcbf === 0x0);
        });
    }
    if (_0x34fd32 && _0x9a0104) {
        _0x34fd32['addEventListener']('click', _0x318851 => {
            _0x318851['stopPropagation']();
            _0x9a0104['style']['display'] = _0x9a0104['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x26950f && _0x9a0104) {
        _0x26950f['addEventListener']('click', () => {
            _0x9a0104['style']['display'] = 'none';
        });
    }
    const _0xe736d = document['getElementById']('mayor-confirm-yes');
    const _0x20f2bd = document['getElementById']('mayor-confirm-no');
    const _0x3e5c95 = document['getElementById']('mayor-confirm-dialog');
    if (_0xe736d && _0x3e5c95) {
        _0xe736d['addEventListener']('click', () => {
            if (_0x131448 && _0x131448['readyState'] === WebSocket['OPEN']) {
                _0x131448['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x3e5c95['style']['display'] = 'none';
        });
    }
    if (_0x20f2bd && _0x3e5c95) {
        _0x20f2bd['addEventListener']('click', () => {
            _0x3e5c95['style']['display'] = 'none';
        });
    }
    const _0x2fec4a = document['getElementById']('close-ability-btn');
    if (_0x2fec4a) {
        _0x2fec4a['addEventListener']('click', () => {
            const _0x5282b7 = document['getElementById']('ability-ui');
            if (_0x5282b7)
                _0x5282b7['style']['display'] = 'none';
        });
    }
}
let _0x31420b = '';
function _0x55ae39(_0x5f2a2a) {
    const _0x55ba45 = document['getElementById']('vote-tally-panel');
    const _0x23c022 = document['getElementById']('vote-tally-list');
    if (!_0x55ba45 || !_0x23c022)
        return;
    if (_0x5f2a2a['state'] !== 'DAY_VOTE') {
        _0x55ba45['style']['display'] = 'none';
        _0x31420b = '';
        return;
    }
    _0x55ba45['style']['display'] = 'block';
    const _0x271bc6 = {};
    for (const _0x24e8e4 in _0x93ea24) {
        if (!_0x93ea24[_0x24e8e4]['isDead'])
            _0x271bc6[_0x24e8e4] = 0x0;
    }
    if (_0xc7ab21 && !_0x5f2e43['isDead'])
        _0x271bc6[_0xc7ab21] = 0x0;
    const _0x431c5c = _0x5f2a2a['votes'] || {};
    for (const _0x545879 in _0x431c5c) {
        const _0x408f52 = _0x431c5c[_0x545879];
        const _0x363c6e = _0x5f2a2a['mayorRevealed'] && _0x5f2a2a['mayorRevealed'][_0x545879] ? 0x2 : 0x1;
        _0x271bc6[_0x408f52] = (_0x271bc6[_0x408f52] || 0x0) + _0x363c6e;
    }
    let _0x4ab352 = 0x0;
    const _0x4fd751 = _0x5f2a2a['skips'] || {};
    for (const _0x511afd in _0x4fd751) {
        _0x4ab352 += Number(_0x4fd751[_0x511afd]) || 0x1;
    }
    const _0x5e46cd = JSON['stringify'](_0x271bc6) + '_' + _0x4ab352 + '_' + _0x5f2e43['isDead'];
    if (_0x5e46cd === _0x31420b)
        return;
    _0x31420b = _0x5e46cd;
    _0x23c022['innerHTML'] = '';
    for (const _0x32333f in _0x271bc6) {
        const _0x4e19b4 = parseInt(_0x32333f);
        const _0x2a89ef = _0x4e19b4 === _0xc7ab21 ? _0x19ed4f : _0x93ea24[_0x32333f] ? _0x93ea24[_0x32333f]['name'] : 'Player\x20' + _0x32333f;
        const _0x5e125f = document['createElement']('div');
        _0x5e125f['className'] = 'vote-tally-entry';
        const _0x1def0e = document['createElement']('span');
        _0x1def0e['textContent'] = _0x2a89ef;
        const _0x4e0f98 = document['createElement']('span');
        _0x4e0f98['className'] = 'vote-count';
        _0x4e0f98['textContent'] = _0x271bc6[_0x32333f] + '\x20vote' + (_0x271bc6[_0x32333f] === 0x1 ? '' : 's');
        _0x5e125f['appendChild'](_0x1def0e);
        _0x5e125f['appendChild'](_0x4e0f98);
        if (_0x4e19b4 !== _0xc7ab21 && !_0x5f2e43['isDead']) {
            _0x5e125f['style']['cursor'] = 'pointer';
            _0x5e125f['title'] = 'Vote\x20for\x20' + _0x2a89ef;
            _0x5e125f['addEventListener']('click', _0x483d41 => {
                _0x483d41['stopPropagation']();
                if (_0x131448 && _0x131448['readyState'] === WebSocket['OPEN']) {
                    _0x131448['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x2a89ef
                    }));
                }
            });
        }
        _0x23c022['appendChild'](_0x5e125f);
    }
    const _0x8aa214 = document['createElement']('div');
    _0x8aa214['className'] = 'vote-tally-skip';
    _0x8aa214['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x4ab352 + '</span>';
    if (!_0x5f2e43['isDead']) {
        _0x8aa214['style']['cursor'] = 'pointer';
        _0x8aa214['title'] = 'Click\x20to\x20skip\x20vote';
        _0x8aa214['addEventListener']('click', _0x362364 => {
            _0x362364['stopPropagation']();
            if (_0x131448 && _0x131448['readyState'] === WebSocket['OPEN']) {
                _0x131448['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x23c022['appendChild'](_0x8aa214);
}
let _0x1332a2 = null;
let _0x43f131 = null;
let _0x314670 = null;
function _0x120e23() {
    if (_0x131448 && _0x131448['readyState'] === WebSocket['OPEN']) {
        _0x131448['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x1332a2,
            'abilityTarget': _0x43f131,
            'killTarget': _0x314670
        }));
    }
}
function _0x19d092() {
    const _0xe2770c = document['getElementById']('ability-ui-body');
    if (!_0xe2770c)
        return;
    _0xe2770c['innerHTML'] = '';
    if (_0x4caf82 === 'Celebrity' || _0x4caf82 === 'Mayor') {
        const _0x13f6d6 = document['createElement']('div');
        _0x13f6d6['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x13f6d6['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0xe2770c['appendChild'](_0x13f6d6);
        return;
    }
    if (_0x4caf82 === 'Skinwalker') {
        const _0x3d88d7 = document['createElement']('div');
        _0x3d88d7['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x3d88d7['innerText'] = 'Transform\x20into:';
        _0xe2770c['appendChild'](_0x3d88d7);
        const _0x43c149 = document['createElement']('div');
        _0x43c149['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x5a3924 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x1571c6 = _0x315b9f => {
            if (!_0x4878b0['ROLE_LIST_RAW'] || _0x4878b0['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x4878b0['ROLE_LIST_RAW']['some'](_0x15a485 => {
                if (_0x15a485['name'] === _0x315b9f)
                    return !_0x15a485['isDead'];
                if (_0x3d20f0[_0x15a485['name']] && _0x3d20f0[_0x15a485['name']]['includes'](_0x315b9f))
                    return !![];
                return ![];
            });
        };
        const _0x232c01 = [
            'None',
            ..._0x5a3924['filter'](_0x1571c6)
        ];
        _0x232c01['forEach'](_0x25f2fd => {
            const _0x599499 = document['createElement']('button');
            _0x599499['className'] = 'layer-btn';
            _0x599499['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x599499['innerText'] = _0x25f2fd;
            const _0x3182b6 = _0x25f2fd === 'None' && !_0x1332a2 || _0x1332a2 === _0x25f2fd;
            if (_0x3182b6)
                _0x599499['classList']['add']('active');
            _0x599499['onclick'] = () => {
                _0x1332a2 = _0x25f2fd === 'None' ? null : _0x25f2fd;
                _0x120e23();
                _0x19d092();
            };
            _0x43c149['appendChild'](_0x599499);
        });
        _0xe2770c['appendChild'](_0x43c149);
        if (_0x1571c6('Vigilante')) {
            const _0x297f10 = document['createElement']('div');
            _0x297f10['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x297f10['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0xe2770c['appendChild'](_0x297f10);
        }
        if (_0x1332a2 === 'Vigilante') {
            const _0x3f11de = document['createElement']('div');
            _0x3f11de['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x3f11de['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0xe2770c['appendChild'](_0x3f11de);
        } else if (_0x1332a2 && _0x1332a2 !== 'Celebrity') {
            const _0x9b2d7d = document['createElement']('div');
            _0x9b2d7d['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x9b2d7d['innerText'] = 'Use\x20' + _0x1332a2 + '\x20ability\x20on:';
            _0xe2770c['appendChild'](_0x9b2d7d);
            const _0x315225 = document['createElement']('div');
            _0x315225['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x57f73e = document['createElement']('button');
            _0x57f73e['className'] = 'layer-btn';
            _0x57f73e['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x57f73e['innerText'] = 'No\x20one';
            if (!_0x43f131)
                _0x57f73e['classList']['add']('active');
            _0x57f73e['onclick'] = () => {
                _0x43f131 = null;
                _0x120e23();
                _0x19d092();
            };
            _0x315225['appendChild'](_0x57f73e);
            for (const _0x3f9b20 in _0x93ea24) {
                const _0x4b179a = _0x93ea24[_0x3f9b20];
                if (_0x4b179a['isDead'])
                    continue;
                const _0x3aea65 = document['createElement']('button');
                _0x3aea65['className'] = 'layer-btn';
                _0x3aea65['innerText'] = _0x4b179a['name'];
                if (_0x43f131 === parseInt(_0x3f9b20))
                    _0x3aea65['classList']['add']('active');
                _0x3aea65['onclick'] = () => {
                    _0x43f131 = parseInt(_0x3f9b20);
                    _0x120e23();
                    _0x19d092();
                };
                _0x315225['appendChild'](_0x3aea65);
            }
            _0xe2770c['appendChild'](_0x315225);
        }
        const _0x45868a = document['createElement']('div');
        _0x45868a['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x45868a['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0xe2770c['appendChild'](_0x45868a);
        const _0x182049 = document['createElement']('div');
        _0x182049['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x4c5085 = document['createElement']('button');
        _0x4c5085['className'] = 'layer-btn';
        _0x4c5085['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x4c5085['innerText'] = 'No\x20one';
        if (!_0x314670 && !_0x4878b0['CURRENT_TARGET'])
            _0x4c5085['classList']['add']('active');
        _0x4c5085['onclick'] = () => {
            _0x314670 = null;
            _0x4878b0['CURRENT_TARGET'] = null;
            _0x120e23();
            _0x19d092();
        };
        _0x182049['appendChild'](_0x4c5085);
        for (const _0x512a97 in _0x93ea24) {
            const _0x162bcd = _0x93ea24[_0x512a97];
            if (_0x162bcd['isDead'])
                continue;
            const _0x37fa0f = document['createElement']('button');
            _0x37fa0f['className'] = 'layer-btn';
            _0x37fa0f['innerText'] = _0x162bcd['name'];
            if (_0x314670 === parseInt(_0x512a97) || _0x4878b0['CURRENT_TARGET'] === parseInt(_0x512a97))
                _0x37fa0f['classList']['add']('active');
            _0x37fa0f['onclick'] = () => {
                _0x314670 = parseInt(_0x512a97);
                _0x4878b0['CURRENT_TARGET'] = parseInt(_0x512a97);
                _0x120e23();
                _0x19d092();
            };
            _0x182049['appendChild'](_0x37fa0f);
        }
        _0xe2770c['appendChild'](_0x182049);
        return;
    }
    let _0x19f345 = '';
    let _0x768af1 = ![];
    if (_0x4caf82 === 'Doctor') {
        _0x19f345 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x768af1 = !![];
    } else if (_0x4caf82 === 'Investigator') {
        _0x19f345 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x4caf82 === 'Tracker') {
        _0x19f345 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x4caf82 === 'Archer') {
        _0x19f345 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x4caf82 === 'Escort') {
        _0x19f345 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x4caf82 === 'Vigilante') {
        _0x19f345 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x20951d = document['createElement']('div');
    _0x20951d['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x20951d['innerText'] = _0x19f345;
    _0xe2770c['appendChild'](_0x20951d);
    const _0x342f98 = document['createElement']('div');
    _0x342f98['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x462bdb = document['createElement']('button');
    _0x462bdb['className'] = 'layer-btn';
    _0x462bdb['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x462bdb['innerText'] = 'No\x20one';
    if (_0x4878b0['CURRENT_TARGET'] === null)
        _0x462bdb['classList']['add']('active');
    _0x462bdb['onclick'] = () => {
        _0x4878b0['CURRENT_TARGET'] = null;
        if (_0x131448 && _0x131448['readyState'] === WebSocket['OPEN']) {
            _0x131448['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x19d092();
    };
    _0x342f98['appendChild'](_0x462bdb);
    for (const _0x1d0068 in _0x93ea24) {
        const _0xca43f6 = _0x93ea24[_0x1d0068];
        if (_0xca43f6['isDead'])
            continue;
        const _0x367ae7 = document['createElement']('button');
        _0x367ae7['className'] = 'layer-btn';
        _0x367ae7['innerText'] = _0xca43f6['name'];
        if (_0x4878b0['CURRENT_TARGET'] === parseInt(_0x1d0068))
            _0x367ae7['classList']['add']('active');
        _0x367ae7['onclick'] = () => {
            _0x4878b0['CURRENT_TARGET'] = parseInt(_0x1d0068);
            if (_0x131448 && _0x131448['readyState'] === WebSocket['OPEN']) {
                _0x131448['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x1d0068)
                }));
            }
            _0x19d092();
        };
        _0x342f98['appendChild'](_0x367ae7);
    }
    if (_0x768af1 && !_0x5f2e43['isDead']) {
        const _0x5cb566 = document['createElement']('button');
        _0x5cb566['className'] = 'layer-btn';
        _0x5cb566['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x5cb566['innerText'] = _0x19ed4f + '\x20(Self)';
        if (_0x4878b0['CURRENT_TARGET'] === _0xc7ab21)
            _0x5cb566['classList']['add']('active');
        _0x5cb566['onclick'] = () => {
            _0x4878b0['CURRENT_TARGET'] = _0xc7ab21;
            if (_0x131448 && _0x131448['readyState'] === WebSocket['OPEN']) {
                _0x131448['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0xc7ab21
                }));
            }
            _0x19d092();
        };
        _0x342f98['appendChild'](_0x5cb566);
    }
    _0xe2770c['appendChild'](_0x342f98);
}
function _0x2b2570() {
    if (_0x131448 && (_0x131448['readyState'] === WebSocket['OPEN'] || _0x131448['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x5967fa = new URLSearchParams();
    if (_0x3a6377)
        _0x5967fa['set']('token', _0x3a6377);
    _0x5967fa['set']('ngrok-skip-browser-warning', 'true');
    const _0x538876 = 'wss://relating-worker-pipeline-enclosure.trycloudflare.com';
    const _0x3671cb = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x538876;
    const _0x6c0f72 = _0x3671cb + '/?' + _0x5967fa['toString']();
    _0x131448 = new WebSocket(_0x6c0f72);
    _0x131448['onopen'] = function () {
        if (!_0x474b8b && this['readyState'] === WebSocket['OPEN']) {
            this['send'](JSON['stringify']({
                'type': 'join',
                'name': _0x19ed4f,
                'token': _0x3a6377,
                'body': _0x3f93dd,
                'eyes': _0x493c35
            }));
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x131448 && _0x131448['readyState'] === WebSocket['OPEN']) {
            _0x131448['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x131448['onclose'] = _0x5e4345 => {
        if (_0x5e4345['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x5e4345['code'] === 0xfa2 || _0x5e4345['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x27bb7c = document['getElementById']('disconnect-overlay');
        if (!_0x27bb7c) {
            _0x27bb7c = document['createElement']('div');
            _0x27bb7c['id'] = 'disconnect-overlay';
            _0x27bb7c['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x27bb7c['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x27bb7c);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x131448['onmessage'] = _0x1ae51e => {
        const _0x129f98 = JSON['parse'](_0x1ae51e['data']);
        if (_0x129f98['type'] === 'map_data') {
            _0x4878b0['MAP']['tileSize'] = _0x129f98['map']['tileSize'];
            _0x4878b0['MAP']['columns'] = _0x129f98['map']['columns'];
            _0x4878b0['MAP']['rows'] = _0x129f98['map']['rows'];
            _0x4878b0['MAP']['layers'] = _0x129f98['map']['layers'];
            if (_0x129f98['map']['doors']) {
                _0x4878b0['MAP']['doors'] = _0x129f98['map']['doors'];
                const _0x3fcfd4 = _0x4878b0['MAP']['layers']['find'](_0x4192ec => _0x4192ec['name'] === 'floor2');
                if (_0x3fcfd4) {
                    for (const _0x2336a0 in _0x4878b0['MAP']['doors']) {
                        _0x3fcfd4['data'][parseInt(_0x2336a0)] = 0x2;
                    }
                }
            }
            if (_0x129f98['entities'])
                _0x4878b0['ENTITIES'] = _0x129f98['entities'];
            _0xfabdd9();
            _0x4878b0['SYSTEM']['isReady'] = !![];
            _0xbdbce3();
            if (!_0x4878b0['SYSTEM']['_gameLoopRunning']) {
                _0x4878b0['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x5e9faf);
            }
            return;
        }
        if (_0x129f98['type'] === 'init') {
            _0xc7ab21 = _0x129f98['id'];
            _0x474b8b = ![];
            _0x2d6023();
            if (_0x227b38) {
                const _0xf81c82 = document['getElementById']('leaderboard-list');
                const _0x536952 = document['getElementById']('leaderboard-toggle');
                if (_0xf81c82) {
                    _0xf81c82['style']['display'] = 'none';
                    if (_0x536952)
                        _0x536952['style']['transform'] = 'rotate(180deg)';
                }
                const _0x17639d = document['getElementById']('role-list-items');
                const _0x512cee = document['getElementById']('role-list-toggle');
                if (_0x17639d) {
                    _0x17639d['style']['display'] = 'none';
                    if (_0x512cee)
                        _0x512cee['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x33a3ae = _0x129f98['isOwner'] || ![];
            _0x19ed4f = _0x129f98['name'] || _0x19ed4f;
            _0x4878b0['MAP']['tileSize'] = _0x129f98['map']['tileSize'];
            _0x4878b0['MAP']['columns'] = _0x129f98['map']['columns'];
            _0x4878b0['MAP']['rows'] = _0x129f98['map']['rows'];
            _0x4878b0['MAP']['layers'] = _0x129f98['map']['layers'];
            if (_0x129f98['map']['doors']) {
                _0x4878b0['MAP']['doors'] = _0x129f98['map']['doors'];
                const _0x1a62aa = _0x4878b0['MAP']['layers']['find'](_0xb9b6c1 => _0xb9b6c1['name'] === 'floor2');
                if (_0x1a62aa) {
                    for (const _0x4a9e6a in _0x4878b0['MAP']['doors']) {
                        _0x1a62aa['data'][parseInt(_0x4a9e6a)] = 0x2;
                    }
                }
            }
            if (_0x129f98['entities'])
                _0x4878b0['ENTITIES'] = _0x129f98['entities'];
            _0xfabdd9();
            _0x5f2e43['x'] = _0x4878b0['MAP']['columns'] * _0x4878b0['MAP']['tileSize'] / 0x2;
            _0x5f2e43['y'] = _0x4878b0['MAP']['rows'] * _0x4878b0['MAP']['tileSize'] / 0x2;
            _0x4878b0['CAMERA']['x'] = _0x5f2e43['x'] + _0x5f2e43['width'] / 0x2 - _0x4878b0['CAMERA']['width'] / 0x2;
            _0x4878b0['CAMERA']['y'] = _0x5f2e43['y'] + _0x5f2e43['height'] / 0x2 - _0x4878b0['CAMERA']['height'] / 0x2;
            if (_0x33a3ae) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x41d62();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x4878b0['SYSTEM']['lastTime'] = performance['now']();
            _0x4878b0['SYSTEM']['isReady'] = !![];
            _0x24d278();
            if (!_0x4878b0['SYSTEM']['_gameLoopRunning']) {
                _0x4878b0['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x5e9faf);
            }
            return;
        } else if (_0x129f98['type'] === 'state') {
            const _0x284a78 = {};
            for (const _0x35443f in _0x129f98['players']) {
                if (parseInt(_0x35443f) === _0xc7ab21)
                    continue;
                const _0x216aab = _0x129f98['players'][_0x35443f];
                const _0x5252d4 = _0x93ea24[_0x35443f];
                if (_0x5252d4) {
                    const _0x36f64d = _0x216aab['x'] - _0x5252d4['renderX'];
                    const _0x2128cb = _0x216aab['y'] - _0x5252d4['renderY'];
                    const _0x62fa77 = _0x36f64d * _0x36f64d + _0x2128cb * _0x2128cb > 0x78 * 0x78;
                    Object['assign'](_0x5252d4, _0x216aab);
                    if (_0x62fa77) {
                        _0x5252d4['renderX'] = _0x216aab['x'];
                        _0x5252d4['renderY'] = _0x216aab['y'];
                    }
                    _0x284a78[_0x35443f] = _0x5252d4;
                } else {
                    _0x284a78[_0x35443f] = {
                        ..._0x216aab,
                        'renderX': _0x216aab['x'],
                        'renderY': _0x216aab['y'],
                        'renderAngle': _0x216aab['angle'] || 0x0
                    };
                }
            }
            _0x93ea24 = _0x284a78;
            if (_0x129f98['players'][_0xc7ab21]) {
                const _0x4d8006 = _0x129f98['players'][_0xc7ab21];
                _0x5f2e43['chats'] = _0x4d8006['chats'] || [];
                _0x5f2e43['isDead'] = _0x4d8006['isDead'];
                if (_0x4d8006['name'])
                    _0x19ed4f = _0x4d8006['name'];
                _0x24d278();
                const _0x4b7c3a = Math['hypot'](_0x4d8006['x'] - _0x5f2e43['x'], _0x4d8006['y'] - _0x5f2e43['y']);
                if (_0x4b7c3a > 0x32) {
                    _0x5f2e43['x'] += (_0x4d8006['x'] - _0x5f2e43['x']) * 0.35;
                    _0x5f2e43['y'] += (_0x4d8006['y'] - _0x5f2e43['y']) * 0.35;
                }
            }
            if (_0x129f98['entities'])
                _0x4878b0['ENTITIES'] = _0x129f98['entities'];
            if (_0x129f98['game']) {
                _0x4878b0['GAME_STATE'] = _0x129f98['game']['state'];
                _0x4878b0['NIGHT_ABILITY_OPEN'] = _0x129f98['game']['nightAbilityOpen'];
                if (_0x129f98['game']['mayorRevealed']) {
                    for (const _0x5cc339 in _0x129f98['game']['mayorRevealed']) {
                        _0x4f06a2['add'](parseInt(_0x5cc339));
                    }
                }
                if (_0x4878b0['LAST_STATE'] !== _0x4878b0['GAME_STATE']) {
                    if (_0x4878b0['GAME_STATE'] !== 'NIGHT') {
                        _0x4878b0['CURRENT_TARGET'] = null;
                        _0x1332a2 = null;
                        _0x43f131 = null;
                        _0x314670 = null;
                        const _0x12fb14 = document['getElementById']('ability-ui');
                        if (_0x12fb14)
                            _0x12fb14['style']['display'] = 'none';
                    }
                    if (_0x4878b0['GAME_STATE'] === 'NIGHT') {
                        _0x5f2e43['chats'] = [];
                        for (const _0x1c5d81 in _0x93ea24) {
                            _0x93ea24[_0x1c5d81]['chats'] = [];
                        }
                    }
                    _0x4878b0['LAST_STATE'] = _0x4878b0['GAME_STATE'];
                    _0x54959c();
                    _0xd89867['onStateChange'](_0x4878b0['GAME_STATE'], _0x129f98['game']['nightAbilityOpen']);
                }
                const _0x198f40 = document['getElementById']('phase-ui');
                if (_0x198f40) {
                    _0x198f40['style']['display'] = 'block';
                    let _0x484120 = _0x129f98['game']['state']['replace']('_', '\x20');
                    if (_0x129f98['game']['state'] === 'DAY_DISCUSS') {
                        _0x484120 = 'DAY\x20' + (_0x129f98['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x129f98['game']['timer'] + 's';
                    } else if (_0x129f98['game']['state'] === 'DAY_VOTE') {
                        _0x484120 = 'DAY\x20' + (_0x129f98['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x129f98['game']['timer'] + 's';
                    } else if (_0x129f98['game']['state'] === 'NIGHT') {
                        const _0x5ea408 = _0x129f98['game']['dayCount'] || 0x1;
                        if (_0x129f98['game']['nightAbilityOpen']) {
                            _0x484120 = 'NIGHT\x20' + _0x5ea408 + '\x20ABILITY\x20PHASE';
                            const _0x2a372f = _0x129f98['game']['abilityTimer'] !== undefined ? _0x129f98['game']['abilityTimer'] : _0x129f98['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x2a372f + 's';
                        } else {
                            _0x484120 = 'NIGHT\x20' + _0x5ea408;
                            document['getElementById']('phase-timer')['innerText'] = _0x129f98['game']['timer'] + 's';
                        }
                    }
                    document['getElementById']('phase-name')['innerText'] = _0x484120;
                }
                if (_0x129f98['game']['state'] === 'NIGHT') {
                    const _0x373c01 = document['getElementById']('ability-timer-label');
                    if (_0x373c01) {
                        const _0x432206 = _0x129f98['game']['abilityTimer'] !== undefined ? _0x129f98['game']['abilityTimer'] : _0x129f98['game']['timer'];
                        _0x373c01['innerText'] = _0x129f98['game']['nightAbilityOpen'] ? _0x432206 + 's' : '';
                    }
                    if (_0x129f98['game']['nightAbilityOpen'] && !_0x54481c && !_0x5f2e43['isDead']) {
                        _0x54481c = !![];
                        _0x19d092();
                        const _0x526c52 = document['getElementById']('ability-ui');
                        if (_0x526c52)
                            _0x526c52['style']['display'] = 'block';
                    }
                    if (!_0x129f98['game']['nightAbilityOpen']) {
                        const _0x52c5f9 = document['getElementById']('ability-ui');
                        if (_0x52c5f9 && _0x52c5f9['style']['display'] === 'block') {
                            _0x52c5f9['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x54481c = ![];
                }
                _0x55ae39(_0x129f98['game']);
                if (_0x129f98['game']['roleListMode'] !== undefined) {
                    _0x4878b0['ROLE_LIST_RAW'] = _0x129f98['game']['roleList'] || [];
                    _0x4ea11d(_0x129f98['game']['roleList'], _0x129f98['game']['roleListMode']);
                }
            }
        } else if (_0x129f98['type'] === 'teleport') {
            _0x5f2e43['x'] = _0x129f98['x'];
            _0x5f2e43['y'] = _0x129f98['y'];
            _0x5f2e43['vx'] = 0x0;
            _0x5f2e43['vy'] = 0x0;
            _0x4878b0['CAMERA']['x'] = null;
            if (_0x129f98['teleportId'] !== undefined)
                _0x16332f = _0x129f98['teleportId'];
        } else if (_0x129f98['type'] === 'bulk_teleport') {
            for (const _0x32b62a in _0x129f98['positions']) {
                const _0x3273e4 = _0x129f98['positions'][_0x32b62a];
                if (parseInt(_0x32b62a) === _0xc7ab21) {
                    _0x5f2e43['x'] = _0x3273e4['x'];
                    _0x5f2e43['y'] = _0x3273e4['y'];
                    _0x5f2e43['vx'] = 0x0;
                    _0x5f2e43['vy'] = 0x0;
                    _0x4878b0['CAMERA']['x'] = null;
                    continue;
                }
                const _0x20e6ec = _0x93ea24[_0x32b62a];
                if (_0x20e6ec) {
                    _0x20e6ec['x'] = _0x3273e4['x'];
                    _0x20e6ec['y'] = _0x3273e4['y'];
                    _0x20e6ec['renderX'] = _0x3273e4['x'];
                    _0x20e6ec['renderY'] = _0x3273e4['y'];
                    _0x20e6ec['vx'] = 0x0;
                    _0x20e6ec['vy'] = 0x0;
                }
            }
        } else if (_0x129f98['type'] === 'player_left') {
            delete _0x93ea24[_0x129f98['id']];
            _0x4f06a2['delete'](parseInt(_0x129f98['id']));
        } else if (_0x129f98['type'] === 'map_update') {
            const _0x381cb0 = _0x4878b0['MAP']['layers']['find'](_0x3fa242 => _0x3fa242['name'] === _0x129f98['layer']);
            if (_0x381cb0) {
                _0x381cb0['data'][_0x129f98['row'] * _0x4878b0['MAP']['columns'] + _0x129f98['col']] = _0x129f98['gid'];
                const _0x53126c = _0x129f98['row'] * _0x4878b0['MAP']['columns'] + _0x129f98['col'];
                if (_0x4878b0['MAP']['doors'] && _0x4878b0['MAP']['doors'][_0x53126c]) {
                    const _0xf52bf = _0x4878b0['MAP']['layers']['find'](_0x2e3131 => _0x2e3131['name'] === 'floor2');
                    if (_0xf52bf)
                        _0xf52bf['data'][_0x53126c] = 0x2;
                }
                const _0x4447f1 = Math['floor'](_0x129f98['col'] * _0x4878b0['MAP']['tileSize'] / _0x4878b0['MAP']['chunkSize']);
                const _0x4239e2 = Math['floor'](_0x129f98['row'] * _0x4878b0['MAP']['tileSize'] / _0x4878b0['MAP']['chunkSize']);
                _0x211de4(_0x4447f1, _0x4239e2);
            }
        } else if (_0x129f98['type'] === 'role_assign') {
            _0x4caf82 = _0x129f98['role'];
            _0x5f2e43['isDead'] = _0x4caf82 === 'Spectator';
            _0x4f06a2['clear']();
            _0x4878b0['CURRENT_TARGET'] = null;
            _0x1332a2 = null;
            _0x43f131 = null;
            _0x314670 = null;
            _0x54481c = ![];
            const _0x552d48 = document['getElementById']('ability-ui');
            if (_0x552d48)
                _0x552d48['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x4caf82;
            _0x54959c();
            _0x2f8e48(_0x4caf82 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x4caf82, !![]);
            let _0x2abb08 = '';
            if (_0x4caf82 === 'Investigator')
                _0x2abb08 = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x4caf82 === 'Tracker')
                _0x2abb08 = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x4caf82 === 'Doctor')
                _0x2abb08 = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x4caf82 === 'Archer')
                _0x2abb08 = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x4caf82 === 'Escort')
                _0x2abb08 = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x4caf82 === 'Vigilante')
                _0x2abb08 = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x4caf82 === 'Skinwalker')
                _0x2abb08 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x4caf82 === 'Celebrity')
                _0x2abb08 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x4caf82 === 'Mayor')
                _0x2abb08 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x2f8e48(_0x2abb08, !![]);
        } else if (_0x129f98['type'] === 'mayor_reveal') {
            _0x4f06a2['add'](parseInt(_0x129f98['playerId']));
            _0x24d278();
            _0x54959c();
        } else if (_0x129f98['type'] === 'rolelist_update') {
            _0x4878b0['ROLE_LIST_RAW'] = _0x129f98['list'] || [];
            _0x4ea11d(_0x129f98['list'], _0x129f98['mode']);
        } else if (_0x129f98['type'] === 'sound_event') {
            _0xd89867['onSoundEvent'](_0x129f98['track']);
        } else if (_0x129f98['type'] === 'game_over') {
            _0xd89867['onStateChange']('LOBBY', ![]);
            _0x4ea11d([], 'off');
            _0x4caf82 = null;
            _0x5f2e43['isDead'] = ![];
            _0x4f06a2['clear']();
            _0x4878b0['CURRENT_TARGET'] = null;
            _0x1332a2 = null;
            _0x43f131 = null;
            _0x314670 = null;
            _0x54481c = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x54959c();
            _0x2f8e48('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x129f98['type'] === 'chat_log') {
            _0x2f8e48(_0x129f98['sender'] + ':\x20' + _0x129f98['text']);
        } else if (_0x129f98['type'] === 'sys_chat') {
            _0x2f8e48(_0x129f98['text'], !![]);
        }
    };
}
function _0x2f8e48(_0x2a68d0, _0x159631 = ![]) {
    const _0x26ff5b = document['getElementById']('chat-log-messages');
    const _0x5988bc = document['getElementById']('chat-log-ui');
    const _0x213101 = _0x5988bc['scrollHeight'] - _0x5988bc['scrollTop'] - _0x5988bc['clientHeight'] < 0x1e;
    const _0x310035 = document['createElement']('div');
    _0x310035['className'] = 'chat-log-line' + (_0x159631 ? '\x20sys-msg' : '');
    _0x310035['innerText'] = _0x2a68d0;
    _0x26ff5b['appendChild'](_0x310035);
    if (_0x213101) {
        _0x5988bc['scrollTop'] = _0x5988bc['scrollHeight'];
    }
    if (_0x26ff5b['childElementCount'] > 0xc8) {
        _0x26ff5b['removeChild'](_0x26ff5b['firstChild']);
    }
}
let _0x217e7a = -0x1, _0x5cd97a = -0x1, _0x16b9fa = -0x1, _0x3a7ebd = 0x0;
function _0x108e44() {
    if (!_0xc7ab21 || !_0x131448 || _0x131448['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x94d223 = performance['now']();
    const _0x26d5a2 = _0x94d223 - _0x3a7ebd;
    const _0x1ae3a2 = Math['abs'](_0x5f2e43['x'] - _0x217e7a) > 0.05 || Math['abs'](_0x5f2e43['y'] - _0x5cd97a) > 0.05 || Math['abs'](_0x5f2e43['angle'] - _0x16b9fa) > 0.02;
    if (!_0x1ae3a2 && _0x26d5a2 < 0xc8)
        return;
    if (_0x26d5a2 < 0x19)
        return;
    _0x3a7ebd = _0x94d223;
    _0x217e7a = _0x5f2e43['x'];
    _0x5cd97a = _0x5f2e43['y'];
    _0x16b9fa = _0x5f2e43['angle'];
    if (!_0xc7ab21 || !_0x131448 || _0x131448['readyState'] !== WebSocket['OPEN'])
        return;
    _0x131448['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x5f2e43['x'],
        'y': _0x5f2e43['y'],
        'vx': _0x5f2e43['vx'],
        'vy': _0x5f2e43['vy'],
        'angle': _0x5f2e43['angle'],
        'scale': _0x5f2e43['scale'],
        'teleportId': _0x16332f
    }));
}
function _0x278af0() {
    if (_0x5f2e43['isDead'])
        return;
    const _0xf1817c = _0x4878b0['MAP']['layers']['find'](_0x5bf850 => _0x5bf850['name'] === 'walls');
    if (!_0xf1817c)
        return;
    const _0x1bc9d6 = _0x5f2e43['scale'];
    const _0x1b81e2 = _0x5f2e43['width'] * _0x1bc9d6 / 0x2;
    for (let _0x4c7d8d = 0x0; _0x4c7d8d < 0x3; _0x4c7d8d++) {
        let _0xdf3cd9 = _0x5f2e43['x'] + _0x5f2e43['width'] / 0x2;
        let _0x389942 = _0x5f2e43['y'] + _0x5f2e43['height'] / 0x2;
        const _0x4f6b34 = Math['floor']((_0xdf3cd9 - _0x1b81e2) / _0x4878b0['MAP']['tileSize']);
        const _0x4a2d33 = Math['floor']((_0xdf3cd9 + _0x1b81e2) / _0x4878b0['MAP']['tileSize']);
        const _0x865979 = Math['floor']((_0x389942 - _0x1b81e2) / _0x4878b0['MAP']['tileSize']);
        const _0x28bd86 = Math['floor']((_0x389942 + _0x1b81e2) / _0x4878b0['MAP']['tileSize']);
        for (let _0x4c0a3a = _0x865979; _0x4c0a3a <= _0x28bd86; _0x4c0a3a++) {
            for (let _0x31863c = _0x4f6b34; _0x31863c <= _0x4a2d33; _0x31863c++) {
                if (_0x31863c < 0x0 || _0x31863c >= _0x4878b0['MAP']['columns'] || _0x4c0a3a < 0x0 || _0x4c0a3a >= _0x4878b0['MAP']['rows'])
                    continue;
                if (_0xf1817c['data'][_0x4c0a3a * _0x4878b0['MAP']['columns'] + _0x31863c] === 0x0)
                    continue;
                const _0x439a38 = _0x31863c * _0x4878b0['MAP']['tileSize'];
                const _0x2d5dc2 = _0x4c0a3a * _0x4878b0['MAP']['tileSize'];
                const _0x255f31 = _0xdf3cd9 < _0x439a38 ? _0x439a38 : _0xdf3cd9 > _0x439a38 + _0x4878b0['MAP']['tileSize'] ? _0x439a38 + _0x4878b0['MAP']['tileSize'] : _0xdf3cd9;
                const _0x438c7d = _0x389942 < _0x2d5dc2 ? _0x2d5dc2 : _0x389942 > _0x2d5dc2 + _0x4878b0['MAP']['tileSize'] ? _0x2d5dc2 + _0x4878b0['MAP']['tileSize'] : _0x389942;
                const _0x38bb02 = _0xdf3cd9 - _0x255f31;
                const _0x2c4d6f = _0x389942 - _0x438c7d;
                const _0x44b8df = Math['sqrt'](_0x38bb02 * _0x38bb02 + _0x2c4d6f * _0x2c4d6f);
                if (_0x44b8df < _0x1b81e2) {
                    if (_0x44b8df === 0x0) {
                        const _0x131544 = _0xdf3cd9 - _0x439a38;
                        const _0x40ccd8 = _0x439a38 + _0x4878b0['MAP']['tileSize'] - _0xdf3cd9;
                        const _0x7ff15 = _0x389942 - _0x2d5dc2;
                        const _0x27aadf = _0x2d5dc2 + _0x4878b0['MAP']['tileSize'] - _0x389942;
                        const _0x454e14 = Math['min'](_0x131544, _0x40ccd8, _0x7ff15, _0x27aadf);
                        if (_0x454e14 === _0x131544)
                            _0xdf3cd9 = _0x439a38 - _0x1b81e2;
                        else if (_0x454e14 === _0x40ccd8)
                            _0xdf3cd9 = _0x439a38 + _0x4878b0['MAP']['tileSize'] + _0x1b81e2;
                        else if (_0x454e14 === _0x7ff15)
                            _0x389942 = _0x2d5dc2 - _0x1b81e2;
                        else
                            _0x389942 = _0x2d5dc2 + _0x4878b0['MAP']['tileSize'] + _0x1b81e2;
                    } else {
                        const _0xe2b38a = _0x1b81e2 - _0x44b8df;
                        _0xdf3cd9 += _0x38bb02 / _0x44b8df * _0xe2b38a;
                        _0x389942 += _0x2c4d6f / _0x44b8df * _0xe2b38a;
                        const _0x558a74 = _0x5f2e43['vx'] * (_0x38bb02 / _0x44b8df) + _0x5f2e43['vy'] * (_0x2c4d6f / _0x44b8df);
                        if (_0x558a74 < 0x0) {
                            _0x5f2e43['vx'] -= _0x558a74 * (_0x38bb02 / _0x44b8df);
                            _0x5f2e43['vy'] -= _0x558a74 * (_0x2c4d6f / _0x44b8df);
                        }
                    }
                }
            }
        }
        _0x5f2e43['x'] = _0xdf3cd9 - _0x5f2e43['width'] / 0x2;
        _0x5f2e43['y'] = _0x389942 - _0x5f2e43['height'] / 0x2;
    }
}
function _0x593cb8(_0x12b3e2) {
    const _0x2e400f = _0x4878b0['MAP']['layers']['find'](_0x57c583 => _0x57c583['name'] === 'walls');
    if (!_0x2e400f)
        return;
    const _0x224c1d = _0x12b3e2['width'] / 0x2;
    for (let _0x3889b1 = 0x0; _0x3889b1 < 0x2; _0x3889b1++) {
        let _0x1e8251 = _0x12b3e2['x'] + _0x12b3e2['width'] / 0x2;
        let _0x12b8fb = _0x12b3e2['y'] + _0x12b3e2['height'] / 0x2;
        const _0x4818e9 = Math['floor']((_0x1e8251 - _0x224c1d) / _0x4878b0['MAP']['tileSize']);
        const _0x351a44 = Math['floor']((_0x1e8251 + _0x224c1d) / _0x4878b0['MAP']['tileSize']);
        const _0x40c379 = Math['floor']((_0x12b8fb - _0x224c1d) / _0x4878b0['MAP']['tileSize']);
        const _0xf85b8c = Math['floor']((_0x12b8fb + _0x224c1d) / _0x4878b0['MAP']['tileSize']);
        for (let _0x445557 = _0x40c379; _0x445557 <= _0xf85b8c; _0x445557++) {
            for (let _0x40a6f3 = _0x4818e9; _0x40a6f3 <= _0x351a44; _0x40a6f3++) {
                if (_0x40a6f3 < 0x0 || _0x40a6f3 >= _0x4878b0['MAP']['columns'] || _0x445557 < 0x0 || _0x445557 >= _0x4878b0['MAP']['rows'])
                    continue;
                if (_0x2e400f['data'][_0x445557 * _0x4878b0['MAP']['columns'] + _0x40a6f3] === 0x0)
                    continue;
                const _0x528f32 = _0x40a6f3 * _0x4878b0['MAP']['tileSize'];
                const _0x37a5dd = _0x445557 * _0x4878b0['MAP']['tileSize'];
                const _0x415ca6 = _0x1e8251 < _0x528f32 ? _0x528f32 : _0x1e8251 > _0x528f32 + _0x4878b0['MAP']['tileSize'] ? _0x528f32 + _0x4878b0['MAP']['tileSize'] : _0x1e8251;
                const _0x92582 = _0x12b8fb < _0x37a5dd ? _0x37a5dd : _0x12b8fb > _0x37a5dd + _0x4878b0['MAP']['tileSize'] ? _0x37a5dd + _0x4878b0['MAP']['tileSize'] : _0x12b8fb;
                const _0x13dcd1 = _0x1e8251 - _0x415ca6;
                const _0x36f37a = _0x12b8fb - _0x92582;
                const _0x378a6f = Math['sqrt'](_0x13dcd1 * _0x13dcd1 + _0x36f37a * _0x36f37a);
                if (_0x378a6f < _0x224c1d) {
                    if (_0x378a6f === 0x0) {
                        const _0x38b271 = _0x1e8251 - _0x528f32;
                        const _0x42e39c = _0x528f32 + _0x4878b0['MAP']['tileSize'] - _0x1e8251;
                        const _0x37899c = _0x12b8fb - _0x37a5dd;
                        const _0x2f89fd = _0x37a5dd + _0x4878b0['MAP']['tileSize'] - _0x12b8fb;
                        const _0x141071 = Math['min'](_0x38b271, _0x42e39c, _0x37899c, _0x2f89fd);
                        if (_0x141071 === _0x38b271)
                            _0x1e8251 = _0x528f32 - _0x224c1d;
                        else if (_0x141071 === _0x42e39c)
                            _0x1e8251 = _0x528f32 + _0x4878b0['MAP']['tileSize'] + _0x224c1d;
                        else if (_0x141071 === _0x37899c)
                            _0x12b8fb = _0x37a5dd - _0x224c1d;
                        else
                            _0x12b8fb = _0x37a5dd + _0x4878b0['MAP']['tileSize'] + _0x224c1d;
                    } else {
                        const _0x5beef1 = _0x224c1d - _0x378a6f;
                        _0x1e8251 += _0x13dcd1 / _0x378a6f * _0x5beef1;
                        _0x12b8fb += _0x36f37a / _0x378a6f * _0x5beef1;
                    }
                }
            }
        }
        _0x12b3e2['x'] = _0x1e8251 - _0x12b3e2['width'] / 0x2;
        _0x12b3e2['y'] = _0x12b8fb - _0x12b3e2['height'] / 0x2;
    }
}
function _0x164bd1(_0x147dcf) {
    const _0x54cf34 = _0x147dcf['width'] / 0x2;
    for (let _0x526440 = 0x0; _0x526440 < 0x2; _0x526440++) {
        let _0x467532 = _0x147dcf['x'] + _0x147dcf['width'] / 0x2;
        let _0x2f87ee = _0x147dcf['y'] + _0x147dcf['height'] / 0x2;
        for (const _0x4b1816 of _0x4878b0['ENTITIES']) {
            const _0x353b2e = _0x467532 < _0x4b1816['x'] ? _0x4b1816['x'] : _0x467532 > _0x4b1816['x'] + _0x4b1816['w'] ? _0x4b1816['x'] + _0x4b1816['w'] : _0x467532;
            const _0x1adc63 = _0x2f87ee < _0x4b1816['y'] ? _0x4b1816['y'] : _0x2f87ee > _0x4b1816['y'] + _0x4b1816['h'] ? _0x4b1816['y'] + _0x4b1816['h'] : _0x2f87ee;
            const _0x4d3636 = _0x467532 - _0x353b2e;
            const _0x3c87ed = _0x2f87ee - _0x1adc63;
            const _0x2792bc = Math['sqrt'](_0x4d3636 * _0x4d3636 + _0x3c87ed * _0x3c87ed);
            if (_0x2792bc < _0x54cf34 && _0x2792bc > 0x0) {
                const _0x3d3e0f = _0x54cf34 - _0x2792bc;
                const _0x614287 = _0x4d3636 / _0x2792bc;
                const _0x26816e = _0x3c87ed / _0x2792bc;
                _0x467532 += _0x614287 * _0x3d3e0f;
                _0x2f87ee += _0x26816e * _0x3d3e0f;
            } else if (_0x2792bc === 0x0) {
                const _0x30a8a1 = _0x467532 - _0x4b1816['x'];
                const _0x4b7d5f = _0x4b1816['x'] + _0x4b1816['w'] - _0x467532;
                const _0x3c9799 = _0x2f87ee - _0x4b1816['y'];
                const _0x101f69 = _0x4b1816['y'] + _0x4b1816['h'] - _0x2f87ee;
                const _0x59c4d2 = Math['min'](_0x30a8a1, _0x4b7d5f, _0x3c9799, _0x101f69);
                if (_0x59c4d2 === _0x30a8a1)
                    _0x467532 = _0x4b1816['x'] - _0x54cf34;
                else if (_0x59c4d2 === _0x4b7d5f)
                    _0x467532 = _0x4b1816['x'] + _0x4b1816['w'] + _0x54cf34;
                else if (_0x59c4d2 === _0x3c9799)
                    _0x2f87ee = _0x4b1816['y'] - _0x54cf34;
                else
                    _0x2f87ee = _0x4b1816['y'] + _0x4b1816['h'] + _0x54cf34;
            }
        }
        _0x147dcf['x'] = _0x467532 - _0x147dcf['width'] / 0x2;
        _0x147dcf['y'] = _0x2f87ee - _0x147dcf['height'] / 0x2;
    }
}
function _0x2addaa() {
    if (_0x5f2e43['isDead'])
        return;
    const _0x434af4 = _0x5f2e43['width'] / 0x2;
    const _0x18c1ff = _0x5f2e43['x'] + _0x5f2e43['width'] / 0x2;
    const _0x49887f = _0x5f2e43['y'] + _0x5f2e43['height'] / 0x2;
    for (const _0x28395c in _0x93ea24) {
        const _0x2447ff = _0x93ea24[_0x28395c];
        if (_0x2447ff['isDead'])
            continue;
        const _0x11c648 = _0x2447ff['width'] / 0x2;
        const _0x1b32cf = _0x434af4 + _0x11c648;
        const _0x5d57b9 = (_0x2447ff['renderX'] ?? _0x2447ff['x']) + _0x2447ff['width'] / 0x2;
        const _0x4a1658 = (_0x2447ff['renderY'] ?? _0x2447ff['y']) + _0x2447ff['height'] / 0x2;
        const _0x4bc22b = _0x18c1ff - _0x5d57b9;
        const _0x4fc27a = _0x49887f - _0x4a1658;
        const _0x1ddb47 = Math['sqrt'](_0x4bc22b * _0x4bc22b + _0x4fc27a * _0x4fc27a);
        if (_0x1ddb47 > 0x0 && _0x1ddb47 < _0x1b32cf) {
            const _0x1bee70 = _0x1b32cf - _0x1ddb47;
            const _0x59decc = _0x4bc22b / _0x1ddb47;
            const _0x3ad8ed = _0x4fc27a / _0x1ddb47;
            _0x5f2e43['x'] += _0x59decc * (_0x1bee70 * 0.25);
            _0x5f2e43['y'] += _0x3ad8ed * (_0x1bee70 * 0.25);
            _0x2447ff['x'] -= _0x59decc * (_0x1bee70 * 0.75);
            _0x2447ff['y'] -= _0x3ad8ed * (_0x1bee70 * 0.75);
            _0x593cb8(_0x2447ff);
            _0x164bd1(_0x2447ff);
            if (_0x2447ff['renderX'] !== undefined) {
                _0x2447ff['renderX'] = _0x2447ff['x'];
                _0x2447ff['renderY'] = _0x2447ff['y'];
            }
            const _0x19e8c2 = _0x5f2e43['vx'] * _0x59decc + _0x5f2e43['vy'] * _0x3ad8ed;
            if (_0x19e8c2 < 0x0) {
                _0x5f2e43['vx'] -= _0x19e8c2 * _0x59decc * 0.25;
                _0x5f2e43['vy'] -= _0x19e8c2 * _0x3ad8ed * 0.25;
            }
        }
    }
    _0x278af0();
    _0x4c0c6d();
}
function _0x4c0c6d() {
    if (_0x5f2e43['isDead'])
        return;
    const _0x6ca5b7 = _0x5f2e43['scale'];
    const _0xc5b6cc = _0x5f2e43['width'] * _0x6ca5b7 / 0x2;
    for (let _0x4e89cb = 0x0; _0x4e89cb < 0x2; _0x4e89cb++) {
        let _0x8efa7d = _0x5f2e43['x'] + _0x5f2e43['width'] / 0x2;
        let _0x15b53a = _0x5f2e43['y'] + _0x5f2e43['height'] / 0x2;
        for (const _0x32b18c of _0x4878b0['ENTITIES']) {
            const _0x1eb7a9 = _0x8efa7d < _0x32b18c['x'] ? _0x32b18c['x'] : _0x8efa7d > _0x32b18c['x'] + _0x32b18c['w'] ? _0x32b18c['x'] + _0x32b18c['w'] : _0x8efa7d;
            const _0x24d9ba = _0x15b53a < _0x32b18c['y'] ? _0x32b18c['y'] : _0x15b53a > _0x32b18c['y'] + _0x32b18c['h'] ? _0x32b18c['y'] + _0x32b18c['h'] : _0x15b53a;
            const _0x30b431 = _0x8efa7d - _0x1eb7a9;
            const _0x510af3 = _0x15b53a - _0x24d9ba;
            const _0x52e9fa = Math['sqrt'](_0x30b431 * _0x30b431 + _0x510af3 * _0x510af3);
            if (_0x52e9fa < _0xc5b6cc && _0x52e9fa > 0x0) {
                const _0x408416 = _0xc5b6cc - _0x52e9fa;
                const _0x3f2400 = _0x30b431 / _0x52e9fa;
                const _0x392314 = _0x510af3 / _0x52e9fa;
                _0x8efa7d += _0x3f2400 * _0x408416;
                _0x15b53a += _0x392314 * _0x408416;
                const _0x59dd00 = _0x5f2e43['vx'] * _0x3f2400 + _0x5f2e43['vy'] * _0x392314;
                if (_0x59dd00 < 0x0) {
                    _0x5f2e43['vx'] -= _0x59dd00 * _0x3f2400;
                    _0x5f2e43['vy'] -= _0x59dd00 * _0x392314;
                }
            } else if (_0x52e9fa === 0x0) {
                const _0x13dec7 = _0x8efa7d - _0x32b18c['x'];
                const _0x52e339 = _0x32b18c['x'] + _0x32b18c['w'] - _0x8efa7d;
                const _0x4efdd7 = _0x15b53a - _0x32b18c['y'];
                const _0xe1cc29 = _0x32b18c['y'] + _0x32b18c['h'] - _0x15b53a;
                const _0x222fb2 = Math['min'](_0x13dec7, _0x52e339, _0x4efdd7, _0xe1cc29);
                if (_0x222fb2 === _0x13dec7)
                    _0x8efa7d = _0x32b18c['x'] - _0xc5b6cc;
                else if (_0x222fb2 === _0x52e339)
                    _0x8efa7d = _0x32b18c['x'] + _0x32b18c['w'] + _0xc5b6cc;
                else if (_0x222fb2 === _0x4efdd7)
                    _0x15b53a = _0x32b18c['y'] - _0xc5b6cc;
                else
                    _0x15b53a = _0x32b18c['y'] + _0x32b18c['h'] + _0xc5b6cc;
            }
        }
        _0x5f2e43['x'] = _0x8efa7d - _0x5f2e43['width'] / 0x2;
        _0x5f2e43['y'] = _0x15b53a - _0x5f2e43['height'] / 0x2;
    }
}
function _0x4da53c(_0x2b515d, _0x2b0ce4) {
    const _0x330669 = _0x4878b0['MAP']['layers']['find'](_0x15046e => _0x15046e['name'] === 'trees');
    if (!_0x330669)
        return ![];
    const _0x4dc783 = Math['floor'](_0x2b515d / _0x4878b0['MAP']['tileSize']);
    const _0x355b2d = Math['floor'](_0x2b0ce4 / _0x4878b0['MAP']['tileSize']);
    if (_0x4dc783 < 0x0 || _0x4dc783 >= _0x4878b0['MAP']['columns'] || _0x355b2d < 0x0 || _0x355b2d >= _0x4878b0['MAP']['rows'])
        return ![];
    return _0x330669['data'][_0x355b2d * _0x4878b0['MAP']['columns'] + _0x4dc783] === 0xb;
}
let _0x17a2a2 = null;
function _0x4f3922() {
    const _0x5c6f17 = _0x4878b0['MAP'];
    const _0x318db7 = _0x5c6f17['layers']['find'](_0x1e7b70 => _0x1e7b70['name'] === 'floor2');
    const _0x4768cf = _0x5c6f17['layers']['find'](_0x2c44bc => _0x2c44bc['name'] === 'walls');
    if (!_0x318db7 || !_0x4768cf) {
        _0x17a2a2 = null;
        return;
    }
    const _0x6a15ac = _0x5c6f17['columns'];
    const _0x4c8dd8 = _0x5c6f17['rows'];
    const _0x9ada36 = [];
    const _0x5c18a3 = [];
    const _0x4c6647 = new Set();
    for (let _0x6e53c8 = 0x0; _0x6e53c8 < _0x4c8dd8; _0x6e53c8++) {
        for (let _0xa17d70 = 0x0; _0xa17d70 < _0x6a15ac; _0xa17d70++) {
            const _0x1f41ba = _0x6e53c8 * _0x6a15ac + _0xa17d70;
            const _0x1743ff = _0x318db7['data'][_0x1f41ba];
            const _0x2755b5 = _0x4768cf['data'][_0x1f41ba];
            if (_0x1743ff === 0x2 || _0x1743ff === 0x4) {
                _0x9ada36['push']({
                    'c': _0xa17d70,
                    'r': _0x6e53c8
                });
                if (_0x2755b5 !== 0x0)
                    _0x5c18a3['push']({
                        'c': _0xa17d70,
                        'r': _0x6e53c8
                    });
            }
            if (_0x2755b5 !== 0x0)
                _0x4c6647['add'](_0xa17d70 + ',' + _0x6e53c8);
        }
    }
    const _0x4e2abc = new Set(_0x9ada36['map'](_0x57e585 => _0x57e585['c'] + ',' + _0x57e585['r']));
    const _0x44f351 = [
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
                c: _0x3037b5,
                r: _0x223b72
            } of _0x9ada36) {
        for (const [_0x375032, _0x565985] of _0x44f351) {
            const _0xf78e14 = _0x3037b5 + _0x375032, _0x2f66d7 = _0x223b72 + _0x565985;
            const _0x2ca459 = _0xf78e14 + ',' + _0x2f66d7;
            if (!_0x4e2abc['has'](_0x2ca459))
                _0x4c6647['add'](_0x2ca459);
        }
    }
    _0x17a2a2 = {
        'wallSet': _0x4c6647,
        'floorTiles': _0x9ada36,
        'wallTiles': _0x5c18a3,
        'interiorSet': _0x4e2abc
    };
}
function _0x51c04f() {
    const _0x1c2d76 = _0x4878b0['MAP']['layers']['find'](_0x44f16b => _0x44f16b['name'] === 'floor2');
    if (!_0x1c2d76)
        return ![];
    const _0x459c66 = Math['floor']((_0x5f2e43['x'] + _0x5f2e43['width'] / 0x2) / _0x4878b0['MAP']['tileSize']);
    const _0x1429f2 = Math['floor']((_0x5f2e43['y'] + _0x5f2e43['height'] / 0x2) / _0x4878b0['MAP']['tileSize']);
    if (_0x459c66 < 0x0 || _0x459c66 >= _0x4878b0['MAP']['columns'] || _0x1429f2 < 0x0 || _0x1429f2 >= _0x4878b0['MAP']['rows'])
        return ![];
    const _0x355137 = _0x1c2d76['data'][_0x1429f2 * _0x4878b0['MAP']['columns'] + _0x459c66];
    return _0x355137 === 0x2;
}
function _0x5a8d41() {
    if (_0x5f2e43['isDead']) {
        _0x4878b0['SHADOW']['polygon'] = null;
        return;
    }
    const _0x31ab40 = _0x4878b0['MAP'];
    const _0x1da189 = _0x4878b0['SHADOW'];
    const _0x5e766d = _0x31ab40['tileSize'];
    if (!_0x17a2a2)
        _0x4f3922();
    if (!_0x17a2a2) {
        _0x1da189['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x5123f5,
        floorTiles: _0x25855f
    } = _0x17a2a2;
    if (_0x25855f['length'] === 0x0) {
        _0x1da189['polygon'] = null;
        return;
    }
    if (!_0x51c04f()) {
        _0x1da189['polygon'] = null;
        return;
    }
    const _0x2557e7 = _0x5f2e43['x'] + _0x5f2e43['width'] / 0x2;
    const _0x8e7e79 = _0x5f2e43['y'] + _0x5f2e43['height'] / 0x2;
    if (!_0x17a2a2['_bounds']) {
        let _0x2d11b5 = Infinity, _0x3b19ae = -Infinity, _0x14b452 = Infinity, _0x13ada0 = -Infinity;
        for (const {
                    c: _0x427a0f,
                    r: _0x1c4452
                } of _0x25855f) {
            if (_0x427a0f < _0x2d11b5)
                _0x2d11b5 = _0x427a0f;
            if (_0x427a0f > _0x3b19ae)
                _0x3b19ae = _0x427a0f;
            if (_0x1c4452 < _0x14b452)
                _0x14b452 = _0x1c4452;
            if (_0x1c4452 > _0x13ada0)
                _0x13ada0 = _0x1c4452;
        }
        _0x17a2a2['_bounds'] = {
            'minC': Math['max'](0x0, _0x2d11b5 - 0x1),
            'maxC': Math['min'](_0x31ab40['columns'] - 0x1, _0x3b19ae + 0x1),
            'minR': Math['max'](0x0, _0x14b452 - 0x1),
            'maxR': Math['min'](_0x31ab40['rows'] - 0x1, _0x13ada0 + 0x1)
        };
        const _0x461fb0 = [];
        for (let _0x554d1b = _0x17a2a2['_bounds']['minR']; _0x554d1b <= _0x17a2a2['_bounds']['maxR']; _0x554d1b++) {
            for (let _0x5ac12d = _0x17a2a2['_bounds']['minC']; _0x5ac12d <= _0x17a2a2['_bounds']['maxC']; _0x5ac12d++) {
                if (_0x5123f5['has'](_0x5ac12d + ',' + _0x554d1b))
                    _0x461fb0['push'](_0x5ac12d, _0x554d1b);
            }
        }
        _0x17a2a2['_wallArr'] = _0x461fb0;
    }
    const {
        minC: _0x3ef6a6,
        maxC: _0x25ad81,
        minR: _0x440535,
        maxR: _0x466c63
    } = _0x17a2a2['_bounds'];
    const _0x3a8e5e = _0x17a2a2['_wallArr'];
    const _0x24eaf3 = 0.0001;
    const _0x2813e2 = new Set();
    const _0x13dbad = [];
    for (let _0x354da9 = 0x0; _0x354da9 < _0x3a8e5e['length']; _0x354da9 += 0x2) {
        const _0x53a78c = _0x3a8e5e[_0x354da9], _0x2ec710 = _0x3a8e5e[_0x354da9 + 0x1];
        const _0x424c76 = [
            _0x53a78c * _0x5e766d,
            _0x2ec710 * _0x5e766d,
            _0x53a78c * _0x5e766d + _0x5e766d,
            _0x2ec710 * _0x5e766d,
            _0x53a78c * _0x5e766d,
            _0x2ec710 * _0x5e766d + _0x5e766d,
            _0x53a78c * _0x5e766d + _0x5e766d,
            _0x2ec710 * _0x5e766d + _0x5e766d
        ];
        for (let _0x4c5fdb = 0x0; _0x4c5fdb < _0x424c76['length']; _0x4c5fdb += 0x2) {
            const _0xaab216 = _0x424c76[_0x4c5fdb], _0x334558 = _0x424c76[_0x4c5fdb + 0x1];
            const _0xec45bd = Math['atan2'](_0x334558 - _0x8e7e79, _0xaab216 - _0x2557e7);
            const _0x5c8512 = Math['round'](_0xec45bd * 0x4e20);
            if (!_0x2813e2['has'](_0x5c8512 - 0x1)) {
                _0x2813e2['add'](_0x5c8512 - 0x1);
                _0x13dbad['push'](_0xec45bd - _0x24eaf3);
            }
            if (!_0x2813e2['has'](_0x5c8512)) {
                _0x2813e2['add'](_0x5c8512);
                _0x13dbad['push'](_0xec45bd);
            }
            if (!_0x2813e2['has'](_0x5c8512 + 0x1)) {
                _0x2813e2['add'](_0x5c8512 + 0x1);
                _0x13dbad['push'](_0xec45bd + _0x24eaf3);
            }
        }
    }
    _0x13dbad['sort']((_0x456241, _0x1313de) => _0x456241 - _0x1313de);
    const _0x12dc9a = Math['hypot']((_0x25ad81 - _0x3ef6a6 + 0x2) * _0x5e766d, (_0x466c63 - _0x440535 + 0x2) * _0x5e766d);
    const _0x580c9c = _0x5052f2 => {
        const _0x4a56f6 = Math['cos'](_0x5052f2);
        const _0x31a786 = Math['sin'](_0x5052f2);
        let _0x43ecab = _0x12dc9a;
        for (let _0x27cd4d = 0x0; _0x27cd4d < _0x3a8e5e['length']; _0x27cd4d += 0x2) {
            const _0x47fb3e = _0x3a8e5e[_0x27cd4d], _0x84b1f7 = _0x3a8e5e[_0x27cd4d + 0x1];
            const _0x18b609 = _0x47fb3e * _0x5e766d, _0x3a2217 = _0x84b1f7 * _0x5e766d;
            const _0x52bcdd = _0x18b609 + _0x5e766d, _0xe1ac1a = _0x3a2217 + _0x5e766d;
            const _0x667c2f = _0x18b609 + _0x5e766d * 0.5, _0x37af99 = _0x3a2217 + _0x5e766d * 0.5;
            const _0x284fd1 = Math['abs'](_0x667c2f - _0x2557e7) + Math['abs'](_0x37af99 - _0x8e7e79);
            if (_0x284fd1 > _0x43ecab + _0x5e766d * 1.5)
                continue;
            let _0x21e18b, _0x4d3cef, _0x27d045;
            _0x21e18b = -_0x31a786 * _0x5e766d;
            if (Math['abs'](_0x21e18b) >= 1e-10) {
                _0x4d3cef = -(_0x3a2217 - _0x8e7e79) * _0x5e766d / _0x21e18b;
                _0x27d045 = ((_0x18b609 - _0x2557e7) * _0x31a786 - (_0x3a2217 - _0x8e7e79) * _0x4a56f6) / _0x21e18b;
                if (_0x4d3cef > 0.001 && _0x27d045 >= 0x0 && _0x27d045 <= 0x1 && _0x4d3cef < _0x43ecab)
                    _0x43ecab = _0x4d3cef;
            }
            _0x21e18b = _0x4a56f6 * _0x5e766d;
            if (Math['abs'](_0x21e18b) >= 1e-10) {
                _0x4d3cef = (_0x52bcdd - _0x2557e7) * _0x5e766d / _0x21e18b;
                _0x27d045 = ((_0x52bcdd - _0x2557e7) * _0x31a786 - (_0x3a2217 - _0x8e7e79) * _0x4a56f6) / _0x21e18b;
                if (_0x4d3cef > 0.001 && _0x27d045 >= 0x0 && _0x27d045 <= 0x1 && _0x4d3cef < _0x43ecab)
                    _0x43ecab = _0x4d3cef;
            }
            _0x21e18b = _0x31a786 * _0x5e766d;
            if (Math['abs'](_0x21e18b) >= 1e-10) {
                _0x4d3cef = (_0xe1ac1a - _0x8e7e79) * _0x5e766d / _0x21e18b;
                _0x27d045 = ((_0x52bcdd - _0x2557e7) * _0x31a786 - (_0xe1ac1a - _0x8e7e79) * _0x4a56f6) / _0x21e18b;
                if (_0x4d3cef > 0.001 && _0x27d045 >= 0x0 && _0x27d045 <= 0x1 && _0x4d3cef < _0x43ecab)
                    _0x43ecab = _0x4d3cef;
            }
            _0x21e18b = -_0x4a56f6 * _0x5e766d;
            if (Math['abs'](_0x21e18b) >= 1e-10) {
                _0x4d3cef = -(_0x18b609 - _0x2557e7) * _0x5e766d / _0x21e18b;
                _0x27d045 = ((_0x18b609 - _0x2557e7) * _0x31a786 - (_0xe1ac1a - _0x8e7e79) * _0x4a56f6) / _0x21e18b;
                if (_0x4d3cef > 0.001 && _0x27d045 >= 0x0 && _0x27d045 <= 0x1 && _0x4d3cef < _0x43ecab)
                    _0x43ecab = _0x4d3cef;
            }
        }
        const _0x445a29 = _0x43ecab < _0x12dc9a ? _0x43ecab + 0x8 : _0x43ecab;
        return {
            'x': _0x2557e7 + _0x4a56f6 * _0x445a29,
            'y': _0x8e7e79 + _0x31a786 * _0x445a29
        };
    };
    const _0x2fcff1 = [];
    for (let _0x57b178 = 0x0; _0x57b178 < _0x13dbad['length']; _0x57b178++) {
        const _0x1dddac = _0x580c9c(_0x13dbad[_0x57b178]);
        _0x2fcff1['push'](_0x1dddac['x'], _0x1dddac['y']);
    }
    _0x1da189['polygon'] = _0x2fcff1['length'] >= 0x6 ? new Float32Array(_0x2fcff1) : null;
}
function _0x360cf4(_0x6a42db, _0x398a0b, _0x520cf0) {
    if (_0x5f2e43['isDead'])
        return;
    if (!_0x17a2a2)
        return;
    const {
        floorTiles: _0x12c0fa,
        wallTiles: _0x57efa6
    } = _0x17a2a2;
    if (_0x12c0fa['length'] === 0x0)
        return;
    const _0x19be29 = _0x4878b0['SHADOW'];
    const _0x42a28e = _0x4878b0['MAP']['tileSize'];
    const _0x279f9b = _0x4878b0['CAMERA']['width'];
    const _0x56798a = _0x4878b0['CAMERA']['height'];
    if (!_0x4878b0['SHADOW']['_buf'] || _0x4878b0['SHADOW']['_buf']['width'] !== _0x279f9b || _0x4878b0['SHADOW']['_buf']['height'] !== _0x56798a) {
        _0x4878b0['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x4878b0['SHADOW']['_buf']['width'] = _0x279f9b;
        _0x4878b0['SHADOW']['_buf']['height'] = _0x56798a;
    }
    const _0x550f97 = _0x4878b0['SHADOW']['_buf'];
    const _0x17fa87 = _0x550f97['getContext']('2d');
    _0x17fa87['clearRect'](0x0, 0x0, _0x279f9b, _0x56798a);
    _0x17fa87['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x17fa87['beginPath']();
    for (const {
                c: _0x461b76,
                r: _0x3e3b43
            } of _0x12c0fa) {
        const _0x3eb9f6 = Math['floor'](_0x461b76 * _0x42a28e - _0x398a0b), _0x3d59db = Math['floor'](_0x3e3b43 * _0x42a28e - _0x520cf0);
        if (_0x3eb9f6 > _0x279f9b || _0x3d59db > _0x56798a || _0x3eb9f6 + _0x42a28e < 0x0 || _0x3d59db + _0x42a28e < 0x0)
            continue;
        _0x17fa87['rect'](_0x3eb9f6 - 0x1, _0x3d59db - 0x1, _0x42a28e + 0x2, _0x42a28e + 0x2);
    }
    _0x17fa87['fill']();
    if (_0x57efa6['length'] > 0x0) {
        _0x17fa87['globalCompositeOperation'] = 'destination-out';
        _0x17fa87['fillStyle'] = 'rgba(0,0,0,1)';
        _0x17fa87['beginPath']();
        for (const {
                    c: _0x56b9cd,
                    r: _0x177f75
                } of _0x57efa6) {
            const _0x1982be = Math['floor'](_0x56b9cd * _0x42a28e - _0x398a0b), _0xf360b2 = Math['floor'](_0x177f75 * _0x42a28e - _0x520cf0);
            if (_0x1982be > _0x279f9b || _0xf360b2 > _0x56798a || _0x1982be + _0x42a28e < 0x0 || _0xf360b2 + _0x42a28e < 0x0)
                continue;
            _0x17fa87['rect'](_0x1982be - 0x1, _0xf360b2 - 0x1, _0x42a28e + 0x2, _0x42a28e + 0x2);
        }
        _0x17fa87['fill']();
        _0x17fa87['globalCompositeOperation'] = 'source-over';
    }
    if (_0x19be29['polygon'] && _0x19be29['polygon']['length'] >= 0x6) {
        _0x17fa87['globalCompositeOperation'] = 'destination-out';
        _0x17fa87['beginPath']();
        const _0x2e4682 = _0x19be29['polygon'];
        _0x17fa87['moveTo'](_0x2e4682[0x0] - _0x398a0b, _0x2e4682[0x1] - _0x520cf0);
        for (let _0x12ca7f = 0x2; _0x12ca7f < _0x2e4682['length']; _0x12ca7f += 0x2) {
            _0x17fa87['lineTo'](_0x2e4682[_0x12ca7f] - _0x398a0b, _0x2e4682[_0x12ca7f + 0x1] - _0x520cf0);
        }
        _0x17fa87['closePath']();
        _0x17fa87['fill']();
        _0x17fa87['globalCompositeOperation'] = 'source-over';
    }
    _0x6a42db['drawImage'](_0x550f97, 0x0, 0x0);
}
function _0x4cdcca(_0x42bfcf) {
    let _0x22a618 = 0x0, _0x24d859 = 0x0;
    const _0xa6d2cf = _0x4878b0['INPUTS']['mouseX'] / _0x4878b0['SYSTEM']['viewScale'];
    const _0x544382 = _0x4878b0['INPUTS']['mouseY'] / _0x4878b0['SYSTEM']['viewScale'];
    const _0x520fa8 = _0x5f2e43['x'] - _0x4878b0['CAMERA']['x'] + _0x5f2e43['width'] / 0x2;
    const _0x61f6fd = _0x5f2e43['y'] - _0x4878b0['CAMERA']['y'] + _0x5f2e43['height'] / 0x2;
    const _0x5d22ba = Math['atan2'](_0x544382 - _0x61f6fd, _0xa6d2cf - _0x520fa8);
    if (_0x577aeb !== 0x0 || _0x2063e6 !== 0x0) {
        _0x22a618 = _0x577aeb;
        _0x24d859 = _0x2063e6;
    } else if (_0x31e9ce) {
        let _0x4cbb95 = 0x0, _0x384fd5 = 0x0;
        if (_0x4878b0['INPUTS']['keys']['w'] || _0x4878b0['INPUTS']['keys']['arrowup'])
            _0x4cbb95 += 0x1;
        if (_0x4878b0['INPUTS']['keys']['s'] || _0x4878b0['INPUTS']['keys']['arrowdown'])
            _0x4cbb95 -= 0x1;
        if (_0x4878b0['INPUTS']['keys']['d'] || _0x4878b0['INPUTS']['keys']['arrowright'])
            _0x384fd5 += 0x1;
        if (_0x4878b0['INPUTS']['keys']['a'] || _0x4878b0['INPUTS']['keys']['arrowleft'])
            _0x384fd5 -= 0x1;
        if (_0x4cbb95 !== 0x0 || _0x384fd5 !== 0x0) {
            const _0x1964ed = _0x5d22ba + Math['atan2'](_0x384fd5, _0x4cbb95);
            _0x22a618 = Math['cos'](_0x1964ed);
            _0x24d859 = Math['sin'](_0x1964ed);
        }
    } else {
        if (_0x4878b0['INPUTS']['keys']['w'] || _0x4878b0['INPUTS']['keys']['arrowup'])
            _0x24d859 -= 0x1;
        if (_0x4878b0['INPUTS']['keys']['s'] || _0x4878b0['INPUTS']['keys']['arrowdown'])
            _0x24d859 += 0x1;
        if (_0x4878b0['INPUTS']['keys']['a'] || _0x4878b0['INPUTS']['keys']['arrowleft'])
            _0x22a618 -= 0x1;
        if (_0x4878b0['INPUTS']['keys']['d'] || _0x4878b0['INPUTS']['keys']['arrowright'])
            _0x22a618 += 0x1;
        const _0x8abe28 = _0x22a618 !== 0x0 || _0x24d859 !== 0x0;
        if (_0x8abe28) {
            const _0x3f0b48 = Math['sqrt'](_0x22a618 * _0x22a618 + _0x24d859 * _0x24d859);
            _0x22a618 /= _0x3f0b48;
            _0x24d859 /= _0x3f0b48;
        }
    }
    if (_0x4878b0['GAME_STATE'] === 'NIGHT' && _0x4caf82 === 'Skinwalker') {
        if (_0x4878b0['NIGHT_ABILITY_OPEN'] || !_0x4878b0['CURRENT_TARGET']) {
            _0x22a618 = 0x0;
            _0x24d859 = 0x0;
            _0x5f2e43['vx'] = 0x0;
            _0x5f2e43['vy'] = 0x0;
            _0x5f2e43['x'] = _0x4878b0['MAP']['columns'] * _0x4878b0['MAP']['tileSize'] / 0x2 - _0x5f2e43['width'] / 0x2;
            _0x5f2e43['y'] = _0x4878b0['MAP']['rows'] * _0x4878b0['MAP']['tileSize'] / 0x2 - _0x5f2e43['height'] / 0x2;
        }
    }
    const _0x3a7587 = _0x22a618 !== 0x0 || _0x24d859 !== 0x0;
    const _0x28d021 = (_0x4878b0['INPUTS']['keys']['shift'] || _0x3760a9 || _0x4d79db) && _0x3a7587;
    _0x5f2e43['bopTimer'] = _0x28d021 ? _0x5f2e43['bopTimer'] + _0x42bfcf : 0x0;
    _0x5f2e43['scale'] = 0x1 + (_0x5f2e43['bopTimer'] > 0x0 ? Math['sin'](_0x5f2e43['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x2fd52a = Math['pow'](0.001, _0x42bfcf);
    const _0x3d7bb8 = _0x28d021 ? 0x74a : 0x5d5;
    _0x5f2e43['vx'] += _0x22a618 * _0x3d7bb8 * _0x42bfcf;
    _0x5f2e43['vy'] += _0x24d859 * _0x3d7bb8 * _0x42bfcf;
    _0x5f2e43['vx'] *= _0x2fd52a;
    _0x5f2e43['vy'] *= _0x2fd52a;
    _0x5f2e43['x'] += _0x5f2e43['vx'] * _0x42bfcf;
    _0x5f2e43['y'] += _0x5f2e43['vy'] * _0x42bfcf;
    for (let _0x54d53f = 0x0; _0x54d53f < 0x3; _0x54d53f++)
        _0x278af0();
    for (let _0x1eb56a = 0x0; _0x1eb56a < 0x2; _0x1eb56a++)
        _0x4c0c6d();
    for (let _0x3b4c06 = 0x0; _0x3b4c06 < 0x2; _0x3b4c06++)
        _0x2addaa();
    if (_0x5f2e43['x'] < 0x0)
        _0x5f2e43['x'] = 0x0;
    if (_0x5f2e43['y'] < 0x0)
        _0x5f2e43['y'] = 0x0;
    if (_0x5f2e43['x'] + _0x5f2e43['width'] > _0x4878b0['MAP']['columns'] * _0x4878b0['MAP']['tileSize'])
        _0x5f2e43['x'] = _0x4878b0['MAP']['columns'] * _0x4878b0['MAP']['tileSize'] - _0x5f2e43['width'];
    if (_0x5f2e43['y'] + _0x5f2e43['height'] > _0x4878b0['MAP']['rows'] * _0x4878b0['MAP']['tileSize'])
        _0x5f2e43['y'] = _0x4878b0['MAP']['rows'] * _0x4878b0['MAP']['tileSize'] - _0x5f2e43['height'];
    if (_0x5bcbf1) {
        _0x5f2e43['angle'] = _0x326b3b + Math['PI'] / 0x2;
    } else if (_0x577aeb !== 0x0 || _0x2063e6 !== 0x0) {
        _0x5f2e43['angle'] = Math['atan2'](_0x2063e6, _0x577aeb) + Math['PI'] / 0x2;
    } else if (!_0x227b38) {
        _0x5f2e43['angle'] = _0x5d22ba + Math['PI'] / 0x2;
    }
    const _0x28598b = _0x5f2e43['x'] + _0x5f2e43['width'] / 0x2 - _0x4878b0['CAMERA']['width'] / 0x2;
    const _0x49cd93 = _0x5f2e43['y'] + _0x5f2e43['height'] / 0x2 - _0x4878b0['CAMERA']['height'] / 0x2;
    if (_0x4878b0['CAMERA']['x'] === null || isNaN(_0x4878b0['CAMERA']['x']) || !isFinite(_0x4878b0['CAMERA']['x'])) {
        _0x4878b0['CAMERA']['x'] = _0x28598b;
        _0x4878b0['CAMERA']['y'] = _0x49cd93;
    } else {
        const _0x290aa6 = 0x1 - Math['exp'](-Math['max'](0x0, _0x42bfcf) * 0x28);
        _0x4878b0['CAMERA']['x'] += (_0x28598b - _0x4878b0['CAMERA']['x']) * _0x290aa6;
        _0x4878b0['CAMERA']['y'] += (_0x49cd93 - _0x4878b0['CAMERA']['y']) * _0x290aa6;
    }
    for (const _0xa34787 in _0x93ea24) {
        const _0x1b780a = _0x93ea24[_0xa34787];
        if (_0x1b780a['renderX'] === undefined) {
            _0x1b780a['renderX'] = _0x1b780a['x'];
            _0x1b780a['renderY'] = _0x1b780a['y'];
            _0x1b780a['renderAngle'] = _0x1b780a['angle'] || 0x0;
        }
        const _0x44f210 = 0.25;
        const _0x1d5dcb = _0x1b780a['x'] - _0x1b780a['renderX'], _0x50eb5a = _0x1b780a['y'] - _0x1b780a['renderY'];
        const _0x1a7cc8 = Math['sqrt'](_0x1d5dcb * _0x1d5dcb + _0x50eb5a * _0x50eb5a);
        const _0x5b92a7 = 0xb4;
        if (_0x1a7cc8 > _0x5b92a7) {
            _0x1b780a['renderX'] = _0x1b780a['x'] - _0x1d5dcb / _0x1a7cc8 * _0x5b92a7;
            _0x1b780a['renderY'] = _0x1b780a['y'] - _0x50eb5a / _0x1a7cc8 * _0x5b92a7;
        }
        _0x1b780a['renderX'] += (_0x1b780a['x'] - _0x1b780a['renderX']) * _0x44f210;
        _0x1b780a['renderY'] += (_0x1b780a['y'] - _0x1b780a['renderY']) * _0x44f210;
        let _0x5bbe4d = (_0x1b780a['angle'] || 0x0) - _0x1b780a['renderAngle'];
        while (_0x5bbe4d < -Math['PI'])
            _0x5bbe4d += Math['PI'] * 0x2;
        while (_0x5bbe4d > Math['PI'])
            _0x5bbe4d -= Math['PI'] * 0x2;
        _0x1b780a['renderAngle'] += _0x5bbe4d * 0.3;
    }
    if (_0x4878b0['GAME_STATE'] === 'NIGHT') {
        _0x420b16 = Math['min'](0.6, _0x420b16 + _0x42bfcf * 0.5);
    } else {
        _0x420b16 = Math['max'](0x0, _0x420b16 - _0x42bfcf * 0.5);
    }
    _0x5a8d41();
    _0x108e44();
}
function _0x1e93c6(_0x51e629, _0x3111ab, _0x4fa77f, _0x51f232, _0x34597a = !![]) {
    _0x51e629['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x8d7b60 = _0x51e629['measureText'](_0x3111ab)['width'];
    const _0x1e3d4b = _0x8d7b60 + 0x18;
    const _0x18afc9 = 0x1c;
    _0x51e629['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x51e629['beginPath']();
    if (_0x51e629['roundRect']) {
        _0x51e629['roundRect'](_0x4fa77f - _0x1e3d4b / 0x2, _0x51f232 - _0x18afc9, _0x1e3d4b, _0x18afc9, 0x6);
    } else {
        _0x51e629['rect'](_0x4fa77f - _0x1e3d4b / 0x2, _0x51f232 - _0x18afc9, _0x1e3d4b, _0x18afc9);
    }
    _0x51e629['fill']();
    if (_0x34597a) {
        _0x51e629['beginPath']();
        _0x51e629['moveTo'](_0x4fa77f - 0x6, _0x51f232);
        _0x51e629['lineTo'](_0x4fa77f + 0x6, _0x51f232);
        _0x51e629['lineTo'](_0x4fa77f, _0x51f232 + 0x6);
        _0x51e629['fill']();
    }
    _0x51e629['fillStyle'] = '#ffffff';
    _0x51e629['textAlign'] = 'center';
    _0x51e629['textBaseline'] = 'middle';
    _0x51e629['fillText'](_0x3111ab, _0x4fa77f, _0x51f232 - _0x18afc9 / 0x2 + 0x1);
}
function _0x32d8e0(_0x25ff72, _0x3e39f8, _0x12623f, _0x1a272d) {
    if (!_0x3e39f8 || _0x3e39f8['length'] === 0x0)
        return;
    let _0x50f201 = _0x1a272d;
    for (let _0x126eec = 0x0; _0x126eec < _0x3e39f8['length']; _0x126eec++) {
        _0x1e93c6(_0x25ff72, _0x3e39f8[_0x126eec]['text'], _0x12623f, _0x50f201, _0x126eec === 0x0);
        _0x50f201 -= 0x24;
    }
}
function _0x1546aa() {
    if (!_0x4878b0['SYSTEM']['isReady'])
        return;
    _0x275e4b['fillStyle'] = '#000000';
    _0x275e4b['fillRect'](0x0, 0x0, _0x382898['width'], _0x382898['height']);
    _0x275e4b['save']();
    try {
        _0x275e4b['scale'](_0x4878b0['SYSTEM']['viewScale'], _0x4878b0['SYSTEM']['viewScale']);
        _0x275e4b['imageSmoothingEnabled'] = ![];
        const _0x4d905c = Math['floor'](_0x4878b0['CAMERA']['x'] || 0x0);
        const _0x164a70 = Math['floor'](_0x4878b0['CAMERA']['y'] || 0x0);
        const _0x290679 = Math['max'](0x0, Math['floor'](_0x4d905c / _0x4878b0['MAP']['chunkSize']));
        const _0x469138 = Math['min'](_0x4878b0['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x4d905c + _0x4878b0['CAMERA']['width']) / _0x4878b0['MAP']['chunkSize']));
        const _0x2a24e4 = Math['max'](0x0, Math['floor'](_0x164a70 / _0x4878b0['MAP']['chunkSize']));
        const _0x1a9947 = Math['min'](_0x4878b0['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x164a70 + _0x4878b0['CAMERA']['height']) / _0x4878b0['MAP']['chunkSize']));
        for (let _0x485f75 = _0x2a24e4; _0x485f75 <= _0x1a9947; _0x485f75++)
            for (let _0x50d1ef = _0x290679; _0x50d1ef <= _0x469138; _0x50d1ef++) {
                const _0xb64859 = _0x50d1ef * _0x4878b0['MAP']['chunkSize'] - _0x4d905c;
                const _0x3c914f = _0x485f75 * _0x4878b0['MAP']['chunkSize'] - _0x164a70;
                _0x275e4b['drawImage'](_0x4878b0['MAP']['bgChunks'][_0x485f75][_0x50d1ef], _0xb64859, _0x3c914f, _0x4878b0['MAP']['chunkSize'] + 0x1, _0x4878b0['MAP']['chunkSize'] + 0x1);
            }
        if (_0x166c56['complete'] && _0x166c56['naturalWidth'] > 0x0) {
            const _0x18bfc8 = _0x4878b0['MAP']['tileSize'];
            const _0x2d0336 = _0x18bfc8 * 0xa;
            const _0x46b1fe = _0x4878b0['MAP']['columns'] / 0x2 * _0x18bfc8 - _0x2d0336 / 0x2 - _0x4d905c;
            const _0x126047 = _0x4878b0['MAP']['rows'] / 0x2 * _0x18bfc8 - _0x2d0336 / 0x2 - _0x164a70;
            _0x275e4b['imageSmoothingEnabled'] = ![];
            _0x275e4b['drawImage'](_0x166c56, _0x46b1fe, _0x126047, _0x2d0336, _0x2d0336);
        }
        if (_0x59c38e['complete'] && _0x59c38e['naturalWidth'] > 0x0) {
            _0x4878b0['ENTITIES']['forEach'](_0x82c3f2 => {
                if (_0x82c3f2['type'] !== 'table')
                    return;
                _0x275e4b['save']();
                _0x275e4b['imageSmoothingEnabled'] = ![];
                const _0x3c609c = _0x59c38e['naturalWidth'] >= _0x59c38e['naturalHeight'];
                const _0x32ba03 = _0x82c3f2['w'] >= _0x82c3f2['h'];
                if (_0x3c609c === _0x32ba03) {
                    _0x275e4b['drawImage'](_0x59c38e, _0x82c3f2['x'] - _0x4d905c, _0x82c3f2['y'] - _0x164a70, _0x82c3f2['w'], _0x82c3f2['h']);
                } else {
                    _0x275e4b['translate'](_0x82c3f2['x'] - _0x4d905c + _0x82c3f2['w'] / 0x2, _0x82c3f2['y'] - _0x164a70 + _0x82c3f2['h'] / 0x2);
                    _0x275e4b['rotate'](Math['PI'] / 0x2);
                    _0x275e4b['drawImage'](_0x59c38e, -_0x82c3f2['h'] / 0x2, -_0x82c3f2['w'] / 0x2, _0x82c3f2['h'], _0x82c3f2['w']);
                }
                _0x275e4b['restore']();
            });
        } else {
            _0x4878b0['ENTITIES']['forEach'](_0x54e20c => {
                if (_0x54e20c['type'] !== 'table')
                    return;
                _0x275e4b['save']();
                _0x275e4b['fillStyle'] = '#6b4423';
                _0x275e4b['fillRect'](_0x54e20c['x'] - _0x4d905c, _0x54e20c['y'] - _0x164a70, _0x54e20c['w'], _0x54e20c['h']);
                _0x275e4b['strokeStyle'] = '#422810';
                _0x275e4b['lineWidth'] = 0x3;
                _0x275e4b['strokeRect'](_0x54e20c['x'] - _0x4d905c + 0x1, _0x54e20c['y'] - _0x164a70 + 0x1, _0x54e20c['w'] - 0x2, _0x54e20c['h'] - 0x2);
                _0x275e4b['fillStyle'] = '#82532a';
                _0x275e4b['fillRect'](_0x54e20c['x'] - _0x4d905c + 0x4, _0x54e20c['y'] - _0x164a70 + 0x4, _0x54e20c['w'] - 0x8, _0x54e20c['h'] - 0x8);
                _0x275e4b['restore']();
            });
        }
        if (_0x474b8b) {
            for (let _0x348809 = _0x2a24e4; _0x348809 <= _0x1a9947; _0x348809++) {
                for (let _0x200acb = _0x290679; _0x200acb <= _0x469138; _0x200acb++) {
                    const _0x3eea8b = _0x200acb * _0x4878b0['MAP']['chunkSize'] - _0x4d905c;
                    const _0x4818ff = _0x348809 * _0x4878b0['MAP']['chunkSize'] - _0x164a70;
                    _0x275e4b['drawImage'](_0x4878b0['MAP']['fgChunks'][_0x348809][_0x200acb], _0x3eea8b, _0x4818ff, _0x4878b0['MAP']['chunkSize'] + 0x1, _0x4878b0['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0xc58523 = _0x4878b0['GAME_STATE'] === 'NIGHT' && _0x4caf82 === 'Skinwalker' && !_0x5f2e43['isDead'];
        const _0x2b18ca = _0x5f2e43['x'] - _0x4d905c + _0x5f2e43['width'] / 0x2;
        const _0x2f16f3 = _0x5f2e43['y'] - _0x164a70 + _0x5f2e43['height'] / 0x2;
        const _0x4f1009 = _0x5f2e43['width'] * _0x5f2e43['scale'] * 1.3;
        const _0x2bdf19 = _0x5f2e43['height'] * _0x5f2e43['scale'] * 1.3;
        for (const _0x2d7160 in _0x93ea24) {
            const _0xc3a58b = _0x93ea24[_0x2d7160];
            if (_0xc3a58b['isDead'])
                continue;
            const _0x5eab56 = (_0xc3a58b['renderX'] ?? _0xc3a58b['x']) - _0x4d905c + _0xc3a58b['width'] / 0x2;
            const _0xcb59ff = (_0xc3a58b['renderY'] ?? _0xc3a58b['y']) - _0x164a70 + _0xc3a58b['height'] / 0x2;
            const _0x324764 = Math['min'](0x2, Math['max'](0.3, _0xc3a58b['scale'] || 0x1));
            const _0x59f2a7 = _0xc3a58b['width'] * _0x324764 * 1.3;
            const _0x38d06b = _0xc3a58b['height'] * _0x324764 * 1.3;
            _0x275e4b['save']();
            try {
                _0x275e4b['translate'](_0x5eab56, _0xcb59ff);
                _0x275e4b['rotate'](_0xc3a58b['renderAngle'] ?? 0x0);
                if (_0xc3a58b['isDark'])
                    _0x275e4b['filter'] = 'brightness(0)';
                _0x5691e2(_0x275e4b, _0xc3a58b['body'], _0xc3a58b['eyes'], _0x59f2a7, _0x38d06b);
                if (_0x4f06a2['has'](parseInt(_0x2d7160)) && _0x4305a8['complete'] && _0x4305a8['naturalWidth'] > 0x0) {
                    _0x275e4b['drawImage'](_0x4305a8, -_0x59f2a7 / 0x2, -_0x38d06b / 0x2, _0x59f2a7, _0x38d06b);
                }
                if (_0xc3a58b['isDark'])
                    _0x275e4b['filter'] = 'none';
            } finally {
                _0x275e4b['restore']();
            }
            if (!_0x4da53c((_0xc3a58b['renderX'] ?? _0xc3a58b['x']) + _0xc3a58b['width'] / 0x2, (_0xc3a58b['renderY'] ?? _0xc3a58b['y']) + _0xc3a58b['height'] / 0x2)) {
                _0x275e4b['textAlign'] = 'center';
                _0x275e4b['lineJoin'] = 'round';
                _0x275e4b['lineWidth'] = 0x3;
                _0x275e4b['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x275e4b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x275e4b['fillStyle'] = _0x4f06a2['has'](parseInt(_0x2d7160)) ? '#cc88ff' : '#ffffff';
                const _0x262954 = _0xc3a58b['isDark'] ? '???' : _0xc3a58b['name'] + (_0xc3a58b['isOwner'] ? '\x20[🗝️]' : '');
                _0x275e4b['strokeText'](_0x262954, _0x5eab56, _0xcb59ff - _0x38d06b / 0x2 - 0x10);
                _0x275e4b['fillText'](_0x262954, _0x5eab56, _0xcb59ff - _0x38d06b / 0x2 - 0x10);
            }
        }
        if (!_0x5f2e43['isDead']) {
            _0x275e4b['save']();
            try {
                _0x275e4b['translate'](_0x2b18ca, _0x2f16f3);
                _0x275e4b['rotate'](_0x5f2e43['angle']);
                if (_0xc58523)
                    _0x275e4b['filter'] = 'brightness(0)';
                _0x5691e2(_0x275e4b, _0x3f93dd, _0x493c35, _0x4f1009, _0x2bdf19);
                if (_0x4f06a2['has'](_0xc7ab21) && _0x4305a8['complete'] && _0x4305a8['naturalWidth'] > 0x0) {
                    _0x275e4b['drawImage'](_0x4305a8, -_0x4f1009 / 0x2, -_0x2bdf19 / 0x2, _0x4f1009, _0x2bdf19);
                }
                if (_0xc58523)
                    _0x275e4b['filter'] = 'none';
            } finally {
                _0x275e4b['restore']();
            }
            if (!_0x4da53c(_0x5f2e43['x'] + _0x5f2e43['width'] / 0x2, _0x5f2e43['y'] + _0x5f2e43['height'] / 0x2)) {
                _0x275e4b['textAlign'] = 'center';
                _0x275e4b['lineJoin'] = 'round';
                _0x275e4b['lineWidth'] = 0x3;
                _0x275e4b['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x275e4b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x275e4b['fillStyle'] = _0x4f06a2['has'](_0xc7ab21) ? '#cc88ff' : '#ffffff';
                const _0x5f3da5 = _0xc58523 ? '???' : _0x19ed4f + (_0x33a3ae ? '\x20[🗝️]' : '');
                _0x275e4b['strokeText'](_0x5f3da5, _0x2b18ca, _0x2f16f3 - _0x2bdf19 / 0x2 - 0x10);
                _0x275e4b['fillText'](_0x5f3da5, _0x2b18ca, _0x2f16f3 - _0x2bdf19 / 0x2 - 0x10);
            }
        }
        for (const _0x3dd2ee of _0x4878b0['ENTITIES']) {
            if (_0x3dd2ee['type'] !== 'npc')
                continue;
            const _0x4439ad = _0x3dd2ee['x'] - _0x4d905c + _0x3dd2ee['w'] / 0x2;
            const _0x2100e1 = _0x3dd2ee['y'] - _0x164a70 + _0x3dd2ee['h'] / 0x2;
            const _0x13bc5a = _0x3dd2ee['w'] * 1.3;
            const _0x1e654d = _0x3dd2ee['h'] * 1.3;
            _0x275e4b['save']();
            _0x275e4b['translate'](_0x4439ad, _0x2100e1);
            _0x275e4b['rotate'](_0x3dd2ee['angle'] !== undefined ? _0x3dd2ee['angle'] : 0x0);
            _0x5691e2(_0x275e4b, _0x3dd2ee['body'] || 'body01.png', _0x3dd2ee['eyes'] || 'eyes4.png', _0x13bc5a, _0x1e654d);
            _0x275e4b['restore']();
            _0x275e4b['textAlign'] = 'center';
            _0x275e4b['lineJoin'] = 'round';
            _0x275e4b['lineWidth'] = 0x3;
            _0x275e4b['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x275e4b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x275e4b['fillStyle'] = '#aaaaaa';
            _0x275e4b['strokeText'](_0x3dd2ee['name'] || 'NPC', _0x4439ad, _0x2100e1 - _0x1e654d / 0x2 - 0x10);
            _0x275e4b['fillText'](_0x3dd2ee['name'] || 'NPC', _0x4439ad, _0x2100e1 - _0x1e654d / 0x2 - 0x10);
        }
        if (_0x4878b0['MAP']['wallChunks'] && _0x4878b0['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x21e9cf = _0x2a24e4; _0x21e9cf <= _0x1a9947; _0x21e9cf++)
                for (let _0x5b7262 = _0x290679; _0x5b7262 <= _0x469138; _0x5b7262++) {
                    if (!_0x4878b0['MAP']['wallChunks'][_0x21e9cf] || !_0x4878b0['MAP']['wallChunks'][_0x21e9cf][_0x5b7262])
                        continue;
                    const _0x39123b = _0x5b7262 * _0x4878b0['MAP']['chunkSize'] - _0x4d905c;
                    const _0x239cae = _0x21e9cf * _0x4878b0['MAP']['chunkSize'] - _0x164a70;
                    _0x275e4b['drawImage'](_0x4878b0['MAP']['wallChunks'][_0x21e9cf][_0x5b7262], _0x39123b, _0x239cae, _0x4878b0['MAP']['chunkSize'] + 0x1, _0x4878b0['MAP']['chunkSize'] + 0x1);
                }
        }
        if (_0x5f2e43['isDead']) {
            for (const _0x3edf8c in _0x93ea24) {
                const _0x27d8b5 = _0x93ea24[_0x3edf8c];
                if (!_0x27d8b5['isDead'])
                    continue;
                const _0x33c99d = (_0x27d8b5['renderX'] ?? _0x27d8b5['x']) - _0x4d905c + _0x27d8b5['width'] / 0x2;
                const _0x459f79 = (_0x27d8b5['renderY'] ?? _0x27d8b5['y']) - _0x164a70 + _0x27d8b5['height'] / 0x2;
                const _0x47b5b9 = _0x27d8b5['width'] * (_0x27d8b5['scale'] || 0x1) * 1.3;
                const _0x408102 = _0x27d8b5['height'] * (_0x27d8b5['scale'] || 0x1) * 1.3;
                _0x275e4b['save']();
                try {
                    _0x275e4b['translate'](_0x33c99d, _0x459f79);
                    _0x275e4b['rotate'](_0x27d8b5['renderAngle'] ?? 0x0);
                    _0x275e4b['globalAlpha'] = 0.3;
                    _0x5691e2(_0x275e4b, _0x27d8b5['body'], _0x27d8b5['eyes'], _0x47b5b9, _0x408102);
                } finally {
                    _0x275e4b['restore']();
                }
                if (!_0x4da53c((_0x27d8b5['renderX'] ?? _0x27d8b5['x']) + _0x27d8b5['width'] / 0x2, (_0x27d8b5['renderY'] ?? _0x27d8b5['y']) + _0x27d8b5['height'] / 0x2)) {
                    _0x275e4b['save']();
                    _0x275e4b['globalAlpha'] = 0.3;
                    _0x275e4b['textAlign'] = 'center';
                    _0x275e4b['lineJoin'] = 'round';
                    _0x275e4b['lineWidth'] = 0x3;
                    _0x275e4b['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x275e4b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x275e4b['fillStyle'] = '#ffffff';
                    const _0x4a40be = _0x27d8b5['name'] + (_0x27d8b5['isOwner'] ? '\x20[🗝️]' : '');
                    _0x275e4b['strokeText'](_0x4a40be, _0x33c99d, _0x459f79 - _0x408102 / 0x2 - 0x10);
                    _0x275e4b['fillText'](_0x4a40be, _0x33c99d, _0x459f79 - _0x408102 / 0x2 - 0x10);
                    _0x275e4b['restore']();
                }
            }
            _0x275e4b['save']();
            try {
                _0x275e4b['translate'](_0x2b18ca, _0x2f16f3);
                _0x275e4b['rotate'](_0x5f2e43['angle']);
                _0x275e4b['globalAlpha'] = 0.3;
                _0x5691e2(_0x275e4b, _0x3f93dd, _0x493c35, _0x4f1009, _0x2bdf19);
            } finally {
                _0x275e4b['restore']();
            }
            if (!_0x4da53c(_0x5f2e43['x'] + _0x5f2e43['width'] / 0x2, _0x5f2e43['y'] + _0x5f2e43['height'] / 0x2)) {
                _0x275e4b['save']();
                _0x275e4b['globalAlpha'] = 0.3;
                _0x275e4b['textAlign'] = 'center';
                _0x275e4b['lineJoin'] = 'round';
                _0x275e4b['lineWidth'] = 0x3;
                _0x275e4b['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x275e4b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x275e4b['fillStyle'] = '#ffffff';
                const _0x906a15 = _0x19ed4f + (_0x33a3ae ? '\x20[🗝️]' : '');
                _0x275e4b['strokeText'](_0x906a15, _0x2b18ca, _0x2f16f3 - _0x2bdf19 / 0x2 - 0x10);
                _0x275e4b['fillText'](_0x906a15, _0x2b18ca, _0x2f16f3 - _0x2bdf19 / 0x2 - 0x10);
                _0x275e4b['restore']();
            }
        }
        for (let _0x3e6fa9 = _0x2a24e4; _0x3e6fa9 <= _0x1a9947; _0x3e6fa9++)
            for (let _0x567c24 = _0x290679; _0x567c24 <= _0x469138; _0x567c24++) {
                const _0x369d04 = _0x567c24 * _0x4878b0['MAP']['chunkSize'] - _0x4d905c;
                const _0x3bf18a = _0x3e6fa9 * _0x4878b0['MAP']['chunkSize'] - _0x164a70;
                _0x275e4b['drawImage'](_0x4878b0['MAP']['fgChunks'][_0x3e6fa9][_0x567c24], _0x369d04, _0x3bf18a, _0x4878b0['MAP']['chunkSize'] + 0x1, _0x4878b0['MAP']['chunkSize'] + 0x1);
            }
        if (_0x4878b0['EDITOR']['enabled'] && _0x4878b0['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x46cb5e = _0x4878b0['INPUTS']['mouseX'] / _0x4878b0['SYSTEM']['viewScale'] + _0x4878b0['CAMERA']['x'];
            const _0x4269ac = _0x4878b0['INPUTS']['mouseY'] / _0x4878b0['SYSTEM']['viewScale'] + _0x4878b0['CAMERA']['y'];
            const _0x109e38 = Math['floor'](_0x46cb5e / _0x4878b0['MAP']['tileSize']);
            const _0x32d071 = Math['floor'](_0x4269ac / _0x4878b0['MAP']['tileSize']);
            if (_0x109e38 >= 0x0 && _0x109e38 < _0x4878b0['MAP']['columns'] && _0x32d071 >= 0x0 && _0x32d071 < _0x4878b0['MAP']['rows']) {
                const _0x2bfab6 = _0x109e38 * _0x4878b0['MAP']['tileSize'] - _0x4d905c;
                const _0x511c6f = _0x32d071 * _0x4878b0['MAP']['tileSize'] - _0x164a70;
                _0x275e4b['save']();
                _0x275e4b['globalAlpha'] = 0.5;
                if (_0x4878b0['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x14283c = _0x4878b0['EDITOR']['selectedTileGid'] - 0x1;
                    _0x275e4b['drawImage'](_0xcee409, _0x14283c % _0x4878b0['MAP']['tilesetCols'] * _0x4878b0['MAP']['tileSize'], Math['floor'](_0x14283c / _0x4878b0['MAP']['tilesetCols']) * _0x4878b0['MAP']['tileSize'], _0x4878b0['MAP']['tileSize'], _0x4878b0['MAP']['tileSize'], _0x2bfab6, _0x511c6f, _0x4878b0['MAP']['tileSize'], _0x4878b0['MAP']['tileSize']);
                } else {
                    _0x275e4b['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x275e4b['fillRect'](_0x2bfab6, _0x511c6f, _0x4878b0['MAP']['tileSize'], _0x4878b0['MAP']['tileSize']);
                }
                _0x275e4b['restore']();
            }
        }
        _0x360cf4(_0x275e4b, _0x4d905c, _0x164a70);
        if (_0x420b16 > 0x0) {
            _0x275e4b['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x420b16 + ')';
            _0x275e4b['fillRect'](0x0, 0x0, _0x4878b0['CAMERA']['width'], _0x4878b0['CAMERA']['height']);
        }
        for (const _0x58166b in _0x93ea24) {
            const _0x5e51d4 = _0x93ea24[_0x58166b];
            if (_0x5e51d4['isDead'] && !_0x5f2e43['isDead'])
                continue;
            const _0x8a6238 = (_0x5e51d4['renderX'] ?? _0x5e51d4['x']) - _0x4d905c + _0x5e51d4['width'] / 0x2;
            const _0xb5c203 = (_0x5e51d4['renderY'] ?? _0x5e51d4['y']) - _0x164a70 + _0x5e51d4['height'] / 0x2;
            _0x32d8e0(_0x275e4b, _0x5e51d4['chats'], _0x8a6238, _0xb5c203 - _0x5e51d4['height'] / 0x2 - 0x20);
        }
        _0x32d8e0(_0x275e4b, _0x5f2e43['chats'], _0x2b18ca, _0x2f16f3 - _0x5f2e43['height'] / 0x2 - 0x20);
    } finally {
        _0x275e4b['restore']();
    }
}
function _0x5e9faf(_0x46eb67) {
    if (!_0x4878b0['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x5e9faf);
    let _0x4d2fa5 = (_0x46eb67 - _0x4878b0['SYSTEM']['lastTime']) / 0x3e8;
    _0x4878b0['SYSTEM']['lastTime'] = _0x46eb67;
    if (_0x4d2fa5 > 0.1)
        _0x4d2fa5 = 0.1;
    if (_0x4d2fa5 < 0x0 || isNaN(_0x4d2fa5))
        _0x4d2fa5 = 0.016;
    if (_0x474b8b) {
        _0x2057cc(_0x4d2fa5);
        _0x1546aa();
        return;
    }
    if (!_0xc7ab21)
        return;
    _0x4cdcca(_0x4d2fa5);
    _0xca34c1['tick'](_0x46eb67);
    _0x1546aa();
}
function _0xfabdd9() {
    const _0x5aa68d = Math['ceil'](_0x4878b0['MAP']['columns'] * _0x4878b0['MAP']['tileSize'] / _0x4878b0['MAP']['chunkSize']);
    const _0xedf303 = Math['ceil'](_0x4878b0['MAP']['rows'] * _0x4878b0['MAP']['tileSize'] / _0x4878b0['MAP']['chunkSize']);
    _0x4878b0['MAP']['bgChunks'] = [];
    _0x4878b0['MAP']['fgChunks'] = [];
    _0x4878b0['MAP']['wallChunks'] = [];
    for (let _0x2b24c7 = 0x0; _0x2b24c7 < _0xedf303; _0x2b24c7++) {
        _0x4878b0['MAP']['bgChunks'][_0x2b24c7] = [];
        _0x4878b0['MAP']['fgChunks'][_0x2b24c7] = [];
        _0x4878b0['MAP']['wallChunks'][_0x2b24c7] = [];
        for (let _0x3a4433 = 0x0; _0x3a4433 < _0x5aa68d; _0x3a4433++) {
            const _0x52cc10 = document['createElement']('canvas');
            _0x52cc10['width'] = _0x52cc10['height'] = _0x4878b0['MAP']['chunkSize'];
            const _0x1a224d = document['createElement']('canvas');
            _0x1a224d['width'] = _0x1a224d['height'] = _0x4878b0['MAP']['chunkSize'];
            const _0x218ae5 = document['createElement']('canvas');
            _0x218ae5['width'] = _0x218ae5['height'] = _0x4878b0['MAP']['chunkSize'];
            _0x4878b0['MAP']['bgChunks'][_0x2b24c7][_0x3a4433] = _0x52cc10;
            _0x4878b0['MAP']['fgChunks'][_0x2b24c7][_0x3a4433] = _0x1a224d;
            _0x4878b0['MAP']['wallChunks'][_0x2b24c7][_0x3a4433] = _0x218ae5;
            _0x211de4(_0x3a4433, _0x2b24c7);
        }
    }
}
function _0x211de4(_0xb1799f, _0xd365f1) {
    const _0x3d8e2a = _0x4878b0['MAP']['bgChunks'][_0xd365f1][_0xb1799f]['getContext']('2d', { 'alpha': !![] });
    const _0x27bdc6 = _0x4878b0['MAP']['fgChunks'][_0xd365f1][_0xb1799f]['getContext']('2d', { 'alpha': !![] });
    const _0x32ff40 = _0x4878b0['MAP']['wallChunks'][_0xd365f1] && _0x4878b0['MAP']['wallChunks'][_0xd365f1][_0xb1799f] ? _0x4878b0['MAP']['wallChunks'][_0xd365f1][_0xb1799f]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x3d8e2a['imageSmoothingEnabled'] = _0x27bdc6['imageSmoothingEnabled'] = ![];
    if (_0x32ff40)
        _0x32ff40['imageSmoothingEnabled'] = ![];
    _0x3d8e2a['clearRect'](0x0, 0x0, _0x4878b0['MAP']['chunkSize'], _0x4878b0['MAP']['chunkSize']);
    _0x27bdc6['clearRect'](0x0, 0x0, _0x4878b0['MAP']['chunkSize'], _0x4878b0['MAP']['chunkSize']);
    if (_0x32ff40)
        _0x32ff40['clearRect'](0x0, 0x0, _0x4878b0['MAP']['chunkSize'], _0x4878b0['MAP']['chunkSize']);
    const _0x20d37e = Math['floor'](_0xb1799f * _0x4878b0['MAP']['chunkSize'] / _0x4878b0['MAP']['tileSize']);
    const _0x156973 = Math['ceil']((_0xb1799f + 0x1) * _0x4878b0['MAP']['chunkSize'] / _0x4878b0['MAP']['tileSize']);
    const _0x5e0f41 = Math['floor'](_0xd365f1 * _0x4878b0['MAP']['chunkSize'] / _0x4878b0['MAP']['tileSize']);
    const _0x174ba9 = Math['ceil']((_0xd365f1 + 0x1) * _0x4878b0['MAP']['chunkSize'] / _0x4878b0['MAP']['tileSize']);
    const _0x3254c5 = 0.5;
    const _0x323056 = _0x4878b0['MAP']['tileSize'] - _0x3254c5 * 0x2;
    _0x4878b0['MAP']['layers']['forEach'](_0xdd01f9 => {
        const _0x4d71d9 = _0xdd01f9['name'] === 'walls';
        const _0x443247 = _0xdd01f9['name'] === 'trees' ? _0x27bdc6 : _0x4d71d9 ? _0x32ff40 || _0x3d8e2a : _0x3d8e2a;
        for (let _0x5b8485 = Math['max'](0x0, _0x5e0f41); _0x5b8485 < Math['min'](_0x4878b0['MAP']['rows'], _0x174ba9); _0x5b8485++) {
            for (let _0x5ada19 = Math['max'](0x0, _0x20d37e); _0x5ada19 < Math['min'](_0x4878b0['MAP']['columns'], _0x156973); _0x5ada19++) {
                let _0x2ac59f = _0xdd01f9['data'][_0x5b8485 * _0x4878b0['MAP']['columns'] + _0x5ada19];
                if (_0xdd01f9['name'] === 'floor2' && _0x4878b0['MAP']['doors'] && _0x4878b0['MAP']['doors'][_0x5b8485 * _0x4878b0['MAP']['columns'] + _0x5ada19]) {
                    _0x2ac59f = 0x2;
                }
                if (_0x2ac59f > 0x0) {
                    const _0xdbd6c1 = _0x2ac59f - 0x1;
                    const _0x266878 = _0xdbd6c1 % _0x4878b0['MAP']['tilesetCols'] * _0x4878b0['MAP']['tileSize'] + _0x3254c5;
                    const _0x79c8a3 = Math['floor'](_0xdbd6c1 / _0x4878b0['MAP']['tilesetCols']) * _0x4878b0['MAP']['tileSize'] + _0x3254c5;
                    const _0x21584f = _0x5ada19 * _0x4878b0['MAP']['tileSize'] - _0xb1799f * _0x4878b0['MAP']['chunkSize'];
                    const _0x58e50b = _0x5b8485 * _0x4878b0['MAP']['tileSize'] - _0xd365f1 * _0x4878b0['MAP']['chunkSize'];
                    if (_0x2ac59f === 0x4) {
                        const _0x513abd = 0x1;
                        const _0x372bc5 = _0x513abd % _0x4878b0['MAP']['tilesetCols'] * _0x4878b0['MAP']['tileSize'] + _0x3254c5;
                        const _0x297c5e = Math['floor'](_0x513abd / _0x4878b0['MAP']['tilesetCols']) * _0x4878b0['MAP']['tileSize'] + _0x3254c5;
                        _0x3d8e2a['drawImage'](_0xcee409, _0x372bc5, _0x297c5e, _0x323056, _0x323056, _0x21584f, _0x58e50b, _0x4878b0['MAP']['tileSize'], _0x4878b0['MAP']['tileSize']);
                        let _0x35587b = _0x4878b0['MAP']['doors'] ? _0x4878b0['MAP']['doors'][_0x5b8485 * _0x4878b0['MAP']['columns'] + _0x5ada19] : null;
                        if (!_0x35587b) {
                            const _0x121b99 = _0x4878b0['MAP']['layers']['find'](_0x1b19da => _0x1b19da['name'] === 'walls');
                            const _0xb59021 = _0x5b8485 > 0x0 && _0x121b99 && _0x121b99['data'][(_0x5b8485 - 0x1) * _0x4878b0['MAP']['columns'] + _0x5ada19] > 0x0;
                            const _0x391714 = _0x5b8485 < _0x4878b0['MAP']['rows'] - 0x1 && _0x121b99 && _0x121b99['data'][(_0x5b8485 + 0x1) * _0x4878b0['MAP']['columns'] + _0x5ada19] > 0x0;
                            const _0x6254b4 = _0x5ada19 > 0x0 && _0x121b99 && _0x121b99['data'][_0x5b8485 * _0x4878b0['MAP']['columns'] + _0x5ada19 - 0x1] > 0x0;
                            const _0x1f6e18 = _0x5ada19 < _0x4878b0['MAP']['columns'] - 0x1 && _0x121b99 && _0x121b99['data'][_0x5b8485 * _0x4878b0['MAP']['columns'] + _0x5ada19 + 0x1] > 0x0;
                            if (_0x6254b4 && _0x1f6e18)
                                _0x35587b = _0x5b8485 < _0x4878b0['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0xb59021 && _0x391714)
                                _0x35587b = _0x5ada19 < _0x4878b0['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x51fc5a = 0x0;
                        if (_0x35587b === 'bottom')
                            _0x51fc5a = Math['PI'] / 0x2;
                        else if (_0x35587b === 'left')
                            _0x51fc5a = Math['PI'];
                        else if (_0x35587b === 'top')
                            _0x51fc5a = -Math['PI'] / 0x2;
                        else if (_0x35587b === 'right')
                            _0x51fc5a = 0x0;
                        if (_0x51fc5a !== 0x0) {
                            _0x443247['save']();
                            _0x443247['translate'](_0x21584f + _0x4878b0['MAP']['tileSize'] / 0x2, _0x58e50b + _0x4878b0['MAP']['tileSize'] / 0x2);
                            _0x443247['rotate'](_0x51fc5a);
                            _0x443247['drawImage'](_0xcee409, _0x266878, _0x79c8a3, _0x323056, _0x323056, -_0x4878b0['MAP']['tileSize'] / 0x2, -_0x4878b0['MAP']['tileSize'] / 0x2, _0x4878b0['MAP']['tileSize'], _0x4878b0['MAP']['tileSize']);
                            _0x443247['restore']();
                        } else {
                            _0x443247['drawImage'](_0xcee409, _0x266878, _0x79c8a3, _0x323056, _0x323056, _0x21584f, _0x58e50b, _0x4878b0['MAP']['tileSize'], _0x4878b0['MAP']['tileSize']);
                        }
                    } else {
                        _0x443247['drawImage'](_0xcee409, _0x266878, _0x79c8a3, _0x323056, _0x323056, _0x21584f, _0x58e50b, _0x4878b0['MAP']['tileSize'], _0x4878b0['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x37bdbe() {
    _0xcee409['crossOrigin'] = 'Anonymous';
    _0xcee409['onload'] = () => {
        _0x4878b0['MAP']['tilesetCols'] = 0x3;
        _0x1cbd93();
    };
    _0xcee409['onerror'] = () => {
        _0x4878b0['MAP']['tilesetCols'] = 0x1;
        _0x1cbd93();
    };
    _0xcee409['src'] = 'assets/tilesheet.png';
    _0x166c56['crossOrigin'] = 'Anonymous';
    _0x166c56['onload'] = _0x1cbd93;
    _0x166c56['onerror'] = () => {
        _0x1cbd93();
    };
    _0x166c56['src'] = 'assets/center.png';
    _0x59c38e['crossOrigin'] = 'Anonymous';
    _0x59c38e['onload'] = _0x1cbd93;
    _0x59c38e['onerror'] = () => {
        _0x1cbd93();
    };
    _0x59c38e['src'] = 'assets/table.png';
}
function _0x1cbd93() {
    _0x4878b0['SYSTEM']['assetsLoaded']++;
    if (_0x4878b0['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0xbdbce3();
    }
}
function _0x80d69a(_0x3d38c7, _0x213598) {
    if (!_0x33a3ae || !_0x131448)
        return;
    const _0xb0ffb5 = _0x3d38c7 / _0x4878b0['SYSTEM']['viewScale'] + _0x4878b0['CAMERA']['x'];
    const _0x3c58ba = _0x213598 / _0x4878b0['SYSTEM']['viewScale'] + _0x4878b0['CAMERA']['y'];
    const _0x2a5e72 = Math['floor'](_0xb0ffb5 / _0x4878b0['MAP']['tileSize']);
    const _0x2ecfac = Math['floor'](_0x3c58ba / _0x4878b0['MAP']['tileSize']);
    if (_0x2a5e72 >= 0x0 && _0x2a5e72 < _0x4878b0['MAP']['columns'] && _0x2ecfac >= 0x0 && _0x2ecfac < _0x4878b0['MAP']['rows'])
        _0x131448['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x4878b0['EDITOR']['selectedLayer'],
            'col': _0x2a5e72,
            'row': _0x2ecfac,
            'gid': _0x4878b0['EDITOR']['selectedTileGid']
        }));
}
function _0x41d62() {
    const _0x193711 = document['getElementById']('palette');
    if (!_0x193711 || _0x193711['children']['length'] > 0x0)
        return;
    const _0x28163e = 0x40;
    const _0x14b9ad = _0xcee409;
    const _0x47ee1f = document['createElement']('div');
    _0x47ee1f['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x50ab9d = document['createElement']('canvas');
    _0x50ab9d['width'] = 0xc0;
    _0x50ab9d['height'] = 0xa0;
    _0x50ab9d['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x47ee1f['appendChild'](_0x50ab9d);
    const _0x42d56b = document['createElement']('div');
    _0x42d56b['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x47ee1f['appendChild'](_0x42d56b);
    let _0xb9f0d = 0x0, _0x1f034f = 0x0;
    let _0x53e277 = ![], _0xf13108 = 0x0, _0x29af87 = 0x0, _0x33ceaf = 0x0, _0x25da7c = 0x0;
    function _0x2ecbbd() {
        const _0x318703 = _0x50ab9d['getContext']('2d');
        _0x318703['clearRect'](0x0, 0x0, _0x50ab9d['width'], _0x50ab9d['height']);
        _0x318703['imageSmoothingEnabled'] = ![];
        if (_0x14b9ad['complete'] && _0x14b9ad['naturalWidth'] > 0x0) {
            _0x318703['drawImage'](_0x14b9ad, _0xb9f0d, _0x1f034f, _0x50ab9d['width'], _0x50ab9d['height'], 0x0, 0x0, _0x50ab9d['width'], _0x50ab9d['height']);
        }
        _0x318703['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x318703['lineWidth'] = 0x1;
        const _0xd242ae = Math['floor'](_0xb9f0d / _0x28163e);
        const _0x9a9ba9 = Math['floor'](_0x1f034f / _0x28163e);
        for (let _0x3b3e8a = _0xd242ae; _0x3b3e8a <= _0xd242ae + Math['ceil'](_0x50ab9d['width'] / _0x28163e) + 0x1; _0x3b3e8a++) {
            const _0x471a92 = _0x3b3e8a * _0x28163e - _0xb9f0d;
            _0x318703['beginPath']();
            _0x318703['moveTo'](_0x471a92, 0x0);
            _0x318703['lineTo'](_0x471a92, _0x50ab9d['height']);
            _0x318703['stroke']();
        }
        for (let _0x1c3dd5 = _0x9a9ba9; _0x1c3dd5 <= _0x9a9ba9 + Math['ceil'](_0x50ab9d['height'] / _0x28163e) + 0x1; _0x1c3dd5++) {
            const _0x52ab4e = _0x1c3dd5 * _0x28163e - _0x1f034f;
            _0x318703['beginPath']();
            _0x318703['moveTo'](0x0, _0x52ab4e);
            _0x318703['lineTo'](_0x50ab9d['width'], _0x52ab4e);
            _0x318703['stroke']();
        }
    }
    function _0x242696() {
        const _0x1bf418 = Math['max'](0x1, Math['ceil'](_0x14b9ad['naturalWidth'] / _0x28163e));
        const _0xf05c6 = _0x4878b0['EDITOR']['selectedTileGid'];
        if (_0xf05c6 <= 0x0) {
            _0x42d56b['style']['display'] = 'none';
            return;
        }
        const _0x276717 = _0xf05c6 - 0x1;
        const _0x598542 = _0x276717 % _0x1bf418;
        const _0x23272c = Math['floor'](_0x276717 / _0x1bf418);
        const _0x5e0dbd = _0x598542 * _0x28163e - _0xb9f0d;
        const _0x1ce70b = _0x23272c * _0x28163e - _0x1f034f;
        _0x42d56b['style']['display'] = 'block';
        _0x42d56b['style']['left'] = _0x5e0dbd + 'px';
        _0x42d56b['style']['top'] = _0x1ce70b + 'px';
    }
    _0x14b9ad['onload'] = () => {
        _0x2ecbbd();
        _0x242696();
    };
    if (_0x14b9ad['complete'] && _0x14b9ad['naturalWidth'] > 0x0) {
        _0x2ecbbd();
        _0x242696();
    }
    _0x47ee1f['addEventListener']('mousedown', _0xbf9a86 => {
        if (_0xbf9a86['button'] === 0x0) {
            _0x53e277 = !![];
            _0xf13108 = _0xbf9a86['clientX'];
            _0x29af87 = _0xbf9a86['clientY'];
            _0x33ceaf = _0xb9f0d;
            _0x25da7c = _0x1f034f;
            _0x47ee1f['style']['cursor'] = 'grabbing';
            _0xbf9a86['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x4bee45 => {
        if (!_0x53e277)
            return;
        const _0x15a2f0 = _0xf13108 - _0x4bee45['clientX'];
        const _0xb019cd = _0x29af87 - _0x4bee45['clientY'];
        const _0x1516ce = Math['max'](0x0, _0x14b9ad['naturalWidth'] - _0x50ab9d['width']);
        const _0x2d371f = Math['max'](0x0, _0x14b9ad['naturalHeight'] - _0x50ab9d['height']);
        _0xb9f0d = Math['max'](0x0, Math['min'](_0x1516ce, _0x33ceaf + _0x15a2f0));
        _0x1f034f = Math['max'](0x0, Math['min'](_0x2d371f, _0x25da7c + _0xb019cd));
        _0x2ecbbd();
        _0x242696();
    });
    window['addEventListener']('mouseup', _0x4e045e => {
        if (_0x53e277) {
            _0x53e277 = ![];
            _0x47ee1f['style']['cursor'] = 'grab';
        }
    });
    _0x47ee1f['addEventListener']('click', _0x2025fd => {
        const _0x3c2830 = _0x47ee1f['getBoundingClientRect']();
        const _0x434bd1 = _0x2025fd['clientX'] - _0x3c2830['left'] + _0xb9f0d;
        const _0x479213 = _0x2025fd['clientY'] - _0x3c2830['top'] + _0x1f034f;
        const _0x3a5ffe = Math['max'](0x1, Math['ceil'](_0x14b9ad['naturalWidth'] / _0x28163e));
        const _0x5d126f = Math['floor'](_0x434bd1 / _0x28163e);
        const _0x1e4cb3 = Math['floor'](_0x479213 / _0x28163e);
        const _0x59079d = _0x1e4cb3 * _0x3a5ffe + _0x5d126f + 0x1;
        _0x4878b0['EDITOR']['selectedTileGid'] = _0x59079d;
        _0x242696();
    });
    _0x193711['appendChild'](_0x47ee1f);
    const _0x4e0d64 = document['createElement']('div');
    _0x4e0d64['className'] = 'tile-btn\x20eraser-btn';
    _0x4e0d64['title'] = 'Eraser\x20(gid\x200)';
    _0x4e0d64['onclick'] = () => {
        _0x4878b0['EDITOR']['selectedTileGid'] = 0x0;
        _0x42d56b['style']['display'] = 'none';
    };
    _0x193711['appendChild'](_0x4e0d64);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x4878b0['EDITOR']['enabled'] = !_0x4878b0['EDITOR']['enabled'];
        const _0x508189 = document['getElementById']('editor-tools');
        if (_0x4878b0['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x508189['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x508189['style']['display'] = 'none';
        }
    });
    const _0xec6c82 = document['getElementById']('start-game-btn');
    if (_0xec6c82) {
        _0xec6c82['addEventListener']('click', () => {
            if (_0x131448)
                _0x131448['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x18f5e3 = document['getElementById']('rolelist-toggle-btn');
    if (_0x18f5e3) {
        let _0x48bf67 = 'subalignments';
        _0x18f5e3['addEventListener']('click', () => {
            if (_0x48bf67 === 'subalignments')
                _0x48bf67 = 'precise';
            else if (_0x48bf67 === 'precise')
                _0x48bf67 = 'off';
            else
                _0x48bf67 = 'subalignments';
            _0x18f5e3['innerText'] = 'Role\x20List:\x20' + _0x48bf67['charAt'](0x0)['toUpperCase']() + _0x48bf67['slice'](0x1);
            if (_0x131448)
                _0x131448['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x48bf67
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x13c53e => {
        if (_0x13c53e['id'] === 'editor-toggle-btn' || _0x13c53e['id'] === 'start-game-btn' || _0x13c53e['id'] === 'rolelist-toggle-btn')
            return;
        _0x13c53e['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x4dc7fa => _0x4dc7fa['classList']['remove']('active'));
            _0x13c53e['classList']['add']('active');
            _0x4878b0['EDITOR']['selectedLayer'] = _0x13c53e['dataset']['layer'];
        });
    });
}
function _0x356a98(_0x25e4b3) {
    if (_0x131448)
        _0x131448['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x25e4b3
        }));
}
function _0x3bd02b(_0x277bbb) {
    if (_0x131448)
        _0x131448['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x277bbb
        }));
}
function _0x5e5b5e(_0x28f7c8, _0x179f88, _0x3a412b, _0x1a16c8) {
    const _0x8403c7 = document['getElementById']('admin-panel');
    if (_0x8403c7)
        _0x8403c7['remove']();
    if (_0x8403c7 && _0x8403c7['dataset']['target'] === String(_0x28f7c8))
        return;
    const _0x22dcd8 = document['createElement']('div');
    _0x22dcd8['id'] = 'admin-panel';
    _0x22dcd8['dataset']['target'] = String(_0x28f7c8);
    _0x22dcd8['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x47f931 = document['createElement']('div');
    _0x47f931['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x47f931['textContent'] = _0x179f88;
    _0x22dcd8['appendChild'](_0x47f931);
    const _0x23ddf5 = document['createElement']('button');
    _0x23ddf5['textContent'] = 'Kick';
    _0x23ddf5['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x23ddf5['onmouseenter'] = () => _0x23ddf5['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x23ddf5['onmouseleave'] = () => _0x23ddf5['style']['background'] = 'transparent';
    _0x23ddf5['onclick'] = () => {
        _0x356a98(_0x28f7c8);
        _0x22dcd8['remove']();
    };
    _0x22dcd8['appendChild'](_0x23ddf5);
    const _0x46a1c0 = document['createElement']('button');
    _0x46a1c0['textContent'] = 'Ban';
    _0x46a1c0['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x46a1c0['onmouseenter'] = () => _0x46a1c0['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x46a1c0['onmouseleave'] = () => _0x46a1c0['style']['background'] = 'transparent';
    _0x46a1c0['onclick'] = () => {
        _0x3bd02b(_0x28f7c8);
        _0x22dcd8['remove']();
    };
    _0x22dcd8['appendChild'](_0x46a1c0);
    document['body']['appendChild'](_0x22dcd8);
    const _0x392059 = _0x22dcd8['offsetWidth'] || 0x91;
    const _0x2f076b = _0x22dcd8['offsetHeight'] || 0x50;
    let _0x139555 = _0x3a412b - _0x392059;
    let _0x42dd37 = _0x1a16c8;
    if (_0x139555 < 0x4)
        _0x139555 = _0x3a412b;
    if (_0x42dd37 + _0x2f076b > window['innerHeight'] - 0x4)
        _0x42dd37 = window['innerHeight'] - _0x2f076b - 0x4;
    _0x22dcd8['style']['left'] = _0x139555 + 'px';
    _0x22dcd8['style']['top'] = _0x42dd37 + 'px';
    const _0x3bb20e = _0x41c9a8 => {
        if (!_0x22dcd8['contains'](_0x41c9a8['target'])) {
            _0x22dcd8['remove']();
            document['removeEventListener']('mousedown', _0x3bb20e);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x3bb20e), 0x0);
}
function _0x24d278() {
    const _0x16e894 = document['getElementById']('leaderboard-list');
    _0x16e894['innerHTML'] = '';
    const _0x117b74 = document['createElement']('div');
    _0x117b74['className'] = 'leaderboard-entry';
    const _0x255833 = document['createElement']('span');
    _0x255833['textContent'] = _0x19ed4f + (_0x33a3ae ? '\x20[🗝️]' : '');
    if (_0x4f06a2['has'](_0xc7ab21) && !_0x5f2e43['isDead']) {
        _0x255833['style']['color'] = '#cc88ff';
    }
    _0x117b74['appendChild'](_0x255833);
    _0x16e894['appendChild'](_0x117b74);
    for (const _0x190fbe in _0x93ea24) {
        const _0x352db2 = document['createElement']('div');
        _0x352db2['className'] = 'leaderboard-entry';
        const _0x12c0ac = document['createElement']('span');
        _0x12c0ac['textContent'] = _0x93ea24[_0x190fbe]['name'] + (_0x93ea24[_0x190fbe]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x4f06a2['has'](parseInt(_0x190fbe)) && !_0x93ea24[_0x190fbe]['isDead']) {
            _0x12c0ac['style']['color'] = '#cc88ff';
        }
        _0x352db2['appendChild'](_0x12c0ac);
        if (_0x33a3ae && !_0x93ea24[_0x190fbe]['isOwner']) {
            const _0xb9d96e = _0x93ea24[_0x190fbe]['id'];
            const _0x583db9 = _0x93ea24[_0x190fbe]['name'];
            _0x352db2['style']['cursor'] = 'context-menu';
            _0x352db2['addEventListener']('contextmenu', _0x3185e8 => {
                _0x3185e8['preventDefault']();
                _0x3185e8['stopPropagation']();
                _0x5e5b5e(_0xb9d96e, _0x583db9, _0x3185e8['clientX'], _0x3185e8['clientY']);
            });
        }
        _0x16e894['appendChild'](_0x352db2);
    }
}
window['addEventListener']('resize', _0xbdbce3);
function _0xbdbce3() {
    _0x382898['width'] = window['innerWidth'];
    _0x382898['height'] = window['innerHeight'];
    _0x4878b0['SYSTEM']['viewScale'] = Math['max'](_0x382898['width'] / _0x3347b6, _0x382898['height'] / _0x1cbfc3);
    _0x4878b0['CAMERA']['width'] = _0x382898['width'] / _0x4878b0['SYSTEM']['viewScale'];
    _0x4878b0['CAMERA']['height'] = _0x382898['height'] / _0x4878b0['SYSTEM']['viewScale'];
    _0x275e4b['imageSmoothingEnabled'] = ![];
}
function _0x3da5cf(_0x7cce1) {
    if (_0x7cce1['ctrlKey'] || _0x7cce1['metaKey']) {
        if (_0x7cce1['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x7cce1['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x7cce1['code'])) {
            _0x7cce1['preventDefault']();
            _0x7cce1['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x3da5cf, { 'passive': ![] });
window['addEventListener']('keydown', _0x3da5cf, { 'passive': ![] });
window['addEventListener']('keydown', _0x5ded83 => {
    const _0x1ee9b2 = _0x5ded83['key']['toLowerCase']();
    if (_0x1ee9b2 === 'tab') {
        _0x5ded83['preventDefault']();
        const _0x4e590c = document['getElementById']('will-ui');
        const _0x22b7a2 = document['getElementById']('will-input');
        if (_0x4e590c['style']['display'] === 'flex') {
            _0x4e590c['style']['display'] = 'none';
            if (_0x131448)
                _0x131448['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x22b7a2['value']
                }));
            _0x22b7a2['blur']();
        } else {
            _0x4e590c['style']['display'] = 'flex';
            _0x22b7a2['focus']();
            for (let _0x56474d in _0x4878b0['INPUTS']['keys'])
                _0x4878b0['INPUTS']['keys'][_0x56474d] = ![];
        }
        return;
    }
    if (_0x5ded83['key'] === 'Enter') {
        if (_0x474b8b) {
            const _0xf62bef = document['getElementById']('play-btn');
            if (_0xf62bef)
                _0xf62bef['click']();
            return;
        }
        if (!_0x131448 || _0x131448['readyState'] !== WebSocket['OPEN'])
            return;
        const _0xc537f8 = document['getElementById']('chat-ui');
        const _0x1c3a4d = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x1c3a4d) {
            const _0x557ba2 = _0x1c3a4d['value']['trim']();
            if (_0x557ba2['length'] > 0x0) {
                _0x131448['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x557ba2
                }));
            }
            _0x1c3a4d['value'] = '';
            _0xc537f8['style']['display'] = 'none';
            _0x1c3a4d['blur']();
        } else {
            _0xc537f8['style']['display'] = 'block';
            _0x1c3a4d['focus']();
            for (let _0x4847dc in _0x4878b0['INPUTS']['keys'])
                _0x4878b0['INPUTS']['keys'][_0x4847dc] = ![];
        }
        _0x5ded83['preventDefault']();
        return;
    }
    if (_0x5ded83['key'] === 'Escape') {
        const _0x1b415e = document['getElementById']('guide-ui');
        if (_0x1b415e && _0x1b415e['style']['display'] === 'flex') {
            _0x1b415e['style']['display'] = 'none';
            return;
        }
        const _0x27bd2e = document['getElementById']('ability-ui');
        if (_0x27bd2e && _0x27bd2e['style']['display'] === 'block') {
            _0x27bd2e['style']['display'] = 'none';
            return;
        }
        const _0x3f3c4a = document['getElementById']('settings-panel');
        if (_0x3f3c4a && _0x3f3c4a['style']['display'] === 'block') {
            _0x3f3c4a['style']['display'] = 'none';
            return;
        }
        const _0xa1ce72 = document['getElementById']('mayor-confirm-dialog');
        if (_0xa1ce72 && _0xa1ce72['style']['display'] === 'flex') {
            _0xa1ce72['style']['display'] = 'none';
            return;
        }
        const _0x3af7e8 = document['getElementById']('target-chooser-ui');
        if (_0x3af7e8 && _0x3af7e8['style']['display'] === 'flex') {
            _0x3af7e8['style']['display'] = 'none';
            return;
        }
        const _0x26a591 = document['getElementById']('chat-ui');
        const _0x482cfa = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x482cfa) {
            _0x482cfa['value'] = '';
            _0x26a591['style']['display'] = 'none';
            _0x482cfa['blur']();
            _0x5ded83['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x4878b0['INPUTS']['keys']['hasOwnProperty'](_0x1ee9b2))
            _0x4878b0['INPUTS']['keys'][_0x1ee9b2] = !![];
        if (!_0x131448 || _0x131448['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x1ee9b2 === 'h' && !_0x5ded83['repeat']) {
            const _0x1d3a8d = document['getElementById']('guide-ui');
            if (_0x1d3a8d) {
                _0x1d3a8d['style']['display'] = _0x1d3a8d['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x1ee9b2 === 't' && !_0x5ded83['repeat']) {
            if (_0x5f2e43['isDead'])
                return;
            if (_0x4caf82 === 'Mayor') {
                if (_0x4f06a2['has'](_0xc7ab21)) {
                    _0x2f8e48('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x570e7f = document['getElementById']('mayor-confirm-dialog');
                if (_0x570e7f)
                    _0x570e7f['style']['display'] = 'flex';
                return;
            }
            if (_0x4878b0['GAME_STATE'] === 'NIGHT') {
                if (!_0x4878b0['NIGHT_ABILITY_OPEN']) {
                    _0x2f8e48('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x42ba13 = document['getElementById']('ability-ui');
                if (_0x42ba13) {
                    if (_0x42ba13['style']['display'] === 'block') {
                        _0x42ba13['style']['display'] = 'none';
                    } else {
                        _0x19d092();
                        _0x42ba13['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x4878b0['GAME_STATE'] === 'DAY_DISCUSS' || _0x4878b0['GAME_STATE'] === 'DAY_VOTE') {
                _0x2f8e48('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x1ee9b2 === 'e' && !_0x5f2e43['isDead']) {
            const _0x2ebaa0 = Date['now']();
            if (!window['_lastDoorSend'] || _0x2ebaa0 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x2ebaa0;
                _0x131448['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x41cc76 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0xff7697 = _0x41cc76['key']['toLowerCase']();
        if (_0x4878b0['INPUTS']['keys']['hasOwnProperty'](_0xff7697))
            _0x4878b0['INPUTS']['keys'][_0xff7697] = ![];
    }
});
window['addEventListener']('mousemove', _0x2e24e9 => {
    _0x4878b0['INPUTS']['mouseX'] = _0x2e24e9['clientX'];
    _0x4878b0['INPUTS']['mouseY'] = _0x2e24e9['clientY'];
    if (_0x4878b0['INPUTS']['isMouseDown'] && _0x4878b0['EDITOR']['enabled']) {
        _0x80d69a(_0x2e24e9['clientX'], _0x2e24e9['clientY']);
    }
});
window['addEventListener']('mousedown', _0x132253 => {
    if (_0x132253['target']['closest']('#editor-ui') || _0x132253['target']['closest']('#leaderboard-ui') || _0x132253['target']['closest']('#chat-log-ui') || _0x132253['target']['closest']('#target-chooser-ui') || _0x132253['target']['closest']('#guide-ui') || _0x132253['target']['closest']('#role-list-ui') || _0x132253['target']['closest']('#ability-ui') || _0x132253['target']['closest']('#settings-panel') || _0x132253['target']['closest']('#mayor-confirm-dialog') || _0x132253['target']['closest']('#mobile-action-bar') || _0x132253['target']['closest']('#mobile-top-bar') || _0x132253['target']['closest']('#mobile-joystick-zone') || _0x132253['target']['closest']('#mobile-chat-overlay') || _0x132253['target']['closest']('#will-ui') || _0x132253['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x132253['button'] === 0x0) {
        _0x4878b0['INPUTS']['isMouseDown'] = !![];
        if (_0x4878b0['EDITOR']['enabled'])
            _0x80d69a(_0x132253['clientX'], _0x132253['clientY']);
    }
});
window['addEventListener']('mouseup', _0x48e302 => {
    _0x4878b0['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x13320d => {
    if (_0x13320d['target']['closest']('#settings-btn'))
        return;
    const _0x323a59 = document['getElementById']('leaderboard-list');
    const _0x36b36a = document['getElementById']('leaderboard-toggle');
    if (_0x323a59['style']['display'] === 'none') {
        _0x323a59['style']['display'] = 'flex';
        _0x36b36a['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x323a59['style']['display'] = 'none';
        _0x36b36a['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x3a1599 = document['getElementById']('close-target-btn');
if (_0x3a1599) {
    _0x3a1599['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x2972a8 = document['getElementById']('close-guide-btn');
if (_0x2972a8) {
    _0x2972a8['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x39078e = document['getElementById']('role-list-header');
if (_0x39078e) {
    _0x39078e['addEventListener']('click', () => {
        const _0x3b8687 = document['getElementById']('role-list-items');
        const _0x188cfb = document['getElementById']('role-list-toggle');
        if (_0x3b8687['style']['display'] === 'none') {
            _0x3b8687['style']['display'] = 'flex';
            _0x188cfb['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x3b8687['style']['display'] = 'none';
            _0x188cfb['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x533e7() {
    const _0x4f79a4 = document['getElementById']('mobile-joystick-zone');
    const _0x4913a3 = document['getElementById']('mobile-joystick-base');
    const _0x5f5b7c = document['getElementById']('mobile-joystick-knob');
    if (_0x4f79a4 && _0x4913a3 && _0x5f5b7c) {
        const _0x5c7160 = 0x3e;
        const _0x48b5a0 = (_0x11c16d, _0x18b039) => {
            const _0x3ad9b5 = _0x4913a3['getBoundingClientRect']();
            const _0x5b9eb2 = _0x3ad9b5['left'] + _0x3ad9b5['width'] / 0x2;
            const _0x38c7b9 = _0x3ad9b5['top'] + _0x3ad9b5['height'] / 0x2;
            const _0x20dffd = _0x11c16d - _0x5b9eb2;
            const _0x3a0c80 = _0x18b039 - _0x38c7b9;
            const _0x133a43 = Math['hypot'](_0x20dffd, _0x3a0c80);
            if (_0x133a43 === 0x0) {
                _0x577aeb = 0x0;
                _0x2063e6 = 0x0;
                _0x4d79db = ![];
                _0x5f5b7c['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x55b29d = Math['min'](_0x133a43, _0x5c7160);
            const _0x58d6f0 = _0x20dffd / _0x133a43 * _0x55b29d;
            const _0x5ea7bd = _0x3a0c80 / _0x133a43 * _0x55b29d;
            _0x577aeb = _0x58d6f0 / _0x5c7160;
            _0x2063e6 = _0x5ea7bd / _0x5c7160;
            _0x4d79db = _0x133a43 >= _0x5c7160 * 0.75;
            _0x5f5b7c['style']['transform'] = 'translate(' + _0x58d6f0 + 'px,\x20' + _0x5ea7bd + 'px)';
        };
        const _0x55cd37 = _0x36e522 => {
            for (let _0x50666e = 0x0; _0x50666e < _0x36e522['changedTouches']['length']; _0x50666e++) {
                const _0x155d94 = _0x36e522['changedTouches'][_0x50666e];
                if (_0x290dd6 === null) {
                    _0x290dd6 = _0x155d94['identifier'];
                    _0x4b9579 = !![];
                    _0x48b5a0(_0x155d94['clientX'], _0x155d94['clientY']);
                    break;
                }
            }
        };
        const _0x48a5fd = _0x38d9d4 => {
            for (let _0x1ad9ec = 0x0; _0x1ad9ec < _0x38d9d4['changedTouches']['length']; _0x1ad9ec++) {
                const _0x5114f0 = _0x38d9d4['changedTouches'][_0x1ad9ec];
                if (_0x5114f0['identifier'] === _0x290dd6) {
                    _0x48b5a0(_0x5114f0['clientX'], _0x5114f0['clientY']);
                    break;
                }
            }
        };
        const _0x554c71 = _0x57d0c3 => {
            for (let _0x3443b5 = 0x0; _0x3443b5 < _0x57d0c3['changedTouches']['length']; _0x3443b5++) {
                const _0x8aa4ae = _0x57d0c3['changedTouches'][_0x3443b5];
                if (_0x8aa4ae['identifier'] === _0x290dd6) {
                    _0x290dd6 = null;
                    _0x4b9579 = ![];
                    _0x577aeb = 0x0;
                    _0x2063e6 = 0x0;
                    _0x4d79db = ![];
                    _0x5f5b7c['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x4f79a4['addEventListener']('touchstart', _0x2b5106 => {
            _0x2b5106['preventDefault']();
            _0x55cd37(_0x2b5106);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x48a5fd, { 'passive': !![] });
        window['addEventListener']('touchend', _0x554c71, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x554c71, { 'passive': !![] });
    }
    const _0x1053d5 = (_0x43a283, _0x5bb92c) => {
        const _0x3cda5d = _0x43a283 / _0x4878b0['SYSTEM']['viewScale'];
        const _0x21b90a = _0x5bb92c / _0x4878b0['SYSTEM']['viewScale'];
        const _0x4dcea3 = _0x5f2e43['x'] - _0x4878b0['CAMERA']['x'] + _0x5f2e43['width'] / 0x2;
        const _0x317e67 = _0x5f2e43['y'] - _0x4878b0['CAMERA']['y'] + _0x5f2e43['height'] / 0x2;
        _0x326b3b = Math['atan2'](_0x21b90a - _0x317e67, _0x3cda5d - _0x4dcea3);
        _0x5bcbf1 = !![];
        _0x4878b0['INPUTS']['mouseX'] = _0x43a283;
        _0x4878b0['INPUTS']['mouseY'] = _0x5bb92c;
    };
    _0x382898['addEventListener']('touchstart', _0x4f041f => {
        if (_0x474b8b)
            return;
        for (let _0x5ba3a2 = 0x0; _0x5ba3a2 < _0x4f041f['changedTouches']['length']; _0x5ba3a2++) {
            const _0x2de099 = _0x4f041f['changedTouches'][_0x5ba3a2];
            if (_0x2de099['identifier'] !== _0x290dd6 && _0x47e000 === null) {
                _0x47e000 = _0x2de099['identifier'];
                _0x1053d5(_0x2de099['clientX'], _0x2de099['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x382898['addEventListener']('touchmove', _0x291baf => {
        if (_0x474b8b)
            return;
        for (let _0xdf4315 = 0x0; _0xdf4315 < _0x291baf['changedTouches']['length']; _0xdf4315++) {
            const _0x4c42aa = _0x291baf['changedTouches'][_0xdf4315];
            if (_0x4c42aa['identifier'] === _0x47e000) {
                _0x1053d5(_0x4c42aa['clientX'], _0x4c42aa['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x151776 = _0x233225 => {
        for (let _0x4c644b = 0x0; _0x4c644b < _0x233225['changedTouches']['length']; _0x4c644b++) {
            const _0x4b3d0f = _0x233225['changedTouches'][_0x4c644b];
            if (_0x4b3d0f['identifier'] === _0x47e000) {
                _0x47e000 = null;
                _0x5bcbf1 = ![];
                break;
            }
        }
    };
    _0x382898['addEventListener']('touchend', _0x151776, { 'passive': !![] });
    _0x382898['addEventListener']('touchcancel', _0x151776, { 'passive': !![] });
    const _0x109a4a = document['getElementById']('mob-sprint-btn');
    if (_0x109a4a) {
        _0x109a4a['addEventListener']('click', _0x3a5c46 => {
            _0x3a5c46['stopPropagation']();
            _0x3760a9 = !_0x3760a9;
            _0x109a4a['classList']['toggle']('active', _0x3760a9);
        });
    }
    const _0x2f77c4 = document['getElementById']('mob-interact-btn');
    if (_0x2f77c4) {
        _0x2f77c4['addEventListener']('click', _0x15974b => {
            _0x15974b['stopPropagation']();
            if (!_0x5f2e43['isDead']) {
                const _0x2392da = Date['now']();
                if (!window['_lastDoorSend'] || _0x2392da - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x2392da;
                    if (_0x131448 && _0x131448['readyState'] === WebSocket['OPEN'])
                        _0x131448['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x5dd808 = document['getElementById']('mob-ability-btn');
    if (_0x5dd808) {
        _0x5dd808['addEventListener']('click', _0x4660a0 => {
            _0x4660a0['stopPropagation']();
            if (_0x5f2e43['isDead'])
                return;
            if (_0x4caf82 === 'Mayor') {
                if (_0x4f06a2['has'](_0xc7ab21)) {
                    _0x2f8e48('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x980012 = document['getElementById']('mayor-confirm-dialog');
                if (_0x980012)
                    _0x980012['style']['display'] = 'flex';
                return;
            }
            if (_0x4878b0['GAME_STATE'] === 'NIGHT') {
                if (!_0x4878b0['NIGHT_ABILITY_OPEN']) {
                    _0x2f8e48('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x50e643 = document['getElementById']('ability-ui');
                if (_0x50e643) {
                    if (_0x50e643['style']['display'] === 'block') {
                        _0x50e643['style']['display'] = 'none';
                    } else {
                        _0x19d092();
                        _0x50e643['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x4878b0['GAME_STATE'] === 'DAY_DISCUSS' || _0x4878b0['GAME_STATE'] === 'DAY_VOTE') {
                _0x2f8e48('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x209063 = document['getElementById']('mob-will-btn');
    const _0x4f4ccd = document['getElementById']('will-ui');
    const _0x11239e = document['getElementById']('will-input');
    const _0x50e541 = document['getElementById']('close-will-btn');
    const _0x231998 = () => {
        if (!_0x4f4ccd)
            return;
        if (_0x4f4ccd['style']['display'] === 'flex') {
            _0x4f4ccd['style']['display'] = 'none';
            if (_0x131448 && _0x131448['readyState'] === WebSocket['OPEN'] && _0x11239e) {
                _0x131448['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x11239e['value']
                }));
            }
            if (_0x11239e)
                _0x11239e['blur']();
        } else {
            _0x4f4ccd['style']['display'] = 'flex';
            if (_0x11239e)
                _0x11239e['focus']();
        }
    };
    if (_0x209063)
        _0x209063['addEventListener']('click', _0xe0278d => {
            _0xe0278d['stopPropagation']();
            _0x231998();
        });
    if (_0x50e541)
        _0x50e541['addEventListener']('click', _0x43867a => {
            _0x43867a['stopPropagation']();
            _0x231998();
        });
    const _0x24268c = document['getElementById']('mob-chat-btn');
    const _0xb68d1e = document['getElementById']('mobile-chat-overlay');
    const _0xcb9c1 = document['getElementById']('mobile-chat-input');
    const _0x24a51d = document['getElementById']('mobile-chat-send');
    const _0x2da1c6 = document['getElementById']('mobile-chat-cancel');
    const _0x4ace3c = () => {
        if (!_0xb68d1e || !_0xcb9c1)
            return;
        _0xb68d1e['style']['display'] = 'flex';
        _0xcb9c1['value'] = '';
        _0xcb9c1['focus']();
    };
    const _0x1a479f = () => {
        if (!_0xb68d1e || !_0xcb9c1)
            return;
        _0xb68d1e['style']['display'] = 'none';
        _0xcb9c1['blur']();
    };
    const _0x99a197 = () => {
        if (!_0xcb9c1)
            return;
        const _0x522022 = _0xcb9c1['value']['trim']();
        if (_0x522022['length'] > 0x0 && _0x131448 && _0x131448['readyState'] === WebSocket['OPEN']) {
            _0x131448['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x522022
            }));
        }
        _0xcb9c1['value'] = '';
        _0x1a479f();
    };
    if (_0x24268c)
        _0x24268c['addEventListener']('click', _0x40953b => {
            _0x40953b['stopPropagation']();
            _0x4ace3c();
        });
    if (_0x24a51d)
        _0x24a51d['addEventListener']('click', _0x3561ac => {
            _0x3561ac['stopPropagation']();
            _0x99a197();
        });
    if (_0x2da1c6)
        _0x2da1c6['addEventListener']('click', _0x16b7e5 => {
            _0x16b7e5['stopPropagation']();
            _0x1a479f();
        });
    if (_0xcb9c1) {
        _0xcb9c1['addEventListener']('keydown', _0x3970a1 => {
            if (_0x3970a1['key'] === 'Enter') {
                _0x3970a1['preventDefault']();
                _0x99a197();
            } else if (_0x3970a1['key'] === 'Escape') {
                _0x1a479f();
            }
        });
    }
    const _0x54df09 = document['getElementById']('mob-top-chat');
    if (_0x54df09)
        _0x54df09['addEventListener']('click', _0xf86131 => {
            _0xf86131['stopPropagation']();
            _0x4ace3c();
        });
    const _0x4592bd = document['getElementById']('mob-top-will');
    if (_0x4592bd)
        _0x4592bd['addEventListener']('click', _0x4ce52b => {
            _0x4ce52b['stopPropagation']();
            _0x231998();
        });
    const _0x37fb74 = document['getElementById']('mob-top-roles');
    if (_0x37fb74) {
        _0x37fb74['addEventListener']('click', _0x547dcc => {
            _0x547dcc['stopPropagation']();
            const _0x30673a = document['getElementById']('role-list-ui');
            const _0x11ec09 = document['getElementById']('leaderboard-ui');
            if (_0x11ec09)
                _0x11ec09['style']['display'] = 'none';
            if (_0x30673a)
                _0x30673a['style']['display'] = _0x30673a['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0xb5907b = document['getElementById']('mob-top-players');
    if (_0xb5907b) {
        _0xb5907b['addEventListener']('click', _0x1466db => {
            _0x1466db['stopPropagation']();
            const _0x257156 = document['getElementById']('leaderboard-ui');
            const _0x4b2aa1 = document['getElementById']('role-list-ui');
            if (_0x4b2aa1)
                _0x4b2aa1['style']['display'] = 'none';
            if (_0x257156)
                _0x257156['style']['display'] = _0x257156['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x524a42 = document['getElementById']('mob-top-help');
    if (_0x524a42) {
        _0x524a42['addEventListener']('click', _0x4b485e => {
            _0x4b485e['stopPropagation']();
            const _0x22132e = document['getElementById']('guide-ui');
            if (_0x22132e)
                _0x22132e['style']['display'] = _0x22132e['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x227b38) {
            _0x227b38 = !![];
            _0x2d6023();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
