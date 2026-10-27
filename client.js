document['addEventListener']('contextmenu', _0xdeb29f => _0xdeb29f['preventDefault']());
const _0xf8b3d1 = {
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
let _0x50ae8b = '';
function _0x81af2d(_0x38d730, _0x25247c) {
    const _0x4f52b8 = document['getElementById']('role-list-ui');
    const _0x52e932 = document['getElementById']('role-list-items');
    if (!_0x4f52b8 || !_0x52e932)
        return;
    if (!_0x25247c || _0x25247c === 'off' || !_0x38d730 || _0x38d730['length'] === 0x0) {
        _0x4f52b8['style']['display'] = 'none';
        return;
    }
    const _0x16c753 = _0x25247c + '|' + JSON['stringify'](_0x38d730);
    if (_0x16c753 === _0x50ae8b)
        return;
    _0x50ae8b = _0x16c753;
    const _0x1fb61a = document['getElementById']('role-tooltip');
    if (_0x1fb61a) {
        _0x1fb61a['style']['visibility'] = 'hidden';
        _0x1fb61a['style']['opacity'] = '0';
    }
    _0x4f52b8['style']['display'] = 'flex';
    _0x52e932['innerHTML'] = '';
    _0x38d730['forEach'](_0x47c8dd => {
        const _0x2e0720 = document['createElement']('div');
        _0x2e0720['className'] = 'role-list-entry';
        const _0x268dba = _0x47c8dd['name']['includes']('Mafia') || _0x47c8dd['name'] === 'Skinwalker' || _0x47c8dd['name'] === 'Blackmailer';
        _0x2e0720['classList']['add'](_0x268dba ? 'mafia' : 'town');
        if (_0x25247c === 'precise' && _0x47c8dd['isDead']) {
            _0x2e0720['classList']['remove']('town', 'mafia');
            _0x2e0720['classList']['add']('dead');
            _0x2e0720['innerHTML'] = '<span>' + _0x47c8dd['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x153eca = _0x47c8dd['count'] !== undefined && _0x47c8dd['count'] !== null ? _0x47c8dd['count'] + 'x\x20' : '';
            _0x2e0720['innerHTML'] = '<span>' + _0x153eca + _0x47c8dd['name'] + '</span>';
        }
        if (_0x25247c === 'subalignments' && _0xf8b3d1[_0x47c8dd['name']]) {
            _0x2e0720['style']['cursor'] = 'pointer';
            _0x2e0720['addEventListener']('mouseenter', () => {
                const _0x57478c = document['getElementById']('role-tooltip');
                if (!_0x57478c)
                    return;
                const _0x463b7c = _0xf8b3d1[_0x47c8dd['name']]['join'](',\x20');
                _0x57478c['innerHTML'] = '';
                const _0x164c73 = document['createElement']('span');
                _0x164c73['style']['color'] = '#ffcc00';
                _0x164c73['textContent'] = _0x47c8dd['name'];
                _0x57478c['appendChild'](_0x164c73);
                _0x57478c['appendChild'](document['createElement']('br'));
                _0x57478c['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x463b7c));
                const _0x45907c = _0x2e0720['getBoundingClientRect']();
                _0x57478c['style']['left'] = _0x45907c['left'] - 0xeb + 'px';
                _0x57478c['style']['top'] = _0x45907c['top'] + 'px';
                _0x57478c['style']['display'] = 'block';
                _0x57478c['style']['visibility'] = 'visible';
                _0x57478c['style']['opacity'] = '1';
            });
            _0x2e0720['addEventListener']('mouseleave', () => {
                const _0x23db4f = document['getElementById']('role-tooltip');
                if (_0x23db4f) {
                    _0x23db4f['style']['display'] = 'none';
                    _0x23db4f['style']['visibility'] = 'hidden';
                    _0x23db4f['style']['opacity'] = '0';
                }
            });
        }
        _0x52e932['appendChild'](_0x2e0720);
    });
}
let _0x2761d6 = null;
let _0x3bc0a7 = null;
const _0x2140f2 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x295edc = 'Player???';
let _0x27b45f = ![];
let _0x4063e4 = {};
let _0x592491 = null;
let _0x105daf = 0x0;
let _0x394f26 = 0x0;
let _0x56c575 = new Set();
let _0x1f0e33 = ![];
let _0x2253b9 = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x204da8 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x19e276 = ![];
let _0x1b1358 = null;
let _0x114fcb = 0x0;
let _0x35d0e1 = 0x0;
let _0x53c8ca = ![];
let _0x853c1d = ![];
let _0x976bc9 = 0x0;
let _0x5989d4 = null;
let _0x4d4af5 = ![];
let _0x4da813 = 0x0;
let _0x5b34d0 = 0x0;
let _0x39e8bc = [];
let _0x3cf55f = [];
let _0x568948 = new Set();
const _0x2ff65e = ((() => {
    const _0x142c81 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x582432 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x4a5838 = 0x320;
    const _0x43255e = {};
    const _0x2dd417 = {};
    let _0x1ff555 = null;
    let _0x22a332 = _0x582432 === 0x0;
    let _0x1afd9d = ![];
    for (const [_0x1d99d2, _0x397b92] of Object['entries'](_0x142c81)) {
        const _0x4a1df3 = new Audio(_0x397b92);
        _0x4a1df3['loop'] = !![];
        _0x4a1df3['volume'] = 0x0;
        _0x4a1df3['preload'] = 'auto';
        _0x43255e[_0x1d99d2] = _0x4a1df3;
        _0x2dd417[_0x1d99d2] = null;
    }
    const _0x33505d = _0x3775cb => Math['min'](0x1, Math['max'](0x0, _0x3775cb));
    function _0x2036e8(_0x166457) {
        if (_0x2dd417[_0x166457] !== null) {
            cancelAnimationFrame(_0x2dd417[_0x166457]);
            _0x2dd417[_0x166457] = null;
        }
    }
    function _0x559206(_0x226619, _0x333e0d, _0xc4a93c, _0x5cc978, _0x58ce72) {
        _0x2036e8(_0x226619);
        const _0x5bcd9b = _0x43255e[_0x226619];
        const _0x43b204 = performance['now']();
        const _0x576aab = _0x2b4287 => {
            const _0x23bbfd = _0x33505d((_0x2b4287 - _0x43b204) / _0x5cc978);
            const _0x2f2ca8 = _0x33505d(_0x333e0d + (_0xc4a93c - _0x333e0d) * _0x23bbfd);
            _0x5bcd9b['volume'] = _0x22a332 ? 0x0 : _0x2f2ca8;
            if (_0x23bbfd < 0x1) {
                _0x2dd417[_0x226619] = requestAnimationFrame(_0x576aab);
            } else {
                _0x2dd417[_0x226619] = null;
                _0x5bcd9b['volume'] = _0x22a332 ? 0x0 : _0x33505d(_0xc4a93c);
                if (_0x58ce72)
                    _0x58ce72();
            }
        };
        _0x2dd417[_0x226619] = requestAnimationFrame(_0x576aab);
    }
    function _0x165e88(_0xa23ea) {
        const _0xf4a5be = _0xa23ea['play']();
        if (_0xf4a5be && _0xf4a5be['catch']) {
            _0xf4a5be['catch'](() => {
                if (!_0x1afd9d) {
                    const _0x3db59c = () => {
                        _0x1afd9d = !![];
                        _0xa23ea['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x3db59c);
                        document['removeEventListener']('keydown', _0x3db59c);
                        document['removeEventListener']('touchstart', _0x3db59c);
                    };
                    document['addEventListener']('click', _0x3db59c, { 'once': !![] });
                    document['addEventListener']('keydown', _0x3db59c, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x3db59c, { 'once': !![] });
                }
            });
        }
    }
    function _0x5a6bca(_0x5126fd) {
        if (!_0x142c81[_0x5126fd])
            return;
        if (_0x1ff555 === _0x5126fd)
            return;
        const _0x3e0e6f = _0x1ff555;
        _0x1ff555 = _0x5126fd;
        const _0x529281 = _0x43255e[_0x5126fd];
        _0x2036e8(_0x5126fd);
        _0x529281['currentTime'] = 0x0;
        _0x529281['volume'] = 0x0;
        _0x165e88(_0x529281);
        _0x559206(_0x5126fd, 0x0, _0x582432, _0x4a5838);
        if (_0x3e0e6f && _0x43255e[_0x3e0e6f]) {
            const _0x3648d0 = _0x3e0e6f;
            const _0x294706 = _0x43255e[_0x3648d0];
            const _0x123712 = _0x33505d(_0x294706['volume']);
            _0x559206(_0x3648d0, _0x123712, 0x0, _0x4a5838, () => {
                _0x294706['pause']();
                _0x294706['currentTime'] = 0x0;
            });
        }
    }
    function _0x551cc8(_0x149eb3) {
        _0x582432 = _0x33505d(_0x149eb3);
        localStorage['setItem']('musicVolume', String(_0x582432));
        if (!_0x22a332 && _0x1ff555 && _0x2dd417[_0x1ff555] === null) {
            _0x43255e[_0x1ff555]['volume'] = _0x582432;
        }
    }
    function _0x5d4f02() {
        return _0x582432;
    }
    function _0x4fc9a2(_0x1e9b3b) {
        _0x22a332 = _0x1e9b3b;
        for (const _0x355f4a of Object['keys'](_0x43255e)) {
            if (_0x2dd417[_0x355f4a] === null) {
                _0x43255e[_0x355f4a]['volume'] = _0x1e9b3b || _0x355f4a !== _0x1ff555 ? 0x0 : _0x582432;
            }
        }
    }
    function _0x15748d() {
        return _0x22a332;
    }
    function _0x3e47e5(_0x2f5547) {
        if (_0x2f5547 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x2f5547 === 'DAY_VOTE')
            return 'voting';
        if (_0x2f5547 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x371702(_0x1dd8e1) {
        _0x5a6bca(_0x3e47e5(_0x1dd8e1));
    }
    function _0x1d59e9(_0x5e8b89) {
        _0x5a6bca(_0x5e8b89);
    }
    return {
        'play': _0x5a6bca,
        'onStateChange': _0x371702,
        'onSoundEvent': _0x1d59e9,
        'setVolume': _0x551cc8,
        'getVolume': _0x5d4f02,
        'setMuted': _0x4fc9a2,
        'isMuted': _0x15748d
    };
})());
const _0x4dfe6c = ((() => {
    const _0xa6019d = 0x258;
    const _0x54e441 = 0xb4;
    const _0x3afbe3 = 0x708;
    const _0x89d465 = 0x140;
    const _0x3f195f = 0.18;
    const _0xb50d71 = 0.95;
    const _0x4cf0c5 = new Audio('audio/heartbeat.mp3');
    _0x4cf0c5['loop'] = ![];
    _0x4cf0c5['preload'] = 'auto';
    _0x4cf0c5['volume'] = 0x0;
    let _0x95d505 = 0x0;
    let _0x3c3a75 = Infinity;
    function _0x3e9d41(_0x3a238a, _0x26689f, _0x1513cd) {
        return Math['min'](_0x1513cd, Math['max'](_0x26689f, _0x3a238a));
    }
    function _0xc637ca(_0x29d9bd, _0x485742, _0x42a084) {
        return _0x29d9bd + (_0x485742 - _0x29d9bd) * _0x42a084;
    }
    function _0x32bac8(_0xa95adc) {
        if (_0x1ebc4e['GAME_STATE'] !== 'NIGHT' || _0x453c4e['isDead'] || _0x592491 === 'Skinwalker' || _0x592491 === 'Blackmailer') {
            _0x3c3a75 = Infinity;
            return;
        }
        const _0x3edcb6 = _0x453c4e['x'] + 22.5;
        const _0x54ffe3 = _0x453c4e['y'] + 22.5;
        let _0x39a6c2 = Infinity;
        for (const _0x27be4f in _0x4063e4) {
            const _0x3e13c2 = _0x4063e4[_0x27be4f];
            if (!_0x3e13c2['isDark'] || _0x3e13c2['isDead'])
                continue;
            const _0x48c76a = _0x3e13c2['renderX'] + 22.5 - _0x3edcb6;
            const _0x378e33 = _0x3e13c2['renderY'] + 22.5 - _0x54ffe3;
            const _0x20773e = Math['sqrt'](_0x48c76a * _0x48c76a + _0x378e33 * _0x378e33);
            if (_0x20773e < _0x39a6c2)
                _0x39a6c2 = _0x20773e;
        }
        _0x3c3a75 = _0x39a6c2;
        if (_0x39a6c2 > _0xa6019d)
            return;
        const _0x434cd8 = 0x1 - _0x3e9d41((_0x39a6c2 - _0x54e441) / (_0xa6019d - _0x54e441), 0x0, 0x1);
        const _0x276ed3 = _0xc637ca(_0x3afbe3, _0x89d465, _0x434cd8);
        const _0x475170 = _0xc637ca(_0x3f195f, _0xb50d71, _0x434cd8);
        if (_0xa95adc >= _0x95d505) {
            _0x4cf0c5['currentTime'] = 0x0;
            _0x4cf0c5['volume'] = _0x2ff65e['isMuted']() ? 0x0 : _0x3e9d41(_0x475170 * _0x2ff65e['getVolume']() / 0.7, 0x0, 0x1);
            _0x4cf0c5['play']()['catch'](() => {
            });
            _0x95d505 = _0xa95adc + _0x276ed3;
        }
    }
    return { 'tick': _0x32bac8 };
})());
function _0x381ff0() {
    const _0x3d1dd7 = document['getElementById']('mob-ability-btn');
    if (!_0x3d1dd7)
        return;
    const _0x21018d = _0x1ebc4e['GAME_STATE'] === 'NIGHT' && !_0x453c4e['isDead'];
    const _0x52c6f0 = _0x592491 === 'Mayor' && !_0x56c575['has'](_0x3bc0a7) && !_0x453c4e['isDead'];
    if (_0x21018d || _0x52c6f0) {
        _0x3d1dd7['style']['display'] = 'flex';
    } else {
        _0x3d1dd7['style']['display'] = 'none';
    }
}
function _0x3b1f14() {
    const _0x40fe8e = document['getElementById']('mobile-joystick-zone');
    const _0x5c13c9 = document['getElementById']('mobile-top-bar');
    const _0x190ced = document['getElementById']('mobile-action-bar');
    if (!_0x40fe8e || !_0x5c13c9 || !_0x190ced)
        return;
    if (!_0x3b6f67 && _0x204da8) {
        _0x40fe8e['style']['display'] = 'flex';
        _0x5c13c9['style']['display'] = 'flex';
        _0x190ced['style']['display'] = 'flex';
        _0x381ff0();
    } else {
        _0x40fe8e['style']['display'] = 'none';
        _0x5c13c9['style']['display'] = 'none';
        _0x190ced['style']['display'] = 'none';
    }
}
const _0x41f444 = document['getElementById']('gameCanvas');
const _0xa72f4 = _0x41f444['getContext']('2d', { 'alpha': ![] });
const _0x20ae2e = 0x500;
const _0x8f72d4 = 0x2d0;
const _0x1ebc4e = {
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
        'width': _0x20ae2e,
        'height': _0x8f72d4
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
const _0x453c4e = {
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
const _0x2ce6a6 = new Image();
const _0x52e7da = new Image();
const _0x37588b = new Image();
const _0x3109f4 = new Image();
_0x3109f4['src'] = 'assets/mayor\x20cosmetic.png';
const _0x2d292a = [
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
const _0x612693 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x19fbe0 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x19fbe0 === 'body1.png' || _0x19fbe0 === 'body1')
    _0x19fbe0 = 'body01.png';
if (!_0x19fbe0['endsWith']('.png'))
    _0x19fbe0 += '.png';
let _0x5d0fd3 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x5d0fd3['endsWith']('.png'))
    _0x5d0fd3 += '.png';
let _0x3b6f67 = !![];
let _0x12a566 = null;
let _0x149fb6 = null;
let _0x1402d0 = 0x3c;
let _0x322c0c = 0x2d;
const _0x4b405f = {};
const _0x58068e = new Image();
_0x58068e['src'] = 'assets/yanito932.png';
_0x4b405f['assets/yanito932.png'] = _0x58068e;
function _0x4f6ebb(_0x307684) {
    if (!_0x4b405f[_0x307684] || !_0x4b405f[_0x307684]['complete'] && _0x4b405f[_0x307684]['naturalWidth'] === 0x0 && _0x4b405f[_0x307684]['naturalHeight'] === 0x0) {
        const _0x269ed9 = new Image();
        _0x269ed9['src'] = _0x307684;
        _0x4b405f[_0x307684] = _0x269ed9;
    }
    return _0x4b405f[_0x307684];
}
function _0x3d8576(_0x48250f, _0x5d754b, _0x4ad3da, _0x31b86b, _0x123662) {
    try {
        const _0x1ef4ca = 'assets/' + (_0x5d754b || 'body01.png');
        const _0x4fd90b = _0x4f6ebb(_0x1ef4ca);
        if (_0x4fd90b['complete'] && _0x4fd90b['naturalWidth'] > 0x0) {
            _0x48250f['drawImage'](_0x4fd90b, -_0x31b86b / 0x2, -_0x123662 / 0x2, _0x31b86b, _0x123662);
        }
        if (_0x4ad3da === null || _0x4ad3da === undefined)
            return;
        const _0x2d0c3c = 'assets/' + _0x4ad3da;
        const _0x8d66d0 = _0x4f6ebb(_0x2d0c3c);
        if (_0x8d66d0['complete'] && _0x8d66d0['naturalWidth'] > 0x0) {
            _0x48250f['drawImage'](_0x8d66d0, -_0x31b86b / 0x2, -_0x123662 / 0x2, _0x31b86b, _0x123662);
        }
    } catch (_0x5f92d9) {
    }
}
function _0x1cd250() {
    const _0x5949f1 = document['getElementById']('body-skin-grid');
    const _0x278a58 = document['getElementById']('eyes-skin-grid');
    if (!_0x5949f1 || !_0x278a58)
        return;
    _0x5949f1['innerHTML'] = '';
    _0x2d292a['forEach'](_0x2a01c7 => {
        const _0x40820a = document['createElement']('button');
        _0x40820a['className'] = 'skin-btn' + (_0x2a01c7 === _0x19fbe0 ? '\x20selected' : '');
        const _0x3dcf9b = document['createElement']('img');
        _0x3dcf9b['src'] = 'assets/' + _0x2a01c7;
        _0x40820a['appendChild'](_0x3dcf9b);
        _0x40820a['onclick'] = () => {
            _0x19fbe0 = _0x2a01c7;
            localStorage['setItem']('selectedBody', _0x2a01c7);
            _0x5949f1['querySelectorAll']('.skin-btn')['forEach'](_0x19f566 => _0x19f566['classList']['remove']('selected'));
            _0x40820a['classList']['add']('selected');
        };
        _0x5949f1['appendChild'](_0x40820a);
    });
    _0x278a58['innerHTML'] = '';
    _0x612693['forEach'](_0xcb93aa => {
        const _0x3cf546 = document['createElement']('button');
        _0x3cf546['className'] = 'skin-btn' + (_0xcb93aa === _0x5d0fd3 ? '\x20selected' : '');
        const _0x407ba1 = document['createElement']('img');
        _0x407ba1['src'] = 'assets/' + _0xcb93aa;
        _0x3cf546['appendChild'](_0x407ba1);
        _0x3cf546['onclick'] = () => {
            _0x5d0fd3 = _0xcb93aa;
            localStorage['setItem']('selectedEyes', _0xcb93aa);
            _0x278a58['querySelectorAll']('.skin-btn')['forEach'](_0x11196e => _0x11196e['classList']['remove']('selected'));
            _0x3cf546['classList']['add']('selected');
        };
        _0x278a58['appendChild'](_0x3cf546);
    });
}
function _0x26ecc8(_0x5afa98) {
    if (!_0x1ebc4e['MAP']['columns'] || !_0x1ebc4e['CAMERA']['width'])
        return;
    const _0x42cd70 = Math['max'](0x0, _0x1ebc4e['MAP']['columns'] * _0x1ebc4e['MAP']['tileSize'] - _0x1ebc4e['CAMERA']['width']);
    const _0x4cf122 = Math['max'](0x0, _0x1ebc4e['MAP']['rows'] * _0x1ebc4e['MAP']['tileSize'] - _0x1ebc4e['CAMERA']['height']);
    if (_0x12a566 === null) {
        _0x12a566 = _0x42cd70 / 0x2;
        _0x149fb6 = _0x4cf122 / 0x2;
    }
    _0x12a566 += _0x1402d0 * _0x5afa98;
    _0x149fb6 += _0x322c0c * _0x5afa98;
    if (_0x12a566 <= 0x0) {
        _0x12a566 = 0x0;
        _0x1402d0 = Math['abs'](_0x1402d0);
    } else if (_0x12a566 >= _0x42cd70) {
        _0x12a566 = _0x42cd70;
        _0x1402d0 = -Math['abs'](_0x1402d0);
    }
    if (_0x149fb6 <= 0x0) {
        _0x149fb6 = 0x0;
        _0x322c0c = Math['abs'](_0x322c0c);
    } else if (_0x149fb6 >= _0x4cf122) {
        _0x149fb6 = _0x4cf122;
        _0x322c0c = -Math['abs'](_0x322c0c);
    }
    _0x1ebc4e['CAMERA']['x'] = _0x12a566;
    _0x1ebc4e['CAMERA']['y'] = _0x149fb6;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x152001 = document['getElementById']('play-btn');
    const _0x14ef8e = document['getElementById']('username-input');
    const _0x219b24 = localStorage['getItem']('playerName');
    if (_0x219b24 && _0x14ef8e) {
        _0x14ef8e['value'] = _0x219b24;
    }
    const _0x1bdb8e = () => {
        _0x2ff65e['play']('wait');
        document['removeEventListener']('click', _0x1bdb8e);
        document['removeEventListener']('keydown', _0x1bdb8e);
        document['removeEventListener']('touchstart', _0x1bdb8e);
    };
    document['addEventListener']('click', _0x1bdb8e, { 'once': !![] });
    document['addEventListener']('keydown', _0x1bdb8e, { 'once': !![] });
    document['addEventListener']('touchstart', _0x1bdb8e, { 'once': !![] });
    if (_0x152001) {
        _0x152001['addEventListener']('click', () => {
            const _0x2ec269 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x1edeb3 = window['_FB'] && window['_FB']['_userData'];
            let _0x3905f8 = !![];
            if (_0x2ec269 && _0x1edeb3 && _0x1edeb3['username']) {
                _0x295edc = _0x1edeb3['username'];
                _0x3905f8 = ![];
            } else {
                const _0x3cae4d = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x295edc = 'user' + _0x3cae4d;
                _0x3905f8 = !![];
            }
            const _0x5218fa = _0x3905f8 ? 'body01.png' : _0x19fbe0;
            const _0x2a25a2 = _0x3905f8 ? 'eyes4.png' : _0x5d0fd3;
            const _0x4c6eab = !_0x3905f8 && _0x1edeb3 && _0x1edeb3['photoURL'] ? _0x1edeb3['photoURL'] : '';
            const _0x2e2a45 = !_0x3905f8 && _0x2ec269 ? _0x2ec269['uid'] : '';
            localStorage['setItem']('playerName', _0x295edc);
            _0x3b6f67 = ![];
            _0x1ebc4e['CAMERA']['x'] = null;
            _0x1ebc4e['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x1b4730 = document['getElementById']('chat-log-wrap');
            if (_0x1b4730)
                _0x1b4730['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x4625ce = document['getElementById']('controls-hint');
            if (_0x4625ce && !_0x204da8)
                _0x4625ce['style']['display'] = 'block';
            _0x3b1f14();
            if (_0x204da8) {
                const _0x55d2d9 = document['getElementById']('leaderboard-list');
                const _0x4404d6 = document['getElementById']('leaderboard-toggle');
                if (_0x55d2d9) {
                    _0x55d2d9['style']['display'] = 'none';
                    if (_0x4404d6)
                        _0x4404d6['style']['transform'] = 'rotate(180deg)';
                }
                const _0x1db55e = document['getElementById']('role-list-items');
                const _0x42d087 = document['getElementById']('role-list-toggle');
                if (_0x1db55e) {
                    _0x1db55e['style']['display'] = 'none';
                    if (_0x42d087)
                        _0x42d087['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x357afb = !_0x3905f8 && _0x1edeb3 ? {
                'townWins': _0x1edeb3['townWins'] || 0x0,
                'mafiaWins': _0x1edeb3['mafiaWins'] || 0x0,
                'deaths': _0x1edeb3['deaths'] || 0x0,
                'townLosses': _0x1edeb3['townLosses'] || 0x0,
                'mafiaLosses': _0x1edeb3['mafiaLosses'] || 0x0
            } : null;
            const _0xe2c4e9 = JSON['stringify']({
                'type': 'join',
                'name': _0x295edc,
                'token': _0x2140f2,
                'body': _0x5218fa,
                'eyes': _0x2a25a2,
                'isGuest': _0x3905f8,
                'uid': _0x2e2a45,
                'photoURL': _0x4c6eab,
                'accountStats': _0x357afb
            });
            if (_0x2761d6 && _0x2761d6['readyState'] === WebSocket['OPEN']) {
                _0x2761d6['send'](_0xe2c4e9);
            } else if (!_0x2761d6 || _0x2761d6['readyState'] === WebSocket['CLOSED'] || _0x2761d6['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0xe2c4e9;
                _0x57f7c1();
            }
        });
    }
    _0x1cd250();
    _0x57f7c1();
    _0x15698f();
    _0x3e7154();
    _0xbaaef8();
    _0x4c06f8();
});
const _0x12e9a0 = [
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
let _0x5490c0 = 'Town';
let _0x451865 = 0x0;
function _0x8ca6eb() {
    const _0x271c27 = document['getElementById']('role-index-main-tabs');
    const _0x38c84d = document['getElementById']('role-index-tabs');
    const _0x26b87c = document['getElementById']('role-index-body');
    if (!_0x38c84d || !_0x26b87c)
        return;
    if (_0x271c27) {
        _0x271c27['innerHTML'] = '';
        const _0x3f073c = document['createElement']('button');
        _0x3f073c['className'] = 'role-index-main-tab-btn\x20main-town' + (_0x5490c0 === 'Town' ? '\x20active' : '');
        _0x3f073c['textContent'] = 'TOWN';
        _0x3f073c['addEventListener']('click', () => {
            _0x5490c0 = 'Town';
            _0x451865 = 0x0;
            _0x8ca6eb();
        });
        _0x271c27['appendChild'](_0x3f073c);
        const _0x2139fb = document['createElement']('button');
        _0x2139fb['className'] = 'role-index-main-tab-btn\x20main-mafia' + (_0x5490c0 === 'Mafia' ? '\x20active' : '');
        _0x2139fb['textContent'] = 'MAFIA';
        _0x2139fb['addEventListener']('click', () => {
            _0x5490c0 = 'Mafia';
            _0x451865 = 0x0;
            _0x8ca6eb();
        });
        _0x271c27['appendChild'](_0x2139fb);
    }
    const _0x137cc8 = _0x12e9a0['filter'](_0x32e7ac => _0x32e7ac['faction'] === _0x5490c0);
    _0x38c84d['innerHTML'] = '';
    _0x137cc8['forEach']((_0x2127f2, _0x37e6d3) => {
        const _0x25f943 = document['createElement']('button');
        _0x25f943['className'] = 'role-index-tab-btn' + (_0x2127f2['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x37e6d3 === _0x451865 ? '\x20active' : '');
        _0x25f943['textContent'] = _0x2127f2['name'];
        _0x25f943['addEventListener']('click', () => {
            _0x451865 = _0x37e6d3;
            _0x8ca6eb();
        });
        _0x38c84d['appendChild'](_0x25f943);
    });
    const _0x2cb9d4 = _0x137cc8[_0x451865] || _0x137cc8[0x0];
    _0x26b87c['innerHTML'] = '';
    if (!_0x2cb9d4)
        return;
    const _0x12c39d = document['createElement']('div');
    _0x12c39d['className'] = 'role-index-title-row';
    const _0x1e7081 = document['createElement']('span');
    _0x1e7081['className'] = 'role-index-name\x20' + (_0x2cb9d4['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0x1e7081['textContent'] = _0x2cb9d4['name'];
    _0x12c39d['appendChild'](_0x1e7081);
    const _0x4c025a = document['createElement']('span');
    _0x4c025a['className'] = 'role-index-faction-badge\x20' + (_0x2cb9d4['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x4c025a['textContent'] = _0x2cb9d4['faction'];
    _0x12c39d['appendChild'](_0x4c025a);
    _0x26b87c['appendChild'](_0x12c39d);
    _0x2cb9d4['paragraphs']['forEach'](_0x449933 => {
        const _0x1e80de = document['createElement']('p');
        _0x1e80de['className'] = 'role-index-desc-paragraph';
        _0x1e80de['innerHTML'] = _0x449933;
        _0x26b87c['appendChild'](_0x1e80de);
    });
}
function _0x4c06f8() {
    const _0x5b75e9 = document['getElementById']('role-index-btn');
    const _0x5a53ee = document['getElementById']('role-index-modal');
    const _0x3d6e28 = document['getElementById']('close-role-index-btn');
    const _0x698d83 = document['getElementById']('mob-top-index');
    if (_0x5b75e9 && _0x5a53ee) {
        _0x5b75e9['addEventListener']('click', _0x12ce00 => {
            _0x12ce00['stopPropagation']();
            if (_0x5a53ee['style']['display'] === 'none' || !_0x5a53ee['style']['display']) {
                _0x8ca6eb();
                _0x5a53ee['style']['display'] = 'flex';
            } else {
                _0x5a53ee['style']['display'] = 'none';
            }
        });
    }
    if (_0x3d6e28 && _0x5a53ee) {
        _0x3d6e28['addEventListener']('click', _0x21d1a6 => {
            _0x21d1a6['stopPropagation']();
            _0x5a53ee['style']['display'] = 'none';
        });
    }
    if (_0x698d83 && _0x5a53ee) {
        _0x698d83['addEventListener']('click', _0x37d5c2 => {
            _0x37d5c2['stopPropagation']();
            if (_0x5a53ee['style']['display'] === 'none' || !_0x5a53ee['style']['display']) {
                _0x8ca6eb();
                _0x5a53ee['style']['display'] = 'flex';
            } else {
                _0x5a53ee['style']['display'] = 'none';
            }
        });
    }
}
function _0x3e7154() {
    const _0x1e51c9 = document['getElementById']('settings-btn');
    const _0x5bff5f = document['getElementById']('settings-panel');
    const _0x324aca = document['getElementById']('close-settings-btn');
    const _0x46b55a = document['getElementById']('setting-mouse-relative');
    if (_0x46b55a) {
        _0x46b55a['checked'] = _0x2253b9;
        _0x46b55a['addEventListener']('change', () => {
            _0x2253b9 = _0x46b55a['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x2253b9 ? 'true' : 'false');
        });
    }
    const _0x122a6e = document['getElementById']('setting-music-volume');
    const _0x5a0c9c = document['getElementById']('setting-music-volume-display');
    function _0x27f540(_0x12e74f) {
        const _0x5353c9 = (_0x12e74f['value'] - _0x12e74f['min']) / (_0x12e74f['max'] - _0x12e74f['min']) * 0x64;
        _0x12e74f['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x5353c9 + '%,\x20#444\x20' + _0x5353c9 + '%)';
    }
    if (_0x122a6e) {
        const _0xc7b36c = _0x2ff65e['getVolume']();
        const _0x11e0c8 = Math['round'](_0xc7b36c * 0x64);
        _0x122a6e['value'] = _0x11e0c8;
        if (_0x5a0c9c)
            _0x5a0c9c['textContent'] = _0x11e0c8 + '%';
        _0x27f540(_0x122a6e);
        _0x122a6e['addEventListener']('input', () => {
            const _0x2cee99 = parseInt(_0x122a6e['value'], 0xa);
            if (_0x5a0c9c)
                _0x5a0c9c['textContent'] = _0x2cee99 + '%';
            _0x27f540(_0x122a6e);
            _0x2ff65e['setVolume'](_0x2cee99 / 0x64);
            _0x2ff65e['setMuted'](_0x2cee99 === 0x0);
        });
    }
    if (_0x1e51c9 && _0x5bff5f) {
        _0x1e51c9['addEventListener']('click', _0xb32fb1 => {
            _0xb32fb1['stopPropagation']();
            _0x5bff5f['style']['display'] = _0x5bff5f['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x324aca && _0x5bff5f) {
        _0x324aca['addEventListener']('click', () => {
            _0x5bff5f['style']['display'] = 'none';
        });
    }
    const _0x150973 = document['getElementById']('mayor-confirm-yes');
    const _0x11455e = document['getElementById']('mayor-confirm-no');
    const _0x31b9c8 = document['getElementById']('mayor-confirm-dialog');
    if (_0x150973 && _0x31b9c8) {
        _0x150973['addEventListener']('click', () => {
            if (_0x2761d6 && _0x2761d6['readyState'] === WebSocket['OPEN']) {
                _0x2761d6['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x31b9c8['style']['display'] = 'none';
        });
    }
    if (_0x11455e && _0x31b9c8) {
        _0x11455e['addEventListener']('click', () => {
            _0x31b9c8['style']['display'] = 'none';
        });
    }
    const _0x44e7ab = document['getElementById']('close-ability-btn');
    if (_0x44e7ab) {
        _0x44e7ab['addEventListener']('click', () => {
            const _0x1c3bf6 = document['getElementById']('ability-ui');
            if (_0x1c3bf6)
                _0x1c3bf6['style']['display'] = 'none';
        });
    }
}
let _0x2a49d2 = '';
function _0x3c6328(_0x21b163) {
    const _0x3dc6a4 = document['getElementById']('vote-tally-panel');
    const _0x55de61 = document['getElementById']('vote-tally-list');
    if (!_0x3dc6a4 || !_0x55de61)
        return;
    if (_0x21b163['state'] !== 'DAY_VOTE') {
        _0x3dc6a4['style']['display'] = 'none';
        _0x2a49d2 = '';
        return;
    }
    _0x3dc6a4['style']['display'] = 'block';
    const _0x1eec9b = {};
    for (const _0x202a30 in _0x4063e4) {
        if (!_0x4063e4[_0x202a30]['isDead'])
            _0x1eec9b[_0x202a30] = 0x0;
    }
    if (_0x3bc0a7 && !_0x453c4e['isDead'])
        _0x1eec9b[_0x3bc0a7] = 0x0;
    const _0xd6edfa = _0x21b163['votes'] || {};
    for (const _0x41c776 in _0xd6edfa) {
        const _0x553121 = _0xd6edfa[_0x41c776];
        const _0x83f9cf = _0x21b163['mayorRevealed'] && _0x21b163['mayorRevealed'][_0x41c776] ? 0x2 : 0x1;
        _0x1eec9b[_0x553121] = (_0x1eec9b[_0x553121] || 0x0) + _0x83f9cf;
    }
    let _0x114591 = 0x0;
    const _0x4330b9 = _0x21b163['skips'] || {};
    for (const _0x422838 in _0x4330b9) {
        _0x114591 += Number(_0x4330b9[_0x422838]) || 0x1;
    }
    const _0x1e424b = JSON['stringify'](_0x1eec9b) + '_' + _0x114591 + '_' + _0x453c4e['isDead'];
    if (_0x1e424b === _0x2a49d2)
        return;
    _0x2a49d2 = _0x1e424b;
    _0x55de61['innerHTML'] = '';
    for (const _0x13dedd in _0x1eec9b) {
        const _0xea3c5b = parseInt(_0x13dedd);
        const _0x8f1496 = _0xea3c5b === _0x3bc0a7 ? _0x295edc : _0x4063e4[_0x13dedd] ? _0x4063e4[_0x13dedd]['name'] : 'Player\x20' + _0x13dedd;
        const _0x1929e3 = document['createElement']('div');
        _0x1929e3['className'] = 'vote-tally-entry';
        const _0x18daed = document['createElement']('span');
        _0x18daed['textContent'] = _0x8f1496;
        const _0x33ab12 = document['createElement']('span');
        _0x33ab12['className'] = 'vote-count';
        _0x33ab12['textContent'] = _0x1eec9b[_0x13dedd] + '\x20vote' + (_0x1eec9b[_0x13dedd] === 0x1 ? '' : 's');
        _0x1929e3['appendChild'](_0x18daed);
        _0x1929e3['appendChild'](_0x33ab12);
        if (_0xea3c5b !== _0x3bc0a7 && !_0x453c4e['isDead']) {
            _0x1929e3['style']['cursor'] = 'pointer';
            _0x1929e3['title'] = 'Vote\x20for\x20' + _0x8f1496;
            _0x1929e3['addEventListener']('click', _0x416f0c => {
                _0x416f0c['stopPropagation']();
                if (_0x2761d6 && _0x2761d6['readyState'] === WebSocket['OPEN']) {
                    _0x2761d6['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x8f1496
                    }));
                }
            });
        }
        _0x55de61['appendChild'](_0x1929e3);
    }
    const _0x2aa023 = document['createElement']('div');
    _0x2aa023['className'] = 'vote-tally-skip';
    _0x2aa023['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x114591 + '</span>';
    if (!_0x453c4e['isDead']) {
        _0x2aa023['style']['cursor'] = 'pointer';
        _0x2aa023['title'] = 'Click\x20to\x20skip\x20vote';
        _0x2aa023['addEventListener']('click', _0x11d071 => {
            _0x11d071['stopPropagation']();
            if (_0x2761d6 && _0x2761d6['readyState'] === WebSocket['OPEN']) {
                _0x2761d6['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x55de61['appendChild'](_0x2aa023);
}
let _0x56afae = null;
let _0x419136 = null;
let _0x41ebf0 = null;
let _0x1c2dce = null;
let _0x117567 = null;
function _0x53a395() {
    if (_0x2761d6 && _0x2761d6['readyState'] === WebSocket['OPEN']) {
        _0x2761d6['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x56afae,
            'abilityTarget': _0x419136,
            'killTarget': _0x41ebf0
        }));
    }
}
function _0x34b0e9() {
    if (_0x2761d6 && _0x2761d6['readyState'] === WebSocket['OPEN']) {
        _0x2761d6['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'blackmailTarget': _0x1c2dce,
            'killTarget': _0x117567
        }));
    }
}
function _0x47cc2a() {
    const _0x6409ff = document['getElementById']('ability-ui-body');
    if (!_0x6409ff)
        return;
    _0x6409ff['innerHTML'] = '';
    if (_0x592491 === 'Celebrity' || _0x592491 === 'Mayor') {
        const _0x2cc5d2 = document['createElement']('div');
        _0x2cc5d2['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x2cc5d2['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x6409ff['appendChild'](_0x2cc5d2);
        return;
    }
    if (_0x592491 === 'Blackmailer') {
        const _0xdab77b = document['createElement']('div');
        _0xdab77b['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0xdab77b['innerText'] = 'Blackmail\x20Target\x20(Silences\x20for\x20full\x20day):';
        _0x6409ff['appendChild'](_0xdab77b);
        const _0x2896d8 = document['createElement']('div');
        _0x2896d8['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x47c3f9 = document['createElement']('button');
        _0x47c3f9['className'] = 'layer-btn';
        _0x47c3f9['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x47c3f9['innerText'] = 'No\x20one';
        if (_0x1c2dce === null)
            _0x47c3f9['classList']['add']('active');
        _0x47c3f9['onclick'] = () => {
            _0x1c2dce = null;
            _0x34b0e9();
            _0x47cc2a();
        };
        _0x2896d8['appendChild'](_0x47c3f9);
        for (const _0x54d836 in _0x4063e4) {
            const _0x630743 = _0x4063e4[_0x54d836];
            if (_0x630743['isDead'])
                continue;
            const _0x33f698 = document['createElement']('button');
            _0x33f698['className'] = 'layer-btn';
            _0x33f698['innerText'] = _0x630743['name'];
            if (_0x1c2dce === parseInt(_0x54d836))
                _0x33f698['classList']['add']('active');
            _0x33f698['onclick'] = () => {
                _0x1c2dce = parseInt(_0x54d836);
                _0x34b0e9();
                _0x47cc2a();
            };
            _0x2896d8['appendChild'](_0x33f698);
        }
        if (!_0x453c4e['isDead']) {
            const _0x519454 = document['createElement']('button');
            _0x519454['className'] = 'layer-btn';
            _0x519454['style']['cssText'] = 'grid-column:\x20span\x202;';
            _0x519454['innerText'] = _0x295edc + '\x20(Self\x20-\x20Decoy)';
            if (_0x1c2dce === _0x3bc0a7)
                _0x519454['classList']['add']('active');
            _0x519454['onclick'] = () => {
                _0x1c2dce = _0x3bc0a7;
                _0x34b0e9();
                _0x47cc2a();
            };
            _0x2896d8['appendChild'](_0x519454);
        }
        _0x6409ff['appendChild'](_0x2896d8);
        const _0xe0afa0 = document['createElement']('div');
        _0xe0afa0['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0xe0afa0['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x6409ff['appendChild'](_0xe0afa0);
        const _0x1c2511 = document['createElement']('div');
        _0x1c2511['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x236580 = document['createElement']('button');
        _0x236580['className'] = 'layer-btn';
        _0x236580['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x236580['innerText'] = 'No\x20one';
        if (!_0x117567 && !_0x1ebc4e['CURRENT_TARGET'])
            _0x236580['classList']['add']('active');
        _0x236580['onclick'] = () => {
            _0x117567 = null;
            _0x1ebc4e['CURRENT_TARGET'] = null;
            _0x34b0e9();
            _0x47cc2a();
        };
        _0x1c2511['appendChild'](_0x236580);
        for (const _0xbff0b6 in _0x4063e4) {
            const _0x33cedd = _0x4063e4[_0xbff0b6];
            if (_0x33cedd['isDead'])
                continue;
            const _0x34e5e9 = document['createElement']('button');
            _0x34e5e9['className'] = 'layer-btn';
            _0x34e5e9['innerText'] = _0x33cedd['name'];
            if (_0x117567 === parseInt(_0xbff0b6) || _0x1ebc4e['CURRENT_TARGET'] === parseInt(_0xbff0b6))
                _0x34e5e9['classList']['add']('active');
            _0x34e5e9['onclick'] = () => {
                _0x117567 = parseInt(_0xbff0b6);
                _0x1ebc4e['CURRENT_TARGET'] = parseInt(_0xbff0b6);
                _0x34b0e9();
                _0x47cc2a();
            };
            _0x1c2511['appendChild'](_0x34e5e9);
        }
        _0x6409ff['appendChild'](_0x1c2511);
        return;
    }
    if (_0x592491 === 'Skinwalker') {
        const _0x2bfaaa = document['createElement']('div');
        _0x2bfaaa['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x2bfaaa['innerText'] = 'Transform\x20into:';
        _0x6409ff['appendChild'](_0x2bfaaa);
        const _0xd81532 = document['createElement']('div');
        _0xd81532['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x17001a = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x39edf6 = _0x8ba63c => {
            if (_0x1ebc4e['ROLES_IN_GAME'] && Array['isArray'](_0x1ebc4e['ROLES_IN_GAME'])) {
                return _0x1ebc4e['ROLES_IN_GAME']['includes'](_0x8ba63c);
            }
            if (_0x1ebc4e['ROLE_LIST_RAW'] && _0x1ebc4e['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x1ebc4e['ROLE_LIST_RAW']['some'](_0x4c771b => _0x4c771b['name'] === _0x8ba63c && !_0x4c771b['isDead']);
            }
            return ![];
        };
        const _0x575493 = [
            'None',
            ..._0x17001a['filter'](_0x39edf6)
        ];
        _0x575493['forEach'](_0x44595d => {
            const _0x55fb50 = document['createElement']('button');
            _0x55fb50['className'] = 'layer-btn';
            _0x55fb50['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x55fb50['innerText'] = _0x44595d;
            const _0x2b90c3 = _0x44595d === 'None' && !_0x56afae || _0x56afae === _0x44595d;
            if (_0x2b90c3)
                _0x55fb50['classList']['add']('active');
            const _0x5d52af = _0x44595d !== 'None' && _0x1ebc4e['SKINWALKER_LAST_ROLE'] && _0x1ebc4e['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x44595d['toLowerCase']();
            if (_0x5d52af) {
                _0x55fb50['style']['opacity'] = '0.45';
                _0x55fb50['style']['cursor'] = 'not-allowed';
                _0x55fb50['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x55fb50['onclick'] = () => {
                    _0x398861('You\x20cannot\x20transform\x20into\x20' + _0x44595d + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x55fb50['onclick'] = () => {
                    _0x56afae = _0x44595d === 'None' ? null : _0x44595d;
                    _0x53a395();
                    _0x47cc2a();
                };
            }
            _0xd81532['appendChild'](_0x55fb50);
        });
        _0x6409ff['appendChild'](_0xd81532);
        if (_0x39edf6('Vigilante')) {
            const _0x2ad65b = document['createElement']('div');
            _0x2ad65b['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x2ad65b['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x6409ff['appendChild'](_0x2ad65b);
        }
        if (_0x56afae === 'Vigilante') {
            const _0x3e8234 = document['createElement']('div');
            _0x3e8234['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x3e8234['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x6409ff['appendChild'](_0x3e8234);
        } else if (_0x56afae && _0x56afae !== 'Celebrity') {
            const _0x414993 = document['createElement']('div');
            _0x414993['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x414993['innerText'] = 'Use\x20' + _0x56afae + '\x20ability\x20on:';
            _0x6409ff['appendChild'](_0x414993);
            const _0x28918d = document['createElement']('div');
            _0x28918d['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x178ac3 = document['createElement']('button');
            _0x178ac3['className'] = 'layer-btn';
            _0x178ac3['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x178ac3['innerText'] = 'No\x20one';
            if (!_0x419136)
                _0x178ac3['classList']['add']('active');
            _0x178ac3['onclick'] = () => {
                _0x419136 = null;
                _0x53a395();
                _0x47cc2a();
            };
            _0x28918d['appendChild'](_0x178ac3);
            for (const _0xa18209 in _0x4063e4) {
                const _0x486608 = _0x4063e4[_0xa18209];
                if (_0x486608['isDead'])
                    continue;
                const _0x5efe55 = document['createElement']('button');
                _0x5efe55['className'] = 'layer-btn';
                _0x5efe55['innerText'] = _0x486608['name'];
                if (_0x419136 === parseInt(_0xa18209))
                    _0x5efe55['classList']['add']('active');
                _0x5efe55['onclick'] = () => {
                    _0x419136 = parseInt(_0xa18209);
                    _0x53a395();
                    _0x47cc2a();
                };
                _0x28918d['appendChild'](_0x5efe55);
            }
            _0x6409ff['appendChild'](_0x28918d);
        }
        const _0x28ffa2 = document['createElement']('div');
        _0x28ffa2['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x28ffa2['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x6409ff['appendChild'](_0x28ffa2);
        const _0x24ad9d = document['createElement']('div');
        _0x24ad9d['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x3139df = document['createElement']('button');
        _0x3139df['className'] = 'layer-btn';
        _0x3139df['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x3139df['innerText'] = 'No\x20one';
        if (!_0x41ebf0 && !_0x1ebc4e['CURRENT_TARGET'])
            _0x3139df['classList']['add']('active');
        _0x3139df['onclick'] = () => {
            _0x41ebf0 = null;
            _0x1ebc4e['CURRENT_TARGET'] = null;
            _0x53a395();
            _0x47cc2a();
        };
        _0x24ad9d['appendChild'](_0x3139df);
        for (const _0x17fd23 in _0x4063e4) {
            const _0x169633 = _0x4063e4[_0x17fd23];
            if (_0x169633['isDead'])
                continue;
            const _0x14e723 = document['createElement']('button');
            _0x14e723['className'] = 'layer-btn';
            _0x14e723['innerText'] = _0x169633['name'];
            if (_0x41ebf0 === parseInt(_0x17fd23) || _0x1ebc4e['CURRENT_TARGET'] === parseInt(_0x17fd23))
                _0x14e723['classList']['add']('active');
            _0x14e723['onclick'] = () => {
                _0x41ebf0 = parseInt(_0x17fd23);
                _0x1ebc4e['CURRENT_TARGET'] = parseInt(_0x17fd23);
                _0x53a395();
                _0x47cc2a();
            };
            _0x24ad9d['appendChild'](_0x14e723);
        }
        _0x6409ff['appendChild'](_0x24ad9d);
        return;
    }
    let _0x53457d = '';
    let _0xca580b = ![];
    if (_0x592491 === 'Doctor') {
        _0x53457d = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0xca580b = !![];
    } else if (_0x592491 === 'Investigator') {
        _0x53457d = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x592491 === 'Tracker') {
        _0x53457d = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x592491 === 'Archer') {
        _0x53457d = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x592491 === 'Escort') {
        _0x53457d = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x592491 === 'Vigilante') {
        _0x53457d = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x605628 = document['createElement']('div');
    _0x605628['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x605628['innerText'] = _0x53457d;
    _0x6409ff['appendChild'](_0x605628);
    const _0x391cab = document['createElement']('div');
    _0x391cab['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0xee61b2 = document['createElement']('button');
    _0xee61b2['className'] = 'layer-btn';
    _0xee61b2['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0xee61b2['innerText'] = 'No\x20one';
    if (_0x1ebc4e['CURRENT_TARGET'] === null)
        _0xee61b2['classList']['add']('active');
    _0xee61b2['onclick'] = () => {
        _0x1ebc4e['CURRENT_TARGET'] = null;
        if (_0x2761d6 && _0x2761d6['readyState'] === WebSocket['OPEN']) {
            _0x2761d6['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x47cc2a();
    };
    _0x391cab['appendChild'](_0xee61b2);
    for (const _0x444210 in _0x4063e4) {
        const _0x2b44b8 = _0x4063e4[_0x444210];
        if (_0x2b44b8['isDead'])
            continue;
        const _0x46a459 = document['createElement']('button');
        _0x46a459['className'] = 'layer-btn';
        _0x46a459['innerText'] = _0x2b44b8['name'];
        if (_0x1ebc4e['CURRENT_TARGET'] === parseInt(_0x444210))
            _0x46a459['classList']['add']('active');
        _0x46a459['onclick'] = () => {
            _0x1ebc4e['CURRENT_TARGET'] = parseInt(_0x444210);
            if (_0x2761d6 && _0x2761d6['readyState'] === WebSocket['OPEN']) {
                _0x2761d6['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x444210)
                }));
            }
            _0x47cc2a();
        };
        _0x391cab['appendChild'](_0x46a459);
    }
    if (_0xca580b && !_0x453c4e['isDead']) {
        const _0x101747 = document['createElement']('button');
        _0x101747['className'] = 'layer-btn';
        _0x101747['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x101747['innerText'] = _0x295edc + '\x20(Self)';
        if (_0x1ebc4e['CURRENT_TARGET'] === _0x3bc0a7)
            _0x101747['classList']['add']('active');
        _0x101747['onclick'] = () => {
            _0x1ebc4e['CURRENT_TARGET'] = _0x3bc0a7;
            if (_0x2761d6 && _0x2761d6['readyState'] === WebSocket['OPEN']) {
                _0x2761d6['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x3bc0a7
                }));
            }
            _0x47cc2a();
        };
        _0x391cab['appendChild'](_0x101747);
    }
    _0x6409ff['appendChild'](_0x391cab);
}
function _0x57f7c1() {
    if (_0x2761d6 && (_0x2761d6['readyState'] === WebSocket['OPEN'] || _0x2761d6['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x420030 = new URLSearchParams();
    if (_0x2140f2)
        _0x420030['set']('token', _0x2140f2);
    _0x420030['set']('ngrok-skip-browser-warning', 'true');
    const _0x394d71 = 'wss://this-studying-motherboard-emissions.trycloudflare.com';
    const _0x4466ce = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x394d71;
    const _0x594ada = _0x4466ce + '/?' + _0x420030['toString']();
    _0x2761d6 = new WebSocket(_0x594ada);
    _0x2761d6['onopen'] = function () {
        if (!_0x3b6f67 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x66e541 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x4e259a = window['_FB'] && window['_FB']['_userData'];
                const _0x481038 = !(_0x66e541 && _0x4e259a && _0x4e259a['username']);
                const _0xf4860f = _0x481038 ? 'body01.png' : _0x19fbe0;
                const _0x478b8b = _0x481038 ? 'eyes4.png' : _0x5d0fd3;
                const _0x5b7485 = !_0x481038 && _0x4e259a && _0x4e259a['photoURL'] ? _0x4e259a['photoURL'] : '';
                const _0x182827 = !_0x481038 && _0x66e541 ? _0x66e541['uid'] : '';
                const _0x113b53 = !_0x481038 && _0x4e259a ? {
                    'townWins': _0x4e259a['townWins'] || 0x0,
                    'mafiaWins': _0x4e259a['mafiaWins'] || 0x0,
                    'deaths': _0x4e259a['deaths'] || 0x0,
                    'townLosses': _0x4e259a['townLosses'] || 0x0,
                    'mafiaLosses': _0x4e259a['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x295edc,
                    'token': _0x2140f2,
                    'body': _0xf4860f,
                    'eyes': _0x478b8b,
                    'isGuest': _0x481038,
                    'uid': _0x182827,
                    'photoURL': _0x5b7485,
                    'accountStats': _0x113b53
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x2761d6 && _0x2761d6['readyState'] === WebSocket['OPEN']) {
            _0x2761d6['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x2761d6['onclose'] = _0x28bb32 => {
        if (_0x28bb32['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x28bb32['code'] === 0xfa2 || _0x28bb32['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x51760e = document['getElementById']('disconnect-overlay');
        if (!_0x51760e) {
            _0x51760e = document['createElement']('div');
            _0x51760e['id'] = 'disconnect-overlay';
            _0x51760e['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x51760e['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x51760e);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x2761d6['onmessage'] = _0x5788f7 => {
        const _0x96ffd0 = JSON['parse'](_0x5788f7['data']);
        if (_0x96ffd0['type'] === 'map_data') {
            _0x1ebc4e['MAP']['tileSize'] = _0x96ffd0['map']['tileSize'];
            _0x1ebc4e['MAP']['columns'] = _0x96ffd0['map']['columns'];
            _0x1ebc4e['MAP']['rows'] = _0x96ffd0['map']['rows'];
            _0x1ebc4e['MAP']['layers'] = _0x96ffd0['map']['layers'];
            if (_0x96ffd0['map']['doors']) {
                _0x1ebc4e['MAP']['doors'] = _0x96ffd0['map']['doors'];
                const _0x168ddb = _0x1ebc4e['MAP']['layers']['find'](_0x36c3e4 => _0x36c3e4['name'] === 'floor2');
                if (_0x168ddb) {
                    for (const _0x584fc7 in _0x1ebc4e['MAP']['doors']) {
                        _0x168ddb['data'][parseInt(_0x584fc7)] = 0x2;
                    }
                }
            }
            if (_0x96ffd0['entities'])
                _0x1ebc4e['ENTITIES'] = _0x96ffd0['entities'];
            _0x1c51d1();
            _0x1ebc4e['SYSTEM']['isReady'] = !![];
            _0x158d8a();
            if (!_0x1ebc4e['SYSTEM']['_gameLoopRunning']) {
                _0x1ebc4e['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x130da1);
            }
            return;
        }
        if (_0x96ffd0['type'] === 'init') {
            _0x3bc0a7 = _0x96ffd0['id'];
            _0x3b6f67 = ![];
            _0x3b1f14();
            if (_0x204da8) {
                const _0x5cd662 = document['getElementById']('leaderboard-list');
                const _0xc2f20 = document['getElementById']('leaderboard-toggle');
                if (_0x5cd662) {
                    _0x5cd662['style']['display'] = 'none';
                    if (_0xc2f20)
                        _0xc2f20['style']['transform'] = 'rotate(180deg)';
                }
                const _0x3037e8 = document['getElementById']('role-list-items');
                const _0x5039cb = document['getElementById']('role-list-toggle');
                if (_0x3037e8) {
                    _0x3037e8['style']['display'] = 'none';
                    if (_0x5039cb)
                        _0x5039cb['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x27b45f = _0x96ffd0['isOwner'] || ![];
            _0x295edc = _0x96ffd0['name'] || _0x295edc;
            _0x1ebc4e['MAP']['tileSize'] = _0x96ffd0['map']['tileSize'];
            _0x1ebc4e['MAP']['columns'] = _0x96ffd0['map']['columns'];
            _0x1ebc4e['MAP']['rows'] = _0x96ffd0['map']['rows'];
            _0x1ebc4e['MAP']['layers'] = _0x96ffd0['map']['layers'];
            if (_0x96ffd0['map']['doors']) {
                _0x1ebc4e['MAP']['doors'] = _0x96ffd0['map']['doors'];
                const _0x287eb5 = _0x1ebc4e['MAP']['layers']['find'](_0x4ee9d4 => _0x4ee9d4['name'] === 'floor2');
                if (_0x287eb5) {
                    for (const _0x182ea3 in _0x1ebc4e['MAP']['doors']) {
                        _0x287eb5['data'][parseInt(_0x182ea3)] = 0x2;
                    }
                }
            }
            if (_0x96ffd0['entities'])
                _0x1ebc4e['ENTITIES'] = _0x96ffd0['entities'];
            _0x1c51d1();
            _0x453c4e['x'] = _0x1ebc4e['MAP']['columns'] * _0x1ebc4e['MAP']['tileSize'] / 0x2;
            _0x453c4e['y'] = _0x1ebc4e['MAP']['rows'] * _0x1ebc4e['MAP']['tileSize'] / 0x2;
            _0x1ebc4e['CAMERA']['x'] = _0x453c4e['x'] + _0x453c4e['width'] / 0x2 - _0x1ebc4e['CAMERA']['width'] / 0x2;
            _0x1ebc4e['CAMERA']['y'] = _0x453c4e['y'] + _0x453c4e['height'] / 0x2 - _0x1ebc4e['CAMERA']['height'] / 0x2;
            if (_0x27b45f) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x1bd9e3();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x16f458 = document['getElementById']('role-index-btn-wrap');
            if (_0x16f458)
                _0x16f458['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x1ebc4e['SYSTEM']['lastTime'] = performance['now']();
            _0x1ebc4e['SYSTEM']['isReady'] = !![];
            _0x3a7aca();
            if (!_0x1ebc4e['SYSTEM']['_gameLoopRunning']) {
                _0x1ebc4e['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x130da1);
            }
            return;
        } else if (_0x96ffd0['type'] === 'state') {
            const _0x43d7b1 = {};
            for (const _0xa5faaa in _0x96ffd0['players']) {
                if (parseInt(_0xa5faaa) === _0x3bc0a7)
                    continue;
                const _0x2a8d34 = _0x96ffd0['players'][_0xa5faaa];
                const _0x1307e4 = _0x4063e4[_0xa5faaa];
                if (_0x1307e4) {
                    const _0x23e78f = _0x2a8d34['x'] - _0x1307e4['renderX'];
                    const _0x54ad39 = _0x2a8d34['y'] - _0x1307e4['renderY'];
                    const _0x431069 = _0x23e78f * _0x23e78f + _0x54ad39 * _0x54ad39 > 0x78 * 0x78;
                    Object['assign'](_0x1307e4, _0x2a8d34);
                    if (_0x431069) {
                        _0x1307e4['renderX'] = _0x2a8d34['x'];
                        _0x1307e4['renderY'] = _0x2a8d34['y'];
                    }
                    _0x43d7b1[_0xa5faaa] = _0x1307e4;
                } else {
                    _0x43d7b1[_0xa5faaa] = {
                        ..._0x2a8d34,
                        'renderX': _0x2a8d34['x'],
                        'renderY': _0x2a8d34['y'],
                        'renderAngle': _0x2a8d34['angle'] || 0x0
                    };
                }
            }
            _0x4063e4 = _0x43d7b1;
            _0x7c9265();
            if (_0x96ffd0['players'][_0x3bc0a7]) {
                const _0x377b48 = _0x96ffd0['players'][_0x3bc0a7];
                _0x453c4e['chats'] = _0x377b48['chats'] || [];
                _0x453c4e['isDead'] = _0x377b48['isDead'];
                _0x453c4e['hasArrow'] = _0x377b48['hasArrow'] || ![];
                if (_0x377b48['name'])
                    _0x295edc = _0x377b48['name'];
                _0x3a7aca();
                const _0x14b07 = Math['hypot'](_0x377b48['x'] - _0x453c4e['x'], _0x377b48['y'] - _0x453c4e['y']);
                if (_0x14b07 > 0xfa) {
                    _0x453c4e['x'] = _0x377b48['x'];
                    _0x453c4e['y'] = _0x377b48['y'];
                } else if (_0x14b07 > 0x50) {
                    _0x453c4e['x'] += (_0x377b48['x'] - _0x453c4e['x']) * 0.06;
                    _0x453c4e['y'] += (_0x377b48['y'] - _0x453c4e['y']) * 0.06;
                }
            }
            if (_0x96ffd0['entities'])
                _0x1ebc4e['ENTITIES'] = _0x96ffd0['entities'];
            if (_0x96ffd0['game']) {
                _0x1ebc4e['GAME_STATE'] = _0x96ffd0['game']['state'];
                _0x1ebc4e['NIGHT_ABILITY_OPEN'] = _0x96ffd0['game']['nightAbilityOpen'];
                if (_0x96ffd0['game']['bloodSplatters'])
                    _0x39e8bc = _0x96ffd0['game']['bloodSplatters'];
                if (_0x96ffd0['game']['bloodDrops'])
                    _0x3cf55f = _0x96ffd0['game']['bloodDrops'];
                if (_0x96ffd0['game']['blackmailed']) {
                    _0x568948 = new Set(_0x96ffd0['game']['blackmailed']);
                } else {
                    _0x568948['clear']();
                }
                if (_0x96ffd0['game']['mayorRevealed']) {
                    for (const _0x1d96a3 in _0x96ffd0['game']['mayorRevealed']) {
                        _0x56c575['add'](parseInt(_0x1d96a3));
                    }
                }
                if (_0x1ebc4e['LAST_STATE'] !== _0x1ebc4e['GAME_STATE']) {
                    if (_0x1ebc4e['GAME_STATE'] !== 'NIGHT') {
                        _0x1ebc4e['CURRENT_TARGET'] = null;
                        _0x56afae = null;
                        _0x419136 = null;
                        _0x41ebf0 = null;
                        _0x1c2dce = null;
                        _0x117567 = null;
                        const _0x2a96fb = document['getElementById']('ability-ui');
                        if (_0x2a96fb)
                            _0x2a96fb['style']['display'] = 'none';
                    }
                    if (_0x1ebc4e['GAME_STATE'] === 'NIGHT') {
                        _0x453c4e['chats'] = [];
                        for (const _0x2447c4 in _0x4063e4) {
                            _0x4063e4[_0x2447c4]['chats'] = [];
                        }
                    }
                    _0x1ebc4e['LAST_STATE'] = _0x1ebc4e['GAME_STATE'];
                    _0x381ff0();
                    _0x2ff65e['onStateChange'](_0x1ebc4e['GAME_STATE'], _0x96ffd0['game']['nightAbilityOpen']);
                }
                const _0x3ca0f7 = document['getElementById']('phase-ui');
                if (_0x3ca0f7) {
                    if (_0x96ffd0['game']['state'] === 'LOBBY') {
                        _0x3ca0f7['style']['display'] = 'none';
                    } else {
                        _0x3ca0f7['style']['display'] = 'block';
                    }
                    let _0x10a93e = _0x96ffd0['game']['state']['replace']('_', '\x20');
                    if (_0x96ffd0['game']['state'] === 'DAY_DISCUSS') {
                        _0x10a93e = 'DAY\x20' + (_0x96ffd0['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x96ffd0['game']['timer'] + 's';
                    } else if (_0x96ffd0['game']['state'] === 'DAY_VOTE') {
                        _0x10a93e = 'DAY\x20' + (_0x96ffd0['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x96ffd0['game']['timer'] + 's';
                    } else if (_0x96ffd0['game']['state'] === 'NIGHT') {
                        const _0x5fdc36 = _0x96ffd0['game']['dayCount'] || 0x1;
                        if (_0x96ffd0['game']['nightAbilityOpen']) {
                            _0x10a93e = 'NIGHT\x20' + _0x5fdc36 + '\x20ABILITY\x20PHASE';
                            const _0xf52921 = _0x96ffd0['game']['abilityTimer'] !== undefined ? _0x96ffd0['game']['abilityTimer'] : _0x96ffd0['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0xf52921 + 's';
                        } else {
                            _0x10a93e = 'NIGHT\x20' + _0x5fdc36;
                            document['getElementById']('phase-timer')['innerText'] = _0x96ffd0['game']['timer'] + 's';
                        }
                    }
                    if (_0x96ffd0['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x10a93e;
                    }
                }
                if (_0x96ffd0['game']['state'] === 'NIGHT') {
                    const _0x36f405 = document['getElementById']('ability-timer-label');
                    if (_0x36f405) {
                        const _0x1830d6 = _0x96ffd0['game']['abilityTimer'] !== undefined ? _0x96ffd0['game']['abilityTimer'] : _0x96ffd0['game']['timer'];
                        _0x36f405['innerText'] = _0x96ffd0['game']['nightAbilityOpen'] ? _0x1830d6 + 's' : '';
                    }
                    if (_0x96ffd0['game']['nightAbilityOpen'] && !_0x1f0e33 && !_0x453c4e['isDead']) {
                        _0x1f0e33 = !![];
                        _0x47cc2a();
                        const _0x282ec0 = document['getElementById']('ability-ui');
                        if (_0x282ec0)
                            _0x282ec0['style']['display'] = 'block';
                    }
                    if (!_0x96ffd0['game']['nightAbilityOpen']) {
                        const _0x1256f8 = document['getElementById']('ability-ui');
                        if (_0x1256f8 && _0x1256f8['style']['display'] === 'block') {
                            _0x1256f8['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x1f0e33 = ![];
                }
                if (_0x96ffd0['game']['rolesInGame']) {
                    _0x1ebc4e['ROLES_IN_GAME'] = _0x96ffd0['game']['rolesInGame'];
                }
                if (_0x96ffd0['game']['skinwalkerLastRole'] !== undefined) {
                    _0x1ebc4e['SKINWALKER_LAST_ROLE'] = _0x96ffd0['game']['skinwalkerLastRole'];
                }
                if (_0x96ffd0['game']['state'] === 'NIGHT') {
                    const _0x1b8d59 = document['getElementById']('will-ui');
                    if (_0x1b8d59 && _0x1b8d59['style']['display'] === 'flex') {
                        _0x1b8d59['style']['display'] = 'none';
                        const _0x2e1a8f = document['getElementById']('will-input');
                        if (_0x2e1a8f)
                            _0x2e1a8f['blur']();
                    }
                }
                _0x3c6328(_0x96ffd0['game']);
                if (_0x96ffd0['game']['roleListMode'] !== undefined) {
                    _0x1ebc4e['ROLE_LIST_RAW'] = _0x96ffd0['game']['roleList'] || [];
                    _0x81af2d(_0x96ffd0['game']['roleList'], _0x96ffd0['game']['roleListMode']);
                }
            }
        } else if (_0x96ffd0['type'] === 'teleport') {
            _0x453c4e['x'] = _0x96ffd0['x'];
            _0x453c4e['y'] = _0x96ffd0['y'];
            _0x453c4e['vx'] = 0x0;
            _0x453c4e['vy'] = 0x0;
            _0x1ebc4e['CAMERA']['x'] = null;
            if (_0x96ffd0['teleportId'] !== undefined)
                _0x394f26 = _0x96ffd0['teleportId'];
        } else if (_0x96ffd0['type'] === 'bulk_teleport') {
            for (const _0x3ff26d in _0x96ffd0['positions']) {
                const _0x15cb70 = _0x96ffd0['positions'][_0x3ff26d];
                if (parseInt(_0x3ff26d) === _0x3bc0a7) {
                    _0x453c4e['x'] = _0x15cb70['x'];
                    _0x453c4e['y'] = _0x15cb70['y'];
                    _0x453c4e['vx'] = 0x0;
                    _0x453c4e['vy'] = 0x0;
                    _0x1ebc4e['CAMERA']['x'] = null;
                    continue;
                }
                const _0x450713 = _0x4063e4[_0x3ff26d];
                if (_0x450713) {
                    _0x450713['x'] = _0x15cb70['x'];
                    _0x450713['y'] = _0x15cb70['y'];
                    _0x450713['renderX'] = _0x15cb70['x'];
                    _0x450713['renderY'] = _0x15cb70['y'];
                    _0x450713['vx'] = 0x0;
                    _0x450713['vy'] = 0x0;
                }
            }
        } else if (_0x96ffd0['type'] === 'player_left') {
            delete _0x4063e4[_0x96ffd0['id']];
            _0x56c575['delete'](parseInt(_0x96ffd0['id']));
        } else if (_0x96ffd0['type'] === 'map_update') {
            const _0x38fde3 = _0x1ebc4e['MAP']['layers']['find'](_0x186b60 => _0x186b60['name'] === _0x96ffd0['layer']);
            if (_0x38fde3) {
                _0x38fde3['data'][_0x96ffd0['row'] * _0x1ebc4e['MAP']['columns'] + _0x96ffd0['col']] = _0x96ffd0['gid'];
                const _0x24b0ae = _0x96ffd0['row'] * _0x1ebc4e['MAP']['columns'] + _0x96ffd0['col'];
                if (_0x1ebc4e['MAP']['doors'] && _0x1ebc4e['MAP']['doors'][_0x24b0ae]) {
                    const _0xfb3726 = _0x1ebc4e['MAP']['layers']['find'](_0x4c9387 => _0x4c9387['name'] === 'floor2');
                    if (_0xfb3726)
                        _0xfb3726['data'][_0x24b0ae] = 0x2;
                }
                const _0x466ee3 = Math['floor'](_0x96ffd0['col'] * _0x1ebc4e['MAP']['tileSize'] / _0x1ebc4e['MAP']['chunkSize']);
                const _0x34e7e8 = Math['floor'](_0x96ffd0['row'] * _0x1ebc4e['MAP']['tileSize'] / _0x1ebc4e['MAP']['chunkSize']);
                _0x1b3243(_0x466ee3, _0x34e7e8);
                _0x3c6ceb = null;
                _0x4c78cc = null;
            }
        } else if (_0x96ffd0['type'] === 'role_assign') {
            _0x592491 = _0x96ffd0['role'];
            _0x453c4e['isDead'] = _0x592491 === 'Spectator';
            _0x56c575['clear']();
            _0x1ebc4e['CURRENT_TARGET'] = null;
            _0x56afae = null;
            _0x419136 = null;
            _0x41ebf0 = null;
            _0x1c2dce = null;
            _0x117567 = null;
            _0x1f0e33 = ![];
            const _0x3ede2e = document['getElementById']('ability-ui');
            if (_0x3ede2e)
                _0x3ede2e['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x592491;
            _0x381ff0();
            _0x398861(_0x592491 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x592491, !![]);
            let _0x3dd1c1 = '';
            if (_0x592491 === 'Investigator')
                _0x3dd1c1 = 'Investigate\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x592491 === 'Tracker')
                _0x3dd1c1 = 'Track\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x592491 === 'Doctor')
                _0x3dd1c1 = 'Heal\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x592491 === 'Archer')
                _0x3dd1c1 = 'Guard\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x592491 === 'Escort')
                _0x3dd1c1 = 'Roleblock\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x592491 === 'Vigilante')
                _0x3dd1c1 = 'Shoot\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x592491 === 'Skinwalker')
                _0x3dd1c1 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x592491 === 'Blackmailer')
                _0x3dd1c1 = 'Pick\x20a\x20player\x20to\x20blackmail\x20and\x20a\x20player\x20to\x20kill\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x592491 === 'Celebrity')
                _0x3dd1c1 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x592491 === 'Mayor')
                _0x3dd1c1 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x398861(_0x3dd1c1, !![]);
        } else if (_0x96ffd0['type'] === 'mayor_reveal') {
            _0x56c575['add'](parseInt(_0x96ffd0['playerId']));
            _0x3a7aca();
            _0x381ff0();
        } else if (_0x96ffd0['type'] === 'rolelist_update') {
            _0x1ebc4e['ROLE_LIST_RAW'] = _0x96ffd0['list'] || [];
            _0x81af2d(_0x96ffd0['list'], _0x96ffd0['mode']);
        } else if (_0x96ffd0['type'] === 'sound_event') {
            _0x2ff65e['onSoundEvent'](_0x96ffd0['track']);
        } else if (_0x96ffd0['type'] === 'blood_splatter') {
            _0x39e8bc['push']({
                'x': _0x96ffd0['x'],
                'y': _0x96ffd0['y']
            });
        } else if (_0x96ffd0['type'] === 'blood_drop') {
            _0x3cf55f['push']({
                'x': _0x96ffd0['x'],
                'y': _0x96ffd0['y']
            });
        } else if (_0x96ffd0['type'] === 'day_fade') {
            _0x4da813 = 0x1;
            _0x5b34d0 = performance['now']() + 0x3e8;
        } else if (_0x96ffd0['type'] === 'player_stats_updated') {
            const _0x126360 = parseInt(_0x96ffd0['id']);
            if (_0x126360 === _0x3bc0a7 && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x96ffd0['accountStats']);
            }
            if (_0x4063e4[_0x96ffd0['id']]) {
                _0x4063e4[_0x96ffd0['id']]['accountStats'] = _0x96ffd0['accountStats'];
            }
            _0x7c9265();
        } else if (_0x96ffd0['type'] === 'stats_update') {
            const _0x51c4db = window['_FB'];
            if (_0x51c4db && _0x51c4db['_currentUser'] && _0x51c4db['_userData']) {
                const _0xff277d = _0x51c4db['_currentUser']['uid'];
                const _0x5470f5 = _0x96ffd0['patch'] || {};
                const _0x4ab93b = _0x51c4db['_userData'];
                const _0x5f0df1 = {
                    'townWins': (_0x4ab93b['townWins'] || 0x0) + (_0x5470f5['townWins'] || 0x0),
                    'mafiaWins': (_0x4ab93b['mafiaWins'] || 0x0) + (_0x5470f5['mafiaWins'] || 0x0),
                    'deaths': (_0x4ab93b['deaths'] || 0x0) + (_0x5470f5['deaths'] || 0x0),
                    'townLosses': (_0x4ab93b['townLosses'] || 0x0) + (_0x5470f5['townLosses'] || 0x0),
                    'mafiaLosses': (_0x4ab93b['mafiaLosses'] || 0x0) + (_0x5470f5['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x51c4db['_userData'], _0x5f0df1);
                const _0x3e3989 = _0x51c4db['doc'](_0x51c4db['db'], 'users', _0xff277d);
                _0x51c4db['updateDoc'](_0x3e3989, _0x5f0df1)['catch'](() => {
                });
                if (_0x2761d6 && _0x2761d6['readyState'] === WebSocket['OPEN']) {
                    _0x2761d6['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x5f0df1
                    }));
                }
                _0x7c9265();
            }
        } else if (_0x96ffd0['type'] === 'game_over') {
            _0x2ff65e['onStateChange']('LOBBY', ![]);
            _0x81af2d([], 'off');
            _0x592491 = null;
            _0x453c4e['isDead'] = ![];
            _0x453c4e['hasArrow'] = ![];
            _0x39e8bc = [];
            _0x3cf55f = [];
            _0x568948['clear']();
            _0x56c575['clear']();
            _0x1ebc4e['CURRENT_TARGET'] = null;
            _0x56afae = null;
            _0x419136 = null;
            _0x41ebf0 = null;
            _0x1c2dce = null;
            _0x117567 = null;
            _0x1f0e33 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x381ff0();
            _0x398861('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x96ffd0['type'] === 'chat_log') {
            _0x398861(_0x96ffd0['text'], ![], !!_0x96ffd0['isHost'], _0x96ffd0['sender']);
        } else if (_0x96ffd0['type'] === 'sys_chat') {
            _0x398861(_0x96ffd0['text'], !![]);
        }
    };
}
function _0x398861(_0x124ee3, _0x11b793 = ![], _0x194ed4 = ![], _0x1d1f7e = null) {
    const _0x1ede40 = document['getElementById']('chat-log-messages');
    const _0x1ecd08 = document['getElementById']('chat-log-ui');
    const _0x30fba8 = _0x1ecd08 ? _0x1ecd08['scrollHeight'] - _0x1ecd08['scrollTop'] - _0x1ecd08['clientHeight'] < 0x1e : !![];
    const _0x23a76d = document['createElement']('div');
    _0x23a76d['className'] = 'chat-log-line' + (_0x11b793 ? '\x20sys-msg' : '');
    if (_0x1d1f7e) {
        const _0x4f5ef9 = document['createElement']('span');
        _0x4f5ef9['className'] = _0x194ed4 ? 'chat-host-name' : 'chat-sender-name';
        _0x4f5ef9['textContent'] = _0x1d1f7e + ':\x20';
        const _0x1d2392 = document['createElement']('span');
        _0x1d2392['className'] = 'chat-msg-text';
        _0x1d2392['textContent'] = _0x124ee3;
        _0x23a76d['appendChild'](_0x4f5ef9);
        _0x23a76d['appendChild'](_0x1d2392);
    } else {
        _0x23a76d['innerText'] = _0x124ee3;
    }
    if (_0x1ede40)
        _0x1ede40['appendChild'](_0x23a76d);
    if (_0x1ecd08 && _0x30fba8) {
        _0x1ecd08['scrollTop'] = _0x1ecd08['scrollHeight'];
    }
    if (_0x1ede40 && _0x1ede40['childElementCount'] > 0xc8) {
        _0x1ede40['removeChild'](_0x1ede40['firstChild']);
    }
}
function _0x41379c(_0x41fa8c, _0x5eab9e, _0x454e53) {
    const _0x436c6a = document['createElement']('canvas');
    _0x436c6a['width'] = _0x454e53;
    _0x436c6a['height'] = _0x454e53;
    const _0x1fa257 = _0x436c6a['getContext']('2d');
    _0x1fa257['imageSmoothingEnabled'] = ![];
    const _0x5816dd = 'assets/' + (_0x41fa8c || 'body01.png');
    const _0x46f0f0 = _0x4f6ebb(_0x5816dd);
    if (_0x46f0f0['complete'] && _0x46f0f0['naturalWidth'] > 0x0)
        _0x1fa257['drawImage'](_0x46f0f0, 0x0, 0x0, _0x454e53, _0x454e53);
    if (_0x5eab9e) {
        const _0x2a1b7f = 'assets/' + _0x5eab9e;
        const _0x4a7b36 = _0x4f6ebb(_0x2a1b7f);
        if (_0x4a7b36['complete'] && _0x4a7b36['naturalWidth'] > 0x0)
            _0x1fa257['drawImage'](_0x4a7b36, 0x0, 0x0, _0x454e53, _0x454e53);
    }
    return _0x436c6a['toDataURL']();
}
let _0x1172b4 = '';
function _0x7c9265() {
    const _0x3d799a = document['getElementById']('chat-profile-panel');
    if (!_0x3d799a)
        return;
    const _0x56acc4 = [];
    if (_0x3bc0a7 !== null) {
        const _0x3c3742 = _0x19fbe0 || 'body01.png';
        const _0x3314db = _0x5d0fd3 || 'eyes4.png';
        const _0x501789 = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x56acc4['push']({
            'id': _0x3bc0a7,
            'name': _0x295edc,
            'body': _0x3c3742,
            'eyes': _0x3314db,
            'stats': _0x501789
        });
    }
    for (const _0xc38f92 in _0x4063e4) {
        const _0x2f7c60 = _0x4063e4[_0xc38f92];
        const _0x3f6f81 = _0x2f7c60['accountStats'] || null;
        _0x56acc4['push']({
            'id': parseInt(_0xc38f92),
            'name': _0x2f7c60['name'],
            'body': _0x2f7c60['body'] || 'body01.png',
            'eyes': _0x2f7c60['eyes'] || 'eyes4.png',
            'stats': _0x3f6f81
        });
    }
    const _0x30c9c3 = _0x56acc4['map'](_0x3908a3 => _0x3908a3['id'] + '_' + _0x3908a3['name'] + '_' + _0x3908a3['body'] + '_' + _0x3908a3['eyes'] + '_' + JSON['stringify'](_0x3908a3['stats']))['join']('|');
    if (_0x30c9c3 === _0x1172b4)
        return;
    _0x1172b4 = _0x30c9c3;
    _0x3d799a['innerHTML'] = '';
    let _0x4d5733 = ![];
    for (const _0x28dfc0 of _0x56acc4) {
        _0x4d5733 = !![];
        const _0x2d9cf3 = _0x41379c(_0x28dfc0['body'], _0x28dfc0['eyes'], 0x20);
        const _0x5e9e61 = document['createElement']('div');
        _0x5e9e61['className'] = 'chat-pfp-entry';
        const _0x508e6b = document['createElement']('img');
        _0x508e6b['src'] = _0x2d9cf3;
        _0x508e6b['alt'] = _0x28dfc0['name'];
        _0x5e9e61['appendChild'](_0x508e6b);
        const _0x12101e = document['createElement']('div');
        _0x12101e['className'] = 'chat-pfp-tooltip';
        let _0x33a68e = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x28dfc0['name'] + '</div>';
        const _0x450dc6 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x5e05a6 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x468933 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x3d6bd4 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0xbeaee9 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x50f288 = (_0x2b71c5, _0x3e9e6e, _0x4f4010, _0x4d6b9f) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x2b71c5 + '<span\x20style=\x22flex:1;color:' + _0x4d6b9f + ';\x22>' + _0x3e9e6e + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x4f4010 + '</span></div>';
        if (_0x28dfc0['stats']) {
            _0x33a68e += _0x50f288(_0x450dc6, 'Town\x20Wins', _0x28dfc0['stats']['townWins'] || 0x0, '#55ee77');
            _0x33a68e += _0x50f288(_0x5e05a6, 'Mafia\x20Wins', _0x28dfc0['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x33a68e += _0x50f288(_0x468933, 'Deaths', _0x28dfc0['stats']['deaths'] || 0x0, '#aaa');
            _0x33a68e += _0x50f288(_0x3d6bd4, 'Town\x20Losses', _0x28dfc0['stats']['townLosses'] || 0x0, '#6688aa');
            _0x33a68e += _0x50f288(_0xbeaee9, 'Mafia\x20Losses', _0x28dfc0['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x33a68e += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x12101e['innerHTML'] = _0x33a68e;
        _0x5e9e61['appendChild'](_0x12101e);
        _0x3d799a['appendChild'](_0x5e9e61);
    }
    const _0x23b52c = document['getElementById']('chat-log-wrap');
    if (_0x23b52c) {
        if (_0x4d5733) {
            _0x23b52c['classList']['add']('has-profiles');
            _0x3d799a['style']['display'] = 'flex';
        } else {
            _0x23b52c['classList']['remove']('has-profiles');
            _0x3d799a['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x7c9265;
let _0x1d6d5e = -0x1, _0x109cec = -0x1, _0x50ef79 = -0x1, _0x4dcd89 = 0x0;
function _0x13a0bb() {
    if (!_0x3bc0a7 || !_0x2761d6 || _0x2761d6['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x39d914 = performance['now']();
    const _0x40fe7d = _0x39d914 - _0x4dcd89;
    const _0x2cacb1 = Math['abs'](_0x453c4e['x'] - _0x1d6d5e) > 0.05 || Math['abs'](_0x453c4e['y'] - _0x109cec) > 0.05 || Math['abs'](_0x453c4e['angle'] - _0x50ef79) > 0.02;
    if (!_0x2cacb1 && _0x40fe7d < 0xc8)
        return;
    if (_0x40fe7d < 0x19)
        return;
    _0x4dcd89 = _0x39d914;
    _0x1d6d5e = _0x453c4e['x'];
    _0x109cec = _0x453c4e['y'];
    _0x50ef79 = _0x453c4e['angle'];
    if (!_0x3bc0a7 || !_0x2761d6 || _0x2761d6['readyState'] !== WebSocket['OPEN'])
        return;
    _0x2761d6['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x453c4e['x'],
        'y': _0x453c4e['y'],
        'vx': _0x453c4e['vx'],
        'vy': _0x453c4e['vy'],
        'angle': _0x453c4e['angle'],
        'scale': _0x453c4e['scale'],
        'teleportId': _0x394f26,
        'clientTimestamp': Date['now']()
    }));
}
function _0x2a3a34() {
    if (_0x453c4e['isDead'])
        return;
    const _0x584bb8 = _0x1ebc4e['MAP']['layers']['find'](_0x30e32f => _0x30e32f['name'] === 'walls');
    if (!_0x584bb8)
        return;
    const _0x5bf42b = _0x453c4e['scale'];
    const _0x5ae0b6 = _0x453c4e['width'] * _0x5bf42b / 0x2;
    for (let _0x37d650 = 0x0; _0x37d650 < 0x3; _0x37d650++) {
        let _0x152701 = _0x453c4e['x'] + _0x453c4e['width'] / 0x2;
        let _0x24f430 = _0x453c4e['y'] + _0x453c4e['height'] / 0x2;
        const _0xcaf6e2 = Math['floor']((_0x152701 - _0x5ae0b6) / _0x1ebc4e['MAP']['tileSize']);
        const _0x4cdf80 = Math['floor']((_0x152701 + _0x5ae0b6) / _0x1ebc4e['MAP']['tileSize']);
        const _0xcdf59c = Math['floor']((_0x24f430 - _0x5ae0b6) / _0x1ebc4e['MAP']['tileSize']);
        const _0x2dd56d = Math['floor']((_0x24f430 + _0x5ae0b6) / _0x1ebc4e['MAP']['tileSize']);
        for (let _0x3f6b4c = _0xcdf59c; _0x3f6b4c <= _0x2dd56d; _0x3f6b4c++) {
            for (let _0x1afdf2 = _0xcaf6e2; _0x1afdf2 <= _0x4cdf80; _0x1afdf2++) {
                if (_0x1afdf2 < 0x0 || _0x1afdf2 >= _0x1ebc4e['MAP']['columns'] || _0x3f6b4c < 0x0 || _0x3f6b4c >= _0x1ebc4e['MAP']['rows'])
                    continue;
                if (_0x584bb8['data'][_0x3f6b4c * _0x1ebc4e['MAP']['columns'] + _0x1afdf2] === 0x0)
                    continue;
                const _0x57596b = _0x1afdf2 * _0x1ebc4e['MAP']['tileSize'];
                const _0x15fbd4 = _0x3f6b4c * _0x1ebc4e['MAP']['tileSize'];
                const _0x45e2f6 = _0x152701 < _0x57596b ? _0x57596b : _0x152701 > _0x57596b + _0x1ebc4e['MAP']['tileSize'] ? _0x57596b + _0x1ebc4e['MAP']['tileSize'] : _0x152701;
                const _0x4acf67 = _0x24f430 < _0x15fbd4 ? _0x15fbd4 : _0x24f430 > _0x15fbd4 + _0x1ebc4e['MAP']['tileSize'] ? _0x15fbd4 + _0x1ebc4e['MAP']['tileSize'] : _0x24f430;
                const _0x20cb23 = _0x152701 - _0x45e2f6;
                const _0x115fa1 = _0x24f430 - _0x4acf67;
                const _0x34ed64 = Math['sqrt'](_0x20cb23 * _0x20cb23 + _0x115fa1 * _0x115fa1);
                if (_0x34ed64 < _0x5ae0b6) {
                    if (_0x34ed64 === 0x0) {
                        const _0x5d9343 = _0x152701 - _0x57596b;
                        const _0x37cb2e = _0x57596b + _0x1ebc4e['MAP']['tileSize'] - _0x152701;
                        const _0x2b84ce = _0x24f430 - _0x15fbd4;
                        const _0x486a99 = _0x15fbd4 + _0x1ebc4e['MAP']['tileSize'] - _0x24f430;
                        const _0x28eab6 = Math['min'](_0x5d9343, _0x37cb2e, _0x2b84ce, _0x486a99);
                        if (_0x28eab6 === _0x5d9343)
                            _0x152701 = _0x57596b - _0x5ae0b6;
                        else if (_0x28eab6 === _0x37cb2e)
                            _0x152701 = _0x57596b + _0x1ebc4e['MAP']['tileSize'] + _0x5ae0b6;
                        else if (_0x28eab6 === _0x2b84ce)
                            _0x24f430 = _0x15fbd4 - _0x5ae0b6;
                        else
                            _0x24f430 = _0x15fbd4 + _0x1ebc4e['MAP']['tileSize'] + _0x5ae0b6;
                    } else {
                        const _0x4c6acb = _0x5ae0b6 - _0x34ed64;
                        _0x152701 += _0x20cb23 / _0x34ed64 * _0x4c6acb;
                        _0x24f430 += _0x115fa1 / _0x34ed64 * _0x4c6acb;
                        const _0x21dcd7 = _0x453c4e['vx'] * (_0x20cb23 / _0x34ed64) + _0x453c4e['vy'] * (_0x115fa1 / _0x34ed64);
                        if (_0x21dcd7 < 0x0) {
                            _0x453c4e['vx'] -= _0x21dcd7 * (_0x20cb23 / _0x34ed64);
                            _0x453c4e['vy'] -= _0x21dcd7 * (_0x115fa1 / _0x34ed64);
                        }
                    }
                }
            }
        }
        _0x453c4e['x'] = _0x152701 - _0x453c4e['width'] / 0x2;
        _0x453c4e['y'] = _0x24f430 - _0x453c4e['height'] / 0x2;
    }
}
function _0x497edd(_0x3ba755) {
    const _0x11d611 = _0x1ebc4e['MAP']['layers']['find'](_0x5f24e7 => _0x5f24e7['name'] === 'walls');
    if (!_0x11d611)
        return;
    const _0x241345 = _0x3ba755['width'] / 0x2;
    for (let _0x4d9b1c = 0x0; _0x4d9b1c < 0x2; _0x4d9b1c++) {
        let _0x107283 = _0x3ba755['x'] + _0x3ba755['width'] / 0x2;
        let _0x565404 = _0x3ba755['y'] + _0x3ba755['height'] / 0x2;
        const _0x3bb474 = Math['floor']((_0x107283 - _0x241345) / _0x1ebc4e['MAP']['tileSize']);
        const _0x23f5c7 = Math['floor']((_0x107283 + _0x241345) / _0x1ebc4e['MAP']['tileSize']);
        const _0x313c2e = Math['floor']((_0x565404 - _0x241345) / _0x1ebc4e['MAP']['tileSize']);
        const _0x2d75ee = Math['floor']((_0x565404 + _0x241345) / _0x1ebc4e['MAP']['tileSize']);
        for (let _0x43ac72 = _0x313c2e; _0x43ac72 <= _0x2d75ee; _0x43ac72++) {
            for (let _0x9bdd48 = _0x3bb474; _0x9bdd48 <= _0x23f5c7; _0x9bdd48++) {
                if (_0x9bdd48 < 0x0 || _0x9bdd48 >= _0x1ebc4e['MAP']['columns'] || _0x43ac72 < 0x0 || _0x43ac72 >= _0x1ebc4e['MAP']['rows'])
                    continue;
                if (_0x11d611['data'][_0x43ac72 * _0x1ebc4e['MAP']['columns'] + _0x9bdd48] === 0x0)
                    continue;
                const _0x49be70 = _0x9bdd48 * _0x1ebc4e['MAP']['tileSize'];
                const _0x159ac1 = _0x43ac72 * _0x1ebc4e['MAP']['tileSize'];
                const _0x474f8 = _0x107283 < _0x49be70 ? _0x49be70 : _0x107283 > _0x49be70 + _0x1ebc4e['MAP']['tileSize'] ? _0x49be70 + _0x1ebc4e['MAP']['tileSize'] : _0x107283;
                const _0x578d5f = _0x565404 < _0x159ac1 ? _0x159ac1 : _0x565404 > _0x159ac1 + _0x1ebc4e['MAP']['tileSize'] ? _0x159ac1 + _0x1ebc4e['MAP']['tileSize'] : _0x565404;
                const _0x4f85a0 = _0x107283 - _0x474f8;
                const _0x5e4d57 = _0x565404 - _0x578d5f;
                const _0x57e3b9 = Math['sqrt'](_0x4f85a0 * _0x4f85a0 + _0x5e4d57 * _0x5e4d57);
                if (_0x57e3b9 < _0x241345) {
                    if (_0x57e3b9 === 0x0) {
                        const _0xa34101 = _0x107283 - _0x49be70;
                        const _0x82dbbd = _0x49be70 + _0x1ebc4e['MAP']['tileSize'] - _0x107283;
                        const _0x3abdb2 = _0x565404 - _0x159ac1;
                        const _0x91b844 = _0x159ac1 + _0x1ebc4e['MAP']['tileSize'] - _0x565404;
                        const _0x2df48f = Math['min'](_0xa34101, _0x82dbbd, _0x3abdb2, _0x91b844);
                        if (_0x2df48f === _0xa34101)
                            _0x107283 = _0x49be70 - _0x241345;
                        else if (_0x2df48f === _0x82dbbd)
                            _0x107283 = _0x49be70 + _0x1ebc4e['MAP']['tileSize'] + _0x241345;
                        else if (_0x2df48f === _0x3abdb2)
                            _0x565404 = _0x159ac1 - _0x241345;
                        else
                            _0x565404 = _0x159ac1 + _0x1ebc4e['MAP']['tileSize'] + _0x241345;
                    } else {
                        const _0x34892f = _0x241345 - _0x57e3b9;
                        _0x107283 += _0x4f85a0 / _0x57e3b9 * _0x34892f;
                        _0x565404 += _0x5e4d57 / _0x57e3b9 * _0x34892f;
                    }
                }
            }
        }
        _0x3ba755['x'] = _0x107283 - _0x3ba755['width'] / 0x2;
        _0x3ba755['y'] = _0x565404 - _0x3ba755['height'] / 0x2;
    }
}
function _0x1816d0(_0x9fc4ee) {
    const _0x57129c = _0x9fc4ee['width'] / 0x2;
    for (let _0x7e6cd1 = 0x0; _0x7e6cd1 < 0x2; _0x7e6cd1++) {
        let _0x3ffe88 = _0x9fc4ee['x'] + _0x9fc4ee['width'] / 0x2;
        let _0x432d70 = _0x9fc4ee['y'] + _0x9fc4ee['height'] / 0x2;
        for (const _0x2eeb0b of _0x1ebc4e['ENTITIES']) {
            const _0x5723b3 = _0x3ffe88 < _0x2eeb0b['x'] ? _0x2eeb0b['x'] : _0x3ffe88 > _0x2eeb0b['x'] + _0x2eeb0b['w'] ? _0x2eeb0b['x'] + _0x2eeb0b['w'] : _0x3ffe88;
            const _0x4b24b1 = _0x432d70 < _0x2eeb0b['y'] ? _0x2eeb0b['y'] : _0x432d70 > _0x2eeb0b['y'] + _0x2eeb0b['h'] ? _0x2eeb0b['y'] + _0x2eeb0b['h'] : _0x432d70;
            const _0x274495 = _0x3ffe88 - _0x5723b3;
            const _0x2e9481 = _0x432d70 - _0x4b24b1;
            const _0x1be221 = Math['sqrt'](_0x274495 * _0x274495 + _0x2e9481 * _0x2e9481);
            if (_0x1be221 < _0x57129c && _0x1be221 > 0x0) {
                const _0x8651d7 = _0x57129c - _0x1be221;
                const _0x38919e = _0x274495 / _0x1be221;
                const _0x564023 = _0x2e9481 / _0x1be221;
                _0x3ffe88 += _0x38919e * _0x8651d7;
                _0x432d70 += _0x564023 * _0x8651d7;
            } else if (_0x1be221 === 0x0) {
                const _0x47da90 = _0x3ffe88 - _0x2eeb0b['x'];
                const _0x34d140 = _0x2eeb0b['x'] + _0x2eeb0b['w'] - _0x3ffe88;
                const _0x57a6c5 = _0x432d70 - _0x2eeb0b['y'];
                const _0x5098ae = _0x2eeb0b['y'] + _0x2eeb0b['h'] - _0x432d70;
                const _0x5ca1bf = Math['min'](_0x47da90, _0x34d140, _0x57a6c5, _0x5098ae);
                if (_0x5ca1bf === _0x47da90)
                    _0x3ffe88 = _0x2eeb0b['x'] - _0x57129c;
                else if (_0x5ca1bf === _0x34d140)
                    _0x3ffe88 = _0x2eeb0b['x'] + _0x2eeb0b['w'] + _0x57129c;
                else if (_0x5ca1bf === _0x57a6c5)
                    _0x432d70 = _0x2eeb0b['y'] - _0x57129c;
                else
                    _0x432d70 = _0x2eeb0b['y'] + _0x2eeb0b['h'] + _0x57129c;
            }
        }
        _0x9fc4ee['x'] = _0x3ffe88 - _0x9fc4ee['width'] / 0x2;
        _0x9fc4ee['y'] = _0x432d70 - _0x9fc4ee['height'] / 0x2;
    }
}
function _0x1af16b() {
    if (_0x453c4e['isDead'])
        return;
    const _0xc39b5a = _0x453c4e['width'] / 0x2;
    const _0x4678e5 = _0x453c4e['x'] + _0x453c4e['width'] / 0x2;
    const _0xd41ae2 = _0x453c4e['y'] + _0x453c4e['height'] / 0x2;
    for (const _0x2304f2 in _0x4063e4) {
        const _0x38d5e0 = _0x4063e4[_0x2304f2];
        if (_0x38d5e0['isDead'])
            continue;
        const _0x37e297 = _0x38d5e0['width'] / 0x2;
        const _0x3051bd = _0xc39b5a + _0x37e297;
        const _0x19697b = (_0x38d5e0['renderX'] ?? _0x38d5e0['x']) + _0x38d5e0['width'] / 0x2;
        const _0x3ef6ef = (_0x38d5e0['renderY'] ?? _0x38d5e0['y']) + _0x38d5e0['height'] / 0x2;
        const _0x1faefa = _0x4678e5 - _0x19697b;
        const _0x491eef = _0xd41ae2 - _0x3ef6ef;
        const _0x8874e2 = Math['sqrt'](_0x1faefa * _0x1faefa + _0x491eef * _0x491eef);
        if (_0x8874e2 > 0x0 && _0x8874e2 < _0x3051bd) {
            const _0x43ce4a = _0x3051bd - _0x8874e2;
            const _0xf24180 = _0x1faefa / _0x8874e2;
            const _0x53c37b = _0x491eef / _0x8874e2;
            _0x453c4e['x'] += _0xf24180 * (_0x43ce4a * 0.25);
            _0x453c4e['y'] += _0x53c37b * (_0x43ce4a * 0.25);
            _0x38d5e0['x'] -= _0xf24180 * (_0x43ce4a * 0.75);
            _0x38d5e0['y'] -= _0x53c37b * (_0x43ce4a * 0.75);
            _0x497edd(_0x38d5e0);
            _0x1816d0(_0x38d5e0);
            if (_0x38d5e0['renderX'] !== undefined) {
                _0x38d5e0['renderX'] = _0x38d5e0['x'];
                _0x38d5e0['renderY'] = _0x38d5e0['y'];
            }
            const _0x4416fa = _0x453c4e['vx'] * _0xf24180 + _0x453c4e['vy'] * _0x53c37b;
            if (_0x4416fa < 0x0) {
                _0x453c4e['vx'] -= _0x4416fa * _0xf24180 * 0.25;
                _0x453c4e['vy'] -= _0x4416fa * _0x53c37b * 0.25;
            }
        }
    }
    _0x2a3a34();
    _0x135989();
}
function _0x135989() {
    if (_0x453c4e['isDead'])
        return;
    const _0x10ca1b = _0x453c4e['scale'];
    const _0x4995e1 = _0x453c4e['width'] * _0x10ca1b / 0x2;
    for (let _0x2d1346 = 0x0; _0x2d1346 < 0x2; _0x2d1346++) {
        let _0x3c9ab1 = _0x453c4e['x'] + _0x453c4e['width'] / 0x2;
        let _0x3d4e31 = _0x453c4e['y'] + _0x453c4e['height'] / 0x2;
        for (const _0x1b47e0 of _0x1ebc4e['ENTITIES']) {
            const _0x514c79 = _0x3c9ab1 < _0x1b47e0['x'] ? _0x1b47e0['x'] : _0x3c9ab1 > _0x1b47e0['x'] + _0x1b47e0['w'] ? _0x1b47e0['x'] + _0x1b47e0['w'] : _0x3c9ab1;
            const _0x52e73e = _0x3d4e31 < _0x1b47e0['y'] ? _0x1b47e0['y'] : _0x3d4e31 > _0x1b47e0['y'] + _0x1b47e0['h'] ? _0x1b47e0['y'] + _0x1b47e0['h'] : _0x3d4e31;
            const _0x35bbe9 = _0x3c9ab1 - _0x514c79;
            const _0x2dc44f = _0x3d4e31 - _0x52e73e;
            const _0x4fb48e = Math['sqrt'](_0x35bbe9 * _0x35bbe9 + _0x2dc44f * _0x2dc44f);
            if (_0x4fb48e < _0x4995e1 && _0x4fb48e > 0x0) {
                const _0x59203d = _0x4995e1 - _0x4fb48e;
                const _0x46c4f8 = _0x35bbe9 / _0x4fb48e;
                const _0x369498 = _0x2dc44f / _0x4fb48e;
                _0x3c9ab1 += _0x46c4f8 * _0x59203d;
                _0x3d4e31 += _0x369498 * _0x59203d;
                const _0x4df598 = _0x453c4e['vx'] * _0x46c4f8 + _0x453c4e['vy'] * _0x369498;
                if (_0x4df598 < 0x0) {
                    _0x453c4e['vx'] -= _0x4df598 * _0x46c4f8;
                    _0x453c4e['vy'] -= _0x4df598 * _0x369498;
                }
            } else if (_0x4fb48e === 0x0) {
                const _0x414026 = _0x3c9ab1 - _0x1b47e0['x'];
                const _0x1b35f8 = _0x1b47e0['x'] + _0x1b47e0['w'] - _0x3c9ab1;
                const _0x2e73a8 = _0x3d4e31 - _0x1b47e0['y'];
                const _0xb821a0 = _0x1b47e0['y'] + _0x1b47e0['h'] - _0x3d4e31;
                const _0x3e0919 = Math['min'](_0x414026, _0x1b35f8, _0x2e73a8, _0xb821a0);
                if (_0x3e0919 === _0x414026)
                    _0x3c9ab1 = _0x1b47e0['x'] - _0x4995e1;
                else if (_0x3e0919 === _0x1b35f8)
                    _0x3c9ab1 = _0x1b47e0['x'] + _0x1b47e0['w'] + _0x4995e1;
                else if (_0x3e0919 === _0x2e73a8)
                    _0x3d4e31 = _0x1b47e0['y'] - _0x4995e1;
                else
                    _0x3d4e31 = _0x1b47e0['y'] + _0x1b47e0['h'] + _0x4995e1;
            }
        }
        _0x453c4e['x'] = _0x3c9ab1 - _0x453c4e['width'] / 0x2;
        _0x453c4e['y'] = _0x3d4e31 - _0x453c4e['height'] / 0x2;
    }
}
function _0xf5b2e4(_0x4b3336, _0x22bc4f) {
    const _0x5ca1b0 = _0x1ebc4e['MAP']['layers']['find'](_0x13d63a => _0x13d63a['name'] === 'trees');
    if (!_0x5ca1b0)
        return ![];
    const _0xb07eed = Math['floor'](_0x4b3336 / _0x1ebc4e['MAP']['tileSize']);
    const _0x4f1c32 = Math['floor'](_0x22bc4f / _0x1ebc4e['MAP']['tileSize']);
    if (_0xb07eed < 0x0 || _0xb07eed >= _0x1ebc4e['MAP']['columns'] || _0x4f1c32 < 0x0 || _0x4f1c32 >= _0x1ebc4e['MAP']['rows'])
        return ![];
    return _0x5ca1b0['data'][_0x4f1c32 * _0x1ebc4e['MAP']['columns'] + _0xb07eed] === 0xb;
}
let _0x3c6ceb = null;
function _0x5f4de6() {
    const _0x5100e4 = _0x1ebc4e['MAP'];
    const _0xfba40d = _0x5100e4['layers']['find'](_0x37ec05 => _0x37ec05['name'] === 'floor2');
    const _0x585986 = _0x5100e4['layers']['find'](_0x2d9ad9 => _0x2d9ad9['name'] === 'walls');
    if (!_0xfba40d || !_0x585986) {
        _0x3c6ceb = null;
        return;
    }
    const _0x599292 = _0x5100e4['columns'];
    const _0x8446d0 = _0x5100e4['rows'];
    const _0x43cb67 = [];
    const _0x16dc3d = new Set();
    const _0x4714e2 = new Set();
    for (let _0x372061 = 0x0; _0x372061 < _0x8446d0; _0x372061++) {
        for (let _0x5a32f2 = 0x0; _0x5a32f2 < _0x599292; _0x5a32f2++) {
            const _0x415e37 = _0x372061 * _0x599292 + _0x5a32f2;
            const _0x107062 = _0xfba40d['data'][_0x415e37];
            const _0x1a0c9e = _0x585986['data'][_0x415e37];
            if (_0x107062 === 0x2 && _0x1a0c9e === 0x0) {
                _0x43cb67['push']({
                    'c': _0x5a32f2,
                    'r': _0x372061
                });
                _0x4714e2['add'](_0x5a32f2 + ',' + _0x372061);
            } else if (_0x1a0c9e !== 0x0) {
                _0x16dc3d['add'](_0x5a32f2 + ',' + _0x372061);
            }
        }
    }
    const _0x320289 = [
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
                c: _0x2965d5,
                r: _0x25a81f
            } of _0x43cb67) {
        for (const [_0x441f26, _0x4e733d] of _0x320289) {
            const _0x335d92 = _0x2965d5 + _0x441f26, _0x3af7e1 = _0x25a81f + _0x4e733d;
            const _0x39dec0 = _0x335d92 + ',' + _0x3af7e1;
            if (!_0x4714e2['has'](_0x39dec0)) {
                _0x16dc3d['add'](_0x39dec0);
            }
        }
    }
    _0x3c6ceb = {
        'wallSet': _0x16dc3d,
        'floorTiles': _0x43cb67,
        'interiorSet': _0x4714e2
    };
}
function _0x23614c() {
    const _0x4036fd = _0x1ebc4e['MAP']['layers']['find'](_0x42531b => _0x42531b['name'] === 'floor2');
    if (!_0x4036fd)
        return ![];
    const _0x47691d = _0x453c4e['x'] + _0x453c4e['width'] / 0x2;
    const _0x517915 = _0x453c4e['y'] + _0x453c4e['height'] / 0x2;
    const _0x12d864 = _0x1ebc4e['MAP']['tileSize'];
    const _0x5b71f7 = Math['floor'](_0x47691d / _0x12d864);
    const _0x331d98 = Math['floor'](_0x517915 / _0x12d864);
    if (_0x5b71f7 < 0x0 || _0x5b71f7 >= _0x1ebc4e['MAP']['columns'] || _0x331d98 < 0x0 || _0x331d98 >= _0x1ebc4e['MAP']['rows'])
        return ![];
    const _0x1a5bef = _0x331d98 * _0x1ebc4e['MAP']['columns'] + _0x5b71f7;
    if (_0x4036fd['data'][_0x1a5bef] === 0x2)
        return !![];
    if (_0x1ebc4e['MAP']['doors'] && _0x1ebc4e['MAP']['doors'][_0x1a5bef])
        return !![];
    const _0x24499a = [
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
    for (const [_0x534e52, _0x556fb8] of _0x24499a) {
        const _0x542c36 = Math['floor']((_0x47691d + _0x534e52) / _0x12d864);
        const _0x182bfb = Math['floor']((_0x517915 + _0x556fb8) / _0x12d864);
        if (_0x542c36 >= 0x0 && _0x542c36 < _0x1ebc4e['MAP']['columns'] && _0x182bfb >= 0x0 && _0x182bfb < _0x1ebc4e['MAP']['rows']) {
            const _0x27166d = _0x182bfb * _0x1ebc4e['MAP']['columns'] + _0x542c36;
            if (_0x4036fd['data'][_0x27166d] === 0x2 || _0x1ebc4e['MAP']['doors'] && _0x1ebc4e['MAP']['doors'][_0x27166d]) {
                return !![];
            }
        }
    }
    return ![];
}
let _0x4c78cc = null, _0x3b3a5a = null;
function _0x10f3a8() {
    if (_0x453c4e['isDead']) {
        _0x1ebc4e['SHADOW']['polygon'] = null;
        _0x4c78cc = null;
        return;
    }
    const _0x2c56d3 = _0x1ebc4e['MAP'];
    const _0x2c2ddf = _0x1ebc4e['SHADOW'];
    const _0x377109 = _0x2c56d3['tileSize'];
    if (!_0x3c6ceb)
        _0x5f4de6();
    if (!_0x3c6ceb) {
        _0x2c2ddf['polygon'] = null;
        _0x4c78cc = null;
        return;
    }
    const {
        wallSet: _0x5af2ff,
        floorTiles: _0x670a3f
    } = _0x3c6ceb;
    if (_0x670a3f['length'] === 0x0) {
        _0x2c2ddf['polygon'] = null;
        _0x4c78cc = null;
        return;
    }
    if (!_0x23614c()) {
        _0x2c2ddf['polygon'] = null;
        _0x4c78cc = null;
        return;
    }
    const _0x35293c = _0x453c4e['x'] + _0x453c4e['width'] / 0x2;
    const _0x151480 = _0x453c4e['y'] + _0x453c4e['height'] / 0x2;
    if (_0x4c78cc !== null && _0x2c2ddf['polygon'] && Math['hypot'](_0x35293c - _0x4c78cc, _0x151480 - _0x3b3a5a) < 0.5) {
        return;
    }
    _0x4c78cc = _0x35293c;
    _0x3b3a5a = _0x151480;
    const _0x3d6f46 = Math['floor'](_0x35293c / _0x377109);
    const _0x5c427d = Math['floor'](_0x151480 / _0x377109);
    const _0x4186ad = Math['max'](0x0, _0x3d6f46 - 0x8);
    const _0x5d4c6b = Math['min'](_0x2c56d3['columns'] - 0x1, _0x3d6f46 + 0x8);
    const _0x56bd07 = Math['max'](0x0, _0x5c427d - 0x8);
    const _0x5f6e43 = Math['min'](_0x2c56d3['rows'] - 0x1, _0x5c427d + 0x8);
    const _0x42aabd = [];
    const _0x561ee5 = [];
    for (let _0x51024b = _0x56bd07; _0x51024b <= _0x5f6e43; _0x51024b++) {
        for (let _0x58d326 = _0x4186ad; _0x58d326 <= _0x5d4c6b; _0x58d326++) {
            if (!_0x5af2ff['has'](_0x58d326 + ',' + _0x51024b))
                continue;
            const _0x24602f = _0x58d326 * _0x377109;
            const _0x4d7c8b = _0x51024b * _0x377109;
            const _0x1bdd24 = _0x24602f + _0x377109;
            const _0x1dc46a = _0x4d7c8b + _0x377109;
            if (!_0x5af2ff['has'](_0x58d326 + ',' + (_0x51024b - 0x1))) {
                _0x42aabd['push'](_0x24602f, _0x4d7c8b, _0x1bdd24, _0x4d7c8b);
                _0x561ee5['push'](_0x24602f, _0x4d7c8b, _0x1bdd24, _0x4d7c8b);
            }
            if (!_0x5af2ff['has'](_0x58d326 + ',' + (_0x51024b + 0x1))) {
                _0x42aabd['push'](_0x24602f, _0x1dc46a, _0x1bdd24, _0x1dc46a);
                _0x561ee5['push'](_0x24602f, _0x1dc46a, _0x1bdd24, _0x1dc46a);
            }
            if (!_0x5af2ff['has'](_0x58d326 - 0x1 + ',' + _0x51024b)) {
                _0x42aabd['push'](_0x24602f, _0x4d7c8b, _0x24602f, _0x1dc46a);
                _0x561ee5['push'](_0x24602f, _0x4d7c8b, _0x24602f, _0x1dc46a);
            }
            if (!_0x5af2ff['has'](_0x58d326 + 0x1 + ',' + _0x51024b)) {
                _0x42aabd['push'](_0x1bdd24, _0x4d7c8b, _0x1bdd24, _0x1dc46a);
                _0x561ee5['push'](_0x1bdd24, _0x4d7c8b, _0x1bdd24, _0x1dc46a);
            }
        }
    }
    const _0x2ae56e = new Set();
    const _0x24ec7a = [];
    const _0x549a69 = 0.0001;
    for (let _0x513825 = 0x0; _0x513825 < _0x561ee5['length']; _0x513825 += 0x2) {
        const _0xb7a84d = _0x561ee5[_0x513825];
        const _0x4dc908 = _0x561ee5[_0x513825 + 0x1];
        const _0x2f5807 = Math['atan2'](_0x4dc908 - _0x151480, _0xb7a84d - _0x35293c);
        const _0x3422db = Math['round'](_0x2f5807 * 0x9c40);
        if (!_0x2ae56e['has'](_0x3422db - 0x1)) {
            _0x2ae56e['add'](_0x3422db - 0x1);
            _0x24ec7a['push'](_0x2f5807 - _0x549a69);
        }
        if (!_0x2ae56e['has'](_0x3422db)) {
            _0x2ae56e['add'](_0x3422db);
            _0x24ec7a['push'](_0x2f5807);
        }
        if (!_0x2ae56e['has'](_0x3422db + 0x1)) {
            _0x2ae56e['add'](_0x3422db + 0x1);
            _0x24ec7a['push'](_0x2f5807 + _0x549a69);
        }
    }
    for (let _0x5d4ec0 = 0x0; _0x5d4ec0 < 0x10; _0x5d4ec0++) {
        const _0x27d133 = -Math['PI'] + _0x5d4ec0 * 0x2 * Math['PI'] / 0x10;
        _0x24ec7a['push'](_0x27d133);
    }
    _0x24ec7a['sort']((_0x4bf611, _0x1cf85e) => _0x4bf611 - _0x1cf85e);
    const _0x1d24c1 = 0xc * _0x377109;
    const _0x2a4217 = [];
    for (let _0x1e49b8 = 0x0; _0x1e49b8 < _0x24ec7a['length']; _0x1e49b8++) {
        const _0x50a935 = _0x24ec7a[_0x1e49b8];
        const _0x47e221 = Math['cos'](_0x50a935);
        const _0x4ffed4 = Math['sin'](_0x50a935);
        let _0x1c63fe = _0x1d24c1;
        for (let _0x209646 = 0x0; _0x209646 < _0x42aabd['length']; _0x209646 += 0x4) {
            const _0x55984e = _0x42aabd[_0x209646], _0x4ba990 = _0x42aabd[_0x209646 + 0x1];
            const _0x2071df = _0x42aabd[_0x209646 + 0x2], _0x5a83cb = _0x42aabd[_0x209646 + 0x3];
            const _0x36500c = _0x2071df - _0x55984e;
            const _0x61b8f9 = _0x5a83cb - _0x4ba990;
            const _0x4f98f4 = _0x47e221 * _0x61b8f9 - _0x4ffed4 * _0x36500c;
            if (Math['abs'](_0x4f98f4) < 1e-9)
                continue;
            const _0x25ef43 = _0x55984e - _0x35293c;
            const _0x2ade99 = _0x4ba990 - _0x151480;
            const _0x4c2fa3 = (_0x25ef43 * _0x61b8f9 - _0x2ade99 * _0x36500c) / _0x4f98f4;
            const _0x2f2ef7 = (_0x25ef43 * _0x4ffed4 - _0x2ade99 * _0x47e221) / _0x4f98f4;
            if (_0x4c2fa3 > 0x1 && _0x2f2ef7 >= 0x0 && _0x2f2ef7 <= 0x1 && _0x4c2fa3 < _0x1c63fe) {
                _0x1c63fe = _0x4c2fa3;
            }
        }
        _0x2a4217['push'](_0x35293c + _0x47e221 * _0x1c63fe, _0x151480 + _0x4ffed4 * _0x1c63fe);
    }
    _0x2c2ddf['polygon'] = _0x2a4217['length'] >= 0x6 ? _0x2a4217 : null;
}
function _0x3505fa(_0x29dfd0, _0x1ed5e3, _0x126632) {
    if (_0x453c4e['isDead'])
        return;
    if (!_0x23614c())
        return;
    if (!_0x3c6ceb)
        _0x5f4de6();
    if (!_0x3c6ceb)
        return;
    const {floorTiles: _0x382129} = _0x3c6ceb;
    if (_0x382129['length'] === 0x0)
        return;
    const _0x28764f = _0x1ebc4e['SHADOW'];
    const _0x206d1a = _0x1ebc4e['MAP']['tileSize'];
    const _0x34be65 = _0x1ebc4e['CAMERA']['width'];
    const _0x59540f = _0x1ebc4e['CAMERA']['height'];
    if (!_0x1ebc4e['SHADOW']['_buf'] || _0x1ebc4e['SHADOW']['_buf']['width'] !== _0x34be65 || _0x1ebc4e['SHADOW']['_buf']['height'] !== _0x59540f) {
        _0x1ebc4e['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x1ebc4e['SHADOW']['_buf']['width'] = _0x34be65;
        _0x1ebc4e['SHADOW']['_buf']['height'] = _0x59540f;
    }
    const _0x35194d = _0x1ebc4e['SHADOW']['_buf'];
    const _0xa49214 = _0x35194d['getContext']('2d');
    _0xa49214['clearRect'](0x0, 0x0, _0x34be65, _0x59540f);
    const _0x1398d4 = _0x453c4e['x'] + _0x453c4e['width'] / 0x2;
    const _0x368b1e = _0x453c4e['y'] + _0x453c4e['height'] / 0x2;
    const _0x220ead = Math['floor'](_0x1398d4 / _0x206d1a);
    const _0x1c52ae = Math['floor'](_0x368b1e / _0x206d1a);
    _0xa49214['fillStyle'] = 'rgba(0,0,0,0.92)';
    _0xa49214['beginPath']();
    for (const {
                c: _0x43144d,
                r: _0x232c82
            } of _0x382129) {
        if (Math['abs'](_0x43144d - _0x220ead) > 0x8 || Math['abs'](_0x232c82 - _0x1c52ae) > 0x8)
            continue;
        const _0xc848f7 = Math['round'](_0x43144d * _0x206d1a - _0x1ed5e3), _0x29dd0d = Math['round'](_0x232c82 * _0x206d1a - _0x126632);
        if (_0xc848f7 > _0x34be65 || _0x29dd0d > _0x59540f || _0xc848f7 + _0x206d1a < 0x0 || _0x29dd0d + _0x206d1a < 0x0)
            continue;
        _0xa49214['rect'](_0xc848f7, _0x29dd0d, _0x206d1a + 0x1, _0x206d1a + 0x1);
    }
    _0xa49214['fill']();
    if (_0x28764f['polygon'] && _0x28764f['polygon']['length'] >= 0x6) {
        _0xa49214['globalCompositeOperation'] = 'destination-out';
        _0xa49214['fillStyle'] = 'rgba(0,0,0,1)';
        const _0x5809c5 = _0x28764f['polygon'];
        _0xa49214['beginPath']();
        _0xa49214['moveTo'](_0x5809c5[0x0] - _0x1ed5e3, _0x5809c5[0x1] - _0x126632);
        for (let _0x246234 = 0x2; _0x246234 < _0x5809c5['length']; _0x246234 += 0x2) {
            _0xa49214['lineTo'](_0x5809c5[_0x246234] - _0x1ed5e3, _0x5809c5[_0x246234 + 0x1] - _0x126632);
        }
        _0xa49214['closePath']();
        _0xa49214['fill']();
        _0xa49214['globalCompositeOperation'] = 'source-over';
    }
    _0x29dfd0['drawImage'](_0x35194d, 0x0, 0x0);
}
function _0x202286(_0x54800d) {
    let _0x4413c8 = 0x0, _0x3c410d = 0x0;
    const _0x137be6 = _0x1ebc4e['INPUTS']['mouseX'] / _0x1ebc4e['SYSTEM']['viewScale'];
    const _0x5a48f3 = _0x1ebc4e['INPUTS']['mouseY'] / _0x1ebc4e['SYSTEM']['viewScale'];
    const _0x1f38d9 = _0x453c4e['x'] - _0x1ebc4e['CAMERA']['x'] + _0x453c4e['width'] / 0x2;
    const _0x4153cb = _0x453c4e['y'] - _0x1ebc4e['CAMERA']['y'] + _0x453c4e['height'] / 0x2;
    const _0x4a0a9b = Math['atan2'](_0x5a48f3 - _0x4153cb, _0x137be6 - _0x1f38d9);
    if (_0x114fcb !== 0x0 || _0x35d0e1 !== 0x0) {
        _0x4413c8 = _0x114fcb;
        _0x3c410d = _0x35d0e1;
    } else if (_0x2253b9) {
        let _0x1e985f = 0x0, _0x5378c3 = 0x0;
        if (_0x1ebc4e['INPUTS']['keys']['w'] || _0x1ebc4e['INPUTS']['keys']['arrowup'])
            _0x1e985f += 0x1;
        if (_0x1ebc4e['INPUTS']['keys']['s'] || _0x1ebc4e['INPUTS']['keys']['arrowdown'])
            _0x1e985f -= 0x1;
        if (_0x1ebc4e['INPUTS']['keys']['d'] || _0x1ebc4e['INPUTS']['keys']['arrowright'])
            _0x5378c3 += 0x1;
        if (_0x1ebc4e['INPUTS']['keys']['a'] || _0x1ebc4e['INPUTS']['keys']['arrowleft'])
            _0x5378c3 -= 0x1;
        if (_0x1e985f !== 0x0 || _0x5378c3 !== 0x0) {
            const _0x24cdf3 = _0x4a0a9b + Math['atan2'](_0x5378c3, _0x1e985f);
            _0x4413c8 = Math['cos'](_0x24cdf3);
            _0x3c410d = Math['sin'](_0x24cdf3);
        }
    } else {
        if (_0x1ebc4e['INPUTS']['keys']['w'] || _0x1ebc4e['INPUTS']['keys']['arrowup'])
            _0x3c410d -= 0x1;
        if (_0x1ebc4e['INPUTS']['keys']['s'] || _0x1ebc4e['INPUTS']['keys']['arrowdown'])
            _0x3c410d += 0x1;
        if (_0x1ebc4e['INPUTS']['keys']['a'] || _0x1ebc4e['INPUTS']['keys']['arrowleft'])
            _0x4413c8 -= 0x1;
        if (_0x1ebc4e['INPUTS']['keys']['d'] || _0x1ebc4e['INPUTS']['keys']['arrowright'])
            _0x4413c8 += 0x1;
        const _0x48178d = _0x4413c8 !== 0x0 || _0x3c410d !== 0x0;
        if (_0x48178d) {
            const _0x5550b3 = Math['sqrt'](_0x4413c8 * _0x4413c8 + _0x3c410d * _0x3c410d);
            _0x4413c8 /= _0x5550b3;
            _0x3c410d /= _0x5550b3;
        }
    }
    if (_0x1ebc4e['GAME_STATE'] === 'NIGHT' && (_0x592491 === 'Skinwalker' || _0x592491 === 'Blackmailer')) {
        if (_0x1ebc4e['NIGHT_ABILITY_OPEN'] || !_0x1ebc4e['CURRENT_TARGET']) {
            _0x4413c8 = 0x0;
            _0x3c410d = 0x0;
            _0x453c4e['vx'] = 0x0;
            _0x453c4e['vy'] = 0x0;
            _0x453c4e['x'] = _0x1ebc4e['MAP']['columns'] * _0x1ebc4e['MAP']['tileSize'] / 0x2 - _0x453c4e['width'] / 0x2;
            _0x453c4e['y'] = _0x1ebc4e['MAP']['rows'] * _0x1ebc4e['MAP']['tileSize'] / 0x2 - _0x453c4e['height'] / 0x2;
        }
    }
    const _0x2a6db6 = _0x4413c8 !== 0x0 || _0x3c410d !== 0x0;
    const _0x203b88 = (_0x1ebc4e['INPUTS']['keys']['shift'] || _0x53c8ca || _0x4d4af5) && _0x2a6db6;
    _0x453c4e['bopTimer'] = _0x203b88 ? _0x453c4e['bopTimer'] + _0x54800d : 0x0;
    _0x453c4e['scale'] = 0x1 + (_0x453c4e['bopTimer'] > 0x0 ? Math['sin'](_0x453c4e['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x3ac124 = Math['pow'](0.001, _0x54800d);
    const _0x51bf1f = _0x203b88 ? 0x74a : 0x5d5;
    _0x453c4e['vx'] += _0x4413c8 * _0x51bf1f * _0x54800d;
    _0x453c4e['vy'] += _0x3c410d * _0x51bf1f * _0x54800d;
    _0x453c4e['vx'] *= _0x3ac124;
    _0x453c4e['vy'] *= _0x3ac124;
    _0x453c4e['x'] += _0x453c4e['vx'] * _0x54800d;
    _0x453c4e['y'] += _0x453c4e['vy'] * _0x54800d;
    for (let _0x9f015d = 0x0; _0x9f015d < 0x3; _0x9f015d++)
        _0x2a3a34();
    for (let _0x505b8a = 0x0; _0x505b8a < 0x2; _0x505b8a++)
        _0x135989();
    for (let _0x42749a = 0x0; _0x42749a < 0x2; _0x42749a++)
        _0x1af16b();
    if (_0x453c4e['x'] < 0x0)
        _0x453c4e['x'] = 0x0;
    if (_0x453c4e['y'] < 0x0)
        _0x453c4e['y'] = 0x0;
    if (_0x453c4e['x'] + _0x453c4e['width'] > _0x1ebc4e['MAP']['columns'] * _0x1ebc4e['MAP']['tileSize'])
        _0x453c4e['x'] = _0x1ebc4e['MAP']['columns'] * _0x1ebc4e['MAP']['tileSize'] - _0x453c4e['width'];
    if (_0x453c4e['y'] + _0x453c4e['height'] > _0x1ebc4e['MAP']['rows'] * _0x1ebc4e['MAP']['tileSize'])
        _0x453c4e['y'] = _0x1ebc4e['MAP']['rows'] * _0x1ebc4e['MAP']['tileSize'] - _0x453c4e['height'];
    if (_0x853c1d) {
        _0x453c4e['angle'] = _0x976bc9 + Math['PI'] / 0x2;
    } else if (_0x114fcb !== 0x0 || _0x35d0e1 !== 0x0) {
        _0x453c4e['angle'] = Math['atan2'](_0x35d0e1, _0x114fcb) + Math['PI'] / 0x2;
    } else if (!_0x204da8) {
        _0x453c4e['angle'] = _0x4a0a9b + Math['PI'] / 0x2;
    }
    const _0x7f995d = _0x453c4e['x'] + _0x453c4e['width'] / 0x2 - _0x1ebc4e['CAMERA']['width'] / 0x2;
    const _0x5b8de4 = _0x453c4e['y'] + _0x453c4e['height'] / 0x2 - _0x1ebc4e['CAMERA']['height'] / 0x2;
    if (_0x1ebc4e['CAMERA']['x'] === null || isNaN(_0x1ebc4e['CAMERA']['x']) || !isFinite(_0x1ebc4e['CAMERA']['x'])) {
        _0x1ebc4e['CAMERA']['x'] = _0x7f995d;
        _0x1ebc4e['CAMERA']['y'] = _0x5b8de4;
    } else {
        const _0xb08f4c = 0x1 - Math['exp'](-Math['max'](0x0, _0x54800d) * 0x28);
        _0x1ebc4e['CAMERA']['x'] += (_0x7f995d - _0x1ebc4e['CAMERA']['x']) * _0xb08f4c;
        _0x1ebc4e['CAMERA']['y'] += (_0x5b8de4 - _0x1ebc4e['CAMERA']['y']) * _0xb08f4c;
    }
    for (const _0x419da8 in _0x4063e4) {
        const _0x1c9767 = _0x4063e4[_0x419da8];
        if (_0x1c9767['renderX'] === undefined) {
            _0x1c9767['renderX'] = _0x1c9767['x'];
            _0x1c9767['renderY'] = _0x1c9767['y'];
            _0x1c9767['renderAngle'] = _0x1c9767['angle'] || 0x0;
        }
        const _0x4d302e = _0x1c9767['x'] + (_0x1c9767['vx'] || 0x0) * _0x54800d;
        const _0x236113 = _0x1c9767['y'] + (_0x1c9767['vy'] || 0x0) * _0x54800d;
        _0x1c9767['x'] = _0x4d302e;
        _0x1c9767['y'] = _0x236113;
        const _0x259a0c = 0x1 - Math['exp'](-_0x54800d * 0x12);
        const _0x59678e = _0x1c9767['x'] - _0x1c9767['renderX'], _0x43fe9e = _0x1c9767['y'] - _0x1c9767['renderY'];
        const _0x1228b4 = Math['sqrt'](_0x59678e * _0x59678e + _0x43fe9e * _0x43fe9e);
        const _0x46393 = 0xc8;
        if (_0x1228b4 > _0x46393) {
            _0x1c9767['renderX'] = _0x1c9767['x'] - _0x59678e / _0x1228b4 * _0x46393;
            _0x1c9767['renderY'] = _0x1c9767['y'] - _0x43fe9e / _0x1228b4 * _0x46393;
        }
        _0x1c9767['renderX'] += (_0x1c9767['x'] - _0x1c9767['renderX']) * _0x259a0c;
        _0x1c9767['renderY'] += (_0x1c9767['y'] - _0x1c9767['renderY']) * _0x259a0c;
        let _0x63f887 = (_0x1c9767['angle'] || 0x0) - _0x1c9767['renderAngle'];
        while (_0x63f887 < -Math['PI'])
            _0x63f887 += Math['PI'] * 0x2;
        while (_0x63f887 > Math['PI'])
            _0x63f887 -= Math['PI'] * 0x2;
        _0x1c9767['renderAngle'] += _0x63f887 * (0x1 - Math['exp'](-_0x54800d * 0x14));
    }
    if (_0x1ebc4e['GAME_STATE'] === 'NIGHT') {
        _0x105daf = Math['min'](0.6, _0x105daf + _0x54800d * 0.5);
    } else {
        _0x105daf = Math['max'](0x0, _0x105daf - _0x54800d * 0.5);
    }
    if (_0x4da813 > 0x0) {
        if (performance['now']() > _0x5b34d0) {
            _0x4da813 = Math['max'](0x0, _0x4da813 - _0x54800d * 0x2);
        }
    }
    _0x10f3a8();
    _0x13a0bb();
}
function _0x13374a(_0x375f14, _0x5962b1, _0x19458a, _0x2b0aa9, _0x557291 = !![]) {
    _0x375f14['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x301512 = _0x375f14['measureText'](_0x5962b1)['width'];
    const _0x38f757 = _0x301512 + 0x18;
    const _0x595589 = 0x1c;
    _0x375f14['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x375f14['beginPath']();
    if (_0x375f14['roundRect']) {
        _0x375f14['roundRect'](_0x19458a - _0x38f757 / 0x2, _0x2b0aa9 - _0x595589, _0x38f757, _0x595589, 0x6);
    } else {
        _0x375f14['rect'](_0x19458a - _0x38f757 / 0x2, _0x2b0aa9 - _0x595589, _0x38f757, _0x595589);
    }
    _0x375f14['fill']();
    if (_0x557291) {
        _0x375f14['beginPath']();
        _0x375f14['moveTo'](_0x19458a - 0x6, _0x2b0aa9);
        _0x375f14['lineTo'](_0x19458a + 0x6, _0x2b0aa9);
        _0x375f14['lineTo'](_0x19458a, _0x2b0aa9 + 0x6);
        _0x375f14['fill']();
    }
    _0x375f14['fillStyle'] = '#ffffff';
    _0x375f14['textAlign'] = 'center';
    _0x375f14['textBaseline'] = 'middle';
    _0x375f14['fillText'](_0x5962b1, _0x19458a, _0x2b0aa9 - _0x595589 / 0x2 + 0x1);
}
function _0x579404(_0x4b754a, _0x5dcfe9, _0x22fa6d, _0x16922f) {
    if (!_0x5dcfe9 || _0x5dcfe9['length'] === 0x0)
        return;
    let _0x1b1767 = _0x16922f;
    for (let _0x3102d9 = 0x0; _0x3102d9 < _0x5dcfe9['length']; _0x3102d9++) {
        _0x13374a(_0x4b754a, _0x5dcfe9[_0x3102d9]['text'], _0x22fa6d, _0x1b1767, _0x3102d9 === 0x0);
        _0x1b1767 -= 0x24;
    }
}
function _0x4e95cd() {
    if (!_0x1ebc4e['SYSTEM']['isReady'])
        return;
    if (_0x1ebc4e['MAP']['layers'] && _0x1ebc4e['MAP']['layers']['length'] > 0x0 && _0x2ce6a6['complete'] && _0x2ce6a6['naturalWidth'] > 0x0) {
        if (!_0x1ebc4e['MAP']['_prerenderedWithTileset'] || !_0x1ebc4e['MAP']['bgChunks'] || _0x1ebc4e['MAP']['bgChunks']['length'] === 0x0) {
            _0x1c51d1();
        }
    }
    if (!_0x1ebc4e['MAP']['bgChunks'] || _0x1ebc4e['MAP']['bgChunks']['length'] === 0x0 || !_0x1ebc4e['MAP']['bgChunks'][0x0] || _0x1ebc4e['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0xa72f4['fillStyle'] = '#000000';
    _0xa72f4['fillRect'](0x0, 0x0, _0x41f444['width'], _0x41f444['height']);
    _0xa72f4['save']();
    try {
        _0xa72f4['scale'](_0x1ebc4e['SYSTEM']['viewScale'], _0x1ebc4e['SYSTEM']['viewScale']);
        _0xa72f4['imageSmoothingEnabled'] = ![];
        const _0x109e2d = Math['floor'](_0x1ebc4e['CAMERA']['x'] || 0x0);
        const _0x38e53a = Math['floor'](_0x1ebc4e['CAMERA']['y'] || 0x0);
        const _0x35d4be = Math['max'](0x0, Math['floor'](_0x109e2d / _0x1ebc4e['MAP']['chunkSize']));
        const _0x588d8d = Math['min'](_0x1ebc4e['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x109e2d + _0x1ebc4e['CAMERA']['width']) / _0x1ebc4e['MAP']['chunkSize']));
        const _0xfa5604 = Math['max'](0x0, Math['floor'](_0x38e53a / _0x1ebc4e['MAP']['chunkSize']));
        const _0x322e92 = Math['min'](_0x1ebc4e['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x38e53a + _0x1ebc4e['CAMERA']['height']) / _0x1ebc4e['MAP']['chunkSize']));
        for (let _0x2f817a = _0xfa5604; _0x2f817a <= _0x322e92; _0x2f817a++)
            for (let _0x7a4986 = _0x35d4be; _0x7a4986 <= _0x588d8d; _0x7a4986++) {
                const _0x20119a = _0x7a4986 * _0x1ebc4e['MAP']['chunkSize'] - _0x109e2d;
                const _0x326801 = _0x2f817a * _0x1ebc4e['MAP']['chunkSize'] - _0x38e53a;
                _0xa72f4['drawImage'](_0x1ebc4e['MAP']['bgChunks'][_0x2f817a][_0x7a4986], _0x20119a, _0x326801, _0x1ebc4e['MAP']['chunkSize'] + 0x1, _0x1ebc4e['MAP']['chunkSize'] + 0x1);
            }
        const _0x5f1456 = _0x4f6ebb('assets/blood\x20splatter.png');
        if (_0x39e8bc && _0x39e8bc['length'] > 0x0) {
            for (const _0x5b267c of _0x39e8bc) {
                const _0x48ce0f = _0x5b267c['x'] - _0x109e2d;
                const _0x5e3f10 = _0x5b267c['y'] - _0x38e53a;
                if (_0x5f1456['complete'] && _0x5f1456['naturalWidth'] > 0x0) {
                    _0xa72f4['drawImage'](_0x5f1456, _0x48ce0f - 0x20, _0x5e3f10 - 0x20, 0x40, 0x40);
                } else {
                    _0xa72f4['fillStyle'] = 'rgba(160,\x200,\x200,\x200.75)';
                    _0xa72f4['beginPath']();
                    _0xa72f4['arc'](_0x48ce0f, _0x5e3f10, 0x16, 0x0, Math['PI'] * 0x2);
                    _0xa72f4['fill']();
                }
            }
        }
        const _0x514f5a = _0x4f6ebb('assets/blood.png');
        if (_0x3cf55f && _0x3cf55f['length'] > 0x0) {
            for (const _0x13cc3f of _0x3cf55f) {
                const _0x48a072 = _0x13cc3f['x'] - _0x109e2d;
                const _0x1947ba = _0x13cc3f['y'] - _0x38e53a;
                if (_0x514f5a['complete'] && _0x514f5a['naturalWidth'] > 0x0) {
                    _0xa72f4['drawImage'](_0x514f5a, _0x48a072 - 0xc, _0x1947ba - 0xc, 0x18, 0x18);
                } else {
                    _0xa72f4['fillStyle'] = 'rgba(180,\x200,\x200,\x200.8)';
                    _0xa72f4['beginPath']();
                    _0xa72f4['arc'](_0x48a072, _0x1947ba, 0x5, 0x0, Math['PI'] * 0x2);
                    _0xa72f4['fill']();
                }
            }
        }
        if (_0x52e7da['complete'] && _0x52e7da['naturalWidth'] > 0x0) {
            const _0x4366ea = _0x1ebc4e['MAP']['tileSize'];
            const _0xae7fb2 = _0x4366ea * 0xa;
            const _0x143093 = _0x1ebc4e['MAP']['columns'] / 0x2 * _0x4366ea - _0xae7fb2 / 0x2 - _0x109e2d;
            const _0xecc69f = _0x1ebc4e['MAP']['rows'] / 0x2 * _0x4366ea - _0xae7fb2 / 0x2 - _0x38e53a;
            _0xa72f4['imageSmoothingEnabled'] = ![];
            _0xa72f4['drawImage'](_0x52e7da, _0x143093, _0xecc69f, _0xae7fb2, _0xae7fb2);
        }
        if (_0x37588b['complete'] && _0x37588b['naturalWidth'] > 0x0) {
            _0x1ebc4e['ENTITIES']['forEach'](_0x16b43d => {
                if (_0x16b43d['type'] !== 'table')
                    return;
                _0xa72f4['save']();
                _0xa72f4['imageSmoothingEnabled'] = ![];
                const _0x1d25d8 = _0x37588b['naturalWidth'] >= _0x37588b['naturalHeight'];
                const _0x374efb = _0x16b43d['w'] >= _0x16b43d['h'];
                if (_0x1d25d8 === _0x374efb) {
                    _0xa72f4['drawImage'](_0x37588b, _0x16b43d['x'] - _0x109e2d, _0x16b43d['y'] - _0x38e53a, _0x16b43d['w'], _0x16b43d['h']);
                } else {
                    _0xa72f4['translate'](_0x16b43d['x'] - _0x109e2d + _0x16b43d['w'] / 0x2, _0x16b43d['y'] - _0x38e53a + _0x16b43d['h'] / 0x2);
                    _0xa72f4['rotate'](Math['PI'] / 0x2);
                    _0xa72f4['drawImage'](_0x37588b, -_0x16b43d['h'] / 0x2, -_0x16b43d['w'] / 0x2, _0x16b43d['h'], _0x16b43d['w']);
                }
                _0xa72f4['restore']();
            });
        } else {
            _0x1ebc4e['ENTITIES']['forEach'](_0x5026fd => {
                if (_0x5026fd['type'] !== 'table')
                    return;
                _0xa72f4['save']();
                _0xa72f4['fillStyle'] = '#6b4423';
                _0xa72f4['fillRect'](_0x5026fd['x'] - _0x109e2d, _0x5026fd['y'] - _0x38e53a, _0x5026fd['w'], _0x5026fd['h']);
                _0xa72f4['strokeStyle'] = '#422810';
                _0xa72f4['lineWidth'] = 0x3;
                _0xa72f4['strokeRect'](_0x5026fd['x'] - _0x109e2d + 0x1, _0x5026fd['y'] - _0x38e53a + 0x1, _0x5026fd['w'] - 0x2, _0x5026fd['h'] - 0x2);
                _0xa72f4['fillStyle'] = '#82532a';
                _0xa72f4['fillRect'](_0x5026fd['x'] - _0x109e2d + 0x4, _0x5026fd['y'] - _0x38e53a + 0x4, _0x5026fd['w'] - 0x8, _0x5026fd['h'] - 0x8);
                _0xa72f4['restore']();
            });
        }
        if (_0x3b6f67) {
            if (_0x1ebc4e['MAP']['wallChunks'] && _0x1ebc4e['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x37fe58 = _0xfa5604; _0x37fe58 <= _0x322e92; _0x37fe58++) {
                    for (let _0x2b3dfb = _0x35d4be; _0x2b3dfb <= _0x588d8d; _0x2b3dfb++) {
                        if (!_0x1ebc4e['MAP']['wallChunks'][_0x37fe58] || !_0x1ebc4e['MAP']['wallChunks'][_0x37fe58][_0x2b3dfb])
                            continue;
                        const _0x2af7ad = _0x2b3dfb * _0x1ebc4e['MAP']['chunkSize'] - _0x109e2d;
                        const _0x51d2b5 = _0x37fe58 * _0x1ebc4e['MAP']['chunkSize'] - _0x38e53a;
                        _0xa72f4['drawImage'](_0x1ebc4e['MAP']['wallChunks'][_0x37fe58][_0x2b3dfb], _0x2af7ad, _0x51d2b5, _0x1ebc4e['MAP']['chunkSize'] + 0x1, _0x1ebc4e['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x2bc2d2 = _0xfa5604; _0x2bc2d2 <= _0x322e92; _0x2bc2d2++) {
                for (let _0x444d81 = _0x35d4be; _0x444d81 <= _0x588d8d; _0x444d81++) {
                    const _0x214426 = _0x444d81 * _0x1ebc4e['MAP']['chunkSize'] - _0x109e2d;
                    const _0x55cdca = _0x2bc2d2 * _0x1ebc4e['MAP']['chunkSize'] - _0x38e53a;
                    _0xa72f4['drawImage'](_0x1ebc4e['MAP']['fgChunks'][_0x2bc2d2][_0x444d81], _0x214426, _0x55cdca, _0x1ebc4e['MAP']['chunkSize'] + 0x1, _0x1ebc4e['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x3aa4d2 = _0x1ebc4e['GAME_STATE'] === 'NIGHT' && (_0x592491 === 'Skinwalker' || _0x592491 === 'Blackmailer') && !_0x453c4e['isDead'];
        const _0x44d366 = _0x453c4e['x'] - _0x109e2d + _0x453c4e['width'] / 0x2;
        const _0x389581 = _0x453c4e['y'] - _0x38e53a + _0x453c4e['height'] / 0x2;
        const _0x23084c = _0x453c4e['width'] * _0x453c4e['scale'] * 1.3;
        const _0xa6fd28 = _0x453c4e['height'] * _0x453c4e['scale'] * 1.3;
        const _0x58f247 = _0x4f6ebb('assets/arrow.png');
        const _0xc1b964 = _0x4f6ebb('assets/tape.png');
        for (const _0x51114e in _0x4063e4) {
            const _0x5d6d7f = _0x4063e4[_0x51114e];
            if (_0x5d6d7f['isDead'])
                continue;
            const _0x3cbd39 = parseInt(_0x51114e);
            const _0x3e5c94 = (_0x5d6d7f['renderX'] ?? _0x5d6d7f['x']) - _0x109e2d + _0x5d6d7f['width'] / 0x2;
            const _0x28b11a = (_0x5d6d7f['renderY'] ?? _0x5d6d7f['y']) - _0x38e53a + _0x5d6d7f['height'] / 0x2;
            const _0x36db2d = Math['min'](0x2, Math['max'](0.3, _0x5d6d7f['scale'] || 0x1));
            const _0x28e907 = _0x5d6d7f['width'] * _0x36db2d * 1.3;
            const _0x3749bc = _0x5d6d7f['height'] * _0x36db2d * 1.3;
            _0xa72f4['save']();
            try {
                _0xa72f4['translate'](_0x3e5c94, _0x28b11a);
                _0xa72f4['rotate'](_0x5d6d7f['renderAngle'] ?? 0x0);
                if (_0x5d6d7f['isDark'])
                    _0xa72f4['filter'] = 'brightness(0)';
                _0x3d8576(_0xa72f4, _0x5d6d7f['body'], _0x5d6d7f['eyes'], _0x28e907, _0x3749bc);
                if (_0x56c575['has'](_0x3cbd39) && _0x3109f4['complete'] && _0x3109f4['naturalWidth'] > 0x0) {
                    _0xa72f4['drawImage'](_0x3109f4, -_0x28e907 / 0x2, -_0x3749bc / 0x2, _0x28e907, _0x3749bc);
                }
                if (_0x5d6d7f['hasArrow'] && _0x1ebc4e['GAME_STATE'] === 'NIGHT' && _0x58f247['complete'] && _0x58f247['naturalWidth'] > 0x0) {
                    _0xa72f4['drawImage'](_0x58f247, -_0x28e907 / 0x2, -_0x3749bc / 0x2, _0x28e907, _0x3749bc);
                }
                if ((_0x5d6d7f['isBlackmailed'] || _0x568948['has'](_0x3cbd39)) && _0xc1b964['complete'] && _0xc1b964['naturalWidth'] > 0x0) {
                    _0xa72f4['drawImage'](_0xc1b964, -_0x28e907 / 0x2, -_0x3749bc / 0x2, _0x28e907, _0x3749bc);
                }
                if (_0x5d6d7f['isDark'])
                    _0xa72f4['filter'] = 'none';
            } finally {
                _0xa72f4['restore']();
            }
            if (!_0xf5b2e4((_0x5d6d7f['renderX'] ?? _0x5d6d7f['x']) + _0x5d6d7f['width'] / 0x2, (_0x5d6d7f['renderY'] ?? _0x5d6d7f['y']) + _0x5d6d7f['height'] / 0x2)) {
                _0xa72f4['textAlign'] = 'center';
                _0xa72f4['lineJoin'] = 'round';
                _0xa72f4['lineWidth'] = 0x3;
                _0xa72f4['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0xa72f4['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x16063a = '#ffffff';
                if (_0x5d6d7f['isBlackmailed'] || _0x568948['has'](_0x3cbd39)) {
                    _0x16063a = '#ff4444';
                } else if (_0x56c575['has'](_0x3cbd39)) {
                    _0x16063a = '#cc88ff';
                }
                _0xa72f4['fillStyle'] = _0x16063a;
                const _0x3879ca = _0x5d6d7f['isDark'] ? '???' : _0x5d6d7f['name'] + (_0x5d6d7f['isOwner'] ? '\x20[🗝️]' : '');
                _0xa72f4['strokeText'](_0x3879ca, _0x3e5c94, _0x28b11a - _0x3749bc / 0x2 - 0x10);
                _0xa72f4['fillText'](_0x3879ca, _0x3e5c94, _0x28b11a - _0x3749bc / 0x2 - 0x10);
            }
        }
        if (!_0x453c4e['isDead']) {
            _0xa72f4['save']();
            try {
                _0xa72f4['translate'](_0x44d366, _0x389581);
                _0xa72f4['rotate'](_0x453c4e['angle']);
                if (_0x3aa4d2)
                    _0xa72f4['filter'] = 'brightness(0)';
                _0x3d8576(_0xa72f4, _0x19fbe0, _0x5d0fd3, _0x23084c, _0xa6fd28);
                if (_0x56c575['has'](_0x3bc0a7) && _0x3109f4['complete'] && _0x3109f4['naturalWidth'] > 0x0) {
                    _0xa72f4['drawImage'](_0x3109f4, -_0x23084c / 0x2, -_0xa6fd28 / 0x2, _0x23084c, _0xa6fd28);
                }
                if (_0x453c4e['hasArrow'] && _0x1ebc4e['GAME_STATE'] === 'NIGHT' && _0x58f247['complete'] && _0x58f247['naturalWidth'] > 0x0) {
                    _0xa72f4['drawImage'](_0x58f247, -_0x23084c / 0x2, -_0xa6fd28 / 0x2, _0x23084c, _0xa6fd28);
                }
                if (_0x568948['has'](_0x3bc0a7) && _0xc1b964['complete'] && _0xc1b964['naturalWidth'] > 0x0) {
                    _0xa72f4['drawImage'](_0xc1b964, -_0x23084c / 0x2, -_0xa6fd28 / 0x2, _0x23084c, _0xa6fd28);
                }
                if (_0x3aa4d2)
                    _0xa72f4['filter'] = 'none';
            } finally {
                _0xa72f4['restore']();
            }
            if (!_0xf5b2e4(_0x453c4e['x'] + _0x453c4e['width'] / 0x2, _0x453c4e['y'] + _0x453c4e['height'] / 0x2)) {
                _0xa72f4['textAlign'] = 'center';
                _0xa72f4['lineJoin'] = 'round';
                _0xa72f4['lineWidth'] = 0x3;
                _0xa72f4['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0xa72f4['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x419917 = '#ffffff';
                if (_0x568948['has'](_0x3bc0a7)) {
                    _0x419917 = '#ff4444';
                } else if (_0x56c575['has'](_0x3bc0a7)) {
                    _0x419917 = '#cc88ff';
                }
                _0xa72f4['fillStyle'] = _0x419917;
                const _0x480076 = _0x3aa4d2 ? '???' : _0x295edc + (_0x27b45f ? '\x20[🗝️]' : '');
                _0xa72f4['strokeText'](_0x480076, _0x44d366, _0x389581 - _0xa6fd28 / 0x2 - 0x10);
                _0xa72f4['fillText'](_0x480076, _0x44d366, _0x389581 - _0xa6fd28 / 0x2 - 0x10);
            }
        }
        if (_0x1ebc4e['MAP']['wallChunks'] && _0x1ebc4e['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x4768b8 = _0xfa5604; _0x4768b8 <= _0x322e92; _0x4768b8++)
                for (let _0x13c05e = _0x35d4be; _0x13c05e <= _0x588d8d; _0x13c05e++) {
                    if (!_0x1ebc4e['MAP']['wallChunks'][_0x4768b8] || !_0x1ebc4e['MAP']['wallChunks'][_0x4768b8][_0x13c05e])
                        continue;
                    const _0x215cfc = _0x13c05e * _0x1ebc4e['MAP']['chunkSize'] - _0x109e2d;
                    const _0x1dd0f8 = _0x4768b8 * _0x1ebc4e['MAP']['chunkSize'] - _0x38e53a;
                    _0xa72f4['drawImage'](_0x1ebc4e['MAP']['wallChunks'][_0x4768b8][_0x13c05e], _0x215cfc, _0x1dd0f8, _0x1ebc4e['MAP']['chunkSize'] + 0x1, _0x1ebc4e['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x5aa685 of _0x1ebc4e['ENTITIES']) {
            if (_0x5aa685['type'] !== 'npc')
                continue;
            const _0x2fd4e0 = _0x5aa685['x'] - _0x109e2d + _0x5aa685['w'] / 0x2;
            const _0x1b0d85 = _0x5aa685['y'] - _0x38e53a + _0x5aa685['h'] / 0x2;
            const _0xbb484d = _0x5aa685['w'];
            const _0x3a90bd = _0x5aa685['h'];
            _0xa72f4['save']();
            _0xa72f4['translate'](_0x2fd4e0, _0x1b0d85);
            _0xa72f4['rotate'](_0x5aa685['angle'] !== undefined ? _0x5aa685['angle'] : 0x0);
            _0x3d8576(_0xa72f4, _0x5aa685['body'] || 'yanito932.png', _0x5aa685['eyes'], _0xbb484d, _0x3a90bd);
            _0xa72f4['restore']();
            _0xa72f4['textAlign'] = 'center';
            _0xa72f4['lineJoin'] = 'round';
            _0xa72f4['lineWidth'] = 0x3;
            _0xa72f4['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0xa72f4['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
            _0xa72f4['fillStyle'] = '#aaaaaa';
            _0xa72f4['strokeText'](_0x5aa685['name'] || 'NPC', _0x2fd4e0, _0x1b0d85 - _0x3a90bd / 0x2 - 0x10);
            _0xa72f4['fillText'](_0x5aa685['name'] || 'NPC', _0x2fd4e0, _0x1b0d85 - _0x3a90bd / 0x2 - 0x10);
        }
        if (_0x453c4e['isDead']) {
            for (const _0x1ff9b2 in _0x4063e4) {
                const _0x2d5997 = _0x4063e4[_0x1ff9b2];
                if (!_0x2d5997['isDead'])
                    continue;
                const _0x16e861 = (_0x2d5997['renderX'] ?? _0x2d5997['x']) - _0x109e2d + _0x2d5997['width'] / 0x2;
                const _0x1cb23d = (_0x2d5997['renderY'] ?? _0x2d5997['y']) - _0x38e53a + _0x2d5997['height'] / 0x2;
                const _0x294875 = _0x2d5997['width'] * (_0x2d5997['scale'] || 0x1) * 1.3;
                const _0xa5e78b = _0x2d5997['height'] * (_0x2d5997['scale'] || 0x1) * 1.3;
                _0xa72f4['save']();
                try {
                    _0xa72f4['translate'](_0x16e861, _0x1cb23d);
                    _0xa72f4['rotate'](_0x2d5997['renderAngle'] ?? 0x0);
                    _0xa72f4['globalAlpha'] = 0.3;
                    _0x3d8576(_0xa72f4, _0x2d5997['body'], _0x2d5997['eyes'], _0x294875, _0xa5e78b);
                } finally {
                    _0xa72f4['restore']();
                }
                if (!_0xf5b2e4((_0x2d5997['renderX'] ?? _0x2d5997['x']) + _0x2d5997['width'] / 0x2, (_0x2d5997['renderY'] ?? _0x2d5997['y']) + _0x2d5997['height'] / 0x2)) {
                    _0xa72f4['save']();
                    _0xa72f4['globalAlpha'] = 0.3;
                    _0xa72f4['textAlign'] = 'center';
                    _0xa72f4['lineJoin'] = 'round';
                    _0xa72f4['lineWidth'] = 0x3;
                    _0xa72f4['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0xa72f4['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                    _0xa72f4['fillStyle'] = '#ffffff';
                    const _0x8ac645 = _0x2d5997['name'] + (_0x2d5997['isOwner'] ? '\x20[🗝️]' : '');
                    _0xa72f4['strokeText'](_0x8ac645, _0x16e861, _0x1cb23d - _0xa5e78b / 0x2 - 0x10);
                    _0xa72f4['fillText'](_0x8ac645, _0x16e861, _0x1cb23d - _0xa5e78b / 0x2 - 0x10);
                    _0xa72f4['restore']();
                }
            }
            _0xa72f4['save']();
            try {
                _0xa72f4['translate'](_0x44d366, _0x389581);
                _0xa72f4['rotate'](_0x453c4e['angle']);
                _0xa72f4['globalAlpha'] = 0.3;
                _0x3d8576(_0xa72f4, _0x19fbe0, _0x5d0fd3, _0x23084c, _0xa6fd28);
            } finally {
                _0xa72f4['restore']();
            }
            if (!_0xf5b2e4(_0x453c4e['x'] + _0x453c4e['width'] / 0x2, _0x453c4e['y'] + _0x453c4e['height'] / 0x2)) {
                _0xa72f4['save']();
                _0xa72f4['globalAlpha'] = 0.3;
                _0xa72f4['textAlign'] = 'center';
                _0xa72f4['lineJoin'] = 'round';
                _0xa72f4['lineWidth'] = 0x3;
                _0xa72f4['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0xa72f4['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                _0xa72f4['fillStyle'] = '#ffffff';
                const _0x2fc601 = _0x295edc + (_0x27b45f ? '\x20[🗝️]' : '');
                _0xa72f4['strokeText'](_0x2fc601, _0x44d366, _0x389581 - _0xa6fd28 / 0x2 - 0x10);
                _0xa72f4['fillText'](_0x2fc601, _0x44d366, _0x389581 - _0xa6fd28 / 0x2 - 0x10);
                _0xa72f4['restore']();
            }
        }
        for (let _0x2e49f2 = _0xfa5604; _0x2e49f2 <= _0x322e92; _0x2e49f2++)
            for (let _0x43575b = _0x35d4be; _0x43575b <= _0x588d8d; _0x43575b++) {
                const _0x5b9d97 = _0x43575b * _0x1ebc4e['MAP']['chunkSize'] - _0x109e2d;
                const _0x22583d = _0x2e49f2 * _0x1ebc4e['MAP']['chunkSize'] - _0x38e53a;
                _0xa72f4['drawImage'](_0x1ebc4e['MAP']['fgChunks'][_0x2e49f2][_0x43575b], _0x5b9d97, _0x22583d, _0x1ebc4e['MAP']['chunkSize'] + 0x1, _0x1ebc4e['MAP']['chunkSize'] + 0x1);
            }
        if (_0x1ebc4e['EDITOR']['enabled'] && _0x1ebc4e['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x3b3be7 = _0x1ebc4e['INPUTS']['mouseX'] / _0x1ebc4e['SYSTEM']['viewScale'] + _0x1ebc4e['CAMERA']['x'];
            const _0x3c76a5 = _0x1ebc4e['INPUTS']['mouseY'] / _0x1ebc4e['SYSTEM']['viewScale'] + _0x1ebc4e['CAMERA']['y'];
            const _0x1bfa0e = Math['floor'](_0x3b3be7 / _0x1ebc4e['MAP']['tileSize']);
            const _0x44adaf = Math['floor'](_0x3c76a5 / _0x1ebc4e['MAP']['tileSize']);
            if (_0x1bfa0e >= 0x0 && _0x1bfa0e < _0x1ebc4e['MAP']['columns'] && _0x44adaf >= 0x0 && _0x44adaf < _0x1ebc4e['MAP']['rows']) {
                const _0x2cbd6b = _0x1bfa0e * _0x1ebc4e['MAP']['tileSize'] - _0x109e2d;
                const _0x4263b6 = _0x44adaf * _0x1ebc4e['MAP']['tileSize'] - _0x38e53a;
                _0xa72f4['save']();
                _0xa72f4['globalAlpha'] = 0.5;
                if (_0x1ebc4e['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x2120f4 = _0x1ebc4e['EDITOR']['selectedTileGid'] - 0x1;
                    _0xa72f4['drawImage'](_0x2ce6a6, _0x2120f4 % _0x1ebc4e['MAP']['tilesetCols'] * _0x1ebc4e['MAP']['tileSize'], Math['floor'](_0x2120f4 / _0x1ebc4e['MAP']['tilesetCols']) * _0x1ebc4e['MAP']['tileSize'], _0x1ebc4e['MAP']['tileSize'], _0x1ebc4e['MAP']['tileSize'], _0x2cbd6b, _0x4263b6, _0x1ebc4e['MAP']['tileSize'], _0x1ebc4e['MAP']['tileSize']);
                } else {
                    _0xa72f4['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0xa72f4['fillRect'](_0x2cbd6b, _0x4263b6, _0x1ebc4e['MAP']['tileSize'], _0x1ebc4e['MAP']['tileSize']);
                }
                _0xa72f4['restore']();
            }
        }
        _0x3505fa(_0xa72f4, _0x109e2d, _0x38e53a);
        if (_0x105daf > 0x0) {
            _0xa72f4['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x105daf + ')';
            _0xa72f4['fillRect'](0x0, 0x0, _0x1ebc4e['CAMERA']['width'], _0x1ebc4e['CAMERA']['height']);
        }
        for (const _0x1dc734 in _0x4063e4) {
            const _0x2e13c9 = _0x4063e4[_0x1dc734];
            if (_0x2e13c9['isDead'] && !_0x453c4e['isDead'])
                continue;
            const _0x1ae26f = (_0x2e13c9['renderX'] ?? _0x2e13c9['x']) - _0x109e2d + _0x2e13c9['width'] / 0x2;
            const _0x131f82 = (_0x2e13c9['renderY'] ?? _0x2e13c9['y']) - _0x38e53a + _0x2e13c9['height'] / 0x2;
            _0x579404(_0xa72f4, _0x2e13c9['chats'], _0x1ae26f, _0x131f82 - _0x2e13c9['height'] / 0x2 - 0x20);
        }
        _0x579404(_0xa72f4, _0x453c4e['chats'], _0x44d366, _0x389581 - _0x453c4e['height'] / 0x2 - 0x20);
        if (_0x4da813 > 0x0) {
            _0xa72f4['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x4da813 + ')';
            _0xa72f4['fillRect'](0x0, 0x0, _0x1ebc4e['CAMERA']['width'], _0x1ebc4e['CAMERA']['height']);
        }
    } finally {
        _0xa72f4['restore']();
    }
}
function _0x130da1(_0x3b6a6d) {
    if (!_0x1ebc4e['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x130da1);
    let _0x1a305c = (_0x3b6a6d - _0x1ebc4e['SYSTEM']['lastTime']) / 0x3e8;
    _0x1ebc4e['SYSTEM']['lastTime'] = _0x3b6a6d;
    if (_0x1a305c > 0.1)
        _0x1a305c = 0.1;
    if (_0x1a305c < 0x0 || isNaN(_0x1a305c))
        _0x1a305c = 0.016;
    if (_0x3b6f67) {
        _0x26ecc8(_0x1a305c);
        _0x4e95cd();
        return;
    }
    if (!_0x3bc0a7)
        return;
    _0x202286(_0x1a305c);
    _0x4dfe6c['tick'](_0x3b6a6d);
    _0x4e95cd();
}
function _0x1c51d1() {
    if (_0x2ce6a6['complete'] && _0x2ce6a6['naturalWidth'] > 0x0) {
        _0x1ebc4e['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x1bbd0a = Math['ceil'](_0x1ebc4e['MAP']['columns'] * _0x1ebc4e['MAP']['tileSize'] / _0x1ebc4e['MAP']['chunkSize']);
    const _0x4758d2 = Math['ceil'](_0x1ebc4e['MAP']['rows'] * _0x1ebc4e['MAP']['tileSize'] / _0x1ebc4e['MAP']['chunkSize']);
    _0x1ebc4e['MAP']['bgChunks'] = [];
    _0x1ebc4e['MAP']['fgChunks'] = [];
    _0x1ebc4e['MAP']['wallChunks'] = [];
    for (let _0x49f415 = 0x0; _0x49f415 < _0x4758d2; _0x49f415++) {
        _0x1ebc4e['MAP']['bgChunks'][_0x49f415] = [];
        _0x1ebc4e['MAP']['fgChunks'][_0x49f415] = [];
        _0x1ebc4e['MAP']['wallChunks'][_0x49f415] = [];
        for (let _0x5dbe30 = 0x0; _0x5dbe30 < _0x1bbd0a; _0x5dbe30++) {
            const _0x510653 = document['createElement']('canvas');
            _0x510653['width'] = _0x510653['height'] = _0x1ebc4e['MAP']['chunkSize'];
            const _0x418850 = document['createElement']('canvas');
            _0x418850['width'] = _0x418850['height'] = _0x1ebc4e['MAP']['chunkSize'];
            const _0x47c054 = document['createElement']('canvas');
            _0x47c054['width'] = _0x47c054['height'] = _0x1ebc4e['MAP']['chunkSize'];
            _0x1ebc4e['MAP']['bgChunks'][_0x49f415][_0x5dbe30] = _0x510653;
            _0x1ebc4e['MAP']['fgChunks'][_0x49f415][_0x5dbe30] = _0x418850;
            _0x1ebc4e['MAP']['wallChunks'][_0x49f415][_0x5dbe30] = _0x47c054;
            _0x1b3243(_0x5dbe30, _0x49f415);
        }
    }
}
function _0x1b3243(_0x2219a9, _0xb63ca9) {
    const _0xab987b = _0x1ebc4e['MAP']['bgChunks'][_0xb63ca9][_0x2219a9]['getContext']('2d', { 'alpha': !![] });
    const _0x284634 = _0x1ebc4e['MAP']['fgChunks'][_0xb63ca9][_0x2219a9]['getContext']('2d', { 'alpha': !![] });
    const _0x4e1c2d = _0x1ebc4e['MAP']['wallChunks'][_0xb63ca9] && _0x1ebc4e['MAP']['wallChunks'][_0xb63ca9][_0x2219a9] ? _0x1ebc4e['MAP']['wallChunks'][_0xb63ca9][_0x2219a9]['getContext']('2d', { 'alpha': !![] }) : null;
    _0xab987b['imageSmoothingEnabled'] = _0x284634['imageSmoothingEnabled'] = ![];
    if (_0x4e1c2d)
        _0x4e1c2d['imageSmoothingEnabled'] = ![];
    _0xab987b['clearRect'](0x0, 0x0, _0x1ebc4e['MAP']['chunkSize'], _0x1ebc4e['MAP']['chunkSize']);
    _0x284634['clearRect'](0x0, 0x0, _0x1ebc4e['MAP']['chunkSize'], _0x1ebc4e['MAP']['chunkSize']);
    if (_0x4e1c2d)
        _0x4e1c2d['clearRect'](0x0, 0x0, _0x1ebc4e['MAP']['chunkSize'], _0x1ebc4e['MAP']['chunkSize']);
    const _0x3f2d2d = Math['floor'](_0x2219a9 * _0x1ebc4e['MAP']['chunkSize'] / _0x1ebc4e['MAP']['tileSize']);
    const _0x2f2bc8 = Math['ceil']((_0x2219a9 + 0x1) * _0x1ebc4e['MAP']['chunkSize'] / _0x1ebc4e['MAP']['tileSize']);
    const _0x45ab65 = Math['floor'](_0xb63ca9 * _0x1ebc4e['MAP']['chunkSize'] / _0x1ebc4e['MAP']['tileSize']);
    const _0x4cae3d = Math['ceil']((_0xb63ca9 + 0x1) * _0x1ebc4e['MAP']['chunkSize'] / _0x1ebc4e['MAP']['tileSize']);
    const _0x23354c = 0.5;
    const _0x3058f6 = _0x1ebc4e['MAP']['tileSize'] - _0x23354c * 0x2;
    _0x1ebc4e['MAP']['layers']['forEach'](_0x124305 => {
        const _0x95fc83 = _0x124305['name'] === 'walls';
        const _0x376666 = _0x124305['name'] === 'trees' ? _0x284634 : _0x95fc83 ? _0x4e1c2d || _0xab987b : _0xab987b;
        for (let _0x3a0084 = Math['max'](0x0, _0x45ab65); _0x3a0084 < Math['min'](_0x1ebc4e['MAP']['rows'], _0x4cae3d); _0x3a0084++) {
            for (let _0x21d09a = Math['max'](0x0, _0x3f2d2d); _0x21d09a < Math['min'](_0x1ebc4e['MAP']['columns'], _0x2f2bc8); _0x21d09a++) {
                let _0x2b6b75 = _0x124305['data'][_0x3a0084 * _0x1ebc4e['MAP']['columns'] + _0x21d09a];
                if (_0x124305['name'] === 'floor2' && _0x1ebc4e['MAP']['doors'] && _0x1ebc4e['MAP']['doors'][_0x3a0084 * _0x1ebc4e['MAP']['columns'] + _0x21d09a]) {
                    _0x2b6b75 = 0x2;
                }
                if (_0x2b6b75 > 0x0) {
                    const _0x598dff = _0x2b6b75 - 0x1;
                    const _0x34eff2 = _0x598dff % _0x1ebc4e['MAP']['tilesetCols'] * _0x1ebc4e['MAP']['tileSize'] + _0x23354c;
                    const _0x5bf495 = Math['floor'](_0x598dff / _0x1ebc4e['MAP']['tilesetCols']) * _0x1ebc4e['MAP']['tileSize'] + _0x23354c;
                    const _0x4c8019 = _0x21d09a * _0x1ebc4e['MAP']['tileSize'] - _0x2219a9 * _0x1ebc4e['MAP']['chunkSize'];
                    const _0x19ca3e = _0x3a0084 * _0x1ebc4e['MAP']['tileSize'] - _0xb63ca9 * _0x1ebc4e['MAP']['chunkSize'];
                    if (_0x2b6b75 === 0x4) {
                        const _0x10f88e = 0x1;
                        const _0x56d86a = _0x10f88e % _0x1ebc4e['MAP']['tilesetCols'] * _0x1ebc4e['MAP']['tileSize'] + _0x23354c;
                        const _0x541c28 = Math['floor'](_0x10f88e / _0x1ebc4e['MAP']['tilesetCols']) * _0x1ebc4e['MAP']['tileSize'] + _0x23354c;
                        _0xab987b['drawImage'](_0x2ce6a6, _0x56d86a, _0x541c28, _0x3058f6, _0x3058f6, _0x4c8019, _0x19ca3e, _0x1ebc4e['MAP']['tileSize'], _0x1ebc4e['MAP']['tileSize']);
                        let _0x6ca6f1 = _0x1ebc4e['MAP']['doors'] ? _0x1ebc4e['MAP']['doors'][_0x3a0084 * _0x1ebc4e['MAP']['columns'] + _0x21d09a] : null;
                        if (!_0x6ca6f1) {
                            const _0x3d4dbe = _0x1ebc4e['MAP']['layers']['find'](_0x4e2885 => _0x4e2885['name'] === 'walls');
                            const _0x4582e0 = _0x3a0084 > 0x0 && _0x3d4dbe && _0x3d4dbe['data'][(_0x3a0084 - 0x1) * _0x1ebc4e['MAP']['columns'] + _0x21d09a] > 0x0;
                            const _0x364693 = _0x3a0084 < _0x1ebc4e['MAP']['rows'] - 0x1 && _0x3d4dbe && _0x3d4dbe['data'][(_0x3a0084 + 0x1) * _0x1ebc4e['MAP']['columns'] + _0x21d09a] > 0x0;
                            const _0x147947 = _0x21d09a > 0x0 && _0x3d4dbe && _0x3d4dbe['data'][_0x3a0084 * _0x1ebc4e['MAP']['columns'] + _0x21d09a - 0x1] > 0x0;
                            const _0x5471d8 = _0x21d09a < _0x1ebc4e['MAP']['columns'] - 0x1 && _0x3d4dbe && _0x3d4dbe['data'][_0x3a0084 * _0x1ebc4e['MAP']['columns'] + _0x21d09a + 0x1] > 0x0;
                            if (_0x147947 && _0x5471d8)
                                _0x6ca6f1 = _0x3a0084 < _0x1ebc4e['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x4582e0 && _0x364693)
                                _0x6ca6f1 = _0x21d09a < _0x1ebc4e['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x543650 = 0x0;
                        if (_0x6ca6f1 === 'bottom')
                            _0x543650 = Math['PI'] / 0x2;
                        else if (_0x6ca6f1 === 'left')
                            _0x543650 = Math['PI'];
                        else if (_0x6ca6f1 === 'top')
                            _0x543650 = -Math['PI'] / 0x2;
                        else if (_0x6ca6f1 === 'right')
                            _0x543650 = 0x0;
                        if (_0x543650 !== 0x0) {
                            _0x376666['save']();
                            _0x376666['translate'](_0x4c8019 + _0x1ebc4e['MAP']['tileSize'] / 0x2, _0x19ca3e + _0x1ebc4e['MAP']['tileSize'] / 0x2);
                            _0x376666['rotate'](_0x543650);
                            _0x376666['drawImage'](_0x2ce6a6, _0x34eff2, _0x5bf495, _0x3058f6, _0x3058f6, -_0x1ebc4e['MAP']['tileSize'] / 0x2, -_0x1ebc4e['MAP']['tileSize'] / 0x2, _0x1ebc4e['MAP']['tileSize'], _0x1ebc4e['MAP']['tileSize']);
                            _0x376666['restore']();
                        } else {
                            _0x376666['drawImage'](_0x2ce6a6, _0x34eff2, _0x5bf495, _0x3058f6, _0x3058f6, _0x4c8019, _0x19ca3e, _0x1ebc4e['MAP']['tileSize'], _0x1ebc4e['MAP']['tileSize']);
                        }
                    } else {
                        _0x376666['drawImage'](_0x2ce6a6, _0x34eff2, _0x5bf495, _0x3058f6, _0x3058f6, _0x4c8019, _0x19ca3e, _0x1ebc4e['MAP']['tileSize'], _0x1ebc4e['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x15698f() {
    _0x2ce6a6['crossOrigin'] = 'Anonymous';
    _0x2ce6a6['onload'] = () => {
        _0x1ebc4e['MAP']['tilesetCols'] = 0x3;
        if (_0x1ebc4e['MAP']['columns'] > 0x0 && _0x1ebc4e['MAP']['layers'] && _0x1ebc4e['MAP']['layers']['length'] > 0x0) {
            _0x1c51d1();
        }
        _0x17e976();
    };
    _0x2ce6a6['onerror'] = () => {
        _0x1ebc4e['MAP']['tilesetCols'] = 0x1;
        _0x17e976();
    };
    _0x2ce6a6['src'] = 'assets/tilesheet.png';
    _0x52e7da['crossOrigin'] = 'Anonymous';
    _0x52e7da['onload'] = _0x17e976;
    _0x52e7da['onerror'] = () => {
        _0x17e976();
    };
    _0x52e7da['src'] = 'assets/center.png';
    _0x37588b['crossOrigin'] = 'Anonymous';
    _0x37588b['onload'] = _0x17e976;
    _0x37588b['onerror'] = () => {
        _0x17e976();
    };
    _0x37588b['src'] = 'assets/table.png';
}
function _0x17e976() {
    _0x1ebc4e['SYSTEM']['assetsLoaded']++;
    if (_0x1ebc4e['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x1ebc4e['MAP']['columns'] > 0x0 && _0x1ebc4e['MAP']['layers'] && _0x1ebc4e['MAP']['layers']['length'] > 0x0) {
            _0x1c51d1();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x158d8a();
    }
}
function _0xfd7e7c(_0x4c05a3, _0x1e1985) {
    if (!_0x27b45f || !_0x2761d6)
        return;
    const _0x56671a = _0x4c05a3 / _0x1ebc4e['SYSTEM']['viewScale'] + _0x1ebc4e['CAMERA']['x'];
    const _0x41a97a = _0x1e1985 / _0x1ebc4e['SYSTEM']['viewScale'] + _0x1ebc4e['CAMERA']['y'];
    const _0x2ff6bc = Math['floor'](_0x56671a / _0x1ebc4e['MAP']['tileSize']);
    const _0x8b0277 = Math['floor'](_0x41a97a / _0x1ebc4e['MAP']['tileSize']);
    if (_0x2ff6bc >= 0x0 && _0x2ff6bc < _0x1ebc4e['MAP']['columns'] && _0x8b0277 >= 0x0 && _0x8b0277 < _0x1ebc4e['MAP']['rows'])
        _0x2761d6['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x1ebc4e['EDITOR']['selectedLayer'],
            'col': _0x2ff6bc,
            'row': _0x8b0277,
            'gid': _0x1ebc4e['EDITOR']['selectedTileGid']
        }));
}
function _0x1bd9e3() {
    const _0x5aae8b = document['getElementById']('palette');
    if (!_0x5aae8b || _0x5aae8b['children']['length'] > 0x0)
        return;
    const _0x543e43 = 0x40;
    const _0xeb5464 = _0x2ce6a6;
    const _0x295881 = document['createElement']('div');
    _0x295881['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x1d7b85 = document['createElement']('canvas');
    _0x1d7b85['width'] = 0xc0;
    _0x1d7b85['height'] = 0xa0;
    _0x1d7b85['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x295881['appendChild'](_0x1d7b85);
    const _0x3cb8e2 = document['createElement']('div');
    _0x3cb8e2['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x295881['appendChild'](_0x3cb8e2);
    let _0x2cd051 = 0x0, _0x2db1f4 = 0x0;
    let _0x524c4e = ![], _0x33187b = 0x0, _0x45d210 = 0x0, _0xc61c3c = 0x0, _0x1531be = 0x0;
    function _0x4efaad() {
        const _0x54bf8f = _0x1d7b85['getContext']('2d');
        _0x54bf8f['clearRect'](0x0, 0x0, _0x1d7b85['width'], _0x1d7b85['height']);
        _0x54bf8f['imageSmoothingEnabled'] = ![];
        if (_0xeb5464['complete'] && _0xeb5464['naturalWidth'] > 0x0) {
            _0x54bf8f['drawImage'](_0xeb5464, _0x2cd051, _0x2db1f4, _0x1d7b85['width'], _0x1d7b85['height'], 0x0, 0x0, _0x1d7b85['width'], _0x1d7b85['height']);
        }
        _0x54bf8f['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x54bf8f['lineWidth'] = 0x1;
        const _0x4ed411 = Math['floor'](_0x2cd051 / _0x543e43);
        const _0x48e0b9 = Math['floor'](_0x2db1f4 / _0x543e43);
        for (let _0x2ace89 = _0x4ed411; _0x2ace89 <= _0x4ed411 + Math['ceil'](_0x1d7b85['width'] / _0x543e43) + 0x1; _0x2ace89++) {
            const _0xfc8124 = _0x2ace89 * _0x543e43 - _0x2cd051;
            _0x54bf8f['beginPath']();
            _0x54bf8f['moveTo'](_0xfc8124, 0x0);
            _0x54bf8f['lineTo'](_0xfc8124, _0x1d7b85['height']);
            _0x54bf8f['stroke']();
        }
        for (let _0x224c2d = _0x48e0b9; _0x224c2d <= _0x48e0b9 + Math['ceil'](_0x1d7b85['height'] / _0x543e43) + 0x1; _0x224c2d++) {
            const _0x7602e4 = _0x224c2d * _0x543e43 - _0x2db1f4;
            _0x54bf8f['beginPath']();
            _0x54bf8f['moveTo'](0x0, _0x7602e4);
            _0x54bf8f['lineTo'](_0x1d7b85['width'], _0x7602e4);
            _0x54bf8f['stroke']();
        }
    }
    function _0x17c2f8() {
        const _0xcbf066 = Math['max'](0x1, Math['ceil'](_0xeb5464['naturalWidth'] / _0x543e43));
        const _0x7f0649 = _0x1ebc4e['EDITOR']['selectedTileGid'];
        if (_0x7f0649 <= 0x0) {
            _0x3cb8e2['style']['display'] = 'none';
            return;
        }
        const _0x37fec3 = _0x7f0649 - 0x1;
        const _0x379303 = _0x37fec3 % _0xcbf066;
        const _0x276660 = Math['floor'](_0x37fec3 / _0xcbf066);
        const _0x37bc94 = _0x379303 * _0x543e43 - _0x2cd051;
        const _0x4f0eb3 = _0x276660 * _0x543e43 - _0x2db1f4;
        _0x3cb8e2['style']['display'] = 'block';
        _0x3cb8e2['style']['left'] = _0x37bc94 + 'px';
        _0x3cb8e2['style']['top'] = _0x4f0eb3 + 'px';
    }
    _0xeb5464['onload'] = () => {
        _0x4efaad();
        _0x17c2f8();
    };
    if (_0xeb5464['complete'] && _0xeb5464['naturalWidth'] > 0x0) {
        _0x4efaad();
        _0x17c2f8();
    }
    _0x295881['addEventListener']('mousedown', _0x24cf3d => {
        if (_0x24cf3d['button'] === 0x0) {
            _0x524c4e = !![];
            _0x33187b = _0x24cf3d['clientX'];
            _0x45d210 = _0x24cf3d['clientY'];
            _0xc61c3c = _0x2cd051;
            _0x1531be = _0x2db1f4;
            _0x295881['style']['cursor'] = 'grabbing';
            _0x24cf3d['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x1a3e0d => {
        if (!_0x524c4e)
            return;
        const _0x31a3b0 = _0x33187b - _0x1a3e0d['clientX'];
        const _0x44a679 = _0x45d210 - _0x1a3e0d['clientY'];
        const _0x4894e4 = Math['max'](0x0, _0xeb5464['naturalWidth'] - _0x1d7b85['width']);
        const _0x23c63d = Math['max'](0x0, _0xeb5464['naturalHeight'] - _0x1d7b85['height']);
        _0x2cd051 = Math['max'](0x0, Math['min'](_0x4894e4, _0xc61c3c + _0x31a3b0));
        _0x2db1f4 = Math['max'](0x0, Math['min'](_0x23c63d, _0x1531be + _0x44a679));
        _0x4efaad();
        _0x17c2f8();
    });
    window['addEventListener']('mouseup', _0x495d27 => {
        if (_0x524c4e) {
            _0x524c4e = ![];
            _0x295881['style']['cursor'] = 'grab';
        }
    });
    _0x295881['addEventListener']('click', _0x139bb6 => {
        const _0x501ef9 = _0x295881['getBoundingClientRect']();
        const _0x5d8df5 = _0x139bb6['clientX'] - _0x501ef9['left'] + _0x2cd051;
        const _0x8f197f = _0x139bb6['clientY'] - _0x501ef9['top'] + _0x2db1f4;
        const _0x2871f2 = Math['max'](0x1, Math['ceil'](_0xeb5464['naturalWidth'] / _0x543e43));
        const _0x3906f3 = Math['floor'](_0x5d8df5 / _0x543e43);
        const _0x57c794 = Math['floor'](_0x8f197f / _0x543e43);
        const _0x540260 = _0x57c794 * _0x2871f2 + _0x3906f3 + 0x1;
        _0x1ebc4e['EDITOR']['selectedTileGid'] = _0x540260;
        _0x17c2f8();
    });
    _0x5aae8b['appendChild'](_0x295881);
    const _0x2dcaf9 = document['createElement']('div');
    _0x2dcaf9['className'] = 'tile-btn\x20eraser-btn';
    _0x2dcaf9['title'] = 'Eraser\x20(gid\x200)';
    _0x2dcaf9['onclick'] = () => {
        _0x1ebc4e['EDITOR']['selectedTileGid'] = 0x0;
        _0x3cb8e2['style']['display'] = 'none';
    };
    _0x5aae8b['appendChild'](_0x2dcaf9);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x1ebc4e['EDITOR']['enabled'] = !_0x1ebc4e['EDITOR']['enabled'];
        const _0x4715d8 = document['getElementById']('editor-tools');
        if (_0x1ebc4e['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x4715d8['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x4715d8['style']['display'] = 'none';
        }
    });
    const _0x48112e = document['getElementById']('start-game-btn');
    if (_0x48112e) {
        _0x48112e['addEventListener']('click', () => {
            if (_0x2761d6)
                _0x2761d6['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x163055 = document['getElementById']('rolelist-toggle-btn');
    if (_0x163055) {
        let _0x565169 = 'subalignments';
        _0x163055['addEventListener']('click', () => {
            if (_0x565169 === 'subalignments')
                _0x565169 = 'precise';
            else if (_0x565169 === 'precise')
                _0x565169 = 'off';
            else
                _0x565169 = 'subalignments';
            _0x163055['innerText'] = 'Role\x20List:\x20' + _0x565169['charAt'](0x0)['toUpperCase']() + _0x565169['slice'](0x1);
            if (_0x2761d6)
                _0x2761d6['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x565169
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0xb1976b => {
        if (_0xb1976b['id'] === 'editor-toggle-btn' || _0xb1976b['id'] === 'start-game-btn' || _0xb1976b['id'] === 'rolelist-toggle-btn')
            return;
        _0xb1976b['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x2ee09f => _0x2ee09f['classList']['remove']('active'));
            _0xb1976b['classList']['add']('active');
            _0x1ebc4e['EDITOR']['selectedLayer'] = _0xb1976b['dataset']['layer'];
        });
    });
}
function _0x54d1b4(_0x5742e5) {
    if (_0x2761d6)
        _0x2761d6['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x5742e5
        }));
}
function _0x2091b1(_0x3333f0) {
    if (_0x2761d6)
        _0x2761d6['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x3333f0
        }));
}
function _0x5c8e09(_0x4daf12, _0x495885, _0x58df92, _0x1d551d) {
    const _0x309324 = document['getElementById']('admin-panel');
    if (_0x309324)
        _0x309324['remove']();
    if (_0x309324 && _0x309324['dataset']['target'] === String(_0x4daf12))
        return;
    const _0x35bd4c = document['createElement']('div');
    _0x35bd4c['id'] = 'admin-panel';
    _0x35bd4c['dataset']['target'] = String(_0x4daf12);
    _0x35bd4c['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x31c877 = document['createElement']('div');
    _0x31c877['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x31c877['textContent'] = _0x495885;
    _0x35bd4c['appendChild'](_0x31c877);
    const _0xcd0b7d = document['createElement']('button');
    _0xcd0b7d['textContent'] = 'Kick';
    _0xcd0b7d['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0xcd0b7d['onmouseenter'] = () => _0xcd0b7d['style']['background'] = 'rgba(255,255,255,0.1)';
    _0xcd0b7d['onmouseleave'] = () => _0xcd0b7d['style']['background'] = 'transparent';
    _0xcd0b7d['onclick'] = () => {
        _0x54d1b4(_0x4daf12);
        _0x35bd4c['remove']();
    };
    _0x35bd4c['appendChild'](_0xcd0b7d);
    const _0x168664 = document['createElement']('button');
    _0x168664['textContent'] = 'Ban';
    _0x168664['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x168664['onmouseenter'] = () => _0x168664['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x168664['onmouseleave'] = () => _0x168664['style']['background'] = 'transparent';
    _0x168664['onclick'] = () => {
        _0x2091b1(_0x4daf12);
        _0x35bd4c['remove']();
    };
    _0x35bd4c['appendChild'](_0x168664);
    document['body']['appendChild'](_0x35bd4c);
    const _0x405a50 = _0x35bd4c['offsetWidth'] || 0x91;
    const _0x33eb49 = _0x35bd4c['offsetHeight'] || 0x50;
    let _0x5218e1 = _0x58df92 - _0x405a50;
    let _0x22085b = _0x1d551d;
    if (_0x5218e1 < 0x4)
        _0x5218e1 = _0x58df92;
    if (_0x22085b + _0x33eb49 > window['innerHeight'] - 0x4)
        _0x22085b = window['innerHeight'] - _0x33eb49 - 0x4;
    _0x35bd4c['style']['left'] = _0x5218e1 + 'px';
    _0x35bd4c['style']['top'] = _0x22085b + 'px';
    const _0x4952b5 = _0x28fd81 => {
        if (!_0x35bd4c['contains'](_0x28fd81['target'])) {
            _0x35bd4c['remove']();
            document['removeEventListener']('mousedown', _0x4952b5);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x4952b5), 0x0);
}
function _0x3a7aca() {
    const _0x3c2a90 = document['getElementById']('leaderboard-list');
    _0x3c2a90['innerHTML'] = '';
    const _0x5164d6 = document['createElement']('div');
    _0x5164d6['className'] = 'leaderboard-entry';
    const _0x17c8ee = document['createElement']('span');
    _0x17c8ee['textContent'] = _0x295edc + (_0x27b45f ? '\x20[🗝️]' : '');
    if (_0x56c575['has'](_0x3bc0a7) && !_0x453c4e['isDead']) {
        _0x17c8ee['style']['color'] = '#cc88ff';
    }
    _0x5164d6['appendChild'](_0x17c8ee);
    _0x3c2a90['appendChild'](_0x5164d6);
    for (const _0x4fc81a in _0x4063e4) {
        const _0x2f487f = document['createElement']('div');
        _0x2f487f['className'] = 'leaderboard-entry';
        const _0x4f2491 = document['createElement']('span');
        _0x4f2491['textContent'] = _0x4063e4[_0x4fc81a]['name'] + (_0x4063e4[_0x4fc81a]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x56c575['has'](parseInt(_0x4fc81a)) && !_0x4063e4[_0x4fc81a]['isDead']) {
            _0x4f2491['style']['color'] = '#cc88ff';
        }
        _0x2f487f['appendChild'](_0x4f2491);
        if (_0x27b45f && !_0x4063e4[_0x4fc81a]['isOwner']) {
            const _0x31107c = _0x4063e4[_0x4fc81a]['id'];
            const _0x5418ca = _0x4063e4[_0x4fc81a]['name'];
            _0x2f487f['style']['cursor'] = 'context-menu';
            _0x2f487f['addEventListener']('contextmenu', _0x30ff0f => {
                _0x30ff0f['preventDefault']();
                _0x30ff0f['stopPropagation']();
                _0x5c8e09(_0x31107c, _0x5418ca, _0x30ff0f['clientX'], _0x30ff0f['clientY']);
            });
        }
        _0x3c2a90['appendChild'](_0x2f487f);
    }
}
window['addEventListener']('resize', _0x158d8a);
function _0x158d8a() {
    _0x41f444['width'] = window['innerWidth'];
    _0x41f444['height'] = window['innerHeight'];
    _0x1ebc4e['SYSTEM']['viewScale'] = Math['max'](_0x41f444['width'] / _0x20ae2e, _0x41f444['height'] / _0x8f72d4);
    _0x1ebc4e['CAMERA']['width'] = _0x41f444['width'] / _0x1ebc4e['SYSTEM']['viewScale'];
    _0x1ebc4e['CAMERA']['height'] = _0x41f444['height'] / _0x1ebc4e['SYSTEM']['viewScale'];
    _0xa72f4['imageSmoothingEnabled'] = ![];
}
function _0x175ed5(_0x40a3ca) {
    if (_0x40a3ca['ctrlKey'] || _0x40a3ca['metaKey']) {
        if (_0x40a3ca['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x40a3ca['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x40a3ca['code'])) {
            _0x40a3ca['preventDefault']();
            _0x40a3ca['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x175ed5, { 'passive': ![] });
window['addEventListener']('keydown', _0x175ed5, { 'passive': ![] });
window['addEventListener']('keydown', _0x360151 => {
    const _0x334ab1 = _0x360151['key']['toLowerCase']();
    if (_0x334ab1 === 'tab') {
        _0x360151['preventDefault']();
        const _0x52ecdf = document['getElementById']('will-ui');
        const _0x31cdf8 = document['getElementById']('will-input');
        if (_0x52ecdf['style']['display'] === 'flex') {
            _0x52ecdf['style']['display'] = 'none';
            if (_0x1ebc4e['GAME_STATE'] !== 'NIGHT' && _0x2761d6)
                _0x2761d6['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x31cdf8['value']
                }));
            _0x31cdf8['blur']();
        } else {
            if (_0x1ebc4e['GAME_STATE'] === 'NIGHT') {
                _0x398861('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x52ecdf['style']['display'] = 'flex';
            _0x31cdf8['focus']();
            for (let _0x36ee9c in _0x1ebc4e['INPUTS']['keys'])
                _0x1ebc4e['INPUTS']['keys'][_0x36ee9c] = ![];
        }
        return;
    }
    if (_0x360151['key'] === 'Enter') {
        if (_0x3b6f67) {
            const _0x2672fd = document['getElementById']('play-btn');
            if (_0x2672fd)
                _0x2672fd['click']();
            return;
        }
        if (!_0x2761d6 || _0x2761d6['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x5ec7ae = document['getElementById']('chat-ui');
        const _0x248ddb = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x248ddb) {
            const _0x4a59a9 = _0x248ddb['value']['trim']();
            if (_0x4a59a9['length'] > 0x0) {
                _0x2761d6['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x4a59a9
                }));
            }
            _0x248ddb['value'] = '';
            _0x5ec7ae['style']['display'] = 'none';
            _0x248ddb['blur']();
        } else {
            _0x5ec7ae['style']['display'] = 'block';
            _0x248ddb['focus']();
            for (let _0x3ba607 in _0x1ebc4e['INPUTS']['keys'])
                _0x1ebc4e['INPUTS']['keys'][_0x3ba607] = ![];
        }
        _0x360151['preventDefault']();
        return;
    }
    if (_0x360151['key'] === 'Escape') {
        const _0x5eb72a = document['getElementById']('role-index-modal');
        if (_0x5eb72a && _0x5eb72a['style']['display'] === 'flex') {
            _0x5eb72a['style']['display'] = 'none';
            return;
        }
        const _0x115b79 = document['getElementById']('guide-ui');
        if (_0x115b79 && _0x115b79['style']['display'] === 'flex') {
            _0x115b79['style']['display'] = 'none';
            return;
        }
        const _0x8dde1f = document['getElementById']('ability-ui');
        if (_0x8dde1f && _0x8dde1f['style']['display'] === 'block') {
            _0x8dde1f['style']['display'] = 'none';
            return;
        }
        const _0xcc5a3f = document['getElementById']('settings-panel');
        if (_0xcc5a3f && _0xcc5a3f['style']['display'] === 'block') {
            _0xcc5a3f['style']['display'] = 'none';
            return;
        }
        const _0x17db71 = document['getElementById']('mayor-confirm-dialog');
        if (_0x17db71 && _0x17db71['style']['display'] === 'flex') {
            _0x17db71['style']['display'] = 'none';
            return;
        }
        const _0x1c16f3 = document['getElementById']('target-chooser-ui');
        if (_0x1c16f3 && _0x1c16f3['style']['display'] === 'flex') {
            _0x1c16f3['style']['display'] = 'none';
            return;
        }
        const _0xf8fb0c = document['getElementById']('chat-ui');
        const _0x45ecef = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x45ecef) {
            _0x45ecef['value'] = '';
            _0xf8fb0c['style']['display'] = 'none';
            _0x45ecef['blur']();
            _0x360151['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x1ebc4e['INPUTS']['keys']['hasOwnProperty'](_0x334ab1))
            _0x1ebc4e['INPUTS']['keys'][_0x334ab1] = !![];
        if (!_0x2761d6 || _0x2761d6['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x334ab1 === 'h' && !_0x360151['repeat']) {
            const _0x181376 = document['getElementById']('guide-ui');
            if (_0x181376) {
                _0x181376['style']['display'] = _0x181376['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x334ab1 === 't' && !_0x360151['repeat']) {
            if (_0x453c4e['isDead'])
                return;
            if (_0x592491 === 'Mayor') {
                if (_0x56c575['has'](_0x3bc0a7)) {
                    _0x398861('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x14b861 = document['getElementById']('mayor-confirm-dialog');
                if (_0x14b861)
                    _0x14b861['style']['display'] = 'flex';
                return;
            }
            if (_0x1ebc4e['GAME_STATE'] === 'NIGHT') {
                if (!_0x1ebc4e['NIGHT_ABILITY_OPEN']) {
                    _0x398861('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x4b133a = document['getElementById']('ability-ui');
                if (_0x4b133a) {
                    if (_0x4b133a['style']['display'] === 'block') {
                        _0x4b133a['style']['display'] = 'none';
                    } else {
                        _0x47cc2a();
                        _0x4b133a['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1ebc4e['GAME_STATE'] === 'DAY_DISCUSS' || _0x1ebc4e['GAME_STATE'] === 'DAY_VOTE') {
                _0x398861('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x334ab1 === 'e' && !_0x453c4e['isDead']) {
            const _0x211f6a = Date['now']();
            if (!window['_lastDoorSend'] || _0x211f6a - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x211f6a;
                _0x2761d6['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x263a59 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x15448e = _0x263a59['key']['toLowerCase']();
        if (_0x1ebc4e['INPUTS']['keys']['hasOwnProperty'](_0x15448e))
            _0x1ebc4e['INPUTS']['keys'][_0x15448e] = ![];
    }
});
window['addEventListener']('mousemove', _0x228e27 => {
    _0x1ebc4e['INPUTS']['mouseX'] = _0x228e27['clientX'];
    _0x1ebc4e['INPUTS']['mouseY'] = _0x228e27['clientY'];
    if (_0x1ebc4e['INPUTS']['isMouseDown'] && _0x1ebc4e['EDITOR']['enabled']) {
        _0xfd7e7c(_0x228e27['clientX'], _0x228e27['clientY']);
    }
});
window['addEventListener']('mousedown', _0x1a7db6 => {
    if (_0x1a7db6['target']['closest']('#editor-ui') || _0x1a7db6['target']['closest']('#leaderboard-ui') || _0x1a7db6['target']['closest']('#role-index-btn-wrap') || _0x1a7db6['target']['closest']('#role-index-modal') || _0x1a7db6['target']['closest']('#chat-log-ui') || _0x1a7db6['target']['closest']('#target-chooser-ui') || _0x1a7db6['target']['closest']('#guide-ui') || _0x1a7db6['target']['closest']('#role-list-ui') || _0x1a7db6['target']['closest']('#ability-ui') || _0x1a7db6['target']['closest']('#settings-panel') || _0x1a7db6['target']['closest']('#mayor-confirm-dialog') || _0x1a7db6['target']['closest']('#mobile-action-bar') || _0x1a7db6['target']['closest']('#mobile-top-bar') || _0x1a7db6['target']['closest']('#mobile-joystick-zone') || _0x1a7db6['target']['closest']('#mobile-chat-overlay') || _0x1a7db6['target']['closest']('#will-ui') || _0x1a7db6['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x1a7db6['button'] === 0x0) {
        _0x1ebc4e['INPUTS']['isMouseDown'] = !![];
        if (_0x1ebc4e['EDITOR']['enabled'])
            _0xfd7e7c(_0x1a7db6['clientX'], _0x1a7db6['clientY']);
    }
});
window['addEventListener']('mouseup', _0x461593 => {
    _0x1ebc4e['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x3e217f => {
    if (_0x3e217f['target']['closest']('#settings-btn'))
        return;
    const _0x53471f = document['getElementById']('leaderboard-list');
    const _0x24640c = document['getElementById']('leaderboard-toggle');
    if (_0x53471f['style']['display'] === 'none') {
        _0x53471f['style']['display'] = 'flex';
        _0x24640c['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x53471f['style']['display'] = 'none';
        _0x24640c['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x15fc00 = document['getElementById']('close-target-btn');
if (_0x15fc00) {
    _0x15fc00['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x14dcfd = document['getElementById']('close-guide-btn');
if (_0x14dcfd) {
    _0x14dcfd['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x9d625 = document['getElementById']('role-list-header');
if (_0x9d625) {
    _0x9d625['addEventListener']('click', () => {
        const _0x5a2713 = document['getElementById']('role-list-items');
        const _0x2bf399 = document['getElementById']('role-list-toggle');
        if (_0x5a2713['style']['display'] === 'none') {
            _0x5a2713['style']['display'] = 'flex';
            _0x2bf399['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x5a2713['style']['display'] = 'none';
            _0x2bf399['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0xbaaef8() {
    const _0x240f3a = document['getElementById']('mobile-joystick-zone');
    const _0x3b53cc = document['getElementById']('mobile-joystick-base');
    const _0x5246ee = document['getElementById']('mobile-joystick-knob');
    if (_0x240f3a && _0x3b53cc && _0x5246ee) {
        const _0x5cdfca = 0x3e;
        const _0x21b3a4 = (_0x10d802, _0x1f5215) => {
            const _0x5cd7c8 = _0x3b53cc['getBoundingClientRect']();
            const _0x5d4860 = _0x5cd7c8['left'] + _0x5cd7c8['width'] / 0x2;
            const _0x394cd4 = _0x5cd7c8['top'] + _0x5cd7c8['height'] / 0x2;
            const _0x410c96 = _0x10d802 - _0x5d4860;
            const _0x35cc4b = _0x1f5215 - _0x394cd4;
            const _0x2859d9 = Math['hypot'](_0x410c96, _0x35cc4b);
            if (_0x2859d9 === 0x0) {
                _0x114fcb = 0x0;
                _0x35d0e1 = 0x0;
                _0x4d4af5 = ![];
                _0x5246ee['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x486788 = Math['min'](_0x2859d9, _0x5cdfca);
            const _0x87c0d6 = _0x410c96 / _0x2859d9 * _0x486788;
            const _0x49fc24 = _0x35cc4b / _0x2859d9 * _0x486788;
            _0x114fcb = _0x87c0d6 / _0x5cdfca;
            _0x35d0e1 = _0x49fc24 / _0x5cdfca;
            _0x4d4af5 = _0x2859d9 >= _0x5cdfca * 0.75;
            _0x5246ee['style']['transform'] = 'translate(' + _0x87c0d6 + 'px,\x20' + _0x49fc24 + 'px)';
        };
        const _0x2b57f6 = _0x1f5fab => {
            for (let _0x400a82 = 0x0; _0x400a82 < _0x1f5fab['changedTouches']['length']; _0x400a82++) {
                const _0x316461 = _0x1f5fab['changedTouches'][_0x400a82];
                if (_0x1b1358 === null) {
                    _0x1b1358 = _0x316461['identifier'];
                    _0x19e276 = !![];
                    _0x21b3a4(_0x316461['clientX'], _0x316461['clientY']);
                    break;
                }
            }
        };
        const _0xfe1f52 = _0x5365b2 => {
            for (let _0x2ab498 = 0x0; _0x2ab498 < _0x5365b2['changedTouches']['length']; _0x2ab498++) {
                const _0x426ad9 = _0x5365b2['changedTouches'][_0x2ab498];
                if (_0x426ad9['identifier'] === _0x1b1358) {
                    _0x21b3a4(_0x426ad9['clientX'], _0x426ad9['clientY']);
                    break;
                }
            }
        };
        const _0x2d3d1f = _0x6bc591 => {
            for (let _0x407f4b = 0x0; _0x407f4b < _0x6bc591['changedTouches']['length']; _0x407f4b++) {
                const _0x1f3481 = _0x6bc591['changedTouches'][_0x407f4b];
                if (_0x1f3481['identifier'] === _0x1b1358) {
                    _0x1b1358 = null;
                    _0x19e276 = ![];
                    _0x114fcb = 0x0;
                    _0x35d0e1 = 0x0;
                    _0x4d4af5 = ![];
                    _0x5246ee['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x240f3a['addEventListener']('touchstart', _0x22e16a => {
            _0x22e16a['preventDefault']();
            _0x2b57f6(_0x22e16a);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0xfe1f52, { 'passive': !![] });
        window['addEventListener']('touchend', _0x2d3d1f, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x2d3d1f, { 'passive': !![] });
    }
    const _0x3527a3 = (_0x335856, _0x2e6991) => {
        const _0x47d491 = _0x335856 / _0x1ebc4e['SYSTEM']['viewScale'];
        const _0x3acfbb = _0x2e6991 / _0x1ebc4e['SYSTEM']['viewScale'];
        const _0x3f8b57 = _0x453c4e['x'] - _0x1ebc4e['CAMERA']['x'] + _0x453c4e['width'] / 0x2;
        const _0x37735f = _0x453c4e['y'] - _0x1ebc4e['CAMERA']['y'] + _0x453c4e['height'] / 0x2;
        _0x976bc9 = Math['atan2'](_0x3acfbb - _0x37735f, _0x47d491 - _0x3f8b57);
        _0x853c1d = !![];
        _0x1ebc4e['INPUTS']['mouseX'] = _0x335856;
        _0x1ebc4e['INPUTS']['mouseY'] = _0x2e6991;
    };
    _0x41f444['addEventListener']('touchstart', _0x5bea85 => {
        if (_0x3b6f67)
            return;
        for (let _0x18e957 = 0x0; _0x18e957 < _0x5bea85['changedTouches']['length']; _0x18e957++) {
            const _0xa71aa8 = _0x5bea85['changedTouches'][_0x18e957];
            if (_0xa71aa8['identifier'] !== _0x1b1358 && _0x5989d4 === null) {
                _0x5989d4 = _0xa71aa8['identifier'];
                _0x3527a3(_0xa71aa8['clientX'], _0xa71aa8['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x41f444['addEventListener']('touchmove', _0x2050e3 => {
        if (_0x3b6f67)
            return;
        for (let _0x400b79 = 0x0; _0x400b79 < _0x2050e3['changedTouches']['length']; _0x400b79++) {
            const _0x4ef3c6 = _0x2050e3['changedTouches'][_0x400b79];
            if (_0x4ef3c6['identifier'] === _0x5989d4) {
                _0x3527a3(_0x4ef3c6['clientX'], _0x4ef3c6['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x50d243 = _0x54dec4 => {
        for (let _0x23a3a6 = 0x0; _0x23a3a6 < _0x54dec4['changedTouches']['length']; _0x23a3a6++) {
            const _0x23ea87 = _0x54dec4['changedTouches'][_0x23a3a6];
            if (_0x23ea87['identifier'] === _0x5989d4) {
                _0x5989d4 = null;
                _0x853c1d = ![];
                break;
            }
        }
    };
    _0x41f444['addEventListener']('touchend', _0x50d243, { 'passive': !![] });
    _0x41f444['addEventListener']('touchcancel', _0x50d243, { 'passive': !![] });
    const _0x44939e = document['getElementById']('mob-sprint-btn');
    if (_0x44939e) {
        _0x44939e['addEventListener']('click', _0x43e27c => {
            _0x43e27c['stopPropagation']();
            _0x53c8ca = !_0x53c8ca;
            _0x44939e['classList']['toggle']('active', _0x53c8ca);
        });
    }
    const _0x4f09c1 = document['getElementById']('mob-interact-btn');
    if (_0x4f09c1) {
        _0x4f09c1['addEventListener']('click', _0x474497 => {
            _0x474497['stopPropagation']();
            if (!_0x453c4e['isDead']) {
                const _0x5e5109 = Date['now']();
                if (!window['_lastDoorSend'] || _0x5e5109 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x5e5109;
                    if (_0x2761d6 && _0x2761d6['readyState'] === WebSocket['OPEN'])
                        _0x2761d6['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x7597bc = document['getElementById']('mob-ability-btn');
    if (_0x7597bc) {
        _0x7597bc['addEventListener']('click', _0x5b21de => {
            _0x5b21de['stopPropagation']();
            if (_0x453c4e['isDead'])
                return;
            if (_0x592491 === 'Mayor') {
                if (_0x56c575['has'](_0x3bc0a7)) {
                    _0x398861('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x5a97ba = document['getElementById']('mayor-confirm-dialog');
                if (_0x5a97ba)
                    _0x5a97ba['style']['display'] = 'flex';
                return;
            }
            if (_0x1ebc4e['GAME_STATE'] === 'NIGHT') {
                if (!_0x1ebc4e['NIGHT_ABILITY_OPEN']) {
                    _0x398861('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x32587f = document['getElementById']('ability-ui');
                if (_0x32587f) {
                    if (_0x32587f['style']['display'] === 'block') {
                        _0x32587f['style']['display'] = 'none';
                    } else {
                        _0x47cc2a();
                        _0x32587f['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x1ebc4e['GAME_STATE'] === 'DAY_DISCUSS' || _0x1ebc4e['GAME_STATE'] === 'DAY_VOTE') {
                _0x398861('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x703b7 = document['getElementById']('mob-will-btn');
    const _0x403bb1 = document['getElementById']('will-ui');
    const _0x4e6660 = document['getElementById']('will-input');
    const _0x179e7e = document['getElementById']('close-will-btn');
    const _0x535dbd = () => {
        if (!_0x403bb1)
            return;
        if (_0x403bb1['style']['display'] === 'flex') {
            _0x403bb1['style']['display'] = 'none';
            if (_0x1ebc4e['GAME_STATE'] !== 'NIGHT' && _0x2761d6 && _0x2761d6['readyState'] === WebSocket['OPEN'] && _0x4e6660) {
                _0x2761d6['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x4e6660['value']
                }));
            }
            if (_0x4e6660)
                _0x4e6660['blur']();
        } else {
            if (_0x1ebc4e['GAME_STATE'] === 'NIGHT') {
                _0x398861('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x403bb1['style']['display'] = 'flex';
            if (_0x4e6660)
                _0x4e6660['focus']();
        }
    };
    if (_0x703b7)
        _0x703b7['addEventListener']('click', _0x323c6a => {
            _0x323c6a['stopPropagation']();
            _0x535dbd();
        });
    if (_0x179e7e)
        _0x179e7e['addEventListener']('click', _0x1eb0ab => {
            _0x1eb0ab['stopPropagation']();
            _0x535dbd();
        });
    const _0x38de00 = document['getElementById']('mob-chat-btn');
    const _0x549378 = document['getElementById']('mobile-chat-overlay');
    const _0x24207a = document['getElementById']('mobile-chat-input');
    const _0x4c8f92 = document['getElementById']('mobile-chat-send');
    const _0x5ee95b = document['getElementById']('mobile-chat-cancel');
    const _0x56480b = () => {
        if (!_0x549378 || !_0x24207a)
            return;
        _0x549378['style']['display'] = 'flex';
        _0x24207a['value'] = '';
        _0x24207a['focus']();
    };
    const _0x2b73e1 = () => {
        if (!_0x549378 || !_0x24207a)
            return;
        _0x549378['style']['display'] = 'none';
        _0x24207a['blur']();
    };
    const _0x3ce96a = () => {
        if (!_0x24207a)
            return;
        const _0x2d0a = _0x24207a['value']['trim']();
        if (_0x2d0a['length'] > 0x0 && _0x2761d6 && _0x2761d6['readyState'] === WebSocket['OPEN']) {
            _0x2761d6['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x2d0a
            }));
        }
        _0x24207a['value'] = '';
        _0x2b73e1();
    };
    if (_0x38de00)
        _0x38de00['addEventListener']('click', _0x36d11a => {
            _0x36d11a['stopPropagation']();
            _0x56480b();
        });
    if (_0x4c8f92)
        _0x4c8f92['addEventListener']('click', _0x1313b5 => {
            _0x1313b5['stopPropagation']();
            _0x3ce96a();
        });
    if (_0x5ee95b)
        _0x5ee95b['addEventListener']('click', _0xba92 => {
            _0xba92['stopPropagation']();
            _0x2b73e1();
        });
    if (_0x24207a) {
        _0x24207a['addEventListener']('keydown', _0x13df92 => {
            if (_0x13df92['key'] === 'Enter') {
                _0x13df92['preventDefault']();
                _0x3ce96a();
            } else if (_0x13df92['key'] === 'Escape') {
                _0x2b73e1();
            }
        });
    }
    const _0x4ba143 = document['getElementById']('mob-top-chat');
    if (_0x4ba143)
        _0x4ba143['addEventListener']('click', _0x3af771 => {
            _0x3af771['stopPropagation']();
            _0x56480b();
        });
    const _0x133c59 = document['getElementById']('mob-top-will');
    if (_0x133c59)
        _0x133c59['addEventListener']('click', _0x57311c => {
            _0x57311c['stopPropagation']();
            _0x535dbd();
        });
    const _0x16043f = document['getElementById']('mob-top-roles');
    if (_0x16043f) {
        _0x16043f['addEventListener']('click', _0xfde347 => {
            _0xfde347['stopPropagation']();
            const _0x52d329 = document['getElementById']('role-list-ui');
            const _0x286410 = document['getElementById']('leaderboard-ui');
            if (_0x286410)
                _0x286410['style']['display'] = 'none';
            if (_0x52d329)
                _0x52d329['style']['display'] = _0x52d329['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x177b15 = document['getElementById']('mob-top-players');
    if (_0x177b15) {
        _0x177b15['addEventListener']('click', _0x261574 => {
            _0x261574['stopPropagation']();
            const _0x2b1134 = document['getElementById']('leaderboard-ui');
            const _0x3634e3 = document['getElementById']('role-list-ui');
            if (_0x3634e3)
                _0x3634e3['style']['display'] = 'none';
            if (_0x2b1134)
                _0x2b1134['style']['display'] = _0x2b1134['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x8d2ad8 = document['getElementById']('mob-top-help');
    if (_0x8d2ad8) {
        _0x8d2ad8['addEventListener']('click', _0x1c0fb5 => {
            _0x1c0fb5['stopPropagation']();
            const _0x2c852b = document['getElementById']('guide-ui');
            if (_0x2c852b)
                _0x2c852b['style']['display'] = _0x2c852b['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x204da8) {
            _0x204da8 = !![];
            _0x3b1f14();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
