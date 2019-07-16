// 接口介绍 interface
var sayName = function (o) {
    console.log(o.name);
};
var person = {
    age: 26,
    name: "zzh"
};
sayName(person);
