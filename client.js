document['addEventListener']('contextmenu', _0x269136 => _0x269136['preventDefault']());
const _0x4d6981 = {
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
let _0x43ac71 = '';
function _0x390ccd(_0x3dc8cd, _0x509a23) {
    const _0x39adaa = document['getElementById']('role-list-ui');
    const _0x2804bf = document['getElementById']('role-list-items');
    if (!_0x39adaa || !_0x2804bf)
        return;
    if (!_0x509a23 || _0x509a23 === 'off' || !_0x3dc8cd || _0x3dc8cd['length'] === 0x0) {
        _0x39adaa['style']['display'] = 'none';
        return;
    }
    const _0x7a6432 = _0x509a23 + '|' + JSON['stringify'](_0x3dc8cd);
    if (_0x7a6432 === _0x43ac71)
        return;
    _0x43ac71 = _0x7a6432;
    const _0x1b2b14 = document['getElementById']('role-tooltip');
    if (_0x1b2b14) {
        _0x1b2b14['style']['visibility'] = 'hidden';
        _0x1b2b14['style']['opacity'] = '0';
    }
    _0x39adaa['style']['display'] = 'flex';
    _0x2804bf['innerHTML'] = '';
    _0x3dc8cd['forEach'](_0x4d6de1 => {
        const _0x4af659 = document['createElement']('div');
        _0x4af659['className'] = 'role-list-entry';
        const _0x15a0d0 = _0x4d6de1['name']['includes']('Mafia') || _0x4d6de1['name'] === 'Skinwalker';
        _0x4af659['classList']['add'](_0x15a0d0 ? 'mafia' : 'town');
        if (_0x509a23 === 'precise' && _0x4d6de1['isDead']) {
            _0x4af659['classList']['remove']('town', 'mafia');
            _0x4af659['classList']['add']('dead');
            _0x4af659['innerHTML'] = '<span>' + _0x4d6de1['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x212199 = _0x4d6de1['count'] !== undefined && _0x4d6de1['count'] !== null ? _0x4d6de1['count'] + 'x\x20' : '';
            _0x4af659['innerHTML'] = '<span>' + _0x212199 + _0x4d6de1['name'] + '</span>';
        }
        if (_0x509a23 === 'subalignments' && _0x4d6981[_0x4d6de1['name']]) {
            _0x4af659['style']['cursor'] = 'pointer';
            _0x4af659['addEventListener']('mouseenter', () => {
                const _0x481620 = document['getElementById']('role-tooltip');
                if (!_0x481620)
                    return;
                const _0x1edea8 = _0x4d6981[_0x4d6de1['name']]['join'](',\x20');
                _0x481620['innerHTML'] = '';
                const _0x5e469b = document['createElement']('span');
                _0x5e469b['style']['color'] = '#ffcc00';
                _0x5e469b['textContent'] = _0x4d6de1['name'];
                _0x481620['appendChild'](_0x5e469b);
                _0x481620['appendChild'](document['createElement']('br'));
                _0x481620['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x1edea8));
                const _0x3987ea = _0x4af659['getBoundingClientRect']();
                _0x481620['style']['left'] = _0x3987ea['left'] - 0xeb + 'px';
                _0x481620['style']['top'] = _0x3987ea['top'] + 'px';
                _0x481620['style']['display'] = 'block';
                _0x481620['style']['visibility'] = 'visible';
                _0x481620['style']['opacity'] = '1';
            });
            _0x4af659['addEventListener']('mouseleave', () => {
                const _0x212845 = document['getElementById']('role-tooltip');
                if (_0x212845) {
                    _0x212845['style']['display'] = 'none';
                    _0x212845['style']['visibility'] = 'hidden';
                    _0x212845['style']['opacity'] = '0';
                }
            });
        }
        _0x2804bf['appendChild'](_0x4af659);
    });
}
let _0x213e16 = null;
let _0x22bac7 = null;
const _0x353e33 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x4f238b = 'Player???';
let _0x2a30cd = ![];
let _0x551f3c = {};
let _0x410446 = null;
let _0x586d8b = 0x0;
let _0x50a3ed = 0x0;
let _0x4a9bbd = new Set();
let _0x4309c6 = ![];
let _0x2e96ae = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x4ee67a = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x42a051 = ![];
let _0x2bf9bb = null;
let _0x4ba2e1 = 0x0;
let _0x416c37 = 0x0;
let _0x7ce325 = ![];
let _0x9e0fe9 = ![];
let _0x2bd6e1 = 0x0;
let _0xc57577 = null;
let _0x49608f = ![];
const _0x57e48e = ((() => {
    const _0x5b02bb = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x32bc14 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0xa7aef = 0x320;
    const _0x16e6fe = {};
    const _0x5718ad = {};
    let _0x476e44 = null;
    let _0x151008 = _0x32bc14 === 0x0;
    let _0x2ab56c = ![];
    for (const [_0x4554b0, _0x33f506] of Object['entries'](_0x5b02bb)) {
        const _0x299263 = new Audio(_0x33f506);
        _0x299263['loop'] = !![];
        _0x299263['volume'] = 0x0;
        _0x299263['preload'] = 'auto';
        _0x16e6fe[_0x4554b0] = _0x299263;
        _0x5718ad[_0x4554b0] = null;
    }
    const _0x15895a = _0x355035 => Math['min'](0x1, Math['max'](0x0, _0x355035));
    function _0xdaa2b7(_0x3cb939) {
        if (_0x5718ad[_0x3cb939] !== null) {
            cancelAnimationFrame(_0x5718ad[_0x3cb939]);
            _0x5718ad[_0x3cb939] = null;
        }
    }
    function _0x47b0df(_0x46fd4b, _0x2a08c5, _0x5f1f89, _0x3b4a2b, _0x357fc4) {
        _0xdaa2b7(_0x46fd4b);
        const _0x2ec3f7 = _0x16e6fe[_0x46fd4b];
        const _0x5bd647 = performance['now']();
        const _0x382967 = _0x51f3c3 => {
            const _0x41049d = _0x15895a((_0x51f3c3 - _0x5bd647) / _0x3b4a2b);
            const _0xf80de5 = _0x15895a(_0x2a08c5 + (_0x5f1f89 - _0x2a08c5) * _0x41049d);
            _0x2ec3f7['volume'] = _0x151008 ? 0x0 : _0xf80de5;
            if (_0x41049d < 0x1) {
                _0x5718ad[_0x46fd4b] = requestAnimationFrame(_0x382967);
            } else {
                _0x5718ad[_0x46fd4b] = null;
                _0x2ec3f7['volume'] = _0x151008 ? 0x0 : _0x15895a(_0x5f1f89);
                if (_0x357fc4)
                    _0x357fc4();
            }
        };
        _0x5718ad[_0x46fd4b] = requestAnimationFrame(_0x382967);
    }
    function _0x5eb108(_0x42223f) {
        const _0x58a3f6 = _0x42223f['play']();
        if (_0x58a3f6 && _0x58a3f6['catch']) {
            _0x58a3f6['catch'](() => {
                if (!_0x2ab56c) {
                    const _0x491d04 = () => {
                        _0x2ab56c = !![];
                        _0x42223f['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x491d04);
                        document['removeEventListener']('keydown', _0x491d04);
                        document['removeEventListener']('touchstart', _0x491d04);
                    };
                    document['addEventListener']('click', _0x491d04, { 'once': !![] });
                    document['addEventListener']('keydown', _0x491d04, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x491d04, { 'once': !![] });
                }
            });
        }
    }
    function _0x26e6fd(_0xd62ccb) {
        if (!_0x5b02bb[_0xd62ccb])
            return;
        if (_0x476e44 === _0xd62ccb)
            return;
        const _0x56b81e = _0x476e44;
        _0x476e44 = _0xd62ccb;
        const _0x2ab17d = _0x16e6fe[_0xd62ccb];
        _0xdaa2b7(_0xd62ccb);
        _0x2ab17d['currentTime'] = 0x0;
        _0x2ab17d['volume'] = 0x0;
        _0x5eb108(_0x2ab17d);
        _0x47b0df(_0xd62ccb, 0x0, _0x32bc14, _0xa7aef);
        if (_0x56b81e && _0x16e6fe[_0x56b81e]) {
            const _0x2ac3ca = _0x56b81e;
            const _0x27c0ae = _0x16e6fe[_0x2ac3ca];
            const _0x2d1d41 = _0x15895a(_0x27c0ae['volume']);
            _0x47b0df(_0x2ac3ca, _0x2d1d41, 0x0, _0xa7aef, () => {
                _0x27c0ae['pause']();
                _0x27c0ae['currentTime'] = 0x0;
            });
        }
    }
    function _0x30c9f7(_0x4f4988) {
        _0x32bc14 = _0x15895a(_0x4f4988);
        localStorage['setItem']('musicVolume', String(_0x32bc14));
        if (!_0x151008 && _0x476e44 && _0x5718ad[_0x476e44] === null) {
            _0x16e6fe[_0x476e44]['volume'] = _0x32bc14;
        }
    }
    function _0x2e1cfd() {
        return _0x32bc14;
    }
    function _0x367720(_0x190554) {
        _0x151008 = _0x190554;
        for (const _0x55b4d7 of Object['keys'](_0x16e6fe)) {
            if (_0x5718ad[_0x55b4d7] === null) {
                _0x16e6fe[_0x55b4d7]['volume'] = _0x190554 || _0x55b4d7 !== _0x476e44 ? 0x0 : _0x32bc14;
            }
        }
    }
    function _0x350626() {
        return _0x151008;
    }
    function _0x1be8ed(_0x2471fd) {
        if (_0x2471fd === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x2471fd === 'DAY_VOTE')
            return 'voting';
        if (_0x2471fd === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x121389(_0x3257fc) {
        _0x26e6fd(_0x1be8ed(_0x3257fc));
    }
    function _0x260728(_0x4e3822) {
        _0x26e6fd(_0x4e3822);
    }
    return {
        'play': _0x26e6fd,
        'onStateChange': _0x121389,
        'onSoundEvent': _0x260728,
        'setVolume': _0x30c9f7,
        'getVolume': _0x2e1cfd,
        'setMuted': _0x367720,
        'isMuted': _0x350626
    };
})());
const _0x47a966 = ((() => {
    const _0xd4d614 = 0x258;
    const _0x570442 = 0xb4;
    const _0x524027 = 0x708;
    const _0x44c75f = 0x140;
    const _0x511d7c = 0.18;
    const _0x1dbcc1 = 0.95;
    const _0xea48aa = new Audio('audio/heartbeat.mp3');
    _0xea48aa['loop'] = ![];
    _0xea48aa['preload'] = 'auto';
    _0xea48aa['volume'] = 0x0;
    let _0x163cbc = 0x0;
    let _0x830bd0 = Infinity;
    function _0xed009(_0x1b5871, _0x7b16aa, _0x20477a) {
        return Math['min'](_0x20477a, Math['max'](_0x7b16aa, _0x1b5871));
    }
    function _0x2b05f7(_0x431caa, _0x5f0424, _0x5f305c) {
        return _0x431caa + (_0x5f0424 - _0x431caa) * _0x5f305c;
    }
    function _0x2a06bd(_0x53b309) {
        if (_0x285259['GAME_STATE'] !== 'NIGHT' || _0x416fe7['isDead'] || _0x410446 === 'Skinwalker') {
            _0x830bd0 = Infinity;
            return;
        }
        const _0x53d56a = _0x416fe7['x'] + 22.5;
        const _0x1cdb08 = _0x416fe7['y'] + 22.5;
        let _0x546b3c = Infinity;
        for (const _0x8ec059 in _0x551f3c) {
            const _0x3ecca3 = _0x551f3c[_0x8ec059];
            if (!_0x3ecca3['isDark'] || _0x3ecca3['isDead'])
                continue;
            const _0x524ef5 = _0x3ecca3['renderX'] + 22.5 - _0x53d56a;
            const _0x5a10fd = _0x3ecca3['renderY'] + 22.5 - _0x1cdb08;
            const _0x567772 = Math['sqrt'](_0x524ef5 * _0x524ef5 + _0x5a10fd * _0x5a10fd);
            if (_0x567772 < _0x546b3c)
                _0x546b3c = _0x567772;
        }
        _0x830bd0 = _0x546b3c;
        if (_0x546b3c > _0xd4d614)
            return;
        const _0x1d87d5 = 0x1 - _0xed009((_0x546b3c - _0x570442) / (_0xd4d614 - _0x570442), 0x0, 0x1);
        const _0x210946 = _0x2b05f7(_0x524027, _0x44c75f, _0x1d87d5);
        const _0x11b074 = _0x2b05f7(_0x511d7c, _0x1dbcc1, _0x1d87d5);
        if (_0x53b309 >= _0x163cbc) {
            _0xea48aa['currentTime'] = 0x0;
            _0xea48aa['volume'] = _0x57e48e['isMuted']() ? 0x0 : _0xed009(_0x11b074 * _0x57e48e['getVolume']() / 0.7, 0x0, 0x1);
            _0xea48aa['play']()['catch'](() => {
            });
            _0x163cbc = _0x53b309 + _0x210946;
        }
    }
    return { 'tick': _0x2a06bd };
})());
function _0x4244cb() {
    const _0x554a93 = document['getElementById']('mob-ability-btn');
    if (!_0x554a93)
        return;
    const _0x138e5b = _0x285259['GAME_STATE'] === 'NIGHT' && !_0x416fe7['isDead'];
    const _0x913b31 = _0x410446 === 'Mayor' && !_0x4a9bbd['has'](_0x22bac7) && !_0x416fe7['isDead'];
    if (_0x138e5b || _0x913b31) {
        _0x554a93['style']['display'] = 'flex';
    } else {
        _0x554a93['style']['display'] = 'none';
    }
}
function _0x4d224d() {
    const _0x1938a1 = document['getElementById']('mobile-joystick-zone');
    const _0x465247 = document['getElementById']('mobile-top-bar');
    const _0x2c774c = document['getElementById']('mobile-action-bar');
    if (!_0x1938a1 || !_0x465247 || !_0x2c774c)
        return;
    if (!_0x4047d0 && _0x4ee67a) {
        _0x1938a1['style']['display'] = 'flex';
        _0x465247['style']['display'] = 'flex';
        _0x2c774c['style']['display'] = 'flex';
        _0x4244cb();
    } else {
        _0x1938a1['style']['display'] = 'none';
        _0x465247['style']['display'] = 'none';
        _0x2c774c['style']['display'] = 'none';
    }
}
const _0x4e151c = document['getElementById']('gameCanvas');
const _0xddcf3a = _0x4e151c['getContext']('2d', { 'alpha': ![] });
const _0x59b42a = 0x500;
const _0x286351 = 0x2d0;
const _0x285259 = {
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
        'width': _0x59b42a,
        'height': _0x286351
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
const _0x416fe7 = {
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
const _0x5b8f9e = new Image();
const _0x1376c7 = new Image();
const _0x50a2a2 = new Image();
const _0x131ed9 = new Image();
_0x131ed9['src'] = 'assets/mayor\x20cosmetic.png';
const _0x43cece = [
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
const _0x27b5a2 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x3367ea = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x3367ea === 'body1.png' || _0x3367ea === 'body1')
    _0x3367ea = 'body01.png';
if (!_0x3367ea['endsWith']('.png'))
    _0x3367ea += '.png';
let _0x1ee484 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x1ee484['endsWith']('.png'))
    _0x1ee484 += '.png';
let _0x4047d0 = !![];
let _0x4e7b7b = null;
let _0x4fcbd5 = null;
let _0x32803b = 0x3c;
let _0x5adb24 = 0x2d;
const _0x537dc4 = {};
const _0x5e3de9 = new Image();
_0x5e3de9['src'] = 'assets/yanito932.png';
_0x537dc4['assets/yanito932.png'] = _0x5e3de9;
function _0x1c23aa(_0x480b24) {
    if (!_0x537dc4[_0x480b24] || !_0x537dc4[_0x480b24]['complete'] && _0x537dc4[_0x480b24]['naturalWidth'] === 0x0 && _0x537dc4[_0x480b24]['naturalHeight'] === 0x0) {
        const _0x164e69 = new Image();
        _0x164e69['src'] = _0x480b24;
        _0x537dc4[_0x480b24] = _0x164e69;
    }
    return _0x537dc4[_0x480b24];
}
function _0x360334(_0x882d17, _0x4b0eab, _0x5f3315, _0xfa0de4, _0x414087) {
    try {
        const _0x3ae31f = 'assets/' + (_0x4b0eab || 'body01.png');
        const _0x2588ff = _0x1c23aa(_0x3ae31f);
        if (_0x2588ff['complete'] && _0x2588ff['naturalWidth'] > 0x0) {
            _0x882d17['drawImage'](_0x2588ff, -_0xfa0de4 / 0x2, -_0x414087 / 0x2, _0xfa0de4, _0x414087);
        }
        if (_0x5f3315 === null || _0x5f3315 === undefined)
            return;
        const _0x54fdd1 = 'assets/' + _0x5f3315;
        const _0x2f9786 = _0x1c23aa(_0x54fdd1);
        if (_0x2f9786['complete'] && _0x2f9786['naturalWidth'] > 0x0) {
            _0x882d17['drawImage'](_0x2f9786, -_0xfa0de4 / 0x2, -_0x414087 / 0x2, _0xfa0de4, _0x414087);
        }
    } catch (_0x1fe1ab) {
    }
}
function _0x1ea9ce() {
    const _0x405585 = document['getElementById']('body-skin-grid');
    const _0x2e974d = document['getElementById']('eyes-skin-grid');
    if (!_0x405585 || !_0x2e974d)
        return;
    _0x405585['innerHTML'] = '';
    _0x43cece['forEach'](_0xa85cbb => {
        const _0x5b62f9 = document['createElement']('button');
        _0x5b62f9['className'] = 'skin-btn' + (_0xa85cbb === _0x3367ea ? '\x20selected' : '');
        const _0x4a00cd = document['createElement']('img');
        _0x4a00cd['src'] = 'assets/' + _0xa85cbb;
        _0x5b62f9['appendChild'](_0x4a00cd);
        _0x5b62f9['onclick'] = () => {
            _0x3367ea = _0xa85cbb;
            localStorage['setItem']('selectedBody', _0xa85cbb);
            _0x405585['querySelectorAll']('.skin-btn')['forEach'](_0x2edbdf => _0x2edbdf['classList']['remove']('selected'));
            _0x5b62f9['classList']['add']('selected');
        };
        _0x405585['appendChild'](_0x5b62f9);
    });
    _0x2e974d['innerHTML'] = '';
    _0x27b5a2['forEach'](_0x119638 => {
        const _0x28381c = document['createElement']('button');
        _0x28381c['className'] = 'skin-btn' + (_0x119638 === _0x1ee484 ? '\x20selected' : '');
        const _0x35fb52 = document['createElement']('img');
        _0x35fb52['src'] = 'assets/' + _0x119638;
        _0x28381c['appendChild'](_0x35fb52);
        _0x28381c['onclick'] = () => {
            _0x1ee484 = _0x119638;
            localStorage['setItem']('selectedEyes', _0x119638);
            _0x2e974d['querySelectorAll']('.skin-btn')['forEach'](_0x4f08a3 => _0x4f08a3['classList']['remove']('selected'));
            _0x28381c['classList']['add']('selected');
        };
        _0x2e974d['appendChild'](_0x28381c);
    });
}
function _0x75a2ac(_0x1c526d) {
    if (!_0x285259['MAP']['columns'] || !_0x285259['CAMERA']['width'])
        return;
    const _0x1cfcfd = Math['max'](0x0, _0x285259['MAP']['columns'] * _0x285259['MAP']['tileSize'] - _0x285259['CAMERA']['width']);
    const _0x3d2cc3 = Math['max'](0x0, _0x285259['MAP']['rows'] * _0x285259['MAP']['tileSize'] - _0x285259['CAMERA']['height']);
    if (_0x4e7b7b === null) {
        _0x4e7b7b = _0x1cfcfd / 0x2;
        _0x4fcbd5 = _0x3d2cc3 / 0x2;
    }
    _0x4e7b7b += _0x32803b * _0x1c526d;
    _0x4fcbd5 += _0x5adb24 * _0x1c526d;
    if (_0x4e7b7b <= 0x0) {
        _0x4e7b7b = 0x0;
        _0x32803b = Math['abs'](_0x32803b);
    } else if (_0x4e7b7b >= _0x1cfcfd) {
        _0x4e7b7b = _0x1cfcfd;
        _0x32803b = -Math['abs'](_0x32803b);
    }
    if (_0x4fcbd5 <= 0x0) {
        _0x4fcbd5 = 0x0;
        _0x5adb24 = Math['abs'](_0x5adb24);
    } else if (_0x4fcbd5 >= _0x3d2cc3) {
        _0x4fcbd5 = _0x3d2cc3;
        _0x5adb24 = -Math['abs'](_0x5adb24);
    }
    _0x285259['CAMERA']['x'] = _0x4e7b7b;
    _0x285259['CAMERA']['y'] = _0x4fcbd5;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x1557b8 = document['getElementById']('play-btn');
    const _0x751027 = document['getElementById']('username-input');
    const _0x12c235 = localStorage['getItem']('playerName');
    if (_0x12c235 && _0x751027) {
        _0x751027['value'] = _0x12c235;
    }
    const _0x5698f0 = () => {
        _0x57e48e['play']('wait');
        document['removeEventListener']('click', _0x5698f0);
        document['removeEventListener']('keydown', _0x5698f0);
        document['removeEventListener']('touchstart', _0x5698f0);
    };
    document['addEventListener']('click', _0x5698f0, { 'once': !![] });
    document['addEventListener']('keydown', _0x5698f0, { 'once': !![] });
    document['addEventListener']('touchstart', _0x5698f0, { 'once': !![] });
    if (_0x1557b8) {
        _0x1557b8['addEventListener']('click', () => {
            const _0x52517c = window['_FB'] && window['_FB']['_currentUser'];
            const _0x1973cf = window['_FB'] && window['_FB']['_userData'];
            let _0x43f62e = !![];
            if (_0x52517c && _0x1973cf && _0x1973cf['username']) {
                _0x4f238b = _0x1973cf['username'];
                _0x43f62e = ![];
            } else {
                const _0x383108 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x4f238b = 'user' + _0x383108;
                _0x43f62e = !![];
            }
            const _0x5b7560 = _0x43f62e ? 'body01.png' : _0x3367ea;
            const _0xee5748 = _0x43f62e ? 'eyes4.png' : _0x1ee484;
            const _0x533aa1 = !_0x43f62e && _0x1973cf && _0x1973cf['photoURL'] ? _0x1973cf['photoURL'] : '';
            const _0x5b3112 = !_0x43f62e && _0x52517c ? _0x52517c['uid'] : '';
            localStorage['setItem']('playerName', _0x4f238b);
            _0x4047d0 = ![];
            _0x285259['CAMERA']['x'] = null;
            _0x285259['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x1a8fc2 = document['getElementById']('chat-log-wrap');
            if (_0x1a8fc2)
                _0x1a8fc2['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x28b505 = document['getElementById']('controls-hint');
            if (_0x28b505 && !_0x4ee67a)
                _0x28b505['style']['display'] = 'block';
            _0x4d224d();
            if (_0x4ee67a) {
                const _0x40e3e8 = document['getElementById']('leaderboard-list');
                const _0x50e20f = document['getElementById']('leaderboard-toggle');
                if (_0x40e3e8) {
                    _0x40e3e8['style']['display'] = 'none';
                    if (_0x50e20f)
                        _0x50e20f['style']['transform'] = 'rotate(180deg)';
                }
                const _0x19079c = document['getElementById']('role-list-items');
                const _0x3e3f86 = document['getElementById']('role-list-toggle');
                if (_0x19079c) {
                    _0x19079c['style']['display'] = 'none';
                    if (_0x3e3f86)
                        _0x3e3f86['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x4d8f90 = JSON['stringify']({
                'type': 'join',
                'name': _0x4f238b,
                'token': _0x353e33,
                'body': _0x5b7560,
                'eyes': _0xee5748,
                'isGuest': _0x43f62e,
                'uid': _0x5b3112,
                'photoURL': _0x533aa1
            });
            if (_0x213e16 && _0x213e16['readyState'] === WebSocket['OPEN']) {
                _0x213e16['send'](_0x4d8f90);
            } else if (!_0x213e16 || _0x213e16['readyState'] === WebSocket['CLOSED'] || _0x213e16['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x4d8f90;
                _0x5d62d2();
            }
        });
    }
    _0x1ea9ce();
    _0x5d62d2();
    _0x1ef8c7();
    _0x87cf0b();
    _0x411638();
});
function _0x87cf0b() {
    const _0x580034 = document['getElementById']('settings-btn');
    const _0x2e5b98 = document['getElementById']('settings-panel');
    const _0x41aacb = document['getElementById']('close-settings-btn');
    const _0x3b3e2d = document['getElementById']('setting-mouse-relative');
    if (_0x3b3e2d) {
        _0x3b3e2d['checked'] = _0x2e96ae;
        _0x3b3e2d['addEventListener']('change', () => {
            _0x2e96ae = _0x3b3e2d['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x2e96ae ? 'true' : 'false');
        });
    }
    const _0x56a7a4 = document['getElementById']('setting-music-volume');
    const _0x371c17 = document['getElementById']('setting-music-volume-display');
    function _0x5de30e(_0x2a5c5f) {
        const _0x449390 = (_0x2a5c5f['value'] - _0x2a5c5f['min']) / (_0x2a5c5f['max'] - _0x2a5c5f['min']) * 0x64;
        _0x2a5c5f['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x449390 + '%,\x20#444\x20' + _0x449390 + '%)';
    }
    if (_0x56a7a4) {
        const _0x3d32bf = _0x57e48e['getVolume']();
        const _0x48054d = Math['round'](_0x3d32bf * 0x64);
        _0x56a7a4['value'] = _0x48054d;
        if (_0x371c17)
            _0x371c17['textContent'] = _0x48054d + '%';
        _0x5de30e(_0x56a7a4);
        _0x56a7a4['addEventListener']('input', () => {
            const _0x4ee12f = parseInt(_0x56a7a4['value'], 0xa);
            if (_0x371c17)
                _0x371c17['textContent'] = _0x4ee12f + '%';
            _0x5de30e(_0x56a7a4);
            _0x57e48e['setVolume'](_0x4ee12f / 0x64);
            _0x57e48e['setMuted'](_0x4ee12f === 0x0);
        });
    }
    if (_0x580034 && _0x2e5b98) {
        _0x580034['addEventListener']('click', _0x4825eb => {
            _0x4825eb['stopPropagation']();
            _0x2e5b98['style']['display'] = _0x2e5b98['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x41aacb && _0x2e5b98) {
        _0x41aacb['addEventListener']('click', () => {
            _0x2e5b98['style']['display'] = 'none';
        });
    }
    const _0x4d0a98 = document['getElementById']('mayor-confirm-yes');
    const _0xc6430 = document['getElementById']('mayor-confirm-no');
    const _0x46a738 = document['getElementById']('mayor-confirm-dialog');
    if (_0x4d0a98 && _0x46a738) {
        _0x4d0a98['addEventListener']('click', () => {
            if (_0x213e16 && _0x213e16['readyState'] === WebSocket['OPEN']) {
                _0x213e16['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x46a738['style']['display'] = 'none';
        });
    }
    if (_0xc6430 && _0x46a738) {
        _0xc6430['addEventListener']('click', () => {
            _0x46a738['style']['display'] = 'none';
        });
    }
    const _0x24e83e = document['getElementById']('close-ability-btn');
    if (_0x24e83e) {
        _0x24e83e['addEventListener']('click', () => {
            const _0x405f08 = document['getElementById']('ability-ui');
            if (_0x405f08)
                _0x405f08['style']['display'] = 'none';
        });
    }
}
let _0x3da12b = '';
function _0x554a5e(_0x263b16) {
    const _0x23f47 = document['getElementById']('vote-tally-panel');
    const _0x4ca2a9 = document['getElementById']('vote-tally-list');
    if (!_0x23f47 || !_0x4ca2a9)
        return;
    if (_0x263b16['state'] !== 'DAY_VOTE') {
        _0x23f47['style']['display'] = 'none';
        _0x3da12b = '';
        return;
    }
    _0x23f47['style']['display'] = 'block';
    const _0x1d4396 = {};
    for (const _0x11c96d in _0x551f3c) {
        if (!_0x551f3c[_0x11c96d]['isDead'])
            _0x1d4396[_0x11c96d] = 0x0;
    }
    if (_0x22bac7 && !_0x416fe7['isDead'])
        _0x1d4396[_0x22bac7] = 0x0;
    const _0x32f26a = _0x263b16['votes'] || {};
    for (const _0x14e045 in _0x32f26a) {
        const _0x16a864 = _0x32f26a[_0x14e045];
        const _0x1f3352 = _0x263b16['mayorRevealed'] && _0x263b16['mayorRevealed'][_0x14e045] ? 0x2 : 0x1;
        _0x1d4396[_0x16a864] = (_0x1d4396[_0x16a864] || 0x0) + _0x1f3352;
    }
    let _0x3aeaa1 = 0x0;
    const _0x1f9acc = _0x263b16['skips'] || {};
    for (const _0x305496 in _0x1f9acc) {
        _0x3aeaa1 += Number(_0x1f9acc[_0x305496]) || 0x1;
    }
    const _0x37d225 = JSON['stringify'](_0x1d4396) + '_' + _0x3aeaa1 + '_' + _0x416fe7['isDead'];
    if (_0x37d225 === _0x3da12b)
        return;
    _0x3da12b = _0x37d225;
    _0x4ca2a9['innerHTML'] = '';
    for (const _0x35f1e2 in _0x1d4396) {
        const _0x8cc854 = parseInt(_0x35f1e2);
        const _0x12e008 = _0x8cc854 === _0x22bac7 ? _0x4f238b : _0x551f3c[_0x35f1e2] ? _0x551f3c[_0x35f1e2]['name'] : 'Player\x20' + _0x35f1e2;
        const _0x161f52 = document['createElement']('div');
        _0x161f52['className'] = 'vote-tally-entry';
        const _0x2fe4d8 = document['createElement']('span');
        _0x2fe4d8['textContent'] = _0x12e008;
        const _0xb45089 = document['createElement']('span');
        _0xb45089['className'] = 'vote-count';
        _0xb45089['textContent'] = _0x1d4396[_0x35f1e2] + '\x20vote' + (_0x1d4396[_0x35f1e2] === 0x1 ? '' : 's');
        _0x161f52['appendChild'](_0x2fe4d8);
        _0x161f52['appendChild'](_0xb45089);
        if (_0x8cc854 !== _0x22bac7 && !_0x416fe7['isDead']) {
            _0x161f52['style']['cursor'] = 'pointer';
            _0x161f52['title'] = 'Vote\x20for\x20' + _0x12e008;
            _0x161f52['addEventListener']('click', _0x59f14f => {
                _0x59f14f['stopPropagation']();
                if (_0x213e16 && _0x213e16['readyState'] === WebSocket['OPEN']) {
                    _0x213e16['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x12e008
                    }));
                }
            });
        }
        _0x4ca2a9['appendChild'](_0x161f52);
    }
    const _0x3bc365 = document['createElement']('div');
    _0x3bc365['className'] = 'vote-tally-skip';
    _0x3bc365['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x3aeaa1 + '</span>';
    if (!_0x416fe7['isDead']) {
        _0x3bc365['style']['cursor'] = 'pointer';
        _0x3bc365['title'] = 'Click\x20to\x20skip\x20vote';
        _0x3bc365['addEventListener']('click', _0x1246a2 => {
            _0x1246a2['stopPropagation']();
            if (_0x213e16 && _0x213e16['readyState'] === WebSocket['OPEN']) {
                _0x213e16['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x4ca2a9['appendChild'](_0x3bc365);
}
let _0x447f12 = null;
let _0x26f4dc = null;
let _0x20d6e4 = null;
function _0xb56bbe() {
    if (_0x213e16 && _0x213e16['readyState'] === WebSocket['OPEN']) {
        _0x213e16['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x447f12,
            'abilityTarget': _0x26f4dc,
            'killTarget': _0x20d6e4
        }));
    }
}
function _0x28cffa() {
    const _0x1d3821 = document['getElementById']('ability-ui-body');
    if (!_0x1d3821)
        return;
    _0x1d3821['innerHTML'] = '';
    if (_0x410446 === 'Celebrity' || _0x410446 === 'Mayor') {
        const _0x29eb67 = document['createElement']('div');
        _0x29eb67['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x29eb67['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x1d3821['appendChild'](_0x29eb67);
        return;
    }
    if (_0x410446 === 'Skinwalker') {
        const _0x1d2c19 = document['createElement']('div');
        _0x1d2c19['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x1d2c19['innerText'] = 'Transform\x20into:';
        _0x1d3821['appendChild'](_0x1d2c19);
        const _0x31ec35 = document['createElement']('div');
        _0x31ec35['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x473a96 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x339058 = _0x38f62e => {
            if (!_0x285259['ROLE_LIST_RAW'] || _0x285259['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x285259['ROLE_LIST_RAW']['some'](_0x30138c => {
                if (_0x30138c['name'] === _0x38f62e)
                    return !_0x30138c['isDead'];
                if (_0x4d6981[_0x30138c['name']] && _0x4d6981[_0x30138c['name']]['includes'](_0x38f62e))
                    return !![];
                return ![];
            });
        };
        const _0x47e19f = [
            'None',
            ..._0x473a96['filter'](_0x339058)
        ];
        _0x47e19f['forEach'](_0x3bf7ca => {
            const _0x5a9fde = document['createElement']('button');
            _0x5a9fde['className'] = 'layer-btn';
            _0x5a9fde['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x5a9fde['innerText'] = _0x3bf7ca;
            const _0x1c8172 = _0x3bf7ca === 'None' && !_0x447f12 || _0x447f12 === _0x3bf7ca;
            if (_0x1c8172)
                _0x5a9fde['classList']['add']('active');
            _0x5a9fde['onclick'] = () => {
                _0x447f12 = _0x3bf7ca === 'None' ? null : _0x3bf7ca;
                _0xb56bbe();
                _0x28cffa();
            };
            _0x31ec35['appendChild'](_0x5a9fde);
        });
        _0x1d3821['appendChild'](_0x31ec35);
        if (_0x339058('Vigilante')) {
            const _0x2ad2da = document['createElement']('div');
            _0x2ad2da['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x2ad2da['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x1d3821['appendChild'](_0x2ad2da);
        }
        if (_0x447f12 === 'Vigilante') {
            const _0x3192b1 = document['createElement']('div');
            _0x3192b1['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x3192b1['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x1d3821['appendChild'](_0x3192b1);
        } else if (_0x447f12 && _0x447f12 !== 'Celebrity') {
            const _0x4c19cb = document['createElement']('div');
            _0x4c19cb['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x4c19cb['innerText'] = 'Use\x20' + _0x447f12 + '\x20ability\x20on:';
            _0x1d3821['appendChild'](_0x4c19cb);
            const _0x3498bc = document['createElement']('div');
            _0x3498bc['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x44c62 = document['createElement']('button');
            _0x44c62['className'] = 'layer-btn';
            _0x44c62['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x44c62['innerText'] = 'No\x20one';
            if (!_0x26f4dc)
                _0x44c62['classList']['add']('active');
            _0x44c62['onclick'] = () => {
                _0x26f4dc = null;
                _0xb56bbe();
                _0x28cffa();
            };
            _0x3498bc['appendChild'](_0x44c62);
            for (const _0x95d2f8 in _0x551f3c) {
                const _0x569a1 = _0x551f3c[_0x95d2f8];
                if (_0x569a1['isDead'])
                    continue;
                const _0x38a332 = document['createElement']('button');
                _0x38a332['className'] = 'layer-btn';
                _0x38a332['innerText'] = _0x569a1['name'];
                if (_0x26f4dc === parseInt(_0x95d2f8))
                    _0x38a332['classList']['add']('active');
                _0x38a332['onclick'] = () => {
                    _0x26f4dc = parseInt(_0x95d2f8);
                    _0xb56bbe();
                    _0x28cffa();
                };
                _0x3498bc['appendChild'](_0x38a332);
            }
            _0x1d3821['appendChild'](_0x3498bc);
        }
        const _0x593168 = document['createElement']('div');
        _0x593168['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x593168['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x1d3821['appendChild'](_0x593168);
        const _0x2ccf4a = document['createElement']('div');
        _0x2ccf4a['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x4ca37a = document['createElement']('button');
        _0x4ca37a['className'] = 'layer-btn';
        _0x4ca37a['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x4ca37a['innerText'] = 'No\x20one';
        if (!_0x20d6e4 && !_0x285259['CURRENT_TARGET'])
            _0x4ca37a['classList']['add']('active');
        _0x4ca37a['onclick'] = () => {
            _0x20d6e4 = null;
            _0x285259['CURRENT_TARGET'] = null;
            _0xb56bbe();
            _0x28cffa();
        };
        _0x2ccf4a['appendChild'](_0x4ca37a);
        for (const _0x5c401e in _0x551f3c) {
            const _0x1d5d94 = _0x551f3c[_0x5c401e];
            if (_0x1d5d94['isDead'])
                continue;
            const _0xcc376d = document['createElement']('button');
            _0xcc376d['className'] = 'layer-btn';
            _0xcc376d['innerText'] = _0x1d5d94['name'];
            if (_0x20d6e4 === parseInt(_0x5c401e) || _0x285259['CURRENT_TARGET'] === parseInt(_0x5c401e))
                _0xcc376d['classList']['add']('active');
            _0xcc376d['onclick'] = () => {
                _0x20d6e4 = parseInt(_0x5c401e);
                _0x285259['CURRENT_TARGET'] = parseInt(_0x5c401e);
                _0xb56bbe();
                _0x28cffa();
            };
            _0x2ccf4a['appendChild'](_0xcc376d);
        }
        _0x1d3821['appendChild'](_0x2ccf4a);
        return;
    }
    let _0x315f5f = '';
    let _0x3406bf = ![];
    if (_0x410446 === 'Doctor') {
        _0x315f5f = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x3406bf = !![];
    } else if (_0x410446 === 'Investigator') {
        _0x315f5f = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x410446 === 'Tracker') {
        _0x315f5f = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x410446 === 'Archer') {
        _0x315f5f = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x410446 === 'Escort') {
        _0x315f5f = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x410446 === 'Vigilante') {
        _0x315f5f = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x3ebef8 = document['createElement']('div');
    _0x3ebef8['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x3ebef8['innerText'] = _0x315f5f;
    _0x1d3821['appendChild'](_0x3ebef8);
    const _0x4d44ba = document['createElement']('div');
    _0x4d44ba['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x4a53d7 = document['createElement']('button');
    _0x4a53d7['className'] = 'layer-btn';
    _0x4a53d7['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x4a53d7['innerText'] = 'No\x20one';
    if (_0x285259['CURRENT_TARGET'] === null)
        _0x4a53d7['classList']['add']('active');
    _0x4a53d7['onclick'] = () => {
        _0x285259['CURRENT_TARGET'] = null;
        if (_0x213e16 && _0x213e16['readyState'] === WebSocket['OPEN']) {
            _0x213e16['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x28cffa();
    };
    _0x4d44ba['appendChild'](_0x4a53d7);
    for (const _0x13119e in _0x551f3c) {
        const _0x466738 = _0x551f3c[_0x13119e];
        if (_0x466738['isDead'])
            continue;
        const _0xc14c70 = document['createElement']('button');
        _0xc14c70['className'] = 'layer-btn';
        _0xc14c70['innerText'] = _0x466738['name'];
        if (_0x285259['CURRENT_TARGET'] === parseInt(_0x13119e))
            _0xc14c70['classList']['add']('active');
        _0xc14c70['onclick'] = () => {
            _0x285259['CURRENT_TARGET'] = parseInt(_0x13119e);
            if (_0x213e16 && _0x213e16['readyState'] === WebSocket['OPEN']) {
                _0x213e16['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x13119e)
                }));
            }
            _0x28cffa();
        };
        _0x4d44ba['appendChild'](_0xc14c70);
    }
    if (_0x3406bf && !_0x416fe7['isDead']) {
        const _0x2650da = document['createElement']('button');
        _0x2650da['className'] = 'layer-btn';
        _0x2650da['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x2650da['innerText'] = _0x4f238b + '\x20(Self)';
        if (_0x285259['CURRENT_TARGET'] === _0x22bac7)
            _0x2650da['classList']['add']('active');
        _0x2650da['onclick'] = () => {
            _0x285259['CURRENT_TARGET'] = _0x22bac7;
            if (_0x213e16 && _0x213e16['readyState'] === WebSocket['OPEN']) {
                _0x213e16['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x22bac7
                }));
            }
            _0x28cffa();
        };
        _0x4d44ba['appendChild'](_0x2650da);
    }
    _0x1d3821['appendChild'](_0x4d44ba);
}
function _0x5d62d2() {
    if (_0x213e16 && (_0x213e16['readyState'] === WebSocket['OPEN'] || _0x213e16['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x156fa1 = new URLSearchParams();
    if (_0x353e33)
        _0x156fa1['set']('token', _0x353e33);
    _0x156fa1['set']('ngrok-skip-browser-warning', 'true');
    const _0x20b77d = 'wss://prison-rankings-inspector-terry.trycloudflare.com';
    const _0x4e39a8 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x20b77d;
    const _0x3d7507 = _0x4e39a8 + '/?' + _0x156fa1['toString']();
    _0x213e16 = new WebSocket(_0x3d7507);
    _0x213e16['onopen'] = function () {
        if (!_0x4047d0 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x5407b4 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x49ceb9 = window['_FB'] && window['_FB']['_userData'];
                const _0x330c88 = !(_0x5407b4 && _0x49ceb9 && _0x49ceb9['username']);
                const _0x4f24ce = _0x330c88 ? 'body01.png' : _0x3367ea;
                const _0x1fadf7 = _0x330c88 ? 'eyes4.png' : _0x1ee484;
                const _0x145126 = !_0x330c88 && _0x49ceb9 && _0x49ceb9['photoURL'] ? _0x49ceb9['photoURL'] : '';
                const _0x4e538c = !_0x330c88 && _0x5407b4 ? _0x5407b4['uid'] : '';
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x4f238b,
                    'token': _0x353e33,
                    'body': _0x4f24ce,
                    'eyes': _0x1fadf7,
                    'isGuest': _0x330c88,
                    'uid': _0x4e538c,
                    'photoURL': _0x145126
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x213e16 && _0x213e16['readyState'] === WebSocket['OPEN']) {
            _0x213e16['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x213e16['onclose'] = _0x34456f => {
        if (_0x34456f['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x34456f['code'] === 0xfa2 || _0x34456f['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x3c0daa = document['getElementById']('disconnect-overlay');
        if (!_0x3c0daa) {
            _0x3c0daa = document['createElement']('div');
            _0x3c0daa['id'] = 'disconnect-overlay';
            _0x3c0daa['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x3c0daa['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x3c0daa);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x213e16['onmessage'] = _0x48b6f5 => {
        const _0x235795 = JSON['parse'](_0x48b6f5['data']);
        if (_0x235795['type'] === 'map_data') {
            _0x285259['MAP']['tileSize'] = _0x235795['map']['tileSize'];
            _0x285259['MAP']['columns'] = _0x235795['map']['columns'];
            _0x285259['MAP']['rows'] = _0x235795['map']['rows'];
            _0x285259['MAP']['layers'] = _0x235795['map']['layers'];
            if (_0x235795['map']['doors']) {
                _0x285259['MAP']['doors'] = _0x235795['map']['doors'];
                const _0xb825be = _0x285259['MAP']['layers']['find'](_0x56d4df => _0x56d4df['name'] === 'floor2');
                if (_0xb825be) {
                    for (const _0x2e34be in _0x285259['MAP']['doors']) {
                        _0xb825be['data'][parseInt(_0x2e34be)] = 0x2;
                    }
                }
            }
            if (_0x235795['entities'])
                _0x285259['ENTITIES'] = _0x235795['entities'];
            _0x48b5b0();
            _0x285259['SYSTEM']['isReady'] = !![];
            _0x417abf();
            if (!_0x285259['SYSTEM']['_gameLoopRunning']) {
                _0x285259['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x44741e);
            }
            return;
        }
        if (_0x235795['type'] === 'init') {
            _0x22bac7 = _0x235795['id'];
            _0x4047d0 = ![];
            _0x4d224d();
            if (_0x4ee67a) {
                const _0x3b0411 = document['getElementById']('leaderboard-list');
                const _0x4bd0e0 = document['getElementById']('leaderboard-toggle');
                if (_0x3b0411) {
                    _0x3b0411['style']['display'] = 'none';
                    if (_0x4bd0e0)
                        _0x4bd0e0['style']['transform'] = 'rotate(180deg)';
                }
                const _0x104cbf = document['getElementById']('role-list-items');
                const _0x4ccee5 = document['getElementById']('role-list-toggle');
                if (_0x104cbf) {
                    _0x104cbf['style']['display'] = 'none';
                    if (_0x4ccee5)
                        _0x4ccee5['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x2a30cd = _0x235795['isOwner'] || ![];
            _0x4f238b = _0x235795['name'] || _0x4f238b;
            _0x285259['MAP']['tileSize'] = _0x235795['map']['tileSize'];
            _0x285259['MAP']['columns'] = _0x235795['map']['columns'];
            _0x285259['MAP']['rows'] = _0x235795['map']['rows'];
            _0x285259['MAP']['layers'] = _0x235795['map']['layers'];
            if (_0x235795['map']['doors']) {
                _0x285259['MAP']['doors'] = _0x235795['map']['doors'];
                const _0x510c26 = _0x285259['MAP']['layers']['find'](_0x2733cc => _0x2733cc['name'] === 'floor2');
                if (_0x510c26) {
                    for (const _0x2aaa01 in _0x285259['MAP']['doors']) {
                        _0x510c26['data'][parseInt(_0x2aaa01)] = 0x2;
                    }
                }
            }
            if (_0x235795['entities'])
                _0x285259['ENTITIES'] = _0x235795['entities'];
            _0x48b5b0();
            _0x416fe7['x'] = _0x285259['MAP']['columns'] * _0x285259['MAP']['tileSize'] / 0x2;
            _0x416fe7['y'] = _0x285259['MAP']['rows'] * _0x285259['MAP']['tileSize'] / 0x2;
            _0x285259['CAMERA']['x'] = _0x416fe7['x'] + _0x416fe7['width'] / 0x2 - _0x285259['CAMERA']['width'] / 0x2;
            _0x285259['CAMERA']['y'] = _0x416fe7['y'] + _0x416fe7['height'] / 0x2 - _0x285259['CAMERA']['height'] / 0x2;
            if (_0x2a30cd) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x4fb013();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x285259['SYSTEM']['lastTime'] = performance['now']();
            _0x285259['SYSTEM']['isReady'] = !![];
            _0x393279();
            if (!_0x285259['SYSTEM']['_gameLoopRunning']) {
                _0x285259['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x44741e);
            }
            return;
        } else if (_0x235795['type'] === 'state') {
            const _0x392460 = {};
            for (const _0x4ea8f6 in _0x235795['players']) {
                if (parseInt(_0x4ea8f6) === _0x22bac7)
                    continue;
                const _0xf84ad5 = _0x235795['players'][_0x4ea8f6];
                const _0x3e915a = _0x551f3c[_0x4ea8f6];
                if (_0x3e915a) {
                    const _0x4c76cf = _0xf84ad5['x'] - _0x3e915a['renderX'];
                    const _0x5591a7 = _0xf84ad5['y'] - _0x3e915a['renderY'];
                    const _0x2d4a83 = _0x4c76cf * _0x4c76cf + _0x5591a7 * _0x5591a7 > 0x78 * 0x78;
                    Object['assign'](_0x3e915a, _0xf84ad5);
                    if (_0x2d4a83) {
                        _0x3e915a['renderX'] = _0xf84ad5['x'];
                        _0x3e915a['renderY'] = _0xf84ad5['y'];
                    }
                    _0x392460[_0x4ea8f6] = _0x3e915a;
                } else {
                    _0x392460[_0x4ea8f6] = {
                        ..._0xf84ad5,
                        'renderX': _0xf84ad5['x'],
                        'renderY': _0xf84ad5['y'],
                        'renderAngle': _0xf84ad5['angle'] || 0x0
                    };
                }
            }
            _0x551f3c = _0x392460;
            _0x20c1bc();
            if (_0x235795['players'][_0x22bac7]) {
                const _0x4b17c9 = _0x235795['players'][_0x22bac7];
                _0x416fe7['chats'] = _0x4b17c9['chats'] || [];
                _0x416fe7['isDead'] = _0x4b17c9['isDead'];
                if (_0x4b17c9['name'])
                    _0x4f238b = _0x4b17c9['name'];
                _0x393279();
                const _0x3b49eb = Math['hypot'](_0x4b17c9['x'] - _0x416fe7['x'], _0x4b17c9['y'] - _0x416fe7['y']);
                if (_0x3b49eb > 0xfa) {
                    _0x416fe7['x'] = _0x4b17c9['x'];
                    _0x416fe7['y'] = _0x4b17c9['y'];
                } else if (_0x3b49eb > 0x50) {
                    _0x416fe7['x'] += (_0x4b17c9['x'] - _0x416fe7['x']) * 0.06;
                    _0x416fe7['y'] += (_0x4b17c9['y'] - _0x416fe7['y']) * 0.06;
                }
            }
            if (_0x235795['entities'])
                _0x285259['ENTITIES'] = _0x235795['entities'];
            if (_0x235795['game']) {
                _0x285259['GAME_STATE'] = _0x235795['game']['state'];
                _0x285259['NIGHT_ABILITY_OPEN'] = _0x235795['game']['nightAbilityOpen'];
                if (_0x235795['game']['mayorRevealed']) {
                    for (const _0x18b4bf in _0x235795['game']['mayorRevealed']) {
                        _0x4a9bbd['add'](parseInt(_0x18b4bf));
                    }
                }
                if (_0x285259['LAST_STATE'] !== _0x285259['GAME_STATE']) {
                    if (_0x285259['GAME_STATE'] !== 'NIGHT') {
                        _0x285259['CURRENT_TARGET'] = null;
                        _0x447f12 = null;
                        _0x26f4dc = null;
                        _0x20d6e4 = null;
                        const _0x395283 = document['getElementById']('ability-ui');
                        if (_0x395283)
                            _0x395283['style']['display'] = 'none';
                    }
                    if (_0x285259['GAME_STATE'] === 'NIGHT') {
                        _0x416fe7['chats'] = [];
                        for (const _0x2296eb in _0x551f3c) {
                            _0x551f3c[_0x2296eb]['chats'] = [];
                        }
                    }
                    _0x285259['LAST_STATE'] = _0x285259['GAME_STATE'];
                    _0x4244cb();
                    _0x57e48e['onStateChange'](_0x285259['GAME_STATE'], _0x235795['game']['nightAbilityOpen']);
                }
                const _0x74595b = document['getElementById']('phase-ui');
                if (_0x74595b) {
                    if (_0x235795['game']['state'] === 'LOBBY') {
                        _0x74595b['style']['display'] = 'none';
                    } else {
                        _0x74595b['style']['display'] = 'block';
                    }
                    let _0x5a6a23 = _0x235795['game']['state']['replace']('_', '\x20');
                    if (_0x235795['game']['state'] === 'DAY_DISCUSS') {
                        _0x5a6a23 = 'DAY\x20' + (_0x235795['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x235795['game']['timer'] + 's';
                    } else if (_0x235795['game']['state'] === 'DAY_VOTE') {
                        _0x5a6a23 = 'DAY\x20' + (_0x235795['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x235795['game']['timer'] + 's';
                    } else if (_0x235795['game']['state'] === 'NIGHT') {
                        const _0x417965 = _0x235795['game']['dayCount'] || 0x1;
                        if (_0x235795['game']['nightAbilityOpen']) {
                            _0x5a6a23 = 'NIGHT\x20' + _0x417965 + '\x20ABILITY\x20PHASE';
                            const _0x1f0342 = _0x235795['game']['abilityTimer'] !== undefined ? _0x235795['game']['abilityTimer'] : _0x235795['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x1f0342 + 's';
                        } else {
                            _0x5a6a23 = 'NIGHT\x20' + _0x417965;
                            document['getElementById']('phase-timer')['innerText'] = _0x235795['game']['timer'] + 's';
                        }
                    }
                    if (_0x235795['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x5a6a23;
                    }
                }
                if (_0x235795['game']['state'] === 'NIGHT') {
                    const _0x88e5c7 = document['getElementById']('ability-timer-label');
                    if (_0x88e5c7) {
                        const _0x1d28e1 = _0x235795['game']['abilityTimer'] !== undefined ? _0x235795['game']['abilityTimer'] : _0x235795['game']['timer'];
                        _0x88e5c7['innerText'] = _0x235795['game']['nightAbilityOpen'] ? _0x1d28e1 + 's' : '';
                    }
                    if (_0x235795['game']['nightAbilityOpen'] && !_0x4309c6 && !_0x416fe7['isDead']) {
                        _0x4309c6 = !![];
                        _0x28cffa();
                        const _0x597782 = document['getElementById']('ability-ui');
                        if (_0x597782)
                            _0x597782['style']['display'] = 'block';
                    }
                    if (!_0x235795['game']['nightAbilityOpen']) {
                        const _0x205eb1 = document['getElementById']('ability-ui');
                        if (_0x205eb1 && _0x205eb1['style']['display'] === 'block') {
                            _0x205eb1['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x4309c6 = ![];
                }
                _0x554a5e(_0x235795['game']);
                if (_0x235795['game']['roleListMode'] !== undefined) {
                    _0x285259['ROLE_LIST_RAW'] = _0x235795['game']['roleList'] || [];
                    _0x390ccd(_0x235795['game']['roleList'], _0x235795['game']['roleListMode']);
                }
            }
        } else if (_0x235795['type'] === 'teleport') {
            _0x416fe7['x'] = _0x235795['x'];
            _0x416fe7['y'] = _0x235795['y'];
            _0x416fe7['vx'] = 0x0;
            _0x416fe7['vy'] = 0x0;
            _0x285259['CAMERA']['x'] = null;
            if (_0x235795['teleportId'] !== undefined)
                _0x50a3ed = _0x235795['teleportId'];
        } else if (_0x235795['type'] === 'bulk_teleport') {
            for (const _0x81d619 in _0x235795['positions']) {
                const _0x558e05 = _0x235795['positions'][_0x81d619];
                if (parseInt(_0x81d619) === _0x22bac7) {
                    _0x416fe7['x'] = _0x558e05['x'];
                    _0x416fe7['y'] = _0x558e05['y'];
                    _0x416fe7['vx'] = 0x0;
                    _0x416fe7['vy'] = 0x0;
                    _0x285259['CAMERA']['x'] = null;
                    continue;
                }
                const _0x58641a = _0x551f3c[_0x81d619];
                if (_0x58641a) {
                    _0x58641a['x'] = _0x558e05['x'];
                    _0x58641a['y'] = _0x558e05['y'];
                    _0x58641a['renderX'] = _0x558e05['x'];
                    _0x58641a['renderY'] = _0x558e05['y'];
                    _0x58641a['vx'] = 0x0;
                    _0x58641a['vy'] = 0x0;
                }
            }
        } else if (_0x235795['type'] === 'player_left') {
            delete _0x551f3c[_0x235795['id']];
            _0x4a9bbd['delete'](parseInt(_0x235795['id']));
        } else if (_0x235795['type'] === 'map_update') {
            const _0x5dc30c = _0x285259['MAP']['layers']['find'](_0x130cd5 => _0x130cd5['name'] === _0x235795['layer']);
            if (_0x5dc30c) {
                _0x5dc30c['data'][_0x235795['row'] * _0x285259['MAP']['columns'] + _0x235795['col']] = _0x235795['gid'];
                const _0x438829 = _0x235795['row'] * _0x285259['MAP']['columns'] + _0x235795['col'];
                if (_0x285259['MAP']['doors'] && _0x285259['MAP']['doors'][_0x438829]) {
                    const _0x5552ab = _0x285259['MAP']['layers']['find'](_0x4be9c3 => _0x4be9c3['name'] === 'floor2');
                    if (_0x5552ab)
                        _0x5552ab['data'][_0x438829] = 0x2;
                }
                const _0x37b11c = Math['floor'](_0x235795['col'] * _0x285259['MAP']['tileSize'] / _0x285259['MAP']['chunkSize']);
                const _0x50a106 = Math['floor'](_0x235795['row'] * _0x285259['MAP']['tileSize'] / _0x285259['MAP']['chunkSize']);
                _0x4e1485(_0x37b11c, _0x50a106);
            }
        } else if (_0x235795['type'] === 'role_assign') {
            _0x410446 = _0x235795['role'];
            _0x416fe7['isDead'] = _0x410446 === 'Spectator';
            _0x4a9bbd['clear']();
            _0x285259['CURRENT_TARGET'] = null;
            _0x447f12 = null;
            _0x26f4dc = null;
            _0x20d6e4 = null;
            _0x4309c6 = ![];
            const _0x27e206 = document['getElementById']('ability-ui');
            if (_0x27e206)
                _0x27e206['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x410446;
            _0x4244cb();
            _0x3675b1(_0x410446 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x410446, !![]);
            let _0x26126c = '';
            if (_0x410446 === 'Investigator')
                _0x26126c = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x410446 === 'Tracker')
                _0x26126c = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x410446 === 'Doctor')
                _0x26126c = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x410446 === 'Archer')
                _0x26126c = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x410446 === 'Escort')
                _0x26126c = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x410446 === 'Vigilante')
                _0x26126c = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x410446 === 'Skinwalker')
                _0x26126c = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x410446 === 'Celebrity')
                _0x26126c = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x410446 === 'Mayor')
                _0x26126c = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x3675b1(_0x26126c, !![]);
        } else if (_0x235795['type'] === 'mayor_reveal') {
            _0x4a9bbd['add'](parseInt(_0x235795['playerId']));
            _0x393279();
            _0x4244cb();
        } else if (_0x235795['type'] === 'rolelist_update') {
            _0x285259['ROLE_LIST_RAW'] = _0x235795['list'] || [];
            _0x390ccd(_0x235795['list'], _0x235795['mode']);
        } else if (_0x235795['type'] === 'sound_event') {
            _0x57e48e['onSoundEvent'](_0x235795['track']);
        } else if (_0x235795['type'] === 'game_over') {
            _0x57e48e['onStateChange']('LOBBY', ![]);
            _0x390ccd([], 'off');
            _0x410446 = null;
            _0x416fe7['isDead'] = ![];
            _0x4a9bbd['clear']();
            _0x285259['CURRENT_TARGET'] = null;
            _0x447f12 = null;
            _0x26f4dc = null;
            _0x20d6e4 = null;
            _0x4309c6 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x4244cb();
            _0x3675b1('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x235795['type'] === 'chat_log') {
            _0x3675b1(_0x235795['sender'] + ':\x20' + _0x235795['text']);
        } else if (_0x235795['type'] === 'sys_chat') {
            _0x3675b1(_0x235795['text'], !![]);
        }
    };
}
function _0x3675b1(_0x20d92a, _0x3913fd = ![]) {
    const _0x5ca108 = document['getElementById']('chat-log-messages');
    const _0x20f91a = document['getElementById']('chat-log-ui');
    const _0x58f633 = _0x20f91a['scrollHeight'] - _0x20f91a['scrollTop'] - _0x20f91a['clientHeight'] < 0x1e;
    const _0x5bca86 = document['createElement']('div');
    _0x5bca86['className'] = 'chat-log-line' + (_0x3913fd ? '\x20sys-msg' : '');
    _0x5bca86['innerText'] = _0x20d92a;
    _0x5ca108['appendChild'](_0x5bca86);
    if (_0x58f633) {
        _0x20f91a['scrollTop'] = _0x20f91a['scrollHeight'];
    }
    if (_0x5ca108['childElementCount'] > 0xc8) {
        _0x5ca108['removeChild'](_0x5ca108['firstChild']);
    }
}
function _0x20c1bc() {
    const _0x22d676 = document['getElementById']('chat-profile-panel');
    if (!_0x22d676)
        return;
    _0x22d676['innerHTML'] = '';
    let _0x268b42 = ![];
    const _0x5123c3 = { ..._0x551f3c };
    if (_0x22bac7 && window['_FB'] && window['_FB']['_currentUser'] && window['_FB']['_userData']) {
        _0x5123c3[_0x22bac7] = _0x5123c3[_0x22bac7] || {};
        _0x5123c3[_0x22bac7]['_localPhotoURL'] = window['_FB']['_userData']['photoURL'] || '';
        _0x5123c3[_0x22bac7]['_localUname'] = window['_FB']['_userData']['username'] || _0x4f238b;
        _0x5123c3[_0x22bac7]['_localStats'] = window['_FB']['_userData'];
    }
    for (const _0x5c1677 in _0x5123c3) {
        const _0x315fec = _0x5123c3[_0x5c1677];
        const _0x3036cf = _0x315fec['photoURL'] || (parseInt(_0x5c1677) === _0x22bac7 ? window['_FB'] && window['_FB']['_userData'] && window['_FB']['_userData']['photoURL'] : '');
        if (!_0x3036cf)
            continue;
        _0x268b42 = !![];
        const _0x5daa48 = _0x315fec['name'] || (parseInt(_0x5c1677) === _0x22bac7 ? _0x4f238b : 'Player\x20' + _0x5c1677);
        const _0x44bff4 = _0x315fec['accountStats'] || (parseInt(_0x5c1677) === _0x22bac7 && window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null);
        const _0x221fc1 = document['createElement']('div');
        _0x221fc1['className'] = 'chat-pfp-entry';
        const _0x347f30 = document['createElement']('img');
        _0x347f30['src'] = _0x3036cf;
        _0x347f30['alt'] = _0x5daa48;
        _0x221fc1['appendChild'](_0x347f30);
        const _0x507d81 = document['createElement']('div');
        _0x507d81['className'] = 'chat-pfp-tooltip';
        let _0x53deaa = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x5daa48 + '</div>';
        if (_0x44bff4) {
            _0x53deaa += '<div>🏙\x20Town\x20Wins:\x20' + (_0x44bff4['townWins'] || 0x0) + '</div>';
            _0x53deaa += '<div>🔪\x20Mafia\x20Wins:\x20' + (_0x44bff4['mafiaWins'] || 0x0) + '</div>';
            _0x53deaa += '<div>💀\x20Deaths:\x20' + (_0x44bff4['deaths'] || 0x0) + '</div>';
            _0x53deaa += '<div>📉\x20Town\x20Losses:\x20' + (_0x44bff4['townLosses'] || 0x0) + '</div>';
            _0x53deaa += '<div>📉\x20Mafia\x20Losses:\x20' + (_0x44bff4['mafiaLosses'] || 0x0) + '</div>';
        }
        _0x507d81['innerHTML'] = _0x53deaa;
        _0x221fc1['appendChild'](_0x507d81);
        _0x22d676['appendChild'](_0x221fc1);
    }
    const _0x3475a6 = document['getElementById']('chat-log-wrap');
    if (_0x3475a6) {
        if (_0x268b42) {
            _0x3475a6['classList']['add']('has-profiles');
            _0x22d676['style']['display'] = 'flex';
        } else {
            _0x3475a6['classList']['remove']('has-profiles');
            _0x22d676['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x20c1bc;
let _0x137b5f = -0x1, _0x49e1d4 = -0x1, _0x5d9584 = -0x1, _0x3320d5 = 0x0;
function _0x22a70e() {
    if (!_0x22bac7 || !_0x213e16 || _0x213e16['readyState'] !== WebSocket['OPEN'])
        return;
    const _0xd841b1 = performance['now']();
    const _0x4c2eb8 = _0xd841b1 - _0x3320d5;
    const _0x5dd64d = Math['abs'](_0x416fe7['x'] - _0x137b5f) > 0.05 || Math['abs'](_0x416fe7['y'] - _0x49e1d4) > 0.05 || Math['abs'](_0x416fe7['angle'] - _0x5d9584) > 0.02;
    if (!_0x5dd64d && _0x4c2eb8 < 0xc8)
        return;
    if (_0x4c2eb8 < 0x19)
        return;
    _0x3320d5 = _0xd841b1;
    _0x137b5f = _0x416fe7['x'];
    _0x49e1d4 = _0x416fe7['y'];
    _0x5d9584 = _0x416fe7['angle'];
    if (!_0x22bac7 || !_0x213e16 || _0x213e16['readyState'] !== WebSocket['OPEN'])
        return;
    _0x213e16['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x416fe7['x'],
        'y': _0x416fe7['y'],
        'vx': _0x416fe7['vx'],
        'vy': _0x416fe7['vy'],
        'angle': _0x416fe7['angle'],
        'scale': _0x416fe7['scale'],
        'teleportId': _0x50a3ed,
        'clientTimestamp': Date['now']()
    }));
}
function _0x39f956() {
    if (_0x416fe7['isDead'])
        return;
    const _0x52dfc7 = _0x285259['MAP']['layers']['find'](_0x2cd321 => _0x2cd321['name'] === 'walls');
    if (!_0x52dfc7)
        return;
    const _0x1913cf = _0x416fe7['scale'];
    const _0x402819 = _0x416fe7['width'] * _0x1913cf / 0x2;
    for (let _0x15f34e = 0x0; _0x15f34e < 0x3; _0x15f34e++) {
        let _0x91f56 = _0x416fe7['x'] + _0x416fe7['width'] / 0x2;
        let _0x3dbe7b = _0x416fe7['y'] + _0x416fe7['height'] / 0x2;
        const _0x1f181c = Math['floor']((_0x91f56 - _0x402819) / _0x285259['MAP']['tileSize']);
        const _0x335dda = Math['floor']((_0x91f56 + _0x402819) / _0x285259['MAP']['tileSize']);
        const _0x12fc67 = Math['floor']((_0x3dbe7b - _0x402819) / _0x285259['MAP']['tileSize']);
        const _0x142fbd = Math['floor']((_0x3dbe7b + _0x402819) / _0x285259['MAP']['tileSize']);
        for (let _0x34018f = _0x12fc67; _0x34018f <= _0x142fbd; _0x34018f++) {
            for (let _0x308854 = _0x1f181c; _0x308854 <= _0x335dda; _0x308854++) {
                if (_0x308854 < 0x0 || _0x308854 >= _0x285259['MAP']['columns'] || _0x34018f < 0x0 || _0x34018f >= _0x285259['MAP']['rows'])
                    continue;
                if (_0x52dfc7['data'][_0x34018f * _0x285259['MAP']['columns'] + _0x308854] === 0x0)
                    continue;
                const _0x30e4a1 = _0x308854 * _0x285259['MAP']['tileSize'];
                const _0x116dde = _0x34018f * _0x285259['MAP']['tileSize'];
                const _0x4cb8cc = _0x91f56 < _0x30e4a1 ? _0x30e4a1 : _0x91f56 > _0x30e4a1 + _0x285259['MAP']['tileSize'] ? _0x30e4a1 + _0x285259['MAP']['tileSize'] : _0x91f56;
                const _0x204c22 = _0x3dbe7b < _0x116dde ? _0x116dde : _0x3dbe7b > _0x116dde + _0x285259['MAP']['tileSize'] ? _0x116dde + _0x285259['MAP']['tileSize'] : _0x3dbe7b;
                const _0x3fc519 = _0x91f56 - _0x4cb8cc;
                const _0x4e8556 = _0x3dbe7b - _0x204c22;
                const _0x29dcd1 = Math['sqrt'](_0x3fc519 * _0x3fc519 + _0x4e8556 * _0x4e8556);
                if (_0x29dcd1 < _0x402819) {
                    if (_0x29dcd1 === 0x0) {
                        const _0x3f552e = _0x91f56 - _0x30e4a1;
                        const _0x55ddb0 = _0x30e4a1 + _0x285259['MAP']['tileSize'] - _0x91f56;
                        const _0x274e93 = _0x3dbe7b - _0x116dde;
                        const _0x4e5bbe = _0x116dde + _0x285259['MAP']['tileSize'] - _0x3dbe7b;
                        const _0x552b8b = Math['min'](_0x3f552e, _0x55ddb0, _0x274e93, _0x4e5bbe);
                        if (_0x552b8b === _0x3f552e)
                            _0x91f56 = _0x30e4a1 - _0x402819;
                        else if (_0x552b8b === _0x55ddb0)
                            _0x91f56 = _0x30e4a1 + _0x285259['MAP']['tileSize'] + _0x402819;
                        else if (_0x552b8b === _0x274e93)
                            _0x3dbe7b = _0x116dde - _0x402819;
                        else
                            _0x3dbe7b = _0x116dde + _0x285259['MAP']['tileSize'] + _0x402819;
                    } else {
                        const _0x565109 = _0x402819 - _0x29dcd1;
                        _0x91f56 += _0x3fc519 / _0x29dcd1 * _0x565109;
                        _0x3dbe7b += _0x4e8556 / _0x29dcd1 * _0x565109;
                        const _0x23674b = _0x416fe7['vx'] * (_0x3fc519 / _0x29dcd1) + _0x416fe7['vy'] * (_0x4e8556 / _0x29dcd1);
                        if (_0x23674b < 0x0) {
                            _0x416fe7['vx'] -= _0x23674b * (_0x3fc519 / _0x29dcd1);
                            _0x416fe7['vy'] -= _0x23674b * (_0x4e8556 / _0x29dcd1);
                        }
                    }
                }
            }
        }
        _0x416fe7['x'] = _0x91f56 - _0x416fe7['width'] / 0x2;
        _0x416fe7['y'] = _0x3dbe7b - _0x416fe7['height'] / 0x2;
    }
}
function _0x23c415(_0x554ca7) {
    const _0x1b6bc0 = _0x285259['MAP']['layers']['find'](_0x3de98e => _0x3de98e['name'] === 'walls');
    if (!_0x1b6bc0)
        return;
    const _0x1ccbfd = _0x554ca7['width'] / 0x2;
    for (let _0x4cef26 = 0x0; _0x4cef26 < 0x2; _0x4cef26++) {
        let _0x2603fe = _0x554ca7['x'] + _0x554ca7['width'] / 0x2;
        let _0x3601a3 = _0x554ca7['y'] + _0x554ca7['height'] / 0x2;
        const _0x4e8ec4 = Math['floor']((_0x2603fe - _0x1ccbfd) / _0x285259['MAP']['tileSize']);
        const _0x30cd7 = Math['floor']((_0x2603fe + _0x1ccbfd) / _0x285259['MAP']['tileSize']);
        const _0x4b8684 = Math['floor']((_0x3601a3 - _0x1ccbfd) / _0x285259['MAP']['tileSize']);
        const _0x12bf7d = Math['floor']((_0x3601a3 + _0x1ccbfd) / _0x285259['MAP']['tileSize']);
        for (let _0x24fcbf = _0x4b8684; _0x24fcbf <= _0x12bf7d; _0x24fcbf++) {
            for (let _0x4d7a76 = _0x4e8ec4; _0x4d7a76 <= _0x30cd7; _0x4d7a76++) {
                if (_0x4d7a76 < 0x0 || _0x4d7a76 >= _0x285259['MAP']['columns'] || _0x24fcbf < 0x0 || _0x24fcbf >= _0x285259['MAP']['rows'])
                    continue;
                if (_0x1b6bc0['data'][_0x24fcbf * _0x285259['MAP']['columns'] + _0x4d7a76] === 0x0)
                    continue;
                const _0x4869fc = _0x4d7a76 * _0x285259['MAP']['tileSize'];
                const _0x51dbe2 = _0x24fcbf * _0x285259['MAP']['tileSize'];
                const _0x291dee = _0x2603fe < _0x4869fc ? _0x4869fc : _0x2603fe > _0x4869fc + _0x285259['MAP']['tileSize'] ? _0x4869fc + _0x285259['MAP']['tileSize'] : _0x2603fe;
                const _0x3e1255 = _0x3601a3 < _0x51dbe2 ? _0x51dbe2 : _0x3601a3 > _0x51dbe2 + _0x285259['MAP']['tileSize'] ? _0x51dbe2 + _0x285259['MAP']['tileSize'] : _0x3601a3;
                const _0x49d0fa = _0x2603fe - _0x291dee;
                const _0x5b52f1 = _0x3601a3 - _0x3e1255;
                const _0x4efbe2 = Math['sqrt'](_0x49d0fa * _0x49d0fa + _0x5b52f1 * _0x5b52f1);
                if (_0x4efbe2 < _0x1ccbfd) {
                    if (_0x4efbe2 === 0x0) {
                        const _0xcd9e85 = _0x2603fe - _0x4869fc;
                        const _0x205f63 = _0x4869fc + _0x285259['MAP']['tileSize'] - _0x2603fe;
                        const _0x1231b2 = _0x3601a3 - _0x51dbe2;
                        const _0x21ba6c = _0x51dbe2 + _0x285259['MAP']['tileSize'] - _0x3601a3;
                        const _0x2b64ae = Math['min'](_0xcd9e85, _0x205f63, _0x1231b2, _0x21ba6c);
                        if (_0x2b64ae === _0xcd9e85)
                            _0x2603fe = _0x4869fc - _0x1ccbfd;
                        else if (_0x2b64ae === _0x205f63)
                            _0x2603fe = _0x4869fc + _0x285259['MAP']['tileSize'] + _0x1ccbfd;
                        else if (_0x2b64ae === _0x1231b2)
                            _0x3601a3 = _0x51dbe2 - _0x1ccbfd;
                        else
                            _0x3601a3 = _0x51dbe2 + _0x285259['MAP']['tileSize'] + _0x1ccbfd;
                    } else {
                        const _0xd01b07 = _0x1ccbfd - _0x4efbe2;
                        _0x2603fe += _0x49d0fa / _0x4efbe2 * _0xd01b07;
                        _0x3601a3 += _0x5b52f1 / _0x4efbe2 * _0xd01b07;
                    }
                }
            }
        }
        _0x554ca7['x'] = _0x2603fe - _0x554ca7['width'] / 0x2;
        _0x554ca7['y'] = _0x3601a3 - _0x554ca7['height'] / 0x2;
    }
}
function _0x2aba6c(_0x188497) {
    const _0x1fcfe5 = _0x188497['width'] / 0x2;
    for (let _0x72d6a5 = 0x0; _0x72d6a5 < 0x2; _0x72d6a5++) {
        let _0x3d7efa = _0x188497['x'] + _0x188497['width'] / 0x2;
        let _0x520d10 = _0x188497['y'] + _0x188497['height'] / 0x2;
        for (const _0x26d603 of _0x285259['ENTITIES']) {
            const _0x111106 = _0x3d7efa < _0x26d603['x'] ? _0x26d603['x'] : _0x3d7efa > _0x26d603['x'] + _0x26d603['w'] ? _0x26d603['x'] + _0x26d603['w'] : _0x3d7efa;
            const _0x288270 = _0x520d10 < _0x26d603['y'] ? _0x26d603['y'] : _0x520d10 > _0x26d603['y'] + _0x26d603['h'] ? _0x26d603['y'] + _0x26d603['h'] : _0x520d10;
            const _0x1db633 = _0x3d7efa - _0x111106;
            const _0x1955ea = _0x520d10 - _0x288270;
            const _0xafd1bf = Math['sqrt'](_0x1db633 * _0x1db633 + _0x1955ea * _0x1955ea);
            if (_0xafd1bf < _0x1fcfe5 && _0xafd1bf > 0x0) {
                const _0x23525d = _0x1fcfe5 - _0xafd1bf;
                const _0x15f0f6 = _0x1db633 / _0xafd1bf;
                const _0x3a9c77 = _0x1955ea / _0xafd1bf;
                _0x3d7efa += _0x15f0f6 * _0x23525d;
                _0x520d10 += _0x3a9c77 * _0x23525d;
            } else if (_0xafd1bf === 0x0) {
                const _0x5b2cab = _0x3d7efa - _0x26d603['x'];
                const _0x4f906e = _0x26d603['x'] + _0x26d603['w'] - _0x3d7efa;
                const _0x862841 = _0x520d10 - _0x26d603['y'];
                const _0x586902 = _0x26d603['y'] + _0x26d603['h'] - _0x520d10;
                const _0x5c32d1 = Math['min'](_0x5b2cab, _0x4f906e, _0x862841, _0x586902);
                if (_0x5c32d1 === _0x5b2cab)
                    _0x3d7efa = _0x26d603['x'] - _0x1fcfe5;
                else if (_0x5c32d1 === _0x4f906e)
                    _0x3d7efa = _0x26d603['x'] + _0x26d603['w'] + _0x1fcfe5;
                else if (_0x5c32d1 === _0x862841)
                    _0x520d10 = _0x26d603['y'] - _0x1fcfe5;
                else
                    _0x520d10 = _0x26d603['y'] + _0x26d603['h'] + _0x1fcfe5;
            }
        }
        _0x188497['x'] = _0x3d7efa - _0x188497['width'] / 0x2;
        _0x188497['y'] = _0x520d10 - _0x188497['height'] / 0x2;
    }
}
function _0x3a28aa() {
    if (_0x416fe7['isDead'])
        return;
    const _0x4319ad = _0x416fe7['width'] / 0x2;
    const _0x201784 = _0x416fe7['x'] + _0x416fe7['width'] / 0x2;
    const _0x1f6e8a = _0x416fe7['y'] + _0x416fe7['height'] / 0x2;
    for (const _0x11c386 in _0x551f3c) {
        const _0x31a86f = _0x551f3c[_0x11c386];
        if (_0x31a86f['isDead'])
            continue;
        const _0x5b14e6 = _0x31a86f['width'] / 0x2;
        const _0x354099 = _0x4319ad + _0x5b14e6;
        const _0xc23b78 = (_0x31a86f['renderX'] ?? _0x31a86f['x']) + _0x31a86f['width'] / 0x2;
        const _0x54e0d3 = (_0x31a86f['renderY'] ?? _0x31a86f['y']) + _0x31a86f['height'] / 0x2;
        const _0x161bad = _0x201784 - _0xc23b78;
        const _0x58f785 = _0x1f6e8a - _0x54e0d3;
        const _0x2c0658 = Math['sqrt'](_0x161bad * _0x161bad + _0x58f785 * _0x58f785);
        if (_0x2c0658 > 0x0 && _0x2c0658 < _0x354099) {
            const _0x5593c0 = _0x354099 - _0x2c0658;
            const _0x2ed357 = _0x161bad / _0x2c0658;
            const _0x3c64f5 = _0x58f785 / _0x2c0658;
            _0x416fe7['x'] += _0x2ed357 * (_0x5593c0 * 0.25);
            _0x416fe7['y'] += _0x3c64f5 * (_0x5593c0 * 0.25);
            _0x31a86f['x'] -= _0x2ed357 * (_0x5593c0 * 0.75);
            _0x31a86f['y'] -= _0x3c64f5 * (_0x5593c0 * 0.75);
            _0x23c415(_0x31a86f);
            _0x2aba6c(_0x31a86f);
            if (_0x31a86f['renderX'] !== undefined) {
                _0x31a86f['renderX'] = _0x31a86f['x'];
                _0x31a86f['renderY'] = _0x31a86f['y'];
            }
            const _0xd4142a = _0x416fe7['vx'] * _0x2ed357 + _0x416fe7['vy'] * _0x3c64f5;
            if (_0xd4142a < 0x0) {
                _0x416fe7['vx'] -= _0xd4142a * _0x2ed357 * 0.25;
                _0x416fe7['vy'] -= _0xd4142a * _0x3c64f5 * 0.25;
            }
        }
    }
    _0x39f956();
    _0x3d0de6();
}
function _0x3d0de6() {
    if (_0x416fe7['isDead'])
        return;
    const _0x452962 = _0x416fe7['scale'];
    const _0x1309f6 = _0x416fe7['width'] * _0x452962 / 0x2;
    for (let _0x39dd81 = 0x0; _0x39dd81 < 0x2; _0x39dd81++) {
        let _0x18656b = _0x416fe7['x'] + _0x416fe7['width'] / 0x2;
        let _0x4131d8 = _0x416fe7['y'] + _0x416fe7['height'] / 0x2;
        for (const _0x45d881 of _0x285259['ENTITIES']) {
            const _0x716f2b = _0x18656b < _0x45d881['x'] ? _0x45d881['x'] : _0x18656b > _0x45d881['x'] + _0x45d881['w'] ? _0x45d881['x'] + _0x45d881['w'] : _0x18656b;
            const _0x4f807f = _0x4131d8 < _0x45d881['y'] ? _0x45d881['y'] : _0x4131d8 > _0x45d881['y'] + _0x45d881['h'] ? _0x45d881['y'] + _0x45d881['h'] : _0x4131d8;
            const _0x3f84dc = _0x18656b - _0x716f2b;
            const _0xf5886a = _0x4131d8 - _0x4f807f;
            const _0x17db08 = Math['sqrt'](_0x3f84dc * _0x3f84dc + _0xf5886a * _0xf5886a);
            if (_0x17db08 < _0x1309f6 && _0x17db08 > 0x0) {
                const _0x2f1de6 = _0x1309f6 - _0x17db08;
                const _0x1308db = _0x3f84dc / _0x17db08;
                const _0x1a118b = _0xf5886a / _0x17db08;
                _0x18656b += _0x1308db * _0x2f1de6;
                _0x4131d8 += _0x1a118b * _0x2f1de6;
                const _0x9d8a6d = _0x416fe7['vx'] * _0x1308db + _0x416fe7['vy'] * _0x1a118b;
                if (_0x9d8a6d < 0x0) {
                    _0x416fe7['vx'] -= _0x9d8a6d * _0x1308db;
                    _0x416fe7['vy'] -= _0x9d8a6d * _0x1a118b;
                }
            } else if (_0x17db08 === 0x0) {
                const _0x3dac50 = _0x18656b - _0x45d881['x'];
                const _0x56cf23 = _0x45d881['x'] + _0x45d881['w'] - _0x18656b;
                const _0x3003f0 = _0x4131d8 - _0x45d881['y'];
                const _0x302253 = _0x45d881['y'] + _0x45d881['h'] - _0x4131d8;
                const _0x157267 = Math['min'](_0x3dac50, _0x56cf23, _0x3003f0, _0x302253);
                if (_0x157267 === _0x3dac50)
                    _0x18656b = _0x45d881['x'] - _0x1309f6;
                else if (_0x157267 === _0x56cf23)
                    _0x18656b = _0x45d881['x'] + _0x45d881['w'] + _0x1309f6;
                else if (_0x157267 === _0x3003f0)
                    _0x4131d8 = _0x45d881['y'] - _0x1309f6;
                else
                    _0x4131d8 = _0x45d881['y'] + _0x45d881['h'] + _0x1309f6;
            }
        }
        _0x416fe7['x'] = _0x18656b - _0x416fe7['width'] / 0x2;
        _0x416fe7['y'] = _0x4131d8 - _0x416fe7['height'] / 0x2;
    }
}
function _0x4fdbbb(_0x341ebe, _0x313d91) {
    const _0x26b957 = _0x285259['MAP']['layers']['find'](_0x12a1d9 => _0x12a1d9['name'] === 'trees');
    if (!_0x26b957)
        return ![];
    const _0x2aa54d = Math['floor'](_0x341ebe / _0x285259['MAP']['tileSize']);
    const _0x5017b7 = Math['floor'](_0x313d91 / _0x285259['MAP']['tileSize']);
    if (_0x2aa54d < 0x0 || _0x2aa54d >= _0x285259['MAP']['columns'] || _0x5017b7 < 0x0 || _0x5017b7 >= _0x285259['MAP']['rows'])
        return ![];
    return _0x26b957['data'][_0x5017b7 * _0x285259['MAP']['columns'] + _0x2aa54d] === 0xb;
}
let _0x2f0bc5 = null;
function _0x19538a() {
    const _0x2b54f1 = _0x285259['MAP'];
    const _0x1039a6 = _0x2b54f1['layers']['find'](_0x42d981 => _0x42d981['name'] === 'floor2');
    const _0x1894fe = _0x2b54f1['layers']['find'](_0x2ce6c9 => _0x2ce6c9['name'] === 'walls');
    if (!_0x1039a6 || !_0x1894fe) {
        _0x2f0bc5 = null;
        return;
    }
    const _0x2bf45b = _0x2b54f1['columns'];
    const _0x82d345 = _0x2b54f1['rows'];
    const _0xfaa51a = [];
    const _0x1cb8fd = [];
    const _0x279489 = new Set();
    for (let _0x257fbd = 0x0; _0x257fbd < _0x82d345; _0x257fbd++) {
        for (let _0x3171f4 = 0x0; _0x3171f4 < _0x2bf45b; _0x3171f4++) {
            const _0x57d264 = _0x257fbd * _0x2bf45b + _0x3171f4;
            const _0x1ea655 = _0x1039a6['data'][_0x57d264];
            const _0x32133e = _0x1894fe['data'][_0x57d264];
            if (_0x1ea655 === 0x2 || _0x1ea655 === 0x4) {
                _0xfaa51a['push']({
                    'c': _0x3171f4,
                    'r': _0x257fbd
                });
                if (_0x32133e !== 0x0)
                    _0x1cb8fd['push']({
                        'c': _0x3171f4,
                        'r': _0x257fbd
                    });
            }
            if (_0x32133e !== 0x0)
                _0x279489['add'](_0x3171f4 + ',' + _0x257fbd);
        }
    }
    const _0x631043 = new Set(_0xfaa51a['map'](_0x5ac3c5 => _0x5ac3c5['c'] + ',' + _0x5ac3c5['r']));
    const _0x31361c = [
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
                c: _0x3f7bc3,
                r: _0x448ba6
            } of _0xfaa51a) {
        for (const [_0x116be3, _0x223c87] of _0x31361c) {
            const _0x42927 = _0x3f7bc3 + _0x116be3, _0x275dcf = _0x448ba6 + _0x223c87;
            const _0xecf514 = _0x42927 + ',' + _0x275dcf;
            if (!_0x631043['has'](_0xecf514))
                _0x279489['add'](_0xecf514);
        }
    }
    _0x2f0bc5 = {
        'wallSet': _0x279489,
        'floorTiles': _0xfaa51a,
        'wallTiles': _0x1cb8fd,
        'interiorSet': _0x631043
    };
}
function _0x21ad1f() {
    const _0x5a8a0f = _0x285259['MAP']['layers']['find'](_0x211962 => _0x211962['name'] === 'floor2');
    if (!_0x5a8a0f)
        return ![];
    const _0x3d1cb7 = Math['floor']((_0x416fe7['x'] + _0x416fe7['width'] / 0x2) / _0x285259['MAP']['tileSize']);
    const _0x332c83 = Math['floor']((_0x416fe7['y'] + _0x416fe7['height'] / 0x2) / _0x285259['MAP']['tileSize']);
    if (_0x3d1cb7 < 0x0 || _0x3d1cb7 >= _0x285259['MAP']['columns'] || _0x332c83 < 0x0 || _0x332c83 >= _0x285259['MAP']['rows'])
        return ![];
    const _0x3561a0 = _0x5a8a0f['data'][_0x332c83 * _0x285259['MAP']['columns'] + _0x3d1cb7];
    return _0x3561a0 === 0x2;
}
function _0x51de30() {
    if (_0x416fe7['isDead']) {
        _0x285259['SHADOW']['polygon'] = null;
        return;
    }
    const _0x33e84b = _0x285259['MAP'];
    const _0x97abc4 = _0x285259['SHADOW'];
    const _0x1df8ec = _0x33e84b['tileSize'];
    if (!_0x2f0bc5)
        _0x19538a();
    if (!_0x2f0bc5) {
        _0x97abc4['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x4e4e42,
        floorTiles: _0x26f593
    } = _0x2f0bc5;
    if (_0x26f593['length'] === 0x0) {
        _0x97abc4['polygon'] = null;
        return;
    }
    if (!_0x21ad1f()) {
        _0x97abc4['polygon'] = null;
        return;
    }
    const _0x5ab53b = _0x416fe7['x'] + _0x416fe7['width'] / 0x2;
    const _0x46ce1d = _0x416fe7['y'] + _0x416fe7['height'] / 0x2;
    if (!_0x2f0bc5['_bounds']) {
        let _0xa4c36 = Infinity, _0x4875b4 = -Infinity, _0x24b5db = Infinity, _0x3c6de6 = -Infinity;
        for (const {
                    c: _0x1bb132,
                    r: _0x8e3108
                } of _0x26f593) {
            if (_0x1bb132 < _0xa4c36)
                _0xa4c36 = _0x1bb132;
            if (_0x1bb132 > _0x4875b4)
                _0x4875b4 = _0x1bb132;
            if (_0x8e3108 < _0x24b5db)
                _0x24b5db = _0x8e3108;
            if (_0x8e3108 > _0x3c6de6)
                _0x3c6de6 = _0x8e3108;
        }
        _0x2f0bc5['_bounds'] = {
            'minC': Math['max'](0x0, _0xa4c36 - 0x1),
            'maxC': Math['min'](_0x33e84b['columns'] - 0x1, _0x4875b4 + 0x1),
            'minR': Math['max'](0x0, _0x24b5db - 0x1),
            'maxR': Math['min'](_0x33e84b['rows'] - 0x1, _0x3c6de6 + 0x1)
        };
        const _0x578490 = [];
        for (let _0x3fc35c = _0x2f0bc5['_bounds']['minR']; _0x3fc35c <= _0x2f0bc5['_bounds']['maxR']; _0x3fc35c++) {
            for (let _0x3493eb = _0x2f0bc5['_bounds']['minC']; _0x3493eb <= _0x2f0bc5['_bounds']['maxC']; _0x3493eb++) {
                if (_0x4e4e42['has'](_0x3493eb + ',' + _0x3fc35c))
                    _0x578490['push'](_0x3493eb, _0x3fc35c);
            }
        }
        _0x2f0bc5['_wallArr'] = _0x578490;
    }
    const {
        minC: _0x4b4c01,
        maxC: _0x4b1fe1,
        minR: _0x310bd1,
        maxR: _0x2f6d0c
    } = _0x2f0bc5['_bounds'];
    const _0x17ad20 = _0x2f0bc5['_wallArr'];
    const _0x51dbe1 = 0.0001;
    const _0x3b9c6f = new Set();
    const _0x1e25cd = [];
    for (let _0xe22afc = 0x0; _0xe22afc < _0x17ad20['length']; _0xe22afc += 0x2) {
        const _0x529427 = _0x17ad20[_0xe22afc], _0x51d41e = _0x17ad20[_0xe22afc + 0x1];
        const _0x25876b = [
            _0x529427 * _0x1df8ec,
            _0x51d41e * _0x1df8ec,
            _0x529427 * _0x1df8ec + _0x1df8ec,
            _0x51d41e * _0x1df8ec,
            _0x529427 * _0x1df8ec,
            _0x51d41e * _0x1df8ec + _0x1df8ec,
            _0x529427 * _0x1df8ec + _0x1df8ec,
            _0x51d41e * _0x1df8ec + _0x1df8ec
        ];
        for (let _0x2d7400 = 0x0; _0x2d7400 < _0x25876b['length']; _0x2d7400 += 0x2) {
            const _0x2e36b4 = _0x25876b[_0x2d7400], _0x27fa1d = _0x25876b[_0x2d7400 + 0x1];
            const _0x3310ea = Math['atan2'](_0x27fa1d - _0x46ce1d, _0x2e36b4 - _0x5ab53b);
            const _0x1c205a = Math['round'](_0x3310ea * 0x4e20);
            if (!_0x3b9c6f['has'](_0x1c205a - 0x1)) {
                _0x3b9c6f['add'](_0x1c205a - 0x1);
                _0x1e25cd['push'](_0x3310ea - _0x51dbe1);
            }
            if (!_0x3b9c6f['has'](_0x1c205a)) {
                _0x3b9c6f['add'](_0x1c205a);
                _0x1e25cd['push'](_0x3310ea);
            }
            if (!_0x3b9c6f['has'](_0x1c205a + 0x1)) {
                _0x3b9c6f['add'](_0x1c205a + 0x1);
                _0x1e25cd['push'](_0x3310ea + _0x51dbe1);
            }
        }
    }
    _0x1e25cd['sort']((_0x4a0a19, _0x51cd51) => _0x4a0a19 - _0x51cd51);
    const _0x3127f5 = Math['hypot']((_0x4b1fe1 - _0x4b4c01 + 0x2) * _0x1df8ec, (_0x2f6d0c - _0x310bd1 + 0x2) * _0x1df8ec);
    const _0x444574 = _0xbfd5bd => {
        const _0x5c4e73 = Math['cos'](_0xbfd5bd);
        const _0x5cf797 = Math['sin'](_0xbfd5bd);
        let _0x533582 = _0x3127f5;
        for (let _0x5bdfea = 0x0; _0x5bdfea < _0x17ad20['length']; _0x5bdfea += 0x2) {
            const _0x5a0c24 = _0x17ad20[_0x5bdfea], _0x18c77d = _0x17ad20[_0x5bdfea + 0x1];
            const _0x59d41d = _0x5a0c24 * _0x1df8ec, _0x1fe90b = _0x18c77d * _0x1df8ec;
            const _0x5e983c = _0x59d41d + _0x1df8ec, _0x5ba26e = _0x1fe90b + _0x1df8ec;
            const _0x16866e = _0x59d41d + _0x1df8ec * 0.5, _0x4dbb07 = _0x1fe90b + _0x1df8ec * 0.5;
            const _0x2f7be0 = Math['abs'](_0x16866e - _0x5ab53b) + Math['abs'](_0x4dbb07 - _0x46ce1d);
            if (_0x2f7be0 > _0x533582 + _0x1df8ec * 1.5)
                continue;
            let _0x8dd668, _0x5615bd, _0x202fd6;
            _0x8dd668 = -_0x5cf797 * _0x1df8ec;
            if (Math['abs'](_0x8dd668) >= 1e-10) {
                _0x5615bd = -(_0x1fe90b - _0x46ce1d) * _0x1df8ec / _0x8dd668;
                _0x202fd6 = ((_0x59d41d - _0x5ab53b) * _0x5cf797 - (_0x1fe90b - _0x46ce1d) * _0x5c4e73) / _0x8dd668;
                if (_0x5615bd > 0.001 && _0x202fd6 >= 0x0 && _0x202fd6 <= 0x1 && _0x5615bd < _0x533582)
                    _0x533582 = _0x5615bd;
            }
            _0x8dd668 = _0x5c4e73 * _0x1df8ec;
            if (Math['abs'](_0x8dd668) >= 1e-10) {
                _0x5615bd = (_0x5e983c - _0x5ab53b) * _0x1df8ec / _0x8dd668;
                _0x202fd6 = ((_0x5e983c - _0x5ab53b) * _0x5cf797 - (_0x1fe90b - _0x46ce1d) * _0x5c4e73) / _0x8dd668;
                if (_0x5615bd > 0.001 && _0x202fd6 >= 0x0 && _0x202fd6 <= 0x1 && _0x5615bd < _0x533582)
                    _0x533582 = _0x5615bd;
            }
            _0x8dd668 = _0x5cf797 * _0x1df8ec;
            if (Math['abs'](_0x8dd668) >= 1e-10) {
                _0x5615bd = (_0x5ba26e - _0x46ce1d) * _0x1df8ec / _0x8dd668;
                _0x202fd6 = ((_0x5e983c - _0x5ab53b) * _0x5cf797 - (_0x5ba26e - _0x46ce1d) * _0x5c4e73) / _0x8dd668;
                if (_0x5615bd > 0.001 && _0x202fd6 >= 0x0 && _0x202fd6 <= 0x1 && _0x5615bd < _0x533582)
                    _0x533582 = _0x5615bd;
            }
            _0x8dd668 = -_0x5c4e73 * _0x1df8ec;
            if (Math['abs'](_0x8dd668) >= 1e-10) {
                _0x5615bd = -(_0x59d41d - _0x5ab53b) * _0x1df8ec / _0x8dd668;
                _0x202fd6 = ((_0x59d41d - _0x5ab53b) * _0x5cf797 - (_0x5ba26e - _0x46ce1d) * _0x5c4e73) / _0x8dd668;
                if (_0x5615bd > 0.001 && _0x202fd6 >= 0x0 && _0x202fd6 <= 0x1 && _0x5615bd < _0x533582)
                    _0x533582 = _0x5615bd;
            }
        }
        const _0x48fc77 = _0x533582 < _0x3127f5 ? _0x533582 + _0x1df8ec * 0.5 : _0x533582;
        return {
            'x': _0x5ab53b + _0x5c4e73 * _0x48fc77,
            'y': _0x46ce1d + _0x5cf797 * _0x48fc77
        };
    };
    const _0x5959b2 = [];
    for (let _0x4e5100 = 0x0; _0x4e5100 < _0x1e25cd['length']; _0x4e5100++) {
        const _0x4f4bd9 = _0x444574(_0x1e25cd[_0x4e5100]);
        _0x5959b2['push'](_0x4f4bd9['x'], _0x4f4bd9['y']);
    }
    _0x97abc4['polygon'] = _0x5959b2['length'] >= 0x6 ? new Float32Array(_0x5959b2) : null;
}
function _0x3ec816(_0x11b84d, _0x1d7fe2, _0x4a5adf) {
    if (_0x416fe7['isDead'])
        return;
    if (!_0x2f0bc5)
        return;
    const {
        floorTiles: _0x44d48b,
        wallTiles: _0x2664c3
    } = _0x2f0bc5;
    if (_0x44d48b['length'] === 0x0)
        return;
    const _0x1a98ac = _0x285259['SHADOW'];
    const _0x4976f0 = _0x285259['MAP']['tileSize'];
    const _0x1cf6ba = _0x285259['CAMERA']['width'];
    const _0x4301e5 = _0x285259['CAMERA']['height'];
    if (!_0x285259['SHADOW']['_buf'] || _0x285259['SHADOW']['_buf']['width'] !== _0x1cf6ba || _0x285259['SHADOW']['_buf']['height'] !== _0x4301e5) {
        _0x285259['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x285259['SHADOW']['_buf']['width'] = _0x1cf6ba;
        _0x285259['SHADOW']['_buf']['height'] = _0x4301e5;
    }
    const _0x5472b9 = _0x285259['SHADOW']['_buf'];
    const _0x101b03 = _0x5472b9['getContext']('2d');
    _0x101b03['clearRect'](0x0, 0x0, _0x1cf6ba, _0x4301e5);
    _0x101b03['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x101b03['beginPath']();
    for (const {
                c: _0x72fd9b,
                r: _0x27c2cb
            } of _0x44d48b) {
        const _0x298d73 = Math['floor'](_0x72fd9b * _0x4976f0 - _0x1d7fe2), _0x371bb0 = Math['floor'](_0x27c2cb * _0x4976f0 - _0x4a5adf);
        if (_0x298d73 > _0x1cf6ba || _0x371bb0 > _0x4301e5 || _0x298d73 + _0x4976f0 < 0x0 || _0x371bb0 + _0x4976f0 < 0x0)
            continue;
        _0x101b03['rect'](_0x298d73 - 0x1, _0x371bb0 - 0x1, _0x4976f0 + 0x4, _0x4976f0 + 0x4);
    }
    _0x101b03['fill']();
    if (_0x2664c3['length'] > 0x0) {
        _0x101b03['globalCompositeOperation'] = 'destination-out';
        _0x101b03['fillStyle'] = 'rgba(0,0,0,1)';
        _0x101b03['beginPath']();
        for (const {
                    c: _0x14babc,
                    r: _0x3a5164
                } of _0x2664c3) {
            const _0x31f8bb = Math['floor'](_0x14babc * _0x4976f0 - _0x1d7fe2), _0x2ac320 = Math['floor'](_0x3a5164 * _0x4976f0 - _0x4a5adf);
            if (_0x31f8bb > _0x1cf6ba || _0x2ac320 > _0x4301e5 || _0x31f8bb + _0x4976f0 < 0x0 || _0x2ac320 + _0x4976f0 < 0x0)
                continue;
            _0x101b03['rect'](_0x31f8bb - 0x1, _0x2ac320 - 0x1, _0x4976f0 + 0x4, _0x4976f0 + 0x4);
        }
        _0x101b03['fill']();
        _0x101b03['globalCompositeOperation'] = 'source-over';
    }
    if (_0x1a98ac['polygon'] && _0x1a98ac['polygon']['length'] >= 0x6) {
        _0x101b03['globalCompositeOperation'] = 'destination-out';
        _0x101b03['beginPath']();
        const _0x4c2deb = _0x1a98ac['polygon'];
        _0x101b03['moveTo'](_0x4c2deb[0x0] - _0x1d7fe2, _0x4c2deb[0x1] - _0x4a5adf);
        for (let _0x278179 = 0x2; _0x278179 < _0x4c2deb['length']; _0x278179 += 0x2) {
            _0x101b03['lineTo'](_0x4c2deb[_0x278179] - _0x1d7fe2, _0x4c2deb[_0x278179 + 0x1] - _0x4a5adf);
        }
        _0x101b03['closePath']();
        _0x101b03['fill']();
        _0x101b03['globalCompositeOperation'] = 'source-over';
    }
    _0x11b84d['drawImage'](_0x5472b9, 0x0, 0x0);
}
function _0xf7ae2c(_0x3183a1) {
    let _0x2e121c = 0x0, _0x516c47 = 0x0;
    const _0x1b1516 = _0x285259['INPUTS']['mouseX'] / _0x285259['SYSTEM']['viewScale'];
    const _0x124005 = _0x285259['INPUTS']['mouseY'] / _0x285259['SYSTEM']['viewScale'];
    const _0x5133dc = _0x416fe7['x'] - _0x285259['CAMERA']['x'] + _0x416fe7['width'] / 0x2;
    const _0x5e8f9f = _0x416fe7['y'] - _0x285259['CAMERA']['y'] + _0x416fe7['height'] / 0x2;
    const _0x69a3ac = Math['atan2'](_0x124005 - _0x5e8f9f, _0x1b1516 - _0x5133dc);
    if (_0x4ba2e1 !== 0x0 || _0x416c37 !== 0x0) {
        _0x2e121c = _0x4ba2e1;
        _0x516c47 = _0x416c37;
    } else if (_0x2e96ae) {
        let _0x1a2c11 = 0x0, _0xb41185 = 0x0;
        if (_0x285259['INPUTS']['keys']['w'] || _0x285259['INPUTS']['keys']['arrowup'])
            _0x1a2c11 += 0x1;
        if (_0x285259['INPUTS']['keys']['s'] || _0x285259['INPUTS']['keys']['arrowdown'])
            _0x1a2c11 -= 0x1;
        if (_0x285259['INPUTS']['keys']['d'] || _0x285259['INPUTS']['keys']['arrowright'])
            _0xb41185 += 0x1;
        if (_0x285259['INPUTS']['keys']['a'] || _0x285259['INPUTS']['keys']['arrowleft'])
            _0xb41185 -= 0x1;
        if (_0x1a2c11 !== 0x0 || _0xb41185 !== 0x0) {
            const _0x3c513d = _0x69a3ac + Math['atan2'](_0xb41185, _0x1a2c11);
            _0x2e121c = Math['cos'](_0x3c513d);
            _0x516c47 = Math['sin'](_0x3c513d);
        }
    } else {
        if (_0x285259['INPUTS']['keys']['w'] || _0x285259['INPUTS']['keys']['arrowup'])
            _0x516c47 -= 0x1;
        if (_0x285259['INPUTS']['keys']['s'] || _0x285259['INPUTS']['keys']['arrowdown'])
            _0x516c47 += 0x1;
        if (_0x285259['INPUTS']['keys']['a'] || _0x285259['INPUTS']['keys']['arrowleft'])
            _0x2e121c -= 0x1;
        if (_0x285259['INPUTS']['keys']['d'] || _0x285259['INPUTS']['keys']['arrowright'])
            _0x2e121c += 0x1;
        const _0x519f8b = _0x2e121c !== 0x0 || _0x516c47 !== 0x0;
        if (_0x519f8b) {
            const _0x319823 = Math['sqrt'](_0x2e121c * _0x2e121c + _0x516c47 * _0x516c47);
            _0x2e121c /= _0x319823;
            _0x516c47 /= _0x319823;
        }
    }
    if (_0x285259['GAME_STATE'] === 'NIGHT' && _0x410446 === 'Skinwalker') {
        if (_0x285259['NIGHT_ABILITY_OPEN'] || !_0x285259['CURRENT_TARGET']) {
            _0x2e121c = 0x0;
            _0x516c47 = 0x0;
            _0x416fe7['vx'] = 0x0;
            _0x416fe7['vy'] = 0x0;
            _0x416fe7['x'] = _0x285259['MAP']['columns'] * _0x285259['MAP']['tileSize'] / 0x2 - _0x416fe7['width'] / 0x2;
            _0x416fe7['y'] = _0x285259['MAP']['rows'] * _0x285259['MAP']['tileSize'] / 0x2 - _0x416fe7['height'] / 0x2;
        }
    }
    const _0x124b3a = _0x2e121c !== 0x0 || _0x516c47 !== 0x0;
    const _0xf55526 = (_0x285259['INPUTS']['keys']['shift'] || _0x7ce325 || _0x49608f) && _0x124b3a;
    _0x416fe7['bopTimer'] = _0xf55526 ? _0x416fe7['bopTimer'] + _0x3183a1 : 0x0;
    _0x416fe7['scale'] = 0x1 + (_0x416fe7['bopTimer'] > 0x0 ? Math['sin'](_0x416fe7['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x126df0 = Math['pow'](0.001, _0x3183a1);
    const _0x5f4895 = _0xf55526 ? 0x74a : 0x5d5;
    _0x416fe7['vx'] += _0x2e121c * _0x5f4895 * _0x3183a1;
    _0x416fe7['vy'] += _0x516c47 * _0x5f4895 * _0x3183a1;
    _0x416fe7['vx'] *= _0x126df0;
    _0x416fe7['vy'] *= _0x126df0;
    _0x416fe7['x'] += _0x416fe7['vx'] * _0x3183a1;
    _0x416fe7['y'] += _0x416fe7['vy'] * _0x3183a1;
    for (let _0x5cf9a4 = 0x0; _0x5cf9a4 < 0x3; _0x5cf9a4++)
        _0x39f956();
    for (let _0x17a655 = 0x0; _0x17a655 < 0x2; _0x17a655++)
        _0x3d0de6();
    for (let _0x21c223 = 0x0; _0x21c223 < 0x2; _0x21c223++)
        _0x3a28aa();
    if (_0x416fe7['x'] < 0x0)
        _0x416fe7['x'] = 0x0;
    if (_0x416fe7['y'] < 0x0)
        _0x416fe7['y'] = 0x0;
    if (_0x416fe7['x'] + _0x416fe7['width'] > _0x285259['MAP']['columns'] * _0x285259['MAP']['tileSize'])
        _0x416fe7['x'] = _0x285259['MAP']['columns'] * _0x285259['MAP']['tileSize'] - _0x416fe7['width'];
    if (_0x416fe7['y'] + _0x416fe7['height'] > _0x285259['MAP']['rows'] * _0x285259['MAP']['tileSize'])
        _0x416fe7['y'] = _0x285259['MAP']['rows'] * _0x285259['MAP']['tileSize'] - _0x416fe7['height'];
    if (_0x9e0fe9) {
        _0x416fe7['angle'] = _0x2bd6e1 + Math['PI'] / 0x2;
    } else if (_0x4ba2e1 !== 0x0 || _0x416c37 !== 0x0) {
        _0x416fe7['angle'] = Math['atan2'](_0x416c37, _0x4ba2e1) + Math['PI'] / 0x2;
    } else if (!_0x4ee67a) {
        _0x416fe7['angle'] = _0x69a3ac + Math['PI'] / 0x2;
    }
    const _0x18b0b9 = _0x416fe7['x'] + _0x416fe7['width'] / 0x2 - _0x285259['CAMERA']['width'] / 0x2;
    const _0x12bfed = _0x416fe7['y'] + _0x416fe7['height'] / 0x2 - _0x285259['CAMERA']['height'] / 0x2;
    if (_0x285259['CAMERA']['x'] === null || isNaN(_0x285259['CAMERA']['x']) || !isFinite(_0x285259['CAMERA']['x'])) {
        _0x285259['CAMERA']['x'] = _0x18b0b9;
        _0x285259['CAMERA']['y'] = _0x12bfed;
    } else {
        const _0x5e1757 = 0x1 - Math['exp'](-Math['max'](0x0, _0x3183a1) * 0x28);
        _0x285259['CAMERA']['x'] += (_0x18b0b9 - _0x285259['CAMERA']['x']) * _0x5e1757;
        _0x285259['CAMERA']['y'] += (_0x12bfed - _0x285259['CAMERA']['y']) * _0x5e1757;
    }
    for (const _0x91a447 in _0x551f3c) {
        const _0x2d17d9 = _0x551f3c[_0x91a447];
        if (_0x2d17d9['renderX'] === undefined) {
            _0x2d17d9['renderX'] = _0x2d17d9['x'];
            _0x2d17d9['renderY'] = _0x2d17d9['y'];
            _0x2d17d9['renderAngle'] = _0x2d17d9['angle'] || 0x0;
        }
        const _0x80a775 = _0x2d17d9['x'] + (_0x2d17d9['vx'] || 0x0) * _0x3183a1;
        const _0x100a96 = _0x2d17d9['y'] + (_0x2d17d9['vy'] || 0x0) * _0x3183a1;
        _0x2d17d9['x'] = _0x80a775;
        _0x2d17d9['y'] = _0x100a96;
        const _0x5aa2c9 = 0x1 - Math['exp'](-_0x3183a1 * 0x12);
        const _0x2e0a1e = _0x2d17d9['x'] - _0x2d17d9['renderX'], _0x5214c8 = _0x2d17d9['y'] - _0x2d17d9['renderY'];
        const _0x512232 = Math['sqrt'](_0x2e0a1e * _0x2e0a1e + _0x5214c8 * _0x5214c8);
        const _0x31ab9c = 0xc8;
        if (_0x512232 > _0x31ab9c) {
            _0x2d17d9['renderX'] = _0x2d17d9['x'] - _0x2e0a1e / _0x512232 * _0x31ab9c;
            _0x2d17d9['renderY'] = _0x2d17d9['y'] - _0x5214c8 / _0x512232 * _0x31ab9c;
        }
        _0x2d17d9['renderX'] += (_0x2d17d9['x'] - _0x2d17d9['renderX']) * _0x5aa2c9;
        _0x2d17d9['renderY'] += (_0x2d17d9['y'] - _0x2d17d9['renderY']) * _0x5aa2c9;
        let _0x1f3c3c = (_0x2d17d9['angle'] || 0x0) - _0x2d17d9['renderAngle'];
        while (_0x1f3c3c < -Math['PI'])
            _0x1f3c3c += Math['PI'] * 0x2;
        while (_0x1f3c3c > Math['PI'])
            _0x1f3c3c -= Math['PI'] * 0x2;
        _0x2d17d9['renderAngle'] += _0x1f3c3c * (0x1 - Math['exp'](-_0x3183a1 * 0x14));
    }
    if (_0x285259['GAME_STATE'] === 'NIGHT') {
        _0x586d8b = Math['min'](0.6, _0x586d8b + _0x3183a1 * 0.5);
    } else {
        _0x586d8b = Math['max'](0x0, _0x586d8b - _0x3183a1 * 0.5);
    }
    _0x51de30();
    _0x22a70e();
}
function _0x53435f(_0x1fcb76, _0x3ac5f0, _0x24f9d1, _0x29c1b0, _0x24824b = !![]) {
    _0x1fcb76['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x537e11 = _0x1fcb76['measureText'](_0x3ac5f0)['width'];
    const _0x949631 = _0x537e11 + 0x18;
    const _0x4d1b18 = 0x1c;
    _0x1fcb76['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x1fcb76['beginPath']();
    if (_0x1fcb76['roundRect']) {
        _0x1fcb76['roundRect'](_0x24f9d1 - _0x949631 / 0x2, _0x29c1b0 - _0x4d1b18, _0x949631, _0x4d1b18, 0x6);
    } else {
        _0x1fcb76['rect'](_0x24f9d1 - _0x949631 / 0x2, _0x29c1b0 - _0x4d1b18, _0x949631, _0x4d1b18);
    }
    _0x1fcb76['fill']();
    if (_0x24824b) {
        _0x1fcb76['beginPath']();
        _0x1fcb76['moveTo'](_0x24f9d1 - 0x6, _0x29c1b0);
        _0x1fcb76['lineTo'](_0x24f9d1 + 0x6, _0x29c1b0);
        _0x1fcb76['lineTo'](_0x24f9d1, _0x29c1b0 + 0x6);
        _0x1fcb76['fill']();
    }
    _0x1fcb76['fillStyle'] = '#ffffff';
    _0x1fcb76['textAlign'] = 'center';
    _0x1fcb76['textBaseline'] = 'middle';
    _0x1fcb76['fillText'](_0x3ac5f0, _0x24f9d1, _0x29c1b0 - _0x4d1b18 / 0x2 + 0x1);
}
function _0x1a07aa(_0x11bbf5, _0x46dd8d, _0x4c0da3, _0x3f4852) {
    if (!_0x46dd8d || _0x46dd8d['length'] === 0x0)
        return;
    let _0x422164 = _0x3f4852;
    for (let _0x4bc559 = 0x0; _0x4bc559 < _0x46dd8d['length']; _0x4bc559++) {
        _0x53435f(_0x11bbf5, _0x46dd8d[_0x4bc559]['text'], _0x4c0da3, _0x422164, _0x4bc559 === 0x0);
        _0x422164 -= 0x24;
    }
}
function _0x553d88() {
    if (!_0x285259['SYSTEM']['isReady'])
        return;
    _0xddcf3a['fillStyle'] = '#000000';
    _0xddcf3a['fillRect'](0x0, 0x0, _0x4e151c['width'], _0x4e151c['height']);
    _0xddcf3a['save']();
    try {
        _0xddcf3a['scale'](_0x285259['SYSTEM']['viewScale'], _0x285259['SYSTEM']['viewScale']);
        _0xddcf3a['imageSmoothingEnabled'] = ![];
        const _0x4fc1d5 = Math['floor'](_0x285259['CAMERA']['x'] || 0x0);
        const _0x506e9f = Math['floor'](_0x285259['CAMERA']['y'] || 0x0);
        const _0x3b7abf = Math['max'](0x0, Math['floor'](_0x4fc1d5 / _0x285259['MAP']['chunkSize']));
        const _0x55c1d3 = Math['min'](_0x285259['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x4fc1d5 + _0x285259['CAMERA']['width']) / _0x285259['MAP']['chunkSize']));
        const _0x173ee2 = Math['max'](0x0, Math['floor'](_0x506e9f / _0x285259['MAP']['chunkSize']));
        const _0x2c60ea = Math['min'](_0x285259['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x506e9f + _0x285259['CAMERA']['height']) / _0x285259['MAP']['chunkSize']));
        for (let _0xf4afcb = _0x173ee2; _0xf4afcb <= _0x2c60ea; _0xf4afcb++)
            for (let _0x276bcd = _0x3b7abf; _0x276bcd <= _0x55c1d3; _0x276bcd++) {
                const _0x5a445b = _0x276bcd * _0x285259['MAP']['chunkSize'] - _0x4fc1d5;
                const _0x599c7b = _0xf4afcb * _0x285259['MAP']['chunkSize'] - _0x506e9f;
                _0xddcf3a['drawImage'](_0x285259['MAP']['bgChunks'][_0xf4afcb][_0x276bcd], _0x5a445b, _0x599c7b, _0x285259['MAP']['chunkSize'] + 0x1, _0x285259['MAP']['chunkSize'] + 0x1);
            }
        if (_0x1376c7['complete'] && _0x1376c7['naturalWidth'] > 0x0) {
            const _0x318361 = _0x285259['MAP']['tileSize'];
            const _0x31790b = _0x318361 * 0xa;
            const _0x4323a7 = _0x285259['MAP']['columns'] / 0x2 * _0x318361 - _0x31790b / 0x2 - _0x4fc1d5;
            const _0x23fbe4 = _0x285259['MAP']['rows'] / 0x2 * _0x318361 - _0x31790b / 0x2 - _0x506e9f;
            _0xddcf3a['imageSmoothingEnabled'] = ![];
            _0xddcf3a['drawImage'](_0x1376c7, _0x4323a7, _0x23fbe4, _0x31790b, _0x31790b);
        }
        if (_0x50a2a2['complete'] && _0x50a2a2['naturalWidth'] > 0x0) {
            _0x285259['ENTITIES']['forEach'](_0x56cf8b => {
                if (_0x56cf8b['type'] !== 'table')
                    return;
                _0xddcf3a['save']();
                _0xddcf3a['imageSmoothingEnabled'] = ![];
                const _0x40ba6a = _0x50a2a2['naturalWidth'] >= _0x50a2a2['naturalHeight'];
                const _0x55c6be = _0x56cf8b['w'] >= _0x56cf8b['h'];
                if (_0x40ba6a === _0x55c6be) {
                    _0xddcf3a['drawImage'](_0x50a2a2, _0x56cf8b['x'] - _0x4fc1d5, _0x56cf8b['y'] - _0x506e9f, _0x56cf8b['w'], _0x56cf8b['h']);
                } else {
                    _0xddcf3a['translate'](_0x56cf8b['x'] - _0x4fc1d5 + _0x56cf8b['w'] / 0x2, _0x56cf8b['y'] - _0x506e9f + _0x56cf8b['h'] / 0x2);
                    _0xddcf3a['rotate'](Math['PI'] / 0x2);
                    _0xddcf3a['drawImage'](_0x50a2a2, -_0x56cf8b['h'] / 0x2, -_0x56cf8b['w'] / 0x2, _0x56cf8b['h'], _0x56cf8b['w']);
                }
                _0xddcf3a['restore']();
            });
        } else {
            _0x285259['ENTITIES']['forEach'](_0x226203 => {
                if (_0x226203['type'] !== 'table')
                    return;
                _0xddcf3a['save']();
                _0xddcf3a['fillStyle'] = '#6b4423';
                _0xddcf3a['fillRect'](_0x226203['x'] - _0x4fc1d5, _0x226203['y'] - _0x506e9f, _0x226203['w'], _0x226203['h']);
                _0xddcf3a['strokeStyle'] = '#422810';
                _0xddcf3a['lineWidth'] = 0x3;
                _0xddcf3a['strokeRect'](_0x226203['x'] - _0x4fc1d5 + 0x1, _0x226203['y'] - _0x506e9f + 0x1, _0x226203['w'] - 0x2, _0x226203['h'] - 0x2);
                _0xddcf3a['fillStyle'] = '#82532a';
                _0xddcf3a['fillRect'](_0x226203['x'] - _0x4fc1d5 + 0x4, _0x226203['y'] - _0x506e9f + 0x4, _0x226203['w'] - 0x8, _0x226203['h'] - 0x8);
                _0xddcf3a['restore']();
            });
        }
        if (_0x4047d0) {
            if (_0x285259['MAP']['wallChunks'] && _0x285259['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x5048e2 = _0x173ee2; _0x5048e2 <= _0x2c60ea; _0x5048e2++) {
                    for (let _0x3582c3 = _0x3b7abf; _0x3582c3 <= _0x55c1d3; _0x3582c3++) {
                        if (!_0x285259['MAP']['wallChunks'][_0x5048e2] || !_0x285259['MAP']['wallChunks'][_0x5048e2][_0x3582c3])
                            continue;
                        const _0x25bf6c = _0x3582c3 * _0x285259['MAP']['chunkSize'] - _0x4fc1d5;
                        const _0x7761d = _0x5048e2 * _0x285259['MAP']['chunkSize'] - _0x506e9f;
                        _0xddcf3a['drawImage'](_0x285259['MAP']['wallChunks'][_0x5048e2][_0x3582c3], _0x25bf6c, _0x7761d, _0x285259['MAP']['chunkSize'] + 0x1, _0x285259['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x4210f9 = _0x173ee2; _0x4210f9 <= _0x2c60ea; _0x4210f9++) {
                for (let _0x5d505f = _0x3b7abf; _0x5d505f <= _0x55c1d3; _0x5d505f++) {
                    const _0x1eda08 = _0x5d505f * _0x285259['MAP']['chunkSize'] - _0x4fc1d5;
                    const _0x276ae4 = _0x4210f9 * _0x285259['MAP']['chunkSize'] - _0x506e9f;
                    _0xddcf3a['drawImage'](_0x285259['MAP']['fgChunks'][_0x4210f9][_0x5d505f], _0x1eda08, _0x276ae4, _0x285259['MAP']['chunkSize'] + 0x1, _0x285259['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x46253f = _0x285259['GAME_STATE'] === 'NIGHT' && _0x410446 === 'Skinwalker' && !_0x416fe7['isDead'];
        const _0x327c4b = _0x416fe7['x'] - _0x4fc1d5 + _0x416fe7['width'] / 0x2;
        const _0x4e9a48 = _0x416fe7['y'] - _0x506e9f + _0x416fe7['height'] / 0x2;
        const _0x1b6cc5 = _0x416fe7['width'] * _0x416fe7['scale'] * 1.3;
        const _0x5ab7b1 = _0x416fe7['height'] * _0x416fe7['scale'] * 1.3;
        for (const _0x48fe62 in _0x551f3c) {
            const _0x24b105 = _0x551f3c[_0x48fe62];
            if (_0x24b105['isDead'])
                continue;
            const _0x5e8d3e = (_0x24b105['renderX'] ?? _0x24b105['x']) - _0x4fc1d5 + _0x24b105['width'] / 0x2;
            const _0x8127f7 = (_0x24b105['renderY'] ?? _0x24b105['y']) - _0x506e9f + _0x24b105['height'] / 0x2;
            const _0x34d8d9 = Math['min'](0x2, Math['max'](0.3, _0x24b105['scale'] || 0x1));
            const _0x41e03f = _0x24b105['width'] * _0x34d8d9 * 1.3;
            const _0x181ad = _0x24b105['height'] * _0x34d8d9 * 1.3;
            _0xddcf3a['save']();
            try {
                _0xddcf3a['translate'](_0x5e8d3e, _0x8127f7);
                _0xddcf3a['rotate'](_0x24b105['renderAngle'] ?? 0x0);
                if (_0x24b105['isDark'])
                    _0xddcf3a['filter'] = 'brightness(0)';
                _0x360334(_0xddcf3a, _0x24b105['body'], _0x24b105['eyes'], _0x41e03f, _0x181ad);
                if (_0x4a9bbd['has'](parseInt(_0x48fe62)) && _0x131ed9['complete'] && _0x131ed9['naturalWidth'] > 0x0) {
                    _0xddcf3a['drawImage'](_0x131ed9, -_0x41e03f / 0x2, -_0x181ad / 0x2, _0x41e03f, _0x181ad);
                }
                if (_0x24b105['isDark'])
                    _0xddcf3a['filter'] = 'none';
            } finally {
                _0xddcf3a['restore']();
            }
            if (!_0x4fdbbb((_0x24b105['renderX'] ?? _0x24b105['x']) + _0x24b105['width'] / 0x2, (_0x24b105['renderY'] ?? _0x24b105['y']) + _0x24b105['height'] / 0x2)) {
                _0xddcf3a['textAlign'] = 'center';
                _0xddcf3a['lineJoin'] = 'round';
                _0xddcf3a['lineWidth'] = 0x3;
                _0xddcf3a['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0xddcf3a['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0xddcf3a['fillStyle'] = _0x4a9bbd['has'](parseInt(_0x48fe62)) ? '#cc88ff' : '#ffffff';
                const _0x5de5f4 = _0x24b105['isDark'] ? '???' : _0x24b105['name'] + (_0x24b105['isOwner'] ? '\x20[🗝️]' : '');
                _0xddcf3a['strokeText'](_0x5de5f4, _0x5e8d3e, _0x8127f7 - _0x181ad / 0x2 - 0x10);
                _0xddcf3a['fillText'](_0x5de5f4, _0x5e8d3e, _0x8127f7 - _0x181ad / 0x2 - 0x10);
            }
        }
        if (!_0x416fe7['isDead']) {
            _0xddcf3a['save']();
            try {
                _0xddcf3a['translate'](_0x327c4b, _0x4e9a48);
                _0xddcf3a['rotate'](_0x416fe7['angle']);
                if (_0x46253f)
                    _0xddcf3a['filter'] = 'brightness(0)';
                _0x360334(_0xddcf3a, _0x3367ea, _0x1ee484, _0x1b6cc5, _0x5ab7b1);
                if (_0x4a9bbd['has'](_0x22bac7) && _0x131ed9['complete'] && _0x131ed9['naturalWidth'] > 0x0) {
                    _0xddcf3a['drawImage'](_0x131ed9, -_0x1b6cc5 / 0x2, -_0x5ab7b1 / 0x2, _0x1b6cc5, _0x5ab7b1);
                }
                if (_0x46253f)
                    _0xddcf3a['filter'] = 'none';
            } finally {
                _0xddcf3a['restore']();
            }
            if (!_0x4fdbbb(_0x416fe7['x'] + _0x416fe7['width'] / 0x2, _0x416fe7['y'] + _0x416fe7['height'] / 0x2)) {
                _0xddcf3a['textAlign'] = 'center';
                _0xddcf3a['lineJoin'] = 'round';
                _0xddcf3a['lineWidth'] = 0x3;
                _0xddcf3a['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0xddcf3a['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0xddcf3a['fillStyle'] = _0x4a9bbd['has'](_0x22bac7) ? '#cc88ff' : '#ffffff';
                const _0x22e411 = _0x46253f ? '???' : _0x4f238b + (_0x2a30cd ? '\x20[🗝️]' : '');
                _0xddcf3a['strokeText'](_0x22e411, _0x327c4b, _0x4e9a48 - _0x5ab7b1 / 0x2 - 0x10);
                _0xddcf3a['fillText'](_0x22e411, _0x327c4b, _0x4e9a48 - _0x5ab7b1 / 0x2 - 0x10);
            }
        }
        if (_0x285259['MAP']['wallChunks'] && _0x285259['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x298d40 = _0x173ee2; _0x298d40 <= _0x2c60ea; _0x298d40++)
                for (let _0x41dcac = _0x3b7abf; _0x41dcac <= _0x55c1d3; _0x41dcac++) {
                    if (!_0x285259['MAP']['wallChunks'][_0x298d40] || !_0x285259['MAP']['wallChunks'][_0x298d40][_0x41dcac])
                        continue;
                    const _0x1642d2 = _0x41dcac * _0x285259['MAP']['chunkSize'] - _0x4fc1d5;
                    const _0x361b3e = _0x298d40 * _0x285259['MAP']['chunkSize'] - _0x506e9f;
                    _0xddcf3a['drawImage'](_0x285259['MAP']['wallChunks'][_0x298d40][_0x41dcac], _0x1642d2, _0x361b3e, _0x285259['MAP']['chunkSize'] + 0x1, _0x285259['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x463cb6 of _0x285259['ENTITIES']) {
            if (_0x463cb6['type'] !== 'npc')
                continue;
            const _0x1fee6b = _0x463cb6['x'] - _0x4fc1d5 + _0x463cb6['w'] / 0x2;
            const _0x7aafc = _0x463cb6['y'] - _0x506e9f + _0x463cb6['h'] / 0x2;
            const _0x23ba53 = _0x463cb6['w'];
            const _0x16d027 = _0x463cb6['h'];
            _0xddcf3a['save']();
            _0xddcf3a['translate'](_0x1fee6b, _0x7aafc);
            _0xddcf3a['rotate'](_0x463cb6['angle'] !== undefined ? _0x463cb6['angle'] : 0x0);
            _0x360334(_0xddcf3a, _0x463cb6['body'] || 'yanito932.png', _0x463cb6['eyes'], _0x23ba53, _0x16d027);
            _0xddcf3a['restore']();
            _0xddcf3a['textAlign'] = 'center';
            _0xddcf3a['lineJoin'] = 'round';
            _0xddcf3a['lineWidth'] = 0x3;
            _0xddcf3a['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0xddcf3a['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0xddcf3a['fillStyle'] = '#aaaaaa';
            _0xddcf3a['strokeText'](_0x463cb6['name'] || 'NPC', _0x1fee6b, _0x7aafc - _0x16d027 / 0x2 - 0x10);
            _0xddcf3a['fillText'](_0x463cb6['name'] || 'NPC', _0x1fee6b, _0x7aafc - _0x16d027 / 0x2 - 0x10);
        }
        if (_0x416fe7['isDead']) {
            for (const _0x4d344b in _0x551f3c) {
                const _0x5b1c6c = _0x551f3c[_0x4d344b];
                if (!_0x5b1c6c['isDead'])
                    continue;
                const _0x11a463 = (_0x5b1c6c['renderX'] ?? _0x5b1c6c['x']) - _0x4fc1d5 + _0x5b1c6c['width'] / 0x2;
                const _0x1d4720 = (_0x5b1c6c['renderY'] ?? _0x5b1c6c['y']) - _0x506e9f + _0x5b1c6c['height'] / 0x2;
                const _0x369024 = _0x5b1c6c['width'] * (_0x5b1c6c['scale'] || 0x1) * 1.3;
                const _0x5123a9 = _0x5b1c6c['height'] * (_0x5b1c6c['scale'] || 0x1) * 1.3;
                _0xddcf3a['save']();
                try {
                    _0xddcf3a['translate'](_0x11a463, _0x1d4720);
                    _0xddcf3a['rotate'](_0x5b1c6c['renderAngle'] ?? 0x0);
                    _0xddcf3a['globalAlpha'] = 0.3;
                    _0x360334(_0xddcf3a, _0x5b1c6c['body'], _0x5b1c6c['eyes'], _0x369024, _0x5123a9);
                } finally {
                    _0xddcf3a['restore']();
                }
                if (!_0x4fdbbb((_0x5b1c6c['renderX'] ?? _0x5b1c6c['x']) + _0x5b1c6c['width'] / 0x2, (_0x5b1c6c['renderY'] ?? _0x5b1c6c['y']) + _0x5b1c6c['height'] / 0x2)) {
                    _0xddcf3a['save']();
                    _0xddcf3a['globalAlpha'] = 0.3;
                    _0xddcf3a['textAlign'] = 'center';
                    _0xddcf3a['lineJoin'] = 'round';
                    _0xddcf3a['lineWidth'] = 0x3;
                    _0xddcf3a['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0xddcf3a['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0xddcf3a['fillStyle'] = '#ffffff';
                    const _0x3980d6 = _0x5b1c6c['name'] + (_0x5b1c6c['isOwner'] ? '\x20[🗝️]' : '');
                    _0xddcf3a['strokeText'](_0x3980d6, _0x11a463, _0x1d4720 - _0x5123a9 / 0x2 - 0x10);
                    _0xddcf3a['fillText'](_0x3980d6, _0x11a463, _0x1d4720 - _0x5123a9 / 0x2 - 0x10);
                    _0xddcf3a['restore']();
                }
            }
            _0xddcf3a['save']();
            try {
                _0xddcf3a['translate'](_0x327c4b, _0x4e9a48);
                _0xddcf3a['rotate'](_0x416fe7['angle']);
                _0xddcf3a['globalAlpha'] = 0.3;
                _0x360334(_0xddcf3a, _0x3367ea, _0x1ee484, _0x1b6cc5, _0x5ab7b1);
            } finally {
                _0xddcf3a['restore']();
            }
            if (!_0x4fdbbb(_0x416fe7['x'] + _0x416fe7['width'] / 0x2, _0x416fe7['y'] + _0x416fe7['height'] / 0x2)) {
                _0xddcf3a['save']();
                _0xddcf3a['globalAlpha'] = 0.3;
                _0xddcf3a['textAlign'] = 'center';
                _0xddcf3a['lineJoin'] = 'round';
                _0xddcf3a['lineWidth'] = 0x3;
                _0xddcf3a['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0xddcf3a['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0xddcf3a['fillStyle'] = '#ffffff';
                const _0x3d467b = _0x4f238b + (_0x2a30cd ? '\x20[🗝️]' : '');
                _0xddcf3a['strokeText'](_0x3d467b, _0x327c4b, _0x4e9a48 - _0x5ab7b1 / 0x2 - 0x10);
                _0xddcf3a['fillText'](_0x3d467b, _0x327c4b, _0x4e9a48 - _0x5ab7b1 / 0x2 - 0x10);
                _0xddcf3a['restore']();
            }
        }
        for (let _0x116d8f = _0x173ee2; _0x116d8f <= _0x2c60ea; _0x116d8f++)
            for (let _0x2ccb28 = _0x3b7abf; _0x2ccb28 <= _0x55c1d3; _0x2ccb28++) {
                const _0x2380fa = _0x2ccb28 * _0x285259['MAP']['chunkSize'] - _0x4fc1d5;
                const _0x359813 = _0x116d8f * _0x285259['MAP']['chunkSize'] - _0x506e9f;
                _0xddcf3a['drawImage'](_0x285259['MAP']['fgChunks'][_0x116d8f][_0x2ccb28], _0x2380fa, _0x359813, _0x285259['MAP']['chunkSize'] + 0x1, _0x285259['MAP']['chunkSize'] + 0x1);
            }
        if (_0x285259['EDITOR']['enabled'] && _0x285259['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x5e0dff = _0x285259['INPUTS']['mouseX'] / _0x285259['SYSTEM']['viewScale'] + _0x285259['CAMERA']['x'];
            const _0x18153c = _0x285259['INPUTS']['mouseY'] / _0x285259['SYSTEM']['viewScale'] + _0x285259['CAMERA']['y'];
            const _0x20c22b = Math['floor'](_0x5e0dff / _0x285259['MAP']['tileSize']);
            const _0x21d180 = Math['floor'](_0x18153c / _0x285259['MAP']['tileSize']);
            if (_0x20c22b >= 0x0 && _0x20c22b < _0x285259['MAP']['columns'] && _0x21d180 >= 0x0 && _0x21d180 < _0x285259['MAP']['rows']) {
                const _0x5aab14 = _0x20c22b * _0x285259['MAP']['tileSize'] - _0x4fc1d5;
                const _0x97901f = _0x21d180 * _0x285259['MAP']['tileSize'] - _0x506e9f;
                _0xddcf3a['save']();
                _0xddcf3a['globalAlpha'] = 0.5;
                if (_0x285259['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x24afa7 = _0x285259['EDITOR']['selectedTileGid'] - 0x1;
                    _0xddcf3a['drawImage'](_0x5b8f9e, _0x24afa7 % _0x285259['MAP']['tilesetCols'] * _0x285259['MAP']['tileSize'], Math['floor'](_0x24afa7 / _0x285259['MAP']['tilesetCols']) * _0x285259['MAP']['tileSize'], _0x285259['MAP']['tileSize'], _0x285259['MAP']['tileSize'], _0x5aab14, _0x97901f, _0x285259['MAP']['tileSize'], _0x285259['MAP']['tileSize']);
                } else {
                    _0xddcf3a['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0xddcf3a['fillRect'](_0x5aab14, _0x97901f, _0x285259['MAP']['tileSize'], _0x285259['MAP']['tileSize']);
                }
                _0xddcf3a['restore']();
            }
        }
        _0x3ec816(_0xddcf3a, _0x4fc1d5, _0x506e9f);
        if (_0x586d8b > 0x0) {
            _0xddcf3a['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x586d8b + ')';
            _0xddcf3a['fillRect'](0x0, 0x0, _0x285259['CAMERA']['width'], _0x285259['CAMERA']['height']);
        }
        for (const _0x5bf81b in _0x551f3c) {
            const _0x18ac96 = _0x551f3c[_0x5bf81b];
            if (_0x18ac96['isDead'] && !_0x416fe7['isDead'])
                continue;
            const _0x25fe72 = (_0x18ac96['renderX'] ?? _0x18ac96['x']) - _0x4fc1d5 + _0x18ac96['width'] / 0x2;
            const _0x530975 = (_0x18ac96['renderY'] ?? _0x18ac96['y']) - _0x506e9f + _0x18ac96['height'] / 0x2;
            _0x1a07aa(_0xddcf3a, _0x18ac96['chats'], _0x25fe72, _0x530975 - _0x18ac96['height'] / 0x2 - 0x20);
        }
        _0x1a07aa(_0xddcf3a, _0x416fe7['chats'], _0x327c4b, _0x4e9a48 - _0x416fe7['height'] / 0x2 - 0x20);
    } finally {
        _0xddcf3a['restore']();
    }
}
function _0x44741e(_0x577d03) {
    if (!_0x285259['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x44741e);
    let _0x17ada7 = (_0x577d03 - _0x285259['SYSTEM']['lastTime']) / 0x3e8;
    _0x285259['SYSTEM']['lastTime'] = _0x577d03;
    if (_0x17ada7 > 0.1)
        _0x17ada7 = 0.1;
    if (_0x17ada7 < 0x0 || isNaN(_0x17ada7))
        _0x17ada7 = 0.016;
    if (_0x4047d0) {
        _0x75a2ac(_0x17ada7);
        _0x553d88();
        return;
    }
    if (!_0x22bac7)
        return;
    _0xf7ae2c(_0x17ada7);
    _0x47a966['tick'](_0x577d03);
    _0x553d88();
}
function _0x48b5b0() {
    const _0x307171 = Math['ceil'](_0x285259['MAP']['columns'] * _0x285259['MAP']['tileSize'] / _0x285259['MAP']['chunkSize']);
    const _0x3f026c = Math['ceil'](_0x285259['MAP']['rows'] * _0x285259['MAP']['tileSize'] / _0x285259['MAP']['chunkSize']);
    _0x285259['MAP']['bgChunks'] = [];
    _0x285259['MAP']['fgChunks'] = [];
    _0x285259['MAP']['wallChunks'] = [];
    for (let _0x1cbc5e = 0x0; _0x1cbc5e < _0x3f026c; _0x1cbc5e++) {
        _0x285259['MAP']['bgChunks'][_0x1cbc5e] = [];
        _0x285259['MAP']['fgChunks'][_0x1cbc5e] = [];
        _0x285259['MAP']['wallChunks'][_0x1cbc5e] = [];
        for (let _0x4a7ca4 = 0x0; _0x4a7ca4 < _0x307171; _0x4a7ca4++) {
            const _0x470401 = document['createElement']('canvas');
            _0x470401['width'] = _0x470401['height'] = _0x285259['MAP']['chunkSize'];
            const _0x372124 = document['createElement']('canvas');
            _0x372124['width'] = _0x372124['height'] = _0x285259['MAP']['chunkSize'];
            const _0x5146e0 = document['createElement']('canvas');
            _0x5146e0['width'] = _0x5146e0['height'] = _0x285259['MAP']['chunkSize'];
            _0x285259['MAP']['bgChunks'][_0x1cbc5e][_0x4a7ca4] = _0x470401;
            _0x285259['MAP']['fgChunks'][_0x1cbc5e][_0x4a7ca4] = _0x372124;
            _0x285259['MAP']['wallChunks'][_0x1cbc5e][_0x4a7ca4] = _0x5146e0;
            _0x4e1485(_0x4a7ca4, _0x1cbc5e);
        }
    }
}
function _0x4e1485(_0x3840be, _0x264550) {
    const _0x2d1e14 = _0x285259['MAP']['bgChunks'][_0x264550][_0x3840be]['getContext']('2d', { 'alpha': !![] });
    const _0x3a8290 = _0x285259['MAP']['fgChunks'][_0x264550][_0x3840be]['getContext']('2d', { 'alpha': !![] });
    const _0x109b54 = _0x285259['MAP']['wallChunks'][_0x264550] && _0x285259['MAP']['wallChunks'][_0x264550][_0x3840be] ? _0x285259['MAP']['wallChunks'][_0x264550][_0x3840be]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x2d1e14['imageSmoothingEnabled'] = _0x3a8290['imageSmoothingEnabled'] = ![];
    if (_0x109b54)
        _0x109b54['imageSmoothingEnabled'] = ![];
    _0x2d1e14['clearRect'](0x0, 0x0, _0x285259['MAP']['chunkSize'], _0x285259['MAP']['chunkSize']);
    _0x3a8290['clearRect'](0x0, 0x0, _0x285259['MAP']['chunkSize'], _0x285259['MAP']['chunkSize']);
    if (_0x109b54)
        _0x109b54['clearRect'](0x0, 0x0, _0x285259['MAP']['chunkSize'], _0x285259['MAP']['chunkSize']);
    const _0x26991b = Math['floor'](_0x3840be * _0x285259['MAP']['chunkSize'] / _0x285259['MAP']['tileSize']);
    const _0x4aff4 = Math['ceil']((_0x3840be + 0x1) * _0x285259['MAP']['chunkSize'] / _0x285259['MAP']['tileSize']);
    const _0xbddeef = Math['floor'](_0x264550 * _0x285259['MAP']['chunkSize'] / _0x285259['MAP']['tileSize']);
    const _0xc1fa76 = Math['ceil']((_0x264550 + 0x1) * _0x285259['MAP']['chunkSize'] / _0x285259['MAP']['tileSize']);
    const _0x247474 = 0.5;
    const _0x1443ab = _0x285259['MAP']['tileSize'] - _0x247474 * 0x2;
    _0x285259['MAP']['layers']['forEach'](_0x5f34e0 => {
        const _0x3413f9 = _0x5f34e0['name'] === 'walls';
        const _0x150a0d = _0x5f34e0['name'] === 'trees' ? _0x3a8290 : _0x3413f9 ? _0x109b54 || _0x2d1e14 : _0x2d1e14;
        for (let _0x231b2d = Math['max'](0x0, _0xbddeef); _0x231b2d < Math['min'](_0x285259['MAP']['rows'], _0xc1fa76); _0x231b2d++) {
            for (let _0x332a8f = Math['max'](0x0, _0x26991b); _0x332a8f < Math['min'](_0x285259['MAP']['columns'], _0x4aff4); _0x332a8f++) {
                let _0x38a7b5 = _0x5f34e0['data'][_0x231b2d * _0x285259['MAP']['columns'] + _0x332a8f];
                if (_0x5f34e0['name'] === 'floor2' && _0x285259['MAP']['doors'] && _0x285259['MAP']['doors'][_0x231b2d * _0x285259['MAP']['columns'] + _0x332a8f]) {
                    _0x38a7b5 = 0x2;
                }
                if (_0x38a7b5 > 0x0) {
                    const _0x1501f3 = _0x38a7b5 - 0x1;
                    const _0x552f5b = _0x1501f3 % _0x285259['MAP']['tilesetCols'] * _0x285259['MAP']['tileSize'] + _0x247474;
                    const _0x3063ec = Math['floor'](_0x1501f3 / _0x285259['MAP']['tilesetCols']) * _0x285259['MAP']['tileSize'] + _0x247474;
                    const _0x2a177c = _0x332a8f * _0x285259['MAP']['tileSize'] - _0x3840be * _0x285259['MAP']['chunkSize'];
                    const _0x4ed931 = _0x231b2d * _0x285259['MAP']['tileSize'] - _0x264550 * _0x285259['MAP']['chunkSize'];
                    if (_0x38a7b5 === 0x4) {
                        const _0x4b2bfc = 0x1;
                        const _0x3cd76b = _0x4b2bfc % _0x285259['MAP']['tilesetCols'] * _0x285259['MAP']['tileSize'] + _0x247474;
                        const _0x59e6da = Math['floor'](_0x4b2bfc / _0x285259['MAP']['tilesetCols']) * _0x285259['MAP']['tileSize'] + _0x247474;
                        _0x2d1e14['drawImage'](_0x5b8f9e, _0x3cd76b, _0x59e6da, _0x1443ab, _0x1443ab, _0x2a177c, _0x4ed931, _0x285259['MAP']['tileSize'], _0x285259['MAP']['tileSize']);
                        let _0x15123f = _0x285259['MAP']['doors'] ? _0x285259['MAP']['doors'][_0x231b2d * _0x285259['MAP']['columns'] + _0x332a8f] : null;
                        if (!_0x15123f) {
                            const _0x518334 = _0x285259['MAP']['layers']['find'](_0xc6f0ef => _0xc6f0ef['name'] === 'walls');
                            const _0x2a2f98 = _0x231b2d > 0x0 && _0x518334 && _0x518334['data'][(_0x231b2d - 0x1) * _0x285259['MAP']['columns'] + _0x332a8f] > 0x0;
                            const _0x22fc8d = _0x231b2d < _0x285259['MAP']['rows'] - 0x1 && _0x518334 && _0x518334['data'][(_0x231b2d + 0x1) * _0x285259['MAP']['columns'] + _0x332a8f] > 0x0;
                            const _0x4750c9 = _0x332a8f > 0x0 && _0x518334 && _0x518334['data'][_0x231b2d * _0x285259['MAP']['columns'] + _0x332a8f - 0x1] > 0x0;
                            const _0x383e26 = _0x332a8f < _0x285259['MAP']['columns'] - 0x1 && _0x518334 && _0x518334['data'][_0x231b2d * _0x285259['MAP']['columns'] + _0x332a8f + 0x1] > 0x0;
                            if (_0x4750c9 && _0x383e26)
                                _0x15123f = _0x231b2d < _0x285259['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x2a2f98 && _0x22fc8d)
                                _0x15123f = _0x332a8f < _0x285259['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x454a20 = 0x0;
                        if (_0x15123f === 'bottom')
                            _0x454a20 = Math['PI'] / 0x2;
                        else if (_0x15123f === 'left')
                            _0x454a20 = Math['PI'];
                        else if (_0x15123f === 'top')
                            _0x454a20 = -Math['PI'] / 0x2;
                        else if (_0x15123f === 'right')
                            _0x454a20 = 0x0;
                        if (_0x454a20 !== 0x0) {
                            _0x150a0d['save']();
                            _0x150a0d['translate'](_0x2a177c + _0x285259['MAP']['tileSize'] / 0x2, _0x4ed931 + _0x285259['MAP']['tileSize'] / 0x2);
                            _0x150a0d['rotate'](_0x454a20);
                            _0x150a0d['drawImage'](_0x5b8f9e, _0x552f5b, _0x3063ec, _0x1443ab, _0x1443ab, -_0x285259['MAP']['tileSize'] / 0x2, -_0x285259['MAP']['tileSize'] / 0x2, _0x285259['MAP']['tileSize'], _0x285259['MAP']['tileSize']);
                            _0x150a0d['restore']();
                        } else {
                            _0x150a0d['drawImage'](_0x5b8f9e, _0x552f5b, _0x3063ec, _0x1443ab, _0x1443ab, _0x2a177c, _0x4ed931, _0x285259['MAP']['tileSize'], _0x285259['MAP']['tileSize']);
                        }
                    } else {
                        _0x150a0d['drawImage'](_0x5b8f9e, _0x552f5b, _0x3063ec, _0x1443ab, _0x1443ab, _0x2a177c, _0x4ed931, _0x285259['MAP']['tileSize'], _0x285259['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x1ef8c7() {
    _0x5b8f9e['crossOrigin'] = 'Anonymous';
    _0x5b8f9e['onload'] = () => {
        _0x285259['MAP']['tilesetCols'] = 0x3;
        _0x5712ec();
    };
    _0x5b8f9e['onerror'] = () => {
        _0x285259['MAP']['tilesetCols'] = 0x1;
        _0x5712ec();
    };
    _0x5b8f9e['src'] = 'assets/tilesheet.png';
    _0x1376c7['crossOrigin'] = 'Anonymous';
    _0x1376c7['onload'] = _0x5712ec;
    _0x1376c7['onerror'] = () => {
        _0x5712ec();
    };
    _0x1376c7['src'] = 'assets/center.png';
    _0x50a2a2['crossOrigin'] = 'Anonymous';
    _0x50a2a2['onload'] = _0x5712ec;
    _0x50a2a2['onerror'] = () => {
        _0x5712ec();
    };
    _0x50a2a2['src'] = 'assets/table.png';
}
function _0x5712ec() {
    _0x285259['SYSTEM']['assetsLoaded']++;
    if (_0x285259['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x417abf();
    }
}
function _0x2e42a0(_0x478ffa, _0x56a313) {
    if (!_0x2a30cd || !_0x213e16)
        return;
    const _0xfad09c = _0x478ffa / _0x285259['SYSTEM']['viewScale'] + _0x285259['CAMERA']['x'];
    const _0x133520 = _0x56a313 / _0x285259['SYSTEM']['viewScale'] + _0x285259['CAMERA']['y'];
    const _0x17fa3e = Math['floor'](_0xfad09c / _0x285259['MAP']['tileSize']);
    const _0x3b6174 = Math['floor'](_0x133520 / _0x285259['MAP']['tileSize']);
    if (_0x17fa3e >= 0x0 && _0x17fa3e < _0x285259['MAP']['columns'] && _0x3b6174 >= 0x0 && _0x3b6174 < _0x285259['MAP']['rows'])
        _0x213e16['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x285259['EDITOR']['selectedLayer'],
            'col': _0x17fa3e,
            'row': _0x3b6174,
            'gid': _0x285259['EDITOR']['selectedTileGid']
        }));
}
function _0x4fb013() {
    const _0x5dcb0d = document['getElementById']('palette');
    if (!_0x5dcb0d || _0x5dcb0d['children']['length'] > 0x0)
        return;
    const _0x46b8c6 = 0x40;
    const _0x1db6a9 = _0x5b8f9e;
    const _0x399e54 = document['createElement']('div');
    _0x399e54['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x9687e3 = document['createElement']('canvas');
    _0x9687e3['width'] = 0xc0;
    _0x9687e3['height'] = 0xa0;
    _0x9687e3['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x399e54['appendChild'](_0x9687e3);
    const _0x30ec39 = document['createElement']('div');
    _0x30ec39['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x399e54['appendChild'](_0x30ec39);
    let _0x924e1e = 0x0, _0x97d688 = 0x0;
    let _0x42c7c4 = ![], _0x485a19 = 0x0, _0x4549f2 = 0x0, _0x38cc8d = 0x0, _0xbf15a9 = 0x0;
    function _0x426a92() {
        const _0x3d5390 = _0x9687e3['getContext']('2d');
        _0x3d5390['clearRect'](0x0, 0x0, _0x9687e3['width'], _0x9687e3['height']);
        _0x3d5390['imageSmoothingEnabled'] = ![];
        if (_0x1db6a9['complete'] && _0x1db6a9['naturalWidth'] > 0x0) {
            _0x3d5390['drawImage'](_0x1db6a9, _0x924e1e, _0x97d688, _0x9687e3['width'], _0x9687e3['height'], 0x0, 0x0, _0x9687e3['width'], _0x9687e3['height']);
        }
        _0x3d5390['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x3d5390['lineWidth'] = 0x1;
        const _0x4a64f7 = Math['floor'](_0x924e1e / _0x46b8c6);
        const _0x3d0cde = Math['floor'](_0x97d688 / _0x46b8c6);
        for (let _0x2a966a = _0x4a64f7; _0x2a966a <= _0x4a64f7 + Math['ceil'](_0x9687e3['width'] / _0x46b8c6) + 0x1; _0x2a966a++) {
            const _0x18f68f = _0x2a966a * _0x46b8c6 - _0x924e1e;
            _0x3d5390['beginPath']();
            _0x3d5390['moveTo'](_0x18f68f, 0x0);
            _0x3d5390['lineTo'](_0x18f68f, _0x9687e3['height']);
            _0x3d5390['stroke']();
        }
        for (let _0x27da06 = _0x3d0cde; _0x27da06 <= _0x3d0cde + Math['ceil'](_0x9687e3['height'] / _0x46b8c6) + 0x1; _0x27da06++) {
            const _0x4540da = _0x27da06 * _0x46b8c6 - _0x97d688;
            _0x3d5390['beginPath']();
            _0x3d5390['moveTo'](0x0, _0x4540da);
            _0x3d5390['lineTo'](_0x9687e3['width'], _0x4540da);
            _0x3d5390['stroke']();
        }
    }
    function _0x46ac94() {
        const _0x259c87 = Math['max'](0x1, Math['ceil'](_0x1db6a9['naturalWidth'] / _0x46b8c6));
        const _0x1d47e4 = _0x285259['EDITOR']['selectedTileGid'];
        if (_0x1d47e4 <= 0x0) {
            _0x30ec39['style']['display'] = 'none';
            return;
        }
        const _0x40cec4 = _0x1d47e4 - 0x1;
        const _0x55b7fa = _0x40cec4 % _0x259c87;
        const _0x78f2d4 = Math['floor'](_0x40cec4 / _0x259c87);
        const _0x3704db = _0x55b7fa * _0x46b8c6 - _0x924e1e;
        const _0x3e976e = _0x78f2d4 * _0x46b8c6 - _0x97d688;
        _0x30ec39['style']['display'] = 'block';
        _0x30ec39['style']['left'] = _0x3704db + 'px';
        _0x30ec39['style']['top'] = _0x3e976e + 'px';
    }
    _0x1db6a9['onload'] = () => {
        _0x426a92();
        _0x46ac94();
    };
    if (_0x1db6a9['complete'] && _0x1db6a9['naturalWidth'] > 0x0) {
        _0x426a92();
        _0x46ac94();
    }
    _0x399e54['addEventListener']('mousedown', _0xbcb47b => {
        if (_0xbcb47b['button'] === 0x0) {
            _0x42c7c4 = !![];
            _0x485a19 = _0xbcb47b['clientX'];
            _0x4549f2 = _0xbcb47b['clientY'];
            _0x38cc8d = _0x924e1e;
            _0xbf15a9 = _0x97d688;
            _0x399e54['style']['cursor'] = 'grabbing';
            _0xbcb47b['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x508538 => {
        if (!_0x42c7c4)
            return;
        const _0x33ba7f = _0x485a19 - _0x508538['clientX'];
        const _0x2e958b = _0x4549f2 - _0x508538['clientY'];
        const _0x206df9 = Math['max'](0x0, _0x1db6a9['naturalWidth'] - _0x9687e3['width']);
        const _0x521450 = Math['max'](0x0, _0x1db6a9['naturalHeight'] - _0x9687e3['height']);
        _0x924e1e = Math['max'](0x0, Math['min'](_0x206df9, _0x38cc8d + _0x33ba7f));
        _0x97d688 = Math['max'](0x0, Math['min'](_0x521450, _0xbf15a9 + _0x2e958b));
        _0x426a92();
        _0x46ac94();
    });
    window['addEventListener']('mouseup', _0x39ab17 => {
        if (_0x42c7c4) {
            _0x42c7c4 = ![];
            _0x399e54['style']['cursor'] = 'grab';
        }
    });
    _0x399e54['addEventListener']('click', _0x54ac13 => {
        const _0x41e6f0 = _0x399e54['getBoundingClientRect']();
        const _0x8ce6b5 = _0x54ac13['clientX'] - _0x41e6f0['left'] + _0x924e1e;
        const _0x259366 = _0x54ac13['clientY'] - _0x41e6f0['top'] + _0x97d688;
        const _0x23d13a = Math['max'](0x1, Math['ceil'](_0x1db6a9['naturalWidth'] / _0x46b8c6));
        const _0x3582c9 = Math['floor'](_0x8ce6b5 / _0x46b8c6);
        const _0x4f23f4 = Math['floor'](_0x259366 / _0x46b8c6);
        const _0x350d2f = _0x4f23f4 * _0x23d13a + _0x3582c9 + 0x1;
        _0x285259['EDITOR']['selectedTileGid'] = _0x350d2f;
        _0x46ac94();
    });
    _0x5dcb0d['appendChild'](_0x399e54);
    const _0x229ca2 = document['createElement']('div');
    _0x229ca2['className'] = 'tile-btn\x20eraser-btn';
    _0x229ca2['title'] = 'Eraser\x20(gid\x200)';
    _0x229ca2['onclick'] = () => {
        _0x285259['EDITOR']['selectedTileGid'] = 0x0;
        _0x30ec39['style']['display'] = 'none';
    };
    _0x5dcb0d['appendChild'](_0x229ca2);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x285259['EDITOR']['enabled'] = !_0x285259['EDITOR']['enabled'];
        const _0x502d11 = document['getElementById']('editor-tools');
        if (_0x285259['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x502d11['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x502d11['style']['display'] = 'none';
        }
    });
    const _0x8ba0a2 = document['getElementById']('start-game-btn');
    if (_0x8ba0a2) {
        _0x8ba0a2['addEventListener']('click', () => {
            if (_0x213e16)
                _0x213e16['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x376325 = document['getElementById']('rolelist-toggle-btn');
    if (_0x376325) {
        let _0x47ff34 = 'subalignments';
        _0x376325['addEventListener']('click', () => {
            if (_0x47ff34 === 'subalignments')
                _0x47ff34 = 'precise';
            else if (_0x47ff34 === 'precise')
                _0x47ff34 = 'off';
            else
                _0x47ff34 = 'subalignments';
            _0x376325['innerText'] = 'Role\x20List:\x20' + _0x47ff34['charAt'](0x0)['toUpperCase']() + _0x47ff34['slice'](0x1);
            if (_0x213e16)
                _0x213e16['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x47ff34
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0xb64fb8 => {
        if (_0xb64fb8['id'] === 'editor-toggle-btn' || _0xb64fb8['id'] === 'start-game-btn' || _0xb64fb8['id'] === 'rolelist-toggle-btn')
            return;
        _0xb64fb8['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x4cf059 => _0x4cf059['classList']['remove']('active'));
            _0xb64fb8['classList']['add']('active');
            _0x285259['EDITOR']['selectedLayer'] = _0xb64fb8['dataset']['layer'];
        });
    });
}
function _0x11a147(_0x988cf2) {
    if (_0x213e16)
        _0x213e16['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x988cf2
        }));
}
function _0x4505a8(_0x1683a2) {
    if (_0x213e16)
        _0x213e16['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x1683a2
        }));
}
function _0x279129(_0x4938ad, _0x110ea3, _0x422ba1, _0x4707db) {
    const _0x35ac6b = document['getElementById']('admin-panel');
    if (_0x35ac6b)
        _0x35ac6b['remove']();
    if (_0x35ac6b && _0x35ac6b['dataset']['target'] === String(_0x4938ad))
        return;
    const _0x15f158 = document['createElement']('div');
    _0x15f158['id'] = 'admin-panel';
    _0x15f158['dataset']['target'] = String(_0x4938ad);
    _0x15f158['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x4715d0 = document['createElement']('div');
    _0x4715d0['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x4715d0['textContent'] = _0x110ea3;
    _0x15f158['appendChild'](_0x4715d0);
    const _0x2d0a24 = document['createElement']('button');
    _0x2d0a24['textContent'] = 'Kick';
    _0x2d0a24['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x2d0a24['onmouseenter'] = () => _0x2d0a24['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x2d0a24['onmouseleave'] = () => _0x2d0a24['style']['background'] = 'transparent';
    _0x2d0a24['onclick'] = () => {
        _0x11a147(_0x4938ad);
        _0x15f158['remove']();
    };
    _0x15f158['appendChild'](_0x2d0a24);
    const _0x54181f = document['createElement']('button');
    _0x54181f['textContent'] = 'Ban';
    _0x54181f['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x54181f['onmouseenter'] = () => _0x54181f['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x54181f['onmouseleave'] = () => _0x54181f['style']['background'] = 'transparent';
    _0x54181f['onclick'] = () => {
        _0x4505a8(_0x4938ad);
        _0x15f158['remove']();
    };
    _0x15f158['appendChild'](_0x54181f);
    document['body']['appendChild'](_0x15f158);
    const _0x161138 = _0x15f158['offsetWidth'] || 0x91;
    const _0x5e390a = _0x15f158['offsetHeight'] || 0x50;
    let _0x537923 = _0x422ba1 - _0x161138;
    let _0x40413c = _0x4707db;
    if (_0x537923 < 0x4)
        _0x537923 = _0x422ba1;
    if (_0x40413c + _0x5e390a > window['innerHeight'] - 0x4)
        _0x40413c = window['innerHeight'] - _0x5e390a - 0x4;
    _0x15f158['style']['left'] = _0x537923 + 'px';
    _0x15f158['style']['top'] = _0x40413c + 'px';
    const _0x1a3d2d = _0x348557 => {
        if (!_0x15f158['contains'](_0x348557['target'])) {
            _0x15f158['remove']();
            document['removeEventListener']('mousedown', _0x1a3d2d);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x1a3d2d), 0x0);
}
function _0x393279() {
    const _0xf3f928 = document['getElementById']('leaderboard-list');
    _0xf3f928['innerHTML'] = '';
    const _0x2c1028 = document['createElement']('div');
    _0x2c1028['className'] = 'leaderboard-entry';
    const _0x483b32 = document['createElement']('span');
    _0x483b32['textContent'] = _0x4f238b + (_0x2a30cd ? '\x20[🗝️]' : '');
    if (_0x4a9bbd['has'](_0x22bac7) && !_0x416fe7['isDead']) {
        _0x483b32['style']['color'] = '#cc88ff';
    }
    _0x2c1028['appendChild'](_0x483b32);
    _0xf3f928['appendChild'](_0x2c1028);
    for (const _0x2c35c9 in _0x551f3c) {
        const _0x1e5ad7 = document['createElement']('div');
        _0x1e5ad7['className'] = 'leaderboard-entry';
        const _0x24090e = document['createElement']('span');
        _0x24090e['textContent'] = _0x551f3c[_0x2c35c9]['name'] + (_0x551f3c[_0x2c35c9]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x4a9bbd['has'](parseInt(_0x2c35c9)) && !_0x551f3c[_0x2c35c9]['isDead']) {
            _0x24090e['style']['color'] = '#cc88ff';
        }
        _0x1e5ad7['appendChild'](_0x24090e);
        if (_0x2a30cd && !_0x551f3c[_0x2c35c9]['isOwner']) {
            const _0x4f7372 = _0x551f3c[_0x2c35c9]['id'];
            const _0x586dfd = _0x551f3c[_0x2c35c9]['name'];
            _0x1e5ad7['style']['cursor'] = 'context-menu';
            _0x1e5ad7['addEventListener']('contextmenu', _0x287913 => {
                _0x287913['preventDefault']();
                _0x287913['stopPropagation']();
                _0x279129(_0x4f7372, _0x586dfd, _0x287913['clientX'], _0x287913['clientY']);
            });
        }
        _0xf3f928['appendChild'](_0x1e5ad7);
    }
}
window['addEventListener']('resize', _0x417abf);
function _0x417abf() {
    _0x4e151c['width'] = window['innerWidth'];
    _0x4e151c['height'] = window['innerHeight'];
    _0x285259['SYSTEM']['viewScale'] = Math['max'](_0x4e151c['width'] / _0x59b42a, _0x4e151c['height'] / _0x286351);
    _0x285259['CAMERA']['width'] = _0x4e151c['width'] / _0x285259['SYSTEM']['viewScale'];
    _0x285259['CAMERA']['height'] = _0x4e151c['height'] / _0x285259['SYSTEM']['viewScale'];
    _0xddcf3a['imageSmoothingEnabled'] = ![];
}
function _0xeb6caf(_0x118600) {
    if (_0x118600['ctrlKey'] || _0x118600['metaKey']) {
        if (_0x118600['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x118600['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x118600['code'])) {
            _0x118600['preventDefault']();
            _0x118600['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0xeb6caf, { 'passive': ![] });
window['addEventListener']('keydown', _0xeb6caf, { 'passive': ![] });
window['addEventListener']('keydown', _0x2b10df => {
    const _0x27080a = _0x2b10df['key']['toLowerCase']();
    if (_0x27080a === 'tab') {
        _0x2b10df['preventDefault']();
        const _0x1becb4 = document['getElementById']('will-ui');
        const _0x25d980 = document['getElementById']('will-input');
        if (_0x1becb4['style']['display'] === 'flex') {
            _0x1becb4['style']['display'] = 'none';
            if (_0x213e16)
                _0x213e16['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x25d980['value']
                }));
            _0x25d980['blur']();
        } else {
            _0x1becb4['style']['display'] = 'flex';
            _0x25d980['focus']();
            for (let _0x5020e8 in _0x285259['INPUTS']['keys'])
                _0x285259['INPUTS']['keys'][_0x5020e8] = ![];
        }
        return;
    }
    if (_0x2b10df['key'] === 'Enter') {
        if (_0x4047d0) {
            const _0x34c0e6 = document['getElementById']('play-btn');
            if (_0x34c0e6)
                _0x34c0e6['click']();
            return;
        }
        if (!_0x213e16 || _0x213e16['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x1600c5 = document['getElementById']('chat-ui');
        const _0x16af86 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x16af86) {
            const _0x40d227 = _0x16af86['value']['trim']();
            if (_0x40d227['length'] > 0x0) {
                _0x213e16['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x40d227
                }));
            }
            _0x16af86['value'] = '';
            _0x1600c5['style']['display'] = 'none';
            _0x16af86['blur']();
        } else {
            _0x1600c5['style']['display'] = 'block';
            _0x16af86['focus']();
            for (let _0x38164d in _0x285259['INPUTS']['keys'])
                _0x285259['INPUTS']['keys'][_0x38164d] = ![];
        }
        _0x2b10df['preventDefault']();
        return;
    }
    if (_0x2b10df['key'] === 'Escape') {
        const _0x54adf9 = document['getElementById']('guide-ui');
        if (_0x54adf9 && _0x54adf9['style']['display'] === 'flex') {
            _0x54adf9['style']['display'] = 'none';
            return;
        }
        const _0x38211d = document['getElementById']('ability-ui');
        if (_0x38211d && _0x38211d['style']['display'] === 'block') {
            _0x38211d['style']['display'] = 'none';
            return;
        }
        const _0x59482a = document['getElementById']('settings-panel');
        if (_0x59482a && _0x59482a['style']['display'] === 'block') {
            _0x59482a['style']['display'] = 'none';
            return;
        }
        const _0x228521 = document['getElementById']('mayor-confirm-dialog');
        if (_0x228521 && _0x228521['style']['display'] === 'flex') {
            _0x228521['style']['display'] = 'none';
            return;
        }
        const _0x16794a = document['getElementById']('target-chooser-ui');
        if (_0x16794a && _0x16794a['style']['display'] === 'flex') {
            _0x16794a['style']['display'] = 'none';
            return;
        }
        const _0x38330e = document['getElementById']('chat-ui');
        const _0x43ded3 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x43ded3) {
            _0x43ded3['value'] = '';
            _0x38330e['style']['display'] = 'none';
            _0x43ded3['blur']();
            _0x2b10df['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x285259['INPUTS']['keys']['hasOwnProperty'](_0x27080a))
            _0x285259['INPUTS']['keys'][_0x27080a] = !![];
        if (!_0x213e16 || _0x213e16['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x27080a === 'h' && !_0x2b10df['repeat']) {
            const _0x1931c7 = document['getElementById']('guide-ui');
            if (_0x1931c7) {
                _0x1931c7['style']['display'] = _0x1931c7['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x27080a === 't' && !_0x2b10df['repeat']) {
            if (_0x416fe7['isDead'])
                return;
            if (_0x410446 === 'Mayor') {
                if (_0x4a9bbd['has'](_0x22bac7)) {
                    _0x3675b1('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x47d829 = document['getElementById']('mayor-confirm-dialog');
                if (_0x47d829)
                    _0x47d829['style']['display'] = 'flex';
                return;
            }
            if (_0x285259['GAME_STATE'] === 'NIGHT') {
                if (!_0x285259['NIGHT_ABILITY_OPEN']) {
                    _0x3675b1('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0xb0e9d3 = document['getElementById']('ability-ui');
                if (_0xb0e9d3) {
                    if (_0xb0e9d3['style']['display'] === 'block') {
                        _0xb0e9d3['style']['display'] = 'none';
                    } else {
                        _0x28cffa();
                        _0xb0e9d3['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x285259['GAME_STATE'] === 'DAY_DISCUSS' || _0x285259['GAME_STATE'] === 'DAY_VOTE') {
                _0x3675b1('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x27080a === 'e' && !_0x416fe7['isDead']) {
            const _0x4a63c2 = Date['now']();
            if (!window['_lastDoorSend'] || _0x4a63c2 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x4a63c2;
                _0x213e16['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x347b4e => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x1f8b09 = _0x347b4e['key']['toLowerCase']();
        if (_0x285259['INPUTS']['keys']['hasOwnProperty'](_0x1f8b09))
            _0x285259['INPUTS']['keys'][_0x1f8b09] = ![];
    }
});
window['addEventListener']('mousemove', _0x4bc881 => {
    _0x285259['INPUTS']['mouseX'] = _0x4bc881['clientX'];
    _0x285259['INPUTS']['mouseY'] = _0x4bc881['clientY'];
    if (_0x285259['INPUTS']['isMouseDown'] && _0x285259['EDITOR']['enabled']) {
        _0x2e42a0(_0x4bc881['clientX'], _0x4bc881['clientY']);
    }
});
window['addEventListener']('mousedown', _0x56b519 => {
    if (_0x56b519['target']['closest']('#editor-ui') || _0x56b519['target']['closest']('#leaderboard-ui') || _0x56b519['target']['closest']('#chat-log-ui') || _0x56b519['target']['closest']('#target-chooser-ui') || _0x56b519['target']['closest']('#guide-ui') || _0x56b519['target']['closest']('#role-list-ui') || _0x56b519['target']['closest']('#ability-ui') || _0x56b519['target']['closest']('#settings-panel') || _0x56b519['target']['closest']('#mayor-confirm-dialog') || _0x56b519['target']['closest']('#mobile-action-bar') || _0x56b519['target']['closest']('#mobile-top-bar') || _0x56b519['target']['closest']('#mobile-joystick-zone') || _0x56b519['target']['closest']('#mobile-chat-overlay') || _0x56b519['target']['closest']('#will-ui') || _0x56b519['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x56b519['button'] === 0x0) {
        _0x285259['INPUTS']['isMouseDown'] = !![];
        if (_0x285259['EDITOR']['enabled'])
            _0x2e42a0(_0x56b519['clientX'], _0x56b519['clientY']);
    }
});
window['addEventListener']('mouseup', _0x2c20a8 => {
    _0x285259['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x361856 => {
    if (_0x361856['target']['closest']('#settings-btn'))
        return;
    const _0x240016 = document['getElementById']('leaderboard-list');
    const _0x18dbda = document['getElementById']('leaderboard-toggle');
    if (_0x240016['style']['display'] === 'none') {
        _0x240016['style']['display'] = 'flex';
        _0x18dbda['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x240016['style']['display'] = 'none';
        _0x18dbda['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x401ebc = document['getElementById']('close-target-btn');
if (_0x401ebc) {
    _0x401ebc['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x5e0696 = document['getElementById']('close-guide-btn');
if (_0x5e0696) {
    _0x5e0696['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x58e77a = document['getElementById']('role-list-header');
if (_0x58e77a) {
    _0x58e77a['addEventListener']('click', () => {
        const _0x25f5cf = document['getElementById']('role-list-items');
        const _0x43134a = document['getElementById']('role-list-toggle');
        if (_0x25f5cf['style']['display'] === 'none') {
            _0x25f5cf['style']['display'] = 'flex';
            _0x43134a['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x25f5cf['style']['display'] = 'none';
            _0x43134a['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x411638() {
    const _0x180bd0 = document['getElementById']('mobile-joystick-zone');
    const _0x4f550a = document['getElementById']('mobile-joystick-base');
    const _0x298cf0 = document['getElementById']('mobile-joystick-knob');
    if (_0x180bd0 && _0x4f550a && _0x298cf0) {
        const _0x468798 = 0x3e;
        const _0x1e9ef1 = (_0x344b42, _0x5e0136) => {
            const _0x4d75fa = _0x4f550a['getBoundingClientRect']();
            const _0x1cbf84 = _0x4d75fa['left'] + _0x4d75fa['width'] / 0x2;
            const _0x709c10 = _0x4d75fa['top'] + _0x4d75fa['height'] / 0x2;
            const _0x48dc8a = _0x344b42 - _0x1cbf84;
            const _0x5dff89 = _0x5e0136 - _0x709c10;
            const _0x1c08df = Math['hypot'](_0x48dc8a, _0x5dff89);
            if (_0x1c08df === 0x0) {
                _0x4ba2e1 = 0x0;
                _0x416c37 = 0x0;
                _0x49608f = ![];
                _0x298cf0['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x19adea = Math['min'](_0x1c08df, _0x468798);
            const _0x424dfb = _0x48dc8a / _0x1c08df * _0x19adea;
            const _0x13e542 = _0x5dff89 / _0x1c08df * _0x19adea;
            _0x4ba2e1 = _0x424dfb / _0x468798;
            _0x416c37 = _0x13e542 / _0x468798;
            _0x49608f = _0x1c08df >= _0x468798 * 0.75;
            _0x298cf0['style']['transform'] = 'translate(' + _0x424dfb + 'px,\x20' + _0x13e542 + 'px)';
        };
        const _0xbda2f8 = _0x29f459 => {
            for (let _0x3fa4f5 = 0x0; _0x3fa4f5 < _0x29f459['changedTouches']['length']; _0x3fa4f5++) {
                const _0x2146e5 = _0x29f459['changedTouches'][_0x3fa4f5];
                if (_0x2bf9bb === null) {
                    _0x2bf9bb = _0x2146e5['identifier'];
                    _0x42a051 = !![];
                    _0x1e9ef1(_0x2146e5['clientX'], _0x2146e5['clientY']);
                    break;
                }
            }
        };
        const _0x98f906 = _0x30e98c => {
            for (let _0x58f593 = 0x0; _0x58f593 < _0x30e98c['changedTouches']['length']; _0x58f593++) {
                const _0x18d142 = _0x30e98c['changedTouches'][_0x58f593];
                if (_0x18d142['identifier'] === _0x2bf9bb) {
                    _0x1e9ef1(_0x18d142['clientX'], _0x18d142['clientY']);
                    break;
                }
            }
        };
        const _0x206db9 = _0x3b5532 => {
            for (let _0x42ab85 = 0x0; _0x42ab85 < _0x3b5532['changedTouches']['length']; _0x42ab85++) {
                const _0x4a28e = _0x3b5532['changedTouches'][_0x42ab85];
                if (_0x4a28e['identifier'] === _0x2bf9bb) {
                    _0x2bf9bb = null;
                    _0x42a051 = ![];
                    _0x4ba2e1 = 0x0;
                    _0x416c37 = 0x0;
                    _0x49608f = ![];
                    _0x298cf0['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x180bd0['addEventListener']('touchstart', _0x43472a => {
            _0x43472a['preventDefault']();
            _0xbda2f8(_0x43472a);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x98f906, { 'passive': !![] });
        window['addEventListener']('touchend', _0x206db9, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x206db9, { 'passive': !![] });
    }
    const _0x20e20d = (_0x4aef26, _0x460041) => {
        const _0x1535c5 = _0x4aef26 / _0x285259['SYSTEM']['viewScale'];
        const _0x2a088b = _0x460041 / _0x285259['SYSTEM']['viewScale'];
        const _0x234b20 = _0x416fe7['x'] - _0x285259['CAMERA']['x'] + _0x416fe7['width'] / 0x2;
        const _0x2eecd9 = _0x416fe7['y'] - _0x285259['CAMERA']['y'] + _0x416fe7['height'] / 0x2;
        _0x2bd6e1 = Math['atan2'](_0x2a088b - _0x2eecd9, _0x1535c5 - _0x234b20);
        _0x9e0fe9 = !![];
        _0x285259['INPUTS']['mouseX'] = _0x4aef26;
        _0x285259['INPUTS']['mouseY'] = _0x460041;
    };
    _0x4e151c['addEventListener']('touchstart', _0xc29ff1 => {
        if (_0x4047d0)
            return;
        for (let _0x5a2728 = 0x0; _0x5a2728 < _0xc29ff1['changedTouches']['length']; _0x5a2728++) {
            const _0x514ce8 = _0xc29ff1['changedTouches'][_0x5a2728];
            if (_0x514ce8['identifier'] !== _0x2bf9bb && _0xc57577 === null) {
                _0xc57577 = _0x514ce8['identifier'];
                _0x20e20d(_0x514ce8['clientX'], _0x514ce8['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x4e151c['addEventListener']('touchmove', _0x57369e => {
        if (_0x4047d0)
            return;
        for (let _0x3f6584 = 0x0; _0x3f6584 < _0x57369e['changedTouches']['length']; _0x3f6584++) {
            const _0x84247c = _0x57369e['changedTouches'][_0x3f6584];
            if (_0x84247c['identifier'] === _0xc57577) {
                _0x20e20d(_0x84247c['clientX'], _0x84247c['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x2870af = _0x28a6d5 => {
        for (let _0x4fb8c9 = 0x0; _0x4fb8c9 < _0x28a6d5['changedTouches']['length']; _0x4fb8c9++) {
            const _0x5eab2f = _0x28a6d5['changedTouches'][_0x4fb8c9];
            if (_0x5eab2f['identifier'] === _0xc57577) {
                _0xc57577 = null;
                _0x9e0fe9 = ![];
                break;
            }
        }
    };
    _0x4e151c['addEventListener']('touchend', _0x2870af, { 'passive': !![] });
    _0x4e151c['addEventListener']('touchcancel', _0x2870af, { 'passive': !![] });
    const _0x170bca = document['getElementById']('mob-sprint-btn');
    if (_0x170bca) {
        _0x170bca['addEventListener']('click', _0x25d9cc => {
            _0x25d9cc['stopPropagation']();
            _0x7ce325 = !_0x7ce325;
            _0x170bca['classList']['toggle']('active', _0x7ce325);
        });
    }
    const _0xb2b4fd = document['getElementById']('mob-interact-btn');
    if (_0xb2b4fd) {
        _0xb2b4fd['addEventListener']('click', _0x42b721 => {
            _0x42b721['stopPropagation']();
            if (!_0x416fe7['isDead']) {
                const _0xa0036e = Date['now']();
                if (!window['_lastDoorSend'] || _0xa0036e - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0xa0036e;
                    if (_0x213e16 && _0x213e16['readyState'] === WebSocket['OPEN'])
                        _0x213e16['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x124b6b = document['getElementById']('mob-ability-btn');
    if (_0x124b6b) {
        _0x124b6b['addEventListener']('click', _0x3cf8a7 => {
            _0x3cf8a7['stopPropagation']();
            if (_0x416fe7['isDead'])
                return;
            if (_0x410446 === 'Mayor') {
                if (_0x4a9bbd['has'](_0x22bac7)) {
                    _0x3675b1('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x51bc59 = document['getElementById']('mayor-confirm-dialog');
                if (_0x51bc59)
                    _0x51bc59['style']['display'] = 'flex';
                return;
            }
            if (_0x285259['GAME_STATE'] === 'NIGHT') {
                if (!_0x285259['NIGHT_ABILITY_OPEN']) {
                    _0x3675b1('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x512163 = document['getElementById']('ability-ui');
                if (_0x512163) {
                    if (_0x512163['style']['display'] === 'block') {
                        _0x512163['style']['display'] = 'none';
                    } else {
                        _0x28cffa();
                        _0x512163['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x285259['GAME_STATE'] === 'DAY_DISCUSS' || _0x285259['GAME_STATE'] === 'DAY_VOTE') {
                _0x3675b1('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x31ccf8 = document['getElementById']('mob-will-btn');
    const _0x567070 = document['getElementById']('will-ui');
    const _0xdfd8d = document['getElementById']('will-input');
    const _0x800572 = document['getElementById']('close-will-btn');
    const _0x5bb3e1 = () => {
        if (!_0x567070)
            return;
        if (_0x567070['style']['display'] === 'flex') {
            _0x567070['style']['display'] = 'none';
            if (_0x213e16 && _0x213e16['readyState'] === WebSocket['OPEN'] && _0xdfd8d) {
                _0x213e16['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0xdfd8d['value']
                }));
            }
            if (_0xdfd8d)
                _0xdfd8d['blur']();
        } else {
            _0x567070['style']['display'] = 'flex';
            if (_0xdfd8d)
                _0xdfd8d['focus']();
        }
    };
    if (_0x31ccf8)
        _0x31ccf8['addEventListener']('click', _0x4a645d => {
            _0x4a645d['stopPropagation']();
            _0x5bb3e1();
        });
    if (_0x800572)
        _0x800572['addEventListener']('click', _0x54cf7a => {
            _0x54cf7a['stopPropagation']();
            _0x5bb3e1();
        });
    const _0x15d0b5 = document['getElementById']('mob-chat-btn');
    const _0x3c1da8 = document['getElementById']('mobile-chat-overlay');
    const _0x3848bc = document['getElementById']('mobile-chat-input');
    const _0x1b7c8b = document['getElementById']('mobile-chat-send');
    const _0x545490 = document['getElementById']('mobile-chat-cancel');
    const _0x5379ec = () => {
        if (!_0x3c1da8 || !_0x3848bc)
            return;
        _0x3c1da8['style']['display'] = 'flex';
        _0x3848bc['value'] = '';
        _0x3848bc['focus']();
    };
    const _0x121b75 = () => {
        if (!_0x3c1da8 || !_0x3848bc)
            return;
        _0x3c1da8['style']['display'] = 'none';
        _0x3848bc['blur']();
    };
    const _0x2564b7 = () => {
        if (!_0x3848bc)
            return;
        const _0x1626c1 = _0x3848bc['value']['trim']();
        if (_0x1626c1['length'] > 0x0 && _0x213e16 && _0x213e16['readyState'] === WebSocket['OPEN']) {
            _0x213e16['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x1626c1
            }));
        }
        _0x3848bc['value'] = '';
        _0x121b75();
    };
    if (_0x15d0b5)
        _0x15d0b5['addEventListener']('click', _0x31b4d3 => {
            _0x31b4d3['stopPropagation']();
            _0x5379ec();
        });
    if (_0x1b7c8b)
        _0x1b7c8b['addEventListener']('click', _0x565f4d => {
            _0x565f4d['stopPropagation']();
            _0x2564b7();
        });
    if (_0x545490)
        _0x545490['addEventListener']('click', _0x5260a9 => {
            _0x5260a9['stopPropagation']();
            _0x121b75();
        });
    if (_0x3848bc) {
        _0x3848bc['addEventListener']('keydown', _0x5d1710 => {
            if (_0x5d1710['key'] === 'Enter') {
                _0x5d1710['preventDefault']();
                _0x2564b7();
            } else if (_0x5d1710['key'] === 'Escape') {
                _0x121b75();
            }
        });
    }
    const _0x1d38a6 = document['getElementById']('mob-top-chat');
    if (_0x1d38a6)
        _0x1d38a6['addEventListener']('click', _0x44c0e9 => {
            _0x44c0e9['stopPropagation']();
            _0x5379ec();
        });
    const _0x1d1d8c = document['getElementById']('mob-top-will');
    if (_0x1d1d8c)
        _0x1d1d8c['addEventListener']('click', _0x25beee => {
            _0x25beee['stopPropagation']();
            _0x5bb3e1();
        });
    const _0x43dbf2 = document['getElementById']('mob-top-roles');
    if (_0x43dbf2) {
        _0x43dbf2['addEventListener']('click', _0x32a6bb => {
            _0x32a6bb['stopPropagation']();
            const _0x11df80 = document['getElementById']('role-list-ui');
            const _0x47bf4e = document['getElementById']('leaderboard-ui');
            if (_0x47bf4e)
                _0x47bf4e['style']['display'] = 'none';
            if (_0x11df80)
                _0x11df80['style']['display'] = _0x11df80['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x3be740 = document['getElementById']('mob-top-players');
    if (_0x3be740) {
        _0x3be740['addEventListener']('click', _0x4e67c0 => {
            _0x4e67c0['stopPropagation']();
            const _0x4e1c42 = document['getElementById']('leaderboard-ui');
            const _0x38373a = document['getElementById']('role-list-ui');
            if (_0x38373a)
                _0x38373a['style']['display'] = 'none';
            if (_0x4e1c42)
                _0x4e1c42['style']['display'] = _0x4e1c42['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x52b54a = document['getElementById']('mob-top-help');
    if (_0x52b54a) {
        _0x52b54a['addEventListener']('click', _0xa069a0 => {
            _0xa069a0['stopPropagation']();
            const _0x44d93c = document['getElementById']('guide-ui');
            if (_0x44d93c)
                _0x44d93c['style']['display'] = _0x44d93c['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x4ee67a) {
            _0x4ee67a = !![];
            _0x4d224d();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
