// 面向对象
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
    return Person;
}());
var m = new Person("zzh", 26);
console.log("\u59D3\u540D\uFF1A" + m.name + ", \u5E74\u9F84\uFF1A" + m.age);
console.log(m.sayName());
