document['addEventListener']('contextmenu', _0x24660e => _0x24660e['preventDefault']());
const _0x1786c3 = {
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
let _0x4fb1f5 = '';
function _0x29d8d0(_0x22ea8c, _0xb5fcc3) {
    const _0x361b72 = document['getElementById']('role-list-ui');
    const _0x53eb8c = document['getElementById']('role-list-items');
    if (!_0x361b72 || !_0x53eb8c)
        return;
    if (!_0xb5fcc3 || _0xb5fcc3 === 'off' || !_0x22ea8c || _0x22ea8c['length'] === 0x0) {
        _0x361b72['style']['display'] = 'none';
        return;
    }
    const _0x588621 = _0xb5fcc3 + '|' + JSON['stringify'](_0x22ea8c);
    if (_0x588621 === _0x4fb1f5)
        return;
    _0x4fb1f5 = _0x588621;
    const _0xca010b = document['getElementById']('role-tooltip');
    if (_0xca010b) {
        _0xca010b['style']['visibility'] = 'hidden';
        _0xca010b['style']['opacity'] = '0';
    }
    _0x361b72['style']['display'] = 'flex';
    _0x53eb8c['innerHTML'] = '';
    _0x22ea8c['forEach'](_0x4e238f => {
        const _0x45c72f = document['createElement']('div');
        _0x45c72f['className'] = 'role-list-entry';
        const _0x42c473 = _0x4e238f['name']['includes']('Mafia') || _0x4e238f['name'] === 'Skinwalker';
        _0x45c72f['classList']['add'](_0x42c473 ? 'mafia' : 'town');
        if (_0xb5fcc3 === 'precise' && _0x4e238f['isDead']) {
            _0x45c72f['classList']['remove']('town', 'mafia');
            _0x45c72f['classList']['add']('dead');
            _0x45c72f['innerHTML'] = '<span>' + _0x4e238f['name'] + '\x20<span\x20style=\x22font-size:11px;opacity:0.8;\x22>[DEAD]</span></span>';
        } else {
            const _0x2f30af = _0x4e238f['count'] !== undefined && _0x4e238f['count'] !== null ? _0x4e238f['count'] + 'x\x20' : '';
            _0x45c72f['innerHTML'] = '<span>' + _0x2f30af + _0x4e238f['name'] + '</span>';
        }
        if (_0xb5fcc3 === 'subalignments' && _0x1786c3[_0x4e238f['name']]) {
            _0x45c72f['style']['cursor'] = 'pointer';
            _0x45c72f['addEventListener']('mouseenter', () => {
                const _0x5e86f7 = document['getElementById']('role-tooltip');
                if (!_0x5e86f7)
                    return;
                const _0x54b394 = _0x1786c3[_0x4e238f['name']]['join'](',\x20');
                _0x5e86f7['innerHTML'] = '';
                const _0x4d6ad0 = document['createElement']('span');
                _0x4d6ad0['style']['color'] = '#ffcc00';
                _0x4d6ad0['textContent'] = _0x4e238f['name'];
                _0x5e86f7['appendChild'](_0x4d6ad0);
                _0x5e86f7['appendChild'](document['createElement']('br'));
                _0x5e86f7['appendChild'](document['createTextNode']('Possible\x20Roles:\x20' + _0x54b394));
                const _0x56ab27 = _0x45c72f['getBoundingClientRect']();
                _0x5e86f7['style']['left'] = _0x56ab27['left'] - 0xeb + 'px';
                _0x5e86f7['style']['top'] = _0x56ab27['top'] + 'px';
                _0x5e86f7['style']['display'] = 'block';
                _0x5e86f7['style']['visibility'] = 'visible';
                _0x5e86f7['style']['opacity'] = '1';
            });
            _0x45c72f['addEventListener']('mouseleave', () => {
                const _0x2ab723 = document['getElementById']('role-tooltip');
                if (_0x2ab723) {
                    _0x2ab723['style']['display'] = 'none';
                    _0x2ab723['style']['visibility'] = 'hidden';
                    _0x2ab723['style']['opacity'] = '0';
                }
            });
        }
        _0x53eb8c['appendChild'](_0x45c72f);
    });
}
let _0x2aa407 = null;
let _0x19a416 = null;
const _0x40f1bd = new URLSearchParams(window['location']['search'])['get']('token') || '';
let _0x2b38d1 = 'Player???';
let _0x5dc788 = ![];
let _0x4666d8 = {};
let _0x3de780 = null;
let _0x5506f1 = 0x0;
let _0x1b59f8 = 0x0;
let _0x4adb1c = new Set();
let _0x301f39 = ![];
let _0x347dee = localStorage['getItem']('mouseRelativeMovement') === 'true';
let _0x3966dd = 'ontouchstart' in window || navigator['maxTouchPoints'] > 0x0 || window['matchMedia'] && window['matchMedia']('(pointer:\x20coarse)')['matches'];
let _0x3ca2e5 = ![];
let _0x122c80 = null;
let _0x106db7 = 0x0;
let _0x198710 = 0x0;
let _0x3c4448 = ![];
let _0x2d5709 = ![];
let _0xc812ec = 0x0;
let _0x1de213 = null;
let _0x3231d2 = ![];
const _0x254bd7 = ((() => {
    const _0x5681b3 = {
        'discussion': 'audio/Mafia\x20Mystery\x201\x20Discussion.mp3',
        'voting': 'audio/Mafia\x20Mystery\x201\x20Voting.mp3',
        'wait': 'audio/Mafia\x20Mystery\x201\x20Wait.mp3',
        'execution': 'audio/Mafia\x20Mystery\x201\x20Execution.mp3',
        'calm_night': 'audio/Mafia\x20Mystery\x202\x20Calm\x20Night.mp3',
        'unwelcomed_visitor': 'audio/Mafia\x20Mystery\x202\x20Unwelcomed\x20Visitor.mp3'
    };
    let _0x27907f = parseFloat(localStorage['getItem']('musicVolume') ?? '0.7');
    const _0x50be28 = 0x320;
    const _0x1bf4cc = {};
    const _0xfc788 = {};
    let _0x14cb07 = null;
    let _0xb2028a = _0x27907f === 0x0;
    let _0x143e93 = ![];
    for (const [_0x5ae5d5, _0x111d12] of Object['entries'](_0x5681b3)) {
        const _0x1a53ad = new Audio(_0x111d12);
        _0x1a53ad['loop'] = !![];
        _0x1a53ad['volume'] = 0x0;
        _0x1a53ad['preload'] = 'auto';
        _0x1bf4cc[_0x5ae5d5] = _0x1a53ad;
        _0xfc788[_0x5ae5d5] = null;
    }
    const _0x3db720 = _0x29e2e6 => Math['min'](0x1, Math['max'](0x0, _0x29e2e6));
    function _0x15e3bf(_0x16cbe1) {
        if (_0xfc788[_0x16cbe1] !== null) {
            cancelAnimationFrame(_0xfc788[_0x16cbe1]);
            _0xfc788[_0x16cbe1] = null;
        }
    }
    function _0x125313(_0x26110a, _0x4da006, _0xcf81cd, _0x312b02, _0x36a43b) {
        _0x15e3bf(_0x26110a);
        const _0x3b86c6 = _0x1bf4cc[_0x26110a];
        const _0x2c8425 = performance['now']();
        const _0x10be1a = _0x3ff5c5 => {
            const _0x542935 = _0x3db720((_0x3ff5c5 - _0x2c8425) / _0x312b02);
            const _0x380f55 = _0x3db720(_0x4da006 + (_0xcf81cd - _0x4da006) * _0x542935);
            _0x3b86c6['volume'] = _0xb2028a ? 0x0 : _0x380f55;
            if (_0x542935 < 0x1) {
                _0xfc788[_0x26110a] = requestAnimationFrame(_0x10be1a);
            } else {
                _0xfc788[_0x26110a] = null;
                _0x3b86c6['volume'] = _0xb2028a ? 0x0 : _0x3db720(_0xcf81cd);
                if (_0x36a43b)
                    _0x36a43b();
            }
        };
        _0xfc788[_0x26110a] = requestAnimationFrame(_0x10be1a);
    }
    function _0x173e5d(_0x242b5d) {
        const _0x667bed = _0x242b5d['play']();
        if (_0x667bed && _0x667bed['catch']) {
            _0x667bed['catch'](() => {
                if (!_0x143e93) {
                    const _0x14812f = () => {
                        _0x143e93 = !![];
                        _0x242b5d['play']()['catch'](() => {
                        });
                        document['removeEventListener']('click', _0x14812f);
                        document['removeEventListener']('keydown', _0x14812f);
                        document['removeEventListener']('touchstart', _0x14812f);
                    };
                    document['addEventListener']('click', _0x14812f, { 'once': !![] });
                    document['addEventListener']('keydown', _0x14812f, { 'once': !![] });
                    document['addEventListener']('touchstart', _0x14812f, { 'once': !![] });
                }
            });
        }
    }
    function _0x270cf7(_0x39d5bd) {
        if (!_0x5681b3[_0x39d5bd])
            return;
        if (_0x14cb07 === _0x39d5bd)
            return;
        const _0x1ae5a6 = _0x14cb07;
        _0x14cb07 = _0x39d5bd;
        const _0x376c72 = _0x1bf4cc[_0x39d5bd];
        _0x15e3bf(_0x39d5bd);
        _0x376c72['currentTime'] = 0x0;
        _0x376c72['volume'] = 0x0;
        _0x173e5d(_0x376c72);
        _0x125313(_0x39d5bd, 0x0, _0x27907f, _0x50be28);
        if (_0x1ae5a6 && _0x1bf4cc[_0x1ae5a6]) {
            const _0x3bbfc9 = _0x1ae5a6;
            const _0x4c12b0 = _0x1bf4cc[_0x3bbfc9];
            const _0x2f7ae0 = _0x3db720(_0x4c12b0['volume']);
            _0x125313(_0x3bbfc9, _0x2f7ae0, 0x0, _0x50be28, () => {
                _0x4c12b0['pause']();
                _0x4c12b0['currentTime'] = 0x0;
            });
        }
    }
    function _0x1989d1(_0xc52db) {
        _0x27907f = _0x3db720(_0xc52db);
        localStorage['setItem']('musicVolume', String(_0x27907f));
        if (!_0xb2028a && _0x14cb07 && _0xfc788[_0x14cb07] === null) {
            _0x1bf4cc[_0x14cb07]['volume'] = _0x27907f;
        }
    }
    function _0x1f21d7() {
        return _0x27907f;
    }
    function _0x338f0d(_0x1134c6) {
        _0xb2028a = _0x1134c6;
        for (const _0x155bf8 of Object['keys'](_0x1bf4cc)) {
            if (_0xfc788[_0x155bf8] === null) {
                _0x1bf4cc[_0x155bf8]['volume'] = _0x1134c6 || _0x155bf8 !== _0x14cb07 ? 0x0 : _0x27907f;
            }
        }
    }
    function _0x3ef45() {
        return _0xb2028a;
    }
    function _0x13254f(_0x4235b6) {
        if (_0x4235b6 === 'DAY_DISCUSS')
            return 'discussion';
        if (_0x4235b6 === 'DAY_VOTE')
            return 'voting';
        if (_0x4235b6 === 'NIGHT')
            return 'calm_night';
        return 'wait';
    }
    function _0x59b892(_0x11000b) {
        _0x270cf7(_0x13254f(_0x11000b));
    }
    function _0x2a7cc9(_0xa1abff) {
        _0x270cf7(_0xa1abff);
    }
    return {
        'play': _0x270cf7,
        'onStateChange': _0x59b892,
        'onSoundEvent': _0x2a7cc9,
        'setVolume': _0x1989d1,
        'getVolume': _0x1f21d7,
        'setMuted': _0x338f0d,
        'isMuted': _0x3ef45
    };
})());
const _0x172a7b = ((() => {
    const _0x52c1b7 = 0x258;
    const _0x24fe71 = 0xb4;
    const _0xe9afa = 0x708;
    const _0xe715cb = 0x140;
    const _0x22f9c5 = 0.18;
    const _0x44fdd7 = 0.95;
    const _0x328b85 = new Audio('audio/heartbeat.mp3');
    _0x328b85['loop'] = ![];
    _0x328b85['preload'] = 'auto';
    _0x328b85['volume'] = 0x0;
    let _0x3d10ef = 0x0;
    let _0x4524e2 = Infinity;
    function _0x4b8327(_0x46e958, _0x1103a7, _0x206481) {
        return Math['min'](_0x206481, Math['max'](_0x1103a7, _0x46e958));
    }
    function _0x1a9c66(_0x196ac7, _0x2f3ceb, _0x269edf) {
        return _0x196ac7 + (_0x2f3ceb - _0x196ac7) * _0x269edf;
    }
    function _0x410066(_0xf59b02) {
        if (_0x2b372f['GAME_STATE'] !== 'NIGHT' || _0x3c368c['isDead'] || _0x3de780 === 'Skinwalker') {
            _0x4524e2 = Infinity;
            return;
        }
        const _0x2d56ff = _0x3c368c['x'] + 22.5;
        const _0x5ae415 = _0x3c368c['y'] + 22.5;
        let _0x4484fd = Infinity;
        for (const _0x5de171 in _0x4666d8) {
            const _0x3c22cf = _0x4666d8[_0x5de171];
            if (!_0x3c22cf['isDark'] || _0x3c22cf['isDead'])
                continue;
            const _0x31c71f = _0x3c22cf['renderX'] + 22.5 - _0x2d56ff;
            const _0x262d21 = _0x3c22cf['renderY'] + 22.5 - _0x5ae415;
            const _0x36fcbb = Math['sqrt'](_0x31c71f * _0x31c71f + _0x262d21 * _0x262d21);
            if (_0x36fcbb < _0x4484fd)
                _0x4484fd = _0x36fcbb;
        }
        _0x4524e2 = _0x4484fd;
        if (_0x4484fd > _0x52c1b7)
            return;
        const _0x3082a2 = 0x1 - _0x4b8327((_0x4484fd - _0x24fe71) / (_0x52c1b7 - _0x24fe71), 0x0, 0x1);
        const _0x3d47fe = _0x1a9c66(_0xe9afa, _0xe715cb, _0x3082a2);
        const _0x3958d8 = _0x1a9c66(_0x22f9c5, _0x44fdd7, _0x3082a2);
        if (_0xf59b02 >= _0x3d10ef) {
            _0x328b85['currentTime'] = 0x0;
            _0x328b85['volume'] = _0x254bd7['isMuted']() ? 0x0 : _0x4b8327(_0x3958d8 * _0x254bd7['getVolume']() / 0.7, 0x0, 0x1);
            _0x328b85['play']()['catch'](() => {
            });
            _0x3d10ef = _0xf59b02 + _0x3d47fe;
        }
    }
    return { 'tick': _0x410066 };
})());
function _0x2910c1() {
    const _0x476b1c = document['getElementById']('mob-ability-btn');
    if (!_0x476b1c)
        return;
    const _0xbf0dd2 = _0x2b372f['GAME_STATE'] === 'NIGHT' && !_0x3c368c['isDead'];
    const _0x304aa4 = _0x3de780 === 'Mayor' && !_0x4adb1c['has'](_0x19a416) && !_0x3c368c['isDead'];
    if (_0xbf0dd2 || _0x304aa4) {
        _0x476b1c['style']['display'] = 'flex';
    } else {
        _0x476b1c['style']['display'] = 'none';
    }
}
function _0x37d0da() {
    const _0x3ada6b = document['getElementById']('mobile-joystick-zone');
    const _0x53534f = document['getElementById']('mobile-top-bar');
    const _0x87513c = document['getElementById']('mobile-action-bar');
    if (!_0x3ada6b || !_0x53534f || !_0x87513c)
        return;
    if (!_0x2b2897 && _0x3966dd) {
        _0x3ada6b['style']['display'] = 'flex';
        _0x53534f['style']['display'] = 'flex';
        _0x87513c['style']['display'] = 'flex';
        _0x2910c1();
    } else {
        _0x3ada6b['style']['display'] = 'none';
        _0x53534f['style']['display'] = 'none';
        _0x87513c['style']['display'] = 'none';
    }
}
const _0x1a197e = document['getElementById']('gameCanvas');
const _0x140a93 = _0x1a197e['getContext']('2d', { 'alpha': ![] });
const _0x1d31f4 = 0x500;
const _0xe76201 = 0x2d0;
const _0x2b372f = {
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
        'width': _0x1d31f4,
        'height': _0xe76201
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
const _0x3c368c = {
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
const _0x2c95a5 = new Image();
const _0x45c0d7 = new Image();
const _0x315324 = new Image();
const _0x35865e = new Image();
_0x35865e['src'] = 'assets/mayor\x20cosmetic.png';
const _0x3123e3 = [
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
const _0x55ed29 = [
    'eyes0.png',
    'eyes1.png',
    'eyes2.png',
    'eyes3.png',
    'eyes4.png',
    'eyes5.png',
    'eyes6.png'
];
let _0x3a32b7 = localStorage['getItem']('selectedBody') || 'body01.png';
if (_0x3a32b7 === 'body1.png' || _0x3a32b7 === 'body1')
    _0x3a32b7 = 'body01.png';
if (!_0x3a32b7['endsWith']('.png'))
    _0x3a32b7 += '.png';
let _0x5294d8 = localStorage['getItem']('selectedEyes') || 'eyes4.png';
if (!_0x5294d8['endsWith']('.png'))
    _0x5294d8 += '.png';
let _0x2b2897 = !![];
let _0x69c3c4 = null;
let _0x39ae06 = null;
let _0x1adbd5 = 0x3c;
let _0x838268 = 0x2d;
const _0x30fa33 = {};
const _0x53397f = new Image();
_0x53397f['src'] = 'assets/yanito932.png';
_0x30fa33['assets/yanito932.png'] = _0x53397f;
function _0x45a05e(_0x214d6d) {
    if (!_0x30fa33[_0x214d6d] || !_0x30fa33[_0x214d6d]['complete'] && _0x30fa33[_0x214d6d]['naturalWidth'] === 0x0 && _0x30fa33[_0x214d6d]['naturalHeight'] === 0x0) {
        const _0x24a241 = new Image();
        _0x24a241['src'] = _0x214d6d;
        _0x30fa33[_0x214d6d] = _0x24a241;
    }
    return _0x30fa33[_0x214d6d];
}
function _0x4174d3(_0x2ff479, _0x808b09, _0x306a73, _0x2cfbae, _0x5b40c9) {
    try {
        const _0x1ab3d8 = 'assets/' + (_0x808b09 || 'body01.png');
        const _0x3ab94b = _0x45a05e(_0x1ab3d8);
        if (_0x3ab94b['complete'] && _0x3ab94b['naturalWidth'] > 0x0) {
            _0x2ff479['drawImage'](_0x3ab94b, -_0x2cfbae / 0x2, -_0x5b40c9 / 0x2, _0x2cfbae, _0x5b40c9);
        }
        if (_0x306a73 === null || _0x306a73 === undefined)
            return;
        const _0x12abcf = 'assets/' + _0x306a73;
        const _0x38fd46 = _0x45a05e(_0x12abcf);
        if (_0x38fd46['complete'] && _0x38fd46['naturalWidth'] > 0x0) {
            _0x2ff479['drawImage'](_0x38fd46, -_0x2cfbae / 0x2, -_0x5b40c9 / 0x2, _0x2cfbae, _0x5b40c9);
        }
    } catch (_0x2856eb) {
    }
}
function _0xbddc9f() {
    const _0x2c1845 = document['getElementById']('body-skin-grid');
    const _0x1318b8 = document['getElementById']('eyes-skin-grid');
    if (!_0x2c1845 || !_0x1318b8)
        return;
    _0x2c1845['innerHTML'] = '';
    _0x3123e3['forEach'](_0xb2375e => {
        const _0x1c80f1 = document['createElement']('button');
        _0x1c80f1['className'] = 'skin-btn' + (_0xb2375e === _0x3a32b7 ? '\x20selected' : '');
        const _0x540516 = document['createElement']('img');
        _0x540516['src'] = 'assets/' + _0xb2375e;
        _0x1c80f1['appendChild'](_0x540516);
        _0x1c80f1['onclick'] = () => {
            _0x3a32b7 = _0xb2375e;
            localStorage['setItem']('selectedBody', _0xb2375e);
            _0x2c1845['querySelectorAll']('.skin-btn')['forEach'](_0xda1e3 => _0xda1e3['classList']['remove']('selected'));
            _0x1c80f1['classList']['add']('selected');
        };
        _0x2c1845['appendChild'](_0x1c80f1);
    });
    _0x1318b8['innerHTML'] = '';
    _0x55ed29['forEach'](_0x47bcc2 => {
        const _0x433b9e = document['createElement']('button');
        _0x433b9e['className'] = 'skin-btn' + (_0x47bcc2 === _0x5294d8 ? '\x20selected' : '');
        const _0x4aa1d0 = document['createElement']('img');
        _0x4aa1d0['src'] = 'assets/' + _0x47bcc2;
        _0x433b9e['appendChild'](_0x4aa1d0);
        _0x433b9e['onclick'] = () => {
            _0x5294d8 = _0x47bcc2;
            localStorage['setItem']('selectedEyes', _0x47bcc2);
            _0x1318b8['querySelectorAll']('.skin-btn')['forEach'](_0x3ff6c2 => _0x3ff6c2['classList']['remove']('selected'));
            _0x433b9e['classList']['add']('selected');
        };
        _0x1318b8['appendChild'](_0x433b9e);
    });
}
function _0x51cfe2(_0x2805a7) {
    if (!_0x2b372f['MAP']['columns'] || !_0x2b372f['CAMERA']['width'])
        return;
    const _0x23513f = Math['max'](0x0, _0x2b372f['MAP']['columns'] * _0x2b372f['MAP']['tileSize'] - _0x2b372f['CAMERA']['width']);
    const _0x54220a = Math['max'](0x0, _0x2b372f['MAP']['rows'] * _0x2b372f['MAP']['tileSize'] - _0x2b372f['CAMERA']['height']);
    if (_0x69c3c4 === null) {
        _0x69c3c4 = _0x23513f / 0x2;
        _0x39ae06 = _0x54220a / 0x2;
    }
    _0x69c3c4 += _0x1adbd5 * _0x2805a7;
    _0x39ae06 += _0x838268 * _0x2805a7;
    if (_0x69c3c4 <= 0x0) {
        _0x69c3c4 = 0x0;
        _0x1adbd5 = Math['abs'](_0x1adbd5);
    } else if (_0x69c3c4 >= _0x23513f) {
        _0x69c3c4 = _0x23513f;
        _0x1adbd5 = -Math['abs'](_0x1adbd5);
    }
    if (_0x39ae06 <= 0x0) {
        _0x39ae06 = 0x0;
        _0x838268 = Math['abs'](_0x838268);
    } else if (_0x39ae06 >= _0x54220a) {
        _0x39ae06 = _0x54220a;
        _0x838268 = -Math['abs'](_0x838268);
    }
    _0x2b372f['CAMERA']['x'] = _0x69c3c4;
    _0x2b372f['CAMERA']['y'] = _0x39ae06;
}
window['addEventListener']('DOMContentLoaded', () => {
    const _0xe4dc6a = document['getElementById']('play-btn');
    const _0x7eb26e = document['getElementById']('username-input');
    const _0x244502 = localStorage['getItem']('playerName');
    if (_0x244502 && _0x7eb26e) {
        _0x7eb26e['value'] = _0x244502;
    }
    const _0x23689a = () => {
        _0x254bd7['play']('wait');
        document['removeEventListener']('click', _0x23689a);
        document['removeEventListener']('keydown', _0x23689a);
        document['removeEventListener']('touchstart', _0x23689a);
    };
    document['addEventListener']('click', _0x23689a, { 'once': !![] });
    document['addEventListener']('keydown', _0x23689a, { 'once': !![] });
    document['addEventListener']('touchstart', _0x23689a, { 'once': !![] });
    if (_0xe4dc6a) {
        _0xe4dc6a['addEventListener']('click', () => {
            const _0x439ad7 = window['_FB'] && window['_FB']['_currentUser'];
            const _0xd578b1 = window['_FB'] && window['_FB']['_userData'];
            let _0x3b52a0 = !![];
            if (_0x439ad7 && _0xd578b1 && _0xd578b1['username']) {
                _0x2b38d1 = _0xd578b1['username'];
                _0x3b52a0 = ![];
            } else {
                const _0x2623ee = Math['floor'](Math['random']() * 0x384) + 0x64;
                _0x2b38d1 = 'user' + _0x2623ee;
                _0x3b52a0 = !![];
            }
            const _0x47d840 = _0x3b52a0 ? 'body01.png' : _0x3a32b7;
            const _0x10cdb5 = _0x3b52a0 ? 'eyes4.png' : _0x5294d8;
            const _0x233fee = !_0x3b52a0 && _0xd578b1 && _0xd578b1['photoURL'] ? _0xd578b1['photoURL'] : '';
            const _0x519f91 = !_0x3b52a0 && _0x439ad7 ? _0x439ad7['uid'] : '';
            localStorage['setItem']('playerName', _0x2b38d1);
            _0x2b2897 = ![];
            _0x2b372f['CAMERA']['x'] = null;
            _0x2b372f['CAMERA']['y'] = null;
            document['getElementById']('main-menu-ui')['style']['display'] = 'none';
            const _0xa1f573 = document['getElementById']('chat-log-wrap');
            if (_0xa1f573)
                _0xa1f573['classList']['add']('active');
            document['getElementById']('chat-log-ui')['style']['display'] = 'flex';
            const _0x5618ab = document['getElementById']('controls-hint');
            if (_0x5618ab && !_0x3966dd)
                _0x5618ab['style']['display'] = 'block';
            _0x37d0da();
            if (_0x3966dd) {
                const _0x14a17d = document['getElementById']('leaderboard-list');
                const _0x3476ae = document['getElementById']('leaderboard-toggle');
                if (_0x14a17d) {
                    _0x14a17d['style']['display'] = 'none';
                    if (_0x3476ae)
                        _0x3476ae['style']['transform'] = 'rotate(180deg)';
                }
                const _0x556826 = document['getElementById']('role-list-items');
                const _0x3ea76c = document['getElementById']('role-list-toggle');
                if (_0x556826) {
                    _0x556826['style']['display'] = 'none';
                    if (_0x3ea76c)
                        _0x3ea76c['style']['transform'] = 'rotate(180deg)';
                }
            }
            const _0x700345 = JSON['stringify']({
                'type': 'join',
                'name': _0x2b38d1,
                'token': _0x40f1bd,
                'body': _0x47d840,
                'eyes': _0x10cdb5,
                'isGuest': _0x3b52a0,
                'uid': _0x519f91,
                'photoURL': _0x233fee
            });
            if (_0x2aa407 && _0x2aa407['readyState'] === WebSocket['OPEN']) {
                _0x2aa407['send'](_0x700345);
            } else if (!_0x2aa407 || _0x2aa407['readyState'] === WebSocket['CLOSED'] || _0x2aa407['readyState'] === WebSocket['CLOSING']) {
                window['_pendingJoinPayload'] = _0x700345;
                _0x42f9fd();
            }
        });
    }
    _0xbddc9f();
    _0x42f9fd();
    _0x134a0b();
    _0x1861cd();
    _0x413fc0();
});
function _0x1861cd() {
    const _0x412704 = document['getElementById']('settings-btn');
    const _0x3dc773 = document['getElementById']('settings-panel');
    const _0x222faa = document['getElementById']('close-settings-btn');
    const _0x3862b8 = document['getElementById']('setting-mouse-relative');
    if (_0x3862b8) {
        _0x3862b8['checked'] = _0x347dee;
        _0x3862b8['addEventListener']('change', () => {
            _0x347dee = _0x3862b8['checked'];
            localStorage['setItem']('mouseRelativeMovement', _0x347dee ? 'true' : 'false');
        });
    }
    const _0x396a4e = document['getElementById']('setting-music-volume');
    const _0x2688b5 = document['getElementById']('setting-music-volume-display');
    function _0x4af2e2(_0x7742) {
        const _0x35b462 = (_0x7742['value'] - _0x7742['min']) / (_0x7742['max'] - _0x7742['min']) * 0x64;
        _0x7742['style']['background'] = 'linear-gradient(to\x20right,\x20#ffcc00\x20' + _0x35b462 + '%,\x20#444\x20' + _0x35b462 + '%)';
    }
    if (_0x396a4e) {
        const _0x2e9cb1 = _0x254bd7['getVolume']();
        const _0x1c0f5e = Math['round'](_0x2e9cb1 * 0x64);
        _0x396a4e['value'] = _0x1c0f5e;
        if (_0x2688b5)
            _0x2688b5['textContent'] = _0x1c0f5e + '%';
        _0x4af2e2(_0x396a4e);
        _0x396a4e['addEventListener']('input', () => {
            const _0x4d3a3b = parseInt(_0x396a4e['value'], 0xa);
            if (_0x2688b5)
                _0x2688b5['textContent'] = _0x4d3a3b + '%';
            _0x4af2e2(_0x396a4e);
            _0x254bd7['setVolume'](_0x4d3a3b / 0x64);
            _0x254bd7['setMuted'](_0x4d3a3b === 0x0);
        });
    }
    if (_0x412704 && _0x3dc773) {
        _0x412704['addEventListener']('click', _0x596bc0 => {
            _0x596bc0['stopPropagation']();
            _0x3dc773['style']['display'] = _0x3dc773['style']['display'] === 'none' ? 'block' : 'none';
        });
    }
    if (_0x222faa && _0x3dc773) {
        _0x222faa['addEventListener']('click', () => {
            _0x3dc773['style']['display'] = 'none';
        });
    }
    const _0x1916af = document['getElementById']('mayor-confirm-yes');
    const _0x42a2fa = document['getElementById']('mayor-confirm-no');
    const _0x509211 = document['getElementById']('mayor-confirm-dialog');
    if (_0x1916af && _0x509211) {
        _0x1916af['addEventListener']('click', () => {
            if (_0x2aa407 && _0x2aa407['readyState'] === WebSocket['OPEN']) {
                _0x2aa407['send'](JSON['stringify']({ 'type': 'mayor_reveal_self' }));
            }
            _0x509211['style']['display'] = 'none';
        });
    }
    if (_0x42a2fa && _0x509211) {
        _0x42a2fa['addEventListener']('click', () => {
            _0x509211['style']['display'] = 'none';
        });
    }
    const _0x3528f5 = document['getElementById']('close-ability-btn');
    if (_0x3528f5) {
        _0x3528f5['addEventListener']('click', () => {
            const _0x15ae88 = document['getElementById']('ability-ui');
            if (_0x15ae88)
                _0x15ae88['style']['display'] = 'none';
        });
    }
}
let _0xb37add = '';
function _0x9185a5(_0x44f2f6) {
    const _0x14829f = document['getElementById']('vote-tally-panel');
    const _0x108f04 = document['getElementById']('vote-tally-list');
    if (!_0x14829f || !_0x108f04)
        return;
    if (_0x44f2f6['state'] !== 'DAY_VOTE') {
        _0x14829f['style']['display'] = 'none';
        _0xb37add = '';
        return;
    }
    _0x14829f['style']['display'] = 'block';
    const _0x572950 = {};
    for (const _0x11998e in _0x4666d8) {
        if (!_0x4666d8[_0x11998e]['isDead'])
            _0x572950[_0x11998e] = 0x0;
    }
    if (_0x19a416 && !_0x3c368c['isDead'])
        _0x572950[_0x19a416] = 0x0;
    const _0x321861 = _0x44f2f6['votes'] || {};
    for (const _0x35504c in _0x321861) {
        const _0x39e1cf = _0x321861[_0x35504c];
        const _0x831d18 = _0x44f2f6['mayorRevealed'] && _0x44f2f6['mayorRevealed'][_0x35504c] ? 0x2 : 0x1;
        _0x572950[_0x39e1cf] = (_0x572950[_0x39e1cf] || 0x0) + _0x831d18;
    }
    let _0x1e0bd3 = 0x0;
    const _0x5accf0 = _0x44f2f6['skips'] || {};
    for (const _0xe4f2f3 in _0x5accf0) {
        _0x1e0bd3 += Number(_0x5accf0[_0xe4f2f3]) || 0x1;
    }
    const _0x29a329 = JSON['stringify'](_0x572950) + '_' + _0x1e0bd3 + '_' + _0x3c368c['isDead'];
    if (_0x29a329 === _0xb37add)
        return;
    _0xb37add = _0x29a329;
    _0x108f04['innerHTML'] = '';
    for (const _0x4364b9 in _0x572950) {
        const _0x36e985 = parseInt(_0x4364b9);
        const _0x38f968 = _0x36e985 === _0x19a416 ? _0x2b38d1 : _0x4666d8[_0x4364b9] ? _0x4666d8[_0x4364b9]['name'] : 'Player\x20' + _0x4364b9;
        const _0xbdc029 = document['createElement']('div');
        _0xbdc029['className'] = 'vote-tally-entry';
        const _0x1609e2 = document['createElement']('span');
        _0x1609e2['textContent'] = _0x38f968;
        const _0x2770f6 = document['createElement']('span');
        _0x2770f6['className'] = 'vote-count';
        _0x2770f6['textContent'] = _0x572950[_0x4364b9] + '\x20vote' + (_0x572950[_0x4364b9] === 0x1 ? '' : 's');
        _0xbdc029['appendChild'](_0x1609e2);
        _0xbdc029['appendChild'](_0x2770f6);
        if (_0x36e985 !== _0x19a416 && !_0x3c368c['isDead']) {
            _0xbdc029['style']['cursor'] = 'pointer';
            _0xbdc029['title'] = 'Vote\x20for\x20' + _0x38f968;
            _0xbdc029['addEventListener']('click', _0x6876de => {
                _0x6876de['stopPropagation']();
                if (_0x2aa407 && _0x2aa407['readyState'] === WebSocket['OPEN']) {
                    _0x2aa407['send'](JSON['stringify']({
                        'type': 'chat',
                        'text': '/vote\x20' + _0x38f968
                    }));
                }
            });
        }
        _0x108f04['appendChild'](_0xbdc029);
    }
    const _0x29de8a = document['createElement']('div');
    _0x29de8a['className'] = 'vote-tally-skip';
    _0x29de8a['innerHTML'] = '<span>Skips:</span>\x20<span\x20style=\x22color:#ffcc00;float:right;\x22>' + _0x1e0bd3 + '</span>';
    if (!_0x3c368c['isDead']) {
        _0x29de8a['style']['cursor'] = 'pointer';
        _0x29de8a['title'] = 'Click\x20to\x20skip\x20vote';
        _0x29de8a['addEventListener']('click', _0x2ede83 => {
            _0x2ede83['stopPropagation']();
            if (_0x2aa407 && _0x2aa407['readyState'] === WebSocket['OPEN']) {
                _0x2aa407['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': '/skip'
                }));
            }
        });
    }
    _0x108f04['appendChild'](_0x29de8a);
}
let _0x414e8d = null;
let _0xe93e6b = null;
let _0x5c28cf = null;
function _0xe522b6() {
    if (_0x2aa407 && _0x2aa407['readyState'] === WebSocket['OPEN']) {
        _0x2aa407['send'](JSON['stringify']({
            'type': 'skinwalker_action',
            'transformRole': _0x414e8d,
            'abilityTarget': _0xe93e6b,
            'killTarget': _0x5c28cf
        }));
    }
}
function _0x45f80d() {
    const _0x1cfef8 = document['getElementById']('ability-ui-body');
    if (!_0x1cfef8)
        return;
    _0x1cfef8['innerHTML'] = '';
    if (_0x3de780 === 'Celebrity' || _0x3de780 === 'Mayor') {
        const _0x2b8a14 = document['createElement']('div');
        _0x2b8a14['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x2024px\x200;\x20font-size:\x2013px;';
        _0x2b8a14['innerText'] = 'Your\x20role\x20has\x20a\x20passive\x20ability.\x20No\x20night\x20action\x20required.';
        _0x1cfef8['appendChild'](_0x2b8a14);
        return;
    }
    if (_0x3de780 === 'Skinwalker') {
        const _0x5ad3ec = document['createElement']('div');
        _0x5ad3ec['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x5ad3ec['innerText'] = 'Transform\x20into:';
        _0x1cfef8['appendChild'](_0x5ad3ec);
        const _0x2cbdf7 = document['createElement']('div');
        _0x2cbdf7['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
        const _0x1f9fdb = [
            'Doctor',
            'Investigator',
            'Tracker',
            'Archer',
            'Escort',
            'Celebrity',
            'Vigilante'
        ];
        const _0x1583c3 = _0x498ac8 => {
            if (!_0x2b372f['ROLE_LIST_RAW'] || _0x2b372f['ROLE_LIST_RAW']['length'] === 0x0)
                return !![];
            return _0x2b372f['ROLE_LIST_RAW']['some'](_0x307035 => {
                if (_0x307035['name'] === _0x498ac8)
                    return !_0x307035['isDead'];
                if (_0x1786c3[_0x307035['name']] && _0x1786c3[_0x307035['name']]['includes'](_0x498ac8))
                    return !![];
                return ![];
            });
        };
        const _0x1619ed = [
            'None',
            ..._0x1f9fdb['filter'](_0x1583c3)
        ];
        _0x1619ed['forEach'](_0x25dcc0 => {
            const _0xf07dbb = document['createElement']('button');
            _0xf07dbb['className'] = 'layer-btn';
            _0xf07dbb['style']['cssText'] = 'width:\x20100%;\x20font-size:\x2012px;\x20padding:\x206px\x2010px;';
            _0xf07dbb['innerText'] = _0x25dcc0;
            const _0x38f039 = _0x25dcc0 === 'None' && !_0x414e8d || _0x414e8d === _0x25dcc0;
            if (_0x38f039)
                _0xf07dbb['classList']['add']('active');
            _0xf07dbb['onclick'] = () => {
                _0x414e8d = _0x25dcc0 === 'None' ? null : _0x25dcc0;
                _0xe522b6();
                _0x45f80d();
            };
            _0x2cbdf7['appendChild'](_0xf07dbb);
        });
        _0x1cfef8['appendChild'](_0x2cbdf7);
        if (_0x1583c3('Vigilante')) {
            const _0x438c7d = document['createElement']('div');
            _0x438c7d['style']['cssText'] = 'color:\x20#ff7777;\x20font-size:\x2011px;\x20margin-bottom:\x208px;\x20font-style:\x20italic;';
            _0x438c7d['textContent'] = 'Transforming\x20into\x20Vigilante\x20only\x20blocks\x20the\x20real\x20Vigilante\x20-\x20you\x20cannot\x20shoot.';
            _0x1cfef8['appendChild'](_0x438c7d);
        }
        if (_0x414e8d === 'Vigilante') {
            const _0x3e52b1 = document['createElement']('div');
            _0x3e52b1['style']['cssText'] = 'color:\x20#aaa;\x20font-style:\x20italic;\x20text-align:\x20center;\x20padding:\x208px\x200;\x20font-size:\x2012px;';
            _0x3e52b1['innerText'] = 'The\x20real\x20Vigilante\x20is\x20blocked\x20tonight.';
            _0x1cfef8['appendChild'](_0x3e52b1);
        } else if (_0x414e8d && _0x414e8d !== 'Celebrity') {
            const _0xd63131 = document['createElement']('div');
            _0xd63131['style']['cssText'] = 'color:\x20#ffffff;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
            _0xd63131['innerText'] = 'Use\x20' + _0x414e8d + '\x20ability\x20on:';
            _0x1cfef8['appendChild'](_0xd63131);
            const _0x8091a = document['createElement']('div');
            _0x8091a['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;\x20margin-bottom:\x2010px;';
            const _0x24f4e1 = document['createElement']('button');
            _0x24f4e1['className'] = 'layer-btn';
            _0x24f4e1['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
            _0x24f4e1['innerText'] = 'No\x20one';
            if (!_0xe93e6b)
                _0x24f4e1['classList']['add']('active');
            _0x24f4e1['onclick'] = () => {
                _0xe93e6b = null;
                _0xe522b6();
                _0x45f80d();
            };
            _0x8091a['appendChild'](_0x24f4e1);
            for (const _0x82adaf in _0x4666d8) {
                const _0x17a714 = _0x4666d8[_0x82adaf];
                if (_0x17a714['isDead'])
                    continue;
                const _0x1c3891 = document['createElement']('button');
                _0x1c3891['className'] = 'layer-btn';
                _0x1c3891['innerText'] = _0x17a714['name'];
                if (_0xe93e6b === parseInt(_0x82adaf))
                    _0x1c3891['classList']['add']('active');
                _0x1c3891['onclick'] = () => {
                    _0xe93e6b = parseInt(_0x82adaf);
                    _0xe522b6();
                    _0x45f80d();
                };
                _0x8091a['appendChild'](_0x1c3891);
            }
            _0x1cfef8['appendChild'](_0x8091a);
        }
        const _0x2f04a4 = document['createElement']('div');
        _0x2f04a4['style']['cssText'] = 'color:\x20#ff5555;\x20font-weight:\x20bold;\x20font-size:\x2013px;\x20margin-bottom:\x202px;';
        _0x2f04a4['innerText'] = 'Mafia\x20Kill\x20Target:';
        _0x1cfef8['appendChild'](_0x2f04a4);
        const _0x5963a0 = document['createElement']('div');
        _0x5963a0['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
        const _0x55a153 = document['createElement']('button');
        _0x55a153['className'] = 'layer-btn';
        _0x55a153['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
        _0x55a153['innerText'] = 'No\x20one';
        if (!_0x5c28cf && !_0x2b372f['CURRENT_TARGET'])
            _0x55a153['classList']['add']('active');
        _0x55a153['onclick'] = () => {
            _0x5c28cf = null;
            _0x2b372f['CURRENT_TARGET'] = null;
            _0xe522b6();
            _0x45f80d();
        };
        _0x5963a0['appendChild'](_0x55a153);
        for (const _0x1773a8 in _0x4666d8) {
            const _0x1dc2fc = _0x4666d8[_0x1773a8];
            if (_0x1dc2fc['isDead'])
                continue;
            const _0x1d1693 = document['createElement']('button');
            _0x1d1693['className'] = 'layer-btn';
            _0x1d1693['innerText'] = _0x1dc2fc['name'];
            if (_0x5c28cf === parseInt(_0x1773a8) || _0x2b372f['CURRENT_TARGET'] === parseInt(_0x1773a8))
                _0x1d1693['classList']['add']('active');
            _0x1d1693['onclick'] = () => {
                _0x5c28cf = parseInt(_0x1773a8);
                _0x2b372f['CURRENT_TARGET'] = parseInt(_0x1773a8);
                _0xe522b6();
                _0x45f80d();
            };
            _0x5963a0['appendChild'](_0x1d1693);
        }
        _0x1cfef8['appendChild'](_0x5963a0);
        return;
    }
    let _0x164fcd = '';
    let _0x2bf430 = ![];
    if (_0x3de780 === 'Doctor') {
        _0x164fcd = 'Select\x20a\x20player\x20to\x20heal\x20and\x20protect\x20tonight:';
        _0x2bf430 = !![];
    } else if (_0x3de780 === 'Investigator') {
        _0x164fcd = 'Select\x20a\x20player\x20to\x20investigate\x20tonight:';
    } else if (_0x3de780 === 'Tracker') {
        _0x164fcd = 'Select\x20a\x20player\x20to\x20track\x20visits\x20tonight:';
    } else if (_0x3de780 === 'Archer') {
        _0x164fcd = 'Select\x20a\x20player\x20to\x20guard\x20from\x20harmful\x20visitors:';
    } else if (_0x3de780 === 'Escort') {
        _0x164fcd = 'Select\x20a\x20player\x20to\x20roleblock\x20tonight:';
    } else if (_0x3de780 === 'Vigilante') {
        _0x164fcd = 'Select\x20a\x20player\x20to\x20shoot\x20tonight:';
    }
    const _0x55cbd1 = document['createElement']('div');
    _0x55cbd1['style']['cssText'] = 'color:\x20#ddd;\x20font-size:\x2013px;\x20font-weight:\x20normal;\x20line-height:\x201.4;\x20margin-bottom:\x204px;';
    _0x55cbd1['innerText'] = _0x164fcd;
    _0x1cfef8['appendChild'](_0x55cbd1);
    const _0x52ef43 = document['createElement']('div');
    _0x52ef43['style']['cssText'] = 'display:\x20grid;\x20grid-template-columns:\x201fr\x201fr;\x20gap:\x205px;';
    const _0x497790 = document['createElement']('button');
    _0x497790['className'] = 'layer-btn';
    _0x497790['style']['cssText'] = 'grid-column:\x20span\x202;\x20color:\x20#aaa;\x20font-style:\x20italic;';
    _0x497790['innerText'] = 'No\x20one';
    if (_0x2b372f['CURRENT_TARGET'] === null)
        _0x497790['classList']['add']('active');
    _0x497790['onclick'] = () => {
        _0x2b372f['CURRENT_TARGET'] = null;
        if (_0x2aa407 && _0x2aa407['readyState'] === WebSocket['OPEN']) {
            _0x2aa407['send'](JSON['stringify']({
                'type': 'action_target',
                'targetId': null
            }));
        }
        _0x45f80d();
    };
    _0x52ef43['appendChild'](_0x497790);
    for (const _0x3e16c6 in _0x4666d8) {
        const _0x272a32 = _0x4666d8[_0x3e16c6];
        if (_0x272a32['isDead'])
            continue;
        const _0x36ced5 = document['createElement']('button');
        _0x36ced5['className'] = 'layer-btn';
        _0x36ced5['innerText'] = _0x272a32['name'];
        if (_0x2b372f['CURRENT_TARGET'] === parseInt(_0x3e16c6))
            _0x36ced5['classList']['add']('active');
        _0x36ced5['onclick'] = () => {
            _0x2b372f['CURRENT_TARGET'] = parseInt(_0x3e16c6);
            if (_0x2aa407 && _0x2aa407['readyState'] === WebSocket['OPEN']) {
                _0x2aa407['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': parseInt(_0x3e16c6)
                }));
            }
            _0x45f80d();
        };
        _0x52ef43['appendChild'](_0x36ced5);
    }
    if (_0x2bf430 && !_0x3c368c['isDead']) {
        const _0x52c840 = document['createElement']('button');
        _0x52c840['className'] = 'layer-btn';
        _0x52c840['style']['cssText'] = 'grid-column:\x20span\x202;';
        _0x52c840['innerText'] = _0x2b38d1 + '\x20(Self)';
        if (_0x2b372f['CURRENT_TARGET'] === _0x19a416)
            _0x52c840['classList']['add']('active');
        _0x52c840['onclick'] = () => {
            _0x2b372f['CURRENT_TARGET'] = _0x19a416;
            if (_0x2aa407 && _0x2aa407['readyState'] === WebSocket['OPEN']) {
                _0x2aa407['send'](JSON['stringify']({
                    'type': 'action_target',
                    'targetId': _0x19a416
                }));
            }
            _0x45f80d();
        };
        _0x52ef43['appendChild'](_0x52c840);
    }
    _0x1cfef8['appendChild'](_0x52ef43);
}
function _0x42f9fd() {
    if (_0x2aa407 && (_0x2aa407['readyState'] === WebSocket['OPEN'] || _0x2aa407['readyState'] === WebSocket['CONNECTING'])) {
        return;
    }
    const _0x271a21 = new URLSearchParams();
    if (_0x40f1bd)
        _0x271a21['set']('token', _0x40f1bd);
    _0x271a21['set']('ngrok-skip-browser-warning', 'true');
    const _0x1d1a59 = 'wss://rubber-virtual-application-occupational.trycloudflare.com';
    const _0x1dfaa3 = window['location']['hostname'] === 'localhost' ? 'ws://localhost:8080' : _0x1d1a59;
    const _0x3cb06b = _0x1dfaa3 + '/?' + _0x271a21['toString']();
    _0x2aa407 = new WebSocket(_0x3cb06b);
    _0x2aa407['onopen'] = function () {
        if (!_0x2b2897 && this['readyState'] === WebSocket['OPEN']) {
            if (window['_pendingJoinPayload']) {
                this['send'](window['_pendingJoinPayload']);
                window['_pendingJoinPayload'] = null;
            } else {
                const _0x4164bd = window['_FB'] && window['_FB']['_currentUser'];
                const _0x56a2e0 = window['_FB'] && window['_FB']['_userData'];
                const _0x386612 = !(_0x4164bd && _0x56a2e0 && _0x56a2e0['username']);
                const _0x104697 = _0x386612 ? 'body01.png' : _0x3a32b7;
                const _0x18375d = _0x386612 ? 'eyes4.png' : _0x5294d8;
                const _0x385966 = !_0x386612 && _0x56a2e0 && _0x56a2e0['photoURL'] ? _0x56a2e0['photoURL'] : '';
                const _0x21b500 = !_0x386612 && _0x4164bd ? _0x4164bd['uid'] : '';
                this['send'](JSON['stringify']({
                    'type': 'join',
                    'name': _0x2b38d1,
                    'token': _0x40f1bd,
                    'body': _0x104697,
                    'eyes': _0x18375d,
                    'isGuest': _0x386612,
                    'uid': _0x21b500,
                    'photoURL': _0x385966
                }));
            }
        }
    };
    window['addEventListener']('beforeunload', () => {
        if (_0x2aa407 && _0x2aa407['readyState'] === WebSocket['OPEN']) {
            _0x2aa407['send'](JSON['stringify']({ 'type': 'leave' }));
        }
    });
    _0x2aa407['onclose'] = _0x2dcd55 => {
        if (_0x2dcd55['code'] === 0xfa1) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20kicked.</div>';
            return;
        }
        if (_0x2dcd55['code'] === 0xfa2 || _0x2dcd55['code'] === 0xfa3) {
            document['body']['innerHTML'] = '<div\x20style=\x22position:fixed;top:0;left:0;right:0;bottom:0;background:#111;color:white;display:flex;align-items:center;justify-content:center;font-family:Segoe\x20UI;font-size:24px;font-weight:bold;\x22>You\x20have\x20been\x20banned.</div>';
            return;
        }
        let _0x5eeab1 = document['getElementById']('disconnect-overlay');
        if (!_0x5eeab1) {
            _0x5eeab1 = document['createElement']('div');
            _0x5eeab1['id'] = 'disconnect-overlay';
            _0x5eeab1['style']['cssText'] = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Segoe\x20UI,sans-serif;font-size:22px;font-weight:bold;z-index:99999;text-align:center;padding:20px;';
            _0x5eeab1['innerHTML'] = '<div\x20style=\x22font-size:32px;margin-bottom:12px;color:#ff4444;\x22>Server\x20Disconnected</div><div\x20style=\x22font-size:16px;color:#aaa;font-weight:normal;\x22>Refreshing\x20game...</div>';
            document['body']['appendChild'](_0x5eeab1);
        }
        setTimeout(() => {
            window['location']['reload']();
        }, 0x5dc);
    };
    _0x2aa407['onmessage'] = _0x3d33ea => {
        const _0xed5f40 = JSON['parse'](_0x3d33ea['data']);
        if (_0xed5f40['type'] === 'map_data') {
            _0x2b372f['MAP']['tileSize'] = _0xed5f40['map']['tileSize'];
            _0x2b372f['MAP']['columns'] = _0xed5f40['map']['columns'];
            _0x2b372f['MAP']['rows'] = _0xed5f40['map']['rows'];
            _0x2b372f['MAP']['layers'] = _0xed5f40['map']['layers'];
            if (_0xed5f40['map']['doors']) {
                _0x2b372f['MAP']['doors'] = _0xed5f40['map']['doors'];
                const _0xc2f24b = _0x2b372f['MAP']['layers']['find'](_0x1b457b => _0x1b457b['name'] === 'floor2');
                if (_0xc2f24b) {
                    for (const _0x5bcd44 in _0x2b372f['MAP']['doors']) {
                        _0xc2f24b['data'][parseInt(_0x5bcd44)] = 0x2;
                    }
                }
            }
            if (_0xed5f40['entities'])
                _0x2b372f['ENTITIES'] = _0xed5f40['entities'];
            _0x25cef5();
            _0x2b372f['SYSTEM']['isReady'] = !![];
            _0x1b521d();
            if (!_0x2b372f['SYSTEM']['_gameLoopRunning']) {
                _0x2b372f['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x4f7bc0);
            }
            return;
        }
        if (_0xed5f40['type'] === 'init') {
            _0x19a416 = _0xed5f40['id'];
            _0x2b2897 = ![];
            _0x37d0da();
            if (_0x3966dd) {
                const _0x53e2b1 = document['getElementById']('leaderboard-list');
                const _0x332411 = document['getElementById']('leaderboard-toggle');
                if (_0x53e2b1) {
                    _0x53e2b1['style']['display'] = 'none';
                    if (_0x332411)
                        _0x332411['style']['transform'] = 'rotate(180deg)';
                }
                const _0x355a3c = document['getElementById']('role-list-items');
                const _0x520fdd = document['getElementById']('role-list-toggle');
                if (_0x355a3c) {
                    _0x355a3c['style']['display'] = 'none';
                    if (_0x520fdd)
                        _0x520fdd['style']['transform'] = 'rotate(180deg)';
                }
            }
            _0x5dc788 = _0xed5f40['isOwner'] || ![];
            _0x2b38d1 = _0xed5f40['name'] || _0x2b38d1;
            _0x2b372f['MAP']['tileSize'] = _0xed5f40['map']['tileSize'];
            _0x2b372f['MAP']['columns'] = _0xed5f40['map']['columns'];
            _0x2b372f['MAP']['rows'] = _0xed5f40['map']['rows'];
            _0x2b372f['MAP']['layers'] = _0xed5f40['map']['layers'];
            if (_0xed5f40['map']['doors']) {
                _0x2b372f['MAP']['doors'] = _0xed5f40['map']['doors'];
                const _0x29ba3e = _0x2b372f['MAP']['layers']['find'](_0x1c25b8 => _0x1c25b8['name'] === 'floor2');
                if (_0x29ba3e) {
                    for (const _0x276197 in _0x2b372f['MAP']['doors']) {
                        _0x29ba3e['data'][parseInt(_0x276197)] = 0x2;
                    }
                }
            }
            if (_0xed5f40['entities'])
                _0x2b372f['ENTITIES'] = _0xed5f40['entities'];
            _0x25cef5();
            _0x3c368c['x'] = _0x2b372f['MAP']['columns'] * _0x2b372f['MAP']['tileSize'] / 0x2;
            _0x3c368c['y'] = _0x2b372f['MAP']['rows'] * _0x2b372f['MAP']['tileSize'] / 0x2;
            _0x2b372f['CAMERA']['x'] = _0x3c368c['x'] + _0x3c368c['width'] / 0x2 - _0x2b372f['CAMERA']['width'] / 0x2;
            _0x2b372f['CAMERA']['y'] = _0x3c368c['y'] + _0x3c368c['height'] / 0x2 - _0x2b372f['CAMERA']['height'] / 0x2;
            if (_0x5dc788) {
                document['getElementById']('editor-ui')['style']['display'] = 'flex';
                _0x33b538();
            }
            document['getElementById']('settings-btn-wrap')['style']['display'] = 'block';
            document['getElementById']('leaderboard-ui')['style']['display'] = 'flex';
            document['getElementById']('role-list-ui')['style']['display'] = 'flex';
            _0x2b372f['SYSTEM']['lastTime'] = performance['now']();
            _0x2b372f['SYSTEM']['isReady'] = !![];
            _0x5eae94();
            if (!_0x2b372f['SYSTEM']['_gameLoopRunning']) {
                _0x2b372f['SYSTEM']['_gameLoopRunning'] = !![];
                requestAnimationFrame(_0x4f7bc0);
            }
            return;
        } else if (_0xed5f40['type'] === 'state') {
            const _0x41bd50 = {};
            for (const _0x533238 in _0xed5f40['players']) {
                if (parseInt(_0x533238) === _0x19a416)
                    continue;
                const _0x5c0076 = _0xed5f40['players'][_0x533238];
                const _0x5c92f3 = _0x4666d8[_0x533238];
                if (_0x5c92f3) {
                    const _0x1714f3 = _0x5c0076['x'] - _0x5c92f3['renderX'];
                    const _0x394fb6 = _0x5c0076['y'] - _0x5c92f3['renderY'];
                    const _0x4b7207 = _0x1714f3 * _0x1714f3 + _0x394fb6 * _0x394fb6 > 0x78 * 0x78;
                    Object['assign'](_0x5c92f3, _0x5c0076);
                    if (_0x4b7207) {
                        _0x5c92f3['renderX'] = _0x5c0076['x'];
                        _0x5c92f3['renderY'] = _0x5c0076['y'];
                    }
                    _0x41bd50[_0x533238] = _0x5c92f3;
                } else {
                    _0x41bd50[_0x533238] = {
                        ..._0x5c0076,
                        'renderX': _0x5c0076['x'],
                        'renderY': _0x5c0076['y'],
                        'renderAngle': _0x5c0076['angle'] || 0x0
                    };
                }
            }
            _0x4666d8 = _0x41bd50;
            _0x3c4204();
            if (_0xed5f40['players'][_0x19a416]) {
                const _0x1e3a38 = _0xed5f40['players'][_0x19a416];
                _0x3c368c['chats'] = _0x1e3a38['chats'] || [];
                _0x3c368c['isDead'] = _0x1e3a38['isDead'];
                if (_0x1e3a38['name'])
                    _0x2b38d1 = _0x1e3a38['name'];
                _0x5eae94();
                const _0xd5d82d = Math['hypot'](_0x1e3a38['x'] - _0x3c368c['x'], _0x1e3a38['y'] - _0x3c368c['y']);
                if (_0xd5d82d > 0xfa) {
                    _0x3c368c['x'] = _0x1e3a38['x'];
                    _0x3c368c['y'] = _0x1e3a38['y'];
                } else if (_0xd5d82d > 0x50) {
                    _0x3c368c['x'] += (_0x1e3a38['x'] - _0x3c368c['x']) * 0.06;
                    _0x3c368c['y'] += (_0x1e3a38['y'] - _0x3c368c['y']) * 0.06;
                }
            }
            if (_0xed5f40['entities'])
                _0x2b372f['ENTITIES'] = _0xed5f40['entities'];
            if (_0xed5f40['game']) {
                _0x2b372f['GAME_STATE'] = _0xed5f40['game']['state'];
                _0x2b372f['NIGHT_ABILITY_OPEN'] = _0xed5f40['game']['nightAbilityOpen'];
                if (_0xed5f40['game']['mayorRevealed']) {
                    for (const _0x51a23e in _0xed5f40['game']['mayorRevealed']) {
                        _0x4adb1c['add'](parseInt(_0x51a23e));
                    }
                }
                if (_0x2b372f['LAST_STATE'] !== _0x2b372f['GAME_STATE']) {
                    if (_0x2b372f['GAME_STATE'] !== 'NIGHT') {
                        _0x2b372f['CURRENT_TARGET'] = null;
                        _0x414e8d = null;
                        _0xe93e6b = null;
                        _0x5c28cf = null;
                        const _0x41ec8e = document['getElementById']('ability-ui');
                        if (_0x41ec8e)
                            _0x41ec8e['style']['display'] = 'none';
                    }
                    if (_0x2b372f['GAME_STATE'] === 'NIGHT') {
                        _0x3c368c['chats'] = [];
                        for (const _0x3cc37f in _0x4666d8) {
                            _0x4666d8[_0x3cc37f]['chats'] = [];
                        }
                    }
                    _0x2b372f['LAST_STATE'] = _0x2b372f['GAME_STATE'];
                    _0x2910c1();
                    _0x254bd7['onStateChange'](_0x2b372f['GAME_STATE'], _0xed5f40['game']['nightAbilityOpen']);
                }
                const _0x243ab6 = document['getElementById']('phase-ui');
                if (_0x243ab6) {
                    if (_0xed5f40['game']['state'] === 'LOBBY') {
                        _0x243ab6['style']['display'] = 'none';
                    } else {
                        _0x243ab6['style']['display'] = 'block';
                    }
                    let _0x25bdcc = _0xed5f40['game']['state']['replace']('_', '\x20');
                    if (_0xed5f40['game']['state'] === 'DAY_DISCUSS') {
                        _0x25bdcc = 'DAY\x20' + (_0xed5f40['game']['dayCount'] || 0x1) + '\x20DISCUSSION';
                        document['getElementById']('phase-timer')['innerText'] = _0xed5f40['game']['timer'] + 's';
                    } else if (_0xed5f40['game']['state'] === 'DAY_VOTE') {
                        _0x25bdcc = 'DAY\x20' + (_0xed5f40['game']['dayCount'] || 0x1) + '\x20VOTING';
                        document['getElementById']('phase-timer')['innerText'] = _0xed5f40['game']['timer'] + 's';
                    } else if (_0xed5f40['game']['state'] === 'NIGHT') {
                        const _0x101b62 = _0xed5f40['game']['dayCount'] || 0x1;
                        if (_0xed5f40['game']['nightAbilityOpen']) {
                            _0x25bdcc = 'NIGHT\x20' + _0x101b62 + '\x20ABILITY\x20PHASE';
                            const _0x1917ea = _0xed5f40['game']['abilityTimer'] !== undefined ? _0xed5f40['game']['abilityTimer'] : _0xed5f40['game']['timer'];
                            document['getElementById']('phase-timer')['innerText'] = _0x1917ea + 's';
                        } else {
                            _0x25bdcc = 'NIGHT\x20' + _0x101b62;
                            document['getElementById']('phase-timer')['innerText'] = _0xed5f40['game']['timer'] + 's';
                        }
                    }
                    if (_0xed5f40['game']['state'] !== 'LOBBY') {
                        document['getElementById']('phase-name')['innerText'] = _0x25bdcc;
                    }
                }
                if (_0xed5f40['game']['state'] === 'NIGHT') {
                    const _0xb362b2 = document['getElementById']('ability-timer-label');
                    if (_0xb362b2) {
                        const _0x1fb472 = _0xed5f40['game']['abilityTimer'] !== undefined ? _0xed5f40['game']['abilityTimer'] : _0xed5f40['game']['timer'];
                        _0xb362b2['innerText'] = _0xed5f40['game']['nightAbilityOpen'] ? _0x1fb472 + 's' : '';
                    }
                    if (_0xed5f40['game']['nightAbilityOpen'] && !_0x301f39 && !_0x3c368c['isDead']) {
                        _0x301f39 = !![];
                        _0x45f80d();
                        const _0x1f5d9 = document['getElementById']('ability-ui');
                        if (_0x1f5d9)
                            _0x1f5d9['style']['display'] = 'block';
                    }
                    if (!_0xed5f40['game']['nightAbilityOpen']) {
                        const _0x12adc5 = document['getElementById']('ability-ui');
                        if (_0x12adc5 && _0x12adc5['style']['display'] === 'block') {
                            _0x12adc5['style']['display'] = 'none';
                        }
                    }
                } else {
                    _0x301f39 = ![];
                }
                _0x9185a5(_0xed5f40['game']);
                if (_0xed5f40['game']['roleListMode'] !== undefined) {
                    _0x2b372f['ROLE_LIST_RAW'] = _0xed5f40['game']['roleList'] || [];
                    _0x29d8d0(_0xed5f40['game']['roleList'], _0xed5f40['game']['roleListMode']);
                }
            }
        } else if (_0xed5f40['type'] === 'teleport') {
            _0x3c368c['x'] = _0xed5f40['x'];
            _0x3c368c['y'] = _0xed5f40['y'];
            _0x3c368c['vx'] = 0x0;
            _0x3c368c['vy'] = 0x0;
            _0x2b372f['CAMERA']['x'] = null;
            if (_0xed5f40['teleportId'] !== undefined)
                _0x1b59f8 = _0xed5f40['teleportId'];
        } else if (_0xed5f40['type'] === 'bulk_teleport') {
            for (const _0xc86601 in _0xed5f40['positions']) {
                const _0x36256b = _0xed5f40['positions'][_0xc86601];
                if (parseInt(_0xc86601) === _0x19a416) {
                    _0x3c368c['x'] = _0x36256b['x'];
                    _0x3c368c['y'] = _0x36256b['y'];
                    _0x3c368c['vx'] = 0x0;
                    _0x3c368c['vy'] = 0x0;
                    _0x2b372f['CAMERA']['x'] = null;
                    continue;
                }
                const _0x65eafe = _0x4666d8[_0xc86601];
                if (_0x65eafe) {
                    _0x65eafe['x'] = _0x36256b['x'];
                    _0x65eafe['y'] = _0x36256b['y'];
                    _0x65eafe['renderX'] = _0x36256b['x'];
                    _0x65eafe['renderY'] = _0x36256b['y'];
                    _0x65eafe['vx'] = 0x0;
                    _0x65eafe['vy'] = 0x0;
                }
            }
        } else if (_0xed5f40['type'] === 'player_left') {
            delete _0x4666d8[_0xed5f40['id']];
            _0x4adb1c['delete'](parseInt(_0xed5f40['id']));
        } else if (_0xed5f40['type'] === 'map_update') {
            const _0x3972c6 = _0x2b372f['MAP']['layers']['find'](_0x474f83 => _0x474f83['name'] === _0xed5f40['layer']);
            if (_0x3972c6) {
                _0x3972c6['data'][_0xed5f40['row'] * _0x2b372f['MAP']['columns'] + _0xed5f40['col']] = _0xed5f40['gid'];
                const _0x478d09 = _0xed5f40['row'] * _0x2b372f['MAP']['columns'] + _0xed5f40['col'];
                if (_0x2b372f['MAP']['doors'] && _0x2b372f['MAP']['doors'][_0x478d09]) {
                    const _0xddcc25 = _0x2b372f['MAP']['layers']['find'](_0x5b4e40 => _0x5b4e40['name'] === 'floor2');
                    if (_0xddcc25)
                        _0xddcc25['data'][_0x478d09] = 0x2;
                }
                const _0x3c6089 = Math['floor'](_0xed5f40['col'] * _0x2b372f['MAP']['tileSize'] / _0x2b372f['MAP']['chunkSize']);
                const _0x1c0bf8 = Math['floor'](_0xed5f40['row'] * _0x2b372f['MAP']['tileSize'] / _0x2b372f['MAP']['chunkSize']);
                _0x624674(_0x3c6089, _0x1c0bf8);
            }
        } else if (_0xed5f40['type'] === 'role_assign') {
            _0x3de780 = _0xed5f40['role'];
            _0x3c368c['isDead'] = _0x3de780 === 'Spectator';
            _0x4adb1c['clear']();
            _0x2b372f['CURRENT_TARGET'] = null;
            _0x414e8d = null;
            _0xe93e6b = null;
            _0x5c28cf = null;
            _0x301f39 = ![];
            const _0x5934dc = document['getElementById']('ability-ui');
            if (_0x5934dc)
                _0x5934dc['style']['display'] = 'none';
            document['getElementById']('role-ui')['style']['display'] = 'block';
            document['getElementById']('my-role-name')['innerText'] = _0x3de780;
            _0x2910c1();
            _0x3c45a7(_0x3de780 === 'Spectator' ? 'You\x20are\x20spectating\x20this\x20match.' : 'Game\x20started!\x20Your\x20role\x20is:\x20' + _0x3de780, !![]);
            let _0x55ab2d = '';
            if (_0x3de780 === 'Investigator')
                _0x55ab2d = 'Investigate\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20narrow\x20down\x20roles.';
            if (_0x3de780 === 'Tracker')
                _0x55ab2d = 'Track\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20see\x20who\x20someone\x20visits.';
            if (_0x3de780 === 'Doctor')
                _0x55ab2d = 'Heal\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20protect\x20someone\x20from\x20death.';
            if (_0x3de780 === 'Archer')
                _0x55ab2d = 'Guard\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20shoot\x20harmful\x20visitors.';
            if (_0x3de780 === 'Escort')
                _0x55ab2d = 'Roleblock\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20stop\x20someone\x27s\x20action.';
            if (_0x3de780 === 'Vigilante')
                _0x55ab2d = 'Shoot\x20during\x20the\x20first\x2015s\x20of\x20night\x20to\x20kill.\x20Don\x27t\x20shoot\x20townies!';
            if (_0x3de780 === 'Skinwalker')
                _0x55ab2d = 'Choose\x20your\x20role\x20transform,\x20ability\x20target,\x20and\x20kill\x20target\x20in\x20the\x20Night\x20Ability\x20UI!';
            if (_0x3de780 === 'Celebrity')
                _0x55ab2d = 'Passive\x20ability.\x20If\x20you\x20die,\x20the\x20killer\x27s\x20name\x20letter\x20is\x20revealed.';
            if (_0x3de780 === 'Mayor')
                _0x55ab2d = 'Passive\x20ability.\x20Press\x20[T]\x20at\x20any\x20time\x20to\x20publicly\x20reveal\x20as\x20Mayor.\x20Your\x20vote\x20counts\x20as\x20double!';
            _0x3c45a7(_0x55ab2d, !![]);
        } else if (_0xed5f40['type'] === 'mayor_reveal') {
            _0x4adb1c['add'](parseInt(_0xed5f40['playerId']));
            _0x5eae94();
            _0x2910c1();
        } else if (_0xed5f40['type'] === 'rolelist_update') {
            _0x2b372f['ROLE_LIST_RAW'] = _0xed5f40['list'] || [];
            _0x29d8d0(_0xed5f40['list'], _0xed5f40['mode']);
        } else if (_0xed5f40['type'] === 'sound_event') {
            _0x254bd7['onSoundEvent'](_0xed5f40['track']);
        } else if (_0xed5f40['type'] === 'game_over') {
            _0x254bd7['onStateChange']('LOBBY', ![]);
            _0x29d8d0([], 'off');
            _0x3de780 = null;
            _0x3c368c['isDead'] = ![];
            _0x4adb1c['clear']();
            _0x2b372f['CURRENT_TARGET'] = null;
            _0x414e8d = null;
            _0xe93e6b = null;
            _0x5c28cf = null;
            _0x301f39 = ![];
            document['getElementById']('role-ui')['style']['display'] = 'none';
            document['getElementById']('ability-ui')['style']['display'] = 'none';
            document['getElementById']('vote-tally-panel')['style']['display'] = 'none';
            _0x2910c1();
            _0x3c45a7('The\x20game\x20has\x20ended.', !![]);
        } else if (_0xed5f40['type'] === 'chat_log') {
            _0x3c45a7(_0xed5f40['sender'] + ':\x20' + _0xed5f40['text']);
        } else if (_0xed5f40['type'] === 'sys_chat') {
            _0x3c45a7(_0xed5f40['text'], !![]);
        }
    };
}
function _0x3c45a7(_0x54345d, _0x417368 = ![]) {
    const _0x2baec5 = document['getElementById']('chat-log-messages');
    const _0x5a0c37 = document['getElementById']('chat-log-ui');
    const _0x3b5933 = _0x5a0c37['scrollHeight'] - _0x5a0c37['scrollTop'] - _0x5a0c37['clientHeight'] < 0x1e;
    const _0x3b7f3c = document['createElement']('div');
    _0x3b7f3c['className'] = 'chat-log-line' + (_0x417368 ? '\x20sys-msg' : '');
    _0x3b7f3c['innerText'] = _0x54345d;
    _0x2baec5['appendChild'](_0x3b7f3c);
    if (_0x3b5933) {
        _0x5a0c37['scrollTop'] = _0x5a0c37['scrollHeight'];
    }
    if (_0x2baec5['childElementCount'] > 0xc8) {
        _0x2baec5['removeChild'](_0x2baec5['firstChild']);
    }
}
function _0x3c4204() {
    const _0x52841c = document['getElementById']('chat-profile-panel');
    if (!_0x52841c)
        return;
    _0x52841c['innerHTML'] = '';
    let _0x57840a = ![];
    const _0x23a20b = { ..._0x4666d8 };
    if (_0x19a416 && window['_FB'] && window['_FB']['_currentUser'] && window['_FB']['_userData']) {
        _0x23a20b[_0x19a416] = _0x23a20b[_0x19a416] || {};
        _0x23a20b[_0x19a416]['_localPhotoURL'] = window['_FB']['_userData']['photoURL'] || '';
        _0x23a20b[_0x19a416]['_localUname'] = window['_FB']['_userData']['username'] || _0x2b38d1;
        _0x23a20b[_0x19a416]['_localStats'] = window['_FB']['_userData'];
    }
    for (const _0x4fc6fa in _0x23a20b) {
        const _0x11bd74 = _0x23a20b[_0x4fc6fa];
        const _0x487a6f = _0x11bd74['photoURL'] || (parseInt(_0x4fc6fa) === _0x19a416 ? window['_FB'] && window['_FB']['_userData'] && window['_FB']['_userData']['photoURL'] : '');
        if (!_0x487a6f)
            continue;
        _0x57840a = !![];
        const _0x53d807 = _0x11bd74['name'] || (parseInt(_0x4fc6fa) === _0x19a416 ? _0x2b38d1 : 'Player\x20' + _0x4fc6fa);
        const _0x3204fa = _0x11bd74['accountStats'] || (parseInt(_0x4fc6fa) === _0x19a416 && window['_FB'] && window['_FB']['_userData'] ? window['_FB']['_userData'] : null);
        const _0x58e2ac = document['createElement']('div');
        _0x58e2ac['className'] = 'chat-pfp-entry';
        const _0x3b3b05 = document['createElement']('img');
        _0x3b3b05['src'] = _0x487a6f;
        _0x3b3b05['alt'] = _0x53d807;
        _0x58e2ac['appendChild'](_0x3b3b05);
        const _0x56e8f2 = document['createElement']('div');
        _0x56e8f2['className'] = 'chat-pfp-tooltip';
        let _0x367146 = '<div\x20style=\x22color:#ffcc00;margin-bottom:4px;\x22>' + _0x53d807 + '</div>';
        if (_0x3204fa) {
            _0x367146 += '<div>🏙\x20Town\x20Wins:\x20' + (_0x3204fa['townWins'] || 0x0) + '</div>';
            _0x367146 += '<div>🔪\x20Mafia\x20Wins:\x20' + (_0x3204fa['mafiaWins'] || 0x0) + '</div>';
            _0x367146 += '<div>💀\x20Deaths:\x20' + (_0x3204fa['deaths'] || 0x0) + '</div>';
            _0x367146 += '<div>📉\x20Town\x20Losses:\x20' + (_0x3204fa['townLosses'] || 0x0) + '</div>';
            _0x367146 += '<div>📉\x20Mafia\x20Losses:\x20' + (_0x3204fa['mafiaLosses'] || 0x0) + '</div>';
        }
        _0x56e8f2['innerHTML'] = _0x367146;
        _0x58e2ac['appendChild'](_0x56e8f2);
        _0x52841c['appendChild'](_0x58e2ac);
    }
    const _0x3c1636 = document['getElementById']('chat-log-wrap');
    if (_0x3c1636) {
        if (_0x57840a) {
            _0x3c1636['classList']['add']('has-profiles');
            _0x52841c['style']['display'] = 'flex';
        } else {
            _0x3c1636['classList']['remove']('has-profiles');
            _0x52841c['style']['display'] = 'none';
        }
    }
}
window['_updateChatProfilePics'] = _0x3c4204;
let _0x28064f = -0x1, _0x229e99 = -0x1, _0x557a35 = -0x1, _0x4a3b36 = 0x0;
function _0x1c528b() {
    if (!_0x19a416 || !_0x2aa407 || _0x2aa407['readyState'] !== WebSocket['OPEN'])
        return;
    const _0x268f1b = performance['now']();
    const _0x2d0e87 = _0x268f1b - _0x4a3b36;
    const _0x409cae = Math['abs'](_0x3c368c['x'] - _0x28064f) > 0.05 || Math['abs'](_0x3c368c['y'] - _0x229e99) > 0.05 || Math['abs'](_0x3c368c['angle'] - _0x557a35) > 0.02;
    if (!_0x409cae && _0x2d0e87 < 0xc8)
        return;
    if (_0x2d0e87 < 0x19)
        return;
    _0x4a3b36 = _0x268f1b;
    _0x28064f = _0x3c368c['x'];
    _0x229e99 = _0x3c368c['y'];
    _0x557a35 = _0x3c368c['angle'];
    if (!_0x19a416 || !_0x2aa407 || _0x2aa407['readyState'] !== WebSocket['OPEN'])
        return;
    _0x2aa407['send'](JSON['stringify']({
        'type': 'position_update',
        'x': _0x3c368c['x'],
        'y': _0x3c368c['y'],
        'vx': _0x3c368c['vx'],
        'vy': _0x3c368c['vy'],
        'angle': _0x3c368c['angle'],
        'scale': _0x3c368c['scale'],
        'teleportId': _0x1b59f8,
        'clientTimestamp': Date['now']()
    }));
}
function _0x230411() {
    if (_0x3c368c['isDead'])
        return;
    const _0x43a894 = _0x2b372f['MAP']['layers']['find'](_0x1d3b55 => _0x1d3b55['name'] === 'walls');
    if (!_0x43a894)
        return;
    const _0x1c6a6e = _0x3c368c['scale'];
    const _0x4c7e76 = _0x3c368c['width'] * _0x1c6a6e / 0x2;
    for (let _0x4ebcf0 = 0x0; _0x4ebcf0 < 0x3; _0x4ebcf0++) {
        let _0x536c33 = _0x3c368c['x'] + _0x3c368c['width'] / 0x2;
        let _0x1103f1 = _0x3c368c['y'] + _0x3c368c['height'] / 0x2;
        const _0x415b12 = Math['floor']((_0x536c33 - _0x4c7e76) / _0x2b372f['MAP']['tileSize']);
        const _0x2bf160 = Math['floor']((_0x536c33 + _0x4c7e76) / _0x2b372f['MAP']['tileSize']);
        const _0x10c2dd = Math['floor']((_0x1103f1 - _0x4c7e76) / _0x2b372f['MAP']['tileSize']);
        const _0x43b18f = Math['floor']((_0x1103f1 + _0x4c7e76) / _0x2b372f['MAP']['tileSize']);
        for (let _0x32aec3 = _0x10c2dd; _0x32aec3 <= _0x43b18f; _0x32aec3++) {
            for (let _0x5cc027 = _0x415b12; _0x5cc027 <= _0x2bf160; _0x5cc027++) {
                if (_0x5cc027 < 0x0 || _0x5cc027 >= _0x2b372f['MAP']['columns'] || _0x32aec3 < 0x0 || _0x32aec3 >= _0x2b372f['MAP']['rows'])
                    continue;
                if (_0x43a894['data'][_0x32aec3 * _0x2b372f['MAP']['columns'] + _0x5cc027] === 0x0)
                    continue;
                const _0xacf593 = _0x5cc027 * _0x2b372f['MAP']['tileSize'];
                const _0x381960 = _0x32aec3 * _0x2b372f['MAP']['tileSize'];
                const _0x1dca1a = _0x536c33 < _0xacf593 ? _0xacf593 : _0x536c33 > _0xacf593 + _0x2b372f['MAP']['tileSize'] ? _0xacf593 + _0x2b372f['MAP']['tileSize'] : _0x536c33;
                const _0x4d340c = _0x1103f1 < _0x381960 ? _0x381960 : _0x1103f1 > _0x381960 + _0x2b372f['MAP']['tileSize'] ? _0x381960 + _0x2b372f['MAP']['tileSize'] : _0x1103f1;
                const _0x5dce2f = _0x536c33 - _0x1dca1a;
                const _0x2ee3ad = _0x1103f1 - _0x4d340c;
                const _0x525305 = Math['sqrt'](_0x5dce2f * _0x5dce2f + _0x2ee3ad * _0x2ee3ad);
                if (_0x525305 < _0x4c7e76) {
                    if (_0x525305 === 0x0) {
                        const _0x348a83 = _0x536c33 - _0xacf593;
                        const _0x1f1fe4 = _0xacf593 + _0x2b372f['MAP']['tileSize'] - _0x536c33;
                        const _0x53632e = _0x1103f1 - _0x381960;
                        const _0x45d276 = _0x381960 + _0x2b372f['MAP']['tileSize'] - _0x1103f1;
                        const _0x22cfc6 = Math['min'](_0x348a83, _0x1f1fe4, _0x53632e, _0x45d276);
                        if (_0x22cfc6 === _0x348a83)
                            _0x536c33 = _0xacf593 - _0x4c7e76;
                        else if (_0x22cfc6 === _0x1f1fe4)
                            _0x536c33 = _0xacf593 + _0x2b372f['MAP']['tileSize'] + _0x4c7e76;
                        else if (_0x22cfc6 === _0x53632e)
                            _0x1103f1 = _0x381960 - _0x4c7e76;
                        else
                            _0x1103f1 = _0x381960 + _0x2b372f['MAP']['tileSize'] + _0x4c7e76;
                    } else {
                        const _0x3b250d = _0x4c7e76 - _0x525305;
                        _0x536c33 += _0x5dce2f / _0x525305 * _0x3b250d;
                        _0x1103f1 += _0x2ee3ad / _0x525305 * _0x3b250d;
                        const _0x58c4c2 = _0x3c368c['vx'] * (_0x5dce2f / _0x525305) + _0x3c368c['vy'] * (_0x2ee3ad / _0x525305);
                        if (_0x58c4c2 < 0x0) {
                            _0x3c368c['vx'] -= _0x58c4c2 * (_0x5dce2f / _0x525305);
                            _0x3c368c['vy'] -= _0x58c4c2 * (_0x2ee3ad / _0x525305);
                        }
                    }
                }
            }
        }
        _0x3c368c['x'] = _0x536c33 - _0x3c368c['width'] / 0x2;
        _0x3c368c['y'] = _0x1103f1 - _0x3c368c['height'] / 0x2;
    }
}
function _0x497ce2(_0x1ddbea) {
    const _0x5dc33e = _0x2b372f['MAP']['layers']['find'](_0x481786 => _0x481786['name'] === 'walls');
    if (!_0x5dc33e)
        return;
    const _0x5508d4 = _0x1ddbea['width'] / 0x2;
    for (let _0x2c935e = 0x0; _0x2c935e < 0x2; _0x2c935e++) {
        let _0x59df47 = _0x1ddbea['x'] + _0x1ddbea['width'] / 0x2;
        let _0x3d6d81 = _0x1ddbea['y'] + _0x1ddbea['height'] / 0x2;
        const _0x421c4c = Math['floor']((_0x59df47 - _0x5508d4) / _0x2b372f['MAP']['tileSize']);
        const _0x50e50e = Math['floor']((_0x59df47 + _0x5508d4) / _0x2b372f['MAP']['tileSize']);
        const _0x268036 = Math['floor']((_0x3d6d81 - _0x5508d4) / _0x2b372f['MAP']['tileSize']);
        const _0x398f80 = Math['floor']((_0x3d6d81 + _0x5508d4) / _0x2b372f['MAP']['tileSize']);
        for (let _0x2461dd = _0x268036; _0x2461dd <= _0x398f80; _0x2461dd++) {
            for (let _0x41c389 = _0x421c4c; _0x41c389 <= _0x50e50e; _0x41c389++) {
                if (_0x41c389 < 0x0 || _0x41c389 >= _0x2b372f['MAP']['columns'] || _0x2461dd < 0x0 || _0x2461dd >= _0x2b372f['MAP']['rows'])
                    continue;
                if (_0x5dc33e['data'][_0x2461dd * _0x2b372f['MAP']['columns'] + _0x41c389] === 0x0)
                    continue;
                const _0x536e59 = _0x41c389 * _0x2b372f['MAP']['tileSize'];
                const _0x5018af = _0x2461dd * _0x2b372f['MAP']['tileSize'];
                const _0x48c2e5 = _0x59df47 < _0x536e59 ? _0x536e59 : _0x59df47 > _0x536e59 + _0x2b372f['MAP']['tileSize'] ? _0x536e59 + _0x2b372f['MAP']['tileSize'] : _0x59df47;
                const _0x53851d = _0x3d6d81 < _0x5018af ? _0x5018af : _0x3d6d81 > _0x5018af + _0x2b372f['MAP']['tileSize'] ? _0x5018af + _0x2b372f['MAP']['tileSize'] : _0x3d6d81;
                const _0x3ce6db = _0x59df47 - _0x48c2e5;
                const _0x7c9538 = _0x3d6d81 - _0x53851d;
                const _0x4a932a = Math['sqrt'](_0x3ce6db * _0x3ce6db + _0x7c9538 * _0x7c9538);
                if (_0x4a932a < _0x5508d4) {
                    if (_0x4a932a === 0x0) {
                        const _0x3cd8e1 = _0x59df47 - _0x536e59;
                        const _0x124fd2 = _0x536e59 + _0x2b372f['MAP']['tileSize'] - _0x59df47;
                        const _0x4c7d5e = _0x3d6d81 - _0x5018af;
                        const _0x31fce9 = _0x5018af + _0x2b372f['MAP']['tileSize'] - _0x3d6d81;
                        const _0x46a697 = Math['min'](_0x3cd8e1, _0x124fd2, _0x4c7d5e, _0x31fce9);
                        if (_0x46a697 === _0x3cd8e1)
                            _0x59df47 = _0x536e59 - _0x5508d4;
                        else if (_0x46a697 === _0x124fd2)
                            _0x59df47 = _0x536e59 + _0x2b372f['MAP']['tileSize'] + _0x5508d4;
                        else if (_0x46a697 === _0x4c7d5e)
                            _0x3d6d81 = _0x5018af - _0x5508d4;
                        else
                            _0x3d6d81 = _0x5018af + _0x2b372f['MAP']['tileSize'] + _0x5508d4;
                    } else {
                        const _0x3a96d2 = _0x5508d4 - _0x4a932a;
                        _0x59df47 += _0x3ce6db / _0x4a932a * _0x3a96d2;
                        _0x3d6d81 += _0x7c9538 / _0x4a932a * _0x3a96d2;
                    }
                }
            }
        }
        _0x1ddbea['x'] = _0x59df47 - _0x1ddbea['width'] / 0x2;
        _0x1ddbea['y'] = _0x3d6d81 - _0x1ddbea['height'] / 0x2;
    }
}
function _0x4a0afc(_0x522181) {
    const _0x2117ac = _0x522181['width'] / 0x2;
    for (let _0x3a4e5b = 0x0; _0x3a4e5b < 0x2; _0x3a4e5b++) {
        let _0x29540a = _0x522181['x'] + _0x522181['width'] / 0x2;
        let _0x2f7575 = _0x522181['y'] + _0x522181['height'] / 0x2;
        for (const _0xa14f17 of _0x2b372f['ENTITIES']) {
            const _0x317c7b = _0x29540a < _0xa14f17['x'] ? _0xa14f17['x'] : _0x29540a > _0xa14f17['x'] + _0xa14f17['w'] ? _0xa14f17['x'] + _0xa14f17['w'] : _0x29540a;
            const _0x4669ff = _0x2f7575 < _0xa14f17['y'] ? _0xa14f17['y'] : _0x2f7575 > _0xa14f17['y'] + _0xa14f17['h'] ? _0xa14f17['y'] + _0xa14f17['h'] : _0x2f7575;
            const _0x323d22 = _0x29540a - _0x317c7b;
            const _0x35e5e9 = _0x2f7575 - _0x4669ff;
            const _0x37d51f = Math['sqrt'](_0x323d22 * _0x323d22 + _0x35e5e9 * _0x35e5e9);
            if (_0x37d51f < _0x2117ac && _0x37d51f > 0x0) {
                const _0x5e890c = _0x2117ac - _0x37d51f;
                const _0x287338 = _0x323d22 / _0x37d51f;
                const _0x380cd9 = _0x35e5e9 / _0x37d51f;
                _0x29540a += _0x287338 * _0x5e890c;
                _0x2f7575 += _0x380cd9 * _0x5e890c;
            } else if (_0x37d51f === 0x0) {
                const _0x33a35b = _0x29540a - _0xa14f17['x'];
                const _0x154c7c = _0xa14f17['x'] + _0xa14f17['w'] - _0x29540a;
                const _0x322d27 = _0x2f7575 - _0xa14f17['y'];
                const _0x3fee52 = _0xa14f17['y'] + _0xa14f17['h'] - _0x2f7575;
                const _0x22804e = Math['min'](_0x33a35b, _0x154c7c, _0x322d27, _0x3fee52);
                if (_0x22804e === _0x33a35b)
                    _0x29540a = _0xa14f17['x'] - _0x2117ac;
                else if (_0x22804e === _0x154c7c)
                    _0x29540a = _0xa14f17['x'] + _0xa14f17['w'] + _0x2117ac;
                else if (_0x22804e === _0x322d27)
                    _0x2f7575 = _0xa14f17['y'] - _0x2117ac;
                else
                    _0x2f7575 = _0xa14f17['y'] + _0xa14f17['h'] + _0x2117ac;
            }
        }
        _0x522181['x'] = _0x29540a - _0x522181['width'] / 0x2;
        _0x522181['y'] = _0x2f7575 - _0x522181['height'] / 0x2;
    }
}
function _0x9ad7ba() {
    if (_0x3c368c['isDead'])
        return;
    const _0x31f730 = _0x3c368c['width'] / 0x2;
    const _0x57db30 = _0x3c368c['x'] + _0x3c368c['width'] / 0x2;
    const _0x37152d = _0x3c368c['y'] + _0x3c368c['height'] / 0x2;
    for (const _0x3abd2f in _0x4666d8) {
        const _0x2b0c74 = _0x4666d8[_0x3abd2f];
        if (_0x2b0c74['isDead'])
            continue;
        const _0x1402ae = _0x2b0c74['width'] / 0x2;
        const _0x18fcee = _0x31f730 + _0x1402ae;
        const _0x350f05 = (_0x2b0c74['renderX'] ?? _0x2b0c74['x']) + _0x2b0c74['width'] / 0x2;
        const _0x2e7455 = (_0x2b0c74['renderY'] ?? _0x2b0c74['y']) + _0x2b0c74['height'] / 0x2;
        const _0x55e1fa = _0x57db30 - _0x350f05;
        const _0x35c3a8 = _0x37152d - _0x2e7455;
        const _0x163920 = Math['sqrt'](_0x55e1fa * _0x55e1fa + _0x35c3a8 * _0x35c3a8);
        if (_0x163920 > 0x0 && _0x163920 < _0x18fcee) {
            const _0x167950 = _0x18fcee - _0x163920;
            const _0x24e820 = _0x55e1fa / _0x163920;
            const _0x2b1e81 = _0x35c3a8 / _0x163920;
            _0x3c368c['x'] += _0x24e820 * (_0x167950 * 0.25);
            _0x3c368c['y'] += _0x2b1e81 * (_0x167950 * 0.25);
            _0x2b0c74['x'] -= _0x24e820 * (_0x167950 * 0.75);
            _0x2b0c74['y'] -= _0x2b1e81 * (_0x167950 * 0.75);
            _0x497ce2(_0x2b0c74);
            _0x4a0afc(_0x2b0c74);
            if (_0x2b0c74['renderX'] !== undefined) {
                _0x2b0c74['renderX'] = _0x2b0c74['x'];
                _0x2b0c74['renderY'] = _0x2b0c74['y'];
            }
            const _0x348135 = _0x3c368c['vx'] * _0x24e820 + _0x3c368c['vy'] * _0x2b1e81;
            if (_0x348135 < 0x0) {
                _0x3c368c['vx'] -= _0x348135 * _0x24e820 * 0.25;
                _0x3c368c['vy'] -= _0x348135 * _0x2b1e81 * 0.25;
            }
        }
    }
    _0x230411();
    _0x58af1f();
}
function _0x58af1f() {
    if (_0x3c368c['isDead'])
        return;
    const _0x5c3a88 = _0x3c368c['scale'];
    const _0x3895ba = _0x3c368c['width'] * _0x5c3a88 / 0x2;
    for (let _0x55bcbb = 0x0; _0x55bcbb < 0x2; _0x55bcbb++) {
        let _0x3f7ca9 = _0x3c368c['x'] + _0x3c368c['width'] / 0x2;
        let _0x235853 = _0x3c368c['y'] + _0x3c368c['height'] / 0x2;
        for (const _0x2cba94 of _0x2b372f['ENTITIES']) {
            const _0xf3027e = _0x3f7ca9 < _0x2cba94['x'] ? _0x2cba94['x'] : _0x3f7ca9 > _0x2cba94['x'] + _0x2cba94['w'] ? _0x2cba94['x'] + _0x2cba94['w'] : _0x3f7ca9;
            const _0x3c710f = _0x235853 < _0x2cba94['y'] ? _0x2cba94['y'] : _0x235853 > _0x2cba94['y'] + _0x2cba94['h'] ? _0x2cba94['y'] + _0x2cba94['h'] : _0x235853;
            const _0x5ce912 = _0x3f7ca9 - _0xf3027e;
            const _0xc4efb0 = _0x235853 - _0x3c710f;
            const _0x4e7fcf = Math['sqrt'](_0x5ce912 * _0x5ce912 + _0xc4efb0 * _0xc4efb0);
            if (_0x4e7fcf < _0x3895ba && _0x4e7fcf > 0x0) {
                const _0x5d6b3b = _0x3895ba - _0x4e7fcf;
                const _0x1a251b = _0x5ce912 / _0x4e7fcf;
                const _0x36b2b4 = _0xc4efb0 / _0x4e7fcf;
                _0x3f7ca9 += _0x1a251b * _0x5d6b3b;
                _0x235853 += _0x36b2b4 * _0x5d6b3b;
                const _0xde2395 = _0x3c368c['vx'] * _0x1a251b + _0x3c368c['vy'] * _0x36b2b4;
                if (_0xde2395 < 0x0) {
                    _0x3c368c['vx'] -= _0xde2395 * _0x1a251b;
                    _0x3c368c['vy'] -= _0xde2395 * _0x36b2b4;
                }
            } else if (_0x4e7fcf === 0x0) {
                const _0x4452b7 = _0x3f7ca9 - _0x2cba94['x'];
                const _0x204264 = _0x2cba94['x'] + _0x2cba94['w'] - _0x3f7ca9;
                const _0x386a0c = _0x235853 - _0x2cba94['y'];
                const _0x3cdc2d = _0x2cba94['y'] + _0x2cba94['h'] - _0x235853;
                const _0x1514da = Math['min'](_0x4452b7, _0x204264, _0x386a0c, _0x3cdc2d);
                if (_0x1514da === _0x4452b7)
                    _0x3f7ca9 = _0x2cba94['x'] - _0x3895ba;
                else if (_0x1514da === _0x204264)
                    _0x3f7ca9 = _0x2cba94['x'] + _0x2cba94['w'] + _0x3895ba;
                else if (_0x1514da === _0x386a0c)
                    _0x235853 = _0x2cba94['y'] - _0x3895ba;
                else
                    _0x235853 = _0x2cba94['y'] + _0x2cba94['h'] + _0x3895ba;
            }
        }
        _0x3c368c['x'] = _0x3f7ca9 - _0x3c368c['width'] / 0x2;
        _0x3c368c['y'] = _0x235853 - _0x3c368c['height'] / 0x2;
    }
}
function _0x5141e1(_0x8b966f, _0x237c91) {
    const _0x3a475 = _0x2b372f['MAP']['layers']['find'](_0x54a452 => _0x54a452['name'] === 'trees');
    if (!_0x3a475)
        return ![];
    const _0x2515c5 = Math['floor'](_0x8b966f / _0x2b372f['MAP']['tileSize']);
    const _0x1acc97 = Math['floor'](_0x237c91 / _0x2b372f['MAP']['tileSize']);
    if (_0x2515c5 < 0x0 || _0x2515c5 >= _0x2b372f['MAP']['columns'] || _0x1acc97 < 0x0 || _0x1acc97 >= _0x2b372f['MAP']['rows'])
        return ![];
    return _0x3a475['data'][_0x1acc97 * _0x2b372f['MAP']['columns'] + _0x2515c5] === 0xb;
}
let _0x25e8e2 = null;
function _0x1c20eb() {
    const _0x5e53d2 = _0x2b372f['MAP'];
    const _0xb943a3 = _0x5e53d2['layers']['find'](_0x3619b1 => _0x3619b1['name'] === 'floor2');
    const _0xad9fcd = _0x5e53d2['layers']['find'](_0xfb514f => _0xfb514f['name'] === 'walls');
    if (!_0xb943a3 || !_0xad9fcd) {
        _0x25e8e2 = null;
        return;
    }
    const _0x48c263 = _0x5e53d2['columns'];
    const _0x4de82f = _0x5e53d2['rows'];
    const _0x2eed4a = [];
    const _0x7c2d77 = [];
    const _0xc12a02 = new Set();
    for (let _0x32c9c8 = 0x0; _0x32c9c8 < _0x4de82f; _0x32c9c8++) {
        for (let _0x141684 = 0x0; _0x141684 < _0x48c263; _0x141684++) {
            const _0x4767ee = _0x32c9c8 * _0x48c263 + _0x141684;
            const _0x4f5f98 = _0xb943a3['data'][_0x4767ee];
            const _0x4594e3 = _0xad9fcd['data'][_0x4767ee];
            if (_0x4f5f98 === 0x2 || _0x4f5f98 === 0x4) {
                _0x2eed4a['push']({
                    'c': _0x141684,
                    'r': _0x32c9c8
                });
                if (_0x4594e3 !== 0x0)
                    _0x7c2d77['push']({
                        'c': _0x141684,
                        'r': _0x32c9c8
                    });
            }
            if (_0x4594e3 !== 0x0)
                _0xc12a02['add'](_0x141684 + ',' + _0x32c9c8);
        }
    }
    const _0x326588 = new Set(_0x2eed4a['map'](_0x3bf917 => _0x3bf917['c'] + ',' + _0x3bf917['r']));
    const _0x15db44 = [
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
                c: _0x5459ae,
                r: _0x384ae3
            } of _0x2eed4a) {
        for (const [_0x203f92, _0x4b3bed] of _0x15db44) {
            const _0x3fed6a = _0x5459ae + _0x203f92, _0x347823 = _0x384ae3 + _0x4b3bed;
            const _0x7b0902 = _0x3fed6a + ',' + _0x347823;
            if (!_0x326588['has'](_0x7b0902))
                _0xc12a02['add'](_0x7b0902);
        }
    }
    _0x25e8e2 = {
        'wallSet': _0xc12a02,
        'floorTiles': _0x2eed4a,
        'wallTiles': _0x7c2d77,
        'interiorSet': _0x326588
    };
}
function _0x96cc0e() {
    const _0x353bac = _0x2b372f['MAP']['layers']['find'](_0x23de7d => _0x23de7d['name'] === 'floor2');
    if (!_0x353bac)
        return ![];
    const _0x349685 = Math['floor']((_0x3c368c['x'] + _0x3c368c['width'] / 0x2) / _0x2b372f['MAP']['tileSize']);
    const _0x2be0aa = Math['floor']((_0x3c368c['y'] + _0x3c368c['height'] / 0x2) / _0x2b372f['MAP']['tileSize']);
    if (_0x349685 < 0x0 || _0x349685 >= _0x2b372f['MAP']['columns'] || _0x2be0aa < 0x0 || _0x2be0aa >= _0x2b372f['MAP']['rows'])
        return ![];
    const _0x43a14f = _0x353bac['data'][_0x2be0aa * _0x2b372f['MAP']['columns'] + _0x349685];
    return _0x43a14f === 0x2;
}
function _0x11a245() {
    if (_0x3c368c['isDead']) {
        _0x2b372f['SHADOW']['polygon'] = null;
        return;
    }
    const _0x117453 = _0x2b372f['MAP'];
    const _0x2e261a = _0x2b372f['SHADOW'];
    const _0x224966 = _0x117453['tileSize'];
    if (!_0x25e8e2)
        _0x1c20eb();
    if (!_0x25e8e2) {
        _0x2e261a['polygon'] = null;
        return;
    }
    const {
        wallSet: _0x13c477,
        floorTiles: _0x28bc17
    } = _0x25e8e2;
    if (_0x28bc17['length'] === 0x0) {
        _0x2e261a['polygon'] = null;
        return;
    }
    if (!_0x96cc0e()) {
        _0x2e261a['polygon'] = null;
        return;
    }
    const _0x5c7b22 = _0x3c368c['x'] + _0x3c368c['width'] / 0x2;
    const _0x400029 = _0x3c368c['y'] + _0x3c368c['height'] / 0x2;
    if (!_0x25e8e2['_bounds']) {
        let _0x164ba8 = Infinity, _0x321e3c = -Infinity, _0x2c3107 = Infinity, _0xd7df40 = -Infinity;
        for (const {
                    c: _0x350548,
                    r: _0x25f915
                } of _0x28bc17) {
            if (_0x350548 < _0x164ba8)
                _0x164ba8 = _0x350548;
            if (_0x350548 > _0x321e3c)
                _0x321e3c = _0x350548;
            if (_0x25f915 < _0x2c3107)
                _0x2c3107 = _0x25f915;
            if (_0x25f915 > _0xd7df40)
                _0xd7df40 = _0x25f915;
        }
        _0x25e8e2['_bounds'] = {
            'minC': Math['max'](0x0, _0x164ba8 - 0x1),
            'maxC': Math['min'](_0x117453['columns'] - 0x1, _0x321e3c + 0x1),
            'minR': Math['max'](0x0, _0x2c3107 - 0x1),
            'maxR': Math['min'](_0x117453['rows'] - 0x1, _0xd7df40 + 0x1)
        };
        const _0x5822bb = [];
        for (let _0x27f4d8 = _0x25e8e2['_bounds']['minR']; _0x27f4d8 <= _0x25e8e2['_bounds']['maxR']; _0x27f4d8++) {
            for (let _0x99d161 = _0x25e8e2['_bounds']['minC']; _0x99d161 <= _0x25e8e2['_bounds']['maxC']; _0x99d161++) {
                if (_0x13c477['has'](_0x99d161 + ',' + _0x27f4d8))
                    _0x5822bb['push'](_0x99d161, _0x27f4d8);
            }
        }
        _0x25e8e2['_wallArr'] = _0x5822bb;
    }
    const {
        minC: _0x707429,
        maxC: _0x56d81b,
        minR: _0x30dd72,
        maxR: _0x4c5b5e
    } = _0x25e8e2['_bounds'];
    const _0x43139a = _0x25e8e2['_wallArr'];
    const _0x29717f = 0.001;
    const _0x4c2e09 = new Set();
    const _0x177377 = [];
    for (let _0x4e3e4a = 0x0; _0x4e3e4a < _0x43139a['length']; _0x4e3e4a += 0x2) {
        const _0x3459d5 = _0x43139a[_0x4e3e4a], _0x2e511a = _0x43139a[_0x4e3e4a + 0x1];
        const _0x324c21 = [
            _0x3459d5 * _0x224966,
            _0x2e511a * _0x224966,
            _0x3459d5 * _0x224966 + _0x224966,
            _0x2e511a * _0x224966,
            _0x3459d5 * _0x224966,
            _0x2e511a * _0x224966 + _0x224966,
            _0x3459d5 * _0x224966 + _0x224966,
            _0x2e511a * _0x224966 + _0x224966
        ];
        for (let _0x37ecac = 0x0; _0x37ecac < _0x324c21['length']; _0x37ecac += 0x2) {
            const _0x103bbf = _0x324c21[_0x37ecac], _0x48d334 = _0x324c21[_0x37ecac + 0x1];
            const _0x4b6575 = Math['atan2'](_0x48d334 - _0x400029, _0x103bbf - _0x5c7b22);
            const _0x2c3405 = Math['round'](_0x4b6575 * 0x4e20);
            if (!_0x4c2e09['has'](_0x2c3405 - 0x1)) {
                _0x4c2e09['add'](_0x2c3405 - 0x1);
                _0x177377['push'](_0x4b6575 - _0x29717f);
            }
            if (!_0x4c2e09['has'](_0x2c3405)) {
                _0x4c2e09['add'](_0x2c3405);
                _0x177377['push'](_0x4b6575);
            }
            if (!_0x4c2e09['has'](_0x2c3405 + 0x1)) {
                _0x4c2e09['add'](_0x2c3405 + 0x1);
                _0x177377['push'](_0x4b6575 + _0x29717f);
            }
        }
    }
    _0x177377['sort']((_0x3bd213, _0xd63dfc) => _0x3bd213 - _0xd63dfc);
    const _0x41743b = Math['hypot']((_0x56d81b - _0x707429 + 0x2) * _0x224966, (_0x4c5b5e - _0x30dd72 + 0x2) * _0x224966);
    const _0xf2d9b2 = _0x4ae9f9 => {
        const _0x5a34ad = Math['cos'](_0x4ae9f9);
        const _0x476178 = Math['sin'](_0x4ae9f9);
        let _0x379c81 = _0x41743b;
        for (let _0x3a7067 = 0x0; _0x3a7067 < _0x43139a['length']; _0x3a7067 += 0x2) {
            const _0x37169f = _0x43139a[_0x3a7067], _0x1901d3 = _0x43139a[_0x3a7067 + 0x1];
            const _0x4c808e = _0x37169f * _0x224966, _0xf3c677 = _0x1901d3 * _0x224966;
            const _0x77155d = _0x4c808e + _0x224966, _0xeaddff = _0xf3c677 + _0x224966;
            const _0x2126a7 = _0x4c808e + _0x224966 * 0.5, _0x5499c5 = _0xf3c677 + _0x224966 * 0.5;
            const _0x1eaa1d = Math['abs'](_0x2126a7 - _0x5c7b22) + Math['abs'](_0x5499c5 - _0x400029);
            if (_0x1eaa1d > _0x379c81 + _0x224966 * 1.5)
                continue;
            let _0x4c294e, _0x3be3a8, _0xe12d33;
            _0x4c294e = -_0x476178 * _0x224966;
            if (Math['abs'](_0x4c294e) >= 1e-10) {
                _0x3be3a8 = -(_0xf3c677 - _0x400029) * _0x224966 / _0x4c294e;
                _0xe12d33 = ((_0x4c808e - _0x5c7b22) * _0x476178 - (_0xf3c677 - _0x400029) * _0x5a34ad) / _0x4c294e;
                if (_0x3be3a8 > 0.001 && _0xe12d33 >= 0x0 && _0xe12d33 <= 0x1 && _0x3be3a8 < _0x379c81)
                    _0x379c81 = _0x3be3a8;
            }
            _0x4c294e = _0x5a34ad * _0x224966;
            if (Math['abs'](_0x4c294e) >= 1e-10) {
                _0x3be3a8 = (_0x77155d - _0x5c7b22) * _0x224966 / _0x4c294e;
                _0xe12d33 = ((_0x77155d - _0x5c7b22) * _0x476178 - (_0xf3c677 - _0x400029) * _0x5a34ad) / _0x4c294e;
                if (_0x3be3a8 > 0.001 && _0xe12d33 >= 0x0 && _0xe12d33 <= 0x1 && _0x3be3a8 < _0x379c81)
                    _0x379c81 = _0x3be3a8;
            }
            _0x4c294e = _0x476178 * _0x224966;
            if (Math['abs'](_0x4c294e) >= 1e-10) {
                _0x3be3a8 = (_0xeaddff - _0x400029) * _0x224966 / _0x4c294e;
                _0xe12d33 = ((_0x77155d - _0x5c7b22) * _0x476178 - (_0xeaddff - _0x400029) * _0x5a34ad) / _0x4c294e;
                if (_0x3be3a8 > 0.001 && _0xe12d33 >= 0x0 && _0xe12d33 <= 0x1 && _0x3be3a8 < _0x379c81)
                    _0x379c81 = _0x3be3a8;
            }
            _0x4c294e = -_0x5a34ad * _0x224966;
            if (Math['abs'](_0x4c294e) >= 1e-10) {
                _0x3be3a8 = -(_0x4c808e - _0x5c7b22) * _0x224966 / _0x4c294e;
                _0xe12d33 = ((_0x4c808e - _0x5c7b22) * _0x476178 - (_0xeaddff - _0x400029) * _0x5a34ad) / _0x4c294e;
                if (_0x3be3a8 > 0.001 && _0xe12d33 >= 0x0 && _0xe12d33 <= 0x1 && _0x3be3a8 < _0x379c81)
                    _0x379c81 = _0x3be3a8;
            }
        }
        const _0x59df49 = _0x379c81 < _0x41743b ? _0x379c81 + 0x2 : _0x379c81;
        return {
            'x': _0x5c7b22 + _0x5a34ad * _0x59df49,
            'y': _0x400029 + _0x476178 * _0x59df49
        };
    };
    const _0x408f6b = [];
    for (let _0x2761bf = 0x0; _0x2761bf < _0x177377['length']; _0x2761bf++) {
        const _0x45bc51 = _0xf2d9b2(_0x177377[_0x2761bf]);
        _0x408f6b['push'](_0x45bc51['x'], _0x45bc51['y']);
    }
    _0x2e261a['polygon'] = _0x408f6b['length'] >= 0x6 ? _0x408f6b : null;
}
function _0x418af2(_0x43c54a, _0x565d6e, _0x3b7770) {
    if (_0x3c368c['isDead'])
        return;
    if (!_0x25e8e2)
        return;
    const {
        floorTiles: _0x37bda0,
        wallTiles: _0x3e4ed3
    } = _0x25e8e2;
    if (_0x37bda0['length'] === 0x0)
        return;
    const _0x3fe4a3 = _0x2b372f['SHADOW'];
    const _0x84cab7 = _0x2b372f['MAP']['tileSize'];
    const _0x484ff3 = _0x2b372f['CAMERA']['width'];
    const _0x3cb5a1 = _0x2b372f['CAMERA']['height'];
    if (!_0x2b372f['SHADOW']['_buf'] || _0x2b372f['SHADOW']['_buf']['width'] !== _0x484ff3 || _0x2b372f['SHADOW']['_buf']['height'] !== _0x3cb5a1) {
        _0x2b372f['SHADOW']['_buf'] = document['createElement']('canvas');
        _0x2b372f['SHADOW']['_buf']['width'] = _0x484ff3;
        _0x2b372f['SHADOW']['_buf']['height'] = _0x3cb5a1;
    }
    const _0x3653c8 = _0x2b372f['SHADOW']['_buf'];
    const _0x5d7b9b = _0x3653c8['getContext']('2d');
    _0x5d7b9b['clearRect'](0x0, 0x0, _0x484ff3, _0x3cb5a1);
    _0x5d7b9b['fillStyle'] = 'rgba(0,0,0,0.92)';
    _0x5d7b9b['beginPath']();
    for (const {
                c: _0x1a88b7,
                r: _0x385fb2
            } of _0x37bda0) {
        const _0x3c7541 = Math['round'](_0x1a88b7 * _0x84cab7 - _0x565d6e), _0x3c073d = Math['round'](_0x385fb2 * _0x84cab7 - _0x3b7770);
        if (_0x3c7541 > _0x484ff3 || _0x3c073d > _0x3cb5a1 || _0x3c7541 + _0x84cab7 < 0x0 || _0x3c073d + _0x84cab7 < 0x0)
            continue;
        _0x5d7b9b['rect'](_0x3c7541, _0x3c073d, _0x84cab7 + 0x1, _0x84cab7 + 0x1);
    }
    _0x5d7b9b['fill']();
    if (_0x3e4ed3['length'] > 0x0) {
        _0x5d7b9b['globalCompositeOperation'] = 'destination-out';
        _0x5d7b9b['fillStyle'] = 'rgba(0,0,0,1)';
        _0x5d7b9b['beginPath']();
        for (const {
                    c: _0x4b49be,
                    r: _0x308cc1
                } of _0x3e4ed3) {
            const _0x502345 = Math['round'](_0x4b49be * _0x84cab7 - _0x565d6e), _0x843ea0 = Math['round'](_0x308cc1 * _0x84cab7 - _0x3b7770);
            if (_0x502345 > _0x484ff3 || _0x843ea0 > _0x3cb5a1 || _0x502345 + _0x84cab7 < 0x0 || _0x843ea0 + _0x84cab7 < 0x0)
                continue;
            _0x5d7b9b['rect'](_0x502345, _0x843ea0, _0x84cab7, _0x84cab7);
        }
        _0x5d7b9b['fill']();
        _0x5d7b9b['globalCompositeOperation'] = 'source-over';
    }
    if (_0x3fe4a3['polygon'] && _0x3fe4a3['polygon']['length'] >= 0x6) {
        _0x5d7b9b['globalCompositeOperation'] = 'destination-out';
        const _0xe702f0 = _0x3fe4a3['polygon'];
        _0x5d7b9b['save']();
        _0x5d7b9b['shadowBlur'] = 0xa;
        _0x5d7b9b['shadowColor'] = 'rgba(0,0,0,1)';
        _0x5d7b9b['beginPath']();
        _0x5d7b9b['moveTo'](_0xe702f0[0x0] - _0x565d6e, _0xe702f0[0x1] - _0x3b7770);
        for (let _0x39961d = 0x2; _0x39961d < _0xe702f0['length']; _0x39961d += 0x2) {
            _0x5d7b9b['lineTo'](_0xe702f0[_0x39961d] - _0x565d6e, _0xe702f0[_0x39961d + 0x1] - _0x3b7770);
        }
        _0x5d7b9b['closePath']();
        _0x5d7b9b['fill']();
        _0x5d7b9b['restore']();
        _0x5d7b9b['beginPath']();
        _0x5d7b9b['moveTo'](_0xe702f0[0x0] - _0x565d6e, _0xe702f0[0x1] - _0x3b7770);
        for (let _0x1fe47b = 0x2; _0x1fe47b < _0xe702f0['length']; _0x1fe47b += 0x2) {
            _0x5d7b9b['lineTo'](_0xe702f0[_0x1fe47b] - _0x565d6e, _0xe702f0[_0x1fe47b + 0x1] - _0x3b7770);
        }
        _0x5d7b9b['closePath']();
        _0x5d7b9b['fill']();
        _0x5d7b9b['globalCompositeOperation'] = 'source-over';
    }
    _0x43c54a['drawImage'](_0x3653c8, 0x0, 0x0);
}
function _0x4e42b4(_0xf234a8) {
    let _0x126c3d = 0x0, _0x5d92cf = 0x0;
    const _0x3a8092 = _0x2b372f['INPUTS']['mouseX'] / _0x2b372f['SYSTEM']['viewScale'];
    const _0xf95d6f = _0x2b372f['INPUTS']['mouseY'] / _0x2b372f['SYSTEM']['viewScale'];
    const _0x47e1f9 = _0x3c368c['x'] - _0x2b372f['CAMERA']['x'] + _0x3c368c['width'] / 0x2;
    const _0x28eb96 = _0x3c368c['y'] - _0x2b372f['CAMERA']['y'] + _0x3c368c['height'] / 0x2;
    const _0x51ecb9 = Math['atan2'](_0xf95d6f - _0x28eb96, _0x3a8092 - _0x47e1f9);
    if (_0x106db7 !== 0x0 || _0x198710 !== 0x0) {
        _0x126c3d = _0x106db7;
        _0x5d92cf = _0x198710;
    } else if (_0x347dee) {
        let _0x107a20 = 0x0, _0x5d106a = 0x0;
        if (_0x2b372f['INPUTS']['keys']['w'] || _0x2b372f['INPUTS']['keys']['arrowup'])
            _0x107a20 += 0x1;
        if (_0x2b372f['INPUTS']['keys']['s'] || _0x2b372f['INPUTS']['keys']['arrowdown'])
            _0x107a20 -= 0x1;
        if (_0x2b372f['INPUTS']['keys']['d'] || _0x2b372f['INPUTS']['keys']['arrowright'])
            _0x5d106a += 0x1;
        if (_0x2b372f['INPUTS']['keys']['a'] || _0x2b372f['INPUTS']['keys']['arrowleft'])
            _0x5d106a -= 0x1;
        if (_0x107a20 !== 0x0 || _0x5d106a !== 0x0) {
            const _0x3f98ca = _0x51ecb9 + Math['atan2'](_0x5d106a, _0x107a20);
            _0x126c3d = Math['cos'](_0x3f98ca);
            _0x5d92cf = Math['sin'](_0x3f98ca);
        }
    } else {
        if (_0x2b372f['INPUTS']['keys']['w'] || _0x2b372f['INPUTS']['keys']['arrowup'])
            _0x5d92cf -= 0x1;
        if (_0x2b372f['INPUTS']['keys']['s'] || _0x2b372f['INPUTS']['keys']['arrowdown'])
            _0x5d92cf += 0x1;
        if (_0x2b372f['INPUTS']['keys']['a'] || _0x2b372f['INPUTS']['keys']['arrowleft'])
            _0x126c3d -= 0x1;
        if (_0x2b372f['INPUTS']['keys']['d'] || _0x2b372f['INPUTS']['keys']['arrowright'])
            _0x126c3d += 0x1;
        const _0x9006da = _0x126c3d !== 0x0 || _0x5d92cf !== 0x0;
        if (_0x9006da) {
            const _0x4b955b = Math['sqrt'](_0x126c3d * _0x126c3d + _0x5d92cf * _0x5d92cf);
            _0x126c3d /= _0x4b955b;
            _0x5d92cf /= _0x4b955b;
        }
    }
    if (_0x2b372f['GAME_STATE'] === 'NIGHT' && _0x3de780 === 'Skinwalker') {
        if (_0x2b372f['NIGHT_ABILITY_OPEN'] || !_0x2b372f['CURRENT_TARGET']) {
            _0x126c3d = 0x0;
            _0x5d92cf = 0x0;
            _0x3c368c['vx'] = 0x0;
            _0x3c368c['vy'] = 0x0;
            _0x3c368c['x'] = _0x2b372f['MAP']['columns'] * _0x2b372f['MAP']['tileSize'] / 0x2 - _0x3c368c['width'] / 0x2;
            _0x3c368c['y'] = _0x2b372f['MAP']['rows'] * _0x2b372f['MAP']['tileSize'] / 0x2 - _0x3c368c['height'] / 0x2;
        }
    }
    const _0x144a64 = _0x126c3d !== 0x0 || _0x5d92cf !== 0x0;
    const _0x21cb39 = (_0x2b372f['INPUTS']['keys']['shift'] || _0x3c4448 || _0x3231d2) && _0x144a64;
    _0x3c368c['bopTimer'] = _0x21cb39 ? _0x3c368c['bopTimer'] + _0xf234a8 : 0x0;
    _0x3c368c['scale'] = 0x1 + (_0x3c368c['bopTimer'] > 0x0 ? Math['sin'](_0x3c368c['bopTimer'] * 0xf) * 0.05 : 0x0);
    const _0x19a7b9 = Math['pow'](0.001, _0xf234a8);
    const _0x2a91e7 = _0x21cb39 ? 0x74a : 0x5d5;
    _0x3c368c['vx'] += _0x126c3d * _0x2a91e7 * _0xf234a8;
    _0x3c368c['vy'] += _0x5d92cf * _0x2a91e7 * _0xf234a8;
    _0x3c368c['vx'] *= _0x19a7b9;
    _0x3c368c['vy'] *= _0x19a7b9;
    _0x3c368c['x'] += _0x3c368c['vx'] * _0xf234a8;
    _0x3c368c['y'] += _0x3c368c['vy'] * _0xf234a8;
    for (let _0x2ff0f2 = 0x0; _0x2ff0f2 < 0x3; _0x2ff0f2++)
        _0x230411();
    for (let _0x1392d6 = 0x0; _0x1392d6 < 0x2; _0x1392d6++)
        _0x58af1f();
    for (let _0x90b788 = 0x0; _0x90b788 < 0x2; _0x90b788++)
        _0x9ad7ba();
    if (_0x3c368c['x'] < 0x0)
        _0x3c368c['x'] = 0x0;
    if (_0x3c368c['y'] < 0x0)
        _0x3c368c['y'] = 0x0;
    if (_0x3c368c['x'] + _0x3c368c['width'] > _0x2b372f['MAP']['columns'] * _0x2b372f['MAP']['tileSize'])
        _0x3c368c['x'] = _0x2b372f['MAP']['columns'] * _0x2b372f['MAP']['tileSize'] - _0x3c368c['width'];
    if (_0x3c368c['y'] + _0x3c368c['height'] > _0x2b372f['MAP']['rows'] * _0x2b372f['MAP']['tileSize'])
        _0x3c368c['y'] = _0x2b372f['MAP']['rows'] * _0x2b372f['MAP']['tileSize'] - _0x3c368c['height'];
    if (_0x2d5709) {
        _0x3c368c['angle'] = _0xc812ec + Math['PI'] / 0x2;
    } else if (_0x106db7 !== 0x0 || _0x198710 !== 0x0) {
        _0x3c368c['angle'] = Math['atan2'](_0x198710, _0x106db7) + Math['PI'] / 0x2;
    } else if (!_0x3966dd) {
        _0x3c368c['angle'] = _0x51ecb9 + Math['PI'] / 0x2;
    }
    const _0x479a1c = _0x3c368c['x'] + _0x3c368c['width'] / 0x2 - _0x2b372f['CAMERA']['width'] / 0x2;
    const _0x25f77e = _0x3c368c['y'] + _0x3c368c['height'] / 0x2 - _0x2b372f['CAMERA']['height'] / 0x2;
    if (_0x2b372f['CAMERA']['x'] === null || isNaN(_0x2b372f['CAMERA']['x']) || !isFinite(_0x2b372f['CAMERA']['x'])) {
        _0x2b372f['CAMERA']['x'] = _0x479a1c;
        _0x2b372f['CAMERA']['y'] = _0x25f77e;
    } else {
        const _0x2582cf = 0x1 - Math['exp'](-Math['max'](0x0, _0xf234a8) * 0x28);
        _0x2b372f['CAMERA']['x'] += (_0x479a1c - _0x2b372f['CAMERA']['x']) * _0x2582cf;
        _0x2b372f['CAMERA']['y'] += (_0x25f77e - _0x2b372f['CAMERA']['y']) * _0x2582cf;
    }
    for (const _0xc53f41 in _0x4666d8) {
        const _0x1436b4 = _0x4666d8[_0xc53f41];
        if (_0x1436b4['renderX'] === undefined) {
            _0x1436b4['renderX'] = _0x1436b4['x'];
            _0x1436b4['renderY'] = _0x1436b4['y'];
            _0x1436b4['renderAngle'] = _0x1436b4['angle'] || 0x0;
        }
        const _0x29508c = _0x1436b4['x'] + (_0x1436b4['vx'] || 0x0) * _0xf234a8;
        const _0x44892e = _0x1436b4['y'] + (_0x1436b4['vy'] || 0x0) * _0xf234a8;
        _0x1436b4['x'] = _0x29508c;
        _0x1436b4['y'] = _0x44892e;
        const _0x42aa5c = 0x1 - Math['exp'](-_0xf234a8 * 0x12);
        const _0x5a3b6f = _0x1436b4['x'] - _0x1436b4['renderX'], _0x3e79ff = _0x1436b4['y'] - _0x1436b4['renderY'];
        const _0x30b0e8 = Math['sqrt'](_0x5a3b6f * _0x5a3b6f + _0x3e79ff * _0x3e79ff);
        const _0x24c51a = 0xc8;
        if (_0x30b0e8 > _0x24c51a) {
            _0x1436b4['renderX'] = _0x1436b4['x'] - _0x5a3b6f / _0x30b0e8 * _0x24c51a;
            _0x1436b4['renderY'] = _0x1436b4['y'] - _0x3e79ff / _0x30b0e8 * _0x24c51a;
        }
        _0x1436b4['renderX'] += (_0x1436b4['x'] - _0x1436b4['renderX']) * _0x42aa5c;
        _0x1436b4['renderY'] += (_0x1436b4['y'] - _0x1436b4['renderY']) * _0x42aa5c;
        let _0x194a76 = (_0x1436b4['angle'] || 0x0) - _0x1436b4['renderAngle'];
        while (_0x194a76 < -Math['PI'])
            _0x194a76 += Math['PI'] * 0x2;
        while (_0x194a76 > Math['PI'])
            _0x194a76 -= Math['PI'] * 0x2;
        _0x1436b4['renderAngle'] += _0x194a76 * (0x1 - Math['exp'](-_0xf234a8 * 0x14));
    }
    if (_0x2b372f['GAME_STATE'] === 'NIGHT') {
        _0x5506f1 = Math['min'](0.6, _0x5506f1 + _0xf234a8 * 0.5);
    } else {
        _0x5506f1 = Math['max'](0x0, _0x5506f1 - _0xf234a8 * 0.5);
    }
    _0x11a245();
    _0x1c528b();
}
function _0x37d9b4(_0x53383a, _0xe613fe, _0x537dd0, _0x249872, _0x333fa7 = !![]) {
    _0x53383a['font'] = 'bold\x2014px\x20\x27Segoe\x20UI\x27';
    const _0x201ef2 = _0x53383a['measureText'](_0xe613fe)['width'];
    const _0x59c103 = _0x201ef2 + 0x18;
    const _0x59d3e5 = 0x1c;
    _0x53383a['fillStyle'] = 'rgba(0,\x200,\x200,\x200.7)';
    _0x53383a['beginPath']();
    if (_0x53383a['roundRect']) {
        _0x53383a['roundRect'](_0x537dd0 - _0x59c103 / 0x2, _0x249872 - _0x59d3e5, _0x59c103, _0x59d3e5, 0x6);
    } else {
        _0x53383a['rect'](_0x537dd0 - _0x59c103 / 0x2, _0x249872 - _0x59d3e5, _0x59c103, _0x59d3e5);
    }
    _0x53383a['fill']();
    if (_0x333fa7) {
        _0x53383a['beginPath']();
        _0x53383a['moveTo'](_0x537dd0 - 0x6, _0x249872);
        _0x53383a['lineTo'](_0x537dd0 + 0x6, _0x249872);
        _0x53383a['lineTo'](_0x537dd0, _0x249872 + 0x6);
        _0x53383a['fill']();
    }
    _0x53383a['fillStyle'] = '#ffffff';
    _0x53383a['textAlign'] = 'center';
    _0x53383a['textBaseline'] = 'middle';
    _0x53383a['fillText'](_0xe613fe, _0x537dd0, _0x249872 - _0x59d3e5 / 0x2 + 0x1);
}
function _0xcc17fa(_0x8a7406, _0x34633c, _0x33420d, _0xffdfec) {
    if (!_0x34633c || _0x34633c['length'] === 0x0)
        return;
    let _0x5d1d8f = _0xffdfec;
    for (let _0x2fcb36 = 0x0; _0x2fcb36 < _0x34633c['length']; _0x2fcb36++) {
        _0x37d9b4(_0x8a7406, _0x34633c[_0x2fcb36]['text'], _0x33420d, _0x5d1d8f, _0x2fcb36 === 0x0);
        _0x5d1d8f -= 0x24;
    }
}
function _0xb98ba9() {
    if (!_0x2b372f['SYSTEM']['isReady'])
        return;
    _0x140a93['fillStyle'] = '#000000';
    _0x140a93['fillRect'](0x0, 0x0, _0x1a197e['width'], _0x1a197e['height']);
    _0x140a93['save']();
    try {
        _0x140a93['scale'](_0x2b372f['SYSTEM']['viewScale'], _0x2b372f['SYSTEM']['viewScale']);
        _0x140a93['imageSmoothingEnabled'] = ![];
        const _0x5a74f0 = Math['floor'](_0x2b372f['CAMERA']['x'] || 0x0);
        const _0x1179fb = Math['floor'](_0x2b372f['CAMERA']['y'] || 0x0);
        const _0x5d7e6c = Math['max'](0x0, Math['floor'](_0x5a74f0 / _0x2b372f['MAP']['chunkSize']));
        const _0xe166a0 = Math['min'](_0x2b372f['MAP']['bgChunks'][0x0]['length'] - 0x1, Math['floor']((_0x5a74f0 + _0x2b372f['CAMERA']['width']) / _0x2b372f['MAP']['chunkSize']));
        const _0x3a61de = Math['max'](0x0, Math['floor'](_0x1179fb / _0x2b372f['MAP']['chunkSize']));
        const _0x38cf74 = Math['min'](_0x2b372f['MAP']['bgChunks']['length'] - 0x1, Math['floor']((_0x1179fb + _0x2b372f['CAMERA']['height']) / _0x2b372f['MAP']['chunkSize']));
        for (let _0x37a16e = _0x3a61de; _0x37a16e <= _0x38cf74; _0x37a16e++)
            for (let _0x3c4201 = _0x5d7e6c; _0x3c4201 <= _0xe166a0; _0x3c4201++) {
                const _0x117cb5 = _0x3c4201 * _0x2b372f['MAP']['chunkSize'] - _0x5a74f0;
                const _0x2c021a = _0x37a16e * _0x2b372f['MAP']['chunkSize'] - _0x1179fb;
                _0x140a93['drawImage'](_0x2b372f['MAP']['bgChunks'][_0x37a16e][_0x3c4201], _0x117cb5, _0x2c021a, _0x2b372f['MAP']['chunkSize'] + 0x1, _0x2b372f['MAP']['chunkSize'] + 0x1);
            }
        if (_0x45c0d7['complete'] && _0x45c0d7['naturalWidth'] > 0x0) {
            const _0x22b77c = _0x2b372f['MAP']['tileSize'];
            const _0x44dbf1 = _0x22b77c * 0xa;
            const _0x486351 = _0x2b372f['MAP']['columns'] / 0x2 * _0x22b77c - _0x44dbf1 / 0x2 - _0x5a74f0;
            const _0x495057 = _0x2b372f['MAP']['rows'] / 0x2 * _0x22b77c - _0x44dbf1 / 0x2 - _0x1179fb;
            _0x140a93['imageSmoothingEnabled'] = ![];
            _0x140a93['drawImage'](_0x45c0d7, _0x486351, _0x495057, _0x44dbf1, _0x44dbf1);
        }
        if (_0x315324['complete'] && _0x315324['naturalWidth'] > 0x0) {
            _0x2b372f['ENTITIES']['forEach'](_0x36cfcd => {
                if (_0x36cfcd['type'] !== 'table')
                    return;
                _0x140a93['save']();
                _0x140a93['imageSmoothingEnabled'] = ![];
                const _0x1fb241 = _0x315324['naturalWidth'] >= _0x315324['naturalHeight'];
                const _0x2e0c62 = _0x36cfcd['w'] >= _0x36cfcd['h'];
                if (_0x1fb241 === _0x2e0c62) {
                    _0x140a93['drawImage'](_0x315324, _0x36cfcd['x'] - _0x5a74f0, _0x36cfcd['y'] - _0x1179fb, _0x36cfcd['w'], _0x36cfcd['h']);
                } else {
                    _0x140a93['translate'](_0x36cfcd['x'] - _0x5a74f0 + _0x36cfcd['w'] / 0x2, _0x36cfcd['y'] - _0x1179fb + _0x36cfcd['h'] / 0x2);
                    _0x140a93['rotate'](Math['PI'] / 0x2);
                    _0x140a93['drawImage'](_0x315324, -_0x36cfcd['h'] / 0x2, -_0x36cfcd['w'] / 0x2, _0x36cfcd['h'], _0x36cfcd['w']);
                }
                _0x140a93['restore']();
            });
        } else {
            _0x2b372f['ENTITIES']['forEach'](_0x475cf3 => {
                if (_0x475cf3['type'] !== 'table')
                    return;
                _0x140a93['save']();
                _0x140a93['fillStyle'] = '#6b4423';
                _0x140a93['fillRect'](_0x475cf3['x'] - _0x5a74f0, _0x475cf3['y'] - _0x1179fb, _0x475cf3['w'], _0x475cf3['h']);
                _0x140a93['strokeStyle'] = '#422810';
                _0x140a93['lineWidth'] = 0x3;
                _0x140a93['strokeRect'](_0x475cf3['x'] - _0x5a74f0 + 0x1, _0x475cf3['y'] - _0x1179fb + 0x1, _0x475cf3['w'] - 0x2, _0x475cf3['h'] - 0x2);
                _0x140a93['fillStyle'] = '#82532a';
                _0x140a93['fillRect'](_0x475cf3['x'] - _0x5a74f0 + 0x4, _0x475cf3['y'] - _0x1179fb + 0x4, _0x475cf3['w'] - 0x8, _0x475cf3['h'] - 0x8);
                _0x140a93['restore']();
            });
        }
        if (_0x2b2897) {
            if (_0x2b372f['MAP']['wallChunks'] && _0x2b372f['MAP']['wallChunks']['length'] > 0x0) {
                for (let _0x5c606b = _0x3a61de; _0x5c606b <= _0x38cf74; _0x5c606b++) {
                    for (let _0x3146dc = _0x5d7e6c; _0x3146dc <= _0xe166a0; _0x3146dc++) {
                        if (!_0x2b372f['MAP']['wallChunks'][_0x5c606b] || !_0x2b372f['MAP']['wallChunks'][_0x5c606b][_0x3146dc])
                            continue;
                        const _0x909373 = _0x3146dc * _0x2b372f['MAP']['chunkSize'] - _0x5a74f0;
                        const _0x17b0a4 = _0x5c606b * _0x2b372f['MAP']['chunkSize'] - _0x1179fb;
                        _0x140a93['drawImage'](_0x2b372f['MAP']['wallChunks'][_0x5c606b][_0x3146dc], _0x909373, _0x17b0a4, _0x2b372f['MAP']['chunkSize'] + 0x1, _0x2b372f['MAP']['chunkSize'] + 0x1);
                    }
                }
            }
            for (let _0x412f13 = _0x3a61de; _0x412f13 <= _0x38cf74; _0x412f13++) {
                for (let _0x5bbd3a = _0x5d7e6c; _0x5bbd3a <= _0xe166a0; _0x5bbd3a++) {
                    const _0x426df5 = _0x5bbd3a * _0x2b372f['MAP']['chunkSize'] - _0x5a74f0;
                    const _0x3dee55 = _0x412f13 * _0x2b372f['MAP']['chunkSize'] - _0x1179fb;
                    _0x140a93['drawImage'](_0x2b372f['MAP']['fgChunks'][_0x412f13][_0x5bbd3a], _0x426df5, _0x3dee55, _0x2b372f['MAP']['chunkSize'] + 0x1, _0x2b372f['MAP']['chunkSize'] + 0x1);
                }
            }
            return;
        }
        const _0x3d80eb = _0x2b372f['GAME_STATE'] === 'NIGHT' && _0x3de780 === 'Skinwalker' && !_0x3c368c['isDead'];
        const _0x107b77 = _0x3c368c['x'] - _0x5a74f0 + _0x3c368c['width'] / 0x2;
        const _0x5eddca = _0x3c368c['y'] - _0x1179fb + _0x3c368c['height'] / 0x2;
        const _0x12e945 = _0x3c368c['width'] * _0x3c368c['scale'] * 1.3;
        const _0x3be3fc = _0x3c368c['height'] * _0x3c368c['scale'] * 1.3;
        for (const _0x180f8d in _0x4666d8) {
            const _0x32d16f = _0x4666d8[_0x180f8d];
            if (_0x32d16f['isDead'])
                continue;
            const _0x2a0bdf = (_0x32d16f['renderX'] ?? _0x32d16f['x']) - _0x5a74f0 + _0x32d16f['width'] / 0x2;
            const _0x276d8a = (_0x32d16f['renderY'] ?? _0x32d16f['y']) - _0x1179fb + _0x32d16f['height'] / 0x2;
            const _0x5c03a1 = Math['min'](0x2, Math['max'](0.3, _0x32d16f['scale'] || 0x1));
            const _0x5d7097 = _0x32d16f['width'] * _0x5c03a1 * 1.3;
            const _0x299c40 = _0x32d16f['height'] * _0x5c03a1 * 1.3;
            _0x140a93['save']();
            try {
                _0x140a93['translate'](_0x2a0bdf, _0x276d8a);
                _0x140a93['rotate'](_0x32d16f['renderAngle'] ?? 0x0);
                if (_0x32d16f['isDark'])
                    _0x140a93['filter'] = 'brightness(0)';
                _0x4174d3(_0x140a93, _0x32d16f['body'], _0x32d16f['eyes'], _0x5d7097, _0x299c40);
                if (_0x4adb1c['has'](parseInt(_0x180f8d)) && _0x35865e['complete'] && _0x35865e['naturalWidth'] > 0x0) {
                    _0x140a93['drawImage'](_0x35865e, -_0x5d7097 / 0x2, -_0x299c40 / 0x2, _0x5d7097, _0x299c40);
                }
                if (_0x32d16f['isDark'])
                    _0x140a93['filter'] = 'none';
            } finally {
                _0x140a93['restore']();
            }
            if (!_0x5141e1((_0x32d16f['renderX'] ?? _0x32d16f['x']) + _0x32d16f['width'] / 0x2, (_0x32d16f['renderY'] ?? _0x32d16f['y']) + _0x32d16f['height'] / 0x2)) {
                _0x140a93['textAlign'] = 'center';
                _0x140a93['lineJoin'] = 'round';
                _0x140a93['lineWidth'] = 0x3;
                _0x140a93['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x140a93['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x140a93['fillStyle'] = _0x4adb1c['has'](parseInt(_0x180f8d)) ? '#cc88ff' : '#ffffff';
                const _0x1579fd = _0x32d16f['isDark'] ? '???' : _0x32d16f['name'] + (_0x32d16f['isOwner'] ? '\x20[🗝️]' : '');
                _0x140a93['strokeText'](_0x1579fd, _0x2a0bdf, _0x276d8a - _0x299c40 / 0x2 - 0x10);
                _0x140a93['fillText'](_0x1579fd, _0x2a0bdf, _0x276d8a - _0x299c40 / 0x2 - 0x10);
            }
        }
        if (!_0x3c368c['isDead']) {
            _0x140a93['save']();
            try {
                _0x140a93['translate'](_0x107b77, _0x5eddca);
                _0x140a93['rotate'](_0x3c368c['angle']);
                if (_0x3d80eb)
                    _0x140a93['filter'] = 'brightness(0)';
                _0x4174d3(_0x140a93, _0x3a32b7, _0x5294d8, _0x12e945, _0x3be3fc);
                if (_0x4adb1c['has'](_0x19a416) && _0x35865e['complete'] && _0x35865e['naturalWidth'] > 0x0) {
                    _0x140a93['drawImage'](_0x35865e, -_0x12e945 / 0x2, -_0x3be3fc / 0x2, _0x12e945, _0x3be3fc);
                }
                if (_0x3d80eb)
                    _0x140a93['filter'] = 'none';
            } finally {
                _0x140a93['restore']();
            }
            if (!_0x5141e1(_0x3c368c['x'] + _0x3c368c['width'] / 0x2, _0x3c368c['y'] + _0x3c368c['height'] / 0x2)) {
                _0x140a93['textAlign'] = 'center';
                _0x140a93['lineJoin'] = 'round';
                _0x140a93['lineWidth'] = 0x3;
                _0x140a93['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x140a93['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x140a93['fillStyle'] = _0x4adb1c['has'](_0x19a416) ? '#cc88ff' : '#ffffff';
                const _0x468823 = _0x3d80eb ? '???' : _0x2b38d1 + (_0x5dc788 ? '\x20[🗝️]' : '');
                _0x140a93['strokeText'](_0x468823, _0x107b77, _0x5eddca - _0x3be3fc / 0x2 - 0x10);
                _0x140a93['fillText'](_0x468823, _0x107b77, _0x5eddca - _0x3be3fc / 0x2 - 0x10);
            }
        }
        if (_0x2b372f['MAP']['wallChunks'] && _0x2b372f['MAP']['wallChunks']['length'] > 0x0) {
            for (let _0x2acf3d = _0x3a61de; _0x2acf3d <= _0x38cf74; _0x2acf3d++)
                for (let _0x2f52e2 = _0x5d7e6c; _0x2f52e2 <= _0xe166a0; _0x2f52e2++) {
                    if (!_0x2b372f['MAP']['wallChunks'][_0x2acf3d] || !_0x2b372f['MAP']['wallChunks'][_0x2acf3d][_0x2f52e2])
                        continue;
                    const _0x286065 = _0x2f52e2 * _0x2b372f['MAP']['chunkSize'] - _0x5a74f0;
                    const _0x13e230 = _0x2acf3d * _0x2b372f['MAP']['chunkSize'] - _0x1179fb;
                    _0x140a93['drawImage'](_0x2b372f['MAP']['wallChunks'][_0x2acf3d][_0x2f52e2], _0x286065, _0x13e230, _0x2b372f['MAP']['chunkSize'] + 0x1, _0x2b372f['MAP']['chunkSize'] + 0x1);
                }
        }
        for (const _0x452969 of _0x2b372f['ENTITIES']) {
            if (_0x452969['type'] !== 'npc')
                continue;
            const _0x1265d0 = _0x452969['x'] - _0x5a74f0 + _0x452969['w'] / 0x2;
            const _0x20cb88 = _0x452969['y'] - _0x1179fb + _0x452969['h'] / 0x2;
            const _0x1ac066 = _0x452969['w'];
            const _0x5d24e6 = _0x452969['h'];
            _0x140a93['save']();
            _0x140a93['translate'](_0x1265d0, _0x20cb88);
            _0x140a93['rotate'](_0x452969['angle'] !== undefined ? _0x452969['angle'] : 0x0);
            _0x4174d3(_0x140a93, _0x452969['body'] || 'yanito932.png', _0x452969['eyes'], _0x1ac066, _0x5d24e6);
            _0x140a93['restore']();
            _0x140a93['textAlign'] = 'center';
            _0x140a93['lineJoin'] = 'round';
            _0x140a93['lineWidth'] = 0x3;
            _0x140a93['strokeStyle'] = 'rgba(0,0,0,0.85)';
            _0x140a93['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
            _0x140a93['fillStyle'] = '#aaaaaa';
            _0x140a93['strokeText'](_0x452969['name'] || 'NPC', _0x1265d0, _0x20cb88 - _0x5d24e6 / 0x2 - 0x10);
            _0x140a93['fillText'](_0x452969['name'] || 'NPC', _0x1265d0, _0x20cb88 - _0x5d24e6 / 0x2 - 0x10);
        }
        if (_0x3c368c['isDead']) {
            for (const _0x4577eb in _0x4666d8) {
                const _0x405e46 = _0x4666d8[_0x4577eb];
                if (!_0x405e46['isDead'])
                    continue;
                const _0xb71531 = (_0x405e46['renderX'] ?? _0x405e46['x']) - _0x5a74f0 + _0x405e46['width'] / 0x2;
                const _0x21022b = (_0x405e46['renderY'] ?? _0x405e46['y']) - _0x1179fb + _0x405e46['height'] / 0x2;
                const _0x762deb = _0x405e46['width'] * (_0x405e46['scale'] || 0x1) * 1.3;
                const _0xc65fd0 = _0x405e46['height'] * (_0x405e46['scale'] || 0x1) * 1.3;
                _0x140a93['save']();
                try {
                    _0x140a93['translate'](_0xb71531, _0x21022b);
                    _0x140a93['rotate'](_0x405e46['renderAngle'] ?? 0x0);
                    _0x140a93['globalAlpha'] = 0.3;
                    _0x4174d3(_0x140a93, _0x405e46['body'], _0x405e46['eyes'], _0x762deb, _0xc65fd0);
                } finally {
                    _0x140a93['restore']();
                }
                if (!_0x5141e1((_0x405e46['renderX'] ?? _0x405e46['x']) + _0x405e46['width'] / 0x2, (_0x405e46['renderY'] ?? _0x405e46['y']) + _0x405e46['height'] / 0x2)) {
                    _0x140a93['save']();
                    _0x140a93['globalAlpha'] = 0.3;
                    _0x140a93['textAlign'] = 'center';
                    _0x140a93['lineJoin'] = 'round';
                    _0x140a93['lineWidth'] = 0x3;
                    _0x140a93['strokeStyle'] = 'rgba(0,0,0,0.85)';
                    _0x140a93['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                    _0x140a93['fillStyle'] = '#ffffff';
                    const _0x1783f8 = _0x405e46['name'] + (_0x405e46['isOwner'] ? '\x20[🗝️]' : '');
                    _0x140a93['strokeText'](_0x1783f8, _0xb71531, _0x21022b - _0xc65fd0 / 0x2 - 0x10);
                    _0x140a93['fillText'](_0x1783f8, _0xb71531, _0x21022b - _0xc65fd0 / 0x2 - 0x10);
                    _0x140a93['restore']();
                }
            }
            _0x140a93['save']();
            try {
                _0x140a93['translate'](_0x107b77, _0x5eddca);
                _0x140a93['rotate'](_0x3c368c['angle']);
                _0x140a93['globalAlpha'] = 0.3;
                _0x4174d3(_0x140a93, _0x3a32b7, _0x5294d8, _0x12e945, _0x3be3fc);
            } finally {
                _0x140a93['restore']();
            }
            if (!_0x5141e1(_0x3c368c['x'] + _0x3c368c['width'] / 0x2, _0x3c368c['y'] + _0x3c368c['height'] / 0x2)) {
                _0x140a93['save']();
                _0x140a93['globalAlpha'] = 0.3;
                _0x140a93['textAlign'] = 'center';
                _0x140a93['lineJoin'] = 'round';
                _0x140a93['lineWidth'] = 0x3;
                _0x140a93['strokeStyle'] = 'rgba(0,0,0,0.85)';
                _0x140a93['font'] = 'bold\x2013px\x20\x27Segoe\x20UI\x27';
                _0x140a93['fillStyle'] = '#ffffff';
                const _0x3fa1a5 = _0x2b38d1 + (_0x5dc788 ? '\x20[🗝️]' : '');
                _0x140a93['strokeText'](_0x3fa1a5, _0x107b77, _0x5eddca - _0x3be3fc / 0x2 - 0x10);
                _0x140a93['fillText'](_0x3fa1a5, _0x107b77, _0x5eddca - _0x3be3fc / 0x2 - 0x10);
                _0x140a93['restore']();
            }
        }
        for (let _0xaffac7 = _0x3a61de; _0xaffac7 <= _0x38cf74; _0xaffac7++)
            for (let _0x1a7194 = _0x5d7e6c; _0x1a7194 <= _0xe166a0; _0x1a7194++) {
                const _0x4f59ae = _0x1a7194 * _0x2b372f['MAP']['chunkSize'] - _0x5a74f0;
                const _0x19b685 = _0xaffac7 * _0x2b372f['MAP']['chunkSize'] - _0x1179fb;
                _0x140a93['drawImage'](_0x2b372f['MAP']['fgChunks'][_0xaffac7][_0x1a7194], _0x4f59ae, _0x19b685, _0x2b372f['MAP']['chunkSize'] + 0x1, _0x2b372f['MAP']['chunkSize'] + 0x1);
            }
        if (_0x2b372f['EDITOR']['enabled'] && _0x2b372f['EDITOR']['selectedTileGid'] >= 0x0) {
            const _0x2ab1be = _0x2b372f['INPUTS']['mouseX'] / _0x2b372f['SYSTEM']['viewScale'] + _0x2b372f['CAMERA']['x'];
            const _0x534626 = _0x2b372f['INPUTS']['mouseY'] / _0x2b372f['SYSTEM']['viewScale'] + _0x2b372f['CAMERA']['y'];
            const _0x3fa194 = Math['floor'](_0x2ab1be / _0x2b372f['MAP']['tileSize']);
            const _0x4ebd71 = Math['floor'](_0x534626 / _0x2b372f['MAP']['tileSize']);
            if (_0x3fa194 >= 0x0 && _0x3fa194 < _0x2b372f['MAP']['columns'] && _0x4ebd71 >= 0x0 && _0x4ebd71 < _0x2b372f['MAP']['rows']) {
                const _0x3481fd = _0x3fa194 * _0x2b372f['MAP']['tileSize'] - _0x5a74f0;
                const _0x549e04 = _0x4ebd71 * _0x2b372f['MAP']['tileSize'] - _0x1179fb;
                _0x140a93['save']();
                _0x140a93['globalAlpha'] = 0.5;
                if (_0x2b372f['EDITOR']['selectedTileGid'] > 0x0) {
                    const _0x3c9f1e = _0x2b372f['EDITOR']['selectedTileGid'] - 0x1;
                    _0x140a93['drawImage'](_0x2c95a5, _0x3c9f1e % _0x2b372f['MAP']['tilesetCols'] * _0x2b372f['MAP']['tileSize'], Math['floor'](_0x3c9f1e / _0x2b372f['MAP']['tilesetCols']) * _0x2b372f['MAP']['tileSize'], _0x2b372f['MAP']['tileSize'], _0x2b372f['MAP']['tileSize'], _0x3481fd, _0x549e04, _0x2b372f['MAP']['tileSize'], _0x2b372f['MAP']['tileSize']);
                } else {
                    _0x140a93['fillStyle'] = 'rgba(0,0,0,0.5)';
                    _0x140a93['fillRect'](_0x3481fd, _0x549e04, _0x2b372f['MAP']['tileSize'], _0x2b372f['MAP']['tileSize']);
                }
                _0x140a93['restore']();
            }
        }
        _0x418af2(_0x140a93, _0x5a74f0, _0x1179fb);
        if (_0x5506f1 > 0x0) {
            _0x140a93['fillStyle'] = 'rgba(0,\x200,\x2040,\x20' + _0x5506f1 + ')';
            _0x140a93['fillRect'](0x0, 0x0, _0x2b372f['CAMERA']['width'], _0x2b372f['CAMERA']['height']);
        }
        for (const _0x1f566c in _0x4666d8) {
            const _0x54ffd6 = _0x4666d8[_0x1f566c];
            if (_0x54ffd6['isDead'] && !_0x3c368c['isDead'])
                continue;
            const _0x5643ad = (_0x54ffd6['renderX'] ?? _0x54ffd6['x']) - _0x5a74f0 + _0x54ffd6['width'] / 0x2;
            const _0x467c81 = (_0x54ffd6['renderY'] ?? _0x54ffd6['y']) - _0x1179fb + _0x54ffd6['height'] / 0x2;
            _0xcc17fa(_0x140a93, _0x54ffd6['chats'], _0x5643ad, _0x467c81 - _0x54ffd6['height'] / 0x2 - 0x20);
        }
        _0xcc17fa(_0x140a93, _0x3c368c['chats'], _0x107b77, _0x5eddca - _0x3c368c['height'] / 0x2 - 0x20);
    } finally {
        _0x140a93['restore']();
    }
}
function _0x4f7bc0(_0x518224) {
    if (!_0x2b372f['SYSTEM']['isReady'])
        return;
    requestAnimationFrame(_0x4f7bc0);
    let _0x13b7f0 = (_0x518224 - _0x2b372f['SYSTEM']['lastTime']) / 0x3e8;
    _0x2b372f['SYSTEM']['lastTime'] = _0x518224;
    if (_0x13b7f0 > 0.1)
        _0x13b7f0 = 0.1;
    if (_0x13b7f0 < 0x0 || isNaN(_0x13b7f0))
        _0x13b7f0 = 0.016;
    if (_0x2b2897) {
        _0x51cfe2(_0x13b7f0);
        _0xb98ba9();
        return;
    }
    if (!_0x19a416)
        return;
    _0x4e42b4(_0x13b7f0);
    _0x172a7b['tick'](_0x518224);
    _0xb98ba9();
}
function _0x25cef5() {
    const _0x321d50 = Math['ceil'](_0x2b372f['MAP']['columns'] * _0x2b372f['MAP']['tileSize'] / _0x2b372f['MAP']['chunkSize']);
    const _0x42128b = Math['ceil'](_0x2b372f['MAP']['rows'] * _0x2b372f['MAP']['tileSize'] / _0x2b372f['MAP']['chunkSize']);
    _0x2b372f['MAP']['bgChunks'] = [];
    _0x2b372f['MAP']['fgChunks'] = [];
    _0x2b372f['MAP']['wallChunks'] = [];
    for (let _0x26a2d3 = 0x0; _0x26a2d3 < _0x42128b; _0x26a2d3++) {
        _0x2b372f['MAP']['bgChunks'][_0x26a2d3] = [];
        _0x2b372f['MAP']['fgChunks'][_0x26a2d3] = [];
        _0x2b372f['MAP']['wallChunks'][_0x26a2d3] = [];
        for (let _0x2178f9 = 0x0; _0x2178f9 < _0x321d50; _0x2178f9++) {
            const _0x25fe3a = document['createElement']('canvas');
            _0x25fe3a['width'] = _0x25fe3a['height'] = _0x2b372f['MAP']['chunkSize'];
            const _0x4b2052 = document['createElement']('canvas');
            _0x4b2052['width'] = _0x4b2052['height'] = _0x2b372f['MAP']['chunkSize'];
            const _0xf2f0c6 = document['createElement']('canvas');
            _0xf2f0c6['width'] = _0xf2f0c6['height'] = _0x2b372f['MAP']['chunkSize'];
            _0x2b372f['MAP']['bgChunks'][_0x26a2d3][_0x2178f9] = _0x25fe3a;
            _0x2b372f['MAP']['fgChunks'][_0x26a2d3][_0x2178f9] = _0x4b2052;
            _0x2b372f['MAP']['wallChunks'][_0x26a2d3][_0x2178f9] = _0xf2f0c6;
            _0x624674(_0x2178f9, _0x26a2d3);
        }
    }
}
function _0x624674(_0xb8b419, _0x124eaa) {
    const _0x537fb7 = _0x2b372f['MAP']['bgChunks'][_0x124eaa][_0xb8b419]['getContext']('2d', { 'alpha': !![] });
    const _0x3a8886 = _0x2b372f['MAP']['fgChunks'][_0x124eaa][_0xb8b419]['getContext']('2d', { 'alpha': !![] });
    const _0x588d09 = _0x2b372f['MAP']['wallChunks'][_0x124eaa] && _0x2b372f['MAP']['wallChunks'][_0x124eaa][_0xb8b419] ? _0x2b372f['MAP']['wallChunks'][_0x124eaa][_0xb8b419]['getContext']('2d', { 'alpha': !![] }) : null;
    _0x537fb7['imageSmoothingEnabled'] = _0x3a8886['imageSmoothingEnabled'] = ![];
    if (_0x588d09)
        _0x588d09['imageSmoothingEnabled'] = ![];
    _0x537fb7['clearRect'](0x0, 0x0, _0x2b372f['MAP']['chunkSize'], _0x2b372f['MAP']['chunkSize']);
    _0x3a8886['clearRect'](0x0, 0x0, _0x2b372f['MAP']['chunkSize'], _0x2b372f['MAP']['chunkSize']);
    if (_0x588d09)
        _0x588d09['clearRect'](0x0, 0x0, _0x2b372f['MAP']['chunkSize'], _0x2b372f['MAP']['chunkSize']);
    const _0x3e9454 = Math['floor'](_0xb8b419 * _0x2b372f['MAP']['chunkSize'] / _0x2b372f['MAP']['tileSize']);
    const _0x419624 = Math['ceil']((_0xb8b419 + 0x1) * _0x2b372f['MAP']['chunkSize'] / _0x2b372f['MAP']['tileSize']);
    const _0x223b14 = Math['floor'](_0x124eaa * _0x2b372f['MAP']['chunkSize'] / _0x2b372f['MAP']['tileSize']);
    const _0xfa4479 = Math['ceil']((_0x124eaa + 0x1) * _0x2b372f['MAP']['chunkSize'] / _0x2b372f['MAP']['tileSize']);
    const _0x1815ae = 0.5;
    const _0xa0d013 = _0x2b372f['MAP']['tileSize'] - _0x1815ae * 0x2;
    _0x2b372f['MAP']['layers']['forEach'](_0xc3e632 => {
        const _0x224fdb = _0xc3e632['name'] === 'walls';
        const _0x1717a0 = _0xc3e632['name'] === 'trees' ? _0x3a8886 : _0x224fdb ? _0x588d09 || _0x537fb7 : _0x537fb7;
        for (let _0x20d27a = Math['max'](0x0, _0x223b14); _0x20d27a < Math['min'](_0x2b372f['MAP']['rows'], _0xfa4479); _0x20d27a++) {
            for (let _0x4dbfb4 = Math['max'](0x0, _0x3e9454); _0x4dbfb4 < Math['min'](_0x2b372f['MAP']['columns'], _0x419624); _0x4dbfb4++) {
                let _0x2cdad3 = _0xc3e632['data'][_0x20d27a * _0x2b372f['MAP']['columns'] + _0x4dbfb4];
                if (_0xc3e632['name'] === 'floor2' && _0x2b372f['MAP']['doors'] && _0x2b372f['MAP']['doors'][_0x20d27a * _0x2b372f['MAP']['columns'] + _0x4dbfb4]) {
                    _0x2cdad3 = 0x2;
                }
                if (_0x2cdad3 > 0x0) {
                    const _0x214860 = _0x2cdad3 - 0x1;
                    const _0x36ca36 = _0x214860 % _0x2b372f['MAP']['tilesetCols'] * _0x2b372f['MAP']['tileSize'] + _0x1815ae;
                    const _0x3cc065 = Math['floor'](_0x214860 / _0x2b372f['MAP']['tilesetCols']) * _0x2b372f['MAP']['tileSize'] + _0x1815ae;
                    const _0x5fcd18 = _0x4dbfb4 * _0x2b372f['MAP']['tileSize'] - _0xb8b419 * _0x2b372f['MAP']['chunkSize'];
                    const _0x2cd8d0 = _0x20d27a * _0x2b372f['MAP']['tileSize'] - _0x124eaa * _0x2b372f['MAP']['chunkSize'];
                    if (_0x2cdad3 === 0x4) {
                        const _0x508075 = 0x1;
                        const _0x309c92 = _0x508075 % _0x2b372f['MAP']['tilesetCols'] * _0x2b372f['MAP']['tileSize'] + _0x1815ae;
                        const _0x10e0c1 = Math['floor'](_0x508075 / _0x2b372f['MAP']['tilesetCols']) * _0x2b372f['MAP']['tileSize'] + _0x1815ae;
                        _0x537fb7['drawImage'](_0x2c95a5, _0x309c92, _0x10e0c1, _0xa0d013, _0xa0d013, _0x5fcd18, _0x2cd8d0, _0x2b372f['MAP']['tileSize'], _0x2b372f['MAP']['tileSize']);
                        let _0x4df78b = _0x2b372f['MAP']['doors'] ? _0x2b372f['MAP']['doors'][_0x20d27a * _0x2b372f['MAP']['columns'] + _0x4dbfb4] : null;
                        if (!_0x4df78b) {
                            const _0x2c9ea3 = _0x2b372f['MAP']['layers']['find'](_0x3c3b84 => _0x3c3b84['name'] === 'walls');
                            const _0x691040 = _0x20d27a > 0x0 && _0x2c9ea3 && _0x2c9ea3['data'][(_0x20d27a - 0x1) * _0x2b372f['MAP']['columns'] + _0x4dbfb4] > 0x0;
                            const _0x32ac5a = _0x20d27a < _0x2b372f['MAP']['rows'] - 0x1 && _0x2c9ea3 && _0x2c9ea3['data'][(_0x20d27a + 0x1) * _0x2b372f['MAP']['columns'] + _0x4dbfb4] > 0x0;
                            const _0x8aa2b1 = _0x4dbfb4 > 0x0 && _0x2c9ea3 && _0x2c9ea3['data'][_0x20d27a * _0x2b372f['MAP']['columns'] + _0x4dbfb4 - 0x1] > 0x0;
                            const _0x279fee = _0x4dbfb4 < _0x2b372f['MAP']['columns'] - 0x1 && _0x2c9ea3 && _0x2c9ea3['data'][_0x20d27a * _0x2b372f['MAP']['columns'] + _0x4dbfb4 + 0x1] > 0x0;
                            if (_0x8aa2b1 && _0x279fee)
                                _0x4df78b = _0x20d27a < _0x2b372f['MAP']['rows'] / 0x2 ? 'bottom' : 'top';
                            else if (_0x691040 && _0x32ac5a)
                                _0x4df78b = _0x4dbfb4 < _0x2b372f['MAP']['columns'] / 0x2 ? 'right' : 'left';
                        }
                        let _0x4f12ed = 0x0;
                        if (_0x4df78b === 'bottom')
                            _0x4f12ed = Math['PI'] / 0x2;
                        else if (_0x4df78b === 'left')
                            _0x4f12ed = Math['PI'];
                        else if (_0x4df78b === 'top')
                            _0x4f12ed = -Math['PI'] / 0x2;
                        else if (_0x4df78b === 'right')
                            _0x4f12ed = 0x0;
                        if (_0x4f12ed !== 0x0) {
                            _0x1717a0['save']();
                            _0x1717a0['translate'](_0x5fcd18 + _0x2b372f['MAP']['tileSize'] / 0x2, _0x2cd8d0 + _0x2b372f['MAP']['tileSize'] / 0x2);
                            _0x1717a0['rotate'](_0x4f12ed);
                            _0x1717a0['drawImage'](_0x2c95a5, _0x36ca36, _0x3cc065, _0xa0d013, _0xa0d013, -_0x2b372f['MAP']['tileSize'] / 0x2, -_0x2b372f['MAP']['tileSize'] / 0x2, _0x2b372f['MAP']['tileSize'], _0x2b372f['MAP']['tileSize']);
                            _0x1717a0['restore']();
                        } else {
                            _0x1717a0['drawImage'](_0x2c95a5, _0x36ca36, _0x3cc065, _0xa0d013, _0xa0d013, _0x5fcd18, _0x2cd8d0, _0x2b372f['MAP']['tileSize'], _0x2b372f['MAP']['tileSize']);
                        }
                    } else {
                        _0x1717a0['drawImage'](_0x2c95a5, _0x36ca36, _0x3cc065, _0xa0d013, _0xa0d013, _0x5fcd18, _0x2cd8d0, _0x2b372f['MAP']['tileSize'], _0x2b372f['MAP']['tileSize']);
                    }
                }
            }
        }
    });
}
function _0x134a0b() {
    _0x2c95a5['crossOrigin'] = 'Anonymous';
    _0x2c95a5['onload'] = () => {
        _0x2b372f['MAP']['tilesetCols'] = 0x3;
        _0xf1d144();
    };
    _0x2c95a5['onerror'] = () => {
        _0x2b372f['MAP']['tilesetCols'] = 0x1;
        _0xf1d144();
    };
    _0x2c95a5['src'] = 'assets/tilesheet.png';
    _0x45c0d7['crossOrigin'] = 'Anonymous';
    _0x45c0d7['onload'] = _0xf1d144;
    _0x45c0d7['onerror'] = () => {
        _0xf1d144();
    };
    _0x45c0d7['src'] = 'assets/center.png';
    _0x315324['crossOrigin'] = 'Anonymous';
    _0x315324['onload'] = _0xf1d144;
    _0x315324['onerror'] = () => {
        _0xf1d144();
    };
    _0x315324['src'] = 'assets/table.png';
}
function _0xf1d144() {
    _0x2b372f['SYSTEM']['assetsLoaded']++;
    if (_0x2b372f['SYSTEM']['assetsLoaded'] === 0x3) {
        document['getElementById']('loading-screen')['style']['display'] = 'none';
        document['getElementById']('main-menu-ui')['style']['display'] = 'flex';
        _0x1b521d();
    }
}
function _0x3228f7(_0x507f5f, _0x17560d) {
    if (!_0x5dc788 || !_0x2aa407)
        return;
    const _0x5f574d = _0x507f5f / _0x2b372f['SYSTEM']['viewScale'] + _0x2b372f['CAMERA']['x'];
    const _0x1a27e2 = _0x17560d / _0x2b372f['SYSTEM']['viewScale'] + _0x2b372f['CAMERA']['y'];
    const _0x1f3f70 = Math['floor'](_0x5f574d / _0x2b372f['MAP']['tileSize']);
    const _0x4596f1 = Math['floor'](_0x1a27e2 / _0x2b372f['MAP']['tileSize']);
    if (_0x1f3f70 >= 0x0 && _0x1f3f70 < _0x2b372f['MAP']['columns'] && _0x4596f1 >= 0x0 && _0x4596f1 < _0x2b372f['MAP']['rows'])
        _0x2aa407['send'](JSON['stringify']({
            'type': 'edit',
            'layer': _0x2b372f['EDITOR']['selectedLayer'],
            'col': _0x1f3f70,
            'row': _0x4596f1,
            'gid': _0x2b372f['EDITOR']['selectedTileGid']
        }));
}
function _0x33b538() {
    const _0x10fa26 = document['getElementById']('palette');
    if (!_0x10fa26 || _0x10fa26['children']['length'] > 0x0)
        return;
    const _0x3cc209 = 0x40;
    const _0x16030c = _0x2c95a5;
    const _0x36b03f = document['createElement']('div');
    _0x36b03f['style']['cssText'] = 'position:relative;overflow:hidden;width:192px;height:160px;border:2px\x20solid\x20#555;background:#222;cursor:grab;flex-shrink:0;';
    const _0x1bce91 = document['createElement']('canvas');
    _0x1bce91['width'] = 0xc0;
    _0x1bce91['height'] = 0xa0;
    _0x1bce91['style']['cssText'] = 'display:block;image-rendering:pixelated;';
    _0x36b03f['appendChild'](_0x1bce91);
    const _0x2bfa32 = document['createElement']('div');
    _0x2bfa32['style']['cssText'] = 'position:absolute;width:64px;height:64px;border:3px\x20solid\x20#ff0;box-sizing:border-box;pointer-events:none;left:0;top:0;';
    _0x36b03f['appendChild'](_0x2bfa32);
    let _0x2adf64 = 0x0, _0x408692 = 0x0;
    let _0x323c1d = ![], _0x4cd7cc = 0x0, _0x5e1992 = 0x0, _0x37db4f = 0x0, _0xcf65e6 = 0x0;
    function _0x24dabd() {
        const _0x289088 = _0x1bce91['getContext']('2d');
        _0x289088['clearRect'](0x0, 0x0, _0x1bce91['width'], _0x1bce91['height']);
        _0x289088['imageSmoothingEnabled'] = ![];
        if (_0x16030c['complete'] && _0x16030c['naturalWidth'] > 0x0) {
            _0x289088['drawImage'](_0x16030c, _0x2adf64, _0x408692, _0x1bce91['width'], _0x1bce91['height'], 0x0, 0x0, _0x1bce91['width'], _0x1bce91['height']);
        }
        _0x289088['strokeStyle'] = 'rgba(255,255,255,0.15)';
        _0x289088['lineWidth'] = 0x1;
        const _0x2c0f4e = Math['floor'](_0x2adf64 / _0x3cc209);
        const _0x48fe32 = Math['floor'](_0x408692 / _0x3cc209);
        for (let _0x100cfa = _0x2c0f4e; _0x100cfa <= _0x2c0f4e + Math['ceil'](_0x1bce91['width'] / _0x3cc209) + 0x1; _0x100cfa++) {
            const _0x323f71 = _0x100cfa * _0x3cc209 - _0x2adf64;
            _0x289088['beginPath']();
            _0x289088['moveTo'](_0x323f71, 0x0);
            _0x289088['lineTo'](_0x323f71, _0x1bce91['height']);
            _0x289088['stroke']();
        }
        for (let _0x331080 = _0x48fe32; _0x331080 <= _0x48fe32 + Math['ceil'](_0x1bce91['height'] / _0x3cc209) + 0x1; _0x331080++) {
            const _0x41ffb1 = _0x331080 * _0x3cc209 - _0x408692;
            _0x289088['beginPath']();
            _0x289088['moveTo'](0x0, _0x41ffb1);
            _0x289088['lineTo'](_0x1bce91['width'], _0x41ffb1);
            _0x289088['stroke']();
        }
    }
    function _0x4b9a7b() {
        const _0x32a980 = Math['max'](0x1, Math['ceil'](_0x16030c['naturalWidth'] / _0x3cc209));
        const _0x2a190c = _0x2b372f['EDITOR']['selectedTileGid'];
        if (_0x2a190c <= 0x0) {
            _0x2bfa32['style']['display'] = 'none';
            return;
        }
        const _0x34c110 = _0x2a190c - 0x1;
        const _0x291a3d = _0x34c110 % _0x32a980;
        const _0x438c34 = Math['floor'](_0x34c110 / _0x32a980);
        const _0x514b1b = _0x291a3d * _0x3cc209 - _0x2adf64;
        const _0x101467 = _0x438c34 * _0x3cc209 - _0x408692;
        _0x2bfa32['style']['display'] = 'block';
        _0x2bfa32['style']['left'] = _0x514b1b + 'px';
        _0x2bfa32['style']['top'] = _0x101467 + 'px';
    }
    _0x16030c['onload'] = () => {
        _0x24dabd();
        _0x4b9a7b();
    };
    if (_0x16030c['complete'] && _0x16030c['naturalWidth'] > 0x0) {
        _0x24dabd();
        _0x4b9a7b();
    }
    _0x36b03f['addEventListener']('mousedown', _0x58e437 => {
        if (_0x58e437['button'] === 0x0) {
            _0x323c1d = !![];
            _0x4cd7cc = _0x58e437['clientX'];
            _0x5e1992 = _0x58e437['clientY'];
            _0x37db4f = _0x2adf64;
            _0xcf65e6 = _0x408692;
            _0x36b03f['style']['cursor'] = 'grabbing';
            _0x58e437['stopPropagation']();
        }
    });
    window['addEventListener']('mousemove', _0x11e6f0 => {
        if (!_0x323c1d)
            return;
        const _0x30d008 = _0x4cd7cc - _0x11e6f0['clientX'];
        const _0x3875c7 = _0x5e1992 - _0x11e6f0['clientY'];
        const _0x43ac7c = Math['max'](0x0, _0x16030c['naturalWidth'] - _0x1bce91['width']);
        const _0x15c11e = Math['max'](0x0, _0x16030c['naturalHeight'] - _0x1bce91['height']);
        _0x2adf64 = Math['max'](0x0, Math['min'](_0x43ac7c, _0x37db4f + _0x30d008));
        _0x408692 = Math['max'](0x0, Math['min'](_0x15c11e, _0xcf65e6 + _0x3875c7));
        _0x24dabd();
        _0x4b9a7b();
    });
    window['addEventListener']('mouseup', _0x2629d0 => {
        if (_0x323c1d) {
            _0x323c1d = ![];
            _0x36b03f['style']['cursor'] = 'grab';
        }
    });
    _0x36b03f['addEventListener']('click', _0x5f070d => {
        const _0x5900a8 = _0x36b03f['getBoundingClientRect']();
        const _0x23623b = _0x5f070d['clientX'] - _0x5900a8['left'] + _0x2adf64;
        const _0x35a068 = _0x5f070d['clientY'] - _0x5900a8['top'] + _0x408692;
        const _0x27aaaf = Math['max'](0x1, Math['ceil'](_0x16030c['naturalWidth'] / _0x3cc209));
        const _0x5de3af = Math['floor'](_0x23623b / _0x3cc209);
        const _0x57a761 = Math['floor'](_0x35a068 / _0x3cc209);
        const _0x3be1cd = _0x57a761 * _0x27aaaf + _0x5de3af + 0x1;
        _0x2b372f['EDITOR']['selectedTileGid'] = _0x3be1cd;
        _0x4b9a7b();
    });
    _0x10fa26['appendChild'](_0x36b03f);
    const _0x38b18c = document['createElement']('div');
    _0x38b18c['className'] = 'tile-btn\x20eraser-btn';
    _0x38b18c['title'] = 'Eraser\x20(gid\x200)';
    _0x38b18c['onclick'] = () => {
        _0x2b372f['EDITOR']['selectedTileGid'] = 0x0;
        _0x2bfa32['style']['display'] = 'none';
    };
    _0x10fa26['appendChild'](_0x38b18c);
    document['getElementById']('editor-toggle-btn')['addEventListener']('click', function () {
        _0x2b372f['EDITOR']['enabled'] = !_0x2b372f['EDITOR']['enabled'];
        const _0x18fa35 = document['getElementById']('editor-tools');
        if (_0x2b372f['EDITOR']['enabled']) {
            this['innerText'] = 'Editor:\x20ON';
            this['classList']['add']('active');
            _0x18fa35['style']['display'] = 'flex';
        } else {
            this['innerText'] = 'Editor:\x20OFF';
            this['classList']['remove']('active');
            _0x18fa35['style']['display'] = 'none';
        }
    });
    const _0x449544 = document['getElementById']('start-game-btn');
    if (_0x449544) {
        _0x449544['addEventListener']('click', () => {
            if (_0x2aa407)
                _0x2aa407['send'](JSON['stringify']({ 'type': 'start_game' }));
        });
    }
    const _0x229399 = document['getElementById']('rolelist-toggle-btn');
    if (_0x229399) {
        let _0x581c85 = 'subalignments';
        _0x229399['addEventListener']('click', () => {
            if (_0x581c85 === 'subalignments')
                _0x581c85 = 'precise';
            else if (_0x581c85 === 'precise')
                _0x581c85 = 'off';
            else
                _0x581c85 = 'subalignments';
            _0x229399['innerText'] = 'Role\x20List:\x20' + _0x581c85['charAt'](0x0)['toUpperCase']() + _0x581c85['slice'](0x1);
            if (_0x2aa407)
                _0x2aa407['send'](JSON['stringify']({
                    'type': 'set_rolelist_mode',
                    'mode': _0x581c85
                }));
        });
    }
    document['querySelectorAll']('#editor-ui\x20.layer-btn')['forEach'](_0x152f04 => {
        if (_0x152f04['id'] === 'editor-toggle-btn' || _0x152f04['id'] === 'start-game-btn' || _0x152f04['id'] === 'rolelist-toggle-btn')
            return;
        _0x152f04['addEventListener']('click', () => {
            document['querySelectorAll']('#layer-toggles\x20.layer-btn')['forEach'](_0xf74134 => _0xf74134['classList']['remove']('active'));
            _0x152f04['classList']['add']('active');
            _0x2b372f['EDITOR']['selectedLayer'] = _0x152f04['dataset']['layer'];
        });
    });
}
function _0x397d95(_0x33386b) {
    if (_0x2aa407)
        _0x2aa407['send'](JSON['stringify']({
            'type': 'kick',
            'targetId': _0x33386b
        }));
}
function _0x453ce8(_0x17448c) {
    if (_0x2aa407)
        _0x2aa407['send'](JSON['stringify']({
            'type': 'ban',
            'targetId': _0x17448c
        }));
}
function _0x381afa(_0x218cc6, _0x1fa67c, _0x39ce00, _0x3552fc) {
    const _0xedf6e1 = document['getElementById']('admin-panel');
    if (_0xedf6e1)
        _0xedf6e1['remove']();
    if (_0xedf6e1 && _0xedf6e1['dataset']['target'] === String(_0x218cc6))
        return;
    const _0x1050ac = document['createElement']('div');
    _0x1050ac['id'] = 'admin-panel';
    _0x1050ac['dataset']['target'] = String(_0x218cc6);
    _0x1050ac['style']['cssText'] = 'position:fixed;z-index:2000;display:flex;flex-direction:column;background:rgba(0,0,0,0.9);border:2px\x20solid\x20rgba(255,255,255,0.15);min-width:140px;';
    const _0x334c46 = document['createElement']('div');
    _0x334c46['style']['cssText'] = 'padding:8px\x2014px;font-weight:bold;font-size:13px;color:#ffffff;background:rgba(0,0,0,0.6);border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);';
    _0x334c46['textContent'] = _0x1fa67c;
    _0x1050ac['appendChild'](_0x334c46);
    const _0x1839de = document['createElement']('button');
    _0x1839de['textContent'] = 'Kick';
    _0x1839de['style']['cssText'] = 'background:transparent;color:white;border:none;border-bottom:1px\x20solid\x20rgba(255,255,255,0.1);padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x1839de['onmouseenter'] = () => _0x1839de['style']['background'] = 'rgba(255,255,255,0.1)';
    _0x1839de['onmouseleave'] = () => _0x1839de['style']['background'] = 'transparent';
    _0x1839de['onclick'] = () => {
        _0x397d95(_0x218cc6);
        _0x1050ac['remove']();
    };
    _0x1050ac['appendChild'](_0x1839de);
    const _0x3a4345 = document['createElement']('button');
    _0x3a4345['textContent'] = 'Ban';
    _0x3a4345['style']['cssText'] = 'background:transparent;color:#ff4444;border:none;padding:8px\x2014px;font-weight:bold;font-size:13px;cursor:pointer;text-align:left;font-family:Segoe\x20UI,Tahoma,Geneva,Verdana,sans-serif;';
    _0x3a4345['onmouseenter'] = () => _0x3a4345['style']['background'] = 'rgba(255,0,0,0.15)';
    _0x3a4345['onmouseleave'] = () => _0x3a4345['style']['background'] = 'transparent';
    _0x3a4345['onclick'] = () => {
        _0x453ce8(_0x218cc6);
        _0x1050ac['remove']();
    };
    _0x1050ac['appendChild'](_0x3a4345);
    document['body']['appendChild'](_0x1050ac);
    const _0xcb27ea = _0x1050ac['offsetWidth'] || 0x91;
    const _0x5187de = _0x1050ac['offsetHeight'] || 0x50;
    let _0x3e17e6 = _0x39ce00 - _0xcb27ea;
    let _0x39f5c3 = _0x3552fc;
    if (_0x3e17e6 < 0x4)
        _0x3e17e6 = _0x39ce00;
    if (_0x39f5c3 + _0x5187de > window['innerHeight'] - 0x4)
        _0x39f5c3 = window['innerHeight'] - _0x5187de - 0x4;
    _0x1050ac['style']['left'] = _0x3e17e6 + 'px';
    _0x1050ac['style']['top'] = _0x39f5c3 + 'px';
    const _0x25dfbb = _0x5d2ad0 => {
        if (!_0x1050ac['contains'](_0x5d2ad0['target'])) {
            _0x1050ac['remove']();
            document['removeEventListener']('mousedown', _0x25dfbb);
        }
    };
    setTimeout(() => document['addEventListener']('mousedown', _0x25dfbb), 0x0);
}
function _0x5eae94() {
    const _0x1b2e54 = document['getElementById']('leaderboard-list');
    _0x1b2e54['innerHTML'] = '';
    const _0x2321cd = document['createElement']('div');
    _0x2321cd['className'] = 'leaderboard-entry';
    const _0xbeb706 = document['createElement']('span');
    _0xbeb706['textContent'] = _0x2b38d1 + (_0x5dc788 ? '\x20[🗝️]' : '');
    if (_0x4adb1c['has'](_0x19a416) && !_0x3c368c['isDead']) {
        _0xbeb706['style']['color'] = '#cc88ff';
    }
    _0x2321cd['appendChild'](_0xbeb706);
    _0x1b2e54['appendChild'](_0x2321cd);
    for (const _0x3a4721 in _0x4666d8) {
        const _0x209245 = document['createElement']('div');
        _0x209245['className'] = 'leaderboard-entry';
        const _0x1e8266 = document['createElement']('span');
        _0x1e8266['textContent'] = _0x4666d8[_0x3a4721]['name'] + (_0x4666d8[_0x3a4721]['isOwner'] ? '\x20[🗝️]' : '');
        if (_0x4adb1c['has'](parseInt(_0x3a4721)) && !_0x4666d8[_0x3a4721]['isDead']) {
            _0x1e8266['style']['color'] = '#cc88ff';
        }
        _0x209245['appendChild'](_0x1e8266);
        if (_0x5dc788 && !_0x4666d8[_0x3a4721]['isOwner']) {
            const _0x4bdef4 = _0x4666d8[_0x3a4721]['id'];
            const _0x181b88 = _0x4666d8[_0x3a4721]['name'];
            _0x209245['style']['cursor'] = 'context-menu';
            _0x209245['addEventListener']('contextmenu', _0x41ba5e => {
                _0x41ba5e['preventDefault']();
                _0x41ba5e['stopPropagation']();
                _0x381afa(_0x4bdef4, _0x181b88, _0x41ba5e['clientX'], _0x41ba5e['clientY']);
            });
        }
        _0x1b2e54['appendChild'](_0x209245);
    }
}
window['addEventListener']('resize', _0x1b521d);
function _0x1b521d() {
    _0x1a197e['width'] = window['innerWidth'];
    _0x1a197e['height'] = window['innerHeight'];
    _0x2b372f['SYSTEM']['viewScale'] = Math['max'](_0x1a197e['width'] / _0x1d31f4, _0x1a197e['height'] / _0xe76201);
    _0x2b372f['CAMERA']['width'] = _0x1a197e['width'] / _0x2b372f['SYSTEM']['viewScale'];
    _0x2b372f['CAMERA']['height'] = _0x1a197e['height'] / _0x2b372f['SYSTEM']['viewScale'];
    _0x140a93['imageSmoothingEnabled'] = ![];
}
function _0x527585(_0x215e7a) {
    if (_0x215e7a['ctrlKey'] || _0x215e7a['metaKey']) {
        if (_0x215e7a['type'] === 'wheel' || [
                '=',
                '-',
                '0',
                '+'
            ]['includes'](_0x215e7a['key']) || [
                'NumpadAdd',
                'NumpadSubtract'
            ]['includes'](_0x215e7a['code'])) {
            _0x215e7a['preventDefault']();
            _0x215e7a['stopImmediatePropagation']();
        }
    }
}
window['addEventListener']('wheel', _0x527585, { 'passive': ![] });
window['addEventListener']('keydown', _0x527585, { 'passive': ![] });
window['addEventListener']('keydown', _0x1afb61 => {
    const _0x46e683 = _0x1afb61['key']['toLowerCase']();
    if (_0x46e683 === 'tab') {
        _0x1afb61['preventDefault']();
        const _0x2cca20 = document['getElementById']('will-ui');
        const _0x166a06 = document['getElementById']('will-input');
        if (_0x2cca20['style']['display'] === 'flex') {
            _0x2cca20['style']['display'] = 'none';
            if (_0x2aa407)
                _0x2aa407['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x166a06['value']
                }));
            _0x166a06['blur']();
        } else {
            _0x2cca20['style']['display'] = 'flex';
            _0x166a06['focus']();
            for (let _0x49e0b6 in _0x2b372f['INPUTS']['keys'])
                _0x2b372f['INPUTS']['keys'][_0x49e0b6] = ![];
        }
        return;
    }
    if (_0x1afb61['key'] === 'Enter') {
        if (_0x2b2897) {
            const _0xe8c83a = document['getElementById']('play-btn');
            if (_0xe8c83a)
                _0xe8c83a['click']();
            return;
        }
        if (!_0x2aa407 || _0x2aa407['readyState'] !== WebSocket['OPEN'])
            return;
        const _0x4acf70 = document['getElementById']('chat-ui');
        const _0x24882d = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x24882d) {
            const _0x16cf37 = _0x24882d['value']['trim']();
            if (_0x16cf37['length'] > 0x0) {
                _0x2aa407['send'](JSON['stringify']({
                    'type': 'chat',
                    'text': _0x16cf37
                }));
            }
            _0x24882d['value'] = '';
            _0x4acf70['style']['display'] = 'none';
            _0x24882d['blur']();
        } else {
            _0x4acf70['style']['display'] = 'block';
            _0x24882d['focus']();
            for (let _0x3bb1be in _0x2b372f['INPUTS']['keys'])
                _0x2b372f['INPUTS']['keys'][_0x3bb1be] = ![];
        }
        _0x1afb61['preventDefault']();
        return;
    }
    if (_0x1afb61['key'] === 'Escape') {
        const _0x415794 = document['getElementById']('guide-ui');
        if (_0x415794 && _0x415794['style']['display'] === 'flex') {
            _0x415794['style']['display'] = 'none';
            return;
        }
        const _0x3be38d = document['getElementById']('ability-ui');
        if (_0x3be38d && _0x3be38d['style']['display'] === 'block') {
            _0x3be38d['style']['display'] = 'none';
            return;
        }
        const _0x13139e = document['getElementById']('settings-panel');
        if (_0x13139e && _0x13139e['style']['display'] === 'block') {
            _0x13139e['style']['display'] = 'none';
            return;
        }
        const _0x37ba1c = document['getElementById']('mayor-confirm-dialog');
        if (_0x37ba1c && _0x37ba1c['style']['display'] === 'flex') {
            _0x37ba1c['style']['display'] = 'none';
            return;
        }
        const _0x2b76db = document['getElementById']('target-chooser-ui');
        if (_0x2b76db && _0x2b76db['style']['display'] === 'flex') {
            _0x2b76db['style']['display'] = 'none';
            return;
        }
        const _0x12e907 = document['getElementById']('chat-ui');
        const _0x1e1d31 = document['getElementById']('chat-input');
        if (document['activeElement'] === _0x1e1d31) {
            _0x1e1d31['value'] = '';
            _0x12e907['style']['display'] = 'none';
            _0x1e1d31['blur']();
            _0x1afb61['preventDefault']();
            return;
        }
    }
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        if (_0x2b372f['INPUTS']['keys']['hasOwnProperty'](_0x46e683))
            _0x2b372f['INPUTS']['keys'][_0x46e683] = !![];
        if (!_0x2aa407 || _0x2aa407['readyState'] !== WebSocket['OPEN'])
            return;
        if (_0x46e683 === 'h' && !_0x1afb61['repeat']) {
            const _0x2b1933 = document['getElementById']('guide-ui');
            if (_0x2b1933) {
                _0x2b1933['style']['display'] = _0x2b1933['style']['display'] === 'flex' ? 'none' : 'flex';
            }
            return;
        }
        if (_0x46e683 === 't' && !_0x1afb61['repeat']) {
            if (_0x3c368c['isDead'])
                return;
            if (_0x3de780 === 'Mayor') {
                if (_0x4adb1c['has'](_0x19a416)) {
                    _0x3c45a7('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0x268263 = document['getElementById']('mayor-confirm-dialog');
                if (_0x268263)
                    _0x268263['style']['display'] = 'flex';
                return;
            }
            if (_0x2b372f['GAME_STATE'] === 'NIGHT') {
                if (!_0x2b372f['NIGHT_ABILITY_OPEN']) {
                    _0x3c45a7('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x16e7ff = document['getElementById']('ability-ui');
                if (_0x16e7ff) {
                    if (_0x16e7ff['style']['display'] === 'block') {
                        _0x16e7ff['style']['display'] = 'none';
                    } else {
                        _0x45f80d();
                        _0x16e7ff['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x2b372f['GAME_STATE'] === 'DAY_DISCUSS' || _0x2b372f['GAME_STATE'] === 'DAY_VOTE') {
                _0x3c45a7('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        }
        if (_0x46e683 === 'e' && !_0x3c368c['isDead']) {
            const _0x104d96 = Date['now']();
            if (!window['_lastDoorSend'] || _0x104d96 - window['_lastDoorSend'] >= 0x1f4) {
                window['_lastDoorSend'] = _0x104d96;
                _0x2aa407['send'](JSON['stringify']({ 'type': 'interact' }));
            }
        }
    }
});
window['addEventListener']('keyup', _0x231d9b => {
    if (document['activeElement']['tagName'] !== 'INPUT' && document['activeElement']['tagName'] !== 'TEXTAREA') {
        const _0x298be7 = _0x231d9b['key']['toLowerCase']();
        if (_0x2b372f['INPUTS']['keys']['hasOwnProperty'](_0x298be7))
            _0x2b372f['INPUTS']['keys'][_0x298be7] = ![];
    }
});
window['addEventListener']('mousemove', _0x37448e => {
    _0x2b372f['INPUTS']['mouseX'] = _0x37448e['clientX'];
    _0x2b372f['INPUTS']['mouseY'] = _0x37448e['clientY'];
    if (_0x2b372f['INPUTS']['isMouseDown'] && _0x2b372f['EDITOR']['enabled']) {
        _0x3228f7(_0x37448e['clientX'], _0x37448e['clientY']);
    }
});
window['addEventListener']('mousedown', _0x56ab84 => {
    if (_0x56ab84['target']['closest']('#editor-ui') || _0x56ab84['target']['closest']('#leaderboard-ui') || _0x56ab84['target']['closest']('#chat-log-ui') || _0x56ab84['target']['closest']('#target-chooser-ui') || _0x56ab84['target']['closest']('#guide-ui') || _0x56ab84['target']['closest']('#role-list-ui') || _0x56ab84['target']['closest']('#ability-ui') || _0x56ab84['target']['closest']('#settings-panel') || _0x56ab84['target']['closest']('#mayor-confirm-dialog') || _0x56ab84['target']['closest']('#mobile-action-bar') || _0x56ab84['target']['closest']('#mobile-top-bar') || _0x56ab84['target']['closest']('#mobile-joystick-zone') || _0x56ab84['target']['closest']('#mobile-chat-overlay') || _0x56ab84['target']['closest']('#will-ui') || _0x56ab84['target']['closest']('#vote-tally-panel'))
        return;
    if (_0x56ab84['button'] === 0x0) {
        _0x2b372f['INPUTS']['isMouseDown'] = !![];
        if (_0x2b372f['EDITOR']['enabled'])
            _0x3228f7(_0x56ab84['clientX'], _0x56ab84['clientY']);
    }
});
window['addEventListener']('mouseup', _0x59ff98 => {
    _0x2b372f['INPUTS']['isMouseDown'] = ![];
});
document['getElementById']('leaderboard-header')['addEventListener']('click', _0x4263cf => {
    if (_0x4263cf['target']['closest']('#settings-btn'))
        return;
    const _0x4c6b4a = document['getElementById']('leaderboard-list');
    const _0x4b0586 = document['getElementById']('leaderboard-toggle');
    if (_0x4c6b4a['style']['display'] === 'none') {
        _0x4c6b4a['style']['display'] = 'flex';
        _0x4b0586['style']['transform'] = 'rotate(0deg)';
    } else {
        _0x4c6b4a['style']['display'] = 'none';
        _0x4b0586['style']['transform'] = 'rotate(180deg)';
    }
});
const _0x24947e = document['getElementById']('close-target-btn');
if (_0x24947e) {
    _0x24947e['onclick'] = () => {
        document['getElementById']('target-chooser-ui')['style']['display'] = 'none';
    };
}
const _0x1a5fe9 = document['getElementById']('close-guide-btn');
if (_0x1a5fe9) {
    _0x1a5fe9['onclick'] = () => {
        document['getElementById']('guide-ui')['style']['display'] = 'none';
    };
}
const _0x23e1df = document['getElementById']('role-list-header');
if (_0x23e1df) {
    _0x23e1df['addEventListener']('click', () => {
        const _0x1f5f00 = document['getElementById']('role-list-items');
        const _0x422567 = document['getElementById']('role-list-toggle');
        if (_0x1f5f00['style']['display'] === 'none') {
            _0x1f5f00['style']['display'] = 'flex';
            _0x422567['style']['transform'] = 'rotate(0deg)';
        } else {
            _0x1f5f00['style']['display'] = 'none';
            _0x422567['style']['transform'] = 'rotate(180deg)';
        }
    });
}
function _0x413fc0() {
    const _0x3c155a = document['getElementById']('mobile-joystick-zone');
    const _0x245433 = document['getElementById']('mobile-joystick-base');
    const _0xf25bce = document['getElementById']('mobile-joystick-knob');
    if (_0x3c155a && _0x245433 && _0xf25bce) {
        const _0x38733d = 0x3e;
        const _0x152dba = (_0x583e69, _0x1ebce4) => {
            const _0x167fb2 = _0x245433['getBoundingClientRect']();
            const _0xb6ee5d = _0x167fb2['left'] + _0x167fb2['width'] / 0x2;
            const _0x10425b = _0x167fb2['top'] + _0x167fb2['height'] / 0x2;
            const _0x4e472c = _0x583e69 - _0xb6ee5d;
            const _0x3bedc8 = _0x1ebce4 - _0x10425b;
            const _0x12ec44 = Math['hypot'](_0x4e472c, _0x3bedc8);
            if (_0x12ec44 === 0x0) {
                _0x106db7 = 0x0;
                _0x198710 = 0x0;
                _0x3231d2 = ![];
                _0xf25bce['style']['transform'] = 'translate(0px,\x200px)';
                return;
            }
            const _0x269cfd = Math['min'](_0x12ec44, _0x38733d);
            const _0xbad6ec = _0x4e472c / _0x12ec44 * _0x269cfd;
            const _0x367670 = _0x3bedc8 / _0x12ec44 * _0x269cfd;
            _0x106db7 = _0xbad6ec / _0x38733d;
            _0x198710 = _0x367670 / _0x38733d;
            _0x3231d2 = _0x12ec44 >= _0x38733d * 0.75;
            _0xf25bce['style']['transform'] = 'translate(' + _0xbad6ec + 'px,\x20' + _0x367670 + 'px)';
        };
        const _0x3a3f44 = _0x43bf0e => {
            for (let _0x35c7af = 0x0; _0x35c7af < _0x43bf0e['changedTouches']['length']; _0x35c7af++) {
                const _0x1c9f96 = _0x43bf0e['changedTouches'][_0x35c7af];
                if (_0x122c80 === null) {
                    _0x122c80 = _0x1c9f96['identifier'];
                    _0x3ca2e5 = !![];
                    _0x152dba(_0x1c9f96['clientX'], _0x1c9f96['clientY']);
                    break;
                }
            }
        };
        const _0x807d2e = _0x335352 => {
            for (let _0x49b63b = 0x0; _0x49b63b < _0x335352['changedTouches']['length']; _0x49b63b++) {
                const _0x19f49d = _0x335352['changedTouches'][_0x49b63b];
                if (_0x19f49d['identifier'] === _0x122c80) {
                    _0x152dba(_0x19f49d['clientX'], _0x19f49d['clientY']);
                    break;
                }
            }
        };
        const _0x16be8f = _0x1fb656 => {
            for (let _0x2fc951 = 0x0; _0x2fc951 < _0x1fb656['changedTouches']['length']; _0x2fc951++) {
                const _0x534513 = _0x1fb656['changedTouches'][_0x2fc951];
                if (_0x534513['identifier'] === _0x122c80) {
                    _0x122c80 = null;
                    _0x3ca2e5 = ![];
                    _0x106db7 = 0x0;
                    _0x198710 = 0x0;
                    _0x3231d2 = ![];
                    _0xf25bce['style']['transform'] = 'translate(0px,\x200px)';
                    break;
                }
            }
        };
        _0x3c155a['addEventListener']('touchstart', _0x36e634 => {
            _0x36e634['preventDefault']();
            _0x3a3f44(_0x36e634);
        }, { 'passive': ![] });
        window['addEventListener']('touchmove', _0x807d2e, { 'passive': !![] });
        window['addEventListener']('touchend', _0x16be8f, { 'passive': !![] });
        window['addEventListener']('touchcancel', _0x16be8f, { 'passive': !![] });
    }
    const _0x5dd34c = (_0x17b5da, _0x4e6c41) => {
        const _0x3fa74c = _0x17b5da / _0x2b372f['SYSTEM']['viewScale'];
        const _0x1d3829 = _0x4e6c41 / _0x2b372f['SYSTEM']['viewScale'];
        const _0x198a85 = _0x3c368c['x'] - _0x2b372f['CAMERA']['x'] + _0x3c368c['width'] / 0x2;
        const _0xf14c5f = _0x3c368c['y'] - _0x2b372f['CAMERA']['y'] + _0x3c368c['height'] / 0x2;
        _0xc812ec = Math['atan2'](_0x1d3829 - _0xf14c5f, _0x3fa74c - _0x198a85);
        _0x2d5709 = !![];
        _0x2b372f['INPUTS']['mouseX'] = _0x17b5da;
        _0x2b372f['INPUTS']['mouseY'] = _0x4e6c41;
    };
    _0x1a197e['addEventListener']('touchstart', _0xba91fd => {
        if (_0x2b2897)
            return;
        for (let _0x3d573c = 0x0; _0x3d573c < _0xba91fd['changedTouches']['length']; _0x3d573c++) {
            const _0x1a427f = _0xba91fd['changedTouches'][_0x3d573c];
            if (_0x1a427f['identifier'] !== _0x122c80 && _0x1de213 === null) {
                _0x1de213 = _0x1a427f['identifier'];
                _0x5dd34c(_0x1a427f['clientX'], _0x1a427f['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    _0x1a197e['addEventListener']('touchmove', _0x333d53 => {
        if (_0x2b2897)
            return;
        for (let _0x19d146 = 0x0; _0x19d146 < _0x333d53['changedTouches']['length']; _0x19d146++) {
            const _0x5c8b1a = _0x333d53['changedTouches'][_0x19d146];
            if (_0x5c8b1a['identifier'] === _0x1de213) {
                _0x5dd34c(_0x5c8b1a['clientX'], _0x5c8b1a['clientY']);
                break;
            }
        }
    }, { 'passive': !![] });
    const _0x178aa4 = _0x18e278 => {
        for (let _0x5f5952 = 0x0; _0x5f5952 < _0x18e278['changedTouches']['length']; _0x5f5952++) {
            const _0x2965a0 = _0x18e278['changedTouches'][_0x5f5952];
            if (_0x2965a0['identifier'] === _0x1de213) {
                _0x1de213 = null;
                _0x2d5709 = ![];
                break;
            }
        }
    };
    _0x1a197e['addEventListener']('touchend', _0x178aa4, { 'passive': !![] });
    _0x1a197e['addEventListener']('touchcancel', _0x178aa4, { 'passive': !![] });
    const _0x5defbc = document['getElementById']('mob-sprint-btn');
    if (_0x5defbc) {
        _0x5defbc['addEventListener']('click', _0x200182 => {
            _0x200182['stopPropagation']();
            _0x3c4448 = !_0x3c4448;
            _0x5defbc['classList']['toggle']('active', _0x3c4448);
        });
    }
    const _0x597773 = document['getElementById']('mob-interact-btn');
    if (_0x597773) {
        _0x597773['addEventListener']('click', _0x222a94 => {
            _0x222a94['stopPropagation']();
            if (!_0x3c368c['isDead']) {
                const _0x3705f8 = Date['now']();
                if (!window['_lastDoorSend'] || _0x3705f8 - window['_lastDoorSend'] >= 0x1f4) {
                    window['_lastDoorSend'] = _0x3705f8;
                    if (_0x2aa407 && _0x2aa407['readyState'] === WebSocket['OPEN'])
                        _0x2aa407['send'](JSON['stringify']({ 'type': 'interact' }));
                }
            }
        });
    }
    const _0x3162dc = document['getElementById']('mob-ability-btn');
    if (_0x3162dc) {
        _0x3162dc['addEventListener']('click', _0x5df29b => {
            _0x5df29b['stopPropagation']();
            if (_0x3c368c['isDead'])
                return;
            if (_0x3de780 === 'Mayor') {
                if (_0x4adb1c['has'](_0x19a416)) {
                    _0x3c45a7('You\x20have\x20already\x20revealed\x20yourself\x20as\x20the\x20Mayor.', !![]);
                    return;
                }
                const _0xd5b4ce = document['getElementById']('mayor-confirm-dialog');
                if (_0xd5b4ce)
                    _0xd5b4ce['style']['display'] = 'flex';
                return;
            }
            if (_0x2b372f['GAME_STATE'] === 'NIGHT') {
                if (!_0x2b372f['NIGHT_ABILITY_OPEN']) {
                    _0x3c45a7('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                    return;
                }
                const _0x5d5c2b = document['getElementById']('ability-ui');
                if (_0x5d5c2b) {
                    if (_0x5d5c2b['style']['display'] === 'block') {
                        _0x5d5c2b['style']['display'] = 'none';
                    } else {
                        _0x45f80d();
                        _0x5d5c2b['style']['display'] = 'block';
                    }
                }
                return;
            }
            if (_0x2b372f['GAME_STATE'] === 'DAY_DISCUSS' || _0x2b372f['GAME_STATE'] === 'DAY_VOTE') {
                _0x3c45a7('Abilities\x20can\x20only\x20be\x20used\x20during\x20the\x20first\x2015\x20seconds\x20of\x20night.', !![]);
                return;
            }
        });
    }
    const _0x191eac = document['getElementById']('mob-will-btn');
    const _0x1b5f2c = document['getElementById']('will-ui');
    const _0x5ed9cc = document['getElementById']('will-input');
    const _0x11725a = document['getElementById']('close-will-btn');
    const _0x4814c1 = () => {
        if (!_0x1b5f2c)
            return;
        if (_0x1b5f2c['style']['display'] === 'flex') {
            _0x1b5f2c['style']['display'] = 'none';
            if (_0x2aa407 && _0x2aa407['readyState'] === WebSocket['OPEN'] && _0x5ed9cc) {
                _0x2aa407['send'](JSON['stringify']({
                    'type': 'update_will',
                    'text': _0x5ed9cc['value']
                }));
            }
            if (_0x5ed9cc)
                _0x5ed9cc['blur']();
        } else {
            _0x1b5f2c['style']['display'] = 'flex';
            if (_0x5ed9cc)
                _0x5ed9cc['focus']();
        }
    };
    if (_0x191eac)
        _0x191eac['addEventListener']('click', _0x192670 => {
            _0x192670['stopPropagation']();
            _0x4814c1();
        });
    if (_0x11725a)
        _0x11725a['addEventListener']('click', _0xb65e79 => {
            _0xb65e79['stopPropagation']();
            _0x4814c1();
        });
    const _0x2e09f5 = document['getElementById']('mob-chat-btn');
    const _0x219c38 = document['getElementById']('mobile-chat-overlay');
    const _0x31d3bd = document['getElementById']('mobile-chat-input');
    const _0x1e9601 = document['getElementById']('mobile-chat-send');
    const _0x5d3ecf = document['getElementById']('mobile-chat-cancel');
    const _0x23f784 = () => {
        if (!_0x219c38 || !_0x31d3bd)
            return;
        _0x219c38['style']['display'] = 'flex';
        _0x31d3bd['value'] = '';
        _0x31d3bd['focus']();
    };
    const _0x2ee1fa = () => {
        if (!_0x219c38 || !_0x31d3bd)
            return;
        _0x219c38['style']['display'] = 'none';
        _0x31d3bd['blur']();
    };
    const _0xf19194 = () => {
        if (!_0x31d3bd)
            return;
        const _0x48a153 = _0x31d3bd['value']['trim']();
        if (_0x48a153['length'] > 0x0 && _0x2aa407 && _0x2aa407['readyState'] === WebSocket['OPEN']) {
            _0x2aa407['send'](JSON['stringify']({
                'type': 'chat',
                'text': _0x48a153
            }));
        }
        _0x31d3bd['value'] = '';
        _0x2ee1fa();
    };
    if (_0x2e09f5)
        _0x2e09f5['addEventListener']('click', _0x2f7360 => {
            _0x2f7360['stopPropagation']();
            _0x23f784();
        });
    if (_0x1e9601)
        _0x1e9601['addEventListener']('click', _0x34f44f => {
            _0x34f44f['stopPropagation']();
            _0xf19194();
        });
    if (_0x5d3ecf)
        _0x5d3ecf['addEventListener']('click', _0x52b965 => {
            _0x52b965['stopPropagation']();
            _0x2ee1fa();
        });
    if (_0x31d3bd) {
        _0x31d3bd['addEventListener']('keydown', _0xb7077b => {
            if (_0xb7077b['key'] === 'Enter') {
                _0xb7077b['preventDefault']();
                _0xf19194();
            } else if (_0xb7077b['key'] === 'Escape') {
                _0x2ee1fa();
            }
        });
    }
    const _0x4d91d0 = document['getElementById']('mob-top-chat');
    if (_0x4d91d0)
        _0x4d91d0['addEventListener']('click', _0x403886 => {
            _0x403886['stopPropagation']();
            _0x23f784();
        });
    const _0x5f2dd9 = document['getElementById']('mob-top-will');
    if (_0x5f2dd9)
        _0x5f2dd9['addEventListener']('click', _0x176d89 => {
            _0x176d89['stopPropagation']();
            _0x4814c1();
        });
    const _0x1ca3a2 = document['getElementById']('mob-top-roles');
    if (_0x1ca3a2) {
        _0x1ca3a2['addEventListener']('click', _0x2f45d5 => {
            _0x2f45d5['stopPropagation']();
            const _0x5dd6da = document['getElementById']('role-list-ui');
            const _0x1bfad9 = document['getElementById']('leaderboard-ui');
            if (_0x1bfad9)
                _0x1bfad9['style']['display'] = 'none';
            if (_0x5dd6da)
                _0x5dd6da['style']['display'] = _0x5dd6da['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x1c48b6 = document['getElementById']('mob-top-players');
    if (_0x1c48b6) {
        _0x1c48b6['addEventListener']('click', _0x768770 => {
            _0x768770['stopPropagation']();
            const _0x4e6177 = document['getElementById']('leaderboard-ui');
            const _0x54c3f7 = document['getElementById']('role-list-ui');
            if (_0x54c3f7)
                _0x54c3f7['style']['display'] = 'none';
            if (_0x4e6177)
                _0x4e6177['style']['display'] = _0x4e6177['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    const _0x486357 = document['getElementById']('mob-top-help');
    if (_0x486357) {
        _0x486357['addEventListener']('click', _0x515486 => {
            _0x515486['stopPropagation']();
            const _0x41c3ea = document['getElementById']('guide-ui');
            if (_0x41c3ea)
                _0x41c3ea['style']['display'] = _0x41c3ea['style']['display'] === 'flex' ? 'none' : 'flex';
        });
    }
    window['addEventListener']('touchstart', () => {
        if (!_0x3966dd) {
            _0x3966dd = !![];
            _0x37d0da();
        }
    }, {
        'passive': !![],
        'once': !![]
    });
}
