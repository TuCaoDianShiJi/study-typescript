// 非空断言操作符
function splitInHalf(str) {
    var checkString = function () {
        if (str === null || str === undefined) {
            str = 'test';
        }
    };
    checkString();
    return str.substring(0, str.length / 2);
}
var b;
var a = splitInHalf(b);
console.log(a);
