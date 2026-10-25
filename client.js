document['addEventListener']('contextmenu', _0x2ac4a8 => _0x2ac4a8['preventDefault']());
const _0x3b5a91 = {
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
let _0x3dd2df = '';
function _0x546296(_0x4d63f0, _0x2f1354) {
    const _0x4e103 = document['getElementById']('role-list-ui');
    const _0x5a836c = document['getElementById']('role-list-items');
    if (!_0x4e103 || !_0x5a836c)
        return;
    if (!_0x2f1354 || _0x2f1354 === 'off' || !_0x4d63f0 || _0x4d63f0['length'] === 0x0) {
        _0x4e103['style']['display'] = 'none';
        return;
    }
    const _0x3e03f8 = _0x2f1354 + '|' + JSON['stringify'](_0x4d63f0);
    if (_0x3e03f8 === _0x3dd2df)
        return;
    _0x3dd2df = _0x3e03f8;
    const _0x1df1e7 = document['getElementById']('role-tooltip');
    if (_0x1df1e7) {
        _0x1df1e7['style']['visibility'] = 'hidden';
        _0x1df1e7['style']['opacity'] = '0';
    }
    _0x4e103['style']['display'] = 'flex';
    _0x5a836c['innerHTML'] = '';
    _0x4d63f0['forEach'](_0x21223b => {
        const _0x4831eb = document['createElement']('div');
        _0x4831eb['className'] = 'role-list-entry';
        const _0xcbb7f6 = _0x21223b['name']['includes']('Mafia') || _0x21223b['name'] === 'Skinwalker';
        _0x4831eb['classList']['add'](_0xcbb7f6 ? 'mafia' : 'town');
        if (_0x2f1354 === 'precise' && _0x21223b['isDead']) {
            _0x4831eb['classList']['remove']('town', 'mafia');
            _0x4831eb['classList']['add']('dead');
            _0x4831eb['innerHTML'] = '<span>' + _0x21223b['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x5c98e2 = _0x21223b['count'] !== undefined && _0x21223b['count'] !== null ? _0x21223b['count'] + 'x\x20' : '';
            _0x4831eb['innerHTML'] = '<span>' + _0x5c98e2 + _0x21223b['name'] + '</span>';
        }
        if (_0x2f1354 === 'subalignments' && _0x3b5a91[_0x21223b['name']]) {
            _0x4831eb['style']['cursor'] = 'pointer';
            _0x4831eb['addEventListener']('mouseenter', () => {
                const _0x3066e6 = document['getElementById']('role-tooltip');
                if (!_0x3066e6)
                    return;
                const _0x5383ff = _0x3b5a91[_0x21223b['name']]['join'](',\x20');
                _0x3066e6['innerHTML'] = '';
                const _0x21828b = document['createElement']('span');
                _0x21828b['style']['color'] = '#ffcc00';
                _0x21828b['textContent'] = _0x21223b['name'];
                _0x3066e6['appendChild'](_0x21828b);
                _0x3066e6['appendChild'](document['createElement']('br'));
                _0x3066e6['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x5383ff));
                const _0x1c9843 = _0x4831eb['getBoundingClientRect']();
                _0x3066e6['style']['left'] = _0x1c9843['left'] - 0xeb + 'px';
                _0x3066e6['style']['top'] = _0x1c9843['top'] + 'px';
                _0x3066e6['style']['display'] = 'block';
                _0x3066e6['style']['visibility'] = 'visible';
                _0x3066e6['style']['opacity'] = '1';
            });
            _0x4831eb['addEventListener']('mouseleave', () => {
                const _0x29869c = document['getElementById']('role-tooltip');
                if (_0x29869c) {
                    _0x29869c['style']['display'] = 'none';
                    _0x29869c['style']['visibility'] = 'hidden';
                    _0x29869c['style']['opacity'] = '0';
                }
            });
        }
        _0x5a836c['appendChild'](_0x4831eb);
    });
}
let _0x4abbb6 = null;
let _0x5b2f9e = null;
const _0x3179c9 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x583328 = 'Player???';
let _0x103d13 = ![];
let _0x2b01d3 = {};
let _0x524ba6 = null;
let _0x4917e1 = 0x0;
let _0xbf3fc2 = 0x0;
let _0x144ee8 = new Set();
let _0x22f05e = ![];
let _0x550856 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x3cf93c = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0xda2d5a = ![];
let _0x740cac = null;
let _0x4894d5 = 0x0;
let _0x6263c = 0x0;
let _0x3e3869 = ![];
let _0x25f294 = ![];
let _0x170a12 = 0x0;
let _0x4cd829 = null;
let _0x2a2fc9 = ![];
const _0x2b46e0 = ((() => {
    const _0x32701c = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x15e848 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x20251e = 0x320;
    const _0x4c5229 = {};
    const _0xe2a78a = {};
    let _0x23429a = null;
    let _0x38c974 = _0x15e848 === 0x0;
    let _0x406550 = ![];
    for (const [_0x37fcab, _0x28a3e7] of Object['entries'](_0x32701c)) {
        const _0x27ea24 = new Audio(_0x28a3e7);
        _0x27ea24['loop'] = !![];
        _0x27ea24['volume'] = 0x0;
        _0x27ea24['preload'] = 'auto';
        _0x4c5229[_0x37fcab] = _0x27ea24;
        _0xe2a78a[_0x37fcab] = null;
    }
    const _0x496f4a = _0xaf36d5 => Math['min'](0x1, Math['max'](0x0, _0xaf36d5));
    function _0x366585(_0x24740e) {
        if (_0xe2a78a[_0x24740e] !== null) {
            cancelAnimationFrame(_0xe2a78a[_0x24740e]);
            _0xe2a78a[_0x24740e] = null;
        }
    }
    function _0x25ba35(_0x2c53e4, _0x3b6a29, _0x43ffbd, _0x2fa843, _0x4a94d6) {
        _0x366585(_0x2c53e4);
        const _0x2efe4b = _0x4c5229[_0x2c53e4];
        const _0x52f8ef = performance['now']();
        const _0xc51dcb = _0x54cdcc => {
            const _0x4d6318 = _0x496f4a((_0x54cdcc - _0x52f8ef) / _0x2fa843);
            const _0x3754e1 = _0x496f4a(_0x3b6a29 + (_0x43ffbd - _0x3b6a29) * _0x4d6318);
            _0x2efe4b['volume'] = _0x38c974 ? 0x0 : _0x3754e1;
            if (_0x4d6318 < 0x1) {
                _0xe2a78a[_0x2c53e4] = requestAnimationFrame(_0xc51dcb);
            } else {
                _0xe2a78a[_0x2c53e4] = null;
                _0x2efe4b['volume'] = _0x38c974 ? 0x0 : _0x496f4a(_0x43ffbd);
                if (_0x4a94d6)
                    _0x4a94d6();
            }
        };
        _0xe2a78a[_0x2c53e4] = requestAnimationFrame(_0xc51dcb);
    }
    function _0x504974(_0x11b434) {
        const _0x3d2433 = _0x11b434['play']();
        if (_0x3d2433 && _0x3d2433['catch']) {
            _0x3d2433['catch'](() => {
                if (!_0x406550) {
                    const _0x52dc77 = () => {
                        _0x406550 = !![];
                        _0x11b434['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x52dc77);
                        document['removeEventListener']('keydown', _0x52dc77);
                        document['removeEventListener']('touchstart', _0x52dc77);
                    };
                    document['addEventListener']('click', _0x52dc77, { 'once': !![] });
                    document['addEventListener']('keydown', _0x52dc77, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x52dc77, { 'once': !![] });
                }
            });
        }
    }
    function _0xb2e1a0(_0x301804) {
        if (!_0x32701c[_0x301804])
            return;
        if (_0x23429a === _0x301804)
            return;
        const _0xed7b2a = _0x23429a;
        _0x23429a = _0x301804;
        const _0xcbdf5c = _0x4c5229[_0x301804];
        _0x366585(_0x301804);
        _0xcbdf5c['currentTime'] = 0x0;
        _0xcbdf5c['volume'] = 0x0;
        _0x504974(_0xcbdf5c);
        _0x25ba35(_0x301804, 0x0, _0x15e848, _0x20251e);
        if (_0xed7b2a && _0x4c5229[_0xed7b2a]) {
            const _0x304ced = _0xed7b2a;
            const _0x4c8c5c = _0x4c5229[_0x304ced];
            const _0x2322f8 = _0x496f4a(_0x4c8c5c['volume']);
            _0x25ba35(_0x304ced, _0x2322f8, 0x0, _0x20251e, () => {
                _0x4c8c5c['pause']();
                _0x4c8c5c['currentTime'] = 0x0;
            });
        }
    }
    function _0x37c654(_0x19cc45) {
        _0x15e848 = _0x496f4a(_0x19cc45);
        localStorage['setItem']('musicVolume', String(_0x15e848));
        if (!_0x38c974 && _0x23429a && _0xe2a78a[_0x23429a] === null) {
            _0x4c5229[_0x23429a]['volume'] = _0x15e848;
        }
    }
    function _0x3eddc0() {
        return _0x15e848;
    }
    function _0x1e2ab6(_0x354975) {
        _0x38c974 = _0x354975;
        for (const _0x50d953 of Object['keys'](_0x4c5229)) {
            if (_0xe2a78a[_0x50d953] === null) {
                _0x4c5229[_0x50d953]['volume'] = _0x354975 || _0x50d953 !== _0x23429a ? 0x0 : _0x15e848;
            }
        }
    }
    function _0x2f0a9c() {
        return _0x38c974;
    }
    function _0xbeea36(_0x22a59f) {
        if (_0x22a59f === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x22a59f === 'DAY_VOTE')
            return 'voting';
        if (_0x22a59f === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x556e7e(_0x4bddae) {
        _0xb2e1a0(_0xbeea36(_0x4bddae));
    }
    function _0x502db5(_0x111b57) {
        _0xb2e1a0(_0x111b57);
    }
    return {
        'play': _0xb2e1a0,
        'onStateChange': _0x556e7e,
        'onSoundEvent': _0x502db5,
        'setVolume': _0x37c654,
        'getVolume': _0x3eddc0,
        'setMuted': _0x1e2ab6,
        'isMuted': _0x2f0a9c
    };
})());
const _0x377876 = ((() => {
    const _0x528fd2 = 0x258;
    const _0x15923e = 0xb4;
    const _0x416b63 = 0x708;
    const _0x4ab3c4 = 0x140;
    const _0x311efd = 0.18;
    const _0x5d42c5 = 0.95;
    const _0x554431 = new Audio('audio/heartbeat.mp3');
    _0x554431['loop'] = ![];
    _0x554431['preload'] = 'auto';
    _0x554431['volume'] = 0x0;
    let _0x51867c = 0x0;
    let _0x31711b = Infinity;
    function _0x495481(_0x451c55, _0x4e2741, _0x1756bd) {
        return Math['min'](_0x1756bd, Math['max'](_0x4e2741, _0x451c55));
    }
    function _0x470363(_0x387669, _0x5833f8, _0x1bc97d) {
        return _0x387669 + (_0x5833f8 - _0x387669) * _0x1bc97d;
    }
    function _0x2fa9c6(_0x301132) {
        if (_0x235f57['GAME_STATE'] !== 'NIGHT' || _0x1530c7['isDead'] || _0x524ba6 === 'Skinwalker') {
            _0x31711b = Infinity;
            return;
        }
        const _0x851cd5 = _0x1530c7['x'] + 22.5;
        const _0x10849c = _0x1530c7['y'] + 22.5;
        let _0x597604 = Infinity;
        for (const _0x41c145 in _0x2b01d3) {
            const _0x100a22 = _0x2b01d3[_0x41c145];
            if (!_0x100a22['isDark'] || _0x100a22['isDead'])
                continue;
            const _0x3dd0dc = _0x100a22['renderX'] + 22.5 - _0x851cd5;
            const _0x54ecc4 = _0x100a22['renderY'] + 22.5 - _0x10849c;
            const _0xd39ca9 = Math['sqrt'](_0x3dd0dc * _0x3dd0dc + _0x54ecc4 * _0x54ecc4);
            if (_0xd39ca9 < _0x597604)
                _0x597604 = _0xd39ca9;
        }
        _0x31711b = _0x597604;
        if (_0x597604 > _0x528fd2)
            return;
        const _0x3d5cde = 0x1 - _0x495481((_0x597604 - _0x15923e) / (_0x528fd2 - _0x15923e), 0x0, 0x1);
        const _0x129625 = _0x470363(_0x416b63, _0x4ab3c4, _0x3d5cde);
        const _0xf4b0b4 = _0x470363(_0x311efd, _0x5d42c5, _0x3d5cde);
        if (_0x301132 >= _0x51867c) {
            _0x554431['currentTime'] = 0x0;
            _0x554431['volume'] = _0x2b46e0['isMuted']() ? 0x0 : _0x495481(_0xf4b0b4 * _0x2b46e0['getVolume']() / 0.7, 0x0, 0x1);
            _0x554431['play']()['catch'](() => {
            });
            _0x51867c = _0x301132 + _0x129625;
        }
    }
    return { 'tick': _0x2fa9c6 };
})());
function _0x33d9d9() {
    const _0xabfcee = document['getElementById']('mob-ability-btn');
    if (!_0xabfcee)
        return;
    const _0x2de63f = _0x235f57['GAME_STATE'] === 'NIGHT' && !_0x1530c7['isDead'];
    const _0x433eb1 = _0x524ba6 === 'Mayor' && !_0x144ee8['has'](_0x5b2f9e) && !_0x1530c7['isDead'];
    if (_0x2de63f || _0x433eb1) {
        _0xabfcee['style']['display'] = 'flex';
    } else {
        _0xabfcee['style']['display'] = 'none';
    }
}
function _0x570df4() {
    const _0x3873ef = document['getElementById']('mobile-joystick-zone');
    const _0x2ab2d3 = document['getElementById']('mobile-top-bar');
    const _0x3c5e45 = document['getElementById']('mobile-action-bar');
    if (!_0x3873ef || !_0x2ab2d3 || !_0x3c5e45)
        return;
    if (!_0x3e4733 && _0x3cf93c) {
        _0x3873ef['style']['display'] = 'flex';
        _0x2ab2d3['style']['display'] = 'flex';
        _0x3c5e45['style']['display'] = 'flex';
        _0x33d9d9();
    } else {
        _0x3873ef['style']['display'] = 'none';
        _0x2ab2d3['style']['display'] = 'none';
        _0x3c5e45['style']['display'] = 'none';
    }
}
const _0x36486b = document['getElementById']('gameCanvas');
const _0x11d99e = _0x36486b['getContext']('2d', { 'alpha': ![] });
const _0x26b612 = 0x500;
const _0x166dab = 0x2d0;
const _0x235f57 = {
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
        'width': _0x26b612,
        'height': _0x166dab
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
const _0x1530c7 = {
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
const _0x33280e = new Image();
const _0x27ff98 = new Image();
const _0x515b77 = new Image();
const _0x38e21a = new Image();
_0x38e21a['src'] = 'assets/mayor\x20cosmetic.png';
const _0x26c553 = [
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
const _0x29a5da = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x36a890 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x36a890 === 'body1.png' || _0x36a890 === 'body1')
    _0x36a890 = 'body01.png';
if (!_0x36a890['endsWith']('.png'))
    _0x36a890 += '.png';
let _0x4ed104 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x4ed104['endsWith']('.png'))
    _0x4ed104 += '.png';
let _0x3e4733 = !![];
let _0x2bf14f = null;
let _0x440e00 = null;
let _0x562c93 = 0x3c;
let _0x3fc595 = 0x2d;
const _0x3f5352 = {};
const _0x4b535a = new Image();
_0x4b535a['src'] = 'assets/yanito932.png';
_0x3f5352['assets/yanito932.png'] = _0x4b535a;
function _0xd9ed31(_0x3c3c01) {
    if (!_0x3f5352[_0x3c3c01] || !_0x3f5352[_0x3c3c01]['complete'] && _0x3f5352[_0x3c3c01]['naturalWidth'] === 0x0 && _0x3f5352[_0x3c3c01]['naturalHeight'] === 0x0) {
        const _0x4fd0b3 = new Image();
        _0x4fd0b3['src'] = _0x3c3c01;
        _0x3f5352[_0x3c3c01] = _0x4fd0b3;
    }
    return _0x3f5352[_0x3c3c01];
}
function _0x49d6f9(_0x15149e, _0x5181ea, _0x1129fe, _0x23a80f, _0x231b70) {
    try {
        const _0x271968 = 'assets/' + (_0x5181ea || 'body01.png');
        const _0x431fa8 = _0xd9ed31(_0x271968);
        if (_0x431fa8['complete'] && _0x431fa8['naturalWidth'] > 0x0) {
            _0x15149e['drawImage'](_0x431fa8, -_0x23a80f / 0x2, -_0x231b70 / 0x2, _0x23a80f, _0x231b70);
        }
        if (_0x1129fe === null || _0x1129fe === undefined)
            return;
        const _0x3e5c4c = 'assets/' + _0x1129fe;
        const _0xcc64bd = _0xd9ed31(_0x3e5c4c);
        if (_0xcc64bd['complete'] && _0xcc64bd['naturalWidth'] > 0x0) {
            _0x15149e['drawImage'](_0xcc64bd, -_0x23a80f / 0x2, -_0x231b70 / 0x2, _0x23a80f, _0x231b70);
        }
    } catch (_0x1add6a) {
    }
}
function _0x167ba2() {
    const _0x177907 = document['getElementById']('body-skin-grid');
    const _0x49806d = document['getElementById']('eyes-skin-grid');
    if (!_0x177907 || !_0x49806d)
        return;
    _0x177907['innerHTML'] = '';
    _0x26c553['forEach'](_0x4d1037 => {
        const _0x42f232 = document['createElement']('button');
        _0x42f232['className'] = 'skin-btn' + (_0x4d1037 === _0x36a890 ? '\x20selected' : '');
        const _0x13b2db = document['createElement']('img');
        _0x13b2db['src'] = 'assets/' + _0x4d1037;
        _0x42f232['appendChild'](_0x13b2db);
        _0x42f232['onclick'] = () => {
            _0x36a890 = _0x4d1037;
            localStorage['setItem']('selectedBody', _0x4d1037);
            _0x177907['querySelectorAll']('.skin-btn')['forEach'](_0x2bab05 => _0x2bab05['classList']['remove']('selected'));
            _0x42f232['classList']['add']('selected');
        };
        _0x177907['appendChild'](_0x42f232);
    });
    _0x49806d['innerHTML'] = '';
    _0x29a5da['forEach'](_0x4c9ab6 => {
        const _0x21092d = document['createElement']('button');
        _0x21092d['className'] = 'skin-btn' + (_0x4c9ab6 === _0x4ed104 ? '\x20selected' : '');
        const _0x2cba1c = document['createElement']('img');
        _0x2cba1c['src'] = 'assets/' + _0x4c9ab6;
        _0x21092d['appendChild'](_0x2cba1c);
        _0x21092d['onclick'] = () => {
            _0x4ed104 = _0x4c9ab6;
            localStorage['setItem']('selectedEyes', _0x4c9ab6);
            _0x49806d['querySelectorAll']('.skin-btn')['forEach'](_0x154fde => _0x154fde['classList']['remove']('selected'));
            _0x21092d['classList']['add']('selected');
        };
        _0x49806d['appendChild'](_0x21092d);
    });
}
function _0x1a5ceb(_0x2ccefe) {
    if (!_0x235f57['MAP']['columns'] || !_0x235f57['CAMERA']['width'])
        return;
    const _0x3c372e = Math['max'](0x0, _0x235f57['MAP']['columns'] * _0x235f57['MAP']['tileSize'] - _0x235f57['CAMERA']['width']);
    const _0x2aaea2 = Math['max'](0x0, _0x235f57['MAP']['rows'] * _0x235f57['MAP']['tileSize'] - _0x235f57['CAMERA']['height']);
    if (_0x2bf14f === null) {
        _0x2bf14f = _0x3c372e / 0x2;
        _0x440e00 = _0x2aaea2 / 0x2;
    }
    _0x2bf14f += _0x562c93 * _0x2ccefe;
    _0x440e00 += _0x3fc595 * _0x2ccefe;
    if (_0x2bf14f <= 0x0) {
        _0x2bf14f = 0x0;
        _0x562c93 = Math['abs'](_0x562c93);
    } else if (_0x2bf14f >= _0x3c372e) {
        _0x2bf14f = _0x3c372e;
        _0x562c93 = -Math['abs'](_0x562c93);
    }
    if (_0x440e00 <= 0x0) {
        _0x440e00 = 0x0;
        _0x3fc595 = Math['abs'](_0x3fc595);
    } else if (_0x440e00 >= _0x2aaea2) {
        _0x440e00 = _0x2aaea2;
        _0x3fc595 = -Math['abs'](_0x3fc595);
    }
    _0x235f57['CAMERA']['x'] = _0x2bf14f;
    _0x235f57['CAMERA']['y'] = _0x440e00;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x295db9 = document['getElementById']('play-btn');
    const _0x29034b = document['getElementById']('username-input');
    const _0x3c289f = localStorage['getItem']('playerName');
    if (_0x3c289f && _0x29034b) {
        _0x29034b['value'] = _0x3c289f;
    }
    const _0x24b591 = () => {
        _0x2b46e0['play']('wait');
        document['removeEventListener']('click', _0x24b591);
        document['removeEventListener']('keydown', _0x24b591);
        document['removeEventListener']('touchstart', _0x24b591);
    };
    document['addEventListener']('click', _0x24b591, { 'once': !![] });
    document['addEventListener']('keydown', _0x24b591, { 'once': !![] });
    document['addEventListener']('touchstart', _0x24b591, { 'once': !![] });
    if (_0x295db9) {
        _0x295db9['addEventListener']('click', () => {
            const _0xb9a72b = _0x29034b['value'];
            const _0x10b325 = _0xb9a72b['replace'](/<[^>]*>/g, '')['replace'](/[^\x20-\x7E]/g, '')['replace'](/[<>]/g, '')['replace'](/\s+/g, '\x20')['trim']()['substring'](0x0, 0xe);
            _0x583328 = _0x10b325 || 'Player';
            localStorage['setItem']('playerName', _0x583328);
            _0x3e4733 = ![];
            _0x235f57['CAMERA']['x'] = null;
            _0x235f57['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x4e8cc3 = document['getElementById']('controls-hint');
            if (_0x4e8cc3 && !_0x3cf93c)
                _0x4e8cc3['style']['display'] = 'block';
            _0x570df4();
            if (_0x3cf93c) {
                const _0x341a60 = document['getElementById']('leaderboard-list');
                const _0x3db6a1 = document['getElementById']('leaderboard-toggle');
                if (_0x341a60) {
                    _0x341a60['style']['display'] = 'none';
                    if (_0x3db6a1)
                        _0x3db6a1['style']['transform'] = 'rotate(180deg)';
                }
                const _0x39e18a = document['getElementById']('role-list-items');
                const _0x21a513 = document['getElementById']('role-list-toggle');
                if (_0x39e18a) {
                    _0x39e18a['style']['display'] = 'none';
                    if (_0x21a513)
                        _0x21a513['style']['transform'] = 'rotate(180deg)';
                }
            }
            if (_0x4abbb6 && _0x4abbb6['readyState'] === WebSocket['OPEN']) {
                _0x4abbb6['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x583328,
                    'token': _0x3179c9,
                    'body': _0x36a890,
                    'eyes': _0x4ed104
                }));
            } else if (!_0x4abbb6 || _0x4abbb6['readyState'] === WebSocket['CLOSED'] || _0x4abbb6['readyState'] === WebSocket['CLOSING']) {
                _0xc68608();
            }
        });
    }
    _0x167ba2();
    _0xc68608();
    _0x196b61();
    _0x27d1c2();
    _0x27d0a9();
});
function _0x27d1c2() {
    const _0x369477 = document['getElementById']('settings-btn');
    const _0x4627ff = document['getElementById']('settings-panel');
    const _0x1f3cc9 = document['getElementById']('close-settings-btn');
    const _0x43f4b6 = document['getElementById']('setting-mouse-relative');
    if (_0x43f4b6) {
        _0x43f4b6['checked'] = _0x550856;
        _0x43f4b6['addEventListener']('change', () => {
            _0x550856 = _0x43f4b6['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x550856 ? 'true' : 'false');
        });
    }
    const _0x476248 = document['getElementById']('setting-music-volume');
    const _0x27975b = document['getElementById']('setting-music-volume-display');
    function _0x4512fb(_0x339735) {
        const _0x304646 = (_0x339735['value'] - _0x339735['min']) / (_0x339735['max'] - _0x339735['min']) * 0x64;
        _0x339735['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x304646 + '%,\x20#444\x20' + _0x304646 + '%)';
    }
    if (_0x476248) {
        const _0x34fdee = _0x2b46e0['getVolume']();
        const _0x1aa1ec = Math['round'](_0x34fdee * 0x64);
        _0x476248['value'] = _0x1aa1ec;
        if (_0x27975b)
            _0x27975b['textContent'] = _0x1aa1ec + '%';
        _0x4512fb(_0x476248);
        _0x476248['addEventListener']('input', () => {
            const _0x45636b = parseInt(_0x476248['value'], 0xa);
            if (_0x27975b)
                _0x27975b['textContent'] = _0x45636b + '%';
            _0x4512fb(_0x476248);
            _0x2b46e0['setVolume'](_0x45636b / 0x64);
            _0x2b46e0['setMuted'](_0x45636b === 0x0);
        });
    }
    if (_0x369477 && _0x4627ff) {
        _0x369477['addEventListener']('click', _0x3e1ddf => {
            _0x3e1ddf['stopPropagation']();
            _0x4627ff['style']['display'] = _0x4627ff['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x1f3cc9 && _0x4627ff) {
        _0x1f3cc9['addEventListener']('click', () => {
            _0x4627ff['style']['display'] = 'none';
        });
    }
    const _0x27d07a = document['getElementById']('mayor-confirm-yes');
    const _0x50ce82 = document['getElementById']('mayor-confirm-no');
    const _0x4c0d34 = document['getElementById']('mayor-confirm-dialog');
    if (_0x27d07a && _0x4c0d34) {
        _0x27d07a['addEventListener']('click', () => {
            if (_0x4abbb6 && _0x4abbb6['readyState'] === WebSocket['OPEN']) {
                _0x4abbb6['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x4c0d34['style']['display'] = 'none';
        });
    }
    if (_0x50ce82 && _0x4c0d34) {
        _0x50ce82['addEventListener']('click', () => {
            _0x4c0d34['style']['display'] = 'none';
        });
    }
    const _0x4e616b = document['getElementById']('close-ability-btn');
    if (_0x4e616b) {
        _0x4e616b['addEventListener']('click', () => {
            const _0x424b8f = document['getElementById']('ability-ui');
            if (_0x424b8f)
                _0x424b8f['style']['display'] = 'none';
        });
    }
}
let _0x823651 = '';
function _0x538ef9(_0x4914d0) {
    const _0x4d0e50 = document['getElementById']('vote-tally-panel');
    const _0x4d3844 = document['getElementById']('vote-tally-list');
    if (!_0x4d0e50 || !_0x4d3844)
        return;
    if (_0x4914d0['state'] !== 'DAY_VOTE') {
        _0x4d0e50['style']['display'] = 'none';
        _0x823651 = '';
        return;
    }
    _0x4d0e50['style']['display'] = 'block';
    const _0x3b8c24 = {};
    for (const _0x3b13a3 in _0x2b01d3) {
        if (!_0x2b01d3[_0x3b13a3]['isDead'])
            _0x3b8c24[_0x3b13a3] = 0x0;
    }
    if (_0x5b2f9e && !_0x1530c7['isDead'])
        _0x3b8c24[_0x5b2f9e] = 0x0;
    const _0x3a9d53 = _0x4914d0['votes'] || {};
    for (const _0x477292 in _0x3a9d53) {
        const _0x3e931f = _0x3a9d53[_0x477292];
        const _0x1777f9 = _0x4914d0['mayorRevealed'] && _0x4914d0['mayorRevealed'][_0x477292] ? 0x2 : 0x1;
        _0x3b8c24[_0x3e931f] = (_0x3b8c24[_0x3e931f] || 0x0) + _0x1777f9;
    }
    let _0x3f1082 = 0x0;
    const _0x5c89ef = _0x4914d0['skips'] || {};
    for (const _0x395ad2 in _0x5c89ef) {
        _0x3f1082 += Number(_0x5c89ef[_0x395ad2]) || 0x1;
    }
    const _0x1b7091 = JSON['stringify'](_0x3b8c24) + '_' + _0x3f1082 + '_' + _0x1530c7['isDead'];
    if (_0x1b7091 === _0x823651)
        return;
    _0x823651 = _0x1b7091;
    _0x4d3844['innerHTML'] = '';
    for (const _0x377acc in _0x3b8c24) {
        const _0x3994c5 = parseInt(_0x377acc);
        const _0x36da78 = _0x3994c5 === _0x5b2f9e ? _0x583328 : _0x2b01d3[_0x377acc] ? _0x2b01d3[_0x377acc]['name'] : 'Player\x20' + _0x377acc;
        const _0x25b955 = document['createElement']('div');
        _0x25b955['className'] = 'vote-tally-entry';
        const _0x2b9919 = document['createElement']('span');
        _0x2b9919['textContent'] = _0x36da78;
        const _0x511c98 = document['createElement']('span');
        _0x511c98['className'] = 'vote-count';
        _0x511c98['textContent'] = _0x3b8c24[_0x377acc] + '\x20vote' + (_0x3b8c24[_0x377acc] === 0x1 ? '' : 's');
        _0x25b955['appendChild'](_0x2b9919);
        _0x25b955['appendChild'](_0x511c98);
        if (_0x3994c5 !== _0x5b2f9e && !_0x1530c7['isDead']) {
            _0x25b955['style']['cursor'] = 'pointer';
            _0x25b955['title'] = 'Vote\x20for\x20' + _0x36da78;
            _0x25b955['addEventListener']('click', _0x21d485 => {
                _0x21d485['stopPropagation']();
                if (_0x4abbb6 && _0x4abbb6['readyState'] === WebSocket['OPEN']) {
                    _0x4abbb6['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x36da78
                    }));
                }
            });
        }
        _0x4d3844['appendChild'](_0x25b955);
    }
    const _0x377068 = document['createElement']('div');
    _0x377068['className'] = 'vote-tally-skip';
    _0x377068['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x3f1082 + '</span>';
    if (!_0x1530c7['isDead']) {
        _0x377068['style']['cursor'] = 'pointer';
        _0x377068['title'] = 'Click\x20to\x20skip\x20vote';
        _0x377068['addEventListener']('click', _0x1310b8 => {
            _0x1310b8['stopPropagation']();
            if (_0x4abbb6 && _0x4abbb6['readyState'] === WebSocket['OPEN']) {
                _0x4abbb6['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x4d3844['appendChild'](_0x377068);
}
let _0x17baf9 = null;
let _0x480b7a = null;
let _0x46f70c = null;
function _0x54a90b() {
    if (_0x4abbb6 && _0x4abbb6['readyState'] === WebSocket['OPEN']) {
        _0x4abbb6['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x17baf9,
            'abilityTarget': _0x480b7a,
            'killTarget': _0x46f70c
        }));
    }
}
function _0x3519ec() {
    const _0x552a3d = document['getElementById']('ability-ui-body');
    if (!_0x552a3d)
        return;
    _0x552a3d['innerHTML'] = '';
    if (_0x524ba6 === 'Celebrity' || _0x524ba6 === 'Mayor') {
        const _0xf3b9cb = document['createElement']('div');
        _0xf3b9cb['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0xf3b9cb['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x552a3d['appendChild'](_0xf3b9cb);
        return;
    }
    if (_0x524ba6 === 'Skinwalker') {
        const _0x290cc4 = document['createElement']('div');
        _0x290cc4['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x290cc4['innerText'] = 'Transform\x20into:';
        _0x552a3d['appendChild'](_0x290cc4);
        const _0x58ec81 = document['createElement']('div');
        _0x58ec81['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x1f0933 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x350339 = _0x124dc9 => {
            if (!_0x235f57['ROLE_LIST_RAW'] || _0x235f57['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x235f57['ROLE_LIST_RAW']['some'](_0x2bd956 => {
                if (_0x2bd956['name'] === _0x124dc9)
                    return !_0x2bd956['isDead'];
                if (_0x3b5a91[_0x2bd956['name']] && _0x3b5a91[_0x2bd956['name']]['includes'](_0x124dc9))
                    return !![];
                return ![];
            });
        };
        const _0x4de503 = [
            'None',
            ..._0x1f0933['filter'](_0x350339)
        ];
        _0x4de503['forEach'](_0x55a284 => {
            const _0x2a24a1 = document['createElement']('button');
            _0x2a24a1['className'] = 'layer-btn';
            _0x2a24a1['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x2a24a1['innerText'] = _0x55a284;
            const _0x26adf0 = _0x55a284 === 'None' && !_0x17baf9 || _0x17baf9 === _0x55a284;
            if (_0x26adf0)
                _0x2a24a1['classList']['add']('active');
            _0x2a24a1['onclick'] = () => {
                _0x17baf9 = _0x55a284 === 'None' ? null : _0x55a284;
                _0x54a90b();
                _0x3519ec();
            };
            _0x58ec81['appendChild'](_0x2a24a1);
        });
        _0x552a3d['appendChild'](_0x58ec81);
        if (_0x350339('Vigilante')) {
            const _0x273899 = document['createElement']('div');
            _0x273899['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x273899['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x552a3d['appendChild'](_0x273899);
        }
        if (_0x17baf9 === 'Vigilante') {
            const _0x50fe9e = document['createElement']('div');
            _0x50fe9e['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x50fe9e['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x552a3d['appendChild'](_0x50fe9e);
        } else if (_0x17baf9 && _0x17baf9 !== 'Celebrity') {
            const _0x34b5e8 = document['createElement']('div');
            _0x34b5e8['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x34b5e8['innerText'] = 'Use\x20' + _0x17baf9 + '\x20ability\x20on:';
            _0x552a3d['appendChild'](_0x34b5e8);
            const _0x2c2098 = document['createElement']('div');
            _0x2c2098['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0xda2561 = document['createElement']('button');
            _0xda2561['className'] = 'layer-btn';
            _0xda2561['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0xda2561['innerText'] = 'No\x20one';
            if (!_0x480b7a)
                _0xda2561['classList']['add']('active');
            _0xda2561['onclick'] = () => {
                _0x480b7a = null;
                _0x54a90b();
                _0x3519ec();
            };
            _0x2c2098['appendChild'](_0xda2561);
            for (const _0x25a124 in _0x2b01d3) {
                const _0x493fa0 = _0x2b01d3[_0x25a124];
                if (_0x493fa0['isDead'])
                    continue;
                const _0x2070fa = document['createElement']('button');
                _0x2070fa['className'] = 'layer-btn';
                _0x2070fa['innerText'] = _0x493fa0['name'];
                if (_0x480b7a === parseInt(_0x25a124))
                    _0x2070fa['classList']['add']('active');
                _0x2070fa['onclick'] = () => {
                    _0x480b7a = parseInt(_0x25a124);
                    _0x54a90b();
                    _0x3519ec();
                };
                _0x2c2098['appendChild'](_0x2070fa);
            }
            _0x552a3d['appendChild'](_0x2c2098);
        }
        const _0x26a534 = document['createElement']('div');
        _0x26a534['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x26a534['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x552a3d['appendChild'](_0x26a534);
        const _0x5936c5 = document['createElement']('div');
        _0x5936c5['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x555cad = document['createElement']('button');
        _0x555cad['className'] = 'layer-btn';
        _0x555cad['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x555cad['innerText'] = 'No\x20one';
        if (!_0x46f70c && !_0x235f57['CURRENT_TARGET'])
            _0x555cad['classList']['add']('active');
        _0x555cad['onclick'] = () => {
            _0x46f70c = null;
            _0x235f57['CURRENT_TARGET'] = null;
            _0x54a90b();
            _0x3519ec();
        };
        _0x5936c5['appendChild'](_0x555cad);
        for (const _0x406d9b in _0x2b01d3) {
            const _0x12bb3d = _0x2b01d3[_0x406d9b];
            if (_0x12bb3d['isDead'])
                continue;
            const _0x57b20f = document['createElement']('button');
            _0x57b20f['className'] = 'layer-btn';
            _0x57b20f['innerText'] = _0x12bb3d['name'];
            if (_0x46f70c === parseInt(_0x406d9b) || _0x235f57['CURRENT_TARGET'] === parseInt(_0x406d9b))
                _0x57b20f['classList']['add']('active');
            _0x57b20f['onclick'] = () => {
                _0x46f70c = parseInt(_0x406d9b);
                _0x235f57['CURRENT_TARGET'] = parseInt(_0x406d9b);
                _0x54a90b();
                _0x3519ec();
            };
            _0x5936c5['appendChild'](_0x57b20f);
        }
        _0x552a3d['appendChild'](_0x5936c5);
        return;
    }
    let _0x79637 = '';
    let _0x1a4632 = ![];
    if (_0x524ba6 === 'Doctor') {
        _0x79637 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x1a4632 = !![];
    } else if (_0x524ba6 === 'Investigator') {
        _0x79637 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x524ba6 === 'Tracker') {
        _0x79637 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x524ba6 === 'Archer') {
        _0x79637 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x524ba6 === 'Escort') {
        _0x79637 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x524ba6 === 'Vigilante') {
        _0x79637 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0xdb2ff0 = document['createElement']('div');
    _0xdb2ff0['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0xdb2ff0['innerText'] = _0x79637;
    _0x552a3d['appendChild'](_0xdb2ff0);
    const _0x39bb0a = document['createElement']('div');
    _0x39bb0a['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x3110d8 = document['createElement']('button');
    _0x3110d8['className'] = 'layer-btn';
    _0x3110d8['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x3110d8['innerText'] = 'No\x20one';
    if (_0x235f57['CURRENT_TARGET'] === null)
        _0x3110d8['classList']['add']('active');
    _0x3110d8['onclick'] = () => {
        _0x235f57['CURRENT_TARGET'] = null;
        if (_0x4abbb6 && _0x4abbb6['readyState'] === WebSocket['OPEN']) {
            _0x4abbb6['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x3519ec();
    };
    _0x39bb0a['appendChild'](_0x3110d8);
    for (const _0x36fd69 in _0x2b01d3) {
        const _0x2eea07 = _0x2b01d3[_0x36fd69];
        if (_0x2eea07['isDead'])
            continue;
        const _0x16ff78 = document['createElement']('button');
        _0x16ff78['className'] = 'layer-btn';
        _0x16ff78['innerText'] = _0x2eea07['name'];
        if (_0x235f57['CURRENT_TARGET'] === parseInt(_0x36fd69))
            _0x16ff78['classList']['add']('active');
        _0x16ff78['onclick'] = () => {
            _0x235f57['CURRENT_TARGET'] = parseInt(_0x36fd69);
            if (_0x4abbb6 && _0x4abbb6['readyState'] === WebSocket['OPEN']) {
                _0x4abbb6['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x36fd69)
                }));
            }
            _0x3519ec();
        };
        _0x39bb0a['appendChild'](_0x16ff78);
    }
    if (_0x1a4632 && !_0x1530c7['isDead']) {
        const _0x16b66a = document['createElement']('button');
        _0x16b66a['className'] = 'layer-btn';
        _0x16b66a['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x16b66a['innerText'] = _0x583328 + '\x20(Self)';
        if (_0x235f57['CURRENT_TARGET'] === _0x5b2f9e)
            _0x16b66a['classList']['add']('active');
        _0x16b66a['onclick'] = () => {
            _0x235f57['CURRENT_TARGET'] = _0x5b2f9e;
            if (_0x4abbb6 && _0x4abbb6['readyState'] === WebSocket['OPEN']) {
                _0x4abbb6['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x5b2f9e
                }));
            }
            _0x3519ec();
        };
        _0x39bb0a['appendChild'](_0x16b66a);
    }
    _0x552a3d['appendChild'](_0x39bb0a);
}
function _0xc68608() {
    if (_0x4abbb6 && (_0x4abbb6['readyState'] === WebSocket['OPEN'] || _0x4abbb6['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x458517 = new URLSearchParams();
    if (_0x3179c9)
        _0x458517['set']('token', _0x3179c9);
    _0x458517['set']('ngrok-skip-browser-warning', 'true');
    const _0x2d5c45 = 'wss://prison-rankings-inspector-terry.trycloudflare.com';
    const _0x54e04a = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x2d5c45;
    const _0x2b5b6f = _0x54e04a + '/?' + _0x458517['toString']();
    _0x4abbb6 = new WebSocket(_0x2b5b6f);
    _0x4abbb6['onopen'] = function () {
        if (!_0x3e4733 && this['readyState'] === WebSocket['OPEN']) {
            this['send'](JSON['stringify']({
                'type': 'join',
                'name': _0x583328,
                'token': _0x3179c9,
                'body': _0x36a890,
                'eyes': _0x4ed104
            }));
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x4abbb6 && _0x4abbb6['readyState'] === WebSocket['OPEN']) {
            _0x4abbb6['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x4abbb6['onclose'] = _0x5189da => {
        if (_0x5189da['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x5189da['code'] === 0xfa2 || _0x5189da['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x459371 = document['getElementById']('disconnect-overlay');
        if (!_0x459371) {
            _0x459371 = document['createElement']('div');
            _0x459371['id'] = 'disconnect-overlay';
            _0x459371['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x459371['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x459371);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x4abbb6['onmessage'] = _0x199c49 => {
        const _0x22434e = JSON['parse'](_0x199c49['data']);
        if (_0x22434e['type'] === 'map_data') {
            _0x235f57['MAP']['tileSize'] = _0x22434e['map']['tileSize'];
            _0x235f57['MAP']['columns'] = _0x22434e['map']['columns'];
            _0x235f57['MAP']['rows'] = _0x22434e['map']['rows'];
            _0x235f57['MAP']['layers'] = _0x22434e['map']['layers'];
            if (_0x22434e['map']['doors']) {
                _0x235f57['MAP']['doors'] = _0x22434e['map']['doors'];
                const _0x590a25 = _0x235f57['MAP']['layers']['find'](_0xb530f2 => _0xb530f2['name'] === 'floor2');
                if (_0x590a25) {
                    for (const _0x4094fc in _0x235f57['MAP']['doors']) {
                        _0x590a25['data'][parseInt(_0x4094fc)] = 0x2;
                    }
                }
            }
            if (_0x22434e['entities'])
                _0x235f57['ENTITIES'] = _0x22434e['entities'];
            _0x2db40a();
            _0x235f57['SYSTEM']['isReady'] = !![];
            _0x12b62a();
            if (!_0x235f57['SYSTEM']['_gameLoopRunning']) {
                _0x235f57['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x2adcb7);
            }
            return;
        }
        if (_0x22434e['type'] === 'init') {
            _0x5b2f9e = _0x22434e['id'];
            _0x3e4733 = ![];
            _0x570df4();
            if (_0x3cf93c) {
                const _0x38a649 = document['getElementById']('leaderboard-list');
                const _0x26d0c0 = document['getElementById']('leaderboard-toggle');
                if (_0x38a649) {
                    _0x38a649['style']['display'] = 'none';
                    if (_0x26d0c0)
                        _0x26d0c0['style']['transform'] = 'rotate(180deg)';
                }
                const _0x4b6c08 = document['getElementById']('role-list-items');
                const _0x1ec9a7 = document['getElementById']('role-list-toggle');
                if (_0x4b6c08) {
                    _0x4b6c08['style']['display'] = 'none';
                    if (_0x1ec9a7)
                        _0x1ec9a7['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x103d13 = _0x22434e['isOwner'] || ![];
            _0x583328 = _0x22434e['name'] || _0x583328;
            _0x235f57['MAP']['tileSize'] = _0x22434e['map']['tileSize'];
            _0x235f57['MAP']['columns'] = _0x22434e['map']['columns'];
            _0x235f57['MAP']['rows'] = _0x22434e['map']['rows'];
            _0x235f57['MAP']['layers'] = _0x22434e['map']['layers'];
            if (_0x22434e['map']['doors']) {
                _0x235f57['MAP']['doors'] = _0x22434e['map']['doors'];
                const _0x4ac89b = _0x235f57['MAP']['layers']['find'](_0xdc52cc => _0xdc52cc['name'] === 'floor2');
                if (_0x4ac89b) {
                    for (const _0x3bb75e in _0x235f57['MAP']['doors']) {
                        _0x4ac89b['data'][parseInt(_0x3bb75e)] = 0x2;
                    }
                }
            }
            if (_0x22434e['entities'])
                _0x235f57['ENTITIES'] = _0x22434e['entities'];
            _0x2db40a();
            _0x1530c7['x'] = _0x235f57['MAP']['columns'] * _0x235f57['MAP']['tileSize'] / 0x2;
            _0x1530c7['y'] = _0x235f57['MAP']['rows'] * _0x235f57['MAP']['tileSize'] / 0x2;
            _0x235f57['CAMERA']['x'] = _0x1530c7['x'] + _0x1530c7['width'] / 0x2 - _0x235f57['CAMERA']['width'] / 0x2;
            _0x235f57['CAMERA']['y'] = _0x1530c7['y'] + _0x1530c7['height'] / 0x2 - _0x235f57['CAMERA']['height'] / 0x2;
            if (_0x103d13) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x3df399();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x235f57['SYSTEM']['lastTime'] = performance['now']();
            _0x235f57['SYSTEM']['isReady'] = !![];
            _0x4ee658();
            if (!_0x235f57['SYSTEM']['_gameLoopRunning']) {
                _0x235f57['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x2adcb7);
            }
            return;
        } else if (_0x22434e['type'] === 'state') {
            const _0x43df72 = {};
            for (const _0x575f12 in _0x22434e['players']) {
                if (parseInt(_0x575f12) === _0x5b2f9e)
                    continue;
                const _0x4b466b = _0x22434e['players'][_0x575f12];
                const _0x1469e1 = _0x2b01d3[_0x575f12];
                if (_0x1469e1) {
                    const _0x3d2402 = _0x4b466b['x'] - _0x1469e1['renderX'];
                    const _0xff9bfb = _0x4b466b['y'] - _0x1469e1['renderY'];
                    const _0x26791b = _0x3d2402 * _0x3d2402 + _0xff9bfb * _0xff9bfb > 0x78 * 0x78;
                    Object['assign'](_0x1469e1, _0x4b466b);
                    if (_0x26791b) {
                        _0x1469e1['renderX'] = _0x4b466b['x'];
                        _0x1469e1['renderY'] = _0x4b466b['y'];
                    }
                    _0x43df72[_0x575f12] = _0x1469e1;
                } else {
                    _0x43df72[_0x575f12] = {
                        ..._0x4b466b,
                        'renderX': _0x4b466b['x'],
                        'renderY': _0x4b466b['y'],
                        'renderAngle': _0x4b466b['angle'] || 0x0
                    };
                }
            }
            _0x2b01d3 = _0x43df72;
            if (_0x22434e['players'][_0x5b2f9e]) {
                const _0x113c03 = _0x22434e['players'][_0x5b2f9e];
                _0x1530c7['chats'] = _0x113c03['chats'] || [];
                _0x1530c7['isDead'] = _0x113c03['isDead'];
                if (_0x113c03['name'])
                    _0x583328 = _0x113c03['name'];
                _0x4ee658();
                const _0x1466f3 = Math['hypot'](_0x113c03['x'] - _0x1530c7['x'], _0x113c03['y'] - _0x1530c7['y']);
                if (_0x1466f3 > 0xfa) {
                    _0x1530c7['x'] = _0x113c03['x'];
                    _0x1530c7['y'] = _0x113c03['y'];
                } else if (_0x1466f3 > 0x50) {
                    _0x1530c7['x'] += (_0x113c03['x'] - _0x1530c7['x']) * 0.06;
                    _0x1530c7['y'] += (_0x113c03['y'] - _0x1530c7['y']) * 0.06;
                }
            }
            if (_0x22434e['entities'])
                _0x235f57['ENTITIES'] = _0x22434e['entities'];
            if (_0x22434e['game']) {
                _0x235f57['GAME_STATE'] = _0x22434e['game']['state'];
                _0x235f57['NIGHT_ABILITY_OPEN'] = _0x22434e['game']['nightAbilityOpen'];
                if (_0x22434e['game']['mayorRevealed']) {
                    for (const _0x5531ef in _0x22434e['game']['mayorRevealed']) {
                        _0x144ee8['add'](parseInt(_0x5531ef));
                    }
                }
                if (_0x235f57['LAST_STATE'] !== _0x235f57['GAME_STATE']) {
                    if (_0x235f57['GAME_STATE'] !== 'NIGHT') {
                        _0x235f57['CURRENT_TARGET'] = null;
                        _0x17baf9 = null;
                        _0x480b7a = null;
                        _0x46f70c = null;
                        const _0x4e6d69 = document['getElementById']('ability-ui');
                        if (_0x4e6d69)
                            _0x4e6d69['style']['display'] = 'none';
                    }
                    if (_0x235f57['GAME_STATE'] === 'NIGHT') {
                        _0x1530c7['chats'] = [];
                        for (const _0x3a6a5a in _0x2b01d3) {
                            _0x2b01d3[_0x3a6a5a]['chats'] = [];
                        }
                    }
                    _0x235f57['LAST_STATE'] = _0x235f57['GAME_STATE'];
                    _0x33d9d9();
                    _0x2b46e0['onStateChange'](_0x235f57['GAME_STATE'], _0x22434e['game']['nightAbilityOpen']);
                }
                const _0x1553d6 = document['getElementById']('phase-ui');
                if (_0x1553d6) {
                    _0x1553d6['style']['display'] = 'block';
                    let _0x48bc6c = _0x22434e['game']['state']['replace']('_', '\x20');
                    if (_0x22434e['game']['state'] === 'DAY_DISCUSS') {
                        _0x48bc6c = 'DAY\x20' + (_0x22434e['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x22434e['game']['timer'] + 's';
                    } else if (_0x22434e['game']['state'] === 'DAY_VOTE') {
                        _0x48bc6c = 'DAY\x20' + (_0x22434e['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x22434e['game']['timer'] + 's';
                    } else if (_0x22434e['game']['state'] === 'NIGHT') {
                        const _0x3ed5ad = _0x22434e['game']['dayCount'] || 0x1;
                        if (_0x22434e['game']['nightAbilityOpen']) {
                            _0x48bc6c = 'NIGHT\x20' + _0x3ed5ad + '\x20ABILITY\x20PHASE';
                            const _0x3fa3e1 = _0x22434e['game']['abilityTimer'] !== undefined ? _0x22434e['game']['abilityTimer'] : _0x22434e['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x3fa3e1 + 's';
                        } else {
                            _0x48bc6c = 'NIGHT\x20' + _0x3ed5ad;
                            document['getElementById']('phase-timer')['innerText'] = _0x22434e['game']['timer'] + 's';
                        }
                    }
                    document['getElementById']('phase-name')['innerText'] = _0x48bc6c;
                }
                if (_0x22434e['game']['state'] === 'NIGHT') {
                    const _0x51e6dc = document['getElementById']('ability-timer-label');
                    if (_0x51e6dc) {
                        const _0x188561 = _0x22434e['game']['abilityTimer'] !== undefined ? _0x22434e['game']['abilityTimer'] : _0x22434e['game']['timer'];
                        _0x51e6dc['innerText'] = _0x22434e['game']['nightAbilityOpen'] ? _0x188561 + 's' : '';
                    }
                    if (_0x22434e['game']['nightAbilityOpen'] && !_0x22f05e && !_0x1530c7['isDead']) {
                        _0x22f05e = !![];
                        _0x3519ec();
                        const _0x4b377c = document['getElementById']('ability-ui');
                        if (_0x4b377c)
                            _0x4b377c['style']['display'] = 'block';
                    }
                    if (!_0x22434e['game']['nightAbilityOpen']) {
                        const _0x47ea3f = document['getElementById']('ability-ui');
                        if (_0x47ea3f && _0x47ea3f['style']['display'] === 'block') {
                            _0x47ea3f['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x22f05e = ![];
                }
                _0x538ef9(_0x22434e['game']);
                if (_0x22434e['game']['roleListMode'] !== undefined) {
                    _0x235f57['ROLE_LIST_RAW'] = _0x22434e['game']['roleList'] || [];
                    _0x546296(_0x22434e['game']['roleList'], _0x22434e['game']['roleListMode']);
                }
            }
        } else if (_0x22434e['type'] === 'teleport') {
            _0x1530c7['x'] = _0x22434e['x'];
            _0x1530c7['y'] = _0x22434e['y'];
            _0x1530c7['vx'] = 0x0;
            _0x1530c7['vy'] = 0x0;
            _0x235f57['CAMERA']['x'] = null;
            if (_0x22434e['teleportId'] !== undefined)
                _0xbf3fc2 = _0x22434e['teleportId'];
        } else if (_0x22434e['type'] === 'bulk_teleport') {
            for (const _0xe81062 in _0x22434e['positions']) {
                const _0x40891b = _0x22434e['positions'][_0xe81062];
                if (parseInt(_0xe81062) === _0x5b2f9e) {
                    _0x1530c7['x'] = _0x40891b['x'];
                    _0x1530c7['y'] = _0x40891b['y'];
                    _0x1530c7['vx'] = 0x0;
                    _0x1530c7['vy'] = 0x0;
                    _0x235f57['CAMERA']['x'] = null;
                    continue;
                }
                const _0x572a7c = _0x2b01d3[_0xe81062];
                if (_0x572a7c) {
                    _0x572a7c['x'] = _0x40891b['x'];
                    _0x572a7c['y'] = _0x40891b['y'];
                    _0x572a7c['renderX'] = _0x40891b['x'];
                    _0x572a7c['renderY'] = _0x40891b['y'];
                    _0x572a7c['vx'] = 0x0;
                    _0x572a7c['vy'] = 0x0;
                }
            }
        } else if (_0x22434e['type'] === 'player_left') {
            delete _0x2b01d3[_0x22434e['id']];
            _0x144ee8['delete'](parseInt(_0x22434e['id']));
        } else if (_0x22434e['type'] === 'map_update') {
            const _0x4b0a5c = _0x235f57['MAP']['layers']['find'](_0x152176 => _0x152176['name'] === _0x22434e['layer']);
            if (_0x4b0a5c) {
                _0x4b0a5c['data'][_0x22434e['row'] * _0x235f57['MAP']['columns'] + _0x22434e['col']] = _0x22434e['gid'];
                const _0x404ba7 = _0x22434e['row'] * _0x235f57['MAP']['columns'] + _0x22434e['col'];
                if (_0x235f57['MAP']['doors'] && _0x235f57['MAP']['doors'][_0x404ba7]) {
                    const _0xd29ff7 = _0x235f57['MAP']['layers']['find'](_0x5d0802 => _0x5d0802['name'] === 'floor2');
                    if (_0xd29ff7)
                        _0xd29ff7['data'][_0x404ba7] = 0x2;
                }
                const _0x2ac87c = Math['floor'](_0x22434e['col'] * _0x235f57['MAP']['tileSize'] / _0x235f57['MAP']['chunkSize']);
                const _0x226752 = Math['floor'](_0x22434e['row'] * _0x235f57['MAP']['tileSize'] / _0x235f57['MAP']['chunkSize']);
                _0x5af16d(_0x2ac87c, _0x226752);
            }
        } else if (_0x22434e['type'] === 'role_assign') {
            _0x524ba6 = _0x22434e['role'];
            _0x1530c7['isDead'] = _0x524ba6 === 'Spectator';
            _0x144ee8['clear']();
            _0x235f57['CURRENT_TARGET'] = null;
            _0x17baf9 = null;
            _0x480b7a = null;
            _0x46f70c = null;
            _0x22f05e = ![];
            const _0x5d3ee8 = document['getElementById']('ability-ui');
            if (_0x5d3ee8)
                _0x5d3ee8['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x524ba6;
            _0x33d9d9();
            _0x28d4e3(_0x524ba6 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x524ba6, !![]);
            let _0x32637d = '';
            if (_0x524ba6 === 'Investigator')
                _0x32637d = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x524ba6 === 'Tracker')
                _0x32637d = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x524ba6 === 'Doctor')
                _0x32637d = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x524ba6 === 'Archer')
                _0x32637d = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x524ba6 === 'Escort')
                _0x32637d = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x524ba6 === 'Vigilante')
                _0x32637d = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x524ba6 === 'Skinwalker')
                _0x32637d = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x524ba6 === 'Celebrity')
                _0x32637d = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x524ba6 === 'Mayor')
                _0x32637d = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x28d4e3(_0x32637d, !![]);
        } else if (_0x22434e['type'] === 'mayor_reveal') {
            _0x144ee8['add'](parseInt(_0x22434e['playerId']));
            _0x4ee658();
            _0x33d9d9();
        } else if (_0x22434e['type'] === 'rolelist_update') {
            _0x235f57['ROLE_LIST_RAW'] = _0x22434e['list'] || [];
            _0x546296(_0x22434e['list'], _0x22434e['mode']);
        } else if (_0x22434e['type'] === 'sound_event') {
            _0x2b46e0['onSoundEvent'](_0x22434e['track']);
        } else if (_0x22434e['type'] === 'game_over') {
            _0x2b46e0['onStateChange']('LOBBY', ![]);
            _0x546296([], 'off');
            _0x524ba6 = null;
            _0x1530c7['isDead'] = ![];
            _0x144ee8['clear']();
            _0x235f57['CURRENT_TARGET'] = null;
            _0x17baf9 = null;
            _0x480b7a = null;
            _0x46f70c = null;
            _0x22f05e = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x33d9d9();
            _0x28d4e3('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x22434e['type'] === 'chat_log') {
            _0x28d4e3(_0x22434e['sender'] + ':\x20' + _0x22434e['text']);
        } else if (_0x22434e['type'] === 'sys_chat') {
            _0x28d4e3(_0x22434e['text'], !![]);
        }
    };
}
function _0x28d4e3(_0x9f1c1a, _0x33a202 = ![]) {
    const _0x461617 = document['getElementById']('chat-log-messages');
    const _0x5189b9 = document['getElementById']('chat-log-ui');
    const _0x132cf6 = _0x5189b9['scrollHeight'] - _0x5189b9['scrollTop'] - _0x5189b9['clientHeight'] < 0x1e;
    const _0x4e09e4 = document['createElement']('div');
    _0x4e09e4['className'] = 'chat-log-line' + (_0x33a202 ? '\x20sys-msg' : '');
    _0x4e09e4['innerText'] = _0x9f1c1a;
    _0x461617['appendChild'](_0x4e09e4);
    if (_0x132cf6) {
        _0x5189b9['scrollTop'] = _0x5189b9['scrollHeight'];
    }
    if (_0x461617['childElementCount'] > 0xc8) {
        _0x461617['removeChild'](_0x461617['firstChild']);
    }
}
let _0x3e1063 = -0x1, _0x55ae06 = -0x1, _0x497794 = -0x1, _0x5738f4 = 0x0;
function _0xe04d74() {
    if (!_0x5b2f9e || !_0x4abbb6 || _0x4abbb6['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x2555b5 = performance['now']();
    const _0x2a0ef2 = _0x2555b5 - _0x5738f4;
    const _0x211fa8 = Math['abs'](_0x1530c7['x'] - _0x3e1063) > 0.05 || Math['abs'](_0x1530c7['y'] - _0x55ae06) > 0.05 || Math['abs'](_0x1530c7['angle'] - _0x497794) > 0.02;
    if (!_0x211fa8 && _0x2a0ef2 < 0xc8)
        return;
    if (_0x2a0ef2 < 0x19)
        return;
    _0x5738f4 = _0x2555b5;
    _0x3e1063 = _0x1530c7['x'];
    _0x55ae06 = _0x1530c7['y'];
    _0x497794 = _0x1530c7['angle'];
    if (!_0x5b2f9e || !_0x4abbb6 || _0x4abbb6['readyState'] !== WebSocket['OPEN'])
        return;
    _0x4abbb6['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x1530c7['x'],
        'y': _0x1530c7['y'],
        'vx': _0x1530c7['vx'],
        'vy': _0x1530c7['vy'],
        'angle': _0x1530c7['angle'],
        'scale': _0x1530c7['scale'],
        'teleportId': _0xbf3fc2,
        'clientTimestamp': Date['now']()
    }));
}
function _0x5e556b() {
    if (_0x1530c7['isDead'])
        return;
    const _0x2275e9 = _0x235f57['MAP']['layers']['find'](_0x2751e4 => _0x2751e4['name'] === 'walls');
    if (!_0x2275e9)
        return;
    const _0x599c8b = _0x1530c7['scale'];
    const _0x38e5f6 = _0x1530c7['width'] * _0x599c8b / 0x2;
    for (let _0x25986d = 0x0; _0x25986d < 0x3; _0x25986d++) {
        let _0x2f2c84 = _0x1530c7['x'] + _0x1530c7['width'] / 0x2;
        let _0x828ef8 = _0x1530c7['y'] + _0x1530c7['height'] / 0x2;
        const _0x345f51 = Math['floor']((_0x2f2c84 - _0x38e5f6) / _0x235f57['MAP']['tileSize']);
        const _0x3c90bc = Math['floor']((_0x2f2c84 + _0x38e5f6) / _0x235f57['MAP']['tileSize']);
        const _0x33ac05 = Math['floor']((_0x828ef8 - _0x38e5f6) / _0x235f57['MAP']['tileSize']);
        const _0x273a4a = Math['floor']((_0x828ef8 + _0x38e5f6) / _0x235f57['MAP']['tileSize']);
        for (let _0x2e8cc9 = _0x33ac05; _0x2e8cc9 <= _0x273a4a; _0x2e8cc9++) {
            for (let _0x4f2cb5 = _0x345f51; _0x4f2cb5 <= _0x3c90bc; _0x4f2cb5++) {
                if (_0x4f2cb5 < 0x0 || _0x4f2cb5 >= _0x235f57['MAP']['columns'] || _0x2e8cc9 < 0x0 || _0x2e8cc9 >= _0x235f57['MAP']['rows'])
                    continue;
                if (_0x2275e9['data'][_0x2e8cc9 * _0x235f57['MAP']['columns'] + _0x4f2cb5] === 0x0)
                    continue;
                const _0x51abd8 = _0x4f2cb5 * _0x235f57['MAP']['tileSize'];
                const _0x5c97c8 = _0x2e8cc9 * _0x235f57['MAP']['tileSize'];
                const _0x2e404d = _0x2f2c84 < _0x51abd8 ? _0x51abd8 : _0x2f2c84 > _0x51abd8 + _0x235f57['MAP']['tileSize'] ? _0x51abd8 + _0x235f57['MAP']['tileSize'] : _0x2f2c84;
                const _0xa98d0c = _0x828ef8 < _0x5c97c8 ? _0x5c97c8 : _0x828ef8 > _0x5c97c8 + _0x235f57['MAP']['tileSize'] ? _0x5c97c8 + _0x235f57['MAP']['tileSize'] : _0x828ef8;
                const _0x5efde6 = _0x2f2c84 - _0x2e404d;
                const _0x3f4e70 = _0x828ef8 - _0xa98d0c;
                const _0x394afe = Math['sqrt'](_0x5efde6 * _0x5efde6 + _0x3f4e70 * _0x3f4e70);
                if (_0x394afe < _0x38e5f6) {
                    if (_0x394afe === 0x0) {
                        const _0x1feda5 = _0x2f2c84 - _0x51abd8;
                        const _0x270059 = _0x51abd8 + _0x235f57['MAP']['tileSize'] - _0x2f2c84;
                        const _0x436a23 = _0x828ef8 - _0x5c97c8;
                        const _0x38cb1d = _0x5c97c8 + _0x235f57['MAP']['tileSize'] - _0x828ef8;
                        const _0x4be419 = Math['min'](_0x1feda5, _0x270059, _0x436a23, _0x38cb1d);
                        if (_0x4be419 === _0x1feda5)
                            _0x2f2c84 = _0x51abd8 - _0x38e5f6;
                        else if (_0x4be419 === _0x270059)
                            _0x2f2c84 = _0x51abd8 + _0x235f57['MAP']['tileSize'] + _0x38e5f6;
                        else if (_0x4be419 === _0x436a23)
                            _0x828ef8 = _0x5c97c8 - _0x38e5f6;
                        else
                            _0x828ef8 = _0x5c97c8 + _0x235f57['MAP']['tileSize'] + _0x38e5f6;
                    } else {
                        const _0x34aa19 = _0x38e5f6 - _0x394afe;
                        _0x2f2c84 += _0x5efde6 / _0x394afe * _0x34aa19;
                        _0x828ef8 += _0x3f4e70 / _0x394afe * _0x34aa19;
                        const _0x1fd334 = _0x1530c7['vx'] * (_0x5efde6 / _0x394afe) + _0x1530c7['vy'] * (_0x3f4e70 / _0x394afe);
                        if (_0x1fd334 < 0x0) {
                            _0x1530c7['vx'] -= _0x1fd334 * (_0x5efde6 / _0x394afe);
                            _0x1530c7['vy'] -= _0x1fd334 * (_0x3f4e70 / _0x394afe);
                        }
                    }
                }
            }
        }
        _0x1530c7['x'] = _0x2f2c84 - _0x1530c7['width'] / 0x2;
        _0x1530c7['y'] = _0x828ef8 - _0x1530c7['height'] / 0x2;
    }
}
function _0x3475e0(_0x468630) {
    const _0xabd715 = _0x235f57['MAP']['layers']['find'](_0x26f661 => _0x26f661['name'] === 'walls');
    if (!_0xabd715)
        return;
    const _0x34bedc = _0x468630['width'] / 0x2;
    for (let _0x2602cd = 0x0; _0x2602cd < 0x2; _0x2602cd++) {
        let _0x1004d8 = _0x468630['x'] + _0x468630['width'] / 0x2;
        let _0x5eae0a = _0x468630['y'] + _0x468630['height'] / 0x2;
        const _0x267761 = Math['floor']((_0x1004d8 - _0x34bedc) / _0x235f57['MAP']['tileSize']);
        const _0x530415 = Math['floor']((_0x1004d8 + _0x34bedc) / _0x235f57['MAP']['tileSize']);
        const _0x23d62a = Math['floor']((_0x5eae0a - _0x34bedc) / _0x235f57['MAP']['tileSize']);
        const _0x9326a1 = Math['floor']((_0x5eae0a + _0x34bedc) / _0x235f57['MAP']['tileSize']);
        for (let _0x4ec6b5 = _0x23d62a; _0x4ec6b5 <= _0x9326a1; _0x4ec6b5++) {
            for (let _0x422602 = _0x267761; _0x422602 <= _0x530415; _0x422602++) {
                if (_0x422602 < 0x0 || _0x422602 >= _0x235f57['MAP']['columns'] || _0x4ec6b5 < 0x0 || _0x4ec6b5 >= _0x235f57['MAP']['rows'])
                    continue;
                if (_0xabd715['data'][_0x4ec6b5 * _0x235f57['MAP']['columns'] + _0x422602] === 0x0)
                    continue;
                const _0x2c622a = _0x422602 * _0x235f57['MAP']['tileSize'];
                const _0x50d164 = _0x4ec6b5 * _0x235f57['MAP']['tileSize'];
                const _0x155afc = _0x1004d8 < _0x2c622a ? _0x2c622a : _0x1004d8 > _0x2c622a + _0x235f57['MAP']['tileSize'] ? _0x2c622a + _0x235f57['MAP']['tileSize'] : _0x1004d8;
                const _0x5b9710 = _0x5eae0a < _0x50d164 ? _0x50d164 : _0x5eae0a > _0x50d164 + _0x235f57['MAP']['tileSize'] ? _0x50d164 + _0x235f57['MAP']['tileSize'] : _0x5eae0a;
                const _0x37cff1 = _0x1004d8 - _0x155afc;
                const _0x5e5c58 = _0x5eae0a - _0x5b9710;
                const _0x21dca3 = Math['sqrt'](_0x37cff1 * _0x37cff1 + _0x5e5c58 * _0x5e5c58);
                if (_0x21dca3 < _0x34bedc) {
                    if (_0x21dca3 === 0x0) {
                        const _0x4ccc72 = _0x1004d8 - _0x2c622a;
                        const _0x1707d1 = _0x2c622a + _0x235f57['MAP']['tileSize'] - _0x1004d8;
                        const _0x4b67c4 = _0x5eae0a - _0x50d164;
                        const _0xf303a5 = _0x50d164 + _0x235f57['MAP']['tileSize'] - _0x5eae0a;
                        const _0x36f665 = Math['min'](_0x4ccc72, _0x1707d1, _0x4b67c4, _0xf303a5);
                        if (_0x36f665 === _0x4ccc72)
                            _0x1004d8 = _0x2c622a - _0x34bedc;
                        else if (_0x36f665 === _0x1707d1)
                            _0x1004d8 = _0x2c622a + _0x235f57['MAP']['tileSize'] + _0x34bedc;
                        else if (_0x36f665 === _0x4b67c4)
                            _0x5eae0a = _0x50d164 - _0x34bedc;
                        else
                            _0x5eae0a = _0x50d164 + _0x235f57['MAP']['tileSize'] + _0x34bedc;
                    } else {
                        const _0x5b8863 = _0x34bedc - _0x21dca3;
                        _0x1004d8 += _0x37cff1 / _0x21dca3 * _0x5b8863;
                        _0x5eae0a += _0x5e5c58 / _0x21dca3 * _0x5b8863;
                    }
                }
            }
        }
        _0x468630['x'] = _0x1004d8 - _0x468630['width'] / 0x2;
        _0x468630['y'] = _0x5eae0a - _0x468630['height'] / 0x2;
    }
}
function _0x17ee2a(_0x1c7a03) {
    const _0xecc244 = _0x1c7a03['width'] / 0x2;
    for (let _0x438dba = 0x0; _0x438dba < 0x2; _0x438dba++) {
        let _0x243d32 = _0x1c7a03['x'] + _0x1c7a03['width'] / 0x2;
        let _0x3a3ac5 = _0x1c7a03['y'] + _0x1c7a03['height'] / 0x2;
        for (const _0x126893 of _0x235f57['ENTITIES']) {
            const _0x3c8278 = _0x243d32 < _0x126893['x'] ? _0x126893['x'] : _0x243d32 > _0x126893['x'] + _0x126893['w'] ? _0x126893['x'] + _0x126893['w'] : _0x243d32;
            const _0x56b62b = _0x3a3ac5 < _0x126893['y'] ? _0x126893['y'] : _0x3a3ac5 > _0x126893['y'] + _0x126893['h'] ? _0x126893['y'] + _0x126893['h'] : _0x3a3ac5;
            const _0xfdd0c9 = _0x243d32 - _0x3c8278;
            const _0x2bbe68 = _0x3a3ac5 - _0x56b62b;
            const _0x31b094 = Math['sqrt'](_0xfdd0c9 * _0xfdd0c9 + _0x2bbe68 * _0x2bbe68);
            if (_0x31b094 < _0xecc244 && _0x31b094 > 0x0) {
                const _0x31c53b = _0xecc244 - _0x31b094;
                const _0x13d84a = _0xfdd0c9 / _0x31b094;
                const _0x4854de = _0x2bbe68 / _0x31b094;
                _0x243d32 += _0x13d84a * _0x31c53b;
                _0x3a3ac5 += _0x4854de * _0x31c53b;
            } else if (_0x31b094 === 0x0) {
                const _0x2012bd = _0x243d32 - _0x126893['x'];
                const _0x3adce7 = _0x126893['x'] + _0x126893['w'] - _0x243d32;
                const _0x2178bf = _0x3a3ac5 - _0x126893['y'];
                const _0x294d19 = _0x126893['y'] + _0x126893['h'] - _0x3a3ac5;
                const _0x3e8983 = Math['min'](_0x2012bd, _0x3adce7, _0x2178bf, _0x294d19);
                if (_0x3e8983 === _0x2012bd)
                    _0x243d32 = _0x126893['x'] - _0xecc244;
                else if (_0x3e8983 === _0x3adce7)
                    _0x243d32 = _0x126893['x'] + _0x126893['w'] + _0xecc244;
                else if (_0x3e8983 === _0x2178bf)
                    _0x3a3ac5 = _0x126893['y'] - _0xecc244;
                else
                    _0x3a3ac5 = _0x126893['y'] + _0x126893['h'] + _0xecc244;
            }
        }
        _0x1c7a03['x'] = _0x243d32 - _0x1c7a03['width'] / 0x2;
        _0x1c7a03['y'] = _0x3a3ac5 - _0x1c7a03['height'] / 0x2;
    }
}
function _0x5d51b9() {
    if (_0x1530c7['isDead'])
        return;
    const _0x150e44 = _0x1530c7['width'] / 0x2;
    const _0x51b7a2 = _0x1530c7['x'] + _0x1530c7['width'] / 0x2;
    const _0x5a62ca = _0x1530c7['y'] + _0x1530c7['height'] / 0x2;
    for (const _0x51297e in _0x2b01d3) {
        const _0x5f10e4 = _0x2b01d3[_0x51297e];
        if (_0x5f10e4['isDead'])
            continue;
        const _0x5a3e8f = _0x5f10e4['width'] / 0x2;
        const _0x103205 = _0x150e44 + _0x5a3e8f;
        const _0x5e56 = (_0x5f10e4['renderX'] ?? _0x5f10e4['x']) + _0x5f10e4['width'] / 0x2;
        const _0x379654 = (_0x5f10e4['renderY'] ?? _0x5f10e4['y']) + _0x5f10e4['height'] / 0x2;
        const _0x38db47 = _0x51b7a2 - _0x5e56;
        const _0x18cde5 = _0x5a62ca - _0x379654;
        const _0x6c4c41 = Math['sqrt'](_0x38db47 * _0x38db47 + _0x18cde5 * _0x18cde5);
        if (_0x6c4c41 > 0x0 && _0x6c4c41 < _0x103205) {
            const _0x58d68c = _0x103205 - _0x6c4c41;
            const _0x5e9981 = _0x38db47 / _0x6c4c41;
            const _0x290869 = _0x18cde5 / _0x6c4c41;
            _0x1530c7['x'] += _0x5e9981 * (_0x58d68c * 0.25);
            _0x1530c7['y'] += _0x290869 * (_0x58d68c * 0.25);
            _0x5f10e4['x'] -= _0x5e9981 * (_0x58d68c * 0.75);
            _0x5f10e4['y'] -= _0x290869 * (_0x58d68c * 0.75);
            _0x3475e0(_0x5f10e4);
            _0x17ee2a(_0x5f10e4);
            if (_0x5f10e4['renderX'] !== undefined) {
                _0x5f10e4['renderX'] = _0x5f10e4['x'];
                _0x5f10e4['renderY'] = _0x5f10e4['y'];
            }
            const _0x1735ad = _0x1530c7['vx'] * _0x5e9981 + _0x1530c7['vy'] * _0x290869;
            if (_0x1735ad < 0x0) {
                _0x1530c7['vx'] -= _0x1735ad * _0x5e9981 * 0.25;
                _0x1530c7['vy'] -= _0x1735ad * _0x290869 * 0.25;
            }
        }
    }
    _0x5e556b();
    _0xd2f743();
}
function _0xd2f743() {
    if (_0x1530c7['isDead'])
        return;
    const _0x48f649 = _0x1530c7['scale'];
    const _0x2a5c9d = _0x1530c7['width'] * _0x48f649 / 0x2;
    for (let _0x1f26f5 = 0x0; _0x1f26f5 < 0x2; _0x1f26f5++) {
        let _0x49f070 = _0x1530c7['x'] + _0x1530c7['width'] / 0x2;
        let _0x22cc10 = _0x1530c7['y'] + _0x1530c7['height'] / 0x2;
        for (const _0x343b67 of _0x235f57['ENTITIES']) {
            const _0x139a36 = _0x49f070 < _0x343b67['x'] ? _0x343b67['x'] : _0x49f070 > _0x343b67['x'] + _0x343b67['w'] ? _0x343b67['x'] + _0x343b67['w'] : _0x49f070;
            const _0x5a5e31 = _0x22cc10 < _0x343b67['y'] ? _0x343b67['y'] : _0x22cc10 > _0x343b67['y'] + _0x343b67['h'] ? _0x343b67['y'] + _0x343b67['h'] : _0x22cc10;
            const _0x4c270d = _0x49f070 - _0x139a36;
            const _0x1e822e = _0x22cc10 - _0x5a5e31;
            const _0x4264b6 = Math['sqrt'](_0x4c270d * _0x4c270d + _0x1e822e * _0x1e822e);
            if (_0x4264b6 < _0x2a5c9d && _0x4264b6 > 0x0) {
                const _0x12666a = _0x2a5c9d - _0x4264b6;
                const _0x2bf3bf = _0x4c270d / _0x4264b6;
                const _0x400204 = _0x1e822e / _0x4264b6;
                _0x49f070 += _0x2bf3bf * _0x12666a;
                _0x22cc10 += _0x400204 * _0x12666a;
                const _0x6f4a43 = _0x1530c7['vx'] * _0x2bf3bf + _0x1530c7['vy'] * _0x400204;
                if (_0x6f4a43 < 0x0) {
                    _0x1530c7['vx'] -= _0x6f4a43 * _0x2bf3bf;
                    _0x1530c7['vy'] -= _0x6f4a43 * _0x400204;
                }
            } else if (_0x4264b6 === 0x0) {
                const _0x3fb132 = _0x49f070 - _0x343b67['x'];
                const _0xb1a5e4 = _0x343b67['x'] + _0x343b67['w'] - _0x49f070;
                const _0x410d33 = _0x22cc10 - _0x343b67['y'];
                const _0x4fa2ec = _0x343b67['y'] + _0x343b67['h'] - _0x22cc10;
                const _0x5dd1ec = Math['min'](_0x3fb132, _0xb1a5e4, _0x410d33, _0x4fa2ec);
                if (_0x5dd1ec === _0x3fb132)
                    _0x49f070 = _0x343b67['x'] - _0x2a5c9d;
                else if (_0x5dd1ec === _0xb1a5e4)
                    _0x49f070 = _0x343b67['x'] + _0x343b67['w'] + _0x2a5c9d;
                else if (_0x5dd1ec === _0x410d33)
                    _0x22cc10 = _0x343b67['y'] - _0x2a5c9d;
                else
                    _0x22cc10 = _0x343b67['y'] + _0x343b67['h'] + _0x2a5c9d;
            }
        }
        _0x1530c7['x'] = _0x49f070 - _0x1530c7['width'] / 0x2;
        _0x1530c7['y'] = _0x22cc10 - _0x1530c7['height'] / 0x2;
    }
}
function _0x135d1e(_0x7f1140, _0x46aa12) {
    const _0x589abe = _0x235f57['MAP']['layers']['find'](_0x2b4110 => _0x2b4110['name'] === 'trees');
    if (!_0x589abe)
        return ![];
    const _0x493b76 = Math['floor'](_0x7f1140 / _0x235f57['MAP']['tileSize']);
    const _0x6b47b = Math['floor'](_0x46aa12 / _0x235f57['MAP']['tileSize']);
    if (_0x493b76 < 0x0 || _0x493b76 >= _0x235f57['MAP']['columns'] || _0x6b47b < 0x0 || _0x6b47b >= _0x235f57['MAP']['rows'])
        return ![];
    return _0x589abe['data'][_0x6b47b * _0x235f57['MAP']['columns'] + _0x493b76] === 0xb;
}
let _0x1ab27b = null;
function _0x147782() {
    const _0x645ec0 = _0x235f57['MAP'];
    const _0x194ee3 = _0x645ec0['layers']['find'](_0x11336b => _0x11336b['name'] === 'floor2');
    const _0x3b401c = _0x645ec0['layers']['find'](_0x266996 => _0x266996['name'] === 'walls');
    if (!_0x194ee3 || !_0x3b401c) {
        _0x1ab27b = null;
        return;
    }
    const _0x33f76c = _0x645ec0['columns'];
    const _0x59389f = _0x645ec0['rows'];
    const _0x1693db = [];
    const _0x4605e9 = [];
    const _0x52e5d2 = new Set();
    for (let _0x194458 = 0x0; _0x194458 < _0x59389f; _0x194458++) {
        for (let _0x5845cf = 0x0; _0x5845cf < _0x33f76c; _0x5845cf++) {
            const _0x114bdf = _0x194458 * _0x33f76c + _0x5845cf;
            const _0x3e8a3b = _0x194ee3['data'][_0x114bdf];
            const _0x37eafe = _0x3b401c['data'][_0x114bdf];
            if (_0x3e8a3b === 0x2 || _0x3e8a3b === 0x4) {
                _0x1693db['push']({
                    'c': _0x5845cf,
                    'r': _0x194458
                });
                if (_0x37eafe !== 0x0)
                    _0x4605e9['push']({
                        'c': _0x5845cf,
                        'r': _0x194458
                    });
            }
            if (_0x37eafe !== 0x0)
                _0x52e5d2['add'](_0x5845cf + ',' + _0x194458);
        }
    }
    const _0x223567 = new Set(_0x1693db['map'](_0x39a192 => _0x39a192['c'] + ',' + _0x39a192['r']));
    const _0x3a03ca = [
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
                c: _0x55e4dc,
                r: _0x41d6c4
            } of _0x1693db) {
        for (const [_0x1cf7fd, _0x2a5878] of _0x3a03ca) {
            const _0x28b025 = _0x55e4dc + _0x1cf7fd, _0x3d2f2e = _0x41d6c4 + _0x2a5878;
            const _0x14f045 = _0x28b025 + ',' + _0x3d2f2e;
            if (!_0x223567['has'](_0x14f045))
                _0x52e5d2['add'](_0x14f045);
        }
    }
    _0x1ab27b = {
        'wallSet': _0x52e5d2,
        'floorTiles': _0x1693db,
        'wallTiles': _0x4605e9,
        'interiorSet': _0x223567
    };
}
function _0x58913c() {
    const _0x3f7ec7 = _0x235f57['MAP']['layers']['find'](_0x2e922c => _0x2e922c['name'] === 'floor2');
    if (!_0x3f7ec7)
        return ![];
    const _0x5470b2 = Math['floor']((_0x1530c7['x'] + _0x1530c7['width'] / 0x2) / _0x235f57['MAP']['tileSize']);
    const _0x3d6d34 = Math['floor']((_0x1530c7['y'] + _0x1530c7['height'] / 0x2) / _0x235f57['MAP']['tileSize']);
    if (_0x5470b2 < 0x0 || _0x5470b2 >= _0x235f57['MAP']['columns'] || _0x3d6d34 < 0x0 || _0x3d6d34 >= _0x235f57['MAP']['rows'])
        return ![];
    const _0x3769a2 = _0x3f7ec7['data'][_0x3d6d34 * _0x235f57['MAP']['columns'] + _0x5470b2];
    return _0x3769a2 === 0x2;
}
function _0x11f2f3() {
    if (_0x1530c7['isDead']) {
        _0x235f57['SHADOW']['polygon'] = null;
        return;
    }
    const _0x429a56 = _0x235f57['MAP'];
    const _0x13dd6c = _0x235f57['SHADOW'];
    const _0x1a75f4 = _0x429a56['tileSize'];
    if (!_0x1ab27b)
        _0x147782();
    if (!_0x1ab27b) {
        _0x13dd6c['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x44f373,
        floorTiles: _0x42ab14
    } = _0x1ab27b;
    if (_0x42ab14['length'] === 0x0) {
        _0x13dd6c['polygon'] = null;
        return;
    }
    if (!_0x58913c()) {
        _0x13dd6c['polygon'] = null;
        return;
    }
    const _0x292f0b = _0x1530c7['x'] + _0x1530c7['width'] / 0x2;
    const _0x14dcf5 = _0x1530c7['y'] + _0x1530c7['height'] / 0x2;
    if (!_0x1ab27b['_bounds']) {
        let _0x24ef84 = Infinity, _0x54f6e8 = -Infinity, _0x41af98 = Infinity, _0x26bea6 = -Infinity;
        for (const {
                    c: _0x30ca29,
                    r: _0x45fe26
                } of _0x42ab14) {
            if (_0x30ca29 < _0x24ef84)
                _0x24ef84 = _0x30ca29;
            if (_0x30ca29 > _0x54f6e8)
                _0x54f6e8 = _0x30ca29;
            if (_0x45fe26 < _0x41af98)
                _0x41af98 = _0x45fe26;
            if (_0x45fe26 > _0x26bea6)
                _0x26bea6 = _0x45fe26;
        }
        _0x1ab27b['_bounds'] = {
            'minC': Math['max'](0x0, _0x24ef84 - 0x1),
            'maxC': Math['min'](_0x429a56['columns'] - 0x1, _0x54f6e8 + 0x1),
            'minR': Math['max'](0x0, _0x41af98 - 0x1),
            'maxR': Math['min'](_0x429a56['rows'] - 0x1, _0x26bea6 + 0x1)
        };
        const _0x46a69b = [];
        for (let _0x511b02 = _0x1ab27b['_bounds']['minR']; _0x511b02 <= _0x1ab27b['_bounds']['maxR']; _0x511b02++) {
            for (let _0x3ecd34 = _0x1ab27b['_bounds']['minC']; _0x3ecd34 <= _0x1ab27b['_bounds']['maxC']; _0x3ecd34++) {
                if (_0x44f373['has'](_0x3ecd34 + ',' + _0x511b02))
                    _0x46a69b['push'](_0x3ecd34, _0x511b02);
            }
        }
        _0x1ab27b['_wallArr'] = _0x46a69b;
    }
    const {
        minC: _0x17ac83,
        maxC: _0x348341,
        minR: _0x207e22,
        maxR: _0x265a06
    } = _0x1ab27b['_bounds'];
    const _0x291d43 = _0x1ab27b['_wallArr'];
    const _0x206b84 = 0.0001;
    const _0x2b6ee5 = new Set();
    const _0x2821c5 = [];
    for (let _0xcda592 = 0x0; _0xcda592 < _0x291d43['length']; _0xcda592 += 0x2) {
        const _0x312f42 = _0x291d43[_0xcda592], _0x18aeac = _0x291d43[_0xcda592 + 0x1];
        const _0x220d10 = [
            _0x312f42 * _0x1a75f4,
            _0x18aeac * _0x1a75f4,
            _0x312f42 * _0x1a75f4 + _0x1a75f4,
            _0x18aeac * _0x1a75f4,
            _0x312f42 * _0x1a75f4,
            _0x18aeac * _0x1a75f4 + _0x1a75f4,
            _0x312f42 * _0x1a75f4 + _0x1a75f4,
            _0x18aeac * _0x1a75f4 + _0x1a75f4
        ];
        for (let _0x2643bc = 0x0; _0x2643bc < _0x220d10['length']; _0x2643bc += 0x2) {
            const _0xf5f1e5 = _0x220d10[_0x2643bc], _0x48275a = _0x220d10[_0x2643bc + 0x1];
            const _0x5f171c = Math['atan2'](_0x48275a - _0x14dcf5, _0xf5f1e5 - _0x292f0b);
            const _0x12bc14 = Math['round'](_0x5f171c * 0x4e20);
            if (!_0x2b6ee5['has'](_0x12bc14 - 0x1)) {
                _0x2b6ee5['add'](_0x12bc14 - 0x1);
                _0x2821c5['push'](_0x5f171c - _0x206b84);
            }
            if (!_0x2b6ee5['has'](_0x12bc14)) {
                _0x2b6ee5['add'](_0x12bc14);
                _0x2821c5['push'](_0x5f171c);
            }
            if (!_0x2b6ee5['has'](_0x12bc14 + 0x1)) {
                _0x2b6ee5['add'](_0x12bc14 + 0x1);
                _0x2821c5['push'](_0x5f171c + _0x206b84);
            }
        }
    }
    _0x2821c5['sort']((_0x57183d, _0x574160) => _0x57183d - _0x574160);
    const _0x559371 = Math['hypot']((_0x348341 - _0x17ac83 + 0x2) * _0x1a75f4, (_0x265a06 - _0x207e22 + 0x2) * _0x1a75f4);
    const _0x1e064c = _0x148704 => {
        const _0x4c8459 = Math['cos'](_0x148704);
        const _0x29f3c0 = Math['sin'](_0x148704);
        let _0x3a73a0 = _0x559371;
        for (let _0x549672 = 0x0; _0x549672 < _0x291d43['length']; _0x549672 += 0x2) {
            const _0x1d3a11 = _0x291d43[_0x549672], _0x51b0b0 = _0x291d43[_0x549672 + 0x1];
            const _0x445887 = _0x1d3a11 * _0x1a75f4, _0x5371f4 = _0x51b0b0 * _0x1a75f4;
            const _0x35ba97 = _0x445887 + _0x1a75f4, _0x33d446 = _0x5371f4 + _0x1a75f4;
            const _0x3a9bd5 = _0x445887 + _0x1a75f4 * 0.5, _0x1c4078 = _0x5371f4 + _0x1a75f4 * 0.5;
            const _0x4aabfa = Math['abs'](_0x3a9bd5 - _0x292f0b) + Math['abs'](_0x1c4078 - _0x14dcf5);
            if (_0x4aabfa > _0x3a73a0 + _0x1a75f4 * 1.5)
                continue;
            let _0x259da8, _0x514f74, _0x164485;
            _0x259da8 = -_0x29f3c0 * _0x1a75f4;
            if (Math['abs'](_0x259da8) >= 1e-10) {
                _0x514f74 = -(_0x5371f4 - _0x14dcf5) * _0x1a75f4 / _0x259da8;
                _0x164485 = ((_0x445887 - _0x292f0b) * _0x29f3c0 - (_0x5371f4 - _0x14dcf5) * _0x4c8459) / _0x259da8;
                if (_0x514f74 > 0.001 && _0x164485 >= 0x0 && _0x164485 <= 0x1 && _0x514f74 < _0x3a73a0)
                    _0x3a73a0 = _0x514f74;
            }
            _0x259da8 = _0x4c8459 * _0x1a75f4;
            if (Math['abs'](_0x259da8) >= 1e-10) {
                _0x514f74 = (_0x35ba97 - _0x292f0b) * _0x1a75f4 / _0x259da8;
                _0x164485 = ((_0x35ba97 - _0x292f0b) * _0x29f3c0 - (_0x5371f4 - _0x14dcf5) * _0x4c8459) / _0x259da8;
                if (_0x514f74 > 0.001 && _0x164485 >= 0x0 && _0x164485 <= 0x1 && _0x514f74 < _0x3a73a0)
                    _0x3a73a0 = _0x514f74;
            }
            _0x259da8 = _0x29f3c0 * _0x1a75f4;
            if (Math['abs'](_0x259da8) >= 1e-10) {
                _0x514f74 = (_0x33d446 - _0x14dcf5) * _0x1a75f4 / _0x259da8;
                _0x164485 = ((_0x35ba97 - _0x292f0b) * _0x29f3c0 - (_0x33d446 - _0x14dcf5) * _0x4c8459) / _0x259da8;
                if (_0x514f74 > 0.001 && _0x164485 >= 0x0 && _0x164485 <= 0x1 && _0x514f74 < _0x3a73a0)
                    _0x3a73a0 = _0x514f74;
            }
            _0x259da8 = -_0x4c8459 * _0x1a75f4;
            if (Math['abs'](_0x259da8) >= 1e-10) {
                _0x514f74 = -(_0x445887 - _0x292f0b) * _0x1a75f4 / _0x259da8;
                _0x164485 = ((_0x445887 - _0x292f0b) * _0x29f3c0 - (_0x33d446 - _0x14dcf5) * _0x4c8459) / _0x259da8;
                if (_0x514f74 > 0.001 && _0x164485 >= 0x0 && _0x164485 <= 0x1 && _0x514f74 < _0x3a73a0)
                    _0x3a73a0 = _0x514f74;
            }
        }
        const _0x46cc0e = _0x3a73a0 < _0x559371 ? _0x3a73a0 + _0x1a75f4 * 0.5 : _0x3a73a0;
        return {
            'x': _0x292f0b + _0x4c8459 * _0x46cc0e,
            'y': _0x14dcf5 + _0x29f3c0 * _0x46cc0e
        };
    };
    const _0x415696 = [];
    for (let _0x495dbc = 0x0; _0x495dbc < _0x2821c5['length']; _0x495dbc++) {
        const _0x62c581 = _0x1e064c(_0x2821c5[_0x495dbc]);
        _0x415696['push'](_0x62c581['x'], _0x62c581['y']);
    }
    _0x13dd6c['polygon'] = _0x415696['length'] >= 0x6 ? new Float32Array(_0x415696) : null;
}
function _0x52e34f(_0x43369a, _0x4cf65a, _0x356b5c) {
    if (_0x1530c7['isDead'])
        return;
    if (!_0x1ab27b)
        return;
    const {
        floorTiles: _0x31bb9b,
        wallTiles: _0x428b38
    } = _0x1ab27b;
    if (_0x31bb9b['length'] === 0x0)
        return;
    const _0x333407 = _0x235f57['SHADOW'];
    const _0x48e8df = _0x235f57['MAP']['tileSize'];
    const _0x5509eb = _0x235f57['CAMERA']['width'];
    const _0x17b3fd = _0x235f57['CAMERA']['height'];
    if (!_0x235f57['SHADOW']['_buf'] || _0x235f57['SHADOW']['_buf']['width'] !== _0x5509eb || _0x235f57['SHADOW']['_buf']['height'] !== _0x17b3fd) {
        _0x235f57['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x235f57['SHADOW']['_buf']['width'] = _0x5509eb;
        _0x235f57['SHADOW']['_buf']['height'] = _0x17b3fd;
    }
    const _0x19119e = _0x235f57['SHADOW']['_buf'];
    const _0x2ce72c = _0x19119e['getContext']('2d');
    _0x2ce72c['clearRect'](0x0, 0x0, _0x5509eb, _0x17b3fd);
    _0x2ce72c['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x2ce72c['beginPath']();
    for (const {
                c: _0x48bc3c,
                r: _0x2319af
            } of _0x31bb9b) {
        const _0x384e76 = Math['floor'](_0x48bc3c * _0x48e8df - _0x4cf65a), _0x429bb2 = Math['floor'](_0x2319af * _0x48e8df - _0x356b5c);
        if (_0x384e76 > _0x5509eb || _0x429bb2 > _0x17b3fd || _0x384e76 + _0x48e8df < 0x0 || _0x429bb2 + _0x48e8df < 0x0)
            continue;
        _0x2ce72c['rect'](_0x384e76 - 0x2, _0x429bb2 - 0x2, _0x48e8df + 0x4, _0x48e8df + 0x4);
    }
    _0x2ce72c['fill']();
    if (_0x428b38['length'] > 0x0) {
        _0x2ce72c['globalCompositeOperation'] = 'destination-out';
        _0x2ce72c['fillStyle'] = 'rgba(0,0,0,1)';
        _0x2ce72c['beginPath']();
        for (const {
                    c: _0xd7ca61,
                    r: _0x24c673
                } of _0x428b38) {
            const _0x5f14f3 = Math['floor'](_0xd7ca61 * _0x48e8df - _0x4cf65a), _0x407168 = Math['floor'](_0x24c673 * _0x48e8df - _0x356b5c);
            if (_0x5f14f3 > _0x5509eb || _0x407168 > _0x17b3fd || _0x5f14f3 + _0x48e8df < 0x0 || _0x407168 + _0x48e8df < 0x0)
                continue;
            _0x2ce72c['rect'](_0x5f14f3 - 0x2, _0x407168 - 0x2, _0x48e8df + 0x4, _0x48e8df + 0x4);
        }
        _0x2ce72c['fill']();
        _0x2ce72c['globalCompositeOperation'] = 'source-over';
    }
    if (_0x333407['polygon'] && _0x333407['polygon']['length'] >= 0x6) {
        _0x2ce72c['globalCompositeOperation'] = 'destination-out';
        _0x2ce72c['beginPath']();
        const _0x1b1552 = _0x333407['polygon'];
        _0x2ce72c['moveTo'](_0x1b1552[0x0] - _0x4cf65a, _0x1b1552[0x1] - _0x356b5c);
        for (let _0x4c1ee5 = 0x2; _0x4c1ee5 < _0x1b1552['length']; _0x4c1ee5 += 0x2) {
            _0x2ce72c['lineTo'](_0x1b1552[_0x4c1ee5] - _0x4cf65a, _0x1b1552[_0x4c1ee5 + 0x1] - _0x356b5c);
        }
        _0x2ce72c['closePath']();
        _0x2ce72c['fill']();
        _0x2ce72c['globalCompositeOperation'] = 'source-over';
    }
    _0x43369a['drawImage'](_0x19119e, 0x0, 0x0);
}
function _0x3ebf0e(_0x6e8f56) {
    let _0x175080 = 0x0, _0x29cb2c = 0x0;
    const _0x1a732d = _0x235f57['INPUTS']['mouseX'] / _0x235f57['SYSTEM']['viewScale'];
    const _0xe968b9 = _0x235f57['INPUTS']['mouseY'] / _0x235f57['SYSTEM']['viewScale'];
    const _0x46b1d4 = _0x1530c7['x'] - _0x235f57['CAMERA']['x'] + _0x1530c7['width'] / 0x2;
    const _0x240999 = _0x1530c7['y'] - _0x235f57['CAMERA']['y'] + _0x1530c7['height'] / 0x2;
    const _0x243d71 = Math['atan2'](_0xe968b9 - _0x240999, _0x1a732d - _0x46b1d4);
    if (_0x4894d5 !== 0x0 || _0x6263c !== 0x0) {
        _0x175080 = _0x4894d5;
        _0x29cb2c = _0x6263c;
    } else if (_0x550856) {
        let _0x556ec6 = 0x0, _0xf075dc = 0x0;
        if (_0x235f57['INPUTS']['keys']['w'] || _0x235f57['INPUTS']['keys']['arrowup'])
            _0x556ec6 += 0x1;
        if (_0x235f57['INPUTS']['keys']['s'] || _0x235f57['INPUTS']['keys']['arrowdown'])
            _0x556ec6 -= 0x1;
        if (_0x235f57['INPUTS']['keys']['d'] || _0x235f57['INPUTS']['keys']['arrowright'])
            _0xf075dc += 0x1;
        if (_0x235f57['INPUTS']['keys']['a'] || _0x235f57['INPUTS']['keys']['arrowleft'])
            _0xf075dc -= 0x1;
        if (_0x556ec6 !== 0x0 || _0xf075dc !== 0x0) {
            const _0x29e1d4 = _0x243d71 + Math['atan2'](_0xf075dc, _0x556ec6);
            _0x175080 = Math['cos'](_0x29e1d4);
            _0x29cb2c = Math['sin'](_0x29e1d4);
        }
    } else {
        if (_0x235f57['INPUTS']['keys']['w'] || _0x235f57['INPUTS']['keys']['arrowup'])
            _0x29cb2c -= 0x1;
        if (_0x235f57['INPUTS']['keys']['s'] || _0x235f57['INPUTS']['keys']['arrowdown'])
            _0x29cb2c += 0x1;
        if (_0x235f57['INPUTS']['keys']['a'] || _0x235f57['INPUTS']['keys']['arrowleft'])
            _0x175080 -= 0x1;
        if (_0x235f57['INPUTS']['keys']['d'] || _0x235f57['INPUTS']['keys']['arrowright'])
            _0x175080 += 0x1;
        const _0x15ecf3 = _0x175080 !== 0x0 || _0x29cb2c !== 0x0;
        if (_0x15ecf3) {
            const _0x1ca93a = Math['sqrt'](_0x175080 * _0x175080 + _0x29cb2c * _0x29cb2c);
            _0x175080 /= _0x1ca93a;
            _0x29cb2c /= _0x1ca93a;
        }
    }
    if (_0x235f57['GAME_STATE'] === 'NIGHT' && _0x524ba6 === 'Skinwalker') {
        if (_0x235f57['NIGHT_ABILITY_OPEN'] || !_0x235f57['CURRENT_TARGET']) {
            _0x175080 = 0x0;
            _0x29cb2c = 0x0;
            _0x1530c7['vx'] = 0x0;
            _0x1530c7['vy'] = 0x0;
            _0x1530c7['x'] = _0x235f57['MAP']['columns'] * _0x235f57['MAP']['tileSize'] / 0x2 - _0x1530c7['width'] / 0x2;
            _0x1530c7['y'] = _0x235f57['MAP']['rows'] * _0x235f57['MAP']['tileSize'] / 0x2 - _0x1530c7['height'] / 0x2;
        }
    }
    const _0x48637c = _0x175080 !== 0x0 || _0x29cb2c !== 0x0;
    const _0x43689d = (_0x235f57['INPUTS']['keys']['shift'] || _0x3e3869 || _0x2a2fc9) && _0x48637c;
    _0x1530c7['bopTimer'] = _0x43689d ? _0x1530c7['bopTimer'] + _0x6e8f56 : 0x0;
    _0x1530c7['scale'] = 0x1 + (_0x1530c7['bopTimer'] > 0x0 ? Math['sin'](_0x1530c7['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x9424ea = Math['pow'](0.001, _0x6e8f56);
    const _0x5ae56b = _0x43689d ? 0x74a : 0x5d5;
    _0x1530c7['vx'] += _0x175080 * _0x5ae56b * _0x6e8f56;
    _0x1530c7['vy'] += _0x29cb2c * _0x5ae56b * _0x6e8f56;
    _0x1530c7['vx'] *= _0x9424ea;
    _0x1530c7['vy'] *= _0x9424ea;
    _0x1530c7['x'] += _0x1530c7['vx'] * _0x6e8f56;
    _0x1530c7['y'] += _0x1530c7['vy'] * _0x6e8f56;
    for (let _0x4a63cc = 0x0; _0x4a63cc < 0x3; _0x4a63cc++)
        _0x5e556b();
    for (let _0x48a54d = 0x0; _0x48a54d < 0x2; _0x48a54d++)
        _0xd2f743();
    for (let _0x10bc7b = 0x0; _0x10bc7b < 0x2; _0x10bc7b++)
        _0x5d51b9();
    if (_0x1530c7['x'] < 0x0)
        _0x1530c7['x'] = 0x0;
    if (_0x1530c7['y'] < 0x0)
        _0x1530c7['y'] = 0x0;
    if (_0x1530c7['x'] + _0x1530c7['width'] > _0x235f57['MAP']['columns'] * _0x235f57['MAP']['tileSize'])
        _0x1530c7['x'] = _0x235f57['MAP']['columns'] * _0x235f57['MAP']['tileSize'] - _0x1530c7['width'];
    if (_0x1530c7['y'] + _0x1530c7['height'] > _0x235f57['MAP']['rows'] * _0x235f57['MAP']['tileSize'])
        _0x1530c7['y'] = _0x235f57['MAP']['rows'] * _0x235f57['MAP']['tileSize'] - _0x1530c7['height'];
    if (_0x25f294) {
        _0x1530c7['angle'] = _0x170a12 + Math['PI'] / 0x2;
    } else if (_0x4894d5 !== 0x0 || _0x6263c !== 0x0) {
        _0x1530c7['angle'] = Math['atan2'](_0x6263c, _0x4894d5) + Math['PI'] / 0x2;
    } else if (!_0x3cf93c) {
        _0x1530c7['angle'] = _0x243d71 + Math['PI'] / 0x2;
    }
    const _0x50cbfd = _0x1530c7['x'] + _0x1530c7['width'] / 0x2 - _0x235f57['CAMERA']['width'] / 0x2;
    const _0x5ca499 = _0x1530c7['y'] + _0x1530c7['height'] / 0x2 - _0x235f57['CAMERA']['height'] / 0x2;
    if (_0x235f57['CAMERA']['x'] === null || isNaN(_0x235f57['CAMERA']['x']) || !isFinite(_0x235f57['CAMERA']['x'])) {
        _0x235f57['CAMERA']['x'] = _0x50cbfd;
        _0x235f57['CAMERA']['y'] = _0x5ca499;
    } else {
        const _0x515f93 = 0x1 - Math['exp'](-Math['max'](0x0, _0x6e8f56) * 0x28);
        _0x235f57['CAMERA']['x'] += (_0x50cbfd - _0x235f57['CAMERA']['x']) * _0x515f93;
        _0x235f57['CAMERA']['y'] += (_0x5ca499 - _0x235f57['CAMERA']['y']) * _0x515f93;
    }
    for (const _0x2b6129 in _0x2b01d3) {
        const _0x33de23 = _0x2b01d3[_0x2b6129];
        if (_0x33de23['renderX'] === undefined) {
            _0x33de23['renderX'] = _0x33de23['x'];
            _0x33de23['renderY'] = _0x33de23['y'];
            _0x33de23['renderAngle'] = _0x33de23['angle'] || 0x0;
        }
        const _0x5010dc = _0x33de23['x'] + (_0x33de23['vx'] || 0x0) * _0x6e8f56;
        const _0x5c72bf = _0x33de23['y'] + (_0x33de23['vy'] || 0x0) * _0x6e8f56;
        _0x33de23['x'] = _0x5010dc;
        _0x33de23['y'] = _0x5c72bf;
        const _0x4677c8 = 0x1 - Math['exp'](-_0x6e8f56 * 0x12);
        const _0x10c38f = _0x33de23['x'] - _0x33de23['renderX'], _0x161771 = _0x33de23['y'] - _0x33de23['renderY'];
        const _0x419cae = Math['sqrt'](_0x10c38f * _0x10c38f + _0x161771 * _0x161771);
        const _0x1979ef = 0xc8;
        if (_0x419cae > _0x1979ef) {
            _0x33de23['renderX'] = _0x33de23['x'] - _0x10c38f / _0x419cae * _0x1979ef;
            _0x33de23['renderY'] = _0x33de23['y'] - _0x161771 / _0x419cae * _0x1979ef;
        }
        _0x33de23['renderX'] += (_0x33de23['x'] - _0x33de23['renderX']) * _0x4677c8;
        _0x33de23['renderY'] += (_0x33de23['y'] - _0x33de23['renderY']) * _0x4677c8;
        let _0x4939dd = (_0x33de23['angle'] || 0x0) - _0x33de23['renderAngle'];
        while (_0x4939dd < -Math['PI'])
            _0x4939dd += Math['PI'] * 0x2;
        while (_0x4939dd > Math['PI'])
            _0x4939dd -= Math['PI'] * 0x2;
        _0x33de23['renderAngle'] += _0x4939dd * (0x1 - Math['exp'](-_0x6e8f56 * 0x14));
    }
    if (_0x235f57['GAME_STATE'] === 'NIGHT') {
        _0x4917e1 = Math['min'](0.6, _0x4917e1 + _0x6e8f56 * 0.5);
    } else {
        _0x4917e1 = Math['max'](0x0, _0x4917e1 - _0x6e8f56 * 0.5);
    }
    _0x11f2f3();
    _0xe04d74();
}
function _0x23a39b(_0x4ea886, _0x124d34, _0x24fc63, _0x49ec00, _0x2805bf = !![]) {
    _0x4ea886['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x1e5b45 = _0x4ea886['measureText'](_0x124d34)['width'];
    const _0x194c20 = _0x1e5b45 + 0x18;
    const _0x1694dd = 0x1c;
    _0x4ea886['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x4ea886['beginPath']();
    if (_0x4ea886['roundRect']) {
        _0x4ea886['roundRect'](_0x24fc63 - _0x194c20 / 0x2, _0x49ec00 - _0x1694dd, _0x194c20, _0x1694dd, 0x6);
    } else {
        _0x4ea886['rect'](_0x24fc63 - _0x194c20 / 0x2, _0x49ec00 - _0x1694dd, _0x194c20, _0x1694dd);
    }
    _0x4ea886['fill']();
    if (_0x2805bf) {
        _0x4ea886['beginPath']();
        _0x4ea886['moveTo'](_0x24fc63 - 0x6, _0x49ec00);
        _0x4ea886['lineTo'](_0x24fc63 + 0x6, _0x49ec00);
        _0x4ea886['lineTo'](_0x24fc63, _0x49ec00 + 0x6);
        _0x4ea886['fill']();
    }
    _0x4ea886['fillStyle'] = '#ffffff';
    _0x4ea886['textAlign'] = 'center';
    _0x4ea886['textBaseline'] = 'middle';
    _0x4ea886['fillText'](_0x124d34, _0x24fc63, _0x49ec00 - _0x1694dd / 0x2 + 0x1);
}
function _0x47079d(_0x53bce5, _0x18bf86, _0x4d017a, _0x18ad9e) {
    if (!_0x18bf86 || _0x18bf86['length'] === 0x0)
        return;
    let _0x1e2e0b = _0x18ad9e;
    for (let _0x308952 = 0x0; _0x308952 < _0x18bf86['length']; _0x308952++) {
        _0x23a39b(_0x53bce5, _0x18bf86[_0x308952]['text'], _0x4d017a, _0x1e2e0b, _0x308952 === 0x0);
        _0x1e2e0b -= 0x24;
    }
}
function _0x45fdc9() {
    if (!_0x235f57['SYSTEM']['isReady'])
        return;
    _0x11d99e['fillStyle'] = '#000000';
    _0x11d99e['fillRect'](0x0, 0x0, _0x36486b['width'], _0x36486b['height']);
    _0x11d99e['save']();
    try {
        _0x11d99e['scale'](_0x235f57['SYSTEM']['viewScale'], _0x235f57['SYSTEM']['viewScale']);
        _0x11d99e['imageSmoothingEnabled'] = ![];
        const _0x4029ad = Math['floor'](_0x235f57['CAMERA']['x'] || 0x0);
        const _0x3fbb0c = Math['floor'](_0x235f57['CAMERA']['y'] || 0x0);
        const _0x1ca172 = Math['max'](0x0, Math['floor'](_0x4029ad / _0x235f57['MAP']['chunkSize']));
        const _0x362e9a = Math['min'](_0x235f57['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x4029ad + _0x235f57['CAMERA']['width']) / _0x235f57['MAP']['chunkSize']));
        const _0x4986fc = Math['max'](0x0, Math['floor'](_0x3fbb0c / _0x235f57['MAP']['chunkSize']));
        const _0x13cb85 = Math['min'](_0x235f57['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x3fbb0c + _0x235f57['CAMERA']['height']) / _0x235f57['MAP']['chunkSize']));
        for (let _0x4e7b5d = _0x4986fc; _0x4e7b5d <= _0x13cb85; _0x4e7b5d++)
            for (let _0x424afd = _0x1ca172; _0x424afd <= _0x362e9a; _0x424afd++) {
                const _0x70ea3d = _0x424afd * _0x235f57['MAP']['chunkSize'] - _0x4029ad;
                const _0x3c7b60 = _0x4e7b5d * _0x235f57['MAP']['chunkSize'] - _0x3fbb0c;
                _0x11d99e['drawImage'](_0x235f57['MAP']['bgChunks'][_0x4e7b5d][_0x424afd], _0x70ea3d, _0x3c7b60, _0x235f57['MAP']['chunkSize'] + 0x1, _0x235f57['MAP']['chunkSize'] + 0x1);
            }
        if (_0x27ff98['complete'] && _0x27ff98['naturalWidth'] > 0x0) {
            const _0x1d0653 = _0x235f57['MAP']['tileSize'];
            const _0x4080af = _0x1d0653 * 0xa;
            const _0x210377 = _0x235f57['MAP']['columns'] / 0x2 * _0x1d0653 - _0x4080af / 0x2 - _0x4029ad;
            const _0x1d01c0 = _0x235f57['MAP']['rows'] / 0x2 * _0x1d0653 - _0x4080af / 0x2 - _0x3fbb0c;
            _0x11d99e['imageSmoothingEnabled'] = ![];
            _0x11d99e['drawImage'](_0x27ff98, _0x210377, _0x1d01c0, _0x4080af, _0x4080af);
        }
        if (_0x515b77['complete'] && _0x515b77['naturalWidth'] > 0x0) {
            _0x235f57['ENTITIES']['forEach'](_0x34360a => {
                if (_0x34360a['type'] !== 'table')
                    return;
                _0x11d99e['save']();
                _0x11d99e['imageSmoothingEnabled'] = ![];
                const _0x57508a = _0x515b77['naturalWidth'] >= _0x515b77['naturalHeight'];
                const _0xcc37a7 = _0x34360a['w'] >= _0x34360a['h'];
                if (_0x57508a === _0xcc37a7) {
                    _0x11d99e['drawImage'](_0x515b77, _0x34360a['x'] - _0x4029ad, _0x34360a['y'] - _0x3fbb0c, _0x34360a['w'], _0x34360a['h']);
                } else {
                    _0x11d99e['translate'](_0x34360a['x'] - _0x4029ad + _0x34360a['w'] / 0x2, _0x34360a['y'] - _0x3fbb0c + _0x34360a['h'] / 0x2);
                    _0x11d99e['rotate'](Math['PI'] / 0x2);
                    _0x11d99e['drawImage'](_0x515b77, -_0x34360a['h'] / 0x2, -_0x34360a['w'] / 0x2, _0x34360a['h'], _0x34360a['w']);
                }
                _0x11d99e['restore']();
            });
        } else {
            _0x235f57['ENTITIES']['forEach'](_0x37a86c => {
                if (_0x37a86c['type'] !== 'table')
                    return;
                _0x11d99e['save']();
                _0x11d99e['fillStyle'] = '#6b4423';
                _0x11d99e['fillRect'](_0x37a86c['x'] - _0x4029ad, _0x37a86c['y'] - _0x3fbb0c, _0x37a86c['w'], _0x37a86c['h']);
                _0x11d99e['strokeStyle'] = '#422810';
                _0x11d99e['lineWidth'] = 0x3;
                _0x11d99e['strokeRect'](_0x37a86c['x'] - _0x4029ad + 0x1, _0x37a86c['y'] - _0x3fbb0c + 0x1, _0x37a86c['w'] - 0x2, _0x37a86c['h'] - 0x2);
                _0x11d99e['fillStyle'] = '#82532a';
                _0x11d99e['fillRect'](_0x37a86c['x'] - _0x4029ad + 0x4, _0x37a86c['y'] - _0x3fbb0c + 0x4, _0x37a86c['w'] - 0x8, _0x37a86c['h'] - 0x8);
                _0x11d99e['restore']();
            });
        }
        if (_0x3e4733) {
            for (let _0x42e14b = _0x4986fc; _0x42e14b <= _0x13cb85; _0x42e14b++) {
                for (let _0x51d62c = _0x1ca172; _0x51d62c <= _0x362e9a; _0x51d62c++) {
                    const _0x59cb1c = _0x51d62c * _0x235f57['MAP']['chunkSize'] - _0x4029ad;
                    const _0x14bb07 = _0x42e14b * _0x235f57['MAP']['chunkSize'] - _0x3fbb0c;
                    _0x11d99e['drawImage'](_0x235f57['MAP']['fgChunks'][_0x42e14b][_0x51d62c], _0x59cb1c, _0x14bb07, _0x235f57['MAP']['chunkSize'] + 0x1, _0x235f57['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x43ff66 = _0x235f57['GAME_STATE'] === 'NIGHT' && _0x524ba6 === 'Skinwalker' && !_0x1530c7['isDead'];
        const _0x49001d = _0x1530c7['x'] - _0x4029ad + _0x1530c7['width'] / 0x2;
        const _0x2ffc83 = _0x1530c7['y'] - _0x3fbb0c + _0x1530c7['height'] / 0x2;
        const _0x494eb1 = _0x1530c7['width'] * _0x1530c7['scale'] * 1.3;
        const _0x19a2a7 = _0x1530c7['height'] * _0x1530c7['scale'] * 1.3;
        for (const _0x53ad9f in _0x2b01d3) {
            const _0x33fb8a = _0x2b01d3[_0x53ad9f];
            if (_0x33fb8a['isDead'])
                continue;
            const _0x5e093b = (_0x33fb8a['renderX'] ?? _0x33fb8a['x']) - _0x4029ad + _0x33fb8a['width'] / 0x2;
            const _0x179333 = (_0x33fb8a['renderY'] ?? _0x33fb8a['y']) - _0x3fbb0c + _0x33fb8a['height'] / 0x2;
            const _0x4f087e = Math['min'](0x2, Math['max'](0.3, _0x33fb8a['scale'] || 0x1));
            const _0x5ee58e = _0x33fb8a['width'] * _0x4f087e * 1.3;
            const _0xa87034 = _0x33fb8a['height'] * _0x4f087e * 1.3;
            _0x11d99e['save']();
            try {
                _0x11d99e['translate'](_0x5e093b, _0x179333);
                _0x11d99e['rotate'](_0x33fb8a['renderAngle'] ?? 0x0);
                if (_0x33fb8a['isDark'])
                    _0x11d99e['filter'] = 'brightness(0)';
                _0x49d6f9(_0x11d99e, _0x33fb8a['body'], _0x33fb8a['eyes'], _0x5ee58e, _0xa87034);
                if (_0x144ee8['has'](parseInt(_0x53ad9f)) && _0x38e21a['complete'] && _0x38e21a['naturalWidth'] > 0x0) {
                    _0x11d99e['drawImage'](_0x38e21a, -_0x5ee58e / 0x2, -_0xa87034 / 0x2, _0x5ee58e, _0xa87034);
                }
                if (_0x33fb8a['isDark'])
                    _0x11d99e['filter'] = 'none';
            } finally {
                _0x11d99e['restore']();
            }
            if (!_0x135d1e((_0x33fb8a['renderX'] ?? _0x33fb8a['x']) + _0x33fb8a['width'] / 0x2, (_0x33fb8a['renderY'] ?? _0x33fb8a['y']) + _0x33fb8a['height'] / 0x2)) {
                _0x11d99e['textAlign'] = 'center';
                _0x11d99e['lineJoin'] = 'round';
                _0x11d99e['lineWidth'] = 0x3;
                _0x11d99e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x11d99e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x11d99e['fillStyle'] = _0x144ee8['has'](parseInt(_0x53ad9f)) ? '#cc88ff' : '#ffffff';
                const _0x403a27 = _0x33fb8a['isDark'] ? '???' : _0x33fb8a['name'] + (_0x33fb8a['isOwner'] ? '\x20[🗝️]' : '');
                _0x11d99e['strokeText'](_0x403a27, _0x5e093b, _0x179333 - _0xa87034 / 0x2 - 0x10);
                _0x11d99e['fillText'](_0x403a27, _0x5e093b, _0x179333 - _0xa87034 / 0x2 - 0x10);
            }
        }
        if (!_0x1530c7['isDead']) {
            _0x11d99e['save']();
            try {
                _0x11d99e['translate'](_0x49001d, _0x2ffc83);
                _0x11d99e['rotate'](_0x1530c7['angle']);
                if (_0x43ff66)
                    _0x11d99e['filter'] = 'brightness(0)';
                _0x49d6f9(_0x11d99e, _0x36a890, _0x4ed104, _0x494eb1, _0x19a2a7);
                if (_0x144ee8['has'](_0x5b2f9e) && _0x38e21a['complete'] && _0x38e21a['naturalWidth'] > 0x0) {
                    _0x11d99e['drawImage'](_0x38e21a, -_0x494eb1 / 0x2, -_0x19a2a7 / 0x2, _0x494eb1, _0x19a2a7);
                }
                if (_0x43ff66)
                    _0x11d99e['filter'] = 'none';
            } finally {
                _0x11d99e['restore']();
            }
            if (!_0x135d1e(_0x1530c7['x'] + _0x1530c7['width'] / 0x2, _0x1530c7['y'] + _0x1530c7['height'] / 0x2)) {
                _0x11d99e['textAlign'] = 'center';
                _0x11d99e['lineJoin'] = 'round';
                _0x11d99e['lineWidth'] = 0x3;
                _0x11d99e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x11d99e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x11d99e['fillStyle'] = _0x144ee8['has'](_0x5b2f9e) ? '#cc88ff' : '#ffffff';
                const _0x11814e = _0x43ff66 ? '???' : _0x583328 + (_0x103d13 ? '\x20[🗝️]' : '');
                _0x11d99e['strokeText'](_0x11814e, _0x49001d, _0x2ffc83 - _0x19a2a7 / 0x2 - 0x10);
                _0x11d99e['fillText'](_0x11814e, _0x49001d, _0x2ffc83 - _0x19a2a7 / 0x2 - 0x10);
            }
        }
        if (_0x235f57['MAP']['wallChunks'] && _0x235f57['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x570fb9 = _0x4986fc; _0x570fb9 <= _0x13cb85; _0x570fb9++)
                for (let _0x5bb7b0 = _0x1ca172; _0x5bb7b0 <= _0x362e9a; _0x5bb7b0++) {
                    if (!_0x235f57['MAP']['wallChunks'][_0x570fb9] || !_0x235f57['MAP']['wallChunks'][_0x570fb9][_0x5bb7b0])
                        continue;
                    const _0x5e1519 = _0x5bb7b0 * _0x235f57['MAP']['chunkSize'] - _0x4029ad;
                    const _0xa38bc7 = _0x570fb9 * _0x235f57['MAP']['chunkSize'] - _0x3fbb0c;
                    _0x11d99e['drawImage'](_0x235f57['MAP']['wallChunks'][_0x570fb9][_0x5bb7b0], _0x5e1519, _0xa38bc7, _0x235f57['MAP']['chunkSize'] + 0x1, _0x235f57['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x3993a5 of _0x235f57['ENTITIES']) {
            if (_0x3993a5['type'] !== 'npc')
                continue;
            const _0x1d1e39 = _0x3993a5['x'] - _0x4029ad + _0x3993a5['w'] / 0x2;
            const _0x41d060 = _0x3993a5['y'] - _0x3fbb0c + _0x3993a5['h'] / 0x2;
            const _0x99173e = _0x3993a5['w'];
            const _0x3b24f8 = _0x3993a5['h'];
            _0x11d99e['save']();
            _0x11d99e['translate'](_0x1d1e39, _0x41d060);
            _0x11d99e['rotate'](_0x3993a5['angle'] !== undefined ? _0x3993a5['angle'] : 0x0);
            _0x49d6f9(_0x11d99e, _0x3993a5['body'] || 'yanito932.png', _0x3993a5['eyes'], _0x99173e, _0x3b24f8);
            _0x11d99e['restore']();
            _0x11d99e['textAlign'] = 'center';
            _0x11d99e['lineJoin'] = 'round';
            _0x11d99e['lineWidth'] = 0x3;
            _0x11d99e['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x11d99e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x11d99e['fillStyle'] = '#aaaaaa';
            _0x11d99e['strokeText'](_0x3993a5['name'] || 'NPC', _0x1d1e39, _0x41d060 - _0x3b24f8 / 0x2 - 0x10);
            _0x11d99e['fillText'](_0x3993a5['name'] || 'NPC', _0x1d1e39, _0x41d060 - _0x3b24f8 / 0x2 - 0x10);
        }
        if (_0x1530c7['isDead']) {
            for (const _0xa51957 in _0x2b01d3) {
                const _0x5b90b2 = _0x2b01d3[_0xa51957];
                if (!_0x5b90b2['isDead'])
                    continue;
                const _0x31944f = (_0x5b90b2['renderX'] ?? _0x5b90b2['x']) - _0x4029ad + _0x5b90b2['width'] / 0x2;
                const _0x6e516c = (_0x5b90b2['renderY'] ?? _0x5b90b2['y']) - _0x3fbb0c + _0x5b90b2['height'] / 0x2;
                const _0x156553 = _0x5b90b2['width'] * (_0x5b90b2['scale'] || 0x1) * 1.3;
                const _0xc47654 = _0x5b90b2['height'] * (_0x5b90b2['scale'] || 0x1) * 1.3;
                _0x11d99e['save']();
                try {
                    _0x11d99e['translate'](_0x31944f, _0x6e516c);
                    _0x11d99e['rotate'](_0x5b90b2['renderAngle'] ?? 0x0);
                    _0x11d99e['globalAlpha'] = 0.3;
                    _0x49d6f9(_0x11d99e, _0x5b90b2['body'], _0x5b90b2['eyes'], _0x156553, _0xc47654);
                } finally {
                    _0x11d99e['restore']();
                }
                if (!_0x135d1e((_0x5b90b2['renderX'] ?? _0x5b90b2['x']) + _0x5b90b2['width'] / 0x2, (_0x5b90b2['renderY'] ?? _0x5b90b2['y']) + _0x5b90b2['height'] / 0x2)) {
                    _0x11d99e['save']();
                    _0x11d99e['globalAlpha'] = 0.3;
                    _0x11d99e['textAlign'] = 'center';
                    _0x11d99e['lineJoin'] = 'round';
                    _0x11d99e['lineWidth'] = 0x3;
                    _0x11d99e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x11d99e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x11d99e['fillStyle'] = '#ffffff';
                    const _0x500532 = _0x5b90b2['name'] + (_0x5b90b2['isOwner'] ? '\x20[🗝️]' : '');
                    _0x11d99e['strokeText'](_0x500532, _0x31944f, _0x6e516c - _0xc47654 / 0x2 - 0x10);
                    _0x11d99e['fillText'](_0x500532, _0x31944f, _0x6e516c - _0xc47654 / 0x2 - 0x10);
                    _0x11d99e['restore']();
                }
            }
            _0x11d99e['save']();
            try {
                _0x11d99e['translate'](_0x49001d, _0x2ffc83);
                _0x11d99e['rotate'](_0x1530c7['angle']);
                _0x11d99e['globalAlpha'] = 0.3;
                _0x49d6f9(_0x11d99e, _0x36a890, _0x4ed104, _0x494eb1, _0x19a2a7);
            } finally {
                _0x11d99e['restore']();
            }
            if (!_0x135d1e(_0x1530c7['x'] + _0x1530c7['width'] / 0x2, _0x1530c7['y'] + _0x1530c7['height'] / 0x2)) {
                _0x11d99e['save']();
                _0x11d99e['globalAlpha'] = 0.3;
                _0x11d99e['textAlign'] = 'center';
                _0x11d99e['lineJoin'] = 'round';
                _0x11d99e['lineWidth'] = 0x3;
                _0x11d99e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x11d99e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x11d99e['fillStyle'] = '#ffffff';
                const _0x122d3b = _0x583328 + (_0x103d13 ? '\x20[🗝️]' : '');
                _0x11d99e['strokeText'](_0x122d3b, _0x49001d, _0x2ffc83 - _0x19a2a7 / 0x2 - 0x10);
                _0x11d99e['fillText'](_0x122d3b, _0x49001d, _0x2ffc83 - _0x19a2a7 / 0x2 - 0x10);
                _0x11d99e['restore']();
            }
        }
        for (let _0x599a7f = _0x4986fc; _0x599a7f <= _0x13cb85; _0x599a7f++)
            for (let _0x337862 = _0x1ca172; _0x337862 <= _0x362e9a; _0x337862++) {
                const _0x509599 = _0x337862 * _0x235f57['MAP']['chunkSize'] - _0x4029ad;
                const _0x37d8c4 = _0x599a7f * _0x235f57['MAP']['chunkSize'] - _0x3fbb0c;
                _0x11d99e['drawImage'](_0x235f57['MAP']['fgChunks'][_0x599a7f][_0x337862], _0x509599, _0x37d8c4, _0x235f57['MAP']['chunkSize'] + 0x1, _0x235f57['MAP']['chunkSize'] + 0x1);
            }
        if (_0x235f57['EDITOR']['enabled'] && _0x235f57['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x3eed34 = _0x235f57['INPUTS']['mouseX'] / _0x235f57['SYSTEM']['viewScale'] + _0x235f57['CAMERA']['x'];
            const _0x3f0310 = _0x235f57['INPUTS']['mouseY'] / _0x235f57['SYSTEM']['viewScale'] + _0x235f57['CAMERA']['y'];
            const _0x53a02c = Math['floor'](_0x3eed34 / _0x235f57['MAP']['tileSize']);
            const _0x41a5a5 = Math['floor'](_0x3f0310 / _0x235f57['MAP']['tileSize']);
            if (_0x53a02c >= 0x0 && _0x53a02c < _0x235f57['MAP']['columns'] && _0x41a5a5 >= 0x0 && _0x41a5a5 < _0x235f57['MAP']['rows']) {
                const _0x21d971 = _0x53a02c * _0x235f57['MAP']['tileSize'] - _0x4029ad;
                const _0x213604 = _0x41a5a5 * _0x235f57['MAP']['tileSize'] - _0x3fbb0c;
                _0x11d99e['save']();
                _0x11d99e['globalAlpha'] = 0.5;
                if (_0x235f57['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x3a3906 = _0x235f57['EDITOR']['selectedTileGid'] - 0x1;
                    _0x11d99e['drawImage'](_0x33280e, _0x3a3906 % _0x235f57['MAP']['tilesetCols'] * _0x235f57['MAP']['tileSize'], Math['floor'](_0x3a3906 / _0x235f57['MAP']['tilesetCols']) * _0x235f57['MAP']['tileSize'], _0x235f57['MAP']['tileSize'], _0x235f57['MAP']['tileSize'], _0x21d971, _0x213604, _0x235f57['MAP']['tileSize'], _0x235f57['MAP']['tileSize']);
                } else {
                    _0x11d99e['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x11d99e['fillRect'](_0x21d971, _0x213604, _0x235f57['MAP']['tileSize'], _0x235f57['MAP']['tileSize']);
                }
                _0x11d99e['restore']();
            }
        }
        _0x52e34f(_0x11d99e, _0x4029ad, _0x3fbb0c);
        if (_0x4917e1 > 0x0) {
            _0x11d99e['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x4917e1 + ')';
            _0x11d99e['fillRect'](0x0, 0x0, _0x235f57['CAMERA']['width'], _0x235f57['CAMERA']['height']);
        }
        for (const _0x359939 in _0x2b01d3) {
            const _0x41a725 = _0x2b01d3[_0x359939];
            if (_0x41a725['isDead'] && !_0x1530c7['isDead'])
                continue;
            const _0x5625da = (_0x41a725['renderX'] ?? _0x41a725['x']) - _0x4029ad + _0x41a725['width'] / 0x2;
            const _0x1efdbc = (_0x41a725['renderY'] ?? _0x41a725['y']) - _0x3fbb0c + _0x41a725['height'] / 0x2;
            _0x47079d(_0x11d99e, _0x41a725['chats'], _0x5625da, _0x1efdbc - _0x41a725['height'] / 0x2 - 0x20);
        }
        _0x47079d(_0x11d99e, _0x1530c7['chats'], _0x49001d, _0x2ffc83 - _0x1530c7['height'] / 0x2 - 0x20);
    } finally {
        _0x11d99e['restore']();
    }
}
function _0x2adcb7(_0x1d3e8a) {
    if (!_0x235f57['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x2adcb7);
    let _0xc3ecd9 = (_0x1d3e8a - _0x235f57['SYSTEM']['lastTime']) / 0x3e8;
    _0x235f57['SYSTEM']['lastTime'] = _0x1d3e8a;
    if (_0xc3ecd9 > 0.1)
        _0xc3ecd9 = 0.1;
    if (_0xc3ecd9 < 0x0 || isNaN(_0xc3ecd9))
        _0xc3ecd9 = 0.016;
    if (_0x3e4733) {
        _0x1a5ceb(_0xc3ecd9);
        _0x45fdc9();
        return;
    }
    if (!_0x5b2f9e)
        return;
    _0x3ebf0e(_0xc3ecd9);
    _0x377876['tick'](_0x1d3e8a);
    _0x45fdc9();
}
function _0x2db40a() {
    const _0x513e4d = Math['ceil'](_0x235f57['MAP']['columns'] * _0x235f57['MAP']['tileSize'] / _0x235f57['MAP']['chunkSize']);
    const _0x459737 = Math['ceil'](_0x235f57['MAP']['rows'] * _0x235f57['MAP']['tileSize'] / _0x235f57['MAP']['chunkSize']);
    _0x235f57['MAP']['bgChunks'] = [];
    _0x235f57['MAP']['fgChunks'] = [];
    _0x235f57['MAP']['wallChunks'] = [];
    for (let _0x408e03 = 0x0; _0x408e03 < _0x459737; _0x408e03++) {
        _0x235f57['MAP']['bgChunks'][_0x408e03] = [];
        _0x235f57['MAP']['fgChunks'][_0x408e03] = [];
        _0x235f57['MAP']['wallChunks'][_0x408e03] = [];
        for (let _0x4b98ff = 0x0; _0x4b98ff < _0x513e4d; _0x4b98ff++) {
            const _0x2eb8e8 = document['createElement']('canvas');
            _0x2eb8e8['width'] = _0x2eb8e8['height'] = _0x235f57['MAP']['chunkSize'];
            const _0x647c2b = document['createElement']('canvas');
            _0x647c2b['width'] = _0x647c2b['height'] = _0x235f57['MAP']['chunkSize'];
            const _0x354f85 = document['createElement']('canvas');
            _0x354f85['width'] = _0x354f85['height'] = _0x235f57['MAP']['chunkSize'];
            _0x235f57['MAP']['bgChunks'][_0x408e03][_0x4b98ff] = _0x2eb8e8;
            _0x235f57['MAP']['fgChunks'][_0x408e03][_0x4b98ff] = _0x647c2b;
            _0x235f57['MAP']['wallChunks'][_0x408e03][_0x4b98ff] = _0x354f85;
            _0x5af16d(_0x4b98ff, _0x408e03);
        }
    }
}
function _0x5af16d(_0x4ad8c7, _0x81e79f) {
    const _0xbe30e4 = _0x235f57['MAP']['bgChunks'][_0x81e79f][_0x4ad8c7]['getContext']('2d', { 'alpha': !![] });
    const _0x19fa60 = _0x235f57['MAP']['fgChunks'][_0x81e79f][_0x4ad8c7]['getContext']('2d', { 'alpha': !![] });
    const _0x5d53e4 = _0x235f57['MAP']['wallChunks'][_0x81e79f] && _0x235f57['MAP']['wallChunks'][_0x81e79f][_0x4ad8c7] ? _0x235f57['MAP']['wallChunks'][_0x81e79f][_0x4ad8c7]['getContext']('2d', { 'alpha': !![] }) : null;
    _0xbe30e4['imageSmoothingEnabled'] = _0x19fa60['imageSmoothingEnabled'] = ![];
    if (_0x5d53e4)
        _0x5d53e4['imageSmoothingEnabled'] = ![];
    _0xbe30e4['clearRect'](0x0, 0x0, _0x235f57['MAP']['chunkSize'], _0x235f57['MAP']['chunkSize']);
    _0x19fa60['clearRect'](0x0, 0x0, _0x235f57['MAP']['chunkSize'], _0x235f57['MAP']['chunkSize']);
    if (_0x5d53e4)
        _0x5d53e4['clearRect'](0x0, 0x0, _0x235f57['MAP']['chunkSize'], _0x235f57['MAP']['chunkSize']);
    const _0x2b8bb8 = Math['floor'](_0x4ad8c7 * _0x235f57['MAP']['chunkSize'] / _0x235f57['MAP']['tileSize']);
    const _0x203797 = Math['ceil']((_0x4ad8c7 + 0x1) * _0x235f57['MAP']['chunkSize'] / _0x235f57['MAP']['tileSize']);
    const _0x263cee = Math['floor'](_0x81e79f * _0x235f57['MAP']['chunkSize'] / _0x235f57['MAP']['tileSize']);
    const _0x56a945 = Math['ceil']((_0x81e79f + 0x1) * _0x235f57['MAP']['chunkSize'] / _0x235f57['MAP']['tileSize']);
    const _0x1f5dd4 = 0.5;
    const _0x351ba8 = _0x235f57['MAP']['tileSize'] - _0x1f5dd4 * 0x2;
    _0x235f57['MAP']['layers']['forEach'](_0x1e45df => {
        const _0x1a550e = _0x1e45df['name'] === 'walls';
        const _0x2580f5 = _0x1e45df['name'] === 'trees' ? _0x19fa60 : _0x1a550e ? _0x5d53e4 || _0xbe30e4 : _0xbe30e4;
        for (let _0x3c7fc9 = Math['max'](0x0, _0x263cee); _0x3c7fc9 < Math['min'](_0x235f57['MAP']['rows'], _0x56a945); _0x3c7fc9++) {
            for (let _0x5f469c = Math['max'](0x0, _0x2b8bb8); _0x5f469c < Math['min'](_0x235f57['MAP']['columns'], _0x203797); _0x5f469c++) {
                let _0xc8ec91 = _0x1e45df['data'][_0x3c7fc9 * _0x235f57['MAP']['columns'] + _0x5f469c];
                if (_0x1e45df['name'] === 'floor2' && _0x235f57['MAP']['doors'] && _0x235f57['MAP']['doors'][_0x3c7fc9 * _0x235f57['MAP']['columns'] + _0x5f469c]) {
                    _0xc8ec91 = 0x2;
                }
                if (_0xc8ec91 > 0x0) {
                    const _0x7acd52 = _0xc8ec91 - 0x1;
                    const _0x58bbec = _0x7acd52 % _0x235f57['MAP']['tilesetCols'] * _0x235f57['MAP']['tileSize'] + _0x1f5dd4;
                    const _0x5b1bb9 = Math['floor'](_0x7acd52 / _0x235f57['MAP']['tilesetCols']) * _0x235f57['MAP']['tileSize'] + _0x1f5dd4;
                    const _0x183b66 = _0x5f469c * _0x235f57['MAP']['tileSize'] - _0x4ad8c7 * _0x235f57['MAP']['chunkSize'];
                    const _0x2787a1 = _0x3c7fc9 * _0x235f57['MAP']['tileSize'] - _0x81e79f * _0x235f57['MAP']['chunkSize'];
                    if (_0xc8ec91 === 0x4) {
                        const _0x5906cc = 0x1;
                        const _0x463e04 = _0x5906cc % _0x235f57['MAP']['tilesetCols'] * _0x235f57['MAP']['tileSize'] + _0x1f5dd4;
                        const _0x2c237c = Math['floor'](_0x5906cc / _0x235f57['MAP']['tilesetCols']) * _0x235f57['MAP']['tileSize'] + _0x1f5dd4;
                        _0xbe30e4['drawImage'](_0x33280e, _0x463e04, _0x2c237c, _0x351ba8, _0x351ba8, _0x183b66, _0x2787a1, _0x235f57['MAP']['tileSize'], _0x235f57['MAP']['tileSize']);
                        let _0x4c514a = _0x235f57['MAP']['doors'] ? _0x235f57['MAP']['doors'][_0x3c7fc9 * _0x235f57['MAP']['columns'] + _0x5f469c] : null;
                        if (!_0x4c514a) {
                            const _0xba477d = _0x235f57['MAP']['layers']['find'](_0x20423b => _0x20423b['name'] === 'walls');
                            const _0x3f5a97 = _0x3c7fc9 > 0x0 && _0xba477d && _0xba477d['data'][(_0x3c7fc9 - 0x1) * _0x235f57['MAP']['columns'] + _0x5f469c] > 0x0;
                            const _0x2096f0 = _0x3c7fc9 < _0x235f57['MAP']['rows'] - 0x1 && _0xba477d && _0xba477d['data'][(_0x3c7fc9 + 0x1) * _0x235f57['MAP']['columns'] + _0x5f469c] > 0x0;
                            const _0x19d93c = _0x5f469c > 0x0 && _0xba477d && _0xba477d['data'][_0x3c7fc9 * _0x235f57['MAP']['columns'] + _0x5f469c - 0x1] > 0x0;
                            const _0x1b600e = _0x5f469c < _0x235f57['MAP']['columns'] - 0x1 && _0xba477d && _0xba477d['data'][_0x3c7fc9 * _0x235f57['MAP']['columns'] + _0x5f469c + 0x1] > 0x0;
                            if (_0x19d93c && _0x1b600e)
                                _0x4c514a = _0x3c7fc9 < _0x235f57['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x3f5a97 && _0x2096f0)
                                _0x4c514a = _0x5f469c < _0x235f57['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x4685d5 = 0x0;
                        if (_0x4c514a === 'bottom')
                            _0x4685d5 = Math['PI'] / 0x2;
                        else if (_0x4c514a === 'left')
                            _0x4685d5 = Math['PI'];
                        else if (_0x4c514a === 'top')
                            _0x4685d5 = -Math['PI'] / 0x2;
                        else if (_0x4c514a === 'right')
                            _0x4685d5 = 0x0;
                        if (_0x4685d5 !== 0x0) {
                            _0x2580f5['save']();
                            _0x2580f5['translate'](_0x183b66 + _0x235f57['MAP']['tileSize'] / 0x2, _0x2787a1 + _0x235f57['MAP']['tileSize'] / 0x2);
                            _0x2580f5['rotate'](_0x4685d5);
                            _0x2580f5['drawImage'](_0x33280e, _0x58bbec, _0x5b1bb9, _0x351ba8, _0x351ba8, -_0x235f57['MAP']['tileSize'] / 0x2, -_0x235f57['MAP']['tileSize'] / 0x2, _0x235f57['MAP']['tileSize'], _0x235f57['MAP']['tileSize']);
                            _0x2580f5['restore']();
                        } else {
                            _0x2580f5['drawImage'](_0x33280e, _0x58bbec, _0x5b1bb9, _0x351ba8, _0x351ba8, _0x183b66, _0x2787a1, _0x235f57['MAP']['tileSize'], _0x235f57['MAP']['tileSize']);
                        }
                    } else {
                        _0x2580f5['drawImage'](_0x33280e, _0x58bbec, _0x5b1bb9, _0x351ba8, _0x351ba8, _0x183b66, _0x2787a1, _0x235f57['MAP']['tileSize'], _0x235f57['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x196b61() {
    _0x33280e['crossOrigin'] = 'Anonymous';
    _0x33280e['onload'] = () => {
        _0x235f57['MAP']['tilesetCols'] = 0x3;
        _0x147e01();
    };
    _0x33280e['onerror'] = () => {
        _0x235f57['MAP']['tilesetCols'] = 0x1;
        _0x147e01();
    };
    _0x33280e['src'] = 'assets/tilesheet.png';
    _0x27ff98['crossOrigin'] = 'Anonymous';
    _0x27ff98['onload'] = _0x147e01;
    _0x27ff98['onerror'] = () => {
        _0x147e01();
    };
    _0x27ff98['src'] = 'assets/center.png';
    _0x515b77['crossOrigin'] = 'Anonymous';
    _0x515b77['onload'] = _0x147e01;
    _0x515b77['onerror'] = () => {
        _0x147e01();
    };
    _0x515b77['src'] = 'assets/table.png';
}
function _0x147e01() {
    _0x235f57['SYSTEM']['assetsLoaded']++;
    if (_0x235f57['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x12b62a();
    }
}
function _0x2dbd0a(_0x1336d2, _0x253056) {
    if (!_0x103d13 || !_0x4abbb6)
        return;
    const _0x1282c3 = _0x1336d2 / _0x235f57['SYSTEM']['viewScale'] + _0x235f57['CAMERA']['x'];
    const _0x401daf = _0x253056 / _0x235f57['SYSTEM']['viewScale'] + _0x235f57['CAMERA']['y'];
    const _0x32749a = Math['floor'](_0x1282c3 / _0x235f57['MAP']['tileSize']);
    const _0x1ba653 = Math['floor'](_0x401daf / _0x235f57['MAP']['tileSize']);
    if (_0x32749a >= 0x0 && _0x32749a < _0x235f57['MAP']['columns'] && _0x1ba653 >= 0x0 && _0x1ba653 < _0x235f57['MAP']['rows'])
        _0x4abbb6['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x235f57['EDITOR']['selectedLayer'],
            'col': _0x32749a,
            'row': _0x1ba653,
            'gid': _0x235f57['EDITOR']['selectedTileGid']
        }));
}
function _0x3df399() {
    const _0x3f74a9 = document['getElementById']('palette');
    if (!_0x3f74a9 || _0x3f74a9['children']['length'] > 0x0)
        return;
    const _0x25dfb5 = 0x40;
    const _0x119e1d = _0x33280e;
    const _0x47cd78 = document['createElement']('div');
    _0x47cd78['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x196258 = document['createElement']('canvas');
    _0x196258['width'] = 0xc0;
    _0x196258['height'] = 0xa0;
    _0x196258['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x47cd78['appendChild'](_0x196258);
    const _0x363efe = document['createElement']('div');
    _0x363efe['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x47cd78['appendChild'](_0x363efe);
    let _0x43fae4 = 0x0, _0x1a3731 = 0x0;
    let _0x4b4ae3 = ![], _0x2d35d5 = 0x0, _0xc45bc1 = 0x0, _0x4a269a = 0x0, _0x1e583d = 0x0;
    function _0x58071c() {
        const _0x1207bd = _0x196258['getContext']('2d');
        _0x1207bd['clearRect'](0x0, 0x0, _0x196258['width'], _0x196258['height']);
        _0x1207bd['imageSmoothingEnabled'] = ![];
        if (_0x119e1d['complete'] && _0x119e1d['naturalWidth'] > 0x0) {
            _0x1207bd['drawImage'](_0x119e1d, _0x43fae4, _0x1a3731, _0x196258['width'], _0x196258['height'], 0x0, 0x0, _0x196258['width'], _0x196258['height']);
        }
        _0x1207bd['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x1207bd['lineWidth'] = 0x1;
        const _0x3c17ff = Math['floor'](_0x43fae4 / _0x25dfb5);
        const _0x182e9b = Math['floor'](_0x1a3731 / _0x25dfb5);
        for (let _0x6ebb8c = _0x3c17ff; _0x6ebb8c <= _0x3c17ff + Math['ceil'](_0x196258['width'] / _0x25dfb5) + 0x1; _0x6ebb8c++) {
            const _0xcc3b81 = _0x6ebb8c * _0x25dfb5 - _0x43fae4;
            _0x1207bd['beginPath']();
            _0x1207bd['moveTo'](_0xcc3b81, 0x0);
            _0x1207bd['lineTo'](_0xcc3b81, _0x196258['height']);
            _0x1207bd['stroke']();
        }
        for (let _0x2a8a09 = _0x182e9b; _0x2a8a09 <= _0x182e9b + Math['ceil'](_0x196258['height'] / _0x25dfb5) + 0x1; _0x2a8a09++) {
            const _0x237486 = _0x2a8a09 * _0x25dfb5 - _0x1a3731;
            _0x1207bd['beginPath']();
            _0x1207bd['moveTo'](0x0, _0x237486);
            _0x1207bd['lineTo'](_0x196258['width'], _0x237486);
            _0x1207bd['stroke']();
        }
    }
    function _0x44e86e() {
        const _0x39b897 = Math['max'](0x1, Math['ceil'](_0x119e1d['naturalWidth'] / _0x25dfb5));
        const _0x1c9688 = _0x235f57['EDITOR']['selectedTileGid'];
        if (_0x1c9688 <= 0x0) {
            _0x363efe['style']['display'] = 'none';
            return;
        }
        const _0x1dce7f = _0x1c9688 - 0x1;
        const _0x313936 = _0x1dce7f % _0x39b897;
        const _0x5e3736 = Math['floor'](_0x1dce7f / _0x39b897);
        const _0xa66fe0 = _0x313936 * _0x25dfb5 - _0x43fae4;
        const _0x337594 = _0x5e3736 * _0x25dfb5 - _0x1a3731;
        _0x363efe['style']['display'] = 'block';
        _0x363efe['style']['left'] = _0xa66fe0 + 'px';
        _0x363efe['style']['top'] = _0x337594 + 'px';
    }
    _0x119e1d['onload'] = () => {
        _0x58071c();
        _0x44e86e();
    };
    if (_0x119e1d['complete'] && _0x119e1d['naturalWidth'] > 0x0) {
        _0x58071c();
        _0x44e86e();
    }
    _0x47cd78['addEventListener']('mousedown', _0x3ceb01 => {
        if (_0x3ceb01['button'] === 0x0) {
            _0x4b4ae3 = !![];
            _0x2d35d5 = _0x3ceb01['clientX'];
            _0xc45bc1 = _0x3ceb01['clientY'];
            _0x4a269a = _0x43fae4;
            _0x1e583d = _0x1a3731;
            _0x47cd78['style']['cursor'] = 'grabbing';
            _0x3ceb01['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x3d7d77 => {
        if (!_0x4b4ae3)
            return;
        const _0x3bac2c = _0x2d35d5 - _0x3d7d77['clientX'];
        const _0xe7b4ac = _0xc45bc1 - _0x3d7d77['clientY'];
        const _0x45820d = Math['max'](0x0, _0x119e1d['naturalWidth'] - _0x196258['width']);
        const _0x3208c6 = Math['max'](0x0, _0x119e1d['naturalHeight'] - _0x196258['height']);
        _0x43fae4 = Math['max'](0x0, Math['min'](_0x45820d, _0x4a269a + _0x3bac2c));
        _0x1a3731 = Math['max'](0x0, Math['min'](_0x3208c6, _0x1e583d + _0xe7b4ac));
        _0x58071c();
        _0x44e86e();
    });
    window['addEventListener']('mouseup', _0x2636df => {
        if (_0x4b4ae3) {
            _0x4b4ae3 = ![];
            _0x47cd78['style']['cursor'] = 'grab';
        }
    });
    _0x47cd78['addEventListener']('click', _0x12a038 => {
        const _0x73a84f = _0x47cd78['getBoundingClientRect']();
        const _0x52190f = _0x12a038['clientX'] - _0x73a84f['left'] + _0x43fae4;
        const _0x17aa94 = _0x12a038['clientY'] - _0x73a84f['top'] + _0x1a3731;
        const _0x48ad3d = Math['max'](0x1, Math['ceil'](_0x119e1d['naturalWidth'] / _0x25dfb5));
        const _0x294b12 = Math['floor'](_0x52190f / _0x25dfb5);
        const _0x5e590f = Math['floor'](_0x17aa94 / _0x25dfb5);
        const _0x25f71d = _0x5e590f * _0x48ad3d + _0x294b12 + 0x1;
        _0x235f57['EDITOR']['selectedTileGid'] = _0x25f71d;
        _0x44e86e();
    });
    _0x3f74a9['appendChild'](_0x47cd78);
    const _0x4c9c23 = document['createElement']('div');
    _0x4c9c23['className'] = 'tile-btn\x20eraser-btn';
    _0x4c9c23['title'] = 'Eraser\x20(gid\x200)';
    _0x4c9c23['onclick'] = () => {
        _0x235f57['EDITOR']['selectedTileGid'] = 0x0;
        _0x363efe['style']['display'] = 'none';
    };
    _0x3f74a9['appendChild'](_0x4c9c23);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x235f57['EDITOR']['enabled'] = !_0x235f57['EDITOR']['enabled'];
        const _0x2665d1 = document['getElementById']('editor-tools');
        if (_0x235f57['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x2665d1['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x2665d1['style']['display'] = 'none';
        }
    });
    const _0x43c721 = document['getElementById']('start-game-btn');
    if (_0x43c721) {
        _0x43c721['addEventListener']('click', () => {
            if (_0x4abbb6)
                _0x4abbb6['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x15db3a = document['getElementById']('rolelist-toggle-btn');
    if (_0x15db3a) {
        let _0x36fff7 = 'subalignments';
        _0x15db3a['addEventListener']('click', () => {
            if (_0x36fff7 === 'subalignments')
                _0x36fff7 = 'precise';
            else if (_0x36fff7 === 'precise')
                _0x36fff7 = 'off';
            else
                _0x36fff7 = 'subalignments';
            _0x15db3a['innerText'] = 'Role\x20List:\x20' + _0x36fff7['charAt'](0x0)['toUpperCase']() + _0x36fff7['slice'](0x1);
            if (_0x4abbb6)
                _0x4abbb6['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x36fff7
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x330ed9 => {
        if (_0x330ed9['id'] === 'editor-toggle-btn' || _0x330ed9['id'] === 'start-game-btn' || _0x330ed9['id'] === 'rolelist-toggle-btn')
            return;
        _0x330ed9['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x27c7b4 => _0x27c7b4['classList']['remove']('active'));
            _0x330ed9['classList']['add']('active');
            _0x235f57['EDITOR']['selectedLayer'] = _0x330ed9['dataset']['layer'];
        });
    });
}
function _0x47c713(_0x1bcf45) {
    if (_0x4abbb6)
        _0x4abbb6['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x1bcf45
        }));
}
function _0x4e31fa(_0x350537) {
    if (_0x4abbb6)
        _0x4abbb6['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x350537
        }));
}
function _0x36d01d(_0x5e3efa, _0x50d405, _0x5adb8f, _0x35b8ed) {
    const _0x5cf9b7 = document['getElementById']('admin-panel');
    if (_0x5cf9b7)
        _0x5cf9b7['remove']();
    if (_0x5cf9b7 && _0x5cf9b7['dataset']['target'] === String(_0x5e3efa))
        return;
    const _0x436728 = document['createElement']('div');
    _0x436728['id'] = 'admin-panel';
    _0x436728['dataset']['target'] = String(_0x5e3efa);
    _0x436728['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x5c404d = document['createElement']('div');
    _0x5c404d['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x5c404d['textContent'] = _0x50d405;
    _0x436728['appendChild'](_0x5c404d);
    const _0x44a48e = document['createElement']('button');
    _0x44a48e['textContent'] = 'Kick';
    _0x44a48e['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x44a48e['onmouseenter'] = () => _0x44a48e['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x44a48e['onmouseleave'] = () => _0x44a48e['style']['background'] = 'transparent';
    _0x44a48e['onclick'] = () => {
        _0x47c713(_0x5e3efa);
        _0x436728['remove']();
    };
    _0x436728['appendChild'](_0x44a48e);
    const _0x2f3c21 = document['createElement']('button');
    _0x2f3c21['textContent'] = 'Ban';
    _0x2f3c21['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x2f3c21['onmouseenter'] = () => _0x2f3c21['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x2f3c21['onmouseleave'] = () => _0x2f3c21['style']['background'] = 'transparent';
    _0x2f3c21['onclick'] = () => {
        _0x4e31fa(_0x5e3efa);
        _0x436728['remove']();
    };
    _0x436728['appendChild'](_0x2f3c21);
    document['body']['appendChild'](_0x436728);
    const _0x563e16 = _0x436728['offsetWidth'] || 0x91;
    const _0x271889 = _0x436728['offsetHeight'] || 0x50;
    let _0x5527c7 = _0x5adb8f - _0x563e16;
    let _0x13838d = _0x35b8ed;
    if (_0x5527c7 < 0x4)
        _0x5527c7 = _0x5adb8f;
    if (_0x13838d + _0x271889 > window['innerHeight'] - 0x4)
        _0x13838d = window['innerHeight'] - _0x271889 - 0x4;
    _0x436728['style']['left'] = _0x5527c7 + 'px';
    _0x436728['style']['top'] = _0x13838d + 'px';
    const _0x1d411f = _0x2c8ddd => {
        if (!_0x436728['contains'](_0x2c8ddd['target'])) {
            _0x436728['remove']();
            document['removeEventListener']('mousedown', _0x1d411f);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x1d411f), 0x0);
}
function _0x4ee658() {
    const _0x293172 = document['getElementById']('leaderboard-list');
    _0x293172['innerHTML'] = '';
    const _0x476d13 = document['createElement']('div');
    _0x476d13['className'] = 'leaderboard-entry';
    const _0x11900c = document['createElement']('span');
    _0x11900c['textContent'] = _0x583328 + (_0x103d13 ? '\x20[🗝️]' : '');
    if (_0x144ee8['has'](_0x5b2f9e) && !_0x1530c7['isDead']) {
        _0x11900c['style']['color'] = '#cc88ff';
    }
    _0x476d13['appendChild'](_0x11900c);
    _0x293172['appendChild'](_0x476d13);
    for (const _0x362b18 in _0x2b01d3) {
        const _0x326a1e = document['createElement']('div');
        _0x326a1e['className'] = 'leaderboard-entry';
        const _0x45e1e7 = document['createElement']('span');
        _0x45e1e7['textContent'] = _0x2b01d3[_0x362b18]['name'] + (_0x2b01d3[_0x362b18]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x144ee8['has'](parseInt(_0x362b18)) && !_0x2b01d3[_0x362b18]['isDead']) {
            _0x45e1e7['style']['color'] = '#cc88ff';
        }
        _0x326a1e['appendChild'](_0x45e1e7);
        if (_0x103d13 && !_0x2b01d3[_0x362b18]['isOwner']) {
            const _0x2083b5 = _0x2b01d3[_0x362b18]['id'];
            const _0x3ef5cb = _0x2b01d3[_0x362b18]['name'];
            _0x326a1e['style']['cursor'] = 'context-menu';
            _0x326a1e['addEventListener']('contextmenu', _0x2fabfa => {
                _0x2fabfa['preventDefault']();
                _0x2fabfa['stopPropagation']();
                _0x36d01d(_0x2083b5, _0x3ef5cb, _0x2fabfa['clientX'], _0x2fabfa['clientY']);
            });
        }
        _0x293172['appendChild'](_0x326a1e);
    }
}
window['addEventListener']('resize', _0x12b62a);
function _0x12b62a() {
    _0x36486b['width'] = window['innerWidth'];
    _0x36486b['height'] = window['innerHeight'];
    _0x235f57['SYSTEM']['viewScale'] = Math['max'](_0x36486b['width'] / _0x26b612, _0x36486b['height'] / _0x166dab);
    _0x235f57['CAMERA']['width'] = _0x36486b['width'] / _0x235f57['SYSTEM']['viewScale'];
    _0x235f57['CAMERA']['height'] = _0x36486b['height'] / _0x235f57['SYSTEM']['viewScale'];
    _0x11d99e['imageSmoothingEnabled'] = ![];
}
function _0x3574db(_0xc54de9) {
    if (_0xc54de9['ctrlKey'] || _0xc54de9['metaKey']) {
        if (_0xc54de9['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0xc54de9['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0xc54de9['code'])) {
            _0xc54de9['preventDefault']();
            _0xc54de9['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x3574db, { 'passive': ![] });
window['addEventListener']('keydown', _0x3574db, { 'passive': ![] });
window['addEventListener']('keydown', _0x1536fd => {
    const _0x4c53c9 = _0x1536fd['key']['toLowerCase']();
    if (_0x4c53c9 === 'tab') {
        _0x1536fd['preventDefault']();
        const _0x1a188b = document['getElementById']('will-ui');
        const _0x21ceb2 = document['getElementById']('will-input');
        if (_0x1a188b['style']['display'] === 'flex') {
            _0x1a188b['style']['display'] = 'none';
            if (_0x4abbb6)
                _0x4abbb6['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x21ceb2['value']
                }));
            _0x21ceb2['blur']();
        } else {
            _0x1a188b['style']['display'] = 'flex';
            _0x21ceb2['focus']();
            for (let _0x15fb07 in _0x235f57['INPUTS']['keys'])
                _0x235f57['INPUTS']['keys'][_0x15fb07] = ![];
        }
        return;
    }
    if (_0x1536fd['key'] === 'Enter') {
        if (_0x3e4733) {
            const _0x5a8be0 = document['getElementById']('play-btn');
            if (_0x5a8be0)
                _0x5a8be0['click']();
            return;
        }
        if (!_0x4abbb6 || _0x4abbb6['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x5c4a2b = document['getElementById']('chat-ui');
        const _0xf441d9 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0xf441d9) {
            const _0x2500f3 = _0xf441d9['value']['trim']();
            if (_0x2500f3['length'] > 0x0) {
                _0x4abbb6['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x2500f3
                }));
            }
            _0xf441d9['value'] = '';
            _0x5c4a2b['style']['display'] = 'none';
            _0xf441d9['blur']();
        } else {
            _0x5c4a2b['style']['display'] = 'block';
            _0xf441d9['focus']();
            for (let _0xd48656 in _0x235f57['INPUTS']['keys'])
                _0x235f57['INPUTS']['keys'][_0xd48656] = ![];
        }
        _0x1536fd['preventDefault']();
        return;
    }
    if (_0x1536fd['key'] === 'Escape') {
        const _0x1528b4 = document['getElementById']('guide-ui');
        if (_0x1528b4 && _0x1528b4['style']['display'] === 'flex') {
            _0x1528b4['style']['display'] = 'none';
            return;
        }
        const _0x833206 = document['getElementById']('ability-ui');
        if (_0x833206 && _0x833206['style']['display'] === 'block') {
            _0x833206['style']['display'] = 'none';
            return;
        }
        const _0x3597fb = document['getElementById']('settings-panel');
        if (_0x3597fb && _0x3597fb['style']['display'] === 'block') {
            _0x3597fb['style']['display'] = 'none';
            return;
        }
        const _0x1aaad4 = document['getElementById']('mayor-confirm-dialog');
        if (_0x1aaad4 && _0x1aaad4['style']['display'] === 'flex') {
            _0x1aaad4['style']['display'] = 'none';
            return;
        }
        const _0x31003d = document['getElementById']('target-chooser-ui');
        if (_0x31003d && _0x31003d['style']['display'] === 'flex') {
            _0x31003d['style']['display'] = 'none';
            return;
        }
        const _0x1d567a = document['getElementById']('chat-ui');
        const _0x1462a7 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x1462a7) {
            _0x1462a7['value'] = '';
            _0x1d567a['style']['display'] = 'none';
            _0x1462a7['blur']();
            _0x1536fd['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x235f57['INPUTS']['keys']['hasOwnProperty'](_0x4c53c9))
            _0x235f57['INPUTS']['keys'][_0x4c53c9] = !![];
        if (!_0x4abbb6 || _0x4abbb6['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x4c53c9 === 'h' && !_0x1536fd['repeat']) {
            const _0x505763 = document['getElementById']('guide-ui');
            if (_0x505763) {
                _0x505763['style']['display'] = _0x505763['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x4c53c9 === 't' && !_0x1536fd['repeat']) {
            if (_0x1530c7['isDead'])
                return;
            if (_0x524ba6 === 'Mayor') {
                if (_0x144ee8['has'](_0x5b2f9e)) {
                    _0x28d4e3('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x15924d = document['getElementById']('mayor-confirm-dialog');
                if (_0x15924d)
                    _0x15924d['style']['display'] = 'flex';
                return;
            }
            if (_0x235f57['GAME_STATE'] === 'NIGHT') {
                if (!_0x235f57['NIGHT_ABILITY_OPEN']) {
                    _0x28d4e3('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x1599fd = document['getElementById']('ability-ui');
                if (_0x1599fd) {
                    if (_0x1599fd['style']['display'] === 'block') {
                        _0x1599fd['style']['display'] = 'none';
                    } else {
                        _0x3519ec();
                        _0x1599fd['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x235f57['GAME_STATE'] === 'DAY_DISCUSS' || _0x235f57['GAME_STATE'] === 'DAY_VOTE') {
                _0x28d4e3('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x4c53c9 === 'e' && !_0x1530c7['isDead']) {
            const _0x7f3bf8 = Date['now']();
            if (!window['_lastDoorSend'] || _0x7f3bf8 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x7f3bf8;
                _0x4abbb6['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x223b7a => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x2c82e3 = _0x223b7a['key']['toLowerCase']();
        if (_0x235f57['INPUTS']['keys']['hasOwnProperty'](_0x2c82e3))
            _0x235f57['INPUTS']['keys'][_0x2c82e3] = ![];
    }
});
window['addEventListener']('mousemove', _0x5038ca => {
    _0x235f57['INPUTS']['mouseX'] = _0x5038ca['clientX'];
    _0x235f57['INPUTS']['mouseY'] = _0x5038ca['clientY'];
    if (_0x235f57['INPUTS']['isMouseDown'] && _0x235f57['EDITOR']['enabled']) {
        _0x2dbd0a(_0x5038ca['clientX'], _0x5038ca['clientY']);
    }
});
window['addEventListener']('mousedown', _0x49ea21 => {
    if (_0x49ea21['target']['closest']('#editor-ui') || _0x49ea21['target']['closest']('#leaderboard-ui') || _0x49ea21['target']['closest']('#chat-log-ui') || _0x49ea21['target']['closest']('#target-chooser-ui') || _0x49ea21['target']['closest']('#guide-ui') || _0x49ea21['target']['closest']('#role-list-ui') || _0x49ea21['target']['closest']('#ability-ui') || _0x49ea21['target']['closest']('#settings-panel') || _0x49ea21['target']['closest']('#mayor-confirm-dialog') || _0x49ea21['target']['closest']('#mobile-action-bar') || _0x49ea21['target']['closest']('#mobile-top-bar') || _0x49ea21['target']['closest']('#mobile-joystick-zone') || _0x49ea21['target']['closest']('#mobile-chat-overlay') || _0x49ea21['target']['closest']('#will-ui') || _0x49ea21['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x49ea21['button'] === 0x0) {
        _0x235f57['INPUTS']['isMouseDown'] = !![];
        if (_0x235f57['EDITOR']['enabled'])
            _0x2dbd0a(_0x49ea21['clientX'], _0x49ea21['clientY']);
    }
});
window['addEventListener']('mouseup', _0x5ba251 => {
    _0x235f57['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x2e64d4 => {
    if (_0x2e64d4['target']['closest']('#settings-btn'))
        return;
    const _0x539471 = document['getElementById']('leaderboard-list');
    const _0x2139d1 = document['getElementById']('leaderboard-toggle');
    if (_0x539471['style']['display'] === 'none') {
        _0x539471['style']['display'] = 'flex';
        _0x2139d1['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x539471['style']['display'] = 'none';
        _0x2139d1['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x54c3e4 = document['getElementById']('close-target-btn');
if (_0x54c3e4) {
    _0x54c3e4['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x455fbf = document['getElementById']('close-guide-btn');
if (_0x455fbf) {
    _0x455fbf['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0xb7f7c7 = document['getElementById']('role-list-header');
if (_0xb7f7c7) {
    _0xb7f7c7['addEventListener']('click', () => {
        const _0x4fa3b1 = document['getElementById']('role-list-items');
        const _0xc1e1b1 = document['getElementById']('role-list-toggle');
        if (_0x4fa3b1['style']['display'] === 'none') {
            _0x4fa3b1['style']['display'] = 'flex';
            _0xc1e1b1['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x4fa3b1['style']['display'] = 'none';
            _0xc1e1b1['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x27d0a9() {
    const _0x277e8f = document['getElementById']('mobile-joystick-zone');
    const _0x2a262c = document['getElementById']('mobile-joystick-base');
    const _0x27ab88 = document['getElementById']('mobile-joystick-knob');
    if (_0x277e8f && _0x2a262c && _0x27ab88) {
        const _0x5c6f12 = 0x3e;
        const _0x3db5ba = (_0x4278da, _0x57c01a) => {
            const _0x126007 = _0x2a262c['getBoundingClientRect']();
            const _0x2c0bc8 = _0x126007['left'] + _0x126007['width'] / 0x2;
            const _0x1520b5 = _0x126007['top'] + _0x126007['height'] / 0x2;
            const _0x496a83 = _0x4278da - _0x2c0bc8;
            const _0x5eca63 = _0x57c01a - _0x1520b5;
            const _0x50c167 = Math['hypot'](_0x496a83, _0x5eca63);
            if (_0x50c167 === 0x0) {
                _0x4894d5 = 0x0;
                _0x6263c = 0x0;
                _0x2a2fc9 = ![];
                _0x27ab88['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x3d4bf6 = Math['min'](_0x50c167, _0x5c6f12);
            const _0x2fd9d0 = _0x496a83 / _0x50c167 * _0x3d4bf6;
            const _0x2ce529 = _0x5eca63 / _0x50c167 * _0x3d4bf6;
            _0x4894d5 = _0x2fd9d0 / _0x5c6f12;
            _0x6263c = _0x2ce529 / _0x5c6f12;
            _0x2a2fc9 = _0x50c167 >= _0x5c6f12 * 0.75;
            _0x27ab88['style']['transform'] = 'translate(' + _0x2fd9d0 + 'px,\x20' + _0x2ce529 + 'px)';
        };
        const _0x55f627 = _0x15deaa => {
            for (let _0x12c6b8 = 0x0; _0x12c6b8 < _0x15deaa['changedTouches']['length']; _0x12c6b8++) {
                const _0x1f16ea = _0x15deaa['changedTouches'][_0x12c6b8];
                if (_0x740cac === null) {
                    _0x740cac = _0x1f16ea['identifier'];
                    _0xda2d5a = !![];
                    _0x3db5ba(_0x1f16ea['clientX'], _0x1f16ea['clientY']);
                    break;
                }
            }
        };
        const _0x5ef504 = _0x13d7e6 => {
            for (let _0x45ce42 = 0x0; _0x45ce42 < _0x13d7e6['changedTouches']['length']; _0x45ce42++) {
                const _0x5e0cdf = _0x13d7e6['changedTouches'][_0x45ce42];
                if (_0x5e0cdf['identifier'] === _0x740cac) {
                    _0x3db5ba(_0x5e0cdf['clientX'], _0x5e0cdf['clientY']);
                    break;
                }
            }
        };
        const _0x23fed9 = _0x3db615 => {
            for (let _0x5f2b93 = 0x0; _0x5f2b93 < _0x3db615['changedTouches']['length']; _0x5f2b93++) {
                const _0x287a66 = _0x3db615['changedTouches'][_0x5f2b93];
                if (_0x287a66['identifier'] === _0x740cac) {
                    _0x740cac = null;
                    _0xda2d5a = ![];
                    _0x4894d5 = 0x0;
                    _0x6263c = 0x0;
                    _0x2a2fc9 = ![];
                    _0x27ab88['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x277e8f['addEventListener']('touchstart', _0x3f2cfa => {
            _0x3f2cfa['preventDefault']();
            _0x55f627(_0x3f2cfa);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x5ef504, { 'passive': !![] });
        window['addEventListener']('touchend', _0x23fed9, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x23fed9, { 'passive': !![] });
    }
    const _0x352ec7 = (_0x5924ac, _0x41f5c6) => {
        const _0x442a6a = _0x5924ac / _0x235f57['SYSTEM']['viewScale'];
        const _0x3204fa = _0x41f5c6 / _0x235f57['SYSTEM']['viewScale'];
        const _0x2fce03 = _0x1530c7['x'] - _0x235f57['CAMERA']['x'] + _0x1530c7['width'] / 0x2;
        const _0x4c11bd = _0x1530c7['y'] - _0x235f57['CAMERA']['y'] + _0x1530c7['height'] / 0x2;
        _0x170a12 = Math['atan2'](_0x3204fa - _0x4c11bd, _0x442a6a - _0x2fce03);
        _0x25f294 = !![];
        _0x235f57['INPUTS']['mouseX'] = _0x5924ac;
        _0x235f57['INPUTS']['mouseY'] = _0x41f5c6;
    };
    _0x36486b['addEventListener']('touchstart', _0x1ca6d2 => {
        if (_0x3e4733)
            return;
        for (let _0x2de94e = 0x0; _0x2de94e < _0x1ca6d2['changedTouches']['length']; _0x2de94e++) {
            const _0x46bec4 = _0x1ca6d2['changedTouches'][_0x2de94e];
            if (_0x46bec4['identifier'] !== _0x740cac && _0x4cd829 === null) {
                _0x4cd829 = _0x46bec4['identifier'];
                _0x352ec7(_0x46bec4['clientX'], _0x46bec4['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x36486b['addEventListener']('touchmove', _0x1aca10 => {
        if (_0x3e4733)
            return;
        for (let _0xe33bf4 = 0x0; _0xe33bf4 < _0x1aca10['changedTouches']['length']; _0xe33bf4++) {
            const _0x1cad4e = _0x1aca10['changedTouches'][_0xe33bf4];
            if (_0x1cad4e['identifier'] === _0x4cd829) {
                _0x352ec7(_0x1cad4e['clientX'], _0x1cad4e['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x4d2319 = _0xe2afc2 => {
        for (let _0xf4c7f6 = 0x0; _0xf4c7f6 < _0xe2afc2['changedTouches']['length']; _0xf4c7f6++) {
            const _0x4f2d1c = _0xe2afc2['changedTouches'][_0xf4c7f6];
            if (_0x4f2d1c['identifier'] === _0x4cd829) {
                _0x4cd829 = null;
                _0x25f294 = ![];
                break;
            }
        }
    };
    _0x36486b['addEventListener']('touchend', _0x4d2319, { 'passive': !![] });
    _0x36486b['addEventListener']('touchcancel', _0x4d2319, { 'passive': !![] });
    const _0x220fb8 = document['getElementById']('mob-sprint-btn');
    if (_0x220fb8) {
        _0x220fb8['addEventListener']('click', _0x5f2098 => {
            _0x5f2098['stopPropagation']();
            _0x3e3869 = !_0x3e3869;
            _0x220fb8['classList']['toggle']('active', _0x3e3869);
        });
    }
    const _0x58e56d = document['getElementById']('mob-interact-btn');
    if (_0x58e56d) {
        _0x58e56d['addEventListener']('click', _0x4a35b5 => {
            _0x4a35b5['stopPropagation']();
            if (!_0x1530c7['isDead']) {
                const _0x3950c9 = Date['now']();
                if (!window['_lastDoorSend'] || _0x3950c9 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x3950c9;
                    if (_0x4abbb6 && _0x4abbb6['readyState'] === WebSocket['OPEN'])
                        _0x4abbb6['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x1abec2 = document['getElementById']('mob-ability-btn');
    if (_0x1abec2) {
        _0x1abec2['addEventListener']('click', _0x328495 => {
            _0x328495['stopPropagation']();
            if (_0x1530c7['isDead'])
                return;
            if (_0x524ba6 === 'Mayor') {
                if (_0x144ee8['has'](_0x5b2f9e)) {
                    _0x28d4e3('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x28791b = document['getElementById']('mayor-confirm-dialog');
                if (_0x28791b)
                    _0x28791b['style']['display'] = 'flex';
                return;
            }
            if (_0x235f57['GAME_STATE'] === 'NIGHT') {
                if (!_0x235f57['NIGHT_ABILITY_OPEN']) {
                    _0x28d4e3('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x175a25 = document['getElementById']('ability-ui');
                if (_0x175a25) {
                    if (_0x175a25['style']['display'] === 'block') {
                        _0x175a25['style']['display'] = 'none';
                    } else {
                        _0x3519ec();
                        _0x175a25['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x235f57['GAME_STATE'] === 'DAY_DISCUSS' || _0x235f57['GAME_STATE'] === 'DAY_VOTE') {
                _0x28d4e3('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x5e2a28 = document['getElementById']('mob-will-btn');
    const _0x3ef6a4 = document['getElementById']('will-ui');
    const _0x4efaca = document['getElementById']('will-input');
    const _0x5a2e6e = document['getElementById']('close-will-btn');
    const _0x347463 = () => {
        if (!_0x3ef6a4)
            return;
        if (_0x3ef6a4['style']['display'] === 'flex') {
            _0x3ef6a4['style']['display'] = 'none';
            if (_0x4abbb6 && _0x4abbb6['readyState'] === WebSocket['OPEN'] && _0x4efaca) {
                _0x4abbb6['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x4efaca['value']
                }));
            }
            if (_0x4efaca)
                _0x4efaca['blur']();
        } else {
            _0x3ef6a4['style']['display'] = 'flex';
            if (_0x4efaca)
                _0x4efaca['focus']();
        }
    };
    if (_0x5e2a28)
        _0x5e2a28['addEventListener']('click', _0x4160ae => {
            _0x4160ae['stopPropagation']();
            _0x347463();
        });
    if (_0x5a2e6e)
        _0x5a2e6e['addEventListener']('click', _0x1930b8 => {
            _0x1930b8['stopPropagation']();
            _0x347463();
        });
    const _0x31481c = document['getElementById']('mob-chat-btn');
    const _0x2c92a2 = document['getElementById']('mobile-chat-overlay');
    const _0x35a77c = document['getElementById']('mobile-chat-input');
    const _0x5a8813 = document['getElementById']('mobile-chat-send');
    const _0x2ed52e = document['getElementById']('mobile-chat-cancel');
    const _0x3bc9dd = () => {
        if (!_0x2c92a2 || !_0x35a77c)
            return;
        _0x2c92a2['style']['display'] = 'flex';
        _0x35a77c['value'] = '';
        _0x35a77c['focus']();
    };
    const _0x59665d = () => {
        if (!_0x2c92a2 || !_0x35a77c)
            return;
        _0x2c92a2['style']['display'] = 'none';
        _0x35a77c['blur']();
    };
    const _0x57d39c = () => {
        if (!_0x35a77c)
            return;
        const _0x1bef5e = _0x35a77c['value']['trim']();
        if (_0x1bef5e['length'] > 0x0 && _0x4abbb6 && _0x4abbb6['readyState'] === WebSocket['OPEN']) {
            _0x4abbb6['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x1bef5e
            }));
        }
        _0x35a77c['value'] = '';
        _0x59665d();
    };
    if (_0x31481c)
        _0x31481c['addEventListener']('click', _0x1f1c85 => {
            _0x1f1c85['stopPropagation']();
            _0x3bc9dd();
        });
    if (_0x5a8813)
        _0x5a8813['addEventListener']('click', _0x536c0e => {
            _0x536c0e['stopPropagation']();
            _0x57d39c();
        });
    if (_0x2ed52e)
        _0x2ed52e['addEventListener']('click', _0x45e661 => {
            _0x45e661['stopPropagation']();
            _0x59665d();
        });
    if (_0x35a77c) {
        _0x35a77c['addEventListener']('keydown', _0x2d8966 => {
            if (_0x2d8966['key'] === 'Enter') {
                _0x2d8966['preventDefault']();
                _0x57d39c();
            } else if (_0x2d8966['key'] === 'Escape') {
                _0x59665d();
            }
        });
    }
    const _0x3e20a2 = document['getElementById']('mob-top-chat');
    if (_0x3e20a2)
        _0x3e20a2['addEventListener']('click', _0x303066 => {
            _0x303066['stopPropagation']();
            _0x3bc9dd();
        });
    const _0x5f0b6c = document['getElementById']('mob-top-will');
    if (_0x5f0b6c)
        _0x5f0b6c['addEventListener']('click', _0x2ceed5 => {
            _0x2ceed5['stopPropagation']();
            _0x347463();
        });
    const _0x7c4266 = document['getElementById']('mob-top-roles');
    if (_0x7c4266) {
        _0x7c4266['addEventListener']('click', _0x4dac93 => {
            _0x4dac93['stopPropagation']();
            const _0x5446be = document['getElementById']('role-list-ui');
            const _0x2a6ac1 = document['getElementById']('leaderboard-ui');
            if (_0x2a6ac1)
                _0x2a6ac1['style']['display'] = 'none';
            if (_0x5446be)
                _0x5446be['style']['display'] = _0x5446be['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x1cbdfe = document['getElementById']('mob-top-players');
    if (_0x1cbdfe) {
        _0x1cbdfe['addEventListener']('click', _0x1cb292 => {
            _0x1cb292['stopPropagation']();
            const _0x4dfcbe = document['getElementById']('leaderboard-ui');
            const _0x2d9a98 = document['getElementById']('role-list-ui');
            if (_0x2d9a98)
                _0x2d9a98['style']['display'] = 'none';
            if (_0x4dfcbe)
                _0x4dfcbe['style']['display'] = _0x4dfcbe['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x567e1e = document['getElementById']('mob-top-help');
    if (_0x567e1e) {
        _0x567e1e['addEventListener']('click', _0x45cf36 => {
            _0x45cf36['stopPropagation']();
            const _0x403ed6 = document['getElementById']('guide-ui');
            if (_0x403ed6)
                _0x403ed6['style']['display'] = _0x403ed6['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x3cf93c) {
            _0x3cf93c = !![];
            _0x570df4();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
