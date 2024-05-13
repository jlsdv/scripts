

function getURLParameter(name) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] === name) {
                return pair[1];
            }
        }
        return "";
    }

const domain = getURLParameter("domain");
const campaignIdBO = getURLParameter("bo");
const campaignIdSO = getURLParameter("so");
const var7 = getURLParameter("var7");
let stringParams = ``;


    if (getURLParameter("cep")) {
        stringParams = `cep${window.location.href.split("cep")[1]}`;
    } else {
        stringParams = ``;
    }

let backurl = `https://${domain}/${campaignIdBO}?var7=${var7}&${stringParams}`;
    (function (w) {
        w.history.pushState({}, '', document.location.href);
        w.addEventListener('popstate', function () {
            window.onbeforeunload = null;
            document.location = backurl
        });
    })(window);

fetch("https://ipapi.co/json")
      .then(response => response.json())
      .then(data => document.querySelector("#city").innerHTML = data.city)
      .catch(error => console.error("Error:", error));

        document.querySelectorAll(".trackinglink").forEach(link => {
            link.addEventListener("click", function (e) {
                openInNewTab(
                    `https://${domain}/${campaignIdSO}?var7=${var7}&${stringParams}`);
                window.location.replace(
                    `https://${domain}/click`);
            })
        });

        function openInNewTab(url) {
            var win = window.open(url, '_blank');
            win.focus();
        }


