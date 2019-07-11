const add = (a: number, ...num: number[]): number => {
    return num.reduce(function(total, num) {
        return total + num
    }, a);
}

let sum = add(12, 45, 455);
console.log(sum);