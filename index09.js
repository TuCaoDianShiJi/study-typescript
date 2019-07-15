var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 继承和多态
var Person = /** @class */ (function () {
    // 构造方法
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // method方法 可能会对数据进行操作
    Person.prototype.sayName = function () {
        return "\u6211\u7684\u540D\u5B57\u662F--" + this.name;
    };
    Person.prototype.sayHi = function () {
        console.log('hi!');
    };
    return Person;
}());
// extends关键字继承
var Teach = /** @class */ (function (_super) {
    __extends(Teach, _super);
    function Teach() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 更改被继承者的方法，调用方法时，先找到自己本身的方法
    Teach.prototype.sayHi = function () {
        console.log('hello world');
    };
    return Teach;
}(Person));
// new新对象时，可以设置其类型
var aTeach = new Teach('zzh', 26);
aTeach.sayHi();
console.log(aTeach.sayName());