var _0x3f8f1 = _0xe225;
function _0xe225(_0x1fc6a2, _0x43a3cd) {
    var _0x57b8a3 = _0x48ba();
    return _0xe225 = function (_0x2fd8cc, _0x124b52) {
        _0x2fd8cc = _0x2fd8cc - (-0xfad * -0x2 + 0x1c * -0x4 + -0xae * 0x2b);
        var _0x53f814 = _0x57b8a3[_0x2fd8cc];
        return _0x53f814;
    }, _0xe225(_0x1fc6a2, _0x43a3cd);
}
function _0x48ba() {
    var _0x4ff177 = [
        'gAhHY',
        'length',
        '.submit-bt',
        'KCQhK',
        'vMWAy',
        '3726864KGJIUq',
        '533223WCKvjJ',
        'ithKT',
        'html,\x20body',
        'checkbox-i',
        'addClass',
        '2695195HtGKhp',
        'GaomZ',
        'oZWsZ',
        'tem-error',
        'bind',
        'FVzRP',
        'split',
        'aMJdx',
        '-selected',
        '966456oGbfuz',
        '.checkbox-',
        'ready',
        'okFam',
        'checked\x20tr',
        'bGoZE',
        'siblings',
        'height',
        'Mjobf',
        'removeClas',
        'gkAhZ',
        'PUcwd',
        'PxYeE',
        'FcXSq',
        'animate',
        '6JuEzVg',
        '.step-item',
        'JvVcg',
        '227211hqWZCY',
        'RxaFL',
        'TEBrn',
        'item',
        'jCioR',
        'em.preload',
        '.slider-it',
        'DabRy',
        'visible',
        'IjJYR',
        '.checked',
        'KOChh',
        '.step-btn',
        'WAAPr',
        'KxZII',
        '5|4|2|1|3|',
        'next',
        'click',
        'toggleClas',
        '2541760kSoZvM',
        'MVYNE',
        'ruont',
        'not',
        'AUPOF',
        'quSWb',
        'active',
        'KTwzT',
        'SSINS',
        'preload',
        '3594031jTnGVX'
    ];
    _0x48ba = function () {
        return _0x4ff177;
    };
    return _0x48ba();
}
(function (_0x33fec1, _0x3f0cfa) {
    var _0x149df6 = _0xe225, _0x50e8e9 = _0x33fec1();
    while (!![]) {
        try {
            var _0x191089 = -parseInt(_0x149df6(0x1c9)) / (0x3 * 0x7d5 + -0x5a * -0x45 + -0x2fc0) + parseInt(_0x149df6(0x1c6)) / (-0x1524 + 0x8f2 + 0xc34) * (parseInt(_0x149df6(0x1ed)) / (0x12e + 0x1bae + -0x1cd9)) + -parseInt(_0x149df6(0x1dc)) / (0x25 * -0xd1 + -0x237 + -0x207 * -0x10) + parseInt(_0x149df6(0x1f2)) / (0xf76 * 0x1 + 0xd85 * 0x2 + -0x2a7b) + parseInt(_0x149df6(0x1b7)) / (-0x4 * 0x65 + -0xef4 + 0x108e) + -parseInt(_0x149df6(0x1e6)) / (0x1cae + 0x474 + -0x211b) + parseInt(_0x149df6(0x1ec)) / (-0x1bb8 + -0x2 * -0xc17 + 0x392);
            if (_0x191089 === _0x3f0cfa)
                break;
            else
                _0x50e8e9['push'](_0x50e8e9['shift']());
        } catch (_0x58dfcc) {
            _0x50e8e9['push'](_0x50e8e9['shift']());
        }
    }
}(_0x48ba, 0x1 * -0x906d + -0xf21 * 0x7c + -0x1 * -0xcd291), $(document)[_0x3f8f1(0x1b9)](function () {
    var _0x41113c = _0x3f8f1, _0x744046 = {
            'JvVcg': function (_0x1b0468, _0x28c3ae) {
                return _0x1b0468(_0x28c3ae);
            },
            'KxZII': _0x41113c(0x1ef),
            'KOChh': function (_0x1eaf21, _0x3a0200) {
                return _0x1eaf21(_0x3a0200);
            },
            'IjJYR': _0x41113c(0x1d8) + '0',
            'FVzRP': function (_0x54b729) {
                return _0x54b729();
            },
            'WAAPr': function (_0x2e35b5, _0x3a950c) {
                return _0x2e35b5 < _0x3a950c;
            },
            'FcXSq': function (_0x5db6ae, _0x1a1e3d) {
                return _0x5db6ae - _0x1a1e3d;
            },
            'SSINS': function (_0x73d563, _0x23b70a) {
                return _0x73d563(_0x23b70a);
            },
            'quSWb': _0x41113c(0x1cf) + 'em',
            'bGoZE': _0x41113c(0x1e2),
            'jCioR': function (_0x17ea05, _0x477783) {
                return _0x17ea05(_0x477783);
            },
            'gAhHY': _0x41113c(0x1cf) + _0x41113c(0x1ce),
            'RxaFL': _0x41113c(0x1e5),
            'ithKT': _0x41113c(0x1d1),
            'gkAhZ': _0x41113c(0x1f0) + _0x41113c(0x1b1),
            'AUPOF': function (_0x23b20a, _0x4ba6c4) {
                return _0x23b20a < _0x4ba6c4;
            },
            'vMWAy': function (_0x3d4aa8, _0x44795c) {
                return _0x3d4aa8(_0x44795c);
            },
            'Mjobf': _0x41113c(0x1d3),
            'ruont': function (_0x22dcad, _0x19ad0b) {
                return _0x22dcad(_0x19ad0b);
            },
            'KTwzT': _0x41113c(0x1bb) + _0x41113c(0x1b6),
            'TEBrn': function (_0x52a5a7, _0x59de2e) {
                return _0x52a5a7(_0x59de2e);
            },
            'DabRy': function (_0x22ce3b, _0x418986, _0x1c906a) {
                return _0x22ce3b(_0x418986, _0x1c906a);
            },
            'GaomZ': function (_0x697a24, _0x38d7fa) {
                return _0x697a24(_0x38d7fa);
            },
            'aMJdx': _0x41113c(0x1d5),
            'PUcwd': function (_0x591131, _0x61ccee) {
                return _0x591131(_0x61ccee);
            },
            'MVYNE': _0x41113c(0x1c7),
            'oZWsZ': function (_0xcf362f, _0x5be521) {
                return _0xcf362f(_0x5be521);
            },
            'KCQhK': _0x41113c(0x1e9) + 'n',
            'PxYeE': _0x41113c(0x1da),
            'okFam': _0x41113c(0x1b8) + _0x41113c(0x1cc)
        };
    function _0x54e0da() {
        var _0x476d9f = _0x41113c;
        _0x744046[_0x476d9f(0x1c8)]($, _0x744046[_0x476d9f(0x1d7)])[_0x476d9f(0x1c5)]({ 'scrollTop': _0x744046[_0x476d9f(0x1d4)]($, document)[_0x476d9f(0x1be)]() }, 0x1 * 0x2391 + 0x2ea * 0x5 + -0x2b7f);
    }
    _0x744046[_0x41113c(0x1b3)](_0x54e0da);
    var _0x3e6376 = _0x744046[_0x41113c(0x1f3)]($, _0x744046[_0x41113c(0x1b5)]), _0x16188c = -0x2 * 0x83b + 0x169 * -0xb + 0x665 * 0x5, _0x42afb8 = _0x744046[_0x41113c(0x1c2)]($, _0x744046[_0x41113c(0x1dd)]), _0x3d6c89 = _0x42afb8[_0x41113c(0x1e8)], _0x5f4552 = _0x744046[_0x41113c(0x1b0)]($, _0x744046[_0x41113c(0x1e1)])[_0x41113c(0x1e8)], _0x5a3b38 = -0x72b * 0x1 + -0xb40 + 0x126c;
    _0x3e6376[_0x41113c(0x1df)](_0x744046[_0x41113c(0x1ea)])['on'](_0x744046[_0x41113c(0x1c3)], function () {
        var _0x560972 = _0x41113c, _0x25e580 = _0x744046[_0x560972(0x1d2)][_0x560972(0x1b4)]('|'), _0xda7fd9 = -0x1fe9 + 0x6 * 0x4e5 + 0x28b;
        while (!![]) {
            switch (_0x25e580[_0xda7fd9++]) {
            case '0':
                _0x744046[_0x560972(0x1b3)](_0x54e0da);
                continue;
            case '1':
                _0x744046[_0x560972(0x1d6)](_0x5a3b38, _0x744046[_0x560972(0x1c4)](_0x5f4552, -0x28e * -0xf + -0x18b0 + 0xda1 * -0x1)) ? _0x5a3b38++ : _0x5a3b38 = -0x1407 * 0x1 + 0x2575 + 0x2 * -0x8b7;
                continue;
            case '2':
                _0x744046[_0x560972(0x1e4)]($, _0x744046[_0x560972(0x1e1)])[_0x560972(0x1c0) + 's'](_0x744046[_0x560972(0x1bc)])['eq'](_0x5a3b38)[_0x560972(0x1f1)](_0x744046[_0x560972(0x1bc)]);
                continue;
            case '3':
                _0x744046[_0x560972(0x1cd)]($, _0x744046[_0x560972(0x1e7)])[_0x560972(0x1d9)]()[_0x560972(0x1f1)](_0x744046[_0x560972(0x1ca)]);
                continue;
            case '4':
                _0x42afb8[_0x560972(0x1c0) + 's'](_0x744046[_0x560972(0x1ee)])['eq'](_0x16188c)[_0x560972(0x1f1)](_0x744046[_0x560972(0x1ee)])[_0x560972(0x1d9)]()[_0x560972(0x1f1)](_0x744046[_0x560972(0x1ca)]);
                continue;
            case '5':
                _0x16188c++;
                continue;
            }
            break;
        }
    }), _0x744046[_0x41113c(0x1b0)]($, _0x744046[_0x41113c(0x1ba)])['on'](_0x744046[_0x41113c(0x1c3)], function () {
        var _0x4e9e65 = _0x41113c;
        _0x744046[_0x4e9e65(0x1e0)](_0x744046[_0x4e9e65(0x1eb)]($, this)[_0x4e9e65(0x1bd)](_0x744046[_0x4e9e65(0x1bf)])[_0x4e9e65(0x1e8)], -0x1 * 0x232d + 0x21e4 + 0x14c) ? _0x744046[_0x4e9e65(0x1de)]($, this)[_0x4e9e65(0x1db) + 's'](_0x744046[_0x4e9e65(0x1e3)]) : (_0x744046[_0x4e9e65(0x1cb)]($, this)[_0x4e9e65(0x1f1)](_0x744046[_0x4e9e65(0x1c1)]), _0x744046[_0x4e9e65(0x1d0)](setTimeout, function () {
            var _0x5388f0 = _0x4e9e65;
            _0x744046[_0x5388f0(0x1cd)]($, this)[_0x5388f0(0x1c0) + 's'](_0x744046[_0x5388f0(0x1c1)]);
        }[_0x4e9e65(0x1b2)](this), -0x1e87 + 0x3df * -0xa + -0x1 * -0x4669));
    });
}));
