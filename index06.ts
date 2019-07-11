const log = (value: any) => {
    console.log(typeof(value));
    if(typeof(value) === "number"){
        return `your number is ${value}`
    }
    if(typeof(value) === "string"){
        return `your string is ${value}`
    }
    // 慎用any，可先自行判断了，抛出一个异常
    throw new Error(`Expected string or number, got ${value}.`);
}

console.log(log(false));