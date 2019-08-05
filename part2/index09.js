function sum(x, y, z) {
    if (z === undefined) {
        return x + y;
    }
    else {
        return x + y + z;
    }
}
var a = sum(1, 2, 3);
console.log(a);
