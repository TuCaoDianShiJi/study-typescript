// 类型别名 type alias, interface可以重复定义，type不能重复定义
type Name = boolean;

let my_name: Name = true;

type User = {
    name: string,
    age: number
}

interface iUser {
    name: string,
    age: number
}

interface iUser {
    email: string
}

// const aUser:{name: string, age: number} = {
//     name: 'zzh',
//     age: 27
// }

const aUser: User = {
    name: "zzh",
    age: 26
}

const user1: iUser ={
    name: 'zzh',
    age: 26,
    email: 'tucaodianshiji'
}