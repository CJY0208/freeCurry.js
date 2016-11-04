# default.js

Create one new function with default param which's index you can set.
创建一个可以指定缺省参数位置的新函数

It may be helpful to your Functional programming.
这可能有助于进行函数式编程

# 用法 Usage
```javascript
var __ = require('default.js');

var fn1 = function(x, y, z) {
	console.log(x, y, z);
};

var fn2 = __(fn1)(__, __, 'fixed');
fn2('param1', 'param2');	//param1, param2, fixed

var fn3 = __(fn1)(__, 'fixed', __);
fn3('param1', 'param2');	//param1, fixed, param2
