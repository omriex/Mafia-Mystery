document['addEventListener']('contextmenu', _0x35c07d => _0x35c07d['preventDefault']());
const _0x3fedfe = {
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
let _0x327028 = '';
function _0x55286a(_0x32bce2, _0x46e5b4) {
    const _0x1cd7b3 = document['getElementById']('role-list-ui');
    const _0x124bdc = document['getElementById']('role-list-items');
    if (!_0x1cd7b3 || !_0x124bdc)
        return;
    if (!_0x46e5b4 || _0x46e5b4 === 'off' || !_0x32bce2 || _0x32bce2['length'] === 0x0) {
        _0x1cd7b3['style']['display'] = 'none';
        return;
    }
    const _0x50030a = _0x46e5b4 + '|' + JSON['stringify'](_0x32bce2);
    if (_0x50030a === _0x327028)
        return;
    _0x327028 = _0x50030a;
    const _0x175785 = document['getElementById']('role-tooltip');
    if (_0x175785) {
        _0x175785['style']['visibility'] = 'hidden';
        _0x175785['style']['opacity'] = '0';
    }
    _0x1cd7b3['style']['display'] = 'flex';
    _0x124bdc['innerHTML'] = '';
    _0x32bce2['forEach'](_0xbd14c3 => {
        const _0xdc4247 = document['createElement']('div');
        _0xdc4247['className'] = 'role-list-entry';
        const _0x540782 = _0xbd14c3['name']['includes']('Mafia') || _0xbd14c3['name'] === 'Skinwalker' || _0xbd14c3['name'] === 'Blackmailer';
        _0xdc4247['classList']['add'](_0x540782 ? 'mafia' : 'town');
        if (_0x46e5b4 === 'precise' && _0xbd14c3['isDead']) {
            _0xdc4247['classList']['remove']('town', 'mafia');
            _0xdc4247['classList']['add']('dead');
            _0xdc4247['innerHTML'] = '<span>' + _0xbd14c3['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x3c2018 = _0xbd14c3['count'] !== undefined && _0xbd14c3['count'] !== null ? _0xbd14c3['count'] + 'x\x20' : '';
            _0xdc4247['innerHTML'] = '<span>' + _0x3c2018 + _0xbd14c3['name'] + '</span>';
        }
        if (_0x46e5b4 === 'subalignments' && _0x3fedfe[_0xbd14c3['name']]) {
            _0xdc4247['style']['cursor'] = 'pointer';
            _0xdc4247['addEventListener']('mouseenter', () => {
                const _0xd6b010 = document['getElementById']('role-tooltip');
                if (!_0xd6b010)
                    return;
                const _0x219c31 = _0x3fedfe[_0xbd14c3['name']]['join'](',\x20');
                _0xd6b010['innerHTML'] = '';
                const _0x101f79 = document['createElement']('span');
                _0x101f79['style']['color'] = '#ffcc00';
                _0x101f79['textContent'] = _0xbd14c3['name'];
                _0xd6b010['appendChild'](_0x101f79);
                _0xd6b010['appendChild'](document['createElement']('br'));
                _0xd6b010['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x219c31));
                const _0x667d56 = _0xdc4247['getBoundingClientRect']();
                _0xd6b010['style']['left'] = _0x667d56['left'] - 0xeb + 'px';
                _0xd6b010['style']['top'] = _0x667d56['top'] + 'px';
                _0xd6b010['style']['display'] = 'block';
                _0xd6b010['style']['visibility'] = 'visible';
                _0xd6b010['style']['opacity'] = '1';
            });
            _0xdc4247['addEventListener']('mouseleave', () => {
                const _0x19a24e = document['getElementById']('role-tooltip');
                if (_0x19a24e) {
                    _0x19a24e['style']['display'] = 'none';
                    _0x19a24e['style']['visibility'] = 'hidden';
                    _0x19a24e['style']['opacity'] = '0';
                }
            });
        }
        _0x124bdc['appendChild'](_0xdc4247);
    });
}
let _0x44cb30 = null;
let _0x1ac5fb = null;
const _0x2e299f = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x366823 = 'Player???';
let _0x23ed22 = ![];
let _0x45faf6 = {};
let _0xec0cbc = null;
let _0x86edc9 = 0x0;
let _0x522d7e = 0x0;
let _0x117a9c = new Set();
let _0x1e4f85 = ![];
let _0x4f8e07 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x40a9e5 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x1b4e9f = ![];
let _0x4eaf6c = null;
let _0x16e30a = 0x0;
let _0x2f53e5 = 0x0;
let _0x456560 = ![];
let _0x3792ba = ![];
let _0x41d207 = 0x0;
let _0x316577 = null;
let _0x371059 = ![];
let _0xbd980f = 0x0;
let _0x57a142 = 0x0;
let _0x3e0802 = [];
let _0x324ad4 = [];
let _0x2ea5b5 = new Set();
const _0x1d7010 = ((() => {
    const _0x350899 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x567e09 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x5a2483 = 0x320;
    const _0x3ddc1f = {};
    const _0x40bf7f = {};
    let _0x54fc58 = null;
    let _0x2c4211 = _0x567e09 === 0x0;
    let _0x51955d = ![];
    for (const [_0x6e3e77, _0x3a4e17] of Object['entries'](_0x350899)) {
        const _0xd59e31 = new Audio(_0x3a4e17);
        _0xd59e31['loop'] = !![];
        _0xd59e31['volume'] = 0x0;
        _0xd59e31['preload'] = 'auto';
        _0x3ddc1f[_0x6e3e77] = _0xd59e31;
        _0x40bf7f[_0x6e3e77] = null;
    }
    const _0x3e69f2 = _0x5064e1 => Math['min'](0x1, Math['max'](0x0, _0x5064e1));
    function _0x5094c1(_0x314c5d) {
        if (_0x40bf7f[_0x314c5d] !== null) {
            cancelAnimationFrame(_0x40bf7f[_0x314c5d]);
            _0x40bf7f[_0x314c5d] = null;
        }
    }
    function _0x54b6c0(_0xee5d3c, _0x2b59bb, _0x4858ec, _0x233306, _0x273f36) {
        _0x5094c1(_0xee5d3c);
        const _0x744a5e = _0x3ddc1f[_0xee5d3c];
        const _0x394f94 = performance['now']();
        const _0x5bb9bd = _0x4a8ca2 => {
            const _0x45b53f = _0x3e69f2((_0x4a8ca2 - _0x394f94) / _0x233306);
            const _0x30cbd0 = _0x3e69f2(_0x2b59bb + (_0x4858ec - _0x2b59bb) * _0x45b53f);
            _0x744a5e['volume'] = _0x2c4211 ? 0x0 : _0x30cbd0;
            if (_0x45b53f < 0x1) {
                _0x40bf7f[_0xee5d3c] = requestAnimationFrame(_0x5bb9bd);
            } else {
                _0x40bf7f[_0xee5d3c] = null;
                _0x744a5e['volume'] = _0x2c4211 ? 0x0 : _0x3e69f2(_0x4858ec);
                if (_0x273f36)
                    _0x273f36();
            }
        };
        _0x40bf7f[_0xee5d3c] = requestAnimationFrame(_0x5bb9bd);
    }
    function _0x22e88b(_0x29741b) {
        const _0x20f4e3 = _0x29741b['play']();
        if (_0x20f4e3 && _0x20f4e3['catch']) {
            _0x20f4e3['catch'](() => {
                if (!_0x51955d) {
                    const _0x2cc854 = () => {
                        _0x51955d = !![];
                        _0x29741b['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x2cc854);
                        document['removeEventListener']('keydown', _0x2cc854);
                        document['removeEventListener']('touchstart', _0x2cc854);
                    };
                    document['addEventListener']('click', _0x2cc854, { 'once': !![] });
                    document['addEventListener']('keydown', _0x2cc854, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x2cc854, { 'once': !![] });
                }
            });
        }
    }
    function _0x27062c(_0x5705ad) {
        if (!_0x350899[_0x5705ad])
            return;
        if (_0x54fc58 === _0x5705ad)
            return;
        const _0x3fc381 = _0x54fc58;
        _0x54fc58 = _0x5705ad;
        const _0x5f077e = _0x3ddc1f[_0x5705ad];
        _0x5094c1(_0x5705ad);
        _0x5f077e['currentTime'] = 0x0;
        _0x5f077e['volume'] = 0x0;
        _0x22e88b(_0x5f077e);
        _0x54b6c0(_0x5705ad, 0x0, _0x567e09, _0x5a2483);
        if (_0x3fc381 && _0x3ddc1f[_0x3fc381]) {
            const _0x3319f7 = _0x3fc381;
            const _0x33b110 = _0x3ddc1f[_0x3319f7];
            const _0x7339c = _0x3e69f2(_0x33b110['volume']);
            _0x54b6c0(_0x3319f7, _0x7339c, 0x0, _0x5a2483, () => {
                _0x33b110['pause']();
                _0x33b110['currentTime'] = 0x0;
            });
        }
    }
    function _0x5f3c7e(_0x40b540) {
        _0x567e09 = _0x3e69f2(_0x40b540);
        localStorage['setItem']('musicVolume', String(_0x567e09));
        if (!_0x2c4211 && _0x54fc58 && _0x40bf7f[_0x54fc58] === null) {
            _0x3ddc1f[_0x54fc58]['volume'] = _0x567e09;
        }
    }
    function _0x25b4c1() {
        return _0x567e09;
    }
    function _0x4bf07a(_0x3fe7ae) {
        _0x2c4211 = _0x3fe7ae;
        for (const _0xba3ef5 of Object['keys'](_0x3ddc1f)) {
            if (_0x40bf7f[_0xba3ef5] === null) {
                _0x3ddc1f[_0xba3ef5]['volume'] = _0x3fe7ae || _0xba3ef5 !== _0x54fc58 ? 0x0 : _0x567e09;
            }
        }
    }
    function _0x25750a() {
        return _0x2c4211;
    }
    function _0x2c0f43(_0x23105a) {
        if (_0x23105a === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x23105a === 'DAY_VOTE')
            return 'voting';
        if (_0x23105a === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x407486(_0x5a2d28) {
        _0x27062c(_0x2c0f43(_0x5a2d28));
    }
    function _0x5ccc3f(_0x561a45) {
        _0x27062c(_0x561a45);
    }
    return {
        'play': _0x27062c,
        'onStateChange': _0x407486,
        'onSoundEvent': _0x5ccc3f,
        'setVolume': _0x5f3c7e,
        'getVolume': _0x25b4c1,
        'setMuted': _0x4bf07a,
        'isMuted': _0x25750a
    };
})());
const _0x573cc2 = ((() => {
    const _0x200a1d = 0x258;
    const _0x16450a = 0xb4;
    const _0x4d0dab = 0x708;
    const _0x2e0e11 = 0x140;
    const _0x1bd39f = 0.18;
    const _0x33766c = 0.95;
    const _0x28b67c = new Audio('audio/heartbeat.mp3');
    _0x28b67c['loop'] = ![];
    _0x28b67c['preload'] = 'auto';
    _0x28b67c['volume'] = 0x0;
    let _0x7745c0 = 0x0;
    let _0x1230f4 = Infinity;
    function _0x4cf8b3(_0x84b939, _0x4c9854, _0x297ee3) {
        return Math['min'](_0x297ee3, Math['max'](_0x4c9854, _0x84b939));
    }
    function _0x3e8422(_0x3ac484, _0xbad287, _0xa00ff2) {
        return _0x3ac484 + (_0xbad287 - _0x3ac484) * _0xa00ff2;
    }
    function _0x13e59c(_0x404ac0) {
        if (_0x3be278['GAME_STATE'] !== 'NIGHT' || _0x3d0db6['isDead'] || _0xec0cbc === 'Skinwalker' || _0xec0cbc === 'Blackmailer') {
            _0x1230f4 = Infinity;
            return;
        }
        const _0x505f0f = _0x3d0db6['x'] + 22.5;
        const _0x55f069 = _0x3d0db6['y'] + 22.5;
        let _0x3697b4 = Infinity;
        for (const _0x4fe8bb in _0x45faf6) {
            const _0x2f3e0a = _0x45faf6[_0x4fe8bb];
            if (!_0x2f3e0a['isDark'] || _0x2f3e0a['isDead'])
                continue;
            const _0x1c83a1 = _0x2f3e0a['renderX'] + 22.5 - _0x505f0f;
            const _0x39c5fb = _0x2f3e0a['renderY'] + 22.5 - _0x55f069;
            const _0x356ea4 = Math['sqrt'](_0x1c83a1 * _0x1c83a1 + _0x39c5fb * _0x39c5fb);
            if (_0x356ea4 < _0x3697b4)
                _0x3697b4 = _0x356ea4;
        }
        _0x1230f4 = _0x3697b4;
        if (_0x3697b4 > _0x200a1d)
            return;
        const _0x38a8c3 = 0x1 - _0x4cf8b3((_0x3697b4 - _0x16450a) / (_0x200a1d - _0x16450a), 0x0, 0x1);
        const _0x84d3db = _0x3e8422(_0x4d0dab, _0x2e0e11, _0x38a8c3);
        const _0x1575c7 = _0x3e8422(_0x1bd39f, _0x33766c, _0x38a8c3);
        if (_0x404ac0 >= _0x7745c0) {
            _0x28b67c['currentTime'] = 0x0;
            _0x28b67c['volume'] = _0x1d7010['isMuted']() ? 0x0 : _0x4cf8b3(_0x1575c7 * _0x1d7010['getVolume']() / 0.7, 0x0, 0x1);
            _0x28b67c['play']()['catch'](() => {
            });
            _0x7745c0 = _0x404ac0 + _0x84d3db;
        }
    }
    return { 'tick': _0x13e59c };
})());
function _0x5377b0() {
    const _0x6589a9 = document['getElementById']('mob-ability-btn');
    if (!_0x6589a9)
        return;
    const _0x5084b2 = _0x3be278['GAME_STATE'] === 'NIGHT' && !_0x3d0db6['isDead'];
    const _0x34a0a9 = _0xec0cbc === 'Mayor' && !_0x117a9c['has'](_0x1ac5fb) && !_0x3d0db6['isDead'];
    if (_0x5084b2 || _0x34a0a9) {
        _0x6589a9['style']['display'] = 'flex';
    } else {
        _0x6589a9['style']['display'] = 'none';
    }
}
function _0x2ee8e1() {
    const _0x577cc8 = document['getElementById']('mobile-joystick-zone');
    const _0x6f4d24 = document['getElementById']('mobile-top-bar');
    const _0xd7f185 = document['getElementById']('mobile-action-bar');
    if (!_0x577cc8 || !_0x6f4d24 || !_0xd7f185)
        return;
    if (!_0x35a566 && _0x40a9e5) {
        _0x577cc8['style']['display'] = 'flex';
        _0x6f4d24['style']['display'] = 'flex';
        _0xd7f185['style']['display'] = 'flex';
        _0x5377b0();
    } else {
        _0x577cc8['style']['display'] = 'none';
        _0x6f4d24['style']['display'] = 'none';
        _0xd7f185['style']['display'] = 'none';
    }
}
const _0x4ec94f = document['getElementById']('gameCanvas');
const _0x1d6afb = _0x4ec94f['getContext']('2d', { 'alpha': ![] });
const _0x1c9eb8 = 0x500;
const _0x3d802 = 0x2d0;
const _0x3be278 = {
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
        'width': _0x1c9eb8,
        'height': _0x3d802
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
const _0x3d0db6 = {
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
const _0x1e442d = new Image();
const _0x10fa61 = new Image();
const _0x43c764 = new Image();
const _0x3fc96d = new Image();
_0x3fc96d['src'] = 'assets/mayor\x20cosmetic.png';
const _0x2262ed = [
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
const _0x2ef7f9 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x3e889d = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x3e889d === 'body1.png' || _0x3e889d === 'body1')
    _0x3e889d = 'body01.png';
if (!_0x3e889d['endsWith']('.png'))
    _0x3e889d += '.png';
let _0x3a1db0 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x3a1db0['endsWith']('.png'))
    _0x3a1db0 += '.png';
let _0x35a566 = !![];
let _0xeee311 = null;
let _0x49db54 = null;
let _0x42c063 = 0x3c;
let _0x5ea4b3 = 0x2d;
const _0x1086ab = {};
const _0xd365fa = new Image();
_0xd365fa['src'] = 'assets/yanito932.png';
_0x1086ab['assets/yanito932.png'] = _0xd365fa;
function _0x365ff4(_0x2dfb2a) {
    if (!_0x1086ab[_0x2dfb2a] || !_0x1086ab[_0x2dfb2a]['complete'] && _0x1086ab[_0x2dfb2a]['naturalWidth'] === 0x0 && _0x1086ab[_0x2dfb2a]['naturalHeight'] === 0x0) {
        const _0x571d76 = new Image();
        _0x571d76['src'] = _0x2dfb2a;
        _0x1086ab[_0x2dfb2a] = _0x571d76;
    }
    return _0x1086ab[_0x2dfb2a];
}
function _0xa393e(_0x417b7a, _0x423eb7, _0x50889a, _0x27b265, _0x1b51ad) {
    try {
        const _0x4f95e9 = 'assets/' + (_0x423eb7 || 'body01.png');
        const _0x33c439 = _0x365ff4(_0x4f95e9);
        if (_0x33c439['complete'] && _0x33c439['naturalWidth'] > 0x0) {
            _0x417b7a['drawImage'](_0x33c439, -_0x27b265 / 0x2, -_0x1b51ad / 0x2, _0x27b265, _0x1b51ad);
        }
        if (_0x50889a === null || _0x50889a === undefined)
            return;
        const _0x5dd321 = 'assets/' + _0x50889a;
        const _0x16b1a5 = _0x365ff4(_0x5dd321);
        if (_0x16b1a5['complete'] && _0x16b1a5['naturalWidth'] > 0x0) {
            _0x417b7a['drawImage'](_0x16b1a5, -_0x27b265 / 0x2, -_0x1b51ad / 0x2, _0x27b265, _0x1b51ad);
        }
    } catch (_0x5c9e55) {
    }
}
function _0x13f434() {
    const _0x425b6e = document['getElementById']('body-skin-grid');
    const _0x363d99 = document['getElementById']('eyes-skin-grid');
    if (!_0x425b6e || !_0x363d99)
        return;
    _0x425b6e['innerHTML'] = '';
    _0x2262ed['forEach'](_0x15ff66 => {
        const _0x40c958 = document['createElement']('button');
        _0x40c958['className'] = 'skin-btn' + (_0x15ff66 === _0x3e889d ? '\x20selected' : '');
        const _0x28be69 = document['createElement']('img');
        _0x28be69['src'] = 'assets/' + _0x15ff66;
        _0x40c958['appendChild'](_0x28be69);
        _0x40c958['onclick'] = () => {
            _0x3e889d = _0x15ff66;
            localStorage['setItem']('selectedBody', _0x15ff66);
            _0x425b6e['querySelectorAll']('.skin-btn')['forEach'](_0xd791c3 => _0xd791c3['classList']['remove']('selected'));
            _0x40c958['classList']['add']('selected');
        };
        _0x425b6e['appendChild'](_0x40c958);
    });
    _0x363d99['innerHTML'] = '';
    _0x2ef7f9['forEach'](_0x28e0fc => {
        const _0x460918 = document['createElement']('button');
        _0x460918['className'] = 'skin-btn' + (_0x28e0fc === _0x3a1db0 ? '\x20selected' : '');
        const _0x48d745 = document['createElement']('img');
        _0x48d745['src'] = 'assets/' + _0x28e0fc;
        _0x460918['appendChild'](_0x48d745);
        _0x460918['onclick'] = () => {
            _0x3a1db0 = _0x28e0fc;
            localStorage['setItem']('selectedEyes', _0x28e0fc);
            _0x363d99['querySelectorAll']('.skin-btn')['forEach'](_0x33c2a2 => _0x33c2a2['classList']['remove']('selected'));
            _0x460918['classList']['add']('selected');
        };
        _0x363d99['appendChild'](_0x460918);
    });
}
function _0x18617f(_0x291cc3) {
    if (!_0x3be278['MAP']['columns'] || !_0x3be278['CAMERA']['width'])
        return;
    const _0x43e3bf = Math['max'](0x0, _0x3be278['MAP']['columns'] * _0x3be278['MAP']['tileSize'] - _0x3be278['CAMERA']['width']);
    const _0x4f92a4 = Math['max'](0x0, _0x3be278['MAP']['rows'] * _0x3be278['MAP']['tileSize'] - _0x3be278['CAMERA']['height']);
    if (_0xeee311 === null) {
        _0xeee311 = _0x43e3bf / 0x2;
        _0x49db54 = _0x4f92a4 / 0x2;
    }
    _0xeee311 += _0x42c063 * _0x291cc3;
    _0x49db54 += _0x5ea4b3 * _0x291cc3;
    if (_0xeee311 <= 0x0) {
        _0xeee311 = 0x0;
        _0x42c063 = Math['abs'](_0x42c063);
    } else if (_0xeee311 >= _0x43e3bf) {
        _0xeee311 = _0x43e3bf;
        _0x42c063 = -Math['abs'](_0x42c063);
    }
    if (_0x49db54 <= 0x0) {
        _0x49db54 = 0x0;
        _0x5ea4b3 = Math['abs'](_0x5ea4b3);
    } else if (_0x49db54 >= _0x4f92a4) {
        _0x49db54 = _0x4f92a4;
        _0x5ea4b3 = -Math['abs'](_0x5ea4b3);
    }
    _0x3be278['CAMERA']['x'] = _0xeee311;
    _0x3be278['CAMERA']['y'] = _0x49db54;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x4bd06c = document['getElementById']('play-btn');
    const _0x5617bb = document['getElementById']('username-input');
    const _0x1e76ee = localStorage['getItem']('playerName');
    if (_0x1e76ee && _0x5617bb) {
        _0x5617bb['value'] = _0x1e76ee;
    }
    const _0x50d4c7 = () => {
        _0x1d7010['play']('wait');
        document['removeEventListener']('click', _0x50d4c7);
        document['removeEventListener']('keydown', _0x50d4c7);
        document['removeEventListener']('touchstart', _0x50d4c7);
    };
    document['addEventListener']('click', _0x50d4c7, { 'once': !![] });
    document['addEventListener']('keydown', _0x50d4c7, { 'once': !![] });
    document['addEventListener']('touchstart', _0x50d4c7, { 'once': !![] });
    if (_0x4bd06c) {
        _0x4bd06c['addEventListener']('click', () => {
            const _0x5ab377 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x51eb17 = window['_FB'] && window['_FB']['_userData'];
            let _0x2cfa89 = !![];
            if (_0x5ab377 && _0x51eb17 && _0x51eb17['username']) {
                _0x366823 = _0x51eb17['username'];
                _0x2cfa89 = ![];
            } else {
                const _0x471d8 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x366823 = 'user' + _0x471d8;
                _0x2cfa89 = !![];
            }
            const _0x4009a2 = _0x2cfa89 ? 'body01.png' : _0x3e889d;
            const _0x45b1e5 = _0x2cfa89 ? 'eyes4.png' : _0x3a1db0;
            const _0x497c82 = !_0x2cfa89 && _0x51eb17 && _0x51eb17['photoURL'] ? _0x51eb17['photoURL'] : '';
            const _0x164ba4 = !_0x2cfa89 && _0x5ab377 ? _0x5ab377['uid'] : '';
            localStorage['setItem']('playerName', _0x366823);
            _0x35a566 = ![];
            _0x3be278['CAMERA']['x'] = null;
            _0x3be278['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x154655 = document['getElementById']('chat-log-wrap');
            if (_0x154655)
                _0x154655['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x2b8ae3 = document['getElementById']('controls-hint');
            if (_0x2b8ae3 && !_0x40a9e5)
                _0x2b8ae3['style']['display'] = 'block';
            _0x2ee8e1();
            if (_0x40a9e5) {
                const _0x38460c = document['getElementById']('leaderboard-list');
                const _0xc80eb6 = document['getElementById']('leaderboard-toggle');
                if (_0x38460c) {
                    _0x38460c['style']['display'] = 'none';
                    if (_0xc80eb6)
                        _0xc80eb6['style']['transform'] = 'rotate(180deg)';
                }
                const _0x480cad = document['getElementById']('role-list-items');
                const _0x12c5c4 = document['getElementById']('role-list-toggle');
                if (_0x480cad) {
                    _0x480cad['style']['display'] = 'none';
                    if (_0x12c5c4)
                        _0x12c5c4['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x291cab = !_0x2cfa89 && _0x51eb17 ? {
                'townWins': _0x51eb17['townWins'] || 0x0,
                'mafiaWins': _0x51eb17['mafiaWins'] || 0x0,
                'deaths': _0x51eb17['deaths'] || 0x0,
                'townLosses': _0x51eb17['townLosses'] || 0x0,
                'mafiaLosses': _0x51eb17['mafiaLosses'] || 0x0
            } : null;
            const _0x5553ae = JSON['stringify']({
                'type': 'join',
                'name': _0x366823,
                'token': _0x2e299f,
                'body': _0x4009a2,
                'eyes': _0x45b1e5,
                'isGuest': _0x2cfa89,
                'uid': _0x164ba4,
                'photoURL': _0x497c82,
                'accountStats': _0x291cab
            });
            if (_0x44cb30 && _0x44cb30['readyState'] === WebSocket['OPEN']) {
                _0x44cb30['send'](_0x5553ae);
            } else if (!_0x44cb30 || _0x44cb30['readyState'] === WebSocket['CLOSED'] || _0x44cb30['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x5553ae;
                _0x5ada2();
            }
        });
    }
    _0x13f434();
    _0x5ada2();
    _0x1e1ee4();
    _0xae7b4e();
    _0x5b80bd();
    _0x305cd8();
});
const _0x447797 = [
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
let _0xc03904 = 'Town';
let _0x84ce49 = 0x0;
function _0x44a3d5() {
    const _0x4b4bcd = document['getElementById']('role-index-main-tabs');
    const _0x5637c8 = document['getElementById']('role-index-tabs');
    const _0x147245 = document['getElementById']('role-index-body');
    if (!_0x5637c8 || !_0x147245)
        return;
    if (_0x4b4bcd) {
        _0x4b4bcd['innerHTML'] = '';
        const _0xe4589e = document['createElement']('button');
        _0xe4589e['className'] = 'role-index-main-tab-btn\x20main-town' + (_0xc03904 === 'Town' ? '\x20active' : '');
        _0xe4589e['textContent'] = 'TOWN';
        _0xe4589e['addEventListener']('click', () => {
            _0xc03904 = 'Town';
            _0x84ce49 = 0x0;
            _0x44a3d5();
        });
        _0x4b4bcd['appendChild'](_0xe4589e);
        const _0x18f404 = document['createElement']('button');
        _0x18f404['className'] = 'role-index-main-tab-btn\x20main-mafia' + (_0xc03904 === 'Mafia' ? '\x20active' : '');
        _0x18f404['textContent'] = 'MAFIA';
        _0x18f404['addEventListener']('click', () => {
            _0xc03904 = 'Mafia';
            _0x84ce49 = 0x0;
            _0x44a3d5();
        });
        _0x4b4bcd['appendChild'](_0x18f404);
    }
    const _0x3b7284 = _0x447797['filter'](_0x647237 => _0x647237['faction'] === _0xc03904);
    _0x5637c8['innerHTML'] = '';
    _0x3b7284['forEach']((_0x55a1eb, _0x247e7a) => {
        const _0x514c34 = document['createElement']('button');
        _0x514c34['className'] = 'role-index-tab-btn' + (_0x55a1eb['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x247e7a === _0x84ce49 ? '\x20active' : '');
        _0x514c34['textContent'] = _0x55a1eb['name'];
        _0x514c34['addEventListener']('click', () => {
            _0x84ce49 = _0x247e7a;
            _0x44a3d5();
        });
        _0x5637c8['appendChild'](_0x514c34);
    });
    const _0x43a7df = _0x3b7284[_0x84ce49] || _0x3b7284[0x0];
    _0x147245['innerHTML'] = '';
    if (!_0x43a7df)
        return;
    const _0x1fecd7 = document['createElement']('div');
    _0x1fecd7['className'] = 'role-index-title-row';
    const _0x328ea6 = document['createElement']('span');
    _0x328ea6['className'] = 'role-index-name\x20' + (_0x43a7df['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0x328ea6['textContent'] = _0x43a7df['name'];
    _0x1fecd7['appendChild'](_0x328ea6);
    const _0x4ab8f0 = document['createElement']('span');
    _0x4ab8f0['className'] = 'role-index-faction-badge\x20' + (_0x43a7df['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x4ab8f0['textContent'] = _0x43a7df['faction'];
    _0x1fecd7['appendChild'](_0x4ab8f0);
    _0x147245['appendChild'](_0x1fecd7);
    _0x43a7df['paragraphs']['forEach'](_0x339a9a => {
        const _0x209beb = document['createElement']('p');
        _0x209beb['className'] = 'role-index-desc-paragraph';
        _0x209beb['innerHTML'] = _0x339a9a;
        _0x147245['appendChild'](_0x209beb);
    });
}
function _0x305cd8() {
    const _0xbff69c = document['getElementById']('role-index-btn');
    const _0x36490c = document['getElementById']('role-index-modal');
    const _0x242240 = document['getElementById']('close-role-index-btn');
    const _0x5f5790 = document['getElementById']('mob-top-index');
    if (_0xbff69c && _0x36490c) {
        _0xbff69c['addEventListener']('click', _0x47acbb => {
            _0x47acbb['stopPropagation']();
            if (_0x36490c['style']['display'] === 'none' || !_0x36490c['style']['display']) {
                _0x44a3d5();
                _0x36490c['style']['display'] = 'flex';
            } else {
                _0x36490c['style']['display'] = 'none';
            }
        });
    }
    if (_0x242240 && _0x36490c) {
        _0x242240['addEventListener']('click', _0xfc8a73 => {
            _0xfc8a73['stopPropagation']();
            _0x36490c['style']['display'] = 'none';
        });
    }
    if (_0x5f5790 && _0x36490c) {
        _0x5f5790['addEventListener']('click', _0x35c927 => {
            _0x35c927['stopPropagation']();
            if (_0x36490c['style']['display'] === 'none' || !_0x36490c['style']['display']) {
                _0x44a3d5();
                _0x36490c['style']['display'] = 'flex';
            } else {
                _0x36490c['style']['display'] = 'none';
            }
        });
    }
}
function _0xae7b4e() {
    const _0x45400f = document['getElementById']('settings-btn');
    const _0x35daa9 = document['getElementById']('settings-panel');
    const _0x406a64 = document['getElementById']('close-settings-btn');
    const _0x3aa9b8 = document['getElementById']('setting-mouse-relative');
    if (_0x3aa9b8) {
        _0x3aa9b8['checked'] = _0x4f8e07;
        _0x3aa9b8['addEventListener']('change', () => {
            _0x4f8e07 = _0x3aa9b8['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x4f8e07 ? 'true' : 'false');
        });
    }
    const _0x1ed4fd = document['getElementById']('setting-music-volume');
    const _0x1e29da = document['getElementById']('setting-music-volume-display');
    function _0x10ce59(_0x53ab9b) {
        const _0x165815 = (_0x53ab9b['value'] - _0x53ab9b['min']) / (_0x53ab9b['max'] - _0x53ab9b['min']) * 0x64;
        _0x53ab9b['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x165815 + '%,\x20#444\x20' + _0x165815 + '%)';
    }
    if (_0x1ed4fd) {
        const _0x29d340 = _0x1d7010['getVolume']();
        const _0x317a83 = Math['round'](_0x29d340 * 0x64);
        _0x1ed4fd['value'] = _0x317a83;
        if (_0x1e29da)
            _0x1e29da['textContent'] = _0x317a83 + '%';
        _0x10ce59(_0x1ed4fd);
        _0x1ed4fd['addEventListener']('input', () => {
            const _0x34b46f = parseInt(_0x1ed4fd['value'], 0xa);
            if (_0x1e29da)
                _0x1e29da['textContent'] = _0x34b46f + '%';
            _0x10ce59(_0x1ed4fd);
            _0x1d7010['setVolume'](_0x34b46f / 0x64);
            _0x1d7010['setMuted'](_0x34b46f === 0x0);
        });
    }
    if (_0x45400f && _0x35daa9) {
        _0x45400f['addEventListener']('click', _0x42abdf => {
            _0x42abdf['stopPropagation']();
            _0x35daa9['style']['display'] = _0x35daa9['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x406a64 && _0x35daa9) {
        _0x406a64['addEventListener']('click', () => {
            _0x35daa9['style']['display'] = 'none';
        });
    }
    const _0x186c1a = document['getElementById']('mayor-confirm-yes');
    const _0x13388b = document['getElementById']('mayor-confirm-no');
    const _0x289569 = document['getElementById']('mayor-confirm-dialog');
    if (_0x186c1a && _0x289569) {
        _0x186c1a['addEventListener']('click', () => {
            if (_0x44cb30 && _0x44cb30['readyState'] === WebSocket['OPEN']) {
                _0x44cb30['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x289569['style']['display'] = 'none';
        });
    }
    if (_0x13388b && _0x289569) {
        _0x13388b['addEventListener']('click', () => {
            _0x289569['style']['display'] = 'none';
        });
    }
    const _0x2218d4 = document['getElementById']('close-ability-btn');
    if (_0x2218d4) {
        _0x2218d4['addEventListener']('click', () => {
            const _0x519508 = document['getElementById']('ability-ui');
            if (_0x519508)
                _0x519508['style']['display'] = 'none';
        });
    }
}
let _0x2ac79e = '';
function _0xc9ec57(_0x107a59) {
    const _0x2e531e = document['getElementById']('vote-tally-panel');
    const _0x41ff25 = document['getElementById']('vote-tally-list');
    if (!_0x2e531e || !_0x41ff25)
        return;
    if (_0x107a59['state'] !== 'DAY_VOTE') {
        _0x2e531e['style']['display'] = 'none';
        _0x2ac79e = '';
        return;
    }
    _0x2e531e['style']['display'] = 'block';
    const _0x290f11 = {};
    for (const _0x2b6f98 in _0x45faf6) {
        if (!_0x45faf6[_0x2b6f98]['isDead'])
            _0x290f11[_0x2b6f98] = 0x0;
    }
    if (_0x1ac5fb && !_0x3d0db6['isDead'])
        _0x290f11[_0x1ac5fb] = 0x0;
    const _0x52f05b = _0x107a59['votes'] || {};
    for (const _0x1e5c56 in _0x52f05b) {
        const _0x4118b4 = _0x52f05b[_0x1e5c56];
        const _0x7c3c4 = _0x107a59['mayorRevealed'] && _0x107a59['mayorRevealed'][_0x1e5c56] ? 0x2 : 0x1;
        _0x290f11[_0x4118b4] = (_0x290f11[_0x4118b4] || 0x0) + _0x7c3c4;
    }
    let _0x4abb84 = 0x0;
    const _0x2bc0db = _0x107a59['skips'] || {};
    for (const _0x11f893 in _0x2bc0db) {
        _0x4abb84 += Number(_0x2bc0db[_0x11f893]) || 0x1;
    }
    const _0x1819bf = JSON['stringify'](_0x290f11) + '_' + _0x4abb84 + '_' + _0x3d0db6['isDead'];
    if (_0x1819bf === _0x2ac79e)
        return;
    _0x2ac79e = _0x1819bf;
    _0x41ff25['innerHTML'] = '';
    for (const _0x3c386b in _0x290f11) {
        const _0x4e5b72 = parseInt(_0x3c386b);
        const _0x7bf2f0 = _0x4e5b72 === _0x1ac5fb ? _0x366823 : _0x45faf6[_0x3c386b] ? _0x45faf6[_0x3c386b]['name'] : 'Player\x20' + _0x3c386b;
        const _0x1c77c6 = document['createElement']('div');
        _0x1c77c6['className'] = 'vote-tally-entry';
        const _0x146c45 = document['createElement']('span');
        _0x146c45['textContent'] = _0x7bf2f0;
        const _0xb7c490 = document['createElement']('span');
        _0xb7c490['className'] = 'vote-count';
        _0xb7c490['textContent'] = _0x290f11[_0x3c386b] + '\x20vote' + (_0x290f11[_0x3c386b] === 0x1 ? '' : 's');
        _0x1c77c6['appendChild'](_0x146c45);
        _0x1c77c6['appendChild'](_0xb7c490);
        if (_0x4e5b72 !== _0x1ac5fb && !_0x3d0db6['isDead']) {
            _0x1c77c6['style']['cursor'] = 'pointer';
            _0x1c77c6['title'] = 'Vote\x20for\x20' + _0x7bf2f0;
            _0x1c77c6['addEventListener']('click', _0x1b84e9 => {
                _0x1b84e9['stopPropagation']();
                if (_0x44cb30 && _0x44cb30['readyState'] === WebSocket['OPEN']) {
                    _0x44cb30['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x7bf2f0
                    }));
                }
            });
        }
        _0x41ff25['appendChild'](_0x1c77c6);
    }
    const _0x24566d = document['createElement']('div');
    _0x24566d['className'] = 'vote-tally-skip';
    _0x24566d['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x4abb84 + '</span>';
    if (!_0x3d0db6['isDead']) {
        _0x24566d['style']['cursor'] = 'pointer';
        _0x24566d['title'] = 'Click\x20to\x20skip\x20vote';
        _0x24566d['addEventListener']('click', _0x4f998f => {
            _0x4f998f['stopPropagation']();
            if (_0x44cb30 && _0x44cb30['readyState'] === WebSocket['OPEN']) {
                _0x44cb30['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x41ff25['appendChild'](_0x24566d);
}
let _0x3b0b79 = null;
let _0x1cc4d8 = null;
let _0xb1eb14 = null;
let _0x87f1db = null;
let _0x29b317 = null;
function _0x100154() {
    if (_0x44cb30 && _0x44cb30['readyState'] === WebSocket['OPEN']) {
        _0x44cb30['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x3b0b79,
            'abilityTarget': _0x1cc4d8,
            'killTarget': _0xb1eb14
        }));
    }
}
function _0x22deae() {
    if (_0x44cb30 && _0x44cb30['readyState'] === WebSocket['OPEN']) {
        _0x44cb30['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'blackmailTarget': _0x87f1db,
            'killTarget': _0x29b317
        }));
    }
}
function _0x1a12d2() {
    const _0x3e9085 = document['getElementById']('ability-ui-body');
    if (!_0x3e9085)
        return;
    _0x3e9085['innerHTML'] = '';
    if (_0xec0cbc === 'Celebrity' || _0xec0cbc === 'Mayor') {
        const _0x2ec87d = document['createElement']('div');
        _0x2ec87d['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x2ec87d['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x3e9085['appendChild'](_0x2ec87d);
        return;
    }
    if (_0xec0cbc === 'Blackmailer') {
        const _0xf4027a = document['createElement']('div');
        _0xf4027a['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0xf4027a['innerText'] = 'Blackmail\x20Target\x20(Silences\x20for\x20full\x20day):';
        _0x3e9085['appendChild'](_0xf4027a);
        const _0x7c8eb9 = document['createElement']('div');
        _0x7c8eb9['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x19cf4a = document['createElement']('button');
        _0x19cf4a['className'] = 'layer-btn';
        _0x19cf4a['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x19cf4a['innerText'] = 'No\x20one';
        if (_0x87f1db === null)
            _0x19cf4a['classList']['add']('active');
        _0x19cf4a['onclick'] = () => {
            _0x87f1db = null;
            _0x22deae();
            _0x1a12d2();
        };
        _0x7c8eb9['appendChild'](_0x19cf4a);
        for (const _0x1a2217 in _0x45faf6) {
            const _0x410126 = _0x45faf6[_0x1a2217];
            if (_0x410126['isDead'])
                continue;
            const _0x140d92 = document['createElement']('button');
            _0x140d92['className'] = 'layer-btn';
            _0x140d92['innerText'] = _0x410126['name'];
            if (_0x87f1db === parseInt(_0x1a2217))
                _0x140d92['classList']['add']('active');
            _0x140d92['onclick'] = () => {
                _0x87f1db = parseInt(_0x1a2217);
                _0x22deae();
                _0x1a12d2();
            };
            _0x7c8eb9['appendChild'](_0x140d92);
        }
        if (!_0x3d0db6['isDead']) {
            const _0x5e8798 = document['createElement']('button');
            _0x5e8798['className'] = 'layer-btn';
            _0x5e8798['style']['cssText'] = 'grid-column:\x20span\x202;';
            _0x5e8798['innerText'] = _0x366823 + '\x20(Self\x20-\x20Decoy)';
            if (_0x87f1db === _0x1ac5fb)
                _0x5e8798['classList']['add']('active');
            _0x5e8798['onclick'] = () => {
                _0x87f1db = _0x1ac5fb;
                _0x22deae();
                _0x1a12d2();
            };
            _0x7c8eb9['appendChild'](_0x5e8798);
        }
        _0x3e9085['appendChild'](_0x7c8eb9);
        const _0x230155 = document['createElement']('div');
        _0x230155['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x230155['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x3e9085['appendChild'](_0x230155);
        const _0x112e29 = document['createElement']('div');
        _0x112e29['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x1c076b = document['createElement']('button');
        _0x1c076b['className'] = 'layer-btn';
        _0x1c076b['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x1c076b['innerText'] = 'No\x20one';
        if (!_0x29b317 && !_0x3be278['CURRENT_TARGET'])
            _0x1c076b['classList']['add']('active');
        _0x1c076b['onclick'] = () => {
            _0x29b317 = null;
            _0x3be278['CURRENT_TARGET'] = null;
            _0x22deae();
            _0x1a12d2();
        };
        _0x112e29['appendChild'](_0x1c076b);
        for (const _0x41dfd5 in _0x45faf6) {
            const _0x8be7e6 = _0x45faf6[_0x41dfd5];
            if (_0x8be7e6['isDead'])
                continue;
            const _0x57e4e6 = document['createElement']('button');
            _0x57e4e6['className'] = 'layer-btn';
            _0x57e4e6['innerText'] = _0x8be7e6['name'];
            if (_0x29b317 === parseInt(_0x41dfd5) || _0x3be278['CURRENT_TARGET'] === parseInt(_0x41dfd5))
                _0x57e4e6['classList']['add']('active');
            _0x57e4e6['onclick'] = () => {
                _0x29b317 = parseInt(_0x41dfd5);
                _0x3be278['CURRENT_TARGET'] = parseInt(_0x41dfd5);
                _0x22deae();
                _0x1a12d2();
            };
            _0x112e29['appendChild'](_0x57e4e6);
        }
        _0x3e9085['appendChild'](_0x112e29);
        return;
    }
    if (_0xec0cbc === 'Skinwalker') {
        const _0x158745 = document['createElement']('div');
        _0x158745['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x158745['innerText'] = 'Transform\x20into:';
        _0x3e9085['appendChild'](_0x158745);
        const _0x54c8e5 = document['createElement']('div');
        _0x54c8e5['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x5c5229 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x32c7bf = _0x16f94f => {
            if (_0x3be278['ROLES_IN_GAME'] && Array['isArray'](_0x3be278['ROLES_IN_GAME'])) {
                return _0x3be278['ROLES_IN_GAME']['includes'](_0x16f94f);
            }
            if (_0x3be278['ROLE_LIST_RAW'] && _0x3be278['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x3be278['ROLE_LIST_RAW']['some'](_0x2e0540 => _0x2e0540['name'] === _0x16f94f && !_0x2e0540['isDead']);
            }
            return ![];
        };
        const _0x5dbcf6 = [
            'None',
            ..._0x5c5229['filter'](_0x32c7bf)
        ];
        _0x5dbcf6['forEach'](_0x48e0ee => {
            const _0x132318 = document['createElement']('button');
            _0x132318['className'] = 'layer-btn';
            _0x132318['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x132318['innerText'] = _0x48e0ee;
            const _0x11b8f3 = _0x48e0ee === 'None' && !_0x3b0b79 || _0x3b0b79 === _0x48e0ee;
            if (_0x11b8f3)
                _0x132318['classList']['add']('active');
            const _0x2440d1 = _0x48e0ee !== 'None' && _0x3be278['SKINWALKER_LAST_ROLE'] && _0x3be278['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x48e0ee['toLowerCase']();
            if (_0x2440d1) {
                _0x132318['style']['opacity'] = '0.45';
                _0x132318['style']['cursor'] = 'not-allowed';
                _0x132318['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x132318['onclick'] = () => {
                    _0x354ff8('You\x20cannot\x20transform\x20into\x20' + _0x48e0ee + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x132318['onclick'] = () => {
                    _0x3b0b79 = _0x48e0ee === 'None' ? null : _0x48e0ee;
                    _0x100154();
                    _0x1a12d2();
                };
            }
            _0x54c8e5['appendChild'](_0x132318);
        });
        _0x3e9085['appendChild'](_0x54c8e5);
        if (_0x32c7bf('Vigilante')) {
            const _0x3fc071 = document['createElement']('div');
            _0x3fc071['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x3fc071['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x3e9085['appendChild'](_0x3fc071);
        }
        if (_0x3b0b79 === 'Vigilante') {
            const _0x41ef8a = document['createElement']('div');
            _0x41ef8a['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x41ef8a['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x3e9085['appendChild'](_0x41ef8a);
        } else if (_0x3b0b79 && _0x3b0b79 !== 'Celebrity') {
            const _0x396bc1 = document['createElement']('div');
            _0x396bc1['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x396bc1['innerText'] = 'Use\x20' + _0x3b0b79 + '\x20ability\x20on:';
            _0x3e9085['appendChild'](_0x396bc1);
            const _0x28b523 = document['createElement']('div');
            _0x28b523['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x42eff4 = document['createElement']('button');
            _0x42eff4['className'] = 'layer-btn';
            _0x42eff4['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x42eff4['innerText'] = 'No\x20one';
            if (!_0x1cc4d8)
                _0x42eff4['classList']['add']('active');
            _0x42eff4['onclick'] = () => {
                _0x1cc4d8 = null;
                _0x100154();
                _0x1a12d2();
            };
            _0x28b523['appendChild'](_0x42eff4);
            for (const _0x564524 in _0x45faf6) {
                const _0x223520 = _0x45faf6[_0x564524];
                if (_0x223520['isDead'])
                    continue;
                const _0x1b9a74 = document['createElement']('button');
                _0x1b9a74['className'] = 'layer-btn';
                _0x1b9a74['innerText'] = _0x223520['name'];
                if (_0x1cc4d8 === parseInt(_0x564524))
                    _0x1b9a74['classList']['add']('active');
                _0x1b9a74['onclick'] = () => {
                    _0x1cc4d8 = parseInt(_0x564524);
                    _0x100154();
                    _0x1a12d2();
                };
                _0x28b523['appendChild'](_0x1b9a74);
            }
            _0x3e9085['appendChild'](_0x28b523);
        }
        const _0x459654 = document['createElement']('div');
        _0x459654['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x459654['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x3e9085['appendChild'](_0x459654);
        const _0x2840b8 = document['createElement']('div');
        _0x2840b8['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x4487ae = document['createElement']('button');
        _0x4487ae['className'] = 'layer-btn';
        _0x4487ae['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x4487ae['innerText'] = 'No\x20one';
        if (!_0xb1eb14 && !_0x3be278['CURRENT_TARGET'])
            _0x4487ae['classList']['add']('active');
        _0x4487ae['onclick'] = () => {
            _0xb1eb14 = null;
            _0x3be278['CURRENT_TARGET'] = null;
            _0x100154();
            _0x1a12d2();
        };
        _0x2840b8['appendChild'](_0x4487ae);
        for (const _0x66ca90 in _0x45faf6) {
            const _0x2135f6 = _0x45faf6[_0x66ca90];
            if (_0x2135f6['isDead'])
                continue;
            const _0x5cc37c = document['createElement']('button');
            _0x5cc37c['className'] = 'layer-btn';
            _0x5cc37c['innerText'] = _0x2135f6['name'];
            if (_0xb1eb14 === parseInt(_0x66ca90) || _0x3be278['CURRENT_TARGET'] === parseInt(_0x66ca90))
                _0x5cc37c['classList']['add']('active');
            _0x5cc37c['onclick'] = () => {
                _0xb1eb14 = parseInt(_0x66ca90);
                _0x3be278['CURRENT_TARGET'] = parseInt(_0x66ca90);
                _0x100154();
                _0x1a12d2();
            };
            _0x2840b8['appendChild'](_0x5cc37c);
        }
        _0x3e9085['appendChild'](_0x2840b8);
        return;
    }
    let _0x519234 = '';
    let _0x27e4ef = ![];
    if (_0xec0cbc === 'Doctor') {
        _0x519234 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x27e4ef = !![];
    } else if (_0xec0cbc === 'Investigator') {
        _0x519234 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0xec0cbc === 'Tracker') {
        _0x519234 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0xec0cbc === 'Archer') {
        _0x519234 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0xec0cbc === 'Escort') {
        _0x519234 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0xec0cbc === 'Vigilante') {
        _0x519234 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x379d31 = document['createElement']('div');
    _0x379d31['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x379d31['innerText'] = _0x519234;
    _0x3e9085['appendChild'](_0x379d31);
    const _0x18d814 = document['createElement']('div');
    _0x18d814['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x181eaa = document['createElement']('button');
    _0x181eaa['className'] = 'layer-btn';
    _0x181eaa['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x181eaa['innerText'] = 'No\x20one';
    if (_0x3be278['CURRENT_TARGET'] === null)
        _0x181eaa['classList']['add']('active');
    _0x181eaa['onclick'] = () => {
        _0x3be278['CURRENT_TARGET'] = null;
        if (_0x44cb30 && _0x44cb30['readyState'] === WebSocket['OPEN']) {
            _0x44cb30['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x1a12d2();
    };
    _0x18d814['appendChild'](_0x181eaa);
    for (const _0x388685 in _0x45faf6) {
        const _0x5ac6b0 = _0x45faf6[_0x388685];
        if (_0x5ac6b0['isDead'])
            continue;
        const _0x245a54 = document['createElement']('button');
        _0x245a54['className'] = 'layer-btn';
        _0x245a54['innerText'] = _0x5ac6b0['name'];
        if (_0x3be278['CURRENT_TARGET'] === parseInt(_0x388685))
            _0x245a54['classList']['add']('active');
        _0x245a54['onclick'] = () => {
            _0x3be278['CURRENT_TARGET'] = parseInt(_0x388685);
            if (_0x44cb30 && _0x44cb30['readyState'] === WebSocket['OPEN']) {
                _0x44cb30['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x388685)
                }));
            }
            _0x1a12d2();
        };
        _0x18d814['appendChild'](_0x245a54);
    }
    if (_0x27e4ef && !_0x3d0db6['isDead']) {
        const _0x12721e = document['createElement']('button');
        _0x12721e['className'] = 'layer-btn';
        _0x12721e['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x12721e['innerText'] = _0x366823 + '\x20(Self)';
        if (_0x3be278['CURRENT_TARGET'] === _0x1ac5fb)
            _0x12721e['classList']['add']('active');
        _0x12721e['onclick'] = () => {
            _0x3be278['CURRENT_TARGET'] = _0x1ac5fb;
            if (_0x44cb30 && _0x44cb30['readyState'] === WebSocket['OPEN']) {
                _0x44cb30['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x1ac5fb
                }));
            }
            _0x1a12d2();
        };
        _0x18d814['appendChild'](_0x12721e);
    }
    _0x3e9085['appendChild'](_0x18d814);
}
function _0x5ada2() {
    if (_0x44cb30 && (_0x44cb30['readyState'] === WebSocket['OPEN'] || _0x44cb30['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x3c3037 = new URLSearchParams();
    if (_0x2e299f)
        _0x3c3037['set']('token', _0x2e299f);
    _0x3c3037['set']('ngrok-skip-browser-warning', 'true');
    const _0x8f734d = 'wss://soonest-certain-astrology-rand.trycloudflare.com';
    const _0x5cdf1b = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x8f734d;
    const _0x5c5d88 = _0x5cdf1b + '/?' + _0x3c3037['toString']();
    _0x44cb30 = new WebSocket(_0x5c5d88);
    _0x44cb30['onopen'] = function () {
        if (!_0x35a566 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x49e571 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x42431b = window['_FB'] && window['_FB']['_userData'];
                const _0x1f3b6c = !(_0x49e571 && _0x42431b && _0x42431b['username']);
                const _0x34af03 = _0x1f3b6c ? 'body01.png' : _0x3e889d;
                const _0x1fc19d = _0x1f3b6c ? 'eyes4.png' : _0x3a1db0;
                const _0x401aea = !_0x1f3b6c && _0x42431b && _0x42431b['photoURL'] ? _0x42431b['photoURL'] : '';
                const _0x28cee2 = !_0x1f3b6c && _0x49e571 ? _0x49e571['uid'] : '';
                const _0x1c3cb6 = !_0x1f3b6c && _0x42431b ? {
                    'townWins': _0x42431b['townWins'] || 0x0,
                    'mafiaWins': _0x42431b['mafiaWins'] || 0x0,
                    'deaths': _0x42431b['deaths'] || 0x0,
                    'townLosses': _0x42431b['townLosses'] || 0x0,
                    'mafiaLosses': _0x42431b['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x366823,
                    'token': _0x2e299f,
                    'body': _0x34af03,
                    'eyes': _0x1fc19d,
                    'isGuest': _0x1f3b6c,
                    'uid': _0x28cee2,
                    'photoURL': _0x401aea,
                    'accountStats': _0x1c3cb6
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x44cb30 && _0x44cb30['readyState'] === WebSocket['OPEN']) {
            _0x44cb30['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x44cb30['onclose'] = _0x169b0a => {
        if (_0x169b0a['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x169b0a['code'] === 0xfa2 || _0x169b0a['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x2dc6fe = document['getElementById']('disconnect-overlay');
        if (!_0x2dc6fe) {
            _0x2dc6fe = document['createElement']('div');
            _0x2dc6fe['id'] = 'disconnect-overlay';
            _0x2dc6fe['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x2dc6fe['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x2dc6fe);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x44cb30['onmessage'] = _0x29fc13 => {
        const _0x987aa1 = JSON['parse'](_0x29fc13['data']);
        if (_0x987aa1['type'] === 'map_data') {
            _0x3be278['MAP']['tileSize'] = _0x987aa1['map']['tileSize'];
            _0x3be278['MAP']['columns'] = _0x987aa1['map']['columns'];
            _0x3be278['MAP']['rows'] = _0x987aa1['map']['rows'];
            _0x3be278['MAP']['layers'] = _0x987aa1['map']['layers'];
            if (_0x987aa1['map']['doors']) {
                _0x3be278['MAP']['doors'] = _0x987aa1['map']['doors'];
                const _0x19405c = _0x3be278['MAP']['layers']['find'](_0x3cfffd => _0x3cfffd['name'] === 'floor2');
                if (_0x19405c) {
                    for (const _0x156cb7 in _0x3be278['MAP']['doors']) {
                        _0x19405c['data'][parseInt(_0x156cb7)] = 0x2;
                    }
                }
            }
            if (_0x987aa1['entities'])
                _0x3be278['ENTITIES'] = _0x987aa1['entities'];
            _0x3b30c8();
            _0x3be278['SYSTEM']['isReady'] = !![];
            _0x4dad4a();
            if (!_0x3be278['SYSTEM']['_gameLoopRunning']) {
                _0x3be278['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x3f1d79);
            }
            return;
        }
        if (_0x987aa1['type'] === 'init') {
            _0x1ac5fb = _0x987aa1['id'];
            _0x35a566 = ![];
            _0x2ee8e1();
            if (_0x40a9e5) {
                const _0x44353e = document['getElementById']('leaderboard-list');
                const _0x2b9a2c = document['getElementById']('leaderboard-toggle');
                if (_0x44353e) {
                    _0x44353e['style']['display'] = 'none';
                    if (_0x2b9a2c)
                        _0x2b9a2c['style']['transform'] = 'rotate(180deg)';
                }
                const _0x5d4933 = document['getElementById']('role-list-items');
                const _0x12b380 = document['getElementById']('role-list-toggle');
                if (_0x5d4933) {
                    _0x5d4933['style']['display'] = 'none';
                    if (_0x12b380)
                        _0x12b380['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x23ed22 = _0x987aa1['isOwner'] || ![];
            _0x366823 = _0x987aa1['name'] || _0x366823;
            _0x3be278['MAP']['tileSize'] = _0x987aa1['map']['tileSize'];
            _0x3be278['MAP']['columns'] = _0x987aa1['map']['columns'];
            _0x3be278['MAP']['rows'] = _0x987aa1['map']['rows'];
            _0x3be278['MAP']['layers'] = _0x987aa1['map']['layers'];
            if (_0x987aa1['map']['doors']) {
                _0x3be278['MAP']['doors'] = _0x987aa1['map']['doors'];
                const _0x4cc164 = _0x3be278['MAP']['layers']['find'](_0x4c6701 => _0x4c6701['name'] === 'floor2');
                if (_0x4cc164) {
                    for (const _0x27f0c4 in _0x3be278['MAP']['doors']) {
                        _0x4cc164['data'][parseInt(_0x27f0c4)] = 0x2;
                    }
                }
            }
            if (_0x987aa1['entities'])
                _0x3be278['ENTITIES'] = _0x987aa1['entities'];
            if (_0x987aa1['bloodSplatters'])
                _0x3e0802 = _0x987aa1['bloodSplatters'];
            if (_0x987aa1['bloodDrops'])
                _0x324ad4 = _0x987aa1['bloodDrops'];
            if (_0x987aa1['roleList'] && _0x987aa1['roleList']['length'] > 0x0) {
                _0x3be278['ROLE_LIST_RAW'] = _0x987aa1['roleList'];
                _0x55286a(_0x987aa1['roleList'], _0x987aa1['roleListMode']);
            }
            _0x3b30c8();
            _0x3d0db6['x'] = _0x3be278['MAP']['columns'] * _0x3be278['MAP']['tileSize'] / 0x2;
            _0x3d0db6['y'] = _0x3be278['MAP']['rows'] * _0x3be278['MAP']['tileSize'] / 0x2;
            _0x3be278['CAMERA']['x'] = _0x3d0db6['x'] + _0x3d0db6['width'] / 0x2 - _0x3be278['CAMERA']['width'] / 0x2;
            _0x3be278['CAMERA']['y'] = _0x3d0db6['y'] + _0x3d0db6['height'] / 0x2 - _0x3be278['CAMERA']['height'] / 0x2;
            if (_0x23ed22) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x48611b();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x3ea2aa = document['getElementById']('role-index-btn-wrap');
            if (_0x3ea2aa)
                _0x3ea2aa['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x3be278['SYSTEM']['lastTime'] = performance['now']();
            _0x3be278['SYSTEM']['isReady'] = !![];
            _0xab459f();
            if (!_0x3be278['SYSTEM']['_gameLoopRunning']) {
                _0x3be278['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x3f1d79);
            }
            return;
        } else if (_0x987aa1['type'] === 'state') {
            const _0x4e9e2c = {};
            for (const _0x5fecf4 in _0x987aa1['players']) {
                if (parseInt(_0x5fecf4) === _0x1ac5fb)
                    continue;
                const _0x4eca75 = _0x987aa1['players'][_0x5fecf4];
                const _0x1e0fb5 = _0x45faf6[_0x5fecf4];
                if (_0x1e0fb5) {
                    const _0x1e7118 = _0x4eca75['x'] - _0x1e0fb5['renderX'];
                    const _0x412d92 = _0x4eca75['y'] - _0x1e0fb5['renderY'];
                    const _0x185bef = _0x1e7118 * _0x1e7118 + _0x412d92 * _0x412d92 > 0x78 * 0x78;
                    Object['assign'](_0x1e0fb5, _0x4eca75);
                    if (_0x185bef) {
                        _0x1e0fb5['renderX'] = _0x4eca75['x'];
                        _0x1e0fb5['renderY'] = _0x4eca75['y'];
                    }
                    _0x4e9e2c[_0x5fecf4] = _0x1e0fb5;
                } else {
                    _0x4e9e2c[_0x5fecf4] = {
                        ..._0x4eca75,
                        'renderX': _0x4eca75['x'],
                        'renderY': _0x4eca75['y'],
                        'renderAngle': _0x4eca75['angle'] || 0x0
                    };
                }
            }
            _0x45faf6 = _0x4e9e2c;
            _0xf37e24();
            if (_0x987aa1['players'][_0x1ac5fb]) {
                const _0x430168 = _0x987aa1['players'][_0x1ac5fb];
                _0x3d0db6['chats'] = _0x430168['chats'] || [];
                _0x3d0db6['isDead'] = _0x430168['isDead'];
                _0x3d0db6['hasArrow'] = _0x430168['hasArrow'] || ![];
                if (_0x430168['name'])
                    _0x366823 = _0x430168['name'];
                _0xab459f();
                const _0x24c7f6 = Math['hypot'](_0x430168['x'] - _0x3d0db6['x'], _0x430168['y'] - _0x3d0db6['y']);
                if (_0x24c7f6 > 0xfa) {
                    _0x3d0db6['x'] = _0x430168['x'];
                    _0x3d0db6['y'] = _0x430168['y'];
                } else if (_0x24c7f6 > 0x50) {
                    _0x3d0db6['x'] += (_0x430168['x'] - _0x3d0db6['x']) * 0.06;
                    _0x3d0db6['y'] += (_0x430168['y'] - _0x3d0db6['y']) * 0.06;
                }
            }
            if (_0x987aa1['entities'])
                _0x3be278['ENTITIES'] = _0x987aa1['entities'];
            if (_0x987aa1['game']) {
                _0x3be278['GAME_STATE'] = _0x987aa1['game']['state'];
                _0x3be278['NIGHT_ABILITY_OPEN'] = _0x987aa1['game']['nightAbilityOpen'];
                if (_0x987aa1['game']['bloodSplatters'])
                    _0x3e0802 = _0x987aa1['game']['bloodSplatters'];
                if (_0x987aa1['game']['bloodDrops'])
                    _0x324ad4 = _0x987aa1['game']['bloodDrops'];
                if (_0x987aa1['game']['blackmailed']) {
                    _0x2ea5b5 = new Set(_0x987aa1['game']['blackmailed']);
                } else {
                    _0x2ea5b5['clear']();
                }
                if (_0x987aa1['game']['mayorRevealed']) {
                    for (const _0x38089c in _0x987aa1['game']['mayorRevealed']) {
                        _0x117a9c['add'](parseInt(_0x38089c));
                    }
                }
                if (_0x3be278['LAST_STATE'] !== _0x3be278['GAME_STATE']) {
                    if (_0x3be278['GAME_STATE'] !== 'NIGHT') {
                        _0x3be278['CURRENT_TARGET'] = null;
                        _0x3b0b79 = null;
                        _0x1cc4d8 = null;
                        _0xb1eb14 = null;
                        _0x87f1db = null;
                        _0x29b317 = null;
                        const _0x5785d6 = document['getElementById']('ability-ui');
                        if (_0x5785d6)
                            _0x5785d6['style']['display'] = 'none';
                    }
                    if (_0x3be278['GAME_STATE'] === 'NIGHT') {
                        _0x3d0db6['chats'] = [];
                        for (const _0x46e162 in _0x45faf6) {
                            _0x45faf6[_0x46e162]['chats'] = [];
                        }
                    }
                    _0x3be278['LAST_STATE'] = _0x3be278['GAME_STATE'];
                    _0x5377b0();
                    _0x1d7010['onStateChange'](_0x3be278['GAME_STATE'], _0x987aa1['game']['nightAbilityOpen']);
                }
                const _0x565d83 = document['getElementById']('phase-ui');
                if (_0x565d83) {
                    if (_0x987aa1['game']['state'] === 'LOBBY') {
                        _0x565d83['style']['display'] = 'none';
                    } else {
                        _0x565d83['style']['display'] = 'block';
                    }
                    let _0x4c3a43 = _0x987aa1['game']['state']['replace']('_', '\x20');
                    if (_0x987aa1['game']['state'] === 'DAY_DISCUSS') {
                        _0x4c3a43 = 'DAY\x20' + (_0x987aa1['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x987aa1['game']['timer'] + 's';
                    } else if (_0x987aa1['game']['state'] === 'DAY_VOTE') {
                        _0x4c3a43 = 'DAY\x20' + (_0x987aa1['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x987aa1['game']['timer'] + 's';
                    } else if (_0x987aa1['game']['state'] === 'NIGHT') {
                        const _0x36b279 = _0x987aa1['game']['dayCount'] || 0x1;
                        if (_0x987aa1['game']['nightAbilityOpen']) {
                            _0x4c3a43 = 'NIGHT\x20' + _0x36b279 + '\x20ABILITY\x20PHASE';
                            const _0xef0066 = _0x987aa1['game']['abilityTimer'] !== undefined ? _0x987aa1['game']['abilityTimer'] : _0x987aa1['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0xef0066 + 's';
                        } else {
                            _0x4c3a43 = 'NIGHT\x20' + _0x36b279;
                            document['getElementById']('phase-timer')['innerText'] = _0x987aa1['game']['timer'] + 's';
                        }
                    }
                    if (_0x987aa1['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x4c3a43;
                    }
                }
                if (_0x987aa1['game']['state'] === 'NIGHT') {
                    const _0x36a8b9 = document['getElementById']('ability-timer-label');
                    if (_0x36a8b9) {
                        const _0x2e6dbb = _0x987aa1['game']['abilityTimer'] !== undefined ? _0x987aa1['game']['abilityTimer'] : _0x987aa1['game']['timer'];
                        _0x36a8b9['innerText'] = _0x987aa1['game']['nightAbilityOpen'] ? _0x2e6dbb + 's' : '';
                    }
                    if (_0x987aa1['game']['nightAbilityOpen'] && !_0x1e4f85 && !_0x3d0db6['isDead']) {
                        _0x1e4f85 = !![];
                        _0x1a12d2();
                        const _0x4f3899 = document['getElementById']('ability-ui');
                        if (_0x4f3899)
                            _0x4f3899['style']['display'] = 'block';
                    }
                    if (!_0x987aa1['game']['nightAbilityOpen']) {
                        const _0x552da3 = document['getElementById']('ability-ui');
                        if (_0x552da3 && _0x552da3['style']['display'] === 'block') {
                            _0x552da3['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x1e4f85 = ![];
                }
                if (_0x987aa1['game']['rolesInGame']) {
                    _0x3be278['ROLES_IN_GAME'] = _0x987aa1['game']['rolesInGame'];
                }
                if (_0x987aa1['game']['skinwalkerLastRole'] !== undefined) {
                    _0x3be278['SKINWALKER_LAST_ROLE'] = _0x987aa1['game']['skinwalkerLastRole'];
                }
                if (_0x987aa1['game']['state'] === 'NIGHT') {
                    const _0x11cfa9 = document['getElementById']('will-ui');
                    if (_0x11cfa9 && _0x11cfa9['style']['display'] === 'flex') {
                        _0x11cfa9['style']['display'] = 'none';
                        const _0x482059 = document['getElementById']('will-input');
                        if (_0x482059)
                            _0x482059['blur']();
                    }
                }
                _0xc9ec57(_0x987aa1['game']);
                if (_0x987aa1['game']['roleListMode'] !== undefined) {
                    _0x3be278['ROLE_LIST_RAW'] = _0x987aa1['game']['roleList'] || [];
                    _0x55286a(_0x987aa1['game']['roleList'], _0x987aa1['game']['roleListMode']);
                }
            }
        } else if (_0x987aa1['type'] === 'teleport') {
            _0x3d0db6['x'] = _0x987aa1['x'];
            _0x3d0db6['y'] = _0x987aa1['y'];
            _0x3d0db6['vx'] = 0x0;
            _0x3d0db6['vy'] = 0x0;
            _0x3be278['CAMERA']['x'] = null;
            if (_0x987aa1['teleportId'] !== undefined)
                _0x522d7e = _0x987aa1['teleportId'];
        } else if (_0x987aa1['type'] === 'bulk_teleport') {
            for (const _0x4b0b15 in _0x987aa1['positions']) {
                const _0x1af722 = _0x987aa1['positions'][_0x4b0b15];
                if (parseInt(_0x4b0b15) === _0x1ac5fb) {
                    _0x3d0db6['x'] = _0x1af722['x'];
                    _0x3d0db6['y'] = _0x1af722['y'];
                    _0x3d0db6['vx'] = 0x0;
                    _0x3d0db6['vy'] = 0x0;
                    _0x3be278['CAMERA']['x'] = null;
                    continue;
                }
                const _0x1a1cf9 = _0x45faf6[_0x4b0b15];
                if (_0x1a1cf9) {
                    _0x1a1cf9['x'] = _0x1af722['x'];
                    _0x1a1cf9['y'] = _0x1af722['y'];
                    _0x1a1cf9['renderX'] = _0x1af722['x'];
                    _0x1a1cf9['renderY'] = _0x1af722['y'];
                    _0x1a1cf9['vx'] = 0x0;
                    _0x1a1cf9['vy'] = 0x0;
                }
            }
        } else if (_0x987aa1['type'] === 'player_left') {
            delete _0x45faf6[_0x987aa1['id']];
            _0x117a9c['delete'](parseInt(_0x987aa1['id']));
        } else if (_0x987aa1['type'] === 'map_update') {
            const _0x290051 = _0x3be278['MAP']['layers']['find'](_0x195d94 => _0x195d94['name'] === _0x987aa1['layer']);
            if (_0x290051) {
                _0x290051['data'][_0x987aa1['row'] * _0x3be278['MAP']['columns'] + _0x987aa1['col']] = _0x987aa1['gid'];
                const _0x31f9f0 = _0x987aa1['row'] * _0x3be278['MAP']['columns'] + _0x987aa1['col'];
                if (_0x3be278['MAP']['doors'] && _0x3be278['MAP']['doors'][_0x31f9f0]) {
                    const _0x27ffb1 = _0x3be278['MAP']['layers']['find'](_0x4d5255 => _0x4d5255['name'] === 'floor2');
                    if (_0x27ffb1)
                        _0x27ffb1['data'][_0x31f9f0] = 0x2;
                }
                const _0x237ccd = Math['floor'](_0x987aa1['col'] * _0x3be278['MAP']['tileSize'] / _0x3be278['MAP']['chunkSize']);
                const _0x13ea37 = Math['floor'](_0x987aa1['row'] * _0x3be278['MAP']['tileSize'] / _0x3be278['MAP']['chunkSize']);
                _0x449b18(_0x237ccd, _0x13ea37);
                _0x294b0d = null;
                _0x5c58cc = null;
            }
        } else if (_0x987aa1['type'] === 'role_assign') {
            _0xec0cbc = _0x987aa1['role'];
            _0x3d0db6['isDead'] = _0xec0cbc === 'Spectator';
            _0x117a9c['clear']();
            _0x3be278['CURRENT_TARGET'] = null;
            _0x3b0b79 = null;
            _0x1cc4d8 = null;
            _0xb1eb14 = null;
            _0x87f1db = null;
            _0x29b317 = null;
            _0x1e4f85 = ![];
            const _0x1e7ac9 = document['getElementById']('ability-ui');
            if (_0x1e7ac9)
                _0x1e7ac9['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0xec0cbc;
            _0x5377b0();
            _0x354ff8(_0xec0cbc === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0xec0cbc, !![]);
            let _0x3b6fc7 = '';
            if (_0xec0cbc === 'Investigator')
                _0x3b6fc7 = 'Investigate\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0xec0cbc === 'Tracker')
                _0x3b6fc7 = 'Track\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0xec0cbc === 'Doctor')
                _0x3b6fc7 = 'Heal\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0xec0cbc === 'Archer')
                _0x3b6fc7 = 'Guard\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0xec0cbc === 'Escort')
                _0x3b6fc7 = 'Roleblock\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0xec0cbc === 'Vigilante')
                _0x3b6fc7 = 'Shoot\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0xec0cbc === 'Skinwalker')
                _0x3b6fc7 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0xec0cbc === 'Blackmailer')
                _0x3b6fc7 = 'Pick\x20a\x20player\x20to\x20blackmail\x20and\x20a\x20player\x20to\x20kill\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0xec0cbc === 'Celebrity')
                _0x3b6fc7 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0xec0cbc === 'Mayor')
                _0x3b6fc7 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x354ff8(_0x3b6fc7, !![]);
        } else if (_0x987aa1['type'] === 'mayor_reveal') {
            _0x117a9c['add'](parseInt(_0x987aa1['playerId']));
            _0xab459f();
            _0x5377b0();
        } else if (_0x987aa1['type'] === 'rolelist_update') {
            _0x3be278['ROLE_LIST_RAW'] = _0x987aa1['list'] || [];
            _0x55286a(_0x987aa1['list'], _0x987aa1['mode']);
        } else if (_0x987aa1['type'] === 'sound_event') {
            _0x1d7010['onSoundEvent'](_0x987aa1['track']);
        } else if (_0x987aa1['type'] === 'blood_splatter') {
            _0x3e0802['push']({
                'x': _0x987aa1['x'],
                'y': _0x987aa1['y']
            });
        } else if (_0x987aa1['type'] === 'blood_drop') {
            _0x324ad4['push']({
                'x': _0x987aa1['x'],
                'y': _0x987aa1['y']
            });
        } else if (_0x987aa1['type'] === 'day_fade') {
            _0xbd980f = 0x1;
            _0x57a142 = performance['now']() + 0x3e8;
        } else if (_0x987aa1['type'] === 'player_stats_updated') {
            const _0x2ca441 = parseInt(_0x987aa1['id']);
            if (_0x2ca441 === _0x1ac5fb && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x987aa1['accountStats']);
            }
            if (_0x45faf6[_0x987aa1['id']]) {
                _0x45faf6[_0x987aa1['id']]['accountStats'] = _0x987aa1['accountStats'];
            }
            _0xf37e24();
        } else if (_0x987aa1['type'] === 'stats_update') {
            const _0x2365fa = window['_FB'];
            if (_0x2365fa && _0x2365fa['_currentUser'] && _0x2365fa['_userData']) {
                const _0x3216f6 = _0x2365fa['_currentUser']['uid'];
                const _0x4a2c28 = _0x987aa1['patch'] || {};
                const _0x222f48 = _0x2365fa['_userData'];
                const _0x25cf17 = {
                    'townWins': (_0x222f48['townWins'] || 0x0) + (_0x4a2c28['townWins'] || 0x0),
                    'mafiaWins': (_0x222f48['mafiaWins'] || 0x0) + (_0x4a2c28['mafiaWins'] || 0x0),
                    'deaths': (_0x222f48['deaths'] || 0x0) + (_0x4a2c28['deaths'] || 0x0),
                    'townLosses': (_0x222f48['townLosses'] || 0x0) + (_0x4a2c28['townLosses'] || 0x0),
                    'mafiaLosses': (_0x222f48['mafiaLosses'] || 0x0) + (_0x4a2c28['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x2365fa['_userData'], _0x25cf17);
                const _0x31fac4 = _0x2365fa['doc'](_0x2365fa['db'], 'users', _0x3216f6);
                _0x2365fa['updateDoc'](_0x31fac4, _0x25cf17)['catch'](() => {
                });
                if (_0x44cb30 && _0x44cb30['readyState'] === WebSocket['OPEN']) {
                    _0x44cb30['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x25cf17
                    }));
                }
                _0xf37e24();
            }
        } else if (_0x987aa1['type'] === 'game_over') {
            _0x1d7010['onStateChange']('LOBBY', ![]);
            _0x55286a([], 'off');
            _0xec0cbc = null;
            _0x3d0db6['isDead'] = ![];
            _0x3d0db6['hasArrow'] = ![];
            _0x3e0802 = [];
            _0x324ad4 = [];
            _0x2ea5b5['clear']();
            _0x117a9c['clear']();
            _0x3be278['CURRENT_TARGET'] = null;
            _0x3b0b79 = null;
            _0x1cc4d8 = null;
            _0xb1eb14 = null;
            _0x87f1db = null;
            _0x29b317 = null;
            _0x1e4f85 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x5377b0();
            _0x354ff8('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x987aa1['type'] === 'chat_log') {
            _0x354ff8(_0x987aa1['text'], ![], !!_0x987aa1['isHost'], _0x987aa1['sender']);
        } else if (_0x987aa1['type'] === 'sys_chat') {
            _0x354ff8(_0x987aa1['text'], !![]);
        }
    };
}
function _0x354ff8(_0x3b4545, _0x2e4f44 = ![], _0x27698c = ![], _0x4f5780 = null) {
    const _0x4e8496 = document['getElementById']('chat-log-messages');
    const _0x18e51c = document['getElementById']('chat-log-ui');
    const _0x2d5611 = _0x18e51c ? _0x18e51c['scrollHeight'] - _0x18e51c['scrollTop'] - _0x18e51c['clientHeight'] < 0x1e : !![];
    const _0x1463a8 = document['createElement']('div');
    _0x1463a8['className'] = 'chat-log-line' + (_0x2e4f44 ? '\x20sys-msg' : '');
    if (_0x4f5780) {
        const _0x206747 = document['createElement']('span');
        _0x206747['className'] = _0x27698c ? 'chat-host-name' : 'chat-sender-name';
        _0x206747['textContent'] = _0x4f5780 + ':\x20';
        const _0x45ecff = document['createElement']('span');
        _0x45ecff['className'] = 'chat-msg-text';
        _0x45ecff['textContent'] = _0x3b4545;
        _0x1463a8['appendChild'](_0x206747);
        _0x1463a8['appendChild'](_0x45ecff);
    } else {
        _0x1463a8['innerText'] = _0x3b4545;
    }
    if (_0x4e8496)
        _0x4e8496['appendChild'](_0x1463a8);
    if (_0x18e51c && _0x2d5611) {
        _0x18e51c['scrollTop'] = _0x18e51c['scrollHeight'];
    }
    if (_0x4e8496 && _0x4e8496['childElementCount'] > 0xc8) {
        _0x4e8496['removeChild'](_0x4e8496['firstChild']);
    }
}
function _0x2abc5b(_0x38743b, _0x3f0a4c, _0x494901) {
    const _0x49d3b2 = document['createElement']('canvas');
    _0x49d3b2['width'] = _0x494901;
    _0x49d3b2['height'] = _0x494901;
    const _0x1e31b3 = _0x49d3b2['getContext']('2d');
    _0x1e31b3['imageSmoothingEnabled'] = ![];
    const _0x596662 = 'assets/' + (_0x38743b || 'body01.png');
    const _0x1e1bab = _0x365ff4(_0x596662);
    if (_0x1e1bab['complete'] && _0x1e1bab['naturalWidth'] > 0x0)
        _0x1e31b3['drawImage'](_0x1e1bab, 0x0, 0x0, _0x494901, _0x494901);
    if (_0x3f0a4c) {
        const _0x3a67e3 = 'assets/' + _0x3f0a4c;
        const _0x4ca6f7 = _0x365ff4(_0x3a67e3);
        if (_0x4ca6f7['complete'] && _0x4ca6f7['naturalWidth'] > 0x0)
            _0x1e31b3['drawImage'](_0x4ca6f7, 0x0, 0x0, _0x494901, _0x494901);
    }
    return _0x49d3b2['toDataURL']();
}
let _0x4b43b9 = '';
function _0xf37e24() {
    const _0x2852e5 = document['getElementById']('chat-profile-panel');
    if (!_0x2852e5)
        return;
    const _0x24165 = [];
    if (_0x1ac5fb !== null) {
        const _0x28a9a9 = _0x3e889d || 'body01.png';
        const _0x2b3cdf = _0x3a1db0 || 'eyes4.png';
        const _0x2c9459 = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x24165['push']({
            'id': _0x1ac5fb,
            'name': _0x366823,
            'body': _0x28a9a9,
            'eyes': _0x2b3cdf,
            'stats': _0x2c9459
        });
    }
    for (const _0x1699f5 in _0x45faf6) {
        const _0x33a8e0 = _0x45faf6[_0x1699f5];
        const _0x58fabf = _0x33a8e0['accountStats'] || null;
        _0x24165['push']({
            'id': parseInt(_0x1699f5),
            'name': _0x33a8e0['name'],
            'body': _0x33a8e0['body'] || 'body01.png',
            'eyes': _0x33a8e0['eyes'] || 'eyes4.png',
            'stats': _0x58fabf
        });
    }
    const _0x2a7ca7 = _0x24165['map'](_0x49aaad => _0x49aaad['id'] + '_' + _0x49aaad['name'] + '_' + _0x49aaad['body'] + '_' + _0x49aaad['eyes'] + '_' + JSON['stringify'](_0x49aaad['stats']))['join']('|');
    if (_0x2a7ca7 === _0x4b43b9)
        return;
    _0x4b43b9 = _0x2a7ca7;
    _0x2852e5['innerHTML'] = '';
    let _0x37ff85 = ![];
    for (const _0x4ffeee of _0x24165) {
        _0x37ff85 = !![];
        const _0x54bf01 = _0x2abc5b(_0x4ffeee['body'], _0x4ffeee['eyes'], 0x20);
        const _0x44966b = document['createElement']('div');
        _0x44966b['className'] = 'chat-pfp-entry';
        const _0x12efd6 = document['createElement']('img');
        _0x12efd6['src'] = _0x54bf01;
        _0x12efd6['alt'] = _0x4ffeee['name'];
        _0x44966b['appendChild'](_0x12efd6);
        const _0x459e2d = document['createElement']('div');
        _0x459e2d['className'] = 'chat-pfp-tooltip';
        let _0x37de85 = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x4ffeee['name'] + '</div>';
        const _0x113aae = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x37a588 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x119588 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x1b8fbb = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x54e8bb = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x55687e = (_0x595fb7, _0xc9f6ce, _0x450b36, _0x550f14) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x595fb7 + '<span\x20style=\x22flex:1;color:' + _0x550f14 + ';\x22>' + _0xc9f6ce + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x450b36 + '</span></div>';
        if (_0x4ffeee['stats']) {
            _0x37de85 += _0x55687e(_0x113aae, 'Town\x20Wins', _0x4ffeee['stats']['townWins'] || 0x0, '#55ee77');
            _0x37de85 += _0x55687e(_0x37a588, 'Mafia\x20Wins', _0x4ffeee['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x37de85 += _0x55687e(_0x119588, 'Deaths', _0x4ffeee['stats']['deaths'] || 0x0, '#aaa');
            _0x37de85 += _0x55687e(_0x1b8fbb, 'Town\x20Losses', _0x4ffeee['stats']['townLosses'] || 0x0, '#6688aa');
            _0x37de85 += _0x55687e(_0x54e8bb, 'Mafia\x20Losses', _0x4ffeee['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x37de85 += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x459e2d['innerHTML'] = _0x37de85;
        _0x44966b['appendChild'](_0x459e2d);
        _0x44966b['addEventListener']('mouseenter', () => {
            const _0x475d77 = _0x44966b['getBoundingClientRect']();
            _0x459e2d['style']['left'] = _0x475d77['right'] + 0x6 + 'px';
            _0x459e2d['style']['top'] = _0x475d77['top'] + _0x475d77['height'] / 0x2 + 'px';
            _0x459e2d['style']['transform'] = 'translateY(-50%)';
        });
        _0x2852e5['appendChild'](_0x44966b);
    }
    const _0x4e0b5d = document['getElementById']('chat-log-wrap');
    if (_0x4e0b5d) {
        if (_0x37ff85) {
            _0x4e0b5d['classList']['add']('has-profiles');
            _0x2852e5['style']['display'] = 'flex';
        } else {
            _0x4e0b5d['classList']['remove']('has-profiles');
            _0x2852e5['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0xf37e24;
let _0x920c5c = -0x1, _0x3844ad = -0x1, _0x1d9d8d = -0x1, _0xfa5d34 = 0x0;
function _0x500dca() {
    if (!_0x1ac5fb || !_0x44cb30 || _0x44cb30['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x3a830c = performance['now']();
    const _0x1ce6bb = _0x3a830c - _0xfa5d34;
    const _0x5a2a7e = Math['abs'](_0x3d0db6['x'] - _0x920c5c) > 0.05 || Math['abs'](_0x3d0db6['y'] - _0x3844ad) > 0.05 || Math['abs'](_0x3d0db6['angle'] - _0x1d9d8d) > 0.02;
    if (!_0x5a2a7e && _0x1ce6bb < 0xc8)
        return;
    if (_0x1ce6bb < 0x19)
        return;
    _0xfa5d34 = _0x3a830c;
    _0x920c5c = _0x3d0db6['x'];
    _0x3844ad = _0x3d0db6['y'];
    _0x1d9d8d = _0x3d0db6['angle'];
    if (!_0x1ac5fb || !_0x44cb30 || _0x44cb30['readyState'] !== WebSocket['OPEN'])
        return;
    _0x44cb30['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x3d0db6['x'],
        'y': _0x3d0db6['y'],
        'vx': _0x3d0db6['vx'],
        'vy': _0x3d0db6['vy'],
        'angle': _0x3d0db6['angle'],
        'scale': _0x3d0db6['scale'],
        'teleportId': _0x522d7e,
        'clientTimestamp': Date['now']()
    }));
}
function _0x571f04() {
    if (_0x3d0db6['isDead'])
        return;
    const _0x54ce5d = _0x3be278['MAP']['layers']['find'](_0x30469b => _0x30469b['name'] === 'walls');
    if (!_0x54ce5d)
        return;
    const _0x2193f9 = _0x3d0db6['scale'];
    const _0x11106b = _0x3d0db6['width'] * _0x2193f9 / 0x2;
    for (let _0xcdc8cb = 0x0; _0xcdc8cb < 0x3; _0xcdc8cb++) {
        let _0x549a81 = _0x3d0db6['x'] + _0x3d0db6['width'] / 0x2;
        let _0x146c42 = _0x3d0db6['y'] + _0x3d0db6['height'] / 0x2;
        const _0x4ae29f = Math['floor']((_0x549a81 - _0x11106b) / _0x3be278['MAP']['tileSize']);
        const _0x5369da = Math['floor']((_0x549a81 + _0x11106b) / _0x3be278['MAP']['tileSize']);
        const _0xdd67d = Math['floor']((_0x146c42 - _0x11106b) / _0x3be278['MAP']['tileSize']);
        const _0x5c4fe5 = Math['floor']((_0x146c42 + _0x11106b) / _0x3be278['MAP']['tileSize']);
        for (let _0x54c45f = _0xdd67d; _0x54c45f <= _0x5c4fe5; _0x54c45f++) {
            for (let _0x3804db = _0x4ae29f; _0x3804db <= _0x5369da; _0x3804db++) {
                if (_0x3804db < 0x0 || _0x3804db >= _0x3be278['MAP']['columns'] || _0x54c45f < 0x0 || _0x54c45f >= _0x3be278['MAP']['rows'])
                    continue;
                if (_0x54ce5d['data'][_0x54c45f * _0x3be278['MAP']['columns'] + _0x3804db] === 0x0)
                    continue;
                const _0x456608 = _0x3804db * _0x3be278['MAP']['tileSize'];
                const _0x1745e5 = _0x54c45f * _0x3be278['MAP']['tileSize'];
                const _0x4c718a = _0x549a81 < _0x456608 ? _0x456608 : _0x549a81 > _0x456608 + _0x3be278['MAP']['tileSize'] ? _0x456608 + _0x3be278['MAP']['tileSize'] : _0x549a81;
                const _0x4cd50e = _0x146c42 < _0x1745e5 ? _0x1745e5 : _0x146c42 > _0x1745e5 + _0x3be278['MAP']['tileSize'] ? _0x1745e5 + _0x3be278['MAP']['tileSize'] : _0x146c42;
                const _0x15d697 = _0x549a81 - _0x4c718a;
                const _0x130ecc = _0x146c42 - _0x4cd50e;
                const _0x339da0 = Math['sqrt'](_0x15d697 * _0x15d697 + _0x130ecc * _0x130ecc);
                if (_0x339da0 < _0x11106b) {
                    if (_0x339da0 === 0x0) {
                        const _0x68be6e = _0x549a81 - _0x456608;
                        const _0x1553b9 = _0x456608 + _0x3be278['MAP']['tileSize'] - _0x549a81;
                        const _0x4a034d = _0x146c42 - _0x1745e5;
                        const _0x3a505d = _0x1745e5 + _0x3be278['MAP']['tileSize'] - _0x146c42;
                        const _0x5c1049 = Math['min'](_0x68be6e, _0x1553b9, _0x4a034d, _0x3a505d);
                        if (_0x5c1049 === _0x68be6e)
                            _0x549a81 = _0x456608 - _0x11106b;
                        else if (_0x5c1049 === _0x1553b9)
                            _0x549a81 = _0x456608 + _0x3be278['MAP']['tileSize'] + _0x11106b;
                        else if (_0x5c1049 === _0x4a034d)
                            _0x146c42 = _0x1745e5 - _0x11106b;
                        else
                            _0x146c42 = _0x1745e5 + _0x3be278['MAP']['tileSize'] + _0x11106b;
                    } else {
                        const _0x12ea66 = _0x11106b - _0x339da0;
                        _0x549a81 += _0x15d697 / _0x339da0 * _0x12ea66;
                        _0x146c42 += _0x130ecc / _0x339da0 * _0x12ea66;
                        const _0xb9f429 = _0x3d0db6['vx'] * (_0x15d697 / _0x339da0) + _0x3d0db6['vy'] * (_0x130ecc / _0x339da0);
                        if (_0xb9f429 < 0x0) {
                            _0x3d0db6['vx'] -= _0xb9f429 * (_0x15d697 / _0x339da0);
                            _0x3d0db6['vy'] -= _0xb9f429 * (_0x130ecc / _0x339da0);
                        }
                    }
                }
            }
        }
        _0x3d0db6['x'] = _0x549a81 - _0x3d0db6['width'] / 0x2;
        _0x3d0db6['y'] = _0x146c42 - _0x3d0db6['height'] / 0x2;
    }
}
function _0x32ddc8(_0x1d3f61) {
    const _0x22d2a9 = _0x3be278['MAP']['layers']['find'](_0x998414 => _0x998414['name'] === 'walls');
    if (!_0x22d2a9)
        return;
    const _0x505441 = _0x1d3f61['width'] / 0x2;
    for (let _0x90d7fd = 0x0; _0x90d7fd < 0x2; _0x90d7fd++) {
        let _0x1d95ab = _0x1d3f61['x'] + _0x1d3f61['width'] / 0x2;
        let _0x419251 = _0x1d3f61['y'] + _0x1d3f61['height'] / 0x2;
        const _0x33548d = Math['floor']((_0x1d95ab - _0x505441) / _0x3be278['MAP']['tileSize']);
        const _0x5aba6f = Math['floor']((_0x1d95ab + _0x505441) / _0x3be278['MAP']['tileSize']);
        const _0x58deb9 = Math['floor']((_0x419251 - _0x505441) / _0x3be278['MAP']['tileSize']);
        const _0x1d3bb2 = Math['floor']((_0x419251 + _0x505441) / _0x3be278['MAP']['tileSize']);
        for (let _0x49a706 = _0x58deb9; _0x49a706 <= _0x1d3bb2; _0x49a706++) {
            for (let _0x98157a = _0x33548d; _0x98157a <= _0x5aba6f; _0x98157a++) {
                if (_0x98157a < 0x0 || _0x98157a >= _0x3be278['MAP']['columns'] || _0x49a706 < 0x0 || _0x49a706 >= _0x3be278['MAP']['rows'])
                    continue;
                if (_0x22d2a9['data'][_0x49a706 * _0x3be278['MAP']['columns'] + _0x98157a] === 0x0)
                    continue;
                const _0x215a79 = _0x98157a * _0x3be278['MAP']['tileSize'];
                const _0x5b2aee = _0x49a706 * _0x3be278['MAP']['tileSize'];
                const _0x20f03a = _0x1d95ab < _0x215a79 ? _0x215a79 : _0x1d95ab > _0x215a79 + _0x3be278['MAP']['tileSize'] ? _0x215a79 + _0x3be278['MAP']['tileSize'] : _0x1d95ab;
                const _0xd63042 = _0x419251 < _0x5b2aee ? _0x5b2aee : _0x419251 > _0x5b2aee + _0x3be278['MAP']['tileSize'] ? _0x5b2aee + _0x3be278['MAP']['tileSize'] : _0x419251;
                const _0x2090fe = _0x1d95ab - _0x20f03a;
                const _0x2a3b4f = _0x419251 - _0xd63042;
                const _0x2fce22 = Math['sqrt'](_0x2090fe * _0x2090fe + _0x2a3b4f * _0x2a3b4f);
                if (_0x2fce22 < _0x505441) {
                    if (_0x2fce22 === 0x0) {
                        const _0x7c052 = _0x1d95ab - _0x215a79;
                        const _0x3ae33f = _0x215a79 + _0x3be278['MAP']['tileSize'] - _0x1d95ab;
                        const _0x4d7820 = _0x419251 - _0x5b2aee;
                        const _0xc8775a = _0x5b2aee + _0x3be278['MAP']['tileSize'] - _0x419251;
                        const _0x352db9 = Math['min'](_0x7c052, _0x3ae33f, _0x4d7820, _0xc8775a);
                        if (_0x352db9 === _0x7c052)
                            _0x1d95ab = _0x215a79 - _0x505441;
                        else if (_0x352db9 === _0x3ae33f)
                            _0x1d95ab = _0x215a79 + _0x3be278['MAP']['tileSize'] + _0x505441;
                        else if (_0x352db9 === _0x4d7820)
                            _0x419251 = _0x5b2aee - _0x505441;
                        else
                            _0x419251 = _0x5b2aee + _0x3be278['MAP']['tileSize'] + _0x505441;
                    } else {
                        const _0x298d8a = _0x505441 - _0x2fce22;
                        _0x1d95ab += _0x2090fe / _0x2fce22 * _0x298d8a;
                        _0x419251 += _0x2a3b4f / _0x2fce22 * _0x298d8a;
                    }
                }
            }
        }
        _0x1d3f61['x'] = _0x1d95ab - _0x1d3f61['width'] / 0x2;
        _0x1d3f61['y'] = _0x419251 - _0x1d3f61['height'] / 0x2;
    }
}
function _0x5ef638(_0xc329dd) {
    const _0x2fe583 = _0xc329dd['width'] / 0x2;
    for (let _0x4dffc6 = 0x0; _0x4dffc6 < 0x2; _0x4dffc6++) {
        let _0x525ab1 = _0xc329dd['x'] + _0xc329dd['width'] / 0x2;
        let _0x36c9ff = _0xc329dd['y'] + _0xc329dd['height'] / 0x2;
        for (const _0x12d881 of _0x3be278['ENTITIES']) {
            const _0x43a296 = _0x525ab1 < _0x12d881['x'] ? _0x12d881['x'] : _0x525ab1 > _0x12d881['x'] + _0x12d881['w'] ? _0x12d881['x'] + _0x12d881['w'] : _0x525ab1;
            const _0x882098 = _0x36c9ff < _0x12d881['y'] ? _0x12d881['y'] : _0x36c9ff > _0x12d881['y'] + _0x12d881['h'] ? _0x12d881['y'] + _0x12d881['h'] : _0x36c9ff;
            const _0x3ca2f3 = _0x525ab1 - _0x43a296;
            const _0x5c0728 = _0x36c9ff - _0x882098;
            const _0x4e4290 = Math['sqrt'](_0x3ca2f3 * _0x3ca2f3 + _0x5c0728 * _0x5c0728);
            if (_0x4e4290 < _0x2fe583 && _0x4e4290 > 0x0) {
                const _0xfdec = _0x2fe583 - _0x4e4290;
                const _0x33892c = _0x3ca2f3 / _0x4e4290;
                const _0x33d20e = _0x5c0728 / _0x4e4290;
                _0x525ab1 += _0x33892c * _0xfdec;
                _0x36c9ff += _0x33d20e * _0xfdec;
            } else if (_0x4e4290 === 0x0) {
                const _0x3653c8 = _0x525ab1 - _0x12d881['x'];
                const _0xa3507e = _0x12d881['x'] + _0x12d881['w'] - _0x525ab1;
                const _0x2df34f = _0x36c9ff - _0x12d881['y'];
                const _0x5b76e0 = _0x12d881['y'] + _0x12d881['h'] - _0x36c9ff;
                const _0x1bad2e = Math['min'](_0x3653c8, _0xa3507e, _0x2df34f, _0x5b76e0);
                if (_0x1bad2e === _0x3653c8)
                    _0x525ab1 = _0x12d881['x'] - _0x2fe583;
                else if (_0x1bad2e === _0xa3507e)
                    _0x525ab1 = _0x12d881['x'] + _0x12d881['w'] + _0x2fe583;
                else if (_0x1bad2e === _0x2df34f)
                    _0x36c9ff = _0x12d881['y'] - _0x2fe583;
                else
                    _0x36c9ff = _0x12d881['y'] + _0x12d881['h'] + _0x2fe583;
            }
        }
        _0xc329dd['x'] = _0x525ab1 - _0xc329dd['width'] / 0x2;
        _0xc329dd['y'] = _0x36c9ff - _0xc329dd['height'] / 0x2;
    }
}
function _0x225808() {
    if (_0x3d0db6['isDead'])
        return;
    const _0x2c8058 = _0x3d0db6['width'] / 0x2;
    const _0x325423 = _0x3d0db6['x'] + _0x3d0db6['width'] / 0x2;
    const _0x129778 = _0x3d0db6['y'] + _0x3d0db6['height'] / 0x2;
    for (const _0x7b14f0 in _0x45faf6) {
        const _0x401f5d = _0x45faf6[_0x7b14f0];
        if (_0x401f5d['isDead'])
            continue;
        const _0x3f0fa9 = _0x401f5d['width'] / 0x2;
        const _0x15af04 = _0x2c8058 + _0x3f0fa9;
        const _0x9d089f = (_0x401f5d['renderX'] ?? _0x401f5d['x']) + _0x401f5d['width'] / 0x2;
        const _0x179e9f = (_0x401f5d['renderY'] ?? _0x401f5d['y']) + _0x401f5d['height'] / 0x2;
        const _0x326ee8 = _0x325423 - _0x9d089f;
        const _0xd474a4 = _0x129778 - _0x179e9f;
        const _0x2a9643 = Math['sqrt'](_0x326ee8 * _0x326ee8 + _0xd474a4 * _0xd474a4);
        if (_0x2a9643 > 0x0 && _0x2a9643 < _0x15af04) {
            const _0x112e53 = _0x15af04 - _0x2a9643;
            const _0x563ebd = _0x326ee8 / _0x2a9643;
            const _0x739292 = _0xd474a4 / _0x2a9643;
            _0x3d0db6['x'] += _0x563ebd * (_0x112e53 * 0.25);
            _0x3d0db6['y'] += _0x739292 * (_0x112e53 * 0.25);
            _0x401f5d['x'] -= _0x563ebd * (_0x112e53 * 0.75);
            _0x401f5d['y'] -= _0x739292 * (_0x112e53 * 0.75);
            _0x32ddc8(_0x401f5d);
            _0x5ef638(_0x401f5d);
            if (_0x401f5d['renderX'] !== undefined) {
                _0x401f5d['renderX'] = _0x401f5d['x'];
                _0x401f5d['renderY'] = _0x401f5d['y'];
            }
            const _0x2d91e9 = _0x3d0db6['vx'] * _0x563ebd + _0x3d0db6['vy'] * _0x739292;
            if (_0x2d91e9 < 0x0) {
                _0x3d0db6['vx'] -= _0x2d91e9 * _0x563ebd * 0.25;
                _0x3d0db6['vy'] -= _0x2d91e9 * _0x739292 * 0.25;
            }
        }
    }
    _0x571f04();
    _0x571902();
}
function _0x571902() {
    if (_0x3d0db6['isDead'])
        return;
    const _0x272023 = _0x3d0db6['scale'];
    const _0x4d0a56 = _0x3d0db6['width'] * _0x272023 / 0x2;
    for (let _0x430fb6 = 0x0; _0x430fb6 < 0x2; _0x430fb6++) {
        let _0xead6e8 = _0x3d0db6['x'] + _0x3d0db6['width'] / 0x2;
        let _0x2a5000 = _0x3d0db6['y'] + _0x3d0db6['height'] / 0x2;
        for (const _0x51bef4 of _0x3be278['ENTITIES']) {
            const _0x321b72 = _0xead6e8 < _0x51bef4['x'] ? _0x51bef4['x'] : _0xead6e8 > _0x51bef4['x'] + _0x51bef4['w'] ? _0x51bef4['x'] + _0x51bef4['w'] : _0xead6e8;
            const _0x232bdb = _0x2a5000 < _0x51bef4['y'] ? _0x51bef4['y'] : _0x2a5000 > _0x51bef4['y'] + _0x51bef4['h'] ? _0x51bef4['y'] + _0x51bef4['h'] : _0x2a5000;
            const _0x240c7d = _0xead6e8 - _0x321b72;
            const _0x233238 = _0x2a5000 - _0x232bdb;
            const _0x487962 = Math['sqrt'](_0x240c7d * _0x240c7d + _0x233238 * _0x233238);
            if (_0x487962 < _0x4d0a56 && _0x487962 > 0x0) {
                const _0x308361 = _0x4d0a56 - _0x487962;
                const _0x6e4d20 = _0x240c7d / _0x487962;
                const _0x1e8319 = _0x233238 / _0x487962;
                _0xead6e8 += _0x6e4d20 * _0x308361;
                _0x2a5000 += _0x1e8319 * _0x308361;
                const _0x580500 = _0x3d0db6['vx'] * _0x6e4d20 + _0x3d0db6['vy'] * _0x1e8319;
                if (_0x580500 < 0x0) {
                    _0x3d0db6['vx'] -= _0x580500 * _0x6e4d20;
                    _0x3d0db6['vy'] -= _0x580500 * _0x1e8319;
                }
            } else if (_0x487962 === 0x0) {
                const _0x5b12b5 = _0xead6e8 - _0x51bef4['x'];
                const _0x279b03 = _0x51bef4['x'] + _0x51bef4['w'] - _0xead6e8;
                const _0x23d8ed = _0x2a5000 - _0x51bef4['y'];
                const _0x4ee00b = _0x51bef4['y'] + _0x51bef4['h'] - _0x2a5000;
                const _0x39f93b = Math['min'](_0x5b12b5, _0x279b03, _0x23d8ed, _0x4ee00b);
                if (_0x39f93b === _0x5b12b5)
                    _0xead6e8 = _0x51bef4['x'] - _0x4d0a56;
                else if (_0x39f93b === _0x279b03)
                    _0xead6e8 = _0x51bef4['x'] + _0x51bef4['w'] + _0x4d0a56;
                else if (_0x39f93b === _0x23d8ed)
                    _0x2a5000 = _0x51bef4['y'] - _0x4d0a56;
                else
                    _0x2a5000 = _0x51bef4['y'] + _0x51bef4['h'] + _0x4d0a56;
            }
        }
        _0x3d0db6['x'] = _0xead6e8 - _0x3d0db6['width'] / 0x2;
        _0x3d0db6['y'] = _0x2a5000 - _0x3d0db6['height'] / 0x2;
    }
}
function _0x190f37(_0x22f32c, _0x704805) {
    const _0x4d4b21 = _0x3be278['MAP']['layers']['find'](_0x1cf688 => _0x1cf688['name'] === 'trees');
    if (!_0x4d4b21)
        return ![];
    const _0x2e4871 = Math['floor'](_0x22f32c / _0x3be278['MAP']['tileSize']);
    const _0x48e307 = Math['floor'](_0x704805 / _0x3be278['MAP']['tileSize']);
    if (_0x2e4871 < 0x0 || _0x2e4871 >= _0x3be278['MAP']['columns'] || _0x48e307 < 0x0 || _0x48e307 >= _0x3be278['MAP']['rows'])
        return ![];
    return _0x4d4b21['data'][_0x48e307 * _0x3be278['MAP']['columns'] + _0x2e4871] === 0xb;
}
let _0x294b0d = null;
function _0x42c395() {
    const _0x38fc1c = _0x3be278['MAP'];
    const _0x5298da = _0x38fc1c['layers']['find'](_0x51aa7e => _0x51aa7e['name'] === 'floor2');
    const _0x479ef1 = _0x38fc1c['layers']['find'](_0x5274f3 => _0x5274f3['name'] === 'walls');
    if (!_0x5298da || !_0x479ef1) {
        _0x294b0d = null;
        return;
    }
    const _0x201824 = _0x38fc1c['columns'];
    const _0x24a235 = _0x38fc1c['rows'];
    const _0x2f8136 = [];
    const _0x314b15 = new Set();
    const _0x5bb8df = new Set();
    for (let _0x2a4015 = 0x0; _0x2a4015 < _0x24a235; _0x2a4015++) {
        for (let _0x297282 = 0x0; _0x297282 < _0x201824; _0x297282++) {
            const _0x26da91 = _0x2a4015 * _0x201824 + _0x297282;
            const _0x4f0704 = _0x5298da['data'][_0x26da91];
            const _0x161d83 = _0x479ef1['data'][_0x26da91];
            if (_0x4f0704 === 0x2 && _0x161d83 === 0x0) {
                _0x2f8136['push']({
                    'c': _0x297282,
                    'r': _0x2a4015
                });
                _0x5bb8df['add'](_0x297282 + ',' + _0x2a4015);
            } else if (_0x161d83 !== 0x0) {
                _0x314b15['add'](_0x297282 + ',' + _0x2a4015);
            }
        }
    }
    const _0x45af89 = [
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
                c: _0x56d550,
                r: _0x4694d1
            } of _0x2f8136) {
        for (const [_0x4e578d, _0x643b2a] of _0x45af89) {
            const _0x4a3002 = _0x56d550 + _0x4e578d, _0x30c901 = _0x4694d1 + _0x643b2a;
            const _0x1eaeab = _0x4a3002 + ',' + _0x30c901;
            if (!_0x5bb8df['has'](_0x1eaeab)) {
                _0x314b15['add'](_0x1eaeab);
            }
        }
    }
    _0x294b0d = {
        'wallSet': _0x314b15,
        'floorTiles': _0x2f8136,
        'interiorSet': _0x5bb8df
    };
}
function _0x2943ce() {
    const _0x3a034a = _0x3be278['MAP']['layers']['find'](_0x522bd1 => _0x522bd1['name'] === 'floor2');
    if (!_0x3a034a)
        return ![];
    const _0x1ed37c = _0x3d0db6['x'] + _0x3d0db6['width'] / 0x2;
    const _0x3f06b6 = _0x3d0db6['y'] + _0x3d0db6['height'] / 0x2;
    const _0x31a63a = _0x3be278['MAP']['tileSize'];
    const _0x2d4549 = Math['floor'](_0x1ed37c / _0x31a63a);
    const _0x4933aa = Math['floor'](_0x3f06b6 / _0x31a63a);
    if (_0x2d4549 < 0x0 || _0x2d4549 >= _0x3be278['MAP']['columns'] || _0x4933aa < 0x0 || _0x4933aa >= _0x3be278['MAP']['rows'])
        return ![];
    const _0x580e88 = _0x4933aa * _0x3be278['MAP']['columns'] + _0x2d4549;
    if (_0x3a034a['data'][_0x580e88] === 0x2)
        return !![];
    if (_0x3be278['MAP']['doors'] && _0x3be278['MAP']['doors'][_0x580e88])
        return !![];
    const _0x327822 = [
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
    for (const [_0x3564bf, _0x8b4f8a] of _0x327822) {
        const _0x825e02 = Math['floor']((_0x1ed37c + _0x3564bf) / _0x31a63a);
        const _0x439c73 = Math['floor']((_0x3f06b6 + _0x8b4f8a) / _0x31a63a);
        if (_0x825e02 >= 0x0 && _0x825e02 < _0x3be278['MAP']['columns'] && _0x439c73 >= 0x0 && _0x439c73 < _0x3be278['MAP']['rows']) {
            const _0x345881 = _0x439c73 * _0x3be278['MAP']['columns'] + _0x825e02;
            if (_0x3a034a['data'][_0x345881] === 0x2 || _0x3be278['MAP']['doors'] && _0x3be278['MAP']['doors'][_0x345881]) {
                return !![];
            }
        }
    }
    return ![];
}
let _0x5c58cc = null, _0x511ab9 = null;
function _0x4d50d7() {
    if (_0x3d0db6['isDead']) {
        _0x3be278['SHADOW']['polygon'] = null;
        _0x5c58cc = null;
        return;
    }
    const _0xf35acd = _0x3be278['MAP'];
    const _0x5076e4 = _0x3be278['SHADOW'];
    const _0xcacaf9 = _0xf35acd['tileSize'];
    if (!_0x294b0d)
        _0x42c395();
    if (!_0x294b0d) {
        _0x5076e4['polygon'] = null;
        _0x5c58cc = null;
        return;
    }
    const {
        wallSet: _0x6e846,
        floorTiles: _0xcdf506
    } = _0x294b0d;
    if (_0xcdf506['length'] === 0x0) {
        _0x5076e4['polygon'] = null;
        _0x5c58cc = null;
        return;
    }
    if (!_0x2943ce()) {
        _0x5076e4['polygon'] = null;
        _0x5c58cc = null;
        return;
    }
    const _0x4bb0fa = _0x3d0db6['x'] + _0x3d0db6['width'] / 0x2;
    const _0x40996e = _0x3d0db6['y'] + _0x3d0db6['height'] / 0x2;
    if (_0x5c58cc !== null && _0x5076e4['polygon'] && Math['hypot'](_0x4bb0fa - _0x5c58cc, _0x40996e - _0x511ab9) < 0.5) {
        return;
    }
    _0x5c58cc = _0x4bb0fa;
    _0x511ab9 = _0x40996e;
    const _0x44ef73 = Math['floor'](_0x4bb0fa / _0xcacaf9);
    const _0x348303 = Math['floor'](_0x40996e / _0xcacaf9);
    const _0x341843 = Math['max'](0x0, _0x44ef73 - 0x8);
    const _0xf41edd = Math['min'](_0xf35acd['columns'] - 0x1, _0x44ef73 + 0x8);
    const _0x31aabb = Math['max'](0x0, _0x348303 - 0x8);
    const _0x26ade1 = Math['min'](_0xf35acd['rows'] - 0x1, _0x348303 + 0x8);
    const _0x2207ad = [];
    const _0x2aaaae = [];
    for (let _0x2dff71 = _0x31aabb; _0x2dff71 <= _0x26ade1; _0x2dff71++) {
        for (let _0x1ae2d7 = _0x341843; _0x1ae2d7 <= _0xf41edd; _0x1ae2d7++) {
            if (!_0x6e846['has'](_0x1ae2d7 + ',' + _0x2dff71))
                continue;
            const _0x4dec43 = _0x1ae2d7 * _0xcacaf9;
            const _0x485e24 = _0x2dff71 * _0xcacaf9;
            const _0x29cd17 = _0x4dec43 + _0xcacaf9;
            const _0x422541 = _0x485e24 + _0xcacaf9;
            if (!_0x6e846['has'](_0x1ae2d7 + ',' + (_0x2dff71 - 0x1))) {
                _0x2207ad['push'](_0x4dec43, _0x485e24, _0x29cd17, _0x485e24);
                _0x2aaaae['push'](_0x4dec43, _0x485e24, _0x29cd17, _0x485e24);
            }
            if (!_0x6e846['has'](_0x1ae2d7 + ',' + (_0x2dff71 + 0x1))) {
                _0x2207ad['push'](_0x4dec43, _0x422541, _0x29cd17, _0x422541);
                _0x2aaaae['push'](_0x4dec43, _0x422541, _0x29cd17, _0x422541);
            }
            if (!_0x6e846['has'](_0x1ae2d7 - 0x1 + ',' + _0x2dff71)) {
                _0x2207ad['push'](_0x4dec43, _0x485e24, _0x4dec43, _0x422541);
                _0x2aaaae['push'](_0x4dec43, _0x485e24, _0x4dec43, _0x422541);
            }
            if (!_0x6e846['has'](_0x1ae2d7 + 0x1 + ',' + _0x2dff71)) {
                _0x2207ad['push'](_0x29cd17, _0x485e24, _0x29cd17, _0x422541);
                _0x2aaaae['push'](_0x29cd17, _0x485e24, _0x29cd17, _0x422541);
            }
        }
    }
    const _0x2f6a20 = new Set();
    const _0x211fa0 = [];
    const _0x14f31e = 0.0001;
    for (let _0x19c756 = 0x0; _0x19c756 < _0x2aaaae['length']; _0x19c756 += 0x2) {
        const _0x2360ab = _0x2aaaae[_0x19c756];
        const _0x598db8 = _0x2aaaae[_0x19c756 + 0x1];
        const _0x4a6440 = Math['atan2'](_0x598db8 - _0x40996e, _0x2360ab - _0x4bb0fa);
        const _0x2c8adb = Math['round'](_0x4a6440 * 0x9c40);
        if (!_0x2f6a20['has'](_0x2c8adb - 0x1)) {
            _0x2f6a20['add'](_0x2c8adb - 0x1);
            _0x211fa0['push'](_0x4a6440 - _0x14f31e);
        }
        if (!_0x2f6a20['has'](_0x2c8adb)) {
            _0x2f6a20['add'](_0x2c8adb);
            _0x211fa0['push'](_0x4a6440);
        }
        if (!_0x2f6a20['has'](_0x2c8adb + 0x1)) {
            _0x2f6a20['add'](_0x2c8adb + 0x1);
            _0x211fa0['push'](_0x4a6440 + _0x14f31e);
        }
    }
    for (let _0x1cc1a8 = 0x0; _0x1cc1a8 < 0x10; _0x1cc1a8++) {
        const _0xe87267 = -Math['PI'] + _0x1cc1a8 * 0x2 * Math['PI'] / 0x10;
        _0x211fa0['push'](_0xe87267);
    }
    _0x211fa0['sort']((_0x2309e6, _0x1904ce) => _0x2309e6 - _0x1904ce);
    const _0x5796d3 = 0xc * _0xcacaf9;
    const _0xa56a39 = [];
    for (let _0x5c87a0 = 0x0; _0x5c87a0 < _0x211fa0['length']; _0x5c87a0++) {
        const _0x18944f = _0x211fa0[_0x5c87a0];
        const _0x1b16c8 = Math['cos'](_0x18944f);
        const _0x2914f6 = Math['sin'](_0x18944f);
        let _0x1d598e = _0x5796d3;
        for (let _0x4ac68b = 0x0; _0x4ac68b < _0x2207ad['length']; _0x4ac68b += 0x4) {
            const _0x4fcaae = _0x2207ad[_0x4ac68b], _0x3dfc2d = _0x2207ad[_0x4ac68b + 0x1];
            const _0x4c96f7 = _0x2207ad[_0x4ac68b + 0x2], _0x4f3c19 = _0x2207ad[_0x4ac68b + 0x3];
            const _0x794802 = _0x4c96f7 - _0x4fcaae;
            const _0x21eaab = _0x4f3c19 - _0x3dfc2d;
            const _0x4151c6 = _0x1b16c8 * _0x21eaab - _0x2914f6 * _0x794802;
            if (Math['abs'](_0x4151c6) < 1e-9)
                continue;
            const _0x2f5993 = _0x4fcaae - _0x4bb0fa;
            const _0x3545bd = _0x3dfc2d - _0x40996e;
            const _0x1d6b76 = (_0x2f5993 * _0x21eaab - _0x3545bd * _0x794802) / _0x4151c6;
            const _0x8e87c9 = (_0x2f5993 * _0x2914f6 - _0x3545bd * _0x1b16c8) / _0x4151c6;
            if (_0x1d6b76 > 0x1 && _0x8e87c9 >= 0x0 && _0x8e87c9 <= 0x1 && _0x1d6b76 < _0x1d598e) {
                _0x1d598e = _0x1d6b76;
            }
        }
        _0xa56a39['push'](_0x4bb0fa + _0x1b16c8 * _0x1d598e, _0x40996e + _0x2914f6 * _0x1d598e);
    }
    _0x5076e4['polygon'] = _0xa56a39['length'] >= 0x6 ? _0xa56a39 : null;
}
function _0x4e3bbe(_0x2ed2cf, _0x3786ef, _0x83f787) {
    if (_0x3d0db6['isDead'])
        return;
    if (!_0x294b0d)
        _0x42c395();
    if (!_0x294b0d)
        return;
    const {floorTiles: _0x4847ec} = _0x294b0d;
    if (_0x4847ec['length'] === 0x0)
        return;
    const _0x4e417b = _0x3be278['SHADOW'];
    const _0xd8f956 = _0x3be278['MAP']['tileSize'];
    const _0x1dca5c = _0x3be278['CAMERA']['width'];
    const _0x1e9a25 = _0x3be278['CAMERA']['height'];
    if (!_0x3be278['SHADOW']['_buf'] || _0x3be278['SHADOW']['_buf']['width'] !== _0x1dca5c || _0x3be278['SHADOW']['_buf']['height'] !== _0x1e9a25) {
        _0x3be278['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x3be278['SHADOW']['_buf']['width'] = _0x1dca5c;
        _0x3be278['SHADOW']['_buf']['height'] = _0x1e9a25;
    }
    const _0x23f311 = _0x3be278['SHADOW']['_buf'];
    const _0x3646cb = _0x23f311['getContext']('2d');
    _0x3646cb['clearRect'](0x0, 0x0, _0x1dca5c, _0x1e9a25);
    _0x3646cb['fillStyle'] = 'rgba(0,0,0,0.95)';
    _0x3646cb['beginPath']();
    for (const {
                c: _0x4d90e6,
                r: _0x38254e
            } of _0x4847ec) {
        const _0x44ea26 = Math['round'](_0x4d90e6 * _0xd8f956 - _0x3786ef), _0x5c708d = Math['round'](_0x38254e * _0xd8f956 - _0x83f787);
        if (_0x44ea26 > _0x1dca5c || _0x5c708d > _0x1e9a25 || _0x44ea26 + _0xd8f956 < 0x0 || _0x5c708d + _0xd8f956 < 0x0)
            continue;
        _0x3646cb['rect'](_0x44ea26, _0x5c708d, _0xd8f956 + 0x1, _0xd8f956 + 0x1);
    }
    _0x3646cb['fill']();
    if (_0x2943ce() && _0x4e417b['polygon'] && _0x4e417b['polygon']['length'] >= 0x6) {
        _0x3646cb['globalCompositeOperation'] = 'destination-out';
        _0x3646cb['fillStyle'] = 'rgba(0,0,0,1)';
        const _0x2258af = _0x4e417b['polygon'];
        _0x3646cb['beginPath']();
        _0x3646cb['moveTo'](_0x2258af[0x0] - _0x3786ef, _0x2258af[0x1] - _0x83f787);
        for (let _0x1ec92b = 0x2; _0x1ec92b < _0x2258af['length']; _0x1ec92b += 0x2) {
            _0x3646cb['lineTo'](_0x2258af[_0x1ec92b] - _0x3786ef, _0x2258af[_0x1ec92b + 0x1] - _0x83f787);
        }
        _0x3646cb['closePath']();
        _0x3646cb['fill']();
        _0x3646cb['globalCompositeOperation'] = 'source-over';
    }
    _0x2ed2cf['drawImage'](_0x23f311, 0x0, 0x0);
}
function _0x2b0e44(_0x1b87ff) {
    let _0xfaa813 = 0x0, _0x247a51 = 0x0;
    const _0xe2e686 = _0x3be278['INPUTS']['mouseX'] / _0x3be278['SYSTEM']['viewScale'];
    const _0x348ea7 = _0x3be278['INPUTS']['mouseY'] / _0x3be278['SYSTEM']['viewScale'];
    const _0x10f253 = _0x3d0db6['x'] - _0x3be278['CAMERA']['x'] + _0x3d0db6['width'] / 0x2;
    const _0x5db5cc = _0x3d0db6['y'] - _0x3be278['CAMERA']['y'] + _0x3d0db6['height'] / 0x2;
    const _0x8ba8dd = Math['atan2'](_0x348ea7 - _0x5db5cc, _0xe2e686 - _0x10f253);
    if (_0x16e30a !== 0x0 || _0x2f53e5 !== 0x0) {
        _0xfaa813 = _0x16e30a;
        _0x247a51 = _0x2f53e5;
    } else if (_0x4f8e07) {
        let _0x5b0773 = 0x0, _0x2c0e56 = 0x0;
        if (_0x3be278['INPUTS']['keys']['w'] || _0x3be278['INPUTS']['keys']['arrowup'])
            _0x5b0773 += 0x1;
        if (_0x3be278['INPUTS']['keys']['s'] || _0x3be278['INPUTS']['keys']['arrowdown'])
            _0x5b0773 -= 0x1;
        if (_0x3be278['INPUTS']['keys']['d'] || _0x3be278['INPUTS']['keys']['arrowright'])
            _0x2c0e56 += 0x1;
        if (_0x3be278['INPUTS']['keys']['a'] || _0x3be278['INPUTS']['keys']['arrowleft'])
            _0x2c0e56 -= 0x1;
        if (_0x5b0773 !== 0x0 || _0x2c0e56 !== 0x0) {
            const _0x23637c = _0x8ba8dd + Math['atan2'](_0x2c0e56, _0x5b0773);
            _0xfaa813 = Math['cos'](_0x23637c);
            _0x247a51 = Math['sin'](_0x23637c);
        }
    } else {
        if (_0x3be278['INPUTS']['keys']['w'] || _0x3be278['INPUTS']['keys']['arrowup'])
            _0x247a51 -= 0x1;
        if (_0x3be278['INPUTS']['keys']['s'] || _0x3be278['INPUTS']['keys']['arrowdown'])
            _0x247a51 += 0x1;
        if (_0x3be278['INPUTS']['keys']['a'] || _0x3be278['INPUTS']['keys']['arrowleft'])
            _0xfaa813 -= 0x1;
        if (_0x3be278['INPUTS']['keys']['d'] || _0x3be278['INPUTS']['keys']['arrowright'])
            _0xfaa813 += 0x1;
        const _0x5e81c7 = _0xfaa813 !== 0x0 || _0x247a51 !== 0x0;
        if (_0x5e81c7) {
            const _0x451389 = Math['sqrt'](_0xfaa813 * _0xfaa813 + _0x247a51 * _0x247a51);
            _0xfaa813 /= _0x451389;
            _0x247a51 /= _0x451389;
        }
    }
    if (_0x3be278['GAME_STATE'] === 'NIGHT' && (_0xec0cbc === 'Skinwalker' || _0xec0cbc === 'Blackmailer')) {
        if (_0x3be278['NIGHT_ABILITY_OPEN'] || !_0x3be278['CURRENT_TARGET']) {
            _0xfaa813 = 0x0;
            _0x247a51 = 0x0;
            _0x3d0db6['vx'] = 0x0;
            _0x3d0db6['vy'] = 0x0;
            _0x3d0db6['x'] = _0x3be278['MAP']['columns'] * _0x3be278['MAP']['tileSize'] / 0x2 - _0x3d0db6['width'] / 0x2;
            _0x3d0db6['y'] = _0x3be278['MAP']['rows'] * _0x3be278['MAP']['tileSize'] / 0x2 - _0x3d0db6['height'] / 0x2;
        }
    }
    const _0x10c4c2 = _0xfaa813 !== 0x0 || _0x247a51 !== 0x0;
    const _0x478854 = (_0x3be278['INPUTS']['keys']['shift'] || _0x456560 || _0x371059) && _0x10c4c2;
    _0x3d0db6['bopTimer'] = _0x478854 ? _0x3d0db6['bopTimer'] + _0x1b87ff : 0x0;
    _0x3d0db6['scale'] = 0x1 + (_0x3d0db6['bopTimer'] > 0x0 ? Math['sin'](_0x3d0db6['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x224edf = Math['pow'](0.001, _0x1b87ff);
    const _0x241f8c = _0x478854 ? 0x74a : 0x5d5;
    _0x3d0db6['vx'] += _0xfaa813 * _0x241f8c * _0x1b87ff;
    _0x3d0db6['vy'] += _0x247a51 * _0x241f8c * _0x1b87ff;
    _0x3d0db6['vx'] *= _0x224edf;
    _0x3d0db6['vy'] *= _0x224edf;
    _0x3d0db6['x'] += _0x3d0db6['vx'] * _0x1b87ff;
    _0x3d0db6['y'] += _0x3d0db6['vy'] * _0x1b87ff;
    for (let _0x3e2ab2 = 0x0; _0x3e2ab2 < 0x3; _0x3e2ab2++)
        _0x571f04();
    for (let _0xc1d442 = 0x0; _0xc1d442 < 0x2; _0xc1d442++)
        _0x571902();
    for (let _0x292c8f = 0x0; _0x292c8f < 0x2; _0x292c8f++)
        _0x225808();
    if (_0x3d0db6['x'] < 0x0)
        _0x3d0db6['x'] = 0x0;
    if (_0x3d0db6['y'] < 0x0)
        _0x3d0db6['y'] = 0x0;
    if (_0x3d0db6['x'] + _0x3d0db6['width'] > _0x3be278['MAP']['columns'] * _0x3be278['MAP']['tileSize'])
        _0x3d0db6['x'] = _0x3be278['MAP']['columns'] * _0x3be278['MAP']['tileSize'] - _0x3d0db6['width'];
    if (_0x3d0db6['y'] + _0x3d0db6['height'] > _0x3be278['MAP']['rows'] * _0x3be278['MAP']['tileSize'])
        _0x3d0db6['y'] = _0x3be278['MAP']['rows'] * _0x3be278['MAP']['tileSize'] - _0x3d0db6['height'];
    if (_0x3792ba) {
        _0x3d0db6['angle'] = _0x41d207 + Math['PI'] / 0x2;
    } else if (_0x16e30a !== 0x0 || _0x2f53e5 !== 0x0) {
        _0x3d0db6['angle'] = Math['atan2'](_0x2f53e5, _0x16e30a) + Math['PI'] / 0x2;
    } else if (!_0x40a9e5) {
        _0x3d0db6['angle'] = _0x8ba8dd + Math['PI'] / 0x2;
    }
    const _0x3b9566 = _0x3d0db6['x'] + _0x3d0db6['width'] / 0x2 - _0x3be278['CAMERA']['width'] / 0x2;
    const _0x4e2f1b = _0x3d0db6['y'] + _0x3d0db6['height'] / 0x2 - _0x3be278['CAMERA']['height'] / 0x2;
    if (_0x3be278['CAMERA']['x'] === null || isNaN(_0x3be278['CAMERA']['x']) || !isFinite(_0x3be278['CAMERA']['x'])) {
        _0x3be278['CAMERA']['x'] = _0x3b9566;
        _0x3be278['CAMERA']['y'] = _0x4e2f1b;
    } else {
        const _0x2bfc8f = 0x1 - Math['exp'](-Math['max'](0x0, _0x1b87ff) * 0x28);
        _0x3be278['CAMERA']['x'] += (_0x3b9566 - _0x3be278['CAMERA']['x']) * _0x2bfc8f;
        _0x3be278['CAMERA']['y'] += (_0x4e2f1b - _0x3be278['CAMERA']['y']) * _0x2bfc8f;
    }
    for (const _0x4602de in _0x45faf6) {
        const _0x577851 = _0x45faf6[_0x4602de];
        if (_0x577851['renderX'] === undefined) {
            _0x577851['renderX'] = _0x577851['x'];
            _0x577851['renderY'] = _0x577851['y'];
            _0x577851['renderAngle'] = _0x577851['angle'] || 0x0;
        }
        const _0x2698f8 = _0x577851['x'] + (_0x577851['vx'] || 0x0) * _0x1b87ff;
        const _0x1005b1 = _0x577851['y'] + (_0x577851['vy'] || 0x0) * _0x1b87ff;
        _0x577851['x'] = _0x2698f8;
        _0x577851['y'] = _0x1005b1;
        const _0x2e8326 = 0x1 - Math['exp'](-_0x1b87ff * 0x12);
        const _0x4d008c = _0x577851['x'] - _0x577851['renderX'], _0x582554 = _0x577851['y'] - _0x577851['renderY'];
        const _0x47a5a8 = Math['sqrt'](_0x4d008c * _0x4d008c + _0x582554 * _0x582554);
        const _0x3395c0 = 0xc8;
        if (_0x47a5a8 > _0x3395c0) {
            _0x577851['renderX'] = _0x577851['x'] - _0x4d008c / _0x47a5a8 * _0x3395c0;
            _0x577851['renderY'] = _0x577851['y'] - _0x582554 / _0x47a5a8 * _0x3395c0;
        }
        _0x577851['renderX'] += (_0x577851['x'] - _0x577851['renderX']) * _0x2e8326;
        _0x577851['renderY'] += (_0x577851['y'] - _0x577851['renderY']) * _0x2e8326;
        let _0x271334 = (_0x577851['angle'] || 0x0) - _0x577851['renderAngle'];
        while (_0x271334 < -Math['PI'])
            _0x271334 += Math['PI'] * 0x2;
        while (_0x271334 > Math['PI'])
            _0x271334 -= Math['PI'] * 0x2;
        _0x577851['renderAngle'] += _0x271334 * (0x1 - Math['exp'](-_0x1b87ff * 0x14));
    }
    if (_0x3be278['GAME_STATE'] === 'NIGHT') {
        _0x86edc9 = Math['min'](0.6, _0x86edc9 + _0x1b87ff * 0.5);
    } else {
        _0x86edc9 = Math['max'](0x0, _0x86edc9 - _0x1b87ff * 0.5);
    }
    if (_0xbd980f > 0x0) {
        if (performance['now']() > _0x57a142) {
            _0xbd980f = Math['max'](0x0, _0xbd980f - _0x1b87ff * 0x2);
        }
    }
    _0x4d50d7();
    _0x500dca();
}
function _0x20ed47(_0x53be22, _0x5a9494, _0x135a18, _0x57b133, _0x38eb3f = !![]) {
    _0x53be22['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x4498c2 = _0x53be22['measureText'](_0x5a9494)['width'];
    const _0x42ccc2 = _0x4498c2 + 0x18;
    const _0x5120c6 = 0x1c;
    _0x53be22['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x53be22['beginPath']();
    if (_0x53be22['roundRect']) {
        _0x53be22['roundRect'](_0x135a18 - _0x42ccc2 / 0x2, _0x57b133 - _0x5120c6, _0x42ccc2, _0x5120c6, 0x6);
    } else {
        _0x53be22['rect'](_0x135a18 - _0x42ccc2 / 0x2, _0x57b133 - _0x5120c6, _0x42ccc2, _0x5120c6);
    }
    _0x53be22['fill']();
    if (_0x38eb3f) {
        _0x53be22['beginPath']();
        _0x53be22['moveTo'](_0x135a18 - 0x6, _0x57b133);
        _0x53be22['lineTo'](_0x135a18 + 0x6, _0x57b133);
        _0x53be22['lineTo'](_0x135a18, _0x57b133 + 0x6);
        _0x53be22['fill']();
    }
    _0x53be22['fillStyle'] = '#ffffff';
    _0x53be22['textAlign'] = 'center';
    _0x53be22['textBaseline'] = 'middle';
    _0x53be22['fillText'](_0x5a9494, _0x135a18, _0x57b133 - _0x5120c6 / 0x2 + 0x1);
}
function _0x2c8746(_0x21539f, _0x2db1ea, _0xd0a733, _0x4945c3) {
    if (!_0x2db1ea || _0x2db1ea['length'] === 0x0)
        return;
    let _0x2a0bc0 = _0x4945c3;
    for (let _0x2a70f2 = 0x0; _0x2a70f2 < _0x2db1ea['length']; _0x2a70f2++) {
        _0x20ed47(_0x21539f, _0x2db1ea[_0x2a70f2]['text'], _0xd0a733, _0x2a0bc0, _0x2a70f2 === 0x0);
        _0x2a0bc0 -= 0x24;
    }
}
function _0x44f2c2() {
    if (!_0x3be278['SYSTEM']['isReady'])
        return;
    if (_0x3be278['MAP']['layers'] && _0x3be278['MAP']['layers']['length'] > 0x0 && _0x1e442d['complete'] && _0x1e442d['naturalWidth'] > 0x0) {
        if (!_0x3be278['MAP']['_prerenderedWithTileset'] || !_0x3be278['MAP']['bgChunks'] || _0x3be278['MAP']['bgChunks']['length'] === 0x0) {
            _0x3b30c8();
        }
    }
    if (!_0x3be278['MAP']['bgChunks'] || _0x3be278['MAP']['bgChunks']['length'] === 0x0 || !_0x3be278['MAP']['bgChunks'][0x0] || _0x3be278['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x1d6afb['fillStyle'] = '#000000';
    _0x1d6afb['fillRect'](0x0, 0x0, _0x4ec94f['width'], _0x4ec94f['height']);
    _0x1d6afb['save']();
    try {
        _0x1d6afb['scale'](_0x3be278['SYSTEM']['viewScale'], _0x3be278['SYSTEM']['viewScale']);
        _0x1d6afb['imageSmoothingEnabled'] = ![];
        const _0x44f6ae = Math['floor'](_0x3be278['CAMERA']['x'] || 0x0);
        const _0x334050 = Math['floor'](_0x3be278['CAMERA']['y'] || 0x0);
        const _0x285472 = Math['max'](0x0, Math['floor'](_0x44f6ae / _0x3be278['MAP']['chunkSize']));
        const _0x3f94cb = Math['min'](_0x3be278['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x44f6ae + _0x3be278['CAMERA']['width']) / _0x3be278['MAP']['chunkSize']));
        const _0x4f05ed = Math['max'](0x0, Math['floor'](_0x334050 / _0x3be278['MAP']['chunkSize']));
        const _0x1790a5 = Math['min'](_0x3be278['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x334050 + _0x3be278['CAMERA']['height']) / _0x3be278['MAP']['chunkSize']));
        for (let _0x239a43 = _0x4f05ed; _0x239a43 <= _0x1790a5; _0x239a43++)
            for (let _0x3e20b8 = _0x285472; _0x3e20b8 <= _0x3f94cb; _0x3e20b8++) {
                const _0x4817d5 = _0x3e20b8 * _0x3be278['MAP']['chunkSize'] - _0x44f6ae;
                const _0x52d715 = _0x239a43 * _0x3be278['MAP']['chunkSize'] - _0x334050;
                _0x1d6afb['drawImage'](_0x3be278['MAP']['bgChunks'][_0x239a43][_0x3e20b8], _0x4817d5, _0x52d715, _0x3be278['MAP']['chunkSize'] + 0x1, _0x3be278['MAP']['chunkSize'] + 0x1);
            }
        const _0x1b5e6a = _0x365ff4('assets/blood\x20splatter.png');
        if (_0x3e0802 && _0x3e0802['length'] > 0x0) {
            for (const _0x2c9f5b of _0x3e0802) {
                const _0x4ef6b8 = _0x2c9f5b['x'] - _0x44f6ae;
                const _0x186c6c = _0x2c9f5b['y'] - _0x334050;
                if (_0x1b5e6a['complete'] && _0x1b5e6a['naturalWidth'] > 0x0) {
                    _0x1d6afb['drawImage'](_0x1b5e6a, _0x4ef6b8 - 0x20, _0x186c6c - 0x20, 0x40, 0x40);
                } else {
                    _0x1d6afb['fillStyle'] = 'rgba(160,\x200,\x200,\x200.75)';
                    _0x1d6afb['beginPath']();
                    _0x1d6afb['arc'](_0x4ef6b8, _0x186c6c, 0x16, 0x0, Math['PI'] * 0x2);
                    _0x1d6afb['fill']();
                }
            }
        }
        const _0x37ca85 = _0x365ff4('assets/blood.png');
        if (_0x324ad4 && _0x324ad4['length'] > 0x0) {
            for (const _0x4e7f51 of _0x324ad4) {
                const _0x3822ae = _0x4e7f51['x'] - _0x44f6ae;
                const _0x253099 = _0x4e7f51['y'] - _0x334050;
                if (_0x37ca85['complete'] && _0x37ca85['naturalWidth'] > 0x0) {
                    _0x1d6afb['drawImage'](_0x37ca85, _0x3822ae - 0xc, _0x253099 - 0xc, 0x18, 0x18);
                } else {
                    _0x1d6afb['fillStyle'] = 'rgba(180,\x200,\x200,\x200.8)';
                    _0x1d6afb['beginPath']();
                    _0x1d6afb['arc'](_0x3822ae, _0x253099, 0x5, 0x0, Math['PI'] * 0x2);
                    _0x1d6afb['fill']();
                }
            }
        }
        if (_0x10fa61['complete'] && _0x10fa61['naturalWidth'] > 0x0) {
            const _0x1c5455 = _0x3be278['MAP']['tileSize'];
            const _0xcbfda5 = _0x1c5455 * 0xa;
            const _0x3b80f0 = _0x3be278['MAP']['columns'] / 0x2 * _0x1c5455 - _0xcbfda5 / 0x2 - _0x44f6ae;
            const _0x5374a8 = _0x3be278['MAP']['rows'] / 0x2 * _0x1c5455 - _0xcbfda5 / 0x2 - _0x334050;
            _0x1d6afb['imageSmoothingEnabled'] = ![];
            _0x1d6afb['drawImage'](_0x10fa61, _0x3b80f0, _0x5374a8, _0xcbfda5, _0xcbfda5);
        }
        if (_0x43c764['complete'] && _0x43c764['naturalWidth'] > 0x0) {
            _0x3be278['ENTITIES']['forEach'](_0x341a8f => {
                if (_0x341a8f['type'] !== 'table')
                    return;
                _0x1d6afb['save']();
                _0x1d6afb['imageSmoothingEnabled'] = ![];
                const _0x546edf = _0x43c764['naturalWidth'] >= _0x43c764['naturalHeight'];
                const _0x2aaac1 = _0x341a8f['w'] >= _0x341a8f['h'];
                if (_0x546edf === _0x2aaac1) {
                    _0x1d6afb['drawImage'](_0x43c764, _0x341a8f['x'] - _0x44f6ae, _0x341a8f['y'] - _0x334050, _0x341a8f['w'], _0x341a8f['h']);
                } else {
                    _0x1d6afb['translate'](_0x341a8f['x'] - _0x44f6ae + _0x341a8f['w'] / 0x2, _0x341a8f['y'] - _0x334050 + _0x341a8f['h'] / 0x2);
                    _0x1d6afb['rotate'](Math['PI'] / 0x2);
                    _0x1d6afb['drawImage'](_0x43c764, -_0x341a8f['h'] / 0x2, -_0x341a8f['w'] / 0x2, _0x341a8f['h'], _0x341a8f['w']);
                }
                _0x1d6afb['restore']();
            });
        } else {
            _0x3be278['ENTITIES']['forEach'](_0x2b1e7d => {
                if (_0x2b1e7d['type'] !== 'table')
                    return;
                _0x1d6afb['save']();
                _0x1d6afb['fillStyle'] = '#6b4423';
                _0x1d6afb['fillRect'](_0x2b1e7d['x'] - _0x44f6ae, _0x2b1e7d['y'] - _0x334050, _0x2b1e7d['w'], _0x2b1e7d['h']);
                _0x1d6afb['strokeStyle'] = '#422810';
                _0x1d6afb['lineWidth'] = 0x3;
                _0x1d6afb['strokeRect'](_0x2b1e7d['x'] - _0x44f6ae + 0x1, _0x2b1e7d['y'] - _0x334050 + 0x1, _0x2b1e7d['w'] - 0x2, _0x2b1e7d['h'] - 0x2);
                _0x1d6afb['fillStyle'] = '#82532a';
                _0x1d6afb['fillRect'](_0x2b1e7d['x'] - _0x44f6ae + 0x4, _0x2b1e7d['y'] - _0x334050 + 0x4, _0x2b1e7d['w'] - 0x8, _0x2b1e7d['h'] - 0x8);
                _0x1d6afb['restore']();
            });
        }
        if (_0x35a566) {
            if (_0x3be278['MAP']['wallChunks'] && _0x3be278['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x15c249 = _0x4f05ed; _0x15c249 <= _0x1790a5; _0x15c249++) {
                    for (let _0x506ece = _0x285472; _0x506ece <= _0x3f94cb; _0x506ece++) {
                        if (!_0x3be278['MAP']['wallChunks'][_0x15c249] || !_0x3be278['MAP']['wallChunks'][_0x15c249][_0x506ece])
                            continue;
                        const _0x2c5adc = _0x506ece * _0x3be278['MAP']['chunkSize'] - _0x44f6ae;
                        const _0x4f3ca8 = _0x15c249 * _0x3be278['MAP']['chunkSize'] - _0x334050;
                        _0x1d6afb['drawImage'](_0x3be278['MAP']['wallChunks'][_0x15c249][_0x506ece], _0x2c5adc, _0x4f3ca8, _0x3be278['MAP']['chunkSize'] + 0x1, _0x3be278['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x10dc80 = _0x4f05ed; _0x10dc80 <= _0x1790a5; _0x10dc80++) {
                for (let _0x25c407 = _0x285472; _0x25c407 <= _0x3f94cb; _0x25c407++) {
                    const _0x344943 = _0x25c407 * _0x3be278['MAP']['chunkSize'] - _0x44f6ae;
                    const _0x128031 = _0x10dc80 * _0x3be278['MAP']['chunkSize'] - _0x334050;
                    _0x1d6afb['drawImage'](_0x3be278['MAP']['fgChunks'][_0x10dc80][_0x25c407], _0x344943, _0x128031, _0x3be278['MAP']['chunkSize'] + 0x1, _0x3be278['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x48ffd5 = _0x3be278['GAME_STATE'] === 'NIGHT' && (_0xec0cbc === 'Skinwalker' || _0xec0cbc === 'Blackmailer') && !_0x3d0db6['isDead'];
        const _0x19c55d = _0x3d0db6['x'] - _0x44f6ae + _0x3d0db6['width'] / 0x2;
        const _0x514616 = _0x3d0db6['y'] - _0x334050 + _0x3d0db6['height'] / 0x2;
        const _0x42ae9b = _0x3d0db6['width'] * _0x3d0db6['scale'] * 1.3;
        const _0x2a334e = _0x3d0db6['height'] * _0x3d0db6['scale'] * 1.3;
        const _0x5406db = _0x365ff4('assets/arrow.png');
        const _0x522228 = _0x365ff4('assets/tape.png');
        for (const _0x16e21f in _0x45faf6) {
            const _0xf7bedf = _0x45faf6[_0x16e21f];
            if (_0xf7bedf['isDead'])
                continue;
            const _0xff5571 = parseInt(_0x16e21f);
            const _0x154e64 = (_0xf7bedf['renderX'] ?? _0xf7bedf['x']) - _0x44f6ae + _0xf7bedf['width'] / 0x2;
            const _0x11eb73 = (_0xf7bedf['renderY'] ?? _0xf7bedf['y']) - _0x334050 + _0xf7bedf['height'] / 0x2;
            const _0x24d568 = Math['min'](0x2, Math['max'](0.3, _0xf7bedf['scale'] || 0x1));
            const _0x2f81f5 = _0xf7bedf['width'] * _0x24d568 * 1.3;
            const _0x4e8dc9 = _0xf7bedf['height'] * _0x24d568 * 1.3;
            _0x1d6afb['save']();
            try {
                _0x1d6afb['translate'](_0x154e64, _0x11eb73);
                _0x1d6afb['rotate'](_0xf7bedf['renderAngle'] ?? 0x0);
                if (_0xf7bedf['isDark'])
                    _0x1d6afb['filter'] = 'brightness(0)';
                _0xa393e(_0x1d6afb, _0xf7bedf['body'], _0xf7bedf['eyes'], _0x2f81f5, _0x4e8dc9);
                if (_0x117a9c['has'](_0xff5571) && _0x3fc96d['complete'] && _0x3fc96d['naturalWidth'] > 0x0) {
                    _0x1d6afb['drawImage'](_0x3fc96d, -_0x2f81f5 / 0x2, -_0x4e8dc9 / 0x2, _0x2f81f5, _0x4e8dc9);
                }
                if (_0xf7bedf['hasArrow'] && _0x3be278['GAME_STATE'] === 'NIGHT' && _0x5406db['complete'] && _0x5406db['naturalWidth'] > 0x0) {
                    _0x1d6afb['drawImage'](_0x5406db, -_0x2f81f5 / 0x2, -_0x4e8dc9 / 0x2, _0x2f81f5, _0x4e8dc9);
                }
                if ((_0xf7bedf['isBlackmailed'] || _0x2ea5b5['has'](_0xff5571)) && _0x522228['complete'] && _0x522228['naturalWidth'] > 0x0) {
                    _0x1d6afb['drawImage'](_0x522228, -_0x2f81f5 / 0x2, -_0x4e8dc9 / 0x2, _0x2f81f5, _0x4e8dc9);
                }
                if (_0xf7bedf['isDark'])
                    _0x1d6afb['filter'] = 'none';
            } finally {
                _0x1d6afb['restore']();
            }
            if (!_0x190f37((_0xf7bedf['renderX'] ?? _0xf7bedf['x']) + _0xf7bedf['width'] / 0x2, (_0xf7bedf['renderY'] ?? _0xf7bedf['y']) + _0xf7bedf['height'] / 0x2)) {
                _0x1d6afb['textAlign'] = 'center';
                _0x1d6afb['lineJoin'] = 'round';
                _0x1d6afb['lineWidth'] = 0x3;
                _0x1d6afb['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1d6afb['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x13a367 = '#ffffff';
                if (_0xf7bedf['isBlackmailed'] || _0x2ea5b5['has'](_0xff5571)) {
                    _0x13a367 = '#ff4444';
                } else if (_0x117a9c['has'](_0xff5571)) {
                    _0x13a367 = '#cc88ff';
                }
                _0x1d6afb['fillStyle'] = _0x13a367;
                const _0x3fbe3e = _0xf7bedf['isDark'] ? '???' : _0xf7bedf['name'] + (_0xf7bedf['isOwner'] ? '\x20[🗝️]' : '');
                _0x1d6afb['strokeText'](_0x3fbe3e, _0x154e64, _0x11eb73 - _0x4e8dc9 / 0x2 - 0x10);
                _0x1d6afb['fillText'](_0x3fbe3e, _0x154e64, _0x11eb73 - _0x4e8dc9 / 0x2 - 0x10);
            }
        }
        if (!_0x3d0db6['isDead']) {
            _0x1d6afb['save']();
            try {
                _0x1d6afb['translate'](_0x19c55d, _0x514616);
                _0x1d6afb['rotate'](_0x3d0db6['angle']);
                if (_0x48ffd5)
                    _0x1d6afb['filter'] = 'brightness(0)';
                _0xa393e(_0x1d6afb, _0x3e889d, _0x3a1db0, _0x42ae9b, _0x2a334e);
                if (_0x117a9c['has'](_0x1ac5fb) && _0x3fc96d['complete'] && _0x3fc96d['naturalWidth'] > 0x0) {
                    _0x1d6afb['drawImage'](_0x3fc96d, -_0x42ae9b / 0x2, -_0x2a334e / 0x2, _0x42ae9b, _0x2a334e);
                }
                if (_0x3d0db6['hasArrow'] && _0x3be278['GAME_STATE'] === 'NIGHT' && _0x5406db['complete'] && _0x5406db['naturalWidth'] > 0x0) {
                    _0x1d6afb['drawImage'](_0x5406db, -_0x42ae9b / 0x2, -_0x2a334e / 0x2, _0x42ae9b, _0x2a334e);
                }
                if (_0x2ea5b5['has'](_0x1ac5fb) && _0x522228['complete'] && _0x522228['naturalWidth'] > 0x0) {
                    _0x1d6afb['drawImage'](_0x522228, -_0x42ae9b / 0x2, -_0x2a334e / 0x2, _0x42ae9b, _0x2a334e);
                }
                if (_0x48ffd5)
                    _0x1d6afb['filter'] = 'none';
            } finally {
                _0x1d6afb['restore']();
            }
            if (!_0x190f37(_0x3d0db6['x'] + _0x3d0db6['width'] / 0x2, _0x3d0db6['y'] + _0x3d0db6['height'] / 0x2)) {
                _0x1d6afb['textAlign'] = 'center';
                _0x1d6afb['lineJoin'] = 'round';
                _0x1d6afb['lineWidth'] = 0x3;
                _0x1d6afb['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1d6afb['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x5600b3 = '#ffffff';
                if (_0x2ea5b5['has'](_0x1ac5fb)) {
                    _0x5600b3 = '#ff4444';
                } else if (_0x117a9c['has'](_0x1ac5fb)) {
                    _0x5600b3 = '#cc88ff';
                }
                _0x1d6afb['fillStyle'] = _0x5600b3;
                const _0x7d0b85 = _0x48ffd5 ? '???' : _0x366823 + (_0x23ed22 ? '\x20[🗝️]' : '');
                _0x1d6afb['strokeText'](_0x7d0b85, _0x19c55d, _0x514616 - _0x2a334e / 0x2 - 0x10);
                _0x1d6afb['fillText'](_0x7d0b85, _0x19c55d, _0x514616 - _0x2a334e / 0x2 - 0x10);
            }
        }
        if (_0x3be278['MAP']['wallChunks'] && _0x3be278['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x223d67 = _0x4f05ed; _0x223d67 <= _0x1790a5; _0x223d67++)
                for (let _0x10de13 = _0x285472; _0x10de13 <= _0x3f94cb; _0x10de13++) {
                    if (!_0x3be278['MAP']['wallChunks'][_0x223d67] || !_0x3be278['MAP']['wallChunks'][_0x223d67][_0x10de13])
                        continue;
                    const _0xc7c54d = _0x10de13 * _0x3be278['MAP']['chunkSize'] - _0x44f6ae;
                    const _0x230e29 = _0x223d67 * _0x3be278['MAP']['chunkSize'] - _0x334050;
                    _0x1d6afb['drawImage'](_0x3be278['MAP']['wallChunks'][_0x223d67][_0x10de13], _0xc7c54d, _0x230e29, _0x3be278['MAP']['chunkSize'] + 0x1, _0x3be278['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x96afb6 of _0x3be278['ENTITIES']) {
            if (_0x96afb6['type'] !== 'npc')
                continue;
            const _0x6d5236 = _0x96afb6['x'] - _0x44f6ae + _0x96afb6['w'] / 0x2;
            const _0x297de2 = _0x96afb6['y'] - _0x334050 + _0x96afb6['h'] / 0x2;
            const _0x52fe93 = _0x96afb6['w'];
            const _0x11788f = _0x96afb6['h'];
            _0x1d6afb['save']();
            _0x1d6afb['translate'](_0x6d5236, _0x297de2);
            _0x1d6afb['rotate'](_0x96afb6['angle'] !== undefined ? _0x96afb6['angle'] : 0x0);
            _0xa393e(_0x1d6afb, _0x96afb6['body'] || 'yanito932.png', _0x96afb6['eyes'], _0x52fe93, _0x11788f);
            _0x1d6afb['restore']();
            _0x1d6afb['textAlign'] = 'center';
            _0x1d6afb['lineJoin'] = 'round';
            _0x1d6afb['lineWidth'] = 0x3;
            _0x1d6afb['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x1d6afb['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
            _0x1d6afb['fillStyle'] = '#aaaaaa';
            _0x1d6afb['strokeText'](_0x96afb6['name'] || 'NPC', _0x6d5236, _0x297de2 - _0x11788f / 0x2 - 0x10);
            _0x1d6afb['fillText'](_0x96afb6['name'] || 'NPC', _0x6d5236, _0x297de2 - _0x11788f / 0x2 - 0x10);
        }
        if (_0x3d0db6['isDead']) {
            for (const _0x2a8ae in _0x45faf6) {
                const _0x428c51 = _0x45faf6[_0x2a8ae];
                if (!_0x428c51['isDead'])
                    continue;
                const _0x15ee1b = (_0x428c51['renderX'] ?? _0x428c51['x']) - _0x44f6ae + _0x428c51['width'] / 0x2;
                const _0x33ec83 = (_0x428c51['renderY'] ?? _0x428c51['y']) - _0x334050 + _0x428c51['height'] / 0x2;
                const _0x4c3f77 = _0x428c51['width'] * (_0x428c51['scale'] || 0x1) * 1.3;
                const _0x731964 = _0x428c51['height'] * (_0x428c51['scale'] || 0x1) * 1.3;
                _0x1d6afb['save']();
                try {
                    _0x1d6afb['translate'](_0x15ee1b, _0x33ec83);
                    _0x1d6afb['rotate'](_0x428c51['renderAngle'] ?? 0x0);
                    _0x1d6afb['globalAlpha'] = 0.3;
                    _0xa393e(_0x1d6afb, _0x428c51['body'], _0x428c51['eyes'], _0x4c3f77, _0x731964);
                } finally {
                    _0x1d6afb['restore']();
                }
                if (!_0x190f37((_0x428c51['renderX'] ?? _0x428c51['x']) + _0x428c51['width'] / 0x2, (_0x428c51['renderY'] ?? _0x428c51['y']) + _0x428c51['height'] / 0x2)) {
                    _0x1d6afb['save']();
                    _0x1d6afb['globalAlpha'] = 0.3;
                    _0x1d6afb['textAlign'] = 'center';
                    _0x1d6afb['lineJoin'] = 'round';
                    _0x1d6afb['lineWidth'] = 0x3;
                    _0x1d6afb['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x1d6afb['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                    _0x1d6afb['fillStyle'] = '#ffffff';
                    const _0x3704fa = _0x428c51['name'] + (_0x428c51['isOwner'] ? '\x20[🗝️]' : '');
                    _0x1d6afb['strokeText'](_0x3704fa, _0x15ee1b, _0x33ec83 - _0x731964 / 0x2 - 0x10);
                    _0x1d6afb['fillText'](_0x3704fa, _0x15ee1b, _0x33ec83 - _0x731964 / 0x2 - 0x10);
                    _0x1d6afb['restore']();
                }
            }
            _0x1d6afb['save']();
            try {
                _0x1d6afb['translate'](_0x19c55d, _0x514616);
                _0x1d6afb['rotate'](_0x3d0db6['angle']);
                _0x1d6afb['globalAlpha'] = 0.3;
                _0xa393e(_0x1d6afb, _0x3e889d, _0x3a1db0, _0x42ae9b, _0x2a334e);
            } finally {
                _0x1d6afb['restore']();
            }
            if (!_0x190f37(_0x3d0db6['x'] + _0x3d0db6['width'] / 0x2, _0x3d0db6['y'] + _0x3d0db6['height'] / 0x2)) {
                _0x1d6afb['save']();
                _0x1d6afb['globalAlpha'] = 0.3;
                _0x1d6afb['textAlign'] = 'center';
                _0x1d6afb['lineJoin'] = 'round';
                _0x1d6afb['lineWidth'] = 0x3;
                _0x1d6afb['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x1d6afb['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                _0x1d6afb['fillStyle'] = '#ffffff';
                const _0x5db739 = _0x366823 + (_0x23ed22 ? '\x20[🗝️]' : '');
                _0x1d6afb['strokeText'](_0x5db739, _0x19c55d, _0x514616 - _0x2a334e / 0x2 - 0x10);
                _0x1d6afb['fillText'](_0x5db739, _0x19c55d, _0x514616 - _0x2a334e / 0x2 - 0x10);
                _0x1d6afb['restore']();
            }
        }
        for (let _0x33cded = _0x4f05ed; _0x33cded <= _0x1790a5; _0x33cded++)
            for (let _0x49294d = _0x285472; _0x49294d <= _0x3f94cb; _0x49294d++) {
                const _0x2e3b5c = _0x49294d * _0x3be278['MAP']['chunkSize'] - _0x44f6ae;
                const _0x2cddc5 = _0x33cded * _0x3be278['MAP']['chunkSize'] - _0x334050;
                _0x1d6afb['drawImage'](_0x3be278['MAP']['fgChunks'][_0x33cded][_0x49294d], _0x2e3b5c, _0x2cddc5, _0x3be278['MAP']['chunkSize'] + 0x1, _0x3be278['MAP']['chunkSize'] + 0x1);
            }
        if (_0x3be278['EDITOR']['enabled'] && _0x3be278['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x4ab3f4 = _0x3be278['INPUTS']['mouseX'] / _0x3be278['SYSTEM']['viewScale'] + _0x3be278['CAMERA']['x'];
            const _0xe76084 = _0x3be278['INPUTS']['mouseY'] / _0x3be278['SYSTEM']['viewScale'] + _0x3be278['CAMERA']['y'];
            const _0x3a4819 = Math['floor'](_0x4ab3f4 / _0x3be278['MAP']['tileSize']);
            const _0x84a9ec = Math['floor'](_0xe76084 / _0x3be278['MAP']['tileSize']);
            if (_0x3a4819 >= 0x0 && _0x3a4819 < _0x3be278['MAP']['columns'] && _0x84a9ec >= 0x0 && _0x84a9ec < _0x3be278['MAP']['rows']) {
                const _0x4c9de9 = _0x3a4819 * _0x3be278['MAP']['tileSize'] - _0x44f6ae;
                const _0x3d98cf = _0x84a9ec * _0x3be278['MAP']['tileSize'] - _0x334050;
                _0x1d6afb['save']();
                _0x1d6afb['globalAlpha'] = 0.5;
                if (_0x3be278['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x364298 = _0x3be278['EDITOR']['selectedTileGid'] - 0x1;
                    _0x1d6afb['drawImage'](_0x1e442d, _0x364298 % _0x3be278['MAP']['tilesetCols'] * _0x3be278['MAP']['tileSize'], Math['floor'](_0x364298 / _0x3be278['MAP']['tilesetCols']) * _0x3be278['MAP']['tileSize'], _0x3be278['MAP']['tileSize'], _0x3be278['MAP']['tileSize'], _0x4c9de9, _0x3d98cf, _0x3be278['MAP']['tileSize'], _0x3be278['MAP']['tileSize']);
                } else {
                    _0x1d6afb['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x1d6afb['fillRect'](_0x4c9de9, _0x3d98cf, _0x3be278['MAP']['tileSize'], _0x3be278['MAP']['tileSize']);
                }
                _0x1d6afb['restore']();
            }
        }
        _0x4e3bbe(_0x1d6afb, _0x44f6ae, _0x334050);
        if (_0x86edc9 > 0x0) {
            _0x1d6afb['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x86edc9 + ')';
            _0x1d6afb['fillRect'](0x0, 0x0, _0x3be278['CAMERA']['width'], _0x3be278['CAMERA']['height']);
        }
        for (const _0x2a0c69 in _0x45faf6) {
            const _0x258e92 = _0x45faf6[_0x2a0c69];
            if (_0x258e92['isDead'] && !_0x3d0db6['isDead'])
                continue;
            const _0x1260b2 = (_0x258e92['renderX'] ?? _0x258e92['x']) - _0x44f6ae + _0x258e92['width'] / 0x2;
            const _0x4b3fa7 = (_0x258e92['renderY'] ?? _0x258e92['y']) - _0x334050 + _0x258e92['height'] / 0x2;
            _0x2c8746(_0x1d6afb, _0x258e92['chats'], _0x1260b2, _0x4b3fa7 - _0x258e92['height'] / 0x2 - 0x20);
        }
        _0x2c8746(_0x1d6afb, _0x3d0db6['chats'], _0x19c55d, _0x514616 - _0x3d0db6['height'] / 0x2 - 0x20);
        if (_0xbd980f > 0x0) {
            _0x1d6afb['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0xbd980f + ')';
            _0x1d6afb['fillRect'](0x0, 0x0, _0x3be278['CAMERA']['width'], _0x3be278['CAMERA']['height']);
        }
    } finally {
        _0x1d6afb['restore']();
    }
}
function _0x3f1d79(_0x826b6b) {
    if (!_0x3be278['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x3f1d79);
    let _0x13c754 = (_0x826b6b - _0x3be278['SYSTEM']['lastTime']) / 0x3e8;
    _0x3be278['SYSTEM']['lastTime'] = _0x826b6b;
    if (_0x13c754 > 0.1)
        _0x13c754 = 0.1;
    if (_0x13c754 < 0x0 || isNaN(_0x13c754))
        _0x13c754 = 0.016;
    if (_0x35a566) {
        _0x18617f(_0x13c754);
        _0x44f2c2();
        return;
    }
    if (!_0x1ac5fb)
        return;
    _0x2b0e44(_0x13c754);
    _0x573cc2['tick'](_0x826b6b);
    _0x44f2c2();
}
function _0x3b30c8() {
    if (_0x1e442d['complete'] && _0x1e442d['naturalWidth'] > 0x0) {
        _0x3be278['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x4b8651 = Math['ceil'](_0x3be278['MAP']['columns'] * _0x3be278['MAP']['tileSize'] / _0x3be278['MAP']['chunkSize']);
    const _0xef2794 = Math['ceil'](_0x3be278['MAP']['rows'] * _0x3be278['MAP']['tileSize'] / _0x3be278['MAP']['chunkSize']);
    _0x3be278['MAP']['bgChunks'] = [];
    _0x3be278['MAP']['fgChunks'] = [];
    _0x3be278['MAP']['wallChunks'] = [];
    for (let _0x3acb3e = 0x0; _0x3acb3e < _0xef2794; _0x3acb3e++) {
        _0x3be278['MAP']['bgChunks'][_0x3acb3e] = [];
        _0x3be278['MAP']['fgChunks'][_0x3acb3e] = [];
        _0x3be278['MAP']['wallChunks'][_0x3acb3e] = [];
        for (let _0x5c7096 = 0x0; _0x5c7096 < _0x4b8651; _0x5c7096++) {
            const _0x31e891 = document['createElement']('canvas');
            _0x31e891['width'] = _0x31e891['height'] = _0x3be278['MAP']['chunkSize'];
            const _0x4583cf = document['createElement']('canvas');
            _0x4583cf['width'] = _0x4583cf['height'] = _0x3be278['MAP']['chunkSize'];
            const _0x64a80d = document['createElement']('canvas');
            _0x64a80d['width'] = _0x64a80d['height'] = _0x3be278['MAP']['chunkSize'];
            _0x3be278['MAP']['bgChunks'][_0x3acb3e][_0x5c7096] = _0x31e891;
            _0x3be278['MAP']['fgChunks'][_0x3acb3e][_0x5c7096] = _0x4583cf;
            _0x3be278['MAP']['wallChunks'][_0x3acb3e][_0x5c7096] = _0x64a80d;
            _0x449b18(_0x5c7096, _0x3acb3e);
        }
    }
}
function _0x449b18(_0x279de4, _0xd7f940) {
    const _0x3a976e = _0x3be278['MAP']['bgChunks'][_0xd7f940][_0x279de4]['getContext']('2d', { 'alpha': !![] });
    const _0xf6347e = _0x3be278['MAP']['fgChunks'][_0xd7f940][_0x279de4]['getContext']('2d', { 'alpha': !![] });
    const _0x51d11c = _0x3be278['MAP']['wallChunks'][_0xd7f940] && _0x3be278['MAP']['wallChunks'][_0xd7f940][_0x279de4] ? _0x3be278['MAP']['wallChunks'][_0xd7f940][_0x279de4]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x3a976e['imageSmoothingEnabled'] = _0xf6347e['imageSmoothingEnabled'] = ![];
    if (_0x51d11c)
        _0x51d11c['imageSmoothingEnabled'] = ![];
    _0x3a976e['clearRect'](0x0, 0x0, _0x3be278['MAP']['chunkSize'], _0x3be278['MAP']['chunkSize']);
    _0xf6347e['clearRect'](0x0, 0x0, _0x3be278['MAP']['chunkSize'], _0x3be278['MAP']['chunkSize']);
    if (_0x51d11c)
        _0x51d11c['clearRect'](0x0, 0x0, _0x3be278['MAP']['chunkSize'], _0x3be278['MAP']['chunkSize']);
    const _0x10cc60 = Math['floor'](_0x279de4 * _0x3be278['MAP']['chunkSize'] / _0x3be278['MAP']['tileSize']);
    const _0x403e7a = Math['ceil']((_0x279de4 + 0x1) * _0x3be278['MAP']['chunkSize'] / _0x3be278['MAP']['tileSize']);
    const _0x476bf8 = Math['floor'](_0xd7f940 * _0x3be278['MAP']['chunkSize'] / _0x3be278['MAP']['tileSize']);
    const _0x461945 = Math['ceil']((_0xd7f940 + 0x1) * _0x3be278['MAP']['chunkSize'] / _0x3be278['MAP']['tileSize']);
    const _0x679153 = 0.5;
    const _0x8f781 = _0x3be278['MAP']['tileSize'] - _0x679153 * 0x2;
    _0x3be278['MAP']['layers']['forEach'](_0xd0e23c => {
        const _0x1c2227 = _0xd0e23c['name'] === 'walls';
        const _0x5af9b3 = _0xd0e23c['name'] === 'trees' ? _0xf6347e : _0x1c2227 ? _0x51d11c || _0x3a976e : _0x3a976e;
        for (let _0x23139f = Math['max'](0x0, _0x476bf8); _0x23139f < Math['min'](_0x3be278['MAP']['rows'], _0x461945); _0x23139f++) {
            for (let _0x328c66 = Math['max'](0x0, _0x10cc60); _0x328c66 < Math['min'](_0x3be278['MAP']['columns'], _0x403e7a); _0x328c66++) {
                let _0xbba1d8 = _0xd0e23c['data'][_0x23139f * _0x3be278['MAP']['columns'] + _0x328c66];
                if (_0xd0e23c['name'] === 'floor2' && _0x3be278['MAP']['doors'] && _0x3be278['MAP']['doors'][_0x23139f * _0x3be278['MAP']['columns'] + _0x328c66]) {
                    _0xbba1d8 = 0x2;
                }
                if (_0xbba1d8 > 0x0) {
                    const _0x347eb8 = _0xbba1d8 - 0x1;
                    const _0x2189d8 = _0x347eb8 % _0x3be278['MAP']['tilesetCols'] * _0x3be278['MAP']['tileSize'] + _0x679153;
                    const _0x4f78cd = Math['floor'](_0x347eb8 / _0x3be278['MAP']['tilesetCols']) * _0x3be278['MAP']['tileSize'] + _0x679153;
                    const _0x2c02f0 = _0x328c66 * _0x3be278['MAP']['tileSize'] - _0x279de4 * _0x3be278['MAP']['chunkSize'];
                    const _0x353d88 = _0x23139f * _0x3be278['MAP']['tileSize'] - _0xd7f940 * _0x3be278['MAP']['chunkSize'];
                    if (_0xbba1d8 === 0x4) {
                        const _0x1d9b78 = 0x1;
                        const _0x4a4326 = _0x1d9b78 % _0x3be278['MAP']['tilesetCols'] * _0x3be278['MAP']['tileSize'] + _0x679153;
                        const _0xfff060 = Math['floor'](_0x1d9b78 / _0x3be278['MAP']['tilesetCols']) * _0x3be278['MAP']['tileSize'] + _0x679153;
                        _0x3a976e['drawImage'](_0x1e442d, _0x4a4326, _0xfff060, _0x8f781, _0x8f781, _0x2c02f0, _0x353d88, _0x3be278['MAP']['tileSize'], _0x3be278['MAP']['tileSize']);
                        let _0x3eef86 = _0x3be278['MAP']['doors'] ? _0x3be278['MAP']['doors'][_0x23139f * _0x3be278['MAP']['columns'] + _0x328c66] : null;
                        if (!_0x3eef86) {
                            const _0x2d5d15 = _0x3be278['MAP']['layers']['find'](_0x23808e => _0x23808e['name'] === 'walls');
                            const _0x296f83 = _0x23139f > 0x0 && _0x2d5d15 && _0x2d5d15['data'][(_0x23139f - 0x1) * _0x3be278['MAP']['columns'] + _0x328c66] > 0x0;
                            const _0x31e8d7 = _0x23139f < _0x3be278['MAP']['rows'] - 0x1 && _0x2d5d15 && _0x2d5d15['data'][(_0x23139f + 0x1) * _0x3be278['MAP']['columns'] + _0x328c66] > 0x0;
                            const _0x584adb = _0x328c66 > 0x0 && _0x2d5d15 && _0x2d5d15['data'][_0x23139f * _0x3be278['MAP']['columns'] + _0x328c66 - 0x1] > 0x0;
                            const _0x5463e7 = _0x328c66 < _0x3be278['MAP']['columns'] - 0x1 && _0x2d5d15 && _0x2d5d15['data'][_0x23139f * _0x3be278['MAP']['columns'] + _0x328c66 + 0x1] > 0x0;
                            if (_0x584adb && _0x5463e7)
                                _0x3eef86 = _0x23139f < _0x3be278['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x296f83 && _0x31e8d7)
                                _0x3eef86 = _0x328c66 < _0x3be278['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x341f4f = 0x0;
                        if (_0x3eef86 === 'bottom')
                            _0x341f4f = Math['PI'] / 0x2;
                        else if (_0x3eef86 === 'left')
                            _0x341f4f = Math['PI'];
                        else if (_0x3eef86 === 'top')
                            _0x341f4f = -Math['PI'] / 0x2;
                        else if (_0x3eef86 === 'right')
                            _0x341f4f = 0x0;
                        if (_0x341f4f !== 0x0) {
                            _0x5af9b3['save']();
                            _0x5af9b3['translate'](_0x2c02f0 + _0x3be278['MAP']['tileSize'] / 0x2, _0x353d88 + _0x3be278['MAP']['tileSize'] / 0x2);
                            _0x5af9b3['rotate'](_0x341f4f);
                            _0x5af9b3['drawImage'](_0x1e442d, _0x2189d8, _0x4f78cd, _0x8f781, _0x8f781, -_0x3be278['MAP']['tileSize'] / 0x2, -_0x3be278['MAP']['tileSize'] / 0x2, _0x3be278['MAP']['tileSize'], _0x3be278['MAP']['tileSize']);
                            _0x5af9b3['restore']();
                        } else {
                            _0x5af9b3['drawImage'](_0x1e442d, _0x2189d8, _0x4f78cd, _0x8f781, _0x8f781, _0x2c02f0, _0x353d88, _0x3be278['MAP']['tileSize'], _0x3be278['MAP']['tileSize']);
                        }
                    } else {
                        _0x5af9b3['drawImage'](_0x1e442d, _0x2189d8, _0x4f78cd, _0x8f781, _0x8f781, _0x2c02f0, _0x353d88, _0x3be278['MAP']['tileSize'], _0x3be278['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x1e1ee4() {
    _0x1e442d['crossOrigin'] = 'Anonymous';
    _0x1e442d['onload'] = () => {
        _0x3be278['MAP']['tilesetCols'] = 0x3;
        if (_0x3be278['MAP']['columns'] > 0x0 && _0x3be278['MAP']['layers'] && _0x3be278['MAP']['layers']['length'] > 0x0) {
            _0x3b30c8();
        }
        _0x7e3554();
    };
    _0x1e442d['onerror'] = () => {
        _0x3be278['MAP']['tilesetCols'] = 0x1;
        _0x7e3554();
    };
    _0x1e442d['src'] = 'assets/tilesheet.png';
    _0x10fa61['crossOrigin'] = 'Anonymous';
    _0x10fa61['onload'] = _0x7e3554;
    _0x10fa61['onerror'] = () => {
        _0x7e3554();
    };
    _0x10fa61['src'] = 'assets/center.png';
    _0x43c764['crossOrigin'] = 'Anonymous';
    _0x43c764['onload'] = _0x7e3554;
    _0x43c764['onerror'] = () => {
        _0x7e3554();
    };
    _0x43c764['src'] = 'assets/table.png';
}
function _0x7e3554() {
    _0x3be278['SYSTEM']['assetsLoaded']++;
    if (_0x3be278['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x3be278['MAP']['columns'] > 0x0 && _0x3be278['MAP']['layers'] && _0x3be278['MAP']['layers']['length'] > 0x0) {
            _0x3b30c8();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x4dad4a();
    }
}
function _0x720aa2(_0x510f58, _0x24b3dc) {
    if (!_0x23ed22 || !_0x44cb30)
        return;
    const _0x766f03 = _0x510f58 / _0x3be278['SYSTEM']['viewScale'] + _0x3be278['CAMERA']['x'];
    const _0x5898c1 = _0x24b3dc / _0x3be278['SYSTEM']['viewScale'] + _0x3be278['CAMERA']['y'];
    const _0x526bbc = Math['floor'](_0x766f03 / _0x3be278['MAP']['tileSize']);
    const _0x1eef91 = Math['floor'](_0x5898c1 / _0x3be278['MAP']['tileSize']);
    if (_0x526bbc >= 0x0 && _0x526bbc < _0x3be278['MAP']['columns'] && _0x1eef91 >= 0x0 && _0x1eef91 < _0x3be278['MAP']['rows'])
        _0x44cb30['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x3be278['EDITOR']['selectedLayer'],
            'col': _0x526bbc,
            'row': _0x1eef91,
            'gid': _0x3be278['EDITOR']['selectedTileGid']
        }));
}
function _0x48611b() {
    const _0x54bbb9 = document['getElementById']('palette');
    if (!_0x54bbb9 || _0x54bbb9['children']['length'] > 0x0)
        return;
    const _0x5c4629 = 0x40;
    const _0x4d2dcd = _0x1e442d;
    const _0x57caaa = document['createElement']('div');
    _0x57caaa['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x142b73 = document['createElement']('canvas');
    _0x142b73['width'] = 0xc0;
    _0x142b73['height'] = 0xa0;
    _0x142b73['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x57caaa['appendChild'](_0x142b73);
    const _0x1b85d6 = document['createElement']('div');
    _0x1b85d6['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x57caaa['appendChild'](_0x1b85d6);
    let _0x90e06b = 0x0, _0x5d7919 = 0x0;
    let _0x23aecf = ![], _0x4ff063 = 0x0, _0x438297 = 0x0, _0x427c78 = 0x0, _0x113450 = 0x0;
    function _0xd9f8d3() {
        const _0x41d7a8 = _0x142b73['getContext']('2d');
        _0x41d7a8['clearRect'](0x0, 0x0, _0x142b73['width'], _0x142b73['height']);
        _0x41d7a8['imageSmoothingEnabled'] = ![];
        if (_0x4d2dcd['complete'] && _0x4d2dcd['naturalWidth'] > 0x0) {
            _0x41d7a8['drawImage'](_0x4d2dcd, _0x90e06b, _0x5d7919, _0x142b73['width'], _0x142b73['height'], 0x0, 0x0, _0x142b73['width'], _0x142b73['height']);
        }
        _0x41d7a8['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x41d7a8['lineWidth'] = 0x1;
        const _0x5bff35 = Math['floor'](_0x90e06b / _0x5c4629);
        const _0x2a38fa = Math['floor'](_0x5d7919 / _0x5c4629);
        for (let _0x82a063 = _0x5bff35; _0x82a063 <= _0x5bff35 + Math['ceil'](_0x142b73['width'] / _0x5c4629) + 0x1; _0x82a063++) {
            const _0x148153 = _0x82a063 * _0x5c4629 - _0x90e06b;
            _0x41d7a8['beginPath']();
            _0x41d7a8['moveTo'](_0x148153, 0x0);
            _0x41d7a8['lineTo'](_0x148153, _0x142b73['height']);
            _0x41d7a8['stroke']();
        }
        for (let _0x5f1646 = _0x2a38fa; _0x5f1646 <= _0x2a38fa + Math['ceil'](_0x142b73['height'] / _0x5c4629) + 0x1; _0x5f1646++) {
            const _0x2a5de5 = _0x5f1646 * _0x5c4629 - _0x5d7919;
            _0x41d7a8['beginPath']();
            _0x41d7a8['moveTo'](0x0, _0x2a5de5);
            _0x41d7a8['lineTo'](_0x142b73['width'], _0x2a5de5);
            _0x41d7a8['stroke']();
        }
    }
    function _0x3a9ab8() {
        const _0x1f2297 = Math['max'](0x1, Math['ceil'](_0x4d2dcd['naturalWidth'] / _0x5c4629));
        const _0x14f52a = _0x3be278['EDITOR']['selectedTileGid'];
        if (_0x14f52a <= 0x0) {
            _0x1b85d6['style']['display'] = 'none';
            return;
        }
        const _0x100a0f = _0x14f52a - 0x1;
        const _0x4080d8 = _0x100a0f % _0x1f2297;
        const _0x1c1781 = Math['floor'](_0x100a0f / _0x1f2297);
        const _0xff4b19 = _0x4080d8 * _0x5c4629 - _0x90e06b;
        const _0x2421ac = _0x1c1781 * _0x5c4629 - _0x5d7919;
        _0x1b85d6['style']['display'] = 'block';
        _0x1b85d6['style']['left'] = _0xff4b19 + 'px';
        _0x1b85d6['style']['top'] = _0x2421ac + 'px';
    }
    _0x4d2dcd['onload'] = () => {
        _0xd9f8d3();
        _0x3a9ab8();
    };
    if (_0x4d2dcd['complete'] && _0x4d2dcd['naturalWidth'] > 0x0) {
        _0xd9f8d3();
        _0x3a9ab8();
    }
    _0x57caaa['addEventListener']('mousedown', _0x3db93b => {
        if (_0x3db93b['button'] === 0x0) {
            _0x23aecf = !![];
            _0x4ff063 = _0x3db93b['clientX'];
            _0x438297 = _0x3db93b['clientY'];
            _0x427c78 = _0x90e06b;
            _0x113450 = _0x5d7919;
            _0x57caaa['style']['cursor'] = 'grabbing';
            _0x3db93b['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x55d645 => {
        if (!_0x23aecf)
            return;
        const _0x4f6b2e = _0x4ff063 - _0x55d645['clientX'];
        const _0x8ff11b = _0x438297 - _0x55d645['clientY'];
        const _0x28fc18 = Math['max'](0x0, _0x4d2dcd['naturalWidth'] - _0x142b73['width']);
        const _0x58bc19 = Math['max'](0x0, _0x4d2dcd['naturalHeight'] - _0x142b73['height']);
        _0x90e06b = Math['max'](0x0, Math['min'](_0x28fc18, _0x427c78 + _0x4f6b2e));
        _0x5d7919 = Math['max'](0x0, Math['min'](_0x58bc19, _0x113450 + _0x8ff11b));
        _0xd9f8d3();
        _0x3a9ab8();
    });
    window['addEventListener']('mouseup', _0x5bdcb4 => {
        if (_0x23aecf) {
            _0x23aecf = ![];
            _0x57caaa['style']['cursor'] = 'grab';
        }
    });
    _0x57caaa['addEventListener']('click', _0x5ce528 => {
        const _0x1d9b2c = _0x57caaa['getBoundingClientRect']();
        const _0x369d61 = _0x5ce528['clientX'] - _0x1d9b2c['left'] + _0x90e06b;
        const _0x51a92b = _0x5ce528['clientY'] - _0x1d9b2c['top'] + _0x5d7919;
        const _0x4fd255 = Math['max'](0x1, Math['ceil'](_0x4d2dcd['naturalWidth'] / _0x5c4629));
        const _0x2f0376 = Math['floor'](_0x369d61 / _0x5c4629);
        const _0x4f92dd = Math['floor'](_0x51a92b / _0x5c4629);
        const _0x16c966 = _0x4f92dd * _0x4fd255 + _0x2f0376 + 0x1;
        _0x3be278['EDITOR']['selectedTileGid'] = _0x16c966;
        _0x3a9ab8();
    });
    _0x54bbb9['appendChild'](_0x57caaa);
    const _0x14c94f = document['createElement']('div');
    _0x14c94f['className'] = 'tile-btn\x20eraser-btn';
    _0x14c94f['title'] = 'Eraser\x20(gid\x200)';
    _0x14c94f['onclick'] = () => {
        _0x3be278['EDITOR']['selectedTileGid'] = 0x0;
        _0x1b85d6['style']['display'] = 'none';
    };
    _0x54bbb9['appendChild'](_0x14c94f);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x3be278['EDITOR']['enabled'] = !_0x3be278['EDITOR']['enabled'];
        const _0x3f1919 = document['getElementById']('editor-tools');
        if (_0x3be278['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x3f1919['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x3f1919['style']['display'] = 'none';
        }
    });
    const _0x4fad98 = document['getElementById']('start-game-btn');
    if (_0x4fad98) {
        _0x4fad98['addEventListener']('click', () => {
            if (_0x44cb30)
                _0x44cb30['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x12c4b1 = document['getElementById']('rolelist-toggle-btn');
    if (_0x12c4b1) {
        let _0x3b797d = 'subalignments';
        _0x12c4b1['addEventListener']('click', () => {
            if (_0x3b797d === 'subalignments')
                _0x3b797d = 'precise';
            else if (_0x3b797d === 'precise')
                _0x3b797d = 'off';
            else
                _0x3b797d = 'subalignments';
            _0x12c4b1['innerText'] = 'Role\x20List:\x20' + _0x3b797d['charAt'](0x0)['toUpperCase']() + _0x3b797d['slice'](0x1);
            if (_0x44cb30)
                _0x44cb30['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x3b797d
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x1827f0 => {
        if (_0x1827f0['id'] === 'editor-toggle-btn' || _0x1827f0['id'] === 'start-game-btn' || _0x1827f0['id'] === 'rolelist-toggle-btn')
            return;
        _0x1827f0['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x544177 => _0x544177['classList']['remove']('active'));
            _0x1827f0['classList']['add']('active');
            _0x3be278['EDITOR']['selectedLayer'] = _0x1827f0['dataset']['layer'];
        });
    });
}
function _0xcb9bf7(_0x1fc115) {
    if (_0x44cb30)
        _0x44cb30['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x1fc115
        }));
}
function _0xd3fec6(_0x57187c) {
    if (_0x44cb30)
        _0x44cb30['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x57187c
        }));
}
function _0x4b6066(_0x3298db, _0x19c223, _0x78e622, _0x44332a) {
    const _0x5899b1 = document['getElementById']('admin-panel');
    if (_0x5899b1)
        _0x5899b1['remove']();
    if (_0x5899b1 && _0x5899b1['dataset']['target'] === String(_0x3298db))
        return;
    const _0x41cc0c = document['createElement']('div');
    _0x41cc0c['id'] = 'admin-panel';
    _0x41cc0c['dataset']['target'] = String(_0x3298db);
    _0x41cc0c['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x477fb5 = document['createElement']('div');
    _0x477fb5['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x477fb5['textContent'] = _0x19c223;
    _0x41cc0c['appendChild'](_0x477fb5);
    const _0x2472ee = document['createElement']('button');
    _0x2472ee['textContent'] = 'Kick';
    _0x2472ee['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x2472ee['onmouseenter'] = () => _0x2472ee['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x2472ee['onmouseleave'] = () => _0x2472ee['style']['background'] = 'transparent';
    _0x2472ee['onclick'] = () => {
        _0xcb9bf7(_0x3298db);
        _0x41cc0c['remove']();
    };
    _0x41cc0c['appendChild'](_0x2472ee);
    const _0x482d1b = document['createElement']('button');
    _0x482d1b['textContent'] = 'Ban';
    _0x482d1b['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x482d1b['onmouseenter'] = () => _0x482d1b['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x482d1b['onmouseleave'] = () => _0x482d1b['style']['background'] = 'transparent';
    _0x482d1b['onclick'] = () => {
        _0xd3fec6(_0x3298db);
        _0x41cc0c['remove']();
    };
    _0x41cc0c['appendChild'](_0x482d1b);
    document['body']['appendChild'](_0x41cc0c);
    const _0x400bd5 = _0x41cc0c['offsetWidth'] || 0x91;
    const _0x1bd261 = _0x41cc0c['offsetHeight'] || 0x50;
    let _0xc1c9d8 = _0x78e622 - _0x400bd5;
    let _0x326033 = _0x44332a;
    if (_0xc1c9d8 < 0x4)
        _0xc1c9d8 = _0x78e622;
    if (_0x326033 + _0x1bd261 > window['innerHeight'] - 0x4)
        _0x326033 = window['innerHeight'] - _0x1bd261 - 0x4;
    _0x41cc0c['style']['left'] = _0xc1c9d8 + 'px';
    _0x41cc0c['style']['top'] = _0x326033 + 'px';
    const _0x29efa0 = _0x3b2696 => {
        if (!_0x41cc0c['contains'](_0x3b2696['target'])) {
            _0x41cc0c['remove']();
            document['removeEventListener']('mousedown', _0x29efa0);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x29efa0), 0x0);
}
let _0x294ebc = '';
function _0xab459f() {
    const _0x5a7d39 = document['getElementById']('leaderboard-list');
    if (!_0x5a7d39)
        return;
    let _0x4e4134 = _0x366823 + '|' + _0x23ed22 + '|' + _0x3d0db6['isDead'] + '|' + _0x117a9c['size'];
    for (const _0x5d8642 in _0x45faf6) {
        const _0x53c575 = _0x45faf6[_0x5d8642];
        _0x4e4134 += '|' + _0x5d8642 + ':' + _0x53c575['name'] + ':' + !!_0x53c575['isOwner'] + ':' + !!_0x53c575['isDead'] + ':' + _0x117a9c['has'](parseInt(_0x5d8642));
    }
    if (_0x4e4134 === _0x294ebc)
        return;
    _0x294ebc = _0x4e4134;
    _0x5a7d39['innerHTML'] = '';
    const _0x84e107 = document['createElement']('div');
    _0x84e107['className'] = 'leaderboard-entry';
    const _0x3014dd = document['createElement']('span');
    _0x3014dd['textContent'] = _0x366823 + (_0x23ed22 ? '\x20[🗝️]' : '');
    if (_0x117a9c['has'](_0x1ac5fb) && !_0x3d0db6['isDead']) {
        _0x3014dd['style']['color'] = '#cc88ff';
    }
    _0x84e107['appendChild'](_0x3014dd);
    _0x5a7d39['appendChild'](_0x84e107);
    for (const _0x3dceda in _0x45faf6) {
        const _0x36cef2 = document['createElement']('div');
        _0x36cef2['className'] = 'leaderboard-entry';
        const _0x41cf39 = document['createElement']('span');
        _0x41cf39['textContent'] = _0x45faf6[_0x3dceda]['name'] + (_0x45faf6[_0x3dceda]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x117a9c['has'](parseInt(_0x3dceda)) && !_0x45faf6[_0x3dceda]['isDead']) {
            _0x41cf39['style']['color'] = '#cc88ff';
        }
        _0x36cef2['appendChild'](_0x41cf39);
        if (_0x23ed22 && !_0x45faf6[_0x3dceda]['isOwner']) {
            const _0x419d90 = _0x45faf6[_0x3dceda]['id'];
            const _0x4e77a9 = _0x45faf6[_0x3dceda]['name'];
            _0x36cef2['style']['cursor'] = 'context-menu';
            _0x36cef2['addEventListener']('contextmenu', _0x1becda => {
                _0x1becda['preventDefault']();
                _0x1becda['stopPropagation']();
                _0x4b6066(_0x419d90, _0x4e77a9, _0x1becda['clientX'], _0x1becda['clientY']);
            });
        }
        _0x5a7d39['appendChild'](_0x36cef2);
    }
}
window['addEventListener']('resize', _0x4dad4a);
function _0x4dad4a() {
    _0x4ec94f['width'] = window['innerWidth'];
    _0x4ec94f['height'] = window['innerHeight'];
    _0x3be278['SYSTEM']['viewScale'] = Math['max'](_0x4ec94f['width'] / _0x1c9eb8, _0x4ec94f['height'] / _0x3d802);
    _0x3be278['CAMERA']['width'] = _0x4ec94f['width'] / _0x3be278['SYSTEM']['viewScale'];
    _0x3be278['CAMERA']['height'] = _0x4ec94f['height'] / _0x3be278['SYSTEM']['viewScale'];
    _0x1d6afb['imageSmoothingEnabled'] = ![];
}
function _0x5d9afb(_0x182871) {
    if (_0x182871['ctrlKey'] || _0x182871['metaKey']) {
        if (_0x182871['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x182871['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x182871['code'])) {
            _0x182871['preventDefault']();
            _0x182871['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x5d9afb, { 'passive': ![] });
window['addEventListener']('keydown', _0x5d9afb, { 'passive': ![] });
window['addEventListener']('keydown', _0x552f07 => {
    const _0x5455ee = _0x552f07['key']['toLowerCase']();
    if (_0x5455ee === 'tab') {
        _0x552f07['preventDefault']();
        const _0x4cca55 = document['getElementById']('will-ui');
        const _0x34a807 = document['getElementById']('will-input');
        if (_0x4cca55['style']['display'] === 'flex') {
            _0x4cca55['style']['display'] = 'none';
            if (_0x3be278['GAME_STATE'] !== 'NIGHT' && _0x44cb30)
                _0x44cb30['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x34a807['value']
                }));
            _0x34a807['blur']();
        } else {
            if (_0x3be278['GAME_STATE'] === 'NIGHT') {
                _0x354ff8('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x4cca55['style']['display'] = 'flex';
            _0x34a807['focus']();
            for (let _0x3c2db2 in _0x3be278['INPUTS']['keys'])
                _0x3be278['INPUTS']['keys'][_0x3c2db2] = ![];
        }
        return;
    }
    if (_0x552f07['key'] === 'Enter') {
        if (_0x35a566) {
            const _0x4d85b7 = document['getElementById']('play-btn');
            if (_0x4d85b7)
                _0x4d85b7['click']();
            return;
        }
        if (!_0x44cb30 || _0x44cb30['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x243517 = document['getElementById']('chat-ui');
        const _0x1cc7c1 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x1cc7c1) {
            const _0x178399 = _0x1cc7c1['value']['trim']();
            if (_0x178399['length'] > 0x0) {
                _0x44cb30['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x178399
                }));
            }
            _0x1cc7c1['value'] = '';
            _0x243517['style']['display'] = 'none';
            _0x1cc7c1['blur']();
        } else {
            _0x243517['style']['display'] = 'block';
            _0x1cc7c1['focus']();
            for (let _0x2ccb8f in _0x3be278['INPUTS']['keys'])
                _0x3be278['INPUTS']['keys'][_0x2ccb8f] = ![];
        }
        _0x552f07['preventDefault']();
        return;
    }
    if (_0x552f07['key'] === 'Escape') {
        const _0x39ed1e = document['getElementById']('role-index-modal');
        if (_0x39ed1e && _0x39ed1e['style']['display'] === 'flex') {
            _0x39ed1e['style']['display'] = 'none';
            return;
        }
        const _0x18ae45 = document['getElementById']('guide-ui');
        if (_0x18ae45 && _0x18ae45['style']['display'] === 'flex') {
            _0x18ae45['style']['display'] = 'none';
            return;
        }
        const _0x292728 = document['getElementById']('ability-ui');
        if (_0x292728 && _0x292728['style']['display'] === 'block') {
            _0x292728['style']['display'] = 'none';
            return;
        }
        const _0x21cab5 = document['getElementById']('settings-panel');
        if (_0x21cab5 && _0x21cab5['style']['display'] === 'block') {
            _0x21cab5['style']['display'] = 'none';
            return;
        }
        const _0x3da827 = document['getElementById']('mayor-confirm-dialog');
        if (_0x3da827 && _0x3da827['style']['display'] === 'flex') {
            _0x3da827['style']['display'] = 'none';
            return;
        }
        const _0xf0e816 = document['getElementById']('target-chooser-ui');
        if (_0xf0e816 && _0xf0e816['style']['display'] === 'flex') {
            _0xf0e816['style']['display'] = 'none';
            return;
        }
        const _0x4e0d9c = document['getElementById']('chat-ui');
        const _0x2b257d = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x2b257d) {
            _0x2b257d['value'] = '';
            _0x4e0d9c['style']['display'] = 'none';
            _0x2b257d['blur']();
            _0x552f07['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x3be278['INPUTS']['keys']['hasOwnProperty'](_0x5455ee))
            _0x3be278['INPUTS']['keys'][_0x5455ee] = !![];
        if (!_0x44cb30 || _0x44cb30['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x5455ee === 'h' && !_0x552f07['repeat']) {
            const _0x28b662 = document['getElementById']('guide-ui');
            if (_0x28b662) {
                _0x28b662['style']['display'] = _0x28b662['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x5455ee === 't' && !_0x552f07['repeat']) {
            if (_0x3d0db6['isDead'])
                return;
            if (_0xec0cbc === 'Mayor') {
                if (_0x117a9c['has'](_0x1ac5fb)) {
                    _0x354ff8('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x21e94e = document['getElementById']('mayor-confirm-dialog');
                if (_0x21e94e)
                    _0x21e94e['style']['display'] = 'flex';
                return;
            }
            if (_0x3be278['GAME_STATE'] === 'NIGHT') {
                if (!_0x3be278['NIGHT_ABILITY_OPEN']) {
                    _0x354ff8('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0xee7fad = document['getElementById']('ability-ui');
                if (_0xee7fad) {
                    if (_0xee7fad['style']['display'] === 'block') {
                        _0xee7fad['style']['display'] = 'none';
                    } else {
                        _0x1a12d2();
                        _0xee7fad['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x3be278['GAME_STATE'] === 'DAY_DISCUSS' || _0x3be278['GAME_STATE'] === 'DAY_VOTE') {
                _0x354ff8('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x5455ee === 'e' && !_0x3d0db6['isDead']) {
            const _0x2b0ca5 = Date['now']();
            if (!window['_lastDoorSend'] || _0x2b0ca5 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x2b0ca5;
                _0x44cb30['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x3e32eb => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0xd88b93 = _0x3e32eb['key']['toLowerCase']();
        if (_0x3be278['INPUTS']['keys']['hasOwnProperty'](_0xd88b93))
            _0x3be278['INPUTS']['keys'][_0xd88b93] = ![];
    }
});
window['addEventListener']('mousemove', _0x56dcf8 => {
    _0x3be278['INPUTS']['mouseX'] = _0x56dcf8['clientX'];
    _0x3be278['INPUTS']['mouseY'] = _0x56dcf8['clientY'];
    if (_0x3be278['INPUTS']['isMouseDown'] && _0x3be278['EDITOR']['enabled']) {
        _0x720aa2(_0x56dcf8['clientX'], _0x56dcf8['clientY']);
    }
});
window['addEventListener']('mousedown', _0x2df81c => {
    if (_0x2df81c['target']['closest']('#editor-ui') || _0x2df81c['target']['closest']('#leaderboard-ui') || _0x2df81c['target']['closest']('#role-index-btn-wrap') || _0x2df81c['target']['closest']('#role-index-modal') || _0x2df81c['target']['closest']('#chat-log-ui') || _0x2df81c['target']['closest']('#target-chooser-ui') || _0x2df81c['target']['closest']('#guide-ui') || _0x2df81c['target']['closest']('#role-list-ui') || _0x2df81c['target']['closest']('#ability-ui') || _0x2df81c['target']['closest']('#settings-panel') || _0x2df81c['target']['closest']('#mayor-confirm-dialog') || _0x2df81c['target']['closest']('#mobile-action-bar') || _0x2df81c['target']['closest']('#mobile-top-bar') || _0x2df81c['target']['closest']('#mobile-joystick-zone') || _0x2df81c['target']['closest']('#mobile-chat-overlay') || _0x2df81c['target']['closest']('#will-ui') || _0x2df81c['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x2df81c['button'] === 0x0) {
        _0x3be278['INPUTS']['isMouseDown'] = !![];
        if (_0x3be278['EDITOR']['enabled'])
            _0x720aa2(_0x2df81c['clientX'], _0x2df81c['clientY']);
    }
});
window['addEventListener']('mouseup', _0x5d21d9 => {
    _0x3be278['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x67f833 => {
    if (_0x67f833['target']['closest']('#settings-btn'))
        return;
    const _0x560da5 = document['getElementById']('leaderboard-list');
    const _0x14d667 = document['getElementById']('leaderboard-toggle');
    if (_0x560da5['style']['display'] === 'none') {
        _0x560da5['style']['display'] = 'flex';
        _0x14d667['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x560da5['style']['display'] = 'none';
        _0x14d667['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x4f8980 = document['getElementById']('close-target-btn');
if (_0x4f8980) {
    _0x4f8980['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x1da4d4 = document['getElementById']('close-guide-btn');
if (_0x1da4d4) {
    _0x1da4d4['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x32e904 = document['getElementById']('role-list-header');
if (_0x32e904) {
    _0x32e904['addEventListener']('click', () => {
        const _0x26edc3 = document['getElementById']('role-list-items');
        const _0xe1686 = document['getElementById']('role-list-toggle');
        if (_0x26edc3['style']['display'] === 'none') {
            _0x26edc3['style']['display'] = 'flex';
            _0xe1686['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x26edc3['style']['display'] = 'none';
            _0xe1686['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x5b80bd() {
    const _0x51b1ec = document['getElementById']('mobile-joystick-zone');
    const _0x31cc8f = document['getElementById']('mobile-joystick-base');
    const _0x31549e = document['getElementById']('mobile-joystick-knob');
    if (_0x51b1ec && _0x31cc8f && _0x31549e) {
        const _0x370ba8 = 0x3e;
        const _0x180258 = (_0x534580, _0x4f75de) => {
            const _0x1494b4 = _0x31cc8f['getBoundingClientRect']();
            const _0x289b6e = _0x1494b4['left'] + _0x1494b4['width'] / 0x2;
            const _0x2a9006 = _0x1494b4['top'] + _0x1494b4['height'] / 0x2;
            const _0x424bb8 = _0x534580 - _0x289b6e;
            const _0x58e5fa = _0x4f75de - _0x2a9006;
            const _0x39da05 = Math['hypot'](_0x424bb8, _0x58e5fa);
            if (_0x39da05 === 0x0) {
                _0x16e30a = 0x0;
                _0x2f53e5 = 0x0;
                _0x371059 = ![];
                _0x31549e['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0xe63b85 = Math['min'](_0x39da05, _0x370ba8);
            const _0x2eaab1 = _0x424bb8 / _0x39da05 * _0xe63b85;
            const _0x2f04fe = _0x58e5fa / _0x39da05 * _0xe63b85;
            _0x16e30a = _0x2eaab1 / _0x370ba8;
            _0x2f53e5 = _0x2f04fe / _0x370ba8;
            _0x371059 = _0x39da05 >= _0x370ba8 * 0.75;
            _0x31549e['style']['transform'] = 'translate(' + _0x2eaab1 + 'px,\x20' + _0x2f04fe + 'px)';
        };
        const _0x13eeba = _0x43dece => {
            for (let _0xe4feb3 = 0x0; _0xe4feb3 < _0x43dece['changedTouches']['length']; _0xe4feb3++) {
                const _0x411258 = _0x43dece['changedTouches'][_0xe4feb3];
                if (_0x4eaf6c === null) {
                    _0x4eaf6c = _0x411258['identifier'];
                    _0x1b4e9f = !![];
                    _0x180258(_0x411258['clientX'], _0x411258['clientY']);
                    break;
                }
            }
        };
        const _0x1acbe6 = _0x45de17 => {
            for (let _0x6baf03 = 0x0; _0x6baf03 < _0x45de17['changedTouches']['length']; _0x6baf03++) {
                const _0x58bf48 = _0x45de17['changedTouches'][_0x6baf03];
                if (_0x58bf48['identifier'] === _0x4eaf6c) {
                    _0x180258(_0x58bf48['clientX'], _0x58bf48['clientY']);
                    break;
                }
            }
        };
        const _0x50778e = _0x49ad78 => {
            for (let _0x3ec95d = 0x0; _0x3ec95d < _0x49ad78['changedTouches']['length']; _0x3ec95d++) {
                const _0x52327b = _0x49ad78['changedTouches'][_0x3ec95d];
                if (_0x52327b['identifier'] === _0x4eaf6c) {
                    _0x4eaf6c = null;
                    _0x1b4e9f = ![];
                    _0x16e30a = 0x0;
                    _0x2f53e5 = 0x0;
                    _0x371059 = ![];
                    _0x31549e['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x51b1ec['addEventListener']('touchstart', _0x2c553f => {
            _0x2c553f['preventDefault']();
            _0x13eeba(_0x2c553f);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x1acbe6, { 'passive': !![] });
        window['addEventListener']('touchend', _0x50778e, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x50778e, { 'passive': !![] });
    }
    const _0x23248f = (_0x11d0c2, _0x8e67cc) => {
        const _0x1b3a70 = _0x11d0c2 / _0x3be278['SYSTEM']['viewScale'];
        const _0x3c90c5 = _0x8e67cc / _0x3be278['SYSTEM']['viewScale'];
        const _0x38de9c = _0x3d0db6['x'] - _0x3be278['CAMERA']['x'] + _0x3d0db6['width'] / 0x2;
        const _0x43cb12 = _0x3d0db6['y'] - _0x3be278['CAMERA']['y'] + _0x3d0db6['height'] / 0x2;
        _0x41d207 = Math['atan2'](_0x3c90c5 - _0x43cb12, _0x1b3a70 - _0x38de9c);
        _0x3792ba = !![];
        _0x3be278['INPUTS']['mouseX'] = _0x11d0c2;
        _0x3be278['INPUTS']['mouseY'] = _0x8e67cc;
    };
    _0x4ec94f['addEventListener']('touchstart', _0x483404 => {
        if (_0x35a566)
            return;
        for (let _0x5ed9bf = 0x0; _0x5ed9bf < _0x483404['changedTouches']['length']; _0x5ed9bf++) {
            const _0x1bac62 = _0x483404['changedTouches'][_0x5ed9bf];
            if (_0x1bac62['identifier'] !== _0x4eaf6c && _0x316577 === null) {
                _0x316577 = _0x1bac62['identifier'];
                _0x23248f(_0x1bac62['clientX'], _0x1bac62['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x4ec94f['addEventListener']('touchmove', _0xcf2d9 => {
        if (_0x35a566)
            return;
        for (let _0x49c30f = 0x0; _0x49c30f < _0xcf2d9['changedTouches']['length']; _0x49c30f++) {
            const _0x5e2e2e = _0xcf2d9['changedTouches'][_0x49c30f];
            if (_0x5e2e2e['identifier'] === _0x316577) {
                _0x23248f(_0x5e2e2e['clientX'], _0x5e2e2e['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x403e2a = _0x382a77 => {
        for (let _0xb0cc54 = 0x0; _0xb0cc54 < _0x382a77['changedTouches']['length']; _0xb0cc54++) {
            const _0x334dc8 = _0x382a77['changedTouches'][_0xb0cc54];
            if (_0x334dc8['identifier'] === _0x316577) {
                _0x316577 = null;
                _0x3792ba = ![];
                break;
            }
        }
    };
    _0x4ec94f['addEventListener']('touchend', _0x403e2a, { 'passive': !![] });
    _0x4ec94f['addEventListener']('touchcancel', _0x403e2a, { 'passive': !![] });
    const _0x440580 = document['getElementById']('mob-sprint-btn');
    if (_0x440580) {
        _0x440580['addEventListener']('click', _0x45808c => {
            _0x45808c['stopPropagation']();
            _0x456560 = !_0x456560;
            _0x440580['classList']['toggle']('active', _0x456560);
        });
    }
    const _0x19aa6d = document['getElementById']('mob-interact-btn');
    if (_0x19aa6d) {
        _0x19aa6d['addEventListener']('click', _0x506cfd => {
            _0x506cfd['stopPropagation']();
            if (!_0x3d0db6['isDead']) {
                const _0x5ee144 = Date['now']();
                if (!window['_lastDoorSend'] || _0x5ee144 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x5ee144;
                    if (_0x44cb30 && _0x44cb30['readyState'] === WebSocket['OPEN'])
                        _0x44cb30['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x2850ec = document['getElementById']('mob-ability-btn');
    if (_0x2850ec) {
        _0x2850ec['addEventListener']('click', _0x5814f4 => {
            _0x5814f4['stopPropagation']();
            if (_0x3d0db6['isDead'])
                return;
            if (_0xec0cbc === 'Mayor') {
                if (_0x117a9c['has'](_0x1ac5fb)) {
                    _0x354ff8('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x2e9cc9 = document['getElementById']('mayor-confirm-dialog');
                if (_0x2e9cc9)
                    _0x2e9cc9['style']['display'] = 'flex';
                return;
            }
            if (_0x3be278['GAME_STATE'] === 'NIGHT') {
                if (!_0x3be278['NIGHT_ABILITY_OPEN']) {
                    _0x354ff8('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x568ce2 = document['getElementById']('ability-ui');
                if (_0x568ce2) {
                    if (_0x568ce2['style']['display'] === 'block') {
                        _0x568ce2['style']['display'] = 'none';
                    } else {
                        _0x1a12d2();
                        _0x568ce2['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x3be278['GAME_STATE'] === 'DAY_DISCUSS' || _0x3be278['GAME_STATE'] === 'DAY_VOTE') {
                _0x354ff8('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x58e2f9 = document['getElementById']('mob-will-btn');
    const _0x2060fb = document['getElementById']('will-ui');
    const _0x3a235b = document['getElementById']('will-input');
    const _0x5cf716 = document['getElementById']('close-will-btn');
    const _0x521747 = () => {
        if (!_0x2060fb)
            return;
        if (_0x2060fb['style']['display'] === 'flex') {
            _0x2060fb['style']['display'] = 'none';
            if (_0x3be278['GAME_STATE'] !== 'NIGHT' && _0x44cb30 && _0x44cb30['readyState'] === WebSocket['OPEN'] && _0x3a235b) {
                _0x44cb30['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x3a235b['value']
                }));
            }
            if (_0x3a235b)
                _0x3a235b['blur']();
        } else {
            if (_0x3be278['GAME_STATE'] === 'NIGHT') {
                _0x354ff8('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x2060fb['style']['display'] = 'flex';
            if (_0x3a235b)
                _0x3a235b['focus']();
        }
    };
    if (_0x58e2f9)
        _0x58e2f9['addEventListener']('click', _0x16e0c8 => {
            _0x16e0c8['stopPropagation']();
            _0x521747();
        });
    if (_0x5cf716)
        _0x5cf716['addEventListener']('click', _0x4b2dbe => {
            _0x4b2dbe['stopPropagation']();
            _0x521747();
        });
    const _0x31df15 = document['getElementById']('mob-chat-btn');
    const _0x529d6d = document['getElementById']('mobile-chat-overlay');
    const _0x349744 = document['getElementById']('mobile-chat-input');
    const _0x3dd739 = document['getElementById']('mobile-chat-send');
    const _0x129626 = document['getElementById']('mobile-chat-cancel');
    const _0x1b8d99 = () => {
        if (!_0x529d6d || !_0x349744)
            return;
        _0x529d6d['style']['display'] = 'flex';
        _0x349744['value'] = '';
        _0x349744['focus']();
    };
    const _0xb812e1 = () => {
        if (!_0x529d6d || !_0x349744)
            return;
        _0x529d6d['style']['display'] = 'none';
        _0x349744['blur']();
    };
    const _0x5c35aa = () => {
        if (!_0x349744)
            return;
        const _0x40b782 = _0x349744['value']['trim']();
        if (_0x40b782['length'] > 0x0 && _0x44cb30 && _0x44cb30['readyState'] === WebSocket['OPEN']) {
            _0x44cb30['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x40b782
            }));
        }
        _0x349744['value'] = '';
        _0xb812e1();
    };
    if (_0x31df15)
        _0x31df15['addEventListener']('click', _0x580487 => {
            _0x580487['stopPropagation']();
            _0x1b8d99();
        });
    if (_0x3dd739)
        _0x3dd739['addEventListener']('click', _0x4f2ffc => {
            _0x4f2ffc['stopPropagation']();
            _0x5c35aa();
        });
    if (_0x129626)
        _0x129626['addEventListener']('click', _0x8cb382 => {
            _0x8cb382['stopPropagation']();
            _0xb812e1();
        });
    if (_0x349744) {
        _0x349744['addEventListener']('keydown', _0x1c16cd => {
            if (_0x1c16cd['key'] === 'Enter') {
                _0x1c16cd['preventDefault']();
                _0x5c35aa();
            } else if (_0x1c16cd['key'] === 'Escape') {
                _0xb812e1();
            }
        });
    }
    const _0x1cf0ee = document['getElementById']('mob-top-chat');
    if (_0x1cf0ee)
        _0x1cf0ee['addEventListener']('click', _0x54514b => {
            _0x54514b['stopPropagation']();
            _0x1b8d99();
        });
    const _0x5468f5 = document['getElementById']('mob-top-will');
    if (_0x5468f5)
        _0x5468f5['addEventListener']('click', _0x3a48f2 => {
            _0x3a48f2['stopPropagation']();
            _0x521747();
        });
    const _0x377d58 = document['getElementById']('mob-top-roles');
    if (_0x377d58) {
        _0x377d58['addEventListener']('click', _0x283182 => {
            _0x283182['stopPropagation']();
            const _0x31b657 = document['getElementById']('role-list-ui');
            const _0x4bc5b5 = document['getElementById']('leaderboard-ui');
            if (_0x4bc5b5)
                _0x4bc5b5['style']['display'] = 'none';
            if (_0x31b657)
                _0x31b657['style']['display'] = _0x31b657['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x2e0ffa = document['getElementById']('mob-top-players');
    if (_0x2e0ffa) {
        _0x2e0ffa['addEventListener']('click', _0x28fe7c => {
            _0x28fe7c['stopPropagation']();
            const _0x5ee0d2 = document['getElementById']('leaderboard-ui');
            const _0xee0f7f = document['getElementById']('role-list-ui');
            if (_0xee0f7f)
                _0xee0f7f['style']['display'] = 'none';
            if (_0x5ee0d2)
                _0x5ee0d2['style']['display'] = _0x5ee0d2['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x487d35 = document['getElementById']('mob-top-help');
    if (_0x487d35) {
        _0x487d35['addEventListener']('click', _0x323ded => {
            _0x323ded['stopPropagation']();
            const _0x4706ab = document['getElementById']('guide-ui');
            if (_0x4706ab)
                _0x4706ab['style']['display'] = _0x4706ab['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x40a9e5) {
            _0x40a9e5 = !![];
            _0x2ee8e1();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
