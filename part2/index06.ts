// 接口Indexable Types 
interface States {
    // 一定是string或者是number
    // [state: string]: Array<number>
    // 这种方式定义的数组没有 push length join 等属性或方法
    [state: number]: string;
}

interface States1 {
    [state: number]: number;
    length: number;
    // push方法必须要设置参数了才能正常调用
    push(a:number): number;
    pop(): number;
}

// let s: States = { 'enabled': [1,2] }

let s1: States1 = [12, 123, 4];

console.log(s1.length);
// console.log(s1.pop())
s1.push(222);
console.log(s1);