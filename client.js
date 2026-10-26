document['addEventListener']('contextmenu', _0x22f106 => _0x22f106['preventDefault']());
const _0x37ecc3 = {
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
let _0x126fdd = '';
function _0x345e8e(_0x161b53, _0xb7c0dd) {
    const _0x2e856f = document['getElementById']('role-list-ui');
    const _0x36799b = document['getElementById']('role-list-items');
    if (!_0x2e856f || !_0x36799b)
        return;
    if (!_0xb7c0dd || _0xb7c0dd === 'off' || !_0x161b53 || _0x161b53['length'] === 0x0) {
        _0x2e856f['style']['display'] = 'none';
        return;
    }
    const _0x20309b = _0xb7c0dd + '|' + JSON['stringify'](_0x161b53);
    if (_0x20309b === _0x126fdd)
        return;
    _0x126fdd = _0x20309b;
    const _0x47f23b = document['getElementById']('role-tooltip');
    if (_0x47f23b) {
        _0x47f23b['style']['visibility'] = 'hidden';
        _0x47f23b['style']['opacity'] = '0';
    }
    _0x2e856f['style']['display'] = 'flex';
    _0x36799b['innerHTML'] = '';
    _0x161b53['forEach'](_0x1cc1eb => {
        const _0x2094cb = document['createElement']('div');
        _0x2094cb['className'] = 'role-list-entry';
        const _0x50acb3 = _0x1cc1eb['name']['includes']('Mafia') || _0x1cc1eb['name'] === 'Skinwalker';
        _0x2094cb['classList']['add'](_0x50acb3 ? 'mafia' : 'town');
        if (_0xb7c0dd === 'precise' && _0x1cc1eb['isDead']) {
            _0x2094cb['classList']['remove']('town', 'mafia');
            _0x2094cb['classList']['add']('dead');
            _0x2094cb['innerHTML'] = '<span>' + _0x1cc1eb['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x3e1ea1 = _0x1cc1eb['count'] !== undefined && _0x1cc1eb['count'] !== null ? _0x1cc1eb['count'] + 'x\x20' : '';
            _0x2094cb['innerHTML'] = '<span>' + _0x3e1ea1 + _0x1cc1eb['name'] + '</span>';
        }
        if (_0xb7c0dd === 'subalignments' && _0x37ecc3[_0x1cc1eb['name']]) {
            _0x2094cb['style']['cursor'] = 'pointer';
            _0x2094cb['addEventListener']('mouseenter', () => {
                const _0x17caa6 = document['getElementById']('role-tooltip');
                if (!_0x17caa6)
                    return;
                const _0xa55d6e = _0x37ecc3[_0x1cc1eb['name']]['join'](',\x20');
                _0x17caa6['innerHTML'] = '';
                const _0x4dd7ce = document['createElement']('span');
                _0x4dd7ce['style']['color'] = '#ffcc00';
                _0x4dd7ce['textContent'] = _0x1cc1eb['name'];
                _0x17caa6['appendChild'](_0x4dd7ce);
                _0x17caa6['appendChild'](document['createElement']('br'));
                _0x17caa6['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0xa55d6e));
                const _0xcd1e3f = _0x2094cb['getBoundingClientRect']();
                _0x17caa6['style']['left'] = _0xcd1e3f['left'] - 0xeb + 'px';
                _0x17caa6['style']['top'] = _0xcd1e3f['top'] + 'px';
                _0x17caa6['style']['display'] = 'block';
                _0x17caa6['style']['visibility'] = 'visible';
                _0x17caa6['style']['opacity'] = '1';
            });
            _0x2094cb['addEventListener']('mouseleave', () => {
                const _0x5c1507 = document['getElementById']('role-tooltip');
                if (_0x5c1507) {
                    _0x5c1507['style']['display'] = 'none';
                    _0x5c1507['style']['visibility'] = 'hidden';
                    _0x5c1507['style']['opacity'] = '0';
                }
            });
        }
        _0x36799b['appendChild'](_0x2094cb);
    });
}
let _0x8fccb9 = null;
let _0x2bb840 = null;
const _0x2cd494 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x3f19ab = 'Player???';
let _0x1b7bd5 = ![];
let _0x56393e = {};
let _0x2a95c4 = null;
let _0x2c181d = 0x0;
let _0x4abc81 = 0x0;
let _0x307372 = new Set();
let _0x4d2d31 = ![];
let _0x1c380e = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x534efd = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x3cea28 = ![];
let _0xe463c0 = null;
let _0x3ea23b = 0x0;
let _0x1e437c = 0x0;
let _0xdce99b = ![];
let _0x43f689 = ![];
let _0xa439f6 = 0x0;
let _0x11a8c8 = null;
let _0x54ff39 = ![];
const _0x59529c = ((() => {
    const _0xd7cc89 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x5375bd = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x221833 = 0x320;
    const _0x3fe515 = {};
    const _0xc1e325 = {};
    let _0x22319e = null;
    let _0x266d95 = _0x5375bd === 0x0;
    let _0xb3d27 = ![];
    for (const [_0x1c801a, _0x3f53fb] of Object['entries'](_0xd7cc89)) {
        const _0x506be2 = new Audio(_0x3f53fb);
        _0x506be2['loop'] = !![];
        _0x506be2['volume'] = 0x0;
        _0x506be2['preload'] = 'auto';
        _0x3fe515[_0x1c801a] = _0x506be2;
        _0xc1e325[_0x1c801a] = null;
    }
    const _0x5d66bf = _0x18932a => Math['min'](0x1, Math['max'](0x0, _0x18932a));
    function _0x3db10d(_0x4f17b7) {
        if (_0xc1e325[_0x4f17b7] !== null) {
            cancelAnimationFrame(_0xc1e325[_0x4f17b7]);
            _0xc1e325[_0x4f17b7] = null;
        }
    }
    function _0x1e9e0e(_0x304aa4, _0x4f62a0, _0x1b004d, _0xefe187, _0x8b7892) {
        _0x3db10d(_0x304aa4);
        const _0x49588d = _0x3fe515[_0x304aa4];
        const _0x53eccd = performance['now']();
        const _0x529c80 = _0x2bcdac => {
            const _0x321ade = _0x5d66bf((_0x2bcdac - _0x53eccd) / _0xefe187);
            const _0x4924bf = _0x5d66bf(_0x4f62a0 + (_0x1b004d - _0x4f62a0) * _0x321ade);
            _0x49588d['volume'] = _0x266d95 ? 0x0 : _0x4924bf;
            if (_0x321ade < 0x1) {
                _0xc1e325[_0x304aa4] = requestAnimationFrame(_0x529c80);
            } else {
                _0xc1e325[_0x304aa4] = null;
                _0x49588d['volume'] = _0x266d95 ? 0x0 : _0x5d66bf(_0x1b004d);
                if (_0x8b7892)
                    _0x8b7892();
            }
        };
        _0xc1e325[_0x304aa4] = requestAnimationFrame(_0x529c80);
    }
    function _0x18b55d(_0x4a0c71) {
        const _0x365fcf = _0x4a0c71['play']();
        if (_0x365fcf && _0x365fcf['catch']) {
            _0x365fcf['catch'](() => {
                if (!_0xb3d27) {
                    const _0x319baf = () => {
                        _0xb3d27 = !![];
                        _0x4a0c71['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x319baf);
                        document['removeEventListener']('keydown', _0x319baf);
                        document['removeEventListener']('touchstart', _0x319baf);
                    };
                    document['addEventListener']('click', _0x319baf, { 'once': !![] });
                    document['addEventListener']('keydown', _0x319baf, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x319baf, { 'once': !![] });
                }
            });
        }
    }
    function _0x43ab80(_0x39e3bd) {
        if (!_0xd7cc89[_0x39e3bd])
            return;
        if (_0x22319e === _0x39e3bd)
            return;
        const _0x40ff96 = _0x22319e;
        _0x22319e = _0x39e3bd;
        const _0x327559 = _0x3fe515[_0x39e3bd];
        _0x3db10d(_0x39e3bd);
        _0x327559['currentTime'] = 0x0;
        _0x327559['volume'] = 0x0;
        _0x18b55d(_0x327559);
        _0x1e9e0e(_0x39e3bd, 0x0, _0x5375bd, _0x221833);
        if (_0x40ff96 && _0x3fe515[_0x40ff96]) {
            const _0x39d3fa = _0x40ff96;
            const _0xb519e1 = _0x3fe515[_0x39d3fa];
            const _0x45972a = _0x5d66bf(_0xb519e1['volume']);
            _0x1e9e0e(_0x39d3fa, _0x45972a, 0x0, _0x221833, () => {
                _0xb519e1['pause']();
                _0xb519e1['currentTime'] = 0x0;
            });
        }
    }
    function _0x52dcbd(_0x15bdbe) {
        _0x5375bd = _0x5d66bf(_0x15bdbe);
        localStorage['setItem']('musicVolume', String(_0x5375bd));
        if (!_0x266d95 && _0x22319e && _0xc1e325[_0x22319e] === null) {
            _0x3fe515[_0x22319e]['volume'] = _0x5375bd;
        }
    }
    function _0x4973b2() {
        return _0x5375bd;
    }
    function _0x500ae7(_0x5e49f8) {
        _0x266d95 = _0x5e49f8;
        for (const _0x40e82f of Object['keys'](_0x3fe515)) {
            if (_0xc1e325[_0x40e82f] === null) {
                _0x3fe515[_0x40e82f]['volume'] = _0x5e49f8 || _0x40e82f !== _0x22319e ? 0x0 : _0x5375bd;
            }
        }
    }
    function _0xfb7c64() {
        return _0x266d95;
    }
    function _0x34f1de(_0x3ca2ba) {
        if (_0x3ca2ba === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x3ca2ba === 'DAY_VOTE')
            return 'voting';
        if (_0x3ca2ba === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x4666ef(_0x1f8aa7) {
        _0x43ab80(_0x34f1de(_0x1f8aa7));
    }
    function _0x3f16f2(_0x34b7e5) {
        _0x43ab80(_0x34b7e5);
    }
    return {
        'play': _0x43ab80,
        'onStateChange': _0x4666ef,
        'onSoundEvent': _0x3f16f2,
        'setVolume': _0x52dcbd,
        'getVolume': _0x4973b2,
        'setMuted': _0x500ae7,
        'isMuted': _0xfb7c64
    };
})());
const _0x23235c = ((() => {
    const _0x47e027 = 0x258;
    const _0x5289ad = 0xb4;
    const _0xa60a46 = 0x708;
    const _0x1794a4 = 0x140;
    const _0x2e7c42 = 0.18;
    const _0x4e00ae = 0.95;
    const _0x1b6255 = new Audio('audio/heartbeat.mp3');
    _0x1b6255['loop'] = ![];
    _0x1b6255['preload'] = 'auto';
    _0x1b6255['volume'] = 0x0;
    let _0x37dd77 = 0x0;
    let _0x2eb602 = Infinity;
    function _0x35aa77(_0x59211d, _0x33beda, _0x280b8e) {
        return Math['min'](_0x280b8e, Math['max'](_0x33beda, _0x59211d));
    }
    function _0x3e48bc(_0x13acde, _0x5e1c78, _0x48b07a) {
        return _0x13acde + (_0x5e1c78 - _0x13acde) * _0x48b07a;
    }
    function _0x4d6141(_0x44d585) {
        if (_0x51fedf['GAME_STATE'] !== 'NIGHT' || _0x418683['isDead'] || _0x2a95c4 === 'Skinwalker') {
            _0x2eb602 = Infinity;
            return;
        }
        const _0x49f74a = _0x418683['x'] + 22.5;
        const _0x447537 = _0x418683['y'] + 22.5;
        let _0x5e1b73 = Infinity;
        for (const _0x549492 in _0x56393e) {
            const _0x253a66 = _0x56393e[_0x549492];
            if (!_0x253a66['isDark'] || _0x253a66['isDead'])
                continue;
            const _0x13999b = _0x253a66['renderX'] + 22.5 - _0x49f74a;
            const _0x5620d6 = _0x253a66['renderY'] + 22.5 - _0x447537;
            const _0x260d25 = Math['sqrt'](_0x13999b * _0x13999b + _0x5620d6 * _0x5620d6);
            if (_0x260d25 < _0x5e1b73)
                _0x5e1b73 = _0x260d25;
        }
        _0x2eb602 = _0x5e1b73;
        if (_0x5e1b73 > _0x47e027)
            return;
        const _0x4d6df8 = 0x1 - _0x35aa77((_0x5e1b73 - _0x5289ad) / (_0x47e027 - _0x5289ad), 0x0, 0x1);
        const _0x48aed1 = _0x3e48bc(_0xa60a46, _0x1794a4, _0x4d6df8);
        const _0xb93a42 = _0x3e48bc(_0x2e7c42, _0x4e00ae, _0x4d6df8);
        if (_0x44d585 >= _0x37dd77) {
            _0x1b6255['currentTime'] = 0x0;
            _0x1b6255['volume'] = _0x59529c['isMuted']() ? 0x0 : _0x35aa77(_0xb93a42 * _0x59529c['getVolume']() / 0.7, 0x0, 0x1);
            _0x1b6255['play']()['catch'](() => {
            });
            _0x37dd77 = _0x44d585 + _0x48aed1;
        }
    }
    return { 'tick': _0x4d6141 };
})());
function _0x4ae6a7() {
    const _0x39a6e0 = document['getElementById']('mob-ability-btn');
    if (!_0x39a6e0)
        return;
    const _0x537b54 = _0x51fedf['GAME_STATE'] === 'NIGHT' && !_0x418683['isDead'];
    const _0x495aee = _0x2a95c4 === 'Mayor' && !_0x307372['has'](_0x2bb840) && !_0x418683['isDead'];
    if (_0x537b54 || _0x495aee) {
        _0x39a6e0['style']['display'] = 'flex';
    } else {
        _0x39a6e0['style']['display'] = 'none';
    }
}
function _0x529d8f() {
    const _0x329eb5 = document['getElementById']('mobile-joystick-zone');
    const _0x171148 = document['getElementById']('mobile-top-bar');
    const _0x67a1cc = document['getElementById']('mobile-action-bar');
    if (!_0x329eb5 || !_0x171148 || !_0x67a1cc)
        return;
    if (!_0x5a7e13 && _0x534efd) {
        _0x329eb5['style']['display'] = 'flex';
        _0x171148['style']['display'] = 'flex';
        _0x67a1cc['style']['display'] = 'flex';
        _0x4ae6a7();
    } else {
        _0x329eb5['style']['display'] = 'none';
        _0x171148['style']['display'] = 'none';
        _0x67a1cc['style']['display'] = 'none';
    }
}
const _0x573b78 = document['getElementById']('gameCanvas');
const _0x5e44a7 = _0x573b78['getContext']('2d', { 'alpha': ![] });
const _0x3a43ae = 0x500;
const _0x55516c = 0x2d0;
const _0x51fedf = {
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
        'width': _0x3a43ae,
        'height': _0x55516c
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
const _0x418683 = {
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
const _0x3c9769 = new Image();
const _0x410d74 = new Image();
const _0x4a0a9e = new Image();
const _0x48dc5e = new Image();
_0x48dc5e['src'] = 'assets/mayor\x20cosmetic.png';
const _0x2f13e6 = [
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
const _0x55790f = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x56ed26 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x56ed26 === 'body1.png' || _0x56ed26 === 'body1')
    _0x56ed26 = 'body01.png';
if (!_0x56ed26['endsWith']('.png'))
    _0x56ed26 += '.png';
let _0x45da82 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x45da82['endsWith']('.png'))
    _0x45da82 += '.png';
let _0x5a7e13 = !![];
let _0x267f45 = null;
let _0x43f588 = null;
let _0x2d13e8 = 0x3c;
let _0x480b3a = 0x2d;
const _0x3e4713 = {};
const _0x595ce4 = new Image();
_0x595ce4['src'] = 'assets/yanito932.png';
_0x3e4713['assets/yanito932.png'] = _0x595ce4;
function _0x2c4e3f(_0x183d58) {
    if (!_0x3e4713[_0x183d58] || !_0x3e4713[_0x183d58]['complete'] && _0x3e4713[_0x183d58]['naturalWidth'] === 0x0 && _0x3e4713[_0x183d58]['naturalHeight'] === 0x0) {
        const _0x52c27e = new Image();
        _0x52c27e['src'] = _0x183d58;
        _0x3e4713[_0x183d58] = _0x52c27e;
    }
    return _0x3e4713[_0x183d58];
}
function _0x3fd95d(_0x1747b5, _0x339918, _0x19b2fa, _0x426d73, _0x1c965f) {
    try {
        const _0xce40fa = 'assets/' + (_0x339918 || 'body01.png');
        const _0x31a47f = _0x2c4e3f(_0xce40fa);
        if (_0x31a47f['complete'] && _0x31a47f['naturalWidth'] > 0x0) {
            _0x1747b5['drawImage'](_0x31a47f, -_0x426d73 / 0x2, -_0x1c965f / 0x2, _0x426d73, _0x1c965f);
        }
        if (_0x19b2fa === null || _0x19b2fa === undefined)
            return;
        const _0x439549 = 'assets/' + _0x19b2fa;
        const _0x27858b = _0x2c4e3f(_0x439549);
        if (_0x27858b['complete'] && _0x27858b['naturalWidth'] > 0x0) {
            _0x1747b5['drawImage'](_0x27858b, -_0x426d73 / 0x2, -_0x1c965f / 0x2, _0x426d73, _0x1c965f);
        }
    } catch (_0x2fb5bf) {
    }
}
function _0x5da030() {
    const _0x28bfb8 = document['getElementById']('body-skin-grid');
    const _0x465771 = document['getElementById']('eyes-skin-grid');
    if (!_0x28bfb8 || !_0x465771)
        return;
    _0x28bfb8['innerHTML'] = '';
    _0x2f13e6['forEach'](_0x238f51 => {
        const _0x35a064 = document['createElement']('button');
        _0x35a064['className'] = 'skin-btn' + (_0x238f51 === _0x56ed26 ? '\x20selected' : '');
        const _0x21e270 = document['createElement']('img');
        _0x21e270['src'] = 'assets/' + _0x238f51;
        _0x35a064['appendChild'](_0x21e270);
        _0x35a064['onclick'] = () => {
            _0x56ed26 = _0x238f51;
            localStorage['setItem']('selectedBody', _0x238f51);
            _0x28bfb8['querySelectorAll']('.skin-btn')['forEach'](_0x334bcb => _0x334bcb['classList']['remove']('selected'));
            _0x35a064['classList']['add']('selected');
        };
        _0x28bfb8['appendChild'](_0x35a064);
    });
    _0x465771['innerHTML'] = '';
    _0x55790f['forEach'](_0x1eed8f => {
        const _0x40e96e = document['createElement']('button');
        _0x40e96e['className'] = 'skin-btn' + (_0x1eed8f === _0x45da82 ? '\x20selected' : '');
        const _0x5e4251 = document['createElement']('img');
        _0x5e4251['src'] = 'assets/' + _0x1eed8f;
        _0x40e96e['appendChild'](_0x5e4251);
        _0x40e96e['onclick'] = () => {
            _0x45da82 = _0x1eed8f;
            localStorage['setItem']('selectedEyes', _0x1eed8f);
            _0x465771['querySelectorAll']('.skin-btn')['forEach'](_0x1f3dea => _0x1f3dea['classList']['remove']('selected'));
            _0x40e96e['classList']['add']('selected');
        };
        _0x465771['appendChild'](_0x40e96e);
    });
}
function _0x3423c(_0x4835d6) {
    if (!_0x51fedf['MAP']['columns'] || !_0x51fedf['CAMERA']['width'])
        return;
    const _0x34d95e = Math['max'](0x0, _0x51fedf['MAP']['columns'] * _0x51fedf['MAP']['tileSize'] - _0x51fedf['CAMERA']['width']);
    const _0x1782ea = Math['max'](0x0, _0x51fedf['MAP']['rows'] * _0x51fedf['MAP']['tileSize'] - _0x51fedf['CAMERA']['height']);
    if (_0x267f45 === null) {
        _0x267f45 = _0x34d95e / 0x2;
        _0x43f588 = _0x1782ea / 0x2;
    }
    _0x267f45 += _0x2d13e8 * _0x4835d6;
    _0x43f588 += _0x480b3a * _0x4835d6;
    if (_0x267f45 <= 0x0) {
        _0x267f45 = 0x0;
        _0x2d13e8 = Math['abs'](_0x2d13e8);
    } else if (_0x267f45 >= _0x34d95e) {
        _0x267f45 = _0x34d95e;
        _0x2d13e8 = -Math['abs'](_0x2d13e8);
    }
    if (_0x43f588 <= 0x0) {
        _0x43f588 = 0x0;
        _0x480b3a = Math['abs'](_0x480b3a);
    } else if (_0x43f588 >= _0x1782ea) {
        _0x43f588 = _0x1782ea;
        _0x480b3a = -Math['abs'](_0x480b3a);
    }
    _0x51fedf['CAMERA']['x'] = _0x267f45;
    _0x51fedf['CAMERA']['y'] = _0x43f588;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x50ea3a = document['getElementById']('play-btn');
    const _0xd3facf = document['getElementById']('username-input');
    const _0x2bf000 = localStorage['getItem']('playerName');
    if (_0x2bf000 && _0xd3facf) {
        _0xd3facf['value'] = _0x2bf000;
    }
    const _0x21531a = () => {
        _0x59529c['play']('wait');
        document['removeEventListener']('click', _0x21531a);
        document['removeEventListener']('keydown', _0x21531a);
        document['removeEventListener']('touchstart', _0x21531a);
    };
    document['addEventListener']('click', _0x21531a, { 'once': !![] });
    document['addEventListener']('keydown', _0x21531a, { 'once': !![] });
    document['addEventListener']('touchstart', _0x21531a, { 'once': !![] });
    if (_0x50ea3a) {
        _0x50ea3a['addEventListener']('click', () => {
            const _0x41f5f9 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x1360b2 = window['_FB'] && window['_FB']['_userData'];
            let _0x495388 = !![];
            if (_0x41f5f9 && _0x1360b2 && _0x1360b2['username']) {
                _0x3f19ab = _0x1360b2['username'];
                _0x495388 = ![];
            } else {
                const _0x385a41 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x3f19ab = 'user' + _0x385a41;
                _0x495388 = !![];
            }
            const _0x490148 = _0x495388 ? 'body01.png' : _0x56ed26;
            const _0x4683fe = _0x495388 ? 'eyes4.png' : _0x45da82;
            const _0x1d47a2 = !_0x495388 && _0x1360b2 && _0x1360b2['photoURL'] ? _0x1360b2['photoURL'] : '';
            const _0x1da7e1 = !_0x495388 && _0x41f5f9 ? _0x41f5f9['uid'] : '';
            localStorage['setItem']('playerName', _0x3f19ab);
            _0x5a7e13 = ![];
            _0x51fedf['CAMERA']['x'] = null;
            _0x51fedf['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x43f584 = document['getElementById']('chat-log-wrap');
            if (_0x43f584)
                _0x43f584['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0xa3afee = document['getElementById']('controls-hint');
            if (_0xa3afee && !_0x534efd)
                _0xa3afee['style']['display'] = 'block';
            _0x529d8f();
            if (_0x534efd) {
                const _0x278dac = document['getElementById']('leaderboard-list');
                const _0x4aa5a0 = document['getElementById']('leaderboard-toggle');
                if (_0x278dac) {
                    _0x278dac['style']['display'] = 'none';
                    if (_0x4aa5a0)
                        _0x4aa5a0['style']['transform'] = 'rotate(180deg)';
                }
                const _0x53d78b = document['getElementById']('role-list-items');
                const _0x1e9bfe = document['getElementById']('role-list-toggle');
                if (_0x53d78b) {
                    _0x53d78b['style']['display'] = 'none';
                    if (_0x1e9bfe)
                        _0x1e9bfe['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x5a1793 = !_0x495388 && _0x1360b2 ? {
                'townWins': _0x1360b2['townWins'] || 0x0,
                'mafiaWins': _0x1360b2['mafiaWins'] || 0x0,
                'deaths': _0x1360b2['deaths'] || 0x0,
                'townLosses': _0x1360b2['townLosses'] || 0x0,
                'mafiaLosses': _0x1360b2['mafiaLosses'] || 0x0
            } : null;
            const _0x725b08 = JSON['stringify']({
                'type': 'join',
                'name': _0x3f19ab,
                'token': _0x2cd494,
                'body': _0x490148,
                'eyes': _0x4683fe,
                'isGuest': _0x495388,
                'uid': _0x1da7e1,
                'photoURL': _0x1d47a2,
                'accountStats': _0x5a1793
            });
            if (_0x8fccb9 && _0x8fccb9['readyState'] === WebSocket['OPEN']) {
                _0x8fccb9['send'](_0x725b08);
            } else if (!_0x8fccb9 || _0x8fccb9['readyState'] === WebSocket['CLOSED'] || _0x8fccb9['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x725b08;
                _0x20bbf6();
            }
        });
    }
    _0x5da030();
    _0x20bbf6();
    _0x780e1c();
    _0x49923f();
    _0x4617ec();
});
function _0x49923f() {
    const _0x155697 = document['getElementById']('settings-btn');
    const _0x4fd1bb = document['getElementById']('settings-panel');
    const _0x4c41b5 = document['getElementById']('close-settings-btn');
    const _0x3d3bd3 = document['getElementById']('setting-mouse-relative');
    if (_0x3d3bd3) {
        _0x3d3bd3['checked'] = _0x1c380e;
        _0x3d3bd3['addEventListener']('change', () => {
            _0x1c380e = _0x3d3bd3['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x1c380e ? 'true' : 'false');
        });
    }
    const _0x29cb84 = document['getElementById']('setting-music-volume');
    const _0x4a65c4 = document['getElementById']('setting-music-volume-display');
    function _0x4bd1fc(_0x14585c) {
        const _0x5d075d = (_0x14585c['value'] - _0x14585c['min']) / (_0x14585c['max'] - _0x14585c['min']) * 0x64;
        _0x14585c['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x5d075d + '%,\x20#444\x20' + _0x5d075d + '%)';
    }
    if (_0x29cb84) {
        const _0x3c735d = _0x59529c['getVolume']();
        const _0x15bed7 = Math['round'](_0x3c735d * 0x64);
        _0x29cb84['value'] = _0x15bed7;
        if (_0x4a65c4)
            _0x4a65c4['textContent'] = _0x15bed7 + '%';
        _0x4bd1fc(_0x29cb84);
        _0x29cb84['addEventListener']('input', () => {
            const _0x35ddee = parseInt(_0x29cb84['value'], 0xa);
            if (_0x4a65c4)
                _0x4a65c4['textContent'] = _0x35ddee + '%';
            _0x4bd1fc(_0x29cb84);
            _0x59529c['setVolume'](_0x35ddee / 0x64);
            _0x59529c['setMuted'](_0x35ddee === 0x0);
        });
    }
    if (_0x155697 && _0x4fd1bb) {
        _0x155697['addEventListener']('click', _0x387ba2 => {
            _0x387ba2['stopPropagation']();
            _0x4fd1bb['style']['display'] = _0x4fd1bb['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x4c41b5 && _0x4fd1bb) {
        _0x4c41b5['addEventListener']('click', () => {
            _0x4fd1bb['style']['display'] = 'none';
        });
    }
    const _0x210ffa = document['getElementById']('mayor-confirm-yes');
    const _0x9a93f5 = document['getElementById']('mayor-confirm-no');
    const _0x89f7d1 = document['getElementById']('mayor-confirm-dialog');
    if (_0x210ffa && _0x89f7d1) {
        _0x210ffa['addEventListener']('click', () => {
            if (_0x8fccb9 && _0x8fccb9['readyState'] === WebSocket['OPEN']) {
                _0x8fccb9['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x89f7d1['style']['display'] = 'none';
        });
    }
    if (_0x9a93f5 && _0x89f7d1) {
        _0x9a93f5['addEventListener']('click', () => {
            _0x89f7d1['style']['display'] = 'none';
        });
    }
    const _0x1cd57d = document['getElementById']('close-ability-btn');
    if (_0x1cd57d) {
        _0x1cd57d['addEventListener']('click', () => {
            const _0x5941d5 = document['getElementById']('ability-ui');
            if (_0x5941d5)
                _0x5941d5['style']['display'] = 'none';
        });
    }
}
let _0x132fb9 = '';
function _0x5eb4dd(_0x51af67) {
    const _0x70c655 = document['getElementById']('vote-tally-panel');
    const _0x7ef52d = document['getElementById']('vote-tally-list');
    if (!_0x70c655 || !_0x7ef52d)
        return;
    if (_0x51af67['state'] !== 'DAY_VOTE') {
        _0x70c655['style']['display'] = 'none';
        _0x132fb9 = '';
        return;
    }
    _0x70c655['style']['display'] = 'block';
    const _0x5d1bb5 = {};
    for (const _0x44c7a8 in _0x56393e) {
        if (!_0x56393e[_0x44c7a8]['isDead'])
            _0x5d1bb5[_0x44c7a8] = 0x0;
    }
    if (_0x2bb840 && !_0x418683['isDead'])
        _0x5d1bb5[_0x2bb840] = 0x0;
    const _0x8e0b5d = _0x51af67['votes'] || {};
    for (const _0x1213db in _0x8e0b5d) {
        const _0x555bc2 = _0x8e0b5d[_0x1213db];
        const _0x43117e = _0x51af67['mayorRevealed'] && _0x51af67['mayorRevealed'][_0x1213db] ? 0x2 : 0x1;
        _0x5d1bb5[_0x555bc2] = (_0x5d1bb5[_0x555bc2] || 0x0) + _0x43117e;
    }
    let _0x218e44 = 0x0;
    const _0x15f947 = _0x51af67['skips'] || {};
    for (const _0xf9c9b5 in _0x15f947) {
        _0x218e44 += Number(_0x15f947[_0xf9c9b5]) || 0x1;
    }
    const _0x4e38ed = JSON['stringify'](_0x5d1bb5) + '_' + _0x218e44 + '_' + _0x418683['isDead'];
    if (_0x4e38ed === _0x132fb9)
        return;
    _0x132fb9 = _0x4e38ed;
    _0x7ef52d['innerHTML'] = '';
    for (const _0xdc54ab in _0x5d1bb5) {
        const _0x4d5a32 = parseInt(_0xdc54ab);
        const _0x2edc2d = _0x4d5a32 === _0x2bb840 ? _0x3f19ab : _0x56393e[_0xdc54ab] ? _0x56393e[_0xdc54ab]['name'] : 'Player\x20' + _0xdc54ab;
        const _0x55daf0 = document['createElement']('div');
        _0x55daf0['className'] = 'vote-tally-entry';
        const _0x593c39 = document['createElement']('span');
        _0x593c39['textContent'] = _0x2edc2d;
        const _0x1c757b = document['createElement']('span');
        _0x1c757b['className'] = 'vote-count';
        _0x1c757b['textContent'] = _0x5d1bb5[_0xdc54ab] + '\x20vote' + (_0x5d1bb5[_0xdc54ab] === 0x1 ? '' : 's');
        _0x55daf0['appendChild'](_0x593c39);
        _0x55daf0['appendChild'](_0x1c757b);
        if (_0x4d5a32 !== _0x2bb840 && !_0x418683['isDead']) {
            _0x55daf0['style']['cursor'] = 'pointer';
            _0x55daf0['title'] = 'Vote\x20for\x20' + _0x2edc2d;
            _0x55daf0['addEventListener']('click', _0x2fd168 => {
                _0x2fd168['stopPropagation']();
                if (_0x8fccb9 && _0x8fccb9['readyState'] === WebSocket['OPEN']) {
                    _0x8fccb9['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x2edc2d
                    }));
                }
            });
        }
        _0x7ef52d['appendChild'](_0x55daf0);
    }
    const _0x192832 = document['createElement']('div');
    _0x192832['className'] = 'vote-tally-skip';
    _0x192832['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x218e44 + '</span>';
    if (!_0x418683['isDead']) {
        _0x192832['style']['cursor'] = 'pointer';
        _0x192832['title'] = 'Click\x20to\x20skip\x20vote';
        _0x192832['addEventListener']('click', _0x3e31c7 => {
            _0x3e31c7['stopPropagation']();
            if (_0x8fccb9 && _0x8fccb9['readyState'] === WebSocket['OPEN']) {
                _0x8fccb9['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x7ef52d['appendChild'](_0x192832);
}
let _0x1583b1 = null;
let _0x3f0bcc = null;
let _0x101a3c = null;
function _0xcccd39() {
    if (_0x8fccb9 && _0x8fccb9['readyState'] === WebSocket['OPEN']) {
        _0x8fccb9['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x1583b1,
            'abilityTarget': _0x3f0bcc,
            'killTarget': _0x101a3c
        }));
    }
}
function _0x473d66() {
    const _0x54bf21 = document['getElementById']('ability-ui-body');
    if (!_0x54bf21)
        return;
    _0x54bf21['innerHTML'] = '';
    if (_0x2a95c4 === 'Celebrity' || _0x2a95c4 === 'Mayor') {
        const _0x4bc5b8 = document['createElement']('div');
        _0x4bc5b8['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x4bc5b8['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x54bf21['appendChild'](_0x4bc5b8);
        return;
    }
    if (_0x2a95c4 === 'Skinwalker') {
        const _0x16ad93 = document['createElement']('div');
        _0x16ad93['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x16ad93['innerText'] = 'Transform\x20into:';
        _0x54bf21['appendChild'](_0x16ad93);
        const _0x3371c3 = document['createElement']('div');
        _0x3371c3['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x5bba8d = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x284e75 = _0x127d40 => {
            if (!_0x51fedf['ROLE_LIST_RAW'] || _0x51fedf['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x51fedf['ROLE_LIST_RAW']['some'](_0x45d181 => {
                if (_0x45d181['name'] === _0x127d40)
                    return !_0x45d181['isDead'];
                if (_0x37ecc3[_0x45d181['name']] && _0x37ecc3[_0x45d181['name']]['includes'](_0x127d40))
                    return !![];
                return ![];
            });
        };
        const _0x41bcd5 = [
            'None',
            ..._0x5bba8d['filter'](_0x284e75)
        ];
        _0x41bcd5['forEach'](_0x1ce6ce => {
            const _0x2eb2dc = document['createElement']('button');
            _0x2eb2dc['className'] = 'layer-btn';
            _0x2eb2dc['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x2eb2dc['innerText'] = _0x1ce6ce;
            const _0x54c159 = _0x1ce6ce === 'None' && !_0x1583b1 || _0x1583b1 === _0x1ce6ce;
            if (_0x54c159)
                _0x2eb2dc['classList']['add']('active');
            _0x2eb2dc['onclick'] = () => {
                _0x1583b1 = _0x1ce6ce === 'None' ? null : _0x1ce6ce;
                _0xcccd39();
                _0x473d66();
            };
            _0x3371c3['appendChild'](_0x2eb2dc);
        });
        _0x54bf21['appendChild'](_0x3371c3);
        if (_0x284e75('Vigilante')) {
            const _0x5afa16 = document['createElement']('div');
            _0x5afa16['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x5afa16['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x54bf21['appendChild'](_0x5afa16);
        }
        if (_0x1583b1 === 'Vigilante') {
            const _0x21a3d3 = document['createElement']('div');
            _0x21a3d3['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x21a3d3['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x54bf21['appendChild'](_0x21a3d3);
        } else if (_0x1583b1 && _0x1583b1 !== 'Celebrity') {
            const _0x4a5d7c = document['createElement']('div');
            _0x4a5d7c['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x4a5d7c['innerText'] = 'Use\x20' + _0x1583b1 + '\x20ability\x20on:';
            _0x54bf21['appendChild'](_0x4a5d7c);
            const _0x592ebb = document['createElement']('div');
            _0x592ebb['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x3f710b = document['createElement']('button');
            _0x3f710b['className'] = 'layer-btn';
            _0x3f710b['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x3f710b['innerText'] = 'No\x20one';
            if (!_0x3f0bcc)
                _0x3f710b['classList']['add']('active');
            _0x3f710b['onclick'] = () => {
                _0x3f0bcc = null;
                _0xcccd39();
                _0x473d66();
            };
            _0x592ebb['appendChild'](_0x3f710b);
            for (const _0xd3823e in _0x56393e) {
                const _0x13702c = _0x56393e[_0xd3823e];
                if (_0x13702c['isDead'])
                    continue;
                const _0x565c28 = document['createElement']('button');
                _0x565c28['className'] = 'layer-btn';
                _0x565c28['innerText'] = _0x13702c['name'];
                if (_0x3f0bcc === parseInt(_0xd3823e))
                    _0x565c28['classList']['add']('active');
                _0x565c28['onclick'] = () => {
                    _0x3f0bcc = parseInt(_0xd3823e);
                    _0xcccd39();
                    _0x473d66();
                };
                _0x592ebb['appendChild'](_0x565c28);
            }
            _0x54bf21['appendChild'](_0x592ebb);
        }
        const _0x2a620e = document['createElement']('div');
        _0x2a620e['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x2a620e['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x54bf21['appendChild'](_0x2a620e);
        const _0x58d76b = document['createElement']('div');
        _0x58d76b['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x8e9fbd = document['createElement']('button');
        _0x8e9fbd['className'] = 'layer-btn';
        _0x8e9fbd['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x8e9fbd['innerText'] = 'No\x20one';
        if (!_0x101a3c && !_0x51fedf['CURRENT_TARGET'])
            _0x8e9fbd['classList']['add']('active');
        _0x8e9fbd['onclick'] = () => {
            _0x101a3c = null;
            _0x51fedf['CURRENT_TARGET'] = null;
            _0xcccd39();
            _0x473d66();
        };
        _0x58d76b['appendChild'](_0x8e9fbd);
        for (const _0x4001ff in _0x56393e) {
            const _0x455774 = _0x56393e[_0x4001ff];
            if (_0x455774['isDead'])
                continue;
            const _0x534c78 = document['createElement']('button');
            _0x534c78['className'] = 'layer-btn';
            _0x534c78['innerText'] = _0x455774['name'];
            if (_0x101a3c === parseInt(_0x4001ff) || _0x51fedf['CURRENT_TARGET'] === parseInt(_0x4001ff))
                _0x534c78['classList']['add']('active');
            _0x534c78['onclick'] = () => {
                _0x101a3c = parseInt(_0x4001ff);
                _0x51fedf['CURRENT_TARGET'] = parseInt(_0x4001ff);
                _0xcccd39();
                _0x473d66();
            };
            _0x58d76b['appendChild'](_0x534c78);
        }
        _0x54bf21['appendChild'](_0x58d76b);
        return;
    }
    let _0x3d5dc3 = '';
    let _0xde3ef9 = ![];
    if (_0x2a95c4 === 'Doctor') {
        _0x3d5dc3 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0xde3ef9 = !![];
    } else if (_0x2a95c4 === 'Investigator') {
        _0x3d5dc3 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x2a95c4 === 'Tracker') {
        _0x3d5dc3 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x2a95c4 === 'Archer') {
        _0x3d5dc3 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x2a95c4 === 'Escort') {
        _0x3d5dc3 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x2a95c4 === 'Vigilante') {
        _0x3d5dc3 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x1a1dd9 = document['createElement']('div');
    _0x1a1dd9['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x1a1dd9['innerText'] = _0x3d5dc3;
    _0x54bf21['appendChild'](_0x1a1dd9);
    const _0x2ce0f8 = document['createElement']('div');
    _0x2ce0f8['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x2ea85d = document['createElement']('button');
    _0x2ea85d['className'] = 'layer-btn';
    _0x2ea85d['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x2ea85d['innerText'] = 'No\x20one';
    if (_0x51fedf['CURRENT_TARGET'] === null)
        _0x2ea85d['classList']['add']('active');
    _0x2ea85d['onclick'] = () => {
        _0x51fedf['CURRENT_TARGET'] = null;
        if (_0x8fccb9 && _0x8fccb9['readyState'] === WebSocket['OPEN']) {
            _0x8fccb9['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x473d66();
    };
    _0x2ce0f8['appendChild'](_0x2ea85d);
    for (const _0x335597 in _0x56393e) {
        const _0x25bb27 = _0x56393e[_0x335597];
        if (_0x25bb27['isDead'])
            continue;
        const _0x80bcda = document['createElement']('button');
        _0x80bcda['className'] = 'layer-btn';
        _0x80bcda['innerText'] = _0x25bb27['name'];
        if (_0x51fedf['CURRENT_TARGET'] === parseInt(_0x335597))
            _0x80bcda['classList']['add']('active');
        _0x80bcda['onclick'] = () => {
            _0x51fedf['CURRENT_TARGET'] = parseInt(_0x335597);
            if (_0x8fccb9 && _0x8fccb9['readyState'] === WebSocket['OPEN']) {
                _0x8fccb9['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x335597)
                }));
            }
            _0x473d66();
        };
        _0x2ce0f8['appendChild'](_0x80bcda);
    }
    if (_0xde3ef9 && !_0x418683['isDead']) {
        const _0x2e45de = document['createElement']('button');
        _0x2e45de['className'] = 'layer-btn';
        _0x2e45de['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x2e45de['innerText'] = _0x3f19ab + '\x20(Self)';
        if (_0x51fedf['CURRENT_TARGET'] === _0x2bb840)
            _0x2e45de['classList']['add']('active');
        _0x2e45de['onclick'] = () => {
            _0x51fedf['CURRENT_TARGET'] = _0x2bb840;
            if (_0x8fccb9 && _0x8fccb9['readyState'] === WebSocket['OPEN']) {
                _0x8fccb9['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x2bb840
                }));
            }
            _0x473d66();
        };
        _0x2ce0f8['appendChild'](_0x2e45de);
    }
    _0x54bf21['appendChild'](_0x2ce0f8);
}
function _0x20bbf6() {
    if (_0x8fccb9 && (_0x8fccb9['readyState'] === WebSocket['OPEN'] || _0x8fccb9['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x41862a = new URLSearchParams();
    if (_0x2cd494)
        _0x41862a['set']('token', _0x2cd494);
    _0x41862a['set']('ngrok-skip-browser-warning', 'true');
    const _0x590077 = 'wss://rubber-virtual-application-occupational.trycloudflare.com';
    const _0x88f401 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x590077;
    const _0x37dac3 = _0x88f401 + '/?' + _0x41862a['toString']();
    _0x8fccb9 = new WebSocket(_0x37dac3);
    _0x8fccb9['onopen'] = function () {
        if (!_0x5a7e13 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x15ff4e = window['_FB'] && window['_FB']['_currentUser'];
                const _0x2d60fb = window['_FB'] && window['_FB']['_userData'];
                const _0x5b4bd6 = !(_0x15ff4e && _0x2d60fb && _0x2d60fb['username']);
                const _0x19c0d2 = _0x5b4bd6 ? 'body01.png' : _0x56ed26;
                const _0x414518 = _0x5b4bd6 ? 'eyes4.png' : _0x45da82;
                const _0x8deb5e = !_0x5b4bd6 && _0x2d60fb && _0x2d60fb['photoURL'] ? _0x2d60fb['photoURL'] : '';
                const _0x463535 = !_0x5b4bd6 && _0x15ff4e ? _0x15ff4e['uid'] : '';
                const _0x223701 = !_0x5b4bd6 && _0x2d60fb ? {
                    'townWins': _0x2d60fb['townWins'] || 0x0,
                    'mafiaWins': _0x2d60fb['mafiaWins'] || 0x0,
                    'deaths': _0x2d60fb['deaths'] || 0x0,
                    'townLosses': _0x2d60fb['townLosses'] || 0x0,
                    'mafiaLosses': _0x2d60fb['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x3f19ab,
                    'token': _0x2cd494,
                    'body': _0x19c0d2,
                    'eyes': _0x414518,
                    'isGuest': _0x5b4bd6,
                    'uid': _0x463535,
                    'photoURL': _0x8deb5e,
                    'accountStats': _0x223701
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x8fccb9 && _0x8fccb9['readyState'] === WebSocket['OPEN']) {
            _0x8fccb9['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x8fccb9['onclose'] = _0x3c0f7a => {
        if (_0x3c0f7a['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x3c0f7a['code'] === 0xfa2 || _0x3c0f7a['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x419b76 = document['getElementById']('disconnect-overlay');
        if (!_0x419b76) {
            _0x419b76 = document['createElement']('div');
            _0x419b76['id'] = 'disconnect-overlay';
            _0x419b76['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x419b76['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x419b76);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x8fccb9['onmessage'] = _0x490d29 => {
        const _0x53086c = JSON['parse'](_0x490d29['data']);
        if (_0x53086c['type'] === 'map_data') {
            _0x51fedf['MAP']['tileSize'] = _0x53086c['map']['tileSize'];
            _0x51fedf['MAP']['columns'] = _0x53086c['map']['columns'];
            _0x51fedf['MAP']['rows'] = _0x53086c['map']['rows'];
            _0x51fedf['MAP']['layers'] = _0x53086c['map']['layers'];
            if (_0x53086c['map']['doors']) {
                _0x51fedf['MAP']['doors'] = _0x53086c['map']['doors'];
                const _0x49b374 = _0x51fedf['MAP']['layers']['find'](_0x2582c1 => _0x2582c1['name'] === 'floor2');
                if (_0x49b374) {
                    for (const _0x2e4ce9 in _0x51fedf['MAP']['doors']) {
                        _0x49b374['data'][parseInt(_0x2e4ce9)] = 0x2;
                    }
                }
            }
            if (_0x53086c['entities'])
                _0x51fedf['ENTITIES'] = _0x53086c['entities'];
            _0x46c844();
            _0x51fedf['SYSTEM']['isReady'] = !![];
            _0x3e9038();
            if (!_0x51fedf['SYSTEM']['_gameLoopRunning']) {
                _0x51fedf['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x3e3f2b);
            }
            return;
        }
        if (_0x53086c['type'] === 'init') {
            _0x2bb840 = _0x53086c['id'];
            _0x5a7e13 = ![];
            _0x529d8f();
            if (_0x534efd) {
                const _0x1c4acf = document['getElementById']('leaderboard-list');
                const _0x315ba7 = document['getElementById']('leaderboard-toggle');
                if (_0x1c4acf) {
                    _0x1c4acf['style']['display'] = 'none';
                    if (_0x315ba7)
                        _0x315ba7['style']['transform'] = 'rotate(180deg)';
                }
                const _0x123a91 = document['getElementById']('role-list-items');
                const _0x224c8a = document['getElementById']('role-list-toggle');
                if (_0x123a91) {
                    _0x123a91['style']['display'] = 'none';
                    if (_0x224c8a)
                        _0x224c8a['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x1b7bd5 = _0x53086c['isOwner'] || ![];
            _0x3f19ab = _0x53086c['name'] || _0x3f19ab;
            _0x51fedf['MAP']['tileSize'] = _0x53086c['map']['tileSize'];
            _0x51fedf['MAP']['columns'] = _0x53086c['map']['columns'];
            _0x51fedf['MAP']['rows'] = _0x53086c['map']['rows'];
            _0x51fedf['MAP']['layers'] = _0x53086c['map']['layers'];
            if (_0x53086c['map']['doors']) {
                _0x51fedf['MAP']['doors'] = _0x53086c['map']['doors'];
                const _0x588b6f = _0x51fedf['MAP']['layers']['find'](_0x48eff0 => _0x48eff0['name'] === 'floor2');
                if (_0x588b6f) {
                    for (const _0x319b01 in _0x51fedf['MAP']['doors']) {
                        _0x588b6f['data'][parseInt(_0x319b01)] = 0x2;
                    }
                }
            }
            if (_0x53086c['entities'])
                _0x51fedf['ENTITIES'] = _0x53086c['entities'];
            _0x46c844();
            _0x418683['x'] = _0x51fedf['MAP']['columns'] * _0x51fedf['MAP']['tileSize'] / 0x2;
            _0x418683['y'] = _0x51fedf['MAP']['rows'] * _0x51fedf['MAP']['tileSize'] / 0x2;
            _0x51fedf['CAMERA']['x'] = _0x418683['x'] + _0x418683['width'] / 0x2 - _0x51fedf['CAMERA']['width'] / 0x2;
            _0x51fedf['CAMERA']['y'] = _0x418683['y'] + _0x418683['height'] / 0x2 - _0x51fedf['CAMERA']['height'] / 0x2;
            if (_0x1b7bd5) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x97e24d();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x51fedf['SYSTEM']['lastTime'] = performance['now']();
            _0x51fedf['SYSTEM']['isReady'] = !![];
            _0xcb846a();
            if (!_0x51fedf['SYSTEM']['_gameLoopRunning']) {
                _0x51fedf['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x3e3f2b);
            }
            return;
        } else if (_0x53086c['type'] === 'state') {
            const _0x2479ac = {};
            for (const _0x29ab9c in _0x53086c['players']) {
                if (parseInt(_0x29ab9c) === _0x2bb840)
                    continue;
                const _0x3af0a5 = _0x53086c['players'][_0x29ab9c];
                const _0x5445b7 = _0x56393e[_0x29ab9c];
                if (_0x5445b7) {
                    const _0x296eb0 = _0x3af0a5['x'] - _0x5445b7['renderX'];
                    const _0x2c2aed = _0x3af0a5['y'] - _0x5445b7['renderY'];
                    const _0xf36598 = _0x296eb0 * _0x296eb0 + _0x2c2aed * _0x2c2aed > 0x78 * 0x78;
                    Object['assign'](_0x5445b7, _0x3af0a5);
                    if (_0xf36598) {
                        _0x5445b7['renderX'] = _0x3af0a5['x'];
                        _0x5445b7['renderY'] = _0x3af0a5['y'];
                    }
                    _0x2479ac[_0x29ab9c] = _0x5445b7;
                } else {
                    _0x2479ac[_0x29ab9c] = {
                        ..._0x3af0a5,
                        'renderX': _0x3af0a5['x'],
                        'renderY': _0x3af0a5['y'],
                        'renderAngle': _0x3af0a5['angle'] || 0x0
                    };
                }
            }
            _0x56393e = _0x2479ac;
            _0x27031c();
            if (_0x53086c['players'][_0x2bb840]) {
                const _0xf5534a = _0x53086c['players'][_0x2bb840];
                _0x418683['chats'] = _0xf5534a['chats'] || [];
                _0x418683['isDead'] = _0xf5534a['isDead'];
                if (_0xf5534a['name'])
                    _0x3f19ab = _0xf5534a['name'];
                _0xcb846a();
                const _0x208196 = Math['hypot'](_0xf5534a['x'] - _0x418683['x'], _0xf5534a['y'] - _0x418683['y']);
                if (_0x208196 > 0xfa) {
                    _0x418683['x'] = _0xf5534a['x'];
                    _0x418683['y'] = _0xf5534a['y'];
                } else if (_0x208196 > 0x50) {
                    _0x418683['x'] += (_0xf5534a['x'] - _0x418683['x']) * 0.06;
                    _0x418683['y'] += (_0xf5534a['y'] - _0x418683['y']) * 0.06;
                }
            }
            if (_0x53086c['entities'])
                _0x51fedf['ENTITIES'] = _0x53086c['entities'];
            if (_0x53086c['game']) {
                _0x51fedf['GAME_STATE'] = _0x53086c['game']['state'];
                _0x51fedf['NIGHT_ABILITY_OPEN'] = _0x53086c['game']['nightAbilityOpen'];
                if (_0x53086c['game']['mayorRevealed']) {
                    for (const _0x155240 in _0x53086c['game']['mayorRevealed']) {
                        _0x307372['add'](parseInt(_0x155240));
                    }
                }
                if (_0x51fedf['LAST_STATE'] !== _0x51fedf['GAME_STATE']) {
                    if (_0x51fedf['GAME_STATE'] !== 'NIGHT') {
                        _0x51fedf['CURRENT_TARGET'] = null;
                        _0x1583b1 = null;
                        _0x3f0bcc = null;
                        _0x101a3c = null;
                        const _0x24baab = document['getElementById']('ability-ui');
                        if (_0x24baab)
                            _0x24baab['style']['display'] = 'none';
                    }
                    if (_0x51fedf['GAME_STATE'] === 'NIGHT') {
                        _0x418683['chats'] = [];
                        for (const _0x4b64e3 in _0x56393e) {
                            _0x56393e[_0x4b64e3]['chats'] = [];
                        }
                    }
                    _0x51fedf['LAST_STATE'] = _0x51fedf['GAME_STATE'];
                    _0x4ae6a7();
                    _0x59529c['onStateChange'](_0x51fedf['GAME_STATE'], _0x53086c['game']['nightAbilityOpen']);
                }
                const _0x4fca94 = document['getElementById']('phase-ui');
                if (_0x4fca94) {
                    if (_0x53086c['game']['state'] === 'LOBBY') {
                        _0x4fca94['style']['display'] = 'none';
                    } else {
                        _0x4fca94['style']['display'] = 'block';
                    }
                    let _0x361909 = _0x53086c['game']['state']['replace']('_', '\x20');
                    if (_0x53086c['game']['state'] === 'DAY_DISCUSS') {
                        _0x361909 = 'DAY\x20' + (_0x53086c['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x53086c['game']['timer'] + 's';
                    } else if (_0x53086c['game']['state'] === 'DAY_VOTE') {
                        _0x361909 = 'DAY\x20' + (_0x53086c['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x53086c['game']['timer'] + 's';
                    } else if (_0x53086c['game']['state'] === 'NIGHT') {
                        const _0x23089c = _0x53086c['game']['dayCount'] || 0x1;
                        if (_0x53086c['game']['nightAbilityOpen']) {
                            _0x361909 = 'NIGHT\x20' + _0x23089c + '\x20ABILITY\x20PHASE';
                            const _0x14d724 = _0x53086c['game']['abilityTimer'] !== undefined ? _0x53086c['game']['abilityTimer'] : _0x53086c['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x14d724 + 's';
                        } else {
                            _0x361909 = 'NIGHT\x20' + _0x23089c;
                            document['getElementById']('phase-timer')['innerText'] = _0x53086c['game']['timer'] + 's';
                        }
                    }
                    if (_0x53086c['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x361909;
                    }
                }
                if (_0x53086c['game']['state'] === 'NIGHT') {
                    const _0x2eea73 = document['getElementById']('ability-timer-label');
                    if (_0x2eea73) {
                        const _0x52743c = _0x53086c['game']['abilityTimer'] !== undefined ? _0x53086c['game']['abilityTimer'] : _0x53086c['game']['timer'];
                        _0x2eea73['innerText'] = _0x53086c['game']['nightAbilityOpen'] ? _0x52743c + 's' : '';
                    }
                    if (_0x53086c['game']['nightAbilityOpen'] && !_0x4d2d31 && !_0x418683['isDead']) {
                        _0x4d2d31 = !![];
                        _0x473d66();
                        const _0x13b71c = document['getElementById']('ability-ui');
                        if (_0x13b71c)
                            _0x13b71c['style']['display'] = 'block';
                    }
                    if (!_0x53086c['game']['nightAbilityOpen']) {
                        const _0x348845 = document['getElementById']('ability-ui');
                        if (_0x348845 && _0x348845['style']['display'] === 'block') {
                            _0x348845['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x4d2d31 = ![];
                }
                _0x5eb4dd(_0x53086c['game']);
                if (_0x53086c['game']['roleListMode'] !== undefined) {
                    _0x51fedf['ROLE_LIST_RAW'] = _0x53086c['game']['roleList'] || [];
                    _0x345e8e(_0x53086c['game']['roleList'], _0x53086c['game']['roleListMode']);
                }
            }
        } else if (_0x53086c['type'] === 'teleport') {
            _0x418683['x'] = _0x53086c['x'];
            _0x418683['y'] = _0x53086c['y'];
            _0x418683['vx'] = 0x0;
            _0x418683['vy'] = 0x0;
            _0x51fedf['CAMERA']['x'] = null;
            if (_0x53086c['teleportId'] !== undefined)
                _0x4abc81 = _0x53086c['teleportId'];
        } else if (_0x53086c['type'] === 'bulk_teleport') {
            for (const _0x43f5dd in _0x53086c['positions']) {
                const _0x2d0aa2 = _0x53086c['positions'][_0x43f5dd];
                if (parseInt(_0x43f5dd) === _0x2bb840) {
                    _0x418683['x'] = _0x2d0aa2['x'];
                    _0x418683['y'] = _0x2d0aa2['y'];
                    _0x418683['vx'] = 0x0;
                    _0x418683['vy'] = 0x0;
                    _0x51fedf['CAMERA']['x'] = null;
                    continue;
                }
                const _0x50adcc = _0x56393e[_0x43f5dd];
                if (_0x50adcc) {
                    _0x50adcc['x'] = _0x2d0aa2['x'];
                    _0x50adcc['y'] = _0x2d0aa2['y'];
                    _0x50adcc['renderX'] = _0x2d0aa2['x'];
                    _0x50adcc['renderY'] = _0x2d0aa2['y'];
                    _0x50adcc['vx'] = 0x0;
                    _0x50adcc['vy'] = 0x0;
                }
            }
        } else if (_0x53086c['type'] === 'player_left') {
            delete _0x56393e[_0x53086c['id']];
            _0x307372['delete'](parseInt(_0x53086c['id']));
        } else if (_0x53086c['type'] === 'map_update') {
            const _0x127ada = _0x51fedf['MAP']['layers']['find'](_0x1d6eb3 => _0x1d6eb3['name'] === _0x53086c['layer']);
            if (_0x127ada) {
                _0x127ada['data'][_0x53086c['row'] * _0x51fedf['MAP']['columns'] + _0x53086c['col']] = _0x53086c['gid'];
                const _0x43f9f1 = _0x53086c['row'] * _0x51fedf['MAP']['columns'] + _0x53086c['col'];
                if (_0x51fedf['MAP']['doors'] && _0x51fedf['MAP']['doors'][_0x43f9f1]) {
                    const _0x3d13ae = _0x51fedf['MAP']['layers']['find'](_0x8cfa81 => _0x8cfa81['name'] === 'floor2');
                    if (_0x3d13ae)
                        _0x3d13ae['data'][_0x43f9f1] = 0x2;
                }
                const _0x304283 = Math['floor'](_0x53086c['col'] * _0x51fedf['MAP']['tileSize'] / _0x51fedf['MAP']['chunkSize']);
                const _0x186357 = Math['floor'](_0x53086c['row'] * _0x51fedf['MAP']['tileSize'] / _0x51fedf['MAP']['chunkSize']);
                _0x6fc196(_0x304283, _0x186357);
            }
        } else if (_0x53086c['type'] === 'role_assign') {
            _0x2a95c4 = _0x53086c['role'];
            _0x418683['isDead'] = _0x2a95c4 === 'Spectator';
            _0x307372['clear']();
            _0x51fedf['CURRENT_TARGET'] = null;
            _0x1583b1 = null;
            _0x3f0bcc = null;
            _0x101a3c = null;
            _0x4d2d31 = ![];
            const _0x4dd2d6 = document['getElementById']('ability-ui');
            if (_0x4dd2d6)
                _0x4dd2d6['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x2a95c4;
            _0x4ae6a7();
            _0x1116a4(_0x2a95c4 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x2a95c4, !![]);
            let _0x3ffbe3 = '';
            if (_0x2a95c4 === 'Investigator')
                _0x3ffbe3 = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x2a95c4 === 'Tracker')
                _0x3ffbe3 = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x2a95c4 === 'Doctor')
                _0x3ffbe3 = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x2a95c4 === 'Archer')
                _0x3ffbe3 = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x2a95c4 === 'Escort')
                _0x3ffbe3 = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x2a95c4 === 'Vigilante')
                _0x3ffbe3 = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x2a95c4 === 'Skinwalker')
                _0x3ffbe3 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x2a95c4 === 'Celebrity')
                _0x3ffbe3 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x2a95c4 === 'Mayor')
                _0x3ffbe3 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x1116a4(_0x3ffbe3, !![]);
        } else if (_0x53086c['type'] === 'mayor_reveal') {
            _0x307372['add'](parseInt(_0x53086c['playerId']));
            _0xcb846a();
            _0x4ae6a7();
        } else if (_0x53086c['type'] === 'rolelist_update') {
            _0x51fedf['ROLE_LIST_RAW'] = _0x53086c['list'] || [];
            _0x345e8e(_0x53086c['list'], _0x53086c['mode']);
        } else if (_0x53086c['type'] === 'sound_event') {
            _0x59529c['onSoundEvent'](_0x53086c['track']);
        } else if (_0x53086c['type'] === 'stats_update') {
            const _0x239252 = window['_FB'];
            if (_0x239252 && _0x239252['_currentUser'] && _0x239252['_userData']) {
                const _0x4109fb = _0x239252['_currentUser']['uid'];
                const _0x55236a = _0x53086c['patch'] || {};
                const _0x220891 = _0x239252['_userData'];
                const _0x3a5dcf = {
                    'townWins': (_0x220891['townWins'] || 0x0) + (_0x55236a['townWins'] || 0x0),
                    'mafiaWins': (_0x220891['mafiaWins'] || 0x0) + (_0x55236a['mafiaWins'] || 0x0),
                    'deaths': (_0x220891['deaths'] || 0x0) + (_0x55236a['deaths'] || 0x0),
                    'townLosses': (_0x220891['townLosses'] || 0x0) + (_0x55236a['townLosses'] || 0x0),
                    'mafiaLosses': (_0x220891['mafiaLosses'] || 0x0) + (_0x55236a['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x239252['_userData'], _0x3a5dcf);
                const _0x26261a = _0x239252['doc'](_0x239252['db'], 'users', _0x4109fb);
                _0x239252['updateDoc'](_0x26261a, _0x3a5dcf)['catch'](() => {
                });
                _0x27031c();
            }
        } else if (_0x53086c['type'] === 'game_over') {
            _0x59529c['onStateChange']('LOBBY', ![]);
            _0x345e8e([], 'off');
            _0x2a95c4 = null;
            _0x418683['isDead'] = ![];
            _0x307372['clear']();
            _0x51fedf['CURRENT_TARGET'] = null;
            _0x1583b1 = null;
            _0x3f0bcc = null;
            _0x101a3c = null;
            _0x4d2d31 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x4ae6a7();
            _0x1116a4('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x53086c['type'] === 'chat_log') {
            _0x1116a4(_0x53086c['sender'] + ':\x20' + _0x53086c['text']);
        } else if (_0x53086c['type'] === 'sys_chat') {
            _0x1116a4(_0x53086c['text'], !![]);
        }
    };
}
function _0x1116a4(_0x3acd2a, _0x370257 = ![]) {
    const _0x23cfb5 = document['getElementById']('chat-log-messages');
    const _0x576b42 = document['getElementById']('chat-log-ui');
    const _0x44aca4 = _0x576b42['scrollHeight'] - _0x576b42['scrollTop'] - _0x576b42['clientHeight'] < 0x1e;
    const _0x1d1093 = document['createElement']('div');
    _0x1d1093['className'] = 'chat-log-line' + (_0x370257 ? '\x20sys-msg' : '');
    _0x1d1093['innerText'] = _0x3acd2a;
    _0x23cfb5['appendChild'](_0x1d1093);
    if (_0x44aca4) {
        _0x576b42['scrollTop'] = _0x576b42['scrollHeight'];
    }
    if (_0x23cfb5['childElementCount'] > 0xc8) {
        _0x23cfb5['removeChild'](_0x23cfb5['firstChild']);
    }
}
function _0x93dec7(_0x20cbdf, _0x49c49b, _0x1925b2) {
    const _0x4b27db = document['createElement']('canvas');
    _0x4b27db['width'] = _0x1925b2;
    _0x4b27db['height'] = _0x1925b2;
    const _0x16b61d = _0x4b27db['getContext']('2d');
    _0x16b61d['imageSmoothingEnabled'] = ![];
    const _0x342569 = 'assets/' + (_0x20cbdf || 'body01.png');
    const _0x1cad87 = _0x2c4e3f(_0x342569);
    if (_0x1cad87['complete'] && _0x1cad87['naturalWidth'] > 0x0)
        _0x16b61d['drawImage'](_0x1cad87, 0x0, 0x0, _0x1925b2, _0x1925b2);
    if (_0x49c49b) {
        const _0xac37e0 = 'assets/' + _0x49c49b;
        const _0x204f79 = _0x2c4e3f(_0xac37e0);
        if (_0x204f79['complete'] && _0x204f79['naturalWidth'] > 0x0)
            _0x16b61d['drawImage'](_0x204f79, 0x0, 0x0, _0x1925b2, _0x1925b2);
    }
    return _0x4b27db['toDataURL']();
}
function _0x27031c() {
    const _0x105dd1 = document['getElementById']('chat-profile-panel');
    if (!_0x105dd1)
        return;
    _0x105dd1['innerHTML'] = '';
    let _0xf944dc = ![];
    const _0x2577d8 = [];
    if (_0x2bb840 !== null) {
        const _0x329d02 = _0x56ed26 || 'body01.png';
        const _0x487509 = _0x45da82 || 'eyes4.png';
        const _0x5395f6 = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x2577d8['push']({
            'id': _0x2bb840,
            'name': _0x3f19ab,
            'body': _0x329d02,
            'eyes': _0x487509,
            'stats': _0x5395f6
        });
    }
    for (const _0x37be8c in _0x56393e) {
        const _0x2b7afb = _0x56393e[_0x37be8c];
        const _0x46ec4c = _0x2b7afb['accountStats'] || null;
        _0x2577d8['push']({
            'id': parseInt(_0x37be8c),
            'name': _0x2b7afb['name'],
            'body': _0x2b7afb['body'] || 'body01.png',
            'eyes': _0x2b7afb['eyes'] || 'eyes4.png',
            'stats': _0x46ec4c
        });
    }
    for (const _0x12b9bb of _0x2577d8) {
        _0xf944dc = !![];
        const _0x323338 = _0x93dec7(_0x12b9bb['body'], _0x12b9bb['eyes'], 0x20);
        const _0x17b4b6 = document['createElement']('div');
        _0x17b4b6['className'] = 'chat-pfp-entry';
        const _0x38737b = document['createElement']('img');
        _0x38737b['src'] = _0x323338;
        _0x38737b['alt'] = _0x12b9bb['name'];
        _0x17b4b6['appendChild'](_0x38737b);
        const _0x3e932b = document['createElement']('div');
        _0x3e932b['className'] = 'chat-pfp-tooltip';
        let _0x99bffd = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x12b9bb['name'] + '</div>';
        const _0x213ba7 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x53367d = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0xb27423 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x1543eb = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x3eb665 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x1dbdfb = (_0x2d83f7, _0xa481c0, _0x38dee1) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x2d83f7 + '<span\x20style=\x22flex:1;\x22>' + _0xa481c0 + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x38dee1 + '</span></div>';
        if (_0x12b9bb['stats']) {
            _0x99bffd += _0x1dbdfb(_0x213ba7, 'Town\x20Wins', _0x12b9bb['stats']['townWins'] || 0x0);
            _0x99bffd += _0x1dbdfb(_0x53367d, 'Mafia\x20Wins', _0x12b9bb['stats']['mafiaWins'] || 0x0);
            _0x99bffd += _0x1dbdfb(_0xb27423, 'Deaths', _0x12b9bb['stats']['deaths'] || 0x0);
            _0x99bffd += _0x1dbdfb(_0x1543eb, 'Town\x20Losses', _0x12b9bb['stats']['townLosses'] || 0x0);
            _0x99bffd += _0x1dbdfb(_0x3eb665, 'Mafia\x20Losses', _0x12b9bb['stats']['mafiaLosses'] || 0x0);
        } else {
            _0x99bffd += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x3e932b['innerHTML'] = _0x99bffd;
        _0x17b4b6['appendChild'](_0x3e932b);
        _0x105dd1['appendChild'](_0x17b4b6);
    }
    const _0x3000f6 = document['getElementById']('chat-log-wrap');
    if (_0x3000f6) {
        if (_0xf944dc) {
            _0x3000f6['classList']['add']('has-profiles');
            _0x105dd1['style']['display'] = 'flex';
        } else {
            _0x3000f6['classList']['remove']('has-profiles');
            _0x105dd1['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x27031c;
let _0x3ebb1a = -0x1, _0x3b09b2 = -0x1, _0xcccdad = -0x1, _0x357063 = 0x0;
function _0x1e5fee() {
    if (!_0x2bb840 || !_0x8fccb9 || _0x8fccb9['readyState'] !== WebSocket['OPEN'])
        return;
    const _0xe22ccf = performance['now']();
    const _0x3a9e8b = _0xe22ccf - _0x357063;
    const _0x2d3b62 = Math['abs'](_0x418683['x'] - _0x3ebb1a) > 0.05 || Math['abs'](_0x418683['y'] - _0x3b09b2) > 0.05 || Math['abs'](_0x418683['angle'] - _0xcccdad) > 0.02;
    if (!_0x2d3b62 && _0x3a9e8b < 0xc8)
        return;
    if (_0x3a9e8b < 0x19)
        return;
    _0x357063 = _0xe22ccf;
    _0x3ebb1a = _0x418683['x'];
    _0x3b09b2 = _0x418683['y'];
    _0xcccdad = _0x418683['angle'];
    if (!_0x2bb840 || !_0x8fccb9 || _0x8fccb9['readyState'] !== WebSocket['OPEN'])
        return;
    _0x8fccb9['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x418683['x'],
        'y': _0x418683['y'],
        'vx': _0x418683['vx'],
        'vy': _0x418683['vy'],
        'angle': _0x418683['angle'],
        'scale': _0x418683['scale'],
        'teleportId': _0x4abc81,
        'clientTimestamp': Date['now']()
    }));
}
function _0x3cecb7() {
    if (_0x418683['isDead'])
        return;
    const _0x48f164 = _0x51fedf['MAP']['layers']['find'](_0x4848a3 => _0x4848a3['name'] === 'walls');
    if (!_0x48f164)
        return;
    const _0x5abf2d = _0x418683['scale'];
    const _0x1e537c = _0x418683['width'] * _0x5abf2d / 0x2;
    for (let _0x35cd1a = 0x0; _0x35cd1a < 0x3; _0x35cd1a++) {
        let _0x15a8d1 = _0x418683['x'] + _0x418683['width'] / 0x2;
        let _0x2b4236 = _0x418683['y'] + _0x418683['height'] / 0x2;
        const _0x41ff6b = Math['floor']((_0x15a8d1 - _0x1e537c) / _0x51fedf['MAP']['tileSize']);
        const _0x4b9696 = Math['floor']((_0x15a8d1 + _0x1e537c) / _0x51fedf['MAP']['tileSize']);
        const _0xefdd3e = Math['floor']((_0x2b4236 - _0x1e537c) / _0x51fedf['MAP']['tileSize']);
        const _0x18a847 = Math['floor']((_0x2b4236 + _0x1e537c) / _0x51fedf['MAP']['tileSize']);
        for (let _0x2ab9c6 = _0xefdd3e; _0x2ab9c6 <= _0x18a847; _0x2ab9c6++) {
            for (let _0x39a103 = _0x41ff6b; _0x39a103 <= _0x4b9696; _0x39a103++) {
                if (_0x39a103 < 0x0 || _0x39a103 >= _0x51fedf['MAP']['columns'] || _0x2ab9c6 < 0x0 || _0x2ab9c6 >= _0x51fedf['MAP']['rows'])
                    continue;
                if (_0x48f164['data'][_0x2ab9c6 * _0x51fedf['MAP']['columns'] + _0x39a103] === 0x0)
                    continue;
                const _0x4f72ad = _0x39a103 * _0x51fedf['MAP']['tileSize'];
                const _0x9d9907 = _0x2ab9c6 * _0x51fedf['MAP']['tileSize'];
                const _0xb9962a = _0x15a8d1 < _0x4f72ad ? _0x4f72ad : _0x15a8d1 > _0x4f72ad + _0x51fedf['MAP']['tileSize'] ? _0x4f72ad + _0x51fedf['MAP']['tileSize'] : _0x15a8d1;
                const _0x81225b = _0x2b4236 < _0x9d9907 ? _0x9d9907 : _0x2b4236 > _0x9d9907 + _0x51fedf['MAP']['tileSize'] ? _0x9d9907 + _0x51fedf['MAP']['tileSize'] : _0x2b4236;
                const _0x57b1c8 = _0x15a8d1 - _0xb9962a;
                const _0x3032d8 = _0x2b4236 - _0x81225b;
                const _0x21b5e5 = Math['sqrt'](_0x57b1c8 * _0x57b1c8 + _0x3032d8 * _0x3032d8);
                if (_0x21b5e5 < _0x1e537c) {
                    if (_0x21b5e5 === 0x0) {
                        const _0x4b9e12 = _0x15a8d1 - _0x4f72ad;
                        const _0x5406a0 = _0x4f72ad + _0x51fedf['MAP']['tileSize'] - _0x15a8d1;
                        const _0x259745 = _0x2b4236 - _0x9d9907;
                        const _0x59ed04 = _0x9d9907 + _0x51fedf['MAP']['tileSize'] - _0x2b4236;
                        const _0x577d87 = Math['min'](_0x4b9e12, _0x5406a0, _0x259745, _0x59ed04);
                        if (_0x577d87 === _0x4b9e12)
                            _0x15a8d1 = _0x4f72ad - _0x1e537c;
                        else if (_0x577d87 === _0x5406a0)
                            _0x15a8d1 = _0x4f72ad + _0x51fedf['MAP']['tileSize'] + _0x1e537c;
                        else if (_0x577d87 === _0x259745)
                            _0x2b4236 = _0x9d9907 - _0x1e537c;
                        else
                            _0x2b4236 = _0x9d9907 + _0x51fedf['MAP']['tileSize'] + _0x1e537c;
                    } else {
                        const _0x4b1977 = _0x1e537c - _0x21b5e5;
                        _0x15a8d1 += _0x57b1c8 / _0x21b5e5 * _0x4b1977;
                        _0x2b4236 += _0x3032d8 / _0x21b5e5 * _0x4b1977;
                        const _0x92ecd8 = _0x418683['vx'] * (_0x57b1c8 / _0x21b5e5) + _0x418683['vy'] * (_0x3032d8 / _0x21b5e5);
                        if (_0x92ecd8 < 0x0) {
                            _0x418683['vx'] -= _0x92ecd8 * (_0x57b1c8 / _0x21b5e5);
                            _0x418683['vy'] -= _0x92ecd8 * (_0x3032d8 / _0x21b5e5);
                        }
                    }
                }
            }
        }
        _0x418683['x'] = _0x15a8d1 - _0x418683['width'] / 0x2;
        _0x418683['y'] = _0x2b4236 - _0x418683['height'] / 0x2;
    }
}
function _0x41b9c0(_0x5d8be4) {
    const _0x1abd95 = _0x51fedf['MAP']['layers']['find'](_0x543dad => _0x543dad['name'] === 'walls');
    if (!_0x1abd95)
        return;
    const _0x38e26f = _0x5d8be4['width'] / 0x2;
    for (let _0x49c03a = 0x0; _0x49c03a < 0x2; _0x49c03a++) {
        let _0x4db5fa = _0x5d8be4['x'] + _0x5d8be4['width'] / 0x2;
        let _0x49633b = _0x5d8be4['y'] + _0x5d8be4['height'] / 0x2;
        const _0x1b05e5 = Math['floor']((_0x4db5fa - _0x38e26f) / _0x51fedf['MAP']['tileSize']);
        const _0x5aa845 = Math['floor']((_0x4db5fa + _0x38e26f) / _0x51fedf['MAP']['tileSize']);
        const _0x5a63bc = Math['floor']((_0x49633b - _0x38e26f) / _0x51fedf['MAP']['tileSize']);
        const _0x21fd87 = Math['floor']((_0x49633b + _0x38e26f) / _0x51fedf['MAP']['tileSize']);
        for (let _0x2e3fc9 = _0x5a63bc; _0x2e3fc9 <= _0x21fd87; _0x2e3fc9++) {
            for (let _0x2942be = _0x1b05e5; _0x2942be <= _0x5aa845; _0x2942be++) {
                if (_0x2942be < 0x0 || _0x2942be >= _0x51fedf['MAP']['columns'] || _0x2e3fc9 < 0x0 || _0x2e3fc9 >= _0x51fedf['MAP']['rows'])
                    continue;
                if (_0x1abd95['data'][_0x2e3fc9 * _0x51fedf['MAP']['columns'] + _0x2942be] === 0x0)
                    continue;
                const _0x2305c9 = _0x2942be * _0x51fedf['MAP']['tileSize'];
                const _0x1ccf1f = _0x2e3fc9 * _0x51fedf['MAP']['tileSize'];
                const _0x1057e4 = _0x4db5fa < _0x2305c9 ? _0x2305c9 : _0x4db5fa > _0x2305c9 + _0x51fedf['MAP']['tileSize'] ? _0x2305c9 + _0x51fedf['MAP']['tileSize'] : _0x4db5fa;
                const _0x594690 = _0x49633b < _0x1ccf1f ? _0x1ccf1f : _0x49633b > _0x1ccf1f + _0x51fedf['MAP']['tileSize'] ? _0x1ccf1f + _0x51fedf['MAP']['tileSize'] : _0x49633b;
                const _0x45ca05 = _0x4db5fa - _0x1057e4;
                const _0x180bbb = _0x49633b - _0x594690;
                const _0x2caed8 = Math['sqrt'](_0x45ca05 * _0x45ca05 + _0x180bbb * _0x180bbb);
                if (_0x2caed8 < _0x38e26f) {
                    if (_0x2caed8 === 0x0) {
                        const _0x4cd191 = _0x4db5fa - _0x2305c9;
                        const _0x45a7a9 = _0x2305c9 + _0x51fedf['MAP']['tileSize'] - _0x4db5fa;
                        const _0x467300 = _0x49633b - _0x1ccf1f;
                        const _0x274494 = _0x1ccf1f + _0x51fedf['MAP']['tileSize'] - _0x49633b;
                        const _0x3fcb4c = Math['min'](_0x4cd191, _0x45a7a9, _0x467300, _0x274494);
                        if (_0x3fcb4c === _0x4cd191)
                            _0x4db5fa = _0x2305c9 - _0x38e26f;
                        else if (_0x3fcb4c === _0x45a7a9)
                            _0x4db5fa = _0x2305c9 + _0x51fedf['MAP']['tileSize'] + _0x38e26f;
                        else if (_0x3fcb4c === _0x467300)
                            _0x49633b = _0x1ccf1f - _0x38e26f;
                        else
                            _0x49633b = _0x1ccf1f + _0x51fedf['MAP']['tileSize'] + _0x38e26f;
                    } else {
                        const _0xd9e0e = _0x38e26f - _0x2caed8;
                        _0x4db5fa += _0x45ca05 / _0x2caed8 * _0xd9e0e;
                        _0x49633b += _0x180bbb / _0x2caed8 * _0xd9e0e;
                    }
                }
            }
        }
        _0x5d8be4['x'] = _0x4db5fa - _0x5d8be4['width'] / 0x2;
        _0x5d8be4['y'] = _0x49633b - _0x5d8be4['height'] / 0x2;
    }
}
function _0x876538(_0x100134) {
    const _0x1594a4 = _0x100134['width'] / 0x2;
    for (let _0x3ee7df = 0x0; _0x3ee7df < 0x2; _0x3ee7df++) {
        let _0x2a851a = _0x100134['x'] + _0x100134['width'] / 0x2;
        let _0x2fca63 = _0x100134['y'] + _0x100134['height'] / 0x2;
        for (const _0x3a4d5e of _0x51fedf['ENTITIES']) {
            const _0xc8e03e = _0x2a851a < _0x3a4d5e['x'] ? _0x3a4d5e['x'] : _0x2a851a > _0x3a4d5e['x'] + _0x3a4d5e['w'] ? _0x3a4d5e['x'] + _0x3a4d5e['w'] : _0x2a851a;
            const _0x2f9313 = _0x2fca63 < _0x3a4d5e['y'] ? _0x3a4d5e['y'] : _0x2fca63 > _0x3a4d5e['y'] + _0x3a4d5e['h'] ? _0x3a4d5e['y'] + _0x3a4d5e['h'] : _0x2fca63;
            const _0x2da7f8 = _0x2a851a - _0xc8e03e;
            const _0x5008b8 = _0x2fca63 - _0x2f9313;
            const _0x21f39b = Math['sqrt'](_0x2da7f8 * _0x2da7f8 + _0x5008b8 * _0x5008b8);
            if (_0x21f39b < _0x1594a4 && _0x21f39b > 0x0) {
                const _0x550c05 = _0x1594a4 - _0x21f39b;
                const _0x3175f9 = _0x2da7f8 / _0x21f39b;
                const _0x24a0fd = _0x5008b8 / _0x21f39b;
                _0x2a851a += _0x3175f9 * _0x550c05;
                _0x2fca63 += _0x24a0fd * _0x550c05;
            } else if (_0x21f39b === 0x0) {
                const _0xe4d8dd = _0x2a851a - _0x3a4d5e['x'];
                const _0x1bf527 = _0x3a4d5e['x'] + _0x3a4d5e['w'] - _0x2a851a;
                const _0xd13a8e = _0x2fca63 - _0x3a4d5e['y'];
                const _0x298373 = _0x3a4d5e['y'] + _0x3a4d5e['h'] - _0x2fca63;
                const _0x52504d = Math['min'](_0xe4d8dd, _0x1bf527, _0xd13a8e, _0x298373);
                if (_0x52504d === _0xe4d8dd)
                    _0x2a851a = _0x3a4d5e['x'] - _0x1594a4;
                else if (_0x52504d === _0x1bf527)
                    _0x2a851a = _0x3a4d5e['x'] + _0x3a4d5e['w'] + _0x1594a4;
                else if (_0x52504d === _0xd13a8e)
                    _0x2fca63 = _0x3a4d5e['y'] - _0x1594a4;
                else
                    _0x2fca63 = _0x3a4d5e['y'] + _0x3a4d5e['h'] + _0x1594a4;
            }
        }
        _0x100134['x'] = _0x2a851a - _0x100134['width'] / 0x2;
        _0x100134['y'] = _0x2fca63 - _0x100134['height'] / 0x2;
    }
}
function _0xcec625() {
    if (_0x418683['isDead'])
        return;
    const _0x43db4d = _0x418683['width'] / 0x2;
    const _0x593d96 = _0x418683['x'] + _0x418683['width'] / 0x2;
    const _0xd1ed0a = _0x418683['y'] + _0x418683['height'] / 0x2;
    for (const _0x43cf7d in _0x56393e) {
        const _0x512d98 = _0x56393e[_0x43cf7d];
        if (_0x512d98['isDead'])
            continue;
        const _0x140c1e = _0x512d98['width'] / 0x2;
        const _0x7d16d6 = _0x43db4d + _0x140c1e;
        const _0x1e46fe = (_0x512d98['renderX'] ?? _0x512d98['x']) + _0x512d98['width'] / 0x2;
        const _0x146fc4 = (_0x512d98['renderY'] ?? _0x512d98['y']) + _0x512d98['height'] / 0x2;
        const _0x4ec9bb = _0x593d96 - _0x1e46fe;
        const _0x309d9c = _0xd1ed0a - _0x146fc4;
        const _0x3331dd = Math['sqrt'](_0x4ec9bb * _0x4ec9bb + _0x309d9c * _0x309d9c);
        if (_0x3331dd > 0x0 && _0x3331dd < _0x7d16d6) {
            const _0x572160 = _0x7d16d6 - _0x3331dd;
            const _0x727cf4 = _0x4ec9bb / _0x3331dd;
            const _0xcbbfe1 = _0x309d9c / _0x3331dd;
            _0x418683['x'] += _0x727cf4 * (_0x572160 * 0.25);
            _0x418683['y'] += _0xcbbfe1 * (_0x572160 * 0.25);
            _0x512d98['x'] -= _0x727cf4 * (_0x572160 * 0.75);
            _0x512d98['y'] -= _0xcbbfe1 * (_0x572160 * 0.75);
            _0x41b9c0(_0x512d98);
            _0x876538(_0x512d98);
            if (_0x512d98['renderX'] !== undefined) {
                _0x512d98['renderX'] = _0x512d98['x'];
                _0x512d98['renderY'] = _0x512d98['y'];
            }
            const _0x5d36c2 = _0x418683['vx'] * _0x727cf4 + _0x418683['vy'] * _0xcbbfe1;
            if (_0x5d36c2 < 0x0) {
                _0x418683['vx'] -= _0x5d36c2 * _0x727cf4 * 0.25;
                _0x418683['vy'] -= _0x5d36c2 * _0xcbbfe1 * 0.25;
            }
        }
    }
    _0x3cecb7();
    _0x5e7aef();
}
function _0x5e7aef() {
    if (_0x418683['isDead'])
        return;
    const _0x243b04 = _0x418683['scale'];
    const _0x236672 = _0x418683['width'] * _0x243b04 / 0x2;
    for (let _0x4b2777 = 0x0; _0x4b2777 < 0x2; _0x4b2777++) {
        let _0x2af1d2 = _0x418683['x'] + _0x418683['width'] / 0x2;
        let _0xe9fd1f = _0x418683['y'] + _0x418683['height'] / 0x2;
        for (const _0x2e07d7 of _0x51fedf['ENTITIES']) {
            const _0x20063a = _0x2af1d2 < _0x2e07d7['x'] ? _0x2e07d7['x'] : _0x2af1d2 > _0x2e07d7['x'] + _0x2e07d7['w'] ? _0x2e07d7['x'] + _0x2e07d7['w'] : _0x2af1d2;
            const _0x5be3dc = _0xe9fd1f < _0x2e07d7['y'] ? _0x2e07d7['y'] : _0xe9fd1f > _0x2e07d7['y'] + _0x2e07d7['h'] ? _0x2e07d7['y'] + _0x2e07d7['h'] : _0xe9fd1f;
            const _0x1a28c9 = _0x2af1d2 - _0x20063a;
            const _0x5f1872 = _0xe9fd1f - _0x5be3dc;
            const _0x4fdeb5 = Math['sqrt'](_0x1a28c9 * _0x1a28c9 + _0x5f1872 * _0x5f1872);
            if (_0x4fdeb5 < _0x236672 && _0x4fdeb5 > 0x0) {
                const _0xb3ccdd = _0x236672 - _0x4fdeb5;
                const _0x21c2fa = _0x1a28c9 / _0x4fdeb5;
                const _0x1827d1 = _0x5f1872 / _0x4fdeb5;
                _0x2af1d2 += _0x21c2fa * _0xb3ccdd;
                _0xe9fd1f += _0x1827d1 * _0xb3ccdd;
                const _0x1674c2 = _0x418683['vx'] * _0x21c2fa + _0x418683['vy'] * _0x1827d1;
                if (_0x1674c2 < 0x0) {
                    _0x418683['vx'] -= _0x1674c2 * _0x21c2fa;
                    _0x418683['vy'] -= _0x1674c2 * _0x1827d1;
                }
            } else if (_0x4fdeb5 === 0x0) {
                const _0x1023e8 = _0x2af1d2 - _0x2e07d7['x'];
                const _0x547793 = _0x2e07d7['x'] + _0x2e07d7['w'] - _0x2af1d2;
                const _0x601387 = _0xe9fd1f - _0x2e07d7['y'];
                const _0x27b7b9 = _0x2e07d7['y'] + _0x2e07d7['h'] - _0xe9fd1f;
                const _0x2be567 = Math['min'](_0x1023e8, _0x547793, _0x601387, _0x27b7b9);
                if (_0x2be567 === _0x1023e8)
                    _0x2af1d2 = _0x2e07d7['x'] - _0x236672;
                else if (_0x2be567 === _0x547793)
                    _0x2af1d2 = _0x2e07d7['x'] + _0x2e07d7['w'] + _0x236672;
                else if (_0x2be567 === _0x601387)
                    _0xe9fd1f = _0x2e07d7['y'] - _0x236672;
                else
                    _0xe9fd1f = _0x2e07d7['y'] + _0x2e07d7['h'] + _0x236672;
            }
        }
        _0x418683['x'] = _0x2af1d2 - _0x418683['width'] / 0x2;
        _0x418683['y'] = _0xe9fd1f - _0x418683['height'] / 0x2;
    }
}
function _0x523ed1(_0x43242a, _0x4f4012) {
    const _0x4a9960 = _0x51fedf['MAP']['layers']['find'](_0x579dc5 => _0x579dc5['name'] === 'trees');
    if (!_0x4a9960)
        return ![];
    const _0x38c916 = Math['floor'](_0x43242a / _0x51fedf['MAP']['tileSize']);
    const _0x5dd21d = Math['floor'](_0x4f4012 / _0x51fedf['MAP']['tileSize']);
    if (_0x38c916 < 0x0 || _0x38c916 >= _0x51fedf['MAP']['columns'] || _0x5dd21d < 0x0 || _0x5dd21d >= _0x51fedf['MAP']['rows'])
        return ![];
    return _0x4a9960['data'][_0x5dd21d * _0x51fedf['MAP']['columns'] + _0x38c916] === 0xb;
}
let _0x40d4a1 = null;
function _0x31278a() {
    const _0x431ee7 = _0x51fedf['MAP'];
    const _0x132f1f = _0x431ee7['layers']['find'](_0xe0687a => _0xe0687a['name'] === 'floor2');
    const _0x402794 = _0x431ee7['layers']['find'](_0xc91ee3 => _0xc91ee3['name'] === 'walls');
    if (!_0x132f1f || !_0x402794) {
        _0x40d4a1 = null;
        return;
    }
    const _0x29cf7b = _0x431ee7['columns'];
    const _0x33b06d = _0x431ee7['rows'];
    const _0x5fd7f1 = [];
    const _0x4f1e9b = [];
    const _0x4fc080 = new Set();
    for (let _0x4c51c3 = 0x0; _0x4c51c3 < _0x33b06d; _0x4c51c3++) {
        for (let _0x1e5026 = 0x0; _0x1e5026 < _0x29cf7b; _0x1e5026++) {
            const _0x2ef00d = _0x4c51c3 * _0x29cf7b + _0x1e5026;
            const _0x15378a = _0x132f1f['data'][_0x2ef00d];
            const _0x1b5bdf = _0x402794['data'][_0x2ef00d];
            if (_0x15378a === 0x2 || _0x15378a === 0x4) {
                _0x5fd7f1['push']({
                    'c': _0x1e5026,
                    'r': _0x4c51c3
                });
                if (_0x1b5bdf !== 0x0)
                    _0x4f1e9b['push']({
                        'c': _0x1e5026,
                        'r': _0x4c51c3
                    });
            }
            if (_0x1b5bdf !== 0x0)
                _0x4fc080['add'](_0x1e5026 + ',' + _0x4c51c3);
        }
    }
    const _0x1f8747 = new Set(_0x5fd7f1['map'](_0x1bb7fe => _0x1bb7fe['c'] + ',' + _0x1bb7fe['r']));
    const _0x15159e = [
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
                c: _0x2af00f,
                r: _0x2bd382
            } of _0x5fd7f1) {
        for (const [_0x4ed508, _0x2e532b] of _0x15159e) {
            const _0x4290ca = _0x2af00f + _0x4ed508, _0x30e321 = _0x2bd382 + _0x2e532b;
            const _0x5d0448 = _0x4290ca + ',' + _0x30e321;
            if (!_0x1f8747['has'](_0x5d0448))
                _0x4fc080['add'](_0x5d0448);
        }
    }
    _0x40d4a1 = {
        'wallSet': _0x4fc080,
        'floorTiles': _0x5fd7f1,
        'wallTiles': _0x4f1e9b,
        'interiorSet': _0x1f8747
    };
}
function _0x191d3b() {
    const _0x414b8f = _0x51fedf['MAP']['layers']['find'](_0x1a6c29 => _0x1a6c29['name'] === 'floor2');
    if (!_0x414b8f)
        return ![];
    const _0x588138 = Math['floor']((_0x418683['x'] + _0x418683['width'] / 0x2) / _0x51fedf['MAP']['tileSize']);
    const _0xcba7f1 = Math['floor']((_0x418683['y'] + _0x418683['height'] / 0x2) / _0x51fedf['MAP']['tileSize']);
    if (_0x588138 < 0x0 || _0x588138 >= _0x51fedf['MAP']['columns'] || _0xcba7f1 < 0x0 || _0xcba7f1 >= _0x51fedf['MAP']['rows'])
        return ![];
    const _0x4bc624 = _0x414b8f['data'][_0xcba7f1 * _0x51fedf['MAP']['columns'] + _0x588138];
    return _0x4bc624 === 0x2;
}
function _0x1225d6() {
    if (_0x418683['isDead']) {
        _0x51fedf['SHADOW']['polygon'] = null;
        return;
    }
    const _0xabb38 = _0x51fedf['MAP'];
    const _0x328d1b = _0x51fedf['SHADOW'];
    const _0x369042 = _0xabb38['tileSize'];
    if (!_0x40d4a1)
        _0x31278a();
    if (!_0x40d4a1) {
        _0x328d1b['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x22dca8,
        floorTiles: _0x456617
    } = _0x40d4a1;
    if (_0x456617['length'] === 0x0) {
        _0x328d1b['polygon'] = null;
        return;
    }
    if (!_0x191d3b()) {
        _0x328d1b['polygon'] = null;
        return;
    }
    const _0x239505 = _0x418683['x'] + _0x418683['width'] / 0x2;
    const _0x100868 = _0x418683['y'] + _0x418683['height'] / 0x2;
    if (!_0x40d4a1['_bounds']) {
        let _0x21586c = Infinity, _0x4145a8 = -Infinity, _0x1cdb80 = Infinity, _0x30a957 = -Infinity;
        for (const {
                    c: _0x5122db,
                    r: _0x2b7854
                } of _0x456617) {
            if (_0x5122db < _0x21586c)
                _0x21586c = _0x5122db;
            if (_0x5122db > _0x4145a8)
                _0x4145a8 = _0x5122db;
            if (_0x2b7854 < _0x1cdb80)
                _0x1cdb80 = _0x2b7854;
            if (_0x2b7854 > _0x30a957)
                _0x30a957 = _0x2b7854;
        }
        _0x40d4a1['_bounds'] = {
            'minC': Math['max'](0x0, _0x21586c - 0x1),
            'maxC': Math['min'](_0xabb38['columns'] - 0x1, _0x4145a8 + 0x1),
            'minR': Math['max'](0x0, _0x1cdb80 - 0x1),
            'maxR': Math['min'](_0xabb38['rows'] - 0x1, _0x30a957 + 0x1)
        };
        const _0x479fa9 = [];
        for (let _0x515d0b = _0x40d4a1['_bounds']['minR']; _0x515d0b <= _0x40d4a1['_bounds']['maxR']; _0x515d0b++) {
            for (let _0x22ca0a = _0x40d4a1['_bounds']['minC']; _0x22ca0a <= _0x40d4a1['_bounds']['maxC']; _0x22ca0a++) {
                if (_0x22dca8['has'](_0x22ca0a + ',' + _0x515d0b))
                    _0x479fa9['push'](_0x22ca0a, _0x515d0b);
            }
        }
        _0x40d4a1['_wallArr'] = _0x479fa9;
    }
    const {
        minC: _0x4c2d04,
        maxC: _0x10c7d0,
        minR: _0x3c94fb,
        maxR: _0x2bd605
    } = _0x40d4a1['_bounds'];
    const _0x5796c9 = _0x40d4a1['_wallArr'];
    const _0x28563c = 0.001;
    const _0x34e720 = new Set();
    const _0xd84470 = [];
    for (let _0xf37a93 = 0x0; _0xf37a93 < _0x5796c9['length']; _0xf37a93 += 0x2) {
        const _0x1f7fe4 = _0x5796c9[_0xf37a93], _0x4e6bfc = _0x5796c9[_0xf37a93 + 0x1];
        const _0x4d935e = [
            _0x1f7fe4 * _0x369042,
            _0x4e6bfc * _0x369042,
            _0x1f7fe4 * _0x369042 + _0x369042,
            _0x4e6bfc * _0x369042,
            _0x1f7fe4 * _0x369042,
            _0x4e6bfc * _0x369042 + _0x369042,
            _0x1f7fe4 * _0x369042 + _0x369042,
            _0x4e6bfc * _0x369042 + _0x369042
        ];
        for (let _0xb5c13e = 0x0; _0xb5c13e < _0x4d935e['length']; _0xb5c13e += 0x2) {
            const _0x1f6389 = _0x4d935e[_0xb5c13e], _0x59a8b2 = _0x4d935e[_0xb5c13e + 0x1];
            const _0x4e581c = Math['atan2'](_0x59a8b2 - _0x100868, _0x1f6389 - _0x239505);
            const _0x41881e = Math['round'](_0x4e581c * 0x4e20);
            if (!_0x34e720['has'](_0x41881e - 0x1)) {
                _0x34e720['add'](_0x41881e - 0x1);
                _0xd84470['push'](_0x4e581c - _0x28563c);
            }
            if (!_0x34e720['has'](_0x41881e)) {
                _0x34e720['add'](_0x41881e);
                _0xd84470['push'](_0x4e581c);
            }
            if (!_0x34e720['has'](_0x41881e + 0x1)) {
                _0x34e720['add'](_0x41881e + 0x1);
                _0xd84470['push'](_0x4e581c + _0x28563c);
            }
        }
    }
    _0xd84470['sort']((_0x3d443c, _0x2832e5) => _0x3d443c - _0x2832e5);
    const _0x1dc460 = Math['hypot']((_0x10c7d0 - _0x4c2d04 + 0x2) * _0x369042, (_0x2bd605 - _0x3c94fb + 0x2) * _0x369042);
    const _0x5aa655 = _0x432965 => {
        const _0x58da22 = Math['cos'](_0x432965);
        const _0x4e41e1 = Math['sin'](_0x432965);
        let _0x5f3c07 = _0x1dc460;
        for (let _0x507264 = 0x0; _0x507264 < _0x5796c9['length']; _0x507264 += 0x2) {
            const _0xea55a4 = _0x5796c9[_0x507264], _0x41f45b = _0x5796c9[_0x507264 + 0x1];
            const _0x16e682 = _0xea55a4 * _0x369042, _0x31c770 = _0x41f45b * _0x369042;
            const _0x2faf57 = _0x16e682 + _0x369042, _0x513fd2 = _0x31c770 + _0x369042;
            const _0x3e9b5b = _0x16e682 + _0x369042 * 0.5, _0x5de1ee = _0x31c770 + _0x369042 * 0.5;
            const _0x440b79 = Math['abs'](_0x3e9b5b - _0x239505) + Math['abs'](_0x5de1ee - _0x100868);
            if (_0x440b79 > _0x5f3c07 + _0x369042 * 1.5)
                continue;
            let _0x3df032, _0xf44543, _0x3467db;
            _0x3df032 = -_0x4e41e1 * _0x369042;
            if (Math['abs'](_0x3df032) >= 1e-10) {
                _0xf44543 = -(_0x31c770 - _0x100868) * _0x369042 / _0x3df032;
                _0x3467db = ((_0x16e682 - _0x239505) * _0x4e41e1 - (_0x31c770 - _0x100868) * _0x58da22) / _0x3df032;
                if (_0xf44543 > 0.001 && _0x3467db >= 0x0 && _0x3467db <= 0x1 && _0xf44543 < _0x5f3c07)
                    _0x5f3c07 = _0xf44543;
            }
            _0x3df032 = _0x58da22 * _0x369042;
            if (Math['abs'](_0x3df032) >= 1e-10) {
                _0xf44543 = (_0x2faf57 - _0x239505) * _0x369042 / _0x3df032;
                _0x3467db = ((_0x2faf57 - _0x239505) * _0x4e41e1 - (_0x31c770 - _0x100868) * _0x58da22) / _0x3df032;
                if (_0xf44543 > 0.001 && _0x3467db >= 0x0 && _0x3467db <= 0x1 && _0xf44543 < _0x5f3c07)
                    _0x5f3c07 = _0xf44543;
            }
            _0x3df032 = _0x4e41e1 * _0x369042;
            if (Math['abs'](_0x3df032) >= 1e-10) {
                _0xf44543 = (_0x513fd2 - _0x100868) * _0x369042 / _0x3df032;
                _0x3467db = ((_0x2faf57 - _0x239505) * _0x4e41e1 - (_0x513fd2 - _0x100868) * _0x58da22) / _0x3df032;
                if (_0xf44543 > 0.001 && _0x3467db >= 0x0 && _0x3467db <= 0x1 && _0xf44543 < _0x5f3c07)
                    _0x5f3c07 = _0xf44543;
            }
            _0x3df032 = -_0x58da22 * _0x369042;
            if (Math['abs'](_0x3df032) >= 1e-10) {
                _0xf44543 = -(_0x16e682 - _0x239505) * _0x369042 / _0x3df032;
                _0x3467db = ((_0x16e682 - _0x239505) * _0x4e41e1 - (_0x513fd2 - _0x100868) * _0x58da22) / _0x3df032;
                if (_0xf44543 > 0.001 && _0x3467db >= 0x0 && _0x3467db <= 0x1 && _0xf44543 < _0x5f3c07)
                    _0x5f3c07 = _0xf44543;
            }
        }
        const _0x4401ee = _0x5f3c07 < _0x1dc460 ? _0x5f3c07 + 0x2 : _0x5f3c07;
        return {
            'x': _0x239505 + _0x58da22 * _0x4401ee,
            'y': _0x100868 + _0x4e41e1 * _0x4401ee
        };
    };
    const _0x27a44d = [];
    for (let _0x5b9363 = 0x0; _0x5b9363 < _0xd84470['length']; _0x5b9363++) {
        const _0x29c68c = _0x5aa655(_0xd84470[_0x5b9363]);
        _0x27a44d['push'](_0x29c68c['x'], _0x29c68c['y']);
    }
    _0x328d1b['polygon'] = _0x27a44d['length'] >= 0x6 ? _0x27a44d : null;
}
function _0x36ad23(_0x268c0f, _0x22af96, _0x51cf17) {
    if (_0x418683['isDead'])
        return;
    if (!_0x40d4a1)
        return;
    const {
        floorTiles: _0x5df410,
        wallTiles: _0x5093f4
    } = _0x40d4a1;
    if (_0x5df410['length'] === 0x0)
        return;
    const _0x12dd67 = _0x51fedf['SHADOW'];
    const _0x58140c = _0x51fedf['MAP']['tileSize'];
    const _0x27995c = _0x51fedf['CAMERA']['width'];
    const _0x18263b = _0x51fedf['CAMERA']['height'];
    if (!_0x51fedf['SHADOW']['_buf'] || _0x51fedf['SHADOW']['_buf']['width'] !== _0x27995c || _0x51fedf['SHADOW']['_buf']['height'] !== _0x18263b) {
        _0x51fedf['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x51fedf['SHADOW']['_buf']['width'] = _0x27995c;
        _0x51fedf['SHADOW']['_buf']['height'] = _0x18263b;
    }
    const _0x4b7849 = _0x51fedf['SHADOW']['_buf'];
    const _0x12c8e9 = _0x4b7849['getContext']('2d');
    _0x12c8e9['clearRect'](0x0, 0x0, _0x27995c, _0x18263b);
    _0x12c8e9['fillStyle'] = 'rgba(0,0,0,0.92)';
    _0x12c8e9['beginPath']();
    for (const {
                c: _0x36cbee,
                r: _0x2fdb77
            } of _0x5df410) {
        const _0x5914f3 = Math['round'](_0x36cbee * _0x58140c - _0x22af96), _0x48f529 = Math['round'](_0x2fdb77 * _0x58140c - _0x51cf17);
        if (_0x5914f3 > _0x27995c || _0x48f529 > _0x18263b || _0x5914f3 + _0x58140c < 0x0 || _0x48f529 + _0x58140c < 0x0)
            continue;
        _0x12c8e9['rect'](_0x5914f3, _0x48f529, _0x58140c + 0x1, _0x58140c + 0x1);
    }
    _0x12c8e9['fill']();
    if (_0x5093f4['length'] > 0x0) {
        _0x12c8e9['globalCompositeOperation'] = 'destination-out';
        _0x12c8e9['fillStyle'] = 'rgba(0,0,0,1)';
        _0x12c8e9['beginPath']();
        for (const {
                    c: _0x204dd6,
                    r: _0x1d91f9
                } of _0x5093f4) {
            const _0x2ae28b = Math['round'](_0x204dd6 * _0x58140c - _0x22af96), _0x3d59ea = Math['round'](_0x1d91f9 * _0x58140c - _0x51cf17);
            if (_0x2ae28b > _0x27995c || _0x3d59ea > _0x18263b || _0x2ae28b + _0x58140c < 0x0 || _0x3d59ea + _0x58140c < 0x0)
                continue;
            _0x12c8e9['rect'](_0x2ae28b, _0x3d59ea, _0x58140c, _0x58140c);
        }
        _0x12c8e9['fill']();
        _0x12c8e9['globalCompositeOperation'] = 'source-over';
    }
    if (_0x12dd67['polygon'] && _0x12dd67['polygon']['length'] >= 0x6) {
        _0x12c8e9['globalCompositeOperation'] = 'destination-out';
        const _0x477eac = _0x12dd67['polygon'];
        _0x12c8e9['save']();
        _0x12c8e9['shadowBlur'] = 0xa;
        _0x12c8e9['shadowColor'] = 'rgba(0,0,0,1)';
        _0x12c8e9['beginPath']();
        _0x12c8e9['moveTo'](_0x477eac[0x0] - _0x22af96, _0x477eac[0x1] - _0x51cf17);
        for (let _0x3646d5 = 0x2; _0x3646d5 < _0x477eac['length']; _0x3646d5 += 0x2) {
            _0x12c8e9['lineTo'](_0x477eac[_0x3646d5] - _0x22af96, _0x477eac[_0x3646d5 + 0x1] - _0x51cf17);
        }
        _0x12c8e9['closePath']();
        _0x12c8e9['fill']();
        _0x12c8e9['restore']();
        _0x12c8e9['beginPath']();
        _0x12c8e9['moveTo'](_0x477eac[0x0] - _0x22af96, _0x477eac[0x1] - _0x51cf17);
        for (let _0x2e5aea = 0x2; _0x2e5aea < _0x477eac['length']; _0x2e5aea += 0x2) {
            _0x12c8e9['lineTo'](_0x477eac[_0x2e5aea] - _0x22af96, _0x477eac[_0x2e5aea + 0x1] - _0x51cf17);
        }
        _0x12c8e9['closePath']();
        _0x12c8e9['fill']();
        _0x12c8e9['globalCompositeOperation'] = 'source-over';
    }
    _0x268c0f['drawImage'](_0x4b7849, 0x0, 0x0);
}
function _0x3eb049(_0x43a66e) {
    let _0x11db6b = 0x0, _0x32a5c1 = 0x0;
    const _0xeb199d = _0x51fedf['INPUTS']['mouseX'] / _0x51fedf['SYSTEM']['viewScale'];
    const _0x338113 = _0x51fedf['INPUTS']['mouseY'] / _0x51fedf['SYSTEM']['viewScale'];
    const _0x45d67b = _0x418683['x'] - _0x51fedf['CAMERA']['x'] + _0x418683['width'] / 0x2;
    const _0x32d58a = _0x418683['y'] - _0x51fedf['CAMERA']['y'] + _0x418683['height'] / 0x2;
    const _0x5e5e4f = Math['atan2'](_0x338113 - _0x32d58a, _0xeb199d - _0x45d67b);
    if (_0x3ea23b !== 0x0 || _0x1e437c !== 0x0) {
        _0x11db6b = _0x3ea23b;
        _0x32a5c1 = _0x1e437c;
    } else if (_0x1c380e) {
        let _0x11b532 = 0x0, _0xe44ea3 = 0x0;
        if (_0x51fedf['INPUTS']['keys']['w'] || _0x51fedf['INPUTS']['keys']['arrowup'])
            _0x11b532 += 0x1;
        if (_0x51fedf['INPUTS']['keys']['s'] || _0x51fedf['INPUTS']['keys']['arrowdown'])
            _0x11b532 -= 0x1;
        if (_0x51fedf['INPUTS']['keys']['d'] || _0x51fedf['INPUTS']['keys']['arrowright'])
            _0xe44ea3 += 0x1;
        if (_0x51fedf['INPUTS']['keys']['a'] || _0x51fedf['INPUTS']['keys']['arrowleft'])
            _0xe44ea3 -= 0x1;
        if (_0x11b532 !== 0x0 || _0xe44ea3 !== 0x0) {
            const _0x4b08a4 = _0x5e5e4f + Math['atan2'](_0xe44ea3, _0x11b532);
            _0x11db6b = Math['cos'](_0x4b08a4);
            _0x32a5c1 = Math['sin'](_0x4b08a4);
        }
    } else {
        if (_0x51fedf['INPUTS']['keys']['w'] || _0x51fedf['INPUTS']['keys']['arrowup'])
            _0x32a5c1 -= 0x1;
        if (_0x51fedf['INPUTS']['keys']['s'] || _0x51fedf['INPUTS']['keys']['arrowdown'])
            _0x32a5c1 += 0x1;
        if (_0x51fedf['INPUTS']['keys']['a'] || _0x51fedf['INPUTS']['keys']['arrowleft'])
            _0x11db6b -= 0x1;
        if (_0x51fedf['INPUTS']['keys']['d'] || _0x51fedf['INPUTS']['keys']['arrowright'])
            _0x11db6b += 0x1;
        const _0x30b337 = _0x11db6b !== 0x0 || _0x32a5c1 !== 0x0;
        if (_0x30b337) {
            const _0x133cd8 = Math['sqrt'](_0x11db6b * _0x11db6b + _0x32a5c1 * _0x32a5c1);
            _0x11db6b /= _0x133cd8;
            _0x32a5c1 /= _0x133cd8;
        }
    }
    if (_0x51fedf['GAME_STATE'] === 'NIGHT' && _0x2a95c4 === 'Skinwalker') {
        if (_0x51fedf['NIGHT_ABILITY_OPEN'] || !_0x51fedf['CURRENT_TARGET']) {
            _0x11db6b = 0x0;
            _0x32a5c1 = 0x0;
            _0x418683['vx'] = 0x0;
            _0x418683['vy'] = 0x0;
            _0x418683['x'] = _0x51fedf['MAP']['columns'] * _0x51fedf['MAP']['tileSize'] / 0x2 - _0x418683['width'] / 0x2;
            _0x418683['y'] = _0x51fedf['MAP']['rows'] * _0x51fedf['MAP']['tileSize'] / 0x2 - _0x418683['height'] / 0x2;
        }
    }
    const _0x33970b = _0x11db6b !== 0x0 || _0x32a5c1 !== 0x0;
    const _0x1ac71c = (_0x51fedf['INPUTS']['keys']['shift'] || _0xdce99b || _0x54ff39) && _0x33970b;
    _0x418683['bopTimer'] = _0x1ac71c ? _0x418683['bopTimer'] + _0x43a66e : 0x0;
    _0x418683['scale'] = 0x1 + (_0x418683['bopTimer'] > 0x0 ? Math['sin'](_0x418683['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0xb923e8 = Math['pow'](0.001, _0x43a66e);
    const _0x529582 = _0x1ac71c ? 0x74a : 0x5d5;
    _0x418683['vx'] += _0x11db6b * _0x529582 * _0x43a66e;
    _0x418683['vy'] += _0x32a5c1 * _0x529582 * _0x43a66e;
    _0x418683['vx'] *= _0xb923e8;
    _0x418683['vy'] *= _0xb923e8;
    _0x418683['x'] += _0x418683['vx'] * _0x43a66e;
    _0x418683['y'] += _0x418683['vy'] * _0x43a66e;
    for (let _0x2bcbaf = 0x0; _0x2bcbaf < 0x3; _0x2bcbaf++)
        _0x3cecb7();
    for (let _0x337634 = 0x0; _0x337634 < 0x2; _0x337634++)
        _0x5e7aef();
    for (let _0x56d152 = 0x0; _0x56d152 < 0x2; _0x56d152++)
        _0xcec625();
    if (_0x418683['x'] < 0x0)
        _0x418683['x'] = 0x0;
    if (_0x418683['y'] < 0x0)
        _0x418683['y'] = 0x0;
    if (_0x418683['x'] + _0x418683['width'] > _0x51fedf['MAP']['columns'] * _0x51fedf['MAP']['tileSize'])
        _0x418683['x'] = _0x51fedf['MAP']['columns'] * _0x51fedf['MAP']['tileSize'] - _0x418683['width'];
    if (_0x418683['y'] + _0x418683['height'] > _0x51fedf['MAP']['rows'] * _0x51fedf['MAP']['tileSize'])
        _0x418683['y'] = _0x51fedf['MAP']['rows'] * _0x51fedf['MAP']['tileSize'] - _0x418683['height'];
    if (_0x43f689) {
        _0x418683['angle'] = _0xa439f6 + Math['PI'] / 0x2;
    } else if (_0x3ea23b !== 0x0 || _0x1e437c !== 0x0) {
        _0x418683['angle'] = Math['atan2'](_0x1e437c, _0x3ea23b) + Math['PI'] / 0x2;
    } else if (!_0x534efd) {
        _0x418683['angle'] = _0x5e5e4f + Math['PI'] / 0x2;
    }
    const _0x4e66ea = _0x418683['x'] + _0x418683['width'] / 0x2 - _0x51fedf['CAMERA']['width'] / 0x2;
    const _0x4d406c = _0x418683['y'] + _0x418683['height'] / 0x2 - _0x51fedf['CAMERA']['height'] / 0x2;
    if (_0x51fedf['CAMERA']['x'] === null || isNaN(_0x51fedf['CAMERA']['x']) || !isFinite(_0x51fedf['CAMERA']['x'])) {
        _0x51fedf['CAMERA']['x'] = _0x4e66ea;
        _0x51fedf['CAMERA']['y'] = _0x4d406c;
    } else {
        const _0x2b98b5 = 0x1 - Math['exp'](-Math['max'](0x0, _0x43a66e) * 0x28);
        _0x51fedf['CAMERA']['x'] += (_0x4e66ea - _0x51fedf['CAMERA']['x']) * _0x2b98b5;
        _0x51fedf['CAMERA']['y'] += (_0x4d406c - _0x51fedf['CAMERA']['y']) * _0x2b98b5;
    }
    for (const _0x2243f5 in _0x56393e) {
        const _0x170164 = _0x56393e[_0x2243f5];
        if (_0x170164['renderX'] === undefined) {
            _0x170164['renderX'] = _0x170164['x'];
            _0x170164['renderY'] = _0x170164['y'];
            _0x170164['renderAngle'] = _0x170164['angle'] || 0x0;
        }
        const _0x53dbcb = _0x170164['x'] + (_0x170164['vx'] || 0x0) * _0x43a66e;
        const _0x1ee575 = _0x170164['y'] + (_0x170164['vy'] || 0x0) * _0x43a66e;
        _0x170164['x'] = _0x53dbcb;
        _0x170164['y'] = _0x1ee575;
        const _0x38fdb7 = 0x1 - Math['exp'](-_0x43a66e * 0x12);
        const _0x362ceb = _0x170164['x'] - _0x170164['renderX'], _0x3e3b3a = _0x170164['y'] - _0x170164['renderY'];
        const _0x5c4ff2 = Math['sqrt'](_0x362ceb * _0x362ceb + _0x3e3b3a * _0x3e3b3a);
        const _0x471ac1 = 0xc8;
        if (_0x5c4ff2 > _0x471ac1) {
            _0x170164['renderX'] = _0x170164['x'] - _0x362ceb / _0x5c4ff2 * _0x471ac1;
            _0x170164['renderY'] = _0x170164['y'] - _0x3e3b3a / _0x5c4ff2 * _0x471ac1;
        }
        _0x170164['renderX'] += (_0x170164['x'] - _0x170164['renderX']) * _0x38fdb7;
        _0x170164['renderY'] += (_0x170164['y'] - _0x170164['renderY']) * _0x38fdb7;
        let _0x3701c1 = (_0x170164['angle'] || 0x0) - _0x170164['renderAngle'];
        while (_0x3701c1 < -Math['PI'])
            _0x3701c1 += Math['PI'] * 0x2;
        while (_0x3701c1 > Math['PI'])
            _0x3701c1 -= Math['PI'] * 0x2;
        _0x170164['renderAngle'] += _0x3701c1 * (0x1 - Math['exp'](-_0x43a66e * 0x14));
    }
    if (_0x51fedf['GAME_STATE'] === 'NIGHT') {
        _0x2c181d = Math['min'](0.6, _0x2c181d + _0x43a66e * 0.5);
    } else {
        _0x2c181d = Math['max'](0x0, _0x2c181d - _0x43a66e * 0.5);
    }
    _0x1225d6();
    _0x1e5fee();
}
function _0x923316(_0x25ca43, _0x5c5ec5, _0x26d66c, _0xad44af, _0x805f68 = !![]) {
    _0x25ca43['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x2a2dfc = _0x25ca43['measureText'](_0x5c5ec5)['width'];
    const _0x24be80 = _0x2a2dfc + 0x18;
    const _0x23797a = 0x1c;
    _0x25ca43['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x25ca43['beginPath']();
    if (_0x25ca43['roundRect']) {
        _0x25ca43['roundRect'](_0x26d66c - _0x24be80 / 0x2, _0xad44af - _0x23797a, _0x24be80, _0x23797a, 0x6);
    } else {
        _0x25ca43['rect'](_0x26d66c - _0x24be80 / 0x2, _0xad44af - _0x23797a, _0x24be80, _0x23797a);
    }
    _0x25ca43['fill']();
    if (_0x805f68) {
        _0x25ca43['beginPath']();
        _0x25ca43['moveTo'](_0x26d66c - 0x6, _0xad44af);
        _0x25ca43['lineTo'](_0x26d66c + 0x6, _0xad44af);
        _0x25ca43['lineTo'](_0x26d66c, _0xad44af + 0x6);
        _0x25ca43['fill']();
    }
    _0x25ca43['fillStyle'] = '#ffffff';
    _0x25ca43['textAlign'] = 'center';
    _0x25ca43['textBaseline'] = 'middle';
    _0x25ca43['fillText'](_0x5c5ec5, _0x26d66c, _0xad44af - _0x23797a / 0x2 + 0x1);
}
function _0x28c33b(_0x39eeb1, _0x3471cb, _0x489a4f, _0x23052d) {
    if (!_0x3471cb || _0x3471cb['length'] === 0x0)
        return;
    let _0x186654 = _0x23052d;
    for (let _0x32d086 = 0x0; _0x32d086 < _0x3471cb['length']; _0x32d086++) {
        _0x923316(_0x39eeb1, _0x3471cb[_0x32d086]['text'], _0x489a4f, _0x186654, _0x32d086 === 0x0);
        _0x186654 -= 0x24;
    }
}
function _0x10d5db() {
    if (!_0x51fedf['SYSTEM']['isReady'])
        return;
    _0x5e44a7['fillStyle'] = '#000000';
    _0x5e44a7['fillRect'](0x0, 0x0, _0x573b78['width'], _0x573b78['height']);
    _0x5e44a7['save']();
    try {
        _0x5e44a7['scale'](_0x51fedf['SYSTEM']['viewScale'], _0x51fedf['SYSTEM']['viewScale']);
        _0x5e44a7['imageSmoothingEnabled'] = ![];
        const _0x21dd79 = Math['floor'](_0x51fedf['CAMERA']['x'] || 0x0);
        const _0x118f70 = Math['floor'](_0x51fedf['CAMERA']['y'] || 0x0);
        const _0x240994 = Math['max'](0x0, Math['floor'](_0x21dd79 / _0x51fedf['MAP']['chunkSize']));
        const _0x152365 = Math['min'](_0x51fedf['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x21dd79 + _0x51fedf['CAMERA']['width']) / _0x51fedf['MAP']['chunkSize']));
        const _0x168b88 = Math['max'](0x0, Math['floor'](_0x118f70 / _0x51fedf['MAP']['chunkSize']));
        const _0x5849ee = Math['min'](_0x51fedf['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x118f70 + _0x51fedf['CAMERA']['height']) / _0x51fedf['MAP']['chunkSize']));
        for (let _0x5b3d18 = _0x168b88; _0x5b3d18 <= _0x5849ee; _0x5b3d18++)
            for (let _0x2a89d1 = _0x240994; _0x2a89d1 <= _0x152365; _0x2a89d1++) {
                const _0x1cbb6f = _0x2a89d1 * _0x51fedf['MAP']['chunkSize'] - _0x21dd79;
                const _0x1b9a89 = _0x5b3d18 * _0x51fedf['MAP']['chunkSize'] - _0x118f70;
                _0x5e44a7['drawImage'](_0x51fedf['MAP']['bgChunks'][_0x5b3d18][_0x2a89d1], _0x1cbb6f, _0x1b9a89, _0x51fedf['MAP']['chunkSize'] + 0x1, _0x51fedf['MAP']['chunkSize'] + 0x1);
            }
        if (_0x410d74['complete'] && _0x410d74['naturalWidth'] > 0x0) {
            const _0x1a989c = _0x51fedf['MAP']['tileSize'];
            const _0x56cbad = _0x1a989c * 0xa;
            const _0x4411d6 = _0x51fedf['MAP']['columns'] / 0x2 * _0x1a989c - _0x56cbad / 0x2 - _0x21dd79;
            const _0xc23799 = _0x51fedf['MAP']['rows'] / 0x2 * _0x1a989c - _0x56cbad / 0x2 - _0x118f70;
            _0x5e44a7['imageSmoothingEnabled'] = ![];
            _0x5e44a7['drawImage'](_0x410d74, _0x4411d6, _0xc23799, _0x56cbad, _0x56cbad);
        }
        if (_0x4a0a9e['complete'] && _0x4a0a9e['naturalWidth'] > 0x0) {
            _0x51fedf['ENTITIES']['forEach'](_0x467e0a => {
                if (_0x467e0a['type'] !== 'table')
                    return;
                _0x5e44a7['save']();
                _0x5e44a7['imageSmoothingEnabled'] = ![];
                const _0x443c51 = _0x4a0a9e['naturalWidth'] >= _0x4a0a9e['naturalHeight'];
                const _0x4b5dde = _0x467e0a['w'] >= _0x467e0a['h'];
                if (_0x443c51 === _0x4b5dde) {
                    _0x5e44a7['drawImage'](_0x4a0a9e, _0x467e0a['x'] - _0x21dd79, _0x467e0a['y'] - _0x118f70, _0x467e0a['w'], _0x467e0a['h']);
                } else {
                    _0x5e44a7['translate'](_0x467e0a['x'] - _0x21dd79 + _0x467e0a['w'] / 0x2, _0x467e0a['y'] - _0x118f70 + _0x467e0a['h'] / 0x2);
                    _0x5e44a7['rotate'](Math['PI'] / 0x2);
                    _0x5e44a7['drawImage'](_0x4a0a9e, -_0x467e0a['h'] / 0x2, -_0x467e0a['w'] / 0x2, _0x467e0a['h'], _0x467e0a['w']);
                }
                _0x5e44a7['restore']();
            });
        } else {
            _0x51fedf['ENTITIES']['forEach'](_0x52967a => {
                if (_0x52967a['type'] !== 'table')
                    return;
                _0x5e44a7['save']();
                _0x5e44a7['fillStyle'] = '#6b4423';
                _0x5e44a7['fillRect'](_0x52967a['x'] - _0x21dd79, _0x52967a['y'] - _0x118f70, _0x52967a['w'], _0x52967a['h']);
                _0x5e44a7['strokeStyle'] = '#422810';
                _0x5e44a7['lineWidth'] = 0x3;
                _0x5e44a7['strokeRect'](_0x52967a['x'] - _0x21dd79 + 0x1, _0x52967a['y'] - _0x118f70 + 0x1, _0x52967a['w'] - 0x2, _0x52967a['h'] - 0x2);
                _0x5e44a7['fillStyle'] = '#82532a';
                _0x5e44a7['fillRect'](_0x52967a['x'] - _0x21dd79 + 0x4, _0x52967a['y'] - _0x118f70 + 0x4, _0x52967a['w'] - 0x8, _0x52967a['h'] - 0x8);
                _0x5e44a7['restore']();
            });
        }
        if (_0x5a7e13) {
            if (_0x51fedf['MAP']['wallChunks'] && _0x51fedf['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x805d66 = _0x168b88; _0x805d66 <= _0x5849ee; _0x805d66++) {
                    for (let _0x47ff30 = _0x240994; _0x47ff30 <= _0x152365; _0x47ff30++) {
                        if (!_0x51fedf['MAP']['wallChunks'][_0x805d66] || !_0x51fedf['MAP']['wallChunks'][_0x805d66][_0x47ff30])
                            continue;
                        const _0x184bd9 = _0x47ff30 * _0x51fedf['MAP']['chunkSize'] - _0x21dd79;
                        const _0x333626 = _0x805d66 * _0x51fedf['MAP']['chunkSize'] - _0x118f70;
                        _0x5e44a7['drawImage'](_0x51fedf['MAP']['wallChunks'][_0x805d66][_0x47ff30], _0x184bd9, _0x333626, _0x51fedf['MAP']['chunkSize'] + 0x1, _0x51fedf['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x176b53 = _0x168b88; _0x176b53 <= _0x5849ee; _0x176b53++) {
                for (let _0x4873d9 = _0x240994; _0x4873d9 <= _0x152365; _0x4873d9++) {
                    const _0x4d56ea = _0x4873d9 * _0x51fedf['MAP']['chunkSize'] - _0x21dd79;
                    const _0x323634 = _0x176b53 * _0x51fedf['MAP']['chunkSize'] - _0x118f70;
                    _0x5e44a7['drawImage'](_0x51fedf['MAP']['fgChunks'][_0x176b53][_0x4873d9], _0x4d56ea, _0x323634, _0x51fedf['MAP']['chunkSize'] + 0x1, _0x51fedf['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x2bb057 = _0x51fedf['GAME_STATE'] === 'NIGHT' && _0x2a95c4 === 'Skinwalker' && !_0x418683['isDead'];
        const _0x2b9435 = _0x418683['x'] - _0x21dd79 + _0x418683['width'] / 0x2;
        const _0x324c0b = _0x418683['y'] - _0x118f70 + _0x418683['height'] / 0x2;
        const _0x49e0e6 = _0x418683['width'] * _0x418683['scale'] * 1.3;
        const _0x60994a = _0x418683['height'] * _0x418683['scale'] * 1.3;
        for (const _0x318b95 in _0x56393e) {
            const _0x3a21a3 = _0x56393e[_0x318b95];
            if (_0x3a21a3['isDead'])
                continue;
            const _0x38ff5f = (_0x3a21a3['renderX'] ?? _0x3a21a3['x']) - _0x21dd79 + _0x3a21a3['width'] / 0x2;
            const _0x22621e = (_0x3a21a3['renderY'] ?? _0x3a21a3['y']) - _0x118f70 + _0x3a21a3['height'] / 0x2;
            const _0x417b30 = Math['min'](0x2, Math['max'](0.3, _0x3a21a3['scale'] || 0x1));
            const _0x5856a8 = _0x3a21a3['width'] * _0x417b30 * 1.3;
            const _0x2cd663 = _0x3a21a3['height'] * _0x417b30 * 1.3;
            _0x5e44a7['save']();
            try {
                _0x5e44a7['translate'](_0x38ff5f, _0x22621e);
                _0x5e44a7['rotate'](_0x3a21a3['renderAngle'] ?? 0x0);
                if (_0x3a21a3['isDark'])
                    _0x5e44a7['filter'] = 'brightness(0)';
                _0x3fd95d(_0x5e44a7, _0x3a21a3['body'], _0x3a21a3['eyes'], _0x5856a8, _0x2cd663);
                if (_0x307372['has'](parseInt(_0x318b95)) && _0x48dc5e['complete'] && _0x48dc5e['naturalWidth'] > 0x0) {
                    _0x5e44a7['drawImage'](_0x48dc5e, -_0x5856a8 / 0x2, -_0x2cd663 / 0x2, _0x5856a8, _0x2cd663);
                }
                if (_0x3a21a3['isDark'])
                    _0x5e44a7['filter'] = 'none';
            } finally {
                _0x5e44a7['restore']();
            }
            if (!_0x523ed1((_0x3a21a3['renderX'] ?? _0x3a21a3['x']) + _0x3a21a3['width'] / 0x2, (_0x3a21a3['renderY'] ?? _0x3a21a3['y']) + _0x3a21a3['height'] / 0x2)) {
                _0x5e44a7['textAlign'] = 'center';
                _0x5e44a7['lineJoin'] = 'round';
                _0x5e44a7['lineWidth'] = 0x3;
                _0x5e44a7['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x5e44a7['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x5e44a7['fillStyle'] = _0x307372['has'](parseInt(_0x318b95)) ? '#cc88ff' : '#ffffff';
                const _0x10b4d8 = _0x3a21a3['isDark'] ? '???' : _0x3a21a3['name'] + (_0x3a21a3['isOwner'] ? '\x20[🗝️]' : '');
                _0x5e44a7['strokeText'](_0x10b4d8, _0x38ff5f, _0x22621e - _0x2cd663 / 0x2 - 0x10);
                _0x5e44a7['fillText'](_0x10b4d8, _0x38ff5f, _0x22621e - _0x2cd663 / 0x2 - 0x10);
            }
        }
        if (!_0x418683['isDead']) {
            _0x5e44a7['save']();
            try {
                _0x5e44a7['translate'](_0x2b9435, _0x324c0b);
                _0x5e44a7['rotate'](_0x418683['angle']);
                if (_0x2bb057)
                    _0x5e44a7['filter'] = 'brightness(0)';
                _0x3fd95d(_0x5e44a7, _0x56ed26, _0x45da82, _0x49e0e6, _0x60994a);
                if (_0x307372['has'](_0x2bb840) && _0x48dc5e['complete'] && _0x48dc5e['naturalWidth'] > 0x0) {
                    _0x5e44a7['drawImage'](_0x48dc5e, -_0x49e0e6 / 0x2, -_0x60994a / 0x2, _0x49e0e6, _0x60994a);
                }
                if (_0x2bb057)
                    _0x5e44a7['filter'] = 'none';
            } finally {
                _0x5e44a7['restore']();
            }
            if (!_0x523ed1(_0x418683['x'] + _0x418683['width'] / 0x2, _0x418683['y'] + _0x418683['height'] / 0x2)) {
                _0x5e44a7['textAlign'] = 'center';
                _0x5e44a7['lineJoin'] = 'round';
                _0x5e44a7['lineWidth'] = 0x3;
                _0x5e44a7['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x5e44a7['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x5e44a7['fillStyle'] = _0x307372['has'](_0x2bb840) ? '#cc88ff' : '#ffffff';
                const _0x153558 = _0x2bb057 ? '???' : _0x3f19ab + (_0x1b7bd5 ? '\x20[🗝️]' : '');
                _0x5e44a7['strokeText'](_0x153558, _0x2b9435, _0x324c0b - _0x60994a / 0x2 - 0x10);
                _0x5e44a7['fillText'](_0x153558, _0x2b9435, _0x324c0b - _0x60994a / 0x2 - 0x10);
            }
        }
        if (_0x51fedf['MAP']['wallChunks'] && _0x51fedf['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0xb021a6 = _0x168b88; _0xb021a6 <= _0x5849ee; _0xb021a6++)
                for (let _0x10980d = _0x240994; _0x10980d <= _0x152365; _0x10980d++) {
                    if (!_0x51fedf['MAP']['wallChunks'][_0xb021a6] || !_0x51fedf['MAP']['wallChunks'][_0xb021a6][_0x10980d])
                        continue;
                    const _0xfb814d = _0x10980d * _0x51fedf['MAP']['chunkSize'] - _0x21dd79;
                    const _0x5bd2fb = _0xb021a6 * _0x51fedf['MAP']['chunkSize'] - _0x118f70;
                    _0x5e44a7['drawImage'](_0x51fedf['MAP']['wallChunks'][_0xb021a6][_0x10980d], _0xfb814d, _0x5bd2fb, _0x51fedf['MAP']['chunkSize'] + 0x1, _0x51fedf['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x3fa46e of _0x51fedf['ENTITIES']) {
            if (_0x3fa46e['type'] !== 'npc')
                continue;
            const _0x3d7341 = _0x3fa46e['x'] - _0x21dd79 + _0x3fa46e['w'] / 0x2;
            const _0x44ea42 = _0x3fa46e['y'] - _0x118f70 + _0x3fa46e['h'] / 0x2;
            const _0x2c7c32 = _0x3fa46e['w'];
            const _0x5158d8 = _0x3fa46e['h'];
            _0x5e44a7['save']();
            _0x5e44a7['translate'](_0x3d7341, _0x44ea42);
            _0x5e44a7['rotate'](_0x3fa46e['angle'] !== undefined ? _0x3fa46e['angle'] : 0x0);
            _0x3fd95d(_0x5e44a7, _0x3fa46e['body'] || 'yanito932.png', _0x3fa46e['eyes'], _0x2c7c32, _0x5158d8);
            _0x5e44a7['restore']();
            _0x5e44a7['textAlign'] = 'center';
            _0x5e44a7['lineJoin'] = 'round';
            _0x5e44a7['lineWidth'] = 0x3;
            _0x5e44a7['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x5e44a7['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x5e44a7['fillStyle'] = '#aaaaaa';
            _0x5e44a7['strokeText'](_0x3fa46e['name'] || 'NPC', _0x3d7341, _0x44ea42 - _0x5158d8 / 0x2 - 0x10);
            _0x5e44a7['fillText'](_0x3fa46e['name'] || 'NPC', _0x3d7341, _0x44ea42 - _0x5158d8 / 0x2 - 0x10);
        }
        if (_0x418683['isDead']) {
            for (const _0x40b131 in _0x56393e) {
                const _0x401111 = _0x56393e[_0x40b131];
                if (!_0x401111['isDead'])
                    continue;
                const _0x213d2d = (_0x401111['renderX'] ?? _0x401111['x']) - _0x21dd79 + _0x401111['width'] / 0x2;
                const _0x4e0cad = (_0x401111['renderY'] ?? _0x401111['y']) - _0x118f70 + _0x401111['height'] / 0x2;
                const _0x221538 = _0x401111['width'] * (_0x401111['scale'] || 0x1) * 1.3;
                const _0x13001a = _0x401111['height'] * (_0x401111['scale'] || 0x1) * 1.3;
                _0x5e44a7['save']();
                try {
                    _0x5e44a7['translate'](_0x213d2d, _0x4e0cad);
                    _0x5e44a7['rotate'](_0x401111['renderAngle'] ?? 0x0);
                    _0x5e44a7['globalAlpha'] = 0.3;
                    _0x3fd95d(_0x5e44a7, _0x401111['body'], _0x401111['eyes'], _0x221538, _0x13001a);
                } finally {
                    _0x5e44a7['restore']();
                }
                if (!_0x523ed1((_0x401111['renderX'] ?? _0x401111['x']) + _0x401111['width'] / 0x2, (_0x401111['renderY'] ?? _0x401111['y']) + _0x401111['height'] / 0x2)) {
                    _0x5e44a7['save']();
                    _0x5e44a7['globalAlpha'] = 0.3;
                    _0x5e44a7['textAlign'] = 'center';
                    _0x5e44a7['lineJoin'] = 'round';
                    _0x5e44a7['lineWidth'] = 0x3;
                    _0x5e44a7['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x5e44a7['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x5e44a7['fillStyle'] = '#ffffff';
                    const _0x4c923b = _0x401111['name'] + (_0x401111['isOwner'] ? '\x20[🗝️]' : '');
                    _0x5e44a7['strokeText'](_0x4c923b, _0x213d2d, _0x4e0cad - _0x13001a / 0x2 - 0x10);
                    _0x5e44a7['fillText'](_0x4c923b, _0x213d2d, _0x4e0cad - _0x13001a / 0x2 - 0x10);
                    _0x5e44a7['restore']();
                }
            }
            _0x5e44a7['save']();
            try {
                _0x5e44a7['translate'](_0x2b9435, _0x324c0b);
                _0x5e44a7['rotate'](_0x418683['angle']);
                _0x5e44a7['globalAlpha'] = 0.3;
                _0x3fd95d(_0x5e44a7, _0x56ed26, _0x45da82, _0x49e0e6, _0x60994a);
            } finally {
                _0x5e44a7['restore']();
            }
            if (!_0x523ed1(_0x418683['x'] + _0x418683['width'] / 0x2, _0x418683['y'] + _0x418683['height'] / 0x2)) {
                _0x5e44a7['save']();
                _0x5e44a7['globalAlpha'] = 0.3;
                _0x5e44a7['textAlign'] = 'center';
                _0x5e44a7['lineJoin'] = 'round';
                _0x5e44a7['lineWidth'] = 0x3;
                _0x5e44a7['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x5e44a7['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x5e44a7['fillStyle'] = '#ffffff';
                const _0x3b8aa6 = _0x3f19ab + (_0x1b7bd5 ? '\x20[🗝️]' : '');
                _0x5e44a7['strokeText'](_0x3b8aa6, _0x2b9435, _0x324c0b - _0x60994a / 0x2 - 0x10);
                _0x5e44a7['fillText'](_0x3b8aa6, _0x2b9435, _0x324c0b - _0x60994a / 0x2 - 0x10);
                _0x5e44a7['restore']();
            }
        }
        for (let _0x47005c = _0x168b88; _0x47005c <= _0x5849ee; _0x47005c++)
            for (let _0x1d1a63 = _0x240994; _0x1d1a63 <= _0x152365; _0x1d1a63++) {
                const _0x4d4ad2 = _0x1d1a63 * _0x51fedf['MAP']['chunkSize'] - _0x21dd79;
                const _0x59d155 = _0x47005c * _0x51fedf['MAP']['chunkSize'] - _0x118f70;
                _0x5e44a7['drawImage'](_0x51fedf['MAP']['fgChunks'][_0x47005c][_0x1d1a63], _0x4d4ad2, _0x59d155, _0x51fedf['MAP']['chunkSize'] + 0x1, _0x51fedf['MAP']['chunkSize'] + 0x1);
            }
        if (_0x51fedf['EDITOR']['enabled'] && _0x51fedf['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x5ab9b3 = _0x51fedf['INPUTS']['mouseX'] / _0x51fedf['SYSTEM']['viewScale'] + _0x51fedf['CAMERA']['x'];
            const _0x20f2ba = _0x51fedf['INPUTS']['mouseY'] / _0x51fedf['SYSTEM']['viewScale'] + _0x51fedf['CAMERA']['y'];
            const _0xbb1aa5 = Math['floor'](_0x5ab9b3 / _0x51fedf['MAP']['tileSize']);
            const _0x4eb311 = Math['floor'](_0x20f2ba / _0x51fedf['MAP']['tileSize']);
            if (_0xbb1aa5 >= 0x0 && _0xbb1aa5 < _0x51fedf['MAP']['columns'] && _0x4eb311 >= 0x0 && _0x4eb311 < _0x51fedf['MAP']['rows']) {
                const _0x409a92 = _0xbb1aa5 * _0x51fedf['MAP']['tileSize'] - _0x21dd79;
                const _0x2851c4 = _0x4eb311 * _0x51fedf['MAP']['tileSize'] - _0x118f70;
                _0x5e44a7['save']();
                _0x5e44a7['globalAlpha'] = 0.5;
                if (_0x51fedf['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x11fb04 = _0x51fedf['EDITOR']['selectedTileGid'] - 0x1;
                    _0x5e44a7['drawImage'](_0x3c9769, _0x11fb04 % _0x51fedf['MAP']['tilesetCols'] * _0x51fedf['MAP']['tileSize'], Math['floor'](_0x11fb04 / _0x51fedf['MAP']['tilesetCols']) * _0x51fedf['MAP']['tileSize'], _0x51fedf['MAP']['tileSize'], _0x51fedf['MAP']['tileSize'], _0x409a92, _0x2851c4, _0x51fedf['MAP']['tileSize'], _0x51fedf['MAP']['tileSize']);
                } else {
                    _0x5e44a7['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x5e44a7['fillRect'](_0x409a92, _0x2851c4, _0x51fedf['MAP']['tileSize'], _0x51fedf['MAP']['tileSize']);
                }
                _0x5e44a7['restore']();
            }
        }
        _0x36ad23(_0x5e44a7, _0x21dd79, _0x118f70);
        if (_0x2c181d > 0x0) {
            _0x5e44a7['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x2c181d + ')';
            _0x5e44a7['fillRect'](0x0, 0x0, _0x51fedf['CAMERA']['width'], _0x51fedf['CAMERA']['height']);
        }
        for (const _0x20903b in _0x56393e) {
            const _0x38621b = _0x56393e[_0x20903b];
            if (_0x38621b['isDead'] && !_0x418683['isDead'])
                continue;
            const _0x389cf8 = (_0x38621b['renderX'] ?? _0x38621b['x']) - _0x21dd79 + _0x38621b['width'] / 0x2;
            const _0x354915 = (_0x38621b['renderY'] ?? _0x38621b['y']) - _0x118f70 + _0x38621b['height'] / 0x2;
            _0x28c33b(_0x5e44a7, _0x38621b['chats'], _0x389cf8, _0x354915 - _0x38621b['height'] / 0x2 - 0x20);
        }
        _0x28c33b(_0x5e44a7, _0x418683['chats'], _0x2b9435, _0x324c0b - _0x418683['height'] / 0x2 - 0x20);
    } finally {
        _0x5e44a7['restore']();
    }
}
function _0x3e3f2b(_0x303fb9) {
    if (!_0x51fedf['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x3e3f2b);
    let _0x1313b2 = (_0x303fb9 - _0x51fedf['SYSTEM']['lastTime']) / 0x3e8;
    _0x51fedf['SYSTEM']['lastTime'] = _0x303fb9;
    if (_0x1313b2 > 0.1)
        _0x1313b2 = 0.1;
    if (_0x1313b2 < 0x0 || isNaN(_0x1313b2))
        _0x1313b2 = 0.016;
    if (_0x5a7e13) {
        _0x3423c(_0x1313b2);
        _0x10d5db();
        return;
    }
    if (!_0x2bb840)
        return;
    _0x3eb049(_0x1313b2);
    _0x23235c['tick'](_0x303fb9);
    _0x10d5db();
}
function _0x46c844() {
    const _0x10d423 = Math['ceil'](_0x51fedf['MAP']['columns'] * _0x51fedf['MAP']['tileSize'] / _0x51fedf['MAP']['chunkSize']);
    const _0x5097df = Math['ceil'](_0x51fedf['MAP']['rows'] * _0x51fedf['MAP']['tileSize'] / _0x51fedf['MAP']['chunkSize']);
    _0x51fedf['MAP']['bgChunks'] = [];
    _0x51fedf['MAP']['fgChunks'] = [];
    _0x51fedf['MAP']['wallChunks'] = [];
    for (let _0x22ad5c = 0x0; _0x22ad5c < _0x5097df; _0x22ad5c++) {
        _0x51fedf['MAP']['bgChunks'][_0x22ad5c] = [];
        _0x51fedf['MAP']['fgChunks'][_0x22ad5c] = [];
        _0x51fedf['MAP']['wallChunks'][_0x22ad5c] = [];
        for (let _0x23ef4a = 0x0; _0x23ef4a < _0x10d423; _0x23ef4a++) {
            const _0x2da138 = document['createElement']('canvas');
            _0x2da138['width'] = _0x2da138['height'] = _0x51fedf['MAP']['chunkSize'];
            const _0x8b47ad = document['createElement']('canvas');
            _0x8b47ad['width'] = _0x8b47ad['height'] = _0x51fedf['MAP']['chunkSize'];
            const _0x4966ce = document['createElement']('canvas');
            _0x4966ce['width'] = _0x4966ce['height'] = _0x51fedf['MAP']['chunkSize'];
            _0x51fedf['MAP']['bgChunks'][_0x22ad5c][_0x23ef4a] = _0x2da138;
            _0x51fedf['MAP']['fgChunks'][_0x22ad5c][_0x23ef4a] = _0x8b47ad;
            _0x51fedf['MAP']['wallChunks'][_0x22ad5c][_0x23ef4a] = _0x4966ce;
            _0x6fc196(_0x23ef4a, _0x22ad5c);
        }
    }
}
function _0x6fc196(_0x120516, _0x278e07) {
    const _0x10e4d3 = _0x51fedf['MAP']['bgChunks'][_0x278e07][_0x120516]['getContext']('2d', { 'alpha': !![] });
    const _0x203183 = _0x51fedf['MAP']['fgChunks'][_0x278e07][_0x120516]['getContext']('2d', { 'alpha': !![] });
    const _0x235d1c = _0x51fedf['MAP']['wallChunks'][_0x278e07] && _0x51fedf['MAP']['wallChunks'][_0x278e07][_0x120516] ? _0x51fedf['MAP']['wallChunks'][_0x278e07][_0x120516]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x10e4d3['imageSmoothingEnabled'] = _0x203183['imageSmoothingEnabled'] = ![];
    if (_0x235d1c)
        _0x235d1c['imageSmoothingEnabled'] = ![];
    _0x10e4d3['clearRect'](0x0, 0x0, _0x51fedf['MAP']['chunkSize'], _0x51fedf['MAP']['chunkSize']);
    _0x203183['clearRect'](0x0, 0x0, _0x51fedf['MAP']['chunkSize'], _0x51fedf['MAP']['chunkSize']);
    if (_0x235d1c)
        _0x235d1c['clearRect'](0x0, 0x0, _0x51fedf['MAP']['chunkSize'], _0x51fedf['MAP']['chunkSize']);
    const _0x17c01d = Math['floor'](_0x120516 * _0x51fedf['MAP']['chunkSize'] / _0x51fedf['MAP']['tileSize']);
    const _0x4b2450 = Math['ceil']((_0x120516 + 0x1) * _0x51fedf['MAP']['chunkSize'] / _0x51fedf['MAP']['tileSize']);
    const _0xd0922 = Math['floor'](_0x278e07 * _0x51fedf['MAP']['chunkSize'] / _0x51fedf['MAP']['tileSize']);
    const _0x56ad3b = Math['ceil']((_0x278e07 + 0x1) * _0x51fedf['MAP']['chunkSize'] / _0x51fedf['MAP']['tileSize']);
    const _0x438917 = 0.5;
    const _0x280749 = _0x51fedf['MAP']['tileSize'] - _0x438917 * 0x2;
    _0x51fedf['MAP']['layers']['forEach'](_0x449704 => {
        const _0x3650c5 = _0x449704['name'] === 'walls';
        const _0x4fa554 = _0x449704['name'] === 'trees' ? _0x203183 : _0x3650c5 ? _0x235d1c || _0x10e4d3 : _0x10e4d3;
        for (let _0x5111db = Math['max'](0x0, _0xd0922); _0x5111db < Math['min'](_0x51fedf['MAP']['rows'], _0x56ad3b); _0x5111db++) {
            for (let _0x8c96dc = Math['max'](0x0, _0x17c01d); _0x8c96dc < Math['min'](_0x51fedf['MAP']['columns'], _0x4b2450); _0x8c96dc++) {
                let _0x6c02f2 = _0x449704['data'][_0x5111db * _0x51fedf['MAP']['columns'] + _0x8c96dc];
                if (_0x449704['name'] === 'floor2' && _0x51fedf['MAP']['doors'] && _0x51fedf['MAP']['doors'][_0x5111db * _0x51fedf['MAP']['columns'] + _0x8c96dc]) {
                    _0x6c02f2 = 0x2;
                }
                if (_0x6c02f2 > 0x0) {
                    const _0xd0d154 = _0x6c02f2 - 0x1;
                    const _0x509631 = _0xd0d154 % _0x51fedf['MAP']['tilesetCols'] * _0x51fedf['MAP']['tileSize'] + _0x438917;
                    const _0xfe6df0 = Math['floor'](_0xd0d154 / _0x51fedf['MAP']['tilesetCols']) * _0x51fedf['MAP']['tileSize'] + _0x438917;
                    const _0x3757de = _0x8c96dc * _0x51fedf['MAP']['tileSize'] - _0x120516 * _0x51fedf['MAP']['chunkSize'];
                    const _0x5d000d = _0x5111db * _0x51fedf['MAP']['tileSize'] - _0x278e07 * _0x51fedf['MAP']['chunkSize'];
                    if (_0x6c02f2 === 0x4) {
                        const _0x1b6462 = 0x1;
                        const _0x2be4f1 = _0x1b6462 % _0x51fedf['MAP']['tilesetCols'] * _0x51fedf['MAP']['tileSize'] + _0x438917;
                        const _0x34a5f8 = Math['floor'](_0x1b6462 / _0x51fedf['MAP']['tilesetCols']) * _0x51fedf['MAP']['tileSize'] + _0x438917;
                        _0x10e4d3['drawImage'](_0x3c9769, _0x2be4f1, _0x34a5f8, _0x280749, _0x280749, _0x3757de, _0x5d000d, _0x51fedf['MAP']['tileSize'], _0x51fedf['MAP']['tileSize']);
                        let _0x4bdeec = _0x51fedf['MAP']['doors'] ? _0x51fedf['MAP']['doors'][_0x5111db * _0x51fedf['MAP']['columns'] + _0x8c96dc] : null;
                        if (!_0x4bdeec) {
                            const _0x195754 = _0x51fedf['MAP']['layers']['find'](_0x53026a => _0x53026a['name'] === 'walls');
                            const _0x2d3e48 = _0x5111db > 0x0 && _0x195754 && _0x195754['data'][(_0x5111db - 0x1) * _0x51fedf['MAP']['columns'] + _0x8c96dc] > 0x0;
                            const _0x5e1a4e = _0x5111db < _0x51fedf['MAP']['rows'] - 0x1 && _0x195754 && _0x195754['data'][(_0x5111db + 0x1) * _0x51fedf['MAP']['columns'] + _0x8c96dc] > 0x0;
                            const _0x28844e = _0x8c96dc > 0x0 && _0x195754 && _0x195754['data'][_0x5111db * _0x51fedf['MAP']['columns'] + _0x8c96dc - 0x1] > 0x0;
                            const _0x3eb834 = _0x8c96dc < _0x51fedf['MAP']['columns'] - 0x1 && _0x195754 && _0x195754['data'][_0x5111db * _0x51fedf['MAP']['columns'] + _0x8c96dc + 0x1] > 0x0;
                            if (_0x28844e && _0x3eb834)
                                _0x4bdeec = _0x5111db < _0x51fedf['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x2d3e48 && _0x5e1a4e)
                                _0x4bdeec = _0x8c96dc < _0x51fedf['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x2559dd = 0x0;
                        if (_0x4bdeec === 'bottom')
                            _0x2559dd = Math['PI'] / 0x2;
                        else if (_0x4bdeec === 'left')
                            _0x2559dd = Math['PI'];
                        else if (_0x4bdeec === 'top')
                            _0x2559dd = -Math['PI'] / 0x2;
                        else if (_0x4bdeec === 'right')
                            _0x2559dd = 0x0;
                        if (_0x2559dd !== 0x0) {
                            _0x4fa554['save']();
                            _0x4fa554['translate'](_0x3757de + _0x51fedf['MAP']['tileSize'] / 0x2, _0x5d000d + _0x51fedf['MAP']['tileSize'] / 0x2);
                            _0x4fa554['rotate'](_0x2559dd);
                            _0x4fa554['drawImage'](_0x3c9769, _0x509631, _0xfe6df0, _0x280749, _0x280749, -_0x51fedf['MAP']['tileSize'] / 0x2, -_0x51fedf['MAP']['tileSize'] / 0x2, _0x51fedf['MAP']['tileSize'], _0x51fedf['MAP']['tileSize']);
                            _0x4fa554['restore']();
                        } else {
                            _0x4fa554['drawImage'](_0x3c9769, _0x509631, _0xfe6df0, _0x280749, _0x280749, _0x3757de, _0x5d000d, _0x51fedf['MAP']['tileSize'], _0x51fedf['MAP']['tileSize']);
                        }
                    } else {
                        _0x4fa554['drawImage'](_0x3c9769, _0x509631, _0xfe6df0, _0x280749, _0x280749, _0x3757de, _0x5d000d, _0x51fedf['MAP']['tileSize'], _0x51fedf['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x780e1c() {
    _0x3c9769['crossOrigin'] = 'Anonymous';
    _0x3c9769['onload'] = () => {
        _0x51fedf['MAP']['tilesetCols'] = 0x3;
        _0xa0b7e8();
    };
    _0x3c9769['onerror'] = () => {
        _0x51fedf['MAP']['tilesetCols'] = 0x1;
        _0xa0b7e8();
    };
    _0x3c9769['src'] = 'assets/tilesheet.png';
    _0x410d74['crossOrigin'] = 'Anonymous';
    _0x410d74['onload'] = _0xa0b7e8;
    _0x410d74['onerror'] = () => {
        _0xa0b7e8();
    };
    _0x410d74['src'] = 'assets/center.png';
    _0x4a0a9e['crossOrigin'] = 'Anonymous';
    _0x4a0a9e['onload'] = _0xa0b7e8;
    _0x4a0a9e['onerror'] = () => {
        _0xa0b7e8();
    };
    _0x4a0a9e['src'] = 'assets/table.png';
}
function _0xa0b7e8() {
    _0x51fedf['SYSTEM']['assetsLoaded']++;
    if (_0x51fedf['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x3e9038();
    }
}
function _0x3d7269(_0x232c10, _0x1719ea) {
    if (!_0x1b7bd5 || !_0x8fccb9)
        return;
    const _0x4b1a71 = _0x232c10 / _0x51fedf['SYSTEM']['viewScale'] + _0x51fedf['CAMERA']['x'];
    const _0x3335a2 = _0x1719ea / _0x51fedf['SYSTEM']['viewScale'] + _0x51fedf['CAMERA']['y'];
    const _0x210833 = Math['floor'](_0x4b1a71 / _0x51fedf['MAP']['tileSize']);
    const _0x55f649 = Math['floor'](_0x3335a2 / _0x51fedf['MAP']['tileSize']);
    if (_0x210833 >= 0x0 && _0x210833 < _0x51fedf['MAP']['columns'] && _0x55f649 >= 0x0 && _0x55f649 < _0x51fedf['MAP']['rows'])
        _0x8fccb9['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x51fedf['EDITOR']['selectedLayer'],
            'col': _0x210833,
            'row': _0x55f649,
            'gid': _0x51fedf['EDITOR']['selectedTileGid']
        }));
}
function _0x97e24d() {
    const _0x31edaf = document['getElementById']('palette');
    if (!_0x31edaf || _0x31edaf['children']['length'] > 0x0)
        return;
    const _0x418e67 = 0x40;
    const _0x34c088 = _0x3c9769;
    const _0x131e5a = document['createElement']('div');
    _0x131e5a['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x1c4fe1 = document['createElement']('canvas');
    _0x1c4fe1['width'] = 0xc0;
    _0x1c4fe1['height'] = 0xa0;
    _0x1c4fe1['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x131e5a['appendChild'](_0x1c4fe1);
    const _0x518431 = document['createElement']('div');
    _0x518431['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x131e5a['appendChild'](_0x518431);
    let _0x57c7a9 = 0x0, _0x2ec1fe = 0x0;
    let _0x589c5a = ![], _0x5e8c3d = 0x0, _0x3ebc1a = 0x0, _0x284e2e = 0x0, _0x233ac6 = 0x0;
    function _0xfddb87() {
        const _0x1feb72 = _0x1c4fe1['getContext']('2d');
        _0x1feb72['clearRect'](0x0, 0x0, _0x1c4fe1['width'], _0x1c4fe1['height']);
        _0x1feb72['imageSmoothingEnabled'] = ![];
        if (_0x34c088['complete'] && _0x34c088['naturalWidth'] > 0x0) {
            _0x1feb72['drawImage'](_0x34c088, _0x57c7a9, _0x2ec1fe, _0x1c4fe1['width'], _0x1c4fe1['height'], 0x0, 0x0, _0x1c4fe1['width'], _0x1c4fe1['height']);
        }
        _0x1feb72['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x1feb72['lineWidth'] = 0x1;
        const _0x1a9a2e = Math['floor'](_0x57c7a9 / _0x418e67);
        const _0x4e5069 = Math['floor'](_0x2ec1fe / _0x418e67);
        for (let _0x3942f0 = _0x1a9a2e; _0x3942f0 <= _0x1a9a2e + Math['ceil'](_0x1c4fe1['width'] / _0x418e67) + 0x1; _0x3942f0++) {
            const _0x1ef5a7 = _0x3942f0 * _0x418e67 - _0x57c7a9;
            _0x1feb72['beginPath']();
            _0x1feb72['moveTo'](_0x1ef5a7, 0x0);
            _0x1feb72['lineTo'](_0x1ef5a7, _0x1c4fe1['height']);
            _0x1feb72['stroke']();
        }
        for (let _0x584c84 = _0x4e5069; _0x584c84 <= _0x4e5069 + Math['ceil'](_0x1c4fe1['height'] / _0x418e67) + 0x1; _0x584c84++) {
            const _0x481817 = _0x584c84 * _0x418e67 - _0x2ec1fe;
            _0x1feb72['beginPath']();
            _0x1feb72['moveTo'](0x0, _0x481817);
            _0x1feb72['lineTo'](_0x1c4fe1['width'], _0x481817);
            _0x1feb72['stroke']();
        }
    }
    function _0x151b0e() {
        const _0x350cb9 = Math['max'](0x1, Math['ceil'](_0x34c088['naturalWidth'] / _0x418e67));
        const _0x23f457 = _0x51fedf['EDITOR']['selectedTileGid'];
        if (_0x23f457 <= 0x0) {
            _0x518431['style']['display'] = 'none';
            return;
        }
        const _0x5bf386 = _0x23f457 - 0x1;
        const _0x5b8fef = _0x5bf386 % _0x350cb9;
        const _0x4cdf4f = Math['floor'](_0x5bf386 / _0x350cb9);
        const _0x204cbf = _0x5b8fef * _0x418e67 - _0x57c7a9;
        const _0x489a59 = _0x4cdf4f * _0x418e67 - _0x2ec1fe;
        _0x518431['style']['display'] = 'block';
        _0x518431['style']['left'] = _0x204cbf + 'px';
        _0x518431['style']['top'] = _0x489a59 + 'px';
    }
    _0x34c088['onload'] = () => {
        _0xfddb87();
        _0x151b0e();
    };
    if (_0x34c088['complete'] && _0x34c088['naturalWidth'] > 0x0) {
        _0xfddb87();
        _0x151b0e();
    }
    _0x131e5a['addEventListener']('mousedown', _0x1beef8 => {
        if (_0x1beef8['button'] === 0x0) {
            _0x589c5a = !![];
            _0x5e8c3d = _0x1beef8['clientX'];
            _0x3ebc1a = _0x1beef8['clientY'];
            _0x284e2e = _0x57c7a9;
            _0x233ac6 = _0x2ec1fe;
            _0x131e5a['style']['cursor'] = 'grabbing';
            _0x1beef8['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x2ad7ec => {
        if (!_0x589c5a)
            return;
        const _0x4119a3 = _0x5e8c3d - _0x2ad7ec['clientX'];
        const _0xb9349a = _0x3ebc1a - _0x2ad7ec['clientY'];
        const _0x3c46ae = Math['max'](0x0, _0x34c088['naturalWidth'] - _0x1c4fe1['width']);
        const _0x133641 = Math['max'](0x0, _0x34c088['naturalHeight'] - _0x1c4fe1['height']);
        _0x57c7a9 = Math['max'](0x0, Math['min'](_0x3c46ae, _0x284e2e + _0x4119a3));
        _0x2ec1fe = Math['max'](0x0, Math['min'](_0x133641, _0x233ac6 + _0xb9349a));
        _0xfddb87();
        _0x151b0e();
    });
    window['addEventListener']('mouseup', _0x48b21a => {
        if (_0x589c5a) {
            _0x589c5a = ![];
            _0x131e5a['style']['cursor'] = 'grab';
        }
    });
    _0x131e5a['addEventListener']('click', _0x101f68 => {
        const _0x30ca25 = _0x131e5a['getBoundingClientRect']();
        const _0x28989c = _0x101f68['clientX'] - _0x30ca25['left'] + _0x57c7a9;
        const _0x2bfd2e = _0x101f68['clientY'] - _0x30ca25['top'] + _0x2ec1fe;
        const _0x5da58e = Math['max'](0x1, Math['ceil'](_0x34c088['naturalWidth'] / _0x418e67));
        const _0x4546e5 = Math['floor'](_0x28989c / _0x418e67);
        const _0x587762 = Math['floor'](_0x2bfd2e / _0x418e67);
        const _0x229f1b = _0x587762 * _0x5da58e + _0x4546e5 + 0x1;
        _0x51fedf['EDITOR']['selectedTileGid'] = _0x229f1b;
        _0x151b0e();
    });
    _0x31edaf['appendChild'](_0x131e5a);
    const _0x4711f9 = document['createElement']('div');
    _0x4711f9['className'] = 'tile-btn\x20eraser-btn';
    _0x4711f9['title'] = 'Eraser\x20(gid\x200)';
    _0x4711f9['onclick'] = () => {
        _0x51fedf['EDITOR']['selectedTileGid'] = 0x0;
        _0x518431['style']['display'] = 'none';
    };
    _0x31edaf['appendChild'](_0x4711f9);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x51fedf['EDITOR']['enabled'] = !_0x51fedf['EDITOR']['enabled'];
        const _0x4c900b = document['getElementById']('editor-tools');
        if (_0x51fedf['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x4c900b['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x4c900b['style']['display'] = 'none';
        }
    });
    const _0x469c66 = document['getElementById']('start-game-btn');
    if (_0x469c66) {
        _0x469c66['addEventListener']('click', () => {
            if (_0x8fccb9)
                _0x8fccb9['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x4e2c50 = document['getElementById']('rolelist-toggle-btn');
    if (_0x4e2c50) {
        let _0x11ea36 = 'subalignments';
        _0x4e2c50['addEventListener']('click', () => {
            if (_0x11ea36 === 'subalignments')
                _0x11ea36 = 'precise';
            else if (_0x11ea36 === 'precise')
                _0x11ea36 = 'off';
            else
                _0x11ea36 = 'subalignments';
            _0x4e2c50['innerText'] = 'Role\x20List:\x20' + _0x11ea36['charAt'](0x0)['toUpperCase']() + _0x11ea36['slice'](0x1);
            if (_0x8fccb9)
                _0x8fccb9['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x11ea36
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x3dce9c => {
        if (_0x3dce9c['id'] === 'editor-toggle-btn' || _0x3dce9c['id'] === 'start-game-btn' || _0x3dce9c['id'] === 'rolelist-toggle-btn')
            return;
        _0x3dce9c['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x1c01f4 => _0x1c01f4['classList']['remove']('active'));
            _0x3dce9c['classList']['add']('active');
            _0x51fedf['EDITOR']['selectedLayer'] = _0x3dce9c['dataset']['layer'];
        });
    });
}
function _0x2692e2(_0xd3da06) {
    if (_0x8fccb9)
        _0x8fccb9['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0xd3da06
        }));
}
function _0x293f0e(_0x2df0cd) {
    if (_0x8fccb9)
        _0x8fccb9['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x2df0cd
        }));
}
function _0x185b9f(_0x285459, _0x28dc5a, _0x215ab4, _0x1d9a9b) {
    const _0x4a11fc = document['getElementById']('admin-panel');
    if (_0x4a11fc)
        _0x4a11fc['remove']();
    if (_0x4a11fc && _0x4a11fc['dataset']['target'] === String(_0x285459))
        return;
    const _0x4eaed6 = document['createElement']('div');
    _0x4eaed6['id'] = 'admin-panel';
    _0x4eaed6['dataset']['target'] = String(_0x285459);
    _0x4eaed6['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x89f3ea = document['createElement']('div');
    _0x89f3ea['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x89f3ea['textContent'] = _0x28dc5a;
    _0x4eaed6['appendChild'](_0x89f3ea);
    const _0x9a6194 = document['createElement']('button');
    _0x9a6194['textContent'] = 'Kick';
    _0x9a6194['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x9a6194['onmouseenter'] = () => _0x9a6194['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x9a6194['onmouseleave'] = () => _0x9a6194['style']['background'] = 'transparent';
    _0x9a6194['onclick'] = () => {
        _0x2692e2(_0x285459);
        _0x4eaed6['remove']();
    };
    _0x4eaed6['appendChild'](_0x9a6194);
    const _0x38cbd3 = document['createElement']('button');
    _0x38cbd3['textContent'] = 'Ban';
    _0x38cbd3['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x38cbd3['onmouseenter'] = () => _0x38cbd3['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x38cbd3['onmouseleave'] = () => _0x38cbd3['style']['background'] = 'transparent';
    _0x38cbd3['onclick'] = () => {
        _0x293f0e(_0x285459);
        _0x4eaed6['remove']();
    };
    _0x4eaed6['appendChild'](_0x38cbd3);
    document['body']['appendChild'](_0x4eaed6);
    const _0x15430a = _0x4eaed6['offsetWidth'] || 0x91;
    const _0x4fdaae = _0x4eaed6['offsetHeight'] || 0x50;
    let _0x183d1c = _0x215ab4 - _0x15430a;
    let _0x46d26f = _0x1d9a9b;
    if (_0x183d1c < 0x4)
        _0x183d1c = _0x215ab4;
    if (_0x46d26f + _0x4fdaae > window['innerHeight'] - 0x4)
        _0x46d26f = window['innerHeight'] - _0x4fdaae - 0x4;
    _0x4eaed6['style']['left'] = _0x183d1c + 'px';
    _0x4eaed6['style']['top'] = _0x46d26f + 'px';
    const _0x2057f3 = _0x3f1298 => {
        if (!_0x4eaed6['contains'](_0x3f1298['target'])) {
            _0x4eaed6['remove']();
            document['removeEventListener']('mousedown', _0x2057f3);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x2057f3), 0x0);
}
function _0xcb846a() {
    const _0x23d98f = document['getElementById']('leaderboard-list');
    _0x23d98f['innerHTML'] = '';
    const _0x5e1785 = document['createElement']('div');
    _0x5e1785['className'] = 'leaderboard-entry';
    const _0x4ffeb3 = document['createElement']('span');
    _0x4ffeb3['textContent'] = _0x3f19ab + (_0x1b7bd5 ? '\x20[🗝️]' : '');
    if (_0x307372['has'](_0x2bb840) && !_0x418683['isDead']) {
        _0x4ffeb3['style']['color'] = '#cc88ff';
    }
    _0x5e1785['appendChild'](_0x4ffeb3);
    _0x23d98f['appendChild'](_0x5e1785);
    for (const _0x1d9858 in _0x56393e) {
        const _0x2daa65 = document['createElement']('div');
        _0x2daa65['className'] = 'leaderboard-entry';
        const _0x1945c6 = document['createElement']('span');
        _0x1945c6['textContent'] = _0x56393e[_0x1d9858]['name'] + (_0x56393e[_0x1d9858]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x307372['has'](parseInt(_0x1d9858)) && !_0x56393e[_0x1d9858]['isDead']) {
            _0x1945c6['style']['color'] = '#cc88ff';
        }
        _0x2daa65['appendChild'](_0x1945c6);
        if (_0x1b7bd5 && !_0x56393e[_0x1d9858]['isOwner']) {
            const _0x51b620 = _0x56393e[_0x1d9858]['id'];
            const _0x6fd134 = _0x56393e[_0x1d9858]['name'];
            _0x2daa65['style']['cursor'] = 'context-menu';
            _0x2daa65['addEventListener']('contextmenu', _0x347721 => {
                _0x347721['preventDefault']();
                _0x347721['stopPropagation']();
                _0x185b9f(_0x51b620, _0x6fd134, _0x347721['clientX'], _0x347721['clientY']);
            });
        }
        _0x23d98f['appendChild'](_0x2daa65);
    }
}
window['addEventListener']('resize', _0x3e9038);
function _0x3e9038() {
    _0x573b78['width'] = window['innerWidth'];
    _0x573b78['height'] = window['innerHeight'];
    _0x51fedf['SYSTEM']['viewScale'] = Math['max'](_0x573b78['width'] / _0x3a43ae, _0x573b78['height'] / _0x55516c);
    _0x51fedf['CAMERA']['width'] = _0x573b78['width'] / _0x51fedf['SYSTEM']['viewScale'];
    _0x51fedf['CAMERA']['height'] = _0x573b78['height'] / _0x51fedf['SYSTEM']['viewScale'];
    _0x5e44a7['imageSmoothingEnabled'] = ![];
}
function _0x1a14b0(_0x2688e4) {
    if (_0x2688e4['ctrlKey'] || _0x2688e4['metaKey']) {
        if (_0x2688e4['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x2688e4['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x2688e4['code'])) {
            _0x2688e4['preventDefault']();
            _0x2688e4['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x1a14b0, { 'passive': ![] });
window['addEventListener']('keydown', _0x1a14b0, { 'passive': ![] });
window['addEventListener']('keydown', _0x30c390 => {
    const _0xc30e9c = _0x30c390['key']['toLowerCase']();
    if (_0xc30e9c === 'tab') {
        _0x30c390['preventDefault']();
        const _0x3a2981 = document['getElementById']('will-ui');
        const _0x3415c5 = document['getElementById']('will-input');
        if (_0x3a2981['style']['display'] === 'flex') {
            _0x3a2981['style']['display'] = 'none';
            if (_0x8fccb9)
                _0x8fccb9['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x3415c5['value']
                }));
            _0x3415c5['blur']();
        } else {
            _0x3a2981['style']['display'] = 'flex';
            _0x3415c5['focus']();
            for (let _0x3085b4 in _0x51fedf['INPUTS']['keys'])
                _0x51fedf['INPUTS']['keys'][_0x3085b4] = ![];
        }
        return;
    }
    if (_0x30c390['key'] === 'Enter') {
        if (_0x5a7e13) {
            const _0x5dd654 = document['getElementById']('play-btn');
            if (_0x5dd654)
                _0x5dd654['click']();
            return;
        }
        if (!_0x8fccb9 || _0x8fccb9['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x562d4a = document['getElementById']('chat-ui');
        const _0x2f3141 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x2f3141) {
            const _0x185a38 = _0x2f3141['value']['trim']();
            if (_0x185a38['length'] > 0x0) {
                _0x8fccb9['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x185a38
                }));
            }
            _0x2f3141['value'] = '';
            _0x562d4a['style']['display'] = 'none';
            _0x2f3141['blur']();
        } else {
            _0x562d4a['style']['display'] = 'block';
            _0x2f3141['focus']();
            for (let _0x466646 in _0x51fedf['INPUTS']['keys'])
                _0x51fedf['INPUTS']['keys'][_0x466646] = ![];
        }
        _0x30c390['preventDefault']();
        return;
    }
    if (_0x30c390['key'] === 'Escape') {
        const _0x1b75a6 = document['getElementById']('guide-ui');
        if (_0x1b75a6 && _0x1b75a6['style']['display'] === 'flex') {
            _0x1b75a6['style']['display'] = 'none';
            return;
        }
        const _0x3998d2 = document['getElementById']('ability-ui');
        if (_0x3998d2 && _0x3998d2['style']['display'] === 'block') {
            _0x3998d2['style']['display'] = 'none';
            return;
        }
        const _0x54e29e = document['getElementById']('settings-panel');
        if (_0x54e29e && _0x54e29e['style']['display'] === 'block') {
            _0x54e29e['style']['display'] = 'none';
            return;
        }
        const _0x340024 = document['getElementById']('mayor-confirm-dialog');
        if (_0x340024 && _0x340024['style']['display'] === 'flex') {
            _0x340024['style']['display'] = 'none';
            return;
        }
        const _0x12d67f = document['getElementById']('target-chooser-ui');
        if (_0x12d67f && _0x12d67f['style']['display'] === 'flex') {
            _0x12d67f['style']['display'] = 'none';
            return;
        }
        const _0x390138 = document['getElementById']('chat-ui');
        const _0x524044 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x524044) {
            _0x524044['value'] = '';
            _0x390138['style']['display'] = 'none';
            _0x524044['blur']();
            _0x30c390['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x51fedf['INPUTS']['keys']['hasOwnProperty'](_0xc30e9c))
            _0x51fedf['INPUTS']['keys'][_0xc30e9c] = !![];
        if (!_0x8fccb9 || _0x8fccb9['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0xc30e9c === 'h' && !_0x30c390['repeat']) {
            const _0x50809b = document['getElementById']('guide-ui');
            if (_0x50809b) {
                _0x50809b['style']['display'] = _0x50809b['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0xc30e9c === 't' && !_0x30c390['repeat']) {
            if (_0x418683['isDead'])
                return;
            if (_0x2a95c4 === 'Mayor') {
                if (_0x307372['has'](_0x2bb840)) {
                    _0x1116a4('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x3a08f5 = document['getElementById']('mayor-confirm-dialog');
                if (_0x3a08f5)
                    _0x3a08f5['style']['display'] = 'flex';
                return;
            }
            if (_0x51fedf['GAME_STATE'] === 'NIGHT') {
                if (!_0x51fedf['NIGHT_ABILITY_OPEN']) {
                    _0x1116a4('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x30eec1 = document['getElementById']('ability-ui');
                if (_0x30eec1) {
                    if (_0x30eec1['style']['display'] === 'block') {
                        _0x30eec1['style']['display'] = 'none';
                    } else {
                        _0x473d66();
                        _0x30eec1['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x51fedf['GAME_STATE'] === 'DAY_DISCUSS' || _0x51fedf['GAME_STATE'] === 'DAY_VOTE') {
                _0x1116a4('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0xc30e9c === 'e' && !_0x418683['isDead']) {
            const _0x4de712 = Date['now']();
            if (!window['_lastDoorSend'] || _0x4de712 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x4de712;
                _0x8fccb9['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0xae913a => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x186c6b = _0xae913a['key']['toLowerCase']();
        if (_0x51fedf['INPUTS']['keys']['hasOwnProperty'](_0x186c6b))
            _0x51fedf['INPUTS']['keys'][_0x186c6b] = ![];
    }
});
window['addEventListener']('mousemove', _0x5174d8 => {
    _0x51fedf['INPUTS']['mouseX'] = _0x5174d8['clientX'];
    _0x51fedf['INPUTS']['mouseY'] = _0x5174d8['clientY'];
    if (_0x51fedf['INPUTS']['isMouseDown'] && _0x51fedf['EDITOR']['enabled']) {
        _0x3d7269(_0x5174d8['clientX'], _0x5174d8['clientY']);
    }
});
window['addEventListener']('mousedown', _0x103fc5 => {
    if (_0x103fc5['target']['closest']('#editor-ui') || _0x103fc5['target']['closest']('#leaderboard-ui') || _0x103fc5['target']['closest']('#chat-log-ui') || _0x103fc5['target']['closest']('#target-chooser-ui') || _0x103fc5['target']['closest']('#guide-ui') || _0x103fc5['target']['closest']('#role-list-ui') || _0x103fc5['target']['closest']('#ability-ui') || _0x103fc5['target']['closest']('#settings-panel') || _0x103fc5['target']['closest']('#mayor-confirm-dialog') || _0x103fc5['target']['closest']('#mobile-action-bar') || _0x103fc5['target']['closest']('#mobile-top-bar') || _0x103fc5['target']['closest']('#mobile-joystick-zone') || _0x103fc5['target']['closest']('#mobile-chat-overlay') || _0x103fc5['target']['closest']('#will-ui') || _0x103fc5['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x103fc5['button'] === 0x0) {
        _0x51fedf['INPUTS']['isMouseDown'] = !![];
        if (_0x51fedf['EDITOR']['enabled'])
            _0x3d7269(_0x103fc5['clientX'], _0x103fc5['clientY']);
    }
});
window['addEventListener']('mouseup', _0x4b9979 => {
    _0x51fedf['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x30f14d => {
    if (_0x30f14d['target']['closest']('#settings-btn'))
        return;
    const _0x439d63 = document['getElementById']('leaderboard-list');
    const _0x4352e4 = document['getElementById']('leaderboard-toggle');
    if (_0x439d63['style']['display'] === 'none') {
        _0x439d63['style']['display'] = 'flex';
        _0x4352e4['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x439d63['style']['display'] = 'none';
        _0x4352e4['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x1b2948 = document['getElementById']('close-target-btn');
if (_0x1b2948) {
    _0x1b2948['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x4329bc = document['getElementById']('close-guide-btn');
if (_0x4329bc) {
    _0x4329bc['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x4d59aa = document['getElementById']('role-list-header');
if (_0x4d59aa) {
    _0x4d59aa['addEventListener']('click', () => {
        const _0xd438b0 = document['getElementById']('role-list-items');
        const _0x5ceb5a = document['getElementById']('role-list-toggle');
        if (_0xd438b0['style']['display'] === 'none') {
            _0xd438b0['style']['display'] = 'flex';
            _0x5ceb5a['style']['transform'] = 'rotate(0deg)';
        } else {
            _0xd438b0['style']['display'] = 'none';
            _0x5ceb5a['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x4617ec() {
    const _0x223214 = document['getElementById']('mobile-joystick-zone');
    const _0xec59cc = document['getElementById']('mobile-joystick-base');
    const _0x222117 = document['getElementById']('mobile-joystick-knob');
    if (_0x223214 && _0xec59cc && _0x222117) {
        const _0x40aef2 = 0x3e;
        const _0x1741c8 = (_0x53b433, _0x293077) => {
            const _0x5cd484 = _0xec59cc['getBoundingClientRect']();
            const _0x2f33de = _0x5cd484['left'] + _0x5cd484['width'] / 0x2;
            const _0xeb97d0 = _0x5cd484['top'] + _0x5cd484['height'] / 0x2;
            const _0x52bbb4 = _0x53b433 - _0x2f33de;
            const _0x3419ed = _0x293077 - _0xeb97d0;
            const _0x4f3195 = Math['hypot'](_0x52bbb4, _0x3419ed);
            if (_0x4f3195 === 0x0) {
                _0x3ea23b = 0x0;
                _0x1e437c = 0x0;
                _0x54ff39 = ![];
                _0x222117['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x2a0854 = Math['min'](_0x4f3195, _0x40aef2);
            const _0x4e92b5 = _0x52bbb4 / _0x4f3195 * _0x2a0854;
            const _0x33a8d4 = _0x3419ed / _0x4f3195 * _0x2a0854;
            _0x3ea23b = _0x4e92b5 / _0x40aef2;
            _0x1e437c = _0x33a8d4 / _0x40aef2;
            _0x54ff39 = _0x4f3195 >= _0x40aef2 * 0.75;
            _0x222117['style']['transform'] = 'translate(' + _0x4e92b5 + 'px,\x20' + _0x33a8d4 + 'px)';
        };
        const _0x5926a8 = _0x4128e5 => {
            for (let _0x2e866f = 0x0; _0x2e866f < _0x4128e5['changedTouches']['length']; _0x2e866f++) {
                const _0x1fb230 = _0x4128e5['changedTouches'][_0x2e866f];
                if (_0xe463c0 === null) {
                    _0xe463c0 = _0x1fb230['identifier'];
                    _0x3cea28 = !![];
                    _0x1741c8(_0x1fb230['clientX'], _0x1fb230['clientY']);
                    break;
                }
            }
        };
        const _0x3cf653 = _0x3ca9db => {
            for (let _0xfadca7 = 0x0; _0xfadca7 < _0x3ca9db['changedTouches']['length']; _0xfadca7++) {
                const _0x25e525 = _0x3ca9db['changedTouches'][_0xfadca7];
                if (_0x25e525['identifier'] === _0xe463c0) {
                    _0x1741c8(_0x25e525['clientX'], _0x25e525['clientY']);
                    break;
                }
            }
        };
        const _0xdc1420 = _0x36dbd2 => {
            for (let _0x56011a = 0x0; _0x56011a < _0x36dbd2['changedTouches']['length']; _0x56011a++) {
                const _0x1aa55b = _0x36dbd2['changedTouches'][_0x56011a];
                if (_0x1aa55b['identifier'] === _0xe463c0) {
                    _0xe463c0 = null;
                    _0x3cea28 = ![];
                    _0x3ea23b = 0x0;
                    _0x1e437c = 0x0;
                    _0x54ff39 = ![];
                    _0x222117['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x223214['addEventListener']('touchstart', _0x3dad28 => {
            _0x3dad28['preventDefault']();
            _0x5926a8(_0x3dad28);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x3cf653, { 'passive': !![] });
        window['addEventListener']('touchend', _0xdc1420, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0xdc1420, { 'passive': !![] });
    }
    const _0x3ac1d7 = (_0x47ef1b, _0x58edd6) => {
        const _0x13cf01 = _0x47ef1b / _0x51fedf['SYSTEM']['viewScale'];
        const _0x2ba06c = _0x58edd6 / _0x51fedf['SYSTEM']['viewScale'];
        const _0x513ccf = _0x418683['x'] - _0x51fedf['CAMERA']['x'] + _0x418683['width'] / 0x2;
        const _0x352431 = _0x418683['y'] - _0x51fedf['CAMERA']['y'] + _0x418683['height'] / 0x2;
        _0xa439f6 = Math['atan2'](_0x2ba06c - _0x352431, _0x13cf01 - _0x513ccf);
        _0x43f689 = !![];
        _0x51fedf['INPUTS']['mouseX'] = _0x47ef1b;
        _0x51fedf['INPUTS']['mouseY'] = _0x58edd6;
    };
    _0x573b78['addEventListener']('touchstart', _0x21c70b => {
        if (_0x5a7e13)
            return;
        for (let _0x302efd = 0x0; _0x302efd < _0x21c70b['changedTouches']['length']; _0x302efd++) {
            const _0x9e6aff = _0x21c70b['changedTouches'][_0x302efd];
            if (_0x9e6aff['identifier'] !== _0xe463c0 && _0x11a8c8 === null) {
                _0x11a8c8 = _0x9e6aff['identifier'];
                _0x3ac1d7(_0x9e6aff['clientX'], _0x9e6aff['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x573b78['addEventListener']('touchmove', _0x586c7a => {
        if (_0x5a7e13)
            return;
        for (let _0x1856b6 = 0x0; _0x1856b6 < _0x586c7a['changedTouches']['length']; _0x1856b6++) {
            const _0x5bb9a4 = _0x586c7a['changedTouches'][_0x1856b6];
            if (_0x5bb9a4['identifier'] === _0x11a8c8) {
                _0x3ac1d7(_0x5bb9a4['clientX'], _0x5bb9a4['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x5594a1 = _0x381e90 => {
        for (let _0x364106 = 0x0; _0x364106 < _0x381e90['changedTouches']['length']; _0x364106++) {
            const _0x55355e = _0x381e90['changedTouches'][_0x364106];
            if (_0x55355e['identifier'] === _0x11a8c8) {
                _0x11a8c8 = null;
                _0x43f689 = ![];
                break;
            }
        }
    };
    _0x573b78['addEventListener']('touchend', _0x5594a1, { 'passive': !![] });
    _0x573b78['addEventListener']('touchcancel', _0x5594a1, { 'passive': !![] });
    const _0x1ff371 = document['getElementById']('mob-sprint-btn');
    if (_0x1ff371) {
        _0x1ff371['addEventListener']('click', _0x3322c7 => {
            _0x3322c7['stopPropagation']();
            _0xdce99b = !_0xdce99b;
            _0x1ff371['classList']['toggle']('active', _0xdce99b);
        });
    }
    const _0x265e93 = document['getElementById']('mob-interact-btn');
    if (_0x265e93) {
        _0x265e93['addEventListener']('click', _0x18c8fe => {
            _0x18c8fe['stopPropagation']();
            if (!_0x418683['isDead']) {
                const _0x3baad8 = Date['now']();
                if (!window['_lastDoorSend'] || _0x3baad8 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x3baad8;
                    if (_0x8fccb9 && _0x8fccb9['readyState'] === WebSocket['OPEN'])
                        _0x8fccb9['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x1764ab = document['getElementById']('mob-ability-btn');
    if (_0x1764ab) {
        _0x1764ab['addEventListener']('click', _0x1b764d => {
            _0x1b764d['stopPropagation']();
            if (_0x418683['isDead'])
                return;
            if (_0x2a95c4 === 'Mayor') {
                if (_0x307372['has'](_0x2bb840)) {
                    _0x1116a4('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x5878fa = document['getElementById']('mayor-confirm-dialog');
                if (_0x5878fa)
                    _0x5878fa['style']['display'] = 'flex';
                return;
            }
            if (_0x51fedf['GAME_STATE'] === 'NIGHT') {
                if (!_0x51fedf['NIGHT_ABILITY_OPEN']) {
                    _0x1116a4('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x191646 = document['getElementById']('ability-ui');
                if (_0x191646) {
                    if (_0x191646['style']['display'] === 'block') {
                        _0x191646['style']['display'] = 'none';
                    } else {
                        _0x473d66();
                        _0x191646['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x51fedf['GAME_STATE'] === 'DAY_DISCUSS' || _0x51fedf['GAME_STATE'] === 'DAY_VOTE') {
                _0x1116a4('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x3471f0 = document['getElementById']('mob-will-btn');
    const _0x237119 = document['getElementById']('will-ui');
    const _0x21b929 = document['getElementById']('will-input');
    const _0x3ddc7f = document['getElementById']('close-will-btn');
    const _0x288436 = () => {
        if (!_0x237119)
            return;
        if (_0x237119['style']['display'] === 'flex') {
            _0x237119['style']['display'] = 'none';
            if (_0x8fccb9 && _0x8fccb9['readyState'] === WebSocket['OPEN'] && _0x21b929) {
                _0x8fccb9['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x21b929['value']
                }));
            }
            if (_0x21b929)
                _0x21b929['blur']();
        } else {
            _0x237119['style']['display'] = 'flex';
            if (_0x21b929)
                _0x21b929['focus']();
        }
    };
    if (_0x3471f0)
        _0x3471f0['addEventListener']('click', _0x3e69fe => {
            _0x3e69fe['stopPropagation']();
            _0x288436();
        });
    if (_0x3ddc7f)
        _0x3ddc7f['addEventListener']('click', _0x327a61 => {
            _0x327a61['stopPropagation']();
            _0x288436();
        });
    const _0x5784a5 = document['getElementById']('mob-chat-btn');
    const _0x4a2465 = document['getElementById']('mobile-chat-overlay');
    const _0x4d0e52 = document['getElementById']('mobile-chat-input');
    const _0x546555 = document['getElementById']('mobile-chat-send');
    const _0x49e996 = document['getElementById']('mobile-chat-cancel');
    const _0x497e73 = () => {
        if (!_0x4a2465 || !_0x4d0e52)
            return;
        _0x4a2465['style']['display'] = 'flex';
        _0x4d0e52['value'] = '';
        _0x4d0e52['focus']();
    };
    const _0x5a24fd = () => {
        if (!_0x4a2465 || !_0x4d0e52)
            return;
        _0x4a2465['style']['display'] = 'none';
        _0x4d0e52['blur']();
    };
    const _0x585ee9 = () => {
        if (!_0x4d0e52)
            return;
        const _0x5174ff = _0x4d0e52['value']['trim']();
        if (_0x5174ff['length'] > 0x0 && _0x8fccb9 && _0x8fccb9['readyState'] === WebSocket['OPEN']) {
            _0x8fccb9['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x5174ff
            }));
        }
        _0x4d0e52['value'] = '';
        _0x5a24fd();
    };
    if (_0x5784a5)
        _0x5784a5['addEventListener']('click', _0x27a562 => {
            _0x27a562['stopPropagation']();
            _0x497e73();
        });
    if (_0x546555)
        _0x546555['addEventListener']('click', _0x25fe13 => {
            _0x25fe13['stopPropagation']();
            _0x585ee9();
        });
    if (_0x49e996)
        _0x49e996['addEventListener']('click', _0xe285fc => {
            _0xe285fc['stopPropagation']();
            _0x5a24fd();
        });
    if (_0x4d0e52) {
        _0x4d0e52['addEventListener']('keydown', _0x267f86 => {
            if (_0x267f86['key'] === 'Enter') {
                _0x267f86['preventDefault']();
                _0x585ee9();
            } else if (_0x267f86['key'] === 'Escape') {
                _0x5a24fd();
            }
        });
    }
    const _0x476dc6 = document['getElementById']('mob-top-chat');
    if (_0x476dc6)
        _0x476dc6['addEventListener']('click', _0x3afd76 => {
            _0x3afd76['stopPropagation']();
            _0x497e73();
        });
    const _0x38cb0d = document['getElementById']('mob-top-will');
    if (_0x38cb0d)
        _0x38cb0d['addEventListener']('click', _0x44c535 => {
            _0x44c535['stopPropagation']();
            _0x288436();
        });
    const _0x301f35 = document['getElementById']('mob-top-roles');
    if (_0x301f35) {
        _0x301f35['addEventListener']('click', _0xf8ab3b => {
            _0xf8ab3b['stopPropagation']();
            const _0x38873b = document['getElementById']('role-list-ui');
            const _0x411e99 = document['getElementById']('leaderboard-ui');
            if (_0x411e99)
                _0x411e99['style']['display'] = 'none';
            if (_0x38873b)
                _0x38873b['style']['display'] = _0x38873b['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x4035c4 = document['getElementById']('mob-top-players');
    if (_0x4035c4) {
        _0x4035c4['addEventListener']('click', _0x529ffe => {
            _0x529ffe['stopPropagation']();
            const _0x5ac6ff = document['getElementById']('leaderboard-ui');
            const _0x50a903 = document['getElementById']('role-list-ui');
            if (_0x50a903)
                _0x50a903['style']['display'] = 'none';
            if (_0x5ac6ff)
                _0x5ac6ff['style']['display'] = _0x5ac6ff['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x10c08b = document['getElementById']('mob-top-help');
    if (_0x10c08b) {
        _0x10c08b['addEventListener']('click', _0x30513b => {
            _0x30513b['stopPropagation']();
            const _0x2b8592 = document['getElementById']('guide-ui');
            if (_0x2b8592)
                _0x2b8592['style']['display'] = _0x2b8592['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x534efd) {
            _0x534efd = !![];
            _0x529d8f();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
