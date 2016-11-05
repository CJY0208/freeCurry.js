
/**
 * default.js
 * @Author ---- CJY [375564567@qq.com]
 * @Date ------ 2016.11.05
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
                });
            };
            return function() {
                return _f.apply(this, _$.apply(this, arguments));
            };
        };
    };
    __.__ = true;
    if (exports !== void 0) {
        if (module !== void 0 && module.exports) exports = module.exports = __;
        exports.__ = __;
    } else root.__ = __;
}.call(this));
