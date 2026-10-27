document['addEventListener']('contextmenu', _0xb61b2d => _0xb61b2d['preventDefault']());
const _0x4d36f9 = {
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
let _0x56f9be = '';
function _0x260c97(_0x42de92, _0xf625c6) {
    const _0x4b0246 = document['getElementById']('role-list-ui');
    const _0x5c6a11 = document['getElementById']('role-list-items');
    if (!_0x4b0246 || !_0x5c6a11)
        return;
    if (!_0xf625c6 || _0xf625c6 === 'off' || !_0x42de92 || _0x42de92['length'] === 0x0) {
        _0x4b0246['style']['display'] = 'none';
        return;
    }
    const _0x4d7c55 = _0xf625c6 + '|' + JSON['stringify'](_0x42de92);
    if (_0x4d7c55 === _0x56f9be)
        return;
    _0x56f9be = _0x4d7c55;
    const _0x61eeac = document['getElementById']('role-tooltip');
    if (_0x61eeac) {
        _0x61eeac['style']['visibility'] = 'hidden';
        _0x61eeac['style']['opacity'] = '0';
    }
    _0x4b0246['style']['display'] = 'flex';
    _0x5c6a11['innerHTML'] = '';
    _0x42de92['forEach'](_0x564f67 => {
        const _0x498d12 = document['createElement']('div');
        _0x498d12['className'] = 'role-list-entry';
        const _0x2f64ef = _0x564f67['name']['includes']('Mafia') || _0x564f67['name'] === 'Skinwalker';
        _0x498d12['classList']['add'](_0x2f64ef ? 'mafia' : 'town');
        if (_0xf625c6 === 'precise' && _0x564f67['isDead']) {
            _0x498d12['classList']['remove']('town', 'mafia');
            _0x498d12['classList']['add']('dead');
            _0x498d12['innerHTML'] = '<span>' + _0x564f67['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x2ca234 = _0x564f67['count'] !== undefined && _0x564f67['count'] !== null ? _0x564f67['count'] + 'x\x20' : '';
            _0x498d12['innerHTML'] = '<span>' + _0x2ca234 + _0x564f67['name'] + '</span>';
        }
        if (_0xf625c6 === 'subalignments' && _0x4d36f9[_0x564f67['name']]) {
            _0x498d12['style']['cursor'] = 'pointer';
            _0x498d12['addEventListener']('mouseenter', () => {
                const _0x3c48fa = document['getElementById']('role-tooltip');
                if (!_0x3c48fa)
                    return;
                const _0x213fbb = _0x4d36f9[_0x564f67['name']]['join'](',\x20');
                _0x3c48fa['innerHTML'] = '';
                const _0x174cd3 = document['createElement']('span');
                _0x174cd3['style']['color'] = '#ffcc00';
                _0x174cd3['textContent'] = _0x564f67['name'];
                _0x3c48fa['appendChild'](_0x174cd3);
                _0x3c48fa['appendChild'](document['createElement']('br'));
                _0x3c48fa['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x213fbb));
                const _0x18b030 = _0x498d12['getBoundingClientRect']();
                _0x3c48fa['style']['left'] = _0x18b030['left'] - 0xeb + 'px';
                _0x3c48fa['style']['top'] = _0x18b030['top'] + 'px';
                _0x3c48fa['style']['display'] = 'block';
                _0x3c48fa['style']['visibility'] = 'visible';
                _0x3c48fa['style']['opacity'] = '1';
            });
            _0x498d12['addEventListener']('mouseleave', () => {
                const _0x2f3742 = document['getElementById']('role-tooltip');
                if (_0x2f3742) {
                    _0x2f3742['style']['display'] = 'none';
                    _0x2f3742['style']['visibility'] = 'hidden';
                    _0x2f3742['style']['opacity'] = '0';
                }
            });
        }
        _0x5c6a11['appendChild'](_0x498d12);
    });
}
let _0x31f371 = null;
let _0x49a4f3 = null;
const _0x1659e3 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0xcb35cc = 'Player???';
let _0x35c9a7 = ![];
let _0x41b907 = {};
let _0x16aa83 = null;
let _0x21c314 = 0x0;
let _0x10518c = 0x0;
let _0x4e5f71 = new Set();
let _0x398c01 = ![];
let _0x781624 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x56bd5a = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x1686a1 = ![];
let _0x20922e = null;
let _0x4374ec = 0x0;
let _0x2f94c7 = 0x0;
let _0x5b3345 = ![];
let _0x6d69cd = ![];
let _0x398535 = 0x0;
let _0x423b30 = null;
let _0x3e351b = ![];
let _0x178da7 = 0x0;
let _0x387a2c = 0x0;
const _0x3499ac = ((() => {
    const _0x4fe04b = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x210e2c = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x416ed8 = 0x320;
    const _0x19b41a = {};
    const _0x49bad5 = {};
    let _0x3fbeda = null;
    let _0x449f54 = _0x210e2c === 0x0;
    let _0x198340 = ![];
    for (const [_0x59291b, _0x558621] of Object['entries'](_0x4fe04b)) {
        const _0x55d78b = new Audio(_0x558621);
        _0x55d78b['loop'] = !![];
        _0x55d78b['volume'] = 0x0;
        _0x55d78b['preload'] = 'auto';
        _0x19b41a[_0x59291b] = _0x55d78b;
        _0x49bad5[_0x59291b] = null;
    }
    const _0xa5ea64 = _0x360cad => Math['min'](0x1, Math['max'](0x0, _0x360cad));
    function _0x4c8315(_0x64b2c) {
        if (_0x49bad5[_0x64b2c] !== null) {
            cancelAnimationFrame(_0x49bad5[_0x64b2c]);
            _0x49bad5[_0x64b2c] = null;
        }
    }
    function _0x30aa69(_0x3a3ecc, _0x4c61c1, _0x49124a, _0x39ac90, _0x141c27) {
        _0x4c8315(_0x3a3ecc);
        const _0x510e96 = _0x19b41a[_0x3a3ecc];
        const _0x251bd3 = performance['now']();
        const _0x125729 = _0x303b9a => {
            const _0x5afed1 = _0xa5ea64((_0x303b9a - _0x251bd3) / _0x39ac90);
            const _0x42a8b0 = _0xa5ea64(_0x4c61c1 + (_0x49124a - _0x4c61c1) * _0x5afed1);
            _0x510e96['volume'] = _0x449f54 ? 0x0 : _0x42a8b0;
            if (_0x5afed1 < 0x1) {
                _0x49bad5[_0x3a3ecc] = requestAnimationFrame(_0x125729);
            } else {
                _0x49bad5[_0x3a3ecc] = null;
                _0x510e96['volume'] = _0x449f54 ? 0x0 : _0xa5ea64(_0x49124a);
                if (_0x141c27)
                    _0x141c27();
            }
        };
        _0x49bad5[_0x3a3ecc] = requestAnimationFrame(_0x125729);
    }
    function _0x15a2dc(_0x5b7ffb) {
        const _0x2f393b = _0x5b7ffb['play']();
        if (_0x2f393b && _0x2f393b['catch']) {
            _0x2f393b['catch'](() => {
                if (!_0x198340) {
                    const _0x28068b = () => {
                        _0x198340 = !![];
                        _0x5b7ffb['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x28068b);
                        document['removeEventListener']('keydown', _0x28068b);
                        document['removeEventListener']('touchstart', _0x28068b);
                    };
                    document['addEventListener']('click', _0x28068b, { 'once': !![] });
                    document['addEventListener']('keydown', _0x28068b, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x28068b, { 'once': !![] });
                }
            });
        }
    }
    function _0x3d5376(_0x3de3c7) {
        if (!_0x4fe04b[_0x3de3c7])
            return;
        if (_0x3fbeda === _0x3de3c7)
            return;
        const _0x4e939a = _0x3fbeda;
        _0x3fbeda = _0x3de3c7;
        const _0x70dc36 = _0x19b41a[_0x3de3c7];
        _0x4c8315(_0x3de3c7);
        _0x70dc36['currentTime'] = 0x0;
        _0x70dc36['volume'] = 0x0;
        _0x15a2dc(_0x70dc36);
        _0x30aa69(_0x3de3c7, 0x0, _0x210e2c, _0x416ed8);
        if (_0x4e939a && _0x19b41a[_0x4e939a]) {
            const _0x4fd6bb = _0x4e939a;
            const _0x15c001 = _0x19b41a[_0x4fd6bb];
            const _0x153cb4 = _0xa5ea64(_0x15c001['volume']);
            _0x30aa69(_0x4fd6bb, _0x153cb4, 0x0, _0x416ed8, () => {
                _0x15c001['pause']();
                _0x15c001['currentTime'] = 0x0;
            });
        }
    }
    function _0x5bdeac(_0x192759) {
        _0x210e2c = _0xa5ea64(_0x192759);
        localStorage['setItem']('musicVolume', String(_0x210e2c));
        if (!_0x449f54 && _0x3fbeda && _0x49bad5[_0x3fbeda] === null) {
            _0x19b41a[_0x3fbeda]['volume'] = _0x210e2c;
        }
    }
    function _0x1f1634() {
        return _0x210e2c;
    }
    function _0x41338d(_0x3d3cc6) {
        _0x449f54 = _0x3d3cc6;
        for (const _0x2d5685 of Object['keys'](_0x19b41a)) {
            if (_0x49bad5[_0x2d5685] === null) {
                _0x19b41a[_0x2d5685]['volume'] = _0x3d3cc6 || _0x2d5685 !== _0x3fbeda ? 0x0 : _0x210e2c;
            }
        }
    }
    function _0x1e6a6b() {
        return _0x449f54;
    }
    function _0x36a856(_0x2fc6d2) {
        if (_0x2fc6d2 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x2fc6d2 === 'DAY_VOTE')
            return 'voting';
        if (_0x2fc6d2 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x5da34d(_0x579653) {
        _0x3d5376(_0x36a856(_0x579653));
    }
    function _0x24fa82(_0x4aa6ef) {
        _0x3d5376(_0x4aa6ef);
    }
    return {
        'play': _0x3d5376,
        'onStateChange': _0x5da34d,
        'onSoundEvent': _0x24fa82,
        'setVolume': _0x5bdeac,
        'getVolume': _0x1f1634,
        'setMuted': _0x41338d,
        'isMuted': _0x1e6a6b
    };
})());
const _0xd30dc = ((() => {
    const _0xc0d24c = 0x258;
    const _0x273c1e = 0xb4;
    const _0x3f8648 = 0x708;
    const _0x4baab5 = 0x140;
    const _0x41a7ce = 0.18;
    const _0x159b36 = 0.95;
    const _0xf8f596 = new Audio('audio/heartbeat.mp3');
    _0xf8f596['loop'] = ![];
    _0xf8f596['preload'] = 'auto';
    _0xf8f596['volume'] = 0x0;
    let _0x16b049 = 0x0;
    let _0xb2f10d = Infinity;
    function _0x2e9dfa(_0x49ebf7, _0x5a9ef7, _0x5d7a32) {
        return Math['min'](_0x5d7a32, Math['max'](_0x5a9ef7, _0x49ebf7));
    }
    function _0x22fefe(_0x24efa3, _0xe12ca4, _0xbb8095) {
        return _0x24efa3 + (_0xe12ca4 - _0x24efa3) * _0xbb8095;
    }
    function _0x290ad9(_0x207251) {
        if (_0x59e7e9['GAME_STATE'] !== 'NIGHT' || _0x32a320['isDead'] || _0x16aa83 === 'Skinwalker') {
            _0xb2f10d = Infinity;
            return;
        }
        const _0x357c36 = _0x32a320['x'] + 22.5;
        const _0x2a5958 = _0x32a320['y'] + 22.5;
        let _0xa87069 = Infinity;
        for (const _0x211dc5 in _0x41b907) {
            const _0x27f331 = _0x41b907[_0x211dc5];
            if (!_0x27f331['isDark'] || _0x27f331['isDead'])
                continue;
            const _0x4537ce = _0x27f331['renderX'] + 22.5 - _0x357c36;
            const _0x51a447 = _0x27f331['renderY'] + 22.5 - _0x2a5958;
            const _0x281566 = Math['sqrt'](_0x4537ce * _0x4537ce + _0x51a447 * _0x51a447);
            if (_0x281566 < _0xa87069)
                _0xa87069 = _0x281566;
        }
        _0xb2f10d = _0xa87069;
        if (_0xa87069 > _0xc0d24c)
            return;
        const _0x473a17 = 0x1 - _0x2e9dfa((_0xa87069 - _0x273c1e) / (_0xc0d24c - _0x273c1e), 0x0, 0x1);
        const _0x24a364 = _0x22fefe(_0x3f8648, _0x4baab5, _0x473a17);
        const _0x25979b = _0x22fefe(_0x41a7ce, _0x159b36, _0x473a17);
        if (_0x207251 >= _0x16b049) {
            _0xf8f596['currentTime'] = 0x0;
            _0xf8f596['volume'] = _0x3499ac['isMuted']() ? 0x0 : _0x2e9dfa(_0x25979b * _0x3499ac['getVolume']() / 0.7, 0x0, 0x1);
            _0xf8f596['play']()['catch'](() => {
            });
            _0x16b049 = _0x207251 + _0x24a364;
        }
    }
    return { 'tick': _0x290ad9 };
})());
function _0x6d2310() {
    const _0x2c8dac = document['getElementById']('mob-ability-btn');
    if (!_0x2c8dac)
        return;
    const _0x3bcf7d = _0x59e7e9['GAME_STATE'] === 'NIGHT' && !_0x32a320['isDead'];
    const _0x48807a = _0x16aa83 === 'Mayor' && !_0x4e5f71['has'](_0x49a4f3) && !_0x32a320['isDead'];
    if (_0x3bcf7d || _0x48807a) {
        _0x2c8dac['style']['display'] = 'flex';
    } else {
        _0x2c8dac['style']['display'] = 'none';
    }
}
function _0x335003() {
    const _0x5e0976 = document['getElementById']('mobile-joystick-zone');
    const _0x324b8a = document['getElementById']('mobile-top-bar');
    const _0x483fb3 = document['getElementById']('mobile-action-bar');
    if (!_0x5e0976 || !_0x324b8a || !_0x483fb3)
        return;
    if (!_0x1cbc00 && _0x56bd5a) {
        _0x5e0976['style']['display'] = 'flex';
        _0x324b8a['style']['display'] = 'flex';
        _0x483fb3['style']['display'] = 'flex';
        _0x6d2310();
    } else {
        _0x5e0976['style']['display'] = 'none';
        _0x324b8a['style']['display'] = 'none';
        _0x483fb3['style']['display'] = 'none';
    }
}
const _0x210030 = document['getElementById']('gameCanvas');
const _0x44b43e = _0x210030['getContext']('2d', { 'alpha': ![] });
const _0x166029 = 0x500;
const _0x57fe64 = 0x2d0;
const _0x59e7e9 = {
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
        'width': _0x166029,
        'height': _0x57fe64
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
const _0x32a320 = {
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
const _0x400687 = new Image();
const _0x1019b6 = new Image();
const _0x5a70da = new Image();
const _0x5e3efb = new Image();
_0x5e3efb['src'] = 'assets/mayor\x20cosmetic.png';
const _0x186e1f = [
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
const _0x43fabc = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x2aa002 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x2aa002 === 'body1.png' || _0x2aa002 === 'body1')
    _0x2aa002 = 'body01.png';
if (!_0x2aa002['endsWith']('.png'))
    _0x2aa002 += '.png';
let _0xb1a49e = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0xb1a49e['endsWith']('.png'))
    _0xb1a49e += '.png';
let _0x1cbc00 = !![];
let _0x590e76 = null;
let _0x228f02 = null;
let _0x146153 = 0x3c;
let _0x311a8d = 0x2d;
const _0xc5a230 = {};
const _0x206a1b = new Image();
_0x206a1b['src'] = 'assets/yanito932.png';
_0xc5a230['assets/yanito932.png'] = _0x206a1b;
function _0x5d5bd9(_0x37f4d8) {
    if (!_0xc5a230[_0x37f4d8] || !_0xc5a230[_0x37f4d8]['complete'] && _0xc5a230[_0x37f4d8]['naturalWidth'] === 0x0 && _0xc5a230[_0x37f4d8]['naturalHeight'] === 0x0) {
        const _0x199865 = new Image();
        _0x199865['src'] = _0x37f4d8;
        _0xc5a230[_0x37f4d8] = _0x199865;
    }
    return _0xc5a230[_0x37f4d8];
}
function _0x12e860(_0xb8f1c4, _0x163060, _0x47d504, _0x4e3c1b, _0x12ca9a) {
    try {
        const _0x360f4d = 'assets/' + (_0x163060 || 'body01.png');
        const _0x4a45f9 = _0x5d5bd9(_0x360f4d);
        if (_0x4a45f9['complete'] && _0x4a45f9['naturalWidth'] > 0x0) {
            _0xb8f1c4['drawImage'](_0x4a45f9, -_0x4e3c1b / 0x2, -_0x12ca9a / 0x2, _0x4e3c1b, _0x12ca9a);
        }
        if (_0x47d504 === null || _0x47d504 === undefined)
            return;
        const _0x287240 = 'assets/' + _0x47d504;
        const _0x27b3ec = _0x5d5bd9(_0x287240);
        if (_0x27b3ec['complete'] && _0x27b3ec['naturalWidth'] > 0x0) {
            _0xb8f1c4['drawImage'](_0x27b3ec, -_0x4e3c1b / 0x2, -_0x12ca9a / 0x2, _0x4e3c1b, _0x12ca9a);
        }
    } catch (_0x3f8574) {
    }
}
function _0xee0663() {
    const _0xb07979 = document['getElementById']('body-skin-grid');
    const _0x35c6c0 = document['getElementById']('eyes-skin-grid');
    if (!_0xb07979 || !_0x35c6c0)
        return;
    _0xb07979['innerHTML'] = '';
    _0x186e1f['forEach'](_0x5d6eb5 => {
        const _0x1ae01a = document['createElement']('button');
        _0x1ae01a['className'] = 'skin-btn' + (_0x5d6eb5 === _0x2aa002 ? '\x20selected' : '');
        const _0x1cc789 = document['createElement']('img');
        _0x1cc789['src'] = 'assets/' + _0x5d6eb5;
        _0x1ae01a['appendChild'](_0x1cc789);
        _0x1ae01a['onclick'] = () => {
            _0x2aa002 = _0x5d6eb5;
            localStorage['setItem']('selectedBody', _0x5d6eb5);
            _0xb07979['querySelectorAll']('.skin-btn')['forEach'](_0x55f3f0 => _0x55f3f0['classList']['remove']('selected'));
            _0x1ae01a['classList']['add']('selected');
        };
        _0xb07979['appendChild'](_0x1ae01a);
    });
    _0x35c6c0['innerHTML'] = '';
    _0x43fabc['forEach'](_0x410111 => {
        const _0x210fda = document['createElement']('button');
        _0x210fda['className'] = 'skin-btn' + (_0x410111 === _0xb1a49e ? '\x20selected' : '');
        const _0x137926 = document['createElement']('img');
        _0x137926['src'] = 'assets/' + _0x410111;
        _0x210fda['appendChild'](_0x137926);
        _0x210fda['onclick'] = () => {
            _0xb1a49e = _0x410111;
            localStorage['setItem']('selectedEyes', _0x410111);
            _0x35c6c0['querySelectorAll']('.skin-btn')['forEach'](_0xaad5d4 => _0xaad5d4['classList']['remove']('selected'));
            _0x210fda['classList']['add']('selected');
        };
        _0x35c6c0['appendChild'](_0x210fda);
    });
}
function _0x56ee9b(_0x168a44) {
    if (!_0x59e7e9['MAP']['columns'] || !_0x59e7e9['CAMERA']['width'])
        return;
    const _0x1cc2c2 = Math['max'](0x0, _0x59e7e9['MAP']['columns'] * _0x59e7e9['MAP']['tileSize'] - _0x59e7e9['CAMERA']['width']);
    const _0x571d46 = Math['max'](0x0, _0x59e7e9['MAP']['rows'] * _0x59e7e9['MAP']['tileSize'] - _0x59e7e9['CAMERA']['height']);
    if (_0x590e76 === null) {
        _0x590e76 = _0x1cc2c2 / 0x2;
        _0x228f02 = _0x571d46 / 0x2;
    }
    _0x590e76 += _0x146153 * _0x168a44;
    _0x228f02 += _0x311a8d * _0x168a44;
    if (_0x590e76 <= 0x0) {
        _0x590e76 = 0x0;
        _0x146153 = Math['abs'](_0x146153);
    } else if (_0x590e76 >= _0x1cc2c2) {
        _0x590e76 = _0x1cc2c2;
        _0x146153 = -Math['abs'](_0x146153);
    }
    if (_0x228f02 <= 0x0) {
        _0x228f02 = 0x0;
        _0x311a8d = Math['abs'](_0x311a8d);
    } else if (_0x228f02 >= _0x571d46) {
        _0x228f02 = _0x571d46;
        _0x311a8d = -Math['abs'](_0x311a8d);
    }
    _0x59e7e9['CAMERA']['x'] = _0x590e76;
    _0x59e7e9['CAMERA']['y'] = _0x228f02;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0xfc4f0b = document['getElementById']('play-btn');
    const _0x2e43a8 = document['getElementById']('username-input');
    const _0x268514 = localStorage['getItem']('playerName');
    if (_0x268514 && _0x2e43a8) {
        _0x2e43a8['value'] = _0x268514;
    }
    const _0x201f52 = () => {
        _0x3499ac['play']('wait');
        document['removeEventListener']('click', _0x201f52);
        document['removeEventListener']('keydown', _0x201f52);
        document['removeEventListener']('touchstart', _0x201f52);
    };
    document['addEventListener']('click', _0x201f52, { 'once': !![] });
    document['addEventListener']('keydown', _0x201f52, { 'once': !![] });
    document['addEventListener']('touchstart', _0x201f52, { 'once': !![] });
    if (_0xfc4f0b) {
        _0xfc4f0b['addEventListener']('click', () => {
            const _0x523dab = window['_FB'] && window['_FB']['_currentUser'];
            const _0x288feb = window['_FB'] && window['_FB']['_userData'];
            let _0x23b3c1 = !![];
            if (_0x523dab && _0x288feb && _0x288feb['username']) {
                _0xcb35cc = _0x288feb['username'];
                _0x23b3c1 = ![];
            } else {
                const _0x5e22ae = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0xcb35cc = 'user' + _0x5e22ae;
                _0x23b3c1 = !![];
            }
            const _0x1c59d3 = _0x23b3c1 ? 'body01.png' : _0x2aa002;
            const _0x371f14 = _0x23b3c1 ? 'eyes4.png' : _0xb1a49e;
            const _0x151053 = !_0x23b3c1 && _0x288feb && _0x288feb['photoURL'] ? _0x288feb['photoURL'] : '';
            const _0x200ccd = !_0x23b3c1 && _0x523dab ? _0x523dab['uid'] : '';
            localStorage['setItem']('playerName', _0xcb35cc);
            _0x1cbc00 = ![];
            _0x59e7e9['CAMERA']['x'] = null;
            _0x59e7e9['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x18ef81 = document['getElementById']('chat-log-wrap');
            if (_0x18ef81)
                _0x18ef81['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x421f79 = document['getElementById']('controls-hint');
            if (_0x421f79 && !_0x56bd5a)
                _0x421f79['style']['display'] = 'block';
            _0x335003();
            if (_0x56bd5a) {
                const _0x10e282 = document['getElementById']('leaderboard-list');
                const _0x5ef234 = document['getElementById']('leaderboard-toggle');
                if (_0x10e282) {
                    _0x10e282['style']['display'] = 'none';
                    if (_0x5ef234)
                        _0x5ef234['style']['transform'] = 'rotate(180deg)';
                }
                const _0x1cb608 = document['getElementById']('role-list-items');
                const _0x905e35 = document['getElementById']('role-list-toggle');
                if (_0x1cb608) {
                    _0x1cb608['style']['display'] = 'none';
                    if (_0x905e35)
                        _0x905e35['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x3d7c77 = !_0x23b3c1 && _0x288feb ? {
                'townWins': _0x288feb['townWins'] || 0x0,
                'mafiaWins': _0x288feb['mafiaWins'] || 0x0,
                'deaths': _0x288feb['deaths'] || 0x0,
                'townLosses': _0x288feb['townLosses'] || 0x0,
                'mafiaLosses': _0x288feb['mafiaLosses'] || 0x0
            } : null;
            const _0x56bac6 = JSON['stringify']({
                'type': 'join',
                'name': _0xcb35cc,
                'token': _0x1659e3,
                'body': _0x1c59d3,
                'eyes': _0x371f14,
                'isGuest': _0x23b3c1,
                'uid': _0x200ccd,
                'photoURL': _0x151053,
                'accountStats': _0x3d7c77
            });
            if (_0x31f371 && _0x31f371['readyState'] === WebSocket['OPEN']) {
                _0x31f371['send'](_0x56bac6);
            } else if (!_0x31f371 || _0x31f371['readyState'] === WebSocket['CLOSED'] || _0x31f371['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x56bac6;
                _0xe4d2e8();
            }
        });
    }
    _0xee0663();
    _0xe4d2e8();
    _0xdb0feb();
    _0x4ba4c5();
    _0x2b4c55();
    _0x33c909();
});
const _0x187c17 = [
    {
        'name': 'Skinwalker',
        'faction': 'Mafia',
        'color': '#ff5555',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>\x20is\x20a\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20role\x20whose\x20purpose\x20is\x20to\x20offer\x20high\x20versability\x20to\x20the\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20while\x20also\x20suppressing\x20strong\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20members.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20pick\x20an\x20alive\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20to\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>transform</span>\x20into,\x20and\x20a\x20person\x20to\x20use\x20it\x27s\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>ability</span>\x20on.\x20You\x20are\x20unable\x20to\x20use\x20a\x20role\x27s\x20ability\x20on\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>yourself</span>,\x20and\x20also\x20unable\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>shoot</span>\x20players\x20as\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>.',
            'Additionally,\x20when\x20you\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>transform</span>\x20into\x20a\x20role,\x20any\x20player\x20with\x20that\x20role\x20will\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>fail</span>\x20to\x20use\x20their\x20ability,\x20letting\x20you\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>prevent</span>\x20strong\x20roles\x20from\x20working\x20but\x20also\x20letting\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20figure\x20out\x20what\x20role\x20you\x20transformed\x20into.'
        ]
    },
    {
        'name': 'Mayor',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Mayor</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20whose\x20purpose\x20is\x20to\x20control\x20discussions\x20and\x20voting\x20while\x20also\x20letting\x20you\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>hard\x20clear</span>\x20yourself.',
            'At\x20any\x20point\x20during\x20the\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>day</span>,\x20you\x20are\x20able\x20to\x20publicly\x20<span\x20style=\x22color:#cc88ff;font-weight:bold;\x22>reveal</span>\x20yourself\x20as\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Mayor</span>.\x20Upon\x20revealing,\x20your\x20vote\x20will\x20count\x20as\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>two\x20votes</span>\x20for\x20the\x20rest\x20of\x20the\x20game,\x20and\x20you\x20will\x20also\x20get\x20a\x20unique\x20<span\x20style=\x22color:#cc88ff;font-weight:bold;\x22>top\x20hat\x20and\x20monocle</span>.'
        ]
    },
    {
        'name': 'Escort',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Escort</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblock</span>\x20suspicious\x20individuals,\x20giving\x20players\x20the\x20ability\x20to\x20restrict\x20strong\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20roles\x20and\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20trolls.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>\x20you\x20may\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblock</span>\x20one\x20player.\x20Roleblocked\x20players\x20will\x20still\x20be\x20able\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>visit\x20and\x20kill</span>\x20if\x20they\x27re\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>,\x20as\x20roleblocking\x20specifically\x20prevents\x20their\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>role\x20ability</span>,\x20like\x20transforming\x20as\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>,\x20investigating\x20as\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Investigator</span>,\x20shooting\x20as\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20etc.'
        ]
    },
    {
        'name': 'Tracker',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Tracker</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20who\x20is\x20able\x20to\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>track</span>\x20players\x20during\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>.',
            'You\x20get\x20to\x20pick\x20one\x20player\x20per\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>.\x20You\x20will\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>track</span>\x20them\x20and\x20find\x20out\x20who\x20they\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>visit</span>\x20(aka\x20who\x20they\x20go\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>kill</span>\x20if\x20they\x27re\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>)\x20OR\x20who\x20they\x20use\x20their\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>ability</span>\x20on.'
        ]
    },
    {
        'name': 'Celebrity',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Celebrity</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20whose\x20purpose\x20is\x20to\x20give\x20the\x20rest\x20of\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20a\x20hint\x20upon\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>death</span>.',
            'When\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Celebrity</span>\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>dies</span>,\x20a\x20random\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>letter</span>\x20of\x20their\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>killer</span>\x20will\x20be\x20revealed.\x20Note\x20that\x20the\x20killer\x20doesn\x27t\x20have\x20to\x20be\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>!',
            'This\x20will\x20fail\x20if\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Celebrity</span>\x20is\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>roleblocked</span>.'
        ]
    },
    {
        'name': 'Archer',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Archer</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20member\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>protect</span>\x20the\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20and\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>injure</span>\x20any\x20evil\x20visitors.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20choose\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>watch\x20over</span>\x20a\x20player.\x20If\x20the\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Mafia</span>\x20visits\x20them,\x20they\x20will\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>fail\x20to\x20visit</span>\x20and\x20be\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>injured</span>.\x20If\x20an\x20already\x20injured\x20player\x20is\x20injured\x20again,\x20they\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>die</span>.'
        ]
    },
    {
        'name': 'Vigilante',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>shoot</span>\x20highly\x20suspicious\x20players.',
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
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Doctor</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>protect</span>\x20important\x20town\x20members\x20from\x20being\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>attacked</span>.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>protect</span>\x20a\x20player.\x20This\x20will\x20prevent\x20them\x20from\x20being\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>visited\x20by\x20the\x20Mafia</span>.',
            'They\x20can\x20also\x20protect\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Vigilante</span>\x20who\x20is\x20currently\x20feeling\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>guilty</span>\x20to\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>get\x20rid\x20of\x20their\x20guilt</span>\x20and\x20prevent\x20them\x20from\x20dying\x20from\x20it.'
        ]
    },
    {
        'name': 'Investigator',
        'faction': 'Town',
        'color': '#55ee77',
        'paragraphs': [
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Investigator</span>\x20is\x20a\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Town</span>\x20role\x20whose\x20purpose\x20is\x20to\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>gather\x20information</span>\x20about\x20players\x27\x20possible\x20roles.',
            'During\x20the\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>night</span>,\x20you\x20may\x20<span\x20style=\x22color:#4fc3f7;font-weight:bold;\x22>investigate</span>\x20a\x20player.\x20You\x20will\x20get\x20a\x20list\x20of\x20half\x20of\x20the\x20roles\x20in\x20the\x20game\x20at\x20the\x20end\x20of\x20the\x20night,\x20one\x20of\x20which\x20being\x20their\x20<span\x20style=\x22color:#ffcc00;font-weight:bold;\x22>real\x20role</span>.',
            'The\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>Investigator</span>\x20is\x20the\x20only\x20role\x20that\x20<span\x20style=\x22color:#55ee77;font-weight:bold;\x22>can\x27t\x20be\x20fooled</span>\x20by\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>,\x20as\x20any\x20other\x20future\x20roles\x20with\x20role\x20learning\x20capabilities\x20<span\x20style=\x22color:#ff8800;font-weight:bold;\x22>WILL\x20be\x20fooled</span>\x20by\x20<span\x20style=\x22color:#ff5555;font-weight:bold;\x22>Skinwalker</span>.'
        ]
    }
];
let _0x5a2769 = 0x0;
function _0x4333f8() {
    const _0x324dfa = document['getElementById']('role-index-tabs');
    const _0x54a86c = document['getElementById']('role-index-body');
    if (!_0x324dfa || !_0x54a86c)
        return;
    _0x324dfa['innerHTML'] = '';
    _0x187c17['forEach']((_0x42c4ff, _0x38c47a) => {
        const _0x858808 = document['createElement']('button');
        _0x858808['className'] = 'role-index-tab-btn' + (_0x42c4ff['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x38c47a === _0x5a2769 ? '\x20active' : '');
        _0x858808['textContent'] = _0x42c4ff['name'];
        _0x858808['addEventListener']('click', () => {
            _0x5a2769 = _0x38c47a;
            _0x4333f8();
        });
        _0x324dfa['appendChild'](_0x858808);
    });
    const _0x4c54de = _0x187c17[_0x5a2769] || _0x187c17[0x0];
    _0x54a86c['innerHTML'] = '';
    const _0x1b5cd7 = document['createElement']('div');
    _0x1b5cd7['className'] = 'role-index-title-row';
    const _0x4eeb1a = document['createElement']('span');
    _0x4eeb1a['className'] = 'role-index-name\x20' + (_0x4c54de['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0x4eeb1a['textContent'] = _0x4c54de['name'];
    _0x1b5cd7['appendChild'](_0x4eeb1a);
    const _0x5ba0d3 = document['createElement']('span');
    _0x5ba0d3['className'] = 'role-index-faction-badge\x20' + (_0x4c54de['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x5ba0d3['textContent'] = _0x4c54de['faction'];
    _0x1b5cd7['appendChild'](_0x5ba0d3);
    _0x54a86c['appendChild'](_0x1b5cd7);
    _0x4c54de['paragraphs']['forEach'](_0x1192c3 => {
        const _0x3f8de9 = document['createElement']('p');
        _0x3f8de9['className'] = 'role-index-desc-paragraph';
        _0x3f8de9['innerHTML'] = _0x1192c3;
        _0x54a86c['appendChild'](_0x3f8de9);
    });
}
function _0x33c909() {
    const _0x1a88f0 = document['getElementById']('role-index-btn');
    const _0x157438 = document['getElementById']('role-index-modal');
    const _0x49df2f = document['getElementById']('close-role-index-btn');
    const _0x1bd011 = document['getElementById']('mob-top-index');
    if (_0x1a88f0 && _0x157438) {
        _0x1a88f0['addEventListener']('click', _0x456cd3 => {
            _0x456cd3['stopPropagation']();
            if (_0x157438['style']['display'] === 'none' || !_0x157438['style']['display']) {
                _0x4333f8();
                _0x157438['style']['display'] = 'flex';
            } else {
                _0x157438['style']['display'] = 'none';
            }
        });
    }
    if (_0x49df2f && _0x157438) {
        _0x49df2f['addEventListener']('click', _0x107991 => {
            _0x107991['stopPropagation']();
            _0x157438['style']['display'] = 'none';
        });
    }
    if (_0x1bd011 && _0x157438) {
        _0x1bd011['addEventListener']('click', _0x430689 => {
            _0x430689['stopPropagation']();
            if (_0x157438['style']['display'] === 'none' || !_0x157438['style']['display']) {
                _0x4333f8();
                _0x157438['style']['display'] = 'flex';
            } else {
                _0x157438['style']['display'] = 'none';
            }
        });
    }
}
function _0x4ba4c5() {
    const _0x38bdc8 = document['getElementById']('settings-btn');
    const _0x44c931 = document['getElementById']('settings-panel');
    const _0x633470 = document['getElementById']('close-settings-btn');
    const _0x2798d0 = document['getElementById']('setting-mouse-relative');
    if (_0x2798d0) {
        _0x2798d0['checked'] = _0x781624;
        _0x2798d0['addEventListener']('change', () => {
            _0x781624 = _0x2798d0['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x781624 ? 'true' : 'false');
        });
    }
    const _0x12f255 = document['getElementById']('setting-music-volume');
    const _0x588b15 = document['getElementById']('setting-music-volume-display');
    function _0x54d5a2(_0x5dd25a) {
        const _0x5677cc = (_0x5dd25a['value'] - _0x5dd25a['min']) / (_0x5dd25a['max'] - _0x5dd25a['min']) * 0x64;
        _0x5dd25a['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x5677cc + '%,\x20#444\x20' + _0x5677cc + '%)';
    }
    if (_0x12f255) {
        const _0x24a5f0 = _0x3499ac['getVolume']();
        const _0x1ab1d6 = Math['round'](_0x24a5f0 * 0x64);
        _0x12f255['value'] = _0x1ab1d6;
        if (_0x588b15)
            _0x588b15['textContent'] = _0x1ab1d6 + '%';
        _0x54d5a2(_0x12f255);
        _0x12f255['addEventListener']('input', () => {
            const _0x3444b2 = parseInt(_0x12f255['value'], 0xa);
            if (_0x588b15)
                _0x588b15['textContent'] = _0x3444b2 + '%';
            _0x54d5a2(_0x12f255);
            _0x3499ac['setVolume'](_0x3444b2 / 0x64);
            _0x3499ac['setMuted'](_0x3444b2 === 0x0);
        });
    }
    if (_0x38bdc8 && _0x44c931) {
        _0x38bdc8['addEventListener']('click', _0x23f506 => {
            _0x23f506['stopPropagation']();
            _0x44c931['style']['display'] = _0x44c931['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x633470 && _0x44c931) {
        _0x633470['addEventListener']('click', () => {
            _0x44c931['style']['display'] = 'none';
        });
    }
    const _0x51556f = document['getElementById']('mayor-confirm-yes');
    const _0xe63452 = document['getElementById']('mayor-confirm-no');
    const _0x4b3292 = document['getElementById']('mayor-confirm-dialog');
    if (_0x51556f && _0x4b3292) {
        _0x51556f['addEventListener']('click', () => {
            if (_0x31f371 && _0x31f371['readyState'] === WebSocket['OPEN']) {
                _0x31f371['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x4b3292['style']['display'] = 'none';
        });
    }
    if (_0xe63452 && _0x4b3292) {
        _0xe63452['addEventListener']('click', () => {
            _0x4b3292['style']['display'] = 'none';
        });
    }
    const _0x6c02b6 = document['getElementById']('close-ability-btn');
    if (_0x6c02b6) {
        _0x6c02b6['addEventListener']('click', () => {
            const _0x1f09fc = document['getElementById']('ability-ui');
            if (_0x1f09fc)
                _0x1f09fc['style']['display'] = 'none';
        });
    }
}
let _0x4a6147 = '';
function _0x54ee10(_0x1f0d87) {
    const _0x3ef187 = document['getElementById']('vote-tally-panel');
    const _0x3604ae = document['getElementById']('vote-tally-list');
    if (!_0x3ef187 || !_0x3604ae)
        return;
    if (_0x1f0d87['state'] !== 'DAY_VOTE') {
        _0x3ef187['style']['display'] = 'none';
        _0x4a6147 = '';
        return;
    }
    _0x3ef187['style']['display'] = 'block';
    const _0xdc0456 = {};
    for (const _0x3b49eb in _0x41b907) {
        if (!_0x41b907[_0x3b49eb]['isDead'])
            _0xdc0456[_0x3b49eb] = 0x0;
    }
    if (_0x49a4f3 && !_0x32a320['isDead'])
        _0xdc0456[_0x49a4f3] = 0x0;
    const _0x113960 = _0x1f0d87['votes'] || {};
    for (const _0x1b5e25 in _0x113960) {
        const _0x27178f = _0x113960[_0x1b5e25];
        const _0x5dde9b = _0x1f0d87['mayorRevealed'] && _0x1f0d87['mayorRevealed'][_0x1b5e25] ? 0x2 : 0x1;
        _0xdc0456[_0x27178f] = (_0xdc0456[_0x27178f] || 0x0) + _0x5dde9b;
    }
    let _0x5142a3 = 0x0;
    const _0x5e204a = _0x1f0d87['skips'] || {};
    for (const _0xcb7a9 in _0x5e204a) {
        _0x5142a3 += Number(_0x5e204a[_0xcb7a9]) || 0x1;
    }
    const _0x5904df = JSON['stringify'](_0xdc0456) + '_' + _0x5142a3 + '_' + _0x32a320['isDead'];
    if (_0x5904df === _0x4a6147)
        return;
    _0x4a6147 = _0x5904df;
    _0x3604ae['innerHTML'] = '';
    for (const _0x4fef0e in _0xdc0456) {
        const _0x23b258 = parseInt(_0x4fef0e);
        const _0x1ff2fb = _0x23b258 === _0x49a4f3 ? _0xcb35cc : _0x41b907[_0x4fef0e] ? _0x41b907[_0x4fef0e]['name'] : 'Player\x20' + _0x4fef0e;
        const _0x2fd005 = document['createElement']('div');
        _0x2fd005['className'] = 'vote-tally-entry';
        const _0x505ab4 = document['createElement']('span');
        _0x505ab4['textContent'] = _0x1ff2fb;
        const _0x31e2c8 = document['createElement']('span');
        _0x31e2c8['className'] = 'vote-count';
        _0x31e2c8['textContent'] = _0xdc0456[_0x4fef0e] + '\x20vote' + (_0xdc0456[_0x4fef0e] === 0x1 ? '' : 's');
        _0x2fd005['appendChild'](_0x505ab4);
        _0x2fd005['appendChild'](_0x31e2c8);
        if (_0x23b258 !== _0x49a4f3 && !_0x32a320['isDead']) {
            _0x2fd005['style']['cursor'] = 'pointer';
            _0x2fd005['title'] = 'Vote\x20for\x20' + _0x1ff2fb;
            _0x2fd005['addEventListener']('click', _0x56c6f8 => {
                _0x56c6f8['stopPropagation']();
                if (_0x31f371 && _0x31f371['readyState'] === WebSocket['OPEN']) {
                    _0x31f371['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x1ff2fb
                    }));
                }
            });
        }
        _0x3604ae['appendChild'](_0x2fd005);
    }
    const _0x1c21b6 = document['createElement']('div');
    _0x1c21b6['className'] = 'vote-tally-skip';
    _0x1c21b6['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x5142a3 + '</span>';
    if (!_0x32a320['isDead']) {
        _0x1c21b6['style']['cursor'] = 'pointer';
        _0x1c21b6['title'] = 'Click\x20to\x20skip\x20vote';
        _0x1c21b6['addEventListener']('click', _0x398c24 => {
            _0x398c24['stopPropagation']();
            if (_0x31f371 && _0x31f371['readyState'] === WebSocket['OPEN']) {
                _0x31f371['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x3604ae['appendChild'](_0x1c21b6);
}
let _0x171250 = null;
let _0x40ff99 = null;
let _0x499b1c = null;
function _0xc993e7() {
    if (_0x31f371 && _0x31f371['readyState'] === WebSocket['OPEN']) {
        _0x31f371['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x171250,
            'abilityTarget': _0x40ff99,
            'killTarget': _0x499b1c
        }));
    }
}
function _0x2f596b() {
    const _0x3789e2 = document['getElementById']('ability-ui-body');
    if (!_0x3789e2)
        return;
    _0x3789e2['innerHTML'] = '';
    if (_0x16aa83 === 'Celebrity' || _0x16aa83 === 'Mayor') {
        const _0x5ea801 = document['createElement']('div');
        _0x5ea801['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x5ea801['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x3789e2['appendChild'](_0x5ea801);
        return;
    }
    if (_0x16aa83 === 'Skinwalker') {
        const _0xf1386b = document['createElement']('div');
        _0xf1386b['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0xf1386b['innerText'] = 'Transform\x20into:';
        _0x3789e2['appendChild'](_0xf1386b);
        const _0x46b593 = document['createElement']('div');
        _0x46b593['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x500a33 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x59b2ec = _0x13bd64 => {
            if (_0x59e7e9['ROLES_IN_GAME'] && Array['isArray'](_0x59e7e9['ROLES_IN_GAME'])) {
                return _0x59e7e9['ROLES_IN_GAME']['includes'](_0x13bd64);
            }
            if (_0x59e7e9['ROLE_LIST_RAW'] && _0x59e7e9['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x59e7e9['ROLE_LIST_RAW']['some'](_0x353b72 => _0x353b72['name'] === _0x13bd64 && !_0x353b72['isDead']);
            }
            return ![];
        };
        const _0xac0765 = [
            'None',
            ..._0x500a33['filter'](_0x59b2ec)
        ];
        _0xac0765['forEach'](_0x10ff27 => {
            const _0x8f466c = document['createElement']('button');
            _0x8f466c['className'] = 'layer-btn';
            _0x8f466c['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x8f466c['innerText'] = _0x10ff27;
            const _0x18dfd8 = _0x10ff27 === 'None' && !_0x171250 || _0x171250 === _0x10ff27;
            if (_0x18dfd8)
                _0x8f466c['classList']['add']('active');
            const _0x1924b0 = _0x10ff27 !== 'None' && _0x59e7e9['SKINWALKER_LAST_ROLE'] && _0x59e7e9['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x10ff27['toLowerCase']();
            if (_0x1924b0) {
                _0x8f466c['style']['opacity'] = '0.45';
                _0x8f466c['style']['cursor'] = 'not-allowed';
                _0x8f466c['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x8f466c['onclick'] = () => {
                    _0xeda705('You\x20cannot\x20transform\x20into\x20' + _0x10ff27 + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x8f466c['onclick'] = () => {
                    _0x171250 = _0x10ff27 === 'None' ? null : _0x10ff27;
                    _0xc993e7();
                    _0x2f596b();
                };
            }
            _0x46b593['appendChild'](_0x8f466c);
        });
        _0x3789e2['appendChild'](_0x46b593);
        if (_0x59b2ec('Vigilante')) {
            const _0x5a5504 = document['createElement']('div');
            _0x5a5504['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x5a5504['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x3789e2['appendChild'](_0x5a5504);
        }
        if (_0x171250 === 'Vigilante') {
            const _0x841b2d = document['createElement']('div');
            _0x841b2d['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x841b2d['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x3789e2['appendChild'](_0x841b2d);
        } else if (_0x171250 && _0x171250 !== 'Celebrity') {
            const _0x427994 = document['createElement']('div');
            _0x427994['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x427994['innerText'] = 'Use\x20' + _0x171250 + '\x20ability\x20on:';
            _0x3789e2['appendChild'](_0x427994);
            const _0x5465e1 = document['createElement']('div');
            _0x5465e1['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x206b82 = document['createElement']('button');
            _0x206b82['className'] = 'layer-btn';
            _0x206b82['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x206b82['innerText'] = 'No\x20one';
            if (!_0x40ff99)
                _0x206b82['classList']['add']('active');
            _0x206b82['onclick'] = () => {
                _0x40ff99 = null;
                _0xc993e7();
                _0x2f596b();
            };
            _0x5465e1['appendChild'](_0x206b82);
            for (const _0x1d824b in _0x41b907) {
                const _0x163878 = _0x41b907[_0x1d824b];
                if (_0x163878['isDead'])
                    continue;
                const _0x5ad1f0 = document['createElement']('button');
                _0x5ad1f0['className'] = 'layer-btn';
                _0x5ad1f0['innerText'] = _0x163878['name'];
                if (_0x40ff99 === parseInt(_0x1d824b))
                    _0x5ad1f0['classList']['add']('active');
                _0x5ad1f0['onclick'] = () => {
                    _0x40ff99 = parseInt(_0x1d824b);
                    _0xc993e7();
                    _0x2f596b();
                };
                _0x5465e1['appendChild'](_0x5ad1f0);
            }
            _0x3789e2['appendChild'](_0x5465e1);
        }
        const _0x284bba = document['createElement']('div');
        _0x284bba['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x284bba['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x3789e2['appendChild'](_0x284bba);
        const _0x3657a6 = document['createElement']('div');
        _0x3657a6['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x26aaba = document['createElement']('button');
        _0x26aaba['className'] = 'layer-btn';
        _0x26aaba['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x26aaba['innerText'] = 'No\x20one';
        if (!_0x499b1c && !_0x59e7e9['CURRENT_TARGET'])
            _0x26aaba['classList']['add']('active');
        _0x26aaba['onclick'] = () => {
            _0x499b1c = null;
            _0x59e7e9['CURRENT_TARGET'] = null;
            _0xc993e7();
            _0x2f596b();
        };
        _0x3657a6['appendChild'](_0x26aaba);
        for (const _0x3a77e3 in _0x41b907) {
            const _0x11d701 = _0x41b907[_0x3a77e3];
            if (_0x11d701['isDead'])
                continue;
            const _0x44db42 = document['createElement']('button');
            _0x44db42['className'] = 'layer-btn';
            _0x44db42['innerText'] = _0x11d701['name'];
            if (_0x499b1c === parseInt(_0x3a77e3) || _0x59e7e9['CURRENT_TARGET'] === parseInt(_0x3a77e3))
                _0x44db42['classList']['add']('active');
            _0x44db42['onclick'] = () => {
                _0x499b1c = parseInt(_0x3a77e3);
                _0x59e7e9['CURRENT_TARGET'] = parseInt(_0x3a77e3);
                _0xc993e7();
                _0x2f596b();
            };
            _0x3657a6['appendChild'](_0x44db42);
        }
        _0x3789e2['appendChild'](_0x3657a6);
        return;
    }
    let _0x4c1a82 = '';
    let _0x4f2dae = ![];
    if (_0x16aa83 === 'Doctor') {
        _0x4c1a82 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x4f2dae = !![];
    } else if (_0x16aa83 === 'Investigator') {
        _0x4c1a82 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x16aa83 === 'Tracker') {
        _0x4c1a82 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x16aa83 === 'Archer') {
        _0x4c1a82 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x16aa83 === 'Escort') {
        _0x4c1a82 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x16aa83 === 'Vigilante') {
        _0x4c1a82 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x3bb9ba = document['createElement']('div');
    _0x3bb9ba['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x3bb9ba['innerText'] = _0x4c1a82;
    _0x3789e2['appendChild'](_0x3bb9ba);
    const _0x2a32d9 = document['createElement']('div');
    _0x2a32d9['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x3cc9cb = document['createElement']('button');
    _0x3cc9cb['className'] = 'layer-btn';
    _0x3cc9cb['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x3cc9cb['innerText'] = 'No\x20one';
    if (_0x59e7e9['CURRENT_TARGET'] === null)
        _0x3cc9cb['classList']['add']('active');
    _0x3cc9cb['onclick'] = () => {
        _0x59e7e9['CURRENT_TARGET'] = null;
        if (_0x31f371 && _0x31f371['readyState'] === WebSocket['OPEN']) {
            _0x31f371['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x2f596b();
    };
    _0x2a32d9['appendChild'](_0x3cc9cb);
    for (const _0x4fa70a in _0x41b907) {
        const _0x1ec80f = _0x41b907[_0x4fa70a];
        if (_0x1ec80f['isDead'])
            continue;
        const _0x3700b0 = document['createElement']('button');
        _0x3700b0['className'] = 'layer-btn';
        _0x3700b0['innerText'] = _0x1ec80f['name'];
        if (_0x59e7e9['CURRENT_TARGET'] === parseInt(_0x4fa70a))
            _0x3700b0['classList']['add']('active');
        _0x3700b0['onclick'] = () => {
            _0x59e7e9['CURRENT_TARGET'] = parseInt(_0x4fa70a);
            if (_0x31f371 && _0x31f371['readyState'] === WebSocket['OPEN']) {
                _0x31f371['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x4fa70a)
                }));
            }
            _0x2f596b();
        };
        _0x2a32d9['appendChild'](_0x3700b0);
    }
    if (_0x4f2dae && !_0x32a320['isDead']) {
        const _0x427cec = document['createElement']('button');
        _0x427cec['className'] = 'layer-btn';
        _0x427cec['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x427cec['innerText'] = _0xcb35cc + '\x20(Self)';
        if (_0x59e7e9['CURRENT_TARGET'] === _0x49a4f3)
            _0x427cec['classList']['add']('active');
        _0x427cec['onclick'] = () => {
            _0x59e7e9['CURRENT_TARGET'] = _0x49a4f3;
            if (_0x31f371 && _0x31f371['readyState'] === WebSocket['OPEN']) {
                _0x31f371['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x49a4f3
                }));
            }
            _0x2f596b();
        };
        _0x2a32d9['appendChild'](_0x427cec);
    }
    _0x3789e2['appendChild'](_0x2a32d9);
}
function _0xe4d2e8() {
    if (_0x31f371 && (_0x31f371['readyState'] === WebSocket['OPEN'] || _0x31f371['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x1a4f4a = new URLSearchParams();
    if (_0x1659e3)
        _0x1a4f4a['set']('token', _0x1659e3);
    _0x1a4f4a['set']('ngrok-skip-browser-warning', 'true');
    const _0xc25ec5 = 'wss://this-studying-motherboard-emissions.trycloudflare.com';
    const _0x3ec519 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0xc25ec5;
    const _0x5ce7bd = _0x3ec519 + '/?' + _0x1a4f4a['toString']();
    _0x31f371 = new WebSocket(_0x5ce7bd);
    _0x31f371['onopen'] = function () {
        if (!_0x1cbc00 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x9f8923 = window['_FB'] && window['_FB']['_currentUser'];
                const _0xc996c5 = window['_FB'] && window['_FB']['_userData'];
                const _0x30a436 = !(_0x9f8923 && _0xc996c5 && _0xc996c5['username']);
                const _0x294f91 = _0x30a436 ? 'body01.png' : _0x2aa002;
                const _0x51512f = _0x30a436 ? 'eyes4.png' : _0xb1a49e;
                const _0x8ae8bb = !_0x30a436 && _0xc996c5 && _0xc996c5['photoURL'] ? _0xc996c5['photoURL'] : '';
                const _0x4e86d9 = !_0x30a436 && _0x9f8923 ? _0x9f8923['uid'] : '';
                const _0x162926 = !_0x30a436 && _0xc996c5 ? {
                    'townWins': _0xc996c5['townWins'] || 0x0,
                    'mafiaWins': _0xc996c5['mafiaWins'] || 0x0,
                    'deaths': _0xc996c5['deaths'] || 0x0,
                    'townLosses': _0xc996c5['townLosses'] || 0x0,
                    'mafiaLosses': _0xc996c5['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0xcb35cc,
                    'token': _0x1659e3,
                    'body': _0x294f91,
                    'eyes': _0x51512f,
                    'isGuest': _0x30a436,
                    'uid': _0x4e86d9,
                    'photoURL': _0x8ae8bb,
                    'accountStats': _0x162926
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x31f371 && _0x31f371['readyState'] === WebSocket['OPEN']) {
            _0x31f371['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x31f371['onclose'] = _0xfe3107 => {
        if (_0xfe3107['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0xfe3107['code'] === 0xfa2 || _0xfe3107['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x215301 = document['getElementById']('disconnect-overlay');
        if (!_0x215301) {
            _0x215301 = document['createElement']('div');
            _0x215301['id'] = 'disconnect-overlay';
            _0x215301['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x215301['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x215301);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x31f371['onmessage'] = _0x4cf0bf => {
        const _0x3016bb = JSON['parse'](_0x4cf0bf['data']);
        if (_0x3016bb['type'] === 'map_data') {
            _0x59e7e9['MAP']['tileSize'] = _0x3016bb['map']['tileSize'];
            _0x59e7e9['MAP']['columns'] = _0x3016bb['map']['columns'];
            _0x59e7e9['MAP']['rows'] = _0x3016bb['map']['rows'];
            _0x59e7e9['MAP']['layers'] = _0x3016bb['map']['layers'];
            if (_0x3016bb['map']['doors']) {
                _0x59e7e9['MAP']['doors'] = _0x3016bb['map']['doors'];
                const _0x14e04f = _0x59e7e9['MAP']['layers']['find'](_0x538517 => _0x538517['name'] === 'floor2');
                if (_0x14e04f) {
                    for (const _0x6a9f04 in _0x59e7e9['MAP']['doors']) {
                        _0x14e04f['data'][parseInt(_0x6a9f04)] = 0x2;
                    }
                }
            }
            if (_0x3016bb['entities'])
                _0x59e7e9['ENTITIES'] = _0x3016bb['entities'];
            _0x152c3a();
            _0x59e7e9['SYSTEM']['isReady'] = !![];
            _0x342d79();
            if (!_0x59e7e9['SYSTEM']['_gameLoopRunning']) {
                _0x59e7e9['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x40ba55);
            }
            return;
        }
        if (_0x3016bb['type'] === 'init') {
            _0x49a4f3 = _0x3016bb['id'];
            _0x1cbc00 = ![];
            _0x335003();
            if (_0x56bd5a) {
                const _0x1c31d5 = document['getElementById']('leaderboard-list');
                const _0x35197c = document['getElementById']('leaderboard-toggle');
                if (_0x1c31d5) {
                    _0x1c31d5['style']['display'] = 'none';
                    if (_0x35197c)
                        _0x35197c['style']['transform'] = 'rotate(180deg)';
                }
                const _0x28dffb = document['getElementById']('role-list-items');
                const _0x41de2f = document['getElementById']('role-list-toggle');
                if (_0x28dffb) {
                    _0x28dffb['style']['display'] = 'none';
                    if (_0x41de2f)
                        _0x41de2f['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x35c9a7 = _0x3016bb['isOwner'] || ![];
            _0xcb35cc = _0x3016bb['name'] || _0xcb35cc;
            _0x59e7e9['MAP']['tileSize'] = _0x3016bb['map']['tileSize'];
            _0x59e7e9['MAP']['columns'] = _0x3016bb['map']['columns'];
            _0x59e7e9['MAP']['rows'] = _0x3016bb['map']['rows'];
            _0x59e7e9['MAP']['layers'] = _0x3016bb['map']['layers'];
            if (_0x3016bb['map']['doors']) {
                _0x59e7e9['MAP']['doors'] = _0x3016bb['map']['doors'];
                const _0x168ea9 = _0x59e7e9['MAP']['layers']['find'](_0x1f793b => _0x1f793b['name'] === 'floor2');
                if (_0x168ea9) {
                    for (const _0x225952 in _0x59e7e9['MAP']['doors']) {
                        _0x168ea9['data'][parseInt(_0x225952)] = 0x2;
                    }
                }
            }
            if (_0x3016bb['entities'])
                _0x59e7e9['ENTITIES'] = _0x3016bb['entities'];
            _0x152c3a();
            _0x32a320['x'] = _0x59e7e9['MAP']['columns'] * _0x59e7e9['MAP']['tileSize'] / 0x2;
            _0x32a320['y'] = _0x59e7e9['MAP']['rows'] * _0x59e7e9['MAP']['tileSize'] / 0x2;
            _0x59e7e9['CAMERA']['x'] = _0x32a320['x'] + _0x32a320['width'] / 0x2 - _0x59e7e9['CAMERA']['width'] / 0x2;
            _0x59e7e9['CAMERA']['y'] = _0x32a320['y'] + _0x32a320['height'] / 0x2 - _0x59e7e9['CAMERA']['height'] / 0x2;
            if (_0x35c9a7) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0xb7905f();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x5afeca = document['getElementById']('role-index-btn-wrap');
            if (_0x5afeca)
                _0x5afeca['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x59e7e9['SYSTEM']['lastTime'] = performance['now']();
            _0x59e7e9['SYSTEM']['isReady'] = !![];
            _0x44e870();
            if (!_0x59e7e9['SYSTEM']['_gameLoopRunning']) {
                _0x59e7e9['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x40ba55);
            }
            return;
        } else if (_0x3016bb['type'] === 'state') {
            const _0x264fce = {};
            for (const _0x184aa8 in _0x3016bb['players']) {
                if (parseInt(_0x184aa8) === _0x49a4f3)
                    continue;
                const _0x1c5a65 = _0x3016bb['players'][_0x184aa8];
                const _0x65b22b = _0x41b907[_0x184aa8];
                if (_0x65b22b) {
                    const _0x1a909b = _0x1c5a65['x'] - _0x65b22b['renderX'];
                    const _0x28d1bc = _0x1c5a65['y'] - _0x65b22b['renderY'];
                    const _0x121c71 = _0x1a909b * _0x1a909b + _0x28d1bc * _0x28d1bc > 0x78 * 0x78;
                    Object['assign'](_0x65b22b, _0x1c5a65);
                    if (_0x121c71) {
                        _0x65b22b['renderX'] = _0x1c5a65['x'];
                        _0x65b22b['renderY'] = _0x1c5a65['y'];
                    }
                    _0x264fce[_0x184aa8] = _0x65b22b;
                } else {
                    _0x264fce[_0x184aa8] = {
                        ..._0x1c5a65,
                        'renderX': _0x1c5a65['x'],
                        'renderY': _0x1c5a65['y'],
                        'renderAngle': _0x1c5a65['angle'] || 0x0
                    };
                }
            }
            _0x41b907 = _0x264fce;
            _0x3b1108();
            if (_0x3016bb['players'][_0x49a4f3]) {
                const _0x179c93 = _0x3016bb['players'][_0x49a4f3];
                _0x32a320['chats'] = _0x179c93['chats'] || [];
                _0x32a320['isDead'] = _0x179c93['isDead'];
                if (_0x179c93['name'])
                    _0xcb35cc = _0x179c93['name'];
                _0x44e870();
                const _0x2f4fba = Math['hypot'](_0x179c93['x'] - _0x32a320['x'], _0x179c93['y'] - _0x32a320['y']);
                if (_0x2f4fba > 0xfa) {
                    _0x32a320['x'] = _0x179c93['x'];
                    _0x32a320['y'] = _0x179c93['y'];
                } else if (_0x2f4fba > 0x50) {
                    _0x32a320['x'] += (_0x179c93['x'] - _0x32a320['x']) * 0.06;
                    _0x32a320['y'] += (_0x179c93['y'] - _0x32a320['y']) * 0.06;
                }
            }
            if (_0x3016bb['entities'])
                _0x59e7e9['ENTITIES'] = _0x3016bb['entities'];
            if (_0x3016bb['game']) {
                _0x59e7e9['GAME_STATE'] = _0x3016bb['game']['state'];
                _0x59e7e9['NIGHT_ABILITY_OPEN'] = _0x3016bb['game']['nightAbilityOpen'];
                if (_0x3016bb['game']['mayorRevealed']) {
                    for (const _0x33f417 in _0x3016bb['game']['mayorRevealed']) {
                        _0x4e5f71['add'](parseInt(_0x33f417));
                    }
                }
                if (_0x59e7e9['LAST_STATE'] !== _0x59e7e9['GAME_STATE']) {
                    if (_0x59e7e9['GAME_STATE'] !== 'NIGHT') {
                        _0x59e7e9['CURRENT_TARGET'] = null;
                        _0x171250 = null;
                        _0x40ff99 = null;
                        _0x499b1c = null;
                        const _0x564638 = document['getElementById']('ability-ui');
                        if (_0x564638)
                            _0x564638['style']['display'] = 'none';
                    }
                    if (_0x59e7e9['GAME_STATE'] === 'NIGHT') {
                        _0x32a320['chats'] = [];
                        for (const _0x4bef5c in _0x41b907) {
                            _0x41b907[_0x4bef5c]['chats'] = [];
                        }
                    }
                    _0x59e7e9['LAST_STATE'] = _0x59e7e9['GAME_STATE'];
                    _0x6d2310();
                    _0x3499ac['onStateChange'](_0x59e7e9['GAME_STATE'], _0x3016bb['game']['nightAbilityOpen']);
                }
                const _0x1291c9 = document['getElementById']('phase-ui');
                if (_0x1291c9) {
                    if (_0x3016bb['game']['state'] === 'LOBBY') {
                        _0x1291c9['style']['display'] = 'none';
                    } else {
                        _0x1291c9['style']['display'] = 'block';
                    }
                    let _0x174410 = _0x3016bb['game']['state']['replace']('_', '\x20');
                    if (_0x3016bb['game']['state'] === 'DAY_DISCUSS') {
                        _0x174410 = 'DAY\x20' + (_0x3016bb['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x3016bb['game']['timer'] + 's';
                    } else if (_0x3016bb['game']['state'] === 'DAY_VOTE') {
                        _0x174410 = 'DAY\x20' + (_0x3016bb['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x3016bb['game']['timer'] + 's';
                    } else if (_0x3016bb['game']['state'] === 'NIGHT') {
                        const _0x160370 = _0x3016bb['game']['dayCount'] || 0x1;
                        if (_0x3016bb['game']['nightAbilityOpen']) {
                            _0x174410 = 'NIGHT\x20' + _0x160370 + '\x20ABILITY\x20PHASE';
                            const _0x2973db = _0x3016bb['game']['abilityTimer'] !== undefined ? _0x3016bb['game']['abilityTimer'] : _0x3016bb['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x2973db + 's';
                        } else {
                            _0x174410 = 'NIGHT\x20' + _0x160370;
                            document['getElementById']('phase-timer')['innerText'] = _0x3016bb['game']['timer'] + 's';
                        }
                    }
                    if (_0x3016bb['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x174410;
                    }
                }
                if (_0x3016bb['game']['state'] === 'NIGHT') {
                    const _0x1ddf37 = document['getElementById']('ability-timer-label');
                    if (_0x1ddf37) {
                        const _0x3ed7ae = _0x3016bb['game']['abilityTimer'] !== undefined ? _0x3016bb['game']['abilityTimer'] : _0x3016bb['game']['timer'];
                        _0x1ddf37['innerText'] = _0x3016bb['game']['nightAbilityOpen'] ? _0x3ed7ae + 's' : '';
                    }
                    if (_0x3016bb['game']['nightAbilityOpen'] && !_0x398c01 && !_0x32a320['isDead']) {
                        _0x398c01 = !![];
                        _0x2f596b();
                        const _0x34f6d2 = document['getElementById']('ability-ui');
                        if (_0x34f6d2)
                            _0x34f6d2['style']['display'] = 'block';
                    }
                    if (!_0x3016bb['game']['nightAbilityOpen']) {
                        const _0x103e2c = document['getElementById']('ability-ui');
                        if (_0x103e2c && _0x103e2c['style']['display'] === 'block') {
                            _0x103e2c['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x398c01 = ![];
                }
                if (_0x3016bb['game']['rolesInGame']) {
                    _0x59e7e9['ROLES_IN_GAME'] = _0x3016bb['game']['rolesInGame'];
                }
                if (_0x3016bb['game']['skinwalkerLastRole'] !== undefined) {
                    _0x59e7e9['SKINWALKER_LAST_ROLE'] = _0x3016bb['game']['skinwalkerLastRole'];
                }
                if (_0x3016bb['game']['state'] === 'NIGHT') {
                    const _0x33ed4c = document['getElementById']('will-ui');
                    if (_0x33ed4c && _0x33ed4c['style']['display'] === 'flex') {
                        _0x33ed4c['style']['display'] = 'none';
                        const _0x4531f6 = document['getElementById']('will-input');
                        if (_0x4531f6)
                            _0x4531f6['blur']();
                    }
                }
                _0x54ee10(_0x3016bb['game']);
                if (_0x3016bb['game']['roleListMode'] !== undefined) {
                    _0x59e7e9['ROLE_LIST_RAW'] = _0x3016bb['game']['roleList'] || [];
                    _0x260c97(_0x3016bb['game']['roleList'], _0x3016bb['game']['roleListMode']);
                }
            }
        } else if (_0x3016bb['type'] === 'teleport') {
            _0x32a320['x'] = _0x3016bb['x'];
            _0x32a320['y'] = _0x3016bb['y'];
            _0x32a320['vx'] = 0x0;
            _0x32a320['vy'] = 0x0;
            _0x59e7e9['CAMERA']['x'] = null;
            if (_0x3016bb['teleportId'] !== undefined)
                _0x10518c = _0x3016bb['teleportId'];
        } else if (_0x3016bb['type'] === 'bulk_teleport') {
            for (const _0x27380d in _0x3016bb['positions']) {
                const _0x17e540 = _0x3016bb['positions'][_0x27380d];
                if (parseInt(_0x27380d) === _0x49a4f3) {
                    _0x32a320['x'] = _0x17e540['x'];
                    _0x32a320['y'] = _0x17e540['y'];
                    _0x32a320['vx'] = 0x0;
                    _0x32a320['vy'] = 0x0;
                    _0x59e7e9['CAMERA']['x'] = null;
                    continue;
                }
                const _0x4c00a4 = _0x41b907[_0x27380d];
                if (_0x4c00a4) {
                    _0x4c00a4['x'] = _0x17e540['x'];
                    _0x4c00a4['y'] = _0x17e540['y'];
                    _0x4c00a4['renderX'] = _0x17e540['x'];
                    _0x4c00a4['renderY'] = _0x17e540['y'];
                    _0x4c00a4['vx'] = 0x0;
                    _0x4c00a4['vy'] = 0x0;
                }
            }
        } else if (_0x3016bb['type'] === 'player_left') {
            delete _0x41b907[_0x3016bb['id']];
            _0x4e5f71['delete'](parseInt(_0x3016bb['id']));
        } else if (_0x3016bb['type'] === 'map_update') {
            const _0x4b8318 = _0x59e7e9['MAP']['layers']['find'](_0x1873e2 => _0x1873e2['name'] === _0x3016bb['layer']);
            if (_0x4b8318) {
                _0x4b8318['data'][_0x3016bb['row'] * _0x59e7e9['MAP']['columns'] + _0x3016bb['col']] = _0x3016bb['gid'];
                const _0x8c6ea7 = _0x3016bb['row'] * _0x59e7e9['MAP']['columns'] + _0x3016bb['col'];
                if (_0x59e7e9['MAP']['doors'] && _0x59e7e9['MAP']['doors'][_0x8c6ea7]) {
                    const _0x4e3d10 = _0x59e7e9['MAP']['layers']['find'](_0x512507 => _0x512507['name'] === 'floor2');
                    if (_0x4e3d10)
                        _0x4e3d10['data'][_0x8c6ea7] = 0x2;
                }
                const _0x44817f = Math['floor'](_0x3016bb['col'] * _0x59e7e9['MAP']['tileSize'] / _0x59e7e9['MAP']['chunkSize']);
                const _0x3b3184 = Math['floor'](_0x3016bb['row'] * _0x59e7e9['MAP']['tileSize'] / _0x59e7e9['MAP']['chunkSize']);
                _0x3aa7bc(_0x44817f, _0x3b3184);
            }
        } else if (_0x3016bb['type'] === 'role_assign') {
            _0x16aa83 = _0x3016bb['role'];
            _0x32a320['isDead'] = _0x16aa83 === 'Spectator';
            _0x4e5f71['clear']();
            _0x59e7e9['CURRENT_TARGET'] = null;
            _0x171250 = null;
            _0x40ff99 = null;
            _0x499b1c = null;
            _0x398c01 = ![];
            const _0x49b827 = document['getElementById']('ability-ui');
            if (_0x49b827)
                _0x49b827['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x16aa83;
            _0x6d2310();
            _0xeda705(_0x16aa83 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x16aa83, !![]);
            let _0x4ef4bf = '';
            if (_0x16aa83 === 'Investigator')
                _0x4ef4bf = 'Investigate\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x16aa83 === 'Tracker')
                _0x4ef4bf = 'Track\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x16aa83 === 'Doctor')
                _0x4ef4bf = 'Heal\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x16aa83 === 'Archer')
                _0x4ef4bf = 'Guard\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x16aa83 === 'Escort')
                _0x4ef4bf = 'Roleblock\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x16aa83 === 'Vigilante')
                _0x4ef4bf = 'Shoot\x20during\x20the\x20first\x2010s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x16aa83 === 'Skinwalker')
                _0x4ef4bf = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x16aa83 === 'Celebrity')
                _0x4ef4bf = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x16aa83 === 'Mayor')
                _0x4ef4bf = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0xeda705(_0x4ef4bf, !![]);
        } else if (_0x3016bb['type'] === 'mayor_reveal') {
            _0x4e5f71['add'](parseInt(_0x3016bb['playerId']));
            _0x44e870();
            _0x6d2310();
        } else if (_0x3016bb['type'] === 'rolelist_update') {
            _0x59e7e9['ROLE_LIST_RAW'] = _0x3016bb['list'] || [];
            _0x260c97(_0x3016bb['list'], _0x3016bb['mode']);
        } else if (_0x3016bb['type'] === 'sound_event') {
            _0x3499ac['onSoundEvent'](_0x3016bb['track']);
        } else if (_0x3016bb['type'] === 'day_fade') {
            _0x178da7 = 0x1;
            _0x387a2c = performance['now']() + 0x3e8;
        } else if (_0x3016bb['type'] === 'player_stats_updated') {
            const _0x239d37 = parseInt(_0x3016bb['id']);
            if (_0x239d37 === _0x49a4f3 && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x3016bb['accountStats']);
            }
            if (_0x41b907[_0x3016bb['id']]) {
                _0x41b907[_0x3016bb['id']]['accountStats'] = _0x3016bb['accountStats'];
            }
            _0x3b1108();
        } else if (_0x3016bb['type'] === 'stats_update') {
            const _0x23dbd7 = window['_FB'];
            if (_0x23dbd7 && _0x23dbd7['_currentUser'] && _0x23dbd7['_userData']) {
                const _0x49e320 = _0x23dbd7['_currentUser']['uid'];
                const _0x7d097b = _0x3016bb['patch'] || {};
                const _0x2e3d4e = _0x23dbd7['_userData'];
                const _0x4491db = {
                    'townWins': (_0x2e3d4e['townWins'] || 0x0) + (_0x7d097b['townWins'] || 0x0),
                    'mafiaWins': (_0x2e3d4e['mafiaWins'] || 0x0) + (_0x7d097b['mafiaWins'] || 0x0),
                    'deaths': (_0x2e3d4e['deaths'] || 0x0) + (_0x7d097b['deaths'] || 0x0),
                    'townLosses': (_0x2e3d4e['townLosses'] || 0x0) + (_0x7d097b['townLosses'] || 0x0),
                    'mafiaLosses': (_0x2e3d4e['mafiaLosses'] || 0x0) + (_0x7d097b['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x23dbd7['_userData'], _0x4491db);
                const _0x505b8d = _0x23dbd7['doc'](_0x23dbd7['db'], 'users', _0x49e320);
                _0x23dbd7['updateDoc'](_0x505b8d, _0x4491db)['catch'](() => {
                });
                if (_0x31f371 && _0x31f371['readyState'] === WebSocket['OPEN']) {
                    _0x31f371['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x4491db
                    }));
                }
                _0x3b1108();
            }
        } else if (_0x3016bb['type'] === 'game_over') {
            _0x3499ac['onStateChange']('LOBBY', ![]);
            _0x260c97([], 'off');
            _0x16aa83 = null;
            _0x32a320['isDead'] = ![];
            _0x4e5f71['clear']();
            _0x59e7e9['CURRENT_TARGET'] = null;
            _0x171250 = null;
            _0x40ff99 = null;
            _0x499b1c = null;
            _0x398c01 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x6d2310();
            _0xeda705('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x3016bb['type'] === 'chat_log') {
            _0xeda705(_0x3016bb['sender'] + ':\x20' + _0x3016bb['text'], ![], !!_0x3016bb['isHost']);
        } else if (_0x3016bb['type'] === 'sys_chat') {
            _0xeda705(_0x3016bb['text'], !![]);
        }
    };
}
function _0xeda705(_0x1ebf59, _0x2e0eb2 = ![], _0x59af33 = ![]) {
    const _0x161d61 = document['getElementById']('chat-log-messages');
    const _0x4a3540 = document['getElementById']('chat-log-ui');
    const _0x28ee53 = _0x4a3540['scrollHeight'] - _0x4a3540['scrollTop'] - _0x4a3540['clientHeight'] < 0x1e;
    const _0x5d8070 = document['createElement']('div');
    _0x5d8070['className'] = 'chat-log-line' + (_0x2e0eb2 ? '\x20sys-msg' : '') + (_0x59af33 ? '\x20host-msg' : '');
    _0x5d8070['innerText'] = _0x1ebf59;
    _0x161d61['appendChild'](_0x5d8070);
    if (_0x28ee53) {
        _0x4a3540['scrollTop'] = _0x4a3540['scrollHeight'];
    }
    if (_0x161d61['childElementCount'] > 0xc8) {
        _0x161d61['removeChild'](_0x161d61['firstChild']);
    }
}
function _0x38f1df(_0x30164d, _0x5d933f, _0x19939f) {
    const _0xcb910f = document['createElement']('canvas');
    _0xcb910f['width'] = _0x19939f;
    _0xcb910f['height'] = _0x19939f;
    const _0x22813d = _0xcb910f['getContext']('2d');
    _0x22813d['imageSmoothingEnabled'] = ![];
    const _0x1bc3c3 = 'assets/' + (_0x30164d || 'body01.png');
    const _0x5c6235 = _0x5d5bd9(_0x1bc3c3);
    if (_0x5c6235['complete'] && _0x5c6235['naturalWidth'] > 0x0)
        _0x22813d['drawImage'](_0x5c6235, 0x0, 0x0, _0x19939f, _0x19939f);
    if (_0x5d933f) {
        const _0xaa94b2 = 'assets/' + _0x5d933f;
        const _0x24e3b5 = _0x5d5bd9(_0xaa94b2);
        if (_0x24e3b5['complete'] && _0x24e3b5['naturalWidth'] > 0x0)
            _0x22813d['drawImage'](_0x24e3b5, 0x0, 0x0, _0x19939f, _0x19939f);
    }
    return _0xcb910f['toDataURL']();
}
let _0x51d662 = '';
function _0x3b1108() {
    const _0x5f194d = document['getElementById']('chat-profile-panel');
    if (!_0x5f194d)
        return;
    const _0x445521 = [];
    if (_0x49a4f3 !== null) {
        const _0x3c9971 = _0x2aa002 || 'body01.png';
        const _0x23b6a6 = _0xb1a49e || 'eyes4.png';
        const _0x4da35f = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x445521['push']({
            'id': _0x49a4f3,
            'name': _0xcb35cc,
            'body': _0x3c9971,
            'eyes': _0x23b6a6,
            'stats': _0x4da35f
        });
    }
    for (const _0x46d45e in _0x41b907) {
        const _0x18c5fb = _0x41b907[_0x46d45e];
        const _0xb45d3f = _0x18c5fb['accountStats'] || null;
        _0x445521['push']({
            'id': parseInt(_0x46d45e),
            'name': _0x18c5fb['name'],
            'body': _0x18c5fb['body'] || 'body01.png',
            'eyes': _0x18c5fb['eyes'] || 'eyes4.png',
            'stats': _0xb45d3f
        });
    }
    const _0x80e39b = _0x445521['map'](_0x3e0b17 => _0x3e0b17['id'] + '_' + _0x3e0b17['name'] + '_' + _0x3e0b17['body'] + '_' + _0x3e0b17['eyes'] + '_' + JSON['stringify'](_0x3e0b17['stats']))['join']('|');
    if (_0x80e39b === _0x51d662)
        return;
    _0x51d662 = _0x80e39b;
    _0x5f194d['innerHTML'] = '';
    let _0x5594d8 = ![];
    for (const _0x1becf9 of _0x445521) {
        _0x5594d8 = !![];
        const _0x5d25ce = _0x38f1df(_0x1becf9['body'], _0x1becf9['eyes'], 0x20);
        const _0x5efe40 = document['createElement']('div');
        _0x5efe40['className'] = 'chat-pfp-entry';
        const _0x4e1b7f = document['createElement']('img');
        _0x4e1b7f['src'] = _0x5d25ce;
        _0x4e1b7f['alt'] = _0x1becf9['name'];
        _0x5efe40['appendChild'](_0x4e1b7f);
        const _0x4357d4 = document['createElement']('div');
        _0x4357d4['className'] = 'chat-pfp-tooltip';
        let _0x4c2cea = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x1becf9['name'] + '</div>';
        const _0x5cbc7b = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x38fd97 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x11663e = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x2bfca6 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x216737 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x392cc0 = (_0x353398, _0xc6d862, _0x2ea543, _0xf1a708) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x353398 + '<span\x20style=\x22flex:1;color:' + _0xf1a708 + ';\x22>' + _0xc6d862 + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x2ea543 + '</span></div>';
        if (_0x1becf9['stats']) {
            _0x4c2cea += _0x392cc0(_0x5cbc7b, 'Town\x20Wins', _0x1becf9['stats']['townWins'] || 0x0, '#55ee77');
            _0x4c2cea += _0x392cc0(_0x38fd97, 'Mafia\x20Wins', _0x1becf9['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x4c2cea += _0x392cc0(_0x11663e, 'Deaths', _0x1becf9['stats']['deaths'] || 0x0, '#aaa');
            _0x4c2cea += _0x392cc0(_0x2bfca6, 'Town\x20Losses', _0x1becf9['stats']['townLosses'] || 0x0, '#6688aa');
            _0x4c2cea += _0x392cc0(_0x216737, 'Mafia\x20Losses', _0x1becf9['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x4c2cea += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x4357d4['innerHTML'] = _0x4c2cea;
        _0x5efe40['appendChild'](_0x4357d4);
        _0x5f194d['appendChild'](_0x5efe40);
    }
    const _0xa67a0 = document['getElementById']('chat-log-wrap');
    if (_0xa67a0) {
        if (_0x5594d8) {
            _0xa67a0['classList']['add']('has-profiles');
            _0x5f194d['style']['display'] = 'flex';
        } else {
            _0xa67a0['classList']['remove']('has-profiles');
            _0x5f194d['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x3b1108;
let _0x306218 = -0x1, _0x523e64 = -0x1, _0x3ef3c8 = -0x1, _0x4a0eeb = 0x0;
function _0x477711() {
    if (!_0x49a4f3 || !_0x31f371 || _0x31f371['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x219984 = performance['now']();
    const _0x2336fa = _0x219984 - _0x4a0eeb;
    const _0x181503 = Math['abs'](_0x32a320['x'] - _0x306218) > 0.05 || Math['abs'](_0x32a320['y'] - _0x523e64) > 0.05 || Math['abs'](_0x32a320['angle'] - _0x3ef3c8) > 0.02;
    if (!_0x181503 && _0x2336fa < 0xc8)
        return;
    if (_0x2336fa < 0x19)
        return;
    _0x4a0eeb = _0x219984;
    _0x306218 = _0x32a320['x'];
    _0x523e64 = _0x32a320['y'];
    _0x3ef3c8 = _0x32a320['angle'];
    if (!_0x49a4f3 || !_0x31f371 || _0x31f371['readyState'] !== WebSocket['OPEN'])
        return;
    _0x31f371['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x32a320['x'],
        'y': _0x32a320['y'],
        'vx': _0x32a320['vx'],
        'vy': _0x32a320['vy'],
        'angle': _0x32a320['angle'],
        'scale': _0x32a320['scale'],
        'teleportId': _0x10518c,
        'clientTimestamp': Date['now']()
    }));
}
function _0x4fe8a5() {
    if (_0x32a320['isDead'])
        return;
    const _0x27aba8 = _0x59e7e9['MAP']['layers']['find'](_0x3b8570 => _0x3b8570['name'] === 'walls');
    if (!_0x27aba8)
        return;
    const _0x27a344 = _0x32a320['scale'];
    const _0x40e677 = _0x32a320['width'] * _0x27a344 / 0x2;
    for (let _0x36360a = 0x0; _0x36360a < 0x3; _0x36360a++) {
        let _0x3f88e6 = _0x32a320['x'] + _0x32a320['width'] / 0x2;
        let _0x43cdfd = _0x32a320['y'] + _0x32a320['height'] / 0x2;
        const _0x291bbf = Math['floor']((_0x3f88e6 - _0x40e677) / _0x59e7e9['MAP']['tileSize']);
        const _0xcacf4 = Math['floor']((_0x3f88e6 + _0x40e677) / _0x59e7e9['MAP']['tileSize']);
        const _0x50639b = Math['floor']((_0x43cdfd - _0x40e677) / _0x59e7e9['MAP']['tileSize']);
        const _0x491996 = Math['floor']((_0x43cdfd + _0x40e677) / _0x59e7e9['MAP']['tileSize']);
        for (let _0x5e8279 = _0x50639b; _0x5e8279 <= _0x491996; _0x5e8279++) {
            for (let _0x1e52f7 = _0x291bbf; _0x1e52f7 <= _0xcacf4; _0x1e52f7++) {
                if (_0x1e52f7 < 0x0 || _0x1e52f7 >= _0x59e7e9['MAP']['columns'] || _0x5e8279 < 0x0 || _0x5e8279 >= _0x59e7e9['MAP']['rows'])
                    continue;
                if (_0x27aba8['data'][_0x5e8279 * _0x59e7e9['MAP']['columns'] + _0x1e52f7] === 0x0)
                    continue;
                const _0x4fc1f2 = _0x1e52f7 * _0x59e7e9['MAP']['tileSize'];
                const _0x4aef8b = _0x5e8279 * _0x59e7e9['MAP']['tileSize'];
                const _0x2c765d = _0x3f88e6 < _0x4fc1f2 ? _0x4fc1f2 : _0x3f88e6 > _0x4fc1f2 + _0x59e7e9['MAP']['tileSize'] ? _0x4fc1f2 + _0x59e7e9['MAP']['tileSize'] : _0x3f88e6;
                const _0x344a9e = _0x43cdfd < _0x4aef8b ? _0x4aef8b : _0x43cdfd > _0x4aef8b + _0x59e7e9['MAP']['tileSize'] ? _0x4aef8b + _0x59e7e9['MAP']['tileSize'] : _0x43cdfd;
                const _0xbaf26f = _0x3f88e6 - _0x2c765d;
                const _0x5f10c8 = _0x43cdfd - _0x344a9e;
                const _0x7f9e7c = Math['sqrt'](_0xbaf26f * _0xbaf26f + _0x5f10c8 * _0x5f10c8);
                if (_0x7f9e7c < _0x40e677) {
                    if (_0x7f9e7c === 0x0) {
                        const _0x1f3dec = _0x3f88e6 - _0x4fc1f2;
                        const _0x418242 = _0x4fc1f2 + _0x59e7e9['MAP']['tileSize'] - _0x3f88e6;
                        const _0x2bdf5e = _0x43cdfd - _0x4aef8b;
                        const _0x147413 = _0x4aef8b + _0x59e7e9['MAP']['tileSize'] - _0x43cdfd;
                        const _0x59b6ad = Math['min'](_0x1f3dec, _0x418242, _0x2bdf5e, _0x147413);
                        if (_0x59b6ad === _0x1f3dec)
                            _0x3f88e6 = _0x4fc1f2 - _0x40e677;
                        else if (_0x59b6ad === _0x418242)
                            _0x3f88e6 = _0x4fc1f2 + _0x59e7e9['MAP']['tileSize'] + _0x40e677;
                        else if (_0x59b6ad === _0x2bdf5e)
                            _0x43cdfd = _0x4aef8b - _0x40e677;
                        else
                            _0x43cdfd = _0x4aef8b + _0x59e7e9['MAP']['tileSize'] + _0x40e677;
                    } else {
                        const _0x4b4428 = _0x40e677 - _0x7f9e7c;
                        _0x3f88e6 += _0xbaf26f / _0x7f9e7c * _0x4b4428;
                        _0x43cdfd += _0x5f10c8 / _0x7f9e7c * _0x4b4428;
                        const _0x1bb7ee = _0x32a320['vx'] * (_0xbaf26f / _0x7f9e7c) + _0x32a320['vy'] * (_0x5f10c8 / _0x7f9e7c);
                        if (_0x1bb7ee < 0x0) {
                            _0x32a320['vx'] -= _0x1bb7ee * (_0xbaf26f / _0x7f9e7c);
                            _0x32a320['vy'] -= _0x1bb7ee * (_0x5f10c8 / _0x7f9e7c);
                        }
                    }
                }
            }
        }
        _0x32a320['x'] = _0x3f88e6 - _0x32a320['width'] / 0x2;
        _0x32a320['y'] = _0x43cdfd - _0x32a320['height'] / 0x2;
    }
}
function _0x1d1e72(_0x4be973) {
    const _0x372ed5 = _0x59e7e9['MAP']['layers']['find'](_0x5ccd9e => _0x5ccd9e['name'] === 'walls');
    if (!_0x372ed5)
        return;
    const _0x60013c = _0x4be973['width'] / 0x2;
    for (let _0x11a4c4 = 0x0; _0x11a4c4 < 0x2; _0x11a4c4++) {
        let _0x60f088 = _0x4be973['x'] + _0x4be973['width'] / 0x2;
        let _0x2d6094 = _0x4be973['y'] + _0x4be973['height'] / 0x2;
        const _0x371deb = Math['floor']((_0x60f088 - _0x60013c) / _0x59e7e9['MAP']['tileSize']);
        const _0x165550 = Math['floor']((_0x60f088 + _0x60013c) / _0x59e7e9['MAP']['tileSize']);
        const _0xd11733 = Math['floor']((_0x2d6094 - _0x60013c) / _0x59e7e9['MAP']['tileSize']);
        const _0x34262a = Math['floor']((_0x2d6094 + _0x60013c) / _0x59e7e9['MAP']['tileSize']);
        for (let _0x144ecb = _0xd11733; _0x144ecb <= _0x34262a; _0x144ecb++) {
            for (let _0x16e312 = _0x371deb; _0x16e312 <= _0x165550; _0x16e312++) {
                if (_0x16e312 < 0x0 || _0x16e312 >= _0x59e7e9['MAP']['columns'] || _0x144ecb < 0x0 || _0x144ecb >= _0x59e7e9['MAP']['rows'])
                    continue;
                if (_0x372ed5['data'][_0x144ecb * _0x59e7e9['MAP']['columns'] + _0x16e312] === 0x0)
                    continue;
                const _0x4f8478 = _0x16e312 * _0x59e7e9['MAP']['tileSize'];
                const _0x34c00 = _0x144ecb * _0x59e7e9['MAP']['tileSize'];
                const _0x2da0cd = _0x60f088 < _0x4f8478 ? _0x4f8478 : _0x60f088 > _0x4f8478 + _0x59e7e9['MAP']['tileSize'] ? _0x4f8478 + _0x59e7e9['MAP']['tileSize'] : _0x60f088;
                const _0x2bd114 = _0x2d6094 < _0x34c00 ? _0x34c00 : _0x2d6094 > _0x34c00 + _0x59e7e9['MAP']['tileSize'] ? _0x34c00 + _0x59e7e9['MAP']['tileSize'] : _0x2d6094;
                const _0x5dfc19 = _0x60f088 - _0x2da0cd;
                const _0x16e225 = _0x2d6094 - _0x2bd114;
                const _0x199d09 = Math['sqrt'](_0x5dfc19 * _0x5dfc19 + _0x16e225 * _0x16e225);
                if (_0x199d09 < _0x60013c) {
                    if (_0x199d09 === 0x0) {
                        const _0x366b4a = _0x60f088 - _0x4f8478;
                        const _0x38d8d8 = _0x4f8478 + _0x59e7e9['MAP']['tileSize'] - _0x60f088;
                        const _0x5f109e = _0x2d6094 - _0x34c00;
                        const _0x46a566 = _0x34c00 + _0x59e7e9['MAP']['tileSize'] - _0x2d6094;
                        const _0x1d7e1e = Math['min'](_0x366b4a, _0x38d8d8, _0x5f109e, _0x46a566);
                        if (_0x1d7e1e === _0x366b4a)
                            _0x60f088 = _0x4f8478 - _0x60013c;
                        else if (_0x1d7e1e === _0x38d8d8)
                            _0x60f088 = _0x4f8478 + _0x59e7e9['MAP']['tileSize'] + _0x60013c;
                        else if (_0x1d7e1e === _0x5f109e)
                            _0x2d6094 = _0x34c00 - _0x60013c;
                        else
                            _0x2d6094 = _0x34c00 + _0x59e7e9['MAP']['tileSize'] + _0x60013c;
                    } else {
                        const _0x15693e = _0x60013c - _0x199d09;
                        _0x60f088 += _0x5dfc19 / _0x199d09 * _0x15693e;
                        _0x2d6094 += _0x16e225 / _0x199d09 * _0x15693e;
                    }
                }
            }
        }
        _0x4be973['x'] = _0x60f088 - _0x4be973['width'] / 0x2;
        _0x4be973['y'] = _0x2d6094 - _0x4be973['height'] / 0x2;
    }
}
function _0x415792(_0x2bcfee) {
    const _0x43a17b = _0x2bcfee['width'] / 0x2;
    for (let _0x5e97c8 = 0x0; _0x5e97c8 < 0x2; _0x5e97c8++) {
        let _0x4980a2 = _0x2bcfee['x'] + _0x2bcfee['width'] / 0x2;
        let _0x5cfeb0 = _0x2bcfee['y'] + _0x2bcfee['height'] / 0x2;
        for (const _0x217fd8 of _0x59e7e9['ENTITIES']) {
            const _0x449709 = _0x4980a2 < _0x217fd8['x'] ? _0x217fd8['x'] : _0x4980a2 > _0x217fd8['x'] + _0x217fd8['w'] ? _0x217fd8['x'] + _0x217fd8['w'] : _0x4980a2;
            const _0x4259c9 = _0x5cfeb0 < _0x217fd8['y'] ? _0x217fd8['y'] : _0x5cfeb0 > _0x217fd8['y'] + _0x217fd8['h'] ? _0x217fd8['y'] + _0x217fd8['h'] : _0x5cfeb0;
            const _0x258c0c = _0x4980a2 - _0x449709;
            const _0x498a5f = _0x5cfeb0 - _0x4259c9;
            const _0x441bd9 = Math['sqrt'](_0x258c0c * _0x258c0c + _0x498a5f * _0x498a5f);
            if (_0x441bd9 < _0x43a17b && _0x441bd9 > 0x0) {
                const _0xe1dd3d = _0x43a17b - _0x441bd9;
                const _0x268ca2 = _0x258c0c / _0x441bd9;
                const _0x3ff053 = _0x498a5f / _0x441bd9;
                _0x4980a2 += _0x268ca2 * _0xe1dd3d;
                _0x5cfeb0 += _0x3ff053 * _0xe1dd3d;
            } else if (_0x441bd9 === 0x0) {
                const _0x24a83a = _0x4980a2 - _0x217fd8['x'];
                const _0x116ec1 = _0x217fd8['x'] + _0x217fd8['w'] - _0x4980a2;
                const _0x325a61 = _0x5cfeb0 - _0x217fd8['y'];
                const _0x509d04 = _0x217fd8['y'] + _0x217fd8['h'] - _0x5cfeb0;
                const _0x3614cc = Math['min'](_0x24a83a, _0x116ec1, _0x325a61, _0x509d04);
                if (_0x3614cc === _0x24a83a)
                    _0x4980a2 = _0x217fd8['x'] - _0x43a17b;
                else if (_0x3614cc === _0x116ec1)
                    _0x4980a2 = _0x217fd8['x'] + _0x217fd8['w'] + _0x43a17b;
                else if (_0x3614cc === _0x325a61)
                    _0x5cfeb0 = _0x217fd8['y'] - _0x43a17b;
                else
                    _0x5cfeb0 = _0x217fd8['y'] + _0x217fd8['h'] + _0x43a17b;
            }
        }
        _0x2bcfee['x'] = _0x4980a2 - _0x2bcfee['width'] / 0x2;
        _0x2bcfee['y'] = _0x5cfeb0 - _0x2bcfee['height'] / 0x2;
    }
}
function _0x17fe58() {
    if (_0x32a320['isDead'])
        return;
    const _0x306a31 = _0x32a320['width'] / 0x2;
    const _0x17303a = _0x32a320['x'] + _0x32a320['width'] / 0x2;
    const _0x3f4ebb = _0x32a320['y'] + _0x32a320['height'] / 0x2;
    for (const _0x45d93f in _0x41b907) {
        const _0x4d7ad1 = _0x41b907[_0x45d93f];
        if (_0x4d7ad1['isDead'])
            continue;
        const _0x4ef047 = _0x4d7ad1['width'] / 0x2;
        const _0x17a66f = _0x306a31 + _0x4ef047;
        const _0x4fb709 = (_0x4d7ad1['renderX'] ?? _0x4d7ad1['x']) + _0x4d7ad1['width'] / 0x2;
        const _0x1960ea = (_0x4d7ad1['renderY'] ?? _0x4d7ad1['y']) + _0x4d7ad1['height'] / 0x2;
        const _0x24e312 = _0x17303a - _0x4fb709;
        const _0x29a588 = _0x3f4ebb - _0x1960ea;
        const _0x3e2655 = Math['sqrt'](_0x24e312 * _0x24e312 + _0x29a588 * _0x29a588);
        if (_0x3e2655 > 0x0 && _0x3e2655 < _0x17a66f) {
            const _0x5ebe66 = _0x17a66f - _0x3e2655;
            const _0x5525cf = _0x24e312 / _0x3e2655;
            const _0x6bafd0 = _0x29a588 / _0x3e2655;
            _0x32a320['x'] += _0x5525cf * (_0x5ebe66 * 0.25);
            _0x32a320['y'] += _0x6bafd0 * (_0x5ebe66 * 0.25);
            _0x4d7ad1['x'] -= _0x5525cf * (_0x5ebe66 * 0.75);
            _0x4d7ad1['y'] -= _0x6bafd0 * (_0x5ebe66 * 0.75);
            _0x1d1e72(_0x4d7ad1);
            _0x415792(_0x4d7ad1);
            if (_0x4d7ad1['renderX'] !== undefined) {
                _0x4d7ad1['renderX'] = _0x4d7ad1['x'];
                _0x4d7ad1['renderY'] = _0x4d7ad1['y'];
            }
            const _0x1f6735 = _0x32a320['vx'] * _0x5525cf + _0x32a320['vy'] * _0x6bafd0;
            if (_0x1f6735 < 0x0) {
                _0x32a320['vx'] -= _0x1f6735 * _0x5525cf * 0.25;
                _0x32a320['vy'] -= _0x1f6735 * _0x6bafd0 * 0.25;
            }
        }
    }
    _0x4fe8a5();
    _0x157114();
}
function _0x157114() {
    if (_0x32a320['isDead'])
        return;
    const _0x198225 = _0x32a320['scale'];
    const _0x59ab52 = _0x32a320['width'] * _0x198225 / 0x2;
    for (let _0x27e991 = 0x0; _0x27e991 < 0x2; _0x27e991++) {
        let _0x5b2060 = _0x32a320['x'] + _0x32a320['width'] / 0x2;
        let _0x4ea79f = _0x32a320['y'] + _0x32a320['height'] / 0x2;
        for (const _0x75dfc2 of _0x59e7e9['ENTITIES']) {
            const _0x57adff = _0x5b2060 < _0x75dfc2['x'] ? _0x75dfc2['x'] : _0x5b2060 > _0x75dfc2['x'] + _0x75dfc2['w'] ? _0x75dfc2['x'] + _0x75dfc2['w'] : _0x5b2060;
            const _0x1c890e = _0x4ea79f < _0x75dfc2['y'] ? _0x75dfc2['y'] : _0x4ea79f > _0x75dfc2['y'] + _0x75dfc2['h'] ? _0x75dfc2['y'] + _0x75dfc2['h'] : _0x4ea79f;
            const _0x1bd1a6 = _0x5b2060 - _0x57adff;
            const _0x1578b3 = _0x4ea79f - _0x1c890e;
            const _0x51c690 = Math['sqrt'](_0x1bd1a6 * _0x1bd1a6 + _0x1578b3 * _0x1578b3);
            if (_0x51c690 < _0x59ab52 && _0x51c690 > 0x0) {
                const _0x13892f = _0x59ab52 - _0x51c690;
                const _0x48e27a = _0x1bd1a6 / _0x51c690;
                const _0x4be9af = _0x1578b3 / _0x51c690;
                _0x5b2060 += _0x48e27a * _0x13892f;
                _0x4ea79f += _0x4be9af * _0x13892f;
                const _0xfdcda6 = _0x32a320['vx'] * _0x48e27a + _0x32a320['vy'] * _0x4be9af;
                if (_0xfdcda6 < 0x0) {
                    _0x32a320['vx'] -= _0xfdcda6 * _0x48e27a;
                    _0x32a320['vy'] -= _0xfdcda6 * _0x4be9af;
                }
            } else if (_0x51c690 === 0x0) {
                const _0x529e2b = _0x5b2060 - _0x75dfc2['x'];
                const _0x1db995 = _0x75dfc2['x'] + _0x75dfc2['w'] - _0x5b2060;
                const _0x36e40f = _0x4ea79f - _0x75dfc2['y'];
                const _0x214174 = _0x75dfc2['y'] + _0x75dfc2['h'] - _0x4ea79f;
                const _0x12f2b7 = Math['min'](_0x529e2b, _0x1db995, _0x36e40f, _0x214174);
                if (_0x12f2b7 === _0x529e2b)
                    _0x5b2060 = _0x75dfc2['x'] - _0x59ab52;
                else if (_0x12f2b7 === _0x1db995)
                    _0x5b2060 = _0x75dfc2['x'] + _0x75dfc2['w'] + _0x59ab52;
                else if (_0x12f2b7 === _0x36e40f)
                    _0x4ea79f = _0x75dfc2['y'] - _0x59ab52;
                else
                    _0x4ea79f = _0x75dfc2['y'] + _0x75dfc2['h'] + _0x59ab52;
            }
        }
        _0x32a320['x'] = _0x5b2060 - _0x32a320['width'] / 0x2;
        _0x32a320['y'] = _0x4ea79f - _0x32a320['height'] / 0x2;
    }
}
function _0x3748e4(_0x3bdcab, _0x5c4206) {
    const _0x1757e4 = _0x59e7e9['MAP']['layers']['find'](_0x320475 => _0x320475['name'] === 'trees');
    if (!_0x1757e4)
        return ![];
    const _0x3fc5b6 = Math['floor'](_0x3bdcab / _0x59e7e9['MAP']['tileSize']);
    const _0x3c72f7 = Math['floor'](_0x5c4206 / _0x59e7e9['MAP']['tileSize']);
    if (_0x3fc5b6 < 0x0 || _0x3fc5b6 >= _0x59e7e9['MAP']['columns'] || _0x3c72f7 < 0x0 || _0x3c72f7 >= _0x59e7e9['MAP']['rows'])
        return ![];
    return _0x1757e4['data'][_0x3c72f7 * _0x59e7e9['MAP']['columns'] + _0x3fc5b6] === 0xb;
}
let _0xb14450 = null;
function _0x58b8f6() {
    const _0x1797fd = _0x59e7e9['MAP'];
    const _0x1bb186 = _0x1797fd['layers']['find'](_0x39714d => _0x39714d['name'] === 'floor2');
    const _0x52a232 = _0x1797fd['layers']['find'](_0xa272b1 => _0xa272b1['name'] === 'walls');
    if (!_0x1bb186 || !_0x52a232) {
        _0xb14450 = null;
        return;
    }
    const _0x3639ec = _0x1797fd['columns'];
    const _0xd23b2b = _0x1797fd['rows'];
    const _0x1eb24c = [];
    const _0x2e7a21 = [];
    const _0x4d6993 = new Set();
    for (let _0x36f11b = 0x0; _0x36f11b < _0xd23b2b; _0x36f11b++) {
        for (let _0x5c4a04 = 0x0; _0x5c4a04 < _0x3639ec; _0x5c4a04++) {
            const _0x5d4c88 = _0x36f11b * _0x3639ec + _0x5c4a04;
            const _0x2d4214 = _0x1bb186['data'][_0x5d4c88];
            const _0x2b34de = _0x52a232['data'][_0x5d4c88];
            if (_0x2d4214 === 0x2 || _0x2d4214 === 0x4) {
                _0x1eb24c['push']({
                    'c': _0x5c4a04,
                    'r': _0x36f11b
                });
                if (_0x2b34de !== 0x0)
                    _0x2e7a21['push']({
                        'c': _0x5c4a04,
                        'r': _0x36f11b
                    });
            }
            if (_0x2b34de !== 0x0)
                _0x4d6993['add'](_0x5c4a04 + ',' + _0x36f11b);
        }
    }
    const _0x4d7e64 = new Set(_0x1eb24c['map'](_0x4b0bb5 => _0x4b0bb5['c'] + ',' + _0x4b0bb5['r']));
    const _0x3e3ed2 = [
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
                c: _0x5622ca,
                r: _0x16a39
            } of _0x1eb24c) {
        for (const [_0xbcfac, _0xcb23b] of _0x3e3ed2) {
            const _0x299c29 = _0x5622ca + _0xbcfac, _0x4a2bd3 = _0x16a39 + _0xcb23b;
            const _0x14c1e9 = _0x299c29 + ',' + _0x4a2bd3;
            if (!_0x4d7e64['has'](_0x14c1e9))
                _0x4d6993['add'](_0x14c1e9);
        }
    }
    _0xb14450 = {
        'wallSet': _0x4d6993,
        'floorTiles': _0x1eb24c,
        'wallTiles': _0x2e7a21,
        'interiorSet': _0x4d7e64
    };
}
function _0x46f802() {
    const _0x45b1bc = _0x59e7e9['MAP']['layers']['find'](_0x585503 => _0x585503['name'] === 'floor2');
    if (!_0x45b1bc)
        return ![];
    const _0x3134b5 = Math['floor']((_0x32a320['x'] + _0x32a320['width'] / 0x2) / _0x59e7e9['MAP']['tileSize']);
    const _0x930df1 = Math['floor']((_0x32a320['y'] + _0x32a320['height'] / 0x2) / _0x59e7e9['MAP']['tileSize']);
    if (_0x3134b5 < 0x0 || _0x3134b5 >= _0x59e7e9['MAP']['columns'] || _0x930df1 < 0x0 || _0x930df1 >= _0x59e7e9['MAP']['rows'])
        return ![];
    const _0x488d78 = _0x45b1bc['data'][_0x930df1 * _0x59e7e9['MAP']['columns'] + _0x3134b5];
    return _0x488d78 === 0x2;
}
let _0x1673bd = null, _0x3617fb = null;
function _0x3ff5b1() {
    if (_0x32a320['isDead']) {
        _0x59e7e9['SHADOW']['polygon'] = null;
        _0x1673bd = null;
        return;
    }
    const _0x38e503 = _0x59e7e9['MAP'];
    const _0x10a07f = _0x59e7e9['SHADOW'];
    const _0x244a41 = _0x38e503['tileSize'];
    if (!_0xb14450)
        _0x58b8f6();
    if (!_0xb14450) {
        _0x10a07f['polygon'] = null;
        _0x1673bd = null;
        return;
    }
    const {
        wallSet: _0x1436d3,
        floorTiles: _0x271a16
    } = _0xb14450;
    if (_0x271a16['length'] === 0x0) {
        _0x10a07f['polygon'] = null;
        _0x1673bd = null;
        return;
    }
    if (!_0x46f802()) {
        _0x10a07f['polygon'] = null;
        _0x1673bd = null;
        return;
    }
    const _0xcdcbf2 = _0x32a320['x'] + _0x32a320['width'] / 0x2;
    const _0x24c24 = _0x32a320['y'] + _0x32a320['height'] / 0x2;
    if (_0x1673bd !== null && _0x10a07f['polygon'] && Math['hypot'](_0xcdcbf2 - _0x1673bd, _0x24c24 - _0x3617fb) < 0x1) {
        return;
    }
    _0x1673bd = _0xcdcbf2;
    _0x3617fb = _0x24c24;
    const _0x4d3108 = Math['floor'](_0xcdcbf2 / _0x244a41);
    const _0x1b1183 = Math['floor'](_0x24c24 / _0x244a41);
    const _0x549ce1 = Math['max'](0x0, _0x4d3108 - 0x6);
    const _0x247afa = Math['min'](_0x38e503['columns'] - 0x1, _0x4d3108 + 0x6);
    const _0x5d042e = Math['max'](0x0, _0x1b1183 - 0x6);
    const _0x286e7b = Math['min'](_0x38e503['rows'] - 0x1, _0x1b1183 + 0x6);
    const _0x146f68 = [];
    for (let _0x49ce4e = _0x5d042e; _0x49ce4e <= _0x286e7b; _0x49ce4e++) {
        for (let _0x3eb506 = _0x549ce1; _0x3eb506 <= _0x247afa; _0x3eb506++) {
            if (_0x1436d3['has'](_0x3eb506 + ',' + _0x49ce4e))
                _0x146f68['push'](_0x3eb506, _0x49ce4e);
        }
    }
    const _0x2ca17d = 0.001;
    const _0x4a30a5 = new Set();
    const _0xf715e9 = [];
    for (let _0x3b8de7 = 0x0; _0x3b8de7 < _0x146f68['length']; _0x3b8de7 += 0x2) {
        const _0x273602 = _0x146f68[_0x3b8de7], _0x3af6c7 = _0x146f68[_0x3b8de7 + 0x1];
        const _0x3c58e2 = [
            _0x273602 * _0x244a41,
            _0x3af6c7 * _0x244a41,
            _0x273602 * _0x244a41 + _0x244a41,
            _0x3af6c7 * _0x244a41,
            _0x273602 * _0x244a41,
            _0x3af6c7 * _0x244a41 + _0x244a41,
            _0x273602 * _0x244a41 + _0x244a41,
            _0x3af6c7 * _0x244a41 + _0x244a41
        ];
        for (let _0x13dfc3 = 0x0; _0x13dfc3 < _0x3c58e2['length']; _0x13dfc3 += 0x2) {
            const _0x30a875 = _0x3c58e2[_0x13dfc3], _0x52f4e0 = _0x3c58e2[_0x13dfc3 + 0x1];
            const _0x5010e2 = Math['atan2'](_0x52f4e0 - _0x24c24, _0x30a875 - _0xcdcbf2);
            const _0x5e7785 = Math['round'](_0x5010e2 * 0x4e20);
            if (!_0x4a30a5['has'](_0x5e7785 - 0x1)) {
                _0x4a30a5['add'](_0x5e7785 - 0x1);
                _0xf715e9['push'](_0x5010e2 - _0x2ca17d);
            }
            if (!_0x4a30a5['has'](_0x5e7785)) {
                _0x4a30a5['add'](_0x5e7785);
                _0xf715e9['push'](_0x5010e2);
            }
            if (!_0x4a30a5['has'](_0x5e7785 + 0x1)) {
                _0x4a30a5['add'](_0x5e7785 + 0x1);
                _0xf715e9['push'](_0x5010e2 + _0x2ca17d);
            }
        }
    }
    _0xf715e9['sort']((_0x33749f, _0x508a76) => _0x33749f - _0x508a76);
    const _0x12f977 = 0xc * _0x244a41;
    const _0x4d94e0 = _0x1ee5c2 => {
        const _0x514d36 = Math['cos'](_0x1ee5c2);
        const _0x1b0314 = Math['sin'](_0x1ee5c2);
        let _0x5f0058 = _0x12f977;
        for (let _0x513275 = 0x0; _0x513275 < _0x146f68['length']; _0x513275 += 0x2) {
            const _0x51bd9c = _0x146f68[_0x513275], _0x509da5 = _0x146f68[_0x513275 + 0x1];
            const _0x1f9e14 = _0x51bd9c * _0x244a41, _0x2444ad = _0x509da5 * _0x244a41;
            const _0x27ab54 = _0x1f9e14 + _0x244a41, _0x227b71 = _0x2444ad + _0x244a41;
            const _0x3734c6 = _0x1f9e14 + _0x244a41 * 0.5, _0x21181b = _0x2444ad + _0x244a41 * 0.5;
            const _0x3d89cf = Math['abs'](_0x3734c6 - _0xcdcbf2) + Math['abs'](_0x21181b - _0x24c24);
            if (_0x3d89cf > _0x5f0058 + _0x244a41 * 1.5)
                continue;
            let _0x5e375a, _0x1aa1b0, _0xb581ee;
            _0x5e375a = -_0x1b0314 * _0x244a41;
            if (Math['abs'](_0x5e375a) >= 1e-10) {
                _0x1aa1b0 = -(_0x2444ad - _0x24c24) * _0x244a41 / _0x5e375a;
                _0xb581ee = ((_0x1f9e14 - _0xcdcbf2) * _0x1b0314 - (_0x2444ad - _0x24c24) * _0x514d36) / _0x5e375a;
                if (_0x1aa1b0 > 0.001 && _0xb581ee >= 0x0 && _0xb581ee <= 0x1 && _0x1aa1b0 < _0x5f0058)
                    _0x5f0058 = _0x1aa1b0;
            }
            _0x5e375a = _0x514d36 * _0x244a41;
            if (Math['abs'](_0x5e375a) >= 1e-10) {
                _0x1aa1b0 = (_0x27ab54 - _0xcdcbf2) * _0x244a41 / _0x5e375a;
                _0xb581ee = ((_0x27ab54 - _0xcdcbf2) * _0x1b0314 - (_0x2444ad - _0x24c24) * _0x514d36) / _0x5e375a;
                if (_0x1aa1b0 > 0.001 && _0xb581ee >= 0x0 && _0xb581ee <= 0x1 && _0x1aa1b0 < _0x5f0058)
                    _0x5f0058 = _0x1aa1b0;
            }
            _0x5e375a = _0x1b0314 * _0x244a41;
            if (Math['abs'](_0x5e375a) >= 1e-10) {
                _0x1aa1b0 = (_0x227b71 - _0x24c24) * _0x244a41 / _0x5e375a;
                _0xb581ee = ((_0x27ab54 - _0xcdcbf2) * _0x1b0314 - (_0x227b71 - _0x24c24) * _0x514d36) / _0x5e375a;
                if (_0x1aa1b0 > 0.001 && _0xb581ee >= 0x0 && _0xb581ee <= 0x1 && _0x1aa1b0 < _0x5f0058)
                    _0x5f0058 = _0x1aa1b0;
            }
            _0x5e375a = -_0x514d36 * _0x244a41;
            if (Math['abs'](_0x5e375a) >= 1e-10) {
                _0x1aa1b0 = -(_0x1f9e14 - _0xcdcbf2) * _0x244a41 / _0x5e375a;
                _0xb581ee = ((_0x1f9e14 - _0xcdcbf2) * _0x1b0314 - (_0x227b71 - _0x24c24) * _0x514d36) / _0x5e375a;
                if (_0x1aa1b0 > 0.001 && _0xb581ee >= 0x0 && _0xb581ee <= 0x1 && _0x1aa1b0 < _0x5f0058)
                    _0x5f0058 = _0x1aa1b0;
            }
        }
        const _0x7edf79 = _0x5f0058 < _0x12f977 ? _0x5f0058 + 0x2 : _0x5f0058;
        return {
            'x': _0xcdcbf2 + _0x514d36 * _0x7edf79,
            'y': _0x24c24 + _0x1b0314 * _0x7edf79
        };
    };
    const _0x34a4fc = [];
    for (let _0x24e79d = 0x0; _0x24e79d < _0xf715e9['length']; _0x24e79d++) {
        const _0x35cab2 = _0x4d94e0(_0xf715e9[_0x24e79d]);
        _0x34a4fc['push'](_0x35cab2['x'], _0x35cab2['y']);
    }
    _0x10a07f['polygon'] = _0x34a4fc['length'] >= 0x6 ? _0x34a4fc : null;
}
function _0x11f1c0(_0xce66f4, _0x74606e, _0x4655df) {
    if (_0x32a320['isDead'])
        return;
    if (!_0xb14450)
        return;
    const {
        floorTiles: _0x574d2e,
        wallTiles: _0xdb5eae
    } = _0xb14450;
    if (_0x574d2e['length'] === 0x0)
        return;
    const _0x13768f = _0x59e7e9['SHADOW'];
    const _0x17b19d = _0x59e7e9['MAP']['tileSize'];
    const _0x41de1a = _0x59e7e9['CAMERA']['width'];
    const _0x33d6e7 = _0x59e7e9['CAMERA']['height'];
    if (!_0x59e7e9['SHADOW']['_buf'] || _0x59e7e9['SHADOW']['_buf']['width'] !== _0x41de1a || _0x59e7e9['SHADOW']['_buf']['height'] !== _0x33d6e7) {
        _0x59e7e9['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x59e7e9['SHADOW']['_buf']['width'] = _0x41de1a;
        _0x59e7e9['SHADOW']['_buf']['height'] = _0x33d6e7;
    }
    const _0x5eba6a = _0x59e7e9['SHADOW']['_buf'];
    const _0x332a48 = _0x5eba6a['getContext']('2d');
    _0x332a48['clearRect'](0x0, 0x0, _0x41de1a, _0x33d6e7);
    const _0x1afe6e = _0x32a320['x'] + _0x32a320['width'] / 0x2;
    const _0x33384b = _0x32a320['y'] + _0x32a320['height'] / 0x2;
    const _0x2f1e85 = Math['floor'](_0x1afe6e / _0x17b19d);
    const _0x1f911f = Math['floor'](_0x33384b / _0x17b19d);
    _0x332a48['fillStyle'] = 'rgba(0,0,0,0.92)';
    _0x332a48['beginPath']();
    for (const {
                c: _0xba747d,
                r: _0x3f8e2d
            } of _0x574d2e) {
        if (Math['abs'](_0xba747d - _0x2f1e85) > 0x7 || Math['abs'](_0x3f8e2d - _0x1f911f) > 0x7)
            continue;
        const _0x4b373c = Math['round'](_0xba747d * _0x17b19d - _0x74606e), _0x5438b4 = Math['round'](_0x3f8e2d * _0x17b19d - _0x4655df);
        if (_0x4b373c > _0x41de1a || _0x5438b4 > _0x33d6e7 || _0x4b373c + _0x17b19d < 0x0 || _0x5438b4 + _0x17b19d < 0x0)
            continue;
        _0x332a48['rect'](_0x4b373c, _0x5438b4, _0x17b19d + 0x1, _0x17b19d + 0x1);
    }
    _0x332a48['fill']();
    if (_0xdb5eae['length'] > 0x0) {
        _0x332a48['globalCompositeOperation'] = 'destination-out';
        _0x332a48['fillStyle'] = 'rgba(0,0,0,1)';
        _0x332a48['beginPath']();
        for (const {
                    c: _0xbf4ec2,
                    r: _0x246970
                } of _0xdb5eae) {
            if (Math['abs'](_0xbf4ec2 - _0x2f1e85) > 0x7 || Math['abs'](_0x246970 - _0x1f911f) > 0x7)
                continue;
            const _0x5364ad = Math['round'](_0xbf4ec2 * _0x17b19d - _0x74606e), _0x2dc9f9 = Math['round'](_0x246970 * _0x17b19d - _0x4655df);
            if (_0x5364ad > _0x41de1a || _0x2dc9f9 > _0x33d6e7 || _0x5364ad + _0x17b19d < 0x0 || _0x2dc9f9 + _0x17b19d < 0x0)
                continue;
            _0x332a48['rect'](_0x5364ad, _0x2dc9f9, _0x17b19d, _0x17b19d);
        }
        _0x332a48['fill']();
        _0x332a48['globalCompositeOperation'] = 'source-over';
    }
    if (_0x13768f['polygon'] && _0x13768f['polygon']['length'] >= 0x6) {
        _0x332a48['globalCompositeOperation'] = 'destination-out';
        const _0xfd8546 = _0x13768f['polygon'];
        _0x332a48['beginPath']();
        _0x332a48['moveTo'](_0xfd8546[0x0] - _0x74606e, _0xfd8546[0x1] - _0x4655df);
        for (let _0x1ac44f = 0x2; _0x1ac44f < _0xfd8546['length']; _0x1ac44f += 0x2) {
            _0x332a48['lineTo'](_0xfd8546[_0x1ac44f] - _0x74606e, _0xfd8546[_0x1ac44f + 0x1] - _0x4655df);
        }
        _0x332a48['closePath']();
        _0x332a48['fill']();
        _0x332a48['globalCompositeOperation'] = 'source-over';
    }
    _0xce66f4['drawImage'](_0x5eba6a, 0x0, 0x0);
}
function _0x328500(_0x436e70) {
    let _0x239c5e = 0x0, _0x56fe7d = 0x0;
    const _0x1ad8f1 = _0x59e7e9['INPUTS']['mouseX'] / _0x59e7e9['SYSTEM']['viewScale'];
    const _0x24a246 = _0x59e7e9['INPUTS']['mouseY'] / _0x59e7e9['SYSTEM']['viewScale'];
    const _0x109506 = _0x32a320['x'] - _0x59e7e9['CAMERA']['x'] + _0x32a320['width'] / 0x2;
    const _0x2d3b24 = _0x32a320['y'] - _0x59e7e9['CAMERA']['y'] + _0x32a320['height'] / 0x2;
    const _0x4ab7d7 = Math['atan2'](_0x24a246 - _0x2d3b24, _0x1ad8f1 - _0x109506);
    if (_0x4374ec !== 0x0 || _0x2f94c7 !== 0x0) {
        _0x239c5e = _0x4374ec;
        _0x56fe7d = _0x2f94c7;
    } else if (_0x781624) {
        let _0x43e000 = 0x0, _0x92d64f = 0x0;
        if (_0x59e7e9['INPUTS']['keys']['w'] || _0x59e7e9['INPUTS']['keys']['arrowup'])
            _0x43e000 += 0x1;
        if (_0x59e7e9['INPUTS']['keys']['s'] || _0x59e7e9['INPUTS']['keys']['arrowdown'])
            _0x43e000 -= 0x1;
        if (_0x59e7e9['INPUTS']['keys']['d'] || _0x59e7e9['INPUTS']['keys']['arrowright'])
            _0x92d64f += 0x1;
        if (_0x59e7e9['INPUTS']['keys']['a'] || _0x59e7e9['INPUTS']['keys']['arrowleft'])
            _0x92d64f -= 0x1;
        if (_0x43e000 !== 0x0 || _0x92d64f !== 0x0) {
            const _0x3a61ff = _0x4ab7d7 + Math['atan2'](_0x92d64f, _0x43e000);
            _0x239c5e = Math['cos'](_0x3a61ff);
            _0x56fe7d = Math['sin'](_0x3a61ff);
        }
    } else {
        if (_0x59e7e9['INPUTS']['keys']['w'] || _0x59e7e9['INPUTS']['keys']['arrowup'])
            _0x56fe7d -= 0x1;
        if (_0x59e7e9['INPUTS']['keys']['s'] || _0x59e7e9['INPUTS']['keys']['arrowdown'])
            _0x56fe7d += 0x1;
        if (_0x59e7e9['INPUTS']['keys']['a'] || _0x59e7e9['INPUTS']['keys']['arrowleft'])
            _0x239c5e -= 0x1;
        if (_0x59e7e9['INPUTS']['keys']['d'] || _0x59e7e9['INPUTS']['keys']['arrowright'])
            _0x239c5e += 0x1;
        const _0x4abaa3 = _0x239c5e !== 0x0 || _0x56fe7d !== 0x0;
        if (_0x4abaa3) {
            const _0x51214c = Math['sqrt'](_0x239c5e * _0x239c5e + _0x56fe7d * _0x56fe7d);
            _0x239c5e /= _0x51214c;
            _0x56fe7d /= _0x51214c;
        }
    }
    if (_0x59e7e9['GAME_STATE'] === 'NIGHT' && _0x16aa83 === 'Skinwalker') {
        if (_0x59e7e9['NIGHT_ABILITY_OPEN'] || !_0x59e7e9['CURRENT_TARGET']) {
            _0x239c5e = 0x0;
            _0x56fe7d = 0x0;
            _0x32a320['vx'] = 0x0;
            _0x32a320['vy'] = 0x0;
            _0x32a320['x'] = _0x59e7e9['MAP']['columns'] * _0x59e7e9['MAP']['tileSize'] / 0x2 - _0x32a320['width'] / 0x2;
            _0x32a320['y'] = _0x59e7e9['MAP']['rows'] * _0x59e7e9['MAP']['tileSize'] / 0x2 - _0x32a320['height'] / 0x2;
        }
    }
    const _0x3906f0 = _0x239c5e !== 0x0 || _0x56fe7d !== 0x0;
    const _0x19383f = (_0x59e7e9['INPUTS']['keys']['shift'] || _0x5b3345 || _0x3e351b) && _0x3906f0;
    _0x32a320['bopTimer'] = _0x19383f ? _0x32a320['bopTimer'] + _0x436e70 : 0x0;
    _0x32a320['scale'] = 0x1 + (_0x32a320['bopTimer'] > 0x0 ? Math['sin'](_0x32a320['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x46ddb0 = Math['pow'](0.001, _0x436e70);
    const _0x229f73 = _0x19383f ? 0x74a : 0x5d5;
    _0x32a320['vx'] += _0x239c5e * _0x229f73 * _0x436e70;
    _0x32a320['vy'] += _0x56fe7d * _0x229f73 * _0x436e70;
    _0x32a320['vx'] *= _0x46ddb0;
    _0x32a320['vy'] *= _0x46ddb0;
    _0x32a320['x'] += _0x32a320['vx'] * _0x436e70;
    _0x32a320['y'] += _0x32a320['vy'] * _0x436e70;
    for (let _0x2c0000 = 0x0; _0x2c0000 < 0x3; _0x2c0000++)
        _0x4fe8a5();
    for (let _0x4d0cd2 = 0x0; _0x4d0cd2 < 0x2; _0x4d0cd2++)
        _0x157114();
    for (let _0x38d6c1 = 0x0; _0x38d6c1 < 0x2; _0x38d6c1++)
        _0x17fe58();
    if (_0x32a320['x'] < 0x0)
        _0x32a320['x'] = 0x0;
    if (_0x32a320['y'] < 0x0)
        _0x32a320['y'] = 0x0;
    if (_0x32a320['x'] + _0x32a320['width'] > _0x59e7e9['MAP']['columns'] * _0x59e7e9['MAP']['tileSize'])
        _0x32a320['x'] = _0x59e7e9['MAP']['columns'] * _0x59e7e9['MAP']['tileSize'] - _0x32a320['width'];
    if (_0x32a320['y'] + _0x32a320['height'] > _0x59e7e9['MAP']['rows'] * _0x59e7e9['MAP']['tileSize'])
        _0x32a320['y'] = _0x59e7e9['MAP']['rows'] * _0x59e7e9['MAP']['tileSize'] - _0x32a320['height'];
    if (_0x6d69cd) {
        _0x32a320['angle'] = _0x398535 + Math['PI'] / 0x2;
    } else if (_0x4374ec !== 0x0 || _0x2f94c7 !== 0x0) {
        _0x32a320['angle'] = Math['atan2'](_0x2f94c7, _0x4374ec) + Math['PI'] / 0x2;
    } else if (!_0x56bd5a) {
        _0x32a320['angle'] = _0x4ab7d7 + Math['PI'] / 0x2;
    }
    const _0x2a77aa = _0x32a320['x'] + _0x32a320['width'] / 0x2 - _0x59e7e9['CAMERA']['width'] / 0x2;
    const _0x4da385 = _0x32a320['y'] + _0x32a320['height'] / 0x2 - _0x59e7e9['CAMERA']['height'] / 0x2;
    if (_0x59e7e9['CAMERA']['x'] === null || isNaN(_0x59e7e9['CAMERA']['x']) || !isFinite(_0x59e7e9['CAMERA']['x'])) {
        _0x59e7e9['CAMERA']['x'] = _0x2a77aa;
        _0x59e7e9['CAMERA']['y'] = _0x4da385;
    } else {
        const _0x2d9e00 = 0x1 - Math['exp'](-Math['max'](0x0, _0x436e70) * 0x28);
        _0x59e7e9['CAMERA']['x'] += (_0x2a77aa - _0x59e7e9['CAMERA']['x']) * _0x2d9e00;
        _0x59e7e9['CAMERA']['y'] += (_0x4da385 - _0x59e7e9['CAMERA']['y']) * _0x2d9e00;
    }
    for (const _0x10de21 in _0x41b907) {
        const _0xadbca4 = _0x41b907[_0x10de21];
        if (_0xadbca4['renderX'] === undefined) {
            _0xadbca4['renderX'] = _0xadbca4['x'];
            _0xadbca4['renderY'] = _0xadbca4['y'];
            _0xadbca4['renderAngle'] = _0xadbca4['angle'] || 0x0;
        }
        const _0x5606d8 = _0xadbca4['x'] + (_0xadbca4['vx'] || 0x0) * _0x436e70;
        const _0x5bf9a8 = _0xadbca4['y'] + (_0xadbca4['vy'] || 0x0) * _0x436e70;
        _0xadbca4['x'] = _0x5606d8;
        _0xadbca4['y'] = _0x5bf9a8;
        const _0x4464d8 = 0x1 - Math['exp'](-_0x436e70 * 0x12);
        const _0x5d166e = _0xadbca4['x'] - _0xadbca4['renderX'], _0xcf97b1 = _0xadbca4['y'] - _0xadbca4['renderY'];
        const _0x555698 = Math['sqrt'](_0x5d166e * _0x5d166e + _0xcf97b1 * _0xcf97b1);
        const _0x334828 = 0xc8;
        if (_0x555698 > _0x334828) {
            _0xadbca4['renderX'] = _0xadbca4['x'] - _0x5d166e / _0x555698 * _0x334828;
            _0xadbca4['renderY'] = _0xadbca4['y'] - _0xcf97b1 / _0x555698 * _0x334828;
        }
        _0xadbca4['renderX'] += (_0xadbca4['x'] - _0xadbca4['renderX']) * _0x4464d8;
        _0xadbca4['renderY'] += (_0xadbca4['y'] - _0xadbca4['renderY']) * _0x4464d8;
        let _0x1e41bb = (_0xadbca4['angle'] || 0x0) - _0xadbca4['renderAngle'];
        while (_0x1e41bb < -Math['PI'])
            _0x1e41bb += Math['PI'] * 0x2;
        while (_0x1e41bb > Math['PI'])
            _0x1e41bb -= Math['PI'] * 0x2;
        _0xadbca4['renderAngle'] += _0x1e41bb * (0x1 - Math['exp'](-_0x436e70 * 0x14));
    }
    if (_0x59e7e9['GAME_STATE'] === 'NIGHT') {
        _0x21c314 = Math['min'](0.6, _0x21c314 + _0x436e70 * 0.5);
    } else {
        _0x21c314 = Math['max'](0x0, _0x21c314 - _0x436e70 * 0.5);
    }
    if (_0x178da7 > 0x0) {
        if (performance['now']() > _0x387a2c) {
            _0x178da7 = Math['max'](0x0, _0x178da7 - _0x436e70 * 0x2);
        }
    }
    _0x3ff5b1();
    _0x477711();
}
function _0x3fd8d0(_0xfea132, _0x1d3063, _0x3b2081, _0x22742e, _0x2adf5d = !![]) {
    _0xfea132['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x187b86 = _0xfea132['measureText'](_0x1d3063)['width'];
    const _0x34be5a = _0x187b86 + 0x18;
    const _0x292070 = 0x1c;
    _0xfea132['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0xfea132['beginPath']();
    if (_0xfea132['roundRect']) {
        _0xfea132['roundRect'](_0x3b2081 - _0x34be5a / 0x2, _0x22742e - _0x292070, _0x34be5a, _0x292070, 0x6);
    } else {
        _0xfea132['rect'](_0x3b2081 - _0x34be5a / 0x2, _0x22742e - _0x292070, _0x34be5a, _0x292070);
    }
    _0xfea132['fill']();
    if (_0x2adf5d) {
        _0xfea132['beginPath']();
        _0xfea132['moveTo'](_0x3b2081 - 0x6, _0x22742e);
        _0xfea132['lineTo'](_0x3b2081 + 0x6, _0x22742e);
        _0xfea132['lineTo'](_0x3b2081, _0x22742e + 0x6);
        _0xfea132['fill']();
    }
    _0xfea132['fillStyle'] = '#ffffff';
    _0xfea132['textAlign'] = 'center';
    _0xfea132['textBaseline'] = 'middle';
    _0xfea132['fillText'](_0x1d3063, _0x3b2081, _0x22742e - _0x292070 / 0x2 + 0x1);
}
function _0x32f811(_0xb52073, _0x30eaf5, _0x1be13e, _0x504b8f) {
    if (!_0x30eaf5 || _0x30eaf5['length'] === 0x0)
        return;
    let _0xbc1741 = _0x504b8f;
    for (let _0x502079 = 0x0; _0x502079 < _0x30eaf5['length']; _0x502079++) {
        _0x3fd8d0(_0xb52073, _0x30eaf5[_0x502079]['text'], _0x1be13e, _0xbc1741, _0x502079 === 0x0);
        _0xbc1741 -= 0x24;
    }
}
function _0x34c9b3() {
    if (!_0x59e7e9['SYSTEM']['isReady'])
        return;
    if (_0x59e7e9['MAP']['layers'] && _0x59e7e9['MAP']['layers']['length'] > 0x0 && _0x400687['complete'] && _0x400687['naturalWidth'] > 0x0) {
        if (!_0x59e7e9['MAP']['_prerenderedWithTileset'] || !_0x59e7e9['MAP']['bgChunks'] || _0x59e7e9['MAP']['bgChunks']['length'] === 0x0) {
            _0x152c3a();
        }
    }
    if (!_0x59e7e9['MAP']['bgChunks'] || _0x59e7e9['MAP']['bgChunks']['length'] === 0x0 || !_0x59e7e9['MAP']['bgChunks'][0x0] || _0x59e7e9['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x44b43e['fillStyle'] = '#000000';
    _0x44b43e['fillRect'](0x0, 0x0, _0x210030['width'], _0x210030['height']);
    _0x44b43e['save']();
    try {
        _0x44b43e['scale'](_0x59e7e9['SYSTEM']['viewScale'], _0x59e7e9['SYSTEM']['viewScale']);
        _0x44b43e['imageSmoothingEnabled'] = ![];
        const _0x1ebaf9 = Math['floor'](_0x59e7e9['CAMERA']['x'] || 0x0);
        const _0xbcab21 = Math['floor'](_0x59e7e9['CAMERA']['y'] || 0x0);
        const _0x3e3034 = Math['max'](0x0, Math['floor'](_0x1ebaf9 / _0x59e7e9['MAP']['chunkSize']));
        const _0x31f145 = Math['min'](_0x59e7e9['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x1ebaf9 + _0x59e7e9['CAMERA']['width']) / _0x59e7e9['MAP']['chunkSize']));
        const _0xb5efb4 = Math['max'](0x0, Math['floor'](_0xbcab21 / _0x59e7e9['MAP']['chunkSize']));
        const _0x2d03a7 = Math['min'](_0x59e7e9['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0xbcab21 + _0x59e7e9['CAMERA']['height']) / _0x59e7e9['MAP']['chunkSize']));
        for (let _0x299faa = _0xb5efb4; _0x299faa <= _0x2d03a7; _0x299faa++)
            for (let _0x5e02df = _0x3e3034; _0x5e02df <= _0x31f145; _0x5e02df++) {
                const _0x29727c = _0x5e02df * _0x59e7e9['MAP']['chunkSize'] - _0x1ebaf9;
                const _0x2496bb = _0x299faa * _0x59e7e9['MAP']['chunkSize'] - _0xbcab21;
                _0x44b43e['drawImage'](_0x59e7e9['MAP']['bgChunks'][_0x299faa][_0x5e02df], _0x29727c, _0x2496bb, _0x59e7e9['MAP']['chunkSize'] + 0x1, _0x59e7e9['MAP']['chunkSize'] + 0x1);
            }
        if (_0x1019b6['complete'] && _0x1019b6['naturalWidth'] > 0x0) {
            const _0x50fcc7 = _0x59e7e9['MAP']['tileSize'];
            const _0x208db0 = _0x50fcc7 * 0xa;
            const _0x389800 = _0x59e7e9['MAP']['columns'] / 0x2 * _0x50fcc7 - _0x208db0 / 0x2 - _0x1ebaf9;
            const _0xc99294 = _0x59e7e9['MAP']['rows'] / 0x2 * _0x50fcc7 - _0x208db0 / 0x2 - _0xbcab21;
            _0x44b43e['imageSmoothingEnabled'] = ![];
            _0x44b43e['drawImage'](_0x1019b6, _0x389800, _0xc99294, _0x208db0, _0x208db0);
        }
        if (_0x5a70da['complete'] && _0x5a70da['naturalWidth'] > 0x0) {
            _0x59e7e9['ENTITIES']['forEach'](_0x1a4529 => {
                if (_0x1a4529['type'] !== 'table')
                    return;
                _0x44b43e['save']();
                _0x44b43e['imageSmoothingEnabled'] = ![];
                const _0xb8db74 = _0x5a70da['naturalWidth'] >= _0x5a70da['naturalHeight'];
                const _0x1d9c8b = _0x1a4529['w'] >= _0x1a4529['h'];
                if (_0xb8db74 === _0x1d9c8b) {
                    _0x44b43e['drawImage'](_0x5a70da, _0x1a4529['x'] - _0x1ebaf9, _0x1a4529['y'] - _0xbcab21, _0x1a4529['w'], _0x1a4529['h']);
                } else {
                    _0x44b43e['translate'](_0x1a4529['x'] - _0x1ebaf9 + _0x1a4529['w'] / 0x2, _0x1a4529['y'] - _0xbcab21 + _0x1a4529['h'] / 0x2);
                    _0x44b43e['rotate'](Math['PI'] / 0x2);
                    _0x44b43e['drawImage'](_0x5a70da, -_0x1a4529['h'] / 0x2, -_0x1a4529['w'] / 0x2, _0x1a4529['h'], _0x1a4529['w']);
                }
                _0x44b43e['restore']();
            });
        } else {
            _0x59e7e9['ENTITIES']['forEach'](_0x5676ba => {
                if (_0x5676ba['type'] !== 'table')
                    return;
                _0x44b43e['save']();
                _0x44b43e['fillStyle'] = '#6b4423';
                _0x44b43e['fillRect'](_0x5676ba['x'] - _0x1ebaf9, _0x5676ba['y'] - _0xbcab21, _0x5676ba['w'], _0x5676ba['h']);
                _0x44b43e['strokeStyle'] = '#422810';
                _0x44b43e['lineWidth'] = 0x3;
                _0x44b43e['strokeRect'](_0x5676ba['x'] - _0x1ebaf9 + 0x1, _0x5676ba['y'] - _0xbcab21 + 0x1, _0x5676ba['w'] - 0x2, _0x5676ba['h'] - 0x2);
                _0x44b43e['fillStyle'] = '#82532a';
                _0x44b43e['fillRect'](_0x5676ba['x'] - _0x1ebaf9 + 0x4, _0x5676ba['y'] - _0xbcab21 + 0x4, _0x5676ba['w'] - 0x8, _0x5676ba['h'] - 0x8);
                _0x44b43e['restore']();
            });
        }
        if (_0x1cbc00) {
            if (_0x59e7e9['MAP']['wallChunks'] && _0x59e7e9['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0xb394a6 = _0xb5efb4; _0xb394a6 <= _0x2d03a7; _0xb394a6++) {
                    for (let _0x2d899c = _0x3e3034; _0x2d899c <= _0x31f145; _0x2d899c++) {
                        if (!_0x59e7e9['MAP']['wallChunks'][_0xb394a6] || !_0x59e7e9['MAP']['wallChunks'][_0xb394a6][_0x2d899c])
                            continue;
                        const _0x514008 = _0x2d899c * _0x59e7e9['MAP']['chunkSize'] - _0x1ebaf9;
                        const _0x590f2e = _0xb394a6 * _0x59e7e9['MAP']['chunkSize'] - _0xbcab21;
                        _0x44b43e['drawImage'](_0x59e7e9['MAP']['wallChunks'][_0xb394a6][_0x2d899c], _0x514008, _0x590f2e, _0x59e7e9['MAP']['chunkSize'] + 0x1, _0x59e7e9['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x3c32e9 = _0xb5efb4; _0x3c32e9 <= _0x2d03a7; _0x3c32e9++) {
                for (let _0x2699c1 = _0x3e3034; _0x2699c1 <= _0x31f145; _0x2699c1++) {
                    const _0x23d273 = _0x2699c1 * _0x59e7e9['MAP']['chunkSize'] - _0x1ebaf9;
                    const _0x56b6c1 = _0x3c32e9 * _0x59e7e9['MAP']['chunkSize'] - _0xbcab21;
                    _0x44b43e['drawImage'](_0x59e7e9['MAP']['fgChunks'][_0x3c32e9][_0x2699c1], _0x23d273, _0x56b6c1, _0x59e7e9['MAP']['chunkSize'] + 0x1, _0x59e7e9['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x1841f0 = _0x59e7e9['GAME_STATE'] === 'NIGHT' && _0x16aa83 === 'Skinwalker' && !_0x32a320['isDead'];
        const _0x11eb5e = _0x32a320['x'] - _0x1ebaf9 + _0x32a320['width'] / 0x2;
        const _0x1ce7f7 = _0x32a320['y'] - _0xbcab21 + _0x32a320['height'] / 0x2;
        const _0x3b0433 = _0x32a320['width'] * _0x32a320['scale'] * 1.3;
        const _0x4c5def = _0x32a320['height'] * _0x32a320['scale'] * 1.3;
        for (const _0x4240c6 in _0x41b907) {
            const _0x4e69e7 = _0x41b907[_0x4240c6];
            if (_0x4e69e7['isDead'])
                continue;
            const _0x1d8cb0 = (_0x4e69e7['renderX'] ?? _0x4e69e7['x']) - _0x1ebaf9 + _0x4e69e7['width'] / 0x2;
            const _0x486ecd = (_0x4e69e7['renderY'] ?? _0x4e69e7['y']) - _0xbcab21 + _0x4e69e7['height'] / 0x2;
            const _0xd429cb = Math['min'](0x2, Math['max'](0.3, _0x4e69e7['scale'] || 0x1));
            const _0x33580e = _0x4e69e7['width'] * _0xd429cb * 1.3;
            const _0x2646d6 = _0x4e69e7['height'] * _0xd429cb * 1.3;
            _0x44b43e['save']();
            try {
                _0x44b43e['translate'](_0x1d8cb0, _0x486ecd);
                _0x44b43e['rotate'](_0x4e69e7['renderAngle'] ?? 0x0);
                if (_0x4e69e7['isDark'])
                    _0x44b43e['filter'] = 'brightness(0)';
                _0x12e860(_0x44b43e, _0x4e69e7['body'], _0x4e69e7['eyes'], _0x33580e, _0x2646d6);
                if (_0x4e5f71['has'](parseInt(_0x4240c6)) && _0x5e3efb['complete'] && _0x5e3efb['naturalWidth'] > 0x0) {
                    _0x44b43e['drawImage'](_0x5e3efb, -_0x33580e / 0x2, -_0x2646d6 / 0x2, _0x33580e, _0x2646d6);
                }
                if (_0x4e69e7['isDark'])
                    _0x44b43e['filter'] = 'none';
            } finally {
                _0x44b43e['restore']();
            }
            if (!_0x3748e4((_0x4e69e7['renderX'] ?? _0x4e69e7['x']) + _0x4e69e7['width'] / 0x2, (_0x4e69e7['renderY'] ?? _0x4e69e7['y']) + _0x4e69e7['height'] / 0x2)) {
                _0x44b43e['textAlign'] = 'center';
                _0x44b43e['lineJoin'] = 'round';
                _0x44b43e['lineWidth'] = 0x3;
                _0x44b43e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x44b43e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x44b43e['fillStyle'] = _0x4e5f71['has'](parseInt(_0x4240c6)) ? '#cc88ff' : '#ffffff';
                const _0x320563 = _0x4e69e7['isDark'] ? '???' : _0x4e69e7['name'] + (_0x4e69e7['isOwner'] ? '\x20[🗝️]' : '');
                _0x44b43e['strokeText'](_0x320563, _0x1d8cb0, _0x486ecd - _0x2646d6 / 0x2 - 0x10);
                _0x44b43e['fillText'](_0x320563, _0x1d8cb0, _0x486ecd - _0x2646d6 / 0x2 - 0x10);
            }
        }
        if (!_0x32a320['isDead']) {
            _0x44b43e['save']();
            try {
                _0x44b43e['translate'](_0x11eb5e, _0x1ce7f7);
                _0x44b43e['rotate'](_0x32a320['angle']);
                if (_0x1841f0)
                    _0x44b43e['filter'] = 'brightness(0)';
                _0x12e860(_0x44b43e, _0x2aa002, _0xb1a49e, _0x3b0433, _0x4c5def);
                if (_0x4e5f71['has'](_0x49a4f3) && _0x5e3efb['complete'] && _0x5e3efb['naturalWidth'] > 0x0) {
                    _0x44b43e['drawImage'](_0x5e3efb, -_0x3b0433 / 0x2, -_0x4c5def / 0x2, _0x3b0433, _0x4c5def);
                }
                if (_0x1841f0)
                    _0x44b43e['filter'] = 'none';
            } finally {
                _0x44b43e['restore']();
            }
            if (!_0x3748e4(_0x32a320['x'] + _0x32a320['width'] / 0x2, _0x32a320['y'] + _0x32a320['height'] / 0x2)) {
                _0x44b43e['textAlign'] = 'center';
                _0x44b43e['lineJoin'] = 'round';
                _0x44b43e['lineWidth'] = 0x3;
                _0x44b43e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x44b43e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x44b43e['fillStyle'] = _0x4e5f71['has'](_0x49a4f3) ? '#cc88ff' : '#ffffff';
                const _0x15d369 = _0x1841f0 ? '???' : _0xcb35cc + (_0x35c9a7 ? '\x20[🗝️]' : '');
                _0x44b43e['strokeText'](_0x15d369, _0x11eb5e, _0x1ce7f7 - _0x4c5def / 0x2 - 0x10);
                _0x44b43e['fillText'](_0x15d369, _0x11eb5e, _0x1ce7f7 - _0x4c5def / 0x2 - 0x10);
            }
        }
        if (_0x59e7e9['MAP']['wallChunks'] && _0x59e7e9['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x2614bb = _0xb5efb4; _0x2614bb <= _0x2d03a7; _0x2614bb++)
                for (let _0x546715 = _0x3e3034; _0x546715 <= _0x31f145; _0x546715++) {
                    if (!_0x59e7e9['MAP']['wallChunks'][_0x2614bb] || !_0x59e7e9['MAP']['wallChunks'][_0x2614bb][_0x546715])
                        continue;
                    const _0xac4dd3 = _0x546715 * _0x59e7e9['MAP']['chunkSize'] - _0x1ebaf9;
                    const _0x7e2067 = _0x2614bb * _0x59e7e9['MAP']['chunkSize'] - _0xbcab21;
                    _0x44b43e['drawImage'](_0x59e7e9['MAP']['wallChunks'][_0x2614bb][_0x546715], _0xac4dd3, _0x7e2067, _0x59e7e9['MAP']['chunkSize'] + 0x1, _0x59e7e9['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x3f9cfa of _0x59e7e9['ENTITIES']) {
            if (_0x3f9cfa['type'] !== 'npc')
                continue;
            const _0x386820 = _0x3f9cfa['x'] - _0x1ebaf9 + _0x3f9cfa['w'] / 0x2;
            const _0x2f32f3 = _0x3f9cfa['y'] - _0xbcab21 + _0x3f9cfa['h'] / 0x2;
            const _0x205433 = _0x3f9cfa['w'];
            const _0x2f79e4 = _0x3f9cfa['h'];
            _0x44b43e['save']();
            _0x44b43e['translate'](_0x386820, _0x2f32f3);
            _0x44b43e['rotate'](_0x3f9cfa['angle'] !== undefined ? _0x3f9cfa['angle'] : 0x0);
            _0x12e860(_0x44b43e, _0x3f9cfa['body'] || 'yanito932.png', _0x3f9cfa['eyes'], _0x205433, _0x2f79e4);
            _0x44b43e['restore']();
            _0x44b43e['textAlign'] = 'center';
            _0x44b43e['lineJoin'] = 'round';
            _0x44b43e['lineWidth'] = 0x3;
            _0x44b43e['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x44b43e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x44b43e['fillStyle'] = '#aaaaaa';
            _0x44b43e['strokeText'](_0x3f9cfa['name'] || 'NPC', _0x386820, _0x2f32f3 - _0x2f79e4 / 0x2 - 0x10);
            _0x44b43e['fillText'](_0x3f9cfa['name'] || 'NPC', _0x386820, _0x2f32f3 - _0x2f79e4 / 0x2 - 0x10);
        }
        if (_0x32a320['isDead']) {
            for (const _0x2d76fa in _0x41b907) {
                const _0x146317 = _0x41b907[_0x2d76fa];
                if (!_0x146317['isDead'])
                    continue;
                const _0x20c79c = (_0x146317['renderX'] ?? _0x146317['x']) - _0x1ebaf9 + _0x146317['width'] / 0x2;
                const _0x54605b = (_0x146317['renderY'] ?? _0x146317['y']) - _0xbcab21 + _0x146317['height'] / 0x2;
                const _0x4a3c60 = _0x146317['width'] * (_0x146317['scale'] || 0x1) * 1.3;
                const _0x3dd5d6 = _0x146317['height'] * (_0x146317['scale'] || 0x1) * 1.3;
                _0x44b43e['save']();
                try {
                    _0x44b43e['translate'](_0x20c79c, _0x54605b);
                    _0x44b43e['rotate'](_0x146317['renderAngle'] ?? 0x0);
                    _0x44b43e['globalAlpha'] = 0.3;
                    _0x12e860(_0x44b43e, _0x146317['body'], _0x146317['eyes'], _0x4a3c60, _0x3dd5d6);
                } finally {
                    _0x44b43e['restore']();
                }
                if (!_0x3748e4((_0x146317['renderX'] ?? _0x146317['x']) + _0x146317['width'] / 0x2, (_0x146317['renderY'] ?? _0x146317['y']) + _0x146317['height'] / 0x2)) {
                    _0x44b43e['save']();
                    _0x44b43e['globalAlpha'] = 0.3;
                    _0x44b43e['textAlign'] = 'center';
                    _0x44b43e['lineJoin'] = 'round';
                    _0x44b43e['lineWidth'] = 0x3;
                    _0x44b43e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x44b43e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x44b43e['fillStyle'] = '#ffffff';
                    const _0x5f3932 = _0x146317['name'] + (_0x146317['isOwner'] ? '\x20[🗝️]' : '');
                    _0x44b43e['strokeText'](_0x5f3932, _0x20c79c, _0x54605b - _0x3dd5d6 / 0x2 - 0x10);
                    _0x44b43e['fillText'](_0x5f3932, _0x20c79c, _0x54605b - _0x3dd5d6 / 0x2 - 0x10);
                    _0x44b43e['restore']();
                }
            }
            _0x44b43e['save']();
            try {
                _0x44b43e['translate'](_0x11eb5e, _0x1ce7f7);
                _0x44b43e['rotate'](_0x32a320['angle']);
                _0x44b43e['globalAlpha'] = 0.3;
                _0x12e860(_0x44b43e, _0x2aa002, _0xb1a49e, _0x3b0433, _0x4c5def);
            } finally {
                _0x44b43e['restore']();
            }
            if (!_0x3748e4(_0x32a320['x'] + _0x32a320['width'] / 0x2, _0x32a320['y'] + _0x32a320['height'] / 0x2)) {
                _0x44b43e['save']();
                _0x44b43e['globalAlpha'] = 0.3;
                _0x44b43e['textAlign'] = 'center';
                _0x44b43e['lineJoin'] = 'round';
                _0x44b43e['lineWidth'] = 0x3;
                _0x44b43e['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x44b43e['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x44b43e['fillStyle'] = '#ffffff';
                const _0x1bd5b6 = _0xcb35cc + (_0x35c9a7 ? '\x20[🗝️]' : '');
                _0x44b43e['strokeText'](_0x1bd5b6, _0x11eb5e, _0x1ce7f7 - _0x4c5def / 0x2 - 0x10);
                _0x44b43e['fillText'](_0x1bd5b6, _0x11eb5e, _0x1ce7f7 - _0x4c5def / 0x2 - 0x10);
                _0x44b43e['restore']();
            }
        }
        for (let _0x4e564e = _0xb5efb4; _0x4e564e <= _0x2d03a7; _0x4e564e++)
            for (let _0x3b2dc6 = _0x3e3034; _0x3b2dc6 <= _0x31f145; _0x3b2dc6++) {
                const _0x48432f = _0x3b2dc6 * _0x59e7e9['MAP']['chunkSize'] - _0x1ebaf9;
                const _0x5945a8 = _0x4e564e * _0x59e7e9['MAP']['chunkSize'] - _0xbcab21;
                _0x44b43e['drawImage'](_0x59e7e9['MAP']['fgChunks'][_0x4e564e][_0x3b2dc6], _0x48432f, _0x5945a8, _0x59e7e9['MAP']['chunkSize'] + 0x1, _0x59e7e9['MAP']['chunkSize'] + 0x1);
            }
        if (_0x59e7e9['EDITOR']['enabled'] && _0x59e7e9['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x2a761a = _0x59e7e9['INPUTS']['mouseX'] / _0x59e7e9['SYSTEM']['viewScale'] + _0x59e7e9['CAMERA']['x'];
            const _0x5f00fd = _0x59e7e9['INPUTS']['mouseY'] / _0x59e7e9['SYSTEM']['viewScale'] + _0x59e7e9['CAMERA']['y'];
            const _0x53d59f = Math['floor'](_0x2a761a / _0x59e7e9['MAP']['tileSize']);
            const _0x415f1d = Math['floor'](_0x5f00fd / _0x59e7e9['MAP']['tileSize']);
            if (_0x53d59f >= 0x0 && _0x53d59f < _0x59e7e9['MAP']['columns'] && _0x415f1d >= 0x0 && _0x415f1d < _0x59e7e9['MAP']['rows']) {
                const _0x1af8d0 = _0x53d59f * _0x59e7e9['MAP']['tileSize'] - _0x1ebaf9;
                const _0x1e4753 = _0x415f1d * _0x59e7e9['MAP']['tileSize'] - _0xbcab21;
                _0x44b43e['save']();
                _0x44b43e['globalAlpha'] = 0.5;
                if (_0x59e7e9['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x2e937d = _0x59e7e9['EDITOR']['selectedTileGid'] - 0x1;
                    _0x44b43e['drawImage'](_0x400687, _0x2e937d % _0x59e7e9['MAP']['tilesetCols'] * _0x59e7e9['MAP']['tileSize'], Math['floor'](_0x2e937d / _0x59e7e9['MAP']['tilesetCols']) * _0x59e7e9['MAP']['tileSize'], _0x59e7e9['MAP']['tileSize'], _0x59e7e9['MAP']['tileSize'], _0x1af8d0, _0x1e4753, _0x59e7e9['MAP']['tileSize'], _0x59e7e9['MAP']['tileSize']);
                } else {
                    _0x44b43e['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x44b43e['fillRect'](_0x1af8d0, _0x1e4753, _0x59e7e9['MAP']['tileSize'], _0x59e7e9['MAP']['tileSize']);
                }
                _0x44b43e['restore']();
            }
        }
        _0x11f1c0(_0x44b43e, _0x1ebaf9, _0xbcab21);
        if (_0x21c314 > 0x0) {
            _0x44b43e['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x21c314 + ')';
            _0x44b43e['fillRect'](0x0, 0x0, _0x59e7e9['CAMERA']['width'], _0x59e7e9['CAMERA']['height']);
        }
        for (const _0x434933 in _0x41b907) {
            const _0x519928 = _0x41b907[_0x434933];
            if (_0x519928['isDead'] && !_0x32a320['isDead'])
                continue;
            const _0x21286c = (_0x519928['renderX'] ?? _0x519928['x']) - _0x1ebaf9 + _0x519928['width'] / 0x2;
            const _0x3da41 = (_0x519928['renderY'] ?? _0x519928['y']) - _0xbcab21 + _0x519928['height'] / 0x2;
            _0x32f811(_0x44b43e, _0x519928['chats'], _0x21286c, _0x3da41 - _0x519928['height'] / 0x2 - 0x20);
        }
        _0x32f811(_0x44b43e, _0x32a320['chats'], _0x11eb5e, _0x1ce7f7 - _0x32a320['height'] / 0x2 - 0x20);
        if (_0x178da7 > 0x0) {
            _0x44b43e['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x178da7 + ')';
            _0x44b43e['fillRect'](0x0, 0x0, _0x59e7e9['CAMERA']['width'], _0x59e7e9['CAMERA']['height']);
        }
    } finally {
        _0x44b43e['restore']();
    }
}
function _0x40ba55(_0x38571b) {
    if (!_0x59e7e9['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x40ba55);
    let _0x3c01b6 = (_0x38571b - _0x59e7e9['SYSTEM']['lastTime']) / 0x3e8;
    _0x59e7e9['SYSTEM']['lastTime'] = _0x38571b;
    if (_0x3c01b6 > 0.1)
        _0x3c01b6 = 0.1;
    if (_0x3c01b6 < 0x0 || isNaN(_0x3c01b6))
        _0x3c01b6 = 0.016;
    if (_0x1cbc00) {
        _0x56ee9b(_0x3c01b6);
        _0x34c9b3();
        return;
    }
    if (!_0x49a4f3)
        return;
    _0x328500(_0x3c01b6);
    _0xd30dc['tick'](_0x38571b);
    _0x34c9b3();
}
function _0x152c3a() {
    if (_0x400687['complete'] && _0x400687['naturalWidth'] > 0x0) {
        _0x59e7e9['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x44cb18 = Math['ceil'](_0x59e7e9['MAP']['columns'] * _0x59e7e9['MAP']['tileSize'] / _0x59e7e9['MAP']['chunkSize']);
    const _0x50869a = Math['ceil'](_0x59e7e9['MAP']['rows'] * _0x59e7e9['MAP']['tileSize'] / _0x59e7e9['MAP']['chunkSize']);
    _0x59e7e9['MAP']['bgChunks'] = [];
    _0x59e7e9['MAP']['fgChunks'] = [];
    _0x59e7e9['MAP']['wallChunks'] = [];
    for (let _0x2ee769 = 0x0; _0x2ee769 < _0x50869a; _0x2ee769++) {
        _0x59e7e9['MAP']['bgChunks'][_0x2ee769] = [];
        _0x59e7e9['MAP']['fgChunks'][_0x2ee769] = [];
        _0x59e7e9['MAP']['wallChunks'][_0x2ee769] = [];
        for (let _0x485dbc = 0x0; _0x485dbc < _0x44cb18; _0x485dbc++) {
            const _0x5c722b = document['createElement']('canvas');
            _0x5c722b['width'] = _0x5c722b['height'] = _0x59e7e9['MAP']['chunkSize'];
            const _0x32fc7e = document['createElement']('canvas');
            _0x32fc7e['width'] = _0x32fc7e['height'] = _0x59e7e9['MAP']['chunkSize'];
            const _0x2ec757 = document['createElement']('canvas');
            _0x2ec757['width'] = _0x2ec757['height'] = _0x59e7e9['MAP']['chunkSize'];
            _0x59e7e9['MAP']['bgChunks'][_0x2ee769][_0x485dbc] = _0x5c722b;
            _0x59e7e9['MAP']['fgChunks'][_0x2ee769][_0x485dbc] = _0x32fc7e;
            _0x59e7e9['MAP']['wallChunks'][_0x2ee769][_0x485dbc] = _0x2ec757;
            _0x3aa7bc(_0x485dbc, _0x2ee769);
        }
    }
}
function _0x3aa7bc(_0x376a40, _0x214b33) {
    const _0x4570e4 = _0x59e7e9['MAP']['bgChunks'][_0x214b33][_0x376a40]['getContext']('2d', { 'alpha': !![] });
    const _0x43bea8 = _0x59e7e9['MAP']['fgChunks'][_0x214b33][_0x376a40]['getContext']('2d', { 'alpha': !![] });
    const _0x1a0bf2 = _0x59e7e9['MAP']['wallChunks'][_0x214b33] && _0x59e7e9['MAP']['wallChunks'][_0x214b33][_0x376a40] ? _0x59e7e9['MAP']['wallChunks'][_0x214b33][_0x376a40]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x4570e4['imageSmoothingEnabled'] = _0x43bea8['imageSmoothingEnabled'] = ![];
    if (_0x1a0bf2)
        _0x1a0bf2['imageSmoothingEnabled'] = ![];
    _0x4570e4['clearRect'](0x0, 0x0, _0x59e7e9['MAP']['chunkSize'], _0x59e7e9['MAP']['chunkSize']);
    _0x43bea8['clearRect'](0x0, 0x0, _0x59e7e9['MAP']['chunkSize'], _0x59e7e9['MAP']['chunkSize']);
    if (_0x1a0bf2)
        _0x1a0bf2['clearRect'](0x0, 0x0, _0x59e7e9['MAP']['chunkSize'], _0x59e7e9['MAP']['chunkSize']);
    const _0x1f5d55 = Math['floor'](_0x376a40 * _0x59e7e9['MAP']['chunkSize'] / _0x59e7e9['MAP']['tileSize']);
    const _0x3b748f = Math['ceil']((_0x376a40 + 0x1) * _0x59e7e9['MAP']['chunkSize'] / _0x59e7e9['MAP']['tileSize']);
    const _0x1fdddb = Math['floor'](_0x214b33 * _0x59e7e9['MAP']['chunkSize'] / _0x59e7e9['MAP']['tileSize']);
    const _0x5ee535 = Math['ceil']((_0x214b33 + 0x1) * _0x59e7e9['MAP']['chunkSize'] / _0x59e7e9['MAP']['tileSize']);
    const _0x111ea3 = 0.5;
    const _0x334864 = _0x59e7e9['MAP']['tileSize'] - _0x111ea3 * 0x2;
    _0x59e7e9['MAP']['layers']['forEach'](_0x411890 => {
        const _0x3ce377 = _0x411890['name'] === 'walls';
        const _0x48d572 = _0x411890['name'] === 'trees' ? _0x43bea8 : _0x3ce377 ? _0x1a0bf2 || _0x4570e4 : _0x4570e4;
        for (let _0x4f2e2b = Math['max'](0x0, _0x1fdddb); _0x4f2e2b < Math['min'](_0x59e7e9['MAP']['rows'], _0x5ee535); _0x4f2e2b++) {
            for (let _0x9f5a8 = Math['max'](0x0, _0x1f5d55); _0x9f5a8 < Math['min'](_0x59e7e9['MAP']['columns'], _0x3b748f); _0x9f5a8++) {
                let _0x3164a1 = _0x411890['data'][_0x4f2e2b * _0x59e7e9['MAP']['columns'] + _0x9f5a8];
                if (_0x411890['name'] === 'floor2' && _0x59e7e9['MAP']['doors'] && _0x59e7e9['MAP']['doors'][_0x4f2e2b * _0x59e7e9['MAP']['columns'] + _0x9f5a8]) {
                    _0x3164a1 = 0x2;
                }
                if (_0x3164a1 > 0x0) {
                    const _0x18ff32 = _0x3164a1 - 0x1;
                    const _0x36d49f = _0x18ff32 % _0x59e7e9['MAP']['tilesetCols'] * _0x59e7e9['MAP']['tileSize'] + _0x111ea3;
                    const _0x235dd7 = Math['floor'](_0x18ff32 / _0x59e7e9['MAP']['tilesetCols']) * _0x59e7e9['MAP']['tileSize'] + _0x111ea3;
                    const _0x550ed6 = _0x9f5a8 * _0x59e7e9['MAP']['tileSize'] - _0x376a40 * _0x59e7e9['MAP']['chunkSize'];
                    const _0x474341 = _0x4f2e2b * _0x59e7e9['MAP']['tileSize'] - _0x214b33 * _0x59e7e9['MAP']['chunkSize'];
                    if (_0x3164a1 === 0x4) {
                        const _0xe90b90 = 0x1;
                        const _0x220a46 = _0xe90b90 % _0x59e7e9['MAP']['tilesetCols'] * _0x59e7e9['MAP']['tileSize'] + _0x111ea3;
                        const _0x11ba1a = Math['floor'](_0xe90b90 / _0x59e7e9['MAP']['tilesetCols']) * _0x59e7e9['MAP']['tileSize'] + _0x111ea3;
                        _0x4570e4['drawImage'](_0x400687, _0x220a46, _0x11ba1a, _0x334864, _0x334864, _0x550ed6, _0x474341, _0x59e7e9['MAP']['tileSize'], _0x59e7e9['MAP']['tileSize']);
                        let _0x19f07b = _0x59e7e9['MAP']['doors'] ? _0x59e7e9['MAP']['doors'][_0x4f2e2b * _0x59e7e9['MAP']['columns'] + _0x9f5a8] : null;
                        if (!_0x19f07b) {
                            const _0x26fdd2 = _0x59e7e9['MAP']['layers']['find'](_0x148bc5 => _0x148bc5['name'] === 'walls');
                            const _0x189926 = _0x4f2e2b > 0x0 && _0x26fdd2 && _0x26fdd2['data'][(_0x4f2e2b - 0x1) * _0x59e7e9['MAP']['columns'] + _0x9f5a8] > 0x0;
                            const _0x3a8346 = _0x4f2e2b < _0x59e7e9['MAP']['rows'] - 0x1 && _0x26fdd2 && _0x26fdd2['data'][(_0x4f2e2b + 0x1) * _0x59e7e9['MAP']['columns'] + _0x9f5a8] > 0x0;
                            const _0x3a38e2 = _0x9f5a8 > 0x0 && _0x26fdd2 && _0x26fdd2['data'][_0x4f2e2b * _0x59e7e9['MAP']['columns'] + _0x9f5a8 - 0x1] > 0x0;
                            const _0x34e277 = _0x9f5a8 < _0x59e7e9['MAP']['columns'] - 0x1 && _0x26fdd2 && _0x26fdd2['data'][_0x4f2e2b * _0x59e7e9['MAP']['columns'] + _0x9f5a8 + 0x1] > 0x0;
                            if (_0x3a38e2 && _0x34e277)
                                _0x19f07b = _0x4f2e2b < _0x59e7e9['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x189926 && _0x3a8346)
                                _0x19f07b = _0x9f5a8 < _0x59e7e9['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x507535 = 0x0;
                        if (_0x19f07b === 'bottom')
                            _0x507535 = Math['PI'] / 0x2;
                        else if (_0x19f07b === 'left')
                            _0x507535 = Math['PI'];
                        else if (_0x19f07b === 'top')
                            _0x507535 = -Math['PI'] / 0x2;
                        else if (_0x19f07b === 'right')
                            _0x507535 = 0x0;
                        if (_0x507535 !== 0x0) {
                            _0x48d572['save']();
                            _0x48d572['translate'](_0x550ed6 + _0x59e7e9['MAP']['tileSize'] / 0x2, _0x474341 + _0x59e7e9['MAP']['tileSize'] / 0x2);
                            _0x48d572['rotate'](_0x507535);
                            _0x48d572['drawImage'](_0x400687, _0x36d49f, _0x235dd7, _0x334864, _0x334864, -_0x59e7e9['MAP']['tileSize'] / 0x2, -_0x59e7e9['MAP']['tileSize'] / 0x2, _0x59e7e9['MAP']['tileSize'], _0x59e7e9['MAP']['tileSize']);
                            _0x48d572['restore']();
                        } else {
                            _0x48d572['drawImage'](_0x400687, _0x36d49f, _0x235dd7, _0x334864, _0x334864, _0x550ed6, _0x474341, _0x59e7e9['MAP']['tileSize'], _0x59e7e9['MAP']['tileSize']);
                        }
                    } else {
                        _0x48d572['drawImage'](_0x400687, _0x36d49f, _0x235dd7, _0x334864, _0x334864, _0x550ed6, _0x474341, _0x59e7e9['MAP']['tileSize'], _0x59e7e9['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0xdb0feb() {
    _0x400687['crossOrigin'] = 'Anonymous';
    _0x400687['onload'] = () => {
        _0x59e7e9['MAP']['tilesetCols'] = 0x3;
        if (_0x59e7e9['MAP']['columns'] > 0x0 && _0x59e7e9['MAP']['layers'] && _0x59e7e9['MAP']['layers']['length'] > 0x0) {
            _0x152c3a();
        }
        _0x720309();
    };
    _0x400687['onerror'] = () => {
        _0x59e7e9['MAP']['tilesetCols'] = 0x1;
        _0x720309();
    };
    _0x400687['src'] = 'assets/tilesheet.png';
    _0x1019b6['crossOrigin'] = 'Anonymous';
    _0x1019b6['onload'] = _0x720309;
    _0x1019b6['onerror'] = () => {
        _0x720309();
    };
    _0x1019b6['src'] = 'assets/center.png';
    _0x5a70da['crossOrigin'] = 'Anonymous';
    _0x5a70da['onload'] = _0x720309;
    _0x5a70da['onerror'] = () => {
        _0x720309();
    };
    _0x5a70da['src'] = 'assets/table.png';
}
function _0x720309() {
    _0x59e7e9['SYSTEM']['assetsLoaded']++;
    if (_0x59e7e9['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x59e7e9['MAP']['columns'] > 0x0 && _0x59e7e9['MAP']['layers'] && _0x59e7e9['MAP']['layers']['length'] > 0x0) {
            _0x152c3a();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x342d79();
    }
}
function _0x5a8462(_0x26af67, _0x22eac4) {
    if (!_0x35c9a7 || !_0x31f371)
        return;
    const _0x1eddaf = _0x26af67 / _0x59e7e9['SYSTEM']['viewScale'] + _0x59e7e9['CAMERA']['x'];
    const _0x59e896 = _0x22eac4 / _0x59e7e9['SYSTEM']['viewScale'] + _0x59e7e9['CAMERA']['y'];
    const _0x27ec9d = Math['floor'](_0x1eddaf / _0x59e7e9['MAP']['tileSize']);
    const _0x4cf52e = Math['floor'](_0x59e896 / _0x59e7e9['MAP']['tileSize']);
    if (_0x27ec9d >= 0x0 && _0x27ec9d < _0x59e7e9['MAP']['columns'] && _0x4cf52e >= 0x0 && _0x4cf52e < _0x59e7e9['MAP']['rows'])
        _0x31f371['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x59e7e9['EDITOR']['selectedLayer'],
            'col': _0x27ec9d,
            'row': _0x4cf52e,
            'gid': _0x59e7e9['EDITOR']['selectedTileGid']
        }));
}
function _0xb7905f() {
    const _0x291721 = document['getElementById']('palette');
    if (!_0x291721 || _0x291721['children']['length'] > 0x0)
        return;
    const _0x2c219c = 0x40;
    const _0x554d4c = _0x400687;
    const _0x420ec3 = document['createElement']('div');
    _0x420ec3['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x409abc = document['createElement']('canvas');
    _0x409abc['width'] = 0xc0;
    _0x409abc['height'] = 0xa0;
    _0x409abc['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x420ec3['appendChild'](_0x409abc);
    const _0x49f8b6 = document['createElement']('div');
    _0x49f8b6['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x420ec3['appendChild'](_0x49f8b6);
    let _0x79cb14 = 0x0, _0x53ce95 = 0x0;
    let _0x1c8529 = ![], _0x2c5168 = 0x0, _0x267b9b = 0x0, _0x3f3f3b = 0x0, _0xf89e88 = 0x0;
    function _0x20dfad() {
        const _0xfcea05 = _0x409abc['getContext']('2d');
        _0xfcea05['clearRect'](0x0, 0x0, _0x409abc['width'], _0x409abc['height']);
        _0xfcea05['imageSmoothingEnabled'] = ![];
        if (_0x554d4c['complete'] && _0x554d4c['naturalWidth'] > 0x0) {
            _0xfcea05['drawImage'](_0x554d4c, _0x79cb14, _0x53ce95, _0x409abc['width'], _0x409abc['height'], 0x0, 0x0, _0x409abc['width'], _0x409abc['height']);
        }
        _0xfcea05['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0xfcea05['lineWidth'] = 0x1;
        const _0x1f7eb0 = Math['floor'](_0x79cb14 / _0x2c219c);
        const _0x22414d = Math['floor'](_0x53ce95 / _0x2c219c);
        for (let _0x1f5f00 = _0x1f7eb0; _0x1f5f00 <= _0x1f7eb0 + Math['ceil'](_0x409abc['width'] / _0x2c219c) + 0x1; _0x1f5f00++) {
            const _0x3166fa = _0x1f5f00 * _0x2c219c - _0x79cb14;
            _0xfcea05['beginPath']();
            _0xfcea05['moveTo'](_0x3166fa, 0x0);
            _0xfcea05['lineTo'](_0x3166fa, _0x409abc['height']);
            _0xfcea05['stroke']();
        }
        for (let _0x477623 = _0x22414d; _0x477623 <= _0x22414d + Math['ceil'](_0x409abc['height'] / _0x2c219c) + 0x1; _0x477623++) {
            const _0x40f483 = _0x477623 * _0x2c219c - _0x53ce95;
            _0xfcea05['beginPath']();
            _0xfcea05['moveTo'](0x0, _0x40f483);
            _0xfcea05['lineTo'](_0x409abc['width'], _0x40f483);
            _0xfcea05['stroke']();
        }
    }
    function _0x4c90c2() {
        const _0x3b6d3a = Math['max'](0x1, Math['ceil'](_0x554d4c['naturalWidth'] / _0x2c219c));
        const _0x1fe200 = _0x59e7e9['EDITOR']['selectedTileGid'];
        if (_0x1fe200 <= 0x0) {
            _0x49f8b6['style']['display'] = 'none';
            return;
        }
        const _0x309402 = _0x1fe200 - 0x1;
        const _0x1c587a = _0x309402 % _0x3b6d3a;
        const _0x26efc4 = Math['floor'](_0x309402 / _0x3b6d3a);
        const _0x4e874b = _0x1c587a * _0x2c219c - _0x79cb14;
        const _0x1977a4 = _0x26efc4 * _0x2c219c - _0x53ce95;
        _0x49f8b6['style']['display'] = 'block';
        _0x49f8b6['style']['left'] = _0x4e874b + 'px';
        _0x49f8b6['style']['top'] = _0x1977a4 + 'px';
    }
    _0x554d4c['onload'] = () => {
        _0x20dfad();
        _0x4c90c2();
    };
    if (_0x554d4c['complete'] && _0x554d4c['naturalWidth'] > 0x0) {
        _0x20dfad();
        _0x4c90c2();
    }
    _0x420ec3['addEventListener']('mousedown', _0x598eb1 => {
        if (_0x598eb1['button'] === 0x0) {
            _0x1c8529 = !![];
            _0x2c5168 = _0x598eb1['clientX'];
            _0x267b9b = _0x598eb1['clientY'];
            _0x3f3f3b = _0x79cb14;
            _0xf89e88 = _0x53ce95;
            _0x420ec3['style']['cursor'] = 'grabbing';
            _0x598eb1['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0xad56d4 => {
        if (!_0x1c8529)
            return;
        const _0x160196 = _0x2c5168 - _0xad56d4['clientX'];
        const _0x46fb28 = _0x267b9b - _0xad56d4['clientY'];
        const _0x3bd276 = Math['max'](0x0, _0x554d4c['naturalWidth'] - _0x409abc['width']);
        const _0x1a36a1 = Math['max'](0x0, _0x554d4c['naturalHeight'] - _0x409abc['height']);
        _0x79cb14 = Math['max'](0x0, Math['min'](_0x3bd276, _0x3f3f3b + _0x160196));
        _0x53ce95 = Math['max'](0x0, Math['min'](_0x1a36a1, _0xf89e88 + _0x46fb28));
        _0x20dfad();
        _0x4c90c2();
    });
    window['addEventListener']('mouseup', _0x58daaf => {
        if (_0x1c8529) {
            _0x1c8529 = ![];
            _0x420ec3['style']['cursor'] = 'grab';
        }
    });
    _0x420ec3['addEventListener']('click', _0x383fc5 => {
        const _0x4a62a0 = _0x420ec3['getBoundingClientRect']();
        const _0xddd997 = _0x383fc5['clientX'] - _0x4a62a0['left'] + _0x79cb14;
        const _0xcff21f = _0x383fc5['clientY'] - _0x4a62a0['top'] + _0x53ce95;
        const _0x3e1b98 = Math['max'](0x1, Math['ceil'](_0x554d4c['naturalWidth'] / _0x2c219c));
        const _0x104752 = Math['floor'](_0xddd997 / _0x2c219c);
        const _0x5db83f = Math['floor'](_0xcff21f / _0x2c219c);
        const _0xe9822d = _0x5db83f * _0x3e1b98 + _0x104752 + 0x1;
        _0x59e7e9['EDITOR']['selectedTileGid'] = _0xe9822d;
        _0x4c90c2();
    });
    _0x291721['appendChild'](_0x420ec3);
    const _0xcc2d44 = document['createElement']('div');
    _0xcc2d44['className'] = 'tile-btn\x20eraser-btn';
    _0xcc2d44['title'] = 'Eraser\x20(gid\x200)';
    _0xcc2d44['onclick'] = () => {
        _0x59e7e9['EDITOR']['selectedTileGid'] = 0x0;
        _0x49f8b6['style']['display'] = 'none';
    };
    _0x291721['appendChild'](_0xcc2d44);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x59e7e9['EDITOR']['enabled'] = !_0x59e7e9['EDITOR']['enabled'];
        const _0x3d8912 = document['getElementById']('editor-tools');
        if (_0x59e7e9['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x3d8912['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x3d8912['style']['display'] = 'none';
        }
    });
    const _0x5a9783 = document['getElementById']('start-game-btn');
    if (_0x5a9783) {
        _0x5a9783['addEventListener']('click', () => {
            if (_0x31f371)
                _0x31f371['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x39ad28 = document['getElementById']('rolelist-toggle-btn');
    if (_0x39ad28) {
        let _0x58beae = 'subalignments';
        _0x39ad28['addEventListener']('click', () => {
            if (_0x58beae === 'subalignments')
                _0x58beae = 'precise';
            else if (_0x58beae === 'precise')
                _0x58beae = 'off';
            else
                _0x58beae = 'subalignments';
            _0x39ad28['innerText'] = 'Role\x20List:\x20' + _0x58beae['charAt'](0x0)['toUpperCase']() + _0x58beae['slice'](0x1);
            if (_0x31f371)
                _0x31f371['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x58beae
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x5e531d => {
        if (_0x5e531d['id'] === 'editor-toggle-btn' || _0x5e531d['id'] === 'start-game-btn' || _0x5e531d['id'] === 'rolelist-toggle-btn')
            return;
        _0x5e531d['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x563085 => _0x563085['classList']['remove']('active'));
            _0x5e531d['classList']['add']('active');
            _0x59e7e9['EDITOR']['selectedLayer'] = _0x5e531d['dataset']['layer'];
        });
    });
}
function _0x1d2773(_0x1f0831) {
    if (_0x31f371)
        _0x31f371['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x1f0831
        }));
}
function _0x3f4fb6(_0x3eafba) {
    if (_0x31f371)
        _0x31f371['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x3eafba
        }));
}
function _0x20f376(_0x247eaf, _0x1b3fad, _0x56c07f, _0x2bae6a) {
    const _0x58a0b2 = document['getElementById']('admin-panel');
    if (_0x58a0b2)
        _0x58a0b2['remove']();
    if (_0x58a0b2 && _0x58a0b2['dataset']['target'] === String(_0x247eaf))
        return;
    const _0x371591 = document['createElement']('div');
    _0x371591['id'] = 'admin-panel';
    _0x371591['dataset']['target'] = String(_0x247eaf);
    _0x371591['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x477ffc = document['createElement']('div');
    _0x477ffc['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x477ffc['textContent'] = _0x1b3fad;
    _0x371591['appendChild'](_0x477ffc);
    const _0x547f5a = document['createElement']('button');
    _0x547f5a['textContent'] = 'Kick';
    _0x547f5a['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x547f5a['onmouseenter'] = () => _0x547f5a['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x547f5a['onmouseleave'] = () => _0x547f5a['style']['background'] = 'transparent';
    _0x547f5a['onclick'] = () => {
        _0x1d2773(_0x247eaf);
        _0x371591['remove']();
    };
    _0x371591['appendChild'](_0x547f5a);
    const _0x1fd2f7 = document['createElement']('button');
    _0x1fd2f7['textContent'] = 'Ban';
    _0x1fd2f7['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x1fd2f7['onmouseenter'] = () => _0x1fd2f7['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x1fd2f7['onmouseleave'] = () => _0x1fd2f7['style']['background'] = 'transparent';
    _0x1fd2f7['onclick'] = () => {
        _0x3f4fb6(_0x247eaf);
        _0x371591['remove']();
    };
    _0x371591['appendChild'](_0x1fd2f7);
    document['body']['appendChild'](_0x371591);
    const _0x45f1dc = _0x371591['offsetWidth'] || 0x91;
    const _0x5879ba = _0x371591['offsetHeight'] || 0x50;
    let _0x2e9b5b = _0x56c07f - _0x45f1dc;
    let _0x2a5638 = _0x2bae6a;
    if (_0x2e9b5b < 0x4)
        _0x2e9b5b = _0x56c07f;
    if (_0x2a5638 + _0x5879ba > window['innerHeight'] - 0x4)
        _0x2a5638 = window['innerHeight'] - _0x5879ba - 0x4;
    _0x371591['style']['left'] = _0x2e9b5b + 'px';
    _0x371591['style']['top'] = _0x2a5638 + 'px';
    const _0x2a7952 = _0x200df4 => {
        if (!_0x371591['contains'](_0x200df4['target'])) {
            _0x371591['remove']();
            document['removeEventListener']('mousedown', _0x2a7952);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x2a7952), 0x0);
}
function _0x44e870() {
    const _0x11f12e = document['getElementById']('leaderboard-list');
    _0x11f12e['innerHTML'] = '';
    const _0x4fa067 = document['createElement']('div');
    _0x4fa067['className'] = 'leaderboard-entry';
    const _0x4239cc = document['createElement']('span');
    _0x4239cc['textContent'] = _0xcb35cc + (_0x35c9a7 ? '\x20[🗝️]' : '');
    if (_0x4e5f71['has'](_0x49a4f3) && !_0x32a320['isDead']) {
        _0x4239cc['style']['color'] = '#cc88ff';
    }
    _0x4fa067['appendChild'](_0x4239cc);
    _0x11f12e['appendChild'](_0x4fa067);
    for (const _0x1898b0 in _0x41b907) {
        const _0x492d9c = document['createElement']('div');
        _0x492d9c['className'] = 'leaderboard-entry';
        const _0x108020 = document['createElement']('span');
        _0x108020['textContent'] = _0x41b907[_0x1898b0]['name'] + (_0x41b907[_0x1898b0]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x4e5f71['has'](parseInt(_0x1898b0)) && !_0x41b907[_0x1898b0]['isDead']) {
            _0x108020['style']['color'] = '#cc88ff';
        }
        _0x492d9c['appendChild'](_0x108020);
        if (_0x35c9a7 && !_0x41b907[_0x1898b0]['isOwner']) {
            const _0x26de4c = _0x41b907[_0x1898b0]['id'];
            const _0x1df62e = _0x41b907[_0x1898b0]['name'];
            _0x492d9c['style']['cursor'] = 'context-menu';
            _0x492d9c['addEventListener']('contextmenu', _0x31f273 => {
                _0x31f273['preventDefault']();
                _0x31f273['stopPropagation']();
                _0x20f376(_0x26de4c, _0x1df62e, _0x31f273['clientX'], _0x31f273['clientY']);
            });
        }
        _0x11f12e['appendChild'](_0x492d9c);
    }
}
window['addEventListener']('resize', _0x342d79);
function _0x342d79() {
    _0x210030['width'] = window['innerWidth'];
    _0x210030['height'] = window['innerHeight'];
    _0x59e7e9['SYSTEM']['viewScale'] = Math['max'](_0x210030['width'] / _0x166029, _0x210030['height'] / _0x57fe64);
    _0x59e7e9['CAMERA']['width'] = _0x210030['width'] / _0x59e7e9['SYSTEM']['viewScale'];
    _0x59e7e9['CAMERA']['height'] = _0x210030['height'] / _0x59e7e9['SYSTEM']['viewScale'];
    _0x44b43e['imageSmoothingEnabled'] = ![];
}
function _0x4556ea(_0x11767c) {
    if (_0x11767c['ctrlKey'] || _0x11767c['metaKey']) {
        if (_0x11767c['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x11767c['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x11767c['code'])) {
            _0x11767c['preventDefault']();
            _0x11767c['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x4556ea, { 'passive': ![] });
window['addEventListener']('keydown', _0x4556ea, { 'passive': ![] });
window['addEventListener']('keydown', _0x5c0249 => {
    const _0x5e3139 = _0x5c0249['key']['toLowerCase']();
    if (_0x5e3139 === 'tab') {
        _0x5c0249['preventDefault']();
        const _0x2c95db = document['getElementById']('will-ui');
        const _0x5361c1 = document['getElementById']('will-input');
        if (_0x2c95db['style']['display'] === 'flex') {
            _0x2c95db['style']['display'] = 'none';
            if (_0x59e7e9['GAME_STATE'] !== 'NIGHT' && _0x31f371)
                _0x31f371['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x5361c1['value']
                }));
            _0x5361c1['blur']();
        } else {
            if (_0x59e7e9['GAME_STATE'] === 'NIGHT') {
                _0xeda705('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x2c95db['style']['display'] = 'flex';
            _0x5361c1['focus']();
            for (let _0x264159 in _0x59e7e9['INPUTS']['keys'])
                _0x59e7e9['INPUTS']['keys'][_0x264159] = ![];
        }
        return;
    }
    if (_0x5c0249['key'] === 'Enter') {
        if (_0x1cbc00) {
            const _0x37133f = document['getElementById']('play-btn');
            if (_0x37133f)
                _0x37133f['click']();
            return;
        }
        if (!_0x31f371 || _0x31f371['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x4adc03 = document['getElementById']('chat-ui');
        const _0x50e1fb = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x50e1fb) {
            const _0x2af79d = _0x50e1fb['value']['trim']();
            if (_0x2af79d['length'] > 0x0) {
                _0x31f371['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x2af79d
                }));
            }
            _0x50e1fb['value'] = '';
            _0x4adc03['style']['display'] = 'none';
            _0x50e1fb['blur']();
        } else {
            _0x4adc03['style']['display'] = 'block';
            _0x50e1fb['focus']();
            for (let _0x2efa32 in _0x59e7e9['INPUTS']['keys'])
                _0x59e7e9['INPUTS']['keys'][_0x2efa32] = ![];
        }
        _0x5c0249['preventDefault']();
        return;
    }
    if (_0x5c0249['key'] === 'Escape') {
        const _0x304d17 = document['getElementById']('role-index-modal');
        if (_0x304d17 && _0x304d17['style']['display'] === 'flex') {
            _0x304d17['style']['display'] = 'none';
            return;
        }
        const _0x6ba868 = document['getElementById']('guide-ui');
        if (_0x6ba868 && _0x6ba868['style']['display'] === 'flex') {
            _0x6ba868['style']['display'] = 'none';
            return;
        }
        const _0x48e8d3 = document['getElementById']('ability-ui');
        if (_0x48e8d3 && _0x48e8d3['style']['display'] === 'block') {
            _0x48e8d3['style']['display'] = 'none';
            return;
        }
        const _0x5ef79b = document['getElementById']('settings-panel');
        if (_0x5ef79b && _0x5ef79b['style']['display'] === 'block') {
            _0x5ef79b['style']['display'] = 'none';
            return;
        }
        const _0x6a4f18 = document['getElementById']('mayor-confirm-dialog');
        if (_0x6a4f18 && _0x6a4f18['style']['display'] === 'flex') {
            _0x6a4f18['style']['display'] = 'none';
            return;
        }
        const _0x108cf3 = document['getElementById']('target-chooser-ui');
        if (_0x108cf3 && _0x108cf3['style']['display'] === 'flex') {
            _0x108cf3['style']['display'] = 'none';
            return;
        }
        const _0x2f348b = document['getElementById']('chat-ui');
        const _0x584948 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x584948) {
            _0x584948['value'] = '';
            _0x2f348b['style']['display'] = 'none';
            _0x584948['blur']();
            _0x5c0249['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x59e7e9['INPUTS']['keys']['hasOwnProperty'](_0x5e3139))
            _0x59e7e9['INPUTS']['keys'][_0x5e3139] = !![];
        if (!_0x31f371 || _0x31f371['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x5e3139 === 'h' && !_0x5c0249['repeat']) {
            const _0x4d51b7 = document['getElementById']('guide-ui');
            if (_0x4d51b7) {
                _0x4d51b7['style']['display'] = _0x4d51b7['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x5e3139 === 't' && !_0x5c0249['repeat']) {
            if (_0x32a320['isDead'])
                return;
            if (_0x16aa83 === 'Mayor') {
                if (_0x4e5f71['has'](_0x49a4f3)) {
                    _0xeda705('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x242d59 = document['getElementById']('mayor-confirm-dialog');
                if (_0x242d59)
                    _0x242d59['style']['display'] = 'flex';
                return;
            }
            if (_0x59e7e9['GAME_STATE'] === 'NIGHT') {
                if (!_0x59e7e9['NIGHT_ABILITY_OPEN']) {
                    _0xeda705('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x3b0ab0 = document['getElementById']('ability-ui');
                if (_0x3b0ab0) {
                    if (_0x3b0ab0['style']['display'] === 'block') {
                        _0x3b0ab0['style']['display'] = 'none';
                    } else {
                        _0x2f596b();
                        _0x3b0ab0['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x59e7e9['GAME_STATE'] === 'DAY_DISCUSS' || _0x59e7e9['GAME_STATE'] === 'DAY_VOTE') {
                _0xeda705('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x5e3139 === 'e' && !_0x32a320['isDead']) {
            const _0x55120d = Date['now']();
            if (!window['_lastDoorSend'] || _0x55120d - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x55120d;
                _0x31f371['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x55f9d3 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x26a906 = _0x55f9d3['key']['toLowerCase']();
        if (_0x59e7e9['INPUTS']['keys']['hasOwnProperty'](_0x26a906))
            _0x59e7e9['INPUTS']['keys'][_0x26a906] = ![];
    }
});
window['addEventListener']('mousemove', _0x595a37 => {
    _0x59e7e9['INPUTS']['mouseX'] = _0x595a37['clientX'];
    _0x59e7e9['INPUTS']['mouseY'] = _0x595a37['clientY'];
    if (_0x59e7e9['INPUTS']['isMouseDown'] && _0x59e7e9['EDITOR']['enabled']) {
        _0x5a8462(_0x595a37['clientX'], _0x595a37['clientY']);
    }
});
window['addEventListener']('mousedown', _0x3d81de => {
    if (_0x3d81de['target']['closest']('#editor-ui') || _0x3d81de['target']['closest']('#leaderboard-ui') || _0x3d81de['target']['closest']('#role-index-btn-wrap') || _0x3d81de['target']['closest']('#role-index-modal') || _0x3d81de['target']['closest']('#chat-log-ui') || _0x3d81de['target']['closest']('#target-chooser-ui') || _0x3d81de['target']['closest']('#guide-ui') || _0x3d81de['target']['closest']('#role-list-ui') || _0x3d81de['target']['closest']('#ability-ui') || _0x3d81de['target']['closest']('#settings-panel') || _0x3d81de['target']['closest']('#mayor-confirm-dialog') || _0x3d81de['target']['closest']('#mobile-action-bar') || _0x3d81de['target']['closest']('#mobile-top-bar') || _0x3d81de['target']['closest']('#mobile-joystick-zone') || _0x3d81de['target']['closest']('#mobile-chat-overlay') || _0x3d81de['target']['closest']('#will-ui') || _0x3d81de['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x3d81de['button'] === 0x0) {
        _0x59e7e9['INPUTS']['isMouseDown'] = !![];
        if (_0x59e7e9['EDITOR']['enabled'])
            _0x5a8462(_0x3d81de['clientX'], _0x3d81de['clientY']);
    }
});
window['addEventListener']('mouseup', _0x33f263 => {
    _0x59e7e9['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x3023dc => {
    if (_0x3023dc['target']['closest']('#settings-btn'))
        return;
    const _0x11b025 = document['getElementById']('leaderboard-list');
    const _0x4d97e6 = document['getElementById']('leaderboard-toggle');
    if (_0x11b025['style']['display'] === 'none') {
        _0x11b025['style']['display'] = 'flex';
        _0x4d97e6['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x11b025['style']['display'] = 'none';
        _0x4d97e6['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x577db6 = document['getElementById']('close-target-btn');
if (_0x577db6) {
    _0x577db6['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x1b8ee5 = document['getElementById']('close-guide-btn');
if (_0x1b8ee5) {
    _0x1b8ee5['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x1458f3 = document['getElementById']('role-list-header');
if (_0x1458f3) {
    _0x1458f3['addEventListener']('click', () => {
        const _0x151c45 = document['getElementById']('role-list-items');
        const _0x21e8bf = document['getElementById']('role-list-toggle');
        if (_0x151c45['style']['display'] === 'none') {
            _0x151c45['style']['display'] = 'flex';
            _0x21e8bf['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x151c45['style']['display'] = 'none';
            _0x21e8bf['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x2b4c55() {
    const _0x9018e5 = document['getElementById']('mobile-joystick-zone');
    const _0x503804 = document['getElementById']('mobile-joystick-base');
    const _0x585e59 = document['getElementById']('mobile-joystick-knob');
    if (_0x9018e5 && _0x503804 && _0x585e59) {
        const _0x327896 = 0x3e;
        const _0xe687b3 = (_0x541c4d, _0xebcdbe) => {
            const _0x4634d5 = _0x503804['getBoundingClientRect']();
            const _0xd2ce82 = _0x4634d5['left'] + _0x4634d5['width'] / 0x2;
            const _0x25465a = _0x4634d5['top'] + _0x4634d5['height'] / 0x2;
            const _0x4213e0 = _0x541c4d - _0xd2ce82;
            const _0x8460e7 = _0xebcdbe - _0x25465a;
            const _0x262da1 = Math['hypot'](_0x4213e0, _0x8460e7);
            if (_0x262da1 === 0x0) {
                _0x4374ec = 0x0;
                _0x2f94c7 = 0x0;
                _0x3e351b = ![];
                _0x585e59['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x3a95ca = Math['min'](_0x262da1, _0x327896);
            const _0x2b7b4d = _0x4213e0 / _0x262da1 * _0x3a95ca;
            const _0xc1512 = _0x8460e7 / _0x262da1 * _0x3a95ca;
            _0x4374ec = _0x2b7b4d / _0x327896;
            _0x2f94c7 = _0xc1512 / _0x327896;
            _0x3e351b = _0x262da1 >= _0x327896 * 0.75;
            _0x585e59['style']['transform'] = 'translate(' + _0x2b7b4d + 'px,\x20' + _0xc1512 + 'px)';
        };
        const _0x401956 = _0x4b1e91 => {
            for (let _0x1e860e = 0x0; _0x1e860e < _0x4b1e91['changedTouches']['length']; _0x1e860e++) {
                const _0x41f7ec = _0x4b1e91['changedTouches'][_0x1e860e];
                if (_0x20922e === null) {
                    _0x20922e = _0x41f7ec['identifier'];
                    _0x1686a1 = !![];
                    _0xe687b3(_0x41f7ec['clientX'], _0x41f7ec['clientY']);
                    break;
                }
            }
        };
        const _0xab7336 = _0x429cfa => {
            for (let _0x22a6a8 = 0x0; _0x22a6a8 < _0x429cfa['changedTouches']['length']; _0x22a6a8++) {
                const _0x1c1bd0 = _0x429cfa['changedTouches'][_0x22a6a8];
                if (_0x1c1bd0['identifier'] === _0x20922e) {
                    _0xe687b3(_0x1c1bd0['clientX'], _0x1c1bd0['clientY']);
                    break;
                }
            }
        };
        const _0x3393a3 = _0x3b7165 => {
            for (let _0x31686b = 0x0; _0x31686b < _0x3b7165['changedTouches']['length']; _0x31686b++) {
                const _0x38b4a9 = _0x3b7165['changedTouches'][_0x31686b];
                if (_0x38b4a9['identifier'] === _0x20922e) {
                    _0x20922e = null;
                    _0x1686a1 = ![];
                    _0x4374ec = 0x0;
                    _0x2f94c7 = 0x0;
                    _0x3e351b = ![];
                    _0x585e59['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x9018e5['addEventListener']('touchstart', _0x10c9cd => {
            _0x10c9cd['preventDefault']();
            _0x401956(_0x10c9cd);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0xab7336, { 'passive': !![] });
        window['addEventListener']('touchend', _0x3393a3, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x3393a3, { 'passive': !![] });
    }
    const _0x29371f = (_0x3d010c, _0x4eeb4f) => {
        const _0x2ba568 = _0x3d010c / _0x59e7e9['SYSTEM']['viewScale'];
        const _0x27098c = _0x4eeb4f / _0x59e7e9['SYSTEM']['viewScale'];
        const _0x3c2c05 = _0x32a320['x'] - _0x59e7e9['CAMERA']['x'] + _0x32a320['width'] / 0x2;
        const _0x33ece6 = _0x32a320['y'] - _0x59e7e9['CAMERA']['y'] + _0x32a320['height'] / 0x2;
        _0x398535 = Math['atan2'](_0x27098c - _0x33ece6, _0x2ba568 - _0x3c2c05);
        _0x6d69cd = !![];
        _0x59e7e9['INPUTS']['mouseX'] = _0x3d010c;
        _0x59e7e9['INPUTS']['mouseY'] = _0x4eeb4f;
    };
    _0x210030['addEventListener']('touchstart', _0x5b5b0c => {
        if (_0x1cbc00)
            return;
        for (let _0x4464a2 = 0x0; _0x4464a2 < _0x5b5b0c['changedTouches']['length']; _0x4464a2++) {
            const _0x50e6d4 = _0x5b5b0c['changedTouches'][_0x4464a2];
            if (_0x50e6d4['identifier'] !== _0x20922e && _0x423b30 === null) {
                _0x423b30 = _0x50e6d4['identifier'];
                _0x29371f(_0x50e6d4['clientX'], _0x50e6d4['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x210030['addEventListener']('touchmove', _0x4da479 => {
        if (_0x1cbc00)
            return;
        for (let _0x4272cd = 0x0; _0x4272cd < _0x4da479['changedTouches']['length']; _0x4272cd++) {
            const _0x5c93e9 = _0x4da479['changedTouches'][_0x4272cd];
            if (_0x5c93e9['identifier'] === _0x423b30) {
                _0x29371f(_0x5c93e9['clientX'], _0x5c93e9['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x5bc694 = _0x5ef2a4 => {
        for (let _0x13b4b2 = 0x0; _0x13b4b2 < _0x5ef2a4['changedTouches']['length']; _0x13b4b2++) {
            const _0x21afb7 = _0x5ef2a4['changedTouches'][_0x13b4b2];
            if (_0x21afb7['identifier'] === _0x423b30) {
                _0x423b30 = null;
                _0x6d69cd = ![];
                break;
            }
        }
    };
    _0x210030['addEventListener']('touchend', _0x5bc694, { 'passive': !![] });
    _0x210030['addEventListener']('touchcancel', _0x5bc694, { 'passive': !![] });
    const _0x241868 = document['getElementById']('mob-sprint-btn');
    if (_0x241868) {
        _0x241868['addEventListener']('click', _0x2b2593 => {
            _0x2b2593['stopPropagation']();
            _0x5b3345 = !_0x5b3345;
            _0x241868['classList']['toggle']('active', _0x5b3345);
        });
    }
    const _0x255974 = document['getElementById']('mob-interact-btn');
    if (_0x255974) {
        _0x255974['addEventListener']('click', _0x5e3cfa => {
            _0x5e3cfa['stopPropagation']();
            if (!_0x32a320['isDead']) {
                const _0x2367cc = Date['now']();
                if (!window['_lastDoorSend'] || _0x2367cc - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x2367cc;
                    if (_0x31f371 && _0x31f371['readyState'] === WebSocket['OPEN'])
                        _0x31f371['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x1e9e57 = document['getElementById']('mob-ability-btn');
    if (_0x1e9e57) {
        _0x1e9e57['addEventListener']('click', _0x542594 => {
            _0x542594['stopPropagation']();
            if (_0x32a320['isDead'])
                return;
            if (_0x16aa83 === 'Mayor') {
                if (_0x4e5f71['has'](_0x49a4f3)) {
                    _0xeda705('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x52279e = document['getElementById']('mayor-confirm-dialog');
                if (_0x52279e)
                    _0x52279e['style']['display'] = 'flex';
                return;
            }
            if (_0x59e7e9['GAME_STATE'] === 'NIGHT') {
                if (!_0x59e7e9['NIGHT_ABILITY_OPEN']) {
                    _0xeda705('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x40e5d6 = document['getElementById']('ability-ui');
                if (_0x40e5d6) {
                    if (_0x40e5d6['style']['display'] === 'block') {
                        _0x40e5d6['style']['display'] = 'none';
                    } else {
                        _0x2f596b();
                        _0x40e5d6['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x59e7e9['GAME_STATE'] === 'DAY_DISCUSS' || _0x59e7e9['GAME_STATE'] === 'DAY_VOTE') {
                _0xeda705('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2010\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x4b7101 = document['getElementById']('mob-will-btn');
    const _0x5adb39 = document['getElementById']('will-ui');
    const _0x5cf74c = document['getElementById']('will-input');
    const _0x2e9e66 = document['getElementById']('close-will-btn');
    const _0x2a96fe = () => {
        if (!_0x5adb39)
            return;
        if (_0x5adb39['style']['display'] === 'flex') {
            _0x5adb39['style']['display'] = 'none';
            if (_0x59e7e9['GAME_STATE'] !== 'NIGHT' && _0x31f371 && _0x31f371['readyState'] === WebSocket['OPEN'] && _0x5cf74c) {
                _0x31f371['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x5cf74c['value']
                }));
            }
            if (_0x5cf74c)
                _0x5cf74c['blur']();
        } else {
            if (_0x59e7e9['GAME_STATE'] === 'NIGHT') {
                _0xeda705('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x5adb39['style']['display'] = 'flex';
            if (_0x5cf74c)
                _0x5cf74c['focus']();
        }
    };
    if (_0x4b7101)
        _0x4b7101['addEventListener']('click', _0x3a4fa8 => {
            _0x3a4fa8['stopPropagation']();
            _0x2a96fe();
        });
    if (_0x2e9e66)
        _0x2e9e66['addEventListener']('click', _0x4048c1 => {
            _0x4048c1['stopPropagation']();
            _0x2a96fe();
        });
    const _0x53386c = document['getElementById']('mob-chat-btn');
    const _0x4d7625 = document['getElementById']('mobile-chat-overlay');
    const _0x2094a8 = document['getElementById']('mobile-chat-input');
    const _0x4da62e = document['getElementById']('mobile-chat-send');
    const _0x5272dd = document['getElementById']('mobile-chat-cancel');
    const _0x42f709 = () => {
        if (!_0x4d7625 || !_0x2094a8)
            return;
        _0x4d7625['style']['display'] = 'flex';
        _0x2094a8['value'] = '';
        _0x2094a8['focus']();
    };
    const _0x4c0e14 = () => {
        if (!_0x4d7625 || !_0x2094a8)
            return;
        _0x4d7625['style']['display'] = 'none';
        _0x2094a8['blur']();
    };
    const _0x487914 = () => {
        if (!_0x2094a8)
            return;
        const _0x369e18 = _0x2094a8['value']['trim']();
        if (_0x369e18['length'] > 0x0 && _0x31f371 && _0x31f371['readyState'] === WebSocket['OPEN']) {
            _0x31f371['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x369e18
            }));
        }
        _0x2094a8['value'] = '';
        _0x4c0e14();
    };
    if (_0x53386c)
        _0x53386c['addEventListener']('click', _0x2c266c => {
            _0x2c266c['stopPropagation']();
            _0x42f709();
        });
    if (_0x4da62e)
        _0x4da62e['addEventListener']('click', _0x48a313 => {
            _0x48a313['stopPropagation']();
            _0x487914();
        });
    if (_0x5272dd)
        _0x5272dd['addEventListener']('click', _0x4770aa => {
            _0x4770aa['stopPropagation']();
            _0x4c0e14();
        });
    if (_0x2094a8) {
        _0x2094a8['addEventListener']('keydown', _0x331ecf => {
            if (_0x331ecf['key'] === 'Enter') {
                _0x331ecf['preventDefault']();
                _0x487914();
            } else if (_0x331ecf['key'] === 'Escape') {
                _0x4c0e14();
            }
        });
    }
    const _0x125420 = document['getElementById']('mob-top-chat');
    if (_0x125420)
        _0x125420['addEventListener']('click', _0x267f3d => {
            _0x267f3d['stopPropagation']();
            _0x42f709();
        });
    const _0x3662b4 = document['getElementById']('mob-top-will');
    if (_0x3662b4)
        _0x3662b4['addEventListener']('click', _0x52abec => {
            _0x52abec['stopPropagation']();
            _0x2a96fe();
        });
    const _0x5c9677 = document['getElementById']('mob-top-roles');
    if (_0x5c9677) {
        _0x5c9677['addEventListener']('click', _0x4158db => {
            _0x4158db['stopPropagation']();
            const _0x23eab9 = document['getElementById']('role-list-ui');
            const _0x305c3b = document['getElementById']('leaderboard-ui');
            if (_0x305c3b)
                _0x305c3b['style']['display'] = 'none';
            if (_0x23eab9)
                _0x23eab9['style']['display'] = _0x23eab9['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x5b61c3 = document['getElementById']('mob-top-players');
    if (_0x5b61c3) {
        _0x5b61c3['addEventListener']('click', _0x2015cd => {
            _0x2015cd['stopPropagation']();
            const _0x1523c3 = document['getElementById']('leaderboard-ui');
            const _0x209523 = document['getElementById']('role-list-ui');
            if (_0x209523)
                _0x209523['style']['display'] = 'none';
            if (_0x1523c3)
                _0x1523c3['style']['display'] = _0x1523c3['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x19f87f = document['getElementById']('mob-top-help');
    if (_0x19f87f) {
        _0x19f87f['addEventListener']('click', _0x4ecff7 => {
            _0x4ecff7['stopPropagation']();
            const _0xef93fc = document['getElementById']('guide-ui');
            if (_0xef93fc)
                _0xef93fc['style']['display'] = _0xef93fc['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x56bd5a) {
            _0x56bd5a = !![];
            _0x335003();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
