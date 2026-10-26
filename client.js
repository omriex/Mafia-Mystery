document['addEventListener']('contextmenu', _0x59ca4f => _0x59ca4f['preventDefault']());
const _0xb82136 = {
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
let _0x85105f = '';
function _0x1386e1(_0x22632f, _0x57c347) {
    const _0x28a56f = document['getElementById']('role-list-ui');
    const _0xb2562f = document['getElementById']('role-list-items');
    if (!_0x28a56f || !_0xb2562f)
        return;
    if (!_0x57c347 || _0x57c347 === 'off' || !_0x22632f || _0x22632f['length'] === 0x0) {
        _0x28a56f['style']['display'] = 'none';
        return;
    }
    const _0x2aa299 = _0x57c347 + '|' + JSON['stringify'](_0x22632f);
    if (_0x2aa299 === _0x85105f)
        return;
    _0x85105f = _0x2aa299;
    const _0x569eb6 = document['getElementById']('role-tooltip');
    if (_0x569eb6) {
        _0x569eb6['style']['visibility'] = 'hidden';
        _0x569eb6['style']['opacity'] = '0';
    }
    _0x28a56f['style']['display'] = 'flex';
    _0xb2562f['innerHTML'] = '';
    _0x22632f['forEach'](_0x7f3ac3 => {
        const _0x2ca8f5 = document['createElement']('div');
        _0x2ca8f5['className'] = 'role-list-entry';
        const _0x4f843c = _0x7f3ac3['name']['includes']('Mafia') || _0x7f3ac3['name'] === 'Skinwalker';
        _0x2ca8f5['classList']['add'](_0x4f843c ? 'mafia' : 'town');
        if (_0x57c347 === 'precise' && _0x7f3ac3['isDead']) {
            _0x2ca8f5['classList']['remove']('town', 'mafia');
            _0x2ca8f5['classList']['add']('dead');
            _0x2ca8f5['innerHTML'] = '<span>' + _0x7f3ac3['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x351756 = _0x7f3ac3['count'] !== undefined && _0x7f3ac3['count'] !== null ? _0x7f3ac3['count'] + 'x\x20' : '';
            _0x2ca8f5['innerHTML'] = '<span>' + _0x351756 + _0x7f3ac3['name'] + '</span>';
        }
        if (_0x57c347 === 'subalignments' && _0xb82136[_0x7f3ac3['name']]) {
            _0x2ca8f5['style']['cursor'] = 'pointer';
            _0x2ca8f5['addEventListener']('mouseenter', () => {
                const _0x462d0c = document['getElementById']('role-tooltip');
                if (!_0x462d0c)
                    return;
                const _0x1bbd5f = _0xb82136[_0x7f3ac3['name']]['join'](',\x20');
                _0x462d0c['innerHTML'] = '';
                const _0x17b2ec = document['createElement']('span');
                _0x17b2ec['style']['color'] = '#ffcc00';
                _0x17b2ec['textContent'] = _0x7f3ac3['name'];
                _0x462d0c['appendChild'](_0x17b2ec);
                _0x462d0c['appendChild'](document['createElement']('br'));
                _0x462d0c['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x1bbd5f));
                const _0x58023e = _0x2ca8f5['getBoundingClientRect']();
                _0x462d0c['style']['left'] = _0x58023e['left'] - 0xeb + 'px';
                _0x462d0c['style']['top'] = _0x58023e['top'] + 'px';
                _0x462d0c['style']['display'] = 'block';
                _0x462d0c['style']['visibility'] = 'visible';
                _0x462d0c['style']['opacity'] = '1';
            });
            _0x2ca8f5['addEventListener']('mouseleave', () => {
                const _0x3d360c = document['getElementById']('role-tooltip');
                if (_0x3d360c) {
                    _0x3d360c['style']['display'] = 'none';
                    _0x3d360c['style']['visibility'] = 'hidden';
                    _0x3d360c['style']['opacity'] = '0';
                }
            });
        }
        _0xb2562f['appendChild'](_0x2ca8f5);
    });
}
let _0x10f155 = null;
let _0x372643 = null;
const _0x54da7b = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x4b2192 = 'Player???';
let _0x8a222e = ![];
let _0x26a5c8 = {};
let _0x16f913 = null;
let _0x22e793 = 0x0;
let _0x3fcb70 = 0x0;
let _0x558c67 = new Set();
let _0x4d7c9b = ![];
let _0x8db8a3 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x2e2f29 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x3d53ad = ![];
let _0x189d75 = null;
let _0x5069b3 = 0x0;
let _0x51f743 = 0x0;
let _0x48de7b = ![];
let _0x21ed5e = ![];
let _0x2b0ed9 = 0x0;
let _0x2844c5 = null;
let _0x23c2e0 = ![];
const _0x1d5be5 = ((() => {
    const _0x353a5c = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x1eccf1 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x8beaf3 = 0x320;
    const _0x4a7e1f = {};
    const _0x1d801a = {};
    let _0x510946 = null;
    let _0x35b437 = _0x1eccf1 === 0x0;
    let _0x1a8277 = ![];
    for (const [_0x3c404a, _0x4f58e0] of Object['entries'](_0x353a5c)) {
        const _0x3792b6 = new Audio(_0x4f58e0);
        _0x3792b6['loop'] = !![];
        _0x3792b6['volume'] = 0x0;
        _0x3792b6['preload'] = 'auto';
        _0x4a7e1f[_0x3c404a] = _0x3792b6;
        _0x1d801a[_0x3c404a] = null;
    }
    const _0x9cc2ce = _0x49e43c => Math['min'](0x1, Math['max'](0x0, _0x49e43c));
    function _0x157a41(_0x5e7897) {
        if (_0x1d801a[_0x5e7897] !== null) {
            cancelAnimationFrame(_0x1d801a[_0x5e7897]);
            _0x1d801a[_0x5e7897] = null;
        }
    }
    function _0x5219a6(_0x350632, _0x537bed, _0x21eac7, _0x5d8b54, _0x153f6f) {
        _0x157a41(_0x350632);
        const _0x1f6afa = _0x4a7e1f[_0x350632];
        const _0x3325c1 = performance['now']();
        const _0x137242 = _0x12d020 => {
            const _0x3be9d2 = _0x9cc2ce((_0x12d020 - _0x3325c1) / _0x5d8b54);
            const _0x3e8691 = _0x9cc2ce(_0x537bed + (_0x21eac7 - _0x537bed) * _0x3be9d2);
            _0x1f6afa['volume'] = _0x35b437 ? 0x0 : _0x3e8691;
            if (_0x3be9d2 < 0x1) {
                _0x1d801a[_0x350632] = requestAnimationFrame(_0x137242);
            } else {
                _0x1d801a[_0x350632] = null;
                _0x1f6afa['volume'] = _0x35b437 ? 0x0 : _0x9cc2ce(_0x21eac7);
                if (_0x153f6f)
                    _0x153f6f();
            }
        };
        _0x1d801a[_0x350632] = requestAnimationFrame(_0x137242);
    }
    function _0x4b208f(_0x1d43ca) {
        const _0x1ca582 = _0x1d43ca['play']();
        if (_0x1ca582 && _0x1ca582['catch']) {
            _0x1ca582['catch'](() => {
                if (!_0x1a8277) {
                    const _0x561f0c = () => {
                        _0x1a8277 = !![];
                        _0x1d43ca['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x561f0c);
                        document['removeEventListener']('keydown', _0x561f0c);
                        document['removeEventListener']('touchstart', _0x561f0c);
                    };
                    document['addEventListener']('click', _0x561f0c, { 'once': !![] });
                    document['addEventListener']('keydown', _0x561f0c, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x561f0c, { 'once': !![] });
                }
            });
        }
    }
    function _0x3f6e90(_0x13095f) {
        if (!_0x353a5c[_0x13095f])
            return;
        if (_0x510946 === _0x13095f)
            return;
        const _0x260bd1 = _0x510946;
        _0x510946 = _0x13095f;
        const _0x56cab5 = _0x4a7e1f[_0x13095f];
        _0x157a41(_0x13095f);
        _0x56cab5['currentTime'] = 0x0;
        _0x56cab5['volume'] = 0x0;
        _0x4b208f(_0x56cab5);
        _0x5219a6(_0x13095f, 0x0, _0x1eccf1, _0x8beaf3);
        if (_0x260bd1 && _0x4a7e1f[_0x260bd1]) {
            const _0x1228bf = _0x260bd1;
            const _0xdbb99e = _0x4a7e1f[_0x1228bf];
            const _0x10b097 = _0x9cc2ce(_0xdbb99e['volume']);
            _0x5219a6(_0x1228bf, _0x10b097, 0x0, _0x8beaf3, () => {
                _0xdbb99e['pause']();
                _0xdbb99e['currentTime'] = 0x0;
            });
        }
    }
    function _0x144c9d(_0x10c0d5) {
        _0x1eccf1 = _0x9cc2ce(_0x10c0d5);
        localStorage['setItem']('musicVolume', String(_0x1eccf1));
        if (!_0x35b437 && _0x510946 && _0x1d801a[_0x510946] === null) {
            _0x4a7e1f[_0x510946]['volume'] = _0x1eccf1;
        }
    }
    function _0x736f42() {
        return _0x1eccf1;
    }
    function _0xde35f9(_0x19f165) {
        _0x35b437 = _0x19f165;
        for (const _0x25cea7 of Object['keys'](_0x4a7e1f)) {
            if (_0x1d801a[_0x25cea7] === null) {
                _0x4a7e1f[_0x25cea7]['volume'] = _0x19f165 || _0x25cea7 !== _0x510946 ? 0x0 : _0x1eccf1;
            }
        }
    }
    function _0x50b9b8() {
        return _0x35b437;
    }
    function _0x781547(_0x5cf65e) {
        if (_0x5cf65e === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x5cf65e === 'DAY_VOTE')
            return 'voting';
        if (_0x5cf65e === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x43278(_0x5ae239) {
        _0x3f6e90(_0x781547(_0x5ae239));
    }
    function _0x18c210(_0xbb8fb5) {
        _0x3f6e90(_0xbb8fb5);
    }
    return {
        'play': _0x3f6e90,
        'onStateChange': _0x43278,
        'onSoundEvent': _0x18c210,
        'setVolume': _0x144c9d,
        'getVolume': _0x736f42,
        'setMuted': _0xde35f9,
        'isMuted': _0x50b9b8
    };
})());
const _0x45cb62 = ((() => {
    const _0x30073f = 0x258;
    const _0x5ccaac = 0xb4;
    const _0xb2cd3c = 0x708;
    const _0x368a6e = 0x140;
    const _0xb37e4a = 0.18;
    const _0x1b01d0 = 0.95;
    const _0x549756 = new Audio('audio/heartbeat.mp3');
    _0x549756['loop'] = ![];
    _0x549756['preload'] = 'auto';
    _0x549756['volume'] = 0x0;
    let _0x2d2b55 = 0x0;
    let _0x3dc332 = Infinity;
    function _0x3b2e9b(_0x37217b, _0x367c40, _0x7ef91c) {
        return Math['min'](_0x7ef91c, Math['max'](_0x367c40, _0x37217b));
    }
    function _0x474180(_0x1245ef, _0x2193d8, _0x17c775) {
        return _0x1245ef + (_0x2193d8 - _0x1245ef) * _0x17c775;
    }
    function _0x4d587b(_0x314875) {
        if (_0x14e422['GAME_STATE'] !== 'NIGHT' || _0x224a2a['isDead'] || _0x16f913 === 'Skinwalker') {
            _0x3dc332 = Infinity;
            return;
        }
        const _0x9b74ab = _0x224a2a['x'] + 22.5;
        const _0x4af952 = _0x224a2a['y'] + 22.5;
        let _0x25587a = Infinity;
        for (const _0x112975 in _0x26a5c8) {
            const _0xbc43 = _0x26a5c8[_0x112975];
            if (!_0xbc43['isDark'] || _0xbc43['isDead'])
                continue;
            const _0xb279f0 = _0xbc43['renderX'] + 22.5 - _0x9b74ab;
            const _0x1c9f7b = _0xbc43['renderY'] + 22.5 - _0x4af952;
            const _0x2bc01f = Math['sqrt'](_0xb279f0 * _0xb279f0 + _0x1c9f7b * _0x1c9f7b);
            if (_0x2bc01f < _0x25587a)
                _0x25587a = _0x2bc01f;
        }
        _0x3dc332 = _0x25587a;
        if (_0x25587a > _0x30073f)
            return;
        const _0x50ac26 = 0x1 - _0x3b2e9b((_0x25587a - _0x5ccaac) / (_0x30073f - _0x5ccaac), 0x0, 0x1);
        const _0x3bfdfa = _0x474180(_0xb2cd3c, _0x368a6e, _0x50ac26);
        const _0x5c27ec = _0x474180(_0xb37e4a, _0x1b01d0, _0x50ac26);
        if (_0x314875 >= _0x2d2b55) {
            _0x549756['currentTime'] = 0x0;
            _0x549756['volume'] = _0x1d5be5['isMuted']() ? 0x0 : _0x3b2e9b(_0x5c27ec * _0x1d5be5['getVolume']() / 0.7, 0x0, 0x1);
            _0x549756['play']()['catch'](() => {
            });
            _0x2d2b55 = _0x314875 + _0x3bfdfa;
        }
    }
    return { 'tick': _0x4d587b };
})());
function _0x222a42() {
    const _0x2e88ed = document['getElementById']('mob-ability-btn');
    if (!_0x2e88ed)
        return;
    const _0x1acb62 = _0x14e422['GAME_STATE'] === 'NIGHT' && !_0x224a2a['isDead'];
    const _0x5a59e2 = _0x16f913 === 'Mayor' && !_0x558c67['has'](_0x372643) && !_0x224a2a['isDead'];
    if (_0x1acb62 || _0x5a59e2) {
        _0x2e88ed['style']['display'] = 'flex';
    } else {
        _0x2e88ed['style']['display'] = 'none';
    }
}
function _0x500e5f() {
    const _0x4bb670 = document['getElementById']('mobile-joystick-zone');
    const _0xb01d37 = document['getElementById']('mobile-top-bar');
    const _0x261f78 = document['getElementById']('mobile-action-bar');
    if (!_0x4bb670 || !_0xb01d37 || !_0x261f78)
        return;
    if (!_0x4e2457 && _0x2e2f29) {
        _0x4bb670['style']['display'] = 'flex';
        _0xb01d37['style']['display'] = 'flex';
        _0x261f78['style']['display'] = 'flex';
        _0x222a42();
    } else {
        _0x4bb670['style']['display'] = 'none';
        _0xb01d37['style']['display'] = 'none';
        _0x261f78['style']['display'] = 'none';
    }
}
const _0x2d457f = document['getElementById']('gameCanvas');
const _0x35c3c2 = _0x2d457f['getContext']('2d', { 'alpha': ![] });
const _0x59d335 = 0x500;
const _0x46f102 = 0x2d0;
const _0x14e422 = {
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
        'width': _0x59d335,
        'height': _0x46f102
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
const _0x224a2a = {
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
const _0x33d29e = new Image();
const _0x4d241b = new Image();
const _0x17c778 = new Image();
const _0x3ee613 = new Image();
_0x3ee613['src'] = 'assets/mayor\x20cosmetic.png';
const _0x1077b9 = [
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
const _0x9c7de7 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x502fd2 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x502fd2 === 'body1.png' || _0x502fd2 === 'body1')
    _0x502fd2 = 'body01.png';
if (!_0x502fd2['endsWith']('.png'))
    _0x502fd2 += '.png';
let _0x43dd1f = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x43dd1f['endsWith']('.png'))
    _0x43dd1f += '.png';
let _0x4e2457 = !![];
let _0x274e1c = null;
let _0x26cdc2 = null;
let _0x397bae = 0x3c;
let _0x1f9898 = 0x2d;
const _0x25c1c7 = {};
const _0x9c805c = new Image();
_0x9c805c['src'] = 'assets/yanito932.png';
_0x25c1c7['assets/yanito932.png'] = _0x9c805c;
function _0x26f870(_0x28008d) {
    if (!_0x25c1c7[_0x28008d] || !_0x25c1c7[_0x28008d]['complete'] && _0x25c1c7[_0x28008d]['naturalWidth'] === 0x0 && _0x25c1c7[_0x28008d]['naturalHeight'] === 0x0) {
        const _0x2882ed = new Image();
        _0x2882ed['src'] = _0x28008d;
        _0x25c1c7[_0x28008d] = _0x2882ed;
    }
    return _0x25c1c7[_0x28008d];
}
function _0x2d3b70(_0x5bc07a, _0x4473d6, _0xa44a0e, _0x37d4f4, _0x1f0170) {
    try {
        const _0x3d281e = 'assets/' + (_0x4473d6 || 'body01.png');
        const _0x860518 = _0x26f870(_0x3d281e);
        if (_0x860518['complete'] && _0x860518['naturalWidth'] > 0x0) {
            _0x5bc07a['drawImage'](_0x860518, -_0x37d4f4 / 0x2, -_0x1f0170 / 0x2, _0x37d4f4, _0x1f0170);
        }
        if (_0xa44a0e === null || _0xa44a0e === undefined)
            return;
        const _0x5c97ae = 'assets/' + _0xa44a0e;
        const _0x2a44ce = _0x26f870(_0x5c97ae);
        if (_0x2a44ce['complete'] && _0x2a44ce['naturalWidth'] > 0x0) {
            _0x5bc07a['drawImage'](_0x2a44ce, -_0x37d4f4 / 0x2, -_0x1f0170 / 0x2, _0x37d4f4, _0x1f0170);
        }
    } catch (_0x291b33) {
    }
}
function _0x4f2335() {
    const _0x26ce87 = document['getElementById']('body-skin-grid');
    const _0x45a518 = document['getElementById']('eyes-skin-grid');
    if (!_0x26ce87 || !_0x45a518)
        return;
    _0x26ce87['innerHTML'] = '';
    _0x1077b9['forEach'](_0x396358 => {
        const _0xe424b3 = document['createElement']('button');
        _0xe424b3['className'] = 'skin-btn' + (_0x396358 === _0x502fd2 ? '\x20selected' : '');
        const _0x179f95 = document['createElement']('img');
        _0x179f95['src'] = 'assets/' + _0x396358;
        _0xe424b3['appendChild'](_0x179f95);
        _0xe424b3['onclick'] = () => {
            _0x502fd2 = _0x396358;
            localStorage['setItem']('selectedBody', _0x396358);
            _0x26ce87['querySelectorAll']('.skin-btn')['forEach'](_0x45f7c9 => _0x45f7c9['classList']['remove']('selected'));
            _0xe424b3['classList']['add']('selected');
        };
        _0x26ce87['appendChild'](_0xe424b3);
    });
    _0x45a518['innerHTML'] = '';
    _0x9c7de7['forEach'](_0x94f6cd => {
        const _0x3658ad = document['createElement']('button');
        _0x3658ad['className'] = 'skin-btn' + (_0x94f6cd === _0x43dd1f ? '\x20selected' : '');
        const _0x6e46b6 = document['createElement']('img');
        _0x6e46b6['src'] = 'assets/' + _0x94f6cd;
        _0x3658ad['appendChild'](_0x6e46b6);
        _0x3658ad['onclick'] = () => {
            _0x43dd1f = _0x94f6cd;
            localStorage['setItem']('selectedEyes', _0x94f6cd);
            _0x45a518['querySelectorAll']('.skin-btn')['forEach'](_0x4def8a => _0x4def8a['classList']['remove']('selected'));
            _0x3658ad['classList']['add']('selected');
        };
        _0x45a518['appendChild'](_0x3658ad);
    });
}
function _0x56638c(_0x46b8bf) {
    if (!_0x14e422['MAP']['columns'] || !_0x14e422['CAMERA']['width'])
        return;
    const _0x451250 = Math['max'](0x0, _0x14e422['MAP']['columns'] * _0x14e422['MAP']['tileSize'] - _0x14e422['CAMERA']['width']);
    const _0x2a23eb = Math['max'](0x0, _0x14e422['MAP']['rows'] * _0x14e422['MAP']['tileSize'] - _0x14e422['CAMERA']['height']);
    if (_0x274e1c === null) {
        _0x274e1c = _0x451250 / 0x2;
        _0x26cdc2 = _0x2a23eb / 0x2;
    }
    _0x274e1c += _0x397bae * _0x46b8bf;
    _0x26cdc2 += _0x1f9898 * _0x46b8bf;
    if (_0x274e1c <= 0x0) {
        _0x274e1c = 0x0;
        _0x397bae = Math['abs'](_0x397bae);
    } else if (_0x274e1c >= _0x451250) {
        _0x274e1c = _0x451250;
        _0x397bae = -Math['abs'](_0x397bae);
    }
    if (_0x26cdc2 <= 0x0) {
        _0x26cdc2 = 0x0;
        _0x1f9898 = Math['abs'](_0x1f9898);
    } else if (_0x26cdc2 >= _0x2a23eb) {
        _0x26cdc2 = _0x2a23eb;
        _0x1f9898 = -Math['abs'](_0x1f9898);
    }
    _0x14e422['CAMERA']['x'] = _0x274e1c;
    _0x14e422['CAMERA']['y'] = _0x26cdc2;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x3dfb3c = document['getElementById']('play-btn');
    const _0x292138 = document['getElementById']('username-input');
    const _0x35ab9c = localStorage['getItem']('playerName');
    if (_0x35ab9c && _0x292138) {
        _0x292138['value'] = _0x35ab9c;
    }
    const _0x1304ac = () => {
        _0x1d5be5['play']('wait');
        document['removeEventListener']('click', _0x1304ac);
        document['removeEventListener']('keydown', _0x1304ac);
        document['removeEventListener']('touchstart', _0x1304ac);
    };
    document['addEventListener']('click', _0x1304ac, { 'once': !![] });
    document['addEventListener']('keydown', _0x1304ac, { 'once': !![] });
    document['addEventListener']('touchstart', _0x1304ac, { 'once': !![] });
    if (_0x3dfb3c) {
        _0x3dfb3c['addEventListener']('click', () => {
            const _0x2e2642 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x3d85c3 = window['_FB'] && window['_FB']['_userData'];
            let _0x4b70fb = !![];
            if (_0x2e2642 && _0x3d85c3 && _0x3d85c3['username']) {
                _0x4b2192 = _0x3d85c3['username'];
                _0x4b70fb = ![];
            } else {
                const _0x2ac552 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x4b2192 = 'user' + _0x2ac552;
                _0x4b70fb = !![];
            }
            const _0x11828b = _0x4b70fb ? 'body01.png' : _0x502fd2;
            const _0x42a478 = _0x4b70fb ? 'eyes4.png' : _0x43dd1f;
            const _0x34fce9 = !_0x4b70fb && _0x3d85c3 && _0x3d85c3['photoURL'] ? _0x3d85c3['photoURL'] : '';
            const _0x3e36c8 = !_0x4b70fb && _0x2e2642 ? _0x2e2642['uid'] : '';
            localStorage['setItem']('playerName', _0x4b2192);
            _0x4e2457 = ![];
            _0x14e422['CAMERA']['x'] = null;
            _0x14e422['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x5c84c7 = document['getElementById']('chat-log-wrap');
            if (_0x5c84c7)
                _0x5c84c7['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x34251c = document['getElementById']('controls-hint');
            if (_0x34251c && !_0x2e2f29)
                _0x34251c['style']['display'] = 'block';
            _0x500e5f();
            if (_0x2e2f29) {
                const _0x190905 = document['getElementById']('leaderboard-list');
                const _0x5d7da6 = document['getElementById']('leaderboard-toggle');
                if (_0x190905) {
                    _0x190905['style']['display'] = 'none';
                    if (_0x5d7da6)
                        _0x5d7da6['style']['transform'] = 'rotate(180deg)';
                }
                const _0x2ac002 = document['getElementById']('role-list-items');
                const _0x51bc4f = document['getElementById']('role-list-toggle');
                if (_0x2ac002) {
                    _0x2ac002['style']['display'] = 'none';
                    if (_0x51bc4f)
                        _0x51bc4f['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x16c990 = !_0x4b70fb && _0x3d85c3 ? {
                'townWins': _0x3d85c3['townWins'] || 0x0,
                'mafiaWins': _0x3d85c3['mafiaWins'] || 0x0,
                'deaths': _0x3d85c3['deaths'] || 0x0,
                'townLosses': _0x3d85c3['townLosses'] || 0x0,
                'mafiaLosses': _0x3d85c3['mafiaLosses'] || 0x0
            } : null;
            const _0xfc1036 = JSON['stringify']({
                'type': 'join',
                'name': _0x4b2192,
                'token': _0x54da7b,
                'body': _0x11828b,
                'eyes': _0x42a478,
                'isGuest': _0x4b70fb,
                'uid': _0x3e36c8,
                'photoURL': _0x34fce9,
                'accountStats': _0x16c990
            });
            if (_0x10f155 && _0x10f155['readyState'] === WebSocket['OPEN']) {
                _0x10f155['send'](_0xfc1036);
            } else if (!_0x10f155 || _0x10f155['readyState'] === WebSocket['CLOSED'] || _0x10f155['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0xfc1036;
                _0x303e87();
            }
        });
    }
    _0x4f2335();
    _0x303e87();
    _0x48f343();
    _0x2cb773();
    _0x9756c5();
});
function _0x2cb773() {
    const _0x59a4d5 = document['getElementById']('settings-btn');
    const _0x32902a = document['getElementById']('settings-panel');
    const _0x4e3c71 = document['getElementById']('close-settings-btn');
    const _0x156d5e = document['getElementById']('setting-mouse-relative');
    if (_0x156d5e) {
        _0x156d5e['checked'] = _0x8db8a3;
        _0x156d5e['addEventListener']('change', () => {
            _0x8db8a3 = _0x156d5e['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x8db8a3 ? 'true' : 'false');
        });
    }
    const _0x2986d8 = document['getElementById']('setting-music-volume');
    const _0x4fbd17 = document['getElementById']('setting-music-volume-display');
    function _0x528b71(_0x59c292) {
        const _0x20fb8f = (_0x59c292['value'] - _0x59c292['min']) / (_0x59c292['max'] - _0x59c292['min']) * 0x64;
        _0x59c292['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x20fb8f + '%,\x20#444\x20' + _0x20fb8f + '%)';
    }
    if (_0x2986d8) {
        const _0x2ea51a = _0x1d5be5['getVolume']();
        const _0x1e6321 = Math['round'](_0x2ea51a * 0x64);
        _0x2986d8['value'] = _0x1e6321;
        if (_0x4fbd17)
            _0x4fbd17['textContent'] = _0x1e6321 + '%';
        _0x528b71(_0x2986d8);
        _0x2986d8['addEventListener']('input', () => {
            const _0x11fcf8 = parseInt(_0x2986d8['value'], 0xa);
            if (_0x4fbd17)
                _0x4fbd17['textContent'] = _0x11fcf8 + '%';
            _0x528b71(_0x2986d8);
            _0x1d5be5['setVolume'](_0x11fcf8 / 0x64);
            _0x1d5be5['setMuted'](_0x11fcf8 === 0x0);
        });
    }
    if (_0x59a4d5 && _0x32902a) {
        _0x59a4d5['addEventListener']('click', _0x248478 => {
            _0x248478['stopPropagation']();
            _0x32902a['style']['display'] = _0x32902a['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x4e3c71 && _0x32902a) {
        _0x4e3c71['addEventListener']('click', () => {
            _0x32902a['style']['display'] = 'none';
        });
    }
    const _0xfc19ea = document['getElementById']('mayor-confirm-yes');
    const _0x328214 = document['getElementById']('mayor-confirm-no');
    const _0xd45194 = document['getElementById']('mayor-confirm-dialog');
    if (_0xfc19ea && _0xd45194) {
        _0xfc19ea['addEventListener']('click', () => {
            if (_0x10f155 && _0x10f155['readyState'] === WebSocket['OPEN']) {
                _0x10f155['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0xd45194['style']['display'] = 'none';
        });
    }
    if (_0x328214 && _0xd45194) {
        _0x328214['addEventListener']('click', () => {
            _0xd45194['style']['display'] = 'none';
        });
    }
    const _0x897dfc = document['getElementById']('close-ability-btn');
    if (_0x897dfc) {
        _0x897dfc['addEventListener']('click', () => {
            const _0x1e3130 = document['getElementById']('ability-ui');
            if (_0x1e3130)
                _0x1e3130['style']['display'] = 'none';
        });
    }
}
let _0x296bba = '';
function _0x8a02bc(_0x506785) {
    const _0x5e200a = document['getElementById']('vote-tally-panel');
    const _0x3cb966 = document['getElementById']('vote-tally-list');
    if (!_0x5e200a || !_0x3cb966)
        return;
    if (_0x506785['state'] !== 'DAY_VOTE') {
        _0x5e200a['style']['display'] = 'none';
        _0x296bba = '';
        return;
    }
    _0x5e200a['style']['display'] = 'block';
    const _0x672fd1 = {};
    for (const _0x407c50 in _0x26a5c8) {
        if (!_0x26a5c8[_0x407c50]['isDead'])
            _0x672fd1[_0x407c50] = 0x0;
    }
    if (_0x372643 && !_0x224a2a['isDead'])
        _0x672fd1[_0x372643] = 0x0;
    const _0x31170f = _0x506785['votes'] || {};
    for (const _0x171956 in _0x31170f) {
        const _0x371a77 = _0x31170f[_0x171956];
        const _0xf262db = _0x506785['mayorRevealed'] && _0x506785['mayorRevealed'][_0x171956] ? 0x2 : 0x1;
        _0x672fd1[_0x371a77] = (_0x672fd1[_0x371a77] || 0x0) + _0xf262db;
    }
    let _0x348102 = 0x0;
    const _0x43dff7 = _0x506785['skips'] || {};
    for (const _0x17ccd1 in _0x43dff7) {
        _0x348102 += Number(_0x43dff7[_0x17ccd1]) || 0x1;
    }
    const _0xc7ecc0 = JSON['stringify'](_0x672fd1) + '_' + _0x348102 + '_' + _0x224a2a['isDead'];
    if (_0xc7ecc0 === _0x296bba)
        return;
    _0x296bba = _0xc7ecc0;
    _0x3cb966['innerHTML'] = '';
    for (const _0x5204ec in _0x672fd1) {
        const _0x11ad73 = parseInt(_0x5204ec);
        const _0x2e948e = _0x11ad73 === _0x372643 ? _0x4b2192 : _0x26a5c8[_0x5204ec] ? _0x26a5c8[_0x5204ec]['name'] : 'Player\x20' + _0x5204ec;
        const _0x52f669 = document['createElement']('div');
        _0x52f669['className'] = 'vote-tally-entry';
        const _0x211c11 = document['createElement']('span');
        _0x211c11['textContent'] = _0x2e948e;
        const _0x206c1a = document['createElement']('span');
        _0x206c1a['className'] = 'vote-count';
        _0x206c1a['textContent'] = _0x672fd1[_0x5204ec] + '\x20vote' + (_0x672fd1[_0x5204ec] === 0x1 ? '' : 's');
        _0x52f669['appendChild'](_0x211c11);
        _0x52f669['appendChild'](_0x206c1a);
        if (_0x11ad73 !== _0x372643 && !_0x224a2a['isDead']) {
            _0x52f669['style']['cursor'] = 'pointer';
            _0x52f669['title'] = 'Vote\x20for\x20' + _0x2e948e;
            _0x52f669['addEventListener']('click', _0x395968 => {
                _0x395968['stopPropagation']();
                if (_0x10f155 && _0x10f155['readyState'] === WebSocket['OPEN']) {
                    _0x10f155['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x2e948e
                    }));
                }
            });
        }
        _0x3cb966['appendChild'](_0x52f669);
    }
    const _0x3f0a84 = document['createElement']('div');
    _0x3f0a84['className'] = 'vote-tally-skip';
    _0x3f0a84['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x348102 + '</span>';
    if (!_0x224a2a['isDead']) {
        _0x3f0a84['style']['cursor'] = 'pointer';
        _0x3f0a84['title'] = 'Click\x20to\x20skip\x20vote';
        _0x3f0a84['addEventListener']('click', _0x25d67f => {
            _0x25d67f['stopPropagation']();
            if (_0x10f155 && _0x10f155['readyState'] === WebSocket['OPEN']) {
                _0x10f155['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x3cb966['appendChild'](_0x3f0a84);
}
let _0x258cac = null;
let _0x240318 = null;
let _0x5b3e8d = null;
function _0x1f1ee1() {
    if (_0x10f155 && _0x10f155['readyState'] === WebSocket['OPEN']) {
        _0x10f155['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x258cac,
            'abilityTarget': _0x240318,
            'killTarget': _0x5b3e8d
        }));
    }
}
function _0x194dac() {
    const _0x52ded3 = document['getElementById']('ability-ui-body');
    if (!_0x52ded3)
        return;
    _0x52ded3['innerHTML'] = '';
    if (_0x16f913 === 'Celebrity' || _0x16f913 === 'Mayor') {
        const _0x307d3b = document['createElement']('div');
        _0x307d3b['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x307d3b['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x52ded3['appendChild'](_0x307d3b);
        return;
    }
    if (_0x16f913 === 'Skinwalker') {
        const _0x468892 = document['createElement']('div');
        _0x468892['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x468892['innerText'] = 'Transform\x20into:';
        _0x52ded3['appendChild'](_0x468892);
        const _0x10d8f3 = document['createElement']('div');
        _0x10d8f3['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x16d499 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x1cf7dc = _0x2643cb => {
            if (!_0x14e422['ROLE_LIST_RAW'] || _0x14e422['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x14e422['ROLE_LIST_RAW']['some'](_0x32f669 => {
                if (_0x32f669['name'] === _0x2643cb)
                    return !_0x32f669['isDead'];
                if (_0xb82136[_0x32f669['name']] && _0xb82136[_0x32f669['name']]['includes'](_0x2643cb))
                    return !![];
                return ![];
            });
        };
        const _0x49f87a = [
            'None',
            ..._0x16d499['filter'](_0x1cf7dc)
        ];
        _0x49f87a['forEach'](_0x25a7ac => {
            const _0x416d39 = document['createElement']('button');
            _0x416d39['className'] = 'layer-btn';
            _0x416d39['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x416d39['innerText'] = _0x25a7ac;
            const _0x1070da = _0x25a7ac === 'None' && !_0x258cac || _0x258cac === _0x25a7ac;
            if (_0x1070da)
                _0x416d39['classList']['add']('active');
            _0x416d39['onclick'] = () => {
                _0x258cac = _0x25a7ac === 'None' ? null : _0x25a7ac;
                _0x1f1ee1();
                _0x194dac();
            };
            _0x10d8f3['appendChild'](_0x416d39);
        });
        _0x52ded3['appendChild'](_0x10d8f3);
        if (_0x1cf7dc('Vigilante')) {
            const _0x1bb627 = document['createElement']('div');
            _0x1bb627['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x1bb627['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x52ded3['appendChild'](_0x1bb627);
        }
        if (_0x258cac === 'Vigilante') {
            const _0x1e5fb6 = document['createElement']('div');
            _0x1e5fb6['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x1e5fb6['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x52ded3['appendChild'](_0x1e5fb6);
        } else if (_0x258cac && _0x258cac !== 'Celebrity') {
            const _0x2a6384 = document['createElement']('div');
            _0x2a6384['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x2a6384['innerText'] = 'Use\x20' + _0x258cac + '\x20ability\x20on:';
            _0x52ded3['appendChild'](_0x2a6384);
            const _0x251f8d = document['createElement']('div');
            _0x251f8d['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x1fb465 = document['createElement']('button');
            _0x1fb465['className'] = 'layer-btn';
            _0x1fb465['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x1fb465['innerText'] = 'No\x20one';
            if (!_0x240318)
                _0x1fb465['classList']['add']('active');
            _0x1fb465['onclick'] = () => {
                _0x240318 = null;
                _0x1f1ee1();
                _0x194dac();
            };
            _0x251f8d['appendChild'](_0x1fb465);
            for (const _0x24dd6d in _0x26a5c8) {
                const _0x3f513c = _0x26a5c8[_0x24dd6d];
                if (_0x3f513c['isDead'])
                    continue;
                const _0x3702cb = document['createElement']('button');
                _0x3702cb['className'] = 'layer-btn';
                _0x3702cb['innerText'] = _0x3f513c['name'];
                if (_0x240318 === parseInt(_0x24dd6d))
                    _0x3702cb['classList']['add']('active');
                _0x3702cb['onclick'] = () => {
                    _0x240318 = parseInt(_0x24dd6d);
                    _0x1f1ee1();
                    _0x194dac();
                };
                _0x251f8d['appendChild'](_0x3702cb);
            }
            _0x52ded3['appendChild'](_0x251f8d);
        }
        const _0x579877 = document['createElement']('div');
        _0x579877['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x579877['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x52ded3['appendChild'](_0x579877);
        const _0x11f8d3 = document['createElement']('div');
        _0x11f8d3['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x3c3624 = document['createElement']('button');
        _0x3c3624['className'] = 'layer-btn';
        _0x3c3624['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x3c3624['innerText'] = 'No\x20one';
        if (!_0x5b3e8d && !_0x14e422['CURRENT_TARGET'])
            _0x3c3624['classList']['add']('active');
        _0x3c3624['onclick'] = () => {
            _0x5b3e8d = null;
            _0x14e422['CURRENT_TARGET'] = null;
            _0x1f1ee1();
            _0x194dac();
        };
        _0x11f8d3['appendChild'](_0x3c3624);
        for (const _0x18517d in _0x26a5c8) {
            const _0x325669 = _0x26a5c8[_0x18517d];
            if (_0x325669['isDead'])
                continue;
            const _0x1b418f = document['createElement']('button');
            _0x1b418f['className'] = 'layer-btn';
            _0x1b418f['innerText'] = _0x325669['name'];
            if (_0x5b3e8d === parseInt(_0x18517d) || _0x14e422['CURRENT_TARGET'] === parseInt(_0x18517d))
                _0x1b418f['classList']['add']('active');
            _0x1b418f['onclick'] = () => {
                _0x5b3e8d = parseInt(_0x18517d);
                _0x14e422['CURRENT_TARGET'] = parseInt(_0x18517d);
                _0x1f1ee1();
                _0x194dac();
            };
            _0x11f8d3['appendChild'](_0x1b418f);
        }
        _0x52ded3['appendChild'](_0x11f8d3);
        return;
    }
    let _0x2f6d85 = '';
    let _0x231984 = ![];
    if (_0x16f913 === 'Doctor') {
        _0x2f6d85 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x231984 = !![];
    } else if (_0x16f913 === 'Investigator') {
        _0x2f6d85 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x16f913 === 'Tracker') {
        _0x2f6d85 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x16f913 === 'Archer') {
        _0x2f6d85 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x16f913 === 'Escort') {
        _0x2f6d85 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x16f913 === 'Vigilante') {
        _0x2f6d85 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x2023fe = document['createElement']('div');
    _0x2023fe['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x2023fe['innerText'] = _0x2f6d85;
    _0x52ded3['appendChild'](_0x2023fe);
    const _0x3268cb = document['createElement']('div');
    _0x3268cb['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x3a6047 = document['createElement']('button');
    _0x3a6047['className'] = 'layer-btn';
    _0x3a6047['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x3a6047['innerText'] = 'No\x20one';
    if (_0x14e422['CURRENT_TARGET'] === null)
        _0x3a6047['classList']['add']('active');
    _0x3a6047['onclick'] = () => {
        _0x14e422['CURRENT_TARGET'] = null;
        if (_0x10f155 && _0x10f155['readyState'] === WebSocket['OPEN']) {
            _0x10f155['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x194dac();
    };
    _0x3268cb['appendChild'](_0x3a6047);
    for (const _0x3f016f in _0x26a5c8) {
        const _0x57e9ad = _0x26a5c8[_0x3f016f];
        if (_0x57e9ad['isDead'])
            continue;
        const _0x1e8c13 = document['createElement']('button');
        _0x1e8c13['className'] = 'layer-btn';
        _0x1e8c13['innerText'] = _0x57e9ad['name'];
        if (_0x14e422['CURRENT_TARGET'] === parseInt(_0x3f016f))
            _0x1e8c13['classList']['add']('active');
        _0x1e8c13['onclick'] = () => {
            _0x14e422['CURRENT_TARGET'] = parseInt(_0x3f016f);
            if (_0x10f155 && _0x10f155['readyState'] === WebSocket['OPEN']) {
                _0x10f155['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x3f016f)
                }));
            }
            _0x194dac();
        };
        _0x3268cb['appendChild'](_0x1e8c13);
    }
    if (_0x231984 && !_0x224a2a['isDead']) {
        const _0x55fd1e = document['createElement']('button');
        _0x55fd1e['className'] = 'layer-btn';
        _0x55fd1e['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x55fd1e['innerText'] = _0x4b2192 + '\x20(Self)';
        if (_0x14e422['CURRENT_TARGET'] === _0x372643)
            _0x55fd1e['classList']['add']('active');
        _0x55fd1e['onclick'] = () => {
            _0x14e422['CURRENT_TARGET'] = _0x372643;
            if (_0x10f155 && _0x10f155['readyState'] === WebSocket['OPEN']) {
                _0x10f155['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x372643
                }));
            }
            _0x194dac();
        };
        _0x3268cb['appendChild'](_0x55fd1e);
    }
    _0x52ded3['appendChild'](_0x3268cb);
}
function _0x303e87() {
    if (_0x10f155 && (_0x10f155['readyState'] === WebSocket['OPEN'] || _0x10f155['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x55ee7d = new URLSearchParams();
    if (_0x54da7b)
        _0x55ee7d['set']('token', _0x54da7b);
    _0x55ee7d['set']('ngrok-skip-browser-warning', 'true');
    const _0x5135ad = 'wss://rubber-virtual-application-occupational.trycloudflare.com';
    const _0x44fe56 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x5135ad;
    const _0x50389b = _0x44fe56 + '/?' + _0x55ee7d['toString']();
    _0x10f155 = new WebSocket(_0x50389b);
    _0x10f155['onopen'] = function () {
        if (!_0x4e2457 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x2a3b34 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x44c92a = window['_FB'] && window['_FB']['_userData'];
                const _0x4c864c = !(_0x2a3b34 && _0x44c92a && _0x44c92a['username']);
                const _0x3fd073 = _0x4c864c ? 'body01.png' : _0x502fd2;
                const _0x18576f = _0x4c864c ? 'eyes4.png' : _0x43dd1f;
                const _0x220a42 = !_0x4c864c && _0x44c92a && _0x44c92a['photoURL'] ? _0x44c92a['photoURL'] : '';
                const _0x2f22e7 = !_0x4c864c && _0x2a3b34 ? _0x2a3b34['uid'] : '';
                const _0x52c836 = !_0x4c864c && _0x44c92a ? {
                    'townWins': _0x44c92a['townWins'] || 0x0,
                    'mafiaWins': _0x44c92a['mafiaWins'] || 0x0,
                    'deaths': _0x44c92a['deaths'] || 0x0,
                    'townLosses': _0x44c92a['townLosses'] || 0x0,
                    'mafiaLosses': _0x44c92a['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x4b2192,
                    'token': _0x54da7b,
                    'body': _0x3fd073,
                    'eyes': _0x18576f,
                    'isGuest': _0x4c864c,
                    'uid': _0x2f22e7,
                    'photoURL': _0x220a42,
                    'accountStats': _0x52c836
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x10f155 && _0x10f155['readyState'] === WebSocket['OPEN']) {
            _0x10f155['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x10f155['onclose'] = _0x16e494 => {
        if (_0x16e494['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x16e494['code'] === 0xfa2 || _0x16e494['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x2d97b3 = document['getElementById']('disconnect-overlay');
        if (!_0x2d97b3) {
            _0x2d97b3 = document['createElement']('div');
            _0x2d97b3['id'] = 'disconnect-overlay';
            _0x2d97b3['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x2d97b3['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x2d97b3);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x10f155['onmessage'] = _0x523212 => {
        const _0x147cc3 = JSON['parse'](_0x523212['data']);
        if (_0x147cc3['type'] === 'map_data') {
            _0x14e422['MAP']['tileSize'] = _0x147cc3['map']['tileSize'];
            _0x14e422['MAP']['columns'] = _0x147cc3['map']['columns'];
            _0x14e422['MAP']['rows'] = _0x147cc3['map']['rows'];
            _0x14e422['MAP']['layers'] = _0x147cc3['map']['layers'];
            if (_0x147cc3['map']['doors']) {
                _0x14e422['MAP']['doors'] = _0x147cc3['map']['doors'];
                const _0x3a8ee4 = _0x14e422['MAP']['layers']['find'](_0x2aa08a => _0x2aa08a['name'] === 'floor2');
                if (_0x3a8ee4) {
                    for (const _0x1d1f1a in _0x14e422['MAP']['doors']) {
                        _0x3a8ee4['data'][parseInt(_0x1d1f1a)] = 0x2;
                    }
                }
            }
            if (_0x147cc3['entities'])
                _0x14e422['ENTITIES'] = _0x147cc3['entities'];
            _0x43a373();
            _0x14e422['SYSTEM']['isReady'] = !![];
            _0x55a0c2();
            if (!_0x14e422['SYSTEM']['_gameLoopRunning']) {
                _0x14e422['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x215c68);
            }
            return;
        }
        if (_0x147cc3['type'] === 'init') {
            _0x372643 = _0x147cc3['id'];
            _0x4e2457 = ![];
            _0x500e5f();
            if (_0x2e2f29) {
                const _0x65382e = document['getElementById']('leaderboard-list');
                const _0x502636 = document['getElementById']('leaderboard-toggle');
                if (_0x65382e) {
                    _0x65382e['style']['display'] = 'none';
                    if (_0x502636)
                        _0x502636['style']['transform'] = 'rotate(180deg)';
                }
                const _0x201562 = document['getElementById']('role-list-items');
                const _0x33dc23 = document['getElementById']('role-list-toggle');
                if (_0x201562) {
                    _0x201562['style']['display'] = 'none';
                    if (_0x33dc23)
                        _0x33dc23['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x8a222e = _0x147cc3['isOwner'] || ![];
            _0x4b2192 = _0x147cc3['name'] || _0x4b2192;
            _0x14e422['MAP']['tileSize'] = _0x147cc3['map']['tileSize'];
            _0x14e422['MAP']['columns'] = _0x147cc3['map']['columns'];
            _0x14e422['MAP']['rows'] = _0x147cc3['map']['rows'];
            _0x14e422['MAP']['layers'] = _0x147cc3['map']['layers'];
            if (_0x147cc3['map']['doors']) {
                _0x14e422['MAP']['doors'] = _0x147cc3['map']['doors'];
                const _0x141f37 = _0x14e422['MAP']['layers']['find'](_0x186c45 => _0x186c45['name'] === 'floor2');
                if (_0x141f37) {
                    for (const _0x44f8ae in _0x14e422['MAP']['doors']) {
                        _0x141f37['data'][parseInt(_0x44f8ae)] = 0x2;
                    }
                }
            }
            if (_0x147cc3['entities'])
                _0x14e422['ENTITIES'] = _0x147cc3['entities'];
            _0x43a373();
            _0x224a2a['x'] = _0x14e422['MAP']['columns'] * _0x14e422['MAP']['tileSize'] / 0x2;
            _0x224a2a['y'] = _0x14e422['MAP']['rows'] * _0x14e422['MAP']['tileSize'] / 0x2;
            _0x14e422['CAMERA']['x'] = _0x224a2a['x'] + _0x224a2a['width'] / 0x2 - _0x14e422['CAMERA']['width'] / 0x2;
            _0x14e422['CAMERA']['y'] = _0x224a2a['y'] + _0x224a2a['height'] / 0x2 - _0x14e422['CAMERA']['height'] / 0x2;
            if (_0x8a222e) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x17d8c7();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x14e422['SYSTEM']['lastTime'] = performance['now']();
            _0x14e422['SYSTEM']['isReady'] = !![];
            _0x33f9b5();
            if (!_0x14e422['SYSTEM']['_gameLoopRunning']) {
                _0x14e422['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x215c68);
            }
            return;
        } else if (_0x147cc3['type'] === 'state') {
            const _0x152905 = {};
            for (const _0x4b1107 in _0x147cc3['players']) {
                if (parseInt(_0x4b1107) === _0x372643)
                    continue;
                const _0x5f475b = _0x147cc3['players'][_0x4b1107];
                const _0x25c304 = _0x26a5c8[_0x4b1107];
                if (_0x25c304) {
                    const _0x5c75b0 = _0x5f475b['x'] - _0x25c304['renderX'];
                    const _0xd2e5dd = _0x5f475b['y'] - _0x25c304['renderY'];
                    const _0xc0bce6 = _0x5c75b0 * _0x5c75b0 + _0xd2e5dd * _0xd2e5dd > 0x78 * 0x78;
                    Object['assign'](_0x25c304, _0x5f475b);
                    if (_0xc0bce6) {
                        _0x25c304['renderX'] = _0x5f475b['x'];
                        _0x25c304['renderY'] = _0x5f475b['y'];
                    }
                    _0x152905[_0x4b1107] = _0x25c304;
                } else {
                    _0x152905[_0x4b1107] = {
                        ..._0x5f475b,
                        'renderX': _0x5f475b['x'],
                        'renderY': _0x5f475b['y'],
                        'renderAngle': _0x5f475b['angle'] || 0x0
                    };
                }
            }
            _0x26a5c8 = _0x152905;
            _0x15afad();
            if (_0x147cc3['players'][_0x372643]) {
                const _0x5ef663 = _0x147cc3['players'][_0x372643];
                _0x224a2a['chats'] = _0x5ef663['chats'] || [];
                _0x224a2a['isDead'] = _0x5ef663['isDead'];
                if (_0x5ef663['name'])
                    _0x4b2192 = _0x5ef663['name'];
                _0x33f9b5();
                const _0xdd634c = Math['hypot'](_0x5ef663['x'] - _0x224a2a['x'], _0x5ef663['y'] - _0x224a2a['y']);
                if (_0xdd634c > 0xfa) {
                    _0x224a2a['x'] = _0x5ef663['x'];
                    _0x224a2a['y'] = _0x5ef663['y'];
                } else if (_0xdd634c > 0x50) {
                    _0x224a2a['x'] += (_0x5ef663['x'] - _0x224a2a['x']) * 0.06;
                    _0x224a2a['y'] += (_0x5ef663['y'] - _0x224a2a['y']) * 0.06;
                }
            }
            if (_0x147cc3['entities'])
                _0x14e422['ENTITIES'] = _0x147cc3['entities'];
            if (_0x147cc3['game']) {
                _0x14e422['GAME_STATE'] = _0x147cc3['game']['state'];
                _0x14e422['NIGHT_ABILITY_OPEN'] = _0x147cc3['game']['nightAbilityOpen'];
                if (_0x147cc3['game']['mayorRevealed']) {
                    for (const _0x32a3e7 in _0x147cc3['game']['mayorRevealed']) {
                        _0x558c67['add'](parseInt(_0x32a3e7));
                    }
                }
                if (_0x14e422['LAST_STATE'] !== _0x14e422['GAME_STATE']) {
                    if (_0x14e422['GAME_STATE'] !== 'NIGHT') {
                        _0x14e422['CURRENT_TARGET'] = null;
                        _0x258cac = null;
                        _0x240318 = null;
                        _0x5b3e8d = null;
                        const _0x53f598 = document['getElementById']('ability-ui');
                        if (_0x53f598)
                            _0x53f598['style']['display'] = 'none';
                    }
                    if (_0x14e422['GAME_STATE'] === 'NIGHT') {
                        _0x224a2a['chats'] = [];
                        for (const _0x5d5aa2 in _0x26a5c8) {
                            _0x26a5c8[_0x5d5aa2]['chats'] = [];
                        }
                    }
                    _0x14e422['LAST_STATE'] = _0x14e422['GAME_STATE'];
                    _0x222a42();
                    _0x1d5be5['onStateChange'](_0x14e422['GAME_STATE'], _0x147cc3['game']['nightAbilityOpen']);
                }
                const _0x172128 = document['getElementById']('phase-ui');
                if (_0x172128) {
                    if (_0x147cc3['game']['state'] === 'LOBBY') {
                        _0x172128['style']['display'] = 'none';
                    } else {
                        _0x172128['style']['display'] = 'block';
                    }
                    let _0x204335 = _0x147cc3['game']['state']['replace']('_', '\x20');
                    if (_0x147cc3['game']['state'] === 'DAY_DISCUSS') {
                        _0x204335 = 'DAY\x20' + (_0x147cc3['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x147cc3['game']['timer'] + 's';
                    } else if (_0x147cc3['game']['state'] === 'DAY_VOTE') {
                        _0x204335 = 'DAY\x20' + (_0x147cc3['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x147cc3['game']['timer'] + 's';
                    } else if (_0x147cc3['game']['state'] === 'NIGHT') {
                        const _0x229c8e = _0x147cc3['game']['dayCount'] || 0x1;
                        if (_0x147cc3['game']['nightAbilityOpen']) {
                            _0x204335 = 'NIGHT\x20' + _0x229c8e + '\x20ABILITY\x20PHASE';
                            const _0x60204b = _0x147cc3['game']['abilityTimer'] !== undefined ? _0x147cc3['game']['abilityTimer'] : _0x147cc3['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x60204b + 's';
                        } else {
                            _0x204335 = 'NIGHT\x20' + _0x229c8e;
                            document['getElementById']('phase-timer')['innerText'] = _0x147cc3['game']['timer'] + 's';
                        }
                    }
                    if (_0x147cc3['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x204335;
                    }
                }
                if (_0x147cc3['game']['state'] === 'NIGHT') {
                    const _0x219dae = document['getElementById']('ability-timer-label');
                    if (_0x219dae) {
                        const _0x1bbc10 = _0x147cc3['game']['abilityTimer'] !== undefined ? _0x147cc3['game']['abilityTimer'] : _0x147cc3['game']['timer'];
                        _0x219dae['innerText'] = _0x147cc3['game']['nightAbilityOpen'] ? _0x1bbc10 + 's' : '';
                    }
                    if (_0x147cc3['game']['nightAbilityOpen'] && !_0x4d7c9b && !_0x224a2a['isDead']) {
                        _0x4d7c9b = !![];
                        _0x194dac();
                        const _0x30072 = document['getElementById']('ability-ui');
                        if (_0x30072)
                            _0x30072['style']['display'] = 'block';
                    }
                    if (!_0x147cc3['game']['nightAbilityOpen']) {
                        const _0x1bb796 = document['getElementById']('ability-ui');
                        if (_0x1bb796 && _0x1bb796['style']['display'] === 'block') {
                            _0x1bb796['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x4d7c9b = ![];
                }
                _0x8a02bc(_0x147cc3['game']);
                if (_0x147cc3['game']['roleListMode'] !== undefined) {
                    _0x14e422['ROLE_LIST_RAW'] = _0x147cc3['game']['roleList'] || [];
                    _0x1386e1(_0x147cc3['game']['roleList'], _0x147cc3['game']['roleListMode']);
                }
            }
        } else if (_0x147cc3['type'] === 'teleport') {
            _0x224a2a['x'] = _0x147cc3['x'];
            _0x224a2a['y'] = _0x147cc3['y'];
            _0x224a2a['vx'] = 0x0;
            _0x224a2a['vy'] = 0x0;
            _0x14e422['CAMERA']['x'] = null;
            if (_0x147cc3['teleportId'] !== undefined)
                _0x3fcb70 = _0x147cc3['teleportId'];
        } else if (_0x147cc3['type'] === 'bulk_teleport') {
            for (const _0x3bff4f in _0x147cc3['positions']) {
                const _0x4b8403 = _0x147cc3['positions'][_0x3bff4f];
                if (parseInt(_0x3bff4f) === _0x372643) {
                    _0x224a2a['x'] = _0x4b8403['x'];
                    _0x224a2a['y'] = _0x4b8403['y'];
                    _0x224a2a['vx'] = 0x0;
                    _0x224a2a['vy'] = 0x0;
                    _0x14e422['CAMERA']['x'] = null;
                    continue;
                }
                const _0x647a5c = _0x26a5c8[_0x3bff4f];
                if (_0x647a5c) {
                    _0x647a5c['x'] = _0x4b8403['x'];
                    _0x647a5c['y'] = _0x4b8403['y'];
                    _0x647a5c['renderX'] = _0x4b8403['x'];
                    _0x647a5c['renderY'] = _0x4b8403['y'];
                    _0x647a5c['vx'] = 0x0;
                    _0x647a5c['vy'] = 0x0;
                }
            }
        } else if (_0x147cc3['type'] === 'player_left') {
            delete _0x26a5c8[_0x147cc3['id']];
            _0x558c67['delete'](parseInt(_0x147cc3['id']));
        } else if (_0x147cc3['type'] === 'map_update') {
            const _0x24cd60 = _0x14e422['MAP']['layers']['find'](_0x2408c8 => _0x2408c8['name'] === _0x147cc3['layer']);
            if (_0x24cd60) {
                _0x24cd60['data'][_0x147cc3['row'] * _0x14e422['MAP']['columns'] + _0x147cc3['col']] = _0x147cc3['gid'];
                const _0x6b4e0d = _0x147cc3['row'] * _0x14e422['MAP']['columns'] + _0x147cc3['col'];
                if (_0x14e422['MAP']['doors'] && _0x14e422['MAP']['doors'][_0x6b4e0d]) {
                    const _0x351922 = _0x14e422['MAP']['layers']['find'](_0xf6440b => _0xf6440b['name'] === 'floor2');
                    if (_0x351922)
                        _0x351922['data'][_0x6b4e0d] = 0x2;
                }
                const _0x3b9943 = Math['floor'](_0x147cc3['col'] * _0x14e422['MAP']['tileSize'] / _0x14e422['MAP']['chunkSize']);
                const _0x184cf5 = Math['floor'](_0x147cc3['row'] * _0x14e422['MAP']['tileSize'] / _0x14e422['MAP']['chunkSize']);
                _0x391827(_0x3b9943, _0x184cf5);
            }
        } else if (_0x147cc3['type'] === 'role_assign') {
            _0x16f913 = _0x147cc3['role'];
            _0x224a2a['isDead'] = _0x16f913 === 'Spectator';
            _0x558c67['clear']();
            _0x14e422['CURRENT_TARGET'] = null;
            _0x258cac = null;
            _0x240318 = null;
            _0x5b3e8d = null;
            _0x4d7c9b = ![];
            const _0x2e1567 = document['getElementById']('ability-ui');
            if (_0x2e1567)
                _0x2e1567['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x16f913;
            _0x222a42();
            _0x4cd783(_0x16f913 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x16f913, !![]);
            let _0x320b55 = '';
            if (_0x16f913 === 'Investigator')
                _0x320b55 = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x16f913 === 'Tracker')
                _0x320b55 = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x16f913 === 'Doctor')
                _0x320b55 = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x16f913 === 'Archer')
                _0x320b55 = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x16f913 === 'Escort')
                _0x320b55 = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x16f913 === 'Vigilante')
                _0x320b55 = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x16f913 === 'Skinwalker')
                _0x320b55 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x16f913 === 'Celebrity')
                _0x320b55 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x16f913 === 'Mayor')
                _0x320b55 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x4cd783(_0x320b55, !![]);
        } else if (_0x147cc3['type'] === 'mayor_reveal') {
            _0x558c67['add'](parseInt(_0x147cc3['playerId']));
            _0x33f9b5();
            _0x222a42();
        } else if (_0x147cc3['type'] === 'rolelist_update') {
            _0x14e422['ROLE_LIST_RAW'] = _0x147cc3['list'] || [];
            _0x1386e1(_0x147cc3['list'], _0x147cc3['mode']);
        } else if (_0x147cc3['type'] === 'sound_event') {
            _0x1d5be5['onSoundEvent'](_0x147cc3['track']);
        } else if (_0x147cc3['type'] === 'stats_update') {
            const _0x38ba40 = window['_FB'];
            if (_0x38ba40 && _0x38ba40['_currentUser'] && _0x38ba40['_userData']) {
                const _0x21431a = _0x38ba40['_currentUser']['uid'];
                const _0x347491 = _0x147cc3['patch'] || {};
                const _0x5824f5 = _0x38ba40['_userData'];
                const _0x390b98 = {
                    'townWins': (_0x5824f5['townWins'] || 0x0) + (_0x347491['townWins'] || 0x0),
                    'mafiaWins': (_0x5824f5['mafiaWins'] || 0x0) + (_0x347491['mafiaWins'] || 0x0),
                    'deaths': (_0x5824f5['deaths'] || 0x0) + (_0x347491['deaths'] || 0x0),
                    'townLosses': (_0x5824f5['townLosses'] || 0x0) + (_0x347491['townLosses'] || 0x0),
                    'mafiaLosses': (_0x5824f5['mafiaLosses'] || 0x0) + (_0x347491['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x38ba40['_userData'], _0x390b98);
                const _0x36ffb0 = _0x38ba40['doc'](_0x38ba40['db'], 'users', _0x21431a);
                _0x38ba40['updateDoc'](_0x36ffb0, _0x390b98)['catch'](() => {
                });
                _0x15afad();
            }
        } else if (_0x147cc3['type'] === 'game_over') {
            _0x1d5be5['onStateChange']('LOBBY', ![]);
            _0x1386e1([], 'off');
            _0x16f913 = null;
            _0x224a2a['isDead'] = ![];
            _0x558c67['clear']();
            _0x14e422['CURRENT_TARGET'] = null;
            _0x258cac = null;
            _0x240318 = null;
            _0x5b3e8d = null;
            _0x4d7c9b = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x222a42();
            _0x4cd783('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x147cc3['type'] === 'chat_log') {
            _0x4cd783(_0x147cc3['sender'] + ':\x20' + _0x147cc3['text']);
        } else if (_0x147cc3['type'] === 'sys_chat') {
            _0x4cd783(_0x147cc3['text'], !![]);
        }
    };
}
function _0x4cd783(_0x3ef27e, _0x393b02 = ![]) {
    const _0xcf448f = document['getElementById']('chat-log-messages');
    const _0x42956e = document['getElementById']('chat-log-ui');
    const _0x4e36a3 = _0x42956e['scrollHeight'] - _0x42956e['scrollTop'] - _0x42956e['clientHeight'] < 0x1e;
    const _0x3d7ead = document['createElement']('div');
    _0x3d7ead['className'] = 'chat-log-line' + (_0x393b02 ? '\x20sys-msg' : '');
    _0x3d7ead['innerText'] = _0x3ef27e;
    _0xcf448f['appendChild'](_0x3d7ead);
    if (_0x4e36a3) {
        _0x42956e['scrollTop'] = _0x42956e['scrollHeight'];
    }
    if (_0xcf448f['childElementCount'] > 0xc8) {
        _0xcf448f['removeChild'](_0xcf448f['firstChild']);
    }
}
function _0x4668fd(_0x22abee, _0x551689, _0x17e931) {
    const _0x1129c4 = document['createElement']('canvas');
    _0x1129c4['width'] = _0x17e931;
    _0x1129c4['height'] = _0x17e931;
    const _0x5468c0 = _0x1129c4['getContext']('2d');
    _0x5468c0['imageSmoothingEnabled'] = ![];
    const _0x38201d = 'assets/' + (_0x22abee || 'body01.png');
    const _0x475bc8 = _0x26f870(_0x38201d);
    if (_0x475bc8['complete'] && _0x475bc8['naturalWidth'] > 0x0)
        _0x5468c0['drawImage'](_0x475bc8, 0x0, 0x0, _0x17e931, _0x17e931);
    if (_0x551689) {
        const _0x293145 = 'assets/' + _0x551689;
        const _0x7436e = _0x26f870(_0x293145);
        if (_0x7436e['complete'] && _0x7436e['naturalWidth'] > 0x0)
            _0x5468c0['drawImage'](_0x7436e, 0x0, 0x0, _0x17e931, _0x17e931);
    }
    return _0x1129c4['toDataURL']();
}
function _0x15afad() {
    const _0x5b3d32 = document['getElementById']('chat-profile-panel');
    if (!_0x5b3d32)
        return;
    _0x5b3d32['innerHTML'] = '';
    let _0x133798 = ![];
    const _0x2aea58 = [];
    if (_0x372643 !== null) {
        const _0x5c2374 = _0x502fd2 || 'body01.png';
        const _0xd57fe2 = _0x43dd1f || 'eyes4.png';
        const _0x4fb63d = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x2aea58['push']({
            'id': _0x372643,
            'name': _0x4b2192,
            'body': _0x5c2374,
            'eyes': _0xd57fe2,
            'stats': _0x4fb63d
        });
    }
    for (const _0x5c3738 in _0x26a5c8) {
        const _0x35ecdd = _0x26a5c8[_0x5c3738];
        const _0x59e224 = _0x35ecdd['accountStats'] || null;
        _0x2aea58['push']({
            'id': parseInt(_0x5c3738),
            'name': _0x35ecdd['name'],
            'body': _0x35ecdd['body'] || 'body01.png',
            'eyes': _0x35ecdd['eyes'] || 'eyes4.png',
            'stats': _0x59e224
        });
    }
    for (const _0x595956 of _0x2aea58) {
        _0x133798 = !![];
        const _0x2612b5 = _0x4668fd(_0x595956['body'], _0x595956['eyes'], 0x20);
        const _0x310a10 = document['createElement']('div');
        _0x310a10['className'] = 'chat-pfp-entry';
        const _0x3b8e5f = document['createElement']('img');
        _0x3b8e5f['src'] = _0x2612b5;
        _0x3b8e5f['alt'] = _0x595956['name'];
        _0x310a10['appendChild'](_0x3b8e5f);
        const _0x2acb98 = document['createElement']('div');
        _0x2acb98['className'] = 'chat-pfp-tooltip';
        let _0x1865f7 = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x595956['name'] + '</div>';
        if (_0x595956['stats']) {
            _0x1865f7 += '<div>🏙\x20Town\x20Wins:\x20' + (_0x595956['stats']['townWins'] || 0x0) + '</div>';
            _0x1865f7 += '<div>🔪\x20Mafia\x20Wins:\x20' + (_0x595956['stats']['mafiaWins'] || 0x0) + '</div>';
            _0x1865f7 += '<div>💀\x20Deaths:\x20' + (_0x595956['stats']['deaths'] || 0x0) + '</div>';
            _0x1865f7 += '<div>📉\x20Town\x20Losses:\x20' + (_0x595956['stats']['townLosses'] || 0x0) + '</div>';
            _0x1865f7 += '<div>📉\x20Mafia\x20Losses:\x20' + (_0x595956['stats']['mafiaLosses'] || 0x0) + '</div>';
        } else {
            _0x1865f7 += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x2acb98['innerHTML'] = _0x1865f7;
        _0x310a10['appendChild'](_0x2acb98);
        _0x5b3d32['appendChild'](_0x310a10);
    }
    const _0x565c35 = document['getElementById']('chat-log-wrap');
    if (_0x565c35) {
        if (_0x133798) {
            _0x565c35['classList']['add']('has-profiles');
            _0x5b3d32['style']['display'] = 'flex';
        } else {
            _0x565c35['classList']['remove']('has-profiles');
            _0x5b3d32['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x15afad;
let _0x3d61b = -0x1, _0x5a467b = -0x1, _0x2ae669 = -0x1, _0x3c08da = 0x0;
function _0x5d65e9() {
    if (!_0x372643 || !_0x10f155 || _0x10f155['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x3ddc62 = performance['now']();
    const _0x5b99e2 = _0x3ddc62 - _0x3c08da;
    const _0x2d08e0 = Math['abs'](_0x224a2a['x'] - _0x3d61b) > 0.05 || Math['abs'](_0x224a2a['y'] - _0x5a467b) > 0.05 || Math['abs'](_0x224a2a['angle'] - _0x2ae669) > 0.02;
    if (!_0x2d08e0 && _0x5b99e2 < 0xc8)
        return;
    if (_0x5b99e2 < 0x19)
        return;
    _0x3c08da = _0x3ddc62;
    _0x3d61b = _0x224a2a['x'];
    _0x5a467b = _0x224a2a['y'];
    _0x2ae669 = _0x224a2a['angle'];
    if (!_0x372643 || !_0x10f155 || _0x10f155['readyState'] !== WebSocket['OPEN'])
        return;
    _0x10f155['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x224a2a['x'],
        'y': _0x224a2a['y'],
        'vx': _0x224a2a['vx'],
        'vy': _0x224a2a['vy'],
        'angle': _0x224a2a['angle'],
        'scale': _0x224a2a['scale'],
        'teleportId': _0x3fcb70,
        'clientTimestamp': Date['now']()
    }));
}
function _0xf656d3() {
    if (_0x224a2a['isDead'])
        return;
    const _0x26cbb7 = _0x14e422['MAP']['layers']['find'](_0xbb80ea => _0xbb80ea['name'] === 'walls');
    if (!_0x26cbb7)
        return;
    const _0x227543 = _0x224a2a['scale'];
    const _0x22ba18 = _0x224a2a['width'] * _0x227543 / 0x2;
    for (let _0x3b20c3 = 0x0; _0x3b20c3 < 0x3; _0x3b20c3++) {
        let _0x10ad78 = _0x224a2a['x'] + _0x224a2a['width'] / 0x2;
        let _0x3ca97b = _0x224a2a['y'] + _0x224a2a['height'] / 0x2;
        const _0x57978a = Math['floor']((_0x10ad78 - _0x22ba18) / _0x14e422['MAP']['tileSize']);
        const _0x3f918a = Math['floor']((_0x10ad78 + _0x22ba18) / _0x14e422['MAP']['tileSize']);
        const _0x175187 = Math['floor']((_0x3ca97b - _0x22ba18) / _0x14e422['MAP']['tileSize']);
        const _0x53ba72 = Math['floor']((_0x3ca97b + _0x22ba18) / _0x14e422['MAP']['tileSize']);
        for (let _0x2fa0d1 = _0x175187; _0x2fa0d1 <= _0x53ba72; _0x2fa0d1++) {
            for (let _0x5d68cc = _0x57978a; _0x5d68cc <= _0x3f918a; _0x5d68cc++) {
                if (_0x5d68cc < 0x0 || _0x5d68cc >= _0x14e422['MAP']['columns'] || _0x2fa0d1 < 0x0 || _0x2fa0d1 >= _0x14e422['MAP']['rows'])
                    continue;
                if (_0x26cbb7['data'][_0x2fa0d1 * _0x14e422['MAP']['columns'] + _0x5d68cc] === 0x0)
                    continue;
                const _0x495840 = _0x5d68cc * _0x14e422['MAP']['tileSize'];
                const _0x348cbd = _0x2fa0d1 * _0x14e422['MAP']['tileSize'];
                const _0x5ad0da = _0x10ad78 < _0x495840 ? _0x495840 : _0x10ad78 > _0x495840 + _0x14e422['MAP']['tileSize'] ? _0x495840 + _0x14e422['MAP']['tileSize'] : _0x10ad78;
                const _0x448b75 = _0x3ca97b < _0x348cbd ? _0x348cbd : _0x3ca97b > _0x348cbd + _0x14e422['MAP']['tileSize'] ? _0x348cbd + _0x14e422['MAP']['tileSize'] : _0x3ca97b;
                const _0x366a0a = _0x10ad78 - _0x5ad0da;
                const _0x54d9f7 = _0x3ca97b - _0x448b75;
                const _0xf07f7f = Math['sqrt'](_0x366a0a * _0x366a0a + _0x54d9f7 * _0x54d9f7);
                if (_0xf07f7f < _0x22ba18) {
                    if (_0xf07f7f === 0x0) {
                        const _0x387875 = _0x10ad78 - _0x495840;
                        const _0x5ad72b = _0x495840 + _0x14e422['MAP']['tileSize'] - _0x10ad78;
                        const _0x4795bf = _0x3ca97b - _0x348cbd;
                        const _0xa6f344 = _0x348cbd + _0x14e422['MAP']['tileSize'] - _0x3ca97b;
                        const _0x55a8dc = Math['min'](_0x387875, _0x5ad72b, _0x4795bf, _0xa6f344);
                        if (_0x55a8dc === _0x387875)
                            _0x10ad78 = _0x495840 - _0x22ba18;
                        else if (_0x55a8dc === _0x5ad72b)
                            _0x10ad78 = _0x495840 + _0x14e422['MAP']['tileSize'] + _0x22ba18;
                        else if (_0x55a8dc === _0x4795bf)
                            _0x3ca97b = _0x348cbd - _0x22ba18;
                        else
                            _0x3ca97b = _0x348cbd + _0x14e422['MAP']['tileSize'] + _0x22ba18;
                    } else {
                        const _0x361094 = _0x22ba18 - _0xf07f7f;
                        _0x10ad78 += _0x366a0a / _0xf07f7f * _0x361094;
                        _0x3ca97b += _0x54d9f7 / _0xf07f7f * _0x361094;
                        const _0x160615 = _0x224a2a['vx'] * (_0x366a0a / _0xf07f7f) + _0x224a2a['vy'] * (_0x54d9f7 / _0xf07f7f);
                        if (_0x160615 < 0x0) {
                            _0x224a2a['vx'] -= _0x160615 * (_0x366a0a / _0xf07f7f);
                            _0x224a2a['vy'] -= _0x160615 * (_0x54d9f7 / _0xf07f7f);
                        }
                    }
                }
            }
        }
        _0x224a2a['x'] = _0x10ad78 - _0x224a2a['width'] / 0x2;
        _0x224a2a['y'] = _0x3ca97b - _0x224a2a['height'] / 0x2;
    }
}
function _0x4ec249(_0x3ac2dc) {
    const _0x2181dc = _0x14e422['MAP']['layers']['find'](_0x1a70ab => _0x1a70ab['name'] === 'walls');
    if (!_0x2181dc)
        return;
    const _0x43119c = _0x3ac2dc['width'] / 0x2;
    for (let _0x1c5401 = 0x0; _0x1c5401 < 0x2; _0x1c5401++) {
        let _0x16a133 = _0x3ac2dc['x'] + _0x3ac2dc['width'] / 0x2;
        let _0x20ece7 = _0x3ac2dc['y'] + _0x3ac2dc['height'] / 0x2;
        const _0xde50c6 = Math['floor']((_0x16a133 - _0x43119c) / _0x14e422['MAP']['tileSize']);
        const _0x28a076 = Math['floor']((_0x16a133 + _0x43119c) / _0x14e422['MAP']['tileSize']);
        const _0x450677 = Math['floor']((_0x20ece7 - _0x43119c) / _0x14e422['MAP']['tileSize']);
        const _0x2386af = Math['floor']((_0x20ece7 + _0x43119c) / _0x14e422['MAP']['tileSize']);
        for (let _0x1048c0 = _0x450677; _0x1048c0 <= _0x2386af; _0x1048c0++) {
            for (let _0xb29003 = _0xde50c6; _0xb29003 <= _0x28a076; _0xb29003++) {
                if (_0xb29003 < 0x0 || _0xb29003 >= _0x14e422['MAP']['columns'] || _0x1048c0 < 0x0 || _0x1048c0 >= _0x14e422['MAP']['rows'])
                    continue;
                if (_0x2181dc['data'][_0x1048c0 * _0x14e422['MAP']['columns'] + _0xb29003] === 0x0)
                    continue;
                const _0x1380f1 = _0xb29003 * _0x14e422['MAP']['tileSize'];
                const _0x1b594d = _0x1048c0 * _0x14e422['MAP']['tileSize'];
                const _0x4d646b = _0x16a133 < _0x1380f1 ? _0x1380f1 : _0x16a133 > _0x1380f1 + _0x14e422['MAP']['tileSize'] ? _0x1380f1 + _0x14e422['MAP']['tileSize'] : _0x16a133;
                const _0x41b566 = _0x20ece7 < _0x1b594d ? _0x1b594d : _0x20ece7 > _0x1b594d + _0x14e422['MAP']['tileSize'] ? _0x1b594d + _0x14e422['MAP']['tileSize'] : _0x20ece7;
                const _0x2367d4 = _0x16a133 - _0x4d646b;
                const _0x45f80e = _0x20ece7 - _0x41b566;
                const _0x59fd59 = Math['sqrt'](_0x2367d4 * _0x2367d4 + _0x45f80e * _0x45f80e);
                if (_0x59fd59 < _0x43119c) {
                    if (_0x59fd59 === 0x0) {
                        const _0x4ef611 = _0x16a133 - _0x1380f1;
                        const _0x52ae1b = _0x1380f1 + _0x14e422['MAP']['tileSize'] - _0x16a133;
                        const _0x4349c5 = _0x20ece7 - _0x1b594d;
                        const _0x396907 = _0x1b594d + _0x14e422['MAP']['tileSize'] - _0x20ece7;
                        const _0x286a46 = Math['min'](_0x4ef611, _0x52ae1b, _0x4349c5, _0x396907);
                        if (_0x286a46 === _0x4ef611)
                            _0x16a133 = _0x1380f1 - _0x43119c;
                        else if (_0x286a46 === _0x52ae1b)
                            _0x16a133 = _0x1380f1 + _0x14e422['MAP']['tileSize'] + _0x43119c;
                        else if (_0x286a46 === _0x4349c5)
                            _0x20ece7 = _0x1b594d - _0x43119c;
                        else
                            _0x20ece7 = _0x1b594d + _0x14e422['MAP']['tileSize'] + _0x43119c;
                    } else {
                        const _0x63baba = _0x43119c - _0x59fd59;
                        _0x16a133 += _0x2367d4 / _0x59fd59 * _0x63baba;
                        _0x20ece7 += _0x45f80e / _0x59fd59 * _0x63baba;
                    }
                }
            }
        }
        _0x3ac2dc['x'] = _0x16a133 - _0x3ac2dc['width'] / 0x2;
        _0x3ac2dc['y'] = _0x20ece7 - _0x3ac2dc['height'] / 0x2;
    }
}
function _0x30fda8(_0x4884b9) {
    const _0x53f69c = _0x4884b9['width'] / 0x2;
    for (let _0x4910ab = 0x0; _0x4910ab < 0x2; _0x4910ab++) {
        let _0x5f3584 = _0x4884b9['x'] + _0x4884b9['width'] / 0x2;
        let _0x13211c = _0x4884b9['y'] + _0x4884b9['height'] / 0x2;
        for (const _0xc30257 of _0x14e422['ENTITIES']) {
            const _0x5452ee = _0x5f3584 < _0xc30257['x'] ? _0xc30257['x'] : _0x5f3584 > _0xc30257['x'] + _0xc30257['w'] ? _0xc30257['x'] + _0xc30257['w'] : _0x5f3584;
            const _0x587b8e = _0x13211c < _0xc30257['y'] ? _0xc30257['y'] : _0x13211c > _0xc30257['y'] + _0xc30257['h'] ? _0xc30257['y'] + _0xc30257['h'] : _0x13211c;
            const _0x541cd8 = _0x5f3584 - _0x5452ee;
            const _0x35b707 = _0x13211c - _0x587b8e;
            const _0x57a5b5 = Math['sqrt'](_0x541cd8 * _0x541cd8 + _0x35b707 * _0x35b707);
            if (_0x57a5b5 < _0x53f69c && _0x57a5b5 > 0x0) {
                const _0xf16c22 = _0x53f69c - _0x57a5b5;
                const _0x2508dd = _0x541cd8 / _0x57a5b5;
                const _0x43a095 = _0x35b707 / _0x57a5b5;
                _0x5f3584 += _0x2508dd * _0xf16c22;
                _0x13211c += _0x43a095 * _0xf16c22;
            } else if (_0x57a5b5 === 0x0) {
                const _0x27c6a6 = _0x5f3584 - _0xc30257['x'];
                const _0x30f8c8 = _0xc30257['x'] + _0xc30257['w'] - _0x5f3584;
                const _0x5a8668 = _0x13211c - _0xc30257['y'];
                const _0x148f05 = _0xc30257['y'] + _0xc30257['h'] - _0x13211c;
                const _0x487841 = Math['min'](_0x27c6a6, _0x30f8c8, _0x5a8668, _0x148f05);
                if (_0x487841 === _0x27c6a6)
                    _0x5f3584 = _0xc30257['x'] - _0x53f69c;
                else if (_0x487841 === _0x30f8c8)
                    _0x5f3584 = _0xc30257['x'] + _0xc30257['w'] + _0x53f69c;
                else if (_0x487841 === _0x5a8668)
                    _0x13211c = _0xc30257['y'] - _0x53f69c;
                else
                    _0x13211c = _0xc30257['y'] + _0xc30257['h'] + _0x53f69c;
            }
        }
        _0x4884b9['x'] = _0x5f3584 - _0x4884b9['width'] / 0x2;
        _0x4884b9['y'] = _0x13211c - _0x4884b9['height'] / 0x2;
    }
}
function _0x51e252() {
    if (_0x224a2a['isDead'])
        return;
    const _0x22fcfb = _0x224a2a['width'] / 0x2;
    const _0x58fcbb = _0x224a2a['x'] + _0x224a2a['width'] / 0x2;
    const _0x213d6e = _0x224a2a['y'] + _0x224a2a['height'] / 0x2;
    for (const _0x58a3ad in _0x26a5c8) {
        const _0x54a1d2 = _0x26a5c8[_0x58a3ad];
        if (_0x54a1d2['isDead'])
            continue;
        const _0x52d7c4 = _0x54a1d2['width'] / 0x2;
        const _0x283814 = _0x22fcfb + _0x52d7c4;
        const _0x520f0e = (_0x54a1d2['renderX'] ?? _0x54a1d2['x']) + _0x54a1d2['width'] / 0x2;
        const _0xfb6f93 = (_0x54a1d2['renderY'] ?? _0x54a1d2['y']) + _0x54a1d2['height'] / 0x2;
        const _0x431c3c = _0x58fcbb - _0x520f0e;
        const _0x4f10f0 = _0x213d6e - _0xfb6f93;
        const _0x4591c2 = Math['sqrt'](_0x431c3c * _0x431c3c + _0x4f10f0 * _0x4f10f0);
        if (_0x4591c2 > 0x0 && _0x4591c2 < _0x283814) {
            const _0x3fb450 = _0x283814 - _0x4591c2;
            const _0x1f1559 = _0x431c3c / _0x4591c2;
            const _0xbc7d = _0x4f10f0 / _0x4591c2;
            _0x224a2a['x'] += _0x1f1559 * (_0x3fb450 * 0.25);
            _0x224a2a['y'] += _0xbc7d * (_0x3fb450 * 0.25);
            _0x54a1d2['x'] -= _0x1f1559 * (_0x3fb450 * 0.75);
            _0x54a1d2['y'] -= _0xbc7d * (_0x3fb450 * 0.75);
            _0x4ec249(_0x54a1d2);
            _0x30fda8(_0x54a1d2);
            if (_0x54a1d2['renderX'] !== undefined) {
                _0x54a1d2['renderX'] = _0x54a1d2['x'];
                _0x54a1d2['renderY'] = _0x54a1d2['y'];
            }
            const _0x46102a = _0x224a2a['vx'] * _0x1f1559 + _0x224a2a['vy'] * _0xbc7d;
            if (_0x46102a < 0x0) {
                _0x224a2a['vx'] -= _0x46102a * _0x1f1559 * 0.25;
                _0x224a2a['vy'] -= _0x46102a * _0xbc7d * 0.25;
            }
        }
    }
    _0xf656d3();
    _0x2deab0();
}
function _0x2deab0() {
    if (_0x224a2a['isDead'])
        return;
    const _0x3c53fc = _0x224a2a['scale'];
    const _0xb90bdc = _0x224a2a['width'] * _0x3c53fc / 0x2;
    for (let _0x4eef3b = 0x0; _0x4eef3b < 0x2; _0x4eef3b++) {
        let _0x33e320 = _0x224a2a['x'] + _0x224a2a['width'] / 0x2;
        let _0x5d384b = _0x224a2a['y'] + _0x224a2a['height'] / 0x2;
        for (const _0x17be96 of _0x14e422['ENTITIES']) {
            const _0x26409c = _0x33e320 < _0x17be96['x'] ? _0x17be96['x'] : _0x33e320 > _0x17be96['x'] + _0x17be96['w'] ? _0x17be96['x'] + _0x17be96['w'] : _0x33e320;
            const _0x28218c = _0x5d384b < _0x17be96['y'] ? _0x17be96['y'] : _0x5d384b > _0x17be96['y'] + _0x17be96['h'] ? _0x17be96['y'] + _0x17be96['h'] : _0x5d384b;
            const _0x43319c = _0x33e320 - _0x26409c;
            const _0x31e767 = _0x5d384b - _0x28218c;
            const _0x4b076c = Math['sqrt'](_0x43319c * _0x43319c + _0x31e767 * _0x31e767);
            if (_0x4b076c < _0xb90bdc && _0x4b076c > 0x0) {
                const _0x49c7c2 = _0xb90bdc - _0x4b076c;
                const _0x3cb513 = _0x43319c / _0x4b076c;
                const _0x26c037 = _0x31e767 / _0x4b076c;
                _0x33e320 += _0x3cb513 * _0x49c7c2;
                _0x5d384b += _0x26c037 * _0x49c7c2;
                const _0x54cc65 = _0x224a2a['vx'] * _0x3cb513 + _0x224a2a['vy'] * _0x26c037;
                if (_0x54cc65 < 0x0) {
                    _0x224a2a['vx'] -= _0x54cc65 * _0x3cb513;
                    _0x224a2a['vy'] -= _0x54cc65 * _0x26c037;
                }
            } else if (_0x4b076c === 0x0) {
                const _0x2fc05b = _0x33e320 - _0x17be96['x'];
                const _0x1442e5 = _0x17be96['x'] + _0x17be96['w'] - _0x33e320;
                const _0x39e7be = _0x5d384b - _0x17be96['y'];
                const _0x3891a6 = _0x17be96['y'] + _0x17be96['h'] - _0x5d384b;
                const _0x3a8b44 = Math['min'](_0x2fc05b, _0x1442e5, _0x39e7be, _0x3891a6);
                if (_0x3a8b44 === _0x2fc05b)
                    _0x33e320 = _0x17be96['x'] - _0xb90bdc;
                else if (_0x3a8b44 === _0x1442e5)
                    _0x33e320 = _0x17be96['x'] + _0x17be96['w'] + _0xb90bdc;
                else if (_0x3a8b44 === _0x39e7be)
                    _0x5d384b = _0x17be96['y'] - _0xb90bdc;
                else
                    _0x5d384b = _0x17be96['y'] + _0x17be96['h'] + _0xb90bdc;
            }
        }
        _0x224a2a['x'] = _0x33e320 - _0x224a2a['width'] / 0x2;
        _0x224a2a['y'] = _0x5d384b - _0x224a2a['height'] / 0x2;
    }
}
function _0x155901(_0x2d9d94, _0x430615) {
    const _0x6abb3d = _0x14e422['MAP']['layers']['find'](_0x1a46de => _0x1a46de['name'] === 'trees');
    if (!_0x6abb3d)
        return ![];
    const _0x4343ae = Math['floor'](_0x2d9d94 / _0x14e422['MAP']['tileSize']);
    const _0x39cae8 = Math['floor'](_0x430615 / _0x14e422['MAP']['tileSize']);
    if (_0x4343ae < 0x0 || _0x4343ae >= _0x14e422['MAP']['columns'] || _0x39cae8 < 0x0 || _0x39cae8 >= _0x14e422['MAP']['rows'])
        return ![];
    return _0x6abb3d['data'][_0x39cae8 * _0x14e422['MAP']['columns'] + _0x4343ae] === 0xb;
}
let _0x1e0f6e = null;
function _0x356c8f() {
    const _0x18d682 = _0x14e422['MAP'];
    const _0x5e4aed = _0x18d682['layers']['find'](_0x5ee691 => _0x5ee691['name'] === 'floor2');
    const _0x1064d9 = _0x18d682['layers']['find'](_0x2c19e8 => _0x2c19e8['name'] === 'walls');
    if (!_0x5e4aed || !_0x1064d9) {
        _0x1e0f6e = null;
        return;
    }
    const _0x2192e2 = _0x18d682['columns'];
    const _0x5491a6 = _0x18d682['rows'];
    const _0x3bc18c = [];
    const _0x30f05d = [];
    const _0x29d17e = new Set();
    for (let _0x445f4d = 0x0; _0x445f4d < _0x5491a6; _0x445f4d++) {
        for (let _0x187187 = 0x0; _0x187187 < _0x2192e2; _0x187187++) {
            const _0x42f98c = _0x445f4d * _0x2192e2 + _0x187187;
            const _0x3eaa44 = _0x5e4aed['data'][_0x42f98c];
            const _0xce7423 = _0x1064d9['data'][_0x42f98c];
            if (_0x3eaa44 === 0x2 || _0x3eaa44 === 0x4) {
                _0x3bc18c['push']({
                    'c': _0x187187,
                    'r': _0x445f4d
                });
                if (_0xce7423 !== 0x0)
                    _0x30f05d['push']({
                        'c': _0x187187,
                        'r': _0x445f4d
                    });
            }
            if (_0xce7423 !== 0x0)
                _0x29d17e['add'](_0x187187 + ',' + _0x445f4d);
        }
    }
    const _0x15e8e4 = new Set(_0x3bc18c['map'](_0x55b891 => _0x55b891['c'] + ',' + _0x55b891['r']));
    const _0x5727a6 = [
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
                c: _0x402640,
                r: _0x1cf603
            } of _0x3bc18c) {
        for (const [_0x37ef03, _0x213df3] of _0x5727a6) {
            const _0x339425 = _0x402640 + _0x37ef03, _0x2cdc15 = _0x1cf603 + _0x213df3;
            const _0x532c0e = _0x339425 + ',' + _0x2cdc15;
            if (!_0x15e8e4['has'](_0x532c0e))
                _0x29d17e['add'](_0x532c0e);
        }
    }
    _0x1e0f6e = {
        'wallSet': _0x29d17e,
        'floorTiles': _0x3bc18c,
        'wallTiles': _0x30f05d,
        'interiorSet': _0x15e8e4
    };
}
function _0x55b0e3() {
    const _0x13d367 = _0x14e422['MAP']['layers']['find'](_0x286c1b => _0x286c1b['name'] === 'floor2');
    if (!_0x13d367)
        return ![];
    const _0x1df122 = Math['floor']((_0x224a2a['x'] + _0x224a2a['width'] / 0x2) / _0x14e422['MAP']['tileSize']);
    const _0x558e96 = Math['floor']((_0x224a2a['y'] + _0x224a2a['height'] / 0x2) / _0x14e422['MAP']['tileSize']);
    if (_0x1df122 < 0x0 || _0x1df122 >= _0x14e422['MAP']['columns'] || _0x558e96 < 0x0 || _0x558e96 >= _0x14e422['MAP']['rows'])
        return ![];
    const _0x46d7cb = _0x13d367['data'][_0x558e96 * _0x14e422['MAP']['columns'] + _0x1df122];
    return _0x46d7cb === 0x2;
}
function _0x57b50e() {
    if (_0x224a2a['isDead']) {
        _0x14e422['SHADOW']['polygon'] = null;
        return;
    }
    const _0x1c6da0 = _0x14e422['MAP'];
    const _0x196163 = _0x14e422['SHADOW'];
    const _0x147687 = _0x1c6da0['tileSize'];
    if (!_0x1e0f6e)
        _0x356c8f();
    if (!_0x1e0f6e) {
        _0x196163['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x38c62c,
        floorTiles: _0x20cc84
    } = _0x1e0f6e;
    if (_0x20cc84['length'] === 0x0) {
        _0x196163['polygon'] = null;
        return;
    }
    if (!_0x55b0e3()) {
        _0x196163['polygon'] = null;
        return;
    }
    const _0x1ae9aa = _0x224a2a['x'] + _0x224a2a['width'] / 0x2;
    const _0x29ead5 = _0x224a2a['y'] + _0x224a2a['height'] / 0x2;
    if (!_0x1e0f6e['_bounds']) {
        let _0x3860be = Infinity, _0x986c5b = -Infinity, _0x20a270 = Infinity, _0x458edf = -Infinity;
        for (const {
                    c: _0x5ae6fe,
                    r: _0x131d08
                } of _0x20cc84) {
            if (_0x5ae6fe < _0x3860be)
                _0x3860be = _0x5ae6fe;
            if (_0x5ae6fe > _0x986c5b)
                _0x986c5b = _0x5ae6fe;
            if (_0x131d08 < _0x20a270)
                _0x20a270 = _0x131d08;
            if (_0x131d08 > _0x458edf)
                _0x458edf = _0x131d08;
        }
        _0x1e0f6e['_bounds'] = {
            'minC': Math['max'](0x0, _0x3860be - 0x1),
            'maxC': Math['min'](_0x1c6da0['columns'] - 0x1, _0x986c5b + 0x1),
            'minR': Math['max'](0x0, _0x20a270 - 0x1),
            'maxR': Math['min'](_0x1c6da0['rows'] - 0x1, _0x458edf + 0x1)
        };
        const _0x2c16ac = [];
        for (let _0x38908f = _0x1e0f6e['_bounds']['minR']; _0x38908f <= _0x1e0f6e['_bounds']['maxR']; _0x38908f++) {
            for (let _0x50858d = _0x1e0f6e['_bounds']['minC']; _0x50858d <= _0x1e0f6e['_bounds']['maxC']; _0x50858d++) {
                if (_0x38c62c['has'](_0x50858d + ',' + _0x38908f))
                    _0x2c16ac['push'](_0x50858d, _0x38908f);
            }
        }
        _0x1e0f6e['_wallArr'] = _0x2c16ac;
    }
    const {
        minC: _0x53f492,
        maxC: _0x541a23,
        minR: _0x429996,
        maxR: _0x34c9e9
    } = _0x1e0f6e['_bounds'];
    const _0x333b03 = _0x1e0f6e['_wallArr'];
    const _0x436c65 = 0.001;
    const _0x471361 = new Set();
    const _0x1c8350 = [];
    for (let _0x55cee8 = 0x0; _0x55cee8 < _0x333b03['length']; _0x55cee8 += 0x2) {
        const _0x10774 = _0x333b03[_0x55cee8], _0x21e465 = _0x333b03[_0x55cee8 + 0x1];
        const _0x5ce179 = [
            _0x10774 * _0x147687,
            _0x21e465 * _0x147687,
            _0x10774 * _0x147687 + _0x147687,
            _0x21e465 * _0x147687,
            _0x10774 * _0x147687,
            _0x21e465 * _0x147687 + _0x147687,
            _0x10774 * _0x147687 + _0x147687,
            _0x21e465 * _0x147687 + _0x147687
        ];
        for (let _0x202982 = 0x0; _0x202982 < _0x5ce179['length']; _0x202982 += 0x2) {
            const _0xcdd368 = _0x5ce179[_0x202982], _0x4e54dc = _0x5ce179[_0x202982 + 0x1];
            const _0x570316 = Math['atan2'](_0x4e54dc - _0x29ead5, _0xcdd368 - _0x1ae9aa);
            const _0x2033c5 = Math['round'](_0x570316 * 0x4e20);
            if (!_0x471361['has'](_0x2033c5 - 0x1)) {
                _0x471361['add'](_0x2033c5 - 0x1);
                _0x1c8350['push'](_0x570316 - _0x436c65);
            }
            if (!_0x471361['has'](_0x2033c5)) {
                _0x471361['add'](_0x2033c5);
                _0x1c8350['push'](_0x570316);
            }
            if (!_0x471361['has'](_0x2033c5 + 0x1)) {
                _0x471361['add'](_0x2033c5 + 0x1);
                _0x1c8350['push'](_0x570316 + _0x436c65);
            }
        }
    }
    _0x1c8350['sort']((_0x236329, _0x3a704f) => _0x236329 - _0x3a704f);
    const _0x4809f7 = Math['hypot']((_0x541a23 - _0x53f492 + 0x2) * _0x147687, (_0x34c9e9 - _0x429996 + 0x2) * _0x147687);
    const _0x4ef402 = _0x25f39f => {
        const _0x331fcc = Math['cos'](_0x25f39f);
        const _0x387bd2 = Math['sin'](_0x25f39f);
        let _0x15a1f8 = _0x4809f7;
        for (let _0x30a092 = 0x0; _0x30a092 < _0x333b03['length']; _0x30a092 += 0x2) {
            const _0x5de021 = _0x333b03[_0x30a092], _0x1bb320 = _0x333b03[_0x30a092 + 0x1];
            const _0x11f045 = _0x5de021 * _0x147687, _0x5810e2 = _0x1bb320 * _0x147687;
            const _0x33cb8c = _0x11f045 + _0x147687, _0x3ee279 = _0x5810e2 + _0x147687;
            const _0x817ba2 = _0x11f045 + _0x147687 * 0.5, _0x4e2cd7 = _0x5810e2 + _0x147687 * 0.5;
            const _0x205364 = Math['abs'](_0x817ba2 - _0x1ae9aa) + Math['abs'](_0x4e2cd7 - _0x29ead5);
            if (_0x205364 > _0x15a1f8 + _0x147687 * 1.5)
                continue;
            let _0x9601d6, _0x4906ae, _0x325a59;
            _0x9601d6 = -_0x387bd2 * _0x147687;
            if (Math['abs'](_0x9601d6) >= 1e-10) {
                _0x4906ae = -(_0x5810e2 - _0x29ead5) * _0x147687 / _0x9601d6;
                _0x325a59 = ((_0x11f045 - _0x1ae9aa) * _0x387bd2 - (_0x5810e2 - _0x29ead5) * _0x331fcc) / _0x9601d6;
                if (_0x4906ae > 0.001 && _0x325a59 >= 0x0 && _0x325a59 <= 0x1 && _0x4906ae < _0x15a1f8)
                    _0x15a1f8 = _0x4906ae;
            }
            _0x9601d6 = _0x331fcc * _0x147687;
            if (Math['abs'](_0x9601d6) >= 1e-10) {
                _0x4906ae = (_0x33cb8c - _0x1ae9aa) * _0x147687 / _0x9601d6;
                _0x325a59 = ((_0x33cb8c - _0x1ae9aa) * _0x387bd2 - (_0x5810e2 - _0x29ead5) * _0x331fcc) / _0x9601d6;
                if (_0x4906ae > 0.001 && _0x325a59 >= 0x0 && _0x325a59 <= 0x1 && _0x4906ae < _0x15a1f8)
                    _0x15a1f8 = _0x4906ae;
            }
            _0x9601d6 = _0x387bd2 * _0x147687;
            if (Math['abs'](_0x9601d6) >= 1e-10) {
                _0x4906ae = (_0x3ee279 - _0x29ead5) * _0x147687 / _0x9601d6;
                _0x325a59 = ((_0x33cb8c - _0x1ae9aa) * _0x387bd2 - (_0x3ee279 - _0x29ead5) * _0x331fcc) / _0x9601d6;
                if (_0x4906ae > 0.001 && _0x325a59 >= 0x0 && _0x325a59 <= 0x1 && _0x4906ae < _0x15a1f8)
                    _0x15a1f8 = _0x4906ae;
            }
            _0x9601d6 = -_0x331fcc * _0x147687;
            if (Math['abs'](_0x9601d6) >= 1e-10) {
                _0x4906ae = -(_0x11f045 - _0x1ae9aa) * _0x147687 / _0x9601d6;
                _0x325a59 = ((_0x11f045 - _0x1ae9aa) * _0x387bd2 - (_0x3ee279 - _0x29ead5) * _0x331fcc) / _0x9601d6;
                if (_0x4906ae > 0.001 && _0x325a59 >= 0x0 && _0x325a59 <= 0x1 && _0x4906ae < _0x15a1f8)
                    _0x15a1f8 = _0x4906ae;
            }
        }
        const _0x2be851 = _0x15a1f8 < _0x4809f7 ? _0x15a1f8 + 0x2 : _0x15a1f8;
        return {
            'x': _0x1ae9aa + _0x331fcc * _0x2be851,
            'y': _0x29ead5 + _0x387bd2 * _0x2be851
        };
    };
    const _0x3c6524 = [];
    for (let _0x29fe76 = 0x0; _0x29fe76 < _0x1c8350['length']; _0x29fe76++) {
        const _0x5e220c = _0x4ef402(_0x1c8350[_0x29fe76]);
        _0x3c6524['push'](_0x5e220c['x'], _0x5e220c['y']);
    }
    _0x196163['polygon'] = _0x3c6524['length'] >= 0x6 ? _0x3c6524 : null;
}
function _0x47ffd9(_0x489a6d, _0x250b21, _0x9ead10) {
    if (_0x224a2a['isDead'])
        return;
    if (!_0x1e0f6e)
        return;
    const {
        floorTiles: _0x194d86,
        wallTiles: _0x51a28c
    } = _0x1e0f6e;
    if (_0x194d86['length'] === 0x0)
        return;
    const _0x1dc267 = _0x14e422['SHADOW'];
    const _0x186dcd = _0x14e422['MAP']['tileSize'];
    const _0x4a1ff1 = _0x14e422['CAMERA']['width'];
    const _0x3d70be = _0x14e422['CAMERA']['height'];
    if (!_0x14e422['SHADOW']['_buf'] || _0x14e422['SHADOW']['_buf']['width'] !== _0x4a1ff1 || _0x14e422['SHADOW']['_buf']['height'] !== _0x3d70be) {
        _0x14e422['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x14e422['SHADOW']['_buf']['width'] = _0x4a1ff1;
        _0x14e422['SHADOW']['_buf']['height'] = _0x3d70be;
    }
    const _0x5b328f = _0x14e422['SHADOW']['_buf'];
    const _0x2d394d = _0x5b328f['getContext']('2d');
    _0x2d394d['clearRect'](0x0, 0x0, _0x4a1ff1, _0x3d70be);
    _0x2d394d['fillStyle'] = 'rgba(0,0,0,0.92)';
    _0x2d394d['beginPath']();
    for (const {
                c: _0x8ce5a2,
                r: _0x5c3ada
            } of _0x194d86) {
        const _0x3dfc4b = Math['round'](_0x8ce5a2 * _0x186dcd - _0x250b21), _0x51b8d8 = Math['round'](_0x5c3ada * _0x186dcd - _0x9ead10);
        if (_0x3dfc4b > _0x4a1ff1 || _0x51b8d8 > _0x3d70be || _0x3dfc4b + _0x186dcd < 0x0 || _0x51b8d8 + _0x186dcd < 0x0)
            continue;
        _0x2d394d['rect'](_0x3dfc4b, _0x51b8d8, _0x186dcd + 0x1, _0x186dcd + 0x1);
    }
    _0x2d394d['fill']();
    if (_0x51a28c['length'] > 0x0) {
        _0x2d394d['globalCompositeOperation'] = 'destination-out';
        _0x2d394d['fillStyle'] = 'rgba(0,0,0,1)';
        _0x2d394d['beginPath']();
        for (const {
                    c: _0x1e5b2c,
                    r: _0x595d2e
                } of _0x51a28c) {
            const _0x260d6e = Math['round'](_0x1e5b2c * _0x186dcd - _0x250b21), _0x134773 = Math['round'](_0x595d2e * _0x186dcd - _0x9ead10);
            if (_0x260d6e > _0x4a1ff1 || _0x134773 > _0x3d70be || _0x260d6e + _0x186dcd < 0x0 || _0x134773 + _0x186dcd < 0x0)
                continue;
            _0x2d394d['rect'](_0x260d6e, _0x134773, _0x186dcd, _0x186dcd);
        }
        _0x2d394d['fill']();
        _0x2d394d['globalCompositeOperation'] = 'source-over';
    }
    if (_0x1dc267['polygon'] && _0x1dc267['polygon']['length'] >= 0x6) {
        _0x2d394d['globalCompositeOperation'] = 'destination-out';
        const _0x22ac94 = _0x1dc267['polygon'];
        _0x2d394d['save']();
        _0x2d394d['shadowBlur'] = 0xa;
        _0x2d394d['shadowColor'] = 'rgba(0,0,0,1)';
        _0x2d394d['beginPath']();
        _0x2d394d['moveTo'](_0x22ac94[0x0] - _0x250b21, _0x22ac94[0x1] - _0x9ead10);
        for (let _0x473bc6 = 0x2; _0x473bc6 < _0x22ac94['length']; _0x473bc6 += 0x2) {
            _0x2d394d['lineTo'](_0x22ac94[_0x473bc6] - _0x250b21, _0x22ac94[_0x473bc6 + 0x1] - _0x9ead10);
        }
        _0x2d394d['closePath']();
        _0x2d394d['fill']();
        _0x2d394d['restore']();
        _0x2d394d['beginPath']();
        _0x2d394d['moveTo'](_0x22ac94[0x0] - _0x250b21, _0x22ac94[0x1] - _0x9ead10);
        for (let _0x272b39 = 0x2; _0x272b39 < _0x22ac94['length']; _0x272b39 += 0x2) {
            _0x2d394d['lineTo'](_0x22ac94[_0x272b39] - _0x250b21, _0x22ac94[_0x272b39 + 0x1] - _0x9ead10);
        }
        _0x2d394d['closePath']();
        _0x2d394d['fill']();
        _0x2d394d['globalCompositeOperation'] = 'source-over';
    }
    _0x489a6d['drawImage'](_0x5b328f, 0x0, 0x0);
}
function _0x3d5a41(_0x1288ae) {
    let _0x237315 = 0x0, _0xd5207e = 0x0;
    const _0x2fb793 = _0x14e422['INPUTS']['mouseX'] / _0x14e422['SYSTEM']['viewScale'];
    const _0x1018e1 = _0x14e422['INPUTS']['mouseY'] / _0x14e422['SYSTEM']['viewScale'];
    const _0x511ba0 = _0x224a2a['x'] - _0x14e422['CAMERA']['x'] + _0x224a2a['width'] / 0x2;
    const _0x5c2212 = _0x224a2a['y'] - _0x14e422['CAMERA']['y'] + _0x224a2a['height'] / 0x2;
    const _0x53ca7b = Math['atan2'](_0x1018e1 - _0x5c2212, _0x2fb793 - _0x511ba0);
    if (_0x5069b3 !== 0x0 || _0x51f743 !== 0x0) {
        _0x237315 = _0x5069b3;
        _0xd5207e = _0x51f743;
    } else if (_0x8db8a3) {
        let _0x320da0 = 0x0, _0x42015c = 0x0;
        if (_0x14e422['INPUTS']['keys']['w'] || _0x14e422['INPUTS']['keys']['arrowup'])
            _0x320da0 += 0x1;
        if (_0x14e422['INPUTS']['keys']['s'] || _0x14e422['INPUTS']['keys']['arrowdown'])
            _0x320da0 -= 0x1;
        if (_0x14e422['INPUTS']['keys']['d'] || _0x14e422['INPUTS']['keys']['arrowright'])
            _0x42015c += 0x1;
        if (_0x14e422['INPUTS']['keys']['a'] || _0x14e422['INPUTS']['keys']['arrowleft'])
            _0x42015c -= 0x1;
        if (_0x320da0 !== 0x0 || _0x42015c !== 0x0) {
            const _0x566c48 = _0x53ca7b + Math['atan2'](_0x42015c, _0x320da0);
            _0x237315 = Math['cos'](_0x566c48);
            _0xd5207e = Math['sin'](_0x566c48);
        }
    } else {
        if (_0x14e422['INPUTS']['keys']['w'] || _0x14e422['INPUTS']['keys']['arrowup'])
            _0xd5207e -= 0x1;
        if (_0x14e422['INPUTS']['keys']['s'] || _0x14e422['INPUTS']['keys']['arrowdown'])
            _0xd5207e += 0x1;
        if (_0x14e422['INPUTS']['keys']['a'] || _0x14e422['INPUTS']['keys']['arrowleft'])
            _0x237315 -= 0x1;
        if (_0x14e422['INPUTS']['keys']['d'] || _0x14e422['INPUTS']['keys']['arrowright'])
            _0x237315 += 0x1;
        const _0x59eff3 = _0x237315 !== 0x0 || _0xd5207e !== 0x0;
        if (_0x59eff3) {
            const _0x52fe48 = Math['sqrt'](_0x237315 * _0x237315 + _0xd5207e * _0xd5207e);
            _0x237315 /= _0x52fe48;
            _0xd5207e /= _0x52fe48;
        }
    }
    if (_0x14e422['GAME_STATE'] === 'NIGHT' && _0x16f913 === 'Skinwalker') {
        if (_0x14e422['NIGHT_ABILITY_OPEN'] || !_0x14e422['CURRENT_TARGET']) {
            _0x237315 = 0x0;
            _0xd5207e = 0x0;
            _0x224a2a['vx'] = 0x0;
            _0x224a2a['vy'] = 0x0;
            _0x224a2a['x'] = _0x14e422['MAP']['columns'] * _0x14e422['MAP']['tileSize'] / 0x2 - _0x224a2a['width'] / 0x2;
            _0x224a2a['y'] = _0x14e422['MAP']['rows'] * _0x14e422['MAP']['tileSize'] / 0x2 - _0x224a2a['height'] / 0x2;
        }
    }
    const _0x35dcc5 = _0x237315 !== 0x0 || _0xd5207e !== 0x0;
    const _0xb12e3a = (_0x14e422['INPUTS']['keys']['shift'] || _0x48de7b || _0x23c2e0) && _0x35dcc5;
    _0x224a2a['bopTimer'] = _0xb12e3a ? _0x224a2a['bopTimer'] + _0x1288ae : 0x0;
    _0x224a2a['scale'] = 0x1 + (_0x224a2a['bopTimer'] > 0x0 ? Math['sin'](_0x224a2a['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x3bd4ec = Math['pow'](0.001, _0x1288ae);
    const _0x451822 = _0xb12e3a ? 0x74a : 0x5d5;
    _0x224a2a['vx'] += _0x237315 * _0x451822 * _0x1288ae;
    _0x224a2a['vy'] += _0xd5207e * _0x451822 * _0x1288ae;
    _0x224a2a['vx'] *= _0x3bd4ec;
    _0x224a2a['vy'] *= _0x3bd4ec;
    _0x224a2a['x'] += _0x224a2a['vx'] * _0x1288ae;
    _0x224a2a['y'] += _0x224a2a['vy'] * _0x1288ae;
    for (let _0x24d978 = 0x0; _0x24d978 < 0x3; _0x24d978++)
        _0xf656d3();
    for (let _0x3c5c2d = 0x0; _0x3c5c2d < 0x2; _0x3c5c2d++)
        _0x2deab0();
    for (let _0x15be7d = 0x0; _0x15be7d < 0x2; _0x15be7d++)
        _0x51e252();
    if (_0x224a2a['x'] < 0x0)
        _0x224a2a['x'] = 0x0;
    if (_0x224a2a['y'] < 0x0)
        _0x224a2a['y'] = 0x0;
    if (_0x224a2a['x'] + _0x224a2a['width'] > _0x14e422['MAP']['columns'] * _0x14e422['MAP']['tileSize'])
        _0x224a2a['x'] = _0x14e422['MAP']['columns'] * _0x14e422['MAP']['tileSize'] - _0x224a2a['width'];
    if (_0x224a2a['y'] + _0x224a2a['height'] > _0x14e422['MAP']['rows'] * _0x14e422['MAP']['tileSize'])
        _0x224a2a['y'] = _0x14e422['MAP']['rows'] * _0x14e422['MAP']['tileSize'] - _0x224a2a['height'];
    if (_0x21ed5e) {
        _0x224a2a['angle'] = _0x2b0ed9 + Math['PI'] / 0x2;
    } else if (_0x5069b3 !== 0x0 || _0x51f743 !== 0x0) {
        _0x224a2a['angle'] = Math['atan2'](_0x51f743, _0x5069b3) + Math['PI'] / 0x2;
    } else if (!_0x2e2f29) {
        _0x224a2a['angle'] = _0x53ca7b + Math['PI'] / 0x2;
    }
    const _0x5c526e = _0x224a2a['x'] + _0x224a2a['width'] / 0x2 - _0x14e422['CAMERA']['width'] / 0x2;
    const _0x4eedb8 = _0x224a2a['y'] + _0x224a2a['height'] / 0x2 - _0x14e422['CAMERA']['height'] / 0x2;
    if (_0x14e422['CAMERA']['x'] === null || isNaN(_0x14e422['CAMERA']['x']) || !isFinite(_0x14e422['CAMERA']['x'])) {
        _0x14e422['CAMERA']['x'] = _0x5c526e;
        _0x14e422['CAMERA']['y'] = _0x4eedb8;
    } else {
        const _0x5ba3c8 = 0x1 - Math['exp'](-Math['max'](0x0, _0x1288ae) * 0x28);
        _0x14e422['CAMERA']['x'] += (_0x5c526e - _0x14e422['CAMERA']['x']) * _0x5ba3c8;
        _0x14e422['CAMERA']['y'] += (_0x4eedb8 - _0x14e422['CAMERA']['y']) * _0x5ba3c8;
    }
    for (const _0x432194 in _0x26a5c8) {
        const _0x40bffe = _0x26a5c8[_0x432194];
        if (_0x40bffe['renderX'] === undefined) {
            _0x40bffe['renderX'] = _0x40bffe['x'];
            _0x40bffe['renderY'] = _0x40bffe['y'];
            _0x40bffe['renderAngle'] = _0x40bffe['angle'] || 0x0;
        }
        const _0x184ed2 = _0x40bffe['x'] + (_0x40bffe['vx'] || 0x0) * _0x1288ae;
        const _0x25470a = _0x40bffe['y'] + (_0x40bffe['vy'] || 0x0) * _0x1288ae;
        _0x40bffe['x'] = _0x184ed2;
        _0x40bffe['y'] = _0x25470a;
        const _0x40d43d = 0x1 - Math['exp'](-_0x1288ae * 0x12);
        const _0x27d063 = _0x40bffe['x'] - _0x40bffe['renderX'], _0x388748 = _0x40bffe['y'] - _0x40bffe['renderY'];
        const _0x189855 = Math['sqrt'](_0x27d063 * _0x27d063 + _0x388748 * _0x388748);
        const _0x4852ee = 0xc8;
        if (_0x189855 > _0x4852ee) {
            _0x40bffe['renderX'] = _0x40bffe['x'] - _0x27d063 / _0x189855 * _0x4852ee;
            _0x40bffe['renderY'] = _0x40bffe['y'] - _0x388748 / _0x189855 * _0x4852ee;
        }
        _0x40bffe['renderX'] += (_0x40bffe['x'] - _0x40bffe['renderX']) * _0x40d43d;
        _0x40bffe['renderY'] += (_0x40bffe['y'] - _0x40bffe['renderY']) * _0x40d43d;
        let _0x5e3940 = (_0x40bffe['angle'] || 0x0) - _0x40bffe['renderAngle'];
        while (_0x5e3940 < -Math['PI'])
            _0x5e3940 += Math['PI'] * 0x2;
        while (_0x5e3940 > Math['PI'])
            _0x5e3940 -= Math['PI'] * 0x2;
        _0x40bffe['renderAngle'] += _0x5e3940 * (0x1 - Math['exp'](-_0x1288ae * 0x14));
    }
    if (_0x14e422['GAME_STATE'] === 'NIGHT') {
        _0x22e793 = Math['min'](0.6, _0x22e793 + _0x1288ae * 0.5);
    } else {
        _0x22e793 = Math['max'](0x0, _0x22e793 - _0x1288ae * 0.5);
    }
    _0x57b50e();
    _0x5d65e9();
}
function _0x50ec81(_0x322b34, _0x1b61a1, _0x2a0eb9, _0x354841, _0x360400 = !![]) {
    _0x322b34['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x1b29ab = _0x322b34['measureText'](_0x1b61a1)['width'];
    const _0x311b2d = _0x1b29ab + 0x18;
    const _0x132a93 = 0x1c;
    _0x322b34['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x322b34['beginPath']();
    if (_0x322b34['roundRect']) {
        _0x322b34['roundRect'](_0x2a0eb9 - _0x311b2d / 0x2, _0x354841 - _0x132a93, _0x311b2d, _0x132a93, 0x6);
    } else {
        _0x322b34['rect'](_0x2a0eb9 - _0x311b2d / 0x2, _0x354841 - _0x132a93, _0x311b2d, _0x132a93);
    }
    _0x322b34['fill']();
    if (_0x360400) {
        _0x322b34['beginPath']();
        _0x322b34['moveTo'](_0x2a0eb9 - 0x6, _0x354841);
        _0x322b34['lineTo'](_0x2a0eb9 + 0x6, _0x354841);
        _0x322b34['lineTo'](_0x2a0eb9, _0x354841 + 0x6);
        _0x322b34['fill']();
    }
    _0x322b34['fillStyle'] = '#ffffff';
    _0x322b34['textAlign'] = 'center';
    _0x322b34['textBaseline'] = 'middle';
    _0x322b34['fillText'](_0x1b61a1, _0x2a0eb9, _0x354841 - _0x132a93 / 0x2 + 0x1);
}
function _0x1c22c4(_0x275117, _0x24af76, _0x65fe8e, _0x4a9230) {
    if (!_0x24af76 || _0x24af76['length'] === 0x0)
        return;
    let _0x57b12f = _0x4a9230;
    for (let _0x24e80a = 0x0; _0x24e80a < _0x24af76['length']; _0x24e80a++) {
        _0x50ec81(_0x275117, _0x24af76[_0x24e80a]['text'], _0x65fe8e, _0x57b12f, _0x24e80a === 0x0);
        _0x57b12f -= 0x24;
    }
}
function _0x2901ea() {
    if (!_0x14e422['SYSTEM']['isReady'])
        return;
    _0x35c3c2['fillStyle'] = '#000000';
    _0x35c3c2['fillRect'](0x0, 0x0, _0x2d457f['width'], _0x2d457f['height']);
    _0x35c3c2['save']();
    try {
        _0x35c3c2['scale'](_0x14e422['SYSTEM']['viewScale'], _0x14e422['SYSTEM']['viewScale']);
        _0x35c3c2['imageSmoothingEnabled'] = ![];
        const _0x234797 = Math['floor'](_0x14e422['CAMERA']['x'] || 0x0);
        const _0x3b77bc = Math['floor'](_0x14e422['CAMERA']['y'] || 0x0);
        const _0x183096 = Math['max'](0x0, Math['floor'](_0x234797 / _0x14e422['MAP']['chunkSize']));
        const _0x3ce38a = Math['min'](_0x14e422['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x234797 + _0x14e422['CAMERA']['width']) / _0x14e422['MAP']['chunkSize']));
        const _0xd82249 = Math['max'](0x0, Math['floor'](_0x3b77bc / _0x14e422['MAP']['chunkSize']));
        const _0x1089c4 = Math['min'](_0x14e422['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x3b77bc + _0x14e422['CAMERA']['height']) / _0x14e422['MAP']['chunkSize']));
        for (let _0x33b66c = _0xd82249; _0x33b66c <= _0x1089c4; _0x33b66c++)
            for (let _0x58e6d1 = _0x183096; _0x58e6d1 <= _0x3ce38a; _0x58e6d1++) {
                const _0x25b439 = _0x58e6d1 * _0x14e422['MAP']['chunkSize'] - _0x234797;
                const _0x45b248 = _0x33b66c * _0x14e422['MAP']['chunkSize'] - _0x3b77bc;
                _0x35c3c2['drawImage'](_0x14e422['MAP']['bgChunks'][_0x33b66c][_0x58e6d1], _0x25b439, _0x45b248, _0x14e422['MAP']['chunkSize'] + 0x1, _0x14e422['MAP']['chunkSize'] + 0x1);
            }
        if (_0x4d241b['complete'] && _0x4d241b['naturalWidth'] > 0x0) {
            const _0x2f4a82 = _0x14e422['MAP']['tileSize'];
            const _0x437690 = _0x2f4a82 * 0xa;
            const _0x5641ac = _0x14e422['MAP']['columns'] / 0x2 * _0x2f4a82 - _0x437690 / 0x2 - _0x234797;
            const _0x5f35ef = _0x14e422['MAP']['rows'] / 0x2 * _0x2f4a82 - _0x437690 / 0x2 - _0x3b77bc;
            _0x35c3c2['imageSmoothingEnabled'] = ![];
            _0x35c3c2['drawImage'](_0x4d241b, _0x5641ac, _0x5f35ef, _0x437690, _0x437690);
        }
        if (_0x17c778['complete'] && _0x17c778['naturalWidth'] > 0x0) {
            _0x14e422['ENTITIES']['forEach'](_0x2c1902 => {
                if (_0x2c1902['type'] !== 'table')
                    return;
                _0x35c3c2['save']();
                _0x35c3c2['imageSmoothingEnabled'] = ![];
                const _0x508fa0 = _0x17c778['naturalWidth'] >= _0x17c778['naturalHeight'];
                const _0x20230c = _0x2c1902['w'] >= _0x2c1902['h'];
                if (_0x508fa0 === _0x20230c) {
                    _0x35c3c2['drawImage'](_0x17c778, _0x2c1902['x'] - _0x234797, _0x2c1902['y'] - _0x3b77bc, _0x2c1902['w'], _0x2c1902['h']);
                } else {
                    _0x35c3c2['translate'](_0x2c1902['x'] - _0x234797 + _0x2c1902['w'] / 0x2, _0x2c1902['y'] - _0x3b77bc + _0x2c1902['h'] / 0x2);
                    _0x35c3c2['rotate'](Math['PI'] / 0x2);
                    _0x35c3c2['drawImage'](_0x17c778, -_0x2c1902['h'] / 0x2, -_0x2c1902['w'] / 0x2, _0x2c1902['h'], _0x2c1902['w']);
                }
                _0x35c3c2['restore']();
            });
        } else {
            _0x14e422['ENTITIES']['forEach'](_0xb7ad5e => {
                if (_0xb7ad5e['type'] !== 'table')
                    return;
                _0x35c3c2['save']();
                _0x35c3c2['fillStyle'] = '#6b4423';
                _0x35c3c2['fillRect'](_0xb7ad5e['x'] - _0x234797, _0xb7ad5e['y'] - _0x3b77bc, _0xb7ad5e['w'], _0xb7ad5e['h']);
                _0x35c3c2['strokeStyle'] = '#422810';
                _0x35c3c2['lineWidth'] = 0x3;
                _0x35c3c2['strokeRect'](_0xb7ad5e['x'] - _0x234797 + 0x1, _0xb7ad5e['y'] - _0x3b77bc + 0x1, _0xb7ad5e['w'] - 0x2, _0xb7ad5e['h'] - 0x2);
                _0x35c3c2['fillStyle'] = '#82532a';
                _0x35c3c2['fillRect'](_0xb7ad5e['x'] - _0x234797 + 0x4, _0xb7ad5e['y'] - _0x3b77bc + 0x4, _0xb7ad5e['w'] - 0x8, _0xb7ad5e['h'] - 0x8);
                _0x35c3c2['restore']();
            });
        }
        if (_0x4e2457) {
            if (_0x14e422['MAP']['wallChunks'] && _0x14e422['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x103955 = _0xd82249; _0x103955 <= _0x1089c4; _0x103955++) {
                    for (let _0x2edc54 = _0x183096; _0x2edc54 <= _0x3ce38a; _0x2edc54++) {
                        if (!_0x14e422['MAP']['wallChunks'][_0x103955] || !_0x14e422['MAP']['wallChunks'][_0x103955][_0x2edc54])
                            continue;
                        const _0x441022 = _0x2edc54 * _0x14e422['MAP']['chunkSize'] - _0x234797;
                        const _0xd2fd47 = _0x103955 * _0x14e422['MAP']['chunkSize'] - _0x3b77bc;
                        _0x35c3c2['drawImage'](_0x14e422['MAP']['wallChunks'][_0x103955][_0x2edc54], _0x441022, _0xd2fd47, _0x14e422['MAP']['chunkSize'] + 0x1, _0x14e422['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x525afa = _0xd82249; _0x525afa <= _0x1089c4; _0x525afa++) {
                for (let _0x2537e4 = _0x183096; _0x2537e4 <= _0x3ce38a; _0x2537e4++) {
                    const _0x11c44d = _0x2537e4 * _0x14e422['MAP']['chunkSize'] - _0x234797;
                    const _0x4c4318 = _0x525afa * _0x14e422['MAP']['chunkSize'] - _0x3b77bc;
                    _0x35c3c2['drawImage'](_0x14e422['MAP']['fgChunks'][_0x525afa][_0x2537e4], _0x11c44d, _0x4c4318, _0x14e422['MAP']['chunkSize'] + 0x1, _0x14e422['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x7c6b3b = _0x14e422['GAME_STATE'] === 'NIGHT' && _0x16f913 === 'Skinwalker' && !_0x224a2a['isDead'];
        const _0x38ab2b = _0x224a2a['x'] - _0x234797 + _0x224a2a['width'] / 0x2;
        const _0xefcee0 = _0x224a2a['y'] - _0x3b77bc + _0x224a2a['height'] / 0x2;
        const _0x4ced63 = _0x224a2a['width'] * _0x224a2a['scale'] * 1.3;
        const _0x13446e = _0x224a2a['height'] * _0x224a2a['scale'] * 1.3;
        for (const _0x1e9072 in _0x26a5c8) {
            const _0x29a3ca = _0x26a5c8[_0x1e9072];
            if (_0x29a3ca['isDead'])
                continue;
            const _0x339647 = (_0x29a3ca['renderX'] ?? _0x29a3ca['x']) - _0x234797 + _0x29a3ca['width'] / 0x2;
            const _0xdad6a7 = (_0x29a3ca['renderY'] ?? _0x29a3ca['y']) - _0x3b77bc + _0x29a3ca['height'] / 0x2;
            const _0x486b18 = Math['min'](0x2, Math['max'](0.3, _0x29a3ca['scale'] || 0x1));
            const _0x2a10b9 = _0x29a3ca['width'] * _0x486b18 * 1.3;
            const _0x341735 = _0x29a3ca['height'] * _0x486b18 * 1.3;
            _0x35c3c2['save']();
            try {
                _0x35c3c2['translate'](_0x339647, _0xdad6a7);
                _0x35c3c2['rotate'](_0x29a3ca['renderAngle'] ?? 0x0);
                if (_0x29a3ca['isDark'])
                    _0x35c3c2['filter'] = 'brightness(0)';
                _0x2d3b70(_0x35c3c2, _0x29a3ca['body'], _0x29a3ca['eyes'], _0x2a10b9, _0x341735);
                if (_0x558c67['has'](parseInt(_0x1e9072)) && _0x3ee613['complete'] && _0x3ee613['naturalWidth'] > 0x0) {
                    _0x35c3c2['drawImage'](_0x3ee613, -_0x2a10b9 / 0x2, -_0x341735 / 0x2, _0x2a10b9, _0x341735);
                }
                if (_0x29a3ca['isDark'])
                    _0x35c3c2['filter'] = 'none';
            } finally {
                _0x35c3c2['restore']();
            }
            if (!_0x155901((_0x29a3ca['renderX'] ?? _0x29a3ca['x']) + _0x29a3ca['width'] / 0x2, (_0x29a3ca['renderY'] ?? _0x29a3ca['y']) + _0x29a3ca['height'] / 0x2)) {
                _0x35c3c2['textAlign'] = 'center';
                _0x35c3c2['lineJoin'] = 'round';
                _0x35c3c2['lineWidth'] = 0x3;
                _0x35c3c2['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x35c3c2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x35c3c2['fillStyle'] = _0x558c67['has'](parseInt(_0x1e9072)) ? '#cc88ff' : '#ffffff';
                const _0x48d305 = _0x29a3ca['isDark'] ? '???' : _0x29a3ca['name'] + (_0x29a3ca['isOwner'] ? '\x20[🗝️]' : '');
                _0x35c3c2['strokeText'](_0x48d305, _0x339647, _0xdad6a7 - _0x341735 / 0x2 - 0x10);
                _0x35c3c2['fillText'](_0x48d305, _0x339647, _0xdad6a7 - _0x341735 / 0x2 - 0x10);
            }
        }
        if (!_0x224a2a['isDead']) {
            _0x35c3c2['save']();
            try {
                _0x35c3c2['translate'](_0x38ab2b, _0xefcee0);
                _0x35c3c2['rotate'](_0x224a2a['angle']);
                if (_0x7c6b3b)
                    _0x35c3c2['filter'] = 'brightness(0)';
                _0x2d3b70(_0x35c3c2, _0x502fd2, _0x43dd1f, _0x4ced63, _0x13446e);
                if (_0x558c67['has'](_0x372643) && _0x3ee613['complete'] && _0x3ee613['naturalWidth'] > 0x0) {
                    _0x35c3c2['drawImage'](_0x3ee613, -_0x4ced63 / 0x2, -_0x13446e / 0x2, _0x4ced63, _0x13446e);
                }
                if (_0x7c6b3b)
                    _0x35c3c2['filter'] = 'none';
            } finally {
                _0x35c3c2['restore']();
            }
            if (!_0x155901(_0x224a2a['x'] + _0x224a2a['width'] / 0x2, _0x224a2a['y'] + _0x224a2a['height'] / 0x2)) {
                _0x35c3c2['textAlign'] = 'center';
                _0x35c3c2['lineJoin'] = 'round';
                _0x35c3c2['lineWidth'] = 0x3;
                _0x35c3c2['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x35c3c2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x35c3c2['fillStyle'] = _0x558c67['has'](_0x372643) ? '#cc88ff' : '#ffffff';
                const _0x1803e7 = _0x7c6b3b ? '???' : _0x4b2192 + (_0x8a222e ? '\x20[🗝️]' : '');
                _0x35c3c2['strokeText'](_0x1803e7, _0x38ab2b, _0xefcee0 - _0x13446e / 0x2 - 0x10);
                _0x35c3c2['fillText'](_0x1803e7, _0x38ab2b, _0xefcee0 - _0x13446e / 0x2 - 0x10);
            }
        }
        if (_0x14e422['MAP']['wallChunks'] && _0x14e422['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x2f90c5 = _0xd82249; _0x2f90c5 <= _0x1089c4; _0x2f90c5++)
                for (let _0x38d437 = _0x183096; _0x38d437 <= _0x3ce38a; _0x38d437++) {
                    if (!_0x14e422['MAP']['wallChunks'][_0x2f90c5] || !_0x14e422['MAP']['wallChunks'][_0x2f90c5][_0x38d437])
                        continue;
                    const _0x1e551a = _0x38d437 * _0x14e422['MAP']['chunkSize'] - _0x234797;
                    const _0xeade40 = _0x2f90c5 * _0x14e422['MAP']['chunkSize'] - _0x3b77bc;
                    _0x35c3c2['drawImage'](_0x14e422['MAP']['wallChunks'][_0x2f90c5][_0x38d437], _0x1e551a, _0xeade40, _0x14e422['MAP']['chunkSize'] + 0x1, _0x14e422['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x5bbbe5 of _0x14e422['ENTITIES']) {
            if (_0x5bbbe5['type'] !== 'npc')
                continue;
            const _0x1577d3 = _0x5bbbe5['x'] - _0x234797 + _0x5bbbe5['w'] / 0x2;
            const _0x36a9e2 = _0x5bbbe5['y'] - _0x3b77bc + _0x5bbbe5['h'] / 0x2;
            const _0x23c129 = _0x5bbbe5['w'];
            const _0x4f8993 = _0x5bbbe5['h'];
            _0x35c3c2['save']();
            _0x35c3c2['translate'](_0x1577d3, _0x36a9e2);
            _0x35c3c2['rotate'](_0x5bbbe5['angle'] !== undefined ? _0x5bbbe5['angle'] : 0x0);
            _0x2d3b70(_0x35c3c2, _0x5bbbe5['body'] || 'yanito932.png', _0x5bbbe5['eyes'], _0x23c129, _0x4f8993);
            _0x35c3c2['restore']();
            _0x35c3c2['textAlign'] = 'center';
            _0x35c3c2['lineJoin'] = 'round';
            _0x35c3c2['lineWidth'] = 0x3;
            _0x35c3c2['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x35c3c2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x35c3c2['fillStyle'] = '#aaaaaa';
            _0x35c3c2['strokeText'](_0x5bbbe5['name'] || 'NPC', _0x1577d3, _0x36a9e2 - _0x4f8993 / 0x2 - 0x10);
            _0x35c3c2['fillText'](_0x5bbbe5['name'] || 'NPC', _0x1577d3, _0x36a9e2 - _0x4f8993 / 0x2 - 0x10);
        }
        if (_0x224a2a['isDead']) {
            for (const _0x473e8f in _0x26a5c8) {
                const _0x20bd18 = _0x26a5c8[_0x473e8f];
                if (!_0x20bd18['isDead'])
                    continue;
                const _0x5f0057 = (_0x20bd18['renderX'] ?? _0x20bd18['x']) - _0x234797 + _0x20bd18['width'] / 0x2;
                const _0x1432f3 = (_0x20bd18['renderY'] ?? _0x20bd18['y']) - _0x3b77bc + _0x20bd18['height'] / 0x2;
                const _0x17f0ab = _0x20bd18['width'] * (_0x20bd18['scale'] || 0x1) * 1.3;
                const _0x587f41 = _0x20bd18['height'] * (_0x20bd18['scale'] || 0x1) * 1.3;
                _0x35c3c2['save']();
                try {
                    _0x35c3c2['translate'](_0x5f0057, _0x1432f3);
                    _0x35c3c2['rotate'](_0x20bd18['renderAngle'] ?? 0x0);
                    _0x35c3c2['globalAlpha'] = 0.3;
                    _0x2d3b70(_0x35c3c2, _0x20bd18['body'], _0x20bd18['eyes'], _0x17f0ab, _0x587f41);
                } finally {
                    _0x35c3c2['restore']();
                }
                if (!_0x155901((_0x20bd18['renderX'] ?? _0x20bd18['x']) + _0x20bd18['width'] / 0x2, (_0x20bd18['renderY'] ?? _0x20bd18['y']) + _0x20bd18['height'] / 0x2)) {
                    _0x35c3c2['save']();
                    _0x35c3c2['globalAlpha'] = 0.3;
                    _0x35c3c2['textAlign'] = 'center';
                    _0x35c3c2['lineJoin'] = 'round';
                    _0x35c3c2['lineWidth'] = 0x3;
                    _0x35c3c2['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x35c3c2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x35c3c2['fillStyle'] = '#ffffff';
                    const _0x1a9c64 = _0x20bd18['name'] + (_0x20bd18['isOwner'] ? '\x20[🗝️]' : '');
                    _0x35c3c2['strokeText'](_0x1a9c64, _0x5f0057, _0x1432f3 - _0x587f41 / 0x2 - 0x10);
                    _0x35c3c2['fillText'](_0x1a9c64, _0x5f0057, _0x1432f3 - _0x587f41 / 0x2 - 0x10);
                    _0x35c3c2['restore']();
                }
            }
            _0x35c3c2['save']();
            try {
                _0x35c3c2['translate'](_0x38ab2b, _0xefcee0);
                _0x35c3c2['rotate'](_0x224a2a['angle']);
                _0x35c3c2['globalAlpha'] = 0.3;
                _0x2d3b70(_0x35c3c2, _0x502fd2, _0x43dd1f, _0x4ced63, _0x13446e);
            } finally {
                _0x35c3c2['restore']();
            }
            if (!_0x155901(_0x224a2a['x'] + _0x224a2a['width'] / 0x2, _0x224a2a['y'] + _0x224a2a['height'] / 0x2)) {
                _0x35c3c2['save']();
                _0x35c3c2['globalAlpha'] = 0.3;
                _0x35c3c2['textAlign'] = 'center';
                _0x35c3c2['lineJoin'] = 'round';
                _0x35c3c2['lineWidth'] = 0x3;
                _0x35c3c2['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x35c3c2['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x35c3c2['fillStyle'] = '#ffffff';
                const _0x32e0d6 = _0x4b2192 + (_0x8a222e ? '\x20[🗝️]' : '');
                _0x35c3c2['strokeText'](_0x32e0d6, _0x38ab2b, _0xefcee0 - _0x13446e / 0x2 - 0x10);
                _0x35c3c2['fillText'](_0x32e0d6, _0x38ab2b, _0xefcee0 - _0x13446e / 0x2 - 0x10);
                _0x35c3c2['restore']();
            }
        }
        for (let _0x27fc2f = _0xd82249; _0x27fc2f <= _0x1089c4; _0x27fc2f++)
            for (let _0x4baac0 = _0x183096; _0x4baac0 <= _0x3ce38a; _0x4baac0++) {
                const _0x5a657f = _0x4baac0 * _0x14e422['MAP']['chunkSize'] - _0x234797;
                const _0x48f530 = _0x27fc2f * _0x14e422['MAP']['chunkSize'] - _0x3b77bc;
                _0x35c3c2['drawImage'](_0x14e422['MAP']['fgChunks'][_0x27fc2f][_0x4baac0], _0x5a657f, _0x48f530, _0x14e422['MAP']['chunkSize'] + 0x1, _0x14e422['MAP']['chunkSize'] + 0x1);
            }
        if (_0x14e422['EDITOR']['enabled'] && _0x14e422['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x1d6895 = _0x14e422['INPUTS']['mouseX'] / _0x14e422['SYSTEM']['viewScale'] + _0x14e422['CAMERA']['x'];
            const _0xc3053e = _0x14e422['INPUTS']['mouseY'] / _0x14e422['SYSTEM']['viewScale'] + _0x14e422['CAMERA']['y'];
            const _0x31e3c5 = Math['floor'](_0x1d6895 / _0x14e422['MAP']['tileSize']);
            const _0x4214a7 = Math['floor'](_0xc3053e / _0x14e422['MAP']['tileSize']);
            if (_0x31e3c5 >= 0x0 && _0x31e3c5 < _0x14e422['MAP']['columns'] && _0x4214a7 >= 0x0 && _0x4214a7 < _0x14e422['MAP']['rows']) {
                const _0x24da94 = _0x31e3c5 * _0x14e422['MAP']['tileSize'] - _0x234797;
                const _0x3f23cb = _0x4214a7 * _0x14e422['MAP']['tileSize'] - _0x3b77bc;
                _0x35c3c2['save']();
                _0x35c3c2['globalAlpha'] = 0.5;
                if (_0x14e422['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x1ddcd5 = _0x14e422['EDITOR']['selectedTileGid'] - 0x1;
                    _0x35c3c2['drawImage'](_0x33d29e, _0x1ddcd5 % _0x14e422['MAP']['tilesetCols'] * _0x14e422['MAP']['tileSize'], Math['floor'](_0x1ddcd5 / _0x14e422['MAP']['tilesetCols']) * _0x14e422['MAP']['tileSize'], _0x14e422['MAP']['tileSize'], _0x14e422['MAP']['tileSize'], _0x24da94, _0x3f23cb, _0x14e422['MAP']['tileSize'], _0x14e422['MAP']['tileSize']);
                } else {
                    _0x35c3c2['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x35c3c2['fillRect'](_0x24da94, _0x3f23cb, _0x14e422['MAP']['tileSize'], _0x14e422['MAP']['tileSize']);
                }
                _0x35c3c2['restore']();
            }
        }
        _0x47ffd9(_0x35c3c2, _0x234797, _0x3b77bc);
        if (_0x22e793 > 0x0) {
            _0x35c3c2['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x22e793 + ')';
            _0x35c3c2['fillRect'](0x0, 0x0, _0x14e422['CAMERA']['width'], _0x14e422['CAMERA']['height']);
        }
        for (const _0x227c4d in _0x26a5c8) {
            const _0x1ed4dd = _0x26a5c8[_0x227c4d];
            if (_0x1ed4dd['isDead'] && !_0x224a2a['isDead'])
                continue;
            const _0x2fad80 = (_0x1ed4dd['renderX'] ?? _0x1ed4dd['x']) - _0x234797 + _0x1ed4dd['width'] / 0x2;
            const _0x106f7e = (_0x1ed4dd['renderY'] ?? _0x1ed4dd['y']) - _0x3b77bc + _0x1ed4dd['height'] / 0x2;
            _0x1c22c4(_0x35c3c2, _0x1ed4dd['chats'], _0x2fad80, _0x106f7e - _0x1ed4dd['height'] / 0x2 - 0x20);
        }
        _0x1c22c4(_0x35c3c2, _0x224a2a['chats'], _0x38ab2b, _0xefcee0 - _0x224a2a['height'] / 0x2 - 0x20);
    } finally {
        _0x35c3c2['restore']();
    }
}
function _0x215c68(_0x124d64) {
    if (!_0x14e422['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x215c68);
    let _0x13f2df = (_0x124d64 - _0x14e422['SYSTEM']['lastTime']) / 0x3e8;
    _0x14e422['SYSTEM']['lastTime'] = _0x124d64;
    if (_0x13f2df > 0.1)
        _0x13f2df = 0.1;
    if (_0x13f2df < 0x0 || isNaN(_0x13f2df))
        _0x13f2df = 0.016;
    if (_0x4e2457) {
        _0x56638c(_0x13f2df);
        _0x2901ea();
        return;
    }
    if (!_0x372643)
        return;
    _0x3d5a41(_0x13f2df);
    _0x45cb62['tick'](_0x124d64);
    _0x2901ea();
}
function _0x43a373() {
    const _0x957a94 = Math['ceil'](_0x14e422['MAP']['columns'] * _0x14e422['MAP']['tileSize'] / _0x14e422['MAP']['chunkSize']);
    const _0x527f6e = Math['ceil'](_0x14e422['MAP']['rows'] * _0x14e422['MAP']['tileSize'] / _0x14e422['MAP']['chunkSize']);
    _0x14e422['MAP']['bgChunks'] = [];
    _0x14e422['MAP']['fgChunks'] = [];
    _0x14e422['MAP']['wallChunks'] = [];
    for (let _0x2dd648 = 0x0; _0x2dd648 < _0x527f6e; _0x2dd648++) {
        _0x14e422['MAP']['bgChunks'][_0x2dd648] = [];
        _0x14e422['MAP']['fgChunks'][_0x2dd648] = [];
        _0x14e422['MAP']['wallChunks'][_0x2dd648] = [];
        for (let _0x2aa2a2 = 0x0; _0x2aa2a2 < _0x957a94; _0x2aa2a2++) {
            const _0x57b160 = document['createElement']('canvas');
            _0x57b160['width'] = _0x57b160['height'] = _0x14e422['MAP']['chunkSize'];
            const _0x1f3e10 = document['createElement']('canvas');
            _0x1f3e10['width'] = _0x1f3e10['height'] = _0x14e422['MAP']['chunkSize'];
            const _0x4dd388 = document['createElement']('canvas');
            _0x4dd388['width'] = _0x4dd388['height'] = _0x14e422['MAP']['chunkSize'];
            _0x14e422['MAP']['bgChunks'][_0x2dd648][_0x2aa2a2] = _0x57b160;
            _0x14e422['MAP']['fgChunks'][_0x2dd648][_0x2aa2a2] = _0x1f3e10;
            _0x14e422['MAP']['wallChunks'][_0x2dd648][_0x2aa2a2] = _0x4dd388;
            _0x391827(_0x2aa2a2, _0x2dd648);
        }
    }
}
function _0x391827(_0x5a29c9, _0x1892ba) {
    const _0x50ecb1 = _0x14e422['MAP']['bgChunks'][_0x1892ba][_0x5a29c9]['getContext']('2d', { 'alpha': !![] });
    const _0x30ed36 = _0x14e422['MAP']['fgChunks'][_0x1892ba][_0x5a29c9]['getContext']('2d', { 'alpha': !![] });
    const _0x2d9942 = _0x14e422['MAP']['wallChunks'][_0x1892ba] && _0x14e422['MAP']['wallChunks'][_0x1892ba][_0x5a29c9] ? _0x14e422['MAP']['wallChunks'][_0x1892ba][_0x5a29c9]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x50ecb1['imageSmoothingEnabled'] = _0x30ed36['imageSmoothingEnabled'] = ![];
    if (_0x2d9942)
        _0x2d9942['imageSmoothingEnabled'] = ![];
    _0x50ecb1['clearRect'](0x0, 0x0, _0x14e422['MAP']['chunkSize'], _0x14e422['MAP']['chunkSize']);
    _0x30ed36['clearRect'](0x0, 0x0, _0x14e422['MAP']['chunkSize'], _0x14e422['MAP']['chunkSize']);
    if (_0x2d9942)
        _0x2d9942['clearRect'](0x0, 0x0, _0x14e422['MAP']['chunkSize'], _0x14e422['MAP']['chunkSize']);
    const _0x4d2632 = Math['floor'](_0x5a29c9 * _0x14e422['MAP']['chunkSize'] / _0x14e422['MAP']['tileSize']);
    const _0x5d24c3 = Math['ceil']((_0x5a29c9 + 0x1) * _0x14e422['MAP']['chunkSize'] / _0x14e422['MAP']['tileSize']);
    const _0x1f748f = Math['floor'](_0x1892ba * _0x14e422['MAP']['chunkSize'] / _0x14e422['MAP']['tileSize']);
    const _0x118c31 = Math['ceil']((_0x1892ba + 0x1) * _0x14e422['MAP']['chunkSize'] / _0x14e422['MAP']['tileSize']);
    const _0x47f5c2 = 0.5;
    const _0x456592 = _0x14e422['MAP']['tileSize'] - _0x47f5c2 * 0x2;
    _0x14e422['MAP']['layers']['forEach'](_0xf4da7a => {
        const _0x46f477 = _0xf4da7a['name'] === 'walls';
        const _0x24987a = _0xf4da7a['name'] === 'trees' ? _0x30ed36 : _0x46f477 ? _0x2d9942 || _0x50ecb1 : _0x50ecb1;
        for (let _0x58d712 = Math['max'](0x0, _0x1f748f); _0x58d712 < Math['min'](_0x14e422['MAP']['rows'], _0x118c31); _0x58d712++) {
            for (let _0x4c0d46 = Math['max'](0x0, _0x4d2632); _0x4c0d46 < Math['min'](_0x14e422['MAP']['columns'], _0x5d24c3); _0x4c0d46++) {
                let _0x42d24c = _0xf4da7a['data'][_0x58d712 * _0x14e422['MAP']['columns'] + _0x4c0d46];
                if (_0xf4da7a['name'] === 'floor2' && _0x14e422['MAP']['doors'] && _0x14e422['MAP']['doors'][_0x58d712 * _0x14e422['MAP']['columns'] + _0x4c0d46]) {
                    _0x42d24c = 0x2;
                }
                if (_0x42d24c > 0x0) {
                    const _0x2bb988 = _0x42d24c - 0x1;
                    const _0xdd9445 = _0x2bb988 % _0x14e422['MAP']['tilesetCols'] * _0x14e422['MAP']['tileSize'] + _0x47f5c2;
                    const _0x1b9498 = Math['floor'](_0x2bb988 / _0x14e422['MAP']['tilesetCols']) * _0x14e422['MAP']['tileSize'] + _0x47f5c2;
                    const _0x15fc39 = _0x4c0d46 * _0x14e422['MAP']['tileSize'] - _0x5a29c9 * _0x14e422['MAP']['chunkSize'];
                    const _0x2ddaa8 = _0x58d712 * _0x14e422['MAP']['tileSize'] - _0x1892ba * _0x14e422['MAP']['chunkSize'];
                    if (_0x42d24c === 0x4) {
                        const _0x2677d7 = 0x1;
                        const _0x28b00e = _0x2677d7 % _0x14e422['MAP']['tilesetCols'] * _0x14e422['MAP']['tileSize'] + _0x47f5c2;
                        const _0x170da2 = Math['floor'](_0x2677d7 / _0x14e422['MAP']['tilesetCols']) * _0x14e422['MAP']['tileSize'] + _0x47f5c2;
                        _0x50ecb1['drawImage'](_0x33d29e, _0x28b00e, _0x170da2, _0x456592, _0x456592, _0x15fc39, _0x2ddaa8, _0x14e422['MAP']['tileSize'], _0x14e422['MAP']['tileSize']);
                        let _0x551d7a = _0x14e422['MAP']['doors'] ? _0x14e422['MAP']['doors'][_0x58d712 * _0x14e422['MAP']['columns'] + _0x4c0d46] : null;
                        if (!_0x551d7a) {
                            const _0xd9d85f = _0x14e422['MAP']['layers']['find'](_0x34941e => _0x34941e['name'] === 'walls');
                            const _0x146534 = _0x58d712 > 0x0 && _0xd9d85f && _0xd9d85f['data'][(_0x58d712 - 0x1) * _0x14e422['MAP']['columns'] + _0x4c0d46] > 0x0;
                            const _0x1dafe9 = _0x58d712 < _0x14e422['MAP']['rows'] - 0x1 && _0xd9d85f && _0xd9d85f['data'][(_0x58d712 + 0x1) * _0x14e422['MAP']['columns'] + _0x4c0d46] > 0x0;
                            const _0x5f284b = _0x4c0d46 > 0x0 && _0xd9d85f && _0xd9d85f['data'][_0x58d712 * _0x14e422['MAP']['columns'] + _0x4c0d46 - 0x1] > 0x0;
                            const _0x58a855 = _0x4c0d46 < _0x14e422['MAP']['columns'] - 0x1 && _0xd9d85f && _0xd9d85f['data'][_0x58d712 * _0x14e422['MAP']['columns'] + _0x4c0d46 + 0x1] > 0x0;
                            if (_0x5f284b && _0x58a855)
                                _0x551d7a = _0x58d712 < _0x14e422['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x146534 && _0x1dafe9)
                                _0x551d7a = _0x4c0d46 < _0x14e422['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x59335c = 0x0;
                        if (_0x551d7a === 'bottom')
                            _0x59335c = Math['PI'] / 0x2;
                        else if (_0x551d7a === 'left')
                            _0x59335c = Math['PI'];
                        else if (_0x551d7a === 'top')
                            _0x59335c = -Math['PI'] / 0x2;
                        else if (_0x551d7a === 'right')
                            _0x59335c = 0x0;
                        if (_0x59335c !== 0x0) {
                            _0x24987a['save']();
                            _0x24987a['translate'](_0x15fc39 + _0x14e422['MAP']['tileSize'] / 0x2, _0x2ddaa8 + _0x14e422['MAP']['tileSize'] / 0x2);
                            _0x24987a['rotate'](_0x59335c);
                            _0x24987a['drawImage'](_0x33d29e, _0xdd9445, _0x1b9498, _0x456592, _0x456592, -_0x14e422['MAP']['tileSize'] / 0x2, -_0x14e422['MAP']['tileSize'] / 0x2, _0x14e422['MAP']['tileSize'], _0x14e422['MAP']['tileSize']);
                            _0x24987a['restore']();
                        } else {
                            _0x24987a['drawImage'](_0x33d29e, _0xdd9445, _0x1b9498, _0x456592, _0x456592, _0x15fc39, _0x2ddaa8, _0x14e422['MAP']['tileSize'], _0x14e422['MAP']['tileSize']);
                        }
                    } else {
                        _0x24987a['drawImage'](_0x33d29e, _0xdd9445, _0x1b9498, _0x456592, _0x456592, _0x15fc39, _0x2ddaa8, _0x14e422['MAP']['tileSize'], _0x14e422['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x48f343() {
    _0x33d29e['crossOrigin'] = 'Anonymous';
    _0x33d29e['onload'] = () => {
        _0x14e422['MAP']['tilesetCols'] = 0x3;
        _0x14f477();
    };
    _0x33d29e['onerror'] = () => {
        _0x14e422['MAP']['tilesetCols'] = 0x1;
        _0x14f477();
    };
    _0x33d29e['src'] = 'assets/tilesheet.png';
    _0x4d241b['crossOrigin'] = 'Anonymous';
    _0x4d241b['onload'] = _0x14f477;
    _0x4d241b['onerror'] = () => {
        _0x14f477();
    };
    _0x4d241b['src'] = 'assets/center.png';
    _0x17c778['crossOrigin'] = 'Anonymous';
    _0x17c778['onload'] = _0x14f477;
    _0x17c778['onerror'] = () => {
        _0x14f477();
    };
    _0x17c778['src'] = 'assets/table.png';
}
function _0x14f477() {
    _0x14e422['SYSTEM']['assetsLoaded']++;
    if (_0x14e422['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x55a0c2();
    }
}
function _0x30f703(_0x2a8fc6, _0xa918f1) {
    if (!_0x8a222e || !_0x10f155)
        return;
    const _0x4c78cc = _0x2a8fc6 / _0x14e422['SYSTEM']['viewScale'] + _0x14e422['CAMERA']['x'];
    const _0xf6bc7 = _0xa918f1 / _0x14e422['SYSTEM']['viewScale'] + _0x14e422['CAMERA']['y'];
    const _0x4432ff = Math['floor'](_0x4c78cc / _0x14e422['MAP']['tileSize']);
    const _0x30bf50 = Math['floor'](_0xf6bc7 / _0x14e422['MAP']['tileSize']);
    if (_0x4432ff >= 0x0 && _0x4432ff < _0x14e422['MAP']['columns'] && _0x30bf50 >= 0x0 && _0x30bf50 < _0x14e422['MAP']['rows'])
        _0x10f155['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x14e422['EDITOR']['selectedLayer'],
            'col': _0x4432ff,
            'row': _0x30bf50,
            'gid': _0x14e422['EDITOR']['selectedTileGid']
        }));
}
function _0x17d8c7() {
    const _0x58b485 = document['getElementById']('palette');
    if (!_0x58b485 || _0x58b485['children']['length'] > 0x0)
        return;
    const _0x298fec = 0x40;
    const _0x1da123 = _0x33d29e;
    const _0x5198c9 = document['createElement']('div');
    _0x5198c9['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0xa54996 = document['createElement']('canvas');
    _0xa54996['width'] = 0xc0;
    _0xa54996['height'] = 0xa0;
    _0xa54996['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x5198c9['appendChild'](_0xa54996);
    const _0x3b4310 = document['createElement']('div');
    _0x3b4310['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x5198c9['appendChild'](_0x3b4310);
    let _0x3d205a = 0x0, _0x49faac = 0x0;
    let _0x25b0bc = ![], _0x14e49f = 0x0, _0x540bbd = 0x0, _0x267dad = 0x0, _0x3ed07c = 0x0;
    function _0x439afb() {
        const _0x354806 = _0xa54996['getContext']('2d');
        _0x354806['clearRect'](0x0, 0x0, _0xa54996['width'], _0xa54996['height']);
        _0x354806['imageSmoothingEnabled'] = ![];
        if (_0x1da123['complete'] && _0x1da123['naturalWidth'] > 0x0) {
            _0x354806['drawImage'](_0x1da123, _0x3d205a, _0x49faac, _0xa54996['width'], _0xa54996['height'], 0x0, 0x0, _0xa54996['width'], _0xa54996['height']);
        }
        _0x354806['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x354806['lineWidth'] = 0x1;
        const _0x32583e = Math['floor'](_0x3d205a / _0x298fec);
        const _0x5c5783 = Math['floor'](_0x49faac / _0x298fec);
        for (let _0x5b9556 = _0x32583e; _0x5b9556 <= _0x32583e + Math['ceil'](_0xa54996['width'] / _0x298fec) + 0x1; _0x5b9556++) {
            const _0x4ede31 = _0x5b9556 * _0x298fec - _0x3d205a;
            _0x354806['beginPath']();
            _0x354806['moveTo'](_0x4ede31, 0x0);
            _0x354806['lineTo'](_0x4ede31, _0xa54996['height']);
            _0x354806['stroke']();
        }
        for (let _0x27219e = _0x5c5783; _0x27219e <= _0x5c5783 + Math['ceil'](_0xa54996['height'] / _0x298fec) + 0x1; _0x27219e++) {
            const _0x27419b = _0x27219e * _0x298fec - _0x49faac;
            _0x354806['beginPath']();
            _0x354806['moveTo'](0x0, _0x27419b);
            _0x354806['lineTo'](_0xa54996['width'], _0x27419b);
            _0x354806['stroke']();
        }
    }
    function _0x3bdd8b() {
        const _0x5864e4 = Math['max'](0x1, Math['ceil'](_0x1da123['naturalWidth'] / _0x298fec));
        const _0x45800b = _0x14e422['EDITOR']['selectedTileGid'];
        if (_0x45800b <= 0x0) {
            _0x3b4310['style']['display'] = 'none';
            return;
        }
        const _0x1cd1e0 = _0x45800b - 0x1;
        const _0x33bc4d = _0x1cd1e0 % _0x5864e4;
        const _0x417781 = Math['floor'](_0x1cd1e0 / _0x5864e4);
        const _0x24f1e2 = _0x33bc4d * _0x298fec - _0x3d205a;
        const _0x1a4573 = _0x417781 * _0x298fec - _0x49faac;
        _0x3b4310['style']['display'] = 'block';
        _0x3b4310['style']['left'] = _0x24f1e2 + 'px';
        _0x3b4310['style']['top'] = _0x1a4573 + 'px';
    }
    _0x1da123['onload'] = () => {
        _0x439afb();
        _0x3bdd8b();
    };
    if (_0x1da123['complete'] && _0x1da123['naturalWidth'] > 0x0) {
        _0x439afb();
        _0x3bdd8b();
    }
    _0x5198c9['addEventListener']('mousedown', _0x4fe639 => {
        if (_0x4fe639['button'] === 0x0) {
            _0x25b0bc = !![];
            _0x14e49f = _0x4fe639['clientX'];
            _0x540bbd = _0x4fe639['clientY'];
            _0x267dad = _0x3d205a;
            _0x3ed07c = _0x49faac;
            _0x5198c9['style']['cursor'] = 'grabbing';
            _0x4fe639['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x1821d8 => {
        if (!_0x25b0bc)
            return;
        const _0xad7a8e = _0x14e49f - _0x1821d8['clientX'];
        const _0x555c59 = _0x540bbd - _0x1821d8['clientY'];
        const _0x2361d2 = Math['max'](0x0, _0x1da123['naturalWidth'] - _0xa54996['width']);
        const _0x285ddc = Math['max'](0x0, _0x1da123['naturalHeight'] - _0xa54996['height']);
        _0x3d205a = Math['max'](0x0, Math['min'](_0x2361d2, _0x267dad + _0xad7a8e));
        _0x49faac = Math['max'](0x0, Math['min'](_0x285ddc, _0x3ed07c + _0x555c59));
        _0x439afb();
        _0x3bdd8b();
    });
    window['addEventListener']('mouseup', _0x1a0a38 => {
        if (_0x25b0bc) {
            _0x25b0bc = ![];
            _0x5198c9['style']['cursor'] = 'grab';
        }
    });
    _0x5198c9['addEventListener']('click', _0x3659f1 => {
        const _0x42c024 = _0x5198c9['getBoundingClientRect']();
        const _0x132263 = _0x3659f1['clientX'] - _0x42c024['left'] + _0x3d205a;
        const _0x2a2314 = _0x3659f1['clientY'] - _0x42c024['top'] + _0x49faac;
        const _0x5330b1 = Math['max'](0x1, Math['ceil'](_0x1da123['naturalWidth'] / _0x298fec));
        const _0x521647 = Math['floor'](_0x132263 / _0x298fec);
        const _0x51d8ee = Math['floor'](_0x2a2314 / _0x298fec);
        const _0x778ef9 = _0x51d8ee * _0x5330b1 + _0x521647 + 0x1;
        _0x14e422['EDITOR']['selectedTileGid'] = _0x778ef9;
        _0x3bdd8b();
    });
    _0x58b485['appendChild'](_0x5198c9);
    const _0x3a0535 = document['createElement']('div');
    _0x3a0535['className'] = 'tile-btn\x20eraser-btn';
    _0x3a0535['title'] = 'Eraser\x20(gid\x200)';
    _0x3a0535['onclick'] = () => {
        _0x14e422['EDITOR']['selectedTileGid'] = 0x0;
        _0x3b4310['style']['display'] = 'none';
    };
    _0x58b485['appendChild'](_0x3a0535);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x14e422['EDITOR']['enabled'] = !_0x14e422['EDITOR']['enabled'];
        const _0xa88d9f = document['getElementById']('editor-tools');
        if (_0x14e422['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0xa88d9f['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0xa88d9f['style']['display'] = 'none';
        }
    });
    const _0x4e57f5 = document['getElementById']('start-game-btn');
    if (_0x4e57f5) {
        _0x4e57f5['addEventListener']('click', () => {
            if (_0x10f155)
                _0x10f155['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x245217 = document['getElementById']('rolelist-toggle-btn');
    if (_0x245217) {
        let _0xf184b5 = 'subalignments';
        _0x245217['addEventListener']('click', () => {
            if (_0xf184b5 === 'subalignments')
                _0xf184b5 = 'precise';
            else if (_0xf184b5 === 'precise')
                _0xf184b5 = 'off';
            else
                _0xf184b5 = 'subalignments';
            _0x245217['innerText'] = 'Role\x20List:\x20' + _0xf184b5['charAt'](0x0)['toUpperCase']() + _0xf184b5['slice'](0x1);
            if (_0x10f155)
                _0x10f155['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0xf184b5
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x40fa49 => {
        if (_0x40fa49['id'] === 'editor-toggle-btn' || _0x40fa49['id'] === 'start-game-btn' || _0x40fa49['id'] === 'rolelist-toggle-btn')
            return;
        _0x40fa49['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x14b5ac => _0x14b5ac['classList']['remove']('active'));
            _0x40fa49['classList']['add']('active');
            _0x14e422['EDITOR']['selectedLayer'] = _0x40fa49['dataset']['layer'];
        });
    });
}
function _0x3d44af(_0x2131dc) {
    if (_0x10f155)
        _0x10f155['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x2131dc
        }));
}
function _0x21e649(_0xeff964) {
    if (_0x10f155)
        _0x10f155['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0xeff964
        }));
}
function _0x3d8129(_0x266031, _0x5eab33, _0x5d9132, _0xd15bac) {
    const _0x2c2773 = document['getElementById']('admin-panel');
    if (_0x2c2773)
        _0x2c2773['remove']();
    if (_0x2c2773 && _0x2c2773['dataset']['target'] === String(_0x266031))
        return;
    const _0x29a7d9 = document['createElement']('div');
    _0x29a7d9['id'] = 'admin-panel';
    _0x29a7d9['dataset']['target'] = String(_0x266031);
    _0x29a7d9['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x50852d = document['createElement']('div');
    _0x50852d['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x50852d['textContent'] = _0x5eab33;
    _0x29a7d9['appendChild'](_0x50852d);
    const _0x19596c = document['createElement']('button');
    _0x19596c['textContent'] = 'Kick';
    _0x19596c['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x19596c['onmouseenter'] = () => _0x19596c['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x19596c['onmouseleave'] = () => _0x19596c['style']['background'] = 'transparent';
    _0x19596c['onclick'] = () => {
        _0x3d44af(_0x266031);
        _0x29a7d9['remove']();
    };
    _0x29a7d9['appendChild'](_0x19596c);
    const _0x318c4a = document['createElement']('button');
    _0x318c4a['textContent'] = 'Ban';
    _0x318c4a['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x318c4a['onmouseenter'] = () => _0x318c4a['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x318c4a['onmouseleave'] = () => _0x318c4a['style']['background'] = 'transparent';
    _0x318c4a['onclick'] = () => {
        _0x21e649(_0x266031);
        _0x29a7d9['remove']();
    };
    _0x29a7d9['appendChild'](_0x318c4a);
    document['body']['appendChild'](_0x29a7d9);
    const _0x495043 = _0x29a7d9['offsetWidth'] || 0x91;
    const _0x1f6b62 = _0x29a7d9['offsetHeight'] || 0x50;
    let _0x59919b = _0x5d9132 - _0x495043;
    let _0x1ed623 = _0xd15bac;
    if (_0x59919b < 0x4)
        _0x59919b = _0x5d9132;
    if (_0x1ed623 + _0x1f6b62 > window['innerHeight'] - 0x4)
        _0x1ed623 = window['innerHeight'] - _0x1f6b62 - 0x4;
    _0x29a7d9['style']['left'] = _0x59919b + 'px';
    _0x29a7d9['style']['top'] = _0x1ed623 + 'px';
    const _0x206695 = _0x2511dd => {
        if (!_0x29a7d9['contains'](_0x2511dd['target'])) {
            _0x29a7d9['remove']();
            document['removeEventListener']('mousedown', _0x206695);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x206695), 0x0);
}
function _0x33f9b5() {
    const _0x309a66 = document['getElementById']('leaderboard-list');
    _0x309a66['innerHTML'] = '';
    const _0x5865f7 = document['createElement']('div');
    _0x5865f7['className'] = 'leaderboard-entry';
    const _0xd98530 = document['createElement']('span');
    _0xd98530['textContent'] = _0x4b2192 + (_0x8a222e ? '\x20[🗝️]' : '');
    if (_0x558c67['has'](_0x372643) && !_0x224a2a['isDead']) {
        _0xd98530['style']['color'] = '#cc88ff';
    }
    _0x5865f7['appendChild'](_0xd98530);
    _0x309a66['appendChild'](_0x5865f7);
    for (const _0x12c775 in _0x26a5c8) {
        const _0x15bff2 = document['createElement']('div');
        _0x15bff2['className'] = 'leaderboard-entry';
        const _0x167ce6 = document['createElement']('span');
        _0x167ce6['textContent'] = _0x26a5c8[_0x12c775]['name'] + (_0x26a5c8[_0x12c775]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x558c67['has'](parseInt(_0x12c775)) && !_0x26a5c8[_0x12c775]['isDead']) {
            _0x167ce6['style']['color'] = '#cc88ff';
        }
        _0x15bff2['appendChild'](_0x167ce6);
        if (_0x8a222e && !_0x26a5c8[_0x12c775]['isOwner']) {
            const _0x2000c6 = _0x26a5c8[_0x12c775]['id'];
            const _0x1dbe02 = _0x26a5c8[_0x12c775]['name'];
            _0x15bff2['style']['cursor'] = 'context-menu';
            _0x15bff2['addEventListener']('contextmenu', _0x1a2b6b => {
                _0x1a2b6b['preventDefault']();
                _0x1a2b6b['stopPropagation']();
                _0x3d8129(_0x2000c6, _0x1dbe02, _0x1a2b6b['clientX'], _0x1a2b6b['clientY']);
            });
        }
        _0x309a66['appendChild'](_0x15bff2);
    }
}
window['addEventListener']('resize', _0x55a0c2);
function _0x55a0c2() {
    _0x2d457f['width'] = window['innerWidth'];
    _0x2d457f['height'] = window['innerHeight'];
    _0x14e422['SYSTEM']['viewScale'] = Math['max'](_0x2d457f['width'] / _0x59d335, _0x2d457f['height'] / _0x46f102);
    _0x14e422['CAMERA']['width'] = _0x2d457f['width'] / _0x14e422['SYSTEM']['viewScale'];
    _0x14e422['CAMERA']['height'] = _0x2d457f['height'] / _0x14e422['SYSTEM']['viewScale'];
    _0x35c3c2['imageSmoothingEnabled'] = ![];
}
function _0x1a2f9d(_0x4fc6af) {
    if (_0x4fc6af['ctrlKey'] || _0x4fc6af['metaKey']) {
        if (_0x4fc6af['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x4fc6af['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x4fc6af['code'])) {
            _0x4fc6af['preventDefault']();
            _0x4fc6af['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x1a2f9d, { 'passive': ![] });
window['addEventListener']('keydown', _0x1a2f9d, { 'passive': ![] });
window['addEventListener']('keydown', _0x3c3675 => {
    const _0x5ae530 = _0x3c3675['key']['toLowerCase']();
    if (_0x5ae530 === 'tab') {
        _0x3c3675['preventDefault']();
        const _0x4ded44 = document['getElementById']('will-ui');
        const _0x4b5f22 = document['getElementById']('will-input');
        if (_0x4ded44['style']['display'] === 'flex') {
            _0x4ded44['style']['display'] = 'none';
            if (_0x10f155)
                _0x10f155['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x4b5f22['value']
                }));
            _0x4b5f22['blur']();
        } else {
            _0x4ded44['style']['display'] = 'flex';
            _0x4b5f22['focus']();
            for (let _0x2de563 in _0x14e422['INPUTS']['keys'])
                _0x14e422['INPUTS']['keys'][_0x2de563] = ![];
        }
        return;
    }
    if (_0x3c3675['key'] === 'Enter') {
        if (_0x4e2457) {
            const _0x27ec29 = document['getElementById']('play-btn');
            if (_0x27ec29)
                _0x27ec29['click']();
            return;
        }
        if (!_0x10f155 || _0x10f155['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x5bf26d = document['getElementById']('chat-ui');
        const _0x3c2825 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x3c2825) {
            const _0x179ef7 = _0x3c2825['value']['trim']();
            if (_0x179ef7['length'] > 0x0) {
                _0x10f155['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x179ef7
                }));
            }
            _0x3c2825['value'] = '';
            _0x5bf26d['style']['display'] = 'none';
            _0x3c2825['blur']();
        } else {
            _0x5bf26d['style']['display'] = 'block';
            _0x3c2825['focus']();
            for (let _0x487e81 in _0x14e422['INPUTS']['keys'])
                _0x14e422['INPUTS']['keys'][_0x487e81] = ![];
        }
        _0x3c3675['preventDefault']();
        return;
    }
    if (_0x3c3675['key'] === 'Escape') {
        const _0x265391 = document['getElementById']('guide-ui');
        if (_0x265391 && _0x265391['style']['display'] === 'flex') {
            _0x265391['style']['display'] = 'none';
            return;
        }
        const _0x12b1f4 = document['getElementById']('ability-ui');
        if (_0x12b1f4 && _0x12b1f4['style']['display'] === 'block') {
            _0x12b1f4['style']['display'] = 'none';
            return;
        }
        const _0x16460a = document['getElementById']('settings-panel');
        if (_0x16460a && _0x16460a['style']['display'] === 'block') {
            _0x16460a['style']['display'] = 'none';
            return;
        }
        const _0x3ffd5c = document['getElementById']('mayor-confirm-dialog');
        if (_0x3ffd5c && _0x3ffd5c['style']['display'] === 'flex') {
            _0x3ffd5c['style']['display'] = 'none';
            return;
        }
        const _0x366b82 = document['getElementById']('target-chooser-ui');
        if (_0x366b82 && _0x366b82['style']['display'] === 'flex') {
            _0x366b82['style']['display'] = 'none';
            return;
        }
        const _0x124572 = document['getElementById']('chat-ui');
        const _0x13fa9d = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x13fa9d) {
            _0x13fa9d['value'] = '';
            _0x124572['style']['display'] = 'none';
            _0x13fa9d['blur']();
            _0x3c3675['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x14e422['INPUTS']['keys']['hasOwnProperty'](_0x5ae530))
            _0x14e422['INPUTS']['keys'][_0x5ae530] = !![];
        if (!_0x10f155 || _0x10f155['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x5ae530 === 'h' && !_0x3c3675['repeat']) {
            const _0x391732 = document['getElementById']('guide-ui');
            if (_0x391732) {
                _0x391732['style']['display'] = _0x391732['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x5ae530 === 't' && !_0x3c3675['repeat']) {
            if (_0x224a2a['isDead'])
                return;
            if (_0x16f913 === 'Mayor') {
                if (_0x558c67['has'](_0x372643)) {
                    _0x4cd783('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x4212a3 = document['getElementById']('mayor-confirm-dialog');
                if (_0x4212a3)
                    _0x4212a3['style']['display'] = 'flex';
                return;
            }
            if (_0x14e422['GAME_STATE'] === 'NIGHT') {
                if (!_0x14e422['NIGHT_ABILITY_OPEN']) {
                    _0x4cd783('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x578235 = document['getElementById']('ability-ui');
                if (_0x578235) {
                    if (_0x578235['style']['display'] === 'block') {
                        _0x578235['style']['display'] = 'none';
                    } else {
                        _0x194dac();
                        _0x578235['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x14e422['GAME_STATE'] === 'DAY_DISCUSS' || _0x14e422['GAME_STATE'] === 'DAY_VOTE') {
                _0x4cd783('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x5ae530 === 'e' && !_0x224a2a['isDead']) {
            const _0x4f3b29 = Date['now']();
            if (!window['_lastDoorSend'] || _0x4f3b29 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x4f3b29;
                _0x10f155['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x1d6131 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x47c6b9 = _0x1d6131['key']['toLowerCase']();
        if (_0x14e422['INPUTS']['keys']['hasOwnProperty'](_0x47c6b9))
            _0x14e422['INPUTS']['keys'][_0x47c6b9] = ![];
    }
});
window['addEventListener']('mousemove', _0x15f4bc => {
    _0x14e422['INPUTS']['mouseX'] = _0x15f4bc['clientX'];
    _0x14e422['INPUTS']['mouseY'] = _0x15f4bc['clientY'];
    if (_0x14e422['INPUTS']['isMouseDown'] && _0x14e422['EDITOR']['enabled']) {
        _0x30f703(_0x15f4bc['clientX'], _0x15f4bc['clientY']);
    }
});
window['addEventListener']('mousedown', _0x5c443d => {
    if (_0x5c443d['target']['closest']('#editor-ui') || _0x5c443d['target']['closest']('#leaderboard-ui') || _0x5c443d['target']['closest']('#chat-log-ui') || _0x5c443d['target']['closest']('#target-chooser-ui') || _0x5c443d['target']['closest']('#guide-ui') || _0x5c443d['target']['closest']('#role-list-ui') || _0x5c443d['target']['closest']('#ability-ui') || _0x5c443d['target']['closest']('#settings-panel') || _0x5c443d['target']['closest']('#mayor-confirm-dialog') || _0x5c443d['target']['closest']('#mobile-action-bar') || _0x5c443d['target']['closest']('#mobile-top-bar') || _0x5c443d['target']['closest']('#mobile-joystick-zone') || _0x5c443d['target']['closest']('#mobile-chat-overlay') || _0x5c443d['target']['closest']('#will-ui') || _0x5c443d['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x5c443d['button'] === 0x0) {
        _0x14e422['INPUTS']['isMouseDown'] = !![];
        if (_0x14e422['EDITOR']['enabled'])
            _0x30f703(_0x5c443d['clientX'], _0x5c443d['clientY']);
    }
});
window['addEventListener']('mouseup', _0x53268b => {
    _0x14e422['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x20ec26 => {
    if (_0x20ec26['target']['closest']('#settings-btn'))
        return;
    const _0x1949e9 = document['getElementById']('leaderboard-list');
    const _0x55866e = document['getElementById']('leaderboard-toggle');
    if (_0x1949e9['style']['display'] === 'none') {
        _0x1949e9['style']['display'] = 'flex';
        _0x55866e['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x1949e9['style']['display'] = 'none';
        _0x55866e['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x441174 = document['getElementById']('close-target-btn');
if (_0x441174) {
    _0x441174['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x20a8f5 = document['getElementById']('close-guide-btn');
if (_0x20a8f5) {
    _0x20a8f5['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x19fa6a = document['getElementById']('role-list-header');
if (_0x19fa6a) {
    _0x19fa6a['addEventListener']('click', () => {
        const _0x25128d = document['getElementById']('role-list-items');
        const _0x15e2c7 = document['getElementById']('role-list-toggle');
        if (_0x25128d['style']['display'] === 'none') {
            _0x25128d['style']['display'] = 'flex';
            _0x15e2c7['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x25128d['style']['display'] = 'none';
            _0x15e2c7['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x9756c5() {
    const _0x47503f = document['getElementById']('mobile-joystick-zone');
    const _0x55015d = document['getElementById']('mobile-joystick-base');
    const _0x4c2d46 = document['getElementById']('mobile-joystick-knob');
    if (_0x47503f && _0x55015d && _0x4c2d46) {
        const _0x210b9c = 0x3e;
        const _0x103229 = (_0x3397b8, _0x5e521d) => {
            const _0x2d4af2 = _0x55015d['getBoundingClientRect']();
            const _0x1c75ca = _0x2d4af2['left'] + _0x2d4af2['width'] / 0x2;
            const _0x4125d8 = _0x2d4af2['top'] + _0x2d4af2['height'] / 0x2;
            const _0x491ddd = _0x3397b8 - _0x1c75ca;
            const _0x58516e = _0x5e521d - _0x4125d8;
            const _0x2c8488 = Math['hypot'](_0x491ddd, _0x58516e);
            if (_0x2c8488 === 0x0) {
                _0x5069b3 = 0x0;
                _0x51f743 = 0x0;
                _0x23c2e0 = ![];
                _0x4c2d46['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x4583ef = Math['min'](_0x2c8488, _0x210b9c);
            const _0x3806aa = _0x491ddd / _0x2c8488 * _0x4583ef;
            const _0x58a967 = _0x58516e / _0x2c8488 * _0x4583ef;
            _0x5069b3 = _0x3806aa / _0x210b9c;
            _0x51f743 = _0x58a967 / _0x210b9c;
            _0x23c2e0 = _0x2c8488 >= _0x210b9c * 0.75;
            _0x4c2d46['style']['transform'] = 'translate(' + _0x3806aa + 'px,\x20' + _0x58a967 + 'px)';
        };
        const _0x274574 = _0x2112ca => {
            for (let _0x100bb8 = 0x0; _0x100bb8 < _0x2112ca['changedTouches']['length']; _0x100bb8++) {
                const _0x3dc00a = _0x2112ca['changedTouches'][_0x100bb8];
                if (_0x189d75 === null) {
                    _0x189d75 = _0x3dc00a['identifier'];
                    _0x3d53ad = !![];
                    _0x103229(_0x3dc00a['clientX'], _0x3dc00a['clientY']);
                    break;
                }
            }
        };
        const _0x37d3ed = _0xcc94 => {
            for (let _0x6b50d = 0x0; _0x6b50d < _0xcc94['changedTouches']['length']; _0x6b50d++) {
                const _0x1271a2 = _0xcc94['changedTouches'][_0x6b50d];
                if (_0x1271a2['identifier'] === _0x189d75) {
                    _0x103229(_0x1271a2['clientX'], _0x1271a2['clientY']);
                    break;
                }
            }
        };
        const _0x591fd7 = _0x55502d => {
            for (let _0x4218b1 = 0x0; _0x4218b1 < _0x55502d['changedTouches']['length']; _0x4218b1++) {
                const _0x335a20 = _0x55502d['changedTouches'][_0x4218b1];
                if (_0x335a20['identifier'] === _0x189d75) {
                    _0x189d75 = null;
                    _0x3d53ad = ![];
                    _0x5069b3 = 0x0;
                    _0x51f743 = 0x0;
                    _0x23c2e0 = ![];
                    _0x4c2d46['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x47503f['addEventListener']('touchstart', _0x56ac3c => {
            _0x56ac3c['preventDefault']();
            _0x274574(_0x56ac3c);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x37d3ed, { 'passive': !![] });
        window['addEventListener']('touchend', _0x591fd7, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x591fd7, { 'passive': !![] });
    }
    const _0x531d22 = (_0x3725c8, _0x7c6329) => {
        const _0x45f625 = _0x3725c8 / _0x14e422['SYSTEM']['viewScale'];
        const _0x4a415f = _0x7c6329 / _0x14e422['SYSTEM']['viewScale'];
        const _0x251e0e = _0x224a2a['x'] - _0x14e422['CAMERA']['x'] + _0x224a2a['width'] / 0x2;
        const _0x56796d = _0x224a2a['y'] - _0x14e422['CAMERA']['y'] + _0x224a2a['height'] / 0x2;
        _0x2b0ed9 = Math['atan2'](_0x4a415f - _0x56796d, _0x45f625 - _0x251e0e);
        _0x21ed5e = !![];
        _0x14e422['INPUTS']['mouseX'] = _0x3725c8;
        _0x14e422['INPUTS']['mouseY'] = _0x7c6329;
    };
    _0x2d457f['addEventListener']('touchstart', _0x4ab0d5 => {
        if (_0x4e2457)
            return;
        for (let _0x2c14f2 = 0x0; _0x2c14f2 < _0x4ab0d5['changedTouches']['length']; _0x2c14f2++) {
            const _0x49b7b4 = _0x4ab0d5['changedTouches'][_0x2c14f2];
            if (_0x49b7b4['identifier'] !== _0x189d75 && _0x2844c5 === null) {
                _0x2844c5 = _0x49b7b4['identifier'];
                _0x531d22(_0x49b7b4['clientX'], _0x49b7b4['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x2d457f['addEventListener']('touchmove', _0xca0dac => {
        if (_0x4e2457)
            return;
        for (let _0x4fc58c = 0x0; _0x4fc58c < _0xca0dac['changedTouches']['length']; _0x4fc58c++) {
            const _0xcec4c8 = _0xca0dac['changedTouches'][_0x4fc58c];
            if (_0xcec4c8['identifier'] === _0x2844c5) {
                _0x531d22(_0xcec4c8['clientX'], _0xcec4c8['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x1b1a3a = _0x51f180 => {
        for (let _0x46c96d = 0x0; _0x46c96d < _0x51f180['changedTouches']['length']; _0x46c96d++) {
            const _0x340b04 = _0x51f180['changedTouches'][_0x46c96d];
            if (_0x340b04['identifier'] === _0x2844c5) {
                _0x2844c5 = null;
                _0x21ed5e = ![];
                break;
            }
        }
    };
    _0x2d457f['addEventListener']('touchend', _0x1b1a3a, { 'passive': !![] });
    _0x2d457f['addEventListener']('touchcancel', _0x1b1a3a, { 'passive': !![] });
    const _0x261b4c = document['getElementById']('mob-sprint-btn');
    if (_0x261b4c) {
        _0x261b4c['addEventListener']('click', _0x5a3912 => {
            _0x5a3912['stopPropagation']();
            _0x48de7b = !_0x48de7b;
            _0x261b4c['classList']['toggle']('active', _0x48de7b);
        });
    }
    const _0x5c8a29 = document['getElementById']('mob-interact-btn');
    if (_0x5c8a29) {
        _0x5c8a29['addEventListener']('click', _0x3d02e7 => {
            _0x3d02e7['stopPropagation']();
            if (!_0x224a2a['isDead']) {
                const _0x93f4c6 = Date['now']();
                if (!window['_lastDoorSend'] || _0x93f4c6 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x93f4c6;
                    if (_0x10f155 && _0x10f155['readyState'] === WebSocket['OPEN'])
                        _0x10f155['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x25a86a = document['getElementById']('mob-ability-btn');
    if (_0x25a86a) {
        _0x25a86a['addEventListener']('click', _0x4b0ef5 => {
            _0x4b0ef5['stopPropagation']();
            if (_0x224a2a['isDead'])
                return;
            if (_0x16f913 === 'Mayor') {
                if (_0x558c67['has'](_0x372643)) {
                    _0x4cd783('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x1859ec = document['getElementById']('mayor-confirm-dialog');
                if (_0x1859ec)
                    _0x1859ec['style']['display'] = 'flex';
                return;
            }
            if (_0x14e422['GAME_STATE'] === 'NIGHT') {
                if (!_0x14e422['NIGHT_ABILITY_OPEN']) {
                    _0x4cd783('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0xf02f1d = document['getElementById']('ability-ui');
                if (_0xf02f1d) {
                    if (_0xf02f1d['style']['display'] === 'block') {
                        _0xf02f1d['style']['display'] = 'none';
                    } else {
                        _0x194dac();
                        _0xf02f1d['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x14e422['GAME_STATE'] === 'DAY_DISCUSS' || _0x14e422['GAME_STATE'] === 'DAY_VOTE') {
                _0x4cd783('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x4572ce = document['getElementById']('mob-will-btn');
    const _0xff52a8 = document['getElementById']('will-ui');
    const _0xa3b9d4 = document['getElementById']('will-input');
    const _0x31a3f5 = document['getElementById']('close-will-btn');
    const _0x5e4c61 = () => {
        if (!_0xff52a8)
            return;
        if (_0xff52a8['style']['display'] === 'flex') {
            _0xff52a8['style']['display'] = 'none';
            if (_0x10f155 && _0x10f155['readyState'] === WebSocket['OPEN'] && _0xa3b9d4) {
                _0x10f155['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0xa3b9d4['value']
                }));
            }
            if (_0xa3b9d4)
                _0xa3b9d4['blur']();
        } else {
            _0xff52a8['style']['display'] = 'flex';
            if (_0xa3b9d4)
                _0xa3b9d4['focus']();
        }
    };
    if (_0x4572ce)
        _0x4572ce['addEventListener']('click', _0x3b7cd9 => {
            _0x3b7cd9['stopPropagation']();
            _0x5e4c61();
        });
    if (_0x31a3f5)
        _0x31a3f5['addEventListener']('click', _0x1630fd => {
            _0x1630fd['stopPropagation']();
            _0x5e4c61();
        });
    const _0x55f580 = document['getElementById']('mob-chat-btn');
    const _0x58c143 = document['getElementById']('mobile-chat-overlay');
    const _0x4c7547 = document['getElementById']('mobile-chat-input');
    const _0x2e9ecd = document['getElementById']('mobile-chat-send');
    const _0x53aa31 = document['getElementById']('mobile-chat-cancel');
    const _0x4cfa07 = () => {
        if (!_0x58c143 || !_0x4c7547)
            return;
        _0x58c143['style']['display'] = 'flex';
        _0x4c7547['value'] = '';
        _0x4c7547['focus']();
    };
    const _0x170555 = () => {
        if (!_0x58c143 || !_0x4c7547)
            return;
        _0x58c143['style']['display'] = 'none';
        _0x4c7547['blur']();
    };
    const _0x4220fb = () => {
        if (!_0x4c7547)
            return;
        const _0x4a0d2f = _0x4c7547['value']['trim']();
        if (_0x4a0d2f['length'] > 0x0 && _0x10f155 && _0x10f155['readyState'] === WebSocket['OPEN']) {
            _0x10f155['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x4a0d2f
            }));
        }
        _0x4c7547['value'] = '';
        _0x170555();
    };
    if (_0x55f580)
        _0x55f580['addEventListener']('click', _0x1751de => {
            _0x1751de['stopPropagation']();
            _0x4cfa07();
        });
    if (_0x2e9ecd)
        _0x2e9ecd['addEventListener']('click', _0x11a38d => {
            _0x11a38d['stopPropagation']();
            _0x4220fb();
        });
    if (_0x53aa31)
        _0x53aa31['addEventListener']('click', _0x2ca3c7 => {
            _0x2ca3c7['stopPropagation']();
            _0x170555();
        });
    if (_0x4c7547) {
        _0x4c7547['addEventListener']('keydown', _0x15bd17 => {
            if (_0x15bd17['key'] === 'Enter') {
                _0x15bd17['preventDefault']();
                _0x4220fb();
            } else if (_0x15bd17['key'] === 'Escape') {
                _0x170555();
            }
        });
    }
    const _0x272223 = document['getElementById']('mob-top-chat');
    if (_0x272223)
        _0x272223['addEventListener']('click', _0x121469 => {
            _0x121469['stopPropagation']();
            _0x4cfa07();
        });
    const _0x40024f = document['getElementById']('mob-top-will');
    if (_0x40024f)
        _0x40024f['addEventListener']('click', _0x246b78 => {
            _0x246b78['stopPropagation']();
            _0x5e4c61();
        });
    const _0x1571b6 = document['getElementById']('mob-top-roles');
    if (_0x1571b6) {
        _0x1571b6['addEventListener']('click', _0x1782d2 => {
            _0x1782d2['stopPropagation']();
            const _0x1addd1 = document['getElementById']('role-list-ui');
            const _0x100a56 = document['getElementById']('leaderboard-ui');
            if (_0x100a56)
                _0x100a56['style']['display'] = 'none';
            if (_0x1addd1)
                _0x1addd1['style']['display'] = _0x1addd1['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x6e82a0 = document['getElementById']('mob-top-players');
    if (_0x6e82a0) {
        _0x6e82a0['addEventListener']('click', _0x151d25 => {
            _0x151d25['stopPropagation']();
            const _0x157936 = document['getElementById']('leaderboard-ui');
            const _0x27123a = document['getElementById']('role-list-ui');
            if (_0x27123a)
                _0x27123a['style']['display'] = 'none';
            if (_0x157936)
                _0x157936['style']['display'] = _0x157936['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x5cc7ea = document['getElementById']('mob-top-help');
    if (_0x5cc7ea) {
        _0x5cc7ea['addEventListener']('click', _0x1c1e47 => {
            _0x1c1e47['stopPropagation']();
            const _0x2abad9 = document['getElementById']('guide-ui');
            if (_0x2abad9)
                _0x2abad9['style']['display'] = _0x2abad9['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x2e2f29) {
            _0x2e2f29 = !![];
            _0x500e5f();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
