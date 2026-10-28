document['addEventListener']('contextmenu', _0x4c2651 => _0x4c2651['preventDefault']());
const _0x56194b = {
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
let _0x80afe5 = '';
function _0x1086bc(_0xde158f, _0x38535d) {
    const _0x516f46 = document['getElementById']('role-list-ui');
    const _0x920490 = document['getElementById']('role-list-items');
    if (!_0x516f46 || !_0x920490)
        return;
    if (!_0x38535d || _0x38535d === 'off' || !_0xde158f || _0xde158f['length'] === 0x0) {
        _0x516f46['style']['display'] = 'none';
        return;
    }
    const _0x32e115 = _0x38535d + '|' + JSON['stringify'](_0xde158f);
    if (_0x32e115 === _0x80afe5)
        return;
    _0x80afe5 = _0x32e115;
    const _0x216c18 = document['getElementById']('role-tooltip');
    if (_0x216c18) {
        _0x216c18['style']['visibility'] = 'hidden';
        _0x216c18['style']['opacity'] = '0';
    }
    _0x516f46['style']['display'] = 'flex';
    _0x920490['innerHTML'] = '';
    _0xde158f['forEach'](_0x559ed9 => {
        const _0xfe68fb = document['createElement']('div');
        _0xfe68fb['className'] = 'role-list-entry';
        const _0x4c5d1a = _0x559ed9['name']['includes']('Mafia') || _0x559ed9['name'] === 'Skinwalker' || _0x559ed9['name'] === 'Blackmailer';
        _0xfe68fb['classList']['add'](_0x4c5d1a ? 'mafia' : 'town');
        if (_0x38535d === 'precise' && _0x559ed9['isDead']) {
            _0xfe68fb['classList']['remove']('town', 'mafia');
            _0xfe68fb['classList']['add']('dead');
            _0xfe68fb['innerHTML'] = '<span>' + _0x559ed9['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x883ad6 = _0x559ed9['count'] !== undefined && _0x559ed9['count'] !== null ? _0x559ed9['count'] + 'x\x20' : '';
            _0xfe68fb['innerHTML'] = '<span>' + _0x883ad6 + _0x559ed9['name'] + '</span>';
        }
        if (_0x38535d === 'subalignments' && _0x56194b[_0x559ed9['name']]) {
            _0xfe68fb['style']['cursor'] = 'pointer';
            _0xfe68fb['addEventListener']('mouseenter', () => {
                const _0x452fe3 = document['getElementById']('role-tooltip');
                if (!_0x452fe3)
                    return;
                const _0x4f9a0b = _0x56194b[_0x559ed9['name']]['join'](',\x20');
                _0x452fe3['innerHTML'] = '';
                const _0x1d6f54 = document['createElement']('span');
                _0x1d6f54['style']['color'] = '#ffcc00';
                _0x1d6f54['textContent'] = _0x559ed9['name'];
                _0x452fe3['appendChild'](_0x1d6f54);
                _0x452fe3['appendChild'](document['createElement']('br'));
                _0x452fe3['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x4f9a0b));
                const _0x5917ec = _0xfe68fb['getBoundingClientRect']();
                _0x452fe3['style']['left'] = _0x5917ec['left'] - 0xeb + 'px';
                _0x452fe3['style']['top'] = _0x5917ec['top'] + 'px';
                _0x452fe3['style']['display'] = 'block';
                _0x452fe3['style']['visibility'] = 'visible';
                _0x452fe3['style']['opacity'] = '1';
            });
            _0xfe68fb['addEventListener']('mouseleave', () => {
                const _0x4e238a = document['getElementById']('role-tooltip');
                if (_0x4e238a) {
                    _0x4e238a['style']['display'] = 'none';
                    _0x4e238a['style']['visibility'] = 'hidden';
                    _0x4e238a['style']['opacity'] = '0';
                }
            });
        }
        _0x920490['appendChild'](_0xfe68fb);
    });
}
let _0x61fbec = null;
let _0x1d0285 = null;
const _0x3ce1ff = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x455647 = 'Player???';
let _0x328a73 = ![];
let _0x63e610 = {};
let _0x785191 = null;
let _0x31ffec = 0x0;
let _0x2e89bb = 0x0;
let _0x282f02 = new Set();
let _0x57dec7 = ![];
let _0x59916c = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x3f93f6 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x5b4961 = ![];
let _0x132c9e = null;
let _0x1b41c0 = 0x0;
let _0x717faa = 0x0;
let _0x5bf915 = ![];
let _0x135d12 = ![];
let _0x3e9c3d = 0x0;
let _0x20e7c9 = null;
let _0x3036db = ![];
let _0x5aa0c9 = 0x0;
let _0xd2416d = 0x0;
let _0x3fef21 = [];
let _0xb001f3 = [];
let _0x41ac78 = new Set();
const _0x4acfe8 = ((() => {
    const _0x484ca8 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x5118dd = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x18fdac = 0x320;
    const _0x6d0626 = {};
    const _0x529297 = {};
    let _0x521562 = null;
    let _0x4a470e = _0x5118dd === 0x0;
    let _0x4687bd = ![];
    for (const [_0x87f968, _0x104722] of Object['entries'](_0x484ca8)) {
        const _0x463a1c = new Audio(_0x104722);
        _0x463a1c['loop'] = !![];
        _0x463a1c['volume'] = 0x0;
        _0x463a1c['preload'] = 'auto';
        _0x6d0626[_0x87f968] = _0x463a1c;
        _0x529297[_0x87f968] = null;
    }
    const _0x37ddfd = _0x7860a8 => Math['min'](0x1, Math['max'](0x0, _0x7860a8));
    function _0x74da4c(_0x4d5c89) {
        if (_0x529297[_0x4d5c89] !== null) {
            cancelAnimationFrame(_0x529297[_0x4d5c89]);
            _0x529297[_0x4d5c89] = null;
        }
    }
    function _0x5042f3(_0x224b6c, _0xe6996f, _0x26bed, _0x465d98, _0x8df17b) {
        _0x74da4c(_0x224b6c);
        const _0x3482f3 = _0x6d0626[_0x224b6c];
        const _0x49c812 = performance['now']();
        const _0x18efca = _0x33e6ec => {
            const _0x161455 = _0x37ddfd((_0x33e6ec - _0x49c812) / _0x465d98);
            const _0x2352f0 = _0x37ddfd(_0xe6996f + (_0x26bed - _0xe6996f) * _0x161455);
            _0x3482f3['volume'] = _0x4a470e ? 0x0 : _0x2352f0;
            if (_0x161455 < 0x1) {
                _0x529297[_0x224b6c] = requestAnimationFrame(_0x18efca);
            } else {
                _0x529297[_0x224b6c] = null;
                _0x3482f3['volume'] = _0x4a470e ? 0x0 : _0x37ddfd(_0x26bed);
                if (_0x8df17b)
                    _0x8df17b();
            }
        };
        _0x529297[_0x224b6c] = requestAnimationFrame(_0x18efca);
    }
    function _0x4a8d56(_0x4b92b4) {
        const _0x3fe4cd = _0x4b92b4['play']();
        if (_0x3fe4cd && _0x3fe4cd['catch']) {
            _0x3fe4cd['catch'](() => {
                if (!_0x4687bd) {
                    const _0x171985 = () => {
                        _0x4687bd = !![];
                        _0x4b92b4['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x171985);
                        document['removeEventListener']('keydown', _0x171985);
                        document['removeEventListener']('touchstart', _0x171985);
                    };
                    document['addEventListener']('click', _0x171985, { 'once': !![] });
                    document['addEventListener']('keydown', _0x171985, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x171985, { 'once': !![] });
                }
            });
        }
    }
    function _0x248e3e(_0xc3e697) {
        if (!_0x484ca8[_0xc3e697])
            return;
        if (_0x521562 === _0xc3e697)
            return;
        const _0x37ae59 = _0x521562;
        _0x521562 = _0xc3e697;
        const _0x206ca0 = _0x6d0626[_0xc3e697];
        _0x74da4c(_0xc3e697);
        _0x206ca0['currentTime'] = 0x0;
        _0x206ca0['volume'] = 0x0;
        _0x4a8d56(_0x206ca0);
        _0x5042f3(_0xc3e697, 0x0, _0x5118dd, _0x18fdac);
        if (_0x37ae59 && _0x6d0626[_0x37ae59]) {
            const _0x40e703 = _0x37ae59;
            const _0x3ece29 = _0x6d0626[_0x40e703];
            const _0x499f6f = _0x37ddfd(_0x3ece29['volume']);
            _0x5042f3(_0x40e703, _0x499f6f, 0x0, _0x18fdac, () => {
                _0x3ece29['pause']();
                _0x3ece29['currentTime'] = 0x0;
            });
        }
    }
    function _0x20e1a5(_0x4d4bc1) {
        _0x5118dd = _0x37ddfd(_0x4d4bc1);
        localStorage['setItem']('musicVolume', String(_0x5118dd));
        if (!_0x4a470e && _0x521562 && _0x529297[_0x521562] === null) {
            _0x6d0626[_0x521562]['volume'] = _0x5118dd;
        }
    }
    function _0x2d6fdc() {
        return _0x5118dd;
    }
    function _0x1b61ca(_0x52a7b4) {
        _0x4a470e = _0x52a7b4;
        for (const _0x34d860 of Object['keys'](_0x6d0626)) {
            if (_0x529297[_0x34d860] === null) {
                _0x6d0626[_0x34d860]['volume'] = _0x52a7b4 || _0x34d860 !== _0x521562 ? 0x0 : _0x5118dd;
            }
        }
    }
    function _0x59c1a7() {
        return _0x4a470e;
    }
    function _0x29651b(_0x30d176) {
        if (_0x30d176 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x30d176 === 'DAY_VOTE')
            return 'voting';
        if (_0x30d176 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x53cdf2(_0xf2ec12) {
        _0x248e3e(_0x29651b(_0xf2ec12));
    }
    function _0x3f05d9(_0x168538) {
        _0x248e3e(_0x168538);
    }
    return {
        'play': _0x248e3e,
        'onStateChange': _0x53cdf2,
        'onSoundEvent': _0x3f05d9,
        'setVolume': _0x20e1a5,
        'getVolume': _0x2d6fdc,
        'setMuted': _0x1b61ca,
        'isMuted': _0x59c1a7
    };
})());
const _0x16ee8c = ((() => {
    const _0x253d81 = 0x258;
    const _0x4cd0eb = 0xb4;
    const _0x28b236 = 0x708;
    const _0x4dbca1 = 0x140;
    const _0x3e2e5d = 0.18;
    const _0x4fdff7 = 0.95;
    const _0x1fd8b6 = new Audio('audio/heartbeat.mp3');
    _0x1fd8b6['loop'] = ![];
    _0x1fd8b6['preload'] = 'auto';
    _0x1fd8b6['volume'] = 0x0;
    let _0x4419ec = 0x0;
    let _0x6fde72 = Infinity;
    function _0x286003(_0x3d0095, _0x2d3582, _0x2457c9) {
        return Math['min'](_0x2457c9, Math['max'](_0x2d3582, _0x3d0095));
    }
    function _0x54c250(_0x4637ec, _0x32abf3, _0x1b70a4) {
        return _0x4637ec + (_0x32abf3 - _0x4637ec) * _0x1b70a4;
    }
    function _0x237c64(_0x5d48e4) {
        if (_0x17a636['GAME_STATE'] !== 'NIGHT' || _0x4e5d04['isDead'] || _0x785191 === 'Skinwalker' || _0x785191 === 'Blackmailer') {
            _0x6fde72 = Infinity;
            return;
        }
        const _0x2f2505 = _0x4e5d04['x'] + 22.5;
        const _0x5070eb = _0x4e5d04['y'] + 22.5;
        let _0x17a2d5 = Infinity;
        for (const _0x3d4507 in _0x63e610) {
            const _0x45ca1d = _0x63e610[_0x3d4507];
            if (!_0x45ca1d['isDark'] || _0x45ca1d['isDead'])
                continue;
            const _0x388b5f = _0x45ca1d['renderX'] + 22.5 - _0x2f2505;
            const _0x3a69a8 = _0x45ca1d['renderY'] + 22.5 - _0x5070eb;
            const _0x4a2d0c = Math['sqrt'](_0x388b5f * _0x388b5f + _0x3a69a8 * _0x3a69a8);
            if (_0x4a2d0c < _0x17a2d5)
                _0x17a2d5 = _0x4a2d0c;
        }
        _0x6fde72 = _0x17a2d5;
        if (_0x17a2d5 > _0x253d81)
            return;
        const _0x23a0f3 = 0x1 - _0x286003((_0x17a2d5 - _0x4cd0eb) / (_0x253d81 - _0x4cd0eb), 0x0, 0x1);
        const _0x398e87 = _0x54c250(_0x28b236, _0x4dbca1, _0x23a0f3);
        const _0x3c7a8c = _0x54c250(_0x3e2e5d, _0x4fdff7, _0x23a0f3);
        if (_0x5d48e4 >= _0x4419ec) {
            _0x1fd8b6['currentTime'] = 0x0;
            _0x1fd8b6['volume'] = _0x4acfe8['isMuted']() ? 0x0 : _0x286003(_0x3c7a8c * _0x4acfe8['getVolume']() / 0.7, 0x0, 0x1);
            _0x1fd8b6['play']()['catch'](() => {
            });
            _0x4419ec = _0x5d48e4 + _0x398e87;
        }
    }
    return { 'tick': _0x237c64 };
})());
function _0x2061f3() {
    const _0x309405 = document['getElementById']('mob-ability-btn');
    if (!_0x309405)
        return;
    const _0x503fd0 = _0x17a636['GAME_STATE'] === 'NIGHT' && !_0x4e5d04['isDead'];
    const _0x31dfdf = _0x785191 === 'Mayor' && !_0x282f02['has'](_0x1d0285) && !_0x4e5d04['isDead'];
    if (_0x503fd0 || _0x31dfdf) {
        _0x309405['style']['display'] = 'flex';
    } else {
        _0x309405['style']['display'] = 'none';
    }
}
function _0x3dca0f() {
    const _0xe2c036 = document['getElementById']('mobile-joystick-zone');
    const _0x353a67 = document['getElementById']('mobile-top-bar');
    const _0x23a910 = document['getElementById']('mobile-action-bar');
    if (!_0xe2c036 || !_0x353a67 || !_0x23a910)
        return;
    if (!_0x1be5ae && _0x3f93f6) {
        _0xe2c036['style']['display'] = 'flex';
        _0x353a67['style']['display'] = 'flex';
        _0x23a910['style']['display'] = 'flex';
        _0x2061f3();
    } else {
        _0xe2c036['style']['display'] = 'none';
        _0x353a67['style']['display'] = 'none';
        _0x23a910['style']['display'] = 'none';
    }
}
const _0x37334b = document['getElementById']('gameCanvas');
const _0x5ef86c = _0x37334b['getContext']('2d', { 'alpha': ![] });
const _0x54f129 = 0x500;
const _0x215379 = 0x2d0;
const _0x17a636 = {
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
        'width': _0x54f129,
        'height': _0x215379
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
const _0x4e5d04 = {
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
const _0x1042d0 = new Image();
const _0x4ab6dc = new Image();
const _0x1444a2 = new Image();
const _0x4f67a4 = new Image();
_0x4f67a4['src'] = 'assets/mayor\x20cosmetic.png';
const _0x47acd = [
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
const _0x27a2b3 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x35a00d = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x35a00d === 'body1.png' || _0x35a00d === 'body1')
    _0x35a00d = 'body01.png';
if (!_0x35a00d['endsWith']('.png'))
    _0x35a00d += '.png';
let _0x791add = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x791add['endsWith']('.png'))
    _0x791add += '.png';
let _0x1be5ae = !![];
let _0x765f8b = null;
let _0x207910 = null;
let _0x25fd9c = 0x3c;
let _0x33923e = 0x2d;
const _0x383a71 = {};
const _0x196fdf = new Image();
_0x196fdf['src'] = 'assets/yanito932.png';
_0x383a71['assets/yanito932.png'] = _0x196fdf;
function _0x55ae99(_0x20072c) {
    if (!_0x383a71[_0x20072c] || !_0x383a71[_0x20072c]['complete'] && _0x383a71[_0x20072c]['naturalWidth'] === 0x0 && _0x383a71[_0x20072c]['naturalHeight'] === 0x0) {
        const _0x1a1ded = new Image();
        _0x1a1ded['src'] = _0x20072c;
        _0x383a71[_0x20072c] = _0x1a1ded;
    }
    return _0x383a71[_0x20072c];
}
function _0x4456d1(_0xa1085a, _0x149282, _0x46ffa4, _0x437c9b, _0x7dd737) {
    try {
        const _0x2473fc = 'assets/' + (_0x149282 || 'body01.png');
        const _0xe722b8 = _0x55ae99(_0x2473fc);
        if (_0xe722b8['complete'] && _0xe722b8['naturalWidth'] > 0x0) {
            _0xa1085a['drawImage'](_0xe722b8, -_0x437c9b / 0x2, -_0x7dd737 / 0x2, _0x437c9b, _0x7dd737);
        }
        if (_0x46ffa4 === null || _0x46ffa4 === undefined)
            return;
        const _0x1c4787 = 'assets/' + _0x46ffa4;
        const _0x1256d2 = _0x55ae99(_0x1c4787);
        if (_0x1256d2['complete'] && _0x1256d2['naturalWidth'] > 0x0) {
            _0xa1085a['drawImage'](_0x1256d2, -_0x437c9b / 0x2, -_0x7dd737 / 0x2, _0x437c9b, _0x7dd737);
        }
    } catch (_0x150974) {
    }
}
function _0xf6887c() {
    const _0x3c575d = document['getElementById']('body-skin-grid');
    const _0x2d83b0 = document['getElementById']('eyes-skin-grid');
    if (!_0x3c575d || !_0x2d83b0)
        return;
    _0x3c575d['innerHTML'] = '';
    _0x47acd['forEach'](_0x299366 => {
        const _0x18af52 = document['createElement']('button');
        _0x18af52['className'] = 'skin-btn' + (_0x299366 === _0x35a00d ? '\x20selected' : '');
        const _0x44b302 = document['createElement']('img');
        _0x44b302['src'] = 'assets/' + _0x299366;
        _0x18af52['appendChild'](_0x44b302);
        _0x18af52['onclick'] = () => {
            _0x35a00d = _0x299366;
            localStorage['setItem']('selectedBody', _0x299366);
            _0x3c575d['querySelectorAll']('.skin-btn')['forEach'](_0x29bb04 => _0x29bb04['classList']['remove']('selected'));
            _0x18af52['classList']['add']('selected');
        };
        _0x3c575d['appendChild'](_0x18af52);
    });
    _0x2d83b0['innerHTML'] = '';
    _0x27a2b3['forEach'](_0x43d265 => {
        const _0x14d968 = document['createElement']('button');
        _0x14d968['className'] = 'skin-btn' + (_0x43d265 === _0x791add ? '\x20selected' : '');
        const _0x7dadb4 = document['createElement']('img');
        _0x7dadb4['src'] = 'assets/' + _0x43d265;
        _0x14d968['appendChild'](_0x7dadb4);
        _0x14d968['onclick'] = () => {
            _0x791add = _0x43d265;
            localStorage['setItem']('selectedEyes', _0x43d265);
            _0x2d83b0['querySelectorAll']('.skin-btn')['forEach'](_0x37e9cb => _0x37e9cb['classList']['remove']('selected'));
            _0x14d968['classList']['add']('selected');
        };
        _0x2d83b0['appendChild'](_0x14d968);
    });
}
function _0x3b48a6(_0xdc5400) {
    if (!_0x17a636['MAP']['columns'] || !_0x17a636['CAMERA']['width'])
        return;
    const _0x30bb30 = Math['max'](0x0, _0x17a636['MAP']['columns'] * _0x17a636['MAP']['tileSize'] - _0x17a636['CAMERA']['width']);
    const _0x119e04 = Math['max'](0x0, _0x17a636['MAP']['rows'] * _0x17a636['MAP']['tileSize'] - _0x17a636['CAMERA']['height']);
    if (_0x765f8b === null) {
        _0x765f8b = _0x30bb30 / 0x2;
        _0x207910 = _0x119e04 / 0x2;
    }
    _0x765f8b += _0x25fd9c * _0xdc5400;
    _0x207910 += _0x33923e * _0xdc5400;
    if (_0x765f8b <= 0x0) {
        _0x765f8b = 0x0;
        _0x25fd9c = Math['abs'](_0x25fd9c);
    } else if (_0x765f8b >= _0x30bb30) {
        _0x765f8b = _0x30bb30;
        _0x25fd9c = -Math['abs'](_0x25fd9c);
    }
    if (_0x207910 <= 0x0) {
        _0x207910 = 0x0;
        _0x33923e = Math['abs'](_0x33923e);
    } else if (_0x207910 >= _0x119e04) {
        _0x207910 = _0x119e04;
        _0x33923e = -Math['abs'](_0x33923e);
    }
    _0x17a636['CAMERA']['x'] = _0x765f8b;
    _0x17a636['CAMERA']['y'] = _0x207910;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0x5750ed = document['getElementById']('play-btn');
    const _0x23bb02 = document['getElementById']('username-input');
    const _0x5abbc0 = localStorage['getItem']('playerName');
    if (_0x5abbc0 && _0x23bb02) {
        _0x23bb02['value'] = _0x5abbc0;
    }
    const _0x223dbb = () => {
        _0x4acfe8['play']('wait');
        document['removeEventListener']('click', _0x223dbb);
        document['removeEventListener']('keydown', _0x223dbb);
        document['removeEventListener']('touchstart', _0x223dbb);
    };
    document['addEventListener']('click', _0x223dbb, { 'once': !![] });
    document['addEventListener']('keydown', _0x223dbb, { 'once': !![] });
    document['addEventListener']('touchstart', _0x223dbb, { 'once': !![] });
    if (_0x5750ed) {
        _0x5750ed['addEventListener']('click', () => {
            const _0x45a2a0 = window['_FB'] && window['_FB']['_currentUser'];
            const _0x3bd74c = window['_FB'] && window['_FB']['_userData'];
            let _0xd8de17 = !![];
            if (_0x45a2a0 && _0x3bd74c && _0x3bd74c['username']) {
                _0x455647 = _0x3bd74c['username'];
                _0xd8de17 = ![];
            } else {
                const _0x4d5bc4 = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x455647 = 'user' + _0x4d5bc4;
                _0xd8de17 = !![];
            }
            const _0x31ee4a = _0xd8de17 ? 'body01.png' : _0x35a00d;
            const _0x46a9bc = _0xd8de17 ? 'eyes4.png' : _0x791add;
            const _0x1b70e8 = !_0xd8de17 && _0x3bd74c && _0x3bd74c['photoURL'] ? _0x3bd74c['photoURL'] : '';
            const _0x17bac2 = !_0xd8de17 && _0x45a2a0 ? _0x45a2a0['uid'] : '';
            localStorage['setItem']('playerName', _0x455647);
            _0x1be5ae = ![];
            _0x17a636['CAMERA']['x'] = null;
            _0x17a636['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0x554183 = document['getElementById']('chat-log-wrap');
            if (_0x554183)
                _0x554183['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x3a919d = document['getElementById']('controls-hint');
            if (_0x3a919d && !_0x3f93f6)
                _0x3a919d['style']['display'] = 'block';
            _0x3dca0f();
            if (_0x3f93f6) {
                const _0x13d3f0 = document['getElementById']('leaderboard-list');
                const _0x92b1bc = document['getElementById']('leaderboard-toggle');
                if (_0x13d3f0) {
                    _0x13d3f0['style']['display'] = 'none';
                    if (_0x92b1bc)
                        _0x92b1bc['style']['transform'] = 'rotate(180deg)';
                }
                const _0x170146 = document['getElementById']('role-list-items');
                const _0x4ad10e = document['getElementById']('role-list-toggle');
                if (_0x170146) {
                    _0x170146['style']['display'] = 'none';
                    if (_0x4ad10e)
                        _0x4ad10e['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x1dcb34 = !_0xd8de17 && _0x3bd74c ? {
                'townWins': _0x3bd74c['townWins'] || 0x0,
                'mafiaWins': _0x3bd74c['mafiaWins'] || 0x0,
                'deaths': _0x3bd74c['deaths'] || 0x0,
                'townLosses': _0x3bd74c['townLosses'] || 0x0,
                'mafiaLosses': _0x3bd74c['mafiaLosses'] || 0x0
            } : null;
            const _0x1c3bad = JSON['stringify']({
                'type': 'join',
                'name': _0x455647,
                'token': _0x3ce1ff,
                'body': _0x31ee4a,
                'eyes': _0x46a9bc,
                'isGuest': _0xd8de17,
                'uid': _0x17bac2,
                'photoURL': _0x1b70e8,
                'accountStats': _0x1dcb34
            });
            if (_0x61fbec && _0x61fbec['readyState'] === WebSocket['OPEN']) {
                _0x61fbec['send'](_0x1c3bad);
            } else if (!_0x61fbec || _0x61fbec['readyState'] === WebSocket['CLOSED'] || _0x61fbec['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x1c3bad;
                _0x46b9ea();
            }
        });
    }
    _0xf6887c();
    _0x46b9ea();
    _0x577b14();
    _0x5662af();
    _0x54c087();
    _0x24f594();
});
const _0x332a2c = [
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
let _0x1c815b = 'Town';
let _0x1311b9 = 0x0;
function _0x3242b2() {
    const _0x4f4662 = document['getElementById']('role-index-main-tabs');
    const _0x329e72 = document['getElementById']('role-index-tabs');
    const _0x23ded8 = document['getElementById']('role-index-body');
    if (!_0x329e72 || !_0x23ded8)
        return;
    if (_0x4f4662) {
        _0x4f4662['innerHTML'] = '';
        const _0x3c96bb = document['createElement']('button');
        _0x3c96bb['className'] = 'role-index-main-tab-btn\x20main-town' + (_0x1c815b === 'Town' ? '\x20active' : '');
        _0x3c96bb['textContent'] = 'TOWN';
        _0x3c96bb['addEventListener']('click', () => {
            _0x1c815b = 'Town';
            _0x1311b9 = 0x0;
            _0x3242b2();
        });
        _0x4f4662['appendChild'](_0x3c96bb);
        const _0x34ec50 = document['createElement']('button');
        _0x34ec50['className'] = 'role-index-main-tab-btn\x20main-mafia' + (_0x1c815b === 'Mafia' ? '\x20active' : '');
        _0x34ec50['textContent'] = 'MAFIA';
        _0x34ec50['addEventListener']('click', () => {
            _0x1c815b = 'Mafia';
            _0x1311b9 = 0x0;
            _0x3242b2();
        });
        _0x4f4662['appendChild'](_0x34ec50);
    }
    const _0x5ba9e5 = _0x332a2c['filter'](_0x2e3878 => _0x2e3878['faction'] === _0x1c815b);
    _0x329e72['innerHTML'] = '';
    _0x5ba9e5['forEach']((_0x55b3ed, _0x2c50a0) => {
        const _0x40faa8 = document['createElement']('button');
        _0x40faa8['className'] = 'role-index-tab-btn' + (_0x55b3ed['faction'] === 'Mafia' ? '\x20tab-mafia' : '\x20tab-town') + (_0x2c50a0 === _0x1311b9 ? '\x20active' : '');
        _0x40faa8['textContent'] = _0x55b3ed['name'];
        _0x40faa8['addEventListener']('click', () => {
            _0x1311b9 = _0x2c50a0;
            _0x3242b2();
        });
        _0x329e72['appendChild'](_0x40faa8);
    });
    const _0x3a5b80 = _0x5ba9e5[_0x1311b9] || _0x5ba9e5[0x0];
    _0x23ded8['innerHTML'] = '';
    if (!_0x3a5b80)
        return;
    const _0x37dc7a = document['createElement']('div');
    _0x37dc7a['className'] = 'role-index-title-row';
    const _0xfb4543 = document['createElement']('span');
    _0xfb4543['className'] = 'role-index-name\x20' + (_0x3a5b80['faction'] === 'Mafia' ? 'role-mafia' : 'role-town');
    _0xfb4543['textContent'] = _0x3a5b80['name'];
    _0x37dc7a['appendChild'](_0xfb4543);
    const _0x4fb3b3 = document['createElement']('span');
    _0x4fb3b3['className'] = 'role-index-faction-badge\x20' + (_0x3a5b80['faction'] === 'Mafia' ? 'faction-mafia' : 'faction-town');
    _0x4fb3b3['textContent'] = _0x3a5b80['faction'];
    _0x37dc7a['appendChild'](_0x4fb3b3);
    _0x23ded8['appendChild'](_0x37dc7a);
    _0x3a5b80['paragraphs']['forEach'](_0x494f39 => {
        const _0x3e4c51 = document['createElement']('p');
        _0x3e4c51['className'] = 'role-index-desc-paragraph';
        _0x3e4c51['innerHTML'] = _0x494f39;
        _0x23ded8['appendChild'](_0x3e4c51);
    });
}
function _0x24f594() {
    const _0x104b23 = document['getElementById']('role-index-btn');
    const _0x15603a = document['getElementById']('role-index-modal');
    const _0x1ece48 = document['getElementById']('close-role-index-btn');
    const _0x1f8c65 = document['getElementById']('mob-top-index');
    if (_0x104b23 && _0x15603a) {
        _0x104b23['addEventListener']('click', _0x66ea67 => {
            _0x66ea67['stopPropagation']();
            if (_0x15603a['style']['display'] === 'none' || !_0x15603a['style']['display']) {
                _0x3242b2();
                _0x15603a['style']['display'] = 'flex';
            } else {
                _0x15603a['style']['display'] = 'none';
            }
        });
    }
    if (_0x1ece48 && _0x15603a) {
        _0x1ece48['addEventListener']('click', _0x65d68c => {
            _0x65d68c['stopPropagation']();
            _0x15603a['style']['display'] = 'none';
        });
    }
    if (_0x1f8c65 && _0x15603a) {
        _0x1f8c65['addEventListener']('click', _0x20b1d0 => {
            _0x20b1d0['stopPropagation']();
            if (_0x15603a['style']['display'] === 'none' || !_0x15603a['style']['display']) {
                _0x3242b2();
                _0x15603a['style']['display'] = 'flex';
            } else {
                _0x15603a['style']['display'] = 'none';
            }
        });
    }
}
function _0x5662af() {
    const _0x120409 = document['getElementById']('settings-btn');
    const _0x4104a9 = document['getElementById']('settings-panel');
    const _0x4193e5 = document['getElementById']('close-settings-btn');
    const _0x4c9e9e = document['getElementById']('setting-mouse-relative');
    if (_0x4c9e9e) {
        _0x4c9e9e['checked'] = _0x59916c;
        _0x4c9e9e['addEventListener']('change', () => {
            _0x59916c = _0x4c9e9e['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x59916c ? 'true' : 'false');
        });
    }
    const _0x206d15 = document['getElementById']('setting-music-volume');
    const _0x3b67b0 = document['getElementById']('setting-music-volume-display');
    function _0x456b0a(_0x5b4d28) {
        const _0x58a2eb = (_0x5b4d28['value'] - _0x5b4d28['min']) / (_0x5b4d28['max'] - _0x5b4d28['min']) * 0x64;
        _0x5b4d28['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x58a2eb + '%,\x20#444\x20' + _0x58a2eb + '%)';
    }
    if (_0x206d15) {
        const _0x2d45b2 = _0x4acfe8['getVolume']();
        const _0x31d497 = Math['round'](_0x2d45b2 * 0x64);
        _0x206d15['value'] = _0x31d497;
        if (_0x3b67b0)
            _0x3b67b0['textContent'] = _0x31d497 + '%';
        _0x456b0a(_0x206d15);
        _0x206d15['addEventListener']('input', () => {
            const _0x434821 = parseInt(_0x206d15['value'], 0xa);
            if (_0x3b67b0)
                _0x3b67b0['textContent'] = _0x434821 + '%';
            _0x456b0a(_0x206d15);
            _0x4acfe8['setVolume'](_0x434821 / 0x64);
            _0x4acfe8['setMuted'](_0x434821 === 0x0);
        });
    }
    if (_0x120409 && _0x4104a9) {
        _0x120409['addEventListener']('click', _0x3f072c => {
            _0x3f072c['stopPropagation']();
            _0x4104a9['style']['display'] = _0x4104a9['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x4193e5 && _0x4104a9) {
        _0x4193e5['addEventListener']('click', () => {
            _0x4104a9['style']['display'] = 'none';
        });
    }
    const _0xc9adca = document['getElementById']('mayor-confirm-yes');
    const _0x57acf2 = document['getElementById']('mayor-confirm-no');
    const _0x1e141c = document['getElementById']('mayor-confirm-dialog');
    if (_0xc9adca && _0x1e141c) {
        _0xc9adca['addEventListener']('click', () => {
            if (_0x61fbec && _0x61fbec['readyState'] === WebSocket['OPEN']) {
                _0x61fbec['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x1e141c['style']['display'] = 'none';
        });
    }
    if (_0x57acf2 && _0x1e141c) {
        _0x57acf2['addEventListener']('click', () => {
            _0x1e141c['style']['display'] = 'none';
        });
    }
    const _0x3d02a1 = document['getElementById']('close-ability-btn');
    if (_0x3d02a1) {
        _0x3d02a1['addEventListener']('click', () => {
            const _0x3c6313 = document['getElementById']('ability-ui');
            if (_0x3c6313)
                _0x3c6313['style']['display'] = 'none';
        });
    }
}
let _0x5dc8af = '';
function _0x180a67(_0x58cb16) {
    const _0x473726 = document['getElementById']('vote-tally-panel');
    const _0x49dc5d = document['getElementById']('vote-tally-list');
    if (!_0x473726 || !_0x49dc5d)
        return;
    if (_0x58cb16['state'] !== 'DAY_VOTE') {
        _0x473726['style']['display'] = 'none';
        _0x5dc8af = '';
        return;
    }
    _0x473726['style']['display'] = 'block';
    const _0x36146c = {};
    for (const _0x5d4b65 in _0x63e610) {
        if (!_0x63e610[_0x5d4b65]['isDead'])
            _0x36146c[_0x5d4b65] = 0x0;
    }
    if (_0x1d0285 && !_0x4e5d04['isDead'])
        _0x36146c[_0x1d0285] = 0x0;
    const _0xc695a9 = _0x58cb16['votes'] || {};
    for (const _0x49c801 in _0xc695a9) {
        const _0xaf707a = _0xc695a9[_0x49c801];
        const _0x2de622 = _0x58cb16['mayorRevealed'] && _0x58cb16['mayorRevealed'][_0x49c801] ? 0x2 : 0x1;
        _0x36146c[_0xaf707a] = (_0x36146c[_0xaf707a] || 0x0) + _0x2de622;
    }
    let _0x1684a2 = 0x0;
    const _0xa9619d = _0x58cb16['skips'] || {};
    for (const _0x4f8ae2 in _0xa9619d) {
        _0x1684a2 += Number(_0xa9619d[_0x4f8ae2]) || 0x1;
    }
    const _0x4f83c7 = JSON['stringify'](_0x36146c) + '_' + _0x1684a2 + '_' + _0x4e5d04['isDead'];
    if (_0x4f83c7 === _0x5dc8af)
        return;
    _0x5dc8af = _0x4f83c7;
    _0x49dc5d['innerHTML'] = '';
    for (const _0x4bc3c4 in _0x36146c) {
        const _0x50b187 = parseInt(_0x4bc3c4);
        const _0xe63b77 = _0x50b187 === _0x1d0285 ? _0x455647 : _0x63e610[_0x4bc3c4] ? _0x63e610[_0x4bc3c4]['name'] : 'Player\x20' + _0x4bc3c4;
        const _0x5e40d6 = document['createElement']('div');
        _0x5e40d6['className'] = 'vote-tally-entry';
        const _0x419221 = document['createElement']('span');
        _0x419221['textContent'] = _0xe63b77;
        const _0x24e1f6 = document['createElement']('span');
        _0x24e1f6['className'] = 'vote-count';
        _0x24e1f6['textContent'] = _0x36146c[_0x4bc3c4] + '\x20vote' + (_0x36146c[_0x4bc3c4] === 0x1 ? '' : 's');
        _0x5e40d6['appendChild'](_0x419221);
        _0x5e40d6['appendChild'](_0x24e1f6);
        if (_0x50b187 !== _0x1d0285 && !_0x4e5d04['isDead']) {
            _0x5e40d6['style']['cursor'] = 'pointer';
            _0x5e40d6['title'] = 'Vote\x20for\x20' + _0xe63b77;
            _0x5e40d6['addEventListener']('click', _0x120cf4 => {
                _0x120cf4['stopPropagation']();
                if (_0x61fbec && _0x61fbec['readyState'] === WebSocket['OPEN']) {
                    _0x61fbec['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0xe63b77
                    }));
                }
            });
        }
        _0x49dc5d['appendChild'](_0x5e40d6);
    }
    const _0x419284 = document['createElement']('div');
    _0x419284['className'] = 'vote-tally-skip';
    _0x419284['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x1684a2 + '</span>';
    if (!_0x4e5d04['isDead']) {
        _0x419284['style']['cursor'] = 'pointer';
        _0x419284['title'] = 'Click\x20to\x20skip\x20vote';
        _0x419284['addEventListener']('click', _0x31a47a => {
            _0x31a47a['stopPropagation']();
            if (_0x61fbec && _0x61fbec['readyState'] === WebSocket['OPEN']) {
                _0x61fbec['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x49dc5d['appendChild'](_0x419284);
}
let _0x113616 = null;
let _0x3ae0ba = null;
let _0x457597 = null;
let _0x4224ad = null;
let _0x198928 = null;
function _0x366f29() {
    if (_0x61fbec && _0x61fbec['readyState'] === WebSocket['OPEN']) {
        _0x61fbec['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x113616,
            'abilityTarget': _0x3ae0ba,
            'killTarget': _0x457597
        }));
    }
}
function _0x536425() {
    if (_0x61fbec && _0x61fbec['readyState'] === WebSocket['OPEN']) {
        _0x61fbec['send'](JSON['stringify']({
            'type': 'blackmailer_action',
            'blackmailTarget': _0x4224ad,
            'killTarget': _0x198928
        }));
    }
}
function _0x479bd6() {
    const _0x28110e = document['getElementById']('ability-ui-body');
    if (!_0x28110e)
        return;
    _0x28110e['innerHTML'] = '';
    if (_0x785191 === 'Celebrity' || _0x785191 === 'Mayor') {
        const _0x1518f0 = document['createElement']('div');
        _0x1518f0['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x1518f0['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x28110e['appendChild'](_0x1518f0);
        return;
    }
    if (_0x785191 === 'Blackmailer') {
        const _0x42d172 = document['createElement']('div');
        _0x42d172['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x42d172['innerText'] = 'Blackmail\x20Target\x20(Silences\x20for\x20full\x20day):';
        _0x28110e['appendChild'](_0x42d172);
        const _0x52515f = document['createElement']('div');
        _0x52515f['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2012px;';
        const _0x4de326 = document['createElement']('button');
        _0x4de326['className'] = 'layer-btn';
        _0x4de326['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x4de326['innerText'] = 'No\x20one';
        if (_0x4224ad === null)
            _0x4de326['classList']['add']('active');
        _0x4de326['onclick'] = () => {
            _0x4224ad = null;
            _0x536425();
            _0x479bd6();
        };
        _0x52515f['appendChild'](_0x4de326);
        for (const _0x4bf8cf in _0x63e610) {
            const _0x364acf = _0x63e610[_0x4bf8cf];
            if (_0x364acf['isDead'])
                continue;
            const _0x740e26 = document['createElement']('button');
            _0x740e26['className'] = 'layer-btn';
            _0x740e26['innerText'] = _0x364acf['name'];
            if (_0x4224ad === parseInt(_0x4bf8cf))
                _0x740e26['classList']['add']('active');
            _0x740e26['onclick'] = () => {
                _0x4224ad = parseInt(_0x4bf8cf);
                _0x536425();
                _0x479bd6();
            };
            _0x52515f['appendChild'](_0x740e26);
        }
        if (!_0x4e5d04['isDead']) {
            const _0x48ce25 = document['createElement']('button');
            _0x48ce25['className'] = 'layer-btn';
            _0x48ce25['style']['cssText'] = 'grid-column:\x20span\x202;';
            _0x48ce25['innerText'] = _0x455647 + '\x20(Self\x20-\x20Decoy)';
            if (_0x4224ad === _0x1d0285)
                _0x48ce25['classList']['add']('active');
            _0x48ce25['onclick'] = () => {
                _0x4224ad = _0x1d0285;
                _0x536425();
                _0x479bd6();
            };
            _0x52515f['appendChild'](_0x48ce25);
        }
        _0x28110e['appendChild'](_0x52515f);
        const _0x2b6b1e = document['createElement']('div');
        _0x2b6b1e['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x2b6b1e['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x28110e['appendChild'](_0x2b6b1e);
        const _0x236a59 = document['createElement']('div');
        _0x236a59['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0xf49f3d = document['createElement']('button');
        _0xf49f3d['className'] = 'layer-btn';
        _0xf49f3d['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0xf49f3d['innerText'] = 'No\x20one';
        if (!_0x198928 && !_0x17a636['CURRENT_TARGET'])
            _0xf49f3d['classList']['add']('active');
        _0xf49f3d['onclick'] = () => {
            _0x198928 = null;
            _0x17a636['CURRENT_TARGET'] = null;
            _0x536425();
            _0x479bd6();
        };
        _0x236a59['appendChild'](_0xf49f3d);
        for (const _0x4b4b88 in _0x63e610) {
            const _0x12706d = _0x63e610[_0x4b4b88];
            if (_0x12706d['isDead'])
                continue;
            const _0x42b74a = document['createElement']('button');
            _0x42b74a['className'] = 'layer-btn';
            _0x42b74a['innerText'] = _0x12706d['name'];
            if (_0x198928 === parseInt(_0x4b4b88) || _0x17a636['CURRENT_TARGET'] === parseInt(_0x4b4b88))
                _0x42b74a['classList']['add']('active');
            _0x42b74a['onclick'] = () => {
                _0x198928 = parseInt(_0x4b4b88);
                _0x17a636['CURRENT_TARGET'] = parseInt(_0x4b4b88);
                _0x536425();
                _0x479bd6();
            };
            _0x236a59['appendChild'](_0x42b74a);
        }
        _0x28110e['appendChild'](_0x236a59);
        return;
    }
    if (_0x785191 === 'Skinwalker') {
        const _0x352ce1 = document['createElement']('div');
        _0x352ce1['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x352ce1['innerText'] = 'Transform\x20into:';
        _0x28110e['appendChild'](_0x352ce1);
        const _0x26b641 = document['createElement']('div');
        _0x26b641['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x44e06c = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x37a4f8 = _0x3e48cd => {
            if (_0x17a636['ROLES_IN_GAME'] && Array['isArray'](_0x17a636['ROLES_IN_GAME'])) {
                return _0x17a636['ROLES_IN_GAME']['includes'](_0x3e48cd);
            }
            if (_0x17a636['ROLE_LIST_RAW'] && _0x17a636['ROLE_LIST_RAW']['length'] > 0x0) {
                return _0x17a636['ROLE_LIST_RAW']['some'](_0x9feed0 => _0x9feed0['name'] === _0x3e48cd && !_0x9feed0['isDead']);
            }
            return ![];
        };
        const _0x44850e = [
            'None',
            ..._0x44e06c['filter'](_0x37a4f8)
        ];
        _0x44850e['forEach'](_0x46ad90 => {
            const _0x47890f = document['createElement']('button');
            _0x47890f['className'] = 'layer-btn';
            _0x47890f['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x47890f['innerText'] = _0x46ad90;
            const _0x375f03 = _0x46ad90 === 'None' && !_0x113616 || _0x113616 === _0x46ad90;
            if (_0x375f03)
                _0x47890f['classList']['add']('active');
            const _0x3a6372 = _0x46ad90 !== 'None' && _0x17a636['SKINWALKER_LAST_ROLE'] && _0x17a636['SKINWALKER_LAST_ROLE']['toLowerCase']() === _0x46ad90['toLowerCase']();
            if (_0x3a6372) {
                _0x47890f['style']['opacity'] = '0.45';
                _0x47890f['style']['cursor'] = 'not-allowed';
                _0x47890f['title'] = 'Cannot\x20transform\x20into\x20the\x20same\x20role\x20two\x20nights\x20in\x20a\x20row';
                _0x47890f['onclick'] = () => {
                    _0x470ee7('You\x20cannot\x20transform\x20into\x20' + _0x46ad90 + '\x20two\x20nights\x20in\x20a\x20row.', !![]);
                };
            } else {
                _0x47890f['onclick'] = () => {
                    _0x113616 = _0x46ad90 === 'None' ? null : _0x46ad90;
                    _0x366f29();
                    _0x479bd6();
                };
            }
            _0x26b641['appendChild'](_0x47890f);
        });
        _0x28110e['appendChild'](_0x26b641);
        if (_0x37a4f8('Vigilante')) {
            const _0x17dbc2 = document['createElement']('div');
            _0x17dbc2['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x17dbc2['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x28110e['appendChild'](_0x17dbc2);
        }
        if (_0x113616 === 'Vigilante') {
            const _0x1d1f3c = document['createElement']('div');
            _0x1d1f3c['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x1d1f3c['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x28110e['appendChild'](_0x1d1f3c);
        } else if (_0x113616 && _0x113616 !== 'Celebrity') {
            const _0x49660d = document['createElement']('div');
            _0x49660d['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x49660d['innerText'] = 'Use\x20' + _0x113616 + '\x20ability\x20on:';
            _0x28110e['appendChild'](_0x49660d);
            const _0x2bae73 = document['createElement']('div');
            _0x2bae73['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x36fdad = document['createElement']('button');
            _0x36fdad['className'] = 'layer-btn';
            _0x36fdad['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x36fdad['innerText'] = 'No\x20one';
            if (!_0x3ae0ba)
                _0x36fdad['classList']['add']('active');
            _0x36fdad['onclick'] = () => {
                _0x3ae0ba = null;
                _0x366f29();
                _0x479bd6();
            };
            _0x2bae73['appendChild'](_0x36fdad);
            for (const _0x460eb9 in _0x63e610) {
                const _0x45285d = _0x63e610[_0x460eb9];
                if (_0x45285d['isDead'])
                    continue;
                const _0x3f5681 = document['createElement']('button');
                _0x3f5681['className'] = 'layer-btn';
                _0x3f5681['innerText'] = _0x45285d['name'];
                if (_0x3ae0ba === parseInt(_0x460eb9))
                    _0x3f5681['classList']['add']('active');
                _0x3f5681['onclick'] = () => {
                    _0x3ae0ba = parseInt(_0x460eb9);
                    _0x366f29();
                    _0x479bd6();
                };
                _0x2bae73['appendChild'](_0x3f5681);
            }
            _0x28110e['appendChild'](_0x2bae73);
        }
        const _0x2f741c = document['createElement']('div');
        _0x2f741c['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x2f741c['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x28110e['appendChild'](_0x2f741c);
        const _0x2de79f = document['createElement']('div');
        _0x2de79f['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x31eb3c = document['createElement']('button');
        _0x31eb3c['className'] = 'layer-btn';
        _0x31eb3c['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x31eb3c['innerText'] = 'No\x20one';
        if (!_0x457597 && !_0x17a636['CURRENT_TARGET'])
            _0x31eb3c['classList']['add']('active');
        _0x31eb3c['onclick'] = () => {
            _0x457597 = null;
            _0x17a636['CURRENT_TARGET'] = null;
            _0x366f29();
            _0x479bd6();
        };
        _0x2de79f['appendChild'](_0x31eb3c);
        for (const _0x3a789b in _0x63e610) {
            const _0x41ec6e = _0x63e610[_0x3a789b];
            if (_0x41ec6e['isDead'])
                continue;
            const _0x3ae041 = document['createElement']('button');
            _0x3ae041['className'] = 'layer-btn';
            _0x3ae041['innerText'] = _0x41ec6e['name'];
            if (_0x457597 === parseInt(_0x3a789b) || _0x17a636['CURRENT_TARGET'] === parseInt(_0x3a789b))
                _0x3ae041['classList']['add']('active');
            _0x3ae041['onclick'] = () => {
                _0x457597 = parseInt(_0x3a789b);
                _0x17a636['CURRENT_TARGET'] = parseInt(_0x3a789b);
                _0x366f29();
                _0x479bd6();
            };
            _0x2de79f['appendChild'](_0x3ae041);
        }
        _0x28110e['appendChild'](_0x2de79f);
        return;
    }
    let _0x5c194b = '';
    let _0x7012d7 = ![];
    if (_0x785191 === 'Doctor') {
        _0x5c194b = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x7012d7 = !![];
    } else if (_0x785191 === 'Investigator') {
        _0x5c194b = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x785191 === 'Tracker') {
        _0x5c194b = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x785191 === 'Archer') {
        _0x5c194b = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x785191 === 'Escort') {
        _0x5c194b = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x785191 === 'Vigilante') {
        _0x5c194b = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x4c8524 = document['createElement']('div');
    _0x4c8524['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x4c8524['innerText'] = _0x5c194b;
    _0x28110e['appendChild'](_0x4c8524);
    const _0x276cd2 = document['createElement']('div');
    _0x276cd2['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x1daaf9 = document['createElement']('button');
    _0x1daaf9['className'] = 'layer-btn';
    _0x1daaf9['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x1daaf9['innerText'] = 'No\x20one';
    if (_0x17a636['CURRENT_TARGET'] === null)
        _0x1daaf9['classList']['add']('active');
    _0x1daaf9['onclick'] = () => {
        _0x17a636['CURRENT_TARGET'] = null;
        if (_0x61fbec && _0x61fbec['readyState'] === WebSocket['OPEN']) {
            _0x61fbec['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x479bd6();
    };
    _0x276cd2['appendChild'](_0x1daaf9);
    for (const _0x452e3e in _0x63e610) {
        const _0x35f6d4 = _0x63e610[_0x452e3e];
        if (_0x35f6d4['isDead'])
            continue;
        const _0x47ff34 = document['createElement']('button');
        _0x47ff34['className'] = 'layer-btn';
        _0x47ff34['innerText'] = _0x35f6d4['name'];
        if (_0x17a636['CURRENT_TARGET'] === parseInt(_0x452e3e))
            _0x47ff34['classList']['add']('active');
        _0x47ff34['onclick'] = () => {
            _0x17a636['CURRENT_TARGET'] = parseInt(_0x452e3e);
            if (_0x61fbec && _0x61fbec['readyState'] === WebSocket['OPEN']) {
                _0x61fbec['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x452e3e)
                }));
            }
            _0x479bd6();
        };
        _0x276cd2['appendChild'](_0x47ff34);
    }
    if (_0x7012d7 && !_0x4e5d04['isDead']) {
        const _0x1e3a88 = document['createElement']('button');
        _0x1e3a88['className'] = 'layer-btn';
        _0x1e3a88['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x1e3a88['innerText'] = _0x455647 + '\x20(Self)';
        if (_0x17a636['CURRENT_TARGET'] === _0x1d0285)
            _0x1e3a88['classList']['add']('active');
        _0x1e3a88['onclick'] = () => {
            _0x17a636['CURRENT_TARGET'] = _0x1d0285;
            if (_0x61fbec && _0x61fbec['readyState'] === WebSocket['OPEN']) {
                _0x61fbec['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x1d0285
                }));
            }
            _0x479bd6();
        };
        _0x276cd2['appendChild'](_0x1e3a88);
    }
    _0x28110e['appendChild'](_0x276cd2);
}
function _0x46b9ea() {
    if (_0x61fbec && (_0x61fbec['readyState'] === WebSocket['OPEN'] || _0x61fbec['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x1c9892 = new URLSearchParams();
    if (_0x3ce1ff)
        _0x1c9892['set']('token', _0x3ce1ff);
    _0x1c9892['set']('ngrok-skip-browser-warning', 'true');
    const _0x1182f5 = 'wss://opening-tales-fiscal-murphy.trycloudflare.com';
    const _0x2acecf = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x1182f5;
    const _0xf62c87 = _0x2acecf + '/?' + _0x1c9892['toString']();
    _0x61fbec = new WebSocket(_0xf62c87);
    _0x61fbec['onopen'] = function () {
        if (!_0x1be5ae && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x138e85 = window['_FB'] && window['_FB']['_currentUser'];
                const _0x46d24c = window['_FB'] && window['_FB']['_userData'];
                const _0x36808 = !(_0x138e85 && _0x46d24c && _0x46d24c['username']);
                const _0x59ac42 = _0x36808 ? 'body01.png' : _0x35a00d;
                const _0x16d38e = _0x36808 ? 'eyes4.png' : _0x791add;
                const _0x503d75 = !_0x36808 && _0x46d24c && _0x46d24c['photoURL'] ? _0x46d24c['photoURL'] : '';
                const _0x45a7df = !_0x36808 && _0x138e85 ? _0x138e85['uid'] : '';
                const _0x2d9767 = !_0x36808 && _0x46d24c ? {
                    'townWins': _0x46d24c['townWins'] || 0x0,
                    'mafiaWins': _0x46d24c['mafiaWins'] || 0x0,
                    'deaths': _0x46d24c['deaths'] || 0x0,
                    'townLosses': _0x46d24c['townLosses'] || 0x0,
                    'mafiaLosses': _0x46d24c['mafiaLosses'] || 0x0
                } : null;
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x455647,
                    'token': _0x3ce1ff,
                    'body': _0x59ac42,
                    'eyes': _0x16d38e,
                    'isGuest': _0x36808,
                    'uid': _0x45a7df,
                    'photoURL': _0x503d75,
                    'accountStats': _0x2d9767
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x61fbec && _0x61fbec['readyState'] === WebSocket['OPEN']) {
            _0x61fbec['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x61fbec['onclose'] = _0x2b173b => {
        if (_0x2b173b['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x2b173b['code'] === 0xfa2 || _0x2b173b['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x423d8c = document['getElementById']('disconnect-overlay');
        if (!_0x423d8c) {
            _0x423d8c = document['createElement']('div');
            _0x423d8c['id'] = 'disconnect-overlay';
            _0x423d8c['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Viga,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x423d8c['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x423d8c);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x61fbec['onmessage'] = _0x21b576 => {
        const _0x400756 = JSON['parse'](_0x21b576['data']);
        if (_0x400756['type'] === 'map_data') {
            _0x17a636['MAP']['tileSize'] = _0x400756['map']['tileSize'];
            _0x17a636['MAP']['columns'] = _0x400756['map']['columns'];
            _0x17a636['MAP']['rows'] = _0x400756['map']['rows'];
            _0x17a636['MAP']['layers'] = _0x400756['map']['layers'];
            if (_0x400756['map']['doors']) {
                _0x17a636['MAP']['doors'] = _0x400756['map']['doors'];
                const _0x57fefc = _0x17a636['MAP']['layers']['find'](_0x2bcb03 => _0x2bcb03['name'] === 'floor2');
                if (_0x57fefc) {
                    for (const _0x4ac3c8 in _0x17a636['MAP']['doors']) {
                        _0x57fefc['data'][parseInt(_0x4ac3c8)] = 0x2;
                    }
                }
            }
            if (_0x400756['entities'])
                _0x17a636['ENTITIES'] = _0x400756['entities'];
            _0x4070f8();
            _0x17a636['SYSTEM']['isReady'] = !![];
            _0xfab30a();
            if (!_0x17a636['SYSTEM']['_gameLoopRunning']) {
                _0x17a636['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x1dd328);
            }
            return;
        }
        if (_0x400756['type'] === 'init') {
            _0x1d0285 = _0x400756['id'];
            _0x1be5ae = ![];
            _0x3dca0f();
            if (_0x3f93f6) {
                const _0x43a3e0 = document['getElementById']('leaderboard-list');
                const _0x52344e = document['getElementById']('leaderboard-toggle');
                if (_0x43a3e0) {
                    _0x43a3e0['style']['display'] = 'none';
                    if (_0x52344e)
                        _0x52344e['style']['transform'] = 'rotate(180deg)';
                }
                const _0x1d180a = document['getElementById']('role-list-items');
                const _0x3cf32e = document['getElementById']('role-list-toggle');
                if (_0x1d180a) {
                    _0x1d180a['style']['display'] = 'none';
                    if (_0x3cf32e)
                        _0x3cf32e['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x328a73 = _0x400756['isOwner'] || ![];
            _0x455647 = _0x400756['name'] || _0x455647;
            _0x17a636['MAP']['tileSize'] = _0x400756['map']['tileSize'];
            _0x17a636['MAP']['columns'] = _0x400756['map']['columns'];
            _0x17a636['MAP']['rows'] = _0x400756['map']['rows'];
            _0x17a636['MAP']['layers'] = _0x400756['map']['layers'];
            if (_0x400756['map']['doors']) {
                _0x17a636['MAP']['doors'] = _0x400756['map']['doors'];
                const _0x4df9e6 = _0x17a636['MAP']['layers']['find'](_0x3bd8bc => _0x3bd8bc['name'] === 'floor2');
                if (_0x4df9e6) {
                    for (const _0x2d2c79 in _0x17a636['MAP']['doors']) {
                        _0x4df9e6['data'][parseInt(_0x2d2c79)] = 0x2;
                    }
                }
            }
            if (_0x400756['entities'])
                _0x17a636['ENTITIES'] = _0x400756['entities'];
            _0x4070f8();
            _0x4e5d04['x'] = _0x17a636['MAP']['columns'] * _0x17a636['MAP']['tileSize'] / 0x2;
            _0x4e5d04['y'] = _0x17a636['MAP']['rows'] * _0x17a636['MAP']['tileSize'] / 0x2;
            _0x17a636['CAMERA']['x'] = _0x4e5d04['x'] + _0x4e5d04['width'] / 0x2 - _0x17a636['CAMERA']['width'] / 0x2;
            _0x17a636['CAMERA']['y'] = _0x4e5d04['y'] + _0x4e5d04['height'] / 0x2 - _0x17a636['CAMERA']['height'] / 0x2;
            if (_0x328a73) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0xef627b();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            const _0x31f9a7 = document['getElementById']('role-index-btn-wrap');
            if (_0x31f9a7)
                _0x31f9a7['style']['display'] = 'block';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x17a636['SYSTEM']['lastTime'] = performance['now']();
            _0x17a636['SYSTEM']['isReady'] = !![];
            _0x2c0f3d();
            if (!_0x17a636['SYSTEM']['_gameLoopRunning']) {
                _0x17a636['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x1dd328);
            }
            return;
        } else if (_0x400756['type'] === 'state') {
            const _0x5521e9 = {};
            for (const _0x3d6d51 in _0x400756['players']) {
                if (parseInt(_0x3d6d51) === _0x1d0285)
                    continue;
                const _0x563df8 = _0x400756['players'][_0x3d6d51];
                const _0xf9e141 = _0x63e610[_0x3d6d51];
                if (_0xf9e141) {
                    const _0x2bec4a = _0x563df8['x'] - _0xf9e141['renderX'];
                    const _0x1c8cff = _0x563df8['y'] - _0xf9e141['renderY'];
                    const _0x336591 = _0x2bec4a * _0x2bec4a + _0x1c8cff * _0x1c8cff > 0x78 * 0x78;
                    Object['assign'](_0xf9e141, _0x563df8);
                    if (_0x336591) {
                        _0xf9e141['renderX'] = _0x563df8['x'];
                        _0xf9e141['renderY'] = _0x563df8['y'];
                    }
                    _0x5521e9[_0x3d6d51] = _0xf9e141;
                } else {
                    _0x5521e9[_0x3d6d51] = {
                        ..._0x563df8,
                        'renderX': _0x563df8['x'],
                        'renderY': _0x563df8['y'],
                        'renderAngle': _0x563df8['angle'] || 0x0
                    };
                }
            }
            _0x63e610 = _0x5521e9;
            _0x473b6e();
            if (_0x400756['players'][_0x1d0285]) {
                const _0x3dd71a = _0x400756['players'][_0x1d0285];
                _0x4e5d04['chats'] = _0x3dd71a['chats'] || [];
                _0x4e5d04['isDead'] = _0x3dd71a['isDead'];
                _0x4e5d04['hasArrow'] = _0x3dd71a['hasArrow'] || ![];
                if (_0x3dd71a['name'])
                    _0x455647 = _0x3dd71a['name'];
                _0x2c0f3d();
                const _0x5784e8 = Math['hypot'](_0x3dd71a['x'] - _0x4e5d04['x'], _0x3dd71a['y'] - _0x4e5d04['y']);
                if (_0x5784e8 > 0xfa) {
                    _0x4e5d04['x'] = _0x3dd71a['x'];
                    _0x4e5d04['y'] = _0x3dd71a['y'];
                } else if (_0x5784e8 > 0x50) {
                    _0x4e5d04['x'] += (_0x3dd71a['x'] - _0x4e5d04['x']) * 0.06;
                    _0x4e5d04['y'] += (_0x3dd71a['y'] - _0x4e5d04['y']) * 0.06;
                }
            }
            if (_0x400756['entities'])
                _0x17a636['ENTITIES'] = _0x400756['entities'];
            if (_0x400756['game']) {
                _0x17a636['GAME_STATE'] = _0x400756['game']['state'];
                _0x17a636['NIGHT_ABILITY_OPEN'] = _0x400756['game']['nightAbilityOpen'];
                if (_0x400756['game']['bloodSplatters'])
                    _0x3fef21 = _0x400756['game']['bloodSplatters'];
                if (_0x400756['game']['bloodDrops'])
                    _0xb001f3 = _0x400756['game']['bloodDrops'];
                if (_0x400756['game']['blackmailed']) {
                    _0x41ac78 = new Set(_0x400756['game']['blackmailed']);
                } else {
                    _0x41ac78['clear']();
                }
                if (_0x400756['game']['mayorRevealed']) {
                    for (const _0x53a804 in _0x400756['game']['mayorRevealed']) {
                        _0x282f02['add'](parseInt(_0x53a804));
                    }
                }
                if (_0x17a636['LAST_STATE'] !== _0x17a636['GAME_STATE']) {
                    if (_0x17a636['GAME_STATE'] !== 'NIGHT') {
                        _0x17a636['CURRENT_TARGET'] = null;
                        _0x113616 = null;
                        _0x3ae0ba = null;
                        _0x457597 = null;
                        _0x4224ad = null;
                        _0x198928 = null;
                        const _0x2ae4ca = document['getElementById']('ability-ui');
                        if (_0x2ae4ca)
                            _0x2ae4ca['style']['display'] = 'none';
                    }
                    if (_0x17a636['GAME_STATE'] === 'NIGHT') {
                        _0x4e5d04['chats'] = [];
                        for (const _0x3b676d in _0x63e610) {
                            _0x63e610[_0x3b676d]['chats'] = [];
                        }
                    }
                    _0x17a636['LAST_STATE'] = _0x17a636['GAME_STATE'];
                    _0x2061f3();
                    _0x4acfe8['onStateChange'](_0x17a636['GAME_STATE'], _0x400756['game']['nightAbilityOpen']);
                }
                const _0x334b7c = document['getElementById']('phase-ui');
                if (_0x334b7c) {
                    if (_0x400756['game']['state'] === 'LOBBY') {
                        _0x334b7c['style']['display'] = 'none';
                    } else {
                        _0x334b7c['style']['display'] = 'block';
                    }
                    let _0x5cafb3 = _0x400756['game']['state']['replace']('_', '\x20');
                    if (_0x400756['game']['state'] === 'DAY_DISCUSS') {
                        _0x5cafb3 = 'DAY\x20' + (_0x400756['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x400756['game']['timer'] + 's';
                    } else if (_0x400756['game']['state'] === 'DAY_VOTE') {
                        _0x5cafb3 = 'DAY\x20' + (_0x400756['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x400756['game']['timer'] + 's';
                    } else if (_0x400756['game']['state'] === 'NIGHT') {
                        const _0x43fa9c = _0x400756['game']['dayCount'] || 0x1;
                        if (_0x400756['game']['nightAbilityOpen']) {
                            _0x5cafb3 = 'NIGHT\x20' + _0x43fa9c + '\x20ABILITY\x20PHASE';
                            const _0x2168a1 = _0x400756['game']['abilityTimer'] !== undefined ? _0x400756['game']['abilityTimer'] : _0x400756['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x2168a1 + 's';
                        } else {
                            _0x5cafb3 = 'NIGHT\x20' + _0x43fa9c;
                            document['getElementById']('phase-timer')['innerText'] = _0x400756['game']['timer'] + 's';
                        }
                    }
                    if (_0x400756['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x5cafb3;
                    }
                }
                if (_0x400756['game']['state'] === 'NIGHT') {
                    const _0x543655 = document['getElementById']('ability-timer-label');
                    if (_0x543655) {
                        const _0x59819a = _0x400756['game']['abilityTimer'] !== undefined ? _0x400756['game']['abilityTimer'] : _0x400756['game']['timer'];
                        _0x543655['innerText'] = _0x400756['game']['nightAbilityOpen'] ? _0x59819a + 's' : '';
                    }
                    if (_0x400756['game']['nightAbilityOpen'] && !_0x57dec7 && !_0x4e5d04['isDead']) {
                        _0x57dec7 = !![];
                        _0x479bd6();
                        const _0x55a0dc = document['getElementById']('ability-ui');
                        if (_0x55a0dc)
                            _0x55a0dc['style']['display'] = 'block';
                    }
                    if (!_0x400756['game']['nightAbilityOpen']) {
                        const _0x1e7e32 = document['getElementById']('ability-ui');
                        if (_0x1e7e32 && _0x1e7e32['style']['display'] === 'block') {
                            _0x1e7e32['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x57dec7 = ![];
                }
                if (_0x400756['game']['rolesInGame']) {
                    _0x17a636['ROLES_IN_GAME'] = _0x400756['game']['rolesInGame'];
                }
                if (_0x400756['game']['skinwalkerLastRole'] !== undefined) {
                    _0x17a636['SKINWALKER_LAST_ROLE'] = _0x400756['game']['skinwalkerLastRole'];
                }
                if (_0x400756['game']['state'] === 'NIGHT') {
                    const _0x4fb79c = document['getElementById']('will-ui');
                    if (_0x4fb79c && _0x4fb79c['style']['display'] === 'flex') {
                        _0x4fb79c['style']['display'] = 'none';
                        const _0x2d5319 = document['getElementById']('will-input');
                        if (_0x2d5319)
                            _0x2d5319['blur']();
                    }
                }
                _0x180a67(_0x400756['game']);
                if (_0x400756['game']['roleListMode'] !== undefined) {
                    _0x17a636['ROLE_LIST_RAW'] = _0x400756['game']['roleList'] || [];
                    _0x1086bc(_0x400756['game']['roleList'], _0x400756['game']['roleListMode']);
                }
            }
        } else if (_0x400756['type'] === 'teleport') {
            _0x4e5d04['x'] = _0x400756['x'];
            _0x4e5d04['y'] = _0x400756['y'];
            _0x4e5d04['vx'] = 0x0;
            _0x4e5d04['vy'] = 0x0;
            _0x17a636['CAMERA']['x'] = null;
            if (_0x400756['teleportId'] !== undefined)
                _0x2e89bb = _0x400756['teleportId'];
        } else if (_0x400756['type'] === 'bulk_teleport') {
            for (const _0x383db4 in _0x400756['positions']) {
                const _0x5875ee = _0x400756['positions'][_0x383db4];
                if (parseInt(_0x383db4) === _0x1d0285) {
                    _0x4e5d04['x'] = _0x5875ee['x'];
                    _0x4e5d04['y'] = _0x5875ee['y'];
                    _0x4e5d04['vx'] = 0x0;
                    _0x4e5d04['vy'] = 0x0;
                    _0x17a636['CAMERA']['x'] = null;
                    continue;
                }
                const _0x4b362f = _0x63e610[_0x383db4];
                if (_0x4b362f) {
                    _0x4b362f['x'] = _0x5875ee['x'];
                    _0x4b362f['y'] = _0x5875ee['y'];
                    _0x4b362f['renderX'] = _0x5875ee['x'];
                    _0x4b362f['renderY'] = _0x5875ee['y'];
                    _0x4b362f['vx'] = 0x0;
                    _0x4b362f['vy'] = 0x0;
                }
            }
        } else if (_0x400756['type'] === 'player_left') {
            delete _0x63e610[_0x400756['id']];
            _0x282f02['delete'](parseInt(_0x400756['id']));
        } else if (_0x400756['type'] === 'map_update') {
            const _0x4f148c = _0x17a636['MAP']['layers']['find'](_0x44d135 => _0x44d135['name'] === _0x400756['layer']);
            if (_0x4f148c) {
                _0x4f148c['data'][_0x400756['row'] * _0x17a636['MAP']['columns'] + _0x400756['col']] = _0x400756['gid'];
                const _0x116d99 = _0x400756['row'] * _0x17a636['MAP']['columns'] + _0x400756['col'];
                if (_0x17a636['MAP']['doors'] && _0x17a636['MAP']['doors'][_0x116d99]) {
                    const _0x519a54 = _0x17a636['MAP']['layers']['find'](_0x3c4820 => _0x3c4820['name'] === 'floor2');
                    if (_0x519a54)
                        _0x519a54['data'][_0x116d99] = 0x2;
                }
                const _0xa3960f = Math['floor'](_0x400756['col'] * _0x17a636['MAP']['tileSize'] / _0x17a636['MAP']['chunkSize']);
                const _0x430133 = Math['floor'](_0x400756['row'] * _0x17a636['MAP']['tileSize'] / _0x17a636['MAP']['chunkSize']);
                _0x104f07(_0xa3960f, _0x430133);
                _0xad932c = null;
                _0x5c4359 = null;
            }
        } else if (_0x400756['type'] === 'role_assign') {
            _0x785191 = _0x400756['role'];
            _0x4e5d04['isDead'] = _0x785191 === 'Spectator';
            _0x282f02['clear']();
            _0x17a636['CURRENT_TARGET'] = null;
            _0x113616 = null;
            _0x3ae0ba = null;
            _0x457597 = null;
            _0x4224ad = null;
            _0x198928 = null;
            _0x57dec7 = ![];
            const _0x5ce15b = document['getElementById']('ability-ui');
            if (_0x5ce15b)
                _0x5ce15b['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x785191;
            _0x2061f3();
            _0x470ee7(_0x785191 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x785191, !![]);
            let _0x3784a6 = '';
            if (_0x785191 === 'Investigator')
                _0x3784a6 = 'Investigate\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x785191 === 'Tracker')
                _0x3784a6 = 'Track\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x785191 === 'Doctor')
                _0x3784a6 = 'Heal\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x785191 === 'Archer')
                _0x3784a6 = 'Guard\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x785191 === 'Escort')
                _0x3784a6 = 'Roleblock\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x785191 === 'Vigilante')
                _0x3784a6 = 'Shoot\x20during\x20the\x20first\x2030s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x785191 === 'Skinwalker')
                _0x3784a6 = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x785191 === 'Blackmailer')
                _0x3784a6 = 'Pick\x20a\x20player\x20to\x20blackmail\x20and\x20a\x20player\x20to\x20kill\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x785191 === 'Celebrity')
                _0x3784a6 = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x785191 === 'Mayor')
                _0x3784a6 = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x470ee7(_0x3784a6, !![]);
        } else if (_0x400756['type'] === 'mayor_reveal') {
            _0x282f02['add'](parseInt(_0x400756['playerId']));
            _0x2c0f3d();
            _0x2061f3();
        } else if (_0x400756['type'] === 'rolelist_update') {
            _0x17a636['ROLE_LIST_RAW'] = _0x400756['list'] || [];
            _0x1086bc(_0x400756['list'], _0x400756['mode']);
        } else if (_0x400756['type'] === 'sound_event') {
            _0x4acfe8['onSoundEvent'](_0x400756['track']);
        } else if (_0x400756['type'] === 'blood_splatter') {
            _0x3fef21['push']({
                'x': _0x400756['x'],
                'y': _0x400756['y']
            });
        } else if (_0x400756['type'] === 'blood_drop') {
            _0xb001f3['push']({
                'x': _0x400756['x'],
                'y': _0x400756['y']
            });
        } else if (_0x400756['type'] === 'day_fade') {
            _0x5aa0c9 = 0x1;
            _0xd2416d = performance['now']() + 0x3e8;
        } else if (_0x400756['type'] === 'player_stats_updated') {
            const _0x287859 = parseInt(_0x400756['id']);
            if (_0x287859 === _0x1d0285 && window['_FB'] && window['_FB']['_userData']) {
                Object['assign'](window['_FB']['_userData'], _0x400756['accountStats']);
            }
            if (_0x63e610[_0x400756['id']]) {
                _0x63e610[_0x400756['id']]['accountStats'] = _0x400756['accountStats'];
            }
            _0x473b6e();
        } else if (_0x400756['type'] === 'stats_update') {
            const _0x1e5f21 = window['_FB'];
            if (_0x1e5f21 && _0x1e5f21['_currentUser'] && _0x1e5f21['_userData']) {
                const _0x222f6e = _0x1e5f21['_currentUser']['uid'];
                const _0x48ec1b = _0x400756['patch'] || {};
                const _0x5bd764 = _0x1e5f21['_userData'];
                const _0x44cf67 = {
                    'townWins': (_0x5bd764['townWins'] || 0x0) + (_0x48ec1b['townWins'] || 0x0),
                    'mafiaWins': (_0x5bd764['mafiaWins'] || 0x0) + (_0x48ec1b['mafiaWins'] || 0x0),
                    'deaths': (_0x5bd764['deaths'] || 0x0) + (_0x48ec1b['deaths'] || 0x0),
                    'townLosses': (_0x5bd764['townLosses'] || 0x0) + (_0x48ec1b['townLosses'] || 0x0),
                    'mafiaLosses': (_0x5bd764['mafiaLosses'] || 0x0) + (_0x48ec1b['mafiaLosses'] || 0x0)
                };
                Object['assign'](_0x1e5f21['_userData'], _0x44cf67);
                const _0x2ce188 = _0x1e5f21['doc'](_0x1e5f21['db'], 'users', _0x222f6e);
                _0x1e5f21['updateDoc'](_0x2ce188, _0x44cf67)['catch'](() => {
                });
                if (_0x61fbec && _0x61fbec['readyState'] === WebSocket['OPEN']) {
                    _0x61fbec['send'](JSON['stringify']({
                        'type': 'stats_sync',
                        'accountStats': _0x44cf67
                    }));
                }
                _0x473b6e();
            }
        } else if (_0x400756['type'] === 'game_over') {
            _0x4acfe8['onStateChange']('LOBBY', ![]);
            _0x1086bc([], 'off');
            _0x785191 = null;
            _0x4e5d04['isDead'] = ![];
            _0x4e5d04['hasArrow'] = ![];
            _0x3fef21 = [];
            _0xb001f3 = [];
            _0x41ac78['clear']();
            _0x282f02['clear']();
            _0x17a636['CURRENT_TARGET'] = null;
            _0x113616 = null;
            _0x3ae0ba = null;
            _0x457597 = null;
            _0x4224ad = null;
            _0x198928 = null;
            _0x57dec7 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x2061f3();
            _0x470ee7('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x400756['type'] === 'chat_log') {
            _0x470ee7(_0x400756['text'], ![], !!_0x400756['isHost'], _0x400756['sender']);
        } else if (_0x400756['type'] === 'sys_chat') {
            _0x470ee7(_0x400756['text'], !![]);
        }
    };
}
function _0x470ee7(_0x2a37f8, _0x58702a = ![], _0x28d8d1 = ![], _0x4b9293 = null) {
    const _0x2c7670 = document['getElementById']('chat-log-messages');
    const _0x3621fd = document['getElementById']('chat-log-ui');
    const _0x54112c = _0x3621fd ? _0x3621fd['scrollHeight'] - _0x3621fd['scrollTop'] - _0x3621fd['clientHeight'] < 0x1e : !![];
    const _0x390e29 = document['createElement']('div');
    _0x390e29['className'] = 'chat-log-line' + (_0x58702a ? '\x20sys-msg' : '');
    if (_0x4b9293) {
        const _0x48704a = document['createElement']('span');
        _0x48704a['className'] = _0x28d8d1 ? 'chat-host-name' : 'chat-sender-name';
        _0x48704a['textContent'] = _0x4b9293 + ':\x20';
        const _0x443a3d = document['createElement']('span');
        _0x443a3d['className'] = 'chat-msg-text';
        _0x443a3d['textContent'] = _0x2a37f8;
        _0x390e29['appendChild'](_0x48704a);
        _0x390e29['appendChild'](_0x443a3d);
    } else {
        _0x390e29['innerText'] = _0x2a37f8;
    }
    if (_0x2c7670)
        _0x2c7670['appendChild'](_0x390e29);
    if (_0x3621fd && _0x54112c) {
        _0x3621fd['scrollTop'] = _0x3621fd['scrollHeight'];
    }
    if (_0x2c7670 && _0x2c7670['childElementCount'] > 0xc8) {
        _0x2c7670['removeChild'](_0x2c7670['firstChild']);
    }
}
function _0x34aa39(_0x1fefce, _0x40a5e1, _0x57ec12) {
    const _0x42acff = document['createElement']('canvas');
    _0x42acff['width'] = _0x57ec12;
    _0x42acff['height'] = _0x57ec12;
    const _0x37b39d = _0x42acff['getContext']('2d');
    _0x37b39d['imageSmoothingEnabled'] = ![];
    const _0x795e45 = 'assets/' + (_0x1fefce || 'body01.png');
    const _0x47451a = _0x55ae99(_0x795e45);
    if (_0x47451a['complete'] && _0x47451a['naturalWidth'] > 0x0)
        _0x37b39d['drawImage'](_0x47451a, 0x0, 0x0, _0x57ec12, _0x57ec12);
    if (_0x40a5e1) {
        const _0x42935f = 'assets/' + _0x40a5e1;
        const _0x5e8c11 = _0x55ae99(_0x42935f);
        if (_0x5e8c11['complete'] && _0x5e8c11['naturalWidth'] > 0x0)
            _0x37b39d['drawImage'](_0x5e8c11, 0x0, 0x0, _0x57ec12, _0x57ec12);
    }
    return _0x42acff['toDataURL']();
}
let _0x3d36ca = '';
function _0x473b6e() {
    const _0x448eb4 = document['getElementById']('chat-profile-panel');
    if (!_0x448eb4)
        return;
    const _0x34df64 = [];
    if (_0x1d0285 !== null) {
        const _0x1ec408 = _0x35a00d || 'body01.png';
        const _0x4bcb24 = _0x791add || 'eyes4.png';
        const _0x42a375 = window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null;
        _0x34df64['push']({
            'id': _0x1d0285,
            'name': _0x455647,
            'body': _0x1ec408,
            'eyes': _0x4bcb24,
            'stats': _0x42a375
        });
    }
    for (const _0x5b0acc in _0x63e610) {
        const _0x3f6a52 = _0x63e610[_0x5b0acc];
        const _0x5afd01 = _0x3f6a52['accountStats'] || null;
        _0x34df64['push']({
            'id': parseInt(_0x5b0acc),
            'name': _0x3f6a52['name'],
            'body': _0x3f6a52['body'] || 'body01.png',
            'eyes': _0x3f6a52['eyes'] || 'eyes4.png',
            'stats': _0x5afd01
        });
    }
    const _0x5c4a34 = _0x34df64['map'](_0x4e7ba5 => _0x4e7ba5['id'] + '_' + _0x4e7ba5['name'] + '_' + _0x4e7ba5['body'] + '_' + _0x4e7ba5['eyes'] + '_' + JSON['stringify'](_0x4e7ba5['stats']))['join']('|');
    if (_0x5c4a34 === _0x3d36ca)
        return;
    _0x3d36ca = _0x5c4a34;
    _0x448eb4['innerHTML'] = '';
    let _0x4e36a3 = ![];
    for (const _0x187e7b of _0x34df64) {
        _0x4e36a3 = !![];
        const _0x1301a0 = _0x34aa39(_0x187e7b['body'], _0x187e7b['eyes'], 0x20);
        const _0xb87cc7 = document['createElement']('div');
        _0xb87cc7['className'] = 'chat-pfp-entry';
        const _0xaa5c13 = document['createElement']('img');
        _0xaa5c13['src'] = _0x1301a0;
        _0xaa5c13['alt'] = _0x187e7b['name'];
        _0xb87cc7['appendChild'](_0xaa5c13);
        const _0x5e9047 = document['createElement']('div');
        _0x5e9047['className'] = 'chat-pfp-tooltip';
        let _0x587fb2 = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x187e7b['name'] + '</div>';
        const _0x2e09e0 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#55ee77\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202L4\x205v6c0\x205.25\x203.5\x2010.15\x208\x2011.35C16.5\x2021.15\x2020\x2016.25\x2020\x2011V5l-8-3z\x22/></svg>';
        const _0x164dd2 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#ff5555\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C8.13\x202\x205\x205.13\x205\x209c0\x202.38\x201.19\x204.47\x203\x205.74V17c0\x20.55.45\x201\x201\x201h6c.55\x200\x201-.45\x201-1v-2.26C17.81\x2013.47\x2019\x2011.38\x2019\x209c0-3.87-3.13-7-7-7zm-1\x2013v-1h2v1h-2zm-1-3V9.5l-1.5-1.5\x201.41-1.41L12\x207.91l1.09-1.09\x201.5\x201.5V12H10z\x22/></svg>';
        const _0x414ab3 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aaa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010\x2010-4.48\x2010-10S17.52\x202\x2012\x202zm-1\x2014H9V8h2v8zm4\x200h-2V8h2v8z\x22/></svg>';
        const _0x544210 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#6688aa\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x581648 = '<svg\x20width=\x2211\x22\x20height=\x2211\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22#aa4444\x22\x20style=\x22vertical-align:middle;margin-right:5px;flex-shrink:0;\x22><path\x20d=\x22M7.41\x208.59L12\x2013.17l4.59-4.58L18\x2010l-6\x206-6-6\x201.41-1.41z\x22/></svg>';
        const _0x28674a = (_0x1b46be, _0x411c5c, _0x5cc8eb, _0x37b9ec) => '<div\x20style=\x22display:flex;align-items:center;\x22>' + _0x1b46be + '<span\x20style=\x22flex:1;color:' + _0x37b9ec + ';\x22>' + _0x411c5c + '</span><span\x20style=\x22margin-left:10px;color:#ffcc00;\x22>' + _0x5cc8eb + '</span></div>';
        if (_0x187e7b['stats']) {
            _0x587fb2 += _0x28674a(_0x2e09e0, 'Town\x20Wins', _0x187e7b['stats']['townWins'] || 0x0, '#55ee77');
            _0x587fb2 += _0x28674a(_0x164dd2, 'Mafia\x20Wins', _0x187e7b['stats']['mafiaWins'] || 0x0, '#ff5555');
            _0x587fb2 += _0x28674a(_0x414ab3, 'Deaths', _0x187e7b['stats']['deaths'] || 0x0, '#aaa');
            _0x587fb2 += _0x28674a(_0x544210, 'Town\x20Losses', _0x187e7b['stats']['townLosses'] || 0x0, '#6688aa');
            _0x587fb2 += _0x28674a(_0x581648, 'Mafia\x20Losses', _0x187e7b['stats']['mafiaLosses'] || 0x0, '#aa4444');
        } else {
            _0x587fb2 += '<div\x20style=\x22color:#888;font-size:11px;\x22>No\x20stats</div>';
        }
        _0x5e9047['innerHTML'] = _0x587fb2;
        _0xb87cc7['appendChild'](_0x5e9047);
        _0x448eb4['appendChild'](_0xb87cc7);
    }
    const _0x2eb558 = document['getElementById']('chat-log-wrap');
    if (_0x2eb558) {
        if (_0x4e36a3) {
            _0x2eb558['classList']['add']('has-profiles');
            _0x448eb4['style']['display'] = 'flex';
        } else {
            _0x2eb558['classList']['remove']('has-profiles');
            _0x448eb4['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x473b6e;
let _0x2aed3d = -0x1, _0x547ddf = -0x1, _0xa6d5b4 = -0x1, _0x5aa9d5 = 0x0;
function _0x192f02() {
    if (!_0x1d0285 || !_0x61fbec || _0x61fbec['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x29a34f = performance['now']();
    const _0x1b4f5e = _0x29a34f - _0x5aa9d5;
    const _0x2d485d = Math['abs'](_0x4e5d04['x'] - _0x2aed3d) > 0.05 || Math['abs'](_0x4e5d04['y'] - _0x547ddf) > 0.05 || Math['abs'](_0x4e5d04['angle'] - _0xa6d5b4) > 0.02;
    if (!_0x2d485d && _0x1b4f5e < 0xc8)
        return;
    if (_0x1b4f5e < 0x19)
        return;
    _0x5aa9d5 = _0x29a34f;
    _0x2aed3d = _0x4e5d04['x'];
    _0x547ddf = _0x4e5d04['y'];
    _0xa6d5b4 = _0x4e5d04['angle'];
    if (!_0x1d0285 || !_0x61fbec || _0x61fbec['readyState'] !== WebSocket['OPEN'])
        return;
    _0x61fbec['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x4e5d04['x'],
        'y': _0x4e5d04['y'],
        'vx': _0x4e5d04['vx'],
        'vy': _0x4e5d04['vy'],
        'angle': _0x4e5d04['angle'],
        'scale': _0x4e5d04['scale'],
        'teleportId': _0x2e89bb,
        'clientTimestamp': Date['now']()
    }));
}
function _0x23b210() {
    if (_0x4e5d04['isDead'])
        return;
    const _0x245603 = _0x17a636['MAP']['layers']['find'](_0x1c4f14 => _0x1c4f14['name'] === 'walls');
    if (!_0x245603)
        return;
    const _0x456fe8 = _0x4e5d04['scale'];
    const _0x7d2d8b = _0x4e5d04['width'] * _0x456fe8 / 0x2;
    for (let _0x42a273 = 0x0; _0x42a273 < 0x3; _0x42a273++) {
        let _0x57920e = _0x4e5d04['x'] + _0x4e5d04['width'] / 0x2;
        let _0x542ebd = _0x4e5d04['y'] + _0x4e5d04['height'] / 0x2;
        const _0x3196cb = Math['floor']((_0x57920e - _0x7d2d8b) / _0x17a636['MAP']['tileSize']);
        const _0x5e07b0 = Math['floor']((_0x57920e + _0x7d2d8b) / _0x17a636['MAP']['tileSize']);
        const _0x4d4410 = Math['floor']((_0x542ebd - _0x7d2d8b) / _0x17a636['MAP']['tileSize']);
        const _0x1da81f = Math['floor']((_0x542ebd + _0x7d2d8b) / _0x17a636['MAP']['tileSize']);
        for (let _0x31e416 = _0x4d4410; _0x31e416 <= _0x1da81f; _0x31e416++) {
            for (let _0x5caf63 = _0x3196cb; _0x5caf63 <= _0x5e07b0; _0x5caf63++) {
                if (_0x5caf63 < 0x0 || _0x5caf63 >= _0x17a636['MAP']['columns'] || _0x31e416 < 0x0 || _0x31e416 >= _0x17a636['MAP']['rows'])
                    continue;
                if (_0x245603['data'][_0x31e416 * _0x17a636['MAP']['columns'] + _0x5caf63] === 0x0)
                    continue;
                const _0x4a6c64 = _0x5caf63 * _0x17a636['MAP']['tileSize'];
                const _0x533663 = _0x31e416 * _0x17a636['MAP']['tileSize'];
                const _0x560c8b = _0x57920e < _0x4a6c64 ? _0x4a6c64 : _0x57920e > _0x4a6c64 + _0x17a636['MAP']['tileSize'] ? _0x4a6c64 + _0x17a636['MAP']['tileSize'] : _0x57920e;
                const _0xc009a6 = _0x542ebd < _0x533663 ? _0x533663 : _0x542ebd > _0x533663 + _0x17a636['MAP']['tileSize'] ? _0x533663 + _0x17a636['MAP']['tileSize'] : _0x542ebd;
                const _0x10f066 = _0x57920e - _0x560c8b;
                const _0x1a9c14 = _0x542ebd - _0xc009a6;
                const _0x1c5438 = Math['sqrt'](_0x10f066 * _0x10f066 + _0x1a9c14 * _0x1a9c14);
                if (_0x1c5438 < _0x7d2d8b) {
                    if (_0x1c5438 === 0x0) {
                        const _0x320982 = _0x57920e - _0x4a6c64;
                        const _0x4b708d = _0x4a6c64 + _0x17a636['MAP']['tileSize'] - _0x57920e;
                        const _0x2f3409 = _0x542ebd - _0x533663;
                        const _0x1d6b6a = _0x533663 + _0x17a636['MAP']['tileSize'] - _0x542ebd;
                        const _0x3d070e = Math['min'](_0x320982, _0x4b708d, _0x2f3409, _0x1d6b6a);
                        if (_0x3d070e === _0x320982)
                            _0x57920e = _0x4a6c64 - _0x7d2d8b;
                        else if (_0x3d070e === _0x4b708d)
                            _0x57920e = _0x4a6c64 + _0x17a636['MAP']['tileSize'] + _0x7d2d8b;
                        else if (_0x3d070e === _0x2f3409)
                            _0x542ebd = _0x533663 - _0x7d2d8b;
                        else
                            _0x542ebd = _0x533663 + _0x17a636['MAP']['tileSize'] + _0x7d2d8b;
                    } else {
                        const _0x47d3cb = _0x7d2d8b - _0x1c5438;
                        _0x57920e += _0x10f066 / _0x1c5438 * _0x47d3cb;
                        _0x542ebd += _0x1a9c14 / _0x1c5438 * _0x47d3cb;
                        const _0x5c6e80 = _0x4e5d04['vx'] * (_0x10f066 / _0x1c5438) + _0x4e5d04['vy'] * (_0x1a9c14 / _0x1c5438);
                        if (_0x5c6e80 < 0x0) {
                            _0x4e5d04['vx'] -= _0x5c6e80 * (_0x10f066 / _0x1c5438);
                            _0x4e5d04['vy'] -= _0x5c6e80 * (_0x1a9c14 / _0x1c5438);
                        }
                    }
                }
            }
        }
        _0x4e5d04['x'] = _0x57920e - _0x4e5d04['width'] / 0x2;
        _0x4e5d04['y'] = _0x542ebd - _0x4e5d04['height'] / 0x2;
    }
}
function _0x23940e(_0x1c5e97) {
    const _0x58168a = _0x17a636['MAP']['layers']['find'](_0x4f5e25 => _0x4f5e25['name'] === 'walls');
    if (!_0x58168a)
        return;
    const _0x26ab3a = _0x1c5e97['width'] / 0x2;
    for (let _0x49f170 = 0x0; _0x49f170 < 0x2; _0x49f170++) {
        let _0x43d198 = _0x1c5e97['x'] + _0x1c5e97['width'] / 0x2;
        let _0x2f6a5e = _0x1c5e97['y'] + _0x1c5e97['height'] / 0x2;
        const _0xbc57e2 = Math['floor']((_0x43d198 - _0x26ab3a) / _0x17a636['MAP']['tileSize']);
        const _0x35892a = Math['floor']((_0x43d198 + _0x26ab3a) / _0x17a636['MAP']['tileSize']);
        const _0x358d10 = Math['floor']((_0x2f6a5e - _0x26ab3a) / _0x17a636['MAP']['tileSize']);
        const _0x349f80 = Math['floor']((_0x2f6a5e + _0x26ab3a) / _0x17a636['MAP']['tileSize']);
        for (let _0x3c186b = _0x358d10; _0x3c186b <= _0x349f80; _0x3c186b++) {
            for (let _0x37443c = _0xbc57e2; _0x37443c <= _0x35892a; _0x37443c++) {
                if (_0x37443c < 0x0 || _0x37443c >= _0x17a636['MAP']['columns'] || _0x3c186b < 0x0 || _0x3c186b >= _0x17a636['MAP']['rows'])
                    continue;
                if (_0x58168a['data'][_0x3c186b * _0x17a636['MAP']['columns'] + _0x37443c] === 0x0)
                    continue;
                const _0x195c5a = _0x37443c * _0x17a636['MAP']['tileSize'];
                const _0x57ab09 = _0x3c186b * _0x17a636['MAP']['tileSize'];
                const _0x1fcc1c = _0x43d198 < _0x195c5a ? _0x195c5a : _0x43d198 > _0x195c5a + _0x17a636['MAP']['tileSize'] ? _0x195c5a + _0x17a636['MAP']['tileSize'] : _0x43d198;
                const _0x388cb7 = _0x2f6a5e < _0x57ab09 ? _0x57ab09 : _0x2f6a5e > _0x57ab09 + _0x17a636['MAP']['tileSize'] ? _0x57ab09 + _0x17a636['MAP']['tileSize'] : _0x2f6a5e;
                const _0x1101f6 = _0x43d198 - _0x1fcc1c;
                const _0x45d580 = _0x2f6a5e - _0x388cb7;
                const _0x3a9a04 = Math['sqrt'](_0x1101f6 * _0x1101f6 + _0x45d580 * _0x45d580);
                if (_0x3a9a04 < _0x26ab3a) {
                    if (_0x3a9a04 === 0x0) {
                        const _0x3848c5 = _0x43d198 - _0x195c5a;
                        const _0x28991f = _0x195c5a + _0x17a636['MAP']['tileSize'] - _0x43d198;
                        const _0x3400fe = _0x2f6a5e - _0x57ab09;
                        const _0x16d3dc = _0x57ab09 + _0x17a636['MAP']['tileSize'] - _0x2f6a5e;
                        const _0x2b09f8 = Math['min'](_0x3848c5, _0x28991f, _0x3400fe, _0x16d3dc);
                        if (_0x2b09f8 === _0x3848c5)
                            _0x43d198 = _0x195c5a - _0x26ab3a;
                        else if (_0x2b09f8 === _0x28991f)
                            _0x43d198 = _0x195c5a + _0x17a636['MAP']['tileSize'] + _0x26ab3a;
                        else if (_0x2b09f8 === _0x3400fe)
                            _0x2f6a5e = _0x57ab09 - _0x26ab3a;
                        else
                            _0x2f6a5e = _0x57ab09 + _0x17a636['MAP']['tileSize'] + _0x26ab3a;
                    } else {
                        const _0x5e71e9 = _0x26ab3a - _0x3a9a04;
                        _0x43d198 += _0x1101f6 / _0x3a9a04 * _0x5e71e9;
                        _0x2f6a5e += _0x45d580 / _0x3a9a04 * _0x5e71e9;
                    }
                }
            }
        }
        _0x1c5e97['x'] = _0x43d198 - _0x1c5e97['width'] / 0x2;
        _0x1c5e97['y'] = _0x2f6a5e - _0x1c5e97['height'] / 0x2;
    }
}
function _0x2e2f69(_0x556b0e) {
    const _0x1122c2 = _0x556b0e['width'] / 0x2;
    for (let _0x12b0c1 = 0x0; _0x12b0c1 < 0x2; _0x12b0c1++) {
        let _0x46d3d0 = _0x556b0e['x'] + _0x556b0e['width'] / 0x2;
        let _0xa31b8c = _0x556b0e['y'] + _0x556b0e['height'] / 0x2;
        for (const _0x34c6f3 of _0x17a636['ENTITIES']) {
            const _0x2b5041 = _0x46d3d0 < _0x34c6f3['x'] ? _0x34c6f3['x'] : _0x46d3d0 > _0x34c6f3['x'] + _0x34c6f3['w'] ? _0x34c6f3['x'] + _0x34c6f3['w'] : _0x46d3d0;
            const _0x531483 = _0xa31b8c < _0x34c6f3['y'] ? _0x34c6f3['y'] : _0xa31b8c > _0x34c6f3['y'] + _0x34c6f3['h'] ? _0x34c6f3['y'] + _0x34c6f3['h'] : _0xa31b8c;
            const _0x44c77e = _0x46d3d0 - _0x2b5041;
            const _0x4c9678 = _0xa31b8c - _0x531483;
            const _0x2c0c74 = Math['sqrt'](_0x44c77e * _0x44c77e + _0x4c9678 * _0x4c9678);
            if (_0x2c0c74 < _0x1122c2 && _0x2c0c74 > 0x0) {
                const _0x9c7fe3 = _0x1122c2 - _0x2c0c74;
                const _0x10e4a3 = _0x44c77e / _0x2c0c74;
                const _0x56e862 = _0x4c9678 / _0x2c0c74;
                _0x46d3d0 += _0x10e4a3 * _0x9c7fe3;
                _0xa31b8c += _0x56e862 * _0x9c7fe3;
            } else if (_0x2c0c74 === 0x0) {
                const _0xacf1d = _0x46d3d0 - _0x34c6f3['x'];
                const _0x3ac96 = _0x34c6f3['x'] + _0x34c6f3['w'] - _0x46d3d0;
                const _0x16fbe4 = _0xa31b8c - _0x34c6f3['y'];
                const _0x161f5b = _0x34c6f3['y'] + _0x34c6f3['h'] - _0xa31b8c;
                const _0x24aee3 = Math['min'](_0xacf1d, _0x3ac96, _0x16fbe4, _0x161f5b);
                if (_0x24aee3 === _0xacf1d)
                    _0x46d3d0 = _0x34c6f3['x'] - _0x1122c2;
                else if (_0x24aee3 === _0x3ac96)
                    _0x46d3d0 = _0x34c6f3['x'] + _0x34c6f3['w'] + _0x1122c2;
                else if (_0x24aee3 === _0x16fbe4)
                    _0xa31b8c = _0x34c6f3['y'] - _0x1122c2;
                else
                    _0xa31b8c = _0x34c6f3['y'] + _0x34c6f3['h'] + _0x1122c2;
            }
        }
        _0x556b0e['x'] = _0x46d3d0 - _0x556b0e['width'] / 0x2;
        _0x556b0e['y'] = _0xa31b8c - _0x556b0e['height'] / 0x2;
    }
}
function _0x26e6d2() {
    if (_0x4e5d04['isDead'])
        return;
    const _0x385194 = _0x4e5d04['width'] / 0x2;
    const _0x19bbfa = _0x4e5d04['x'] + _0x4e5d04['width'] / 0x2;
    const _0x445d5a = _0x4e5d04['y'] + _0x4e5d04['height'] / 0x2;
    for (const _0x344247 in _0x63e610) {
        const _0x4763ec = _0x63e610[_0x344247];
        if (_0x4763ec['isDead'])
            continue;
        const _0x2cd11a = _0x4763ec['width'] / 0x2;
        const _0x3d7cbe = _0x385194 + _0x2cd11a;
        const _0x5b09c6 = (_0x4763ec['renderX'] ?? _0x4763ec['x']) + _0x4763ec['width'] / 0x2;
        const _0x583534 = (_0x4763ec['renderY'] ?? _0x4763ec['y']) + _0x4763ec['height'] / 0x2;
        const _0x47963c = _0x19bbfa - _0x5b09c6;
        const _0xcbdd = _0x445d5a - _0x583534;
        const _0x1d2df3 = Math['sqrt'](_0x47963c * _0x47963c + _0xcbdd * _0xcbdd);
        if (_0x1d2df3 > 0x0 && _0x1d2df3 < _0x3d7cbe) {
            const _0x1f5062 = _0x3d7cbe - _0x1d2df3;
            const _0x5de0b2 = _0x47963c / _0x1d2df3;
            const _0x2b8251 = _0xcbdd / _0x1d2df3;
            _0x4e5d04['x'] += _0x5de0b2 * (_0x1f5062 * 0.25);
            _0x4e5d04['y'] += _0x2b8251 * (_0x1f5062 * 0.25);
            _0x4763ec['x'] -= _0x5de0b2 * (_0x1f5062 * 0.75);
            _0x4763ec['y'] -= _0x2b8251 * (_0x1f5062 * 0.75);
            _0x23940e(_0x4763ec);
            _0x2e2f69(_0x4763ec);
            if (_0x4763ec['renderX'] !== undefined) {
                _0x4763ec['renderX'] = _0x4763ec['x'];
                _0x4763ec['renderY'] = _0x4763ec['y'];
            }
            const _0x21b7b8 = _0x4e5d04['vx'] * _0x5de0b2 + _0x4e5d04['vy'] * _0x2b8251;
            if (_0x21b7b8 < 0x0) {
                _0x4e5d04['vx'] -= _0x21b7b8 * _0x5de0b2 * 0.25;
                _0x4e5d04['vy'] -= _0x21b7b8 * _0x2b8251 * 0.25;
            }
        }
    }
    _0x23b210();
    _0x24f796();
}
function _0x24f796() {
    if (_0x4e5d04['isDead'])
        return;
    const _0x460950 = _0x4e5d04['scale'];
    const _0x59fdf3 = _0x4e5d04['width'] * _0x460950 / 0x2;
    for (let _0x75f74f = 0x0; _0x75f74f < 0x2; _0x75f74f++) {
        let _0x2ba915 = _0x4e5d04['x'] + _0x4e5d04['width'] / 0x2;
        let _0x380e37 = _0x4e5d04['y'] + _0x4e5d04['height'] / 0x2;
        for (const _0x2161a1 of _0x17a636['ENTITIES']) {
            const _0x2b916d = _0x2ba915 < _0x2161a1['x'] ? _0x2161a1['x'] : _0x2ba915 > _0x2161a1['x'] + _0x2161a1['w'] ? _0x2161a1['x'] + _0x2161a1['w'] : _0x2ba915;
            const _0x27cb34 = _0x380e37 < _0x2161a1['y'] ? _0x2161a1['y'] : _0x380e37 > _0x2161a1['y'] + _0x2161a1['h'] ? _0x2161a1['y'] + _0x2161a1['h'] : _0x380e37;
            const _0x45d58a = _0x2ba915 - _0x2b916d;
            const _0x24fe94 = _0x380e37 - _0x27cb34;
            const _0x52c3b9 = Math['sqrt'](_0x45d58a * _0x45d58a + _0x24fe94 * _0x24fe94);
            if (_0x52c3b9 < _0x59fdf3 && _0x52c3b9 > 0x0) {
                const _0x1e9f0c = _0x59fdf3 - _0x52c3b9;
                const _0x3f4f1e = _0x45d58a / _0x52c3b9;
                const _0x1a2155 = _0x24fe94 / _0x52c3b9;
                _0x2ba915 += _0x3f4f1e * _0x1e9f0c;
                _0x380e37 += _0x1a2155 * _0x1e9f0c;
                const _0x1f7720 = _0x4e5d04['vx'] * _0x3f4f1e + _0x4e5d04['vy'] * _0x1a2155;
                if (_0x1f7720 < 0x0) {
                    _0x4e5d04['vx'] -= _0x1f7720 * _0x3f4f1e;
                    _0x4e5d04['vy'] -= _0x1f7720 * _0x1a2155;
                }
            } else if (_0x52c3b9 === 0x0) {
                const _0x1c5974 = _0x2ba915 - _0x2161a1['x'];
                const _0x3b9cb5 = _0x2161a1['x'] + _0x2161a1['w'] - _0x2ba915;
                const _0x338ebe = _0x380e37 - _0x2161a1['y'];
                const _0x34fbbd = _0x2161a1['y'] + _0x2161a1['h'] - _0x380e37;
                const _0x32d36a = Math['min'](_0x1c5974, _0x3b9cb5, _0x338ebe, _0x34fbbd);
                if (_0x32d36a === _0x1c5974)
                    _0x2ba915 = _0x2161a1['x'] - _0x59fdf3;
                else if (_0x32d36a === _0x3b9cb5)
                    _0x2ba915 = _0x2161a1['x'] + _0x2161a1['w'] + _0x59fdf3;
                else if (_0x32d36a === _0x338ebe)
                    _0x380e37 = _0x2161a1['y'] - _0x59fdf3;
                else
                    _0x380e37 = _0x2161a1['y'] + _0x2161a1['h'] + _0x59fdf3;
            }
        }
        _0x4e5d04['x'] = _0x2ba915 - _0x4e5d04['width'] / 0x2;
        _0x4e5d04['y'] = _0x380e37 - _0x4e5d04['height'] / 0x2;
    }
}
function _0x36140b(_0x14a4cf, _0x19c938) {
    const _0xd32e25 = _0x17a636['MAP']['layers']['find'](_0x1ea9e7 => _0x1ea9e7['name'] === 'trees');
    if (!_0xd32e25)
        return ![];
    const _0x6f13ad = Math['floor'](_0x14a4cf / _0x17a636['MAP']['tileSize']);
    const _0x3fac6f = Math['floor'](_0x19c938 / _0x17a636['MAP']['tileSize']);
    if (_0x6f13ad < 0x0 || _0x6f13ad >= _0x17a636['MAP']['columns'] || _0x3fac6f < 0x0 || _0x3fac6f >= _0x17a636['MAP']['rows'])
        return ![];
    return _0xd32e25['data'][_0x3fac6f * _0x17a636['MAP']['columns'] + _0x6f13ad] === 0xb;
}
let _0xad932c = null;
function _0x1b77e3() {
    const _0x57f638 = _0x17a636['MAP'];
    const _0x42b0b8 = _0x57f638['layers']['find'](_0x58c7ad => _0x58c7ad['name'] === 'floor2');
    const _0x4f800d = _0x57f638['layers']['find'](_0x9e315a => _0x9e315a['name'] === 'walls');
    if (!_0x42b0b8 || !_0x4f800d) {
        _0xad932c = null;
        return;
    }
    const _0x266d76 = _0x57f638['columns'];
    const _0x2c7d73 = _0x57f638['rows'];
    const _0x38998b = [];
    const _0x409a11 = new Set();
    const _0x1d9b6f = new Set();
    for (let _0x3ccc1c = 0x0; _0x3ccc1c < _0x2c7d73; _0x3ccc1c++) {
        for (let _0x1925b7 = 0x0; _0x1925b7 < _0x266d76; _0x1925b7++) {
            const _0x41ec4e = _0x3ccc1c * _0x266d76 + _0x1925b7;
            const _0x6719f1 = _0x42b0b8['data'][_0x41ec4e];
            const _0x3009a4 = _0x4f800d['data'][_0x41ec4e];
            if (_0x6719f1 === 0x2 && _0x3009a4 === 0x0) {
                _0x38998b['push']({
                    'c': _0x1925b7,
                    'r': _0x3ccc1c
                });
                _0x1d9b6f['add'](_0x1925b7 + ',' + _0x3ccc1c);
            } else if (_0x3009a4 !== 0x0) {
                _0x409a11['add'](_0x1925b7 + ',' + _0x3ccc1c);
            }
        }
    }
    const _0x46bfe1 = [
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
                c: _0x28ef37,
                r: _0x1170bb
            } of _0x38998b) {
        for (const [_0x44410d, _0x5743cc] of _0x46bfe1) {
            const _0x5d8abc = _0x28ef37 + _0x44410d, _0x39bec4 = _0x1170bb + _0x5743cc;
            const _0x34852c = _0x5d8abc + ',' + _0x39bec4;
            if (!_0x1d9b6f['has'](_0x34852c)) {
                _0x409a11['add'](_0x34852c);
            }
        }
    }
    _0xad932c = {
        'wallSet': _0x409a11,
        'floorTiles': _0x38998b,
        'interiorSet': _0x1d9b6f
    };
}
function _0x424c11() {
    const _0x2c1f7e = _0x17a636['MAP']['layers']['find'](_0x24cbe9 => _0x24cbe9['name'] === 'floor2');
    if (!_0x2c1f7e)
        return ![];
    const _0x482663 = _0x4e5d04['x'] + _0x4e5d04['width'] / 0x2;
    const _0x176ac7 = _0x4e5d04['y'] + _0x4e5d04['height'] / 0x2;
    const _0x3831b1 = _0x17a636['MAP']['tileSize'];
    const _0x315d88 = Math['floor'](_0x482663 / _0x3831b1);
    const _0x353c5e = Math['floor'](_0x176ac7 / _0x3831b1);
    if (_0x315d88 < 0x0 || _0x315d88 >= _0x17a636['MAP']['columns'] || _0x353c5e < 0x0 || _0x353c5e >= _0x17a636['MAP']['rows'])
        return ![];
    const _0x33365f = _0x353c5e * _0x17a636['MAP']['columns'] + _0x315d88;
    if (_0x2c1f7e['data'][_0x33365f] === 0x2)
        return !![];
    if (_0x17a636['MAP']['doors'] && _0x17a636['MAP']['doors'][_0x33365f])
        return !![];
    const _0x20a4b6 = [
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
    for (const [_0x458b28, _0x5b4fcf] of _0x20a4b6) {
        const _0x554cf2 = Math['floor']((_0x482663 + _0x458b28) / _0x3831b1);
        const _0x492375 = Math['floor']((_0x176ac7 + _0x5b4fcf) / _0x3831b1);
        if (_0x554cf2 >= 0x0 && _0x554cf2 < _0x17a636['MAP']['columns'] && _0x492375 >= 0x0 && _0x492375 < _0x17a636['MAP']['rows']) {
            const _0x47b9c9 = _0x492375 * _0x17a636['MAP']['columns'] + _0x554cf2;
            if (_0x2c1f7e['data'][_0x47b9c9] === 0x2 || _0x17a636['MAP']['doors'] && _0x17a636['MAP']['doors'][_0x47b9c9]) {
                return !![];
            }
        }
    }
    return ![];
}
let _0x5c4359 = null, _0x25fcc9 = null;
function _0x559cb6() {
    if (_0x4e5d04['isDead']) {
        _0x17a636['SHADOW']['polygon'] = null;
        _0x5c4359 = null;
        return;
    }
    const _0x195cef = _0x17a636['MAP'];
    const _0x63210d = _0x17a636['SHADOW'];
    const _0x173d40 = _0x195cef['tileSize'];
    if (!_0xad932c)
        _0x1b77e3();
    if (!_0xad932c) {
        _0x63210d['polygon'] = null;
        _0x5c4359 = null;
        return;
    }
    const {
        wallSet: _0x11fd1e,
        floorTiles: _0x46fc90
    } = _0xad932c;
    if (_0x46fc90['length'] === 0x0) {
        _0x63210d['polygon'] = null;
        _0x5c4359 = null;
        return;
    }
    if (!_0x424c11()) {
        _0x63210d['polygon'] = null;
        _0x5c4359 = null;
        return;
    }
    const _0x4ef86d = _0x4e5d04['x'] + _0x4e5d04['width'] / 0x2;
    const _0x1df066 = _0x4e5d04['y'] + _0x4e5d04['height'] / 0x2;
    if (_0x5c4359 !== null && _0x63210d['polygon'] && Math['hypot'](_0x4ef86d - _0x5c4359, _0x1df066 - _0x25fcc9) < 0.5) {
        return;
    }
    _0x5c4359 = _0x4ef86d;
    _0x25fcc9 = _0x1df066;
    const _0x13074d = Math['floor'](_0x4ef86d / _0x173d40);
    const _0x33652d = Math['floor'](_0x1df066 / _0x173d40);
    const _0x2465c7 = Math['max'](0x0, _0x13074d - 0x8);
    const _0x4ffe93 = Math['min'](_0x195cef['columns'] - 0x1, _0x13074d + 0x8);
    const _0x5de518 = Math['max'](0x0, _0x33652d - 0x8);
    const _0x4a3ddf = Math['min'](_0x195cef['rows'] - 0x1, _0x33652d + 0x8);
    const _0x42d5ea = [];
    const _0x5198d1 = [];
    for (let _0x3c7297 = _0x5de518; _0x3c7297 <= _0x4a3ddf; _0x3c7297++) {
        for (let _0x75b154 = _0x2465c7; _0x75b154 <= _0x4ffe93; _0x75b154++) {
            if (!_0x11fd1e['has'](_0x75b154 + ',' + _0x3c7297))
                continue;
            const _0xcb391d = _0x75b154 * _0x173d40;
            const _0x2627fc = _0x3c7297 * _0x173d40;
            const _0x5bc4bd = _0xcb391d + _0x173d40;
            const _0x10e516 = _0x2627fc + _0x173d40;
            if (!_0x11fd1e['has'](_0x75b154 + ',' + (_0x3c7297 - 0x1))) {
                _0x42d5ea['push'](_0xcb391d, _0x2627fc, _0x5bc4bd, _0x2627fc);
                _0x5198d1['push'](_0xcb391d, _0x2627fc, _0x5bc4bd, _0x2627fc);
            }
            if (!_0x11fd1e['has'](_0x75b154 + ',' + (_0x3c7297 + 0x1))) {
                _0x42d5ea['push'](_0xcb391d, _0x10e516, _0x5bc4bd, _0x10e516);
                _0x5198d1['push'](_0xcb391d, _0x10e516, _0x5bc4bd, _0x10e516);
            }
            if (!_0x11fd1e['has'](_0x75b154 - 0x1 + ',' + _0x3c7297)) {
                _0x42d5ea['push'](_0xcb391d, _0x2627fc, _0xcb391d, _0x10e516);
                _0x5198d1['push'](_0xcb391d, _0x2627fc, _0xcb391d, _0x10e516);
            }
            if (!_0x11fd1e['has'](_0x75b154 + 0x1 + ',' + _0x3c7297)) {
                _0x42d5ea['push'](_0x5bc4bd, _0x2627fc, _0x5bc4bd, _0x10e516);
                _0x5198d1['push'](_0x5bc4bd, _0x2627fc, _0x5bc4bd, _0x10e516);
            }
        }
    }
    const _0x129cbb = new Set();
    const _0x5afe4d = [];
    const _0x11b855 = 0.0001;
    for (let _0x379a5d = 0x0; _0x379a5d < _0x5198d1['length']; _0x379a5d += 0x2) {
        const _0x4c6267 = _0x5198d1[_0x379a5d];
        const _0x1fe406 = _0x5198d1[_0x379a5d + 0x1];
        const _0x420ba6 = Math['atan2'](_0x1fe406 - _0x1df066, _0x4c6267 - _0x4ef86d);
        const _0x1131c2 = Math['round'](_0x420ba6 * 0x9c40);
        if (!_0x129cbb['has'](_0x1131c2 - 0x1)) {
            _0x129cbb['add'](_0x1131c2 - 0x1);
            _0x5afe4d['push'](_0x420ba6 - _0x11b855);
        }
        if (!_0x129cbb['has'](_0x1131c2)) {
            _0x129cbb['add'](_0x1131c2);
            _0x5afe4d['push'](_0x420ba6);
        }
        if (!_0x129cbb['has'](_0x1131c2 + 0x1)) {
            _0x129cbb['add'](_0x1131c2 + 0x1);
            _0x5afe4d['push'](_0x420ba6 + _0x11b855);
        }
    }
    for (let _0x27981c = 0x0; _0x27981c < 0x10; _0x27981c++) {
        const _0x591a58 = -Math['PI'] + _0x27981c * 0x2 * Math['PI'] / 0x10;
        _0x5afe4d['push'](_0x591a58);
    }
    _0x5afe4d['sort']((_0x231f8b, _0x3aad7a) => _0x231f8b - _0x3aad7a);
    const _0x4f0350 = 0xc * _0x173d40;
    const _0x49943b = [];
    for (let _0x152e4f = 0x0; _0x152e4f < _0x5afe4d['length']; _0x152e4f++) {
        const _0x414bda = _0x5afe4d[_0x152e4f];
        const _0x51cf8c = Math['cos'](_0x414bda);
        const _0x3d5209 = Math['sin'](_0x414bda);
        let _0x2ea835 = _0x4f0350;
        for (let _0x45706b = 0x0; _0x45706b < _0x42d5ea['length']; _0x45706b += 0x4) {
            const _0x5ad66b = _0x42d5ea[_0x45706b], _0x1fed00 = _0x42d5ea[_0x45706b + 0x1];
            const _0x558e55 = _0x42d5ea[_0x45706b + 0x2], _0xa9fc3 = _0x42d5ea[_0x45706b + 0x3];
            const _0x5cbe45 = _0x558e55 - _0x5ad66b;
            const _0x30bd05 = _0xa9fc3 - _0x1fed00;
            const _0x22408b = _0x51cf8c * _0x30bd05 - _0x3d5209 * _0x5cbe45;
            if (Math['abs'](_0x22408b) < 1e-9)
                continue;
            const _0x443edf = _0x5ad66b - _0x4ef86d;
            const _0x55f6f7 = _0x1fed00 - _0x1df066;
            const _0x14935b = (_0x443edf * _0x30bd05 - _0x55f6f7 * _0x5cbe45) / _0x22408b;
            const _0x2d6048 = (_0x443edf * _0x3d5209 - _0x55f6f7 * _0x51cf8c) / _0x22408b;
            if (_0x14935b > 0x1 && _0x2d6048 >= 0x0 && _0x2d6048 <= 0x1 && _0x14935b < _0x2ea835) {
                _0x2ea835 = _0x14935b;
            }
        }
        _0x49943b['push'](_0x4ef86d + _0x51cf8c * _0x2ea835, _0x1df066 + _0x3d5209 * _0x2ea835);
    }
    _0x63210d['polygon'] = _0x49943b['length'] >= 0x6 ? _0x49943b : null;
}
function _0x125fc7(_0x1dbb0f, _0xf16938, _0x543ceb) {
    if (_0x4e5d04['isDead'])
        return;
    if (!_0xad932c)
        _0x1b77e3();
    if (!_0xad932c)
        return;
    const {floorTiles: _0x2bc763} = _0xad932c;
    if (_0x2bc763['length'] === 0x0)
        return;
    const _0x180eba = _0x17a636['SHADOW'];
    const _0x16f9c5 = _0x17a636['MAP']['tileSize'];
    const _0x2a7b59 = _0x17a636['CAMERA']['width'];
    const _0x5733ce = _0x17a636['CAMERA']['height'];
    if (!_0x17a636['SHADOW']['_buf'] || _0x17a636['SHADOW']['_buf']['width'] !== _0x2a7b59 || _0x17a636['SHADOW']['_buf']['height'] !== _0x5733ce) {
        _0x17a636['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x17a636['SHADOW']['_buf']['width'] = _0x2a7b59;
        _0x17a636['SHADOW']['_buf']['height'] = _0x5733ce;
    }
    const _0x48a488 = _0x17a636['SHADOW']['_buf'];
    const _0x4bd9ad = _0x48a488['getContext']('2d');
    _0x4bd9ad['clearRect'](0x0, 0x0, _0x2a7b59, _0x5733ce);
    _0x4bd9ad['fillStyle'] = 'rgba(0,0,0,0.95)';
    _0x4bd9ad['beginPath']();
    for (const {
                c: _0x47edd0,
                r: _0x409cce
            } of _0x2bc763) {
        const _0xbc1857 = Math['round'](_0x47edd0 * _0x16f9c5 - _0xf16938), _0x1583e2 = Math['round'](_0x409cce * _0x16f9c5 - _0x543ceb);
        if (_0xbc1857 > _0x2a7b59 || _0x1583e2 > _0x5733ce || _0xbc1857 + _0x16f9c5 < 0x0 || _0x1583e2 + _0x16f9c5 < 0x0)
            continue;
        _0x4bd9ad['rect'](_0xbc1857, _0x1583e2, _0x16f9c5 + 0x1, _0x16f9c5 + 0x1);
    }
    _0x4bd9ad['fill']();
    if (_0x424c11() && _0x180eba['polygon'] && _0x180eba['polygon']['length'] >= 0x6) {
        _0x4bd9ad['globalCompositeOperation'] = 'destination-out';
        _0x4bd9ad['fillStyle'] = 'rgba(0,0,0,1)';
        const _0x28f71b = _0x180eba['polygon'];
        _0x4bd9ad['beginPath']();
        _0x4bd9ad['moveTo'](_0x28f71b[0x0] - _0xf16938, _0x28f71b[0x1] - _0x543ceb);
        for (let _0x269e92 = 0x2; _0x269e92 < _0x28f71b['length']; _0x269e92 += 0x2) {
            _0x4bd9ad['lineTo'](_0x28f71b[_0x269e92] - _0xf16938, _0x28f71b[_0x269e92 + 0x1] - _0x543ceb);
        }
        _0x4bd9ad['closePath']();
        _0x4bd9ad['fill']();
        _0x4bd9ad['globalCompositeOperation'] = 'source-over';
    }
    _0x1dbb0f['drawImage'](_0x48a488, 0x0, 0x0);
}
function _0x9d66e3(_0x3fefcb) {
    let _0x5f5d3f = 0x0, _0x1f2cf8 = 0x0;
    const _0x48efd7 = _0x17a636['INPUTS']['mouseX'] / _0x17a636['SYSTEM']['viewScale'];
    const _0x4f5a52 = _0x17a636['INPUTS']['mouseY'] / _0x17a636['SYSTEM']['viewScale'];
    const _0x4c2452 = _0x4e5d04['x'] - _0x17a636['CAMERA']['x'] + _0x4e5d04['width'] / 0x2;
    const _0x1e57d1 = _0x4e5d04['y'] - _0x17a636['CAMERA']['y'] + _0x4e5d04['height'] / 0x2;
    const _0x3cd734 = Math['atan2'](_0x4f5a52 - _0x1e57d1, _0x48efd7 - _0x4c2452);
    if (_0x1b41c0 !== 0x0 || _0x717faa !== 0x0) {
        _0x5f5d3f = _0x1b41c0;
        _0x1f2cf8 = _0x717faa;
    } else if (_0x59916c) {
        let _0x1e134f = 0x0, _0x33e53f = 0x0;
        if (_0x17a636['INPUTS']['keys']['w'] || _0x17a636['INPUTS']['keys']['arrowup'])
            _0x1e134f += 0x1;
        if (_0x17a636['INPUTS']['keys']['s'] || _0x17a636['INPUTS']['keys']['arrowdown'])
            _0x1e134f -= 0x1;
        if (_0x17a636['INPUTS']['keys']['d'] || _0x17a636['INPUTS']['keys']['arrowright'])
            _0x33e53f += 0x1;
        if (_0x17a636['INPUTS']['keys']['a'] || _0x17a636['INPUTS']['keys']['arrowleft'])
            _0x33e53f -= 0x1;
        if (_0x1e134f !== 0x0 || _0x33e53f !== 0x0) {
            const _0x16b981 = _0x3cd734 + Math['atan2'](_0x33e53f, _0x1e134f);
            _0x5f5d3f = Math['cos'](_0x16b981);
            _0x1f2cf8 = Math['sin'](_0x16b981);
        }
    } else {
        if (_0x17a636['INPUTS']['keys']['w'] || _0x17a636['INPUTS']['keys']['arrowup'])
            _0x1f2cf8 -= 0x1;
        if (_0x17a636['INPUTS']['keys']['s'] || _0x17a636['INPUTS']['keys']['arrowdown'])
            _0x1f2cf8 += 0x1;
        if (_0x17a636['INPUTS']['keys']['a'] || _0x17a636['INPUTS']['keys']['arrowleft'])
            _0x5f5d3f -= 0x1;
        if (_0x17a636['INPUTS']['keys']['d'] || _0x17a636['INPUTS']['keys']['arrowright'])
            _0x5f5d3f += 0x1;
        const _0x2fc134 = _0x5f5d3f !== 0x0 || _0x1f2cf8 !== 0x0;
        if (_0x2fc134) {
            const _0x2b5ea6 = Math['sqrt'](_0x5f5d3f * _0x5f5d3f + _0x1f2cf8 * _0x1f2cf8);
            _0x5f5d3f /= _0x2b5ea6;
            _0x1f2cf8 /= _0x2b5ea6;
        }
    }
    if (_0x17a636['GAME_STATE'] === 'NIGHT' && (_0x785191 === 'Skinwalker' || _0x785191 === 'Blackmailer')) {
        if (_0x17a636['NIGHT_ABILITY_OPEN'] || !_0x17a636['CURRENT_TARGET']) {
            _0x5f5d3f = 0x0;
            _0x1f2cf8 = 0x0;
            _0x4e5d04['vx'] = 0x0;
            _0x4e5d04['vy'] = 0x0;
            _0x4e5d04['x'] = _0x17a636['MAP']['columns'] * _0x17a636['MAP']['tileSize'] / 0x2 - _0x4e5d04['width'] / 0x2;
            _0x4e5d04['y'] = _0x17a636['MAP']['rows'] * _0x17a636['MAP']['tileSize'] / 0x2 - _0x4e5d04['height'] / 0x2;
        }
    }
    const _0x215226 = _0x5f5d3f !== 0x0 || _0x1f2cf8 !== 0x0;
    const _0x124746 = (_0x17a636['INPUTS']['keys']['shift'] || _0x5bf915 || _0x3036db) && _0x215226;
    _0x4e5d04['bopTimer'] = _0x124746 ? _0x4e5d04['bopTimer'] + _0x3fefcb : 0x0;
    _0x4e5d04['scale'] = 0x1 + (_0x4e5d04['bopTimer'] > 0x0 ? Math['sin'](_0x4e5d04['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x4919e3 = Math['pow'](0.001, _0x3fefcb);
    const _0x533875 = _0x124746 ? 0x74a : 0x5d5;
    _0x4e5d04['vx'] += _0x5f5d3f * _0x533875 * _0x3fefcb;
    _0x4e5d04['vy'] += _0x1f2cf8 * _0x533875 * _0x3fefcb;
    _0x4e5d04['vx'] *= _0x4919e3;
    _0x4e5d04['vy'] *= _0x4919e3;
    _0x4e5d04['x'] += _0x4e5d04['vx'] * _0x3fefcb;
    _0x4e5d04['y'] += _0x4e5d04['vy'] * _0x3fefcb;
    for (let _0x57c3ee = 0x0; _0x57c3ee < 0x3; _0x57c3ee++)
        _0x23b210();
    for (let _0x4c2d79 = 0x0; _0x4c2d79 < 0x2; _0x4c2d79++)
        _0x24f796();
    for (let _0x38f6e1 = 0x0; _0x38f6e1 < 0x2; _0x38f6e1++)
        _0x26e6d2();
    if (_0x4e5d04['x'] < 0x0)
        _0x4e5d04['x'] = 0x0;
    if (_0x4e5d04['y'] < 0x0)
        _0x4e5d04['y'] = 0x0;
    if (_0x4e5d04['x'] + _0x4e5d04['width'] > _0x17a636['MAP']['columns'] * _0x17a636['MAP']['tileSize'])
        _0x4e5d04['x'] = _0x17a636['MAP']['columns'] * _0x17a636['MAP']['tileSize'] - _0x4e5d04['width'];
    if (_0x4e5d04['y'] + _0x4e5d04['height'] > _0x17a636['MAP']['rows'] * _0x17a636['MAP']['tileSize'])
        _0x4e5d04['y'] = _0x17a636['MAP']['rows'] * _0x17a636['MAP']['tileSize'] - _0x4e5d04['height'];
    if (_0x135d12) {
        _0x4e5d04['angle'] = _0x3e9c3d + Math['PI'] / 0x2;
    } else if (_0x1b41c0 !== 0x0 || _0x717faa !== 0x0) {
        _0x4e5d04['angle'] = Math['atan2'](_0x717faa, _0x1b41c0) + Math['PI'] / 0x2;
    } else if (!_0x3f93f6) {
        _0x4e5d04['angle'] = _0x3cd734 + Math['PI'] / 0x2;
    }
    const _0x5732b4 = _0x4e5d04['x'] + _0x4e5d04['width'] / 0x2 - _0x17a636['CAMERA']['width'] / 0x2;
    const _0x4e6dbe = _0x4e5d04['y'] + _0x4e5d04['height'] / 0x2 - _0x17a636['CAMERA']['height'] / 0x2;
    if (_0x17a636['CAMERA']['x'] === null || isNaN(_0x17a636['CAMERA']['x']) || !isFinite(_0x17a636['CAMERA']['x'])) {
        _0x17a636['CAMERA']['x'] = _0x5732b4;
        _0x17a636['CAMERA']['y'] = _0x4e6dbe;
    } else {
        const _0x50745d = 0x1 - Math['exp'](-Math['max'](0x0, _0x3fefcb) * 0x28);
        _0x17a636['CAMERA']['x'] += (_0x5732b4 - _0x17a636['CAMERA']['x']) * _0x50745d;
        _0x17a636['CAMERA']['y'] += (_0x4e6dbe - _0x17a636['CAMERA']['y']) * _0x50745d;
    }
    for (const _0x18fecd in _0x63e610) {
        const _0x38ddd3 = _0x63e610[_0x18fecd];
        if (_0x38ddd3['renderX'] === undefined) {
            _0x38ddd3['renderX'] = _0x38ddd3['x'];
            _0x38ddd3['renderY'] = _0x38ddd3['y'];
            _0x38ddd3['renderAngle'] = _0x38ddd3['angle'] || 0x0;
        }
        const _0x2ceca5 = _0x38ddd3['x'] + (_0x38ddd3['vx'] || 0x0) * _0x3fefcb;
        const _0x252584 = _0x38ddd3['y'] + (_0x38ddd3['vy'] || 0x0) * _0x3fefcb;
        _0x38ddd3['x'] = _0x2ceca5;
        _0x38ddd3['y'] = _0x252584;
        const _0xc4497c = 0x1 - Math['exp'](-_0x3fefcb * 0x12);
        const _0x282c76 = _0x38ddd3['x'] - _0x38ddd3['renderX'], _0x131188 = _0x38ddd3['y'] - _0x38ddd3['renderY'];
        const _0x4cba2f = Math['sqrt'](_0x282c76 * _0x282c76 + _0x131188 * _0x131188);
        const _0x10b9bb = 0xc8;
        if (_0x4cba2f > _0x10b9bb) {
            _0x38ddd3['renderX'] = _0x38ddd3['x'] - _0x282c76 / _0x4cba2f * _0x10b9bb;
            _0x38ddd3['renderY'] = _0x38ddd3['y'] - _0x131188 / _0x4cba2f * _0x10b9bb;
        }
        _0x38ddd3['renderX'] += (_0x38ddd3['x'] - _0x38ddd3['renderX']) * _0xc4497c;
        _0x38ddd3['renderY'] += (_0x38ddd3['y'] - _0x38ddd3['renderY']) * _0xc4497c;
        let _0xe41e5c = (_0x38ddd3['angle'] || 0x0) - _0x38ddd3['renderAngle'];
        while (_0xe41e5c < -Math['PI'])
            _0xe41e5c += Math['PI'] * 0x2;
        while (_0xe41e5c > Math['PI'])
            _0xe41e5c -= Math['PI'] * 0x2;
        _0x38ddd3['renderAngle'] += _0xe41e5c * (0x1 - Math['exp'](-_0x3fefcb * 0x14));
    }
    if (_0x17a636['GAME_STATE'] === 'NIGHT') {
        _0x31ffec = Math['min'](0.6, _0x31ffec + _0x3fefcb * 0.5);
    } else {
        _0x31ffec = Math['max'](0x0, _0x31ffec - _0x3fefcb * 0.5);
    }
    if (_0x5aa0c9 > 0x0) {
        if (performance['now']() > _0xd2416d) {
            _0x5aa0c9 = Math['max'](0x0, _0x5aa0c9 - _0x3fefcb * 0x2);
        }
    }
    _0x559cb6();
    _0x192f02();
}
function _0x4971d6(_0x289540, _0x3da4ce, _0x5c5942, _0x2873ed, _0x32adda = !![]) {
    _0x289540['font'] = 'bold\x2014px\x20\x27Viga\x27,\x20sans-serif';
    const _0x4bb96d = _0x289540['measureText'](_0x3da4ce)['width'];
    const _0x7fc8c2 = _0x4bb96d + 0x18;
    const _0x558f96 = 0x1c;
    _0x289540['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x289540['beginPath']();
    if (_0x289540['roundRect']) {
        _0x289540['roundRect'](_0x5c5942 - _0x7fc8c2 / 0x2, _0x2873ed - _0x558f96, _0x7fc8c2, _0x558f96, 0x6);
    } else {
        _0x289540['rect'](_0x5c5942 - _0x7fc8c2 / 0x2, _0x2873ed - _0x558f96, _0x7fc8c2, _0x558f96);
    }
    _0x289540['fill']();
    if (_0x32adda) {
        _0x289540['beginPath']();
        _0x289540['moveTo'](_0x5c5942 - 0x6, _0x2873ed);
        _0x289540['lineTo'](_0x5c5942 + 0x6, _0x2873ed);
        _0x289540['lineTo'](_0x5c5942, _0x2873ed + 0x6);
        _0x289540['fill']();
    }
    _0x289540['fillStyle'] = '#ffffff';
    _0x289540['textAlign'] = 'center';
    _0x289540['textBaseline'] = 'middle';
    _0x289540['fillText'](_0x3da4ce, _0x5c5942, _0x2873ed - _0x558f96 / 0x2 + 0x1);
}
function _0x1d4b51(_0x534e47, _0x3f799a, _0x237c09, _0x46716a) {
    if (!_0x3f799a || _0x3f799a['length'] === 0x0)
        return;
    let _0x3e14d8 = _0x46716a;
    for (let _0x55e362 = 0x0; _0x55e362 < _0x3f799a['length']; _0x55e362++) {
        _0x4971d6(_0x534e47, _0x3f799a[_0x55e362]['text'], _0x237c09, _0x3e14d8, _0x55e362 === 0x0);
        _0x3e14d8 -= 0x24;
    }
}
function _0x39a013() {
    if (!_0x17a636['SYSTEM']['isReady'])
        return;
    if (_0x17a636['MAP']['layers'] && _0x17a636['MAP']['layers']['length'] > 0x0 && _0x1042d0['complete'] && _0x1042d0['naturalWidth'] > 0x0) {
        if (!_0x17a636['MAP']['_prerenderedWithTileset'] || !_0x17a636['MAP']['bgChunks'] || _0x17a636['MAP']['bgChunks']['length'] === 0x0) {
            _0x4070f8();
        }
    }
    if (!_0x17a636['MAP']['bgChunks'] || _0x17a636['MAP']['bgChunks']['length'] === 0x0 || !_0x17a636['MAP']['bgChunks'][0x0] || _0x17a636['MAP']['bgChunks'][0x0]['length'] === 0x0)
        return;
    _0x5ef86c['fillStyle'] = '#000000';
    _0x5ef86c['fillRect'](0x0, 0x0, _0x37334b['width'], _0x37334b['height']);
    _0x5ef86c['save']();
    try {
        _0x5ef86c['scale'](_0x17a636['SYSTEM']['viewScale'], _0x17a636['SYSTEM']['viewScale']);
        _0x5ef86c['imageSmoothingEnabled'] = ![];
        const _0x3bb24c = Math['floor'](_0x17a636['CAMERA']['x'] || 0x0);
        const _0xda92ae = Math['floor'](_0x17a636['CAMERA']['y'] || 0x0);
        const _0x3b0b7a = Math['max'](0x0, Math['floor'](_0x3bb24c / _0x17a636['MAP']['chunkSize']));
        const _0xa7d462 = Math['min'](_0x17a636['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x3bb24c + _0x17a636['CAMERA']['width']) / _0x17a636['MAP']['chunkSize']));
        const _0x2b6506 = Math['max'](0x0, Math['floor'](_0xda92ae / _0x17a636['MAP']['chunkSize']));
        const _0x4611e1 = Math['min'](_0x17a636['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0xda92ae + _0x17a636['CAMERA']['height']) / _0x17a636['MAP']['chunkSize']));
        for (let _0x12f66b = _0x2b6506; _0x12f66b <= _0x4611e1; _0x12f66b++)
            for (let _0x5c2c4f = _0x3b0b7a; _0x5c2c4f <= _0xa7d462; _0x5c2c4f++) {
                const _0xd076d1 = _0x5c2c4f * _0x17a636['MAP']['chunkSize'] - _0x3bb24c;
                const _0x497378 = _0x12f66b * _0x17a636['MAP']['chunkSize'] - _0xda92ae;
                _0x5ef86c['drawImage'](_0x17a636['MAP']['bgChunks'][_0x12f66b][_0x5c2c4f], _0xd076d1, _0x497378, _0x17a636['MAP']['chunkSize'] + 0x1, _0x17a636['MAP']['chunkSize'] + 0x1);
            }
        const _0x2d60f5 = _0x55ae99('assets/blood\x20splatter.png');
        if (_0x3fef21 && _0x3fef21['length'] > 0x0) {
            for (const _0x3b4050 of _0x3fef21) {
                const _0x3f9747 = _0x3b4050['x'] - _0x3bb24c;
                const _0x5c523c = _0x3b4050['y'] - _0xda92ae;
                if (_0x2d60f5['complete'] && _0x2d60f5['naturalWidth'] > 0x0) {
                    _0x5ef86c['drawImage'](_0x2d60f5, _0x3f9747 - 0x20, _0x5c523c - 0x20, 0x40, 0x40);
                } else {
                    _0x5ef86c['fillStyle'] = 'rgba(160,\x200,\x200,\x200.75)';
                    _0x5ef86c['beginPath']();
                    _0x5ef86c['arc'](_0x3f9747, _0x5c523c, 0x16, 0x0, Math['PI'] * 0x2);
                    _0x5ef86c['fill']();
                }
            }
        }
        const _0x28a829 = _0x55ae99('assets/blood.png');
        if (_0xb001f3 && _0xb001f3['length'] > 0x0) {
            for (const _0x5ca491 of _0xb001f3) {
                const _0x3c6136 = _0x5ca491['x'] - _0x3bb24c;
                const _0xdb6524 = _0x5ca491['y'] - _0xda92ae;
                if (_0x28a829['complete'] && _0x28a829['naturalWidth'] > 0x0) {
                    _0x5ef86c['drawImage'](_0x28a829, _0x3c6136 - 0xc, _0xdb6524 - 0xc, 0x18, 0x18);
                } else {
                    _0x5ef86c['fillStyle'] = 'rgba(180,\x200,\x200,\x200.8)';
                    _0x5ef86c['beginPath']();
                    _0x5ef86c['arc'](_0x3c6136, _0xdb6524, 0x5, 0x0, Math['PI'] * 0x2);
                    _0x5ef86c['fill']();
                }
            }
        }
        if (_0x4ab6dc['complete'] && _0x4ab6dc['naturalWidth'] > 0x0) {
            const _0x3818d6 = _0x17a636['MAP']['tileSize'];
            const _0xb41e0e = _0x3818d6 * 0xa;
            const _0x5a7209 = _0x17a636['MAP']['columns'] / 0x2 * _0x3818d6 - _0xb41e0e / 0x2 - _0x3bb24c;
            const _0x34b9eb = _0x17a636['MAP']['rows'] / 0x2 * _0x3818d6 - _0xb41e0e / 0x2 - _0xda92ae;
            _0x5ef86c['imageSmoothingEnabled'] = ![];
            _0x5ef86c['drawImage'](_0x4ab6dc, _0x5a7209, _0x34b9eb, _0xb41e0e, _0xb41e0e);
        }
        if (_0x1444a2['complete'] && _0x1444a2['naturalWidth'] > 0x0) {
            _0x17a636['ENTITIES']['forEach'](_0x21d47a => {
                if (_0x21d47a['type'] !== 'table')
                    return;
                _0x5ef86c['save']();
                _0x5ef86c['imageSmoothingEnabled'] = ![];
                const _0x5293d7 = _0x1444a2['naturalWidth'] >= _0x1444a2['naturalHeight'];
                const _0x548208 = _0x21d47a['w'] >= _0x21d47a['h'];
                if (_0x5293d7 === _0x548208) {
                    _0x5ef86c['drawImage'](_0x1444a2, _0x21d47a['x'] - _0x3bb24c, _0x21d47a['y'] - _0xda92ae, _0x21d47a['w'], _0x21d47a['h']);
                } else {
                    _0x5ef86c['translate'](_0x21d47a['x'] - _0x3bb24c + _0x21d47a['w'] / 0x2, _0x21d47a['y'] - _0xda92ae + _0x21d47a['h'] / 0x2);
                    _0x5ef86c['rotate'](Math['PI'] / 0x2);
                    _0x5ef86c['drawImage'](_0x1444a2, -_0x21d47a['h'] / 0x2, -_0x21d47a['w'] / 0x2, _0x21d47a['h'], _0x21d47a['w']);
                }
                _0x5ef86c['restore']();
            });
        } else {
            _0x17a636['ENTITIES']['forEach'](_0x82006d => {
                if (_0x82006d['type'] !== 'table')
                    return;
                _0x5ef86c['save']();
                _0x5ef86c['fillStyle'] = '#6b4423';
                _0x5ef86c['fillRect'](_0x82006d['x'] - _0x3bb24c, _0x82006d['y'] - _0xda92ae, _0x82006d['w'], _0x82006d['h']);
                _0x5ef86c['strokeStyle'] = '#422810';
                _0x5ef86c['lineWidth'] = 0x3;
                _0x5ef86c['strokeRect'](_0x82006d['x'] - _0x3bb24c + 0x1, _0x82006d['y'] - _0xda92ae + 0x1, _0x82006d['w'] - 0x2, _0x82006d['h'] - 0x2);
                _0x5ef86c['fillStyle'] = '#82532a';
                _0x5ef86c['fillRect'](_0x82006d['x'] - _0x3bb24c + 0x4, _0x82006d['y'] - _0xda92ae + 0x4, _0x82006d['w'] - 0x8, _0x82006d['h'] - 0x8);
                _0x5ef86c['restore']();
            });
        }
        if (_0x1be5ae) {
            if (_0x17a636['MAP']['wallChunks'] && _0x17a636['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0xb429e4 = _0x2b6506; _0xb429e4 <= _0x4611e1; _0xb429e4++) {
                    for (let _0x585d37 = _0x3b0b7a; _0x585d37 <= _0xa7d462; _0x585d37++) {
                        if (!_0x17a636['MAP']['wallChunks'][_0xb429e4] || !_0x17a636['MAP']['wallChunks'][_0xb429e4][_0x585d37])
                            continue;
                        const _0x5b2335 = _0x585d37 * _0x17a636['MAP']['chunkSize'] - _0x3bb24c;
                        const _0x4185b3 = _0xb429e4 * _0x17a636['MAP']['chunkSize'] - _0xda92ae;
                        _0x5ef86c['drawImage'](_0x17a636['MAP']['wallChunks'][_0xb429e4][_0x585d37], _0x5b2335, _0x4185b3, _0x17a636['MAP']['chunkSize'] + 0x1, _0x17a636['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x3188ea = _0x2b6506; _0x3188ea <= _0x4611e1; _0x3188ea++) {
                for (let _0x4cefc3 = _0x3b0b7a; _0x4cefc3 <= _0xa7d462; _0x4cefc3++) {
                    const _0x1a5af7 = _0x4cefc3 * _0x17a636['MAP']['chunkSize'] - _0x3bb24c;
                    const _0x1ae74c = _0x3188ea * _0x17a636['MAP']['chunkSize'] - _0xda92ae;
                    _0x5ef86c['drawImage'](_0x17a636['MAP']['fgChunks'][_0x3188ea][_0x4cefc3], _0x1a5af7, _0x1ae74c, _0x17a636['MAP']['chunkSize'] + 0x1, _0x17a636['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x2d507f = _0x17a636['GAME_STATE'] === 'NIGHT' && (_0x785191 === 'Skinwalker' || _0x785191 === 'Blackmailer') && !_0x4e5d04['isDead'];
        const _0x382824 = _0x4e5d04['x'] - _0x3bb24c + _0x4e5d04['width'] / 0x2;
        const _0x1f2212 = _0x4e5d04['y'] - _0xda92ae + _0x4e5d04['height'] / 0x2;
        const _0x8b7371 = _0x4e5d04['width'] * _0x4e5d04['scale'] * 1.3;
        const _0x55ec74 = _0x4e5d04['height'] * _0x4e5d04['scale'] * 1.3;
        const _0x1c1d80 = _0x55ae99('assets/arrow.png');
        const _0x3de9c4 = _0x55ae99('assets/tape.png');
        for (const _0x2f9b95 in _0x63e610) {
            const _0x1be236 = _0x63e610[_0x2f9b95];
            if (_0x1be236['isDead'])
                continue;
            const _0x686262 = parseInt(_0x2f9b95);
            const _0x58045b = (_0x1be236['renderX'] ?? _0x1be236['x']) - _0x3bb24c + _0x1be236['width'] / 0x2;
            const _0x18a79c = (_0x1be236['renderY'] ?? _0x1be236['y']) - _0xda92ae + _0x1be236['height'] / 0x2;
            const _0x3fdb52 = Math['min'](0x2, Math['max'](0.3, _0x1be236['scale'] || 0x1));
            const _0x35b75f = _0x1be236['width'] * _0x3fdb52 * 1.3;
            const _0x1eb9ca = _0x1be236['height'] * _0x3fdb52 * 1.3;
            _0x5ef86c['save']();
            try {
                _0x5ef86c['translate'](_0x58045b, _0x18a79c);
                _0x5ef86c['rotate'](_0x1be236['renderAngle'] ?? 0x0);
                if (_0x1be236['isDark'])
                    _0x5ef86c['filter'] = 'brightness(0)';
                _0x4456d1(_0x5ef86c, _0x1be236['body'], _0x1be236['eyes'], _0x35b75f, _0x1eb9ca);
                if (_0x282f02['has'](_0x686262) && _0x4f67a4['complete'] && _0x4f67a4['naturalWidth'] > 0x0) {
                    _0x5ef86c['drawImage'](_0x4f67a4, -_0x35b75f / 0x2, -_0x1eb9ca / 0x2, _0x35b75f, _0x1eb9ca);
                }
                if (_0x1be236['hasArrow'] && _0x17a636['GAME_STATE'] === 'NIGHT' && _0x1c1d80['complete'] && _0x1c1d80['naturalWidth'] > 0x0) {
                    _0x5ef86c['drawImage'](_0x1c1d80, -_0x35b75f / 0x2, -_0x1eb9ca / 0x2, _0x35b75f, _0x1eb9ca);
                }
                if ((_0x1be236['isBlackmailed'] || _0x41ac78['has'](_0x686262)) && _0x3de9c4['complete'] && _0x3de9c4['naturalWidth'] > 0x0) {
                    _0x5ef86c['drawImage'](_0x3de9c4, -_0x35b75f / 0x2, -_0x1eb9ca / 0x2, _0x35b75f, _0x1eb9ca);
                }
                if (_0x1be236['isDark'])
                    _0x5ef86c['filter'] = 'none';
            } finally {
                _0x5ef86c['restore']();
            }
            if (!_0x36140b((_0x1be236['renderX'] ?? _0x1be236['x']) + _0x1be236['width'] / 0x2, (_0x1be236['renderY'] ?? _0x1be236['y']) + _0x1be236['height'] / 0x2)) {
                _0x5ef86c['textAlign'] = 'center';
                _0x5ef86c['lineJoin'] = 'round';
                _0x5ef86c['lineWidth'] = 0x3;
                _0x5ef86c['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x5ef86c['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x4cfd66 = '#ffffff';
                if (_0x1be236['isBlackmailed'] || _0x41ac78['has'](_0x686262)) {
                    _0x4cfd66 = '#ff4444';
                } else if (_0x282f02['has'](_0x686262)) {
                    _0x4cfd66 = '#cc88ff';
                }
                _0x5ef86c['fillStyle'] = _0x4cfd66;
                const _0x3582aa = _0x1be236['isDark'] ? '???' : _0x1be236['name'] + (_0x1be236['isOwner'] ? '\x20[🗝️]' : '');
                _0x5ef86c['strokeText'](_0x3582aa, _0x58045b, _0x18a79c - _0x1eb9ca / 0x2 - 0x10);
                _0x5ef86c['fillText'](_0x3582aa, _0x58045b, _0x18a79c - _0x1eb9ca / 0x2 - 0x10);
            }
        }
        if (!_0x4e5d04['isDead']) {
            _0x5ef86c['save']();
            try {
                _0x5ef86c['translate'](_0x382824, _0x1f2212);
                _0x5ef86c['rotate'](_0x4e5d04['angle']);
                if (_0x2d507f)
                    _0x5ef86c['filter'] = 'brightness(0)';
                _0x4456d1(_0x5ef86c, _0x35a00d, _0x791add, _0x8b7371, _0x55ec74);
                if (_0x282f02['has'](_0x1d0285) && _0x4f67a4['complete'] && _0x4f67a4['naturalWidth'] > 0x0) {
                    _0x5ef86c['drawImage'](_0x4f67a4, -_0x8b7371 / 0x2, -_0x55ec74 / 0x2, _0x8b7371, _0x55ec74);
                }
                if (_0x4e5d04['hasArrow'] && _0x17a636['GAME_STATE'] === 'NIGHT' && _0x1c1d80['complete'] && _0x1c1d80['naturalWidth'] > 0x0) {
                    _0x5ef86c['drawImage'](_0x1c1d80, -_0x8b7371 / 0x2, -_0x55ec74 / 0x2, _0x8b7371, _0x55ec74);
                }
                if (_0x41ac78['has'](_0x1d0285) && _0x3de9c4['complete'] && _0x3de9c4['naturalWidth'] > 0x0) {
                    _0x5ef86c['drawImage'](_0x3de9c4, -_0x8b7371 / 0x2, -_0x55ec74 / 0x2, _0x8b7371, _0x55ec74);
                }
                if (_0x2d507f)
                    _0x5ef86c['filter'] = 'none';
            } finally {
                _0x5ef86c['restore']();
            }
            if (!_0x36140b(_0x4e5d04['x'] + _0x4e5d04['width'] / 0x2, _0x4e5d04['y'] + _0x4e5d04['height'] / 0x2)) {
                _0x5ef86c['textAlign'] = 'center';
                _0x5ef86c['lineJoin'] = 'round';
                _0x5ef86c['lineWidth'] = 0x3;
                _0x5ef86c['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x5ef86c['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                let _0x4aa698 = '#ffffff';
                if (_0x41ac78['has'](_0x1d0285)) {
                    _0x4aa698 = '#ff4444';
                } else if (_0x282f02['has'](_0x1d0285)) {
                    _0x4aa698 = '#cc88ff';
                }
                _0x5ef86c['fillStyle'] = _0x4aa698;
                const _0x5eb53 = _0x2d507f ? '???' : _0x455647 + (_0x328a73 ? '\x20[🗝️]' : '');
                _0x5ef86c['strokeText'](_0x5eb53, _0x382824, _0x1f2212 - _0x55ec74 / 0x2 - 0x10);
                _0x5ef86c['fillText'](_0x5eb53, _0x382824, _0x1f2212 - _0x55ec74 / 0x2 - 0x10);
            }
        }
        if (_0x17a636['MAP']['wallChunks'] && _0x17a636['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x2ad9c7 = _0x2b6506; _0x2ad9c7 <= _0x4611e1; _0x2ad9c7++)
                for (let _0x40dafe = _0x3b0b7a; _0x40dafe <= _0xa7d462; _0x40dafe++) {
                    if (!_0x17a636['MAP']['wallChunks'][_0x2ad9c7] || !_0x17a636['MAP']['wallChunks'][_0x2ad9c7][_0x40dafe])
                        continue;
                    const _0x3ce085 = _0x40dafe * _0x17a636['MAP']['chunkSize'] - _0x3bb24c;
                    const _0x192ad7 = _0x2ad9c7 * _0x17a636['MAP']['chunkSize'] - _0xda92ae;
                    _0x5ef86c['drawImage'](_0x17a636['MAP']['wallChunks'][_0x2ad9c7][_0x40dafe], _0x3ce085, _0x192ad7, _0x17a636['MAP']['chunkSize'] + 0x1, _0x17a636['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x293ea3 of _0x17a636['ENTITIES']) {
            if (_0x293ea3['type'] !== 'npc')
                continue;
            const _0x49972a = _0x293ea3['x'] - _0x3bb24c + _0x293ea3['w'] / 0x2;
            const _0x17bf3e = _0x293ea3['y'] - _0xda92ae + _0x293ea3['h'] / 0x2;
            const _0x203fb8 = _0x293ea3['w'];
            const _0x4839a0 = _0x293ea3['h'];
            _0x5ef86c['save']();
            _0x5ef86c['translate'](_0x49972a, _0x17bf3e);
            _0x5ef86c['rotate'](_0x293ea3['angle'] !== undefined ? _0x293ea3['angle'] : 0x0);
            _0x4456d1(_0x5ef86c, _0x293ea3['body'] || 'yanito932.png', _0x293ea3['eyes'], _0x203fb8, _0x4839a0);
            _0x5ef86c['restore']();
            _0x5ef86c['textAlign'] = 'center';
            _0x5ef86c['lineJoin'] = 'round';
            _0x5ef86c['lineWidth'] = 0x3;
            _0x5ef86c['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x5ef86c['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
            _0x5ef86c['fillStyle'] = '#aaaaaa';
            _0x5ef86c['strokeText'](_0x293ea3['name'] || 'NPC', _0x49972a, _0x17bf3e - _0x4839a0 / 0x2 - 0x10);
            _0x5ef86c['fillText'](_0x293ea3['name'] || 'NPC', _0x49972a, _0x17bf3e - _0x4839a0 / 0x2 - 0x10);
        }
        if (_0x4e5d04['isDead']) {
            for (const _0x1e30c3 in _0x63e610) {
                const _0x49beef = _0x63e610[_0x1e30c3];
                if (!_0x49beef['isDead'])
                    continue;
                const _0x506192 = (_0x49beef['renderX'] ?? _0x49beef['x']) - _0x3bb24c + _0x49beef['width'] / 0x2;
                const _0xdc48cf = (_0x49beef['renderY'] ?? _0x49beef['y']) - _0xda92ae + _0x49beef['height'] / 0x2;
                const _0x58b4c3 = _0x49beef['width'] * (_0x49beef['scale'] || 0x1) * 1.3;
                const _0x3ab175 = _0x49beef['height'] * (_0x49beef['scale'] || 0x1) * 1.3;
                _0x5ef86c['save']();
                try {
                    _0x5ef86c['translate'](_0x506192, _0xdc48cf);
                    _0x5ef86c['rotate'](_0x49beef['renderAngle'] ?? 0x0);
                    _0x5ef86c['globalAlpha'] = 0.3;
                    _0x4456d1(_0x5ef86c, _0x49beef['body'], _0x49beef['eyes'], _0x58b4c3, _0x3ab175);
                } finally {
                    _0x5ef86c['restore']();
                }
                if (!_0x36140b((_0x49beef['renderX'] ?? _0x49beef['x']) + _0x49beef['width'] / 0x2, (_0x49beef['renderY'] ?? _0x49beef['y']) + _0x49beef['height'] / 0x2)) {
                    _0x5ef86c['save']();
                    _0x5ef86c['globalAlpha'] = 0.3;
                    _0x5ef86c['textAlign'] = 'center';
                    _0x5ef86c['lineJoin'] = 'round';
                    _0x5ef86c['lineWidth'] = 0x3;
                    _0x5ef86c['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x5ef86c['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                    _0x5ef86c['fillStyle'] = '#ffffff';
                    const _0x5ea788 = _0x49beef['name'] + (_0x49beef['isOwner'] ? '\x20[🗝️]' : '');
                    _0x5ef86c['strokeText'](_0x5ea788, _0x506192, _0xdc48cf - _0x3ab175 / 0x2 - 0x10);
                    _0x5ef86c['fillText'](_0x5ea788, _0x506192, _0xdc48cf - _0x3ab175 / 0x2 - 0x10);
                    _0x5ef86c['restore']();
                }
            }
            _0x5ef86c['save']();
            try {
                _0x5ef86c['translate'](_0x382824, _0x1f2212);
                _0x5ef86c['rotate'](_0x4e5d04['angle']);
                _0x5ef86c['globalAlpha'] = 0.3;
                _0x4456d1(_0x5ef86c, _0x35a00d, _0x791add, _0x8b7371, _0x55ec74);
            } finally {
                _0x5ef86c['restore']();
            }
            if (!_0x36140b(_0x4e5d04['x'] + _0x4e5d04['width'] / 0x2, _0x4e5d04['y'] + _0x4e5d04['height'] / 0x2)) {
                _0x5ef86c['save']();
                _0x5ef86c['globalAlpha'] = 0.3;
                _0x5ef86c['textAlign'] = 'center';
                _0x5ef86c['lineJoin'] = 'round';
                _0x5ef86c['lineWidth'] = 0x3;
                _0x5ef86c['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x5ef86c['font'] = 'bold\x2013px\x20\x27Rubik\x27,\x20sans-serif';
                _0x5ef86c['fillStyle'] = '#ffffff';
                const _0x2ed744 = _0x455647 + (_0x328a73 ? '\x20[🗝️]' : '');
                _0x5ef86c['strokeText'](_0x2ed744, _0x382824, _0x1f2212 - _0x55ec74 / 0x2 - 0x10);
                _0x5ef86c['fillText'](_0x2ed744, _0x382824, _0x1f2212 - _0x55ec74 / 0x2 - 0x10);
                _0x5ef86c['restore']();
            }
        }
        for (let _0x3bf427 = _0x2b6506; _0x3bf427 <= _0x4611e1; _0x3bf427++)
            for (let _0x52e76d = _0x3b0b7a; _0x52e76d <= _0xa7d462; _0x52e76d++) {
                const _0x4f4266 = _0x52e76d * _0x17a636['MAP']['chunkSize'] - _0x3bb24c;
                const _0x45b2b8 = _0x3bf427 * _0x17a636['MAP']['chunkSize'] - _0xda92ae;
                _0x5ef86c['drawImage'](_0x17a636['MAP']['fgChunks'][_0x3bf427][_0x52e76d], _0x4f4266, _0x45b2b8, _0x17a636['MAP']['chunkSize'] + 0x1, _0x17a636['MAP']['chunkSize'] + 0x1);
            }
        if (_0x17a636['EDITOR']['enabled'] && _0x17a636['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0xa5093a = _0x17a636['INPUTS']['mouseX'] / _0x17a636['SYSTEM']['viewScale'] + _0x17a636['CAMERA']['x'];
            const _0x486206 = _0x17a636['INPUTS']['mouseY'] / _0x17a636['SYSTEM']['viewScale'] + _0x17a636['CAMERA']['y'];
            const _0x71be24 = Math['floor'](_0xa5093a / _0x17a636['MAP']['tileSize']);
            const _0x34b1b6 = Math['floor'](_0x486206 / _0x17a636['MAP']['tileSize']);
            if (_0x71be24 >= 0x0 && _0x71be24 < _0x17a636['MAP']['columns'] && _0x34b1b6 >= 0x0 && _0x34b1b6 < _0x17a636['MAP']['rows']) {
                const _0x49694c = _0x71be24 * _0x17a636['MAP']['tileSize'] - _0x3bb24c;
                const _0x1edff5 = _0x34b1b6 * _0x17a636['MAP']['tileSize'] - _0xda92ae;
                _0x5ef86c['save']();
                _0x5ef86c['globalAlpha'] = 0.5;
                if (_0x17a636['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x209567 = _0x17a636['EDITOR']['selectedTileGid'] - 0x1;
                    _0x5ef86c['drawImage'](_0x1042d0, _0x209567 % _0x17a636['MAP']['tilesetCols'] * _0x17a636['MAP']['tileSize'], Math['floor'](_0x209567 / _0x17a636['MAP']['tilesetCols']) * _0x17a636['MAP']['tileSize'], _0x17a636['MAP']['tileSize'], _0x17a636['MAP']['tileSize'], _0x49694c, _0x1edff5, _0x17a636['MAP']['tileSize'], _0x17a636['MAP']['tileSize']);
                } else {
                    _0x5ef86c['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x5ef86c['fillRect'](_0x49694c, _0x1edff5, _0x17a636['MAP']['tileSize'], _0x17a636['MAP']['tileSize']);
                }
                _0x5ef86c['restore']();
            }
        }
        _0x125fc7(_0x5ef86c, _0x3bb24c, _0xda92ae);
        if (_0x31ffec > 0x0) {
            _0x5ef86c['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x31ffec + ')';
            _0x5ef86c['fillRect'](0x0, 0x0, _0x17a636['CAMERA']['width'], _0x17a636['CAMERA']['height']);
        }
        for (const _0xab5dae in _0x63e610) {
            const _0x3105f1 = _0x63e610[_0xab5dae];
            if (_0x3105f1['isDead'] && !_0x4e5d04['isDead'])
                continue;
            const _0x21c906 = (_0x3105f1['renderX'] ?? _0x3105f1['x']) - _0x3bb24c + _0x3105f1['width'] / 0x2;
            const _0x13d609 = (_0x3105f1['renderY'] ?? _0x3105f1['y']) - _0xda92ae + _0x3105f1['height'] / 0x2;
            _0x1d4b51(_0x5ef86c, _0x3105f1['chats'], _0x21c906, _0x13d609 - _0x3105f1['height'] / 0x2 - 0x20);
        }
        _0x1d4b51(_0x5ef86c, _0x4e5d04['chats'], _0x382824, _0x1f2212 - _0x4e5d04['height'] / 0x2 - 0x20);
        if (_0x5aa0c9 > 0x0) {
            _0x5ef86c['fillStyle'] = 'rgba(0,\x200,\x200,\x20' + _0x5aa0c9 + ')';
            _0x5ef86c['fillRect'](0x0, 0x0, _0x17a636['CAMERA']['width'], _0x17a636['CAMERA']['height']);
        }
    } finally {
        _0x5ef86c['restore']();
    }
}
function _0x1dd328(_0x4e51ab) {
    if (!_0x17a636['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x1dd328);
    let _0x31cd13 = (_0x4e51ab - _0x17a636['SYSTEM']['lastTime']) / 0x3e8;
    _0x17a636['SYSTEM']['lastTime'] = _0x4e51ab;
    if (_0x31cd13 > 0.1)
        _0x31cd13 = 0.1;
    if (_0x31cd13 < 0x0 || isNaN(_0x31cd13))
        _0x31cd13 = 0.016;
    if (_0x1be5ae) {
        _0x3b48a6(_0x31cd13);
        _0x39a013();
        return;
    }
    if (!_0x1d0285)
        return;
    _0x9d66e3(_0x31cd13);
    _0x16ee8c['tick'](_0x4e51ab);
    _0x39a013();
}
function _0x4070f8() {
    if (_0x1042d0['complete'] && _0x1042d0['naturalWidth'] > 0x0) {
        _0x17a636['MAP']['_prerenderedWithTileset'] = !![];
    }
    const _0x4257b4 = Math['ceil'](_0x17a636['MAP']['columns'] * _0x17a636['MAP']['tileSize'] / _0x17a636['MAP']['chunkSize']);
    const _0x12426e = Math['ceil'](_0x17a636['MAP']['rows'] * _0x17a636['MAP']['tileSize'] / _0x17a636['MAP']['chunkSize']);
    _0x17a636['MAP']['bgChunks'] = [];
    _0x17a636['MAP']['fgChunks'] = [];
    _0x17a636['MAP']['wallChunks'] = [];
    for (let _0x4613d3 = 0x0; _0x4613d3 < _0x12426e; _0x4613d3++) {
        _0x17a636['MAP']['bgChunks'][_0x4613d3] = [];
        _0x17a636['MAP']['fgChunks'][_0x4613d3] = [];
        _0x17a636['MAP']['wallChunks'][_0x4613d3] = [];
        for (let _0x401506 = 0x0; _0x401506 < _0x4257b4; _0x401506++) {
            const _0x152e0e = document['createElement']('canvas');
            _0x152e0e['width'] = _0x152e0e['height'] = _0x17a636['MAP']['chunkSize'];
            const _0x2ee04c = document['createElement']('canvas');
            _0x2ee04c['width'] = _0x2ee04c['height'] = _0x17a636['MAP']['chunkSize'];
            const _0x36a337 = document['createElement']('canvas');
            _0x36a337['width'] = _0x36a337['height'] = _0x17a636['MAP']['chunkSize'];
            _0x17a636['MAP']['bgChunks'][_0x4613d3][_0x401506] = _0x152e0e;
            _0x17a636['MAP']['fgChunks'][_0x4613d3][_0x401506] = _0x2ee04c;
            _0x17a636['MAP']['wallChunks'][_0x4613d3][_0x401506] = _0x36a337;
            _0x104f07(_0x401506, _0x4613d3);
        }
    }
}
function _0x104f07(_0x414d2a, _0x3445db) {
    const _0x151835 = _0x17a636['MAP']['bgChunks'][_0x3445db][_0x414d2a]['getContext']('2d', { 'alpha': !![] });
    const _0x4e4200 = _0x17a636['MAP']['fgChunks'][_0x3445db][_0x414d2a]['getContext']('2d', { 'alpha': !![] });
    const _0x4f6b6b = _0x17a636['MAP']['wallChunks'][_0x3445db] && _0x17a636['MAP']['wallChunks'][_0x3445db][_0x414d2a] ? _0x17a636['MAP']['wallChunks'][_0x3445db][_0x414d2a]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x151835['imageSmoothingEnabled'] = _0x4e4200['imageSmoothingEnabled'] = ![];
    if (_0x4f6b6b)
        _0x4f6b6b['imageSmoothingEnabled'] = ![];
    _0x151835['clearRect'](0x0, 0x0, _0x17a636['MAP']['chunkSize'], _0x17a636['MAP']['chunkSize']);
    _0x4e4200['clearRect'](0x0, 0x0, _0x17a636['MAP']['chunkSize'], _0x17a636['MAP']['chunkSize']);
    if (_0x4f6b6b)
        _0x4f6b6b['clearRect'](0x0, 0x0, _0x17a636['MAP']['chunkSize'], _0x17a636['MAP']['chunkSize']);
    const _0x598cef = Math['floor'](_0x414d2a * _0x17a636['MAP']['chunkSize'] / _0x17a636['MAP']['tileSize']);
    const _0x119b4b = Math['ceil']((_0x414d2a + 0x1) * _0x17a636['MAP']['chunkSize'] / _0x17a636['MAP']['tileSize']);
    const _0x1cbb7e = Math['floor'](_0x3445db * _0x17a636['MAP']['chunkSize'] / _0x17a636['MAP']['tileSize']);
    const _0x16a36c = Math['ceil']((_0x3445db + 0x1) * _0x17a636['MAP']['chunkSize'] / _0x17a636['MAP']['tileSize']);
    const _0x41e924 = 0.5;
    const _0x5223e4 = _0x17a636['MAP']['tileSize'] - _0x41e924 * 0x2;
    _0x17a636['MAP']['layers']['forEach'](_0x4c0bb5 => {
        const _0x3f6548 = _0x4c0bb5['name'] === 'walls';
        const _0x54d5d1 = _0x4c0bb5['name'] === 'trees' ? _0x4e4200 : _0x3f6548 ? _0x4f6b6b || _0x151835 : _0x151835;
        for (let _0x2a3ae3 = Math['max'](0x0, _0x1cbb7e); _0x2a3ae3 < Math['min'](_0x17a636['MAP']['rows'], _0x16a36c); _0x2a3ae3++) {
            for (let _0x149996 = Math['max'](0x0, _0x598cef); _0x149996 < Math['min'](_0x17a636['MAP']['columns'], _0x119b4b); _0x149996++) {
                let _0x4c206b = _0x4c0bb5['data'][_0x2a3ae3 * _0x17a636['MAP']['columns'] + _0x149996];
                if (_0x4c0bb5['name'] === 'floor2' && _0x17a636['MAP']['doors'] && _0x17a636['MAP']['doors'][_0x2a3ae3 * _0x17a636['MAP']['columns'] + _0x149996]) {
                    _0x4c206b = 0x2;
                }
                if (_0x4c206b > 0x0) {
                    const _0x391c41 = _0x4c206b - 0x1;
                    const _0x504a6b = _0x391c41 % _0x17a636['MAP']['tilesetCols'] * _0x17a636['MAP']['tileSize'] + _0x41e924;
                    const _0x1c7725 = Math['floor'](_0x391c41 / _0x17a636['MAP']['tilesetCols']) * _0x17a636['MAP']['tileSize'] + _0x41e924;
                    const _0xdb2d0c = _0x149996 * _0x17a636['MAP']['tileSize'] - _0x414d2a * _0x17a636['MAP']['chunkSize'];
                    const _0x368acd = _0x2a3ae3 * _0x17a636['MAP']['tileSize'] - _0x3445db * _0x17a636['MAP']['chunkSize'];
                    if (_0x4c206b === 0x4) {
                        const _0xc2cf7b = 0x1;
                        const _0x5c4436 = _0xc2cf7b % _0x17a636['MAP']['tilesetCols'] * _0x17a636['MAP']['tileSize'] + _0x41e924;
                        const _0x507ba4 = Math['floor'](_0xc2cf7b / _0x17a636['MAP']['tilesetCols']) * _0x17a636['MAP']['tileSize'] + _0x41e924;
                        _0x151835['drawImage'](_0x1042d0, _0x5c4436, _0x507ba4, _0x5223e4, _0x5223e4, _0xdb2d0c, _0x368acd, _0x17a636['MAP']['tileSize'], _0x17a636['MAP']['tileSize']);
                        let _0x26538d = _0x17a636['MAP']['doors'] ? _0x17a636['MAP']['doors'][_0x2a3ae3 * _0x17a636['MAP']['columns'] + _0x149996] : null;
                        if (!_0x26538d) {
                            const _0x11377d = _0x17a636['MAP']['layers']['find'](_0x54dc90 => _0x54dc90['name'] === 'walls');
                            const _0x49e99a = _0x2a3ae3 > 0x0 && _0x11377d && _0x11377d['data'][(_0x2a3ae3 - 0x1) * _0x17a636['MAP']['columns'] + _0x149996] > 0x0;
                            const _0x516b2e = _0x2a3ae3 < _0x17a636['MAP']['rows'] - 0x1 && _0x11377d && _0x11377d['data'][(_0x2a3ae3 + 0x1) * _0x17a636['MAP']['columns'] + _0x149996] > 0x0;
                            const _0x138ebf = _0x149996 > 0x0 && _0x11377d && _0x11377d['data'][_0x2a3ae3 * _0x17a636['MAP']['columns'] + _0x149996 - 0x1] > 0x0;
                            const _0xaea1b3 = _0x149996 < _0x17a636['MAP']['columns'] - 0x1 && _0x11377d && _0x11377d['data'][_0x2a3ae3 * _0x17a636['MAP']['columns'] + _0x149996 + 0x1] > 0x0;
                            if (_0x138ebf && _0xaea1b3)
                                _0x26538d = _0x2a3ae3 < _0x17a636['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x49e99a && _0x516b2e)
                                _0x26538d = _0x149996 < _0x17a636['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x16dfeb = 0x0;
                        if (_0x26538d === 'bottom')
                            _0x16dfeb = Math['PI'] / 0x2;
                        else if (_0x26538d === 'left')
                            _0x16dfeb = Math['PI'];
                        else if (_0x26538d === 'top')
                            _0x16dfeb = -Math['PI'] / 0x2;
                        else if (_0x26538d === 'right')
                            _0x16dfeb = 0x0;
                        if (_0x16dfeb !== 0x0) {
                            _0x54d5d1['save']();
                            _0x54d5d1['translate'](_0xdb2d0c + _0x17a636['MAP']['tileSize'] / 0x2, _0x368acd + _0x17a636['MAP']['tileSize'] / 0x2);
                            _0x54d5d1['rotate'](_0x16dfeb);
                            _0x54d5d1['drawImage'](_0x1042d0, _0x504a6b, _0x1c7725, _0x5223e4, _0x5223e4, -_0x17a636['MAP']['tileSize'] / 0x2, -_0x17a636['MAP']['tileSize'] / 0x2, _0x17a636['MAP']['tileSize'], _0x17a636['MAP']['tileSize']);
                            _0x54d5d1['restore']();
                        } else {
                            _0x54d5d1['drawImage'](_0x1042d0, _0x504a6b, _0x1c7725, _0x5223e4, _0x5223e4, _0xdb2d0c, _0x368acd, _0x17a636['MAP']['tileSize'], _0x17a636['MAP']['tileSize']);
                        }
                    } else {
                        _0x54d5d1['drawImage'](_0x1042d0, _0x504a6b, _0x1c7725, _0x5223e4, _0x5223e4, _0xdb2d0c, _0x368acd, _0x17a636['MAP']['tileSize'], _0x17a636['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x577b14() {
    _0x1042d0['crossOrigin'] = 'Anonymous';
    _0x1042d0['onload'] = () => {
        _0x17a636['MAP']['tilesetCols'] = 0x3;
        if (_0x17a636['MAP']['columns'] > 0x0 && _0x17a636['MAP']['layers'] && _0x17a636['MAP']['layers']['length'] > 0x0) {
            _0x4070f8();
        }
        _0x508579();
    };
    _0x1042d0['onerror'] = () => {
        _0x17a636['MAP']['tilesetCols'] = 0x1;
        _0x508579();
    };
    _0x1042d0['src'] = 'assets/tilesheet.png';
    _0x4ab6dc['crossOrigin'] = 'Anonymous';
    _0x4ab6dc['onload'] = _0x508579;
    _0x4ab6dc['onerror'] = () => {
        _0x508579();
    };
    _0x4ab6dc['src'] = 'assets/center.png';
    _0x1444a2['crossOrigin'] = 'Anonymous';
    _0x1444a2['onload'] = _0x508579;
    _0x1444a2['onerror'] = () => {
        _0x508579();
    };
    _0x1444a2['src'] = 'assets/table.png';
}
function _0x508579() {
    _0x17a636['SYSTEM']['assetsLoaded']++;
    if (_0x17a636['SYSTEM']['assetsLoaded'] === 0x3) {
        if (_0x17a636['MAP']['columns'] > 0x0 && _0x17a636['MAP']['layers'] && _0x17a636['MAP']['layers']['length'] > 0x0) {
            _0x4070f8();
        }
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0xfab30a();
    }
}
function _0x3757bf(_0x430d93, _0x5a77f8) {
    if (!_0x328a73 || !_0x61fbec)
        return;
    const _0x38d26e = _0x430d93 / _0x17a636['SYSTEM']['viewScale'] + _0x17a636['CAMERA']['x'];
    const _0x29c199 = _0x5a77f8 / _0x17a636['SYSTEM']['viewScale'] + _0x17a636['CAMERA']['y'];
    const _0x4e1401 = Math['floor'](_0x38d26e / _0x17a636['MAP']['tileSize']);
    const _0x35b145 = Math['floor'](_0x29c199 / _0x17a636['MAP']['tileSize']);
    if (_0x4e1401 >= 0x0 && _0x4e1401 < _0x17a636['MAP']['columns'] && _0x35b145 >= 0x0 && _0x35b145 < _0x17a636['MAP']['rows'])
        _0x61fbec['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x17a636['EDITOR']['selectedLayer'],
            'col': _0x4e1401,
            'row': _0x35b145,
            'gid': _0x17a636['EDITOR']['selectedTileGid']
        }));
}
function _0xef627b() {
    const _0x49002f = document['getElementById']('palette');
    if (!_0x49002f || _0x49002f['children']['length'] > 0x0)
        return;
    const _0x5e0c0f = 0x40;
    const _0x56aa14 = _0x1042d0;
    const _0x22163f = document['createElement']('div');
    _0x22163f['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x14b606 = document['createElement']('canvas');
    _0x14b606['width'] = 0xc0;
    _0x14b606['height'] = 0xa0;
    _0x14b606['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x22163f['appendChild'](_0x14b606);
    const _0x4c1265 = document['createElement']('div');
    _0x4c1265['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x22163f['appendChild'](_0x4c1265);
    let _0x3b8f57 = 0x0, _0x401397 = 0x0;
    let _0x8c126b = ![], _0x3fd28e = 0x0, _0x1b760d = 0x0, _0x35b855 = 0x0, _0x4d6f7d = 0x0;
    function _0x1062e4() {
        const _0x2c0633 = _0x14b606['getContext']('2d');
        _0x2c0633['clearRect'](0x0, 0x0, _0x14b606['width'], _0x14b606['height']);
        _0x2c0633['imageSmoothingEnabled'] = ![];
        if (_0x56aa14['complete'] && _0x56aa14['naturalWidth'] > 0x0) {
            _0x2c0633['drawImage'](_0x56aa14, _0x3b8f57, _0x401397, _0x14b606['width'], _0x14b606['height'], 0x0, 0x0, _0x14b606['width'], _0x14b606['height']);
        }
        _0x2c0633['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x2c0633['lineWidth'] = 0x1;
        const _0xac81d8 = Math['floor'](_0x3b8f57 / _0x5e0c0f);
        const _0x961df = Math['floor'](_0x401397 / _0x5e0c0f);
        for (let _0x5417e6 = _0xac81d8; _0x5417e6 <= _0xac81d8 + Math['ceil'](_0x14b606['width'] / _0x5e0c0f) + 0x1; _0x5417e6++) {
            const _0x239646 = _0x5417e6 * _0x5e0c0f - _0x3b8f57;
            _0x2c0633['beginPath']();
            _0x2c0633['moveTo'](_0x239646, 0x0);
            _0x2c0633['lineTo'](_0x239646, _0x14b606['height']);
            _0x2c0633['stroke']();
        }
        for (let _0x517f2d = _0x961df; _0x517f2d <= _0x961df + Math['ceil'](_0x14b606['height'] / _0x5e0c0f) + 0x1; _0x517f2d++) {
            const _0x40f225 = _0x517f2d * _0x5e0c0f - _0x401397;
            _0x2c0633['beginPath']();
            _0x2c0633['moveTo'](0x0, _0x40f225);
            _0x2c0633['lineTo'](_0x14b606['width'], _0x40f225);
            _0x2c0633['stroke']();
        }
    }
    function _0x40b3fa() {
        const _0x2ba539 = Math['max'](0x1, Math['ceil'](_0x56aa14['naturalWidth'] / _0x5e0c0f));
        const _0x26593c = _0x17a636['EDITOR']['selectedTileGid'];
        if (_0x26593c <= 0x0) {
            _0x4c1265['style']['display'] = 'none';
            return;
        }
        const _0x4def1f = _0x26593c - 0x1;
        const _0x457b64 = _0x4def1f % _0x2ba539;
        const _0x59cbdb = Math['floor'](_0x4def1f / _0x2ba539);
        const _0x40320d = _0x457b64 * _0x5e0c0f - _0x3b8f57;
        const _0x15b33f = _0x59cbdb * _0x5e0c0f - _0x401397;
        _0x4c1265['style']['display'] = 'block';
        _0x4c1265['style']['left'] = _0x40320d + 'px';
        _0x4c1265['style']['top'] = _0x15b33f + 'px';
    }
    _0x56aa14['onload'] = () => {
        _0x1062e4();
        _0x40b3fa();
    };
    if (_0x56aa14['complete'] && _0x56aa14['naturalWidth'] > 0x0) {
        _0x1062e4();
        _0x40b3fa();
    }
    _0x22163f['addEventListener']('mousedown', _0x2d33f4 => {
        if (_0x2d33f4['button'] === 0x0) {
            _0x8c126b = !![];
            _0x3fd28e = _0x2d33f4['clientX'];
            _0x1b760d = _0x2d33f4['clientY'];
            _0x35b855 = _0x3b8f57;
            _0x4d6f7d = _0x401397;
            _0x22163f['style']['cursor'] = 'grabbing';
            _0x2d33f4['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0xfce2e7 => {
        if (!_0x8c126b)
            return;
        const _0x1e81ac = _0x3fd28e - _0xfce2e7['clientX'];
        const _0x5e04c8 = _0x1b760d - _0xfce2e7['clientY'];
        const _0x2d09db = Math['max'](0x0, _0x56aa14['naturalWidth'] - _0x14b606['width']);
        const _0x418791 = Math['max'](0x0, _0x56aa14['naturalHeight'] - _0x14b606['height']);
        _0x3b8f57 = Math['max'](0x0, Math['min'](_0x2d09db, _0x35b855 + _0x1e81ac));
        _0x401397 = Math['max'](0x0, Math['min'](_0x418791, _0x4d6f7d + _0x5e04c8));
        _0x1062e4();
        _0x40b3fa();
    });
    window['addEventListener']('mouseup', _0x3f1394 => {
        if (_0x8c126b) {
            _0x8c126b = ![];
            _0x22163f['style']['cursor'] = 'grab';
        }
    });
    _0x22163f['addEventListener']('click', _0x238a5b => {
        const _0x4547d5 = _0x22163f['getBoundingClientRect']();
        const _0x105f66 = _0x238a5b['clientX'] - _0x4547d5['left'] + _0x3b8f57;
        const _0x4ca51e = _0x238a5b['clientY'] - _0x4547d5['top'] + _0x401397;
        const _0x588e2a = Math['max'](0x1, Math['ceil'](_0x56aa14['naturalWidth'] / _0x5e0c0f));
        const _0x37ef07 = Math['floor'](_0x105f66 / _0x5e0c0f);
        const _0x5b1905 = Math['floor'](_0x4ca51e / _0x5e0c0f);
        const _0x3d7fc2 = _0x5b1905 * _0x588e2a + _0x37ef07 + 0x1;
        _0x17a636['EDITOR']['selectedTileGid'] = _0x3d7fc2;
        _0x40b3fa();
    });
    _0x49002f['appendChild'](_0x22163f);
    const _0x1bf75a = document['createElement']('div');
    _0x1bf75a['className'] = 'tile-btn\x20eraser-btn';
    _0x1bf75a['title'] = 'Eraser\x20(gid\x200)';
    _0x1bf75a['onclick'] = () => {
        _0x17a636['EDITOR']['selectedTileGid'] = 0x0;
        _0x4c1265['style']['display'] = 'none';
    };
    _0x49002f['appendChild'](_0x1bf75a);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x17a636['EDITOR']['enabled'] = !_0x17a636['EDITOR']['enabled'];
        const _0x40d17c = document['getElementById']('editor-tools');
        if (_0x17a636['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x40d17c['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x40d17c['style']['display'] = 'none';
        }
    });
    const _0x216139 = document['getElementById']('start-game-btn');
    if (_0x216139) {
        _0x216139['addEventListener']('click', () => {
            if (_0x61fbec)
                _0x61fbec['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x34c186 = document['getElementById']('rolelist-toggle-btn');
    if (_0x34c186) {
        let _0x38d4bb = 'subalignments';
        _0x34c186['addEventListener']('click', () => {
            if (_0x38d4bb === 'subalignments')
                _0x38d4bb = 'precise';
            else if (_0x38d4bb === 'precise')
                _0x38d4bb = 'off';
            else
                _0x38d4bb = 'subalignments';
            _0x34c186['innerText'] = 'Role\x20List:\x20' + _0x38d4bb['charAt'](0x0)['toUpperCase']() + _0x38d4bb['slice'](0x1);
            if (_0x61fbec)
                _0x61fbec['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x38d4bb
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x472a12 => {
        if (_0x472a12['id'] === 'editor-toggle-btn' || _0x472a12['id'] === 'start-game-btn' || _0x472a12['id'] === 'rolelist-toggle-btn')
            return;
        _0x472a12['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x1082db => _0x1082db['classList']['remove']('active'));
            _0x472a12['classList']['add']('active');
            _0x17a636['EDITOR']['selectedLayer'] = _0x472a12['dataset']['layer'];
        });
    });
}
function _0x4557c8(_0x214442) {
    if (_0x61fbec)
        _0x61fbec['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x214442
        }));
}
function _0x1f8489(_0x419340) {
    if (_0x61fbec)
        _0x61fbec['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x419340
        }));
}
function _0x2eef4f(_0xc3c18d, _0x38e957, _0x582840, _0x34b2a0) {
    const _0x4fc0e0 = document['getElementById']('admin-panel');
    if (_0x4fc0e0)
        _0x4fc0e0['remove']();
    if (_0x4fc0e0 && _0x4fc0e0['dataset']['target'] === String(_0xc3c18d))
        return;
    const _0x4a164f = document['createElement']('div');
    _0x4a164f['id'] = 'admin-panel';
    _0x4a164f['dataset']['target'] = String(_0xc3c18d);
    _0x4a164f['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x4d1a6b = document['createElement']('div');
    _0x4d1a6b['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x4d1a6b['textContent'] = _0x38e957;
    _0x4a164f['appendChild'](_0x4d1a6b);
    const _0x1ebed1 = document['createElement']('button');
    _0x1ebed1['textContent'] = 'Kick';
    _0x1ebed1['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x1ebed1['onmouseenter'] = () => _0x1ebed1['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x1ebed1['onmouseleave'] = () => _0x1ebed1['style']['background'] = 'transparent';
    _0x1ebed1['onclick'] = () => {
        _0x4557c8(_0xc3c18d);
        _0x4a164f['remove']();
    };
    _0x4a164f['appendChild'](_0x1ebed1);
    const _0x42330e = document['createElement']('button');
    _0x42330e['textContent'] = 'Ban';
    _0x42330e['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Viga,sans-serif;';
    _0x42330e['onmouseenter'] = () => _0x42330e['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x42330e['onmouseleave'] = () => _0x42330e['style']['background'] = 'transparent';
    _0x42330e['onclick'] = () => {
        _0x1f8489(_0xc3c18d);
        _0x4a164f['remove']();
    };
    _0x4a164f['appendChild'](_0x42330e);
    document['body']['appendChild'](_0x4a164f);
    const _0x4e1199 = _0x4a164f['offsetWidth'] || 0x91;
    const _0x135508 = _0x4a164f['offsetHeight'] || 0x50;
    let _0x5ab04a = _0x582840 - _0x4e1199;
    let _0x24bf42 = _0x34b2a0;
    if (_0x5ab04a < 0x4)
        _0x5ab04a = _0x582840;
    if (_0x24bf42 + _0x135508 > window['innerHeight'] - 0x4)
        _0x24bf42 = window['innerHeight'] - _0x135508 - 0x4;
    _0x4a164f['style']['left'] = _0x5ab04a + 'px';
    _0x4a164f['style']['top'] = _0x24bf42 + 'px';
    const _0x1af183 = _0x4a432f => {
        if (!_0x4a164f['contains'](_0x4a432f['target'])) {
            _0x4a164f['remove']();
            document['removeEventListener']('mousedown', _0x1af183);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x1af183), 0x0);
}
function _0x2c0f3d() {
    const _0x11ca94 = document['getElementById']('leaderboard-list');
    _0x11ca94['innerHTML'] = '';
    const _0x428e86 = document['createElement']('div');
    _0x428e86['className'] = 'leaderboard-entry';
    const _0x28f303 = document['createElement']('span');
    _0x28f303['textContent'] = _0x455647 + (_0x328a73 ? '\x20[🗝️]' : '');
    if (_0x282f02['has'](_0x1d0285) && !_0x4e5d04['isDead']) {
        _0x28f303['style']['color'] = '#cc88ff';
    }
    _0x428e86['appendChild'](_0x28f303);
    _0x11ca94['appendChild'](_0x428e86);
    for (const _0x1e5a27 in _0x63e610) {
        const _0x186f29 = document['createElement']('div');
        _0x186f29['className'] = 'leaderboard-entry';
        const _0x1015e3 = document['createElement']('span');
        _0x1015e3['textContent'] = _0x63e610[_0x1e5a27]['name'] + (_0x63e610[_0x1e5a27]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x282f02['has'](parseInt(_0x1e5a27)) && !_0x63e610[_0x1e5a27]['isDead']) {
            _0x1015e3['style']['color'] = '#cc88ff';
        }
        _0x186f29['appendChild'](_0x1015e3);
        if (_0x328a73 && !_0x63e610[_0x1e5a27]['isOwner']) {
            const _0x59d4db = _0x63e610[_0x1e5a27]['id'];
            const _0x2dbd95 = _0x63e610[_0x1e5a27]['name'];
            _0x186f29['style']['cursor'] = 'context-menu';
            _0x186f29['addEventListener']('contextmenu', _0x5993fe => {
                _0x5993fe['preventDefault']();
                _0x5993fe['stopPropagation']();
                _0x2eef4f(_0x59d4db, _0x2dbd95, _0x5993fe['clientX'], _0x5993fe['clientY']);
            });
        }
        _0x11ca94['appendChild'](_0x186f29);
    }
}
window['addEventListener']('resize', _0xfab30a);
function _0xfab30a() {
    _0x37334b['width'] = window['innerWidth'];
    _0x37334b['height'] = window['innerHeight'];
    _0x17a636['SYSTEM']['viewScale'] = Math['max'](_0x37334b['width'] / _0x54f129, _0x37334b['height'] / _0x215379);
    _0x17a636['CAMERA']['width'] = _0x37334b['width'] / _0x17a636['SYSTEM']['viewScale'];
    _0x17a636['CAMERA']['height'] = _0x37334b['height'] / _0x17a636['SYSTEM']['viewScale'];
    _0x5ef86c['imageSmoothingEnabled'] = ![];
}
function _0x13a83e(_0x3452b0) {
    if (_0x3452b0['ctrlKey'] || _0x3452b0['metaKey']) {
        if (_0x3452b0['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x3452b0['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x3452b0['code'])) {
            _0x3452b0['preventDefault']();
            _0x3452b0['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x13a83e, { 'passive': ![] });
window['addEventListener']('keydown', _0x13a83e, { 'passive': ![] });
window['addEventListener']('keydown', _0x422334 => {
    const _0x45b10b = _0x422334['key']['toLowerCase']();
    if (_0x45b10b === 'tab') {
        _0x422334['preventDefault']();
        const _0x4c7927 = document['getElementById']('will-ui');
        const _0x31471d = document['getElementById']('will-input');
        if (_0x4c7927['style']['display'] === 'flex') {
            _0x4c7927['style']['display'] = 'none';
            if (_0x17a636['GAME_STATE'] !== 'NIGHT' && _0x61fbec)
                _0x61fbec['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x31471d['value']
                }));
            _0x31471d['blur']();
        } else {
            if (_0x17a636['GAME_STATE'] === 'NIGHT') {
                _0x470ee7('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x4c7927['style']['display'] = 'flex';
            _0x31471d['focus']();
            for (let _0x275885 in _0x17a636['INPUTS']['keys'])
                _0x17a636['INPUTS']['keys'][_0x275885] = ![];
        }
        return;
    }
    if (_0x422334['key'] === 'Enter') {
        if (_0x1be5ae) {
            const _0x9afd8 = document['getElementById']('play-btn');
            if (_0x9afd8)
                _0x9afd8['click']();
            return;
        }
        if (!_0x61fbec || _0x61fbec['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x1951f6 = document['getElementById']('chat-ui');
        const _0xd41c2b = document['getElementById']('chat-input');
        if (document['activeElement'] === _0xd41c2b) {
            const _0xa52fec = _0xd41c2b['value']['trim']();
            if (_0xa52fec['length'] > 0x0) {
                _0x61fbec['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0xa52fec
                }));
            }
            _0xd41c2b['value'] = '';
            _0x1951f6['style']['display'] = 'none';
            _0xd41c2b['blur']();
        } else {
            _0x1951f6['style']['display'] = 'block';
            _0xd41c2b['focus']();
            for (let _0x595658 in _0x17a636['INPUTS']['keys'])
                _0x17a636['INPUTS']['keys'][_0x595658] = ![];
        }
        _0x422334['preventDefault']();
        return;
    }
    if (_0x422334['key'] === 'Escape') {
        const _0x33cc98 = document['getElementById']('role-index-modal');
        if (_0x33cc98 && _0x33cc98['style']['display'] === 'flex') {
            _0x33cc98['style']['display'] = 'none';
            return;
        }
        const _0x3c267a = document['getElementById']('guide-ui');
        if (_0x3c267a && _0x3c267a['style']['display'] === 'flex') {
            _0x3c267a['style']['display'] = 'none';
            return;
        }
        const _0x4baf21 = document['getElementById']('ability-ui');
        if (_0x4baf21 && _0x4baf21['style']['display'] === 'block') {
            _0x4baf21['style']['display'] = 'none';
            return;
        }
        const _0x26e9f2 = document['getElementById']('settings-panel');
        if (_0x26e9f2 && _0x26e9f2['style']['display'] === 'block') {
            _0x26e9f2['style']['display'] = 'none';
            return;
        }
        const _0x1a020a = document['getElementById']('mayor-confirm-dialog');
        if (_0x1a020a && _0x1a020a['style']['display'] === 'flex') {
            _0x1a020a['style']['display'] = 'none';
            return;
        }
        const _0x573c27 = document['getElementById']('target-chooser-ui');
        if (_0x573c27 && _0x573c27['style']['display'] === 'flex') {
            _0x573c27['style']['display'] = 'none';
            return;
        }
        const _0x38d383 = document['getElementById']('chat-ui');
        const _0x24f39a = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x24f39a) {
            _0x24f39a['value'] = '';
            _0x38d383['style']['display'] = 'none';
            _0x24f39a['blur']();
            _0x422334['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x17a636['INPUTS']['keys']['hasOwnProperty'](_0x45b10b))
            _0x17a636['INPUTS']['keys'][_0x45b10b] = !![];
        if (!_0x61fbec || _0x61fbec['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x45b10b === 'h' && !_0x422334['repeat']) {
            const _0xede944 = document['getElementById']('guide-ui');
            if (_0xede944) {
                _0xede944['style']['display'] = _0xede944['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x45b10b === 't' && !_0x422334['repeat']) {
            if (_0x4e5d04['isDead'])
                return;
            if (_0x785191 === 'Mayor') {
                if (_0x282f02['has'](_0x1d0285)) {
                    _0x470ee7('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x5c1e77 = document['getElementById']('mayor-confirm-dialog');
                if (_0x5c1e77)
                    _0x5c1e77['style']['display'] = 'flex';
                return;
            }
            if (_0x17a636['GAME_STATE'] === 'NIGHT') {
                if (!_0x17a636['NIGHT_ABILITY_OPEN']) {
                    _0x470ee7('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x2ad687 = document['getElementById']('ability-ui');
                if (_0x2ad687) {
                    if (_0x2ad687['style']['display'] === 'block') {
                        _0x2ad687['style']['display'] = 'none';
                    } else {
                        _0x479bd6();
                        _0x2ad687['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x17a636['GAME_STATE'] === 'DAY_DISCUSS' || _0x17a636['GAME_STATE'] === 'DAY_VOTE') {
                _0x470ee7('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x45b10b === 'e' && !_0x4e5d04['isDead']) {
            const _0x1b934a = Date['now']();
            if (!window['_lastDoorSend'] || _0x1b934a - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x1b934a;
                _0x61fbec['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x185829 => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x29e381 = _0x185829['key']['toLowerCase']();
        if (_0x17a636['INPUTS']['keys']['hasOwnProperty'](_0x29e381))
            _0x17a636['INPUTS']['keys'][_0x29e381] = ![];
    }
});
window['addEventListener']('mousemove', _0x5452ba => {
    _0x17a636['INPUTS']['mouseX'] = _0x5452ba['clientX'];
    _0x17a636['INPUTS']['mouseY'] = _0x5452ba['clientY'];
    if (_0x17a636['INPUTS']['isMouseDown'] && _0x17a636['EDITOR']['enabled']) {
        _0x3757bf(_0x5452ba['clientX'], _0x5452ba['clientY']);
    }
});
window['addEventListener']('mousedown', _0x276e02 => {
    if (_0x276e02['target']['closest']('#editor-ui') || _0x276e02['target']['closest']('#leaderboard-ui') || _0x276e02['target']['closest']('#role-index-btn-wrap') || _0x276e02['target']['closest']('#role-index-modal') || _0x276e02['target']['closest']('#chat-log-ui') || _0x276e02['target']['closest']('#target-chooser-ui') || _0x276e02['target']['closest']('#guide-ui') || _0x276e02['target']['closest']('#role-list-ui') || _0x276e02['target']['closest']('#ability-ui') || _0x276e02['target']['closest']('#settings-panel') || _0x276e02['target']['closest']('#mayor-confirm-dialog') || _0x276e02['target']['closest']('#mobile-action-bar') || _0x276e02['target']['closest']('#mobile-top-bar') || _0x276e02['target']['closest']('#mobile-joystick-zone') || _0x276e02['target']['closest']('#mobile-chat-overlay') || _0x276e02['target']['closest']('#will-ui') || _0x276e02['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x276e02['button'] === 0x0) {
        _0x17a636['INPUTS']['isMouseDown'] = !![];
        if (_0x17a636['EDITOR']['enabled'])
            _0x3757bf(_0x276e02['clientX'], _0x276e02['clientY']);
    }
});
window['addEventListener']('mouseup', _0x4da0a2 => {
    _0x17a636['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x27ec91 => {
    if (_0x27ec91['target']['closest']('#settings-btn'))
        return;
    const _0x465ce4 = document['getElementById']('leaderboard-list');
    const _0x338ec9 = document['getElementById']('leaderboard-toggle');
    if (_0x465ce4['style']['display'] === 'none') {
        _0x465ce4['style']['display'] = 'flex';
        _0x338ec9['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x465ce4['style']['display'] = 'none';
        _0x338ec9['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x1d86b1 = document['getElementById']('close-target-btn');
if (_0x1d86b1) {
    _0x1d86b1['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x39f309 = document['getElementById']('close-guide-btn');
if (_0x39f309) {
    _0x39f309['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x4643c3 = document['getElementById']('role-list-header');
if (_0x4643c3) {
    _0x4643c3['addEventListener']('click', () => {
        const _0x320255 = document['getElementById']('role-list-items');
        const _0x2d7825 = document['getElementById']('role-list-toggle');
        if (_0x320255['style']['display'] === 'none') {
            _0x320255['style']['display'] = 'flex';
            _0x2d7825['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x320255['style']['display'] = 'none';
            _0x2d7825['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x54c087() {
    const _0x41e8e3 = document['getElementById']('mobile-joystick-zone');
    const _0x23fb58 = document['getElementById']('mobile-joystick-base');
    const _0x1fe175 = document['getElementById']('mobile-joystick-knob');
    if (_0x41e8e3 && _0x23fb58 && _0x1fe175) {
        const _0x50a6c0 = 0x3e;
        const _0x1fbfef = (_0x12ebfb, _0x1caaa9) => {
            const _0x395803 = _0x23fb58['getBoundingClientRect']();
            const _0x4363dc = _0x395803['left'] + _0x395803['width'] / 0x2;
            const _0x3d23cf = _0x395803['top'] + _0x395803['height'] / 0x2;
            const _0x45fe1e = _0x12ebfb - _0x4363dc;
            const _0x1062c2 = _0x1caaa9 - _0x3d23cf;
            const _0x444570 = Math['hypot'](_0x45fe1e, _0x1062c2);
            if (_0x444570 === 0x0) {
                _0x1b41c0 = 0x0;
                _0x717faa = 0x0;
                _0x3036db = ![];
                _0x1fe175['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x2110ba = Math['min'](_0x444570, _0x50a6c0);
            const _0x60bfa = _0x45fe1e / _0x444570 * _0x2110ba;
            const _0x28e972 = _0x1062c2 / _0x444570 * _0x2110ba;
            _0x1b41c0 = _0x60bfa / _0x50a6c0;
            _0x717faa = _0x28e972 / _0x50a6c0;
            _0x3036db = _0x444570 >= _0x50a6c0 * 0.75;
            _0x1fe175['style']['transform'] = 'translate(' + _0x60bfa + 'px,\x20' + _0x28e972 + 'px)';
        };
        const _0x553051 = _0x548a11 => {
            for (let _0x1d6b52 = 0x0; _0x1d6b52 < _0x548a11['changedTouches']['length']; _0x1d6b52++) {
                const _0x577df4 = _0x548a11['changedTouches'][_0x1d6b52];
                if (_0x132c9e === null) {
                    _0x132c9e = _0x577df4['identifier'];
                    _0x5b4961 = !![];
                    _0x1fbfef(_0x577df4['clientX'], _0x577df4['clientY']);
                    break;
                }
            }
        };
        const _0x3dc68c = _0x493656 => {
            for (let _0x2552a3 = 0x0; _0x2552a3 < _0x493656['changedTouches']['length']; _0x2552a3++) {
                const _0x239c6a = _0x493656['changedTouches'][_0x2552a3];
                if (_0x239c6a['identifier'] === _0x132c9e) {
                    _0x1fbfef(_0x239c6a['clientX'], _0x239c6a['clientY']);
                    break;
                }
            }
        };
        const _0x1a667c = _0x5f196a => {
            for (let _0x2978e0 = 0x0; _0x2978e0 < _0x5f196a['changedTouches']['length']; _0x2978e0++) {
                const _0x328494 = _0x5f196a['changedTouches'][_0x2978e0];
                if (_0x328494['identifier'] === _0x132c9e) {
                    _0x132c9e = null;
                    _0x5b4961 = ![];
                    _0x1b41c0 = 0x0;
                    _0x717faa = 0x0;
                    _0x3036db = ![];
                    _0x1fe175['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x41e8e3['addEventListener']('touchstart', _0x2d2d7e => {
            _0x2d2d7e['preventDefault']();
            _0x553051(_0x2d2d7e);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x3dc68c, { 'passive': !![] });
        window['addEventListener']('touchend', _0x1a667c, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x1a667c, { 'passive': !![] });
    }
    const _0x39a1c6 = (_0x5c8a17, _0x186794) => {
        const _0xecc158 = _0x5c8a17 / _0x17a636['SYSTEM']['viewScale'];
        const _0x3bd739 = _0x186794 / _0x17a636['SYSTEM']['viewScale'];
        const _0x197da1 = _0x4e5d04['x'] - _0x17a636['CAMERA']['x'] + _0x4e5d04['width'] / 0x2;
        const _0x593dea = _0x4e5d04['y'] - _0x17a636['CAMERA']['y'] + _0x4e5d04['height'] / 0x2;
        _0x3e9c3d = Math['atan2'](_0x3bd739 - _0x593dea, _0xecc158 - _0x197da1);
        _0x135d12 = !![];
        _0x17a636['INPUTS']['mouseX'] = _0x5c8a17;
        _0x17a636['INPUTS']['mouseY'] = _0x186794;
    };
    _0x37334b['addEventListener']('touchstart', _0x5112ee => {
        if (_0x1be5ae)
            return;
        for (let _0x4222e4 = 0x0; _0x4222e4 < _0x5112ee['changedTouches']['length']; _0x4222e4++) {
            const _0x3b5baf = _0x5112ee['changedTouches'][_0x4222e4];
            if (_0x3b5baf['identifier'] !== _0x132c9e && _0x20e7c9 === null) {
                _0x20e7c9 = _0x3b5baf['identifier'];
                _0x39a1c6(_0x3b5baf['clientX'], _0x3b5baf['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x37334b['addEventListener']('touchmove', _0x18c666 => {
        if (_0x1be5ae)
            return;
        for (let _0x159f59 = 0x0; _0x159f59 < _0x18c666['changedTouches']['length']; _0x159f59++) {
            const _0x59ef91 = _0x18c666['changedTouches'][_0x159f59];
            if (_0x59ef91['identifier'] === _0x20e7c9) {
                _0x39a1c6(_0x59ef91['clientX'], _0x59ef91['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x422c72 = _0x1e2a11 => {
        for (let _0x1e77e4 = 0x0; _0x1e77e4 < _0x1e2a11['changedTouches']['length']; _0x1e77e4++) {
            const _0x2b55d1 = _0x1e2a11['changedTouches'][_0x1e77e4];
            if (_0x2b55d1['identifier'] === _0x20e7c9) {
                _0x20e7c9 = null;
                _0x135d12 = ![];
                break;
            }
        }
    };
    _0x37334b['addEventListener']('touchend', _0x422c72, { 'passive': !![] });
    _0x37334b['addEventListener']('touchcancel', _0x422c72, { 'passive': !![] });
    const _0x4724ba = document['getElementById']('mob-sprint-btn');
    if (_0x4724ba) {
        _0x4724ba['addEventListener']('click', _0xc1a2a3 => {
            _0xc1a2a3['stopPropagation']();
            _0x5bf915 = !_0x5bf915;
            _0x4724ba['classList']['toggle']('active', _0x5bf915);
        });
    }
    const _0x28d37d = document['getElementById']('mob-interact-btn');
    if (_0x28d37d) {
        _0x28d37d['addEventListener']('click', _0x7b4ef7 => {
            _0x7b4ef7['stopPropagation']();
            if (!_0x4e5d04['isDead']) {
                const _0x263bb0 = Date['now']();
                if (!window['_lastDoorSend'] || _0x263bb0 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x263bb0;
                    if (_0x61fbec && _0x61fbec['readyState'] === WebSocket['OPEN'])
                        _0x61fbec['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x45386c = document['getElementById']('mob-ability-btn');
    if (_0x45386c) {
        _0x45386c['addEventListener']('click', _0x44d275 => {
            _0x44d275['stopPropagation']();
            if (_0x4e5d04['isDead'])
                return;
            if (_0x785191 === 'Mayor') {
                if (_0x282f02['has'](_0x1d0285)) {
                    _0x470ee7('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x47fcdc = document['getElementById']('mayor-confirm-dialog');
                if (_0x47fcdc)
                    _0x47fcdc['style']['display'] = 'flex';
                return;
            }
            if (_0x17a636['GAME_STATE'] === 'NIGHT') {
                if (!_0x17a636['NIGHT_ABILITY_OPEN']) {
                    _0x470ee7('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x337eee = document['getElementById']('ability-ui');
                if (_0x337eee) {
                    if (_0x337eee['style']['display'] === 'block') {
                        _0x337eee['style']['display'] = 'none';
                    } else {
                        _0x479bd6();
                        _0x337eee['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x17a636['GAME_STATE'] === 'DAY_DISCUSS' || _0x17a636['GAME_STATE'] === 'DAY_VOTE') {
                _0x470ee7('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2030\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x4d07e4 = document['getElementById']('mob-will-btn');
    const _0x31c725 = document['getElementById']('will-ui');
    const _0x5e2621 = document['getElementById']('will-input');
    const _0x1fffbe = document['getElementById']('close-will-btn');
    const _0x5a978f = () => {
        if (!_0x31c725)
            return;
        if (_0x31c725['style']['display'] === 'flex') {
            _0x31c725['style']['display'] = 'none';
            if (_0x17a636['GAME_STATE'] !== 'NIGHT' && _0x61fbec && _0x61fbec['readyState'] === WebSocket['OPEN'] && _0x5e2621) {
                _0x61fbec['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x5e2621['value']
                }));
            }
            if (_0x5e2621)
                _0x5e2621['blur']();
        } else {
            if (_0x17a636['GAME_STATE'] === 'NIGHT') {
                _0x470ee7('You\x20cannot\x20write\x20your\x20will\x20during\x20the\x20night.', !![]);
                return;
            }
            _0x31c725['style']['display'] = 'flex';
            if (_0x5e2621)
                _0x5e2621['focus']();
        }
    };
    if (_0x4d07e4)
        _0x4d07e4['addEventListener']('click', _0x123cb2 => {
            _0x123cb2['stopPropagation']();
            _0x5a978f();
        });
    if (_0x1fffbe)
        _0x1fffbe['addEventListener']('click', _0x41bb19 => {
            _0x41bb19['stopPropagation']();
            _0x5a978f();
        });
    const _0x5a6ca4 = document['getElementById']('mob-chat-btn');
    const _0x4077e1 = document['getElementById']('mobile-chat-overlay');
    const _0x12e0dc = document['getElementById']('mobile-chat-input');
    const _0xde0d2 = document['getElementById']('mobile-chat-send');
    const _0x3abadd = document['getElementById']('mobile-chat-cancel');
    const _0x1e4500 = () => {
        if (!_0x4077e1 || !_0x12e0dc)
            return;
        _0x4077e1['style']['display'] = 'flex';
        _0x12e0dc['value'] = '';
        _0x12e0dc['focus']();
    };
    const _0x3710a7 = () => {
        if (!_0x4077e1 || !_0x12e0dc)
            return;
        _0x4077e1['style']['display'] = 'none';
        _0x12e0dc['blur']();
    };
    const _0x3b3d76 = () => {
        if (!_0x12e0dc)
            return;
        const _0x4e49d1 = _0x12e0dc['value']['trim']();
        if (_0x4e49d1['length'] > 0x0 && _0x61fbec && _0x61fbec['readyState'] === WebSocket['OPEN']) {
            _0x61fbec['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x4e49d1
            }));
        }
        _0x12e0dc['value'] = '';
        _0x3710a7();
    };
    if (_0x5a6ca4)
        _0x5a6ca4['addEventListener']('click', _0x26cfea => {
            _0x26cfea['stopPropagation']();
            _0x1e4500();
        });
    if (_0xde0d2)
        _0xde0d2['addEventListener']('click', _0xe1f247 => {
            _0xe1f247['stopPropagation']();
            _0x3b3d76();
        });
    if (_0x3abadd)
        _0x3abadd['addEventListener']('click', _0x4cbd56 => {
            _0x4cbd56['stopPropagation']();
            _0x3710a7();
        });
    if (_0x12e0dc) {
        _0x12e0dc['addEventListener']('keydown', _0x367359 => {
            if (_0x367359['key'] === 'Enter') {
                _0x367359['preventDefault']();
                _0x3b3d76();
            } else if (_0x367359['key'] === 'Escape') {
                _0x3710a7();
            }
        });
    }
    const _0x1fd25f = document['getElementById']('mob-top-chat');
    if (_0x1fd25f)
        _0x1fd25f['addEventListener']('click', _0xfb0a47 => {
            _0xfb0a47['stopPropagation']();
            _0x1e4500();
        });
    const _0x4ab666 = document['getElementById']('mob-top-will');
    if (_0x4ab666)
        _0x4ab666['addEventListener']('click', _0x21b4b4 => {
            _0x21b4b4['stopPropagation']();
            _0x5a978f();
        });
    const _0x538f17 = document['getElementById']('mob-top-roles');
    if (_0x538f17) {
        _0x538f17['addEventListener']('click', _0x3b5cfc => {
            _0x3b5cfc['stopPropagation']();
            const _0x3cce78 = document['getElementById']('role-list-ui');
            const _0x37a78a = document['getElementById']('leaderboard-ui');
            if (_0x37a78a)
                _0x37a78a['style']['display'] = 'none';
            if (_0x3cce78)
                _0x3cce78['style']['display'] = _0x3cce78['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x491f54 = document['getElementById']('mob-top-players');
    if (_0x491f54) {
        _0x491f54['addEventListener']('click', _0x195ae5 => {
            _0x195ae5['stopPropagation']();
            const _0x216560 = document['getElementById']('leaderboard-ui');
            const _0x4cbc61 = document['getElementById']('role-list-ui');
            if (_0x4cbc61)
                _0x4cbc61['style']['display'] = 'none';
            if (_0x216560)
                _0x216560['style']['display'] = _0x216560['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x5f4425 = document['getElementById']('mob-top-help');
    if (_0x5f4425) {
        _0x5f4425['addEventListener']('click', _0x4c58d1 => {
            _0x4c58d1['stopPropagation']();
            const _0x363e14 = document['getElementById']('guide-ui');
            if (_0x363e14)
                _0x363e14['style']['display'] = _0x363e14['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x3f93f6) {
            _0x3f93f6 = !![];
            _0x3dca0f();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
