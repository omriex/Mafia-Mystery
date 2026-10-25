document['addEventListener']('contextmenu', _0x594538 => _0x594538['preventDefault']());
const _0x4b6c6e = {
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
let _0x524b2e = '';
function _0x1d19cb(_0x88d439, _0x339e49) {
    const _0x2c1a31 = document['getElementById']('role-list-ui');
    const _0x2a36ac = document['getElementById']('role-list-items');
    if (!_0x2c1a31 || !_0x2a36ac)
        return;
    if (!_0x339e49 || _0x339e49 === 'off' || !_0x88d439 || _0x88d439['length'] === 0x0) {
        _0x2c1a31['style']['display'] = 'none';
        return;
    }
    const _0x28ffbc = _0x339e49 + '|' + JSON['stringify'](_0x88d439);
    if (_0x28ffbc === _0x524b2e)
        return;
    _0x524b2e = _0x28ffbc;
    const _0x2fba30 = document['getElementById']('role-tooltip');
    if (_0x2fba30) {
        _0x2fba30['style']['visibility'] = 'hidden';
        _0x2fba30['style']['opacity'] = '0';
    }
    _0x2c1a31['style']['display'] = 'flex';
    _0x2a36ac['innerHTML'] = '';
    _0x88d439['forEach'](_0x2429e4 => {
        const _0xcab03b = document['createElement']('div');
        _0xcab03b['className'] = 'role-list-entry';
        const _0x500c57 = _0x2429e4['name']['includes']('Mafia') || _0x2429e4['name'] === 'Skinwalker';
        _0xcab03b['classList']['add'](_0x500c57 ? 'mafia' : 'town');
        if (_0x339e49 === 'precise' && _0x2429e4['isDead']) {
            _0xcab03b['classList']['remove']('town', 'mafia');
            _0xcab03b['classList']['add']('dead');
            _0xcab03b['innerHTML'] = '<span>' + _0x2429e4['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x136be3 = _0x2429e4['count'] !== undefined && _0x2429e4['count'] !== null ? _0x2429e4['count'] + 'x\x20' : '';
            _0xcab03b['innerHTML'] = '<span>' + _0x136be3 + _0x2429e4['name'] + '</span>';
        }
        if (_0x339e49 === 'subalignments' && _0x4b6c6e[_0x2429e4['name']]) {
            _0xcab03b['style']['cursor'] = 'pointer';
            _0xcab03b['addEventListener']('mouseenter', () => {
                const _0x39a918 = document['getElementById']('role-tooltip');
                if (!_0x39a918)
                    return;
                const _0x1c775b = _0x4b6c6e[_0x2429e4['name']]['join'](',\x20');
                _0x39a918['innerHTML'] = '';
                const _0x3552c1 = document['createElement']('span');
                _0x3552c1['style']['color'] = '#ffcc00';
                _0x3552c1['textContent'] = _0x2429e4['name'];
                _0x39a918['appendChild'](_0x3552c1);
                _0x39a918['appendChild'](document['createElement']('br'));
                _0x39a918['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x1c775b));
                const _0xa8ab07 = _0xcab03b['getBoundingClientRect']();
                _0x39a918['style']['left'] = _0xa8ab07['left'] - 0xeb + 'px';
                _0x39a918['style']['top'] = _0xa8ab07['top'] + 'px';
                _0x39a918['style']['display'] = 'block';
                _0x39a918['style']['visibility'] = 'visible';
                _0x39a918['style']['opacity'] = '1';
            });
            _0xcab03b['addEventListener']('mouseleave', () => {
                const _0x599ab0 = document['getElementById']('role-tooltip');
                if (_0x599ab0) {
                    _0x599ab0['style']['display'] = 'none';
                    _0x599ab0['style']['visibility'] = 'hidden';
                    _0x599ab0['style']['opacity'] = '0';
                }
            });
        }
        _0x2a36ac['appendChild'](_0xcab03b);
    });
}
let _0x539fe9 = null;
let _0x2a480f = null;
const _0x293ba7 = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x46b054 = 'Player???';
let _0x25ec17 = ![];
let _0x552f54 = {};
let _0x238d05 = null;
let _0x4090f1 = 0x0;
let _0x2a03e3 = 0x0;
let _0x325f1c = 0x0;
let _0x33d746 = new Set();
let _0x21a06b = ![];
let _0x2318fb = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x548551 = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x3973c7 = ![];
let _0x333cb7 = null;
let _0x1eea18 = 0x0;
let _0x31d5b0 = 0x0;
let _0x107215 = ![];
let _0x5d2df9 = ![];
let _0x128499 = 0x0;
let _0x351bb6 = null;
let _0x1f9412 = ![];
const _0x271bc0 = ((() => {
    const _0x5bf62a = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x42e7a2 = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x53983a = 0x320;
    const _0x240d65 = {};
    const _0x3072a2 = {};
    let _0x7d553 = null;
    let _0x2126f7 = _0x42e7a2 === 0x0;
    let _0x3f7f2d = ![];
    for (const [_0x1d49e2, _0x34e48d] of Object['entries'](_0x5bf62a)) {
        const _0x336372 = new Audio(_0x34e48d);
        _0x336372['loop'] = !![];
        _0x336372['volume'] = 0x0;
        _0x336372['preload'] = 'auto';
        _0x240d65[_0x1d49e2] = _0x336372;
        _0x3072a2[_0x1d49e2] = null;
    }
    const _0x57b751 = _0x5cfd0e => Math['min'](0x1, Math['max'](0x0, _0x5cfd0e));
    function _0x21f4e1(_0x55afd8) {
        if (_0x3072a2[_0x55afd8] !== null) {
            cancelAnimationFrame(_0x3072a2[_0x55afd8]);
            _0x3072a2[_0x55afd8] = null;
        }
    }
    function _0x3235a9(_0x21cbc6, _0x35ac0a, _0x5bdd94, _0x185809, _0x497dc2) {
        _0x21f4e1(_0x21cbc6);
        const _0x1cb46c = _0x240d65[_0x21cbc6];
        const _0x385d4c = performance['now']();
        const _0x53b14a = _0x567448 => {
            const _0x1ff251 = _0x57b751((_0x567448 - _0x385d4c) / _0x185809);
            const _0x312b96 = _0x57b751(_0x35ac0a + (_0x5bdd94 - _0x35ac0a) * _0x1ff251);
            _0x1cb46c['volume'] = _0x2126f7 ? 0x0 : _0x312b96;
            if (_0x1ff251 < 0x1) {
                _0x3072a2[_0x21cbc6] = requestAnimationFrame(_0x53b14a);
            } else {
                _0x3072a2[_0x21cbc6] = null;
                _0x1cb46c['volume'] = _0x2126f7 ? 0x0 : _0x57b751(_0x5bdd94);
                if (_0x497dc2)
                    _0x497dc2();
            }
        };
        _0x3072a2[_0x21cbc6] = requestAnimationFrame(_0x53b14a);
    }
    function _0x57fb7e(_0xf716f) {
        const _0x30cc0e = _0xf716f['play']();
        if (_0x30cc0e && _0x30cc0e['catch']) {
            _0x30cc0e['catch'](() => {
                if (!_0x3f7f2d) {
                    const _0x48b5cb = () => {
                        _0x3f7f2d = !![];
                        _0xf716f['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x48b5cb);
                        document['removeEventListener']('keydown', _0x48b5cb);
                        document['removeEventListener']('touchstart', _0x48b5cb);
                    };
                    document['addEventListener']('click', _0x48b5cb, { 'once': !![] });
                    document['addEventListener']('keydown', _0x48b5cb, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x48b5cb, { 'once': !![] });
                }
            });
        }
    }
    function _0x1fbf35(_0x376bef) {
        if (!_0x5bf62a[_0x376bef])
            return;
        if (_0x7d553 === _0x376bef)
            return;
        const _0x45dd1c = _0x7d553;
        _0x7d553 = _0x376bef;
        const _0x51d517 = _0x240d65[_0x376bef];
        _0x21f4e1(_0x376bef);
        _0x51d517['currentTime'] = 0x0;
        _0x51d517['volume'] = 0x0;
        _0x57fb7e(_0x51d517);
        _0x3235a9(_0x376bef, 0x0, _0x42e7a2, _0x53983a);
        if (_0x45dd1c && _0x240d65[_0x45dd1c]) {
            const _0x5915f0 = _0x45dd1c;
            const _0x54eae5 = _0x240d65[_0x5915f0];
            const _0xbfc669 = _0x57b751(_0x54eae5['volume']);
            _0x3235a9(_0x5915f0, _0xbfc669, 0x0, _0x53983a, () => {
                _0x54eae5['pause']();
                _0x54eae5['currentTime'] = 0x0;
            });
        }
    }
    function _0x42875f(_0x19b6bb) {
        _0x42e7a2 = _0x57b751(_0x19b6bb);
        localStorage['setItem']('musicVolume', String(_0x42e7a2));
        if (!_0x2126f7 && _0x7d553 && _0x3072a2[_0x7d553] === null) {
            _0x240d65[_0x7d553]['volume'] = _0x42e7a2;
        }
    }
    function _0x3cdfc8() {
        return _0x42e7a2;
    }
    function _0x19234d(_0x501c2e) {
        _0x2126f7 = _0x501c2e;
        for (const _0x2cef8d of Object['keys'](_0x240d65)) {
            if (_0x3072a2[_0x2cef8d] === null) {
                _0x240d65[_0x2cef8d]['volume'] = _0x501c2e || _0x2cef8d !== _0x7d553 ? 0x0 : _0x42e7a2;
            }
        }
    }
    function _0x4fbbb9() {
        return _0x2126f7;
    }
    function _0x535882(_0x59e182) {
        if (_0x59e182 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x59e182 === 'DAY_VOTE')
            return 'voting';
        if (_0x59e182 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x299347(_0x3e23d1) {
        _0x1fbf35(_0x535882(_0x3e23d1));
    }
    function _0x43a72d(_0x2f987a) {
        _0x1fbf35(_0x2f987a);
    }
    return {
        'play': _0x1fbf35,
        'onStateChange': _0x299347,
        'onSoundEvent': _0x43a72d,
        'setVolume': _0x42875f,
        'getVolume': _0x3cdfc8,
        'setMuted': _0x19234d,
        'isMuted': _0x4fbbb9
    };
})());
const _0x333c27 = ((() => {
    const _0x4f5c0b = 0x258;
    const _0x1e52fb = 0xb4;
    const _0x2b4d1b = 0x708;
    const _0x219942 = 0x140;
    const _0x163c48 = 0.18;
    const _0x39ecfa = 0.95;
    const _0x3e0409 = new Audio('audio/heartbeat.mp3');
    _0x3e0409['loop'] = ![];
    _0x3e0409['preload'] = 'auto';
    _0x3e0409['volume'] = 0x0;
    let _0x241dd1 = 0x0;
    let _0x287d60 = Infinity;
    function _0x2e7fe6(_0x5794c2, _0x4ca739, _0x358e4b) {
        return Math['min'](_0x358e4b, Math['max'](_0x4ca739, _0x5794c2));
    }
    function _0x331738(_0x52938d, _0x331a0a, _0x3579b4) {
        return _0x52938d + (_0x331a0a - _0x52938d) * _0x3579b4;
    }
    function _0x3db5f9(_0x1eb6e7) {
        if (_0x8e6d5b['GAME_STATE'] !== 'NIGHT' || _0x2bbce8['isDead'] || _0x238d05 === 'Skinwalker') {
            _0x287d60 = Infinity;
            return;
        }
        const _0xd213ba = _0x2bbce8['x'] + 22.5;
        const _0x5be2ba = _0x2bbce8['y'] + 22.5;
        let _0x167713 = Infinity;
        for (const _0x2bab4a in _0x552f54) {
            const _0x4b0c5a = _0x552f54[_0x2bab4a];
            if (!_0x4b0c5a['isDark'] || _0x4b0c5a['isDead'])
                continue;
            const _0x3f0b1b = _0x4b0c5a['renderX'] + 22.5 - _0xd213ba;
            const _0x3bdfe8 = _0x4b0c5a['renderY'] + 22.5 - _0x5be2ba;
            const _0x48d5d2 = Math['sqrt'](_0x3f0b1b * _0x3f0b1b + _0x3bdfe8 * _0x3bdfe8);
            if (_0x48d5d2 < _0x167713)
                _0x167713 = _0x48d5d2;
        }
        _0x287d60 = _0x167713;
        if (_0x167713 > _0x4f5c0b)
            return;
        const _0x44acc1 = 0x1 - _0x2e7fe6((_0x167713 - _0x1e52fb) / (_0x4f5c0b - _0x1e52fb), 0x0, 0x1);
        const _0x521498 = _0x331738(_0x2b4d1b, _0x219942, _0x44acc1);
        const _0x3ce859 = _0x331738(_0x163c48, _0x39ecfa, _0x44acc1);
        if (_0x1eb6e7 >= _0x241dd1) {
            _0x3e0409['currentTime'] = 0x0;
            _0x3e0409['volume'] = _0x271bc0['isMuted']() ? 0x0 : _0x2e7fe6(_0x3ce859 * _0x271bc0['getVolume']() / 0.7, 0x0, 0x1);
            _0x3e0409['play']()['catch'](() => {
            });
            _0x241dd1 = _0x1eb6e7 + _0x521498;
        }
    }
    return { 'tick': _0x3db5f9 };
})());
function _0x2549d8() {
    const _0x5de1cb = document['getElementById']('mob-ability-btn');
    if (!_0x5de1cb)
        return;
    const _0x5340c0 = _0x8e6d5b['GAME_STATE'] === 'NIGHT' && !_0x2bbce8['isDead'];
    const _0x98d2f = _0x238d05 === 'Mayor' && !_0x33d746['has'](_0x2a480f) && !_0x2bbce8['isDead'];
    if (_0x5340c0 || _0x98d2f) {
        _0x5de1cb['style']['display'] = 'flex';
    } else {
        _0x5de1cb['style']['display'] = 'none';
    }
}
function _0xaff857() {
    const _0x5f1cb1 = document['getElementById']('mobile-joystick-zone');
    const _0x1c21cd = document['getElementById']('mobile-top-bar');
    const _0x42a955 = document['getElementById']('mobile-action-bar');
    if (!_0x5f1cb1 || !_0x1c21cd || !_0x42a955)
        return;
    if (!_0x18e0f7 && _0x548551) {
        _0x5f1cb1['style']['display'] = 'flex';
        _0x1c21cd['style']['display'] = 'flex';
        _0x42a955['style']['display'] = 'flex';
        _0x2549d8();
    } else {
        _0x5f1cb1['style']['display'] = 'none';
        _0x1c21cd['style']['display'] = 'none';
        _0x42a955['style']['display'] = 'none';
    }
}
const _0x43c9dd = document['getElementById']('gameCanvas');
const _0x295d64 = _0x43c9dd['getContext']('2d', { 'alpha': ![] });
const _0x419f96 = 0x500;
const _0x468333 = 0x2d0;
const _0x8e6d5b = {
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
        'width': _0x419f96,
        'height': _0x468333
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
const _0x2bbce8 = {
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
const _0xdad09 = new Image();
const _0x557277 = new Image();
const _0x4d5c79 = new Image();
const _0x53a559 = new Image();
_0x53a559['src'] = 'assets/mayor\x20cosmetic.png';
const _0x5ec60e = [
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
const _0x552ebc = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x4563ca = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x4563ca === 'body1.png' || _0x4563ca === 'body1')
    _0x4563ca = 'body01.png';
if (!_0x4563ca['endsWith']('.png'))
    _0x4563ca += '.png';
let _0x178c4a = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x178c4a['endsWith']('.png'))
    _0x178c4a += '.png';
let _0x18e0f7 = !![];
let _0x1ca213 = null;
let _0x472c0d = null;
let _0x112728 = 0x3c;
let _0x9e9d07 = 0x2d;
const _0x5a6d5d = {};
const _0x52a3a2 = new Image();
_0x52a3a2['src'] = 'assets/yanito932.png';
_0x5a6d5d['assets/yanito932.png'] = _0x52a3a2;
function _0x4099e3(_0x249676) {
    if (!_0x5a6d5d[_0x249676] || !_0x5a6d5d[_0x249676]['complete'] && _0x5a6d5d[_0x249676]['naturalWidth'] === 0x0 && _0x5a6d5d[_0x249676]['naturalHeight'] === 0x0) {
        const _0x4a3a6 = new Image();
        _0x4a3a6['src'] = _0x249676;
        _0x5a6d5d[_0x249676] = _0x4a3a6;
    }
    return _0x5a6d5d[_0x249676];
}
function _0x3da1fb(_0x54a443, _0x4b622c, _0xaf6ee5, _0x1393c7, _0x2b4678) {
    try {
        const _0x1d31a2 = 'assets/' + (_0x4b622c || 'body01.png');
        const _0x3cc124 = _0x4099e3(_0x1d31a2);
        if (_0x3cc124['complete'] && _0x3cc124['naturalWidth'] > 0x0) {
            _0x54a443['drawImage'](_0x3cc124, -_0x1393c7 / 0x2, -_0x2b4678 / 0x2, _0x1393c7, _0x2b4678);
        }
        if (_0xaf6ee5 === null || _0xaf6ee5 === undefined)
            return;
        const _0x158bf7 = 'assets/' + _0xaf6ee5;
        const _0x2c5bd2 = _0x4099e3(_0x158bf7);
        if (_0x2c5bd2['complete'] && _0x2c5bd2['naturalWidth'] > 0x0) {
            _0x54a443['drawImage'](_0x2c5bd2, -_0x1393c7 / 0x2, -_0x2b4678 / 0x2, _0x1393c7, _0x2b4678);
        }
    } catch (_0x532e38) {
    }
}
function _0x2f0c1c() {
    const _0x18cd97 = document['getElementById']('body-skin-grid');
    const _0x1a359f = document['getElementById']('eyes-skin-grid');
    if (!_0x18cd97 || !_0x1a359f)
        return;
    _0x18cd97['innerHTML'] = '';
    _0x5ec60e['forEach'](_0x54c6ba => {
        const _0x57c891 = document['createElement']('button');
        _0x57c891['className'] = 'skin-btn' + (_0x54c6ba === _0x4563ca ? '\x20selected' : '');
        const _0x44a93c = document['createElement']('img');
        _0x44a93c['src'] = 'assets/' + _0x54c6ba;
        _0x57c891['appendChild'](_0x44a93c);
        _0x57c891['onclick'] = () => {
            _0x4563ca = _0x54c6ba;
            localStorage['setItem']('selectedBody', _0x54c6ba);
            _0x18cd97['querySelectorAll']('.skin-btn')['forEach'](_0x5f2bee => _0x5f2bee['classList']['remove']('selected'));
            _0x57c891['classList']['add']('selected');
        };
        _0x18cd97['appendChild'](_0x57c891);
    });
    _0x1a359f['innerHTML'] = '';
    _0x552ebc['forEach'](_0x13a938 => {
        const _0x3bd807 = document['createElement']('button');
        _0x3bd807['className'] = 'skin-btn' + (_0x13a938 === _0x178c4a ? '\x20selected' : '');
        const _0x250d08 = document['createElement']('img');
        _0x250d08['src'] = 'assets/' + _0x13a938;
        _0x3bd807['appendChild'](_0x250d08);
        _0x3bd807['onclick'] = () => {
            _0x178c4a = _0x13a938;
            localStorage['setItem']('selectedEyes', _0x13a938);
            _0x1a359f['querySelectorAll']('.skin-btn')['forEach'](_0x265e17 => _0x265e17['classList']['remove']('selected'));
            _0x3bd807['classList']['add']('selected');
        };
        _0x1a359f['appendChild'](_0x3bd807);
    });
}
function _0xcaae0d(_0x54d5d3) {
    if (!_0x8e6d5b['MAP']['columns'] || !_0x8e6d5b['CAMERA']['width'])
        return;
    const _0x3a9bb4 = Math['max'](0x0, _0x8e6d5b['MAP']['columns'] * _0x8e6d5b['MAP']['tileSize'] - _0x8e6d5b['CAMERA']['width']);
    const _0x11a231 = Math['max'](0x0, _0x8e6d5b['MAP']['rows'] * _0x8e6d5b['MAP']['tileSize'] - _0x8e6d5b['CAMERA']['height']);
    if (_0x1ca213 === null) {
        _0x1ca213 = _0x3a9bb4 / 0x2;
        _0x472c0d = _0x11a231 / 0x2;
    }
    _0x1ca213 += _0x112728 * _0x54d5d3;
    _0x472c0d += _0x9e9d07 * _0x54d5d3;
    if (_0x1ca213 <= 0x0) {
        _0x1ca213 = 0x0;
        _0x112728 = Math['abs'](_0x112728);
    } else if (_0x1ca213 >= _0x3a9bb4) {
        _0x1ca213 = _0x3a9bb4;
        _0x112728 = -Math['abs'](_0x112728);
    }
    if (_0x472c0d <= 0x0) {
        _0x472c0d = 0x0;
        _0x9e9d07 = Math['abs'](_0x9e9d07);
    } else if (_0x472c0d >= _0x11a231) {
        _0x472c0d = _0x11a231;
        _0x9e9d07 = -Math['abs'](_0x9e9d07);
    }
    _0x8e6d5b['CAMERA']['x'] = _0x1ca213;
    _0x8e6d5b['CAMERA']['y'] = _0x472c0d;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0xa8147 = document['getElementById']('play-btn');
    const _0x334b24 = document['getElementById']('username-input');
    const _0x44dcb3 = localStorage['getItem']('playerName');
    if (_0x44dcb3 && _0x334b24) {
        _0x334b24['value'] = _0x44dcb3;
    }
    const _0x5ae789 = () => {
        _0x271bc0['play']('wait');
        document['removeEventListener']('click', _0x5ae789);
        document['removeEventListener']('keydown', _0x5ae789);
        document['removeEventListener']('touchstart', _0x5ae789);
    };
    document['addEventListener']('click', _0x5ae789, { 'once': !![] });
    document['addEventListener']('keydown', _0x5ae789, { 'once': !![] });
    document['addEventListener']('touchstart', _0x5ae789, { 'once': !![] });
    if (_0xa8147) {
        _0xa8147['addEventListener']('click', () => {
            const _0x1d4b3e = _0x334b24['value'];
            const _0x523402 = _0x1d4b3e['replace'](/<[^>]*>/g, '')['replace'](/[^\x20-\x7E]/g, '')['replace'](/[<>]/g, '')['replace'](/\s+/g, '\x20')['trim']()['substring'](0x0, 0xe);
            _0x46b054 = _0x523402 || 'Player';
            localStorage['setItem']('playerName', _0x46b054);
            _0x18e0f7 = ![];
            _0x8e6d5b['CAMERA']['x'] = null;
            _0x8e6d5b['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x382f09 = document['getElementById']('controls-hint');
            if (_0x382f09 && !_0x548551)
                _0x382f09['style']['display'] = 'block';
            _0xaff857();
            if (_0x548551) {
                const _0x15a072 = document['getElementById']('leaderboard-list');
                const _0x474842 = document['getElementById']('leaderboard-toggle');
                if (_0x15a072) {
                    _0x15a072['style']['display'] = 'none';
                    if (_0x474842)
                        _0x474842['style']['transform'] = 'rotate(180deg)';
                }
                const _0x485e18 = document['getElementById']('role-list-items');
                const _0x2213ba = document['getElementById']('role-list-toggle');
                if (_0x485e18) {
                    _0x485e18['style']['display'] = 'none';
                    if (_0x2213ba)
                        _0x2213ba['style']['transform'] = 'rotate(180deg)';
                }
            }
            if (_0x539fe9 && _0x539fe9['readyState'] === WebSocket['OPEN']) {
                _0x539fe9['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x46b054,
                    'token': _0x293ba7,
                    'body': _0x4563ca,
                    'eyes': _0x178c4a
                }));
            } else if (!_0x539fe9 || _0x539fe9['readyState'] === WebSocket['CLOSED'] || _0x539fe9['readyState'] === WebSocket['CLOSING']) {
                _0x384780();
            }
        });
    }
    _0x2f0c1c();
    _0x384780();
    _0x263a65();
    _0x3564fc();
    _0x34eee6();
});
function _0x3564fc() {
    const _0xe55306 = document['getElementById']('settings-btn');
    const _0x5251ad = document['getElementById']('settings-panel');
    const _0x21e2bb = document['getElementById']('close-settings-btn');
    const _0x31f6a9 = document['getElementById']('setting-mouse-relative');
    if (_0x31f6a9) {
        _0x31f6a9['checked'] = _0x2318fb;
        _0x31f6a9['addEventListener']('change', () => {
            _0x2318fb = _0x31f6a9['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x2318fb ? 'true' : 'false');
        });
    }
    const _0x430f9f = document['getElementById']('setting-music-volume');
    const _0x2aeab0 = document['getElementById']('setting-music-volume-display');
    function _0x1a8980(_0x3b428f) {
        const _0x366cc5 = (_0x3b428f['value'] - _0x3b428f['min']) / (_0x3b428f['max'] - _0x3b428f['min']) * 0x64;
        _0x3b428f['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x366cc5 + '%,\x20#444\x20' + _0x366cc5 + '%)';
    }
    if (_0x430f9f) {
        const _0x29bef9 = _0x271bc0['getVolume']();
        const _0x5bef3e = Math['round'](_0x29bef9 * 0x64);
        _0x430f9f['value'] = _0x5bef3e;
        if (_0x2aeab0)
            _0x2aeab0['textContent'] = _0x5bef3e + '%';
        _0x1a8980(_0x430f9f);
        _0x430f9f['addEventListener']('input', () => {
            const _0x5975fc = parseInt(_0x430f9f['value'], 0xa);
            if (_0x2aeab0)
                _0x2aeab0['textContent'] = _0x5975fc + '%';
            _0x1a8980(_0x430f9f);
            _0x271bc0['setVolume'](_0x5975fc / 0x64);
            _0x271bc0['setMuted'](_0x5975fc === 0x0);
        });
    }
    if (_0xe55306 && _0x5251ad) {
        _0xe55306['addEventListener']('click', _0x515a87 => {
            _0x515a87['stopPropagation']();
            _0x5251ad['style']['display'] = _0x5251ad['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x21e2bb && _0x5251ad) {
        _0x21e2bb['addEventListener']('click', () => {
            _0x5251ad['style']['display'] = 'none';
        });
    }
    const _0x3052b7 = document['getElementById']('mayor-confirm-yes');
    const _0x57fa4e = document['getElementById']('mayor-confirm-no');
    const _0x162902 = document['getElementById']('mayor-confirm-dialog');
    if (_0x3052b7 && _0x162902) {
        _0x3052b7['addEventListener']('click', () => {
            if (_0x539fe9 && _0x539fe9['readyState'] === WebSocket['OPEN']) {
                _0x539fe9['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x162902['style']['display'] = 'none';
        });
    }
    if (_0x57fa4e && _0x162902) {
        _0x57fa4e['addEventListener']('click', () => {
            _0x162902['style']['display'] = 'none';
        });
    }
    const _0x5c273c = document['getElementById']('close-ability-btn');
    if (_0x5c273c) {
        _0x5c273c['addEventListener']('click', () => {
            const _0x3c1292 = document['getElementById']('ability-ui');
            if (_0x3c1292)
                _0x3c1292['style']['display'] = 'none';
        });
    }
}
let _0x10121a = '';
function _0xc34365(_0x4d2227) {
    const _0x36a5ba = document['getElementById']('vote-tally-panel');
    const _0x1726ea = document['getElementById']('vote-tally-list');
    if (!_0x36a5ba || !_0x1726ea)
        return;
    if (_0x4d2227['state'] !== 'DAY_VOTE') {
        _0x36a5ba['style']['display'] = 'none';
        _0x10121a = '';
        return;
    }
    _0x36a5ba['style']['display'] = 'block';
    const _0x2cabc5 = {};
    for (const _0x5d7d3a in _0x552f54) {
        if (!_0x552f54[_0x5d7d3a]['isDead'])
            _0x2cabc5[_0x5d7d3a] = 0x0;
    }
    if (_0x2a480f && !_0x2bbce8['isDead'])
        _0x2cabc5[_0x2a480f] = 0x0;
    const _0x25de02 = _0x4d2227['votes'] || {};
    for (const _0x41dff1 in _0x25de02) {
        const _0x4ed035 = _0x25de02[_0x41dff1];
        const _0x4019c8 = _0x4d2227['mayorRevealed'] && _0x4d2227['mayorRevealed'][_0x41dff1] ? 0x2 : 0x1;
        _0x2cabc5[_0x4ed035] = (_0x2cabc5[_0x4ed035] || 0x0) + _0x4019c8;
    }
    let _0x3d77c7 = 0x0;
    const _0xfcef8 = _0x4d2227['skips'] || {};
    for (const _0x1e4e4f in _0xfcef8) {
        _0x3d77c7 += Number(_0xfcef8[_0x1e4e4f]) || 0x1;
    }
    const _0x125e6c = JSON['stringify'](_0x2cabc5) + '_' + _0x3d77c7 + '_' + _0x2bbce8['isDead'];
    if (_0x125e6c === _0x10121a)
        return;
    _0x10121a = _0x125e6c;
    _0x1726ea['innerHTML'] = '';
    for (const _0x31c88d in _0x2cabc5) {
        const _0x474174 = parseInt(_0x31c88d);
        const _0x569662 = _0x474174 === _0x2a480f ? _0x46b054 : _0x552f54[_0x31c88d] ? _0x552f54[_0x31c88d]['name'] : 'Player\x20' + _0x31c88d;
        const _0x37250c = document['createElement']('div');
        _0x37250c['className'] = 'vote-tally-entry';
        const _0x2990af = document['createElement']('span');
        _0x2990af['textContent'] = _0x569662;
        const _0x7eae10 = document['createElement']('span');
        _0x7eae10['className'] = 'vote-count';
        _0x7eae10['textContent'] = _0x2cabc5[_0x31c88d] + '\x20vote' + (_0x2cabc5[_0x31c88d] === 0x1 ? '' : 's');
        _0x37250c['appendChild'](_0x2990af);
        _0x37250c['appendChild'](_0x7eae10);
        if (_0x474174 !== _0x2a480f && !_0x2bbce8['isDead']) {
            _0x37250c['style']['cursor'] = 'pointer';
            _0x37250c['title'] = 'Vote\x20for\x20' + _0x569662;
            _0x37250c['addEventListener']('click', _0x2aa3ad => {
                _0x2aa3ad['stopPropagation']();
                if (_0x539fe9 && _0x539fe9['readyState'] === WebSocket['OPEN']) {
                    _0x539fe9['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x569662
                    }));
                }
            });
        }
        _0x1726ea['appendChild'](_0x37250c);
    }
    const _0x128545 = document['createElement']('div');
    _0x128545['className'] = 'vote-tally-skip';
    _0x128545['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x3d77c7 + '</span>';
    if (!_0x2bbce8['isDead']) {
        _0x128545['style']['cursor'] = 'pointer';
        _0x128545['title'] = 'Click\x20to\x20skip\x20vote';
        _0x128545['addEventListener']('click', _0x99c88 => {
            _0x99c88['stopPropagation']();
            if (_0x539fe9 && _0x539fe9['readyState'] === WebSocket['OPEN']) {
                _0x539fe9['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x1726ea['appendChild'](_0x128545);
}
let _0x287d82 = null;
let _0xe284cf = null;
let _0x3c207b = null;
function _0x5718a2() {
    if (_0x539fe9 && _0x539fe9['readyState'] === WebSocket['OPEN']) {
        _0x539fe9['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x287d82,
            'abilityTarget': _0xe284cf,
            'killTarget': _0x3c207b
        }));
    }
}
function _0x553aa9() {
    const _0x2836d5 = document['getElementById']('ability-ui-body');
    if (!_0x2836d5)
        return;
    _0x2836d5['innerHTML'] = '';
    if (_0x238d05 === 'Celebrity' || _0x238d05 === 'Mayor') {
        const _0x43b3ac = document['createElement']('div');
        _0x43b3ac['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x43b3ac['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x2836d5['appendChild'](_0x43b3ac);
        return;
    }
    if (_0x238d05 === 'Skinwalker') {
        const _0x158ccc = document['createElement']('div');
        _0x158ccc['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x158ccc['innerText'] = 'Transform\x20into:';
        _0x2836d5['appendChild'](_0x158ccc);
        const _0x2e3378 = document['createElement']('div');
        _0x2e3378['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x2ee041 = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x40d467 = _0x596c78 => {
            if (!_0x8e6d5b['ROLE_LIST_RAW'] || _0x8e6d5b['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x8e6d5b['ROLE_LIST_RAW']['some'](_0x43aab4 => {
                if (_0x43aab4['name'] === _0x596c78)
                    return !_0x43aab4['isDead'];
                if (_0x4b6c6e[_0x43aab4['name']] && _0x4b6c6e[_0x43aab4['name']]['includes'](_0x596c78))
                    return !![];
                return ![];
            });
        };
        const _0xfc623f = [
            'None',
            ..._0x2ee041['filter'](_0x40d467)
        ];
        _0xfc623f['forEach'](_0x40b7eb => {
            const _0x1e0b92 = document['createElement']('button');
            _0x1e0b92['className'] = 'layer-btn';
            _0x1e0b92['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0x1e0b92['innerText'] = _0x40b7eb;
            const _0x4b7955 = _0x40b7eb === 'None' && !_0x287d82 || _0x287d82 === _0x40b7eb;
            if (_0x4b7955)
                _0x1e0b92['classList']['add']('active');
            _0x1e0b92['onclick'] = () => {
                _0x287d82 = _0x40b7eb === 'None' ? null : _0x40b7eb;
                _0x5718a2();
                _0x553aa9();
            };
            _0x2e3378['appendChild'](_0x1e0b92);
        });
        _0x2836d5['appendChild'](_0x2e3378);
        if (_0x40d467('Vigilante')) {
            const _0x3bcabc = document['createElement']('div');
            _0x3bcabc['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x3bcabc['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x2836d5['appendChild'](_0x3bcabc);
        }
        if (_0x287d82 === 'Vigilante') {
            const _0x331714 = document['createElement']('div');
            _0x331714['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x331714['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x2836d5['appendChild'](_0x331714);
        } else if (_0x287d82 && _0x287d82 !== 'Celebrity') {
            const _0x462dd5 = document['createElement']('div');
            _0x462dd5['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0x462dd5['innerText'] = 'Use\x20' + _0x287d82 + '\x20ability\x20on:';
            _0x2836d5['appendChild'](_0x462dd5);
            const _0x267711 = document['createElement']('div');
            _0x267711['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x66f899 = document['createElement']('button');
            _0x66f899['className'] = 'layer-btn';
            _0x66f899['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x66f899['innerText'] = 'No\x20one';
            if (!_0xe284cf)
                _0x66f899['classList']['add']('active');
            _0x66f899['onclick'] = () => {
                _0xe284cf = null;
                _0x5718a2();
                _0x553aa9();
            };
            _0x267711['appendChild'](_0x66f899);
            for (const _0x122516 in _0x552f54) {
                const _0x45b5a1 = _0x552f54[_0x122516];
                if (_0x45b5a1['isDead'])
                    continue;
                const _0x564c6a = document['createElement']('button');
                _0x564c6a['className'] = 'layer-btn';
                _0x564c6a['innerText'] = _0x45b5a1['name'];
                if (_0xe284cf === parseInt(_0x122516))
                    _0x564c6a['classList']['add']('active');
                _0x564c6a['onclick'] = () => {
                    _0xe284cf = parseInt(_0x122516);
                    _0x5718a2();
                    _0x553aa9();
                };
                _0x267711['appendChild'](_0x564c6a);
            }
            _0x2836d5['appendChild'](_0x267711);
        }
        const _0x4012c3 = document['createElement']('div');
        _0x4012c3['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x4012c3['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x2836d5['appendChild'](_0x4012c3);
        const _0x366252 = document['createElement']('div');
        _0x366252['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0xb004cd = document['createElement']('button');
        _0xb004cd['className'] = 'layer-btn';
        _0xb004cd['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0xb004cd['innerText'] = 'No\x20one';
        if (!_0x3c207b && !_0x8e6d5b['CURRENT_TARGET'])
            _0xb004cd['classList']['add']('active');
        _0xb004cd['onclick'] = () => {
            _0x3c207b = null;
            _0x8e6d5b['CURRENT_TARGET'] = null;
            _0x5718a2();
            _0x553aa9();
        };
        _0x366252['appendChild'](_0xb004cd);
        for (const _0x87dc98 in _0x552f54) {
            const _0x337318 = _0x552f54[_0x87dc98];
            if (_0x337318['isDead'])
                continue;
            const _0x13aa56 = document['createElement']('button');
            _0x13aa56['className'] = 'layer-btn';
            _0x13aa56['innerText'] = _0x337318['name'];
            if (_0x3c207b === parseInt(_0x87dc98) || _0x8e6d5b['CURRENT_TARGET'] === parseInt(_0x87dc98))
                _0x13aa56['classList']['add']('active');
            _0x13aa56['onclick'] = () => {
                _0x3c207b = parseInt(_0x87dc98);
                _0x8e6d5b['CURRENT_TARGET'] = parseInt(_0x87dc98);
                _0x5718a2();
                _0x553aa9();
            };
            _0x366252['appendChild'](_0x13aa56);
        }
        _0x2836d5['appendChild'](_0x366252);
        return;
    }
    let _0x39a148 = '';
    let _0x4d6715 = ![];
    if (_0x238d05 === 'Doctor') {
        _0x39a148 = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x4d6715 = !![];
    } else if (_0x238d05 === 'Investigator') {
        _0x39a148 = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x238d05 === 'Tracker') {
        _0x39a148 = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x238d05 === 'Archer') {
        _0x39a148 = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x238d05 === 'Escort') {
        _0x39a148 = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x238d05 === 'Vigilante') {
        _0x39a148 = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x1fab16 = document['createElement']('div');
    _0x1fab16['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x1fab16['innerText'] = _0x39a148;
    _0x2836d5['appendChild'](_0x1fab16);
    const _0x5066fd = document['createElement']('div');
    _0x5066fd['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x464533 = document['createElement']('button');
    _0x464533['className'] = 'layer-btn';
    _0x464533['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x464533['innerText'] = 'No\x20one';
    if (_0x8e6d5b['CURRENT_TARGET'] === null)
        _0x464533['classList']['add']('active');
    _0x464533['onclick'] = () => {
        _0x8e6d5b['CURRENT_TARGET'] = null;
        if (_0x539fe9 && _0x539fe9['readyState'] === WebSocket['OPEN']) {
            _0x539fe9['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x553aa9();
    };
    _0x5066fd['appendChild'](_0x464533);
    for (const _0x253320 in _0x552f54) {
        const _0x386125 = _0x552f54[_0x253320];
        if (_0x386125['isDead'])
            continue;
        const _0xf7d141 = document['createElement']('button');
        _0xf7d141['className'] = 'layer-btn';
        _0xf7d141['innerText'] = _0x386125['name'];
        if (_0x8e6d5b['CURRENT_TARGET'] === parseInt(_0x253320))
            _0xf7d141['classList']['add']('active');
        _0xf7d141['onclick'] = () => {
            _0x8e6d5b['CURRENT_TARGET'] = parseInt(_0x253320);
            if (_0x539fe9 && _0x539fe9['readyState'] === WebSocket['OPEN']) {
                _0x539fe9['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x253320)
                }));
            }
            _0x553aa9();
        };
        _0x5066fd['appendChild'](_0xf7d141);
    }
    if (_0x4d6715 && !_0x2bbce8['isDead']) {
        const _0x38be8d = document['createElement']('button');
        _0x38be8d['className'] = 'layer-btn';
        _0x38be8d['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x38be8d['innerText'] = _0x46b054 + '\x20(Self)';
        if (_0x8e6d5b['CURRENT_TARGET'] === _0x2a480f)
            _0x38be8d['classList']['add']('active');
        _0x38be8d['onclick'] = () => {
            _0x8e6d5b['CURRENT_TARGET'] = _0x2a480f;
            if (_0x539fe9 && _0x539fe9['readyState'] === WebSocket['OPEN']) {
                _0x539fe9['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x2a480f
                }));
            }
            _0x553aa9();
        };
        _0x5066fd['appendChild'](_0x38be8d);
    }
    _0x2836d5['appendChild'](_0x5066fd);
}
function _0x384780() {
    if (_0x539fe9 && (_0x539fe9['readyState'] === WebSocket['OPEN'] || _0x539fe9['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x13eea0 = new URLSearchParams();
    if (_0x293ba7)
        _0x13eea0['set']('token', _0x293ba7);
    _0x13eea0['set']('ngrok-skip-browser-warning', 'true');
    const _0x480ce2 = 'wss://prison-rankings-inspector-terry.trycloudflare.com';
    const _0x403411 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x480ce2;
    const _0x246848 = _0x403411 + '/?' + _0x13eea0['toString']();
    _0x539fe9 = new WebSocket(_0x246848);
    _0x539fe9['onopen'] = function () {
        if (!_0x18e0f7 && this['readyState'] === WebSocket['OPEN']) {
            this['send'](JSON['stringify']({
                'type': 'join',
                'name': _0x46b054,
                'token': _0x293ba7,
                'body': _0x4563ca,
                'eyes': _0x178c4a
            }));
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x539fe9 && _0x539fe9['readyState'] === WebSocket['OPEN']) {
            _0x539fe9['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x539fe9['onclose'] = _0x1fcc0c => {
        if (_0x1fcc0c['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x1fcc0c['code'] === 0xfa2 || _0x1fcc0c['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x2c974a = document['getElementById']('disconnect-overlay');
        if (!_0x2c974a) {
            _0x2c974a = document['createElement']('div');
            _0x2c974a['id'] = 'disconnect-overlay';
            _0x2c974a['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x2c974a['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x2c974a);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x539fe9['onmessage'] = _0x33e477 => {
        const _0x2943c3 = JSON['parse'](_0x33e477['data']);
        if (_0x2943c3['type'] === 'map_data') {
            _0x8e6d5b['MAP']['tileSize'] = _0x2943c3['map']['tileSize'];
            _0x8e6d5b['MAP']['columns'] = _0x2943c3['map']['columns'];
            _0x8e6d5b['MAP']['rows'] = _0x2943c3['map']['rows'];
            _0x8e6d5b['MAP']['layers'] = _0x2943c3['map']['layers'];
            if (_0x2943c3['map']['doors']) {
                _0x8e6d5b['MAP']['doors'] = _0x2943c3['map']['doors'];
                const _0x1ed714 = _0x8e6d5b['MAP']['layers']['find'](_0x1c8ccb => _0x1c8ccb['name'] === 'floor2');
                if (_0x1ed714) {
                    for (const _0x241dea in _0x8e6d5b['MAP']['doors']) {
                        _0x1ed714['data'][parseInt(_0x241dea)] = 0x2;
                    }
                }
            }
            if (_0x2943c3['entities'])
                _0x8e6d5b['ENTITIES'] = _0x2943c3['entities'];
            _0x454876();
            _0x8e6d5b['SYSTEM']['isReady'] = !![];
            _0x572153();
            if (!_0x8e6d5b['SYSTEM']['_gameLoopRunning']) {
                _0x8e6d5b['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x5bdcd8);
            }
            return;
        }
        if (_0x2943c3['type'] === 'init') {
            _0x2a480f = _0x2943c3['id'];
            _0x18e0f7 = ![];
            _0xaff857();
            if (_0x548551) {
                const _0x1d8578 = document['getElementById']('leaderboard-list');
                const _0x88fbf3 = document['getElementById']('leaderboard-toggle');
                if (_0x1d8578) {
                    _0x1d8578['style']['display'] = 'none';
                    if (_0x88fbf3)
                        _0x88fbf3['style']['transform'] = 'rotate(180deg)';
                }
                const _0x42fa3a = document['getElementById']('role-list-items');
                const _0x53a7aa = document['getElementById']('role-list-toggle');
                if (_0x42fa3a) {
                    _0x42fa3a['style']['display'] = 'none';
                    if (_0x53a7aa)
                        _0x53a7aa['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x25ec17 = _0x2943c3['isOwner'] || ![];
            _0x46b054 = _0x2943c3['name'] || _0x46b054;
            _0x8e6d5b['MAP']['tileSize'] = _0x2943c3['map']['tileSize'];
            _0x8e6d5b['MAP']['columns'] = _0x2943c3['map']['columns'];
            _0x8e6d5b['MAP']['rows'] = _0x2943c3['map']['rows'];
            _0x8e6d5b['MAP']['layers'] = _0x2943c3['map']['layers'];
            if (_0x2943c3['map']['doors']) {
                _0x8e6d5b['MAP']['doors'] = _0x2943c3['map']['doors'];
                const _0x18e415 = _0x8e6d5b['MAP']['layers']['find'](_0x497462 => _0x497462['name'] === 'floor2');
                if (_0x18e415) {
                    for (const _0x273a1f in _0x8e6d5b['MAP']['doors']) {
                        _0x18e415['data'][parseInt(_0x273a1f)] = 0x2;
                    }
                }
            }
            if (_0x2943c3['entities'])
                _0x8e6d5b['ENTITIES'] = _0x2943c3['entities'];
            _0x454876();
            _0x2bbce8['x'] = _0x8e6d5b['MAP']['columns'] * _0x8e6d5b['MAP']['tileSize'] / 0x2;
            _0x2bbce8['y'] = _0x8e6d5b['MAP']['rows'] * _0x8e6d5b['MAP']['tileSize'] / 0x2;
            _0x8e6d5b['CAMERA']['x'] = _0x2bbce8['x'] + _0x2bbce8['width'] / 0x2 - _0x8e6d5b['CAMERA']['width'] / 0x2;
            _0x8e6d5b['CAMERA']['y'] = _0x2bbce8['y'] + _0x2bbce8['height'] / 0x2 - _0x8e6d5b['CAMERA']['height'] / 0x2;
            if (_0x25ec17) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x3d6d45();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x8e6d5b['SYSTEM']['lastTime'] = performance['now']();
            _0x8e6d5b['SYSTEM']['isReady'] = !![];
            _0x391a7d();
            if (!_0x8e6d5b['SYSTEM']['_gameLoopRunning']) {
                _0x8e6d5b['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x5bdcd8);
            }
            return;
        } else if (_0x2943c3['type'] === 'state') {
            const _0x4afba2 = {};
            for (const _0x478067 in _0x2943c3['players']) {
                if (parseInt(_0x478067) === _0x2a480f)
                    continue;
                const _0x436f86 = _0x2943c3['players'][_0x478067];
                const _0x806871 = _0x552f54[_0x478067];
                if (_0x806871) {
                    const _0x5777bb = _0x436f86['x'] - _0x806871['renderX'];
                    const _0x5608ac = _0x436f86['y'] - _0x806871['renderY'];
                    const _0x449e74 = _0x5777bb * _0x5777bb + _0x5608ac * _0x5608ac > 0x78 * 0x78;
                    Object['assign'](_0x806871, _0x436f86);
                    if (_0x449e74) {
                        _0x806871['renderX'] = _0x436f86['x'];
                        _0x806871['renderY'] = _0x436f86['y'];
                    }
                    _0x4afba2[_0x478067] = _0x806871;
                } else {
                    _0x4afba2[_0x478067] = {
                        ..._0x436f86,
                        'renderX': _0x436f86['x'],
                        'renderY': _0x436f86['y'],
                        'renderAngle': _0x436f86['angle'] || 0x0
                    };
                }
            }
            _0x552f54 = _0x4afba2;
            if (_0x2943c3['players'][_0x2a480f]) {
                const _0x29a28a = _0x2943c3['players'][_0x2a480f];
                _0x2bbce8['chats'] = _0x29a28a['chats'] || [];
                _0x2bbce8['isDead'] = _0x29a28a['isDead'];
                if (_0x29a28a['name'])
                    _0x46b054 = _0x29a28a['name'];
                _0x391a7d();
                const _0x55e581 = Math['hypot'](_0x29a28a['x'] - _0x2bbce8['x'], _0x29a28a['y'] - _0x2bbce8['y']);
                if (_0x55e581 > 0xfa) {
                    _0x2bbce8['x'] = _0x29a28a['x'];
                    _0x2bbce8['y'] = _0x29a28a['y'];
                } else if (_0x55e581 > 0x50) {
                    _0x2bbce8['x'] += (_0x29a28a['x'] - _0x2bbce8['x']) * 0.06;
                    _0x2bbce8['y'] += (_0x29a28a['y'] - _0x2bbce8['y']) * 0.06;
                }
            }
            if (_0x2943c3['entities'])
                _0x8e6d5b['ENTITIES'] = _0x2943c3['entities'];
            if (_0x2943c3['game']) {
                _0x8e6d5b['GAME_STATE'] = _0x2943c3['game']['state'];
                _0x8e6d5b['NIGHT_ABILITY_OPEN'] = _0x2943c3['game']['nightAbilityOpen'];
                if (_0x2943c3['game']['mayorRevealed']) {
                    for (const _0x5a059f in _0x2943c3['game']['mayorRevealed']) {
                        _0x33d746['add'](parseInt(_0x5a059f));
                    }
                }
                if (_0x8e6d5b['LAST_STATE'] !== _0x8e6d5b['GAME_STATE']) {
                    if (_0x8e6d5b['GAME_STATE'] !== 'NIGHT') {
                        _0x8e6d5b['CURRENT_TARGET'] = null;
                        _0x287d82 = null;
                        _0xe284cf = null;
                        _0x3c207b = null;
                        const _0x44be51 = document['getElementById']('ability-ui');
                        if (_0x44be51)
                            _0x44be51['style']['display'] = 'none';
                    }
                    if (_0x8e6d5b['GAME_STATE'] === 'NIGHT') {
                        _0x2bbce8['chats'] = [];
                        for (const _0x435498 in _0x552f54) {
                            _0x552f54[_0x435498]['chats'] = [];
                        }
                    }
                    _0x8e6d5b['LAST_STATE'] = _0x8e6d5b['GAME_STATE'];
                    _0x2549d8();
                    _0x271bc0['onStateChange'](_0x8e6d5b['GAME_STATE'], _0x2943c3['game']['nightAbilityOpen']);
                }
                const _0x1fb4ce = document['getElementById']('phase-ui');
                if (_0x1fb4ce) {
                    _0x1fb4ce['style']['display'] = 'block';
                    let _0x12bb02 = _0x2943c3['game']['state']['replace']('_', '\x20');
                    if (_0x2943c3['game']['state'] === 'DAY_DISCUSS') {
                        _0x12bb02 = 'DAY\x20' + (_0x2943c3['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0x2943c3['game']['timer'] + 's';
                    } else if (_0x2943c3['game']['state'] === 'DAY_VOTE') {
                        _0x12bb02 = 'DAY\x20' + (_0x2943c3['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0x2943c3['game']['timer'] + 's';
                    } else if (_0x2943c3['game']['state'] === 'NIGHT') {
                        const _0x5454b3 = _0x2943c3['game']['dayCount'] || 0x1;
                        if (_0x2943c3['game']['nightAbilityOpen']) {
                            _0x12bb02 = 'NIGHT\x20' + _0x5454b3 + '\x20ABILITY\x20PHASE';
                            const _0x2cefc5 = _0x2943c3['game']['abilityTimer'] !== undefined ? _0x2943c3['game']['abilityTimer'] : _0x2943c3['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x2cefc5 + 's';
                        } else {
                            _0x12bb02 = 'NIGHT\x20' + _0x5454b3;
                            document['getElementById']('phase-timer')['innerText'] = _0x2943c3['game']['timer'] + 's';
                        }
                    }
                    document['getElementById']('phase-name')['innerText'] = _0x12bb02;
                }
                if (_0x2943c3['game']['state'] === 'NIGHT') {
                    const _0x1f23c8 = document['getElementById']('ability-timer-label');
                    if (_0x1f23c8) {
                        const _0x4c1eed = _0x2943c3['game']['abilityTimer'] !== undefined ? _0x2943c3['game']['abilityTimer'] : _0x2943c3['game']['timer'];
                        _0x1f23c8['innerText'] = _0x2943c3['game']['nightAbilityOpen'] ? _0x4c1eed + 's' : '';
                    }
                    if (_0x2943c3['game']['nightAbilityOpen'] && !_0x21a06b && !_0x2bbce8['isDead']) {
                        _0x21a06b = !![];
                        _0x553aa9();
                        const _0x1bb4da = document['getElementById']('ability-ui');
                        if (_0x1bb4da)
                            _0x1bb4da['style']['display'] = 'block';
                    }
                    if (!_0x2943c3['game']['nightAbilityOpen']) {
                        const _0x1c68fe = document['getElementById']('ability-ui');
                        if (_0x1c68fe && _0x1c68fe['style']['display'] === 'block') {
                            _0x1c68fe['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x21a06b = ![];
                }
                _0xc34365(_0x2943c3['game']);
                if (_0x2943c3['game']['roleListMode'] !== undefined) {
                    _0x8e6d5b['ROLE_LIST_RAW'] = _0x2943c3['game']['roleList'] || [];
                    _0x1d19cb(_0x2943c3['game']['roleList'], _0x2943c3['game']['roleListMode']);
                }
            }
        } else if (_0x2943c3['type'] === 'teleport') {
            _0x2bbce8['x'] = _0x2943c3['x'];
            _0x2bbce8['y'] = _0x2943c3['y'];
            _0x2bbce8['vx'] = 0x0;
            _0x2bbce8['vy'] = 0x0;
            _0x8e6d5b['CAMERA']['x'] = null;
            if (_0x2943c3['teleportId'] !== undefined)
                _0x2a03e3 = _0x2943c3['teleportId'];
            if (_0x2943c3['angle'] !== undefined) {
                _0x2bbce8['angle'] = _0x2943c3['angle'];
                _0x325f1c = Date['now']() + 0x3e8;
            }
        } else if (_0x2943c3['type'] === 'bulk_teleport') {
            for (const _0x173dbe in _0x2943c3['positions']) {
                const _0x7bceb9 = _0x2943c3['positions'][_0x173dbe];
                if (parseInt(_0x173dbe) === _0x2a480f) {
                    _0x2bbce8['x'] = _0x7bceb9['x'];
                    _0x2bbce8['y'] = _0x7bceb9['y'];
                    _0x2bbce8['vx'] = 0x0;
                    _0x2bbce8['vy'] = 0x0;
                    _0x8e6d5b['CAMERA']['x'] = null;
                    continue;
                }
                const _0x1e15cd = _0x552f54[_0x173dbe];
                if (_0x1e15cd) {
                    _0x1e15cd['x'] = _0x7bceb9['x'];
                    _0x1e15cd['y'] = _0x7bceb9['y'];
                    _0x1e15cd['renderX'] = _0x7bceb9['x'];
                    _0x1e15cd['renderY'] = _0x7bceb9['y'];
                    _0x1e15cd['vx'] = 0x0;
                    _0x1e15cd['vy'] = 0x0;
                }
            }
        } else if (_0x2943c3['type'] === 'player_left') {
            delete _0x552f54[_0x2943c3['id']];
            _0x33d746['delete'](parseInt(_0x2943c3['id']));
        } else if (_0x2943c3['type'] === 'map_update') {
            const _0x2ffcd9 = _0x8e6d5b['MAP']['layers']['find'](_0x584b6f => _0x584b6f['name'] === _0x2943c3['layer']);
            if (_0x2ffcd9) {
                _0x2ffcd9['data'][_0x2943c3['row'] * _0x8e6d5b['MAP']['columns'] + _0x2943c3['col']] = _0x2943c3['gid'];
                const _0x42f618 = _0x2943c3['row'] * _0x8e6d5b['MAP']['columns'] + _0x2943c3['col'];
                if (_0x8e6d5b['MAP']['doors'] && _0x8e6d5b['MAP']['doors'][_0x42f618]) {
                    const _0x4d6d6b = _0x8e6d5b['MAP']['layers']['find'](_0x4ca188 => _0x4ca188['name'] === 'floor2');
                    if (_0x4d6d6b)
                        _0x4d6d6b['data'][_0x42f618] = 0x2;
                }
                const _0x227669 = Math['floor'](_0x2943c3['col'] * _0x8e6d5b['MAP']['tileSize'] / _0x8e6d5b['MAP']['chunkSize']);
                const _0x1b2ef4 = Math['floor'](_0x2943c3['row'] * _0x8e6d5b['MAP']['tileSize'] / _0x8e6d5b['MAP']['chunkSize']);
                _0x29450f(_0x227669, _0x1b2ef4);
            }
        } else if (_0x2943c3['type'] === 'role_assign') {
            _0x238d05 = _0x2943c3['role'];
            _0x2bbce8['isDead'] = _0x238d05 === 'Spectator';
            _0x33d746['clear']();
            _0x8e6d5b['CURRENT_TARGET'] = null;
            _0x287d82 = null;
            _0xe284cf = null;
            _0x3c207b = null;
            _0x21a06b = ![];
            const _0x4bba66 = document['getElementById']('ability-ui');
            if (_0x4bba66)
                _0x4bba66['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x238d05;
            _0x2549d8();
            _0x3678ad(_0x238d05 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x238d05, !![]);
            let _0x64f96d = '';
            if (_0x238d05 === 'Investigator')
                _0x64f96d = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x238d05 === 'Tracker')
                _0x64f96d = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x238d05 === 'Doctor')
                _0x64f96d = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x238d05 === 'Archer')
                _0x64f96d = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x238d05 === 'Escort')
                _0x64f96d = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x238d05 === 'Vigilante')
                _0x64f96d = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x238d05 === 'Skinwalker')
                _0x64f96d = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x238d05 === 'Celebrity')
                _0x64f96d = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x238d05 === 'Mayor')
                _0x64f96d = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x3678ad(_0x64f96d, !![]);
        } else if (_0x2943c3['type'] === 'mayor_reveal') {
            _0x33d746['add'](parseInt(_0x2943c3['playerId']));
            _0x391a7d();
            _0x2549d8();
        } else if (_0x2943c3['type'] === 'rolelist_update') {
            _0x8e6d5b['ROLE_LIST_RAW'] = _0x2943c3['list'] || [];
            _0x1d19cb(_0x2943c3['list'], _0x2943c3['mode']);
        } else if (_0x2943c3['type'] === 'sound_event') {
            _0x271bc0['onSoundEvent'](_0x2943c3['track']);
        } else if (_0x2943c3['type'] === 'game_over') {
            _0x271bc0['onStateChange']('LOBBY', ![]);
            _0x1d19cb([], 'off');
            _0x238d05 = null;
            _0x2bbce8['isDead'] = ![];
            _0x33d746['clear']();
            _0x8e6d5b['CURRENT_TARGET'] = null;
            _0x287d82 = null;
            _0xe284cf = null;
            _0x3c207b = null;
            _0x21a06b = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x2549d8();
            _0x3678ad('The\x20game\x20has\x20ended.', !![]);
        } else if (_0x2943c3['type'] === 'chat_log') {
            _0x3678ad(_0x2943c3['sender'] + ':\x20' + _0x2943c3['text']);
        } else if (_0x2943c3['type'] === 'sys_chat') {
            _0x3678ad(_0x2943c3['text'], !![]);
        }
    };
}
function _0x3678ad(_0x23f46c, _0x3f45b8 = ![]) {
    const _0x364720 = document['getElementById']('chat-log-messages');
    const _0x154da5 = document['getElementById']('chat-log-ui');
    const _0x5be493 = _0x154da5['scrollHeight'] - _0x154da5['scrollTop'] - _0x154da5['clientHeight'] < 0x1e;
    const _0x5c01a1 = document['createElement']('div');
    _0x5c01a1['className'] = 'chat-log-line' + (_0x3f45b8 ? '\x20sys-msg' : '');
    _0x5c01a1['innerText'] = _0x23f46c;
    _0x364720['appendChild'](_0x5c01a1);
    if (_0x5be493) {
        _0x154da5['scrollTop'] = _0x154da5['scrollHeight'];
    }
    if (_0x364720['childElementCount'] > 0xc8) {
        _0x364720['removeChild'](_0x364720['firstChild']);
    }
}
let _0x19fb30 = -0x1, _0x43d08d = -0x1, _0x2a8aa4 = -0x1, _0x3bb31d = 0x0;
function _0x5d806a() {
    if (!_0x2a480f || !_0x539fe9 || _0x539fe9['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x7e41dc = performance['now']();
    const _0x30871c = _0x7e41dc - _0x3bb31d;
    const _0x1da40c = Math['abs'](_0x2bbce8['x'] - _0x19fb30) > 0.05 || Math['abs'](_0x2bbce8['y'] - _0x43d08d) > 0.05 || Math['abs'](_0x2bbce8['angle'] - _0x2a8aa4) > 0.02;
    if (!_0x1da40c && _0x30871c < 0xc8)
        return;
    if (_0x30871c < 0x19)
        return;
    _0x3bb31d = _0x7e41dc;
    _0x19fb30 = _0x2bbce8['x'];
    _0x43d08d = _0x2bbce8['y'];
    _0x2a8aa4 = _0x2bbce8['angle'];
    if (!_0x2a480f || !_0x539fe9 || _0x539fe9['readyState'] !== WebSocket['OPEN'])
        return;
    _0x539fe9['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x2bbce8['x'],
        'y': _0x2bbce8['y'],
        'vx': _0x2bbce8['vx'],
        'vy': _0x2bbce8['vy'],
        'angle': _0x2bbce8['angle'],
        'scale': _0x2bbce8['scale'],
        'teleportId': _0x2a03e3,
        'clientTimestamp': Date['now']()
    }));
}
function _0x3cfd52() {
    if (_0x2bbce8['isDead'])
        return;
    const _0x158cfe = _0x8e6d5b['MAP']['layers']['find'](_0x148367 => _0x148367['name'] === 'walls');
    if (!_0x158cfe)
        return;
    const _0x532d16 = _0x2bbce8['scale'];
    const _0x3a00ad = _0x2bbce8['width'] * _0x532d16 / 0x2;
    for (let _0x30234e = 0x0; _0x30234e < 0x3; _0x30234e++) {
        let _0x4a0d66 = _0x2bbce8['x'] + _0x2bbce8['width'] / 0x2;
        let _0x315409 = _0x2bbce8['y'] + _0x2bbce8['height'] / 0x2;
        const _0x25155f = Math['floor']((_0x4a0d66 - _0x3a00ad) / _0x8e6d5b['MAP']['tileSize']);
        const _0x47ae1f = Math['floor']((_0x4a0d66 + _0x3a00ad) / _0x8e6d5b['MAP']['tileSize']);
        const _0x5b03f0 = Math['floor']((_0x315409 - _0x3a00ad) / _0x8e6d5b['MAP']['tileSize']);
        const _0x5e374f = Math['floor']((_0x315409 + _0x3a00ad) / _0x8e6d5b['MAP']['tileSize']);
        for (let _0x3ac28c = _0x5b03f0; _0x3ac28c <= _0x5e374f; _0x3ac28c++) {
            for (let _0x192f9e = _0x25155f; _0x192f9e <= _0x47ae1f; _0x192f9e++) {
                if (_0x192f9e < 0x0 || _0x192f9e >= _0x8e6d5b['MAP']['columns'] || _0x3ac28c < 0x0 || _0x3ac28c >= _0x8e6d5b['MAP']['rows'])
                    continue;
                if (_0x158cfe['data'][_0x3ac28c * _0x8e6d5b['MAP']['columns'] + _0x192f9e] === 0x0)
                    continue;
                const _0xbfa03c = _0x192f9e * _0x8e6d5b['MAP']['tileSize'];
                const _0x23413d = _0x3ac28c * _0x8e6d5b['MAP']['tileSize'];
                const _0xe54005 = _0x4a0d66 < _0xbfa03c ? _0xbfa03c : _0x4a0d66 > _0xbfa03c + _0x8e6d5b['MAP']['tileSize'] ? _0xbfa03c + _0x8e6d5b['MAP']['tileSize'] : _0x4a0d66;
                const _0x448850 = _0x315409 < _0x23413d ? _0x23413d : _0x315409 > _0x23413d + _0x8e6d5b['MAP']['tileSize'] ? _0x23413d + _0x8e6d5b['MAP']['tileSize'] : _0x315409;
                const _0x273608 = _0x4a0d66 - _0xe54005;
                const _0x1172f8 = _0x315409 - _0x448850;
                const _0x3a3b82 = Math['sqrt'](_0x273608 * _0x273608 + _0x1172f8 * _0x1172f8);
                if (_0x3a3b82 < _0x3a00ad) {
                    if (_0x3a3b82 === 0x0) {
                        const _0xb63f4c = _0x4a0d66 - _0xbfa03c;
                        const _0x89661d = _0xbfa03c + _0x8e6d5b['MAP']['tileSize'] - _0x4a0d66;
                        const _0x657bd7 = _0x315409 - _0x23413d;
                        const _0x1c73d9 = _0x23413d + _0x8e6d5b['MAP']['tileSize'] - _0x315409;
                        const _0x2e0cda = Math['min'](_0xb63f4c, _0x89661d, _0x657bd7, _0x1c73d9);
                        if (_0x2e0cda === _0xb63f4c)
                            _0x4a0d66 = _0xbfa03c - _0x3a00ad;
                        else if (_0x2e0cda === _0x89661d)
                            _0x4a0d66 = _0xbfa03c + _0x8e6d5b['MAP']['tileSize'] + _0x3a00ad;
                        else if (_0x2e0cda === _0x657bd7)
                            _0x315409 = _0x23413d - _0x3a00ad;
                        else
                            _0x315409 = _0x23413d + _0x8e6d5b['MAP']['tileSize'] + _0x3a00ad;
                    } else {
                        const _0x207132 = _0x3a00ad - _0x3a3b82;
                        _0x4a0d66 += _0x273608 / _0x3a3b82 * _0x207132;
                        _0x315409 += _0x1172f8 / _0x3a3b82 * _0x207132;
                        const _0x3fe06f = _0x2bbce8['vx'] * (_0x273608 / _0x3a3b82) + _0x2bbce8['vy'] * (_0x1172f8 / _0x3a3b82);
                        if (_0x3fe06f < 0x0) {
                            _0x2bbce8['vx'] -= _0x3fe06f * (_0x273608 / _0x3a3b82);
                            _0x2bbce8['vy'] -= _0x3fe06f * (_0x1172f8 / _0x3a3b82);
                        }
                    }
                }
            }
        }
        _0x2bbce8['x'] = _0x4a0d66 - _0x2bbce8['width'] / 0x2;
        _0x2bbce8['y'] = _0x315409 - _0x2bbce8['height'] / 0x2;
    }
}
function _0x35044e(_0x13ec3c) {
    const _0x7ccd = _0x8e6d5b['MAP']['layers']['find'](_0x1e4f9a => _0x1e4f9a['name'] === 'walls');
    if (!_0x7ccd)
        return;
    const _0x42e511 = _0x13ec3c['width'] / 0x2;
    for (let _0x1b1cbd = 0x0; _0x1b1cbd < 0x2; _0x1b1cbd++) {
        let _0x5826f6 = _0x13ec3c['x'] + _0x13ec3c['width'] / 0x2;
        let _0x22adaa = _0x13ec3c['y'] + _0x13ec3c['height'] / 0x2;
        const _0x36555a = Math['floor']((_0x5826f6 - _0x42e511) / _0x8e6d5b['MAP']['tileSize']);
        const _0x267873 = Math['floor']((_0x5826f6 + _0x42e511) / _0x8e6d5b['MAP']['tileSize']);
        const _0x248dc4 = Math['floor']((_0x22adaa - _0x42e511) / _0x8e6d5b['MAP']['tileSize']);
        const _0x4ae911 = Math['floor']((_0x22adaa + _0x42e511) / _0x8e6d5b['MAP']['tileSize']);
        for (let _0x126a38 = _0x248dc4; _0x126a38 <= _0x4ae911; _0x126a38++) {
            for (let _0x1794ee = _0x36555a; _0x1794ee <= _0x267873; _0x1794ee++) {
                if (_0x1794ee < 0x0 || _0x1794ee >= _0x8e6d5b['MAP']['columns'] || _0x126a38 < 0x0 || _0x126a38 >= _0x8e6d5b['MAP']['rows'])
                    continue;
                if (_0x7ccd['data'][_0x126a38 * _0x8e6d5b['MAP']['columns'] + _0x1794ee] === 0x0)
                    continue;
                const _0x48fca7 = _0x1794ee * _0x8e6d5b['MAP']['tileSize'];
                const _0xfa25cb = _0x126a38 * _0x8e6d5b['MAP']['tileSize'];
                const _0x4975f5 = _0x5826f6 < _0x48fca7 ? _0x48fca7 : _0x5826f6 > _0x48fca7 + _0x8e6d5b['MAP']['tileSize'] ? _0x48fca7 + _0x8e6d5b['MAP']['tileSize'] : _0x5826f6;
                const _0x48e47f = _0x22adaa < _0xfa25cb ? _0xfa25cb : _0x22adaa > _0xfa25cb + _0x8e6d5b['MAP']['tileSize'] ? _0xfa25cb + _0x8e6d5b['MAP']['tileSize'] : _0x22adaa;
                const _0x349215 = _0x5826f6 - _0x4975f5;
                const _0x47f64f = _0x22adaa - _0x48e47f;
                const _0x2fda84 = Math['sqrt'](_0x349215 * _0x349215 + _0x47f64f * _0x47f64f);
                if (_0x2fda84 < _0x42e511) {
                    if (_0x2fda84 === 0x0) {
                        const _0x184e18 = _0x5826f6 - _0x48fca7;
                        const _0x3fd5a4 = _0x48fca7 + _0x8e6d5b['MAP']['tileSize'] - _0x5826f6;
                        const _0x544e00 = _0x22adaa - _0xfa25cb;
                        const _0x222b56 = _0xfa25cb + _0x8e6d5b['MAP']['tileSize'] - _0x22adaa;
                        const _0x40441e = Math['min'](_0x184e18, _0x3fd5a4, _0x544e00, _0x222b56);
                        if (_0x40441e === _0x184e18)
                            _0x5826f6 = _0x48fca7 - _0x42e511;
                        else if (_0x40441e === _0x3fd5a4)
                            _0x5826f6 = _0x48fca7 + _0x8e6d5b['MAP']['tileSize'] + _0x42e511;
                        else if (_0x40441e === _0x544e00)
                            _0x22adaa = _0xfa25cb - _0x42e511;
                        else
                            _0x22adaa = _0xfa25cb + _0x8e6d5b['MAP']['tileSize'] + _0x42e511;
                    } else {
                        const _0x5b5078 = _0x42e511 - _0x2fda84;
                        _0x5826f6 += _0x349215 / _0x2fda84 * _0x5b5078;
                        _0x22adaa += _0x47f64f / _0x2fda84 * _0x5b5078;
                    }
                }
            }
        }
        _0x13ec3c['x'] = _0x5826f6 - _0x13ec3c['width'] / 0x2;
        _0x13ec3c['y'] = _0x22adaa - _0x13ec3c['height'] / 0x2;
    }
}
function _0xfd90a2(_0x1a56cb) {
    const _0x5d7bf5 = _0x1a56cb['width'] / 0x2;
    for (let _0x42afbe = 0x0; _0x42afbe < 0x2; _0x42afbe++) {
        let _0x26b876 = _0x1a56cb['x'] + _0x1a56cb['width'] / 0x2;
        let _0x490009 = _0x1a56cb['y'] + _0x1a56cb['height'] / 0x2;
        for (const _0x52fa38 of _0x8e6d5b['ENTITIES']) {
            const _0x2daa37 = _0x26b876 < _0x52fa38['x'] ? _0x52fa38['x'] : _0x26b876 > _0x52fa38['x'] + _0x52fa38['w'] ? _0x52fa38['x'] + _0x52fa38['w'] : _0x26b876;
            const _0x3386ec = _0x490009 < _0x52fa38['y'] ? _0x52fa38['y'] : _0x490009 > _0x52fa38['y'] + _0x52fa38['h'] ? _0x52fa38['y'] + _0x52fa38['h'] : _0x490009;
            const _0x56d287 = _0x26b876 - _0x2daa37;
            const _0x4aaa13 = _0x490009 - _0x3386ec;
            const _0x2a5783 = Math['sqrt'](_0x56d287 * _0x56d287 + _0x4aaa13 * _0x4aaa13);
            if (_0x2a5783 < _0x5d7bf5 && _0x2a5783 > 0x0) {
                const _0x224b8e = _0x5d7bf5 - _0x2a5783;
                const _0x3442de = _0x56d287 / _0x2a5783;
                const _0xd34c1c = _0x4aaa13 / _0x2a5783;
                _0x26b876 += _0x3442de * _0x224b8e;
                _0x490009 += _0xd34c1c * _0x224b8e;
            } else if (_0x2a5783 === 0x0) {
                const _0x56ad35 = _0x26b876 - _0x52fa38['x'];
                const _0xc24160 = _0x52fa38['x'] + _0x52fa38['w'] - _0x26b876;
                const _0x2246b7 = _0x490009 - _0x52fa38['y'];
                const _0x6b04d1 = _0x52fa38['y'] + _0x52fa38['h'] - _0x490009;
                const _0x3c526b = Math['min'](_0x56ad35, _0xc24160, _0x2246b7, _0x6b04d1);
                if (_0x3c526b === _0x56ad35)
                    _0x26b876 = _0x52fa38['x'] - _0x5d7bf5;
                else if (_0x3c526b === _0xc24160)
                    _0x26b876 = _0x52fa38['x'] + _0x52fa38['w'] + _0x5d7bf5;
                else if (_0x3c526b === _0x2246b7)
                    _0x490009 = _0x52fa38['y'] - _0x5d7bf5;
                else
                    _0x490009 = _0x52fa38['y'] + _0x52fa38['h'] + _0x5d7bf5;
            }
        }
        _0x1a56cb['x'] = _0x26b876 - _0x1a56cb['width'] / 0x2;
        _0x1a56cb['y'] = _0x490009 - _0x1a56cb['height'] / 0x2;
    }
}
function _0x146a4c() {
    if (_0x2bbce8['isDead'])
        return;
    const _0x25b818 = _0x2bbce8['width'] / 0x2;
    const _0x1cc66b = _0x2bbce8['x'] + _0x2bbce8['width'] / 0x2;
    const _0x439992 = _0x2bbce8['y'] + _0x2bbce8['height'] / 0x2;
    for (const _0x1cea20 in _0x552f54) {
        const _0x330374 = _0x552f54[_0x1cea20];
        if (_0x330374['isDead'])
            continue;
        const _0x398c28 = _0x330374['width'] / 0x2;
        const _0x224437 = _0x25b818 + _0x398c28;
        const _0x2f1224 = (_0x330374['renderX'] ?? _0x330374['x']) + _0x330374['width'] / 0x2;
        const _0x3330c2 = (_0x330374['renderY'] ?? _0x330374['y']) + _0x330374['height'] / 0x2;
        const _0x3ab092 = _0x1cc66b - _0x2f1224;
        const _0x5e6add = _0x439992 - _0x3330c2;
        const _0xc80849 = Math['sqrt'](_0x3ab092 * _0x3ab092 + _0x5e6add * _0x5e6add);
        if (_0xc80849 > 0x0 && _0xc80849 < _0x224437) {
            const _0x2df024 = _0x224437 - _0xc80849;
            const _0x25cb18 = _0x3ab092 / _0xc80849;
            const _0x1da5fc = _0x5e6add / _0xc80849;
            _0x2bbce8['x'] += _0x25cb18 * (_0x2df024 * 0.25);
            _0x2bbce8['y'] += _0x1da5fc * (_0x2df024 * 0.25);
            _0x330374['x'] -= _0x25cb18 * (_0x2df024 * 0.75);
            _0x330374['y'] -= _0x1da5fc * (_0x2df024 * 0.75);
            _0x35044e(_0x330374);
            _0xfd90a2(_0x330374);
            if (_0x330374['renderX'] !== undefined) {
                _0x330374['renderX'] = _0x330374['x'];
                _0x330374['renderY'] = _0x330374['y'];
            }
            const _0x135140 = _0x2bbce8['vx'] * _0x25cb18 + _0x2bbce8['vy'] * _0x1da5fc;
            if (_0x135140 < 0x0) {
                _0x2bbce8['vx'] -= _0x135140 * _0x25cb18 * 0.25;
                _0x2bbce8['vy'] -= _0x135140 * _0x1da5fc * 0.25;
            }
        }
    }
    _0x3cfd52();
    _0x3c65c7();
}
function _0x3c65c7() {
    if (_0x2bbce8['isDead'])
        return;
    const _0x36f8ea = _0x2bbce8['scale'];
    const _0x24ed34 = _0x2bbce8['width'] * _0x36f8ea / 0x2;
    for (let _0x445a0a = 0x0; _0x445a0a < 0x2; _0x445a0a++) {
        let _0x56284c = _0x2bbce8['x'] + _0x2bbce8['width'] / 0x2;
        let _0x528943 = _0x2bbce8['y'] + _0x2bbce8['height'] / 0x2;
        for (const _0x161bd9 of _0x8e6d5b['ENTITIES']) {
            const _0x281001 = _0x56284c < _0x161bd9['x'] ? _0x161bd9['x'] : _0x56284c > _0x161bd9['x'] + _0x161bd9['w'] ? _0x161bd9['x'] + _0x161bd9['w'] : _0x56284c;
            const _0x4a7170 = _0x528943 < _0x161bd9['y'] ? _0x161bd9['y'] : _0x528943 > _0x161bd9['y'] + _0x161bd9['h'] ? _0x161bd9['y'] + _0x161bd9['h'] : _0x528943;
            const _0x55bcc6 = _0x56284c - _0x281001;
            const _0x2a20c0 = _0x528943 - _0x4a7170;
            const _0x4ce5b3 = Math['sqrt'](_0x55bcc6 * _0x55bcc6 + _0x2a20c0 * _0x2a20c0);
            if (_0x4ce5b3 < _0x24ed34 && _0x4ce5b3 > 0x0) {
                const _0x29fdf2 = _0x24ed34 - _0x4ce5b3;
                const _0x3ae673 = _0x55bcc6 / _0x4ce5b3;
                const _0x2c7312 = _0x2a20c0 / _0x4ce5b3;
                _0x56284c += _0x3ae673 * _0x29fdf2;
                _0x528943 += _0x2c7312 * _0x29fdf2;
                const _0x8c6d5b = _0x2bbce8['vx'] * _0x3ae673 + _0x2bbce8['vy'] * _0x2c7312;
                if (_0x8c6d5b < 0x0) {
                    _0x2bbce8['vx'] -= _0x8c6d5b * _0x3ae673;
                    _0x2bbce8['vy'] -= _0x8c6d5b * _0x2c7312;
                }
            } else if (_0x4ce5b3 === 0x0) {
                const _0x133b38 = _0x56284c - _0x161bd9['x'];
                const _0x170f4e = _0x161bd9['x'] + _0x161bd9['w'] - _0x56284c;
                const _0x2fda2f = _0x528943 - _0x161bd9['y'];
                const _0x582c95 = _0x161bd9['y'] + _0x161bd9['h'] - _0x528943;
                const _0x45b0d8 = Math['min'](_0x133b38, _0x170f4e, _0x2fda2f, _0x582c95);
                if (_0x45b0d8 === _0x133b38)
                    _0x56284c = _0x161bd9['x'] - _0x24ed34;
                else if (_0x45b0d8 === _0x170f4e)
                    _0x56284c = _0x161bd9['x'] + _0x161bd9['w'] + _0x24ed34;
                else if (_0x45b0d8 === _0x2fda2f)
                    _0x528943 = _0x161bd9['y'] - _0x24ed34;
                else
                    _0x528943 = _0x161bd9['y'] + _0x161bd9['h'] + _0x24ed34;
            }
        }
        _0x2bbce8['x'] = _0x56284c - _0x2bbce8['width'] / 0x2;
        _0x2bbce8['y'] = _0x528943 - _0x2bbce8['height'] / 0x2;
    }
}
function _0x68ed66(_0x1c47b9, _0x53c4e2) {
    const _0x1b390d = _0x8e6d5b['MAP']['layers']['find'](_0x3d39f4 => _0x3d39f4['name'] === 'trees');
    if (!_0x1b390d)
        return ![];
    const _0x506eef = Math['floor'](_0x1c47b9 / _0x8e6d5b['MAP']['tileSize']);
    const _0x264284 = Math['floor'](_0x53c4e2 / _0x8e6d5b['MAP']['tileSize']);
    if (_0x506eef < 0x0 || _0x506eef >= _0x8e6d5b['MAP']['columns'] || _0x264284 < 0x0 || _0x264284 >= _0x8e6d5b['MAP']['rows'])
        return ![];
    return _0x1b390d['data'][_0x264284 * _0x8e6d5b['MAP']['columns'] + _0x506eef] === 0xb;
}
let _0x61d0a7 = null;
function _0x535a65() {
    const _0x243dec = _0x8e6d5b['MAP'];
    const _0x331a32 = _0x243dec['layers']['find'](_0x140c46 => _0x140c46['name'] === 'floor2');
    const _0x5feba9 = _0x243dec['layers']['find'](_0x2c37b4 => _0x2c37b4['name'] === 'walls');
    if (!_0x331a32 || !_0x5feba9) {
        _0x61d0a7 = null;
        return;
    }
    const _0x56a2db = _0x243dec['columns'];
    const _0x2bc67c = _0x243dec['rows'];
    const _0x62bbe3 = [];
    const _0x1a7644 = [];
    const _0x458f44 = new Set();
    for (let _0x5a69b5 = 0x0; _0x5a69b5 < _0x2bc67c; _0x5a69b5++) {
        for (let _0x5c3d6a = 0x0; _0x5c3d6a < _0x56a2db; _0x5c3d6a++) {
            const _0x254077 = _0x5a69b5 * _0x56a2db + _0x5c3d6a;
            const _0x101ee8 = _0x331a32['data'][_0x254077];
            const _0x4b8ac5 = _0x5feba9['data'][_0x254077];
            if (_0x101ee8 === 0x2 || _0x101ee8 === 0x4) {
                _0x62bbe3['push']({
                    'c': _0x5c3d6a,
                    'r': _0x5a69b5
                });
                if (_0x4b8ac5 !== 0x0)
                    _0x1a7644['push']({
                        'c': _0x5c3d6a,
                        'r': _0x5a69b5
                    });
            }
            if (_0x4b8ac5 !== 0x0)
                _0x458f44['add'](_0x5c3d6a + ',' + _0x5a69b5);
        }
    }
    const _0x49de29 = new Set(_0x62bbe3['map'](_0x5a7a5a => _0x5a7a5a['c'] + ',' + _0x5a7a5a['r']));
    const _0x14efda = [
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
                c: _0x4561e2,
                r: _0x8b1d5
            } of _0x62bbe3) {
        for (const [_0x4e1c00, _0x5708f6] of _0x14efda) {
            const _0xc68ed3 = _0x4561e2 + _0x4e1c00, _0x20ff23 = _0x8b1d5 + _0x5708f6;
            const _0x50ffb4 = _0xc68ed3 + ',' + _0x20ff23;
            if (!_0x49de29['has'](_0x50ffb4))
                _0x458f44['add'](_0x50ffb4);
        }
    }
    _0x61d0a7 = {
        'wallSet': _0x458f44,
        'floorTiles': _0x62bbe3,
        'wallTiles': _0x1a7644,
        'interiorSet': _0x49de29
    };
}
function _0x22e141() {
    const _0x5a5fac = _0x8e6d5b['MAP']['layers']['find'](_0x4c5938 => _0x4c5938['name'] === 'floor2');
    if (!_0x5a5fac)
        return ![];
    const _0x20a7cc = Math['floor']((_0x2bbce8['x'] + _0x2bbce8['width'] / 0x2) / _0x8e6d5b['MAP']['tileSize']);
    const _0x56cc83 = Math['floor']((_0x2bbce8['y'] + _0x2bbce8['height'] / 0x2) / _0x8e6d5b['MAP']['tileSize']);
    if (_0x20a7cc < 0x0 || _0x20a7cc >= _0x8e6d5b['MAP']['columns'] || _0x56cc83 < 0x0 || _0x56cc83 >= _0x8e6d5b['MAP']['rows'])
        return ![];
    const _0x41ad60 = _0x5a5fac['data'][_0x56cc83 * _0x8e6d5b['MAP']['columns'] + _0x20a7cc];
    return _0x41ad60 === 0x2;
}
function _0x304898() {
    if (_0x2bbce8['isDead']) {
        _0x8e6d5b['SHADOW']['polygon'] = null;
        return;
    }
    const _0x5c3b9e = _0x8e6d5b['MAP'];
    const _0x171080 = _0x8e6d5b['SHADOW'];
    const _0x106300 = _0x5c3b9e['tileSize'];
    if (!_0x61d0a7)
        _0x535a65();
    if (!_0x61d0a7) {
        _0x171080['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x19ca9e,
        floorTiles: _0xbd6d61
    } = _0x61d0a7;
    if (_0xbd6d61['length'] === 0x0) {
        _0x171080['polygon'] = null;
        return;
    }
    if (!_0x22e141()) {
        _0x171080['polygon'] = null;
        return;
    }
    const _0x597e11 = _0x2bbce8['x'] + _0x2bbce8['width'] / 0x2;
    const _0x5616c0 = _0x2bbce8['y'] + _0x2bbce8['height'] / 0x2;
    if (!_0x61d0a7['_bounds']) {
        let _0x4bad6f = Infinity, _0x4e57f6 = -Infinity, _0x249bdc = Infinity, _0x18280 = -Infinity;
        for (const {
                    c: _0x1a477c,
                    r: _0x1abea7
                } of _0xbd6d61) {
            if (_0x1a477c < _0x4bad6f)
                _0x4bad6f = _0x1a477c;
            if (_0x1a477c > _0x4e57f6)
                _0x4e57f6 = _0x1a477c;
            if (_0x1abea7 < _0x249bdc)
                _0x249bdc = _0x1abea7;
            if (_0x1abea7 > _0x18280)
                _0x18280 = _0x1abea7;
        }
        _0x61d0a7['_bounds'] = {
            'minC': Math['max'](0x0, _0x4bad6f - 0x1),
            'maxC': Math['min'](_0x5c3b9e['columns'] - 0x1, _0x4e57f6 + 0x1),
            'minR': Math['max'](0x0, _0x249bdc - 0x1),
            'maxR': Math['min'](_0x5c3b9e['rows'] - 0x1, _0x18280 + 0x1)
        };
        const _0x37b70d = [];
        for (let _0x22973e = _0x61d0a7['_bounds']['minR']; _0x22973e <= _0x61d0a7['_bounds']['maxR']; _0x22973e++) {
            for (let _0x519168 = _0x61d0a7['_bounds']['minC']; _0x519168 <= _0x61d0a7['_bounds']['maxC']; _0x519168++) {
                if (_0x19ca9e['has'](_0x519168 + ',' + _0x22973e))
                    _0x37b70d['push'](_0x519168, _0x22973e);
            }
        }
        _0x61d0a7['_wallArr'] = _0x37b70d;
    }
    const {
        minC: _0x30588c,
        maxC: _0xbe4120,
        minR: _0x592803,
        maxR: _0x9b8752
    } = _0x61d0a7['_bounds'];
    const _0x5b75ed = _0x61d0a7['_wallArr'];
    const _0x58138c = 0.0001;
    const _0x4b0d7b = new Set();
    const _0x41c269 = [];
    for (let _0x565425 = 0x0; _0x565425 < _0x5b75ed['length']; _0x565425 += 0x2) {
        const _0x4ba128 = _0x5b75ed[_0x565425], _0x4e100b = _0x5b75ed[_0x565425 + 0x1];
        const _0x30f3b9 = [
            _0x4ba128 * _0x106300,
            _0x4e100b * _0x106300,
            _0x4ba128 * _0x106300 + _0x106300,
            _0x4e100b * _0x106300,
            _0x4ba128 * _0x106300,
            _0x4e100b * _0x106300 + _0x106300,
            _0x4ba128 * _0x106300 + _0x106300,
            _0x4e100b * _0x106300 + _0x106300
        ];
        for (let _0x54ce29 = 0x0; _0x54ce29 < _0x30f3b9['length']; _0x54ce29 += 0x2) {
            const _0xa84444 = _0x30f3b9[_0x54ce29], _0x3422e1 = _0x30f3b9[_0x54ce29 + 0x1];
            const _0x23c743 = Math['atan2'](_0x3422e1 - _0x5616c0, _0xa84444 - _0x597e11);
            const _0x3adc61 = Math['round'](_0x23c743 * 0x4e20);
            if (!_0x4b0d7b['has'](_0x3adc61 - 0x1)) {
                _0x4b0d7b['add'](_0x3adc61 - 0x1);
                _0x41c269['push'](_0x23c743 - _0x58138c);
            }
            if (!_0x4b0d7b['has'](_0x3adc61)) {
                _0x4b0d7b['add'](_0x3adc61);
                _0x41c269['push'](_0x23c743);
            }
            if (!_0x4b0d7b['has'](_0x3adc61 + 0x1)) {
                _0x4b0d7b['add'](_0x3adc61 + 0x1);
                _0x41c269['push'](_0x23c743 + _0x58138c);
            }
        }
    }
    _0x41c269['sort']((_0x31ae7b, _0x3bd5f9) => _0x31ae7b - _0x3bd5f9);
    const _0x45c0dd = Math['hypot']((_0xbe4120 - _0x30588c + 0x2) * _0x106300, (_0x9b8752 - _0x592803 + 0x2) * _0x106300);
    const _0x383e6c = _0x22642a => {
        const _0x2748ae = Math['cos'](_0x22642a);
        const _0x4928e9 = Math['sin'](_0x22642a);
        let _0xf36d73 = _0x45c0dd;
        for (let _0x30e94d = 0x0; _0x30e94d < _0x5b75ed['length']; _0x30e94d += 0x2) {
            const _0x444d18 = _0x5b75ed[_0x30e94d], _0x349a86 = _0x5b75ed[_0x30e94d + 0x1];
            const _0x20275c = _0x444d18 * _0x106300, _0x5d3bfe = _0x349a86 * _0x106300;
            const _0x23001a = _0x20275c + _0x106300, _0x5ac44c = _0x5d3bfe + _0x106300;
            const _0x4bce8a = _0x20275c + _0x106300 * 0.5, _0x6def3c = _0x5d3bfe + _0x106300 * 0.5;
            const _0x19b4f6 = Math['abs'](_0x4bce8a - _0x597e11) + Math['abs'](_0x6def3c - _0x5616c0);
            if (_0x19b4f6 > _0xf36d73 + _0x106300 * 1.5)
                continue;
            let _0x27a088, _0x41efc5, _0xe0bb11;
            _0x27a088 = -_0x4928e9 * _0x106300;
            if (Math['abs'](_0x27a088) >= 1e-10) {
                _0x41efc5 = -(_0x5d3bfe - _0x5616c0) * _0x106300 / _0x27a088;
                _0xe0bb11 = ((_0x20275c - _0x597e11) * _0x4928e9 - (_0x5d3bfe - _0x5616c0) * _0x2748ae) / _0x27a088;
                if (_0x41efc5 > 0.001 && _0xe0bb11 >= 0x0 && _0xe0bb11 <= 0x1 && _0x41efc5 < _0xf36d73)
                    _0xf36d73 = _0x41efc5;
            }
            _0x27a088 = _0x2748ae * _0x106300;
            if (Math['abs'](_0x27a088) >= 1e-10) {
                _0x41efc5 = (_0x23001a - _0x597e11) * _0x106300 / _0x27a088;
                _0xe0bb11 = ((_0x23001a - _0x597e11) * _0x4928e9 - (_0x5d3bfe - _0x5616c0) * _0x2748ae) / _0x27a088;
                if (_0x41efc5 > 0.001 && _0xe0bb11 >= 0x0 && _0xe0bb11 <= 0x1 && _0x41efc5 < _0xf36d73)
                    _0xf36d73 = _0x41efc5;
            }
            _0x27a088 = _0x4928e9 * _0x106300;
            if (Math['abs'](_0x27a088) >= 1e-10) {
                _0x41efc5 = (_0x5ac44c - _0x5616c0) * _0x106300 / _0x27a088;
                _0xe0bb11 = ((_0x23001a - _0x597e11) * _0x4928e9 - (_0x5ac44c - _0x5616c0) * _0x2748ae) / _0x27a088;
                if (_0x41efc5 > 0.001 && _0xe0bb11 >= 0x0 && _0xe0bb11 <= 0x1 && _0x41efc5 < _0xf36d73)
                    _0xf36d73 = _0x41efc5;
            }
            _0x27a088 = -_0x2748ae * _0x106300;
            if (Math['abs'](_0x27a088) >= 1e-10) {
                _0x41efc5 = -(_0x20275c - _0x597e11) * _0x106300 / _0x27a088;
                _0xe0bb11 = ((_0x20275c - _0x597e11) * _0x4928e9 - (_0x5ac44c - _0x5616c0) * _0x2748ae) / _0x27a088;
                if (_0x41efc5 > 0.001 && _0xe0bb11 >= 0x0 && _0xe0bb11 <= 0x1 && _0x41efc5 < _0xf36d73)
                    _0xf36d73 = _0x41efc5;
            }
        }
        const _0x345ffa = _0xf36d73 < _0x45c0dd ? _0xf36d73 + 0x8 : _0xf36d73;
        return {
            'x': _0x597e11 + _0x2748ae * _0x345ffa,
            'y': _0x5616c0 + _0x4928e9 * _0x345ffa
        };
    };
    const _0x4c0d28 = [];
    for (let _0x575de6 = 0x0; _0x575de6 < _0x41c269['length']; _0x575de6++) {
        const _0xb54ff6 = _0x383e6c(_0x41c269[_0x575de6]);
        _0x4c0d28['push'](_0xb54ff6['x'], _0xb54ff6['y']);
    }
    _0x171080['polygon'] = _0x4c0d28['length'] >= 0x6 ? new Float32Array(_0x4c0d28) : null;
}
function _0x57941d(_0x30e4d9, _0x327e12, _0x3a041e) {
    if (_0x2bbce8['isDead'])
        return;
    if (!_0x61d0a7)
        return;
    const {
        floorTiles: _0x195f40,
        wallTiles: _0x59681c
    } = _0x61d0a7;
    if (_0x195f40['length'] === 0x0)
        return;
    const _0x16168b = _0x8e6d5b['SHADOW'];
    const _0x8a5dda = _0x8e6d5b['MAP']['tileSize'];
    const _0x1367bf = _0x8e6d5b['CAMERA']['width'];
    const _0x162d83 = _0x8e6d5b['CAMERA']['height'];
    if (!_0x8e6d5b['SHADOW']['_buf'] || _0x8e6d5b['SHADOW']['_buf']['width'] !== _0x1367bf || _0x8e6d5b['SHADOW']['_buf']['height'] !== _0x162d83) {
        _0x8e6d5b['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x8e6d5b['SHADOW']['_buf']['width'] = _0x1367bf;
        _0x8e6d5b['SHADOW']['_buf']['height'] = _0x162d83;
    }
    const _0xe07827 = _0x8e6d5b['SHADOW']['_buf'];
    const _0xe12deb = _0xe07827['getContext']('2d');
    _0xe12deb['clearRect'](0x0, 0x0, _0x1367bf, _0x162d83);
    _0xe12deb['fillStyle'] = 'rgba(0,0,0,0.97)';
    _0xe12deb['beginPath']();
    for (const {
                c: _0x4006be,
                r: _0x4dec69
            } of _0x195f40) {
        const _0x25dce0 = Math['floor'](_0x4006be * _0x8a5dda - _0x327e12), _0x52e712 = Math['floor'](_0x4dec69 * _0x8a5dda - _0x3a041e);
        if (_0x25dce0 > _0x1367bf || _0x52e712 > _0x162d83 || _0x25dce0 + _0x8a5dda < 0x0 || _0x52e712 + _0x8a5dda < 0x0)
            continue;
        _0xe12deb['rect'](_0x25dce0 - 0x1, _0x52e712 - 0x1, _0x8a5dda + 0x2, _0x8a5dda + 0x2);
    }
    _0xe12deb['fill']();
    if (_0x59681c['length'] > 0x0) {
        _0xe12deb['globalCompositeOperation'] = 'destination-out';
        _0xe12deb['fillStyle'] = 'rgba(0,0,0,1)';
        _0xe12deb['beginPath']();
        for (const {
                    c: _0x5224eb,
                    r: _0x4dfae4
                } of _0x59681c) {
            const _0x328b9f = Math['floor'](_0x5224eb * _0x8a5dda - _0x327e12), _0x627db9 = Math['floor'](_0x4dfae4 * _0x8a5dda - _0x3a041e);
            if (_0x328b9f > _0x1367bf || _0x627db9 > _0x162d83 || _0x328b9f + _0x8a5dda < 0x0 || _0x627db9 + _0x8a5dda < 0x0)
                continue;
            _0xe12deb['rect'](_0x328b9f - 0x1, _0x627db9 - 0x1, _0x8a5dda + 0x2, _0x8a5dda + 0x2);
        }
        _0xe12deb['fill']();
        _0xe12deb['globalCompositeOperation'] = 'source-over';
    }
    if (_0x16168b['polygon'] && _0x16168b['polygon']['length'] >= 0x6) {
        _0xe12deb['globalCompositeOperation'] = 'destination-out';
        _0xe12deb['beginPath']();
        const _0x330f28 = _0x16168b['polygon'];
        _0xe12deb['moveTo'](_0x330f28[0x0] - _0x327e12, _0x330f28[0x1] - _0x3a041e);
        for (let _0x32e1a7 = 0x2; _0x32e1a7 < _0x330f28['length']; _0x32e1a7 += 0x2) {
            _0xe12deb['lineTo'](_0x330f28[_0x32e1a7] - _0x327e12, _0x330f28[_0x32e1a7 + 0x1] - _0x3a041e);
        }
        _0xe12deb['closePath']();
        _0xe12deb['fill']();
        _0xe12deb['globalCompositeOperation'] = 'source-over';
    }
    _0x30e4d9['drawImage'](_0xe07827, 0x0, 0x0);
}
function _0x270cc6(_0x3ae790) {
    let _0x55ac3e = 0x0, _0x3fd9d7 = 0x0;
    const _0x24925e = _0x8e6d5b['INPUTS']['mouseX'] / _0x8e6d5b['SYSTEM']['viewScale'];
    const _0x2c40cf = _0x8e6d5b['INPUTS']['mouseY'] / _0x8e6d5b['SYSTEM']['viewScale'];
    const _0xb37f0 = _0x2bbce8['x'] - _0x8e6d5b['CAMERA']['x'] + _0x2bbce8['width'] / 0x2;
    const _0x3bc661 = _0x2bbce8['y'] - _0x8e6d5b['CAMERA']['y'] + _0x2bbce8['height'] / 0x2;
    const _0x1f3930 = Math['atan2'](_0x2c40cf - _0x3bc661, _0x24925e - _0xb37f0);
    if (_0x1eea18 !== 0x0 || _0x31d5b0 !== 0x0) {
        _0x55ac3e = _0x1eea18;
        _0x3fd9d7 = _0x31d5b0;
    } else if (_0x2318fb) {
        let _0xa60f75 = 0x0, _0x5a4b39 = 0x0;
        if (_0x8e6d5b['INPUTS']['keys']['w'] || _0x8e6d5b['INPUTS']['keys']['arrowup'])
            _0xa60f75 += 0x1;
        if (_0x8e6d5b['INPUTS']['keys']['s'] || _0x8e6d5b['INPUTS']['keys']['arrowdown'])
            _0xa60f75 -= 0x1;
        if (_0x8e6d5b['INPUTS']['keys']['d'] || _0x8e6d5b['INPUTS']['keys']['arrowright'])
            _0x5a4b39 += 0x1;
        if (_0x8e6d5b['INPUTS']['keys']['a'] || _0x8e6d5b['INPUTS']['keys']['arrowleft'])
            _0x5a4b39 -= 0x1;
        if (_0xa60f75 !== 0x0 || _0x5a4b39 !== 0x0) {
            const _0x3d67e0 = _0x1f3930 + Math['atan2'](_0x5a4b39, _0xa60f75);
            _0x55ac3e = Math['cos'](_0x3d67e0);
            _0x3fd9d7 = Math['sin'](_0x3d67e0);
        }
    } else {
        if (_0x8e6d5b['INPUTS']['keys']['w'] || _0x8e6d5b['INPUTS']['keys']['arrowup'])
            _0x3fd9d7 -= 0x1;
        if (_0x8e6d5b['INPUTS']['keys']['s'] || _0x8e6d5b['INPUTS']['keys']['arrowdown'])
            _0x3fd9d7 += 0x1;
        if (_0x8e6d5b['INPUTS']['keys']['a'] || _0x8e6d5b['INPUTS']['keys']['arrowleft'])
            _0x55ac3e -= 0x1;
        if (_0x8e6d5b['INPUTS']['keys']['d'] || _0x8e6d5b['INPUTS']['keys']['arrowright'])
            _0x55ac3e += 0x1;
        const _0x27d300 = _0x55ac3e !== 0x0 || _0x3fd9d7 !== 0x0;
        if (_0x27d300) {
            const _0x2b5027 = Math['sqrt'](_0x55ac3e * _0x55ac3e + _0x3fd9d7 * _0x3fd9d7);
            _0x55ac3e /= _0x2b5027;
            _0x3fd9d7 /= _0x2b5027;
        }
    }
    if (_0x8e6d5b['GAME_STATE'] === 'NIGHT' && _0x238d05 === 'Skinwalker') {
        if (_0x8e6d5b['NIGHT_ABILITY_OPEN'] || !_0x8e6d5b['CURRENT_TARGET']) {
            _0x55ac3e = 0x0;
            _0x3fd9d7 = 0x0;
            _0x2bbce8['vx'] = 0x0;
            _0x2bbce8['vy'] = 0x0;
            _0x2bbce8['x'] = _0x8e6d5b['MAP']['columns'] * _0x8e6d5b['MAP']['tileSize'] / 0x2 - _0x2bbce8['width'] / 0x2;
            _0x2bbce8['y'] = _0x8e6d5b['MAP']['rows'] * _0x8e6d5b['MAP']['tileSize'] / 0x2 - _0x2bbce8['height'] / 0x2;
        }
    }
    const _0x158bed = _0x55ac3e !== 0x0 || _0x3fd9d7 !== 0x0;
    const _0x3c0d1c = (_0x8e6d5b['INPUTS']['keys']['shift'] || _0x107215 || _0x1f9412) && _0x158bed;
    _0x2bbce8['bopTimer'] = _0x3c0d1c ? _0x2bbce8['bopTimer'] + _0x3ae790 : 0x0;
    _0x2bbce8['scale'] = 0x1 + (_0x2bbce8['bopTimer'] > 0x0 ? Math['sin'](_0x2bbce8['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x916a5f = Math['pow'](0.001, _0x3ae790);
    const _0x22dce1 = _0x3c0d1c ? 0x74a : 0x5d5;
    _0x2bbce8['vx'] += _0x55ac3e * _0x22dce1 * _0x3ae790;
    _0x2bbce8['vy'] += _0x3fd9d7 * _0x22dce1 * _0x3ae790;
    _0x2bbce8['vx'] *= _0x916a5f;
    _0x2bbce8['vy'] *= _0x916a5f;
    _0x2bbce8['x'] += _0x2bbce8['vx'] * _0x3ae790;
    _0x2bbce8['y'] += _0x2bbce8['vy'] * _0x3ae790;
    for (let _0x182643 = 0x0; _0x182643 < 0x3; _0x182643++)
        _0x3cfd52();
    for (let _0x34c654 = 0x0; _0x34c654 < 0x2; _0x34c654++)
        _0x3c65c7();
    for (let _0x25aa5c = 0x0; _0x25aa5c < 0x2; _0x25aa5c++)
        _0x146a4c();
    if (_0x2bbce8['x'] < 0x0)
        _0x2bbce8['x'] = 0x0;
    if (_0x2bbce8['y'] < 0x0)
        _0x2bbce8['y'] = 0x0;
    if (_0x2bbce8['x'] + _0x2bbce8['width'] > _0x8e6d5b['MAP']['columns'] * _0x8e6d5b['MAP']['tileSize'])
        _0x2bbce8['x'] = _0x8e6d5b['MAP']['columns'] * _0x8e6d5b['MAP']['tileSize'] - _0x2bbce8['width'];
    if (_0x2bbce8['y'] + _0x2bbce8['height'] > _0x8e6d5b['MAP']['rows'] * _0x8e6d5b['MAP']['tileSize'])
        _0x2bbce8['y'] = _0x8e6d5b['MAP']['rows'] * _0x8e6d5b['MAP']['tileSize'] - _0x2bbce8['height'];
    if (Date['now']() < _0x325f1c) {
    } else if (_0x5d2df9) {
        _0x2bbce8['angle'] = _0x128499 + Math['PI'] / 0x2;
    } else if (_0x1eea18 !== 0x0 || _0x31d5b0 !== 0x0) {
        _0x2bbce8['angle'] = Math['atan2'](_0x31d5b0, _0x1eea18) + Math['PI'] / 0x2;
    } else if (!_0x548551) {
        _0x2bbce8['angle'] = _0x1f3930 + Math['PI'] / 0x2;
    }
    const _0x2e1c69 = _0x2bbce8['x'] + _0x2bbce8['width'] / 0x2 - _0x8e6d5b['CAMERA']['width'] / 0x2;
    const _0x16b01 = _0x2bbce8['y'] + _0x2bbce8['height'] / 0x2 - _0x8e6d5b['CAMERA']['height'] / 0x2;
    if (_0x8e6d5b['CAMERA']['x'] === null || isNaN(_0x8e6d5b['CAMERA']['x']) || !isFinite(_0x8e6d5b['CAMERA']['x'])) {
        _0x8e6d5b['CAMERA']['x'] = _0x2e1c69;
        _0x8e6d5b['CAMERA']['y'] = _0x16b01;
    } else {
        const _0x3240ba = 0x1 - Math['exp'](-Math['max'](0x0, _0x3ae790) * 0x28);
        _0x8e6d5b['CAMERA']['x'] += (_0x2e1c69 - _0x8e6d5b['CAMERA']['x']) * _0x3240ba;
        _0x8e6d5b['CAMERA']['y'] += (_0x16b01 - _0x8e6d5b['CAMERA']['y']) * _0x3240ba;
    }
    for (const _0x5dc25e in _0x552f54) {
        const _0x35ebbd = _0x552f54[_0x5dc25e];
        if (_0x35ebbd['renderX'] === undefined) {
            _0x35ebbd['renderX'] = _0x35ebbd['x'];
            _0x35ebbd['renderY'] = _0x35ebbd['y'];
            _0x35ebbd['renderAngle'] = _0x35ebbd['angle'] || 0x0;
        }
        const _0x1bed35 = _0x35ebbd['x'] + (_0x35ebbd['vx'] || 0x0) * _0x3ae790;
        const _0x51270f = _0x35ebbd['y'] + (_0x35ebbd['vy'] || 0x0) * _0x3ae790;
        _0x35ebbd['x'] = _0x1bed35;
        _0x35ebbd['y'] = _0x51270f;
        const _0x31013d = 0x1 - Math['exp'](-_0x3ae790 * 0x12);
        const _0x159124 = _0x35ebbd['x'] - _0x35ebbd['renderX'], _0x1876e4 = _0x35ebbd['y'] - _0x35ebbd['renderY'];
        const _0x483f94 = Math['sqrt'](_0x159124 * _0x159124 + _0x1876e4 * _0x1876e4);
        const _0x488ef7 = 0xc8;
        if (_0x483f94 > _0x488ef7) {
            _0x35ebbd['renderX'] = _0x35ebbd['x'] - _0x159124 / _0x483f94 * _0x488ef7;
            _0x35ebbd['renderY'] = _0x35ebbd['y'] - _0x1876e4 / _0x483f94 * _0x488ef7;
        }
        _0x35ebbd['renderX'] += (_0x35ebbd['x'] - _0x35ebbd['renderX']) * _0x31013d;
        _0x35ebbd['renderY'] += (_0x35ebbd['y'] - _0x35ebbd['renderY']) * _0x31013d;
        let _0x46eece = (_0x35ebbd['angle'] || 0x0) - _0x35ebbd['renderAngle'];
        while (_0x46eece < -Math['PI'])
            _0x46eece += Math['PI'] * 0x2;
        while (_0x46eece > Math['PI'])
            _0x46eece -= Math['PI'] * 0x2;
        _0x35ebbd['renderAngle'] += _0x46eece * (0x1 - Math['exp'](-_0x3ae790 * 0x14));
    }
    if (_0x8e6d5b['GAME_STATE'] === 'NIGHT') {
        _0x4090f1 = Math['min'](0.6, _0x4090f1 + _0x3ae790 * 0.5);
    } else {
        _0x4090f1 = Math['max'](0x0, _0x4090f1 - _0x3ae790 * 0.5);
    }
    _0x304898();
    _0x5d806a();
}
function _0x467894(_0x5954c0, _0x48c03b, _0x1c1bdb, _0x5d8cb2, _0x3ecfc7 = !![]) {
    _0x5954c0['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x2b3789 = _0x5954c0['measureText'](_0x48c03b)['width'];
    const _0x3026ef = _0x2b3789 + 0x18;
    const _0xb074cb = 0x1c;
    _0x5954c0['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x5954c0['beginPath']();
    if (_0x5954c0['roundRect']) {
        _0x5954c0['roundRect'](_0x1c1bdb - _0x3026ef / 0x2, _0x5d8cb2 - _0xb074cb, _0x3026ef, _0xb074cb, 0x6);
    } else {
        _0x5954c0['rect'](_0x1c1bdb - _0x3026ef / 0x2, _0x5d8cb2 - _0xb074cb, _0x3026ef, _0xb074cb);
    }
    _0x5954c0['fill']();
    if (_0x3ecfc7) {
        _0x5954c0['beginPath']();
        _0x5954c0['moveTo'](_0x1c1bdb - 0x6, _0x5d8cb2);
        _0x5954c0['lineTo'](_0x1c1bdb + 0x6, _0x5d8cb2);
        _0x5954c0['lineTo'](_0x1c1bdb, _0x5d8cb2 + 0x6);
        _0x5954c0['fill']();
    }
    _0x5954c0['fillStyle'] = '#ffffff';
    _0x5954c0['textAlign'] = 'center';
    _0x5954c0['textBaseline'] = 'middle';
    _0x5954c0['fillText'](_0x48c03b, _0x1c1bdb, _0x5d8cb2 - _0xb074cb / 0x2 + 0x1);
}
function _0x3f49c9(_0x154d25, _0x528d35, _0x40c5f0, _0x520fa7) {
    if (!_0x528d35 || _0x528d35['length'] === 0x0)
        return;
    let _0x15edf2 = _0x520fa7;
    for (let _0x143c3c = 0x0; _0x143c3c < _0x528d35['length']; _0x143c3c++) {
        _0x467894(_0x154d25, _0x528d35[_0x143c3c]['text'], _0x40c5f0, _0x15edf2, _0x143c3c === 0x0);
        _0x15edf2 -= 0x24;
    }
}
function _0x510e4a() {
    if (!_0x8e6d5b['SYSTEM']['isReady'])
        return;
    _0x295d64['fillStyle'] = '#000000';
    _0x295d64['fillRect'](0x0, 0x0, _0x43c9dd['width'], _0x43c9dd['height']);
    _0x295d64['save']();
    try {
        _0x295d64['scale'](_0x8e6d5b['SYSTEM']['viewScale'], _0x8e6d5b['SYSTEM']['viewScale']);
        _0x295d64['imageSmoothingEnabled'] = ![];
        const _0x247926 = Math['floor'](_0x8e6d5b['CAMERA']['x'] || 0x0);
        const _0x46537d = Math['floor'](_0x8e6d5b['CAMERA']['y'] || 0x0);
        const _0x403a24 = Math['max'](0x0, Math['floor'](_0x247926 / _0x8e6d5b['MAP']['chunkSize']));
        const _0x1e49b5 = Math['min'](_0x8e6d5b['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x247926 + _0x8e6d5b['CAMERA']['width']) / _0x8e6d5b['MAP']['chunkSize']));
        const _0x136c09 = Math['max'](0x0, Math['floor'](_0x46537d / _0x8e6d5b['MAP']['chunkSize']));
        const _0x4fc9bb = Math['min'](_0x8e6d5b['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x46537d + _0x8e6d5b['CAMERA']['height']) / _0x8e6d5b['MAP']['chunkSize']));
        for (let _0x2f01f2 = _0x136c09; _0x2f01f2 <= _0x4fc9bb; _0x2f01f2++)
            for (let _0x2cea2f = _0x403a24; _0x2cea2f <= _0x1e49b5; _0x2cea2f++) {
                const _0x860fbd = _0x2cea2f * _0x8e6d5b['MAP']['chunkSize'] - _0x247926;
                const _0x3edce3 = _0x2f01f2 * _0x8e6d5b['MAP']['chunkSize'] - _0x46537d;
                _0x295d64['drawImage'](_0x8e6d5b['MAP']['bgChunks'][_0x2f01f2][_0x2cea2f], _0x860fbd, _0x3edce3, _0x8e6d5b['MAP']['chunkSize'] + 0x1, _0x8e6d5b['MAP']['chunkSize'] + 0x1);
            }
        if (_0x557277['complete'] && _0x557277['naturalWidth'] > 0x0) {
            const _0x4a461e = _0x8e6d5b['MAP']['tileSize'];
            const _0x34126d = _0x4a461e * 0xa;
            const _0x3a24c8 = _0x8e6d5b['MAP']['columns'] / 0x2 * _0x4a461e - _0x34126d / 0x2 - _0x247926;
            const _0x3c06c7 = _0x8e6d5b['MAP']['rows'] / 0x2 * _0x4a461e - _0x34126d / 0x2 - _0x46537d;
            _0x295d64['imageSmoothingEnabled'] = ![];
            _0x295d64['drawImage'](_0x557277, _0x3a24c8, _0x3c06c7, _0x34126d, _0x34126d);
        }
        if (_0x4d5c79['complete'] && _0x4d5c79['naturalWidth'] > 0x0) {
            _0x8e6d5b['ENTITIES']['forEach'](_0x49b010 => {
                if (_0x49b010['type'] !== 'table')
                    return;
                _0x295d64['save']();
                _0x295d64['imageSmoothingEnabled'] = ![];
                const _0xce9ed6 = _0x4d5c79['naturalWidth'] >= _0x4d5c79['naturalHeight'];
                const _0x4e9249 = _0x49b010['w'] >= _0x49b010['h'];
                if (_0xce9ed6 === _0x4e9249) {
                    _0x295d64['drawImage'](_0x4d5c79, _0x49b010['x'] - _0x247926, _0x49b010['y'] - _0x46537d, _0x49b010['w'], _0x49b010['h']);
                } else {
                    _0x295d64['translate'](_0x49b010['x'] - _0x247926 + _0x49b010['w'] / 0x2, _0x49b010['y'] - _0x46537d + _0x49b010['h'] / 0x2);
                    _0x295d64['rotate'](Math['PI'] / 0x2);
                    _0x295d64['drawImage'](_0x4d5c79, -_0x49b010['h'] / 0x2, -_0x49b010['w'] / 0x2, _0x49b010['h'], _0x49b010['w']);
                }
                _0x295d64['restore']();
            });
        } else {
            _0x8e6d5b['ENTITIES']['forEach'](_0x15e94b => {
                if (_0x15e94b['type'] !== 'table')
                    return;
                _0x295d64['save']();
                _0x295d64['fillStyle'] = '#6b4423';
                _0x295d64['fillRect'](_0x15e94b['x'] - _0x247926, _0x15e94b['y'] - _0x46537d, _0x15e94b['w'], _0x15e94b['h']);
                _0x295d64['strokeStyle'] = '#422810';
                _0x295d64['lineWidth'] = 0x3;
                _0x295d64['strokeRect'](_0x15e94b['x'] - _0x247926 + 0x1, _0x15e94b['y'] - _0x46537d + 0x1, _0x15e94b['w'] - 0x2, _0x15e94b['h'] - 0x2);
                _0x295d64['fillStyle'] = '#82532a';
                _0x295d64['fillRect'](_0x15e94b['x'] - _0x247926 + 0x4, _0x15e94b['y'] - _0x46537d + 0x4, _0x15e94b['w'] - 0x8, _0x15e94b['h'] - 0x8);
                _0x295d64['restore']();
            });
        }
        if (_0x18e0f7) {
            for (let _0x29d05c = _0x136c09; _0x29d05c <= _0x4fc9bb; _0x29d05c++) {
                for (let _0x43c539 = _0x403a24; _0x43c539 <= _0x1e49b5; _0x43c539++) {
                    const _0x22af5e = _0x43c539 * _0x8e6d5b['MAP']['chunkSize'] - _0x247926;
                    const _0xc032df = _0x29d05c * _0x8e6d5b['MAP']['chunkSize'] - _0x46537d;
                    _0x295d64['drawImage'](_0x8e6d5b['MAP']['fgChunks'][_0x29d05c][_0x43c539], _0x22af5e, _0xc032df, _0x8e6d5b['MAP']['chunkSize'] + 0x1, _0x8e6d5b['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x3b9bf1 = _0x8e6d5b['GAME_STATE'] === 'NIGHT' && _0x238d05 === 'Skinwalker' && !_0x2bbce8['isDead'];
        const _0x31f927 = _0x2bbce8['x'] - _0x247926 + _0x2bbce8['width'] / 0x2;
        const _0x47ea92 = _0x2bbce8['y'] - _0x46537d + _0x2bbce8['height'] / 0x2;
        const _0x3ae128 = _0x2bbce8['width'] * _0x2bbce8['scale'] * 1.3;
        const _0x374dd3 = _0x2bbce8['height'] * _0x2bbce8['scale'] * 1.3;
        for (const _0x29e481 in _0x552f54) {
            const _0x1c5d0b = _0x552f54[_0x29e481];
            if (_0x1c5d0b['isDead'])
                continue;
            const _0x2780ad = (_0x1c5d0b['renderX'] ?? _0x1c5d0b['x']) - _0x247926 + _0x1c5d0b['width'] / 0x2;
            const _0x352264 = (_0x1c5d0b['renderY'] ?? _0x1c5d0b['y']) - _0x46537d + _0x1c5d0b['height'] / 0x2;
            const _0x48cd39 = Math['min'](0x2, Math['max'](0.3, _0x1c5d0b['scale'] || 0x1));
            const _0x1097ef = _0x1c5d0b['width'] * _0x48cd39 * 1.3;
            const _0x36ff75 = _0x1c5d0b['height'] * _0x48cd39 * 1.3;
            _0x295d64['save']();
            try {
                _0x295d64['translate'](_0x2780ad, _0x352264);
                _0x295d64['rotate'](_0x1c5d0b['renderAngle'] ?? 0x0);
                if (_0x1c5d0b['isDark'])
                    _0x295d64['filter'] = 'brightness(0)';
                _0x3da1fb(_0x295d64, _0x1c5d0b['body'], _0x1c5d0b['eyes'], _0x1097ef, _0x36ff75);
                if (_0x33d746['has'](parseInt(_0x29e481)) && _0x53a559['complete'] && _0x53a559['naturalWidth'] > 0x0) {
                    _0x295d64['drawImage'](_0x53a559, -_0x1097ef / 0x2, -_0x36ff75 / 0x2, _0x1097ef, _0x36ff75);
                }
                if (_0x1c5d0b['isDark'])
                    _0x295d64['filter'] = 'none';
            } finally {
                _0x295d64['restore']();
            }
            if (!_0x68ed66((_0x1c5d0b['renderX'] ?? _0x1c5d0b['x']) + _0x1c5d0b['width'] / 0x2, (_0x1c5d0b['renderY'] ?? _0x1c5d0b['y']) + _0x1c5d0b['height'] / 0x2)) {
                _0x295d64['textAlign'] = 'center';
                _0x295d64['lineJoin'] = 'round';
                _0x295d64['lineWidth'] = 0x3;
                _0x295d64['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x295d64['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x295d64['fillStyle'] = _0x33d746['has'](parseInt(_0x29e481)) ? '#cc88ff' : '#ffffff';
                const _0x2ab3e5 = _0x1c5d0b['isDark'] ? '???' : _0x1c5d0b['name'] + (_0x1c5d0b['isOwner'] ? '\x20[🗝️]' : '');
                _0x295d64['strokeText'](_0x2ab3e5, _0x2780ad, _0x352264 - _0x36ff75 / 0x2 - 0x10);
                _0x295d64['fillText'](_0x2ab3e5, _0x2780ad, _0x352264 - _0x36ff75 / 0x2 - 0x10);
            }
        }
        if (!_0x2bbce8['isDead']) {
            _0x295d64['save']();
            try {
                _0x295d64['translate'](_0x31f927, _0x47ea92);
                _0x295d64['rotate'](_0x2bbce8['angle']);
                if (_0x3b9bf1)
                    _0x295d64['filter'] = 'brightness(0)';
                _0x3da1fb(_0x295d64, _0x4563ca, _0x178c4a, _0x3ae128, _0x374dd3);
                if (_0x33d746['has'](_0x2a480f) && _0x53a559['complete'] && _0x53a559['naturalWidth'] > 0x0) {
                    _0x295d64['drawImage'](_0x53a559, -_0x3ae128 / 0x2, -_0x374dd3 / 0x2, _0x3ae128, _0x374dd3);
                }
                if (_0x3b9bf1)
                    _0x295d64['filter'] = 'none';
            } finally {
                _0x295d64['restore']();
            }
            if (!_0x68ed66(_0x2bbce8['x'] + _0x2bbce8['width'] / 0x2, _0x2bbce8['y'] + _0x2bbce8['height'] / 0x2)) {
                _0x295d64['textAlign'] = 'center';
                _0x295d64['lineJoin'] = 'round';
                _0x295d64['lineWidth'] = 0x3;
                _0x295d64['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x295d64['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x295d64['fillStyle'] = _0x33d746['has'](_0x2a480f) ? '#cc88ff' : '#ffffff';
                const _0x5e88dd = _0x3b9bf1 ? '???' : _0x46b054 + (_0x25ec17 ? '\x20[🗝️]' : '');
                _0x295d64['strokeText'](_0x5e88dd, _0x31f927, _0x47ea92 - _0x374dd3 / 0x2 - 0x10);
                _0x295d64['fillText'](_0x5e88dd, _0x31f927, _0x47ea92 - _0x374dd3 / 0x2 - 0x10);
            }
        }
        if (_0x8e6d5b['MAP']['wallChunks'] && _0x8e6d5b['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x5db993 = _0x136c09; _0x5db993 <= _0x4fc9bb; _0x5db993++)
                for (let _0x49e736 = _0x403a24; _0x49e736 <= _0x1e49b5; _0x49e736++) {
                    if (!_0x8e6d5b['MAP']['wallChunks'][_0x5db993] || !_0x8e6d5b['MAP']['wallChunks'][_0x5db993][_0x49e736])
                        continue;
                    const _0x2d1673 = _0x49e736 * _0x8e6d5b['MAP']['chunkSize'] - _0x247926;
                    const _0x7e9a89 = _0x5db993 * _0x8e6d5b['MAP']['chunkSize'] - _0x46537d;
                    _0x295d64['drawImage'](_0x8e6d5b['MAP']['wallChunks'][_0x5db993][_0x49e736], _0x2d1673, _0x7e9a89, _0x8e6d5b['MAP']['chunkSize'] + 0x1, _0x8e6d5b['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x2363c9 of _0x8e6d5b['ENTITIES']) {
            if (_0x2363c9['type'] !== 'npc')
                continue;
            const _0x4f9528 = _0x2363c9['x'] - _0x247926 + _0x2363c9['w'] / 0x2;
            const _0x580c3f = _0x2363c9['y'] - _0x46537d + _0x2363c9['h'] / 0x2;
            const _0x179ca7 = _0x2363c9['w'];
            const _0x2aadb6 = _0x2363c9['h'];
            _0x295d64['save']();
            _0x295d64['translate'](_0x4f9528, _0x580c3f);
            _0x295d64['rotate'](_0x2363c9['angle'] !== undefined ? _0x2363c9['angle'] : 0x0);
            _0x3da1fb(_0x295d64, _0x2363c9['body'] || 'yanito932.png', _0x2363c9['eyes'], _0x179ca7, _0x2aadb6);
            _0x295d64['restore']();
            _0x295d64['textAlign'] = 'center';
            _0x295d64['lineJoin'] = 'round';
            _0x295d64['lineWidth'] = 0x3;
            _0x295d64['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x295d64['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x295d64['fillStyle'] = '#aaaaaa';
            _0x295d64['strokeText'](_0x2363c9['name'] || 'NPC', _0x4f9528, _0x580c3f - _0x2aadb6 / 0x2 - 0x10);
            _0x295d64['fillText'](_0x2363c9['name'] || 'NPC', _0x4f9528, _0x580c3f - _0x2aadb6 / 0x2 - 0x10);
        }
        if (_0x2bbce8['isDead']) {
            for (const _0x3b7477 in _0x552f54) {
                const _0x520b73 = _0x552f54[_0x3b7477];
                if (!_0x520b73['isDead'])
                    continue;
                const _0xeea833 = (_0x520b73['renderX'] ?? _0x520b73['x']) - _0x247926 + _0x520b73['width'] / 0x2;
                const _0x18e9e2 = (_0x520b73['renderY'] ?? _0x520b73['y']) - _0x46537d + _0x520b73['height'] / 0x2;
                const _0x7bf7e5 = _0x520b73['width'] * (_0x520b73['scale'] || 0x1) * 1.3;
                const _0x57689f = _0x520b73['height'] * (_0x520b73['scale'] || 0x1) * 1.3;
                _0x295d64['save']();
                try {
                    _0x295d64['translate'](_0xeea833, _0x18e9e2);
                    _0x295d64['rotate'](_0x520b73['renderAngle'] ?? 0x0);
                    _0x295d64['globalAlpha'] = 0.3;
                    _0x3da1fb(_0x295d64, _0x520b73['body'], _0x520b73['eyes'], _0x7bf7e5, _0x57689f);
                } finally {
                    _0x295d64['restore']();
                }
                if (!_0x68ed66((_0x520b73['renderX'] ?? _0x520b73['x']) + _0x520b73['width'] / 0x2, (_0x520b73['renderY'] ?? _0x520b73['y']) + _0x520b73['height'] / 0x2)) {
                    _0x295d64['save']();
                    _0x295d64['globalAlpha'] = 0.3;
                    _0x295d64['textAlign'] = 'center';
                    _0x295d64['lineJoin'] = 'round';
                    _0x295d64['lineWidth'] = 0x3;
                    _0x295d64['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x295d64['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x295d64['fillStyle'] = '#ffffff';
                    const _0x2c1d2c = _0x520b73['name'] + (_0x520b73['isOwner'] ? '\x20[🗝️]' : '');
                    _0x295d64['strokeText'](_0x2c1d2c, _0xeea833, _0x18e9e2 - _0x57689f / 0x2 - 0x10);
                    _0x295d64['fillText'](_0x2c1d2c, _0xeea833, _0x18e9e2 - _0x57689f / 0x2 - 0x10);
                    _0x295d64['restore']();
                }
            }
            _0x295d64['save']();
            try {
                _0x295d64['translate'](_0x31f927, _0x47ea92);
                _0x295d64['rotate'](_0x2bbce8['angle']);
                _0x295d64['globalAlpha'] = 0.3;
                _0x3da1fb(_0x295d64, _0x4563ca, _0x178c4a, _0x3ae128, _0x374dd3);
            } finally {
                _0x295d64['restore']();
            }
            if (!_0x68ed66(_0x2bbce8['x'] + _0x2bbce8['width'] / 0x2, _0x2bbce8['y'] + _0x2bbce8['height'] / 0x2)) {
                _0x295d64['save']();
                _0x295d64['globalAlpha'] = 0.3;
                _0x295d64['textAlign'] = 'center';
                _0x295d64['lineJoin'] = 'round';
                _0x295d64['lineWidth'] = 0x3;
                _0x295d64['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x295d64['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x295d64['fillStyle'] = '#ffffff';
                const _0x4f8ad4 = _0x46b054 + (_0x25ec17 ? '\x20[🗝️]' : '');
                _0x295d64['strokeText'](_0x4f8ad4, _0x31f927, _0x47ea92 - _0x374dd3 / 0x2 - 0x10);
                _0x295d64['fillText'](_0x4f8ad4, _0x31f927, _0x47ea92 - _0x374dd3 / 0x2 - 0x10);
                _0x295d64['restore']();
            }
        }
        for (let _0x45ab86 = _0x136c09; _0x45ab86 <= _0x4fc9bb; _0x45ab86++)
            for (let _0x469897 = _0x403a24; _0x469897 <= _0x1e49b5; _0x469897++) {
                const _0x2d9444 = _0x469897 * _0x8e6d5b['MAP']['chunkSize'] - _0x247926;
                const _0x132f96 = _0x45ab86 * _0x8e6d5b['MAP']['chunkSize'] - _0x46537d;
                _0x295d64['drawImage'](_0x8e6d5b['MAP']['fgChunks'][_0x45ab86][_0x469897], _0x2d9444, _0x132f96, _0x8e6d5b['MAP']['chunkSize'] + 0x1, _0x8e6d5b['MAP']['chunkSize'] + 0x1);
            }
        if (_0x8e6d5b['EDITOR']['enabled'] && _0x8e6d5b['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x393739 = _0x8e6d5b['INPUTS']['mouseX'] / _0x8e6d5b['SYSTEM']['viewScale'] + _0x8e6d5b['CAMERA']['x'];
            const _0x522b23 = _0x8e6d5b['INPUTS']['mouseY'] / _0x8e6d5b['SYSTEM']['viewScale'] + _0x8e6d5b['CAMERA']['y'];
            const _0x46b34f = Math['floor'](_0x393739 / _0x8e6d5b['MAP']['tileSize']);
            const _0x8999a0 = Math['floor'](_0x522b23 / _0x8e6d5b['MAP']['tileSize']);
            if (_0x46b34f >= 0x0 && _0x46b34f < _0x8e6d5b['MAP']['columns'] && _0x8999a0 >= 0x0 && _0x8999a0 < _0x8e6d5b['MAP']['rows']) {
                const _0x4a94c8 = _0x46b34f * _0x8e6d5b['MAP']['tileSize'] - _0x247926;
                const _0x490c38 = _0x8999a0 * _0x8e6d5b['MAP']['tileSize'] - _0x46537d;
                _0x295d64['save']();
                _0x295d64['globalAlpha'] = 0.5;
                if (_0x8e6d5b['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x290479 = _0x8e6d5b['EDITOR']['selectedTileGid'] - 0x1;
                    _0x295d64['drawImage'](_0xdad09, _0x290479 % _0x8e6d5b['MAP']['tilesetCols'] * _0x8e6d5b['MAP']['tileSize'], Math['floor'](_0x290479 / _0x8e6d5b['MAP']['tilesetCols']) * _0x8e6d5b['MAP']['tileSize'], _0x8e6d5b['MAP']['tileSize'], _0x8e6d5b['MAP']['tileSize'], _0x4a94c8, _0x490c38, _0x8e6d5b['MAP']['tileSize'], _0x8e6d5b['MAP']['tileSize']);
                } else {
                    _0x295d64['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x295d64['fillRect'](_0x4a94c8, _0x490c38, _0x8e6d5b['MAP']['tileSize'], _0x8e6d5b['MAP']['tileSize']);
                }
                _0x295d64['restore']();
            }
        }
        _0x57941d(_0x295d64, _0x247926, _0x46537d);
        if (_0x4090f1 > 0x0) {
            _0x295d64['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x4090f1 + ')';
            _0x295d64['fillRect'](0x0, 0x0, _0x8e6d5b['CAMERA']['width'], _0x8e6d5b['CAMERA']['height']);
        }
        for (const _0xd7263 in _0x552f54) {
            const _0x4f2b99 = _0x552f54[_0xd7263];
            if (_0x4f2b99['isDead'] && !_0x2bbce8['isDead'])
                continue;
            const _0xd7d44 = (_0x4f2b99['renderX'] ?? _0x4f2b99['x']) - _0x247926 + _0x4f2b99['width'] / 0x2;
            const _0x551fcf = (_0x4f2b99['renderY'] ?? _0x4f2b99['y']) - _0x46537d + _0x4f2b99['height'] / 0x2;
            _0x3f49c9(_0x295d64, _0x4f2b99['chats'], _0xd7d44, _0x551fcf - _0x4f2b99['height'] / 0x2 - 0x20);
        }
        _0x3f49c9(_0x295d64, _0x2bbce8['chats'], _0x31f927, _0x47ea92 - _0x2bbce8['height'] / 0x2 - 0x20);
    } finally {
        _0x295d64['restore']();
    }
}
function _0x5bdcd8(_0x101c7c) {
    if (!_0x8e6d5b['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x5bdcd8);
    let _0x32dc89 = (_0x101c7c - _0x8e6d5b['SYSTEM']['lastTime']) / 0x3e8;
    _0x8e6d5b['SYSTEM']['lastTime'] = _0x101c7c;
    if (_0x32dc89 > 0.1)
        _0x32dc89 = 0.1;
    if (_0x32dc89 < 0x0 || isNaN(_0x32dc89))
        _0x32dc89 = 0.016;
    if (_0x18e0f7) {
        _0xcaae0d(_0x32dc89);
        _0x510e4a();
        return;
    }
    if (!_0x2a480f)
        return;
    _0x270cc6(_0x32dc89);
    _0x333c27['tick'](_0x101c7c);
    _0x510e4a();
}
function _0x454876() {
    const _0x1aaaa0 = Math['ceil'](_0x8e6d5b['MAP']['columns'] * _0x8e6d5b['MAP']['tileSize'] / _0x8e6d5b['MAP']['chunkSize']);
    const _0x47d1f8 = Math['ceil'](_0x8e6d5b['MAP']['rows'] * _0x8e6d5b['MAP']['tileSize'] / _0x8e6d5b['MAP']['chunkSize']);
    _0x8e6d5b['MAP']['bgChunks'] = [];
    _0x8e6d5b['MAP']['fgChunks'] = [];
    _0x8e6d5b['MAP']['wallChunks'] = [];
    for (let _0x38651a = 0x0; _0x38651a < _0x47d1f8; _0x38651a++) {
        _0x8e6d5b['MAP']['bgChunks'][_0x38651a] = [];
        _0x8e6d5b['MAP']['fgChunks'][_0x38651a] = [];
        _0x8e6d5b['MAP']['wallChunks'][_0x38651a] = [];
        for (let _0x1e7ae8 = 0x0; _0x1e7ae8 < _0x1aaaa0; _0x1e7ae8++) {
            const _0x4e284a = document['createElement']('canvas');
            _0x4e284a['width'] = _0x4e284a['height'] = _0x8e6d5b['MAP']['chunkSize'];
            const _0x5cf27a = document['createElement']('canvas');
            _0x5cf27a['width'] = _0x5cf27a['height'] = _0x8e6d5b['MAP']['chunkSize'];
            const _0x30cdab = document['createElement']('canvas');
            _0x30cdab['width'] = _0x30cdab['height'] = _0x8e6d5b['MAP']['chunkSize'];
            _0x8e6d5b['MAP']['bgChunks'][_0x38651a][_0x1e7ae8] = _0x4e284a;
            _0x8e6d5b['MAP']['fgChunks'][_0x38651a][_0x1e7ae8] = _0x5cf27a;
            _0x8e6d5b['MAP']['wallChunks'][_0x38651a][_0x1e7ae8] = _0x30cdab;
            _0x29450f(_0x1e7ae8, _0x38651a);
        }
    }
}
function _0x29450f(_0x42c229, _0x186315) {
    const _0x4d4de8 = _0x8e6d5b['MAP']['bgChunks'][_0x186315][_0x42c229]['getContext']('2d', { 'alpha': !![] });
    const _0x49fe45 = _0x8e6d5b['MAP']['fgChunks'][_0x186315][_0x42c229]['getContext']('2d', { 'alpha': !![] });
    const _0x3babb4 = _0x8e6d5b['MAP']['wallChunks'][_0x186315] && _0x8e6d5b['MAP']['wallChunks'][_0x186315][_0x42c229] ? _0x8e6d5b['MAP']['wallChunks'][_0x186315][_0x42c229]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x4d4de8['imageSmoothingEnabled'] = _0x49fe45['imageSmoothingEnabled'] = ![];
    if (_0x3babb4)
        _0x3babb4['imageSmoothingEnabled'] = ![];
    _0x4d4de8['clearRect'](0x0, 0x0, _0x8e6d5b['MAP']['chunkSize'], _0x8e6d5b['MAP']['chunkSize']);
    _0x49fe45['clearRect'](0x0, 0x0, _0x8e6d5b['MAP']['chunkSize'], _0x8e6d5b['MAP']['chunkSize']);
    if (_0x3babb4)
        _0x3babb4['clearRect'](0x0, 0x0, _0x8e6d5b['MAP']['chunkSize'], _0x8e6d5b['MAP']['chunkSize']);
    const _0x2a7522 = Math['floor'](_0x42c229 * _0x8e6d5b['MAP']['chunkSize'] / _0x8e6d5b['MAP']['tileSize']);
    const _0x4d0125 = Math['ceil']((_0x42c229 + 0x1) * _0x8e6d5b['MAP']['chunkSize'] / _0x8e6d5b['MAP']['tileSize']);
    const _0x2c1918 = Math['floor'](_0x186315 * _0x8e6d5b['MAP']['chunkSize'] / _0x8e6d5b['MAP']['tileSize']);
    const _0x10dcbf = Math['ceil']((_0x186315 + 0x1) * _0x8e6d5b['MAP']['chunkSize'] / _0x8e6d5b['MAP']['tileSize']);
    const _0x5cb63e = 0.5;
    const _0x447591 = _0x8e6d5b['MAP']['tileSize'] - _0x5cb63e * 0x2;
    _0x8e6d5b['MAP']['layers']['forEach'](_0x2d85f6 => {
        const _0x1ad2f2 = _0x2d85f6['name'] === 'walls';
        const _0x439921 = _0x2d85f6['name'] === 'trees' ? _0x49fe45 : _0x1ad2f2 ? _0x3babb4 || _0x4d4de8 : _0x4d4de8;
        for (let _0x3079d5 = Math['max'](0x0, _0x2c1918); _0x3079d5 < Math['min'](_0x8e6d5b['MAP']['rows'], _0x10dcbf); _0x3079d5++) {
            for (let _0x35ac6a = Math['max'](0x0, _0x2a7522); _0x35ac6a < Math['min'](_0x8e6d5b['MAP']['columns'], _0x4d0125); _0x35ac6a++) {
                let _0x4fb9c0 = _0x2d85f6['data'][_0x3079d5 * _0x8e6d5b['MAP']['columns'] + _0x35ac6a];
                if (_0x2d85f6['name'] === 'floor2' && _0x8e6d5b['MAP']['doors'] && _0x8e6d5b['MAP']['doors'][_0x3079d5 * _0x8e6d5b['MAP']['columns'] + _0x35ac6a]) {
                    _0x4fb9c0 = 0x2;
                }
                if (_0x4fb9c0 > 0x0) {
                    const _0xb69c8a = _0x4fb9c0 - 0x1;
                    const _0x1f5e4 = _0xb69c8a % _0x8e6d5b['MAP']['tilesetCols'] * _0x8e6d5b['MAP']['tileSize'] + _0x5cb63e;
                    const _0x5c0a20 = Math['floor'](_0xb69c8a / _0x8e6d5b['MAP']['tilesetCols']) * _0x8e6d5b['MAP']['tileSize'] + _0x5cb63e;
                    const _0x8f5218 = _0x35ac6a * _0x8e6d5b['MAP']['tileSize'] - _0x42c229 * _0x8e6d5b['MAP']['chunkSize'];
                    const _0x812874 = _0x3079d5 * _0x8e6d5b['MAP']['tileSize'] - _0x186315 * _0x8e6d5b['MAP']['chunkSize'];
                    if (_0x4fb9c0 === 0x4) {
                        const _0x2a8213 = 0x1;
                        const _0x29e492 = _0x2a8213 % _0x8e6d5b['MAP']['tilesetCols'] * _0x8e6d5b['MAP']['tileSize'] + _0x5cb63e;
                        const _0x278cb0 = Math['floor'](_0x2a8213 / _0x8e6d5b['MAP']['tilesetCols']) * _0x8e6d5b['MAP']['tileSize'] + _0x5cb63e;
                        _0x4d4de8['drawImage'](_0xdad09, _0x29e492, _0x278cb0, _0x447591, _0x447591, _0x8f5218, _0x812874, _0x8e6d5b['MAP']['tileSize'], _0x8e6d5b['MAP']['tileSize']);
                        let _0x2ecd25 = _0x8e6d5b['MAP']['doors'] ? _0x8e6d5b['MAP']['doors'][_0x3079d5 * _0x8e6d5b['MAP']['columns'] + _0x35ac6a] : null;
                        if (!_0x2ecd25) {
                            const _0x3b97f5 = _0x8e6d5b['MAP']['layers']['find'](_0xf327d7 => _0xf327d7['name'] === 'walls');
                            const _0x10afb7 = _0x3079d5 > 0x0 && _0x3b97f5 && _0x3b97f5['data'][(_0x3079d5 - 0x1) * _0x8e6d5b['MAP']['columns'] + _0x35ac6a] > 0x0;
                            const _0x3648ba = _0x3079d5 < _0x8e6d5b['MAP']['rows'] - 0x1 && _0x3b97f5 && _0x3b97f5['data'][(_0x3079d5 + 0x1) * _0x8e6d5b['MAP']['columns'] + _0x35ac6a] > 0x0;
                            const _0x449b9d = _0x35ac6a > 0x0 && _0x3b97f5 && _0x3b97f5['data'][_0x3079d5 * _0x8e6d5b['MAP']['columns'] + _0x35ac6a - 0x1] > 0x0;
                            const _0x2f3c39 = _0x35ac6a < _0x8e6d5b['MAP']['columns'] - 0x1 && _0x3b97f5 && _0x3b97f5['data'][_0x3079d5 * _0x8e6d5b['MAP']['columns'] + _0x35ac6a + 0x1] > 0x0;
                            if (_0x449b9d && _0x2f3c39)
                                _0x2ecd25 = _0x3079d5 < _0x8e6d5b['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x10afb7 && _0x3648ba)
                                _0x2ecd25 = _0x35ac6a < _0x8e6d5b['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x43364d = 0x0;
                        if (_0x2ecd25 === 'bottom')
                            _0x43364d = Math['PI'] / 0x2;
                        else if (_0x2ecd25 === 'left')
                            _0x43364d = Math['PI'];
                        else if (_0x2ecd25 === 'top')
                            _0x43364d = -Math['PI'] / 0x2;
                        else if (_0x2ecd25 === 'right')
                            _0x43364d = 0x0;
                        if (_0x43364d !== 0x0) {
                            _0x439921['save']();
                            _0x439921['translate'](_0x8f5218 + _0x8e6d5b['MAP']['tileSize'] / 0x2, _0x812874 + _0x8e6d5b['MAP']['tileSize'] / 0x2);
                            _0x439921['rotate'](_0x43364d);
                            _0x439921['drawImage'](_0xdad09, _0x1f5e4, _0x5c0a20, _0x447591, _0x447591, -_0x8e6d5b['MAP']['tileSize'] / 0x2, -_0x8e6d5b['MAP']['tileSize'] / 0x2, _0x8e6d5b['MAP']['tileSize'], _0x8e6d5b['MAP']['tileSize']);
                            _0x439921['restore']();
                        } else {
                            _0x439921['drawImage'](_0xdad09, _0x1f5e4, _0x5c0a20, _0x447591, _0x447591, _0x8f5218, _0x812874, _0x8e6d5b['MAP']['tileSize'], _0x8e6d5b['MAP']['tileSize']);
                        }
                    } else {
                        _0x439921['drawImage'](_0xdad09, _0x1f5e4, _0x5c0a20, _0x447591, _0x447591, _0x8f5218, _0x812874, _0x8e6d5b['MAP']['tileSize'], _0x8e6d5b['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x263a65() {
    _0xdad09['crossOrigin'] = 'Anonymous';
    _0xdad09['onload'] = () => {
        _0x8e6d5b['MAP']['tilesetCols'] = 0x3;
        _0x127e23();
    };
    _0xdad09['onerror'] = () => {
        _0x8e6d5b['MAP']['tilesetCols'] = 0x1;
        _0x127e23();
    };
    _0xdad09['src'] = 'assets/tilesheet.png';
    _0x557277['crossOrigin'] = 'Anonymous';
    _0x557277['onload'] = _0x127e23;
    _0x557277['onerror'] = () => {
        _0x127e23();
    };
    _0x557277['src'] = 'assets/center.png';
    _0x4d5c79['crossOrigin'] = 'Anonymous';
    _0x4d5c79['onload'] = _0x127e23;
    _0x4d5c79['onerror'] = () => {
        _0x127e23();
    };
    _0x4d5c79['src'] = 'assets/table.png';
}
function _0x127e23() {
    _0x8e6d5b['SYSTEM']['assetsLoaded']++;
    if (_0x8e6d5b['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x572153();
    }
}
function _0x388339(_0x58b847, _0x3c3f8b) {
    if (!_0x25ec17 || !_0x539fe9)
        return;
    const _0x56bcea = _0x58b847 / _0x8e6d5b['SYSTEM']['viewScale'] + _0x8e6d5b['CAMERA']['x'];
    const _0x5a3bfd = _0x3c3f8b / _0x8e6d5b['SYSTEM']['viewScale'] + _0x8e6d5b['CAMERA']['y'];
    const _0x3ba7a4 = Math['floor'](_0x56bcea / _0x8e6d5b['MAP']['tileSize']);
    const _0x1ffa07 = Math['floor'](_0x5a3bfd / _0x8e6d5b['MAP']['tileSize']);
    if (_0x3ba7a4 >= 0x0 && _0x3ba7a4 < _0x8e6d5b['MAP']['columns'] && _0x1ffa07 >= 0x0 && _0x1ffa07 < _0x8e6d5b['MAP']['rows'])
        _0x539fe9['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x8e6d5b['EDITOR']['selectedLayer'],
            'col': _0x3ba7a4,
            'row': _0x1ffa07,
            'gid': _0x8e6d5b['EDITOR']['selectedTileGid']
        }));
}
function _0x3d6d45() {
    const _0x605257 = document['getElementById']('palette');
    if (!_0x605257 || _0x605257['children']['length'] > 0x0)
        return;
    const _0x2ad087 = 0x40;
    const _0x3d0404 = _0xdad09;
    const _0x211f4b = document['createElement']('div');
    _0x211f4b['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x341b26 = document['createElement']('canvas');
    _0x341b26['width'] = 0xc0;
    _0x341b26['height'] = 0xa0;
    _0x341b26['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x211f4b['appendChild'](_0x341b26);
    const _0x3df67c = document['createElement']('div');
    _0x3df67c['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x211f4b['appendChild'](_0x3df67c);
    let _0x4afd71 = 0x0, _0x5a866d = 0x0;
    let _0x28f4ec = ![], _0x5da372 = 0x0, _0x44553f = 0x0, _0x1234d9 = 0x0, _0x55a58d = 0x0;
    function _0x19f190() {
        const _0x2dfc0e = _0x341b26['getContext']('2d');
        _0x2dfc0e['clearRect'](0x0, 0x0, _0x341b26['width'], _0x341b26['height']);
        _0x2dfc0e['imageSmoothingEnabled'] = ![];
        if (_0x3d0404['complete'] && _0x3d0404['naturalWidth'] > 0x0) {
            _0x2dfc0e['drawImage'](_0x3d0404, _0x4afd71, _0x5a866d, _0x341b26['width'], _0x341b26['height'], 0x0, 0x0, _0x341b26['width'], _0x341b26['height']);
        }
        _0x2dfc0e['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x2dfc0e['lineWidth'] = 0x1;
        const _0x5e2f8c = Math['floor'](_0x4afd71 / _0x2ad087);
        const _0x2db7c0 = Math['floor'](_0x5a866d / _0x2ad087);
        for (let _0x26cd48 = _0x5e2f8c; _0x26cd48 <= _0x5e2f8c + Math['ceil'](_0x341b26['width'] / _0x2ad087) + 0x1; _0x26cd48++) {
            const _0x59031d = _0x26cd48 * _0x2ad087 - _0x4afd71;
            _0x2dfc0e['beginPath']();
            _0x2dfc0e['moveTo'](_0x59031d, 0x0);
            _0x2dfc0e['lineTo'](_0x59031d, _0x341b26['height']);
            _0x2dfc0e['stroke']();
        }
        for (let _0x50c749 = _0x2db7c0; _0x50c749 <= _0x2db7c0 + Math['ceil'](_0x341b26['height'] / _0x2ad087) + 0x1; _0x50c749++) {
            const _0x3ad99c = _0x50c749 * _0x2ad087 - _0x5a866d;
            _0x2dfc0e['beginPath']();
            _0x2dfc0e['moveTo'](0x0, _0x3ad99c);
            _0x2dfc0e['lineTo'](_0x341b26['width'], _0x3ad99c);
            _0x2dfc0e['stroke']();
        }
    }
    function _0x19dc80() {
        const _0xaf2544 = Math['max'](0x1, Math['ceil'](_0x3d0404['naturalWidth'] / _0x2ad087));
        const _0x353018 = _0x8e6d5b['EDITOR']['selectedTileGid'];
        if (_0x353018 <= 0x0) {
            _0x3df67c['style']['display'] = 'none';
            return;
        }
        const _0x183b66 = _0x353018 - 0x1;
        const _0x3ebbea = _0x183b66 % _0xaf2544;
        const _0x165fb4 = Math['floor'](_0x183b66 / _0xaf2544);
        const _0x5ef611 = _0x3ebbea * _0x2ad087 - _0x4afd71;
        const _0x378fc5 = _0x165fb4 * _0x2ad087 - _0x5a866d;
        _0x3df67c['style']['display'] = 'block';
        _0x3df67c['style']['left'] = _0x5ef611 + 'px';
        _0x3df67c['style']['top'] = _0x378fc5 + 'px';
    }
    _0x3d0404['onload'] = () => {
        _0x19f190();
        _0x19dc80();
    };
    if (_0x3d0404['complete'] && _0x3d0404['naturalWidth'] > 0x0) {
        _0x19f190();
        _0x19dc80();
    }
    _0x211f4b['addEventListener']('mousedown', _0x4bd4d8 => {
        if (_0x4bd4d8['button'] === 0x0) {
            _0x28f4ec = !![];
            _0x5da372 = _0x4bd4d8['clientX'];
            _0x44553f = _0x4bd4d8['clientY'];
            _0x1234d9 = _0x4afd71;
            _0x55a58d = _0x5a866d;
            _0x211f4b['style']['cursor'] = 'grabbing';
            _0x4bd4d8['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x358cf5 => {
        if (!_0x28f4ec)
            return;
        const _0x482559 = _0x5da372 - _0x358cf5['clientX'];
        const _0x20f76d = _0x44553f - _0x358cf5['clientY'];
        const _0x20c6f4 = Math['max'](0x0, _0x3d0404['naturalWidth'] - _0x341b26['width']);
        const _0x386391 = Math['max'](0x0, _0x3d0404['naturalHeight'] - _0x341b26['height']);
        _0x4afd71 = Math['max'](0x0, Math['min'](_0x20c6f4, _0x1234d9 + _0x482559));
        _0x5a866d = Math['max'](0x0, Math['min'](_0x386391, _0x55a58d + _0x20f76d));
        _0x19f190();
        _0x19dc80();
    });
    window['addEventListener']('mouseup', _0x984465 => {
        if (_0x28f4ec) {
            _0x28f4ec = ![];
            _0x211f4b['style']['cursor'] = 'grab';
        }
    });
    _0x211f4b['addEventListener']('click', _0xd36c7a => {
        const _0x56aa38 = _0x211f4b['getBoundingClientRect']();
        const _0x366553 = _0xd36c7a['clientX'] - _0x56aa38['left'] + _0x4afd71;
        const _0x59f022 = _0xd36c7a['clientY'] - _0x56aa38['top'] + _0x5a866d;
        const _0xf4f129 = Math['max'](0x1, Math['ceil'](_0x3d0404['naturalWidth'] / _0x2ad087));
        const _0x36dbd6 = Math['floor'](_0x366553 / _0x2ad087);
        const _0x143d68 = Math['floor'](_0x59f022 / _0x2ad087);
        const _0x5ce1b0 = _0x143d68 * _0xf4f129 + _0x36dbd6 + 0x1;
        _0x8e6d5b['EDITOR']['selectedTileGid'] = _0x5ce1b0;
        _0x19dc80();
    });
    _0x605257['appendChild'](_0x211f4b);
    const _0x10abc0 = document['createElement']('div');
    _0x10abc0['className'] = 'tile-btn\x20eraser-btn';
    _0x10abc0['title'] = 'Eraser\x20(gid\x200)';
    _0x10abc0['onclick'] = () => {
        _0x8e6d5b['EDITOR']['selectedTileGid'] = 0x0;
        _0x3df67c['style']['display'] = 'none';
    };
    _0x605257['appendChild'](_0x10abc0);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x8e6d5b['EDITOR']['enabled'] = !_0x8e6d5b['EDITOR']['enabled'];
        const _0x14f6ea = document['getElementById']('editor-tools');
        if (_0x8e6d5b['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x14f6ea['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x14f6ea['style']['display'] = 'none';
        }
    });
    const _0x4b10ac = document['getElementById']('start-game-btn');
    if (_0x4b10ac) {
        _0x4b10ac['addEventListener']('click', () => {
            if (_0x539fe9)
                _0x539fe9['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x2afcf7 = document['getElementById']('rolelist-toggle-btn');
    if (_0x2afcf7) {
        let _0x33829d = 'subalignments';
        _0x2afcf7['addEventListener']('click', () => {
            if (_0x33829d === 'subalignments')
                _0x33829d = 'precise';
            else if (_0x33829d === 'precise')
                _0x33829d = 'off';
            else
                _0x33829d = 'subalignments';
            _0x2afcf7['innerText'] = 'Role\x20List:\x20' + _0x33829d['charAt'](0x0)['toUpperCase']() + _0x33829d['slice'](0x1);
            if (_0x539fe9)
                _0x539fe9['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x33829d
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x5d9223 => {
        if (_0x5d9223['id'] === 'editor-toggle-btn' || _0x5d9223['id'] === 'start-game-btn' || _0x5d9223['id'] === 'rolelist-toggle-btn')
            return;
        _0x5d9223['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0x26394d => _0x26394d['classList']['remove']('active'));
            _0x5d9223['classList']['add']('active');
            _0x8e6d5b['EDITOR']['selectedLayer'] = _0x5d9223['dataset']['layer'];
        });
    });
}
function _0x4eba27(_0x5ad634) {
    if (_0x539fe9)
        _0x539fe9['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x5ad634
        }));
}
function _0x20635d(_0x1ef1f6) {
    if (_0x539fe9)
        _0x539fe9['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x1ef1f6
        }));
}
function _0x1c4a25(_0x327c69, _0xc529a, _0x5b6c1b, _0x517edd) {
    const _0x561bb0 = document['getElementById']('admin-panel');
    if (_0x561bb0)
        _0x561bb0['remove']();
    if (_0x561bb0 && _0x561bb0['dataset']['target'] === String(_0x327c69))
        return;
    const _0xf61876 = document['createElement']('div');
    _0xf61876['id'] = 'admin-panel';
    _0xf61876['dataset']['target'] = String(_0x327c69);
    _0xf61876['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x494c67 = document['createElement']('div');
    _0x494c67['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x494c67['textContent'] = _0xc529a;
    _0xf61876['appendChild'](_0x494c67);
    const _0x5467d2 = document['createElement']('button');
    _0x5467d2['textContent'] = 'Kick';
    _0x5467d2['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x5467d2['onmouseenter'] = () => _0x5467d2['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x5467d2['onmouseleave'] = () => _0x5467d2['style']['background'] = 'transparent';
    _0x5467d2['onclick'] = () => {
        _0x4eba27(_0x327c69);
        _0xf61876['remove']();
    };
    _0xf61876['appendChild'](_0x5467d2);
    const _0x5da5ae = document['createElement']('button');
    _0x5da5ae['textContent'] = 'Ban';
    _0x5da5ae['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x5da5ae['onmouseenter'] = () => _0x5da5ae['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x5da5ae['onmouseleave'] = () => _0x5da5ae['style']['background'] = 'transparent';
    _0x5da5ae['onclick'] = () => {
        _0x20635d(_0x327c69);
        _0xf61876['remove']();
    };
    _0xf61876['appendChild'](_0x5da5ae);
    document['body']['appendChild'](_0xf61876);
    const _0x5df033 = _0xf61876['offsetWidth'] || 0x91;
    const _0x25466d = _0xf61876['offsetHeight'] || 0x50;
    let _0x375e67 = _0x5b6c1b - _0x5df033;
    let _0x251193 = _0x517edd;
    if (_0x375e67 < 0x4)
        _0x375e67 = _0x5b6c1b;
    if (_0x251193 + _0x25466d > window['innerHeight'] - 0x4)
        _0x251193 = window['innerHeight'] - _0x25466d - 0x4;
    _0xf61876['style']['left'] = _0x375e67 + 'px';
    _0xf61876['style']['top'] = _0x251193 + 'px';
    const _0x1f1b29 = _0x5a63b4 => {
        if (!_0xf61876['contains'](_0x5a63b4['target'])) {
            _0xf61876['remove']();
            document['removeEventListener']('mousedown', _0x1f1b29);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x1f1b29), 0x0);
}
function _0x391a7d() {
    const _0x3d05f0 = document['getElementById']('leaderboard-list');
    _0x3d05f0['innerHTML'] = '';
    const _0x28a7b2 = document['createElement']('div');
    _0x28a7b2['className'] = 'leaderboard-entry';
    const _0x44ab36 = document['createElement']('span');
    _0x44ab36['textContent'] = _0x46b054 + (_0x25ec17 ? '\x20[🗝️]' : '');
    if (_0x33d746['has'](_0x2a480f) && !_0x2bbce8['isDead']) {
        _0x44ab36['style']['color'] = '#cc88ff';
    }
    _0x28a7b2['appendChild'](_0x44ab36);
    _0x3d05f0['appendChild'](_0x28a7b2);
    for (const _0x2887d5 in _0x552f54) {
        const _0x33ba9b = document['createElement']('div');
        _0x33ba9b['className'] = 'leaderboard-entry';
        const _0x5cded0 = document['createElement']('span');
        _0x5cded0['textContent'] = _0x552f54[_0x2887d5]['name'] + (_0x552f54[_0x2887d5]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x33d746['has'](parseInt(_0x2887d5)) && !_0x552f54[_0x2887d5]['isDead']) {
            _0x5cded0['style']['color'] = '#cc88ff';
        }
        _0x33ba9b['appendChild'](_0x5cded0);
        if (_0x25ec17 && !_0x552f54[_0x2887d5]['isOwner']) {
            const _0x2f0606 = _0x552f54[_0x2887d5]['id'];
            const _0x5aed62 = _0x552f54[_0x2887d5]['name'];
            _0x33ba9b['style']['cursor'] = 'context-menu';
            _0x33ba9b['addEventListener']('contextmenu', _0x3b450d => {
                _0x3b450d['preventDefault']();
                _0x3b450d['stopPropagation']();
                _0x1c4a25(_0x2f0606, _0x5aed62, _0x3b450d['clientX'], _0x3b450d['clientY']);
            });
        }
        _0x3d05f0['appendChild'](_0x33ba9b);
    }
}
window['addEventListener']('resize', _0x572153);
function _0x572153() {
    _0x43c9dd['width'] = window['innerWidth'];
    _0x43c9dd['height'] = window['innerHeight'];
    _0x8e6d5b['SYSTEM']['viewScale'] = Math['max'](_0x43c9dd['width'] / _0x419f96, _0x43c9dd['height'] / _0x468333);
    _0x8e6d5b['CAMERA']['width'] = _0x43c9dd['width'] / _0x8e6d5b['SYSTEM']['viewScale'];
    _0x8e6d5b['CAMERA']['height'] = _0x43c9dd['height'] / _0x8e6d5b['SYSTEM']['viewScale'];
    _0x295d64['imageSmoothingEnabled'] = ![];
}
function _0x299586(_0x579dac) {
    if (_0x579dac['ctrlKey'] || _0x579dac['metaKey']) {
        if (_0x579dac['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x579dac['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x579dac['code'])) {
            _0x579dac['preventDefault']();
            _0x579dac['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x299586, { 'passive': ![] });
window['addEventListener']('keydown', _0x299586, { 'passive': ![] });
window['addEventListener']('keydown', _0x31ab99 => {
    const _0x514761 = _0x31ab99['key']['toLowerCase']();
    if (_0x514761 === 'tab') {
        _0x31ab99['preventDefault']();
        const _0x1ce814 = document['getElementById']('will-ui');
        const _0x175191 = document['getElementById']('will-input');
        if (_0x1ce814['style']['display'] === 'flex') {
            _0x1ce814['style']['display'] = 'none';
            if (_0x539fe9)
                _0x539fe9['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x175191['value']
                }));
            _0x175191['blur']();
        } else {
            _0x1ce814['style']['display'] = 'flex';
            _0x175191['focus']();
            for (let _0x58b1e9 in _0x8e6d5b['INPUTS']['keys'])
                _0x8e6d5b['INPUTS']['keys'][_0x58b1e9] = ![];
        }
        return;
    }
    if (_0x31ab99['key'] === 'Enter') {
        if (_0x18e0f7) {
            const _0xfecfa = document['getElementById']('play-btn');
            if (_0xfecfa)
                _0xfecfa['click']();
            return;
        }
        if (!_0x539fe9 || _0x539fe9['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x32e095 = document['getElementById']('chat-ui');
        const _0x53fcd3 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x53fcd3) {
            const _0x83fec4 = _0x53fcd3['value']['trim']();
            if (_0x83fec4['length'] > 0x0) {
                _0x539fe9['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x83fec4
                }));
            }
            _0x53fcd3['value'] = '';
            _0x32e095['style']['display'] = 'none';
            _0x53fcd3['blur']();
        } else {
            _0x32e095['style']['display'] = 'block';
            _0x53fcd3['focus']();
            for (let _0x304111 in _0x8e6d5b['INPUTS']['keys'])
                _0x8e6d5b['INPUTS']['keys'][_0x304111] = ![];
        }
        _0x31ab99['preventDefault']();
        return;
    }
    if (_0x31ab99['key'] === 'Escape') {
        const _0x32c2ac = document['getElementById']('guide-ui');
        if (_0x32c2ac && _0x32c2ac['style']['display'] === 'flex') {
            _0x32c2ac['style']['display'] = 'none';
            return;
        }
        const _0x5880c1 = document['getElementById']('ability-ui');
        if (_0x5880c1 && _0x5880c1['style']['display'] === 'block') {
            _0x5880c1['style']['display'] = 'none';
            return;
        }
        const _0x1c341f = document['getElementById']('settings-panel');
        if (_0x1c341f && _0x1c341f['style']['display'] === 'block') {
            _0x1c341f['style']['display'] = 'none';
            return;
        }
        const _0x5ec850 = document['getElementById']('mayor-confirm-dialog');
        if (_0x5ec850 && _0x5ec850['style']['display'] === 'flex') {
            _0x5ec850['style']['display'] = 'none';
            return;
        }
        const _0x58316e = document['getElementById']('target-chooser-ui');
        if (_0x58316e && _0x58316e['style']['display'] === 'flex') {
            _0x58316e['style']['display'] = 'none';
            return;
        }
        const _0x517e2b = document['getElementById']('chat-ui');
        const _0x40689f = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x40689f) {
            _0x40689f['value'] = '';
            _0x517e2b['style']['display'] = 'none';
            _0x40689f['blur']();
            _0x31ab99['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x8e6d5b['INPUTS']['keys']['hasOwnProperty'](_0x514761))
            _0x8e6d5b['INPUTS']['keys'][_0x514761] = !![];
        if (!_0x539fe9 || _0x539fe9['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x514761 === 'h' && !_0x31ab99['repeat']) {
            const _0x18e52b = document['getElementById']('guide-ui');
            if (_0x18e52b) {
                _0x18e52b['style']['display'] = _0x18e52b['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x514761 === 't' && !_0x31ab99['repeat']) {
            if (_0x2bbce8['isDead'])
                return;
            if (_0x238d05 === 'Mayor') {
                if (_0x33d746['has'](_0x2a480f)) {
                    _0x3678ad('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x194298 = document['getElementById']('mayor-confirm-dialog');
                if (_0x194298)
                    _0x194298['style']['display'] = 'flex';
                return;
            }
            if (_0x8e6d5b['GAME_STATE'] === 'NIGHT') {
                if (!_0x8e6d5b['NIGHT_ABILITY_OPEN']) {
                    _0x3678ad('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x1852fb = document['getElementById']('ability-ui');
                if (_0x1852fb) {
                    if (_0x1852fb['style']['display'] === 'block') {
                        _0x1852fb['style']['display'] = 'none';
                    } else {
                        _0x553aa9();
                        _0x1852fb['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x8e6d5b['GAME_STATE'] === 'DAY_DISCUSS' || _0x8e6d5b['GAME_STATE'] === 'DAY_VOTE') {
                _0x3678ad('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x514761 === 'e' && !_0x2bbce8['isDead']) {
            const _0x4be345 = Date['now']();
            if (!window['_lastDoorSend'] || _0x4be345 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x4be345;
                _0x539fe9['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x3d40dc => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x138d6a = _0x3d40dc['key']['toLowerCase']();
        if (_0x8e6d5b['INPUTS']['keys']['hasOwnProperty'](_0x138d6a))
            _0x8e6d5b['INPUTS']['keys'][_0x138d6a] = ![];
    }
});
window['addEventListener']('mousemove', _0x47d865 => {
    _0x8e6d5b['INPUTS']['mouseX'] = _0x47d865['clientX'];
    _0x8e6d5b['INPUTS']['mouseY'] = _0x47d865['clientY'];
    if (_0x8e6d5b['INPUTS']['isMouseDown'] && _0x8e6d5b['EDITOR']['enabled']) {
        _0x388339(_0x47d865['clientX'], _0x47d865['clientY']);
    }
});
window['addEventListener']('mousedown', _0x5e5e95 => {
    if (_0x5e5e95['target']['closest']('#editor-ui') || _0x5e5e95['target']['closest']('#leaderboard-ui') || _0x5e5e95['target']['closest']('#chat-log-ui') || _0x5e5e95['target']['closest']('#target-chooser-ui') || _0x5e5e95['target']['closest']('#guide-ui') || _0x5e5e95['target']['closest']('#role-list-ui') || _0x5e5e95['target']['closest']('#ability-ui') || _0x5e5e95['target']['closest']('#settings-panel') || _0x5e5e95['target']['closest']('#mayor-confirm-dialog') || _0x5e5e95['target']['closest']('#mobile-action-bar') || _0x5e5e95['target']['closest']('#mobile-top-bar') || _0x5e5e95['target']['closest']('#mobile-joystick-zone') || _0x5e5e95['target']['closest']('#mobile-chat-overlay') || _0x5e5e95['target']['closest']('#will-ui') || _0x5e5e95['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x5e5e95['button'] === 0x0) {
        _0x8e6d5b['INPUTS']['isMouseDown'] = !![];
        if (_0x8e6d5b['EDITOR']['enabled'])
            _0x388339(_0x5e5e95['clientX'], _0x5e5e95['clientY']);
    }
});
window['addEventListener']('mouseup', _0x2556f7 => {
    _0x8e6d5b['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x228694 => {
    if (_0x228694['target']['closest']('#settings-btn'))
        return;
    const _0x3fff9a = document['getElementById']('leaderboard-list');
    const _0x2232fb = document['getElementById']('leaderboard-toggle');
    if (_0x3fff9a['style']['display'] === 'none') {
        _0x3fff9a['style']['display'] = 'flex';
        _0x2232fb['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x3fff9a['style']['display'] = 'none';
        _0x2232fb['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x2923ac = document['getElementById']('close-target-btn');
if (_0x2923ac) {
    _0x2923ac['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0xf82015 = document['getElementById']('close-guide-btn');
if (_0xf82015) {
    _0xf82015['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x2af2a6 = document['getElementById']('role-list-header');
if (_0x2af2a6) {
    _0x2af2a6['addEventListener']('click', () => {
        const _0x3fe312 = document['getElementById']('role-list-items');
        const _0xaa02ff = document['getElementById']('role-list-toggle');
        if (_0x3fe312['style']['display'] === 'none') {
            _0x3fe312['style']['display'] = 'flex';
            _0xaa02ff['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x3fe312['style']['display'] = 'none';
            _0xaa02ff['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x34eee6() {
    const _0x52344e = document['getElementById']('mobile-joystick-zone');
    const _0x2ebf8b = document['getElementById']('mobile-joystick-base');
    const _0x54eb42 = document['getElementById']('mobile-joystick-knob');
    if (_0x52344e && _0x2ebf8b && _0x54eb42) {
        const _0xc67fc2 = 0x3e;
        const _0x4d1095 = (_0x5a65ab, _0x215b9c) => {
            const _0x4fe974 = _0x2ebf8b['getBoundingClientRect']();
            const _0xa3654 = _0x4fe974['left'] + _0x4fe974['width'] / 0x2;
            const _0x4f7835 = _0x4fe974['top'] + _0x4fe974['height'] / 0x2;
            const _0x1df836 = _0x5a65ab - _0xa3654;
            const _0x44fc47 = _0x215b9c - _0x4f7835;
            const _0x43fe4e = Math['hypot'](_0x1df836, _0x44fc47);
            if (_0x43fe4e === 0x0) {
                _0x1eea18 = 0x0;
                _0x31d5b0 = 0x0;
                _0x1f9412 = ![];
                _0x54eb42['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x491fce = Math['min'](_0x43fe4e, _0xc67fc2);
            const _0x30c166 = _0x1df836 / _0x43fe4e * _0x491fce;
            const _0x2567f0 = _0x44fc47 / _0x43fe4e * _0x491fce;
            _0x1eea18 = _0x30c166 / _0xc67fc2;
            _0x31d5b0 = _0x2567f0 / _0xc67fc2;
            _0x1f9412 = _0x43fe4e >= _0xc67fc2 * 0.75;
            _0x54eb42['style']['transform'] = 'translate(' + _0x30c166 + 'px,\x20' + _0x2567f0 + 'px)';
        };
        const _0x3ab5ff = _0x42959c => {
            for (let _0x1ae56f = 0x0; _0x1ae56f < _0x42959c['changedTouches']['length']; _0x1ae56f++) {
                const _0x1ea10f = _0x42959c['changedTouches'][_0x1ae56f];
                if (_0x333cb7 === null) {
                    _0x333cb7 = _0x1ea10f['identifier'];
                    _0x3973c7 = !![];
                    _0x4d1095(_0x1ea10f['clientX'], _0x1ea10f['clientY']);
                    break;
                }
            }
        };
        const _0x2dd46a = _0x4e62af => {
            for (let _0x223d08 = 0x0; _0x223d08 < _0x4e62af['changedTouches']['length']; _0x223d08++) {
                const _0x571080 = _0x4e62af['changedTouches'][_0x223d08];
                if (_0x571080['identifier'] === _0x333cb7) {
                    _0x4d1095(_0x571080['clientX'], _0x571080['clientY']);
                    break;
                }
            }
        };
        const _0x4be598 = _0x11caf6 => {
            for (let _0x18535a = 0x0; _0x18535a < _0x11caf6['changedTouches']['length']; _0x18535a++) {
                const _0x39c19c = _0x11caf6['changedTouches'][_0x18535a];
                if (_0x39c19c['identifier'] === _0x333cb7) {
                    _0x333cb7 = null;
                    _0x3973c7 = ![];
                    _0x1eea18 = 0x0;
                    _0x31d5b0 = 0x0;
                    _0x1f9412 = ![];
                    _0x54eb42['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x52344e['addEventListener']('touchstart', _0x2cdaa4 => {
            _0x2cdaa4['preventDefault']();
            _0x3ab5ff(_0x2cdaa4);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x2dd46a, { 'passive': !![] });
        window['addEventListener']('touchend', _0x4be598, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x4be598, { 'passive': !![] });
    }
    const _0x3c9bdb = (_0x5cb68e, _0x17a7fd) => {
        const _0x3c477a = _0x5cb68e / _0x8e6d5b['SYSTEM']['viewScale'];
        const _0x447b14 = _0x17a7fd / _0x8e6d5b['SYSTEM']['viewScale'];
        const _0x5c493e = _0x2bbce8['x'] - _0x8e6d5b['CAMERA']['x'] + _0x2bbce8['width'] / 0x2;
        const _0x531778 = _0x2bbce8['y'] - _0x8e6d5b['CAMERA']['y'] + _0x2bbce8['height'] / 0x2;
        _0x128499 = Math['atan2'](_0x447b14 - _0x531778, _0x3c477a - _0x5c493e);
        _0x5d2df9 = !![];
        _0x8e6d5b['INPUTS']['mouseX'] = _0x5cb68e;
        _0x8e6d5b['INPUTS']['mouseY'] = _0x17a7fd;
    };
    _0x43c9dd['addEventListener']('touchstart', _0x411988 => {
        if (_0x18e0f7)
            return;
        for (let _0x67c876 = 0x0; _0x67c876 < _0x411988['changedTouches']['length']; _0x67c876++) {
            const _0x5b5004 = _0x411988['changedTouches'][_0x67c876];
            if (_0x5b5004['identifier'] !== _0x333cb7 && _0x351bb6 === null) {
                _0x351bb6 = _0x5b5004['identifier'];
                _0x3c9bdb(_0x5b5004['clientX'], _0x5b5004['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x43c9dd['addEventListener']('touchmove', _0x3dd756 => {
        if (_0x18e0f7)
            return;
        for (let _0x518c1e = 0x0; _0x518c1e < _0x3dd756['changedTouches']['length']; _0x518c1e++) {
            const _0x33dca3 = _0x3dd756['changedTouches'][_0x518c1e];
            if (_0x33dca3['identifier'] === _0x351bb6) {
                _0x3c9bdb(_0x33dca3['clientX'], _0x33dca3['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x3a467f = _0x11f253 => {
        for (let _0x4ff626 = 0x0; _0x4ff626 < _0x11f253['changedTouches']['length']; _0x4ff626++) {
            const _0x4e4b4c = _0x11f253['changedTouches'][_0x4ff626];
            if (_0x4e4b4c['identifier'] === _0x351bb6) {
                _0x351bb6 = null;
                _0x5d2df9 = ![];
                break;
            }
        }
    };
    _0x43c9dd['addEventListener']('touchend', _0x3a467f, { 'passive': !![] });
    _0x43c9dd['addEventListener']('touchcancel', _0x3a467f, { 'passive': !![] });
    const _0x349eed = document['getElementById']('mob-sprint-btn');
    if (_0x349eed) {
        _0x349eed['addEventListener']('click', _0x45a116 => {
            _0x45a116['stopPropagation']();
            _0x107215 = !_0x107215;
            _0x349eed['classList']['toggle']('active', _0x107215);
        });
    }
    const _0x45d03f = document['getElementById']('mob-interact-btn');
    if (_0x45d03f) {
        _0x45d03f['addEventListener']('click', _0x4e312d => {
            _0x4e312d['stopPropagation']();
            if (!_0x2bbce8['isDead']) {
                const _0x501e7d = Date['now']();
                if (!window['_lastDoorSend'] || _0x501e7d - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x501e7d;
                    if (_0x539fe9 && _0x539fe9['readyState'] === WebSocket['OPEN'])
                        _0x539fe9['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x31a71b = document['getElementById']('mob-ability-btn');
    if (_0x31a71b) {
        _0x31a71b['addEventListener']('click', _0x2e2dc4 => {
            _0x2e2dc4['stopPropagation']();
            if (_0x2bbce8['isDead'])
                return;
            if (_0x238d05 === 'Mayor') {
                if (_0x33d746['has'](_0x2a480f)) {
                    _0x3678ad('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x52b903 = document['getElementById']('mayor-confirm-dialog');
                if (_0x52b903)
                    _0x52b903['style']['display'] = 'flex';
                return;
            }
            if (_0x8e6d5b['GAME_STATE'] === 'NIGHT') {
                if (!_0x8e6d5b['NIGHT_ABILITY_OPEN']) {
                    _0x3678ad('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x100ad0 = document['getElementById']('ability-ui');
                if (_0x100ad0) {
                    if (_0x100ad0['style']['display'] === 'block') {
                        _0x100ad0['style']['display'] = 'none';
                    } else {
                        _0x553aa9();
                        _0x100ad0['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x8e6d5b['GAME_STATE'] === 'DAY_DISCUSS' || _0x8e6d5b['GAME_STATE'] === 'DAY_VOTE') {
                _0x3678ad('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x31e278 = document['getElementById']('mob-will-btn');
    const _0x4fbb4b = document['getElementById']('will-ui');
    const _0x1d0c69 = document['getElementById']('will-input');
    const _0x5db7c4 = document['getElementById']('close-will-btn');
    const _0x80c5af = () => {
        if (!_0x4fbb4b)
            return;
        if (_0x4fbb4b['style']['display'] === 'flex') {
            _0x4fbb4b['style']['display'] = 'none';
            if (_0x539fe9 && _0x539fe9['readyState'] === WebSocket['OPEN'] && _0x1d0c69) {
                _0x539fe9['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x1d0c69['value']
                }));
            }
            if (_0x1d0c69)
                _0x1d0c69['blur']();
        } else {
            _0x4fbb4b['style']['display'] = 'flex';
            if (_0x1d0c69)
                _0x1d0c69['focus']();
        }
    };
    if (_0x31e278)
        _0x31e278['addEventListener']('click', _0x44c423 => {
            _0x44c423['stopPropagation']();
            _0x80c5af();
        });
    if (_0x5db7c4)
        _0x5db7c4['addEventListener']('click', _0x3a0d19 => {
            _0x3a0d19['stopPropagation']();
            _0x80c5af();
        });
    const _0x5eedbe = document['getElementById']('mob-chat-btn');
    const _0x518d20 = document['getElementById']('mobile-chat-overlay');
    const _0x1c8205 = document['getElementById']('mobile-chat-input');
    const _0x3c6cb2 = document['getElementById']('mobile-chat-send');
    const _0x5f25bc = document['getElementById']('mobile-chat-cancel');
    const _0x3374b7 = () => {
        if (!_0x518d20 || !_0x1c8205)
            return;
        _0x518d20['style']['display'] = 'flex';
        _0x1c8205['value'] = '';
        _0x1c8205['focus']();
    };
    const _0x39aa9f = () => {
        if (!_0x518d20 || !_0x1c8205)
            return;
        _0x518d20['style']['display'] = 'none';
        _0x1c8205['blur']();
    };
    const _0x185b7b = () => {
        if (!_0x1c8205)
            return;
        const _0x41f225 = _0x1c8205['value']['trim']();
        if (_0x41f225['length'] > 0x0 && _0x539fe9 && _0x539fe9['readyState'] === WebSocket['OPEN']) {
            _0x539fe9['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x41f225
            }));
        }
        _0x1c8205['value'] = '';
        _0x39aa9f();
    };
    if (_0x5eedbe)
        _0x5eedbe['addEventListener']('click', _0x179b88 => {
            _0x179b88['stopPropagation']();
            _0x3374b7();
        });
    if (_0x3c6cb2)
        _0x3c6cb2['addEventListener']('click', _0x329d3f => {
            _0x329d3f['stopPropagation']();
            _0x185b7b();
        });
    if (_0x5f25bc)
        _0x5f25bc['addEventListener']('click', _0x2474ad => {
            _0x2474ad['stopPropagation']();
            _0x39aa9f();
        });
    if (_0x1c8205) {
        _0x1c8205['addEventListener']('keydown', _0x562ea1 => {
            if (_0x562ea1['key'] === 'Enter') {
                _0x562ea1['preventDefault']();
                _0x185b7b();
            } else if (_0x562ea1['key'] === 'Escape') {
                _0x39aa9f();
            }
        });
    }
    const _0x3fbbdc = document['getElementById']('mob-top-chat');
    if (_0x3fbbdc)
        _0x3fbbdc['addEventListener']('click', _0x55b67e => {
            _0x55b67e['stopPropagation']();
            _0x3374b7();
        });
    const _0x297343 = document['getElementById']('mob-top-will');
    if (_0x297343)
        _0x297343['addEventListener']('click', _0x5cd7a5 => {
            _0x5cd7a5['stopPropagation']();
            _0x80c5af();
        });
    const _0x5682e1 = document['getElementById']('mob-top-roles');
    if (_0x5682e1) {
        _0x5682e1['addEventListener']('click', _0x7fcd42 => {
            _0x7fcd42['stopPropagation']();
            const _0x285ba9 = document['getElementById']('role-list-ui');
            const _0x50f3e3 = document['getElementById']('leaderboard-ui');
            if (_0x50f3e3)
                _0x50f3e3['style']['display'] = 'none';
            if (_0x285ba9)
                _0x285ba9['style']['display'] = _0x285ba9['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x5e7bfc = document['getElementById']('mob-top-players');
    if (_0x5e7bfc) {
        _0x5e7bfc['addEventListener']('click', _0x1c0175 => {
            _0x1c0175['stopPropagation']();
            const _0x43c5f0 = document['getElementById']('leaderboard-ui');
            const _0x2f1680 = document['getElementById']('role-list-ui');
            if (_0x2f1680)
                _0x2f1680['style']['display'] = 'none';
            if (_0x43c5f0)
                _0x43c5f0['style']['display'] = _0x43c5f0['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x213ba7 = document['getElementById']('mob-top-help');
    if (_0x213ba7) {
        _0x213ba7['addEventListener']('click', _0x4feba4 => {
            _0x4feba4['stopPropagation']();
            const _0x4a21a9 = document['getElementById']('guide-ui');
            if (_0x4a21a9)
                _0x4a21a9['style']['display'] = _0x4a21a9['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x548551) {
            _0x548551 = !![];
            _0xaff857();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
