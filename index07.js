var isNumber = function (value) {
    return typeof value === "number";
};
var isString = function (value) {
    return typeof value === "string";
};
var log = function (value) {
    if (isNumber(value)) {
        return "your number is " + value;
    }
    if (isString(value)) {
        return "your string is " + value;
    }
};
