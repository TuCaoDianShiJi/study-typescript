// 枚举类型 enum 值是从0/手动设置开始的数字序号，代码可读性强，可能会常用于下拉框等
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUN"] = 0] = "SUN";
    DaysOfWeek[DaysOfWeek["MON"] = 100] = "MON";
    DaysOfWeek[DaysOfWeek["TUE"] = 101] = "TUE";
    DaysOfWeek[DaysOfWeek["WED"] = 102] = "WED";
    DaysOfWeek[DaysOfWeek["THU"] = 103] = "THU";
    DaysOfWeek[DaysOfWeek["FRI"] = 104] = "FRI";
    DaysOfWeek[DaysOfWeek["SAT"] = 105] = "SAT";
})(DaysOfWeek || (DaysOfWeek = {}));
var day;
day = DaysOfWeek.SUN;
console.log(day);
