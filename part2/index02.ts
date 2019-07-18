// 接口可选属性和只读属性
interface Person{
    first_name: string;
    // 可选属性
    last_name?:string;
    // 只读不可修改
    readonly name: string;
}

let aPerson: Person = {
    first_name: 'zhang',
    name: 'zzh'
}