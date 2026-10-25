document['addEventListener']('contextmenu', _0x21616c => _0x21616c['preventDefault']());
const _0x1e3d20 = {
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
let _0x562926 = '';
function _0x448721(_0x504f56, _0x531a42) {
    const _0x1207f9 = document['getElementById']('role-list-ui');
    const _0x5e550e = document['getElementById']('role-list-items');
    if (!_0x1207f9 || !_0x5e550e)
        return;
    if (!_0x531a42 || _0x531a42 === 'off' || !_0x504f56 || _0x504f56['length'] === 0x0) {
        _0x1207f9['style']['display'] = 'none';
        return;
    }
    const _0x3941f4 = _0x531a42 + '|' + JSON['stringify'](_0x504f56);
    if (_0x3941f4 === _0x562926)
        return;
    _0x562926 = _0x3941f4;
    const _0x271c28 = document['getElementById']('role-tooltip');
    if (_0x271c28) {
        _0x271c28['style']['visibility'] = 'hidden';
        _0x271c28['style']['opacity'] = '0';
    }
    _0x1207f9['style']['display'] = 'flex';
    _0x5e550e['innerHTML'] = '';
    _0x504f56['forEach'](_0x552de3 => {
        const _0x1ac080 = document['createElement']('div');
        _0x1ac080['className'] = 'role-list-entry';
        const _0x10cdfc = _0x552de3['name']['includes']('Mafia') || _0x552de3['name'] === 'Skinwalker';
        _0x1ac080['classList']['add'](_0x10cdfc ? 'mafia' : 'town');
        if (_0x531a42 === 'precise' && _0x552de3['isDead']) {
            _0x1ac080['classList']['remove']('town', 'mafia');
            _0x1ac080['classList']['add']('dead');
            _0x1ac080['innerHTML'] = '<span>' + _0x552de3['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x1d6bde = _0x552de3['count'] !== undefined && _0x552de3['count'] !== null ? _0x552de3['count'] + 'x\x20' : '';
            _0x1ac080['innerHTML'] = '<span>' + _0x1d6bde + _0x552de3['name'] + '</span>';
        }
        if (_0x531a42 === 'subalignments' && _0x1e3d20[_0x552de3['name']]) {
            _0x1ac080['style']['cursor'] = 'pointer';
            _0x1ac080['addEventListener']('mouseenter', () => {
                const _0xd5225a = document['getElementById']('role-tooltip');
                if (!_0xd5225a)
                    return;
                const _0x5058b2 = _0x1e3d20[_0x552de3['name']]['join'](',\x20');
                _0xd5225a['innerHTML'] = '';
                const _0x2184c6 = document['createElement']('span');
                _0x2184c6['style']['color'] = '#ffcc00';
                _0x2184c6['textContent'] = _0x552de3['name'];
                _0xd5225a['appendChild'](_0x2184c6);
                _0xd5225a['appendChild'](document['createElement']('br'));
                _0xd5225a['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x5058b2));
                const _0x379f4e = _0x1ac080['getBoundingClientRect']();
                _0xd5225a['style']['left'] = _0x379f4e['left'] - 0xeb + 'px';
                _0xd5225a['style']['top'] = _0x379f4e['top'] + 'px';
                _0xd5225a['style']['display'] = 'block';
                _0xd5225a['style']['visibility'] = 'visible';
                _0xd5225a['style']['opacity'] = '1';
            });
            _0x1ac080['addEventListener']('mouseleave', () => {
                const _0x33c31a = document['getElementById']('role-tooltip');
                if (_0x33c31a) {
                    _0x33c31a['style']['display'] = 'none';
                    _0x33c31a['style']['visibility'] = 'hidden';
                    _0x33c31a['style']['opacity'] = '0';
                }
            });
        }
        _0x5e550e['appendChild'](_0x1ac080);
    });
}
let _0x46a4d6 = null;
let _0x51260a = null;
const _0x2a9631 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x414d8b = 'Player???';
let _0x2bc621 = ![];
let _0x5c0d1d = {};
let _0x1c95bc = null;
let _0xd2f464 = 0x0;
let _0x15f438 = 0x0;
let _0x4dfdeb = new Set();
let _0x314267 = ![];
let _0x4f4230 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x987a09 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x2c8a54 = ![];
let _0x11373b = null;
let _0x44afff = 0x0;
let _0x2f570b = 0x0;
let _0x39bc75 = ![];
let _0x42bcb6 = ![];
let _0x20a7ed = 0x0;
let _0x2f1717 = null;
let _0x5e9e16 = ![];
const _0x4cb3c3 = ((() => {
    const _0x320d33 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3'
    };
    let _0x204654 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x2432ab = 0x320;
    const _0x24ca0f = {};
    const _0x1131f1 = {};
    let _0x3e21f1 = null;
    let _0x40eac4 = _0x204654 === 0x0;
    let _0x427510 = ![];
    for (const [_0x3cb36b, _0x3b1952] of Object['entries'](_0x320d33)) {
        const _0x206e0f = new Audio(_0x3b1952);
        _0x206e0f['loop'] = !![];
        _0x206e0f['volume'] = 0x0;
        _0x206e0f['preload'] = 'auto';
        _0x24ca0f[_0x3cb36b] = _0x206e0f;
        _0x1131f1[_0x3cb36b] = null;
    }
    const _0x4013e0 = _0x4498f7 => Math['min'](0x1, Math['max'](0x0, _0x4498f7));
    function _0x89480e(_0x1bb362) {
        if (_0x1131f1[_0x1bb362] !== null) {
            cancelAnimationFrame(_0x1131f1[_0x1bb362]);
            _0x1131f1[_0x1bb362] = null;
        }
    }
    function _0x2541be(_0xd5e180, _0x75d209, _0x47b14c, _0x2598ed, _0x2f51b9) {
        _0x89480e(_0xd5e180);
        const _0x5110d4 = _0x24ca0f[_0xd5e180];
        const _0x900321 = performance['now']();
        const _0x23f235 = _0x1a6c35 => {
            const _0x17d7e2 = _0x4013e0((_0x1a6c35 - _0x900321) / _0x2598ed);
            const _0x1e1d7d = _0x4013e0(_0x75d209 + (_0x47b14c - _0x75d209) * _0x17d7e2);
            _0x5110d4['volume'] = _0x40eac4 ? 0x0 : _0x1e1d7d;
            if (_0x17d7e2 < 0x1) {
                _0x1131f1[_0xd5e180] = requestAnimationFrame(_0x23f235);
            } else {
                _0x1131f1[_0xd5e180] = null;
                _0x5110d4['volume'] = _0x40eac4 ? 0x0 : _0x4013e0(_0x47b14c);
                if (_0x2f51b9)
                    _0x2f51b9();
            }
        };
        _0x1131f1[_0xd5e180] = requestAnimationFrame(_0x23f235);
    }
    function _0x2bd557(_0x454163) {
        const _0x3e2b0d = _0x454163['play']();
        if (_0x3e2b0d && _0x3e2b0d['catch']) {
            _0x3e2b0d['catch'](() => {
                if (!_0x427510) {
                    const _0x171cb7 = () => {
                        _0x427510 = !![];
                        _0x454163['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x171cb7);
                        document['removeEventListener']('keydown', _0x171cb7);
                        document['removeEventListener']('touchstart', _0x171cb7);
                    };
                    document['addEventListener']('click', _0x171cb7, { 'once': !![] });
                    document['addEventListener']('keydown', _0x171cb7, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x171cb7, { 'once': !![] });
                }
            });
        }
    }
    function _0x2faef1(_0x49143) {
        if (!_0x320d33[_0x49143])
            return;
        if (_0x3e21f1 === _0x49143)
            return;
        const _0x3ed714 = _0x3e21f1;
        _0x3e21f1 = _0x49143;
        const _0x426e97 = _0x24ca0f[_0x49143];
        _0x89480e(_0x49143);
        _0x426e97['currentTime'] = 0x0;
        _0x426e97['volume'] = 0x0;
        _0x2bd557(_0x426e97);
        _0x2541be(_0x49143, 0x0, _0x204654, _0x2432ab);
        if (_0x3ed714 && _0x24ca0f[_0x3ed714]) {
            const _0x4c82a8 = _0x3ed714;
            const _0x508f1e = _0x24ca0f[_0x4c82a8];
            const _0x40736a = _0x4013e0(_0x508f1e['volume']);
            _0x2541be(_0x4c82a8, _0x40736a, 0x0, _0x2432ab, () => {
                _0x508f1e['pause']();
                _0x508f1e['currentTime'] = 0x0;
            });
        }
    }
    function _0x3d0942(_0x3aea97) {
        _0x204654 = _0x4013e0(_0x3aea97);
        localStorage['setItem']('musicVolume', String(_0x204654));
        if (!_0x40eac4 && _0x3e21f1 && _0x1131f1[_0x3e21f1] === null) {
            _0x24ca0f[_0x3e21f1]['volume'] = _0x204654;
        }
    }
    function _0x1504de() {
        return _0x204654;
    }
    function _0x1603f9(_0x2cd1de) {
        _0x40eac4 = _0x2cd1de;
        for (const _0x58aad9 of Object['keys'](_0x24ca0f)) {
            if (_0x1131f1[_0x58aad9] === null) {
                _0x24ca0f[_0x58aad9]['volume'] = _0x2cd1de || _0x58aad9 !== _0x3e21f1 ? 0x0 : _0x204654;
            }
        }
    }
    function _0x7349ff() {
        return _0x40eac4;
    }
    function _0xac450d(_0x307121) {
        if (_0x307121 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x307121 === 'DAY_VOTE')
            return 'voting';
        return 'wait';
    }
    function _0x257b7e(_0x5956e3) {
        _0x2faef1(_0xac450d(_0x5956e3));
    }
    function _0x3f7750(_0x231f18) {
        _0x2faef1(_0x231f18);
    }
    return {
        'play': _0x2faef1,
        'onStateChange': _0x257b7e,
        'onSoundEvent': _0x3f7750,
        'setVolume': _0x3d0942,
        'getVolume': _0x1504de,
        'setMuted': _0x1603f9,
        'isMuted': _0x7349ff
    };
})());
const _0x5a5b31 = ((() => {
    const _0x268c88 = 0x258;
    const _0x16d58e = 0xb4;
    const _0x48656e = 0x708;
    const _0x141cd1 = 0x140;
    const _0x45e631 = 0.18;
    const _0x4ee16c = 0.95;
    const _0x4a0474 = new Audio('audio/heartbeat.mp3');
    _0x4a0474['loop'] = ![];
    _0x4a0474['preload'] = 'auto';
    _0x4a0474['volume'] = 0x0;
    let _0x13191f = 0x0;
    let _0x1a45c8 = Infinity;
    function _0x507f05(_0x16f404, _0x3492b9, _0x123736) {
        return Math['min'](_0x123736, Math['max'](_0x3492b9, _0x16f404));
    }
    function _0x22a0fa(_0x468745, _0x33e3b3, _0x34fdc1) {
        return _0x468745 + (_0x33e3b3 - _0x468745) * _0x34fdc1;
    }
    function _0x5cf767(_0x434a7c) {
        if (_0x190416['GAME_STATE'] !== 'NIGHT' || _0x4c080f['isDead'] || _0x1c95bc === 'Skinwalker') {
            _0x1a45c8 = Infinity;
            return;
        }
        const _0x259d3c = _0x4c080f['x'] + 22.5;
        const _0xe20401 = _0x4c080f['y'] + 22.5;
        let _0x55c32c = Infinity;
        for (const _0x585c76 in _0x5c0d1d) {
            const _0x37c832 = _0x5c0d1d[_0x585c76];
            if (!_0x37c832['isDark'] || _0x37c832['isDead'])
                continue;
            const _0x409be9 = _0x37c832['renderX'] + 22.5 - _0x259d3c;
            const _0x322bb9 = _0x37c832['renderY'] + 22.5 - _0xe20401;
            const _0x49b0ef = Math['sqrt'](_0x409be9 * _0x409be9 + _0x322bb9 * _0x322bb9);
            if (_0x49b0ef < _0x55c32c)
                _0x55c32c = _0x49b0ef;
        }
        _0x1a45c8 = _0x55c32c;
        if (_0x55c32c > _0x268c88)
            return;
        const _0x49443a = 0x1 - _0x507f05((_0x55c32c - _0x16d58e) / (_0x268c88 - _0x16d58e), 0x0, 0x1);
        const _0x4ef216 = _0x22a0fa(_0x48656e, _0x141cd1, _0x49443a);
        const _0x5efd82 = _0x22a0fa(_0x45e631, _0x4ee16c, _0x49443a);
        if (_0x434a7c >= _0x13191f) {
            _0x4a0474['currentTime'] = 0x0;
            _0x4a0474['volume'] = _0x4cb3c3['isMuted']() ? 0x0 : _0x507f05(_0x5efd82 * _0x4cb3c3['getVolume']() / 0.7, 0x0, 0x1);
            _0x4a0474['play']()['catch'](() => {
            });
            _0x13191f = _0x434a7c + _0x4ef216;
        }
    }
    return { 'tick': _0x5cf767 };
})());
function _0x1f74d9() {
    const _0x445eba = document['getElementById']('mob-ability-btn');
    if (!_0x445eba)
        return;
    const _0x3b6c9f = _0x190416['GAME_STATE'] === 'NIGHT' && !_0x4c080f['isDead'];
    const _0x63ad3a = _0x1c95bc === 'Mayor' && !_0x4dfdeb['has'](_0x51260a) && !_0x4c080f['isDead'];
    if (_0x3b6c9f || _0x63ad3a) {
        _0x445eba['style']['display'] = 'flex';
    } else {
        _0x445eba['style']['display'] = 'none';
    }
}
function _0x4fb19b() {
    const _0x38cd95 = document['getElementById']('mobile-joystick-zone');
    const _0x1f6808 = document['getElementById']('mobile-top-bar');
    const _0x4f7e28 = document['getElementById']('mobile-action-bar');
    if (!_0x38cd95 || !_0x1f6808 || !_0x4f7e28)
        return;
    if (!_0xaca228 && _0x987a09) {
        _0x38cd95['style']['display'] = 'flex';
        _0x1f6808['style']['display'] = 'flex';
        _0x4f7e28['style']['display'] = 'flex';
        _0x1f74d9();
    } else {
        _0x38cd95['style']['display'] = 'none';
        _0x1f6808['style']['display'] = 'none';
        _0x4f7e28['style']['display'] = 'none';
    }
}
const _0x33fb14 = document['getElementById']('gameCanvas');
const _0x2d91e5 = _0x33fb14['getContext']('2d', { 'alpha': ![] });
const _0x1086d9 = 0x500;
const _0x478127 = 0x2d0;
const _0x190416 = {
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
        'width': _0x1086d9,
        'height': _0x478127
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
const _0x4c080f = {
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
const _0x50333e = new Image();
const _0x63b11f = new Image();
const _0x3a8544 = new Image();
const _0x54eaf7 = new Image();
_0x54eaf7['src'] = 'assets/mayor\x20cosmetic.png';
const _0xd9e438 = [
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
const _0x424a8b = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x5cdaee = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x5cdaee === 'body1.png' || _0x5cdaee === 'body1')
    _0x5cdaee = 'body01.png';
if (!_0x5cdaee['endsWith']('.png'))
    _0x5cdaee += '.png';
let _0x50e0ed = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x50e0ed['endsWith']('.png'))
    _0x50e0ed += '.png';
let _0xaca228 = !![];
let _0x55521c = null;
let _0x53fc60 = null;
let _0x3e8846 = 0x3c;
let _0x2581f5 = 0x2d;
const _0x3e2e76 = {};
const _0x22ef99 = new Image();
_0x22ef99['src'] = 'assets/yanito932.png';
_0x3e2e76['assets/yanito932.png'] = _0x22ef99;
function _0xdce440(_0x4ad453) {
    if (!_0x3e2e76[_0x4ad453] || !_0x3e2e76[_0x4ad453]['complete'] && _0x3e2e76[_0x4ad453]['naturalWidth'] === 0x0 && _0x3e2e76[_0x4ad453]['naturalHeight'] === 0x0) {
        const _0x13f44c = new Image();
        _0x13f44c['src'] = _0x4ad453;
        _0x3e2e76[_0x4ad453] = _0x13f44c;
    }
    return _0x3e2e76[_0x4ad453];
}
function _0x415330(_0x5f400, _0x3c00cb, _0x4c83fa, _0x1dccf6, _0x3e830f) {
    try {
        const _0x2d85b4 = 'assets/' + (_0x3c00cb || 'body01.png');
        const _0x3ca154 = _0xdce440(_0x2d85b4);
        if (_0x3ca154['complete'] && _0x3ca154['naturalWidth'] > 0x0) {
            _0x5f400['drawImage'](_0x3ca154, -_0x1dccf6 / 0x2, -_0x3e830f / 0x2, _0x1dccf6, _0x3e830f);
        }
        if (_0x4c83fa === null || _0x4c83fa === undefined)
            return;
        const _0x58fc28 = 'assets/' + _0x4c83fa;
        const _0x42547d = _0xdce440(_0x58fc28);
        if (_0x42547d['complete'] && _0x42547d['naturalWidth'] > 0x0) {
            _0x5f400['drawImage'](_0x42547d, -_0x1dccf6 / 0x2, -_0x3e830f / 0x2, _0x1dccf6, _0x3e830f);
        }
    } catch (_0x3485f5) {
    }
}
function _0x4c547b() {
    const _0xb6a6da = document['getElementById']('body-skin-grid');
    const _0x1c971f = document['getElementById']('eyes-skin-grid');
    if (!_0xb6a6da || !_0x1c971f)
        return;
    _0xb6a6da['innerHTML'] = '';
    _0xd9e438['forEach'](_0x157d15 => {
        const _0x3659be = document['createElement']('button');
        _0x3659be['className'] = 'skin-btn' + (_0x157d15 === _0x5cdaee ? '\x20selected' : '');
        const _0x23b89e = document['createElement']('img');
        _0x23b89e['src'] = 'assets/' + _0x157d15;
        _0x3659be['appendChild'](_0x23b89e);
        _0x3659be['onclick'] = () => {
            _0x5cdaee = _0x157d15;
            localStorage['setItem']('selectedBody', _0x157d15);
            _0xb6a6da['querySelectorAll']('.skin-btn')['forEach'](_0x2f1827 => _0x2f1827['classList']['remove']('selected'));
            _0x3659be['classList']['add']('selected');
        };
        _0xb6a6da['appendChild'](_0x3659be);
    });
    _0x1c971f['innerHTML'] = '';
    _0x424a8b['forEach'](_0x145a8d => {
        const _0x4dce88 = document['createElement']('button');
        _0x4dce88['className'] = 'skin-btn' + (_0x145a8d === _0x50e0ed ? '\x20selected' : '');
        const _0x3a7c68 = document['createElement']('img');
        _0x3a7c68['src'] = 'assets/' + _0x145a8d;
        _0x4dce88['appendChild'](_0x3a7c68);
        _0x4dce88['onclick'] = () => {
            _0x50e0ed = _0x145a8d;
            localStorage['setItem']('selectedEyes', _0x145a8d);
            _0x1c971f['querySelectorAll']('.skin-btn')['forEach'](_0x513709 => _0x513709['classList']['remove']('selected'));
            _0x4dce88['classList']['add']('selected');
        };
        _0x1c971f['appendChild'](_0x4dce88);
    });
}
function _0x1fa6c9(_0x2ecd7c) {
    if (!_0x190416['MAP']['columns'] || !_0x190416['CAMERA']['width'])
        return;
    const _0x389aa2 = Math['max'](0x0, _0x190416['MAP']['columns'] * _0x190416['MAP']['tileSize'] - _0x190416['CAMERA']['width']);
    const _0x5ed6c1 = Math['max'](0x0, _0x190416['MAP']['rows'] * _0x190416['MAP']['tileSize'] - _0x190416['CAMERA']['height']);
    if (_0x55521c === null) {
        _0x55521c = _0x389aa2 / 0x2;
        _0x53fc60 = _0x5ed6c1 / 0x2;
    }
    _0x55521c += _0x3e8846 * _0x2ecd7c;
    _0x53fc60 += _0x2581f5 * _0x2ecd7c;
    if (_0x55521c <= 0x0) {
        _0x55521c = 0x0;
        _0x3e8846 = Math['abs'](_0x3e8846);
    } else if (_0x55521c >= _0x389aa2) {
        _0x55521c = _0x389aa2;
        _0x3e8846 = -Math['abs'](_0x3e8846);
    }
    if (_0x53fc60 <= 0x0) {
        _0x53fc60 = 0x0;
        _0x2581f5 = Math['abs'](_0x2581f5);
    } else if (_0x53fc60 >= _0x5ed6c1) {
        _0x53fc60 = _0x5ed6c1;
        _0x2581f5 = -Math['abs'](_0x2581f5);
    }
    _0x190416['CAMERA']['x'] = _0x55521c;
    _0x190416['CAMERA']['y'] = _0x53fc60;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x2cee23 = document['getElementById']('play-btn');
    const _0x3d54dc = document['getElementById']('username-input');
    const _0x2d3ddc = localStorage['getItem']('playerName');
    if (_0x2d3ddc && _0x3d54dc) {
        _0x3d54dc['value'] = _0x2d3ddc;
    }
    const _0x3a7b0d = () => {
        _0x4cb3c3['play']('wait');
        document['removeEventListener']('click', _0x3a7b0d);
        document['removeEventListener']('keydown', _0x3a7b0d);
        document['removeEventListener']('touchstart', _0x3a7b0d);
    };
    document['addEventListener']('click', _0x3a7b0d, { 'once': !![] });
    document['addEventListener']('keydown', _0x3a7b0d, { 'once': !![] });
    document['addEventListener']('touchstart', _0x3a7b0d, { 'once': !![] });
    if (_0x2cee23) {
        _0x2cee23['addEventListener']('click', () => {
            const _0x90585c = _0x3d54dc['value'];
            const _0x5e1446 = _0x90585c['replace'](/<[^>]*>/g, '')['replace'](/[^\x20-\x7E]/g, '')['replace'](/[<>]/g, '')['replace'](/\s+/g, '\x20')['trim']()['substring'](0x0, 0xe);
            _0x414d8b = _0x5e1446 || 'Player';
            localStorage['setItem']('playerName', _0x414d8b);
            _0xaca228 = ![];
            _0x190416['CAMERA']['x'] = null;
            _0x190416['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x1c47a2 = document['getElementById']('controls-hint');
            if (_0x1c47a2 && !_0x987a09)
                _0x1c47a2['style']['display'] = 'block';
            _0x4fb19b();
            if (_0x987a09) {
                const _0x4d3b1f = document['getElementById']('leaderboard-list');
                const _0x59b4fc = document['getElementById']('leaderboard-toggle');
                if (_0x4d3b1f) {
                    _0x4d3b1f['style']['display'] = 'none';
                    if (_0x59b4fc)
                        _0x59b4fc['style']['transform'] = 'rotate(180deg)';
                }
                const _0x19164b = document['getElementById']('role-list-items');
                const _0x1a8560 = document['getElementById']('role-list-toggle');
                if (_0x19164b) {
                    _0x19164b['style']['display'] = 'none';
                    if (_0x1a8560)
                        _0x1a8560['style']['transform'] = 'rotate(180deg)';
                }
            }
            if (_0x46a4d6 && _0x46a4d6['readyState'] === WebSocket['OPEN']) {
                _0x46a4d6['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x414d8b,
                    'token': _0x2a9631,
                    'body': _0x5cdaee,
                    'eyes': _0x50e0ed
                }));
            } else if (!_0x46a4d6 || _0x46a4d6['readyState'] === WebSocket['CLOSED'] || _0x46a4d6['readyState'] === WebSocket['CLOSING']) {
                _0x4424bf();
            }
        });
    }
    _0x4c547b();
    _0x4424bf();
    _0x6eb914();
    _0x2ad602();
    _0x24934e();
});
function _0x2ad602() {
    const _0x48582b = document['getElementById']('settings-btn');
    const _0x5b1cdd = document['getElementById']('settings-panel');
    const _0x234c62 = document['getElementById']('close-settings-btn');
    const _0x3bb159 = document['getElementById']('setting-mouse-relative');
    if (_0x3bb159) {
        _0x3bb159['checked'] = _0x4f4230;
        _0x3bb159['addEventListener']('change', () => {
            _0x4f4230 = _0x3bb159['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x4f4230 ? 'true' : 'false');
        });
    }
    const _0x5d3009 = document['getElementById']('setting-music-volume');
    const _0x5b796c = document['getElementById']('setting-music-volume-display');
    function _0xe241b6(_0x453efd) {
        const _0x4a90de = (_0x453efd['value'] - _0x453efd['min']) / (_0x453efd['max'] - _0x453efd['min']) * 0x64;
        _0x453efd['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x4a90de + '%,\x20#444\x20' + _0x4a90de + '%)';
    }
    if (_0x5d3009) {
        const _0x508065 = _0x4cb3c3['getVolume']();
        const _0x513ae4 = Math['round'](_0x508065 * 0x64);
        _0x5d3009['value'] = _0x513ae4;
        if (_0x5b796c)
            _0x5b796c['textContent'] = _0x513ae4 + '%';
        _0xe241b6(_0x5d3009);
        _0x5d3009['addEventListener']('input', () => {
            const _0x399eb1 = parseInt(_0x5d3009['value'], 0xa);
            if (_0x5b796c)
                _0x5b796c['textContent'] = _0x399eb1 + '%';
            _0xe241b6(_0x5d3009);
            _0x4cb3c3['setVolume'](_0x399eb1 / 0x64);
            _0x4cb3c3['setMuted'](_0x399eb1 === 0x0);
        });
    }
    if (_0x48582b && _0x5b1cdd) {
        _0x48582b['addEventListener']('click', _0x4faa31 => {
            _0x4faa31['stopPropagation']();
            _0x5b1cdd['style']['display'] = _0x5b1cdd['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x234c62 && _0x5b1cdd) {
        _0x234c62['addEventListener']('click', () => {
            _0x5b1cdd['style']['display'] = 'none';
        });
    }
    const _0x2513f2 = document['getElementById']('mayor-confirm-yes');
    const _0x3fb603 = document['getElementById']('mayor-confirm-no');
    const _0x6710dc = document['getElementById']('mayor-confirm-dialog');
    if (_0x2513f2 && _0x6710dc) {
        _0x2513f2['addEventListener']('click', () => {
            if (_0x46a4d6 && _0x46a4d6['readyState'] === WebSocket['OPEN']) {
                _0x46a4d6['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x6710dc['style']['display'] = 'none';
        });
    }
    if (_0x3fb603 && _0x6710dc) {
        _0x3fb603['addEventListener']('click', () => {
            _0x6710dc['style']['display'] = 'none';
        });
    }
    const _0x6e183f = document['getElementById']('close-ability-btn');
    if (_0x6e183f) {
        _0x6e183f['addEventListener']('click', () => {
            const _0xf946c0 = document['getElementById']('ability-ui');
            if (_0xf946c0)
                _0xf946c0['style']['display'] = 'none';
        });
    }
}
let _0x391a5c = '';
function _0x471bbc(_0x4d31c6) {
    const _0x807223 = document['getElementById']('vote-tally-panel');
    const _0x9792a3 = document['getElementById']('vote-tally-list');
    if (!_0x807223 || !_0x9792a3)
        return;
    if (_0x4d31c6['state'] !== 'DAY_VOTE') {
        _0x807223['style']['display'] = 'none';
        _0x391a5c = '';
        return;
    }
    _0x807223['style']['display'] = 'block';
    const _0x4afd85 = {};
    for (const _0x2b8825 in _0x5c0d1d) {
        if (!_0x5c0d1d[_0x2b8825]['isDead'])
            _0x4afd85[_0x2b8825] = 0x0;
    }
    if (_0x51260a && !_0x4c080f['isDead'])
        _0x4afd85[_0x51260a] = 0x0;
    const _0x5314f8 = _0x4d31c6['votes'] || {};
    for (const _0x540206 in _0x5314f8) {
        const _0x475da2 = _0x5314f8[_0x540206];
        const _0x377693 = _0x4d31c6['mayorRevealed'] && _0x4d31c6['mayorRevealed'][_0x540206] ? 0x2 : 0x1;
        _0x4afd85[_0x475da2] = (_0x4afd85[_0x475da2] || 0x0) + _0x377693;
    }
    let _0x30e827 = 0x0;
    const _0x5715bf = _0x4d31c6['skips'] || {};
    for (const _0x3c9bef in _0x5715bf) {
        _0x30e827 += Number(_0x5715bf[_0x3c9bef]) || 0x1;
    }
    const _0x57b0a9 = JSON['stringify'](_0x4afd85) + '_' + _0x30e827 + '_' + _0x4c080f['isDead'];
    if (_0x57b0a9 === _0x391a5c)
        return;
    _0x391a5c = _0x57b0a9;
    _0x9792a3['innerHTML'] = '';
    for (const _0x145dbc in _0x4afd85) {
        const _0x524497 = parseInt(_0x145dbc);
        const _0x449dee = _0x524497 === _0x51260a ? _0x414d8b : _0x5c0d1d[_0x145dbc] ? _0x5c0d1d[_0x145dbc]['name'] : 'Player\x20' + _0x145dbc;
        const _0x32e22f = document['createElement']('div');
        _0x32e22f['className'] = 'vote-tally-entry';
        const _0x2e460f = document['createElement']('span');
        _0x2e460f['textContent'] = _0x449dee;
        const _0x208602 = document['createElement']('span');
        _0x208602['className'] = 'vote-count';
        _0x208602['textContent'] = _0x4afd85[_0x145dbc] + '\x20vote' + (_0x4afd85[_0x145dbc] === 0x1 ? '' : 's');
        _0x32e22f['appendChild'](_0x2e460f);
        _0x32e22f['appendChild'](_0x208602);
        if (_0x524497 !== _0x51260a && !_0x4c080f['isDead']) {
            _0x32e22f['style']['cursor'] = 'pointer';
            _0x32e22f['title'] = 'Vote\x20for\x20' + _0x449dee;
            _0x32e22f['addEventListener']('click', _0x5d08fb => {
                _0x5d08fb['stopPropagation']();
                if (_0x46a4d6 && _0x46a4d6['readyState'] === WebSocket['OPEN']) {
                    _0x46a4d6['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x449dee
                    }));
                }
            });
        }
        _0x9792a3['appendChild'](_0x32e22f);
    }
    const _0x5ac8a7 = document['createElement']('div');
    _0x5ac8a7['className'] = 'vote-tally-skip';
    _0x5ac8a7['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x30e827 + '</span>';
    if (!_0x4c080f['isDead']) {
        _0x5ac8a7['style']['cursor'] = 'pointer';
        _0x5ac8a7['title'] = 'Click\x20to\x20skip\x20vote';
        _0x5ac8a7['addEventListener']('click', _0xba1a1a => {
            _0xba1a1a['stopPropagation']();
            if (_0x46a4d6 && _0x46a4d6['readyState'] === WebSocket['OPEN']) {
                _0x46a4d6['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x9792a3['appendChild'](_0x5ac8a7);
}
let _0xd60b0c = null;
let _0x31907e = null;
let _0x55f043 = null;
function _0x421ecf() {
    if (_0x46a4d6 && _0x46a4d6['readyState'] === WebSocket['OPEN']) {
        _0x46a4d6['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0xd60b0c,
            'abilityTarget': _0x31907e,
            'killTarget': _0x55f043
        }));
    }
}
function _0x43475e() {
    const _0x449703 = document['getElementById']('ability-ui-body');
    if (!_0x449703)
        return;
    _0x449703['innerHTML'] = '';
    if (_0x1c95bc === 'Celebrity' || _0x1c95bc === 'Mayor') {
        const _0x1f13e5 = document['createElement']('div');
        _0x1f13e5['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x1f13e5['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x449703['appendChild'](_0x1f13e5);
        return;
    }
    if (_0x1c95bc === 'Skinwalker') {
        const _0x1cf34d = document['createElement']('div');
        _0x1cf34d['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x1cf34d['innerText'] = 'Transform\x20into:';
        _0x449703['appendChild'](_0x1cf34d);
        const _0x3179b2 = document['createElement']('div');
        _0x3179b2['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x378ed8 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x689abc = _0x423c00 => {
            if (!_0x190416['ROLE_LIST_RAW'] || _0x190416['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x190416['ROLE_LIST_RAW']['some'](_0x9a3b41 => {
                if (_0x9a3b41['name'] === _0x423c00)
                    return !_0x9a3b41['isDead'];
                if (_0x1e3d20[_0x9a3b41['name']] && _0x1e3d20[_0x9a3b41['name']]['includes'](_0x423c00))
                    return !![];
                return ![];
            });
        };
        const _0xe69ae9 = [
            'None',
            ..._0x378ed8['filter'](_0x689abc)
        ];
        _0xe69ae9['forEach'](_0x29c4de => {
            const _0x4fad77 = document['createElement']('button');
            _0x4fad77['className'] = 'layer-btn';
            _0x4fad77['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x4fad77['innerText'] = _0x29c4de;
            const _0x16d548 = _0x29c4de === 'None' && !_0xd60b0c || _0xd60b0c === _0x29c4de;
            if (_0x16d548)
                _0x4fad77['classList']['add']('active');
            _0x4fad77['onclick'] = () => {
                _0xd60b0c = _0x29c4de === 'None' ? null : _0x29c4de;
                _0x421ecf();
                _0x43475e();
            };
            _0x3179b2['appendChild'](_0x4fad77);
        });
        _0x449703['appendChild'](_0x3179b2);
        if (_0x689abc('Vigilante')) {
            const _0x3474df = document['createElement']('div');
            _0x3474df['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x3474df['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x449703['appendChild'](_0x3474df);
        }
        if (_0xd60b0c === 'Vigilante') {
            const _0x3be62b = document['createElement']('div');
            _0x3be62b['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x3be62b['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x449703['appendChild'](_0x3be62b);
        } else if (_0xd60b0c && _0xd60b0c !== 'Celebrity') {
            const _0x5b07a6 = document['createElement']('div');
            _0x5b07a6['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x5b07a6['innerText'] = 'Use\x20' + _0xd60b0c + '\x20ability\x20on:';
            _0x449703['appendChild'](_0x5b07a6);
            const _0x37b9a4 = document['createElement']('div');
            _0x37b9a4['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x4d6f1e = document['createElement']('button');
            _0x4d6f1e['className'] = 'layer-btn';
            _0x4d6f1e['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x4d6f1e['innerText'] = 'No\x20one';
            if (!_0x31907e)
                _0x4d6f1e['classList']['add']('active');
            _0x4d6f1e['onclick'] = () => {
                _0x31907e = null;
                _0x421ecf();
                _0x43475e();
            };
            _0x37b9a4['appendChild'](_0x4d6f1e);
            for (const _0x46db4e in _0x5c0d1d) {
                const _0x3c7c63 = _0x5c0d1d[_0x46db4e];
                if (_0x3c7c63['isDead'])
                    continue;
                const _0x1f139b = document['createElement']('button');
                _0x1f139b['className'] = 'layer-btn';
                _0x1f139b['innerText'] = _0x3c7c63['name'];
                if (_0x31907e === parseInt(_0x46db4e))
                    _0x1f139b['classList']['add']('active');
                _0x1f139b['onclick'] = () => {
                    _0x31907e = parseInt(_0x46db4e);
                    _0x421ecf();
                    _0x43475e();
                };
                _0x37b9a4['appendChild'](_0x1f139b);
            }
            _0x449703['appendChild'](_0x37b9a4);
        }
        const _0x293f34 = document['createElement']('div');
        _0x293f34['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x293f34['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x449703['appendChild'](_0x293f34);
        const _0x16c0b7 = document['createElement']('div');
        _0x16c0b7['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x4f6c37 = document['createElement']('button');
        _0x4f6c37['className'] = 'layer-btn';
        _0x4f6c37['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x4f6c37['innerText'] = 'No\x20one';
        if (!_0x55f043 && !_0x190416['CURRENT_TARGET'])
            _0x4f6c37['classList']['add']('active');
        _0x4f6c37['onclick'] = () => {
            _0x55f043 = null;
            _0x190416['CURRENT_TARGET'] = null;
            _0x421ecf();
            _0x43475e();
        };
        _0x16c0b7['appendChild'](_0x4f6c37);
        for (const _0x466e1f in _0x5c0d1d) {
            const _0x5a8586 = _0x5c0d1d[_0x466e1f];
            if (_0x5a8586['isDead'])
                continue;
            const _0x31e4a7 = document['createElement']('button');
            _0x31e4a7['className'] = 'layer-btn';
            _0x31e4a7['innerText'] = _0x5a8586['name'];
            if (_0x55f043 === parseInt(_0x466e1f) || _0x190416['CURRENT_TARGET'] === parseInt(_0x466e1f))
                _0x31e4a7['classList']['add']('active');
            _0x31e4a7['onclick'] = () => {
                _0x55f043 = parseInt(_0x466e1f);
                _0x190416['CURRENT_TARGET'] = parseInt(_0x466e1f);
                _0x421ecf();
                _0x43475e();
            };
            _0x16c0b7['appendChild'](_0x31e4a7);
        }
        _0x449703['appendChild'](_0x16c0b7);
        return;
    }
    let _0x192edb = '';
    let _0x4541b9 = ![];
    if (_0x1c95bc === 'Doctor') {
        _0x192edb = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x4541b9 = !![];
    } else if (_0x1c95bc === 'Investigator') {
        _0x192edb = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x1c95bc === 'Tracker') {
        _0x192edb = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x1c95bc === 'Archer') {
        _0x192edb = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x1c95bc === 'Escort') {
        _0x192edb = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x1c95bc === 'Vigilante') {
        _0x192edb = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x141fd2 = document['createElement']('div');
    _0x141fd2['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x141fd2['innerText'] = _0x192edb;
    _0x449703['appendChild'](_0x141fd2);
    const _0x6af855 = document['createElement']('div');
    _0x6af855['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x25a686 = document['createElement']('button');
    _0x25a686['className'] = 'layer-btn';
    _0x25a686['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x25a686['innerText'] = 'No\x20one';
    if (_0x190416['CURRENT_TARGET'] === null)
        _0x25a686['classList']['add']('active');
    _0x25a686['onclick'] = () => {
        _0x190416['CURRENT_TARGET'] = null;
        if (_0x46a4d6 && _0x46a4d6['readyState'] === WebSocket['OPEN']) {
            _0x46a4d6['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x43475e();
    };
    _0x6af855['appendChild'](_0x25a686);
    for (const _0x31e683 in _0x5c0d1d) {
        const _0x4aba1b = _0x5c0d1d[_0x31e683];
        if (_0x4aba1b['isDead'])
            continue;
        const _0x2c7705 = document['createElement']('button');
        _0x2c7705['className'] = 'layer-btn';
        _0x2c7705['innerText'] = _0x4aba1b['name'];
        if (_0x190416['CURRENT_TARGET'] === parseInt(_0x31e683))
            _0x2c7705['classList']['add']('active');
        _0x2c7705['onclick'] = () => {
            _0x190416['CURRENT_TARGET'] = parseInt(_0x31e683);
            if (_0x46a4d6 && _0x46a4d6['readyState'] === WebSocket['OPEN']) {
                _0x46a4d6['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x31e683)
                }));
            }
            _0x43475e();
        };
        _0x6af855['appendChild'](_0x2c7705);
    }
    if (_0x4541b9 && !_0x4c080f['isDead']) {
        const _0x4064f0 = document['createElement']('button');
        _0x4064f0['className'] = 'layer-btn';
        _0x4064f0['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x4064f0['innerText'] = _0x414d8b + '\x20(Self)';
        if (_0x190416['CURRENT_TARGET'] === _0x51260a)
            _0x4064f0['classList']['add']('active');
        _0x4064f0['onclick'] = () => {
            _0x190416['CURRENT_TARGET'] = _0x51260a;
            if (_0x46a4d6 && _0x46a4d6['readyState'] === WebSocket['OPEN']) {
                _0x46a4d6['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x51260a
                }));
            }
            _0x43475e();
        };
        _0x6af855['appendChild'](_0x4064f0);
    }
    _0x449703['appendChild'](_0x6af855);
}
function _0x4424bf() {
    if (_0x46a4d6 && (_0x46a4d6['readyState'] === WebSocket['OPEN'] || _0x46a4d6['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x403fbd = new URLSearchParams();
    if (_0x2a9631)
        _0x403fbd['set']('token', _0x2a9631);
    _0x403fbd['set']('ngrok-skip-browser-warning', 'true');
    const _0x2244cc = 'wss://prison-rankings-inspector-terry.trycloudflare.com';
    const _0xa35a96 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x2244cc;
    const _0x37deab = _0xa35a96 + '/?' + _0x403fbd['toString']();
    _0x46a4d6 = new WebSocket(_0x37deab);
    _0x46a4d6['onopen'] = function () {
        if (!_0xaca228 && this['readyState'] === WebSocket['OPEN']) {
            this['send'](JSON['stringify']({
                'type': 'join',
                'name': _0x414d8b,
                'token': _0x2a9631,
                'body': _0x5cdaee,
                'eyes': _0x50e0ed
            }));
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x46a4d6 && _0x46a4d6['readyState'] === WebSocket['OPEN']) {
            _0x46a4d6['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x46a4d6['onclose'] = _0x1fe07c => {
        if (_0x1fe07c['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x1fe07c['code'] === 0xfa2 || _0x1fe07c['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x15b052 = document['getElementById']('disconnect-overlay');
        if (!_0x15b052) {
            _0x15b052 = document['createElement']('div');
            _0x15b052['id'] = 'disconnect-overlay';
            _0x15b052['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x15b052['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x15b052);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x46a4d6['onmessage'] = _0x2d720b => {
        const _0x551b86 = JSON['parse'](_0x2d720b['data']);
        if (_0x551b86['type'] === 'map_data') {
            _0x190416['MAP']['tileSize'] = _0x551b86['map']['tileSize'];
            _0x190416['MAP']['columns'] = _0x551b86['map']['columns'];
            _0x190416['MAP']['rows'] = _0x551b86['map']['rows'];
            _0x190416['MAP']['layers'] = _0x551b86['map']['layers'];
            if (_0x551b86['map']['doors']) {
                _0x190416['MAP']['doors'] = _0x551b86['map']['doors'];
                const _0x50293d = _0x190416['MAP']['layers']['find'](_0x45d283 => _0x45d283['name'] === 'floor2');
                if (_0x50293d) {
                    for (const _0x3d4ada in _0x190416['MAP']['doors']) {
                        _0x50293d['data'][parseInt(_0x3d4ada)] = 0x2;
                    }
                }
            }
            if (_0x551b86['entities'])
                _0x190416['ENTITIES'] = _0x551b86['entities'];
            _0x21486f();
            _0x190416['SYSTEM']['isReady'] = !![];
            _0x15d11f();
            if (!_0x190416['SYSTEM']['_gameLoopRunning']) {
                _0x190416['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x4a71d8);
            }
            return;
        }
        if (_0x551b86['type'] === 'init') {
            _0x51260a = _0x551b86['id'];
            _0xaca228 = ![];
            _0x4fb19b();
            if (_0x987a09) {
                const _0x45b515 = document['getElementById']('leaderboard-list');
                const _0x453d30 = document['getElementById']('leaderboard-toggle');
                if (_0x45b515) {
                    _0x45b515['style']['display'] = 'none';
                    if (_0x453d30)
                        _0x453d30['style']['transform'] = 'rotate(180deg)';
                }
                const _0x649709 = document['getElementById']('role-list-items');
                const _0x1523ca = document['getElementById']('role-list-toggle');
                if (_0x649709) {
                    _0x649709['style']['display'] = 'none';
                    if (_0x1523ca)
                        _0x1523ca['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x2bc621 = _0x551b86['isOwner'] || ![];
            _0x414d8b = _0x551b86['name'] || _0x414d8b;
            _0x190416['MAP']['tileSize'] = _0x551b86['map']['tileSize'];
            _0x190416['MAP']['columns'] = _0x551b86['map']['columns'];
            _0x190416['MAP']['rows'] = _0x551b86['map']['rows'];
            _0x190416['MAP']['layers'] = _0x551b86['map']['layers'];
            if (_0x551b86['map']['doors']) {
                _0x190416['MAP']['doors'] = _0x551b86['map']['doors'];
                const _0x330c45 = _0x190416['MAP']['layers']['find'](_0x40b14a => _0x40b14a['name'] === 'floor2');
                if (_0x330c45) {
                    for (const _0x1dcb46 in _0x190416['MAP']['doors']) {
                        _0x330c45['data'][parseInt(_0x1dcb46)] = 0x2;
                    }
                }
            }
            if (_0x551b86['entities'])
                _0x190416['ENTITIES'] = _0x551b86['entities'];
            _0x21486f();
            _0x4c080f['x'] = _0x190416['MAP']['columns'] * _0x190416['MAP']['tileSize'] / 0x2;
            _0x4c080f['y'] = _0x190416['MAP']['rows'] * _0x190416['MAP']['tileSize'] / 0x2;
            _0x190416['CAMERA']['x'] = _0x4c080f['x'] + _0x4c080f['width'] / 0x2 - _0x190416['CAMERA']['width'] / 0x2;
            _0x190416['CAMERA']['y'] = _0x4c080f['y'] + _0x4c080f['height'] / 0x2 - _0x190416['CAMERA']['height'] / 0x2;
            if (_0x2bc621) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x528440();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x190416['SYSTEM']['lastTime'] = performance['now']();
            _0x190416['SYSTEM']['isReady'] = !![];
            _0x5d5553();
            if (!_0x190416['SYSTEM']['_gameLoopRunning']) {
                _0x190416['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x4a71d8);
            }
            return;
        } else if (_0x551b86['type'] === 'state') {
            const _0x4deacb = {};
            for (const _0x125bcd in _0x551b86['players']) {
                if (parseInt(_0x125bcd) === _0x51260a)
                    continue;
                const _0x3ab2a8 = _0x551b86['players'][_0x125bcd];
                const _0x3cd534 = _0x5c0d1d[_0x125bcd];
                if (_0x3cd534) {
                    const _0x51f1c4 = _0x3ab2a8['x'] - _0x3cd534['renderX'];
                    const _0x1cd7fe = _0x3ab2a8['y'] - _0x3cd534['renderY'];
                    const _0x307739 = _0x51f1c4 * _0x51f1c4 + _0x1cd7fe * _0x1cd7fe > 0x78 * 0x78;
                    Object['assign'](_0x3cd534, _0x3ab2a8);
                    if (_0x307739) {
                        _0x3cd534['renderX'] = _0x3ab2a8['x'];
                        _0x3cd534['renderY'] = _0x3ab2a8['y'];
                    }
                    _0x4deacb[_0x125bcd] = _0x3cd534;
                } else {
                    _0x4deacb[_0x125bcd] = {
                        ..._0x3ab2a8,
                        'renderX': _0x3ab2a8['x'],
                        'renderY': _0x3ab2a8['y'],
                        'renderAngle': _0x3ab2a8['angle'] || 0x0
                    };
                }
            }
            _0x5c0d1d = _0x4deacb;
            if (_0x551b86['players'][_0x51260a]) {
                const _0x4c3d12 = _0x551b86['players'][_0x51260a];
                _0x4c080f['chats'] = _0x4c3d12['chats'] || [];
                _0x4c080f['isDead'] = _0x4c3d12['isDead'];
                if (_0x4c3d12['name'])
                    _0x414d8b = _0x4c3d12['name'];
                _0x5d5553();
                const _0x4ff738 = Math['hypot'](_0x4c3d12['x'] - _0x4c080f['x'], _0x4c3d12['y'] - _0x4c080f['y']);
                if (_0x4ff738 > 0x32) {
                    _0x4c080f['x'] += (_0x4c3d12['x'] - _0x4c080f['x']) * 0.35;
                    _0x4c080f['y'] += (_0x4c3d12['y'] - _0x4c080f['y']) * 0.35;
                }
            }
            if (_0x551b86['entities'])
                _0x190416['ENTITIES'] = _0x551b86['entities'];
            if (_0x551b86['game']) {
                _0x190416['GAME_STATE'] = _0x551b86['game']['state'];
                _0x190416['NIGHT_ABILITY_OPEN'] = _0x551b86['game']['nightAbilityOpen'];
                if (_0x551b86['game']['mayorRevealed']) {
                    for (const _0x494362 in _0x551b86['game']['mayorRevealed']) {
                        _0x4dfdeb['add'](parseInt(_0x494362));
                    }
                }
                if (_0x190416['LAST_STATE'] !== _0x190416['GAME_STATE']) {
                    if (_0x190416['GAME_STATE'] !== 'NIGHT') {
                        _0x190416['CURRENT_TARGET'] = null;
                        _0xd60b0c = null;
                        _0x31907e = null;
                        _0x55f043 = null;
                        const _0x283432 = document['getElementById']('ability-ui');
                        if (_0x283432)
                            _0x283432['style']['display'] = 'none';
                    }
                    if (_0x190416['GAME_STATE'] === 'NIGHT') {
                        _0x4c080f['chats'] = [];
                        for (const _0x401d94 in _0x5c0d1d) {
                            _0x5c0d1d[_0x401d94]['chats'] = [];
                        }
                    }
                    _0x190416['LAST_STATE'] = _0x190416['GAME_STATE'];
                    _0x1f74d9();
                    _0x4cb3c3['onStateChange'](_0x190416['GAME_STATE'], _0x551b86['game']['nightAbilityOpen']);
                }
                const _0x582100 = document['getElementById']('phase-ui');
                if (_0x582100) {
                    _0x582100['style']['display'] = 'block';
                    let _0x5a8b37 = _0x551b86['game']['state']['replace']('_', '\x20');
                    if (_0x551b86['game']['state'] === 'DAY_DISCUSS') {
                        _0x5a8b37 = 'DAY\x20' + (_0x551b86['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x551b86['game']['timer'] + 's';
                    } else if (_0x551b86['game']['state'] === 'DAY_VOTE') {
                        _0x5a8b37 = 'DAY\x20' + (_0x551b86['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x551b86['game']['timer'] + 's';
                    } else if (_0x551b86['game']['state'] === 'NIGHT') {
                        const _0x3db610 = _0x551b86['game']['dayCount'] || 0x1;
                        if (_0x551b86['game']['nightAbilityOpen']) {
                            _0x5a8b37 = 'NIGHT\x20' + _0x3db610 + '\x20ABILITY\x20PHASE';
                            const _0x54d0ce = _0x551b86['game']['abilityTimer'] !== undefined ? _0x551b86['game']['abilityTimer'] : _0x551b86['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x54d0ce + 's';
                        } else {
                            _0x5a8b37 = 'NIGHT\x20' + _0x3db610;
                            document['getElementById']('phase-timer')['innerText'] = _0x551b86['game']['timer'] + 's';
                        }
                    }
                    document['getElementById']('phase-name')['innerText'] = _0x5a8b37;
                }
                if (_0x551b86['game']['state'] === 'NIGHT') {
                    const _0x2f4050 = document['getElementById']('ability-timer-label');
                    if (_0x2f4050) {
                        const _0x5e78e4 = _0x551b86['game']['abilityTimer'] !== undefined ? _0x551b86['game']['abilityTimer'] : _0x551b86['game']['timer'];
                        _0x2f4050['innerText'] = _0x551b86['game']['nightAbilityOpen'] ? _0x5e78e4 + 's' : '';
                    }
                    if (_0x551b86['game']['nightAbilityOpen'] && !_0x314267 && !_0x4c080f['isDead']) {
                        _0x314267 = !![];
                        _0x43475e();
                        const _0x3b8178 = document['getElementById']('ability-ui');
                        if (_0x3b8178)
                            _0x3b8178['style']['display'] = 'block';
                    }
                    if (!_0x551b86['game']['nightAbilityOpen']) {
                        const _0x579bf4 = document['getElementById']('ability-ui');
                        if (_0x579bf4 && _0x579bf4['style']['display'] === 'block') {
                            _0x579bf4['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x314267 = ![];
                }
                _0x471bbc(_0x551b86['game']);
                if (_0x551b86['game']['roleListMode'] !== undefined) {
                    _0x190416['ROLE_LIST_RAW'] = _0x551b86['game']['roleList'] || [];
                    _0x448721(_0x551b86['game']['roleList'], _0x551b86['game']['roleListMode']);
                }
            }
        } else if (_0x551b86['type'] === 'teleport') {
            _0x4c080f['x'] = _0x551b86['x'];
            _0x4c080f['y'] = _0x551b86['y'];
            _0x4c080f['vx'] = 0x0;
            _0x4c080f['vy'] = 0x0;
            _0x190416['CAMERA']['x'] = null;
            if (_0x551b86['teleportId'] !== undefined)
                _0x15f438 = _0x551b86['teleportId'];
        } else if (_0x551b86['type'] === 'bulk_teleport') {
            for (const _0x27b6ea in _0x551b86['positions']) {
                const _0x3d7606 = _0x551b86['positions'][_0x27b6ea];
                if (parseInt(_0x27b6ea) === _0x51260a) {
                    _0x4c080f['x'] = _0x3d7606['x'];
                    _0x4c080f['y'] = _0x3d7606['y'];
                    _0x4c080f['vx'] = 0x0;
                    _0x4c080f['vy'] = 0x0;
                    _0x190416['CAMERA']['x'] = null;
                    continue;
                }
                const _0x250bb2 = _0x5c0d1d[_0x27b6ea];
                if (_0x250bb2) {
                    _0x250bb2['x'] = _0x3d7606['x'];
                    _0x250bb2['y'] = _0x3d7606['y'];
                    _0x250bb2['renderX'] = _0x3d7606['x'];
                    _0x250bb2['renderY'] = _0x3d7606['y'];
                    _0x250bb2['vx'] = 0x0;
                    _0x250bb2['vy'] = 0x0;
                }
            }
        } else if (_0x551b86['type'] === 'player_left') {
            delete _0x5c0d1d[_0x551b86['id']];
            _0x4dfdeb['delete'](parseInt(_0x551b86['id']));
        } else if (_0x551b86['type'] === 'map_update') {
            const _0x3d9eef = _0x190416['MAP']['layers']['find'](_0x3d9502 => _0x3d9502['name'] === _0x551b86['layer']);
            if (_0x3d9eef) {
                _0x3d9eef['data'][_0x551b86['row'] * _0x190416['MAP']['columns'] + _0x551b86['col']] = _0x551b86['gid'];
                const _0x1f37aa = _0x551b86['row'] * _0x190416['MAP']['columns'] + _0x551b86['col'];
                if (_0x190416['MAP']['doors'] && _0x190416['MAP']['doors'][_0x1f37aa]) {
                    const _0x701642 = _0x190416['MAP']['layers']['find'](_0x1cee0b => _0x1cee0b['name'] === 'floor2');
                    if (_0x701642)
                        _0x701642['data'][_0x1f37aa] = 0x2;
                }
                const _0x2e7139 = Math['floor'](_0x551b86['col'] * _0x190416['MAP']['tileSize'] / _0x190416['MAP']['chunkSize']);
                const _0x399438 = Math['floor'](_0x551b86['row'] * _0x190416['MAP']['tileSize'] / _0x190416['MAP']['chunkSize']);
                _0x3a7b2c(_0x2e7139, _0x399438);
            }
        } else if (_0x551b86['type'] === 'role_assign') {
            _0x1c95bc = _0x551b86['role'];
            _0x4c080f['isDead'] = _0x1c95bc === 'Spectator';
            _0x4dfdeb['clear']();
            _0x190416['CURRENT_TARGET'] = null;
            _0xd60b0c = null;
            _0x31907e = null;
            _0x55f043 = null;
            _0x314267 = ![];
            const _0x5d878c = document['getElementById']('ability-ui');
            if (_0x5d878c)
                _0x5d878c['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x1c95bc;
            _0x1f74d9();
            _0x567c7e(_0x1c95bc === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x1c95bc, !![]);
            let _0x1f3877 = '';
            if (_0x1c95bc === 'Investigator')
                _0x1f3877 = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x1c95bc === 'Tracker')
                _0x1f3877 = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x1c95bc === 'Doctor')
                _0x1f3877 = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x1c95bc === 'Archer')
                _0x1f3877 = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x1c95bc === 'Escort')
                _0x1f3877 = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x1c95bc === 'Vigilante')
                _0x1f3877 = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x1c95bc === 'Skinwalker')
                _0x1f3877 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x1c95bc === 'Celebrity')
                _0x1f3877 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x1c95bc === 'Mayor')
                _0x1f3877 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x567c7e(_0x1f3877, !![]);
        } else if (_0x551b86['type'] === 'mayor_reveal') {
            _0x4dfdeb['add'](parseInt(_0x551b86['playerId']));
            _0x5d5553();
            _0x1f74d9();
        } else if (_0x551b86['type'] === 'rolelist_update') {
            _0x190416['ROLE_LIST_RAW'] = _0x551b86['list'] || [];
            _0x448721(_0x551b86['list'], _0x551b86['mode']);
        } else if (_0x551b86['type'] === 'sound_event') {
            _0x4cb3c3['onSoundEvent'](_0x551b86['track']);
        } else if (_0x551b86['type'] === 'game_over') {
            _0x4cb3c3['onStateChange']('LOBBY', ![]);
            _0x448721([], 'off');
            _0x1c95bc = null;
            _0x4c080f['isDead'] = ![];
            _0x4dfdeb['clear']();
            _0x190416['CURRENT_TARGET'] = null;
            _0xd60b0c = null;
            _0x31907e = null;
            _0x55f043 = null;
            _0x314267 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x1f74d9();
            _0x567c7e('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x551b86['type'] === 'chat_log') {
            _0x567c7e(_0x551b86['sender'] + ':\x20' + _0x551b86['text']);
        } else if (_0x551b86['type'] === 'sys_chat') {
            _0x567c7e(_0x551b86['text'], !![]);
        }
    };
}
function _0x567c7e(_0x2008f7, _0x4ec87f = ![]) {
    const _0x880c88 = document['getElementById']('chat-log-messages');
    const _0x5a16c6 = document['getElementById']('chat-log-ui');
    const _0x52529c = _0x5a16c6['scrollHeight'] - _0x5a16c6['scrollTop'] - _0x5a16c6['clientHeight'] < 0x1e;
    const _0x820178 = document['createElement']('div');
    _0x820178['className'] = 'chat-log-line' + (_0x4ec87f ? '\x20sys-msg' : '');
    _0x820178['innerText'] = _0x2008f7;
    _0x880c88['appendChild'](_0x820178);
    if (_0x52529c) {
        _0x5a16c6['scrollTop'] = _0x5a16c6['scrollHeight'];
    }
    if (_0x880c88['childElementCount'] > 0xc8) {
        _0x880c88['removeChild'](_0x880c88['firstChild']);
    }
}
let _0x194c0f = -0x1, _0x14b4fc = -0x1, _0x1f01c3 = -0x1, _0x712bc8 = 0x0;
function _0x2530ce() {
    if (!_0x51260a || !_0x46a4d6 || _0x46a4d6['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x38aec4 = performance['now']();
    const _0x16d499 = _0x38aec4 - _0x712bc8;
    const _0x299084 = Math['abs'](_0x4c080f['x'] - _0x194c0f) > 0.05 || Math['abs'](_0x4c080f['y'] - _0x14b4fc) > 0.05 || Math['abs'](_0x4c080f['angle'] - _0x1f01c3) > 0.02;
    if (!_0x299084 && _0x16d499 < 0xc8)
        return;
    if (_0x16d499 < 0x19)
        return;
    _0x712bc8 = _0x38aec4;
    _0x194c0f = _0x4c080f['x'];
    _0x14b4fc = _0x4c080f['y'];
    _0x1f01c3 = _0x4c080f['angle'];
    if (!_0x51260a || !_0x46a4d6 || _0x46a4d6['readyState'] !== WebSocket['OPEN'])
        return;
    _0x46a4d6['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x4c080f['x'],
        'y': _0x4c080f['y'],
        'vx': _0x4c080f['vx'],
        'vy': _0x4c080f['vy'],
        'angle': _0x4c080f['angle'],
        'scale': _0x4c080f['scale'],
        'teleportId': _0x15f438
    }));
}
function _0x356e88() {
    if (_0x4c080f['isDead'])
        return;
    const _0x5c430a = _0x190416['MAP']['layers']['find'](_0x365732 => _0x365732['name'] === 'walls');
    if (!_0x5c430a)
        return;
    const _0x21993a = _0x4c080f['scale'];
    const _0x5df7c5 = _0x4c080f['width'] * _0x21993a / 0x2;
    for (let _0x3a678f = 0x0; _0x3a678f < 0x3; _0x3a678f++) {
        let _0x49b59e = _0x4c080f['x'] + _0x4c080f['width'] / 0x2;
        let _0xee0b7e = _0x4c080f['y'] + _0x4c080f['height'] / 0x2;
        const _0x5cb952 = Math['floor']((_0x49b59e - _0x5df7c5) / _0x190416['MAP']['tileSize']);
        const _0x54e51d = Math['floor']((_0x49b59e + _0x5df7c5) / _0x190416['MAP']['tileSize']);
        const _0x7f955e = Math['floor']((_0xee0b7e - _0x5df7c5) / _0x190416['MAP']['tileSize']);
        const _0x52591d = Math['floor']((_0xee0b7e + _0x5df7c5) / _0x190416['MAP']['tileSize']);
        for (let _0x12276a = _0x7f955e; _0x12276a <= _0x52591d; _0x12276a++) {
            for (let _0x47bfad = _0x5cb952; _0x47bfad <= _0x54e51d; _0x47bfad++) {
                if (_0x47bfad < 0x0 || _0x47bfad >= _0x190416['MAP']['columns'] || _0x12276a < 0x0 || _0x12276a >= _0x190416['MAP']['rows'])
                    continue;
                if (_0x5c430a['data'][_0x12276a * _0x190416['MAP']['columns'] + _0x47bfad] === 0x0)
                    continue;
                const _0x2387bf = _0x47bfad * _0x190416['MAP']['tileSize'];
                const _0x526df8 = _0x12276a * _0x190416['MAP']['tileSize'];
                const _0x5cdd73 = _0x49b59e < _0x2387bf ? _0x2387bf : _0x49b59e > _0x2387bf + _0x190416['MAP']['tileSize'] ? _0x2387bf + _0x190416['MAP']['tileSize'] : _0x49b59e;
                const _0x234be8 = _0xee0b7e < _0x526df8 ? _0x526df8 : _0xee0b7e > _0x526df8 + _0x190416['MAP']['tileSize'] ? _0x526df8 + _0x190416['MAP']['tileSize'] : _0xee0b7e;
                const _0x128c8c = _0x49b59e - _0x5cdd73;
                const _0x492617 = _0xee0b7e - _0x234be8;
                const _0x278391 = Math['sqrt'](_0x128c8c * _0x128c8c + _0x492617 * _0x492617);
                if (_0x278391 < _0x5df7c5) {
                    if (_0x278391 === 0x0) {
                        const _0x1cf76d = _0x49b59e - _0x2387bf;
                        const _0x90e8e3 = _0x2387bf + _0x190416['MAP']['tileSize'] - _0x49b59e;
                        const _0x722a1 = _0xee0b7e - _0x526df8;
                        const _0x3bf4b1 = _0x526df8 + _0x190416['MAP']['tileSize'] - _0xee0b7e;
                        const _0x313cd3 = Math['min'](_0x1cf76d, _0x90e8e3, _0x722a1, _0x3bf4b1);
                        if (_0x313cd3 === _0x1cf76d)
                            _0x49b59e = _0x2387bf - _0x5df7c5;
                        else if (_0x313cd3 === _0x90e8e3)
                            _0x49b59e = _0x2387bf + _0x190416['MAP']['tileSize'] + _0x5df7c5;
                        else if (_0x313cd3 === _0x722a1)
                            _0xee0b7e = _0x526df8 - _0x5df7c5;
                        else
                            _0xee0b7e = _0x526df8 + _0x190416['MAP']['tileSize'] + _0x5df7c5;
                    } else {
                        const _0x100174 = _0x5df7c5 - _0x278391;
                        _0x49b59e += _0x128c8c / _0x278391 * _0x100174;
                        _0xee0b7e += _0x492617 / _0x278391 * _0x100174;
                        const _0x30a4b0 = _0x4c080f['vx'] * (_0x128c8c / _0x278391) + _0x4c080f['vy'] * (_0x492617 / _0x278391);
                        if (_0x30a4b0 < 0x0) {
                            _0x4c080f['vx'] -= _0x30a4b0 * (_0x128c8c / _0x278391);
                            _0x4c080f['vy'] -= _0x30a4b0 * (_0x492617 / _0x278391);
                        }
                    }
                }
            }
        }
        _0x4c080f['x'] = _0x49b59e - _0x4c080f['width'] / 0x2;
        _0x4c080f['y'] = _0xee0b7e - _0x4c080f['height'] / 0x2;
    }
}
function _0x23dd00(_0x2e9ee9) {
    const _0x2da607 = _0x190416['MAP']['layers']['find'](_0x4ea97c => _0x4ea97c['name'] === 'walls');
    if (!_0x2da607)
        return;
    const _0x3b0975 = _0x2e9ee9['width'] / 0x2;
    for (let _0x24b1b5 = 0x0; _0x24b1b5 < 0x2; _0x24b1b5++) {
        let _0x1f29ec = _0x2e9ee9['x'] + _0x2e9ee9['width'] / 0x2;
        let _0x13543b = _0x2e9ee9['y'] + _0x2e9ee9['height'] / 0x2;
        const _0xb7cd47 = Math['floor']((_0x1f29ec - _0x3b0975) / _0x190416['MAP']['tileSize']);
        const _0x2844bf = Math['floor']((_0x1f29ec + _0x3b0975) / _0x190416['MAP']['tileSize']);
        const _0x16a6fb = Math['floor']((_0x13543b - _0x3b0975) / _0x190416['MAP']['tileSize']);
        const _0x3917a4 = Math['floor']((_0x13543b + _0x3b0975) / _0x190416['MAP']['tileSize']);
        for (let _0x5e7e3d = _0x16a6fb; _0x5e7e3d <= _0x3917a4; _0x5e7e3d++) {
            for (let _0x227d54 = _0xb7cd47; _0x227d54 <= _0x2844bf; _0x227d54++) {
                if (_0x227d54 < 0x0 || _0x227d54 >= _0x190416['MAP']['columns'] || _0x5e7e3d < 0x0 || _0x5e7e3d >= _0x190416['MAP']['rows'])
                    continue;
                if (_0x2da607['data'][_0x5e7e3d * _0x190416['MAP']['columns'] + _0x227d54] === 0x0)
                    continue;
                const _0x60dce2 = _0x227d54 * _0x190416['MAP']['tileSize'];
                const _0x45a450 = _0x5e7e3d * _0x190416['MAP']['tileSize'];
                const _0x22c9db = _0x1f29ec < _0x60dce2 ? _0x60dce2 : _0x1f29ec > _0x60dce2 + _0x190416['MAP']['tileSize'] ? _0x60dce2 + _0x190416['MAP']['tileSize'] : _0x1f29ec;
                const _0x3c59ea = _0x13543b < _0x45a450 ? _0x45a450 : _0x13543b > _0x45a450 + _0x190416['MAP']['tileSize'] ? _0x45a450 + _0x190416['MAP']['tileSize'] : _0x13543b;
                const _0x307553 = _0x1f29ec - _0x22c9db;
                const _0x390439 = _0x13543b - _0x3c59ea;
                const _0x35b049 = Math['sqrt'](_0x307553 * _0x307553 + _0x390439 * _0x390439);
                if (_0x35b049 < _0x3b0975) {
                    if (_0x35b049 === 0x0) {
                        const _0x324297 = _0x1f29ec - _0x60dce2;
                        const _0x32d6bc = _0x60dce2 + _0x190416['MAP']['tileSize'] - _0x1f29ec;
                        const _0x5b789a = _0x13543b - _0x45a450;
                        const _0x3a3d14 = _0x45a450 + _0x190416['MAP']['tileSize'] - _0x13543b;
                        const _0x4b1d4d = Math['min'](_0x324297, _0x32d6bc, _0x5b789a, _0x3a3d14);
                        if (_0x4b1d4d === _0x324297)
                            _0x1f29ec = _0x60dce2 - _0x3b0975;
                        else if (_0x4b1d4d === _0x32d6bc)
                            _0x1f29ec = _0x60dce2 + _0x190416['MAP']['tileSize'] + _0x3b0975;
                        else if (_0x4b1d4d === _0x5b789a)
                            _0x13543b = _0x45a450 - _0x3b0975;
                        else
                            _0x13543b = _0x45a450 + _0x190416['MAP']['tileSize'] + _0x3b0975;
                    } else {
                        const _0x42797b = _0x3b0975 - _0x35b049;
                        _0x1f29ec += _0x307553 / _0x35b049 * _0x42797b;
                        _0x13543b += _0x390439 / _0x35b049 * _0x42797b;
                    }
                }
            }
        }
        _0x2e9ee9['x'] = _0x1f29ec - _0x2e9ee9['width'] / 0x2;
        _0x2e9ee9['y'] = _0x13543b - _0x2e9ee9['height'] / 0x2;
    }
}
function _0x31cdb8(_0x5ab3ac) {
    const _0x24ad11 = _0x5ab3ac['width'] / 0x2;
    for (let _0x1e0d0c = 0x0; _0x1e0d0c < 0x2; _0x1e0d0c++) {
        let _0x2dfaf8 = _0x5ab3ac['x'] + _0x5ab3ac['width'] / 0x2;
        let _0x433837 = _0x5ab3ac['y'] + _0x5ab3ac['height'] / 0x2;
        for (const _0x251ccf of _0x190416['ENTITIES']) {
            const _0x2d2c75 = _0x2dfaf8 < _0x251ccf['x'] ? _0x251ccf['x'] : _0x2dfaf8 > _0x251ccf['x'] + _0x251ccf['w'] ? _0x251ccf['x'] + _0x251ccf['w'] : _0x2dfaf8;
            const _0x238368 = _0x433837 < _0x251ccf['y'] ? _0x251ccf['y'] : _0x433837 > _0x251ccf['y'] + _0x251ccf['h'] ? _0x251ccf['y'] + _0x251ccf['h'] : _0x433837;
            const _0xf5a1ee = _0x2dfaf8 - _0x2d2c75;
            const _0x30c066 = _0x433837 - _0x238368;
            const _0x5a5ec1 = Math['sqrt'](_0xf5a1ee * _0xf5a1ee + _0x30c066 * _0x30c066);
            if (_0x5a5ec1 < _0x24ad11 && _0x5a5ec1 > 0x0) {
                const _0x49c283 = _0x24ad11 - _0x5a5ec1;
                const _0x1a3bd2 = _0xf5a1ee / _0x5a5ec1;
                const _0x1a8c31 = _0x30c066 / _0x5a5ec1;
                _0x2dfaf8 += _0x1a3bd2 * _0x49c283;
                _0x433837 += _0x1a8c31 * _0x49c283;
            } else if (_0x5a5ec1 === 0x0) {
                const _0x36c5fd = _0x2dfaf8 - _0x251ccf['x'];
                const _0x1c6329 = _0x251ccf['x'] + _0x251ccf['w'] - _0x2dfaf8;
                const _0x514d6d = _0x433837 - _0x251ccf['y'];
                const _0x39c0ab = _0x251ccf['y'] + _0x251ccf['h'] - _0x433837;
                const _0x3ed034 = Math['min'](_0x36c5fd, _0x1c6329, _0x514d6d, _0x39c0ab);
                if (_0x3ed034 === _0x36c5fd)
                    _0x2dfaf8 = _0x251ccf['x'] - _0x24ad11;
                else if (_0x3ed034 === _0x1c6329)
                    _0x2dfaf8 = _0x251ccf['x'] + _0x251ccf['w'] + _0x24ad11;
                else if (_0x3ed034 === _0x514d6d)
                    _0x433837 = _0x251ccf['y'] - _0x24ad11;
                else
                    _0x433837 = _0x251ccf['y'] + _0x251ccf['h'] + _0x24ad11;
            }
        }
        _0x5ab3ac['x'] = _0x2dfaf8 - _0x5ab3ac['width'] / 0x2;
        _0x5ab3ac['y'] = _0x433837 - _0x5ab3ac['height'] / 0x2;
    }
}
function _0x19f3b9() {
    if (_0x4c080f['isDead'])
        return;
    const _0x2b425f = _0x4c080f['width'] / 0x2;
    const _0x106158 = _0x4c080f['x'] + _0x4c080f['width'] / 0x2;
    const _0x4d8181 = _0x4c080f['y'] + _0x4c080f['height'] / 0x2;
    for (const _0x3a0916 in _0x5c0d1d) {
        const _0x23f66e = _0x5c0d1d[_0x3a0916];
        if (_0x23f66e['isDead'])
            continue;
        const _0x7c736e = _0x23f66e['width'] / 0x2;
        const _0x2fdbac = _0x2b425f + _0x7c736e;
        const _0x1b25ec = (_0x23f66e['renderX'] ?? _0x23f66e['x']) + _0x23f66e['width'] / 0x2;
        const _0x4f598e = (_0x23f66e['renderY'] ?? _0x23f66e['y']) + _0x23f66e['height'] / 0x2;
        const _0x844194 = _0x106158 - _0x1b25ec;
        const _0x4cca05 = _0x4d8181 - _0x4f598e;
        const _0x1b00d2 = Math['sqrt'](_0x844194 * _0x844194 + _0x4cca05 * _0x4cca05);
        if (_0x1b00d2 > 0x0 && _0x1b00d2 < _0x2fdbac) {
            const _0x2c4796 = _0x2fdbac - _0x1b00d2;
            const _0x15afe9 = _0x844194 / _0x1b00d2;
            const _0x4fcfab = _0x4cca05 / _0x1b00d2;
            _0x4c080f['x'] += _0x15afe9 * (_0x2c4796 * 0.25);
            _0x4c080f['y'] += _0x4fcfab * (_0x2c4796 * 0.25);
            _0x23f66e['x'] -= _0x15afe9 * (_0x2c4796 * 0.75);
            _0x23f66e['y'] -= _0x4fcfab * (_0x2c4796 * 0.75);
            _0x23dd00(_0x23f66e);
            _0x31cdb8(_0x23f66e);
            if (_0x23f66e['renderX'] !== undefined) {
                _0x23f66e['renderX'] = _0x23f66e['x'];
                _0x23f66e['renderY'] = _0x23f66e['y'];
            }
            const _0x117ad6 = _0x4c080f['vx'] * _0x15afe9 + _0x4c080f['vy'] * _0x4fcfab;
            if (_0x117ad6 < 0x0) {
                _0x4c080f['vx'] -= _0x117ad6 * _0x15afe9 * 0.25;
                _0x4c080f['vy'] -= _0x117ad6 * _0x4fcfab * 0.25;
            }
        }
    }
    _0x356e88();
    _0x1d129d();
}
function _0x1d129d() {
    if (_0x4c080f['isDead'])
        return;
    const _0x171d83 = _0x4c080f['scale'];
    const _0x45b37b = _0x4c080f['width'] * _0x171d83 / 0x2;
    for (let _0x574b36 = 0x0; _0x574b36 < 0x2; _0x574b36++) {
        let _0x3dd6da = _0x4c080f['x'] + _0x4c080f['width'] / 0x2;
        let _0x15cbb6 = _0x4c080f['y'] + _0x4c080f['height'] / 0x2;
        for (const _0x151fa5 of _0x190416['ENTITIES']) {
            const _0x1947bb = _0x3dd6da < _0x151fa5['x'] ? _0x151fa5['x'] : _0x3dd6da > _0x151fa5['x'] + _0x151fa5['w'] ? _0x151fa5['x'] + _0x151fa5['w'] : _0x3dd6da;
            const _0x194854 = _0x15cbb6 < _0x151fa5['y'] ? _0x151fa5['y'] : _0x15cbb6 > _0x151fa5['y'] + _0x151fa5['h'] ? _0x151fa5['y'] + _0x151fa5['h'] : _0x15cbb6;
            const _0x3ce683 = _0x3dd6da - _0x1947bb;
            const _0x2054fe = _0x15cbb6 - _0x194854;
            const _0x301c7f = Math['sqrt'](_0x3ce683 * _0x3ce683 + _0x2054fe * _0x2054fe);
            if (_0x301c7f < _0x45b37b && _0x301c7f > 0x0) {
                const _0x57b7a3 = _0x45b37b - _0x301c7f;
                const _0x230ca8 = _0x3ce683 / _0x301c7f;
                const _0x419614 = _0x2054fe / _0x301c7f;
                _0x3dd6da += _0x230ca8 * _0x57b7a3;
                _0x15cbb6 += _0x419614 * _0x57b7a3;
                const _0x4e80f4 = _0x4c080f['vx'] * _0x230ca8 + _0x4c080f['vy'] * _0x419614;
                if (_0x4e80f4 < 0x0) {
                    _0x4c080f['vx'] -= _0x4e80f4 * _0x230ca8;
                    _0x4c080f['vy'] -= _0x4e80f4 * _0x419614;
                }
            } else if (_0x301c7f === 0x0) {
                const _0x4f88d9 = _0x3dd6da - _0x151fa5['x'];
                const _0x4dbd5e = _0x151fa5['x'] + _0x151fa5['w'] - _0x3dd6da;
                const _0x4ca7fb = _0x15cbb6 - _0x151fa5['y'];
                const _0x2c224a = _0x151fa5['y'] + _0x151fa5['h'] - _0x15cbb6;
                const _0x4129b1 = Math['min'](_0x4f88d9, _0x4dbd5e, _0x4ca7fb, _0x2c224a);
                if (_0x4129b1 === _0x4f88d9)
                    _0x3dd6da = _0x151fa5['x'] - _0x45b37b;
                else if (_0x4129b1 === _0x4dbd5e)
                    _0x3dd6da = _0x151fa5['x'] + _0x151fa5['w'] + _0x45b37b;
                else if (_0x4129b1 === _0x4ca7fb)
                    _0x15cbb6 = _0x151fa5['y'] - _0x45b37b;
                else
                    _0x15cbb6 = _0x151fa5['y'] + _0x151fa5['h'] + _0x45b37b;
            }
        }
        _0x4c080f['x'] = _0x3dd6da - _0x4c080f['width'] / 0x2;
        _0x4c080f['y'] = _0x15cbb6 - _0x4c080f['height'] / 0x2;
    }
}
function _0x1454aa(_0x5cad8c, _0x3a0423) {
    const _0x333390 = _0x190416['MAP']['layers']['find'](_0x18768e => _0x18768e['name'] === 'trees');
    if (!_0x333390)
        return ![];
    const _0x17fde0 = Math['floor'](_0x5cad8c / _0x190416['MAP']['tileSize']);
    const _0x181dd7 = Math['floor'](_0x3a0423 / _0x190416['MAP']['tileSize']);
    if (_0x17fde0 < 0x0 || _0x17fde0 >= _0x190416['MAP']['columns'] || _0x181dd7 < 0x0 || _0x181dd7 >= _0x190416['MAP']['rows'])
        return ![];
    return _0x333390['data'][_0x181dd7 * _0x190416['MAP']['columns'] + _0x17fde0] === 0xb;
}
let _0xd7ac29 = null;
function _0x55377b() {
    const _0x548a0b = _0x190416['MAP'];
    const _0x11ef17 = _0x548a0b['layers']['find'](_0x1e3d7d => _0x1e3d7d['name'] === 'floor2');
    const _0x46725e = _0x548a0b['layers']['find'](_0x471016 => _0x471016['name'] === 'walls');
    if (!_0x11ef17 || !_0x46725e) {
        _0xd7ac29 = null;
        return;
    }
    const _0x197ff6 = _0x548a0b['columns'];
    const _0x4e81c0 = _0x548a0b['rows'];
    const _0x1eeab8 = [];
    const _0x4e7e36 = [];
    const _0x1b640e = new Set();
    for (let _0x1f1668 = 0x0; _0x1f1668 < _0x4e81c0; _0x1f1668++) {
        for (let _0x4c0a4d = 0x0; _0x4c0a4d < _0x197ff6; _0x4c0a4d++) {
            const _0x18422d = _0x1f1668 * _0x197ff6 + _0x4c0a4d;
            const _0x46f0f4 = _0x11ef17['data'][_0x18422d];
            const _0x1c479a = _0x46725e['data'][_0x18422d];
            if (_0x46f0f4 === 0x2 || _0x46f0f4 === 0x4) {
                _0x1eeab8['push']({
                    'c': _0x4c0a4d,
                    'r': _0x1f1668
                });
                if (_0x1c479a !== 0x0)
                    _0x4e7e36['push']({
                        'c': _0x4c0a4d,
                        'r': _0x1f1668
                    });
            }
            if (_0x1c479a !== 0x0)
                _0x1b640e['add'](_0x4c0a4d + ',' + _0x1f1668);
        }
    }
    const _0x52ccaa = new Set(_0x1eeab8['map'](_0x28c59d => _0x28c59d['c'] + ',' + _0x28c59d['r']));
    const _0x22de3e = [
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
                c: _0x4613fd,
                r: _0x421231
            } of _0x1eeab8) {
        for (const [_0x2d73a6, _0x5f218f] of _0x22de3e) {
            const _0x20b347 = _0x4613fd + _0x2d73a6, _0xe9c3e9 = _0x421231 + _0x5f218f;
            const _0xcbd10e = _0x20b347 + ',' + _0xe9c3e9;
            if (!_0x52ccaa['has'](_0xcbd10e))
                _0x1b640e['add'](_0xcbd10e);
        }
    }
    _0xd7ac29 = {
        'wallSet': _0x1b640e,
        'floorTiles': _0x1eeab8,
        'wallTiles': _0x4e7e36,
        'interiorSet': _0x52ccaa
    };
}
function _0x1ec5ff() {
    const _0xf0c3c7 = _0x190416['MAP']['layers']['find'](_0x38e1b2 => _0x38e1b2['name'] === 'floor2');
    if (!_0xf0c3c7)
        return ![];
    const _0x18273f = Math['floor']((_0x4c080f['x'] + _0x4c080f['width'] / 0x2) / _0x190416['MAP']['tileSize']);
    const _0x476a84 = Math['floor']((_0x4c080f['y'] + _0x4c080f['height'] / 0x2) / _0x190416['MAP']['tileSize']);
    if (_0x18273f < 0x0 || _0x18273f >= _0x190416['MAP']['columns'] || _0x476a84 < 0x0 || _0x476a84 >= _0x190416['MAP']['rows'])
        return ![];
    const _0x2889b7 = _0xf0c3c7['data'][_0x476a84 * _0x190416['MAP']['columns'] + _0x18273f];
    return _0x2889b7 === 0x2;
}
function _0x55726f() {
    if (_0x4c080f['isDead']) {
        _0x190416['SHADOW']['polygon'] = null;
        return;
    }
    const _0x502bf5 = _0x190416['MAP'];
    const _0x514ff7 = _0x190416['SHADOW'];
    const _0x2a9664 = _0x502bf5['tileSize'];
    if (!_0xd7ac29)
        _0x55377b();
    if (!_0xd7ac29) {
        _0x514ff7['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x4bcc91,
        floorTiles: _0x5ccdf2
    } = _0xd7ac29;
    if (_0x5ccdf2['length'] === 0x0) {
        _0x514ff7['polygon'] = null;
        return;
    }
    if (!_0x1ec5ff()) {
        _0x514ff7['polygon'] = null;
        return;
    }
    const _0x4adda7 = _0x4c080f['x'] + _0x4c080f['width'] / 0x2;
    const _0x3e5fc0 = _0x4c080f['y'] + _0x4c080f['height'] / 0x2;
    if (!_0xd7ac29['_bounds']) {
        let _0x1ffcc0 = Infinity, _0x47e2aa = -Infinity, _0x447406 = Infinity, _0x5dce1d = -Infinity;
        for (const {
                    c: _0x47207b,
                    r: _0x18d8da
                } of _0x5ccdf2) {
            if (_0x47207b < _0x1ffcc0)
                _0x1ffcc0 = _0x47207b;
            if (_0x47207b > _0x47e2aa)
                _0x47e2aa = _0x47207b;
            if (_0x18d8da < _0x447406)
                _0x447406 = _0x18d8da;
            if (_0x18d8da > _0x5dce1d)
                _0x5dce1d = _0x18d8da;
        }
        _0xd7ac29['_bounds'] = {
            'minC': Math['max'](0x0, _0x1ffcc0 - 0x1),
            'maxC': Math['min'](_0x502bf5['columns'] - 0x1, _0x47e2aa + 0x1),
            'minR': Math['max'](0x0, _0x447406 - 0x1),
            'maxR': Math['min'](_0x502bf5['rows'] - 0x1, _0x5dce1d + 0x1)
        };
        const _0x1cf2b8 = [];
        for (let _0x203391 = _0xd7ac29['_bounds']['minR']; _0x203391 <= _0xd7ac29['_bounds']['maxR']; _0x203391++) {
            for (let _0x39662e = _0xd7ac29['_bounds']['minC']; _0x39662e <= _0xd7ac29['_bounds']['maxC']; _0x39662e++) {
                if (_0x4bcc91['has'](_0x39662e + ',' + _0x203391))
                    _0x1cf2b8['push'](_0x39662e, _0x203391);
            }
        }
        _0xd7ac29['_wallArr'] = _0x1cf2b8;
    }
    const {
        minC: _0x418663,
        maxC: _0x51daed,
        minR: _0x7eca9b,
        maxR: _0x249bb4
    } = _0xd7ac29['_bounds'];
    const _0x4412cd = _0xd7ac29['_wallArr'];
    const _0x5cd9a8 = 0.0001;
    const _0x5e74d2 = new Set();
    const _0x3b5162 = [];
    for (let _0x2d7716 = 0x0; _0x2d7716 < _0x4412cd['length']; _0x2d7716 += 0x2) {
        const _0x3950da = _0x4412cd[_0x2d7716], _0x4b96b0 = _0x4412cd[_0x2d7716 + 0x1];
        const _0x2eca43 = [
            _0x3950da * _0x2a9664,
            _0x4b96b0 * _0x2a9664,
            _0x3950da * _0x2a9664 + _0x2a9664,
            _0x4b96b0 * _0x2a9664,
            _0x3950da * _0x2a9664,
            _0x4b96b0 * _0x2a9664 + _0x2a9664,
            _0x3950da * _0x2a9664 + _0x2a9664,
            _0x4b96b0 * _0x2a9664 + _0x2a9664
        ];
        for (let _0x41ceb1 = 0x0; _0x41ceb1 < _0x2eca43['length']; _0x41ceb1 += 0x2) {
            const _0x289f38 = _0x2eca43[_0x41ceb1], _0x14eba3 = _0x2eca43[_0x41ceb1 + 0x1];
            const _0xeee2dc = Math['atan2'](_0x14eba3 - _0x3e5fc0, _0x289f38 - _0x4adda7);
            const _0x5692e2 = Math['round'](_0xeee2dc * 0x4e20);
            if (!_0x5e74d2['has'](_0x5692e2 - 0x1)) {
                _0x5e74d2['add'](_0x5692e2 - 0x1);
                _0x3b5162['push'](_0xeee2dc - _0x5cd9a8);
            }
            if (!_0x5e74d2['has'](_0x5692e2)) {
                _0x5e74d2['add'](_0x5692e2);
                _0x3b5162['push'](_0xeee2dc);
            }
            if (!_0x5e74d2['has'](_0x5692e2 + 0x1)) {
                _0x5e74d2['add'](_0x5692e2 + 0x1);
                _0x3b5162['push'](_0xeee2dc + _0x5cd9a8);
            }
        }
    }
    _0x3b5162['sort']((_0x35dd01, _0x2acff7) => _0x35dd01 - _0x2acff7);
    const _0x46dcfe = Math['hypot']((_0x51daed - _0x418663 + 0x2) * _0x2a9664, (_0x249bb4 - _0x7eca9b + 0x2) * _0x2a9664);
    const _0x57bcf2 = _0x9bc29e => {
        const _0x32c59e = Math['cos'](_0x9bc29e);
        const _0x1ae536 = Math['sin'](_0x9bc29e);
        let _0x5b1641 = _0x46dcfe;
        for (let _0xd23b11 = 0x0; _0xd23b11 < _0x4412cd['length']; _0xd23b11 += 0x2) {
            const _0x3ec686 = _0x4412cd[_0xd23b11], _0x12d303 = _0x4412cd[_0xd23b11 + 0x1];
            const _0x358968 = _0x3ec686 * _0x2a9664, _0x47c639 = _0x12d303 * _0x2a9664;
            const _0x31ffbf = _0x358968 + _0x2a9664, _0x28de91 = _0x47c639 + _0x2a9664;
            const _0x5b86c8 = _0x358968 + _0x2a9664 * 0.5, _0x1e8936 = _0x47c639 + _0x2a9664 * 0.5;
            const _0x3ba330 = Math['abs'](_0x5b86c8 - _0x4adda7) + Math['abs'](_0x1e8936 - _0x3e5fc0);
            if (_0x3ba330 > _0x5b1641 + _0x2a9664 * 1.5)
                continue;
            let _0x4364f3, _0x1618fb, _0x3d095c;
            _0x4364f3 = -_0x1ae536 * _0x2a9664;
            if (Math['abs'](_0x4364f3) >= 1e-10) {
                _0x1618fb = -(_0x47c639 - _0x3e5fc0) * _0x2a9664 / _0x4364f3;
                _0x3d095c = ((_0x358968 - _0x4adda7) * _0x1ae536 - (_0x47c639 - _0x3e5fc0) * _0x32c59e) / _0x4364f3;
                if (_0x1618fb > 0.001 && _0x3d095c >= 0x0 && _0x3d095c <= 0x1 && _0x1618fb < _0x5b1641)
                    _0x5b1641 = _0x1618fb;
            }
            _0x4364f3 = _0x32c59e * _0x2a9664;
            if (Math['abs'](_0x4364f3) >= 1e-10) {
                _0x1618fb = (_0x31ffbf - _0x4adda7) * _0x2a9664 / _0x4364f3;
                _0x3d095c = ((_0x31ffbf - _0x4adda7) * _0x1ae536 - (_0x47c639 - _0x3e5fc0) * _0x32c59e) / _0x4364f3;
                if (_0x1618fb > 0.001 && _0x3d095c >= 0x0 && _0x3d095c <= 0x1 && _0x1618fb < _0x5b1641)
                    _0x5b1641 = _0x1618fb;
            }
            _0x4364f3 = _0x1ae536 * _0x2a9664;
            if (Math['abs'](_0x4364f3) >= 1e-10) {
                _0x1618fb = (_0x28de91 - _0x3e5fc0) * _0x2a9664 / _0x4364f3;
                _0x3d095c = ((_0x31ffbf - _0x4adda7) * _0x1ae536 - (_0x28de91 - _0x3e5fc0) * _0x32c59e) / _0x4364f3;
                if (_0x1618fb > 0.001 && _0x3d095c >= 0x0 && _0x3d095c <= 0x1 && _0x1618fb < _0x5b1641)
                    _0x5b1641 = _0x1618fb;
            }
            _0x4364f3 = -_0x32c59e * _0x2a9664;
            if (Math['abs'](_0x4364f3) >= 1e-10) {
                _0x1618fb = -(_0x358968 - _0x4adda7) * _0x2a9664 / _0x4364f3;
                _0x3d095c = ((_0x358968 - _0x4adda7) * _0x1ae536 - (_0x28de91 - _0x3e5fc0) * _0x32c59e) / _0x4364f3;
                if (_0x1618fb > 0.001 && _0x3d095c >= 0x0 && _0x3d095c <= 0x1 && _0x1618fb < _0x5b1641)
                    _0x5b1641 = _0x1618fb;
            }
        }
        const _0x115e5e = _0x5b1641 < _0x46dcfe ? _0x5b1641 + 0x8 : _0x5b1641;
        return {
            'x': _0x4adda7 + _0x32c59e * _0x115e5e,
            'y': _0x3e5fc0 + _0x1ae536 * _0x115e5e
        };
    };
    const _0x2c936a = [];
    for (let _0x579e89 = 0x0; _0x579e89 < _0x3b5162['length']; _0x579e89++) {
        const _0x579d01 = _0x57bcf2(_0x3b5162[_0x579e89]);
        _0x2c936a['push'](_0x579d01['x'], _0x579d01['y']);
    }
    _0x514ff7['polygon'] = _0x2c936a['length'] >= 0x6 ? new Float32Array(_0x2c936a) : null;
}
function _0x581756(_0xf519ff, _0x5d968e, _0x1aee08) {
    if (_0x4c080f['isDead'])
        return;
    if (!_0xd7ac29)
        return;
    const {
        floorTiles: _0x3dac04,
        wallTiles: _0x10e5a8
    } = _0xd7ac29;
    if (_0x3dac04['length'] === 0x0)
        return;
    const _0x27080f = _0x190416['SHADOW'];
    const _0x17c25c = _0x190416['MAP']['tileSize'];
    const _0x2b482b = _0x190416['CAMERA']['width'];
    const _0x3b7c7c = _0x190416['CAMERA']['height'];
    if (!_0x190416['SHADOW']['_buf'] || _0x190416['SHADOW']['_buf']['width'] !== _0x2b482b || _0x190416['SHADOW']['_buf']['height'] !== _0x3b7c7c) {
        _0x190416['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x190416['SHADOW']['_buf']['width'] = _0x2b482b;
        _0x190416['SHADOW']['_buf']['height'] = _0x3b7c7c;
    }
    const _0x17043f = _0x190416['SHADOW']['_buf'];
    const _0x224e74 = _0x17043f['getContext']('2d');
    _0x224e74['clearRect'](0x0, 0x0, _0x2b482b, _0x3b7c7c);
    _0x224e74['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x224e74['beginPath']();
    for (const {
                c: _0x43fefa,
                r: _0x21c2bd
            } of _0x3dac04) {
        const _0x36d244 = Math['floor'](_0x43fefa * _0x17c25c - _0x5d968e), _0x178477 = Math['floor'](_0x21c2bd * _0x17c25c - _0x1aee08);
        if (_0x36d244 > _0x2b482b || _0x178477 > _0x3b7c7c || _0x36d244 + _0x17c25c < 0x0 || _0x178477 + _0x17c25c < 0x0)
            continue;
        _0x224e74['rect'](_0x36d244 - 0x1, _0x178477 - 0x1, _0x17c25c + 0x2, _0x17c25c + 0x2);
    }
    _0x224e74['fill']();
    if (_0x10e5a8['length'] > 0x0) {
        _0x224e74['globalCompositeOperation'] = 'destination-out';
        _0x224e74['fillStyle'] = 'rgba(0,0,0,1)';
        _0x224e74['beginPath']();
        for (const {
                    c: _0x37d677,
                    r: _0x2bbf5e
                } of _0x10e5a8) {
            const _0x249570 = Math['floor'](_0x37d677 * _0x17c25c - _0x5d968e), _0x1d1455 = Math['floor'](_0x2bbf5e * _0x17c25c - _0x1aee08);
            if (_0x249570 > _0x2b482b || _0x1d1455 > _0x3b7c7c || _0x249570 + _0x17c25c < 0x0 || _0x1d1455 + _0x17c25c < 0x0)
                continue;
            _0x224e74['rect'](_0x249570 - 0x1, _0x1d1455 - 0x1, _0x17c25c + 0x2, _0x17c25c + 0x2);
        }
        _0x224e74['fill']();
        _0x224e74['globalCompositeOperation'] = 'source-over';
    }
    if (_0x27080f['polygon'] && _0x27080f['polygon']['length'] >= 0x6) {
        _0x224e74['globalCompositeOperation'] = 'destination-out';
        _0x224e74['beginPath']();
        const _0x722de7 = _0x27080f['polygon'];
        _0x224e74['moveTo'](_0x722de7[0x0] - _0x5d968e, _0x722de7[0x1] - _0x1aee08);
        for (let _0x279e28 = 0x2; _0x279e28 < _0x722de7['length']; _0x279e28 += 0x2) {
            _0x224e74['lineTo'](_0x722de7[_0x279e28] - _0x5d968e, _0x722de7[_0x279e28 + 0x1] - _0x1aee08);
        }
        _0x224e74['closePath']();
        _0x224e74['fill']();
        _0x224e74['globalCompositeOperation'] = 'source-over';
    }
    _0xf519ff['drawImage'](_0x17043f, 0x0, 0x0);
}
function _0x53e38e(_0x3c58a1) {
    let _0x2d6e35 = 0x0, _0x17a65d = 0x0;
    const _0x88ade0 = _0x190416['INPUTS']['mouseX'] / _0x190416['SYSTEM']['viewScale'];
    const _0x65affa = _0x190416['INPUTS']['mouseY'] / _0x190416['SYSTEM']['viewScale'];
    const _0xfe52ef = _0x4c080f['x'] - _0x190416['CAMERA']['x'] + _0x4c080f['width'] / 0x2;
    const _0x2927a2 = _0x4c080f['y'] - _0x190416['CAMERA']['y'] + _0x4c080f['height'] / 0x2;
    const _0x8475a = Math['atan2'](_0x65affa - _0x2927a2, _0x88ade0 - _0xfe52ef);
    if (_0x44afff !== 0x0 || _0x2f570b !== 0x0) {
        _0x2d6e35 = _0x44afff;
        _0x17a65d = _0x2f570b;
    } else if (_0x4f4230) {
        let _0x57aa13 = 0x0, _0xc5430b = 0x0;
        if (_0x190416['INPUTS']['keys']['w'] || _0x190416['INPUTS']['keys']['arrowup'])
            _0x57aa13 += 0x1;
        if (_0x190416['INPUTS']['keys']['s'] || _0x190416['INPUTS']['keys']['arrowdown'])
            _0x57aa13 -= 0x1;
        if (_0x190416['INPUTS']['keys']['d'] || _0x190416['INPUTS']['keys']['arrowright'])
            _0xc5430b += 0x1;
        if (_0x190416['INPUTS']['keys']['a'] || _0x190416['INPUTS']['keys']['arrowleft'])
            _0xc5430b -= 0x1;
        if (_0x57aa13 !== 0x0 || _0xc5430b !== 0x0) {
            const _0x179a41 = _0x8475a + Math['atan2'](_0xc5430b, _0x57aa13);
            _0x2d6e35 = Math['cos'](_0x179a41);
            _0x17a65d = Math['sin'](_0x179a41);
        }
    } else {
        if (_0x190416['INPUTS']['keys']['w'] || _0x190416['INPUTS']['keys']['arrowup'])
            _0x17a65d -= 0x1;
        if (_0x190416['INPUTS']['keys']['s'] || _0x190416['INPUTS']['keys']['arrowdown'])
            _0x17a65d += 0x1;
        if (_0x190416['INPUTS']['keys']['a'] || _0x190416['INPUTS']['keys']['arrowleft'])
            _0x2d6e35 -= 0x1;
        if (_0x190416['INPUTS']['keys']['d'] || _0x190416['INPUTS']['keys']['arrowright'])
            _0x2d6e35 += 0x1;
        const _0x646f54 = _0x2d6e35 !== 0x0 || _0x17a65d !== 0x0;
        if (_0x646f54) {
            const _0x648d34 = Math['sqrt'](_0x2d6e35 * _0x2d6e35 + _0x17a65d * _0x17a65d);
            _0x2d6e35 /= _0x648d34;
            _0x17a65d /= _0x648d34;
        }
    }
    if (_0x190416['GAME_STATE'] === 'NIGHT' && _0x1c95bc === 'Skinwalker') {
        if (_0x190416['NIGHT_ABILITY_OPEN'] || !_0x190416['CURRENT_TARGET']) {
            _0x2d6e35 = 0x0;
            _0x17a65d = 0x0;
            _0x4c080f['vx'] = 0x0;
            _0x4c080f['vy'] = 0x0;
            _0x4c080f['x'] = _0x190416['MAP']['columns'] * _0x190416['MAP']['tileSize'] / 0x2 - _0x4c080f['width'] / 0x2;
            _0x4c080f['y'] = _0x190416['MAP']['rows'] * _0x190416['MAP']['tileSize'] / 0x2 - _0x4c080f['height'] / 0x2;
        }
    }
    const _0x2073ed = _0x2d6e35 !== 0x0 || _0x17a65d !== 0x0;
    const _0x38df12 = (_0x190416['INPUTS']['keys']['shift'] || _0x39bc75 || _0x5e9e16) && _0x2073ed;
    _0x4c080f['bopTimer'] = _0x38df12 ? _0x4c080f['bopTimer'] + _0x3c58a1 : 0x0;
    _0x4c080f['scale'] = 0x1 + (_0x4c080f['bopTimer'] > 0x0 ? Math['sin'](_0x4c080f['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x1e64ea = Math['pow'](0.001, _0x3c58a1);
    const _0x64fa50 = _0x38df12 ? 0x74a : 0x5d5;
    _0x4c080f['vx'] += _0x2d6e35 * _0x64fa50 * _0x3c58a1;
    _0x4c080f['vy'] += _0x17a65d * _0x64fa50 * _0x3c58a1;
    _0x4c080f['vx'] *= _0x1e64ea;
    _0x4c080f['vy'] *= _0x1e64ea;
    _0x4c080f['x'] += _0x4c080f['vx'] * _0x3c58a1;
    _0x4c080f['y'] += _0x4c080f['vy'] * _0x3c58a1;
    for (let _0x1e9bb2 = 0x0; _0x1e9bb2 < 0x3; _0x1e9bb2++)
        _0x356e88();
    for (let _0x310283 = 0x0; _0x310283 < 0x2; _0x310283++)
        _0x1d129d();
    for (let _0x3ed755 = 0x0; _0x3ed755 < 0x2; _0x3ed755++)
        _0x19f3b9();
    if (_0x4c080f['x'] < 0x0)
        _0x4c080f['x'] = 0x0;
    if (_0x4c080f['y'] < 0x0)
        _0x4c080f['y'] = 0x0;
    if (_0x4c080f['x'] + _0x4c080f['width'] > _0x190416['MAP']['columns'] * _0x190416['MAP']['tileSize'])
        _0x4c080f['x'] = _0x190416['MAP']['columns'] * _0x190416['MAP']['tileSize'] - _0x4c080f['width'];
    if (_0x4c080f['y'] + _0x4c080f['height'] > _0x190416['MAP']['rows'] * _0x190416['MAP']['tileSize'])
        _0x4c080f['y'] = _0x190416['MAP']['rows'] * _0x190416['MAP']['tileSize'] - _0x4c080f['height'];
    if (_0x42bcb6) {
        _0x4c080f['angle'] = _0x20a7ed + Math['PI'] / 0x2;
    } else if (_0x44afff !== 0x0 || _0x2f570b !== 0x0) {
        _0x4c080f['angle'] = Math['atan2'](_0x2f570b, _0x44afff) + Math['PI'] / 0x2;
    } else if (!_0x987a09) {
        _0x4c080f['angle'] = _0x8475a + Math['PI'] / 0x2;
    }
    const _0x9df7e6 = _0x4c080f['x'] + _0x4c080f['width'] / 0x2 - _0x190416['CAMERA']['width'] / 0x2;
    const _0x19a732 = _0x4c080f['y'] + _0x4c080f['height'] / 0x2 - _0x190416['CAMERA']['height'] / 0x2;
    if (_0x190416['CAMERA']['x'] === null || isNaN(_0x190416['CAMERA']['x']) || !isFinite(_0x190416['CAMERA']['x'])) {
        _0x190416['CAMERA']['x'] = _0x9df7e6;
        _0x190416['CAMERA']['y'] = _0x19a732;
    } else {
        const _0x34b82f = 0x1 - Math['exp'](-Math['max'](0x0, _0x3c58a1) * 0x28);
        _0x190416['CAMERA']['x'] += (_0x9df7e6 - _0x190416['CAMERA']['x']) * _0x34b82f;
        _0x190416['CAMERA']['y'] += (_0x19a732 - _0x190416['CAMERA']['y']) * _0x34b82f;
    }
    for (const _0x239e91 in _0x5c0d1d) {
        const _0x426894 = _0x5c0d1d[_0x239e91];
        if (_0x426894['renderX'] === undefined) {
            _0x426894['renderX'] = _0x426894['x'];
            _0x426894['renderY'] = _0x426894['y'];
            _0x426894['renderAngle'] = _0x426894['angle'] || 0x0;
        }
        const _0x405794 = 0.25;
        const _0x381445 = _0x426894['x'] - _0x426894['renderX'], _0x53a621 = _0x426894['y'] - _0x426894['renderY'];
        const _0x484e52 = Math['sqrt'](_0x381445 * _0x381445 + _0x53a621 * _0x53a621);
        const _0x41d3cf = 0xb4;
        if (_0x484e52 > _0x41d3cf) {
            _0x426894['renderX'] = _0x426894['x'] - _0x381445 / _0x484e52 * _0x41d3cf;
            _0x426894['renderY'] = _0x426894['y'] - _0x53a621 / _0x484e52 * _0x41d3cf;
        }
        _0x426894['renderX'] += (_0x426894['x'] - _0x426894['renderX']) * _0x405794;
        _0x426894['renderY'] += (_0x426894['y'] - _0x426894['renderY']) * _0x405794;
        let _0x26ceac = (_0x426894['angle'] || 0x0) - _0x426894['renderAngle'];
        while (_0x26ceac < -Math['PI'])
            _0x26ceac += Math['PI'] * 0x2;
        while (_0x26ceac > Math['PI'])
            _0x26ceac -= Math['PI'] * 0x2;
        _0x426894['renderAngle'] += _0x26ceac * 0.3;
    }
    if (_0x190416['GAME_STATE'] === 'NIGHT') {
        _0xd2f464 = Math['min'](0.6, _0xd2f464 + _0x3c58a1 * 0.5);
    } else {
        _0xd2f464 = Math['max'](0x0, _0xd2f464 - _0x3c58a1 * 0.5);
    }
    _0x55726f();
    _0x2530ce();
}
function _0x9dc50e(_0x32f0df, _0x1279d7, _0x18702e, _0x402fea, _0x29b1fc = !![]) {
    _0x32f0df['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x174a5d = _0x32f0df['measureText'](_0x1279d7)['width'];
    const _0x108804 = _0x174a5d + 0x18;
    const _0x4e9b27 = 0x1c;
    _0x32f0df['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x32f0df['beginPath']();
    if (_0x32f0df['roundRect']) {
        _0x32f0df['roundRect'](_0x18702e - _0x108804 / 0x2, _0x402fea - _0x4e9b27, _0x108804, _0x4e9b27, 0x6);
    } else {
        _0x32f0df['rect'](_0x18702e - _0x108804 / 0x2, _0x402fea - _0x4e9b27, _0x108804, _0x4e9b27);
    }
    _0x32f0df['fill']();
    if (_0x29b1fc) {
        _0x32f0df['beginPath']();
        _0x32f0df['moveTo'](_0x18702e - 0x6, _0x402fea);
        _0x32f0df['lineTo'](_0x18702e + 0x6, _0x402fea);
        _0x32f0df['lineTo'](_0x18702e, _0x402fea + 0x6);
        _0x32f0df['fill']();
    }
    _0x32f0df['fillStyle'] = '#ffffff';
    _0x32f0df['textAlign'] = 'center';
    _0x32f0df['textBaseline'] = 'middle';
    _0x32f0df['fillText'](_0x1279d7, _0x18702e, _0x402fea - _0x4e9b27 / 0x2 + 0x1);
}
function _0x18257f(_0x2f220e, _0x201ce4, _0x560b42, _0x138614) {
    if (!_0x201ce4 || _0x201ce4['length'] === 0x0)
        return;
    let _0x5c82c1 = _0x138614;
    for (let _0x50c889 = 0x0; _0x50c889 < _0x201ce4['length']; _0x50c889++) {
        _0x9dc50e(_0x2f220e, _0x201ce4[_0x50c889]['text'], _0x560b42, _0x5c82c1, _0x50c889 === 0x0);
        _0x5c82c1 -= 0x24;
    }
}
function _0xc059a1() {
    if (!_0x190416['SYSTEM']['isReady'])
        return;
    _0x2d91e5['fillStyle'] = '#000000';
    _0x2d91e5['fillRect'](0x0, 0x0, _0x33fb14['width'], _0x33fb14['height']);
    _0x2d91e5['save']();
    try {
        _0x2d91e5['scale'](_0x190416['SYSTEM']['viewScale'], _0x190416['SYSTEM']['viewScale']);
        _0x2d91e5['imageSmoothingEnabled'] = ![];
        const _0x528cce = Math['floor'](_0x190416['CAMERA']['x'] || 0x0);
        const _0x3a8aa8 = Math['floor'](_0x190416['CAMERA']['y'] || 0x0);
        const _0x5c4d49 = Math['max'](0x0, Math['floor'](_0x528cce / _0x190416['MAP']['chunkSize']));
        const _0x50a9ac = Math['min'](_0x190416['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x528cce + _0x190416['CAMERA']['width']) / _0x190416['MAP']['chunkSize']));
        const _0x1f205a = Math['max'](0x0, Math['floor'](_0x3a8aa8 / _0x190416['MAP']['chunkSize']));
        const _0x4bc092 = Math['min'](_0x190416['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x3a8aa8 + _0x190416['CAMERA']['height']) / _0x190416['MAP']['chunkSize']));
        for (let _0x24633f = _0x1f205a; _0x24633f <= _0x4bc092; _0x24633f++)
            for (let _0x7d59ba = _0x5c4d49; _0x7d59ba <= _0x50a9ac; _0x7d59ba++) {
                const _0x4a03a6 = _0x7d59ba * _0x190416['MAP']['chunkSize'] - _0x528cce;
                const _0x3deb94 = _0x24633f * _0x190416['MAP']['chunkSize'] - _0x3a8aa8;
                _0x2d91e5['drawImage'](_0x190416['MAP']['bgChunks'][_0x24633f][_0x7d59ba], _0x4a03a6, _0x3deb94, _0x190416['MAP']['chunkSize'] + 0x1, _0x190416['MAP']['chunkSize'] + 0x1);
            }
        if (_0x63b11f['complete'] && _0x63b11f['naturalWidth'] > 0x0) {
            const _0x5080c7 = _0x190416['MAP']['tileSize'];
            const _0x57d7b9 = _0x5080c7 * 0xa;
            const _0x391e68 = _0x190416['MAP']['columns'] / 0x2 * _0x5080c7 - _0x57d7b9 / 0x2 - _0x528cce;
            const _0x265bb5 = _0x190416['MAP']['rows'] / 0x2 * _0x5080c7 - _0x57d7b9 / 0x2 - _0x3a8aa8;
            _0x2d91e5['imageSmoothingEnabled'] = ![];
            _0x2d91e5['drawImage'](_0x63b11f, _0x391e68, _0x265bb5, _0x57d7b9, _0x57d7b9);
        }
        if (_0x3a8544['complete'] && _0x3a8544['naturalWidth'] > 0x0) {
            _0x190416['ENTITIES']['forEach'](_0x21a919 => {
                if (_0x21a919['type'] !== 'table')
                    return;
                _0x2d91e5['save']();
                _0x2d91e5['imageSmoothingEnabled'] = ![];
                const _0x2986c4 = _0x3a8544['naturalWidth'] >= _0x3a8544['naturalHeight'];
                const _0xd52f9 = _0x21a919['w'] >= _0x21a919['h'];
                if (_0x2986c4 === _0xd52f9) {
                    _0x2d91e5['drawImage'](_0x3a8544, _0x21a919['x'] - _0x528cce, _0x21a919['y'] - _0x3a8aa8, _0x21a919['w'], _0x21a919['h']);
                } else {
                    _0x2d91e5['translate'](_0x21a919['x'] - _0x528cce + _0x21a919['w'] / 0x2, _0x21a919['y'] - _0x3a8aa8 + _0x21a919['h'] / 0x2);
                    _0x2d91e5['rotate'](Math['PI'] / 0x2);
                    _0x2d91e5['drawImage'](_0x3a8544, -_0x21a919['h'] / 0x2, -_0x21a919['w'] / 0x2, _0x21a919['h'], _0x21a919['w']);
                }
                _0x2d91e5['restore']();
            });
        } else {
            _0x190416['ENTITIES']['forEach'](_0x5ac971 => {
                if (_0x5ac971['type'] !== 'table')
                    return;
                _0x2d91e5['save']();
                _0x2d91e5['fillStyle'] = '#6b4423';
                _0x2d91e5['fillRect'](_0x5ac971['x'] - _0x528cce, _0x5ac971['y'] - _0x3a8aa8, _0x5ac971['w'], _0x5ac971['h']);
                _0x2d91e5['strokeStyle'] = '#422810';
                _0x2d91e5['lineWidth'] = 0x3;
                _0x2d91e5['strokeRect'](_0x5ac971['x'] - _0x528cce + 0x1, _0x5ac971['y'] - _0x3a8aa8 + 0x1, _0x5ac971['w'] - 0x2, _0x5ac971['h'] - 0x2);
                _0x2d91e5['fillStyle'] = '#82532a';
                _0x2d91e5['fillRect'](_0x5ac971['x'] - _0x528cce + 0x4, _0x5ac971['y'] - _0x3a8aa8 + 0x4, _0x5ac971['w'] - 0x8, _0x5ac971['h'] - 0x8);
                _0x2d91e5['restore']();
            });
        }
        if (_0xaca228) {
            for (let _0x30235a = _0x1f205a; _0x30235a <= _0x4bc092; _0x30235a++) {
                for (let _0x3d8218 = _0x5c4d49; _0x3d8218 <= _0x50a9ac; _0x3d8218++) {
                    const _0x33d5a4 = _0x3d8218 * _0x190416['MAP']['chunkSize'] - _0x528cce;
                    const _0x16de6d = _0x30235a * _0x190416['MAP']['chunkSize'] - _0x3a8aa8;
                    _0x2d91e5['drawImage'](_0x190416['MAP']['fgChunks'][_0x30235a][_0x3d8218], _0x33d5a4, _0x16de6d, _0x190416['MAP']['chunkSize'] + 0x1, _0x190416['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x333d06 = _0x190416['GAME_STATE'] === 'NIGHT' && _0x1c95bc === 'Skinwalker' && !_0x4c080f['isDead'];
        const _0x5dd9ea = _0x4c080f['x'] - _0x528cce + _0x4c080f['width'] / 0x2;
        const _0x2cd0e5 = _0x4c080f['y'] - _0x3a8aa8 + _0x4c080f['height'] / 0x2;
        const _0x58a441 = _0x4c080f['width'] * _0x4c080f['scale'] * 1.3;
        const _0x500d6f = _0x4c080f['height'] * _0x4c080f['scale'] * 1.3;
        for (const _0x523d69 in _0x5c0d1d) {
            const _0x41bce4 = _0x5c0d1d[_0x523d69];
            if (_0x41bce4['isDead'])
                continue;
            const _0x219d16 = (_0x41bce4['renderX'] ?? _0x41bce4['x']) - _0x528cce + _0x41bce4['width'] / 0x2;
            const _0x3e972e = (_0x41bce4['renderY'] ?? _0x41bce4['y']) - _0x3a8aa8 + _0x41bce4['height'] / 0x2;
            const _0x4ae98b = Math['min'](0x2, Math['max'](0.3, _0x41bce4['scale'] || 0x1));
            const _0x1293d4 = _0x41bce4['width'] * _0x4ae98b * 1.3;
            const _0x11f65e = _0x41bce4['height'] * _0x4ae98b * 1.3;
            _0x2d91e5['save']();
            try {
                _0x2d91e5['translate'](_0x219d16, _0x3e972e);
                _0x2d91e5['rotate'](_0x41bce4['renderAngle'] ?? 0x0);
                if (_0x41bce4['isDark'])
                    _0x2d91e5['filter'] = 'brightness(0)';
                _0x415330(_0x2d91e5, _0x41bce4['body'], _0x41bce4['eyes'], _0x1293d4, _0x11f65e);
                if (_0x4dfdeb['has'](parseInt(_0x523d69)) && _0x54eaf7['complete'] && _0x54eaf7['naturalWidth'] > 0x0) {
                    _0x2d91e5['drawImage'](_0x54eaf7, -_0x1293d4 / 0x2, -_0x11f65e / 0x2, _0x1293d4, _0x11f65e);
                }
                if (_0x41bce4['isDark'])
                    _0x2d91e5['filter'] = 'none';
            } finally {
                _0x2d91e5['restore']();
            }
            if (!_0x1454aa((_0x41bce4['renderX'] ?? _0x41bce4['x']) + _0x41bce4['width'] / 0x2, (_0x41bce4['renderY'] ?? _0x41bce4['y']) + _0x41bce4['height'] / 0x2)) {
                _0x2d91e5['textAlign'] = 'center';
                _0x2d91e5['lineJoin'] = 'round';
                _0x2d91e5['lineWidth'] = 0x3;
                _0x2d91e5['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x2d91e5['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x2d91e5['fillStyle'] = _0x4dfdeb['has'](parseInt(_0x523d69)) ? '#cc88ff' : '#ffffff';
                const _0xbd609 = _0x41bce4['isDark'] ? '???' : _0x41bce4['name'] + (_0x41bce4['isOwner'] ? '\x20[🗝️]' : '');
                _0x2d91e5['strokeText'](_0xbd609, _0x219d16, _0x3e972e - _0x11f65e / 0x2 - 0x10);
                _0x2d91e5['fillText'](_0xbd609, _0x219d16, _0x3e972e - _0x11f65e / 0x2 - 0x10);
            }
        }
        if (!_0x4c080f['isDead']) {
            _0x2d91e5['save']();
            try {
                _0x2d91e5['translate'](_0x5dd9ea, _0x2cd0e5);
                _0x2d91e5['rotate'](_0x4c080f['angle']);
                if (_0x333d06)
                    _0x2d91e5['filter'] = 'brightness(0)';
                _0x415330(_0x2d91e5, _0x5cdaee, _0x50e0ed, _0x58a441, _0x500d6f);
                if (_0x4dfdeb['has'](_0x51260a) && _0x54eaf7['complete'] && _0x54eaf7['naturalWidth'] > 0x0) {
                    _0x2d91e5['drawImage'](_0x54eaf7, -_0x58a441 / 0x2, -_0x500d6f / 0x2, _0x58a441, _0x500d6f);
                }
                if (_0x333d06)
                    _0x2d91e5['filter'] = 'none';
            } finally {
                _0x2d91e5['restore']();
            }
            if (!_0x1454aa(_0x4c080f['x'] + _0x4c080f['width'] / 0x2, _0x4c080f['y'] + _0x4c080f['height'] / 0x2)) {
                _0x2d91e5['textAlign'] = 'center';
                _0x2d91e5['lineJoin'] = 'round';
                _0x2d91e5['lineWidth'] = 0x3;
                _0x2d91e5['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x2d91e5['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x2d91e5['fillStyle'] = _0x4dfdeb['has'](_0x51260a) ? '#cc88ff' : '#ffffff';
                const _0x3c02c6 = _0x333d06 ? '???' : _0x414d8b + (_0x2bc621 ? '\x20[🗝️]' : '');
                _0x2d91e5['strokeText'](_0x3c02c6, _0x5dd9ea, _0x2cd0e5 - _0x500d6f / 0x2 - 0x10);
                _0x2d91e5['fillText'](_0x3c02c6, _0x5dd9ea, _0x2cd0e5 - _0x500d6f / 0x2 - 0x10);
            }
        }
        if (_0x190416['MAP']['wallChunks'] && _0x190416['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x11a448 = _0x1f205a; _0x11a448 <= _0x4bc092; _0x11a448++)
                for (let _0x265528 = _0x5c4d49; _0x265528 <= _0x50a9ac; _0x265528++) {
                    if (!_0x190416['MAP']['wallChunks'][_0x11a448] || !_0x190416['MAP']['wallChunks'][_0x11a448][_0x265528])
                        continue;
                    const _0x279409 = _0x265528 * _0x190416['MAP']['chunkSize'] - _0x528cce;
                    const _0x1b320c = _0x11a448 * _0x190416['MAP']['chunkSize'] - _0x3a8aa8;
                    _0x2d91e5['drawImage'](_0x190416['MAP']['wallChunks'][_0x11a448][_0x265528], _0x279409, _0x1b320c, _0x190416['MAP']['chunkSize'] + 0x1, _0x190416['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x4fec58 of _0x190416['ENTITIES']) {
            if (_0x4fec58['type'] !== 'npc')
                continue;
            const _0x846c9f = _0x4fec58['x'] - _0x528cce + _0x4fec58['w'] / 0x2;
            const _0x437e10 = _0x4fec58['y'] - _0x3a8aa8 + _0x4fec58['h'] / 0x2;
            const _0x7278cc = _0x4fec58['w'];
            const _0x426101 = _0x4fec58['h'];
            _0x2d91e5['save']();
            _0x2d91e5['translate'](_0x846c9f, _0x437e10);
            _0x2d91e5['rotate'](_0x4fec58['angle'] !== undefined ? _0x4fec58['angle'] : 0x0);
            _0x415330(_0x2d91e5, _0x4fec58['body'] || 'yanito932.png', _0x4fec58['eyes'], _0x7278cc, _0x426101);
            _0x2d91e5['restore']();
            _0x2d91e5['textAlign'] = 'center';
            _0x2d91e5['lineJoin'] = 'round';
            _0x2d91e5['lineWidth'] = 0x3;
            _0x2d91e5['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x2d91e5['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x2d91e5['fillStyle'] = '#aaaaaa';
            _0x2d91e5['strokeText'](_0x4fec58['name'] || 'NPC', _0x846c9f, _0x437e10 - _0x426101 / 0x2 - 0x10);
            _0x2d91e5['fillText'](_0x4fec58['name'] || 'NPC', _0x846c9f, _0x437e10 - _0x426101 / 0x2 - 0x10);
        }
        if (_0x4c080f['isDead']) {
            for (const _0x2ce9d8 in _0x5c0d1d) {
                const _0x224b59 = _0x5c0d1d[_0x2ce9d8];
                if (!_0x224b59['isDead'])
                    continue;
                const _0x1e0842 = (_0x224b59['renderX'] ?? _0x224b59['x']) - _0x528cce + _0x224b59['width'] / 0x2;
                const _0x1f48eb = (_0x224b59['renderY'] ?? _0x224b59['y']) - _0x3a8aa8 + _0x224b59['height'] / 0x2;
                const _0x23b158 = _0x224b59['width'] * (_0x224b59['scale'] || 0x1) * 1.3;
                const _0x4d01dd = _0x224b59['height'] * (_0x224b59['scale'] || 0x1) * 1.3;
                _0x2d91e5['save']();
                try {
                    _0x2d91e5['translate'](_0x1e0842, _0x1f48eb);
                    _0x2d91e5['rotate'](_0x224b59['renderAngle'] ?? 0x0);
                    _0x2d91e5['globalAlpha'] = 0.3;
                    _0x415330(_0x2d91e5, _0x224b59['body'], _0x224b59['eyes'], _0x23b158, _0x4d01dd);
                } finally {
                    _0x2d91e5['restore']();
                }
                if (!_0x1454aa((_0x224b59['renderX'] ?? _0x224b59['x']) + _0x224b59['width'] / 0x2, (_0x224b59['renderY'] ?? _0x224b59['y']) + _0x224b59['height'] / 0x2)) {
                    _0x2d91e5['save']();
                    _0x2d91e5['globalAlpha'] = 0.3;
                    _0x2d91e5['textAlign'] = 'center';
                    _0x2d91e5['lineJoin'] = 'round';
                    _0x2d91e5['lineWidth'] = 0x3;
                    _0x2d91e5['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x2d91e5['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x2d91e5['fillStyle'] = '#ffffff';
                    const _0x13bb52 = _0x224b59['name'] + (_0x224b59['isOwner'] ? '\x20[🗝️]' : '');
                    _0x2d91e5['strokeText'](_0x13bb52, _0x1e0842, _0x1f48eb - _0x4d01dd / 0x2 - 0x10);
                    _0x2d91e5['fillText'](_0x13bb52, _0x1e0842, _0x1f48eb - _0x4d01dd / 0x2 - 0x10);
                    _0x2d91e5['restore']();
                }
            }
            _0x2d91e5['save']();
            try {
                _0x2d91e5['translate'](_0x5dd9ea, _0x2cd0e5);
                _0x2d91e5['rotate'](_0x4c080f['angle']);
                _0x2d91e5['globalAlpha'] = 0.3;
                _0x415330(_0x2d91e5, _0x5cdaee, _0x50e0ed, _0x58a441, _0x500d6f);
            } finally {
                _0x2d91e5['restore']();
            }
            if (!_0x1454aa(_0x4c080f['x'] + _0x4c080f['width'] / 0x2, _0x4c080f['y'] + _0x4c080f['height'] / 0x2)) {
                _0x2d91e5['save']();
                _0x2d91e5['globalAlpha'] = 0.3;
                _0x2d91e5['textAlign'] = 'center';
                _0x2d91e5['lineJoin'] = 'round';
                _0x2d91e5['lineWidth'] = 0x3;
                _0x2d91e5['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x2d91e5['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x2d91e5['fillStyle'] = '#ffffff';
                const _0x5efa1b = _0x414d8b + (_0x2bc621 ? '\x20[🗝️]' : '');
                _0x2d91e5['strokeText'](_0x5efa1b, _0x5dd9ea, _0x2cd0e5 - _0x500d6f / 0x2 - 0x10);
                _0x2d91e5['fillText'](_0x5efa1b, _0x5dd9ea, _0x2cd0e5 - _0x500d6f / 0x2 - 0x10);
                _0x2d91e5['restore']();
            }
        }
        for (let _0x5764b0 = _0x1f205a; _0x5764b0 <= _0x4bc092; _0x5764b0++)
            for (let _0x465c50 = _0x5c4d49; _0x465c50 <= _0x50a9ac; _0x465c50++) {
                const _0x2dd650 = _0x465c50 * _0x190416['MAP']['chunkSize'] - _0x528cce;
                const _0x4cb333 = _0x5764b0 * _0x190416['MAP']['chunkSize'] - _0x3a8aa8;
                _0x2d91e5['drawImage'](_0x190416['MAP']['fgChunks'][_0x5764b0][_0x465c50], _0x2dd650, _0x4cb333, _0x190416['MAP']['chunkSize'] + 0x1, _0x190416['MAP']['chunkSize'] + 0x1);
            }
        if (_0x190416['EDITOR']['enabled'] && _0x190416['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x217d21 = _0x190416['INPUTS']['mouseX'] / _0x190416['SYSTEM']['viewScale'] + _0x190416['CAMERA']['x'];
            const _0x3ba194 = _0x190416['INPUTS']['mouseY'] / _0x190416['SYSTEM']['viewScale'] + _0x190416['CAMERA']['y'];
            const _0x1c8d63 = Math['floor'](_0x217d21 / _0x190416['MAP']['tileSize']);
            const _0x57f262 = Math['floor'](_0x3ba194 / _0x190416['MAP']['tileSize']);
            if (_0x1c8d63 >= 0x0 && _0x1c8d63 < _0x190416['MAP']['columns'] && _0x57f262 >= 0x0 && _0x57f262 < _0x190416['MAP']['rows']) {
                const _0x5f169c = _0x1c8d63 * _0x190416['MAP']['tileSize'] - _0x528cce;
                const _0x482b46 = _0x57f262 * _0x190416['MAP']['tileSize'] - _0x3a8aa8;
                _0x2d91e5['save']();
                _0x2d91e5['globalAlpha'] = 0.5;
                if (_0x190416['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x429d44 = _0x190416['EDITOR']['selectedTileGid'] - 0x1;
                    _0x2d91e5['drawImage'](_0x50333e, _0x429d44 % _0x190416['MAP']['tilesetCols'] * _0x190416['MAP']['tileSize'], Math['floor'](_0x429d44 / _0x190416['MAP']['tilesetCols']) * _0x190416['MAP']['tileSize'], _0x190416['MAP']['tileSize'], _0x190416['MAP']['tileSize'], _0x5f169c, _0x482b46, _0x190416['MAP']['tileSize'], _0x190416['MAP']['tileSize']);
                } else {
                    _0x2d91e5['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x2d91e5['fillRect'](_0x5f169c, _0x482b46, _0x190416['MAP']['tileSize'], _0x190416['MAP']['tileSize']);
                }
                _0x2d91e5['restore']();
            }
        }
        _0x581756(_0x2d91e5, _0x528cce, _0x3a8aa8);
        if (_0xd2f464 > 0x0) {
            _0x2d91e5['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0xd2f464 + ')';
            _0x2d91e5['fillRect'](0x0, 0x0, _0x190416['CAMERA']['width'], _0x190416['CAMERA']['height']);
        }
        for (const _0xd0f508 in _0x5c0d1d) {
            const _0x1f58be = _0x5c0d1d[_0xd0f508];
            if (_0x1f58be['isDead'] && !_0x4c080f['isDead'])
                continue;
            const _0x4b09f2 = (_0x1f58be['renderX'] ?? _0x1f58be['x']) - _0x528cce + _0x1f58be['width'] / 0x2;
            const _0x49768e = (_0x1f58be['renderY'] ?? _0x1f58be['y']) - _0x3a8aa8 + _0x1f58be['height'] / 0x2;
            _0x18257f(_0x2d91e5, _0x1f58be['chats'], _0x4b09f2, _0x49768e - _0x1f58be['height'] / 0x2 - 0x20);
        }
        _0x18257f(_0x2d91e5, _0x4c080f['chats'], _0x5dd9ea, _0x2cd0e5 - _0x4c080f['height'] / 0x2 - 0x20);
    } finally {
        _0x2d91e5['restore']();
    }
}
function _0x4a71d8(_0x400e0e) {
    if (!_0x190416['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x4a71d8);
    let _0x468c64 = (_0x400e0e - _0x190416['SYSTEM']['lastTime']) / 0x3e8;
    _0x190416['SYSTEM']['lastTime'] = _0x400e0e;
    if (_0x468c64 > 0.1)
        _0x468c64 = 0.1;
    if (_0x468c64 < 0x0 || isNaN(_0x468c64))
        _0x468c64 = 0.016;
    if (_0xaca228) {
        _0x1fa6c9(_0x468c64);
        _0xc059a1();
        return;
    }
    if (!_0x51260a)
        return;
    _0x53e38e(_0x468c64);
    _0x5a5b31['tick'](_0x400e0e);
    _0xc059a1();
}
function _0x21486f() {
    const _0x4cc407 = Math['ceil'](_0x190416['MAP']['columns'] * _0x190416['MAP']['tileSize'] / _0x190416['MAP']['chunkSize']);
    const _0x581bce = Math['ceil'](_0x190416['MAP']['rows'] * _0x190416['MAP']['tileSize'] / _0x190416['MAP']['chunkSize']);
    _0x190416['MAP']['bgChunks'] = [];
    _0x190416['MAP']['fgChunks'] = [];
    _0x190416['MAP']['wallChunks'] = [];
    for (let _0xc5440d = 0x0; _0xc5440d < _0x581bce; _0xc5440d++) {
        _0x190416['MAP']['bgChunks'][_0xc5440d] = [];
        _0x190416['MAP']['fgChunks'][_0xc5440d] = [];
        _0x190416['MAP']['wallChunks'][_0xc5440d] = [];
        for (let _0x30e927 = 0x0; _0x30e927 < _0x4cc407; _0x30e927++) {
            const _0x35d4d0 = document['createElement']('canvas');
            _0x35d4d0['width'] = _0x35d4d0['height'] = _0x190416['MAP']['chunkSize'];
            const _0x51d749 = document['createElement']('canvas');
            _0x51d749['width'] = _0x51d749['height'] = _0x190416['MAP']['chunkSize'];
            const _0x54ab09 = document['createElement']('canvas');
            _0x54ab09['width'] = _0x54ab09['height'] = _0x190416['MAP']['chunkSize'];
            _0x190416['MAP']['bgChunks'][_0xc5440d][_0x30e927] = _0x35d4d0;
            _0x190416['MAP']['fgChunks'][_0xc5440d][_0x30e927] = _0x51d749;
            _0x190416['MAP']['wallChunks'][_0xc5440d][_0x30e927] = _0x54ab09;
            _0x3a7b2c(_0x30e927, _0xc5440d);
        }
    }
}
function _0x3a7b2c(_0x342170, _0x4b7d1e) {
    const _0x1c9c06 = _0x190416['MAP']['bgChunks'][_0x4b7d1e][_0x342170]['getContext']('2d', { 'alpha': !![] });
    const _0x19a717 = _0x190416['MAP']['fgChunks'][_0x4b7d1e][_0x342170]['getContext']('2d', { 'alpha': !![] });
    const _0x123631 = _0x190416['MAP']['wallChunks'][_0x4b7d1e] && _0x190416['MAP']['wallChunks'][_0x4b7d1e][_0x342170] ? _0x190416['MAP']['wallChunks'][_0x4b7d1e][_0x342170]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x1c9c06['imageSmoothingEnabled'] = _0x19a717['imageSmoothingEnabled'] = ![];
    if (_0x123631)
        _0x123631['imageSmoothingEnabled'] = ![];
    _0x1c9c06['clearRect'](0x0, 0x0, _0x190416['MAP']['chunkSize'], _0x190416['MAP']['chunkSize']);
    _0x19a717['clearRect'](0x0, 0x0, _0x190416['MAP']['chunkSize'], _0x190416['MAP']['chunkSize']);
    if (_0x123631)
        _0x123631['clearRect'](0x0, 0x0, _0x190416['MAP']['chunkSize'], _0x190416['MAP']['chunkSize']);
    const _0xcf62ce = Math['floor'](_0x342170 * _0x190416['MAP']['chunkSize'] / _0x190416['MAP']['tileSize']);
    const _0x21895f = Math['ceil']((_0x342170 + 0x1) * _0x190416['MAP']['chunkSize'] / _0x190416['MAP']['tileSize']);
    const _0x3ed65d = Math['floor'](_0x4b7d1e * _0x190416['MAP']['chunkSize'] / _0x190416['MAP']['tileSize']);
    const _0x39f5e6 = Math['ceil']((_0x4b7d1e + 0x1) * _0x190416['MAP']['chunkSize'] / _0x190416['MAP']['tileSize']);
    const _0x1a365b = 0.5;
    const _0x5c2fba = _0x190416['MAP']['tileSize'] - _0x1a365b * 0x2;
    _0x190416['MAP']['layers']['forEach'](_0x5a5b34 => {
        const _0x1c3609 = _0x5a5b34['name'] === 'walls';
        const _0xdd8938 = _0x5a5b34['name'] === 'trees' ? _0x19a717 : _0x1c3609 ? _0x123631 || _0x1c9c06 : _0x1c9c06;
        for (let _0x26ee38 = Math['max'](0x0, _0x3ed65d); _0x26ee38 < Math['min'](_0x190416['MAP']['rows'], _0x39f5e6); _0x26ee38++) {
            for (let _0x3383b5 = Math['max'](0x0, _0xcf62ce); _0x3383b5 < Math['min'](_0x190416['MAP']['columns'], _0x21895f); _0x3383b5++) {
                let _0x215275 = _0x5a5b34['data'][_0x26ee38 * _0x190416['MAP']['columns'] + _0x3383b5];
                if (_0x5a5b34['name'] === 'floor2' && _0x190416['MAP']['doors'] && _0x190416['MAP']['doors'][_0x26ee38 * _0x190416['MAP']['columns'] + _0x3383b5]) {
                    _0x215275 = 0x2;
                }
                if (_0x215275 > 0x0) {
                    const _0x23becb = _0x215275 - 0x1;
                    const _0x246287 = _0x23becb % _0x190416['MAP']['tilesetCols'] * _0x190416['MAP']['tileSize'] + _0x1a365b;
                    const _0xa797c5 = Math['floor'](_0x23becb / _0x190416['MAP']['tilesetCols']) * _0x190416['MAP']['tileSize'] + _0x1a365b;
                    const _0x4dfdd7 = _0x3383b5 * _0x190416['MAP']['tileSize'] - _0x342170 * _0x190416['MAP']['chunkSize'];
                    const _0x59dc99 = _0x26ee38 * _0x190416['MAP']['tileSize'] - _0x4b7d1e * _0x190416['MAP']['chunkSize'];
                    if (_0x215275 === 0x4) {
                        const _0x7990a8 = 0x1;
                        const _0x5eaffa = _0x7990a8 % _0x190416['MAP']['tilesetCols'] * _0x190416['MAP']['tileSize'] + _0x1a365b;
                        const _0x6b15ec = Math['floor'](_0x7990a8 / _0x190416['MAP']['tilesetCols']) * _0x190416['MAP']['tileSize'] + _0x1a365b;
                        _0x1c9c06['drawImage'](_0x50333e, _0x5eaffa, _0x6b15ec, _0x5c2fba, _0x5c2fba, _0x4dfdd7, _0x59dc99, _0x190416['MAP']['tileSize'], _0x190416['MAP']['tileSize']);
                        let _0x1d43ce = _0x190416['MAP']['doors'] ? _0x190416['MAP']['doors'][_0x26ee38 * _0x190416['MAP']['columns'] + _0x3383b5] : null;
                        if (!_0x1d43ce) {
                            const _0xed2c5b = _0x190416['MAP']['layers']['find'](_0x272b9c => _0x272b9c['name'] === 'walls');
                            const _0x11356a = _0x26ee38 > 0x0 && _0xed2c5b && _0xed2c5b['data'][(_0x26ee38 - 0x1) * _0x190416['MAP']['columns'] + _0x3383b5] > 0x0;
                            const _0x30fd21 = _0x26ee38 < _0x190416['MAP']['rows'] - 0x1 && _0xed2c5b && _0xed2c5b['data'][(_0x26ee38 + 0x1) * _0x190416['MAP']['columns'] + _0x3383b5] > 0x0;
                            const _0xa29a13 = _0x3383b5 > 0x0 && _0xed2c5b && _0xed2c5b['data'][_0x26ee38 * _0x190416['MAP']['columns'] + _0x3383b5 - 0x1] > 0x0;
                            const _0xc43b93 = _0x3383b5 < _0x190416['MAP']['columns'] - 0x1 && _0xed2c5b && _0xed2c5b['data'][_0x26ee38 * _0x190416['MAP']['columns'] + _0x3383b5 + 0x1] > 0x0;
                            if (_0xa29a13 && _0xc43b93)
                                _0x1d43ce = _0x26ee38 < _0x190416['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x11356a && _0x30fd21)
                                _0x1d43ce = _0x3383b5 < _0x190416['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x291c9c = 0x0;
                        if (_0x1d43ce === 'bottom')
                            _0x291c9c = Math['PI'] / 0x2;
                        else if (_0x1d43ce === 'left')
                            _0x291c9c = Math['PI'];
                        else if (_0x1d43ce === 'top')
                            _0x291c9c = -Math['PI'] / 0x2;
                        else if (_0x1d43ce === 'right')
                            _0x291c9c = 0x0;
                        if (_0x291c9c !== 0x0) {
                            _0xdd8938['save']();
                            _0xdd8938['translate'](_0x4dfdd7 + _0x190416['MAP']['tileSize'] / 0x2, _0x59dc99 + _0x190416['MAP']['tileSize'] / 0x2);
                            _0xdd8938['rotate'](_0x291c9c);
                            _0xdd8938['drawImage'](_0x50333e, _0x246287, _0xa797c5, _0x5c2fba, _0x5c2fba, -_0x190416['MAP']['tileSize'] / 0x2, -_0x190416['MAP']['tileSize'] / 0x2, _0x190416['MAP']['tileSize'], _0x190416['MAP']['tileSize']);
                            _0xdd8938['restore']();
                        } else {
                            _0xdd8938['drawImage'](_0x50333e, _0x246287, _0xa797c5, _0x5c2fba, _0x5c2fba, _0x4dfdd7, _0x59dc99, _0x190416['MAP']['tileSize'], _0x190416['MAP']['tileSize']);
                        }
                    } else {
                        _0xdd8938['drawImage'](_0x50333e, _0x246287, _0xa797c5, _0x5c2fba, _0x5c2fba, _0x4dfdd7, _0x59dc99, _0x190416['MAP']['tileSize'], _0x190416['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x6eb914() {
    _0x50333e['crossOrigin'] = 'Anonymous';
    _0x50333e['onload'] = () => {
        _0x190416['MAP']['tilesetCols'] = 0x3;
        _0x416f11();
    };
    _0x50333e['onerror'] = () => {
        _0x190416['MAP']['tilesetCols'] = 0x1;
        _0x416f11();
    };
    _0x50333e['src'] = 'assets/tilesheet.png';
    _0x63b11f['crossOrigin'] = 'Anonymous';
    _0x63b11f['onload'] = _0x416f11;
    _0x63b11f['onerror'] = () => {
        _0x416f11();
    };
    _0x63b11f['src'] = 'assets/center.png';
    _0x3a8544['crossOrigin'] = 'Anonymous';
    _0x3a8544['onload'] = _0x416f11;
    _0x3a8544['onerror'] = () => {
        _0x416f11();
    };
    _0x3a8544['src'] = 'assets/table.png';
}
function _0x416f11() {
    _0x190416['SYSTEM']['assetsLoaded']++;
    if (_0x190416['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x15d11f();
    }
}
function _0x5e202c(_0x2ac098, _0x4ae46d) {
    if (!_0x2bc621 || !_0x46a4d6)
        return;
    const _0x3effe6 = _0x2ac098 / _0x190416['SYSTEM']['viewScale'] + _0x190416['CAMERA']['x'];
    const _0x3e8d32 = _0x4ae46d / _0x190416['SYSTEM']['viewScale'] + _0x190416['CAMERA']['y'];
    const _0x252e5f = Math['floor'](_0x3effe6 / _0x190416['MAP']['tileSize']);
    const _0x3eb193 = Math['floor'](_0x3e8d32 / _0x190416['MAP']['tileSize']);
    if (_0x252e5f >= 0x0 && _0x252e5f < _0x190416['MAP']['columns'] && _0x3eb193 >= 0x0 && _0x3eb193 < _0x190416['MAP']['rows'])
        _0x46a4d6['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x190416['EDITOR']['selectedLayer'],
            'col': _0x252e5f,
            'row': _0x3eb193,
            'gid': _0x190416['EDITOR']['selectedTileGid']
        }));
}
function _0x528440() {
    const _0x509e5f = document['getElementById']('palette');
    if (!_0x509e5f || _0x509e5f['children']['length'] > 0x0)
        return;
    const _0x3bec69 = 0x40;
    const _0x3a8dd8 = _0x50333e;
    const _0x171000 = document['createElement']('div');
    _0x171000['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x537fb8 = document['createElement']('canvas');
    _0x537fb8['width'] = 0xc0;
    _0x537fb8['height'] = 0xa0;
    _0x537fb8['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x171000['appendChild'](_0x537fb8);
    const _0x2bcdae = document['createElement']('div');
    _0x2bcdae['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x171000['appendChild'](_0x2bcdae);
    let _0x33fb0f = 0x0, _0x2f64a2 = 0x0;
    let _0x1e15e8 = ![], _0x4fa7c3 = 0x0, _0xebda59 = 0x0, _0x561f6a = 0x0, _0x20f3d1 = 0x0;
    function _0x2a5cf6() {
        const _0x2eddf2 = _0x537fb8['getContext']('2d');
        _0x2eddf2['clearRect'](0x0, 0x0, _0x537fb8['width'], _0x537fb8['height']);
        _0x2eddf2['imageSmoothingEnabled'] = ![];
        if (_0x3a8dd8['complete'] && _0x3a8dd8['naturalWidth'] > 0x0) {
            _0x2eddf2['drawImage'](_0x3a8dd8, _0x33fb0f, _0x2f64a2, _0x537fb8['width'], _0x537fb8['height'], 0x0, 0x0, _0x537fb8['width'], _0x537fb8['height']);
        }
        _0x2eddf2['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x2eddf2['lineWidth'] = 0x1;
        const _0x98e9e5 = Math['floor'](_0x33fb0f / _0x3bec69);
        const _0x35ee5c = Math['floor'](_0x2f64a2 / _0x3bec69);
        for (let _0x352132 = _0x98e9e5; _0x352132 <= _0x98e9e5 + Math['ceil'](_0x537fb8['width'] / _0x3bec69) + 0x1; _0x352132++) {
            const _0x320767 = _0x352132 * _0x3bec69 - _0x33fb0f;
            _0x2eddf2['beginPath']();
            _0x2eddf2['moveTo'](_0x320767, 0x0);
            _0x2eddf2['lineTo'](_0x320767, _0x537fb8['height']);
            _0x2eddf2['stroke']();
        }
        for (let _0x5da546 = _0x35ee5c; _0x5da546 <= _0x35ee5c + Math['ceil'](_0x537fb8['height'] / _0x3bec69) + 0x1; _0x5da546++) {
            const _0x51aa46 = _0x5da546 * _0x3bec69 - _0x2f64a2;
            _0x2eddf2['beginPath']();
            _0x2eddf2['moveTo'](0x0, _0x51aa46);
            _0x2eddf2['lineTo'](_0x537fb8['width'], _0x51aa46);
            _0x2eddf2['stroke']();
        }
    }
    function _0xa306() {
        const _0x28f90c = Math['max'](0x1, Math['ceil'](_0x3a8dd8['naturalWidth'] / _0x3bec69));
        const _0x44b52d = _0x190416['EDITOR']['selectedTileGid'];
        if (_0x44b52d <= 0x0) {
            _0x2bcdae['style']['display'] = 'none';
            return;
        }
        const _0x3e958b = _0x44b52d - 0x1;
        const _0x3f3b57 = _0x3e958b % _0x28f90c;
        const _0xf626fd = Math['floor'](_0x3e958b / _0x28f90c);
        const _0x507386 = _0x3f3b57 * _0x3bec69 - _0x33fb0f;
        const _0x22eddc = _0xf626fd * _0x3bec69 - _0x2f64a2;
        _0x2bcdae['style']['display'] = 'block';
        _0x2bcdae['style']['left'] = _0x507386 + 'px';
        _0x2bcdae['style']['top'] = _0x22eddc + 'px';
    }
    _0x3a8dd8['onload'] = () => {
        _0x2a5cf6();
        _0xa306();
    };
    if (_0x3a8dd8['complete'] && _0x3a8dd8['naturalWidth'] > 0x0) {
        _0x2a5cf6();
        _0xa306();
    }
    _0x171000['addEventListener']('mousedown', _0xfd2683 => {
        if (_0xfd2683['button'] === 0x0) {
            _0x1e15e8 = !![];
            _0x4fa7c3 = _0xfd2683['clientX'];
            _0xebda59 = _0xfd2683['clientY'];
            _0x561f6a = _0x33fb0f;
            _0x20f3d1 = _0x2f64a2;
            _0x171000['style']['cursor'] = 'grabbing';
            _0xfd2683['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x4f268f => {
        if (!_0x1e15e8)
            return;
        const _0x338726 = _0x4fa7c3 - _0x4f268f['clientX'];
        const _0xdd1fab = _0xebda59 - _0x4f268f['clientY'];
        const _0x41b668 = Math['max'](0x0, _0x3a8dd8['naturalWidth'] - _0x537fb8['width']);
        const _0x4802f1 = Math['max'](0x0, _0x3a8dd8['naturalHeight'] - _0x537fb8['height']);
        _0x33fb0f = Math['max'](0x0, Math['min'](_0x41b668, _0x561f6a + _0x338726));
        _0x2f64a2 = Math['max'](0x0, Math['min'](_0x4802f1, _0x20f3d1 + _0xdd1fab));
        _0x2a5cf6();
        _0xa306();
    });
    window['addEventListener']('mouseup', _0x560bb3 => {
        if (_0x1e15e8) {
            _0x1e15e8 = ![];
            _0x171000['style']['cursor'] = 'grab';
        }
    });
    _0x171000['addEventListener']('click', _0x13ea9e => {
        const _0x17b563 = _0x171000['getBoundingClientRect']();
        const _0xb9b0ec = _0x13ea9e['clientX'] - _0x17b563['left'] + _0x33fb0f;
        const _0x5832b0 = _0x13ea9e['clientY'] - _0x17b563['top'] + _0x2f64a2;
        const _0x590683 = Math['max'](0x1, Math['ceil'](_0x3a8dd8['naturalWidth'] / _0x3bec69));
        const _0x4dd474 = Math['floor'](_0xb9b0ec / _0x3bec69);
        const _0x3ccd28 = Math['floor'](_0x5832b0 / _0x3bec69);
        const _0xa75cb4 = _0x3ccd28 * _0x590683 + _0x4dd474 + 0x1;
        _0x190416['EDITOR']['selectedTileGid'] = _0xa75cb4;
        _0xa306();
    });
    _0x509e5f['appendChild'](_0x171000);
    const _0x15b114 = document['createElement']('div');
    _0x15b114['className'] = 'tile-btn\x20eraser-btn';
    _0x15b114['title'] = 'Eraser\x20(gid\x200)';
    _0x15b114['onclick'] = () => {
        _0x190416['EDITOR']['selectedTileGid'] = 0x0;
        _0x2bcdae['style']['display'] = 'none';
    };
    _0x509e5f['appendChild'](_0x15b114);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x190416['EDITOR']['enabled'] = !_0x190416['EDITOR']['enabled'];
        const _0x31eb5a = document['getElementById']('editor-tools');
        if (_0x190416['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x31eb5a['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x31eb5a['style']['display'] = 'none';
        }
    });
    const _0x4def22 = document['getElementById']('start-game-btn');
    if (_0x4def22) {
        _0x4def22['addEventListener']('click', () => {
            if (_0x46a4d6)
                _0x46a4d6['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x21bce5 = document['getElementById']('rolelist-toggle-btn');
    if (_0x21bce5) {
        let _0x4747a6 = 'subalignments';
        _0x21bce5['addEventListener']('click', () => {
            if (_0x4747a6 === 'subalignments')
                _0x4747a6 = 'precise';
            else if (_0x4747a6 === 'precise')
                _0x4747a6 = 'off';
            else
                _0x4747a6 = 'subalignments';
            _0x21bce5['innerText'] = 'Role\x20List:\x20' + _0x4747a6['charAt'](0x0)['toUpperCase']() + _0x4747a6['slice'](0x1);
            if (_0x46a4d6)
                _0x46a4d6['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x4747a6
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x351c5b => {
        if (_0x351c5b['id'] === 'editor-toggle-btn' || _0x351c5b['id'] === 'start-game-btn' || _0x351c5b['id'] === 'rolelist-toggle-btn')
            return;
        _0x351c5b['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x2b47e3 => _0x2b47e3['classList']['remove']('active'));
            _0x351c5b['classList']['add']('active');
            _0x190416['EDITOR']['selectedLayer'] = _0x351c5b['dataset']['layer'];
        });
    });
}
function _0x45cc09(_0x247414) {
    if (_0x46a4d6)
        _0x46a4d6['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x247414
        }));
}
function _0x5b510d(_0x207e22) {
    if (_0x46a4d6)
        _0x46a4d6['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x207e22
        }));
}
function _0x5efd1c(_0x9a0cab, _0x2aceaf, _0x8097b0, _0x27aeac) {
    const _0x1ade4b = document['getElementById']('admin-panel');
    if (_0x1ade4b)
        _0x1ade4b['remove']();
    if (_0x1ade4b && _0x1ade4b['dataset']['target'] === String(_0x9a0cab))
        return;
    const _0x3b8507 = document['createElement']('div');
    _0x3b8507['id'] = 'admin-panel';
    _0x3b8507['dataset']['target'] = String(_0x9a0cab);
    _0x3b8507['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x466e08 = document['createElement']('div');
    _0x466e08['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x466e08['textContent'] = _0x2aceaf;
    _0x3b8507['appendChild'](_0x466e08);
    const _0x322179 = document['createElement']('button');
    _0x322179['textContent'] = 'Kick';
    _0x322179['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x322179['onmouseenter'] = () => _0x322179['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x322179['onmouseleave'] = () => _0x322179['style']['background'] = 'transparent';
    _0x322179['onclick'] = () => {
        _0x45cc09(_0x9a0cab);
        _0x3b8507['remove']();
    };
    _0x3b8507['appendChild'](_0x322179);
    const _0x52b261 = document['createElement']('button');
    _0x52b261['textContent'] = 'Ban';
    _0x52b261['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x52b261['onmouseenter'] = () => _0x52b261['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x52b261['onmouseleave'] = () => _0x52b261['style']['background'] = 'transparent';
    _0x52b261['onclick'] = () => {
        _0x5b510d(_0x9a0cab);
        _0x3b8507['remove']();
    };
    _0x3b8507['appendChild'](_0x52b261);
    document['body']['appendChild'](_0x3b8507);
    const _0x4db046 = _0x3b8507['offsetWidth'] || 0x91;
    const _0x1b3167 = _0x3b8507['offsetHeight'] || 0x50;
    let _0x4be6f1 = _0x8097b0 - _0x4db046;
    let _0x2b91cd = _0x27aeac;
    if (_0x4be6f1 < 0x4)
        _0x4be6f1 = _0x8097b0;
    if (_0x2b91cd + _0x1b3167 > window['innerHeight'] - 0x4)
        _0x2b91cd = window['innerHeight'] - _0x1b3167 - 0x4;
    _0x3b8507['style']['left'] = _0x4be6f1 + 'px';
    _0x3b8507['style']['top'] = _0x2b91cd + 'px';
    const _0x1105a9 = _0x5e029b => {
        if (!_0x3b8507['contains'](_0x5e029b['target'])) {
            _0x3b8507['remove']();
            document['removeEventListener']('mousedown', _0x1105a9);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x1105a9), 0x0);
}
function _0x5d5553() {
    const _0x2ee9f7 = document['getElementById']('leaderboard-list');
    _0x2ee9f7['innerHTML'] = '';
    const _0x1ecf13 = document['createElement']('div');
    _0x1ecf13['className'] = 'leaderboard-entry';
    const _0x430e2a = document['createElement']('span');
    _0x430e2a['textContent'] = _0x414d8b + (_0x2bc621 ? '\x20[🗝️]' : '');
    if (_0x4dfdeb['has'](_0x51260a) && !_0x4c080f['isDead']) {
        _0x430e2a['style']['color'] = '#cc88ff';
    }
    _0x1ecf13['appendChild'](_0x430e2a);
    _0x2ee9f7['appendChild'](_0x1ecf13);
    for (const _0x2a5529 in _0x5c0d1d) {
        const _0x31237a = document['createElement']('div');
        _0x31237a['className'] = 'leaderboard-entry';
        const _0x11a0e1 = document['createElement']('span');
        _0x11a0e1['textContent'] = _0x5c0d1d[_0x2a5529]['name'] + (_0x5c0d1d[_0x2a5529]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x4dfdeb['has'](parseInt(_0x2a5529)) && !_0x5c0d1d[_0x2a5529]['isDead']) {
            _0x11a0e1['style']['color'] = '#cc88ff';
        }
        _0x31237a['appendChild'](_0x11a0e1);
        if (_0x2bc621 && !_0x5c0d1d[_0x2a5529]['isOwner']) {
            const _0x3db983 = _0x5c0d1d[_0x2a5529]['id'];
            const _0x5d8212 = _0x5c0d1d[_0x2a5529]['name'];
            _0x31237a['style']['cursor'] = 'context-menu';
            _0x31237a['addEventListener']('contextmenu', _0x3bd9a1 => {
                _0x3bd9a1['preventDefault']();
                _0x3bd9a1['stopPropagation']();
                _0x5efd1c(_0x3db983, _0x5d8212, _0x3bd9a1['clientX'], _0x3bd9a1['clientY']);
            });
        }
        _0x2ee9f7['appendChild'](_0x31237a);
    }
}
window['addEventListener']('resize', _0x15d11f);
function _0x15d11f() {
    _0x33fb14['width'] = window['innerWidth'];
    _0x33fb14['height'] = window['innerHeight'];
    _0x190416['SYSTEM']['viewScale'] = Math['max'](_0x33fb14['width'] / _0x1086d9, _0x33fb14['height'] / _0x478127);
    _0x190416['CAMERA']['width'] = _0x33fb14['width'] / _0x190416['SYSTEM']['viewScale'];
    _0x190416['CAMERA']['height'] = _0x33fb14['height'] / _0x190416['SYSTEM']['viewScale'];
    _0x2d91e5['imageSmoothingEnabled'] = ![];
}
function _0x3a9b37(_0xd0dba0) {
    if (_0xd0dba0['ctrlKey'] || _0xd0dba0['metaKey']) {
        if (_0xd0dba0['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0xd0dba0['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0xd0dba0['code'])) {
            _0xd0dba0['preventDefault']();
            _0xd0dba0['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x3a9b37, { 'passive': ![] });
window['addEventListener']('keydown', _0x3a9b37, { 'passive': ![] });
window['addEventListener']('keydown', _0x14963c => {
    const _0x2683db = _0x14963c['key']['toLowerCase']();
    if (_0x2683db === 'tab') {
        _0x14963c['preventDefault']();
        const _0x53a408 = document['getElementById']('will-ui');
        const _0xf14e5f = document['getElementById']('will-input');
        if (_0x53a408['style']['display'] === 'flex') {
            _0x53a408['style']['display'] = 'none';
            if (_0x46a4d6)
                _0x46a4d6['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0xf14e5f['value']
                }));
            _0xf14e5f['blur']();
        } else {
            _0x53a408['style']['display'] = 'flex';
            _0xf14e5f['focus']();
            for (let _0x2c9ac3 in _0x190416['INPUTS']['keys'])
                _0x190416['INPUTS']['keys'][_0x2c9ac3] = ![];
        }
        return;
    }
    if (_0x14963c['key'] === 'Enter') {
        if (_0xaca228) {
            const _0x9baeb6 = document['getElementById']('play-btn');
            if (_0x9baeb6)
                _0x9baeb6['click']();
            return;
        }
        if (!_0x46a4d6 || _0x46a4d6['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x49bb64 = document['getElementById']('chat-ui');
        const _0x350a0 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x350a0) {
            const _0x2090ca = _0x350a0['value']['trim']();
            if (_0x2090ca['length'] > 0x0) {
                _0x46a4d6['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x2090ca
                }));
            }
            _0x350a0['value'] = '';
            _0x49bb64['style']['display'] = 'none';
            _0x350a0['blur']();
        } else {
            _0x49bb64['style']['display'] = 'block';
            _0x350a0['focus']();
            for (let _0x2755d2 in _0x190416['INPUTS']['keys'])
                _0x190416['INPUTS']['keys'][_0x2755d2] = ![];
        }
        _0x14963c['preventDefault']();
        return;
    }
    if (_0x14963c['key'] === 'Escape') {
        const _0x5a5430 = document['getElementById']('guide-ui');
        if (_0x5a5430 && _0x5a5430['style']['display'] === 'flex') {
            _0x5a5430['style']['display'] = 'none';
            return;
        }
        const _0x298def = document['getElementById']('ability-ui');
        if (_0x298def && _0x298def['style']['display'] === 'block') {
            _0x298def['style']['display'] = 'none';
            return;
        }
        const _0x4728f6 = document['getElementById']('settings-panel');
        if (_0x4728f6 && _0x4728f6['style']['display'] === 'block') {
            _0x4728f6['style']['display'] = 'none';
            return;
        }
        const _0x4dfbab = document['getElementById']('mayor-confirm-dialog');
        if (_0x4dfbab && _0x4dfbab['style']['display'] === 'flex') {
            _0x4dfbab['style']['display'] = 'none';
            return;
        }
        const _0x236f54 = document['getElementById']('target-chooser-ui');
        if (_0x236f54 && _0x236f54['style']['display'] === 'flex') {
            _0x236f54['style']['display'] = 'none';
            return;
        }
        const _0x12ee1e = document['getElementById']('chat-ui');
        const _0x4ee303 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x4ee303) {
            _0x4ee303['value'] = '';
            _0x12ee1e['style']['display'] = 'none';
            _0x4ee303['blur']();
            _0x14963c['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x190416['INPUTS']['keys']['hasOwnProperty'](_0x2683db))
            _0x190416['INPUTS']['keys'][_0x2683db] = !![];
        if (!_0x46a4d6 || _0x46a4d6['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x2683db === 'h' && !_0x14963c['repeat']) {
            const _0xbcd388 = document['getElementById']('guide-ui');
            if (_0xbcd388) {
                _0xbcd388['style']['display'] = _0xbcd388['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x2683db === 't' && !_0x14963c['repeat']) {
            if (_0x4c080f['isDead'])
                return;
            if (_0x1c95bc === 'Mayor') {
                if (_0x4dfdeb['has'](_0x51260a)) {
                    _0x567c7e('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x5aa85c = document['getElementById']('mayor-confirm-dialog');
                if (_0x5aa85c)
                    _0x5aa85c['style']['display'] = 'flex';
                return;
            }
            if (_0x190416['GAME_STATE'] === 'NIGHT') {
                if (!_0x190416['NIGHT_ABILITY_OPEN']) {
                    _0x567c7e('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x3e4029 = document['getElementById']('ability-ui');
                if (_0x3e4029) {
                    if (_0x3e4029['style']['display'] === 'block') {
                        _0x3e4029['style']['display'] = 'none';
                    } else {
                        _0x43475e();
                        _0x3e4029['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x190416['GAME_STATE'] === 'DAY_DISCUSS' || _0x190416['GAME_STATE'] === 'DAY_VOTE') {
                _0x567c7e('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x2683db === 'e' && !_0x4c080f['isDead']) {
            const _0x2456a1 = Date['now']();
            if (!window['_lastDoorSend'] || _0x2456a1 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x2456a1;
                _0x46a4d6['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x5926ad => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x2d2d87 = _0x5926ad['key']['toLowerCase']();
        if (_0x190416['INPUTS']['keys']['hasOwnProperty'](_0x2d2d87))
            _0x190416['INPUTS']['keys'][_0x2d2d87] = ![];
    }
});
window['addEventListener']('mousemove', _0x314360 => {
    _0x190416['INPUTS']['mouseX'] = _0x314360['clientX'];
    _0x190416['INPUTS']['mouseY'] = _0x314360['clientY'];
    if (_0x190416['INPUTS']['isMouseDown'] && _0x190416['EDITOR']['enabled']) {
        _0x5e202c(_0x314360['clientX'], _0x314360['clientY']);
    }
});
window['addEventListener']('mousedown', _0x2c106b => {
    if (_0x2c106b['target']['closest']('#editor-ui') || _0x2c106b['target']['closest']('#leaderboard-ui') || _0x2c106b['target']['closest']('#chat-log-ui') || _0x2c106b['target']['closest']('#target-chooser-ui') || _0x2c106b['target']['closest']('#guide-ui') || _0x2c106b['target']['closest']('#role-list-ui') || _0x2c106b['target']['closest']('#ability-ui') || _0x2c106b['target']['closest']('#settings-panel') || _0x2c106b['target']['closest']('#mayor-confirm-dialog') || _0x2c106b['target']['closest']('#mobile-action-bar') || _0x2c106b['target']['closest']('#mobile-top-bar') || _0x2c106b['target']['closest']('#mobile-joystick-zone') || _0x2c106b['target']['closest']('#mobile-chat-overlay') || _0x2c106b['target']['closest']('#will-ui') || _0x2c106b['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x2c106b['button'] === 0x0) {
        _0x190416['INPUTS']['isMouseDown'] = !![];
        if (_0x190416['EDITOR']['enabled'])
            _0x5e202c(_0x2c106b['clientX'], _0x2c106b['clientY']);
    }
});
window['addEventListener']('mouseup', _0x40f31a => {
    _0x190416['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x50e0f6 => {
    if (_0x50e0f6['target']['closest']('#settings-btn'))
        return;
    const _0x48472b = document['getElementById']('leaderboard-list');
    const _0x435db9 = document['getElementById']('leaderboard-toggle');
    if (_0x48472b['style']['display'] === 'none') {
        _0x48472b['style']['display'] = 'flex';
        _0x435db9['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x48472b['style']['display'] = 'none';
        _0x435db9['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x5d0f0a = document['getElementById']('close-target-btn');
if (_0x5d0f0a) {
    _0x5d0f0a['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x1adcbc = document['getElementById']('close-guide-btn');
if (_0x1adcbc) {
    _0x1adcbc['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x1f6e8d = document['getElementById']('role-list-header');
if (_0x1f6e8d) {
    _0x1f6e8d['addEventListener']('click', () => {
        const _0x2577f8 = document['getElementById']('role-list-items');
        const _0x496043 = document['getElementById']('role-list-toggle');
        if (_0x2577f8['style']['display'] === 'none') {
            _0x2577f8['style']['display'] = 'flex';
            _0x496043['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x2577f8['style']['display'] = 'none';
            _0x496043['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x24934e() {
    const _0x45dc1b = document['getElementById']('mobile-joystick-zone');
    const _0x1078ba = document['getElementById']('mobile-joystick-base');
    const _0x4a2491 = document['getElementById']('mobile-joystick-knob');
    if (_0x45dc1b && _0x1078ba && _0x4a2491) {
        const _0x42c517 = 0x3e;
        const _0x32cac9 = (_0x498c68, _0x12e8c1) => {
            const _0x93f897 = _0x1078ba['getBoundingClientRect']();
            const _0x597851 = _0x93f897['left'] + _0x93f897['width'] / 0x2;
            const _0x54bbd2 = _0x93f897['top'] + _0x93f897['height'] / 0x2;
            const _0x3eb65b = _0x498c68 - _0x597851;
            const _0x52bf4c = _0x12e8c1 - _0x54bbd2;
            const _0x3437d7 = Math['hypot'](_0x3eb65b, _0x52bf4c);
            if (_0x3437d7 === 0x0) {
                _0x44afff = 0x0;
                _0x2f570b = 0x0;
                _0x5e9e16 = ![];
                _0x4a2491['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x712543 = Math['min'](_0x3437d7, _0x42c517);
            const _0x14459d = _0x3eb65b / _0x3437d7 * _0x712543;
            const _0x4c7852 = _0x52bf4c / _0x3437d7 * _0x712543;
            _0x44afff = _0x14459d / _0x42c517;
            _0x2f570b = _0x4c7852 / _0x42c517;
            _0x5e9e16 = _0x3437d7 >= _0x42c517 * 0.75;
            _0x4a2491['style']['transform'] = 'translate(' + _0x14459d + 'px,\x20' + _0x4c7852 + 'px)';
        };
        const _0x35d579 = _0x15b735 => {
            for (let _0x2c3796 = 0x0; _0x2c3796 < _0x15b735['changedTouches']['length']; _0x2c3796++) {
                const _0x293efc = _0x15b735['changedTouches'][_0x2c3796];
                if (_0x11373b === null) {
                    _0x11373b = _0x293efc['identifier'];
                    _0x2c8a54 = !![];
                    _0x32cac9(_0x293efc['clientX'], _0x293efc['clientY']);
                    break;
                }
            }
        };
        const _0x25880c = _0x579755 => {
            for (let _0x795041 = 0x0; _0x795041 < _0x579755['changedTouches']['length']; _0x795041++) {
                const _0x42bd21 = _0x579755['changedTouches'][_0x795041];
                if (_0x42bd21['identifier'] === _0x11373b) {
                    _0x32cac9(_0x42bd21['clientX'], _0x42bd21['clientY']);
                    break;
                }
            }
        };
        const _0x1deea4 = _0x923845 => {
            for (let _0x5c8e6d = 0x0; _0x5c8e6d < _0x923845['changedTouches']['length']; _0x5c8e6d++) {
                const _0x289622 = _0x923845['changedTouches'][_0x5c8e6d];
                if (_0x289622['identifier'] === _0x11373b) {
                    _0x11373b = null;
                    _0x2c8a54 = ![];
                    _0x44afff = 0x0;
                    _0x2f570b = 0x0;
                    _0x5e9e16 = ![];
                    _0x4a2491['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x45dc1b['addEventListener']('touchstart', _0x42837e => {
            _0x42837e['preventDefault']();
            _0x35d579(_0x42837e);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x25880c, { 'passive': !![] });
        window['addEventListener']('touchend', _0x1deea4, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x1deea4, { 'passive': !![] });
    }
    const _0x338591 = (_0x3b3342, _0x990ea) => {
        const _0x5acfcf = _0x3b3342 / _0x190416['SYSTEM']['viewScale'];
        const _0x3356b2 = _0x990ea / _0x190416['SYSTEM']['viewScale'];
        const _0x1eb54c = _0x4c080f['x'] - _0x190416['CAMERA']['x'] + _0x4c080f['width'] / 0x2;
        const _0x226084 = _0x4c080f['y'] - _0x190416['CAMERA']['y'] + _0x4c080f['height'] / 0x2;
        _0x20a7ed = Math['atan2'](_0x3356b2 - _0x226084, _0x5acfcf - _0x1eb54c);
        _0x42bcb6 = !![];
        _0x190416['INPUTS']['mouseX'] = _0x3b3342;
        _0x190416['INPUTS']['mouseY'] = _0x990ea;
    };
    _0x33fb14['addEventListener']('touchstart', _0x18a44f => {
        if (_0xaca228)
            return;
        for (let _0x5abe38 = 0x0; _0x5abe38 < _0x18a44f['changedTouches']['length']; _0x5abe38++) {
            const _0x246115 = _0x18a44f['changedTouches'][_0x5abe38];
            if (_0x246115['identifier'] !== _0x11373b && _0x2f1717 === null) {
                _0x2f1717 = _0x246115['identifier'];
                _0x338591(_0x246115['clientX'], _0x246115['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x33fb14['addEventListener']('touchmove', _0x5bbd3a => {
        if (_0xaca228)
            return;
        for (let _0x4db867 = 0x0; _0x4db867 < _0x5bbd3a['changedTouches']['length']; _0x4db867++) {
            const _0x573691 = _0x5bbd3a['changedTouches'][_0x4db867];
            if (_0x573691['identifier'] === _0x2f1717) {
                _0x338591(_0x573691['clientX'], _0x573691['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x4d59c5 = _0x462ba2 => {
        for (let _0x2a4813 = 0x0; _0x2a4813 < _0x462ba2['changedTouches']['length']; _0x2a4813++) {
            const _0xe0c3a9 = _0x462ba2['changedTouches'][_0x2a4813];
            if (_0xe0c3a9['identifier'] === _0x2f1717) {
                _0x2f1717 = null;
                _0x42bcb6 = ![];
                break;
            }
        }
    };
    _0x33fb14['addEventListener']('touchend', _0x4d59c5, { 'passive': !![] });
    _0x33fb14['addEventListener']('touchcancel', _0x4d59c5, { 'passive': !![] });
    const _0xadca07 = document['getElementById']('mob-sprint-btn');
    if (_0xadca07) {
        _0xadca07['addEventListener']('click', _0x188092 => {
            _0x188092['stopPropagation']();
            _0x39bc75 = !_0x39bc75;
            _0xadca07['classList']['toggle']('active', _0x39bc75);
        });
    }
    const _0x20a1a1 = document['getElementById']('mob-interact-btn');
    if (_0x20a1a1) {
        _0x20a1a1['addEventListener']('click', _0xa6a718 => {
            _0xa6a718['stopPropagation']();
            if (!_0x4c080f['isDead']) {
                const _0x13384c = Date['now']();
                if (!window['_lastDoorSend'] || _0x13384c - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x13384c;
                    if (_0x46a4d6 && _0x46a4d6['readyState'] === WebSocket['OPEN'])
                        _0x46a4d6['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x31a9a6 = document['getElementById']('mob-ability-btn');
    if (_0x31a9a6) {
        _0x31a9a6['addEventListener']('click', _0x863beb => {
            _0x863beb['stopPropagation']();
            if (_0x4c080f['isDead'])
                return;
            if (_0x1c95bc === 'Mayor') {
                if (_0x4dfdeb['has'](_0x51260a)) {
                    _0x567c7e('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x373ea1 = document['getElementById']('mayor-confirm-dialog');
                if (_0x373ea1)
                    _0x373ea1['style']['display'] = 'flex';
                return;
            }
            if (_0x190416['GAME_STATE'] === 'NIGHT') {
                if (!_0x190416['NIGHT_ABILITY_OPEN']) {
                    _0x567c7e('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x1005d3 = document['getElementById']('ability-ui');
                if (_0x1005d3) {
                    if (_0x1005d3['style']['display'] === 'block') {
                        _0x1005d3['style']['display'] = 'none';
                    } else {
                        _0x43475e();
                        _0x1005d3['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x190416['GAME_STATE'] === 'DAY_DISCUSS' || _0x190416['GAME_STATE'] === 'DAY_VOTE') {
                _0x567c7e('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x5c90c8 = document['getElementById']('mob-will-btn');
    const _0x18dc88 = document['getElementById']('will-ui');
    const _0x209545 = document['getElementById']('will-input');
    const _0x530b27 = document['getElementById']('close-will-btn');
    const _0x43606 = () => {
        if (!_0x18dc88)
            return;
        if (_0x18dc88['style']['display'] === 'flex') {
            _0x18dc88['style']['display'] = 'none';
            if (_0x46a4d6 && _0x46a4d6['readyState'] === WebSocket['OPEN'] && _0x209545) {
                _0x46a4d6['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x209545['value']
                }));
            }
            if (_0x209545)
                _0x209545['blur']();
        } else {
            _0x18dc88['style']['display'] = 'flex';
            if (_0x209545)
                _0x209545['focus']();
        }
    };
    if (_0x5c90c8)
        _0x5c90c8['addEventListener']('click', _0x7d717d => {
            _0x7d717d['stopPropagation']();
            _0x43606();
        });
    if (_0x530b27)
        _0x530b27['addEventListener']('click', _0x243941 => {
            _0x243941['stopPropagation']();
            _0x43606();
        });
    const _0x5629c1 = document['getElementById']('mob-chat-btn');
    const _0x1d6b02 = document['getElementById']('mobile-chat-overlay');
    const _0x264b48 = document['getElementById']('mobile-chat-input');
    const _0x25a4bc = document['getElementById']('mobile-chat-send');
    const _0x5ce38f = document['getElementById']('mobile-chat-cancel');
    const _0x2bf5fa = () => {
        if (!_0x1d6b02 || !_0x264b48)
            return;
        _0x1d6b02['style']['display'] = 'flex';
        _0x264b48['value'] = '';
        _0x264b48['focus']();
    };
    const _0x42d4a7 = () => {
        if (!_0x1d6b02 || !_0x264b48)
            return;
        _0x1d6b02['style']['display'] = 'none';
        _0x264b48['blur']();
    };
    const _0x4950b7 = () => {
        if (!_0x264b48)
            return;
        const _0xaa9010 = _0x264b48['value']['trim']();
        if (_0xaa9010['length'] > 0x0 && _0x46a4d6 && _0x46a4d6['readyState'] === WebSocket['OPEN']) {
            _0x46a4d6['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0xaa9010
            }));
        }
        _0x264b48['value'] = '';
        _0x42d4a7();
    };
    if (_0x5629c1)
        _0x5629c1['addEventListener']('click', _0xe36a91 => {
            _0xe36a91['stopPropagation']();
            _0x2bf5fa();
        });
    if (_0x25a4bc)
        _0x25a4bc['addEventListener']('click', _0x35aefd => {
            _0x35aefd['stopPropagation']();
            _0x4950b7();
        });
    if (_0x5ce38f)
        _0x5ce38f['addEventListener']('click', _0x7630da => {
            _0x7630da['stopPropagation']();
            _0x42d4a7();
        });
    if (_0x264b48) {
        _0x264b48['addEventListener']('keydown', _0x44e2b3 => {
            if (_0x44e2b3['key'] === 'Enter') {
                _0x44e2b3['preventDefault']();
                _0x4950b7();
            } else if (_0x44e2b3['key'] === 'Escape') {
                _0x42d4a7();
            }
        });
    }
    const _0x5e4238 = document['getElementById']('mob-top-chat');
    if (_0x5e4238)
        _0x5e4238['addEventListener']('click', _0x3d8886 => {
            _0x3d8886['stopPropagation']();
            _0x2bf5fa();
        });
    const _0x55258b = document['getElementById']('mob-top-will');
    if (_0x55258b)
        _0x55258b['addEventListener']('click', _0x218793 => {
            _0x218793['stopPropagation']();
            _0x43606();
        });
    const _0x5767ec = document['getElementById']('mob-top-roles');
    if (_0x5767ec) {
        _0x5767ec['addEventListener']('click', _0x3b7e04 => {
            _0x3b7e04['stopPropagation']();
            const _0x40beef = document['getElementById']('role-list-ui');
            const _0x510017 = document['getElementById']('leaderboard-ui');
            if (_0x510017)
                _0x510017['style']['display'] = 'none';
            if (_0x40beef)
                _0x40beef['style']['display'] = _0x40beef['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x4efa6e = document['getElementById']('mob-top-players');
    if (_0x4efa6e) {
        _0x4efa6e['addEventListener']('click', _0x524b95 => {
            _0x524b95['stopPropagation']();
            const _0x15835c = document['getElementById']('leaderboard-ui');
            const _0x5760f3 = document['getElementById']('role-list-ui');
            if (_0x5760f3)
                _0x5760f3['style']['display'] = 'none';
            if (_0x15835c)
                _0x15835c['style']['display'] = _0x15835c['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x5d4764 = document['getElementById']('mob-top-help');
    if (_0x5d4764) {
        _0x5d4764['addEventListener']('click', _0x3def6a => {
            _0x3def6a['stopPropagation']();
            const _0x1a0a3d = document['getElementById']('guide-ui');
            if (_0x1a0a3d)
                _0x1a0a3d['style']['display'] = _0x1a0a3d['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x987a09) {
            _0x987a09 = !![];
            _0x4fb19b();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
