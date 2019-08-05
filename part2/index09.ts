// 函数重载 允许用相同名字与不同参数来创建多个函数
// 没有实现的定义
function sum (x:number, y: number): number;
function sum (x:number, y: number, z: number): number;

// 上面两种定义的组合实现
function sum(x: number, y: number, z?: number): number{
    if(typeof z === 'undefined'){
        return x + y;
    }else{
        return x + y + z;
    }
}

let a = sum(1,2,3);
console.log(a);

