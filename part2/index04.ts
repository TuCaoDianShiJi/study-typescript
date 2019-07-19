interface Person {
    name: string;
}

interface Teach {
    type: string
}

// 接口继承另外一个接口
interface Programmer extends Person{
    age: number;
}

// 类不能继承多个类，也就是说不能有多个父类，但是能实现多个接口
class P implements Person, Teach{
    name: 'ZZH';
    type: "YUWEN"
    age: 26
}

let p: Programmer = {
    age: 26,
    name: 'zzh'
}

let p1: Teach = {
    type: '111'
}