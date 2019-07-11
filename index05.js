var add = function (a) {
    var num = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        num[_i - 1] = arguments[_i];
    }
    return num.reduce(function (total, num) {
        return total + num;
    }, a);
};
var sum = add(12, 45, 455);
console.log(sum);
