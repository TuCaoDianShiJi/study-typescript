// 泛型
// 泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
function getArray(items) {
    return new Array().concat(items);
}
var myNumArray = getArray([100, 200, 300]);
var myStrArray = getArray(['杨过', '张无忌', '令狐冲']);
myNumArray.push(400);
myStrArray.push('郭靖');
console.log(myNumArray);
console.log(myStrArray);
