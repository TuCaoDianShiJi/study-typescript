// 继承和多态
class Person {
    name: string;
    age: number;
    adress: string;
    // 构造方法
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    // method方法 可能会对数据进行操作
    sayName(){
        return `我的名字是--${this.name}`
    }

    sayHi(){
        console.log('hi!')
    }
}

// extends关键字继承
class Teach extends Person {
    // 更改被继承者的方法，调用方法时，先找到自己本身的方法
    sayHi(){
        console.log('hello world');
    }
}

// new新对象时，可以设置其类型
let aTeach: Teach = new Teach('zzh', 26);

aTeach.sayHi();
console.log(aTeach.sayName());