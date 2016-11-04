
/**
 * default.js
 * @Author ---- CJY [375564567@qq.com]
 * @Date ------ 2016.11.04
 */
(function() {
    var root = this;
    var slice = Array.prototype.slice;
    var __ = function(_f) {
        return function() {
            var fixed_param = [];
            slice.call(arguments).forEach(function(arg, idx) {
                if (!arg.__) fixed_param.push([arg, idx]);
            });
            var _$ = function() {
                var args = slice.call(arguments);
                fixed_param.forEach(function(fp) {
                    if (args.length < fp[1] + 1) args.length = fp[1] + 1;
                    args.splice(fp[1], 0, fp[0]);
                });
                return args;
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
    } else root.__ = __;
}.call(this));
