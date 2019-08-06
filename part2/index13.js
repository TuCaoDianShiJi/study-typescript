// 在class中使用泛型
var List = /** @class */ (function () {
    function List(elements) {
        this.data = elements;
    }
    List.prototype.add = function (t) {
        this.data.push(t);
    };
    List.prototype.remove = function (t) {
        var index = this.data.indexOf(t);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    };
    List.prototype.asArray = function () {
        return this.data;
    };
    return List;
}());
var list = new List([100, 200, 300]);
list.add(400);
console.log(list);
list.remove(100);
console.log(list);
var Pair = /** @class */ (function () {
    function Pair(first, second) {
        this._first = first;
        this._second = second;
    }
    Pair.prototype.getFirst = function () {
        return this._first;
    };
    Pair.prototype.getSecond = function () {
        return this._second;
    };
    return Pair;
}());
var p = new Pair(false, 'zzh');
console.log(p.getFirst());
console.log(p.getSecond());
