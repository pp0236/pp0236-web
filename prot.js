window.oncontextmenu = () => false;

window.addEventListener('keydown', event =>
{
    if(event.keyCode == 123 || event.ctrlKey && event.shiftKey && (event.keyCode == 73 || event.keyCode == 74))
    {
        event.preventDefault();
        // util.callFBI()
        return false;
    }
});

// antidebug
var y = (function () {
    var A = !![];
    return function (W, g) {
        var O = A ? function () {
            if (g) {
                var N = g['apply'](W, arguments);
                g = null;
                return N;
            }
        } : function () {
        };
        A = ![];
        return O;
    };
}());
(function () {
    y(this, function () {
        var A = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var W = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var g = X('init');
        if (!A['test'](g + 'chain') || !W['test'](g + 'input')) {
            g('0');
        } else {
            X();
        }
    })();
}());
function X(A) {
    function W(g) {
        if (typeof g === 'string') {
            return function (O) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + g / g)['length'] !== 0x1 || g % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        W(++g);
    }
    try {
        if (A) {
            return W;
        } else {
            W(0x0);
        }
    } catch (g) {
    }
}