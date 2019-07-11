const isNumber = (value: any): value is number =>{
    return typeof value === "number";
}

const isString = (value: any): value is string =>{
    return typeof value === "string";
}

const log = (value: string | number)=>{
    if(isNumber(value)){
        return `your number is ${value}`
    }
    if(isString(value)){
        return `your string is ${value}`
    }
}