document['addEventListener']('contextmenu', _0x4a6314 => _0x4a6314['preventDefault']());
const _0x2c39b8 = {
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
let _0x3d9250 = '';
function _0xac52c8(_0x13e5ac, _0x8182ac) {
    const _0x560838 = document['getElementById']('role-list-ui');
    const _0x26776d = document['getElementById']('role-list-items');
    if (!_0x560838 || !_0x26776d)
        return;
    if (!_0x8182ac || _0x8182ac === 'off' || !_0x13e5ac || _0x13e5ac['length'] === 0x0) {
        _0x560838['style']['display'] = 'none';
        return;
    }
    const _0x273bce = _0x8182ac + '|' + JSON['stringify'](_0x13e5ac);
    if (_0x273bce === _0x3d9250)
        return;
    _0x3d9250 = _0x273bce;
    const _0xdb02db = document['getElementById']('role-tooltip');
    if (_0xdb02db) {
        _0xdb02db['style']['visibility'] = 'hidden';
        _0xdb02db['style']['opacity'] = '0';
    }
    _0x560838['style']['display'] = 'flex';
    _0x26776d['innerHTML'] = '';
    _0x13e5ac['forEach'](_0x57dc64 => {
        const _0x1cfe95 = document['createElement']('div');
        _0x1cfe95['className'] = 'role-list-entry';
        const _0x2318f3 = _0x57dc64['name']['includes']('Mafia') || _0x57dc64['name'] === 'Skinwalker';
        _0x1cfe95['classList']['add'](_0x2318f3 ? 'mafia' : 'town');
        if (_0x8182ac === 'precise' && _0x57dc64['isDead']) {
            _0x1cfe95['classList']['remove']('town', 'mafia');
            _0x1cfe95['classList']['add']('dead');
            _0x1cfe95['innerHTML'] = '<span>' + _0x57dc64['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x28082e = _0x57dc64['count'] !== undefined && _0x57dc64['count'] !== null ? _0x57dc64['count'] + 'x\x20' : '';
            _0x1cfe95['innerHTML'] = '<span>' + _0x28082e + _0x57dc64['name'] + '</span>';
        }
        if (_0x8182ac === 'subalignments' && _0x2c39b8[_0x57dc64['name']]) {
            _0x1cfe95['style']['cursor'] = 'pointer';
            _0x1cfe95['addEventListener']('mouseenter', () => {
                const _0x575b02 = document['getElementById']('role-tooltip');
                if (!_0x575b02)
                    return;
                const _0x4d4dda = _0x2c39b8[_0x57dc64['name']]['join'](',\x20');
                _0x575b02['innerHTML'] = '';
                const _0x2924b1 = document['createElement']('span');
                _0x2924b1['style']['color'] = '#ffcc00';
                _0x2924b1['textContent'] = _0x57dc64['name'];
                _0x575b02['appendChild'](_0x2924b1);
                _0x575b02['appendChild'](document['createElement']('br'));
                _0x575b02['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x4d4dda));
                const _0x4a11f4 = _0x1cfe95['getBoundingClientRect']();
                _0x575b02['style']['left'] = _0x4a11f4['left'] - 0xeb + 'px';
                _0x575b02['style']['top'] = _0x4a11f4['top'] + 'px';
                _0x575b02['style']['display'] = 'block';
                _0x575b02['style']['visibility'] = 'visible';
                _0x575b02['style']['opacity'] = '1';
            });
            _0x1cfe95['addEventListener']('mouseleave', () => {
                const _0x28fc51 = document['getElementById']('role-tooltip');
                if (_0x28fc51) {
                    _0x28fc51['style']['display'] = 'none';
                    _0x28fc51['style']['visibility'] = 'hidden';
                    _0x28fc51['style']['opacity'] = '0';
                }
            });
        }
        _0x26776d['appendChild'](_0x1cfe95);
    });
}
let _0x1f7396 = null;
let _0x4c4435 = null;
const _0x5a70c5 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x2dce0b = 'Player???';
let _0x12002b = ![];
let _0x1df4eb = {};
let _0x528e3c = null;
let _0x4df395 = 0x0;
let _0x3e3b51 = 0x0;
let _0x1a6424 = new Set();
let _0x128cd0 = ![];
let _0x390477 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x3cfcf6 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x211c92 = ![];
let _0x4c5065 = null;
let _0x55bfc4 = 0x0;
let _0x15fd0d = 0x0;
let _0xdb3645 = ![];
let _0x59660e = ![];
let _0x40d93c = 0x0;
let _0x5afd29 = null;
let _0x4147a4 = ![];
const _0x3e2468 = ((() => {
    const _0x1c6c2a = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x38e1a1 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0xbdfb33 = 0x320;
    const _0x281575 = {};
    const _0x1ecdae = {};
    let _0x3df0b5 = null;
    let _0xdfff1e = _0x38e1a1 === 0x0;
    let _0x5aac74 = ![];
    for (const [_0xfc2f53, _0x58dff2] of Object['entries'](_0x1c6c2a)) {
        const _0x780335 = new Audio(_0x58dff2);
        _0x780335['loop'] = !![];
        _0x780335['volume'] = 0x0;
        _0x780335['preload'] = 'auto';
        _0x281575[_0xfc2f53] = _0x780335;
        _0x1ecdae[_0xfc2f53] = null;
    }
    const _0x101785 = _0x46db60 => Math['min'](0x1, Math['max'](0x0, _0x46db60));
    function _0x1c80d8(_0x15f1b2) {
        if (_0x1ecdae[_0x15f1b2] !== null) {
            cancelAnimationFrame(_0x1ecdae[_0x15f1b2]);
            _0x1ecdae[_0x15f1b2] = null;
        }
    }
    function _0x421794(_0x15d7c1, _0x5bdb20, _0x5ecd7e, _0x408ca2, _0x231198) {
        _0x1c80d8(_0x15d7c1);
        const _0x1e5524 = _0x281575[_0x15d7c1];
        const _0x4a3657 = performance['now']();
        const _0x4c7a6d = _0x1ab34b => {
            const _0x13232b = _0x101785((_0x1ab34b - _0x4a3657) / _0x408ca2);
            const _0x2be2c5 = _0x101785(_0x5bdb20 + (_0x5ecd7e - _0x5bdb20) * _0x13232b);
            _0x1e5524['volume'] = _0xdfff1e ? 0x0 : _0x2be2c5;
            if (_0x13232b < 0x1) {
                _0x1ecdae[_0x15d7c1] = requestAnimationFrame(_0x4c7a6d);
            } else {
                _0x1ecdae[_0x15d7c1] = null;
                _0x1e5524['volume'] = _0xdfff1e ? 0x0 : _0x101785(_0x5ecd7e);
                if (_0x231198)
                    _0x231198();
            }
        };
        _0x1ecdae[_0x15d7c1] = requestAnimationFrame(_0x4c7a6d);
    }
    function _0x40e777(_0x12d5c2) {
        const _0x14b2b6 = _0x12d5c2['play']();
        if (_0x14b2b6 && _0x14b2b6['catch']) {
            _0x14b2b6['catch'](() => {
                if (!_0x5aac74) {
                    const _0x520021 = () => {
                        _0x5aac74 = !![];
                        _0x12d5c2['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x520021);
                        document['removeEventListener']('keydown', _0x520021);
                        document['removeEventListener']('touchstart', _0x520021);
                    };
                    document['addEventListener']('click', _0x520021, { 'once': !![] });
                    document['addEventListener']('keydown', _0x520021, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x520021, { 'once': !![] });
                }
            });
        }
    }
    function _0x138d82(_0xa93229) {
        if (!_0x1c6c2a[_0xa93229])
            return;
        if (_0x3df0b5 === _0xa93229)
            return;
        const _0x37c53a = _0x3df0b5;
        _0x3df0b5 = _0xa93229;
        const _0x5e5929 = _0x281575[_0xa93229];
        _0x1c80d8(_0xa93229);
        _0x5e5929['currentTime'] = 0x0;
        _0x5e5929['volume'] = 0x0;
        _0x40e777(_0x5e5929);
        _0x421794(_0xa93229, 0x0, _0x38e1a1, _0xbdfb33);
        if (_0x37c53a && _0x281575[_0x37c53a]) {
            const _0x5eea02 = _0x37c53a;
            const _0x1e13df = _0x281575[_0x5eea02];
            const _0x5238a8 = _0x101785(_0x1e13df['volume']);
            _0x421794(_0x5eea02, _0x5238a8, 0x0, _0xbdfb33, () => {
                _0x1e13df['pause']();
                _0x1e13df['currentTime'] = 0x0;
            });
        }
    }
    function _0x2067ed(_0x5a0851) {
        _0x38e1a1 = _0x101785(_0x5a0851);
        localStorage['setItem']('musicVolume', String(_0x38e1a1));
        if (!_0xdfff1e && _0x3df0b5 && _0x1ecdae[_0x3df0b5] === null) {
            _0x281575[_0x3df0b5]['volume'] = _0x38e1a1;
        }
    }
    function _0x26cb5a() {
        return _0x38e1a1;
    }
    function _0x384d3b(_0x3e2415) {
        _0xdfff1e = _0x3e2415;
        for (const _0x5886bd of Object['keys'](_0x281575)) {
            if (_0x1ecdae[_0x5886bd] === null) {
                _0x281575[_0x5886bd]['volume'] = _0x3e2415 || _0x5886bd !== _0x3df0b5 ? 0x0 : _0x38e1a1;
            }
        }
    }
    function _0x504c5b() {
        return _0xdfff1e;
    }
    function _0x2588d1(_0x4ed76e) {
        if (_0x4ed76e === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x4ed76e === 'DAY_VOTE')
            return 'voting';
        if (_0x4ed76e === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x33c33a(_0x53ecfc) {
        _0x138d82(_0x2588d1(_0x53ecfc));
    }
    function _0x173e9f(_0x268732) {
        _0x138d82(_0x268732);
    }
    return {
        'play': _0x138d82,
        'onStateChange': _0x33c33a,
        'onSoundEvent': _0x173e9f,
        'setVolume': _0x2067ed,
        'getVolume': _0x26cb5a,
        'setMuted': _0x384d3b,
        'isMuted': _0x504c5b
    };
})());
const _0x2f6052 = ((() => {
    const _0x15c33e = 0x258;
    const _0x510e86 = 0xb4;
    const _0x185a06 = 0x708;
    const _0x5e9bea = 0x140;
    const _0x30938f = 0.18;
    const _0x278a1b = 0.95;
    const _0x3d2285 = new Audio('audio/heartbeat.mp3');
    _0x3d2285['loop'] = ![];
    _0x3d2285['preload'] = 'auto';
    _0x3d2285['volume'] = 0x0;
    let _0x4ff0df = 0x0;
    let _0x44f4d8 = Infinity;
    function _0x551753(_0x84aca2, _0x2a1308, _0x43771e) {
        return Math['min'](_0x43771e, Math['max'](_0x2a1308, _0x84aca2));
    }
    function _0x439cad(_0x3d5968, _0x173ae6, _0x15cd65) {
        return _0x3d5968 + (_0x173ae6 - _0x3d5968) * _0x15cd65;
    }
    function _0x345894(_0x4ef793) {
        if (_0x4f3b37['GAME_STATE'] !== 'NIGHT' || _0xedd3af['isDead'] || _0x528e3c === 'Skinwalker') {
            _0x44f4d8 = Infinity;
            return;
        }
        const _0xc5bf84 = _0xedd3af['x'] + 22.5;
        const _0x4b29de = _0xedd3af['y'] + 22.5;
        let _0x59abdb = Infinity;
        for (const _0x564f9d in _0x1df4eb) {
            const _0x31fa8d = _0x1df4eb[_0x564f9d];
            if (!_0x31fa8d['isDark'] || _0x31fa8d['isDead'])
                continue;
            const _0x4d2eb6 = _0x31fa8d['renderX'] + 22.5 - _0xc5bf84;
            const _0x5da2e0 = _0x31fa8d['renderY'] + 22.5 - _0x4b29de;
            const _0x5a553d = Math['sqrt'](_0x4d2eb6 * _0x4d2eb6 + _0x5da2e0 * _0x5da2e0);
            if (_0x5a553d < _0x59abdb)
                _0x59abdb = _0x5a553d;
        }
        _0x44f4d8 = _0x59abdb;
        if (_0x59abdb > _0x15c33e)
            return;
        const _0x165132 = 0x1 - _0x551753((_0x59abdb - _0x510e86) / (_0x15c33e - _0x510e86), 0x0, 0x1);
        const _0x30ca10 = _0x439cad(_0x185a06, _0x5e9bea, _0x165132);
        const _0x1000ed = _0x439cad(_0x30938f, _0x278a1b, _0x165132);
        if (_0x4ef793 >= _0x4ff0df) {
            _0x3d2285['currentTime'] = 0x0;
            _0x3d2285['volume'] = _0x3e2468['isMuted']() ? 0x0 : _0x551753(_0x1000ed * _0x3e2468['getVolume']() / 0.7, 0x0, 0x1);
            _0x3d2285['play']()['catch'](() => {
            });
            _0x4ff0df = _0x4ef793 + _0x30ca10;
        }
    }
    return { 'tick': _0x345894 };
})());
function _0x4522e3() {
    const _0x519449 = document['getElementById']('mob-ability-btn');
    if (!_0x519449)
        return;
    const _0x197482 = _0x4f3b37['GAME_STATE'] === 'NIGHT' && !_0xedd3af['isDead'];
    const _0x44c70f = _0x528e3c === 'Mayor' && !_0x1a6424['has'](_0x4c4435) && !_0xedd3af['isDead'];
    if (_0x197482 || _0x44c70f) {
        _0x519449['style']['display'] = 'flex';
    } else {
        _0x519449['style']['display'] = 'none';
    }
}
function _0x5bb77c() {
    const _0x3db044 = document['getElementById']('mobile-joystick-zone');
    const _0x37f92a = document['getElementById']('mobile-top-bar');
    const _0x95e114 = document['getElementById']('mobile-action-bar');
    if (!_0x3db044 || !_0x37f92a || !_0x95e114)
        return;
    if (!_0x1f103a && _0x3cfcf6) {
        _0x3db044['style']['display'] = 'flex';
        _0x37f92a['style']['display'] = 'flex';
        _0x95e114['style']['display'] = 'flex';
        _0x4522e3();
    } else {
        _0x3db044['style']['display'] = 'none';
        _0x37f92a['style']['display'] = 'none';
        _0x95e114['style']['display'] = 'none';
    }
}
const _0x532c18 = document['getElementById']('gameCanvas');
const _0x5b368b = _0x532c18['getContext']('2d', { 'alpha': ![] });
const _0x4ef9c3 = 0x500;
const _0x27c9f2 = 0x2d0;
const _0x4f3b37 = {
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
        'width': _0x4ef9c3,
        'height': _0x27c9f2
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
const _0xedd3af = {
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
const _0x353030 = new Image();
const _0xc5a5a6 = new Image();
const _0x41e069 = new Image();
const _0x138160 = new Image();
_0x138160['src'] = 'assets/mayor\x20cosmetic.png';
const _0x4bd11f = [
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
const _0x278c44 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x2aa005 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x2aa005 === 'body1.png' || _0x2aa005 === 'body1')
    _0x2aa005 = 'body01.png';
if (!_0x2aa005['endsWith']('.png'))
    _0x2aa005 += '.png';
let _0x2ec4b2 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x2ec4b2['endsWith']('.png'))
    _0x2ec4b2 += '.png';
let _0x1f103a = !![];
let _0x4d4fd5 = null;
let _0x28b6e6 = null;
let _0x57e360 = 0x3c;
let _0x446e13 = 0x2d;
const _0xb5e431 = {};
const _0x3447dd = new Image();
_0x3447dd['src'] = 'assets/yanito932.png';
_0xb5e431['assets/yanito932.png'] = _0x3447dd;
function _0xa21225(_0x29aa9b) {
    if (!_0xb5e431[_0x29aa9b] || !_0xb5e431[_0x29aa9b]['complete'] && _0xb5e431[_0x29aa9b]['naturalWidth'] === 0x0 && _0xb5e431[_0x29aa9b]['naturalHeight'] === 0x0) {
        const _0x77e48d = new Image();
        _0x77e48d['src'] = _0x29aa9b;
        _0xb5e431[_0x29aa9b] = _0x77e48d;
    }
    return _0xb5e431[_0x29aa9b];
}
function _0x401903(_0x4e46ea, _0x298d96, _0x174857, _0x42d0e9, _0x4f11f0) {
    try {
        const _0x1a3951 = 'assets/' + (_0x298d96 || 'body01.png');
        const _0x407228 = _0xa21225(_0x1a3951);
        if (_0x407228['complete'] && _0x407228['naturalWidth'] > 0x0) {
            _0x4e46ea['drawImage'](_0x407228, -_0x42d0e9 / 0x2, -_0x4f11f0 / 0x2, _0x42d0e9, _0x4f11f0);
        }
        if (_0x174857 === null || _0x174857 === undefined)
            return;
        const _0x3798b6 = 'assets/' + _0x174857;
        const _0x2fec91 = _0xa21225(_0x3798b6);
        if (_0x2fec91['complete'] && _0x2fec91['naturalWidth'] > 0x0) {
            _0x4e46ea['drawImage'](_0x2fec91, -_0x42d0e9 / 0x2, -_0x4f11f0 / 0x2, _0x42d0e9, _0x4f11f0);
        }
    } catch (_0x159cb0) {
    }
}
function _0x550822() {
    const _0x3b65bc = document['getElementById']('body-skin-grid');
    const _0x583bd3 = document['getElementById']('eyes-skin-grid');
    if (!_0x3b65bc || !_0x583bd3)
        return;
    _0x3b65bc['innerHTML'] = '';
    _0x4bd11f['forEach'](_0x19c6e7 => {
        const _0x311bdb = document['createElement']('button');
        _0x311bdb['className'] = 'skin-btn' + (_0x19c6e7 === _0x2aa005 ? '\x20selected' : '');
        const _0xa91851 = document['createElement']('img');
        _0xa91851['src'] = 'assets/' + _0x19c6e7;
        _0x311bdb['appendChild'](_0xa91851);
        _0x311bdb['onclick'] = () => {
            _0x2aa005 = _0x19c6e7;
            localStorage['setItem']('selectedBody', _0x19c6e7);
            _0x3b65bc['querySelectorAll']('.skin-btn')['forEach'](_0xa240d5 => _0xa240d5['classList']['remove']('selected'));
            _0x311bdb['classList']['add']('selected');
        };
        _0x3b65bc['appendChild'](_0x311bdb);
    });
    _0x583bd3['innerHTML'] = '';
    _0x278c44['forEach'](_0x463fee => {
        const _0x2f546f = document['createElement']('button');
        _0x2f546f['className'] = 'skin-btn' + (_0x463fee === _0x2ec4b2 ? '\x20selected' : '');
        const _0x36a1b4 = document['createElement']('img');
        _0x36a1b4['src'] = 'assets/' + _0x463fee;
        _0x2f546f['appendChild'](_0x36a1b4);
        _0x2f546f['onclick'] = () => {
            _0x2ec4b2 = _0x463fee;
            localStorage['setItem']('selectedEyes', _0x463fee);
            _0x583bd3['querySelectorAll']('.skin-btn')['forEach'](_0x1f13a2 => _0x1f13a2['classList']['remove']('selected'));
            _0x2f546f['classList']['add']('selected');
        };
        _0x583bd3['appendChild'](_0x2f546f);
    });
}
function _0x353468(_0x524593) {
    if (!_0x4f3b37['MAP']['columns'] || !_0x4f3b37['CAMERA']['width'])
        return;
    const _0x31418c = Math['max'](0x0, _0x4f3b37['MAP']['columns'] * _0x4f3b37['MAP']['tileSize'] - _0x4f3b37['CAMERA']['width']);
    const _0x385103 = Math['max'](0x0, _0x4f3b37['MAP']['rows'] * _0x4f3b37['MAP']['tileSize'] - _0x4f3b37['CAMERA']['height']);
    if (_0x4d4fd5 === null) {
        _0x4d4fd5 = _0x31418c / 0x2;
        _0x28b6e6 = _0x385103 / 0x2;
    }
    _0x4d4fd5 += _0x57e360 * _0x524593;
    _0x28b6e6 += _0x446e13 * _0x524593;
    if (_0x4d4fd5 <= 0x0) {
        _0x4d4fd5 = 0x0;
        _0x57e360 = Math['abs'](_0x57e360);
    } else if (_0x4d4fd5 >= _0x31418c) {
        _0x4d4fd5 = _0x31418c;
        _0x57e360 = -Math['abs'](_0x57e360);
    }
    if (_0x28b6e6 <= 0x0) {
        _0x28b6e6 = 0x0;
        _0x446e13 = Math['abs'](_0x446e13);
    } else if (_0x28b6e6 >= _0x385103) {
        _0x28b6e6 = _0x385103;
        _0x446e13 = -Math['abs'](_0x446e13);
    }
    _0x4f3b37['CAMERA']['x'] = _0x4d4fd5;
    _0x4f3b37['CAMERA']['y'] = _0x28b6e6;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x11e50f = document['getElementById']('play-btn');
    const _0x25bf1e = document['getElementById']('username-input');
    const _0x1d45e7 = localStorage['getItem']('playerName');
    if (_0x1d45e7 && _0x25bf1e) {
        _0x25bf1e['value'] = _0x1d45e7;
    }
    const _0x86b3b = () => {
        _0x3e2468['play']('wait');
        document['removeEventListener']('click', _0x86b3b);
        document['removeEventListener']('keydown', _0x86b3b);
        document['removeEventListener']('touchstart', _0x86b3b);
    };
    document['addEventListener']('click', _0x86b3b, { 'once': !![] });
    document['addEventListener']('keydown', _0x86b3b, { 'once': !![] });
    document['addEventListener']('touchstart', _0x86b3b, { 'once': !![] });
    if (_0x11e50f) {
        _0x11e50f['addEventListener']('click', () => {
            const _0x2045da = window['_FB'] && window['_FB']['_currentUser'];
            const _0xad1819 = window['_FB'] && window['_FB']['_userData'];
            let _0x28fe57 = !![];
            if (_0x2045da && _0xad1819 && _0xad1819['username']) {
                _0x2dce0b = _0xad1819['username'];
                _0x28fe57 = ![];
            } else {
                const _0x4eeb21 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x2dce0b = 'user' + _0x4eeb21;
                _0x28fe57 = !![];
            }
            const _0x5eb946 = _0x28fe57 ? 'body01.png' : _0x2aa005;
            const _0x4e952f = _0x28fe57 ? 'eyes4.png' : _0x2ec4b2;
            const _0x3b59fa = !_0x28fe57 && _0xad1819 && _0xad1819['photoURL'] ? _0xad1819['photoURL'] : '';
            const _0x42d2ea = !_0x28fe57 && _0x2045da ? _0x2045da['uid'] : '';
            localStorage['setItem']('playerName', _0x2dce0b);
            _0x1f103a = ![];
            _0x4f3b37['CAMERA']['x'] = null;
            _0x4f3b37['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x5153ca = document['getElementById']('chat-log-wrap');
            if (_0x5153ca)
                _0x5153ca['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x2bd02 = document['getElementById']('controls-hint');
            if (_0x2bd02 && !_0x3cfcf6)
                _0x2bd02['style']['display'] = 'block';
            _0x5bb77c();
            if (_0x3cfcf6) {
                const _0x906e10 = document['getElementById']('leaderboard-list');
                const _0xc47bf3 = document['getElementById']('leaderboard-toggle');
                if (_0x906e10) {
                    _0x906e10['style']['display'] = 'none';
                    if (_0xc47bf3)
                        _0xc47bf3['style']['transform'] = 'rotate(180deg)';
                }
                const _0xe7a116 = document['getElementById']('role-list-items');
                const _0x584854 = document['getElementById']('role-list-toggle');
                if (_0xe7a116) {
                    _0xe7a116['style']['display'] = 'none';
                    if (_0x584854)
                        _0x584854['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x20cb3c = JSON['stringify']({
                'type': 'join',
                'name': _0x2dce0b,
                'token': _0x5a70c5,
                'body': _0x5eb946,
                'eyes': _0x4e952f,
                'isGuest': _0x28fe57,
                'uid': _0x42d2ea,
                'photoURL': _0x3b59fa
            });
            if (_0x1f7396 && _0x1f7396['readyState'] === WebSocket['OPEN']) {
                _0x1f7396['send'](_0x20cb3c);
            } else if (!_0x1f7396 || _0x1f7396['readyState'] === WebSocket['CLOSED'] || _0x1f7396['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x20cb3c;
                _0x678159();
            }
        });
    }
    _0x550822();
    _0x678159();
    _0x1dbb57();
    _0x54aa54();
    _0x153130();
});
function _0x54aa54() {
    const _0x2e4290 = document['getElementById']('settings-btn');
    const _0xb9c27f = document['getElementById']('settings-panel');
    const _0x1cdec1 = document['getElementById']('close-settings-btn');
    const _0x421deb = document['getElementById']('setting-mouse-relative');
    if (_0x421deb) {
        _0x421deb['checked'] = _0x390477;
        _0x421deb['addEventListener']('change', () => {
            _0x390477 = _0x421deb['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x390477 ? 'true' : 'false');
        });
    }
    const _0x520efb = document['getElementById']('setting-music-volume');
    const _0x24e494 = document['getElementById']('setting-music-volume-display');
    function _0x4a98d1(_0x1fbcac) {
        const _0x2cafe9 = (_0x1fbcac['value'] - _0x1fbcac['min']) / (_0x1fbcac['max'] - _0x1fbcac['min']) * 0x64;
        _0x1fbcac['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x2cafe9 + '%,\x20#444\x20' + _0x2cafe9 + '%)';
    }
    if (_0x520efb) {
        const _0x2df02b = _0x3e2468['getVolume']();
        const _0x51a1e7 = Math['round'](_0x2df02b * 0x64);
        _0x520efb['value'] = _0x51a1e7;
        if (_0x24e494)
            _0x24e494['textContent'] = _0x51a1e7 + '%';
        _0x4a98d1(_0x520efb);
        _0x520efb['addEventListener']('input', () => {
            const _0x3b6990 = parseInt(_0x520efb['value'], 0xa);
            if (_0x24e494)
                _0x24e494['textContent'] = _0x3b6990 + '%';
            _0x4a98d1(_0x520efb);
            _0x3e2468['setVolume'](_0x3b6990 / 0x64);
            _0x3e2468['setMuted'](_0x3b6990 === 0x0);
        });
    }
    if (_0x2e4290 && _0xb9c27f) {
        _0x2e4290['addEventListener']('click', _0x20283a => {
            _0x20283a['stopPropagation']();
            _0xb9c27f['style']['display'] = _0xb9c27f['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x1cdec1 && _0xb9c27f) {
        _0x1cdec1['addEventListener']('click', () => {
            _0xb9c27f['style']['display'] = 'none';
        });
    }
    const _0x2a73a0 = document['getElementById']('mayor-confirm-yes');
    const _0xfd035f = document['getElementById']('mayor-confirm-no');
    const _0x28af92 = document['getElementById']('mayor-confirm-dialog');
    if (_0x2a73a0 && _0x28af92) {
        _0x2a73a0['addEventListener']('click', () => {
            if (_0x1f7396 && _0x1f7396['readyState'] === WebSocket['OPEN']) {
                _0x1f7396['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x28af92['style']['display'] = 'none';
        });
    }
    if (_0xfd035f && _0x28af92) {
        _0xfd035f['addEventListener']('click', () => {
            _0x28af92['style']['display'] = 'none';
        });
    }
    const _0x108bea = document['getElementById']('close-ability-btn');
    if (_0x108bea) {
        _0x108bea['addEventListener']('click', () => {
            const _0x340283 = document['getElementById']('ability-ui');
            if (_0x340283)
                _0x340283['style']['display'] = 'none';
        });
    }
}
let _0x194650 = '';
function _0x3206ba(_0x52abbe) {
    const _0x41eaf7 = document['getElementById']('vote-tally-panel');
    const _0x29e661 = document['getElementById']('vote-tally-list');
    if (!_0x41eaf7 || !_0x29e661)
        return;
    if (_0x52abbe['state'] !== 'DAY_VOTE') {
        _0x41eaf7['style']['display'] = 'none';
        _0x194650 = '';
        return;
    }
    _0x41eaf7['style']['display'] = 'block';
    const _0xb6b38a = {};
    for (const _0x4a132e in _0x1df4eb) {
        if (!_0x1df4eb[_0x4a132e]['isDead'])
            _0xb6b38a[_0x4a132e] = 0x0;
    }
    if (_0x4c4435 && !_0xedd3af['isDead'])
        _0xb6b38a[_0x4c4435] = 0x0;
    const _0x3cfa47 = _0x52abbe['votes'] || {};
    for (const _0x1eaad8 in _0x3cfa47) {
        const _0xceb708 = _0x3cfa47[_0x1eaad8];
        const _0x57d3a5 = _0x52abbe['mayorRevealed'] && _0x52abbe['mayorRevealed'][_0x1eaad8] ? 0x2 : 0x1;
        _0xb6b38a[_0xceb708] = (_0xb6b38a[_0xceb708] || 0x0) + _0x57d3a5;
    }
    let _0x2813a3 = 0x0;
    const _0x55d50e = _0x52abbe['skips'] || {};
    for (const _0x529e84 in _0x55d50e) {
        _0x2813a3 += Number(_0x55d50e[_0x529e84]) || 0x1;
    }
    const _0x4abfb9 = JSON['stringify'](_0xb6b38a) + '_' + _0x2813a3 + '_' + _0xedd3af['isDead'];
    if (_0x4abfb9 === _0x194650)
        return;
    _0x194650 = _0x4abfb9;
    _0x29e661['innerHTML'] = '';
    for (const _0x560dbc in _0xb6b38a) {
        const _0x4e753f = parseInt(_0x560dbc);
        const _0x575993 = _0x4e753f === _0x4c4435 ? _0x2dce0b : _0x1df4eb[_0x560dbc] ? _0x1df4eb[_0x560dbc]['name'] : 'Player\x20' + _0x560dbc;
        const _0x53dccc = document['createElement']('div');
        _0x53dccc['className'] = 'vote-tally-entry';
        const _0x1a5159 = document['createElement']('span');
        _0x1a5159['textContent'] = _0x575993;
        const _0x59ae82 = document['createElement']('span');
        _0x59ae82['className'] = 'vote-count';
        _0x59ae82['textContent'] = _0xb6b38a[_0x560dbc] + '\x20vote' + (_0xb6b38a[_0x560dbc] === 0x1 ? '' : 's');
        _0x53dccc['appendChild'](_0x1a5159);
        _0x53dccc['appendChild'](_0x59ae82);
        if (_0x4e753f !== _0x4c4435 && !_0xedd3af['isDead']) {
            _0x53dccc['style']['cursor'] = 'pointer';
            _0x53dccc['title'] = 'Vote\x20for\x20' + _0x575993;
            _0x53dccc['addEventListener']('click', _0x57ab7e => {
                _0x57ab7e['stopPropagation']();
                if (_0x1f7396 && _0x1f7396['readyState'] === WebSocket['OPEN']) {
                    _0x1f7396['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x575993
                    }));
                }
            });
        }
        _0x29e661['appendChild'](_0x53dccc);
    }
    const _0x5ce750 = document['createElement']('div');
    _0x5ce750['className'] = 'vote-tally-skip';
    _0x5ce750['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x2813a3 + '</span>';
    if (!_0xedd3af['isDead']) {
        _0x5ce750['style']['cursor'] = 'pointer';
        _0x5ce750['title'] = 'Click\x20to\x20skip\x20vote';
        _0x5ce750['addEventListener']('click', _0x5c3f97 => {
            _0x5c3f97['stopPropagation']();
            if (_0x1f7396 && _0x1f7396['readyState'] === WebSocket['OPEN']) {
                _0x1f7396['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x29e661['appendChild'](_0x5ce750);
}
let _0x23929a = null;
let _0x3506c7 = null;
let _0x44f69d = null;
function _0x4109af() {
    if (_0x1f7396 && _0x1f7396['readyState'] === WebSocket['OPEN']) {
        _0x1f7396['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x23929a,
            'abilityTarget': _0x3506c7,
            'killTarget': _0x44f69d
        }));
    }
}
function _0x1533d0() {
    const _0x2cff23 = document['getElementById']('ability-ui-body');
    if (!_0x2cff23)
        return;
    _0x2cff23['innerHTML'] = '';
    if (_0x528e3c === 'Celebrity' || _0x528e3c === 'Mayor') {
        const _0x32ee8b = document['createElement']('div');
        _0x32ee8b['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x32ee8b['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x2cff23['appendChild'](_0x32ee8b);
        return;
    }
    if (_0x528e3c === 'Skinwalker') {
        const _0x1678e5 = document['createElement']('div');
        _0x1678e5['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x1678e5['innerText'] = 'Transform\x20into:';
        _0x2cff23['appendChild'](_0x1678e5);
        const _0xe3a16 = document['createElement']('div');
        _0xe3a16['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x2de844 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x590a8b = _0x4e6dd7 => {
            if (!_0x4f3b37['ROLE_LIST_RAW'] || _0x4f3b37['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x4f3b37['ROLE_LIST_RAW']['some'](_0x11215f => {
                if (_0x11215f['name'] === _0x4e6dd7)
                    return !_0x11215f['isDead'];
                if (_0x2c39b8[_0x11215f['name']] && _0x2c39b8[_0x11215f['name']]['includes'](_0x4e6dd7))
                    return !![];
                return ![];
            });
        };
        const _0x521afb = [
            'None',
            ..._0x2de844['filter'](_0x590a8b)
        ];
        _0x521afb['forEach'](_0x3d6ef4 => {
            const _0x556902 = document['createElement']('button');
            _0x556902['className'] = 'layer-btn';
            _0x556902['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x556902['innerText'] = _0x3d6ef4;
            const _0x5ec691 = _0x3d6ef4 === 'None' && !_0x23929a || _0x23929a === _0x3d6ef4;
            if (_0x5ec691)
                _0x556902['classList']['add']('active');
            _0x556902['onclick'] = () => {
                _0x23929a = _0x3d6ef4 === 'None' ? null : _0x3d6ef4;
                _0x4109af();
                _0x1533d0();
            };
            _0xe3a16['appendChild'](_0x556902);
        });
        _0x2cff23['appendChild'](_0xe3a16);
        if (_0x590a8b('Vigilante')) {
            const _0x9cff5c = document['createElement']('div');
            _0x9cff5c['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x9cff5c['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x2cff23['appendChild'](_0x9cff5c);
        }
        if (_0x23929a === 'Vigilante') {
            const _0x598b34 = document['createElement']('div');
            _0x598b34['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x598b34['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x2cff23['appendChild'](_0x598b34);
        } else if (_0x23929a && _0x23929a !== 'Celebrity') {
            const _0x3d8b56 = document['createElement']('div');
            _0x3d8b56['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x3d8b56['innerText'] = 'Use\x20' + _0x23929a + '\x20ability\x20on:';
            _0x2cff23['appendChild'](_0x3d8b56);
            const _0x4acde0 = document['createElement']('div');
            _0x4acde0['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x23983d = document['createElement']('button');
            _0x23983d['className'] = 'layer-btn';
            _0x23983d['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x23983d['innerText'] = 'No\x20one';
            if (!_0x3506c7)
                _0x23983d['classList']['add']('active');
            _0x23983d['onclick'] = () => {
                _0x3506c7 = null;
                _0x4109af();
                _0x1533d0();
            };
            _0x4acde0['appendChild'](_0x23983d);
            for (const _0x5985d4 in _0x1df4eb) {
                const _0x2e9e01 = _0x1df4eb[_0x5985d4];
                if (_0x2e9e01['isDead'])
                    continue;
                const _0x143f60 = document['createElement']('button');
                _0x143f60['className'] = 'layer-btn';
                _0x143f60['innerText'] = _0x2e9e01['name'];
                if (_0x3506c7 === parseInt(_0x5985d4))
                    _0x143f60['classList']['add']('active');
                _0x143f60['onclick'] = () => {
                    _0x3506c7 = parseInt(_0x5985d4);
                    _0x4109af();
                    _0x1533d0();
                };
                _0x4acde0['appendChild'](_0x143f60);
            }
            _0x2cff23['appendChild'](_0x4acde0);
        }
        const _0x1d29b9 = document['createElement']('div');
        _0x1d29b9['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x1d29b9['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x2cff23['appendChild'](_0x1d29b9);
        const _0x405202 = document['createElement']('div');
        _0x405202['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x3a4da5 = document['createElement']('button');
        _0x3a4da5['className'] = 'layer-btn';
        _0x3a4da5['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x3a4da5['innerText'] = 'No\x20one';
        if (!_0x44f69d && !_0x4f3b37['CURRENT_TARGET'])
            _0x3a4da5['classList']['add']('active');
        _0x3a4da5['onclick'] = () => {
            _0x44f69d = null;
            _0x4f3b37['CURRENT_TARGET'] = null;
            _0x4109af();
            _0x1533d0();
        };
        _0x405202['appendChild'](_0x3a4da5);
        for (const _0x5bc689 in _0x1df4eb) {
            const _0x2473e6 = _0x1df4eb[_0x5bc689];
            if (_0x2473e6['isDead'])
                continue;
            const _0x29f7cb = document['createElement']('button');
            _0x29f7cb['className'] = 'layer-btn';
            _0x29f7cb['innerText'] = _0x2473e6['name'];
            if (_0x44f69d === parseInt(_0x5bc689) || _0x4f3b37['CURRENT_TARGET'] === parseInt(_0x5bc689))
                _0x29f7cb['classList']['add']('active');
            _0x29f7cb['onclick'] = () => {
                _0x44f69d = parseInt(_0x5bc689);
                _0x4f3b37['CURRENT_TARGET'] = parseInt(_0x5bc689);
                _0x4109af();
                _0x1533d0();
            };
            _0x405202['appendChild'](_0x29f7cb);
        }
        _0x2cff23['appendChild'](_0x405202);
        return;
    }
    let _0x263675 = '';
    let _0x3fe46e = ![];
    if (_0x528e3c === 'Doctor') {
        _0x263675 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x3fe46e = !![];
    } else if (_0x528e3c === 'Investigator') {
        _0x263675 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x528e3c === 'Tracker') {
        _0x263675 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x528e3c === 'Archer') {
        _0x263675 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x528e3c === 'Escort') {
        _0x263675 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x528e3c === 'Vigilante') {
        _0x263675 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x3cd281 = document['createElement']('div');
    _0x3cd281['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x3cd281['innerText'] = _0x263675;
    _0x2cff23['appendChild'](_0x3cd281);
    const _0x37d0a6 = document['createElement']('div');
    _0x37d0a6['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x238a3c = document['createElement']('button');
    _0x238a3c['className'] = 'layer-btn';
    _0x238a3c['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x238a3c['innerText'] = 'No\x20one';
    if (_0x4f3b37['CURRENT_TARGET'] === null)
        _0x238a3c['classList']['add']('active');
    _0x238a3c['onclick'] = () => {
        _0x4f3b37['CURRENT_TARGET'] = null;
        if (_0x1f7396 && _0x1f7396['readyState'] === WebSocket['OPEN']) {
            _0x1f7396['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x1533d0();
    };
    _0x37d0a6['appendChild'](_0x238a3c);
    for (const _0x27c19a in _0x1df4eb) {
        const _0x55aa85 = _0x1df4eb[_0x27c19a];
        if (_0x55aa85['isDead'])
            continue;
        const _0x405e64 = document['createElement']('button');
        _0x405e64['className'] = 'layer-btn';
        _0x405e64['innerText'] = _0x55aa85['name'];
        if (_0x4f3b37['CURRENT_TARGET'] === parseInt(_0x27c19a))
            _0x405e64['classList']['add']('active');
        _0x405e64['onclick'] = () => {
            _0x4f3b37['CURRENT_TARGET'] = parseInt(_0x27c19a);
            if (_0x1f7396 && _0x1f7396['readyState'] === WebSocket['OPEN']) {
                _0x1f7396['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x27c19a)
                }));
            }
            _0x1533d0();
        };
        _0x37d0a6['appendChild'](_0x405e64);
    }
    if (_0x3fe46e && !_0xedd3af['isDead']) {
        const _0x55b8c3 = document['createElement']('button');
        _0x55b8c3['className'] = 'layer-btn';
        _0x55b8c3['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x55b8c3['innerText'] = _0x2dce0b + '\x20(Self)';
        if (_0x4f3b37['CURRENT_TARGET'] === _0x4c4435)
            _0x55b8c3['classList']['add']('active');
        _0x55b8c3['onclick'] = () => {
            _0x4f3b37['CURRENT_TARGET'] = _0x4c4435;
            if (_0x1f7396 && _0x1f7396['readyState'] === WebSocket['OPEN']) {
                _0x1f7396['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x4c4435
                }));
            }
            _0x1533d0();
        };
        _0x37d0a6['appendChild'](_0x55b8c3);
    }
    _0x2cff23['appendChild'](_0x37d0a6);
}
function _0x678159() {
    if (_0x1f7396 && (_0x1f7396['readyState'] === WebSocket['OPEN'] || _0x1f7396['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x4ab3b3 = new URLSearchParams();
    if (_0x5a70c5)
        _0x4ab3b3['set']('token', _0x5a70c5);
    _0x4ab3b3['set']('ngrok-skip-browser-warning', 'true');
    const _0x5757f6 = 'wss://prison-rankings-inspector-terry.trycloudflare.com';
    const _0x2056d0 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x5757f6;
    const _0x13583a = _0x2056d0 + '/?' + _0x4ab3b3['toString']();
    _0x1f7396 = new WebSocket(_0x13583a);
    _0x1f7396['onopen'] = function () {
        if (!_0x1f103a && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x1803e8 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x1c6de2 = window['_FB'] && window['_FB']['_userData'];
                const _0x201998 = !(_0x1803e8 && _0x1c6de2 && _0x1c6de2['username']);
                const _0x361cf2 = _0x201998 ? 'body01.png' : _0x2aa005;
                const _0x481af8 = _0x201998 ? 'eyes4.png' : _0x2ec4b2;
                const _0x3382eb = !_0x201998 && _0x1c6de2 && _0x1c6de2['photoURL'] ? _0x1c6de2['photoURL'] : '';
                const _0x5badbe = !_0x201998 && _0x1803e8 ? _0x1803e8['uid'] : '';
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x2dce0b,
                    'token': _0x5a70c5,
                    'body': _0x361cf2,
                    'eyes': _0x481af8,
                    'isGuest': _0x201998,
                    'uid': _0x5badbe,
                    'photoURL': _0x3382eb
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x1f7396 && _0x1f7396['readyState'] === WebSocket['OPEN']) {
            _0x1f7396['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x1f7396['onclose'] = _0x7ed3c3 => {
        if (_0x7ed3c3['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x7ed3c3['code'] === 0xfa2 || _0x7ed3c3['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x516195 = document['getElementById']('disconnect-overlay');
        if (!_0x516195) {
            _0x516195 = document['createElement']('div');
            _0x516195['id'] = 'disconnect-overlay';
            _0x516195['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x516195['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x516195);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x1f7396['onmessage'] = _0x546e7b => {
        const _0x59e86e = JSON['parse'](_0x546e7b['data']);
        if (_0x59e86e['type'] === 'map_data') {
            _0x4f3b37['MAP']['tileSize'] = _0x59e86e['map']['tileSize'];
            _0x4f3b37['MAP']['columns'] = _0x59e86e['map']['columns'];
            _0x4f3b37['MAP']['rows'] = _0x59e86e['map']['rows'];
            _0x4f3b37['MAP']['layers'] = _0x59e86e['map']['layers'];
            if (_0x59e86e['map']['doors']) {
                _0x4f3b37['MAP']['doors'] = _0x59e86e['map']['doors'];
                const _0x5a89a3 = _0x4f3b37['MAP']['layers']['find'](_0x5078f3 => _0x5078f3['name'] === 'floor2');
                if (_0x5a89a3) {
                    for (const _0x302eae in _0x4f3b37['MAP']['doors']) {
                        _0x5a89a3['data'][parseInt(_0x302eae)] = 0x2;
                    }
                }
            }
            if (_0x59e86e['entities'])
                _0x4f3b37['ENTITIES'] = _0x59e86e['entities'];
            _0x45e302();
            _0x4f3b37['SYSTEM']['isReady'] = !![];
            _0x5725e3();
            if (!_0x4f3b37['SYSTEM']['_gameLoopRunning']) {
                _0x4f3b37['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x4a0e25);
            }
            return;
        }
        if (_0x59e86e['type'] === 'init') {
            _0x4c4435 = _0x59e86e['id'];
            _0x1f103a = ![];
            _0x5bb77c();
            if (_0x3cfcf6) {
                const _0x4cbaa0 = document['getElementById']('leaderboard-list');
                const _0x195eb9 = document['getElementById']('leaderboard-toggle');
                if (_0x4cbaa0) {
                    _0x4cbaa0['style']['display'] = 'none';
                    if (_0x195eb9)
                        _0x195eb9['style']['transform'] = 'rotate(180deg)';
                }
                const _0x199593 = document['getElementById']('role-list-items');
                const _0x19b403 = document['getElementById']('role-list-toggle');
                if (_0x199593) {
                    _0x199593['style']['display'] = 'none';
                    if (_0x19b403)
                        _0x19b403['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x12002b = _0x59e86e['isOwner'] || ![];
            _0x2dce0b = _0x59e86e['name'] || _0x2dce0b;
            _0x4f3b37['MAP']['tileSize'] = _0x59e86e['map']['tileSize'];
            _0x4f3b37['MAP']['columns'] = _0x59e86e['map']['columns'];
            _0x4f3b37['MAP']['rows'] = _0x59e86e['map']['rows'];
            _0x4f3b37['MAP']['layers'] = _0x59e86e['map']['layers'];
            if (_0x59e86e['map']['doors']) {
                _0x4f3b37['MAP']['doors'] = _0x59e86e['map']['doors'];
                const _0x200902 = _0x4f3b37['MAP']['layers']['find'](_0x5aa60f => _0x5aa60f['name'] === 'floor2');
                if (_0x200902) {
                    for (const _0x30de1d in _0x4f3b37['MAP']['doors']) {
                        _0x200902['data'][parseInt(_0x30de1d)] = 0x2;
                    }
                }
            }
            if (_0x59e86e['entities'])
                _0x4f3b37['ENTITIES'] = _0x59e86e['entities'];
            _0x45e302();
            _0xedd3af['x'] = _0x4f3b37['MAP']['columns'] * _0x4f3b37['MAP']['tileSize'] / 0x2;
            _0xedd3af['y'] = _0x4f3b37['MAP']['rows'] * _0x4f3b37['MAP']['tileSize'] / 0x2;
            _0x4f3b37['CAMERA']['x'] = _0xedd3af['x'] + _0xedd3af['width'] / 0x2 - _0x4f3b37['CAMERA']['width'] / 0x2;
            _0x4f3b37['CAMERA']['y'] = _0xedd3af['y'] + _0xedd3af['height'] / 0x2 - _0x4f3b37['CAMERA']['height'] / 0x2;
            if (_0x12002b) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x1a70b2();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x4f3b37['SYSTEM']['lastTime'] = performance['now']();
            _0x4f3b37['SYSTEM']['isReady'] = !![];
            _0x1880c1();
            if (!_0x4f3b37['SYSTEM']['_gameLoopRunning']) {
                _0x4f3b37['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x4a0e25);
            }
            return;
        } else if (_0x59e86e['type'] === 'state') {
            const _0x3331fd = {};
            for (const _0x4a636c in _0x59e86e['players']) {
                if (parseInt(_0x4a636c) === _0x4c4435)
                    continue;
                const _0x37d282 = _0x59e86e['players'][_0x4a636c];
                const _0x3f052c = _0x1df4eb[_0x4a636c];
                if (_0x3f052c) {
                    const _0x359294 = _0x37d282['x'] - _0x3f052c['renderX'];
                    const _0x431ad9 = _0x37d282['y'] - _0x3f052c['renderY'];
                    const _0x1551d4 = _0x359294 * _0x359294 + _0x431ad9 * _0x431ad9 > 0x78 * 0x78;
                    Object['assign'](_0x3f052c, _0x37d282);
                    if (_0x1551d4) {
                        _0x3f052c['renderX'] = _0x37d282['x'];
                        _0x3f052c['renderY'] = _0x37d282['y'];
                    }
                    _0x3331fd[_0x4a636c] = _0x3f052c;
                } else {
                    _0x3331fd[_0x4a636c] = {
                        ..._0x37d282,
                        'renderX': _0x37d282['x'],
                        'renderY': _0x37d282['y'],
                        'renderAngle': _0x37d282['angle'] || 0x0
                    };
                }
            }
            _0x1df4eb = _0x3331fd;
            _0x290e49();
            if (_0x59e86e['players'][_0x4c4435]) {
                const _0x513819 = _0x59e86e['players'][_0x4c4435];
                _0xedd3af['chats'] = _0x513819['chats'] || [];
                _0xedd3af['isDead'] = _0x513819['isDead'];
                if (_0x513819['name'])
                    _0x2dce0b = _0x513819['name'];
                _0x1880c1();
                const _0x48e151 = Math['hypot'](_0x513819['x'] - _0xedd3af['x'], _0x513819['y'] - _0xedd3af['y']);
                if (_0x48e151 > 0xfa) {
                    _0xedd3af['x'] = _0x513819['x'];
                    _0xedd3af['y'] = _0x513819['y'];
                } else if (_0x48e151 > 0x50) {
                    _0xedd3af['x'] += (_0x513819['x'] - _0xedd3af['x']) * 0.06;
                    _0xedd3af['y'] += (_0x513819['y'] - _0xedd3af['y']) * 0.06;
                }
            }
            if (_0x59e86e['entities'])
                _0x4f3b37['ENTITIES'] = _0x59e86e['entities'];
            if (_0x59e86e['game']) {
                _0x4f3b37['GAME_STATE'] = _0x59e86e['game']['state'];
                _0x4f3b37['NIGHT_ABILITY_OPEN'] = _0x59e86e['game']['nightAbilityOpen'];
                if (_0x59e86e['game']['mayorRevealed']) {
                    for (const _0x1b3afd in _0x59e86e['game']['mayorRevealed']) {
                        _0x1a6424['add'](parseInt(_0x1b3afd));
                    }
                }
                if (_0x4f3b37['LAST_STATE'] !== _0x4f3b37['GAME_STATE']) {
                    if (_0x4f3b37['GAME_STATE'] !== 'NIGHT') {
                        _0x4f3b37['CURRENT_TARGET'] = null;
                        _0x23929a = null;
                        _0x3506c7 = null;
                        _0x44f69d = null;
                        const _0x396c95 = document['getElementById']('ability-ui');
                        if (_0x396c95)
                            _0x396c95['style']['display'] = 'none';
                    }
                    if (_0x4f3b37['GAME_STATE'] === 'NIGHT') {
                        _0xedd3af['chats'] = [];
                        for (const _0x3c651f in _0x1df4eb) {
                            _0x1df4eb[_0x3c651f]['chats'] = [];
                        }
                    }
                    _0x4f3b37['LAST_STATE'] = _0x4f3b37['GAME_STATE'];
                    _0x4522e3();
                    _0x3e2468['onStateChange'](_0x4f3b37['GAME_STATE'], _0x59e86e['game']['nightAbilityOpen']);
                }
                const _0x2c8938 = document['getElementById']('phase-ui');
                if (_0x2c8938) {
                    if (_0x59e86e['game']['state'] === 'LOBBY') {
                        _0x2c8938['style']['display'] = 'none';
                    } else {
                        _0x2c8938['style']['display'] = 'block';
                    }
                    let _0x19faf9 = _0x59e86e['game']['state']['replace']('_', '\x20');
                    if (_0x59e86e['game']['state'] === 'DAY_DISCUSS') {
                        _0x19faf9 = 'DAY\x20' + (_0x59e86e['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x59e86e['game']['timer'] + 's';
                    } else if (_0x59e86e['game']['state'] === 'DAY_VOTE') {
                        _0x19faf9 = 'DAY\x20' + (_0x59e86e['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x59e86e['game']['timer'] + 's';
                    } else if (_0x59e86e['game']['state'] === 'NIGHT') {
                        const _0x214a1e = _0x59e86e['game']['dayCount'] || 0x1;
                        if (_0x59e86e['game']['nightAbilityOpen']) {
                            _0x19faf9 = 'NIGHT\x20' + _0x214a1e + '\x20ABILITY\x20PHASE';
                            const _0x42b0cf = _0x59e86e['game']['abilityTimer'] !== undefined ? _0x59e86e['game']['abilityTimer'] : _0x59e86e['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x42b0cf + 's';
                        } else {
                            _0x19faf9 = 'NIGHT\x20' + _0x214a1e;
                            document['getElementById']('phase-timer')['innerText'] = _0x59e86e['game']['timer'] + 's';
                        }
                    }
                    if (_0x59e86e['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x19faf9;
                    }
                }
                if (_0x59e86e['game']['state'] === 'NIGHT') {
                    const _0x526f4f = document['getElementById']('ability-timer-label');
                    if (_0x526f4f) {
                        const _0x428b94 = _0x59e86e['game']['abilityTimer'] !== undefined ? _0x59e86e['game']['abilityTimer'] : _0x59e86e['game']['timer'];
                        _0x526f4f['innerText'] = _0x59e86e['game']['nightAbilityOpen'] ? _0x428b94 + 's' : '';
                    }
                    if (_0x59e86e['game']['nightAbilityOpen'] && !_0x128cd0 && !_0xedd3af['isDead']) {
                        _0x128cd0 = !![];
                        _0x1533d0();
                        const _0x4edf48 = document['getElementById']('ability-ui');
                        if (_0x4edf48)
                            _0x4edf48['style']['display'] = 'block';
                    }
                    if (!_0x59e86e['game']['nightAbilityOpen']) {
                        const _0x633e93 = document['getElementById']('ability-ui');
                        if (_0x633e93 && _0x633e93['style']['display'] === 'block') {
                            _0x633e93['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x128cd0 = ![];
                }
                _0x3206ba(_0x59e86e['game']);
                if (_0x59e86e['game']['roleListMode'] !== undefined) {
                    _0x4f3b37['ROLE_LIST_RAW'] = _0x59e86e['game']['roleList'] || [];
                    _0xac52c8(_0x59e86e['game']['roleList'], _0x59e86e['game']['roleListMode']);
                }
            }
        } else if (_0x59e86e['type'] === 'teleport') {
            _0xedd3af['x'] = _0x59e86e['x'];
            _0xedd3af['y'] = _0x59e86e['y'];
            _0xedd3af['vx'] = 0x0;
            _0xedd3af['vy'] = 0x0;
            _0x4f3b37['CAMERA']['x'] = null;
            if (_0x59e86e['teleportId'] !== undefined)
                _0x3e3b51 = _0x59e86e['teleportId'];
        } else if (_0x59e86e['type'] === 'bulk_teleport') {
            for (const _0x54991c in _0x59e86e['positions']) {
                const _0x54532e = _0x59e86e['positions'][_0x54991c];
                if (parseInt(_0x54991c) === _0x4c4435) {
                    _0xedd3af['x'] = _0x54532e['x'];
                    _0xedd3af['y'] = _0x54532e['y'];
                    _0xedd3af['vx'] = 0x0;
                    _0xedd3af['vy'] = 0x0;
                    _0x4f3b37['CAMERA']['x'] = null;
                    continue;
                }
                const _0xf0ee9c = _0x1df4eb[_0x54991c];
                if (_0xf0ee9c) {
                    _0xf0ee9c['x'] = _0x54532e['x'];
                    _0xf0ee9c['y'] = _0x54532e['y'];
                    _0xf0ee9c['renderX'] = _0x54532e['x'];
                    _0xf0ee9c['renderY'] = _0x54532e['y'];
                    _0xf0ee9c['vx'] = 0x0;
                    _0xf0ee9c['vy'] = 0x0;
                }
            }
        } else if (_0x59e86e['type'] === 'player_left') {
            delete _0x1df4eb[_0x59e86e['id']];
            _0x1a6424['delete'](parseInt(_0x59e86e['id']));
        } else if (_0x59e86e['type'] === 'map_update') {
            const _0x180237 = _0x4f3b37['MAP']['layers']['find'](_0x5a6505 => _0x5a6505['name'] === _0x59e86e['layer']);
            if (_0x180237) {
                _0x180237['data'][_0x59e86e['row'] * _0x4f3b37['MAP']['columns'] + _0x59e86e['col']] = _0x59e86e['gid'];
                const _0x2ee1ca = _0x59e86e['row'] * _0x4f3b37['MAP']['columns'] + _0x59e86e['col'];
                if (_0x4f3b37['MAP']['doors'] && _0x4f3b37['MAP']['doors'][_0x2ee1ca]) {
                    const _0x5ec83c = _0x4f3b37['MAP']['layers']['find'](_0x392ec7 => _0x392ec7['name'] === 'floor2');
                    if (_0x5ec83c)
                        _0x5ec83c['data'][_0x2ee1ca] = 0x2;
                }
                const _0x530761 = Math['floor'](_0x59e86e['col'] * _0x4f3b37['MAP']['tileSize'] / _0x4f3b37['MAP']['chunkSize']);
                const _0x5673c1 = Math['floor'](_0x59e86e['row'] * _0x4f3b37['MAP']['tileSize'] / _0x4f3b37['MAP']['chunkSize']);
                _0x55fe5b(_0x530761, _0x5673c1);
            }
        } else if (_0x59e86e['type'] === 'role_assign') {
            _0x528e3c = _0x59e86e['role'];
            _0xedd3af['isDead'] = _0x528e3c === 'Spectator';
            _0x1a6424['clear']();
            _0x4f3b37['CURRENT_TARGET'] = null;
            _0x23929a = null;
            _0x3506c7 = null;
            _0x44f69d = null;
            _0x128cd0 = ![];
            const _0x4f7aca = document['getElementById']('ability-ui');
            if (_0x4f7aca)
                _0x4f7aca['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x528e3c;
            _0x4522e3();
            _0x2e53f8(_0x528e3c === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x528e3c, !![]);
            let _0x295648 = '';
            if (_0x528e3c === 'Investigator')
                _0x295648 = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x528e3c === 'Tracker')
                _0x295648 = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x528e3c === 'Doctor')
                _0x295648 = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x528e3c === 'Archer')
                _0x295648 = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x528e3c === 'Escort')
                _0x295648 = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x528e3c === 'Vigilante')
                _0x295648 = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x528e3c === 'Skinwalker')
                _0x295648 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x528e3c === 'Celebrity')
                _0x295648 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x528e3c === 'Mayor')
                _0x295648 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x2e53f8(_0x295648, !![]);
        } else if (_0x59e86e['type'] === 'mayor_reveal') {
            _0x1a6424['add'](parseInt(_0x59e86e['playerId']));
            _0x1880c1();
            _0x4522e3();
        } else if (_0x59e86e['type'] === 'rolelist_update') {
            _0x4f3b37['ROLE_LIST_RAW'] = _0x59e86e['list'] || [];
            _0xac52c8(_0x59e86e['list'], _0x59e86e['mode']);
        } else if (_0x59e86e['type'] === 'sound_event') {
            _0x3e2468['onSoundEvent'](_0x59e86e['track']);
        } else if (_0x59e86e['type'] === 'game_over') {
            _0x3e2468['onStateChange']('LOBBY', ![]);
            _0xac52c8([], 'off');
            _0x528e3c = null;
            _0xedd3af['isDead'] = ![];
            _0x1a6424['clear']();
            _0x4f3b37['CURRENT_TARGET'] = null;
            _0x23929a = null;
            _0x3506c7 = null;
            _0x44f69d = null;
            _0x128cd0 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x4522e3();
            _0x2e53f8('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x59e86e['type'] === 'chat_log') {
            _0x2e53f8(_0x59e86e['sender'] + ':\x20' + _0x59e86e['text']);
        } else if (_0x59e86e['type'] === 'sys_chat') {
            _0x2e53f8(_0x59e86e['text'], !![]);
        }
    };
}
function _0x2e53f8(_0x2f54c9, _0x95fa9c = ![]) {
    const _0x9ab0 = document['getElementById']('chat-log-messages');
    const _0x1a3eb0 = document['getElementById']('chat-log-ui');
    const _0x421ca = _0x1a3eb0['scrollHeight'] - _0x1a3eb0['scrollTop'] - _0x1a3eb0['clientHeight'] < 0x1e;
    const _0x3e1775 = document['createElement']('div');
    _0x3e1775['className'] = 'chat-log-line' + (_0x95fa9c ? '\x20sys-msg' : '');
    _0x3e1775['innerText'] = _0x2f54c9;
    _0x9ab0['appendChild'](_0x3e1775);
    if (_0x421ca) {
        _0x1a3eb0['scrollTop'] = _0x1a3eb0['scrollHeight'];
    }
    if (_0x9ab0['childElementCount'] > 0xc8) {
        _0x9ab0['removeChild'](_0x9ab0['firstChild']);
    }
}
function _0x290e49() {
    const _0xd59fc9 = document['getElementById']('chat-profile-panel');
    if (!_0xd59fc9)
        return;
    _0xd59fc9['innerHTML'] = '';
    let _0x1efe06 = ![];
    const _0x42295c = { ..._0x1df4eb };
    if (_0x4c4435 && window['_FB'] && window['_FB']['_currentUser'] && window['_FB']['_userData']) {
        _0x42295c[_0x4c4435] = _0x42295c[_0x4c4435] || {};
        _0x42295c[_0x4c4435]['_localPhotoURL'] = window['_FB']['_userData']['photoURL'] || '';
        _0x42295c[_0x4c4435]['_localUname'] = window['_FB']['_userData']['username'] || _0x2dce0b;
        _0x42295c[_0x4c4435]['_localStats'] = window['_FB']['_userData'];
    }
    for (const _0x181f23 in _0x42295c) {
        const _0xa83556 = _0x42295c[_0x181f23];
        const _0x3d876f = _0xa83556['photoURL'] || (parseInt(_0x181f23) === _0x4c4435 ? window['_FB'] && window['_FB']['_userData'] && window['_FB']['_userData']['photoURL'] : '');
        if (!_0x3d876f)
            continue;
        _0x1efe06 = !![];
        const _0x3e340d = _0xa83556['name'] || (parseInt(_0x181f23) === _0x4c4435 ? _0x2dce0b : 'Player\x20' + _0x181f23);
        const _0x43b210 = _0xa83556['accountStats'] || (parseInt(_0x181f23) === _0x4c4435 && window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null);
        const _0x50aea5 = document['createElement']('div');
        _0x50aea5['className'] = 'chat-pfp-entry';
        const _0x5cf30c = document['createElement']('img');
        _0x5cf30c['src'] = _0x3d876f;
        _0x5cf30c['alt'] = _0x3e340d;
        _0x50aea5['appendChild'](_0x5cf30c);
        const _0x26e4a8 = document['createElement']('div');
        _0x26e4a8['className'] = 'chat-pfp-tooltip';
        let _0x1a0608 = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x3e340d + '</div>';
        if (_0x43b210) {
            _0x1a0608 += '<div>🏙\x20Town\x20Wins:\x20' + (_0x43b210['townWins'] || 0x0) + '</div>';
            _0x1a0608 += '<div>🔪\x20Mafia\x20Wins:\x20' + (_0x43b210['mafiaWins'] || 0x0) + '</div>';
            _0x1a0608 += '<div>💀\x20Deaths:\x20' + (_0x43b210['deaths'] || 0x0) + '</div>';
            _0x1a0608 += '<div>📉\x20Town\x20Losses:\x20' + (_0x43b210['townLosses'] || 0x0) + '</div>';
            _0x1a0608 += '<div>📉\x20Mafia\x20Losses:\x20' + (_0x43b210['mafiaLosses'] || 0x0) + '</div>';
        }
        _0x26e4a8['innerHTML'] = _0x1a0608;
        _0x50aea5['appendChild'](_0x26e4a8);
        _0xd59fc9['appendChild'](_0x50aea5);
    }
    const _0x12a72a = document['getElementById']('chat-log-wrap');
    if (_0x12a72a) {
        if (_0x1efe06) {
            _0x12a72a['classList']['add']('has-profiles');
            _0xd59fc9['style']['display'] = 'flex';
        } else {
            _0x12a72a['classList']['remove']('has-profiles');
            _0xd59fc9['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x290e49;
let _0x330453 = -0x1, _0x5a1540 = -0x1, _0x4ec658 = -0x1, _0x794111 = 0x0;
function _0x36fec6() {
    if (!_0x4c4435 || !_0x1f7396 || _0x1f7396['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x13b364 = performance['now']();
    const _0x5567ba = _0x13b364 - _0x794111;
    const _0x33e033 = Math['abs'](_0xedd3af['x'] - _0x330453) > 0.05 || Math['abs'](_0xedd3af['y'] - _0x5a1540) > 0.05 || Math['abs'](_0xedd3af['angle'] - _0x4ec658) > 0.02;
    if (!_0x33e033 && _0x5567ba < 0xc8)
        return;
    if (_0x5567ba < 0x19)
        return;
    _0x794111 = _0x13b364;
    _0x330453 = _0xedd3af['x'];
    _0x5a1540 = _0xedd3af['y'];
    _0x4ec658 = _0xedd3af['angle'];
    if (!_0x4c4435 || !_0x1f7396 || _0x1f7396['readyState'] !== WebSocket['OPEN'])
        return;
    _0x1f7396['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0xedd3af['x'],
        'y': _0xedd3af['y'],
        'vx': _0xedd3af['vx'],
        'vy': _0xedd3af['vy'],
        'angle': _0xedd3af['angle'],
        'scale': _0xedd3af['scale'],
        'teleportId': _0x3e3b51,
        'clientTimestamp': Date['now']()
    }));
}
function _0x160887() {
    if (_0xedd3af['isDead'])
        return;
    const _0x1fee4e = _0x4f3b37['MAP']['layers']['find'](_0x417277 => _0x417277['name'] === 'walls');
    if (!_0x1fee4e)
        return;
    const _0x3eb37c = _0xedd3af['scale'];
    const _0x5878be = _0xedd3af['width'] * _0x3eb37c / 0x2;
    for (let _0x6a1b6f = 0x0; _0x6a1b6f < 0x3; _0x6a1b6f++) {
        let _0x2efaef = _0xedd3af['x'] + _0xedd3af['width'] / 0x2;
        let _0x504494 = _0xedd3af['y'] + _0xedd3af['height'] / 0x2;
        const _0x4fb87a = Math['floor']((_0x2efaef - _0x5878be) / _0x4f3b37['MAP']['tileSize']);
        const _0x4a12d8 = Math['floor']((_0x2efaef + _0x5878be) / _0x4f3b37['MAP']['tileSize']);
        const _0x36397f = Math['floor']((_0x504494 - _0x5878be) / _0x4f3b37['MAP']['tileSize']);
        const _0x28a6c1 = Math['floor']((_0x504494 + _0x5878be) / _0x4f3b37['MAP']['tileSize']);
        for (let _0x5442b8 = _0x36397f; _0x5442b8 <= _0x28a6c1; _0x5442b8++) {
            for (let _0x338b6f = _0x4fb87a; _0x338b6f <= _0x4a12d8; _0x338b6f++) {
                if (_0x338b6f < 0x0 || _0x338b6f >= _0x4f3b37['MAP']['columns'] || _0x5442b8 < 0x0 || _0x5442b8 >= _0x4f3b37['MAP']['rows'])
                    continue;
                if (_0x1fee4e['data'][_0x5442b8 * _0x4f3b37['MAP']['columns'] + _0x338b6f] === 0x0)
                    continue;
                const _0x8cf0de = _0x338b6f * _0x4f3b37['MAP']['tileSize'];
                const _0x11524c = _0x5442b8 * _0x4f3b37['MAP']['tileSize'];
                const _0x26a2ca = _0x2efaef < _0x8cf0de ? _0x8cf0de : _0x2efaef > _0x8cf0de + _0x4f3b37['MAP']['tileSize'] ? _0x8cf0de + _0x4f3b37['MAP']['tileSize'] : _0x2efaef;
                const _0x452e3c = _0x504494 < _0x11524c ? _0x11524c : _0x504494 > _0x11524c + _0x4f3b37['MAP']['tileSize'] ? _0x11524c + _0x4f3b37['MAP']['tileSize'] : _0x504494;
                const _0x361d98 = _0x2efaef - _0x26a2ca;
                const _0x601ba3 = _0x504494 - _0x452e3c;
                const _0xfe57db = Math['sqrt'](_0x361d98 * _0x361d98 + _0x601ba3 * _0x601ba3);
                if (_0xfe57db < _0x5878be) {
                    if (_0xfe57db === 0x0) {
                        const _0x3a54bb = _0x2efaef - _0x8cf0de;
                        const _0x5de6ff = _0x8cf0de + _0x4f3b37['MAP']['tileSize'] - _0x2efaef;
                        const _0x36c7b5 = _0x504494 - _0x11524c;
                        const _0x447fff = _0x11524c + _0x4f3b37['MAP']['tileSize'] - _0x504494;
                        const _0x23aacd = Math['min'](_0x3a54bb, _0x5de6ff, _0x36c7b5, _0x447fff);
                        if (_0x23aacd === _0x3a54bb)
                            _0x2efaef = _0x8cf0de - _0x5878be;
                        else if (_0x23aacd === _0x5de6ff)
                            _0x2efaef = _0x8cf0de + _0x4f3b37['MAP']['tileSize'] + _0x5878be;
                        else if (_0x23aacd === _0x36c7b5)
                            _0x504494 = _0x11524c - _0x5878be;
                        else
                            _0x504494 = _0x11524c + _0x4f3b37['MAP']['tileSize'] + _0x5878be;
                    } else {
                        const _0x1f2517 = _0x5878be - _0xfe57db;
                        _0x2efaef += _0x361d98 / _0xfe57db * _0x1f2517;
                        _0x504494 += _0x601ba3 / _0xfe57db * _0x1f2517;
                        const _0x5bf18d = _0xedd3af['vx'] * (_0x361d98 / _0xfe57db) + _0xedd3af['vy'] * (_0x601ba3 / _0xfe57db);
                        if (_0x5bf18d < 0x0) {
                            _0xedd3af['vx'] -= _0x5bf18d * (_0x361d98 / _0xfe57db);
                            _0xedd3af['vy'] -= _0x5bf18d * (_0x601ba3 / _0xfe57db);
                        }
                    }
                }
            }
        }
        _0xedd3af['x'] = _0x2efaef - _0xedd3af['width'] / 0x2;
        _0xedd3af['y'] = _0x504494 - _0xedd3af['height'] / 0x2;
    }
}
function _0x3e7b90(_0x301b7f) {
    const _0x211d7a = _0x4f3b37['MAP']['layers']['find'](_0x5c1cd4 => _0x5c1cd4['name'] === 'walls');
    if (!_0x211d7a)
        return;
    const _0x3648d5 = _0x301b7f['width'] / 0x2;
    for (let _0x626226 = 0x0; _0x626226 < 0x2; _0x626226++) {
        let _0x2ad015 = _0x301b7f['x'] + _0x301b7f['width'] / 0x2;
        let _0x48d275 = _0x301b7f['y'] + _0x301b7f['height'] / 0x2;
        const _0xe60709 = Math['floor']((_0x2ad015 - _0x3648d5) / _0x4f3b37['MAP']['tileSize']);
        const _0x1b4509 = Math['floor']((_0x2ad015 + _0x3648d5) / _0x4f3b37['MAP']['tileSize']);
        const _0x14ad2f = Math['floor']((_0x48d275 - _0x3648d5) / _0x4f3b37['MAP']['tileSize']);
        const _0x29675a = Math['floor']((_0x48d275 + _0x3648d5) / _0x4f3b37['MAP']['tileSize']);
        for (let _0x338b5d = _0x14ad2f; _0x338b5d <= _0x29675a; _0x338b5d++) {
            for (let _0x407246 = _0xe60709; _0x407246 <= _0x1b4509; _0x407246++) {
                if (_0x407246 < 0x0 || _0x407246 >= _0x4f3b37['MAP']['columns'] || _0x338b5d < 0x0 || _0x338b5d >= _0x4f3b37['MAP']['rows'])
                    continue;
                if (_0x211d7a['data'][_0x338b5d * _0x4f3b37['MAP']['columns'] + _0x407246] === 0x0)
                    continue;
                const _0x864c09 = _0x407246 * _0x4f3b37['MAP']['tileSize'];
                const _0x44d26f = _0x338b5d * _0x4f3b37['MAP']['tileSize'];
                const _0x515105 = _0x2ad015 < _0x864c09 ? _0x864c09 : _0x2ad015 > _0x864c09 + _0x4f3b37['MAP']['tileSize'] ? _0x864c09 + _0x4f3b37['MAP']['tileSize'] : _0x2ad015;
                const _0x4d81ea = _0x48d275 < _0x44d26f ? _0x44d26f : _0x48d275 > _0x44d26f + _0x4f3b37['MAP']['tileSize'] ? _0x44d26f + _0x4f3b37['MAP']['tileSize'] : _0x48d275;
                const _0x204768 = _0x2ad015 - _0x515105;
                const _0x9ff023 = _0x48d275 - _0x4d81ea;
                const _0x16f9dd = Math['sqrt'](_0x204768 * _0x204768 + _0x9ff023 * _0x9ff023);
                if (_0x16f9dd < _0x3648d5) {
                    if (_0x16f9dd === 0x0) {
                        const _0x2cfaae = _0x2ad015 - _0x864c09;
                        const _0x25c29c = _0x864c09 + _0x4f3b37['MAP']['tileSize'] - _0x2ad015;
                        const _0x3085ba = _0x48d275 - _0x44d26f;
                        const _0x5eae62 = _0x44d26f + _0x4f3b37['MAP']['tileSize'] - _0x48d275;
                        const _0x1297ae = Math['min'](_0x2cfaae, _0x25c29c, _0x3085ba, _0x5eae62);
                        if (_0x1297ae === _0x2cfaae)
                            _0x2ad015 = _0x864c09 - _0x3648d5;
                        else if (_0x1297ae === _0x25c29c)
                            _0x2ad015 = _0x864c09 + _0x4f3b37['MAP']['tileSize'] + _0x3648d5;
                        else if (_0x1297ae === _0x3085ba)
                            _0x48d275 = _0x44d26f - _0x3648d5;
                        else
                            _0x48d275 = _0x44d26f + _0x4f3b37['MAP']['tileSize'] + _0x3648d5;
                    } else {
                        const _0x45ebe2 = _0x3648d5 - _0x16f9dd;
                        _0x2ad015 += _0x204768 / _0x16f9dd * _0x45ebe2;
                        _0x48d275 += _0x9ff023 / _0x16f9dd * _0x45ebe2;
                    }
                }
            }
        }
        _0x301b7f['x'] = _0x2ad015 - _0x301b7f['width'] / 0x2;
        _0x301b7f['y'] = _0x48d275 - _0x301b7f['height'] / 0x2;
    }
}
function _0x12a3a5(_0xce7ca5) {
    const _0x5da0c7 = _0xce7ca5['width'] / 0x2;
    for (let _0xe79132 = 0x0; _0xe79132 < 0x2; _0xe79132++) {
        let _0x4713fd = _0xce7ca5['x'] + _0xce7ca5['width'] / 0x2;
        let _0x2b8fb0 = _0xce7ca5['y'] + _0xce7ca5['height'] / 0x2;
        for (const _0x495238 of _0x4f3b37['ENTITIES']) {
            const _0x3020ac = _0x4713fd < _0x495238['x'] ? _0x495238['x'] : _0x4713fd > _0x495238['x'] + _0x495238['w'] ? _0x495238['x'] + _0x495238['w'] : _0x4713fd;
            const _0x3fea38 = _0x2b8fb0 < _0x495238['y'] ? _0x495238['y'] : _0x2b8fb0 > _0x495238['y'] + _0x495238['h'] ? _0x495238['y'] + _0x495238['h'] : _0x2b8fb0;
            const _0xbdeb60 = _0x4713fd - _0x3020ac;
            const _0x6b53cd = _0x2b8fb0 - _0x3fea38;
            const _0x33d9af = Math['sqrt'](_0xbdeb60 * _0xbdeb60 + _0x6b53cd * _0x6b53cd);
            if (_0x33d9af < _0x5da0c7 && _0x33d9af > 0x0) {
                const _0x1bc7c5 = _0x5da0c7 - _0x33d9af;
                const _0x5a8094 = _0xbdeb60 / _0x33d9af;
                const _0x3a7400 = _0x6b53cd / _0x33d9af;
                _0x4713fd += _0x5a8094 * _0x1bc7c5;
                _0x2b8fb0 += _0x3a7400 * _0x1bc7c5;
            } else if (_0x33d9af === 0x0) {
                const _0x12586a = _0x4713fd - _0x495238['x'];
                const _0xa4eaf2 = _0x495238['x'] + _0x495238['w'] - _0x4713fd;
                const _0x307fa3 = _0x2b8fb0 - _0x495238['y'];
                const _0x23be6e = _0x495238['y'] + _0x495238['h'] - _0x2b8fb0;
                const _0x2ce184 = Math['min'](_0x12586a, _0xa4eaf2, _0x307fa3, _0x23be6e);
                if (_0x2ce184 === _0x12586a)
                    _0x4713fd = _0x495238['x'] - _0x5da0c7;
                else if (_0x2ce184 === _0xa4eaf2)
                    _0x4713fd = _0x495238['x'] + _0x495238['w'] + _0x5da0c7;
                else if (_0x2ce184 === _0x307fa3)
                    _0x2b8fb0 = _0x495238['y'] - _0x5da0c7;
                else
                    _0x2b8fb0 = _0x495238['y'] + _0x495238['h'] + _0x5da0c7;
            }
        }
        _0xce7ca5['x'] = _0x4713fd - _0xce7ca5['width'] / 0x2;
        _0xce7ca5['y'] = _0x2b8fb0 - _0xce7ca5['height'] / 0x2;
    }
}
function _0x3a1291() {
    if (_0xedd3af['isDead'])
        return;
    const _0x506166 = _0xedd3af['width'] / 0x2;
    const _0x1ab03e = _0xedd3af['x'] + _0xedd3af['width'] / 0x2;
    const _0x1b9e26 = _0xedd3af['y'] + _0xedd3af['height'] / 0x2;
    for (const _0x47c859 in _0x1df4eb) {
        const _0x36dc62 = _0x1df4eb[_0x47c859];
        if (_0x36dc62['isDead'])
            continue;
        const _0x3ab48a = _0x36dc62['width'] / 0x2;
        const _0x245151 = _0x506166 + _0x3ab48a;
        const _0x53923a = (_0x36dc62['renderX'] ?? _0x36dc62['x']) + _0x36dc62['width'] / 0x2;
        const _0x1b51cd = (_0x36dc62['renderY'] ?? _0x36dc62['y']) + _0x36dc62['height'] / 0x2;
        const _0x28c360 = _0x1ab03e - _0x53923a;
        const _0x544b43 = _0x1b9e26 - _0x1b51cd;
        const _0x4c9b8c = Math['sqrt'](_0x28c360 * _0x28c360 + _0x544b43 * _0x544b43);
        if (_0x4c9b8c > 0x0 && _0x4c9b8c < _0x245151) {
            const _0x1224ee = _0x245151 - _0x4c9b8c;
            const _0x16f444 = _0x28c360 / _0x4c9b8c;
            const _0x19e6de = _0x544b43 / _0x4c9b8c;
            _0xedd3af['x'] += _0x16f444 * (_0x1224ee * 0.25);
            _0xedd3af['y'] += _0x19e6de * (_0x1224ee * 0.25);
            _0x36dc62['x'] -= _0x16f444 * (_0x1224ee * 0.75);
            _0x36dc62['y'] -= _0x19e6de * (_0x1224ee * 0.75);
            _0x3e7b90(_0x36dc62);
            _0x12a3a5(_0x36dc62);
            if (_0x36dc62['renderX'] !== undefined) {
                _0x36dc62['renderX'] = _0x36dc62['x'];
                _0x36dc62['renderY'] = _0x36dc62['y'];
            }
            const _0x1e260c = _0xedd3af['vx'] * _0x16f444 + _0xedd3af['vy'] * _0x19e6de;
            if (_0x1e260c < 0x0) {
                _0xedd3af['vx'] -= _0x1e260c * _0x16f444 * 0.25;
                _0xedd3af['vy'] -= _0x1e260c * _0x19e6de * 0.25;
            }
        }
    }
    _0x160887();
    _0x55d98e();
}
function _0x55d98e() {
    if (_0xedd3af['isDead'])
        return;
    const _0x37a2d6 = _0xedd3af['scale'];
    const _0x36b54a = _0xedd3af['width'] * _0x37a2d6 / 0x2;
    for (let _0x24ac44 = 0x0; _0x24ac44 < 0x2; _0x24ac44++) {
        let _0x2a75cc = _0xedd3af['x'] + _0xedd3af['width'] / 0x2;
        let _0x469111 = _0xedd3af['y'] + _0xedd3af['height'] / 0x2;
        for (const _0x3486fa of _0x4f3b37['ENTITIES']) {
            const _0x12c525 = _0x2a75cc < _0x3486fa['x'] ? _0x3486fa['x'] : _0x2a75cc > _0x3486fa['x'] + _0x3486fa['w'] ? _0x3486fa['x'] + _0x3486fa['w'] : _0x2a75cc;
            const _0x46e416 = _0x469111 < _0x3486fa['y'] ? _0x3486fa['y'] : _0x469111 > _0x3486fa['y'] + _0x3486fa['h'] ? _0x3486fa['y'] + _0x3486fa['h'] : _0x469111;
            const _0x2e0cbf = _0x2a75cc - _0x12c525;
            const _0x18bfb3 = _0x469111 - _0x46e416;
            const _0x50920f = Math['sqrt'](_0x2e0cbf * _0x2e0cbf + _0x18bfb3 * _0x18bfb3);
            if (_0x50920f < _0x36b54a && _0x50920f > 0x0) {
                const _0x4a2cf8 = _0x36b54a - _0x50920f;
                const _0x34c995 = _0x2e0cbf / _0x50920f;
                const _0x1365cd = _0x18bfb3 / _0x50920f;
                _0x2a75cc += _0x34c995 * _0x4a2cf8;
                _0x469111 += _0x1365cd * _0x4a2cf8;
                const _0x206989 = _0xedd3af['vx'] * _0x34c995 + _0xedd3af['vy'] * _0x1365cd;
                if (_0x206989 < 0x0) {
                    _0xedd3af['vx'] -= _0x206989 * _0x34c995;
                    _0xedd3af['vy'] -= _0x206989 * _0x1365cd;
                }
            } else if (_0x50920f === 0x0) {
                const _0x48fd2e = _0x2a75cc - _0x3486fa['x'];
                const _0x273120 = _0x3486fa['x'] + _0x3486fa['w'] - _0x2a75cc;
                const _0x21a942 = _0x469111 - _0x3486fa['y'];
                const _0x2ad422 = _0x3486fa['y'] + _0x3486fa['h'] - _0x469111;
                const _0x49980e = Math['min'](_0x48fd2e, _0x273120, _0x21a942, _0x2ad422);
                if (_0x49980e === _0x48fd2e)
                    _0x2a75cc = _0x3486fa['x'] - _0x36b54a;
                else if (_0x49980e === _0x273120)
                    _0x2a75cc = _0x3486fa['x'] + _0x3486fa['w'] + _0x36b54a;
                else if (_0x49980e === _0x21a942)
                    _0x469111 = _0x3486fa['y'] - _0x36b54a;
                else
                    _0x469111 = _0x3486fa['y'] + _0x3486fa['h'] + _0x36b54a;
            }
        }
        _0xedd3af['x'] = _0x2a75cc - _0xedd3af['width'] / 0x2;
        _0xedd3af['y'] = _0x469111 - _0xedd3af['height'] / 0x2;
    }
}
function _0x1b80f4(_0x1cef60, _0x278415) {
    const _0x3a7db3 = _0x4f3b37['MAP']['layers']['find'](_0x2c0f04 => _0x2c0f04['name'] === 'trees');
    if (!_0x3a7db3)
        return ![];
    const _0x12f60f = Math['floor'](_0x1cef60 / _0x4f3b37['MAP']['tileSize']);
    const _0x145b19 = Math['floor'](_0x278415 / _0x4f3b37['MAP']['tileSize']);
    if (_0x12f60f < 0x0 || _0x12f60f >= _0x4f3b37['MAP']['columns'] || _0x145b19 < 0x0 || _0x145b19 >= _0x4f3b37['MAP']['rows'])
        return ![];
    return _0x3a7db3['data'][_0x145b19 * _0x4f3b37['MAP']['columns'] + _0x12f60f] === 0xb;
}
let _0x588966 = null;
function _0xbdf9b0() {
    const _0x515710 = _0x4f3b37['MAP'];
    const _0x56d306 = _0x515710['layers']['find'](_0x48f428 => _0x48f428['name'] === 'floor2');
    const _0x50d377 = _0x515710['layers']['find'](_0x192fc1 => _0x192fc1['name'] === 'walls');
    if (!_0x56d306 || !_0x50d377) {
        _0x588966 = null;
        return;
    }
    const _0x245c0e = _0x515710['columns'];
    const _0x231297 = _0x515710['rows'];
    const _0x34b249 = [];
    const _0x43e095 = [];
    const _0x2f6a5c = new Set();
    for (let _0x391f85 = 0x0; _0x391f85 < _0x231297; _0x391f85++) {
        for (let _0x14d900 = 0x0; _0x14d900 < _0x245c0e; _0x14d900++) {
            const _0x4f166a = _0x391f85 * _0x245c0e + _0x14d900;
            const _0x3866a0 = _0x56d306['data'][_0x4f166a];
            const _0x2c3fec = _0x50d377['data'][_0x4f166a];
            if (_0x3866a0 === 0x2 || _0x3866a0 === 0x4) {
                _0x34b249['push']({
                    'c': _0x14d900,
                    'r': _0x391f85
                });
                if (_0x2c3fec !== 0x0)
                    _0x43e095['push']({
                        'c': _0x14d900,
                        'r': _0x391f85
                    });
            }
            if (_0x2c3fec !== 0x0)
                _0x2f6a5c['add'](_0x14d900 + ',' + _0x391f85);
        }
    }
    const _0x37aee8 = new Set(_0x34b249['map'](_0x5eeed9 => _0x5eeed9['c'] + ',' + _0x5eeed9['r']));
    const _0x268512 = [
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
                c: _0x41ea21,
                r: _0x2f640e
            } of _0x34b249) {
        for (const [_0xef75a1, _0x35807d] of _0x268512) {
            const _0x26cf68 = _0x41ea21 + _0xef75a1, _0x23cda4 = _0x2f640e + _0x35807d;
            const _0x4ecd39 = _0x26cf68 + ',' + _0x23cda4;
            if (!_0x37aee8['has'](_0x4ecd39))
                _0x2f6a5c['add'](_0x4ecd39);
        }
    }
    _0x588966 = {
        'wallSet': _0x2f6a5c,
        'floorTiles': _0x34b249,
        'wallTiles': _0x43e095,
        'interiorSet': _0x37aee8
    };
}
function _0x3fe31f() {
    const _0x5d6705 = _0x4f3b37['MAP']['layers']['find'](_0x2afa6f => _0x2afa6f['name'] === 'floor2');
    if (!_0x5d6705)
        return ![];
    const _0x19540b = Math['floor']((_0xedd3af['x'] + _0xedd3af['width'] / 0x2) / _0x4f3b37['MAP']['tileSize']);
    const _0x2cf239 = Math['floor']((_0xedd3af['y'] + _0xedd3af['height'] / 0x2) / _0x4f3b37['MAP']['tileSize']);
    if (_0x19540b < 0x0 || _0x19540b >= _0x4f3b37['MAP']['columns'] || _0x2cf239 < 0x0 || _0x2cf239 >= _0x4f3b37['MAP']['rows'])
        return ![];
    const _0x522700 = _0x5d6705['data'][_0x2cf239 * _0x4f3b37['MAP']['columns'] + _0x19540b];
    return _0x522700 === 0x2;
}
function _0x2a54c5() {
    if (_0xedd3af['isDead']) {
        _0x4f3b37['SHADOW']['polygon'] = null;
        return;
    }
    const _0x3595b8 = _0x4f3b37['MAP'];
    const _0x3cb742 = _0x4f3b37['SHADOW'];
    const _0x2eb55b = _0x3595b8['tileSize'];
    if (!_0x588966)
        _0xbdf9b0();
    if (!_0x588966) {
        _0x3cb742['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x5c9918,
        floorTiles: _0x37ef8b
    } = _0x588966;
    if (_0x37ef8b['length'] === 0x0) {
        _0x3cb742['polygon'] = null;
        return;
    }
    if (!_0x3fe31f()) {
        _0x3cb742['polygon'] = null;
        return;
    }
    const _0x77a1a1 = _0xedd3af['x'] + _0xedd3af['width'] / 0x2;
    const _0x202a0e = _0xedd3af['y'] + _0xedd3af['height'] / 0x2;
    if (!_0x588966['_bounds']) {
        let _0x49ff04 = Infinity, _0xde0e51 = -Infinity, _0x5476d4 = Infinity, _0x18b202 = -Infinity;
        for (const {
                    c: _0x1e8a23,
                    r: _0x4ea707
                } of _0x37ef8b) {
            if (_0x1e8a23 < _0x49ff04)
                _0x49ff04 = _0x1e8a23;
            if (_0x1e8a23 > _0xde0e51)
                _0xde0e51 = _0x1e8a23;
            if (_0x4ea707 < _0x5476d4)
                _0x5476d4 = _0x4ea707;
            if (_0x4ea707 > _0x18b202)
                _0x18b202 = _0x4ea707;
        }
        _0x588966['_bounds'] = {
            'minC': Math['max'](0x0, _0x49ff04 - 0x1),
            'maxC': Math['min'](_0x3595b8['columns'] - 0x1, _0xde0e51 + 0x1),
            'minR': Math['max'](0x0, _0x5476d4 - 0x1),
            'maxR': Math['min'](_0x3595b8['rows'] - 0x1, _0x18b202 + 0x1)
        };
        const _0x28291c = [];
        for (let _0x437d68 = _0x588966['_bounds']['minR']; _0x437d68 <= _0x588966['_bounds']['maxR']; _0x437d68++) {
            for (let _0x195a59 = _0x588966['_bounds']['minC']; _0x195a59 <= _0x588966['_bounds']['maxC']; _0x195a59++) {
                if (_0x5c9918['has'](_0x195a59 + ',' + _0x437d68))
                    _0x28291c['push'](_0x195a59, _0x437d68);
            }
        }
        _0x588966['_wallArr'] = _0x28291c;
    }
    const {
        minC: _0x4c90b2,
        maxC: _0x11a5e2,
        minR: _0x50e03e,
        maxR: _0x19703a
    } = _0x588966['_bounds'];
    const _0x58a570 = _0x588966['_wallArr'];
    const _0x1885ba = 0.0001;
    const _0x3ce49f = new Set();
    const _0x4695e3 = [];
    for (let _0x3cb029 = 0x0; _0x3cb029 < _0x58a570['length']; _0x3cb029 += 0x2) {
        const _0x39c19a = _0x58a570[_0x3cb029], _0x2ee6fa = _0x58a570[_0x3cb029 + 0x1];
        const _0x1a3849 = [
            _0x39c19a * _0x2eb55b,
            _0x2ee6fa * _0x2eb55b,
            _0x39c19a * _0x2eb55b + _0x2eb55b,
            _0x2ee6fa * _0x2eb55b,
            _0x39c19a * _0x2eb55b,
            _0x2ee6fa * _0x2eb55b + _0x2eb55b,
            _0x39c19a * _0x2eb55b + _0x2eb55b,
            _0x2ee6fa * _0x2eb55b + _0x2eb55b
        ];
        for (let _0x4595e3 = 0x0; _0x4595e3 < _0x1a3849['length']; _0x4595e3 += 0x2) {
            const _0x4c346c = _0x1a3849[_0x4595e3], _0x3e5411 = _0x1a3849[_0x4595e3 + 0x1];
            const _0x58caff = Math['atan2'](_0x3e5411 - _0x202a0e, _0x4c346c - _0x77a1a1);
            const _0x1e3928 = Math['round'](_0x58caff * 0x4e20);
            if (!_0x3ce49f['has'](_0x1e3928 - 0x1)) {
                _0x3ce49f['add'](_0x1e3928 - 0x1);
                _0x4695e3['push'](_0x58caff - _0x1885ba);
            }
            if (!_0x3ce49f['has'](_0x1e3928)) {
                _0x3ce49f['add'](_0x1e3928);
                _0x4695e3['push'](_0x58caff);
            }
            if (!_0x3ce49f['has'](_0x1e3928 + 0x1)) {
                _0x3ce49f['add'](_0x1e3928 + 0x1);
                _0x4695e3['push'](_0x58caff + _0x1885ba);
            }
        }
    }
    _0x4695e3['sort']((_0x16a40f, _0xc1bc4c) => _0x16a40f - _0xc1bc4c);
    const _0x22ca8d = Math['hypot']((_0x11a5e2 - _0x4c90b2 + 0x2) * _0x2eb55b, (_0x19703a - _0x50e03e + 0x2) * _0x2eb55b);
    const _0x5d937b = _0x1df9ce => {
        const _0x2e96e3 = Math['cos'](_0x1df9ce);
        const _0x5119d3 = Math['sin'](_0x1df9ce);
        let _0x20fae5 = _0x22ca8d;
        for (let _0x314b1f = 0x0; _0x314b1f < _0x58a570['length']; _0x314b1f += 0x2) {
            const _0x1bde23 = _0x58a570[_0x314b1f], _0x3ca344 = _0x58a570[_0x314b1f + 0x1];
            const _0x5b8ce6 = _0x1bde23 * _0x2eb55b, _0x4dc36a = _0x3ca344 * _0x2eb55b;
            const _0x14fd12 = _0x5b8ce6 + _0x2eb55b, _0x4c86c5 = _0x4dc36a + _0x2eb55b;
            const _0x369d1c = _0x5b8ce6 + _0x2eb55b * 0.5, _0x4c5cae = _0x4dc36a + _0x2eb55b * 0.5;
            const _0x2dc7e7 = Math['abs'](_0x369d1c - _0x77a1a1) + Math['abs'](_0x4c5cae - _0x202a0e);
            if (_0x2dc7e7 > _0x20fae5 + _0x2eb55b * 1.5)
                continue;
            let _0x30a1d8, _0x2964b0, _0x4129bd;
            _0x30a1d8 = -_0x5119d3 * _0x2eb55b;
            if (Math['abs'](_0x30a1d8) >= 1e-10) {
                _0x2964b0 = -(_0x4dc36a - _0x202a0e) * _0x2eb55b / _0x30a1d8;
                _0x4129bd = ((_0x5b8ce6 - _0x77a1a1) * _0x5119d3 - (_0x4dc36a - _0x202a0e) * _0x2e96e3) / _0x30a1d8;
                if (_0x2964b0 > 0.001 && _0x4129bd >= 0x0 && _0x4129bd <= 0x1 && _0x2964b0 < _0x20fae5)
                    _0x20fae5 = _0x2964b0;
            }
            _0x30a1d8 = _0x2e96e3 * _0x2eb55b;
            if (Math['abs'](_0x30a1d8) >= 1e-10) {
                _0x2964b0 = (_0x14fd12 - _0x77a1a1) * _0x2eb55b / _0x30a1d8;
                _0x4129bd = ((_0x14fd12 - _0x77a1a1) * _0x5119d3 - (_0x4dc36a - _0x202a0e) * _0x2e96e3) / _0x30a1d8;
                if (_0x2964b0 > 0.001 && _0x4129bd >= 0x0 && _0x4129bd <= 0x1 && _0x2964b0 < _0x20fae5)
                    _0x20fae5 = _0x2964b0;
            }
            _0x30a1d8 = _0x5119d3 * _0x2eb55b;
            if (Math['abs'](_0x30a1d8) >= 1e-10) {
                _0x2964b0 = (_0x4c86c5 - _0x202a0e) * _0x2eb55b / _0x30a1d8;
                _0x4129bd = ((_0x14fd12 - _0x77a1a1) * _0x5119d3 - (_0x4c86c5 - _0x202a0e) * _0x2e96e3) / _0x30a1d8;
                if (_0x2964b0 > 0.001 && _0x4129bd >= 0x0 && _0x4129bd <= 0x1 && _0x2964b0 < _0x20fae5)
                    _0x20fae5 = _0x2964b0;
            }
            _0x30a1d8 = -_0x2e96e3 * _0x2eb55b;
            if (Math['abs'](_0x30a1d8) >= 1e-10) {
                _0x2964b0 = -(_0x5b8ce6 - _0x77a1a1) * _0x2eb55b / _0x30a1d8;
                _0x4129bd = ((_0x5b8ce6 - _0x77a1a1) * _0x5119d3 - (_0x4c86c5 - _0x202a0e) * _0x2e96e3) / _0x30a1d8;
                if (_0x2964b0 > 0.001 && _0x4129bd >= 0x0 && _0x4129bd <= 0x1 && _0x2964b0 < _0x20fae5)
                    _0x20fae5 = _0x2964b0;
            }
        }
        const _0x49532a = _0x20fae5 < _0x22ca8d ? _0x20fae5 + _0x2eb55b * 0.5 : _0x20fae5;
        return {
            'x': _0x77a1a1 + _0x2e96e3 * _0x49532a,
            'y': _0x202a0e + _0x5119d3 * _0x49532a
        };
    };
    const _0x3b13f3 = [];
    for (let _0x105553 = 0x0; _0x105553 < _0x4695e3['length']; _0x105553++) {
        const _0x308242 = _0x5d937b(_0x4695e3[_0x105553]);
        _0x3b13f3['push'](_0x308242['x'], _0x308242['y']);
    }
    _0x3cb742['polygon'] = _0x3b13f3['length'] >= 0x6 ? new Float32Array(_0x3b13f3) : null;
}
function _0x438ede(_0x4fa921, _0x28a7a2, _0x8e229e) {
    if (_0xedd3af['isDead'])
        return;
    if (!_0x588966)
        return;
    const {
        floorTiles: _0x33dadc,
        wallTiles: _0x54eed8
    } = _0x588966;
    if (_0x33dadc['length'] === 0x0)
        return;
    const _0x34ebf1 = _0x4f3b37['SHADOW'];
    const _0x5135b2 = _0x4f3b37['MAP']['tileSize'];
    const _0x48b7b1 = _0x4f3b37['CAMERA']['width'];
    const _0x3ec229 = _0x4f3b37['CAMERA']['height'];
    if (!_0x4f3b37['SHADOW']['_buf'] || _0x4f3b37['SHADOW']['_buf']['width'] !== _0x48b7b1 || _0x4f3b37['SHADOW']['_buf']['height'] !== _0x3ec229) {
        _0x4f3b37['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x4f3b37['SHADOW']['_buf']['width'] = _0x48b7b1;
        _0x4f3b37['SHADOW']['_buf']['height'] = _0x3ec229;
    }
    const _0x2122ae = _0x4f3b37['SHADOW']['_buf'];
    const _0x425ab5 = _0x2122ae['getContext']('2d');
    _0x425ab5['clearRect'](0x0, 0x0, _0x48b7b1, _0x3ec229);
    _0x425ab5['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x425ab5['beginPath']();
    for (const {
                c: _0x47b11d,
                r: _0x65903c
            } of _0x33dadc) {
        const _0x3c7510 = Math['floor'](_0x47b11d * _0x5135b2 - _0x28a7a2), _0x9bc319 = Math['floor'](_0x65903c * _0x5135b2 - _0x8e229e);
        if (_0x3c7510 > _0x48b7b1 || _0x9bc319 > _0x3ec229 || _0x3c7510 + _0x5135b2 < 0x0 || _0x9bc319 + _0x5135b2 < 0x0)
            continue;
        _0x425ab5['rect'](_0x3c7510 - 0x2, _0x9bc319 - 0x2, _0x5135b2 + 0x4, _0x5135b2 + 0x4);
    }
    _0x425ab5['fill']();
    if (_0x54eed8['length'] > 0x0) {
        _0x425ab5['globalCompositeOperation'] = 'destination-out';
        _0x425ab5['fillStyle'] = 'rgba(0,0,0,1)';
        _0x425ab5['beginPath']();
        for (const {
                    c: _0x5b541c,
                    r: _0x252f96
                } of _0x54eed8) {
            const _0x3276df = Math['floor'](_0x5b541c * _0x5135b2 - _0x28a7a2), _0x5e617f = Math['floor'](_0x252f96 * _0x5135b2 - _0x8e229e);
            if (_0x3276df > _0x48b7b1 || _0x5e617f > _0x3ec229 || _0x3276df + _0x5135b2 < 0x0 || _0x5e617f + _0x5135b2 < 0x0)
                continue;
            _0x425ab5['rect'](_0x3276df - 0x2, _0x5e617f - 0x2, _0x5135b2 + 0x4, _0x5135b2 + 0x4);
        }
        _0x425ab5['fill']();
        _0x425ab5['globalCompositeOperation'] = 'source-over';
    }
    if (_0x34ebf1['polygon'] && _0x34ebf1['polygon']['length'] >= 0x6) {
        _0x425ab5['globalCompositeOperation'] = 'destination-out';
        _0x425ab5['beginPath']();
        const _0x4236e2 = _0x34ebf1['polygon'];
        _0x425ab5['moveTo'](_0x4236e2[0x0] - _0x28a7a2, _0x4236e2[0x1] - _0x8e229e);
        for (let _0x898e53 = 0x2; _0x898e53 < _0x4236e2['length']; _0x898e53 += 0x2) {
            _0x425ab5['lineTo'](_0x4236e2[_0x898e53] - _0x28a7a2, _0x4236e2[_0x898e53 + 0x1] - _0x8e229e);
        }
        _0x425ab5['closePath']();
        _0x425ab5['fill']();
        _0x425ab5['globalCompositeOperation'] = 'source-over';
    }
    _0x4fa921['drawImage'](_0x2122ae, 0x0, 0x0);
}
function _0x41bea6(_0x14da69) {
    let _0x3b79f8 = 0x0, _0x485614 = 0x0;
    const _0xdc6e6b = _0x4f3b37['INPUTS']['mouseX'] / _0x4f3b37['SYSTEM']['viewScale'];
    const _0x2b3e08 = _0x4f3b37['INPUTS']['mouseY'] / _0x4f3b37['SYSTEM']['viewScale'];
    const _0x4c12fa = _0xedd3af['x'] - _0x4f3b37['CAMERA']['x'] + _0xedd3af['width'] / 0x2;
    const _0x2e60b3 = _0xedd3af['y'] - _0x4f3b37['CAMERA']['y'] + _0xedd3af['height'] / 0x2;
    const _0x410317 = Math['atan2'](_0x2b3e08 - _0x2e60b3, _0xdc6e6b - _0x4c12fa);
    if (_0x55bfc4 !== 0x0 || _0x15fd0d !== 0x0) {
        _0x3b79f8 = _0x55bfc4;
        _0x485614 = _0x15fd0d;
    } else if (_0x390477) {
        let _0x5b8521 = 0x0, _0x205258 = 0x0;
        if (_0x4f3b37['INPUTS']['keys']['w'] || _0x4f3b37['INPUTS']['keys']['arrowup'])
            _0x5b8521 += 0x1;
        if (_0x4f3b37['INPUTS']['keys']['s'] || _0x4f3b37['INPUTS']['keys']['arrowdown'])
            _0x5b8521 -= 0x1;
        if (_0x4f3b37['INPUTS']['keys']['d'] || _0x4f3b37['INPUTS']['keys']['arrowright'])
            _0x205258 += 0x1;
        if (_0x4f3b37['INPUTS']['keys']['a'] || _0x4f3b37['INPUTS']['keys']['arrowleft'])
            _0x205258 -= 0x1;
        if (_0x5b8521 !== 0x0 || _0x205258 !== 0x0) {
            const _0x3a845a = _0x410317 + Math['atan2'](_0x205258, _0x5b8521);
            _0x3b79f8 = Math['cos'](_0x3a845a);
            _0x485614 = Math['sin'](_0x3a845a);
        }
    } else {
        if (_0x4f3b37['INPUTS']['keys']['w'] || _0x4f3b37['INPUTS']['keys']['arrowup'])
            _0x485614 -= 0x1;
        if (_0x4f3b37['INPUTS']['keys']['s'] || _0x4f3b37['INPUTS']['keys']['arrowdown'])
            _0x485614 += 0x1;
        if (_0x4f3b37['INPUTS']['keys']['a'] || _0x4f3b37['INPUTS']['keys']['arrowleft'])
            _0x3b79f8 -= 0x1;
        if (_0x4f3b37['INPUTS']['keys']['d'] || _0x4f3b37['INPUTS']['keys']['arrowright'])
            _0x3b79f8 += 0x1;
        const _0x496b94 = _0x3b79f8 !== 0x0 || _0x485614 !== 0x0;
        if (_0x496b94) {
            const _0x442b2b = Math['sqrt'](_0x3b79f8 * _0x3b79f8 + _0x485614 * _0x485614);
            _0x3b79f8 /= _0x442b2b;
            _0x485614 /= _0x442b2b;
        }
    }
    if (_0x4f3b37['GAME_STATE'] === 'NIGHT' && _0x528e3c === 'Skinwalker') {
        if (_0x4f3b37['NIGHT_ABILITY_OPEN'] || !_0x4f3b37['CURRENT_TARGET']) {
            _0x3b79f8 = 0x0;
            _0x485614 = 0x0;
            _0xedd3af['vx'] = 0x0;
            _0xedd3af['vy'] = 0x0;
            _0xedd3af['x'] = _0x4f3b37['MAP']['columns'] * _0x4f3b37['MAP']['tileSize'] / 0x2 - _0xedd3af['width'] / 0x2;
            _0xedd3af['y'] = _0x4f3b37['MAP']['rows'] * _0x4f3b37['MAP']['tileSize'] / 0x2 - _0xedd3af['height'] / 0x2;
        }
    }
    const _0x360a3c = _0x3b79f8 !== 0x0 || _0x485614 !== 0x0;
    const _0x9f9780 = (_0x4f3b37['INPUTS']['keys']['shift'] || _0xdb3645 || _0x4147a4) && _0x360a3c;
    _0xedd3af['bopTimer'] = _0x9f9780 ? _0xedd3af['bopTimer'] + _0x14da69 : 0x0;
    _0xedd3af['scale'] = 0x1 + (_0xedd3af['bopTimer'] > 0x0 ? Math['sin'](_0xedd3af['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x264954 = Math['pow'](0.001, _0x14da69);
    const _0x3f4d41 = _0x9f9780 ? 0x74a : 0x5d5;
    _0xedd3af['vx'] += _0x3b79f8 * _0x3f4d41 * _0x14da69;
    _0xedd3af['vy'] += _0x485614 * _0x3f4d41 * _0x14da69;
    _0xedd3af['vx'] *= _0x264954;
    _0xedd3af['vy'] *= _0x264954;
    _0xedd3af['x'] += _0xedd3af['vx'] * _0x14da69;
    _0xedd3af['y'] += _0xedd3af['vy'] * _0x14da69;
    for (let _0x4e025e = 0x0; _0x4e025e < 0x3; _0x4e025e++)
        _0x160887();
    for (let _0x269094 = 0x0; _0x269094 < 0x2; _0x269094++)
        _0x55d98e();
    for (let _0x5431aa = 0x0; _0x5431aa < 0x2; _0x5431aa++)
        _0x3a1291();
    if (_0xedd3af['x'] < 0x0)
        _0xedd3af['x'] = 0x0;
    if (_0xedd3af['y'] < 0x0)
        _0xedd3af['y'] = 0x0;
    if (_0xedd3af['x'] + _0xedd3af['width'] > _0x4f3b37['MAP']['columns'] * _0x4f3b37['MAP']['tileSize'])
        _0xedd3af['x'] = _0x4f3b37['MAP']['columns'] * _0x4f3b37['MAP']['tileSize'] - _0xedd3af['width'];
    if (_0xedd3af['y'] + _0xedd3af['height'] > _0x4f3b37['MAP']['rows'] * _0x4f3b37['MAP']['tileSize'])
        _0xedd3af['y'] = _0x4f3b37['MAP']['rows'] * _0x4f3b37['MAP']['tileSize'] - _0xedd3af['height'];
    if (_0x59660e) {
        _0xedd3af['angle'] = _0x40d93c + Math['PI'] / 0x2;
    } else if (_0x55bfc4 !== 0x0 || _0x15fd0d !== 0x0) {
        _0xedd3af['angle'] = Math['atan2'](_0x15fd0d, _0x55bfc4) + Math['PI'] / 0x2;
    } else if (!_0x3cfcf6) {
        _0xedd3af['angle'] = _0x410317 + Math['PI'] / 0x2;
    }
    const _0x3eda18 = _0xedd3af['x'] + _0xedd3af['width'] / 0x2 - _0x4f3b37['CAMERA']['width'] / 0x2;
    const _0x30d571 = _0xedd3af['y'] + _0xedd3af['height'] / 0x2 - _0x4f3b37['CAMERA']['height'] / 0x2;
    if (_0x4f3b37['CAMERA']['x'] === null || isNaN(_0x4f3b37['CAMERA']['x']) || !isFinite(_0x4f3b37['CAMERA']['x'])) {
        _0x4f3b37['CAMERA']['x'] = _0x3eda18;
        _0x4f3b37['CAMERA']['y'] = _0x30d571;
    } else {
        const _0x327891 = 0x1 - Math['exp'](-Math['max'](0x0, _0x14da69) * 0x28);
        _0x4f3b37['CAMERA']['x'] += (_0x3eda18 - _0x4f3b37['CAMERA']['x']) * _0x327891;
        _0x4f3b37['CAMERA']['y'] += (_0x30d571 - _0x4f3b37['CAMERA']['y']) * _0x327891;
    }
    for (const _0x752019 in _0x1df4eb) {
        const _0xe741d2 = _0x1df4eb[_0x752019];
        if (_0xe741d2['renderX'] === undefined) {
            _0xe741d2['renderX'] = _0xe741d2['x'];
            _0xe741d2['renderY'] = _0xe741d2['y'];
            _0xe741d2['renderAngle'] = _0xe741d2['angle'] || 0x0;
        }
        const _0x59412f = _0xe741d2['x'] + (_0xe741d2['vx'] || 0x0) * _0x14da69;
        const _0x769157 = _0xe741d2['y'] + (_0xe741d2['vy'] || 0x0) * _0x14da69;
        _0xe741d2['x'] = _0x59412f;
        _0xe741d2['y'] = _0x769157;
        const _0x1945db = 0x1 - Math['exp'](-_0x14da69 * 0x12);
        const _0x534d6c = _0xe741d2['x'] - _0xe741d2['renderX'], _0x58cb9e = _0xe741d2['y'] - _0xe741d2['renderY'];
        const _0x2db2af = Math['sqrt'](_0x534d6c * _0x534d6c + _0x58cb9e * _0x58cb9e);
        const _0x158da4 = 0xc8;
        if (_0x2db2af > _0x158da4) {
            _0xe741d2['renderX'] = _0xe741d2['x'] - _0x534d6c / _0x2db2af * _0x158da4;
            _0xe741d2['renderY'] = _0xe741d2['y'] - _0x58cb9e / _0x2db2af * _0x158da4;
        }
        _0xe741d2['renderX'] += (_0xe741d2['x'] - _0xe741d2['renderX']) * _0x1945db;
        _0xe741d2['renderY'] += (_0xe741d2['y'] - _0xe741d2['renderY']) * _0x1945db;
        let _0x37a722 = (_0xe741d2['angle'] || 0x0) - _0xe741d2['renderAngle'];
        while (_0x37a722 < -Math['PI'])
            _0x37a722 += Math['PI'] * 0x2;
        while (_0x37a722 > Math['PI'])
            _0x37a722 -= Math['PI'] * 0x2;
        _0xe741d2['renderAngle'] += _0x37a722 * (0x1 - Math['exp'](-_0x14da69 * 0x14));
    }
    if (_0x4f3b37['GAME_STATE'] === 'NIGHT') {
        _0x4df395 = Math['min'](0.6, _0x4df395 + _0x14da69 * 0.5);
    } else {
        _0x4df395 = Math['max'](0x0, _0x4df395 - _0x14da69 * 0.5);
    }
    _0x2a54c5();
    _0x36fec6();
}
function _0x4e9083(_0x4a3d21, _0x23e773, _0x183809, _0x170d0c, _0x305ea9 = !![]) {
    _0x4a3d21['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x48c7bf = _0x4a3d21['measureText'](_0x23e773)['width'];
    const _0x34bd50 = _0x48c7bf + 0x18;
    const _0x5337e2 = 0x1c;
    _0x4a3d21['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x4a3d21['beginPath']();
    if (_0x4a3d21['roundRect']) {
        _0x4a3d21['roundRect'](_0x183809 - _0x34bd50 / 0x2, _0x170d0c - _0x5337e2, _0x34bd50, _0x5337e2, 0x6);
    } else {
        _0x4a3d21['rect'](_0x183809 - _0x34bd50 / 0x2, _0x170d0c - _0x5337e2, _0x34bd50, _0x5337e2);
    }
    _0x4a3d21['fill']();
    if (_0x305ea9) {
        _0x4a3d21['beginPath']();
        _0x4a3d21['moveTo'](_0x183809 - 0x6, _0x170d0c);
        _0x4a3d21['lineTo'](_0x183809 + 0x6, _0x170d0c);
        _0x4a3d21['lineTo'](_0x183809, _0x170d0c + 0x6);
        _0x4a3d21['fill']();
    }
    _0x4a3d21['fillStyle'] = '#ffffff';
    _0x4a3d21['textAlign'] = 'center';
    _0x4a3d21['textBaseline'] = 'middle';
    _0x4a3d21['fillText'](_0x23e773, _0x183809, _0x170d0c - _0x5337e2 / 0x2 + 0x1);
}
function _0x4cf1a3(_0xa18908, _0x2e2ec3, _0x5e9699, _0x54ba9f) {
    if (!_0x2e2ec3 || _0x2e2ec3['length'] === 0x0)
        return;
    let _0x27a488 = _0x54ba9f;
    for (let _0x218ee5 = 0x0; _0x218ee5 < _0x2e2ec3['length']; _0x218ee5++) {
        _0x4e9083(_0xa18908, _0x2e2ec3[_0x218ee5]['text'], _0x5e9699, _0x27a488, _0x218ee5 === 0x0);
        _0x27a488 -= 0x24;
    }
}
function _0x56dce5() {
    if (!_0x4f3b37['SYSTEM']['isReady'])
        return;
    _0x5b368b['fillStyle'] = '#000000';
    _0x5b368b['fillRect'](0x0, 0x0, _0x532c18['width'], _0x532c18['height']);
    _0x5b368b['save']();
    try {
        _0x5b368b['scale'](_0x4f3b37['SYSTEM']['viewScale'], _0x4f3b37['SYSTEM']['viewScale']);
        _0x5b368b['imageSmoothingEnabled'] = ![];
        const _0x503466 = Math['floor'](_0x4f3b37['CAMERA']['x'] || 0x0);
        const _0x2708c5 = Math['floor'](_0x4f3b37['CAMERA']['y'] || 0x0);
        const _0x5849f7 = Math['max'](0x0, Math['floor'](_0x503466 / _0x4f3b37['MAP']['chunkSize']));
        const _0x25241c = Math['min'](_0x4f3b37['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x503466 + _0x4f3b37['CAMERA']['width']) / _0x4f3b37['MAP']['chunkSize']));
        const _0x33bcd8 = Math['max'](0x0, Math['floor'](_0x2708c5 / _0x4f3b37['MAP']['chunkSize']));
        const _0xc7015a = Math['min'](_0x4f3b37['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x2708c5 + _0x4f3b37['CAMERA']['height']) / _0x4f3b37['MAP']['chunkSize']));
        for (let _0x463a69 = _0x33bcd8; _0x463a69 <= _0xc7015a; _0x463a69++)
            for (let _0x22100b = _0x5849f7; _0x22100b <= _0x25241c; _0x22100b++) {
                const _0x4c24c7 = _0x22100b * _0x4f3b37['MAP']['chunkSize'] - _0x503466;
                const _0x333951 = _0x463a69 * _0x4f3b37['MAP']['chunkSize'] - _0x2708c5;
                _0x5b368b['drawImage'](_0x4f3b37['MAP']['bgChunks'][_0x463a69][_0x22100b], _0x4c24c7, _0x333951, _0x4f3b37['MAP']['chunkSize'] + 0x1, _0x4f3b37['MAP']['chunkSize'] + 0x1);
            }
        if (_0xc5a5a6['complete'] && _0xc5a5a6['naturalWidth'] > 0x0) {
            const _0x3f0b59 = _0x4f3b37['MAP']['tileSize'];
            const _0x4dbb4c = _0x3f0b59 * 0xa;
            const _0x339e74 = _0x4f3b37['MAP']['columns'] / 0x2 * _0x3f0b59 - _0x4dbb4c / 0x2 - _0x503466;
            const _0x21b8a7 = _0x4f3b37['MAP']['rows'] / 0x2 * _0x3f0b59 - _0x4dbb4c / 0x2 - _0x2708c5;
            _0x5b368b['imageSmoothingEnabled'] = ![];
            _0x5b368b['drawImage'](_0xc5a5a6, _0x339e74, _0x21b8a7, _0x4dbb4c, _0x4dbb4c);
        }
        if (_0x41e069['complete'] && _0x41e069['naturalWidth'] > 0x0) {
            _0x4f3b37['ENTITIES']['forEach'](_0x4ddaae => {
                if (_0x4ddaae['type'] !== 'table')
                    return;
                _0x5b368b['save']();
                _0x5b368b['imageSmoothingEnabled'] = ![];
                const _0x370564 = _0x41e069['naturalWidth'] >= _0x41e069['naturalHeight'];
                const _0x2c36e6 = _0x4ddaae['w'] >= _0x4ddaae['h'];
                if (_0x370564 === _0x2c36e6) {
                    _0x5b368b['drawImage'](_0x41e069, _0x4ddaae['x'] - _0x503466, _0x4ddaae['y'] - _0x2708c5, _0x4ddaae['w'], _0x4ddaae['h']);
                } else {
                    _0x5b368b['translate'](_0x4ddaae['x'] - _0x503466 + _0x4ddaae['w'] / 0x2, _0x4ddaae['y'] - _0x2708c5 + _0x4ddaae['h'] / 0x2);
                    _0x5b368b['rotate'](Math['PI'] / 0x2);
                    _0x5b368b['drawImage'](_0x41e069, -_0x4ddaae['h'] / 0x2, -_0x4ddaae['w'] / 0x2, _0x4ddaae['h'], _0x4ddaae['w']);
                }
                _0x5b368b['restore']();
            });
        } else {
            _0x4f3b37['ENTITIES']['forEach'](_0x11048c => {
                if (_0x11048c['type'] !== 'table')
                    return;
                _0x5b368b['save']();
                _0x5b368b['fillStyle'] = '#6b4423';
                _0x5b368b['fillRect'](_0x11048c['x'] - _0x503466, _0x11048c['y'] - _0x2708c5, _0x11048c['w'], _0x11048c['h']);
                _0x5b368b['strokeStyle'] = '#422810';
                _0x5b368b['lineWidth'] = 0x3;
                _0x5b368b['strokeRect'](_0x11048c['x'] - _0x503466 + 0x1, _0x11048c['y'] - _0x2708c5 + 0x1, _0x11048c['w'] - 0x2, _0x11048c['h'] - 0x2);
                _0x5b368b['fillStyle'] = '#82532a';
                _0x5b368b['fillRect'](_0x11048c['x'] - _0x503466 + 0x4, _0x11048c['y'] - _0x2708c5 + 0x4, _0x11048c['w'] - 0x8, _0x11048c['h'] - 0x8);
                _0x5b368b['restore']();
            });
        }
        if (_0x1f103a) {
            if (_0x4f3b37['MAP']['wallChunks'] && _0x4f3b37['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x2d0de0 = _0x33bcd8; _0x2d0de0 <= _0xc7015a; _0x2d0de0++) {
                    for (let _0x562efb = _0x5849f7; _0x562efb <= _0x25241c; _0x562efb++) {
                        if (!_0x4f3b37['MAP']['wallChunks'][_0x2d0de0] || !_0x4f3b37['MAP']['wallChunks'][_0x2d0de0][_0x562efb])
                            continue;
                        const _0x3703b7 = _0x562efb * _0x4f3b37['MAP']['chunkSize'] - _0x503466;
                        const _0xea1dcb = _0x2d0de0 * _0x4f3b37['MAP']['chunkSize'] - _0x2708c5;
                        _0x5b368b['drawImage'](_0x4f3b37['MAP']['wallChunks'][_0x2d0de0][_0x562efb], _0x3703b7, _0xea1dcb, _0x4f3b37['MAP']['chunkSize'] + 0x1, _0x4f3b37['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x4b92ea = _0x33bcd8; _0x4b92ea <= _0xc7015a; _0x4b92ea++) {
                for (let _0x12b410 = _0x5849f7; _0x12b410 <= _0x25241c; _0x12b410++) {
                    const _0x10b186 = _0x12b410 * _0x4f3b37['MAP']['chunkSize'] - _0x503466;
                    const _0x4d0c9a = _0x4b92ea * _0x4f3b37['MAP']['chunkSize'] - _0x2708c5;
                    _0x5b368b['drawImage'](_0x4f3b37['MAP']['fgChunks'][_0x4b92ea][_0x12b410], _0x10b186, _0x4d0c9a, _0x4f3b37['MAP']['chunkSize'] + 0x1, _0x4f3b37['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0xf7dd0b = _0x4f3b37['GAME_STATE'] === 'NIGHT' && _0x528e3c === 'Skinwalker' && !_0xedd3af['isDead'];
        const _0x3ae381 = _0xedd3af['x'] - _0x503466 + _0xedd3af['width'] / 0x2;
        const _0x4fc550 = _0xedd3af['y'] - _0x2708c5 + _0xedd3af['height'] / 0x2;
        const _0x224b84 = _0xedd3af['width'] * _0xedd3af['scale'] * 1.3;
        const _0x43f5de = _0xedd3af['height'] * _0xedd3af['scale'] * 1.3;
        for (const _0x2a3085 in _0x1df4eb) {
            const _0xb839d6 = _0x1df4eb[_0x2a3085];
            if (_0xb839d6['isDead'])
                continue;
            const _0x295614 = (_0xb839d6['renderX'] ?? _0xb839d6['x']) - _0x503466 + _0xb839d6['width'] / 0x2;
            const _0x32ecfa = (_0xb839d6['renderY'] ?? _0xb839d6['y']) - _0x2708c5 + _0xb839d6['height'] / 0x2;
            const _0x4eda37 = Math['min'](0x2, Math['max'](0.3, _0xb839d6['scale'] || 0x1));
            const _0x2e588a = _0xb839d6['width'] * _0x4eda37 * 1.3;
            const _0x2c0d64 = _0xb839d6['height'] * _0x4eda37 * 1.3;
            _0x5b368b['save']();
            try {
                _0x5b368b['translate'](_0x295614, _0x32ecfa);
                _0x5b368b['rotate'](_0xb839d6['renderAngle'] ?? 0x0);
                if (_0xb839d6['isDark'])
                    _0x5b368b['filter'] = 'brightness(0)';
                _0x401903(_0x5b368b, _0xb839d6['body'], _0xb839d6['eyes'], _0x2e588a, _0x2c0d64);
                if (_0x1a6424['has'](parseInt(_0x2a3085)) && _0x138160['complete'] && _0x138160['naturalWidth'] > 0x0) {
                    _0x5b368b['drawImage'](_0x138160, -_0x2e588a / 0x2, -_0x2c0d64 / 0x2, _0x2e588a, _0x2c0d64);
                }
                if (_0xb839d6['isDark'])
                    _0x5b368b['filter'] = 'none';
            } finally {
                _0x5b368b['restore']();
            }
            if (!_0x1b80f4((_0xb839d6['renderX'] ?? _0xb839d6['x']) + _0xb839d6['width'] / 0x2, (_0xb839d6['renderY'] ?? _0xb839d6['y']) + _0xb839d6['height'] / 0x2)) {
                _0x5b368b['textAlign'] = 'center';
                _0x5b368b['lineJoin'] = 'round';
                _0x5b368b['lineWidth'] = 0x3;
                _0x5b368b['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x5b368b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x5b368b['fillStyle'] = _0x1a6424['has'](parseInt(_0x2a3085)) ? '#cc88ff' : '#ffffff';
                const _0x5bc038 = _0xb839d6['isDark'] ? '???' : _0xb839d6['name'] + (_0xb839d6['isOwner'] ? '\x20[🗝️]' : '');
                _0x5b368b['strokeText'](_0x5bc038, _0x295614, _0x32ecfa - _0x2c0d64 / 0x2 - 0x10);
                _0x5b368b['fillText'](_0x5bc038, _0x295614, _0x32ecfa - _0x2c0d64 / 0x2 - 0x10);
            }
        }
        if (!_0xedd3af['isDead']) {
            _0x5b368b['save']();
            try {
                _0x5b368b['translate'](_0x3ae381, _0x4fc550);
                _0x5b368b['rotate'](_0xedd3af['angle']);
                if (_0xf7dd0b)
                    _0x5b368b['filter'] = 'brightness(0)';
                _0x401903(_0x5b368b, _0x2aa005, _0x2ec4b2, _0x224b84, _0x43f5de);
                if (_0x1a6424['has'](_0x4c4435) && _0x138160['complete'] && _0x138160['naturalWidth'] > 0x0) {
                    _0x5b368b['drawImage'](_0x138160, -_0x224b84 / 0x2, -_0x43f5de / 0x2, _0x224b84, _0x43f5de);
                }
                if (_0xf7dd0b)
                    _0x5b368b['filter'] = 'none';
            } finally {
                _0x5b368b['restore']();
            }
            if (!_0x1b80f4(_0xedd3af['x'] + _0xedd3af['width'] / 0x2, _0xedd3af['y'] + _0xedd3af['height'] / 0x2)) {
                _0x5b368b['textAlign'] = 'center';
                _0x5b368b['lineJoin'] = 'round';
                _0x5b368b['lineWidth'] = 0x3;
                _0x5b368b['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x5b368b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x5b368b['fillStyle'] = _0x1a6424['has'](_0x4c4435) ? '#cc88ff' : '#ffffff';
                const _0x17b161 = _0xf7dd0b ? '???' : _0x2dce0b + (_0x12002b ? '\x20[🗝️]' : '');
                _0x5b368b['strokeText'](_0x17b161, _0x3ae381, _0x4fc550 - _0x43f5de / 0x2 - 0x10);
                _0x5b368b['fillText'](_0x17b161, _0x3ae381, _0x4fc550 - _0x43f5de / 0x2 - 0x10);
            }
        }
        if (_0x4f3b37['MAP']['wallChunks'] && _0x4f3b37['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x4422bc = _0x33bcd8; _0x4422bc <= _0xc7015a; _0x4422bc++)
                for (let _0x29f705 = _0x5849f7; _0x29f705 <= _0x25241c; _0x29f705++) {
                    if (!_0x4f3b37['MAP']['wallChunks'][_0x4422bc] || !_0x4f3b37['MAP']['wallChunks'][_0x4422bc][_0x29f705])
                        continue;
                    const _0x597d57 = _0x29f705 * _0x4f3b37['MAP']['chunkSize'] - _0x503466;
                    const _0x5e7766 = _0x4422bc * _0x4f3b37['MAP']['chunkSize'] - _0x2708c5;
                    _0x5b368b['drawImage'](_0x4f3b37['MAP']['wallChunks'][_0x4422bc][_0x29f705], _0x597d57, _0x5e7766, _0x4f3b37['MAP']['chunkSize'] + 0x1, _0x4f3b37['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x2447b2 of _0x4f3b37['ENTITIES']) {
            if (_0x2447b2['type'] !== 'npc')
                continue;
            const _0x580fcf = _0x2447b2['x'] - _0x503466 + _0x2447b2['w'] / 0x2;
            const _0x2ac21c = _0x2447b2['y'] - _0x2708c5 + _0x2447b2['h'] / 0x2;
            const _0x25a7c3 = _0x2447b2['w'];
            const _0x11614e = _0x2447b2['h'];
            _0x5b368b['save']();
            _0x5b368b['translate'](_0x580fcf, _0x2ac21c);
            _0x5b368b['rotate'](_0x2447b2['angle'] !== undefined ? _0x2447b2['angle'] : 0x0);
            _0x401903(_0x5b368b, _0x2447b2['body'] || 'yanito932.png', _0x2447b2['eyes'], _0x25a7c3, _0x11614e);
            _0x5b368b['restore']();
            _0x5b368b['textAlign'] = 'center';
            _0x5b368b['lineJoin'] = 'round';
            _0x5b368b['lineWidth'] = 0x3;
            _0x5b368b['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x5b368b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x5b368b['fillStyle'] = '#aaaaaa';
            _0x5b368b['strokeText'](_0x2447b2['name'] || 'NPC', _0x580fcf, _0x2ac21c - _0x11614e / 0x2 - 0x10);
            _0x5b368b['fillText'](_0x2447b2['name'] || 'NPC', _0x580fcf, _0x2ac21c - _0x11614e / 0x2 - 0x10);
        }
        if (_0xedd3af['isDead']) {
            for (const _0x379f7b in _0x1df4eb) {
                const _0x158b5e = _0x1df4eb[_0x379f7b];
                if (!_0x158b5e['isDead'])
                    continue;
                const _0x3bc49b = (_0x158b5e['renderX'] ?? _0x158b5e['x']) - _0x503466 + _0x158b5e['width'] / 0x2;
                const _0x168ea9 = (_0x158b5e['renderY'] ?? _0x158b5e['y']) - _0x2708c5 + _0x158b5e['height'] / 0x2;
                const _0xe0f5b3 = _0x158b5e['width'] * (_0x158b5e['scale'] || 0x1) * 1.3;
                const _0x257d2b = _0x158b5e['height'] * (_0x158b5e['scale'] || 0x1) * 1.3;
                _0x5b368b['save']();
                try {
                    _0x5b368b['translate'](_0x3bc49b, _0x168ea9);
                    _0x5b368b['rotate'](_0x158b5e['renderAngle'] ?? 0x0);
                    _0x5b368b['globalAlpha'] = 0.3;
                    _0x401903(_0x5b368b, _0x158b5e['body'], _0x158b5e['eyes'], _0xe0f5b3, _0x257d2b);
                } finally {
                    _0x5b368b['restore']();
                }
                if (!_0x1b80f4((_0x158b5e['renderX'] ?? _0x158b5e['x']) + _0x158b5e['width'] / 0x2, (_0x158b5e['renderY'] ?? _0x158b5e['y']) + _0x158b5e['height'] / 0x2)) {
                    _0x5b368b['save']();
                    _0x5b368b['globalAlpha'] = 0.3;
                    _0x5b368b['textAlign'] = 'center';
                    _0x5b368b['lineJoin'] = 'round';
                    _0x5b368b['lineWidth'] = 0x3;
                    _0x5b368b['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x5b368b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x5b368b['fillStyle'] = '#ffffff';
                    const _0x21b0d9 = _0x158b5e['name'] + (_0x158b5e['isOwner'] ? '\x20[🗝️]' : '');
                    _0x5b368b['strokeText'](_0x21b0d9, _0x3bc49b, _0x168ea9 - _0x257d2b / 0x2 - 0x10);
                    _0x5b368b['fillText'](_0x21b0d9, _0x3bc49b, _0x168ea9 - _0x257d2b / 0x2 - 0x10);
                    _0x5b368b['restore']();
                }
            }
            _0x5b368b['save']();
            try {
                _0x5b368b['translate'](_0x3ae381, _0x4fc550);
                _0x5b368b['rotate'](_0xedd3af['angle']);
                _0x5b368b['globalAlpha'] = 0.3;
                _0x401903(_0x5b368b, _0x2aa005, _0x2ec4b2, _0x224b84, _0x43f5de);
            } finally {
                _0x5b368b['restore']();
            }
            if (!_0x1b80f4(_0xedd3af['x'] + _0xedd3af['width'] / 0x2, _0xedd3af['y'] + _0xedd3af['height'] / 0x2)) {
                _0x5b368b['save']();
                _0x5b368b['globalAlpha'] = 0.3;
                _0x5b368b['textAlign'] = 'center';
                _0x5b368b['lineJoin'] = 'round';
                _0x5b368b['lineWidth'] = 0x3;
                _0x5b368b['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x5b368b['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x5b368b['fillStyle'] = '#ffffff';
                const _0xcfd7b7 = _0x2dce0b + (_0x12002b ? '\x20[🗝️]' : '');
                _0x5b368b['strokeText'](_0xcfd7b7, _0x3ae381, _0x4fc550 - _0x43f5de / 0x2 - 0x10);
                _0x5b368b['fillText'](_0xcfd7b7, _0x3ae381, _0x4fc550 - _0x43f5de / 0x2 - 0x10);
                _0x5b368b['restore']();
            }
        }
        for (let _0x49f898 = _0x33bcd8; _0x49f898 <= _0xc7015a; _0x49f898++)
            for (let _0x2716d5 = _0x5849f7; _0x2716d5 <= _0x25241c; _0x2716d5++) {
                const _0x4bae36 = _0x2716d5 * _0x4f3b37['MAP']['chunkSize'] - _0x503466;
                const _0x2789f0 = _0x49f898 * _0x4f3b37['MAP']['chunkSize'] - _0x2708c5;
                _0x5b368b['drawImage'](_0x4f3b37['MAP']['fgChunks'][_0x49f898][_0x2716d5], _0x4bae36, _0x2789f0, _0x4f3b37['MAP']['chunkSize'] + 0x1, _0x4f3b37['MAP']['chunkSize'] + 0x1);
            }
        if (_0x4f3b37['EDITOR']['enabled'] && _0x4f3b37['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x463941 = _0x4f3b37['INPUTS']['mouseX'] / _0x4f3b37['SYSTEM']['viewScale'] + _0x4f3b37['CAMERA']['x'];
            const _0x3ce594 = _0x4f3b37['INPUTS']['mouseY'] / _0x4f3b37['SYSTEM']['viewScale'] + _0x4f3b37['CAMERA']['y'];
            const _0x41e99c = Math['floor'](_0x463941 / _0x4f3b37['MAP']['tileSize']);
            const _0x5f4321 = Math['floor'](_0x3ce594 / _0x4f3b37['MAP']['tileSize']);
            if (_0x41e99c >= 0x0 && _0x41e99c < _0x4f3b37['MAP']['columns'] && _0x5f4321 >= 0x0 && _0x5f4321 < _0x4f3b37['MAP']['rows']) {
                const _0x5010ea = _0x41e99c * _0x4f3b37['MAP']['tileSize'] - _0x503466;
                const _0x1c687e = _0x5f4321 * _0x4f3b37['MAP']['tileSize'] - _0x2708c5;
                _0x5b368b['save']();
                _0x5b368b['globalAlpha'] = 0.5;
                if (_0x4f3b37['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0xb3753f = _0x4f3b37['EDITOR']['selectedTileGid'] - 0x1;
                    _0x5b368b['drawImage'](_0x353030, _0xb3753f % _0x4f3b37['MAP']['tilesetCols'] * _0x4f3b37['MAP']['tileSize'], Math['floor'](_0xb3753f / _0x4f3b37['MAP']['tilesetCols']) * _0x4f3b37['MAP']['tileSize'], _0x4f3b37['MAP']['tileSize'], _0x4f3b37['MAP']['tileSize'], _0x5010ea, _0x1c687e, _0x4f3b37['MAP']['tileSize'], _0x4f3b37['MAP']['tileSize']);
                } else {
                    _0x5b368b['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x5b368b['fillRect'](_0x5010ea, _0x1c687e, _0x4f3b37['MAP']['tileSize'], _0x4f3b37['MAP']['tileSize']);
                }
                _0x5b368b['restore']();
            }
        }
        _0x438ede(_0x5b368b, _0x503466, _0x2708c5);
        if (_0x4df395 > 0x0) {
            _0x5b368b['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x4df395 + ')';
            _0x5b368b['fillRect'](0x0, 0x0, _0x4f3b37['CAMERA']['width'], _0x4f3b37['CAMERA']['height']);
        }
        for (const _0x451625 in _0x1df4eb) {
            const _0x3752e6 = _0x1df4eb[_0x451625];
            if (_0x3752e6['isDead'] && !_0xedd3af['isDead'])
                continue;
            const _0x11c00c = (_0x3752e6['renderX'] ?? _0x3752e6['x']) - _0x503466 + _0x3752e6['width'] / 0x2;
            const _0x3b8e52 = (_0x3752e6['renderY'] ?? _0x3752e6['y']) - _0x2708c5 + _0x3752e6['height'] / 0x2;
            _0x4cf1a3(_0x5b368b, _0x3752e6['chats'], _0x11c00c, _0x3b8e52 - _0x3752e6['height'] / 0x2 - 0x20);
        }
        _0x4cf1a3(_0x5b368b, _0xedd3af['chats'], _0x3ae381, _0x4fc550 - _0xedd3af['height'] / 0x2 - 0x20);
    } finally {
        _0x5b368b['restore']();
    }
}
function _0x4a0e25(_0x28a070) {
    if (!_0x4f3b37['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x4a0e25);
    let _0x19352c = (_0x28a070 - _0x4f3b37['SYSTEM']['lastTime']) / 0x3e8;
    _0x4f3b37['SYSTEM']['lastTime'] = _0x28a070;
    if (_0x19352c > 0.1)
        _0x19352c = 0.1;
    if (_0x19352c < 0x0 || isNaN(_0x19352c))
        _0x19352c = 0.016;
    if (_0x1f103a) {
        _0x353468(_0x19352c);
        _0x56dce5();
        return;
    }
    if (!_0x4c4435)
        return;
    _0x41bea6(_0x19352c);
    _0x2f6052['tick'](_0x28a070);
    _0x56dce5();
}
function _0x45e302() {
    const _0x56e741 = Math['ceil'](_0x4f3b37['MAP']['columns'] * _0x4f3b37['MAP']['tileSize'] / _0x4f3b37['MAP']['chunkSize']);
    const _0x1985a7 = Math['ceil'](_0x4f3b37['MAP']['rows'] * _0x4f3b37['MAP']['tileSize'] / _0x4f3b37['MAP']['chunkSize']);
    _0x4f3b37['MAP']['bgChunks'] = [];
    _0x4f3b37['MAP']['fgChunks'] = [];
    _0x4f3b37['MAP']['wallChunks'] = [];
    for (let _0x35ef6f = 0x0; _0x35ef6f < _0x1985a7; _0x35ef6f++) {
        _0x4f3b37['MAP']['bgChunks'][_0x35ef6f] = [];
        _0x4f3b37['MAP']['fgChunks'][_0x35ef6f] = [];
        _0x4f3b37['MAP']['wallChunks'][_0x35ef6f] = [];
        for (let _0x2a40d7 = 0x0; _0x2a40d7 < _0x56e741; _0x2a40d7++) {
            const _0x224f71 = document['createElement']('canvas');
            _0x224f71['width'] = _0x224f71['height'] = _0x4f3b37['MAP']['chunkSize'];
            const _0x3b8352 = document['createElement']('canvas');
            _0x3b8352['width'] = _0x3b8352['height'] = _0x4f3b37['MAP']['chunkSize'];
            const _0x30d6e2 = document['createElement']('canvas');
            _0x30d6e2['width'] = _0x30d6e2['height'] = _0x4f3b37['MAP']['chunkSize'];
            _0x4f3b37['MAP']['bgChunks'][_0x35ef6f][_0x2a40d7] = _0x224f71;
            _0x4f3b37['MAP']['fgChunks'][_0x35ef6f][_0x2a40d7] = _0x3b8352;
            _0x4f3b37['MAP']['wallChunks'][_0x35ef6f][_0x2a40d7] = _0x30d6e2;
            _0x55fe5b(_0x2a40d7, _0x35ef6f);
        }
    }
}
function _0x55fe5b(_0x23f6ec, _0x3a3433) {
    const _0xfc1602 = _0x4f3b37['MAP']['bgChunks'][_0x3a3433][_0x23f6ec]['getContext']('2d', { 'alpha': !![] });
    const _0x2f08ce = _0x4f3b37['MAP']['fgChunks'][_0x3a3433][_0x23f6ec]['getContext']('2d', { 'alpha': !![] });
    const _0x254ee0 = _0x4f3b37['MAP']['wallChunks'][_0x3a3433] && _0x4f3b37['MAP']['wallChunks'][_0x3a3433][_0x23f6ec] ? _0x4f3b37['MAP']['wallChunks'][_0x3a3433][_0x23f6ec]['getContext']('2d', { 'alpha': !![] }) : null;
    _0xfc1602['imageSmoothingEnabled'] = _0x2f08ce['imageSmoothingEnabled'] = ![];
    if (_0x254ee0)
        _0x254ee0['imageSmoothingEnabled'] = ![];
    _0xfc1602['clearRect'](0x0, 0x0, _0x4f3b37['MAP']['chunkSize'], _0x4f3b37['MAP']['chunkSize']);
    _0x2f08ce['clearRect'](0x0, 0x0, _0x4f3b37['MAP']['chunkSize'], _0x4f3b37['MAP']['chunkSize']);
    if (_0x254ee0)
        _0x254ee0['clearRect'](0x0, 0x0, _0x4f3b37['MAP']['chunkSize'], _0x4f3b37['MAP']['chunkSize']);
    const _0x1f4474 = Math['floor'](_0x23f6ec * _0x4f3b37['MAP']['chunkSize'] / _0x4f3b37['MAP']['tileSize']);
    const _0x365420 = Math['ceil']((_0x23f6ec + 0x1) * _0x4f3b37['MAP']['chunkSize'] / _0x4f3b37['MAP']['tileSize']);
    const _0x818aba = Math['floor'](_0x3a3433 * _0x4f3b37['MAP']['chunkSize'] / _0x4f3b37['MAP']['tileSize']);
    const _0x209af0 = Math['ceil']((_0x3a3433 + 0x1) * _0x4f3b37['MAP']['chunkSize'] / _0x4f3b37['MAP']['tileSize']);
    const _0x436fdd = 0.5;
    const _0x474a0c = _0x4f3b37['MAP']['tileSize'] - _0x436fdd * 0x2;
    _0x4f3b37['MAP']['layers']['forEach'](_0x3607fb => {
        const _0x2b4f66 = _0x3607fb['name'] === 'walls';
        const _0x1ae5e5 = _0x3607fb['name'] === 'trees' ? _0x2f08ce : _0x2b4f66 ? _0x254ee0 || _0xfc1602 : _0xfc1602;
        for (let _0x134a2f = Math['max'](0x0, _0x818aba); _0x134a2f < Math['min'](_0x4f3b37['MAP']['rows'], _0x209af0); _0x134a2f++) {
            for (let _0xcbc5eb = Math['max'](0x0, _0x1f4474); _0xcbc5eb < Math['min'](_0x4f3b37['MAP']['columns'], _0x365420); _0xcbc5eb++) {
                let _0x15fa75 = _0x3607fb['data'][_0x134a2f * _0x4f3b37['MAP']['columns'] + _0xcbc5eb];
                if (_0x3607fb['name'] === 'floor2' && _0x4f3b37['MAP']['doors'] && _0x4f3b37['MAP']['doors'][_0x134a2f * _0x4f3b37['MAP']['columns'] + _0xcbc5eb]) {
                    _0x15fa75 = 0x2;
                }
                if (_0x15fa75 > 0x0) {
                    const _0x41e5e7 = _0x15fa75 - 0x1;
                    const _0x2169e3 = _0x41e5e7 % _0x4f3b37['MAP']['tilesetCols'] * _0x4f3b37['MAP']['tileSize'] + _0x436fdd;
                    const _0x3ee303 = Math['floor'](_0x41e5e7 / _0x4f3b37['MAP']['tilesetCols']) * _0x4f3b37['MAP']['tileSize'] + _0x436fdd;
                    const _0x33e609 = _0xcbc5eb * _0x4f3b37['MAP']['tileSize'] - _0x23f6ec * _0x4f3b37['MAP']['chunkSize'];
                    const _0x4f25c7 = _0x134a2f * _0x4f3b37['MAP']['tileSize'] - _0x3a3433 * _0x4f3b37['MAP']['chunkSize'];
                    if (_0x15fa75 === 0x4) {
                        const _0x42af16 = 0x1;
                        const _0x484f89 = _0x42af16 % _0x4f3b37['MAP']['tilesetCols'] * _0x4f3b37['MAP']['tileSize'] + _0x436fdd;
                        const _0x631cf5 = Math['floor'](_0x42af16 / _0x4f3b37['MAP']['tilesetCols']) * _0x4f3b37['MAP']['tileSize'] + _0x436fdd;
                        _0xfc1602['drawImage'](_0x353030, _0x484f89, _0x631cf5, _0x474a0c, _0x474a0c, _0x33e609, _0x4f25c7, _0x4f3b37['MAP']['tileSize'], _0x4f3b37['MAP']['tileSize']);
                        let _0x7a4dff = _0x4f3b37['MAP']['doors'] ? _0x4f3b37['MAP']['doors'][_0x134a2f * _0x4f3b37['MAP']['columns'] + _0xcbc5eb] : null;
                        if (!_0x7a4dff) {
                            const _0x34e3de = _0x4f3b37['MAP']['layers']['find'](_0x35273b => _0x35273b['name'] === 'walls');
                            const _0xe29d30 = _0x134a2f > 0x0 && _0x34e3de && _0x34e3de['data'][(_0x134a2f - 0x1) * _0x4f3b37['MAP']['columns'] + _0xcbc5eb] > 0x0;
                            const _0x39651b = _0x134a2f < _0x4f3b37['MAP']['rows'] - 0x1 && _0x34e3de && _0x34e3de['data'][(_0x134a2f + 0x1) * _0x4f3b37['MAP']['columns'] + _0xcbc5eb] > 0x0;
                            const _0x4e5071 = _0xcbc5eb > 0x0 && _0x34e3de && _0x34e3de['data'][_0x134a2f * _0x4f3b37['MAP']['columns'] + _0xcbc5eb - 0x1] > 0x0;
                            const _0x2b9f95 = _0xcbc5eb < _0x4f3b37['MAP']['columns'] - 0x1 && _0x34e3de && _0x34e3de['data'][_0x134a2f * _0x4f3b37['MAP']['columns'] + _0xcbc5eb + 0x1] > 0x0;
                            if (_0x4e5071 && _0x2b9f95)
                                _0x7a4dff = _0x134a2f < _0x4f3b37['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0xe29d30 && _0x39651b)
                                _0x7a4dff = _0xcbc5eb < _0x4f3b37['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x33d71c = 0x0;
                        if (_0x7a4dff === 'bottom')
                            _0x33d71c = Math['PI'] / 0x2;
                        else if (_0x7a4dff === 'left')
                            _0x33d71c = Math['PI'];
                        else if (_0x7a4dff === 'top')
                            _0x33d71c = -Math['PI'] / 0x2;
                        else if (_0x7a4dff === 'right')
                            _0x33d71c = 0x0;
                        if (_0x33d71c !== 0x0) {
                            _0x1ae5e5['save']();
                            _0x1ae5e5['translate'](_0x33e609 + _0x4f3b37['MAP']['tileSize'] / 0x2, _0x4f25c7 + _0x4f3b37['MAP']['tileSize'] / 0x2);
                            _0x1ae5e5['rotate'](_0x33d71c);
                            _0x1ae5e5['drawImage'](_0x353030, _0x2169e3, _0x3ee303, _0x474a0c, _0x474a0c, -_0x4f3b37['MAP']['tileSize'] / 0x2, -_0x4f3b37['MAP']['tileSize'] / 0x2, _0x4f3b37['MAP']['tileSize'], _0x4f3b37['MAP']['tileSize']);
                            _0x1ae5e5['restore']();
                        } else {
                            _0x1ae5e5['drawImage'](_0x353030, _0x2169e3, _0x3ee303, _0x474a0c, _0x474a0c, _0x33e609, _0x4f25c7, _0x4f3b37['MAP']['tileSize'], _0x4f3b37['MAP']['tileSize']);
                        }
                    } else {
                        _0x1ae5e5['drawImage'](_0x353030, _0x2169e3, _0x3ee303, _0x474a0c, _0x474a0c, _0x33e609, _0x4f25c7, _0x4f3b37['MAP']['tileSize'], _0x4f3b37['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x1dbb57() {
    _0x353030['crossOrigin'] = 'Anonymous';
    _0x353030['onload'] = () => {
        _0x4f3b37['MAP']['tilesetCols'] = 0x3;
        _0x215004();
    };
    _0x353030['onerror'] = () => {
        _0x4f3b37['MAP']['tilesetCols'] = 0x1;
        _0x215004();
    };
    _0x353030['src'] = 'assets/tilesheet.png';
    _0xc5a5a6['crossOrigin'] = 'Anonymous';
    _0xc5a5a6['onload'] = _0x215004;
    _0xc5a5a6['onerror'] = () => {
        _0x215004();
    };
    _0xc5a5a6['src'] = 'assets/center.png';
    _0x41e069['crossOrigin'] = 'Anonymous';
    _0x41e069['onload'] = _0x215004;
    _0x41e069['onerror'] = () => {
        _0x215004();
    };
    _0x41e069['src'] = 'assets/table.png';
}
function _0x215004() {
    _0x4f3b37['SYSTEM']['assetsLoaded']++;
    if (_0x4f3b37['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x5725e3();
    }
}
function _0x1ba70d(_0x3476ab, _0x221238) {
    if (!_0x12002b || !_0x1f7396)
        return;
    const _0x3e02bb = _0x3476ab / _0x4f3b37['SYSTEM']['viewScale'] + _0x4f3b37['CAMERA']['x'];
    const _0x280e1e = _0x221238 / _0x4f3b37['SYSTEM']['viewScale'] + _0x4f3b37['CAMERA']['y'];
    const _0x4f9639 = Math['floor'](_0x3e02bb / _0x4f3b37['MAP']['tileSize']);
    const _0x455e6b = Math['floor'](_0x280e1e / _0x4f3b37['MAP']['tileSize']);
    if (_0x4f9639 >= 0x0 && _0x4f9639 < _0x4f3b37['MAP']['columns'] && _0x455e6b >= 0x0 && _0x455e6b < _0x4f3b37['MAP']['rows'])
        _0x1f7396['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x4f3b37['EDITOR']['selectedLayer'],
            'col': _0x4f9639,
            'row': _0x455e6b,
            'gid': _0x4f3b37['EDITOR']['selectedTileGid']
        }));
}
function _0x1a70b2() {
    const _0x1e9af9 = document['getElementById']('palette');
    if (!_0x1e9af9 || _0x1e9af9['children']['length'] > 0x0)
        return;
    const _0x2c810b = 0x40;
    const _0x17bbaf = _0x353030;
    const _0x5c193a = document['createElement']('div');
    _0x5c193a['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x1a54fd = document['createElement']('canvas');
    _0x1a54fd['width'] = 0xc0;
    _0x1a54fd['height'] = 0xa0;
    _0x1a54fd['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x5c193a['appendChild'](_0x1a54fd);
    const _0x277b3d = document['createElement']('div');
    _0x277b3d['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x5c193a['appendChild'](_0x277b3d);
    let _0x132fa7 = 0x0, _0x46cab0 = 0x0;
    let _0x120839 = ![], _0x395070 = 0x0, _0x2ed8ac = 0x0, _0x37a64e = 0x0, _0x4691b7 = 0x0;
    function _0x162d31() {
        const _0x55409e = _0x1a54fd['getContext']('2d');
        _0x55409e['clearRect'](0x0, 0x0, _0x1a54fd['width'], _0x1a54fd['height']);
        _0x55409e['imageSmoothingEnabled'] = ![];
        if (_0x17bbaf['complete'] && _0x17bbaf['naturalWidth'] > 0x0) {
            _0x55409e['drawImage'](_0x17bbaf, _0x132fa7, _0x46cab0, _0x1a54fd['width'], _0x1a54fd['height'], 0x0, 0x0, _0x1a54fd['width'], _0x1a54fd['height']);
        }
        _0x55409e['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x55409e['lineWidth'] = 0x1;
        const _0x39230e = Math['floor'](_0x132fa7 / _0x2c810b);
        const _0xe05d9a = Math['floor'](_0x46cab0 / _0x2c810b);
        for (let _0x572aa7 = _0x39230e; _0x572aa7 <= _0x39230e + Math['ceil'](_0x1a54fd['width'] / _0x2c810b) + 0x1; _0x572aa7++) {
            const _0x58edde = _0x572aa7 * _0x2c810b - _0x132fa7;
            _0x55409e['beginPath']();
            _0x55409e['moveTo'](_0x58edde, 0x0);
            _0x55409e['lineTo'](_0x58edde, _0x1a54fd['height']);
            _0x55409e['stroke']();
        }
        for (let _0x116bd0 = _0xe05d9a; _0x116bd0 <= _0xe05d9a + Math['ceil'](_0x1a54fd['height'] / _0x2c810b) + 0x1; _0x116bd0++) {
            const _0x3ae03c = _0x116bd0 * _0x2c810b - _0x46cab0;
            _0x55409e['beginPath']();
            _0x55409e['moveTo'](0x0, _0x3ae03c);
            _0x55409e['lineTo'](_0x1a54fd['width'], _0x3ae03c);
            _0x55409e['stroke']();
        }
    }
    function _0x2d4c25() {
        const _0x333673 = Math['max'](0x1, Math['ceil'](_0x17bbaf['naturalWidth'] / _0x2c810b));
        const _0x1e7512 = _0x4f3b37['EDITOR']['selectedTileGid'];
        if (_0x1e7512 <= 0x0) {
            _0x277b3d['style']['display'] = 'none';
            return;
        }
        const _0x18cd2d = _0x1e7512 - 0x1;
        const _0x4f519f = _0x18cd2d % _0x333673;
        const _0x1f5a13 = Math['floor'](_0x18cd2d / _0x333673);
        const _0x398fec = _0x4f519f * _0x2c810b - _0x132fa7;
        const _0x45a581 = _0x1f5a13 * _0x2c810b - _0x46cab0;
        _0x277b3d['style']['display'] = 'block';
        _0x277b3d['style']['left'] = _0x398fec + 'px';
        _0x277b3d['style']['top'] = _0x45a581 + 'px';
    }
    _0x17bbaf['onload'] = () => {
        _0x162d31();
        _0x2d4c25();
    };
    if (_0x17bbaf['complete'] && _0x17bbaf['naturalWidth'] > 0x0) {
        _0x162d31();
        _0x2d4c25();
    }
    _0x5c193a['addEventListener']('mousedown', _0x1a88dc => {
        if (_0x1a88dc['button'] === 0x0) {
            _0x120839 = !![];
            _0x395070 = _0x1a88dc['clientX'];
            _0x2ed8ac = _0x1a88dc['clientY'];
            _0x37a64e = _0x132fa7;
            _0x4691b7 = _0x46cab0;
            _0x5c193a['style']['cursor'] = 'grabbing';
            _0x1a88dc['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x2d8c07 => {
        if (!_0x120839)
            return;
        const _0x539067 = _0x395070 - _0x2d8c07['clientX'];
        const _0x311f33 = _0x2ed8ac - _0x2d8c07['clientY'];
        const _0x4d78c2 = Math['max'](0x0, _0x17bbaf['naturalWidth'] - _0x1a54fd['width']);
        const _0x30ba9d = Math['max'](0x0, _0x17bbaf['naturalHeight'] - _0x1a54fd['height']);
        _0x132fa7 = Math['max'](0x0, Math['min'](_0x4d78c2, _0x37a64e + _0x539067));
        _0x46cab0 = Math['max'](0x0, Math['min'](_0x30ba9d, _0x4691b7 + _0x311f33));
        _0x162d31();
        _0x2d4c25();
    });
    window['addEventListener']('mouseup', _0x350cfa => {
        if (_0x120839) {
            _0x120839 = ![];
            _0x5c193a['style']['cursor'] = 'grab';
        }
    });
    _0x5c193a['addEventListener']('click', _0x48909d => {
        const _0x50e2b1 = _0x5c193a['getBoundingClientRect']();
        const _0xd24f93 = _0x48909d['clientX'] - _0x50e2b1['left'] + _0x132fa7;
        const _0x5de08b = _0x48909d['clientY'] - _0x50e2b1['top'] + _0x46cab0;
        const _0x5e4c12 = Math['max'](0x1, Math['ceil'](_0x17bbaf['naturalWidth'] / _0x2c810b));
        const _0x4d902c = Math['floor'](_0xd24f93 / _0x2c810b);
        const _0x1abd7f = Math['floor'](_0x5de08b / _0x2c810b);
        const _0xcf9bfe = _0x1abd7f * _0x5e4c12 + _0x4d902c + 0x1;
        _0x4f3b37['EDITOR']['selectedTileGid'] = _0xcf9bfe;
        _0x2d4c25();
    });
    _0x1e9af9['appendChild'](_0x5c193a);
    const _0x1ce6e0 = document['createElement']('div');
    _0x1ce6e0['className'] = 'tile-btn\x20eraser-btn';
    _0x1ce6e0['title'] = 'Eraser\x20(gid\x200)';
    _0x1ce6e0['onclick'] = () => {
        _0x4f3b37['EDITOR']['selectedTileGid'] = 0x0;
        _0x277b3d['style']['display'] = 'none';
    };
    _0x1e9af9['appendChild'](_0x1ce6e0);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x4f3b37['EDITOR']['enabled'] = !_0x4f3b37['EDITOR']['enabled'];
        const _0x41949d = document['getElementById']('editor-tools');
        if (_0x4f3b37['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x41949d['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x41949d['style']['display'] = 'none';
        }
    });
    const _0x34175b = document['getElementById']('start-game-btn');
    if (_0x34175b) {
        _0x34175b['addEventListener']('click', () => {
            if (_0x1f7396)
                _0x1f7396['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x3bb57e = document['getElementById']('rolelist-toggle-btn');
    if (_0x3bb57e) {
        let _0x51d109 = 'subalignments';
        _0x3bb57e['addEventListener']('click', () => {
            if (_0x51d109 === 'subalignments')
                _0x51d109 = 'precise';
            else if (_0x51d109 === 'precise')
                _0x51d109 = 'off';
            else
                _0x51d109 = 'subalignments';
            _0x3bb57e['innerText'] = 'Role\x20List:\x20' + _0x51d109['charAt'](0x0)['toUpperCase']() + _0x51d109['slice'](0x1);
            if (_0x1f7396)
                _0x1f7396['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x51d109
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x22351d => {
        if (_0x22351d['id'] === 'editor-toggle-btn' || _0x22351d['id'] === 'start-game-btn' || _0x22351d['id'] === 'rolelist-toggle-btn')
            return;
        _0x22351d['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x7fcd72 => _0x7fcd72['classList']['remove']('active'));
            _0x22351d['classList']['add']('active');
            _0x4f3b37['EDITOR']['selectedLayer'] = _0x22351d['dataset']['layer'];
        });
    });
}
function _0x246b68(_0x30d2fd) {
    if (_0x1f7396)
        _0x1f7396['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x30d2fd
        }));
}
function _0x4bac70(_0x39b0cf) {
    if (_0x1f7396)
        _0x1f7396['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x39b0cf
        }));
}
function _0x44bfa0(_0x34f618, _0x2011a5, _0x10c4a1, _0x45cea9) {
    const _0x126b92 = document['getElementById']('admin-panel');
    if (_0x126b92)
        _0x126b92['remove']();
    if (_0x126b92 && _0x126b92['dataset']['target'] === String(_0x34f618))
        return;
    const _0x5bf2ea = document['createElement']('div');
    _0x5bf2ea['id'] = 'admin-panel';
    _0x5bf2ea['dataset']['target'] = String(_0x34f618);
    _0x5bf2ea['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x12fe2e = document['createElement']('div');
    _0x12fe2e['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x12fe2e['textContent'] = _0x2011a5;
    _0x5bf2ea['appendChild'](_0x12fe2e);
    const _0x4e0c96 = document['createElement']('button');
    _0x4e0c96['textContent'] = 'Kick';
    _0x4e0c96['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x4e0c96['onmouseenter'] = () => _0x4e0c96['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x4e0c96['onmouseleave'] = () => _0x4e0c96['style']['background'] = 'transparent';
    _0x4e0c96['onclick'] = () => {
        _0x246b68(_0x34f618);
        _0x5bf2ea['remove']();
    };
    _0x5bf2ea['appendChild'](_0x4e0c96);
    const _0x171567 = document['createElement']('button');
    _0x171567['textContent'] = 'Ban';
    _0x171567['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x171567['onmouseenter'] = () => _0x171567['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x171567['onmouseleave'] = () => _0x171567['style']['background'] = 'transparent';
    _0x171567['onclick'] = () => {
        _0x4bac70(_0x34f618);
        _0x5bf2ea['remove']();
    };
    _0x5bf2ea['appendChild'](_0x171567);
    document['body']['appendChild'](_0x5bf2ea);
    const _0x4c4590 = _0x5bf2ea['offsetWidth'] || 0x91;
    const _0x28393d = _0x5bf2ea['offsetHeight'] || 0x50;
    let _0x19533c = _0x10c4a1 - _0x4c4590;
    let _0x2dd03a = _0x45cea9;
    if (_0x19533c < 0x4)
        _0x19533c = _0x10c4a1;
    if (_0x2dd03a + _0x28393d > window['innerHeight'] - 0x4)
        _0x2dd03a = window['innerHeight'] - _0x28393d - 0x4;
    _0x5bf2ea['style']['left'] = _0x19533c + 'px';
    _0x5bf2ea['style']['top'] = _0x2dd03a + 'px';
    const _0x5a5b45 = _0x57c694 => {
        if (!_0x5bf2ea['contains'](_0x57c694['target'])) {
            _0x5bf2ea['remove']();
            document['removeEventListener']('mousedown', _0x5a5b45);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x5a5b45), 0x0);
}
function _0x1880c1() {
    const _0x15adbd = document['getElementById']('leaderboard-list');
    _0x15adbd['innerHTML'] = '';
    const _0x77b853 = document['createElement']('div');
    _0x77b853['className'] = 'leaderboard-entry';
    const _0x485f96 = document['createElement']('span');
    _0x485f96['textContent'] = _0x2dce0b + (_0x12002b ? '\x20[🗝️]' : '');
    if (_0x1a6424['has'](_0x4c4435) && !_0xedd3af['isDead']) {
        _0x485f96['style']['color'] = '#cc88ff';
    }
    _0x77b853['appendChild'](_0x485f96);
    _0x15adbd['appendChild'](_0x77b853);
    for (const _0x13c1a6 in _0x1df4eb) {
        const _0x1f0d62 = document['createElement']('div');
        _0x1f0d62['className'] = 'leaderboard-entry';
        const _0x2c8ee9 = document['createElement']('span');
        _0x2c8ee9['textContent'] = _0x1df4eb[_0x13c1a6]['name'] + (_0x1df4eb[_0x13c1a6]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x1a6424['has'](parseInt(_0x13c1a6)) && !_0x1df4eb[_0x13c1a6]['isDead']) {
            _0x2c8ee9['style']['color'] = '#cc88ff';
        }
        _0x1f0d62['appendChild'](_0x2c8ee9);
        if (_0x12002b && !_0x1df4eb[_0x13c1a6]['isOwner']) {
            const _0x450cc8 = _0x1df4eb[_0x13c1a6]['id'];
            const _0x11404a = _0x1df4eb[_0x13c1a6]['name'];
            _0x1f0d62['style']['cursor'] = 'context-menu';
            _0x1f0d62['addEventListener']('contextmenu', _0x190032 => {
                _0x190032['preventDefault']();
                _0x190032['stopPropagation']();
                _0x44bfa0(_0x450cc8, _0x11404a, _0x190032['clientX'], _0x190032['clientY']);
            });
        }
        _0x15adbd['appendChild'](_0x1f0d62);
    }
}
window['addEventListener']('resize', _0x5725e3);
function _0x5725e3() {
    _0x532c18['width'] = window['innerWidth'];
    _0x532c18['height'] = window['innerHeight'];
    _0x4f3b37['SYSTEM']['viewScale'] = Math['max'](_0x532c18['width'] / _0x4ef9c3, _0x532c18['height'] / _0x27c9f2);
    _0x4f3b37['CAMERA']['width'] = _0x532c18['width'] / _0x4f3b37['SYSTEM']['viewScale'];
    _0x4f3b37['CAMERA']['height'] = _0x532c18['height'] / _0x4f3b37['SYSTEM']['viewScale'];
    _0x5b368b['imageSmoothingEnabled'] = ![];
}
function _0x29f516(_0x11f0f0) {
    if (_0x11f0f0['ctrlKey'] || _0x11f0f0['metaKey']) {
        if (_0x11f0f0['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x11f0f0['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x11f0f0['code'])) {
            _0x11f0f0['preventDefault']();
            _0x11f0f0['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x29f516, { 'passive': ![] });
window['addEventListener']('keydown', _0x29f516, { 'passive': ![] });
window['addEventListener']('keydown', _0x2cbe6d => {
    const _0x2e3a35 = _0x2cbe6d['key']['toLowerCase']();
    if (_0x2e3a35 === 'tab') {
        _0x2cbe6d['preventDefault']();
        const _0xa8a352 = document['getElementById']('will-ui');
        const _0x43e02e = document['getElementById']('will-input');
        if (_0xa8a352['style']['display'] === 'flex') {
            _0xa8a352['style']['display'] = 'none';
            if (_0x1f7396)
                _0x1f7396['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x43e02e['value']
                }));
            _0x43e02e['blur']();
        } else {
            _0xa8a352['style']['display'] = 'flex';
            _0x43e02e['focus']();
            for (let _0x5be6a8 in _0x4f3b37['INPUTS']['keys'])
                _0x4f3b37['INPUTS']['keys'][_0x5be6a8] = ![];
        }
        return;
    }
    if (_0x2cbe6d['key'] === 'Enter') {
        if (_0x1f103a) {
            const _0xe36f56 = document['getElementById']('play-btn');
            if (_0xe36f56)
                _0xe36f56['click']();
            return;
        }
        if (!_0x1f7396 || _0x1f7396['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x112507 = document['getElementById']('chat-ui');
        const _0x4c06be = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x4c06be) {
            const _0x1c4a7e = _0x4c06be['value']['trim']();
            if (_0x1c4a7e['length'] > 0x0) {
                _0x1f7396['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x1c4a7e
                }));
            }
            _0x4c06be['value'] = '';
            _0x112507['style']['display'] = 'none';
            _0x4c06be['blur']();
        } else {
            _0x112507['style']['display'] = 'block';
            _0x4c06be['focus']();
            for (let _0x4290bb in _0x4f3b37['INPUTS']['keys'])
                _0x4f3b37['INPUTS']['keys'][_0x4290bb] = ![];
        }
        _0x2cbe6d['preventDefault']();
        return;
    }
    if (_0x2cbe6d['key'] === 'Escape') {
        const _0x2bac74 = document['getElementById']('guide-ui');
        if (_0x2bac74 && _0x2bac74['style']['display'] === 'flex') {
            _0x2bac74['style']['display'] = 'none';
            return;
        }
        const _0x1145a0 = document['getElementById']('ability-ui');
        if (_0x1145a0 && _0x1145a0['style']['display'] === 'block') {
            _0x1145a0['style']['display'] = 'none';
            return;
        }
        const _0x12db82 = document['getElementById']('settings-panel');
        if (_0x12db82 && _0x12db82['style']['display'] === 'block') {
            _0x12db82['style']['display'] = 'none';
            return;
        }
        const _0x3f857c = document['getElementById']('mayor-confirm-dialog');
        if (_0x3f857c && _0x3f857c['style']['display'] === 'flex') {
            _0x3f857c['style']['display'] = 'none';
            return;
        }
        const _0x1f5dfc = document['getElementById']('target-chooser-ui');
        if (_0x1f5dfc && _0x1f5dfc['style']['display'] === 'flex') {
            _0x1f5dfc['style']['display'] = 'none';
            return;
        }
        const _0x344354 = document['getElementById']('chat-ui');
        const _0x1992b3 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x1992b3) {
            _0x1992b3['value'] = '';
            _0x344354['style']['display'] = 'none';
            _0x1992b3['blur']();
            _0x2cbe6d['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x4f3b37['INPUTS']['keys']['hasOwnProperty'](_0x2e3a35))
            _0x4f3b37['INPUTS']['keys'][_0x2e3a35] = !![];
        if (!_0x1f7396 || _0x1f7396['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x2e3a35 === 'h' && !_0x2cbe6d['repeat']) {
            const _0x3253a1 = document['getElementById']('guide-ui');
            if (_0x3253a1) {
                _0x3253a1['style']['display'] = _0x3253a1['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x2e3a35 === 't' && !_0x2cbe6d['repeat']) {
            if (_0xedd3af['isDead'])
                return;
            if (_0x528e3c === 'Mayor') {
                if (_0x1a6424['has'](_0x4c4435)) {
                    _0x2e53f8('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x165521 = document['getElementById']('mayor-confirm-dialog');
                if (_0x165521)
                    _0x165521['style']['display'] = 'flex';
                return;
            }
            if (_0x4f3b37['GAME_STATE'] === 'NIGHT') {
                if (!_0x4f3b37['NIGHT_ABILITY_OPEN']) {
                    _0x2e53f8('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x2e2b03 = document['getElementById']('ability-ui');
                if (_0x2e2b03) {
                    if (_0x2e2b03['style']['display'] === 'block') {
                        _0x2e2b03['style']['display'] = 'none';
                    } else {
                        _0x1533d0();
                        _0x2e2b03['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x4f3b37['GAME_STATE'] === 'DAY_DISCUSS' || _0x4f3b37['GAME_STATE'] === 'DAY_VOTE') {
                _0x2e53f8('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x2e3a35 === 'e' && !_0xedd3af['isDead']) {
            const _0x90402b = Date['now']();
            if (!window['_lastDoorSend'] || _0x90402b - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x90402b;
                _0x1f7396['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x1757fc => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x1e7928 = _0x1757fc['key']['toLowerCase']();
        if (_0x4f3b37['INPUTS']['keys']['hasOwnProperty'](_0x1e7928))
            _0x4f3b37['INPUTS']['keys'][_0x1e7928] = ![];
    }
});
window['addEventListener']('mousemove', _0x30ca0b => {
    _0x4f3b37['INPUTS']['mouseX'] = _0x30ca0b['clientX'];
    _0x4f3b37['INPUTS']['mouseY'] = _0x30ca0b['clientY'];
    if (_0x4f3b37['INPUTS']['isMouseDown'] && _0x4f3b37['EDITOR']['enabled']) {
        _0x1ba70d(_0x30ca0b['clientX'], _0x30ca0b['clientY']);
    }
});
window['addEventListener']('mousedown', _0x566645 => {
    if (_0x566645['target']['closest']('#editor-ui') || _0x566645['target']['closest']('#leaderboard-ui') || _0x566645['target']['closest']('#chat-log-ui') || _0x566645['target']['closest']('#target-chooser-ui') || _0x566645['target']['closest']('#guide-ui') || _0x566645['target']['closest']('#role-list-ui') || _0x566645['target']['closest']('#ability-ui') || _0x566645['target']['closest']('#settings-panel') || _0x566645['target']['closest']('#mayor-confirm-dialog') || _0x566645['target']['closest']('#mobile-action-bar') || _0x566645['target']['closest']('#mobile-top-bar') || _0x566645['target']['closest']('#mobile-joystick-zone') || _0x566645['target']['closest']('#mobile-chat-overlay') || _0x566645['target']['closest']('#will-ui') || _0x566645['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x566645['button'] === 0x0) {
        _0x4f3b37['INPUTS']['isMouseDown'] = !![];
        if (_0x4f3b37['EDITOR']['enabled'])
            _0x1ba70d(_0x566645['clientX'], _0x566645['clientY']);
    }
});
window['addEventListener']('mouseup', _0x186140 => {
    _0x4f3b37['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x18306f => {
    if (_0x18306f['target']['closest']('#settings-btn'))
        return;
    const _0x3b9358 = document['getElementById']('leaderboard-list');
    const _0x4c2ad9 = document['getElementById']('leaderboard-toggle');
    if (_0x3b9358['style']['display'] === 'none') {
        _0x3b9358['style']['display'] = 'flex';
        _0x4c2ad9['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x3b9358['style']['display'] = 'none';
        _0x4c2ad9['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x3e93ce = document['getElementById']('close-target-btn');
if (_0x3e93ce) {
    _0x3e93ce['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x9019f7 = document['getElementById']('close-guide-btn');
if (_0x9019f7) {
    _0x9019f7['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x4ad950 = document['getElementById']('role-list-header');
if (_0x4ad950) {
    _0x4ad950['addEventListener']('click', () => {
        const _0x5161a6 = document['getElementById']('role-list-items');
        const _0x5a218b = document['getElementById']('role-list-toggle');
        if (_0x5161a6['style']['display'] === 'none') {
            _0x5161a6['style']['display'] = 'flex';
            _0x5a218b['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x5161a6['style']['display'] = 'none';
            _0x5a218b['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x153130() {
    const _0x1d3dc0 = document['getElementById']('mobile-joystick-zone');
    const _0x2d0a02 = document['getElementById']('mobile-joystick-base');
    const _0x3dff29 = document['getElementById']('mobile-joystick-knob');
    if (_0x1d3dc0 && _0x2d0a02 && _0x3dff29) {
        const _0x1bfab3 = 0x3e;
        const _0x16ee91 = (_0x1f7584, _0x17a6de) => {
            const _0x1e72f2 = _0x2d0a02['getBoundingClientRect']();
            const _0x562e63 = _0x1e72f2['left'] + _0x1e72f2['width'] / 0x2;
            const _0x1f5a40 = _0x1e72f2['top'] + _0x1e72f2['height'] / 0x2;
            const _0x359a6f = _0x1f7584 - _0x562e63;
            const _0x3f6bc9 = _0x17a6de - _0x1f5a40;
            const _0x3e53ff = Math['hypot'](_0x359a6f, _0x3f6bc9);
            if (_0x3e53ff === 0x0) {
                _0x55bfc4 = 0x0;
                _0x15fd0d = 0x0;
                _0x4147a4 = ![];
                _0x3dff29['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x56cd18 = Math['min'](_0x3e53ff, _0x1bfab3);
            const _0x306cb4 = _0x359a6f / _0x3e53ff * _0x56cd18;
            const _0x363f68 = _0x3f6bc9 / _0x3e53ff * _0x56cd18;
            _0x55bfc4 = _0x306cb4 / _0x1bfab3;
            _0x15fd0d = _0x363f68 / _0x1bfab3;
            _0x4147a4 = _0x3e53ff >= _0x1bfab3 * 0.75;
            _0x3dff29['style']['transform'] = 'translate(' + _0x306cb4 + 'px,\x20' + _0x363f68 + 'px)';
        };
        const _0x350d7e = _0x114fb4 => {
            for (let _0x2f8687 = 0x0; _0x2f8687 < _0x114fb4['changedTouches']['length']; _0x2f8687++) {
                const _0x37679b = _0x114fb4['changedTouches'][_0x2f8687];
                if (_0x4c5065 === null) {
                    _0x4c5065 = _0x37679b['identifier'];
                    _0x211c92 = !![];
                    _0x16ee91(_0x37679b['clientX'], _0x37679b['clientY']);
                    break;
                }
            }
        };
        const _0x421913 = _0x8f289f => {
            for (let _0xf676bc = 0x0; _0xf676bc < _0x8f289f['changedTouches']['length']; _0xf676bc++) {
                const _0x3524c0 = _0x8f289f['changedTouches'][_0xf676bc];
                if (_0x3524c0['identifier'] === _0x4c5065) {
                    _0x16ee91(_0x3524c0['clientX'], _0x3524c0['clientY']);
                    break;
                }
            }
        };
        const _0x2dee36 = _0x5a1f1f => {
            for (let _0x1ac78a = 0x0; _0x1ac78a < _0x5a1f1f['changedTouches']['length']; _0x1ac78a++) {
                const _0x8eaeea = _0x5a1f1f['changedTouches'][_0x1ac78a];
                if (_0x8eaeea['identifier'] === _0x4c5065) {
                    _0x4c5065 = null;
                    _0x211c92 = ![];
                    _0x55bfc4 = 0x0;
                    _0x15fd0d = 0x0;
                    _0x4147a4 = ![];
                    _0x3dff29['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x1d3dc0['addEventListener']('touchstart', _0x1ab75e => {
            _0x1ab75e['preventDefault']();
            _0x350d7e(_0x1ab75e);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x421913, { 'passive': !![] });
        window['addEventListener']('touchend', _0x2dee36, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x2dee36, { 'passive': !![] });
    }
    const _0x4dd396 = (_0x5abfa7, _0x33398b) => {
        const _0x1d44a4 = _0x5abfa7 / _0x4f3b37['SYSTEM']['viewScale'];
        const _0x52ed56 = _0x33398b / _0x4f3b37['SYSTEM']['viewScale'];
        const _0x450718 = _0xedd3af['x'] - _0x4f3b37['CAMERA']['x'] + _0xedd3af['width'] / 0x2;
        const _0x211789 = _0xedd3af['y'] - _0x4f3b37['CAMERA']['y'] + _0xedd3af['height'] / 0x2;
        _0x40d93c = Math['atan2'](_0x52ed56 - _0x211789, _0x1d44a4 - _0x450718);
        _0x59660e = !![];
        _0x4f3b37['INPUTS']['mouseX'] = _0x5abfa7;
        _0x4f3b37['INPUTS']['mouseY'] = _0x33398b;
    };
    _0x532c18['addEventListener']('touchstart', _0x657e66 => {
        if (_0x1f103a)
            return;
        for (let _0x183462 = 0x0; _0x183462 < _0x657e66['changedTouches']['length']; _0x183462++) {
            const _0x451aac = _0x657e66['changedTouches'][_0x183462];
            if (_0x451aac['identifier'] !== _0x4c5065 && _0x5afd29 === null) {
                _0x5afd29 = _0x451aac['identifier'];
                _0x4dd396(_0x451aac['clientX'], _0x451aac['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x532c18['addEventListener']('touchmove', _0x27a18a => {
        if (_0x1f103a)
            return;
        for (let _0x4595e4 = 0x0; _0x4595e4 < _0x27a18a['changedTouches']['length']; _0x4595e4++) {
            const _0x5dccd5 = _0x27a18a['changedTouches'][_0x4595e4];
            if (_0x5dccd5['identifier'] === _0x5afd29) {
                _0x4dd396(_0x5dccd5['clientX'], _0x5dccd5['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x17b38b = _0x14c6c7 => {
        for (let _0xa41a02 = 0x0; _0xa41a02 < _0x14c6c7['changedTouches']['length']; _0xa41a02++) {
            const _0x433b78 = _0x14c6c7['changedTouches'][_0xa41a02];
            if (_0x433b78['identifier'] === _0x5afd29) {
                _0x5afd29 = null;
                _0x59660e = ![];
                break;
            }
        }
    };
    _0x532c18['addEventListener']('touchend', _0x17b38b, { 'passive': !![] });
    _0x532c18['addEventListener']('touchcancel', _0x17b38b, { 'passive': !![] });
    const _0x5f3a97 = document['getElementById']('mob-sprint-btn');
    if (_0x5f3a97) {
        _0x5f3a97['addEventListener']('click', _0x18d4ac => {
            _0x18d4ac['stopPropagation']();
            _0xdb3645 = !_0xdb3645;
            _0x5f3a97['classList']['toggle']('active', _0xdb3645);
        });
    }
    const _0x5aedde = document['getElementById']('mob-interact-btn');
    if (_0x5aedde) {
        _0x5aedde['addEventListener']('click', _0x2d5c55 => {
            _0x2d5c55['stopPropagation']();
            if (!_0xedd3af['isDead']) {
                const _0x2008a4 = Date['now']();
                if (!window['_lastDoorSend'] || _0x2008a4 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x2008a4;
                    if (_0x1f7396 && _0x1f7396['readyState'] === WebSocket['OPEN'])
                        _0x1f7396['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x3e38ba = document['getElementById']('mob-ability-btn');
    if (_0x3e38ba) {
        _0x3e38ba['addEventListener']('click', _0x2464a9 => {
            _0x2464a9['stopPropagation']();
            if (_0xedd3af['isDead'])
                return;
            if (_0x528e3c === 'Mayor') {
                if (_0x1a6424['has'](_0x4c4435)) {
                    _0x2e53f8('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x20af21 = document['getElementById']('mayor-confirm-dialog');
                if (_0x20af21)
                    _0x20af21['style']['display'] = 'flex';
                return;
            }
            if (_0x4f3b37['GAME_STATE'] === 'NIGHT') {
                if (!_0x4f3b37['NIGHT_ABILITY_OPEN']) {
                    _0x2e53f8('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x41a6fc = document['getElementById']('ability-ui');
                if (_0x41a6fc) {
                    if (_0x41a6fc['style']['display'] === 'block') {
                        _0x41a6fc['style']['display'] = 'none';
                    } else {
                        _0x1533d0();
                        _0x41a6fc['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x4f3b37['GAME_STATE'] === 'DAY_DISCUSS' || _0x4f3b37['GAME_STATE'] === 'DAY_VOTE') {
                _0x2e53f8('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x16952d = document['getElementById']('mob-will-btn');
    const _0x23eb80 = document['getElementById']('will-ui');
    const _0x4b847a = document['getElementById']('will-input');
    const _0x21624 = document['getElementById']('close-will-btn');
    const _0x4e48bb = () => {
        if (!_0x23eb80)
            return;
        if (_0x23eb80['style']['display'] === 'flex') {
            _0x23eb80['style']['display'] = 'none';
            if (_0x1f7396 && _0x1f7396['readyState'] === WebSocket['OPEN'] && _0x4b847a) {
                _0x1f7396['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x4b847a['value']
                }));
            }
            if (_0x4b847a)
                _0x4b847a['blur']();
        } else {
            _0x23eb80['style']['display'] = 'flex';
            if (_0x4b847a)
                _0x4b847a['focus']();
        }
    };
    if (_0x16952d)
        _0x16952d['addEventListener']('click', _0x14fb57 => {
            _0x14fb57['stopPropagation']();
            _0x4e48bb();
        });
    if (_0x21624)
        _0x21624['addEventListener']('click', _0x166f4a => {
            _0x166f4a['stopPropagation']();
            _0x4e48bb();
        });
    const _0x385bec = document['getElementById']('mob-chat-btn');
    const _0x2156c0 = document['getElementById']('mobile-chat-overlay');
    const _0x405e71 = document['getElementById']('mobile-chat-input');
    const _0xc56d67 = document['getElementById']('mobile-chat-send');
    const _0x1b9b5a = document['getElementById']('mobile-chat-cancel');
    const _0x10e23a = () => {
        if (!_0x2156c0 || !_0x405e71)
            return;
        _0x2156c0['style']['display'] = 'flex';
        _0x405e71['value'] = '';
        _0x405e71['focus']();
    };
    const _0x47142e = () => {
        if (!_0x2156c0 || !_0x405e71)
            return;
        _0x2156c0['style']['display'] = 'none';
        _0x405e71['blur']();
    };
    const _0x183715 = () => {
        if (!_0x405e71)
            return;
        const _0x4c8ac2 = _0x405e71['value']['trim']();
        if (_0x4c8ac2['length'] > 0x0 && _0x1f7396 && _0x1f7396['readyState'] === WebSocket['OPEN']) {
            _0x1f7396['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x4c8ac2
            }));
        }
        _0x405e71['value'] = '';
        _0x47142e();
    };
    if (_0x385bec)
        _0x385bec['addEventListener']('click', _0x16237c => {
            _0x16237c['stopPropagation']();
            _0x10e23a();
        });
    if (_0xc56d67)
        _0xc56d67['addEventListener']('click', _0xab4e1b => {
            _0xab4e1b['stopPropagation']();
            _0x183715();
        });
    if (_0x1b9b5a)
        _0x1b9b5a['addEventListener']('click', _0x54f58d => {
            _0x54f58d['stopPropagation']();
            _0x47142e();
        });
    if (_0x405e71) {
        _0x405e71['addEventListener']('keydown', _0x2fae83 => {
            if (_0x2fae83['key'] === 'Enter') {
                _0x2fae83['preventDefault']();
                _0x183715();
            } else if (_0x2fae83['key'] === 'Escape') {
                _0x47142e();
            }
        });
    }
    const _0x1f79ed = document['getElementById']('mob-top-chat');
    if (_0x1f79ed)
        _0x1f79ed['addEventListener']('click', _0x3f189a => {
            _0x3f189a['stopPropagation']();
            _0x10e23a();
        });
    const _0x504f5f = document['getElementById']('mob-top-will');
    if (_0x504f5f)
        _0x504f5f['addEventListener']('click', _0x552845 => {
            _0x552845['stopPropagation']();
            _0x4e48bb();
        });
    const _0x1684ca = document['getElementById']('mob-top-roles');
    if (_0x1684ca) {
        _0x1684ca['addEventListener']('click', _0x20a49b => {
            _0x20a49b['stopPropagation']();
            const _0x3b08a5 = document['getElementById']('role-list-ui');
            const _0x4a676b = document['getElementById']('leaderboard-ui');
            if (_0x4a676b)
                _0x4a676b['style']['display'] = 'none';
            if (_0x3b08a5)
                _0x3b08a5['style']['display'] = _0x3b08a5['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x12c2f8 = document['getElementById']('mob-top-players');
    if (_0x12c2f8) {
        _0x12c2f8['addEventListener']('click', _0x289ef1 => {
            _0x289ef1['stopPropagation']();
            const _0x540a48 = document['getElementById']('leaderboard-ui');
            const _0x33d940 = document['getElementById']('role-list-ui');
            if (_0x33d940)
                _0x33d940['style']['display'] = 'none';
            if (_0x540a48)
                _0x540a48['style']['display'] = _0x540a48['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x2ec6d9 = document['getElementById']('mob-top-help');
    if (_0x2ec6d9) {
        _0x2ec6d9['addEventListener']('click', _0x18351f => {
            _0x18351f['stopPropagation']();
            const _0x314df1 = document['getElementById']('guide-ui');
            if (_0x314df1)
                _0x314df1['style']['display'] = _0x314df1['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x3cfcf6) {
            _0x3cfcf6 = !![];
            _0x5bb77c();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
