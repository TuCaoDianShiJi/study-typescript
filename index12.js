// 只读属性readonly，对象本身不能调用，new出来的新对象可以调用，不可以改变
var Person = /** @class */ (function () {
    function Person() {
        this.age = 10;
    }
    return Person;
}());
var aPerson = new Person();
console.log(aPerson.age);
