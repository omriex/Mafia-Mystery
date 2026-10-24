document['addEventListener']('contextmenu', _0x1cd450 => _0x1cd450['preventDefault']());
const _0x5cde08 = {
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
let _0x50f9f7 = '';
function _0x1332d6(_0x20c902, _0x353e22) {
    const _0x52db1f = document['getElementById']('role-list-ui');
    const _0xbd2a54 = document['getElementById']('role-list-items');
    if (!_0x52db1f || !_0xbd2a54)
        return;
    if (!_0x353e22 || _0x353e22 === 'off' || !_0x20c902 || _0x20c902['length'] === 0x0) {
        _0x52db1f['style']['display'] = 'none';
        return;
    }
    const _0x28e578 = _0x353e22 + '|' + JSON['stringify'](_0x20c902);
    if (_0x28e578 === _0x50f9f7)
        return;
    _0x50f9f7 = _0x28e578;
    const _0x3760ee = document['getElementById']('role-tooltip');
    if (_0x3760ee) {
        _0x3760ee['style']['visibility'] = 'hidden';
        _0x3760ee['style']['opacity'] = '0';
    }
    _0x52db1f['style']['display'] = 'flex';
    _0xbd2a54['innerHTML'] = '';
    _0x20c902['forEach'](_0x1e2d65 => {
        const _0x4b2244 = document['createElement']('div');
        _0x4b2244['className'] = 'role-list-entry';
        const _0x3839d8 = _0x1e2d65['name']['includes']('Mafia') || _0x1e2d65['name'] === 'Skinwalker';
        _0x4b2244['classList']['add'](_0x3839d8 ? 'mafia' : 'town');
        if (_0x353e22 === 'precise' && _0x1e2d65['isDead']) {
            _0x4b2244['classList']['remove']('town', 'mafia');
            _0x4b2244['classList']['add']('dead');
            _0x4b2244['innerHTML'] = '<span>' + _0x1e2d65['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x12ecdb = _0x1e2d65['count'] !== undefined && _0x1e2d65['count'] !== null ? _0x1e2d65['count'] + 'x\x20' : '';
            _0x4b2244['innerHTML'] = '<span>' + _0x12ecdb + _0x1e2d65['name'] + '</span>';
        }
        if (_0x353e22 === 'subalignments' && _0x5cde08[_0x1e2d65['name']]) {
            _0x4b2244['style']['cursor'] = 'pointer';
            _0x4b2244['addEventListener']('mouseenter', () => {
                const _0x40c4ff = document['getElementById']('role-tooltip');
                if (!_0x40c4ff)
                    return;
                const _0x1a48c1 = _0x5cde08[_0x1e2d65['name']]['join'](',\x20');
                _0x40c4ff['innerHTML'] = '';
                const _0x45e29f = document['createElement']('span');
                _0x45e29f['style']['color'] = '#ffcc00';
                _0x45e29f['textContent'] = _0x1e2d65['name'];
                _0x40c4ff['appendChild'](_0x45e29f);
                _0x40c4ff['appendChild'](document['createElement']('br'));
                _0x40c4ff['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x1a48c1));
                const _0x28216b = _0x4b2244['getBoundingClientRect']();
                _0x40c4ff['style']['left'] = _0x28216b['left'] - 0xeb + 'px';
                _0x40c4ff['style']['top'] = _0x28216b['top'] + 'px';
                _0x40c4ff['style']['display'] = 'block';
                _0x40c4ff['style']['visibility'] = 'visible';
                _0x40c4ff['style']['opacity'] = '1';
            });
            _0x4b2244['addEventListener']('mouseleave', () => {
                const _0x505c64 = document['getElementById']('role-tooltip');
                if (_0x505c64) {
                    _0x505c64['style']['display'] = 'none';
                    _0x505c64['style']['visibility'] = 'hidden';
                    _0x505c64['style']['opacity'] = '0';
                }
            });
        }
        _0xbd2a54['appendChild'](_0x4b2244);
    });
}
let _0x98220b = null;
let _0x46bccd = null;
const _0x3b6187 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x419ade = 'Player???';
let _0x11565d = ![];
let _0x53ec05 = {};
let _0x4ab76e = null;
let _0x1d8d27 = 0x0;
let _0x2ec66a = 0x0;
let _0x353bbb = new Set();
let _0x209ddb = ![];
let _0x295f8d = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x4a6bf2 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0xf74c32 = ![];
let _0x494f21 = null;
let _0x5e00ed = 0x0;
let _0x59c0aa = 0x0;
let _0x3c8cba = ![];
let _0x3a7cd3 = ![];
let _0x52f803 = 0x0;
let _0x3d593d = null;
let _0x1cad30 = ![];
const _0x3accb7 = ((() => {
    const _0x3e66d5 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3'
    };
    let _0x42649d = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x34fbc5 = 0x320;
    const _0xada961 = {};
    const _0x4661bf = {};
    let _0x1201df = null;
    let _0x3ab03e = _0x42649d === 0x0;
    let _0x1778ed = ![];
    for (const [_0x323835, _0x327091] of Object['entries'](_0x3e66d5)) {
        const _0x4203b9 = new Audio(_0x327091);
        _0x4203b9['loop'] = !![];
        _0x4203b9['volume'] = 0x0;
        _0x4203b9['preload'] = 'auto';
        _0xada961[_0x323835] = _0x4203b9;
        _0x4661bf[_0x323835] = null;
    }
    const _0x10cdcc = _0x10c1ec => Math['min'](0x1, Math['max'](0x0, _0x10c1ec));
    function _0x5ca8fd(_0x25fbed) {
        if (_0x4661bf[_0x25fbed] !== null) {
            cancelAnimationFrame(_0x4661bf[_0x25fbed]);
            _0x4661bf[_0x25fbed] = null;
        }
    }
    function _0x204674(_0x5bdf46, _0xe37646, _0x35a84b, _0x28be52, _0x4b4f95) {
        _0x5ca8fd(_0x5bdf46);
        const _0x44640a = _0xada961[_0x5bdf46];
        const _0x34c8fe = performance['now']();
        const _0x2bf68c = _0x474ec3 => {
            const _0x360196 = _0x10cdcc((_0x474ec3 - _0x34c8fe) / _0x28be52);
            const _0x564baf = _0x10cdcc(_0xe37646 + (_0x35a84b - _0xe37646) * _0x360196);
            _0x44640a['volume'] = _0x3ab03e ? 0x0 : _0x564baf;
            if (_0x360196 < 0x1) {
                _0x4661bf[_0x5bdf46] = requestAnimationFrame(_0x2bf68c);
            } else {
                _0x4661bf[_0x5bdf46] = null;
                _0x44640a['volume'] = _0x3ab03e ? 0x0 : _0x10cdcc(_0x35a84b);
                if (_0x4b4f95)
                    _0x4b4f95();
            }
        };
        _0x4661bf[_0x5bdf46] = requestAnimationFrame(_0x2bf68c);
    }
    function _0x2bb388(_0x451375) {
        const _0x5189b7 = _0x451375['play']();
        if (_0x5189b7 && _0x5189b7['catch']) {
            _0x5189b7['catch'](() => {
                if (!_0x1778ed) {
                    const _0x210ee5 = () => {
                        _0x1778ed = !![];
                        _0x451375['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x210ee5);
                        document['removeEventListener']('keydown', _0x210ee5);
                        document['removeEventListener']('touchstart', _0x210ee5);
                    };
                    document['addEventListener']('click', _0x210ee5, { 'once': !![] });
                    document['addEventListener']('keydown', _0x210ee5, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x210ee5, { 'once': !![] });
                }
            });
        }
    }
    function _0xf86d39(_0x2ae96f) {
        if (!_0x3e66d5[_0x2ae96f])
            return;
        if (_0x1201df === _0x2ae96f)
            return;
        const _0x2f5e79 = _0x1201df;
        _0x1201df = _0x2ae96f;
        const _0x2eadfc = _0xada961[_0x2ae96f];
        _0x5ca8fd(_0x2ae96f);
        _0x2eadfc['currentTime'] = 0x0;
        _0x2eadfc['volume'] = 0x0;
        _0x2bb388(_0x2eadfc);
        _0x204674(_0x2ae96f, 0x0, _0x42649d, _0x34fbc5);
        if (_0x2f5e79 && _0xada961[_0x2f5e79]) {
            const _0x16facd = _0x2f5e79;
            const _0x1061c1 = _0xada961[_0x16facd];
            const _0x3c7139 = _0x10cdcc(_0x1061c1['volume']);
            _0x204674(_0x16facd, _0x3c7139, 0x0, _0x34fbc5, () => {
                _0x1061c1['pause']();
                _0x1061c1['currentTime'] = 0x0;
            });
        }
    }
    function _0x175018(_0x312238) {
        _0x42649d = _0x10cdcc(_0x312238);
        localStorage['setItem']('musicVolume', String(_0x42649d));
        if (!_0x3ab03e && _0x1201df && _0x4661bf[_0x1201df] === null) {
            _0xada961[_0x1201df]['volume'] = _0x42649d;
        }
    }
    function _0x52e470() {
        return _0x42649d;
    }
    function _0x5dbe1b(_0x1c15c3) {
        _0x3ab03e = _0x1c15c3;
        for (const _0x3baba9 of Object['keys'](_0xada961)) {
            if (_0x4661bf[_0x3baba9] === null) {
                _0xada961[_0x3baba9]['volume'] = _0x1c15c3 || _0x3baba9 !== _0x1201df ? 0x0 : _0x42649d;
            }
        }
    }
    function _0x55d44c() {
        return _0x3ab03e;
    }
    function _0x4919e7(_0x66bd87) {
        if (_0x66bd87 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x66bd87 === 'DAY_VOTE')
            return 'voting';
        return 'wait';
    }
    function _0x597fe2(_0x4692d5) {
        _0xf86d39(_0x4919e7(_0x4692d5));
    }
    function _0x2ab59f(_0x4626d8) {
        _0xf86d39(_0x4626d8);
    }
    return {
        'play': _0xf86d39,
        'onStateChange': _0x597fe2,
        'onSoundEvent': _0x2ab59f,
        'setVolume': _0x175018,
        'getVolume': _0x52e470,
        'setMuted': _0x5dbe1b,
        'isMuted': _0x55d44c
    };
})());
const _0x52ca98 = ((() => {
    const _0xdb2598 = 0x258;
    const _0x17467f = 0xb4;
    const _0x3d7995 = 0x708;
    const _0x57af7d = 0x140;
    const _0x536f47 = 0.18;
    const _0x18113c = 0.95;
    const _0x3f5bda = new Audio('audio/heartbeat.mp3');
    _0x3f5bda['loop'] = ![];
    _0x3f5bda['preload'] = 'auto';
    _0x3f5bda['volume'] = 0x0;
    let _0x589a42 = 0x0;
    let _0x2eacaa = Infinity;
    function _0x4d04f3(_0x32f1a8, _0x3a084d, _0x1621bf) {
        return Math['min'](_0x1621bf, Math['max'](_0x3a084d, _0x32f1a8));
    }
    function _0x5b9e0f(_0x1ae8f8, _0x4b716f, _0x1a63ec) {
        return _0x1ae8f8 + (_0x4b716f - _0x1ae8f8) * _0x1a63ec;
    }
    function _0x3ba141(_0x5a2184) {
        if (_0x5b4c29['GAME_STATE'] !== 'NIGHT' || _0x2bd42a['isDead'] || _0x4ab76e === 'Skinwalker') {
            _0x2eacaa = Infinity;
            return;
        }
        const _0x40bf57 = _0x2bd42a['x'] + 22.5;
        const _0x49d915 = _0x2bd42a['y'] + 22.5;
        let _0x43dc03 = Infinity;
        for (const _0x253947 in _0x53ec05) {
            const _0x1cdeec = _0x53ec05[_0x253947];
            if (!_0x1cdeec['isDark'] || _0x1cdeec['isDead'])
                continue;
            const _0x3d025a = _0x1cdeec['renderX'] + 22.5 - _0x40bf57;
            const _0x1ef1a4 = _0x1cdeec['renderY'] + 22.5 - _0x49d915;
            const _0x1113f7 = Math['sqrt'](_0x3d025a * _0x3d025a + _0x1ef1a4 * _0x1ef1a4);
            if (_0x1113f7 < _0x43dc03)
                _0x43dc03 = _0x1113f7;
        }
        _0x2eacaa = _0x43dc03;
        if (_0x43dc03 > _0xdb2598)
            return;
        const _0x53e934 = 0x1 - _0x4d04f3((_0x43dc03 - _0x17467f) / (_0xdb2598 - _0x17467f), 0x0, 0x1);
        const _0x47c668 = _0x5b9e0f(_0x3d7995, _0x57af7d, _0x53e934);
        const _0x13e5db = _0x5b9e0f(_0x536f47, _0x18113c, _0x53e934);
        if (_0x5a2184 >= _0x589a42) {
            _0x3f5bda['currentTime'] = 0x0;
            _0x3f5bda['volume'] = _0x3accb7['isMuted']() ? 0x0 : _0x4d04f3(_0x13e5db * _0x3accb7['getVolume']() / 0.7, 0x0, 0x1);
            _0x3f5bda['play']()['catch'](() => {
            });
            _0x589a42 = _0x5a2184 + _0x47c668;
        }
    }
    return { 'tick': _0x3ba141 };
})());
function _0x4dea49() {
    const _0x4ad063 = document['getElementById']('mob-ability-btn');
    if (!_0x4ad063)
        return;
    const _0x38f498 = _0x5b4c29['GAME_STATE'] === 'NIGHT' && !_0x2bd42a['isDead'];
    const _0x4f6bd9 = _0x4ab76e === 'Mayor' && !_0x353bbb['has'](_0x46bccd) && !_0x2bd42a['isDead'];
    if (_0x38f498 || _0x4f6bd9) {
        _0x4ad063['style']['display'] = 'flex';
    } else {
        _0x4ad063['style']['display'] = 'none';
    }
}
function _0x11c104() {
    const _0x3b3287 = document['getElementById']('mobile-joystick-zone');
    const _0x367521 = document['getElementById']('mobile-top-bar');
    const _0x1676c3 = document['getElementById']('mobile-action-bar');
    if (!_0x3b3287 || !_0x367521 || !_0x1676c3)
        return;
    if (!_0x302b5e && _0x4a6bf2) {
        _0x3b3287['style']['display'] = 'flex';
        _0x367521['style']['display'] = 'flex';
        _0x1676c3['style']['display'] = 'flex';
        _0x4dea49();
    } else {
        _0x3b3287['style']['display'] = 'none';
        _0x367521['style']['display'] = 'none';
        _0x1676c3['style']['display'] = 'none';
    }
}
const _0xe09461 = document['getElementById']('gameCanvas');
const _0x13040f = _0xe09461['getContext']('2d', { 'alpha': ![] });
const _0x18a0d4 = 0x500;
const _0x4ec057 = 0x2d0;
const _0x5b4c29 = {
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
        'width': _0x18a0d4,
        'height': _0x4ec057
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
const _0x2bd42a = {
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
const _0x2afb1e = new Image();
const _0x586e1f = new Image();
const _0x57b76c = new Image();
const _0x3ae852 = new Image();
_0x3ae852['src'] = 'assets/mayor\x20cosmetic.png';
const _0x3dcc42 = [
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
const _0x14b002 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x3b41ea = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x3b41ea === 'body1.png' || _0x3b41ea === 'body1')
    _0x3b41ea = 'body01.png';
if (!_0x3b41ea['endsWith']('.png'))
    _0x3b41ea += '.png';
let _0x214310 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x214310['endsWith']('.png'))
    _0x214310 += '.png';
let _0x302b5e = !![];
let _0x5af116 = null;
let _0x21f8bc = null;
let _0x48a56d = 0x3c;
let _0x40737a = 0x2d;
const _0x2ca088 = {};
function _0x3a4d0e(_0xe8408e) {
    if (!_0x2ca088[_0xe8408e]) {
        const _0x418012 = new Image();
        _0x418012['src'] = _0xe8408e;
        _0x2ca088[_0xe8408e] = _0x418012;
    }
    return _0x2ca088[_0xe8408e];
}
function _0x1dffb6(_0x2adf3c, _0x32924e, _0x34542b, _0x4dc81b, _0x158efc) {
    try {
        const _0x3fdc08 = 'assets/' + (_0x32924e || 'body01.png');
        const _0x5bba18 = _0x3a4d0e(_0x3fdc08);
        if (_0x5bba18['complete'] && _0x5bba18['naturalWidth'] > 0x0) {
            _0x2adf3c['drawImage'](_0x5bba18, -_0x4dc81b / 0x2, -_0x158efc / 0x2, _0x4dc81b, _0x158efc);
        }
        const _0xa4e342 = 'assets/' + (_0x34542b || 'eyes4.png');
        const _0x48590f = _0x3a4d0e(_0xa4e342);
        if (_0x48590f['complete'] && _0x48590f['naturalWidth'] > 0x0) {
            _0x2adf3c['drawImage'](_0x48590f, -_0x4dc81b / 0x2, -_0x158efc / 0x2, _0x4dc81b, _0x158efc);
        }
    } catch (_0x447d85) {
    }
}
function _0x1d5d48() {
    const _0x3bba7b = document['getElementById']('body-skin-grid');
    const _0xfa1def = document['getElementById']('eyes-skin-grid');
    if (!_0x3bba7b || !_0xfa1def)
        return;
    _0x3bba7b['innerHTML'] = '';
    _0x3dcc42['forEach'](_0x21c9c5 => {
        const _0x27db22 = document['createElement']('button');
        _0x27db22['className'] = 'skin-btn' + (_0x21c9c5 === _0x3b41ea ? '\x20selected' : '');
        const _0x36cc1f = document['createElement']('img');
        _0x36cc1f['src'] = 'assets/' + _0x21c9c5;
        _0x27db22['appendChild'](_0x36cc1f);
        _0x27db22['onclick'] = () => {
            _0x3b41ea = _0x21c9c5;
            localStorage['setItem']('selectedBody', _0x21c9c5);
            _0x3bba7b['querySelectorAll']('.skin-btn')['forEach'](_0x5ee1cc => _0x5ee1cc['classList']['remove']('selected'));
            _0x27db22['classList']['add']('selected');
        };
        _0x3bba7b['appendChild'](_0x27db22);
    });
    _0xfa1def['innerHTML'] = '';
    _0x14b002['forEach'](_0x3c7672 => {
        const _0x51ccdf = document['createElement']('button');
        _0x51ccdf['className'] = 'skin-btn' + (_0x3c7672 === _0x214310 ? '\x20selected' : '');
        const _0x41cfd6 = document['createElement']('img');
        _0x41cfd6['src'] = 'assets/' + _0x3c7672;
        _0x51ccdf['appendChild'](_0x41cfd6);
        _0x51ccdf['onclick'] = () => {
            _0x214310 = _0x3c7672;
            localStorage['setItem']('selectedEyes', _0x3c7672);
            _0xfa1def['querySelectorAll']('.skin-btn')['forEach'](_0x80a842 => _0x80a842['classList']['remove']('selected'));
            _0x51ccdf['classList']['add']('selected');
        };
        _0xfa1def['appendChild'](_0x51ccdf);
    });
}
function _0x1959e9(_0x5d5d10) {
    if (!_0x5b4c29['MAP']['columns'] || !_0x5b4c29['CAMERA']['width'])
        return;
    const _0x32a859 = Math['max'](0x0, _0x5b4c29['MAP']['columns'] * _0x5b4c29['MAP']['tileSize'] - _0x5b4c29['CAMERA']['width']);
    const _0x1922a9 = Math['max'](0x0, _0x5b4c29['MAP']['rows'] * _0x5b4c29['MAP']['tileSize'] - _0x5b4c29['CAMERA']['height']);
    if (_0x5af116 === null) {
        _0x5af116 = _0x32a859 / 0x2;
        _0x21f8bc = _0x1922a9 / 0x2;
    }
    _0x5af116 += _0x48a56d * _0x5d5d10;
    _0x21f8bc += _0x40737a * _0x5d5d10;
    if (_0x5af116 <= 0x0) {
        _0x5af116 = 0x0;
        _0x48a56d = Math['abs'](_0x48a56d);
    } else if (_0x5af116 >= _0x32a859) {
        _0x5af116 = _0x32a859;
        _0x48a56d = -Math['abs'](_0x48a56d);
    }
    if (_0x21f8bc <= 0x0) {
        _0x21f8bc = 0x0;
        _0x40737a = Math['abs'](_0x40737a);
    } else if (_0x21f8bc >= _0x1922a9) {
        _0x21f8bc = _0x1922a9;
        _0x40737a = -Math['abs'](_0x40737a);
    }
    _0x5b4c29['CAMERA']['x'] = _0x5af116;
    _0x5b4c29['CAMERA']['y'] = _0x21f8bc;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x3f864c = document['getElementById']('play-btn');
    const _0x971a3 = document['getElementById']('username-input');
    const _0x44626f = localStorage['getItem']('playerName');
    if (_0x44626f && _0x971a3) {
        _0x971a3['value'] = _0x44626f;
    }
    const _0x3004a2 = () => {
        _0x3accb7['play']('wait');
        document['removeEventListener']('click', _0x3004a2);
        document['removeEventListener']('keydown', _0x3004a2);
        document['removeEventListener']('touchstart', _0x3004a2);
    };
    document['addEventListener']('click', _0x3004a2, { 'once': !![] });
    document['addEventListener']('keydown', _0x3004a2, { 'once': !![] });
    document['addEventListener']('touchstart', _0x3004a2, { 'once': !![] });
    if (_0x3f864c) {
        _0x3f864c['addEventListener']('click', () => {
            const _0x32654b = _0x971a3['value'];
            const _0x1d9508 = _0x32654b['replace'](/<[^>]*>/g, '')['replace'](/[^\x20-\x7E]/g, '')['replace'](/[<>]/g, '')['replace'](/\s+/g, '\x20')['trim']()['substring'](0x0, 0xe);
            _0x419ade = _0x1d9508 || 'Player';
            localStorage['setItem']('playerName', _0x419ade);
            _0x302b5e = ![];
            _0x5b4c29['CAMERA']['x'] = null;
            _0x5b4c29['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x341355 = document['getElementById']('controls-hint');
            if (_0x341355 && !_0x4a6bf2)
                _0x341355['style']['display'] = 'block';
            _0x11c104();
            if (_0x4a6bf2) {
                const _0x161495 = document['getElementById']('leaderboard-list');
                const _0x58aa27 = document['getElementById']('leaderboard-toggle');
                if (_0x161495) {
                    _0x161495['style']['display'] = 'none';
                    if (_0x58aa27)
                        _0x58aa27['style']['transform'] = 'rotate(180deg)';
                }
                const _0x5151cd = document['getElementById']('role-list-items');
                const _0x4d910f = document['getElementById']('role-list-toggle');
                if (_0x5151cd) {
                    _0x5151cd['style']['display'] = 'none';
                    if (_0x4d910f)
                        _0x4d910f['style']['transform'] = 'rotate(180deg)';
                }
            }
            if (_0x98220b && _0x98220b['readyState'] === WebSocket['OPEN']) {
                _0x98220b['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x419ade,
                    'token': _0x3b6187,
                    'body': _0x3b41ea,
                    'eyes': _0x214310
                }));
            } else if (!_0x98220b || _0x98220b['readyState'] === WebSocket['CLOSED'] || _0x98220b['readyState'] === WebSocket['CLOSING']) {
                _0x2f3406();
            }
        });
    }
    _0x1d5d48();
    _0x2f3406();
    _0x480f46();
    _0x911b11();
    _0x4c1c85();
});
function _0x911b11() {
    const _0x3863bb = document['getElementById']('settings-btn');
    const _0x494651 = document['getElementById']('settings-panel');
    const _0x4b8d64 = document['getElementById']('close-settings-btn');
    const _0x3d7605 = document['getElementById']('setting-mouse-relative');
    if (_0x3d7605) {
        _0x3d7605['checked'] = _0x295f8d;
        _0x3d7605['addEventListener']('change', () => {
            _0x295f8d = _0x3d7605['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x295f8d ? 'true' : 'false');
        });
    }
    const _0x4052f6 = document['getElementById']('setting-music-volume');
    const _0x51f5f9 = document['getElementById']('setting-music-volume-display');
    function _0x1d0a2c(_0x9e1ff3) {
        const _0x1083d9 = (_0x9e1ff3['value'] - _0x9e1ff3['min']) / (_0x9e1ff3['max'] - _0x9e1ff3['min']) * 0x64;
        _0x9e1ff3['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x1083d9 + '%,\x20#444\x20' + _0x1083d9 + '%)';
    }
    if (_0x4052f6) {
        const _0x57491f = _0x3accb7['getVolume']();
        const _0x3adf27 = Math['round'](_0x57491f * 0x64);
        _0x4052f6['value'] = _0x3adf27;
        if (_0x51f5f9)
            _0x51f5f9['textContent'] = _0x3adf27 + '%';
        _0x1d0a2c(_0x4052f6);
        _0x4052f6['addEventListener']('input', () => {
            const _0x51a893 = parseInt(_0x4052f6['value'], 0xa);
            if (_0x51f5f9)
                _0x51f5f9['textContent'] = _0x51a893 + '%';
            _0x1d0a2c(_0x4052f6);
            _0x3accb7['setVolume'](_0x51a893 / 0x64);
            _0x3accb7['setMuted'](_0x51a893 === 0x0);
        });
    }
    if (_0x3863bb && _0x494651) {
        _0x3863bb['addEventListener']('click', _0x2073c2 => {
            _0x2073c2['stopPropagation']();
            _0x494651['style']['display'] = _0x494651['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x4b8d64 && _0x494651) {
        _0x4b8d64['addEventListener']('click', () => {
            _0x494651['style']['display'] = 'none';
        });
    }
    const _0x55ffcd = document['getElementById']('mayor-confirm-yes');
    const _0x898a24 = document['getElementById']('mayor-confirm-no');
    const _0x11ac44 = document['getElementById']('mayor-confirm-dialog');
    if (_0x55ffcd && _0x11ac44) {
        _0x55ffcd['addEventListener']('click', () => {
            if (_0x98220b && _0x98220b['readyState'] === WebSocket['OPEN']) {
                _0x98220b['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x11ac44['style']['display'] = 'none';
        });
    }
    if (_0x898a24 && _0x11ac44) {
        _0x898a24['addEventListener']('click', () => {
            _0x11ac44['style']['display'] = 'none';
        });
    }
    const _0x42f31f = document['getElementById']('close-ability-btn');
    if (_0x42f31f) {
        _0x42f31f['addEventListener']('click', () => {
            const _0x254061 = document['getElementById']('ability-ui');
            if (_0x254061)
                _0x254061['style']['display'] = 'none';
        });
    }
}
let _0xb448a9 = '';
function _0x35bfb4(_0x43a9e8) {
    const _0x377905 = document['getElementById']('vote-tally-panel');
    const _0x1b3c9d = document['getElementById']('vote-tally-list');
    if (!_0x377905 || !_0x1b3c9d)
        return;
    if (_0x43a9e8['state'] !== 'DAY_VOTE') {
        _0x377905['style']['display'] = 'none';
        _0xb448a9 = '';
        return;
    }
    _0x377905['style']['display'] = 'block';
    const _0x9917b0 = {};
    for (const _0x1089af in _0x53ec05) {
        if (!_0x53ec05[_0x1089af]['isDead'])
            _0x9917b0[_0x1089af] = 0x0;
    }
    if (_0x46bccd && !_0x2bd42a['isDead'])
        _0x9917b0[_0x46bccd] = 0x0;
    const _0x2959cf = _0x43a9e8['votes'] || {};
    for (const _0x4a5d15 in _0x2959cf) {
        const _0x136c98 = _0x2959cf[_0x4a5d15];
        const _0x5e87f5 = _0x43a9e8['mayorRevealed'] && _0x43a9e8['mayorRevealed'][_0x4a5d15] ? 0x2 : 0x1;
        _0x9917b0[_0x136c98] = (_0x9917b0[_0x136c98] || 0x0) + _0x5e87f5;
    }
    let _0x3485ab = 0x0;
    const _0x3192b2 = _0x43a9e8['skips'] || {};
    for (const _0x2be342 in _0x3192b2) {
        _0x3485ab += Number(_0x3192b2[_0x2be342]) || 0x1;
    }
    const _0x4c3d1f = JSON['stringify'](_0x9917b0) + '_' + _0x3485ab + '_' + _0x2bd42a['isDead'];
    if (_0x4c3d1f === _0xb448a9)
        return;
    _0xb448a9 = _0x4c3d1f;
    _0x1b3c9d['innerHTML'] = '';
    for (const _0x219ce6 in _0x9917b0) {
        const _0x5a8262 = parseInt(_0x219ce6);
        const _0x56da8f = _0x5a8262 === _0x46bccd ? _0x419ade : _0x53ec05[_0x219ce6] ? _0x53ec05[_0x219ce6]['name'] : 'Player\x20' + _0x219ce6;
        const _0x365b0e = document['createElement']('div');
        _0x365b0e['className'] = 'vote-tally-entry';
        const _0x373bae = document['createElement']('span');
        _0x373bae['textContent'] = _0x56da8f;
        const _0xf9b080 = document['createElement']('span');
        _0xf9b080['className'] = 'vote-count';
        _0xf9b080['textContent'] = _0x9917b0[_0x219ce6] + '\x20vote' + (_0x9917b0[_0x219ce6] === 0x1 ? '' : 's');
        _0x365b0e['appendChild'](_0x373bae);
        _0x365b0e['appendChild'](_0xf9b080);
        if (_0x5a8262 !== _0x46bccd && !_0x2bd42a['isDead']) {
            _0x365b0e['style']['cursor'] = 'pointer';
            _0x365b0e['title'] = 'Vote\x20for\x20' + _0x56da8f;
            _0x365b0e['addEventListener']('click', _0x4e3702 => {
                _0x4e3702['stopPropagation']();
                if (_0x98220b && _0x98220b['readyState'] === WebSocket['OPEN']) {
                    _0x98220b['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x56da8f
                    }));
                }
            });
        }
        _0x1b3c9d['appendChild'](_0x365b0e);
    }
    const _0x1a1eec = document['createElement']('div');
    _0x1a1eec['className'] = 'vote-tally-skip';
    _0x1a1eec['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x3485ab + '</span>';
    if (!_0x2bd42a['isDead']) {
        _0x1a1eec['style']['cursor'] = 'pointer';
        _0x1a1eec['title'] = 'Click\x20to\x20skip\x20vote';
        _0x1a1eec['addEventListener']('click', _0x5e807b => {
            _0x5e807b['stopPropagation']();
            if (_0x98220b && _0x98220b['readyState'] === WebSocket['OPEN']) {
                _0x98220b['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x1b3c9d['appendChild'](_0x1a1eec);
}
let _0x22079a = null;
let _0x4715a4 = null;
let _0x1976db = null;
function _0x10d0b7() {
    if (_0x98220b && _0x98220b['readyState'] === WebSocket['OPEN']) {
        _0x98220b['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x22079a,
            'abilityTarget': _0x4715a4,
            'killTarget': _0x1976db
        }));
    }
}
function _0x2457a1() {
    const _0x164022 = document['getElementById']('ability-ui-body');
    if (!_0x164022)
        return;
    _0x164022['innerHTML'] = '';
    if (_0x4ab76e === 'Celebrity' || _0x4ab76e === 'Mayor') {
        const _0x3dbb7c = document['createElement']('div');
        _0x3dbb7c['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x3dbb7c['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x164022['appendChild'](_0x3dbb7c);
        return;
    }
    if (_0x4ab76e === 'Skinwalker') {
        const _0x43dfe9 = document['createElement']('div');
        _0x43dfe9['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x43dfe9['innerText'] = 'Transform\x20into:';
        _0x164022['appendChild'](_0x43dfe9);
        const _0x2ac297 = document['createElement']('div');
        _0x2ac297['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x1110b0 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x4632ad = _0x11d599 => {
            if (!_0x5b4c29['ROLE_LIST_RAW'] || _0x5b4c29['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x5b4c29['ROLE_LIST_RAW']['some'](_0x301cbe => {
                if (_0x301cbe['name'] === _0x11d599)
                    return !_0x301cbe['isDead'];
                if (_0x5cde08[_0x301cbe['name']] && _0x5cde08[_0x301cbe['name']]['includes'](_0x11d599))
                    return !![];
                return ![];
            });
        };
        const _0x4e6a15 = [
            'None',
            ..._0x1110b0['filter'](_0x4632ad)
        ];
        _0x4e6a15['forEach'](_0x47eb00 => {
            const _0x1ecc8e = document['createElement']('button');
            _0x1ecc8e['className'] = 'layer-btn';
            _0x1ecc8e['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x1ecc8e['innerText'] = _0x47eb00;
            const _0x5b87de = _0x47eb00 === 'None' && !_0x22079a || _0x22079a === _0x47eb00;
            if (_0x5b87de)
                _0x1ecc8e['classList']['add']('active');
            _0x1ecc8e['onclick'] = () => {
                _0x22079a = _0x47eb00 === 'None' ? null : _0x47eb00;
                _0x10d0b7();
                _0x2457a1();
            };
            _0x2ac297['appendChild'](_0x1ecc8e);
        });
        _0x164022['appendChild'](_0x2ac297);
        if (_0x4632ad('Vigilante')) {
            const _0x5ac6b2 = document['createElement']('div');
            _0x5ac6b2['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x5ac6b2['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x164022['appendChild'](_0x5ac6b2);
        }
        if (_0x22079a === 'Vigilante') {
            const _0x3b6a85 = document['createElement']('div');
            _0x3b6a85['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x3b6a85['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x164022['appendChild'](_0x3b6a85);
        } else if (_0x22079a && _0x22079a !== 'Celebrity') {
            const _0x541431 = document['createElement']('div');
            _0x541431['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x541431['innerText'] = 'Use\x20' + _0x22079a + '\x20ability\x20on:';
            _0x164022['appendChild'](_0x541431);
            const _0x1a6729 = document['createElement']('div');
            _0x1a6729['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x580005 = document['createElement']('button');
            _0x580005['className'] = 'layer-btn';
            _0x580005['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x580005['innerText'] = 'No\x20one';
            if (!_0x4715a4)
                _0x580005['classList']['add']('active');
            _0x580005['onclick'] = () => {
                _0x4715a4 = null;
                _0x10d0b7();
                _0x2457a1();
            };
            _0x1a6729['appendChild'](_0x580005);
            for (const _0x17edde in _0x53ec05) {
                const _0x4ac60d = _0x53ec05[_0x17edde];
                if (_0x4ac60d['isDead'])
                    continue;
                const _0x31dc72 = document['createElement']('button');
                _0x31dc72['className'] = 'layer-btn';
                _0x31dc72['innerText'] = _0x4ac60d['name'];
                if (_0x4715a4 === parseInt(_0x17edde))
                    _0x31dc72['classList']['add']('active');
                _0x31dc72['onclick'] = () => {
                    _0x4715a4 = parseInt(_0x17edde);
                    _0x10d0b7();
                    _0x2457a1();
                };
                _0x1a6729['appendChild'](_0x31dc72);
            }
            _0x164022['appendChild'](_0x1a6729);
        }
        const _0x3f22d1 = document['createElement']('div');
        _0x3f22d1['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x3f22d1['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x164022['appendChild'](_0x3f22d1);
        const _0x24698b = document['createElement']('div');
        _0x24698b['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x267f69 = document['createElement']('button');
        _0x267f69['className'] = 'layer-btn';
        _0x267f69['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x267f69['innerText'] = 'No\x20one';
        if (!_0x1976db && !_0x5b4c29['CURRENT_TARGET'])
            _0x267f69['classList']['add']('active');
        _0x267f69['onclick'] = () => {
            _0x1976db = null;
            _0x5b4c29['CURRENT_TARGET'] = null;
            _0x10d0b7();
            _0x2457a1();
        };
        _0x24698b['appendChild'](_0x267f69);
        for (const _0x2cbf88 in _0x53ec05) {
            const _0x382346 = _0x53ec05[_0x2cbf88];
            if (_0x382346['isDead'])
                continue;
            const _0x115508 = document['createElement']('button');
            _0x115508['className'] = 'layer-btn';
            _0x115508['innerText'] = _0x382346['name'];
            if (_0x1976db === parseInt(_0x2cbf88) || _0x5b4c29['CURRENT_TARGET'] === parseInt(_0x2cbf88))
                _0x115508['classList']['add']('active');
            _0x115508['onclick'] = () => {
                _0x1976db = parseInt(_0x2cbf88);
                _0x5b4c29['CURRENT_TARGET'] = parseInt(_0x2cbf88);
                _0x10d0b7();
                _0x2457a1();
            };
            _0x24698b['appendChild'](_0x115508);
        }
        _0x164022['appendChild'](_0x24698b);
        return;
    }
    let _0xa17cbd = '';
    let _0x4a8e3e = ![];
    if (_0x4ab76e === 'Doctor') {
        _0xa17cbd = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x4a8e3e = !![];
    } else if (_0x4ab76e === 'Investigator') {
        _0xa17cbd = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x4ab76e === 'Tracker') {
        _0xa17cbd = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x4ab76e === 'Archer') {
        _0xa17cbd = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x4ab76e === 'Escort') {
        _0xa17cbd = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x4ab76e === 'Vigilante') {
        _0xa17cbd = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x3846bf = document['createElement']('div');
    _0x3846bf['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x3846bf['innerText'] = _0xa17cbd;
    _0x164022['appendChild'](_0x3846bf);
    const _0x3f14a = document['createElement']('div');
    _0x3f14a['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x411217 = document['createElement']('button');
    _0x411217['className'] = 'layer-btn';
    _0x411217['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x411217['innerText'] = 'No\x20one';
    if (_0x5b4c29['CURRENT_TARGET'] === null)
        _0x411217['classList']['add']('active');
    _0x411217['onclick'] = () => {
        _0x5b4c29['CURRENT_TARGET'] = null;
        if (_0x98220b && _0x98220b['readyState'] === WebSocket['OPEN']) {
            _0x98220b['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x2457a1();
    };
    _0x3f14a['appendChild'](_0x411217);
    for (const _0x843c0 in _0x53ec05) {
        const _0x47f5f6 = _0x53ec05[_0x843c0];
        if (_0x47f5f6['isDead'])
            continue;
        const _0x55097b = document['createElement']('button');
        _0x55097b['className'] = 'layer-btn';
        _0x55097b['innerText'] = _0x47f5f6['name'];
        if (_0x5b4c29['CURRENT_TARGET'] === parseInt(_0x843c0))
            _0x55097b['classList']['add']('active');
        _0x55097b['onclick'] = () => {
            _0x5b4c29['CURRENT_TARGET'] = parseInt(_0x843c0);
            if (_0x98220b && _0x98220b['readyState'] === WebSocket['OPEN']) {
                _0x98220b['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x843c0)
                }));
            }
            _0x2457a1();
        };
        _0x3f14a['appendChild'](_0x55097b);
    }
    if (_0x4a8e3e && !_0x2bd42a['isDead']) {
        const _0x243853 = document['createElement']('button');
        _0x243853['className'] = 'layer-btn';
        _0x243853['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x243853['innerText'] = _0x419ade + '\x20(Self)';
        if (_0x5b4c29['CURRENT_TARGET'] === _0x46bccd)
            _0x243853['classList']['add']('active');
        _0x243853['onclick'] = () => {
            _0x5b4c29['CURRENT_TARGET'] = _0x46bccd;
            if (_0x98220b && _0x98220b['readyState'] === WebSocket['OPEN']) {
                _0x98220b['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x46bccd
                }));
            }
            _0x2457a1();
        };
        _0x3f14a['appendChild'](_0x243853);
    }
    _0x164022['appendChild'](_0x3f14a);
}
function _0x2f3406() {
    if (_0x98220b && (_0x98220b['readyState'] === WebSocket['OPEN'] || _0x98220b['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x115871 = new URLSearchParams();
    if (_0x3b6187)
        _0x115871['set']('token', _0x3b6187);
    _0x115871['set']('ngrok-skip-browser-warning', 'true');
    const _0x5ed8de = 'wss://relating-worker-pipeline-enclosure.trycloudflare.com';
    const _0x828e14 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x5ed8de;
    const _0x1625ab = _0x828e14 + '/?' + _0x115871['toString']();
    _0x98220b = new WebSocket(_0x1625ab);
    _0x98220b['onopen'] = function () {
        if (!_0x302b5e && this['readyState'] === WebSocket['OPEN']) {
            this['send'](JSON['stringify']({
                'type': 'join',
                'name': _0x419ade,
                'token': _0x3b6187,
                'body': _0x3b41ea,
                'eyes': _0x214310
            }));
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x98220b && _0x98220b['readyState'] === WebSocket['OPEN']) {
            _0x98220b['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x98220b['onclose'] = _0x411310 => {
        if (_0x411310['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x411310['code'] === 0xfa2 || _0x411310['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x4560f5 = document['getElementById']('disconnect-overlay');
        if (!_0x4560f5) {
            _0x4560f5 = document['createElement']('div');
            _0x4560f5['id'] = 'disconnect-overlay';
            _0x4560f5['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x4560f5['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x4560f5);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x98220b['onmessage'] = _0x59b4b5 => {
        const _0x3f098d = JSON['parse'](_0x59b4b5['data']);
        if (_0x3f098d['type'] === 'map_data') {
            _0x5b4c29['MAP']['tileSize'] = _0x3f098d['map']['tileSize'];
            _0x5b4c29['MAP']['columns'] = _0x3f098d['map']['columns'];
            _0x5b4c29['MAP']['rows'] = _0x3f098d['map']['rows'];
            _0x5b4c29['MAP']['layers'] = _0x3f098d['map']['layers'];
            if (_0x3f098d['map']['doors']) {
                _0x5b4c29['MAP']['doors'] = _0x3f098d['map']['doors'];
                const _0x2ccc30 = _0x5b4c29['MAP']['layers']['find'](_0x532b65 => _0x532b65['name'] === 'floor2');
                if (_0x2ccc30) {
                    for (const _0x19016f in _0x5b4c29['MAP']['doors']) {
                        _0x2ccc30['data'][parseInt(_0x19016f)] = 0x2;
                    }
                }
            }
            if (_0x3f098d['entities'])
                _0x5b4c29['ENTITIES'] = _0x3f098d['entities'];
            _0x5088f6();
            _0x5b4c29['SYSTEM']['isReady'] = !![];
            _0x213be1();
            if (!_0x5b4c29['SYSTEM']['_gameLoopRunning']) {
                _0x5b4c29['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x2209b4);
            }
            return;
        }
        if (_0x3f098d['type'] === 'init') {
            _0x46bccd = _0x3f098d['id'];
            _0x302b5e = ![];
            _0x11c104();
            if (_0x4a6bf2) {
                const _0x4c6437 = document['getElementById']('leaderboard-list');
                const _0x3f9e80 = document['getElementById']('leaderboard-toggle');
                if (_0x4c6437) {
                    _0x4c6437['style']['display'] = 'none';
                    if (_0x3f9e80)
                        _0x3f9e80['style']['transform'] = 'rotate(180deg)';
                }
                const _0x212abf = document['getElementById']('role-list-items');
                const _0x4bbe6c = document['getElementById']('role-list-toggle');
                if (_0x212abf) {
                    _0x212abf['style']['display'] = 'none';
                    if (_0x4bbe6c)
                        _0x4bbe6c['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x11565d = _0x3f098d['isOwner'] || ![];
            _0x419ade = _0x3f098d['name'] || _0x419ade;
            _0x5b4c29['MAP']['tileSize'] = _0x3f098d['map']['tileSize'];
            _0x5b4c29['MAP']['columns'] = _0x3f098d['map']['columns'];
            _0x5b4c29['MAP']['rows'] = _0x3f098d['map']['rows'];
            _0x5b4c29['MAP']['layers'] = _0x3f098d['map']['layers'];
            if (_0x3f098d['map']['doors']) {
                _0x5b4c29['MAP']['doors'] = _0x3f098d['map']['doors'];
                const _0x47b887 = _0x5b4c29['MAP']['layers']['find'](_0x6ea3f3 => _0x6ea3f3['name'] === 'floor2');
                if (_0x47b887) {
                    for (const _0x1be3d9 in _0x5b4c29['MAP']['doors']) {
                        _0x47b887['data'][parseInt(_0x1be3d9)] = 0x2;
                    }
                }
            }
            if (_0x3f098d['entities'])
                _0x5b4c29['ENTITIES'] = _0x3f098d['entities'];
            _0x5088f6();
            _0x2bd42a['x'] = _0x5b4c29['MAP']['columns'] * _0x5b4c29['MAP']['tileSize'] / 0x2;
            _0x2bd42a['y'] = _0x5b4c29['MAP']['rows'] * _0x5b4c29['MAP']['tileSize'] / 0x2;
            _0x5b4c29['CAMERA']['x'] = _0x2bd42a['x'] + _0x2bd42a['width'] / 0x2 - _0x5b4c29['CAMERA']['width'] / 0x2;
            _0x5b4c29['CAMERA']['y'] = _0x2bd42a['y'] + _0x2bd42a['height'] / 0x2 - _0x5b4c29['CAMERA']['height'] / 0x2;
            if (_0x11565d) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x53b06d();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x5b4c29['SYSTEM']['lastTime'] = performance['now']();
            _0x5b4c29['SYSTEM']['isReady'] = !![];
            _0x596431();
            if (!_0x5b4c29['SYSTEM']['_gameLoopRunning']) {
                _0x5b4c29['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x2209b4);
            }
            return;
        } else if (_0x3f098d['type'] === 'state') {
            const _0x37382b = {};
            for (const _0x26bb4e in _0x3f098d['players']) {
                if (parseInt(_0x26bb4e) === _0x46bccd)
                    continue;
                const _0x590936 = _0x3f098d['players'][_0x26bb4e];
                const _0xfe115e = _0x53ec05[_0x26bb4e];
                if (_0xfe115e) {
                    const _0x5e7dd5 = _0x590936['x'] - _0xfe115e['renderX'];
                    const _0x246485 = _0x590936['y'] - _0xfe115e['renderY'];
                    const _0x46cc2e = _0x5e7dd5 * _0x5e7dd5 + _0x246485 * _0x246485 > 0x78 * 0x78;
                    Object['assign'](_0xfe115e, _0x590936);
                    if (_0x46cc2e) {
                        _0xfe115e['renderX'] = _0x590936['x'];
                        _0xfe115e['renderY'] = _0x590936['y'];
                    }
                    _0x37382b[_0x26bb4e] = _0xfe115e;
                } else {
                    _0x37382b[_0x26bb4e] = {
                        ..._0x590936,
                        'renderX': _0x590936['x'],
                        'renderY': _0x590936['y'],
                        'renderAngle': _0x590936['angle'] || 0x0
                    };
                }
            }
            _0x53ec05 = _0x37382b;
            if (_0x3f098d['players'][_0x46bccd]) {
                const _0x12cb02 = _0x3f098d['players'][_0x46bccd];
                _0x2bd42a['chats'] = _0x12cb02['chats'] || [];
                _0x2bd42a['isDead'] = _0x12cb02['isDead'];
                if (_0x12cb02['name'])
                    _0x419ade = _0x12cb02['name'];
                _0x596431();
                const _0x19f5f1 = Math['hypot'](_0x12cb02['x'] - _0x2bd42a['x'], _0x12cb02['y'] - _0x2bd42a['y']);
                if (_0x19f5f1 > 0x32) {
                    _0x2bd42a['x'] += (_0x12cb02['x'] - _0x2bd42a['x']) * 0.35;
                    _0x2bd42a['y'] += (_0x12cb02['y'] - _0x2bd42a['y']) * 0.35;
                }
            }
            if (_0x3f098d['entities'])
                _0x5b4c29['ENTITIES'] = _0x3f098d['entities'];
            if (_0x3f098d['game']) {
                _0x5b4c29['GAME_STATE'] = _0x3f098d['game']['state'];
                _0x5b4c29['NIGHT_ABILITY_OPEN'] = _0x3f098d['game']['nightAbilityOpen'];
                if (_0x3f098d['game']['mayorRevealed']) {
                    for (const _0x3c6113 in _0x3f098d['game']['mayorRevealed']) {
                        _0x353bbb['add'](parseInt(_0x3c6113));
                    }
                }
                if (_0x5b4c29['LAST_STATE'] !== _0x5b4c29['GAME_STATE']) {
                    if (_0x5b4c29['GAME_STATE'] !== 'NIGHT') {
                        _0x5b4c29['CURRENT_TARGET'] = null;
                        _0x22079a = null;
                        _0x4715a4 = null;
                        _0x1976db = null;
                        const _0x28b65f = document['getElementById']('ability-ui');
                        if (_0x28b65f)
                            _0x28b65f['style']['display'] = 'none';
                    }
                    if (_0x5b4c29['GAME_STATE'] === 'NIGHT') {
                        _0x2bd42a['chats'] = [];
                        for (const _0x19ed8a in _0x53ec05) {
                            _0x53ec05[_0x19ed8a]['chats'] = [];
                        }
                    }
                    _0x5b4c29['LAST_STATE'] = _0x5b4c29['GAME_STATE'];
                    _0x4dea49();
                    _0x3accb7['onStateChange'](_0x5b4c29['GAME_STATE'], _0x3f098d['game']['nightAbilityOpen']);
                }
                const _0xaadfa5 = document['getElementById']('phase-ui');
                if (_0xaadfa5) {
                    _0xaadfa5['style']['display'] = 'block';
                    let _0x208eae = _0x3f098d['game']['state']['replace']('_', '\x20');
                    if (_0x3f098d['game']['state'] === 'DAY_DISCUSS') {
                        _0x208eae = 'DAY\x20' + (_0x3f098d['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x3f098d['game']['timer'] + 's';
                    } else if (_0x3f098d['game']['state'] === 'DAY_VOTE') {
                        _0x208eae = 'DAY\x20' + (_0x3f098d['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x3f098d['game']['timer'] + 's';
                    } else if (_0x3f098d['game']['state'] === 'NIGHT') {
                        const _0xe34d9e = _0x3f098d['game']['dayCount'] || 0x1;
                        if (_0x3f098d['game']['nightAbilityOpen']) {
                            _0x208eae = 'NIGHT\x20' + _0xe34d9e + '\x20ABILITY\x20PHASE';
                            const _0x399e76 = _0x3f098d['game']['abilityTimer'] !== undefined ? _0x3f098d['game']['abilityTimer'] : _0x3f098d['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x399e76 + 's';
                        } else {
                            _0x208eae = 'NIGHT\x20' + _0xe34d9e;
                            document['getElementById']('phase-timer')['innerText'] = _0x3f098d['game']['timer'] + 's';
                        }
                    }
                    document['getElementById']('phase-name')['innerText'] = _0x208eae;
                }
                if (_0x3f098d['game']['state'] === 'NIGHT') {
                    const _0x1ce25a = document['getElementById']('ability-timer-label');
                    if (_0x1ce25a) {
                        const _0x2182a0 = _0x3f098d['game']['abilityTimer'] !== undefined ? _0x3f098d['game']['abilityTimer'] : _0x3f098d['game']['timer'];
                        _0x1ce25a['innerText'] = _0x3f098d['game']['nightAbilityOpen'] ? _0x2182a0 + 's' : '';
                    }
                    if (_0x3f098d['game']['nightAbilityOpen'] && !_0x209ddb && !_0x2bd42a['isDead']) {
                        _0x209ddb = !![];
                        _0x2457a1();
                        const _0x5e0977 = document['getElementById']('ability-ui');
                        if (_0x5e0977)
                            _0x5e0977['style']['display'] = 'block';
                    }
                    if (!_0x3f098d['game']['nightAbilityOpen']) {
                        const _0x5d4518 = document['getElementById']('ability-ui');
                        if (_0x5d4518 && _0x5d4518['style']['display'] === 'block') {
                            _0x5d4518['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x209ddb = ![];
                }
                _0x35bfb4(_0x3f098d['game']);
                if (_0x3f098d['game']['roleListMode'] !== undefined) {
                    _0x5b4c29['ROLE_LIST_RAW'] = _0x3f098d['game']['roleList'] || [];
                    _0x1332d6(_0x3f098d['game']['roleList'], _0x3f098d['game']['roleListMode']);
                }
            }
        } else if (_0x3f098d['type'] === 'teleport') {
            _0x2bd42a['x'] = _0x3f098d['x'];
            _0x2bd42a['y'] = _0x3f098d['y'];
            _0x2bd42a['vx'] = 0x0;
            _0x2bd42a['vy'] = 0x0;
            _0x5b4c29['CAMERA']['x'] = null;
            if (_0x3f098d['teleportId'] !== undefined)
                _0x2ec66a = _0x3f098d['teleportId'];
        } else if (_0x3f098d['type'] === 'bulk_teleport') {
            for (const _0x52bf47 in _0x3f098d['positions']) {
                const _0x35702c = _0x3f098d['positions'][_0x52bf47];
                if (parseInt(_0x52bf47) === _0x46bccd) {
                    _0x2bd42a['x'] = _0x35702c['x'];
                    _0x2bd42a['y'] = _0x35702c['y'];
                    _0x2bd42a['vx'] = 0x0;
                    _0x2bd42a['vy'] = 0x0;
                    _0x5b4c29['CAMERA']['x'] = null;
                    continue;
                }
                const _0x2cc4bf = _0x53ec05[_0x52bf47];
                if (_0x2cc4bf) {
                    _0x2cc4bf['x'] = _0x35702c['x'];
                    _0x2cc4bf['y'] = _0x35702c['y'];
                    _0x2cc4bf['renderX'] = _0x35702c['x'];
                    _0x2cc4bf['renderY'] = _0x35702c['y'];
                    _0x2cc4bf['vx'] = 0x0;
                    _0x2cc4bf['vy'] = 0x0;
                }
            }
        } else if (_0x3f098d['type'] === 'player_left') {
            delete _0x53ec05[_0x3f098d['id']];
            _0x353bbb['delete'](parseInt(_0x3f098d['id']));
        } else if (_0x3f098d['type'] === 'map_update') {
            const _0x3d619a = _0x5b4c29['MAP']['layers']['find'](_0x392792 => _0x392792['name'] === _0x3f098d['layer']);
            if (_0x3d619a) {
                _0x3d619a['data'][_0x3f098d['row'] * _0x5b4c29['MAP']['columns'] + _0x3f098d['col']] = _0x3f098d['gid'];
                const _0x99a83f = _0x3f098d['row'] * _0x5b4c29['MAP']['columns'] + _0x3f098d['col'];
                if (_0x5b4c29['MAP']['doors'] && _0x5b4c29['MAP']['doors'][_0x99a83f]) {
                    const _0x357d67 = _0x5b4c29['MAP']['layers']['find'](_0x5c7ec4 => _0x5c7ec4['name'] === 'floor2');
                    if (_0x357d67)
                        _0x357d67['data'][_0x99a83f] = 0x2;
                }
                const _0x4e9c93 = Math['floor'](_0x3f098d['col'] * _0x5b4c29['MAP']['tileSize'] / _0x5b4c29['MAP']['chunkSize']);
                const _0x25f336 = Math['floor'](_0x3f098d['row'] * _0x5b4c29['MAP']['tileSize'] / _0x5b4c29['MAP']['chunkSize']);
                _0x2c2804(_0x4e9c93, _0x25f336);
            }
        } else if (_0x3f098d['type'] === 'role_assign') {
            _0x4ab76e = _0x3f098d['role'];
            _0x2bd42a['isDead'] = _0x4ab76e === 'Spectator';
            _0x353bbb['clear']();
            _0x5b4c29['CURRENT_TARGET'] = null;
            _0x22079a = null;
            _0x4715a4 = null;
            _0x1976db = null;
            _0x209ddb = ![];
            const _0x1cf566 = document['getElementById']('ability-ui');
            if (_0x1cf566)
                _0x1cf566['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x4ab76e;
            _0x4dea49();
            _0x511862(_0x4ab76e === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x4ab76e, !![]);
            let _0x436fdd = '';
            if (_0x4ab76e === 'Investigator')
                _0x436fdd = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x4ab76e === 'Tracker')
                _0x436fdd = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x4ab76e === 'Doctor')
                _0x436fdd = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x4ab76e === 'Archer')
                _0x436fdd = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x4ab76e === 'Escort')
                _0x436fdd = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x4ab76e === 'Vigilante')
                _0x436fdd = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x4ab76e === 'Skinwalker')
                _0x436fdd = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x4ab76e === 'Celebrity')
                _0x436fdd = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x4ab76e === 'Mayor')
                _0x436fdd = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x511862(_0x436fdd, !![]);
        } else if (_0x3f098d['type'] === 'mayor_reveal') {
            _0x353bbb['add'](parseInt(_0x3f098d['playerId']));
            _0x596431();
            _0x4dea49();
        } else if (_0x3f098d['type'] === 'rolelist_update') {
            _0x5b4c29['ROLE_LIST_RAW'] = _0x3f098d['list'] || [];
            _0x1332d6(_0x3f098d['list'], _0x3f098d['mode']);
        } else if (_0x3f098d['type'] === 'sound_event') {
            _0x3accb7['onSoundEvent'](_0x3f098d['track']);
        } else if (_0x3f098d['type'] === 'game_over') {
            _0x3accb7['onStateChange']('LOBBY', ![]);
            _0x1332d6([], 'off');
            _0x4ab76e = null;
            _0x2bd42a['isDead'] = ![];
            _0x353bbb['clear']();
            _0x5b4c29['CURRENT_TARGET'] = null;
            _0x22079a = null;
            _0x4715a4 = null;
            _0x1976db = null;
            _0x209ddb = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x4dea49();
            _0x511862('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x3f098d['type'] === 'chat_log') {
            _0x511862(_0x3f098d['sender'] + ':\x20' + _0x3f098d['text']);
        } else if (_0x3f098d['type'] === 'sys_chat') {
            _0x511862(_0x3f098d['text'], !![]);
        }
    };
}
function _0x511862(_0x5c5386, _0x5e1b69 = ![]) {
    const _0xcdeeaa = document['getElementById']('chat-log-messages');
    const _0x5ebfdb = document['getElementById']('chat-log-ui');
    const _0x9ad17e = _0x5ebfdb['scrollHeight'] - _0x5ebfdb['scrollTop'] - _0x5ebfdb['clientHeight'] < 0x1e;
    const _0x459b5a = document['createElement']('div');
    _0x459b5a['className'] = 'chat-log-line' + (_0x5e1b69 ? '\x20sys-msg' : '');
    _0x459b5a['innerText'] = _0x5c5386;
    _0xcdeeaa['appendChild'](_0x459b5a);
    if (_0x9ad17e) {
        _0x5ebfdb['scrollTop'] = _0x5ebfdb['scrollHeight'];
    }
    if (_0xcdeeaa['childElementCount'] > 0xc8) {
        _0xcdeeaa['removeChild'](_0xcdeeaa['firstChild']);
    }
}
let _0x1c1391 = -0x1, _0x25205f = -0x1, _0x4f0a69 = -0x1, _0x4637fe = 0x0;
function _0x16de87() {
    if (!_0x46bccd || !_0x98220b || _0x98220b['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x153c2a = performance['now']();
    const _0x45e6bb = _0x153c2a - _0x4637fe;
    const _0x30052c = Math['abs'](_0x2bd42a['x'] - _0x1c1391) > 0.05 || Math['abs'](_0x2bd42a['y'] - _0x25205f) > 0.05 || Math['abs'](_0x2bd42a['angle'] - _0x4f0a69) > 0.02;
    if (!_0x30052c && _0x45e6bb < 0xc8)
        return;
    if (_0x45e6bb < 0x19)
        return;
    _0x4637fe = _0x153c2a;
    _0x1c1391 = _0x2bd42a['x'];
    _0x25205f = _0x2bd42a['y'];
    _0x4f0a69 = _0x2bd42a['angle'];
    if (!_0x46bccd || !_0x98220b || _0x98220b['readyState'] !== WebSocket['OPEN'])
        return;
    _0x98220b['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x2bd42a['x'],
        'y': _0x2bd42a['y'],
        'vx': _0x2bd42a['vx'],
        'vy': _0x2bd42a['vy'],
        'angle': _0x2bd42a['angle'],
        'scale': _0x2bd42a['scale'],
        'teleportId': _0x2ec66a
    }));
}
function _0x15a362() {
    if (_0x2bd42a['isDead'])
        return;
    const _0x5c02f6 = _0x5b4c29['MAP']['layers']['find'](_0x32a6cb => _0x32a6cb['name'] === 'walls');
    if (!_0x5c02f6)
        return;
    const _0x23f28d = _0x2bd42a['scale'];
    const _0xfb1fc7 = _0x2bd42a['width'] * _0x23f28d / 0x2;
    for (let _0x257ae6 = 0x0; _0x257ae6 < 0x3; _0x257ae6++) {
        let _0x4e7be5 = _0x2bd42a['x'] + _0x2bd42a['width'] / 0x2;
        let _0xc41c4b = _0x2bd42a['y'] + _0x2bd42a['height'] / 0x2;
        const _0x462bf2 = Math['floor']((_0x4e7be5 - _0xfb1fc7) / _0x5b4c29['MAP']['tileSize']);
        const _0x277ecc = Math['floor']((_0x4e7be5 + _0xfb1fc7) / _0x5b4c29['MAP']['tileSize']);
        const _0x2b9d9d = Math['floor']((_0xc41c4b - _0xfb1fc7) / _0x5b4c29['MAP']['tileSize']);
        const _0x40651e = Math['floor']((_0xc41c4b + _0xfb1fc7) / _0x5b4c29['MAP']['tileSize']);
        for (let _0x18e471 = _0x2b9d9d; _0x18e471 <= _0x40651e; _0x18e471++) {
            for (let _0x212dd2 = _0x462bf2; _0x212dd2 <= _0x277ecc; _0x212dd2++) {
                if (_0x212dd2 < 0x0 || _0x212dd2 >= _0x5b4c29['MAP']['columns'] || _0x18e471 < 0x0 || _0x18e471 >= _0x5b4c29['MAP']['rows'])
                    continue;
                if (_0x5c02f6['data'][_0x18e471 * _0x5b4c29['MAP']['columns'] + _0x212dd2] === 0x0)
                    continue;
                const _0x5ae4e4 = _0x212dd2 * _0x5b4c29['MAP']['tileSize'];
                const _0x3d490b = _0x18e471 * _0x5b4c29['MAP']['tileSize'];
                const _0x37628c = _0x4e7be5 < _0x5ae4e4 ? _0x5ae4e4 : _0x4e7be5 > _0x5ae4e4 + _0x5b4c29['MAP']['tileSize'] ? _0x5ae4e4 + _0x5b4c29['MAP']['tileSize'] : _0x4e7be5;
                const _0x44bcb4 = _0xc41c4b < _0x3d490b ? _0x3d490b : _0xc41c4b > _0x3d490b + _0x5b4c29['MAP']['tileSize'] ? _0x3d490b + _0x5b4c29['MAP']['tileSize'] : _0xc41c4b;
                const _0x5089ea = _0x4e7be5 - _0x37628c;
                const _0xf394c8 = _0xc41c4b - _0x44bcb4;
                const _0x1afc69 = Math['sqrt'](_0x5089ea * _0x5089ea + _0xf394c8 * _0xf394c8);
                if (_0x1afc69 < _0xfb1fc7) {
                    if (_0x1afc69 === 0x0) {
                        const _0x115042 = _0x4e7be5 - _0x5ae4e4;
                        const _0x4fc075 = _0x5ae4e4 + _0x5b4c29['MAP']['tileSize'] - _0x4e7be5;
                        const _0x15d010 = _0xc41c4b - _0x3d490b;
                        const _0x5897ef = _0x3d490b + _0x5b4c29['MAP']['tileSize'] - _0xc41c4b;
                        const _0x27fa14 = Math['min'](_0x115042, _0x4fc075, _0x15d010, _0x5897ef);
                        if (_0x27fa14 === _0x115042)
                            _0x4e7be5 = _0x5ae4e4 - _0xfb1fc7;
                        else if (_0x27fa14 === _0x4fc075)
                            _0x4e7be5 = _0x5ae4e4 + _0x5b4c29['MAP']['tileSize'] + _0xfb1fc7;
                        else if (_0x27fa14 === _0x15d010)
                            _0xc41c4b = _0x3d490b - _0xfb1fc7;
                        else
                            _0xc41c4b = _0x3d490b + _0x5b4c29['MAP']['tileSize'] + _0xfb1fc7;
                    } else {
                        const _0xdb0f8c = _0xfb1fc7 - _0x1afc69;
                        _0x4e7be5 += _0x5089ea / _0x1afc69 * _0xdb0f8c;
                        _0xc41c4b += _0xf394c8 / _0x1afc69 * _0xdb0f8c;
                        const _0x1c131c = _0x2bd42a['vx'] * (_0x5089ea / _0x1afc69) + _0x2bd42a['vy'] * (_0xf394c8 / _0x1afc69);
                        if (_0x1c131c < 0x0) {
                            _0x2bd42a['vx'] -= _0x1c131c * (_0x5089ea / _0x1afc69);
                            _0x2bd42a['vy'] -= _0x1c131c * (_0xf394c8 / _0x1afc69);
                        }
                    }
                }
            }
        }
        _0x2bd42a['x'] = _0x4e7be5 - _0x2bd42a['width'] / 0x2;
        _0x2bd42a['y'] = _0xc41c4b - _0x2bd42a['height'] / 0x2;
    }
}
function _0x509e41(_0x3c2665) {
    const _0x55e5e4 = _0x5b4c29['MAP']['layers']['find'](_0x4ef518 => _0x4ef518['name'] === 'walls');
    if (!_0x55e5e4)
        return;
    const _0x39584f = _0x3c2665['width'] / 0x2;
    for (let _0x2af0b6 = 0x0; _0x2af0b6 < 0x2; _0x2af0b6++) {
        let _0x5f2398 = _0x3c2665['x'] + _0x3c2665['width'] / 0x2;
        let _0x3405a3 = _0x3c2665['y'] + _0x3c2665['height'] / 0x2;
        const _0x41644d = Math['floor']((_0x5f2398 - _0x39584f) / _0x5b4c29['MAP']['tileSize']);
        const _0x466b36 = Math['floor']((_0x5f2398 + _0x39584f) / _0x5b4c29['MAP']['tileSize']);
        const _0x2c82e1 = Math['floor']((_0x3405a3 - _0x39584f) / _0x5b4c29['MAP']['tileSize']);
        const _0x1909aa = Math['floor']((_0x3405a3 + _0x39584f) / _0x5b4c29['MAP']['tileSize']);
        for (let _0x23aa01 = _0x2c82e1; _0x23aa01 <= _0x1909aa; _0x23aa01++) {
            for (let _0x28d2f2 = _0x41644d; _0x28d2f2 <= _0x466b36; _0x28d2f2++) {
                if (_0x28d2f2 < 0x0 || _0x28d2f2 >= _0x5b4c29['MAP']['columns'] || _0x23aa01 < 0x0 || _0x23aa01 >= _0x5b4c29['MAP']['rows'])
                    continue;
                if (_0x55e5e4['data'][_0x23aa01 * _0x5b4c29['MAP']['columns'] + _0x28d2f2] === 0x0)
                    continue;
                const _0x91ed2a = _0x28d2f2 * _0x5b4c29['MAP']['tileSize'];
                const _0x15770e = _0x23aa01 * _0x5b4c29['MAP']['tileSize'];
                const _0x1c95da = _0x5f2398 < _0x91ed2a ? _0x91ed2a : _0x5f2398 > _0x91ed2a + _0x5b4c29['MAP']['tileSize'] ? _0x91ed2a + _0x5b4c29['MAP']['tileSize'] : _0x5f2398;
                const _0x350af4 = _0x3405a3 < _0x15770e ? _0x15770e : _0x3405a3 > _0x15770e + _0x5b4c29['MAP']['tileSize'] ? _0x15770e + _0x5b4c29['MAP']['tileSize'] : _0x3405a3;
                const _0x36aa28 = _0x5f2398 - _0x1c95da;
                const _0x5ef74f = _0x3405a3 - _0x350af4;
                const _0x4b54c6 = Math['sqrt'](_0x36aa28 * _0x36aa28 + _0x5ef74f * _0x5ef74f);
                if (_0x4b54c6 < _0x39584f) {
                    if (_0x4b54c6 === 0x0) {
                        const _0x569c83 = _0x5f2398 - _0x91ed2a;
                        const _0x18d3ab = _0x91ed2a + _0x5b4c29['MAP']['tileSize'] - _0x5f2398;
                        const _0xc23ba = _0x3405a3 - _0x15770e;
                        const _0x30646c = _0x15770e + _0x5b4c29['MAP']['tileSize'] - _0x3405a3;
                        const _0x443d5d = Math['min'](_0x569c83, _0x18d3ab, _0xc23ba, _0x30646c);
                        if (_0x443d5d === _0x569c83)
                            _0x5f2398 = _0x91ed2a - _0x39584f;
                        else if (_0x443d5d === _0x18d3ab)
                            _0x5f2398 = _0x91ed2a + _0x5b4c29['MAP']['tileSize'] + _0x39584f;
                        else if (_0x443d5d === _0xc23ba)
                            _0x3405a3 = _0x15770e - _0x39584f;
                        else
                            _0x3405a3 = _0x15770e + _0x5b4c29['MAP']['tileSize'] + _0x39584f;
                    } else {
                        const _0x272fc2 = _0x39584f - _0x4b54c6;
                        _0x5f2398 += _0x36aa28 / _0x4b54c6 * _0x272fc2;
                        _0x3405a3 += _0x5ef74f / _0x4b54c6 * _0x272fc2;
                    }
                }
            }
        }
        _0x3c2665['x'] = _0x5f2398 - _0x3c2665['width'] / 0x2;
        _0x3c2665['y'] = _0x3405a3 - _0x3c2665['height'] / 0x2;
    }
}
function _0x3871af(_0x18440d) {
    const _0x4cb0bb = _0x18440d['width'] / 0x2;
    for (let _0x4eb50c = 0x0; _0x4eb50c < 0x2; _0x4eb50c++) {
        let _0x32aa40 = _0x18440d['x'] + _0x18440d['width'] / 0x2;
        let _0x57b38b = _0x18440d['y'] + _0x18440d['height'] / 0x2;
        for (const _0x385768 of _0x5b4c29['ENTITIES']) {
            const _0x2313be = _0x32aa40 < _0x385768['x'] ? _0x385768['x'] : _0x32aa40 > _0x385768['x'] + _0x385768['w'] ? _0x385768['x'] + _0x385768['w'] : _0x32aa40;
            const _0x3c9451 = _0x57b38b < _0x385768['y'] ? _0x385768['y'] : _0x57b38b > _0x385768['y'] + _0x385768['h'] ? _0x385768['y'] + _0x385768['h'] : _0x57b38b;
            const _0x4224a6 = _0x32aa40 - _0x2313be;
            const _0x26518c = _0x57b38b - _0x3c9451;
            const _0x3e2560 = Math['sqrt'](_0x4224a6 * _0x4224a6 + _0x26518c * _0x26518c);
            if (_0x3e2560 < _0x4cb0bb && _0x3e2560 > 0x0) {
                const _0x1c72bb = _0x4cb0bb - _0x3e2560;
                const _0x39b8cc = _0x4224a6 / _0x3e2560;
                const _0xb1dbad = _0x26518c / _0x3e2560;
                _0x32aa40 += _0x39b8cc * _0x1c72bb;
                _0x57b38b += _0xb1dbad * _0x1c72bb;
            } else if (_0x3e2560 === 0x0) {
                const _0x5a9b74 = _0x32aa40 - _0x385768['x'];
                const _0x33549b = _0x385768['x'] + _0x385768['w'] - _0x32aa40;
                const _0x56510e = _0x57b38b - _0x385768['y'];
                const _0x3ba717 = _0x385768['y'] + _0x385768['h'] - _0x57b38b;
                const _0x1b7291 = Math['min'](_0x5a9b74, _0x33549b, _0x56510e, _0x3ba717);
                if (_0x1b7291 === _0x5a9b74)
                    _0x32aa40 = _0x385768['x'] - _0x4cb0bb;
                else if (_0x1b7291 === _0x33549b)
                    _0x32aa40 = _0x385768['x'] + _0x385768['w'] + _0x4cb0bb;
                else if (_0x1b7291 === _0x56510e)
                    _0x57b38b = _0x385768['y'] - _0x4cb0bb;
                else
                    _0x57b38b = _0x385768['y'] + _0x385768['h'] + _0x4cb0bb;
            }
        }
        _0x18440d['x'] = _0x32aa40 - _0x18440d['width'] / 0x2;
        _0x18440d['y'] = _0x57b38b - _0x18440d['height'] / 0x2;
    }
}
function _0x44c4fb() {
    if (_0x2bd42a['isDead'])
        return;
    const _0x2b0846 = _0x2bd42a['width'] / 0x2;
    const _0x354455 = _0x2bd42a['x'] + _0x2bd42a['width'] / 0x2;
    const _0x193f87 = _0x2bd42a['y'] + _0x2bd42a['height'] / 0x2;
    for (const _0x2b6878 in _0x53ec05) {
        const _0x456d40 = _0x53ec05[_0x2b6878];
        if (_0x456d40['isDead'])
            continue;
        const _0x45e99a = _0x456d40['width'] / 0x2;
        const _0x4e3ee0 = _0x2b0846 + _0x45e99a;
        const _0x13a2ad = (_0x456d40['renderX'] ?? _0x456d40['x']) + _0x456d40['width'] / 0x2;
        const _0x544357 = (_0x456d40['renderY'] ?? _0x456d40['y']) + _0x456d40['height'] / 0x2;
        const _0x401659 = _0x354455 - _0x13a2ad;
        const _0x3a8529 = _0x193f87 - _0x544357;
        const _0xe08e8f = Math['sqrt'](_0x401659 * _0x401659 + _0x3a8529 * _0x3a8529);
        if (_0xe08e8f > 0x0 && _0xe08e8f < _0x4e3ee0) {
            const _0x5caa8c = _0x4e3ee0 - _0xe08e8f;
            const _0x167f81 = _0x401659 / _0xe08e8f;
            const _0x2ec1ae = _0x3a8529 / _0xe08e8f;
            _0x2bd42a['x'] += _0x167f81 * (_0x5caa8c * 0.25);
            _0x2bd42a['y'] += _0x2ec1ae * (_0x5caa8c * 0.25);
            _0x456d40['x'] -= _0x167f81 * (_0x5caa8c * 0.75);
            _0x456d40['y'] -= _0x2ec1ae * (_0x5caa8c * 0.75);
            _0x509e41(_0x456d40);
            _0x3871af(_0x456d40);
            if (_0x456d40['renderX'] !== undefined) {
                _0x456d40['renderX'] = _0x456d40['x'];
                _0x456d40['renderY'] = _0x456d40['y'];
            }
            const _0x5710f1 = _0x2bd42a['vx'] * _0x167f81 + _0x2bd42a['vy'] * _0x2ec1ae;
            if (_0x5710f1 < 0x0) {
                _0x2bd42a['vx'] -= _0x5710f1 * _0x167f81 * 0.25;
                _0x2bd42a['vy'] -= _0x5710f1 * _0x2ec1ae * 0.25;
            }
        }
    }
    _0x15a362();
    _0x31f6a6();
}
function _0x31f6a6() {
    if (_0x2bd42a['isDead'])
        return;
    const _0x56c256 = _0x2bd42a['scale'];
    const _0x485927 = _0x2bd42a['width'] * _0x56c256 / 0x2;
    for (let _0x54c5cf = 0x0; _0x54c5cf < 0x2; _0x54c5cf++) {
        let _0x54cd41 = _0x2bd42a['x'] + _0x2bd42a['width'] / 0x2;
        let _0x2f6a19 = _0x2bd42a['y'] + _0x2bd42a['height'] / 0x2;
        for (const _0xe363dd of _0x5b4c29['ENTITIES']) {
            const _0x4eebba = _0x54cd41 < _0xe363dd['x'] ? _0xe363dd['x'] : _0x54cd41 > _0xe363dd['x'] + _0xe363dd['w'] ? _0xe363dd['x'] + _0xe363dd['w'] : _0x54cd41;
            const _0x355945 = _0x2f6a19 < _0xe363dd['y'] ? _0xe363dd['y'] : _0x2f6a19 > _0xe363dd['y'] + _0xe363dd['h'] ? _0xe363dd['y'] + _0xe363dd['h'] : _0x2f6a19;
            const _0x1ebfc6 = _0x54cd41 - _0x4eebba;
            const _0x49d053 = _0x2f6a19 - _0x355945;
            const _0x58c738 = Math['sqrt'](_0x1ebfc6 * _0x1ebfc6 + _0x49d053 * _0x49d053);
            if (_0x58c738 < _0x485927 && _0x58c738 > 0x0) {
                const _0x1fc023 = _0x485927 - _0x58c738;
                const _0x26ae82 = _0x1ebfc6 / _0x58c738;
                const _0x45792e = _0x49d053 / _0x58c738;
                _0x54cd41 += _0x26ae82 * _0x1fc023;
                _0x2f6a19 += _0x45792e * _0x1fc023;
                const _0x4c5292 = _0x2bd42a['vx'] * _0x26ae82 + _0x2bd42a['vy'] * _0x45792e;
                if (_0x4c5292 < 0x0) {
                    _0x2bd42a['vx'] -= _0x4c5292 * _0x26ae82;
                    _0x2bd42a['vy'] -= _0x4c5292 * _0x45792e;
                }
            } else if (_0x58c738 === 0x0) {
                const _0x5be956 = _0x54cd41 - _0xe363dd['x'];
                const _0x4ad791 = _0xe363dd['x'] + _0xe363dd['w'] - _0x54cd41;
                const _0x243bbc = _0x2f6a19 - _0xe363dd['y'];
                const _0x234d01 = _0xe363dd['y'] + _0xe363dd['h'] - _0x2f6a19;
                const _0x31b6a7 = Math['min'](_0x5be956, _0x4ad791, _0x243bbc, _0x234d01);
                if (_0x31b6a7 === _0x5be956)
                    _0x54cd41 = _0xe363dd['x'] - _0x485927;
                else if (_0x31b6a7 === _0x4ad791)
                    _0x54cd41 = _0xe363dd['x'] + _0xe363dd['w'] + _0x485927;
                else if (_0x31b6a7 === _0x243bbc)
                    _0x2f6a19 = _0xe363dd['y'] - _0x485927;
                else
                    _0x2f6a19 = _0xe363dd['y'] + _0xe363dd['h'] + _0x485927;
            }
        }
        _0x2bd42a['x'] = _0x54cd41 - _0x2bd42a['width'] / 0x2;
        _0x2bd42a['y'] = _0x2f6a19 - _0x2bd42a['height'] / 0x2;
    }
}
function _0x16d957(_0x414941, _0x11f1fa) {
    const _0x558186 = _0x5b4c29['MAP']['layers']['find'](_0xcff2ed => _0xcff2ed['name'] === 'trees');
    if (!_0x558186)
        return ![];
    const _0x375770 = Math['floor'](_0x414941 / _0x5b4c29['MAP']['tileSize']);
    const _0x2d428a = Math['floor'](_0x11f1fa / _0x5b4c29['MAP']['tileSize']);
    if (_0x375770 < 0x0 || _0x375770 >= _0x5b4c29['MAP']['columns'] || _0x2d428a < 0x0 || _0x2d428a >= _0x5b4c29['MAP']['rows'])
        return ![];
    return _0x558186['data'][_0x2d428a * _0x5b4c29['MAP']['columns'] + _0x375770] === 0xb;
}
let _0x30d34c = null;
function _0x2840d7() {
    const _0x4e1606 = _0x5b4c29['MAP'];
    const _0x101d94 = _0x4e1606['layers']['find'](_0x468744 => _0x468744['name'] === 'floor2');
    const _0x5eef32 = _0x4e1606['layers']['find'](_0x9cccb0 => _0x9cccb0['name'] === 'walls');
    if (!_0x101d94 || !_0x5eef32) {
        _0x30d34c = null;
        return;
    }
    const _0x138a8d = _0x4e1606['columns'];
    const _0x1a5b90 = _0x4e1606['rows'];
    const _0x4cb800 = [];
    const _0x2420fd = [];
    const _0x549b77 = new Set();
    for (let _0x110277 = 0x0; _0x110277 < _0x1a5b90; _0x110277++) {
        for (let _0x5177e0 = 0x0; _0x5177e0 < _0x138a8d; _0x5177e0++) {
            const _0x4e49bf = _0x110277 * _0x138a8d + _0x5177e0;
            const _0x38239d = _0x101d94['data'][_0x4e49bf];
            const _0x5c2005 = _0x5eef32['data'][_0x4e49bf];
            if (_0x38239d === 0x2 || _0x38239d === 0x4) {
                _0x4cb800['push']({
                    'c': _0x5177e0,
                    'r': _0x110277
                });
                if (_0x5c2005 !== 0x0)
                    _0x2420fd['push']({
                        'c': _0x5177e0,
                        'r': _0x110277
                    });
            }
            if (_0x5c2005 !== 0x0)
                _0x549b77['add'](_0x5177e0 + ',' + _0x110277);
        }
    }
    const _0x51d662 = new Set(_0x4cb800['map'](_0x51c8fb => _0x51c8fb['c'] + ',' + _0x51c8fb['r']));
    const _0x1c912c = [
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
                c: _0x2443b1,
                r: _0x16cd6a
            } of _0x4cb800) {
        for (const [_0x27cf95, _0x109076] of _0x1c912c) {
            const _0x1c4b9d = _0x2443b1 + _0x27cf95, _0x484ca0 = _0x16cd6a + _0x109076;
            const _0x3c982e = _0x1c4b9d + ',' + _0x484ca0;
            if (!_0x51d662['has'](_0x3c982e))
                _0x549b77['add'](_0x3c982e);
        }
    }
    _0x30d34c = {
        'wallSet': _0x549b77,
        'floorTiles': _0x4cb800,
        'wallTiles': _0x2420fd,
        'interiorSet': _0x51d662
    };
}
function _0x424eb8() {
    const _0x4b3dbf = _0x5b4c29['MAP']['layers']['find'](_0x1862d7 => _0x1862d7['name'] === 'floor2');
    if (!_0x4b3dbf)
        return ![];
    const _0x1a0251 = Math['floor']((_0x2bd42a['x'] + _0x2bd42a['width'] / 0x2) / _0x5b4c29['MAP']['tileSize']);
    const _0x31a074 = Math['floor']((_0x2bd42a['y'] + _0x2bd42a['height'] / 0x2) / _0x5b4c29['MAP']['tileSize']);
    if (_0x1a0251 < 0x0 || _0x1a0251 >= _0x5b4c29['MAP']['columns'] || _0x31a074 < 0x0 || _0x31a074 >= _0x5b4c29['MAP']['rows'])
        return ![];
    const _0x39162e = _0x4b3dbf['data'][_0x31a074 * _0x5b4c29['MAP']['columns'] + _0x1a0251];
    return _0x39162e === 0x2;
}
function _0x318e84() {
    if (_0x2bd42a['isDead']) {
        _0x5b4c29['SHADOW']['polygon'] = null;
        return;
    }
    const _0x507786 = _0x5b4c29['MAP'];
    const _0x4638bc = _0x5b4c29['SHADOW'];
    const _0x51e57b = _0x507786['tileSize'];
    if (!_0x30d34c)
        _0x2840d7();
    if (!_0x30d34c) {
        _0x4638bc['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x635973,
        floorTiles: _0x8e7c9
    } = _0x30d34c;
    if (_0x8e7c9['length'] === 0x0) {
        _0x4638bc['polygon'] = null;
        return;
    }
    if (!_0x424eb8()) {
        _0x4638bc['polygon'] = null;
        return;
    }
    const _0x425e6b = _0x2bd42a['x'] + _0x2bd42a['width'] / 0x2;
    const _0x5a052f = _0x2bd42a['y'] + _0x2bd42a['height'] / 0x2;
    if (!_0x30d34c['_bounds']) {
        let _0x10300d = Infinity, _0x5b3f62 = -Infinity, _0x755a4c = Infinity, _0x1853ca = -Infinity;
        for (const {
                    c: _0x4e5eb0,
                    r: _0x55c954
                } of _0x8e7c9) {
            if (_0x4e5eb0 < _0x10300d)
                _0x10300d = _0x4e5eb0;
            if (_0x4e5eb0 > _0x5b3f62)
                _0x5b3f62 = _0x4e5eb0;
            if (_0x55c954 < _0x755a4c)
                _0x755a4c = _0x55c954;
            if (_0x55c954 > _0x1853ca)
                _0x1853ca = _0x55c954;
        }
        _0x30d34c['_bounds'] = {
            'minC': Math['max'](0x0, _0x10300d - 0x1),
            'maxC': Math['min'](_0x507786['columns'] - 0x1, _0x5b3f62 + 0x1),
            'minR': Math['max'](0x0, _0x755a4c - 0x1),
            'maxR': Math['min'](_0x507786['rows'] - 0x1, _0x1853ca + 0x1)
        };
        const _0x88d9fe = [];
        for (let _0x45025c = _0x30d34c['_bounds']['minR']; _0x45025c <= _0x30d34c['_bounds']['maxR']; _0x45025c++) {
            for (let _0x5ac8db = _0x30d34c['_bounds']['minC']; _0x5ac8db <= _0x30d34c['_bounds']['maxC']; _0x5ac8db++) {
                if (_0x635973['has'](_0x5ac8db + ',' + _0x45025c))
                    _0x88d9fe['push'](_0x5ac8db, _0x45025c);
            }
        }
        _0x30d34c['_wallArr'] = _0x88d9fe;
    }
    const {
        minC: _0x506de1,
        maxC: _0x2da602,
        minR: _0x5f502b,
        maxR: _0x49393e
    } = _0x30d34c['_bounds'];
    const _0x4817d3 = _0x30d34c['_wallArr'];
    const _0x5e2659 = 0.0001;
    const _0x1efba8 = new Set();
    const _0x531829 = [];
    for (let _0x2fa905 = 0x0; _0x2fa905 < _0x4817d3['length']; _0x2fa905 += 0x2) {
        const _0x12afde = _0x4817d3[_0x2fa905], _0x5a5894 = _0x4817d3[_0x2fa905 + 0x1];
        const _0x1aab57 = [
            _0x12afde * _0x51e57b,
            _0x5a5894 * _0x51e57b,
            _0x12afde * _0x51e57b + _0x51e57b,
            _0x5a5894 * _0x51e57b,
            _0x12afde * _0x51e57b,
            _0x5a5894 * _0x51e57b + _0x51e57b,
            _0x12afde * _0x51e57b + _0x51e57b,
            _0x5a5894 * _0x51e57b + _0x51e57b
        ];
        for (let _0x53c0ff = 0x0; _0x53c0ff < _0x1aab57['length']; _0x53c0ff += 0x2) {
            const _0x4a9e59 = _0x1aab57[_0x53c0ff], _0x178057 = _0x1aab57[_0x53c0ff + 0x1];
            const _0x549a06 = Math['atan2'](_0x178057 - _0x5a052f, _0x4a9e59 - _0x425e6b);
            const _0x27f73b = Math['round'](_0x549a06 * 0x4e20);
            if (!_0x1efba8['has'](_0x27f73b - 0x1)) {
                _0x1efba8['add'](_0x27f73b - 0x1);
                _0x531829['push'](_0x549a06 - _0x5e2659);
            }
            if (!_0x1efba8['has'](_0x27f73b)) {
                _0x1efba8['add'](_0x27f73b);
                _0x531829['push'](_0x549a06);
            }
            if (!_0x1efba8['has'](_0x27f73b + 0x1)) {
                _0x1efba8['add'](_0x27f73b + 0x1);
                _0x531829['push'](_0x549a06 + _0x5e2659);
            }
        }
    }
    _0x531829['sort']((_0x5602bc, _0xd20368) => _0x5602bc - _0xd20368);
    const _0x237409 = Math['hypot']((_0x2da602 - _0x506de1 + 0x2) * _0x51e57b, (_0x49393e - _0x5f502b + 0x2) * _0x51e57b);
    const _0xe8ee71 = _0xe9bc6e => {
        const _0x3bceab = Math['cos'](_0xe9bc6e);
        const _0x57125d = Math['sin'](_0xe9bc6e);
        let _0x2e7753 = _0x237409;
        for (let _0x5dc42c = 0x0; _0x5dc42c < _0x4817d3['length']; _0x5dc42c += 0x2) {
            const _0x15e7df = _0x4817d3[_0x5dc42c], _0x181dfd = _0x4817d3[_0x5dc42c + 0x1];
            const _0x3b47c9 = _0x15e7df * _0x51e57b, _0x282300 = _0x181dfd * _0x51e57b;
            const _0x32e04f = _0x3b47c9 + _0x51e57b, _0x31f6e0 = _0x282300 + _0x51e57b;
            const _0x54fcb4 = _0x3b47c9 + _0x51e57b * 0.5, _0x5e7677 = _0x282300 + _0x51e57b * 0.5;
            const _0x560f85 = Math['abs'](_0x54fcb4 - _0x425e6b) + Math['abs'](_0x5e7677 - _0x5a052f);
            if (_0x560f85 > _0x2e7753 + _0x51e57b * 1.5)
                continue;
            let _0x515548, _0x15b5aa, _0x2dc40a;
            _0x515548 = -_0x57125d * _0x51e57b;
            if (Math['abs'](_0x515548) >= 1e-10) {
                _0x15b5aa = -(_0x282300 - _0x5a052f) * _0x51e57b / _0x515548;
                _0x2dc40a = ((_0x3b47c9 - _0x425e6b) * _0x57125d - (_0x282300 - _0x5a052f) * _0x3bceab) / _0x515548;
                if (_0x15b5aa > 0.001 && _0x2dc40a >= 0x0 && _0x2dc40a <= 0x1 && _0x15b5aa < _0x2e7753)
                    _0x2e7753 = _0x15b5aa;
            }
            _0x515548 = _0x3bceab * _0x51e57b;
            if (Math['abs'](_0x515548) >= 1e-10) {
                _0x15b5aa = (_0x32e04f - _0x425e6b) * _0x51e57b / _0x515548;
                _0x2dc40a = ((_0x32e04f - _0x425e6b) * _0x57125d - (_0x282300 - _0x5a052f) * _0x3bceab) / _0x515548;
                if (_0x15b5aa > 0.001 && _0x2dc40a >= 0x0 && _0x2dc40a <= 0x1 && _0x15b5aa < _0x2e7753)
                    _0x2e7753 = _0x15b5aa;
            }
            _0x515548 = _0x57125d * _0x51e57b;
            if (Math['abs'](_0x515548) >= 1e-10) {
                _0x15b5aa = (_0x31f6e0 - _0x5a052f) * _0x51e57b / _0x515548;
                _0x2dc40a = ((_0x32e04f - _0x425e6b) * _0x57125d - (_0x31f6e0 - _0x5a052f) * _0x3bceab) / _0x515548;
                if (_0x15b5aa > 0.001 && _0x2dc40a >= 0x0 && _0x2dc40a <= 0x1 && _0x15b5aa < _0x2e7753)
                    _0x2e7753 = _0x15b5aa;
            }
            _0x515548 = -_0x3bceab * _0x51e57b;
            if (Math['abs'](_0x515548) >= 1e-10) {
                _0x15b5aa = -(_0x3b47c9 - _0x425e6b) * _0x51e57b / _0x515548;
                _0x2dc40a = ((_0x3b47c9 - _0x425e6b) * _0x57125d - (_0x31f6e0 - _0x5a052f) * _0x3bceab) / _0x515548;
                if (_0x15b5aa > 0.001 && _0x2dc40a >= 0x0 && _0x2dc40a <= 0x1 && _0x15b5aa < _0x2e7753)
                    _0x2e7753 = _0x15b5aa;
            }
        }
        const _0x156d49 = _0x2e7753 < _0x237409 ? _0x2e7753 + 0x8 : _0x2e7753;
        return {
            'x': _0x425e6b + _0x3bceab * _0x156d49,
            'y': _0x5a052f + _0x57125d * _0x156d49
        };
    };
    const _0x525f21 = [];
    for (let _0x403cc4 = 0x0; _0x403cc4 < _0x531829['length']; _0x403cc4++) {
        const _0x177eef = _0xe8ee71(_0x531829[_0x403cc4]);
        _0x525f21['push'](_0x177eef['x'], _0x177eef['y']);
    }
    _0x4638bc['polygon'] = _0x525f21['length'] >= 0x6 ? new Float32Array(_0x525f21) : null;
}
function _0x4c30b9(_0x61688d, _0x240b19, _0x2af97d) {
    if (_0x2bd42a['isDead'])
        return;
    if (!_0x30d34c)
        return;
    const {
        floorTiles: _0x217085,
        wallTiles: _0x5e1ee2
    } = _0x30d34c;
    if (_0x217085['length'] === 0x0)
        return;
    const _0x53d8a3 = _0x5b4c29['SHADOW'];
    const _0x4c4066 = _0x5b4c29['MAP']['tileSize'];
    const _0x1e98ca = _0x5b4c29['CAMERA']['width'];
    const _0x494519 = _0x5b4c29['CAMERA']['height'];
    if (!_0x5b4c29['SHADOW']['_buf'] || _0x5b4c29['SHADOW']['_buf']['width'] !== _0x1e98ca || _0x5b4c29['SHADOW']['_buf']['height'] !== _0x494519) {
        _0x5b4c29['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x5b4c29['SHADOW']['_buf']['width'] = _0x1e98ca;
        _0x5b4c29['SHADOW']['_buf']['height'] = _0x494519;
    }
    const _0x5708d3 = _0x5b4c29['SHADOW']['_buf'];
    const _0x182e20 = _0x5708d3['getContext']('2d');
    _0x182e20['clearRect'](0x0, 0x0, _0x1e98ca, _0x494519);
    _0x182e20['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x182e20['beginPath']();
    for (const {
                c: _0x247d94,
                r: _0x5ebe35
            } of _0x217085) {
        const _0x47b216 = Math['floor'](_0x247d94 * _0x4c4066 - _0x240b19), _0x3650d = Math['floor'](_0x5ebe35 * _0x4c4066 - _0x2af97d);
        if (_0x47b216 > _0x1e98ca || _0x3650d > _0x494519 || _0x47b216 + _0x4c4066 < 0x0 || _0x3650d + _0x4c4066 < 0x0)
            continue;
        _0x182e20['rect'](_0x47b216 - 0x1, _0x3650d - 0x1, _0x4c4066 + 0x2, _0x4c4066 + 0x2);
    }
    _0x182e20['fill']();
    if (_0x5e1ee2['length'] > 0x0) {
        _0x182e20['globalCompositeOperation'] = 'destination-out';
        _0x182e20['fillStyle'] = 'rgba(0,0,0,1)';
        _0x182e20['beginPath']();
        for (const {
                    c: _0x7e3d7,
                    r: _0x514646
                } of _0x5e1ee2) {
            const _0x262625 = Math['floor'](_0x7e3d7 * _0x4c4066 - _0x240b19), _0x1ffe84 = Math['floor'](_0x514646 * _0x4c4066 - _0x2af97d);
            if (_0x262625 > _0x1e98ca || _0x1ffe84 > _0x494519 || _0x262625 + _0x4c4066 < 0x0 || _0x1ffe84 + _0x4c4066 < 0x0)
                continue;
            _0x182e20['rect'](_0x262625 - 0x1, _0x1ffe84 - 0x1, _0x4c4066 + 0x2, _0x4c4066 + 0x2);
        }
        _0x182e20['fill']();
        _0x182e20['globalCompositeOperation'] = 'source-over';
    }
    if (_0x53d8a3['polygon'] && _0x53d8a3['polygon']['length'] >= 0x6) {
        _0x182e20['globalCompositeOperation'] = 'destination-out';
        _0x182e20['beginPath']();
        const _0x5de123 = _0x53d8a3['polygon'];
        _0x182e20['moveTo'](_0x5de123[0x0] - _0x240b19, _0x5de123[0x1] - _0x2af97d);
        for (let _0x274a55 = 0x2; _0x274a55 < _0x5de123['length']; _0x274a55 += 0x2) {
            _0x182e20['lineTo'](_0x5de123[_0x274a55] - _0x240b19, _0x5de123[_0x274a55 + 0x1] - _0x2af97d);
        }
        _0x182e20['closePath']();
        _0x182e20['fill']();
        _0x182e20['globalCompositeOperation'] = 'source-over';
    }
    _0x61688d['drawImage'](_0x5708d3, 0x0, 0x0);
}
function _0x4b7b78(_0x43e51c) {
    let _0x313590 = 0x0, _0x69ed80 = 0x0;
    const _0x4055ec = _0x5b4c29['INPUTS']['mouseX'] / _0x5b4c29['SYSTEM']['viewScale'];
    const _0x151406 = _0x5b4c29['INPUTS']['mouseY'] / _0x5b4c29['SYSTEM']['viewScale'];
    const _0x12b6d4 = _0x2bd42a['x'] - _0x5b4c29['CAMERA']['x'] + _0x2bd42a['width'] / 0x2;
    const _0x2a82fc = _0x2bd42a['y'] - _0x5b4c29['CAMERA']['y'] + _0x2bd42a['height'] / 0x2;
    const _0x559835 = Math['atan2'](_0x151406 - _0x2a82fc, _0x4055ec - _0x12b6d4);
    if (_0x5e00ed !== 0x0 || _0x59c0aa !== 0x0) {
        _0x313590 = _0x5e00ed;
        _0x69ed80 = _0x59c0aa;
    } else if (_0x295f8d) {
        let _0x1eff2c = 0x0, _0x21e6cf = 0x0;
        if (_0x5b4c29['INPUTS']['keys']['w'] || _0x5b4c29['INPUTS']['keys']['arrowup'])
            _0x1eff2c += 0x1;
        if (_0x5b4c29['INPUTS']['keys']['s'] || _0x5b4c29['INPUTS']['keys']['arrowdown'])
            _0x1eff2c -= 0x1;
        if (_0x5b4c29['INPUTS']['keys']['d'] || _0x5b4c29['INPUTS']['keys']['arrowright'])
            _0x21e6cf += 0x1;
        if (_0x5b4c29['INPUTS']['keys']['a'] || _0x5b4c29['INPUTS']['keys']['arrowleft'])
            _0x21e6cf -= 0x1;
        if (_0x1eff2c !== 0x0 || _0x21e6cf !== 0x0) {
            const _0x2c0c0d = _0x559835 + Math['atan2'](_0x21e6cf, _0x1eff2c);
            _0x313590 = Math['cos'](_0x2c0c0d);
            _0x69ed80 = Math['sin'](_0x2c0c0d);
        }
    } else {
        if (_0x5b4c29['INPUTS']['keys']['w'] || _0x5b4c29['INPUTS']['keys']['arrowup'])
            _0x69ed80 -= 0x1;
        if (_0x5b4c29['INPUTS']['keys']['s'] || _0x5b4c29['INPUTS']['keys']['arrowdown'])
            _0x69ed80 += 0x1;
        if (_0x5b4c29['INPUTS']['keys']['a'] || _0x5b4c29['INPUTS']['keys']['arrowleft'])
            _0x313590 -= 0x1;
        if (_0x5b4c29['INPUTS']['keys']['d'] || _0x5b4c29['INPUTS']['keys']['arrowright'])
            _0x313590 += 0x1;
        const _0x1ef6f7 = _0x313590 !== 0x0 || _0x69ed80 !== 0x0;
        if (_0x1ef6f7) {
            const _0x5a754e = Math['sqrt'](_0x313590 * _0x313590 + _0x69ed80 * _0x69ed80);
            _0x313590 /= _0x5a754e;
            _0x69ed80 /= _0x5a754e;
        }
    }
    if (_0x5b4c29['GAME_STATE'] === 'NIGHT' && _0x4ab76e === 'Skinwalker') {
        if (_0x5b4c29['NIGHT_ABILITY_OPEN'] || !_0x5b4c29['CURRENT_TARGET']) {
            _0x313590 = 0x0;
            _0x69ed80 = 0x0;
            _0x2bd42a['vx'] = 0x0;
            _0x2bd42a['vy'] = 0x0;
            _0x2bd42a['x'] = _0x5b4c29['MAP']['columns'] * _0x5b4c29['MAP']['tileSize'] / 0x2 - _0x2bd42a['width'] / 0x2;
            _0x2bd42a['y'] = _0x5b4c29['MAP']['rows'] * _0x5b4c29['MAP']['tileSize'] / 0x2 - _0x2bd42a['height'] / 0x2;
        }
    }
    const _0x29fd26 = _0x313590 !== 0x0 || _0x69ed80 !== 0x0;
    const _0x39a673 = (_0x5b4c29['INPUTS']['keys']['shift'] || _0x3c8cba || _0x1cad30) && _0x29fd26;
    _0x2bd42a['bopTimer'] = _0x39a673 ? _0x2bd42a['bopTimer'] + _0x43e51c : 0x0;
    _0x2bd42a['scale'] = 0x1 + (_0x2bd42a['bopTimer'] > 0x0 ? Math['sin'](_0x2bd42a['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x3c28d0 = Math['pow'](0.001, _0x43e51c);
    const _0x3d8b00 = _0x39a673 ? 0x74a : 0x5d5;
    _0x2bd42a['vx'] += _0x313590 * _0x3d8b00 * _0x43e51c;
    _0x2bd42a['vy'] += _0x69ed80 * _0x3d8b00 * _0x43e51c;
    _0x2bd42a['vx'] *= _0x3c28d0;
    _0x2bd42a['vy'] *= _0x3c28d0;
    _0x2bd42a['x'] += _0x2bd42a['vx'] * _0x43e51c;
    _0x2bd42a['y'] += _0x2bd42a['vy'] * _0x43e51c;
    for (let _0x26c388 = 0x0; _0x26c388 < 0x3; _0x26c388++)
        _0x15a362();
    for (let _0x8436d1 = 0x0; _0x8436d1 < 0x2; _0x8436d1++)
        _0x31f6a6();
    for (let _0x2c403f = 0x0; _0x2c403f < 0x2; _0x2c403f++)
        _0x44c4fb();
    if (_0x2bd42a['x'] < 0x0)
        _0x2bd42a['x'] = 0x0;
    if (_0x2bd42a['y'] < 0x0)
        _0x2bd42a['y'] = 0x0;
    if (_0x2bd42a['x'] + _0x2bd42a['width'] > _0x5b4c29['MAP']['columns'] * _0x5b4c29['MAP']['tileSize'])
        _0x2bd42a['x'] = _0x5b4c29['MAP']['columns'] * _0x5b4c29['MAP']['tileSize'] - _0x2bd42a['width'];
    if (_0x2bd42a['y'] + _0x2bd42a['height'] > _0x5b4c29['MAP']['rows'] * _0x5b4c29['MAP']['tileSize'])
        _0x2bd42a['y'] = _0x5b4c29['MAP']['rows'] * _0x5b4c29['MAP']['tileSize'] - _0x2bd42a['height'];
    if (_0x3a7cd3) {
        _0x2bd42a['angle'] = _0x52f803 + Math['PI'] / 0x2;
    } else if (_0x5e00ed !== 0x0 || _0x59c0aa !== 0x0) {
        _0x2bd42a['angle'] = Math['atan2'](_0x59c0aa, _0x5e00ed) + Math['PI'] / 0x2;
    } else if (!_0x4a6bf2) {
        _0x2bd42a['angle'] = _0x559835 + Math['PI'] / 0x2;
    }
    const _0x5c757f = _0x2bd42a['x'] + _0x2bd42a['width'] / 0x2 - _0x5b4c29['CAMERA']['width'] / 0x2;
    const _0x575dec = _0x2bd42a['y'] + _0x2bd42a['height'] / 0x2 - _0x5b4c29['CAMERA']['height'] / 0x2;
    if (_0x5b4c29['CAMERA']['x'] === null || isNaN(_0x5b4c29['CAMERA']['x']) || !isFinite(_0x5b4c29['CAMERA']['x'])) {
        _0x5b4c29['CAMERA']['x'] = _0x5c757f;
        _0x5b4c29['CAMERA']['y'] = _0x575dec;
    } else {
        const _0x31fc86 = 0x1 - Math['exp'](-Math['max'](0x0, _0x43e51c) * 0x28);
        _0x5b4c29['CAMERA']['x'] += (_0x5c757f - _0x5b4c29['CAMERA']['x']) * _0x31fc86;
        _0x5b4c29['CAMERA']['y'] += (_0x575dec - _0x5b4c29['CAMERA']['y']) * _0x31fc86;
    }
    for (const _0x38a181 in _0x53ec05) {
        const _0x87a0c6 = _0x53ec05[_0x38a181];
        if (_0x87a0c6['renderX'] === undefined) {
            _0x87a0c6['renderX'] = _0x87a0c6['x'];
            _0x87a0c6['renderY'] = _0x87a0c6['y'];
            _0x87a0c6['renderAngle'] = _0x87a0c6['angle'] || 0x0;
        }
        const _0x399f03 = 0.25;
        const _0xd7aebc = _0x87a0c6['x'] - _0x87a0c6['renderX'], _0x275250 = _0x87a0c6['y'] - _0x87a0c6['renderY'];
        const _0x2d3ca7 = Math['sqrt'](_0xd7aebc * _0xd7aebc + _0x275250 * _0x275250);
        const _0x481a15 = 0xb4;
        if (_0x2d3ca7 > _0x481a15) {
            _0x87a0c6['renderX'] = _0x87a0c6['x'] - _0xd7aebc / _0x2d3ca7 * _0x481a15;
            _0x87a0c6['renderY'] = _0x87a0c6['y'] - _0x275250 / _0x2d3ca7 * _0x481a15;
        }
        _0x87a0c6['renderX'] += (_0x87a0c6['x'] - _0x87a0c6['renderX']) * _0x399f03;
        _0x87a0c6['renderY'] += (_0x87a0c6['y'] - _0x87a0c6['renderY']) * _0x399f03;
        let _0x1dd2ac = (_0x87a0c6['angle'] || 0x0) - _0x87a0c6['renderAngle'];
        while (_0x1dd2ac < -Math['PI'])
            _0x1dd2ac += Math['PI'] * 0x2;
        while (_0x1dd2ac > Math['PI'])
            _0x1dd2ac -= Math['PI'] * 0x2;
        _0x87a0c6['renderAngle'] += _0x1dd2ac * 0.3;
    }
    if (_0x5b4c29['GAME_STATE'] === 'NIGHT') {
        _0x1d8d27 = Math['min'](0.6, _0x1d8d27 + _0x43e51c * 0.5);
    } else {
        _0x1d8d27 = Math['max'](0x0, _0x1d8d27 - _0x43e51c * 0.5);
    }
    _0x318e84();
    _0x16de87();
}
function _0x3536ba(_0x593641, _0x492aaa, _0x123b50, _0x42247a, _0x14c3af = !![]) {
    _0x593641['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x3daf68 = _0x593641['measureText'](_0x492aaa)['width'];
    const _0x1f1564 = _0x3daf68 + 0x18;
    const _0x58a98a = 0x1c;
    _0x593641['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x593641['beginPath']();
    if (_0x593641['roundRect']) {
        _0x593641['roundRect'](_0x123b50 - _0x1f1564 / 0x2, _0x42247a - _0x58a98a, _0x1f1564, _0x58a98a, 0x6);
    } else {
        _0x593641['rect'](_0x123b50 - _0x1f1564 / 0x2, _0x42247a - _0x58a98a, _0x1f1564, _0x58a98a);
    }
    _0x593641['fill']();
    if (_0x14c3af) {
        _0x593641['beginPath']();
        _0x593641['moveTo'](_0x123b50 - 0x6, _0x42247a);
        _0x593641['lineTo'](_0x123b50 + 0x6, _0x42247a);
        _0x593641['lineTo'](_0x123b50, _0x42247a + 0x6);
        _0x593641['fill']();
    }
    _0x593641['fillStyle'] = '#ffffff';
    _0x593641['textAlign'] = 'center';
    _0x593641['textBaseline'] = 'middle';
    _0x593641['fillText'](_0x492aaa, _0x123b50, _0x42247a - _0x58a98a / 0x2 + 0x1);
}
function _0x5207ec(_0x39ff0f, _0x3440cc, _0xf8cddb, _0x5f0535) {
    if (!_0x3440cc || _0x3440cc['length'] === 0x0)
        return;
    let _0x2d4500 = _0x5f0535;
    for (let _0x1c94d9 = 0x0; _0x1c94d9 < _0x3440cc['length']; _0x1c94d9++) {
        _0x3536ba(_0x39ff0f, _0x3440cc[_0x1c94d9]['text'], _0xf8cddb, _0x2d4500, _0x1c94d9 === 0x0);
        _0x2d4500 -= 0x24;
    }
}
function _0xdfcf35() {
    if (!_0x5b4c29['SYSTEM']['isReady'])
        return;
    _0x13040f['fillStyle'] = '#000000';
    _0x13040f['fillRect'](0x0, 0x0, _0xe09461['width'], _0xe09461['height']);
    _0x13040f['save']();
    try {
        _0x13040f['scale'](_0x5b4c29['SYSTEM']['viewScale'], _0x5b4c29['SYSTEM']['viewScale']);
        _0x13040f['imageSmoothingEnabled'] = ![];
        const _0x545fc7 = Math['floor'](_0x5b4c29['CAMERA']['x'] || 0x0);
        const _0x35e486 = Math['floor'](_0x5b4c29['CAMERA']['y'] || 0x0);
        const _0x1cf2b4 = Math['max'](0x0, Math['floor'](_0x545fc7 / _0x5b4c29['MAP']['chunkSize']));
        const _0x1bc32c = Math['min'](_0x5b4c29['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x545fc7 + _0x5b4c29['CAMERA']['width']) / _0x5b4c29['MAP']['chunkSize']));
        const _0x367349 = Math['max'](0x0, Math['floor'](_0x35e486 / _0x5b4c29['MAP']['chunkSize']));
        const _0x3ba000 = Math['min'](_0x5b4c29['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x35e486 + _0x5b4c29['CAMERA']['height']) / _0x5b4c29['MAP']['chunkSize']));
        for (let _0x5015fa = _0x367349; _0x5015fa <= _0x3ba000; _0x5015fa++)
            for (let _0x491cf4 = _0x1cf2b4; _0x491cf4 <= _0x1bc32c; _0x491cf4++) {
                const _0x377732 = _0x491cf4 * _0x5b4c29['MAP']['chunkSize'] - _0x545fc7;
                const _0x4d41f0 = _0x5015fa * _0x5b4c29['MAP']['chunkSize'] - _0x35e486;
                _0x13040f['drawImage'](_0x5b4c29['MAP']['bgChunks'][_0x5015fa][_0x491cf4], _0x377732, _0x4d41f0, _0x5b4c29['MAP']['chunkSize'] + 0x1, _0x5b4c29['MAP']['chunkSize'] + 0x1);
            }
        if (_0x586e1f['complete'] && _0x586e1f['naturalWidth'] > 0x0) {
            const _0x21a864 = _0x5b4c29['MAP']['tileSize'];
            const _0x1bc479 = _0x21a864 * 0xa;
            const _0x5dbefb = _0x5b4c29['MAP']['columns'] / 0x2 * _0x21a864 - _0x1bc479 / 0x2 - _0x545fc7;
            const _0x45abe5 = _0x5b4c29['MAP']['rows'] / 0x2 * _0x21a864 - _0x1bc479 / 0x2 - _0x35e486;
            _0x13040f['imageSmoothingEnabled'] = ![];
            _0x13040f['drawImage'](_0x586e1f, _0x5dbefb, _0x45abe5, _0x1bc479, _0x1bc479);
        }
        if (_0x57b76c['complete'] && _0x57b76c['naturalWidth'] > 0x0) {
            _0x5b4c29['ENTITIES']['forEach'](_0x3e5b50 => {
                if (_0x3e5b50['type'] !== 'table')
                    return;
                _0x13040f['save']();
                _0x13040f['imageSmoothingEnabled'] = ![];
                const _0x53c93f = _0x57b76c['naturalWidth'] >= _0x57b76c['naturalHeight'];
                const _0x3d8e8c = _0x3e5b50['w'] >= _0x3e5b50['h'];
                if (_0x53c93f === _0x3d8e8c) {
                    _0x13040f['drawImage'](_0x57b76c, _0x3e5b50['x'] - _0x545fc7, _0x3e5b50['y'] - _0x35e486, _0x3e5b50['w'], _0x3e5b50['h']);
                } else {
                    _0x13040f['translate'](_0x3e5b50['x'] - _0x545fc7 + _0x3e5b50['w'] / 0x2, _0x3e5b50['y'] - _0x35e486 + _0x3e5b50['h'] / 0x2);
                    _0x13040f['rotate'](Math['PI'] / 0x2);
                    _0x13040f['drawImage'](_0x57b76c, -_0x3e5b50['h'] / 0x2, -_0x3e5b50['w'] / 0x2, _0x3e5b50['h'], _0x3e5b50['w']);
                }
                _0x13040f['restore']();
            });
        } else {
            _0x5b4c29['ENTITIES']['forEach'](_0x3b2e27 => {
                if (_0x3b2e27['type'] !== 'table')
                    return;
                _0x13040f['save']();
                _0x13040f['fillStyle'] = '#6b4423';
                _0x13040f['fillRect'](_0x3b2e27['x'] - _0x545fc7, _0x3b2e27['y'] - _0x35e486, _0x3b2e27['w'], _0x3b2e27['h']);
                _0x13040f['strokeStyle'] = '#422810';
                _0x13040f['lineWidth'] = 0x3;
                _0x13040f['strokeRect'](_0x3b2e27['x'] - _0x545fc7 + 0x1, _0x3b2e27['y'] - _0x35e486 + 0x1, _0x3b2e27['w'] - 0x2, _0x3b2e27['h'] - 0x2);
                _0x13040f['fillStyle'] = '#82532a';
                _0x13040f['fillRect'](_0x3b2e27['x'] - _0x545fc7 + 0x4, _0x3b2e27['y'] - _0x35e486 + 0x4, _0x3b2e27['w'] - 0x8, _0x3b2e27['h'] - 0x8);
                _0x13040f['restore']();
            });
        }
        if (_0x302b5e) {
            for (let _0x1995c4 = _0x367349; _0x1995c4 <= _0x3ba000; _0x1995c4++) {
                for (let _0x468882 = _0x1cf2b4; _0x468882 <= _0x1bc32c; _0x468882++) {
                    const _0x2046eb = _0x468882 * _0x5b4c29['MAP']['chunkSize'] - _0x545fc7;
                    const _0x89f929 = _0x1995c4 * _0x5b4c29['MAP']['chunkSize'] - _0x35e486;
                    _0x13040f['drawImage'](_0x5b4c29['MAP']['fgChunks'][_0x1995c4][_0x468882], _0x2046eb, _0x89f929, _0x5b4c29['MAP']['chunkSize'] + 0x1, _0x5b4c29['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x4d7d77 = _0x5b4c29['GAME_STATE'] === 'NIGHT' && _0x4ab76e === 'Skinwalker' && !_0x2bd42a['isDead'];
        const _0x3a4864 = _0x2bd42a['x'] - _0x545fc7 + _0x2bd42a['width'] / 0x2;
        const _0x24e48f = _0x2bd42a['y'] - _0x35e486 + _0x2bd42a['height'] / 0x2;
        const _0x5544f1 = _0x2bd42a['width'] * _0x2bd42a['scale'] * 1.3;
        const _0x576482 = _0x2bd42a['height'] * _0x2bd42a['scale'] * 1.3;
        for (const _0x1d2d0d in _0x53ec05) {
            const _0x30d8ba = _0x53ec05[_0x1d2d0d];
            if (_0x30d8ba['isDead'])
                continue;
            const _0x3d3996 = (_0x30d8ba['renderX'] ?? _0x30d8ba['x']) - _0x545fc7 + _0x30d8ba['width'] / 0x2;
            const _0x201b62 = (_0x30d8ba['renderY'] ?? _0x30d8ba['y']) - _0x35e486 + _0x30d8ba['height'] / 0x2;
            const _0x3b3d8f = Math['min'](0x2, Math['max'](0.3, _0x30d8ba['scale'] || 0x1));
            const _0x54f695 = _0x30d8ba['width'] * _0x3b3d8f * 1.3;
            const _0x3b21fc = _0x30d8ba['height'] * _0x3b3d8f * 1.3;
            _0x13040f['save']();
            try {
                _0x13040f['translate'](_0x3d3996, _0x201b62);
                _0x13040f['rotate'](_0x30d8ba['renderAngle'] ?? 0x0);
                if (_0x30d8ba['isDark'])
                    _0x13040f['filter'] = 'brightness(0)';
                _0x1dffb6(_0x13040f, _0x30d8ba['body'], _0x30d8ba['eyes'], _0x54f695, _0x3b21fc);
                if (_0x353bbb['has'](parseInt(_0x1d2d0d)) && _0x3ae852['complete'] && _0x3ae852['naturalWidth'] > 0x0) {
                    _0x13040f['drawImage'](_0x3ae852, -_0x54f695 / 0x2, -_0x3b21fc / 0x2, _0x54f695, _0x3b21fc);
                }
                if (_0x30d8ba['isDark'])
                    _0x13040f['filter'] = 'none';
            } finally {
                _0x13040f['restore']();
            }
            if (!_0x16d957((_0x30d8ba['renderX'] ?? _0x30d8ba['x']) + _0x30d8ba['width'] / 0x2, (_0x30d8ba['renderY'] ?? _0x30d8ba['y']) + _0x30d8ba['height'] / 0x2)) {
                _0x13040f['textAlign'] = 'center';
                _0x13040f['lineJoin'] = 'round';
                _0x13040f['lineWidth'] = 0x3;
                _0x13040f['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x13040f['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x13040f['fillStyle'] = _0x353bbb['has'](parseInt(_0x1d2d0d)) ? '#cc88ff' : '#ffffff';
                const _0x1d1eb8 = _0x30d8ba['isDark'] ? '???' : _0x30d8ba['name'] + (_0x30d8ba['isOwner'] ? '\x20[🗝️]' : '');
                _0x13040f['strokeText'](_0x1d1eb8, _0x3d3996, _0x201b62 - _0x3b21fc / 0x2 - 0x10);
                _0x13040f['fillText'](_0x1d1eb8, _0x3d3996, _0x201b62 - _0x3b21fc / 0x2 - 0x10);
            }
        }
        if (!_0x2bd42a['isDead']) {
            _0x13040f['save']();
            try {
                _0x13040f['translate'](_0x3a4864, _0x24e48f);
                _0x13040f['rotate'](_0x2bd42a['angle']);
                if (_0x4d7d77)
                    _0x13040f['filter'] = 'brightness(0)';
                _0x1dffb6(_0x13040f, _0x3b41ea, _0x214310, _0x5544f1, _0x576482);
                if (_0x353bbb['has'](_0x46bccd) && _0x3ae852['complete'] && _0x3ae852['naturalWidth'] > 0x0) {
                    _0x13040f['drawImage'](_0x3ae852, -_0x5544f1 / 0x2, -_0x576482 / 0x2, _0x5544f1, _0x576482);
                }
                if (_0x4d7d77)
                    _0x13040f['filter'] = 'none';
            } finally {
                _0x13040f['restore']();
            }
            if (!_0x16d957(_0x2bd42a['x'] + _0x2bd42a['width'] / 0x2, _0x2bd42a['y'] + _0x2bd42a['height'] / 0x2)) {
                _0x13040f['textAlign'] = 'center';
                _0x13040f['lineJoin'] = 'round';
                _0x13040f['lineWidth'] = 0x3;
                _0x13040f['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x13040f['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x13040f['fillStyle'] = _0x353bbb['has'](_0x46bccd) ? '#cc88ff' : '#ffffff';
                const _0x4bcccc = _0x4d7d77 ? '???' : _0x419ade + (_0x11565d ? '\x20[🗝️]' : '');
                _0x13040f['strokeText'](_0x4bcccc, _0x3a4864, _0x24e48f - _0x576482 / 0x2 - 0x10);
                _0x13040f['fillText'](_0x4bcccc, _0x3a4864, _0x24e48f - _0x576482 / 0x2 - 0x10);
            }
        }
        for (const _0x580de2 of _0x5b4c29['ENTITIES']) {
            if (_0x580de2['type'] !== 'npc')
                continue;
            const _0x1ac243 = _0x580de2['x'] - _0x545fc7 + _0x580de2['w'] / 0x2;
            const _0x45fb70 = _0x580de2['y'] - _0x35e486 + _0x580de2['h'] / 0x2;
            const _0x24c144 = _0x580de2['w'] * 1.3;
            const _0x424a46 = _0x580de2['h'] * 1.3;
            _0x13040f['save']();
            _0x13040f['translate'](_0x1ac243, _0x45fb70);
            _0x13040f['rotate'](_0x580de2['angle'] !== undefined ? _0x580de2['angle'] : 0x0);
            _0x1dffb6(_0x13040f, _0x580de2['body'] || 'body01.png', _0x580de2['eyes'] || 'eyes4.png', _0x24c144, _0x424a46);
            _0x13040f['restore']();
            _0x13040f['textAlign'] = 'center';
            _0x13040f['lineJoin'] = 'round';
            _0x13040f['lineWidth'] = 0x3;
            _0x13040f['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x13040f['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x13040f['fillStyle'] = '#ffcc00';
            _0x13040f['strokeText'](_0x580de2['name'] || 'NPC', _0x1ac243, _0x45fb70 - _0x424a46 / 0x2 - 0x10);
            _0x13040f['fillText'](_0x580de2['name'] || 'NPC', _0x1ac243, _0x45fb70 - _0x424a46 / 0x2 - 0x10);
        }
        if (_0x5b4c29['MAP']['wallChunks'] && _0x5b4c29['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x35212c = _0x367349; _0x35212c <= _0x3ba000; _0x35212c++)
                for (let _0x389dde = _0x1cf2b4; _0x389dde <= _0x1bc32c; _0x389dde++) {
                    if (!_0x5b4c29['MAP']['wallChunks'][_0x35212c] || !_0x5b4c29['MAP']['wallChunks'][_0x35212c][_0x389dde])
                        continue;
                    const _0x27fd41 = _0x389dde * _0x5b4c29['MAP']['chunkSize'] - _0x545fc7;
                    const _0x1da392 = _0x35212c * _0x5b4c29['MAP']['chunkSize'] - _0x35e486;
                    _0x13040f['drawImage'](_0x5b4c29['MAP']['wallChunks'][_0x35212c][_0x389dde], _0x27fd41, _0x1da392, _0x5b4c29['MAP']['chunkSize'] + 0x1, _0x5b4c29['MAP']['chunkSize'] + 0x1);
                }
        }
        if (_0x2bd42a['isDead']) {
            for (const _0x5e6830 in _0x53ec05) {
                const _0x52c349 = _0x53ec05[_0x5e6830];
                if (!_0x52c349['isDead'])
                    continue;
                const _0x59aa8b = (_0x52c349['renderX'] ?? _0x52c349['x']) - _0x545fc7 + _0x52c349['width'] / 0x2;
                const _0x43b928 = (_0x52c349['renderY'] ?? _0x52c349['y']) - _0x35e486 + _0x52c349['height'] / 0x2;
                const _0x4908e8 = _0x52c349['width'] * (_0x52c349['scale'] || 0x1) * 1.3;
                const _0x53eced = _0x52c349['height'] * (_0x52c349['scale'] || 0x1) * 1.3;
                _0x13040f['save']();
                try {
                    _0x13040f['translate'](_0x59aa8b, _0x43b928);
                    _0x13040f['rotate'](_0x52c349['renderAngle'] ?? 0x0);
                    _0x13040f['globalAlpha'] = 0.3;
                    _0x1dffb6(_0x13040f, _0x52c349['body'], _0x52c349['eyes'], _0x4908e8, _0x53eced);
                } finally {
                    _0x13040f['restore']();
                }
                if (!_0x16d957((_0x52c349['renderX'] ?? _0x52c349['x']) + _0x52c349['width'] / 0x2, (_0x52c349['renderY'] ?? _0x52c349['y']) + _0x52c349['height'] / 0x2)) {
                    _0x13040f['save']();
                    _0x13040f['globalAlpha'] = 0.3;
                    _0x13040f['textAlign'] = 'center';
                    _0x13040f['lineJoin'] = 'round';
                    _0x13040f['lineWidth'] = 0x3;
                    _0x13040f['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x13040f['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x13040f['fillStyle'] = '#ffffff';
                    const _0x42bb68 = _0x52c349['name'] + (_0x52c349['isOwner'] ? '\x20[🗝️]' : '');
                    _0x13040f['strokeText'](_0x42bb68, _0x59aa8b, _0x43b928 - _0x53eced / 0x2 - 0x10);
                    _0x13040f['fillText'](_0x42bb68, _0x59aa8b, _0x43b928 - _0x53eced / 0x2 - 0x10);
                    _0x13040f['restore']();
                }
            }
            _0x13040f['save']();
            try {
                _0x13040f['translate'](_0x3a4864, _0x24e48f);
                _0x13040f['rotate'](_0x2bd42a['angle']);
                _0x13040f['globalAlpha'] = 0.3;
                _0x1dffb6(_0x13040f, _0x3b41ea, _0x214310, _0x5544f1, _0x576482);
            } finally {
                _0x13040f['restore']();
            }
            if (!_0x16d957(_0x2bd42a['x'] + _0x2bd42a['width'] / 0x2, _0x2bd42a['y'] + _0x2bd42a['height'] / 0x2)) {
                _0x13040f['save']();
                _0x13040f['globalAlpha'] = 0.3;
                _0x13040f['textAlign'] = 'center';
                _0x13040f['lineJoin'] = 'round';
                _0x13040f['lineWidth'] = 0x3;
                _0x13040f['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x13040f['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x13040f['fillStyle'] = '#ffffff';
                const _0x4e1f4a = _0x419ade + (_0x11565d ? '\x20[🗝️]' : '');
                _0x13040f['strokeText'](_0x4e1f4a, _0x3a4864, _0x24e48f - _0x576482 / 0x2 - 0x10);
                _0x13040f['fillText'](_0x4e1f4a, _0x3a4864, _0x24e48f - _0x576482 / 0x2 - 0x10);
                _0x13040f['restore']();
            }
        }
        for (let _0x113ae6 = _0x367349; _0x113ae6 <= _0x3ba000; _0x113ae6++)
            for (let _0x3b3a6d = _0x1cf2b4; _0x3b3a6d <= _0x1bc32c; _0x3b3a6d++) {
                const _0x2a982d = _0x3b3a6d * _0x5b4c29['MAP']['chunkSize'] - _0x545fc7;
                const _0xeb3a5b = _0x113ae6 * _0x5b4c29['MAP']['chunkSize'] - _0x35e486;
                _0x13040f['drawImage'](_0x5b4c29['MAP']['fgChunks'][_0x113ae6][_0x3b3a6d], _0x2a982d, _0xeb3a5b, _0x5b4c29['MAP']['chunkSize'] + 0x1, _0x5b4c29['MAP']['chunkSize'] + 0x1);
            }
        if (_0x5b4c29['EDITOR']['enabled'] && _0x5b4c29['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0xb79679 = _0x5b4c29['INPUTS']['mouseX'] / _0x5b4c29['SYSTEM']['viewScale'] + _0x5b4c29['CAMERA']['x'];
            const _0x5f35e5 = _0x5b4c29['INPUTS']['mouseY'] / _0x5b4c29['SYSTEM']['viewScale'] + _0x5b4c29['CAMERA']['y'];
            const _0x5ef7ad = Math['floor'](_0xb79679 / _0x5b4c29['MAP']['tileSize']);
            const _0x1f2ee0 = Math['floor'](_0x5f35e5 / _0x5b4c29['MAP']['tileSize']);
            if (_0x5ef7ad >= 0x0 && _0x5ef7ad < _0x5b4c29['MAP']['columns'] && _0x1f2ee0 >= 0x0 && _0x1f2ee0 < _0x5b4c29['MAP']['rows']) {
                const _0x5760e8 = _0x5ef7ad * _0x5b4c29['MAP']['tileSize'] - _0x545fc7;
                const _0x45222a = _0x1f2ee0 * _0x5b4c29['MAP']['tileSize'] - _0x35e486;
                _0x13040f['save']();
                _0x13040f['globalAlpha'] = 0.5;
                if (_0x5b4c29['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x4d71e0 = _0x5b4c29['EDITOR']['selectedTileGid'] - 0x1;
                    _0x13040f['drawImage'](_0x2afb1e, _0x4d71e0 % _0x5b4c29['MAP']['tilesetCols'] * _0x5b4c29['MAP']['tileSize'], Math['floor'](_0x4d71e0 / _0x5b4c29['MAP']['tilesetCols']) * _0x5b4c29['MAP']['tileSize'], _0x5b4c29['MAP']['tileSize'], _0x5b4c29['MAP']['tileSize'], _0x5760e8, _0x45222a, _0x5b4c29['MAP']['tileSize'], _0x5b4c29['MAP']['tileSize']);
                } else {
                    _0x13040f['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x13040f['fillRect'](_0x5760e8, _0x45222a, _0x5b4c29['MAP']['tileSize'], _0x5b4c29['MAP']['tileSize']);
                }
                _0x13040f['restore']();
            }
        }
        _0x4c30b9(_0x13040f, _0x545fc7, _0x35e486);
        if (_0x1d8d27 > 0x0) {
            _0x13040f['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x1d8d27 + ')';
            _0x13040f['fillRect'](0x0, 0x0, _0x5b4c29['CAMERA']['width'], _0x5b4c29['CAMERA']['height']);
        }
        for (const _0x36777e in _0x53ec05) {
            const _0x19bfa3 = _0x53ec05[_0x36777e];
            if (_0x19bfa3['isDead'] && !_0x2bd42a['isDead'])
                continue;
            const _0x48a2fb = (_0x19bfa3['renderX'] ?? _0x19bfa3['x']) - _0x545fc7 + _0x19bfa3['width'] / 0x2;
            const _0x4e45b5 = (_0x19bfa3['renderY'] ?? _0x19bfa3['y']) - _0x35e486 + _0x19bfa3['height'] / 0x2;
            _0x5207ec(_0x13040f, _0x19bfa3['chats'], _0x48a2fb, _0x4e45b5 - _0x19bfa3['height'] / 0x2 - 0x20);
        }
        _0x5207ec(_0x13040f, _0x2bd42a['chats'], _0x3a4864, _0x24e48f - _0x2bd42a['height'] / 0x2 - 0x20);
    } finally {
        _0x13040f['restore']();
    }
}
function _0x2209b4(_0x2d43a4) {
    if (!_0x5b4c29['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x2209b4);
    let _0x12c9e7 = (_0x2d43a4 - _0x5b4c29['SYSTEM']['lastTime']) / 0x3e8;
    _0x5b4c29['SYSTEM']['lastTime'] = _0x2d43a4;
    if (_0x12c9e7 > 0.1)
        _0x12c9e7 = 0.1;
    if (_0x12c9e7 < 0x0 || isNaN(_0x12c9e7))
        _0x12c9e7 = 0.016;
    if (_0x302b5e) {
        _0x1959e9(_0x12c9e7);
        _0xdfcf35();
        return;
    }
    if (!_0x46bccd)
        return;
    _0x4b7b78(_0x12c9e7);
    _0x52ca98['tick'](_0x2d43a4);
    _0xdfcf35();
}
function _0x5088f6() {
    const _0x1d3504 = Math['ceil'](_0x5b4c29['MAP']['columns'] * _0x5b4c29['MAP']['tileSize'] / _0x5b4c29['MAP']['chunkSize']);
    const _0xd8fff8 = Math['ceil'](_0x5b4c29['MAP']['rows'] * _0x5b4c29['MAP']['tileSize'] / _0x5b4c29['MAP']['chunkSize']);
    _0x5b4c29['MAP']['bgChunks'] = [];
    _0x5b4c29['MAP']['fgChunks'] = [];
    _0x5b4c29['MAP']['wallChunks'] = [];
    for (let _0x4b1a46 = 0x0; _0x4b1a46 < _0xd8fff8; _0x4b1a46++) {
        _0x5b4c29['MAP']['bgChunks'][_0x4b1a46] = [];
        _0x5b4c29['MAP']['fgChunks'][_0x4b1a46] = [];
        _0x5b4c29['MAP']['wallChunks'][_0x4b1a46] = [];
        for (let _0x316add = 0x0; _0x316add < _0x1d3504; _0x316add++) {
            const _0x41ef3 = document['createElement']('canvas');
            _0x41ef3['width'] = _0x41ef3['height'] = _0x5b4c29['MAP']['chunkSize'];
            const _0x14b03c = document['createElement']('canvas');
            _0x14b03c['width'] = _0x14b03c['height'] = _0x5b4c29['MAP']['chunkSize'];
            const _0x4eef62 = document['createElement']('canvas');
            _0x4eef62['width'] = _0x4eef62['height'] = _0x5b4c29['MAP']['chunkSize'];
            _0x5b4c29['MAP']['bgChunks'][_0x4b1a46][_0x316add] = _0x41ef3;
            _0x5b4c29['MAP']['fgChunks'][_0x4b1a46][_0x316add] = _0x14b03c;
            _0x5b4c29['MAP']['wallChunks'][_0x4b1a46][_0x316add] = _0x4eef62;
            _0x2c2804(_0x316add, _0x4b1a46);
        }
    }
}
function _0x2c2804(_0x2bbde4, _0x4006d7) {
    const _0x684120 = _0x5b4c29['MAP']['bgChunks'][_0x4006d7][_0x2bbde4]['getContext']('2d', { 'alpha': !![] });
    const _0x5928bc = _0x5b4c29['MAP']['fgChunks'][_0x4006d7][_0x2bbde4]['getContext']('2d', { 'alpha': !![] });
    const _0x14a48c = _0x5b4c29['MAP']['wallChunks'][_0x4006d7] && _0x5b4c29['MAP']['wallChunks'][_0x4006d7][_0x2bbde4] ? _0x5b4c29['MAP']['wallChunks'][_0x4006d7][_0x2bbde4]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x684120['imageSmoothingEnabled'] = _0x5928bc['imageSmoothingEnabled'] = ![];
    if (_0x14a48c)
        _0x14a48c['imageSmoothingEnabled'] = ![];
    _0x684120['clearRect'](0x0, 0x0, _0x5b4c29['MAP']['chunkSize'], _0x5b4c29['MAP']['chunkSize']);
    _0x5928bc['clearRect'](0x0, 0x0, _0x5b4c29['MAP']['chunkSize'], _0x5b4c29['MAP']['chunkSize']);
    if (_0x14a48c)
        _0x14a48c['clearRect'](0x0, 0x0, _0x5b4c29['MAP']['chunkSize'], _0x5b4c29['MAP']['chunkSize']);
    const _0x5afc4a = Math['floor'](_0x2bbde4 * _0x5b4c29['MAP']['chunkSize'] / _0x5b4c29['MAP']['tileSize']);
    const _0x3bb0f5 = Math['ceil']((_0x2bbde4 + 0x1) * _0x5b4c29['MAP']['chunkSize'] / _0x5b4c29['MAP']['tileSize']);
    const _0x141660 = Math['floor'](_0x4006d7 * _0x5b4c29['MAP']['chunkSize'] / _0x5b4c29['MAP']['tileSize']);
    const _0x13a6ce = Math['ceil']((_0x4006d7 + 0x1) * _0x5b4c29['MAP']['chunkSize'] / _0x5b4c29['MAP']['tileSize']);
    const _0x9f46b5 = 0.5;
    const _0x3dcc46 = _0x5b4c29['MAP']['tileSize'] - _0x9f46b5 * 0x2;
    _0x5b4c29['MAP']['layers']['forEach'](_0x3e0b53 => {
        const _0x453266 = _0x3e0b53['name'] === 'walls';
        const _0x42db73 = _0x3e0b53['name'] === 'trees' ? _0x5928bc : _0x453266 ? _0x14a48c || _0x684120 : _0x684120;
        for (let _0x24de10 = Math['max'](0x0, _0x141660); _0x24de10 < Math['min'](_0x5b4c29['MAP']['rows'], _0x13a6ce); _0x24de10++) {
            for (let _0x12979c = Math['max'](0x0, _0x5afc4a); _0x12979c < Math['min'](_0x5b4c29['MAP']['columns'], _0x3bb0f5); _0x12979c++) {
                let _0x43d98f = _0x3e0b53['data'][_0x24de10 * _0x5b4c29['MAP']['columns'] + _0x12979c];
                if (_0x3e0b53['name'] === 'floor2' && _0x5b4c29['MAP']['doors'] && _0x5b4c29['MAP']['doors'][_0x24de10 * _0x5b4c29['MAP']['columns'] + _0x12979c]) {
                    _0x43d98f = 0x2;
                }
                if (_0x43d98f > 0x0) {
                    const _0x50cb92 = _0x43d98f - 0x1;
                    const _0x4af577 = _0x50cb92 % _0x5b4c29['MAP']['tilesetCols'] * _0x5b4c29['MAP']['tileSize'] + _0x9f46b5;
                    const _0x4edef5 = Math['floor'](_0x50cb92 / _0x5b4c29['MAP']['tilesetCols']) * _0x5b4c29['MAP']['tileSize'] + _0x9f46b5;
                    const _0x43d418 = _0x12979c * _0x5b4c29['MAP']['tileSize'] - _0x2bbde4 * _0x5b4c29['MAP']['chunkSize'];
                    const _0x2c9518 = _0x24de10 * _0x5b4c29['MAP']['tileSize'] - _0x4006d7 * _0x5b4c29['MAP']['chunkSize'];
                    if (_0x43d98f === 0x4) {
                        const _0x5c2544 = 0x1;
                        const _0x477a14 = _0x5c2544 % _0x5b4c29['MAP']['tilesetCols'] * _0x5b4c29['MAP']['tileSize'] + _0x9f46b5;
                        const _0x5c68fc = Math['floor'](_0x5c2544 / _0x5b4c29['MAP']['tilesetCols']) * _0x5b4c29['MAP']['tileSize'] + _0x9f46b5;
                        _0x684120['drawImage'](_0x2afb1e, _0x477a14, _0x5c68fc, _0x3dcc46, _0x3dcc46, _0x43d418, _0x2c9518, _0x5b4c29['MAP']['tileSize'], _0x5b4c29['MAP']['tileSize']);
                        let _0x1b398c = _0x5b4c29['MAP']['doors'] ? _0x5b4c29['MAP']['doors'][_0x24de10 * _0x5b4c29['MAP']['columns'] + _0x12979c] : null;
                        if (!_0x1b398c) {
                            const _0x4c000e = _0x5b4c29['MAP']['layers']['find'](_0x1c5b22 => _0x1c5b22['name'] === 'walls');
                            const _0x37ea3a = _0x24de10 > 0x0 && _0x4c000e && _0x4c000e['data'][(_0x24de10 - 0x1) * _0x5b4c29['MAP']['columns'] + _0x12979c] > 0x0;
                            const _0x50c70d = _0x24de10 < _0x5b4c29['MAP']['rows'] - 0x1 && _0x4c000e && _0x4c000e['data'][(_0x24de10 + 0x1) * _0x5b4c29['MAP']['columns'] + _0x12979c] > 0x0;
                            const _0xe037af = _0x12979c > 0x0 && _0x4c000e && _0x4c000e['data'][_0x24de10 * _0x5b4c29['MAP']['columns'] + _0x12979c - 0x1] > 0x0;
                            const _0xd0eaf = _0x12979c < _0x5b4c29['MAP']['columns'] - 0x1 && _0x4c000e && _0x4c000e['data'][_0x24de10 * _0x5b4c29['MAP']['columns'] + _0x12979c + 0x1] > 0x0;
                            if (_0xe037af && _0xd0eaf)
                                _0x1b398c = _0x24de10 < _0x5b4c29['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x37ea3a && _0x50c70d)
                                _0x1b398c = _0x12979c < _0x5b4c29['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x330297 = 0x0;
                        if (_0x1b398c === 'bottom')
                            _0x330297 = Math['PI'] / 0x2;
                        else if (_0x1b398c === 'left')
                            _0x330297 = Math['PI'];
                        else if (_0x1b398c === 'top')
                            _0x330297 = -Math['PI'] / 0x2;
                        else if (_0x1b398c === 'right')
                            _0x330297 = 0x0;
                        if (_0x330297 !== 0x0) {
                            _0x42db73['save']();
                            _0x42db73['translate'](_0x43d418 + _0x5b4c29['MAP']['tileSize'] / 0x2, _0x2c9518 + _0x5b4c29['MAP']['tileSize'] / 0x2);
                            _0x42db73['rotate'](_0x330297);
                            _0x42db73['drawImage'](_0x2afb1e, _0x4af577, _0x4edef5, _0x3dcc46, _0x3dcc46, -_0x5b4c29['MAP']['tileSize'] / 0x2, -_0x5b4c29['MAP']['tileSize'] / 0x2, _0x5b4c29['MAP']['tileSize'], _0x5b4c29['MAP']['tileSize']);
                            _0x42db73['restore']();
                        } else {
                            _0x42db73['drawImage'](_0x2afb1e, _0x4af577, _0x4edef5, _0x3dcc46, _0x3dcc46, _0x43d418, _0x2c9518, _0x5b4c29['MAP']['tileSize'], _0x5b4c29['MAP']['tileSize']);
                        }
                    } else {
                        _0x42db73['drawImage'](_0x2afb1e, _0x4af577, _0x4edef5, _0x3dcc46, _0x3dcc46, _0x43d418, _0x2c9518, _0x5b4c29['MAP']['tileSize'], _0x5b4c29['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x480f46() {
    _0x2afb1e['crossOrigin'] = 'Anonymous';
    _0x2afb1e['onload'] = () => {
        _0x5b4c29['MAP']['tilesetCols'] = 0x3;
        _0x2eb502();
    };
    _0x2afb1e['onerror'] = () => {
        _0x5b4c29['MAP']['tilesetCols'] = 0x1;
        _0x2eb502();
    };
    _0x2afb1e['src'] = 'assets/tilesheet.png';
    _0x586e1f['crossOrigin'] = 'Anonymous';
    _0x586e1f['onload'] = _0x2eb502;
    _0x586e1f['onerror'] = () => {
        _0x2eb502();
    };
    _0x586e1f['src'] = 'assets/center.png';
    _0x57b76c['crossOrigin'] = 'Anonymous';
    _0x57b76c['onload'] = _0x2eb502;
    _0x57b76c['onerror'] = () => {
        _0x2eb502();
    };
    _0x57b76c['src'] = 'assets/table.png';
}
function _0x2eb502() {
    _0x5b4c29['SYSTEM']['assetsLoaded']++;
    if (_0x5b4c29['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x213be1();
    }
}
function _0x48cbc8(_0x45119b, _0x469f3f) {
    if (!_0x11565d || !_0x98220b)
        return;
    const _0x2819d1 = _0x45119b / _0x5b4c29['SYSTEM']['viewScale'] + _0x5b4c29['CAMERA']['x'];
    const _0x1f2fb2 = _0x469f3f / _0x5b4c29['SYSTEM']['viewScale'] + _0x5b4c29['CAMERA']['y'];
    const _0x31d162 = Math['floor'](_0x2819d1 / _0x5b4c29['MAP']['tileSize']);
    const _0x46c4ab = Math['floor'](_0x1f2fb2 / _0x5b4c29['MAP']['tileSize']);
    if (_0x31d162 >= 0x0 && _0x31d162 < _0x5b4c29['MAP']['columns'] && _0x46c4ab >= 0x0 && _0x46c4ab < _0x5b4c29['MAP']['rows'])
        _0x98220b['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x5b4c29['EDITOR']['selectedLayer'],
            'col': _0x31d162,
            'row': _0x46c4ab,
            'gid': _0x5b4c29['EDITOR']['selectedTileGid']
        }));
}
function _0x53b06d() {
    const _0x329054 = document['getElementById']('palette');
    if (!_0x329054 || _0x329054['children']['length'] > 0x0)
        return;
    const _0x119a1e = 0x40;
    const _0x31e783 = _0x2afb1e;
    const _0x58b210 = document['createElement']('div');
    _0x58b210['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x1a6b10 = document['createElement']('canvas');
    _0x1a6b10['width'] = 0xc0;
    _0x1a6b10['height'] = 0xa0;
    _0x1a6b10['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x58b210['appendChild'](_0x1a6b10);
    const _0x5c2a9a = document['createElement']('div');
    _0x5c2a9a['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x58b210['appendChild'](_0x5c2a9a);
    let _0x44da52 = 0x0, _0x6c62da = 0x0;
    let _0x2d3eaa = ![], _0x49c6a0 = 0x0, _0xd8cf38 = 0x0, _0x198d70 = 0x0, _0x55eb21 = 0x0;
    function _0x1ec5d1() {
        const _0x249281 = _0x1a6b10['getContext']('2d');
        _0x249281['clearRect'](0x0, 0x0, _0x1a6b10['width'], _0x1a6b10['height']);
        _0x249281['imageSmoothingEnabled'] = ![];
        if (_0x31e783['complete'] && _0x31e783['naturalWidth'] > 0x0) {
            _0x249281['drawImage'](_0x31e783, _0x44da52, _0x6c62da, _0x1a6b10['width'], _0x1a6b10['height'], 0x0, 0x0, _0x1a6b10['width'], _0x1a6b10['height']);
        }
        _0x249281['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x249281['lineWidth'] = 0x1;
        const _0x17fa8e = Math['floor'](_0x44da52 / _0x119a1e);
        const _0x780f57 = Math['floor'](_0x6c62da / _0x119a1e);
        for (let _0x5dc6c9 = _0x17fa8e; _0x5dc6c9 <= _0x17fa8e + Math['ceil'](_0x1a6b10['width'] / _0x119a1e) + 0x1; _0x5dc6c9++) {
            const _0x2f9460 = _0x5dc6c9 * _0x119a1e - _0x44da52;
            _0x249281['beginPath']();
            _0x249281['moveTo'](_0x2f9460, 0x0);
            _0x249281['lineTo'](_0x2f9460, _0x1a6b10['height']);
            _0x249281['stroke']();
        }
        for (let _0xc47d55 = _0x780f57; _0xc47d55 <= _0x780f57 + Math['ceil'](_0x1a6b10['height'] / _0x119a1e) + 0x1; _0xc47d55++) {
            const _0x337a03 = _0xc47d55 * _0x119a1e - _0x6c62da;
            _0x249281['beginPath']();
            _0x249281['moveTo'](0x0, _0x337a03);
            _0x249281['lineTo'](_0x1a6b10['width'], _0x337a03);
            _0x249281['stroke']();
        }
    }
    function _0x200d63() {
        const _0x4ffd35 = Math['max'](0x1, Math['ceil'](_0x31e783['naturalWidth'] / _0x119a1e));
        const _0x4d5c2d = _0x5b4c29['EDITOR']['selectedTileGid'];
        if (_0x4d5c2d <= 0x0) {
            _0x5c2a9a['style']['display'] = 'none';
            return;
        }
        const _0x9f2e94 = _0x4d5c2d - 0x1;
        const _0x287863 = _0x9f2e94 % _0x4ffd35;
        const _0x68bd9e = Math['floor'](_0x9f2e94 / _0x4ffd35);
        const _0x268142 = _0x287863 * _0x119a1e - _0x44da52;
        const _0x213d7e = _0x68bd9e * _0x119a1e - _0x6c62da;
        _0x5c2a9a['style']['display'] = 'block';
        _0x5c2a9a['style']['left'] = _0x268142 + 'px';
        _0x5c2a9a['style']['top'] = _0x213d7e + 'px';
    }
    _0x31e783['onload'] = () => {
        _0x1ec5d1();
        _0x200d63();
    };
    if (_0x31e783['complete'] && _0x31e783['naturalWidth'] > 0x0) {
        _0x1ec5d1();
        _0x200d63();
    }
    _0x58b210['addEventListener']('mousedown', _0x47746b => {
        if (_0x47746b['button'] === 0x0) {
            _0x2d3eaa = !![];
            _0x49c6a0 = _0x47746b['clientX'];
            _0xd8cf38 = _0x47746b['clientY'];
            _0x198d70 = _0x44da52;
            _0x55eb21 = _0x6c62da;
            _0x58b210['style']['cursor'] = 'grabbing';
            _0x47746b['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x1ddbec => {
        if (!_0x2d3eaa)
            return;
        const _0x8b707d = _0x49c6a0 - _0x1ddbec['clientX'];
        const _0x3bf814 = _0xd8cf38 - _0x1ddbec['clientY'];
        const _0xf55580 = Math['max'](0x0, _0x31e783['naturalWidth'] - _0x1a6b10['width']);
        const _0x4a5bbe = Math['max'](0x0, _0x31e783['naturalHeight'] - _0x1a6b10['height']);
        _0x44da52 = Math['max'](0x0, Math['min'](_0xf55580, _0x198d70 + _0x8b707d));
        _0x6c62da = Math['max'](0x0, Math['min'](_0x4a5bbe, _0x55eb21 + _0x3bf814));
        _0x1ec5d1();
        _0x200d63();
    });
    window['addEventListener']('mouseup', _0x6cff18 => {
        if (_0x2d3eaa) {
            _0x2d3eaa = ![];
            _0x58b210['style']['cursor'] = 'grab';
        }
    });
    _0x58b210['addEventListener']('click', _0x30d5f2 => {
        const _0x535c59 = _0x58b210['getBoundingClientRect']();
        const _0xf094a5 = _0x30d5f2['clientX'] - _0x535c59['left'] + _0x44da52;
        const _0x23abe0 = _0x30d5f2['clientY'] - _0x535c59['top'] + _0x6c62da;
        const _0x45f533 = Math['max'](0x1, Math['ceil'](_0x31e783['naturalWidth'] / _0x119a1e));
        const _0x56575b = Math['floor'](_0xf094a5 / _0x119a1e);
        const _0x1df9fa = Math['floor'](_0x23abe0 / _0x119a1e);
        const _0x4efe90 = _0x1df9fa * _0x45f533 + _0x56575b + 0x1;
        _0x5b4c29['EDITOR']['selectedTileGid'] = _0x4efe90;
        _0x200d63();
    });
    _0x329054['appendChild'](_0x58b210);
    const _0x4e1cd0 = document['createElement']('div');
    _0x4e1cd0['className'] = 'tile-btn\x20eraser-btn';
    _0x4e1cd0['title'] = 'Eraser\x20(gid\x200)';
    _0x4e1cd0['onclick'] = () => {
        _0x5b4c29['EDITOR']['selectedTileGid'] = 0x0;
        _0x5c2a9a['style']['display'] = 'none';
    };
    _0x329054['appendChild'](_0x4e1cd0);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x5b4c29['EDITOR']['enabled'] = !_0x5b4c29['EDITOR']['enabled'];
        const _0x179df9 = document['getElementById']('editor-tools');
        if (_0x5b4c29['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x179df9['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x179df9['style']['display'] = 'none';
        }
    });
    const _0x21184a = document['getElementById']('start-game-btn');
    if (_0x21184a) {
        _0x21184a['addEventListener']('click', () => {
            if (_0x98220b)
                _0x98220b['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x2528a2 = document['getElementById']('rolelist-toggle-btn');
    if (_0x2528a2) {
        let _0xb88a33 = 'subalignments';
        _0x2528a2['addEventListener']('click', () => {
            if (_0xb88a33 === 'subalignments')
                _0xb88a33 = 'precise';
            else if (_0xb88a33 === 'precise')
                _0xb88a33 = 'off';
            else
                _0xb88a33 = 'subalignments';
            _0x2528a2['innerText'] = 'Role\x20List:\x20' + _0xb88a33['charAt'](0x0)['toUpperCase']() + _0xb88a33['slice'](0x1);
            if (_0x98220b)
                _0x98220b['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0xb88a33
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x50f6e1 => {
        if (_0x50f6e1['id'] === 'editor-toggle-btn' || _0x50f6e1['id'] === 'start-game-btn' || _0x50f6e1['id'] === 'rolelist-toggle-btn')
            return;
        _0x50f6e1['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x348fba => _0x348fba['classList']['remove']('active'));
            _0x50f6e1['classList']['add']('active');
            _0x5b4c29['EDITOR']['selectedLayer'] = _0x50f6e1['dataset']['layer'];
        });
    });
}
function _0x3a336b(_0x9a1021) {
    if (_0x98220b)
        _0x98220b['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x9a1021
        }));
}
function _0x3ee830(_0x3929a4) {
    if (_0x98220b)
        _0x98220b['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x3929a4
        }));
}
function _0x143b75(_0x4018db, _0x5208f2, _0x1addac, _0x2c8b82) {
    const _0x3f9654 = document['getElementById']('admin-panel');
    if (_0x3f9654)
        _0x3f9654['remove']();
    if (_0x3f9654 && _0x3f9654['dataset']['target'] === String(_0x4018db))
        return;
    const _0x53484f = document['createElement']('div');
    _0x53484f['id'] = 'admin-panel';
    _0x53484f['dataset']['target'] = String(_0x4018db);
    _0x53484f['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0xf65ad0 = document['createElement']('div');
    _0xf65ad0['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0xf65ad0['textContent'] = _0x5208f2;
    _0x53484f['appendChild'](_0xf65ad0);
    const _0x32e2df = document['createElement']('button');
    _0x32e2df['textContent'] = 'Kick';
    _0x32e2df['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x32e2df['onmouseenter'] = () => _0x32e2df['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x32e2df['onmouseleave'] = () => _0x32e2df['style']['background'] = 'transparent';
    _0x32e2df['onclick'] = () => {
        _0x3a336b(_0x4018db);
        _0x53484f['remove']();
    };
    _0x53484f['appendChild'](_0x32e2df);
    const _0x5e58db = document['createElement']('button');
    _0x5e58db['textContent'] = 'Ban';
    _0x5e58db['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x5e58db['onmouseenter'] = () => _0x5e58db['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x5e58db['onmouseleave'] = () => _0x5e58db['style']['background'] = 'transparent';
    _0x5e58db['onclick'] = () => {
        _0x3ee830(_0x4018db);
        _0x53484f['remove']();
    };
    _0x53484f['appendChild'](_0x5e58db);
    document['body']['appendChild'](_0x53484f);
    const _0x1866e0 = _0x53484f['offsetWidth'] || 0x91;
    const _0x5cd4be = _0x53484f['offsetHeight'] || 0x50;
    let _0x22bedf = _0x1addac - _0x1866e0;
    let _0x17a2ee = _0x2c8b82;
    if (_0x22bedf < 0x4)
        _0x22bedf = _0x1addac;
    if (_0x17a2ee + _0x5cd4be > window['innerHeight'] - 0x4)
        _0x17a2ee = window['innerHeight'] - _0x5cd4be - 0x4;
    _0x53484f['style']['left'] = _0x22bedf + 'px';
    _0x53484f['style']['top'] = _0x17a2ee + 'px';
    const _0x3ccd73 = _0x5e705c => {
        if (!_0x53484f['contains'](_0x5e705c['target'])) {
            _0x53484f['remove']();
            document['removeEventListener']('mousedown', _0x3ccd73);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x3ccd73), 0x0);
}
function _0x596431() {
    const _0x3e343d = document['getElementById']('leaderboard-list');
    _0x3e343d['innerHTML'] = '';
    const _0x5dba46 = document['createElement']('div');
    _0x5dba46['className'] = 'leaderboard-entry';
    const _0x370820 = document['createElement']('span');
    _0x370820['textContent'] = _0x419ade + (_0x11565d ? '\x20[🗝️]' : '');
    if (_0x353bbb['has'](_0x46bccd) && !_0x2bd42a['isDead']) {
        _0x370820['style']['color'] = '#cc88ff';
    }
    _0x5dba46['appendChild'](_0x370820);
    _0x3e343d['appendChild'](_0x5dba46);
    for (const _0x167078 in _0x53ec05) {
        const _0x2ed56f = document['createElement']('div');
        _0x2ed56f['className'] = 'leaderboard-entry';
        const _0xc62a32 = document['createElement']('span');
        _0xc62a32['textContent'] = _0x53ec05[_0x167078]['name'] + (_0x53ec05[_0x167078]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x353bbb['has'](parseInt(_0x167078)) && !_0x53ec05[_0x167078]['isDead']) {
            _0xc62a32['style']['color'] = '#cc88ff';
        }
        _0x2ed56f['appendChild'](_0xc62a32);
        if (_0x11565d && !_0x53ec05[_0x167078]['isOwner']) {
            const _0x4184ed = _0x53ec05[_0x167078]['id'];
            const _0x488e26 = _0x53ec05[_0x167078]['name'];
            _0x2ed56f['style']['cursor'] = 'context-menu';
            _0x2ed56f['addEventListener']('contextmenu', _0xff96da => {
                _0xff96da['preventDefault']();
                _0xff96da['stopPropagation']();
                _0x143b75(_0x4184ed, _0x488e26, _0xff96da['clientX'], _0xff96da['clientY']);
            });
        }
        _0x3e343d['appendChild'](_0x2ed56f);
    }
}
window['addEventListener']('resize', _0x213be1);
function _0x213be1() {
    _0xe09461['width'] = window['innerWidth'];
    _0xe09461['height'] = window['innerHeight'];
    _0x5b4c29['SYSTEM']['viewScale'] = Math['max'](_0xe09461['width'] / _0x18a0d4, _0xe09461['height'] / _0x4ec057);
    _0x5b4c29['CAMERA']['width'] = _0xe09461['width'] / _0x5b4c29['SYSTEM']['viewScale'];
    _0x5b4c29['CAMERA']['height'] = _0xe09461['height'] / _0x5b4c29['SYSTEM']['viewScale'];
    _0x13040f['imageSmoothingEnabled'] = ![];
}
function _0x3259cb(_0xf82372) {
    if (_0xf82372['ctrlKey'] || _0xf82372['metaKey']) {
        if (_0xf82372['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0xf82372['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0xf82372['code'])) {
            _0xf82372['preventDefault']();
            _0xf82372['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x3259cb, { 'passive': ![] });
window['addEventListener']('keydown', _0x3259cb, { 'passive': ![] });
window['addEventListener']('keydown', _0x2d19c7 => {
    const _0x36ca7c = _0x2d19c7['key']['toLowerCase']();
    if (_0x36ca7c === 'tab') {
        _0x2d19c7['preventDefault']();
        const _0x27cbe9 = document['getElementById']('will-ui');
        const _0x20d507 = document['getElementById']('will-input');
        if (_0x27cbe9['style']['display'] === 'flex') {
            _0x27cbe9['style']['display'] = 'none';
            if (_0x98220b)
                _0x98220b['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x20d507['value']
                }));
            _0x20d507['blur']();
        } else {
            _0x27cbe9['style']['display'] = 'flex';
            _0x20d507['focus']();
            for (let _0x3a552c in _0x5b4c29['INPUTS']['keys'])
                _0x5b4c29['INPUTS']['keys'][_0x3a552c] = ![];
        }
        return;
    }
    if (_0x2d19c7['key'] === 'Enter') {
        if (_0x302b5e) {
            const _0x1291c8 = document['getElementById']('play-btn');
            if (_0x1291c8)
                _0x1291c8['click']();
            return;
        }
        if (!_0x98220b || _0x98220b['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x43fd29 = document['getElementById']('chat-ui');
        const _0x2ffc72 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x2ffc72) {
            const _0x2971f5 = _0x2ffc72['value']['trim']();
            if (_0x2971f5['length'] > 0x0) {
                _0x98220b['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x2971f5
                }));
            }
            _0x2ffc72['value'] = '';
            _0x43fd29['style']['display'] = 'none';
            _0x2ffc72['blur']();
        } else {
            _0x43fd29['style']['display'] = 'block';
            _0x2ffc72['focus']();
            for (let _0x51c128 in _0x5b4c29['INPUTS']['keys'])
                _0x5b4c29['INPUTS']['keys'][_0x51c128] = ![];
        }
        _0x2d19c7['preventDefault']();
        return;
    }
    if (_0x2d19c7['key'] === 'Escape') {
        const _0x55f080 = document['getElementById']('guide-ui');
        if (_0x55f080 && _0x55f080['style']['display'] === 'flex') {
            _0x55f080['style']['display'] = 'none';
            return;
        }
        const _0x1ad0f0 = document['getElementById']('ability-ui');
        if (_0x1ad0f0 && _0x1ad0f0['style']['display'] === 'block') {
            _0x1ad0f0['style']['display'] = 'none';
            return;
        }
        const _0x2d1c32 = document['getElementById']('settings-panel');
        if (_0x2d1c32 && _0x2d1c32['style']['display'] === 'block') {
            _0x2d1c32['style']['display'] = 'none';
            return;
        }
        const _0x662768 = document['getElementById']('mayor-confirm-dialog');
        if (_0x662768 && _0x662768['style']['display'] === 'flex') {
            _0x662768['style']['display'] = 'none';
            return;
        }
        const _0x567d8f = document['getElementById']('target-chooser-ui');
        if (_0x567d8f && _0x567d8f['style']['display'] === 'flex') {
            _0x567d8f['style']['display'] = 'none';
            return;
        }
        const _0x1851dd = document['getElementById']('chat-ui');
        const _0x56e28a = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x56e28a) {
            _0x56e28a['value'] = '';
            _0x1851dd['style']['display'] = 'none';
            _0x56e28a['blur']();
            _0x2d19c7['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x5b4c29['INPUTS']['keys']['hasOwnProperty'](_0x36ca7c))
            _0x5b4c29['INPUTS']['keys'][_0x36ca7c] = !![];
        if (!_0x98220b || _0x98220b['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x36ca7c === 'h' && !_0x2d19c7['repeat']) {
            const _0x265449 = document['getElementById']('guide-ui');
            if (_0x265449) {
                _0x265449['style']['display'] = _0x265449['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x36ca7c === 't' && !_0x2d19c7['repeat']) {
            if (_0x2bd42a['isDead'])
                return;
            if (_0x4ab76e === 'Mayor') {
                if (_0x353bbb['has'](_0x46bccd)) {
                    _0x511862('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x393e05 = document['getElementById']('mayor-confirm-dialog');
                if (_0x393e05)
                    _0x393e05['style']['display'] = 'flex';
                return;
            }
            if (_0x5b4c29['GAME_STATE'] === 'NIGHT') {
                if (!_0x5b4c29['NIGHT_ABILITY_OPEN']) {
                    _0x511862('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x212c4b = document['getElementById']('ability-ui');
                if (_0x212c4b) {
                    if (_0x212c4b['style']['display'] === 'block') {
                        _0x212c4b['style']['display'] = 'none';
                    } else {
                        _0x2457a1();
                        _0x212c4b['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x5b4c29['GAME_STATE'] === 'DAY_DISCUSS' || _0x5b4c29['GAME_STATE'] === 'DAY_VOTE') {
                _0x511862('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x36ca7c === 'e' && !_0x2bd42a['isDead']) {
            const _0x3272c7 = Date['now']();
            if (!window['_lastDoorSend'] || _0x3272c7 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x3272c7;
                _0x98220b['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x1089a8 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0xce97ce = _0x1089a8['key']['toLowerCase']();
        if (_0x5b4c29['INPUTS']['keys']['hasOwnProperty'](_0xce97ce))
            _0x5b4c29['INPUTS']['keys'][_0xce97ce] = ![];
    }
});
window['addEventListener']('mousemove', _0x1d1718 => {
    _0x5b4c29['INPUTS']['mouseX'] = _0x1d1718['clientX'];
    _0x5b4c29['INPUTS']['mouseY'] = _0x1d1718['clientY'];
    if (_0x5b4c29['INPUTS']['isMouseDown'] && _0x5b4c29['EDITOR']['enabled']) {
        _0x48cbc8(_0x1d1718['clientX'], _0x1d1718['clientY']);
    }
});
window['addEventListener']('mousedown', _0x1eb43a => {
    if (_0x1eb43a['target']['closest']('#editor-ui') || _0x1eb43a['target']['closest']('#leaderboard-ui') || _0x1eb43a['target']['closest']('#chat-log-ui') || _0x1eb43a['target']['closest']('#target-chooser-ui') || _0x1eb43a['target']['closest']('#guide-ui') || _0x1eb43a['target']['closest']('#role-list-ui') || _0x1eb43a['target']['closest']('#ability-ui') || _0x1eb43a['target']['closest']('#settings-panel') || _0x1eb43a['target']['closest']('#mayor-confirm-dialog') || _0x1eb43a['target']['closest']('#mobile-action-bar') || _0x1eb43a['target']['closest']('#mobile-top-bar') || _0x1eb43a['target']['closest']('#mobile-joystick-zone') || _0x1eb43a['target']['closest']('#mobile-chat-overlay') || _0x1eb43a['target']['closest']('#will-ui') || _0x1eb43a['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x1eb43a['button'] === 0x0) {
        _0x5b4c29['INPUTS']['isMouseDown'] = !![];
        if (_0x5b4c29['EDITOR']['enabled'])
            _0x48cbc8(_0x1eb43a['clientX'], _0x1eb43a['clientY']);
    }
});
window['addEventListener']('mouseup', _0x18269e => {
    _0x5b4c29['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x274b93 => {
    if (_0x274b93['target']['closest']('#settings-btn'))
        return;
    const _0x40f4d0 = document['getElementById']('leaderboard-list');
    const _0x55f32a = document['getElementById']('leaderboard-toggle');
    if (_0x40f4d0['style']['display'] === 'none') {
        _0x40f4d0['style']['display'] = 'flex';
        _0x55f32a['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x40f4d0['style']['display'] = 'none';
        _0x55f32a['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x554ea6 = document['getElementById']('close-target-btn');
if (_0x554ea6) {
    _0x554ea6['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0xe48f4d = document['getElementById']('close-guide-btn');
if (_0xe48f4d) {
    _0xe48f4d['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x1c3d07 = document['getElementById']('role-list-header');
if (_0x1c3d07) {
    _0x1c3d07['addEventListener']('click', () => {
        const _0x572d2e = document['getElementById']('role-list-items');
        const _0x1849a7 = document['getElementById']('role-list-toggle');
        if (_0x572d2e['style']['display'] === 'none') {
            _0x572d2e['style']['display'] = 'flex';
            _0x1849a7['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x572d2e['style']['display'] = 'none';
            _0x1849a7['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x4c1c85() {
    const _0xc3d40c = document['getElementById']('mobile-joystick-zone');
    const _0x7f74c2 = document['getElementById']('mobile-joystick-base');
    const _0x2ca263 = document['getElementById']('mobile-joystick-knob');
    if (_0xc3d40c && _0x7f74c2 && _0x2ca263) {
        const _0x4dfd2b = 0x3e;
        const _0x1fbfbc = (_0x2bdcd1, _0x3014bf) => {
            const _0x15a345 = _0x7f74c2['getBoundingClientRect']();
            const _0x3f2ab5 = _0x15a345['left'] + _0x15a345['width'] / 0x2;
            const _0x588535 = _0x15a345['top'] + _0x15a345['height'] / 0x2;
            const _0x5ab80c = _0x2bdcd1 - _0x3f2ab5;
            const _0x2290ae = _0x3014bf - _0x588535;
            const _0x285fb3 = Math['hypot'](_0x5ab80c, _0x2290ae);
            if (_0x285fb3 === 0x0) {
                _0x5e00ed = 0x0;
                _0x59c0aa = 0x0;
                _0x1cad30 = ![];
                _0x2ca263['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0xebca84 = Math['min'](_0x285fb3, _0x4dfd2b);
            const _0x4a93cc = _0x5ab80c / _0x285fb3 * _0xebca84;
            const _0x2819d7 = _0x2290ae / _0x285fb3 * _0xebca84;
            _0x5e00ed = _0x4a93cc / _0x4dfd2b;
            _0x59c0aa = _0x2819d7 / _0x4dfd2b;
            _0x1cad30 = _0x285fb3 >= _0x4dfd2b * 0.75;
            _0x2ca263['style']['transform'] = 'translate(' + _0x4a93cc + 'px,\x20' + _0x2819d7 + 'px)';
        };
        const _0x43e889 = _0x5096c8 => {
            for (let _0x182013 = 0x0; _0x182013 < _0x5096c8['changedTouches']['length']; _0x182013++) {
                const _0x4ca59d = _0x5096c8['changedTouches'][_0x182013];
                if (_0x494f21 === null) {
                    _0x494f21 = _0x4ca59d['identifier'];
                    _0xf74c32 = !![];
                    _0x1fbfbc(_0x4ca59d['clientX'], _0x4ca59d['clientY']);
                    break;
                }
            }
        };
        const _0x10efd4 = _0x4d9911 => {
            for (let _0x1ce0cb = 0x0; _0x1ce0cb < _0x4d9911['changedTouches']['length']; _0x1ce0cb++) {
                const _0x1d7235 = _0x4d9911['changedTouches'][_0x1ce0cb];
                if (_0x1d7235['identifier'] === _0x494f21) {
                    _0x1fbfbc(_0x1d7235['clientX'], _0x1d7235['clientY']);
                    break;
                }
            }
        };
        const _0x3bf54f = _0x311e14 => {
            for (let _0x1203c2 = 0x0; _0x1203c2 < _0x311e14['changedTouches']['length']; _0x1203c2++) {
                const _0x4f07da = _0x311e14['changedTouches'][_0x1203c2];
                if (_0x4f07da['identifier'] === _0x494f21) {
                    _0x494f21 = null;
                    _0xf74c32 = ![];
                    _0x5e00ed = 0x0;
                    _0x59c0aa = 0x0;
                    _0x1cad30 = ![];
                    _0x2ca263['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0xc3d40c['addEventListener']('touchstart', _0x1539eb => {
            _0x1539eb['preventDefault']();
            _0x43e889(_0x1539eb);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x10efd4, { 'passive': !![] });
        window['addEventListener']('touchend', _0x3bf54f, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x3bf54f, { 'passive': !![] });
    }
    const _0x298344 = (_0x40925b, _0xb00f5c) => {
        const _0x19ada8 = _0x40925b / _0x5b4c29['SYSTEM']['viewScale'];
        const _0x609e1f = _0xb00f5c / _0x5b4c29['SYSTEM']['viewScale'];
        const _0x47e402 = _0x2bd42a['x'] - _0x5b4c29['CAMERA']['x'] + _0x2bd42a['width'] / 0x2;
        const _0x4bb1d5 = _0x2bd42a['y'] - _0x5b4c29['CAMERA']['y'] + _0x2bd42a['height'] / 0x2;
        _0x52f803 = Math['atan2'](_0x609e1f - _0x4bb1d5, _0x19ada8 - _0x47e402);
        _0x3a7cd3 = !![];
        _0x5b4c29['INPUTS']['mouseX'] = _0x40925b;
        _0x5b4c29['INPUTS']['mouseY'] = _0xb00f5c;
    };
    _0xe09461['addEventListener']('touchstart', _0x3f46bc => {
        if (_0x302b5e)
            return;
        for (let _0x41cf66 = 0x0; _0x41cf66 < _0x3f46bc['changedTouches']['length']; _0x41cf66++) {
            const _0xd76550 = _0x3f46bc['changedTouches'][_0x41cf66];
            if (_0xd76550['identifier'] !== _0x494f21 && _0x3d593d === null) {
                _0x3d593d = _0xd76550['identifier'];
                _0x298344(_0xd76550['clientX'], _0xd76550['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0xe09461['addEventListener']('touchmove', _0xef1a5a => {
        if (_0x302b5e)
            return;
        for (let _0x3d60e4 = 0x0; _0x3d60e4 < _0xef1a5a['changedTouches']['length']; _0x3d60e4++) {
            const _0x33d8df = _0xef1a5a['changedTouches'][_0x3d60e4];
            if (_0x33d8df['identifier'] === _0x3d593d) {
                _0x298344(_0x33d8df['clientX'], _0x33d8df['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0xb5577a = _0x3fc005 => {
        for (let _0x4e584e = 0x0; _0x4e584e < _0x3fc005['changedTouches']['length']; _0x4e584e++) {
            const _0x5b389b = _0x3fc005['changedTouches'][_0x4e584e];
            if (_0x5b389b['identifier'] === _0x3d593d) {
                _0x3d593d = null;
                _0x3a7cd3 = ![];
                break;
            }
        }
    };
    _0xe09461['addEventListener']('touchend', _0xb5577a, { 'passive': !![] });
    _0xe09461['addEventListener']('touchcancel', _0xb5577a, { 'passive': !![] });
    const _0x4d2cad = document['getElementById']('mob-sprint-btn');
    if (_0x4d2cad) {
        _0x4d2cad['addEventListener']('click', _0x31ebed => {
            _0x31ebed['stopPropagation']();
            _0x3c8cba = !_0x3c8cba;
            _0x4d2cad['classList']['toggle']('active', _0x3c8cba);
        });
    }
    const _0x3ae542 = document['getElementById']('mob-interact-btn');
    if (_0x3ae542) {
        _0x3ae542['addEventListener']('click', _0x5613de => {
            _0x5613de['stopPropagation']();
            if (!_0x2bd42a['isDead']) {
                const _0x3ded2a = Date['now']();
                if (!window['_lastDoorSend'] || _0x3ded2a - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x3ded2a;
                    if (_0x98220b && _0x98220b['readyState'] === WebSocket['OPEN'])
                        _0x98220b['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x1ed057 = document['getElementById']('mob-ability-btn');
    if (_0x1ed057) {
        _0x1ed057['addEventListener']('click', _0x180659 => {
            _0x180659['stopPropagation']();
            if (_0x2bd42a['isDead'])
                return;
            if (_0x4ab76e === 'Mayor') {
                if (_0x353bbb['has'](_0x46bccd)) {
                    _0x511862('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x4af390 = document['getElementById']('mayor-confirm-dialog');
                if (_0x4af390)
                    _0x4af390['style']['display'] = 'flex';
                return;
            }
            if (_0x5b4c29['GAME_STATE'] === 'NIGHT') {
                if (!_0x5b4c29['NIGHT_ABILITY_OPEN']) {
                    _0x511862('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x266874 = document['getElementById']('ability-ui');
                if (_0x266874) {
                    if (_0x266874['style']['display'] === 'block') {
                        _0x266874['style']['display'] = 'none';
                    } else {
                        _0x2457a1();
                        _0x266874['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x5b4c29['GAME_STATE'] === 'DAY_DISCUSS' || _0x5b4c29['GAME_STATE'] === 'DAY_VOTE') {
                _0x511862('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x2fb8a3 = document['getElementById']('mob-will-btn');
    const _0x3d963f = document['getElementById']('will-ui');
    const _0x50502b = document['getElementById']('will-input');
    const _0x470aa2 = document['getElementById']('close-will-btn');
    const _0x979a52 = () => {
        if (!_0x3d963f)
            return;
        if (_0x3d963f['style']['display'] === 'flex') {
            _0x3d963f['style']['display'] = 'none';
            if (_0x98220b && _0x98220b['readyState'] === WebSocket['OPEN'] && _0x50502b) {
                _0x98220b['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x50502b['value']
                }));
            }
            if (_0x50502b)
                _0x50502b['blur']();
        } else {
            _0x3d963f['style']['display'] = 'flex';
            if (_0x50502b)
                _0x50502b['focus']();
        }
    };
    if (_0x2fb8a3)
        _0x2fb8a3['addEventListener']('click', _0xb4ad38 => {
            _0xb4ad38['stopPropagation']();
            _0x979a52();
        });
    if (_0x470aa2)
        _0x470aa2['addEventListener']('click', _0x3a33cd => {
            _0x3a33cd['stopPropagation']();
            _0x979a52();
        });
    const _0x1bf14b = document['getElementById']('mob-chat-btn');
    const _0x1ffdf0 = document['getElementById']('mobile-chat-overlay');
    const _0x4d8604 = document['getElementById']('mobile-chat-input');
    const _0x50dbff = document['getElementById']('mobile-chat-send');
    const _0x23bf0b = document['getElementById']('mobile-chat-cancel');
    const _0x4898be = () => {
        if (!_0x1ffdf0 || !_0x4d8604)
            return;
        _0x1ffdf0['style']['display'] = 'flex';
        _0x4d8604['value'] = '';
        _0x4d8604['focus']();
    };
    const _0xfe3dbc = () => {
        if (!_0x1ffdf0 || !_0x4d8604)
            return;
        _0x1ffdf0['style']['display'] = 'none';
        _0x4d8604['blur']();
    };
    const _0x46c51f = () => {
        if (!_0x4d8604)
            return;
        const _0x884891 = _0x4d8604['value']['trim']();
        if (_0x884891['length'] > 0x0 && _0x98220b && _0x98220b['readyState'] === WebSocket['OPEN']) {
            _0x98220b['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x884891
            }));
        }
        _0x4d8604['value'] = '';
        _0xfe3dbc();
    };
    if (_0x1bf14b)
        _0x1bf14b['addEventListener']('click', _0x20b2be => {
            _0x20b2be['stopPropagation']();
            _0x4898be();
        });
    if (_0x50dbff)
        _0x50dbff['addEventListener']('click', _0x3bc849 => {
            _0x3bc849['stopPropagation']();
            _0x46c51f();
        });
    if (_0x23bf0b)
        _0x23bf0b['addEventListener']('click', _0x47f2df => {
            _0x47f2df['stopPropagation']();
            _0xfe3dbc();
        });
    if (_0x4d8604) {
        _0x4d8604['addEventListener']('keydown', _0x3f25f1 => {
            if (_0x3f25f1['key'] === 'Enter') {
                _0x3f25f1['preventDefault']();
                _0x46c51f();
            } else if (_0x3f25f1['key'] === 'Escape') {
                _0xfe3dbc();
            }
        });
    }
    const _0x3c9bf3 = document['getElementById']('mob-top-chat');
    if (_0x3c9bf3)
        _0x3c9bf3['addEventListener']('click', _0x37d11a => {
            _0x37d11a['stopPropagation']();
            _0x4898be();
        });
    const _0x4dffda = document['getElementById']('mob-top-will');
    if (_0x4dffda)
        _0x4dffda['addEventListener']('click', _0x1bf4cb => {
            _0x1bf4cb['stopPropagation']();
            _0x979a52();
        });
    const _0xc92042 = document['getElementById']('mob-top-roles');
    if (_0xc92042) {
        _0xc92042['addEventListener']('click', _0x343b32 => {
            _0x343b32['stopPropagation']();
            const _0x559304 = document['getElementById']('role-list-ui');
            const _0x1bfab2 = document['getElementById']('leaderboard-ui');
            if (_0x1bfab2)
                _0x1bfab2['style']['display'] = 'none';
            if (_0x559304)
                _0x559304['style']['display'] = _0x559304['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x58dcba = document['getElementById']('mob-top-players');
    if (_0x58dcba) {
        _0x58dcba['addEventListener']('click', _0x33fd3c => {
            _0x33fd3c['stopPropagation']();
            const _0x47908f = document['getElementById']('leaderboard-ui');
            const _0x5a0794 = document['getElementById']('role-list-ui');
            if (_0x5a0794)
                _0x5a0794['style']['display'] = 'none';
            if (_0x47908f)
                _0x47908f['style']['display'] = _0x47908f['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x1337ea = document['getElementById']('mob-top-help');
    if (_0x1337ea) {
        _0x1337ea['addEventListener']('click', _0x4a8b33 => {
            _0x4a8b33['stopPropagation']();
            const _0x1b2a30 = document['getElementById']('guide-ui');
            if (_0x1b2a30)
                _0x1b2a30['style']['display'] = _0x1b2a30['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x4a6bf2) {
            _0x4a6bf2 = !![];
            _0x11c104();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
