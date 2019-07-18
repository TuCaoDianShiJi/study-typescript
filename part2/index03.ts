// 类型断言
let a:any = 'this is a dog';
let c: any = 'adaddda';

let b = a.split(" ");
// a和c可以是任何类型，编译器可能不能明确知道a和c是哪种类型
// <string>表示把a断言成字符串类型，就是告诉编译器要把a当成字符串，这样就可以调用字符串的一些方法或函数
let d = (<string>c).substring(0, 3);

console.log(b);
console.log(d);