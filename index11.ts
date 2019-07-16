// 静态属性和方法 static
class Person {

    // 静态属性
    static age: number = 10;

    // 静态方法
    static getStaticAge(){
        return `age = ${Person.age}`;
    }

    getAge(){
        return `my age is ${Person.age}`;
    }
}

let aPerson = new Person();

console.log(Person.age);
console.log(aPerson.getAge());
console.log(Person.getStaticAge());