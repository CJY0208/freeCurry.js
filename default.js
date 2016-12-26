
/**
 * default.js
 * @Author ---- CJY [375564567@qq.com]
 * @Date ------ 2016.11.11
 */
(function() {
    var root = this;
    var slice = Array.prototype.slice;
    var __ = function(_f) {
        return function() {
            var args = slice.call(arguments);
            var _$ = function() {
                var _args = slice.call(arguments);
                return args.map(function(arg) {
                    return arg.__ ? _args.shift() : arg;
                }).concat(_args);
            };
            return function() {
                return _f.apply(this, _$.apply(this, arguments));
            };
        };
    };
    __.__ = true;
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) exports = module.exports = __;
        exports.__ = __;
    } else if (typeof define !== 'undefined') {
        define(__);
    } else root.__ = __;
}.call(this));
