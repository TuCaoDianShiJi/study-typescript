// 类实现接口
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.greet = function () {
        console.log("hello world");
    };
    return Employee;
}());
var Costomer = /** @class */ (function () {
    function Costomer(age, adress) {
        this.age = age;
        this.adress = adress;
    }
    Costomer.prototype.sayHi = function () {
        console.log("\u6211\u4ECA\u5E74" + this.age + "\u5C81,\u6765\u81EA" + this.adress);
    };
    Costomer.prototype.sayAge = function () {
        return this.age;
    };
    Costomer.prototype.greet = function () {
        console.log("this is a Costomer");
    };
    return Costomer;
}());
var em = new Employee();
var aCostomer = new Costomer(26, 'WUHAN');
aCostomer.sayHi();
em.greet();
