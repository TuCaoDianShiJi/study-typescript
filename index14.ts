// 接口介绍 interface
//接口
interface Named {
    name: string,
    age: number,
    // 方法没有方法体，具体的对象中实现方法体
    print(name:string): void
}

// 函数
const sayName = (o: Named) =>{
    o.print('zzh');
    console.log(`my name is ${o.name}`);
}

// 对象
const person: Named = {
    age: 26,
    name: "zzh",
    print: name =>{
        console.log(name)
    }
}

const bottle = {
    litres: 1,
    name: "微信",
    age: 28
}

sayName(person);
// person.print("zzg");
// sayName(bottle);
