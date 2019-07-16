// 只读属性readonly，对象本身不能调用，new出来的新对象可以调用，不可以改变
class Person{
    readonly age: number = 10;
}

let aPerson = new Person();

console.log(aPerson.age);