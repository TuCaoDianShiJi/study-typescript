// 枚举类型 enum 值是从0/手动设置开始的数字序号，代码可读性强，可能会常用于下拉框等
enum DaysOfWeek{
    SUN, MON = 100, TUE, WED, THU, FRI, SAT
}

let day:DaysOfWeek;

day = DaysOfWeek.SUN;

console.log(day);