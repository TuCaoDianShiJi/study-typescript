// 默认参数
const add = (a: number, b: number=20): number =>{
    return a + b;
}

// 可选参数
const count = (a: number, b?: number): void =>{
    if(b) console.log(a + b);
    else console.log(a);
}

//默认参数（=），可选参数（?），一般放到参数后面
//默认参数可以不指定类型，会自动判断和计算

count(15);