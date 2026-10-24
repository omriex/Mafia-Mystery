document['addEventListener']('contextmenu', _0x390d6f => _0x390d6f['preventDefault']());
const _0x404121 = {
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
let _0x4a146c = '';
function _0x28d51a(_0x27b8e7, _0x434af0) {
    const _0x4d913d = document['getElementById']('role-list-ui');
    const _0x3c1e8b = document['getElementById']('role-list-items');
    if (!_0x4d913d || !_0x3c1e8b)
        return;
    if (!_0x434af0 || _0x434af0 === 'off' || !_0x27b8e7 || _0x27b8e7['length'] === 0x0) {
        _0x4d913d['style']['display'] = 'none';
        return;
    }
    const _0x403f02 = _0x434af0 + '|' + JSON['stringify'](_0x27b8e7);
    if (_0x403f02 === _0x4a146c)
        return;
    _0x4a146c = _0x403f02;
    const _0x25c7b9 = document['getElementById']('role-tooltip');
    if (_0x25c7b9) {
        _0x25c7b9['style']['visibility'] = 'hidden';
        _0x25c7b9['style']['opacity'] = '0';
    }
    _0x4d913d['style']['display'] = 'flex';
    _0x3c1e8b['innerHTML'] = '';
    _0x27b8e7['forEach'](_0x21c548 => {
        const _0x165868 = document['createElement']('div');
        _0x165868['className'] = 'role-list-entry';
        const _0x34e3de = _0x21c548['name']['includes']('Mafia') || _0x21c548['name'] === 'Skinwalker';
        _0x165868['classList']['add'](_0x34e3de ? 'mafia' : 'town');
        if (_0x434af0 === 'precise' && _0x21c548['isDead']) {
            _0x165868['classList']['remove']('town', 'mafia');
            _0x165868['classList']['add']('dead');
            _0x165868['innerHTML'] = '<span>' + _0x21c548['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0xf53dc3 = _0x21c548['count'] !== undefined && _0x21c548['count'] !== null ? _0x21c548['count'] + 'x\x20' : '';
            _0x165868['innerHTML'] = '<span>' + _0xf53dc3 + _0x21c548['name'] + '</span>';
        }
        if (_0x434af0 === 'subalignments' && _0x404121[_0x21c548['name']]) {
            _0x165868['style']['cursor'] = 'pointer';
            _0x165868['addEventListener']('mouseenter', () => {
                const _0x31f588 = document['getElementById']('role-tooltip');
                if (!_0x31f588)
                    return;
                const _0x44abd = _0x404121[_0x21c548['name']]['join'](',\x20');
                _0x31f588['innerHTML'] = '';
                const _0x29abf6 = document['createElement']('span');
                _0x29abf6['style']['color'] = '#ffcc00';
                _0x29abf6['textContent'] = _0x21c548['name'];
                _0x31f588['appendChild'](_0x29abf6);
                _0x31f588['appendChild'](document['createElement']('br'));
                _0x31f588['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x44abd));
                const _0xf59ccc = _0x165868['getBoundingClientRect']();
                _0x31f588['style']['left'] = _0xf59ccc['left'] - 0xeb + 'px';
                _0x31f588['style']['top'] = _0xf59ccc['top'] + 'px';
                _0x31f588['style']['display'] = 'block';
                _0x31f588['style']['visibility'] = 'visible';
                _0x31f588['style']['opacity'] = '1';
            });
            _0x165868['addEventListener']('mouseleave', () => {
                const _0x517271 = document['getElementById']('role-tooltip');
                if (_0x517271) {
                    _0x517271['style']['display'] = 'none';
                    _0x517271['style']['visibility'] = 'hidden';
                    _0x517271['style']['opacity'] = '0';
                }
            });
        }
        _0x3c1e8b['appendChild'](_0x165868);
    });
}
let _0x942c1a = null;
let _0x290a14 = null;
const _0x4e0e2c = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x349c55 = 'Player???';
let _0x15a227 = ![];
let _0x37c154 = {};
let _0x1a5452 = null;
let _0x53e751 = 0x0;
let _0x4821d6 = 0x0;
let _0x41c3a5 = new Set();
let _0x59bde1 = ![];
let _0x9db7a5 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x2addbf = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x3dc2df = ![];
let _0xf94358 = null;
let _0x5405a6 = 0x0;
let _0x5c42dd = 0x0;
let _0x5e3b9e = ![];
let _0x3674bf = ![];
let _0x262c26 = 0x0;
let _0x23aa49 = null;
let _0x47f18b = ![];
const _0x442877 = ((() => {
    const _0x599942 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3'
    };
    let _0x116da2 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x4f2714 = 0x320;
    const _0x54f211 = {};
    const _0x10af6c = {};
    let _0x8a53b7 = null;
    let _0x81b0e9 = _0x116da2 === 0x0;
    let _0x2390d2 = ![];
    for (const [_0x27974a, _0x379602] of Object['entries'](_0x599942)) {
        const _0x409b03 = new Audio(_0x379602);
        _0x409b03['loop'] = !![];
        _0x409b03['volume'] = 0x0;
        _0x409b03['preload'] = 'auto';
        _0x54f211[_0x27974a] = _0x409b03;
        _0x10af6c[_0x27974a] = null;
    }
    const _0x4d0006 = _0xd423b9 => Math['min'](0x1, Math['max'](0x0, _0xd423b9));
    function _0x3e5878(_0x5ad867) {
        if (_0x10af6c[_0x5ad867] !== null) {
            cancelAnimationFrame(_0x10af6c[_0x5ad867]);
            _0x10af6c[_0x5ad867] = null;
        }
    }
    function _0x476754(_0x1fa801, _0x467003, _0x215c16, _0x2ec8b2, _0x941984) {
        _0x3e5878(_0x1fa801);
        const _0x3d4196 = _0x54f211[_0x1fa801];
        const _0x2e5714 = performance['now']();
        const _0x1fb8c6 = _0x31160c => {
            const _0x43d600 = _0x4d0006((_0x31160c - _0x2e5714) / _0x2ec8b2);
            const _0xb55f08 = _0x4d0006(_0x467003 + (_0x215c16 - _0x467003) * _0x43d600);
            _0x3d4196['volume'] = _0x81b0e9 ? 0x0 : _0xb55f08;
            if (_0x43d600 < 0x1) {
                _0x10af6c[_0x1fa801] = requestAnimationFrame(_0x1fb8c6);
            } else {
                _0x10af6c[_0x1fa801] = null;
                _0x3d4196['volume'] = _0x81b0e9 ? 0x0 : _0x4d0006(_0x215c16);
                if (_0x941984)
                    _0x941984();
            }
        };
        _0x10af6c[_0x1fa801] = requestAnimationFrame(_0x1fb8c6);
    }
    function _0x2daa15(_0x5c1fc5) {
        const _0x1acaa1 = _0x5c1fc5['play']();
        if (_0x1acaa1 && _0x1acaa1['catch']) {
            _0x1acaa1['catch'](() => {
                if (!_0x2390d2) {
                    const _0x42b320 = () => {
                        _0x2390d2 = !![];
                        _0x5c1fc5['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x42b320);
                        document['removeEventListener']('keydown', _0x42b320);
                        document['removeEventListener']('touchstart', _0x42b320);
                    };
                    document['addEventListener']('click', _0x42b320, { 'once': !![] });
                    document['addEventListener']('keydown', _0x42b320, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x42b320, { 'once': !![] });
                }
            });
        }
    }
    function _0x325e49(_0xef268) {
        if (!_0x599942[_0xef268])
            return;
        if (_0x8a53b7 === _0xef268)
            return;
        const _0x462a44 = _0x8a53b7;
        _0x8a53b7 = _0xef268;
        const _0xfc9775 = _0x54f211[_0xef268];
        _0x3e5878(_0xef268);
        _0xfc9775['currentTime'] = 0x0;
        _0xfc9775['volume'] = 0x0;
        _0x2daa15(_0xfc9775);
        _0x476754(_0xef268, 0x0, _0x116da2, _0x4f2714);
        if (_0x462a44 && _0x54f211[_0x462a44]) {
            const _0x1d3ea2 = _0x462a44;
            const _0x4f046d = _0x54f211[_0x1d3ea2];
            const _0x2b5d6e = _0x4d0006(_0x4f046d['volume']);
            _0x476754(_0x1d3ea2, _0x2b5d6e, 0x0, _0x4f2714, () => {
                _0x4f046d['pause']();
                _0x4f046d['currentTime'] = 0x0;
            });
        }
    }
    function _0x4c5121(_0x456150) {
        _0x116da2 = _0x4d0006(_0x456150);
        localStorage['setItem']('musicVolume', String(_0x116da2));
        if (!_0x81b0e9 && _0x8a53b7 && _0x10af6c[_0x8a53b7] === null) {
            _0x54f211[_0x8a53b7]['volume'] = _0x116da2;
        }
    }
    function _0x109499() {
        return _0x116da2;
    }
    function _0x177ba8(_0xb0109d) {
        _0x81b0e9 = _0xb0109d;
        for (const _0x56d693 of Object['keys'](_0x54f211)) {
            if (_0x10af6c[_0x56d693] === null) {
                _0x54f211[_0x56d693]['volume'] = _0xb0109d || _0x56d693 !== _0x8a53b7 ? 0x0 : _0x116da2;
            }
        }
    }
    function _0x1a5ac5() {
        return _0x81b0e9;
    }
    function _0x57ed0d(_0x29f995) {
        if (_0x29f995 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x29f995 === 'DAY_VOTE')
            return 'voting';
        return 'wait';
    }
    function _0x2a6429(_0x878982) {
        _0x325e49(_0x57ed0d(_0x878982));
    }
    function _0x3aec1e(_0x2c4d00) {
        _0x325e49(_0x2c4d00);
    }
    return {
        'play': _0x325e49,
        'onStateChange': _0x2a6429,
        'onSoundEvent': _0x3aec1e,
        'setVolume': _0x4c5121,
        'getVolume': _0x109499,
        'setMuted': _0x177ba8,
        'isMuted': _0x1a5ac5
    };
})());
const _0x4995bb = ((() => {
    const _0x22e478 = 0x258;
    const _0x4d970d = 0xb4;
    const _0x4419c3 = 0x708;
    const _0x1e04cd = 0x140;
    const _0x170a54 = 0.18;
    const _0x35ec31 = 0.95;
    const _0x968521 = new Audio('audio/heartbeat.mp3');
    _0x968521['loop'] = ![];
    _0x968521['preload'] = 'auto';
    _0x968521['volume'] = 0x0;
    let _0x440882 = 0x0;
    let _0x4913ae = Infinity;
    function _0x40eee4(_0x310526, _0x4c5e73, _0x111e42) {
        return Math['min'](_0x111e42, Math['max'](_0x4c5e73, _0x310526));
    }
    function _0x4558b9(_0x10ac1a, _0x54bda0, _0x331767) {
        return _0x10ac1a + (_0x54bda0 - _0x10ac1a) * _0x331767;
    }
    function _0x5cf48b(_0x41f1bc) {
        if (_0x464bef['GAME_STATE'] !== 'NIGHT' || _0x581054['isDead'] || _0x1a5452 === 'Skinwalker') {
            _0x4913ae = Infinity;
            return;
        }
        const _0x34497a = _0x581054['x'] + 22.5;
        const _0x69794e = _0x581054['y'] + 22.5;
        let _0x5a147b = Infinity;
        for (const _0x501be7 in _0x37c154) {
            const _0x309e2b = _0x37c154[_0x501be7];
            if (!_0x309e2b['isDark'] || _0x309e2b['isDead'])
                continue;
            const _0x4f2021 = _0x309e2b['renderX'] + 22.5 - _0x34497a;
            const _0x501ac8 = _0x309e2b['renderY'] + 22.5 - _0x69794e;
            const _0x52ff1d = Math['sqrt'](_0x4f2021 * _0x4f2021 + _0x501ac8 * _0x501ac8);
            if (_0x52ff1d < _0x5a147b)
                _0x5a147b = _0x52ff1d;
        }
        _0x4913ae = _0x5a147b;
        if (_0x5a147b > _0x22e478)
            return;
        const _0x187109 = 0x1 - _0x40eee4((_0x5a147b - _0x4d970d) / (_0x22e478 - _0x4d970d), 0x0, 0x1);
        const _0x7fd464 = _0x4558b9(_0x4419c3, _0x1e04cd, _0x187109);
        const _0xc5599 = _0x4558b9(_0x170a54, _0x35ec31, _0x187109);
        if (_0x41f1bc >= _0x440882) {
            _0x968521['currentTime'] = 0x0;
            _0x968521['volume'] = _0x442877['isMuted']() ? 0x0 : _0x40eee4(_0xc5599 * _0x442877['getVolume']() / 0.7, 0x0, 0x1);
            _0x968521['play']()['catch'](() => {
            });
            _0x440882 = _0x41f1bc + _0x7fd464;
        }
    }
    return { 'tick': _0x5cf48b };
})());
function _0x2f01e5() {
    const _0x35cd84 = document['getElementById']('mob-ability-btn');
    if (!_0x35cd84)
        return;
    const _0x50c1df = _0x464bef['GAME_STATE'] === 'NIGHT' && !_0x581054['isDead'];
    const _0x2f572a = _0x1a5452 === 'Mayor' && !_0x41c3a5['has'](_0x290a14) && !_0x581054['isDead'];
    if (_0x50c1df || _0x2f572a) {
        _0x35cd84['style']['display'] = 'flex';
    } else {
        _0x35cd84['style']['display'] = 'none';
    }
}
function _0x4b8c35() {
    const _0x8f4251 = document['getElementById']('mobile-joystick-zone');
    const _0x1ec7c0 = document['getElementById']('mobile-top-bar');
    const _0x517b78 = document['getElementById']('mobile-action-bar');
    if (!_0x8f4251 || !_0x1ec7c0 || !_0x517b78)
        return;
    if (!_0x32c8cc && _0x2addbf) {
        _0x8f4251['style']['display'] = 'flex';
        _0x1ec7c0['style']['display'] = 'flex';
        _0x517b78['style']['display'] = 'flex';
        _0x2f01e5();
    } else {
        _0x8f4251['style']['display'] = 'none';
        _0x1ec7c0['style']['display'] = 'none';
        _0x517b78['style']['display'] = 'none';
    }
}
const _0x176069 = document['getElementById']('gameCanvas');
const _0x47ff2d = _0x176069['getContext']('2d', { 'alpha': ![] });
const _0x2a2e3d = 0x500;
const _0xedaea3 = 0x2d0;
const _0x464bef = {
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
        'width': _0x2a2e3d,
        'height': _0xedaea3
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
const _0x581054 = {
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
const _0x4a9904 = new Image();
const _0x3ecc39 = new Image();
const _0x4279a1 = new Image();
const _0x11b800 = new Image();
_0x11b800['src'] = 'assets/mayor\x20cosmetic.png';
const _0x1152bd = [
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
const _0x4e7562 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x5b630d = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x5b630d === 'body1.png' || _0x5b630d === 'body1')
    _0x5b630d = 'body01.png';
if (!_0x5b630d['endsWith']('.png'))
    _0x5b630d += '.png';
let _0x53d0d6 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x53d0d6['endsWith']('.png'))
    _0x53d0d6 += '.png';
let _0x32c8cc = !![];
let _0x2e5077 = null;
let _0x124061 = null;
let _0x3aba5f = 0x3c;
let _0x42e34f = 0x2d;
const _0x315cdf = {};
const _0x4d5e7c = new Image();
_0x4d5e7c['src'] = 'assets/yanito932.png';
_0x315cdf['assets/yanito932.png'] = _0x4d5e7c;
function _0x499554(_0x25fad9) {
    if (!_0x315cdf[_0x25fad9] || !_0x315cdf[_0x25fad9]['complete'] && _0x315cdf[_0x25fad9]['naturalWidth'] === 0x0 && _0x315cdf[_0x25fad9]['naturalHeight'] === 0x0) {
        const _0x32d564 = new Image();
        _0x32d564['src'] = _0x25fad9;
        _0x315cdf[_0x25fad9] = _0x32d564;
    }
    return _0x315cdf[_0x25fad9];
}
function _0x4c1dd2(_0x328df9, _0x444af9, _0x4d8cd4, _0x3db9f1, _0xf9a5df) {
    try {
        const _0x137f11 = 'assets/' + (_0x444af9 || 'body01.png');
        const _0x3f1ad8 = _0x499554(_0x137f11);
        if (_0x3f1ad8['complete'] && _0x3f1ad8['naturalWidth'] > 0x0) {
            _0x328df9['drawImage'](_0x3f1ad8, -_0x3db9f1 / 0x2, -_0xf9a5df / 0x2, _0x3db9f1, _0xf9a5df);
        }
        if (_0x4d8cd4 === null || _0x4d8cd4 === undefined)
            return;
        const _0x36c7d6 = 'assets/' + _0x4d8cd4;
        const _0x19396b = _0x499554(_0x36c7d6);
        if (_0x19396b['complete'] && _0x19396b['naturalWidth'] > 0x0) {
            _0x328df9['drawImage'](_0x19396b, -_0x3db9f1 / 0x2, -_0xf9a5df / 0x2, _0x3db9f1, _0xf9a5df);
        }
    } catch (_0x89e29d) {
    }
}
function _0x27eedb() {
    const _0x20e596 = document['getElementById']('body-skin-grid');
    const _0x4c3a62 = document['getElementById']('eyes-skin-grid');
    if (!_0x20e596 || !_0x4c3a62)
        return;
    _0x20e596['innerHTML'] = '';
    _0x1152bd['forEach'](_0x250049 => {
        const _0x12c2e8 = document['createElement']('button');
        _0x12c2e8['className'] = 'skin-btn' + (_0x250049 === _0x5b630d ? '\x20selected' : '');
        const _0x4fc352 = document['createElement']('img');
        _0x4fc352['src'] = 'assets/' + _0x250049;
        _0x12c2e8['appendChild'](_0x4fc352);
        _0x12c2e8['onclick'] = () => {
            _0x5b630d = _0x250049;
            localStorage['setItem']('selectedBody', _0x250049);
            _0x20e596['querySelectorAll']('.skin-btn')['forEach'](_0x365bc5 => _0x365bc5['classList']['remove']('selected'));
            _0x12c2e8['classList']['add']('selected');
        };
        _0x20e596['appendChild'](_0x12c2e8);
    });
    _0x4c3a62['innerHTML'] = '';
    _0x4e7562['forEach'](_0x4487a4 => {
        const _0x4ab477 = document['createElement']('button');
        _0x4ab477['className'] = 'skin-btn' + (_0x4487a4 === _0x53d0d6 ? '\x20selected' : '');
        const _0x5d71dd = document['createElement']('img');
        _0x5d71dd['src'] = 'assets/' + _0x4487a4;
        _0x4ab477['appendChild'](_0x5d71dd);
        _0x4ab477['onclick'] = () => {
            _0x53d0d6 = _0x4487a4;
            localStorage['setItem']('selectedEyes', _0x4487a4);
            _0x4c3a62['querySelectorAll']('.skin-btn')['forEach'](_0x5b7005 => _0x5b7005['classList']['remove']('selected'));
            _0x4ab477['classList']['add']('selected');
        };
        _0x4c3a62['appendChild'](_0x4ab477);
    });
}
function _0x26649e(_0x486300) {
    if (!_0x464bef['MAP']['columns'] || !_0x464bef['CAMERA']['width'])
        return;
    const _0x342bbd = Math['max'](0x0, _0x464bef['MAP']['columns'] * _0x464bef['MAP']['tileSize'] - _0x464bef['CAMERA']['width']);
    const _0x141b16 = Math['max'](0x0, _0x464bef['MAP']['rows'] * _0x464bef['MAP']['tileSize'] - _0x464bef['CAMERA']['height']);
    if (_0x2e5077 === null) {
        _0x2e5077 = _0x342bbd / 0x2;
        _0x124061 = _0x141b16 / 0x2;
    }
    _0x2e5077 += _0x3aba5f * _0x486300;
    _0x124061 += _0x42e34f * _0x486300;
    if (_0x2e5077 <= 0x0) {
        _0x2e5077 = 0x0;
        _0x3aba5f = Math['abs'](_0x3aba5f);
    } else if (_0x2e5077 >= _0x342bbd) {
        _0x2e5077 = _0x342bbd;
        _0x3aba5f = -Math['abs'](_0x3aba5f);
    }
    if (_0x124061 <= 0x0) {
        _0x124061 = 0x0;
        _0x42e34f = Math['abs'](_0x42e34f);
    } else if (_0x124061 >= _0x141b16) {
        _0x124061 = _0x141b16;
        _0x42e34f = -Math['abs'](_0x42e34f);
    }
    _0x464bef['CAMERA']['x'] = _0x2e5077;
    _0x464bef['CAMERA']['y'] = _0x124061;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x682427 = document['getElementById']('play-btn');
    const _0x5ad187 = document['getElementById']('username-input');
    const _0x5b1a36 = localStorage['getItem']('playerName');
    if (_0x5b1a36 && _0x5ad187) {
        _0x5ad187['value'] = _0x5b1a36;
    }
    const _0x49da2b = () => {
        _0x442877['play']('wait');
        document['removeEventListener']('click', _0x49da2b);
        document['removeEventListener']('keydown', _0x49da2b);
        document['removeEventListener']('touchstart', _0x49da2b);
    };
    document['addEventListener']('click', _0x49da2b, { 'once': !![] });
    document['addEventListener']('keydown', _0x49da2b, { 'once': !![] });
    document['addEventListener']('touchstart', _0x49da2b, { 'once': !![] });
    if (_0x682427) {
        _0x682427['addEventListener']('click', () => {
            const _0x2e0ff3 = _0x5ad187['value'];
            const _0x303404 = _0x2e0ff3['replace'](/<[^>]*>/g, '')['replace'](/[^\x20-\x7E]/g, '')['replace'](/[<>]/g, '')['replace'](/\s+/g, '\x20')['trim']()['substring'](0x0, 0xe);
            _0x349c55 = _0x303404 || 'Player';
            localStorage['setItem']('playerName', _0x349c55);
            _0x32c8cc = ![];
            _0x464bef['CAMERA']['x'] = null;
            _0x464bef['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x4b161a = document['getElementById']('controls-hint');
            if (_0x4b161a && !_0x2addbf)
                _0x4b161a['style']['display'] = 'block';
            _0x4b8c35();
            if (_0x2addbf) {
                const _0x2e8d59 = document['getElementById']('leaderboard-list');
                const _0x4b43ac = document['getElementById']('leaderboard-toggle');
                if (_0x2e8d59) {
                    _0x2e8d59['style']['display'] = 'none';
                    if (_0x4b43ac)
                        _0x4b43ac['style']['transform'] = 'rotate(180deg)';
                }
                const _0x2bbba4 = document['getElementById']('role-list-items');
                const _0x25e59b = document['getElementById']('role-list-toggle');
                if (_0x2bbba4) {
                    _0x2bbba4['style']['display'] = 'none';
                    if (_0x25e59b)
                        _0x25e59b['style']['transform'] = 'rotate(180deg)';
                }
            }
            if (_0x942c1a && _0x942c1a['readyState'] === WebSocket['OPEN']) {
                _0x942c1a['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x349c55,
                    'token': _0x4e0e2c,
                    'body': _0x5b630d,
                    'eyes': _0x53d0d6
                }));
            } else if (!_0x942c1a || _0x942c1a['readyState'] === WebSocket['CLOSED'] || _0x942c1a['readyState'] === WebSocket['CLOSING']) {
                _0x22f3b7();
            }
        });
    }
    _0x27eedb();
    _0x22f3b7();
    _0x5e3d1b();
    _0x308270();
    _0x2dff4a();
});
function _0x308270() {
    const _0x4603fb = document['getElementById']('settings-btn');
    const _0x375cda = document['getElementById']('settings-panel');
    const _0x45cba9 = document['getElementById']('close-settings-btn');
    const _0x1dab08 = document['getElementById']('setting-mouse-relative');
    if (_0x1dab08) {
        _0x1dab08['checked'] = _0x9db7a5;
        _0x1dab08['addEventListener']('change', () => {
            _0x9db7a5 = _0x1dab08['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x9db7a5 ? 'true' : 'false');
        });
    }
    const _0x351fb8 = document['getElementById']('setting-music-volume');
    const _0x42f463 = document['getElementById']('setting-music-volume-display');
    function _0x530b60(_0x653b50) {
        const _0x37611d = (_0x653b50['value'] - _0x653b50['min']) / (_0x653b50['max'] - _0x653b50['min']) * 0x64;
        _0x653b50['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x37611d + '%,\x20#444\x20' + _0x37611d + '%)';
    }
    if (_0x351fb8) {
        const _0x432719 = _0x442877['getVolume']();
        const _0x3202b7 = Math['round'](_0x432719 * 0x64);
        _0x351fb8['value'] = _0x3202b7;
        if (_0x42f463)
            _0x42f463['textContent'] = _0x3202b7 + '%';
        _0x530b60(_0x351fb8);
        _0x351fb8['addEventListener']('input', () => {
            const _0x58a62d = parseInt(_0x351fb8['value'], 0xa);
            if (_0x42f463)
                _0x42f463['textContent'] = _0x58a62d + '%';
            _0x530b60(_0x351fb8);
            _0x442877['setVolume'](_0x58a62d / 0x64);
            _0x442877['setMuted'](_0x58a62d === 0x0);
        });
    }
    if (_0x4603fb && _0x375cda) {
        _0x4603fb['addEventListener']('click', _0x16ec8f => {
            _0x16ec8f['stopPropagation']();
            _0x375cda['style']['display'] = _0x375cda['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x45cba9 && _0x375cda) {
        _0x45cba9['addEventListener']('click', () => {
            _0x375cda['style']['display'] = 'none';
        });
    }
    const _0x1e0d30 = document['getElementById']('mayor-confirm-yes');
    const _0x4cb7bf = document['getElementById']('mayor-confirm-no');
    const _0x4ee2ea = document['getElementById']('mayor-confirm-dialog');
    if (_0x1e0d30 && _0x4ee2ea) {
        _0x1e0d30['addEventListener']('click', () => {
            if (_0x942c1a && _0x942c1a['readyState'] === WebSocket['OPEN']) {
                _0x942c1a['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x4ee2ea['style']['display'] = 'none';
        });
    }
    if (_0x4cb7bf && _0x4ee2ea) {
        _0x4cb7bf['addEventListener']('click', () => {
            _0x4ee2ea['style']['display'] = 'none';
        });
    }
    const _0x329f00 = document['getElementById']('close-ability-btn');
    if (_0x329f00) {
        _0x329f00['addEventListener']('click', () => {
            const _0x265240 = document['getElementById']('ability-ui');
            if (_0x265240)
                _0x265240['style']['display'] = 'none';
        });
    }
}
let _0x5af232 = '';
function _0x131f9a(_0x2186fa) {
    const _0x1acc2b = document['getElementById']('vote-tally-panel');
    const _0x21f283 = document['getElementById']('vote-tally-list');
    if (!_0x1acc2b || !_0x21f283)
        return;
    if (_0x2186fa['state'] !== 'DAY_VOTE') {
        _0x1acc2b['style']['display'] = 'none';
        _0x5af232 = '';
        return;
    }
    _0x1acc2b['style']['display'] = 'block';
    const _0x1f3fb8 = {};
    for (const _0x14bbc0 in _0x37c154) {
        if (!_0x37c154[_0x14bbc0]['isDead'])
            _0x1f3fb8[_0x14bbc0] = 0x0;
    }
    if (_0x290a14 && !_0x581054['isDead'])
        _0x1f3fb8[_0x290a14] = 0x0;
    const _0x5afd5a = _0x2186fa['votes'] || {};
    for (const _0x178726 in _0x5afd5a) {
        const _0xa0b350 = _0x5afd5a[_0x178726];
        const _0x3017ea = _0x2186fa['mayorRevealed'] && _0x2186fa['mayorRevealed'][_0x178726] ? 0x2 : 0x1;
        _0x1f3fb8[_0xa0b350] = (_0x1f3fb8[_0xa0b350] || 0x0) + _0x3017ea;
    }
    let _0x2e1b14 = 0x0;
    const _0x2b10db = _0x2186fa['skips'] || {};
    for (const _0x1239b5 in _0x2b10db) {
        _0x2e1b14 += Number(_0x2b10db[_0x1239b5]) || 0x1;
    }
    const _0x24cfec = JSON['stringify'](_0x1f3fb8) + '_' + _0x2e1b14 + '_' + _0x581054['isDead'];
    if (_0x24cfec === _0x5af232)
        return;
    _0x5af232 = _0x24cfec;
    _0x21f283['innerHTML'] = '';
    for (const _0x56dbc3 in _0x1f3fb8) {
        const _0x430271 = parseInt(_0x56dbc3);
        const _0xaa5fea = _0x430271 === _0x290a14 ? _0x349c55 : _0x37c154[_0x56dbc3] ? _0x37c154[_0x56dbc3]['name'] : 'Player\x20' + _0x56dbc3;
        const _0x1fa190 = document['createElement']('div');
        _0x1fa190['className'] = 'vote-tally-entry';
        const _0x2acda2 = document['createElement']('span');
        _0x2acda2['textContent'] = _0xaa5fea;
        const _0x6e8c92 = document['createElement']('span');
        _0x6e8c92['className'] = 'vote-count';
        _0x6e8c92['textContent'] = _0x1f3fb8[_0x56dbc3] + '\x20vote' + (_0x1f3fb8[_0x56dbc3] === 0x1 ? '' : 's');
        _0x1fa190['appendChild'](_0x2acda2);
        _0x1fa190['appendChild'](_0x6e8c92);
        if (_0x430271 !== _0x290a14 && !_0x581054['isDead']) {
            _0x1fa190['style']['cursor'] = 'pointer';
            _0x1fa190['title'] = 'Vote\x20for\x20' + _0xaa5fea;
            _0x1fa190['addEventListener']('click', _0x57ec8c => {
                _0x57ec8c['stopPropagation']();
                if (_0x942c1a && _0x942c1a['readyState'] === WebSocket['OPEN']) {
                    _0x942c1a['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0xaa5fea
                    }));
                }
            });
        }
        _0x21f283['appendChild'](_0x1fa190);
    }
    const _0x3204a4 = document['createElement']('div');
    _0x3204a4['className'] = 'vote-tally-skip';
    _0x3204a4['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x2e1b14 + '</span>';
    if (!_0x581054['isDead']) {
        _0x3204a4['style']['cursor'] = 'pointer';
        _0x3204a4['title'] = 'Click\x20to\x20skip\x20vote';
        _0x3204a4['addEventListener']('click', _0x558952 => {
            _0x558952['stopPropagation']();
            if (_0x942c1a && _0x942c1a['readyState'] === WebSocket['OPEN']) {
                _0x942c1a['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x21f283['appendChild'](_0x3204a4);
}
let _0x13010e = null;
let _0x397076 = null;
let _0x126749 = null;
function _0x4ff63e() {
    if (_0x942c1a && _0x942c1a['readyState'] === WebSocket['OPEN']) {
        _0x942c1a['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x13010e,
            'abilityTarget': _0x397076,
            'killTarget': _0x126749
        }));
    }
}
function _0xae8d6d() {
    const _0x2ccde9 = document['getElementById']('ability-ui-body');
    if (!_0x2ccde9)
        return;
    _0x2ccde9['innerHTML'] = '';
    if (_0x1a5452 === 'Celebrity' || _0x1a5452 === 'Mayor') {
        const _0x105d72 = document['createElement']('div');
        _0x105d72['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x105d72['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x2ccde9['appendChild'](_0x105d72);
        return;
    }
    if (_0x1a5452 === 'Skinwalker') {
        const _0x817fa2 = document['createElement']('div');
        _0x817fa2['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x817fa2['innerText'] = 'Transform\x20into:';
        _0x2ccde9['appendChild'](_0x817fa2);
        const _0x19c77e = document['createElement']('div');
        _0x19c77e['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x290d1b = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x9a55b1 = _0x48567b => {
            if (!_0x464bef['ROLE_LIST_RAW'] || _0x464bef['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x464bef['ROLE_LIST_RAW']['some'](_0x58d31c => {
                if (_0x58d31c['name'] === _0x48567b)
                    return !_0x58d31c['isDead'];
                if (_0x404121[_0x58d31c['name']] && _0x404121[_0x58d31c['name']]['includes'](_0x48567b))
                    return !![];
                return ![];
            });
        };
        const _0x22298e = [
            'None',
            ..._0x290d1b['filter'](_0x9a55b1)
        ];
        _0x22298e['forEach'](_0x4edcae => {
            const _0x41aba1 = document['createElement']('button');
            _0x41aba1['className'] = 'layer-btn';
            _0x41aba1['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x41aba1['innerText'] = _0x4edcae;
            const _0x576733 = _0x4edcae === 'None' && !_0x13010e || _0x13010e === _0x4edcae;
            if (_0x576733)
                _0x41aba1['classList']['add']('active');
            _0x41aba1['onclick'] = () => {
                _0x13010e = _0x4edcae === 'None' ? null : _0x4edcae;
                _0x4ff63e();
                _0xae8d6d();
            };
            _0x19c77e['appendChild'](_0x41aba1);
        });
        _0x2ccde9['appendChild'](_0x19c77e);
        if (_0x9a55b1('Vigilante')) {
            const _0x25f2d7 = document['createElement']('div');
            _0x25f2d7['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x25f2d7['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x2ccde9['appendChild'](_0x25f2d7);
        }
        if (_0x13010e === 'Vigilante') {
            const _0x5e690a = document['createElement']('div');
            _0x5e690a['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x5e690a['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x2ccde9['appendChild'](_0x5e690a);
        } else if (_0x13010e && _0x13010e !== 'Celebrity') {
            const _0x53f774 = document['createElement']('div');
            _0x53f774['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x53f774['innerText'] = 'Use\x20' + _0x13010e + '\x20ability\x20on:';
            _0x2ccde9['appendChild'](_0x53f774);
            const _0x5945bd = document['createElement']('div');
            _0x5945bd['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x2194b4 = document['createElement']('button');
            _0x2194b4['className'] = 'layer-btn';
            _0x2194b4['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x2194b4['innerText'] = 'No\x20one';
            if (!_0x397076)
                _0x2194b4['classList']['add']('active');
            _0x2194b4['onclick'] = () => {
                _0x397076 = null;
                _0x4ff63e();
                _0xae8d6d();
            };
            _0x5945bd['appendChild'](_0x2194b4);
            for (const _0x14e839 in _0x37c154) {
                const _0x29ef13 = _0x37c154[_0x14e839];
                if (_0x29ef13['isDead'])
                    continue;
                const _0x1870bc = document['createElement']('button');
                _0x1870bc['className'] = 'layer-btn';
                _0x1870bc['innerText'] = _0x29ef13['name'];
                if (_0x397076 === parseInt(_0x14e839))
                    _0x1870bc['classList']['add']('active');
                _0x1870bc['onclick'] = () => {
                    _0x397076 = parseInt(_0x14e839);
                    _0x4ff63e();
                    _0xae8d6d();
                };
                _0x5945bd['appendChild'](_0x1870bc);
            }
            _0x2ccde9['appendChild'](_0x5945bd);
        }
        const _0x31fe7a = document['createElement']('div');
        _0x31fe7a['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x31fe7a['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x2ccde9['appendChild'](_0x31fe7a);
        const _0x31dd10 = document['createElement']('div');
        _0x31dd10['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x56bd6d = document['createElement']('button');
        _0x56bd6d['className'] = 'layer-btn';
        _0x56bd6d['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x56bd6d['innerText'] = 'No\x20one';
        if (!_0x126749 && !_0x464bef['CURRENT_TARGET'])
            _0x56bd6d['classList']['add']('active');
        _0x56bd6d['onclick'] = () => {
            _0x126749 = null;
            _0x464bef['CURRENT_TARGET'] = null;
            _0x4ff63e();
            _0xae8d6d();
        };
        _0x31dd10['appendChild'](_0x56bd6d);
        for (const _0x41b778 in _0x37c154) {
            const _0x3fe8ab = _0x37c154[_0x41b778];
            if (_0x3fe8ab['isDead'])
                continue;
            const _0x4c1749 = document['createElement']('button');
            _0x4c1749['className'] = 'layer-btn';
            _0x4c1749['innerText'] = _0x3fe8ab['name'];
            if (_0x126749 === parseInt(_0x41b778) || _0x464bef['CURRENT_TARGET'] === parseInt(_0x41b778))
                _0x4c1749['classList']['add']('active');
            _0x4c1749['onclick'] = () => {
                _0x126749 = parseInt(_0x41b778);
                _0x464bef['CURRENT_TARGET'] = parseInt(_0x41b778);
                _0x4ff63e();
                _0xae8d6d();
            };
            _0x31dd10['appendChild'](_0x4c1749);
        }
        _0x2ccde9['appendChild'](_0x31dd10);
        return;
    }
    let _0x2d1e97 = '';
    let _0x11b6fa = ![];
    if (_0x1a5452 === 'Doctor') {
        _0x2d1e97 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x11b6fa = !![];
    } else if (_0x1a5452 === 'Investigator') {
        _0x2d1e97 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x1a5452 === 'Tracker') {
        _0x2d1e97 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x1a5452 === 'Archer') {
        _0x2d1e97 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x1a5452 === 'Escort') {
        _0x2d1e97 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x1a5452 === 'Vigilante') {
        _0x2d1e97 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x512b20 = document['createElement']('div');
    _0x512b20['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x512b20['innerText'] = _0x2d1e97;
    _0x2ccde9['appendChild'](_0x512b20);
    const _0x245dd6 = document['createElement']('div');
    _0x245dd6['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x1b58e6 = document['createElement']('button');
    _0x1b58e6['className'] = 'layer-btn';
    _0x1b58e6['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x1b58e6['innerText'] = 'No\x20one';
    if (_0x464bef['CURRENT_TARGET'] === null)
        _0x1b58e6['classList']['add']('active');
    _0x1b58e6['onclick'] = () => {
        _0x464bef['CURRENT_TARGET'] = null;
        if (_0x942c1a && _0x942c1a['readyState'] === WebSocket['OPEN']) {
            _0x942c1a['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0xae8d6d();
    };
    _0x245dd6['appendChild'](_0x1b58e6);
    for (const _0x293edf in _0x37c154) {
        const _0x38481c = _0x37c154[_0x293edf];
        if (_0x38481c['isDead'])
            continue;
        const _0x3793ec = document['createElement']('button');
        _0x3793ec['className'] = 'layer-btn';
        _0x3793ec['innerText'] = _0x38481c['name'];
        if (_0x464bef['CURRENT_TARGET'] === parseInt(_0x293edf))
            _0x3793ec['classList']['add']('active');
        _0x3793ec['onclick'] = () => {
            _0x464bef['CURRENT_TARGET'] = parseInt(_0x293edf);
            if (_0x942c1a && _0x942c1a['readyState'] === WebSocket['OPEN']) {
                _0x942c1a['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x293edf)
                }));
            }
            _0xae8d6d();
        };
        _0x245dd6['appendChild'](_0x3793ec);
    }
    if (_0x11b6fa && !_0x581054['isDead']) {
        const _0x512724 = document['createElement']('button');
        _0x512724['className'] = 'layer-btn';
        _0x512724['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x512724['innerText'] = _0x349c55 + '\x20(Self)';
        if (_0x464bef['CURRENT_TARGET'] === _0x290a14)
            _0x512724['classList']['add']('active');
        _0x512724['onclick'] = () => {
            _0x464bef['CURRENT_TARGET'] = _0x290a14;
            if (_0x942c1a && _0x942c1a['readyState'] === WebSocket['OPEN']) {
                _0x942c1a['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x290a14
                }));
            }
            _0xae8d6d();
        };
        _0x245dd6['appendChild'](_0x512724);
    }
    _0x2ccde9['appendChild'](_0x245dd6);
}
function _0x22f3b7() {
    if (_0x942c1a && (_0x942c1a['readyState'] === WebSocket['OPEN'] || _0x942c1a['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x59354e = new URLSearchParams();
    if (_0x4e0e2c)
        _0x59354e['set']('token', _0x4e0e2c);
    _0x59354e['set']('ngrok-skip-browser-warning', 'true');
    const _0x24a09a = 'wss://relating-worker-pipeline-enclosure.trycloudflare.com';
    const _0x558c9d = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x24a09a;
    const _0x15b19a = _0x558c9d + '/?' + _0x59354e['toString']();
    _0x942c1a = new WebSocket(_0x15b19a);
    _0x942c1a['onopen'] = function () {
        if (!_0x32c8cc && this['readyState'] === WebSocket['OPEN']) {
            this['send'](JSON['stringify']({
                'type': 'join',
                'name': _0x349c55,
                'token': _0x4e0e2c,
                'body': _0x5b630d,
                'eyes': _0x53d0d6
            }));
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x942c1a && _0x942c1a['readyState'] === WebSocket['OPEN']) {
            _0x942c1a['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x942c1a['onclose'] = _0x20b11e => {
        if (_0x20b11e['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x20b11e['code'] === 0xfa2 || _0x20b11e['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x54d5f0 = document['getElementById']('disconnect-overlay');
        if (!_0x54d5f0) {
            _0x54d5f0 = document['createElement']('div');
            _0x54d5f0['id'] = 'disconnect-overlay';
            _0x54d5f0['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x54d5f0['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x54d5f0);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x942c1a['onmessage'] = _0x5b621a => {
        const _0x241f42 = JSON['parse'](_0x5b621a['data']);
        if (_0x241f42['type'] === 'map_data') {
            _0x464bef['MAP']['tileSize'] = _0x241f42['map']['tileSize'];
            _0x464bef['MAP']['columns'] = _0x241f42['map']['columns'];
            _0x464bef['MAP']['rows'] = _0x241f42['map']['rows'];
            _0x464bef['MAP']['layers'] = _0x241f42['map']['layers'];
            if (_0x241f42['map']['doors']) {
                _0x464bef['MAP']['doors'] = _0x241f42['map']['doors'];
                const _0x4ce2b6 = _0x464bef['MAP']['layers']['find'](_0x31144f => _0x31144f['name'] === 'floor2');
                if (_0x4ce2b6) {
                    for (const _0xc7bca4 in _0x464bef['MAP']['doors']) {
                        _0x4ce2b6['data'][parseInt(_0xc7bca4)] = 0x2;
                    }
                }
            }
            if (_0x241f42['entities'])
                _0x464bef['ENTITIES'] = _0x241f42['entities'];
            _0x11b990();
            _0x464bef['SYSTEM']['isReady'] = !![];
            _0x44178a();
            if (!_0x464bef['SYSTEM']['_gameLoopRunning']) {
                _0x464bef['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x747514);
            }
            return;
        }
        if (_0x241f42['type'] === 'init') {
            _0x290a14 = _0x241f42['id'];
            _0x32c8cc = ![];
            _0x4b8c35();
            if (_0x2addbf) {
                const _0xc36464 = document['getElementById']('leaderboard-list');
                const _0x3606ed = document['getElementById']('leaderboard-toggle');
                if (_0xc36464) {
                    _0xc36464['style']['display'] = 'none';
                    if (_0x3606ed)
                        _0x3606ed['style']['transform'] = 'rotate(180deg)';
                }
                const _0x43e023 = document['getElementById']('role-list-items');
                const _0x5e9d71 = document['getElementById']('role-list-toggle');
                if (_0x43e023) {
                    _0x43e023['style']['display'] = 'none';
                    if (_0x5e9d71)
                        _0x5e9d71['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x15a227 = _0x241f42['isOwner'] || ![];
            _0x349c55 = _0x241f42['name'] || _0x349c55;
            _0x464bef['MAP']['tileSize'] = _0x241f42['map']['tileSize'];
            _0x464bef['MAP']['columns'] = _0x241f42['map']['columns'];
            _0x464bef['MAP']['rows'] = _0x241f42['map']['rows'];
            _0x464bef['MAP']['layers'] = _0x241f42['map']['layers'];
            if (_0x241f42['map']['doors']) {
                _0x464bef['MAP']['doors'] = _0x241f42['map']['doors'];
                const _0x578b81 = _0x464bef['MAP']['layers']['find'](_0x51cb79 => _0x51cb79['name'] === 'floor2');
                if (_0x578b81) {
                    for (const _0x415c53 in _0x464bef['MAP']['doors']) {
                        _0x578b81['data'][parseInt(_0x415c53)] = 0x2;
                    }
                }
            }
            if (_0x241f42['entities'])
                _0x464bef['ENTITIES'] = _0x241f42['entities'];
            _0x11b990();
            _0x581054['x'] = _0x464bef['MAP']['columns'] * _0x464bef['MAP']['tileSize'] / 0x2;
            _0x581054['y'] = _0x464bef['MAP']['rows'] * _0x464bef['MAP']['tileSize'] / 0x2;
            _0x464bef['CAMERA']['x'] = _0x581054['x'] + _0x581054['width'] / 0x2 - _0x464bef['CAMERA']['width'] / 0x2;
            _0x464bef['CAMERA']['y'] = _0x581054['y'] + _0x581054['height'] / 0x2 - _0x464bef['CAMERA']['height'] / 0x2;
            if (_0x15a227) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x30dd76();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x464bef['SYSTEM']['lastTime'] = performance['now']();
            _0x464bef['SYSTEM']['isReady'] = !![];
            _0x18e41c();
            if (!_0x464bef['SYSTEM']['_gameLoopRunning']) {
                _0x464bef['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x747514);
            }
            return;
        } else if (_0x241f42['type'] === 'state') {
            const _0x57f748 = {};
            for (const _0x29cd32 in _0x241f42['players']) {
                if (parseInt(_0x29cd32) === _0x290a14)
                    continue;
                const _0x41c980 = _0x241f42['players'][_0x29cd32];
                const _0x46bb7c = _0x37c154[_0x29cd32];
                if (_0x46bb7c) {
                    const _0xc160f8 = _0x41c980['x'] - _0x46bb7c['renderX'];
                    const _0x3d396f = _0x41c980['y'] - _0x46bb7c['renderY'];
                    const _0x15da03 = _0xc160f8 * _0xc160f8 + _0x3d396f * _0x3d396f > 0x78 * 0x78;
                    Object['assign'](_0x46bb7c, _0x41c980);
                    if (_0x15da03) {
                        _0x46bb7c['renderX'] = _0x41c980['x'];
                        _0x46bb7c['renderY'] = _0x41c980['y'];
                    }
                    _0x57f748[_0x29cd32] = _0x46bb7c;
                } else {
                    _0x57f748[_0x29cd32] = {
                        ..._0x41c980,
                        'renderX': _0x41c980['x'],
                        'renderY': _0x41c980['y'],
                        'renderAngle': _0x41c980['angle'] || 0x0
                    };
                }
            }
            _0x37c154 = _0x57f748;
            if (_0x241f42['players'][_0x290a14]) {
                const _0x5627d9 = _0x241f42['players'][_0x290a14];
                _0x581054['chats'] = _0x5627d9['chats'] || [];
                _0x581054['isDead'] = _0x5627d9['isDead'];
                if (_0x5627d9['name'])
                    _0x349c55 = _0x5627d9['name'];
                _0x18e41c();
                const _0x265655 = Math['hypot'](_0x5627d9['x'] - _0x581054['x'], _0x5627d9['y'] - _0x581054['y']);
                if (_0x265655 > 0x32) {
                    _0x581054['x'] += (_0x5627d9['x'] - _0x581054['x']) * 0.35;
                    _0x581054['y'] += (_0x5627d9['y'] - _0x581054['y']) * 0.35;
                }
            }
            if (_0x241f42['entities'])
                _0x464bef['ENTITIES'] = _0x241f42['entities'];
            if (_0x241f42['game']) {
                _0x464bef['GAME_STATE'] = _0x241f42['game']['state'];
                _0x464bef['NIGHT_ABILITY_OPEN'] = _0x241f42['game']['nightAbilityOpen'];
                if (_0x241f42['game']['mayorRevealed']) {
                    for (const _0xed1e8b in _0x241f42['game']['mayorRevealed']) {
                        _0x41c3a5['add'](parseInt(_0xed1e8b));
                    }
                }
                if (_0x464bef['LAST_STATE'] !== _0x464bef['GAME_STATE']) {
                    if (_0x464bef['GAME_STATE'] !== 'NIGHT') {
                        _0x464bef['CURRENT_TARGET'] = null;
                        _0x13010e = null;
                        _0x397076 = null;
                        _0x126749 = null;
                        const _0x3eec24 = document['getElementById']('ability-ui');
                        if (_0x3eec24)
                            _0x3eec24['style']['display'] = 'none';
                    }
                    if (_0x464bef['GAME_STATE'] === 'NIGHT') {
                        _0x581054['chats'] = [];
                        for (const _0x4d5888 in _0x37c154) {
                            _0x37c154[_0x4d5888]['chats'] = [];
                        }
                    }
                    _0x464bef['LAST_STATE'] = _0x464bef['GAME_STATE'];
                    _0x2f01e5();
                    _0x442877['onStateChange'](_0x464bef['GAME_STATE'], _0x241f42['game']['nightAbilityOpen']);
                }
                const _0x4c20bd = document['getElementById']('phase-ui');
                if (_0x4c20bd) {
                    _0x4c20bd['style']['display'] = 'block';
                    let _0x18da27 = _0x241f42['game']['state']['replace']('_', '\x20');
                    if (_0x241f42['game']['state'] === 'DAY_DISCUSS') {
                        _0x18da27 = 'DAY\x20' + (_0x241f42['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x241f42['game']['timer'] + 's';
                    } else if (_0x241f42['game']['state'] === 'DAY_VOTE') {
                        _0x18da27 = 'DAY\x20' + (_0x241f42['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x241f42['game']['timer'] + 's';
                    } else if (_0x241f42['game']['state'] === 'NIGHT') {
                        const _0x56ccc7 = _0x241f42['game']['dayCount'] || 0x1;
                        if (_0x241f42['game']['nightAbilityOpen']) {
                            _0x18da27 = 'NIGHT\x20' + _0x56ccc7 + '\x20ABILITY\x20PHASE';
                            const _0x574f75 = _0x241f42['game']['abilityTimer'] !== undefined ? _0x241f42['game']['abilityTimer'] : _0x241f42['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x574f75 + 's';
                        } else {
                            _0x18da27 = 'NIGHT\x20' + _0x56ccc7;
                            document['getElementById']('phase-timer')['innerText'] = _0x241f42['game']['timer'] + 's';
                        }
                    }
                    document['getElementById']('phase-name')['innerText'] = _0x18da27;
                }
                if (_0x241f42['game']['state'] === 'NIGHT') {
                    const _0xa47df8 = document['getElementById']('ability-timer-label');
                    if (_0xa47df8) {
                        const _0x581e63 = _0x241f42['game']['abilityTimer'] !== undefined ? _0x241f42['game']['abilityTimer'] : _0x241f42['game']['timer'];
                        _0xa47df8['innerText'] = _0x241f42['game']['nightAbilityOpen'] ? _0x581e63 + 's' : '';
                    }
                    if (_0x241f42['game']['nightAbilityOpen'] && !_0x59bde1 && !_0x581054['isDead']) {
                        _0x59bde1 = !![];
                        _0xae8d6d();
                        const _0x13c075 = document['getElementById']('ability-ui');
                        if (_0x13c075)
                            _0x13c075['style']['display'] = 'block';
                    }
                    if (!_0x241f42['game']['nightAbilityOpen']) {
                        const _0x8c0bf4 = document['getElementById']('ability-ui');
                        if (_0x8c0bf4 && _0x8c0bf4['style']['display'] === 'block') {
                            _0x8c0bf4['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x59bde1 = ![];
                }
                _0x131f9a(_0x241f42['game']);
                if (_0x241f42['game']['roleListMode'] !== undefined) {
                    _0x464bef['ROLE_LIST_RAW'] = _0x241f42['game']['roleList'] || [];
                    _0x28d51a(_0x241f42['game']['roleList'], _0x241f42['game']['roleListMode']);
                }
            }
        } else if (_0x241f42['type'] === 'teleport') {
            _0x581054['x'] = _0x241f42['x'];
            _0x581054['y'] = _0x241f42['y'];
            _0x581054['vx'] = 0x0;
            _0x581054['vy'] = 0x0;
            _0x464bef['CAMERA']['x'] = null;
            if (_0x241f42['teleportId'] !== undefined)
                _0x4821d6 = _0x241f42['teleportId'];
        } else if (_0x241f42['type'] === 'bulk_teleport') {
            for (const _0x4833f4 in _0x241f42['positions']) {
                const _0x2cd7ea = _0x241f42['positions'][_0x4833f4];
                if (parseInt(_0x4833f4) === _0x290a14) {
                    _0x581054['x'] = _0x2cd7ea['x'];
                    _0x581054['y'] = _0x2cd7ea['y'];
                    _0x581054['vx'] = 0x0;
                    _0x581054['vy'] = 0x0;
                    _0x464bef['CAMERA']['x'] = null;
                    continue;
                }
                const _0x2fa55a = _0x37c154[_0x4833f4];
                if (_0x2fa55a) {
                    _0x2fa55a['x'] = _0x2cd7ea['x'];
                    _0x2fa55a['y'] = _0x2cd7ea['y'];
                    _0x2fa55a['renderX'] = _0x2cd7ea['x'];
                    _0x2fa55a['renderY'] = _0x2cd7ea['y'];
                    _0x2fa55a['vx'] = 0x0;
                    _0x2fa55a['vy'] = 0x0;
                }
            }
        } else if (_0x241f42['type'] === 'player_left') {
            delete _0x37c154[_0x241f42['id']];
            _0x41c3a5['delete'](parseInt(_0x241f42['id']));
        } else if (_0x241f42['type'] === 'map_update') {
            const _0x351f76 = _0x464bef['MAP']['layers']['find'](_0x311a7c => _0x311a7c['name'] === _0x241f42['layer']);
            if (_0x351f76) {
                _0x351f76['data'][_0x241f42['row'] * _0x464bef['MAP']['columns'] + _0x241f42['col']] = _0x241f42['gid'];
                const _0x42de9a = _0x241f42['row'] * _0x464bef['MAP']['columns'] + _0x241f42['col'];
                if (_0x464bef['MAP']['doors'] && _0x464bef['MAP']['doors'][_0x42de9a]) {
                    const _0x161056 = _0x464bef['MAP']['layers']['find'](_0x3c9952 => _0x3c9952['name'] === 'floor2');
                    if (_0x161056)
                        _0x161056['data'][_0x42de9a] = 0x2;
                }
                const _0x1b755c = Math['floor'](_0x241f42['col'] * _0x464bef['MAP']['tileSize'] / _0x464bef['MAP']['chunkSize']);
                const _0x1fa880 = Math['floor'](_0x241f42['row'] * _0x464bef['MAP']['tileSize'] / _0x464bef['MAP']['chunkSize']);
                _0x2a60ca(_0x1b755c, _0x1fa880);
            }
        } else if (_0x241f42['type'] === 'role_assign') {
            _0x1a5452 = _0x241f42['role'];
            _0x581054['isDead'] = _0x1a5452 === 'Spectator';
            _0x41c3a5['clear']();
            _0x464bef['CURRENT_TARGET'] = null;
            _0x13010e = null;
            _0x397076 = null;
            _0x126749 = null;
            _0x59bde1 = ![];
            const _0x25504d = document['getElementById']('ability-ui');
            if (_0x25504d)
                _0x25504d['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x1a5452;
            _0x2f01e5();
            _0x5f4ca6(_0x1a5452 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x1a5452, !![]);
            let _0x408cb8 = '';
            if (_0x1a5452 === 'Investigator')
                _0x408cb8 = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x1a5452 === 'Tracker')
                _0x408cb8 = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x1a5452 === 'Doctor')
                _0x408cb8 = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x1a5452 === 'Archer')
                _0x408cb8 = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x1a5452 === 'Escort')
                _0x408cb8 = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x1a5452 === 'Vigilante')
                _0x408cb8 = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x1a5452 === 'Skinwalker')
                _0x408cb8 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x1a5452 === 'Celebrity')
                _0x408cb8 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x1a5452 === 'Mayor')
                _0x408cb8 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x5f4ca6(_0x408cb8, !![]);
        } else if (_0x241f42['type'] === 'mayor_reveal') {
            _0x41c3a5['add'](parseInt(_0x241f42['playerId']));
            _0x18e41c();
            _0x2f01e5();
        } else if (_0x241f42['type'] === 'rolelist_update') {
            _0x464bef['ROLE_LIST_RAW'] = _0x241f42['list'] || [];
            _0x28d51a(_0x241f42['list'], _0x241f42['mode']);
        } else if (_0x241f42['type'] === 'sound_event') {
            _0x442877['onSoundEvent'](_0x241f42['track']);
        } else if (_0x241f42['type'] === 'game_over') {
            _0x442877['onStateChange']('LOBBY', ![]);
            _0x28d51a([], 'off');
            _0x1a5452 = null;
            _0x581054['isDead'] = ![];
            _0x41c3a5['clear']();
            _0x464bef['CURRENT_TARGET'] = null;
            _0x13010e = null;
            _0x397076 = null;
            _0x126749 = null;
            _0x59bde1 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x2f01e5();
            _0x5f4ca6('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x241f42['type'] === 'chat_log') {
            _0x5f4ca6(_0x241f42['sender'] + ':\x20' + _0x241f42['text']);
        } else if (_0x241f42['type'] === 'sys_chat') {
            _0x5f4ca6(_0x241f42['text'], !![]);
        }
    };
}
function _0x5f4ca6(_0x16d05b, _0x435eff = ![]) {
    const _0x47cd63 = document['getElementById']('chat-log-messages');
    const _0x2c3dfb = document['getElementById']('chat-log-ui');
    const _0x1f3a5a = _0x2c3dfb['scrollHeight'] - _0x2c3dfb['scrollTop'] - _0x2c3dfb['clientHeight'] < 0x1e;
    const _0x5eaef3 = document['createElement']('div');
    _0x5eaef3['className'] = 'chat-log-line' + (_0x435eff ? '\x20sys-msg' : '');
    _0x5eaef3['innerText'] = _0x16d05b;
    _0x47cd63['appendChild'](_0x5eaef3);
    if (_0x1f3a5a) {
        _0x2c3dfb['scrollTop'] = _0x2c3dfb['scrollHeight'];
    }
    if (_0x47cd63['childElementCount'] > 0xc8) {
        _0x47cd63['removeChild'](_0x47cd63['firstChild']);
    }
}
let _0x3210de = -0x1, _0x1ad80c = -0x1, _0x4c2dae = -0x1, _0x3c62a3 = 0x0;
function _0x415f04() {
    if (!_0x290a14 || !_0x942c1a || _0x942c1a['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x2c2015 = performance['now']();
    const _0x347f25 = _0x2c2015 - _0x3c62a3;
    const _0x3abf91 = Math['abs'](_0x581054['x'] - _0x3210de) > 0.05 || Math['abs'](_0x581054['y'] - _0x1ad80c) > 0.05 || Math['abs'](_0x581054['angle'] - _0x4c2dae) > 0.02;
    if (!_0x3abf91 && _0x347f25 < 0xc8)
        return;
    if (_0x347f25 < 0x19)
        return;
    _0x3c62a3 = _0x2c2015;
    _0x3210de = _0x581054['x'];
    _0x1ad80c = _0x581054['y'];
    _0x4c2dae = _0x581054['angle'];
    if (!_0x290a14 || !_0x942c1a || _0x942c1a['readyState'] !== WebSocket['OPEN'])
        return;
    _0x942c1a['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x581054['x'],
        'y': _0x581054['y'],
        'vx': _0x581054['vx'],
        'vy': _0x581054['vy'],
        'angle': _0x581054['angle'],
        'scale': _0x581054['scale'],
        'teleportId': _0x4821d6
    }));
}
function _0xfcd4ad() {
    if (_0x581054['isDead'])
        return;
    const _0x9b7581 = _0x464bef['MAP']['layers']['find'](_0x2725c1 => _0x2725c1['name'] === 'walls');
    if (!_0x9b7581)
        return;
    const _0x4dea29 = _0x581054['scale'];
    const _0x3baf94 = _0x581054['width'] * _0x4dea29 / 0x2;
    for (let _0x4305fd = 0x0; _0x4305fd < 0x3; _0x4305fd++) {
        let _0x1cd7a5 = _0x581054['x'] + _0x581054['width'] / 0x2;
        let _0x198a54 = _0x581054['y'] + _0x581054['height'] / 0x2;
        const _0x2dc056 = Math['floor']((_0x1cd7a5 - _0x3baf94) / _0x464bef['MAP']['tileSize']);
        const _0x3cca03 = Math['floor']((_0x1cd7a5 + _0x3baf94) / _0x464bef['MAP']['tileSize']);
        const _0x2cc160 = Math['floor']((_0x198a54 - _0x3baf94) / _0x464bef['MAP']['tileSize']);
        const _0x2cf509 = Math['floor']((_0x198a54 + _0x3baf94) / _0x464bef['MAP']['tileSize']);
        for (let _0xfb8c48 = _0x2cc160; _0xfb8c48 <= _0x2cf509; _0xfb8c48++) {
            for (let _0x344b74 = _0x2dc056; _0x344b74 <= _0x3cca03; _0x344b74++) {
                if (_0x344b74 < 0x0 || _0x344b74 >= _0x464bef['MAP']['columns'] || _0xfb8c48 < 0x0 || _0xfb8c48 >= _0x464bef['MAP']['rows'])
                    continue;
                if (_0x9b7581['data'][_0xfb8c48 * _0x464bef['MAP']['columns'] + _0x344b74] === 0x0)
                    continue;
                const _0x2a3f03 = _0x344b74 * _0x464bef['MAP']['tileSize'];
                const _0xd6e2e8 = _0xfb8c48 * _0x464bef['MAP']['tileSize'];
                const _0x1b7b63 = _0x1cd7a5 < _0x2a3f03 ? _0x2a3f03 : _0x1cd7a5 > _0x2a3f03 + _0x464bef['MAP']['tileSize'] ? _0x2a3f03 + _0x464bef['MAP']['tileSize'] : _0x1cd7a5;
                const _0x4e74e9 = _0x198a54 < _0xd6e2e8 ? _0xd6e2e8 : _0x198a54 > _0xd6e2e8 + _0x464bef['MAP']['tileSize'] ? _0xd6e2e8 + _0x464bef['MAP']['tileSize'] : _0x198a54;
                const _0x357502 = _0x1cd7a5 - _0x1b7b63;
                const _0x519a9d = _0x198a54 - _0x4e74e9;
                const _0x39994c = Math['sqrt'](_0x357502 * _0x357502 + _0x519a9d * _0x519a9d);
                if (_0x39994c < _0x3baf94) {
                    if (_0x39994c === 0x0) {
                        const _0x2ab800 = _0x1cd7a5 - _0x2a3f03;
                        const _0x228b69 = _0x2a3f03 + _0x464bef['MAP']['tileSize'] - _0x1cd7a5;
                        const _0xc99444 = _0x198a54 - _0xd6e2e8;
                        const _0x27ca79 = _0xd6e2e8 + _0x464bef['MAP']['tileSize'] - _0x198a54;
                        const _0x36763e = Math['min'](_0x2ab800, _0x228b69, _0xc99444, _0x27ca79);
                        if (_0x36763e === _0x2ab800)
                            _0x1cd7a5 = _0x2a3f03 - _0x3baf94;
                        else if (_0x36763e === _0x228b69)
                            _0x1cd7a5 = _0x2a3f03 + _0x464bef['MAP']['tileSize'] + _0x3baf94;
                        else if (_0x36763e === _0xc99444)
                            _0x198a54 = _0xd6e2e8 - _0x3baf94;
                        else
                            _0x198a54 = _0xd6e2e8 + _0x464bef['MAP']['tileSize'] + _0x3baf94;
                    } else {
                        const _0x51f50b = _0x3baf94 - _0x39994c;
                        _0x1cd7a5 += _0x357502 / _0x39994c * _0x51f50b;
                        _0x198a54 += _0x519a9d / _0x39994c * _0x51f50b;
                        const _0x45d195 = _0x581054['vx'] * (_0x357502 / _0x39994c) + _0x581054['vy'] * (_0x519a9d / _0x39994c);
                        if (_0x45d195 < 0x0) {
                            _0x581054['vx'] -= _0x45d195 * (_0x357502 / _0x39994c);
                            _0x581054['vy'] -= _0x45d195 * (_0x519a9d / _0x39994c);
                        }
                    }
                }
            }
        }
        _0x581054['x'] = _0x1cd7a5 - _0x581054['width'] / 0x2;
        _0x581054['y'] = _0x198a54 - _0x581054['height'] / 0x2;
    }
}
function _0x12cca1(_0x1e3f97) {
    const _0x5e15ea = _0x464bef['MAP']['layers']['find'](_0x2a4eda => _0x2a4eda['name'] === 'walls');
    if (!_0x5e15ea)
        return;
    const _0x2c9dc9 = _0x1e3f97['width'] / 0x2;
    for (let _0x54b976 = 0x0; _0x54b976 < 0x2; _0x54b976++) {
        let _0x3fec27 = _0x1e3f97['x'] + _0x1e3f97['width'] / 0x2;
        let _0x22e276 = _0x1e3f97['y'] + _0x1e3f97['height'] / 0x2;
        const _0x375d22 = Math['floor']((_0x3fec27 - _0x2c9dc9) / _0x464bef['MAP']['tileSize']);
        const _0x4ae441 = Math['floor']((_0x3fec27 + _0x2c9dc9) / _0x464bef['MAP']['tileSize']);
        const _0x55fb67 = Math['floor']((_0x22e276 - _0x2c9dc9) / _0x464bef['MAP']['tileSize']);
        const _0xe1b5e0 = Math['floor']((_0x22e276 + _0x2c9dc9) / _0x464bef['MAP']['tileSize']);
        for (let _0x478c22 = _0x55fb67; _0x478c22 <= _0xe1b5e0; _0x478c22++) {
            for (let _0x5ef397 = _0x375d22; _0x5ef397 <= _0x4ae441; _0x5ef397++) {
                if (_0x5ef397 < 0x0 || _0x5ef397 >= _0x464bef['MAP']['columns'] || _0x478c22 < 0x0 || _0x478c22 >= _0x464bef['MAP']['rows'])
                    continue;
                if (_0x5e15ea['data'][_0x478c22 * _0x464bef['MAP']['columns'] + _0x5ef397] === 0x0)
                    continue;
                const _0x11e40 = _0x5ef397 * _0x464bef['MAP']['tileSize'];
                const _0x1864e8 = _0x478c22 * _0x464bef['MAP']['tileSize'];
                const _0x45b77e = _0x3fec27 < _0x11e40 ? _0x11e40 : _0x3fec27 > _0x11e40 + _0x464bef['MAP']['tileSize'] ? _0x11e40 + _0x464bef['MAP']['tileSize'] : _0x3fec27;
                const _0x4da9b1 = _0x22e276 < _0x1864e8 ? _0x1864e8 : _0x22e276 > _0x1864e8 + _0x464bef['MAP']['tileSize'] ? _0x1864e8 + _0x464bef['MAP']['tileSize'] : _0x22e276;
                const _0x3ca388 = _0x3fec27 - _0x45b77e;
                const _0x53c0d6 = _0x22e276 - _0x4da9b1;
                const _0x2b0680 = Math['sqrt'](_0x3ca388 * _0x3ca388 + _0x53c0d6 * _0x53c0d6);
                if (_0x2b0680 < _0x2c9dc9) {
                    if (_0x2b0680 === 0x0) {
                        const _0x4a796c = _0x3fec27 - _0x11e40;
                        const _0x179fcc = _0x11e40 + _0x464bef['MAP']['tileSize'] - _0x3fec27;
                        const _0x413782 = _0x22e276 - _0x1864e8;
                        const _0x2d0ee0 = _0x1864e8 + _0x464bef['MAP']['tileSize'] - _0x22e276;
                        const _0x16b5d6 = Math['min'](_0x4a796c, _0x179fcc, _0x413782, _0x2d0ee0);
                        if (_0x16b5d6 === _0x4a796c)
                            _0x3fec27 = _0x11e40 - _0x2c9dc9;
                        else if (_0x16b5d6 === _0x179fcc)
                            _0x3fec27 = _0x11e40 + _0x464bef['MAP']['tileSize'] + _0x2c9dc9;
                        else if (_0x16b5d6 === _0x413782)
                            _0x22e276 = _0x1864e8 - _0x2c9dc9;
                        else
                            _0x22e276 = _0x1864e8 + _0x464bef['MAP']['tileSize'] + _0x2c9dc9;
                    } else {
                        const _0x534b37 = _0x2c9dc9 - _0x2b0680;
                        _0x3fec27 += _0x3ca388 / _0x2b0680 * _0x534b37;
                        _0x22e276 += _0x53c0d6 / _0x2b0680 * _0x534b37;
                    }
                }
            }
        }
        _0x1e3f97['x'] = _0x3fec27 - _0x1e3f97['width'] / 0x2;
        _0x1e3f97['y'] = _0x22e276 - _0x1e3f97['height'] / 0x2;
    }
}
function _0x2a2642(_0x267c98) {
    const _0x1c826e = _0x267c98['width'] / 0x2;
    for (let _0x23b386 = 0x0; _0x23b386 < 0x2; _0x23b386++) {
        let _0x495346 = _0x267c98['x'] + _0x267c98['width'] / 0x2;
        let _0x1ca1dc = _0x267c98['y'] + _0x267c98['height'] / 0x2;
        for (const _0x4cb315 of _0x464bef['ENTITIES']) {
            const _0x406828 = _0x495346 < _0x4cb315['x'] ? _0x4cb315['x'] : _0x495346 > _0x4cb315['x'] + _0x4cb315['w'] ? _0x4cb315['x'] + _0x4cb315['w'] : _0x495346;
            const _0x178eb8 = _0x1ca1dc < _0x4cb315['y'] ? _0x4cb315['y'] : _0x1ca1dc > _0x4cb315['y'] + _0x4cb315['h'] ? _0x4cb315['y'] + _0x4cb315['h'] : _0x1ca1dc;
            const _0x25890f = _0x495346 - _0x406828;
            const _0x3090b4 = _0x1ca1dc - _0x178eb8;
            const _0x4294f1 = Math['sqrt'](_0x25890f * _0x25890f + _0x3090b4 * _0x3090b4);
            if (_0x4294f1 < _0x1c826e && _0x4294f1 > 0x0) {
                const _0x54d850 = _0x1c826e - _0x4294f1;
                const _0x417e00 = _0x25890f / _0x4294f1;
                const _0x271595 = _0x3090b4 / _0x4294f1;
                _0x495346 += _0x417e00 * _0x54d850;
                _0x1ca1dc += _0x271595 * _0x54d850;
            } else if (_0x4294f1 === 0x0) {
                const _0x1a42c6 = _0x495346 - _0x4cb315['x'];
                const _0x56d367 = _0x4cb315['x'] + _0x4cb315['w'] - _0x495346;
                const _0x57d317 = _0x1ca1dc - _0x4cb315['y'];
                const _0x1b1a6e = _0x4cb315['y'] + _0x4cb315['h'] - _0x1ca1dc;
                const _0xa8fc2b = Math['min'](_0x1a42c6, _0x56d367, _0x57d317, _0x1b1a6e);
                if (_0xa8fc2b === _0x1a42c6)
                    _0x495346 = _0x4cb315['x'] - _0x1c826e;
                else if (_0xa8fc2b === _0x56d367)
                    _0x495346 = _0x4cb315['x'] + _0x4cb315['w'] + _0x1c826e;
                else if (_0xa8fc2b === _0x57d317)
                    _0x1ca1dc = _0x4cb315['y'] - _0x1c826e;
                else
                    _0x1ca1dc = _0x4cb315['y'] + _0x4cb315['h'] + _0x1c826e;
            }
        }
        _0x267c98['x'] = _0x495346 - _0x267c98['width'] / 0x2;
        _0x267c98['y'] = _0x1ca1dc - _0x267c98['height'] / 0x2;
    }
}
function _0x29b492() {
    if (_0x581054['isDead'])
        return;
    const _0x3c95ad = _0x581054['width'] / 0x2;
    const _0x27091a = _0x581054['x'] + _0x581054['width'] / 0x2;
    const _0x3b8611 = _0x581054['y'] + _0x581054['height'] / 0x2;
    for (const _0x5d1736 in _0x37c154) {
        const _0x5190bd = _0x37c154[_0x5d1736];
        if (_0x5190bd['isDead'])
            continue;
        const _0x12d92f = _0x5190bd['width'] / 0x2;
        const _0x27e48f = _0x3c95ad + _0x12d92f;
        const _0x4a7658 = (_0x5190bd['renderX'] ?? _0x5190bd['x']) + _0x5190bd['width'] / 0x2;
        const _0xaae12f = (_0x5190bd['renderY'] ?? _0x5190bd['y']) + _0x5190bd['height'] / 0x2;
        const _0x55f6ab = _0x27091a - _0x4a7658;
        const _0x7832f8 = _0x3b8611 - _0xaae12f;
        const _0x511329 = Math['sqrt'](_0x55f6ab * _0x55f6ab + _0x7832f8 * _0x7832f8);
        if (_0x511329 > 0x0 && _0x511329 < _0x27e48f) {
            const _0x4e975c = _0x27e48f - _0x511329;
            const _0x3fbfce = _0x55f6ab / _0x511329;
            const _0x54225f = _0x7832f8 / _0x511329;
            _0x581054['x'] += _0x3fbfce * (_0x4e975c * 0.25);
            _0x581054['y'] += _0x54225f * (_0x4e975c * 0.25);
            _0x5190bd['x'] -= _0x3fbfce * (_0x4e975c * 0.75);
            _0x5190bd['y'] -= _0x54225f * (_0x4e975c * 0.75);
            _0x12cca1(_0x5190bd);
            _0x2a2642(_0x5190bd);
            if (_0x5190bd['renderX'] !== undefined) {
                _0x5190bd['renderX'] = _0x5190bd['x'];
                _0x5190bd['renderY'] = _0x5190bd['y'];
            }
            const _0x1d3cf7 = _0x581054['vx'] * _0x3fbfce + _0x581054['vy'] * _0x54225f;
            if (_0x1d3cf7 < 0x0) {
                _0x581054['vx'] -= _0x1d3cf7 * _0x3fbfce * 0.25;
                _0x581054['vy'] -= _0x1d3cf7 * _0x54225f * 0.25;
            }
        }
    }
    _0xfcd4ad();
    _0x43e42();
}
function _0x43e42() {
    if (_0x581054['isDead'])
        return;
    const _0x4cd1a2 = _0x581054['scale'];
    const _0x3b5547 = _0x581054['width'] * _0x4cd1a2 / 0x2;
    for (let _0xa8fbe6 = 0x0; _0xa8fbe6 < 0x2; _0xa8fbe6++) {
        let _0x2c41f3 = _0x581054['x'] + _0x581054['width'] / 0x2;
        let _0x3f57b4 = _0x581054['y'] + _0x581054['height'] / 0x2;
        for (const _0x504121 of _0x464bef['ENTITIES']) {
            const _0x38409b = _0x2c41f3 < _0x504121['x'] ? _0x504121['x'] : _0x2c41f3 > _0x504121['x'] + _0x504121['w'] ? _0x504121['x'] + _0x504121['w'] : _0x2c41f3;
            const _0x5411ca = _0x3f57b4 < _0x504121['y'] ? _0x504121['y'] : _0x3f57b4 > _0x504121['y'] + _0x504121['h'] ? _0x504121['y'] + _0x504121['h'] : _0x3f57b4;
            const _0x4c81fb = _0x2c41f3 - _0x38409b;
            const _0x4e748d = _0x3f57b4 - _0x5411ca;
            const _0x56c1d3 = Math['sqrt'](_0x4c81fb * _0x4c81fb + _0x4e748d * _0x4e748d);
            if (_0x56c1d3 < _0x3b5547 && _0x56c1d3 > 0x0) {
                const _0x48df3f = _0x3b5547 - _0x56c1d3;
                const _0xfc1077 = _0x4c81fb / _0x56c1d3;
                const _0x55e716 = _0x4e748d / _0x56c1d3;
                _0x2c41f3 += _0xfc1077 * _0x48df3f;
                _0x3f57b4 += _0x55e716 * _0x48df3f;
                const _0x2a031f = _0x581054['vx'] * _0xfc1077 + _0x581054['vy'] * _0x55e716;
                if (_0x2a031f < 0x0) {
                    _0x581054['vx'] -= _0x2a031f * _0xfc1077;
                    _0x581054['vy'] -= _0x2a031f * _0x55e716;
                }
            } else if (_0x56c1d3 === 0x0) {
                const _0x3e0a1e = _0x2c41f3 - _0x504121['x'];
                const _0x1cf715 = _0x504121['x'] + _0x504121['w'] - _0x2c41f3;
                const _0x209d2b = _0x3f57b4 - _0x504121['y'];
                const _0xa96b48 = _0x504121['y'] + _0x504121['h'] - _0x3f57b4;
                const _0x39c7ef = Math['min'](_0x3e0a1e, _0x1cf715, _0x209d2b, _0xa96b48);
                if (_0x39c7ef === _0x3e0a1e)
                    _0x2c41f3 = _0x504121['x'] - _0x3b5547;
                else if (_0x39c7ef === _0x1cf715)
                    _0x2c41f3 = _0x504121['x'] + _0x504121['w'] + _0x3b5547;
                else if (_0x39c7ef === _0x209d2b)
                    _0x3f57b4 = _0x504121['y'] - _0x3b5547;
                else
                    _0x3f57b4 = _0x504121['y'] + _0x504121['h'] + _0x3b5547;
            }
        }
        _0x581054['x'] = _0x2c41f3 - _0x581054['width'] / 0x2;
        _0x581054['y'] = _0x3f57b4 - _0x581054['height'] / 0x2;
    }
}
function _0x444915(_0x147a0e, _0xf92b58) {
    const _0x1903fc = _0x464bef['MAP']['layers']['find'](_0x4cd157 => _0x4cd157['name'] === 'trees');
    if (!_0x1903fc)
        return ![];
    const _0x1f3370 = Math['floor'](_0x147a0e / _0x464bef['MAP']['tileSize']);
    const _0x1d38dc = Math['floor'](_0xf92b58 / _0x464bef['MAP']['tileSize']);
    if (_0x1f3370 < 0x0 || _0x1f3370 >= _0x464bef['MAP']['columns'] || _0x1d38dc < 0x0 || _0x1d38dc >= _0x464bef['MAP']['rows'])
        return ![];
    return _0x1903fc['data'][_0x1d38dc * _0x464bef['MAP']['columns'] + _0x1f3370] === 0xb;
}
let _0x405707 = null;
function _0x599cbe() {
    const _0xc0afbb = _0x464bef['MAP'];
    const _0x40b956 = _0xc0afbb['layers']['find'](_0x596eee => _0x596eee['name'] === 'floor2');
    const _0x33192e = _0xc0afbb['layers']['find'](_0x3ff1a4 => _0x3ff1a4['name'] === 'walls');
    if (!_0x40b956 || !_0x33192e) {
        _0x405707 = null;
        return;
    }
    const _0x20ff31 = _0xc0afbb['columns'];
    const _0x5ea282 = _0xc0afbb['rows'];
    const _0x516eff = [];
    const _0x462706 = [];
    const _0x36a311 = new Set();
    for (let _0x2f1c56 = 0x0; _0x2f1c56 < _0x5ea282; _0x2f1c56++) {
        for (let _0x38311d = 0x0; _0x38311d < _0x20ff31; _0x38311d++) {
            const _0x762c16 = _0x2f1c56 * _0x20ff31 + _0x38311d;
            const _0x464c42 = _0x40b956['data'][_0x762c16];
            const _0x34a1b8 = _0x33192e['data'][_0x762c16];
            if (_0x464c42 === 0x2 || _0x464c42 === 0x4) {
                _0x516eff['push']({
                    'c': _0x38311d,
                    'r': _0x2f1c56
                });
                if (_0x34a1b8 !== 0x0)
                    _0x462706['push']({
                        'c': _0x38311d,
                        'r': _0x2f1c56
                    });
            }
            if (_0x34a1b8 !== 0x0)
                _0x36a311['add'](_0x38311d + ',' + _0x2f1c56);
        }
    }
    const _0x1679b3 = new Set(_0x516eff['map'](_0x53da09 => _0x53da09['c'] + ',' + _0x53da09['r']));
    const _0x4ba316 = [
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
                c: _0x2e5d5c,
                r: _0x4514cd
            } of _0x516eff) {
        for (const [_0x31d064, _0x249479] of _0x4ba316) {
            const _0x2cd900 = _0x2e5d5c + _0x31d064, _0x4cadd9 = _0x4514cd + _0x249479;
            const _0xed60a2 = _0x2cd900 + ',' + _0x4cadd9;
            if (!_0x1679b3['has'](_0xed60a2))
                _0x36a311['add'](_0xed60a2);
        }
    }
    _0x405707 = {
        'wallSet': _0x36a311,
        'floorTiles': _0x516eff,
        'wallTiles': _0x462706,
        'interiorSet': _0x1679b3
    };
}
function _0x3033a1() {
    const _0x5c1fb1 = _0x464bef['MAP']['layers']['find'](_0x13df79 => _0x13df79['name'] === 'floor2');
    if (!_0x5c1fb1)
        return ![];
    const _0x47148a = Math['floor']((_0x581054['x'] + _0x581054['width'] / 0x2) / _0x464bef['MAP']['tileSize']);
    const _0x2644c5 = Math['floor']((_0x581054['y'] + _0x581054['height'] / 0x2) / _0x464bef['MAP']['tileSize']);
    if (_0x47148a < 0x0 || _0x47148a >= _0x464bef['MAP']['columns'] || _0x2644c5 < 0x0 || _0x2644c5 >= _0x464bef['MAP']['rows'])
        return ![];
    const _0x1847e8 = _0x5c1fb1['data'][_0x2644c5 * _0x464bef['MAP']['columns'] + _0x47148a];
    return _0x1847e8 === 0x2;
}
function _0x4eaf56() {
    if (_0x581054['isDead']) {
        _0x464bef['SHADOW']['polygon'] = null;
        return;
    }
    const _0x29d782 = _0x464bef['MAP'];
    const _0x3ec906 = _0x464bef['SHADOW'];
    const _0x45ecc6 = _0x29d782['tileSize'];
    if (!_0x405707)
        _0x599cbe();
    if (!_0x405707) {
        _0x3ec906['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x16194e,
        floorTiles: _0x5696e3
    } = _0x405707;
    if (_0x5696e3['length'] === 0x0) {
        _0x3ec906['polygon'] = null;
        return;
    }
    if (!_0x3033a1()) {
        _0x3ec906['polygon'] = null;
        return;
    }
    const _0x38b441 = _0x581054['x'] + _0x581054['width'] / 0x2;
    const _0x4fab80 = _0x581054['y'] + _0x581054['height'] / 0x2;
    if (!_0x405707['_bounds']) {
        let _0x4ff64e = Infinity, _0x257ef7 = -Infinity, _0x5cc232 = Infinity, _0x362af4 = -Infinity;
        for (const {
                    c: _0x244583,
                    r: _0x4f66fc
                } of _0x5696e3) {
            if (_0x244583 < _0x4ff64e)
                _0x4ff64e = _0x244583;
            if (_0x244583 > _0x257ef7)
                _0x257ef7 = _0x244583;
            if (_0x4f66fc < _0x5cc232)
                _0x5cc232 = _0x4f66fc;
            if (_0x4f66fc > _0x362af4)
                _0x362af4 = _0x4f66fc;
        }
        _0x405707['_bounds'] = {
            'minC': Math['max'](0x0, _0x4ff64e - 0x1),
            'maxC': Math['min'](_0x29d782['columns'] - 0x1, _0x257ef7 + 0x1),
            'minR': Math['max'](0x0, _0x5cc232 - 0x1),
            'maxR': Math['min'](_0x29d782['rows'] - 0x1, _0x362af4 + 0x1)
        };
        const _0xeaaeb6 = [];
        for (let _0x35a1e6 = _0x405707['_bounds']['minR']; _0x35a1e6 <= _0x405707['_bounds']['maxR']; _0x35a1e6++) {
            for (let _0x509491 = _0x405707['_bounds']['minC']; _0x509491 <= _0x405707['_bounds']['maxC']; _0x509491++) {
                if (_0x16194e['has'](_0x509491 + ',' + _0x35a1e6))
                    _0xeaaeb6['push'](_0x509491, _0x35a1e6);
            }
        }
        _0x405707['_wallArr'] = _0xeaaeb6;
    }
    const {
        minC: _0x334e0b,
        maxC: _0x1fe171,
        minR: _0x516e56,
        maxR: _0x41feff
    } = _0x405707['_bounds'];
    const _0xbcd217 = _0x405707['_wallArr'];
    const _0x26f8a5 = 0.0001;
    const _0x1afb34 = new Set();
    const _0x522901 = [];
    for (let _0x3890fa = 0x0; _0x3890fa < _0xbcd217['length']; _0x3890fa += 0x2) {
        const _0x2fca44 = _0xbcd217[_0x3890fa], _0x41018c = _0xbcd217[_0x3890fa + 0x1];
        const _0xf4018b = [
            _0x2fca44 * _0x45ecc6,
            _0x41018c * _0x45ecc6,
            _0x2fca44 * _0x45ecc6 + _0x45ecc6,
            _0x41018c * _0x45ecc6,
            _0x2fca44 * _0x45ecc6,
            _0x41018c * _0x45ecc6 + _0x45ecc6,
            _0x2fca44 * _0x45ecc6 + _0x45ecc6,
            _0x41018c * _0x45ecc6 + _0x45ecc6
        ];
        for (let _0xd50761 = 0x0; _0xd50761 < _0xf4018b['length']; _0xd50761 += 0x2) {
            const _0x5db859 = _0xf4018b[_0xd50761], _0x142c11 = _0xf4018b[_0xd50761 + 0x1];
            const _0x6151f7 = Math['atan2'](_0x142c11 - _0x4fab80, _0x5db859 - _0x38b441);
            const _0x416791 = Math['round'](_0x6151f7 * 0x4e20);
            if (!_0x1afb34['has'](_0x416791 - 0x1)) {
                _0x1afb34['add'](_0x416791 - 0x1);
                _0x522901['push'](_0x6151f7 - _0x26f8a5);
            }
            if (!_0x1afb34['has'](_0x416791)) {
                _0x1afb34['add'](_0x416791);
                _0x522901['push'](_0x6151f7);
            }
            if (!_0x1afb34['has'](_0x416791 + 0x1)) {
                _0x1afb34['add'](_0x416791 + 0x1);
                _0x522901['push'](_0x6151f7 + _0x26f8a5);
            }
        }
    }
    _0x522901['sort']((_0x7f573a, _0x995457) => _0x7f573a - _0x995457);
    const _0x3647d6 = Math['hypot']((_0x1fe171 - _0x334e0b + 0x2) * _0x45ecc6, (_0x41feff - _0x516e56 + 0x2) * _0x45ecc6);
    const _0x13fb55 = _0x3f7bb2 => {
        const _0x2df390 = Math['cos'](_0x3f7bb2);
        const _0x25eeb7 = Math['sin'](_0x3f7bb2);
        let _0x42ea30 = _0x3647d6;
        for (let _0x1fe449 = 0x0; _0x1fe449 < _0xbcd217['length']; _0x1fe449 += 0x2) {
            const _0x11901c = _0xbcd217[_0x1fe449], _0x5c1c53 = _0xbcd217[_0x1fe449 + 0x1];
            const _0xfc4b1d = _0x11901c * _0x45ecc6, _0x4bc79b = _0x5c1c53 * _0x45ecc6;
            const _0x1092ef = _0xfc4b1d + _0x45ecc6, _0x19ef47 = _0x4bc79b + _0x45ecc6;
            const _0x273509 = _0xfc4b1d + _0x45ecc6 * 0.5, _0x1b23e6 = _0x4bc79b + _0x45ecc6 * 0.5;
            const _0x1d889a = Math['abs'](_0x273509 - _0x38b441) + Math['abs'](_0x1b23e6 - _0x4fab80);
            if (_0x1d889a > _0x42ea30 + _0x45ecc6 * 1.5)
                continue;
            let _0x4b038f, _0x36540d, _0x576d2a;
            _0x4b038f = -_0x25eeb7 * _0x45ecc6;
            if (Math['abs'](_0x4b038f) >= 1e-10) {
                _0x36540d = -(_0x4bc79b - _0x4fab80) * _0x45ecc6 / _0x4b038f;
                _0x576d2a = ((_0xfc4b1d - _0x38b441) * _0x25eeb7 - (_0x4bc79b - _0x4fab80) * _0x2df390) / _0x4b038f;
                if (_0x36540d > 0.001 && _0x576d2a >= 0x0 && _0x576d2a <= 0x1 && _0x36540d < _0x42ea30)
                    _0x42ea30 = _0x36540d;
            }
            _0x4b038f = _0x2df390 * _0x45ecc6;
            if (Math['abs'](_0x4b038f) >= 1e-10) {
                _0x36540d = (_0x1092ef - _0x38b441) * _0x45ecc6 / _0x4b038f;
                _0x576d2a = ((_0x1092ef - _0x38b441) * _0x25eeb7 - (_0x4bc79b - _0x4fab80) * _0x2df390) / _0x4b038f;
                if (_0x36540d > 0.001 && _0x576d2a >= 0x0 && _0x576d2a <= 0x1 && _0x36540d < _0x42ea30)
                    _0x42ea30 = _0x36540d;
            }
            _0x4b038f = _0x25eeb7 * _0x45ecc6;
            if (Math['abs'](_0x4b038f) >= 1e-10) {
                _0x36540d = (_0x19ef47 - _0x4fab80) * _0x45ecc6 / _0x4b038f;
                _0x576d2a = ((_0x1092ef - _0x38b441) * _0x25eeb7 - (_0x19ef47 - _0x4fab80) * _0x2df390) / _0x4b038f;
                if (_0x36540d > 0.001 && _0x576d2a >= 0x0 && _0x576d2a <= 0x1 && _0x36540d < _0x42ea30)
                    _0x42ea30 = _0x36540d;
            }
            _0x4b038f = -_0x2df390 * _0x45ecc6;
            if (Math['abs'](_0x4b038f) >= 1e-10) {
                _0x36540d = -(_0xfc4b1d - _0x38b441) * _0x45ecc6 / _0x4b038f;
                _0x576d2a = ((_0xfc4b1d - _0x38b441) * _0x25eeb7 - (_0x19ef47 - _0x4fab80) * _0x2df390) / _0x4b038f;
                if (_0x36540d > 0.001 && _0x576d2a >= 0x0 && _0x576d2a <= 0x1 && _0x36540d < _0x42ea30)
                    _0x42ea30 = _0x36540d;
            }
        }
        const _0x150ada = _0x42ea30 < _0x3647d6 ? _0x42ea30 + 0x8 : _0x42ea30;
        return {
            'x': _0x38b441 + _0x2df390 * _0x150ada,
            'y': _0x4fab80 + _0x25eeb7 * _0x150ada
        };
    };
    const _0x253bb7 = [];
    for (let _0x5016ff = 0x0; _0x5016ff < _0x522901['length']; _0x5016ff++) {
        const _0x4cd08f = _0x13fb55(_0x522901[_0x5016ff]);
        _0x253bb7['push'](_0x4cd08f['x'], _0x4cd08f['y']);
    }
    _0x3ec906['polygon'] = _0x253bb7['length'] >= 0x6 ? new Float32Array(_0x253bb7) : null;
}
function _0x4c55a9(_0x1276cf, _0x1268b5, _0x4807ab) {
    if (_0x581054['isDead'])
        return;
    if (!_0x405707)
        return;
    const {
        floorTiles: _0x421821,
        wallTiles: _0x4c4c52
    } = _0x405707;
    if (_0x421821['length'] === 0x0)
        return;
    const _0x5e0871 = _0x464bef['SHADOW'];
    const _0x2c0cef = _0x464bef['MAP']['tileSize'];
    const _0x3a5025 = _0x464bef['CAMERA']['width'];
    const _0x3e1bb1 = _0x464bef['CAMERA']['height'];
    if (!_0x464bef['SHADOW']['_buf'] || _0x464bef['SHADOW']['_buf']['width'] !== _0x3a5025 || _0x464bef['SHADOW']['_buf']['height'] !== _0x3e1bb1) {
        _0x464bef['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x464bef['SHADOW']['_buf']['width'] = _0x3a5025;
        _0x464bef['SHADOW']['_buf']['height'] = _0x3e1bb1;
    }
    const _0x58f3c6 = _0x464bef['SHADOW']['_buf'];
    const _0x5e740a = _0x58f3c6['getContext']('2d');
    _0x5e740a['clearRect'](0x0, 0x0, _0x3a5025, _0x3e1bb1);
    _0x5e740a['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0x5e740a['beginPath']();
    for (const {
                c: _0x3614be,
                r: _0x4e1211
            } of _0x421821) {
        const _0x1248ac = Math['floor'](_0x3614be * _0x2c0cef - _0x1268b5), _0x44bfc3 = Math['floor'](_0x4e1211 * _0x2c0cef - _0x4807ab);
        if (_0x1248ac > _0x3a5025 || _0x44bfc3 > _0x3e1bb1 || _0x1248ac + _0x2c0cef < 0x0 || _0x44bfc3 + _0x2c0cef < 0x0)
            continue;
        _0x5e740a['rect'](_0x1248ac - 0x1, _0x44bfc3 - 0x1, _0x2c0cef + 0x2, _0x2c0cef + 0x2);
    }
    _0x5e740a['fill']();
    if (_0x4c4c52['length'] > 0x0) {
        _0x5e740a['globalCompositeOperation'] = 'destination-out';
        _0x5e740a['fillStyle'] = 'rgba(0,0,0,1)';
        _0x5e740a['beginPath']();
        for (const {
                    c: _0x459bf5,
                    r: _0x391125
                } of _0x4c4c52) {
            const _0x36b8b6 = Math['floor'](_0x459bf5 * _0x2c0cef - _0x1268b5), _0x280c56 = Math['floor'](_0x391125 * _0x2c0cef - _0x4807ab);
            if (_0x36b8b6 > _0x3a5025 || _0x280c56 > _0x3e1bb1 || _0x36b8b6 + _0x2c0cef < 0x0 || _0x280c56 + _0x2c0cef < 0x0)
                continue;
            _0x5e740a['rect'](_0x36b8b6 - 0x1, _0x280c56 - 0x1, _0x2c0cef + 0x2, _0x2c0cef + 0x2);
        }
        _0x5e740a['fill']();
        _0x5e740a['globalCompositeOperation'] = 'source-over';
    }
    if (_0x5e0871['polygon'] && _0x5e0871['polygon']['length'] >= 0x6) {
        _0x5e740a['globalCompositeOperation'] = 'destination-out';
        _0x5e740a['beginPath']();
        const _0x2744cb = _0x5e0871['polygon'];
        _0x5e740a['moveTo'](_0x2744cb[0x0] - _0x1268b5, _0x2744cb[0x1] - _0x4807ab);
        for (let _0x4fa9d9 = 0x2; _0x4fa9d9 < _0x2744cb['length']; _0x4fa9d9 += 0x2) {
            _0x5e740a['lineTo'](_0x2744cb[_0x4fa9d9] - _0x1268b5, _0x2744cb[_0x4fa9d9 + 0x1] - _0x4807ab);
        }
        _0x5e740a['closePath']();
        _0x5e740a['fill']();
        _0x5e740a['globalCompositeOperation'] = 'source-over';
    }
    _0x1276cf['drawImage'](_0x58f3c6, 0x0, 0x0);
}
function _0x55d370(_0x3d4e94) {
    let _0x38edee = 0x0, _0x29ec77 = 0x0;
    const _0x38c803 = _0x464bef['INPUTS']['mouseX'] / _0x464bef['SYSTEM']['viewScale'];
    const _0x553121 = _0x464bef['INPUTS']['mouseY'] / _0x464bef['SYSTEM']['viewScale'];
    const _0x3f70e0 = _0x581054['x'] - _0x464bef['CAMERA']['x'] + _0x581054['width'] / 0x2;
    const _0x5ed957 = _0x581054['y'] - _0x464bef['CAMERA']['y'] + _0x581054['height'] / 0x2;
    const _0x4941e6 = Math['atan2'](_0x553121 - _0x5ed957, _0x38c803 - _0x3f70e0);
    if (_0x5405a6 !== 0x0 || _0x5c42dd !== 0x0) {
        _0x38edee = _0x5405a6;
        _0x29ec77 = _0x5c42dd;
    } else if (_0x9db7a5) {
        let _0x24e2a6 = 0x0, _0x5729fc = 0x0;
        if (_0x464bef['INPUTS']['keys']['w'] || _0x464bef['INPUTS']['keys']['arrowup'])
            _0x24e2a6 += 0x1;
        if (_0x464bef['INPUTS']['keys']['s'] || _0x464bef['INPUTS']['keys']['arrowdown'])
            _0x24e2a6 -= 0x1;
        if (_0x464bef['INPUTS']['keys']['d'] || _0x464bef['INPUTS']['keys']['arrowright'])
            _0x5729fc += 0x1;
        if (_0x464bef['INPUTS']['keys']['a'] || _0x464bef['INPUTS']['keys']['arrowleft'])
            _0x5729fc -= 0x1;
        if (_0x24e2a6 !== 0x0 || _0x5729fc !== 0x0) {
            const _0x931555 = _0x4941e6 + Math['atan2'](_0x5729fc, _0x24e2a6);
            _0x38edee = Math['cos'](_0x931555);
            _0x29ec77 = Math['sin'](_0x931555);
        }
    } else {
        if (_0x464bef['INPUTS']['keys']['w'] || _0x464bef['INPUTS']['keys']['arrowup'])
            _0x29ec77 -= 0x1;
        if (_0x464bef['INPUTS']['keys']['s'] || _0x464bef['INPUTS']['keys']['arrowdown'])
            _0x29ec77 += 0x1;
        if (_0x464bef['INPUTS']['keys']['a'] || _0x464bef['INPUTS']['keys']['arrowleft'])
            _0x38edee -= 0x1;
        if (_0x464bef['INPUTS']['keys']['d'] || _0x464bef['INPUTS']['keys']['arrowright'])
            _0x38edee += 0x1;
        const _0x13ea61 = _0x38edee !== 0x0 || _0x29ec77 !== 0x0;
        if (_0x13ea61) {
            const _0x204141 = Math['sqrt'](_0x38edee * _0x38edee + _0x29ec77 * _0x29ec77);
            _0x38edee /= _0x204141;
            _0x29ec77 /= _0x204141;
        }
    }
    if (_0x464bef['GAME_STATE'] === 'NIGHT' && _0x1a5452 === 'Skinwalker') {
        if (_0x464bef['NIGHT_ABILITY_OPEN'] || !_0x464bef['CURRENT_TARGET']) {
            _0x38edee = 0x0;
            _0x29ec77 = 0x0;
            _0x581054['vx'] = 0x0;
            _0x581054['vy'] = 0x0;
            _0x581054['x'] = _0x464bef['MAP']['columns'] * _0x464bef['MAP']['tileSize'] / 0x2 - _0x581054['width'] / 0x2;
            _0x581054['y'] = _0x464bef['MAP']['rows'] * _0x464bef['MAP']['tileSize'] / 0x2 - _0x581054['height'] / 0x2;
        }
    }
    const _0x1d7e48 = _0x38edee !== 0x0 || _0x29ec77 !== 0x0;
    const _0x3bbdfe = (_0x464bef['INPUTS']['keys']['shift'] || _0x5e3b9e || _0x47f18b) && _0x1d7e48;
    _0x581054['bopTimer'] = _0x3bbdfe ? _0x581054['bopTimer'] + _0x3d4e94 : 0x0;
    _0x581054['scale'] = 0x1 + (_0x581054['bopTimer'] > 0x0 ? Math['sin'](_0x581054['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x1c14e7 = Math['pow'](0.001, _0x3d4e94);
    const _0x3cead5 = _0x3bbdfe ? 0x74a : 0x5d5;
    _0x581054['vx'] += _0x38edee * _0x3cead5 * _0x3d4e94;
    _0x581054['vy'] += _0x29ec77 * _0x3cead5 * _0x3d4e94;
    _0x581054['vx'] *= _0x1c14e7;
    _0x581054['vy'] *= _0x1c14e7;
    _0x581054['x'] += _0x581054['vx'] * _0x3d4e94;
    _0x581054['y'] += _0x581054['vy'] * _0x3d4e94;
    for (let _0x4f4b3f = 0x0; _0x4f4b3f < 0x3; _0x4f4b3f++)
        _0xfcd4ad();
    for (let _0xc698b3 = 0x0; _0xc698b3 < 0x2; _0xc698b3++)
        _0x43e42();
    for (let _0x77a06e = 0x0; _0x77a06e < 0x2; _0x77a06e++)
        _0x29b492();
    if (_0x581054['x'] < 0x0)
        _0x581054['x'] = 0x0;
    if (_0x581054['y'] < 0x0)
        _0x581054['y'] = 0x0;
    if (_0x581054['x'] + _0x581054['width'] > _0x464bef['MAP']['columns'] * _0x464bef['MAP']['tileSize'])
        _0x581054['x'] = _0x464bef['MAP']['columns'] * _0x464bef['MAP']['tileSize'] - _0x581054['width'];
    if (_0x581054['y'] + _0x581054['height'] > _0x464bef['MAP']['rows'] * _0x464bef['MAP']['tileSize'])
        _0x581054['y'] = _0x464bef['MAP']['rows'] * _0x464bef['MAP']['tileSize'] - _0x581054['height'];
    if (_0x3674bf) {
        _0x581054['angle'] = _0x262c26 + Math['PI'] / 0x2;
    } else if (_0x5405a6 !== 0x0 || _0x5c42dd !== 0x0) {
        _0x581054['angle'] = Math['atan2'](_0x5c42dd, _0x5405a6) + Math['PI'] / 0x2;
    } else if (!_0x2addbf) {
        _0x581054['angle'] = _0x4941e6 + Math['PI'] / 0x2;
    }
    const _0x585a93 = _0x581054['x'] + _0x581054['width'] / 0x2 - _0x464bef['CAMERA']['width'] / 0x2;
    const _0x4aac0d = _0x581054['y'] + _0x581054['height'] / 0x2 - _0x464bef['CAMERA']['height'] / 0x2;
    if (_0x464bef['CAMERA']['x'] === null || isNaN(_0x464bef['CAMERA']['x']) || !isFinite(_0x464bef['CAMERA']['x'])) {
        _0x464bef['CAMERA']['x'] = _0x585a93;
        _0x464bef['CAMERA']['y'] = _0x4aac0d;
    } else {
        const _0x1b79ea = 0x1 - Math['exp'](-Math['max'](0x0, _0x3d4e94) * 0x28);
        _0x464bef['CAMERA']['x'] += (_0x585a93 - _0x464bef['CAMERA']['x']) * _0x1b79ea;
        _0x464bef['CAMERA']['y'] += (_0x4aac0d - _0x464bef['CAMERA']['y']) * _0x1b79ea;
    }
    for (const _0x5df7e2 in _0x37c154) {
        const _0x4d6e9a = _0x37c154[_0x5df7e2];
        if (_0x4d6e9a['renderX'] === undefined) {
            _0x4d6e9a['renderX'] = _0x4d6e9a['x'];
            _0x4d6e9a['renderY'] = _0x4d6e9a['y'];
            _0x4d6e9a['renderAngle'] = _0x4d6e9a['angle'] || 0x0;
        }
        const _0x22a6f7 = 0.25;
        const _0x336e11 = _0x4d6e9a['x'] - _0x4d6e9a['renderX'], _0x2c94ee = _0x4d6e9a['y'] - _0x4d6e9a['renderY'];
        const _0x1e7c60 = Math['sqrt'](_0x336e11 * _0x336e11 + _0x2c94ee * _0x2c94ee);
        const _0x33753f = 0xb4;
        if (_0x1e7c60 > _0x33753f) {
            _0x4d6e9a['renderX'] = _0x4d6e9a['x'] - _0x336e11 / _0x1e7c60 * _0x33753f;
            _0x4d6e9a['renderY'] = _0x4d6e9a['y'] - _0x2c94ee / _0x1e7c60 * _0x33753f;
        }
        _0x4d6e9a['renderX'] += (_0x4d6e9a['x'] - _0x4d6e9a['renderX']) * _0x22a6f7;
        _0x4d6e9a['renderY'] += (_0x4d6e9a['y'] - _0x4d6e9a['renderY']) * _0x22a6f7;
        let _0x1355e7 = (_0x4d6e9a['angle'] || 0x0) - _0x4d6e9a['renderAngle'];
        while (_0x1355e7 < -Math['PI'])
            _0x1355e7 += Math['PI'] * 0x2;
        while (_0x1355e7 > Math['PI'])
            _0x1355e7 -= Math['PI'] * 0x2;
        _0x4d6e9a['renderAngle'] += _0x1355e7 * 0.3;
    }
    if (_0x464bef['GAME_STATE'] === 'NIGHT') {
        _0x53e751 = Math['min'](0.6, _0x53e751 + _0x3d4e94 * 0.5);
    } else {
        _0x53e751 = Math['max'](0x0, _0x53e751 - _0x3d4e94 * 0.5);
    }
    _0x4eaf56();
    _0x415f04();
}
function _0x3c7044(_0x38030a, _0x3040ff, _0x3cb91a, _0x10de45, _0x5c287a = !![]) {
    _0x38030a['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x41dafd = _0x38030a['measureText'](_0x3040ff)['width'];
    const _0x5bd036 = _0x41dafd + 0x18;
    const _0x5a4fb0 = 0x1c;
    _0x38030a['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x38030a['beginPath']();
    if (_0x38030a['roundRect']) {
        _0x38030a['roundRect'](_0x3cb91a - _0x5bd036 / 0x2, _0x10de45 - _0x5a4fb0, _0x5bd036, _0x5a4fb0, 0x6);
    } else {
        _0x38030a['rect'](_0x3cb91a - _0x5bd036 / 0x2, _0x10de45 - _0x5a4fb0, _0x5bd036, _0x5a4fb0);
    }
    _0x38030a['fill']();
    if (_0x5c287a) {
        _0x38030a['beginPath']();
        _0x38030a['moveTo'](_0x3cb91a - 0x6, _0x10de45);
        _0x38030a['lineTo'](_0x3cb91a + 0x6, _0x10de45);
        _0x38030a['lineTo'](_0x3cb91a, _0x10de45 + 0x6);
        _0x38030a['fill']();
    }
    _0x38030a['fillStyle'] = '#ffffff';
    _0x38030a['textAlign'] = 'center';
    _0x38030a['textBaseline'] = 'middle';
    _0x38030a['fillText'](_0x3040ff, _0x3cb91a, _0x10de45 - _0x5a4fb0 / 0x2 + 0x1);
}
function _0x23a799(_0x482a2b, _0x56617d, _0x2f4d6a, _0x512044) {
    if (!_0x56617d || _0x56617d['length'] === 0x0)
        return;
    let _0x142d8d = _0x512044;
    for (let _0x1653eb = 0x0; _0x1653eb < _0x56617d['length']; _0x1653eb++) {
        _0x3c7044(_0x482a2b, _0x56617d[_0x1653eb]['text'], _0x2f4d6a, _0x142d8d, _0x1653eb === 0x0);
        _0x142d8d -= 0x24;
    }
}
function _0x7396e3() {
    if (!_0x464bef['SYSTEM']['isReady'])
        return;
    _0x47ff2d['fillStyle'] = '#000000';
    _0x47ff2d['fillRect'](0x0, 0x0, _0x176069['width'], _0x176069['height']);
    _0x47ff2d['save']();
    try {
        _0x47ff2d['scale'](_0x464bef['SYSTEM']['viewScale'], _0x464bef['SYSTEM']['viewScale']);
        _0x47ff2d['imageSmoothingEnabled'] = ![];
        const _0x513108 = Math['floor'](_0x464bef['CAMERA']['x'] || 0x0);
        const _0x4d2323 = Math['floor'](_0x464bef['CAMERA']['y'] || 0x0);
        const _0x2a9a7c = Math['max'](0x0, Math['floor'](_0x513108 / _0x464bef['MAP']['chunkSize']));
        const _0xbed699 = Math['min'](_0x464bef['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x513108 + _0x464bef['CAMERA']['width']) / _0x464bef['MAP']['chunkSize']));
        const _0x2c2485 = Math['max'](0x0, Math['floor'](_0x4d2323 / _0x464bef['MAP']['chunkSize']));
        const _0x316c37 = Math['min'](_0x464bef['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x4d2323 + _0x464bef['CAMERA']['height']) / _0x464bef['MAP']['chunkSize']));
        for (let _0x1f5bb3 = _0x2c2485; _0x1f5bb3 <= _0x316c37; _0x1f5bb3++)
            for (let _0x5084ab = _0x2a9a7c; _0x5084ab <= _0xbed699; _0x5084ab++) {
                const _0x4c1e67 = _0x5084ab * _0x464bef['MAP']['chunkSize'] - _0x513108;
                const _0x5bb45b = _0x1f5bb3 * _0x464bef['MAP']['chunkSize'] - _0x4d2323;
                _0x47ff2d['drawImage'](_0x464bef['MAP']['bgChunks'][_0x1f5bb3][_0x5084ab], _0x4c1e67, _0x5bb45b, _0x464bef['MAP']['chunkSize'] + 0x1, _0x464bef['MAP']['chunkSize'] + 0x1);
            }
        if (_0x3ecc39['complete'] && _0x3ecc39['naturalWidth'] > 0x0) {
            const _0x1ecdfa = _0x464bef['MAP']['tileSize'];
            const _0x5dd311 = _0x1ecdfa * 0xa;
            const _0x1417b0 = _0x464bef['MAP']['columns'] / 0x2 * _0x1ecdfa - _0x5dd311 / 0x2 - _0x513108;
            const _0x1e3708 = _0x464bef['MAP']['rows'] / 0x2 * _0x1ecdfa - _0x5dd311 / 0x2 - _0x4d2323;
            _0x47ff2d['imageSmoothingEnabled'] = ![];
            _0x47ff2d['drawImage'](_0x3ecc39, _0x1417b0, _0x1e3708, _0x5dd311, _0x5dd311);
        }
        if (_0x4279a1['complete'] && _0x4279a1['naturalWidth'] > 0x0) {
            _0x464bef['ENTITIES']['forEach'](_0x2ba0f7 => {
                if (_0x2ba0f7['type'] !== 'table')
                    return;
                _0x47ff2d['save']();
                _0x47ff2d['imageSmoothingEnabled'] = ![];
                const _0x5dc03a = _0x4279a1['naturalWidth'] >= _0x4279a1['naturalHeight'];
                const _0x26d516 = _0x2ba0f7['w'] >= _0x2ba0f7['h'];
                if (_0x5dc03a === _0x26d516) {
                    _0x47ff2d['drawImage'](_0x4279a1, _0x2ba0f7['x'] - _0x513108, _0x2ba0f7['y'] - _0x4d2323, _0x2ba0f7['w'], _0x2ba0f7['h']);
                } else {
                    _0x47ff2d['translate'](_0x2ba0f7['x'] - _0x513108 + _0x2ba0f7['w'] / 0x2, _0x2ba0f7['y'] - _0x4d2323 + _0x2ba0f7['h'] / 0x2);
                    _0x47ff2d['rotate'](Math['PI'] / 0x2);
                    _0x47ff2d['drawImage'](_0x4279a1, -_0x2ba0f7['h'] / 0x2, -_0x2ba0f7['w'] / 0x2, _0x2ba0f7['h'], _0x2ba0f7['w']);
                }
                _0x47ff2d['restore']();
            });
        } else {
            _0x464bef['ENTITIES']['forEach'](_0x4ac92b => {
                if (_0x4ac92b['type'] !== 'table')
                    return;
                _0x47ff2d['save']();
                _0x47ff2d['fillStyle'] = '#6b4423';
                _0x47ff2d['fillRect'](_0x4ac92b['x'] - _0x513108, _0x4ac92b['y'] - _0x4d2323, _0x4ac92b['w'], _0x4ac92b['h']);
                _0x47ff2d['strokeStyle'] = '#422810';
                _0x47ff2d['lineWidth'] = 0x3;
                _0x47ff2d['strokeRect'](_0x4ac92b['x'] - _0x513108 + 0x1, _0x4ac92b['y'] - _0x4d2323 + 0x1, _0x4ac92b['w'] - 0x2, _0x4ac92b['h'] - 0x2);
                _0x47ff2d['fillStyle'] = '#82532a';
                _0x47ff2d['fillRect'](_0x4ac92b['x'] - _0x513108 + 0x4, _0x4ac92b['y'] - _0x4d2323 + 0x4, _0x4ac92b['w'] - 0x8, _0x4ac92b['h'] - 0x8);
                _0x47ff2d['restore']();
            });
        }
        if (_0x32c8cc) {
            for (let _0x52e404 = _0x2c2485; _0x52e404 <= _0x316c37; _0x52e404++) {
                for (let _0x1679bd = _0x2a9a7c; _0x1679bd <= _0xbed699; _0x1679bd++) {
                    const _0x2b2dbb = _0x1679bd * _0x464bef['MAP']['chunkSize'] - _0x513108;
                    const _0x2d5ffa = _0x52e404 * _0x464bef['MAP']['chunkSize'] - _0x4d2323;
                    _0x47ff2d['drawImage'](_0x464bef['MAP']['fgChunks'][_0x52e404][_0x1679bd], _0x2b2dbb, _0x2d5ffa, _0x464bef['MAP']['chunkSize'] + 0x1, _0x464bef['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x46665d = _0x464bef['GAME_STATE'] === 'NIGHT' && _0x1a5452 === 'Skinwalker' && !_0x581054['isDead'];
        const _0x51448d = _0x581054['x'] - _0x513108 + _0x581054['width'] / 0x2;
        const _0x26030c = _0x581054['y'] - _0x4d2323 + _0x581054['height'] / 0x2;
        const _0x2b0bf3 = _0x581054['width'] * _0x581054['scale'] * 1.3;
        const _0x1160a3 = _0x581054['height'] * _0x581054['scale'] * 1.3;
        for (const _0x27981e in _0x37c154) {
            const _0x27fe90 = _0x37c154[_0x27981e];
            if (_0x27fe90['isDead'])
                continue;
            const _0x330266 = (_0x27fe90['renderX'] ?? _0x27fe90['x']) - _0x513108 + _0x27fe90['width'] / 0x2;
            const _0x580df4 = (_0x27fe90['renderY'] ?? _0x27fe90['y']) - _0x4d2323 + _0x27fe90['height'] / 0x2;
            const _0x18e98f = Math['min'](0x2, Math['max'](0.3, _0x27fe90['scale'] || 0x1));
            const _0x188d9d = _0x27fe90['width'] * _0x18e98f * 1.3;
            const _0x40741c = _0x27fe90['height'] * _0x18e98f * 1.3;
            _0x47ff2d['save']();
            try {
                _0x47ff2d['translate'](_0x330266, _0x580df4);
                _0x47ff2d['rotate'](_0x27fe90['renderAngle'] ?? 0x0);
                if (_0x27fe90['isDark'])
                    _0x47ff2d['filter'] = 'brightness(0)';
                _0x4c1dd2(_0x47ff2d, _0x27fe90['body'], _0x27fe90['eyes'], _0x188d9d, _0x40741c);
                if (_0x41c3a5['has'](parseInt(_0x27981e)) && _0x11b800['complete'] && _0x11b800['naturalWidth'] > 0x0) {
                    _0x47ff2d['drawImage'](_0x11b800, -_0x188d9d / 0x2, -_0x40741c / 0x2, _0x188d9d, _0x40741c);
                }
                if (_0x27fe90['isDark'])
                    _0x47ff2d['filter'] = 'none';
            } finally {
                _0x47ff2d['restore']();
            }
            if (!_0x444915((_0x27fe90['renderX'] ?? _0x27fe90['x']) + _0x27fe90['width'] / 0x2, (_0x27fe90['renderY'] ?? _0x27fe90['y']) + _0x27fe90['height'] / 0x2)) {
                _0x47ff2d['textAlign'] = 'center';
                _0x47ff2d['lineJoin'] = 'round';
                _0x47ff2d['lineWidth'] = 0x3;
                _0x47ff2d['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x47ff2d['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x47ff2d['fillStyle'] = _0x41c3a5['has'](parseInt(_0x27981e)) ? '#cc88ff' : '#ffffff';
                const _0x99725e = _0x27fe90['isDark'] ? '???' : _0x27fe90['name'] + (_0x27fe90['isOwner'] ? '\x20[🗝️]' : '');
                _0x47ff2d['strokeText'](_0x99725e, _0x330266, _0x580df4 - _0x40741c / 0x2 - 0x10);
                _0x47ff2d['fillText'](_0x99725e, _0x330266, _0x580df4 - _0x40741c / 0x2 - 0x10);
            }
        }
        if (!_0x581054['isDead']) {
            _0x47ff2d['save']();
            try {
                _0x47ff2d['translate'](_0x51448d, _0x26030c);
                _0x47ff2d['rotate'](_0x581054['angle']);
                if (_0x46665d)
                    _0x47ff2d['filter'] = 'brightness(0)';
                _0x4c1dd2(_0x47ff2d, _0x5b630d, _0x53d0d6, _0x2b0bf3, _0x1160a3);
                if (_0x41c3a5['has'](_0x290a14) && _0x11b800['complete'] && _0x11b800['naturalWidth'] > 0x0) {
                    _0x47ff2d['drawImage'](_0x11b800, -_0x2b0bf3 / 0x2, -_0x1160a3 / 0x2, _0x2b0bf3, _0x1160a3);
                }
                if (_0x46665d)
                    _0x47ff2d['filter'] = 'none';
            } finally {
                _0x47ff2d['restore']();
            }
            if (!_0x444915(_0x581054['x'] + _0x581054['width'] / 0x2, _0x581054['y'] + _0x581054['height'] / 0x2)) {
                _0x47ff2d['textAlign'] = 'center';
                _0x47ff2d['lineJoin'] = 'round';
                _0x47ff2d['lineWidth'] = 0x3;
                _0x47ff2d['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x47ff2d['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x47ff2d['fillStyle'] = _0x41c3a5['has'](_0x290a14) ? '#cc88ff' : '#ffffff';
                const _0x5bbbc6 = _0x46665d ? '???' : _0x349c55 + (_0x15a227 ? '\x20[🗝️]' : '');
                _0x47ff2d['strokeText'](_0x5bbbc6, _0x51448d, _0x26030c - _0x1160a3 / 0x2 - 0x10);
                _0x47ff2d['fillText'](_0x5bbbc6, _0x51448d, _0x26030c - _0x1160a3 / 0x2 - 0x10);
            }
        }
        for (const _0x199e27 of _0x464bef['ENTITIES']) {
            if (_0x199e27['type'] !== 'npc')
                continue;
            const _0x5e9c22 = _0x199e27['x'] - _0x513108 + _0x199e27['w'] / 0x2;
            const _0x3aa0e7 = _0x199e27['y'] - _0x4d2323 + _0x199e27['h'] / 0x2;
            const _0x50a012 = _0x199e27['w'] * 0.65;
            const _0x50c79b = _0x199e27['h'] * 0.65;
            _0x47ff2d['save']();
            _0x47ff2d['translate'](_0x5e9c22, _0x3aa0e7);
            _0x47ff2d['rotate'](_0x199e27['angle'] !== undefined ? _0x199e27['angle'] : 0x0);
            _0x4c1dd2(_0x47ff2d, _0x199e27['body'] || 'yanito932.png', _0x199e27['eyes'], _0x50a012, _0x50c79b);
            _0x47ff2d['restore']();
            _0x47ff2d['textAlign'] = 'center';
            _0x47ff2d['lineJoin'] = 'round';
            _0x47ff2d['lineWidth'] = 0x3;
            _0x47ff2d['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x47ff2d['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x47ff2d['fillStyle'] = '#aaaaaa';
            _0x47ff2d['strokeText'](_0x199e27['name'] || 'NPC', _0x5e9c22, _0x3aa0e7 - _0x50c79b / 0x2 - 0x10);
            _0x47ff2d['fillText'](_0x199e27['name'] || 'NPC', _0x5e9c22, _0x3aa0e7 - _0x50c79b / 0x2 - 0x10);
        }
        if (_0x464bef['MAP']['wallChunks'] && _0x464bef['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x2c5748 = _0x2c2485; _0x2c5748 <= _0x316c37; _0x2c5748++)
                for (let _0x4c0e5c = _0x2a9a7c; _0x4c0e5c <= _0xbed699; _0x4c0e5c++) {
                    if (!_0x464bef['MAP']['wallChunks'][_0x2c5748] || !_0x464bef['MAP']['wallChunks'][_0x2c5748][_0x4c0e5c])
                        continue;
                    const _0x44b5d5 = _0x4c0e5c * _0x464bef['MAP']['chunkSize'] - _0x513108;
                    const _0x489195 = _0x2c5748 * _0x464bef['MAP']['chunkSize'] - _0x4d2323;
                    _0x47ff2d['drawImage'](_0x464bef['MAP']['wallChunks'][_0x2c5748][_0x4c0e5c], _0x44b5d5, _0x489195, _0x464bef['MAP']['chunkSize'] + 0x1, _0x464bef['MAP']['chunkSize'] + 0x1);
                }
        }
        if (_0x581054['isDead']) {
            for (const _0x2c6058 in _0x37c154) {
                const _0x3a0595 = _0x37c154[_0x2c6058];
                if (!_0x3a0595['isDead'])
                    continue;
                const _0x5459ab = (_0x3a0595['renderX'] ?? _0x3a0595['x']) - _0x513108 + _0x3a0595['width'] / 0x2;
                const _0xe9fc92 = (_0x3a0595['renderY'] ?? _0x3a0595['y']) - _0x4d2323 + _0x3a0595['height'] / 0x2;
                const _0x18403e = _0x3a0595['width'] * (_0x3a0595['scale'] || 0x1) * 1.3;
                const _0xc54dd3 = _0x3a0595['height'] * (_0x3a0595['scale'] || 0x1) * 1.3;
                _0x47ff2d['save']();
                try {
                    _0x47ff2d['translate'](_0x5459ab, _0xe9fc92);
                    _0x47ff2d['rotate'](_0x3a0595['renderAngle'] ?? 0x0);
                    _0x47ff2d['globalAlpha'] = 0.3;
                    _0x4c1dd2(_0x47ff2d, _0x3a0595['body'], _0x3a0595['eyes'], _0x18403e, _0xc54dd3);
                } finally {
                    _0x47ff2d['restore']();
                }
                if (!_0x444915((_0x3a0595['renderX'] ?? _0x3a0595['x']) + _0x3a0595['width'] / 0x2, (_0x3a0595['renderY'] ?? _0x3a0595['y']) + _0x3a0595['height'] / 0x2)) {
                    _0x47ff2d['save']();
                    _0x47ff2d['globalAlpha'] = 0.3;
                    _0x47ff2d['textAlign'] = 'center';
                    _0x47ff2d['lineJoin'] = 'round';
                    _0x47ff2d['lineWidth'] = 0x3;
                    _0x47ff2d['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x47ff2d['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x47ff2d['fillStyle'] = '#ffffff';
                    const _0xffdd6 = _0x3a0595['name'] + (_0x3a0595['isOwner'] ? '\x20[🗝️]' : '');
                    _0x47ff2d['strokeText'](_0xffdd6, _0x5459ab, _0xe9fc92 - _0xc54dd3 / 0x2 - 0x10);
                    _0x47ff2d['fillText'](_0xffdd6, _0x5459ab, _0xe9fc92 - _0xc54dd3 / 0x2 - 0x10);
                    _0x47ff2d['restore']();
                }
            }
            _0x47ff2d['save']();
            try {
                _0x47ff2d['translate'](_0x51448d, _0x26030c);
                _0x47ff2d['rotate'](_0x581054['angle']);
                _0x47ff2d['globalAlpha'] = 0.3;
                _0x4c1dd2(_0x47ff2d, _0x5b630d, _0x53d0d6, _0x2b0bf3, _0x1160a3);
            } finally {
                _0x47ff2d['restore']();
            }
            if (!_0x444915(_0x581054['x'] + _0x581054['width'] / 0x2, _0x581054['y'] + _0x581054['height'] / 0x2)) {
                _0x47ff2d['save']();
                _0x47ff2d['globalAlpha'] = 0.3;
                _0x47ff2d['textAlign'] = 'center';
                _0x47ff2d['lineJoin'] = 'round';
                _0x47ff2d['lineWidth'] = 0x3;
                _0x47ff2d['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x47ff2d['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x47ff2d['fillStyle'] = '#ffffff';
                const _0x201e37 = _0x349c55 + (_0x15a227 ? '\x20[🗝️]' : '');
                _0x47ff2d['strokeText'](_0x201e37, _0x51448d, _0x26030c - _0x1160a3 / 0x2 - 0x10);
                _0x47ff2d['fillText'](_0x201e37, _0x51448d, _0x26030c - _0x1160a3 / 0x2 - 0x10);
                _0x47ff2d['restore']();
            }
        }
        for (let _0x551b56 = _0x2c2485; _0x551b56 <= _0x316c37; _0x551b56++)
            for (let _0x5e7968 = _0x2a9a7c; _0x5e7968 <= _0xbed699; _0x5e7968++) {
                const _0x296648 = _0x5e7968 * _0x464bef['MAP']['chunkSize'] - _0x513108;
                const _0x4cfd59 = _0x551b56 * _0x464bef['MAP']['chunkSize'] - _0x4d2323;
                _0x47ff2d['drawImage'](_0x464bef['MAP']['fgChunks'][_0x551b56][_0x5e7968], _0x296648, _0x4cfd59, _0x464bef['MAP']['chunkSize'] + 0x1, _0x464bef['MAP']['chunkSize'] + 0x1);
            }
        if (_0x464bef['EDITOR']['enabled'] && _0x464bef['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0xc65051 = _0x464bef['INPUTS']['mouseX'] / _0x464bef['SYSTEM']['viewScale'] + _0x464bef['CAMERA']['x'];
            const _0x14879f = _0x464bef['INPUTS']['mouseY'] / _0x464bef['SYSTEM']['viewScale'] + _0x464bef['CAMERA']['y'];
            const _0x2c9802 = Math['floor'](_0xc65051 / _0x464bef['MAP']['tileSize']);
            const _0x53e199 = Math['floor'](_0x14879f / _0x464bef['MAP']['tileSize']);
            if (_0x2c9802 >= 0x0 && _0x2c9802 < _0x464bef['MAP']['columns'] && _0x53e199 >= 0x0 && _0x53e199 < _0x464bef['MAP']['rows']) {
                const _0x226b1e = _0x2c9802 * _0x464bef['MAP']['tileSize'] - _0x513108;
                const _0x56e4e3 = _0x53e199 * _0x464bef['MAP']['tileSize'] - _0x4d2323;
                _0x47ff2d['save']();
                _0x47ff2d['globalAlpha'] = 0.5;
                if (_0x464bef['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x1a1410 = _0x464bef['EDITOR']['selectedTileGid'] - 0x1;
                    _0x47ff2d['drawImage'](_0x4a9904, _0x1a1410 % _0x464bef['MAP']['tilesetCols'] * _0x464bef['MAP']['tileSize'], Math['floor'](_0x1a1410 / _0x464bef['MAP']['tilesetCols']) * _0x464bef['MAP']['tileSize'], _0x464bef['MAP']['tileSize'], _0x464bef['MAP']['tileSize'], _0x226b1e, _0x56e4e3, _0x464bef['MAP']['tileSize'], _0x464bef['MAP']['tileSize']);
                } else {
                    _0x47ff2d['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x47ff2d['fillRect'](_0x226b1e, _0x56e4e3, _0x464bef['MAP']['tileSize'], _0x464bef['MAP']['tileSize']);
                }
                _0x47ff2d['restore']();
            }
        }
        _0x4c55a9(_0x47ff2d, _0x513108, _0x4d2323);
        if (_0x53e751 > 0x0) {
            _0x47ff2d['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x53e751 + ')';
            _0x47ff2d['fillRect'](0x0, 0x0, _0x464bef['CAMERA']['width'], _0x464bef['CAMERA']['height']);
        }
        for (const _0x334630 in _0x37c154) {
            const _0x3af02a = _0x37c154[_0x334630];
            if (_0x3af02a['isDead'] && !_0x581054['isDead'])
                continue;
            const _0x5b908d = (_0x3af02a['renderX'] ?? _0x3af02a['x']) - _0x513108 + _0x3af02a['width'] / 0x2;
            const _0x4bd647 = (_0x3af02a['renderY'] ?? _0x3af02a['y']) - _0x4d2323 + _0x3af02a['height'] / 0x2;
            _0x23a799(_0x47ff2d, _0x3af02a['chats'], _0x5b908d, _0x4bd647 - _0x3af02a['height'] / 0x2 - 0x20);
        }
        _0x23a799(_0x47ff2d, _0x581054['chats'], _0x51448d, _0x26030c - _0x581054['height'] / 0x2 - 0x20);
    } finally {
        _0x47ff2d['restore']();
    }
}
function _0x747514(_0x4a919e) {
    if (!_0x464bef['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x747514);
    let _0x392523 = (_0x4a919e - _0x464bef['SYSTEM']['lastTime']) / 0x3e8;
    _0x464bef['SYSTEM']['lastTime'] = _0x4a919e;
    if (_0x392523 > 0.1)
        _0x392523 = 0.1;
    if (_0x392523 < 0x0 || isNaN(_0x392523))
        _0x392523 = 0.016;
    if (_0x32c8cc) {
        _0x26649e(_0x392523);
        _0x7396e3();
        return;
    }
    if (!_0x290a14)
        return;
    _0x55d370(_0x392523);
    _0x4995bb['tick'](_0x4a919e);
    _0x7396e3();
}
function _0x11b990() {
    const _0xe6d066 = Math['ceil'](_0x464bef['MAP']['columns'] * _0x464bef['MAP']['tileSize'] / _0x464bef['MAP']['chunkSize']);
    const _0x25718d = Math['ceil'](_0x464bef['MAP']['rows'] * _0x464bef['MAP']['tileSize'] / _0x464bef['MAP']['chunkSize']);
    _0x464bef['MAP']['bgChunks'] = [];
    _0x464bef['MAP']['fgChunks'] = [];
    _0x464bef['MAP']['wallChunks'] = [];
    for (let _0x557858 = 0x0; _0x557858 < _0x25718d; _0x557858++) {
        _0x464bef['MAP']['bgChunks'][_0x557858] = [];
        _0x464bef['MAP']['fgChunks'][_0x557858] = [];
        _0x464bef['MAP']['wallChunks'][_0x557858] = [];
        for (let _0x20ff12 = 0x0; _0x20ff12 < _0xe6d066; _0x20ff12++) {
            const _0xcc92a7 = document['createElement']('canvas');
            _0xcc92a7['width'] = _0xcc92a7['height'] = _0x464bef['MAP']['chunkSize'];
            const _0x1653b4 = document['createElement']('canvas');
            _0x1653b4['width'] = _0x1653b4['height'] = _0x464bef['MAP']['chunkSize'];
            const _0x32bb5d = document['createElement']('canvas');
            _0x32bb5d['width'] = _0x32bb5d['height'] = _0x464bef['MAP']['chunkSize'];
            _0x464bef['MAP']['bgChunks'][_0x557858][_0x20ff12] = _0xcc92a7;
            _0x464bef['MAP']['fgChunks'][_0x557858][_0x20ff12] = _0x1653b4;
            _0x464bef['MAP']['wallChunks'][_0x557858][_0x20ff12] = _0x32bb5d;
            _0x2a60ca(_0x20ff12, _0x557858);
        }
    }
}
function _0x2a60ca(_0x4882b1, _0x3a9073) {
    const _0xc5d9bb = _0x464bef['MAP']['bgChunks'][_0x3a9073][_0x4882b1]['getContext']('2d', { 'alpha': !![] });
    const _0x10bbbd = _0x464bef['MAP']['fgChunks'][_0x3a9073][_0x4882b1]['getContext']('2d', { 'alpha': !![] });
    const _0x261a3d = _0x464bef['MAP']['wallChunks'][_0x3a9073] && _0x464bef['MAP']['wallChunks'][_0x3a9073][_0x4882b1] ? _0x464bef['MAP']['wallChunks'][_0x3a9073][_0x4882b1]['getContext']('2d', { 'alpha': !![] }) : null;
    _0xc5d9bb['imageSmoothingEnabled'] = _0x10bbbd['imageSmoothingEnabled'] = ![];
    if (_0x261a3d)
        _0x261a3d['imageSmoothingEnabled'] = ![];
    _0xc5d9bb['clearRect'](0x0, 0x0, _0x464bef['MAP']['chunkSize'], _0x464bef['MAP']['chunkSize']);
    _0x10bbbd['clearRect'](0x0, 0x0, _0x464bef['MAP']['chunkSize'], _0x464bef['MAP']['chunkSize']);
    if (_0x261a3d)
        _0x261a3d['clearRect'](0x0, 0x0, _0x464bef['MAP']['chunkSize'], _0x464bef['MAP']['chunkSize']);
    const _0xa8ad6a = Math['floor'](_0x4882b1 * _0x464bef['MAP']['chunkSize'] / _0x464bef['MAP']['tileSize']);
    const _0x548fdf = Math['ceil']((_0x4882b1 + 0x1) * _0x464bef['MAP']['chunkSize'] / _0x464bef['MAP']['tileSize']);
    const _0x425f59 = Math['floor'](_0x3a9073 * _0x464bef['MAP']['chunkSize'] / _0x464bef['MAP']['tileSize']);
    const _0x142a59 = Math['ceil']((_0x3a9073 + 0x1) * _0x464bef['MAP']['chunkSize'] / _0x464bef['MAP']['tileSize']);
    const _0x1b2b34 = 0.5;
    const _0x264d05 = _0x464bef['MAP']['tileSize'] - _0x1b2b34 * 0x2;
    _0x464bef['MAP']['layers']['forEach'](_0x110c98 => {
        const _0x169ae9 = _0x110c98['name'] === 'walls';
        const _0x59f9bc = _0x110c98['name'] === 'trees' ? _0x10bbbd : _0x169ae9 ? _0x261a3d || _0xc5d9bb : _0xc5d9bb;
        for (let _0x41dd6b = Math['max'](0x0, _0x425f59); _0x41dd6b < Math['min'](_0x464bef['MAP']['rows'], _0x142a59); _0x41dd6b++) {
            for (let _0x254450 = Math['max'](0x0, _0xa8ad6a); _0x254450 < Math['min'](_0x464bef['MAP']['columns'], _0x548fdf); _0x254450++) {
                let _0x55c190 = _0x110c98['data'][_0x41dd6b * _0x464bef['MAP']['columns'] + _0x254450];
                if (_0x110c98['name'] === 'floor2' && _0x464bef['MAP']['doors'] && _0x464bef['MAP']['doors'][_0x41dd6b * _0x464bef['MAP']['columns'] + _0x254450]) {
                    _0x55c190 = 0x2;
                }
                if (_0x55c190 > 0x0) {
                    const _0xb35e6c = _0x55c190 - 0x1;
                    const _0x3838db = _0xb35e6c % _0x464bef['MAP']['tilesetCols'] * _0x464bef['MAP']['tileSize'] + _0x1b2b34;
                    const _0x5b6492 = Math['floor'](_0xb35e6c / _0x464bef['MAP']['tilesetCols']) * _0x464bef['MAP']['tileSize'] + _0x1b2b34;
                    const _0x4f04aa = _0x254450 * _0x464bef['MAP']['tileSize'] - _0x4882b1 * _0x464bef['MAP']['chunkSize'];
                    const _0x470d7b = _0x41dd6b * _0x464bef['MAP']['tileSize'] - _0x3a9073 * _0x464bef['MAP']['chunkSize'];
                    if (_0x55c190 === 0x4) {
                        const _0x1ef707 = 0x1;
                        const _0x4d7356 = _0x1ef707 % _0x464bef['MAP']['tilesetCols'] * _0x464bef['MAP']['tileSize'] + _0x1b2b34;
                        const _0x5af8c2 = Math['floor'](_0x1ef707 / _0x464bef['MAP']['tilesetCols']) * _0x464bef['MAP']['tileSize'] + _0x1b2b34;
                        _0xc5d9bb['drawImage'](_0x4a9904, _0x4d7356, _0x5af8c2, _0x264d05, _0x264d05, _0x4f04aa, _0x470d7b, _0x464bef['MAP']['tileSize'], _0x464bef['MAP']['tileSize']);
                        let _0x2f0e3b = _0x464bef['MAP']['doors'] ? _0x464bef['MAP']['doors'][_0x41dd6b * _0x464bef['MAP']['columns'] + _0x254450] : null;
                        if (!_0x2f0e3b) {
                            const _0x3e3ed3 = _0x464bef['MAP']['layers']['find'](_0x305872 => _0x305872['name'] === 'walls');
                            const _0x2d6d97 = _0x41dd6b > 0x0 && _0x3e3ed3 && _0x3e3ed3['data'][(_0x41dd6b - 0x1) * _0x464bef['MAP']['columns'] + _0x254450] > 0x0;
                            const _0x1baaa1 = _0x41dd6b < _0x464bef['MAP']['rows'] - 0x1 && _0x3e3ed3 && _0x3e3ed3['data'][(_0x41dd6b + 0x1) * _0x464bef['MAP']['columns'] + _0x254450] > 0x0;
                            const _0x1141ac = _0x254450 > 0x0 && _0x3e3ed3 && _0x3e3ed3['data'][_0x41dd6b * _0x464bef['MAP']['columns'] + _0x254450 - 0x1] > 0x0;
                            const _0xe2391b = _0x254450 < _0x464bef['MAP']['columns'] - 0x1 && _0x3e3ed3 && _0x3e3ed3['data'][_0x41dd6b * _0x464bef['MAP']['columns'] + _0x254450 + 0x1] > 0x0;
                            if (_0x1141ac && _0xe2391b)
                                _0x2f0e3b = _0x41dd6b < _0x464bef['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x2d6d97 && _0x1baaa1)
                                _0x2f0e3b = _0x254450 < _0x464bef['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x41b024 = 0x0;
                        if (_0x2f0e3b === 'bottom')
                            _0x41b024 = Math['PI'] / 0x2;
                        else if (_0x2f0e3b === 'left')
                            _0x41b024 = Math['PI'];
                        else if (_0x2f0e3b === 'top')
                            _0x41b024 = -Math['PI'] / 0x2;
                        else if (_0x2f0e3b === 'right')
                            _0x41b024 = 0x0;
                        if (_0x41b024 !== 0x0) {
                            _0x59f9bc['save']();
                            _0x59f9bc['translate'](_0x4f04aa + _0x464bef['MAP']['tileSize'] / 0x2, _0x470d7b + _0x464bef['MAP']['tileSize'] / 0x2);
                            _0x59f9bc['rotate'](_0x41b024);
                            _0x59f9bc['drawImage'](_0x4a9904, _0x3838db, _0x5b6492, _0x264d05, _0x264d05, -_0x464bef['MAP']['tileSize'] / 0x2, -_0x464bef['MAP']['tileSize'] / 0x2, _0x464bef['MAP']['tileSize'], _0x464bef['MAP']['tileSize']);
                            _0x59f9bc['restore']();
                        } else {
                            _0x59f9bc['drawImage'](_0x4a9904, _0x3838db, _0x5b6492, _0x264d05, _0x264d05, _0x4f04aa, _0x470d7b, _0x464bef['MAP']['tileSize'], _0x464bef['MAP']['tileSize']);
                        }
                    } else {
                        _0x59f9bc['drawImage'](_0x4a9904, _0x3838db, _0x5b6492, _0x264d05, _0x264d05, _0x4f04aa, _0x470d7b, _0x464bef['MAP']['tileSize'], _0x464bef['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x5e3d1b() {
    _0x4a9904['crossOrigin'] = 'Anonymous';
    _0x4a9904['onload'] = () => {
        _0x464bef['MAP']['tilesetCols'] = 0x3;
        _0x52bf6a();
    };
    _0x4a9904['onerror'] = () => {
        _0x464bef['MAP']['tilesetCols'] = 0x1;
        _0x52bf6a();
    };
    _0x4a9904['src'] = 'assets/tilesheet.png';
    _0x3ecc39['crossOrigin'] = 'Anonymous';
    _0x3ecc39['onload'] = _0x52bf6a;
    _0x3ecc39['onerror'] = () => {
        _0x52bf6a();
    };
    _0x3ecc39['src'] = 'assets/center.png';
    _0x4279a1['crossOrigin'] = 'Anonymous';
    _0x4279a1['onload'] = _0x52bf6a;
    _0x4279a1['onerror'] = () => {
        _0x52bf6a();
    };
    _0x4279a1['src'] = 'assets/table.png';
}
function _0x52bf6a() {
    _0x464bef['SYSTEM']['assetsLoaded']++;
    if (_0x464bef['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x44178a();
    }
}
function _0x5c6785(_0x41c91a, _0x9f985c) {
    if (!_0x15a227 || !_0x942c1a)
        return;
    const _0x4d722d = _0x41c91a / _0x464bef['SYSTEM']['viewScale'] + _0x464bef['CAMERA']['x'];
    const _0x34b42f = _0x9f985c / _0x464bef['SYSTEM']['viewScale'] + _0x464bef['CAMERA']['y'];
    const _0x34b1a5 = Math['floor'](_0x4d722d / _0x464bef['MAP']['tileSize']);
    const _0x15c9d0 = Math['floor'](_0x34b42f / _0x464bef['MAP']['tileSize']);
    if (_0x34b1a5 >= 0x0 && _0x34b1a5 < _0x464bef['MAP']['columns'] && _0x15c9d0 >= 0x0 && _0x15c9d0 < _0x464bef['MAP']['rows'])
        _0x942c1a['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x464bef['EDITOR']['selectedLayer'],
            'col': _0x34b1a5,
            'row': _0x15c9d0,
            'gid': _0x464bef['EDITOR']['selectedTileGid']
        }));
}
function _0x30dd76() {
    const _0x802f60 = document['getElementById']('palette');
    if (!_0x802f60 || _0x802f60['children']['length'] > 0x0)
        return;
    const _0x36c9a2 = 0x40;
    const _0x5e5a2a = _0x4a9904;
    const _0x243753 = document['createElement']('div');
    _0x243753['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x219a49 = document['createElement']('canvas');
    _0x219a49['width'] = 0xc0;
    _0x219a49['height'] = 0xa0;
    _0x219a49['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x243753['appendChild'](_0x219a49);
    const _0x3e30c8 = document['createElement']('div');
    _0x3e30c8['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x243753['appendChild'](_0x3e30c8);
    let _0x3f50cd = 0x0, _0x54fb99 = 0x0;
    let _0x5dd2b7 = ![], _0x37ad04 = 0x0, _0x38673d = 0x0, _0x2c1806 = 0x0, _0x33ae23 = 0x0;
    function _0x22b41f() {
        const _0x53ac44 = _0x219a49['getContext']('2d');
        _0x53ac44['clearRect'](0x0, 0x0, _0x219a49['width'], _0x219a49['height']);
        _0x53ac44['imageSmoothingEnabled'] = ![];
        if (_0x5e5a2a['complete'] && _0x5e5a2a['naturalWidth'] > 0x0) {
            _0x53ac44['drawImage'](_0x5e5a2a, _0x3f50cd, _0x54fb99, _0x219a49['width'], _0x219a49['height'], 0x0, 0x0, _0x219a49['width'], _0x219a49['height']);
        }
        _0x53ac44['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x53ac44['lineWidth'] = 0x1;
        const _0x193cb3 = Math['floor'](_0x3f50cd / _0x36c9a2);
        const _0x2c9543 = Math['floor'](_0x54fb99 / _0x36c9a2);
        for (let _0x20e683 = _0x193cb3; _0x20e683 <= _0x193cb3 + Math['ceil'](_0x219a49['width'] / _0x36c9a2) + 0x1; _0x20e683++) {
            const _0x3d357c = _0x20e683 * _0x36c9a2 - _0x3f50cd;
            _0x53ac44['beginPath']();
            _0x53ac44['moveTo'](_0x3d357c, 0x0);
            _0x53ac44['lineTo'](_0x3d357c, _0x219a49['height']);
            _0x53ac44['stroke']();
        }
        for (let _0x63fe5b = _0x2c9543; _0x63fe5b <= _0x2c9543 + Math['ceil'](_0x219a49['height'] / _0x36c9a2) + 0x1; _0x63fe5b++) {
            const _0x525fea = _0x63fe5b * _0x36c9a2 - _0x54fb99;
            _0x53ac44['beginPath']();
            _0x53ac44['moveTo'](0x0, _0x525fea);
            _0x53ac44['lineTo'](_0x219a49['width'], _0x525fea);
            _0x53ac44['stroke']();
        }
    }
    function _0x28a407() {
        const _0x1a31d1 = Math['max'](0x1, Math['ceil'](_0x5e5a2a['naturalWidth'] / _0x36c9a2));
        const _0x4c3923 = _0x464bef['EDITOR']['selectedTileGid'];
        if (_0x4c3923 <= 0x0) {
            _0x3e30c8['style']['display'] = 'none';
            return;
        }
        const _0x54c6d9 = _0x4c3923 - 0x1;
        const _0x3d46cc = _0x54c6d9 % _0x1a31d1;
        const _0xfe2505 = Math['floor'](_0x54c6d9 / _0x1a31d1);
        const _0x3c05fc = _0x3d46cc * _0x36c9a2 - _0x3f50cd;
        const _0x30875f = _0xfe2505 * _0x36c9a2 - _0x54fb99;
        _0x3e30c8['style']['display'] = 'block';
        _0x3e30c8['style']['left'] = _0x3c05fc + 'px';
        _0x3e30c8['style']['top'] = _0x30875f + 'px';
    }
    _0x5e5a2a['onload'] = () => {
        _0x22b41f();
        _0x28a407();
    };
    if (_0x5e5a2a['complete'] && _0x5e5a2a['naturalWidth'] > 0x0) {
        _0x22b41f();
        _0x28a407();
    }
    _0x243753['addEventListener']('mousedown', _0x697c58 => {
        if (_0x697c58['button'] === 0x0) {
            _0x5dd2b7 = !![];
            _0x37ad04 = _0x697c58['clientX'];
            _0x38673d = _0x697c58['clientY'];
            _0x2c1806 = _0x3f50cd;
            _0x33ae23 = _0x54fb99;
            _0x243753['style']['cursor'] = 'grabbing';
            _0x697c58['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x365909 => {
        if (!_0x5dd2b7)
            return;
        const _0x56fce4 = _0x37ad04 - _0x365909['clientX'];
        const _0x188794 = _0x38673d - _0x365909['clientY'];
        const _0x2827f5 = Math['max'](0x0, _0x5e5a2a['naturalWidth'] - _0x219a49['width']);
        const _0x2fe604 = Math['max'](0x0, _0x5e5a2a['naturalHeight'] - _0x219a49['height']);
        _0x3f50cd = Math['max'](0x0, Math['min'](_0x2827f5, _0x2c1806 + _0x56fce4));
        _0x54fb99 = Math['max'](0x0, Math['min'](_0x2fe604, _0x33ae23 + _0x188794));
        _0x22b41f();
        _0x28a407();
    });
    window['addEventListener']('mouseup', _0x3db57e => {
        if (_0x5dd2b7) {
            _0x5dd2b7 = ![];
            _0x243753['style']['cursor'] = 'grab';
        }
    });
    _0x243753['addEventListener']('click', _0x5a703b => {
        const _0x1fbcc6 = _0x243753['getBoundingClientRect']();
        const _0x26d0a7 = _0x5a703b['clientX'] - _0x1fbcc6['left'] + _0x3f50cd;
        const _0x4d6a61 = _0x5a703b['clientY'] - _0x1fbcc6['top'] + _0x54fb99;
        const _0x40d84c = Math['max'](0x1, Math['ceil'](_0x5e5a2a['naturalWidth'] / _0x36c9a2));
        const _0x385073 = Math['floor'](_0x26d0a7 / _0x36c9a2);
        const _0x54d57f = Math['floor'](_0x4d6a61 / _0x36c9a2);
        const _0x4b57ee = _0x54d57f * _0x40d84c + _0x385073 + 0x1;
        _0x464bef['EDITOR']['selectedTileGid'] = _0x4b57ee;
        _0x28a407();
    });
    _0x802f60['appendChild'](_0x243753);
    const _0x1a187b = document['createElement']('div');
    _0x1a187b['className'] = 'tile-btn\x20eraser-btn';
    _0x1a187b['title'] = 'Eraser\x20(gid\x200)';
    _0x1a187b['onclick'] = () => {
        _0x464bef['EDITOR']['selectedTileGid'] = 0x0;
        _0x3e30c8['style']['display'] = 'none';
    };
    _0x802f60['appendChild'](_0x1a187b);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x464bef['EDITOR']['enabled'] = !_0x464bef['EDITOR']['enabled'];
        const _0x4c1402 = document['getElementById']('editor-tools');
        if (_0x464bef['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x4c1402['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x4c1402['style']['display'] = 'none';
        }
    });
    const _0x170ba9 = document['getElementById']('start-game-btn');
    if (_0x170ba9) {
        _0x170ba9['addEventListener']('click', () => {
            if (_0x942c1a)
                _0x942c1a['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x254143 = document['getElementById']('rolelist-toggle-btn');
    if (_0x254143) {
        let _0x22853a = 'subalignments';
        _0x254143['addEventListener']('click', () => {
            if (_0x22853a === 'subalignments')
                _0x22853a = 'precise';
            else if (_0x22853a === 'precise')
                _0x22853a = 'off';
            else
                _0x22853a = 'subalignments';
            _0x254143['innerText'] = 'Role\x20List:\x20' + _0x22853a['charAt'](0x0)['toUpperCase']() + _0x22853a['slice'](0x1);
            if (_0x942c1a)
                _0x942c1a['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x22853a
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0xe8d288 => {
        if (_0xe8d288['id'] === 'editor-toggle-btn' || _0xe8d288['id'] === 'start-game-btn' || _0xe8d288['id'] === 'rolelist-toggle-btn')
            return;
        _0xe8d288['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x5cda96 => _0x5cda96['classList']['remove']('active'));
            _0xe8d288['classList']['add']('active');
            _0x464bef['EDITOR']['selectedLayer'] = _0xe8d288['dataset']['layer'];
        });
    });
}
function _0x406110(_0x1e7d93) {
    if (_0x942c1a)
        _0x942c1a['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x1e7d93
        }));
}
function _0x46747c(_0x5a23e5) {
    if (_0x942c1a)
        _0x942c1a['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x5a23e5
        }));
}
function _0x1c3aff(_0x1ec942, _0x1283e7, _0x10118d, _0x2dd089) {
    const _0x51e323 = document['getElementById']('admin-panel');
    if (_0x51e323)
        _0x51e323['remove']();
    if (_0x51e323 && _0x51e323['dataset']['target'] === String(_0x1ec942))
        return;
    const _0x38263a = document['createElement']('div');
    _0x38263a['id'] = 'admin-panel';
    _0x38263a['dataset']['target'] = String(_0x1ec942);
    _0x38263a['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x59a319 = document['createElement']('div');
    _0x59a319['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x59a319['textContent'] = _0x1283e7;
    _0x38263a['appendChild'](_0x59a319);
    const _0x230c1d = document['createElement']('button');
    _0x230c1d['textContent'] = 'Kick';
    _0x230c1d['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x230c1d['onmouseenter'] = () => _0x230c1d['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x230c1d['onmouseleave'] = () => _0x230c1d['style']['background'] = 'transparent';
    _0x230c1d['onclick'] = () => {
        _0x406110(_0x1ec942);
        _0x38263a['remove']();
    };
    _0x38263a['appendChild'](_0x230c1d);
    const _0x5de3c9 = document['createElement']('button');
    _0x5de3c9['textContent'] = 'Ban';
    _0x5de3c9['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x5de3c9['onmouseenter'] = () => _0x5de3c9['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x5de3c9['onmouseleave'] = () => _0x5de3c9['style']['background'] = 'transparent';
    _0x5de3c9['onclick'] = () => {
        _0x46747c(_0x1ec942);
        _0x38263a['remove']();
    };
    _0x38263a['appendChild'](_0x5de3c9);
    document['body']['appendChild'](_0x38263a);
    const _0x12e293 = _0x38263a['offsetWidth'] || 0x91;
    const _0xc0d028 = _0x38263a['offsetHeight'] || 0x50;
    let _0x3d5dd7 = _0x10118d - _0x12e293;
    let _0x56751b = _0x2dd089;
    if (_0x3d5dd7 < 0x4)
        _0x3d5dd7 = _0x10118d;
    if (_0x56751b + _0xc0d028 > window['innerHeight'] - 0x4)
        _0x56751b = window['innerHeight'] - _0xc0d028 - 0x4;
    _0x38263a['style']['left'] = _0x3d5dd7 + 'px';
    _0x38263a['style']['top'] = _0x56751b + 'px';
    const _0x4847eb = _0x52459e => {
        if (!_0x38263a['contains'](_0x52459e['target'])) {
            _0x38263a['remove']();
            document['removeEventListener']('mousedown', _0x4847eb);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x4847eb), 0x0);
}
function _0x18e41c() {
    const _0x396179 = document['getElementById']('leaderboard-list');
    _0x396179['innerHTML'] = '';
    const _0x172ccb = document['createElement']('div');
    _0x172ccb['className'] = 'leaderboard-entry';
    const _0x4025c7 = document['createElement']('span');
    _0x4025c7['textContent'] = _0x349c55 + (_0x15a227 ? '\x20[🗝️]' : '');
    if (_0x41c3a5['has'](_0x290a14) && !_0x581054['isDead']) {
        _0x4025c7['style']['color'] = '#cc88ff';
    }
    _0x172ccb['appendChild'](_0x4025c7);
    _0x396179['appendChild'](_0x172ccb);
    for (const _0x5b22d6 in _0x37c154) {
        const _0x2637e0 = document['createElement']('div');
        _0x2637e0['className'] = 'leaderboard-entry';
        const _0x56be1d = document['createElement']('span');
        _0x56be1d['textContent'] = _0x37c154[_0x5b22d6]['name'] + (_0x37c154[_0x5b22d6]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x41c3a5['has'](parseInt(_0x5b22d6)) && !_0x37c154[_0x5b22d6]['isDead']) {
            _0x56be1d['style']['color'] = '#cc88ff';
        }
        _0x2637e0['appendChild'](_0x56be1d);
        if (_0x15a227 && !_0x37c154[_0x5b22d6]['isOwner']) {
            const _0x3667d8 = _0x37c154[_0x5b22d6]['id'];
            const _0x3ae9df = _0x37c154[_0x5b22d6]['name'];
            _0x2637e0['style']['cursor'] = 'context-menu';
            _0x2637e0['addEventListener']('contextmenu', _0x1212e4 => {
                _0x1212e4['preventDefault']();
                _0x1212e4['stopPropagation']();
                _0x1c3aff(_0x3667d8, _0x3ae9df, _0x1212e4['clientX'], _0x1212e4['clientY']);
            });
        }
        _0x396179['appendChild'](_0x2637e0);
    }
}
window['addEventListener']('resize', _0x44178a);
function _0x44178a() {
    _0x176069['width'] = window['innerWidth'];
    _0x176069['height'] = window['innerHeight'];
    _0x464bef['SYSTEM']['viewScale'] = Math['max'](_0x176069['width'] / _0x2a2e3d, _0x176069['height'] / _0xedaea3);
    _0x464bef['CAMERA']['width'] = _0x176069['width'] / _0x464bef['SYSTEM']['viewScale'];
    _0x464bef['CAMERA']['height'] = _0x176069['height'] / _0x464bef['SYSTEM']['viewScale'];
    _0x47ff2d['imageSmoothingEnabled'] = ![];
}
function _0x3fe742(_0x2be2ff) {
    if (_0x2be2ff['ctrlKey'] || _0x2be2ff['metaKey']) {
        if (_0x2be2ff['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x2be2ff['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x2be2ff['code'])) {
            _0x2be2ff['preventDefault']();
            _0x2be2ff['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x3fe742, { 'passive': ![] });
window['addEventListener']('keydown', _0x3fe742, { 'passive': ![] });
window['addEventListener']('keydown', _0x5cc941 => {
    const _0x8a6340 = _0x5cc941['key']['toLowerCase']();
    if (_0x8a6340 === 'tab') {
        _0x5cc941['preventDefault']();
        const _0x2060c7 = document['getElementById']('will-ui');
        const _0x3c92a0 = document['getElementById']('will-input');
        if (_0x2060c7['style']['display'] === 'flex') {
            _0x2060c7['style']['display'] = 'none';
            if (_0x942c1a)
                _0x942c1a['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x3c92a0['value']
                }));
            _0x3c92a0['blur']();
        } else {
            _0x2060c7['style']['display'] = 'flex';
            _0x3c92a0['focus']();
            for (let _0x1ca616 in _0x464bef['INPUTS']['keys'])
                _0x464bef['INPUTS']['keys'][_0x1ca616] = ![];
        }
        return;
    }
    if (_0x5cc941['key'] === 'Enter') {
        if (_0x32c8cc) {
            const _0x1122b4 = document['getElementById']('play-btn');
            if (_0x1122b4)
                _0x1122b4['click']();
            return;
        }
        if (!_0x942c1a || _0x942c1a['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x4c26e4 = document['getElementById']('chat-ui');
        const _0x4aef01 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x4aef01) {
            const _0x1aea33 = _0x4aef01['value']['trim']();
            if (_0x1aea33['length'] > 0x0) {
                _0x942c1a['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x1aea33
                }));
            }
            _0x4aef01['value'] = '';
            _0x4c26e4['style']['display'] = 'none';
            _0x4aef01['blur']();
        } else {
            _0x4c26e4['style']['display'] = 'block';
            _0x4aef01['focus']();
            for (let _0x288d81 in _0x464bef['INPUTS']['keys'])
                _0x464bef['INPUTS']['keys'][_0x288d81] = ![];
        }
        _0x5cc941['preventDefault']();
        return;
    }
    if (_0x5cc941['key'] === 'Escape') {
        const _0x4695f1 = document['getElementById']('guide-ui');
        if (_0x4695f1 && _0x4695f1['style']['display'] === 'flex') {
            _0x4695f1['style']['display'] = 'none';
            return;
        }
        const _0x583c46 = document['getElementById']('ability-ui');
        if (_0x583c46 && _0x583c46['style']['display'] === 'block') {
            _0x583c46['style']['display'] = 'none';
            return;
        }
        const _0xa40b4f = document['getElementById']('settings-panel');
        if (_0xa40b4f && _0xa40b4f['style']['display'] === 'block') {
            _0xa40b4f['style']['display'] = 'none';
            return;
        }
        const _0xe8fc97 = document['getElementById']('mayor-confirm-dialog');
        if (_0xe8fc97 && _0xe8fc97['style']['display'] === 'flex') {
            _0xe8fc97['style']['display'] = 'none';
            return;
        }
        const _0x4bd05f = document['getElementById']('target-chooser-ui');
        if (_0x4bd05f && _0x4bd05f['style']['display'] === 'flex') {
            _0x4bd05f['style']['display'] = 'none';
            return;
        }
        const _0x1d3e12 = document['getElementById']('chat-ui');
        const _0x5e9927 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x5e9927) {
            _0x5e9927['value'] = '';
            _0x1d3e12['style']['display'] = 'none';
            _0x5e9927['blur']();
            _0x5cc941['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x464bef['INPUTS']['keys']['hasOwnProperty'](_0x8a6340))
            _0x464bef['INPUTS']['keys'][_0x8a6340] = !![];
        if (!_0x942c1a || _0x942c1a['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x8a6340 === 'h' && !_0x5cc941['repeat']) {
            const _0x1ae231 = document['getElementById']('guide-ui');
            if (_0x1ae231) {
                _0x1ae231['style']['display'] = _0x1ae231['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x8a6340 === 't' && !_0x5cc941['repeat']) {
            if (_0x581054['isDead'])
                return;
            if (_0x1a5452 === 'Mayor') {
                if (_0x41c3a5['has'](_0x290a14)) {
                    _0x5f4ca6('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x417881 = document['getElementById']('mayor-confirm-dialog');
                if (_0x417881)
                    _0x417881['style']['display'] = 'flex';
                return;
            }
            if (_0x464bef['GAME_STATE'] === 'NIGHT') {
                if (!_0x464bef['NIGHT_ABILITY_OPEN']) {
                    _0x5f4ca6('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x4ca83a = document['getElementById']('ability-ui');
                if (_0x4ca83a) {
                    if (_0x4ca83a['style']['display'] === 'block') {
                        _0x4ca83a['style']['display'] = 'none';
                    } else {
                        _0xae8d6d();
                        _0x4ca83a['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x464bef['GAME_STATE'] === 'DAY_DISCUSS' || _0x464bef['GAME_STATE'] === 'DAY_VOTE') {
                _0x5f4ca6('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x8a6340 === 'e' && !_0x581054['isDead']) {
            const _0x2fe6ef = Date['now']();
            if (!window['_lastDoorSend'] || _0x2fe6ef - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x2fe6ef;
                _0x942c1a['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x4fa255 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x21d8f6 = _0x4fa255['key']['toLowerCase']();
        if (_0x464bef['INPUTS']['keys']['hasOwnProperty'](_0x21d8f6))
            _0x464bef['INPUTS']['keys'][_0x21d8f6] = ![];
    }
});
window['addEventListener']('mousemove', _0xa397b7 => {
    _0x464bef['INPUTS']['mouseX'] = _0xa397b7['clientX'];
    _0x464bef['INPUTS']['mouseY'] = _0xa397b7['clientY'];
    if (_0x464bef['INPUTS']['isMouseDown'] && _0x464bef['EDITOR']['enabled']) {
        _0x5c6785(_0xa397b7['clientX'], _0xa397b7['clientY']);
    }
});
window['addEventListener']('mousedown', _0x6da2b3 => {
    if (_0x6da2b3['target']['closest']('#editor-ui') || _0x6da2b3['target']['closest']('#leaderboard-ui') || _0x6da2b3['target']['closest']('#chat-log-ui') || _0x6da2b3['target']['closest']('#target-chooser-ui') || _0x6da2b3['target']['closest']('#guide-ui') || _0x6da2b3['target']['closest']('#role-list-ui') || _0x6da2b3['target']['closest']('#ability-ui') || _0x6da2b3['target']['closest']('#settings-panel') || _0x6da2b3['target']['closest']('#mayor-confirm-dialog') || _0x6da2b3['target']['closest']('#mobile-action-bar') || _0x6da2b3['target']['closest']('#mobile-top-bar') || _0x6da2b3['target']['closest']('#mobile-joystick-zone') || _0x6da2b3['target']['closest']('#mobile-chat-overlay') || _0x6da2b3['target']['closest']('#will-ui') || _0x6da2b3['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x6da2b3['button'] === 0x0) {
        _0x464bef['INPUTS']['isMouseDown'] = !![];
        if (_0x464bef['EDITOR']['enabled'])
            _0x5c6785(_0x6da2b3['clientX'], _0x6da2b3['clientY']);
    }
});
window['addEventListener']('mouseup', _0x2ffaa1 => {
    _0x464bef['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x562e8f => {
    if (_0x562e8f['target']['closest']('#settings-btn'))
        return;
    const _0x2869e6 = document['getElementById']('leaderboard-list');
    const _0x5afd84 = document['getElementById']('leaderboard-toggle');
    if (_0x2869e6['style']['display'] === 'none') {
        _0x2869e6['style']['display'] = 'flex';
        _0x5afd84['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x2869e6['style']['display'] = 'none';
        _0x5afd84['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x219508 = document['getElementById']('close-target-btn');
if (_0x219508) {
    _0x219508['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x5042ec = document['getElementById']('close-guide-btn');
if (_0x5042ec) {
    _0x5042ec['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x112498 = document['getElementById']('role-list-header');
if (_0x112498) {
    _0x112498['addEventListener']('click', () => {
        const _0x4da425 = document['getElementById']('role-list-items');
        const _0x4be653 = document['getElementById']('role-list-toggle');
        if (_0x4da425['style']['display'] === 'none') {
            _0x4da425['style']['display'] = 'flex';
            _0x4be653['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x4da425['style']['display'] = 'none';
            _0x4be653['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x2dff4a() {
    const _0x269cf3 = document['getElementById']('mobile-joystick-zone');
    const _0xfccb5e = document['getElementById']('mobile-joystick-base');
    const _0x17fb64 = document['getElementById']('mobile-joystick-knob');
    if (_0x269cf3 && _0xfccb5e && _0x17fb64) {
        const _0x28e07f = 0x3e;
        const _0x3ea6a0 = (_0x180056, _0x1c227e) => {
            const _0x5f3ee0 = _0xfccb5e['getBoundingClientRect']();
            const _0x26bbe0 = _0x5f3ee0['left'] + _0x5f3ee0['width'] / 0x2;
            const _0xb09b2f = _0x5f3ee0['top'] + _0x5f3ee0['height'] / 0x2;
            const _0x1d5a13 = _0x180056 - _0x26bbe0;
            const _0x68a9ad = _0x1c227e - _0xb09b2f;
            const _0x543320 = Math['hypot'](_0x1d5a13, _0x68a9ad);
            if (_0x543320 === 0x0) {
                _0x5405a6 = 0x0;
                _0x5c42dd = 0x0;
                _0x47f18b = ![];
                _0x17fb64['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x32da41 = Math['min'](_0x543320, _0x28e07f);
            const _0x2952b7 = _0x1d5a13 / _0x543320 * _0x32da41;
            const _0x4f05c1 = _0x68a9ad / _0x543320 * _0x32da41;
            _0x5405a6 = _0x2952b7 / _0x28e07f;
            _0x5c42dd = _0x4f05c1 / _0x28e07f;
            _0x47f18b = _0x543320 >= _0x28e07f * 0.75;
            _0x17fb64['style']['transform'] = 'translate(' + _0x2952b7 + 'px,\x20' + _0x4f05c1 + 'px)';
        };
        const _0x3c5bcf = _0xbe6550 => {
            for (let _0x485819 = 0x0; _0x485819 < _0xbe6550['changedTouches']['length']; _0x485819++) {
                const _0x4339f9 = _0xbe6550['changedTouches'][_0x485819];
                if (_0xf94358 === null) {
                    _0xf94358 = _0x4339f9['identifier'];
                    _0x3dc2df = !![];
                    _0x3ea6a0(_0x4339f9['clientX'], _0x4339f9['clientY']);
                    break;
                }
            }
        };
        const _0xa9b606 = _0x1ba6b4 => {
            for (let _0x3dda0c = 0x0; _0x3dda0c < _0x1ba6b4['changedTouches']['length']; _0x3dda0c++) {
                const _0x47fbe3 = _0x1ba6b4['changedTouches'][_0x3dda0c];
                if (_0x47fbe3['identifier'] === _0xf94358) {
                    _0x3ea6a0(_0x47fbe3['clientX'], _0x47fbe3['clientY']);
                    break;
                }
            }
        };
        const _0x242bb7 = _0x3b8f5b => {
            for (let _0x3bd076 = 0x0; _0x3bd076 < _0x3b8f5b['changedTouches']['length']; _0x3bd076++) {
                const _0x3e1c76 = _0x3b8f5b['changedTouches'][_0x3bd076];
                if (_0x3e1c76['identifier'] === _0xf94358) {
                    _0xf94358 = null;
                    _0x3dc2df = ![];
                    _0x5405a6 = 0x0;
                    _0x5c42dd = 0x0;
                    _0x47f18b = ![];
                    _0x17fb64['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x269cf3['addEventListener']('touchstart', _0x16bdad => {
            _0x16bdad['preventDefault']();
            _0x3c5bcf(_0x16bdad);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0xa9b606, { 'passive': !![] });
        window['addEventListener']('touchend', _0x242bb7, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x242bb7, { 'passive': !![] });
    }
    const _0x2166c6 = (_0x43ef1d, _0x201a36) => {
        const _0x24551e = _0x43ef1d / _0x464bef['SYSTEM']['viewScale'];
        const _0x43ff98 = _0x201a36 / _0x464bef['SYSTEM']['viewScale'];
        const _0x4dd65b = _0x581054['x'] - _0x464bef['CAMERA']['x'] + _0x581054['width'] / 0x2;
        const _0x731bb0 = _0x581054['y'] - _0x464bef['CAMERA']['y'] + _0x581054['height'] / 0x2;
        _0x262c26 = Math['atan2'](_0x43ff98 - _0x731bb0, _0x24551e - _0x4dd65b);
        _0x3674bf = !![];
        _0x464bef['INPUTS']['mouseX'] = _0x43ef1d;
        _0x464bef['INPUTS']['mouseY'] = _0x201a36;
    };
    _0x176069['addEventListener']('touchstart', _0x3f2466 => {
        if (_0x32c8cc)
            return;
        for (let _0x1d081e = 0x0; _0x1d081e < _0x3f2466['changedTouches']['length']; _0x1d081e++) {
            const _0x5062a7 = _0x3f2466['changedTouches'][_0x1d081e];
            if (_0x5062a7['identifier'] !== _0xf94358 && _0x23aa49 === null) {
                _0x23aa49 = _0x5062a7['identifier'];
                _0x2166c6(_0x5062a7['clientX'], _0x5062a7['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x176069['addEventListener']('touchmove', _0x3d02fc => {
        if (_0x32c8cc)
            return;
        for (let _0x475304 = 0x0; _0x475304 < _0x3d02fc['changedTouches']['length']; _0x475304++) {
            const _0x5a172f = _0x3d02fc['changedTouches'][_0x475304];
            if (_0x5a172f['identifier'] === _0x23aa49) {
                _0x2166c6(_0x5a172f['clientX'], _0x5a172f['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x155af9 = _0x3da3bf => {
        for (let _0x59a301 = 0x0; _0x59a301 < _0x3da3bf['changedTouches']['length']; _0x59a301++) {
            const _0x36157c = _0x3da3bf['changedTouches'][_0x59a301];
            if (_0x36157c['identifier'] === _0x23aa49) {
                _0x23aa49 = null;
                _0x3674bf = ![];
                break;
            }
        }
    };
    _0x176069['addEventListener']('touchend', _0x155af9, { 'passive': !![] });
    _0x176069['addEventListener']('touchcancel', _0x155af9, { 'passive': !![] });
    const _0x3f9acd = document['getElementById']('mob-sprint-btn');
    if (_0x3f9acd) {
        _0x3f9acd['addEventListener']('click', _0xfdd18a => {
            _0xfdd18a['stopPropagation']();
            _0x5e3b9e = !_0x5e3b9e;
            _0x3f9acd['classList']['toggle']('active', _0x5e3b9e);
        });
    }
    const _0x16d71a = document['getElementById']('mob-interact-btn');
    if (_0x16d71a) {
        _0x16d71a['addEventListener']('click', _0xeb9ea6 => {
            _0xeb9ea6['stopPropagation']();
            if (!_0x581054['isDead']) {
                const _0xe54b52 = Date['now']();
                if (!window['_lastDoorSend'] || _0xe54b52 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0xe54b52;
                    if (_0x942c1a && _0x942c1a['readyState'] === WebSocket['OPEN'])
                        _0x942c1a['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x3c95d1 = document['getElementById']('mob-ability-btn');
    if (_0x3c95d1) {
        _0x3c95d1['addEventListener']('click', _0x559e10 => {
            _0x559e10['stopPropagation']();
            if (_0x581054['isDead'])
                return;
            if (_0x1a5452 === 'Mayor') {
                if (_0x41c3a5['has'](_0x290a14)) {
                    _0x5f4ca6('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x4a4ef3 = document['getElementById']('mayor-confirm-dialog');
                if (_0x4a4ef3)
                    _0x4a4ef3['style']['display'] = 'flex';
                return;
            }
            if (_0x464bef['GAME_STATE'] === 'NIGHT') {
                if (!_0x464bef['NIGHT_ABILITY_OPEN']) {
                    _0x5f4ca6('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x43d91e = document['getElementById']('ability-ui');
                if (_0x43d91e) {
                    if (_0x43d91e['style']['display'] === 'block') {
                        _0x43d91e['style']['display'] = 'none';
                    } else {
                        _0xae8d6d();
                        _0x43d91e['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x464bef['GAME_STATE'] === 'DAY_DISCUSS' || _0x464bef['GAME_STATE'] === 'DAY_VOTE') {
                _0x5f4ca6('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x5b7b3e = document['getElementById']('mob-will-btn');
    const _0x25aeb4 = document['getElementById']('will-ui');
    const _0x57599c = document['getElementById']('will-input');
    const _0x3daaaa = document['getElementById']('close-will-btn');
    const _0x1e0c07 = () => {
        if (!_0x25aeb4)
            return;
        if (_0x25aeb4['style']['display'] === 'flex') {
            _0x25aeb4['style']['display'] = 'none';
            if (_0x942c1a && _0x942c1a['readyState'] === WebSocket['OPEN'] && _0x57599c) {
                _0x942c1a['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x57599c['value']
                }));
            }
            if (_0x57599c)
                _0x57599c['blur']();
        } else {
            _0x25aeb4['style']['display'] = 'flex';
            if (_0x57599c)
                _0x57599c['focus']();
        }
    };
    if (_0x5b7b3e)
        _0x5b7b3e['addEventListener']('click', _0x40b507 => {
            _0x40b507['stopPropagation']();
            _0x1e0c07();
        });
    if (_0x3daaaa)
        _0x3daaaa['addEventListener']('click', _0x2d9491 => {
            _0x2d9491['stopPropagation']();
            _0x1e0c07();
        });
    const _0x316e42 = document['getElementById']('mob-chat-btn');
    const _0x1f35e2 = document['getElementById']('mobile-chat-overlay');
    const _0x306122 = document['getElementById']('mobile-chat-input');
    const _0x33f239 = document['getElementById']('mobile-chat-send');
    const _0x11953a = document['getElementById']('mobile-chat-cancel');
    const _0x482e4e = () => {
        if (!_0x1f35e2 || !_0x306122)
            return;
        _0x1f35e2['style']['display'] = 'flex';
        _0x306122['value'] = '';
        _0x306122['focus']();
    };
    const _0x3b89b5 = () => {
        if (!_0x1f35e2 || !_0x306122)
            return;
        _0x1f35e2['style']['display'] = 'none';
        _0x306122['blur']();
    };
    const _0x3b500b = () => {
        if (!_0x306122)
            return;
        const _0x527bd2 = _0x306122['value']['trim']();
        if (_0x527bd2['length'] > 0x0 && _0x942c1a && _0x942c1a['readyState'] === WebSocket['OPEN']) {
            _0x942c1a['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x527bd2
            }));
        }
        _0x306122['value'] = '';
        _0x3b89b5();
    };
    if (_0x316e42)
        _0x316e42['addEventListener']('click', _0x33a87a => {
            _0x33a87a['stopPropagation']();
            _0x482e4e();
        });
    if (_0x33f239)
        _0x33f239['addEventListener']('click', _0x5edbae => {
            _0x5edbae['stopPropagation']();
            _0x3b500b();
        });
    if (_0x11953a)
        _0x11953a['addEventListener']('click', _0x5469e0 => {
            _0x5469e0['stopPropagation']();
            _0x3b89b5();
        });
    if (_0x306122) {
        _0x306122['addEventListener']('keydown', _0x5ba470 => {
            if (_0x5ba470['key'] === 'Enter') {
                _0x5ba470['preventDefault']();
                _0x3b500b();
            } else if (_0x5ba470['key'] === 'Escape') {
                _0x3b89b5();
            }
        });
    }
    const _0x33b14e = document['getElementById']('mob-top-chat');
    if (_0x33b14e)
        _0x33b14e['addEventListener']('click', _0x2b724e => {
            _0x2b724e['stopPropagation']();
            _0x482e4e();
        });
    const _0x5bf119 = document['getElementById']('mob-top-will');
    if (_0x5bf119)
        _0x5bf119['addEventListener']('click', _0x350e22 => {
            _0x350e22['stopPropagation']();
            _0x1e0c07();
        });
    const _0x2b601c = document['getElementById']('mob-top-roles');
    if (_0x2b601c) {
        _0x2b601c['addEventListener']('click', _0x291202 => {
            _0x291202['stopPropagation']();
            const _0xd2e03d = document['getElementById']('role-list-ui');
            const _0x22bb9a = document['getElementById']('leaderboard-ui');
            if (_0x22bb9a)
                _0x22bb9a['style']['display'] = 'none';
            if (_0xd2e03d)
                _0xd2e03d['style']['display'] = _0xd2e03d['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x5d4815 = document['getElementById']('mob-top-players');
    if (_0x5d4815) {
        _0x5d4815['addEventListener']('click', _0x3ee69c => {
            _0x3ee69c['stopPropagation']();
            const _0x41282f = document['getElementById']('leaderboard-ui');
            const _0x510c89 = document['getElementById']('role-list-ui');
            if (_0x510c89)
                _0x510c89['style']['display'] = 'none';
            if (_0x41282f)
                _0x41282f['style']['display'] = _0x41282f['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x31ec14 = document['getElementById']('mob-top-help');
    if (_0x31ec14) {
        _0x31ec14['addEventListener']('click', _0x4f7a85 => {
            _0x4f7a85['stopPropagation']();
            const _0xa9caf1 = document['getElementById']('guide-ui');
            if (_0xa9caf1)
                _0xa9caf1['style']['display'] = _0xa9caf1['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x2addbf) {
            _0x2addbf = !![];
            _0x4b8c35();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
