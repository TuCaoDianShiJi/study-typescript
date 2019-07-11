// const add = (a: number, b: number): number =>{
//     return a + b;
// }

const add = (a: number, b: number): void =>{
    console.log(a + b);
}

add(20, 30);

// 函数指向返回值的类型，可以让调用的地方知道是什么类型的返回值，以便进行处理，void是没有返回值的