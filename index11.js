// 静态属性和方法 static
var Person = /** @class */ (function () {
    function Person() {
    }
    // 静态方法
    Person.getStaticAge = function () {
        return "age = " + Person.age;
    };
    Person.prototype.getAge = function () {
        return "my age is " + Person.age;
    };
    // 静态属性
    Person.age = 10;
    return Person;
}());
var aPerson = new Person();
console.log(Person.age);
console.log(aPerson.getAge());
console.log(Person.getStaticAge());
