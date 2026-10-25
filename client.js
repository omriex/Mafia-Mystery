document['addEventListener']('contextmenu', _0x4056b1 => _0x4056b1['preventDefault']());
const _0x40e5 = {
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
let _0x4638e4 = '';
function _0x165bec(_0x47675e, _0x12ba36) {
    const _0x18edb8 = document['getElementById']('role-list-ui');
    const _0x42586e = document['getElementById']('role-list-items');
    if (!_0x18edb8 || !_0x42586e)
        return;
    if (!_0x12ba36 || _0x12ba36 === 'off' || !_0x47675e || _0x47675e['length'] === 0x0) {
        _0x18edb8['style']['display'] = 'none';
        return;
    }
    const _0x5b695c = _0x12ba36 + '|' + JSON['stringify'](_0x47675e);
    if (_0x5b695c === _0x4638e4)
        return;
    _0x4638e4 = _0x5b695c;
    const _0x54073e = document['getElementById']('role-tooltip');
    if (_0x54073e) {
        _0x54073e['style']['visibility'] = 'hidden';
        _0x54073e['style']['opacity'] = '0';
    }
    _0x18edb8['style']['display'] = 'flex';
    _0x42586e['innerHTML'] = '';
    _0x47675e['forEach'](_0x5de462 => {
        const _0x4fc6b9 = document['createElement']('div');
        _0x4fc6b9['className'] = 'role-list-entry';
        const _0x5b49df = _0x5de462['name']['includes']('Mafia') || _0x5de462['name'] === 'Skinwalker';
        _0x4fc6b9['classList']['add'](_0x5b49df ? 'mafia' : 'town');
        if (_0x12ba36 === 'precise' && _0x5de462['isDead']) {
            _0x4fc6b9['classList']['remove']('town', 'mafia');
            _0x4fc6b9['classList']['add']('dead');
            _0x4fc6b9['innerHTML'] = '<span>' + _0x5de462['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x8edded = _0x5de462['count'] !== undefined && _0x5de462['count'] !== null ? _0x5de462['count'] + 'x\x20' : '';
            _0x4fc6b9['innerHTML'] = '<span>' + _0x8edded + _0x5de462['name'] + '</span>';
        }
        if (_0x12ba36 === 'subalignments' && _0x40e5[_0x5de462['name']]) {
            _0x4fc6b9['style']['cursor'] = 'pointer';
            _0x4fc6b9['addEventListener']('mouseenter', () => {
                const _0xba559c = document['getElementById']('role-tooltip');
                if (!_0xba559c)
                    return;
                const _0x48c466 = _0x40e5[_0x5de462['name']]['join'](',\x20');
                _0xba559c['innerHTML'] = '';
                const _0x4c5e22 = document['createElement']('span');
                _0x4c5e22['style']['color'] = '#ffcc00';
                _0x4c5e22['textContent'] = _0x5de462['name'];
                _0xba559c['appendChild'](_0x4c5e22);
                _0xba559c['appendChild'](document['createElement']('br'));
                _0xba559c['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x48c466));
                const _0x3e9575 = _0x4fc6b9['getBoundingClientRect']();
                _0xba559c['style']['left'] = _0x3e9575['left'] - 0xeb + 'px';
                _0xba559c['style']['top'] = _0x3e9575['top'] + 'px';
                _0xba559c['style']['display'] = 'block';
                _0xba559c['style']['visibility'] = 'visible';
                _0xba559c['style']['opacity'] = '1';
            });
            _0x4fc6b9['addEventListener']('mouseleave', () => {
                const _0x3b4343 = document['getElementById']('role-tooltip');
                if (_0x3b4343) {
                    _0x3b4343['style']['display'] = 'none';
                    _0x3b4343['style']['visibility'] = 'hidden';
                    _0x3b4343['style']['opacity'] = '0';
                }
            });
        }
        _0x42586e['appendChild'](_0x4fc6b9);
    });
}
let _0x5293d1 = null;
let _0x2f4c38 = null;
const _0x161916 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x4ad7bb = 'Player???';
let _0x3b1f31 = ![];
let _0x36a8ec = {};
let _0xe67095 = null;
let _0xf4ecba = 0x0;
let _0x1638d7 = 0x0;
let _0x23886a = 0x0;
let _0xd9375c = new Set();
let _0x1e27cf = ![];
let _0x44daa8 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x19ba4a = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x1bdfdc = ![];
let _0x49c75d = null;
let _0x4d4832 = 0x0;
let _0x11c673 = 0x0;
let _0x333d19 = ![];
let _0x4a6d81 = ![];
let _0x51cf45 = 0x0;
let _0x5855cb = null;
let _0x4a5fc8 = ![];
const _0x370ff1 = ((() => {
    const _0x382bf6 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x548b83 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0xc1193c = 0x320;
    const _0x37f9d1 = {};
    const _0x3a7ce0 = {};
    let _0x8df380 = null;
    let _0x5b8604 = _0x548b83 === 0x0;
    let _0x18a3e8 = ![];
    for (const [_0xb784a2, _0x5e31d2] of Object['entries'](_0x382bf6)) {
        const _0x3d2b13 = new Audio(_0x5e31d2);
        _0x3d2b13['loop'] = !![];
        _0x3d2b13['volume'] = 0x0;
        _0x3d2b13['preload'] = 'auto';
        _0x37f9d1[_0xb784a2] = _0x3d2b13;
        _0x3a7ce0[_0xb784a2] = null;
    }
    const _0x1f80d3 = _0x7af2a3 => Math['min'](0x1, Math['max'](0x0, _0x7af2a3));
    function _0x5352a7(_0x321137) {
        if (_0x3a7ce0[_0x321137] !== null) {
            cancelAnimationFrame(_0x3a7ce0[_0x321137]);
            _0x3a7ce0[_0x321137] = null;
        }
    }
    function _0x1e25ec(_0x1fdecd, _0x1cafee, _0x3b19d6, _0x4eed63, _0x27bf50) {
        _0x5352a7(_0x1fdecd);
        const _0x550be8 = _0x37f9d1[_0x1fdecd];
        const _0x1ab821 = performance['now']();
        const _0x1f56eb = _0xdc3349 => {
            const _0x5577d6 = _0x1f80d3((_0xdc3349 - _0x1ab821) / _0x4eed63);
            const _0xb1684e = _0x1f80d3(_0x1cafee + (_0x3b19d6 - _0x1cafee) * _0x5577d6);
            _0x550be8['volume'] = _0x5b8604 ? 0x0 : _0xb1684e;
            if (_0x5577d6 < 0x1) {
                _0x3a7ce0[_0x1fdecd] = requestAnimationFrame(_0x1f56eb);
            } else {
                _0x3a7ce0[_0x1fdecd] = null;
                _0x550be8['volume'] = _0x5b8604 ? 0x0 : _0x1f80d3(_0x3b19d6);
                if (_0x27bf50)
                    _0x27bf50();
            }
        };
        _0x3a7ce0[_0x1fdecd] = requestAnimationFrame(_0x1f56eb);
    }
    function _0xf83408(_0x178e8e) {
        const _0x1ef5b6 = _0x178e8e['play']();
        if (_0x1ef5b6 && _0x1ef5b6['catch']) {
            _0x1ef5b6['catch'](() => {
                if (!_0x18a3e8) {
                    const _0x6810d = () => {
                        _0x18a3e8 = !![];
                        _0x178e8e['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x6810d);
                        document['removeEventListener']('keydown', _0x6810d);
                        document['removeEventListener']('touchstart', _0x6810d);
                    };
                    document['addEventListener']('click', _0x6810d, { 'once': !![] });
                    document['addEventListener']('keydown', _0x6810d, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x6810d, { 'once': !![] });
                }
            });
        }
    }
    function _0x1efb65(_0x37d4e3) {
        if (!_0x382bf6[_0x37d4e3])
            return;
        if (_0x8df380 === _0x37d4e3)
            return;
        const _0x5829a8 = _0x8df380;
        _0x8df380 = _0x37d4e3;
        const _0x358d73 = _0x37f9d1[_0x37d4e3];
        _0x5352a7(_0x37d4e3);
        _0x358d73['currentTime'] = 0x0;
        _0x358d73['volume'] = 0x0;
        _0xf83408(_0x358d73);
        _0x1e25ec(_0x37d4e3, 0x0, _0x548b83, _0xc1193c);
        if (_0x5829a8 && _0x37f9d1[_0x5829a8]) {
            const _0x4e570b = _0x5829a8;
            const _0x14d208 = _0x37f9d1[_0x4e570b];
            const _0x2bb54d = _0x1f80d3(_0x14d208['volume']);
            _0x1e25ec(_0x4e570b, _0x2bb54d, 0x0, _0xc1193c, () => {
                _0x14d208['pause']();
                _0x14d208['currentTime'] = 0x0;
            });
        }
    }
    function _0x4873c6(_0x617080) {
        _0x548b83 = _0x1f80d3(_0x617080);
        localStorage['setItem']('musicVolume', String(_0x548b83));
        if (!_0x5b8604 && _0x8df380 && _0x3a7ce0[_0x8df380] === null) {
            _0x37f9d1[_0x8df380]['volume'] = _0x548b83;
        }
    }
    function _0x34b4e2() {
        return _0x548b83;
    }
    function _0x4ef6cf(_0x25a365) {
        _0x5b8604 = _0x25a365;
        for (const _0x12f6bf of Object['keys'](_0x37f9d1)) {
            if (_0x3a7ce0[_0x12f6bf] === null) {
                _0x37f9d1[_0x12f6bf]['volume'] = _0x25a365 || _0x12f6bf !== _0x8df380 ? 0x0 : _0x548b83;
            }
        }
    }
    function _0x3c9d84() {
        return _0x5b8604;
    }
    function _0x1d59a3(_0x1e70ff) {
        if (_0x1e70ff === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x1e70ff === 'DAY_VOTE')
            return 'voting';
        if (_0x1e70ff === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x1a10c8(_0x3994bd) {
        _0x1efb65(_0x1d59a3(_0x3994bd));
    }
    function _0xb1128a(_0x555d8b) {
        _0x1efb65(_0x555d8b);
    }
    return {
        'play': _0x1efb65,
        'onStateChange': _0x1a10c8,
        'onSoundEvent': _0xb1128a,
        'setVolume': _0x4873c6,
        'getVolume': _0x34b4e2,
        'setMuted': _0x4ef6cf,
        'isMuted': _0x3c9d84
    };
})());
const _0x479c78 = ((() => {
    const _0x3739c1 = 0x258;
    const _0x27f497 = 0xb4;
    const _0x306c3e = 0x708;
    const _0x55e2c6 = 0x140;
    const _0x38a115 = 0.18;
    const _0x163275 = 0.95;
    const _0x9b237d = new Audio('audio/heartbeat.mp3');
    _0x9b237d['loop'] = ![];
    _0x9b237d['preload'] = 'auto';
    _0x9b237d['volume'] = 0x0;
    let _0x129e17 = 0x0;
    let _0x4c5d64 = Infinity;
    function _0x320957(_0x4e43af, _0x4d94b2, _0x1bb3ba) {
        return Math['min'](_0x1bb3ba, Math['max'](_0x4d94b2, _0x4e43af));
    }
    function _0x5eb8c6(_0x3eaed0, _0x1d0187, _0x11856e) {
        return _0x3eaed0 + (_0x1d0187 - _0x3eaed0) * _0x11856e;
    }
    function _0x4db4e5(_0x545ab2) {
        if (_0x2b9810['GAME_STATE'] !== 'NIGHT' || _0x2ecd24['isDead'] || _0xe67095 === 'Skinwalker') {
            _0x4c5d64 = Infinity;
            return;
        }
        const _0x1c5a26 = _0x2ecd24['x'] + 22.5;
        const _0x1071a9 = _0x2ecd24['y'] + 22.5;
        let _0x21b76a = Infinity;
        for (const _0x2ca893 in _0x36a8ec) {
            const _0x2efe2b = _0x36a8ec[_0x2ca893];
            if (!_0x2efe2b['isDark'] || _0x2efe2b['isDead'])
                continue;
            const _0x3f582f = _0x2efe2b['renderX'] + 22.5 - _0x1c5a26;
            const _0x47c101 = _0x2efe2b['renderY'] + 22.5 - _0x1071a9;
            const _0x152276 = Math['sqrt'](_0x3f582f * _0x3f582f + _0x47c101 * _0x47c101);
            if (_0x152276 < _0x21b76a)
                _0x21b76a = _0x152276;
        }
        _0x4c5d64 = _0x21b76a;
        if (_0x21b76a > _0x3739c1)
            return;
        const _0x27c5db = 0x1 - _0x320957((_0x21b76a - _0x27f497) / (_0x3739c1 - _0x27f497), 0x0, 0x1);
        const _0x3b22a9 = _0x5eb8c6(_0x306c3e, _0x55e2c6, _0x27c5db);
        const _0x16a7cc = _0x5eb8c6(_0x38a115, _0x163275, _0x27c5db);
        if (_0x545ab2 >= _0x129e17) {
            _0x9b237d['currentTime'] = 0x0;
            _0x9b237d['volume'] = _0x370ff1['isMuted']() ? 0x0 : _0x320957(_0x16a7cc * _0x370ff1['getVolume']() / 0.7, 0x0, 0x1);
            _0x9b237d['play']()['catch'](() => {
            });
            _0x129e17 = _0x545ab2 + _0x3b22a9;
        }
    }
    return { 'tick': _0x4db4e5 };
})());
function _0xf3ab08() {
    const _0x3ab9a2 = document['getElementById']('mob-ability-btn');
    if (!_0x3ab9a2)
        return;
    const _0x508997 = _0x2b9810['GAME_STATE'] === 'NIGHT' && !_0x2ecd24['isDead'];
    const _0x5838ad = _0xe67095 === 'Mayor' && !_0xd9375c['has'](_0x2f4c38) && !_0x2ecd24['isDead'];
    if (_0x508997 || _0x5838ad) {
        _0x3ab9a2['style']['display'] = 'flex';
    } else {
        _0x3ab9a2['style']['display'] = 'none';
    }
}
function _0x537b31() {
    const _0x56c3be = document['getElementById']('mobile-joystick-zone');
    const _0x2910c9 = document['getElementById']('mobile-top-bar');
    const _0x2a003e = document['getElementById']('mobile-action-bar');
    if (!_0x56c3be || !_0x2910c9 || !_0x2a003e)
        return;
    if (!_0x23c580 && _0x19ba4a) {
        _0x56c3be['style']['display'] = 'flex';
        _0x2910c9['style']['display'] = 'flex';
        _0x2a003e['style']['display'] = 'flex';
        _0xf3ab08();
    } else {
        _0x56c3be['style']['display'] = 'none';
        _0x2910c9['style']['display'] = 'none';
        _0x2a003e['style']['display'] = 'none';
    }
}
const _0x49837e = document['getElementById']('gameCanvas');
const _0x4ad738 = _0x49837e['getContext']('2d', { 'alpha': ![] });
const _0x264e28 = 0x500;
const _0x4eb9c8 = 0x2d0;
const _0x2b9810 = {
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
        'width': _0x264e28,
        'height': _0x4eb9c8
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
const _0x2ecd24 = {
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
const _0x31b665 = new Image();
const _0x6696ab = new Image();
const _0x2ce22e = new Image();
const _0x486fa2 = new Image();
_0x486fa2['src'] = 'assets/mayor\x20cosmetic.png';
const _0x50dad8 = [
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
const _0x4d533c = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x8cd3f = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x8cd3f === 'body1.png' || _0x8cd3f === 'body1')
    _0x8cd3f = 'body01.png';
if (!_0x8cd3f['endsWith']('.png'))
    _0x8cd3f += '.png';
let _0x58b6b0 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x58b6b0['endsWith']('.png'))
    _0x58b6b0 += '.png';
let _0x23c580 = !![];
let _0x545a23 = null;
let _0x4dbc22 = null;
let _0x5b7b98 = 0x3c;
let _0x3b6325 = 0x2d;
const _0x1903bf = {};
const _0x9d54e5 = new Image();
_0x9d54e5['src'] = 'assets/yanito932.png';
_0x1903bf['assets/yanito932.png'] = _0x9d54e5;
function _0xd162c0(_0x20da47) {
    if (!_0x1903bf[_0x20da47] || !_0x1903bf[_0x20da47]['complete'] && _0x1903bf[_0x20da47]['naturalWidth'] === 0x0 && _0x1903bf[_0x20da47]['naturalHeight'] === 0x0) {
        const _0x187c7a = new Image();
        _0x187c7a['src'] = _0x20da47;
        _0x1903bf[_0x20da47] = _0x187c7a;
    }
    return _0x1903bf[_0x20da47];
}
function _0xd64f74(_0x1221a7, _0xc972fd, _0x4bce64, _0x34b569, _0xb87cde) {
    try {
        const _0x557b7d = 'assets/' + (_0xc972fd || 'body01.png');
        const _0x285484 = _0xd162c0(_0x557b7d);
        if (_0x285484['complete'] && _0x285484['naturalWidth'] > 0x0) {
            _0x1221a7['drawImage'](_0x285484, -_0x34b569 / 0x2, -_0xb87cde / 0x2, _0x34b569, _0xb87cde);
        }
        if (_0x4bce64 === null || _0x4bce64 === undefined)
            return;
        const _0x5c5c0b = 'assets/' + _0x4bce64;
        const _0x2ecd6b = _0xd162c0(_0x5c5c0b);
        if (_0x2ecd6b['complete'] && _0x2ecd6b['naturalWidth'] > 0x0) {
            _0x1221a7['drawImage'](_0x2ecd6b, -_0x34b569 / 0x2, -_0xb87cde / 0x2, _0x34b569, _0xb87cde);
        }
    } catch (_0x3bcee8) {
    }
}
function _0x4cc9ca() {
    const _0x45df38 = document['getElementById']('body-skin-grid');
    const _0x194ac8 = document['getElementById']('eyes-skin-grid');
    if (!_0x45df38 || !_0x194ac8)
        return;
    _0x45df38['innerHTML'] = '';
    _0x50dad8['forEach'](_0xe6b7f => {
        const _0x336b6b = document['createElement']('button');
        _0x336b6b['className'] = 'skin-btn' + (_0xe6b7f === _0x8cd3f ? '\x20selected' : '');
        const _0x164fee = document['createElement']('img');
        _0x164fee['src'] = 'assets/' + _0xe6b7f;
        _0x336b6b['appendChild'](_0x164fee);
        _0x336b6b['onclick'] = () => {
            _0x8cd3f = _0xe6b7f;
            localStorage['setItem']('selectedBody', _0xe6b7f);
            _0x45df38['querySelectorAll']('.skin-btn')['forEach'](_0x33c8e8 => _0x33c8e8['classList']['remove']('selected'));
            _0x336b6b['classList']['add']('selected');
        };
        _0x45df38['appendChild'](_0x336b6b);
    });
    _0x194ac8['innerHTML'] = '';
    _0x4d533c['forEach'](_0x5cae6e => {
        const _0x4d3636 = document['createElement']('button');
        _0x4d3636['className'] = 'skin-btn' + (_0x5cae6e === _0x58b6b0 ? '\x20selected' : '');
        const _0x313502 = document['createElement']('img');
        _0x313502['src'] = 'assets/' + _0x5cae6e;
        _0x4d3636['appendChild'](_0x313502);
        _0x4d3636['onclick'] = () => {
            _0x58b6b0 = _0x5cae6e;
            localStorage['setItem']('selectedEyes', _0x5cae6e);
            _0x194ac8['querySelectorAll']('.skin-btn')['forEach'](_0xb55d62 => _0xb55d62['classList']['remove']('selected'));
            _0x4d3636['classList']['add']('selected');
        };
        _0x194ac8['appendChild'](_0x4d3636);
    });
}
function _0x223286(_0x458ae8) {
    if (!_0x2b9810['MAP']['columns'] || !_0x2b9810['CAMERA']['width'])
        return;
    const _0x1b5327 = Math['max'](0x0, _0x2b9810['MAP']['columns'] * _0x2b9810['MAP']['tileSize'] - _0x2b9810['CAMERA']['width']);
    const _0x5e5b36 = Math['max'](0x0, _0x2b9810['MAP']['rows'] * _0x2b9810['MAP']['tileSize'] - _0x2b9810['CAMERA']['height']);
    if (_0x545a23 === null) {
        _0x545a23 = _0x1b5327 / 0x2;
        _0x4dbc22 = _0x5e5b36 / 0x2;
    }
    _0x545a23 += _0x5b7b98 * _0x458ae8;
    _0x4dbc22 += _0x3b6325 * _0x458ae8;
    if (_0x545a23 <= 0x0) {
        _0x545a23 = 0x0;
        _0x5b7b98 = Math['abs'](_0x5b7b98);
    } else if (_0x545a23 >= _0x1b5327) {
        _0x545a23 = _0x1b5327;
        _0x5b7b98 = -Math['abs'](_0x5b7b98);
    }
    if (_0x4dbc22 <= 0x0) {
        _0x4dbc22 = 0x0;
        _0x3b6325 = Math['abs'](_0x3b6325);
    } else if (_0x4dbc22 >= _0x5e5b36) {
        _0x4dbc22 = _0x5e5b36;
        _0x3b6325 = -Math['abs'](_0x3b6325);
    }
    _0x2b9810['CAMERA']['x'] = _0x545a23;
    _0x2b9810['CAMERA']['y'] = _0x4dbc22;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x260dbd = document['getElementById']('play-btn');
    const _0x58368e = document['getElementById']('username-input');
    const _0x124c8a = localStorage['getItem']('playerName');
    if (_0x124c8a && _0x58368e) {
        _0x58368e['value'] = _0x124c8a;
    }
    const _0x4ee919 = () => {
        _0x370ff1['play']('wait');
        document['removeEventListener']('click', _0x4ee919);
        document['removeEventListener']('keydown', _0x4ee919);
        document['removeEventListener']('touchstart', _0x4ee919);
    };
    document['addEventListener']('click', _0x4ee919, { 'once': !![] });
    document['addEventListener']('keydown', _0x4ee919, { 'once': !![] });
    document['addEventListener']('touchstart', _0x4ee919, { 'once': !![] });
    if (_0x260dbd) {
        _0x260dbd['addEventListener']('click', () => {
            const _0x46c552 = _0x58368e['value'];
            const _0x45cb4e = _0x46c552['replace'](/<[^>]*>/g, '')['replace'](/[^\x20-\x7E]/g, '')['replace'](/[<>]/g, '')['replace'](/\s+/g, '\x20')['trim']()['substring'](0x0, 0xe);
            _0x4ad7bb = _0x45cb4e || 'Player';
            localStorage['setItem']('playerName', _0x4ad7bb);
            _0x23c580 = ![];
            _0x2b9810['CAMERA']['x'] = null;
            _0x2b9810['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x4cf66d = document['getElementById']('controls-hint');
            if (_0x4cf66d && !_0x19ba4a)
                _0x4cf66d['style']['display'] = 'block';
            _0x537b31();
            if (_0x19ba4a) {
                const _0x24f309 = document['getElementById']('leaderboard-list');
                const _0x186389 = document['getElementById']('leaderboard-toggle');
                if (_0x24f309) {
                    _0x24f309['style']['display'] = 'none';
                    if (_0x186389)
                        _0x186389['style']['transform'] = 'rotate(180deg)';
                }
                const _0x16304c = document['getElementById']('role-list-items');
                const _0xbfd0d = document['getElementById']('role-list-toggle');
                if (_0x16304c) {
                    _0x16304c['style']['display'] = 'none';
                    if (_0xbfd0d)
                        _0xbfd0d['style']['transform'] = 'rotate(180deg)';
                }
            }
            if (_0x5293d1 && _0x5293d1['readyState'] === WebSocket['OPEN']) {
                _0x5293d1['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x4ad7bb,
                    'token': _0x161916,
                    'body': _0x8cd3f,
                    'eyes': _0x58b6b0
                }));
            } else if (!_0x5293d1 || _0x5293d1['readyState'] === WebSocket['CLOSED'] || _0x5293d1['readyState'] === WebSocket['CLOSING']) {
                _0x47eb32();
            }
        });
    }
    _0x4cc9ca();
    _0x47eb32();
    _0x22a08d();
    _0x3f211e();
    _0xfbf777();
});
function _0x3f211e() {
    const _0x142ec5 = document['getElementById']('settings-btn');
    const _0x26723e = document['getElementById']('settings-panel');
    const _0x5f0bca = document['getElementById']('close-settings-btn');
    const _0x4931f8 = document['getElementById']('setting-mouse-relative');
    if (_0x4931f8) {
        _0x4931f8['checked'] = _0x44daa8;
        _0x4931f8['addEventListener']('change', () => {
            _0x44daa8 = _0x4931f8['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x44daa8 ? 'true' : 'false');
        });
    }
    const _0x8ca88c = document['getElementById']('setting-music-volume');
    const _0x121e26 = document['getElementById']('setting-music-volume-display');
    function _0x131220(_0xc4566d) {
        const _0x1a169d = (_0xc4566d['value'] - _0xc4566d['min']) / (_0xc4566d['max'] - _0xc4566d['min']) * 0x64;
        _0xc4566d['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x1a169d + '%,\x20#444\x20' + _0x1a169d + '%)';
    }
    if (_0x8ca88c) {
        const _0x4a9772 = _0x370ff1['getVolume']();
        const _0x126222 = Math['round'](_0x4a9772 * 0x64);
        _0x8ca88c['value'] = _0x126222;
        if (_0x121e26)
            _0x121e26['textContent'] = _0x126222 + '%';
        _0x131220(_0x8ca88c);
        _0x8ca88c['addEventListener']('input', () => {
            const _0x589953 = parseInt(_0x8ca88c['value'], 0xa);
            if (_0x121e26)
                _0x121e26['textContent'] = _0x589953 + '%';
            _0x131220(_0x8ca88c);
            _0x370ff1['setVolume'](_0x589953 / 0x64);
            _0x370ff1['setMuted'](_0x589953 === 0x0);
        });
    }
    if (_0x142ec5 && _0x26723e) {
        _0x142ec5['addEventListener']('click', _0x1638de => {
            _0x1638de['stopPropagation']();
            _0x26723e['style']['display'] = _0x26723e['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x5f0bca && _0x26723e) {
        _0x5f0bca['addEventListener']('click', () => {
            _0x26723e['style']['display'] = 'none';
        });
    }
    const _0x5935a5 = document['getElementById']('mayor-confirm-yes');
    const _0x121c84 = document['getElementById']('mayor-confirm-no');
    const _0x555ded = document['getElementById']('mayor-confirm-dialog');
    if (_0x5935a5 && _0x555ded) {
        _0x5935a5['addEventListener']('click', () => {
            if (_0x5293d1 && _0x5293d1['readyState'] === WebSocket['OPEN']) {
                _0x5293d1['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x555ded['style']['display'] = 'none';
        });
    }
    if (_0x121c84 && _0x555ded) {
        _0x121c84['addEventListener']('click', () => {
            _0x555ded['style']['display'] = 'none';
        });
    }
    const _0x48f01b = document['getElementById']('close-ability-btn');
    if (_0x48f01b) {
        _0x48f01b['addEventListener']('click', () => {
            const _0xd19300 = document['getElementById']('ability-ui');
            if (_0xd19300)
                _0xd19300['style']['display'] = 'none';
        });
    }
}
let _0x50bcc7 = '';
function _0x5c1a04(_0x397664) {
    const _0x3fd4a8 = document['getElementById']('vote-tally-panel');
    const _0x247761 = document['getElementById']('vote-tally-list');
    if (!_0x3fd4a8 || !_0x247761)
        return;
    if (_0x397664['state'] !== 'DAY_VOTE') {
        _0x3fd4a8['style']['display'] = 'none';
        _0x50bcc7 = '';
        return;
    }
    _0x3fd4a8['style']['display'] = 'block';
    const _0x1814cf = {};
    for (const _0x57873c in _0x36a8ec) {
        if (!_0x36a8ec[_0x57873c]['isDead'])
            _0x1814cf[_0x57873c] = 0x0;
    }
    if (_0x2f4c38 && !_0x2ecd24['isDead'])
        _0x1814cf[_0x2f4c38] = 0x0;
    const _0x1aa078 = _0x397664['votes'] || {};
    for (const _0x362dd7 in _0x1aa078) {
        const _0x59eb62 = _0x1aa078[_0x362dd7];
        const _0x3e9aa4 = _0x397664['mayorRevealed'] && _0x397664['mayorRevealed'][_0x362dd7] ? 0x2 : 0x1;
        _0x1814cf[_0x59eb62] = (_0x1814cf[_0x59eb62] || 0x0) + _0x3e9aa4;
    }
    let _0x26d4cd = 0x0;
    const _0x7e00a3 = _0x397664['skips'] || {};
    for (const _0x143799 in _0x7e00a3) {
        _0x26d4cd += Number(_0x7e00a3[_0x143799]) || 0x1;
    }
    const _0x3e21bd = JSON['stringify'](_0x1814cf) + '_' + _0x26d4cd + '_' + _0x2ecd24['isDead'];
    if (_0x3e21bd === _0x50bcc7)
        return;
    _0x50bcc7 = _0x3e21bd;
    _0x247761['innerHTML'] = '';
    for (const _0x593a9a in _0x1814cf) {
        const _0x1ebd11 = parseInt(_0x593a9a);
        const _0x116ce4 = _0x1ebd11 === _0x2f4c38 ? _0x4ad7bb : _0x36a8ec[_0x593a9a] ? _0x36a8ec[_0x593a9a]['name'] : 'Player\x20' + _0x593a9a;
        const _0x29599d = document['createElement']('div');
        _0x29599d['className'] = 'vote-tally-entry';
        const _0x3f41d3 = document['createElement']('span');
        _0x3f41d3['textContent'] = _0x116ce4;
        const _0x592d07 = document['createElement']('span');
        _0x592d07['className'] = 'vote-count';
        _0x592d07['textContent'] = _0x1814cf[_0x593a9a] + '\x20vote' + (_0x1814cf[_0x593a9a] === 0x1 ? '' : 's');
        _0x29599d['appendChild'](_0x3f41d3);
        _0x29599d['appendChild'](_0x592d07);
        if (_0x1ebd11 !== _0x2f4c38 && !_0x2ecd24['isDead']) {
            _0x29599d['style']['cursor'] = 'pointer';
            _0x29599d['title'] = 'Vote\x20for\x20' + _0x116ce4;
            _0x29599d['addEventListener']('click', _0x3450a4 => {
                _0x3450a4['stopPropagation']();
                if (_0x5293d1 && _0x5293d1['readyState'] === WebSocket['OPEN']) {
                    _0x5293d1['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x116ce4
                    }));
                }
            });
        }
        _0x247761['appendChild'](_0x29599d);
    }
    const _0x163284 = document['createElement']('div');
    _0x163284['className'] = 'vote-tally-skip';
    _0x163284['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x26d4cd + '</span>';
    if (!_0x2ecd24['isDead']) {
        _0x163284['style']['cursor'] = 'pointer';
        _0x163284['title'] = 'Click\x20to\x20skip\x20vote';
        _0x163284['addEventListener']('click', _0x5ba0d6 => {
            _0x5ba0d6['stopPropagation']();
            if (_0x5293d1 && _0x5293d1['readyState'] === WebSocket['OPEN']) {
                _0x5293d1['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x247761['appendChild'](_0x163284);
}
let _0x2f1bb5 = null;
let _0x463287 = null;
let _0x1f21b1 = null;
function _0x3281df() {
    if (_0x5293d1 && _0x5293d1['readyState'] === WebSocket['OPEN']) {
        _0x5293d1['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x2f1bb5,
            'abilityTarget': _0x463287,
            'killTarget': _0x1f21b1
        }));
    }
}
function _0x19a905() {
    const _0xf3dcda = document['getElementById']('ability-ui-body');
    if (!_0xf3dcda)
        return;
    _0xf3dcda['innerHTML'] = '';
    if (_0xe67095 === 'Celebrity' || _0xe67095 === 'Mayor') {
        const _0x17b2ec = document['createElement']('div');
        _0x17b2ec['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x17b2ec['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0xf3dcda['appendChild'](_0x17b2ec);
        return;
    }
    if (_0xe67095 === 'Skinwalker') {
        const _0x1aa31b = document['createElement']('div');
        _0x1aa31b['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x1aa31b['innerText'] = 'Transform\x20into:';
        _0xf3dcda['appendChild'](_0x1aa31b);
        const _0x47f0f1 = document['createElement']('div');
        _0x47f0f1['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x44c9a3 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x54da92 = _0x3c70c3 => {
            if (!_0x2b9810['ROLE_LIST_RAW'] || _0x2b9810['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x2b9810['ROLE_LIST_RAW']['some'](_0x4b47ba => {
                if (_0x4b47ba['name'] === _0x3c70c3)
                    return !_0x4b47ba['isDead'];
                if (_0x40e5[_0x4b47ba['name']] && _0x40e5[_0x4b47ba['name']]['includes'](_0x3c70c3))
                    return !![];
                return ![];
            });
        };
        const _0x3bccba = [
            'None',
            ..._0x44c9a3['filter'](_0x54da92)
        ];
        _0x3bccba['forEach'](_0x2f70ab => {
            const _0x1458ab = document['createElement']('button');
            _0x1458ab['className'] = 'layer-btn';
            _0x1458ab['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x1458ab['innerText'] = _0x2f70ab;
            const _0x3f8591 = _0x2f70ab === 'None' && !_0x2f1bb5 || _0x2f1bb5 === _0x2f70ab;
            if (_0x3f8591)
                _0x1458ab['classList']['add']('active');
            _0x1458ab['onclick'] = () => {
                _0x2f1bb5 = _0x2f70ab === 'None' ? null : _0x2f70ab;
                _0x3281df();
                _0x19a905();
            };
            _0x47f0f1['appendChild'](_0x1458ab);
        });
        _0xf3dcda['appendChild'](_0x47f0f1);
        if (_0x54da92('Vigilante')) {
            const _0x1075ce = document['createElement']('div');
            _0x1075ce['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x1075ce['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0xf3dcda['appendChild'](_0x1075ce);
        }
        if (_0x2f1bb5 === 'Vigilante') {
            const _0x291194 = document['createElement']('div');
            _0x291194['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x291194['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0xf3dcda['appendChild'](_0x291194);
        } else if (_0x2f1bb5 && _0x2f1bb5 !== 'Celebrity') {
            const _0x5e2ce1 = document['createElement']('div');
            _0x5e2ce1['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x5e2ce1['innerText'] = 'Use\x20' + _0x2f1bb5 + '\x20ability\x20on:';
            _0xf3dcda['appendChild'](_0x5e2ce1);
            const _0x47485e = document['createElement']('div');
            _0x47485e['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x5e571f = document['createElement']('button');
            _0x5e571f['className'] = 'layer-btn';
            _0x5e571f['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x5e571f['innerText'] = 'No\x20one';
            if (!_0x463287)
                _0x5e571f['classList']['add']('active');
            _0x5e571f['onclick'] = () => {
                _0x463287 = null;
                _0x3281df();
                _0x19a905();
            };
            _0x47485e['appendChild'](_0x5e571f);
            for (const _0x96e144 in _0x36a8ec) {
                const _0xa23368 = _0x36a8ec[_0x96e144];
                if (_0xa23368['isDead'])
                    continue;
                const _0x35ea3e = document['createElement']('button');
                _0x35ea3e['className'] = 'layer-btn';
                _0x35ea3e['innerText'] = _0xa23368['name'];
                if (_0x463287 === parseInt(_0x96e144))
                    _0x35ea3e['classList']['add']('active');
                _0x35ea3e['onclick'] = () => {
                    _0x463287 = parseInt(_0x96e144);
                    _0x3281df();
                    _0x19a905();
                };
                _0x47485e['appendChild'](_0x35ea3e);
            }
            _0xf3dcda['appendChild'](_0x47485e);
        }
        const _0x2c0dd7 = document['createElement']('div');
        _0x2c0dd7['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x2c0dd7['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0xf3dcda['appendChild'](_0x2c0dd7);
        const _0x73ad7 = document['createElement']('div');
        _0x73ad7['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x1bb3df = document['createElement']('button');
        _0x1bb3df['className'] = 'layer-btn';
        _0x1bb3df['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x1bb3df['innerText'] = 'No\x20one';
        if (!_0x1f21b1 && !_0x2b9810['CURRENT_TARGET'])
            _0x1bb3df['classList']['add']('active');
        _0x1bb3df['onclick'] = () => {
            _0x1f21b1 = null;
            _0x2b9810['CURRENT_TARGET'] = null;
            _0x3281df();
            _0x19a905();
        };
        _0x73ad7['appendChild'](_0x1bb3df);
        for (const _0x424a3c in _0x36a8ec) {
            const _0x1c4c2e = _0x36a8ec[_0x424a3c];
            if (_0x1c4c2e['isDead'])
                continue;
            const _0xcb783a = document['createElement']('button');
            _0xcb783a['className'] = 'layer-btn';
            _0xcb783a['innerText'] = _0x1c4c2e['name'];
            if (_0x1f21b1 === parseInt(_0x424a3c) || _0x2b9810['CURRENT_TARGET'] === parseInt(_0x424a3c))
                _0xcb783a['classList']['add']('active');
            _0xcb783a['onclick'] = () => {
                _0x1f21b1 = parseInt(_0x424a3c);
                _0x2b9810['CURRENT_TARGET'] = parseInt(_0x424a3c);
                _0x3281df();
                _0x19a905();
            };
            _0x73ad7['appendChild'](_0xcb783a);
        }
        _0xf3dcda['appendChild'](_0x73ad7);
        return;
    }
    let _0x83d2d0 = '';
    let _0x3e2da1 = ![];
    if (_0xe67095 === 'Doctor') {
        _0x83d2d0 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x3e2da1 = !![];
    } else if (_0xe67095 === 'Investigator') {
        _0x83d2d0 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0xe67095 === 'Tracker') {
        _0x83d2d0 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0xe67095 === 'Archer') {
        _0x83d2d0 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0xe67095 === 'Escort') {
        _0x83d2d0 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0xe67095 === 'Vigilante') {
        _0x83d2d0 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x2dfb1f = document['createElement']('div');
    _0x2dfb1f['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x2dfb1f['innerText'] = _0x83d2d0;
    _0xf3dcda['appendChild'](_0x2dfb1f);
    const _0x451b3e = document['createElement']('div');
    _0x451b3e['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x2c576c = document['createElement']('button');
    _0x2c576c['className'] = 'layer-btn';
    _0x2c576c['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x2c576c['innerText'] = 'No\x20one';
    if (_0x2b9810['CURRENT_TARGET'] === null)
        _0x2c576c['classList']['add']('active');
    _0x2c576c['onclick'] = () => {
        _0x2b9810['CURRENT_TARGET'] = null;
        if (_0x5293d1 && _0x5293d1['readyState'] === WebSocket['OPEN']) {
            _0x5293d1['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x19a905();
    };
    _0x451b3e['appendChild'](_0x2c576c);
    for (const _0x2fd43c in _0x36a8ec) {
        const _0x205004 = _0x36a8ec[_0x2fd43c];
        if (_0x205004['isDead'])
            continue;
        const _0x2744d0 = document['createElement']('button');
        _0x2744d0['className'] = 'layer-btn';
        _0x2744d0['innerText'] = _0x205004['name'];
        if (_0x2b9810['CURRENT_TARGET'] === parseInt(_0x2fd43c))
            _0x2744d0['classList']['add']('active');
        _0x2744d0['onclick'] = () => {
            _0x2b9810['CURRENT_TARGET'] = parseInt(_0x2fd43c);
            if (_0x5293d1 && _0x5293d1['readyState'] === WebSocket['OPEN']) {
                _0x5293d1['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x2fd43c)
                }));
            }
            _0x19a905();
        };
        _0x451b3e['appendChild'](_0x2744d0);
    }
    if (_0x3e2da1 && !_0x2ecd24['isDead']) {
        const _0x1599f8 = document['createElement']('button');
        _0x1599f8['className'] = 'layer-btn';
        _0x1599f8['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x1599f8['innerText'] = _0x4ad7bb + '\x20(Self)';
        if (_0x2b9810['CURRENT_TARGET'] === _0x2f4c38)
            _0x1599f8['classList']['add']('active');
        _0x1599f8['onclick'] = () => {
            _0x2b9810['CURRENT_TARGET'] = _0x2f4c38;
            if (_0x5293d1 && _0x5293d1['readyState'] === WebSocket['OPEN']) {
                _0x5293d1['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x2f4c38
                }));
            }
            _0x19a905();
        };
        _0x451b3e['appendChild'](_0x1599f8);
    }
    _0xf3dcda['appendChild'](_0x451b3e);
}
function _0x47eb32() {
    if (_0x5293d1 && (_0x5293d1['readyState'] === WebSocket['OPEN'] || _0x5293d1['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x466e92 = new URLSearchParams();
    if (_0x161916)
        _0x466e92['set']('token', _0x161916);
    _0x466e92['set']('ngrok-skip-browser-warning', 'true');
    const _0x12a822 = 'wss://relating-worker-pipeline-enclosure.trycloudflare.com';
    const _0x55c7e1 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x12a822;
    const _0x13c801 = _0x55c7e1 + '/?' + _0x466e92['toString']();
    _0x5293d1 = new WebSocket(_0x13c801);
    _0x5293d1['onopen'] = function () {
        if (!_0x23c580 && this['readyState'] === WebSocket['OPEN']) {
            this['send'](JSON['stringify']({
                'type': 'join',
                'name': _0x4ad7bb,
                'token': _0x161916,
                'body': _0x8cd3f,
                'eyes': _0x58b6b0
            }));
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x5293d1 && _0x5293d1['readyState'] === WebSocket['OPEN']) {
            _0x5293d1['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x5293d1['onclose'] = _0x4d8e84 => {
        if (_0x4d8e84['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x4d8e84['code'] === 0xfa2 || _0x4d8e84['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x3d56a1 = document['getElementById']('disconnect-overlay');
        if (!_0x3d56a1) {
            _0x3d56a1 = document['createElement']('div');
            _0x3d56a1['id'] = 'disconnect-overlay';
            _0x3d56a1['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x3d56a1['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x3d56a1);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x5293d1['onmessage'] = _0x727738 => {
        const _0x8b0aa1 = JSON['parse'](_0x727738['data']);
        if (_0x8b0aa1['type'] === 'map_data') {
            _0x2b9810['MAP']['tileSize'] = _0x8b0aa1['map']['tileSize'];
            _0x2b9810['MAP']['columns'] = _0x8b0aa1['map']['columns'];
            _0x2b9810['MAP']['rows'] = _0x8b0aa1['map']['rows'];
            _0x2b9810['MAP']['layers'] = _0x8b0aa1['map']['layers'];
            if (_0x8b0aa1['map']['doors']) {
                _0x2b9810['MAP']['doors'] = _0x8b0aa1['map']['doors'];
                const _0x15dc78 = _0x2b9810['MAP']['layers']['find'](_0x42533a => _0x42533a['name'] === 'floor2');
                if (_0x15dc78) {
                    for (const _0x3cdde6 in _0x2b9810['MAP']['doors']) {
                        _0x15dc78['data'][parseInt(_0x3cdde6)] = 0x2;
                    }
                }
            }
            if (_0x8b0aa1['entities'])
                _0x2b9810['ENTITIES'] = _0x8b0aa1['entities'];
            _0x2dfdd5();
            _0x2b9810['SYSTEM']['isReady'] = !![];
            _0x5e7323();
            if (!_0x2b9810['SYSTEM']['_gameLoopRunning']) {
                _0x2b9810['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x1b607d);
            }
            return;
        }
        if (_0x8b0aa1['type'] === 'init') {
            _0x2f4c38 = _0x8b0aa1['id'];
            _0x23c580 = ![];
            _0x537b31();
            if (_0x19ba4a) {
                const _0x33bb5a = document['getElementById']('leaderboard-list');
                const _0x4f709f = document['getElementById']('leaderboard-toggle');
                if (_0x33bb5a) {
                    _0x33bb5a['style']['display'] = 'none';
                    if (_0x4f709f)
                        _0x4f709f['style']['transform'] = 'rotate(180deg)';
                }
                const _0x5b926b = document['getElementById']('role-list-items');
                const _0x15dba0 = document['getElementById']('role-list-toggle');
                if (_0x5b926b) {
                    _0x5b926b['style']['display'] = 'none';
                    if (_0x15dba0)
                        _0x15dba0['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x3b1f31 = _0x8b0aa1['isOwner'] || ![];
            _0x4ad7bb = _0x8b0aa1['name'] || _0x4ad7bb;
            _0x2b9810['MAP']['tileSize'] = _0x8b0aa1['map']['tileSize'];
            _0x2b9810['MAP']['columns'] = _0x8b0aa1['map']['columns'];
            _0x2b9810['MAP']['rows'] = _0x8b0aa1['map']['rows'];
            _0x2b9810['MAP']['layers'] = _0x8b0aa1['map']['layers'];
            if (_0x8b0aa1['map']['doors']) {
                _0x2b9810['MAP']['doors'] = _0x8b0aa1['map']['doors'];
                const _0x201ecc = _0x2b9810['MAP']['layers']['find'](_0x38457a => _0x38457a['name'] === 'floor2');
                if (_0x201ecc) {
                    for (const _0x4f7ac4 in _0x2b9810['MAP']['doors']) {
                        _0x201ecc['data'][parseInt(_0x4f7ac4)] = 0x2;
                    }
                }
            }
            if (_0x8b0aa1['entities'])
                _0x2b9810['ENTITIES'] = _0x8b0aa1['entities'];
            _0x2dfdd5();
            _0x2ecd24['x'] = _0x2b9810['MAP']['columns'] * _0x2b9810['MAP']['tileSize'] / 0x2;
            _0x2ecd24['y'] = _0x2b9810['MAP']['rows'] * _0x2b9810['MAP']['tileSize'] / 0x2;
            _0x2b9810['CAMERA']['x'] = _0x2ecd24['x'] + _0x2ecd24['width'] / 0x2 - _0x2b9810['CAMERA']['width'] / 0x2;
            _0x2b9810['CAMERA']['y'] = _0x2ecd24['y'] + _0x2ecd24['height'] / 0x2 - _0x2b9810['CAMERA']['height'] / 0x2;
            if (_0x3b1f31) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x2985f8();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x2b9810['SYSTEM']['lastTime'] = performance['now']();
            _0x2b9810['SYSTEM']['isReady'] = !![];
            _0x48c431();
            if (!_0x2b9810['SYSTEM']['_gameLoopRunning']) {
                _0x2b9810['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x1b607d);
            }
            return;
        } else if (_0x8b0aa1['type'] === 'state') {
            const _0x4ed1a5 = {};
            for (const _0x54df24 in _0x8b0aa1['players']) {
                if (parseInt(_0x54df24) === _0x2f4c38)
                    continue;
                const _0x3a98f4 = _0x8b0aa1['players'][_0x54df24];
                const _0x33ac52 = _0x36a8ec[_0x54df24];
                if (_0x33ac52) {
                    const _0x1b7898 = _0x3a98f4['x'] - _0x33ac52['renderX'];
                    const _0x4b5ba1 = _0x3a98f4['y'] - _0x33ac52['renderY'];
                    const _0x1b2ac4 = _0x1b7898 * _0x1b7898 + _0x4b5ba1 * _0x4b5ba1 > 0x78 * 0x78;
                    Object['assign'](_0x33ac52, _0x3a98f4);
                    if (_0x1b2ac4) {
                        _0x33ac52['renderX'] = _0x3a98f4['x'];
                        _0x33ac52['renderY'] = _0x3a98f4['y'];
                    }
                    _0x4ed1a5[_0x54df24] = _0x33ac52;
                } else {
                    _0x4ed1a5[_0x54df24] = {
                        ..._0x3a98f4,
                        'renderX': _0x3a98f4['x'],
                        'renderY': _0x3a98f4['y'],
                        'renderAngle': _0x3a98f4['angle'] || 0x0
                    };
                }
            }
            _0x36a8ec = _0x4ed1a5;
            if (_0x8b0aa1['players'][_0x2f4c38]) {
                const _0x38e948 = _0x8b0aa1['players'][_0x2f4c38];
                _0x2ecd24['chats'] = _0x38e948['chats'] || [];
                _0x2ecd24['isDead'] = _0x38e948['isDead'];
                if (_0x38e948['name'])
                    _0x4ad7bb = _0x38e948['name'];
                _0x48c431();
                const _0x1020c1 = Math['hypot'](_0x38e948['x'] - _0x2ecd24['x'], _0x38e948['y'] - _0x2ecd24['y']);
                if (_0x1020c1 > 0xfa) {
                    _0x2ecd24['x'] = _0x38e948['x'];
                    _0x2ecd24['y'] = _0x38e948['y'];
                } else if (_0x1020c1 > 0x50) {
                    _0x2ecd24['x'] += (_0x38e948['x'] - _0x2ecd24['x']) * 0.06;
                    _0x2ecd24['y'] += (_0x38e948['y'] - _0x2ecd24['y']) * 0.06;
                }
            }
            if (_0x8b0aa1['entities'])
                _0x2b9810['ENTITIES'] = _0x8b0aa1['entities'];
            if (_0x8b0aa1['game']) {
                _0x2b9810['GAME_STATE'] = _0x8b0aa1['game']['state'];
                _0x2b9810['NIGHT_ABILITY_OPEN'] = _0x8b0aa1['game']['nightAbilityOpen'];
                if (_0x8b0aa1['game']['mayorRevealed']) {
                    for (const _0xc5d21b in _0x8b0aa1['game']['mayorRevealed']) {
                        _0xd9375c['add'](parseInt(_0xc5d21b));
                    }
                }
                if (_0x2b9810['LAST_STATE'] !== _0x2b9810['GAME_STATE']) {
                    if (_0x2b9810['GAME_STATE'] !== 'NIGHT') {
                        _0x2b9810['CURRENT_TARGET'] = null;
                        _0x2f1bb5 = null;
                        _0x463287 = null;
                        _0x1f21b1 = null;
                        const _0x28bda1 = document['getElementById']('ability-ui');
                        if (_0x28bda1)
                            _0x28bda1['style']['display'] = 'none';
                    }
                    if (_0x2b9810['GAME_STATE'] === 'NIGHT') {
                        _0x2ecd24['chats'] = [];
                        for (const _0x3e2c17 in _0x36a8ec) {
                            _0x36a8ec[_0x3e2c17]['chats'] = [];
                        }
                    }
                    _0x2b9810['LAST_STATE'] = _0x2b9810['GAME_STATE'];
                    _0xf3ab08();
                    _0x370ff1['onStateChange'](_0x2b9810['GAME_STATE'], _0x8b0aa1['game']['nightAbilityOpen']);
                }
                const _0x1f5989 = document['getElementById']('phase-ui');
                if (_0x1f5989) {
                    _0x1f5989['style']['display'] = 'block';
                    let _0x179673 = _0x8b0aa1['game']['state']['replace']('_', '\x20');
                    if (_0x8b0aa1['game']['state'] === 'DAY_DISCUSS') {
                        _0x179673 = 'DAY\x20' + (_0x8b0aa1['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x8b0aa1['game']['timer'] + 's';
                    } else if (_0x8b0aa1['game']['state'] === 'DAY_VOTE') {
                        _0x179673 = 'DAY\x20' + (_0x8b0aa1['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x8b0aa1['game']['timer'] + 's';
                    } else if (_0x8b0aa1['game']['state'] === 'NIGHT') {
                        const _0x83c460 = _0x8b0aa1['game']['dayCount'] || 0x1;
                        if (_0x8b0aa1['game']['nightAbilityOpen']) {
                            _0x179673 = 'NIGHT\x20' + _0x83c460 + '\x20ABILITY\x20PHASE';
                            const _0x5220e8 = _0x8b0aa1['game']['abilityTimer'] !== undefined ? _0x8b0aa1['game']['abilityTimer'] : _0x8b0aa1['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x5220e8 + 's';
                        } else {
                            _0x179673 = 'NIGHT\x20' + _0x83c460;
                            document['getElementById']('phase-timer')['innerText'] = _0x8b0aa1['game']['timer'] + 's';
                        }
                    }
                    document['getElementById']('phase-name')['innerText'] = _0x179673;
                }
                if (_0x8b0aa1['game']['state'] === 'NIGHT') {
                    const _0x41266b = document['getElementById']('ability-timer-label');
                    if (_0x41266b) {
                        const _0x4094a4 = _0x8b0aa1['game']['abilityTimer'] !== undefined ? _0x8b0aa1['game']['abilityTimer'] : _0x8b0aa1['game']['timer'];
                        _0x41266b['innerText'] = _0x8b0aa1['game']['nightAbilityOpen'] ? _0x4094a4 + 's' : '';
                    }
                    if (_0x8b0aa1['game']['nightAbilityOpen'] && !_0x1e27cf && !_0x2ecd24['isDead']) {
                        _0x1e27cf = !![];
                        _0x19a905();
                        const _0x43e072 = document['getElementById']('ability-ui');
                        if (_0x43e072)
                            _0x43e072['style']['display'] = 'block';
                    }
                    if (!_0x8b0aa1['game']['nightAbilityOpen']) {
                        const _0x4b3f91 = document['getElementById']('ability-ui');
                        if (_0x4b3f91 && _0x4b3f91['style']['display'] === 'block') {
                            _0x4b3f91['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x1e27cf = ![];
                }
                _0x5c1a04(_0x8b0aa1['game']);
                if (_0x8b0aa1['game']['roleListMode'] !== undefined) {
                    _0x2b9810['ROLE_LIST_RAW'] = _0x8b0aa1['game']['roleList'] || [];
                    _0x165bec(_0x8b0aa1['game']['roleList'], _0x8b0aa1['game']['roleListMode']);
                }
            }
        } else if (_0x8b0aa1['type'] === 'teleport') {
            _0x2ecd24['x'] = _0x8b0aa1['x'];
            _0x2ecd24['y'] = _0x8b0aa1['y'];
            _0x2ecd24['vx'] = 0x0;
            _0x2ecd24['vy'] = 0x0;
            _0x2b9810['CAMERA']['x'] = null;
            if (_0x8b0aa1['teleportId'] !== undefined)
                _0x1638d7 = _0x8b0aa1['teleportId'];
            if (_0x8b0aa1['angle'] !== undefined) {
                _0x2ecd24['angle'] = _0x8b0aa1['angle'];
                _0x23886a = Date['now']() + 0x3e8;
            }
        } else if (_0x8b0aa1['type'] === 'bulk_teleport') {
            for (const _0x9cb5f4 in _0x8b0aa1['positions']) {
                const _0x322842 = _0x8b0aa1['positions'][_0x9cb5f4];
                if (parseInt(_0x9cb5f4) === _0x2f4c38) {
                    _0x2ecd24['x'] = _0x322842['x'];
                    _0x2ecd24['y'] = _0x322842['y'];
                    _0x2ecd24['vx'] = 0x0;
                    _0x2ecd24['vy'] = 0x0;
                    _0x2b9810['CAMERA']['x'] = null;
                    continue;
                }
                const _0x220244 = _0x36a8ec[_0x9cb5f4];
                if (_0x220244) {
                    _0x220244['x'] = _0x322842['x'];
                    _0x220244['y'] = _0x322842['y'];
                    _0x220244['renderX'] = _0x322842['x'];
                    _0x220244['renderY'] = _0x322842['y'];
                    _0x220244['vx'] = 0x0;
                    _0x220244['vy'] = 0x0;
                }
            }
        } else if (_0x8b0aa1['type'] === 'player_left') {
            delete _0x36a8ec[_0x8b0aa1['id']];
            _0xd9375c['delete'](parseInt(_0x8b0aa1['id']));
        } else if (_0x8b0aa1['type'] === 'map_update') {
            const _0x3aa803 = _0x2b9810['MAP']['layers']['find'](_0x4796bc => _0x4796bc['name'] === _0x8b0aa1['layer']);
            if (_0x3aa803) {
                _0x3aa803['data'][_0x8b0aa1['row'] * _0x2b9810['MAP']['columns'] + _0x8b0aa1['col']] = _0x8b0aa1['gid'];
                const _0x3de0ea = _0x8b0aa1['row'] * _0x2b9810['MAP']['columns'] + _0x8b0aa1['col'];
                if (_0x2b9810['MAP']['doors'] && _0x2b9810['MAP']['doors'][_0x3de0ea]) {
                    const _0x15daa8 = _0x2b9810['MAP']['layers']['find'](_0x513791 => _0x513791['name'] === 'floor2');
                    if (_0x15daa8)
                        _0x15daa8['data'][_0x3de0ea] = 0x2;
                }
                const _0x58091c = Math['floor'](_0x8b0aa1['col'] * _0x2b9810['MAP']['tileSize'] / _0x2b9810['MAP']['chunkSize']);
                const _0x15552c = Math['floor'](_0x8b0aa1['row'] * _0x2b9810['MAP']['tileSize'] / _0x2b9810['MAP']['chunkSize']);
                _0x297270(_0x58091c, _0x15552c);
            }
        } else if (_0x8b0aa1['type'] === 'role_assign') {
            _0xe67095 = _0x8b0aa1['role'];
            _0x2ecd24['isDead'] = _0xe67095 === 'Spectator';
            _0xd9375c['clear']();
            _0x2b9810['CURRENT_TARGET'] = null;
            _0x2f1bb5 = null;
            _0x463287 = null;
            _0x1f21b1 = null;
            _0x1e27cf = ![];
            const _0x2d6eab = document['getElementById']('ability-ui');
            if (_0x2d6eab)
                _0x2d6eab['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0xe67095;
            _0xf3ab08();
            _0x35f052(_0xe67095 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0xe67095, !![]);
            let _0xa38489 = '';
            if (_0xe67095 === 'Investigator')
                _0xa38489 = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0xe67095 === 'Tracker')
                _0xa38489 = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0xe67095 === 'Doctor')
                _0xa38489 = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0xe67095 === 'Archer')
                _0xa38489 = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0xe67095 === 'Escort')
                _0xa38489 = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0xe67095 === 'Vigilante')
                _0xa38489 = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0xe67095 === 'Skinwalker')
                _0xa38489 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0xe67095 === 'Celebrity')
                _0xa38489 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0xe67095 === 'Mayor')
                _0xa38489 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x35f052(_0xa38489, !![]);
        } else if (_0x8b0aa1['type'] === 'mayor_reveal') {
            _0xd9375c['add'](parseInt(_0x8b0aa1['playerId']));
            _0x48c431();
            _0xf3ab08();
        } else if (_0x8b0aa1['type'] === 'rolelist_update') {
            _0x2b9810['ROLE_LIST_RAW'] = _0x8b0aa1['list'] || [];
            _0x165bec(_0x8b0aa1['list'], _0x8b0aa1['mode']);
        } else if (_0x8b0aa1['type'] === 'sound_event') {
            _0x370ff1['onSoundEvent'](_0x8b0aa1['track']);
        } else if (_0x8b0aa1['type'] === 'game_over') {
            _0x370ff1['onStateChange']('LOBBY', ![]);
            _0x165bec([], 'off');
            _0xe67095 = null;
            _0x2ecd24['isDead'] = ![];
            _0xd9375c['clear']();
            _0x2b9810['CURRENT_TARGET'] = null;
            _0x2f1bb5 = null;
            _0x463287 = null;
            _0x1f21b1 = null;
            _0x1e27cf = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0xf3ab08();
            _0x35f052('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x8b0aa1['type'] === 'chat_log') {
            _0x35f052(_0x8b0aa1['sender'] + ':\x20' + _0x8b0aa1['text']);
        } else if (_0x8b0aa1['type'] === 'sys_chat') {
            _0x35f052(_0x8b0aa1['text'], !![]);
        }
    };
}
function _0x35f052(_0x46649c, _0x21e4cd = ![]) {
    const _0xb3fe05 = document['getElementById']('chat-log-messages');
    const _0x468d25 = document['getElementById']('chat-log-ui');
    const _0x3db556 = _0x468d25['scrollHeight'] - _0x468d25['scrollTop'] - _0x468d25['clientHeight'] < 0x1e;
    const _0x261e0e = document['createElement']('div');
    _0x261e0e['className'] = 'chat-log-line' + (_0x21e4cd ? '\x20sys-msg' : '');
    _0x261e0e['innerText'] = _0x46649c;
    _0xb3fe05['appendChild'](_0x261e0e);
    if (_0x3db556) {
        _0x468d25['scrollTop'] = _0x468d25['scrollHeight'];
    }
    if (_0xb3fe05['childElementCount'] > 0xc8) {
        _0xb3fe05['removeChild'](_0xb3fe05['firstChild']);
    }
}
let _0x5e24de = -0x1, _0x35dc38 = -0x1, _0x28742f = -0x1, _0x3fd8da = 0x0;
function _0x13531c() {
    if (!_0x2f4c38 || !_0x5293d1 || _0x5293d1['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x5be7bd = performance['now']();
    const _0xa01674 = _0x5be7bd - _0x3fd8da;
    const _0x481f2b = Math['abs'](_0x2ecd24['x'] - _0x5e24de) > 0.05 || Math['abs'](_0x2ecd24['y'] - _0x35dc38) > 0.05 || Math['abs'](_0x2ecd24['angle'] - _0x28742f) > 0.02;
    if (!_0x481f2b && _0xa01674 < 0xc8)
        return;
    if (_0xa01674 < 0x19)
        return;
    _0x3fd8da = _0x5be7bd;
    _0x5e24de = _0x2ecd24['x'];
    _0x35dc38 = _0x2ecd24['y'];
    _0x28742f = _0x2ecd24['angle'];
    if (!_0x2f4c38 || !_0x5293d1 || _0x5293d1['readyState'] !== WebSocket['OPEN'])
        return;
    _0x5293d1['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x2ecd24['x'],
        'y': _0x2ecd24['y'],
        'vx': _0x2ecd24['vx'],
        'vy': _0x2ecd24['vy'],
        'angle': _0x2ecd24['angle'],
        'scale': _0x2ecd24['scale'],
        'teleportId': _0x1638d7,
        'clientTimestamp': Date['now']()
    }));
}
function _0x15bd84() {
    if (_0x2ecd24['isDead'])
        return;
    const _0x440713 = _0x2b9810['MAP']['layers']['find'](_0x5bc000 => _0x5bc000['name'] === 'walls');
    if (!_0x440713)
        return;
    const _0xf75aa6 = _0x2ecd24['scale'];
    const _0x14ee75 = _0x2ecd24['width'] * _0xf75aa6 / 0x2;
    for (let _0x1e393d = 0x0; _0x1e393d < 0x3; _0x1e393d++) {
        let _0x2577c9 = _0x2ecd24['x'] + _0x2ecd24['width'] / 0x2;
        let _0x7d6c1f = _0x2ecd24['y'] + _0x2ecd24['height'] / 0x2;
        const _0x497dc2 = Math['floor']((_0x2577c9 - _0x14ee75) / _0x2b9810['MAP']['tileSize']);
        const _0x53aa08 = Math['floor']((_0x2577c9 + _0x14ee75) / _0x2b9810['MAP']['tileSize']);
        const _0xd20c40 = Math['floor']((_0x7d6c1f - _0x14ee75) / _0x2b9810['MAP']['tileSize']);
        const _0x19c156 = Math['floor']((_0x7d6c1f + _0x14ee75) / _0x2b9810['MAP']['tileSize']);
        for (let _0x171116 = _0xd20c40; _0x171116 <= _0x19c156; _0x171116++) {
            for (let _0x162e01 = _0x497dc2; _0x162e01 <= _0x53aa08; _0x162e01++) {
                if (_0x162e01 < 0x0 || _0x162e01 >= _0x2b9810['MAP']['columns'] || _0x171116 < 0x0 || _0x171116 >= _0x2b9810['MAP']['rows'])
                    continue;
                if (_0x440713['data'][_0x171116 * _0x2b9810['MAP']['columns'] + _0x162e01] === 0x0)
                    continue;
                const _0x4624cc = _0x162e01 * _0x2b9810['MAP']['tileSize'];
                const _0x2da849 = _0x171116 * _0x2b9810['MAP']['tileSize'];
                const _0x8f97d9 = _0x2577c9 < _0x4624cc ? _0x4624cc : _0x2577c9 > _0x4624cc + _0x2b9810['MAP']['tileSize'] ? _0x4624cc + _0x2b9810['MAP']['tileSize'] : _0x2577c9;
                const _0x3e33a7 = _0x7d6c1f < _0x2da849 ? _0x2da849 : _0x7d6c1f > _0x2da849 + _0x2b9810['MAP']['tileSize'] ? _0x2da849 + _0x2b9810['MAP']['tileSize'] : _0x7d6c1f;
                const _0x5c3240 = _0x2577c9 - _0x8f97d9;
                const _0x1c7c50 = _0x7d6c1f - _0x3e33a7;
                const _0x946514 = Math['sqrt'](_0x5c3240 * _0x5c3240 + _0x1c7c50 * _0x1c7c50);
                if (_0x946514 < _0x14ee75) {
                    if (_0x946514 === 0x0) {
                        const _0x252be4 = _0x2577c9 - _0x4624cc;
                        const _0x460c4a = _0x4624cc + _0x2b9810['MAP']['tileSize'] - _0x2577c9;
                        const _0x31790e = _0x7d6c1f - _0x2da849;
                        const _0x5f3749 = _0x2da849 + _0x2b9810['MAP']['tileSize'] - _0x7d6c1f;
                        const _0x19d2eb = Math['min'](_0x252be4, _0x460c4a, _0x31790e, _0x5f3749);
                        if (_0x19d2eb === _0x252be4)
                            _0x2577c9 = _0x4624cc - _0x14ee75;
                        else if (_0x19d2eb === _0x460c4a)
                            _0x2577c9 = _0x4624cc + _0x2b9810['MAP']['tileSize'] + _0x14ee75;
                        else if (_0x19d2eb === _0x31790e)
                            _0x7d6c1f = _0x2da849 - _0x14ee75;
                        else
                            _0x7d6c1f = _0x2da849 + _0x2b9810['MAP']['tileSize'] + _0x14ee75;
                    } else {
                        const _0x512ce3 = _0x14ee75 - _0x946514;
                        _0x2577c9 += _0x5c3240 / _0x946514 * _0x512ce3;
                        _0x7d6c1f += _0x1c7c50 / _0x946514 * _0x512ce3;
                        const _0xd5a4a = _0x2ecd24['vx'] * (_0x5c3240 / _0x946514) + _0x2ecd24['vy'] * (_0x1c7c50 / _0x946514);
                        if (_0xd5a4a < 0x0) {
                            _0x2ecd24['vx'] -= _0xd5a4a * (_0x5c3240 / _0x946514);
                            _0x2ecd24['vy'] -= _0xd5a4a * (_0x1c7c50 / _0x946514);
                        }
                    }
                }
            }
        }
        _0x2ecd24['x'] = _0x2577c9 - _0x2ecd24['width'] / 0x2;
        _0x2ecd24['y'] = _0x7d6c1f - _0x2ecd24['height'] / 0x2;
    }
}
function _0x4fd556(_0x2050fa) {
    const _0x43347b = _0x2b9810['MAP']['layers']['find'](_0x1260af => _0x1260af['name'] === 'walls');
    if (!_0x43347b)
        return;
    const _0x348599 = _0x2050fa['width'] / 0x2;
    for (let _0x254bb1 = 0x0; _0x254bb1 < 0x2; _0x254bb1++) {
        let _0x4f3009 = _0x2050fa['x'] + _0x2050fa['width'] / 0x2;
        let _0x3b2fc3 = _0x2050fa['y'] + _0x2050fa['height'] / 0x2;
        const _0x42958d = Math['floor']((_0x4f3009 - _0x348599) / _0x2b9810['MAP']['tileSize']);
        const _0x5ba32f = Math['floor']((_0x4f3009 + _0x348599) / _0x2b9810['MAP']['tileSize']);
        const _0x53d642 = Math['floor']((_0x3b2fc3 - _0x348599) / _0x2b9810['MAP']['tileSize']);
        const _0x4b6e76 = Math['floor']((_0x3b2fc3 + _0x348599) / _0x2b9810['MAP']['tileSize']);
        for (let _0x5bd807 = _0x53d642; _0x5bd807 <= _0x4b6e76; _0x5bd807++) {
            for (let _0x5f47f4 = _0x42958d; _0x5f47f4 <= _0x5ba32f; _0x5f47f4++) {
                if (_0x5f47f4 < 0x0 || _0x5f47f4 >= _0x2b9810['MAP']['columns'] || _0x5bd807 < 0x0 || _0x5bd807 >= _0x2b9810['MAP']['rows'])
                    continue;
                if (_0x43347b['data'][_0x5bd807 * _0x2b9810['MAP']['columns'] + _0x5f47f4] === 0x0)
                    continue;
                const _0x3a350a = _0x5f47f4 * _0x2b9810['MAP']['tileSize'];
                const _0x21ac90 = _0x5bd807 * _0x2b9810['MAP']['tileSize'];
                const _0xcc35ce = _0x4f3009 < _0x3a350a ? _0x3a350a : _0x4f3009 > _0x3a350a + _0x2b9810['MAP']['tileSize'] ? _0x3a350a + _0x2b9810['MAP']['tileSize'] : _0x4f3009;
                const _0x3135bf = _0x3b2fc3 < _0x21ac90 ? _0x21ac90 : _0x3b2fc3 > _0x21ac90 + _0x2b9810['MAP']['tileSize'] ? _0x21ac90 + _0x2b9810['MAP']['tileSize'] : _0x3b2fc3;
                const _0xe3e5a5 = _0x4f3009 - _0xcc35ce;
                const _0x59f0aa = _0x3b2fc3 - _0x3135bf;
                const _0x42eca2 = Math['sqrt'](_0xe3e5a5 * _0xe3e5a5 + _0x59f0aa * _0x59f0aa);
                if (_0x42eca2 < _0x348599) {
                    if (_0x42eca2 === 0x0) {
                        const _0x3b930c = _0x4f3009 - _0x3a350a;
                        const _0x1e64c0 = _0x3a350a + _0x2b9810['MAP']['tileSize'] - _0x4f3009;
                        const _0x78cbab = _0x3b2fc3 - _0x21ac90;
                        const _0x31641a = _0x21ac90 + _0x2b9810['MAP']['tileSize'] - _0x3b2fc3;
                        const _0x815472 = Math['min'](_0x3b930c, _0x1e64c0, _0x78cbab, _0x31641a);
                        if (_0x815472 === _0x3b930c)
                            _0x4f3009 = _0x3a350a - _0x348599;
                        else if (_0x815472 === _0x1e64c0)
                            _0x4f3009 = _0x3a350a + _0x2b9810['MAP']['tileSize'] + _0x348599;
                        else if (_0x815472 === _0x78cbab)
                            _0x3b2fc3 = _0x21ac90 - _0x348599;
                        else
                            _0x3b2fc3 = _0x21ac90 + _0x2b9810['MAP']['tileSize'] + _0x348599;
                    } else {
                        const _0x5e27a3 = _0x348599 - _0x42eca2;
                        _0x4f3009 += _0xe3e5a5 / _0x42eca2 * _0x5e27a3;
                        _0x3b2fc3 += _0x59f0aa / _0x42eca2 * _0x5e27a3;
                    }
                }
            }
        }
        _0x2050fa['x'] = _0x4f3009 - _0x2050fa['width'] / 0x2;
        _0x2050fa['y'] = _0x3b2fc3 - _0x2050fa['height'] / 0x2;
    }
}
function _0x3ca97b(_0x5e68b8) {
    const _0x3c46f9 = _0x5e68b8['width'] / 0x2;
    for (let _0x1ec095 = 0x0; _0x1ec095 < 0x2; _0x1ec095++) {
        let _0x1e2a6b = _0x5e68b8['x'] + _0x5e68b8['width'] / 0x2;
        let _0x3db8cf = _0x5e68b8['y'] + _0x5e68b8['height'] / 0x2;
        for (const _0x47fea8 of _0x2b9810['ENTITIES']) {
            const _0x3ba19b = _0x1e2a6b < _0x47fea8['x'] ? _0x47fea8['x'] : _0x1e2a6b > _0x47fea8['x'] + _0x47fea8['w'] ? _0x47fea8['x'] + _0x47fea8['w'] : _0x1e2a6b;
            const _0x89c81f = _0x3db8cf < _0x47fea8['y'] ? _0x47fea8['y'] : _0x3db8cf > _0x47fea8['y'] + _0x47fea8['h'] ? _0x47fea8['y'] + _0x47fea8['h'] : _0x3db8cf;
            const _0x50e09a = _0x1e2a6b - _0x3ba19b;
            const _0x570f94 = _0x3db8cf - _0x89c81f;
            const _0x162018 = Math['sqrt'](_0x50e09a * _0x50e09a + _0x570f94 * _0x570f94);
            if (_0x162018 < _0x3c46f9 && _0x162018 > 0x0) {
                const _0x51702d = _0x3c46f9 - _0x162018;
                const _0x12126f = _0x50e09a / _0x162018;
                const _0x483d5e = _0x570f94 / _0x162018;
                _0x1e2a6b += _0x12126f * _0x51702d;
                _0x3db8cf += _0x483d5e * _0x51702d;
            } else if (_0x162018 === 0x0) {
                const _0x2e5596 = _0x1e2a6b - _0x47fea8['x'];
                const _0x1abc0e = _0x47fea8['x'] + _0x47fea8['w'] - _0x1e2a6b;
                const _0x299792 = _0x3db8cf - _0x47fea8['y'];
                const _0x467e85 = _0x47fea8['y'] + _0x47fea8['h'] - _0x3db8cf;
                const _0x581b3f = Math['min'](_0x2e5596, _0x1abc0e, _0x299792, _0x467e85);
                if (_0x581b3f === _0x2e5596)
                    _0x1e2a6b = _0x47fea8['x'] - _0x3c46f9;
                else if (_0x581b3f === _0x1abc0e)
                    _0x1e2a6b = _0x47fea8['x'] + _0x47fea8['w'] + _0x3c46f9;
                else if (_0x581b3f === _0x299792)
                    _0x3db8cf = _0x47fea8['y'] - _0x3c46f9;
                else
                    _0x3db8cf = _0x47fea8['y'] + _0x47fea8['h'] + _0x3c46f9;
            }
        }
        _0x5e68b8['x'] = _0x1e2a6b - _0x5e68b8['width'] / 0x2;
        _0x5e68b8['y'] = _0x3db8cf - _0x5e68b8['height'] / 0x2;
    }
}
function _0x51a007() {
    if (_0x2ecd24['isDead'])
        return;
    const _0x53e78b = _0x2ecd24['width'] / 0x2;
    const _0x176171 = _0x2ecd24['x'] + _0x2ecd24['width'] / 0x2;
    const _0x2c6696 = _0x2ecd24['y'] + _0x2ecd24['height'] / 0x2;
    for (const _0x1f1ff4 in _0x36a8ec) {
        const _0x5df98a = _0x36a8ec[_0x1f1ff4];
        if (_0x5df98a['isDead'])
            continue;
        const _0x4cd387 = _0x5df98a['width'] / 0x2;
        const _0x403471 = _0x53e78b + _0x4cd387;
        const _0x24b050 = (_0x5df98a['renderX'] ?? _0x5df98a['x']) + _0x5df98a['width'] / 0x2;
        const _0x1ea07d = (_0x5df98a['renderY'] ?? _0x5df98a['y']) + _0x5df98a['height'] / 0x2;
        const _0x2a1a80 = _0x176171 - _0x24b050;
        const _0x5e4ffe = _0x2c6696 - _0x1ea07d;
        const _0xdaa6ef = Math['sqrt'](_0x2a1a80 * _0x2a1a80 + _0x5e4ffe * _0x5e4ffe);
        if (_0xdaa6ef > 0x0 && _0xdaa6ef < _0x403471) {
            const _0x1174ce = _0x403471 - _0xdaa6ef;
            const _0x170b68 = _0x2a1a80 / _0xdaa6ef;
            const _0x385587 = _0x5e4ffe / _0xdaa6ef;
            _0x2ecd24['x'] += _0x170b68 * (_0x1174ce * 0.25);
            _0x2ecd24['y'] += _0x385587 * (_0x1174ce * 0.25);
            _0x5df98a['x'] -= _0x170b68 * (_0x1174ce * 0.75);
            _0x5df98a['y'] -= _0x385587 * (_0x1174ce * 0.75);
            _0x4fd556(_0x5df98a);
            _0x3ca97b(_0x5df98a);
            if (_0x5df98a['renderX'] !== undefined) {
                _0x5df98a['renderX'] = _0x5df98a['x'];
                _0x5df98a['renderY'] = _0x5df98a['y'];
            }
            const _0x583d20 = _0x2ecd24['vx'] * _0x170b68 + _0x2ecd24['vy'] * _0x385587;
            if (_0x583d20 < 0x0) {
                _0x2ecd24['vx'] -= _0x583d20 * _0x170b68 * 0.25;
                _0x2ecd24['vy'] -= _0x583d20 * _0x385587 * 0.25;
            }
        }
    }
    _0x15bd84();
    _0x4b276c();
}
function _0x4b276c() {
    if (_0x2ecd24['isDead'])
        return;
    const _0xe7d182 = _0x2ecd24['scale'];
    const _0x530675 = _0x2ecd24['width'] * _0xe7d182 / 0x2;
    for (let _0x39a20f = 0x0; _0x39a20f < 0x2; _0x39a20f++) {
        let _0x563b98 = _0x2ecd24['x'] + _0x2ecd24['width'] / 0x2;
        let _0x2ad21a = _0x2ecd24['y'] + _0x2ecd24['height'] / 0x2;
        for (const _0x329e18 of _0x2b9810['ENTITIES']) {
            const _0x579af3 = _0x563b98 < _0x329e18['x'] ? _0x329e18['x'] : _0x563b98 > _0x329e18['x'] + _0x329e18['w'] ? _0x329e18['x'] + _0x329e18['w'] : _0x563b98;
            const _0x5158d9 = _0x2ad21a < _0x329e18['y'] ? _0x329e18['y'] : _0x2ad21a > _0x329e18['y'] + _0x329e18['h'] ? _0x329e18['y'] + _0x329e18['h'] : _0x2ad21a;
            const _0x35215b = _0x563b98 - _0x579af3;
            const _0x5b28f4 = _0x2ad21a - _0x5158d9;
            const _0x567d45 = Math['sqrt'](_0x35215b * _0x35215b + _0x5b28f4 * _0x5b28f4);
            if (_0x567d45 < _0x530675 && _0x567d45 > 0x0) {
                const _0x58a4a2 = _0x530675 - _0x567d45;
                const _0x1cb71a = _0x35215b / _0x567d45;
                const _0x3037dd = _0x5b28f4 / _0x567d45;
                _0x563b98 += _0x1cb71a * _0x58a4a2;
                _0x2ad21a += _0x3037dd * _0x58a4a2;
                const _0x1dddd3 = _0x2ecd24['vx'] * _0x1cb71a + _0x2ecd24['vy'] * _0x3037dd;
                if (_0x1dddd3 < 0x0) {
                    _0x2ecd24['vx'] -= _0x1dddd3 * _0x1cb71a;
                    _0x2ecd24['vy'] -= _0x1dddd3 * _0x3037dd;
                }
            } else if (_0x567d45 === 0x0) {
                const _0x309a20 = _0x563b98 - _0x329e18['x'];
                const _0x237639 = _0x329e18['x'] + _0x329e18['w'] - _0x563b98;
                const _0xd5535a = _0x2ad21a - _0x329e18['y'];
                const _0x12f416 = _0x329e18['y'] + _0x329e18['h'] - _0x2ad21a;
                const _0x4e8835 = Math['min'](_0x309a20, _0x237639, _0xd5535a, _0x12f416);
                if (_0x4e8835 === _0x309a20)
                    _0x563b98 = _0x329e18['x'] - _0x530675;
                else if (_0x4e8835 === _0x237639)
                    _0x563b98 = _0x329e18['x'] + _0x329e18['w'] + _0x530675;
                else if (_0x4e8835 === _0xd5535a)
                    _0x2ad21a = _0x329e18['y'] - _0x530675;
                else
                    _0x2ad21a = _0x329e18['y'] + _0x329e18['h'] + _0x530675;
            }
        }
        _0x2ecd24['x'] = _0x563b98 - _0x2ecd24['width'] / 0x2;
        _0x2ecd24['y'] = _0x2ad21a - _0x2ecd24['height'] / 0x2;
    }
}
function _0x4587d8(_0x1c00af, _0x48f5cd) {
    const _0x328cf1 = _0x2b9810['MAP']['layers']['find'](_0x1061ea => _0x1061ea['name'] === 'trees');
    if (!_0x328cf1)
        return ![];
    const _0x109b43 = Math['floor'](_0x1c00af / _0x2b9810['MAP']['tileSize']);
    const _0x2cfe23 = Math['floor'](_0x48f5cd / _0x2b9810['MAP']['tileSize']);
    if (_0x109b43 < 0x0 || _0x109b43 >= _0x2b9810['MAP']['columns'] || _0x2cfe23 < 0x0 || _0x2cfe23 >= _0x2b9810['MAP']['rows'])
        return ![];
    return _0x328cf1['data'][_0x2cfe23 * _0x2b9810['MAP']['columns'] + _0x109b43] === 0xb;
}
let _0x34008a = null;
function _0x1895fc() {
    const _0x25f56c = _0x2b9810['MAP'];
    const _0x45daa0 = _0x25f56c['layers']['find'](_0x2558ee => _0x2558ee['name'] === 'floor2');
    const _0x91e7c5 = _0x25f56c['layers']['find'](_0x4d57f7 => _0x4d57f7['name'] === 'walls');
    if (!_0x45daa0 || !_0x91e7c5) {
        _0x34008a = null;
        return;
    }
    const _0x1fb921 = _0x25f56c['columns'];
    const _0x5b831b = _0x25f56c['rows'];
    const _0x228803 = [];
    const _0x28d62b = [];
    const _0x1b0b4b = new Set();
    for (let _0x386551 = 0x0; _0x386551 < _0x5b831b; _0x386551++) {
        for (let _0x329e3a = 0x0; _0x329e3a < _0x1fb921; _0x329e3a++) {
            const _0x38c8c9 = _0x386551 * _0x1fb921 + _0x329e3a;
            const _0x34c77c = _0x45daa0['data'][_0x38c8c9];
            const _0x24d51d = _0x91e7c5['data'][_0x38c8c9];
            if (_0x34c77c === 0x2 || _0x34c77c === 0x4) {
                _0x228803['push']({
                    'c': _0x329e3a,
                    'r': _0x386551
                });
                if (_0x24d51d !== 0x0)
                    _0x28d62b['push']({
                        'c': _0x329e3a,
                        'r': _0x386551
                    });
            }
            if (_0x24d51d !== 0x0)
                _0x1b0b4b['add'](_0x329e3a + ',' + _0x386551);
        }
    }
    const _0x5e5970 = new Set(_0x228803['map'](_0x6139e7 => _0x6139e7['c'] + ',' + _0x6139e7['r']));
    const _0x445f13 = [
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
                c: _0x4331cc,
                r: _0x37a699
            } of _0x228803) {
        for (const [_0x5f5930, _0x1424e0] of _0x445f13) {
            const _0x2361bc = _0x4331cc + _0x5f5930, _0x47aa73 = _0x37a699 + _0x1424e0;
            const _0x584789 = _0x2361bc + ',' + _0x47aa73;
            if (!_0x5e5970['has'](_0x584789))
                _0x1b0b4b['add'](_0x584789);
        }
    }
    _0x34008a = {
        'wallSet': _0x1b0b4b,
        'floorTiles': _0x228803,
        'wallTiles': _0x28d62b,
        'interiorSet': _0x5e5970
    };
}
function _0x8afda7() {
    const _0x9cd8e2 = _0x2b9810['MAP']['layers']['find'](_0x2dde17 => _0x2dde17['name'] === 'floor2');
    if (!_0x9cd8e2)
        return ![];
    const _0x1bd0cc = Math['floor']((_0x2ecd24['x'] + _0x2ecd24['width'] / 0x2) / _0x2b9810['MAP']['tileSize']);
    const _0x4d76fc = Math['floor']((_0x2ecd24['y'] + _0x2ecd24['height'] / 0x2) / _0x2b9810['MAP']['tileSize']);
    if (_0x1bd0cc < 0x0 || _0x1bd0cc >= _0x2b9810['MAP']['columns'] || _0x4d76fc < 0x0 || _0x4d76fc >= _0x2b9810['MAP']['rows'])
        return ![];
    const _0x506f2f = _0x9cd8e2['data'][_0x4d76fc * _0x2b9810['MAP']['columns'] + _0x1bd0cc];
    return _0x506f2f === 0x2;
}
function _0x416292() {
    if (_0x2ecd24['isDead']) {
        _0x2b9810['SHADOW']['polygon'] = null;
        return;
    }
    const _0x425eb9 = _0x2b9810['MAP'];
    const _0x3616ef = _0x2b9810['SHADOW'];
    const _0x37fa74 = _0x425eb9['tileSize'];
    if (!_0x34008a)
        _0x1895fc();
    if (!_0x34008a) {
        _0x3616ef['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x3298b0,
        floorTiles: _0x16b25e
    } = _0x34008a;
    if (_0x16b25e['length'] === 0x0) {
        _0x3616ef['polygon'] = null;
        return;
    }
    if (!_0x8afda7()) {
        _0x3616ef['polygon'] = null;
        return;
    }
    const _0x139171 = _0x2ecd24['x'] + _0x2ecd24['width'] / 0x2;
    const _0x2b610d = _0x2ecd24['y'] + _0x2ecd24['height'] / 0x2;
    if (!_0x34008a['_bounds']) {
        let _0x7593d8 = Infinity, _0x4906eb = -Infinity, _0x3a9997 = Infinity, _0x517e88 = -Infinity;
        for (const {
                    c: _0x495cbd,
                    r: _0x5c28b7
                } of _0x16b25e) {
            if (_0x495cbd < _0x7593d8)
                _0x7593d8 = _0x495cbd;
            if (_0x495cbd > _0x4906eb)
                _0x4906eb = _0x495cbd;
            if (_0x5c28b7 < _0x3a9997)
                _0x3a9997 = _0x5c28b7;
            if (_0x5c28b7 > _0x517e88)
                _0x517e88 = _0x5c28b7;
        }
        _0x34008a['_bounds'] = {
            'minC': Math['max'](0x0, _0x7593d8 - 0x1),
            'maxC': Math['min'](_0x425eb9['columns'] - 0x1, _0x4906eb + 0x1),
            'minR': Math['max'](0x0, _0x3a9997 - 0x1),
            'maxR': Math['min'](_0x425eb9['rows'] - 0x1, _0x517e88 + 0x1)
        };
        const _0x329483 = [];
        for (let _0x1adc98 = _0x34008a['_bounds']['minR']; _0x1adc98 <= _0x34008a['_bounds']['maxR']; _0x1adc98++) {
            for (let _0x4fb7fe = _0x34008a['_bounds']['minC']; _0x4fb7fe <= _0x34008a['_bounds']['maxC']; _0x4fb7fe++) {
                if (_0x3298b0['has'](_0x4fb7fe + ',' + _0x1adc98))
                    _0x329483['push'](_0x4fb7fe, _0x1adc98);
            }
        }
        _0x34008a['_wallArr'] = _0x329483;
    }
    const {
        minC: _0xc75152,
        maxC: _0x97da51,
        minR: _0x20e2af,
        maxR: _0x3777cf
    } = _0x34008a['_bounds'];
    const _0x5699a2 = _0x34008a['_wallArr'];
    const _0x19e4a6 = 0.0001;
    const _0x2a2bdc = new Set();
    const _0x79b028 = [];
    for (let _0x5a0dce = 0x0; _0x5a0dce < _0x5699a2['length']; _0x5a0dce += 0x2) {
        const _0x1af35c = _0x5699a2[_0x5a0dce], _0xc04014 = _0x5699a2[_0x5a0dce + 0x1];
        const _0x5182bb = [
            _0x1af35c * _0x37fa74,
            _0xc04014 * _0x37fa74,
            _0x1af35c * _0x37fa74 + _0x37fa74,
            _0xc04014 * _0x37fa74,
            _0x1af35c * _0x37fa74,
            _0xc04014 * _0x37fa74 + _0x37fa74,
            _0x1af35c * _0x37fa74 + _0x37fa74,
            _0xc04014 * _0x37fa74 + _0x37fa74
        ];
        for (let _0x58ee30 = 0x0; _0x58ee30 < _0x5182bb['length']; _0x58ee30 += 0x2) {
            const _0x2abd44 = _0x5182bb[_0x58ee30], _0xe118a9 = _0x5182bb[_0x58ee30 + 0x1];
            const _0x33396e = Math['atan2'](_0xe118a9 - _0x2b610d, _0x2abd44 - _0x139171);
            const _0x8440f9 = Math['round'](_0x33396e * 0x4e20);
            if (!_0x2a2bdc['has'](_0x8440f9 - 0x1)) {
                _0x2a2bdc['add'](_0x8440f9 - 0x1);
                _0x79b028['push'](_0x33396e - _0x19e4a6);
            }
            if (!_0x2a2bdc['has'](_0x8440f9)) {
                _0x2a2bdc['add'](_0x8440f9);
                _0x79b028['push'](_0x33396e);
            }
            if (!_0x2a2bdc['has'](_0x8440f9 + 0x1)) {
                _0x2a2bdc['add'](_0x8440f9 + 0x1);
                _0x79b028['push'](_0x33396e + _0x19e4a6);
            }
        }
    }
    _0x79b028['sort']((_0x30ec95, _0x3aed8e) => _0x30ec95 - _0x3aed8e);
    const _0x5959db = Math['hypot']((_0x97da51 - _0xc75152 + 0x2) * _0x37fa74, (_0x3777cf - _0x20e2af + 0x2) * _0x37fa74);
    const _0x9b65ba = _0x139d87 => {
        const _0x333567 = Math['cos'](_0x139d87);
        const _0x1b72e7 = Math['sin'](_0x139d87);
        let _0xcf221d = _0x5959db;
        for (let _0x72218e = 0x0; _0x72218e < _0x5699a2['length']; _0x72218e += 0x2) {
            const _0x4cc2f7 = _0x5699a2[_0x72218e], _0x1180d7 = _0x5699a2[_0x72218e + 0x1];
            const _0x2a8051 = _0x4cc2f7 * _0x37fa74, _0x49c4e2 = _0x1180d7 * _0x37fa74;
            const _0x305f36 = _0x2a8051 + _0x37fa74, _0x260e91 = _0x49c4e2 + _0x37fa74;
            const _0x165278 = _0x2a8051 + _0x37fa74 * 0.5, _0x5960ea = _0x49c4e2 + _0x37fa74 * 0.5;
            const _0x5d3a71 = Math['abs'](_0x165278 - _0x139171) + Math['abs'](_0x5960ea - _0x2b610d);
            if (_0x5d3a71 > _0xcf221d + _0x37fa74 * 1.5)
                continue;
            let _0xd442ac, _0x6d1cbd, _0x514483;
            _0xd442ac = -_0x1b72e7 * _0x37fa74;
            if (Math['abs'](_0xd442ac) >= 1e-10) {
                _0x6d1cbd = -(_0x49c4e2 - _0x2b610d) * _0x37fa74 / _0xd442ac;
                _0x514483 = ((_0x2a8051 - _0x139171) * _0x1b72e7 - (_0x49c4e2 - _0x2b610d) * _0x333567) / _0xd442ac;
                if (_0x6d1cbd > 0.001 && _0x514483 >= 0x0 && _0x514483 <= 0x1 && _0x6d1cbd < _0xcf221d)
                    _0xcf221d = _0x6d1cbd;
            }
            _0xd442ac = _0x333567 * _0x37fa74;
            if (Math['abs'](_0xd442ac) >= 1e-10) {
                _0x6d1cbd = (_0x305f36 - _0x139171) * _0x37fa74 / _0xd442ac;
                _0x514483 = ((_0x305f36 - _0x139171) * _0x1b72e7 - (_0x49c4e2 - _0x2b610d) * _0x333567) / _0xd442ac;
                if (_0x6d1cbd > 0.001 && _0x514483 >= 0x0 && _0x514483 <= 0x1 && _0x6d1cbd < _0xcf221d)
                    _0xcf221d = _0x6d1cbd;
            }
            _0xd442ac = _0x1b72e7 * _0x37fa74;
            if (Math['abs'](_0xd442ac) >= 1e-10) {
                _0x6d1cbd = (_0x260e91 - _0x2b610d) * _0x37fa74 / _0xd442ac;
                _0x514483 = ((_0x305f36 - _0x139171) * _0x1b72e7 - (_0x260e91 - _0x2b610d) * _0x333567) / _0xd442ac;
                if (_0x6d1cbd > 0.001 && _0x514483 >= 0x0 && _0x514483 <= 0x1 && _0x6d1cbd < _0xcf221d)
                    _0xcf221d = _0x6d1cbd;
            }
            _0xd442ac = -_0x333567 * _0x37fa74;
            if (Math['abs'](_0xd442ac) >= 1e-10) {
                _0x6d1cbd = -(_0x2a8051 - _0x139171) * _0x37fa74 / _0xd442ac;
                _0x514483 = ((_0x2a8051 - _0x139171) * _0x1b72e7 - (_0x260e91 - _0x2b610d) * _0x333567) / _0xd442ac;
                if (_0x6d1cbd > 0.001 && _0x514483 >= 0x0 && _0x514483 <= 0x1 && _0x6d1cbd < _0xcf221d)
                    _0xcf221d = _0x6d1cbd;
            }
        }
        const _0x595d37 = _0xcf221d < _0x5959db ? _0xcf221d + 0x8 : _0xcf221d;
        return {
            'x': _0x139171 + _0x333567 * _0x595d37,
            'y': _0x2b610d + _0x1b72e7 * _0x595d37
        };
    };
    const _0x28ef65 = [];
    for (let _0x13ab8d = 0x0; _0x13ab8d < _0x79b028['length']; _0x13ab8d++) {
        const _0x272988 = _0x9b65ba(_0x79b028[_0x13ab8d]);
        _0x28ef65['push'](_0x272988['x'], _0x272988['y']);
    }
    _0x3616ef['polygon'] = _0x28ef65['length'] >= 0x6 ? new Float32Array(_0x28ef65) : null;
}
function _0x525847(_0x5ebdf5, _0x4e2d39, _0x6ae514) {
    if (_0x2ecd24['isDead'])
        return;
    if (!_0x34008a)
        return;
    const {
        floorTiles: _0x322b0a,
        wallTiles: _0x432d6e
    } = _0x34008a;
    if (_0x322b0a['length'] === 0x0)
        return;
    const _0x83a437 = _0x2b9810['SHADOW'];
    const _0x55ef39 = _0x2b9810['MAP']['tileSize'];
    const _0x2b45cf = _0x2b9810['CAMERA']['width'];
    const _0x110536 = _0x2b9810['CAMERA']['height'];
    if (!_0x2b9810['SHADOW']['_buf'] || _0x2b9810['SHADOW']['_buf']['width'] !== _0x2b45cf || _0x2b9810['SHADOW']['_buf']['height'] !== _0x110536) {
        _0x2b9810['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x2b9810['SHADOW']['_buf']['width'] = _0x2b45cf;
        _0x2b9810['SHADOW']['_buf']['height'] = _0x110536;
    }
    const _0x1a423c = _0x2b9810['SHADOW']['_buf'];
    const _0x5b8f0b = _0x1a423c['getContext']('2d');
    _0x5b8f0b['clearRect'](0x0, 0x0, _0x2b45cf, _0x110536);
    _0x5b8f0b['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x5b8f0b['beginPath']();
    for (const {
                c: _0x5cf342,
                r: _0x105018
            } of _0x322b0a) {
        const _0x36102a = Math['floor'](_0x5cf342 * _0x55ef39 - _0x4e2d39), _0xe032ae = Math['floor'](_0x105018 * _0x55ef39 - _0x6ae514);
        if (_0x36102a > _0x2b45cf || _0xe032ae > _0x110536 || _0x36102a + _0x55ef39 < 0x0 || _0xe032ae + _0x55ef39 < 0x0)
            continue;
        _0x5b8f0b['rect'](_0x36102a - 0x1, _0xe032ae - 0x1, _0x55ef39 + 0x2, _0x55ef39 + 0x2);
    }
    _0x5b8f0b['fill']();
    if (_0x432d6e['length'] > 0x0) {
        _0x5b8f0b['globalCompositeOperation'] = 'destination-out';
        _0x5b8f0b['fillStyle'] = 'rgba(0,0,0,1)';
        _0x5b8f0b['beginPath']();
        for (const {
                    c: _0x1293d9,
                    r: _0x13775e
                } of _0x432d6e) {
            const _0x2c2fab = Math['floor'](_0x1293d9 * _0x55ef39 - _0x4e2d39), _0x4d359c = Math['floor'](_0x13775e * _0x55ef39 - _0x6ae514);
            if (_0x2c2fab > _0x2b45cf || _0x4d359c > _0x110536 || _0x2c2fab + _0x55ef39 < 0x0 || _0x4d359c + _0x55ef39 < 0x0)
                continue;
            _0x5b8f0b['rect'](_0x2c2fab - 0x1, _0x4d359c - 0x1, _0x55ef39 + 0x2, _0x55ef39 + 0x2);
        }
        _0x5b8f0b['fill']();
        _0x5b8f0b['globalCompositeOperation'] = 'source-over';
    }
    if (_0x83a437['polygon'] && _0x83a437['polygon']['length'] >= 0x6) {
        _0x5b8f0b['globalCompositeOperation'] = 'destination-out';
        _0x5b8f0b['beginPath']();
        const _0x33d0c1 = _0x83a437['polygon'];
        _0x5b8f0b['moveTo'](_0x33d0c1[0x0] - _0x4e2d39, _0x33d0c1[0x1] - _0x6ae514);
        for (let _0x3dd468 = 0x2; _0x3dd468 < _0x33d0c1['length']; _0x3dd468 += 0x2) {
            _0x5b8f0b['lineTo'](_0x33d0c1[_0x3dd468] - _0x4e2d39, _0x33d0c1[_0x3dd468 + 0x1] - _0x6ae514);
        }
        _0x5b8f0b['closePath']();
        _0x5b8f0b['fill']();
        _0x5b8f0b['globalCompositeOperation'] = 'source-over';
    }
    _0x5ebdf5['drawImage'](_0x1a423c, 0x0, 0x0);
}
function _0x52b04e(_0x5341cd) {
    let _0x292739 = 0x0, _0x5d072d = 0x0;
    const _0x43d96e = _0x2b9810['INPUTS']['mouseX'] / _0x2b9810['SYSTEM']['viewScale'];
    const _0x29dbdb = _0x2b9810['INPUTS']['mouseY'] / _0x2b9810['SYSTEM']['viewScale'];
    const _0x7082f = _0x2ecd24['x'] - _0x2b9810['CAMERA']['x'] + _0x2ecd24['width'] / 0x2;
    const _0x16a11e = _0x2ecd24['y'] - _0x2b9810['CAMERA']['y'] + _0x2ecd24['height'] / 0x2;
    const _0x4c7325 = Math['atan2'](_0x29dbdb - _0x16a11e, _0x43d96e - _0x7082f);
    if (_0x4d4832 !== 0x0 || _0x11c673 !== 0x0) {
        _0x292739 = _0x4d4832;
        _0x5d072d = _0x11c673;
    } else if (_0x44daa8) {
        let _0x1529dd = 0x0, _0xaf9cbe = 0x0;
        if (_0x2b9810['INPUTS']['keys']['w'] || _0x2b9810['INPUTS']['keys']['arrowup'])
            _0x1529dd += 0x1;
        if (_0x2b9810['INPUTS']['keys']['s'] || _0x2b9810['INPUTS']['keys']['arrowdown'])
            _0x1529dd -= 0x1;
        if (_0x2b9810['INPUTS']['keys']['d'] || _0x2b9810['INPUTS']['keys']['arrowright'])
            _0xaf9cbe += 0x1;
        if (_0x2b9810['INPUTS']['keys']['a'] || _0x2b9810['INPUTS']['keys']['arrowleft'])
            _0xaf9cbe -= 0x1;
        if (_0x1529dd !== 0x0 || _0xaf9cbe !== 0x0) {
            const _0x201db9 = _0x4c7325 + Math['atan2'](_0xaf9cbe, _0x1529dd);
            _0x292739 = Math['cos'](_0x201db9);
            _0x5d072d = Math['sin'](_0x201db9);
        }
    } else {
        if (_0x2b9810['INPUTS']['keys']['w'] || _0x2b9810['INPUTS']['keys']['arrowup'])
            _0x5d072d -= 0x1;
        if (_0x2b9810['INPUTS']['keys']['s'] || _0x2b9810['INPUTS']['keys']['arrowdown'])
            _0x5d072d += 0x1;
        if (_0x2b9810['INPUTS']['keys']['a'] || _0x2b9810['INPUTS']['keys']['arrowleft'])
            _0x292739 -= 0x1;
        if (_0x2b9810['INPUTS']['keys']['d'] || _0x2b9810['INPUTS']['keys']['arrowright'])
            _0x292739 += 0x1;
        const _0x5b6a17 = _0x292739 !== 0x0 || _0x5d072d !== 0x0;
        if (_0x5b6a17) {
            const _0x2ecdad = Math['sqrt'](_0x292739 * _0x292739 + _0x5d072d * _0x5d072d);
            _0x292739 /= _0x2ecdad;
            _0x5d072d /= _0x2ecdad;
        }
    }
    if (_0x2b9810['GAME_STATE'] === 'NIGHT' && _0xe67095 === 'Skinwalker') {
        if (_0x2b9810['NIGHT_ABILITY_OPEN'] || !_0x2b9810['CURRENT_TARGET']) {
            _0x292739 = 0x0;
            _0x5d072d = 0x0;
            _0x2ecd24['vx'] = 0x0;
            _0x2ecd24['vy'] = 0x0;
            _0x2ecd24['x'] = _0x2b9810['MAP']['columns'] * _0x2b9810['MAP']['tileSize'] / 0x2 - _0x2ecd24['width'] / 0x2;
            _0x2ecd24['y'] = _0x2b9810['MAP']['rows'] * _0x2b9810['MAP']['tileSize'] / 0x2 - _0x2ecd24['height'] / 0x2;
        }
    }
    const _0x3acd49 = _0x292739 !== 0x0 || _0x5d072d !== 0x0;
    const _0x40cd10 = (_0x2b9810['INPUTS']['keys']['shift'] || _0x333d19 || _0x4a5fc8) && _0x3acd49;
    _0x2ecd24['bopTimer'] = _0x40cd10 ? _0x2ecd24['bopTimer'] + _0x5341cd : 0x0;
    _0x2ecd24['scale'] = 0x1 + (_0x2ecd24['bopTimer'] > 0x0 ? Math['sin'](_0x2ecd24['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x37775e = Math['pow'](0.001, _0x5341cd);
    const _0x34ef00 = _0x40cd10 ? 0x74a : 0x5d5;
    _0x2ecd24['vx'] += _0x292739 * _0x34ef00 * _0x5341cd;
    _0x2ecd24['vy'] += _0x5d072d * _0x34ef00 * _0x5341cd;
    _0x2ecd24['vx'] *= _0x37775e;
    _0x2ecd24['vy'] *= _0x37775e;
    _0x2ecd24['x'] += _0x2ecd24['vx'] * _0x5341cd;
    _0x2ecd24['y'] += _0x2ecd24['vy'] * _0x5341cd;
    for (let _0x442965 = 0x0; _0x442965 < 0x3; _0x442965++)
        _0x15bd84();
    for (let _0x3812ac = 0x0; _0x3812ac < 0x2; _0x3812ac++)
        _0x4b276c();
    for (let _0x1594f1 = 0x0; _0x1594f1 < 0x2; _0x1594f1++)
        _0x51a007();
    if (_0x2ecd24['x'] < 0x0)
        _0x2ecd24['x'] = 0x0;
    if (_0x2ecd24['y'] < 0x0)
        _0x2ecd24['y'] = 0x0;
    if (_0x2ecd24['x'] + _0x2ecd24['width'] > _0x2b9810['MAP']['columns'] * _0x2b9810['MAP']['tileSize'])
        _0x2ecd24['x'] = _0x2b9810['MAP']['columns'] * _0x2b9810['MAP']['tileSize'] - _0x2ecd24['width'];
    if (_0x2ecd24['y'] + _0x2ecd24['height'] > _0x2b9810['MAP']['rows'] * _0x2b9810['MAP']['tileSize'])
        _0x2ecd24['y'] = _0x2b9810['MAP']['rows'] * _0x2b9810['MAP']['tileSize'] - _0x2ecd24['height'];
    if (Date['now']() < _0x23886a) {
    } else if (_0x4a6d81) {
        _0x2ecd24['angle'] = _0x51cf45 + Math['PI'] / 0x2;
    } else if (_0x4d4832 !== 0x0 || _0x11c673 !== 0x0) {
        _0x2ecd24['angle'] = Math['atan2'](_0x11c673, _0x4d4832) + Math['PI'] / 0x2;
    } else if (!_0x19ba4a) {
        _0x2ecd24['angle'] = _0x4c7325 + Math['PI'] / 0x2;
    }
    const _0x1a5fdc = _0x2ecd24['x'] + _0x2ecd24['width'] / 0x2 - _0x2b9810['CAMERA']['width'] / 0x2;
    const _0x5b3b73 = _0x2ecd24['y'] + _0x2ecd24['height'] / 0x2 - _0x2b9810['CAMERA']['height'] / 0x2;
    if (_0x2b9810['CAMERA']['x'] === null || isNaN(_0x2b9810['CAMERA']['x']) || !isFinite(_0x2b9810['CAMERA']['x'])) {
        _0x2b9810['CAMERA']['x'] = _0x1a5fdc;
        _0x2b9810['CAMERA']['y'] = _0x5b3b73;
    } else {
        const _0x3f82ed = 0x1 - Math['exp'](-Math['max'](0x0, _0x5341cd) * 0x28);
        _0x2b9810['CAMERA']['x'] += (_0x1a5fdc - _0x2b9810['CAMERA']['x']) * _0x3f82ed;
        _0x2b9810['CAMERA']['y'] += (_0x5b3b73 - _0x2b9810['CAMERA']['y']) * _0x3f82ed;
    }
    for (const _0x59aed5 in _0x36a8ec) {
        const _0xe3689 = _0x36a8ec[_0x59aed5];
        if (_0xe3689['renderX'] === undefined) {
            _0xe3689['renderX'] = _0xe3689['x'];
            _0xe3689['renderY'] = _0xe3689['y'];
            _0xe3689['renderAngle'] = _0xe3689['angle'] || 0x0;
        }
        const _0x254017 = _0xe3689['x'] + (_0xe3689['vx'] || 0x0) * _0x5341cd;
        const _0x34cd12 = _0xe3689['y'] + (_0xe3689['vy'] || 0x0) * _0x5341cd;
        _0xe3689['x'] = _0x254017;
        _0xe3689['y'] = _0x34cd12;
        const _0x1131ab = 0x1 - Math['exp'](-_0x5341cd * 0x12);
        const _0x585b72 = _0xe3689['x'] - _0xe3689['renderX'], _0x156364 = _0xe3689['y'] - _0xe3689['renderY'];
        const _0x1ea48c = Math['sqrt'](_0x585b72 * _0x585b72 + _0x156364 * _0x156364);
        const _0x368945 = 0xc8;
        if (_0x1ea48c > _0x368945) {
            _0xe3689['renderX'] = _0xe3689['x'] - _0x585b72 / _0x1ea48c * _0x368945;
            _0xe3689['renderY'] = _0xe3689['y'] - _0x156364 / _0x1ea48c * _0x368945;
        }
        _0xe3689['renderX'] += (_0xe3689['x'] - _0xe3689['renderX']) * _0x1131ab;
        _0xe3689['renderY'] += (_0xe3689['y'] - _0xe3689['renderY']) * _0x1131ab;
        let _0x45c47b = (_0xe3689['angle'] || 0x0) - _0xe3689['renderAngle'];
        while (_0x45c47b < -Math['PI'])
            _0x45c47b += Math['PI'] * 0x2;
        while (_0x45c47b > Math['PI'])
            _0x45c47b -= Math['PI'] * 0x2;
        _0xe3689['renderAngle'] += _0x45c47b * (0x1 - Math['exp'](-_0x5341cd * 0x14));
    }
    if (_0x2b9810['GAME_STATE'] === 'NIGHT') {
        _0xf4ecba = Math['min'](0.6, _0xf4ecba + _0x5341cd * 0.5);
    } else {
        _0xf4ecba = Math['max'](0x0, _0xf4ecba - _0x5341cd * 0.5);
    }
    _0x416292();
    _0x13531c();
}
function _0x45e422(_0x5f0815, _0x4fcfb2, _0x31cdda, _0x782959, _0x32e1e1 = !![]) {
    _0x5f0815['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x5d5af1 = _0x5f0815['measureText'](_0x4fcfb2)['width'];
    const _0x37cb74 = _0x5d5af1 + 0x18;
    const _0x14e79c = 0x1c;
    _0x5f0815['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x5f0815['beginPath']();
    if (_0x5f0815['roundRect']) {
        _0x5f0815['roundRect'](_0x31cdda - _0x37cb74 / 0x2, _0x782959 - _0x14e79c, _0x37cb74, _0x14e79c, 0x6);
    } else {
        _0x5f0815['rect'](_0x31cdda - _0x37cb74 / 0x2, _0x782959 - _0x14e79c, _0x37cb74, _0x14e79c);
    }
    _0x5f0815['fill']();
    if (_0x32e1e1) {
        _0x5f0815['beginPath']();
        _0x5f0815['moveTo'](_0x31cdda - 0x6, _0x782959);
        _0x5f0815['lineTo'](_0x31cdda + 0x6, _0x782959);
        _0x5f0815['lineTo'](_0x31cdda, _0x782959 + 0x6);
        _0x5f0815['fill']();
    }
    _0x5f0815['fillStyle'] = '#ffffff';
    _0x5f0815['textAlign'] = 'center';
    _0x5f0815['textBaseline'] = 'middle';
    _0x5f0815['fillText'](_0x4fcfb2, _0x31cdda, _0x782959 - _0x14e79c / 0x2 + 0x1);
}
function _0x1b24b7(_0x76fe3f, _0x2aa254, _0x4c2973, _0x1420ac) {
    if (!_0x2aa254 || _0x2aa254['length'] === 0x0)
        return;
    let _0x36692d = _0x1420ac;
    for (let _0xb8b403 = 0x0; _0xb8b403 < _0x2aa254['length']; _0xb8b403++) {
        _0x45e422(_0x76fe3f, _0x2aa254[_0xb8b403]['text'], _0x4c2973, _0x36692d, _0xb8b403 === 0x0);
        _0x36692d -= 0x24;
    }
}
function _0x68a7a5() {
    if (!_0x2b9810['SYSTEM']['isReady'])
        return;
    _0x4ad738['fillStyle'] = '#000000';
    _0x4ad738['fillRect'](0x0, 0x0, _0x49837e['width'], _0x49837e['height']);
    _0x4ad738['save']();
    try {
        _0x4ad738['scale'](_0x2b9810['SYSTEM']['viewScale'], _0x2b9810['SYSTEM']['viewScale']);
        _0x4ad738['imageSmoothingEnabled'] = ![];
        const _0x286f58 = Math['floor'](_0x2b9810['CAMERA']['x'] || 0x0);
        const _0x2d16f8 = Math['floor'](_0x2b9810['CAMERA']['y'] || 0x0);
        const _0x598205 = Math['max'](0x0, Math['floor'](_0x286f58 / _0x2b9810['MAP']['chunkSize']));
        const _0x35289f = Math['min'](_0x2b9810['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x286f58 + _0x2b9810['CAMERA']['width']) / _0x2b9810['MAP']['chunkSize']));
        const _0x3b9f63 = Math['max'](0x0, Math['floor'](_0x2d16f8 / _0x2b9810['MAP']['chunkSize']));
        const _0x365510 = Math['min'](_0x2b9810['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x2d16f8 + _0x2b9810['CAMERA']['height']) / _0x2b9810['MAP']['chunkSize']));
        for (let _0x21ec81 = _0x3b9f63; _0x21ec81 <= _0x365510; _0x21ec81++)
            for (let _0x4bd9dc = _0x598205; _0x4bd9dc <= _0x35289f; _0x4bd9dc++) {
                const _0xf54a61 = _0x4bd9dc * _0x2b9810['MAP']['chunkSize'] - _0x286f58;
                const _0x4ec0ee = _0x21ec81 * _0x2b9810['MAP']['chunkSize'] - _0x2d16f8;
                _0x4ad738['drawImage'](_0x2b9810['MAP']['bgChunks'][_0x21ec81][_0x4bd9dc], _0xf54a61, _0x4ec0ee, _0x2b9810['MAP']['chunkSize'] + 0x1, _0x2b9810['MAP']['chunkSize'] + 0x1);
            }
        if (_0x6696ab['complete'] && _0x6696ab['naturalWidth'] > 0x0) {
            const _0x1701e9 = _0x2b9810['MAP']['tileSize'];
            const _0x5b4681 = _0x1701e9 * 0xa;
            const _0x16bbe6 = _0x2b9810['MAP']['columns'] / 0x2 * _0x1701e9 - _0x5b4681 / 0x2 - _0x286f58;
            const _0x333c1e = _0x2b9810['MAP']['rows'] / 0x2 * _0x1701e9 - _0x5b4681 / 0x2 - _0x2d16f8;
            _0x4ad738['imageSmoothingEnabled'] = ![];
            _0x4ad738['drawImage'](_0x6696ab, _0x16bbe6, _0x333c1e, _0x5b4681, _0x5b4681);
        }
        if (_0x2ce22e['complete'] && _0x2ce22e['naturalWidth'] > 0x0) {
            _0x2b9810['ENTITIES']['forEach'](_0xab59ce => {
                if (_0xab59ce['type'] !== 'table')
                    return;
                _0x4ad738['save']();
                _0x4ad738['imageSmoothingEnabled'] = ![];
                const _0x3a1158 = _0x2ce22e['naturalWidth'] >= _0x2ce22e['naturalHeight'];
                const _0x121f27 = _0xab59ce['w'] >= _0xab59ce['h'];
                if (_0x3a1158 === _0x121f27) {
                    _0x4ad738['drawImage'](_0x2ce22e, _0xab59ce['x'] - _0x286f58, _0xab59ce['y'] - _0x2d16f8, _0xab59ce['w'], _0xab59ce['h']);
                } else {
                    _0x4ad738['translate'](_0xab59ce['x'] - _0x286f58 + _0xab59ce['w'] / 0x2, _0xab59ce['y'] - _0x2d16f8 + _0xab59ce['h'] / 0x2);
                    _0x4ad738['rotate'](Math['PI'] / 0x2);
                    _0x4ad738['drawImage'](_0x2ce22e, -_0xab59ce['h'] / 0x2, -_0xab59ce['w'] / 0x2, _0xab59ce['h'], _0xab59ce['w']);
                }
                _0x4ad738['restore']();
            });
        } else {
            _0x2b9810['ENTITIES']['forEach'](_0x38865b => {
                if (_0x38865b['type'] !== 'table')
                    return;
                _0x4ad738['save']();
                _0x4ad738['fillStyle'] = '#6b4423';
                _0x4ad738['fillRect'](_0x38865b['x'] - _0x286f58, _0x38865b['y'] - _0x2d16f8, _0x38865b['w'], _0x38865b['h']);
                _0x4ad738['strokeStyle'] = '#422810';
                _0x4ad738['lineWidth'] = 0x3;
                _0x4ad738['strokeRect'](_0x38865b['x'] - _0x286f58 + 0x1, _0x38865b['y'] - _0x2d16f8 + 0x1, _0x38865b['w'] - 0x2, _0x38865b['h'] - 0x2);
                _0x4ad738['fillStyle'] = '#82532a';
                _0x4ad738['fillRect'](_0x38865b['x'] - _0x286f58 + 0x4, _0x38865b['y'] - _0x2d16f8 + 0x4, _0x38865b['w'] - 0x8, _0x38865b['h'] - 0x8);
                _0x4ad738['restore']();
            });
        }
        if (_0x23c580) {
            for (let _0x4dca9e = _0x3b9f63; _0x4dca9e <= _0x365510; _0x4dca9e++) {
                for (let _0x2d2f7b = _0x598205; _0x2d2f7b <= _0x35289f; _0x2d2f7b++) {
                    const _0x11ca12 = _0x2d2f7b * _0x2b9810['MAP']['chunkSize'] - _0x286f58;
                    const _0x4b8fb2 = _0x4dca9e * _0x2b9810['MAP']['chunkSize'] - _0x2d16f8;
                    _0x4ad738['drawImage'](_0x2b9810['MAP']['fgChunks'][_0x4dca9e][_0x2d2f7b], _0x11ca12, _0x4b8fb2, _0x2b9810['MAP']['chunkSize'] + 0x1, _0x2b9810['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x411002 = _0x2b9810['GAME_STATE'] === 'NIGHT' && _0xe67095 === 'Skinwalker' && !_0x2ecd24['isDead'];
        const _0x5624aa = _0x2ecd24['x'] - _0x286f58 + _0x2ecd24['width'] / 0x2;
        const _0x1baa38 = _0x2ecd24['y'] - _0x2d16f8 + _0x2ecd24['height'] / 0x2;
        const _0x1db0d0 = _0x2ecd24['width'] * _0x2ecd24['scale'] * 1.3;
        const _0x1e913f = _0x2ecd24['height'] * _0x2ecd24['scale'] * 1.3;
        for (const _0x772475 in _0x36a8ec) {
            const _0x3f042c = _0x36a8ec[_0x772475];
            if (_0x3f042c['isDead'])
                continue;
            const _0x36cfad = (_0x3f042c['renderX'] ?? _0x3f042c['x']) - _0x286f58 + _0x3f042c['width'] / 0x2;
            const _0x561405 = (_0x3f042c['renderY'] ?? _0x3f042c['y']) - _0x2d16f8 + _0x3f042c['height'] / 0x2;
            const _0xf705ee = Math['min'](0x2, Math['max'](0.3, _0x3f042c['scale'] || 0x1));
            const _0x470640 = _0x3f042c['width'] * _0xf705ee * 1.3;
            const _0x5145e8 = _0x3f042c['height'] * _0xf705ee * 1.3;
            _0x4ad738['save']();
            try {
                _0x4ad738['translate'](_0x36cfad, _0x561405);
                _0x4ad738['rotate'](_0x3f042c['renderAngle'] ?? 0x0);
                if (_0x3f042c['isDark'])
                    _0x4ad738['filter'] = 'brightness(0)';
                _0xd64f74(_0x4ad738, _0x3f042c['body'], _0x3f042c['eyes'], _0x470640, _0x5145e8);
                if (_0xd9375c['has'](parseInt(_0x772475)) && _0x486fa2['complete'] && _0x486fa2['naturalWidth'] > 0x0) {
                    _0x4ad738['drawImage'](_0x486fa2, -_0x470640 / 0x2, -_0x5145e8 / 0x2, _0x470640, _0x5145e8);
                }
                if (_0x3f042c['isDark'])
                    _0x4ad738['filter'] = 'none';
            } finally {
                _0x4ad738['restore']();
            }
            if (!_0x4587d8((_0x3f042c['renderX'] ?? _0x3f042c['x']) + _0x3f042c['width'] / 0x2, (_0x3f042c['renderY'] ?? _0x3f042c['y']) + _0x3f042c['height'] / 0x2)) {
                _0x4ad738['textAlign'] = 'center';
                _0x4ad738['lineJoin'] = 'round';
                _0x4ad738['lineWidth'] = 0x3;
                _0x4ad738['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x4ad738['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x4ad738['fillStyle'] = _0xd9375c['has'](parseInt(_0x772475)) ? '#cc88ff' : '#ffffff';
                const _0x254a5b = _0x3f042c['isDark'] ? '???' : _0x3f042c['name'] + (_0x3f042c['isOwner'] ? '\x20[🗝️]' : '');
                _0x4ad738['strokeText'](_0x254a5b, _0x36cfad, _0x561405 - _0x5145e8 / 0x2 - 0x10);
                _0x4ad738['fillText'](_0x254a5b, _0x36cfad, _0x561405 - _0x5145e8 / 0x2 - 0x10);
            }
        }
        if (!_0x2ecd24['isDead']) {
            _0x4ad738['save']();
            try {
                _0x4ad738['translate'](_0x5624aa, _0x1baa38);
                _0x4ad738['rotate'](_0x2ecd24['angle']);
                if (_0x411002)
                    _0x4ad738['filter'] = 'brightness(0)';
                _0xd64f74(_0x4ad738, _0x8cd3f, _0x58b6b0, _0x1db0d0, _0x1e913f);
                if (_0xd9375c['has'](_0x2f4c38) && _0x486fa2['complete'] && _0x486fa2['naturalWidth'] > 0x0) {
                    _0x4ad738['drawImage'](_0x486fa2, -_0x1db0d0 / 0x2, -_0x1e913f / 0x2, _0x1db0d0, _0x1e913f);
                }
                if (_0x411002)
                    _0x4ad738['filter'] = 'none';
            } finally {
                _0x4ad738['restore']();
            }
            if (!_0x4587d8(_0x2ecd24['x'] + _0x2ecd24['width'] / 0x2, _0x2ecd24['y'] + _0x2ecd24['height'] / 0x2)) {
                _0x4ad738['textAlign'] = 'center';
                _0x4ad738['lineJoin'] = 'round';
                _0x4ad738['lineWidth'] = 0x3;
                _0x4ad738['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x4ad738['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x4ad738['fillStyle'] = _0xd9375c['has'](_0x2f4c38) ? '#cc88ff' : '#ffffff';
                const _0x213bda = _0x411002 ? '???' : _0x4ad7bb + (_0x3b1f31 ? '\x20[🗝️]' : '');
                _0x4ad738['strokeText'](_0x213bda, _0x5624aa, _0x1baa38 - _0x1e913f / 0x2 - 0x10);
                _0x4ad738['fillText'](_0x213bda, _0x5624aa, _0x1baa38 - _0x1e913f / 0x2 - 0x10);
            }
        }
        if (_0x2b9810['MAP']['wallChunks'] && _0x2b9810['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x5ed207 = _0x3b9f63; _0x5ed207 <= _0x365510; _0x5ed207++)
                for (let _0x3e93e2 = _0x598205; _0x3e93e2 <= _0x35289f; _0x3e93e2++) {
                    if (!_0x2b9810['MAP']['wallChunks'][_0x5ed207] || !_0x2b9810['MAP']['wallChunks'][_0x5ed207][_0x3e93e2])
                        continue;
                    const _0x5c93bc = _0x3e93e2 * _0x2b9810['MAP']['chunkSize'] - _0x286f58;
                    const _0x4b36c1 = _0x5ed207 * _0x2b9810['MAP']['chunkSize'] - _0x2d16f8;
                    _0x4ad738['drawImage'](_0x2b9810['MAP']['wallChunks'][_0x5ed207][_0x3e93e2], _0x5c93bc, _0x4b36c1, _0x2b9810['MAP']['chunkSize'] + 0x1, _0x2b9810['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x441cb1 of _0x2b9810['ENTITIES']) {
            if (_0x441cb1['type'] !== 'npc')
                continue;
            const _0x44aab5 = _0x441cb1['x'] - _0x286f58 + _0x441cb1['w'] / 0x2;
            const _0x380a96 = _0x441cb1['y'] - _0x2d16f8 + _0x441cb1['h'] / 0x2;
            const _0x9e94a8 = _0x441cb1['w'];
            const _0x923e8e = _0x441cb1['h'];
            _0x4ad738['save']();
            _0x4ad738['translate'](_0x44aab5, _0x380a96);
            _0x4ad738['rotate'](_0x441cb1['angle'] !== undefined ? _0x441cb1['angle'] : 0x0);
            _0xd64f74(_0x4ad738, _0x441cb1['body'] || 'yanito932.png', _0x441cb1['eyes'], _0x9e94a8, _0x923e8e);
            _0x4ad738['restore']();
            _0x4ad738['textAlign'] = 'center';
            _0x4ad738['lineJoin'] = 'round';
            _0x4ad738['lineWidth'] = 0x3;
            _0x4ad738['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x4ad738['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x4ad738['fillStyle'] = '#aaaaaa';
            _0x4ad738['strokeText'](_0x441cb1['name'] || 'NPC', _0x44aab5, _0x380a96 - _0x923e8e / 0x2 - 0x10);
            _0x4ad738['fillText'](_0x441cb1['name'] || 'NPC', _0x44aab5, _0x380a96 - _0x923e8e / 0x2 - 0x10);
        }
        if (_0x2ecd24['isDead']) {
            for (const _0x41f9db in _0x36a8ec) {
                const _0x2d9a34 = _0x36a8ec[_0x41f9db];
                if (!_0x2d9a34['isDead'])
                    continue;
                const _0x169e1d = (_0x2d9a34['renderX'] ?? _0x2d9a34['x']) - _0x286f58 + _0x2d9a34['width'] / 0x2;
                const _0x3fea0c = (_0x2d9a34['renderY'] ?? _0x2d9a34['y']) - _0x2d16f8 + _0x2d9a34['height'] / 0x2;
                const _0x1a12fc = _0x2d9a34['width'] * (_0x2d9a34['scale'] || 0x1) * 1.3;
                const _0x2ffc4c = _0x2d9a34['height'] * (_0x2d9a34['scale'] || 0x1) * 1.3;
                _0x4ad738['save']();
                try {
                    _0x4ad738['translate'](_0x169e1d, _0x3fea0c);
                    _0x4ad738['rotate'](_0x2d9a34['renderAngle'] ?? 0x0);
                    _0x4ad738['globalAlpha'] = 0.3;
                    _0xd64f74(_0x4ad738, _0x2d9a34['body'], _0x2d9a34['eyes'], _0x1a12fc, _0x2ffc4c);
                } finally {
                    _0x4ad738['restore']();
                }
                if (!_0x4587d8((_0x2d9a34['renderX'] ?? _0x2d9a34['x']) + _0x2d9a34['width'] / 0x2, (_0x2d9a34['renderY'] ?? _0x2d9a34['y']) + _0x2d9a34['height'] / 0x2)) {
                    _0x4ad738['save']();
                    _0x4ad738['globalAlpha'] = 0.3;
                    _0x4ad738['textAlign'] = 'center';
                    _0x4ad738['lineJoin'] = 'round';
                    _0x4ad738['lineWidth'] = 0x3;
                    _0x4ad738['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x4ad738['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x4ad738['fillStyle'] = '#ffffff';
                    const _0x2c9d98 = _0x2d9a34['name'] + (_0x2d9a34['isOwner'] ? '\x20[🗝️]' : '');
                    _0x4ad738['strokeText'](_0x2c9d98, _0x169e1d, _0x3fea0c - _0x2ffc4c / 0x2 - 0x10);
                    _0x4ad738['fillText'](_0x2c9d98, _0x169e1d, _0x3fea0c - _0x2ffc4c / 0x2 - 0x10);
                    _0x4ad738['restore']();
                }
            }
            _0x4ad738['save']();
            try {
                _0x4ad738['translate'](_0x5624aa, _0x1baa38);
                _0x4ad738['rotate'](_0x2ecd24['angle']);
                _0x4ad738['globalAlpha'] = 0.3;
                _0xd64f74(_0x4ad738, _0x8cd3f, _0x58b6b0, _0x1db0d0, _0x1e913f);
            } finally {
                _0x4ad738['restore']();
            }
            if (!_0x4587d8(_0x2ecd24['x'] + _0x2ecd24['width'] / 0x2, _0x2ecd24['y'] + _0x2ecd24['height'] / 0x2)) {
                _0x4ad738['save']();
                _0x4ad738['globalAlpha'] = 0.3;
                _0x4ad738['textAlign'] = 'center';
                _0x4ad738['lineJoin'] = 'round';
                _0x4ad738['lineWidth'] = 0x3;
                _0x4ad738['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x4ad738['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x4ad738['fillStyle'] = '#ffffff';
                const _0x31adad = _0x4ad7bb + (_0x3b1f31 ? '\x20[🗝️]' : '');
                _0x4ad738['strokeText'](_0x31adad, _0x5624aa, _0x1baa38 - _0x1e913f / 0x2 - 0x10);
                _0x4ad738['fillText'](_0x31adad, _0x5624aa, _0x1baa38 - _0x1e913f / 0x2 - 0x10);
                _0x4ad738['restore']();
            }
        }
        for (let _0x1d5009 = _0x3b9f63; _0x1d5009 <= _0x365510; _0x1d5009++)
            for (let _0x4793a0 = _0x598205; _0x4793a0 <= _0x35289f; _0x4793a0++) {
                const _0x5cd351 = _0x4793a0 * _0x2b9810['MAP']['chunkSize'] - _0x286f58;
                const _0x4e9d0b = _0x1d5009 * _0x2b9810['MAP']['chunkSize'] - _0x2d16f8;
                _0x4ad738['drawImage'](_0x2b9810['MAP']['fgChunks'][_0x1d5009][_0x4793a0], _0x5cd351, _0x4e9d0b, _0x2b9810['MAP']['chunkSize'] + 0x1, _0x2b9810['MAP']['chunkSize'] + 0x1);
            }
        if (_0x2b9810['EDITOR']['enabled'] && _0x2b9810['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x2d53f0 = _0x2b9810['INPUTS']['mouseX'] / _0x2b9810['SYSTEM']['viewScale'] + _0x2b9810['CAMERA']['x'];
            const _0x54c68b = _0x2b9810['INPUTS']['mouseY'] / _0x2b9810['SYSTEM']['viewScale'] + _0x2b9810['CAMERA']['y'];
            const _0x4fd4e1 = Math['floor'](_0x2d53f0 / _0x2b9810['MAP']['tileSize']);
            const _0x5e12bd = Math['floor'](_0x54c68b / _0x2b9810['MAP']['tileSize']);
            if (_0x4fd4e1 >= 0x0 && _0x4fd4e1 < _0x2b9810['MAP']['columns'] && _0x5e12bd >= 0x0 && _0x5e12bd < _0x2b9810['MAP']['rows']) {
                const _0xc6ff56 = _0x4fd4e1 * _0x2b9810['MAP']['tileSize'] - _0x286f58;
                const _0x170342 = _0x5e12bd * _0x2b9810['MAP']['tileSize'] - _0x2d16f8;
                _0x4ad738['save']();
                _0x4ad738['globalAlpha'] = 0.5;
                if (_0x2b9810['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0xc8bc66 = _0x2b9810['EDITOR']['selectedTileGid'] - 0x1;
                    _0x4ad738['drawImage'](_0x31b665, _0xc8bc66 % _0x2b9810['MAP']['tilesetCols'] * _0x2b9810['MAP']['tileSize'], Math['floor'](_0xc8bc66 / _0x2b9810['MAP']['tilesetCols']) * _0x2b9810['MAP']['tileSize'], _0x2b9810['MAP']['tileSize'], _0x2b9810['MAP']['tileSize'], _0xc6ff56, _0x170342, _0x2b9810['MAP']['tileSize'], _0x2b9810['MAP']['tileSize']);
                } else {
                    _0x4ad738['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x4ad738['fillRect'](_0xc6ff56, _0x170342, _0x2b9810['MAP']['tileSize'], _0x2b9810['MAP']['tileSize']);
                }
                _0x4ad738['restore']();
            }
        }
        _0x525847(_0x4ad738, _0x286f58, _0x2d16f8);
        if (_0xf4ecba > 0x0) {
            _0x4ad738['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0xf4ecba + ')';
            _0x4ad738['fillRect'](0x0, 0x0, _0x2b9810['CAMERA']['width'], _0x2b9810['CAMERA']['height']);
        }
        for (const _0x4df893 in _0x36a8ec) {
            const _0x4f4e9f = _0x36a8ec[_0x4df893];
            if (_0x4f4e9f['isDead'] && !_0x2ecd24['isDead'])
                continue;
            const _0x36916c = (_0x4f4e9f['renderX'] ?? _0x4f4e9f['x']) - _0x286f58 + _0x4f4e9f['width'] / 0x2;
            const _0x5cb5d5 = (_0x4f4e9f['renderY'] ?? _0x4f4e9f['y']) - _0x2d16f8 + _0x4f4e9f['height'] / 0x2;
            _0x1b24b7(_0x4ad738, _0x4f4e9f['chats'], _0x36916c, _0x5cb5d5 - _0x4f4e9f['height'] / 0x2 - 0x20);
        }
        _0x1b24b7(_0x4ad738, _0x2ecd24['chats'], _0x5624aa, _0x1baa38 - _0x2ecd24['height'] / 0x2 - 0x20);
    } finally {
        _0x4ad738['restore']();
    }
}
function _0x1b607d(_0x51baa0) {
    if (!_0x2b9810['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x1b607d);
    let _0x527463 = (_0x51baa0 - _0x2b9810['SYSTEM']['lastTime']) / 0x3e8;
    _0x2b9810['SYSTEM']['lastTime'] = _0x51baa0;
    if (_0x527463 > 0.1)
        _0x527463 = 0.1;
    if (_0x527463 < 0x0 || isNaN(_0x527463))
        _0x527463 = 0.016;
    if (_0x23c580) {
        _0x223286(_0x527463);
        _0x68a7a5();
        return;
    }
    if (!_0x2f4c38)
        return;
    _0x52b04e(_0x527463);
    _0x479c78['tick'](_0x51baa0);
    _0x68a7a5();
}
function _0x2dfdd5() {
    const _0x256a13 = Math['ceil'](_0x2b9810['MAP']['columns'] * _0x2b9810['MAP']['tileSize'] / _0x2b9810['MAP']['chunkSize']);
    const _0x143bba = Math['ceil'](_0x2b9810['MAP']['rows'] * _0x2b9810['MAP']['tileSize'] / _0x2b9810['MAP']['chunkSize']);
    _0x2b9810['MAP']['bgChunks'] = [];
    _0x2b9810['MAP']['fgChunks'] = [];
    _0x2b9810['MAP']['wallChunks'] = [];
    for (let _0x4760ef = 0x0; _0x4760ef < _0x143bba; _0x4760ef++) {
        _0x2b9810['MAP']['bgChunks'][_0x4760ef] = [];
        _0x2b9810['MAP']['fgChunks'][_0x4760ef] = [];
        _0x2b9810['MAP']['wallChunks'][_0x4760ef] = [];
        for (let _0x215eeb = 0x0; _0x215eeb < _0x256a13; _0x215eeb++) {
            const _0x13ddb9 = document['createElement']('canvas');
            _0x13ddb9['width'] = _0x13ddb9['height'] = _0x2b9810['MAP']['chunkSize'];
            const _0x52e983 = document['createElement']('canvas');
            _0x52e983['width'] = _0x52e983['height'] = _0x2b9810['MAP']['chunkSize'];
            const _0x5d3af8 = document['createElement']('canvas');
            _0x5d3af8['width'] = _0x5d3af8['height'] = _0x2b9810['MAP']['chunkSize'];
            _0x2b9810['MAP']['bgChunks'][_0x4760ef][_0x215eeb] = _0x13ddb9;
            _0x2b9810['MAP']['fgChunks'][_0x4760ef][_0x215eeb] = _0x52e983;
            _0x2b9810['MAP']['wallChunks'][_0x4760ef][_0x215eeb] = _0x5d3af8;
            _0x297270(_0x215eeb, _0x4760ef);
        }
    }
}
function _0x297270(_0x59b5c0, _0x3619d7) {
    const _0x2b7498 = _0x2b9810['MAP']['bgChunks'][_0x3619d7][_0x59b5c0]['getContext']('2d', { 'alpha': !![] });
    const _0x10028e = _0x2b9810['MAP']['fgChunks'][_0x3619d7][_0x59b5c0]['getContext']('2d', { 'alpha': !![] });
    const _0x18a44f = _0x2b9810['MAP']['wallChunks'][_0x3619d7] && _0x2b9810['MAP']['wallChunks'][_0x3619d7][_0x59b5c0] ? _0x2b9810['MAP']['wallChunks'][_0x3619d7][_0x59b5c0]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x2b7498['imageSmoothingEnabled'] = _0x10028e['imageSmoothingEnabled'] = ![];
    if (_0x18a44f)
        _0x18a44f['imageSmoothingEnabled'] = ![];
    _0x2b7498['clearRect'](0x0, 0x0, _0x2b9810['MAP']['chunkSize'], _0x2b9810['MAP']['chunkSize']);
    _0x10028e['clearRect'](0x0, 0x0, _0x2b9810['MAP']['chunkSize'], _0x2b9810['MAP']['chunkSize']);
    if (_0x18a44f)
        _0x18a44f['clearRect'](0x0, 0x0, _0x2b9810['MAP']['chunkSize'], _0x2b9810['MAP']['chunkSize']);
    const _0x352623 = Math['floor'](_0x59b5c0 * _0x2b9810['MAP']['chunkSize'] / _0x2b9810['MAP']['tileSize']);
    const _0x4e743a = Math['ceil']((_0x59b5c0 + 0x1) * _0x2b9810['MAP']['chunkSize'] / _0x2b9810['MAP']['tileSize']);
    const _0x11bc03 = Math['floor'](_0x3619d7 * _0x2b9810['MAP']['chunkSize'] / _0x2b9810['MAP']['tileSize']);
    const _0x311fe4 = Math['ceil']((_0x3619d7 + 0x1) * _0x2b9810['MAP']['chunkSize'] / _0x2b9810['MAP']['tileSize']);
    const _0x4e6fdb = 0.5;
    const _0xebe958 = _0x2b9810['MAP']['tileSize'] - _0x4e6fdb * 0x2;
    _0x2b9810['MAP']['layers']['forEach'](_0x5019c4 => {
        const _0x475565 = _0x5019c4['name'] === 'walls';
        const _0x1276a9 = _0x5019c4['name'] === 'trees' ? _0x10028e : _0x475565 ? _0x18a44f || _0x2b7498 : _0x2b7498;
        for (let _0x4adc0e = Math['max'](0x0, _0x11bc03); _0x4adc0e < Math['min'](_0x2b9810['MAP']['rows'], _0x311fe4); _0x4adc0e++) {
            for (let _0x87e02e = Math['max'](0x0, _0x352623); _0x87e02e < Math['min'](_0x2b9810['MAP']['columns'], _0x4e743a); _0x87e02e++) {
                let _0x371771 = _0x5019c4['data'][_0x4adc0e * _0x2b9810['MAP']['columns'] + _0x87e02e];
                if (_0x5019c4['name'] === 'floor2' && _0x2b9810['MAP']['doors'] && _0x2b9810['MAP']['doors'][_0x4adc0e * _0x2b9810['MAP']['columns'] + _0x87e02e]) {
                    _0x371771 = 0x2;
                }
                if (_0x371771 > 0x0) {
                    const _0x5a3542 = _0x371771 - 0x1;
                    const _0x1ddaad = _0x5a3542 % _0x2b9810['MAP']['tilesetCols'] * _0x2b9810['MAP']['tileSize'] + _0x4e6fdb;
                    const _0x37ab6f = Math['floor'](_0x5a3542 / _0x2b9810['MAP']['tilesetCols']) * _0x2b9810['MAP']['tileSize'] + _0x4e6fdb;
                    const _0x2dbbd8 = _0x87e02e * _0x2b9810['MAP']['tileSize'] - _0x59b5c0 * _0x2b9810['MAP']['chunkSize'];
                    const _0xaa825b = _0x4adc0e * _0x2b9810['MAP']['tileSize'] - _0x3619d7 * _0x2b9810['MAP']['chunkSize'];
                    if (_0x371771 === 0x4) {
                        const _0x553bb3 = 0x1;
                        const _0x315be7 = _0x553bb3 % _0x2b9810['MAP']['tilesetCols'] * _0x2b9810['MAP']['tileSize'] + _0x4e6fdb;
                        const _0x2ff74d = Math['floor'](_0x553bb3 / _0x2b9810['MAP']['tilesetCols']) * _0x2b9810['MAP']['tileSize'] + _0x4e6fdb;
                        _0x2b7498['drawImage'](_0x31b665, _0x315be7, _0x2ff74d, _0xebe958, _0xebe958, _0x2dbbd8, _0xaa825b, _0x2b9810['MAP']['tileSize'], _0x2b9810['MAP']['tileSize']);
                        let _0x5f3f62 = _0x2b9810['MAP']['doors'] ? _0x2b9810['MAP']['doors'][_0x4adc0e * _0x2b9810['MAP']['columns'] + _0x87e02e] : null;
                        if (!_0x5f3f62) {
                            const _0x2ab26d = _0x2b9810['MAP']['layers']['find'](_0x16bba6 => _0x16bba6['name'] === 'walls');
                            const _0x31dc16 = _0x4adc0e > 0x0 && _0x2ab26d && _0x2ab26d['data'][(_0x4adc0e - 0x1) * _0x2b9810['MAP']['columns'] + _0x87e02e] > 0x0;
                            const _0x75144f = _0x4adc0e < _0x2b9810['MAP']['rows'] - 0x1 && _0x2ab26d && _0x2ab26d['data'][(_0x4adc0e + 0x1) * _0x2b9810['MAP']['columns'] + _0x87e02e] > 0x0;
                            const _0x1e2759 = _0x87e02e > 0x0 && _0x2ab26d && _0x2ab26d['data'][_0x4adc0e * _0x2b9810['MAP']['columns'] + _0x87e02e - 0x1] > 0x0;
                            const _0x240430 = _0x87e02e < _0x2b9810['MAP']['columns'] - 0x1 && _0x2ab26d && _0x2ab26d['data'][_0x4adc0e * _0x2b9810['MAP']['columns'] + _0x87e02e + 0x1] > 0x0;
                            if (_0x1e2759 && _0x240430)
                                _0x5f3f62 = _0x4adc0e < _0x2b9810['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x31dc16 && _0x75144f)
                                _0x5f3f62 = _0x87e02e < _0x2b9810['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0xf02d87 = 0x0;
                        if (_0x5f3f62 === 'bottom')
                            _0xf02d87 = Math['PI'] / 0x2;
                        else if (_0x5f3f62 === 'left')
                            _0xf02d87 = Math['PI'];
                        else if (_0x5f3f62 === 'top')
                            _0xf02d87 = -Math['PI'] / 0x2;
                        else if (_0x5f3f62 === 'right')
                            _0xf02d87 = 0x0;
                        if (_0xf02d87 !== 0x0) {
                            _0x1276a9['save']();
                            _0x1276a9['translate'](_0x2dbbd8 + _0x2b9810['MAP']['tileSize'] / 0x2, _0xaa825b + _0x2b9810['MAP']['tileSize'] / 0x2);
                            _0x1276a9['rotate'](_0xf02d87);
                            _0x1276a9['drawImage'](_0x31b665, _0x1ddaad, _0x37ab6f, _0xebe958, _0xebe958, -_0x2b9810['MAP']['tileSize'] / 0x2, -_0x2b9810['MAP']['tileSize'] / 0x2, _0x2b9810['MAP']['tileSize'], _0x2b9810['MAP']['tileSize']);
                            _0x1276a9['restore']();
                        } else {
                            _0x1276a9['drawImage'](_0x31b665, _0x1ddaad, _0x37ab6f, _0xebe958, _0xebe958, _0x2dbbd8, _0xaa825b, _0x2b9810['MAP']['tileSize'], _0x2b9810['MAP']['tileSize']);
                        }
                    } else {
                        _0x1276a9['drawImage'](_0x31b665, _0x1ddaad, _0x37ab6f, _0xebe958, _0xebe958, _0x2dbbd8, _0xaa825b, _0x2b9810['MAP']['tileSize'], _0x2b9810['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x22a08d() {
    _0x31b665['crossOrigin'] = 'Anonymous';
    _0x31b665['onload'] = () => {
        _0x2b9810['MAP']['tilesetCols'] = 0x3;
        _0x4d2b00();
    };
    _0x31b665['onerror'] = () => {
        _0x2b9810['MAP']['tilesetCols'] = 0x1;
        _0x4d2b00();
    };
    _0x31b665['src'] = 'assets/tilesheet.png';
    _0x6696ab['crossOrigin'] = 'Anonymous';
    _0x6696ab['onload'] = _0x4d2b00;
    _0x6696ab['onerror'] = () => {
        _0x4d2b00();
    };
    _0x6696ab['src'] = 'assets/center.png';
    _0x2ce22e['crossOrigin'] = 'Anonymous';
    _0x2ce22e['onload'] = _0x4d2b00;
    _0x2ce22e['onerror'] = () => {
        _0x4d2b00();
    };
    _0x2ce22e['src'] = 'assets/table.png';
}
function _0x4d2b00() {
    _0x2b9810['SYSTEM']['assetsLoaded']++;
    if (_0x2b9810['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x5e7323();
    }
}
function _0x11a428(_0x4584db, _0x1105ec) {
    if (!_0x3b1f31 || !_0x5293d1)
        return;
    const _0x6d419 = _0x4584db / _0x2b9810['SYSTEM']['viewScale'] + _0x2b9810['CAMERA']['x'];
    const _0x3d997e = _0x1105ec / _0x2b9810['SYSTEM']['viewScale'] + _0x2b9810['CAMERA']['y'];
    const _0x276e05 = Math['floor'](_0x6d419 / _0x2b9810['MAP']['tileSize']);
    const _0x45b4fe = Math['floor'](_0x3d997e / _0x2b9810['MAP']['tileSize']);
    if (_0x276e05 >= 0x0 && _0x276e05 < _0x2b9810['MAP']['columns'] && _0x45b4fe >= 0x0 && _0x45b4fe < _0x2b9810['MAP']['rows'])
        _0x5293d1['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x2b9810['EDITOR']['selectedLayer'],
            'col': _0x276e05,
            'row': _0x45b4fe,
            'gid': _0x2b9810['EDITOR']['selectedTileGid']
        }));
}
function _0x2985f8() {
    const _0x346f77 = document['getElementById']('palette');
    if (!_0x346f77 || _0x346f77['children']['length'] > 0x0)
        return;
    const _0x2f23d4 = 0x40;
    const _0x24332f = _0x31b665;
    const _0x235a46 = document['createElement']('div');
    _0x235a46['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0xc9f026 = document['createElement']('canvas');
    _0xc9f026['width'] = 0xc0;
    _0xc9f026['height'] = 0xa0;
    _0xc9f026['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x235a46['appendChild'](_0xc9f026);
    const _0x5787ff = document['createElement']('div');
    _0x5787ff['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x235a46['appendChild'](_0x5787ff);
    let _0x4a3de7 = 0x0, _0x31404b = 0x0;
    let _0x3d012a = ![], _0x1afe75 = 0x0, _0x42ff8f = 0x0, _0x45a8dd = 0x0, _0x1230c1 = 0x0;
    function _0x54e843() {
        const _0x10139b = _0xc9f026['getContext']('2d');
        _0x10139b['clearRect'](0x0, 0x0, _0xc9f026['width'], _0xc9f026['height']);
        _0x10139b['imageSmoothingEnabled'] = ![];
        if (_0x24332f['complete'] && _0x24332f['naturalWidth'] > 0x0) {
            _0x10139b['drawImage'](_0x24332f, _0x4a3de7, _0x31404b, _0xc9f026['width'], _0xc9f026['height'], 0x0, 0x0, _0xc9f026['width'], _0xc9f026['height']);
        }
        _0x10139b['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x10139b['lineWidth'] = 0x1;
        const _0xcfaa09 = Math['floor'](_0x4a3de7 / _0x2f23d4);
        const _0x570d99 = Math['floor'](_0x31404b / _0x2f23d4);
        for (let _0x504a22 = _0xcfaa09; _0x504a22 <= _0xcfaa09 + Math['ceil'](_0xc9f026['width'] / _0x2f23d4) + 0x1; _0x504a22++) {
            const _0x4d0aab = _0x504a22 * _0x2f23d4 - _0x4a3de7;
            _0x10139b['beginPath']();
            _0x10139b['moveTo'](_0x4d0aab, 0x0);
            _0x10139b['lineTo'](_0x4d0aab, _0xc9f026['height']);
            _0x10139b['stroke']();
        }
        for (let _0x3fc12a = _0x570d99; _0x3fc12a <= _0x570d99 + Math['ceil'](_0xc9f026['height'] / _0x2f23d4) + 0x1; _0x3fc12a++) {
            const _0x29078b = _0x3fc12a * _0x2f23d4 - _0x31404b;
            _0x10139b['beginPath']();
            _0x10139b['moveTo'](0x0, _0x29078b);
            _0x10139b['lineTo'](_0xc9f026['width'], _0x29078b);
            _0x10139b['stroke']();
        }
    }
    function _0x46901b() {
        const _0x81aede = Math['max'](0x1, Math['ceil'](_0x24332f['naturalWidth'] / _0x2f23d4));
        const _0xc86fea = _0x2b9810['EDITOR']['selectedTileGid'];
        if (_0xc86fea <= 0x0) {
            _0x5787ff['style']['display'] = 'none';
            return;
        }
        const _0x5212a5 = _0xc86fea - 0x1;
        const _0x2917f1 = _0x5212a5 % _0x81aede;
        const _0x1b805e = Math['floor'](_0x5212a5 / _0x81aede);
        const _0x41505e = _0x2917f1 * _0x2f23d4 - _0x4a3de7;
        const _0x3cd6ed = _0x1b805e * _0x2f23d4 - _0x31404b;
        _0x5787ff['style']['display'] = 'block';
        _0x5787ff['style']['left'] = _0x41505e + 'px';
        _0x5787ff['style']['top'] = _0x3cd6ed + 'px';
    }
    _0x24332f['onload'] = () => {
        _0x54e843();
        _0x46901b();
    };
    if (_0x24332f['complete'] && _0x24332f['naturalWidth'] > 0x0) {
        _0x54e843();
        _0x46901b();
    }
    _0x235a46['addEventListener']('mousedown', _0x292e55 => {
        if (_0x292e55['button'] === 0x0) {
            _0x3d012a = !![];
            _0x1afe75 = _0x292e55['clientX'];
            _0x42ff8f = _0x292e55['clientY'];
            _0x45a8dd = _0x4a3de7;
            _0x1230c1 = _0x31404b;
            _0x235a46['style']['cursor'] = 'grabbing';
            _0x292e55['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x51a7aa => {
        if (!_0x3d012a)
            return;
        const _0x2d4321 = _0x1afe75 - _0x51a7aa['clientX'];
        const _0x1d67c3 = _0x42ff8f - _0x51a7aa['clientY'];
        const _0x6b2a80 = Math['max'](0x0, _0x24332f['naturalWidth'] - _0xc9f026['width']);
        const _0x5bce61 = Math['max'](0x0, _0x24332f['naturalHeight'] - _0xc9f026['height']);
        _0x4a3de7 = Math['max'](0x0, Math['min'](_0x6b2a80, _0x45a8dd + _0x2d4321));
        _0x31404b = Math['max'](0x0, Math['min'](_0x5bce61, _0x1230c1 + _0x1d67c3));
        _0x54e843();
        _0x46901b();
    });
    window['addEventListener']('mouseup', _0x2b05ef => {
        if (_0x3d012a) {
            _0x3d012a = ![];
            _0x235a46['style']['cursor'] = 'grab';
        }
    });
    _0x235a46['addEventListener']('click', _0x55150c => {
        const _0x8f0be2 = _0x235a46['getBoundingClientRect']();
        const _0x5283bd = _0x55150c['clientX'] - _0x8f0be2['left'] + _0x4a3de7;
        const _0x38e930 = _0x55150c['clientY'] - _0x8f0be2['top'] + _0x31404b;
        const _0x30b345 = Math['max'](0x1, Math['ceil'](_0x24332f['naturalWidth'] / _0x2f23d4));
        const _0x14f834 = Math['floor'](_0x5283bd / _0x2f23d4);
        const _0x251d11 = Math['floor'](_0x38e930 / _0x2f23d4);
        const _0x3e2222 = _0x251d11 * _0x30b345 + _0x14f834 + 0x1;
        _0x2b9810['EDITOR']['selectedTileGid'] = _0x3e2222;
        _0x46901b();
    });
    _0x346f77['appendChild'](_0x235a46);
    const _0x1663e4 = document['createElement']('div');
    _0x1663e4['className'] = 'tile-btn\x20eraser-btn';
    _0x1663e4['title'] = 'Eraser\x20(gid\x200)';
    _0x1663e4['onclick'] = () => {
        _0x2b9810['EDITOR']['selectedTileGid'] = 0x0;
        _0x5787ff['style']['display'] = 'none';
    };
    _0x346f77['appendChild'](_0x1663e4);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x2b9810['EDITOR']['enabled'] = !_0x2b9810['EDITOR']['enabled'];
        const _0x3f33e8 = document['getElementById']('editor-tools');
        if (_0x2b9810['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x3f33e8['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x3f33e8['style']['display'] = 'none';
        }
    });
    const _0x34010f = document['getElementById']('start-game-btn');
    if (_0x34010f) {
        _0x34010f['addEventListener']('click', () => {
            if (_0x5293d1)
                _0x5293d1['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x44d34d = document['getElementById']('rolelist-toggle-btn');
    if (_0x44d34d) {
        let _0x40083c = 'subalignments';
        _0x44d34d['addEventListener']('click', () => {
            if (_0x40083c === 'subalignments')
                _0x40083c = 'precise';
            else if (_0x40083c === 'precise')
                _0x40083c = 'off';
            else
                _0x40083c = 'subalignments';
            _0x44d34d['innerText'] = 'Role\x20List:\x20' + _0x40083c['charAt'](0x0)['toUpperCase']() + _0x40083c['slice'](0x1);
            if (_0x5293d1)
                _0x5293d1['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x40083c
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x8619fe => {
        if (_0x8619fe['id'] === 'editor-toggle-btn' || _0x8619fe['id'] === 'start-game-btn' || _0x8619fe['id'] === 'rolelist-toggle-btn')
            return;
        _0x8619fe['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x1f3f14 => _0x1f3f14['classList']['remove']('active'));
            _0x8619fe['classList']['add']('active');
            _0x2b9810['EDITOR']['selectedLayer'] = _0x8619fe['dataset']['layer'];
        });
    });
}
function _0x22efca(_0x33692e) {
    if (_0x5293d1)
        _0x5293d1['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x33692e
        }));
}
function _0x5b415c(_0x26fda8) {
    if (_0x5293d1)
        _0x5293d1['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x26fda8
        }));
}
function _0x3e177c(_0x1ec3e3, _0x15b87b, _0x154f1f, _0x11c565) {
    const _0x5a2155 = document['getElementById']('admin-panel');
    if (_0x5a2155)
        _0x5a2155['remove']();
    if (_0x5a2155 && _0x5a2155['dataset']['target'] === String(_0x1ec3e3))
        return;
    const _0x330374 = document['createElement']('div');
    _0x330374['id'] = 'admin-panel';
    _0x330374['dataset']['target'] = String(_0x1ec3e3);
    _0x330374['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x17e86f = document['createElement']('div');
    _0x17e86f['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x17e86f['textContent'] = _0x15b87b;
    _0x330374['appendChild'](_0x17e86f);
    const _0x7f4051 = document['createElement']('button');
    _0x7f4051['textContent'] = 'Kick';
    _0x7f4051['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x7f4051['onmouseenter'] = () => _0x7f4051['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x7f4051['onmouseleave'] = () => _0x7f4051['style']['background'] = 'transparent';
    _0x7f4051['onclick'] = () => {
        _0x22efca(_0x1ec3e3);
        _0x330374['remove']();
    };
    _0x330374['appendChild'](_0x7f4051);
    const _0x260461 = document['createElement']('button');
    _0x260461['textContent'] = 'Ban';
    _0x260461['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x260461['onmouseenter'] = () => _0x260461['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x260461['onmouseleave'] = () => _0x260461['style']['background'] = 'transparent';
    _0x260461['onclick'] = () => {
        _0x5b415c(_0x1ec3e3);
        _0x330374['remove']();
    };
    _0x330374['appendChild'](_0x260461);
    document['body']['appendChild'](_0x330374);
    const _0x123753 = _0x330374['offsetWidth'] || 0x91;
    const _0x4d5715 = _0x330374['offsetHeight'] || 0x50;
    let _0x46b9fa = _0x154f1f - _0x123753;
    let _0x224bab = _0x11c565;
    if (_0x46b9fa < 0x4)
        _0x46b9fa = _0x154f1f;
    if (_0x224bab + _0x4d5715 > window['innerHeight'] - 0x4)
        _0x224bab = window['innerHeight'] - _0x4d5715 - 0x4;
    _0x330374['style']['left'] = _0x46b9fa + 'px';
    _0x330374['style']['top'] = _0x224bab + 'px';
    const _0x2d52bd = _0xb8af5f => {
        if (!_0x330374['contains'](_0xb8af5f['target'])) {
            _0x330374['remove']();
            document['removeEventListener']('mousedown', _0x2d52bd);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x2d52bd), 0x0);
}
function _0x48c431() {
    const _0x7a1401 = document['getElementById']('leaderboard-list');
    _0x7a1401['innerHTML'] = '';
    const _0x358a13 = document['createElement']('div');
    _0x358a13['className'] = 'leaderboard-entry';
    const _0x4c2993 = document['createElement']('span');
    _0x4c2993['textContent'] = _0x4ad7bb + (_0x3b1f31 ? '\x20[🗝️]' : '');
    if (_0xd9375c['has'](_0x2f4c38) && !_0x2ecd24['isDead']) {
        _0x4c2993['style']['color'] = '#cc88ff';
    }
    _0x358a13['appendChild'](_0x4c2993);
    _0x7a1401['appendChild'](_0x358a13);
    for (const _0x8f0aa in _0x36a8ec) {
        const _0x2ce90a = document['createElement']('div');
        _0x2ce90a['className'] = 'leaderboard-entry';
        const _0x146d45 = document['createElement']('span');
        _0x146d45['textContent'] = _0x36a8ec[_0x8f0aa]['name'] + (_0x36a8ec[_0x8f0aa]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0xd9375c['has'](parseInt(_0x8f0aa)) && !_0x36a8ec[_0x8f0aa]['isDead']) {
            _0x146d45['style']['color'] = '#cc88ff';
        }
        _0x2ce90a['appendChild'](_0x146d45);
        if (_0x3b1f31 && !_0x36a8ec[_0x8f0aa]['isOwner']) {
            const _0x1d09c = _0x36a8ec[_0x8f0aa]['id'];
            const _0x4274be = _0x36a8ec[_0x8f0aa]['name'];
            _0x2ce90a['style']['cursor'] = 'context-menu';
            _0x2ce90a['addEventListener']('contextmenu', _0x1b0c75 => {
                _0x1b0c75['preventDefault']();
                _0x1b0c75['stopPropagation']();
                _0x3e177c(_0x1d09c, _0x4274be, _0x1b0c75['clientX'], _0x1b0c75['clientY']);
            });
        }
        _0x7a1401['appendChild'](_0x2ce90a);
    }
}
window['addEventListener']('resize', _0x5e7323);
function _0x5e7323() {
    _0x49837e['width'] = window['innerWidth'];
    _0x49837e['height'] = window['innerHeight'];
    _0x2b9810['SYSTEM']['viewScale'] = Math['max'](_0x49837e['width'] / _0x264e28, _0x49837e['height'] / _0x4eb9c8);
    _0x2b9810['CAMERA']['width'] = _0x49837e['width'] / _0x2b9810['SYSTEM']['viewScale'];
    _0x2b9810['CAMERA']['height'] = _0x49837e['height'] / _0x2b9810['SYSTEM']['viewScale'];
    _0x4ad738['imageSmoothingEnabled'] = ![];
}
function _0x332b21(_0x2ad9f7) {
    if (_0x2ad9f7['ctrlKey'] || _0x2ad9f7['metaKey']) {
        if (_0x2ad9f7['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x2ad9f7['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x2ad9f7['code'])) {
            _0x2ad9f7['preventDefault']();
            _0x2ad9f7['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x332b21, { 'passive': ![] });
window['addEventListener']('keydown', _0x332b21, { 'passive': ![] });
window['addEventListener']('keydown', _0x2be283 => {
    const _0x3a9572 = _0x2be283['key']['toLowerCase']();
    if (_0x3a9572 === 'tab') {
        _0x2be283['preventDefault']();
        const _0x15d26e = document['getElementById']('will-ui');
        const _0x149595 = document['getElementById']('will-input');
        if (_0x15d26e['style']['display'] === 'flex') {
            _0x15d26e['style']['display'] = 'none';
            if (_0x5293d1)
                _0x5293d1['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x149595['value']
                }));
            _0x149595['blur']();
        } else {
            _0x15d26e['style']['display'] = 'flex';
            _0x149595['focus']();
            for (let _0xc5ed75 in _0x2b9810['INPUTS']['keys'])
                _0x2b9810['INPUTS']['keys'][_0xc5ed75] = ![];
        }
        return;
    }
    if (_0x2be283['key'] === 'Enter') {
        if (_0x23c580) {
            const _0x3fb283 = document['getElementById']('play-btn');
            if (_0x3fb283)
                _0x3fb283['click']();
            return;
        }
        if (!_0x5293d1 || _0x5293d1['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x509eff = document['getElementById']('chat-ui');
        const _0x4e0671 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x4e0671) {
            const _0x5f2df5 = _0x4e0671['value']['trim']();
            if (_0x5f2df5['length'] > 0x0) {
                _0x5293d1['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x5f2df5
                }));
            }
            _0x4e0671['value'] = '';
            _0x509eff['style']['display'] = 'none';
            _0x4e0671['blur']();
        } else {
            _0x509eff['style']['display'] = 'block';
            _0x4e0671['focus']();
            for (let _0x2f4809 in _0x2b9810['INPUTS']['keys'])
                _0x2b9810['INPUTS']['keys'][_0x2f4809] = ![];
        }
        _0x2be283['preventDefault']();
        return;
    }
    if (_0x2be283['key'] === 'Escape') {
        const _0x4b52d2 = document['getElementById']('guide-ui');
        if (_0x4b52d2 && _0x4b52d2['style']['display'] === 'flex') {
            _0x4b52d2['style']['display'] = 'none';
            return;
        }
        const _0xb48149 = document['getElementById']('ability-ui');
        if (_0xb48149 && _0xb48149['style']['display'] === 'block') {
            _0xb48149['style']['display'] = 'none';
            return;
        }
        const _0x659458 = document['getElementById']('settings-panel');
        if (_0x659458 && _0x659458['style']['display'] === 'block') {
            _0x659458['style']['display'] = 'none';
            return;
        }
        const _0x155afb = document['getElementById']('mayor-confirm-dialog');
        if (_0x155afb && _0x155afb['style']['display'] === 'flex') {
            _0x155afb['style']['display'] = 'none';
            return;
        }
        const _0x3d413c = document['getElementById']('target-chooser-ui');
        if (_0x3d413c && _0x3d413c['style']['display'] === 'flex') {
            _0x3d413c['style']['display'] = 'none';
            return;
        }
        const _0x14b4d7 = document['getElementById']('chat-ui');
        const _0x280a21 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x280a21) {
            _0x280a21['value'] = '';
            _0x14b4d7['style']['display'] = 'none';
            _0x280a21['blur']();
            _0x2be283['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x2b9810['INPUTS']['keys']['hasOwnProperty'](_0x3a9572))
            _0x2b9810['INPUTS']['keys'][_0x3a9572] = !![];
        if (!_0x5293d1 || _0x5293d1['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x3a9572 === 'h' && !_0x2be283['repeat']) {
            const _0x2131dd = document['getElementById']('guide-ui');
            if (_0x2131dd) {
                _0x2131dd['style']['display'] = _0x2131dd['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x3a9572 === 't' && !_0x2be283['repeat']) {
            if (_0x2ecd24['isDead'])
                return;
            if (_0xe67095 === 'Mayor') {
                if (_0xd9375c['has'](_0x2f4c38)) {
                    _0x35f052('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x1487ae = document['getElementById']('mayor-confirm-dialog');
                if (_0x1487ae)
                    _0x1487ae['style']['display'] = 'flex';
                return;
            }
            if (_0x2b9810['GAME_STATE'] === 'NIGHT') {
                if (!_0x2b9810['NIGHT_ABILITY_OPEN']) {
                    _0x35f052('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x4c4131 = document['getElementById']('ability-ui');
                if (_0x4c4131) {
                    if (_0x4c4131['style']['display'] === 'block') {
                        _0x4c4131['style']['display'] = 'none';
                    } else {
                        _0x19a905();
                        _0x4c4131['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x2b9810['GAME_STATE'] === 'DAY_DISCUSS' || _0x2b9810['GAME_STATE'] === 'DAY_VOTE') {
                _0x35f052('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x3a9572 === 'e' && !_0x2ecd24['isDead']) {
            const _0x3838fa = Date['now']();
            if (!window['_lastDoorSend'] || _0x3838fa - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x3838fa;
                _0x5293d1['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x24698c => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x37ce30 = _0x24698c['key']['toLowerCase']();
        if (_0x2b9810['INPUTS']['keys']['hasOwnProperty'](_0x37ce30))
            _0x2b9810['INPUTS']['keys'][_0x37ce30] = ![];
    }
});
window['addEventListener']('mousemove', _0x1c7552 => {
    _0x2b9810['INPUTS']['mouseX'] = _0x1c7552['clientX'];
    _0x2b9810['INPUTS']['mouseY'] = _0x1c7552['clientY'];
    if (_0x2b9810['INPUTS']['isMouseDown'] && _0x2b9810['EDITOR']['enabled']) {
        _0x11a428(_0x1c7552['clientX'], _0x1c7552['clientY']);
    }
});
window['addEventListener']('mousedown', _0x580d1 => {
    if (_0x580d1['target']['closest']('#editor-ui') || _0x580d1['target']['closest']('#leaderboard-ui') || _0x580d1['target']['closest']('#chat-log-ui') || _0x580d1['target']['closest']('#target-chooser-ui') || _0x580d1['target']['closest']('#guide-ui') || _0x580d1['target']['closest']('#role-list-ui') || _0x580d1['target']['closest']('#ability-ui') || _0x580d1['target']['closest']('#settings-panel') || _0x580d1['target']['closest']('#mayor-confirm-dialog') || _0x580d1['target']['closest']('#mobile-action-bar') || _0x580d1['target']['closest']('#mobile-top-bar') || _0x580d1['target']['closest']('#mobile-joystick-zone') || _0x580d1['target']['closest']('#mobile-chat-overlay') || _0x580d1['target']['closest']('#will-ui') || _0x580d1['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x580d1['button'] === 0x0) {
        _0x2b9810['INPUTS']['isMouseDown'] = !![];
        if (_0x2b9810['EDITOR']['enabled'])
            _0x11a428(_0x580d1['clientX'], _0x580d1['clientY']);
    }
});
window['addEventListener']('mouseup', _0x1952b2 => {
    _0x2b9810['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x1558fb => {
    if (_0x1558fb['target']['closest']('#settings-btn'))
        return;
    const _0x3f997f = document['getElementById']('leaderboard-list');
    const _0x35a2ff = document['getElementById']('leaderboard-toggle');
    if (_0x3f997f['style']['display'] === 'none') {
        _0x3f997f['style']['display'] = 'flex';
        _0x35a2ff['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x3f997f['style']['display'] = 'none';
        _0x35a2ff['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x33ab2f = document['getElementById']('close-target-btn');
if (_0x33ab2f) {
    _0x33ab2f['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x202d7b = document['getElementById']('close-guide-btn');
if (_0x202d7b) {
    _0x202d7b['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0xfabd78 = document['getElementById']('role-list-header');
if (_0xfabd78) {
    _0xfabd78['addEventListener']('click', () => {
        const _0x57924b = document['getElementById']('role-list-items');
        const _0x37b872 = document['getElementById']('role-list-toggle');
        if (_0x57924b['style']['display'] === 'none') {
            _0x57924b['style']['display'] = 'flex';
            _0x37b872['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x57924b['style']['display'] = 'none';
            _0x37b872['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0xfbf777() {
    const _0x2d1dfd = document['getElementById']('mobile-joystick-zone');
    const _0x271673 = document['getElementById']('mobile-joystick-base');
    const _0x3f06bd = document['getElementById']('mobile-joystick-knob');
    if (_0x2d1dfd && _0x271673 && _0x3f06bd) {
        const _0x5d1966 = 0x3e;
        const _0xcc0d38 = (_0x1882d4, _0x4a7702) => {
            const _0x542e45 = _0x271673['getBoundingClientRect']();
            const _0x5a29d5 = _0x542e45['left'] + _0x542e45['width'] / 0x2;
            const _0x34bb35 = _0x542e45['top'] + _0x542e45['height'] / 0x2;
            const _0x2bb3ce = _0x1882d4 - _0x5a29d5;
            const _0x1bd42b = _0x4a7702 - _0x34bb35;
            const _0x15b651 = Math['hypot'](_0x2bb3ce, _0x1bd42b);
            if (_0x15b651 === 0x0) {
                _0x4d4832 = 0x0;
                _0x11c673 = 0x0;
                _0x4a5fc8 = ![];
                _0x3f06bd['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x2fd3e8 = Math['min'](_0x15b651, _0x5d1966);
            const _0x506920 = _0x2bb3ce / _0x15b651 * _0x2fd3e8;
            const _0x402650 = _0x1bd42b / _0x15b651 * _0x2fd3e8;
            _0x4d4832 = _0x506920 / _0x5d1966;
            _0x11c673 = _0x402650 / _0x5d1966;
            _0x4a5fc8 = _0x15b651 >= _0x5d1966 * 0.75;
            _0x3f06bd['style']['transform'] = 'translate(' + _0x506920 + 'px,\x20' + _0x402650 + 'px)';
        };
        const _0x319b8b = _0x597c35 => {
            for (let _0x5ef345 = 0x0; _0x5ef345 < _0x597c35['changedTouches']['length']; _0x5ef345++) {
                const _0x5f4ab5 = _0x597c35['changedTouches'][_0x5ef345];
                if (_0x49c75d === null) {
                    _0x49c75d = _0x5f4ab5['identifier'];
                    _0x1bdfdc = !![];
                    _0xcc0d38(_0x5f4ab5['clientX'], _0x5f4ab5['clientY']);
                    break;
                }
            }
        };
        const _0x1a6893 = _0x4a5c27 => {
            for (let _0xfa0a1d = 0x0; _0xfa0a1d < _0x4a5c27['changedTouches']['length']; _0xfa0a1d++) {
                const _0x4a4891 = _0x4a5c27['changedTouches'][_0xfa0a1d];
                if (_0x4a4891['identifier'] === _0x49c75d) {
                    _0xcc0d38(_0x4a4891['clientX'], _0x4a4891['clientY']);
                    break;
                }
            }
        };
        const _0x44426c = _0xaae4ad => {
            for (let _0x34627e = 0x0; _0x34627e < _0xaae4ad['changedTouches']['length']; _0x34627e++) {
                const _0x2c906d = _0xaae4ad['changedTouches'][_0x34627e];
                if (_0x2c906d['identifier'] === _0x49c75d) {
                    _0x49c75d = null;
                    _0x1bdfdc = ![];
                    _0x4d4832 = 0x0;
                    _0x11c673 = 0x0;
                    _0x4a5fc8 = ![];
                    _0x3f06bd['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x2d1dfd['addEventListener']('touchstart', _0x3cdeb5 => {
            _0x3cdeb5['preventDefault']();
            _0x319b8b(_0x3cdeb5);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x1a6893, { 'passive': !![] });
        window['addEventListener']('touchend', _0x44426c, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x44426c, { 'passive': !![] });
    }
    const _0x261da5 = (_0x42fad3, _0x28fbc6) => {
        const _0x4bb2e3 = _0x42fad3 / _0x2b9810['SYSTEM']['viewScale'];
        const _0x79882a = _0x28fbc6 / _0x2b9810['SYSTEM']['viewScale'];
        const _0x547a27 = _0x2ecd24['x'] - _0x2b9810['CAMERA']['x'] + _0x2ecd24['width'] / 0x2;
        const _0x2ff488 = _0x2ecd24['y'] - _0x2b9810['CAMERA']['y'] + _0x2ecd24['height'] / 0x2;
        _0x51cf45 = Math['atan2'](_0x79882a - _0x2ff488, _0x4bb2e3 - _0x547a27);
        _0x4a6d81 = !![];
        _0x2b9810['INPUTS']['mouseX'] = _0x42fad3;
        _0x2b9810['INPUTS']['mouseY'] = _0x28fbc6;
    };
    _0x49837e['addEventListener']('touchstart', _0x2e0980 => {
        if (_0x23c580)
            return;
        for (let _0x3f4b0d = 0x0; _0x3f4b0d < _0x2e0980['changedTouches']['length']; _0x3f4b0d++) {
            const _0x3c950a = _0x2e0980['changedTouches'][_0x3f4b0d];
            if (_0x3c950a['identifier'] !== _0x49c75d && _0x5855cb === null) {
                _0x5855cb = _0x3c950a['identifier'];
                _0x261da5(_0x3c950a['clientX'], _0x3c950a['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x49837e['addEventListener']('touchmove', _0x230c04 => {
        if (_0x23c580)
            return;
        for (let _0x4df1c2 = 0x0; _0x4df1c2 < _0x230c04['changedTouches']['length']; _0x4df1c2++) {
            const _0x178a24 = _0x230c04['changedTouches'][_0x4df1c2];
            if (_0x178a24['identifier'] === _0x5855cb) {
                _0x261da5(_0x178a24['clientX'], _0x178a24['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x3cc23a = _0x5219b8 => {
        for (let _0x2ba16c = 0x0; _0x2ba16c < _0x5219b8['changedTouches']['length']; _0x2ba16c++) {
            const _0x225e2e = _0x5219b8['changedTouches'][_0x2ba16c];
            if (_0x225e2e['identifier'] === _0x5855cb) {
                _0x5855cb = null;
                _0x4a6d81 = ![];
                break;
            }
        }
    };
    _0x49837e['addEventListener']('touchend', _0x3cc23a, { 'passive': !![] });
    _0x49837e['addEventListener']('touchcancel', _0x3cc23a, { 'passive': !![] });
    const _0x2ab296 = document['getElementById']('mob-sprint-btn');
    if (_0x2ab296) {
        _0x2ab296['addEventListener']('click', _0x5b18ee => {
            _0x5b18ee['stopPropagation']();
            _0x333d19 = !_0x333d19;
            _0x2ab296['classList']['toggle']('active', _0x333d19);
        });
    }
    const _0x31c157 = document['getElementById']('mob-interact-btn');
    if (_0x31c157) {
        _0x31c157['addEventListener']('click', _0x21fa73 => {
            _0x21fa73['stopPropagation']();
            if (!_0x2ecd24['isDead']) {
                const _0xc0bb72 = Date['now']();
                if (!window['_lastDoorSend'] || _0xc0bb72 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0xc0bb72;
                    if (_0x5293d1 && _0x5293d1['readyState'] === WebSocket['OPEN'])
                        _0x5293d1['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x583773 = document['getElementById']('mob-ability-btn');
    if (_0x583773) {
        _0x583773['addEventListener']('click', _0x5b8910 => {
            _0x5b8910['stopPropagation']();
            if (_0x2ecd24['isDead'])
                return;
            if (_0xe67095 === 'Mayor') {
                if (_0xd9375c['has'](_0x2f4c38)) {
                    _0x35f052('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0xcb0342 = document['getElementById']('mayor-confirm-dialog');
                if (_0xcb0342)
                    _0xcb0342['style']['display'] = 'flex';
                return;
            }
            if (_0x2b9810['GAME_STATE'] === 'NIGHT') {
                if (!_0x2b9810['NIGHT_ABILITY_OPEN']) {
                    _0x35f052('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x5d0e1a = document['getElementById']('ability-ui');
                if (_0x5d0e1a) {
                    if (_0x5d0e1a['style']['display'] === 'block') {
                        _0x5d0e1a['style']['display'] = 'none';
                    } else {
                        _0x19a905();
                        _0x5d0e1a['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x2b9810['GAME_STATE'] === 'DAY_DISCUSS' || _0x2b9810['GAME_STATE'] === 'DAY_VOTE') {
                _0x35f052('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x273bfb = document['getElementById']('mob-will-btn');
    const _0xd85f55 = document['getElementById']('will-ui');
    const _0x3216d9 = document['getElementById']('will-input');
    const _0x37f1bd = document['getElementById']('close-will-btn');
    const _0x365ea1 = () => {
        if (!_0xd85f55)
            return;
        if (_0xd85f55['style']['display'] === 'flex') {
            _0xd85f55['style']['display'] = 'none';
            if (_0x5293d1 && _0x5293d1['readyState'] === WebSocket['OPEN'] && _0x3216d9) {
                _0x5293d1['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x3216d9['value']
                }));
            }
            if (_0x3216d9)
                _0x3216d9['blur']();
        } else {
            _0xd85f55['style']['display'] = 'flex';
            if (_0x3216d9)
                _0x3216d9['focus']();
        }
    };
    if (_0x273bfb)
        _0x273bfb['addEventListener']('click', _0x36e127 => {
            _0x36e127['stopPropagation']();
            _0x365ea1();
        });
    if (_0x37f1bd)
        _0x37f1bd['addEventListener']('click', _0x2f0c89 => {
            _0x2f0c89['stopPropagation']();
            _0x365ea1();
        });
    const _0x5020bb = document['getElementById']('mob-chat-btn');
    const _0x55a695 = document['getElementById']('mobile-chat-overlay');
    const _0x2f68f6 = document['getElementById']('mobile-chat-input');
    const _0x4379b2 = document['getElementById']('mobile-chat-send');
    const _0x4f8d5d = document['getElementById']('mobile-chat-cancel');
    const _0x375913 = () => {
        if (!_0x55a695 || !_0x2f68f6)
            return;
        _0x55a695['style']['display'] = 'flex';
        _0x2f68f6['value'] = '';
        _0x2f68f6['focus']();
    };
    const _0x977bc1 = () => {
        if (!_0x55a695 || !_0x2f68f6)
            return;
        _0x55a695['style']['display'] = 'none';
        _0x2f68f6['blur']();
    };
    const _0x517d6d = () => {
        if (!_0x2f68f6)
            return;
        const _0x2bcf14 = _0x2f68f6['value']['trim']();
        if (_0x2bcf14['length'] > 0x0 && _0x5293d1 && _0x5293d1['readyState'] === WebSocket['OPEN']) {
            _0x5293d1['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x2bcf14
            }));
        }
        _0x2f68f6['value'] = '';
        _0x977bc1();
    };
    if (_0x5020bb)
        _0x5020bb['addEventListener']('click', _0x112acc => {
            _0x112acc['stopPropagation']();
            _0x375913();
        });
    if (_0x4379b2)
        _0x4379b2['addEventListener']('click', _0x4d9855 => {
            _0x4d9855['stopPropagation']();
            _0x517d6d();
        });
    if (_0x4f8d5d)
        _0x4f8d5d['addEventListener']('click', _0x88a92f => {
            _0x88a92f['stopPropagation']();
            _0x977bc1();
        });
    if (_0x2f68f6) {
        _0x2f68f6['addEventListener']('keydown', _0x4dcf03 => {
            if (_0x4dcf03['key'] === 'Enter') {
                _0x4dcf03['preventDefault']();
                _0x517d6d();
            } else if (_0x4dcf03['key'] === 'Escape') {
                _0x977bc1();
            }
        });
    }
    const _0x2e9593 = document['getElementById']('mob-top-chat');
    if (_0x2e9593)
        _0x2e9593['addEventListener']('click', _0x2812f7 => {
            _0x2812f7['stopPropagation']();
            _0x375913();
        });
    const _0x45db86 = document['getElementById']('mob-top-will');
    if (_0x45db86)
        _0x45db86['addEventListener']('click', _0xf3390b => {
            _0xf3390b['stopPropagation']();
            _0x365ea1();
        });
    const _0x4caa6e = document['getElementById']('mob-top-roles');
    if (_0x4caa6e) {
        _0x4caa6e['addEventListener']('click', _0x40f5f5 => {
            _0x40f5f5['stopPropagation']();
            const _0x4fddbf = document['getElementById']('role-list-ui');
            const _0x3a73ee = document['getElementById']('leaderboard-ui');
            if (_0x3a73ee)
                _0x3a73ee['style']['display'] = 'none';
            if (_0x4fddbf)
                _0x4fddbf['style']['display'] = _0x4fddbf['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x234c8b = document['getElementById']('mob-top-players');
    if (_0x234c8b) {
        _0x234c8b['addEventListener']('click', _0x5a872b => {
            _0x5a872b['stopPropagation']();
            const _0x13118b = document['getElementById']('leaderboard-ui');
            const _0x315612 = document['getElementById']('role-list-ui');
            if (_0x315612)
                _0x315612['style']['display'] = 'none';
            if (_0x13118b)
                _0x13118b['style']['display'] = _0x13118b['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x37f952 = document['getElementById']('mob-top-help');
    if (_0x37f952) {
        _0x37f952['addEventListener']('click', _0x3ed645 => {
            _0x3ed645['stopPropagation']();
            const _0x19e1c5 = document['getElementById']('guide-ui');
            if (_0x19e1c5)
                _0x19e1c5['style']['display'] = _0x19e1c5['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x19ba4a) {
            _0x19ba4a = !![];
            _0x537b31();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
