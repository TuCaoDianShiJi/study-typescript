// 五种定义函数类型的方法
let a: any;
a = function(): void {

}
function fun(): any{
    return function(): void{
        console.log('11')
    }
}

let b: Function;
b = function(): void{
    console.log(22)
}

let c: (para: string) => string;
c = function(name: string): string{
    return `name`;
}

type d = (para: string) => string;
const fn: d = (name: string): string => {
    return `name`
}

interface e {
    (pare: string): string
}

const fn1: e = function(name: string): string{
    return `name`
}