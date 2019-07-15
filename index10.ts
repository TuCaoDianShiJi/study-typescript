// 成员可见性 public > protected > private
class Person {
    name: string;
    age: number;
    adress: string;
    // 构造方法
    protected constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    // method方法 可能会对数据进行操作
    sayName(){
        return `我的名字是--${this.name}`
    }

    // 私有的，只有在内部对象内才能访问，生成的对象调用不了，要调用私有方法，可以在class里定义public的方法来调用
    private sayHi(){
        console.log('hi');
    }

    // protected受保护的，只有在内部对象和子类中才能访问，生成的对象调用不了
    // 子类继承的时候也是继承私有属性和方法，也是要通过继承过来的 public 方法和自己定义的public方法来在外部调用
    protected sayHello(){
        console.log('hello')
    }
}

// let aPerson: Person = new Person('ZZH', 26);

class Teach extends Person{
    constructor(name: string, age: number){
        // super调用父类构造函数的方法，要传入参数
        super(name, age);
    }
}

let aTeact = new Teach('杨过', 18);
