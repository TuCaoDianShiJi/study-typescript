// 非空断言操作符
// tsc index.ts --strictNullChecks 严格的空检查
function splitInHalf(str: string | null): string{
    let checkString = function(){
        if(str === null || str === undefined){
            str = 'test';
        }
    }
    checkString();
    // 加了!表示不能为空
    return str!.substring(0, str!.length/2);
}

let b;

let a: string = splitInHalf(b);

console.log(a);