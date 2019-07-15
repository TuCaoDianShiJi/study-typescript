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
// 成员可见性 public > protected > private
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
    // 私有的，只有在内部对象内才能访问，生成的对象调用不了，要调用私有方法，可以在class里定义public的方法来调用
    Person.prototype.sayHi = function () {
        console.log('hi');
    };
    // protected受保护的，只有在内部对象和子类中才能访问，生成的对象调用不了
    // 子类继承的时候也是继承私有属性和方法，也是要通过继承过来的 public 方法和自己定义的public方法来在外部调用
    Person.prototype.sayHello = function () {
        console.log('hello');
    };
    return Person;
}());
// let aPerson: Person = new Person('ZZH', 26);
var Teach = /** @class */ (function (_super) {
    __extends(Teach, _super);
    function Teach(name, age) {
        // super调用父类构造函数的方法，要传入参数
        return _super.call(this, name, age) || this;
    }
    return Teach;
}(Person));
var aTeact = new Teach('杨过', 18);
