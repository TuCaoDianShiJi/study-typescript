interface Person{
    name: string;

    greet(): void;
}

// 类实现接口
class Employee implements Person{
    name: string;

    greet(): void{
        console.log("hello world");
    }
}

class Costomer implements Person{
    name: string;
    age: number;
    adress: string;

    constructor(age: number, adress: string){
        this.age = age;
        this.adress = adress;
    }

    sayHi():void{
        console.log(`我今年${this.age}岁,来自${this.adress}`);
    }

    sayAge(): number{
        return this.age;
    }

    greet(): void{
        console.log("this is a Costomer");
    }
}

let em = new Employee();
let aCostomer = new Costomer(26, 'WUHAN');
aCostomer.sayHi();

em.greet();