// 面向对象
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
}

let m = new Person("zzh", 26);

console.log(`姓名：${m.name}, 年龄：${m.age}`);
console.log(m.sayName());