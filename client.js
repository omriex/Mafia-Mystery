document['addEventListener']('contextmenu', _0x44489d => _0x44489d['preventDefault']());
const _0x1b3571 = {
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
    'Mafia\x20Deception': ['Skinwalker'],
    'Mafia\x20Support': ['Blackmailer']
};
let _0x57ccd7 = '';
function _0x30e100(_0x1c56e8, _0x2d5deb) {
    const _0x5ecb9b = document['getElementById']('role-list-ui');
    const _0x15a61d = document['getElementById']('role-list-items');
    if (!_0x5ecb9b || !_0x15a61d)
        return;
    if (!_0x2d5deb || _0x2d5deb === 'off' || !_0x1c56e8 || _0x1c56e8['length'] === 0x0) {
        _0x5ecb9b['style']['display'] = 'none';
        return;
    }
    const _0x15ca85 = _0x2d5deb + '|' + JSON['stringify'](_0x1c56e8);
    if (_0x15ca85 === _0x57ccd7)
        return;
    _0x57ccd7 = _0x15ca85;
    const _0x5ead56 = document['getElementById']('role-tooltip');
    if (_0x5ead56) {
        _0x5ead56['style']['visibility'] = 'hidden';
        _0x5ead56['style']['opacity'] = '0';
    }
    _0x5ecb9b['style']['display'] = 'flex';
    _0x15a61d['innerHTML'] = '';
    _0x1c56e8['forEach'](_0x3fedb8 => {
        const _0x2e165b = document['createElement']('div');
        _0x2e165b['className'] = 'role-list-entry';
        const _0x394614 = _0x3fedb8['name']['includes']('Mafia') || _0x3fedb8['name'] === 'Skinwalker' || _0x3fedb8['name'] === 'Blackmailer';
        _0x2e165b['classList']['add'](_0x394614 ? 'mafia' : 'town');
        if (_0x2d5deb === 'precise' && _0x3fedb8['isDead']) {
            _0x2e165b['classList']['remove']('town', 'mafia');
            _0x2e165b['classList']['add']('dead');
            _0x2e165b['innerHTML'] = '<span>' + _0x3fedb8['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x54bfc4 = _0x3fedb8['count'] !== undefined && _0x3fedb8['count'] !== null ? _0x3fedb8['count'] + 'x\x20' : '';
            _0x2e165b['innerHTML'] = '<span>' + _0x54bfc4 + _0x3fedb8['name'] + '</span>';
        }
        if (_0x2d5deb === 'subalignments' && _0x1b3571[_0x3fedb8['name']]) {
            _0x2e165b['style']['cursor'] = 'pointer';
            _0x2e165b['addEventListener']('mouseenter', () => {
                const _0x3729ea = document['getElementById']('role-tooltip');
                if (!_0x3729ea)
                    return;
                const _0x145ff4 = _0x1b3571[_0x3fedb8['name']]['join'](',\x20');
                _0x3729ea['innerHTML'] = '';
                const _0x5e33c1 = document['createElement']('span');
                _0x5e33c1['style']['color'] = '#ffcc00';
                _0x5e33c1['textContent'] = _0x3fedb8['name'];
                _0x3729ea['appendChild'](_0x5e33c1);
                _0x3729ea['appendChild'](document['createElement']('br'));
                _0x3729ea['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x145ff4));
                const _0x28d9bb = _0x2e165b['getBoundingClientRect']();
                _0x3729ea['style']['left'] = _0x28d9bb['left'] - 0xeb + 'px';
                _0x3729ea['style']['top'] = _0x28d9bb['top'] + 'px';
                _0x3729ea['style']['display'] = 'block';
                _0x3729ea['style']['visibility'] = 'visible';
                _0x3729ea['style']['opacity'] = '1';
            });
            _0x2e165b['addEventListener']('mouseleave', () => {
                const _0x472d6f = document['getElementById']('role-tooltip');
                if (_0x472d6f) {
                    _0x472d6f['style']['display'] = 'none';
                    _0x472d6f['style']['visibility'] = 'hidden';
                    _0x472d6f['style']['opacity'] = '0';
                }
            });
        }
        _0x15a61d['appendChild'](_0x2e165b);
    });
}
let _0x50141f = null;
let _0x4d9678 = null;
const _0x1546ac = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x125330 = 'Player???';
let _0x48b20b = ![];
let _0x58f0ec = {};
let _0x1ece76 = null;
let _0x38e331 = 0x0;
let _0x2f207a = 0x0;
let _0x35d57b = new Set();
let _0x16ae6a = ![];
let _0x2f17a2 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x495a41 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x231c32 = ![];
let _0x29fdf8 = null;
let _0x5cd9d3 = 0x0;
let _0x2bc798 = 0x0;
let _0x305036 = ![];
let _0x5bc893 = ![];
let _0x2f32ce = 0x0;
let _0x4a09f2 = null;
let _0xe7298b = ![];
let _0x1615f6 = 0x0;
let _0x2df96a = 0x0;
let _0x31a16e = [];
let _0x475fc2 = [];
let _0x50ee5a = new Set();
const _0x3f163b = ((() => {
    const _0x5af300 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x5b76d2 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x3d54bf = 0x320;
    const _0x203362 = {};
    const _0x4442e8 = {};
    let _0x1c3bc5 = null;
    let _0x48e288 = _0x5b76d2 === 0x0;
    let _0x43a042 = ![];
    for (const [_0x1fe48c, _0x1cf6ac] of Object['entries'](_0x5af300)) {
        const _0x892e2f = new Audio(_0x1cf6ac);
        _0x892e2f['loop'] = !![];
        _0x892e2f['volume'] = 0x0;
        _0x892e2f['preload'] = 'auto';
        _0x203362[_0x1fe48c] = _0x892e2f;
        _0x4442e8[_0x1fe48c] = null;
    }
    const _0x14b12e = _0x4449c9 => Math['min'](0x1, Math['max'](0x0, _0x4449c9));
    function _0x2d803e(_0x26a4db) {
        if (_0x4442e8[_0x26a4db] !== null) {
            cancelAnimationFrame(_0x4442e8[_0x26a4db]);
            _0x4442e8[_0x26a4db] = null;
        }
    }
    function _0x71dbf7(_0x419da4, _0x2e87d0, _0x34a70f, _0x922fdd, _0x5d8aff) {
        _0x2d803e(_0x419da4);
        const _0x34658d = _0x203362[_0x419da4];
        const _0x1cc861 = performance['now']();
        const _0x4722f0 = _0x3e298d => {
            const _0x16b81c = _0x14b12e((_0x3e298d - _0x1cc861) / _0x922fdd);
            const _0x49249d = _0x14b12e(_0x2e87d0 + (_0x34a70f - _0x2e87d0) * _0x16b81c);
            _0x34658d['volume'] = _0x48e288 ? 0x0 : _0x49249d;
            if (_0x16b81c < 0x1) {
                _0x4442e8[_0x419da4] = requestAnimationFrame(_0x4722f0);
            } else {
                _0x4442e8[_0x419da4] = null;
                _0x34658d['volume'] = _0x48e288 ? 0x0 : _0x14b12e(_0x34a70f);
                if (_0x5d8aff)
                    _0x5d8aff();
            }
        };
        _0x4442e8[_0x419da4] = requestAnimationFrame(_0x4722f0);
    }
    function _0x25e935(_0xc78551) {
        const _0x5cf9e1 = _0xc78551['play']();
        if (_0x5cf9e1 && _0x5cf9e1['catch']) {
            _0x5cf9e1['catch'](() => {
                if (!_0x43a042) {
                    const _0x345425 = () => {
                        _0x43a042 = !![];
                        _0xc78551['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x345425);
                        document['removeEventListener']('keydown', _0x345425);
                        document['removeEventListener']('touchstart', _0x345425);
                    };
                    document['addEventListener']('click', _0x345425, { 'once': !![] });
                    document['addEventListener']('keydown', _0x345425, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x345425, { 'once': !![] });
                }
            });
        }
    }
    function _0x1c9030(_0x5e92f8) {
        if (!_0x5af300[_0x5e92f8])
            return;
        if (_0x1c3bc5 === _0x5e92f8)
            return;
        const _0x2a6bef = _0x1c3bc5;
        _0x1c3bc5 = _0x5e92f8;
        const _0x50e838 = _0x203362[_0x5e92f8];
        _0x2d803e(_0x5e92f8);
        _0x50e838['currentTime'] = 0x0;
        _0x50e838['volume'] = 0x0;
        _0x25e935(_0x50e838);
        _0x71dbf7(_0x5e92f8, 0x0, _0x5b76d2, _0x3d54bf);
        if (_0x2a6bef && _0x203362[_0x2a6bef]) {
            const _0xe22937 = _0x2a6bef;
            const _0x451599 = _0x203362[_0xe22937];
            const _0x1ec295 = _0x14b12e(_0x451599['volume']);
            _0x71dbf7(_0xe22937, _0x1ec295, 0x0, _0x3d54bf, () => {
                _0x451599['pause']();
                _0x451599['currentTime'] = 0x0;
            });
        }
    }
    function _0x4ac66a(_0x3f54ef) {
        _0x5b76d2 = _0x14b12e(_0x3f54ef);
        localStorage['setItem']('musicVolume', String(_0x5b76d2));
        if (!_0x48e288 && _0x1c3bc5 && _0x4442e8[_0x1c3bc5] === null) {
            _0x203362[_0x1c3bc5]['volume'] = _0x5b76d2;
        }
    }
    function _0xcd016f() {
        return _0x5b76d2;
    }
    function _0x5e7882(_0x2d7318) {
        _0x48e288 = _0x2d7318;
        for (const _0x3f00b4 of Object['keys'](_0x203362)) {
            if (_0x4442e8[_0x3f00b4] === null) {
                _0x203362[_0x3f00b4]['volume'] = _0x2d7318 || _0x3f00b4 !== _0x1c3bc5 ? 0x0 : _0x5b76d2;
            }
        }
    }
    function _0x54a895() {
        return _0x48e288;
    }
    function _0x578ffa(_0x3367ea) {
        if (_0x3367ea === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x3367ea === 'DAY_VOTE')
            return 'voting';
        if (_0x3367ea === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x520550(_0x3f4bda) {
        _0x1c9030(_0x578ffa(_0x3f4bda));
    }
    function _0x2bff9d(_0x4640a3) {
        _0x1c9030(_0x4640a3);
    }
    return {
        'play': _0x1c9030,
        'onStateChange': _0x520550,
        'onSoundEvent': _0x2bff9d,
        'setVolume': _0x4ac66a,
        'getVolume': _0xcd016f,
        'setMuted': _0x5e7882,
        'isMuted': _0x54a895
    };
})());
const _0x321a79 = ((() => {
    const _0xd5bf44 = 0x258;
    const _0x22d9ff = 0xb4;
    const _0xb1adf8 = 0x708;
    const _0x3968ca = 0x140;
    const _0x59a664 = 0.18;
    const _0x5c3311 = 0.95;
    const _0x364cbf = new Audio('audio/heartbeat.mp3');
    _0x364cbf['loop'] = ![];
    _0x364cbf['preload'] = 'auto';
    _0x364cbf['volume'] = 0x0;
    let _0x218427 = 0x0;
    let _0x488c16 = Infinity;
    function _0xa738cd(_0x323b70, _0x178b10, _0x20c602) {
        return Math['min'](_0x20c602, Math['max'](_0x178b10, _0x323b70));
    }
    function _0xd13b56(_0x4021f9, _0x588038, _0x2cd651) {
        return _0x4021f9 + (_0x588038 - _0x4021f9) * _0x2cd651;
    }
    function _0x170203(_0x3fcb59) {
        if (_0x42f0ec['GAME_STATE'] !== 'NIGHT' || _0x5e7278['isDead'] || _0x1ece76 === 'Skinwalker' || _0x1ece76 === 'Blackmailer') {
            _0x488c16 = Infinity;
            return;
        }
        const _0x4c178d = _0x5e7278['x'] + 22.5;
        const _0x23d411 = _0x5e7278['y'] + 22.5;
        let _0x53a697 = Infinity;
        for (const _0x201c5e in _0x58f0ec) {
            const _0x3ea7d0 = _0x58f0ec[_0x201c5e];
            if (!_0x3ea7d0['isDark'] || _0x3ea7d0['isDead'])
                continue;
            const _0x1f29a0 = _0x3ea7d0['renderX'] + 22.5 - _0x4c178d;
            const _0x3a617b = _0x3ea7d0['renderY'] + 22.5 - _0x23d411;
            const _0x4a945b = Math['sqrt'](_0x1f29a0 * _0x1f29a0 + _0x3a617b * _0x3a617b);
            if (_0x4a945b < _0x53a697)
                _0x53a697 = _0x4a945b;
        }
        _0x488c16 = _0x53a697;
        if (_0x53a697 > _0xd5bf44)
            return;
        const _0x4c8b25 = 0x1 - _0xa738cd((_0x53a697 - _0x22d9ff) / (_0xd5bf44 - _0x22d9ff), 0x0, 0x1);
        const _0x54c6c7 = _0xd13b56(_0xb1adf8, _0x3968ca, _0x4c8b25);
        const _0x48e604 = _0xd13b56(_0x59a664, _0x5c3311, _0x4c8b25);
        if (_0x3fcb59 >= _0x218427) {
            _0x364cbf['currentTime'] = 0x0;
            _0x364cbf['volume'] = _0x3f163b['isMuted']() ? 0x0 : _0xa738cd(_0x48e604 * _0x3f163b['getVolume']() / 0.7, 0x0, 0x1);
            _0x364cbf['play']()['catch'](() => {
            });
            _0x218427 = _0x3fcb59 + _0x54c6c7;
        }
    }
    return { 'tick': _0x170203 };
})());
function _0x31349e() {
    const _0x4f3bc0 = document['getElementById']('mob-ability-btn');
    if (!_0x4f3bc0)
        return;
    const _0xed1461 = _0x42f0ec['GAME_STATE'] === 'NIGHT' && !_0x5e7278['isDead'];
    const _0x507456 = _0x1ece76 === 'Mayor' && !_0x35d57b['has'](_0x4d9678) && !_0x5e7278['isDead'];
    if (_0xed1461 || _0x507456) {
        _0x4f3bc0['style']['display'] = 'flex';
    } else {
        _0x4f3bc0['style']['display'] = 'none';
    }
}
function _0x4a4ba5() {
    const _0x48de38 = document['getElementById']('mobile-joystick-zone');
    const _0x5358ea = document['getElementById']('mobile-top-bar');
    const _0xcc0a80 = document['getElementById']('mobile-action-bar');
    if (!_0x48de38 || !_0x5358ea || !_0xcc0a80)
        return;
    if (!_0x40f576 && _0x495a41) {
        _0x48de38['style']['display'] = 'flex';
        _0x5358ea['style']['display'] = 'flex';
        _0xcc0a80['style']['display'] = 'flex';
        _0x31349e();
    } else {
        _0x48de38['style']['display'] = 'none';
        _0x5358ea['style']['display'] = 'none';
        _0xcc0a80['style']['display'] = 'none';
    }
}
const _0xe7b332 = document['getElementById']('gameCanvas');
const _0x35e20d = _0xe7b332['getContext']('2d', { 'alpha': ![] });
const _0x2d1cac = 0x500;
const _0x312153 = 0x2d0;
const _0x42f0ec = {
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
        'width': _0x2d1cac,
        'height': _0x312153
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
const _0x5e7278 = {
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
    'isDead': ![],
    'hasArrow': ![]
};
const _0x314f9a = new Image();
const _0x1ce3c3 = new Image();
const _0x19680f = new Image();
const _0x3a2a55 = new Image();
_0x3a2a55['src'] = 'assets/mayor\x20cosmetic.png';
const _0x53a120 = [
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
const _0x1fb9cd = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x2bfb82 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x2bfb82 === 'body1.png' || _0x2bfb82 === 'body1')
    _0x2bfb82 = 'body01.png';
if (!_0x2bfb82['endsWith']('.png'))
    _0x2bfb82 += '.png';
let _0x5b2dba = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x5b2dba['endsWith']('.png'))
    _0x5b2dba += '.png';
let _0x40f576 = !![];
let _0x564498 = null;
let _0x5a99ca = null;
let _0x504c29 = 0x3c;
let _0x1ced14 = 0x2d;
const _0x311460 = {};
const _0x3a9217 = new Image();
_0x3a9217['src'] = 'assets/yanito932.png';
_0x311460['assets/yanito932.png'] = _0x3a9217;
function _0x685ff7(_0x1f5520) {
    if (!_0x311460[_0x1f5520] || !_0x311460[_0x1f5520]['complete'] && _0x311460[_0x1f5520]['naturalWidth'] === 0x0 && _0x311460[_0x1f5520]['naturalHeight'] === 0x0) {
        const _0x3dcbc6 = new Image();
        _0x3dcbc6['src'] = _0x1f5520;
        _0x311460[_0x1f5520] = _0x3dcbc6;
    }
    return _0x311460[_0x1f5520];
}
function _0x4b3abc(_0x2f15fb, _0x545566, _0x702b23, _0xc8b754, _0x30be73) {
    try {
        const _0x4f5147 = 'assets/' + (_0x545566 || 'body01.png');
        const _0x246f4c = _0x685ff7(_0x4f5147);
        if (_0x246f4c['complete'] && _0x246f4c['naturalWidth'] > 0x0) {
            _0x2f15fb['drawImage'](_0x246f4c, -_0xc8b754 / 0x2, -_0x30be73 / 0x2, _0xc8b754, _0x30be73);
        }
        if (_0x702b23 === null || _0x702b23 === undefined)
            return;
        const _0x2229d9 = 'assets/' + _0x702b23;
        const _0x49873d = _0x685ff7(_0x2229d9);
        if (_0x49873d['complete'] && _0x49873d['naturalWidth'] > 0x0) {
            _0x2f15fb['drawImage'](_0x49873d, -_0xc8b754 / 0x2, -_0x30be73 / 0x2, _0xc8b754, _0x30be73);
        }
    } catch (_0x200afc) {
    }
}
function _0x4aceaa() {
    const _0x714dc2 = document['getElementById']('body-skin-grid');
    const _0x1d4145 = document['getElementById']('eyes-skin-grid');
    if (!_0x714dc2 || !_0x1d4145)
        return;
    _0x714dc2['innerHTML'] = '';
    _0x53a120['forEach'](_0xce7f88 => {
        const _0x57a74c = document['createElement']('button');
        _0x57a74c['className'] = 'skin-btn' + (_0xce7f88 === _0x2bfb82 ? '\x20selected' : '');
        const _0x2e2602 = document['createElement']('img');
        _0x2e2602['src'] = 'assets/' + _0xce7f88;
        _0x57a74c['appendChild'](_0x2e2602);
        _0x57a74c['onclick'] = () => {
            _0x2bfb82 = _0xce7f88;
            localStorage['setItem']('selectedBody', _0xce7f88);
            _0x714dc2['querySelectorAll']('.skin-btn')['forEach'](_0x24e6c2 => _0x24e6c2['classList']['remove']('selected'));
            _0x57a74c['classList']['add']('selected');
        };
        _0x714dc2['appendChild'](_0x57a74c);
    });
    _0x1d4145['innerHTML'] = '';
    _0x1fb9cd['forEach'](_0x5e1980 => {
        const _0x112f54 = document['createElement']('button');
        _0x112f54['className'] = 'skin-btn' + (_0x5e1980 === _0x5b2dba ? '\x20selected' : '');
        const _0x27e61d = document['createElement']('img');
        _0x27e61d['src'] = 'assets/' + _0x5e1980;
        _0x112f54['appendChild'](_0x27e61d);
        _0x112f54['onclick'] = () => {
            _0x5b2dba = _0x5e1980;
            localStorage['setItem']('selectedEyes', _0x5e1980);
            _0x1d4145['querySelectorAll']('.skin-btn')['forEach'](_0xf80e45 => _0xf80e45['classList']['remove']('selected'));
            _0x112f54['classList']['add']('selected');
        };
        _0x1d4145['appendChild'](_0x112f54);
    });
}
function _0x5adddf(_0x330a48) {
    if (!_0x42f0ec['MAP']['columns'] || !_0x42f0ec['CAMERA']['width'])
        return;
    const _0x3b5e11 = Math['max'](0x0, _0x42f0ec['MAP']['columns'] * _0x42f0ec['MAP']['tileSize'] - _0x42f0ec['CAMERA']['width']);
    const _0x31afcd = Math['max'](0x0, _0x42f0ec['MAP']['rows'] * _0x42f0ec['MAP']['tileSize'] - _0x42f0ec['CAMERA']['height']);
    if (_0x564498 === null) {
        _0x564498 = _0x3b5e11 / 0x2;
        _0x5a99ca = _0x31afcd / 0x2;
    }
    _0x564498 += _0x504c29 * _0x330a48;
    _0x5a99ca += _0x1ced14 * _0x330a48;
    if (_0x564498 <= 0x0) {
        _0x564498 = 0x0;
        _0x504c29 = Math['abs'](_0x504c29);
    } else if (_0x564498 >= _0x3b5e11) {
        _0x564498 = _0x3b5e11;
        _0x504c29 = -Math['abs'](_0x504c29);
    }
    if (_0x5a99ca <= 0x0) {
        _0x5a99ca = 0x0;
        _0x1ced14 = Math['abs'](_0x1ced14);
    } else if (_0x5a99ca >= _0x31afcd) {
        _0x5a99ca = _0x31afcd;
        _0x1ced14 = -Math['abs'](_0x1ced14);
    }
    _0x42f0ec['CAMERA']['x'] = _0x564498;
    _0x42f0ec['CAMERA']['y'] = _0x5a99ca;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x2f1e99 = document['getElementById']('play-btn');
    const _0x339d47 = document['getElementById']('username-input');
    const _0x130727 = localStorage['getItem']('playerName');
    if (_0x130727 && _0x339d47) {
        _0x339d47['value'] = _0x130727;
    }
    const _0x335451 = () => {
        _0x3f163b['play']('wait');
        document['removeEventListener']('click', _0x335451);
        document['removeEventListener']('keydown', _0x335451);
        document['removeEventListener']('touchstart', _0x335451);
    };
    document['addEventListener']('click', _0x335451, { 'once': !![] });
    document['addEventListener']('keydown', _0x335451, { 'once': !![] });
    document['addEventListener']('touchstart', _0x335451, { 'once': !![] });
    if (_0x2f1e99) {
        _0x2f1e99['addEventListener']('click', () => {
            const _0x2a9685 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x25815d = window['_FB'] && window['_FB']['_userData'];
            let _0x36ac64 = !![];
            if (_0x2a9685 && _0x25815d && _0x25815d['username']) {
                _0x125330 = _0x25815d['username'];
                _0x36ac64 = ![];
            } else {
                const _0x2a738d = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x125330 = 'user' + _0x2a738d;
                _0x36ac64 = !![];
            }
            const _0x4120b2 = _0x36ac64 ? 'body01.png' : _0x2bfb82;
            const _0x5c1a80 = _0x36ac64 ? 'eyes4.png' : _0x5b2dba;
            const _0x2795f9 = !_0x36ac64 && _0x25815d && _0x25815d['photoURL'] ? _0x25815d['photoURL'] : '';
            const _0x5ece7e = !_0x36ac64 && _0x2a9685 ? _0x2a9685['uid'] : '';
            localStorage['setItem']('playerName', _0x125330);
            _0x40f576 = ![];
            _0x42f0ec['CAMERA']['x'] = null;
            _0x42f0ec['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x3e5fb4 = document['getElementById']('chat-log-wrap');
            if (_0x3e5fb4)
                _0x3e5fb4['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0xb984f7 = document['getElementById']('controls-hint');
            if (_0xb984f7 && !_0x495a41)
                _0xb984f7['style']['display'] = 'block';
            _0x4a4ba5();
            if (_0x495a41) {
                const _0x3b4abf = document['getElementById']('leaderboard-list');
                const _0x51d6f9 = document['getElementById']('leaderboard-toggle');
                if (_0x3b4abf) {
                    _0x3b4abf['style']['display'] = 'none';
                    if (_0x51d6f9)
                        _0x51d6f9['style']['transform'] = 'rotate(180deg)';
                }
                const _0x605428 = document['getElementById']('role-list-items');
                const _0x5ec351 = document['getElementById']('role-list-toggle');
                if (_0x605428) {
                    _0x605428['style']['display'] = 'none';
                    if (_0x5ec351)
                        _0x5ec351['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x3bbbd6 = !_0x36ac64 && _0x25815d ? {
                'townWins': _0x25815d['townWins'] || 0x0,
                'mafiaWins': _0x25815d['mafiaWins'] || 0x0,
                'deaths': _0x25815d['deaths'] || 0x0,
                'townLosses': _0x25815d['townLosses'] || 0x0,
                'mafiaLosses': _0x25815d['mafiaLosses'] || 0x0
            } : null;
            const _0x1caaed = JSON['stringify']({
                'type': 'join',
                'name': _0x125330,
                'token': _0x1546ac,
                'body': _0x4120b2,
                'eyes': _0x5c1a80,
                'isGuest': _0x36ac64,
                'uid': _0x5ece7e,
                'photoURL': _0x2795f9,
                'accountStats': _0x3bbbd6
            });
            if (_0x50141f && _0x50141f['readyState'] === WebSocket['OPEN']) {
                _0x50141f['send'](_0x1caaed);
            } else if (!_0x50141f || _0x50141f['readyState'] === WebSocket['CLOSED'] || _0x50141f['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x1caaed;
                _0x6e531f();
            }
        });
    }
    _0x4aceaa();
    _0x6e531f();
    _0x416aa2();
    _0xd4b498();
    _0x25820c();
    _0x2e1938();
});
const _0x5d37f3 = [
    {
        'name': 'Mayor',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Mayor</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Support</span>\x20role\x20whose\x20purpose\x20is\x20to\x20control\x20discussions\x20and\x20voting\x20while\x20also\x20letting\x20you\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>hard\x20clear</span>\x20yourself.',
            'At\x20any\x20point\x20during\x20the\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>day</span>,\x20you\x20are\x20able\x20to\x20publicly\x20<span\x20style=\x22color:#cc88ff;font-weight:bold;\x22>reveal</span>\x20yourself\x20as\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Mayor</span>.\x20Upon\x20revealing,\x20your\x20vote\x20will\x20count\x20as\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>two\x20votes</span>\x20for\x20the\x20rest\x20of\x20the\x20game,\x20and\x20you\x20will\x20also\x20get\x20a\x20unique\x20<span\x20style=\x22color:#cc88ff;font-weight:bold;\x22>top\x20hat\x20and\x20monocle</span>.'
        ]
    },
    {
        'name': 'Escort',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Escort</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Support</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblock</span>\x20suspicious\x20individuals,\x20giving\x20players\x20the\x20ability\x20to\x20restrict\x20strong\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20roles\x20and\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20trolls.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>\x20you\x20may\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblock</span>\x20one\x20player.\x20Roleblocked\x20players\x20will\x20still\x20be\x20able\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>visit\x20and\x20kill</span>\x20if\x20they\x27re\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>,\x20as\x20roleblocking\x20specifically\x20prevents\x20their\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>role\x20ability</span>,\x20like\x20transforming\x20as\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>,\x20investigating\x20as\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Investigator</span>,\x20shooting\x20as\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20etc.'
        ]
    },
    {
        'name': 'Tracker',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Tracker</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Investigative</span>\x20role\x20who\x20is\x20able\x20to\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>track</span>\x20players\x20during\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>.',
            'You\x20get\x20to\x20pick\x20one\x20player\x20per\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>.\x20You\x20will\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>track</span>\x20them\x20and\x20find\x20out\x20who\x20they\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>visit</span>\x20(aka\x20who\x20they\x20go\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>kill</span>\x20if\x20they\x27re\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>)\x20OR\x20who\x20they\x20use\x20their\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>ability</span>\x20on.'
        ]
    },
    {
        'name': 'Celebrity',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Celebrity</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Support</span>\x20role\x20whose\x20purpose\x20is\x20to\x20give\x20the\x20rest\x20of\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20a\x20hint\x20upon\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>death</span>.',
            'When\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Celebrity</span>\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>dies</span>,\x20a\x20random\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>letter</span>\x20of\x20their\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>killer</span>\x20will\x20be\x20revealed.\x20Note\x20that\x20the\x20killer\x20doesn\x27t\x20have\x20to\x20be\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>!',
            'This\x20will\x20fail\x20if\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Celebrity</span>\x20is\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblocked</span>.'
        ]
    },
    {
        'name': 'Archer',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Archer</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Protective</span>\x20member\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>protect</span>\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20and\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>injure</span>\x20any\x20evil\x20visitors.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20choose\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>watch\x20over</span>\x20a\x20player.\x20If\x20the\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20visits\x20them,\x20they\x20will\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>fail\x20to\x20visit</span>\x20and\x20be\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>injured</span>.\x20If\x20an\x20already\x20injured\x20player\x20is\x20injured\x20again,\x20they\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>die</span>.'
        ]
    },
    {
        'name': 'Vigilante',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Killing</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>shoot</span>\x20highly\x20suspicious\x20players.',
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
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Doctor</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Protective</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>protect</span>\x20important\x20town\x20members\x20from\x20being\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>attacked</span>.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>protect</span>\x20a\x20player.\x20This\x20will\x20prevent\x20them\x20from\x20being\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>visited\x20by\x20the\x20Mafia</span>.',
            'They\x20can\x20also\x20protect\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20who\x20is\x20currently\x20feeling\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>guilt</span>\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>get\x20rid\x20of\x20their\x20guilt</span>\x20and\x20prevent\x20them\x20from\x20dying\x20from\x20it.'
        ]
    },
    {
        'name': 'Investigator',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Investigator</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town\x20Investigative</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>gather\x20information</span>\x20about\x20players\x27\x20possible\x20roles.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>investigate</span>\x20a\x20player.\x20You\x20will\x20get\x20a\x20list\x20of\x20half\x20of\x20the\x20roles\x20in\x20the\x20game\x20at\x20the\x20end\x20of\x20the\x20night,\x20one\x20of\x20which\x20being\x20their\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>real\x20role</span>.',
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Investigator</span>\x20is\x20the\x20only\x20role\x20that\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>can\x27t\x20be\x20fooled</span>\x20by\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>,\x20as\x20any\x20other\x20future\x20roles\x20with\x20role\x20learning\x20capabilities\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>WILL\x20be\x20fooled</span>\x20by\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>.'
        ]
    },
    {
        'name': 'Skinwalker',
        'faction': 'Mafia',
        'color': '#ff5555',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>\x20is\x20a\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia\x20Deception</span>\x20role\x20whose\x20purpose\x20is\x20to\x20offer\x20high\x20versatility\x20to\x20the\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20while\x20also\x20suppressing\x20strong\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20members.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20pick\x20an\x20alive\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20to\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>transform</span>\x20into,\x20and\x20a\x20person\x20to\x20use\x20it\x27s\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>ability</span>\x20on.\x20You\x20are\x20unable\x20to\x20use\x20a\x20role\x27s\x20ability\x20on\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>yourself</span>,\x20and\x20also\x20unable\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>shoot</span>\x20players\x20as\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>.',
            'Additionally,\x20when\x20you\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>transform</span>\x20into\x20a\x20role,\x20any\x20player\x20with\x20that\x20role\x20will\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>fail</span>\x20to\x20use\x20their\x20ability,\x20letting\x20you\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>prevent</span>\x20strong\x20roles\x20from\x20working\x20but\x20also\x20letting\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20figure\x20out\x20what\x20role\x20you\x20transformed\x20into.'
        ]
    },
    {
        'name': 'Blackmailer',
        'faction': 'Mafia',
        'color': '#ff5555',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Blackmailer</span>\x20is\x20a\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia\x20Support</span>\x20role\x20whose\x20purpose\x20is\x20to\x20silence\x20the\x20smartest\x20players\x20of\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>\x20ability\x20phase,\x20alongside\x20killing\x20you\x20will\x20be\x20able\x20to\x20pick\x20a\x20target\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Blackmail</span>.\x20This\x20ability\x20will\x20succeed\x20as\x20long\x20as\x20you\x20aren\x27t\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblocked</span>,\x20and\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>CANNOT\x20be\x20protected\x20by\x20Doctor</span>.',
            '<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Blackmailed</span>\x20players\x20will\x20be\x20unable\x20to\x20talk\x20for\x20a\x20whole\x20day.\x20They\x20will\x20receive\x20graphical\x20red\x20tape\x20over\x20their\x20mouth\x20and\x20their\x20name\x20will\x20turn\x20red\x20in\x20chat.\x20The\x20Blackmailer\x20is\x20allowed\x20to\x20blackmail\x20themselves\x20to\x20avoid\x20Town\x20clearing\x20players\x20due\x20to\x20being\x20blackmailed.',
            'You\x20will\x20fail\x20to\x20blackmail\x20a\x20player\x20if\x20they\x20are\x20guarded\x20by\x20an\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Archer</span>,\x20and\x20you\x20will\x20be\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>injured</span>.\x20If\x20you\x20blackmail\x20and\x20kill\x20a\x20person\x20guarded\x20by\x20the\x20same\x20Archer,\x20you\x20will\x20only\x20be\x20injured\x20once!'
        ]
    }
];
let _0xd5267a = 'Town';
let _0xd511fd = 0x0;
function _0x3a14fe() {
    const _0x14ac54 = document['getElementById']('role-index-main-tabs');
    const _0xa1834f = document['getElementById']('role-index-tabs');
    const _0x5fcbbc = document['getElementById']('role-index-body');
    if (!_0xa1834f || !_0x5fcbbc)
        return;
    if (_0x14ac54) {
        _0x14ac54['innerHTML'] = '';
        const _0xc4dfe1 = document['createElement']('button');
        _0xc4dfe1['className'] = 'role-index-main-tab-btn\x20main-town' + (_0xd5267a === 'Town' ? '\x20active' : '');
        _0xc4dfe1['textContent'] = 'TOWN';
        _0xc4dfe1['addEventListener']('click', () => {
            _0xd5267a = 'Town';
            _0xd511fd = 0x0;
            _0x3a14fe();
        });
        _0x14ac54['appendChild'](_0xc4dfe1);
        const _0x3489a1 = document['createElement']('button');
        _0x3489a1['className'] = 'role-index-main-tab-btn\x20main-mafia' + (_0xd5267a === 'Mafia' ? '\x20active' : '');
        _0x3489a1['textContent'] = 'MAFIA';
        _0x3489a1['addEventListener']('click', () => {
            _0xd5267a = 'Mafia';
            _0xd511fd = 0x0;
            _0x3a14fe();
        });
        _0x14ac54['appendChild'](_0x3489a1);
    }
    const _0x29f685 = _0x5d37f3['filter'](_0x4a6a1b => _0x4a6a1b['faction'] === _0xd5267a);
    _0xa1834f['innerHTML'] = '';
    _0x29f685['forEach']((_0x86d88b, _0x3974a3) => {
        const _0x5ce684 = document['createElement']('button');
        _0x5ce684['className'] = 'role-index-tab-btn' + (_0x86d88b['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x3974a3 === _0xd511fd ? '\x20active' : '');
        _0x5ce684['textContent'] = _0x86d88b['name'];
        _0x5ce684['addEventListener']('click', () => {
            _0xd511fd = _0x3974a3;
            _0x3a14fe();
        });
        _0xa1834f['appendChild'](_0x5ce684);
    });
    const _0x17420a = _0x29f685[_0xd511fd] || _0x29f685[0x0];
    _0x5fcbbc['innerHTML'] = '';
    if (!_0x17420a)
        return;
    const _0x3f4bdb = document['createElement']('div');
    _0x3f4bdb['className'] = 'role-index-title-row';
    const _0x1abd08 = document['createElement']('span');
    _0x1abd08['className'] = 'role-index-name\x20' + (_0x17420a['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0x1abd08['textContent'] = _0x17420a['name'];
    _0x3f4bdb['appendChild'](_0x1abd08);
    const _0x5c930e = document['createElement']('span');
    _0x5c930e['className'] = 'role-index-faction-badge\x20' + (_0x17420a['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x5c930e['textContent'] = _0x17420a['faction'];
    _0x3f4bdb['appendChild'](_0x5c930e);
    _0x5fcbbc['appendChild'](_0x3f4bdb);
    _0x17420a['paragraphs']['forEach'](_0x268946 => {
        const _0x3230d8 = document['createElement']('p');
        _0x3230d8['className'] = 'role-index-desc-paragraph';
        _0x3230d8['innerHTML'] = _0x268946;
        _0x5fcbbc['appendChild'](_0x3230d8);
    });
}
function _0x2e1938() {
    const _0x5a84e7 = document['getElementById']('role-index-btn');
    const _0x125941 = document['getElementById']('role-index-modal');
    const _0x2321be = document['getElementById']('close-role-index-btn');
    const _0x5922e6 = document['getElementById']('mob-top-index');
    if (_0x5a84e7 && _0x125941) {
        _0x5a84e7['addEventListener']('click', _0x47e84a => {
            _0x47e84a['stopPropagation']();
            if (_0x125941['style']['display'] === 'none' || !_0x125941['style']['display']) {
                _0x3a14fe();
                _0x125941['style']['display'] = 'flex';
            } else {
                _0x125941['style']['display'] = 'none';
            }
        });
    }
    if (_0x2321be && _0x125941) {
        _0x2321be['addEventListener']('click', _0x5a4e83 => {
            _0x5a4e83['stopPropagation']();
            _0x125941['style']['display'] = 'none';
        });
    }
    if (_0x5922e6 && _0x125941) {
        _0x5922e6['addEventListener']('click', _0x3586b4 => {
            _0x3586b4['stopPropagation']();
            if (_0x125941['style']['display'] === 'none' || !_0x125941['style']['display']) {
                _0x3a14fe();
                _0x125941['style']['display'] = 'flex';
            } else {
                _0x125941['style']['display'] = 'none';
            }
        });
    }
}
function _0xd4b498() {
    const _0x32e662 = document['getElementById']('settings-btn');
    const _0x5033a9 = document['getElementById']('settings-panel');
    const _0x19cf3e = document['getElementById']('close-settings-btn');
    const _0x417c53 = document['getElementById']('setting-mouse-relative');
    if (_0x417c53) {
        _0x417c53['checked'] = _0x2f17a2;
        _0x417c53['addEventListener']('change', () => {
            _0x2f17a2 = _0x417c53['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x2f17a2 ? 'true' : 'false');
        });
    }
    const _0x2845a5 = document['getElementById']('setting-music-volume');
    const _0x3a33bc = document['getElementById']('setting-music-volume-display');
    function _0x42e72f(_0x21b1fd) {
        const _0x3d0e0b = (_0x21b1fd['value'] - _0x21b1fd['min']) / (_0x21b1fd['max'] - _0x21b1fd['min']) * 0x64;
        _0x21b1fd['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x3d0e0b + '%,\x20#444\x20' + _0x3d0e0b + '%)';
    }
    if (_0x2845a5) {
        const _0x3c93de = _0x3f163b['getVolume']();
        const _0x56c592 = Math['round'](_0x3c93de * 0x64);
        _0x2845a5['value'] = _0x56c592;
        if (_0x3a33bc)
            _0x3a33bc['textContent'] = _0x56c592 + '%';
        _0x42e72f(_0x2845a5);
        _0x2845a5['addEventListener']('input', () => {
            const _0x1d8df0 = parseInt(_0x2845a5['value'], 0xa);
            if (_0x3a33bc)
                _0x3a33bc['textContent'] = _0x1d8df0 + '%';
            _0x42e72f(_0x2845a5);
            _0x3f163b['setVolume'](_0x1d8df0 / 0x64);
            _0x3f163b['setMuted'](_0x1d8df0 === 0x0);
        });
    }
    if (_0x32e662 && _0x5033a9) {
        _0x32e662['addEventListener']('click', _0x327110 => {
            _0x327110['stopPropagation']();
            _0x5033a9['style']['display'] = _0x5033a9['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x19cf3e && _0x5033a9) {
        _0x19cf3e['addEventListener']('click', () => {
            _0x5033a9['style']['display'] = 'none';
        });
    }
    const _0xaff62c = document['getElementById']('mayor-confirm-yes');
    const _0x412437 = document['getElementById']('mayor-confirm-no');
    const _0x1ea0f9 = document['getElementById']('mayor-confirm-dialog');
    if (_0xaff62c && _0x1ea0f9) {
        _0xaff62c['addEventListener']('click', () => {
            if (_0x50141f && _0x50141f['readyState'] === WebSocket['OPEN']) {
                _0x50141f['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x1ea0f9['style']['display'] = 'none';
        });
    }
    if (_0x412437 && _0x1ea0f9) {
        _0x412437['addEventListener']('click', () => {
            _0x1ea0f9['style']['display'] = 'none';
        });
    }
    const _0x1e217d = document['getElementById']('close-ability-btn');
    if (_0x1e217d) {
        _0x1e217d['addEventListener']('click', () => {
            const _0xc8930b = document['getElementById']('ability-ui');
            if (_0xc8930b)
                _0xc8930b['style']['display'] = 'none';
        });
    }
}
let _0x19ed5f = '';
function _0x577576(_0xb705e1) {
    const _0x36610e = document['getElementById']('vote-tally-panel');
    const _0x1283d8 = document['getElementById']('vote-tally-list');
    if (!_0x36610e || !_0x1283d8)
        return;
    if (_0xb705e1['state'] !== 'DAY_VOTE') {
        _0x36610e['style']['display'] = 'none';
        _0x19ed5f = '';
        return;
    }
    _0x36610e['style']['display'] = 'block';
    const _0xf254d9 = {};
    for (const _0x1390c4 in _0x58f0ec) {
        if (!_0x58f0ec[_0x1390c4]['isDead'])
            _0xf254d9[_0x1390c4] = 0x0;
    }
    if (_0x4d9678 && !_0x5e7278['isDead'])
        _0xf254d9[_0x4d9678] = 0x0;
    const _0x329a85 = _0xb705e1['votes'] || {};
    for (const _0x160505 in _0x329a85) {
        const _0x125f3d = _0x329a85[_0x160505];
        const _0x386428 = _0xb705e1['mayorRevealed'] && _0xb705e1['mayorRevealed'][_0x160505] ? 0x2 : 0x1;
        _0xf254d9[_0x125f3d] = (_0xf254d9[_0x125f3d] || 0x0) + _0x386428;
    }
    let _0x2b8929 = 0x0;
    const _0x24dd1e = _0xb705e1['skips'] || {};
    for (const _0x5953c1 in _0x24dd1e) {
        _0x2b8929 += Number(_0x24dd1e[_0x5953c1]) || 0x1;
    }
    const _0x54e545 = JSON['stringify'](_0xf254d9) + '_' + _0x2b8929 + '_' + _0x5e7278['isDead'];
    if (_0x54e545 === _0x19ed5f)
        return;
    _0x19ed5f = _0x54e545;
    _0x1283d8['innerHTML'] = '';
    for (const _0x17e073 in _0xf254d9) {
        const _0xa84388 = parseInt(_0x17e073);
        const _0x104e27 = _0xa84388 === _0x4d9678 ? _0x125330 : _0x58f0ec[_0x17e073] ? _0x58f0ec[_0x17e073]['name'] : 'Player\x20' + _0x17e073;
        const _0xd3b8e7 = document['createElement']('div');
        _0xd3b8e7['className'] = 'vote-tally-entry';
        const _0x54937d = document['createElement']('span');
        _0x54937d['textContent'] = _0x104e27;
        const _0x5a445e = document['createElement']('span');
        _0x5a445e['className'] = 'vote-count';
        _0x5a445e['textContent'] = _0xf254d9[_0x17e073] + '\x20vote' + (_0xf254d9[_0x17e073] === 0x1 ? '' : 's');
        _0xd3b8e7['appendChild'](_0x54937d);
        _0xd3b8e7['appendChild'](_0x5a445e);
        if (_0xa84388 !== _0x4d9678 && !_0x5e7278['isDead']) {
            _0xd3b8e7['style']['cursor'] = 'pointer';
            _0xd3b8e7['title'] = 'Vote\x20for\x20' + _0x104e27;
            _0xd3b8e7['addEventListener']('click', _0x20e66e => {
                _0x20e66e['stopPropagation']();
                if (_0x50141f && _0x50141f['readyState'] === WebSocket['OPEN']) {
                    _0x50141f['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x104e27
                    }));
                }
            });
        }
        _0x1283d8['appendChild'](_0xd3b8e7);
    }
    const _0x5b1902 = document['createElement']('div');
    _0x5b1902['className'] = 'vote-tally-skip';
    _0x5b1902['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x2b8929 + '</span>';
    if (!_0x5e7278['isDead']) {
        _0x5b1902['style']['cursor'] = 'pointer';
        _0x5b1902['title'] = 'Click\x20to\x20skip\x20vote';
        _0x5b1902['addEventListener']('click', _0x144dab => {
            _0x144dab['stopPropagation']();
            if (_0x50141f && _0x50141f['readyState'] === WebSocket['OPEN']) {
                _0x50141f['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x1283d8['appendChild'](_0x5b1902);
}
let _0x379a85 = null;
let _0x682077 = null;
let _0x1732e1 = null;
let _0x47baeb = null;
let _0x100568 = null;
function _0x4eb6e7() {
    if (_0x50141f && _0x50141f['readyState'] === WebSocket['OPEN']) {
        _0x50141f['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x379a85,
            'abilityTarget': _0x682077,
            'killTarget': _0x1732e1
        }));
    }
}
function _0x2634ad() {
    if (_0x50141f && _0x50141f['readyState'] === WebSocket['OPEN']) {
        _0x50141f['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'blackmailTarget': _0x47baeb,
            'killTarget': _0x100568
        }));
    }
}
function _0x281b96() {
    const _0x19ce21 = document['getElementById']('ability-ui-body');
    if (!_0x19ce21)
        return;
    _0x19ce21['innerHTML'] = '';
    if (_0x1ece76 === 'Celebrity' || _0x1ece76 === 'Mayor') {
        const _0x4fd219 = document['createElement']('div');
        _0x4fd219['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x4fd219['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x19ce21['appendChild'](_0x4fd219);
        return;
    }
    if (_0x1ece76 === 'Blackmailer') {
        const _0xfc191a = document['createElement']('div');
        _0xfc191a['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0xfc191a['innerText'] = 'Blackmail\x20Target\x20(Silences\x20for\x20full\x20day):';
        _0x19ce21['appendChild'](_0xfc191a);
        const _0x3a804c = document['createElement']('div');
        _0x3a804c['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x51d8e8 = document['createElement']('button');
        _0x51d8e8['className'] = 'layer-btn';
        _0x51d8e8['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x51d8e8['innerText'] = 'No\x20one';
        if (_0x47baeb === null)
            _0x51d8e8['classList']['add']('active');
        _0x51d8e8['onclick'] = () => {
            _0x47baeb = null;
            _0x2634ad();
            _0x281b96();
        };
        _0x3a804c['appendChild'](_0x51d8e8);
        for (const _0x1f3e89 in _0x58f0ec) {
            const _0x43d5e6 = _0x58f0ec[_0x1f3e89];
            if (_0x43d5e6['isDead'])
                continue;
            const _0x34688c = document['createElement']('button');
            _0x34688c['className'] = 'layer-btn';
            _0x34688c['innerText'] = _0x43d5e6['name'];
            if (_0x47baeb === parseInt(_0x1f3e89))
                _0x34688c['classList']['add']('active');
            _0x34688c['onclick'] = () => {
                _0x47baeb = parseInt(_0x1f3e89);
                _0x2634ad();
                _0x281b96();
            };
            _0x3a804c['appendChild'](_0x34688c);
        }
        if (!_0x5e7278['isDead']) {
            const _0x44319c = document['createElement']('button');
            _0x44319c['className'] = 'layer-btn';
            _0x44319c['style']['cssText'] = 'grid-column:\x20span\x202;';
            _0x44319c['innerText'] = _0x125330 + '\x20(Self\x20-\x20Decoy)';
            if (_0x47baeb === _0x4d9678)
                _0x44319c['classList']['add']('active');
            _0x44319c['onclick'] = () => {
                _0x47baeb = _0x4d9678;
                _0x2634ad();
                _0x281b96();
            };
            _0x3a804c['appendChild'](_0x44319c);
        }
        _0x19ce21['appendChild'](_0x3a804c);
        const _0x150fec = document['createElement']('div');
        _0x150fec['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x150fec['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x19ce21['appendChild'](_0x150fec);
        const _0x3e85ad = document['createElement']('div');
        _0x3e85ad['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x3256ea = document['createElement']('button');
        _0x3256ea['className'] = 'layer-btn';
        _0x3256ea['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x3256ea['innerText'] = 'No\x20one';
        if (!_0x100568 && !_0x42f0ec['CURRENT_TARGET'])
            _0x3256ea['classList']['add']('active');
        _0x3256ea['onclick'] = () => {
            _0x100568 = null;
            _0x42f0ec['CURRENT_TARGET'] = null;
            _0x2634ad();
            _0x281b96();
        };
        _0x3e85ad['appendChild'](_0x3256ea);
        for (const _0x15c751 in _0x58f0ec) {
            const _0x20a9d1 = _0x58f0ec[_0x15c751];
            if (_0x20a9d1['isDead'])
                continue;
            const _0x1cefe0 = document['createElement']('button');
            _0x1cefe0['className'] = 'layer-btn';
            _0x1cefe0['innerText'] = _0x20a9d1['name'];
            if (_0x100568 === parseInt(_0x15c751) || _0x42f0ec['CURRENT_TARGET'] === parseInt(_0x15c751))
                _0x1cefe0['classList']['add']('active');
            _0x1cefe0['onclick'] = () => {
                _0x100568 = parseInt(_0x15c751);
                _0x42f0ec['CURRENT_TARGET'] = parseInt(_0x15c751);
                _0x2634ad();
                _0x281b96();
            };
            _0x3e85ad['appendChild'](_0x1cefe0);
        }
        _0x19ce21['appendChild'](_0x3e85ad);
        return;
    }
    if (_0x1ece76 === 'Skinwalker') {
        const _0x33a887 = document['createElement']('div');
        _0x33a887['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x33a887['innerText'] = 'Transform\x20into:';
        _0x19ce21['appendChild'](_0x33a887);
        const _0x196387 = document['createElement']('div');
        _0x196387['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x1d79fd = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x2c3306 = _0x226796 => {
            if (_0x42f0ec['ROLES_IN_GAME'] && Array['isArray'](_0x42f0ec['ROLES_IN_GAME'])) {
                return _0x42f0ec['ROLES_IN_GAME']['includes'](_0x226796);
            }
            if (_0x42f0ec['ROLE_LIST_RAW'] && _0x42f0ec['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x42f0ec['ROLE_LIST_RAW']['some'](_0x3845f7 => _0x3845f7['name'] === _0x226796 && !_0x3845f7['isDead']);
            }
            return ![];
        };
        const _0x5019fc = [
            'None',
            ..._0x1d79fd['filter'](_0x2c3306)
        ];
        _0x5019fc['forEach'](_0x5dc81f => {
            const _0x57ef2c = document['createElement']('button');
            _0x57ef2c['className'] = 'layer-btn';
            _0x57ef2c['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x57ef2c['innerText'] = _0x5dc81f;
            const _0x325295 = _0x5dc81f === 'None' && !_0x379a85 || _0x379a85 === _0x5dc81f;
            if (_0x325295)
                _0x57ef2c['classList']['add']('active');
            const _0x47d73c = _0x5dc81f !== 'None' && _0x42f0ec['SKINWALKER_LAST_ROLE'] && _0x42f0ec['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x5dc81f['toLowerCase']();
            if (_0x47d73c) {
                _0x57ef2c['style']['opacity'] = '0.45';
                _0x57ef2c['style']['cursor'] = 'not-allowed';
                _0x57ef2c['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x57ef2c['onclick'] = () => {
                    _0x366300('You\x20cannot\x20transform\x20into\x20' + _0x5dc81f + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x57ef2c['onclick'] = () => {
                    _0x379a85 = _0x5dc81f === 'None' ? null : _0x5dc81f;
                    _0x4eb6e7();
                    _0x281b96();
                };
            }
            _0x196387['appendChild'](_0x57ef2c);
        });
        _0x19ce21['appendChild'](_0x196387);
        if (_0x2c3306('Vigilante')) {
            const _0x5ec362 = document['createElement']('div');
            _0x5ec362['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x5ec362['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x19ce21['appendChild'](_0x5ec362);
        }
        if (_0x379a85 === 'Vigilante') {
            const _0x198090 = document['createElement']('div');
            _0x198090['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x198090['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x19ce21['appendChild'](_0x198090);
        } else if (_0x379a85 && _0x379a85 !== 'Celebrity') {
            const _0x570fdd = document['createElement']('div');
            _0x570fdd['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x570fdd['innerText'] = 'Use\x20' + _0x379a85 + '\x20ability\x20on:';
            _0x19ce21['appendChild'](_0x570fdd);
            const _0x1b4c31 = document['createElement']('div');
            _0x1b4c31['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x56434e = document['createElement']('button');
            _0x56434e['className'] = 'layer-btn';
            _0x56434e['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x56434e['innerText'] = 'No\x20one';
            if (!_0x682077)
                _0x56434e['classList']['add']('active');
            _0x56434e['onclick'] = () => {
                _0x682077 = null;
                _0x4eb6e7();
                _0x281b96();
            };
            _0x1b4c31['appendChild'](_0x56434e);
            for (const _0x30a743 in _0x58f0ec) {
                const _0x5d7824 = _0x58f0ec[_0x30a743];
                if (_0x5d7824['isDead'])
                    continue;
                const _0x3c9003 = document['createElement']('button');
                _0x3c9003['className'] = 'layer-btn';
                _0x3c9003['innerText'] = _0x5d7824['name'];
                if (_0x682077 === parseInt(_0x30a743))
                    _0x3c9003['classList']['add']('active');
                _0x3c9003['onclick'] = () => {
                    _0x682077 = parseInt(_0x30a743);
                    _0x4eb6e7();
                    _0x281b96();
                };
                _0x1b4c31['appendChild'](_0x3c9003);
            }
            _0x19ce21['appendChild'](_0x1b4c31);
        }
        const _0x4c77f2 = document['createElement']('div');
        _0x4c77f2['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x4c77f2['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x19ce21['appendChild'](_0x4c77f2);
        const _0x22b2a9 = document['createElement']('div');
        _0x22b2a9['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x4e0f1f = document['createElement']('button');
        _0x4e0f1f['className'] = 'layer-btn';
        _0x4e0f1f['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x4e0f1f['innerText'] = 'No\x20one';
        if (!_0x1732e1 && !_0x42f0ec['CURRENT_TARGET'])
            _0x4e0f1f['classList']['add']('active');
        _0x4e0f1f['onclick'] = () => {
            _0x1732e1 = null;
            _0x42f0ec['CURRENT_TARGET'] = null;
            _0x4eb6e7();
            _0x281b96();
        };
        _0x22b2a9['appendChild'](_0x4e0f1f);
        for (const _0x4b1432 in _0x58f0ec) {
            const _0x59bcfc = _0x58f0ec[_0x4b1432];
            if (_0x59bcfc['isDead'])
                continue;
            const _0x40e0b = document['createElement']('button');
            _0x40e0b['className'] = 'layer-btn';
            _0x40e0b['innerText'] = _0x59bcfc['name'];
            if (_0x1732e1 === parseInt(_0x4b1432) || _0x42f0ec['CURRENT_TARGET'] === parseInt(_0x4b1432))
                _0x40e0b['classList']['add']('active');
            _0x40e0b['onclick'] = () => {
                _0x1732e1 = parseInt(_0x4b1432);
                _0x42f0ec['CURRENT_TARGET'] = parseInt(_0x4b1432);
                _0x4eb6e7();
                _0x281b96();
            };
            _0x22b2a9['appendChild'](_0x40e0b);
        }
        _0x19ce21['appendChild'](_0x22b2a9);
        return;
    }
    let _0x5835d3 = '';
    let _0x208792 = ![];
    if (_0x1ece76 === 'Doctor') {
        _0x5835d3 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x208792 = !![];
    } else if (_0x1ece76 === 'Investigator') {
        _0x5835d3 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x1ece76 === 'Tracker') {
        _0x5835d3 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x1ece76 === 'Archer') {
        _0x5835d3 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x1ece76 === 'Escort') {
        _0x5835d3 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x1ece76 === 'Vigilante') {
        _0x5835d3 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x27213b = document['createElement']('div');
    _0x27213b['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x27213b['innerText'] = _0x5835d3;
    _0x19ce21['appendChild'](_0x27213b);
    const _0xdf505e = document['createElement']('div');
    _0xdf505e['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x2f0a16 = document['createElement']('button');
    _0x2f0a16['className'] = 'layer-btn';
    _0x2f0a16['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x2f0a16['innerText'] = 'No\x20one';
    if (_0x42f0ec['CURRENT_TARGET'] === null)
        _0x2f0a16['classList']['add']('active');
    _0x2f0a16['onclick'] = () => {
        _0x42f0ec['CURRENT_TARGET'] = null;
        if (_0x50141f && _0x50141f['readyState'] === WebSocket['OPEN']) {
            _0x50141f['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x281b96();
    };
    _0xdf505e['appendChild'](_0x2f0a16);
    for (const _0x4347c3 in _0x58f0ec) {
        const _0x3efcd4 = _0x58f0ec[_0x4347c3];
        if (_0x3efcd4['isDead'])
            continue;
        const _0x3ae097 = document['createElement']('button');
        _0x3ae097['className'] = 'layer-btn';
        _0x3ae097['innerText'] = _0x3efcd4['name'];
        if (_0x42f0ec['CURRENT_TARGET'] === parseInt(_0x4347c3))
            _0x3ae097['classList']['add']('active');
        _0x3ae097['onclick'] = () => {
            _0x42f0ec['CURRENT_TARGET'] = parseInt(_0x4347c3);
            if (_0x50141f && _0x50141f['readyState'] === WebSocket['OPEN']) {
                _0x50141f['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x4347c3)
                }));
            }
            _0x281b96();
        };
        _0xdf505e['appendChild'](_0x3ae097);
    }
    if (_0x208792 && !_0x5e7278['isDead']) {
        const _0x47e314 = document['createElement']('button');
        _0x47e314['className'] = 'layer-btn';
        _0x47e314['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x47e314['innerText'] = _0x125330 + '\x20(Self)';
        if (_0x42f0ec['CURRENT_TARGET'] === _0x4d9678)
            _0x47e314['classList']['add']('active');
        _0x47e314['onclick'] = () => {
            _0x42f0ec['CURRENT_TARGET'] = _0x4d9678;
            if (_0x50141f && _0x50141f['readyState'] === WebSocket['OPEN']) {
                _0x50141f['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x4d9678
                }));
            }
            _0x281b96();
        };
        _0xdf505e['appendChild'](_0x47e314);
    }
    _0x19ce21['appendChild'](_0xdf505e);
}
function _0x6e531f() {
    if (_0x50141f && (_0x50141f['readyState'] === WebSocket['OPEN'] || _0x50141f['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x787888 = new URLSearchParams();
    if (_0x1546ac)
        _0x787888['set']('token', _0x1546ac);
    _0x787888['set']('ngrok-skip-browser-warning', 'true');
    const _0x42f4f7 = 'wss://opening-tales-fiscal-murphy.trycloudflare.com';
    const _0x4e235e = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x42f4f7;
    const _0x4d2d22 = _0x4e235e + '/?' + _0x787888['toString']();
    _0x50141f = new WebSocket(_0x4d2d22);
    _0x50141f['onopen'] = function () {
        if (!_0x40f576 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x1077ae = window['_FB'] && window['_FB']['_currentUser'];
                const _0x5a2505 = window['_FB'] && window['_FB']['_userData'];
                const _0x5d751b = !(_0x1077ae && _0x5a2505 && _0x5a2505['username']);
                const _0x18c9d9 = _0x5d751b ? 'body01.png' : _0x2bfb82;
                const _0x561e66 = _0x5d751b ? 'eyes4.png' : _0x5b2dba;
                const _0x58a45c = !_0x5d751b && _0x5a2505 && _0x5a2505['photoURL'] ? _0x5a2505['photoURL'] : '';
                const _0x157c8d = !_0x5d751b && _0x1077ae ? _0x1077ae['uid'] : '';
                const _0x52cd19 = !_0x5d751b && _0x5a2505 ? {
                    'townWins': _0x5a2505['townWins'] || 0x0,
                    'mafiaWins': _0x5a2505['mafiaWins'] || 0x0,
                    'deaths': _0x5a2505['deaths'] || 0x0,
                    'townLosses': _0x5a2505['townLosses'] || 0x0,
                    'mafiaLosses': _0x5a2505['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x125330,
                    'token': _0x1546ac,
                    'body': _0x18c9d9,
                    'eyes': _0x561e66,
                    'isGuest': _0x5d751b,
                    'uid': _0x157c8d,
                    'photoURL': _0x58a45c,
                    'accountStats': _0x52cd19
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x50141f && _0x50141f['readyState'] === WebSocket['OPEN']) {
            _0x50141f['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x50141f['onclose'] = _0x105adc => {
        if (_0x105adc['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x105adc['code'] === 0xfa2 || _0x105adc['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x296581 = document['getElementById']('disconnect-overlay');
        if (!_0x296581) {
            _0x296581 = document['createElement']('div');
            _0x296581['id'] = 'disconnect-overlay';
            _0x296581['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x296581['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x296581);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x50141f['onmessage'] = _0x22ecfd => {
        const _0x3bc02c = JSON['parse'](_0x22ecfd['data']);
        if (_0x3bc02c['type'] === 'map_data') {
            _0x42f0ec['MAP']['tileSize'] = _0x3bc02c['map']['tileSize'];
            _0x42f0ec['MAP']['columns'] = _0x3bc02c['map']['columns'];
            _0x42f0ec['MAP']['rows'] = _0x3bc02c['map']['rows'];
            _0x42f0ec['MAP']['layers'] = _0x3bc02c['map']['layers'];
            if (_0x3bc02c['map']['doors']) {
                _0x42f0ec['MAP']['doors'] = _0x3bc02c['map']['doors'];
                const _0x2a1bf7 = _0x42f0ec['MAP']['layers']['find'](_0xf45efc => _0xf45efc['name'] === 'floor2');
                if (_0x2a1bf7) {
                    for (const _0x5b89fb in _0x42f0ec['MAP']['doors']) {
                        _0x2a1bf7['data'][parseInt(_0x5b89fb)] = 0x2;
                    }
                }
            }
            if (_0x3bc02c['entities'])
                _0x42f0ec['ENTITIES'] = _0x3bc02c['entities'];
            _0x3443fa();
            _0x42f0ec['SYSTEM']['isReady'] = !![];
            _0x309bb4();
            if (!_0x42f0ec['SYSTEM']['_gameLoopRunning']) {
                _0x42f0ec['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0xebd4e4);
            }
            return;
        }
        if (_0x3bc02c['type'] === 'init') {
            _0x4d9678 = _0x3bc02c['id'];
            _0x40f576 = ![];
            _0x4a4ba5();
            if (_0x495a41) {
                const _0x1e3ac1 = document['getElementById']('leaderboard-list');
                const _0x3b92dd = document['getElementById']('leaderboard-toggle');
                if (_0x1e3ac1) {
                    _0x1e3ac1['style']['display'] = 'none';
                    if (_0x3b92dd)
                        _0x3b92dd['style']['transform'] = 'rotate(180deg)';
                }
                const _0x43780e = document['getElementById']('role-list-items');
                const _0x77e655 = document['getElementById']('role-list-toggle');
                if (_0x43780e) {
                    _0x43780e['style']['display'] = 'none';
                    if (_0x77e655)
                        _0x77e655['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x48b20b = _0x3bc02c['isOwner'] || ![];
            _0x125330 = _0x3bc02c['name'] || _0x125330;
            _0x42f0ec['MAP']['tileSize'] = _0x3bc02c['map']['tileSize'];
            _0x42f0ec['MAP']['columns'] = _0x3bc02c['map']['columns'];
            _0x42f0ec['MAP']['rows'] = _0x3bc02c['map']['rows'];
            _0x42f0ec['MAP']['layers'] = _0x3bc02c['map']['layers'];
            if (_0x3bc02c['map']['doors']) {
                _0x42f0ec['MAP']['doors'] = _0x3bc02c['map']['doors'];
                const _0x37600a = _0x42f0ec['MAP']['layers']['find'](_0x298d7d => _0x298d7d['name'] === 'floor2');
                if (_0x37600a) {
                    for (const _0x40d98a in _0x42f0ec['MAP']['doors']) {
                        _0x37600a['data'][parseInt(_0x40d98a)] = 0x2;
                    }
                }
            }
            if (_0x3bc02c['entities'])
                _0x42f0ec['ENTITIES'] = _0x3bc02c['entities'];
            _0x3443fa();
            _0x5e7278['x'] = _0x42f0ec['MAP']['columns'] * _0x42f0ec['MAP']['tileSize'] / 0x2;
            _0x5e7278['y'] = _0x42f0ec['MAP']['rows'] * _0x42f0ec['MAP']['tileSize'] / 0x2;
            _0x42f0ec['CAMERA']['x'] = _0x5e7278['x'] + _0x5e7278['width'] / 0x2 - _0x42f0ec['CAMERA']['width'] / 0x2;
            _0x42f0ec['CAMERA']['y'] = _0x5e7278['y'] + _0x5e7278['height'] / 0x2 - _0x42f0ec['CAMERA']['height'] / 0x2;
            if (_0x48b20b) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x515b5c();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x48c7f1 = document['getElementById']('role-index-btn-wrap');
            if (_0x48c7f1)
                _0x48c7f1['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x42f0ec['SYSTEM']['lastTime'] = performance['now']();
            _0x42f0ec['SYSTEM']['isReady'] = !![];
            _0x127784();
            if (!_0x42f0ec['SYSTEM']['_gameLoopRunning']) {
                _0x42f0ec['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0xebd4e4);
            }
            return;
        } else if (_0x3bc02c['type'] === 'state') {
            const _0x420ede = {};
            for (const _0x34879d in _0x3bc02c['players']) {
                if (parseInt(_0x34879d) === _0x4d9678)
                    continue;
                const _0x154949 = _0x3bc02c['players'][_0x34879d];
                const _0x3aec96 = _0x58f0ec[_0x34879d];
                if (_0x3aec96) {
                    const _0x226c3f = _0x154949['x'] - _0x3aec96['renderX'];
                    const _0x4f720e = _0x154949['y'] - _0x3aec96['renderY'];
                    const _0x548f8c = _0x226c3f * _0x226c3f + _0x4f720e * _0x4f720e > 0x78 * 0x78;
                    Object['assign'](_0x3aec96, _0x154949);
                    if (_0x548f8c) {
                        _0x3aec96['renderX'] = _0x154949['x'];
                        _0x3aec96['renderY'] = _0x154949['y'];
                    }
                    _0x420ede[_0x34879d] = _0x3aec96;
                } else {
                    _0x420ede[_0x34879d] = {
                        ..._0x154949,
                        'renderX': _0x154949['x'],
                        'renderY': _0x154949['y'],
                        'renderAngle': _0x154949['angle'] || 0x0
                    };
                }
            }
            _0x58f0ec = _0x420ede;
            _0x6a8a65();
            if (_0x3bc02c['players'][_0x4d9678]) {
                const _0x40dcc4 = _0x3bc02c['players'][_0x4d9678];
                _0x5e7278['chats'] = _0x40dcc4['chats'] || [];
                _0x5e7278['isDead'] = _0x40dcc4['isDead'];
                _0x5e7278['hasArrow'] = _0x40dcc4['hasArrow'] || ![];
                if (_0x40dcc4['name'])
                    _0x125330 = _0x40dcc4['name'];
                _0x127784();
                const _0x41de1c = Math['hypot'](_0x40dcc4['x'] - _0x5e7278['x'], _0x40dcc4['y'] - _0x5e7278['y']);
                if (_0x41de1c > 0xfa) {
                    _0x5e7278['x'] = _0x40dcc4['x'];
                    _0x5e7278['y'] = _0x40dcc4['y'];
                } else if (_0x41de1c > 0x50) {
                    _0x5e7278['x'] += (_0x40dcc4['x'] - _0x5e7278['x']) * 0.06;
                    _0x5e7278['y'] += (_0x40dcc4['y'] - _0x5e7278['y']) * 0.06;
                }
            }
            if (_0x3bc02c['entities'])
                _0x42f0ec['ENTITIES'] = _0x3bc02c['entities'];
            if (_0x3bc02c['game']) {
                _0x42f0ec['GAME_STATE'] = _0x3bc02c['game']['state'];
                _0x42f0ec['NIGHT_ABILITY_OPEN'] = _0x3bc02c['game']['nightAbilityOpen'];
                if (_0x3bc02c['game']['bloodSplatters'])
                    _0x31a16e = _0x3bc02c['game']['bloodSplatters'];
                if (_0x3bc02c['game']['bloodDrops'])
                    _0x475fc2 = _0x3bc02c['game']['bloodDrops'];
                if (_0x3bc02c['game']['blackmailed']) {
                    _0x50ee5a = new Set(_0x3bc02c['game']['blackmailed']);
                } else {
                    _0x50ee5a['clear']();
                }
                if (_0x3bc02c['game']['mayorRevealed']) {
                    for (const _0x939139 in _0x3bc02c['game']['mayorRevealed']) {
                        _0x35d57b['add'](parseInt(_0x939139));
                    }
                }
                if (_0x42f0ec['LAST_STATE'] !== _0x42f0ec['GAME_STATE']) {
                    if (_0x42f0ec['GAME_STATE'] !== 'NIGHT') {
                        _0x42f0ec['CURRENT_TARGET'] = null;
                        _0x379a85 = null;
                        _0x682077 = null;
                        _0x1732e1 = null;
                        _0x47baeb = null;
                        _0x100568 = null;
                        const _0x39da1a = document['getElementById']('ability-ui');
                        if (_0x39da1a)
                            _0x39da1a['style']['display'] = 'none';
                    }
                    if (_0x42f0ec['GAME_STATE'] === 'NIGHT') {
                        _0x5e7278['chats'] = [];
                        for (const _0x32dde2 in _0x58f0ec) {
                            _0x58f0ec[_0x32dde2]['chats'] = [];
                        }
                    }
                    _0x42f0ec['LAST_STATE'] = _0x42f0ec['GAME_STATE'];
                    _0x31349e();
                    _0x3f163b['onStateChange'](_0x42f0ec['GAME_STATE'], _0x3bc02c['game']['nightAbilityOpen']);
                }
                const _0x137634 = document['getElementById']('phase-ui');
                if (_0x137634) {
                    if (_0x3bc02c['game']['state'] === 'LOBBY') {
                        _0x137634['style']['display'] = 'none';
                    } else {
                        _0x137634['style']['display'] = 'block';
                    }
                    let _0x559c27 = _0x3bc02c['game']['state']['replace']('_', '\x20');
                    if (_0x3bc02c['game']['state'] === 'DAY_DISCUSS') {
                        _0x559c27 = 'DAY\x20' + (_0x3bc02c['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x3bc02c['game']['timer'] + 's';
                    } else if (_0x3bc02c['game']['state'] === 'DAY_VOTE') {
                        _0x559c27 = 'DAY\x20' + (_0x3bc02c['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x3bc02c['game']['timer'] + 's';
                    } else if (_0x3bc02c['game']['state'] === 'NIGHT') {
                        const _0x53c53c = _0x3bc02c['game']['dayCount'] || 0x1;
                        if (_0x3bc02c['game']['nightAbilityOpen']) {
                            _0x559c27 = 'NIGHT\x20' + _0x53c53c + '\x20ABILITY\x20PHASE';
                            const _0xd0362a = _0x3bc02c['game']['abilityTimer'] !== undefined ? _0x3bc02c['game']['abilityTimer'] : _0x3bc02c['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0xd0362a + 's';
                        } else {
                            _0x559c27 = 'NIGHT\x20' + _0x53c53c;
                            document['getElementById']('phase-timer')['innerText'] = _0x3bc02c['game']['timer'] + 's';
                        }
                    }
                    if (_0x3bc02c['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x559c27;
                    }
                }
                if (_0x3bc02c['game']['state'] === 'NIGHT') {
                    const _0x4cffc3 = document['getElementById']('ability-timer-label');
                    if (_0x4cffc3) {
                        const _0x58cd78 = _0x3bc02c['game']['abilityTimer'] !== undefined ? _0x3bc02c['game']['abilityTimer'] : _0x3bc02c['game']['timer'];
                        _0x4cffc3['innerText'] = _0x3bc02c['game']['nightAbilityOpen'] ? _0x58cd78 + 's' : '';
                    }
                    if (_0x3bc02c['game']['nightAbilityOpen'] && !_0x16ae6a && !_0x5e7278['isDead']) {
                        _0x16ae6a = !![];
                        _0x281b96();
                        const _0x54321d = document['getElementById']('ability-ui');
                        if (_0x54321d)
                            _0x54321d['style']['display'] = 'block';
                    }
                    if (!_0x3bc02c['game']['nightAbilityOpen']) {
                        const _0x4ca409 = document['getElementById']('ability-ui');
                        if (_0x4ca409 && _0x4ca409['style']['display'] === 'block') {
                            _0x4ca409['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x16ae6a = ![];
                }
                if (_0x3bc02c['game']['rolesInGame']) {
                    _0x42f0ec['ROLES_IN_GAME'] = _0x3bc02c['game']['rolesInGame'];
                }
                if (_0x3bc02c['game']['skinwalkerLastRole'] !== undefined) {
                    _0x42f0ec['SKINWALKER_LAST_ROLE'] = _0x3bc02c['game']['skinwalkerLastRole'];
                }
                if (_0x3bc02c['game']['state'] === 'NIGHT') {
                    const _0xac708 = document['getElementById']('will-ui');
                    if (_0xac708 && _0xac708['style']['display'] === 'flex') {
                        _0xac708['style']['display'] = 'none';
                        const _0x78e344 = document['getElementById']('will-input');
                        if (_0x78e344)
                            _0x78e344['blur']();
                    }
                }
                _0x577576(_0x3bc02c['game']);
                if (_0x3bc02c['game']['roleListMode'] !== undefined) {
                    _0x42f0ec['ROLE_LIST_RAW'] = _0x3bc02c['game']['roleList'] || [];
                    _0x30e100(_0x3bc02c['game']['roleList'], _0x3bc02c['game']['roleListMode']);
                }
            }
        } else if (_0x3bc02c['type'] === 'teleport') {
            _0x5e7278['x'] = _0x3bc02c['x'];
            _0x5e7278['y'] = _0x3bc02c['y'];
            _0x5e7278['vx'] = 0x0;
            _0x5e7278['vy'] = 0x0;
            _0x42f0ec['CAMERA']['x'] = null;
            if (_0x3bc02c['teleportId'] !== undefined)
                _0x2f207a = _0x3bc02c['teleportId'];
        } else if (_0x3bc02c['type'] === 'bulk_teleport') {
            for (const _0x2d265c in _0x3bc02c['positions']) {
                const _0x41bd8b = _0x3bc02c['positions'][_0x2d265c];
                if (parseInt(_0x2d265c) === _0x4d9678) {
                    _0x5e7278['x'] = _0x41bd8b['x'];
                    _0x5e7278['y'] = _0x41bd8b['y'];
                    _0x5e7278['vx'] = 0x0;
                    _0x5e7278['vy'] = 0x0;
                    _0x42f0ec['CAMERA']['x'] = null;
                    continue;
                }
                const _0x22cecb = _0x58f0ec[_0x2d265c];
                if (_0x22cecb) {
                    _0x22cecb['x'] = _0x41bd8b['x'];
                    _0x22cecb['y'] = _0x41bd8b['y'];
                    _0x22cecb['renderX'] = _0x41bd8b['x'];
                    _0x22cecb['renderY'] = _0x41bd8b['y'];
                    _0x22cecb['vx'] = 0x0;
                    _0x22cecb['vy'] = 0x0;
                }
            }
        } else if (_0x3bc02c['type'] === 'player_left') {
            delete _0x58f0ec[_0x3bc02c['id']];
            _0x35d57b['delete'](parseInt(_0x3bc02c['id']));
        } else if (_0x3bc02c['type'] === 'map_update') {
            const _0x278975 = _0x42f0ec['MAP']['layers']['find'](_0x1b34c2 => _0x1b34c2['name'] === _0x3bc02c['layer']);
            if (_0x278975) {
                _0x278975['data'][_0x3bc02c['row'] * _0x42f0ec['MAP']['columns'] + _0x3bc02c['col']] = _0x3bc02c['gid'];
                const _0x1baa2d = _0x3bc02c['row'] * _0x42f0ec['MAP']['columns'] + _0x3bc02c['col'];
                if (_0x42f0ec['MAP']['doors'] && _0x42f0ec['MAP']['doors'][_0x1baa2d]) {
                    const _0x3e6546 = _0x42f0ec['MAP']['layers']['find'](_0x1a224c => _0x1a224c['name'] === 'floor2');
                    if (_0x3e6546)
                        _0x3e6546['data'][_0x1baa2d] = 0x2;
                }
                const _0x561c9d = Math['floor'](_0x3bc02c['col'] * _0x42f0ec['MAP']['tileSize'] / _0x42f0ec['MAP']['chunkSize']);
                const _0x1e1d69 = Math['floor'](_0x3bc02c['row'] * _0x42f0ec['MAP']['tileSize'] / _0x42f0ec['MAP']['chunkSize']);
                _0x126542(_0x561c9d, _0x1e1d69);
                _0x4c82d9 = null;
                _0xd25d54 = null;
            }
        } else if (_0x3bc02c['type'] === 'role_assign') {
            _0x1ece76 = _0x3bc02c['role'];
            _0x5e7278['isDead'] = _0x1ece76 === 'Spectator';
            _0x35d57b['clear']();
            _0x42f0ec['CURRENT_TARGET'] = null;
            _0x379a85 = null;
            _0x682077 = null;
            _0x1732e1 = null;
            _0x47baeb = null;
            _0x100568 = null;
            _0x16ae6a = ![];
            const _0x4c52f6 = document['getElementById']('ability-ui');
            if (_0x4c52f6)
                _0x4c52f6['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x1ece76;
            _0x31349e();
            _0x366300(_0x1ece76 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x1ece76, !![]);
            let _0x1cfcc8 = '';
            if (_0x1ece76 === 'Investigator')
                _0x1cfcc8 = 'Investigate\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x1ece76 === 'Tracker')
                _0x1cfcc8 = 'Track\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x1ece76 === 'Doctor')
                _0x1cfcc8 = 'Heal\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x1ece76 === 'Archer')
                _0x1cfcc8 = 'Guard\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x1ece76 === 'Escort')
                _0x1cfcc8 = 'Roleblock\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x1ece76 === 'Vigilante')
                _0x1cfcc8 = 'Shoot\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x1ece76 === 'Skinwalker')
                _0x1cfcc8 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x1ece76 === 'Blackmailer')
                _0x1cfcc8 = 'Pick\x20a\x20player\x20to\x20blackmail\x20and\x20a\x20player\x20to\x20kill\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x1ece76 === 'Celebrity')
                _0x1cfcc8 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x1ece76 === 'Mayor')
                _0x1cfcc8 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x366300(_0x1cfcc8, !![]);
        } else if (_0x3bc02c['type'] === 'mayor_reveal') {
            _0x35d57b['add'](parseInt(_0x3bc02c['playerId']));
            _0x127784();
            _0x31349e();
        } else if (_0x3bc02c['type'] === 'rolelist_update') {
            _0x42f0ec['ROLE_LIST_RAW'] = _0x3bc02c['list'] || [];
            _0x30e100(_0x3bc02c['list'], _0x3bc02c['mode']);
        } else if (_0x3bc02c['type'] === 'sound_event') {
            _0x3f163b['onSoundEvent'](_0x3bc02c['track']);
        } else if (_0x3bc02c['type'] === 'blood_splatter') {
            _0x31a16e['push']({
                'x': _0x3bc02c['x'],
                'y': _0x3bc02c['y']
            });
        } else if (_0x3bc02c['type'] === 'blood_drop') {
            _0x475fc2['push']({
                'x': _0x3bc02c['x'],
                'y': _0x3bc02c['y']
            });
        } else if (_0x3bc02c['type'] === 'day_fade') {
            _0x1615f6 = 0x1;
            _0x2df96a = performance['now']() + 0x3e8;
        } else if (_0x3bc02c['type'] === 'player_stats_updated') {
            const _0x35bc36 = parseInt(_0x3bc02c['id']);
            if (_0x35bc36 === _0x4d9678 && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x3bc02c['accountStats']);
            }
            if (_0x58f0ec[_0x3bc02c['id']]) {
                _0x58f0ec[_0x3bc02c['id']]['accountStats'] = _0x3bc02c['accountStats'];
            }
            _0x6a8a65();
        } else if (_0x3bc02c['type'] === 'stats_update') {
            const _0x2e1754 = window['_FB'];
            if (_0x2e1754 && _0x2e1754['_currentUser'] && _0x2e1754['_userData']) {
                const _0x41bd91 = _0x2e1754['_currentUser']['uid'];
                const _0x21321e = _0x3bc02c['patch'] || {};
                const _0x2ca961 = _0x2e1754['_userData'];
                const _0xe7d754 = {
                    'townWins': (_0x2ca961['townWins'] || 0x0) + (_0x21321e['townWins'] || 0x0),
                    'mafiaWins': (_0x2ca961['mafiaWins'] || 0x0) + (_0x21321e['mafiaWins'] || 0x0),
                    'deaths': (_0x2ca961['deaths'] || 0x0) + (_0x21321e['deaths'] || 0x0),
                    'townLosses': (_0x2ca961['townLosses'] || 0x0) + (_0x21321e['townLosses'] || 0x0),
                    'mafiaLosses': (_0x2ca961['mafiaLosses'] || 0x0) + (_0x21321e['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x2e1754['_userData'], _0xe7d754);
                const _0x32b395 = _0x2e1754['doc'](_0x2e1754['db'], 'users', _0x41bd91);
                _0x2e1754['updateDoc'](_0x32b395, _0xe7d754)['catch'](() => {
                });
                if (_0x50141f && _0x50141f['readyState'] === WebSocket['OPEN']) {
                    _0x50141f['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0xe7d754
                    }));
                }
                _0x6a8a65();
            }
        } else if (_0x3bc02c['type'] === 'game_over') {
            _0x3f163b['onStateChange']('LOBBY', ![]);
            _0x30e100([], 'off');
            _0x1ece76 = null;
            _0x5e7278['isDead'] = ![];
            _0x5e7278['hasArrow'] = ![];
            _0x31a16e = [];
            _0x475fc2 = [];
            _0x50ee5a['clear']();
            _0x35d57b['clear']();
            _0x42f0ec['CURRENT_TARGET'] = null;
            _0x379a85 = null;
            _0x682077 = null;
            _0x1732e1 = null;
            _0x47baeb = null;
            _0x100568 = null;
            _0x16ae6a = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x31349e();
            _0x366300('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x3bc02c['type'] === 'chat_log') {
            _0x366300(_0x3bc02c['text'], ![], !!_0x3bc02c['isHost'], _0x3bc02c['sender']);
        } else if (_0x3bc02c['type'] === 'sys_chat') {
            _0x366300(_0x3bc02c['text'], !![]);
        }
    };
}
function _0x366300(_0x17c43a, _0x29855e = ![], _0x2eea60 = ![], _0x5db96e = null) {
    const _0x490293 = document['getElementById']('chat-log-messages');
    const _0x346b04 = document['getElementById']('chat-log-ui');
    const _0x59bfa8 = _0x346b04 ? _0x346b04['scrollHeight'] - _0x346b04['scrollTop'] - _0x346b04['clientHeight'] < 0x1e : !![];
    const _0x4ee916 = document['createElement']('div');
    _0x4ee916['className'] = 'chat-log-line' + (_0x29855e ? '\x20sys-msg' : '');
    if (_0x5db96e) {
        const _0x2b4f1b = document['createElement']('span');
        _0x2b4f1b['className'] = _0x2eea60 ? 'chat-host-name' : 'chat-sender-name';
        _0x2b4f1b['textContent'] = _0x5db96e + ':\x20';
        const _0x218de9 = document['createElement']('span');
        _0x218de9['className'] = 'chat-msg-text';
        _0x218de9['textContent'] = _0x17c43a;
        _0x4ee916['appendChild'](_0x2b4f1b);
        _0x4ee916['appendChild'](_0x218de9);
    } else {
        _0x4ee916['innerText'] = _0x17c43a;
    }
    if (_0x490293)
        _0x490293['appendChild'](_0x4ee916);
    if (_0x346b04 && _0x59bfa8) {
        _0x346b04['scrollTop'] = _0x346b04['scrollHeight'];
    }
    if (_0x490293 && _0x490293['childElementCount'] > 0xc8) {
        _0x490293['removeChild'](_0x490293['firstChild']);
    }
}
function _0x471355(_0x41ac64, _0x198e70, _0x2ba76f) {
    const _0x316e43 = document['createElement']('canvas');
    _0x316e43['width'] = _0x2ba76f;
    _0x316e43['height'] = _0x2ba76f;
    const _0x8c13d3 = _0x316e43['getContext']('2d');
    _0x8c13d3['imageSmoothingEnabled'] = ![];
    const _0x1e9b15 = 'assets/' + (_0x41ac64 || 'body01.png');
    const _0x50fbdc = _0x685ff7(_0x1e9b15);
    if (_0x50fbdc['complete'] && _0x50fbdc['naturalWidth'] > 0x0)
        _0x8c13d3['drawImage'](_0x50fbdc, 0x0, 0x0, _0x2ba76f, _0x2ba76f);
    if (_0x198e70) {
        const _0xf7597f = 'assets/' + _0x198e70;
        const _0x44f3ab = _0x685ff7(_0xf7597f);
        if (_0x44f3ab['complete'] && _0x44f3ab['naturalWidth'] > 0x0)
            _0x8c13d3['drawImage'](_0x44f3ab, 0x0, 0x0, _0x2ba76f, _0x2ba76f);
    }
    return _0x316e43['toDataURL']();
}
let _0x2a5cad = '';
function _0x6a8a65() {
    const _0xa32d4d = document['getElementById']('chat-profile-panel');
    if (!_0xa32d4d)
        return;
    const _0x44a300 = [];
    if (_0x4d9678 !== null) {
        const _0xd542a9 = _0x2bfb82 || 'body01.png';
        const _0x319eaa = _0x5b2dba || 'eyes4.png';
        const _0x63a7f0 = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x44a300['push']({
            'id': _0x4d9678,
            'name': _0x125330,
            'body': _0xd542a9,
            'eyes': _0x319eaa,
            'stats': _0x63a7f0
        });
    }
    for (const _0x4cd6a0 in _0x58f0ec) {
        const _0x33c239 = _0x58f0ec[_0x4cd6a0];
        const _0x2c3f7c = _0x33c239['accountStats'] || null;
        _0x44a300['push']({
            'id': parseInt(_0x4cd6a0),
            'name': _0x33c239['name'],
            'body': _0x33c239['body'] || 'body01.png',
            'eyes': _0x33c239['eyes'] || 'eyes4.png',
            'stats': _0x2c3f7c
        });
    }
    const _0x5ad426 = _0x44a300['map'](_0x177fbd => _0x177fbd['id'] + '_' + _0x177fbd['name'] + '_' + _0x177fbd['body'] + '_' + _0x177fbd['eyes'] + '_' + JSON['stringify'](_0x177fbd['stats']))['join']('|');
    if (_0x5ad426 === _0x2a5cad)
        return;
    _0x2a5cad = _0x5ad426;
    _0xa32d4d['innerHTML'] = '';
    let _0x559c15 = ![];
    for (const _0x2b2dcc of _0x44a300) {
        _0x559c15 = !![];
        const _0x5014c9 = _0x471355(_0x2b2dcc['body'], _0x2b2dcc['eyes'], 0x20);
        const _0x2f1ac8 = document['createElement']('div');
        _0x2f1ac8['className'] = 'chat-pfp-entry';
        const _0x57b845 = document['createElement']('img');
        _0x57b845['src'] = _0x5014c9;
        _0x57b845['alt'] = _0x2b2dcc['name'];
        _0x2f1ac8['appendChild'](_0x57b845);
        const _0x31de7b = document['createElement']('div');
        _0x31de7b['className'] = 'chat-pfp-tooltip';
        let _0x2bce7f = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x2b2dcc['name'] + '</div>';
        const _0x511c71 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x2a7259 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x329108 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x1c1c66 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x45aec3 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x14c4b6 = (_0x3fce09, _0x599788, _0x2e570, _0x209294) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x3fce09 + '<span\x20style=\x22flex:1;color:' + _0x209294 + ';\x22>' + _0x599788 + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x2e570 + '</span></div>';
        if (_0x2b2dcc['stats']) {
            _0x2bce7f += _0x14c4b6(_0x511c71, 'Town\x20Wins', _0x2b2dcc['stats']['townWins'] || 0x0, '#55ee77');
            _0x2bce7f += _0x14c4b6(_0x2a7259, 'Mafia\x20Wins', _0x2b2dcc['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x2bce7f += _0x14c4b6(_0x329108, 'Deaths', _0x2b2dcc['stats']['deaths'] || 0x0, '#aaa');
            _0x2bce7f += _0x14c4b6(_0x1c1c66, 'Town\x20Losses', _0x2b2dcc['stats']['townLosses'] || 0x0, '#6688aa');
            _0x2bce7f += _0x14c4b6(_0x45aec3, 'Mafia\x20Losses', _0x2b2dcc['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x2bce7f += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x31de7b['innerHTML'] = _0x2bce7f;
        _0x2f1ac8['appendChild'](_0x31de7b);
        _0xa32d4d['appendChild'](_0x2f1ac8);
    }
    const _0x1117db = document['getElementById']('chat-log-wrap');
    if (_0x1117db) {
        if (_0x559c15) {
            _0x1117db['classList']['add']('has-profiles');
            _0xa32d4d['style']['display'] = 'flex';
        } else {
            _0x1117db['classList']['remove']('has-profiles');
            _0xa32d4d['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x6a8a65;
let _0x5de588 = -0x1, _0x45004a = -0x1, _0xe567c9 = -0x1, _0x5e181c = 0x0;
function _0x18c1a7() {
    if (!_0x4d9678 || !_0x50141f || _0x50141f['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x131a53 = performance['now']();
    const _0x214980 = _0x131a53 - _0x5e181c;
    const _0x129cc3 = Math['abs'](_0x5e7278['x'] - _0x5de588) > 0.05 || Math['abs'](_0x5e7278['y'] - _0x45004a) > 0.05 || Math['abs'](_0x5e7278['angle'] - _0xe567c9) > 0.02;
    if (!_0x129cc3 && _0x214980 < 0xc8)
        return;
    if (_0x214980 < 0x19)
        return;
    _0x5e181c = _0x131a53;
    _0x5de588 = _0x5e7278['x'];
    _0x45004a = _0x5e7278['y'];
    _0xe567c9 = _0x5e7278['angle'];
    if (!_0x4d9678 || !_0x50141f || _0x50141f['readyState'] !== WebSocket['OPEN'])
        return;
    _0x50141f['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x5e7278['x'],
        'y': _0x5e7278['y'],
        'vx': _0x5e7278['vx'],
        'vy': _0x5e7278['vy'],
        'angle': _0x5e7278['angle'],
        'scale': _0x5e7278['scale'],
        'teleportId': _0x2f207a,
        'clientTimestamp': Date['now']()
    }));
}
function _0x5c2cbc() {
    if (_0x5e7278['isDead'])
        return;
    const _0x45e8ed = _0x42f0ec['MAP']['layers']['find'](_0x1df160 => _0x1df160['name'] === 'walls');
    if (!_0x45e8ed)
        return;
    const _0x4d0d98 = _0x5e7278['scale'];
    const _0x5edc00 = _0x5e7278['width'] * _0x4d0d98 / 0x2;
    for (let _0xdb7d79 = 0x0; _0xdb7d79 < 0x3; _0xdb7d79++) {
        let _0x37e336 = _0x5e7278['x'] + _0x5e7278['width'] / 0x2;
        let _0x802cbd = _0x5e7278['y'] + _0x5e7278['height'] / 0x2;
        const _0x4fc8c6 = Math['floor']((_0x37e336 - _0x5edc00) / _0x42f0ec['MAP']['tileSize']);
        const _0x10ffae = Math['floor']((_0x37e336 + _0x5edc00) / _0x42f0ec['MAP']['tileSize']);
        const _0x58db14 = Math['floor']((_0x802cbd - _0x5edc00) / _0x42f0ec['MAP']['tileSize']);
        const _0x3f6731 = Math['floor']((_0x802cbd + _0x5edc00) / _0x42f0ec['MAP']['tileSize']);
        for (let _0x3b804c = _0x58db14; _0x3b804c <= _0x3f6731; _0x3b804c++) {
            for (let _0xdfd057 = _0x4fc8c6; _0xdfd057 <= _0x10ffae; _0xdfd057++) {
                if (_0xdfd057 < 0x0 || _0xdfd057 >= _0x42f0ec['MAP']['columns'] || _0x3b804c < 0x0 || _0x3b804c >= _0x42f0ec['MAP']['rows'])
                    continue;
                if (_0x45e8ed['data'][_0x3b804c * _0x42f0ec['MAP']['columns'] + _0xdfd057] === 0x0)
                    continue;
                const _0x403056 = _0xdfd057 * _0x42f0ec['MAP']['tileSize'];
                const _0x132795 = _0x3b804c * _0x42f0ec['MAP']['tileSize'];
                const _0x29e959 = _0x37e336 < _0x403056 ? _0x403056 : _0x37e336 > _0x403056 + _0x42f0ec['MAP']['tileSize'] ? _0x403056 + _0x42f0ec['MAP']['tileSize'] : _0x37e336;
                const _0x2b19e4 = _0x802cbd < _0x132795 ? _0x132795 : _0x802cbd > _0x132795 + _0x42f0ec['MAP']['tileSize'] ? _0x132795 + _0x42f0ec['MAP']['tileSize'] : _0x802cbd;
                const _0x1379b2 = _0x37e336 - _0x29e959;
                const _0x2a542d = _0x802cbd - _0x2b19e4;
                const _0x1aeb12 = Math['sqrt'](_0x1379b2 * _0x1379b2 + _0x2a542d * _0x2a542d);
                if (_0x1aeb12 < _0x5edc00) {
                    if (_0x1aeb12 === 0x0) {
                        const _0x1e7711 = _0x37e336 - _0x403056;
                        const _0x47cf3f = _0x403056 + _0x42f0ec['MAP']['tileSize'] - _0x37e336;
                        const _0x2516f7 = _0x802cbd - _0x132795;
                        const _0x361768 = _0x132795 + _0x42f0ec['MAP']['tileSize'] - _0x802cbd;
                        const _0x254e06 = Math['min'](_0x1e7711, _0x47cf3f, _0x2516f7, _0x361768);
                        if (_0x254e06 === _0x1e7711)
                            _0x37e336 = _0x403056 - _0x5edc00;
                        else if (_0x254e06 === _0x47cf3f)
                            _0x37e336 = _0x403056 + _0x42f0ec['MAP']['tileSize'] + _0x5edc00;
                        else if (_0x254e06 === _0x2516f7)
                            _0x802cbd = _0x132795 - _0x5edc00;
                        else
                            _0x802cbd = _0x132795 + _0x42f0ec['MAP']['tileSize'] + _0x5edc00;
                    } else {
                        const _0x203cca = _0x5edc00 - _0x1aeb12;
                        _0x37e336 += _0x1379b2 / _0x1aeb12 * _0x203cca;
                        _0x802cbd += _0x2a542d / _0x1aeb12 * _0x203cca;
                        const _0x488f2b = _0x5e7278['vx'] * (_0x1379b2 / _0x1aeb12) + _0x5e7278['vy'] * (_0x2a542d / _0x1aeb12);
                        if (_0x488f2b < 0x0) {
                            _0x5e7278['vx'] -= _0x488f2b * (_0x1379b2 / _0x1aeb12);
                            _0x5e7278['vy'] -= _0x488f2b * (_0x2a542d / _0x1aeb12);
                        }
                    }
                }
            }
        }
        _0x5e7278['x'] = _0x37e336 - _0x5e7278['width'] / 0x2;
        _0x5e7278['y'] = _0x802cbd - _0x5e7278['height'] / 0x2;
    }
}
function _0x69b6f3(_0x33cca7) {
    const _0xeb8e67 = _0x42f0ec['MAP']['layers']['find'](_0x7c4685 => _0x7c4685['name'] === 'walls');
    if (!_0xeb8e67)
        return;
    const _0x4576e5 = _0x33cca7['width'] / 0x2;
    for (let _0x4c95d4 = 0x0; _0x4c95d4 < 0x2; _0x4c95d4++) {
        let _0x2760f9 = _0x33cca7['x'] + _0x33cca7['width'] / 0x2;
        let _0x14a28a = _0x33cca7['y'] + _0x33cca7['height'] / 0x2;
        const _0x29bb63 = Math['floor']((_0x2760f9 - _0x4576e5) / _0x42f0ec['MAP']['tileSize']);
        const _0x2c1c99 = Math['floor']((_0x2760f9 + _0x4576e5) / _0x42f0ec['MAP']['tileSize']);
        const _0x35ed90 = Math['floor']((_0x14a28a - _0x4576e5) / _0x42f0ec['MAP']['tileSize']);
        const _0x3c54f9 = Math['floor']((_0x14a28a + _0x4576e5) / _0x42f0ec['MAP']['tileSize']);
        for (let _0x37cd07 = _0x35ed90; _0x37cd07 <= _0x3c54f9; _0x37cd07++) {
            for (let _0x57a022 = _0x29bb63; _0x57a022 <= _0x2c1c99; _0x57a022++) {
                if (_0x57a022 < 0x0 || _0x57a022 >= _0x42f0ec['MAP']['columns'] || _0x37cd07 < 0x0 || _0x37cd07 >= _0x42f0ec['MAP']['rows'])
                    continue;
                if (_0xeb8e67['data'][_0x37cd07 * _0x42f0ec['MAP']['columns'] + _0x57a022] === 0x0)
                    continue;
                const _0x5a0aec = _0x57a022 * _0x42f0ec['MAP']['tileSize'];
                const _0x7cac77 = _0x37cd07 * _0x42f0ec['MAP']['tileSize'];
                const _0x35df5c = _0x2760f9 < _0x5a0aec ? _0x5a0aec : _0x2760f9 > _0x5a0aec + _0x42f0ec['MAP']['tileSize'] ? _0x5a0aec + _0x42f0ec['MAP']['tileSize'] : _0x2760f9;
                const _0x3cf6f4 = _0x14a28a < _0x7cac77 ? _0x7cac77 : _0x14a28a > _0x7cac77 + _0x42f0ec['MAP']['tileSize'] ? _0x7cac77 + _0x42f0ec['MAP']['tileSize'] : _0x14a28a;
                const _0x54fe4e = _0x2760f9 - _0x35df5c;
                const _0xf3b47 = _0x14a28a - _0x3cf6f4;
                const _0x1eee2d = Math['sqrt'](_0x54fe4e * _0x54fe4e + _0xf3b47 * _0xf3b47);
                if (_0x1eee2d < _0x4576e5) {
                    if (_0x1eee2d === 0x0) {
                        const _0x504129 = _0x2760f9 - _0x5a0aec;
                        const _0x2ece90 = _0x5a0aec + _0x42f0ec['MAP']['tileSize'] - _0x2760f9;
                        const _0x3d817a = _0x14a28a - _0x7cac77;
                        const _0x1b68cc = _0x7cac77 + _0x42f0ec['MAP']['tileSize'] - _0x14a28a;
                        const _0x38c006 = Math['min'](_0x504129, _0x2ece90, _0x3d817a, _0x1b68cc);
                        if (_0x38c006 === _0x504129)
                            _0x2760f9 = _0x5a0aec - _0x4576e5;
                        else if (_0x38c006 === _0x2ece90)
                            _0x2760f9 = _0x5a0aec + _0x42f0ec['MAP']['tileSize'] + _0x4576e5;
                        else if (_0x38c006 === _0x3d817a)
                            _0x14a28a = _0x7cac77 - _0x4576e5;
                        else
                            _0x14a28a = _0x7cac77 + _0x42f0ec['MAP']['tileSize'] + _0x4576e5;
                    } else {
                        const _0x3a387e = _0x4576e5 - _0x1eee2d;
                        _0x2760f9 += _0x54fe4e / _0x1eee2d * _0x3a387e;
                        _0x14a28a += _0xf3b47 / _0x1eee2d * _0x3a387e;
                    }
                }
            }
        }
        _0x33cca7['x'] = _0x2760f9 - _0x33cca7['width'] / 0x2;
        _0x33cca7['y'] = _0x14a28a - _0x33cca7['height'] / 0x2;
    }
}
function _0x1c2ce5(_0x3e647e) {
    const _0x60c125 = _0x3e647e['width'] / 0x2;
    for (let _0xf4d428 = 0x0; _0xf4d428 < 0x2; _0xf4d428++) {
        let _0x1c3c9e = _0x3e647e['x'] + _0x3e647e['width'] / 0x2;
        let _0x2094cd = _0x3e647e['y'] + _0x3e647e['height'] / 0x2;
        for (const _0xd14e39 of _0x42f0ec['ENTITIES']) {
            const _0x1139d8 = _0x1c3c9e < _0xd14e39['x'] ? _0xd14e39['x'] : _0x1c3c9e > _0xd14e39['x'] + _0xd14e39['w'] ? _0xd14e39['x'] + _0xd14e39['w'] : _0x1c3c9e;
            const _0x8a12f9 = _0x2094cd < _0xd14e39['y'] ? _0xd14e39['y'] : _0x2094cd > _0xd14e39['y'] + _0xd14e39['h'] ? _0xd14e39['y'] + _0xd14e39['h'] : _0x2094cd;
            const _0x30f0e2 = _0x1c3c9e - _0x1139d8;
            const _0x41cc82 = _0x2094cd - _0x8a12f9;
            const _0x407ec9 = Math['sqrt'](_0x30f0e2 * _0x30f0e2 + _0x41cc82 * _0x41cc82);
            if (_0x407ec9 < _0x60c125 && _0x407ec9 > 0x0) {
                const _0x202c0a = _0x60c125 - _0x407ec9;
                const _0xed7179 = _0x30f0e2 / _0x407ec9;
                const _0x6d2613 = _0x41cc82 / _0x407ec9;
                _0x1c3c9e += _0xed7179 * _0x202c0a;
                _0x2094cd += _0x6d2613 * _0x202c0a;
            } else if (_0x407ec9 === 0x0) {
                const _0x148621 = _0x1c3c9e - _0xd14e39['x'];
                const _0x20682b = _0xd14e39['x'] + _0xd14e39['w'] - _0x1c3c9e;
                const _0x3bfdab = _0x2094cd - _0xd14e39['y'];
                const _0x2d3b8d = _0xd14e39['y'] + _0xd14e39['h'] - _0x2094cd;
                const _0x5ad270 = Math['min'](_0x148621, _0x20682b, _0x3bfdab, _0x2d3b8d);
                if (_0x5ad270 === _0x148621)
                    _0x1c3c9e = _0xd14e39['x'] - _0x60c125;
                else if (_0x5ad270 === _0x20682b)
                    _0x1c3c9e = _0xd14e39['x'] + _0xd14e39['w'] + _0x60c125;
                else if (_0x5ad270 === _0x3bfdab)
                    _0x2094cd = _0xd14e39['y'] - _0x60c125;
                else
                    _0x2094cd = _0xd14e39['y'] + _0xd14e39['h'] + _0x60c125;
            }
        }
        _0x3e647e['x'] = _0x1c3c9e - _0x3e647e['width'] / 0x2;
        _0x3e647e['y'] = _0x2094cd - _0x3e647e['height'] / 0x2;
    }
}
function _0x5cadb8() {
    if (_0x5e7278['isDead'])
        return;
    const _0x172135 = _0x5e7278['width'] / 0x2;
    const _0x193d36 = _0x5e7278['x'] + _0x5e7278['width'] / 0x2;
    const _0xfc010d = _0x5e7278['y'] + _0x5e7278['height'] / 0x2;
    for (const _0xa3ddb1 in _0x58f0ec) {
        const _0x426795 = _0x58f0ec[_0xa3ddb1];
        if (_0x426795['isDead'])
            continue;
        const _0x5025f1 = _0x426795['width'] / 0x2;
        const _0x4653a0 = _0x172135 + _0x5025f1;
        const _0x372c43 = (_0x426795['renderX'] ?? _0x426795['x']) + _0x426795['width'] / 0x2;
        const _0x6349f0 = (_0x426795['renderY'] ?? _0x426795['y']) + _0x426795['height'] / 0x2;
        const _0x1c383e = _0x193d36 - _0x372c43;
        const _0x301309 = _0xfc010d - _0x6349f0;
        const _0x38e0a3 = Math['sqrt'](_0x1c383e * _0x1c383e + _0x301309 * _0x301309);
        if (_0x38e0a3 > 0x0 && _0x38e0a3 < _0x4653a0) {
            const _0x4fd35f = _0x4653a0 - _0x38e0a3;
            const _0x3bb2f3 = _0x1c383e / _0x38e0a3;
            const _0x1645df = _0x301309 / _0x38e0a3;
            _0x5e7278['x'] += _0x3bb2f3 * (_0x4fd35f * 0.25);
            _0x5e7278['y'] += _0x1645df * (_0x4fd35f * 0.25);
            _0x426795['x'] -= _0x3bb2f3 * (_0x4fd35f * 0.75);
            _0x426795['y'] -= _0x1645df * (_0x4fd35f * 0.75);
            _0x69b6f3(_0x426795);
            _0x1c2ce5(_0x426795);
            if (_0x426795['renderX'] !== undefined) {
                _0x426795['renderX'] = _0x426795['x'];
                _0x426795['renderY'] = _0x426795['y'];
            }
            const _0x27baf7 = _0x5e7278['vx'] * _0x3bb2f3 + _0x5e7278['vy'] * _0x1645df;
            if (_0x27baf7 < 0x0) {
                _0x5e7278['vx'] -= _0x27baf7 * _0x3bb2f3 * 0.25;
                _0x5e7278['vy'] -= _0x27baf7 * _0x1645df * 0.25;
            }
        }
    }
    _0x5c2cbc();
    _0xcecf0f();
}
function _0xcecf0f() {
    if (_0x5e7278['isDead'])
        return;
    const _0x51fb31 = _0x5e7278['scale'];
    const _0x1434b4 = _0x5e7278['width'] * _0x51fb31 / 0x2;
    for (let _0x5029fa = 0x0; _0x5029fa < 0x2; _0x5029fa++) {
        let _0x1599c6 = _0x5e7278['x'] + _0x5e7278['width'] / 0x2;
        let _0x580121 = _0x5e7278['y'] + _0x5e7278['height'] / 0x2;
        for (const _0x4ed168 of _0x42f0ec['ENTITIES']) {
            const _0x32cf8a = _0x1599c6 < _0x4ed168['x'] ? _0x4ed168['x'] : _0x1599c6 > _0x4ed168['x'] + _0x4ed168['w'] ? _0x4ed168['x'] + _0x4ed168['w'] : _0x1599c6;
            const _0x5b00b4 = _0x580121 < _0x4ed168['y'] ? _0x4ed168['y'] : _0x580121 > _0x4ed168['y'] + _0x4ed168['h'] ? _0x4ed168['y'] + _0x4ed168['h'] : _0x580121;
            const _0x332cb8 = _0x1599c6 - _0x32cf8a;
            const _0x19d080 = _0x580121 - _0x5b00b4;
            const _0x964675 = Math['sqrt'](_0x332cb8 * _0x332cb8 + _0x19d080 * _0x19d080);
            if (_0x964675 < _0x1434b4 && _0x964675 > 0x0) {
                const _0x39bd78 = _0x1434b4 - _0x964675;
                const _0x6aa64f = _0x332cb8 / _0x964675;
                const _0x28fb0b = _0x19d080 / _0x964675;
                _0x1599c6 += _0x6aa64f * _0x39bd78;
                _0x580121 += _0x28fb0b * _0x39bd78;
                const _0x3491f7 = _0x5e7278['vx'] * _0x6aa64f + _0x5e7278['vy'] * _0x28fb0b;
                if (_0x3491f7 < 0x0) {
                    _0x5e7278['vx'] -= _0x3491f7 * _0x6aa64f;
                    _0x5e7278['vy'] -= _0x3491f7 * _0x28fb0b;
                }
            } else if (_0x964675 === 0x0) {
                const _0x2f46a4 = _0x1599c6 - _0x4ed168['x'];
                const _0x215f66 = _0x4ed168['x'] + _0x4ed168['w'] - _0x1599c6;
                const _0x291322 = _0x580121 - _0x4ed168['y'];
                const _0x797134 = _0x4ed168['y'] + _0x4ed168['h'] - _0x580121;
                const _0x4a2366 = Math['min'](_0x2f46a4, _0x215f66, _0x291322, _0x797134);
                if (_0x4a2366 === _0x2f46a4)
                    _0x1599c6 = _0x4ed168['x'] - _0x1434b4;
                else if (_0x4a2366 === _0x215f66)
                    _0x1599c6 = _0x4ed168['x'] + _0x4ed168['w'] + _0x1434b4;
                else if (_0x4a2366 === _0x291322)
                    _0x580121 = _0x4ed168['y'] - _0x1434b4;
                else
                    _0x580121 = _0x4ed168['y'] + _0x4ed168['h'] + _0x1434b4;
            }
        }
        _0x5e7278['x'] = _0x1599c6 - _0x5e7278['width'] / 0x2;
        _0x5e7278['y'] = _0x580121 - _0x5e7278['height'] / 0x2;
    }
}
function _0x5c9151(_0x346067, _0x53b8c1) {
    const _0x424560 = _0x42f0ec['MAP']['layers']['find'](_0x2905d0 => _0x2905d0['name'] === 'trees');
    if (!_0x424560)
        return ![];
    const _0xc6b3d1 = Math['floor'](_0x346067 / _0x42f0ec['MAP']['tileSize']);
    const _0x3ff9ed = Math['floor'](_0x53b8c1 / _0x42f0ec['MAP']['tileSize']);
    if (_0xc6b3d1 < 0x0 || _0xc6b3d1 >= _0x42f0ec['MAP']['columns'] || _0x3ff9ed < 0x0 || _0x3ff9ed >= _0x42f0ec['MAP']['rows'])
        return ![];
    return _0x424560['data'][_0x3ff9ed * _0x42f0ec['MAP']['columns'] + _0xc6b3d1] === 0xb;
}
let _0x4c82d9 = null;
function _0x1182d1() {
    const _0x57f707 = _0x42f0ec['MAP'];
    const _0x5384ee = _0x57f707['layers']['find'](_0x173c78 => _0x173c78['name'] === 'floor2');
    const _0x3283db = _0x57f707['layers']['find'](_0x23f153 => _0x23f153['name'] === 'walls');
    if (!_0x5384ee || !_0x3283db) {
        _0x4c82d9 = null;
        return;
    }
    const _0x1c997e = _0x57f707['columns'];
    const _0x376864 = _0x57f707['rows'];
    const _0x262e58 = [];
    const _0x9d9451 = new Set();
    const _0x585c95 = new Set();
    for (let _0x2ad604 = 0x0; _0x2ad604 < _0x376864; _0x2ad604++) {
        for (let _0x27e9b0 = 0x0; _0x27e9b0 < _0x1c997e; _0x27e9b0++) {
            const _0x5b8c58 = _0x2ad604 * _0x1c997e + _0x27e9b0;
            const _0x134ab3 = _0x5384ee['data'][_0x5b8c58];
            const _0x35378c = _0x3283db['data'][_0x5b8c58];
            if (_0x134ab3 === 0x2 && _0x35378c === 0x0) {
                _0x262e58['push']({
                    'c': _0x27e9b0,
                    'r': _0x2ad604
                });
                _0x585c95['add'](_0x27e9b0 + ',' + _0x2ad604);
            } else if (_0x35378c !== 0x0) {
                _0x9d9451['add'](_0x27e9b0 + ',' + _0x2ad604);
            }
        }
    }
    const _0x584e4e = [
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
        ]
    ];
    for (const {
                c: _0xdada1c,
                r: _0x26ab32
            } of _0x262e58) {
        for (const [_0x2fde8c, _0x413c72] of _0x584e4e) {
            const _0x2079b9 = _0xdada1c + _0x2fde8c, _0x21ca4d = _0x26ab32 + _0x413c72;
            const _0x555064 = _0x2079b9 + ',' + _0x21ca4d;
            if (!_0x585c95['has'](_0x555064)) {
                _0x9d9451['add'](_0x555064);
            }
        }
    }
    _0x4c82d9 = {
        'wallSet': _0x9d9451,
        'floorTiles': _0x262e58,
        'interiorSet': _0x585c95
    };
}
function _0x200329() {
    const _0x2c1e8b = _0x42f0ec['MAP']['layers']['find'](_0x1226ce => _0x1226ce['name'] === 'floor2');
    if (!_0x2c1e8b)
        return ![];
    const _0x541ecf = _0x5e7278['x'] + _0x5e7278['width'] / 0x2;
    const _0x4ae6c1 = _0x5e7278['y'] + _0x5e7278['height'] / 0x2;
    const _0xc72bab = _0x42f0ec['MAP']['tileSize'];
    const _0x5dd585 = Math['floor'](_0x541ecf / _0xc72bab);
    const _0x30d0a7 = Math['floor'](_0x4ae6c1 / _0xc72bab);
    if (_0x5dd585 < 0x0 || _0x5dd585 >= _0x42f0ec['MAP']['columns'] || _0x30d0a7 < 0x0 || _0x30d0a7 >= _0x42f0ec['MAP']['rows'])
        return ![];
    const _0x4b6d33 = _0x30d0a7 * _0x42f0ec['MAP']['columns'] + _0x5dd585;
    if (_0x2c1e8b['data'][_0x4b6d33] === 0x2)
        return !![];
    if (_0x42f0ec['MAP']['doors'] && _0x42f0ec['MAP']['doors'][_0x4b6d33])
        return !![];
    const _0x5c793b = [
        [
            -0xc,
            0x0
        ],
        [
            0xc,
            0x0
        ],
        [
            0x0,
            -0xc
        ],
        [
            0x0,
            0xc
        ]
    ];
    for (const [_0x42a474, _0x3126c8] of _0x5c793b) {
        const _0x2697f0 = Math['floor']((_0x541ecf + _0x42a474) / _0xc72bab);
        const _0x1c956d = Math['floor']((_0x4ae6c1 + _0x3126c8) / _0xc72bab);
        if (_0x2697f0 >= 0x0 && _0x2697f0 < _0x42f0ec['MAP']['columns'] && _0x1c956d >= 0x0 && _0x1c956d < _0x42f0ec['MAP']['rows']) {
            const _0x593f6d = _0x1c956d * _0x42f0ec['MAP']['columns'] + _0x2697f0;
            if (_0x2c1e8b['data'][_0x593f6d] === 0x2 || _0x42f0ec['MAP']['doors'] && _0x42f0ec['MAP']['doors'][_0x593f6d]) {
                return !![];
            }
        }
    }
    return ![];
}
let _0xd25d54 = null, _0x37273a = null;
function _0x114c6a() {
    if (_0x5e7278['isDead']) {
        _0x42f0ec['SHADOW']['polygon'] = null;
        _0xd25d54 = null;
        return;
    }
    const _0x18d64c = _0x42f0ec['MAP'];
    const _0x57e749 = _0x42f0ec['SHADOW'];
    const _0x2bbc04 = _0x18d64c['tileSize'];
    if (!_0x4c82d9)
        _0x1182d1();
    if (!_0x4c82d9) {
        _0x57e749['polygon'] = null;
        _0xd25d54 = null;
        return;
    }
    const {
        wallSet: _0x5b8512,
        floorTiles: _0x36a4f6
    } = _0x4c82d9;
    if (_0x36a4f6['length'] === 0x0) {
        _0x57e749['polygon'] = null;
        _0xd25d54 = null;
        return;
    }
    if (!_0x200329()) {
        _0x57e749['polygon'] = null;
        _0xd25d54 = null;
        return;
    }
    const _0x261688 = _0x5e7278['x'] + _0x5e7278['width'] / 0x2;
    const _0xb0fddc = _0x5e7278['y'] + _0x5e7278['height'] / 0x2;
    if (_0xd25d54 !== null && _0x57e749['polygon'] && Math['hypot'](_0x261688 - _0xd25d54, _0xb0fddc - _0x37273a) < 0.5) {
        return;
    }
    _0xd25d54 = _0x261688;
    _0x37273a = _0xb0fddc;
    const _0x1d9008 = Math['floor'](_0x261688 / _0x2bbc04);
    const _0x354cb5 = Math['floor'](_0xb0fddc / _0x2bbc04);
    const _0x406455 = Math['max'](0x0, _0x1d9008 - 0x8);
    const _0x5cbf06 = Math['min'](_0x18d64c['columns'] - 0x1, _0x1d9008 + 0x8);
    const _0x1afed0 = Math['max'](0x0, _0x354cb5 - 0x8);
    const _0xeccd0 = Math['min'](_0x18d64c['rows'] - 0x1, _0x354cb5 + 0x8);
    const _0x5e7d4f = [];
    const _0x54a8f9 = [];
    for (let _0x21a17b = _0x1afed0; _0x21a17b <= _0xeccd0; _0x21a17b++) {
        for (let _0x5dc0ee = _0x406455; _0x5dc0ee <= _0x5cbf06; _0x5dc0ee++) {
            if (!_0x5b8512['has'](_0x5dc0ee + ',' + _0x21a17b))
                continue;
            const _0x57eac7 = _0x5dc0ee * _0x2bbc04;
            const _0x289819 = _0x21a17b * _0x2bbc04;
            const _0x97c9e = _0x57eac7 + _0x2bbc04;
            const _0x903327 = _0x289819 + _0x2bbc04;
            if (!_0x5b8512['has'](_0x5dc0ee + ',' + (_0x21a17b - 0x1))) {
                _0x5e7d4f['push'](_0x57eac7, _0x289819, _0x97c9e, _0x289819);
                _0x54a8f9['push'](_0x57eac7, _0x289819, _0x97c9e, _0x289819);
            }
            if (!_0x5b8512['has'](_0x5dc0ee + ',' + (_0x21a17b + 0x1))) {
                _0x5e7d4f['push'](_0x57eac7, _0x903327, _0x97c9e, _0x903327);
                _0x54a8f9['push'](_0x57eac7, _0x903327, _0x97c9e, _0x903327);
            }
            if (!_0x5b8512['has'](_0x5dc0ee - 0x1 + ',' + _0x21a17b)) {
                _0x5e7d4f['push'](_0x57eac7, _0x289819, _0x57eac7, _0x903327);
                _0x54a8f9['push'](_0x57eac7, _0x289819, _0x57eac7, _0x903327);
            }
            if (!_0x5b8512['has'](_0x5dc0ee + 0x1 + ',' + _0x21a17b)) {
                _0x5e7d4f['push'](_0x97c9e, _0x289819, _0x97c9e, _0x903327);
                _0x54a8f9['push'](_0x97c9e, _0x289819, _0x97c9e, _0x903327);
            }
        }
    }
    const _0x2c6229 = new Set();
    const _0x583dc2 = [];
    const _0x31a79c = 0.0001;
    for (let _0x393055 = 0x0; _0x393055 < _0x54a8f9['length']; _0x393055 += 0x2) {
        const _0x52cbd7 = _0x54a8f9[_0x393055];
        const _0x2c21d4 = _0x54a8f9[_0x393055 + 0x1];
        const _0x238e2b = Math['atan2'](_0x2c21d4 - _0xb0fddc, _0x52cbd7 - _0x261688);
        const _0x27b054 = Math['round'](_0x238e2b * 0x9c40);
        if (!_0x2c6229['has'](_0x27b054 - 0x1)) {
            _0x2c6229['add'](_0x27b054 - 0x1);
            _0x583dc2['push'](_0x238e2b - _0x31a79c);
        }
        if (!_0x2c6229['has'](_0x27b054)) {
            _0x2c6229['add'](_0x27b054);
            _0x583dc2['push'](_0x238e2b);
        }
        if (!_0x2c6229['has'](_0x27b054 + 0x1)) {
            _0x2c6229['add'](_0x27b054 + 0x1);
            _0x583dc2['push'](_0x238e2b + _0x31a79c);
        }
    }
    for (let _0x477174 = 0x0; _0x477174 < 0x10; _0x477174++) {
        const _0x21651a = -Math['PI'] + _0x477174 * 0x2 * Math['PI'] / 0x10;
        _0x583dc2['push'](_0x21651a);
    }
    _0x583dc2['sort']((_0x52259f, _0x42f9ec) => _0x52259f - _0x42f9ec);
    const _0x48fcef = 0xc * _0x2bbc04;
    const _0x41fb29 = [];
    for (let _0x5a30e7 = 0x0; _0x5a30e7 < _0x583dc2['length']; _0x5a30e7++) {
        const _0x5776da = _0x583dc2[_0x5a30e7];
        const _0x71a259 = Math['cos'](_0x5776da);
        const _0x164dd9 = Math['sin'](_0x5776da);
        let _0x348017 = _0x48fcef;
        for (let _0x48a1ef = 0x0; _0x48a1ef < _0x5e7d4f['length']; _0x48a1ef += 0x4) {
            const _0x3b6111 = _0x5e7d4f[_0x48a1ef], _0xbdbed8 = _0x5e7d4f[_0x48a1ef + 0x1];
            const _0xba9d44 = _0x5e7d4f[_0x48a1ef + 0x2], _0x35b26c = _0x5e7d4f[_0x48a1ef + 0x3];
            const _0x2b248d = _0xba9d44 - _0x3b6111;
            const _0x5081a0 = _0x35b26c - _0xbdbed8;
            const _0x3f583b = _0x71a259 * _0x5081a0 - _0x164dd9 * _0x2b248d;
            if (Math['abs'](_0x3f583b) < 1e-9)
                continue;
            const _0x14daea = _0x3b6111 - _0x261688;
            const _0x34ff45 = _0xbdbed8 - _0xb0fddc;
            const _0x19184a = (_0x14daea * _0x5081a0 - _0x34ff45 * _0x2b248d) / _0x3f583b;
            const _0x152bfe = (_0x14daea * _0x164dd9 - _0x34ff45 * _0x71a259) / _0x3f583b;
            if (_0x19184a > 0x1 && _0x152bfe >= 0x0 && _0x152bfe <= 0x1 && _0x19184a < _0x348017) {
                _0x348017 = _0x19184a;
            }
        }
        _0x41fb29['push'](_0x261688 + _0x71a259 * _0x348017, _0xb0fddc + _0x164dd9 * _0x348017);
    }
    _0x57e749['polygon'] = _0x41fb29['length'] >= 0x6 ? _0x41fb29 : null;
}
function _0x758d6f(_0x5562de, _0x5006cc, _0x179dae) {
    if (_0x5e7278['isDead'])
        return;
    if (!_0x4c82d9)
        _0x1182d1();
    if (!_0x4c82d9)
        return;
    const {floorTiles: _0x292a75} = _0x4c82d9;
    if (_0x292a75['length'] === 0x0)
        return;
    const _0x36e5ca = _0x42f0ec['SHADOW'];
    const _0x22f12f = _0x42f0ec['MAP']['tileSize'];
    const _0x56ecc3 = _0x42f0ec['CAMERA']['width'];
    const _0x412b0e = _0x42f0ec['CAMERA']['height'];
    if (!_0x42f0ec['SHADOW']['_buf'] || _0x42f0ec['SHADOW']['_buf']['width'] !== _0x56ecc3 || _0x42f0ec['SHADOW']['_buf']['height'] !== _0x412b0e) {
        _0x42f0ec['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x42f0ec['SHADOW']['_buf']['width'] = _0x56ecc3;
        _0x42f0ec['SHADOW']['_buf']['height'] = _0x412b0e;
    }
    const _0x2b31e4 = _0x42f0ec['SHADOW']['_buf'];
    const _0x169178 = _0x2b31e4['getContext']('2d');
    _0x169178['clearRect'](0x0, 0x0, _0x56ecc3, _0x412b0e);
    _0x169178['fillStyle'] = 'rgba(0,0,0,0.95)';
    _0x169178['beginPath']();
    for (const {
                c: _0x57d9ed,
                r: _0x59b514
            } of _0x292a75) {
        const _0x11b8cf = Math['round'](_0x57d9ed * _0x22f12f - _0x5006cc), _0x503fad = Math['round'](_0x59b514 * _0x22f12f - _0x179dae);
        if (_0x11b8cf > _0x56ecc3 || _0x503fad > _0x412b0e || _0x11b8cf + _0x22f12f < 0x0 || _0x503fad + _0x22f12f < 0x0)
            continue;
        _0x169178['rect'](_0x11b8cf, _0x503fad, _0x22f12f + 0x1, _0x22f12f + 0x1);
    }
    _0x169178['fill']();
    if (_0x200329() && _0x36e5ca['polygon'] && _0x36e5ca['polygon']['length'] >= 0x6) {
        _0x169178['globalCompositeOperation'] = 'destination-out';
        _0x169178['fillStyle'] = 'rgba(0,0,0,1)';
        const _0x326490 = _0x36e5ca['polygon'];
        _0x169178['beginPath']();
        _0x169178['moveTo'](_0x326490[0x0] - _0x5006cc, _0x326490[0x1] - _0x179dae);
        for (let _0x515dd8 = 0x2; _0x515dd8 < _0x326490['length']; _0x515dd8 += 0x2) {
            _0x169178['lineTo'](_0x326490[_0x515dd8] - _0x5006cc, _0x326490[_0x515dd8 + 0x1] - _0x179dae);
        }
        _0x169178['closePath']();
        _0x169178['fill']();
        _0x169178['globalCompositeOperation'] = 'source-over';
    }
    _0x5562de['drawImage'](_0x2b31e4, 0x0, 0x0);
}
function _0x41b004(_0x1f1c37) {
    let _0x55fccd = 0x0, _0x3b128c = 0x0;
    const _0x26ba14 = _0x42f0ec['INPUTS']['mouseX'] / _0x42f0ec['SYSTEM']['viewScale'];
    const _0x2f41e7 = _0x42f0ec['INPUTS']['mouseY'] / _0x42f0ec['SYSTEM']['viewScale'];
    const _0x542514 = _0x5e7278['x'] - _0x42f0ec['CAMERA']['x'] + _0x5e7278['width'] / 0x2;
    const _0x3a02a1 = _0x5e7278['y'] - _0x42f0ec['CAMERA']['y'] + _0x5e7278['height'] / 0x2;
    const _0x5bda00 = Math['atan2'](_0x2f41e7 - _0x3a02a1, _0x26ba14 - _0x542514);
    if (_0x5cd9d3 !== 0x0 || _0x2bc798 !== 0x0) {
        _0x55fccd = _0x5cd9d3;
        _0x3b128c = _0x2bc798;
    } else if (_0x2f17a2) {
        let _0x296991 = 0x0, _0x42914a = 0x0;
        if (_0x42f0ec['INPUTS']['keys']['w'] || _0x42f0ec['INPUTS']['keys']['arrowup'])
            _0x296991 += 0x1;
        if (_0x42f0ec['INPUTS']['keys']['s'] || _0x42f0ec['INPUTS']['keys']['arrowdown'])
            _0x296991 -= 0x1;
        if (_0x42f0ec['INPUTS']['keys']['d'] || _0x42f0ec['INPUTS']['keys']['arrowright'])
            _0x42914a += 0x1;
        if (_0x42f0ec['INPUTS']['keys']['a'] || _0x42f0ec['INPUTS']['keys']['arrowleft'])
            _0x42914a -= 0x1;
        if (_0x296991 !== 0x0 || _0x42914a !== 0x0) {
            const _0x3ff31c = _0x5bda00 + Math['atan2'](_0x42914a, _0x296991);
            _0x55fccd = Math['cos'](_0x3ff31c);
            _0x3b128c = Math['sin'](_0x3ff31c);
        }
    } else {
        if (_0x42f0ec['INPUTS']['keys']['w'] || _0x42f0ec['INPUTS']['keys']['arrowup'])
            _0x3b128c -= 0x1;
        if (_0x42f0ec['INPUTS']['keys']['s'] || _0x42f0ec['INPUTS']['keys']['arrowdown'])
            _0x3b128c += 0x1;
        if (_0x42f0ec['INPUTS']['keys']['a'] || _0x42f0ec['INPUTS']['keys']['arrowleft'])
            _0x55fccd -= 0x1;
        if (_0x42f0ec['INPUTS']['keys']['d'] || _0x42f0ec['INPUTS']['keys']['arrowright'])
            _0x55fccd += 0x1;
        const _0x354f00 = _0x55fccd !== 0x0 || _0x3b128c !== 0x0;
        if (_0x354f00) {
            const _0x5c5df5 = Math['sqrt'](_0x55fccd * _0x55fccd + _0x3b128c * _0x3b128c);
            _0x55fccd /= _0x5c5df5;
            _0x3b128c /= _0x5c5df5;
        }
    }
    if (_0x42f0ec['GAME_STATE'] === 'NIGHT' && (_0x1ece76 === 'Skinwalker' || _0x1ece76 === 'Blackmailer')) {
        if (_0x42f0ec['NIGHT_ABILITY_OPEN'] || !_0x42f0ec['CURRENT_TARGET']) {
            _0x55fccd = 0x0;
            _0x3b128c = 0x0;
            _0x5e7278['vx'] = 0x0;
            _0x5e7278['vy'] = 0x0;
            _0x5e7278['x'] = _0x42f0ec['MAP']['columns'] * _0x42f0ec['MAP']['tileSize'] / 0x2 - _0x5e7278['width'] / 0x2;
            _0x5e7278['y'] = _0x42f0ec['MAP']['rows'] * _0x42f0ec['MAP']['tileSize'] / 0x2 - _0x5e7278['height'] / 0x2;
        }
    }
    const _0xafaf07 = _0x55fccd !== 0x0 || _0x3b128c !== 0x0;
    const _0x55d369 = (_0x42f0ec['INPUTS']['keys']['shift'] || _0x305036 || _0xe7298b) && _0xafaf07;
    _0x5e7278['bopTimer'] = _0x55d369 ? _0x5e7278['bopTimer'] + _0x1f1c37 : 0x0;
    _0x5e7278['scale'] = 0x1 + (_0x5e7278['bopTimer'] > 0x0 ? Math['sin'](_0x5e7278['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x2036c7 = Math['pow'](0.001, _0x1f1c37);
    const _0x2b427 = _0x55d369 ? 0x74a : 0x5d5;
    _0x5e7278['vx'] += _0x55fccd * _0x2b427 * _0x1f1c37;
    _0x5e7278['vy'] += _0x3b128c * _0x2b427 * _0x1f1c37;
    _0x5e7278['vx'] *= _0x2036c7;
    _0x5e7278['vy'] *= _0x2036c7;
    _0x5e7278['x'] += _0x5e7278['vx'] * _0x1f1c37;
    _0x5e7278['y'] += _0x5e7278['vy'] * _0x1f1c37;
    for (let _0x2ac55f = 0x0; _0x2ac55f < 0x3; _0x2ac55f++)
        _0x5c2cbc();
    for (let _0x2a20d0 = 0x0; _0x2a20d0 < 0x2; _0x2a20d0++)
        _0xcecf0f();
    for (let _0x2381f1 = 0x0; _0x2381f1 < 0x2; _0x2381f1++)
        _0x5cadb8();
    if (_0x5e7278['x'] < 0x0)
        _0x5e7278['x'] = 0x0;
    if (_0x5e7278['y'] < 0x0)
        _0x5e7278['y'] = 0x0;
    if (_0x5e7278['x'] + _0x5e7278['width'] > _0x42f0ec['MAP']['columns'] * _0x42f0ec['MAP']['tileSize'])
        _0x5e7278['x'] = _0x42f0ec['MAP']['columns'] * _0x42f0ec['MAP']['tileSize'] - _0x5e7278['width'];
    if (_0x5e7278['y'] + _0x5e7278['height'] > _0x42f0ec['MAP']['rows'] * _0x42f0ec['MAP']['tileSize'])
        _0x5e7278['y'] = _0x42f0ec['MAP']['rows'] * _0x42f0ec['MAP']['tileSize'] - _0x5e7278['height'];
    if (_0x5bc893) {
        _0x5e7278['angle'] = _0x2f32ce + Math['PI'] / 0x2;
    } else if (_0x5cd9d3 !== 0x0 || _0x2bc798 !== 0x0) {
        _0x5e7278['angle'] = Math['atan2'](_0x2bc798, _0x5cd9d3) + Math['PI'] / 0x2;
    } else if (!_0x495a41) {
        _0x5e7278['angle'] = _0x5bda00 + Math['PI'] / 0x2;
    }
    const _0xe71043 = _0x5e7278['x'] + _0x5e7278['width'] / 0x2 - _0x42f0ec['CAMERA']['width'] / 0x2;
    const _0x3851fb = _0x5e7278['y'] + _0x5e7278['height'] / 0x2 - _0x42f0ec['CAMERA']['height'] / 0x2;
    if (_0x42f0ec['CAMERA']['x'] === null || isNaN(_0x42f0ec['CAMERA']['x']) || !isFinite(_0x42f0ec['CAMERA']['x'])) {
        _0x42f0ec['CAMERA']['x'] = _0xe71043;
        _0x42f0ec['CAMERA']['y'] = _0x3851fb;
    } else {
        const _0x2707a2 = 0x1 - Math['exp'](-Math['max'](0x0, _0x1f1c37) * 0x28);
        _0x42f0ec['CAMERA']['x'] += (_0xe71043 - _0x42f0ec['CAMERA']['x']) * _0x2707a2;
        _0x42f0ec['CAMERA']['y'] += (_0x3851fb - _0x42f0ec['CAMERA']['y']) * _0x2707a2;
    }
    for (const _0x3044b7 in _0x58f0ec) {
        const _0x2bf938 = _0x58f0ec[_0x3044b7];
        if (_0x2bf938['renderX'] === undefined) {
            _0x2bf938['renderX'] = _0x2bf938['x'];
            _0x2bf938['renderY'] = _0x2bf938['y'];
            _0x2bf938['renderAngle'] = _0x2bf938['angle'] || 0x0;
        }
        const _0x13b236 = _0x2bf938['x'] + (_0x2bf938['vx'] || 0x0) * _0x1f1c37;
        const _0x4a0958 = _0x2bf938['y'] + (_0x2bf938['vy'] || 0x0) * _0x1f1c37;
        _0x2bf938['x'] = _0x13b236;
        _0x2bf938['y'] = _0x4a0958;
        const _0x401639 = 0x1 - Math['exp'](-_0x1f1c37 * 0x12);
        const _0x3a190d = _0x2bf938['x'] - _0x2bf938['renderX'], _0x2ae86a = _0x2bf938['y'] - _0x2bf938['renderY'];
        const _0xefdaa1 = Math['sqrt'](_0x3a190d * _0x3a190d + _0x2ae86a * _0x2ae86a);
        const _0xbe1ef4 = 0xc8;
        if (_0xefdaa1 > _0xbe1ef4) {
            _0x2bf938['renderX'] = _0x2bf938['x'] - _0x3a190d / _0xefdaa1 * _0xbe1ef4;
            _0x2bf938['renderY'] = _0x2bf938['y'] - _0x2ae86a / _0xefdaa1 * _0xbe1ef4;
        }
        _0x2bf938['renderX'] += (_0x2bf938['x'] - _0x2bf938['renderX']) * _0x401639;
        _0x2bf938['renderY'] += (_0x2bf938['y'] - _0x2bf938['renderY']) * _0x401639;
        let _0x250353 = (_0x2bf938['angle'] || 0x0) - _0x2bf938['renderAngle'];
        while (_0x250353 < -Math['PI'])
            _0x250353 += Math['PI'] * 0x2;
        while (_0x250353 > Math['PI'])
            _0x250353 -= Math['PI'] * 0x2;
        _0x2bf938['renderAngle'] += _0x250353 * (0x1 - Math['exp'](-_0x1f1c37 * 0x14));
    }
    if (_0x42f0ec['GAME_STATE'] === 'NIGHT') {
        _0x38e331 = Math['min'](0.6, _0x38e331 + _0x1f1c37 * 0.5);
    } else {
        _0x38e331 = Math['max'](0x0, _0x38e331 - _0x1f1c37 * 0.5);
    }
    if (_0x1615f6 > 0x0) {
        if (performance['now']() > _0x2df96a) {
            _0x1615f6 = Math['max'](0x0, _0x1615f6 - _0x1f1c37 * 0x2);
        }
    }
    _0x114c6a();
    _0x18c1a7();
}
function _0x23fbe2(_0x34dc7c, _0x3bcc91, _0x319b71, _0x11ef82, _0x41417c = !![]) {
    _0x34dc7c['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x3cd4b5 = _0x34dc7c['measureText'](_0x3bcc91)['width'];
    const _0x5e368d = _0x3cd4b5 + 0x18;
    const _0x5a82f0 = 0x1c;
    _0x34dc7c['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x34dc7c['beginPath']();
    if (_0x34dc7c['roundRect']) {
        _0x34dc7c['roundRect'](_0x319b71 - _0x5e368d / 0x2, _0x11ef82 - _0x5a82f0, _0x5e368d, _0x5a82f0, 0x6);
    } else {
        _0x34dc7c['rect'](_0x319b71 - _0x5e368d / 0x2, _0x11ef82 - _0x5a82f0, _0x5e368d, _0x5a82f0);
    }
    _0x34dc7c['fill']();
    if (_0x41417c) {
        _0x34dc7c['beginPath']();
        _0x34dc7c['moveTo'](_0x319b71 - 0x6, _0x11ef82);
        _0x34dc7c['lineTo'](_0x319b71 + 0x6, _0x11ef82);
        _0x34dc7c['lineTo'](_0x319b71, _0x11ef82 + 0x6);
        _0x34dc7c['fill']();
    }
    _0x34dc7c['fillStyle'] = '#ffffff';
    _0x34dc7c['textAlign'] = 'center';
    _0x34dc7c['textBaseline'] = 'middle';
    _0x34dc7c['fillText'](_0x3bcc91, _0x319b71, _0x11ef82 - _0x5a82f0 / 0x2 + 0x1);
}
function _0x596dc2(_0x5f4942, _0x12b09f, _0x55dd92, _0x5d6699) {
    if (!_0x12b09f || _0x12b09f['length'] === 0x0)
        return;
    let _0x52aa9f = _0x5d6699;
    for (let _0x39791c = 0x0; _0x39791c < _0x12b09f['length']; _0x39791c++) {
        _0x23fbe2(_0x5f4942, _0x12b09f[_0x39791c]['text'], _0x55dd92, _0x52aa9f, _0x39791c === 0x0);
        _0x52aa9f -= 0x24;
    }
}
function _0x4fab5a() {
    if (!_0x42f0ec['SYSTEM']['isReady'])
        return;
    if (_0x42f0ec['MAP']['layers'] && _0x42f0ec['MAP']['layers']['length'] > 0x0 && _0x314f9a['complete'] && _0x314f9a['naturalWidth'] > 0x0) {
        if (!_0x42f0ec['MAP']['_prerenderedWithTileset'] || !_0x42f0ec['MAP']['bgChunks'] || _0x42f0ec['MAP']['bgChunks']['length'] === 0x0) {
            _0x3443fa();
        }
    }
    if (!_0x42f0ec['MAP']['bgChunks'] || _0x42f0ec['MAP']['bgChunks']['length'] === 0x0 || !_0x42f0ec['MAP']['bgChunks'][0x0] || _0x42f0ec['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x35e20d['fillStyle'] = '#000000';
    _0x35e20d['fillRect'](0x0, 0x0, _0xe7b332['width'], _0xe7b332['height']);
    _0x35e20d['save']();
    try {
        _0x35e20d['scale'](_0x42f0ec['SYSTEM']['viewScale'], _0x42f0ec['SYSTEM']['viewScale']);
        _0x35e20d['imageSmoothingEnabled'] = ![];
        const _0x231ff2 = Math['floor'](_0x42f0ec['CAMERA']['x'] || 0x0);
        const _0x5ce023 = Math['floor'](_0x42f0ec['CAMERA']['y'] || 0x0);
        const _0x5c7180 = Math['max'](0x0, Math['floor'](_0x231ff2 / _0x42f0ec['MAP']['chunkSize']));
        const _0x32b5ca = Math['min'](_0x42f0ec['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x231ff2 + _0x42f0ec['CAMERA']['width']) / _0x42f0ec['MAP']['chunkSize']));
        const _0x4fdd86 = Math['max'](0x0, Math['floor'](_0x5ce023 / _0x42f0ec['MAP']['chunkSize']));
        const _0x2537f7 = Math['min'](_0x42f0ec['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x5ce023 + _0x42f0ec['CAMERA']['height']) / _0x42f0ec['MAP']['chunkSize']));
        for (let _0x5290f6 = _0x4fdd86; _0x5290f6 <= _0x2537f7; _0x5290f6++)
            for (let _0x4e2772 = _0x5c7180; _0x4e2772 <= _0x32b5ca; _0x4e2772++) {
                const _0x32fbb8 = _0x4e2772 * _0x42f0ec['MAP']['chunkSize'] - _0x231ff2;
                const _0x263555 = _0x5290f6 * _0x42f0ec['MAP']['chunkSize'] - _0x5ce023;
                _0x35e20d['drawImage'](_0x42f0ec['MAP']['bgChunks'][_0x5290f6][_0x4e2772], _0x32fbb8, _0x263555, _0x42f0ec['MAP']['chunkSize'] + 0x1, _0x42f0ec['MAP']['chunkSize'] + 0x1);
            }
        const _0x126ce9 = _0x685ff7('assets/blood\x20splatter.png');
        if (_0x31a16e && _0x31a16e['length'] > 0x0) {
            for (const _0x5e07d4 of _0x31a16e) {
                const _0x102698 = _0x5e07d4['x'] - _0x231ff2;
                const _0x2a5a41 = _0x5e07d4['y'] - _0x5ce023;
                if (_0x126ce9['complete'] && _0x126ce9['naturalWidth'] > 0x0) {
                    _0x35e20d['drawImage'](_0x126ce9, _0x102698 - 0x20, _0x2a5a41 - 0x20, 0x40, 0x40);
                } else {
                    _0x35e20d['fillStyle'] = 'rgba(160,\x200,\x200,\x200.75)';
                    _0x35e20d['beginPath']();
                    _0x35e20d['arc'](_0x102698, _0x2a5a41, 0x16, 0x0, Math['PI'] * 0x2);
                    _0x35e20d['fill']();
                }
            }
        }
        const _0x127c60 = _0x685ff7('assets/blood.png');
        if (_0x475fc2 && _0x475fc2['length'] > 0x0) {
            for (const _0x5c08de of _0x475fc2) {
                const _0xcc616a = _0x5c08de['x'] - _0x231ff2;
                const _0x468af5 = _0x5c08de['y'] - _0x5ce023;
                if (_0x127c60['complete'] && _0x127c60['naturalWidth'] > 0x0) {
                    _0x35e20d['drawImage'](_0x127c60, _0xcc616a - 0xc, _0x468af5 - 0xc, 0x18, 0x18);
                } else {
                    _0x35e20d['fillStyle'] = 'rgba(180,\x200,\x200,\x200.8)';
                    _0x35e20d['beginPath']();
                    _0x35e20d['arc'](_0xcc616a, _0x468af5, 0x5, 0x0, Math['PI'] * 0x2);
                    _0x35e20d['fill']();
                }
            }
        }
        if (_0x1ce3c3['complete'] && _0x1ce3c3['naturalWidth'] > 0x0) {
            const _0x562fb9 = _0x42f0ec['MAP']['tileSize'];
            const _0x196b6c = _0x562fb9 * 0xa;
            const _0x298c4a = _0x42f0ec['MAP']['columns'] / 0x2 * _0x562fb9 - _0x196b6c / 0x2 - _0x231ff2;
            const _0x22543a = _0x42f0ec['MAP']['rows'] / 0x2 * _0x562fb9 - _0x196b6c / 0x2 - _0x5ce023;
            _0x35e20d['imageSmoothingEnabled'] = ![];
            _0x35e20d['drawImage'](_0x1ce3c3, _0x298c4a, _0x22543a, _0x196b6c, _0x196b6c);
        }
        if (_0x19680f['complete'] && _0x19680f['naturalWidth'] > 0x0) {
            _0x42f0ec['ENTITIES']['forEach'](_0x5dee79 => {
                if (_0x5dee79['type'] !== 'table')
                    return;
                _0x35e20d['save']();
                _0x35e20d['imageSmoothingEnabled'] = ![];
                const _0x399e22 = _0x19680f['naturalWidth'] >= _0x19680f['naturalHeight'];
                const _0x1cb851 = _0x5dee79['w'] >= _0x5dee79['h'];
                if (_0x399e22 === _0x1cb851) {
                    _0x35e20d['drawImage'](_0x19680f, _0x5dee79['x'] - _0x231ff2, _0x5dee79['y'] - _0x5ce023, _0x5dee79['w'], _0x5dee79['h']);
                } else {
                    _0x35e20d['translate'](_0x5dee79['x'] - _0x231ff2 + _0x5dee79['w'] / 0x2, _0x5dee79['y'] - _0x5ce023 + _0x5dee79['h'] / 0x2);
                    _0x35e20d['rotate'](Math['PI'] / 0x2);
                    _0x35e20d['drawImage'](_0x19680f, -_0x5dee79['h'] / 0x2, -_0x5dee79['w'] / 0x2, _0x5dee79['h'], _0x5dee79['w']);
                }
                _0x35e20d['restore']();
            });
        } else {
            _0x42f0ec['ENTITIES']['forEach'](_0x563963 => {
                if (_0x563963['type'] !== 'table')
                    return;
                _0x35e20d['save']();
                _0x35e20d['fillStyle'] = '#6b4423';
                _0x35e20d['fillRect'](_0x563963['x'] - _0x231ff2, _0x563963['y'] - _0x5ce023, _0x563963['w'], _0x563963['h']);
                _0x35e20d['strokeStyle'] = '#422810';
                _0x35e20d['lineWidth'] = 0x3;
                _0x35e20d['strokeRect'](_0x563963['x'] - _0x231ff2 + 0x1, _0x563963['y'] - _0x5ce023 + 0x1, _0x563963['w'] - 0x2, _0x563963['h'] - 0x2);
                _0x35e20d['fillStyle'] = '#82532a';
                _0x35e20d['fillRect'](_0x563963['x'] - _0x231ff2 + 0x4, _0x563963['y'] - _0x5ce023 + 0x4, _0x563963['w'] - 0x8, _0x563963['h'] - 0x8);
                _0x35e20d['restore']();
            });
        }
        if (_0x40f576) {
            if (_0x42f0ec['MAP']['wallChunks'] && _0x42f0ec['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x1e0d93 = _0x4fdd86; _0x1e0d93 <= _0x2537f7; _0x1e0d93++) {
                    for (let _0x42f059 = _0x5c7180; _0x42f059 <= _0x32b5ca; _0x42f059++) {
                        if (!_0x42f0ec['MAP']['wallChunks'][_0x1e0d93] || !_0x42f0ec['MAP']['wallChunks'][_0x1e0d93][_0x42f059])
                            continue;
                        const _0x4cb1e3 = _0x42f059 * _0x42f0ec['MAP']['chunkSize'] - _0x231ff2;
                        const _0x27f1a0 = _0x1e0d93 * _0x42f0ec['MAP']['chunkSize'] - _0x5ce023;
                        _0x35e20d['drawImage'](_0x42f0ec['MAP']['wallChunks'][_0x1e0d93][_0x42f059], _0x4cb1e3, _0x27f1a0, _0x42f0ec['MAP']['chunkSize'] + 0x1, _0x42f0ec['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x7bca78 = _0x4fdd86; _0x7bca78 <= _0x2537f7; _0x7bca78++) {
                for (let _0x231f3e = _0x5c7180; _0x231f3e <= _0x32b5ca; _0x231f3e++) {
                    const _0x4d4bc3 = _0x231f3e * _0x42f0ec['MAP']['chunkSize'] - _0x231ff2;
                    const _0x2ede5d = _0x7bca78 * _0x42f0ec['MAP']['chunkSize'] - _0x5ce023;
                    _0x35e20d['drawImage'](_0x42f0ec['MAP']['fgChunks'][_0x7bca78][_0x231f3e], _0x4d4bc3, _0x2ede5d, _0x42f0ec['MAP']['chunkSize'] + 0x1, _0x42f0ec['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x3db8c1 = _0x42f0ec['GAME_STATE'] === 'NIGHT' && (_0x1ece76 === 'Skinwalker' || _0x1ece76 === 'Blackmailer') && !_0x5e7278['isDead'];
        const _0x457729 = _0x5e7278['x'] - _0x231ff2 + _0x5e7278['width'] / 0x2;
        const _0x3b6a18 = _0x5e7278['y'] - _0x5ce023 + _0x5e7278['height'] / 0x2;
        const _0x416c4e = _0x5e7278['width'] * _0x5e7278['scale'] * 1.3;
        const _0xa5d40 = _0x5e7278['height'] * _0x5e7278['scale'] * 1.3;
        const _0x2240e6 = _0x685ff7('assets/arrow.png');
        const _0x3d7ceb = _0x685ff7('assets/tape.png');
        for (const _0x346c59 in _0x58f0ec) {
            const _0x52856b = _0x58f0ec[_0x346c59];
            if (_0x52856b['isDead'])
                continue;
            const _0x4ea7bb = parseInt(_0x346c59);
            const _0x21a1e2 = (_0x52856b['renderX'] ?? _0x52856b['x']) - _0x231ff2 + _0x52856b['width'] / 0x2;
            const _0x1c9581 = (_0x52856b['renderY'] ?? _0x52856b['y']) - _0x5ce023 + _0x52856b['height'] / 0x2;
            const _0x5605da = Math['min'](0x2, Math['max'](0.3, _0x52856b['scale'] || 0x1));
            const _0x2dd8ac = _0x52856b['width'] * _0x5605da * 1.3;
            const _0x516f03 = _0x52856b['height'] * _0x5605da * 1.3;
            _0x35e20d['save']();
            try {
                _0x35e20d['translate'](_0x21a1e2, _0x1c9581);
                _0x35e20d['rotate'](_0x52856b['renderAngle'] ?? 0x0);
                if (_0x52856b['isDark'])
                    _0x35e20d['filter'] = 'brightness(0)';
                _0x4b3abc(_0x35e20d, _0x52856b['body'], _0x52856b['eyes'], _0x2dd8ac, _0x516f03);
                if (_0x35d57b['has'](_0x4ea7bb) && _0x3a2a55['complete'] && _0x3a2a55['naturalWidth'] > 0x0) {
                    _0x35e20d['drawImage'](_0x3a2a55, -_0x2dd8ac / 0x2, -_0x516f03 / 0x2, _0x2dd8ac, _0x516f03);
                }
                if (_0x52856b['hasArrow'] && _0x42f0ec['GAME_STATE'] === 'NIGHT' && _0x2240e6['complete'] && _0x2240e6['naturalWidth'] > 0x0) {
                    _0x35e20d['drawImage'](_0x2240e6, -_0x2dd8ac / 0x2, -_0x516f03 / 0x2, _0x2dd8ac, _0x516f03);
                }
                if ((_0x52856b['isBlackmailed'] || _0x50ee5a['has'](_0x4ea7bb)) && _0x3d7ceb['complete'] && _0x3d7ceb['naturalWidth'] > 0x0) {
                    _0x35e20d['drawImage'](_0x3d7ceb, -_0x2dd8ac / 0x2, -_0x516f03 / 0x2, _0x2dd8ac, _0x516f03);
                }
                if (_0x52856b['isDark'])
                    _0x35e20d['filter'] = 'none';
            } finally {
                _0x35e20d['restore']();
            }
            if (!_0x5c9151((_0x52856b['renderX'] ?? _0x52856b['x']) + _0x52856b['width'] / 0x2, (_0x52856b['renderY'] ?? _0x52856b['y']) + _0x52856b['height'] / 0x2)) {
                _0x35e20d['textAlign'] = 'center';
                _0x35e20d['lineJoin'] = 'round';
                _0x35e20d['lineWidth'] = 0x3;
                _0x35e20d['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x35e20d['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x2b7a24 = '#ffffff';
                if (_0x52856b['isBlackmailed'] || _0x50ee5a['has'](_0x4ea7bb)) {
                    _0x2b7a24 = '#ff4444';
                } else if (_0x35d57b['has'](_0x4ea7bb)) {
                    _0x2b7a24 = '#cc88ff';
                }
                _0x35e20d['fillStyle'] = _0x2b7a24;
                const _0x1c24b7 = _0x52856b['isDark'] ? '???' : _0x52856b['name'] + (_0x52856b['isOwner'] ? '\x20[🗝️]' : '');
                _0x35e20d['strokeText'](_0x1c24b7, _0x21a1e2, _0x1c9581 - _0x516f03 / 0x2 - 0x10);
                _0x35e20d['fillText'](_0x1c24b7, _0x21a1e2, _0x1c9581 - _0x516f03 / 0x2 - 0x10);
            }
        }
        if (!_0x5e7278['isDead']) {
            _0x35e20d['save']();
            try {
                _0x35e20d['translate'](_0x457729, _0x3b6a18);
                _0x35e20d['rotate'](_0x5e7278['angle']);
                if (_0x3db8c1)
                    _0x35e20d['filter'] = 'brightness(0)';
                _0x4b3abc(_0x35e20d, _0x2bfb82, _0x5b2dba, _0x416c4e, _0xa5d40);
                if (_0x35d57b['has'](_0x4d9678) && _0x3a2a55['complete'] && _0x3a2a55['naturalWidth'] > 0x0) {
                    _0x35e20d['drawImage'](_0x3a2a55, -_0x416c4e / 0x2, -_0xa5d40 / 0x2, _0x416c4e, _0xa5d40);
                }
                if (_0x5e7278['hasArrow'] && _0x42f0ec['GAME_STATE'] === 'NIGHT' && _0x2240e6['complete'] && _0x2240e6['naturalWidth'] > 0x0) {
                    _0x35e20d['drawImage'](_0x2240e6, -_0x416c4e / 0x2, -_0xa5d40 / 0x2, _0x416c4e, _0xa5d40);
                }
                if (_0x50ee5a['has'](_0x4d9678) && _0x3d7ceb['complete'] && _0x3d7ceb['naturalWidth'] > 0x0) {
                    _0x35e20d['drawImage'](_0x3d7ceb, -_0x416c4e / 0x2, -_0xa5d40 / 0x2, _0x416c4e, _0xa5d40);
                }
                if (_0x3db8c1)
                    _0x35e20d['filter'] = 'none';
            } finally {
                _0x35e20d['restore']();
            }
            if (!_0x5c9151(_0x5e7278['x'] + _0x5e7278['width'] / 0x2, _0x5e7278['y'] + _0x5e7278['height'] / 0x2)) {
                _0x35e20d['textAlign'] = 'center';
                _0x35e20d['lineJoin'] = 'round';
                _0x35e20d['lineWidth'] = 0x3;
                _0x35e20d['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x35e20d['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x4eef5e = '#ffffff';
                if (_0x50ee5a['has'](_0x4d9678)) {
                    _0x4eef5e = '#ff4444';
                } else if (_0x35d57b['has'](_0x4d9678)) {
                    _0x4eef5e = '#cc88ff';
                }
                _0x35e20d['fillStyle'] = _0x4eef5e;
                const _0xc8a5cf = _0x3db8c1 ? '???' : _0x125330 + (_0x48b20b ? '\x20[🗝️]' : '');
                _0x35e20d['strokeText'](_0xc8a5cf, _0x457729, _0x3b6a18 - _0xa5d40 / 0x2 - 0x10);
                _0x35e20d['fillText'](_0xc8a5cf, _0x457729, _0x3b6a18 - _0xa5d40 / 0x2 - 0x10);
            }
        }
        if (_0x42f0ec['MAP']['wallChunks'] && _0x42f0ec['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x1dc01d = _0x4fdd86; _0x1dc01d <= _0x2537f7; _0x1dc01d++)
                for (let _0x480d14 = _0x5c7180; _0x480d14 <= _0x32b5ca; _0x480d14++) {
                    if (!_0x42f0ec['MAP']['wallChunks'][_0x1dc01d] || !_0x42f0ec['MAP']['wallChunks'][_0x1dc01d][_0x480d14])
                        continue;
                    const _0x5c10b9 = _0x480d14 * _0x42f0ec['MAP']['chunkSize'] - _0x231ff2;
                    const _0x109c9b = _0x1dc01d * _0x42f0ec['MAP']['chunkSize'] - _0x5ce023;
                    _0x35e20d['drawImage'](_0x42f0ec['MAP']['wallChunks'][_0x1dc01d][_0x480d14], _0x5c10b9, _0x109c9b, _0x42f0ec['MAP']['chunkSize'] + 0x1, _0x42f0ec['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x69099e of _0x42f0ec['ENTITIES']) {
            if (_0x69099e['type'] !== 'npc')
                continue;
            const _0x3fbacf = _0x69099e['x'] - _0x231ff2 + _0x69099e['w'] / 0x2;
            const _0x334627 = _0x69099e['y'] - _0x5ce023 + _0x69099e['h'] / 0x2;
            const _0x307935 = _0x69099e['w'];
            const _0x9a3cb5 = _0x69099e['h'];
            _0x35e20d['save']();
            _0x35e20d['translate'](_0x3fbacf, _0x334627);
            _0x35e20d['rotate'](_0x69099e['angle'] !== undefined ? _0x69099e['angle'] : 0x0);
            _0x4b3abc(_0x35e20d, _0x69099e['body'] || 'yanito932.png', _0x69099e['eyes'], _0x307935, _0x9a3cb5);
            _0x35e20d['restore']();
            _0x35e20d['textAlign'] = 'center';
            _0x35e20d['lineJoin'] = 'round';
            _0x35e20d['lineWidth'] = 0x3;
            _0x35e20d['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x35e20d['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
            _0x35e20d['fillStyle'] = '#aaaaaa';
            _0x35e20d['strokeText'](_0x69099e['name'] || 'NPC', _0x3fbacf, _0x334627 - _0x9a3cb5 / 0x2 - 0x10);
            _0x35e20d['fillText'](_0x69099e['name'] || 'NPC', _0x3fbacf, _0x334627 - _0x9a3cb5 / 0x2 - 0x10);
        }
        if (_0x5e7278['isDead']) {
            for (const _0x51b9d7 in _0x58f0ec) {
                const _0x174cd1 = _0x58f0ec[_0x51b9d7];
                if (!_0x174cd1['isDead'])
                    continue;
                const _0x2f5b68 = (_0x174cd1['renderX'] ?? _0x174cd1['x']) - _0x231ff2 + _0x174cd1['width'] / 0x2;
                const _0x1a50d4 = (_0x174cd1['renderY'] ?? _0x174cd1['y']) - _0x5ce023 + _0x174cd1['height'] / 0x2;
                const _0x49cd49 = _0x174cd1['width'] * (_0x174cd1['scale'] || 0x1) * 1.3;
                const _0xd20449 = _0x174cd1['height'] * (_0x174cd1['scale'] || 0x1) * 1.3;
                _0x35e20d['save']();
                try {
                    _0x35e20d['translate'](_0x2f5b68, _0x1a50d4);
                    _0x35e20d['rotate'](_0x174cd1['renderAngle'] ?? 0x0);
                    _0x35e20d['globalAlpha'] = 0.3;
                    _0x4b3abc(_0x35e20d, _0x174cd1['body'], _0x174cd1['eyes'], _0x49cd49, _0xd20449);
                } finally {
                    _0x35e20d['restore']();
                }
                if (!_0x5c9151((_0x174cd1['renderX'] ?? _0x174cd1['x']) + _0x174cd1['width'] / 0x2, (_0x174cd1['renderY'] ?? _0x174cd1['y']) + _0x174cd1['height'] / 0x2)) {
                    _0x35e20d['save']();
                    _0x35e20d['globalAlpha'] = 0.3;
                    _0x35e20d['textAlign'] = 'center';
                    _0x35e20d['lineJoin'] = 'round';
                    _0x35e20d['lineWidth'] = 0x3;
                    _0x35e20d['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x35e20d['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                    _0x35e20d['fillStyle'] = '#ffffff';
                    const _0x24606e = _0x174cd1['name'] + (_0x174cd1['isOwner'] ? '\x20[🗝️]' : '');
                    _0x35e20d['strokeText'](_0x24606e, _0x2f5b68, _0x1a50d4 - _0xd20449 / 0x2 - 0x10);
                    _0x35e20d['fillText'](_0x24606e, _0x2f5b68, _0x1a50d4 - _0xd20449 / 0x2 - 0x10);
                    _0x35e20d['restore']();
                }
            }
            _0x35e20d['save']();
            try {
                _0x35e20d['translate'](_0x457729, _0x3b6a18);
                _0x35e20d['rotate'](_0x5e7278['angle']);
                _0x35e20d['globalAlpha'] = 0.3;
                _0x4b3abc(_0x35e20d, _0x2bfb82, _0x5b2dba, _0x416c4e, _0xa5d40);
            } finally {
                _0x35e20d['restore']();
            }
            if (!_0x5c9151(_0x5e7278['x'] + _0x5e7278['width'] / 0x2, _0x5e7278['y'] + _0x5e7278['height'] / 0x2)) {
                _0x35e20d['save']();
                _0x35e20d['globalAlpha'] = 0.3;
                _0x35e20d['textAlign'] = 'center';
                _0x35e20d['lineJoin'] = 'round';
                _0x35e20d['lineWidth'] = 0x3;
                _0x35e20d['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x35e20d['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                _0x35e20d['fillStyle'] = '#ffffff';
                const _0x322774 = _0x125330 + (_0x48b20b ? '\x20[🗝️]' : '');
                _0x35e20d['strokeText'](_0x322774, _0x457729, _0x3b6a18 - _0xa5d40 / 0x2 - 0x10);
                _0x35e20d['fillText'](_0x322774, _0x457729, _0x3b6a18 - _0xa5d40 / 0x2 - 0x10);
                _0x35e20d['restore']();
            }
        }
        for (let _0x3b55e4 = _0x4fdd86; _0x3b55e4 <= _0x2537f7; _0x3b55e4++)
            for (let _0x37b77d = _0x5c7180; _0x37b77d <= _0x32b5ca; _0x37b77d++) {
                const _0x591cc5 = _0x37b77d * _0x42f0ec['MAP']['chunkSize'] - _0x231ff2;
                const _0x4a5736 = _0x3b55e4 * _0x42f0ec['MAP']['chunkSize'] - _0x5ce023;
                _0x35e20d['drawImage'](_0x42f0ec['MAP']['fgChunks'][_0x3b55e4][_0x37b77d], _0x591cc5, _0x4a5736, _0x42f0ec['MAP']['chunkSize'] + 0x1, _0x42f0ec['MAP']['chunkSize'] + 0x1);
            }
        if (_0x42f0ec['EDITOR']['enabled'] && _0x42f0ec['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x31b523 = _0x42f0ec['INPUTS']['mouseX'] / _0x42f0ec['SYSTEM']['viewScale'] + _0x42f0ec['CAMERA']['x'];
            const _0x35c196 = _0x42f0ec['INPUTS']['mouseY'] / _0x42f0ec['SYSTEM']['viewScale'] + _0x42f0ec['CAMERA']['y'];
            const _0x5e4b9a = Math['floor'](_0x31b523 / _0x42f0ec['MAP']['tileSize']);
            const _0x5c0890 = Math['floor'](_0x35c196 / _0x42f0ec['MAP']['tileSize']);
            if (_0x5e4b9a >= 0x0 && _0x5e4b9a < _0x42f0ec['MAP']['columns'] && _0x5c0890 >= 0x0 && _0x5c0890 < _0x42f0ec['MAP']['rows']) {
                const _0x200d9b = _0x5e4b9a * _0x42f0ec['MAP']['tileSize'] - _0x231ff2;
                const _0x15ec84 = _0x5c0890 * _0x42f0ec['MAP']['tileSize'] - _0x5ce023;
                _0x35e20d['save']();
                _0x35e20d['globalAlpha'] = 0.5;
                if (_0x42f0ec['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x4e76ec = _0x42f0ec['EDITOR']['selectedTileGid'] - 0x1;
                    _0x35e20d['drawImage'](_0x314f9a, _0x4e76ec % _0x42f0ec['MAP']['tilesetCols'] * _0x42f0ec['MAP']['tileSize'], Math['floor'](_0x4e76ec / _0x42f0ec['MAP']['tilesetCols']) * _0x42f0ec['MAP']['tileSize'], _0x42f0ec['MAP']['tileSize'], _0x42f0ec['MAP']['tileSize'], _0x200d9b, _0x15ec84, _0x42f0ec['MAP']['tileSize'], _0x42f0ec['MAP']['tileSize']);
                } else {
                    _0x35e20d['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x35e20d['fillRect'](_0x200d9b, _0x15ec84, _0x42f0ec['MAP']['tileSize'], _0x42f0ec['MAP']['tileSize']);
                }
                _0x35e20d['restore']();
            }
        }
        _0x758d6f(_0x35e20d, _0x231ff2, _0x5ce023);
        if (_0x38e331 > 0x0) {
            _0x35e20d['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x38e331 + ')';
            _0x35e20d['fillRect'](0x0, 0x0, _0x42f0ec['CAMERA']['width'], _0x42f0ec['CAMERA']['height']);
        }
        for (const _0x50158b in _0x58f0ec) {
            const _0x35f7cb = _0x58f0ec[_0x50158b];
            if (_0x35f7cb['isDead'] && !_0x5e7278['isDead'])
                continue;
            const _0x47e7bd = (_0x35f7cb['renderX'] ?? _0x35f7cb['x']) - _0x231ff2 + _0x35f7cb['width'] / 0x2;
            const _0xf8b15e = (_0x35f7cb['renderY'] ?? _0x35f7cb['y']) - _0x5ce023 + _0x35f7cb['height'] / 0x2;
            _0x596dc2(_0x35e20d, _0x35f7cb['chats'], _0x47e7bd, _0xf8b15e - _0x35f7cb['height'] / 0x2 - 0x20);
        }
        _0x596dc2(_0x35e20d, _0x5e7278['chats'], _0x457729, _0x3b6a18 - _0x5e7278['height'] / 0x2 - 0x20);
        if (_0x1615f6 > 0x0) {
            _0x35e20d['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x1615f6 + ')';
            _0x35e20d['fillRect'](0x0, 0x0, _0x42f0ec['CAMERA']['width'], _0x42f0ec['CAMERA']['height']);
        }
    } finally {
        _0x35e20d['restore']();
    }
}
function _0xebd4e4(_0x16e17a) {
    if (!_0x42f0ec['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0xebd4e4);
    let _0x3726fa = (_0x16e17a - _0x42f0ec['SYSTEM']['lastTime']) / 0x3e8;
    _0x42f0ec['SYSTEM']['lastTime'] = _0x16e17a;
    if (_0x3726fa > 0.1)
        _0x3726fa = 0.1;
    if (_0x3726fa < 0x0 || isNaN(_0x3726fa))
        _0x3726fa = 0.016;
    if (_0x40f576) {
        _0x5adddf(_0x3726fa);
        _0x4fab5a();
        return;
    }
    if (!_0x4d9678)
        return;
    _0x41b004(_0x3726fa);
    _0x321a79['tick'](_0x16e17a);
    _0x4fab5a();
}
function _0x3443fa() {
    if (_0x314f9a['complete'] && _0x314f9a['naturalWidth'] > 0x0) {
        _0x42f0ec['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x4b1e42 = Math['ceil'](_0x42f0ec['MAP']['columns'] * _0x42f0ec['MAP']['tileSize'] / _0x42f0ec['MAP']['chunkSize']);
    const _0x2deafc = Math['ceil'](_0x42f0ec['MAP']['rows'] * _0x42f0ec['MAP']['tileSize'] / _0x42f0ec['MAP']['chunkSize']);
    _0x42f0ec['MAP']['bgChunks'] = [];
    _0x42f0ec['MAP']['fgChunks'] = [];
    _0x42f0ec['MAP']['wallChunks'] = [];
    for (let _0x3fa684 = 0x0; _0x3fa684 < _0x2deafc; _0x3fa684++) {
        _0x42f0ec['MAP']['bgChunks'][_0x3fa684] = [];
        _0x42f0ec['MAP']['fgChunks'][_0x3fa684] = [];
        _0x42f0ec['MAP']['wallChunks'][_0x3fa684] = [];
        for (let _0xe0b1f4 = 0x0; _0xe0b1f4 < _0x4b1e42; _0xe0b1f4++) {
            const _0x5c7e6a = document['createElement']('canvas');
            _0x5c7e6a['width'] = _0x5c7e6a['height'] = _0x42f0ec['MAP']['chunkSize'];
            const _0x46e4f3 = document['createElement']('canvas');
            _0x46e4f3['width'] = _0x46e4f3['height'] = _0x42f0ec['MAP']['chunkSize'];
            const _0x4ae2b8 = document['createElement']('canvas');
            _0x4ae2b8['width'] = _0x4ae2b8['height'] = _0x42f0ec['MAP']['chunkSize'];
            _0x42f0ec['MAP']['bgChunks'][_0x3fa684][_0xe0b1f4] = _0x5c7e6a;
            _0x42f0ec['MAP']['fgChunks'][_0x3fa684][_0xe0b1f4] = _0x46e4f3;
            _0x42f0ec['MAP']['wallChunks'][_0x3fa684][_0xe0b1f4] = _0x4ae2b8;
            _0x126542(_0xe0b1f4, _0x3fa684);
        }
    }
}
function _0x126542(_0x4503a7, _0x534c09) {
    const _0x3e8f9f = _0x42f0ec['MAP']['bgChunks'][_0x534c09][_0x4503a7]['getContext']('2d', { 'alpha': !![] });
    const _0x17043c = _0x42f0ec['MAP']['fgChunks'][_0x534c09][_0x4503a7]['getContext']('2d', { 'alpha': !![] });
    const _0x253574 = _0x42f0ec['MAP']['wallChunks'][_0x534c09] && _0x42f0ec['MAP']['wallChunks'][_0x534c09][_0x4503a7] ? _0x42f0ec['MAP']['wallChunks'][_0x534c09][_0x4503a7]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x3e8f9f['imageSmoothingEnabled'] = _0x17043c['imageSmoothingEnabled'] = ![];
    if (_0x253574)
        _0x253574['imageSmoothingEnabled'] = ![];
    _0x3e8f9f['clearRect'](0x0, 0x0, _0x42f0ec['MAP']['chunkSize'], _0x42f0ec['MAP']['chunkSize']);
    _0x17043c['clearRect'](0x0, 0x0, _0x42f0ec['MAP']['chunkSize'], _0x42f0ec['MAP']['chunkSize']);
    if (_0x253574)
        _0x253574['clearRect'](0x0, 0x0, _0x42f0ec['MAP']['chunkSize'], _0x42f0ec['MAP']['chunkSize']);
    const _0x1427da = Math['floor'](_0x4503a7 * _0x42f0ec['MAP']['chunkSize'] / _0x42f0ec['MAP']['tileSize']);
    const _0xe0b649 = Math['ceil']((_0x4503a7 + 0x1) * _0x42f0ec['MAP']['chunkSize'] / _0x42f0ec['MAP']['tileSize']);
    const _0x5ec197 = Math['floor'](_0x534c09 * _0x42f0ec['MAP']['chunkSize'] / _0x42f0ec['MAP']['tileSize']);
    const _0xa7c39b = Math['ceil']((_0x534c09 + 0x1) * _0x42f0ec['MAP']['chunkSize'] / _0x42f0ec['MAP']['tileSize']);
    const _0x3f8290 = 0.5;
    const _0xb232d = _0x42f0ec['MAP']['tileSize'] - _0x3f8290 * 0x2;
    _0x42f0ec['MAP']['layers']['forEach'](_0x5bff48 => {
        const _0x2af76e = _0x5bff48['name'] === 'walls';
        const _0xf2e966 = _0x5bff48['name'] === 'trees' ? _0x17043c : _0x2af76e ? _0x253574 || _0x3e8f9f : _0x3e8f9f;
        for (let _0x4a4d9a = Math['max'](0x0, _0x5ec197); _0x4a4d9a < Math['min'](_0x42f0ec['MAP']['rows'], _0xa7c39b); _0x4a4d9a++) {
            for (let _0x1700f3 = Math['max'](0x0, _0x1427da); _0x1700f3 < Math['min'](_0x42f0ec['MAP']['columns'], _0xe0b649); _0x1700f3++) {
                let _0x3cb762 = _0x5bff48['data'][_0x4a4d9a * _0x42f0ec['MAP']['columns'] + _0x1700f3];
                if (_0x5bff48['name'] === 'floor2' && _0x42f0ec['MAP']['doors'] && _0x42f0ec['MAP']['doors'][_0x4a4d9a * _0x42f0ec['MAP']['columns'] + _0x1700f3]) {
                    _0x3cb762 = 0x2;
                }
                if (_0x3cb762 > 0x0) {
                    const _0x38753f = _0x3cb762 - 0x1;
                    const _0xc08b8e = _0x38753f % _0x42f0ec['MAP']['tilesetCols'] * _0x42f0ec['MAP']['tileSize'] + _0x3f8290;
                    const _0xe5b58f = Math['floor'](_0x38753f / _0x42f0ec['MAP']['tilesetCols']) * _0x42f0ec['MAP']['tileSize'] + _0x3f8290;
                    const _0x5e4e36 = _0x1700f3 * _0x42f0ec['MAP']['tileSize'] - _0x4503a7 * _0x42f0ec['MAP']['chunkSize'];
                    const _0x553f0c = _0x4a4d9a * _0x42f0ec['MAP']['tileSize'] - _0x534c09 * _0x42f0ec['MAP']['chunkSize'];
                    if (_0x3cb762 === 0x4) {
                        const _0x1045af = 0x1;
                        const _0x10bed0 = _0x1045af % _0x42f0ec['MAP']['tilesetCols'] * _0x42f0ec['MAP']['tileSize'] + _0x3f8290;
                        const _0x233128 = Math['floor'](_0x1045af / _0x42f0ec['MAP']['tilesetCols']) * _0x42f0ec['MAP']['tileSize'] + _0x3f8290;
                        _0x3e8f9f['drawImage'](_0x314f9a, _0x10bed0, _0x233128, _0xb232d, _0xb232d, _0x5e4e36, _0x553f0c, _0x42f0ec['MAP']['tileSize'], _0x42f0ec['MAP']['tileSize']);
                        let _0x527a19 = _0x42f0ec['MAP']['doors'] ? _0x42f0ec['MAP']['doors'][_0x4a4d9a * _0x42f0ec['MAP']['columns'] + _0x1700f3] : null;
                        if (!_0x527a19) {
                            const _0x5ea6d5 = _0x42f0ec['MAP']['layers']['find'](_0xf43e6a => _0xf43e6a['name'] === 'walls');
                            const _0x42c73e = _0x4a4d9a > 0x0 && _0x5ea6d5 && _0x5ea6d5['data'][(_0x4a4d9a - 0x1) * _0x42f0ec['MAP']['columns'] + _0x1700f3] > 0x0;
                            const _0x2b7879 = _0x4a4d9a < _0x42f0ec['MAP']['rows'] - 0x1 && _0x5ea6d5 && _0x5ea6d5['data'][(_0x4a4d9a + 0x1) * _0x42f0ec['MAP']['columns'] + _0x1700f3] > 0x0;
                            const _0x28abe5 = _0x1700f3 > 0x0 && _0x5ea6d5 && _0x5ea6d5['data'][_0x4a4d9a * _0x42f0ec['MAP']['columns'] + _0x1700f3 - 0x1] > 0x0;
                            const _0x37de8d = _0x1700f3 < _0x42f0ec['MAP']['columns'] - 0x1 && _0x5ea6d5 && _0x5ea6d5['data'][_0x4a4d9a * _0x42f0ec['MAP']['columns'] + _0x1700f3 + 0x1] > 0x0;
                            if (_0x28abe5 && _0x37de8d)
                                _0x527a19 = _0x4a4d9a < _0x42f0ec['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x42c73e && _0x2b7879)
                                _0x527a19 = _0x1700f3 < _0x42f0ec['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x3f9e60 = 0x0;
                        if (_0x527a19 === 'bottom')
                            _0x3f9e60 = Math['PI'] / 0x2;
                        else if (_0x527a19 === 'left')
                            _0x3f9e60 = Math['PI'];
                        else if (_0x527a19 === 'top')
                            _0x3f9e60 = -Math['PI'] / 0x2;
                        else if (_0x527a19 === 'right')
                            _0x3f9e60 = 0x0;
                        if (_0x3f9e60 !== 0x0) {
                            _0xf2e966['save']();
                            _0xf2e966['translate'](_0x5e4e36 + _0x42f0ec['MAP']['tileSize'] / 0x2, _0x553f0c + _0x42f0ec['MAP']['tileSize'] / 0x2);
                            _0xf2e966['rotate'](_0x3f9e60);
                            _0xf2e966['drawImage'](_0x314f9a, _0xc08b8e, _0xe5b58f, _0xb232d, _0xb232d, -_0x42f0ec['MAP']['tileSize'] / 0x2, -_0x42f0ec['MAP']['tileSize'] / 0x2, _0x42f0ec['MAP']['tileSize'], _0x42f0ec['MAP']['tileSize']);
                            _0xf2e966['restore']();
                        } else {
                            _0xf2e966['drawImage'](_0x314f9a, _0xc08b8e, _0xe5b58f, _0xb232d, _0xb232d, _0x5e4e36, _0x553f0c, _0x42f0ec['MAP']['tileSize'], _0x42f0ec['MAP']['tileSize']);
                        }
                    } else {
                        _0xf2e966['drawImage'](_0x314f9a, _0xc08b8e, _0xe5b58f, _0xb232d, _0xb232d, _0x5e4e36, _0x553f0c, _0x42f0ec['MAP']['tileSize'], _0x42f0ec['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x416aa2() {
    _0x314f9a['crossOrigin'] = 'Anonymous';
    _0x314f9a['onload'] = () => {
        _0x42f0ec['MAP']['tilesetCols'] = 0x3;
        if (_0x42f0ec['MAP']['columns'] > 0x0 && _0x42f0ec['MAP']['layers'] && _0x42f0ec['MAP']['layers']['length'] > 0x0) {
            _0x3443fa();
        }
        _0x1c06f8();
    };
    _0x314f9a['onerror'] = () => {
        _0x42f0ec['MAP']['tilesetCols'] = 0x1;
        _0x1c06f8();
    };
    _0x314f9a['src'] = 'assets/tilesheet.png';
    _0x1ce3c3['crossOrigin'] = 'Anonymous';
    _0x1ce3c3['onload'] = _0x1c06f8;
    _0x1ce3c3['onerror'] = () => {
        _0x1c06f8();
    };
    _0x1ce3c3['src'] = 'assets/center.png';
    _0x19680f['crossOrigin'] = 'Anonymous';
    _0x19680f['onload'] = _0x1c06f8;
    _0x19680f['onerror'] = () => {
        _0x1c06f8();
    };
    _0x19680f['src'] = 'assets/table.png';
}
function _0x1c06f8() {
    _0x42f0ec['SYSTEM']['assetsLoaded']++;
    if (_0x42f0ec['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x42f0ec['MAP']['columns'] > 0x0 && _0x42f0ec['MAP']['layers'] && _0x42f0ec['MAP']['layers']['length'] > 0x0) {
            _0x3443fa();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x309bb4();
    }
}
function _0x35926d(_0x49b194, _0xbe9474) {
    if (!_0x48b20b || !_0x50141f)
        return;
    const _0xc5f814 = _0x49b194 / _0x42f0ec['SYSTEM']['viewScale'] + _0x42f0ec['CAMERA']['x'];
    const _0xb255d3 = _0xbe9474 / _0x42f0ec['SYSTEM']['viewScale'] + _0x42f0ec['CAMERA']['y'];
    const _0x3d524b = Math['floor'](_0xc5f814 / _0x42f0ec['MAP']['tileSize']);
    const _0x436a2c = Math['floor'](_0xb255d3 / _0x42f0ec['MAP']['tileSize']);
    if (_0x3d524b >= 0x0 && _0x3d524b < _0x42f0ec['MAP']['columns'] && _0x436a2c >= 0x0 && _0x436a2c < _0x42f0ec['MAP']['rows'])
        _0x50141f['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x42f0ec['EDITOR']['selectedLayer'],
            'col': _0x3d524b,
            'row': _0x436a2c,
            'gid': _0x42f0ec['EDITOR']['selectedTileGid']
        }));
}
function _0x515b5c() {
    const _0x2a38d4 = document['getElementById']('palette');
    if (!_0x2a38d4 || _0x2a38d4['children']['length'] > 0x0)
        return;
    const _0x4615cc = 0x40;
    const _0x35861a = _0x314f9a;
    const _0x513f41 = document['createElement']('div');
    _0x513f41['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x482276 = document['createElement']('canvas');
    _0x482276['width'] = 0xc0;
    _0x482276['height'] = 0xa0;
    _0x482276['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x513f41['appendChild'](_0x482276);
    const _0x34b344 = document['createElement']('div');
    _0x34b344['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x513f41['appendChild'](_0x34b344);
    let _0x427d57 = 0x0, _0x3cf67d = 0x0;
    let _0x49620d = ![], _0x3205f4 = 0x0, _0x2665f4 = 0x0, _0x328ad1 = 0x0, _0xba6fe5 = 0x0;
    function _0x17e915() {
        const _0x389f75 = _0x482276['getContext']('2d');
        _0x389f75['clearRect'](0x0, 0x0, _0x482276['width'], _0x482276['height']);
        _0x389f75['imageSmoothingEnabled'] = ![];
        if (_0x35861a['complete'] && _0x35861a['naturalWidth'] > 0x0) {
            _0x389f75['drawImage'](_0x35861a, _0x427d57, _0x3cf67d, _0x482276['width'], _0x482276['height'], 0x0, 0x0, _0x482276['width'], _0x482276['height']);
        }
        _0x389f75['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x389f75['lineWidth'] = 0x1;
        const _0x5095af = Math['floor'](_0x427d57 / _0x4615cc);
        const _0x1ad1e0 = Math['floor'](_0x3cf67d / _0x4615cc);
        for (let _0x19d07f = _0x5095af; _0x19d07f <= _0x5095af + Math['ceil'](_0x482276['width'] / _0x4615cc) + 0x1; _0x19d07f++) {
            const _0x1d758b = _0x19d07f * _0x4615cc - _0x427d57;
            _0x389f75['beginPath']();
            _0x389f75['moveTo'](_0x1d758b, 0x0);
            _0x389f75['lineTo'](_0x1d758b, _0x482276['height']);
            _0x389f75['stroke']();
        }
        for (let _0x3a841e = _0x1ad1e0; _0x3a841e <= _0x1ad1e0 + Math['ceil'](_0x482276['height'] / _0x4615cc) + 0x1; _0x3a841e++) {
            const _0x136389 = _0x3a841e * _0x4615cc - _0x3cf67d;
            _0x389f75['beginPath']();
            _0x389f75['moveTo'](0x0, _0x136389);
            _0x389f75['lineTo'](_0x482276['width'], _0x136389);
            _0x389f75['stroke']();
        }
    }
    function _0x53caa3() {
        const _0x540b8c = Math['max'](0x1, Math['ceil'](_0x35861a['naturalWidth'] / _0x4615cc));
        const _0x4f937b = _0x42f0ec['EDITOR']['selectedTileGid'];
        if (_0x4f937b <= 0x0) {
            _0x34b344['style']['display'] = 'none';
            return;
        }
        const _0x37392f = _0x4f937b - 0x1;
        const _0x56f494 = _0x37392f % _0x540b8c;
        const _0x2732db = Math['floor'](_0x37392f / _0x540b8c);
        const _0x38da85 = _0x56f494 * _0x4615cc - _0x427d57;
        const _0x4f7017 = _0x2732db * _0x4615cc - _0x3cf67d;
        _0x34b344['style']['display'] = 'block';
        _0x34b344['style']['left'] = _0x38da85 + 'px';
        _0x34b344['style']['top'] = _0x4f7017 + 'px';
    }
    _0x35861a['onload'] = () => {
        _0x17e915();
        _0x53caa3();
    };
    if (_0x35861a['complete'] && _0x35861a['naturalWidth'] > 0x0) {
        _0x17e915();
        _0x53caa3();
    }
    _0x513f41['addEventListener']('mousedown', _0x44484d => {
        if (_0x44484d['button'] === 0x0) {
            _0x49620d = !![];
            _0x3205f4 = _0x44484d['clientX'];
            _0x2665f4 = _0x44484d['clientY'];
            _0x328ad1 = _0x427d57;
            _0xba6fe5 = _0x3cf67d;
            _0x513f41['style']['cursor'] = 'grabbing';
            _0x44484d['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x3032b1 => {
        if (!_0x49620d)
            return;
        const _0x1cdc17 = _0x3205f4 - _0x3032b1['clientX'];
        const _0x4f7e70 = _0x2665f4 - _0x3032b1['clientY'];
        const _0x4b2400 = Math['max'](0x0, _0x35861a['naturalWidth'] - _0x482276['width']);
        const _0x23634d = Math['max'](0x0, _0x35861a['naturalHeight'] - _0x482276['height']);
        _0x427d57 = Math['max'](0x0, Math['min'](_0x4b2400, _0x328ad1 + _0x1cdc17));
        _0x3cf67d = Math['max'](0x0, Math['min'](_0x23634d, _0xba6fe5 + _0x4f7e70));
        _0x17e915();
        _0x53caa3();
    });
    window['addEventListener']('mouseup', _0x3b2453 => {
        if (_0x49620d) {
            _0x49620d = ![];
            _0x513f41['style']['cursor'] = 'grab';
        }
    });
    _0x513f41['addEventListener']('click', _0xae0886 => {
        const _0x29990d = _0x513f41['getBoundingClientRect']();
        const _0x239438 = _0xae0886['clientX'] - _0x29990d['left'] + _0x427d57;
        const _0x208df7 = _0xae0886['clientY'] - _0x29990d['top'] + _0x3cf67d;
        const _0x46b6b4 = Math['max'](0x1, Math['ceil'](_0x35861a['naturalWidth'] / _0x4615cc));
        const _0x426c88 = Math['floor'](_0x239438 / _0x4615cc);
        const _0x22b654 = Math['floor'](_0x208df7 / _0x4615cc);
        const _0x3dc847 = _0x22b654 * _0x46b6b4 + _0x426c88 + 0x1;
        _0x42f0ec['EDITOR']['selectedTileGid'] = _0x3dc847;
        _0x53caa3();
    });
    _0x2a38d4['appendChild'](_0x513f41);
    const _0x4fa365 = document['createElement']('div');
    _0x4fa365['className'] = 'tile-btn\x20eraser-btn';
    _0x4fa365['title'] = 'Eraser\x20(gid\x200)';
    _0x4fa365['onclick'] = () => {
        _0x42f0ec['EDITOR']['selectedTileGid'] = 0x0;
        _0x34b344['style']['display'] = 'none';
    };
    _0x2a38d4['appendChild'](_0x4fa365);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x42f0ec['EDITOR']['enabled'] = !_0x42f0ec['EDITOR']['enabled'];
        const _0x2bd7fd = document['getElementById']('editor-tools');
        if (_0x42f0ec['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x2bd7fd['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x2bd7fd['style']['display'] = 'none';
        }
    });
    const _0x5b5438 = document['getElementById']('start-game-btn');
    if (_0x5b5438) {
        _0x5b5438['addEventListener']('click', () => {
            if (_0x50141f)
                _0x50141f['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x1b822e = document['getElementById']('rolelist-toggle-btn');
    if (_0x1b822e) {
        let _0xc2f82 = 'subalignments';
        _0x1b822e['addEventListener']('click', () => {
            if (_0xc2f82 === 'subalignments')
                _0xc2f82 = 'precise';
            else if (_0xc2f82 === 'precise')
                _0xc2f82 = 'off';
            else
                _0xc2f82 = 'subalignments';
            _0x1b822e['innerText'] = 'Role\x20List:\x20' + _0xc2f82['charAt'](0x0)['toUpperCase']() + _0xc2f82['slice'](0x1);
            if (_0x50141f)
                _0x50141f['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0xc2f82
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x4a3c3c => {
        if (_0x4a3c3c['id'] === 'editor-toggle-btn' || _0x4a3c3c['id'] === 'start-game-btn' || _0x4a3c3c['id'] === 'rolelist-toggle-btn')
            return;
        _0x4a3c3c['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x4eb119 => _0x4eb119['classList']['remove']('active'));
            _0x4a3c3c['classList']['add']('active');
            _0x42f0ec['EDITOR']['selectedLayer'] = _0x4a3c3c['dataset']['layer'];
        });
    });
}
function _0x556a72(_0x19be8b) {
    if (_0x50141f)
        _0x50141f['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x19be8b
        }));
}
function _0x599003(_0x7c4678) {
    if (_0x50141f)
        _0x50141f['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x7c4678
        }));
}
function _0x147c16(_0x8fca4b, _0x191e17, _0x411a68, _0x28491c) {
    const _0x276024 = document['getElementById']('admin-panel');
    if (_0x276024)
        _0x276024['remove']();
    if (_0x276024 && _0x276024['dataset']['target'] === String(_0x8fca4b))
        return;
    const _0x400b40 = document['createElement']('div');
    _0x400b40['id'] = 'admin-panel';
    _0x400b40['dataset']['target'] = String(_0x8fca4b);
    _0x400b40['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x498dd2 = document['createElement']('div');
    _0x498dd2['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x498dd2['textContent'] = _0x191e17;
    _0x400b40['appendChild'](_0x498dd2);
    const _0x1cca11 = document['createElement']('button');
    _0x1cca11['textContent'] = 'Kick';
    _0x1cca11['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x1cca11['onmouseenter'] = () => _0x1cca11['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x1cca11['onmouseleave'] = () => _0x1cca11['style']['background'] = 'transparent';
    _0x1cca11['onclick'] = () => {
        _0x556a72(_0x8fca4b);
        _0x400b40['remove']();
    };
    _0x400b40['appendChild'](_0x1cca11);
    const _0x461652 = document['createElement']('button');
    _0x461652['textContent'] = 'Ban';
    _0x461652['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x461652['onmouseenter'] = () => _0x461652['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x461652['onmouseleave'] = () => _0x461652['style']['background'] = 'transparent';
    _0x461652['onclick'] = () => {
        _0x599003(_0x8fca4b);
        _0x400b40['remove']();
    };
    _0x400b40['appendChild'](_0x461652);
    document['body']['appendChild'](_0x400b40);
    const _0x40afdb = _0x400b40['offsetWidth'] || 0x91;
    const _0xa36e40 = _0x400b40['offsetHeight'] || 0x50;
    let _0x2a9e42 = _0x411a68 - _0x40afdb;
    let _0x4852d0 = _0x28491c;
    if (_0x2a9e42 < 0x4)
        _0x2a9e42 = _0x411a68;
    if (_0x4852d0 + _0xa36e40 > window['innerHeight'] - 0x4)
        _0x4852d0 = window['innerHeight'] - _0xa36e40 - 0x4;
    _0x400b40['style']['left'] = _0x2a9e42 + 'px';
    _0x400b40['style']['top'] = _0x4852d0 + 'px';
    const _0x5aff8f = _0x22a376 => {
        if (!_0x400b40['contains'](_0x22a376['target'])) {
            _0x400b40['remove']();
            document['removeEventListener']('mousedown', _0x5aff8f);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x5aff8f), 0x0);
}
function _0x127784() {
    const _0x4355b4 = document['getElementById']('leaderboard-list');
    _0x4355b4['innerHTML'] = '';
    const _0x401122 = document['createElement']('div');
    _0x401122['className'] = 'leaderboard-entry';
    const _0x14f428 = document['createElement']('span');
    _0x14f428['textContent'] = _0x125330 + (_0x48b20b ? '\x20[🗝️]' : '');
    if (_0x35d57b['has'](_0x4d9678) && !_0x5e7278['isDead']) {
        _0x14f428['style']['color'] = '#cc88ff';
    }
    _0x401122['appendChild'](_0x14f428);
    _0x4355b4['appendChild'](_0x401122);
    for (const _0x3b8415 in _0x58f0ec) {
        const _0x395da1 = document['createElement']('div');
        _0x395da1['className'] = 'leaderboard-entry';
        const _0x255d71 = document['createElement']('span');
        _0x255d71['textContent'] = _0x58f0ec[_0x3b8415]['name'] + (_0x58f0ec[_0x3b8415]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x35d57b['has'](parseInt(_0x3b8415)) && !_0x58f0ec[_0x3b8415]['isDead']) {
            _0x255d71['style']['color'] = '#cc88ff';
        }
        _0x395da1['appendChild'](_0x255d71);
        if (_0x48b20b && !_0x58f0ec[_0x3b8415]['isOwner']) {
            const _0xcd2bc2 = _0x58f0ec[_0x3b8415]['id'];
            const _0x3a6fd0 = _0x58f0ec[_0x3b8415]['name'];
            _0x395da1['style']['cursor'] = 'context-menu';
            _0x395da1['addEventListener']('contextmenu', _0x1629ce => {
                _0x1629ce['preventDefault']();
                _0x1629ce['stopPropagation']();
                _0x147c16(_0xcd2bc2, _0x3a6fd0, _0x1629ce['clientX'], _0x1629ce['clientY']);
            });
        }
        _0x4355b4['appendChild'](_0x395da1);
    }
}
window['addEventListener']('resize', _0x309bb4);
function _0x309bb4() {
    _0xe7b332['width'] = window['innerWidth'];
    _0xe7b332['height'] = window['innerHeight'];
    _0x42f0ec['SYSTEM']['viewScale'] = Math['max'](_0xe7b332['width'] / _0x2d1cac, _0xe7b332['height'] / _0x312153);
    _0x42f0ec['CAMERA']['width'] = _0xe7b332['width'] / _0x42f0ec['SYSTEM']['viewScale'];
    _0x42f0ec['CAMERA']['height'] = _0xe7b332['height'] / _0x42f0ec['SYSTEM']['viewScale'];
    _0x35e20d['imageSmoothingEnabled'] = ![];
}
function _0x56b3e8(_0x2377cf) {
    if (_0x2377cf['ctrlKey'] || _0x2377cf['metaKey']) {
        if (_0x2377cf['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x2377cf['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x2377cf['code'])) {
            _0x2377cf['preventDefault']();
            _0x2377cf['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x56b3e8, { 'passive': ![] });
window['addEventListener']('keydown', _0x56b3e8, { 'passive': ![] });
window['addEventListener']('keydown', _0x33425a => {
    const _0x27f564 = _0x33425a['key']['toLowerCase']();
    if (_0x27f564 === 'tab') {
        _0x33425a['preventDefault']();
        const _0x9242b5 = document['getElementById']('will-ui');
        const _0x44cd07 = document['getElementById']('will-input');
        if (_0x9242b5['style']['display'] === 'flex') {
            _0x9242b5['style']['display'] = 'none';
            if (_0x42f0ec['GAME_STATE'] !== 'NIGHT' && _0x50141f)
                _0x50141f['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x44cd07['value']
                }));
            _0x44cd07['blur']();
        } else {
            if (_0x42f0ec['GAME_STATE'] === 'NIGHT') {
                _0x366300('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x9242b5['style']['display'] = 'flex';
            _0x44cd07['focus']();
            for (let _0x31fbeb in _0x42f0ec['INPUTS']['keys'])
                _0x42f0ec['INPUTS']['keys'][_0x31fbeb] = ![];
        }
        return;
    }
    if (_0x33425a['key'] === 'Enter') {
        if (_0x40f576) {
            const _0xfaec99 = document['getElementById']('play-btn');
            if (_0xfaec99)
                _0xfaec99['click']();
            return;
        }
        if (!_0x50141f || _0x50141f['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x2ff408 = document['getElementById']('chat-ui');
        const _0x5a21f9 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x5a21f9) {
            const _0x4c2148 = _0x5a21f9['value']['trim']();
            if (_0x4c2148['length'] > 0x0) {
                _0x50141f['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x4c2148
                }));
            }
            _0x5a21f9['value'] = '';
            _0x2ff408['style']['display'] = 'none';
            _0x5a21f9['blur']();
        } else {
            _0x2ff408['style']['display'] = 'block';
            _0x5a21f9['focus']();
            for (let _0x5e7a04 in _0x42f0ec['INPUTS']['keys'])
                _0x42f0ec['INPUTS']['keys'][_0x5e7a04] = ![];
        }
        _0x33425a['preventDefault']();
        return;
    }
    if (_0x33425a['key'] === 'Escape') {
        const _0x51756b = document['getElementById']('role-index-modal');
        if (_0x51756b && _0x51756b['style']['display'] === 'flex') {
            _0x51756b['style']['display'] = 'none';
            return;
        }
        const _0x2abf8d = document['getElementById']('guide-ui');
        if (_0x2abf8d && _0x2abf8d['style']['display'] === 'flex') {
            _0x2abf8d['style']['display'] = 'none';
            return;
        }
        const _0x1eb561 = document['getElementById']('ability-ui');
        if (_0x1eb561 && _0x1eb561['style']['display'] === 'block') {
            _0x1eb561['style']['display'] = 'none';
            return;
        }
        const _0xd3b36e = document['getElementById']('settings-panel');
        if (_0xd3b36e && _0xd3b36e['style']['display'] === 'block') {
            _0xd3b36e['style']['display'] = 'none';
            return;
        }
        const _0x101a07 = document['getElementById']('mayor-confirm-dialog');
        if (_0x101a07 && _0x101a07['style']['display'] === 'flex') {
            _0x101a07['style']['display'] = 'none';
            return;
        }
        const _0x2979de = document['getElementById']('target-chooser-ui');
        if (_0x2979de && _0x2979de['style']['display'] === 'flex') {
            _0x2979de['style']['display'] = 'none';
            return;
        }
        const _0x59a629 = document['getElementById']('chat-ui');
        const _0x55f1ca = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x55f1ca) {
            _0x55f1ca['value'] = '';
            _0x59a629['style']['display'] = 'none';
            _0x55f1ca['blur']();
            _0x33425a['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x42f0ec['INPUTS']['keys']['hasOwnProperty'](_0x27f564))
            _0x42f0ec['INPUTS']['keys'][_0x27f564] = !![];
        if (!_0x50141f || _0x50141f['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x27f564 === 'h' && !_0x33425a['repeat']) {
            const _0x1b79cc = document['getElementById']('guide-ui');
            if (_0x1b79cc) {
                _0x1b79cc['style']['display'] = _0x1b79cc['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x27f564 === 't' && !_0x33425a['repeat']) {
            if (_0x5e7278['isDead'])
                return;
            if (_0x1ece76 === 'Mayor') {
                if (_0x35d57b['has'](_0x4d9678)) {
                    _0x366300('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x731672 = document['getElementById']('mayor-confirm-dialog');
                if (_0x731672)
                    _0x731672['style']['display'] = 'flex';
                return;
            }
            if (_0x42f0ec['GAME_STATE'] === 'NIGHT') {
                if (!_0x42f0ec['NIGHT_ABILITY_OPEN']) {
                    _0x366300('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x586325 = document['getElementById']('ability-ui');
                if (_0x586325) {
                    if (_0x586325['style']['display'] === 'block') {
                        _0x586325['style']['display'] = 'none';
                    } else {
                        _0x281b96();
                        _0x586325['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x42f0ec['GAME_STATE'] === 'DAY_DISCUSS' || _0x42f0ec['GAME_STATE'] === 'DAY_VOTE') {
                _0x366300('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x27f564 === 'e' && !_0x5e7278['isDead']) {
            const _0x469906 = Date['now']();
            if (!window['_lastDoorSend'] || _0x469906 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x469906;
                _0x50141f['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x1dbe5d => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x1bd4e4 = _0x1dbe5d['key']['toLowerCase']();
        if (_0x42f0ec['INPUTS']['keys']['hasOwnProperty'](_0x1bd4e4))
            _0x42f0ec['INPUTS']['keys'][_0x1bd4e4] = ![];
    }
});
window['addEventListener']('mousemove', _0x1155aa => {
    _0x42f0ec['INPUTS']['mouseX'] = _0x1155aa['clientX'];
    _0x42f0ec['INPUTS']['mouseY'] = _0x1155aa['clientY'];
    if (_0x42f0ec['INPUTS']['isMouseDown'] && _0x42f0ec['EDITOR']['enabled']) {
        _0x35926d(_0x1155aa['clientX'], _0x1155aa['clientY']);
    }
});
window['addEventListener']('mousedown', _0x527f37 => {
    if (_0x527f37['target']['closest']('#editor-ui') || _0x527f37['target']['closest']('#leaderboard-ui') || _0x527f37['target']['closest']('#role-index-btn-wrap') || _0x527f37['target']['closest']('#role-index-modal') || _0x527f37['target']['closest']('#chat-log-ui') || _0x527f37['target']['closest']('#target-chooser-ui') || _0x527f37['target']['closest']('#guide-ui') || _0x527f37['target']['closest']('#role-list-ui') || _0x527f37['target']['closest']('#ability-ui') || _0x527f37['target']['closest']('#settings-panel') || _0x527f37['target']['closest']('#mayor-confirm-dialog') || _0x527f37['target']['closest']('#mobile-action-bar') || _0x527f37['target']['closest']('#mobile-top-bar') || _0x527f37['target']['closest']('#mobile-joystick-zone') || _0x527f37['target']['closest']('#mobile-chat-overlay') || _0x527f37['target']['closest']('#will-ui') || _0x527f37['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x527f37['button'] === 0x0) {
        _0x42f0ec['INPUTS']['isMouseDown'] = !![];
        if (_0x42f0ec['EDITOR']['enabled'])
            _0x35926d(_0x527f37['clientX'], _0x527f37['clientY']);
    }
});
window['addEventListener']('mouseup', _0xad4af9 => {
    _0x42f0ec['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x14cb6a => {
    if (_0x14cb6a['target']['closest']('#settings-btn'))
        return;
    const _0x1208fe = document['getElementById']('leaderboard-list');
    const _0x123b1a = document['getElementById']('leaderboard-toggle');
    if (_0x1208fe['style']['display'] === 'none') {
        _0x1208fe['style']['display'] = 'flex';
        _0x123b1a['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x1208fe['style']['display'] = 'none';
        _0x123b1a['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x344c69 = document['getElementById']('close-target-btn');
if (_0x344c69) {
    _0x344c69['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x3821d0 = document['getElementById']('close-guide-btn');
if (_0x3821d0) {
    _0x3821d0['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x170aa4 = document['getElementById']('role-list-header');
if (_0x170aa4) {
    _0x170aa4['addEventListener']('click', () => {
        const _0x5cf7a1 = document['getElementById']('role-list-items');
        const _0x3a0ba7 = document['getElementById']('role-list-toggle');
        if (_0x5cf7a1['style']['display'] === 'none') {
            _0x5cf7a1['style']['display'] = 'flex';
            _0x3a0ba7['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x5cf7a1['style']['display'] = 'none';
            _0x3a0ba7['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x25820c() {
    const _0xe93074 = document['getElementById']('mobile-joystick-zone');
    const _0x30a810 = document['getElementById']('mobile-joystick-base');
    const _0x15698e = document['getElementById']('mobile-joystick-knob');
    if (_0xe93074 && _0x30a810 && _0x15698e) {
        const _0x326896 = 0x3e;
        const _0x1099e5 = (_0x260e33, _0x3e0e94) => {
            const _0x46cf8d = _0x30a810['getBoundingClientRect']();
            const _0x38cf76 = _0x46cf8d['left'] + _0x46cf8d['width'] / 0x2;
            const _0x45bf03 = _0x46cf8d['top'] + _0x46cf8d['height'] / 0x2;
            const _0x65737d = _0x260e33 - _0x38cf76;
            const _0x285883 = _0x3e0e94 - _0x45bf03;
            const _0x1729b7 = Math['hypot'](_0x65737d, _0x285883);
            if (_0x1729b7 === 0x0) {
                _0x5cd9d3 = 0x0;
                _0x2bc798 = 0x0;
                _0xe7298b = ![];
                _0x15698e['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x3d7c2d = Math['min'](_0x1729b7, _0x326896);
            const _0x5c9218 = _0x65737d / _0x1729b7 * _0x3d7c2d;
            const _0x305543 = _0x285883 / _0x1729b7 * _0x3d7c2d;
            _0x5cd9d3 = _0x5c9218 / _0x326896;
            _0x2bc798 = _0x305543 / _0x326896;
            _0xe7298b = _0x1729b7 >= _0x326896 * 0.75;
            _0x15698e['style']['transform'] = 'translate(' + _0x5c9218 + 'px,\x20' + _0x305543 + 'px)';
        };
        const _0x5d7797 = _0x55de2a => {
            for (let _0x166ccf = 0x0; _0x166ccf < _0x55de2a['changedTouches']['length']; _0x166ccf++) {
                const _0x1923be = _0x55de2a['changedTouches'][_0x166ccf];
                if (_0x29fdf8 === null) {
                    _0x29fdf8 = _0x1923be['identifier'];
                    _0x231c32 = !![];
                    _0x1099e5(_0x1923be['clientX'], _0x1923be['clientY']);
                    break;
                }
            }
        };
        const _0x1cc4a0 = _0x5b11fe => {
            for (let _0x8540aa = 0x0; _0x8540aa < _0x5b11fe['changedTouches']['length']; _0x8540aa++) {
                const _0x2c0f22 = _0x5b11fe['changedTouches'][_0x8540aa];
                if (_0x2c0f22['identifier'] === _0x29fdf8) {
                    _0x1099e5(_0x2c0f22['clientX'], _0x2c0f22['clientY']);
                    break;
                }
            }
        };
        const _0x3403c1 = _0x3db192 => {
            for (let _0x420c7f = 0x0; _0x420c7f < _0x3db192['changedTouches']['length']; _0x420c7f++) {
                const _0x53d221 = _0x3db192['changedTouches'][_0x420c7f];
                if (_0x53d221['identifier'] === _0x29fdf8) {
                    _0x29fdf8 = null;
                    _0x231c32 = ![];
                    _0x5cd9d3 = 0x0;
                    _0x2bc798 = 0x0;
                    _0xe7298b = ![];
                    _0x15698e['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0xe93074['addEventListener']('touchstart', _0x3691d7 => {
            _0x3691d7['preventDefault']();
            _0x5d7797(_0x3691d7);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x1cc4a0, { 'passive': !![] });
        window['addEventListener']('touchend', _0x3403c1, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x3403c1, { 'passive': !![] });
    }
    const _0x52759e = (_0x24dd4d, _0x5d679f) => {
        const _0x205ef6 = _0x24dd4d / _0x42f0ec['SYSTEM']['viewScale'];
        const _0x57855e = _0x5d679f / _0x42f0ec['SYSTEM']['viewScale'];
        const _0x3bbeae = _0x5e7278['x'] - _0x42f0ec['CAMERA']['x'] + _0x5e7278['width'] / 0x2;
        const _0x1b0e11 = _0x5e7278['y'] - _0x42f0ec['CAMERA']['y'] + _0x5e7278['height'] / 0x2;
        _0x2f32ce = Math['atan2'](_0x57855e - _0x1b0e11, _0x205ef6 - _0x3bbeae);
        _0x5bc893 = !![];
        _0x42f0ec['INPUTS']['mouseX'] = _0x24dd4d;
        _0x42f0ec['INPUTS']['mouseY'] = _0x5d679f;
    };
    _0xe7b332['addEventListener']('touchstart', _0x5279b9 => {
        if (_0x40f576)
            return;
        for (let _0x297eeb = 0x0; _0x297eeb < _0x5279b9['changedTouches']['length']; _0x297eeb++) {
            const _0x17ca21 = _0x5279b9['changedTouches'][_0x297eeb];
            if (_0x17ca21['identifier'] !== _0x29fdf8 && _0x4a09f2 === null) {
                _0x4a09f2 = _0x17ca21['identifier'];
                _0x52759e(_0x17ca21['clientX'], _0x17ca21['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0xe7b332['addEventListener']('touchmove', _0x4205a6 => {
        if (_0x40f576)
            return;
        for (let _0x20c847 = 0x0; _0x20c847 < _0x4205a6['changedTouches']['length']; _0x20c847++) {
            const _0x2bcb29 = _0x4205a6['changedTouches'][_0x20c847];
            if (_0x2bcb29['identifier'] === _0x4a09f2) {
                _0x52759e(_0x2bcb29['clientX'], _0x2bcb29['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x62d263 = _0x48b628 => {
        for (let _0x418b45 = 0x0; _0x418b45 < _0x48b628['changedTouches']['length']; _0x418b45++) {
            const _0x257f17 = _0x48b628['changedTouches'][_0x418b45];
            if (_0x257f17['identifier'] === _0x4a09f2) {
                _0x4a09f2 = null;
                _0x5bc893 = ![];
                break;
            }
        }
    };
    _0xe7b332['addEventListener']('touchend', _0x62d263, { 'passive': !![] });
    _0xe7b332['addEventListener']('touchcancel', _0x62d263, { 'passive': !![] });
    const _0x2c13e2 = document['getElementById']('mob-sprint-btn');
    if (_0x2c13e2) {
        _0x2c13e2['addEventListener']('click', _0x3510bd => {
            _0x3510bd['stopPropagation']();
            _0x305036 = !_0x305036;
            _0x2c13e2['classList']['toggle']('active', _0x305036);
        });
    }
    const _0x326618 = document['getElementById']('mob-interact-btn');
    if (_0x326618) {
        _0x326618['addEventListener']('click', _0x55bede => {
            _0x55bede['stopPropagation']();
            if (!_0x5e7278['isDead']) {
                const _0x45bb32 = Date['now']();
                if (!window['_lastDoorSend'] || _0x45bb32 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x45bb32;
                    if (_0x50141f && _0x50141f['readyState'] === WebSocket['OPEN'])
                        _0x50141f['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x64231d = document['getElementById']('mob-ability-btn');
    if (_0x64231d) {
        _0x64231d['addEventListener']('click', _0x6d14c => {
            _0x6d14c['stopPropagation']();
            if (_0x5e7278['isDead'])
                return;
            if (_0x1ece76 === 'Mayor') {
                if (_0x35d57b['has'](_0x4d9678)) {
                    _0x366300('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x4f5b26 = document['getElementById']('mayor-confirm-dialog');
                if (_0x4f5b26)
                    _0x4f5b26['style']['display'] = 'flex';
                return;
            }
            if (_0x42f0ec['GAME_STATE'] === 'NIGHT') {
                if (!_0x42f0ec['NIGHT_ABILITY_OPEN']) {
                    _0x366300('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x47a99f = document['getElementById']('ability-ui');
                if (_0x47a99f) {
                    if (_0x47a99f['style']['display'] === 'block') {
                        _0x47a99f['style']['display'] = 'none';
                    } else {
                        _0x281b96();
                        _0x47a99f['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x42f0ec['GAME_STATE'] === 'DAY_DISCUSS' || _0x42f0ec['GAME_STATE'] === 'DAY_VOTE') {
                _0x366300('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x25439b = document['getElementById']('mob-will-btn');
    const _0x44367d = document['getElementById']('will-ui');
    const _0x5d602e = document['getElementById']('will-input');
    const _0x7beb84 = document['getElementById']('close-will-btn');
    const _0x28689c = () => {
        if (!_0x44367d)
            return;
        if (_0x44367d['style']['display'] === 'flex') {
            _0x44367d['style']['display'] = 'none';
            if (_0x42f0ec['GAME_STATE'] !== 'NIGHT' && _0x50141f && _0x50141f['readyState'] === WebSocket['OPEN'] && _0x5d602e) {
                _0x50141f['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x5d602e['value']
                }));
            }
            if (_0x5d602e)
                _0x5d602e['blur']();
        } else {
            if (_0x42f0ec['GAME_STATE'] === 'NIGHT') {
                _0x366300('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x44367d['style']['display'] = 'flex';
            if (_0x5d602e)
                _0x5d602e['focus']();
        }
    };
    if (_0x25439b)
        _0x25439b['addEventListener']('click', _0x3e36d5 => {
            _0x3e36d5['stopPropagation']();
            _0x28689c();
        });
    if (_0x7beb84)
        _0x7beb84['addEventListener']('click', _0x548f56 => {
            _0x548f56['stopPropagation']();
            _0x28689c();
        });
    const _0x361783 = document['getElementById']('mob-chat-btn');
    const _0x408038 = document['getElementById']('mobile-chat-overlay');
    const _0x891f76 = document['getElementById']('mobile-chat-input');
    const _0x56e587 = document['getElementById']('mobile-chat-send');
    const _0x3f8fc9 = document['getElementById']('mobile-chat-cancel');
    const _0xebb00a = () => {
        if (!_0x408038 || !_0x891f76)
            return;
        _0x408038['style']['display'] = 'flex';
        _0x891f76['value'] = '';
        _0x891f76['focus']();
    };
    const _0x7ef568 = () => {
        if (!_0x408038 || !_0x891f76)
            return;
        _0x408038['style']['display'] = 'none';
        _0x891f76['blur']();
    };
    const _0x326c1a = () => {
        if (!_0x891f76)
            return;
        const _0x3b96c7 = _0x891f76['value']['trim']();
        if (_0x3b96c7['length'] > 0x0 && _0x50141f && _0x50141f['readyState'] === WebSocket['OPEN']) {
            _0x50141f['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x3b96c7
            }));
        }
        _0x891f76['value'] = '';
        _0x7ef568();
    };
    if (_0x361783)
        _0x361783['addEventListener']('click', _0x458cef => {
            _0x458cef['stopPropagation']();
            _0xebb00a();
        });
    if (_0x56e587)
        _0x56e587['addEventListener']('click', _0xf7e6ba => {
            _0xf7e6ba['stopPropagation']();
            _0x326c1a();
        });
    if (_0x3f8fc9)
        _0x3f8fc9['addEventListener']('click', _0x4d77dc => {
            _0x4d77dc['stopPropagation']();
            _0x7ef568();
        });
    if (_0x891f76) {
        _0x891f76['addEventListener']('keydown', _0x35383e => {
            if (_0x35383e['key'] === 'Enter') {
                _0x35383e['preventDefault']();
                _0x326c1a();
            } else if (_0x35383e['key'] === 'Escape') {
                _0x7ef568();
            }
        });
    }
    const _0x40cc80 = document['getElementById']('mob-top-chat');
    if (_0x40cc80)
        _0x40cc80['addEventListener']('click', _0x4839a0 => {
            _0x4839a0['stopPropagation']();
            _0xebb00a();
        });
    const _0x3181bd = document['getElementById']('mob-top-will');
    if (_0x3181bd)
        _0x3181bd['addEventListener']('click', _0x192ecb => {
            _0x192ecb['stopPropagation']();
            _0x28689c();
        });
    const _0x5bbe6e = document['getElementById']('mob-top-roles');
    if (_0x5bbe6e) {
        _0x5bbe6e['addEventListener']('click', _0x1ff935 => {
            _0x1ff935['stopPropagation']();
            const _0x380fc1 = document['getElementById']('role-list-ui');
            const _0x2795f1 = document['getElementById']('leaderboard-ui');
            if (_0x2795f1)
                _0x2795f1['style']['display'] = 'none';
            if (_0x380fc1)
                _0x380fc1['style']['display'] = _0x380fc1['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x24d381 = document['getElementById']('mob-top-players');
    if (_0x24d381) {
        _0x24d381['addEventListener']('click', _0x2155ae => {
            _0x2155ae['stopPropagation']();
            const _0xc847b7 = document['getElementById']('leaderboard-ui');
            const _0x114ec2 = document['getElementById']('role-list-ui');
            if (_0x114ec2)
                _0x114ec2['style']['display'] = 'none';
            if (_0xc847b7)
                _0xc847b7['style']['display'] = _0xc847b7['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x4070c7 = document['getElementById']('mob-top-help');
    if (_0x4070c7) {
        _0x4070c7['addEventListener']('click', _0x5d84c1 => {
            _0x5d84c1['stopPropagation']();
            const _0x401cdc = document['getElementById']('guide-ui');
            if (_0x401cdc)
                _0x401cdc['style']['display'] = _0x401cdc['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x495a41) {
            _0x495a41 = !![];
            _0x4a4ba5();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
