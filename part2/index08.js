// 五种定义函数类型的方法
var a;
a = function () {
};
function fun() {
    return function () {
        console.log('11');
    };
}
var b;
b = function () {
    console.log(22);
};
var c;
c = function (name) {
    return "name";
};
var fn = function (name) {
    return "name";
};
var fn1 = function (name) {
    return "name";
};
