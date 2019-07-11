// 默认参数
var add = function (a, b) {
    if (b === void 0) { b = 20; }
    return a + b;
};
// 可选参数
var count = function (a, b) {
    if (b)
        console.log(a + b);
    else
        console.log(a);
};
//默认参数（=），可选参数（?），一般放到参数后面
//默认参数可以不指定类型，会自动判断和计算
count(15);
