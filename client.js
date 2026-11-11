document['addEventListener']('contextmenu', _0x57305b => _0x57305b['preventDefault']());
const _0xeecc1 = {
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
let _0x25121a = '';
function _0x403326(_0x51e096, _0x39291e) {
    const _0x1249df = document['getElementById']('role-list-ui');
    const _0x1aaf32 = document['getElementById']('role-list-items');
    if (!_0x1249df || !_0x1aaf32)
        return;
    if (!_0x39291e || _0x39291e === 'off' || !_0x51e096 || _0x51e096['length'] === 0x0) {
        _0x1249df['style']['display'] = 'none';
        return;
    }
    const _0x5e77c9 = _0x39291e + '|' + JSON['stringify'](_0x51e096);
    if (_0x5e77c9 === _0x25121a)
        return;
    _0x25121a = _0x5e77c9;
    const _0x419df2 = document['getElementById']('role-tooltip');
    if (_0x419df2) {
        _0x419df2['style']['visibility'] = 'hidden';
        _0x419df2['style']['opacity'] = '0';
    }
    _0x1249df['style']['display'] = 'flex';
    _0x1aaf32['innerHTML'] = '';
    _0x51e096['forEach'](_0x27d31d => {
        const _0x34c654 = document['createElement']('div');
        _0x34c654['className'] = 'role-list-entry';
        const _0x4a35da = _0x27d31d['name']['includes']('Mafia') || _0x27d31d['name'] === 'Skinwalker' || _0x27d31d['name'] === 'Blackmailer';
        _0x34c654['classList']['add'](_0x4a35da ? 'mafia' : 'town');
        if (_0x39291e === 'precise' && _0x27d31d['isDead']) {
            _0x34c654['classList']['remove']('town', 'mafia');
            _0x34c654['classList']['add']('dead');
            _0x34c654['innerHTML'] = '<span>' + _0x27d31d['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x1a195f = _0x27d31d['count'] !== undefined && _0x27d31d['count'] !== null ? _0x27d31d['count'] + 'x\x20' : '';
            _0x34c654['innerHTML'] = '<span>' + _0x1a195f + _0x27d31d['name'] + '</span>';
        }
        if (_0x39291e === 'subalignments' && _0xeecc1[_0x27d31d['name']]) {
            _0x34c654['style']['cursor'] = 'pointer';
            _0x34c654['addEventListener']('mouseenter', () => {
                const _0x4d1f71 = document['getElementById']('role-tooltip');
                if (!_0x4d1f71)
                    return;
                const _0x2ed0b1 = _0xeecc1[_0x27d31d['name']]['join'](',\x20');
                _0x4d1f71['innerHTML'] = '';
                const _0x1f4a59 = document['createElement']('span');
                _0x1f4a59['style']['color'] = '#ffcc00';
                _0x1f4a59['textContent'] = _0x27d31d['name'];
                _0x4d1f71['appendChild'](_0x1f4a59);
                _0x4d1f71['appendChild'](document['createElement']('br'));
                _0x4d1f71['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x2ed0b1));
                const _0x53ad91 = _0x34c654['getBoundingClientRect']();
                _0x4d1f71['style']['left'] = _0x53ad91['left'] - 0xeb + 'px';
                _0x4d1f71['style']['top'] = _0x53ad91['top'] + 'px';
                _0x4d1f71['style']['display'] = 'block';
                _0x4d1f71['style']['visibility'] = 'visible';
                _0x4d1f71['style']['opacity'] = '1';
            });
            _0x34c654['addEventListener']('mouseleave', () => {
                const _0x5af25f = document['getElementById']('role-tooltip');
                if (_0x5af25f) {
                    _0x5af25f['style']['display'] = 'none';
                    _0x5af25f['style']['visibility'] = 'hidden';
                    _0x5af25f['style']['opacity'] = '0';
                }
            });
        }
        _0x1aaf32['appendChild'](_0x34c654);
    });
}
let _0x523d40 = null;
let _0x256129 = null;
const _0xc41daf = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x4d92e1 = 'Player???';
let _0x30628a = ![];
let _0x2a4a07 = {};
let _0x3b87ae = null;
let _0x5f238b = 0x0;
let _0x75f82c = 0x0;
let _0x2d7c59 = new Set();
let _0x133c4b = ![];
let _0x539c8d = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x55dfe8 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x493780 = ![];
let _0x3d5222 = null;
let _0x591266 = 0x0;
let _0xa82f77 = 0x0;
let _0x11d1aa = ![];
let _0x3b576d = ![];
let _0x18095b = 0x0;
let _0x75940d = null;
let _0x52014a = ![];
let _0x17f910 = 0x0;
let _0x5c1620 = 0x0;
let _0xac7644 = [];
let _0x1e8dbc = [];
let _0x29f081 = new Set();
const _0x430ade = ((() => {
    const _0x45dd95 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x57c1c1 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x3c0306 = 0x320;
    const _0x16b9b6 = {};
    const _0x1eea51 = {};
    let _0x264a02 = null;
    let _0x26793e = _0x57c1c1 === 0x0;
    let _0x1e73ab = ![];
    for (const [_0x331279, _0x3b8da3] of Object['entries'](_0x45dd95)) {
        const _0x23d42b = new Audio(_0x3b8da3);
        _0x23d42b['loop'] = !![];
        _0x23d42b['volume'] = 0x0;
        _0x23d42b['preload'] = 'auto';
        _0x16b9b6[_0x331279] = _0x23d42b;
        _0x1eea51[_0x331279] = null;
    }
    const _0x4f3929 = _0x139141 => Math['min'](0x1, Math['max'](0x0, _0x139141));
    function _0x5bea44(_0x54e1d5) {
        if (_0x1eea51[_0x54e1d5] !== null) {
            cancelAnimationFrame(_0x1eea51[_0x54e1d5]);
            _0x1eea51[_0x54e1d5] = null;
        }
    }
    function _0x56773c(_0x105372, _0xdd7c42, _0x15add7, _0x36264f, _0x432ad5) {
        _0x5bea44(_0x105372);
        const _0x5ae4b7 = _0x16b9b6[_0x105372];
        const _0x1e6690 = performance['now']();
        const _0xade7c3 = _0x34e739 => {
            const _0x3701b0 = _0x4f3929((_0x34e739 - _0x1e6690) / _0x36264f);
            const _0x3a060d = _0x4f3929(_0xdd7c42 + (_0x15add7 - _0xdd7c42) * _0x3701b0);
            _0x5ae4b7['volume'] = _0x26793e ? 0x0 : _0x3a060d;
            if (_0x3701b0 < 0x1) {
                _0x1eea51[_0x105372] = requestAnimationFrame(_0xade7c3);
            } else {
                _0x1eea51[_0x105372] = null;
                _0x5ae4b7['volume'] = _0x26793e ? 0x0 : _0x4f3929(_0x15add7);
                if (_0x432ad5)
                    _0x432ad5();
            }
        };
        _0x1eea51[_0x105372] = requestAnimationFrame(_0xade7c3);
    }
    function _0x5cb234(_0x16ddc2) {
        const _0xfaa16b = _0x16ddc2['play']();
        if (_0xfaa16b && _0xfaa16b['catch']) {
            _0xfaa16b['catch'](() => {
                if (!_0x1e73ab) {
                    const _0xf2e063 = () => {
                        _0x1e73ab = !![];
                        _0x16ddc2['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0xf2e063);
                        document['removeEventListener']('keydown', _0xf2e063);
                        document['removeEventListener']('touchstart', _0xf2e063);
                    };
                    document['addEventListener']('click', _0xf2e063, { 'once': !![] });
                    document['addEventListener']('keydown', _0xf2e063, { 'once': !![] });
                    document['addEventListener']('touchstart', _0xf2e063, { 'once': !![] });
                }
            });
        }
    }
    function _0x1c0ccc(_0x2a47c9) {
        if (!_0x45dd95[_0x2a47c9])
            return;
        if (_0x264a02 === _0x2a47c9)
            return;
        const _0x1c958e = _0x264a02;
        _0x264a02 = _0x2a47c9;
        const _0x5066a2 = _0x16b9b6[_0x2a47c9];
        _0x5bea44(_0x2a47c9);
        _0x5066a2['currentTime'] = 0x0;
        _0x5066a2['volume'] = 0x0;
        _0x5cb234(_0x5066a2);
        _0x56773c(_0x2a47c9, 0x0, _0x57c1c1, _0x3c0306);
        if (_0x1c958e && _0x16b9b6[_0x1c958e]) {
            const _0x48e5bc = _0x1c958e;
            const _0x1c4e06 = _0x16b9b6[_0x48e5bc];
            const _0xf49fed = _0x4f3929(_0x1c4e06['volume']);
            _0x56773c(_0x48e5bc, _0xf49fed, 0x0, _0x3c0306, () => {
                _0x1c4e06['pause']();
                _0x1c4e06['currentTime'] = 0x0;
            });
        }
    }
    function _0x3b33b3(_0x4f46cf) {
        _0x57c1c1 = _0x4f3929(_0x4f46cf);
        localStorage['setItem']('musicVolume', String(_0x57c1c1));
        if (!_0x26793e && _0x264a02 && _0x1eea51[_0x264a02] === null) {
            _0x16b9b6[_0x264a02]['volume'] = _0x57c1c1;
        }
    }
    function _0x53bbd9() {
        return _0x57c1c1;
    }
    function _0x4cc2ce(_0x4c7e03) {
        _0x26793e = _0x4c7e03;
        for (const _0xc5663f of Object['keys'](_0x16b9b6)) {
            if (_0x1eea51[_0xc5663f] === null) {
                _0x16b9b6[_0xc5663f]['volume'] = _0x4c7e03 || _0xc5663f !== _0x264a02 ? 0x0 : _0x57c1c1;
            }
        }
    }
    function _0x1233c9() {
        return _0x26793e;
    }
    function _0x5d5858(_0x5cde9f) {
        if (_0x5cde9f === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x5cde9f === 'DAY_VOTE')
            return 'voting';
        if (_0x5cde9f === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x22fdc1(_0x546b92) {
        _0x1c0ccc(_0x5d5858(_0x546b92));
    }
    function _0x1d5464(_0x3171be) {
        _0x1c0ccc(_0x3171be);
    }
    return {
        'play': _0x1c0ccc,
        'onStateChange': _0x22fdc1,
        'onSoundEvent': _0x1d5464,
        'setVolume': _0x3b33b3,
        'getVolume': _0x53bbd9,
        'setMuted': _0x4cc2ce,
        'isMuted': _0x1233c9
    };
})());
const _0x23a891 = ((() => {
    const _0x1a99d7 = 0x258;
    const _0x364e3f = 0xb4;
    const _0x3d8498 = 0x708;
    const _0x34069c = 0x140;
    const _0x2ead9b = 0.18;
    const _0xa81a5f = 0.95;
    const _0x32a999 = new Audio('audio/heartbeat.mp3');
    _0x32a999['loop'] = ![];
    _0x32a999['preload'] = 'auto';
    _0x32a999['volume'] = 0x0;
    let _0x5846b0 = 0x0;
    let _0x25bcdb = Infinity;
    function _0x3292ee(_0xfb4308, _0x1f2bbd, _0x510999) {
        return Math['min'](_0x510999, Math['max'](_0x1f2bbd, _0xfb4308));
    }
    function _0x2112d5(_0x11912c, _0x2fe0dd, _0x4c9a3f) {
        return _0x11912c + (_0x2fe0dd - _0x11912c) * _0x4c9a3f;
    }
    function _0x13dd25(_0x5a2b46) {
        if (_0x474e7c['GAME_STATE'] !== 'NIGHT' || _0xea442['isDead'] || _0x3b87ae === 'Skinwalker' || _0x3b87ae === 'Blackmailer') {
            _0x25bcdb = Infinity;
            return;
        }
        const _0x37c452 = _0xea442['x'] + 22.5;
        const _0x561c24 = _0xea442['y'] + 22.5;
        let _0x3040a6 = Infinity;
        for (const _0x411088 in _0x2a4a07) {
            const _0xc2dfbc = _0x2a4a07[_0x411088];
            if (!_0xc2dfbc['isDark'] || _0xc2dfbc['isDead'])
                continue;
            const _0x18f042 = _0xc2dfbc['renderX'] + 22.5 - _0x37c452;
            const _0x1996ca = _0xc2dfbc['renderY'] + 22.5 - _0x561c24;
            const _0x3ec2cd = Math['sqrt'](_0x18f042 * _0x18f042 + _0x1996ca * _0x1996ca);
            if (_0x3ec2cd < _0x3040a6)
                _0x3040a6 = _0x3ec2cd;
        }
        _0x25bcdb = _0x3040a6;
        if (_0x3040a6 > _0x1a99d7)
            return;
        const _0xb9bd7a = 0x1 - _0x3292ee((_0x3040a6 - _0x364e3f) / (_0x1a99d7 - _0x364e3f), 0x0, 0x1);
        const _0x4bdd54 = _0x2112d5(_0x3d8498, _0x34069c, _0xb9bd7a);
        const _0x549d39 = _0x2112d5(_0x2ead9b, _0xa81a5f, _0xb9bd7a);
        if (_0x5a2b46 >= _0x5846b0) {
            _0x32a999['currentTime'] = 0x0;
            _0x32a999['volume'] = _0x430ade['isMuted']() ? 0x0 : _0x3292ee(_0x549d39 * _0x430ade['getVolume']() / 0.7, 0x0, 0x1);
            _0x32a999['play']()['catch'](() => {
            });
            _0x5846b0 = _0x5a2b46 + _0x4bdd54;
        }
    }
    return { 'tick': _0x13dd25 };
})());
function _0x1b1b86() {
    const _0x8a9eb4 = document['getElementById']('mob-ability-btn');
    if (!_0x8a9eb4)
        return;
    const _0x44bd41 = _0x474e7c['GAME_STATE'] === 'NIGHT' && !_0xea442['isDead'];
    const _0x2412d7 = _0x3b87ae === 'Mayor' && !_0x2d7c59['has'](_0x256129) && !_0xea442['isDead'];
    if (_0x44bd41 || _0x2412d7) {
        _0x8a9eb4['style']['display'] = 'flex';
    } else {
        _0x8a9eb4['style']['display'] = 'none';
    }
}
function _0x1567f3() {
    const _0x2324af = document['getElementById']('mobile-joystick-zone');
    const _0x56e870 = document['getElementById']('mobile-top-bar');
    const _0x3cfe25 = document['getElementById']('mobile-action-bar');
    if (!_0x2324af || !_0x56e870 || !_0x3cfe25)
        return;
    if (!_0x1e89c5 && _0x55dfe8) {
        _0x2324af['style']['display'] = 'flex';
        _0x56e870['style']['display'] = 'flex';
        _0x3cfe25['style']['display'] = 'flex';
        _0x1b1b86();
    } else {
        _0x2324af['style']['display'] = 'none';
        _0x56e870['style']['display'] = 'none';
        _0x3cfe25['style']['display'] = 'none';
    }
}
const _0x29ca33 = document['getElementById']('gameCanvas');
const _0x37866c = _0x29ca33['getContext']('2d', { 'alpha': ![] });
const _0x2c258f = 0x500;
const _0x59ce13 = 0x2d0;
const _0x474e7c = {
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
        'width': _0x2c258f,
        'height': _0x59ce13
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
const _0xea442 = {
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
const _0x398141 = new Image();
const _0x516ee0 = new Image();
const _0x49ef3f = new Image();
const _0x1ac766 = new Image();
_0x1ac766['src'] = 'assets/mayor\x20cosmetic.png';
const _0x46c36f = [
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
const _0x5162f3 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x5d6834 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x5d6834 === 'body1.png' || _0x5d6834 === 'body1')
    _0x5d6834 = 'body01.png';
if (!_0x5d6834['endsWith']('.png'))
    _0x5d6834 += '.png';
let _0x42196a = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x42196a['endsWith']('.png'))
    _0x42196a += '.png';
let _0x1e89c5 = !![];
let _0x34c454 = null;
let _0x444692 = null;
let _0x45a429 = 0x3c;
let _0x4302fa = 0x2d;
const _0x287e7f = {};
const _0x3d9ea3 = new Image();
_0x3d9ea3['src'] = 'assets/yanito932.png';
_0x287e7f['assets/yanito932.png'] = _0x3d9ea3;
function _0x34d2d5(_0x453b84) {
    if (!_0x287e7f[_0x453b84] || !_0x287e7f[_0x453b84]['complete'] && _0x287e7f[_0x453b84]['naturalWidth'] === 0x0 && _0x287e7f[_0x453b84]['naturalHeight'] === 0x0) {
        const _0x1c9941 = new Image();
        _0x1c9941['src'] = _0x453b84;
        _0x287e7f[_0x453b84] = _0x1c9941;
    }
    return _0x287e7f[_0x453b84];
}
function _0x36f802(_0x5d17a9, _0x3ee42e, _0xd66ec8, _0x4d8ab4, _0x41824c) {
    try {
        const _0x160d2c = 'assets/' + (_0x3ee42e || 'body01.png');
        const _0x2e308f = _0x34d2d5(_0x160d2c);
        if (_0x2e308f['complete'] && _0x2e308f['naturalWidth'] > 0x0) {
            _0x5d17a9['drawImage'](_0x2e308f, -_0x4d8ab4 / 0x2, -_0x41824c / 0x2, _0x4d8ab4, _0x41824c);
        }
        if (_0xd66ec8 === null || _0xd66ec8 === undefined)
            return;
        const _0x5619db = 'assets/' + _0xd66ec8;
        const _0x4e626c = _0x34d2d5(_0x5619db);
        if (_0x4e626c['complete'] && _0x4e626c['naturalWidth'] > 0x0) {
            _0x5d17a9['drawImage'](_0x4e626c, -_0x4d8ab4 / 0x2, -_0x41824c / 0x2, _0x4d8ab4, _0x41824c);
        }
    } catch (_0x54413b) {
    }
}
function _0x1b31af() {
    const _0x2a4798 = document['getElementById']('body-skin-grid');
    const _0x38949c = document['getElementById']('eyes-skin-grid');
    if (!_0x2a4798 || !_0x38949c)
        return;
    _0x2a4798['innerHTML'] = '';
    _0x46c36f['forEach'](_0x36c97d => {
        const _0x132849 = document['createElement']('button');
        _0x132849['className'] = 'skin-btn' + (_0x36c97d === _0x5d6834 ? '\x20selected' : '');
        const _0xd340d7 = document['createElement']('img');
        _0xd340d7['src'] = 'assets/' + _0x36c97d;
        _0x132849['appendChild'](_0xd340d7);
        _0x132849['onclick'] = () => {
            _0x5d6834 = _0x36c97d;
            localStorage['setItem']('selectedBody', _0x36c97d);
            _0x2a4798['querySelectorAll']('.skin-btn')['forEach'](_0x4a26a8 => _0x4a26a8['classList']['remove']('selected'));
            _0x132849['classList']['add']('selected');
        };
        _0x2a4798['appendChild'](_0x132849);
    });
    _0x38949c['innerHTML'] = '';
    _0x5162f3['forEach'](_0x222066 => {
        const _0x41771d = document['createElement']('button');
        _0x41771d['className'] = 'skin-btn' + (_0x222066 === _0x42196a ? '\x20selected' : '');
        const _0x54bbdf = document['createElement']('img');
        _0x54bbdf['src'] = 'assets/' + _0x222066;
        _0x41771d['appendChild'](_0x54bbdf);
        _0x41771d['onclick'] = () => {
            _0x42196a = _0x222066;
            localStorage['setItem']('selectedEyes', _0x222066);
            _0x38949c['querySelectorAll']('.skin-btn')['forEach'](_0x5a93ff => _0x5a93ff['classList']['remove']('selected'));
            _0x41771d['classList']['add']('selected');
        };
        _0x38949c['appendChild'](_0x41771d);
    });
}
function _0x1e4d44(_0x5dd11a) {
    if (!_0x474e7c['MAP']['columns'] || !_0x474e7c['CAMERA']['width'])
        return;
    const _0x5a74c4 = Math['max'](0x0, _0x474e7c['MAP']['columns'] * _0x474e7c['MAP']['tileSize'] - _0x474e7c['CAMERA']['width']);
    const _0x4f6233 = Math['max'](0x0, _0x474e7c['MAP']['rows'] * _0x474e7c['MAP']['tileSize'] - _0x474e7c['CAMERA']['height']);
    if (_0x34c454 === null) {
        _0x34c454 = _0x5a74c4 / 0x2;
        _0x444692 = _0x4f6233 / 0x2;
    }
    _0x34c454 += _0x45a429 * _0x5dd11a;
    _0x444692 += _0x4302fa * _0x5dd11a;
    if (_0x34c454 <= 0x0) {
        _0x34c454 = 0x0;
        _0x45a429 = Math['abs'](_0x45a429);
    } else if (_0x34c454 >= _0x5a74c4) {
        _0x34c454 = _0x5a74c4;
        _0x45a429 = -Math['abs'](_0x45a429);
    }
    if (_0x444692 <= 0x0) {
        _0x444692 = 0x0;
        _0x4302fa = Math['abs'](_0x4302fa);
    } else if (_0x444692 >= _0x4f6233) {
        _0x444692 = _0x4f6233;
        _0x4302fa = -Math['abs'](_0x4302fa);
    }
    _0x474e7c['CAMERA']['x'] = _0x34c454;
    _0x474e7c['CAMERA']['y'] = _0x444692;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x433ba4 = document['getElementById']('play-btn');
    const _0x59c9fb = document['getElementById']('username-input');
    const _0x47edfc = localStorage['getItem']('playerName');
    if (_0x47edfc && _0x59c9fb) {
        _0x59c9fb['value'] = _0x47edfc;
    }
    const _0x1b9e84 = () => {
        _0x430ade['play']('wait');
        document['removeEventListener']('click', _0x1b9e84);
        document['removeEventListener']('keydown', _0x1b9e84);
        document['removeEventListener']('touchstart', _0x1b9e84);
    };
    document['addEventListener']('click', _0x1b9e84, { 'once': !![] });
    document['addEventListener']('keydown', _0x1b9e84, { 'once': !![] });
    document['addEventListener']('touchstart', _0x1b9e84, { 'once': !![] });
    if (_0x433ba4) {
        _0x433ba4['addEventListener']('click', () => {
            const _0x5ae0c6 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x468102 = window['_FB'] && window['_FB']['_userData'];
            let _0x49a391 = !![];
            if (_0x5ae0c6 && _0x468102 && _0x468102['username']) {
                _0x4d92e1 = _0x468102['username'];
                _0x49a391 = ![];
            } else {
                const _0x1edf65 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x4d92e1 = 'user' + _0x1edf65;
                _0x49a391 = !![];
            }
            const _0x90ccc9 = _0x49a391 ? 'body01.png' : _0x5d6834;
            const _0x60d8ba = _0x49a391 ? 'eyes4.png' : _0x42196a;
            const _0x365e5f = !_0x49a391 && _0x468102 && _0x468102['photoURL'] ? _0x468102['photoURL'] : '';
            const _0x3fec82 = !_0x49a391 && _0x5ae0c6 ? _0x5ae0c6['uid'] : '';
            localStorage['setItem']('playerName', _0x4d92e1);
            _0x1e89c5 = ![];
            _0x474e7c['CAMERA']['x'] = null;
            _0x474e7c['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x115b8f = document['getElementById']('chat-log-wrap');
            if (_0x115b8f)
                _0x115b8f['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x28d443 = document['getElementById']('controls-hint');
            if (_0x28d443 && !_0x55dfe8)
                _0x28d443['style']['display'] = 'block';
            _0x1567f3();
            if (_0x55dfe8) {
                const _0x44dffd = document['getElementById']('leaderboard-list');
                const _0x120e6d = document['getElementById']('leaderboard-toggle');
                if (_0x44dffd) {
                    _0x44dffd['style']['display'] = 'none';
                    if (_0x120e6d)
                        _0x120e6d['style']['transform'] = 'rotate(180deg)';
                }
                const _0x236499 = document['getElementById']('role-list-items');
                const _0x5f09df = document['getElementById']('role-list-toggle');
                if (_0x236499) {
                    _0x236499['style']['display'] = 'none';
                    if (_0x5f09df)
                        _0x5f09df['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x46935d = !_0x49a391 && _0x468102 ? {
                'townWins': _0x468102['townWins'] || 0x0,
                'mafiaWins': _0x468102['mafiaWins'] || 0x0,
                'deaths': _0x468102['deaths'] || 0x0,
                'townLosses': _0x468102['townLosses'] || 0x0,
                'mafiaLosses': _0x468102['mafiaLosses'] || 0x0
            } : null;
            const _0x2066c0 = JSON['stringify']({
                'type': 'join',
                'name': _0x4d92e1,
                'token': _0xc41daf,
                'body': _0x90ccc9,
                'eyes': _0x60d8ba,
                'isGuest': _0x49a391,
                'uid': _0x3fec82,
                'photoURL': _0x365e5f,
                'accountStats': _0x46935d
            });
            if (_0x523d40 && _0x523d40['readyState'] === WebSocket['OPEN']) {
                _0x523d40['send'](_0x2066c0);
            } else if (!_0x523d40 || _0x523d40['readyState'] === WebSocket['CLOSED'] || _0x523d40['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x2066c0;
                _0x4f2b69();
            }
        });
    }
    _0x1b31af();
    _0x4f2b69();
    _0x5978eb();
    _0x106b89();
    _0x4aa835();
    _0x14b1a4();
});
const _0x5edebb = [
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
let _0x8b4a49 = 'Town';
let _0x1a81d0 = 0x0;
function _0x4196b5() {
    const _0x15b861 = document['getElementById']('role-index-main-tabs');
    const _0x3863ef = document['getElementById']('role-index-tabs');
    const _0x2be03c = document['getElementById']('role-index-body');
    if (!_0x3863ef || !_0x2be03c)
        return;
    if (_0x15b861) {
        _0x15b861['innerHTML'] = '';
        const _0x58295e = document['createElement']('button');
        _0x58295e['className'] = 'role-index-main-tab-btn\x20main-town' + (_0x8b4a49 === 'Town' ? '\x20active' : '');
        _0x58295e['textContent'] = 'TOWN';
        _0x58295e['addEventListener']('click', () => {
            _0x8b4a49 = 'Town';
            _0x1a81d0 = 0x0;
            _0x4196b5();
        });
        _0x15b861['appendChild'](_0x58295e);
        const _0x4649e6 = document['createElement']('button');
        _0x4649e6['className'] = 'role-index-main-tab-btn\x20main-mafia' + (_0x8b4a49 === 'Mafia' ? '\x20active' : '');
        _0x4649e6['textContent'] = 'MAFIA';
        _0x4649e6['addEventListener']('click', () => {
            _0x8b4a49 = 'Mafia';
            _0x1a81d0 = 0x0;
            _0x4196b5();
        });
        _0x15b861['appendChild'](_0x4649e6);
    }
    const _0x3e6424 = _0x5edebb['filter'](_0x83a0 => _0x83a0['faction'] === _0x8b4a49);
    _0x3863ef['innerHTML'] = '';
    _0x3e6424['forEach']((_0x1aa45e, _0x4d98a1) => {
        const _0x5134eb = document['createElement']('button');
        _0x5134eb['className'] = 'role-index-tab-btn' + (_0x1aa45e['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x4d98a1 === _0x1a81d0 ? '\x20active' : '');
        _0x5134eb['textContent'] = _0x1aa45e['name'];
        _0x5134eb['addEventListener']('click', () => {
            _0x1a81d0 = _0x4d98a1;
            _0x4196b5();
        });
        _0x3863ef['appendChild'](_0x5134eb);
    });
    const _0x17eb07 = _0x3e6424[_0x1a81d0] || _0x3e6424[0x0];
    _0x2be03c['innerHTML'] = '';
    if (!_0x17eb07)
        return;
    const _0x39b0f9 = document['createElement']('div');
    _0x39b0f9['className'] = 'role-index-title-row';
    const _0x22067a = document['createElement']('span');
    _0x22067a['className'] = 'role-index-name\x20' + (_0x17eb07['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0x22067a['textContent'] = _0x17eb07['name'];
    _0x39b0f9['appendChild'](_0x22067a);
    const _0x2eeaf1 = document['createElement']('span');
    _0x2eeaf1['className'] = 'role-index-faction-badge\x20' + (_0x17eb07['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x2eeaf1['textContent'] = _0x17eb07['faction'];
    _0x39b0f9['appendChild'](_0x2eeaf1);
    _0x2be03c['appendChild'](_0x39b0f9);
    _0x17eb07['paragraphs']['forEach'](_0x2a32fb => {
        const _0x24b867 = document['createElement']('p');
        _0x24b867['className'] = 'role-index-desc-paragraph';
        _0x24b867['innerHTML'] = _0x2a32fb;
        _0x2be03c['appendChild'](_0x24b867);
    });
}
function _0x14b1a4() {
    const _0x7c4f3f = document['getElementById']('role-index-btn');
    const _0x1c9df2 = document['getElementById']('role-index-modal');
    const _0x471587 = document['getElementById']('close-role-index-btn');
    const _0x10713e = document['getElementById']('mob-top-index');
    if (_0x7c4f3f && _0x1c9df2) {
        _0x7c4f3f['addEventListener']('click', _0x1ebcc8 => {
            _0x1ebcc8['stopPropagation']();
            if (_0x1c9df2['style']['display'] === 'none' || !_0x1c9df2['style']['display']) {
                _0x4196b5();
                _0x1c9df2['style']['display'] = 'flex';
            } else {
                _0x1c9df2['style']['display'] = 'none';
            }
        });
    }
    if (_0x471587 && _0x1c9df2) {
        _0x471587['addEventListener']('click', _0xf47a6a => {
            _0xf47a6a['stopPropagation']();
            _0x1c9df2['style']['display'] = 'none';
        });
    }
    if (_0x10713e && _0x1c9df2) {
        _0x10713e['addEventListener']('click', _0x44491b => {
            _0x44491b['stopPropagation']();
            if (_0x1c9df2['style']['display'] === 'none' || !_0x1c9df2['style']['display']) {
                _0x4196b5();
                _0x1c9df2['style']['display'] = 'flex';
            } else {
                _0x1c9df2['style']['display'] = 'none';
            }
        });
    }
}
function _0x106b89() {
    const _0x24579b = document['getElementById']('settings-btn');
    const _0x522768 = document['getElementById']('settings-panel');
    const _0x42795a = document['getElementById']('close-settings-btn');
    const _0x2bf522 = document['getElementById']('setting-mouse-relative');
    if (_0x2bf522) {
        _0x2bf522['checked'] = _0x539c8d;
        _0x2bf522['addEventListener']('change', () => {
            _0x539c8d = _0x2bf522['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x539c8d ? 'true' : 'false');
        });
    }
    const _0x1524e2 = document['getElementById']('setting-music-volume');
    const _0x46f1a3 = document['getElementById']('setting-music-volume-display');
    function _0x46985a(_0x13c8fe) {
        const _0x2a336d = (_0x13c8fe['value'] - _0x13c8fe['min']) / (_0x13c8fe['max'] - _0x13c8fe['min']) * 0x64;
        _0x13c8fe['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x2a336d + '%,\x20#444\x20' + _0x2a336d + '%)';
    }
    if (_0x1524e2) {
        const _0x5696f3 = _0x430ade['getVolume']();
        const _0x2766ee = Math['round'](_0x5696f3 * 0x64);
        _0x1524e2['value'] = _0x2766ee;
        if (_0x46f1a3)
            _0x46f1a3['textContent'] = _0x2766ee + '%';
        _0x46985a(_0x1524e2);
        _0x1524e2['addEventListener']('input', () => {
            const _0x5ba78e = parseInt(_0x1524e2['value'], 0xa);
            if (_0x46f1a3)
                _0x46f1a3['textContent'] = _0x5ba78e + '%';
            _0x46985a(_0x1524e2);
            _0x430ade['setVolume'](_0x5ba78e / 0x64);
            _0x430ade['setMuted'](_0x5ba78e === 0x0);
        });
    }
    if (_0x24579b && _0x522768) {
        _0x24579b['addEventListener']('click', _0x423e88 => {
            _0x423e88['stopPropagation']();
            _0x522768['style']['display'] = _0x522768['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x42795a && _0x522768) {
        _0x42795a['addEventListener']('click', () => {
            _0x522768['style']['display'] = 'none';
        });
    }
    const _0x5635db = document['getElementById']('mayor-confirm-yes');
    const _0x2fba51 = document['getElementById']('mayor-confirm-no');
    const _0x570680 = document['getElementById']('mayor-confirm-dialog');
    if (_0x5635db && _0x570680) {
        _0x5635db['addEventListener']('click', () => {
            if (_0x523d40 && _0x523d40['readyState'] === WebSocket['OPEN']) {
                _0x523d40['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x570680['style']['display'] = 'none';
        });
    }
    if (_0x2fba51 && _0x570680) {
        _0x2fba51['addEventListener']('click', () => {
            _0x570680['style']['display'] = 'none';
        });
    }
    const _0x328277 = document['getElementById']('close-ability-btn');
    if (_0x328277) {
        _0x328277['addEventListener']('click', () => {
            const _0x39a758 = document['getElementById']('ability-ui');
            if (_0x39a758)
                _0x39a758['style']['display'] = 'none';
        });
    }
}
let _0x4b64bd = '';
function _0x247630(_0x5c106d) {
    const _0x471a74 = document['getElementById']('vote-tally-panel');
    const _0x13ca47 = document['getElementById']('vote-tally-list');
    if (!_0x471a74 || !_0x13ca47)
        return;
    if (_0x5c106d['state'] !== 'DAY_VOTE') {
        _0x471a74['style']['display'] = 'none';
        _0x4b64bd = '';
        return;
    }
    _0x471a74['style']['display'] = 'block';
    const _0x375c86 = {};
    for (const _0x58bc34 in _0x2a4a07) {
        if (!_0x2a4a07[_0x58bc34]['isDead'])
            _0x375c86[_0x58bc34] = 0x0;
    }
    if (_0x256129 && !_0xea442['isDead'])
        _0x375c86[_0x256129] = 0x0;
    const _0x20a29f = _0x5c106d['votes'] || {};
    for (const _0x2eefda in _0x20a29f) {
        const _0x55e735 = _0x20a29f[_0x2eefda];
        const _0x19965a = _0x5c106d['mayorRevealed'] && _0x5c106d['mayorRevealed'][_0x2eefda] ? 0x2 : 0x1;
        _0x375c86[_0x55e735] = (_0x375c86[_0x55e735] || 0x0) + _0x19965a;
    }
    let _0x451fac = 0x0;
    const _0x4768f9 = _0x5c106d['skips'] || {};
    for (const _0x58528c in _0x4768f9) {
        _0x451fac += Number(_0x4768f9[_0x58528c]) || 0x1;
    }
    const _0x47d0d8 = JSON['stringify'](_0x375c86) + '_' + _0x451fac + '_' + _0xea442['isDead'];
    if (_0x47d0d8 === _0x4b64bd)
        return;
    _0x4b64bd = _0x47d0d8;
    _0x13ca47['innerHTML'] = '';
    for (const _0x5d5c58 in _0x375c86) {
        const _0x4400e8 = parseInt(_0x5d5c58);
        const _0x17a858 = _0x4400e8 === _0x256129 ? _0x4d92e1 : _0x2a4a07[_0x5d5c58] ? _0x2a4a07[_0x5d5c58]['name'] : 'Player\x20' + _0x5d5c58;
        const _0x46120d = document['createElement']('div');
        _0x46120d['className'] = 'vote-tally-entry';
        const _0x4570af = document['createElement']('span');
        _0x4570af['textContent'] = _0x17a858;
        const _0x55865b = document['createElement']('span');
        _0x55865b['className'] = 'vote-count';
        _0x55865b['textContent'] = _0x375c86[_0x5d5c58] + '\x20vote' + (_0x375c86[_0x5d5c58] === 0x1 ? '' : 's');
        _0x46120d['appendChild'](_0x4570af);
        _0x46120d['appendChild'](_0x55865b);
        if (_0x4400e8 !== _0x256129 && !_0xea442['isDead']) {
            _0x46120d['style']['cursor'] = 'pointer';
            _0x46120d['title'] = 'Vote\x20for\x20' + _0x17a858;
            _0x46120d['addEventListener']('click', _0x3da8e5 => {
                _0x3da8e5['stopPropagation']();
                if (_0x523d40 && _0x523d40['readyState'] === WebSocket['OPEN']) {
                    _0x523d40['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x17a858
                    }));
                }
            });
        }
        _0x13ca47['appendChild'](_0x46120d);
    }
    const _0x51b3dd = document['createElement']('div');
    _0x51b3dd['className'] = 'vote-tally-skip';
    _0x51b3dd['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x451fac + '</span>';
    if (!_0xea442['isDead']) {
        _0x51b3dd['style']['cursor'] = 'pointer';
        _0x51b3dd['title'] = 'Click\x20to\x20skip\x20vote';
        _0x51b3dd['addEventListener']('click', _0x4aeaa1 => {
            _0x4aeaa1['stopPropagation']();
            if (_0x523d40 && _0x523d40['readyState'] === WebSocket['OPEN']) {
                _0x523d40['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x13ca47['appendChild'](_0x51b3dd);
}
let _0x23db97 = null;
let _0x16dae0 = null;
let _0x57227b = null;
let _0x248440 = null;
let _0x1bb262 = null;
function _0x4aa260() {
    if (_0x523d40 && _0x523d40['readyState'] === WebSocket['OPEN']) {
        _0x523d40['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x23db97,
            'abilityTarget': _0x16dae0,
            'killTarget': _0x57227b
        }));
    }
}
function _0x2861be() {
    if (_0x523d40 && _0x523d40['readyState'] === WebSocket['OPEN']) {
        _0x523d40['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'blackmailTarget': _0x248440,
            'killTarget': _0x1bb262
        }));
    }
}
function _0x3221d9() {
    const _0x5e7b1e = document['getElementById']('ability-ui-body');
    if (!_0x5e7b1e)
        return;
    _0x5e7b1e['innerHTML'] = '';
    if (_0x3b87ae === 'Celebrity' || _0x3b87ae === 'Mayor') {
        const _0x256f95 = document['createElement']('div');
        _0x256f95['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x256f95['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x5e7b1e['appendChild'](_0x256f95);
        return;
    }
    if (_0x3b87ae === 'Blackmailer') {
        const _0x30ee0c = document['createElement']('div');
        _0x30ee0c['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x30ee0c['innerText'] = 'Blackmail\x20Target\x20(Silences\x20for\x20full\x20day):';
        _0x5e7b1e['appendChild'](_0x30ee0c);
        const _0x2ecf71 = document['createElement']('div');
        _0x2ecf71['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x3a4842 = document['createElement']('button');
        _0x3a4842['className'] = 'layer-btn';
        _0x3a4842['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x3a4842['innerText'] = 'No\x20one';
        if (_0x248440 === null)
            _0x3a4842['classList']['add']('active');
        _0x3a4842['onclick'] = () => {
            _0x248440 = null;
            _0x2861be();
            _0x3221d9();
        };
        _0x2ecf71['appendChild'](_0x3a4842);
        for (const _0x801ac3 in _0x2a4a07) {
            const _0x38b9d3 = _0x2a4a07[_0x801ac3];
            if (_0x38b9d3['isDead'])
                continue;
            const _0x2b020f = document['createElement']('button');
            _0x2b020f['className'] = 'layer-btn';
            _0x2b020f['innerText'] = _0x38b9d3['name'];
            if (_0x248440 === parseInt(_0x801ac3))
                _0x2b020f['classList']['add']('active');
            _0x2b020f['onclick'] = () => {
                _0x248440 = parseInt(_0x801ac3);
                _0x2861be();
                _0x3221d9();
            };
            _0x2ecf71['appendChild'](_0x2b020f);
        }
        if (!_0xea442['isDead']) {
            const _0x3288fe = document['createElement']('button');
            _0x3288fe['className'] = 'layer-btn';
            _0x3288fe['style']['cssText'] = 'grid-column:\x20span\x202;';
            _0x3288fe['innerText'] = _0x4d92e1 + '\x20(Self\x20-\x20Decoy)';
            if (_0x248440 === _0x256129)
                _0x3288fe['classList']['add']('active');
            _0x3288fe['onclick'] = () => {
                _0x248440 = _0x256129;
                _0x2861be();
                _0x3221d9();
            };
            _0x2ecf71['appendChild'](_0x3288fe);
        }
        _0x5e7b1e['appendChild'](_0x2ecf71);
        const _0x414893 = document['createElement']('div');
        _0x414893['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x414893['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x5e7b1e['appendChild'](_0x414893);
        const _0x4f7339 = document['createElement']('div');
        _0x4f7339['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x5b444f = document['createElement']('button');
        _0x5b444f['className'] = 'layer-btn';
        _0x5b444f['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x5b444f['innerText'] = 'No\x20one';
        if (!_0x1bb262 && !_0x474e7c['CURRENT_TARGET'])
            _0x5b444f['classList']['add']('active');
        _0x5b444f['onclick'] = () => {
            _0x1bb262 = null;
            _0x474e7c['CURRENT_TARGET'] = null;
            _0x2861be();
            _0x3221d9();
        };
        _0x4f7339['appendChild'](_0x5b444f);
        for (const _0x578244 in _0x2a4a07) {
            const _0x186e43 = _0x2a4a07[_0x578244];
            if (_0x186e43['isDead'])
                continue;
            const _0x487c34 = document['createElement']('button');
            _0x487c34['className'] = 'layer-btn';
            _0x487c34['innerText'] = _0x186e43['name'];
            if (_0x1bb262 === parseInt(_0x578244) || _0x474e7c['CURRENT_TARGET'] === parseInt(_0x578244))
                _0x487c34['classList']['add']('active');
            _0x487c34['onclick'] = () => {
                _0x1bb262 = parseInt(_0x578244);
                _0x474e7c['CURRENT_TARGET'] = parseInt(_0x578244);
                _0x2861be();
                _0x3221d9();
            };
            _0x4f7339['appendChild'](_0x487c34);
        }
        _0x5e7b1e['appendChild'](_0x4f7339);
        return;
    }
    if (_0x3b87ae === 'Skinwalker') {
        const _0x5bf0be = document['createElement']('div');
        _0x5bf0be['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x5bf0be['innerText'] = 'Transform\x20into:';
        _0x5e7b1e['appendChild'](_0x5bf0be);
        const _0x20b79e = document['createElement']('div');
        _0x20b79e['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x48fb26 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x34d194 = _0x13b279 => {
            if (_0x474e7c['ROLES_IN_GAME'] && Array['isArray'](_0x474e7c['ROLES_IN_GAME'])) {
                return _0x474e7c['ROLES_IN_GAME']['includes'](_0x13b279);
            }
            if (_0x474e7c['ROLE_LIST_RAW'] && _0x474e7c['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x474e7c['ROLE_LIST_RAW']['some'](_0x3fcd74 => _0x3fcd74['name'] === _0x13b279 && !_0x3fcd74['isDead']);
            }
            return ![];
        };
        const _0x1b7b62 = [
            'None',
            ..._0x48fb26['filter'](_0x34d194)
        ];
        _0x1b7b62['forEach'](_0x22cf79 => {
            const _0x1f543d = document['createElement']('button');
            _0x1f543d['className'] = 'layer-btn';
            _0x1f543d['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x1f543d['innerText'] = _0x22cf79;
            const _0x24b2b3 = _0x22cf79 === 'None' && !_0x23db97 || _0x23db97 === _0x22cf79;
            if (_0x24b2b3)
                _0x1f543d['classList']['add']('active');
            const _0x548f9a = _0x22cf79 !== 'None' && _0x474e7c['SKINWALKER_LAST_ROLE'] && _0x474e7c['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x22cf79['toLowerCase']();
            if (_0x548f9a) {
                _0x1f543d['style']['opacity'] = '0.45';
                _0x1f543d['style']['cursor'] = 'not-allowed';
                _0x1f543d['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x1f543d['onclick'] = () => {
                    _0x2987f4('You\x20cannot\x20transform\x20into\x20' + _0x22cf79 + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x1f543d['onclick'] = () => {
                    _0x23db97 = _0x22cf79 === 'None' ? null : _0x22cf79;
                    _0x4aa260();
                    _0x3221d9();
                };
            }
            _0x20b79e['appendChild'](_0x1f543d);
        });
        _0x5e7b1e['appendChild'](_0x20b79e);
        if (_0x34d194('Vigilante')) {
            const _0x2fcf04 = document['createElement']('div');
            _0x2fcf04['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x2fcf04['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x5e7b1e['appendChild'](_0x2fcf04);
        }
        if (_0x23db97 === 'Vigilante') {
            const _0x35b2cd = document['createElement']('div');
            _0x35b2cd['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x35b2cd['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x5e7b1e['appendChild'](_0x35b2cd);
        } else if (_0x23db97 && _0x23db97 !== 'Celebrity') {
            const _0x5359b7 = document['createElement']('div');
            _0x5359b7['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x5359b7['innerText'] = 'Use\x20' + _0x23db97 + '\x20ability\x20on:';
            _0x5e7b1e['appendChild'](_0x5359b7);
            const _0x57a83f = document['createElement']('div');
            _0x57a83f['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x49ab24 = document['createElement']('button');
            _0x49ab24['className'] = 'layer-btn';
            _0x49ab24['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x49ab24['innerText'] = 'No\x20one';
            if (!_0x16dae0)
                _0x49ab24['classList']['add']('active');
            _0x49ab24['onclick'] = () => {
                _0x16dae0 = null;
                _0x4aa260();
                _0x3221d9();
            };
            _0x57a83f['appendChild'](_0x49ab24);
            for (const _0x11b675 in _0x2a4a07) {
                const _0x2a96c2 = _0x2a4a07[_0x11b675];
                if (_0x2a96c2['isDead'])
                    continue;
                const _0xc338e5 = document['createElement']('button');
                _0xc338e5['className'] = 'layer-btn';
                _0xc338e5['innerText'] = _0x2a96c2['name'];
                if (_0x16dae0 === parseInt(_0x11b675))
                    _0xc338e5['classList']['add']('active');
                _0xc338e5['onclick'] = () => {
                    _0x16dae0 = parseInt(_0x11b675);
                    _0x4aa260();
                    _0x3221d9();
                };
                _0x57a83f['appendChild'](_0xc338e5);
            }
            _0x5e7b1e['appendChild'](_0x57a83f);
        }
        const _0x10ff42 = document['createElement']('div');
        _0x10ff42['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x10ff42['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x5e7b1e['appendChild'](_0x10ff42);
        const _0x24edfb = document['createElement']('div');
        _0x24edfb['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x277a2c = document['createElement']('button');
        _0x277a2c['className'] = 'layer-btn';
        _0x277a2c['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x277a2c['innerText'] = 'No\x20one';
        if (!_0x57227b && !_0x474e7c['CURRENT_TARGET'])
            _0x277a2c['classList']['add']('active');
        _0x277a2c['onclick'] = () => {
            _0x57227b = null;
            _0x474e7c['CURRENT_TARGET'] = null;
            _0x4aa260();
            _0x3221d9();
        };
        _0x24edfb['appendChild'](_0x277a2c);
        for (const _0x48bba9 in _0x2a4a07) {
            const _0x1a4d0c = _0x2a4a07[_0x48bba9];
            if (_0x1a4d0c['isDead'])
                continue;
            const _0x9be4b3 = document['createElement']('button');
            _0x9be4b3['className'] = 'layer-btn';
            _0x9be4b3['innerText'] = _0x1a4d0c['name'];
            if (_0x57227b === parseInt(_0x48bba9) || _0x474e7c['CURRENT_TARGET'] === parseInt(_0x48bba9))
                _0x9be4b3['classList']['add']('active');
            _0x9be4b3['onclick'] = () => {
                _0x57227b = parseInt(_0x48bba9);
                _0x474e7c['CURRENT_TARGET'] = parseInt(_0x48bba9);
                _0x4aa260();
                _0x3221d9();
            };
            _0x24edfb['appendChild'](_0x9be4b3);
        }
        _0x5e7b1e['appendChild'](_0x24edfb);
        return;
    }
    let _0x364c5b = '';
    let _0x12a2e0 = ![];
    if (_0x3b87ae === 'Doctor') {
        _0x364c5b = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x12a2e0 = !![];
    } else if (_0x3b87ae === 'Investigator') {
        _0x364c5b = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x3b87ae === 'Tracker') {
        _0x364c5b = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x3b87ae === 'Archer') {
        _0x364c5b = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x3b87ae === 'Escort') {
        _0x364c5b = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x3b87ae === 'Vigilante') {
        _0x364c5b = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x45d019 = document['createElement']('div');
    _0x45d019['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x45d019['innerText'] = _0x364c5b;
    _0x5e7b1e['appendChild'](_0x45d019);
    const _0x4dd027 = document['createElement']('div');
    _0x4dd027['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x5b7388 = document['createElement']('button');
    _0x5b7388['className'] = 'layer-btn';
    _0x5b7388['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x5b7388['innerText'] = 'No\x20one';
    if (_0x474e7c['CURRENT_TARGET'] === null)
        _0x5b7388['classList']['add']('active');
    _0x5b7388['onclick'] = () => {
        _0x474e7c['CURRENT_TARGET'] = null;
        if (_0x523d40 && _0x523d40['readyState'] === WebSocket['OPEN']) {
            _0x523d40['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x3221d9();
    };
    _0x4dd027['appendChild'](_0x5b7388);
    for (const _0x2783c3 in _0x2a4a07) {
        const _0x46dbc7 = _0x2a4a07[_0x2783c3];
        if (_0x46dbc7['isDead'])
            continue;
        const _0x580c3e = document['createElement']('button');
        _0x580c3e['className'] = 'layer-btn';
        _0x580c3e['innerText'] = _0x46dbc7['name'];
        if (_0x474e7c['CURRENT_TARGET'] === parseInt(_0x2783c3))
            _0x580c3e['classList']['add']('active');
        _0x580c3e['onclick'] = () => {
            _0x474e7c['CURRENT_TARGET'] = parseInt(_0x2783c3);
            if (_0x523d40 && _0x523d40['readyState'] === WebSocket['OPEN']) {
                _0x523d40['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x2783c3)
                }));
            }
            _0x3221d9();
        };
        _0x4dd027['appendChild'](_0x580c3e);
    }
    if (_0x12a2e0 && !_0xea442['isDead']) {
        const _0x105a20 = document['createElement']('button');
        _0x105a20['className'] = 'layer-btn';
        _0x105a20['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x105a20['innerText'] = _0x4d92e1 + '\x20(Self)';
        if (_0x474e7c['CURRENT_TARGET'] === _0x256129)
            _0x105a20['classList']['add']('active');
        _0x105a20['onclick'] = () => {
            _0x474e7c['CURRENT_TARGET'] = _0x256129;
            if (_0x523d40 && _0x523d40['readyState'] === WebSocket['OPEN']) {
                _0x523d40['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x256129
                }));
            }
            _0x3221d9();
        };
        _0x4dd027['appendChild'](_0x105a20);
    }
    _0x5e7b1e['appendChild'](_0x4dd027);
}
function _0x4f2b69() {
    if (_0x523d40 && (_0x523d40['readyState'] === WebSocket['OPEN'] || _0x523d40['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x45c77d = new URLSearchParams();
    if (_0xc41daf)
        _0x45c77d['set']('token', _0xc41daf);
    _0x45c77d['set']('ngrok-skip-browser-warning', 'true');
    const _0x39e101 = 'wss://examined-hometown-whole-walking.trycloudflare.com';
    const _0x327087 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x39e101;
    const _0x18b7a5 = _0x327087 + '/?' + _0x45c77d['toString']();
    _0x523d40 = new WebSocket(_0x18b7a5);
    _0x523d40['onopen'] = function () {
        if (!_0x1e89c5 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x12eb0c = window['_FB'] && window['_FB']['_currentUser'];
                const _0x390029 = window['_FB'] && window['_FB']['_userData'];
                const _0x2ec690 = !(_0x12eb0c && _0x390029 && _0x390029['username']);
                const _0x30683b = _0x2ec690 ? 'body01.png' : _0x5d6834;
                const _0x3a595a = _0x2ec690 ? 'eyes4.png' : _0x42196a;
                const _0x4a5458 = !_0x2ec690 && _0x390029 && _0x390029['photoURL'] ? _0x390029['photoURL'] : '';
                const _0x3f5c6a = !_0x2ec690 && _0x12eb0c ? _0x12eb0c['uid'] : '';
                const _0x1fceec = !_0x2ec690 && _0x390029 ? {
                    'townWins': _0x390029['townWins'] || 0x0,
                    'mafiaWins': _0x390029['mafiaWins'] || 0x0,
                    'deaths': _0x390029['deaths'] || 0x0,
                    'townLosses': _0x390029['townLosses'] || 0x0,
                    'mafiaLosses': _0x390029['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x4d92e1,
                    'token': _0xc41daf,
                    'body': _0x30683b,
                    'eyes': _0x3a595a,
                    'isGuest': _0x2ec690,
                    'uid': _0x3f5c6a,
                    'photoURL': _0x4a5458,
                    'accountStats': _0x1fceec
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x523d40 && _0x523d40['readyState'] === WebSocket['OPEN']) {
            _0x523d40['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x523d40['onclose'] = _0x6ced1 => {
        if (_0x6ced1['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x6ced1['code'] === 0xfa2 || _0x6ced1['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x54d6c4 = document['getElementById']('disconnect-overlay');
        if (!_0x54d6c4) {
            _0x54d6c4 = document['createElement']('div');
            _0x54d6c4['id'] = 'disconnect-overlay';
            _0x54d6c4['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x54d6c4['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x54d6c4);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x523d40['onmessage'] = _0x5219ba => {
        const _0x342b30 = JSON['parse'](_0x5219ba['data']);
        if (_0x342b30['type'] === 'map_data') {
            _0x474e7c['MAP']['tileSize'] = _0x342b30['map']['tileSize'];
            _0x474e7c['MAP']['columns'] = _0x342b30['map']['columns'];
            _0x474e7c['MAP']['rows'] = _0x342b30['map']['rows'];
            _0x474e7c['MAP']['layers'] = _0x342b30['map']['layers'];
            if (_0x342b30['map']['doors']) {
                _0x474e7c['MAP']['doors'] = _0x342b30['map']['doors'];
                const _0x46b255 = _0x474e7c['MAP']['layers']['find'](_0x5dfbfc => _0x5dfbfc['name'] === 'floor2');
                if (_0x46b255) {
                    for (const _0x55a89b in _0x474e7c['MAP']['doors']) {
                        _0x46b255['data'][parseInt(_0x55a89b)] = 0x2;
                    }
                }
            }
            if (_0x342b30['entities'])
                _0x474e7c['ENTITIES'] = _0x342b30['entities'];
            _0x2b380f();
            _0x474e7c['SYSTEM']['isReady'] = !![];
            _0x371f38();
            if (!_0x474e7c['SYSTEM']['_gameLoopRunning']) {
                _0x474e7c['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x1d3954);
            }
            return;
        }
        if (_0x342b30['type'] === 'init') {
            _0x256129 = _0x342b30['id'];
            _0x1e89c5 = ![];
            _0x1567f3();
            if (_0x55dfe8) {
                const _0x27bb45 = document['getElementById']('leaderboard-list');
                const _0x2ea1a4 = document['getElementById']('leaderboard-toggle');
                if (_0x27bb45) {
                    _0x27bb45['style']['display'] = 'none';
                    if (_0x2ea1a4)
                        _0x2ea1a4['style']['transform'] = 'rotate(180deg)';
                }
                const _0x1b3af5 = document['getElementById']('role-list-items');
                const _0x397ad1 = document['getElementById']('role-list-toggle');
                if (_0x1b3af5) {
                    _0x1b3af5['style']['display'] = 'none';
                    if (_0x397ad1)
                        _0x397ad1['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x30628a = _0x342b30['isOwner'] || ![];
            _0x4d92e1 = _0x342b30['name'] || _0x4d92e1;
            _0x474e7c['MAP']['tileSize'] = _0x342b30['map']['tileSize'];
            _0x474e7c['MAP']['columns'] = _0x342b30['map']['columns'];
            _0x474e7c['MAP']['rows'] = _0x342b30['map']['rows'];
            _0x474e7c['MAP']['layers'] = _0x342b30['map']['layers'];
            if (_0x342b30['map']['doors']) {
                _0x474e7c['MAP']['doors'] = _0x342b30['map']['doors'];
                const _0x58bd46 = _0x474e7c['MAP']['layers']['find'](_0x59f63d => _0x59f63d['name'] === 'floor2');
                if (_0x58bd46) {
                    for (const _0x337b30 in _0x474e7c['MAP']['doors']) {
                        _0x58bd46['data'][parseInt(_0x337b30)] = 0x2;
                    }
                }
            }
            if (_0x342b30['entities'])
                _0x474e7c['ENTITIES'] = _0x342b30['entities'];
            if (_0x342b30['bloodSplatters'])
                _0xac7644 = _0x342b30['bloodSplatters'];
            if (_0x342b30['bloodDrops'])
                _0x1e8dbc = _0x342b30['bloodDrops'];
            if (_0x342b30['roleList'] && _0x342b30['roleList']['length'] > 0x0) {
                _0x474e7c['ROLE_LIST_RAW'] = _0x342b30['roleList'];
                _0x403326(_0x342b30['roleList'], _0x342b30['roleListMode']);
            }
            _0x2b380f();
            _0xea442['x'] = _0x474e7c['MAP']['columns'] * _0x474e7c['MAP']['tileSize'] / 0x2;
            _0xea442['y'] = _0x474e7c['MAP']['rows'] * _0x474e7c['MAP']['tileSize'] / 0x2;
            _0x474e7c['CAMERA']['x'] = _0xea442['x'] + _0xea442['width'] / 0x2 - _0x474e7c['CAMERA']['width'] / 0x2;
            _0x474e7c['CAMERA']['y'] = _0xea442['y'] + _0xea442['height'] / 0x2 - _0x474e7c['CAMERA']['height'] / 0x2;
            if (_0x30628a) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x4e3d56();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x1c4ab3 = document['getElementById']('role-index-btn-wrap');
            if (_0x1c4ab3)
                _0x1c4ab3['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x474e7c['SYSTEM']['lastTime'] = performance['now']();
            _0x474e7c['SYSTEM']['isReady'] = !![];
            _0x2bd18c();
            if (!_0x474e7c['SYSTEM']['_gameLoopRunning']) {
                _0x474e7c['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x1d3954);
            }
            return;
        } else if (_0x342b30['type'] === 'state') {
            const _0x4b1d91 = {};
            for (const _0x4ace1d in _0x342b30['players']) {
                if (parseInt(_0x4ace1d) === _0x256129)
                    continue;
                const _0x1fce6f = _0x342b30['players'][_0x4ace1d];
                const _0x94bf7f = _0x2a4a07[_0x4ace1d];
                if (_0x94bf7f) {
                    const _0x271ccb = _0x1fce6f['x'] - _0x94bf7f['renderX'];
                    const _0x1aa42a = _0x1fce6f['y'] - _0x94bf7f['renderY'];
                    const _0x4ea819 = _0x271ccb * _0x271ccb + _0x1aa42a * _0x1aa42a > 0x78 * 0x78;
                    Object['assign'](_0x94bf7f, _0x1fce6f);
                    if (_0x4ea819) {
                        _0x94bf7f['renderX'] = _0x1fce6f['x'];
                        _0x94bf7f['renderY'] = _0x1fce6f['y'];
                    }
                    _0x4b1d91[_0x4ace1d] = _0x94bf7f;
                } else {
                    _0x4b1d91[_0x4ace1d] = {
                        ..._0x1fce6f,
                        'renderX': _0x1fce6f['x'],
                        'renderY': _0x1fce6f['y'],
                        'renderAngle': _0x1fce6f['angle'] || 0x0
                    };
                }
            }
            _0x2a4a07 = _0x4b1d91;
            _0x29abf7();
            if (_0x342b30['players'][_0x256129]) {
                const _0x5347b2 = _0x342b30['players'][_0x256129];
                _0xea442['chats'] = _0x5347b2['chats'] || [];
                _0xea442['isDead'] = _0x5347b2['isDead'];
                _0xea442['hasArrow'] = _0x5347b2['hasArrow'] || ![];
                if (_0x5347b2['name'])
                    _0x4d92e1 = _0x5347b2['name'];
                _0x2bd18c();
                const _0xa25f0d = Math['hypot'](_0x5347b2['x'] - _0xea442['x'], _0x5347b2['y'] - _0xea442['y']);
                if (_0xa25f0d > 0xfa) {
                    _0xea442['x'] = _0x5347b2['x'];
                    _0xea442['y'] = _0x5347b2['y'];
                } else if (_0xa25f0d > 0x50) {
                    _0xea442['x'] += (_0x5347b2['x'] - _0xea442['x']) * 0.06;
                    _0xea442['y'] += (_0x5347b2['y'] - _0xea442['y']) * 0.06;
                }
            }
            if (_0x342b30['entities'])
                _0x474e7c['ENTITIES'] = _0x342b30['entities'];
            if (_0x342b30['game']) {
                _0x474e7c['GAME_STATE'] = _0x342b30['game']['state'];
                _0x474e7c['NIGHT_ABILITY_OPEN'] = _0x342b30['game']['nightAbilityOpen'];
                if (_0x342b30['game']['bloodSplatters'])
                    _0xac7644 = _0x342b30['game']['bloodSplatters'];
                if (_0x342b30['game']['bloodDrops'])
                    _0x1e8dbc = _0x342b30['game']['bloodDrops'];
                if (_0x342b30['game']['blackmailed']) {
                    _0x29f081 = new Set(_0x342b30['game']['blackmailed']);
                } else {
                    _0x29f081['clear']();
                }
                if (_0x342b30['game']['mayorRevealed']) {
                    for (const _0x275938 in _0x342b30['game']['mayorRevealed']) {
                        _0x2d7c59['add'](parseInt(_0x275938));
                    }
                }
                if (_0x474e7c['LAST_STATE'] !== _0x474e7c['GAME_STATE']) {
                    if (_0x474e7c['GAME_STATE'] !== 'NIGHT') {
                        _0x474e7c['CURRENT_TARGET'] = null;
                        _0x23db97 = null;
                        _0x16dae0 = null;
                        _0x57227b = null;
                        _0x248440 = null;
                        _0x1bb262 = null;
                        const _0x158b51 = document['getElementById']('ability-ui');
                        if (_0x158b51)
                            _0x158b51['style']['display'] = 'none';
                    }
                    if (_0x474e7c['GAME_STATE'] === 'NIGHT') {
                        _0xea442['chats'] = [];
                        for (const _0x595e2d in _0x2a4a07) {
                            _0x2a4a07[_0x595e2d]['chats'] = [];
                        }
                    }
                    _0x474e7c['LAST_STATE'] = _0x474e7c['GAME_STATE'];
                    _0x1b1b86();
                    _0x430ade['onStateChange'](_0x474e7c['GAME_STATE'], _0x342b30['game']['nightAbilityOpen']);
                }
                const _0x682fcc = document['getElementById']('phase-ui');
                if (_0x682fcc) {
                    if (_0x342b30['game']['state'] === 'LOBBY') {
                        _0x682fcc['style']['display'] = 'none';
                    } else {
                        _0x682fcc['style']['display'] = 'block';
                    }
                    let _0x1f27d4 = _0x342b30['game']['state']['replace']('_', '\x20');
                    if (_0x342b30['game']['state'] === 'DAY_DISCUSS') {
                        _0x1f27d4 = 'DAY\x20' + (_0x342b30['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x342b30['game']['timer'] + 's';
                    } else if (_0x342b30['game']['state'] === 'DAY_VOTE') {
                        _0x1f27d4 = 'DAY\x20' + (_0x342b30['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x342b30['game']['timer'] + 's';
                    } else if (_0x342b30['game']['state'] === 'NIGHT') {
                        const _0x5ec1d1 = _0x342b30['game']['dayCount'] || 0x1;
                        if (_0x342b30['game']['nightAbilityOpen']) {
                            _0x1f27d4 = 'NIGHT\x20' + _0x5ec1d1 + '\x20ABILITY\x20PHASE';
                            const _0xc8c6fe = _0x342b30['game']['abilityTimer'] !== undefined ? _0x342b30['game']['abilityTimer'] : _0x342b30['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0xc8c6fe + 's';
                        } else {
                            _0x1f27d4 = 'NIGHT\x20' + _0x5ec1d1;
                            document['getElementById']('phase-timer')['innerText'] = _0x342b30['game']['timer'] + 's';
                        }
                    }
                    if (_0x342b30['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x1f27d4;
                    }
                }
                if (_0x342b30['game']['state'] === 'NIGHT') {
                    const _0x3bd983 = document['getElementById']('ability-timer-label');
                    if (_0x3bd983) {
                        const _0xa385c4 = _0x342b30['game']['abilityTimer'] !== undefined ? _0x342b30['game']['abilityTimer'] : _0x342b30['game']['timer'];
                        _0x3bd983['innerText'] = _0x342b30['game']['nightAbilityOpen'] ? _0xa385c4 + 's' : '';
                    }
                    if (_0x342b30['game']['nightAbilityOpen'] && !_0x133c4b && !_0xea442['isDead']) {
                        _0x133c4b = !![];
                        _0x3221d9();
                        const _0xb31bac = document['getElementById']('ability-ui');
                        if (_0xb31bac)
                            _0xb31bac['style']['display'] = 'block';
                    }
                    if (!_0x342b30['game']['nightAbilityOpen']) {
                        const _0x21221a = document['getElementById']('ability-ui');
                        if (_0x21221a && _0x21221a['style']['display'] === 'block') {
                            _0x21221a['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x133c4b = ![];
                }
                if (_0x342b30['game']['rolesInGame']) {
                    _0x474e7c['ROLES_IN_GAME'] = _0x342b30['game']['rolesInGame'];
                }
                if (_0x342b30['game']['skinwalkerLastRole'] !== undefined) {
                    _0x474e7c['SKINWALKER_LAST_ROLE'] = _0x342b30['game']['skinwalkerLastRole'];
                }
                if (_0x342b30['game']['state'] === 'NIGHT') {
                    const _0x3bdec2 = document['getElementById']('will-ui');
                    if (_0x3bdec2 && _0x3bdec2['style']['display'] === 'flex') {
                        _0x3bdec2['style']['display'] = 'none';
                        const _0x3501e2 = document['getElementById']('will-input');
                        if (_0x3501e2)
                            _0x3501e2['blur']();
                    }
                }
                _0x247630(_0x342b30['game']);
                if (_0x342b30['game']['roleListMode'] !== undefined) {
                    _0x474e7c['ROLE_LIST_RAW'] = _0x342b30['game']['roleList'] || [];
                    _0x403326(_0x342b30['game']['roleList'], _0x342b30['game']['roleListMode']);
                }
            }
        } else if (_0x342b30['type'] === 'teleport') {
            _0xea442['x'] = _0x342b30['x'];
            _0xea442['y'] = _0x342b30['y'];
            _0xea442['vx'] = 0x0;
            _0xea442['vy'] = 0x0;
            _0x474e7c['CAMERA']['x'] = null;
            if (_0x342b30['teleportId'] !== undefined)
                _0x75f82c = _0x342b30['teleportId'];
        } else if (_0x342b30['type'] === 'bulk_teleport') {
            for (const _0x15fa36 in _0x342b30['positions']) {
                const _0x288569 = _0x342b30['positions'][_0x15fa36];
                if (parseInt(_0x15fa36) === _0x256129) {
                    _0xea442['x'] = _0x288569['x'];
                    _0xea442['y'] = _0x288569['y'];
                    _0xea442['vx'] = 0x0;
                    _0xea442['vy'] = 0x0;
                    _0x474e7c['CAMERA']['x'] = null;
                    continue;
                }
                const _0x504462 = _0x2a4a07[_0x15fa36];
                if (_0x504462) {
                    _0x504462['x'] = _0x288569['x'];
                    _0x504462['y'] = _0x288569['y'];
                    _0x504462['renderX'] = _0x288569['x'];
                    _0x504462['renderY'] = _0x288569['y'];
                    _0x504462['vx'] = 0x0;
                    _0x504462['vy'] = 0x0;
                }
            }
        } else if (_0x342b30['type'] === 'player_left') {
            delete _0x2a4a07[_0x342b30['id']];
            _0x2d7c59['delete'](parseInt(_0x342b30['id']));
        } else if (_0x342b30['type'] === 'map_update') {
            const _0x35f616 = _0x474e7c['MAP']['layers']['find'](_0x3356f5 => _0x3356f5['name'] === _0x342b30['layer']);
            if (_0x35f616) {
                _0x35f616['data'][_0x342b30['row'] * _0x474e7c['MAP']['columns'] + _0x342b30['col']] = _0x342b30['gid'];
                const _0x77c6d2 = _0x342b30['row'] * _0x474e7c['MAP']['columns'] + _0x342b30['col'];
                if (_0x474e7c['MAP']['doors'] && _0x474e7c['MAP']['doors'][_0x77c6d2]) {
                    const _0x37df12 = _0x474e7c['MAP']['layers']['find'](_0x1e7411 => _0x1e7411['name'] === 'floor2');
                    if (_0x37df12)
                        _0x37df12['data'][_0x77c6d2] = 0x2;
                }
                const _0x49a22a = Math['floor'](_0x342b30['col'] * _0x474e7c['MAP']['tileSize'] / _0x474e7c['MAP']['chunkSize']);
                const _0x356f76 = Math['floor'](_0x342b30['row'] * _0x474e7c['MAP']['tileSize'] / _0x474e7c['MAP']['chunkSize']);
                _0x2e2458(_0x49a22a, _0x356f76);
                _0x5d7b88 = null;
                _0x1d6627 = null;
            }
        } else if (_0x342b30['type'] === 'role_assign') {
            _0x3b87ae = _0x342b30['role'];
            _0xea442['isDead'] = _0x3b87ae === 'Spectator';
            _0x2d7c59['clear']();
            _0x474e7c['CURRENT_TARGET'] = null;
            _0x23db97 = null;
            _0x16dae0 = null;
            _0x57227b = null;
            _0x248440 = null;
            _0x1bb262 = null;
            _0x133c4b = ![];
            const _0x3be53d = document['getElementById']('ability-ui');
            if (_0x3be53d)
                _0x3be53d['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x3b87ae;
            _0x1b1b86();
            _0x2987f4(_0x3b87ae === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x3b87ae, !![]);
            let _0x5b9610 = '';
            if (_0x3b87ae === 'Investigator')
                _0x5b9610 = 'Investigate\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x3b87ae === 'Tracker')
                _0x5b9610 = 'Track\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x3b87ae === 'Doctor')
                _0x5b9610 = 'Heal\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x3b87ae === 'Archer')
                _0x5b9610 = 'Guard\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x3b87ae === 'Escort')
                _0x5b9610 = 'Roleblock\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x3b87ae === 'Vigilante')
                _0x5b9610 = 'Shoot\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x3b87ae === 'Skinwalker')
                _0x5b9610 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x3b87ae === 'Blackmailer')
                _0x5b9610 = 'Pick\x20a\x20player\x20to\x20blackmail\x20and\x20a\x20player\x20to\x20kill\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x3b87ae === 'Celebrity')
                _0x5b9610 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x3b87ae === 'Mayor')
                _0x5b9610 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x2987f4(_0x5b9610, !![]);
        } else if (_0x342b30['type'] === 'mayor_reveal') {
            _0x2d7c59['add'](parseInt(_0x342b30['playerId']));
            _0x2bd18c();
            _0x1b1b86();
        } else if (_0x342b30['type'] === 'rolelist_update') {
            _0x474e7c['ROLE_LIST_RAW'] = _0x342b30['list'] || [];
            _0x403326(_0x342b30['list'], _0x342b30['mode']);
        } else if (_0x342b30['type'] === 'sound_event') {
            _0x430ade['onSoundEvent'](_0x342b30['track']);
        } else if (_0x342b30['type'] === 'blood_splatter') {
            _0xac7644['push']({
                'x': _0x342b30['x'],
                'y': _0x342b30['y']
            });
        } else if (_0x342b30['type'] === 'blood_drop') {
            _0x1e8dbc['push']({
                'x': _0x342b30['x'],
                'y': _0x342b30['y']
            });
        } else if (_0x342b30['type'] === 'day_fade') {
            _0x17f910 = 0x1;
            _0x5c1620 = performance['now']() + 0x3e8;
        } else if (_0x342b30['type'] === 'player_stats_updated') {
            const _0x527f67 = parseInt(_0x342b30['id']);
            if (_0x527f67 === _0x256129 && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x342b30['accountStats']);
            }
            if (_0x2a4a07[_0x342b30['id']]) {
                _0x2a4a07[_0x342b30['id']]['accountStats'] = _0x342b30['accountStats'];
            }
            _0x29abf7();
        } else if (_0x342b30['type'] === 'stats_update') {
            const _0x305810 = window['_FB'];
            if (_0x305810 && _0x305810['_currentUser'] && _0x305810['_userData']) {
                const _0x1d7802 = _0x305810['_currentUser']['uid'];
                const _0x2afed7 = _0x342b30['patch'] || {};
                const _0x4bee36 = _0x305810['_userData'];
                const _0x15cfab = {
                    'townWins': (_0x4bee36['townWins'] || 0x0) + (_0x2afed7['townWins'] || 0x0),
                    'mafiaWins': (_0x4bee36['mafiaWins'] || 0x0) + (_0x2afed7['mafiaWins'] || 0x0),
                    'deaths': (_0x4bee36['deaths'] || 0x0) + (_0x2afed7['deaths'] || 0x0),
                    'townLosses': (_0x4bee36['townLosses'] || 0x0) + (_0x2afed7['townLosses'] || 0x0),
                    'mafiaLosses': (_0x4bee36['mafiaLosses'] || 0x0) + (_0x2afed7['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x305810['_userData'], _0x15cfab);
                const _0x1e6848 = _0x305810['doc'](_0x305810['db'], 'users', _0x1d7802);
                _0x305810['updateDoc'](_0x1e6848, _0x15cfab)['catch'](() => {
                });
                if (_0x523d40 && _0x523d40['readyState'] === WebSocket['OPEN']) {
                    _0x523d40['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x15cfab
                    }));
                }
                _0x29abf7();
            }
        } else if (_0x342b30['type'] === 'game_over') {
            _0x430ade['onStateChange']('LOBBY', ![]);
            _0x403326([], 'off');
            _0x3b87ae = null;
            _0xea442['isDead'] = ![];
            _0xea442['hasArrow'] = ![];
            _0xac7644 = [];
            _0x1e8dbc = [];
            _0x29f081['clear']();
            _0x2d7c59['clear']();
            _0x474e7c['CURRENT_TARGET'] = null;
            _0x23db97 = null;
            _0x16dae0 = null;
            _0x57227b = null;
            _0x248440 = null;
            _0x1bb262 = null;
            _0x133c4b = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x1b1b86();
            _0x2987f4('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x342b30['type'] === 'chat_log') {
            _0x2987f4(_0x342b30['text'], ![], !!_0x342b30['isHost'], _0x342b30['sender']);
        } else if (_0x342b30['type'] === 'sys_chat') {
            _0x2987f4(_0x342b30['text'], !![]);
        }
    };
}
function _0x2987f4(_0x1224a7, _0x158a35 = ![], _0x4db5e0 = ![], _0x2aabb2 = null) {
    const _0x415327 = document['getElementById']('chat-log-messages');
    const _0x3f9fba = document['getElementById']('chat-log-ui');
    const _0x435571 = _0x3f9fba ? _0x3f9fba['scrollHeight'] - _0x3f9fba['scrollTop'] - _0x3f9fba['clientHeight'] < 0x1e : !![];
    const _0x5171bd = document['createElement']('div');
    _0x5171bd['className'] = 'chat-log-line' + (_0x158a35 ? '\x20sys-msg' : '');
    if (_0x2aabb2) {
        const _0x1c2166 = document['createElement']('span');
        _0x1c2166['className'] = _0x4db5e0 ? 'chat-host-name' : 'chat-sender-name';
        _0x1c2166['textContent'] = _0x2aabb2 + ':\x20';
        const _0x14de15 = document['createElement']('span');
        _0x14de15['className'] = 'chat-msg-text';
        _0x14de15['textContent'] = _0x1224a7;
        _0x5171bd['appendChild'](_0x1c2166);
        _0x5171bd['appendChild'](_0x14de15);
    } else {
        _0x5171bd['innerText'] = _0x1224a7;
    }
    if (_0x415327)
        _0x415327['appendChild'](_0x5171bd);
    if (_0x3f9fba && _0x435571) {
        _0x3f9fba['scrollTop'] = _0x3f9fba['scrollHeight'];
    }
    if (_0x415327 && _0x415327['childElementCount'] > 0xc8) {
        _0x415327['removeChild'](_0x415327['firstChild']);
    }
}
function _0x2ca005(_0x507ee7, _0xd671b5, _0x48cc5c) {
    const _0x5c5c39 = document['createElement']('canvas');
    _0x5c5c39['width'] = _0x48cc5c;
    _0x5c5c39['height'] = _0x48cc5c;
    const _0x4ba11e = _0x5c5c39['getContext']('2d');
    _0x4ba11e['imageSmoothingEnabled'] = ![];
    const _0x5363f9 = 'assets/' + (_0x507ee7 || 'body01.png');
    const _0x14c773 = _0x34d2d5(_0x5363f9);
    if (_0x14c773['complete'] && _0x14c773['naturalWidth'] > 0x0)
        _0x4ba11e['drawImage'](_0x14c773, 0x0, 0x0, _0x48cc5c, _0x48cc5c);
    if (_0xd671b5) {
        const _0xab66af = 'assets/' + _0xd671b5;
        const _0x2d26c7 = _0x34d2d5(_0xab66af);
        if (_0x2d26c7['complete'] && _0x2d26c7['naturalWidth'] > 0x0)
            _0x4ba11e['drawImage'](_0x2d26c7, 0x0, 0x0, _0x48cc5c, _0x48cc5c);
    }
    return _0x5c5c39['toDataURL']();
}
let _0x5209a1 = '';
function _0x29abf7() {
    const _0x4655bf = document['getElementById']('chat-profile-panel');
    if (!_0x4655bf)
        return;
    const _0x553e04 = [];
    if (_0x256129 !== null) {
        const _0x5c9585 = _0x5d6834 || 'body01.png';
        const _0x1972d0 = _0x42196a || 'eyes4.png';
        const _0x3f4a38 = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x553e04['push']({
            'id': _0x256129,
            'name': _0x4d92e1,
            'body': _0x5c9585,
            'eyes': _0x1972d0,
            'stats': _0x3f4a38
        });
    }
    for (const _0x4e7b93 in _0x2a4a07) {
        const _0x3deec5 = _0x2a4a07[_0x4e7b93];
        const _0x5d5ebb = _0x3deec5['accountStats'] || null;
        _0x553e04['push']({
            'id': parseInt(_0x4e7b93),
            'name': _0x3deec5['name'],
            'body': _0x3deec5['body'] || 'body01.png',
            'eyes': _0x3deec5['eyes'] || 'eyes4.png',
            'stats': _0x5d5ebb
        });
    }
    const _0x490063 = _0x553e04['map'](_0x2a749f => _0x2a749f['id'] + '_' + _0x2a749f['name'] + '_' + _0x2a749f['body'] + '_' + _0x2a749f['eyes'] + '_' + JSON['stringify'](_0x2a749f['stats']))['join']('|');
    if (_0x490063 === _0x5209a1)
        return;
    _0x5209a1 = _0x490063;
    _0x4655bf['innerHTML'] = '';
    let _0x1b1de9 = ![];
    for (const _0x26648b of _0x553e04) {
        _0x1b1de9 = !![];
        const _0x5c882c = _0x2ca005(_0x26648b['body'], _0x26648b['eyes'], 0x20);
        const _0x12cd64 = document['createElement']('div');
        _0x12cd64['className'] = 'chat-pfp-entry';
        const _0x2970dd = document['createElement']('img');
        _0x2970dd['src'] = _0x5c882c;
        _0x2970dd['alt'] = _0x26648b['name'];
        _0x12cd64['appendChild'](_0x2970dd);
        const _0x35d311 = document['createElement']('div');
        _0x35d311['className'] = 'chat-pfp-tooltip';
        let _0x1a466a = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x26648b['name'] + '</div>';
        const _0x101bf4 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x3e28bb = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x4538e0 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x3809b2 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x32663c = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x3b51f0 = (_0x39e22e, _0x5bf536, _0x5b8e5e, _0xc42df8) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x39e22e + '<span\x20style=\x22flex:1;color:' + _0xc42df8 + ';\x22>' + _0x5bf536 + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x5b8e5e + '</span></div>';
        if (_0x26648b['stats']) {
            _0x1a466a += _0x3b51f0(_0x101bf4, 'Town\x20Wins', _0x26648b['stats']['townWins'] || 0x0, '#55ee77');
            _0x1a466a += _0x3b51f0(_0x3e28bb, 'Mafia\x20Wins', _0x26648b['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x1a466a += _0x3b51f0(_0x4538e0, 'Deaths', _0x26648b['stats']['deaths'] || 0x0, '#aaa');
            _0x1a466a += _0x3b51f0(_0x3809b2, 'Town\x20Losses', _0x26648b['stats']['townLosses'] || 0x0, '#6688aa');
            _0x1a466a += _0x3b51f0(_0x32663c, 'Mafia\x20Losses', _0x26648b['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x1a466a += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x35d311['innerHTML'] = _0x1a466a;
        _0x12cd64['appendChild'](_0x35d311);
        _0x12cd64['addEventListener']('mouseenter', () => {
            const _0xd63e12 = _0x12cd64['getBoundingClientRect']();
            _0x35d311['style']['left'] = _0xd63e12['right'] + 0x6 + 'px';
            _0x35d311['style']['top'] = _0xd63e12['top'] + _0xd63e12['height'] / 0x2 + 'px';
            _0x35d311['style']['transform'] = 'translateY(-50%)';
        });
        _0x4655bf['appendChild'](_0x12cd64);
    }
    const _0x4f2f9 = document['getElementById']('chat-log-wrap');
    if (_0x4f2f9) {
        if (_0x1b1de9) {
            _0x4f2f9['classList']['add']('has-profiles');
            _0x4655bf['style']['display'] = 'flex';
        } else {
            _0x4f2f9['classList']['remove']('has-profiles');
            _0x4655bf['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x29abf7;
let _0x253975 = -0x1, _0x5db161 = -0x1, _0x5bd274 = -0x1, _0x13ad03 = 0x0;
function _0x5573b0() {
    if (!_0x256129 || !_0x523d40 || _0x523d40['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x24319d = performance['now']();
    const _0x4c0c91 = _0x24319d - _0x13ad03;
    const _0x664cc1 = Math['abs'](_0xea442['x'] - _0x253975) > 0.05 || Math['abs'](_0xea442['y'] - _0x5db161) > 0.05 || Math['abs'](_0xea442['angle'] - _0x5bd274) > 0.02;
    if (!_0x664cc1 && _0x4c0c91 < 0xc8)
        return;
    if (_0x4c0c91 < 0x19)
        return;
    _0x13ad03 = _0x24319d;
    _0x253975 = _0xea442['x'];
    _0x5db161 = _0xea442['y'];
    _0x5bd274 = _0xea442['angle'];
    if (!_0x256129 || !_0x523d40 || _0x523d40['readyState'] !== WebSocket['OPEN'])
        return;
    _0x523d40['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0xea442['x'],
        'y': _0xea442['y'],
        'vx': _0xea442['vx'],
        'vy': _0xea442['vy'],
        'angle': _0xea442['angle'],
        'scale': _0xea442['scale'],
        'teleportId': _0x75f82c,
        'clientTimestamp': Date['now']()
    }));
}
function _0x1c18e3() {
    if (_0xea442['isDead'])
        return;
    const _0x5eb883 = _0x474e7c['MAP']['layers']['find'](_0x5c87fb => _0x5c87fb['name'] === 'walls');
    if (!_0x5eb883)
        return;
    const _0x2a02eb = _0xea442['scale'];
    const _0x40b68b = _0xea442['width'] * _0x2a02eb / 0x2;
    for (let _0x255db0 = 0x0; _0x255db0 < 0x3; _0x255db0++) {
        let _0x3cfb3e = _0xea442['x'] + _0xea442['width'] / 0x2;
        let _0x27cf8a = _0xea442['y'] + _0xea442['height'] / 0x2;
        const _0x171646 = Math['floor']((_0x3cfb3e - _0x40b68b) / _0x474e7c['MAP']['tileSize']);
        const _0x27689e = Math['floor']((_0x3cfb3e + _0x40b68b) / _0x474e7c['MAP']['tileSize']);
        const _0x2a2286 = Math['floor']((_0x27cf8a - _0x40b68b) / _0x474e7c['MAP']['tileSize']);
        const _0x326208 = Math['floor']((_0x27cf8a + _0x40b68b) / _0x474e7c['MAP']['tileSize']);
        for (let _0x1bc042 = _0x2a2286; _0x1bc042 <= _0x326208; _0x1bc042++) {
            for (let _0x2edb30 = _0x171646; _0x2edb30 <= _0x27689e; _0x2edb30++) {
                if (_0x2edb30 < 0x0 || _0x2edb30 >= _0x474e7c['MAP']['columns'] || _0x1bc042 < 0x0 || _0x1bc042 >= _0x474e7c['MAP']['rows'])
                    continue;
                if (_0x5eb883['data'][_0x1bc042 * _0x474e7c['MAP']['columns'] + _0x2edb30] === 0x0)
                    continue;
                const _0x1f3f4c = _0x2edb30 * _0x474e7c['MAP']['tileSize'];
                const _0x37b0c7 = _0x1bc042 * _0x474e7c['MAP']['tileSize'];
                const _0x446f6b = _0x3cfb3e < _0x1f3f4c ? _0x1f3f4c : _0x3cfb3e > _0x1f3f4c + _0x474e7c['MAP']['tileSize'] ? _0x1f3f4c + _0x474e7c['MAP']['tileSize'] : _0x3cfb3e;
                const _0x243d31 = _0x27cf8a < _0x37b0c7 ? _0x37b0c7 : _0x27cf8a > _0x37b0c7 + _0x474e7c['MAP']['tileSize'] ? _0x37b0c7 + _0x474e7c['MAP']['tileSize'] : _0x27cf8a;
                const _0x5a3a87 = _0x3cfb3e - _0x446f6b;
                const _0x3cac5f = _0x27cf8a - _0x243d31;
                const _0x4f08cc = Math['sqrt'](_0x5a3a87 * _0x5a3a87 + _0x3cac5f * _0x3cac5f);
                if (_0x4f08cc < _0x40b68b) {
                    if (_0x4f08cc === 0x0) {
                        const _0x54ad5f = _0x3cfb3e - _0x1f3f4c;
                        const _0x11103b = _0x1f3f4c + _0x474e7c['MAP']['tileSize'] - _0x3cfb3e;
                        const _0x2c7b07 = _0x27cf8a - _0x37b0c7;
                        const _0x2541a2 = _0x37b0c7 + _0x474e7c['MAP']['tileSize'] - _0x27cf8a;
                        const _0x4971dc = Math['min'](_0x54ad5f, _0x11103b, _0x2c7b07, _0x2541a2);
                        if (_0x4971dc === _0x54ad5f)
                            _0x3cfb3e = _0x1f3f4c - _0x40b68b;
                        else if (_0x4971dc === _0x11103b)
                            _0x3cfb3e = _0x1f3f4c + _0x474e7c['MAP']['tileSize'] + _0x40b68b;
                        else if (_0x4971dc === _0x2c7b07)
                            _0x27cf8a = _0x37b0c7 - _0x40b68b;
                        else
                            _0x27cf8a = _0x37b0c7 + _0x474e7c['MAP']['tileSize'] + _0x40b68b;
                    } else {
                        const _0x1dc06e = _0x40b68b - _0x4f08cc;
                        _0x3cfb3e += _0x5a3a87 / _0x4f08cc * _0x1dc06e;
                        _0x27cf8a += _0x3cac5f / _0x4f08cc * _0x1dc06e;
                        const _0x3fab12 = _0xea442['vx'] * (_0x5a3a87 / _0x4f08cc) + _0xea442['vy'] * (_0x3cac5f / _0x4f08cc);
                        if (_0x3fab12 < 0x0) {
                            _0xea442['vx'] -= _0x3fab12 * (_0x5a3a87 / _0x4f08cc);
                            _0xea442['vy'] -= _0x3fab12 * (_0x3cac5f / _0x4f08cc);
                        }
                    }
                }
            }
        }
        _0xea442['x'] = _0x3cfb3e - _0xea442['width'] / 0x2;
        _0xea442['y'] = _0x27cf8a - _0xea442['height'] / 0x2;
    }
}
function _0x45d7a4(_0x2505cd) {
    const _0x288937 = _0x474e7c['MAP']['layers']['find'](_0x471c04 => _0x471c04['name'] === 'walls');
    if (!_0x288937)
        return;
    const _0x5d2e7e = _0x2505cd['width'] / 0x2;
    for (let _0x588fcc = 0x0; _0x588fcc < 0x2; _0x588fcc++) {
        let _0x55108a = _0x2505cd['x'] + _0x2505cd['width'] / 0x2;
        let _0x4aa4c9 = _0x2505cd['y'] + _0x2505cd['height'] / 0x2;
        const _0x4a55b9 = Math['floor']((_0x55108a - _0x5d2e7e) / _0x474e7c['MAP']['tileSize']);
        const _0x355dbf = Math['floor']((_0x55108a + _0x5d2e7e) / _0x474e7c['MAP']['tileSize']);
        const _0x43f5d2 = Math['floor']((_0x4aa4c9 - _0x5d2e7e) / _0x474e7c['MAP']['tileSize']);
        const _0x374e91 = Math['floor']((_0x4aa4c9 + _0x5d2e7e) / _0x474e7c['MAP']['tileSize']);
        for (let _0x46de38 = _0x43f5d2; _0x46de38 <= _0x374e91; _0x46de38++) {
            for (let _0x2158ae = _0x4a55b9; _0x2158ae <= _0x355dbf; _0x2158ae++) {
                if (_0x2158ae < 0x0 || _0x2158ae >= _0x474e7c['MAP']['columns'] || _0x46de38 < 0x0 || _0x46de38 >= _0x474e7c['MAP']['rows'])
                    continue;
                if (_0x288937['data'][_0x46de38 * _0x474e7c['MAP']['columns'] + _0x2158ae] === 0x0)
                    continue;
                const _0x2ab7aa = _0x2158ae * _0x474e7c['MAP']['tileSize'];
                const _0x588f81 = _0x46de38 * _0x474e7c['MAP']['tileSize'];
                const _0x555ab8 = _0x55108a < _0x2ab7aa ? _0x2ab7aa : _0x55108a > _0x2ab7aa + _0x474e7c['MAP']['tileSize'] ? _0x2ab7aa + _0x474e7c['MAP']['tileSize'] : _0x55108a;
                const _0x127812 = _0x4aa4c9 < _0x588f81 ? _0x588f81 : _0x4aa4c9 > _0x588f81 + _0x474e7c['MAP']['tileSize'] ? _0x588f81 + _0x474e7c['MAP']['tileSize'] : _0x4aa4c9;
                const _0x188c5d = _0x55108a - _0x555ab8;
                const _0x3a93ca = _0x4aa4c9 - _0x127812;
                const _0x499c69 = Math['sqrt'](_0x188c5d * _0x188c5d + _0x3a93ca * _0x3a93ca);
                if (_0x499c69 < _0x5d2e7e) {
                    if (_0x499c69 === 0x0) {
                        const _0x3c2016 = _0x55108a - _0x2ab7aa;
                        const _0x5450d8 = _0x2ab7aa + _0x474e7c['MAP']['tileSize'] - _0x55108a;
                        const _0x2f5e01 = _0x4aa4c9 - _0x588f81;
                        const _0x101d33 = _0x588f81 + _0x474e7c['MAP']['tileSize'] - _0x4aa4c9;
                        const _0x500932 = Math['min'](_0x3c2016, _0x5450d8, _0x2f5e01, _0x101d33);
                        if (_0x500932 === _0x3c2016)
                            _0x55108a = _0x2ab7aa - _0x5d2e7e;
                        else if (_0x500932 === _0x5450d8)
                            _0x55108a = _0x2ab7aa + _0x474e7c['MAP']['tileSize'] + _0x5d2e7e;
                        else if (_0x500932 === _0x2f5e01)
                            _0x4aa4c9 = _0x588f81 - _0x5d2e7e;
                        else
                            _0x4aa4c9 = _0x588f81 + _0x474e7c['MAP']['tileSize'] + _0x5d2e7e;
                    } else {
                        const _0xd0da06 = _0x5d2e7e - _0x499c69;
                        _0x55108a += _0x188c5d / _0x499c69 * _0xd0da06;
                        _0x4aa4c9 += _0x3a93ca / _0x499c69 * _0xd0da06;
                    }
                }
            }
        }
        _0x2505cd['x'] = _0x55108a - _0x2505cd['width'] / 0x2;
        _0x2505cd['y'] = _0x4aa4c9 - _0x2505cd['height'] / 0x2;
    }
}
function _0x547c46(_0x38ac36) {
    const _0x403b40 = _0x38ac36['width'] / 0x2;
    for (let _0x551ef0 = 0x0; _0x551ef0 < 0x2; _0x551ef0++) {
        let _0xf501cb = _0x38ac36['x'] + _0x38ac36['width'] / 0x2;
        let _0x5107f1 = _0x38ac36['y'] + _0x38ac36['height'] / 0x2;
        for (const _0x669037 of _0x474e7c['ENTITIES']) {
            const _0x54b0c9 = _0xf501cb < _0x669037['x'] ? _0x669037['x'] : _0xf501cb > _0x669037['x'] + _0x669037['w'] ? _0x669037['x'] + _0x669037['w'] : _0xf501cb;
            const _0x46d83a = _0x5107f1 < _0x669037['y'] ? _0x669037['y'] : _0x5107f1 > _0x669037['y'] + _0x669037['h'] ? _0x669037['y'] + _0x669037['h'] : _0x5107f1;
            const _0x580ec6 = _0xf501cb - _0x54b0c9;
            const _0x235308 = _0x5107f1 - _0x46d83a;
            const _0xc22874 = Math['sqrt'](_0x580ec6 * _0x580ec6 + _0x235308 * _0x235308);
            if (_0xc22874 < _0x403b40 && _0xc22874 > 0x0) {
                const _0x81425b = _0x403b40 - _0xc22874;
                const _0x19a903 = _0x580ec6 / _0xc22874;
                const _0x3b01e5 = _0x235308 / _0xc22874;
                _0xf501cb += _0x19a903 * _0x81425b;
                _0x5107f1 += _0x3b01e5 * _0x81425b;
            } else if (_0xc22874 === 0x0) {
                const _0x320d4b = _0xf501cb - _0x669037['x'];
                const _0x31d61b = _0x669037['x'] + _0x669037['w'] - _0xf501cb;
                const _0x1f9e3f = _0x5107f1 - _0x669037['y'];
                const _0x114abc = _0x669037['y'] + _0x669037['h'] - _0x5107f1;
                const _0x40635e = Math['min'](_0x320d4b, _0x31d61b, _0x1f9e3f, _0x114abc);
                if (_0x40635e === _0x320d4b)
                    _0xf501cb = _0x669037['x'] - _0x403b40;
                else if (_0x40635e === _0x31d61b)
                    _0xf501cb = _0x669037['x'] + _0x669037['w'] + _0x403b40;
                else if (_0x40635e === _0x1f9e3f)
                    _0x5107f1 = _0x669037['y'] - _0x403b40;
                else
                    _0x5107f1 = _0x669037['y'] + _0x669037['h'] + _0x403b40;
            }
        }
        _0x38ac36['x'] = _0xf501cb - _0x38ac36['width'] / 0x2;
        _0x38ac36['y'] = _0x5107f1 - _0x38ac36['height'] / 0x2;
    }
}
function _0x4f901d() {
    if (_0xea442['isDead'])
        return;
    const _0x172490 = _0xea442['width'] / 0x2;
    const _0x296281 = _0xea442['x'] + _0xea442['width'] / 0x2;
    const _0x2f2dee = _0xea442['y'] + _0xea442['height'] / 0x2;
    for (const _0x2dd77f in _0x2a4a07) {
        const _0x1b4ec3 = _0x2a4a07[_0x2dd77f];
        if (_0x1b4ec3['isDead'])
            continue;
        const _0x368ae4 = _0x1b4ec3['width'] / 0x2;
        const _0x4e8c2c = _0x172490 + _0x368ae4;
        const _0x3cb35f = (_0x1b4ec3['renderX'] ?? _0x1b4ec3['x']) + _0x1b4ec3['width'] / 0x2;
        const _0x574025 = (_0x1b4ec3['renderY'] ?? _0x1b4ec3['y']) + _0x1b4ec3['height'] / 0x2;
        const _0x1f9552 = _0x296281 - _0x3cb35f;
        const _0x7c42cc = _0x2f2dee - _0x574025;
        const _0x401ded = Math['sqrt'](_0x1f9552 * _0x1f9552 + _0x7c42cc * _0x7c42cc);
        if (_0x401ded > 0x0 && _0x401ded < _0x4e8c2c) {
            const _0x3f7afa = _0x4e8c2c - _0x401ded;
            const _0x2fb448 = _0x1f9552 / _0x401ded;
            const _0x4cf3aa = _0x7c42cc / _0x401ded;
            _0xea442['x'] += _0x2fb448 * (_0x3f7afa * 0.25);
            _0xea442['y'] += _0x4cf3aa * (_0x3f7afa * 0.25);
            _0x1b4ec3['x'] -= _0x2fb448 * (_0x3f7afa * 0.75);
            _0x1b4ec3['y'] -= _0x4cf3aa * (_0x3f7afa * 0.75);
            _0x45d7a4(_0x1b4ec3);
            _0x547c46(_0x1b4ec3);
            if (_0x1b4ec3['renderX'] !== undefined) {
                _0x1b4ec3['renderX'] = _0x1b4ec3['x'];
                _0x1b4ec3['renderY'] = _0x1b4ec3['y'];
            }
            const _0x15a42e = _0xea442['vx'] * _0x2fb448 + _0xea442['vy'] * _0x4cf3aa;
            if (_0x15a42e < 0x0) {
                _0xea442['vx'] -= _0x15a42e * _0x2fb448 * 0.25;
                _0xea442['vy'] -= _0x15a42e * _0x4cf3aa * 0.25;
            }
        }
    }
    _0x1c18e3();
    _0x363a7a();
}
function _0x363a7a() {
    if (_0xea442['isDead'])
        return;
    const _0x4d1c59 = _0xea442['scale'];
    const _0x553dfe = _0xea442['width'] * _0x4d1c59 / 0x2;
    for (let _0x49853e = 0x0; _0x49853e < 0x2; _0x49853e++) {
        let _0x2e45bd = _0xea442['x'] + _0xea442['width'] / 0x2;
        let _0x3be92 = _0xea442['y'] + _0xea442['height'] / 0x2;
        for (const _0x5471bd of _0x474e7c['ENTITIES']) {
            const _0x5f7654 = _0x2e45bd < _0x5471bd['x'] ? _0x5471bd['x'] : _0x2e45bd > _0x5471bd['x'] + _0x5471bd['w'] ? _0x5471bd['x'] + _0x5471bd['w'] : _0x2e45bd;
            const _0x4685f3 = _0x3be92 < _0x5471bd['y'] ? _0x5471bd['y'] : _0x3be92 > _0x5471bd['y'] + _0x5471bd['h'] ? _0x5471bd['y'] + _0x5471bd['h'] : _0x3be92;
            const _0x4dfbc8 = _0x2e45bd - _0x5f7654;
            const _0x37b6d0 = _0x3be92 - _0x4685f3;
            const _0x51061b = Math['sqrt'](_0x4dfbc8 * _0x4dfbc8 + _0x37b6d0 * _0x37b6d0);
            if (_0x51061b < _0x553dfe && _0x51061b > 0x0) {
                const _0x7839de = _0x553dfe - _0x51061b;
                const _0x58ad08 = _0x4dfbc8 / _0x51061b;
                const _0x48e3b6 = _0x37b6d0 / _0x51061b;
                _0x2e45bd += _0x58ad08 * _0x7839de;
                _0x3be92 += _0x48e3b6 * _0x7839de;
                const _0x43473a = _0xea442['vx'] * _0x58ad08 + _0xea442['vy'] * _0x48e3b6;
                if (_0x43473a < 0x0) {
                    _0xea442['vx'] -= _0x43473a * _0x58ad08;
                    _0xea442['vy'] -= _0x43473a * _0x48e3b6;
                }
            } else if (_0x51061b === 0x0) {
                const _0x40ce49 = _0x2e45bd - _0x5471bd['x'];
                const _0x124656 = _0x5471bd['x'] + _0x5471bd['w'] - _0x2e45bd;
                const _0x43691b = _0x3be92 - _0x5471bd['y'];
                const _0xe8c738 = _0x5471bd['y'] + _0x5471bd['h'] - _0x3be92;
                const _0x162254 = Math['min'](_0x40ce49, _0x124656, _0x43691b, _0xe8c738);
                if (_0x162254 === _0x40ce49)
                    _0x2e45bd = _0x5471bd['x'] - _0x553dfe;
                else if (_0x162254 === _0x124656)
                    _0x2e45bd = _0x5471bd['x'] + _0x5471bd['w'] + _0x553dfe;
                else if (_0x162254 === _0x43691b)
                    _0x3be92 = _0x5471bd['y'] - _0x553dfe;
                else
                    _0x3be92 = _0x5471bd['y'] + _0x5471bd['h'] + _0x553dfe;
            }
        }
        _0xea442['x'] = _0x2e45bd - _0xea442['width'] / 0x2;
        _0xea442['y'] = _0x3be92 - _0xea442['height'] / 0x2;
    }
}
function _0x1f84e1(_0x50d8d7, _0x2a8512) {
    const _0x3cb008 = _0x474e7c['MAP']['layers']['find'](_0xc62ad2 => _0xc62ad2['name'] === 'trees');
    if (!_0x3cb008)
        return ![];
    const _0x2d8b6a = Math['floor'](_0x50d8d7 / _0x474e7c['MAP']['tileSize']);
    const _0x17ace1 = Math['floor'](_0x2a8512 / _0x474e7c['MAP']['tileSize']);
    if (_0x2d8b6a < 0x0 || _0x2d8b6a >= _0x474e7c['MAP']['columns'] || _0x17ace1 < 0x0 || _0x17ace1 >= _0x474e7c['MAP']['rows'])
        return ![];
    return _0x3cb008['data'][_0x17ace1 * _0x474e7c['MAP']['columns'] + _0x2d8b6a] === 0xb;
}
let _0x5d7b88 = null;
function _0x21289d() {
    const _0x396d3c = _0x474e7c['MAP'];
    const _0x593236 = _0x396d3c['layers']['find'](_0x1bea3f => _0x1bea3f['name'] === 'floor2');
    const _0x4b5fbd = _0x396d3c['layers']['find'](_0x2855aa => _0x2855aa['name'] === 'walls');
    if (!_0x593236 || !_0x4b5fbd) {
        _0x5d7b88 = null;
        return;
    }
    const _0x49a649 = _0x396d3c['columns'];
    const _0x301fc6 = _0x396d3c['rows'];
    const _0x5924de = [];
    const _0x20e947 = new Set();
    const _0x5e6674 = new Set();
    for (let _0x300b56 = 0x0; _0x300b56 < _0x301fc6; _0x300b56++) {
        for (let _0x37ff24 = 0x0; _0x37ff24 < _0x49a649; _0x37ff24++) {
            const _0x29ad13 = _0x300b56 * _0x49a649 + _0x37ff24;
            const _0x4a8d90 = _0x593236['data'][_0x29ad13];
            const _0xfe645e = _0x4b5fbd['data'][_0x29ad13];
            if (_0x4a8d90 === 0x2 && _0xfe645e === 0x0) {
                _0x5924de['push']({
                    'c': _0x37ff24,
                    'r': _0x300b56
                });
                _0x5e6674['add'](_0x37ff24 + ',' + _0x300b56);
            } else if (_0xfe645e !== 0x0) {
                _0x20e947['add'](_0x37ff24 + ',' + _0x300b56);
            }
        }
    }
    const _0x293e38 = [
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
                c: _0x4815b7,
                r: _0x175075
            } of _0x5924de) {
        for (const [_0x50b262, _0x114539] of _0x293e38) {
            const _0x7e572 = _0x4815b7 + _0x50b262, _0x57f537 = _0x175075 + _0x114539;
            const _0x5959e2 = _0x7e572 + ',' + _0x57f537;
            if (!_0x5e6674['has'](_0x5959e2)) {
                _0x20e947['add'](_0x5959e2);
            }
        }
    }
    _0x5d7b88 = {
        'wallSet': _0x20e947,
        'floorTiles': _0x5924de,
        'interiorSet': _0x5e6674
    };
}
function _0xbff97a() {
    const _0x1db2dc = _0x474e7c['MAP']['layers']['find'](_0x8958b3 => _0x8958b3['name'] === 'floor2');
    if (!_0x1db2dc)
        return ![];
    const _0x3b3fd9 = _0xea442['x'] + _0xea442['width'] / 0x2;
    const _0x2ff488 = _0xea442['y'] + _0xea442['height'] / 0x2;
    const _0x3f0876 = _0x474e7c['MAP']['tileSize'];
    const _0x2535a2 = Math['floor'](_0x3b3fd9 / _0x3f0876);
    const _0x502049 = Math['floor'](_0x2ff488 / _0x3f0876);
    if (_0x2535a2 < 0x0 || _0x2535a2 >= _0x474e7c['MAP']['columns'] || _0x502049 < 0x0 || _0x502049 >= _0x474e7c['MAP']['rows'])
        return ![];
    const _0x2088ca = _0x502049 * _0x474e7c['MAP']['columns'] + _0x2535a2;
    if (_0x1db2dc['data'][_0x2088ca] === 0x2)
        return !![];
    if (_0x474e7c['MAP']['doors'] && _0x474e7c['MAP']['doors'][_0x2088ca])
        return !![];
    const _0x4531f3 = [
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
    for (const [_0x41c824, _0x17076f] of _0x4531f3) {
        const _0x49d478 = Math['floor']((_0x3b3fd9 + _0x41c824) / _0x3f0876);
        const _0x356d11 = Math['floor']((_0x2ff488 + _0x17076f) / _0x3f0876);
        if (_0x49d478 >= 0x0 && _0x49d478 < _0x474e7c['MAP']['columns'] && _0x356d11 >= 0x0 && _0x356d11 < _0x474e7c['MAP']['rows']) {
            const _0x4f5ab3 = _0x356d11 * _0x474e7c['MAP']['columns'] + _0x49d478;
            if (_0x1db2dc['data'][_0x4f5ab3] === 0x2 || _0x474e7c['MAP']['doors'] && _0x474e7c['MAP']['doors'][_0x4f5ab3]) {
                return !![];
            }
        }
    }
    return ![];
}
let _0x1d6627 = null, _0x42a1b6 = null;
function _0x20315d() {
    if (_0xea442['isDead']) {
        _0x474e7c['SHADOW']['polygon'] = null;
        _0x1d6627 = null;
        return;
    }
    const _0x2307c8 = _0x474e7c['MAP'];
    const _0x45b68f = _0x474e7c['SHADOW'];
    const _0x262492 = _0x2307c8['tileSize'];
    if (!_0x5d7b88)
        _0x21289d();
    if (!_0x5d7b88) {
        _0x45b68f['polygon'] = null;
        _0x1d6627 = null;
        return;
    }
    const {
        wallSet: _0x43f5f4,
        floorTiles: _0x3cdeca
    } = _0x5d7b88;
    if (_0x3cdeca['length'] === 0x0) {
        _0x45b68f['polygon'] = null;
        _0x1d6627 = null;
        return;
    }
    if (!_0xbff97a()) {
        _0x45b68f['polygon'] = null;
        _0x1d6627 = null;
        return;
    }
    const _0x104f4d = _0xea442['x'] + _0xea442['width'] / 0x2;
    const _0x4a4c89 = _0xea442['y'] + _0xea442['height'] / 0x2;
    if (_0x1d6627 !== null && _0x45b68f['polygon'] && Math['hypot'](_0x104f4d - _0x1d6627, _0x4a4c89 - _0x42a1b6) < 0.5) {
        return;
    }
    _0x1d6627 = _0x104f4d;
    _0x42a1b6 = _0x4a4c89;
    const _0xcafd56 = Math['floor'](_0x104f4d / _0x262492);
    const _0x5f5385 = Math['floor'](_0x4a4c89 / _0x262492);
    const _0x414471 = Math['max'](0x0, _0xcafd56 - 0x8);
    const _0x1d280c = Math['min'](_0x2307c8['columns'] - 0x1, _0xcafd56 + 0x8);
    const _0x50c47c = Math['max'](0x0, _0x5f5385 - 0x8);
    const _0x2d6117 = Math['min'](_0x2307c8['rows'] - 0x1, _0x5f5385 + 0x8);
    const _0x2a1ffa = [];
    const _0x56c98a = [];
    for (let _0x3cf661 = _0x50c47c; _0x3cf661 <= _0x2d6117; _0x3cf661++) {
        for (let _0x20be0f = _0x414471; _0x20be0f <= _0x1d280c; _0x20be0f++) {
            if (!_0x43f5f4['has'](_0x20be0f + ',' + _0x3cf661))
                continue;
            const _0x4c5cd4 = _0x20be0f * _0x262492;
            const _0x5c990d = _0x3cf661 * _0x262492;
            const _0x757ee2 = _0x4c5cd4 + _0x262492;
            const _0x50d881 = _0x5c990d + _0x262492;
            if (!_0x43f5f4['has'](_0x20be0f + ',' + (_0x3cf661 - 0x1))) {
                _0x2a1ffa['push'](_0x4c5cd4, _0x5c990d, _0x757ee2, _0x5c990d);
                _0x56c98a['push'](_0x4c5cd4, _0x5c990d, _0x757ee2, _0x5c990d);
            }
            if (!_0x43f5f4['has'](_0x20be0f + ',' + (_0x3cf661 + 0x1))) {
                _0x2a1ffa['push'](_0x4c5cd4, _0x50d881, _0x757ee2, _0x50d881);
                _0x56c98a['push'](_0x4c5cd4, _0x50d881, _0x757ee2, _0x50d881);
            }
            if (!_0x43f5f4['has'](_0x20be0f - 0x1 + ',' + _0x3cf661)) {
                _0x2a1ffa['push'](_0x4c5cd4, _0x5c990d, _0x4c5cd4, _0x50d881);
                _0x56c98a['push'](_0x4c5cd4, _0x5c990d, _0x4c5cd4, _0x50d881);
            }
            if (!_0x43f5f4['has'](_0x20be0f + 0x1 + ',' + _0x3cf661)) {
                _0x2a1ffa['push'](_0x757ee2, _0x5c990d, _0x757ee2, _0x50d881);
                _0x56c98a['push'](_0x757ee2, _0x5c990d, _0x757ee2, _0x50d881);
            }
        }
    }
    const _0x41cee9 = new Set();
    const _0x3e681b = [];
    const _0x295bbd = 0.0001;
    for (let _0x3a979f = 0x0; _0x3a979f < _0x56c98a['length']; _0x3a979f += 0x2) {
        const _0x4695ce = _0x56c98a[_0x3a979f];
        const _0x2510a0 = _0x56c98a[_0x3a979f + 0x1];
        const _0x2eea18 = Math['atan2'](_0x2510a0 - _0x4a4c89, _0x4695ce - _0x104f4d);
        const _0x1ec4f1 = Math['round'](_0x2eea18 * 0x9c40);
        if (!_0x41cee9['has'](_0x1ec4f1 - 0x1)) {
            _0x41cee9['add'](_0x1ec4f1 - 0x1);
            _0x3e681b['push'](_0x2eea18 - _0x295bbd);
        }
        if (!_0x41cee9['has'](_0x1ec4f1)) {
            _0x41cee9['add'](_0x1ec4f1);
            _0x3e681b['push'](_0x2eea18);
        }
        if (!_0x41cee9['has'](_0x1ec4f1 + 0x1)) {
            _0x41cee9['add'](_0x1ec4f1 + 0x1);
            _0x3e681b['push'](_0x2eea18 + _0x295bbd);
        }
    }
    for (let _0x377c11 = 0x0; _0x377c11 < 0x10; _0x377c11++) {
        const _0x4c9b19 = -Math['PI'] + _0x377c11 * 0x2 * Math['PI'] / 0x10;
        _0x3e681b['push'](_0x4c9b19);
    }
    _0x3e681b['sort']((_0x1b0624, _0x41ea01) => _0x1b0624 - _0x41ea01);
    const _0x47ef95 = 0xc * _0x262492;
    const _0xf527b = [];
    for (let _0x6c2ac0 = 0x0; _0x6c2ac0 < _0x3e681b['length']; _0x6c2ac0++) {
        const _0x1dfc59 = _0x3e681b[_0x6c2ac0];
        const _0x28f715 = Math['cos'](_0x1dfc59);
        const _0x55ce61 = Math['sin'](_0x1dfc59);
        let _0xae4622 = _0x47ef95;
        for (let _0x70e2a4 = 0x0; _0x70e2a4 < _0x2a1ffa['length']; _0x70e2a4 += 0x4) {
            const _0x489fd8 = _0x2a1ffa[_0x70e2a4], _0x35afcb = _0x2a1ffa[_0x70e2a4 + 0x1];
            const _0x480c09 = _0x2a1ffa[_0x70e2a4 + 0x2], _0x4b6992 = _0x2a1ffa[_0x70e2a4 + 0x3];
            const _0x1d1538 = _0x480c09 - _0x489fd8;
            const _0x36e4be = _0x4b6992 - _0x35afcb;
            const _0x504557 = _0x28f715 * _0x36e4be - _0x55ce61 * _0x1d1538;
            if (Math['abs'](_0x504557) < 1e-9)
                continue;
            const _0x467a2e = _0x489fd8 - _0x104f4d;
            const _0x1e3e77 = _0x35afcb - _0x4a4c89;
            const _0x500556 = (_0x467a2e * _0x36e4be - _0x1e3e77 * _0x1d1538) / _0x504557;
            const _0x27af85 = (_0x467a2e * _0x55ce61 - _0x1e3e77 * _0x28f715) / _0x504557;
            if (_0x500556 > 0x1 && _0x27af85 >= 0x0 && _0x27af85 <= 0x1 && _0x500556 < _0xae4622) {
                _0xae4622 = _0x500556;
            }
        }
        _0xf527b['push'](_0x104f4d + _0x28f715 * _0xae4622, _0x4a4c89 + _0x55ce61 * _0xae4622);
    }
    _0x45b68f['polygon'] = _0xf527b['length'] >= 0x6 ? _0xf527b : null;
}
function _0x2c832c(_0x228672, _0x4d3d29, _0x4cf923) {
    if (_0xea442['isDead'])
        return;
    if (!_0x5d7b88)
        _0x21289d();
    if (!_0x5d7b88)
        return;
    const {floorTiles: _0x330338} = _0x5d7b88;
    if (_0x330338['length'] === 0x0)
        return;
    const _0x3c754e = _0x474e7c['SHADOW'];
    const _0x3db210 = _0x474e7c['MAP']['tileSize'];
    const _0x40871b = _0x474e7c['CAMERA']['width'];
    const _0x3b7248 = _0x474e7c['CAMERA']['height'];
    if (!_0x474e7c['SHADOW']['_buf'] || _0x474e7c['SHADOW']['_buf']['width'] !== _0x40871b || _0x474e7c['SHADOW']['_buf']['height'] !== _0x3b7248) {
        _0x474e7c['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x474e7c['SHADOW']['_buf']['width'] = _0x40871b;
        _0x474e7c['SHADOW']['_buf']['height'] = _0x3b7248;
    }
    const _0x599cfc = _0x474e7c['SHADOW']['_buf'];
    const _0x29331f = _0x599cfc['getContext']('2d');
    _0x29331f['clearRect'](0x0, 0x0, _0x40871b, _0x3b7248);
    _0x29331f['fillStyle'] = 'rgba(0,0,0,0.95)';
    _0x29331f['beginPath']();
    for (const {
                c: _0x4187db,
                r: _0x26d3b9
            } of _0x330338) {
        const _0x5f2326 = Math['round'](_0x4187db * _0x3db210 - _0x4d3d29), _0x5075b1 = Math['round'](_0x26d3b9 * _0x3db210 - _0x4cf923);
        if (_0x5f2326 > _0x40871b || _0x5075b1 > _0x3b7248 || _0x5f2326 + _0x3db210 < 0x0 || _0x5075b1 + _0x3db210 < 0x0)
            continue;
        _0x29331f['rect'](_0x5f2326, _0x5075b1, _0x3db210 + 0x1, _0x3db210 + 0x1);
    }
    _0x29331f['fill']();
    if (_0xbff97a() && _0x3c754e['polygon'] && _0x3c754e['polygon']['length'] >= 0x6) {
        _0x29331f['globalCompositeOperation'] = 'destination-out';
        _0x29331f['fillStyle'] = 'rgba(0,0,0,1)';
        const _0x46aa80 = _0x3c754e['polygon'];
        _0x29331f['beginPath']();
        _0x29331f['moveTo'](_0x46aa80[0x0] - _0x4d3d29, _0x46aa80[0x1] - _0x4cf923);
        for (let _0x2913cf = 0x2; _0x2913cf < _0x46aa80['length']; _0x2913cf += 0x2) {
            _0x29331f['lineTo'](_0x46aa80[_0x2913cf] - _0x4d3d29, _0x46aa80[_0x2913cf + 0x1] - _0x4cf923);
        }
        _0x29331f['closePath']();
        _0x29331f['fill']();
        _0x29331f['globalCompositeOperation'] = 'source-over';
    }
    _0x228672['drawImage'](_0x599cfc, 0x0, 0x0);
}
function _0x494cbe(_0x236261) {
    let _0x4e25a4 = 0x0, _0x3c54bd = 0x0;
    const _0x217035 = _0x474e7c['INPUTS']['mouseX'] / _0x474e7c['SYSTEM']['viewScale'];
    const _0x590efe = _0x474e7c['INPUTS']['mouseY'] / _0x474e7c['SYSTEM']['viewScale'];
    const _0x56e844 = _0xea442['x'] - _0x474e7c['CAMERA']['x'] + _0xea442['width'] / 0x2;
    const _0x5a71a0 = _0xea442['y'] - _0x474e7c['CAMERA']['y'] + _0xea442['height'] / 0x2;
    const _0x1ed772 = Math['atan2'](_0x590efe - _0x5a71a0, _0x217035 - _0x56e844);
    if (_0x591266 !== 0x0 || _0xa82f77 !== 0x0) {
        _0x4e25a4 = _0x591266;
        _0x3c54bd = _0xa82f77;
    } else if (_0x539c8d) {
        let _0x56971a = 0x0, _0x4bd643 = 0x0;
        if (_0x474e7c['INPUTS']['keys']['w'] || _0x474e7c['INPUTS']['keys']['arrowup'])
            _0x56971a += 0x1;
        if (_0x474e7c['INPUTS']['keys']['s'] || _0x474e7c['INPUTS']['keys']['arrowdown'])
            _0x56971a -= 0x1;
        if (_0x474e7c['INPUTS']['keys']['d'] || _0x474e7c['INPUTS']['keys']['arrowright'])
            _0x4bd643 += 0x1;
        if (_0x474e7c['INPUTS']['keys']['a'] || _0x474e7c['INPUTS']['keys']['arrowleft'])
            _0x4bd643 -= 0x1;
        if (_0x56971a !== 0x0 || _0x4bd643 !== 0x0) {
            const _0x2d9ee3 = _0x1ed772 + Math['atan2'](_0x4bd643, _0x56971a);
            _0x4e25a4 = Math['cos'](_0x2d9ee3);
            _0x3c54bd = Math['sin'](_0x2d9ee3);
        }
    } else {
        if (_0x474e7c['INPUTS']['keys']['w'] || _0x474e7c['INPUTS']['keys']['arrowup'])
            _0x3c54bd -= 0x1;
        if (_0x474e7c['INPUTS']['keys']['s'] || _0x474e7c['INPUTS']['keys']['arrowdown'])
            _0x3c54bd += 0x1;
        if (_0x474e7c['INPUTS']['keys']['a'] || _0x474e7c['INPUTS']['keys']['arrowleft'])
            _0x4e25a4 -= 0x1;
        if (_0x474e7c['INPUTS']['keys']['d'] || _0x474e7c['INPUTS']['keys']['arrowright'])
            _0x4e25a4 += 0x1;
        const _0x3f9ea0 = _0x4e25a4 !== 0x0 || _0x3c54bd !== 0x0;
        if (_0x3f9ea0) {
            const _0x272994 = Math['sqrt'](_0x4e25a4 * _0x4e25a4 + _0x3c54bd * _0x3c54bd);
            _0x4e25a4 /= _0x272994;
            _0x3c54bd /= _0x272994;
        }
    }
    if (_0x474e7c['GAME_STATE'] === 'NIGHT' && (_0x3b87ae === 'Skinwalker' || _0x3b87ae === 'Blackmailer')) {
        if (_0x474e7c['NIGHT_ABILITY_OPEN'] || !_0x474e7c['CURRENT_TARGET']) {
            _0x4e25a4 = 0x0;
            _0x3c54bd = 0x0;
            _0xea442['vx'] = 0x0;
            _0xea442['vy'] = 0x0;
            _0xea442['x'] = _0x474e7c['MAP']['columns'] * _0x474e7c['MAP']['tileSize'] / 0x2 - _0xea442['width'] / 0x2;
            _0xea442['y'] = _0x474e7c['MAP']['rows'] * _0x474e7c['MAP']['tileSize'] / 0x2 - _0xea442['height'] / 0x2;
        }
    }
    const _0xab14d4 = _0x4e25a4 !== 0x0 || _0x3c54bd !== 0x0;
    const _0x2dbb28 = (_0x474e7c['INPUTS']['keys']['shift'] || _0x11d1aa || _0x52014a) && _0xab14d4;
    _0xea442['bopTimer'] = _0x2dbb28 ? _0xea442['bopTimer'] + _0x236261 : 0x0;
    _0xea442['scale'] = 0x1 + (_0xea442['bopTimer'] > 0x0 ? Math['sin'](_0xea442['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x3ace28 = Math['pow'](0.001, _0x236261);
    const _0x2d9182 = _0x2dbb28 ? 0x74a : 0x5d5;
    _0xea442['vx'] += _0x4e25a4 * _0x2d9182 * _0x236261;
    _0xea442['vy'] += _0x3c54bd * _0x2d9182 * _0x236261;
    _0xea442['vx'] *= _0x3ace28;
    _0xea442['vy'] *= _0x3ace28;
    _0xea442['x'] += _0xea442['vx'] * _0x236261;
    _0xea442['y'] += _0xea442['vy'] * _0x236261;
    for (let _0x554f7a = 0x0; _0x554f7a < 0x3; _0x554f7a++)
        _0x1c18e3();
    for (let _0x35f22f = 0x0; _0x35f22f < 0x2; _0x35f22f++)
        _0x363a7a();
    for (let _0x5b3278 = 0x0; _0x5b3278 < 0x2; _0x5b3278++)
        _0x4f901d();
    if (_0xea442['x'] < 0x0)
        _0xea442['x'] = 0x0;
    if (_0xea442['y'] < 0x0)
        _0xea442['y'] = 0x0;
    if (_0xea442['x'] + _0xea442['width'] > _0x474e7c['MAP']['columns'] * _0x474e7c['MAP']['tileSize'])
        _0xea442['x'] = _0x474e7c['MAP']['columns'] * _0x474e7c['MAP']['tileSize'] - _0xea442['width'];
    if (_0xea442['y'] + _0xea442['height'] > _0x474e7c['MAP']['rows'] * _0x474e7c['MAP']['tileSize'])
        _0xea442['y'] = _0x474e7c['MAP']['rows'] * _0x474e7c['MAP']['tileSize'] - _0xea442['height'];
    if (_0x3b576d) {
        _0xea442['angle'] = _0x18095b + Math['PI'] / 0x2;
    } else if (_0x591266 !== 0x0 || _0xa82f77 !== 0x0) {
        _0xea442['angle'] = Math['atan2'](_0xa82f77, _0x591266) + Math['PI'] / 0x2;
    } else if (!_0x55dfe8) {
        _0xea442['angle'] = _0x1ed772 + Math['PI'] / 0x2;
    }
    const _0x5e2e98 = _0xea442['x'] + _0xea442['width'] / 0x2 - _0x474e7c['CAMERA']['width'] / 0x2;
    const _0x17817b = _0xea442['y'] + _0xea442['height'] / 0x2 - _0x474e7c['CAMERA']['height'] / 0x2;
    if (_0x474e7c['CAMERA']['x'] === null || isNaN(_0x474e7c['CAMERA']['x']) || !isFinite(_0x474e7c['CAMERA']['x'])) {
        _0x474e7c['CAMERA']['x'] = _0x5e2e98;
        _0x474e7c['CAMERA']['y'] = _0x17817b;
    } else {
        const _0x1b1fb0 = 0x1 - Math['exp'](-Math['max'](0x0, _0x236261) * 0x28);
        _0x474e7c['CAMERA']['x'] += (_0x5e2e98 - _0x474e7c['CAMERA']['x']) * _0x1b1fb0;
        _0x474e7c['CAMERA']['y'] += (_0x17817b - _0x474e7c['CAMERA']['y']) * _0x1b1fb0;
    }
    for (const _0x304ec9 in _0x2a4a07) {
        const _0x5e1537 = _0x2a4a07[_0x304ec9];
        if (_0x5e1537['renderX'] === undefined) {
            _0x5e1537['renderX'] = _0x5e1537['x'];
            _0x5e1537['renderY'] = _0x5e1537['y'];
            _0x5e1537['renderAngle'] = _0x5e1537['angle'] || 0x0;
        }
        const _0x2797cc = _0x5e1537['x'] + (_0x5e1537['vx'] || 0x0) * _0x236261;
        const _0x5705b7 = _0x5e1537['y'] + (_0x5e1537['vy'] || 0x0) * _0x236261;
        _0x5e1537['x'] = _0x2797cc;
        _0x5e1537['y'] = _0x5705b7;
        const _0x17a66a = 0x1 - Math['exp'](-_0x236261 * 0x12);
        const _0xb0a90a = _0x5e1537['x'] - _0x5e1537['renderX'], _0x1594b0 = _0x5e1537['y'] - _0x5e1537['renderY'];
        const _0x3c7c20 = Math['sqrt'](_0xb0a90a * _0xb0a90a + _0x1594b0 * _0x1594b0);
        const _0x8de23e = 0xc8;
        if (_0x3c7c20 > _0x8de23e) {
            _0x5e1537['renderX'] = _0x5e1537['x'] - _0xb0a90a / _0x3c7c20 * _0x8de23e;
            _0x5e1537['renderY'] = _0x5e1537['y'] - _0x1594b0 / _0x3c7c20 * _0x8de23e;
        }
        _0x5e1537['renderX'] += (_0x5e1537['x'] - _0x5e1537['renderX']) * _0x17a66a;
        _0x5e1537['renderY'] += (_0x5e1537['y'] - _0x5e1537['renderY']) * _0x17a66a;
        let _0x222e6e = (_0x5e1537['angle'] || 0x0) - _0x5e1537['renderAngle'];
        while (_0x222e6e < -Math['PI'])
            _0x222e6e += Math['PI'] * 0x2;
        while (_0x222e6e > Math['PI'])
            _0x222e6e -= Math['PI'] * 0x2;
        _0x5e1537['renderAngle'] += _0x222e6e * (0x1 - Math['exp'](-_0x236261 * 0x14));
    }
    if (_0x474e7c['GAME_STATE'] === 'NIGHT') {
        _0x5f238b = Math['min'](0.6, _0x5f238b + _0x236261 * 0.5);
    } else {
        _0x5f238b = Math['max'](0x0, _0x5f238b - _0x236261 * 0.5);
    }
    if (_0x17f910 > 0x0) {
        if (performance['now']() > _0x5c1620) {
            _0x17f910 = Math['max'](0x0, _0x17f910 - _0x236261 * 0x2);
        }
    }
    _0x20315d();
    _0x5573b0();
}
function _0x1a86eb(_0x43f614, _0x2ad593, _0x53d1d6, _0x47595b, _0x199058 = !![]) {
    _0x43f614['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x44eff0 = _0x43f614['measureText'](_0x2ad593)['width'];
    const _0x557a9a = _0x44eff0 + 0x18;
    const _0x486d31 = 0x1c;
    _0x43f614['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x43f614['beginPath']();
    if (_0x43f614['roundRect']) {
        _0x43f614['roundRect'](_0x53d1d6 - _0x557a9a / 0x2, _0x47595b - _0x486d31, _0x557a9a, _0x486d31, 0x6);
    } else {
        _0x43f614['rect'](_0x53d1d6 - _0x557a9a / 0x2, _0x47595b - _0x486d31, _0x557a9a, _0x486d31);
    }
    _0x43f614['fill']();
    if (_0x199058) {
        _0x43f614['beginPath']();
        _0x43f614['moveTo'](_0x53d1d6 - 0x6, _0x47595b);
        _0x43f614['lineTo'](_0x53d1d6 + 0x6, _0x47595b);
        _0x43f614['lineTo'](_0x53d1d6, _0x47595b + 0x6);
        _0x43f614['fill']();
    }
    _0x43f614['fillStyle'] = '#ffffff';
    _0x43f614['textAlign'] = 'center';
    _0x43f614['textBaseline'] = 'middle';
    _0x43f614['fillText'](_0x2ad593, _0x53d1d6, _0x47595b - _0x486d31 / 0x2 + 0x1);
}
function _0x4597e5(_0x5b9a55, _0x166d09, _0x8c23e1, _0x3b8b85) {
    if (!_0x166d09 || _0x166d09['length'] === 0x0)
        return;
    let _0x13a7fb = _0x3b8b85;
    for (let _0x12ac66 = 0x0; _0x12ac66 < _0x166d09['length']; _0x12ac66++) {
        _0x1a86eb(_0x5b9a55, _0x166d09[_0x12ac66]['text'], _0x8c23e1, _0x13a7fb, _0x12ac66 === 0x0);
        _0x13a7fb -= 0x24;
    }
}
function _0x39fd66() {
    if (!_0x474e7c['SYSTEM']['isReady'])
        return;
    if (_0x474e7c['MAP']['layers'] && _0x474e7c['MAP']['layers']['length'] > 0x0 && _0x398141['complete'] && _0x398141['naturalWidth'] > 0x0) {
        if (!_0x474e7c['MAP']['_prerenderedWithTileset'] || !_0x474e7c['MAP']['bgChunks'] || _0x474e7c['MAP']['bgChunks']['length'] === 0x0) {
            _0x2b380f();
        }
    }
    if (!_0x474e7c['MAP']['bgChunks'] || _0x474e7c['MAP']['bgChunks']['length'] === 0x0 || !_0x474e7c['MAP']['bgChunks'][0x0] || _0x474e7c['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x37866c['fillStyle'] = '#000000';
    _0x37866c['fillRect'](0x0, 0x0, _0x29ca33['width'], _0x29ca33['height']);
    _0x37866c['save']();
    try {
        _0x37866c['scale'](_0x474e7c['SYSTEM']['viewScale'], _0x474e7c['SYSTEM']['viewScale']);
        _0x37866c['imageSmoothingEnabled'] = ![];
        const _0x5ef5b6 = Math['floor'](_0x474e7c['CAMERA']['x'] || 0x0);
        const _0x35ee3c = Math['floor'](_0x474e7c['CAMERA']['y'] || 0x0);
        const _0x3b7a0c = Math['max'](0x0, Math['floor'](_0x5ef5b6 / _0x474e7c['MAP']['chunkSize']));
        const _0x5f0151 = Math['min'](_0x474e7c['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x5ef5b6 + _0x474e7c['CAMERA']['width']) / _0x474e7c['MAP']['chunkSize']));
        const _0x562c3b = Math['max'](0x0, Math['floor'](_0x35ee3c / _0x474e7c['MAP']['chunkSize']));
        const _0x5444c1 = Math['min'](_0x474e7c['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x35ee3c + _0x474e7c['CAMERA']['height']) / _0x474e7c['MAP']['chunkSize']));
        for (let _0x1b2bca = _0x562c3b; _0x1b2bca <= _0x5444c1; _0x1b2bca++)
            for (let _0x104ef9 = _0x3b7a0c; _0x104ef9 <= _0x5f0151; _0x104ef9++) {
                const _0x20d90c = _0x104ef9 * _0x474e7c['MAP']['chunkSize'] - _0x5ef5b6;
                const _0x210475 = _0x1b2bca * _0x474e7c['MAP']['chunkSize'] - _0x35ee3c;
                _0x37866c['drawImage'](_0x474e7c['MAP']['bgChunks'][_0x1b2bca][_0x104ef9], _0x20d90c, _0x210475, _0x474e7c['MAP']['chunkSize'] + 0x1, _0x474e7c['MAP']['chunkSize'] + 0x1);
            }
        const _0x34a719 = _0x34d2d5('assets/blood\x20splatter.png');
        if (_0xac7644 && _0xac7644['length'] > 0x0) {
            for (const _0x5d849f of _0xac7644) {
                const _0x4209fe = _0x5d849f['x'] - _0x5ef5b6;
                const _0x39e930 = _0x5d849f['y'] - _0x35ee3c;
                if (_0x34a719['complete'] && _0x34a719['naturalWidth'] > 0x0) {
                    _0x37866c['drawImage'](_0x34a719, _0x4209fe - 0x20, _0x39e930 - 0x20, 0x40, 0x40);
                } else {
                    _0x37866c['fillStyle'] = 'rgba(160,\x200,\x200,\x200.75)';
                    _0x37866c['beginPath']();
                    _0x37866c['arc'](_0x4209fe, _0x39e930, 0x16, 0x0, Math['PI'] * 0x2);
                    _0x37866c['fill']();
                }
            }
        }
        const _0x4d30a7 = _0x34d2d5('assets/blood.png');
        if (_0x1e8dbc && _0x1e8dbc['length'] > 0x0) {
            for (const _0x3d454f of _0x1e8dbc) {
                const _0x40e08f = _0x3d454f['x'] - _0x5ef5b6;
                const _0x55c073 = _0x3d454f['y'] - _0x35ee3c;
                if (_0x4d30a7['complete'] && _0x4d30a7['naturalWidth'] > 0x0) {
                    _0x37866c['drawImage'](_0x4d30a7, _0x40e08f - 0xc, _0x55c073 - 0xc, 0x18, 0x18);
                } else {
                    _0x37866c['fillStyle'] = 'rgba(180,\x200,\x200,\x200.8)';
                    _0x37866c['beginPath']();
                    _0x37866c['arc'](_0x40e08f, _0x55c073, 0x5, 0x0, Math['PI'] * 0x2);
                    _0x37866c['fill']();
                }
            }
        }
        if (_0x516ee0['complete'] && _0x516ee0['naturalWidth'] > 0x0) {
            const _0x3ddb5f = _0x474e7c['MAP']['tileSize'];
            const _0x56071f = _0x3ddb5f * 0xa;
            const _0x102544 = _0x474e7c['MAP']['columns'] / 0x2 * _0x3ddb5f - _0x56071f / 0x2 - _0x5ef5b6;
            const _0x387f72 = _0x474e7c['MAP']['rows'] / 0x2 * _0x3ddb5f - _0x56071f / 0x2 - _0x35ee3c;
            _0x37866c['imageSmoothingEnabled'] = ![];
            _0x37866c['drawImage'](_0x516ee0, _0x102544, _0x387f72, _0x56071f, _0x56071f);
        }
        if (_0x49ef3f['complete'] && _0x49ef3f['naturalWidth'] > 0x0) {
            _0x474e7c['ENTITIES']['forEach'](_0x26dcc0 => {
                if (_0x26dcc0['type'] !== 'table')
                    return;
                _0x37866c['save']();
                _0x37866c['imageSmoothingEnabled'] = ![];
                const _0x148662 = _0x49ef3f['naturalWidth'] >= _0x49ef3f['naturalHeight'];
                const _0x3b3683 = _0x26dcc0['w'] >= _0x26dcc0['h'];
                if (_0x148662 === _0x3b3683) {
                    _0x37866c['drawImage'](_0x49ef3f, _0x26dcc0['x'] - _0x5ef5b6, _0x26dcc0['y'] - _0x35ee3c, _0x26dcc0['w'], _0x26dcc0['h']);
                } else {
                    _0x37866c['translate'](_0x26dcc0['x'] - _0x5ef5b6 + _0x26dcc0['w'] / 0x2, _0x26dcc0['y'] - _0x35ee3c + _0x26dcc0['h'] / 0x2);
                    _0x37866c['rotate'](Math['PI'] / 0x2);
                    _0x37866c['drawImage'](_0x49ef3f, -_0x26dcc0['h'] / 0x2, -_0x26dcc0['w'] / 0x2, _0x26dcc0['h'], _0x26dcc0['w']);
                }
                _0x37866c['restore']();
            });
        } else {
            _0x474e7c['ENTITIES']['forEach'](_0x490925 => {
                if (_0x490925['type'] !== 'table')
                    return;
                _0x37866c['save']();
                _0x37866c['fillStyle'] = '#6b4423';
                _0x37866c['fillRect'](_0x490925['x'] - _0x5ef5b6, _0x490925['y'] - _0x35ee3c, _0x490925['w'], _0x490925['h']);
                _0x37866c['strokeStyle'] = '#422810';
                _0x37866c['lineWidth'] = 0x3;
                _0x37866c['strokeRect'](_0x490925['x'] - _0x5ef5b6 + 0x1, _0x490925['y'] - _0x35ee3c + 0x1, _0x490925['w'] - 0x2, _0x490925['h'] - 0x2);
                _0x37866c['fillStyle'] = '#82532a';
                _0x37866c['fillRect'](_0x490925['x'] - _0x5ef5b6 + 0x4, _0x490925['y'] - _0x35ee3c + 0x4, _0x490925['w'] - 0x8, _0x490925['h'] - 0x8);
                _0x37866c['restore']();
            });
        }
        if (_0x1e89c5) {
            if (_0x474e7c['MAP']['wallChunks'] && _0x474e7c['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x74dfde = _0x562c3b; _0x74dfde <= _0x5444c1; _0x74dfde++) {
                    for (let _0x5df4e1 = _0x3b7a0c; _0x5df4e1 <= _0x5f0151; _0x5df4e1++) {
                        if (!_0x474e7c['MAP']['wallChunks'][_0x74dfde] || !_0x474e7c['MAP']['wallChunks'][_0x74dfde][_0x5df4e1])
                            continue;
                        const _0x2e8d14 = _0x5df4e1 * _0x474e7c['MAP']['chunkSize'] - _0x5ef5b6;
                        const _0x1efcb7 = _0x74dfde * _0x474e7c['MAP']['chunkSize'] - _0x35ee3c;
                        _0x37866c['drawImage'](_0x474e7c['MAP']['wallChunks'][_0x74dfde][_0x5df4e1], _0x2e8d14, _0x1efcb7, _0x474e7c['MAP']['chunkSize'] + 0x1, _0x474e7c['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x45ebd5 = _0x562c3b; _0x45ebd5 <= _0x5444c1; _0x45ebd5++) {
                for (let _0x56365e = _0x3b7a0c; _0x56365e <= _0x5f0151; _0x56365e++) {
                    const _0x27458b = _0x56365e * _0x474e7c['MAP']['chunkSize'] - _0x5ef5b6;
                    const _0x2777d5 = _0x45ebd5 * _0x474e7c['MAP']['chunkSize'] - _0x35ee3c;
                    _0x37866c['drawImage'](_0x474e7c['MAP']['fgChunks'][_0x45ebd5][_0x56365e], _0x27458b, _0x2777d5, _0x474e7c['MAP']['chunkSize'] + 0x1, _0x474e7c['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x54ca6a = _0x474e7c['GAME_STATE'] === 'NIGHT' && (_0x3b87ae === 'Skinwalker' || _0x3b87ae === 'Blackmailer') && !_0xea442['isDead'];
        const _0x5f17a1 = _0xea442['x'] - _0x5ef5b6 + _0xea442['width'] / 0x2;
        const _0x5b529b = _0xea442['y'] - _0x35ee3c + _0xea442['height'] / 0x2;
        const _0x416777 = _0xea442['width'] * _0xea442['scale'] * 1.3;
        const _0x55d092 = _0xea442['height'] * _0xea442['scale'] * 1.3;
        const _0x2ecd32 = _0x34d2d5('assets/arrow.png');
        const _0x40ff9c = _0x34d2d5('assets/tape.png');
        for (const _0x3aab83 in _0x2a4a07) {
            const _0x4b8c4b = _0x2a4a07[_0x3aab83];
            if (_0x4b8c4b['isDead'])
                continue;
            const _0x535e66 = parseInt(_0x3aab83);
            const _0x3ab267 = (_0x4b8c4b['renderX'] ?? _0x4b8c4b['x']) - _0x5ef5b6 + _0x4b8c4b['width'] / 0x2;
            const _0x1daccf = (_0x4b8c4b['renderY'] ?? _0x4b8c4b['y']) - _0x35ee3c + _0x4b8c4b['height'] / 0x2;
            const _0x2ecf2f = Math['min'](0x2, Math['max'](0.3, _0x4b8c4b['scale'] || 0x1));
            const _0x1f1535 = _0x4b8c4b['width'] * _0x2ecf2f * 1.3;
            const _0x273f36 = _0x4b8c4b['height'] * _0x2ecf2f * 1.3;
            _0x37866c['save']();
            try {
                _0x37866c['translate'](_0x3ab267, _0x1daccf);
                _0x37866c['rotate'](_0x4b8c4b['renderAngle'] ?? 0x0);
                if (_0x4b8c4b['isDark'])
                    _0x37866c['filter'] = 'brightness(0)';
                _0x36f802(_0x37866c, _0x4b8c4b['body'], _0x4b8c4b['eyes'], _0x1f1535, _0x273f36);
                if (_0x2d7c59['has'](_0x535e66) && _0x1ac766['complete'] && _0x1ac766['naturalWidth'] > 0x0) {
                    _0x37866c['drawImage'](_0x1ac766, -_0x1f1535 / 0x2, -_0x273f36 / 0x2, _0x1f1535, _0x273f36);
                }
                if (_0x4b8c4b['hasArrow'] && _0x474e7c['GAME_STATE'] === 'NIGHT' && _0x2ecd32['complete'] && _0x2ecd32['naturalWidth'] > 0x0) {
                    _0x37866c['drawImage'](_0x2ecd32, -_0x1f1535 / 0x2, -_0x273f36 / 0x2, _0x1f1535, _0x273f36);
                }
                if ((_0x4b8c4b['isBlackmailed'] || _0x29f081['has'](_0x535e66)) && _0x40ff9c['complete'] && _0x40ff9c['naturalWidth'] > 0x0) {
                    _0x37866c['drawImage'](_0x40ff9c, -_0x1f1535 / 0x2, -_0x273f36 / 0x2, _0x1f1535, _0x273f36);
                }
                if (_0x4b8c4b['isDark'])
                    _0x37866c['filter'] = 'none';
            } finally {
                _0x37866c['restore']();
            }
            if (!_0x1f84e1((_0x4b8c4b['renderX'] ?? _0x4b8c4b['x']) + _0x4b8c4b['width'] / 0x2, (_0x4b8c4b['renderY'] ?? _0x4b8c4b['y']) + _0x4b8c4b['height'] / 0x2)) {
                _0x37866c['textAlign'] = 'center';
                _0x37866c['lineJoin'] = 'round';
                _0x37866c['lineWidth'] = 0x3;
                _0x37866c['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x37866c['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x5d7b90 = '#ffffff';
                if (_0x4b8c4b['isBlackmailed'] || _0x29f081['has'](_0x535e66)) {
                    _0x5d7b90 = '#ff4444';
                } else if (_0x2d7c59['has'](_0x535e66)) {
                    _0x5d7b90 = '#cc88ff';
                }
                _0x37866c['fillStyle'] = _0x5d7b90;
                const _0x25bdb4 = _0x4b8c4b['isDark'] ? '???' : _0x4b8c4b['name'] + (_0x4b8c4b['isOwner'] ? '\x20[🗝️]' : '');
                _0x37866c['strokeText'](_0x25bdb4, _0x3ab267, _0x1daccf - _0x273f36 / 0x2 - 0x10);
                _0x37866c['fillText'](_0x25bdb4, _0x3ab267, _0x1daccf - _0x273f36 / 0x2 - 0x10);
            }
        }
        if (!_0xea442['isDead']) {
            _0x37866c['save']();
            try {
                _0x37866c['translate'](_0x5f17a1, _0x5b529b);
                _0x37866c['rotate'](_0xea442['angle']);
                if (_0x54ca6a)
                    _0x37866c['filter'] = 'brightness(0)';
                _0x36f802(_0x37866c, _0x5d6834, _0x42196a, _0x416777, _0x55d092);
                if (_0x2d7c59['has'](_0x256129) && _0x1ac766['complete'] && _0x1ac766['naturalWidth'] > 0x0) {
                    _0x37866c['drawImage'](_0x1ac766, -_0x416777 / 0x2, -_0x55d092 / 0x2, _0x416777, _0x55d092);
                }
                if (_0xea442['hasArrow'] && _0x474e7c['GAME_STATE'] === 'NIGHT' && _0x2ecd32['complete'] && _0x2ecd32['naturalWidth'] > 0x0) {
                    _0x37866c['drawImage'](_0x2ecd32, -_0x416777 / 0x2, -_0x55d092 / 0x2, _0x416777, _0x55d092);
                }
                if (_0x29f081['has'](_0x256129) && _0x40ff9c['complete'] && _0x40ff9c['naturalWidth'] > 0x0) {
                    _0x37866c['drawImage'](_0x40ff9c, -_0x416777 / 0x2, -_0x55d092 / 0x2, _0x416777, _0x55d092);
                }
                if (_0x54ca6a)
                    _0x37866c['filter'] = 'none';
            } finally {
                _0x37866c['restore']();
            }
            if (!_0x1f84e1(_0xea442['x'] + _0xea442['width'] / 0x2, _0xea442['y'] + _0xea442['height'] / 0x2)) {
                _0x37866c['textAlign'] = 'center';
                _0x37866c['lineJoin'] = 'round';
                _0x37866c['lineWidth'] = 0x3;
                _0x37866c['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x37866c['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x1028b2 = '#ffffff';
                if (_0x29f081['has'](_0x256129)) {
                    _0x1028b2 = '#ff4444';
                } else if (_0x2d7c59['has'](_0x256129)) {
                    _0x1028b2 = '#cc88ff';
                }
                _0x37866c['fillStyle'] = _0x1028b2;
                const _0x411ddc = _0x54ca6a ? '???' : _0x4d92e1 + (_0x30628a ? '\x20[🗝️]' : '');
                _0x37866c['strokeText'](_0x411ddc, _0x5f17a1, _0x5b529b - _0x55d092 / 0x2 - 0x10);
                _0x37866c['fillText'](_0x411ddc, _0x5f17a1, _0x5b529b - _0x55d092 / 0x2 - 0x10);
            }
        }
        if (_0x474e7c['MAP']['wallChunks'] && _0x474e7c['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x1dc277 = _0x562c3b; _0x1dc277 <= _0x5444c1; _0x1dc277++)
                for (let _0xf2e251 = _0x3b7a0c; _0xf2e251 <= _0x5f0151; _0xf2e251++) {
                    if (!_0x474e7c['MAP']['wallChunks'][_0x1dc277] || !_0x474e7c['MAP']['wallChunks'][_0x1dc277][_0xf2e251])
                        continue;
                    const _0x12769e = _0xf2e251 * _0x474e7c['MAP']['chunkSize'] - _0x5ef5b6;
                    const _0x2803ec = _0x1dc277 * _0x474e7c['MAP']['chunkSize'] - _0x35ee3c;
                    _0x37866c['drawImage'](_0x474e7c['MAP']['wallChunks'][_0x1dc277][_0xf2e251], _0x12769e, _0x2803ec, _0x474e7c['MAP']['chunkSize'] + 0x1, _0x474e7c['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x4dfa77 of _0x474e7c['ENTITIES']) {
            if (_0x4dfa77['type'] !== 'npc')
                continue;
            const _0x2642a5 = _0x4dfa77['x'] - _0x5ef5b6 + _0x4dfa77['w'] / 0x2;
            const _0x52ef95 = _0x4dfa77['y'] - _0x35ee3c + _0x4dfa77['h'] / 0x2;
            const _0x2e840b = _0x4dfa77['w'];
            const _0x34a58b = _0x4dfa77['h'];
            _0x37866c['save']();
            _0x37866c['translate'](_0x2642a5, _0x52ef95);
            _0x37866c['rotate'](_0x4dfa77['angle'] !== undefined ? _0x4dfa77['angle'] : 0x0);
            _0x36f802(_0x37866c, _0x4dfa77['body'] || 'yanito932.png', _0x4dfa77['eyes'], _0x2e840b, _0x34a58b);
            _0x37866c['restore']();
            _0x37866c['textAlign'] = 'center';
            _0x37866c['lineJoin'] = 'round';
            _0x37866c['lineWidth'] = 0x3;
            _0x37866c['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x37866c['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
            _0x37866c['fillStyle'] = '#aaaaaa';
            _0x37866c['strokeText'](_0x4dfa77['name'] || 'NPC', _0x2642a5, _0x52ef95 - _0x34a58b / 0x2 - 0x10);
            _0x37866c['fillText'](_0x4dfa77['name'] || 'NPC', _0x2642a5, _0x52ef95 - _0x34a58b / 0x2 - 0x10);
        }
        if (_0xea442['isDead']) {
            for (const _0x10eedf in _0x2a4a07) {
                const _0x5ccbc0 = _0x2a4a07[_0x10eedf];
                if (!_0x5ccbc0['isDead'])
                    continue;
                const _0x16195c = (_0x5ccbc0['renderX'] ?? _0x5ccbc0['x']) - _0x5ef5b6 + _0x5ccbc0['width'] / 0x2;
                const _0x24ca85 = (_0x5ccbc0['renderY'] ?? _0x5ccbc0['y']) - _0x35ee3c + _0x5ccbc0['height'] / 0x2;
                const _0x37ae7e = _0x5ccbc0['width'] * (_0x5ccbc0['scale'] || 0x1) * 1.3;
                const _0x18010f = _0x5ccbc0['height'] * (_0x5ccbc0['scale'] || 0x1) * 1.3;
                _0x37866c['save']();
                try {
                    _0x37866c['translate'](_0x16195c, _0x24ca85);
                    _0x37866c['rotate'](_0x5ccbc0['renderAngle'] ?? 0x0);
                    _0x37866c['globalAlpha'] = 0.3;
                    _0x36f802(_0x37866c, _0x5ccbc0['body'], _0x5ccbc0['eyes'], _0x37ae7e, _0x18010f);
                } finally {
                    _0x37866c['restore']();
                }
                if (!_0x1f84e1((_0x5ccbc0['renderX'] ?? _0x5ccbc0['x']) + _0x5ccbc0['width'] / 0x2, (_0x5ccbc0['renderY'] ?? _0x5ccbc0['y']) + _0x5ccbc0['height'] / 0x2)) {
                    _0x37866c['save']();
                    _0x37866c['globalAlpha'] = 0.3;
                    _0x37866c['textAlign'] = 'center';
                    _0x37866c['lineJoin'] = 'round';
                    _0x37866c['lineWidth'] = 0x3;
                    _0x37866c['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x37866c['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                    _0x37866c['fillStyle'] = '#ffffff';
                    const _0xe2dabd = _0x5ccbc0['name'] + (_0x5ccbc0['isOwner'] ? '\x20[🗝️]' : '');
                    _0x37866c['strokeText'](_0xe2dabd, _0x16195c, _0x24ca85 - _0x18010f / 0x2 - 0x10);
                    _0x37866c['fillText'](_0xe2dabd, _0x16195c, _0x24ca85 - _0x18010f / 0x2 - 0x10);
                    _0x37866c['restore']();
                }
            }
            _0x37866c['save']();
            try {
                _0x37866c['translate'](_0x5f17a1, _0x5b529b);
                _0x37866c['rotate'](_0xea442['angle']);
                _0x37866c['globalAlpha'] = 0.3;
                _0x36f802(_0x37866c, _0x5d6834, _0x42196a, _0x416777, _0x55d092);
            } finally {
                _0x37866c['restore']();
            }
            if (!_0x1f84e1(_0xea442['x'] + _0xea442['width'] / 0x2, _0xea442['y'] + _0xea442['height'] / 0x2)) {
                _0x37866c['save']();
                _0x37866c['globalAlpha'] = 0.3;
                _0x37866c['textAlign'] = 'center';
                _0x37866c['lineJoin'] = 'round';
                _0x37866c['lineWidth'] = 0x3;
                _0x37866c['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x37866c['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                _0x37866c['fillStyle'] = '#ffffff';
                const _0x446792 = _0x4d92e1 + (_0x30628a ? '\x20[🗝️]' : '');
                _0x37866c['strokeText'](_0x446792, _0x5f17a1, _0x5b529b - _0x55d092 / 0x2 - 0x10);
                _0x37866c['fillText'](_0x446792, _0x5f17a1, _0x5b529b - _0x55d092 / 0x2 - 0x10);
                _0x37866c['restore']();
            }
        }
        for (let _0x503d0b = _0x562c3b; _0x503d0b <= _0x5444c1; _0x503d0b++)
            for (let _0x153dd1 = _0x3b7a0c; _0x153dd1 <= _0x5f0151; _0x153dd1++) {
                const _0x483e28 = _0x153dd1 * _0x474e7c['MAP']['chunkSize'] - _0x5ef5b6;
                const _0x4ffccc = _0x503d0b * _0x474e7c['MAP']['chunkSize'] - _0x35ee3c;
                _0x37866c['drawImage'](_0x474e7c['MAP']['fgChunks'][_0x503d0b][_0x153dd1], _0x483e28, _0x4ffccc, _0x474e7c['MAP']['chunkSize'] + 0x1, _0x474e7c['MAP']['chunkSize'] + 0x1);
            }
        if (_0x474e7c['EDITOR']['enabled'] && _0x474e7c['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x4d9e7f = _0x474e7c['INPUTS']['mouseX'] / _0x474e7c['SYSTEM']['viewScale'] + _0x474e7c['CAMERA']['x'];
            const _0x2fe343 = _0x474e7c['INPUTS']['mouseY'] / _0x474e7c['SYSTEM']['viewScale'] + _0x474e7c['CAMERA']['y'];
            const _0x386825 = Math['floor'](_0x4d9e7f / _0x474e7c['MAP']['tileSize']);
            const _0x3c7d0e = Math['floor'](_0x2fe343 / _0x474e7c['MAP']['tileSize']);
            if (_0x386825 >= 0x0 && _0x386825 < _0x474e7c['MAP']['columns'] && _0x3c7d0e >= 0x0 && _0x3c7d0e < _0x474e7c['MAP']['rows']) {
                const _0x7b6088 = _0x386825 * _0x474e7c['MAP']['tileSize'] - _0x5ef5b6;
                const _0x29e886 = _0x3c7d0e * _0x474e7c['MAP']['tileSize'] - _0x35ee3c;
                _0x37866c['save']();
                _0x37866c['globalAlpha'] = 0.5;
                if (_0x474e7c['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x96ec79 = _0x474e7c['EDITOR']['selectedTileGid'] - 0x1;
                    _0x37866c['drawImage'](_0x398141, _0x96ec79 % _0x474e7c['MAP']['tilesetCols'] * _0x474e7c['MAP']['tileSize'], Math['floor'](_0x96ec79 / _0x474e7c['MAP']['tilesetCols']) * _0x474e7c['MAP']['tileSize'], _0x474e7c['MAP']['tileSize'], _0x474e7c['MAP']['tileSize'], _0x7b6088, _0x29e886, _0x474e7c['MAP']['tileSize'], _0x474e7c['MAP']['tileSize']);
                } else {
                    _0x37866c['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x37866c['fillRect'](_0x7b6088, _0x29e886, _0x474e7c['MAP']['tileSize'], _0x474e7c['MAP']['tileSize']);
                }
                _0x37866c['restore']();
            }
        }
        _0x2c832c(_0x37866c, _0x5ef5b6, _0x35ee3c);
        if (_0x5f238b > 0x0) {
            _0x37866c['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x5f238b + ')';
            _0x37866c['fillRect'](0x0, 0x0, _0x474e7c['CAMERA']['width'], _0x474e7c['CAMERA']['height']);
        }
        for (const _0x420c27 in _0x2a4a07) {
            const _0x31b208 = _0x2a4a07[_0x420c27];
            if (_0x31b208['isDead'] && !_0xea442['isDead'])
                continue;
            const _0x4b2e6c = (_0x31b208['renderX'] ?? _0x31b208['x']) - _0x5ef5b6 + _0x31b208['width'] / 0x2;
            const _0xa222e3 = (_0x31b208['renderY'] ?? _0x31b208['y']) - _0x35ee3c + _0x31b208['height'] / 0x2;
            _0x4597e5(_0x37866c, _0x31b208['chats'], _0x4b2e6c, _0xa222e3 - _0x31b208['height'] / 0x2 - 0x20);
        }
        _0x4597e5(_0x37866c, _0xea442['chats'], _0x5f17a1, _0x5b529b - _0xea442['height'] / 0x2 - 0x20);
        if (_0x17f910 > 0x0) {
            _0x37866c['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x17f910 + ')';
            _0x37866c['fillRect'](0x0, 0x0, _0x474e7c['CAMERA']['width'], _0x474e7c['CAMERA']['height']);
        }
    } finally {
        _0x37866c['restore']();
    }
}
function _0x1d3954(_0x542978) {
    if (!_0x474e7c['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x1d3954);
    let _0x51ad97 = (_0x542978 - _0x474e7c['SYSTEM']['lastTime']) / 0x3e8;
    _0x474e7c['SYSTEM']['lastTime'] = _0x542978;
    if (_0x51ad97 > 0.1)
        _0x51ad97 = 0.1;
    if (_0x51ad97 < 0x0 || isNaN(_0x51ad97))
        _0x51ad97 = 0.016;
    if (_0x1e89c5) {
        _0x1e4d44(_0x51ad97);
        _0x39fd66();
        return;
    }
    if (!_0x256129)
        return;
    _0x494cbe(_0x51ad97);
    _0x23a891['tick'](_0x542978);
    _0x39fd66();
}
function _0x2b380f() {
    if (_0x398141['complete'] && _0x398141['naturalWidth'] > 0x0) {
        _0x474e7c['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x55f6e0 = Math['ceil'](_0x474e7c['MAP']['columns'] * _0x474e7c['MAP']['tileSize'] / _0x474e7c['MAP']['chunkSize']);
    const _0xc46f34 = Math['ceil'](_0x474e7c['MAP']['rows'] * _0x474e7c['MAP']['tileSize'] / _0x474e7c['MAP']['chunkSize']);
    _0x474e7c['MAP']['bgChunks'] = [];
    _0x474e7c['MAP']['fgChunks'] = [];
    _0x474e7c['MAP']['wallChunks'] = [];
    for (let _0x24e79d = 0x0; _0x24e79d < _0xc46f34; _0x24e79d++) {
        _0x474e7c['MAP']['bgChunks'][_0x24e79d] = [];
        _0x474e7c['MAP']['fgChunks'][_0x24e79d] = [];
        _0x474e7c['MAP']['wallChunks'][_0x24e79d] = [];
        for (let _0x848b64 = 0x0; _0x848b64 < _0x55f6e0; _0x848b64++) {
            const _0x319c4d = document['createElement']('canvas');
            _0x319c4d['width'] = _0x319c4d['height'] = _0x474e7c['MAP']['chunkSize'];
            const _0x5b4f62 = document['createElement']('canvas');
            _0x5b4f62['width'] = _0x5b4f62['height'] = _0x474e7c['MAP']['chunkSize'];
            const _0x30d564 = document['createElement']('canvas');
            _0x30d564['width'] = _0x30d564['height'] = _0x474e7c['MAP']['chunkSize'];
            _0x474e7c['MAP']['bgChunks'][_0x24e79d][_0x848b64] = _0x319c4d;
            _0x474e7c['MAP']['fgChunks'][_0x24e79d][_0x848b64] = _0x5b4f62;
            _0x474e7c['MAP']['wallChunks'][_0x24e79d][_0x848b64] = _0x30d564;
            _0x2e2458(_0x848b64, _0x24e79d);
        }
    }
}
function _0x2e2458(_0x56c720, _0x23c2ad) {
    const _0x340d96 = _0x474e7c['MAP']['bgChunks'][_0x23c2ad][_0x56c720]['getContext']('2d', { 'alpha': !![] });
    const _0x416cdb = _0x474e7c['MAP']['fgChunks'][_0x23c2ad][_0x56c720]['getContext']('2d', { 'alpha': !![] });
    const _0x4b743e = _0x474e7c['MAP']['wallChunks'][_0x23c2ad] && _0x474e7c['MAP']['wallChunks'][_0x23c2ad][_0x56c720] ? _0x474e7c['MAP']['wallChunks'][_0x23c2ad][_0x56c720]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x340d96['imageSmoothingEnabled'] = _0x416cdb['imageSmoothingEnabled'] = ![];
    if (_0x4b743e)
        _0x4b743e['imageSmoothingEnabled'] = ![];
    _0x340d96['clearRect'](0x0, 0x0, _0x474e7c['MAP']['chunkSize'], _0x474e7c['MAP']['chunkSize']);
    _0x416cdb['clearRect'](0x0, 0x0, _0x474e7c['MAP']['chunkSize'], _0x474e7c['MAP']['chunkSize']);
    if (_0x4b743e)
        _0x4b743e['clearRect'](0x0, 0x0, _0x474e7c['MAP']['chunkSize'], _0x474e7c['MAP']['chunkSize']);
    const _0x1748d1 = Math['floor'](_0x56c720 * _0x474e7c['MAP']['chunkSize'] / _0x474e7c['MAP']['tileSize']);
    const _0x481dc3 = Math['ceil']((_0x56c720 + 0x1) * _0x474e7c['MAP']['chunkSize'] / _0x474e7c['MAP']['tileSize']);
    const _0x445a8e = Math['floor'](_0x23c2ad * _0x474e7c['MAP']['chunkSize'] / _0x474e7c['MAP']['tileSize']);
    const _0x367703 = Math['ceil']((_0x23c2ad + 0x1) * _0x474e7c['MAP']['chunkSize'] / _0x474e7c['MAP']['tileSize']);
    const _0x26841d = 0.5;
    const _0x4871e0 = _0x474e7c['MAP']['tileSize'] - _0x26841d * 0x2;
    _0x474e7c['MAP']['layers']['forEach'](_0x57bc2f => {
        const _0x20360e = _0x57bc2f['name'] === 'walls';
        const _0x503e76 = _0x57bc2f['name'] === 'trees' ? _0x416cdb : _0x20360e ? _0x4b743e || _0x340d96 : _0x340d96;
        for (let _0x3ac03e = Math['max'](0x0, _0x445a8e); _0x3ac03e < Math['min'](_0x474e7c['MAP']['rows'], _0x367703); _0x3ac03e++) {
            for (let _0x4c0582 = Math['max'](0x0, _0x1748d1); _0x4c0582 < Math['min'](_0x474e7c['MAP']['columns'], _0x481dc3); _0x4c0582++) {
                let _0x2ca9c2 = _0x57bc2f['data'][_0x3ac03e * _0x474e7c['MAP']['columns'] + _0x4c0582];
                if (_0x57bc2f['name'] === 'floor2' && _0x474e7c['MAP']['doors'] && _0x474e7c['MAP']['doors'][_0x3ac03e * _0x474e7c['MAP']['columns'] + _0x4c0582]) {
                    _0x2ca9c2 = 0x2;
                }
                if (_0x2ca9c2 > 0x0) {
                    const _0x49b453 = _0x2ca9c2 - 0x1;
                    const _0x3a3e8b = _0x49b453 % _0x474e7c['MAP']['tilesetCols'] * _0x474e7c['MAP']['tileSize'] + _0x26841d;
                    const _0x533a2a = Math['floor'](_0x49b453 / _0x474e7c['MAP']['tilesetCols']) * _0x474e7c['MAP']['tileSize'] + _0x26841d;
                    const _0x4a5a1b = _0x4c0582 * _0x474e7c['MAP']['tileSize'] - _0x56c720 * _0x474e7c['MAP']['chunkSize'];
                    const _0x3aa6cb = _0x3ac03e * _0x474e7c['MAP']['tileSize'] - _0x23c2ad * _0x474e7c['MAP']['chunkSize'];
                    if (_0x2ca9c2 === 0x4) {
                        const _0x40865c = 0x1;
                        const _0x3c30e5 = _0x40865c % _0x474e7c['MAP']['tilesetCols'] * _0x474e7c['MAP']['tileSize'] + _0x26841d;
                        const _0x43d4b1 = Math['floor'](_0x40865c / _0x474e7c['MAP']['tilesetCols']) * _0x474e7c['MAP']['tileSize'] + _0x26841d;
                        _0x340d96['drawImage'](_0x398141, _0x3c30e5, _0x43d4b1, _0x4871e0, _0x4871e0, _0x4a5a1b, _0x3aa6cb, _0x474e7c['MAP']['tileSize'], _0x474e7c['MAP']['tileSize']);
                        let _0x20096c = _0x474e7c['MAP']['doors'] ? _0x474e7c['MAP']['doors'][_0x3ac03e * _0x474e7c['MAP']['columns'] + _0x4c0582] : null;
                        if (!_0x20096c) {
                            const _0x4f89ae = _0x474e7c['MAP']['layers']['find'](_0x46d20d => _0x46d20d['name'] === 'walls');
                            const _0x6741da = _0x3ac03e > 0x0 && _0x4f89ae && _0x4f89ae['data'][(_0x3ac03e - 0x1) * _0x474e7c['MAP']['columns'] + _0x4c0582] > 0x0;
                            const _0x5bc77a = _0x3ac03e < _0x474e7c['MAP']['rows'] - 0x1 && _0x4f89ae && _0x4f89ae['data'][(_0x3ac03e + 0x1) * _0x474e7c['MAP']['columns'] + _0x4c0582] > 0x0;
                            const _0x3eb8c4 = _0x4c0582 > 0x0 && _0x4f89ae && _0x4f89ae['data'][_0x3ac03e * _0x474e7c['MAP']['columns'] + _0x4c0582 - 0x1] > 0x0;
                            const _0x4a05d0 = _0x4c0582 < _0x474e7c['MAP']['columns'] - 0x1 && _0x4f89ae && _0x4f89ae['data'][_0x3ac03e * _0x474e7c['MAP']['columns'] + _0x4c0582 + 0x1] > 0x0;
                            if (_0x3eb8c4 && _0x4a05d0)
                                _0x20096c = _0x3ac03e < _0x474e7c['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x6741da && _0x5bc77a)
                                _0x20096c = _0x4c0582 < _0x474e7c['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x1038f9 = 0x0;
                        if (_0x20096c === 'bottom')
                            _0x1038f9 = Math['PI'] / 0x2;
                        else if (_0x20096c === 'left')
                            _0x1038f9 = Math['PI'];
                        else if (_0x20096c === 'top')
                            _0x1038f9 = -Math['PI'] / 0x2;
                        else if (_0x20096c === 'right')
                            _0x1038f9 = 0x0;
                        if (_0x1038f9 !== 0x0) {
                            _0x503e76['save']();
                            _0x503e76['translate'](_0x4a5a1b + _0x474e7c['MAP']['tileSize'] / 0x2, _0x3aa6cb + _0x474e7c['MAP']['tileSize'] / 0x2);
                            _0x503e76['rotate'](_0x1038f9);
                            _0x503e76['drawImage'](_0x398141, _0x3a3e8b, _0x533a2a, _0x4871e0, _0x4871e0, -_0x474e7c['MAP']['tileSize'] / 0x2, -_0x474e7c['MAP']['tileSize'] / 0x2, _0x474e7c['MAP']['tileSize'], _0x474e7c['MAP']['tileSize']);
                            _0x503e76['restore']();
                        } else {
                            _0x503e76['drawImage'](_0x398141, _0x3a3e8b, _0x533a2a, _0x4871e0, _0x4871e0, _0x4a5a1b, _0x3aa6cb, _0x474e7c['MAP']['tileSize'], _0x474e7c['MAP']['tileSize']);
                        }
                    } else {
                        _0x503e76['drawImage'](_0x398141, _0x3a3e8b, _0x533a2a, _0x4871e0, _0x4871e0, _0x4a5a1b, _0x3aa6cb, _0x474e7c['MAP']['tileSize'], _0x474e7c['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x5978eb() {
    _0x398141['crossOrigin'] = 'Anonymous';
    _0x398141['onload'] = () => {
        _0x474e7c['MAP']['tilesetCols'] = 0x3;
        if (_0x474e7c['MAP']['columns'] > 0x0 && _0x474e7c['MAP']['layers'] && _0x474e7c['MAP']['layers']['length'] > 0x0) {
            _0x2b380f();
        }
        _0x3196ad();
    };
    _0x398141['onerror'] = () => {
        _0x474e7c['MAP']['tilesetCols'] = 0x1;
        _0x3196ad();
    };
    _0x398141['src'] = 'assets/tilesheet.png';
    _0x516ee0['crossOrigin'] = 'Anonymous';
    _0x516ee0['onload'] = _0x3196ad;
    _0x516ee0['onerror'] = () => {
        _0x3196ad();
    };
    _0x516ee0['src'] = 'assets/center.png';
    _0x49ef3f['crossOrigin'] = 'Anonymous';
    _0x49ef3f['onload'] = _0x3196ad;
    _0x49ef3f['onerror'] = () => {
        _0x3196ad();
    };
    _0x49ef3f['src'] = 'assets/table.png';
}
function _0x3196ad() {
    _0x474e7c['SYSTEM']['assetsLoaded']++;
    if (_0x474e7c['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x474e7c['MAP']['columns'] > 0x0 && _0x474e7c['MAP']['layers'] && _0x474e7c['MAP']['layers']['length'] > 0x0) {
            _0x2b380f();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x371f38();
    }
}
function _0x1a0d13(_0x33f48a, _0x592982) {
    if (!_0x30628a || !_0x523d40)
        return;
    const _0x30a774 = _0x33f48a / _0x474e7c['SYSTEM']['viewScale'] + _0x474e7c['CAMERA']['x'];
    const _0x324b9f = _0x592982 / _0x474e7c['SYSTEM']['viewScale'] + _0x474e7c['CAMERA']['y'];
    const _0x2efd55 = Math['floor'](_0x30a774 / _0x474e7c['MAP']['tileSize']);
    const _0x45b1dc = Math['floor'](_0x324b9f / _0x474e7c['MAP']['tileSize']);
    if (_0x2efd55 >= 0x0 && _0x2efd55 < _0x474e7c['MAP']['columns'] && _0x45b1dc >= 0x0 && _0x45b1dc < _0x474e7c['MAP']['rows'])
        _0x523d40['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x474e7c['EDITOR']['selectedLayer'],
            'col': _0x2efd55,
            'row': _0x45b1dc,
            'gid': _0x474e7c['EDITOR']['selectedTileGid']
        }));
}
function _0x4e3d56() {
    const _0x39dedf = document['getElementById']('palette');
    if (!_0x39dedf || _0x39dedf['children']['length'] > 0x0)
        return;
    const _0x59d831 = 0x40;
    const _0x392959 = _0x398141;
    const _0x2085a4 = document['createElement']('div');
    _0x2085a4['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x1f1461 = document['createElement']('canvas');
    _0x1f1461['width'] = 0xc0;
    _0x1f1461['height'] = 0xa0;
    _0x1f1461['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x2085a4['appendChild'](_0x1f1461);
    const _0xb978d1 = document['createElement']('div');
    _0xb978d1['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x2085a4['appendChild'](_0xb978d1);
    let _0x3d14af = 0x0, _0x15de95 = 0x0;
    let _0x7f8ed8 = ![], _0x4cdfb9 = 0x0, _0x29c5ae = 0x0, _0x4e2401 = 0x0, _0x3fe496 = 0x0;
    function _0x1a7438() {
        const _0x1be619 = _0x1f1461['getContext']('2d');
        _0x1be619['clearRect'](0x0, 0x0, _0x1f1461['width'], _0x1f1461['height']);
        _0x1be619['imageSmoothingEnabled'] = ![];
        if (_0x392959['complete'] && _0x392959['naturalWidth'] > 0x0) {
            _0x1be619['drawImage'](_0x392959, _0x3d14af, _0x15de95, _0x1f1461['width'], _0x1f1461['height'], 0x0, 0x0, _0x1f1461['width'], _0x1f1461['height']);
        }
        _0x1be619['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x1be619['lineWidth'] = 0x1;
        const _0x42060a = Math['floor'](_0x3d14af / _0x59d831);
        const _0x142ba7 = Math['floor'](_0x15de95 / _0x59d831);
        for (let _0x33723e = _0x42060a; _0x33723e <= _0x42060a + Math['ceil'](_0x1f1461['width'] / _0x59d831) + 0x1; _0x33723e++) {
            const _0x5a12fc = _0x33723e * _0x59d831 - _0x3d14af;
            _0x1be619['beginPath']();
            _0x1be619['moveTo'](_0x5a12fc, 0x0);
            _0x1be619['lineTo'](_0x5a12fc, _0x1f1461['height']);
            _0x1be619['stroke']();
        }
        for (let _0x5efa56 = _0x142ba7; _0x5efa56 <= _0x142ba7 + Math['ceil'](_0x1f1461['height'] / _0x59d831) + 0x1; _0x5efa56++) {
            const _0x4a908c = _0x5efa56 * _0x59d831 - _0x15de95;
            _0x1be619['beginPath']();
            _0x1be619['moveTo'](0x0, _0x4a908c);
            _0x1be619['lineTo'](_0x1f1461['width'], _0x4a908c);
            _0x1be619['stroke']();
        }
    }
    function _0x3beba6() {
        const _0x5c18eb = Math['max'](0x1, Math['ceil'](_0x392959['naturalWidth'] / _0x59d831));
        const _0x53f23f = _0x474e7c['EDITOR']['selectedTileGid'];
        if (_0x53f23f <= 0x0) {
            _0xb978d1['style']['display'] = 'none';
            return;
        }
        const _0x52efae = _0x53f23f - 0x1;
        const _0x2a7b17 = _0x52efae % _0x5c18eb;
        const _0xb3653d = Math['floor'](_0x52efae / _0x5c18eb);
        const _0x161b24 = _0x2a7b17 * _0x59d831 - _0x3d14af;
        const _0x2d0889 = _0xb3653d * _0x59d831 - _0x15de95;
        _0xb978d1['style']['display'] = 'block';
        _0xb978d1['style']['left'] = _0x161b24 + 'px';
        _0xb978d1['style']['top'] = _0x2d0889 + 'px';
    }
    _0x392959['onload'] = () => {
        _0x1a7438();
        _0x3beba6();
    };
    if (_0x392959['complete'] && _0x392959['naturalWidth'] > 0x0) {
        _0x1a7438();
        _0x3beba6();
    }
    _0x2085a4['addEventListener']('mousedown', _0x2fc909 => {
        if (_0x2fc909['button'] === 0x0) {
            _0x7f8ed8 = !![];
            _0x4cdfb9 = _0x2fc909['clientX'];
            _0x29c5ae = _0x2fc909['clientY'];
            _0x4e2401 = _0x3d14af;
            _0x3fe496 = _0x15de95;
            _0x2085a4['style']['cursor'] = 'grabbing';
            _0x2fc909['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x1352ab => {
        if (!_0x7f8ed8)
            return;
        const _0x35b4ef = _0x4cdfb9 - _0x1352ab['clientX'];
        const _0x4ede56 = _0x29c5ae - _0x1352ab['clientY'];
        const _0x4a31a8 = Math['max'](0x0, _0x392959['naturalWidth'] - _0x1f1461['width']);
        const _0x586436 = Math['max'](0x0, _0x392959['naturalHeight'] - _0x1f1461['height']);
        _0x3d14af = Math['max'](0x0, Math['min'](_0x4a31a8, _0x4e2401 + _0x35b4ef));
        _0x15de95 = Math['max'](0x0, Math['min'](_0x586436, _0x3fe496 + _0x4ede56));
        _0x1a7438();
        _0x3beba6();
    });
    window['addEventListener']('mouseup', _0x520f43 => {
        if (_0x7f8ed8) {
            _0x7f8ed8 = ![];
            _0x2085a4['style']['cursor'] = 'grab';
        }
    });
    _0x2085a4['addEventListener']('click', _0xe8116b => {
        const _0x450118 = _0x2085a4['getBoundingClientRect']();
        const _0x1bb061 = _0xe8116b['clientX'] - _0x450118['left'] + _0x3d14af;
        const _0x38fb42 = _0xe8116b['clientY'] - _0x450118['top'] + _0x15de95;
        const _0x30fab0 = Math['max'](0x1, Math['ceil'](_0x392959['naturalWidth'] / _0x59d831));
        const _0x37e287 = Math['floor'](_0x1bb061 / _0x59d831);
        const _0x572c56 = Math['floor'](_0x38fb42 / _0x59d831);
        const _0x9bfcb0 = _0x572c56 * _0x30fab0 + _0x37e287 + 0x1;
        _0x474e7c['EDITOR']['selectedTileGid'] = _0x9bfcb0;
        _0x3beba6();
    });
    _0x39dedf['appendChild'](_0x2085a4);
    const _0x3dde9b = document['createElement']('div');
    _0x3dde9b['className'] = 'tile-btn\x20eraser-btn';
    _0x3dde9b['title'] = 'Eraser\x20(gid\x200)';
    _0x3dde9b['onclick'] = () => {
        _0x474e7c['EDITOR']['selectedTileGid'] = 0x0;
        _0xb978d1['style']['display'] = 'none';
    };
    _0x39dedf['appendChild'](_0x3dde9b);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x474e7c['EDITOR']['enabled'] = !_0x474e7c['EDITOR']['enabled'];
        const _0x26e0d4 = document['getElementById']('editor-tools');
        if (_0x474e7c['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x26e0d4['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x26e0d4['style']['display'] = 'none';
        }
    });
    const _0x2f0ab8 = document['getElementById']('start-game-btn');
    if (_0x2f0ab8) {
        _0x2f0ab8['addEventListener']('click', () => {
            if (_0x523d40)
                _0x523d40['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x137fbf = document['getElementById']('rolelist-toggle-btn');
    if (_0x137fbf) {
        let _0x531ae3 = 'subalignments';
        _0x137fbf['addEventListener']('click', () => {
            if (_0x531ae3 === 'subalignments')
                _0x531ae3 = 'precise';
            else if (_0x531ae3 === 'precise')
                _0x531ae3 = 'off';
            else
                _0x531ae3 = 'subalignments';
            _0x137fbf['innerText'] = 'Role\x20List:\x20' + _0x531ae3['charAt'](0x0)['toUpperCase']() + _0x531ae3['slice'](0x1);
            if (_0x523d40)
                _0x523d40['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x531ae3
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x2dd8f4 => {
        if (_0x2dd8f4['id'] === 'editor-toggle-btn' || _0x2dd8f4['id'] === 'start-game-btn' || _0x2dd8f4['id'] === 'rolelist-toggle-btn')
            return;
        _0x2dd8f4['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0xc35111 => _0xc35111['classList']['remove']('active'));
            _0x2dd8f4['classList']['add']('active');
            _0x474e7c['EDITOR']['selectedLayer'] = _0x2dd8f4['dataset']['layer'];
        });
    });
}
function _0x3c024d(_0x42a912) {
    if (_0x523d40)
        _0x523d40['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x42a912
        }));
}
function _0x446397(_0x147c0d) {
    if (_0x523d40)
        _0x523d40['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x147c0d
        }));
}
function _0x116bec(_0x116c14, _0x5b0bca, _0xdc561f, _0x1b696c) {
    const _0x557d79 = document['getElementById']('admin-panel');
    if (_0x557d79)
        _0x557d79['remove']();
    if (_0x557d79 && _0x557d79['dataset']['target'] === String(_0x116c14))
        return;
    const _0x4bac65 = document['createElement']('div');
    _0x4bac65['id'] = 'admin-panel';
    _0x4bac65['dataset']['target'] = String(_0x116c14);
    _0x4bac65['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x44e6ca = document['createElement']('div');
    _0x44e6ca['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x44e6ca['textContent'] = _0x5b0bca;
    _0x4bac65['appendChild'](_0x44e6ca);
    const _0x3eccd5 = document['createElement']('button');
    _0x3eccd5['textContent'] = 'Kick';
    _0x3eccd5['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x3eccd5['onmouseenter'] = () => _0x3eccd5['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x3eccd5['onmouseleave'] = () => _0x3eccd5['style']['background'] = 'transparent';
    _0x3eccd5['onclick'] = () => {
        _0x3c024d(_0x116c14);
        _0x4bac65['remove']();
    };
    _0x4bac65['appendChild'](_0x3eccd5);
    const _0x5ab3a2 = document['createElement']('button');
    _0x5ab3a2['textContent'] = 'Ban';
    _0x5ab3a2['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x5ab3a2['onmouseenter'] = () => _0x5ab3a2['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x5ab3a2['onmouseleave'] = () => _0x5ab3a2['style']['background'] = 'transparent';
    _0x5ab3a2['onclick'] = () => {
        _0x446397(_0x116c14);
        _0x4bac65['remove']();
    };
    _0x4bac65['appendChild'](_0x5ab3a2);
    document['body']['appendChild'](_0x4bac65);
    const _0x1c37e6 = _0x4bac65['offsetWidth'] || 0x91;
    const _0x780a8b = _0x4bac65['offsetHeight'] || 0x50;
    let _0x1b9402 = _0xdc561f - _0x1c37e6;
    let _0x591b3d = _0x1b696c;
    if (_0x1b9402 < 0x4)
        _0x1b9402 = _0xdc561f;
    if (_0x591b3d + _0x780a8b > window['innerHeight'] - 0x4)
        _0x591b3d = window['innerHeight'] - _0x780a8b - 0x4;
    _0x4bac65['style']['left'] = _0x1b9402 + 'px';
    _0x4bac65['style']['top'] = _0x591b3d + 'px';
    const _0x1319b9 = _0x5dc4de => {
        if (!_0x4bac65['contains'](_0x5dc4de['target'])) {
            _0x4bac65['remove']();
            document['removeEventListener']('mousedown', _0x1319b9);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x1319b9), 0x0);
}
let _0x5bc866 = '';
function _0x2bd18c() {
    const _0x325e37 = document['getElementById']('leaderboard-list');
    if (!_0x325e37)
        return;
    let _0x3fb28f = _0x4d92e1 + '|' + _0x30628a + '|' + _0xea442['isDead'] + '|' + _0x2d7c59['size'];
    for (const _0x5604dc in _0x2a4a07) {
        const _0x518dd7 = _0x2a4a07[_0x5604dc];
        _0x3fb28f += '|' + _0x5604dc + ':' + _0x518dd7['name'] + ':' + !!_0x518dd7['isOwner'] + ':' + !!_0x518dd7['isDead'] + ':' + _0x2d7c59['has'](parseInt(_0x5604dc));
    }
    if (_0x3fb28f === _0x5bc866)
        return;
    _0x5bc866 = _0x3fb28f;
    _0x325e37['innerHTML'] = '';
    const _0x119b19 = document['createElement']('div');
    _0x119b19['className'] = 'leaderboard-entry';
    const _0x29054c = document['createElement']('span');
    _0x29054c['textContent'] = _0x4d92e1 + (_0x30628a ? '\x20[🗝️]' : '');
    if (_0x2d7c59['has'](_0x256129) && !_0xea442['isDead']) {
        _0x29054c['style']['color'] = '#cc88ff';
    }
    _0x119b19['appendChild'](_0x29054c);
    _0x325e37['appendChild'](_0x119b19);
    for (const _0x53b740 in _0x2a4a07) {
        const _0x166f99 = document['createElement']('div');
        _0x166f99['className'] = 'leaderboard-entry';
        const _0x589b84 = document['createElement']('span');
        _0x589b84['textContent'] = _0x2a4a07[_0x53b740]['name'] + (_0x2a4a07[_0x53b740]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x2d7c59['has'](parseInt(_0x53b740)) && !_0x2a4a07[_0x53b740]['isDead']) {
            _0x589b84['style']['color'] = '#cc88ff';
        }
        _0x166f99['appendChild'](_0x589b84);
        if (_0x30628a && !_0x2a4a07[_0x53b740]['isOwner']) {
            const _0x5ab0ac = _0x2a4a07[_0x53b740]['id'];
            const _0x184db3 = _0x2a4a07[_0x53b740]['name'];
            _0x166f99['style']['cursor'] = 'context-menu';
            _0x166f99['addEventListener']('contextmenu', _0x29a40c => {
                _0x29a40c['preventDefault']();
                _0x29a40c['stopPropagation']();
                _0x116bec(_0x5ab0ac, _0x184db3, _0x29a40c['clientX'], _0x29a40c['clientY']);
            });
        }
        _0x325e37['appendChild'](_0x166f99);
    }
}
window['addEventListener']('resize', _0x371f38);
function _0x371f38() {
    _0x29ca33['width'] = window['innerWidth'];
    _0x29ca33['height'] = window['innerHeight'];
    _0x474e7c['SYSTEM']['viewScale'] = Math['max'](_0x29ca33['width'] / _0x2c258f, _0x29ca33['height'] / _0x59ce13);
    _0x474e7c['CAMERA']['width'] = _0x29ca33['width'] / _0x474e7c['SYSTEM']['viewScale'];
    _0x474e7c['CAMERA']['height'] = _0x29ca33['height'] / _0x474e7c['SYSTEM']['viewScale'];
    _0x37866c['imageSmoothingEnabled'] = ![];
}
function _0x5eaebc(_0x5aa91d) {
    if (_0x5aa91d['ctrlKey'] || _0x5aa91d['metaKey']) {
        if (_0x5aa91d['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x5aa91d['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x5aa91d['code'])) {
            _0x5aa91d['preventDefault']();
            _0x5aa91d['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x5eaebc, { 'passive': ![] });
window['addEventListener']('keydown', _0x5eaebc, { 'passive': ![] });
window['addEventListener']('keydown', _0x40f14e => {
    const _0x559503 = _0x40f14e['key']['toLowerCase']();
    if (_0x559503 === 'tab') {
        _0x40f14e['preventDefault']();
        const _0x280ae2 = document['getElementById']('will-ui');
        const _0x8ca355 = document['getElementById']('will-input');
        if (_0x280ae2['style']['display'] === 'flex') {
            _0x280ae2['style']['display'] = 'none';
            if (_0x474e7c['GAME_STATE'] !== 'NIGHT' && _0x523d40)
                _0x523d40['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x8ca355['value']
                }));
            _0x8ca355['blur']();
        } else {
            if (_0x474e7c['GAME_STATE'] === 'NIGHT') {
                _0x2987f4('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x280ae2['style']['display'] = 'flex';
            _0x8ca355['focus']();
            for (let _0x384d4e in _0x474e7c['INPUTS']['keys'])
                _0x474e7c['INPUTS']['keys'][_0x384d4e] = ![];
        }
        return;
    }
    if (_0x40f14e['key'] === 'Enter') {
        if (_0x1e89c5) {
            const _0x5db27e = document['getElementById']('play-btn');
            if (_0x5db27e)
                _0x5db27e['click']();
            return;
        }
        if (!_0x523d40 || _0x523d40['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x49989d = document['getElementById']('chat-ui');
        const _0x4d5393 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x4d5393) {
            const _0x5175b1 = _0x4d5393['value']['trim']();
            if (_0x5175b1['length'] > 0x0) {
                _0x523d40['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x5175b1
                }));
            }
            _0x4d5393['value'] = '';
            _0x49989d['style']['display'] = 'none';
            _0x4d5393['blur']();
        } else {
            _0x49989d['style']['display'] = 'block';
            _0x4d5393['focus']();
            for (let _0x66a1c7 in _0x474e7c['INPUTS']['keys'])
                _0x474e7c['INPUTS']['keys'][_0x66a1c7] = ![];
        }
        _0x40f14e['preventDefault']();
        return;
    }
    if (_0x40f14e['key'] === 'Escape') {
        const _0x596108 = document['getElementById']('role-index-modal');
        if (_0x596108 && _0x596108['style']['display'] === 'flex') {
            _0x596108['style']['display'] = 'none';
            return;
        }
        const _0x160f60 = document['getElementById']('guide-ui');
        if (_0x160f60 && _0x160f60['style']['display'] === 'flex') {
            _0x160f60['style']['display'] = 'none';
            return;
        }
        const _0x38ff51 = document['getElementById']('ability-ui');
        if (_0x38ff51 && _0x38ff51['style']['display'] === 'block') {
            _0x38ff51['style']['display'] = 'none';
            return;
        }
        const _0x30620c = document['getElementById']('settings-panel');
        if (_0x30620c && _0x30620c['style']['display'] === 'block') {
            _0x30620c['style']['display'] = 'none';
            return;
        }
        const _0x5ea331 = document['getElementById']('mayor-confirm-dialog');
        if (_0x5ea331 && _0x5ea331['style']['display'] === 'flex') {
            _0x5ea331['style']['display'] = 'none';
            return;
        }
        const _0x2e31e8 = document['getElementById']('target-chooser-ui');
        if (_0x2e31e8 && _0x2e31e8['style']['display'] === 'flex') {
            _0x2e31e8['style']['display'] = 'none';
            return;
        }
        const _0x581c53 = document['getElementById']('chat-ui');
        const _0x535702 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x535702) {
            _0x535702['value'] = '';
            _0x581c53['style']['display'] = 'none';
            _0x535702['blur']();
            _0x40f14e['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x474e7c['INPUTS']['keys']['hasOwnProperty'](_0x559503))
            _0x474e7c['INPUTS']['keys'][_0x559503] = !![];
        if (!_0x523d40 || _0x523d40['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x559503 === 'h' && !_0x40f14e['repeat']) {
            const _0x5ce173 = document['getElementById']('guide-ui');
            if (_0x5ce173) {
                _0x5ce173['style']['display'] = _0x5ce173['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x559503 === 't' && !_0x40f14e['repeat']) {
            if (_0xea442['isDead'])
                return;
            if (_0x3b87ae === 'Mayor') {
                if (_0x2d7c59['has'](_0x256129)) {
                    _0x2987f4('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x186fc0 = document['getElementById']('mayor-confirm-dialog');
                if (_0x186fc0)
                    _0x186fc0['style']['display'] = 'flex';
                return;
            }
            if (_0x474e7c['GAME_STATE'] === 'NIGHT') {
                if (!_0x474e7c['NIGHT_ABILITY_OPEN']) {
                    _0x2987f4('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x40dc5a = document['getElementById']('ability-ui');
                if (_0x40dc5a) {
                    if (_0x40dc5a['style']['display'] === 'block') {
                        _0x40dc5a['style']['display'] = 'none';
                    } else {
                        _0x3221d9();
                        _0x40dc5a['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x474e7c['GAME_STATE'] === 'DAY_DISCUSS' || _0x474e7c['GAME_STATE'] === 'DAY_VOTE') {
                _0x2987f4('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x559503 === 'e' && !_0xea442['isDead']) {
            const _0x228c95 = Date['now']();
            if (!window['_lastDoorSend'] || _0x228c95 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x228c95;
                _0x523d40['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x501cab => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x53da77 = _0x501cab['key']['toLowerCase']();
        if (_0x474e7c['INPUTS']['keys']['hasOwnProperty'](_0x53da77))
            _0x474e7c['INPUTS']['keys'][_0x53da77] = ![];
    }
});
window['addEventListener']('mousemove', _0xbe93a => {
    _0x474e7c['INPUTS']['mouseX'] = _0xbe93a['clientX'];
    _0x474e7c['INPUTS']['mouseY'] = _0xbe93a['clientY'];
    if (_0x474e7c['INPUTS']['isMouseDown'] && _0x474e7c['EDITOR']['enabled']) {
        _0x1a0d13(_0xbe93a['clientX'], _0xbe93a['clientY']);
    }
});
window['addEventListener']('mousedown', _0x506f80 => {
    if (_0x506f80['target']['closest']('#editor-ui') || _0x506f80['target']['closest']('#leaderboard-ui') || _0x506f80['target']['closest']('#role-index-btn-wrap') || _0x506f80['target']['closest']('#role-index-modal') || _0x506f80['target']['closest']('#chat-log-ui') || _0x506f80['target']['closest']('#target-chooser-ui') || _0x506f80['target']['closest']('#guide-ui') || _0x506f80['target']['closest']('#role-list-ui') || _0x506f80['target']['closest']('#ability-ui') || _0x506f80['target']['closest']('#settings-panel') || _0x506f80['target']['closest']('#mayor-confirm-dialog') || _0x506f80['target']['closest']('#mobile-action-bar') || _0x506f80['target']['closest']('#mobile-top-bar') || _0x506f80['target']['closest']('#mobile-joystick-zone') || _0x506f80['target']['closest']('#mobile-chat-overlay') || _0x506f80['target']['closest']('#will-ui') || _0x506f80['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x506f80['button'] === 0x0) {
        _0x474e7c['INPUTS']['isMouseDown'] = !![];
        if (_0x474e7c['EDITOR']['enabled'])
            _0x1a0d13(_0x506f80['clientX'], _0x506f80['clientY']);
    }
});
window['addEventListener']('mouseup', _0x567fcf => {
    _0x474e7c['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x313a53 => {
    if (_0x313a53['target']['closest']('#settings-btn'))
        return;
    const _0x578256 = document['getElementById']('leaderboard-list');
    const _0x476242 = document['getElementById']('leaderboard-toggle');
    if (_0x578256['style']['display'] === 'none') {
        _0x578256['style']['display'] = 'flex';
        _0x476242['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x578256['style']['display'] = 'none';
        _0x476242['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x5767c2 = document['getElementById']('close-target-btn');
if (_0x5767c2) {
    _0x5767c2['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x41ab38 = document['getElementById']('close-guide-btn');
if (_0x41ab38) {
    _0x41ab38['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x54300d = document['getElementById']('role-list-header');
if (_0x54300d) {
    _0x54300d['addEventListener']('click', () => {
        const _0x47d7d9 = document['getElementById']('role-list-items');
        const _0x441176 = document['getElementById']('role-list-toggle');
        if (_0x47d7d9['style']['display'] === 'none') {
            _0x47d7d9['style']['display'] = 'flex';
            _0x441176['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x47d7d9['style']['display'] = 'none';
            _0x441176['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x4aa835() {
    const _0x55e7f5 = document['getElementById']('mobile-joystick-zone');
    const _0x48df5e = document['getElementById']('mobile-joystick-base');
    const _0x4ad9d8 = document['getElementById']('mobile-joystick-knob');
    if (_0x55e7f5 && _0x48df5e && _0x4ad9d8) {
        const _0xb6bc3a = 0x3e;
        const _0x138394 = (_0x1fa176, _0x1df617) => {
            const _0x5ea740 = _0x48df5e['getBoundingClientRect']();
            const _0x49231c = _0x5ea740['left'] + _0x5ea740['width'] / 0x2;
            const _0x1113a3 = _0x5ea740['top'] + _0x5ea740['height'] / 0x2;
            const _0x41df8a = _0x1fa176 - _0x49231c;
            const _0x7fa4b8 = _0x1df617 - _0x1113a3;
            const _0xa4756e = Math['hypot'](_0x41df8a, _0x7fa4b8);
            if (_0xa4756e === 0x0) {
                _0x591266 = 0x0;
                _0xa82f77 = 0x0;
                _0x52014a = ![];
                _0x4ad9d8['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x36c007 = Math['min'](_0xa4756e, _0xb6bc3a);
            const _0x9992c3 = _0x41df8a / _0xa4756e * _0x36c007;
            const _0x5f0cfe = _0x7fa4b8 / _0xa4756e * _0x36c007;
            _0x591266 = _0x9992c3 / _0xb6bc3a;
            _0xa82f77 = _0x5f0cfe / _0xb6bc3a;
            _0x52014a = _0xa4756e >= _0xb6bc3a * 0.75;
            _0x4ad9d8['style']['transform'] = 'translate(' + _0x9992c3 + 'px,\x20' + _0x5f0cfe + 'px)';
        };
        const _0x31931a = _0xfc1f57 => {
            for (let _0x169ddb = 0x0; _0x169ddb < _0xfc1f57['changedTouches']['length']; _0x169ddb++) {
                const _0x5495c8 = _0xfc1f57['changedTouches'][_0x169ddb];
                if (_0x3d5222 === null) {
                    _0x3d5222 = _0x5495c8['identifier'];
                    _0x493780 = !![];
                    _0x138394(_0x5495c8['clientX'], _0x5495c8['clientY']);
                    break;
                }
            }
        };
        const _0x34838e = _0x361f09 => {
            for (let _0x25a472 = 0x0; _0x25a472 < _0x361f09['changedTouches']['length']; _0x25a472++) {
                const _0x3d5ef4 = _0x361f09['changedTouches'][_0x25a472];
                if (_0x3d5ef4['identifier'] === _0x3d5222) {
                    _0x138394(_0x3d5ef4['clientX'], _0x3d5ef4['clientY']);
                    break;
                }
            }
        };
        const _0x4d008d = _0x4540fa => {
            for (let _0xa3841f = 0x0; _0xa3841f < _0x4540fa['changedTouches']['length']; _0xa3841f++) {
                const _0x4f4ac6 = _0x4540fa['changedTouches'][_0xa3841f];
                if (_0x4f4ac6['identifier'] === _0x3d5222) {
                    _0x3d5222 = null;
                    _0x493780 = ![];
                    _0x591266 = 0x0;
                    _0xa82f77 = 0x0;
                    _0x52014a = ![];
                    _0x4ad9d8['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x55e7f5['addEventListener']('touchstart', _0x297399 => {
            _0x297399['preventDefault']();
            _0x31931a(_0x297399);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x34838e, { 'passive': !![] });
        window['addEventListener']('touchend', _0x4d008d, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x4d008d, { 'passive': !![] });
    }
    const _0x31a2d8 = (_0x91daa4, _0x289f96) => {
        const _0x842842 = _0x91daa4 / _0x474e7c['SYSTEM']['viewScale'];
        const _0x7e1668 = _0x289f96 / _0x474e7c['SYSTEM']['viewScale'];
        const _0x50153c = _0xea442['x'] - _0x474e7c['CAMERA']['x'] + _0xea442['width'] / 0x2;
        const _0x439b7b = _0xea442['y'] - _0x474e7c['CAMERA']['y'] + _0xea442['height'] / 0x2;
        _0x18095b = Math['atan2'](_0x7e1668 - _0x439b7b, _0x842842 - _0x50153c);
        _0x3b576d = !![];
        _0x474e7c['INPUTS']['mouseX'] = _0x91daa4;
        _0x474e7c['INPUTS']['mouseY'] = _0x289f96;
    };
    _0x29ca33['addEventListener']('touchstart', _0x55dfab => {
        if (_0x1e89c5)
            return;
        for (let _0x24c88c = 0x0; _0x24c88c < _0x55dfab['changedTouches']['length']; _0x24c88c++) {
            const _0x46aced = _0x55dfab['changedTouches'][_0x24c88c];
            if (_0x46aced['identifier'] !== _0x3d5222 && _0x75940d === null) {
                _0x75940d = _0x46aced['identifier'];
                _0x31a2d8(_0x46aced['clientX'], _0x46aced['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x29ca33['addEventListener']('touchmove', _0x5c1ca6 => {
        if (_0x1e89c5)
            return;
        for (let _0x54f2fa = 0x0; _0x54f2fa < _0x5c1ca6['changedTouches']['length']; _0x54f2fa++) {
            const _0x419f63 = _0x5c1ca6['changedTouches'][_0x54f2fa];
            if (_0x419f63['identifier'] === _0x75940d) {
                _0x31a2d8(_0x419f63['clientX'], _0x419f63['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x112aa7 = _0x487f9f => {
        for (let _0xf29b0b = 0x0; _0xf29b0b < _0x487f9f['changedTouches']['length']; _0xf29b0b++) {
            const _0x29c95f = _0x487f9f['changedTouches'][_0xf29b0b];
            if (_0x29c95f['identifier'] === _0x75940d) {
                _0x75940d = null;
                _0x3b576d = ![];
                break;
            }
        }
    };
    _0x29ca33['addEventListener']('touchend', _0x112aa7, { 'passive': !![] });
    _0x29ca33['addEventListener']('touchcancel', _0x112aa7, { 'passive': !![] });
    const _0x53bb94 = document['getElementById']('mob-sprint-btn');
    if (_0x53bb94) {
        _0x53bb94['addEventListener']('click', _0x1057d5 => {
            _0x1057d5['stopPropagation']();
            _0x11d1aa = !_0x11d1aa;
            _0x53bb94['classList']['toggle']('active', _0x11d1aa);
        });
    }
    const _0x2aec87 = document['getElementById']('mob-interact-btn');
    if (_0x2aec87) {
        _0x2aec87['addEventListener']('click', _0x30c77f => {
            _0x30c77f['stopPropagation']();
            if (!_0xea442['isDead']) {
                const _0x15fb31 = Date['now']();
                if (!window['_lastDoorSend'] || _0x15fb31 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x15fb31;
                    if (_0x523d40 && _0x523d40['readyState'] === WebSocket['OPEN'])
                        _0x523d40['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x7525b9 = document['getElementById']('mob-ability-btn');
    if (_0x7525b9) {
        _0x7525b9['addEventListener']('click', _0x13b922 => {
            _0x13b922['stopPropagation']();
            if (_0xea442['isDead'])
                return;
            if (_0x3b87ae === 'Mayor') {
                if (_0x2d7c59['has'](_0x256129)) {
                    _0x2987f4('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0xfd508c = document['getElementById']('mayor-confirm-dialog');
                if (_0xfd508c)
                    _0xfd508c['style']['display'] = 'flex';
                return;
            }
            if (_0x474e7c['GAME_STATE'] === 'NIGHT') {
                if (!_0x474e7c['NIGHT_ABILITY_OPEN']) {
                    _0x2987f4('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x60da88 = document['getElementById']('ability-ui');
                if (_0x60da88) {
                    if (_0x60da88['style']['display'] === 'block') {
                        _0x60da88['style']['display'] = 'none';
                    } else {
                        _0x3221d9();
                        _0x60da88['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x474e7c['GAME_STATE'] === 'DAY_DISCUSS' || _0x474e7c['GAME_STATE'] === 'DAY_VOTE') {
                _0x2987f4('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x56a4ed = document['getElementById']('mob-will-btn');
    const _0x1d377d = document['getElementById']('will-ui');
    const _0x40369b = document['getElementById']('will-input');
    const _0x3fc983 = document['getElementById']('close-will-btn');
    const _0x2ca76a = () => {
        if (!_0x1d377d)
            return;
        if (_0x1d377d['style']['display'] === 'flex') {
            _0x1d377d['style']['display'] = 'none';
            if (_0x474e7c['GAME_STATE'] !== 'NIGHT' && _0x523d40 && _0x523d40['readyState'] === WebSocket['OPEN'] && _0x40369b) {
                _0x523d40['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x40369b['value']
                }));
            }
            if (_0x40369b)
                _0x40369b['blur']();
        } else {
            if (_0x474e7c['GAME_STATE'] === 'NIGHT') {
                _0x2987f4('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x1d377d['style']['display'] = 'flex';
            if (_0x40369b)
                _0x40369b['focus']();
        }
    };
    if (_0x56a4ed)
        _0x56a4ed['addEventListener']('click', _0x34498e => {
            _0x34498e['stopPropagation']();
            _0x2ca76a();
        });
    if (_0x3fc983)
        _0x3fc983['addEventListener']('click', _0x7abc0 => {
            _0x7abc0['stopPropagation']();
            _0x2ca76a();
        });
    const _0x571a42 = document['getElementById']('mob-chat-btn');
    const _0x5a50b3 = document['getElementById']('mobile-chat-overlay');
    const _0x4ec543 = document['getElementById']('mobile-chat-input');
    const _0x42b0a2 = document['getElementById']('mobile-chat-send');
    const _0x4ad8b9 = document['getElementById']('mobile-chat-cancel');
    const _0x2f56d4 = () => {
        if (!_0x5a50b3 || !_0x4ec543)
            return;
        _0x5a50b3['style']['display'] = 'flex';
        _0x4ec543['value'] = '';
        _0x4ec543['focus']();
    };
    const _0x14796d = () => {
        if (!_0x5a50b3 || !_0x4ec543)
            return;
        _0x5a50b3['style']['display'] = 'none';
        _0x4ec543['blur']();
    };
    const _0x2eef51 = () => {
        if (!_0x4ec543)
            return;
        const _0x2ce5d3 = _0x4ec543['value']['trim']();
        if (_0x2ce5d3['length'] > 0x0 && _0x523d40 && _0x523d40['readyState'] === WebSocket['OPEN']) {
            _0x523d40['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x2ce5d3
            }));
        }
        _0x4ec543['value'] = '';
        _0x14796d();
    };
    if (_0x571a42)
        _0x571a42['addEventListener']('click', _0xaf6dbc => {
            _0xaf6dbc['stopPropagation']();
            _0x2f56d4();
        });
    if (_0x42b0a2)
        _0x42b0a2['addEventListener']('click', _0x5b8509 => {
            _0x5b8509['stopPropagation']();
            _0x2eef51();
        });
    if (_0x4ad8b9)
        _0x4ad8b9['addEventListener']('click', _0x40b5b2 => {
            _0x40b5b2['stopPropagation']();
            _0x14796d();
        });
    if (_0x4ec543) {
        _0x4ec543['addEventListener']('keydown', _0xa995dd => {
            if (_0xa995dd['key'] === 'Enter') {
                _0xa995dd['preventDefault']();
                _0x2eef51();
            } else if (_0xa995dd['key'] === 'Escape') {
                _0x14796d();
            }
        });
    }
    const _0x54e1cc = document['getElementById']('mob-top-chat');
    if (_0x54e1cc)
        _0x54e1cc['addEventListener']('click', _0x1caaa2 => {
            _0x1caaa2['stopPropagation']();
            _0x2f56d4();
        });
    const _0x3e0912 = document['getElementById']('mob-top-will');
    if (_0x3e0912)
        _0x3e0912['addEventListener']('click', _0x1e0eb8 => {
            _0x1e0eb8['stopPropagation']();
            _0x2ca76a();
        });
    const _0x20ace6 = document['getElementById']('mob-top-roles');
    if (_0x20ace6) {
        _0x20ace6['addEventListener']('click', _0x4a00d5 => {
            _0x4a00d5['stopPropagation']();
            const _0x42a46d = document['getElementById']('role-list-ui');
            const _0x514204 = document['getElementById']('leaderboard-ui');
            if (_0x514204)
                _0x514204['style']['display'] = 'none';
            if (_0x42a46d)
                _0x42a46d['style']['display'] = _0x42a46d['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x20ff00 = document['getElementById']('mob-top-players');
    if (_0x20ff00) {
        _0x20ff00['addEventListener']('click', _0x230db6 => {
            _0x230db6['stopPropagation']();
            const _0x51f51c = document['getElementById']('leaderboard-ui');
            const _0x27a893 = document['getElementById']('role-list-ui');
            if (_0x27a893)
                _0x27a893['style']['display'] = 'none';
            if (_0x51f51c)
                _0x51f51c['style']['display'] = _0x51f51c['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x4740a4 = document['getElementById']('mob-top-help');
    if (_0x4740a4) {
        _0x4740a4['addEventListener']('click', _0x3487a8 => {
            _0x3487a8['stopPropagation']();
            const _0x3d5639 = document['getElementById']('guide-ui');
            if (_0x3d5639)
                _0x3d5639['style']['display'] = _0x3d5639['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x55dfe8) {
            _0x55dfe8 = !![];
            _0x1567f3();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
